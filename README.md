# UCTB (Urban Computing Tool Box)

 [![Python](https://img.shields.io/badge/python-3.6%7C3.7-blue)]() [![PyPI](https://img.shields.io/badge/pypi%20package-v0.3.5-sucess)] [![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)]() [![Documentation](https://img.shields.io/badge/api-reference-blue.svg)]

------

**Urban Computing Tool Box** is a package providing [**ST paper list**], [**urban datasets**], [**spatial-temporal prediction models**], and [**visualization tools**] for various urban computing tasks, such as traffic prediction, crowd flow prediction, ride-sharing demand prediction, etc. 

UCTB is a flexible and open package. You can use the data we provided or use your data, and the data structure is well stated in the [**document**]. 

------

## Urban Datasets

UCTB releases **a public dataset repository** including the following applications in 4 scenarios, with the detailed information provided in the table below. We are constantly working to release more datasets in the future.

| **Application**  |        **City**        |       Time Span       | **Interval** |                           **Link**                           |
| :--------------: | :--------------------: | :-------------------: | :----------: | :----------------------------------------------------------: |
|   Bike-sharing   |          NYC           | 2013.07.01-2017.09.30 | 5 & 60 mins  | [5 mins]  [60 mins] |
|   Bike-sharing   |        Chicago         | 2013.07.01-2017.09.30 | 5 & 60 mins  | [5 mins] [60 mins] |
|   Bike-sharing   |           DC           | 2013.07.01-2017.09.30 | 5 & 60 mins  | [5 mins] [60 mins] |
|       Bus        |          NYC           | 2022.02.01-2024.01.13 |   60 mins    | [60 mins] |
|  Vehicle Speed   |           LA           | 2012.03.01-2012.06.28 |    5 mins    | [5 mins] |
|  Vehicle Speed   |          BAY           | 2017.01.01-2017.07.01 |    5 mins    | [5 mins] |
| Pedestrian Count |       Melbourne        | 2021.01.01-2022.11.01 |   60 mins    | [60 mins] |
|   Ride-sharing   |  Chicago (community)   | 2013.01.01-2018.01.01 |   15 mins    | [15 mins] |
|   Ride-sharing   | Chicago (census tract) | 2013.01.01-2018.01.01 |   15 mins    | [15 mins] |
|   Ride-sharing   |          NYC           | 2009.01.01-2023.06.01 |    5 mins    | [5 mins] |
|      Metro       |          NYC           | 2022.02.01-2023.12.21 |   60 mins    | [60 mins] |

We provide [detailed documents] about how to use these datasets.

------

## Prediction Models

Currently, the ST prediction model package supports the following models: (This toolbox is constructed based on some open-source repos. We appreciate these awesome implements. [See more details]). 

|  Model  |   Data Format   |   Spatial Modeling Technique   |Graph Type|Temporal Modeling Technique|Temporal Knowledge|Module|
| :--: | :--: | :--: |:--:|:--:|:--:|:--:|
|   ARIMA   |   Both   |   N/A   |N/A|SARIMA|Closeness|``UCTB.model.ARIMA``|
|   HM   |   Both   |   N/A   |N/A|N/A|Closeness|``UCTB.model.HM``|
|   HMM   |   Both   |   N/A   |N/A|HMM|Closeness|``UCTB.model.HMM``|
|   XGBoost   |   Both   |   N/A   |N/A|XGBoost|Closeness|``UCTB.model.XGBoost``|
|   DeepST [[SIGSPATIAL 2016]](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/09/DeepST-SIGSPATIAL2016.pdf)  |   Grid   |   CNN   |N/A|CNN|Closeness, Period, Trend|``UCTB.model.DeepST``|
|   ST-ResNet [[AAAI 2017]](https://arxiv.org/pdf/1610.00081.pdf)  |   Grid   |   CNN   |N/A|CNN|Closeness, Period, Trend|``UCTB.model.ST_ResNet``|
|   DCRNN [[ICLR 2018]](https://arxiv.org/pdf/1707.01926.pdf) |   Node   |   GNN   |**Prior** (Sensor Network)|RNN|Closeness|``UCTB.model.DCRNN``|
|   GeoMAN [[IJCAI 2018]](https://www.ijcai.org/proceedings/2018/0476.pdf) |   Node   |   Attention   |**Prior** (Sensor Networks)|Attention+LSTM|Closeness|``UCTB.model.GeoMAN``|
|   STGCN [[IJCAI 2018]](https://www.ijcai.org/proceedings/2018/0505.pdf) |   Node   |   GNN   |**Prior** (Traffic Network)|Gated CNN|Closeness|``UCTB.model.STGCN``|
|   GraphWaveNet [[IJCAI 2019]](https://www.ijcai.org/proceedings/2019/0264.pdf)  |   Node   |   GNN   |**Prior** (Sensor Network) + **Adaptive**|TCN|Closeness|``UCTB.model.GraphWaveNet``|
|   ASTGCN [[AAAI 2019]](https://ojs.aaai.org/index.php/AAAI/article/view/3881) |   Node   |   GNN+Attention   |**Prior** (Traffic Network)|Attention|Closeness, Period, Trend|``UCTB.model.ASTGCN``|
|  ST-MGCN [[AAAI 2019]](https://ojs.aaai.org/index.php/AAAI/article/view/4247) |   Node   |   GNN   |**Prior** (Neighborhood, Functional similarity, Transportation connectivity)|CGRNN|Closeness|``UCTB.model.ST_MGCN``|
|   GMAN [[AAAI 2020]](https://ojs.aaai.org/index.php/AAAI/article/view/5477/5333) |   Node   |   Attention   |**Prior** (Road Network)|Attention|Closeness|``UCTB.model.GMAN``|
|   STSGCN [[AAAI 2020]](https://ojs.aaai.org/index.php/AAAI/article/view/5438) |   Node   |   GNN+Attention   |**Prior** (Spatial Network)|Attention|Closeness|``UCTB.model.STSGCN``|
|  AGCRN [[NeurIPS 2020]](https://proceedings.neurips.cc/paper/2020/file/ce1aad92b939420fc17005e5461e6f48-Paper.pdf) |   Node   |   GNN   |**Adaptive**|RNN|Closeness|``UCTB.model.AGCRN``|
|  MTGNN [[KDD 2020]](https://dl.acm.org/doi/abs/10.1145/3394486.3403118) |   Node   |   GNN   |**Adaptive**|TCN|Closeness|``UCTB.model.MTGNN``|
|   STMeta [[TKDE 2021]](https://arxiv.org/abs/2009.09379)  |   Node   |   GNN   |**Prior** (Proximity, Functionality, Interaction/Same-line)|LSTM/RNN|Closeness, Period, Trend|``UCTB.model.STMeta``|

------

## Visualization Tool

The Visualization tool integrates visualization, error localization, and error diagnosis. Specifically, it allows data to be uploaded and provides interactive visual charts to show model errors, combined with spatiotemporal knowledge for error diagnosis.

<img src="https://uctb.github.io/UCTB/sphinx/md_file/src/image/vis_5.png" alt=".img" style="zoom: 33%;" />

Welcome to visit the [website](http://39.107.116.221/) for a trial! 

## Installation

UCTB toolbox may not work successfully with the upgrade of some packages. We thus encourage you to use the specific version of packages to avoid unseen errors. ***To avoid potential conflict, we highly recommend you install UCTB vis Anaconda.*** The installation details are in our [documents]. 


