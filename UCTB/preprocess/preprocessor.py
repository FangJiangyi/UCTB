import numpy as np

class Normalize(object):
    def __init__(self, X):
        self.__min = np.min(X)
        self.__max = np.max(X)

    def min_max_normal(self, X):
        return (X - self.__min) / (self.__max - self.__min)

    def min_max_denormal(self, X):
        return X * (self.__max - self.__min) + self.__min

    def white_normal(self):
        pass


class MoveSample(object):
    def __init__(self, feature_step, feature_stride, feature_length, target_length):
        self.feature_step = feature_step
        self.feature_stride = feature_stride
        self.feature_length = feature_length
        self.target_length = target_length

    def general_move_sample(self, data):
        feature = []
        target = []
        for i in range(len(data) - self.feature_length - (self.feature_step-1) * self.feature_stride - self.target_length + 1):
            feature.append([data[i + step*self.feature_stride: i + step*self.feature_stride + self.feature_length]
                            for step in range(self.feature_step)])
            target.append(data[i + (self.feature_step-1) * self.feature_stride + self.feature_length:\
                               i + (self.feature_step-1) * self.feature_stride + self.feature_length + self.target_length])

        return np.array(feature), np.array(target)


class ST_MoveSample(object):
    def __init__(self, C_T, P_T, T_T, target_length=1, daily_slots=24):
        self._c_t = C_T
        self._p_t = P_T
        self._t_t = T_T
        self._target_length = target_length
        self._daily_slots = daily_slots

        # 1 init Move_Sample object
        self.move_sample_closeness = MoveSample(feature_step=1, feature_stride=1,
                                                feature_length=self._c_t, target_length=self._target_length)

        self.move_sample_period = MoveSample(feature_step=self._p_t + 1, feature_stride=int(self._daily_slots),
                                             feature_length=self._c_t + 1, target_length=0)

        self.move_sample_trend = MoveSample(feature_step=self._t_t + 1, feature_stride=int(self._daily_slots) * 7,
                                            feature_length=self._c_t + 1, target_length=0)

    def move_sample(self, data):

        # 2 general move sample
        closeness, y = self.move_sample_closeness.general_move_sample(data)
        period, _ = self.move_sample_period.general_move_sample(data)
        trend, _ = self.move_sample_trend.general_move_sample(data)

        # 3 remove the front part
        closeness = closeness[-min(len(period), len(trend)):]
        y = y[-min(len(period), len(trend)):]
        period = period[-min(len(period), len(trend)):]
        trend = trend[-min(len(period), len(trend)):]

        # 4 remove tail of period and trend
        period = period[:, :-1, :, :]
        trend = trend[:, :-1, :, :]

        closeness = np.transpose(closeness, [0, 1, 3, 2])
        period = np.transpose(period, [0, 1, 3, 2])
        trend = np.transpose(trend, [0, 1, 3, 2])
        y = np.transpose(y, [0, 2, 1])

        return closeness, period, trend, y

class SplitData(object):

    @staticmethod
    def split_data(data, ratio_list):
        if np.sum(ratio_list) != 1:
            ratio_list = np.array(ratio_list)
            ratio_list = ratio_list / np.sum(ratio_list)
        return [data[int(sum(ratio_list[0:e])*len(data)):
                     int(sum(ratio_list[0:e+1])*len(data))] for e in range(len(ratio_list))]

    @staticmethod
    def split_feed_dict(feed_dict, sequence_length, ratio_list):
        if np.sum(ratio_list) != 1:
            ratio_list = np.array(ratio_list)
            ratio_list = ratio_list / np.sum(ratio_list)

        return [{key: value[int(sum(ratio_list[0:e])*len(value)):int(sum(ratio_list[0:e+1])*len(value))]
                 if len(value) == sequence_length else value for key, value in feed_dict.items()}
                for e in range(len(ratio_list))]