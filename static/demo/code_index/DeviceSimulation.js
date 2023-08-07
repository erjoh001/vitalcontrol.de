/*******************************************************************************
*
* V I T A L C O N T R O L    D E M O N S T R A T I O N    A P P
*
*                                             specification: Urban GmbH & Co. KG
*                                         programming: Tara Systems GmbH, Munich
*
********************************************************************************
*
* Urban VitalControl is a novel equipment for digital health control of farm
* animals suitable for a variety of documentation and monitoring tasks.
*
* The device combines an RFID reader for animal transponders with a rectal
* fever thermometer. Data transfer and exchange is possible via USB, WiFi
* or bluetooth
*
* VitalControl device is developed and distributed by Urban GmbH & Co.KG:
* https://www.urbanonline.de
*
* For further information visit the product home page:
* https://www.vitalcontrol.de
*
* This file is part of demonstration application developed in order to be able
* to demonstrate the use of the device to both interested parties and 
* prospective customers.
*
* The demonstration application is browser based and can be run from inside any
*  WebGL enabled web browser (Firefox, Chrome, Edge, ...):
*
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abt)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.abt=(function(){var A=index;var C={};
var B4="ERROR: access to null Bool data in column [";var BI="]";var EH="Access to inexistent column index: ";
var Gv=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I5="Unsupported filter criterion class";var
Iq="Operator not handled:";var Oe="1,8";var Pc="INFO: Device.StartScan() called.";
var Nq="INFO: Device.StopScan() called.";var Cw="V0.";var FN=".";var Of="\n";var
Nr="Temp: ";var Kc="Battery: ";var Og="%%";var ME="Selected animal with row index";
var Pd="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
RO="1,2";var Tn="0,1,2";var Vi="3900,3950,4000";var Vj="4050,4100,4150";var JV="Read only";
var RP="Unknown data export type: ";var Vk="Unhandled Device::DataExportType: ";
var Vl="0,2";var Yb="650,150";var RQ="800,200";var Yc="40000,4000";var Vm="Simulate Scan";
var To="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Vn="%d.%m.%Y";var Qh="1";var Vo="2";var Ns="Unknown gender: ";var Pe="text/csv";
var Tp="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Yd="hit-geburt-%d-%m-%Y_%H-%M.csv";var Vp="animals-%d-%m-%Y_%H-%M.csv";var Ye=
"M";var Yf="F";var Vq="?";var Vr="%Y-%m-%d";var RR="ERROR: Cannot start transaction";
var Yg="Nested transactions are not allowed.";var Yh="Transaction not opened.";var
AaK="Wrong transaction ID.";var Qi="Unhandled TableId:";var AaL="Maximum number of rows reached.";
var AdG="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var Yi=
"10";var Vs="20";var Yj="30";var AdH="31";var KO="32";var AaM="Severe: filter set when inserting row into table: ";
var RS="ERROR: Row not found with index [";var Nt="] while Rows Count = ";var AlX=
"ERROR: trying to access an inexistent row with Index=";var AlY="Invalid Device::SyncState";
var JW="Forwarding to home screen after 500 milliseconds ...";var AlZ="Forwarding to home screen canceled...";
var Al0=[0,58,240,208];var Af0="VitalControl\nstarting up \u2026";
C.Table={Ga:null,Init:function(aArg){var K=this.K;A.y_([this,this.Aia],K.Ga,0);},
Cq:function(Z,AR){var K=this.K;return K.Ga.Cq(Z,AR);},Ug:function(Z,AR){var K=this.
K;return K.Ga.Ug(Z,AR);},Hs:function(Z,AR){var K=this.K;return K.Ga.Hs(Z,AR);},OnSetId:
function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Ga.OnSetId(E);},Cf:function(
){var K=this.K;return K.Ga.Cf();},Bo:function(E){var K=this.K;A.Device.ITable.Bo.
call(this,E);K.Ga.Bo(E);},Uh:function(Z,AR){var K=this.K;return K.Ga.Uh(Z,AR);},
Q_:function(Z,AR){var K=this.K;return K.Ga.Q_(Z,AR);},NS:function(){var K=this.K;
return K.Ga.NS();},NU:function(Amm){var K=this.K;return K.Ga.NU(Amm);},WZ:function(
){var K=this.K;return K.Ga.WZ();},XW:function(Z,AR,CM){var K=this.K;return K.Ga.
XW(Z,AR,CM);},GJ:function(Z,AR,CM){var K=this.K;return K.Ga.GJ(Z,AR,CM);},XV:function(
Z,AR,CM){var K=this.K;return K.Ga.XV(Z,AR,CM);},MC:function(Z,AR,CM){var K=this.
K;return K.Ga.MC(Z,AR,CM);},XU:function(Z,AR,CM){var K=this.K;return K.Ga.XU(Z,AR
,CM);},LM:function(aColumn,A2){var K=this.K;return K.Ga.LM(aColumn,A2);},LQ:function(
Z,AR){var K=this.K;return K.Ga.LQ(Z,AR);},S8:function(Z,AR,CM){var K=this.K;return K.
Ga.S8(Z,AR,CM);},AhA:function(aColumn,A2){var K=this.K;return K.Ga.AhA(aColumn,A2
);},G1:function(){var K=this.K;return K.Ga.G1();},Ahy:function(aColumn,A2){var K=
this.K;return K.Ga.Ahy(aColumn,A2);},Acb:function(aColumn,A2){var K=this.K;return K.
Ga.Acb(aColumn,A2);},If:function(){var K=this.K;return K.Ga.If();},Zx:function(){
var K=this.K;return K.Ga.Zx();},PG:function(){var K=this.K;return K.Ga.PG();},_Init:
function(aArg){var K=this.K;C.Ga._Init.call(K.Ga={I:this},0);K.__proto__=C.Table;
K.Init.call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.
Ga._Done();A.hJ--;},_ReInit:function(){var K=this.K;K.Ga._ReInit();},_Mark:function(
D){var B;if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){return this;
},_className:"DeviceSimulation::Table"};C.ACA={R1:A.aan(42,null,null),Cq:function(
aColumn){var B;this.Yu(aColumn);var Ao=(C.AAd.isPrototypeOf(B=this.R1.Get(aColumn
))?B:null);if(!!Ao)return Ao.AY;return 0;},Ug:function(aColumn){var B;this.Yu(aColumn
);var Ao=(C.String.isPrototypeOf(B=this.R1.Get(aColumn))?B:null);if(!!Ao)return Ao.
AY;return A.jm;},Hs:function(aColumn){var B;this.Yu(aColumn);var Ao=(C.Ayt.isPrototypeOf(
B=this.R1.Get(aColumn))?B:null);if(!!Ao)return Ao.AY;else A.aa8("%s",(B4+aColumn.
toFixed())+BI);return false;},GJ:function(aColumn,A2){this.Yu(aColumn);var Ao=A.
_NewObject(C.AAd,0);Ao.AY=A2;this.R1.Set(aColumn,Ao);return true;},XU:function(aColumn
,A2){this.Yu(aColumn);var Ao=A._NewObject(C.String,0);Ao.AY=A2;this.R1.Set(aColumn
,Ao);return true;},MC:function(aColumn,A2){this.Yu(aColumn);var Ao=A._NewObject(
C.Ayt,0);Ao.AY=A2;this.R1.Set(aColumn,Ao);return true;},Yu:function(aColumn){if((
aColumn<0)||(aColumn>=42))throw new Error((EH+aColumn.toFixed())+Gv);},BcC:function(
AK){if(!!(A.Device.Int32FilterCriterion.isPrototypeOf(AK)?AK:null))return this.AFO(
this.Cq(AK.EF),AK.Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AK)?AK:null
).AY);else if(!!(A.Device.UInt32FilterCriterion.isPrototypeOf(AK)?AK:null))return this.
Brk(this.Q_(AK.EF),AK.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AK)?
AK:null).AY);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AK)?AK:null
))return this.Brj(this.Ug(AK.EF),AK.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AK)?AK:null
))return this.Bri(this.Hs(AK.EF),AK.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AK)?
AK:null))return this.AFO(this.Cq(AK.EF),AK.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AK)?AK:null).AY);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AK)?AK:null))return this.AFO(this.Cq(AK.EF),AK.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AK)?AK:null).AY);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AK)?AK:null))return this.Brm(this.Uh(AK.EF),AK.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AK)?AK:null).AY)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AK)?AK:null))return this.Brl(this.LQ(AK.EF),AK.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AK)?AK:null).AY);else if(!!(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AK)?AK:null))return this.AFO(this.Cq(AK.EF),AK.Operator,(A.Device.
WhereAboutsFilterCriterion.isPrototypeOf(AK)?AK:null).AY);else throw new Error(I5
);},AFO:function(HF,En,HG){switch(En){case 0:return HF===HG;case 2:return HF>HG;
case 3:return HF<HG;case 4:return HF.toFixed().indexOf(HG.toFixed(),0)>=0;case 5:
return HF!==HG;default:throw new Error(Iq+En.toFixed());}},Brj:function(HF,En,HG
){switch(En){case 0:return HF===HG;case 2:return HF>HG;case 3:return HF<HG;case 4:{
A.aa8("%s%e%s%i",HF,En,HG,HF.indexOf(HG,0));return HF.indexOf(HG,0)>=0;}case 5:return HF
!==HG;default:throw new Error(Iq+En.toFixed());}},Bri:function(HF,En,HG){switch(
En){case 0:return HF===HG;case 2:return false;case 3:return false;case 4:return false;
case 5:return HF!==HG;default:throw new Error(Iq+En.toFixed());}},Uh:function(aColumn
){var B;this.Yu(aColumn);var Ao=(C.ADf.isPrototypeOf(B=this.R1.Get(aColumn))?B:null
);if(!!Ao)return Ao.AY;return 0;},XW:function(aColumn,A2){this.Yu(aColumn);var Ao=
A._NewObject(C.ADf,0);Ao.AY=A2;this.R1.Set(aColumn,Ao);return true;},Brm:function(
HF,En,HG){switch(En){case 0:return HF===HG;case 2:return HF>HG;case 3:return HF<
HG;case 5:return HF!==HG;default:throw new Error(Iq+En.toFixed());}},Q_:function(
aColumn){var B;this.Yu(aColumn);var Ao=(C.ADd.isPrototypeOf(B=this.R1.Get(aColumn
))?B:null);if(!!Ao)return Ao.AY;return 0;},XV:function(aColumn,A2){this.Yu(aColumn
);var Ao=A._NewObject(C.ADd,0);Ao.AY=A2;this.R1.Set(aColumn,Ao);return true;},Brk:
function(HF,En,HG){switch(En){case 0:return HF===HG;case 2:return HF>HG;case 3:return HF<
HG;case 5:return HF!==HG;default:throw new Error(Iq+En.toFixed());}},LQ:function(
aColumn){var B;this.Yu(aColumn);var Ao=(C.ADe.isPrototypeOf(B=this.R1.Get(aColumn
))?B:null);if(!!Ao)return Ao.AY;return 0;},S8:function(aColumn,A2){this.Yu(aColumn
);var Ao=A._NewObject(C.ADe,0);Ao.AY=A2;this.R1.Set(aColumn,Ao);return true;},Brl:
function(HF,En,HG){switch(En){case 0:return HF===HG;case 2:return HF>HG;case 3:return HF<
HG;case 5:return HF!==HG;default:throw new Error(Iq+En.toFixed());}},_Init:function(
aArg){(this.R1=[]).__proto__=C.ACA.R1;this.__proto__=C.ACA;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(
this.R1,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::RowData"};C.UP={_Init:function(aArg){this.__proto__=
C.UP;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"};C.AAd={AY:0
,_Init:function(aArg){C.UP._Init.call(this,aArg);this.__proto__=C.AAd;},_className:
"DeviceSimulation::Int32"};C.String={AY:A.jm,_Init:function(aArg){C.UP._Init.call(
this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"};C.Ayt={
AY:false,_Init:function(aArg){C.UP._Init.call(this,aArg);this.__proto__=C.Ayt;},
_className:"DeviceSimulation::Bool"};C.DeviceClass={Arl:null,Ajo:null,AgS:null,YW:
null,C6:function(){var K=this.K;K.A4Y.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.XC(3);A.za([this,K.AxH],[B=K.Arl,B.A2Y,B.AOM],0);this.UpdateAutoActions(
Oe);K.A4Y.call(this,this);this.Apv(this);this.Apw(this);this.Aps(this);this.Apt(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Aln(languageValue);A.ow([this
,K.APb],this);},XC:function(E){this.UpdateActiveScreen(E);},Ati:function(E){this.
UpdateBatteryChargeState(E);},ABc:function(E){this.UpdateChargeActive(E);},Ao$:function(
E){this.UpdateScanState(E);},AtH:function(E){this.UpdateMeasureState(E);},AtT:function(
E){this.UpdateTempValue(E);},Aln:function(E){this.UpdateLanguage(E);},AtU:function(
E){this.UpdateTemperatureUnit(E);},ABa:function(E){this.UpdateBrightness(E);},ABE:
function(E){this.UpdateMonitoring(E);},Aup:function(){var B;if(A._GetAutoObject(
C.Aar).Aul){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AG4(this
);}},AfP:function(){var B;A._GetAutoObject(A.Device.Helper).RD.Aur(this);this.UpdateMeasureState(
0);},Adn:function(){var K=this.K;A.aa8("%s",Pc);this.UpdateScanState(1);A.ow([this
,K.AxH],this);},AlJ:function(){var K=this.K;var B;A.aa8("%s",Nq);K.AgS.Aur(this);
this.UpdateScanState(0);},SetSystemTime:function(Af$){},Auk:function(){A.Device.
DeviceClass.A6m.call(this);this.XC(1);},ACw:function(){A.Device.DeviceClass.A6k.
call(this);this.XC(2);},Co:function(E){this.UpdateOverlayMenu(E);},AtY:function(
E){this.UpdateUnderTemp(E);},Aaf:function(E){this.UpdateSyncState(E);},Azq:function(
){var aString;aString=((((((((((Cw+A.aaC(0,9).toFixed())+FN)+A.aaC(0,9).toFixed(
))+Of)+Nr)+A.aaC(30,90).toFixed())+A.z2(A.abg.AC4))+Of)+Kc)+A.aaC(1,100).toFixed(
))+Og;return aString;},PopupStateChanged:function(JZ,Ae){var Aem=A._NewObject(C.
PopupContext,0);Aem.Id=JZ;Aem.Gr=Ae;this.Aly.Trigger(Aem,false);},AB5:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ac5:function(E){this.UpdateVibrationOn(
E);},AtO:function(E){this.UpdateRatingMode(E);},AcW:function(E){this.UpdateFlashLightOn(
E);},Aag:function(E){this.UpdateTopLightOn(E);},Ac3:function(E){this.UpdateRGBTopLight(
E);},Ath:function(E){this.UpdateAutoRegistrationMode(E);},Apa:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},P3:function(E){this.UpdateDigitsID(
E);},Rr:function(E){this.UpdateOffsetID(E);},AB9:function(E){this.UpdateWeightValue(
E);},AtF:function(E){this.UpdateMassUnit(E);},AoN:function(E){A.Device.DeviceClass.
A6g.call(this,E);this.UpdateActiveActions(E);},AoO:function(E){A.Device.DeviceClass.
A6h.call(this,E);this.UpdateActiveActionsOrder(E);},Z7:function(E){A.Device.DeviceClass.
A6i.call(this,E);this.UpdateAutoActions(E);},ACY:function(){var K=this.K;this.UpdateMeasureState(
1);K.Buu.call(this,this);},ApK:function(){var K=this.K;var B;K.YW.Aur(this);this.
UpdateMeasureState(0);},DS:function(E){this.UpdateAnimalType(E);},AtZ:function(E
){this.UpdateWeightRecordingMode(E);},ABL:function(E){this.UpdatePredictedTempValue(
E);},UZ:function(Ol){A.aa8("%s%i",ME,Ol);},ABh:function(E){this.UpdateDemoMode(E
);},AA4:function(E){this.UpdateAgeRegistration(E);},At0:function(E){this.UpdateWeightRecordingScope(
E);},J9:function(E){this.UpdateGender(E);},Ao4:function(E){this.UpdateIDLastUsedMale(
E);},Ao3:function(E){this.UpdateIDLastUsedFemale(E);},Z6:function(E){this.UpdateAnimalListContent(
E);},AA6:function(E){this.UpdateAlarmListAction(E);},ABl:function(E){this.UpdateFlashLightInMeasureState(
E);},AcS:function(E){this.UpdateAnimalInfoContent(E);},AB8:function(E){this.UpdateWatchListAction(
E);},ABm:function(E){this.UpdateFreshCowListAction(E);},Aps:function(H){this.AoN(
15359);this.AoO(Pd);},Apt:function(H){this.Z7(RO);},Atf:function(E){this.UpdateAnimalTypesString(
E);},Apb:function(E){this.UpdateTemperaturesHighString(E);},Apc:function(E){this.
UpdateTemperaturesLowString(E);},Apv:function(H){this.Atf(Tn);this.Apc(Vi);this.
Apb(Vj);this.AtY(3600);},ABG:function(E){this.UpdateNoTransponderListAction(E);}
,AtA:function(E){this.UpdateFreshCowsHideMeasured(E);},Ao8:function(E){this.UpdateNaisIdLastUsedMale(
E);},Ao7:function(E){this.UpdateNaisIdLastUsedFemale(E);},AtK:function(E){this.UpdateNaisIdIncrementMale(
E);},AtJ:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A6n.call(this);A._GetAutoObject(A.kh.A1).BY(61);},Ali:function(
E){this.UpdateBootloaderMessage(E);},AA2:function(E){this.UpdateActionListAction(
E);},Atd:function(E){this.UpdateActionListHideMeasured(E);},SX:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Ats:function(E){this.UpdateDirectionOfCountingFemale(
E);},Att:function(E){this.UpdateDirectionOfCountingMale(E);},Atu:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Ao5:function(E){this.UpdateIDLastUsedUnisex(
E);},Ao9:function(E){this.UpdateNaisIdLastUsedUnisex(E);},AtL:function(E){this.UpdateNaisIdIncrementUnisex(
E);},Alj:function(E){this.UpdateEartagNrAssignmentMode(E);},O2:function(E){this.
UpdateBreed(E);},ABB:function(E){throw new Error(JV);},ABy:function(E){throw new
Error(JV);},AB2:function(E){throw new Error(JV);},AA8:function(E){throw new Error(
JV);},ABi:function(E){this.UpdateDryCowListAction(E);},AFL:function(AVm){var HM;
switch(AVm){case 15:HM=false;break;default:HM=true;}return HM;},ABF:function(E){
this.UpdateNoNaisIdListAction(E);},ABN:function(E){this.UpdateRegistrationsListAction(
E);},AB3:function(E){this.UpdateTransferProgress(E);},Apd:function(E){this.UpdateTransferTarget(
E);},ApJ:function(){var B;A.ow([B=A._GetAutoObject(C.ApH),B.A$q],this);},AtN:function(
E){this.UpdatePremisesID(E);},AtI:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},ABn:function(E){this.UpdateFreshCowSpan(E);},AB4:function(E){this.UpdateUSBState(
E);},Auo:function(Af7){var K=this.K;var result=A._NewObject(C.Ahr,0);result.AnV=
Af7;result.FileName=K.Bb0.call(this,Af7);switch(Af7){case 0:K.Brv.call(this,result
);break;case 1:K.Brs.call(this,result);break;default:throw new Error(RP+Af7.toFixed(
));}K.Ajo=result;return result;},AsR:function(){return true;},ArX:function(Yp){var
K=this.K;switch(Yp.AnV){case 0:A._GetAutoObject(A.Device.Device).A_(72,true,A.jm
,0,[this,K.A96]);break;case 1:A._GetAutoObject(A.Device.Device).A_(90,true,A.jm,
0,[this,K.A96]);break;default:throw new Error(Vk+Yp.AnV.toFixed());}},ABR:function(
E){throw new Error(JV);},Ate:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ABS:function(E){this.UpdateShutdownTimer(E);},AoS:function(E){this.UpdateAnimalListInfoItemMode(
E);},Apw:function(H){this.Atg(Vl);this.Aph(Yb);this.Apg(RQ);this.Apf(RQ);this.Api(
Yc);},Apg:function(E){this.UpdateWeightGainsHighString(E);},Aph:function(E){this.
UpdateWeightGainsLowString(E);},Atg:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Apf:function(E){this.UpdateWeightGainsAverageString(E);},Api:function(E){this.
UpdateWeightValueBirthString(E);},Atv:function(E){this.UpdateEvaluationAnimalType(
E);},AtR:function(E){this.UpdateStartScreen(E);},AAf:function(){return 1;},AAg:function(
){return 1;},Bui:function(H){switch(this.J5){case 33:case 34:case 31:case 49:case
54:case 63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},AxH:function(H){var K=
this.K;var B;if((this.ScanState===1)&&K.Arl.ACQ)K.AgS.ACX(this);A.aa8("%s",Vm);}
,Buu:function(H){var K=this.K;var B;if((this.MeasureState===1)&&K.Arl.Aul)K.YW.ACX(
this);},Bu7:function(H){this.UpdateMeasureState(3);},APb:function(H){var K=this.
K;var B;A.za([B=A._GetAutoObject(A.Device.Helper),B.AG4],[B=K.Arl,B.A2Z,B.AON],0
);this.QP.ABg(A._GetAutoObject(A.Device.Helper).A03(8));this.Rm.ABg(A._GetAutoObject(
A.Device.Helper).A03(8));},A4Y:function(H){var Awq=A._NewObject(A.Device.Aun,0);
Awq.OnSetTimestamp(1685968304);Awq.ABz(1);Awq.ABD(0);Awq.ABO(0);this.Rm=Awq;var AvY=
A._NewObject(A.Device.Aun,0);AvY.OnSetTimestamp(1685968304);AvY.ABz(1);AvY.ABD(0
);AvY.ABO(0);this.QP=AvY;var AjJ=A._NewObject(A.Device.Asq,0);AjJ.ABw(1);AjJ.ABx(
0);AjJ.ABv(0);AjJ.AB0(1);AjJ.AB1(0);AjJ.ABZ(0);AjJ.OnSetTimestamp(1685968304);this.
PY=AjJ;var Akc=A._NewObject(A.Device.Asq,0);Akc.ABw(1);Akc.ABx(0);Akc.ABv(0);Akc.
AB0(1);Akc.AB1(0);Akc.ABZ(0);Akc.OnSetTimestamp(1685968304);this.RG=Akc;this.AfL=
A.z2(A.abg.Unknown);},A8o:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Brv:function(Yp){var K=this.K;
var B;var Amw=To;var Cy=A._NewObject(A.Device.Animal,0);var P;var AxA=0;for(P=0;
P<A._GetAutoObject(A.Device.Device).Aq.Cf();P++){Cy.Fq(P,A._GetAutoObject(A.Device.
Device).Aq);if(Cy.IsBirthAnnouncementPending&&(Cy.NaisId>0)){Amw=Amw+(((((((((((((((((
K.Awu.call(this,A._GetAutoObject(A.Device.Device).Ac_)+String.fromCharCode(0x3B)
)+K.Awu.call(this,Cy.NaisId))+String.fromCharCode(0x3B))+K.BrT.call(this,Cy.DateOfBirth
))+String.fromCharCode(0x3B))+K.BrZ.call(this,Cy.Breed))+String.fromCharCode(0x3B
))+K.BrV.call(this,Cy.Gender))+String.fromCharCode(0x3B))+K.BrU.call(this,Cy.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Br1.call(this,Cy.WhereAbouts))+String.fromCharCode(
0x3B))+K.BrY.call(this,Cy.BirthType))+String.fromCharCode(0x3B))+K.Awu.call(this
,Cy.NaisIdMother))+Of);AxA++;}}Yp.Ay_=Amw;Yp.A4M=AxA;Yp.AC1=true;},Awu:function(
Ql){if(!Ql)return A.jm;return Ql.toFixed();},BrT:function(AVl){var Ap=A._NewObject(
A.Core.Bp,0);Ap.Initialize(AVl);return Ap.Format(Vn);},BrZ:function(AaU){if(!AaU
)return A.jm;return A._GetAutoObject(A.Device.Converter).AZP(AaU).toFixed();},BrV:
function(Ln){var result=A.jm;switch(Ln){case 0:result=Qh;break;case 1:result=Vo;
break;case 2:result=A.jm;break;default:A.aa8("%s",Ns+Ln.toFixed());}return result;
},BrU:function(AE_){if(!AE_)return A.jm;return AE_.toFixed();},Br1:function(Amp){
if(!Amp)return A.jm;return Amp.toFixed();},BrY:function(Aqm){return(Aqm+1).toFixed(
);},A96:function(H){var K=this.K;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!Ar&&(Ar.PopupState===7))switch(K.Ajo.AnV){case 0:K.A8o.call(this,K.
Ajo.FileName,Pe,K.Ajo.Ay_);break;case 1:K.A8o.call(this,K.Ajo.FileName,Pe,K.Ajo.
Ay_);break;default:throw new Error(RP+K.Ajo.AnV.toFixed());}},Brs:function(Yp){var
K=this.K;var B;var Amw=Tp;var Cy=A._NewObject(A.Device.Animal,0);var P;var AxA=0;
for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.Cf();P++){var AvU=A.jm;if(Cy.Aor(
))AvU=K.Br2.call(this,Cy.FirstBodyWeight);Cy.Fq(P,A._GetAutoObject(A.Device.Device
).Aq);Amw=Amw+(((((((((((K.Awu.call(this,Cy.NaisId)+String.fromCharCode(0x3B))+K.
BrW.call(this,Cy.VisualId))+String.fromCharCode(0x3B))+K.Awu.call(this,Cy.TransponderId
))+String.fromCharCode(0x3B))+K.BrS.call(this,Cy.DateOfBirth))+String.fromCharCode(
0x3B))+K.Br0.call(this,Cy.Gender))+String.fromCharCode(0x3B))+AvU)+Of);AxA++;}Yp.
Ay_=Amw;Yp.A4M=AxA;Yp.AC1=true;},Bb0:function(Af7){var AWy=A.jm;var Ad=A._NewObject(
A.Core.Bp,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DR());switch(Af7){case
0:AWy=Ad.Format(Yd);break;case 1:AWy=Ad.Format(Vp);break;default:throw new Error(
RP+Af7.toFixed());}return AWy;},BrW:function(Ql){return Ql.toFixed();},Br0:function(
Ln){var result=A.jm;switch(Ln){case 0:result=Ye;break;case 1:result=Yf;break;case
2:result=Vq;break;default:A.aa8("%s",Ns+Ln.toFixed());}return result;},Br2:function(
Ny){if(Ny<=0)return A.jm;return A._GetAutoObject(A.Device.Converter).AlV(Ny);},BrS:
function(AVl){var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(AVl);return Ap.Format(
Vr);},_Init:function(aArg){var K=this.K;A.abm.FE._Init.call(K.AgS={I:this},0);A.
abm.FE._Init.call(K.YW={I:this},0);K.__proto__=C.DeviceClass;this.Ati(100);this.
Aln(1);this.Ao4(200);this.Ao3(100);this.Ao8(276000912345678);this.Ao7(276000923456789
);this.Ao5(500);this.Ao9(276000901234567);this.O2(1);K.AgS.IG(1);K.AgS.FK(1000);
K.YW.UU(0);K.YW.IG(1);K.YW.FK(750);K.YW.BX=50000;K.AgS.Rn=[this,K.Bui];K.Arl=A._GetAutoObject(
C.Aar);K.YW.Rn=[this,K.Bu7];K.YW.Q=[this,this.AAZ,this.AEX];K.Init.call(this,aArg
);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.AgS._Done();K.YW._Done(
);A.hJ--;},_ReInit:function(){var K=this.K;K.AgS._ReInit();K.YW._ReInit();K.C6.call(
this);},_Mark:function(D){var B;if((B=this.Arl)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ajo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgS)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.ADf={AY:0,_Init:function(aArg){C.UP._Init.call(this,aArg);this.__proto__=C.ADf;
},_className:"DeviceSimulation::UInt8"};C.ADd={AY:0,_Init:function(aArg){C.UP._Init.
call(this,aArg);this.__proto__=C.ADd;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={AYw:0,ABT:function(E){var K=this.K;K.AYw=K.AYw+(E-this.DR());A.Device.
HelperClass.A6j.call(this,E);},DR:function(){var K=this.K;return A.Device.HelperClass.
A6f.call(this)+K.AYw;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A45={Aul:false,ACQ:false,AOM:function(E){if(this.ACQ===E)return;this.ACQ=E;A.
aat([this,this.A2Y,this.AOM],0);},A2Y:function(){return this.ACQ;},AON:function(
E){if(this.Aul===E)return;this.Aul=E;A.aat([this,this.A2Z,this.AON],0);},A2Z:function(
){return this.Aul;},Bez:function(){return true;},_Init:function(aArg){this.__proto__=
C.A45;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Aar={_Init:function(){C.A45._Init.call(this,0);},_variants:function(){return A.
abq.Aar._variants();},_this:null};C.PopupContext={Gr:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cs:function(AF){var G8=A.Device.Rating.A6l.call(this,AF);if(G8){var Qp=
A._GetAutoObject(A.Device.Device).Aq;var Z=A._GetAutoObject(A.Device.Device).Aq.
LM(0,this.AnimalId);if(Z!==-1){var IR=Qp.NS();if(IR<=0)A.aa8("%s",RR);else{var Cy=
A._NewObject(A.Device.Animal,0);Cy.Fq(Z,Qp);if((this.Temperature>0)&&(Cy.TimestampLastTemperature<
this.Timestamp)){Qp.A4X(Z,5,this.Temperature);Qp.AiF(Z,17,this.RatingTemperature
);Qp.Aap(Z,30,this.Timestamp);}if(this.BodyWeight>0){if(Cy.TimestampLastWeighing<=
this.Timestamp){Qp.API(Z,18,this.BodyWeight);Qp.Aap(Z,19,this.Timestamp);}if(!Cy.
TimestampFirstWeighing||(Cy.TimestampFirstWeighing>=this.Timestamp)){Qp.API(Z,23
,this.BodyWeight);Qp.Aap(Z,24,this.Timestamp);Qp.GJ(Z,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).ACo(this)){var K1=A._GetAutoObject(A.Device.Helper).Azv(this);Qp.
AiF(Z,13,K1);Qp.Aap(Z,31,this.Timestamp);}Qp.NU(IR);}}}return G8;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.O8={FW:A.aan(512,null,null
),Ou:0,AFC:0,AHa:0,AYz:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AGN:0,AX9:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),A9n:512,AwQ:-1,AVW:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AGl:false,Cq:function(Z,AR){var A5=this.Sx(Z);if(!!A5)return A5.
Cq(AR);return 0;},Ug:function(Z,AR){var A5=this.Sx(Z);if(!!A5)return A5.Ug(AR);return A.
jm;},Hs:function(Z,AR){var A5=this.Sx(Z);if(!!A5)return A5.Hs(AR);return false;}
,Uh:function(Z,AR){var A5=this.Sx(Z);if(!!A5)return A5.Uh(AR);return 0;},Q_:function(
Z,AR){var A5=this.Sx(Z);if(!!A5)return A5.Q_(AR);return 0;},NS:function(){if(this.
AGl)throw new Error(Yg);this.AGl=true;return 12345;},NU:function(Amm){if(!this.AGl
)throw new Error(Yh);if(Amm!==12345)throw new Error(AaK);this.AGl=false;return true;
},WZ:function(){return this.AY7(A._NewObject(C.ACA,0));},XW:function(Z,AR,CM){var
A5=this.Sx(Z);if(!!A5)return A5.XW(AR,CM);return false;},GJ:function(Z,AR,CM){var
A5=this.Sx(Z);if(!!A5)return A5.GJ(AR,CM);return false;},XV:function(Z,AR,CM){var
A5=this.Sx(Z);if(!!A5)return A5.XV(AR,CM);return false;},MC:function(Z,AR,CM){var
A5=this.Sx(Z);if(!!A5)return A5.MC(AR,CM);return false;},XU:function(Z,AR,CM){var
A5=this.Sx(Z);if(!!A5)return A5.XU(AR,CM);return false;},OnSetId:function(E){if(
this.Id===E)return;this.Id=E;this.A7$();switch(this.Id){case 0:{this.A9n=128;A.ow([
this,this.Bpo],this);}break;case 1:A.ow([this,this.Bpq],this);break;case 3:A.ow([
this,this.Bpn],this);break;case 4:A.ow([this,this.Bpp],this);break;case 2:break;
default:throw new Error(Qi+this.Id.toFixed());}},Cf:function(){return this.Ou;},
LQ:function(Z,AR){var A5=this.Sx(Z);if(!!A5)return A5.LQ(AR);return 0;},S8:function(
Z,AR,CM){var A5=this.Sx(Z);if(!!A5)return A5.S8(AR,CM);return false;},G1:function(
){this.A7$();return true;},If:function(){return this.A9n;},AY7:function(Z){if(this.
Ou>=512)throw new Error(AaL);this.FW.Set(this.Ou,Z);this.Ou=this.Ou+1;switch(this.
Id){case 0:{this.AwQ=this.Ou;this.GJ(this.Ou-1,0,this.AwQ);}break;case 1:{this.AwQ=
this.Ou-1;this.GJ(this.Ou-1,0,this.AwQ);}break;default:;}A.ow([this,this.Aia],this
);return this.Ou-1;},Sx:function(aIndex){if((aIndex<0)||(aIndex>=512))return null;
return this.FW.Get(aIndex);},A7$:function(){var P;for(P=0;P<512;P=P+1)this.FW.Set(
P,null);this.Ou=0;this.AFC=0;this.AGN=0;this.AHa=0;A.ow([this,this.Aia],this);},
AGh:function(){this.AFC=(this.AFC+1)%15;return this.AVW.Get(this.AFC);},AWJ:function(
){this.AHa=(this.AHa+1)%10;return this.AYz.Get(this.AHa);},AF6:function(H){if(this.
K&&this.K.AF6)return this.K.AF6.apply(this,arguments);else return C.O8.Bpw.apply(
this,arguments);},Bpw:function(H){var B;var NF=true;this.Bf(12310001,10,1,A._GetAutoObject(
A.Device.Helper).AfS(12),0,1,true,true,false,true,39000,0,0,false,0,false,0,0,0,
0);this.Bf(12310020,20,12,A._GetAutoObject(A.Device.Helper).AfS(12),0,0,false,false
,true,true,36500,0,0,false,0,false,0,0,0,0);this.Bf(12310021,10,1,A._GetAutoObject(
A.Device.Helper).AfS(9),0,0,true,false,false,true,37200,0,0,false,0,false,0,0,0,
0);this.Bf(12310022,20,2,A._GetAutoObject(A.Device.Helper).AfS(830),0,1,false,false
,false,true,41200,A._GetAutoObject(A.Device.Helper).AfS(1),1,true,1,false,0,0,0,
0);this.Bf(12310023,20,2,A._GetAutoObject(A.Device.Helper).AfS(1200),0,1,false,false
,false,true,43500,A._GetAutoObject(A.Device.Helper).AfS(8),2,false,1,false,0,0,0
,0);this.Bf(12310026,20,2,A._GetAutoObject(A.Device.Helper).AfS(8),0,0,true,false
,false,true,34000,0,0,false,0,false,0,0,0,0);var P;var A$x=0;for(P=1;P<=7;P=P+1){
A$x=3680+(20*P);NF=A$x>3800;this.Bf(12310050+(((B=P)<0)?B+0x10000000000000000:B)
,30+(P%3),3,A._GetAutoObject(A.Device.Helper).AfS(7-P),0,1,NF,false,false,true,36000+(
P*900),0,0,false,0,true,0,0,0,0);}},Bpo:function(s){this.AF6(s);},AF8:function(H
){if(this.K&&this.K.AF8)return this.K.AF8.apply(this,arguments);else return C.O8.
Bpy.apply(this,arguments);},Bpy:function(H){var Ad=A._GetAutoObject(A.Device.Helper
).DR();var P;Ad=Ad-2678400;var Agt;var A8q;for(P=0;P<32;P=P+1){var AWu=this.Bsc(
);for(;AWu>0;AWu=AWu-1){Agt=this.AWJ();A8q=A._GetAutoObject(A.Device.Converter).
ApN(0,Agt);this.AB(Ad,12310020,Agt,A8q,this.AGh(),this.AGh(),this.AGh(),this.AGh(
),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AB(Ad,12310020,0,0,0,0,0,0,43700);this.AB(Ad-
86400,12310001,0,0,0,0,0,0,49800);this.AB(Ad,12310001,0,0,0,0,0,0,51000);Agt=this.
AWJ();this.AB(Ad,12310001,Agt,A._GetAutoObject(A.Device.Converter).ApN(0,Agt),1,
3,3,3,0);Agt=this.AWJ();this.AB(Ad-86400,12310022,3800,A._GetAutoObject(A.Device.
Converter).ApN(1,3800),2,3,3,3,0);this.AB(Ad,12310022,Agt,A._GetAutoObject(A.Device.
Converter).ApN(1,Agt),2,3,3,3,0);},Bpq:function(s){this.AF8(s);},Bf:function(JZ,
BpU,Bp$,A7f,Aqm,Ln,Bp1,Bp7,Bp5,Bp6,Ny,BpG,Bp9,Bp4,D7,Bp2,AaU,AE_,Amp,Bqe){var Cy=
A._NewObject(A.Device.Animal,0);Cy.GG();Cy.At1(0);Cy.Ac1(0);Cy.SY(false);Cy.Ain(
false);Cy.Nf(JZ);Cy.O3(JZ);Cy.XK(A._GetAutoObject(A.Device.Helper).AlO(Cy.TransponderId
));Cy.Z$(BpU);Cy.Alo(Bp$);Cy.AcV(A7f);Cy.Aih(Aqm);Cy.J9(Ln);Cy.AlG(Bp1);Cy.ACI(Bp7
);Cy.Afv(Bp6);Cy.SY(Bp5);Cy.Ao6(Bp4);Cy.AtD(Bp9);Cy.Atp(BpG);Cy.DS(D7);Cy.Alm(Bp2
);Cy.O2(AaU);Cy.Aij(AE_);Cy.Aah(Amp);Cy.Alq(Bqe);Cy.Cs(this);if(Ny>0)A._GetAutoObject(
C.At_).AB(A7f,JZ,0,0,0,0,0,0,Ny);},AB:function(Lm,AaS,Amk,Bqq,BpO,BpP,Bpz,Bqt,BpA
){var Ca=A._NewObject(A.Device.Rating,0);Ca.GG();var A7R=A._GetAutoObject(C.AnJ).
AKf(26,AaS);if(A7R>=0)Ca.OnSetAnimalId(A._GetAutoObject(C.AnJ).Cq(A7R,0));else A.
aa8("%s%U",AdG,AaS);Ca.OnSetTimestamp(Lm);Ca.OnSetTemperature(Amk);Ca.OnSetRatingTemperature(
Bqq);Ca.OnSetFaeces(BpO);Ca.OnSetFeed(BpP);Ca.OnSetAppearance(Bpz);Ca.OnSetRespiratory(
Bqt);Ca.OnSetBodyWeight(BpA);Ca.Cs(this);},A0J:function(aColumn,A2){var P;for(P=
0;P<this.Ou;P=P+1)if(this.FW.Get(P).Cq(aColumn)===A2)return P;return-1;},Bsc:function(
){this.AGN=(this.AGN+1)%10;return this.AX9.Get(this.AGN);},AF5:function(H){if(this.
K&&this.K.AF5)return this.K.AF5.apply(this,arguments);else return C.O8.Bpv.apply(
this,arguments);},Bpv:function(H){this.AjD(10,Yi);this.AjD(20,Vs);this.AjD(30,Yj
);this.AjD(31,AdH);this.AjD(32,KO);},Bpn:function(s){this.AF5(s);},AjD:function(
JZ,BpV){var AFw=A._NewObject(A.Device.AnimalGroup,0);AFw.GG();AFw.OnSetId(JZ);AFw.
ABp(BpV);AFw.Cs(this);},Zx:function(){return this.AwQ;},AKf:function(aColumn,A2){
var P;for(P=0;P<this.Ou;P=P+1)if(this.FW.Get(P).LQ(aColumn)===A2)return P;return-
1;},AF7:function(H){if(this.K&&this.K.AF7)return this.K.AF7.apply(this,arguments
);else return C.O8.Bpx.apply(this,arguments);},Bpx:function(H){this.YG(2016,216,
6);this.YG(2017,217,7);this.YG(2018,218,8);this.YG(2019,219,9);this.YG(2020,220,
10);this.YG(2021,221,11);},Bpp:function(s){this.AF7(s);},YG:function(Aa1,BpK,BpJ
){var Tz=A._NewObject(A.Device.CalfDeregistrations,0);Tz.GG();Tz.Ait(Aa1);Tz.Atr(
BpK);Tz.Atq(BpJ);Tz.Cs(this);},_Init:function(aArg){A.Device.ITable._Init.call(this
,aArg);(this.FW=[]).__proto__=C.O8.FW;(this.AYz=[]).__proto__=C.O8.AYz;(this.AX9=[
]).__proto__=C.O8.AX9;(this.AVW=[]).__proto__=C.O8.AVW;this.__proto__=C.O8;var KP=
this._variants();if(KP){this.K={};KP._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.
call(this);},_ReInit:function(){A.Device.ITable._ReInit.call(this);if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D
);A.aaf(this.FW,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.abq.
O8._variants();},K:null,_className:"DeviceSimulation::TableData"};C.AnJ={_Init:function(
){C.O8._Init.call(this,0);this.OnSetId(0);},_variants:function(){return this;},_this:
null};C.Ayb={_Init:function(){C.O8._Init.call(this,0);this.OnSetId(3);},_variants:
function(){return this;},_this:null};C.At_={_Init:function(){C.O8._Init.call(this
,0);this.OnSetId(1);},_variants:function(){return this;},_this:null};C.Ga={Ajx:A.
aan(128,null,null),FO:null,AmM:0,Cq:function(Z,AR){var A5=this.YE(Z);if(!!A5)return A5.
Cq(AR);return 0;},Ug:function(Z,AR){var A5=this.YE(Z);if(!!A5)return A5.Ug(AR);return A.
jm;},Hs:function(Z,AR){var A5=this.YE(Z);if(!!A5)return A5.Hs(AR);return false;}
,OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.
ACa(A._GetAutoObject(C.AnJ));break;case 1:this.ACa(A._GetAutoObject(C.At_));break;
case 3:this.ACa(A._GetAutoObject(C.Ayb));break;case 4:this.ACa(A._GetAutoObject(
C.Ayy));break;case 2:break;default:throw new Error(Qi+this.Id.toFixed());}},Cf:function(
){if(!!this.Filter)return this.AmM;else if(!!this.FO)return this.FO.Ou;return 0;
},Bo:function(E){A.Device.ITable.Bo.call(this,E);this.AVU(this);},Uh:function(Z,
AR){var A5=this.YE(Z);if(!!A5)return A5.Uh(AR);return 0;},Q_:function(Z,AR){var A5=
this.YE(Z);if(!!A5)return A5.Q_(AR);return 0;},NS:function(){if(!!this.FO)return this.
FO.NS();return-1;},NU:function(Amm){var G8=false;if(!!this.FO)G8=this.FO.NU(Amm);
if(G8)A.ow([this,this.AVU],this);return G8;},WZ:function(){if(!!this.Filter)throw new
Error(AaM+A._GetAutoObject(A.Device.Converter).BbE(this.Id,this.Filter));if(!!this.
FO)return this.FO.AY7(A._NewObject(C.ACA,0));return-1;},XW:function(Z,AR,CM){var
A5=this.YE(Z);if(!!A5)return A5.XW(AR,CM);return false;},GJ:function(Z,AR,CM){var
A5=this.YE(Z);if(!!A5)return A5.GJ(AR,CM);return false;},XV:function(Z,AR,CM){var
A5=this.YE(Z);if(!!A5)return A5.XV(AR,CM);return false;},MC:function(Z,AR,CM){var
A5=this.YE(Z);if(!!A5)return A5.MC(AR,CM);return false;},XU:function(Z,AR,CM){var
A5=this.YE(Z);if(!!A5)return A5.XU(AR,CM);return false;},LM:function(aColumn,A2){
if(!!this.Filter){var P;for(P=0;P<this.AmM;P=P+1)if(this.Ajx.Get(P).Cq(aColumn)===
A2)return P;return-1;}else if(!!this.FO)return this.FO.A0J(aColumn,A2);return-1;
},LQ:function(Z,AR){var A5=this.YE(Z);if(!!A5)return A5.LQ(AR);return 0;},S8:function(
Z,AR,CM){var A5=this.YE(Z);if(!!A5)return A5.S8(AR,CM);return false;},AhA:function(
aColumn,A2){if(!!this.Filter){var P;for(P=0;P<this.AmM;P=P+1)if(this.Ajx.Get(P).
LQ(aColumn)===A2)return P;return-1;}else if(!!this.FO)return this.FO.AKf(aColumn
,A2);return-1;},G1:function(){if(!!this.FO)return this.FO.G1();return false;},Ahy:
function(aColumn,A2){if(!!this.FO)return this.FO.A0J(aColumn,A2)>=0;return false;
},Acb:function(aColumn,A2){if(!!this.FO)return this.FO.AKf(aColumn,A2)>=0;return false;
},If:function(){if(!!this.FO)return this.FO.If();return 0;},Zx:function(){if(!!this.
FO)return this.FO.Zx();return-1;},PG:function(){if(!!this.FO)return this.FO.Ou;return 0;
},AVU:function(H){this.AV9();if(!!this.Filter&&!!this.FO){var P;for(P=0;P<this.FO.
Cf();P=P+1){var AWz=true;var As=this.Filter.AKu();var A5=this.FO.Sx(P);if(!!A5)while(
AWz&&!!As){AWz=A5.BcC(As);As=this.Filter.AKy(As);}else A.aa8("%s",((RS+P.toFixed(
))+Nt)+this.FO.Cf().toFixed());if(AWz){this.Ajx.Set(this.AmM,this.FO.FW.Get(P));
this.AmM=this.AmM+1;}}}A.ow([this,this.Aia],this);},AV9:function(){var P;for(P=0;
P<128;P=P+1)this.Ajx.Set(P,null);this.AmM=0;},ACa:function(E){if(this.FO===E)return;
if(!!this.FO)A.zl([this,this.AYx],this.FO,0);this.FO=E;if(!!this.FO){A.y_([this,
this.AYx],this.FO,0);A.ow([this,this.AYx],this);}},AYx:function(H){A.ow([this,this.
AVU],this);},YE:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.Ajx.Get(aIndex);}else if(!!this.FO)return this.FO.Sx(
aIndex);A.aa8("%s",AlX+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.Ajx=[]).__proto__=C.Ga.Ajx;this.__proto__=C.Ga;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Ajx,D);if((
B=this.FO)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A46={J2:null,Abz:null,AYr:function(H){if(A._GetAutoObject(C.Aar).Bez()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Aaf(1);this.Abz.An(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Aaf(2);A._GetAutoObject(A.Device.Device).Apd(A._GetAutoObject(A.Device.Device
).Aq.PG());this.J2.FK(A._GetAutoObject(A.Device.Device).Adx*50);this.J2.BX=A._GetAutoObject(
A.Device.Device).Adx;this.J2.An(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Aaf(3);this.Abz.An(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Aaf(
4);A._GetAutoObject(A.Device.Device).Apd(A._GetAutoObject(A.Device.Device).Aq.PG(
));this.J2.FK(A._GetAutoObject(A.Device.Device).Adx*50);this.J2.BX=A._GetAutoObject(
A.Device.Device).Adx;this.J2.An(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Aaf(5);this.Abz.An(true);}break;case 5:A.ow([this,this.A$q],this);break;case 7:
case 6:break;default:A.aa8("%s%e",AlY,A._GetAutoObject(A.Device.Device).SyncState
);}},BtE:function(H){this.Abz.An(false);A.ow([this,this.AYr],this);},BuB:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Aaf(0);A.ow([this,this.AYr],this);}break;default:;}},A$q:function(
H){this.Abz.An(false);this.J2.An(false);A._GetAutoObject(A.Device.Device).Aaf(0);
},_Init:function(aArg){A.abm.FE._Init.call(this.J2={I:this},0);A.Core.Timer._Init.
call(this.Abz={I:this},0);this.__proto__=C.A46;var B;this.J2.IG(1);this.Abz.P4(2000
);this.J2.Rn=[this,this.AYr];this.J2.Q=[B=A._GetAutoObject(A.Device.Device),B.AOc
,B.AUZ];this.Abz.Mz=[this,this.BtE];A.hJ++;},_Done:function(){this.__proto__=null;
this.J2._Done();this.Abz._Done();A.hJ--;},_ReInit:function(){this.J2._ReInit();this.
Abz._ReInit();},_Mark:function(D){var B;if((B=this.J2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.ApH={_Init:function(){C.A46._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.ADe={AY:0,_Init:function(aArg){C.UP._Init.call(this,aArg);this.__proto__=
C.ADe;},_className:"DeviceSimulation::UInt64"};C.Ayy={_Init:function(){C.O8._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={Dx:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Cj.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.Wg={AbX:null
,CF:function(H){var K=this.K;A.aa8("%s",JW);K.AbX.An(true);},Fc:function(H){var K=
this.K;if(K.AbX.Bw===true){K.AbX.An(false);A.aa8("%s",AlZ);}},BdI:function(H){var
K=this.K;K.AbX.An(false);A._GetAutoObject(A.kh.A1).AfA(A._GetAutoObject(A.Device.
Device).Auq);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.AbX={
I:this},0);K.__proto__=C.Wg;this.AcE.G(Al0);K.AbX.P4(1500);this.S9.R(Af0);this.S9.
W(true);this.AcE.At(A.zW(A.abi.AM8));K.AbX.Mz=[this,K.BdI];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.AbX._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.AbX._ReInit();},_Mark:function(D){var B;if((B=this.AbX)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ahr={Ay_:A.jm,_Init:function(aArg){A.Device.Ahr._Init.call(this,aArg);this.__proto__=
C.Ahr;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.AAd.__proto__=C.UP;C.String.__proto__=C.UP;C.Ayt.__proto__=C.
UP;C.ADf.__proto__=C.UP;C.ADd.__proto__=C.UP;C.O8.__proto__=A.Device.ITable;C.Ga.
__proto__=A.Device.ITable;C.ADe.__proto__=C.UP;C.Ahr.__proto__=A.Device.Ahr;};C.
_ReInit=function(){var B;if((B=C.Aar._this))B._ReInit();if((B=C.AnJ._this))B._ReInit(
);if((B=C.Ayb._this))B._ReInit();if((B=C.At_._this))B._ReInit();if((B=C.ApH._this
))B._ReInit();if((B=C.Ayy._this))B._ReInit();};C.Dq=function(D){var B;if((B=C.Aar.
_this)&&(B._cycle!=D))B._Done(C.Aar._this=null);if((B=C.AnJ._this)&&(B._cycle!=D
))B._Done(C.AnJ._this=null);if((B=C.Ayb._this)&&(B._cycle!=D))B._Done(C.Ayb._this=
null);if((B=C.At_._this)&&(B._cycle!=D))B._Done(C.At_._this=null);if((B=C.ApH._this
)&&(B._cycle!=D))B._Done(C.ApH._this=null);if((B=C.Ayy._this)&&(B._cycle!=D))B._Done(
C.Ayy._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */