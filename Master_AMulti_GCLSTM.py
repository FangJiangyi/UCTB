import os

import warnings
warnings.filterwarnings("ignore")

shared_params_amulti_gclstm = ('python -m Experiment.AMulti_GCLSTM '
                               '--Dataset Bike '
                               # '--City NYC'
                               # '--T 6 '
                               # '--K 1 '
                               # '--L 1 '
                               # '--Graph Correlation '
                               '--GLL 1 '
                               '--LSTMUnits 64 '
                               '--GALUnits 64 '
                               '--GALHeads 2 '
                               '--DenseUnits 32 '
                               '--DataRange All '
                               '--TrainDays All '
                               '--TC 0 '
                               '--TD 1000 '
                               '--TI 500 '
                               '--Epoch 5000 '
                               '--Train True '
                               '--lr 1e-3 '
                               '--patience 0.1 '
                               '--ESlength 50 '
                               '--BatchSize 64 '
                               '--Device 0 '
                               # '--CodeVersion Debug0321 '
                               '--Group Basic')

if __name__ == "__main__":

    os.system(shared_params_amulti_gclstm + ' --T 6 --City NYC --Graph Distance-Correlation-Interaction'
                                            ' --K 1,1,1 --L 1,1,1 --CodeVersion T6')

    os.system(shared_params_amulti_gclstm + ' --T 6 --City DC --Graph Distance-Correlation-Interaction'
                                            ' --K 1,1,1 --L 1,1,1 --CodeVersion T6')

    os.system(shared_params_amulti_gclstm + ' --T 6 --City Chicago --Graph Distance-Correlation-Interaction'
                                            ' --K 1,1,1 --L 1,1,1 --CodeVersion T6')

    os.system(shared_params_amulti_gclstm + ' --T 12 --City NYC --Graph Distance-Correlation-Interaction'
                                            ' --K 1,1,1 --L 1,1,1 --CodeVersion T12')

    os.system(shared_params_amulti_gclstm + ' --T 12 --City DC --Graph Distance-Correlation-Interaction'
                                            ' --K 1,1,1 --L 1,1,1 --CodeVersion T12')

    os.system(shared_params_amulti_gclstm + ' --T 12 --City Chicago --Graph Distance-Correlation-Interaction'
                                             ' --K 1,1,1 --L 1,1,1 --CodeVersion T12')