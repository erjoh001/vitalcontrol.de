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
var B3="ERROR: access to null Bool data in column [";var BI="]";var EG="Access to inexistent column index: ";
var Gr=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I4="Unsupported filter criterion class";var
Ip="Operator not handled:";var Oc="1,8";var Pb="INFO: Device.StartScan() called.";
var Nm="INFO: Device.StopScan() called.";var Cv="V0.";var FK=".";var Od="\n";var
Nn="Temp: ";var Ka="Battery: ";var Oe="%%";var MB="Selected animal with row index";
var Pc="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
RL="1,2";var Ti="0,1,2";var Ve="3900,3950,4000";var Vf="4050,4100,4150";var JT="Read only";
var RM="Unknown data export type: ";var Vg="Unhandled Device::DataExportType: ";
var Vh="0,2";var X7="650,150";var RN="800,200";var X8="40000,4000";var Vi="Simulate Scan";
var Tj="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Vj="%d.%m.%Y";var Qg="1";var Vk="2";var Np="Unknown gender: ";var Pd="text/csv";
var Tk="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var X9="hit-geburt-%d-%m-%Y_%H-%M.csv";var Vl="animals-%d-%m-%Y_%H-%M.csv";var X_=
"M";var X$="F";var Vm="?";var Vn="%Y-%m-%d";var RO="ERROR: Cannot start transaction";
var Ya="Nested transactions are not allowed.";var Yb="Transaction not opened.";var
AaC="Wrong transaction ID.";var Qh="Unhandled TableId:";var AaD="Maximum number of rows reached.";
var Adz="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var Yc=
"10";var Vo="20";var Yd="30";var AdA="31";var KM="32";var AaE="Severe: filter set when inserting row into table: ";
var RP="ERROR: Row not found with index [";var Nq="] while Rows Count = ";var AlR=
"ERROR: trying to access an inexistent row with Index=";var AlS="Invalid Device::SyncState";
var JU="Forwarding to home screen after 500 milliseconds ...";var AlT="Forwarding to home screen canceled...";
var AlU=[0,58,240,208];var AfU="VitalControl\nstarting up \u2026";
C.Table={F_:null,Init:function(aArg){var K=this.K;A.y_([this,this.Ah4],K.F_,0);},
Cp:function(Z,AQ){var K=this.K;return K.F_.Cp(Z,AQ);},Ub:function(Z,AQ){var K=this.
K;return K.F_.Ub(Z,AQ);},Hq:function(Z,AQ){var K=this.K;return K.F_.Hq(Z,AQ);},OnSetId:
function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.F_.OnSetId(E);},Cd:function(
){var K=this.K;return K.F_.Cd();},Bo:function(E){var K=this.K;A.Device.ITable.Bo.
call(this,E);K.F_.Bo(E);},Uc:function(Z,AQ){var K=this.K;return K.F_.Uc(Z,AQ);},
Q_:function(Z,AQ){var K=this.K;return K.F_.Q_(Z,AQ);},NQ:function(){var K=this.K;
return K.F_.NQ();},NS:function(Amh){var K=this.K;return K.F_.NS(Amh);},WU:function(
){var K=this.K;return K.F_.WU();},XQ:function(Z,AQ,CK){var K=this.K;return K.F_.
XQ(Z,AQ,CK);},GG:function(Z,AQ,CK){var K=this.K;return K.F_.GG(Z,AQ,CK);},XP:function(
Z,AQ,CK){var K=this.K;return K.F_.XP(Z,AQ,CK);},My:function(Z,AQ,CK){var K=this.
K;return K.F_.My(Z,AQ,CK);},XO:function(Z,AQ,CK){var K=this.K;return K.F_.XO(Z,AQ
,CK);},LL:function(aColumn,A2){var K=this.K;return K.F_.LL(aColumn,A2);},LP:function(
Z,AQ){var K=this.K;return K.F_.LP(Z,AQ);},S3:function(Z,AQ,CK){var K=this.K;return K.
F_.S3(Z,AQ,CK);},Ahs:function(aColumn,A2){var K=this.K;return K.F_.Ahs(aColumn,A2
);},GZ:function(){var K=this.K;return K.F_.GZ();},Ahq:function(aColumn,A2){var K=
this.K;return K.F_.Ahq(aColumn,A2);},Ab5:function(aColumn,A2){var K=this.K;return K.
F_.Ab5(aColumn,A2);},Ie:function(){var K=this.K;return K.F_.Ie();},Zq:function(){
var K=this.K;return K.F_.Zq();},PF:function(){var K=this.K;return K.F_.PF();},_Init:
function(aArg){var K=this.K;C.F_._Init.call(K.F_={I:this},0);K.__proto__=C.Table;
K.Init.call(this,aArg);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.
F_._Done();A.hJ--;},_ReInit:function(){var K=this.K;K.F_._ReInit();},_Mark:function(
D){var B;if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){return this;
},_className:"DeviceSimulation::Table"};C.ACs={RY:A.aan(42,null,null),Cp:function(
aColumn){var B;this.Yo(aColumn);var Ao=(C.Az8.isPrototypeOf(B=this.RY.Get(aColumn
))?B:null);if(!!Ao)return Ao.AY;return 0;},Ub:function(aColumn){var B;this.Yo(aColumn
);var Ao=(C.String.isPrototypeOf(B=this.RY.Get(aColumn))?B:null);if(!!Ao)return Ao.
AY;return A.jm;},Hq:function(aColumn){var B;this.Yo(aColumn);var Ao=(C.Ayo.isPrototypeOf(
B=this.RY.Get(aColumn))?B:null);if(!!Ao)return Ao.AY;else A.aa8("%s",(B3+aColumn.
toFixed())+BI);return false;},GG:function(aColumn,A2){this.Yo(aColumn);var Ao=A.
_NewObject(C.Az8,0);Ao.AY=A2;this.RY.Set(aColumn,Ao);return true;},XO:function(aColumn
,A2){this.Yo(aColumn);var Ao=A._NewObject(C.String,0);Ao.AY=A2;this.RY.Set(aColumn
,Ao);return true;},My:function(aColumn,A2){this.Yo(aColumn);var Ao=A._NewObject(
C.Ayo,0);Ao.AY=A2;this.RY.Set(aColumn,Ao);return true;},Yo:function(aColumn){if((
aColumn<0)||(aColumn>=42))throw new Error((EG+aColumn.toFixed())+Gr);},Bcm:function(
AK){if(!!(A.Device.Int32FilterCriterion.isPrototypeOf(AK)?AK:null))return this.AFI(
this.Cp(AK.EE),AK.Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AK)?AK:null
).AY);else if(!!(A.Device.UInt32FilterCriterion.isPrototypeOf(AK)?AK:null))return this.
BqZ(this.Q_(AK.EE),AK.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AK)?
AK:null).AY);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AK)?AK:null
))return this.BqY(this.Ub(AK.EE),AK.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AK)?AK:null
))return this.BqX(this.Hq(AK.EE),AK.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AK)?
AK:null))return this.AFI(this.Cp(AK.EE),AK.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AK)?AK:null).AY);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AK)?AK:null))return this.AFI(this.Cp(AK.EE),AK.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AK)?AK:null).AY);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AK)?AK:null))return this.Bq1(this.Uc(AK.EE),AK.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AK)?AK:null).AY)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AK)?AK:null))return this.Bq0(this.LP(AK.EE),AK.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AK)?AK:null).AY);else if(!!(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AK)?AK:null))return this.AFI(this.Cp(AK.EE),AK.Operator,(A.Device.
WhereAboutsFilterCriterion.isPrototypeOf(AK)?AK:null).AY);else throw new Error(I4
);},AFI:function(HC,En,HD){switch(En){case 0:return HC===HD;case 2:return HC>HD;
case 3:return HC<HD;case 4:return HC.toFixed().indexOf(HD.toFixed(),0)>=0;case 5:
return HC!==HD;default:throw new Error(Ip+En.toFixed());}},BqY:function(HC,En,HD
){switch(En){case 0:return HC===HD;case 2:return HC>HD;case 3:return HC<HD;case 4:{
A.aa8("%s%e%s%i",HC,En,HD,HC.indexOf(HD,0));return HC.indexOf(HD,0)>=0;}case 5:return HC
!==HD;default:throw new Error(Ip+En.toFixed());}},BqX:function(HC,En,HD){switch(
En){case 0:return HC===HD;case 2:return false;case 3:return false;case 4:return false;
case 5:return HC!==HD;default:throw new Error(Ip+En.toFixed());}},Uc:function(aColumn
){var B;this.Yo(aColumn);var Ao=(C.AC9.isPrototypeOf(B=this.RY.Get(aColumn))?B:null
);if(!!Ao)return Ao.AY;return 0;},XQ:function(aColumn,A2){this.Yo(aColumn);var Ao=
A._NewObject(C.AC9,0);Ao.AY=A2;this.RY.Set(aColumn,Ao);return true;},Bq1:function(
HC,En,HD){switch(En){case 0:return HC===HD;case 2:return HC>HD;case 3:return HC<
HD;case 5:return HC!==HD;default:throw new Error(Ip+En.toFixed());}},Q_:function(
aColumn){var B;this.Yo(aColumn);var Ao=(C.AC7.isPrototypeOf(B=this.RY.Get(aColumn
))?B:null);if(!!Ao)return Ao.AY;return 0;},XP:function(aColumn,A2){this.Yo(aColumn
);var Ao=A._NewObject(C.AC7,0);Ao.AY=A2;this.RY.Set(aColumn,Ao);return true;},BqZ:
function(HC,En,HD){switch(En){case 0:return HC===HD;case 2:return HC>HD;case 3:return HC<
HD;case 5:return HC!==HD;default:throw new Error(Ip+En.toFixed());}},LP:function(
aColumn){var B;this.Yo(aColumn);var Ao=(C.AC8.isPrototypeOf(B=this.RY.Get(aColumn
))?B:null);if(!!Ao)return Ao.AY;return 0;},S3:function(aColumn,A2){this.Yo(aColumn
);var Ao=A._NewObject(C.AC8,0);Ao.AY=A2;this.RY.Set(aColumn,Ao);return true;},Bq0:
function(HC,En,HD){switch(En){case 0:return HC===HD;case 2:return HC>HD;case 3:return HC<
HD;case 5:return HC!==HD;default:throw new Error(Ip+En.toFixed());}},_Init:function(
aArg){(this.RY=[]).__proto__=C.ACs.RY;this.__proto__=C.ACs;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;A.aaf(
this.RY,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceSimulation::RowData"};C.UK={_Init:function(aArg){this.__proto__=
C.UK;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"};C.Az8={AY:0
,_Init:function(aArg){C.UK._Init.call(this,aArg);this.__proto__=C.Az8;},_className:
"DeviceSimulation::Int32"};C.String={AY:A.jm,_Init:function(aArg){C.UK._Init.call(
this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"};C.Ayo={
AY:false,_Init:function(aArg){C.UK._Init.call(this,aArg);this.__proto__=C.Ayo;},
_className:"DeviceSimulation::Bool"};C.DeviceClass={Arg:null,Aji:null,AgK:null,YQ:
null,C3:function(){var K=this.K;K.A4M.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Xw(3);A.za([this,K.AxC],[B=K.Arg,B.A2N,B.AOE],0);this.UpdateAutoActions(
Oc);K.A4M.call(this,this);this.Aps(this);this.Apt(this);this.App(this);this.Apq(
this);A.ow([this,K.AO5],this);},Xw:function(E){this.UpdateActiveScreen(E);},Atd:
function(E){this.UpdateBatteryChargeState(E);},AA7:function(E){this.UpdateChargeActive(
E);},Ao8:function(E){this.UpdateScanState(E);},AtC:function(E){this.UpdateMeasureState(
E);},AtO:function(E){this.UpdateTempValue(E);},Ao3:function(E){this.UpdateLanguage(
E);},AtP:function(E){this.UpdateTemperatureUnit(E);},AA5:function(E){this.UpdateBrightness(
E);},ABx:function(E){this.UpdateMonitoring(E);},Auk:function(){var B;if(A._GetAutoObject(
C.Aaj).Aug){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AGY(this
);}},AfJ:function(){var B;A._GetAutoObject(A.Device.Helper).RB.Aum(this);this.UpdateMeasureState(
0);},Adg:function(){var K=this.K;A.aa8("%s",Pb);this.UpdateScanState(1);A.ow([this
,K.AxC],this);},AlD:function(){var K=this.K;var B;A.aa8("%s",Nm);K.AgK.Aum(this);
this.UpdateScanState(0);},SetSystemTime:function(Af3){},Auf:function(){A.Device.
DeviceClass.A58.call(this);this.Xw(1);},ACo:function(){A.Device.DeviceClass.A56.
call(this);this.Xw(2);},Cn:function(E){this.UpdateOverlayMenu(E);},AtT:function(
E){this.UpdateUnderTemp(E);},Z_:function(E){this.UpdateSyncState(E);},Azk:function(
){var aString;aString=((((((((((Cv+A.aaC(0,9).toFixed())+FK)+A.aaC(0,9).toFixed(
))+Od)+Nn)+A.aaC(30,90).toFixed())+A.z2(A.abg.ACW))+Od)+Ka)+A.aaC(1,100).toFixed(
))+Oe;return aString;},PopupStateChanged:function(JX,Ae){var Aef=A._NewObject(C.
PopupContext,0);Aef.Id=JX;Aef.Gn=Ae;this.Alr.Trigger(Aef,false);},ABX:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},AcY:function(E){this.UpdateVibrationOn(
E);},AtJ:function(E){this.UpdateRatingMode(E);},AcP:function(E){this.UpdateFlashLightOn(
E);},Z$:function(E){this.UpdateTopLightOn(E);},AcW:function(E){this.UpdateRGBTopLight(
E);},Atc:function(E){this.UpdateAutoRegistrationMode(E);},Ao9:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},P2:function(E){this.UpdateDigitsID(
E);},Rq:function(E){this.UpdateOffsetID(E);},AB1:function(E){this.UpdateWeightValue(
E);},AtA:function(E){this.UpdateMassUnit(E);},AoJ:function(E){A.Device.DeviceClass.
A52.call(this,E);this.UpdateActiveActions(E);},AoK:function(E){A.Device.DeviceClass.
A53.call(this,E);this.UpdateActiveActionsOrder(E);},Z0:function(E){A.Device.DeviceClass.
A54.call(this,E);this.UpdateAutoActions(E);},ACQ:function(){var K=this.K;this.UpdateMeasureState(
1);K.Bt7.call(this,this);},ApH:function(){var K=this.K;var B;K.YQ.Aum(this);this.
UpdateMeasureState(0);},DO:function(E){this.UpdateAnimalType(E);},AtU:function(E
){this.UpdateWeightRecordingMode(E);},ABE:function(E){this.UpdatePredictedTempValue(
E);},UV:function(Oi){A.aa8("%s%i",MB,Oi);},ABa:function(E){this.UpdateDemoMode(E
);},AAX:function(E){this.UpdateAgeRegistration(E);},AtV:function(E){this.UpdateWeightRecordingScope(
E);},J7:function(E){this.UpdateGender(E);},Ao0:function(E){this.UpdateIDLastUsedMale(
E);},AoZ:function(E){this.UpdateIDLastUsedFemale(E);},ZZ:function(E){this.UpdateAnimalListContent(
E);},AAZ:function(E){this.UpdateAlarmListAction(E);},ABe:function(E){this.UpdateFlashLightInMeasureState(
E);},AcL:function(E){this.UpdateAnimalInfoContent(E);},AB0:function(E){this.UpdateWatchListAction(
E);},ABf:function(E){this.UpdateFreshCowListAction(E);},App:function(H){this.AoJ(
15359);this.AoK(Pc);},Apq:function(H){this.Z0(RL);},Ata:function(E){this.UpdateAnimalTypesString(
E);},Ao_:function(E){this.UpdateTemperaturesHighString(E);},Ao$:function(E){this.
UpdateTemperaturesLowString(E);},Aps:function(H){this.Ata(Ti);this.Ao$(Ve);this.
Ao_(Vf);this.AtT(3600);},ABz:function(E){this.UpdateNoTransponderListAction(E);}
,Atv:function(E){this.UpdateFreshCowsHideMeasured(E);},Ao5:function(E){this.UpdateNaisIdLastUsedMale(
E);},Ao4:function(E){this.UpdateNaisIdLastUsedFemale(E);},AtF:function(E){this.UpdateNaisIdIncrementMale(
E);},AtE:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A59.call(this);A._GetAutoObject(A.kh.A1).BX(61);},Alc:function(
E){this.UpdateBootloaderMessage(E);},AAV:function(E){this.UpdateActionListAction(
E);},As_:function(E){this.UpdateActionListHideMeasured(E);},SS:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Atn:function(E){this.UpdateDirectionOfCountingFemale(
E);},Ato:function(E){this.UpdateDirectionOfCountingMale(E);},Atp:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Ao1:function(E){this.UpdateIDLastUsedUnisex(
E);},Ao6:function(E){this.UpdateNaisIdLastUsedUnisex(E);},AtG:function(E){this.UpdateNaisIdIncrementUnisex(
E);},Ald:function(E){this.UpdateEartagNrAssignmentMode(E);},O1:function(E){this.
UpdateBreed(E);},ABu:function(E){throw new Error(JT);},ABr:function(E){throw new
Error(JT);},ABU:function(E){throw new Error(JT);},AA1:function(E){throw new Error(
JT);},ABb:function(E){this.UpdateDryCowListAction(E);},AFF:function(AVd){var HK;
switch(AVd){case 15:HK=false;break;default:HK=true;}return HK;},ABy:function(E){
this.UpdateNoNaisIdListAction(E);},ABG:function(E){this.UpdateRegistrationsListAction(
E);},ABV:function(E){this.UpdateTransferProgress(E);},Apa:function(E){this.UpdateTransferTarget(
E);},ApG:function(){var B;A.ow([B=A._GetAutoObject(C.ApE),B.A$a],this);},AtI:function(
E){this.UpdatePremisesID(E);},AtD:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},ABg:function(E){this.UpdateFreshCowSpan(E);},ABW:function(E){this.UpdateUSBState(
E);},Auj:function(AfZ){var K=this.K;var result=A._NewObject(C.Ahj,0);result.AnQ=
AfZ;result.FileName=K.BbK.call(this,AfZ);switch(AfZ){case 0:K.Bq_.call(this,result
);break;case 1:K.Bq7.call(this,result);break;default:throw new Error(RM+AfZ.toFixed(
));}K.Aji=result;return result;},AsM:function(){return true;},ArS:function(Yj){var
K=this.K;switch(Yj.AnQ){case 0:A._GetAutoObject(A.Device.Device).A_(72,true,A.jm
,0,[this,K.A9Q]);break;case 1:A._GetAutoObject(A.Device.Device).A_(90,true,A.jm,
0,[this,K.A9Q]);break;default:throw new Error(Vg+Yj.AnQ.toFixed());}},ABK:function(
E){throw new Error(JT);},As$:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},ABL:function(E){this.UpdateShutdownTimer(E);},AoO:function(E){this.UpdateAnimalListInfoItemMode(
E);},Apt:function(H){this.Atb(Vh);this.Ape(X7);this.Apd(RN);this.Apc(RN);this.Apf(
X8);},Apd:function(E){this.UpdateWeightGainsHighString(E);},Ape:function(E){this.
UpdateWeightGainsLowString(E);},Atb:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Apc:function(E){this.UpdateWeightGainsAverageString(E);},Apf:function(E){this.
UpdateWeightValueBirthString(E);},Atq:function(E){this.UpdateEvaluationAnimalType(
E);},AtM:function(E){this.UpdateStartScreen(E);},Az_:function(){return 1;},Az$:function(
){return 1;},BtV:function(H){switch(this.J3){case 33:case 34:case 31:case 49:case
54:case 63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},AxC:function(H){var K=
this.K;var B;if((this.ScanState===1)&&K.Arg.ACI)K.AgK.ACP(this);A.aa8("%s",Vi);}
,Bt7:function(H){var K=this.K;var B;if((this.MeasureState===1)&&K.Arg.Aug)K.YQ.ACP(
this);},BuI:function(H){this.UpdateMeasureState(3);},AO5:function(H){var K=this.
K;var B;A.za([B=A._GetAutoObject(A.Device.Helper),B.AGY],[B=K.Arg,B.A2O,B.AOF],0
);this.QO.AA$(A._GetAutoObject(A.Device.Helper).A0U(8));this.Rl.AA$(A._GetAutoObject(
A.Device.Helper).A0U(8));},A4M:function(H){var Awl=A._NewObject(A.Device.Aui,0);
Awl.OnSetTimestamp(1685968304);Awl.ABs(1);Awl.ABw(0);Awl.ABH(0);this.Rl=Awl;var AvT=
A._NewObject(A.Device.Aui,0);AvT.OnSetTimestamp(1685968304);AvT.ABs(1);AvT.ABw(0
);AvT.ABH(0);this.QO=AvT;var AjD=A._NewObject(A.Device.Asl,0);AjD.ABp(1);AjD.ABq(
0);AjD.ABo(0);AjD.ABS(1);AjD.ABT(0);AjD.ABR(0);AjD.OnSetTimestamp(1685968304);this.
PX=AjD;var Aj8=A._NewObject(A.Device.Asl,0);Aj8.ABp(1);Aj8.ABq(0);Aj8.ABo(0);Aj8.
ABS(1);Aj8.ABT(0);Aj8.ABR(0);Aj8.OnSetTimestamp(1685968304);this.RE=Aj8;this.AfF=
A.z2(A.abg.Unknown);},A7_:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Bq_:function(Yj){var K=this.K;
var B;var Amr=Tj;var Cx=A._NewObject(A.Device.Animal,0);var P;var Axv=0;for(P=0;
P<A._GetAutoObject(A.Device.Device).Aq.Cd();P++){Cx.Fo(P,A._GetAutoObject(A.Device.
Device).Aq);if(Cx.IsBirthAnnouncementPending&&(Cx.NaisId>0)){Amr=Amr+(((((((((((((((((
K.Awp.call(this,A._GetAutoObject(A.Device.Device).Ac3)+String.fromCharCode(0x3B)
)+K.Awp.call(this,Cx.NaisId))+String.fromCharCode(0x3B))+K.Brw.call(this,Cx.DateOfBirth
))+String.fromCharCode(0x3B))+K.BrC.call(this,Cx.Breed))+String.fromCharCode(0x3B
))+K.Bry.call(this,Cx.Gender))+String.fromCharCode(0x3B))+K.Brx.call(this,Cx.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BrE.call(this,Cx.WhereAbouts))+String.fromCharCode(
0x3B))+K.BrB.call(this,Cx.BirthType))+String.fromCharCode(0x3B))+K.Awp.call(this
,Cx.NaisIdMother))+Od);Axv++;}}Yj.Ay5=Amr;Yj.A4A=Axv;Yj.ACT=true;},Awp:function(
Qk){if(!Qk)return A.jm;return Qk.toFixed();},Brw:function(AVc){var Ap=A._NewObject(
A.Core.Bp,0);Ap.Initialize(AVc);return Ap.Format(Vj);},BrC:function(AaM){if(!AaM
)return A.jm;return A._GetAutoObject(A.Device.Converter).AZG(AaM).toFixed();},Bry:
function(Lm){var result=A.jm;switch(Lm){case 0:result=Qg;break;case 1:result=Vk;
break;case 2:result=A.jm;break;default:A.aa8("%s",Np+Lm.toFixed());}return result;
},Brx:function(AE4){if(!AE4)return A.jm;return AE4.toFixed();},BrE:function(Amk){
if(!Amk)return A.jm;return Amk.toFixed();},BrB:function(Aqi){return(Aqi+1).toFixed(
);},A9Q:function(H){var K=this.K;var As=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!As&&(As.PopupState===7))switch(K.Aji.AnQ){case 0:K.A7_.call(this,K.
Aji.FileName,Pd,K.Aji.Ay5);break;case 1:K.A7_.call(this,K.Aji.FileName,Pd,K.Aji.
Ay5);break;default:throw new Error(RM+K.Aji.AnQ.toFixed());}},Bq7:function(Yj){var
K=this.K;var B;var Amr=Tk;var Cx=A._NewObject(A.Device.Animal,0);var P;var Axv=0;
for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.Cd();P++){var AvP=A.jm;if(Cx.Aon(
))AvP=K.BrF.call(this,Cx.FirstBodyWeight);Cx.Fo(P,A._GetAutoObject(A.Device.Device
).Aq);Amr=Amr+(((((((((((K.Awp.call(this,Cx.NaisId)+String.fromCharCode(0x3B))+K.
Brz.call(this,Cx.VisualId))+String.fromCharCode(0x3B))+K.Awp.call(this,Cx.TransponderId
))+String.fromCharCode(0x3B))+K.Brv.call(this,Cx.DateOfBirth))+String.fromCharCode(
0x3B))+K.BrD.call(this,Cx.Gender))+String.fromCharCode(0x3B))+AvP)+Od);Axv++;}Yj.
Ay5=Amr;Yj.A4A=Axv;Yj.ACT=true;},BbK:function(AfZ){var AWp=A.jm;var Ad=A._NewObject(
A.Core.Bp,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).DN());switch(AfZ){case
0:AWp=Ad.Format(X9);break;case 1:AWp=Ad.Format(Vl);break;default:throw new Error(
RM+AfZ.toFixed());}return AWp;},Brz:function(Qk){return Qk.toFixed();},BrD:function(
Lm){var result=A.jm;switch(Lm){case 0:result=X_;break;case 1:result=X$;break;case
2:result=Vm;break;default:A.aa8("%s",Np+Lm.toFixed());}return result;},BrF:function(
Nv){if(Nv<=0)return A.jm;return A._GetAutoObject(A.Device.Converter).AlP(Nv);},Brv:
function(AVc){var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(AVc);return Ap.Format(
Vn);},_Init:function(aArg){var K=this.K;A.abm.FC._Init.call(K.AgK={I:this},0);A.
abm.FC._Init.call(K.YQ={I:this},0);K.__proto__=C.DeviceClass;this.Atd(100);this.
Ao3(1);this.Ao0(200);this.AoZ(100);this.Ao5(276000912345678);this.Ao4(276000923456789
);this.Ao1(500);this.Ao6(276000901234567);this.O1(1);K.AgK.IF(1);K.AgK.FI(1000);
K.YQ.UP(0);K.YQ.IF(1);K.YQ.FI(750);K.YQ.BW=50000;K.AgK.Rm=[this,K.BtV];K.Arg=A._GetAutoObject(
C.Aaj);K.YQ.Rm=[this,K.BuI];K.YQ.Q=[this,this.AAS,this.AER];K.Init.call(this,aArg
);A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;K.AgK._Done();K.YQ._Done(
);A.hJ--;},_ReInit:function(){var K=this.K;K.AgK._ReInit();K.YQ._ReInit();K.C3.call(
this);},_Mark:function(D){var B;if((B=this.Arg)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aji)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.abq.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AC9={AY:0,_Init:function(aArg){C.UK._Init.call(this,aArg);this.__proto__=C.AC9;
},_className:"DeviceSimulation::UInt8"};C.AC7={AY:0,_Init:function(aArg){C.UK._Init.
call(this,aArg);this.__proto__=C.AC7;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={AYn:0,ABM:function(E){var K=this.K;K.AYn=K.AYn+(E-this.DN());A.Device.
HelperClass.A55.call(this,E);},DN:function(){var K=this.K;return A.Device.HelperClass.
A51.call(this)+K.AYn;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.hJ++;},_Done:function(){var K=this.K;K.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A4T={Aug:false,ACI:false,AOE:function(E){if(this.ACI===E)return;this.ACI=E;A.
aat([this,this.A2N,this.AOE],0);},A2N:function(){return this.ACI;},AOF:function(
E){if(this.Aug===E)return;this.Aug=E;A.aat([this,this.A2O,this.AOF],0);},A2O:function(
){return this.Aug;},Bej:function(){return true;},_Init:function(aArg){this.__proto__=
C.A4T;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationConfigClass"};
C.Aaj={_Init:function(){C.A4T._Init.call(this,0);},_variants:function(){return A.
abq.Aaj._variants();},_this:null};C.PopupContext={Gn:1,Id:0,_Init:function(aArg){
this.__proto__=C.PopupContext;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::PopupContext"
};C.Rating={Cr:function(AE){var G6=A.Device.Rating.A57.call(this,AE);if(G6){var Qo=
A._GetAutoObject(A.Device.Device).Aq;var Z=A._GetAutoObject(A.Device.Device).Aq.
LL(0,this.AnimalId);if(Z!==-1){var IQ=Qo.NQ();if(IQ<=0)A.aa8("%s",RO);else{var Cx=
A._NewObject(A.Device.Animal,0);Cx.Fo(Z,Qo);if((this.Temperature>0)&&(Cx.TimestampLastTemperature<
this.Timestamp)){Qo.A4L(Z,5,this.Temperature);Qo.Aiy(Z,17,this.RatingTemperature
);Qo.Aai(Z,30,this.Timestamp);}if(this.BodyWeight>0){if(Cx.TimestampLastWeighing<=
this.Timestamp){Qo.APA(Z,18,this.BodyWeight);Qo.Aai(Z,19,this.Timestamp);}if(!Cx.
TimestampFirstWeighing||(Cx.TimestampFirstWeighing>=this.Timestamp)){Qo.APA(Z,23
,this.BodyWeight);Qo.Aai(Z,24,this.Timestamp);Qo.GG(Z,25,this.Id);}}if(A._GetAutoObject(
A.Device.Helper).ACg(this)){var K0=A._GetAutoObject(A.Device.Helper).Azp(this);Qo.
Aiy(Z,13,K0);Qo.Aai(Z,31,this.Timestamp);}Qo.NS(IQ);}}}return G6;},_Init:function(
aArg){var K=this.K;K.__proto__=C.Rating;A.hJ++;},_Done:function(){var K=this.K;K.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::Rating"};C.O7={FU:A.aan(512,null,null
),Os:0,AFw:0,AG6:0,AYq:A.aan(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900
,7:4010,8:4020,9:4030}),AGH:0,AX0:A.aan(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:
1,9:1}),A89:512,AwL:-1,AVN:A.aan(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:
1,11:1,12:1,13:1,14:1}),AGf:false,Cp:function(Z,AQ){var A5=this.St(Z);if(!!A5)return A5.
Cp(AQ);return 0;},Ub:function(Z,AQ){var A5=this.St(Z);if(!!A5)return A5.Ub(AQ);return A.
jm;},Hq:function(Z,AQ){var A5=this.St(Z);if(!!A5)return A5.Hq(AQ);return false;}
,Uc:function(Z,AQ){var A5=this.St(Z);if(!!A5)return A5.Uc(AQ);return 0;},Q_:function(
Z,AQ){var A5=this.St(Z);if(!!A5)return A5.Q_(AQ);return 0;},NQ:function(){if(this.
AGf)throw new Error(Ya);this.AGf=true;return 12345;},NS:function(Amh){if(!this.AGf
)throw new Error(Yb);if(Amh!==12345)throw new Error(AaC);this.AGf=false;return true;
},WU:function(){return this.AYY(A._NewObject(C.ACs,0));},XQ:function(Z,AQ,CK){var
A5=this.St(Z);if(!!A5)return A5.XQ(AQ,CK);return false;},GG:function(Z,AQ,CK){var
A5=this.St(Z);if(!!A5)return A5.GG(AQ,CK);return false;},XP:function(Z,AQ,CK){var
A5=this.St(Z);if(!!A5)return A5.XP(AQ,CK);return false;},My:function(Z,AQ,CK){var
A5=this.St(Z);if(!!A5)return A5.My(AQ,CK);return false;},XO:function(Z,AQ,CK){var
A5=this.St(Z);if(!!A5)return A5.XO(AQ,CK);return false;},OnSetId:function(E){if(
this.Id===E)return;this.Id=E;this.A7V();switch(this.Id){case 0:{this.A89=128;A.ow([
this,this.Bo3],this);}break;case 1:A.ow([this,this.Bo5],this);break;case 3:A.ow([
this,this.Bo2],this);break;case 4:A.ow([this,this.Bo4],this);break;case 2:break;
default:throw new Error(Qh+this.Id.toFixed());}},Cd:function(){return this.Os;},
LP:function(Z,AQ){var A5=this.St(Z);if(!!A5)return A5.LP(AQ);return 0;},S3:function(
Z,AQ,CK){var A5=this.St(Z);if(!!A5)return A5.S3(AQ,CK);return false;},GZ:function(
){this.A7V();return true;},Ie:function(){return this.A89;},AYY:function(Z){if(this.
Os>=512)throw new Error(AaD);this.FU.Set(this.Os,Z);this.Os=this.Os+1;switch(this.
Id){case 0:{this.AwL=this.Os;this.GG(this.Os-1,0,this.AwL);}break;case 1:{this.AwL=
this.Os-1;this.GG(this.Os-1,0,this.AwL);}break;default:;}A.ow([this,this.Ah4],this
);return this.Os-1;},St:function(aIndex){if((aIndex<0)||(aIndex>=512))return null;
return this.FU.Get(aIndex);},A7V:function(){var P;for(P=0;P<512;P=P+1)this.FU.Set(
P,null);this.Os=0;this.AFw=0;this.AGH=0;this.AG6=0;A.ow([this,this.Ah4],this);},
AGb:function(){this.AFw=(this.AFw+1)%15;return this.AVN.Get(this.AFw);},AWA:function(
){this.AG6=(this.AG6+1)%10;return this.AYq.Get(this.AG6);},AF0:function(H){if(this.
K&&this.K.AF0)return this.K.AF0.apply(this,arguments);else return C.O7.Bo$.apply(
this,arguments);},Bo$:function(H){var B;var NC=true;this.Be(12310001,10,1,A._GetAutoObject(
A.Device.Helper).AfM(12),0,1,true,true,false,true,39000,0,0,false,0,false,0,0,0,
0);this.Be(12310020,20,12,A._GetAutoObject(A.Device.Helper).AfM(12),0,0,false,false
,true,true,36500,0,0,false,0,false,0,0,0,0);this.Be(12310021,10,1,A._GetAutoObject(
A.Device.Helper).AfM(9),0,0,true,false,false,true,37200,0,0,false,0,false,0,0,0,
0);this.Be(12310022,20,2,A._GetAutoObject(A.Device.Helper).AfM(830),0,1,false,false
,false,true,41200,A._GetAutoObject(A.Device.Helper).AfM(1),1,true,1,false,0,0,0,
0);this.Be(12310023,20,2,A._GetAutoObject(A.Device.Helper).AfM(1200),0,1,false,false
,false,true,43500,A._GetAutoObject(A.Device.Helper).AfM(8),2,false,1,false,0,0,0
,0);this.Be(12310026,20,2,A._GetAutoObject(A.Device.Helper).AfM(8),0,0,true,false
,false,true,34000,0,0,false,0,false,0,0,0,0);var P;var A$h=0;for(P=1;P<=7;P=P+1){
A$h=3680+(20*P);NC=A$h>3800;this.Be(12310050+(((B=P)<0)?B+0x10000000000000000:B)
,30+(P%3),3,A._GetAutoObject(A.Device.Helper).AfM(7-P),0,1,NC,false,false,true,36000+(
P*900),0,0,false,0,true,0,0,0,0);}},Bo3:function(s){this.AF0(s);},AF2:function(H
){if(this.K&&this.K.AF2)return this.K.AF2.apply(this,arguments);else return C.O7.
Bpb.apply(this,arguments);},Bpb:function(H){var Ad=A._GetAutoObject(A.Device.Helper
).DN();var P;Ad=Ad-2678400;var Agl;var A8a;for(P=0;P<32;P=P+1){var AWl=this.BrR(
);for(;AWl>0;AWl=AWl-1){Agl=this.AWA();A8a=A._GetAutoObject(A.Device.Converter).
ApK(0,Agl);this.Az(Ad,12310020,Agl,A8a,this.AGb(),this.AGb(),this.AGb(),this.AGb(
),0);}Ad=Ad+86400;}Ad=Ad-86400;this.Az(Ad,12310020,0,0,0,0,0,0,43700);this.Az(Ad-
86400,12310001,0,0,0,0,0,0,49800);this.Az(Ad,12310001,0,0,0,0,0,0,51000);Agl=this.
AWA();this.Az(Ad,12310001,Agl,A._GetAutoObject(A.Device.Converter).ApK(0,Agl),1,
3,3,3,0);Agl=this.AWA();this.Az(Ad-86400,12310022,3800,A._GetAutoObject(A.Device.
Converter).ApK(1,3800),2,3,3,3,0);this.Az(Ad,12310022,Agl,A._GetAutoObject(A.Device.
Converter).ApK(1,Agl),2,3,3,3,0);},Bo5:function(s){this.AF2(s);},Be:function(JX,
Bpx,BpO,A61,Aqi,Lm,BpE,BpK,BpI,BpJ,Nv,Bpj,BpM,BpH,D3,BpF,AaM,AE4,Amk,BpT){var Cx=
A._NewObject(A.Device.Animal,0);Cx.GC();Cx.AtW(0);Cx.AcU(0);Cx.ST(false);Cx.Aif(
false);Cx.Nc(JX);Cx.O2(JX);Cx.XE(A._GetAutoObject(A.Device.Helper).AlI(Cx.TransponderId
));Cx.Z4(Bpx);Cx.Alh(BpO);Cx.AcO(A61);Cx.Ah$(Aqi);Cx.J7(Lm);Cx.Alz(BpE);Cx.ACA(BpK
);Cx.Afp(BpJ);Cx.ST(BpI);Cx.Ao2(BpH);Cx.Aty(BpM);Cx.Atk(Bpj);Cx.DO(D3);Cx.Alg(BpF
);Cx.O1(AaM);Cx.Aib(AE4);Cx.Aaa(Amk);Cx.Alj(BpT);Cx.Cr(this);if(Nv>0)A._GetAutoObject(
C.At5).Az(A61,JX,0,0,0,0,0,0,Nv);},Az:function(Ll,AaK,Amf,Bp5,Bpr,Bps,Bpc,Bp8,Bpd
){var B$=A._NewObject(A.Device.Rating,0);B$.GC();var A7B=A._GetAutoObject(C.AnE).
AJ$(26,AaK);if(A7B>=0)B$.OnSetAnimalId(A._GetAutoObject(C.AnE).Cp(A7B,0));else A.
aa8("%s%U",Adz,AaK);B$.OnSetTimestamp(Ll);B$.OnSetTemperature(Amf);B$.OnSetRatingTemperature(
Bp5);B$.OnSetFaeces(Bpr);B$.OnSetFeed(Bps);B$.OnSetAppearance(Bpc);B$.OnSetRespiratory(
Bp8);B$.OnSetBodyWeight(Bpd);B$.Cr(this);},A0A:function(aColumn,A2){var P;for(P=
0;P<this.Os;P=P+1)if(this.FU.Get(P).Cp(aColumn)===A2)return P;return-1;},BrR:function(
){this.AGH=(this.AGH+1)%10;return this.AX0.Get(this.AGH);},AFZ:function(H){if(this.
K&&this.K.AFZ)return this.K.AFZ.apply(this,arguments);else return C.O7.Bo_.apply(
this,arguments);},Bo_:function(H){this.Ajx(10,Yc);this.Ajx(20,Vo);this.Ajx(30,Yd
);this.Ajx(31,AdA);this.Ajx(32,KM);},Bo2:function(s){this.AFZ(s);},Ajx:function(
JX,Bpy){var AFq=A._NewObject(A.Device.AnimalGroup,0);AFq.GC();AFq.OnSetId(JX);AFq.
ABi(Bpy);AFq.Cr(this);},Zq:function(){return this.AwL;},AJ$:function(aColumn,A2){
var P;for(P=0;P<this.Os;P=P+1)if(this.FU.Get(P).LP(aColumn)===A2)return P;return-
1;},AF1:function(H){if(this.K&&this.K.AF1)return this.K.AF1.apply(this,arguments
);else return C.O7.Bpa.apply(this,arguments);},Bpa:function(H){this.YA(2016,216,
6);this.YA(2017,217,7);this.YA(2018,218,8);this.YA(2019,219,9);this.YA(2020,220,
10);this.YA(2021,221,11);},Bo4:function(s){this.AF1(s);},YA:function(AaT,Bpn,Bpm
){var Tu=A._NewObject(A.Device.CalfDeregistrations,0);Tu.GC();Tu.Aim(AaT);Tu.Atm(
Bpn);Tu.Atl(Bpm);Tu.Cr(this);},_Init:function(aArg){A.Device.ITable._Init.call(this
,aArg);(this.FU=[]).__proto__=C.O7.FU;(this.AYq=[]).__proto__=C.O7.AYq;(this.AX0=[
]).__proto__=C.O7.AX0;(this.AVN=[]).__proto__=C.O7.AVN;this.__proto__=C.O7;var KN=
this._variants();if(KN){this.K={};KN._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.
call(this);},_ReInit:function(){A.Device.ITable._ReInit.call(this);if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D
);A.aaf(this.FU,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.abq.
O7._variants();},K:null,_className:"DeviceSimulation::TableData"};C.AnE={_Init:function(
){C.O7._Init.call(this,0);this.OnSetId(0);},_variants:function(){return this;},_this:
null};C.Ax8={_Init:function(){C.O7._Init.call(this,0);this.OnSetId(3);},_variants:
function(){return this;},_this:null};C.At5={_Init:function(){C.O7._Init.call(this
,0);this.OnSetId(1);},_variants:function(){return this;},_this:null};C.F_={Ajr:A.
aan(128,null,null),FM:null,AmH:0,Cp:function(Z,AQ){var A5=this.Yy(Z);if(!!A5)return A5.
Cp(AQ);return 0;},Ub:function(Z,AQ){var A5=this.Yy(Z);if(!!A5)return A5.Ub(AQ);return A.
jm;},Hq:function(Z,AQ){var A5=this.Yy(Z);if(!!A5)return A5.Hq(AQ);return false;}
,OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.
AB4(A._GetAutoObject(C.AnE));break;case 1:this.AB4(A._GetAutoObject(C.At5));break;
case 3:this.AB4(A._GetAutoObject(C.Ax8));break;case 4:this.AB4(A._GetAutoObject(
C.Ayt));break;case 2:break;default:throw new Error(Qh+this.Id.toFixed());}},Cd:function(
){if(!!this.Filter)return this.AmH;else if(!!this.FM)return this.FM.Os;return 0;
},Bo:function(E){A.Device.ITable.Bo.call(this,E);this.AVL(this);},Uc:function(Z,
AQ){var A5=this.Yy(Z);if(!!A5)return A5.Uc(AQ);return 0;},Q_:function(Z,AQ){var A5=
this.Yy(Z);if(!!A5)return A5.Q_(AQ);return 0;},NQ:function(){if(!!this.FM)return this.
FM.NQ();return-1;},NS:function(Amh){var G6=false;if(!!this.FM)G6=this.FM.NS(Amh);
if(G6)A.ow([this,this.AVL],this);return G6;},WU:function(){if(!!this.Filter)throw new
Error(AaE+A._GetAutoObject(A.Device.Converter).Bbo(this.Id,this.Filter));if(!!this.
FM)return this.FM.AYY(A._NewObject(C.ACs,0));return-1;},XQ:function(Z,AQ,CK){var
A5=this.Yy(Z);if(!!A5)return A5.XQ(AQ,CK);return false;},GG:function(Z,AQ,CK){var
A5=this.Yy(Z);if(!!A5)return A5.GG(AQ,CK);return false;},XP:function(Z,AQ,CK){var
A5=this.Yy(Z);if(!!A5)return A5.XP(AQ,CK);return false;},My:function(Z,AQ,CK){var
A5=this.Yy(Z);if(!!A5)return A5.My(AQ,CK);return false;},XO:function(Z,AQ,CK){var
A5=this.Yy(Z);if(!!A5)return A5.XO(AQ,CK);return false;},LL:function(aColumn,A2){
if(!!this.Filter){var P;for(P=0;P<this.AmH;P=P+1)if(this.Ajr.Get(P).Cp(aColumn)===
A2)return P;return-1;}else if(!!this.FM)return this.FM.A0A(aColumn,A2);return-1;
},LP:function(Z,AQ){var A5=this.Yy(Z);if(!!A5)return A5.LP(AQ);return 0;},S3:function(
Z,AQ,CK){var A5=this.Yy(Z);if(!!A5)return A5.S3(AQ,CK);return false;},Ahs:function(
aColumn,A2){if(!!this.Filter){var P;for(P=0;P<this.AmH;P=P+1)if(this.Ajr.Get(P).
LP(aColumn)===A2)return P;return-1;}else if(!!this.FM)return this.FM.AJ$(aColumn
,A2);return-1;},GZ:function(){if(!!this.FM)return this.FM.GZ();return false;},Ahq:
function(aColumn,A2){if(!!this.FM)return this.FM.A0A(aColumn,A2)>=0;return false;
},Ab5:function(aColumn,A2){if(!!this.FM)return this.FM.AJ$(aColumn,A2)>=0;return false;
},Ie:function(){if(!!this.FM)return this.FM.Ie();return 0;},Zq:function(){if(!!this.
FM)return this.FM.Zq();return-1;},PF:function(){if(!!this.FM)return this.FM.Os;return 0;
},AVL:function(H){this.AV0();if(!!this.Filter&&!!this.FM){var P;for(P=0;P<this.FM.
Cd();P=P+1){var AWq=true;var At=this.Filter.AKo();var A5=this.FM.St(P);if(!!A5)while(
AWq&&!!At){AWq=A5.Bcm(At);At=this.Filter.AKs(At);}else A.aa8("%s",((RP+P.toFixed(
))+Nq)+this.FM.Cd().toFixed());if(AWq){this.Ajr.Set(this.AmH,this.FM.FU.Get(P));
this.AmH=this.AmH+1;}}}A.ow([this,this.Ah4],this);},AV0:function(){var P;for(P=0;
P<128;P=P+1)this.Ajr.Set(P,null);this.AmH=0;},AB4:function(E){if(this.FM===E)return;
if(!!this.FM)A.zl([this,this.AYo],this.FM,0);this.FM=E;if(!!this.FM){A.y_([this,
this.AYo],this.FM,0);A.ow([this,this.AYo],this);}},AYo:function(H){A.ow([this,this.
AVL],this);},Yy:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.Ajr.Get(aIndex);}else if(!!this.FM)return this.FM.St(
aIndex);A.aa8("%s",AlR+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.Ajr=[]).__proto__=C.F_.Ajr;this.__proto__=C.F_;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aaf(this.Ajr,D);if((
B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A4U={J0:null,Abr:null,AYi:function(H){if(A._GetAutoObject(C.Aaj).Bej()===false
)return;switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{A._GetAutoObject(
A.Device.Device).Z_(1);this.Abr.An(true);}break;case 1:{A._GetAutoObject(A.Device.
Device).Z_(2);A._GetAutoObject(A.Device.Device).Apa(A._GetAutoObject(A.Device.Device
).Aq.PF());this.J0.FI(A._GetAutoObject(A.Device.Device).Adq*50);this.J0.BW=A._GetAutoObject(
A.Device.Device).Adq;this.J0.An(true);}break;case 2:{A._GetAutoObject(A.Device.Device
).Z_(3);this.Abr.An(true);}break;case 3:{A._GetAutoObject(A.Device.Device).Z_(4);
A._GetAutoObject(A.Device.Device).Apa(A._GetAutoObject(A.Device.Device).Aq.PF());
this.J0.FI(A._GetAutoObject(A.Device.Device).Adq*50);this.J0.BW=A._GetAutoObject(
A.Device.Device).Adq;this.J0.An(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Z_(5);this.Abr.An(true);}break;case 5:A.ow([this,this.A$a],this);break;case 7:
case 6:break;default:A.aa8("%s%e",AlS,A._GetAutoObject(A.Device.Device).SyncState
);}},Btf:function(H){this.Abr.An(false);A.ow([this,this.AYi],this);},Buc:function(
H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Z_(0);A.ow([this,this.AYi],this);}break;default:;}},A$a:function(
H){this.Abr.An(false);this.J0.An(false);A._GetAutoObject(A.Device.Device).Z_(0);
},_Init:function(aArg){A.abm.FC._Init.call(this.J0={I:this},0);A.Core.Timer._Init.
call(this.Abr={I:this},0);this.__proto__=C.A4U;var B;this.J0.IF(1);this.Abr.P3(2000
);this.J0.Rm=[this,this.AYi];this.J0.Q=[B=A._GetAutoObject(A.Device.Device),B.AN7
,B.AUQ];this.Abr.Mw=[this,this.Btf];A.hJ++;},_Done:function(){this.__proto__=null;
this.J0._Done();this.Abr._Done();A.hJ--;},_ReInit:function(){this.J0._ReInit();this.
Abr._ReInit();},_Mark:function(D){var B;if((B=this.J0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.ApE={_Init:function(){C.A4U._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AC8={AY:0,_Init:function(aArg){C.UK._Init.call(this,aArg);this.__proto__=
C.AC8;},_className:"DeviceSimulation::UInt64"};C.Ayt={_Init:function(){C.O7._Init.
call(this,0);this.OnSetId(4);},_variants:function(){return this;},_this:null};C.
FactoryResetScope={Du:function(){return 1;},_Init:function(aArg){var K=this.K;K.
__proto__=C.FactoryResetScope;this.Ci.Set(0,1);A.hJ++;},_Done:function(){var K=this.
K;K.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){},_variants:function(
){return this;},_className:"DeviceSimulation::FactoryResetScope"};C.Wc={AbP:null
,CE:function(H){var K=this.K;A.aa8("%s",JU);K.AbP.An(true);},Fc:function(H){var K=
this.K;if(K.AbP.Bw===true){K.AbP.An(false);A.aa8("%s",AlT);}},Bds:function(H){var
K=this.K;K.AbP.An(false);A._GetAutoObject(A.kh.A1).Afu(A._GetAutoObject(A.Device.
Device).Aul);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(K.AbP={
I:this},0);K.__proto__=C.Wc;this.Acx.G(AlU);K.AbP.P3(1500);this.S4.R(AfU);this.S4.
W(true);this.Acx.Ar(A.zW(A.abi.AM1));K.AbP.Mw=[this,K.Bds];A.hJ++;},_Done:function(
){var K=this.K;K.__proto__=null;K.AbP._Done();A.hJ--;},_ReInit:function(){var K=
this.K;K.AbP._ReInit();},_Mark:function(D){var B;if((B=this.AbP)._cycle!=D)B._Mark(
B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ahj={Ay5:A.jm,_Init:function(aArg){A.Device.Ahj._Init.call(this,aArg);this.__proto__=
C.Ahj;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.Az8.__proto__=C.UK;C.String.__proto__=C.UK;C.Ayo.__proto__=C.
UK;C.AC9.__proto__=C.UK;C.AC7.__proto__=C.UK;C.O7.__proto__=A.Device.ITable;C.F_.
__proto__=A.Device.ITable;C.AC8.__proto__=C.UK;C.Ahj.__proto__=A.Device.Ahj;};C.
_ReInit=function(){var B;if((B=C.Aaj._this))B._ReInit();if((B=C.AnE._this))B._ReInit(
);if((B=C.Ax8._this))B._ReInit();if((B=C.At5._this))B._ReInit();if((B=C.ApE._this
))B._ReInit();if((B=C.Ayt._this))B._ReInit();};C.Dn=function(D){var B;if((B=C.Aaj.
_this)&&(B._cycle!=D))B._Done(C.Aaj._this=null);if((B=C.AnE._this)&&(B._cycle!=D
))B._Done(C.AnE._this=null);if((B=C.Ax8._this)&&(B._cycle!=D))B._Done(C.Ax8._this=
null);if((B=C.At5._this)&&(B._cycle!=D))B._Done(C.At5._this=null);if((B=C.ApE._this
)&&(B._cycle!=D))B._Done(C.ApE._this=null);if((B=C.Ayt._this)&&(B._cycle!=D))B._Done(
C.Ayt._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */