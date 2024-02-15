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
var B9="ERROR: access to null Bool data in column [";var BC="]";var EW="Access to inexistent column index: ";
var He=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I7="Unsupported filter criterion class";var
IH="Operator not handled:";var OM="1,8";var PQ="INFO: Device.StartScan() called.";
var PR="INFO: Device.StopScan() called.";var CO="V0.";var E4=".";var Ln="\n";var
PT="Temp: ";var Ko="Battery: ";var NY="%%";var PU="Selected animal with row index";
var Mw="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
SL="1,2";var Uu="0,1,2";var Zs="3900,3950,4000";var Ww="4050,4100,4150";var II="Read only";
var Uv="Unknown data export type: ";var Zt="Unhandled Device::DataExportType: ";
var Wx="0,2";var Zu="650,150";var Uw="800,200";var Zv="40000,4000";var Zw="32,7,34,18,23,14";
var Ux="Simulate Scan";var Wy="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Q4="%d.%m.%Y";var Zx="1";var ON="2";var PV="Unknown gender: ";var Wz="text/csv";
var WA="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var WC="hit-geburt-%d-%m-%Y_%H-%M.csv";var Zy="animals-%d-%m-%Y_%H-%M.csv";var Zz=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var WD="herde-zugang-%d-%m-%Y_%H-%M.csv";var WE=
"M";var SM="F";var ZA="?";var ZB="%Y-%m-%d";var Acf="BNR15;LOM;ZUGA_DAT\n";var Uy=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
ZC="ERROR: Cannot start transaction";var Ae2="Nested transactions are not allowed.";
var ZD="Transaction not opened.";var WF="Wrong transaction ID.";var WG="Unhandled TableId:";
var ZE="Maximum number of rows reached.";var Ae3="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var JN="10";var Ae4="20";var Lo="30";var Ahk="31";var AnJ="32";var NZ="Severe: filter set when inserting row into table: ";
var WH="ERROR: Row not found with index [";var AnK="] while Rows Count = ";var Ahl=
"ERROR: trying to access an inexistent row with Index=";var Ahm="Invalid Device::SyncState";
var Acg="Forwarding to home screen after 500 milliseconds ...";var Uz="Forwarding to home screen canceled...";
var AnL=[0,58,240,208];var AnM="VitalControl\nstarting up \u2026";
C.Table={GA:null,Init:function(aArg){var K=this.K;A.zV([this,this.AjT],K.GA,0);},
CA:function(Ac,AZ){var K=this.K;return K.GA.CA(Ac,AZ);},Vu:function(Ac,AZ){var K=
this.K;return K.GA.Vu(Ac,AZ);},HU:function(Ac,AZ){var K=this.K;return K.GA.HU(Ac
,AZ);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GA.OnSetId(
E);},Ch:function(){var K=this.K;return K.GA.Ch();},Bm:function(E){var K=this.K;A.
Device.ITable.Bm.call(this,E);K.GA.Bm(E);},Vv:function(Ac,AZ){var K=this.K;return K.
GA.Vv(Ac,AZ);},R0:function(Ac,AZ){var K=this.K;return K.GA.R0(Ac,AZ);},Ol:function(
){var K=this.K;return K.GA.Ol();},On:function(Aoc){var K=this.K;return K.GA.On(Aoc
);},Ya:function(){var K=this.K;return K.GA.Ya();},Y_:function(Ac,AZ,CV){var K=this.
K;return K.GA.Y_(Ac,AZ,CV);},Hb:function(Ac,AZ,CV){var K=this.K;return K.GA.Hb(Ac
,AZ,CV);},Y9:function(Ac,AZ,CV){var K=this.K;return K.GA.Y9(Ac,AZ,CV);},Na:function(
Ac,AZ,CV){var K=this.K;return K.GA.Na(Ac,AZ,CV);},Y8:function(Ac,AZ,CV){var K=this.
K;return K.GA.Y8(Ac,AZ,CV);},K7:function(aColumn,A1){var K=this.K;return K.GA.K7(
aColumn,A1);},LL:function(Ac,AZ){var K=this.K;return K.GA.LL(Ac,AZ);},Uc:function(
Ac,AZ,CV){var K=this.K;return K.GA.Uc(Ac,AZ,CV);},Aji:function(aColumn,A1){var K=
this.K;return K.GA.Aji(aColumn,A1);},Ha:function(){var K=this.K;return K.GA.Ha();
},Ajf:function(aColumn,A1){var K=this.K;return K.GA.Ajf(aColumn,A1);},AdL:function(
aColumn,A1){var K=this.K;return K.GA.AdL(aColumn,A1);},Hz:function(){var K=this.
K;return K.GA.Hz();},AaP:function(){var K=this.K;return K.GA.AaP();},Qr:function(
){var K=this.K;return K.GA.Qr();},_Init:function(aArg){var K=this.K;C.GA._Init.call(
K.GA={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GA._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GA._ReInit();},_Mark:function(D){var B;if((B=this.GA)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AFd={SW:A.abi(42,null,null),CA:function(aColumn){var B;this.ZQ(aColumn);var Ap=(
C.ACI.isPrototypeOf(B=this.SW.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;
},Vu:function(aColumn){var B;this.ZQ(aColumn);var Ap=(C.String.isPrototypeOf(B=this.
SW.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return A.jV;},HU:function(aColumn){
var B;this.ZQ(aColumn);var Ap=(C.AAT.isPrototypeOf(B=this.SW.Get(aColumn))?B:null
);if(!!Ap)return Ap.A4;else A.ab5("%s",(B9+aColumn.toFixed())+BC);return false;}
,Hb:function(aColumn,A1){this.ZQ(aColumn);var Ap=A._NewObject(C.ACI,0);Ap.A4=A1;
this.SW.Set(aColumn,Ap);return true;},Y8:function(aColumn,A1){this.ZQ(aColumn);var
Ap=A._NewObject(C.String,0);Ap.A4=A1;this.SW.Set(aColumn,Ap);return true;},Na:function(
aColumn,A1){this.ZQ(aColumn);var Ap=A._NewObject(C.AAT,0);Ap.A4=A1;this.SW.Set(aColumn
,Ap);return true;},ZQ:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EW+aColumn.toFixed())+He);},Bg3:function(AM){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AIo(this.CA(AM.ET),AM.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BvB(this.R0(AM.ET),AM.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BvA(this.Vu(AM.ET),AM.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.Bvz(this.HU(AM.ET),AM.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AIo(this.CA(AM.ET),AM.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.AIo(this.CA(AM.ET),AM.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AM)?AM:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AM)?AM:null))return this.BvD(this.Vv(AM.ET),AM.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AM)?AM:null).A4)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?AM:null))return this.
BvC(this.LL(AM.ET),AM.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AM)?
AM:null).A4);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AM)?AM:
null))return this.AIo(this.CA(AM.ET),AM.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AM)?AM:null).A4);else throw new Error(I7);},AIo:function(H3,ED,H4){
switch(ED){case 0:return H3===H4;case 2:return H3>H4;case 3:return H3<H4;case 4:
return H3.toFixed().indexOf(H4.toFixed(),0)>=0;case 5:return H3!==H4;default:throw new
Error(IH+ED.toFixed());}},BvA:function(H3,ED,H4){switch(ED){case 0:return H3===H4;
case 2:return H3>H4;case 3:return H3<H4;case 4:{A.ab5("%s%e%s%i",H3,ED,H4,H3.indexOf(
H4,0));return H3.indexOf(H4,0)>=0;}case 5:return H3!==H4;default:throw new Error(
IH+ED.toFixed());}},Bvz:function(H3,ED,H4){switch(ED){case 0:return H3===H4;case
2:case 3:case 4:return false;case 5:return H3!==H4;default:throw new Error(IH+ED.
toFixed());}},Vv:function(aColumn){var B;this.ZQ(aColumn);var Ap=(C.AFQ.isPrototypeOf(
B=this.SW.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;},Y_:function(aColumn
,A1){this.ZQ(aColumn);var Ap=A._NewObject(C.AFQ,0);Ap.A4=A1;this.SW.Set(aColumn,
Ap);return true;},BvD:function(H3,ED,H4){switch(ED){case 0:return H3===H4;case 2:
return H3>H4;case 3:return H3<H4;case 5:return H3!==H4;default:throw new Error(IH+
ED.toFixed());}},R0:function(aColumn){var B;this.ZQ(aColumn);var Ap=(C.AFO.isPrototypeOf(
B=this.SW.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;},Y9:function(aColumn
,A1){this.ZQ(aColumn);var Ap=A._NewObject(C.AFO,0);Ap.A4=A1;this.SW.Set(aColumn,
Ap);return true;},BvB:function(H3,ED,H4){switch(ED){case 0:return H3===H4;case 2:
return H3>H4;case 3:return H3<H4;case 5:return H3!==H4;default:throw new Error(IH+
ED.toFixed());}},LL:function(aColumn){var B;this.ZQ(aColumn);var Ap=(C.AFP.isPrototypeOf(
B=this.SW.Get(aColumn))?B:null);if(!!Ap)return Ap.A4;return 0;},Uc:function(aColumn
,A1){this.ZQ(aColumn);var Ap=A._NewObject(C.AFP,0);Ap.A4=A1;this.SW.Set(aColumn,
Ap);return true;},BvC:function(H3,ED,H4){switch(ED){case 0:return H3===H4;case 2:
return H3>H4;case 3:return H3<H4;case 5:return H3!==H4;default:throw new Error(IH+
ED.toFixed());}},_Init:function(aArg){(this.SW=[]).__proto__=C.AFd.SW;this.__proto__=
C.AFd;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;A.aa6(this.SW,D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"
};C.V2={_Init:function(aArg){this.__proto__=C.V2;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::NativeType"};C.ACI={A4:0,_Init:function(aArg){C.V2._Init.call(
this,aArg);this.__proto__=C.ACI;},_className:"DeviceSimulation::Int32"};C.String={
A4:A.jV,_Init:function(aArg){C.V2._Init.call(this,aArg);this.__proto__=C.String;
},_className:"DeviceSimulation::String"};C.AAT={A4:false,_Init:function(aArg){C.
V2._Init.call(this,aArg);this.__proto__=C.AAT;},_className:"DeviceSimulation::Bool"
};C.DeviceClass={AtD:null,AIu:null,Ait:null,Aac:null,CT:function(){var K=this.K;
K.A9k.call(this,this);},Init:function(aArg){var K=this.K;var B;this.YT(3);A.zX([
this,K.Az9],[B=K.AtD,B.A7g,B.ARV],0);this.UpdateAutoActions(OM);K.A9k.call(this,
this);this.ArI(this);this.ArJ(this);this.ArE(this);this.ArG(this);this.ArF(this);
var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Am9(languageValue);A.pe([this
,K.ASl],this);},YT:function(E){this.UpdateActiveScreen(E);},AvH:function(E){this.
UpdateBatteryChargeState(E);},ADL:function(E){this.UpdateChargeActive(E);},Arf:function(
E){this.UpdateScanState(E);},Av3:function(E){this.UpdateMeasureState(E);},Awb:function(
E){this.UpdateTempValue(E);},Am9:function(E){this.UpdateLanguage(E);},Awc:function(
E){this.UpdateTemperatureUnit(E);},ADJ:function(E){this.UpdateBrightness(E);},AEh:
function(E){this.UpdateMonitoring(E);},AwI:function(){var B;if(A._GetAutoObject(
C.Ud).AwD){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AJK(this
);}},Aha:function(){var B;A._GetAutoObject(A.Device.Helper).St.Ant(this);this.UpdateMeasureState(
0);},AeN:function(){var K=this.K;A.ab5("%s",PQ);this.UpdateScanState(1);A.pe([this
,K.Az9],this);},Anu:function(){var K=this.K;var B;A.ab5("%s",PR);K.Ait.Ant(this);
this.UpdateScanState(0);},SetSystemTime:function(Ahz){},AwC:function(){A.Device.
DeviceClass.A_I.call(this);this.YT(1);},AFa:function(){A.Device.DeviceClass.A_G.
call(this);this.YT(2);},Cj:function(E){this.UpdateOverlayMenu(E);},Awh:function(
E){this.UpdateUnderTemp(E);},AbE:function(E){this.UpdateSyncState(E);},ABW:function(
){var aString;aString=((((((((((CO+A.abz(0,9).toFixed())+E4)+A.abz(0,9).toFixed(
))+Ln)+PT)+A.abz(30,90).toFixed())+A.aaR(A.acf.AFC))+Ln)+Ko)+A.abz(1,100).toFixed(
))+NY;return aString;},PopupStateChanged:function(Kr,Ae){var AfN=A._NewObject(C.
PopupContext,0);AfN.Id=Kr;AfN.Gl=Ae;this.Ani.Trigger(AfN,false);},AEK:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Aev:function(E){this.UpdateVibrationOn(
E);},Av_:function(E){this.UpdateRatingMode(E);},Aem:function(E){this.UpdateFlashLightOn(
E);},T4:function(E){this.UpdateTopLightOn(E);},V$:function(E){this.UpdateRGBTopLight(
E);},AvG:function(E){this.UpdateAutoRegistrationMode(E);},Arg:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},PB:function(E){this.UpdateDigitsID(
E);},QM:function(E){this.UpdateOffsetID(E);},AEO:function(E){this.UpdateWeightValue(
E);},Av0:function(E){this.UpdateMassUnit(E);},AqS:function(E){A.Device.DeviceClass.
A_C.call(this,E);this.UpdateActiveActions(E);},AqT:function(E){A.Device.DeviceClass.
A_D.call(this,E);this.UpdateActiveActionsOrder(E);},Abv:function(E){A.Device.DeviceClass.
A_E.call(this,E);this.UpdateAutoActions(E);},AFy:function(){var K=this.K;this.UpdateMeasureState(
1);K.ByP.call(this,this);},ArX:function(){var K=this.K;var B;K.Aac.Ant(this);this.
UpdateMeasureState(0);},DT:function(E){this.UpdateAnimalType(E);},Awi:function(E
){this.UpdateWeightRecordingMode(E);},AEp:function(E){this.UpdatePredictedTempValue(
E);},Sq:function(L0){A.ab5("%s%i",PU,L0);},ADR:function(E){this.UpdateDemoMode(E
);},ADz:function(E){this.UpdateAgeRegistration(E);},Awj:function(E){this.UpdateWeightRecordingScope(
E);},JG:function(E){this.UpdateGender(E);},Aq9:function(E){this.UpdateIDLastUsedMale(
E);},Aq8:function(E){this.UpdateIDLastUsedFemale(E);},Abu:function(E){this.UpdateAnimalListContent(
E);},ADB:function(E){this.UpdateAlarmListAction(E);},ADU:function(E){this.UpdateFlashLightInMeasureState(
E);},Aei:function(E){this.UpdateAnimalInfoContent(E);},AEN:function(E){this.UpdateWatchListAction(
E);},ADX:function(E){this.UpdateFreshCowListAction(E);},ArE:function(G){this.AqS(
15359);this.AqT(Mw);},ArG:function(G){this.Abv(SL);},AvE:function(E){this.UpdateAnimalTypesString(
E);},Ari:function(E){this.UpdateTemperaturesHighString(E);},Arj:function(E){this.
UpdateTemperaturesLowString(E);},ArI:function(G){this.AvE(Uu);this.Arj(Zs);this.
Ari(Ww);this.Awh(3600);},AEk:function(E){this.UpdateNoTransponderListAction(E);}
,AvW:function(E){this.UpdateFreshCowsHideMeasured(E);},Arb:function(E){this.UpdateNaisIdLastUsedMale(
E);},Ara:function(E){this.UpdateNaisIdLastUsedFemale(E);},Av6:function(E){this.UpdateNaisIdIncrementMale(
E);},Av5:function(E){this.UpdateNaisIdIncrementFemale(E);},UpdateFirmware:function(
){A.Device.DeviceClass.A_J.call(this);A._GetAutoObject(A.kR.AY).B1(61);},Am4:function(
E){this.UpdateBootloaderMessage(E);},ADx:function(E){this.UpdateActionListAction(
E);},AvC:function(E){this.UpdateActionListHideMeasured(E);},TY:function(E){this.
UpdateAnimalIdGenerationMethod(E);},AvP:function(E){this.UpdateDirectionOfCountingFemale(
E);},AvQ:function(E){this.UpdateDirectionOfCountingMale(E);},AvR:function(E){this.
UpdateDirectionOfCountingUnisex(E);},Aq_:function(E){this.UpdateIDLastUsedUnisex(
E);},Arc:function(E){this.UpdateNaisIdLastUsedUnisex(E);},Av7:function(E){this.UpdateNaisIdIncrementUnisex(
E);},AjZ:function(E){this.UpdateEartagNrAssignmentMode(E);},NM:function(E){this.
UpdateBreed(E);},AEe:function(E){throw new Error(II);},AD_:function(E){throw new
Error(II);},AEH:function(E){throw new Error(II);},ADF:function(E){throw new Error(
II);},ADS:function(E){this.UpdateDryCowListAction(E);},AIl:function(AY5){var Qf;
switch(AY5){case 15:Qf=false;break;default:Qf=true;}return Qf;},AEj:function(E){
this.UpdateNoNaisIdListAction(E);},ADE:function(E){this.UpdateBirthListView(E);}
,AEI:function(E){this.UpdateTransferProgress(E);},Ark:function(E){this.UpdateTransferTarget(
E);},ArW:function(){var B;A.pe([B=A._GetAutoObject(C.AbV),B.BdV],this);},Av9:function(
E){this.UpdatePremisesID(E);},Av4:function(E){this.UpdateMotherSelectionDriedOffFilter(
E);},ADY:function(E){this.UpdateFreshCowSpan(E);},AEJ:function(E){this.UpdateUSBState(
E);},Anq:function(Ahu){var K=this.K;var result=A._NewObject(C.Ai_,0);result.ABl=
Ahu;result.FileName=K.Bgp.call(this,Ahu);switch(Ahu){case 0:K.BvN.call(this,result
);break;case 1:K.BvJ.call(this,result);break;case 2:K.BvO.call(this,result);break;
case 3:K.BvM.call(this,result);break;default:throw new Error(Uv+Ahu.toFixed());}
K.AIu=result;return result;},Aqv:function(){return true;},ApX:function(Ng){var K=
this.K;switch(Ng.ABl){case 0:A._GetAutoObject(A.Device.Device).A6(72,true,A.jV,0
,[this,K.A1p]);break;case 1:A._GetAutoObject(A.Device.Device).A6(90,true,A.jV,0,[
this,K.A1p]);break;case 2:case 3:A._GetAutoObject(A.Device.Device).A6(100,true,A.
jV,0,[this,K.A1p]);break;default:throw new Error(Zt+Ng.ABl.toFixed());}},AEv:function(
E){throw new Error(II);},AvD:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AEx:function(E){this.UpdateShutdownTimer(E);},AqZ:function(E){this.UpdateAnimalListInfoItemMode(
E);},ArJ:function(G){this.AvF(Wx);this.Aro(Zu);this.Arn(Uw);this.Arm(Uw);this.Arp(
Zv);},Arn:function(E){this.UpdateWeightGainsHighString(E);},Aro:function(E){this.
UpdateWeightGainsLowString(E);},AvF:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Arm:function(E){this.UpdateWeightGainsAverageString(E);},Arp:function(E){this.
UpdateWeightValueBirthString(E);},AvS:function(E){this.UpdateEvaluationAnimalType(
E);},Awa:function(E){this.UpdateStartScreen(E);},ACK:function(){return 1;},ACL:function(
){return 1;},AEd:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Awg:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},ADQ:function(E){this.UpdateDataExportDestination(
E);},M_:function(E){this.UpdateWhereAbouts(E);},AqV:function(E){this.UpdateActiveMassRecordingFields(
E);},AqW:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},ArF:function(
G){this.AqV(A.jV);this.AqW(Zw);},AEb:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},Ai4:function(){A._GetAutoObject(C.AbV).ADD(true);return true;},ApK:function(
){var B;A._GetAutoObject(C.AbV).ApK(this);return true;},ApJ:function(){var B;A.pe([
B=A._GetAutoObject(C.AbV),B.ApJ],this);return true;},At9:function(){var B;A.pe([
B=A._GetAutoObject(C.AbV),B.BeX],this);return true;},Av2:function(E){this.UpdateMaxWeightValuePrecision(
E);},ByC:function(G){switch(this.Ky){case 34:case 35:case 32:case 50:case 55:case
63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Az9:function(G){var K=this.K;var
B;if((this.ScanState===1)&&K.AtD.AFt)K.Ait.Anr(this);A.ab5("%s",Ux);},ByP:function(
G){var K=this.K;var B;if((this.MeasureState===1)&&K.AtD.AwD)K.Aac.Anr(this);},Bzp:
function(G){this.UpdateMeasureState(3);},ASl:function(G){var K=this.K;var B;A.zX([
B=A._GetAutoObject(A.Device.Helper),B.AJK],[B=K.AtD,B.A7h,B.ARW],0);this.RD.ADP(
A._GetAutoObject(A.Device.Helper).A47(8));this.Sd.ADP(A._GetAutoObject(A.Device.
Helper).A47(8));},A9k:function(G){var AyK=A._NewObject(A.Device.AwH,0);AyK.OnSetTimestamp(
1708002292);AyK.AD$(1);AyK.AEg(0);AyK.AEs(0);this.Sd=AyK;var Ayd=A._NewObject(A.
Device.AwH,0);Ayd.OnSetTimestamp(1708002292);Ayd.AD$(1);Ayd.AEg(0);Ayd.AEs(4);this.
RD=Ayd;var All=A._NewObject(A.Device.AuO,0);All.AD8(1);All.AD9(0);All.AD7(0);All.
AEF(1);All.AEG(0);All.AEE(0);All.OnSetTimestamp(1708002292);this.QH=All;var AlO=
A._NewObject(A.Device.AuO,0);AlO.AD8(1);AlO.AD9(0);AlO.AD7(0);AlO.AEF(1);AlO.AEG(
0);AlO.AEE(0);AlO.OnSetTimestamp(1708002292);this.Sy=AlO;this.Ag9=A.aaR(A.acf.Unknown
);},Bv9:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},BvN:function(Ng){var K=this.K;var B;var SV=
Wy;var B5=A._NewObject(A.Device.Animal,0);var P;var Ac7=0;for(P=0;P<A._GetAutoObject(
A.Device.Device).Aq.Ch();P++){B5.EK(P,A._GetAutoObject(A.Device.Device).Aq);if(B5.
IsRegistrationNoticePending&&(B5.NaisId>0)){SV=SV+(((((((((((((((((K.Ah1.call(this
,A._GetAutoObject(A.Device.Device).T_)+String.fromCharCode(0x3B))+K.Ah1.call(this
,B5.NaisId))+String.fromCharCode(0x3B))+K.AIP.call(this,B5.DateOfBirth))+String.
fromCharCode(0x3B))+K.BaY.call(this,B5.Breed))+String.fromCharCode(0x3B))+K.BaX.
call(this,B5.Gender))+String.fromCharCode(0x3B))+K.Bwc.call(this,B5.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BaZ.call(this,B5.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bwf.call(this,B5.BirthType))+String.fromCharCode(0x3B))+K.Ah1.call(this
,B5.NaisIdMother))+Ln);Ac7++;}}Ng.Auq=SV;Ng.AFe=Ac7;Ng.Anv=true;},Ah1:function(Q8
){if(!Q8)return A.jV;return Q8.toFixed();},AIP:function(AY4){var At=A._NewObject(
A.Core.Bt,0);At.Initialize(AY4);return At.Format(Q4);},BaY:function(Acr){if(!Acr
)return A.jV;return A._GetAutoObject(A.Device.Converter).A3M(Acr).toFixed();},BaX:
function(LX){var result=A.jV;switch(LX){case 0:result=Zx;break;case 1:result=ON;
break;case 2:result=A.jV;break;default:A.ab5("%s",PV+LX.toFixed());}return result;
},Bwc:function(AHO){if(!AHO)return A.jV;return AHO.toFixed();},BaZ:function(Afe){
if(!Afe)return A.jV;return Afe.toFixed();},Bwf:function(AsH){return(AsH+1).toFixed(
);},A1p:function(G){var K=this.K;var As=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!As&&(As.PopupState===7))K.Bv9.call(this,K.AIu.FileName,Wz,K.AIu.Auq
);},BvJ:function(Ng){var K=this.K;var B;var SV=WA;var B5=A._NewObject(A.Device.Animal
,0);var P;var Ac7=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.Ch();P++){var
Ax$=A.jV;if(B5.Aqu())Ax$=K.Bwh.call(this,B5.FirstBodyWeight);B5.EK(P,A._GetAutoObject(
A.Device.Device).Aq);SV=SV+(((((((((((K.Ah1.call(this,B5.NaisId)+String.fromCharCode(
0x3B))+K.Bwd.call(this,B5.VisualId))+String.fromCharCode(0x3B))+K.Ah1.call(this,
B5.TransponderId))+String.fromCharCode(0x3B))+K.Bwb.call(this,B5.DateOfBirth))+String.
fromCharCode(0x3B))+K.Bwg.call(this,B5.Gender))+String.fromCharCode(0x3B))+Ax$)+
Ln);Ac7++;}Ng.Auq=SV;Ng.AFe=Ac7;Ng.Anv=true;},Bgp:function(Ahu){var AyJ=A.jV;var
Ad=A._NewObject(A.Core.Bt,0);Ad.Initialize(A._GetAutoObject(A.Device.Helper).Dy(
));switch(Ahu){case 0:AyJ=Ad.Format(WC);break;case 1:AyJ=Ad.Format(Zy);break;case
2:AyJ=Ad.Format(Zz);break;case 3:AyJ=Ad.Format(WD);break;default:throw new Error(
Uv+Ahu.toFixed());}return AyJ;},Bwd:function(Q8){return Q8.toFixed();},Bwg:function(
LX){var result=A.jV;switch(LX){case 0:result=WE;break;case 1:result=SM;break;case
2:result=ZA;break;default:A.ab5("%s",PV+LX.toFixed());}return result;},Bwh:function(
MB){if(MB<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).AkD(MB);},Bwb:
function(AY4){var At=A._NewObject(A.Core.Bt,0);At.Initialize(AY4);return At.Format(
ZB);},BvO:function(Ng){var K=this.K;var B;var SV=Acf;var B5=A._NewObject(A.Device.
Animal,0);var P;var Ac7=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.Ch();P++
){B5.EK(P,A._GetAutoObject(A.Device.Device).Aq);if(B5.IsRegistrationNoticePending&&(
B5.NaisId>0)){SV=SV+(((((K.Ah1.call(this,A._GetAutoObject(A.Device.Device).T_)+String.
fromCharCode(0x3B))+K.Ah1.call(this,B5.NaisId))+String.fromCharCode(0x3B))+K.AIP.
call(this,A._GetAutoObject(A.Device.Helper).Dy()))+Ln);Ac7++;}}Ng.Auq=SV;Ng.AFe=
Ac7;Ng.Anv=true;},BvM:function(Ng){var K=this.K;var B;var SV=Uy;var B5=A._NewObject(
A.Device.Animal,0);var P;var Ac7=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Aq.
Ch();P++){B5.EK(P,A._GetAutoObject(A.Device.Device).Aq);if(B5.IsRegistrationNoticePending&&(
B5.NaisId>0)){SV=SV+(((((((((((((K.Ah1.call(this,B5.NaisId)+String.fromCharCode(
0x3B))+K.AIP.call(this,B5.DateOfBirth))+String.fromCharCode(0x3B))+K.BaX.call(this
,B5.Gender))+String.fromCharCode(0x3B))+K.BaZ.call(this,B5.WhereAbouts))+String.
fromCharCode(0x3B))+K.BaY.call(this,B5.Breed))+String.fromCharCode(0x3B))+K.AIP.
call(this,A._GetAutoObject(A.Device.Helper).Dy()))+String.fromCharCode(0x3B))+K.
Ah1.call(this,B5.TransponderId))+Ln);Ac7++;}}Ng.Auq=SV;Ng.AFe=Ac7;Ng.Anv=true;},
_Init:function(aArg){var K=this.K;A.acl.FZ._Init.call(K.Ait={I:this},0);A.acl.FZ.
_Init.call(K.Aac={I:this},0);K.__proto__=C.DeviceClass;this.AvH(100);this.Am9(1);
this.Aq9(200);this.Aq8(100);this.Arb(276000912345678);this.Ara(276000923456789);
this.Aq_(500);this.Arc(276000901234567);this.NM(1);K.Ait.HF(1);K.Ait.Ff(1000);K.
Aac.Wa(0);K.Aac.HF(1);K.Aac.Ff(750);K.Aac.BY=50000;K.Ait.Se=[this,K.ByC];K.AtD=A.
_GetAutoObject(C.Ud);K.Aac.Se=[this,K.Bzp];K.Aac.Q=[this,this.ADv,this.AHC];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ait._Done(
);K.Aac._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Ait._ReInit();K.Aac._ReInit(
);K.CT.call(this);},_Mark:function(D){var B;if((B=this.AtD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AIu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ait)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aac)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.acp.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AFQ={A4:0,_Init:function(aArg){C.V2._Init.call(this,aArg);this.__proto__=C.AFQ;
},_className:"DeviceSimulation::UInt8"};C.AFO={A4:0,_Init:function(aArg){C.V2._Init.
call(this,aArg);this.__proto__=C.AFO;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A2r:0,AEy:function(E){var K=this.K;K.A2r=K.A2r+(E-this.Dy());A.Device.
HelperClass.A_F.call(this,E);},Dy:function(){var K=this.K;return A.Device.HelperClass.
A_B.call(this)+K.A2r;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A9r={AwD:false,AFt:false,ARV:function(E){if(this.AFt===E)return;this.AFt=E;A.
abo([this,this.A7g,this.ARV],0);},A7g:function(){return this.AFt;},ARW:function(
E){if(this.AwD===E)return;this.AwD=E;A.abo([this,this.A7h,this.ARW],0);},A7h:function(
){return this.AwD;},_Init:function(aArg){this.__proto__=C.A9r;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Ud={_Init:function(){C.A9r._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.acp.Ud._variants();
},_this:null};C.PopupContext={Gl:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cp:function(
AG){var Ht=A.Device.Rating.A_H.call(this,AG);if(Ht){var Rc=A._GetAutoObject(A.Device.
Device).Aq;var Ac=A._GetAutoObject(A.Device.Device).Aq.K7(0,this.AnimalId);if(Ac
!==-1){var Jc=Rc.Ol();if(Jc<=0)A.ab5("%s",ZC);else{var B5=A._NewObject(A.Device.
Animal,0);B5.EK(Ac,Rc);if((this.Temperature>0)&&(B5.TimestampLastTemperature<this.
Timestamp)){Rc.A9j(Ac,5,this.Temperature);Rc.Akl(Ac,17,this.RatingTemperature);Rc.
AbS(Ac,30,this.Timestamp);}if(this.BodyWeight>0){if(B5.TimestampLastWeighing<=this.
Timestamp){Rc.ASV(Ac,18,this.BodyWeight);Rc.AbS(Ac,19,this.Timestamp);}if(!B5.TimestampFirstWeighing||(
B5.TimestampFirstWeighing>=this.Timestamp)){Rc.ASV(Ac,23,this.BodyWeight);Rc.AbS(
Ac,24,this.Timestamp);Rc.Hb(Ac,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AE5(this)){var LJ=A._GetAutoObject(A.Device.Helper).AB1(this);Rc.Akl(Ac,13,LJ);
Rc.AbS(Ac,31,this.Timestamp);}Rc.On(Jc);}}}return Ht;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PG={Gr:A.abi(512,null,null),O2:0,AIb:
0,AJS:0,A2u:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AJr:0,A11:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BbO:512,Ay$:-1,AZC:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AI2:false,CA:function(Ac,AZ){var A$=this.Tz(Ac);if(!!A$)return A$.
CA(AZ);return 0;},Vu:function(Ac,AZ){var A$=this.Tz(Ac);if(!!A$)return A$.Vu(AZ);
return A.jV;},HU:function(Ac,AZ){var A$=this.Tz(Ac);if(!!A$)return A$.HU(AZ);return false;
},Vv:function(Ac,AZ){var A$=this.Tz(Ac);if(!!A$)return A$.Vv(AZ);return 0;},R0:function(
Ac,AZ){var A$=this.Tz(Ac);if(!!A$)return A$.R0(AZ);return 0;},Ol:function(){if(this.
AI2)throw new Error(Ae2);this.AI2=true;return 12345;},On:function(Aoc){if(!this.
AI2)throw new Error(ZD);if(Aoc!==12345)throw new Error(WF);this.AI2=false;return true;
},Ya:function(){return this.A22(A._NewObject(C.AFd,0));},Y_:function(Ac,AZ,CV){var
A$=this.Tz(Ac);if(!!A$)return A$.Y_(AZ,CV);return false;},Hb:function(Ac,AZ,CV){
var A$=this.Tz(Ac);if(!!A$)return A$.Hb(AZ,CV);return false;},Y9:function(Ac,AZ,
CV){var A$=this.Tz(Ac);if(!!A$)return A$.Y9(AZ,CV);return false;},Na:function(Ac
,AZ,CV){var A$=this.Tz(Ac);if(!!A$)return A$.Na(AZ,CV);return false;},Y8:function(
Ac,AZ,CV){var A$=this.Tz(Ac);if(!!A$)return A$.Y8(AZ,CV);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bay();switch(this.Id){case 0:{this.
BbO=128;A.pe([this,this.BtI],this);}break;case 1:A.pe([this,this.BtK],this);break;
case 3:A.pe([this,this.BtH],this);break;case 4:A.pe([this,this.BtJ],this);break;
case 2:break;default:throw new Error(WG+this.Id.toFixed());}},Ch:function(){return this.
O2;},LL:function(Ac,AZ){var A$=this.Tz(Ac);if(!!A$)return A$.LL(AZ);return 0;},Uc:
function(Ac,AZ,CV){var A$=this.Tz(Ac);if(!!A$)return A$.Uc(AZ,CV);return false;}
,Ha:function(){this.Bay();return true;},Hz:function(){return this.BbO;},A22:function(
Ac){if(this.O2>=512)throw new Error(ZE);this.Gr.Set(this.O2,Ac);this.O2=this.O2+
1;switch(this.Id){case 0:{this.Ay$=this.O2;this.Hb(this.O2-1,0,this.Ay$);}break;
case 1:{this.Ay$=this.O2-1;this.Hb(this.O2-1,0,this.Ay$);}break;default:;}A.pe([
this,this.AjT],this);return this.O2-1;},Tz:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gr.Get(aIndex);},Bay:function(){var P;for(P=0;P<512;
P=P+1)this.Gr.Set(P,null);this.O2=0;this.AIb=0;this.AJr=0;this.AJS=0;A.pe([this,
this.AjT],this);},AIX:function(){this.AIb=(this.AIb+1)%15;return this.AZC.Get(this.
AIb);},A0q:function(){this.AJS=(this.AJS+1)%10;return this.A2u.Get(this.AJS);},AII:
function(G){if(this.K&&this.K.AII)return this.K.AII.apply(this,arguments);else return C.
PG.BtQ.apply(this,arguments);},BtQ:function(G){var B;var N7=true;this.Bj(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).Ahd(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0);this.Bj(12310020,20,12,A._GetAutoObject(A.Device.Helper
).Ahd(12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0);this.Bj(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).Ahd(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0);this.Bj(276000312310022,20,2,A._GetAutoObject(A.Device.
Helper).Ahd(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper
).Ahd(1),1,true,1,false,0,0,0,0);this.Bj(276000312310023,20,2,A._GetAutoObject(A.
Device.Helper).Ahd(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.
Helper).Ahd(8),2,false,1,false,0,0,0,0);this.Bj(276000312310026,20,2,A._GetAutoObject(
A.Device.Helper).Ahd(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,
0);var P;var Bd1=0;for(P=1;P<=7;P=P+1){Bd1=3680+(20*P);N7=Bd1>3800;this.Bj(276000312310050+(((
B=P)<0)?B+0x10000000000000000:B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ahd(
7-P),0,1,N7,false,false,true,36000+(P*900),0,0,false,0,true,0,0,0,0);}},BtI:function(
s){this.AII(s);},AIK:function(G){if(this.K&&this.K.AIK)return this.K.AIK.apply(this
,arguments);else return C.PG.BtS.apply(this,arguments);},BtS:function(G){var Ad=
A._GetAutoObject(A.Device.Helper).Dy();var P;Ad=Ad-2678400;var Ah0;var BaP;for(P=
0;P<32;P=P+1){var A0b=this.Bwt();for(;A0b>0;A0b=A0b-1){Ah0=this.A0q();BaP=A._GetAutoObject(
A.Device.Converter).ArZ(0,Ah0);this.AF(Ad,12310020,Ah0,BaP,this.AIX(),this.AIX()
,this.AIX(),this.AIX(),0);}Ad=Ad+86400;}Ad=Ad-86400;this.AF(Ad,12310020,0,0,0,0,
0,0,43700);this.AF(Ad-86400,276000312310001,0,0,0,0,0,0,49800);this.AF(Ad,276000312310001
,0,0,0,0,0,0,51000);Ah0=this.A0q();this.AF(Ad,276000312310001,Ah0,A._GetAutoObject(
A.Device.Converter).ArZ(0,Ah0),1,3,3,3,0);Ah0=this.A0q();this.AF(Ad-86400,276000312310022
,3800,A._GetAutoObject(A.Device.Converter).ArZ(1,3800),2,3,3,3,0);this.AF(Ad,276000312310022
,Ah0,A._GetAutoObject(A.Device.Converter).ArZ(1,Ah0),2,3,3,3,0);},BtK:function(s
){this.AIK(s);},Bj:function(Kr,Buc,But,A$F,AsH,LX,Buj,Bup,Bum,Bun,MB,Bt0,Bur,Bul
,Ec,Buo,Acr,AHO,Afe,Buy){var B5=A._NewObject(A.Device.Animal,0);B5.Gb();B5.Awk(0
);B5.Aes(0);B5.T2(false);B5.Aj5(false);B5.M9(Kr);B5.M8(Kr);B5.T5(A._GetAutoObject(
A.Device.Helper).Aky(B5.TransponderId));B5.Abz(Buc);B5.Am_(But);B5.Sh(A$F);B5.AjX(
AsH);B5.JG(LX);B5.Ano(Buj);B5.AFm(Bup);B5.AgU(Bun);B5.T2(Bum);B5.Aq$(Bul);B5.AvY(
Bur);B5.AvM(Bt0);B5.DT(Ec);B5.Aep(Buo);B5.NM(Acr);B5.Aj0(AHO);B5.M_(Afe);B5.Ana(
Buy);B5.Cp(this);if(MB>0)A._GetAutoObject(C.Ary).AF(A$F,Kr,0,0,0,0,0,0,MB);},AF:
function(LW,Acp,Aoa,BuK,Bt8,Bt9,BtT,BuM,BtU){var BT=A._NewObject(A.Device.Rating
,0);BT.Gb();var Bah=A._GetAutoObject(C.Al2).AM7(26,Acp);if(Bah>=0)BT.OnSetAnimalId(
A._GetAutoObject(C.Al2).CA(Bah,0));else A.ab5("%s%U",Ae3,Acp);BT.OnSetTimestamp(
LW);BT.OnSetTemperature(Aoa);BT.OnSetRatingTemperature(BuK);BT.OnSetFaeces(Bt8);
BT.OnSetFeed(Bt9);BT.OnSetAppearance(BtT);BT.OnSetRespiratory(BuM);BT.OnSetBodyWeight(
BtU);BT.Cp(this);},A4N:function(aColumn,A1){var P;for(P=0;P<this.O2;P=P+1)if(this.
Gr.Get(P).CA(aColumn)===A1)return P;return-1;},Bwt:function(){this.AJr=(this.AJr+
1)%10;return this.A11.Get(this.AJr);},AIH:function(G){if(this.K&&this.K.AIH)return this.
K.AIH.apply(this,arguments);else return C.PG.BtP.apply(this,arguments);},BtP:function(
G){this.Alf(10,JN);this.Alf(20,Ae4);this.Alf(30,Lo);this.Alf(31,Ahk);this.Alf(32
,AnJ);},BtH:function(s){this.AIH(s);},Alf:function(Kr,Bud){var AH6=A._NewObject(
A.Device.AnimalGroup,0);AH6.Gb();AH6.OnSetId(Kr);AH6.AD0(Bud);AH6.Cp(this);},AaP:
function(){return this.Ay$;},AM7:function(aColumn,A1){var P;for(P=0;P<this.O2;P=
P+1)if(this.Gr.Get(P).LL(aColumn)===A1)return P;return-1;},AIJ:function(G){if(this.
K&&this.K.AIJ)return this.K.AIJ.apply(this,arguments);else return C.PG.BtR.apply(
this,arguments);},BtR:function(G){this.Z0(2016,216,6);this.Z0(2017,217,7);this.Z0(
2018,218,8);this.Z0(2019,219,9);this.Z0(2020,220,10);this.Z0(2021,221,11);},BtJ:
function(s){this.AIJ(s);},Z0:function(Acx,Bt4,Bt3){var UJ=A._NewObject(A.Device.
CalfDeregistrations,0);UJ.Gb();UJ.Aka(Acx);UJ.AvO(Bt4);UJ.AvN(Bt3);UJ.Cp(this);}
,_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gr=[]).__proto__=
C.PG.Gr;(this.A2u=[]).__proto__=C.PG.A2u;(this.A11=[]).__proto__=C.PG.A11;(this.
AZC=[]).__proto__=C.PG.AZC;this.__proto__=C.PG;var Lp=this._variants();if(Lp){this.
K={};Lp._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this
);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(
){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Gr,D);if(this.K)
this.K._Mark(D);},_variants:function(){return A.acp.PG._variants();},K:null,_className:
"DeviceSimulation::TableData"};C.Al2={_Init:function(){C.PG._Init.call(this,0);this.
OnSetId(0);},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.At1={_Init:function(){C.PG._Init.call(this,0);this.OnSetId(3);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.Ary={_Init:function(){C.PG.
_Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.GA={Ak$:A.abi(128,null,null),Gf:null,AoE:0,CA:function(Ac,AZ){var
A$=this.ZY(Ac);if(!!A$)return A$.CA(AZ);return 0;},Vu:function(Ac,AZ){var A$=this.
ZY(Ac);if(!!A$)return A$.Vu(AZ);return A.jV;},HU:function(Ac,AZ){var A$=this.ZY(
Ac);if(!!A$)return A$.HU(AZ);return false;},OnSetId:function(E){if(this.Id===E)return;
this.Id=E;switch(this.Id){case 0:this.AEQ(A._GetAutoObject(C.Al2));break;case 1:
this.AEQ(A._GetAutoObject(C.Ary));break;case 3:this.AEQ(A._GetAutoObject(C.At1));
break;case 4:this.AEQ(A._GetAutoObject(C.Aua));break;case 2:break;default:throw new
Error(WG+this.Id.toFixed());}},Ch:function(){if(!!this.Filter)return this.AoE;else
if(!!this.Gf)return this.Gf.O2;return 0;},Bm:function(E){A.Device.ITable.Bm.call(
this,E);this.AZA(this);},Vv:function(Ac,AZ){var A$=this.ZY(Ac);if(!!A$)return A$.
Vv(AZ);return 0;},R0:function(Ac,AZ){var A$=this.ZY(Ac);if(!!A$)return A$.R0(AZ);
return 0;},Ol:function(){if(!!this.Gf)return this.Gf.Ol();return-1;},On:function(
Aoc){var Ht=false;if(!!this.Gf)Ht=this.Gf.On(Aoc);if(Ht)A.pe([this,this.AZA],this
);return Ht;},Ya:function(){if(!!this.Filter)throw new Error(NZ+A._GetAutoObject(
A.Device.Converter).Bf5(this.Id,this.Filter));if(!!this.Gf)return this.Gf.A22(A.
_NewObject(C.AFd,0));return-1;},Y_:function(Ac,AZ,CV){var A$=this.ZY(Ac);if(!!A$
)return A$.Y_(AZ,CV);return false;},Hb:function(Ac,AZ,CV){var A$=this.ZY(Ac);if(
!!A$)return A$.Hb(AZ,CV);return false;},Y9:function(Ac,AZ,CV){var A$=this.ZY(Ac);
if(!!A$)return A$.Y9(AZ,CV);return false;},Na:function(Ac,AZ,CV){var A$=this.ZY(
Ac);if(!!A$)return A$.Na(AZ,CV);return false;},Y8:function(Ac,AZ,CV){var A$=this.
ZY(Ac);if(!!A$)return A$.Y8(AZ,CV);return false;},K7:function(aColumn,A1){if(!!this.
Filter){var P;for(P=0;P<this.AoE;P=P+1)if(this.Ak$.Get(P).CA(aColumn)===A1)return P;
return-1;}else if(!!this.Gf)return this.Gf.A4N(aColumn,A1);return-1;},LL:function(
Ac,AZ){var A$=this.ZY(Ac);if(!!A$)return A$.LL(AZ);return 0;},Uc:function(Ac,AZ,
CV){var A$=this.ZY(Ac);if(!!A$)return A$.Uc(AZ,CV);return false;},Aji:function(aColumn
,A1){if(!!this.Filter){var P;for(P=0;P<this.AoE;P=P+1)if(this.Ak$.Get(P).LL(aColumn
)===A1)return P;return-1;}else if(!!this.Gf)return this.Gf.AM7(aColumn,A1);return-
1;},Ha:function(){if(!!this.Gf)return this.Gf.Ha();return false;},Ajf:function(aColumn
,A1){if(!!this.Gf)return this.Gf.A4N(aColumn,A1)>=0;return false;},AdL:function(
aColumn,A1){if(!!this.Gf)return this.Gf.AM7(aColumn,A1)>=0;return false;},Hz:function(
){if(!!this.Gf)return this.Gf.Hz();return 0;},AaP:function(){if(!!this.Gf)return this.
Gf.AaP();return-1;},Qr:function(){if(!!this.Gf)return this.Gf.O2;return 0;},AZA:
function(G){this.AZP();if(!!this.Filter&&!!this.Gf){var P;for(P=0;P<this.Gf.Ch();
P=P+1){var A0f=true;var Ay=this.Filter.ANj();var A$=this.Gf.Tz(P);if(!!A$)while(
A0f&&!!Ay){A0f=A$.Bg3(Ay);Ay=this.Filter.ANo(Ay);}else A.ab5("%s",((WH+P.toFixed(
))+AnK)+this.Gf.Ch().toFixed());if(A0f){this.Ak$.Set(this.AoE,this.Gf.Gr.Get(P));
this.AoE=this.AoE+1;}}}A.pe([this,this.AjT],this);},AZP:function(){var P;for(P=0;
P<128;P=P+1)this.Ak$.Set(P,null);this.AoE=0;},AEQ:function(E){if(this.Gf===E)return;
if(!!this.Gf)A.z9([this,this.A2s],this.Gf,0);this.Gf=E;if(!!this.Gf){A.zV([this,
this.A2s],this.Gf,0);A.pe([this,this.A2s],this);}},A2s:function(G){A.pe([this,this.
AZA],this);},ZY:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=128))
return null;else return this.Ak$.Get(aIndex);}else if(!!this.Gf)return this.Gf.Tz(
aIndex);A.ab5("%s",Ahl+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.
ITable._Init.call(this,aArg);(this.Ak$=[]).__proto__=C.GA.Ak$;this.__proto__=C.GA;
},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Ak$,D);if((
B=this.Gf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A9s={Kw:null,Ac9:null,Oi:null,ALq:false,ALr:true,A2m:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).AbE(1);this.
Ac9.Ar(true);}break;case 1:{A._GetAutoObject(A.Device.Device).AbE(2);A._GetAutoObject(
A.Device.Device).Ark(A._GetAutoObject(A.Device.Device).Aq.Qr());this.Kw.Ff(A._GetAutoObject(
A.Device.Device).AeR*50);this.Kw.BY=A._GetAutoObject(A.Device.Device).AeR;this.Kw.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).AbE(3);this.Ac9.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).AbE(4);A._GetAutoObject(A.Device.
Device).Ark(A._GetAutoObject(A.Device.Device).Aq.Qr());this.Kw.Ff(A._GetAutoObject(
A.Device.Device).AeR*50);this.Kw.BY=A._GetAutoObject(A.Device.Device).AeR;this.Kw.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).AbE(5);this.Ac9.Ar(true
);}break;case 5:A.pe([this,this.BdV],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Ahm,A._GetAutoObject(A.Device.Device).SyncState);}},BxX:function(G){this.
Ac9.Ar(false);A.pe([this,this.A2m],this);},ByW:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).AbE(0);A.pe([this,this.A2m],this);}break;default:;}},BdV:function(G){this.Ac9.
Ar(false);this.Kw.Ar(false);A._GetAutoObject(A.Device.Device).AbE(0);},ADD:function(
E){if(this.ALr===E)return;this.ALr=E;A.abo([this,this.Bh6,this.ADD],0);},Bh6:function(
){return this.ALr;},ApJ:function(G){var B;this.Oi.Cq=true;this.Oi.BY=false;this.
Oi.Ff(100);this.Oi.HF(1);this.Oi.Q=[this,this.AQT,this.ARq];A.pe([B=this.Oi,B.Anr
],this);},BeX:function(G){var B;this.Oi.Cq=true;this.Oi.BY=false;this.Oi.Ff(400);
this.Oi.T1(200);this.Oi.HF(3);this.Oi.Q=[this,this.AQT,this.ARq];this.ADD(false);
A.pe([B=this.Oi,B.Anr],this);},ARq:function(E){if(this.ALq===E)return;this.ALq=E;
A.abo([this,this.AQT,this.ARq],0);},AQT:function(){return this.ALq;},ApK:function(
G){var B;this.Oi.Ant(this);this.ADD(false);},_Init:function(aArg){A.acl.FZ._Init.
call(this.Kw={I:this},0);A.Core.Timer._Init.call(this.Ac9={I:this},0);A.acl.Tn._Init.
call(this.Oi={I:this},0);this.__proto__=C.A9s;var B;this.Kw.HF(1);this.Ac9.PC(2000
);this.Kw.Se=[this,this.A2m];this.Kw.Q=[B=A._GetAutoObject(A.Device.Device),B.ARi
,B.AYF];this.Ac9.Mp=[this,this.BxX];A.h7++;},_Done:function(){this.__proto__=null;
this.Kw._Done();this.Ac9._Done();this.Oi._Done();A.h7--;},_ReInit:function(){this.
Kw._ReInit();this.Ac9._ReInit();this.Oi._ReInit();},_Mark:function(D){var B;if((
B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Oi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.AbV={_Init:function(){C.A9s._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AFP={A4:0,_Init:function(aArg){C.V2._Init.
call(this,aArg);this.__proto__=C.AFP;},_className:"DeviceSimulation::UInt64"};C.
Aua={_Init:function(){C.PG._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Do:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Cv.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.Xy={Adv:null,CJ:function(G){var K=this.K;A.ab5("%s",Acg);K.Adv.Ar(true);},Fd:
function(G){var K=this.K;if(K.Adv.Bv===true){K.Adv.Ar(false);A.ab5("%s",Uz);}},BhX:
function(G){var K=this.K;K.Adv.Ar(false);A._GetAutoObject(A.kR.AY).AgY(A._GetAutoObject(
A.Device.Device).AwJ);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Adv={I:this},0);K.__proto__=C.Xy;this.Ad$.H(AnL);K.Adv.PC(1500);this.Ue.R(AnM);
this.Ue.Y(true);this.Ad$.Ax(A.aaL(A.ach.AP1));K.Adv.Mp=[this,K.BhX];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Adv._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Adv._ReInit();},_Mark:function(D){var B;if((B=this.Adv)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ai_={Auq:A.jV,_Init:function(aArg){A.Device.Ai_._Init.call(this,aArg);this.__proto__=
C.Ai_;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ACI.__proto__=C.V2;C.String.__proto__=C.V2;C.AAT.__proto__=C.
V2;C.AFQ.__proto__=C.V2;C.AFO.__proto__=C.V2;C.PG.__proto__=A.Device.ITable;C.GA.
__proto__=A.Device.ITable;C.AFP.__proto__=C.V2;C.Ai_.__proto__=A.Device.Ai_;};C.
_ReInit=function(){var B;if((B=C.Ud._this))B._ReInit(),C.Ud._ReInit.call(B);if((
B=C.Al2._this))B._ReInit(),C.Al2._ReInit.call(B);if((B=C.At1._this))B._ReInit(),
C.At1._ReInit.call(B);if((B=C.Ary._this))B._ReInit(),C.Ary._ReInit.call(B);if((B=
C.AbV._this))B._ReInit(),C.AbV._ReInit.call(B);if((B=C.Aua._this))B._ReInit(),C.
Aua._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Ud._this)&&(B._cycle!=D))B.
_Done(C.Ud._this=null);if((B=C.Al2._this)&&(B._cycle!=D))B._Done(C.Al2._this=null
);if((B=C.At1._this)&&(B._cycle!=D))B._Done(C.At1._this=null);if((B=C.Ary._this)&&(
B._cycle!=D))B._Done(C.Ary._this=null);if((B=C.AbV._this)&&(B._cycle!=D))B._Done(
C.AbV._this=null);if((B=C.Aua._this)&&(B._cycle!=D))B._Done(C.Aua._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */