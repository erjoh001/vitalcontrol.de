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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acr)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acr=(function(){var A=index;var C={};
var B9="ERROR: access to null Bool data in column [";var BC="]";var EU="Access to inexistent column index: ";
var Hd=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I7="Unsupported filter criterion class";var
II="Operator not handled:";var OI="1,8";var PM="INFO: Device.StartScan() called.";
var PN="INFO: Device.StopScan() called.";var CJ="V0.";var E2=".";var Li="\n";var
PO="Temp: ";var Km="Battery: ";var NV="%%";var PP="Selected animal with row index";
var Mt="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
SF="1,2";var Uk="0,1,2";var Zn="3900,3950,4000";var Wr="4050,4100,4150";var IJ="Read only";
var Ul="Unknown data export type: ";var Zo="Unhandled Device::DataExportType: ";
var Ws="0,2";var Zp="650,150";var Um="800,200";var Zq="40000,4000";var Zr="32,7,34,18,23,14";
var Un="Simulate Scan";var Wt="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var QZ="%d.%m.%Y";var Zs="1";var OJ="2";var PQ="Unknown gender: ";var Wu="text/csv";
var Wv="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Ww="hit-geburt-%d-%m-%Y_%H-%M.csv";var Zt="animals-%d-%m-%Y_%H-%M.csv";var Zu=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var Wx="herde-zugang-%d-%m-%Y_%H-%M.csv";var Wy=
"M";var SG="F";var Zv="?";var Zw="%Y-%m-%d";var Ab7="BNR15;LOM;ZUGA_DAT\n";var Uo=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
Zx="ERROR: Cannot start transaction";var AeS="Nested transactions are not allowed.";
var Zy="Transaction not opened.";var Wz="Wrong transaction ID.";var WA="Unhandled TableId:";
var Zz="Maximum number of rows reached.";var AeT="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var JN="10";var AeU="20";var Lj="30";var Aha="31";var Anw="32";var NW="Severe: filter set when inserting row into table: ";
var WC="ERROR: Row not found with index [";var Anx="] while Rows Count = ";var Ahb=
"ERROR: trying to access an inexistent row with Index=";var Ahc="Invalid Device::SyncState";
var Ab8="Forwarding to home screen after 500 milliseconds ...";var Uq="Forwarding to home screen canceled...";
var Any=[0,58,240,208];var Anz="VitalControl\nstarting up \u2026";
C.Table={Gw:null,Init:function(aArg){var K=this.K;A.zV([this,this.AjJ],K.Gw,0);},
CA:function(Ac,AX){var K=this.K;return K.Gw.CA(Ac,AX);},Vo:function(Ac,AX){var K=
this.K;return K.Gw.Vo(Ac,AX);},HT:function(Ac,AX){var K=this.K;return K.Gw.HT(Ac
,AX);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.Gw.OnSetId(
E);},Ch:function(){var K=this.K;return K.Gw.Ch();},Bm:function(E){var K=this.K;A.
Device.ITable.Bm.call(this,E);K.Gw.Bm(E);},Vp:function(Ac,AX){var K=this.K;return K.
Gw.Vp(Ac,AX);},RW:function(Ac,AX){var K=this.K;return K.Gw.RW(Ac,AX);},Oi:function(
){var K=this.K;return K.Gw.Oi();},Ol:function(An3){var K=this.K;return K.Gw.Ol(An3
);},X7:function(){var K=this.K;return K.Gw.X7();},Y5:function(Ac,AX,CV){var K=this.
K;return K.Gw.Y5(Ac,AX,CV);},Ha:function(Ac,AX,CV){var K=this.K;return K.Gw.Ha(Ac
,AX,CV);},Y4:function(Ac,AX,CV){var K=this.K;return K.Gw.Y4(Ac,AX,CV);},M8:function(
Ac,AX,CV){var K=this.K;return K.Gw.M8(Ac,AX,CV);},Y3:function(Ac,AX,CV){var K=this.
K;return K.Gw.Y3(Ac,AX,CV);},K3:function(aColumn,A1){var K=this.K;return K.Gw.K3(
aColumn,A1);},LE:function(Ac,AX){var K=this.K;return K.Gw.LE(Ac,AX);},T3:function(
Ac,AX,CV){var K=this.K;return K.Gw.T3(Ac,AX,CV);},Ai_:function(aColumn,A1){var K=
this.K;return K.Gw.Ai_(aColumn,A1);},G$:function(){var K=this.K;return K.Gw.G$();
},Ai7:function(aColumn,A1){var K=this.K;return K.Gw.Ai7(aColumn,A1);},Af8:function(
aColumn,A1){var K=this.K;return K.Gw.Af8(aColumn,A1);},Hz:function(){var K=this.
K;return K.Gw.Hz();},AaI:function(){var K=this.K;return K.Gw.AaI();},Qm:function(
){var K=this.K;return K.Gw.Qm();},_Init:function(aArg){var K=this.K;C.Gw._Init.call(
K.Gw={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.Gw._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.Gw._ReInit();},_Mark:function(D){var B;if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AEM={SR:A.abi(42,null,null),CA:function(aColumn){var B;this.ZK(aColumn);var Ap=(
C.ACg.isPrototypeOf(B=this.SR.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;
},Vo:function(aColumn){var B;this.ZK(aColumn);var Ap=(C.String.isPrototypeOf(B=this.
SR.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return A.jV;},HT:function(aColumn){
var B;this.ZK(aColumn);var Ap=(C.AAu.isPrototypeOf(B=this.SR.Get(aColumn))?B:null
);if(!!Ap)return Ap.A4;else A.ab5("%s",(B9+aColumn.toFixed())+BC);return false;}
,Ha:function(aColumn,A1){this.ZK(aColumn);var Ap=A._NewObject(C.ACg,0);Ap.A4=A1;
this.SR.Set(aColumn,Ap);return true;},Y3:function(aColumn,A1){this.ZK(aColumn);var
Ap=A._NewObject(C.String,0);Ap.A4=A1;this.SR.Set(aColumn,Ap);return true;},M8:function(
aColumn,A1){this.ZK(aColumn);var Ap=A._NewObject(C.AAu,0);Ap.A4=A1;this.SR.Set(aColumn
,Ap);return true;},ZK:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EU+aColumn.toFixed())+Hd);},Bgp:function(AM){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AHY(this.CA(AM.ES),AM.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BuQ(this.RW(AM.ES),AM.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BuP(this.Vo(AM.ES),AM.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BuO(this.HT(AM.ES),AM.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AHY(this.CA(AM.ES),AM.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AHY(this.CA(AM.ES),AM.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BuS(this.Vp(AM.ES),AM.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null).A4)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null))return this.
BuR(this.LE(AM.ES),AM.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?
AM:null).A4);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:
null))return this.AHY(this.CA(AM.ES),AM.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A4);else throw new Error(I7);},AHY:function(H2,EC,H3){
switch(EC){case 0:return H2===H3;case 2:return H2>H3;case 3:return H2<H3;case 4:
return H2.toFixed().indexOf(H3.toFixed(),0)>=0;case 5:return H2!==H3;default:throw new
Error(II+EC.toFixed());}},BuP:function(H2,EC,H3){switch(EC){case 0:return H2===H3;
case 2:return H2>H3;case 3:return H2<H3;case 4:{A.ab5("%s%e%s%i",H2,EC,H3,H2.indexOf(
H3,0));return H2.indexOf(H3,0)>=0;}case 5:return H2!==H3;default:throw new Error(
II+EC.toFixed());}},BuO:function(H2,EC,H3){switch(EC){case 0:return H2===H3;case
2:case 3:case 4:return false;case 5:return H2!==H3;default:throw new Error(II+EC.
toFixed());}},Vp:function(aColumn){var B;this.ZK(aColumn);var Ap=(C.AFp.isPrototypeOf(
B=this.SR.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;},Y5:function(aColumn
,A1){this.ZK(aColumn);var Ap=A._NewObject(C.AFp,0);Ap.A4=A1;this.SR.Set(aColumn,
Ap);return true;},BuS:function(H2,EC,H3){switch(EC){case 0:return H2===H3;case 2:
return H2>H3;case 3:return H2<H3;case 5:return H2!==H3;default:throw new Error(II+
EC.toFixed());}},RW:function(aColumn){var B;this.ZK(aColumn);var Ap=(C.AFn.isPrototypeOf(
B=this.SR.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;},Y4:function(aColumn
,A1){this.ZK(aColumn);var Ap=A._NewObject(C.AFn,0);Ap.A4=A1;this.SR.Set(aColumn,
Ap);return true;},BuQ:function(H2,EC,H3){switch(EC){case 0:return H2===H3;case 2:
return H2>H3;case 3:return H2<H3;case 5:return H2!==H3;default:throw new Error(II+
EC.toFixed());}},LE:function(aColumn){var B;this.ZK(aColumn);var Ap=(C.AFo.isPrototypeOf(
B=this.SR.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;},T3:function(aColumn
,A1){this.ZK(aColumn);var Ap=A._NewObject(C.AFo,0);Ap.A4=A1;this.SR.Set(aColumn,
Ap);return true;},BuR:function(H2,EC,H3){switch(EC){case 0:return H2===H3;case 2:
return H2>H3;case 3:return H2<H3;case 5:return H2!==H3;default:throw new Error(II+
EC.toFixed());}},_Init:function(aArg){(this.SR=[]).__proto__=C.AEM.SR;this.__proto__=
C.AEM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;A.aa6(this.SR,D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"
};C.VV={_Init:function(aArg){this.__proto__=C.VV;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::NativeType"};C.ACg={A4:0,_Init:function(aArg){C.VV._Init.call(
this,aArg);this.__proto__=C.ACg;},_className:"DeviceSimulation::Int32"};C.String={
A4:A.jV,_Init:function(aArg){C.VV._Init.call(this,aArg);this.__proto__=C.String;
},_className:"DeviceSimulation::String"};C.AAu={A4:false,_Init:function(aArg){C.
VV._Init.call(this,aArg);this.__proto__=C.AAu;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={Ate:null,AH4:null,Aik:null,Z7:null,CT:function(){var K=this.K;K.
A8F.call(this,this);},Init:function(aArg){var K=this.K;var B;this.YN(3);A.zX([this
,K.AzK],[B=K.Ate,B.A6B,B.ARi],0);this.UpdateAutoActions(OI);K.A8F.call(this,this
);this.Ars(this);this.Art(this);this.Aro(this);this.Arq(this);this.Arp(this);var
languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage==='number'&&
Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax){languageValue=
ewLanguage;}}if(languageValue>=0)this.AmW(languageValue);A.pe([this,K.ARK],this);
},YN:function(E){this.UpdateActiveScreen(E);},Avj:function(E){this.UpdateBatteryChargeState(
E);},ADi:function(E){this.UpdateChargeActive(E);},Aq1:function(E){this.UpdateScanState(
E);},AvF:function(E){this.UpdateMeasureState(E);},AvP:function(E){this.UpdateTempValue(
E);},AmW:function(E){this.UpdateLanguage(E);},AvQ:function(E){this.UpdateTemperatureUnit(
E);},ADg:function(E){this.UpdateBrightness(E);},ADQ:function(E){this.UpdateMonitoring(
E);},Awk:function(){var B;if(A._GetAutoObject(C.T4).Awf){this.UpdateMeasureState(
1);A._GetAutoObject(A.Device.Helper).AJg(this);}},Ag2:function(){var B;A._GetAutoObject(
A.Device.Helper).Sp.Awm(this);this.UpdateMeasureState(0);},AeC:function(){var K=
this.K;A.ab5("%s",PM);this.UpdateScanState(1);A.pe([this,K.AzK],this);},Ang:function(
){var K=this.K;var B;A.ab5("%s",PN);K.Aik.Awm(this);this.UpdateScanState(0);},SetSystemTime:
function(Ahr){},Awe:function(){A.Device.DeviceClass.A94.call(this);this.YN(1);},
AEJ:function(){A.Device.DeviceClass.A92.call(this);this.YN(2);},Cj:function(E){this.
UpdateOverlayMenu(E);},AvV:function(E){this.UpdateUnderTemp(E);},Abw:function(E){
this.UpdateSyncState(E);},ABu:function(){var aString;aString=((((((((((CJ+A.abz(
0,9).toFixed())+E2)+A.abz(0,9).toFixed())+Li)+PO)+A.abz(30,90).toFixed())+A.aaR(
A.acf.AFb))+Li)+Km)+A.abz(1,100).toFixed())+NV;return aString;},PopupStateChanged:
function(Kp,Ae){var AfB=A._NewObject(C.PopupContext,0);AfB.Id=Kp;AfB.Gi=Ae;this.
Am7.Trigger(AfB,false);},AEh:function(E){this.UpdateVibrationOnKeypressEnabled(E
);},Aek:function(E){this.UpdateVibrationOn(E);},AvM:function(E){this.UpdateRatingMode(
E);},Aeb:function(E){this.UpdateFlashLightOn(E);},TT:function(E){this.UpdateTopLightOn(
E);},V6:function(E){this.UpdateRGBTopLight(E);},Avi:function(E){this.UpdateAutoRegistrationMode(
E);},Aq2:function(E){this.UpdateScanTransponder(E.Id,E.TransponderType,E.TransponderProtocol
);},Py:function(E){this.UpdateDigitsID(E);},QH:function(E){this.UpdateOffsetID(E
);},AEl:function(E){this.UpdateWeightValue(E);},AvD:function(E){this.UpdateMassUnit(
E);},AqD:function(E){A.Device.DeviceClass.A9Y.call(this,E);this.UpdateActiveActions(
E);},AqE:function(E){A.Device.DeviceClass.A9Z.call(this,E);this.UpdateActiveActionsOrder(
E);},Abn:function(E){A.Device.DeviceClass.A90.call(this,E);this.UpdateAutoActions(
E);},AE8:function(){var K=this.K;this.UpdateMeasureState(1);K.Bx6.call(this,this
);},ArH:function(){var K=this.K;var B;K.Z7.Awm(this);this.UpdateMeasureState(0);
},DS:function(E){this.UpdateAnimalType(E);},AvW:function(E){this.UpdateWeightRecordingMode(
E);},ADY:function(E){this.UpdatePredictedTempValue(E);},Sm:function(LW){A.ab5("%s%i"
,PP,LW);},ADo:function(E){this.UpdateDemoMode(E);},AC9:function(E){this.UpdateAgeRegistration(
E);},AvX:function(E){this.UpdateWeightRecordingScope(E);},JG:function(E){this.UpdateGender(
E);},AqT:function(E){this.UpdateIDLastUsedMale(E);},AqS:function(E){this.UpdateIDLastUsedFemale(
E);},Abm:function(E){this.UpdateAnimalListContent(E);},AC$:function(E){this.UpdateAlarmListAction(
E);},ADr:function(E){this.UpdateFlashLightInMeasureState(E);},Ad_:function(E){this.
UpdateAnimalInfoContent(E);},AEk:function(E){this.UpdateWatchListAction(E);},ADu:
function(E){this.UpdateFreshCowListAction(E);},Aro:function(H){this.AqD(15359);this.
AqE(Mt);},Arq:function(H){this.Abn(SF);},Avg:function(E){this.UpdateAnimalTypesString(
E);},Aq4:function(E){this.UpdateTemperaturesHighString(E);},Aq5:function(E){this.
UpdateTemperaturesLowString(E);},Ars:function(H){this.Avg(Uk);this.Aq5(Zn);this.
Aq4(Wr);this.AvV(3600);},ADT:function(E){this.UpdateNoTransponderListAction(E);}
,Avz:function(E){this.UpdateFreshCowsHideMeasured(E);},AqX:function(E){this.UpdateNaisIdLastUsedMale(
E);},AqW:function(E){this.UpdateNaisIdLastUsedFemale(E);},AvI:function(E){this.UpdateNaisIdIncrementMale(
E);},AvH:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A95.call(this);A._GetAutoObject(A.kR.AZ).BZ(61);},AmR:function(
E){this.UpdateBootloaderMessage(E);},AC7:function(E){this.UpdateActionListAction(
E);},Ave:function(E){this.UpdateActionListHideMeasured(E);},TO:function(E){this.
UpdateAnimalIdGenerationMethod(E);},Avs:function(E){this.UpdateDirectionOfCountingFemale(
E);},Avt:function(E){this.UpdateDirectionOfCountingMale(E);},Avu:function(E){this.
UpdateDirectionOfCountingUnisex(E);},AqU:function(E){this.UpdateIDLastUsedUnisex(
E);},AqY:function(E){this.UpdateNaisIdLastUsedUnisex(E);},AvJ:function(E){this.UpdateNaisIdIncrementUnisex(
E);},AjP:function(E){this.UpdateEartagNrAssignmentMode(E);},NH:function(E){this.
UpdateBreed(E);},ADN:function(E){throw new Error(IJ);},ADH:function(E){throw new
Error(IJ);},AEe:function(E){throw new Error(IJ);},ADc:function(E){throw new Error(
IJ);},ADp:function(E){this.UpdateDryCowListAction(E);},AHV:function(AYp){var Qa;
switch(AYp){case 15:Qa=false;break;default:Qa=true;}return Qa;},ADS:function(E){
this.UpdateNoNaisIdListAction(E);},ADb:function(E){this.UpdateBirthListView(E);}
,AEf:function(E){this.UpdateTransferProgress(E);},Aq6:function(E){this.UpdateTransferTarget(
E);},ArG:function(){var B;A.pe([B=A._GetAutoObject(C.And),B.Bdf],this);},AvL:function(
E){this.UpdatePremisesID(E);},AvG:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},ADv:function(E){this.UpdateFreshCowSpan(E);},AEg:function(E){this.UpdateUSBState(
E);},Ane:function(Ahm){var K=this.K;var result=A._NewObject(C.Ai0,0);result.AAW=
Ahm;result.FileName=K.BfN.call(this,Ahm);switch(Ahm){case 0:K.Bu2.call(this,result
);break;case 1:K.BuY.call(this,result);break;case 2:K.Bu3.call(this,result);break;
case 3:K.Bu1.call(this,result);break;default:throw new Error(Ul+Ahm.toFixed());}
K.AH4=result;return result;},Aqg:function(){return true;},ApI:function(Nb){var K=
this.K;switch(Nb.AAW){case 0:A._GetAutoObject(A.Device.Device).A6(72,true,A.jV,0
,[this,K.A0O]);break;case 1:A._GetAutoObject(A.Device.Device).A6(90,true,A.jV,0,[
this,K.A0O]);break;case 2:case 3:A._GetAutoObject(A.Device.Device).A6(100,true,A.
jV,0,[this,K.A0O]);break;default:throw new Error(Zo+Nb.AAW.toFixed());}},AD4:function(
E){throw new Error(IJ);},Avf:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AD6:function(E){this.UpdateShutdownTimer(E);},AqK:function(E){this.UpdateAnimalListInfoItemMode(
E);},Art:function(H){this.Avh(Ws);this.Aq_(Zp);this.Aq9(Um);this.Aq8(Um);this.Aq$(
Zq);},Aq9:function(E){this.UpdateWeightGainsHighString(E);},Aq_:function(E){this.
UpdateWeightGainsLowString(E);},Avh:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Aq8:function(E){this.UpdateWeightGainsAverageString(E);},Aq$:function(E){this.
UpdateWeightValueBirthString(E);},Avv:function(E){this.UpdateEvaluationAnimalType(
E);},AvO:function(E){this.UpdateStartScreen(E);},ACi:function(){return 1;},ACj:function(
){return 1;},ADM:function(E){this.UpdateMaximumAgeNewOnFarm(E);},AvU:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},ADn:function(E){this.UpdateDataExportDestination(
E);},M5:function(E){this.UpdateWhereAbouts(E);},AqG:function(E){this.UpdateActiveMassRecordingFields(
E);},AqH:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},Arp:function(
H){this.AqG(A.jV);this.AqH(Zr);},ADK:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},BxT:function(H){switch(this.Kv){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},AzK:function(H){var K=this.K;var
B;if((this.ScanState===1)&&K.Ate.AE2)K.Aik.AE7(this);A.ab5("%s",Un);},Bx6:function(
H){var K=this.K;var B;if((this.MeasureState===1)&&K.Ate.Awf)K.Z7.AE7(this);},ByG:
function(H){this.UpdateMeasureState(3);},ARK:function(H){var K=this.K;var B;A.zX([
B=A._GetAutoObject(A.Device.Helper),B.AJg],[B=K.Ate,B.A6C,B.ARj],0);this.Rz.ADm(
A._GetAutoObject(A.Device.Helper).A4s(8));this.R$.ADm(A._GetAutoObject(A.Device.
Helper).A4s(8));},A8F:function(H){var Ayo=A._NewObject(A.Device.Awj,0);Ayo.OnSetTimestamp(
1702997218);Ayo.ADI(1);Ayo.ADP(0);Ayo.AD1(0);this.R$=Ayo;var AxT=A._NewObject(A.
Device.Awj,0);AxT.OnSetTimestamp(1702997218);AxT.ADI(1);AxT.ADP(0);AxT.AD1(4);this.
Rz=AxT;var Ak$=A._NewObject(A.Device.Auq,0);Ak$.ADF(1);Ak$.ADG(0);Ak$.ADE(0);Ak$.
AEc(1);Ak$.AEd(0);Ak$.AEb(0);Ak$.OnSetTimestamp(1702997218);this.QC=Ak$;var AlB=
A._NewObject(A.Device.Auq,0);AlB.ADF(1);AlB.ADG(0);AlB.ADE(0);AlB.AEc(1);AlB.AEd(
0);AlB.AEb(0);AlB.OnSetTimestamp(1702997218);this.Su=AlB;this.AgZ=A.aaR(A.acf.Unknown
);},Bvm:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},Bu2:function(Nb){var K=this.K;var B;var SQ=
Wt;var B5=A._NewObject(A.Device.Animal,0);var P;var AcZ=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Aq.Ch();P++){B5.EJ(P,A._GetAutoObject(A.Device.Device).Aq);if(B5.
IsRegistrationNoticePending&&(B5.NaisId>0)){SQ=SQ+(((((((((((((((((K.AhT.call(this
,A._GetAutoObject(A.Device.Device).YV)+String.fromCharCode(0x3B))+K.AhT.call(this
,B5.NaisId))+String.fromCharCode(0x3B))+K.AIo.call(this,B5.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bai.call(this,B5.Breed))+String.fromCharCode(0x3B))+K.Bah.
call(this,B5.Gender))+String.fromCharCode(0x3B))+K.Bvr.call(this,B5.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Baj.call(this,B5.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bvu.call(this,B5.BirthType))+String.fromCharCode(0x3B))+K.AhT.call(this
,B5.NaisIdMother))+Li);AcZ++;}}Nb.At4=SQ;Nb.AEN=AcZ;Nb.Anh=true;},AhT:function(Q4
){if(!Q4)return A.jV;return Q4.toFixed();},AIo:function(AYo){var As=A._NewObject(
A.Core.Bt,0);As.Initialize(AYo);return As.Format(QZ);},Bai:function(Acj){if(!Acj
)return A.jV;return A._GetAutoObject(A.Device.Converter).A28(Acj).toFixed();},Bah:
function(LT){var result=A.jV;switch(LT){case 0:result=Zs;break;case 1:result=OJ;
break;case 2:result=A.jV;break;default:A.ab5("%s",PQ+LT.toFixed());}return result;
},Bvr:function(AHn){if(!AHn)return A.jV;return AHn.toFixed();},Baj:function(Ae4){
if(!Ae4)return A.jV;return Ae4.toFixed();},Bvu:function(Ask){return(Ask+1).toFixed(
);},A0O:function(H){var K=this.K;var At=(A.Device.PopupContext.isPrototypeOf(H)?
H:null);if(!!At&&(At.PopupState===7))K.Bvm.call(this,K.AH4.FileName,Wu,K.AH4.At4
);},BuY:function(Nb){var K=this.K;var B;var SQ=Wv;var B5=A._NewObject(A.Device.Animal
,0);var P;var AcZ=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.Ch();P++){var
AxP=A.jV;if(B5.Aqf())AxP=K.Bvw.call(this,B5.FirstBodyWeight);B5.EJ(P,A._GetAutoObject(
A.Device.Device).Aq);SQ=SQ+(((((((((((K.AhT.call(this,B5.NaisId)+String.fromCharCode(
0x3B))+K.Bvs.call(this,B5.VisualId))+String.fromCharCode(0x3B))+K.AhT.call(this,
B5.TransponderId))+String.fromCharCode(0x3B))+K.Bvq.call(this,B5.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bvv.call(this,B5.Gender))+String.fromCharCode(0x3B))+AxP)+
Li);AcZ++;}Nb.At4=SQ;Nb.AEN=AcZ;Nb.Anh=true;},BfN:function(Ahm){var Ayn=A.jV;var
Ad=A._NewObject(A.Core.Bt,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).Dx(
));switch(Ahm){case 0:Ayn=Ad.Format(Ww);break;case 1:Ayn=Ad.Format(Zt);break;case
2:Ayn=Ad.Format(Zu);break;case 3:Ayn=Ad.Format(Wx);break;default:throw new Error(
Ul+Ahm.toFixed());}return Ayn;},Bvs:function(Q4){return Q4.toFixed();},Bvv:function(
LT){var result=A.jV;switch(LT){case 0:result=Wy;break;case 1:result=SG;break;case
2:result=Zv;break;default:A.ab5("%s",PQ+LT.toFixed());}return result;},Bvw:function(
NZ){if(NZ<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).Anu(NZ);},Bvq:
function(AYo){var As=A._NewObject(A.Core.Bt,0);As.Initialize(AYo);return As.Format(
Zw);},Bu3:function(Nb){var K=this.K;var B;var SQ=Ab7;var B5=A._NewObject(A.Device.
Animal,0);var P;var AcZ=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.Ch();P++
){B5.EJ(P,A._GetAutoObject(A.Device.Device).Aq);if(B5.IsRegistrationNoticePending&&(
B5.NaisId>0)){SQ=SQ+(((((K.AhT.call(this,A._GetAutoObject(A.Device.Device).YV)+String.
fromCharCode(0x3B))+K.AhT.call(this,B5.NaisId))+String.fromCharCode(0x3B))+K.AIo.
call(this,A._GetAutoObject(A.Device.Helper).Dx()))+Li);AcZ++;}}Nb.At4=SQ;Nb.AEN=
AcZ;Nb.Anh=true;},Bu1:function(Nb){var K=this.K;var B;var SQ=Uo;var B5=A._NewObject(
A.Device.Animal,0);var P;var AcZ=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.
Ch();P++){B5.EJ(P,A._GetAutoObject(A.Device.Device).Aq);if(B5.IsRegistrationNoticePending&&(
B5.NaisId>0)){SQ=SQ+(((((((((((((K.AhT.call(this,B5.NaisId)+String.fromCharCode(
0x3B))+K.AIo.call(this,B5.DateOfBirth))+String.fromCharCode(0x3B))+K.Bah.call(this
,B5.Gender))+String.fromCharCode(0x3B))+K.Baj.call(this,B5.WhereAbouts))+String.
fromCharCode(0x3B))+K.Bai.call(this,B5.Breed))+String.fromCharCode(0x3B))+K.AIo.
call(this,A._GetAutoObject(A.Device.Helper).Dx()))+String.fromCharCode(0x3B))+K.
AhT.call(this,B5.TransponderId))+Li);AcZ++;}}Nb.At4=SQ;Nb.AEN=AcZ;Nb.Anh=true;},
_Init:function(aArg){var K=this.K;A.acl.FX._Init.call(K.Aik={I:this},0);A.acl.FX.
_Init.call(K.Z7={I:this},0);K.__proto__=C.DeviceClass;this.Avj(100);this.AmW(1);
this.AqT(200);this.AqS(100);this.AqX(276000912345678);this.AqW(276000923456789);
this.AqU(500);this.AqY(276000901234567);this.NH(1);K.Aik.ID(1);K.Aik.Fy(1000);K.
Z7.V7(0);K.Z7.ID(1);K.Z7.Fy(750);K.Z7.B1=50000;K.Aik.Sa=[this,K.BxT];K.Ate=A._GetAutoObject(
C.T4);K.Z7.Sa=[this,K.ByG];K.Z7.R=[this,this.AC5,this.AHa];K.Init.call(this,aArg
);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Aik._Done();K.Z7._Done(
);A.h7--;},_ReInit:function(){var K=this.K;K.Aik._ReInit();K.Z7._ReInit();K.CT.call(
this);},_Mark:function(D){var B;if((B=this.Ate)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AH4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aik)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Z7)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(
){return A.acp.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AFp={A4:0,_Init:function(aArg){C.VV._Init.call(this,aArg);this.__proto__=C.AFp;
},_className:"DeviceSimulation::UInt8"};C.AFn={A4:0,_Init:function(aArg){C.VV._Init.
call(this,aArg);this.__proto__=C.AFn;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A1L:0,AD7:function(E){var K=this.K;K.A1L=K.A1L+(E-this.Dx());A.Device.
HelperClass.A91.call(this,E);},Dx:function(){var K=this.K;return A.Device.HelperClass.
A9X.call(this)+K.A1L;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A8M={Awf:false,AE2:false,ARi:function(E){if(this.AE2===E)return;this.AE2=E;A.
abo([this,this.A6B,this.ARi],0);},A6B:function(){return this.AE2;},ARj:function(
E){if(this.Awf===E)return;this.Awf=E;A.abo([this,this.A6C,this.ARj],0);},A6C:function(
){return this.Awf;},_Init:function(aArg){this.__proto__=C.A8M;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.T4={_Init:function(){C.A8M._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.acp.T4._variants();
},_this:null};C.PopupContext={Gi:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Co:function(
AG){var Ht=A.Device.Rating.A93.call(this,AG);if(Ht){var Q_=A._GetAutoObject(A.Device.
Device).Aq;var Ac=A._GetAutoObject(A.Device.Device).Aq.K3(0,this.AnimalId);if(Ac
!==-1){var Jc=Q_.Oi();if(Jc<=0)A.ab5("%s",Zx);else{var B5=A._NewObject(A.Device.
Animal,0);B5.EJ(Ac,Q_);if((this.Temperature>0)&&(B5.TimestampLastTemperature<this.
Timestamp)){Q_.A8E(Ac,5,this.Temperature);Q_.Akb(Ac,17,this.RatingTemperature);Q_.
AbK(Ac,30,this.Timestamp);}if(this.BodyWeight>0){if(B5.TimestampLastWeighing<=this.
Timestamp){Q_.ASi(Ac,18,this.BodyWeight);Q_.AbK(Ac,19,this.Timestamp);}if(!B5.TimestampFirstWeighing||(
B5.TimestampFirstWeighing>=this.Timestamp)){Q_.ASi(Ac,23,this.BodyWeight);Q_.AbK(
Ac,24,this.Timestamp);Q_.Ha(Ac,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AEC(this)){var LC=A._GetAutoObject(A.Device.Helper).ABz(this);Q_.Akb(Ac,13,LC);
Q_.AbK(Ac,31,this.Timestamp);}Q_.Ol(Jc);}}}return Ht;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PC={Gn:A.abi(512,null,null),OY:0,AHL:
0,AJo:0,A1O:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AI1:0,A1m:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Ba$:512,AyM:-1,AYY:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AIA:false,CA:function(Ac,AX){var A_=this.Tr(Ac);if(!!A_)return A_.
CA(AX);return 0;},Vo:function(Ac,AX){var A_=this.Tr(Ac);if(!!A_)return A_.Vo(AX);
return A.jV;},HT:function(Ac,AX){var A_=this.Tr(Ac);if(!!A_)return A_.HT(AX);return false;
},Vp:function(Ac,AX){var A_=this.Tr(Ac);if(!!A_)return A_.Vp(AX);return 0;},RW:function(
Ac,AX){var A_=this.Tr(Ac);if(!!A_)return A_.RW(AX);return 0;},Oi:function(){if(this.
AIA)throw new Error(AeS);this.AIA=true;return 12345;},Ol:function(An3){if(!this.
AIA)throw new Error(Zy);if(An3!==12345)throw new Error(Wz);this.AIA=false;return true;
},X7:function(){return this.A2m(A._NewObject(C.AEM,0));},Y5:function(Ac,AX,CV){var
A_=this.Tr(Ac);if(!!A_)return A_.Y5(AX,CV);return false;},Ha:function(Ac,AX,CV){
var A_=this.Tr(Ac);if(!!A_)return A_.Ha(AX,CV);return false;},Y4:function(Ac,AX,
CV){var A_=this.Tr(Ac);if(!!A_)return A_.Y4(AX,CV);return false;},M8:function(Ac
,AX,CV){var A_=this.Tr(Ac);if(!!A_)return A_.M8(AX,CV);return false;},Y3:function(
Ac,AX,CV){var A_=this.Tr(Ac);if(!!A_)return A_.Y3(AX,CV);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.A$V();switch(this.Id){case 0:{this.
Ba$=128;A.pe([this,this.BsW],this);}break;case 1:A.pe([this,this.BsY],this);break;
case 3:A.pe([this,this.BsV],this);break;case 4:A.pe([this,this.BsX],this);break;
case 2:break;default:throw new Error(WA+this.Id.toFixed());}},Ch:function(){return this.
OY;},LE:function(Ac,AX){var A_=this.Tr(Ac);if(!!A_)return A_.LE(AX);return 0;},T3:
function(Ac,AX,CV){var A_=this.Tr(Ac);if(!!A_)return A_.T3(AX,CV);return false;}
,G$:function(){this.A$V();return true;},Hz:function(){return this.Ba$;},A2m:function(
Ac){if(this.OY>=512)throw new Error(Zz);this.Gn.Set(this.OY,Ac);this.OY=this.OY+
1;switch(this.Id){case 0:{this.AyM=this.OY;this.Ha(this.OY-1,0,this.AyM);}break;
case 1:{this.AyM=this.OY-1;this.Ha(this.OY-1,0,this.AyM);}break;default:;}A.pe([
this,this.AjJ],this);return this.OY-1;},Tr:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gn.Get(aIndex);},A$V:function(){var P;for(P=0;P<512;
P=P+1)this.Gn.Set(P,null);this.OY=0;this.AHL=0;this.AI1=0;this.AJo=0;A.pe([this,
this.AjJ],this);},AIv:function(){this.AHL=(this.AHL+1)%15;return this.AYY.Get(this.
AHL);},AZM:function(){this.AJo=(this.AJo+1)%10;return this.A1O.Get(this.AJo);},AIh:
function(H){if(this.K&&this.K.AIh)return this.K.AIh.apply(this,arguments);else return C.
PC.Bs4.apply(this,arguments);},Bs4:function(H){var B;var N6=true;this.Bj(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).Ag5(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0);this.Bj(12310020,20,12,A._GetAutoObject(A.Device.Helper
).Ag5(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0);this.Bj(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).Ag5(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0);this.Bj(276000312310022,20,2,A._GetAutoObject(A.Device.
Helper).Ag5(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper
).Ag5(1),1,true,1,false,0,0,0,0);this.Bj(276000312310023,20,2,A._GetAutoObject(A.
Device.Helper).Ag5(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.
Helper).Ag5(8),2,false,1,false,0,0,0,0);this.Bj(276000312310026,20,2,A._GetAutoObject(
A.Device.Helper).Ag5(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,
0);var P;var Bdl=0;for(P=1;P<=7;P=P+1){Bdl=3680+(20*P);N6=Bdl>3800;this.Bj(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ag5(
7-P),0,1,N6,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BsW:function(
s){this.AIh(s);},AIj:function(H){if(this.K&&this.K.AIj)return this.K.AIj.apply(this
,arguments);else return C.PC.Bs6.apply(this,arguments);},Bs6:function(H){var Ad=
A._GetAutoObject(A.Device.Helper).Dx();var P;Ad=Ad-2678400;var AhS;var Baa;for(P=
0;P<32;P=P+1){var AZx=this.BvI();for(;AZx>0;AZx=AZx-1){AhS=this.AZM();Baa=A._GetAutoObject(
A.Device.Converter).ArJ(0,AhS);this.AF(Ad,12310020,AhS,Baa,this.AIv(),this.AIv()
,this.AIv(),this.AIv(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AF(Ad,12310020,0,0,0,0,
0,0,43700);this.AF(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AF(Ad,276000312310001
,0,0,0,0,0,0,51000);AhS=this.AZM();this.AF(Ad,276000312310001,AhS,A._GetAutoObject(
A.Device.Converter).ArJ(0,AhS),1,3,3,3,0);AhS=this.AZM();this.AF(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).ArJ(1,3800),2,3,3,3,0);this.AF(Ad,276000312310022
,AhS,A._GetAutoObject(A.Device.Converter).ArJ(1,AhS),2,3,3,3,0);},BsY:function(s
){this.AIj(s);},Bj:function(Kp,Btq,BtH,A_0,Ask,LT,Btx,BtD,BtA,BtB,NZ,Btc,BtF,Btz
,Eb,BtC,Acj,AHn,Ae4,BtM){var B5=A._NewObject(A.Device.Animal,0);B5.F$();B5.AvY(0
);B5.Aeh(0);B5.TR(false);B5.AjV(false);B5.M4(Kp);B5.M3(Kp);B5.TU(A._GetAutoObject(
A.Device.Helper).Ako(B5.TransponderId));B5.Abr(Btq);B5.AmX(BtH);B5.Sd(A_0);B5.AjN(
Ask);B5.JG(LT);B5.Anb(Btx);B5.AEV(BtD);B5.AgK(BtB);B5.TR(BtA);B5.AqV(Btz);B5.AvB(
BtF);B5.Avp(Btc);B5.DS(Eb);B5.Aee(BtC);B5.NH(Acj);B5.AjQ(AHn);B5.M5(Ae4);B5.AmZ(
BtM);B5.Co(this);if(NZ>0)A._GetAutoObject(C.Ari).AF(A_0,Kp,0,0,0,0,0,0,NZ);},AF:
function(LS,Ach,An1,BtY,Btk,Btl,Bs7,Bt0,Bs8){var BT=A._NewObject(A.Device.Rating
,0);BT.F$();var A$D=A._GetAutoObject(C.AlP).AMz(26,Ach);if(A$D>=0)BT.OnSetAnimalId(
A._GetAutoObject(C.AlP).CA(A$D,0));else A.ab5("%s%U",AeT,Ach);BT.OnSetTimestamp(
LS);BT.OnSetTemperature(An1);BT.OnSetRatingTemperature(BtY);BT.OnSetFaeces(Btk);
BT.OnSetFeed(Btl);BT.OnSetAppearance(Bs7);BT.OnSetRespiratory(Bt0);BT.OnSetBodyWeight(
Bs8);BT.Co(this);},A39:function(aColumn,A1){var P;for(P=0;P<this.OY;P=P+1)if(this.
Gn.Get(P).CA(aColumn)===A1)return P;return-1;},BvI:function(){this.AI1=(this.AI1+
1)%10;return this.A1m.Get(this.AI1);},AIg:function(H){if(this.K&&this.K.AIg)return this.
K.AIg.apply(this,arguments);else return C.PC.Bs3.apply(this,arguments);},Bs3:function(
H){this.Ak5(10,JN);this.Ak5(20,AeU);this.Ak5(30,Lj);this.Ak5(31,Aha);this.Ak5(32
,Anw);},BsV:function(s){this.AIg(s);},Ak5:function(Kp,Btr){var AHF=A._NewObject(
A.Device.AnimalGroup,0);AHF.F$();AHF.OnSetId(Kp);AHF.ADx(Btr);AHF.Co(this);},AaI:
function(){return this.AyM;},AMz:function(aColumn,A1){var P;for(P=0;P<this.OY;P=
P+1)if(this.Gn.Get(P).LE(aColumn)===A1)return P;return-1;},AIi:function(H){if(this.
K&&this.K.AIi)return this.K.AIi.apply(this,arguments);else return C.PC.Bs5.apply(
this,arguments);},Bs5:function(H){this.ZT(2016,216,6);this.ZT(2017,217,7);this.ZT(
2018,218,8);this.ZT(2019,219,9);this.ZT(2020,220,10);this.ZT(2021,221,11);},BsX:
function(s){this.AIi(s);},ZT:function(Acp,Btg,Btf){var UA=A._NewObject(A.Device.
CalfDeregistrations,0);UA.F$();UA.Aj2(Acp);UA.Avr(Btg);UA.Avq(Btf);UA.Co(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gn=[]).__proto__=
C.PC.Gn;(this.A1O=[]).__proto__=C.PC.A1O;(this.A1m=[]).__proto__=C.PC.A1m;(this.
AYY=[]).__proto__=C.PC.AYY;this.__proto__=C.PC;var Lk=this._variants();if(Lk){this.
K={};Lk._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Gn,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.acp.PC._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.AlP={_Init:function(){C.PC._Init.call(this,0);this.
OnSetId(0);},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AtD={_Init:function(){C.PC._Init.call(this,0);this.OnSetId(3);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.Ari={_Init:function(){C.PC.
_Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Gw={AkZ:A.abi(128,null,null),Gf:null,Aot:0,CA:function(Ac,AX){var
A_=this.ZR(Ac);if(!!A_)return A_.CA(AX);return 0;},Vo:function(Ac,AX){var A_=this.
ZR(Ac);if(!!A_)return A_.Vo(AX);return A.jV;},HT:function(Ac,AX){var A_=this.ZR(
Ac);if(!!A_)return A_.HT(AX);return false;},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;switch(this.Id){case 0:this.AEn(A._GetAutoObject(C.AlP));break;case 1:
this.AEn(A._GetAutoObject(C.Ari));break;case 3:this.AEn(A._GetAutoObject(C.AtD));
break;case 4:this.AEn(A._GetAutoObject(C.AtN));break;case 2:break;default:throw new
Error(WA+this.Id.toFixed());}},Ch:function(){if(!!this.Filter)return this.Aot;else
if(!!this.Gf)return this.Gf.OY;return 0;},Bm:function(E){A.Device.ITable.Bm.call(
this,E);this.AYW(this);},Vp:function(Ac,AX){var A_=this.ZR(Ac);if(!!A_)return A_.
Vp(AX);return 0;},RW:function(Ac,AX){var A_=this.ZR(Ac);if(!!A_)return A_.RW(AX);
return 0;},Oi:function(){if(!!this.Gf)return this.Gf.Oi();return-1;},Ol:function(
An3){var Ht=false;if(!!this.Gf)Ht=this.Gf.Ol(An3);if(Ht)A.pe([this,this.AYW],this
);return Ht;},X7:function(){if(!!this.Filter)throw new Error(NW+A._GetAutoObject(
A.Device.Converter).Bfr(this.Id,this.Filter));if(!!this.Gf)return this.Gf.A2m(A.
_NewObject(C.AEM,0));return-1;},Y5:function(Ac,AX,CV){var A_=this.ZR(Ac);if(!!A_
)return A_.Y5(AX,CV);return false;},Ha:function(Ac,AX,CV){var A_=this.ZR(Ac);if(
!!A_)return A_.Ha(AX,CV);return false;},Y4:function(Ac,AX,CV){var A_=this.ZR(Ac);
if(!!A_)return A_.Y4(AX,CV);return false;},M8:function(Ac,AX,CV){var A_=this.ZR(
Ac);if(!!A_)return A_.M8(AX,CV);return false;},Y3:function(Ac,AX,CV){var A_=this.
ZR(Ac);if(!!A_)return A_.Y3(AX,CV);return false;},K3:function(aColumn,A1){if(!!this.
Filter){var P;for(P=0;P<this.Aot;P=P+1)if(this.AkZ.Get(P).CA(aColumn)===A1)return P;
return-1;}else if(!!this.Gf)return this.Gf.A39(aColumn,A1);return-1;},LE:function(
Ac,AX){var A_=this.ZR(Ac);if(!!A_)return A_.LE(AX);return 0;},T3:function(Ac,AX,
CV){var A_=this.ZR(Ac);if(!!A_)return A_.T3(AX,CV);return false;},Ai_:function(aColumn
,A1){if(!!this.Filter){var P;for(P=0;P<this.Aot;P=P+1)if(this.AkZ.Get(P).LE(aColumn
)===A1)return P;return-1;}else if(!!this.Gf)return this.Gf.AMz(aColumn,A1);return-
1;},G$:function(){if(!!this.Gf)return this.Gf.G$();return false;},Ai7:function(aColumn
,A1){if(!!this.Gf)return this.Gf.A39(aColumn,A1)>=0;return false;},Af8:function(
aColumn,A1){if(!!this.Gf)return this.Gf.AMz(aColumn,A1)>=0;return false;},Hz:function(
){if(!!this.Gf)return this.Gf.Hz();return 0;},AaI:function(){if(!!this.Gf)return this.
Gf.AaI();return-1;},Qm:function(){if(!!this.Gf)return this.Gf.OY;return 0;},AYW:
function(H){this.AY$();if(!!this.Filter&&!!this.Gf){var P;for(P=0;P<this.Gf.Ch();
P=P+1){var AZB=true;var Ay=this.Filter.AMN();var A_=this.Gf.Tr(P);if(!!A_)while(
AZB&&!!Ay){AZB=A_.Bgp(Ay);Ay=this.Filter.AMS(Ay);}else A.ab5("%s",((WC+P.toFixed(
))+Anx)+this.Gf.Ch().toFixed());if(AZB){this.AkZ.Set(this.Aot,this.Gf.Gn.Get(P));
this.Aot=this.Aot+1;}}}A.pe([this,this.AjJ],this);},AY$:function(){var P;for(P=0;
P<128;P=P+1)this.AkZ.Set(P,null);this.Aot=0;},AEn:function(E){if(this.Gf===E)return;
if(!!this.Gf)A.z9([this,this.A1M],this.Gf,0);this.Gf=E;if(!!this.Gf){A.zV([this,
this.A1M],this.Gf,0);A.pe([this,this.A1M],this);}},A1M:function(H){A.pe([this,this.
AYW],this);},ZR:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.AkZ.Get(aIndex);}else if(!!this.Gf)return this.Gf.Tr(
aIndex);A.ab5("%s",Ahb+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.AkZ=[]).__proto__=C.Gw.AkZ;this.__proto__=C.Gw;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.AkZ,D);if((
B=this.Gf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A8N={Kt:null,Ac1:null,A1G:function(H){switch(A._GetAutoObject(A.Device.Device
).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Abw(1);this.Ac1.Ar(true);
}break;case 1:{A._GetAutoObject(A.Device.Device).Abw(2);A._GetAutoObject(A.Device.
Device).Aq6(A._GetAutoObject(A.Device.Device).Aq.Qm());this.Kt.Fy(A._GetAutoObject(
A.Device.Device).AeG*50);this.Kt.B1=A._GetAutoObject(A.Device.Device).AeG;this.Kt.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Abw(3);this.Ac1.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Abw(4);A._GetAutoObject(A.Device.
Device).Aq6(A._GetAutoObject(A.Device.Device).Aq.Qm());this.Kt.Fy(A._GetAutoObject(
A.Device.Device).AeG*50);this.Kt.B1=A._GetAutoObject(A.Device.Device).AeG;this.Kt.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Abw(5);this.Ac1.Ar(true
);}break;case 5:A.pe([this,this.Bdf],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Ahc,A._GetAutoObject(A.Device.Device).SyncState);}},Bw$:function(H){this.
Ac1.Ar(false);A.pe([this,this.A1G],this);},Byb:function(H){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Abw(0);A.pe([this,this.A1G],this);}break;default:;}},Bdf:function(H){this.Ac1.
Ar(false);this.Kt.Ar(false);A._GetAutoObject(A.Device.Device).Abw(0);},_Init:function(
aArg){A.acl.FX._Init.call(this.Kt={I:this},0);A.Core.Timer._Init.call(this.Ac1={
I:this},0);this.__proto__=C.A8N;var B;this.Kt.ID(1);this.Ac1.QJ(2000);this.Kt.Sa=[
this,this.A1G];this.Kt.R=[B=A._GetAutoObject(A.Device.Device),B.AQK,B.AX1];this.
Ac1.M6=[this,this.Bw$];A.h7++;},_Done:function(){this.__proto__=null;this.Kt._Done(
);this.Ac1._Done();A.h7--;},_ReInit:function(){this.Kt._ReInit();this.Ac1._ReInit(
);},_Mark:function(D){var B;if((B=this.Kt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ac1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.And={_Init:function(){C.A8N._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AFo={A4:0,_Init:function(aArg){C.VV._Init.
call(this,aArg);this.__proto__=C.AFo;},_className:"DeviceSimulation::UInt64"};C.
AtN={_Init:function(){C.PC._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dt:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Cv.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.Xt={Adn:null,CI:function(H){var K=this.K;A.ab5("%s",Ab8);K.Adn.Ar(true);},Fb:
function(H){var K=this.K;if(K.Adn.Bw===true){K.Adn.Ar(false);A.ab5("%s",Uq);}},Bhk:
function(H){var K=this.K;K.Adn.Ar(false);A._GetAutoObject(A.kR.AZ).AgO(A._GetAutoObject(
A.Device.Device).Awl);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Adn={I:this},0);K.__proto__=C.Xt;this.Ad2.G(Any);K.Adn.QJ(1500);this.T5.Q(Anz);
this.T5.Y(true);this.Ad2.Ax(A.aaL(A.ach.APt));K.Adn.M6=[this,K.Bhk];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Adn._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Adn._ReInit();},_Mark:function(D){var B;if((B=this.Adn)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ai0={At4:A.jV,_Init:function(aArg){A.Device.Ai0._Init.call(this,aArg);this.__proto__=
C.Ai0;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ACg.__proto__=C.VV;C.String.__proto__=C.VV;C.AAu.__proto__=C.
VV;C.AFp.__proto__=C.VV;C.AFn.__proto__=C.VV;C.PC.__proto__=A.Device.ITable;C.Gw.
__proto__=A.Device.ITable;C.AFo.__proto__=C.VV;C.Ai0.__proto__=A.Device.Ai0;};C.
_ReInit=function(){var B;if((B=C.T4._this))B._ReInit(),C.T4._ReInit.call(B);if((
B=C.AlP._this))B._ReInit(),C.AlP._ReInit.call(B);if((B=C.AtD._this))B._ReInit(),
C.AtD._ReInit.call(B);if((B=C.Ari._this))B._ReInit(),C.Ari._ReInit.call(B);if((B=
C.And._this))B._ReInit(),C.And._ReInit.call(B);if((B=C.AtN._this))B._ReInit(),C.
AtN._ReInit.call(B);};C.DB=function(D){var B;if((B=C.T4._this)&&(B._cycle!=D))B.
_Done(C.T4._this=null);if((B=C.AlP._this)&&(B._cycle!=D))B._Done(C.AlP._this=null
);if((B=C.AtD._this)&&(B._cycle!=D))B._Done(C.AtD._this=null);if((B=C.Ari._this)&&(
B._cycle!=D))B._Done(C.Ari._this=null);if((B=C.And._this)&&(B._cycle!=D))B._Done(
C.And._this=null);if((B=C.AtN._this)&&(B._cycle!=D))B._Done(C.AtN._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */