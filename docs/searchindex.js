Search.setIndex({docnames:["APIReference","UCTB","UCTB.dataset","UCTB.evaluation","UCTB.model","UCTB.model_unit","UCTB.preprocess","UCTB.train","UCTB.utils","index","md_file/all_results","md_file/index","md_file/installation","md_file/introduction","md_file/quickstart","md_file/src/image/README","md_file/static/MakeDatasetDiDi","md_file/static/MakeDatasetDiDi_TTI","md_file/static/current_supported_models","md_file/static/experiment_on_bike","md_file/static/experiment_on_chargestation","md_file/static/experiment_on_didi","md_file/static/experiment_on_metro","md_file/static/parameter_search","md_file/static/preprocess_api","md_file/static/quick_start","md_file/static/stable_test","md_file/static/stmeta","md_file/static/transfer_record","md_file/tutorial","modules","update_guide"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,sphinx:56},filenames:["APIReference.rst","UCTB.rst","UCTB.dataset.rst","UCTB.evaluation.rst","UCTB.model.rst","UCTB.model_unit.rst","UCTB.preprocess.rst","UCTB.train.rst","UCTB.utils.rst","index.rst","md_file\\all_results.md","md_file\\index.md","md_file\\installation.md","md_file\\introduction.md","md_file\\quickstart.md","md_file\\src\\image\\README.md","md_file\\static\\MakeDatasetDiDi.md","md_file\\static\\MakeDatasetDiDi_TTI.md","md_file\\static\\current_supported_models.md","md_file\\static\\experiment_on_bike.md","md_file\\static\\experiment_on_chargestation.md","md_file\\static\\experiment_on_didi.md","md_file\\static\\experiment_on_metro.md","md_file\\static\\parameter_search.md","md_file\\static\\preprocess_api.md","md_file\\static\\quick_start.md","md_file\\static\\stable_test.md","md_file\\static\\stmeta.md","md_file\\static\\transfer_record.md","md_file\\tutorial.md","modules.rst","update_guide.txt"],objects:{"":{UCTB:[1,0,0,"-"]},"UCTB.dataset":{data_loader:[2,0,0,"-"],dataset:[2,0,0,"-"]},"UCTB.dataset.data_loader":{NodeTrafficLoader:[2,1,1,""]},"UCTB.dataset.data_loader.NodeTrafficLoader":{LM:[2,2,1,""],daily_slots:[2,2,1,""],dataset:[2,2,1,""],external_dim:[2,2,1,""],make_concat:[2,3,1,""],station_number:[2,2,1,""],train_closeness:[2,2,1,""],train_y:[2,2,1,""]},"UCTB.dataset.dataset":{DataSet:[2,1,1,""]},"UCTB.dataset.dataset.DataSet":{data:[2,2,1,""],node_monthly_interaction:[2,2,1,""],node_station_info:[2,2,1,""],node_traffic:[2,2,1,""],time_fitness:[2,2,1,""],time_range:[2,2,1,""]},"UCTB.evaluation":{metric:[3,0,0,"-"]},"UCTB.evaluation.metric":{mape:[3,4,1,""],rmse:[3,4,1,""]},"UCTB.model":{ARIMA:[4,0,0,"-"],DCRNN:[4,0,0,"-"],DeepST:[4,0,0,"-"],GeoMAN:[4,0,0,"-"],HM:[4,0,0,"-"],STMeta:[4,0,0,"-"],ST_MGCN:[4,0,0,"-"],ST_ResNet:[4,0,0,"-"],XGBoost:[4,0,0,"-"]},"UCTB.model.ARIMA":{ARIMA:[4,1,1,""]},"UCTB.model.ARIMA.ARIMA":{adf_test:[4,3,1,""],get_order:[4,3,1,""],predict:[4,3,1,""]},"UCTB.model.DCRNN":{DCRNN:[4,1,1,""]},"UCTB.model.DCRNN.DCRNN":{build:[4,3,1,""]},"UCTB.model.DeepST":{DeepST:[4,1,1,""]},"UCTB.model.DeepST.DeepST":{build:[4,3,1,""]},"UCTB.model.GeoMAN":{GeoMAN:[4,1,1,""],input_transform:[4,4,1,""],split_timesteps:[4,4,1,""]},"UCTB.model.GeoMAN.GeoMAN":{build:[4,3,1,""]},"UCTB.model.HM":{HM:[4,1,1,""]},"UCTB.model.HM.HM":{predict:[4,3,1,""]},"UCTB.model.STMeta":{STMeta:[4,1,1,""]},"UCTB.model.STMeta.STMeta":{build:[4,3,1,""]},"UCTB.model.ST_MGCN":{ST_MGCN:[4,1,1,""]},"UCTB.model.ST_MGCN.ST_MGCN":{build:[4,3,1,""]},"UCTB.model.ST_ResNet":{ST_ResNet:[4,1,1,""]},"UCTB.model.ST_ResNet.ST_ResNet":{build:[4,3,1,""]},"UCTB.model.XGBoost":{XGBoost:[4,1,1,""]},"UCTB.model.XGBoost.XGBoost":{fit:[4,3,1,""],predict:[4,3,1,""]},"UCTB.model_unit":{BaseModel:[5,0,0,"-"],DCRNN_CELL:[5,0,0,"-"],GraphModelLayers:[5,0,0,"-"],ST_RNN:[5,0,0,"-"]},"UCTB.model_unit.BaseModel":{BaseModel:[5,1,1,""]},"UCTB.model_unit.BaseModel.BaseModel":{build:[5,3,1,""],close:[5,3,1,""],fit:[5,3,1,""],load:[5,3,1,""],load_event_scalar:[5,3,1,""],predict:[5,3,1,""],save:[5,3,1,""]},"UCTB.model_unit.DCRNN_CELL":{DCGRUCell:[5,1,1,""]},"UCTB.model_unit.DCRNN_CELL.DCGRUCell":{call:[5,3,1,""],compute_output_shape:[5,3,1,""],output_size:[5,3,1,""],state_size:[5,3,1,""]},"UCTB.model_unit.GraphModelLayers":{GAL:[5,1,1,""],GCL:[5,1,1,""],GraphBuilder:[5,1,1,""]},"UCTB.model_unit.GraphModelLayers.GAL":{add_ga_layer_matrix:[5,3,1,""],add_residual_ga_layer:[5,3,1,""],attention_merge_weight:[5,3,1,""]},"UCTB.model_unit.GraphModelLayers.GCL":{add_gc_layer:[5,3,1,""],add_multi_gc_layers:[5,3,1,""]},"UCTB.model_unit.GraphModelLayers.GraphBuilder":{adjacent_to_laplacian:[5,3,1,""],correlation_adjacent:[5,3,1,""],distance_adjacent:[5,3,1,""],haversine:[5,3,1,""],interaction_adjacent:[5,3,1,""]},"UCTB.model_unit.ST_RNN":{GCLSTMCell:[5,1,1,""]},"UCTB.model_unit.ST_RNN.GCLSTMCell":{call:[5,3,1,""]},"UCTB.preprocess":{preprocessor:[6,0,0,"-"],time_utils:[6,0,0,"-"]},"UCTB.preprocess.preprocessor":{Normalizer:[6,1,1,""],ST_MoveSample:[6,1,1,""],SplitData:[6,1,1,""]},"UCTB.preprocess.preprocessor.Normalizer":{min_max_denormal:[6,3,1,""],min_max_normal:[6,3,1,""]},"UCTB.preprocess.preprocessor.ST_MoveSample":{move_sample:[6,3,1,""]},"UCTB.preprocess.preprocessor.SplitData":{split_data:[6,3,1,""],split_feed_dict:[6,3,1,""]},"UCTB.preprocess.time_utils":{is_valid_date:[6,4,1,""],is_work_day_america:[6,4,1,""],is_work_day_china:[6,4,1,""]},"UCTB.train":{EarlyStopping:[7,0,0,"-"],MiniBatchTrain:[7,0,0,"-"]},"UCTB.train.EarlyStopping":{EarlyStopping:[7,1,1,""],EarlyStoppingTTest:[7,1,1,""]},"UCTB.train.EarlyStopping.EarlyStopping":{__best:[7,2,1,""],__p:[7,2,1,""],__patience:[7,2,1,""],__record_list:[7,2,1,""],stop:[7,3,1,""]},"UCTB.train.EarlyStopping.EarlyStoppingTTest":{__best:[7,2,1,""],__p_value_threshold:[7,2,1,""],__record_list:[7,2,1,""],__test_length:[7,2,1,""],stop:[7,3,1,""]},"UCTB.train.MiniBatchTrain":{MiniBatchFeedDict:[7,1,1,""],MiniBatchTrain:[7,1,1,""],MiniBatchTrainMultiData:[7,1,1,""]},"UCTB.train.MiniBatchTrain.MiniBatchFeedDict":{get_batch:[7,3,1,""],restart:[7,3,1,""],shuffle:[7,3,1,""]},"UCTB.train.MiniBatchTrain.MiniBatchTrain":{get_batch:[7,3,1,""],restart:[7,3,1,""],shuffle:[7,3,1,""]},"UCTB.train.MiniBatchTrain.MiniBatchTrainMultiData":{get_batch:[7,3,1,""],restart:[7,3,1,""],shuffle:[7,3,1,""]},"UCTB.utils":{multi_threads:[8,0,0,"-"]},"UCTB.utils.multi_threads":{multiple_process:[8,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"1080ti":[19,20],"10h":26,"7500m":26,"8700k":[19,20],"\u4e00\u5171\u6709428\u79cdpoi":28,"\u4e09\u4e2a\u57ce\u5e02\u7684poi\u6570\u91cf\u4e0echeck":28,"\u4e4b\u95f4":28,"\u5206\u522b\u4e3a\u5de5\u4f5c\u65e5":28,"\u5230":28,"\u534a\u5f84\u4e3a50km\u7684poi\u6570\u91cf":28,"\u5373\u6bcf\u4e2a\u7ad9\u70b9\u6709428\u7ef4\u7279\u5f81":28,"\u5373\u6bcf\u4e2a\u7ad9\u70b9\u7684\u7279\u5f81\u7ef4\u5ea6\u4e3a48":28,"\u53f3\u4fa7\u4e3a":28,"\u5404\u4e2a\u81ea\u884c\u8f66\u7ad9\u70b9\u9644\u8fd11km\u7684checkin\u603b\u6570\u91cf":28,"\u5747\u503c":26,"\u57ce\u5e02":28,"\u57ce\u5e02\u4ea4\u901a\u6307\u6570":17,"\u591a\u6b21\u5b9e\u9a8c\u7ed3\u679c":26,"\u5b9e\u9a8c\u7f16\u53f7":26,"\u5de5\u4f5c\u65e511707":28,"\u5de5\u4f5c\u65e52549":28,"\u5de5\u4f5c\u65e56049":28,"\u5de6\u4fa7\u4e3a":28,"\u5e73\u5747\u8017\u65f6":26,"\u6210\u90fd\u5e02":17,"\u6309\u7167\u5de5\u4f5c\u65e5\u548c\u8282\u5047\u65e5\u5206\u5f00":28,"\u65b0":17,"\u65e5\u5747check":28,"\u65f6\u95f4\u8303\u56f4":28,"\u6682\u65f6\u53ea\u8dd1\u4e864\u6b21":26,"\u6700\u7ec8\u7ed3\u679c":26,"\u6807\u51c6\u5dee":26,"\u6a21\u578b\u7248\u672c\u542b\u4e49":26,"\u6bcf\u4e2a\u7ad9\u70b9\u7edf\u8ba1\u9644\u8fd11km\u51fa\u73b0\u7684poi\u7c7b\u578b":28,"\u6bcf\u6b21\u5b9e\u9a8c\u8017\u65f6":26,"\u6bcf\u6b21\u5b9e\u9a8c\u8017\u65f6\u7ea6":26,"\u6d4e\u5357\u5e02":17,"\u6d77\u53e3\u5e02":17,"\u6df1\u5733\u5e02":17,"\u7c97\u7565\u8ba1\u7b97\u6240\u6709\u7ad9\u70b9\u9644\u8fd11km\u7684checkin\u6570\u91cf\u603b\u548c":28,"\u7ea2\u8272\u4ee3\u8868\u5dee\u4e8efinetun":28,"\u7eff\u8272\u7684\u70b9\u8868\u793atransfer\u6548\u679c\u597d\u4e8efinetun":28,"\u8282\u5047\u65e511358":28,"\u8282\u5047\u65e52692":28,"\u8282\u5047\u65e55450":28,"\u8282\u5047\u65e5\u768424\u5c0f\u65f6checkin":28,"\u82cf\u5dde\u5e02":17,"\u897f\u5b89\u5e02":17,"\u8ba1\u7b97":28,"\u8ba1\u7b97\u57ce\u5e02\u4e2d\u5fc3\u4e3a\u539f\u70b9":28,"\u8bad\u7ec3\u6837\u672c\u6570\u91cf":28,"case":29,"class":[2,4,5,6,7,13,29],"default":[2,4,5,6,7,10,20],"final":[5,8,16,29],"float":[2,3,4,5,7],"function":[2,4,5,8,29],"import":[11,14,25,29],"in\u6570\u91cf":28,"int":[2,4,5,6,7,8,29],"long":[10,29],"new":[7,10,19,29],"null":7,"poi\u6570\u91cf":28,"public":29,"return":[2,4,5,6,7,8,29],"rmse\u503c":26,"short":[10,19,20,21,22,29],"static":[4,5,6,7],"super":29,"true":[2,4,5,6,7,11,14,26,29],"try":[25,29],"veli\u010dkovi\u0107":10,And:[11,12,29],For:[7,17,29],Its:[2,7],The:[2,4,5,6,7,8,10,11,12,16,19,20,29],There:7,These:[4,29],Use:[9,19,20],Used:2,Using:[18,25],With:29,__best:7,__init__:[5,29],__p:7,__p_value_threshold:7,__patienc:7,__record_list:7,__test_length:7,_graph:29,_input:29,_op:29,_output:29,abnorm:17,about:[19,20,21,22,29],abov:29,accept:[8,29],accord:[2,4,6,7,17,29],account:29,accus:29,acquir:29,activ:[4,5],actual:[16,17],adam:4,adamoptim:29,add:[5,20],add_ga_layer_matrix:5,add_gc_lay:5,add_multi_gc_lay:5,add_residual_ga_lay:5,add_summari:[],added:5,adding:5,addit:5,adf_test:4,adjacent_matrix:5,adjacent_to_laplacian:5,adjust:4,after:[5,16,17],aggreg:[5,10],alajali:18,algorithm:[4,18],all:[2,4,8,10,23,26,29],almost:5,alpha:5,alreadi:[11,12],also:[2,5,11,12,29],alwai:18,america:6,among:[8,18],amp:10,analysi:4,anonym:16,api:[4,9,19,20,21,22,29],apidoc:31,app:17,appen:16,append:[5,7,25,29],applic:[10,29],approxim:[4,5,16],apr:28,arbitrari:2,architectur:[18,29],area:18,arg:[4,5,10],argu:4,argument:5,arima:[0,1,10,11,13,19,20,21,22,30],arma:4,arrai:[5,25,29],arrang:2,array_lik:4,art:[11,13],as_default:29,assum:[5,18],attent:[4,5,10],attention_merge_weight:5,attribut:[2,4,10,19,20,21,22],augment:4,auto:[4,5],auto_load_model:5,automat:5,autoregress:4,averag:[4,7,17,19,20,21,22],axi:[4,25,29],back:[12,13,18,19,20,21,22,29],base:[2,4,5,6,7,10,11,13,29],baselin:23,basemodel:[0,1,4,29,30],bash:[11,12],basi:18,basic:[2,29],basiclstmcel:29,batch:[4,5,7,29],batch_siz:[3,5,7,10,29],batchsiz:26,becom:17,befor:5,begin:29,beij:[10,20],being:18,below:[],bengio:10,best:[7,10],better:[7,29],between:[2,5,10],bia:5,bidirect:18,bike:[4,9,14,20,25,29],bike_chicago:10,bike_dc:10,bike_nyc:10,bikeshar:29,bin:[11,12],binar:5,blob:[],bool:[2,4,5,7],boost:[4,18],borrow:29,both:[4,5,11,13,16,18],bound:16,boundari:17,build:[2,4,5,9,13,14,16,31],build_graph:[],build_ord:[],built:[4,5,19,20],cach:5,cache_volum:5,calcul:[4,5,6,17],call:[5,6,7,29],callabl:4,can:[2,4,5,6,7,10,11,12,13,29],captur:[4,18],casanova:10,castleliang:[4,18],cell:5,certain:[2,5],chai:10,chang:[6,7],channel:5,chapter:[11,13],charg:[9,11,29],chargest:10,chargestation_beij:10,chebyshev:[4,5],check:[7,29],checkin_sim:[],checkin_sim_sd:[],chen:18,chengdu:[10,16,17,21,29],chengdu_gps_20161001:16,chengdu_gps_20161002:16,chengdu_gps_20161130:16,chengduoct2016:[],chicago:[10,19,20,29],china:6,chinesecalendar:[11,12],chongq:[10,22],chux:[16,17,29],circl:5,citi:[2,10,11,14,16,17,19,20,25,26,29],city_district:17,citywid:[4,18],ck1manozn0edb1dpmvtzle2cp:[],cl_decay_step:4,classic:29,clip:4,close:[2,4,5,6,10,18,20,29],closeness_featur:[4,11,14,25],closeness_len:[2,4,6,11,14,25,29],closenss:6,cmd:31,code:[4,5,8,10,16,19,20,31],code_vers:[4,5,29],codevers:26,coeffici:[2,5],collect:[19,20,29],color:[19,20],com:[16,17,29],combin:[8,18],come:29,commonli:29,compar:[11,29],compat:29,complet:29,complex:27,compon:[4,18,29],compos:[4,6,18],comput:[3,5,12,13,29],compute_output_shap:5,concat:[4,10,27],concaten:[2,25,29],concret:29,config:[11,14],congest:17,consecut:[2,4,6],consid:29,considerd:4,consist:[2,4,7,18],constant:18,construct:[2,29],constructor:29,contain:[2,11,13,29],content:30,continu:29,contrib:29,contribut:29,contribute_data:2,conv_filt:[4,10],convent:[11,13],converag:[19,20],converg:[25,29],convert:6,convolut:[4,5,10],coordin:2,correl:[2,4,5,10,11,14,18,19,20,21,22,26],correlation_adjac:5,correspond:[2,4,5],cosin:28,could:29,count:29,cover:29,cpu:[19,20],creat:2,create_release_data_didi:16,crowd:[4,18],cucurul:10,cummin:29,current:[4,5,7,10,11,13,29],custom:4,cut:8,dai:[2,4,6,18],daili:[4,19,20,21,22],daily_slot:[2,6],data:[2,3,4,5,6,7,8,10,13,14,19,20,21,22,29],data_config:16,data_dir:2,data_list:8,data_load:[0,1,11,14,25,29,30],data_rang:[2,29],datafram:4,datalist:[16,17],datarang:26,dataset:[0,1,4,5,9,14,16,17,19,20,21,22,25,26,30],date:6,date_str:6,datetim:6,dateutil:[11,12],dcgru:10,dcgrucel:5,dci:10,dcrnn:[0,1,10,11,13,30],dcrnn_cell:[0,1,30],debug:4,decid:7,decim:5,decis:18,decod:[4,18],deep:[4,5,10],deeper:[19,20],deepst:[0,1,11,13,30],def:29,defin:29,degre:[4,5],demand:[4,18,29],denorm:6,dens:[4,10,20,21,22,27,29],denseunit:[20,21,22,26],depend:[4,18],depth:[4,10],describ:[4,18],design:29,desir:29,detail:[10,11,13,17,29],determin:5,devic:26,dichai:[11,12],dickei:4,dict:[2,4,5,6,7,29],dictionari:[6,7],didi:[8,9,29],didi_chengdu:10,didi_xian:10,didichux:[16,17,29],dididata:[16,17],diditti_util:17,differ:[4,8,9,11,18],differenc:4,diffus:[4,10],dim:29,dimens:[2,4,5,6,7,29],dir:[16,17],direct:28,directli:[2,7],directori:[2,4,5],disabl:5,disk:5,distacn:5,distanc:[2,5,10,19,20,21,22,26],distance_adjac:5,distribut:[4,8,29],distribute_list:8,district:17,divid:[6,7],divis:29,dnn:[4,18],docker:9,docstr:31,domain:[4,18],download:[16,17],drive:17,driven:[4,10,18],driver:16,drop:4,dropout:4,dropout_r:4,ds_store:17,dtype:[5,29],dump:29,dure:[2,5],dynam:[4,18],dynamic_rnn:29,each:[4,5,7,8,29],earli:[4,5,7,18,29],earlier:2,early_stop_length:5,early_stop_method:5,early_stop_pati:5,earlystop:[0,1,5,30],earlystoppingttest:7,earth:5,easi:[4,18],effort:29,either:29,electr:29,element:[5,6],els:[4,5],embed:2,empir:18,empti:2,encod:[4,18],encrypt:16,end:[2,4,18,29],enough:7,ensur:23,epoch:[5,26,29],epsilon:4,equal:[3,4,5,6,7],error:25,eslength:26,especi:[16,17,23,29],estimat:10,etc:29,euclidean:18,eval_metr:4,evalu:[0,1,4,9,10,14,19,20,25,29,30],evaluate_loss_nam:5,everi:[2,4,6,17],exact:[2,4,6],exampl:29,exce:7,except:[5,25],exist:5,expand_dim:29,expect:7,experi:[9,23,29],explain:5,explan:[19,20,21,22,26],explicitli:18,express:16,extend:29,extern:[2,4,18],externai_dim:4,external_dim:[2,4],external_featur:4,externalfeatur:29,extra:18,extract:[2,29],factor:[4,18,29],fail:25,fals:[2,4,5,6,7,25,26,29],far:[4,18],featur:[2,4,5,6,7,10,20,27],feature_length:[],feature_step:[],feature_strid:[],februari:18,feed_dict:[6,7],file:[2,4,5,8,10,16,17],filenam:[4,5],fill:[17,29],filter:4,final_st:29,find:29,finetun:28,finish:25,first:[7,11,12,29],firstli:29,fit:[4,5,11,14,25,29],fix:29,flag:5,flexibl:[11,13],float32:[5,29],flog:5,flow:[4,10,18,20,29],follow:[10,11,12,13,16,17,19,20,21,22,29],forecast:[4,10,18],forecast_step:[4,25],forget:29,format:[2,5,29],former:[2,4,6],found:[5,10,29],four:10,frame:4,framework:18,fratur:4,free:5,from:[2,4,5,7,8,9,12,14,16,17,18,25],fuller:4,further:2,fuse:[4,18],fusion:[4,18],futur:[4,18,29],gaia:[16,17,29],gal:[4,5,10,27],galhead:[20,21,22,26],galunit:[20,21,22,26],gate:[5,10],gattel:[20,21,22],gaussianhmm:[],gbrt:[10,19,20,21,22],gc_output:5,gc_rate:4,gcl:5,gcl_k:4,gcl_l:4,gclstm:[4,10,19,20,21,22,27],gclstm_layer:4,gclstmcell:5,gcn:[4,5],gcn_k:[4,5],gcn_l:5,gcn_layer:4,gener:[4,6,7,18],general_move_sampl:[],generaliz:10,geng:[4,18],geo:4,geograph:5,geoman:[0,1,11,13,30],ger:29,get:7,get_a_cel:29,get_batch:7,get_grid_data_didi:16,get_monthly_interaction_didi:16,get_ord:4,github:[4,18],give:4,given:6,gll:[20,21,22,26],global:[4,18],global_featur:4,global_step:5,good:29,gpu:[4,5,11,12,19,20],gpu_devic:[4,5,29],gputil:[11,12],gradient:[4,18],graph:[2,4,5,10,11,14,19,20,21,22,27,29],graph_merg:4,graph_merge_gal_num_head:4,graph_merge_gal_unit:4,graph_nam:[],graphbuild:5,graphmodellay:[0,1,30],grate:[16,17,29],great:5,greater:5,grid:[4,10,16,29],gridlatlng:29,gridtrafficload:[],ground:4,group:26,gru:4,gtx:[19,20],guid:29,haikou:[17,29],hail:[4,18],handl:[5,29],has:2,have:[2,4,6,7,11,12,16,17,19,20],haversin:5,head:[4,5,20,21,22],height:4,help:[6,29],here:[10,29],hidden:[4,5,20,21,22,29],highest:[4,5],highest_protocol:29,highli:[11,12],hisrori:4,histor:[4,29],histori:[2,4,6],hm_obj:25,hmm:[11,13,19,20,21,22,29],hmm_kernal:[],hmmlearn:[11,12,18],hoel:18,hold:5,holidai:6,homepag:[12,13,18,19,20,21,22,29],hour:[19,20],how:[2,29],html:31,http:[11,12,16,17,29],hub:[11,12],hypothesi:7,ident:7,ignor:4,illustr:29,imag:15,implement:[4,5,10,18,29],includ:[4,5,6,17,18,29],incorpor:[4,18],independ:7,index:[2,8,17],indic:2,inform:[5,8,16,18,29],inherit:[5,29],init:[4,5,11,14],init_var:[4,5,29],initi:[4,5,16,17,29],input:[2,4,5,6,7,8,18,29],input_dim:[4,5,29],input_shap:5,input_step:[4,29],input_transform:4,inspect:29,instal:9,instanc:[4,18],instead:5,instruct:17,integ:[2,4,5,8],interact:[2,5,10,16,19,20,21,22,26],interaction_adjac:5,interaction_matrix:5,interatct:2,interest:29,interl:[19,20],intern:7,intersect:18,interv:[7,16],introduc:10,introduct:9,ipynb:17,is_train:2,is_valid_d:6,is_work_day_america:[2,6],is_work_day_china:6,iter:4,its:[2,6,10],jinan:29,job:[8,16],job_i:8,json:16,juli:18,junbo:4,jupyt:17,keep:[4,5],kei:[6,7,29],kera:[5,11,12],kernal_s:10,kernel:4,kernel_initi:5,kernel_s:[4,10],keyword:5,kind:4,know:[19,20,21,22],knowledg:29,kth_cheby_ploi:[],kwarg:[2,4,5],label:4,lag:4,land:[4,18],laplac:5,laplace_matrix:[11,14],laplacian:[2,5],laplacian_matrix:5,larg:17,larger:[2,5,16],last:[7,25],lat1:5,lat2:5,lat:29,lat_lng_list:5,late:[4,18],later:2,latest:[2,20],latitud:[2,5],layer:[4,5,10,20,21,22,29],leaky_relu:5,learn:[4,10,11,12,21,22,29],learner:4,least:29,len:4,length:[2,4,5,6,7,20,25,29],less:4,let:29,level:[4,17],liang:[4,18],librari:4,life:[19,20,21,22],like:5,likelihood:4,limit:7,line:[2,10,22,26],linear:29,link:5,lio:10,list:[2,4,5,6,7,8],liu:[10,18],live:5,liyaguang:[4,18],lng:29,load:[5,29],load_event_scalar:5,loader:[2,11,14,29],local:[4,18,29],local_featur:4,local_path:16,locat:5,locker:8,log:5,logic:5,lon1:5,lon2:5,longitud:[2,5],look:29,loss:[5,29],lot:29,lstm:[4,5,10,18,19,20,21,22,29],lstm_layer:4,lstm_unit:4,lstmc:10,lstmcell:5,lstmunit:[20,21,22,26],lucktroi:[4,18],machin:[4,18],mai:[2,4],main:[2,10],major:[4,18],make:[4,17,18,29],make_concat:2,mani:[2,5,29],manual_summari:[],map:[10,19,20],mapbox:[],mape:[3,26],mark:10,markov:29,master:[],match:[5,16],matplotlib:29,matric:[2,4,6],matrix:[4,5],max:[2,4,5],max_ar:4,max_d:4,max_depth:[4,25,29],max_diffusion_step:[4,5],max_epoch:[5,29],max_lag:4,max_ma:4,max_to_keep:[4,5,29],maximum:4,mean:[4,19,20,21,22],measur:16,mechan:[4,18,29],memori:[5,10,19,20,29],merg:[4,27],merge_gal_unit:5,meta:10,meteorolog:[4,18],meter:[2,5],method:[2,4,5,6,7,23,27,29],metric:[0,1,4,11,14,25,29,30],metro:[9,26,29],metro_chongq:10,metro_shanghai:10,mgcn:[4,5,10,11,13],million:29,min:2,min_max_denorm:[6,11,14,29],min_max_norm:6,mini:5,minibatchfeeddict:7,minibatchtrain:[0,1,30],minibatchtrainmultidata:7,minim:29,minut:[2,29],miss:17,mode:4,model:[0,1,2,5,7,9,10,13,19,20,21,22,25,30],model_dir:[4,5,29],model_obj:25,model_param:[],model_r:4,model_unit:[0,1,4,9,29,30],modifi:10,modul:[0,18,30],month:[2,5,29],month_num:2,monthli:[2,16],more:[4,5,8,10,17,19,20,21,22,29],move:4,move_sampl:6,movesampl:[],multi:[4,5,10,19,20,21,22,27],multi_thread:[0,1,16,30],multipl:18,multiple_process:8,multirnncel:29,must:[4,5,29],my_dataset:29,my_lstm:29,my_model:29,mymodel:29,n_decoder_hidden_unit:4,n_encoder_hidden_unit:4,n_estim:[4,25,29],n_iter:[25,29],n_jo:8,n_job:8,n_stacked_lay:4,naiv:[4,5],name:[2,5,10,27,29],nan:17,ndarrai:[2,3,4,5,6,7],necessari:29,need:[2,4,5,6,29],neighbor:[2,22],network:[4,5,10,19,20,21,22],neural:[2,4,5,10],new_valu:7,newest:7,next:[17,29],nni:[11,12],node:[2,4,5,25,29],node_monthly_interact:2,node_num:[2,4],node_station_info:2,node_traff:2,nodetrafficload:[2,11,14,25,29],non:18,none:[2,3,4,5,29],norm:4,normal:[2,4,6,11,14,25,26,29],notat:26,note:[2,4,17],notebook:17,noth:5,nov:16,novemb:[10,18],now:[2,4,6,29],num:29,num_compon:[25,29],num_conv_filt:4,num_dense_unit:4,num_diffusion_matrix:4,num_featu:5,num_featur:5,num_graph:[4,5,11,14],num_head:5,num_hidden_unit:4,num_lay:29,num_nod:[4,5,11,14],num_proj:5,num_residual_unit:[4,10],num_rnn_lay:4,num_rnn_unit:4,num_stat:29,num_unit:[5,29],number:[2,4,5,6,7,8,10,16,19,20,21,22,29],numpi:[5,6,11,12,25,29],nvidia:[11,12,19,20],nyc:[4,10,11,14,19,20,25,29],obj:10,object:[2,4,5,6,7,11,14,25,29],observ:4,obviou:[10,17],oct:16,octob:18,often:18,onc:7,one:[2,4,5,6,7,8,29],onli:[4,7,10,20,29],op_nam:5,open:[11,13,17,29],oper:[4,29],operation1_nam:5,operation2_nam:5,ops:5,optim:[4,5,29],optimizer_nam:4,option:[2,4],order:[4,5,7,16,25],org:[11,12],orgin:6,origin:29,other:[2,5,9,11,18,29],otherwis:[2,4,5,6,7],our:[5,10,18],output:[4,5,8,16,29],output_activ:4,output_dim:[4,29],output_nam:[5,11,14],output_s:5,output_step:[4,29],output_tensor1_nam:5,output_tensor1_valu:5,output_tensor_name1:5,output_tensor_name2:5,outputs_dict:5,outreach:[16,17],overal:28,overwrit:5,own:[2,5,9,13],p_test:25,p_value_threshold:7,packag:[0,9,11,12,13,18,29,30],page:[11,12],pair:[2,6,7],panda:[11,12,18],paper:18,param:[5,19],paramet:[2,3,4,5,6,7,8,10,19,20,21,22,27,29],part:[4,8,18],partit:8,partition_func:8,pass:4,past:29,path:[2,29],patienc:[7,26],pattern:[17,18],pearson:[2,5],penultim:[20,21,22],per:5,perform:[5,10,29],period:[2,4,6,10,18,20,29],period_featur:[4,11,14,25],period_len:[2,4,6,10,11,14,25,29],person:[],physic:16,pickl:[2,29],piec:[2,4,6],pip:[11,12],pkl:[16,17,29],pkl_file_nam:29,placehold:29,pleas:[19,20,21,22],plot:29,pls:8,plt:29,poi:29,poi_sim:[],point:[4,5,16],polynomi:[4,5],poor:10,popular:29,portal:29,posit:2,predict:[2,3,4,5,6,10,13,14,20,25,29],prediction_test:25,premier:16,preprocess:[0,1,9,19,20,21,22,29,30],preprocessor:[0,1,30],presenc:4,present:4,preset:29,previou:[4,17],print:[5,11,14,25,29],problem:29,process:[2,4,8,18,27],processingdiditti:17,produc:5,program:16,project:29,properti:[4,5,18],proport:2,protocol:29,provid:[5,11,13,16,17,29],pull:[11,12],put:16,pyplot:29,python:[5,10,11,12,16],pytorch:[4,18],pyyaml:[11,12],quick:9,quickstart:[4,29],random:18,rang:[2,25,29],rate:[4,21,22],ratio:[2,4,6,28],ratio_list:6,ration:5,raw:[5,6],readm:17,real:[19,20,21,22],realiz:[10,29],recent:29,reciproc:17,recognit:18,recommend:[11,12],record:[2,6,7,10,19,20,21,22,29],recurr:[4,5,10],reduc:[8,16],reduce_func:8,reduce_mean:29,refer:[4,8,9,10,12,18,19,20,21,22,29],reg:[4,25,29],region:[16,18,29],regular:5,rel:2,relat:29,releas:[5,29],release_data_dir:[16,17],remain:[19,20],remov:[3,19,20,21,22],repositori:[4,18],repres:5,represent:5,requir:[11,12,18,29],reserv:4,reshap:[25,29],residu:[4,5,18],residual_unit:10,resnet:[4,10,11,13],resourc:15,respect:[19,20,29],restart:7,result:[2,4,5,6,9,11,14,18,20,21,22,28,29],return_output:5,reus:5,revers:29,rgal:27,ride:[4,10,18,19,20,21,22],rideshar:29,ring:16,rmetfc:[],rmse:[3,4,11,14,25,26,29],rnn:[4,5,29],rnn_cell:29,rnn_cell_impl:5,rnncell:5,road:[16,17],romero:10,root:4,run:[10,11,12,16,29,31],runtim:[11,12],sai:29,same:[2,3,4,5,6],sampl:[4,7,18],save:[4,5,29],save_model:5,save_model_nam:5,saver:[4,5],scalar:5,scalar_nam:5,scenario:29,schedul:18,schmidhub:29,scikit:[11,12],scipi:[4,11,12],scratch:7,sd_param:[],search:19,season:[4,18],seasonal_ord:[4,25],second:[2,16,29],see:[2,4,7,16,17,29],select:[2,17],self:[2,29],send:8,sensor:4,sensori:4,sept:28,seq_len:4,sequenc:[4,5,29],sequence_length:[5,6,7,11,14,29],seri:[4,29],serial:4,session:[5,7],set:[2,4,5,7,9,16,19,20,21,22,29],seven:[2,4,6],sever:7,sgd:4,shahabi:[10,18],shall:2,shanghai:[10,22,26],shanghaiv1:26,shape:[2,3,4,5,11,14,25,29],share:10,share_queu:8,shawnwang:[4,18],shenzhen:[17,29],should:[2,4,5,7,8,29],show:[10,19,20,21,22,29],shuffl:[5,7],shuffle_data:5,side:7,sigmoid:4,signific:[19,20,21,22],significantli:16,silent:4,similar:[2,4,18,28],simpl:[18,29],simpli:4,sinc:[4,19,20,21,22,29],singl:[2,10],singlegraph:[19,20],size:[4,5,7],skip:[11,12],slot:[2,4,6,29],slow:17,small:7,smaller:[3,5,7,19,20,21,22],smallest:3,softmax:5,sort:2,sourc:[19,20],span:[7,10,19,20,21,22],spars:4,spatial:[4,5,10,11,13,29],spatio:[4,10,18],spatiotempor:4,specifi:[2,4,5,10,29],speed:17,sphinx:31,split:[2,4,6],split_data:6,split_feed_dict:6,split_timestep:4,splitdata:[6,29],sqrt:29,squar:29,squarederror:[4,25],squeez:29,st0:26,st_map:[],st_method:4,st_mgcn:[0,1,10,19,20,30],st_movesampl:6,st_resnet:[0,1,5,10,30],st_rnn:[0,1,30],st_sim1_0:26,st_sim_0:26,stack:4,stacked_cel:29,stacked_output:29,stage:[19,20,21,22],start:[2,9,29],state:[5,11,13,18],state_is_tupl:29,state_s:5,station:[4,9,11,19,21,22,25,29],station_index:25,station_numb:[2,11,14,25,29],stationinfo:[2,29],statist:18,statsmodel:[11,12,18],statu:29,step1:[16,17],step:[2,4,5,6,16,17],stmeta:[0,1,5,9,13,19,20,21,22,26,30],stmeta_master_bik:[19,20],stmeta_obj:[10,11,14],stmeta_v0:10,stmeta_v1:10,stmeta_v2:10,stmeta_v3:10,stop:[5,7,29],store:[2,4,5,29],str:[2,4,5],stream:2,strictdataformat:17,string:[2,4,5,6],strnn:4,strongli:29,structur:[4,11,13,18],style:[],subclass:29,subdirectori:17,submodul:[],subpackag:30,subscript:5,subset:2,supplementari:2,support:[5,10,11,13,29],suzhou:[17,29],system:[10,18],tail:7,take:[7,17,29],tanh:[4,5],target:[3,4,6,7,11,14,29],target_len:4,target_length:[2,6,29],target_nod:29,target_nodz:29,target_st:29,task:[4,8],task_func:8,td_data_length:[],td_param:[],tech:[4,18],techniqu:[5,10],temperatur:4,tempor:[2,4,5,6,10,11,13,27],temporal_merg:4,temporal_merge_gal_num_head:4,temporal_merge_gal_unit:4,temporam:4,tensor:[5,29],tensorboard:5,tensorflow:[4,5,18,29],tensorshap:5,term:[10,29],test:[2,4,5,7,10,11,14,25,29],test_clos:[2,11,14,25,29],test_i:[2,11,14,25,29],test_period:[2,11,14,25,29],test_predict:25,test_prediction_collector:25,test_ratio:[2,29],test_rms:[25,29],test_sequence_len:[11,14,29],test_trend:[2,11,14,25,29],test_x:29,than:[2,3,4,5,7,19,20,21,22],thei:7,them:[5,18,29],theoret:18,therefor:29,thi:[4,5,6,7,11,12,16,17,29,31],those:7,thread:[8,16],three:[4,8,10,18],threshold:[3,5,7,11,14,20,21,22,25,26,29],threshold_correl:2,threshold_dist:2,threshold_interact:2,thu:5,time:[2,4,5,6,7,10,16,17,19,20,21,22,29],time_fit:[2,6,29],time_index:25,time_rang:[2,29],time_sequ:[4,25],time_seri:4,time_slot_num:[2,4],time_util:[0,1,30],timefit:[2,29],timerang:[2,29],timestep:[4,29],tk1:[],tk2:[],togeth:5,toi:29,too:2,toolbox:13,total:4,total_sens:4,track:16,traffic:[4,10,18,20,29],traffic_data:[5,29],traffic_sim:[],traffic_sim_fak:[],trafficgrid:29,trafficmonthlyinteract:[2,29],trafficnod:[2,29],train:[0,1,2,4,5,9,13,14,19,20,25,26,29,30],train_clos:[2,11,14,25,29],train_data_length:2,train_i:[2,11,14,25,29],train_loss:29,train_op:[5,29],train_period:[2,11,14,25,29],train_sequence_len:[11,14,29],train_time_slot_num:2,train_trend:[2,11,14,25,29],train_x:29,trainabl:[5,19,20],trainable_var:29,trainbl:29,traindai:26,trajectori:[16,29],transfer:[2,28],transferdataload:[],transform:[5,29],transpos:25,travel:17,tree:[4,16,17,18],trend:[2,4,6,10,18,20,29],trend_featur:[4,11,14,25],trend_len:[2,4,6,10,11,14,25,29],trigger:7,trip:16,truth:4,tti:29,tupl:5,turn:5,tutori:[5,9,13],two:[2,4,5,7,18,29],txt:17,type:[2,4,5,6,7],uctb:[0,13,14,25,31],understand:29,uniqu:[4,18],unit:[4,5,10,13,18,20,21,22],univari:4,unzip:17,updat:31,upgrad:[11,12],urban:[13,29],url:[],usag:29,use:[2,4,5,10,11,12,13,17,18,19,20,29],use_bia:5,use_curriculum_learn:4,use_gc_for_ru:5,used:[2,4,5,6,8,10,16,18,19,20,21,22,29],useful:29,uses:[21,22,29],using:[4,5,9,18,25],util:[0,1,9,30],val_loss:[5,29],valid:[4,5,6],validate_ratio:[5,29],valu:[4,6,7,17,20,21,22,26,29],variabl:[7,19,20,29],variant:10,variou:[5,29],vector:6,vehicular:18,verbos:[4,5],veri:17,version:[4,5,9,11,12,29],view:[19,20],visual:[10,19,20,29],vue:[16,17],walk:18,wang:[10,18],washington:29,weather:29,week:[2,4,6,17],weekli:4,weight:5,welcom:29,well:[11,13,29],wen:18,were:16,wget:[11,12],when:[2,4,5,7,17,29,31],where:[4,5,8],whether:[5,7],which:[4,5,8,18,29],whole:[5,29],whose:[7,29],wide:18,width:4,william:18,wind:4,window:[19,20],with_lm:[2,25,29],with_tp:[2,29],within:16,without:6,work:4,workday_pars:2,wors:7,wrapper:29,www:[11,12],xgboost:[0,1,10,11,12,13,19,20,21,22,29,30],xian:[10,16],xian_gps_20161001:16,xian_gps_20161002:16,xian_gps_20161130:16,xiannov2016:[],xianoct2016:[],yaguang:4,yang:[10,18],yml:10,york:[10,19,29],yoshal:[4,18],you:[5,11,12,13,16,17,29],your:[2,5,9,13],yuxuan:4,yyyi:[2,29],zero:[3,25,29],zhang:[4,18],zheng:18,zhou:18,zip:17,zoom:[]},titles:["5. API Reference","UCTB package","5.1. UCTB.dataset package","5.5. UCTB.evaluation package","5.4. UCTB.model package","5.3. UCTB.model_unit package","5.2. UCTB.preprocess package","5.6. UCTB.train package","5.7. UCTB.utils package","Welcome to UCTB\u2019s documentation!","6. Results on different datasets","Urban Computing ToolBox","2. Installation","1. Introduction","3. Quick start","&lt;no title&gt;","DiDi Data","DiDi TTI Data","Currently Supported Models","Experiments on bike traffic-flow prediction","Experiments on Charge-Station demand station","Experiments on DiDi traffic-flow prediction","Experiments on subway traffic-flow prediction","Purpose","&lt;no title&gt;","Quick Start with HM (Historical Mean)","Stable Test Records","Different versions of STMeta","Check-In\u4e0ePOI\u6570\u636e\u5904\u7406\u65b9\u6cd5","4. Tutorial","UCTB","&lt;no title&gt;"],titleterms:{"\u4f7f\u7528check":28,"\u4f7f\u7528poi\u4fe1\u606f\u8fdb\u884c\u76f8\u4f3c\u7ad9\u70b9\u5339\u914d":28,"\u5206\u6790transfer\u6548\u679c\u5728\u57ce\u5e02\u4e2d\u7684\u5206\u5e03":28,"\u6570\u636e\u8be6\u60c5":28,"\u7279\u5f81\u76f8\u4f3c\u5ea6\u65b9\u6cd5":28,"\u7279\u5f81\u8ba1\u7b97\u65b9\u6cd5":28,"class":11,"in\u4e0epoi\u6570\u636e\u5904\u7406\u65b9\u6cd5":28,"in\u6570\u636e\u8fdb\u884c\u76f8\u4f3c\u7ad9\u70b9\u7684\u5339\u914d":28,"poi\u7279\u5f81\u8ba1\u7b97\u65b9\u6cd5":28,Adding:[21,22],Use:[11,29],api:[0,11],arima:[4,18,25],attent:18,autoregress:18,averag:18,base:18,basemodel:5,beij:26,bike:[10,11,19],build:[11,26,29],charg:[10,20],chargest:26,check:28,chengdu:26,chicago:28,citi:28,close:[19,21,22],comput:11,content:1,contribut:11,convolut:18,current:18,data:[11,16,17,18],data_load:2,dataset:[2,10,11,29],dcrnn:[4,18],dcrnn_cell:5,deep:18,deepst:[4,18],delai:11,delet:19,demand:[11,20],didi:[10,11,16,17,21,26],differ:[10,27],diffus:18,docker:[11,12],document:9,earlystop:7,evalu:[3,11],exampl:11,experi:[10,11,19,20,21,22],featur:[19,21,22,29],flow:[11,19,21,22],from:[11,29],full:11,futur:19,geo:18,geoman:[4,18],graph:[18,26],graphmodellay:5,hidden:18,histor:[18,25],hmm:[18,25],instal:[11,12],integr:18,introduct:[11,13],latest:19,learn:18,level:18,markov:18,mean:[18,25],metric:3,metro:[10,11],mgcn:18,minibatchtrain:7,mode:[21,22],model:[4,11,14,18,26,29],model_unit:5,modelunit:11,modul:[1,2,3,4,5,6,7,8],move:18,multi:18,multi_thread:8,multipl:29,network:18,neural:18,nyc:28,onli:19,order:11,other:14,own:[11,29],packag:[1,2,3,4,5,6,7,8],paramet:26,period:[21,22],predict:[11,18,19,21,22],preprocess:6,preprocessor:6,purpos:23,quick:[11,14,25],record:26,recurr:18,refer:[0,11],regress:29,resnet:18,result:[10,19],search:10,sensori:18,seri:18,set:10,singl:29,space:10,spatial:18,spatiotempor:18,st_map:[],st_mgcn:4,st_resnet:4,st_rnn:5,stabl:26,start:[11,14,25],station:[10,20],statist:10,step:[11,12],stmeta:[4,10,11,14,18,27],submodul:[],subpackag:1,subwai:22,support:18,target:28,tempor:[18,29],tensorflow:[11,12],test:26,time:18,time_util:6,toolbox:11,traffic:[11,19,21,22],train:[7,11],tti:17,tutori:[11,29],uctb:[1,2,3,4,5,6,7,8,9,11,12,29,30],unit:11,urban:11,using:[11,29],util:8,version:[10,19,27],welcom:9,xgboost:[4,18,25],xian:26,your:[11,29]}})