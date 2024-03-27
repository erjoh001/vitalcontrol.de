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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acs)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acs=(function(){var A=index;var C={};
var Cc="ERROR: access to null Bool data in column [";var BD="]";var E6="Access to inexistent column index: ";
var Hp=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IS="Unsupported filter criterion class";var
Ir="Operator not handled:";var O1="1,8";var P4="INFO: Device.StartScan() called.";
var P5="INFO: Device.StopScan() called.";var CQ="V0.";var Fe=".";var L1="\n";var
P6="Temp: ";var J0="Battery: ";var N_="%%";var P7="Selected animal with row index";
var MG="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S6="1,2";var UN="0,1,2";var ZZ="3900,3950,4000";var WZ="4050,4100,4150";var Is="Read only";
var UO="Unknown data export type: ";var Z0="Unhandled Device::DataExportType: ";
var W0="0,2,1";var Z1="650,150,700";var W1="800,200,900";var Z2="800,200,850";var
Z3="40000,4000,0";var UP="32,7,34,18,23,14";var W2="16384";var P8="1,1024";var Z4=
"1,256,1024";var O2="Simulate Scan";var Ri="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var W3="%d.%m.%Y";var W4="1";var W5="2";var W6="Unknown gender: ";var Z5="text/csv";
var W7="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W8="hit-geburt-%d-%m-%Y_%H-%M.csv";var S7="animals-%d-%m-%Y_%H-%M.csv";var UQ=
"zugang-%d-%m-%Y_%H-%M.csv";var UR="M";var AcH="F";var S8="?";var Z6="%Y-%m-%d";
var Afw="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var Z7="ERROR: Cannot start transaction";
var W9="Nested transactions are not allowed.";var Z8="Transaction not opened.";var
Z9="Wrong transaction ID.";var Afx="Unhandled TableId:";var KX="Maximum number of rows reached.";
var AcI="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var Lu=
"10";var AhS="20";var An7="30";var N$="31";var W_="32";var An8="Severe: filter set when inserting row into table: ";
var US="Warning: DeviceSimulation::TableData not in transaction";var AhT="ERROR: Row not found with index [";
var AcJ="] while Rows Count = ";var UT="ERROR: trying to access an inexistent row with Index=";
var An9="Invalid Device::SyncState";var An_="Forwarding to home screen after 500 milliseconds ...";
var An$="Forwarding to home screen canceled...";var Aoa=[0,58,240,208];var Afy="VitalControl\nstarting up \u2026";
C.Table={GL:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akh],K.GL,0);},
CF:function(Ad,A3){var K=this.K;return K.GL.CF(Ad,A3);},VU:function(Ad,A3){var K=
this.K;return K.GL.VU(Ad,A3);},H2:function(Ad,A3){var K=this.K;return K.GL.H2(Ad
,A3);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GL.OnSetId(
E);},B9:function(){var K=this.K;return K.GL.B9();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GL.Bk(E);},VV:function(Ad,A3){var K=this.K;return K.
GL.VV(Ad,A3);},Sh:function(Ad,A3){var K=this.K;return K.GL.Sh(Ad,A3);},Ox:function(
){var K=this.K;return K.GL.Ox();},Oz:function(AoJ){var K=this.K;return K.GL.Oz(AoJ
);},YA:function(){var K=this.K;return K.GL.YA();},ZG:function(Ad,A3,CZ){var K=this.
K;return K.GL.ZG(Ad,A3,CZ);},Hm:function(Ad,A3,CZ){var K=this.K;return K.GL.Hm(Ad
,A3,CZ);},ZF:function(Ad,A3,CZ){var K=this.K;return K.GL.ZF(Ad,A3,CZ);},N4:function(
Ad,A3,CZ){var K=this.K;return K.GL.N4(Ad,A3,CZ);},ZE:function(Ad,A3,CZ){var K=this.
K;return K.GL.ZE(Ad,A3,CZ);},LS:function(aColumn,A9){var K=this.K;return K.GL.LS(
aColumn,A9);},KM:function(Ad,A3){var K=this.K;return K.GL.KM(Ad,A3);},Uv:function(
Ad,A3,CZ){var K=this.K;return K.GL.Uv(Ad,A3,CZ);},AgT:function(aColumn,A9){var K=
this.K;return K.GL.AgT(aColumn,A9);},E5:function(){var K=this.K;return K.GL.E5();
},AjE:function(aColumn,A9){var K=this.K;return K.GL.AjE(aColumn,A9);},Aeg:function(
aColumn,A9){var K=this.K;return K.GL.Aeg(aColumn,A9);},HI:function(){var K=this.
K;return K.GL.HI();},Abm:function(){var K=this.K;return K.GL.Abm();},QF:function(
){var K=this.K;return K.GL.QF();},_Init:function(aArg){var K=this.K;C.GL._Init.call(
K.GL={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GL._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GL._ReInit();},_Mark:function(D){var B;if((B=this.GL)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGh={Tc:A.abi(42,null,null),CF:function(aColumn){var B;this.Aaj(aColumn);var Aq=(
C.ADI.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;
},VU:function(aColumn){var B;this.Aaj(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return A.jV;},H2:function(aColumn
){var B;this.Aaj(aColumn);var Aq=(C.ABP.isPrototypeOf(B=this.Tc.Get(aColumn))?B:
null);if(!!Aq)return Aq.A4;else A.ab5("%s",(Cc+aColumn.toFixed())+BD);return false;
},Hm:function(aColumn,A9){this.Aaj(aColumn);var Aq=A._NewObject(C.ADI,0);Aq.A4=A9;
this.Tc.Set(aColumn,Aq);return true;},ZE:function(aColumn,A9){this.Aaj(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A4=A9;this.Tc.Set(aColumn,Aq);return true;},N4:
function(aColumn,A9){this.Aaj(aColumn);var Aq=A._NewObject(C.ABP,0);Aq.A4=A9;this.
Tc.Set(aColumn,Aq);return true;},Aaj:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E6+aColumn.toFixed())+Hp);},Bi2:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJB(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A4);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.Bx1(this.
Sh(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A4);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
Bx0(this.VU(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A4);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.BxZ(this.H2(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJB(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJB(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.Bx4(this.VV(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A4)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Bx2(this.KM(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Bx3(this.KM(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A4,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zg&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OA&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJB(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else throw new Error(IS);},AJB:function(Fs,Eb,GA){
switch(Eb){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<GA;case 4:
return Fs.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:throw new
Error(Ir+Eb.toFixed());}},Bx0:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;
case 2:return Fs>GA;case 3:return Fs<GA;case 4:{A.ab5("%s%e%s%i",Fs,Eb,GA,Fs.indexOf(
GA,0));return Fs.indexOf(GA,0)>=0;}case 5:return Fs!==GA;default:throw new Error(
Ir+Eb.toFixed());}},BxZ:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case
2:case 3:case 4:return false;case 5:return Fs!==GA;default:throw new Error(Ir+Eb.
toFixed());}},VV:function(aColumn){var B;this.Aaj(aColumn);var Aq=(C.AGW.isPrototypeOf(
B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;},ZG:function(aColumn
,A9){this.Aaj(aColumn);var Aq=A._NewObject(C.AGW,0);Aq.A4=A9;this.Tc.Set(aColumn
,Aq);return true;},Bx4:function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case 2:
return Fs>GA;case 3:return Fs<GA;case 4:return Fs.toFixed().indexOf(GA.toFixed()
,0)>=0;case 5:return Fs!==GA;default:throw new Error(Ir+Eb.toFixed());}},Sh:function(
aColumn){var B;this.Aaj(aColumn);var Aq=(C.AGU.isPrototypeOf(B=this.Tc.Get(aColumn
))?B:null);if(!!Aq)return Aq.A4;return 0;},ZF:function(aColumn,A9){this.Aaj(aColumn
);var Aq=A._NewObject(C.AGU,0);Aq.A4=A9;this.Tc.Set(aColumn,Aq);return true;},Bx1:
function(Fs,Eb,GA){switch(Eb){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<
GA;case 4:return Fs.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:
throw new Error(Ir+Eb.toFixed());}},KM:function(aColumn){var B;this.Aaj(aColumn);
var Aq=(C.AGV.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;
return 0;},Uv:function(aColumn,A9){this.Aaj(aColumn);var Aq=A._NewObject(C.AGV,0
);Aq.A4=A9;this.Tc.Set(aColumn,Aq);return true;},Bx2:function(Fs,Eb,GA){switch(Eb
){case 0:return Fs===GA;case 2:return Fs>GA;case 3:return Fs<GA;case 4:return Fs.
toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Fs!==GA;default:throw new Error(
Ir+Eb.toFixed());}},Bx3:function(Fs,Eb,GA,Atj,AIZ){var AKR=Fs.toFixed();AKR=A.ab2(
A.abV(AKR,AKR.length-Atj),AIZ);Fs=Math.trunc(Fs/A._GetAutoObject(A.Device.Helper
).ApK(Atj))%A._GetAutoObject(A.Device.Helper).ApK(AIZ);var ALj=A.ab0(GA,0,10);switch(
Eb){case 0:return Fs===ALj;case 2:return Fs>ALj;case 3:return Fs<ALj;case 4:return AKR.
indexOf(GA,0)>=0;case 5:return Fs!==ALj;default:throw new Error(Ir+Eb.toFixed());
}},_Init:function(aArg){(this.Tc=[]).__proto__=C.AGh.Tc;this.__proto__=C.AGh;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tc,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wn={_Init:function(
aArg){this.__proto__=C.Wn;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADI={A4:0,_Init:function(aArg){C.Wn._Init.call(this,aArg);this.__proto__=C.ADI;
},_className:"DeviceSimulation::Int32"};C.String={A4:A.jV,_Init:function(aArg){C.
Wn._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABP={A4:false,_Init:function(aArg){C.Wn._Init.call(this,aArg);this.__proto__=
C.ABP;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aub:null,AiX:null,AaK:
null,CP:function(){var K=this.K;K.A_U.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zj(3);A.zX([this,K.BfH],[B=K.Aub,B.A8I,B.ATh],0);this.UpdateAutoActions(
O1);K.A_U.call(this,this);this.Asj(this);this.Ask(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Ash(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Anu(languageValue);A.pe([this
,K.ATI],this);},Zj:function(E){this.UpdateActiveScreen(E);},Awl:function(E){this.
UpdateBatteryChargeState(E);},AER:function(E){this.UpdateChargeActive(E);},ArV:function(
E){this.UpdateScanState(E);},AwK:function(E){this.UpdateMeasureState(E);},AwY:function(
E){this.UpdateTempValue(E);},Anu:function(E){this.UpdateLanguage(E);},AwZ:function(
E){this.UpdateTemperatureUnit(E);},AEP:function(E){this.UpdateBrightness(E);},AFl:
function(E){this.UpdateMonitoring(E);},Axx:function(){var B;if(A._GetAutoObject(
C.Uw).Axr){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AKX(this
);}},AhJ:function(){var B;A._GetAutoObject(A.Device.Helper).SQ.AnQ(this);this.UpdateMeasureState(
0);},AhG:function(){var K=this.K;A.ab5("%s",P4);this.UpdateScanState(1);A.pe([this
,K.BfH],this);},AnR:function(){var K=this.K;var B;A.ab5("%s",P5);K.AiX.AnQ(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah5){},Axq:function(){A.Device.
DeviceClass.Bai.call(this);this.Zj(1);},AGe:function(){A.Device.DeviceClass.Bag.
call(this);this.Zj(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Aw5:function(
E){this.UpdateUnderTemp(E);},Ab4:function(E){this.UpdateSyncState(E);},ACV:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Fe)+A.abz(0,9).toFixed(
))+L1)+P6)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGJ))+L1)+J0)+A.abz(1,100).toFixed(
))+N_;return aString;},PopupStateChanged:function(J2,Ae){var Agj=A._NewObject(C.
PopupContext,0);Agj.Id=J2;Agj.EV=Ae;this.AnG.Trigger(Agj,false);},AFN:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae7:function(E){this.UpdateVibrationOn(
E);},AwU:function(E){this.UpdateRatingMode(E);},AeX:function(E){this.UpdateFlashLightOn(
E);},Um:function(E){this.UpdateTopLightOn(E);},Wx:function(E){this.UpdateRGBTopLight(
E);},Awk:function(E){this.UpdateAutoRegistrationMode(E);},ArW:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OL:function(E){this.UpdateDigitsID(
E);},PP:function(E){this.UpdateOffsetID(E);},AFR:function(E){this.UpdateWeightValue(
E);},AwH:function(E){this.UpdateMassUnit(E);},Arv:function(E){A.Device.DeviceClass.
Bac.call(this,E);this.UpdateActiveActions(E);},Arw:function(E){A.Device.DeviceClass.
Bad.call(this,E);this.UpdateActiveActionsOrder(E);},Ako:function(E){A.Device.DeviceClass.
Bae.call(this,E);this.UpdateAutoActions(E);},AGF:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBl.call(this,this);},Asy:function(){var K=this.K;var B;K.AaK.AnQ(this);this.
UpdateMeasureState(0);},EB:function(E){this.UpdateAnimalType(E);},Aw6:function(E
){this.UpdateWeightRecordingMode(E);},AFq:function(E){this.UpdatePredictedTempValue(
E);},SN:function(L7){A.ab5("%s%i",P7,L7);},AEW:function(E){this.UpdateDemoMode(E
);},AEE:function(E){this.UpdateAgeRegistration(E);},Aw7:function(E){this.UpdateWeightRecordingScope(
E);},JR:function(E){this.UpdateGender(E);},ArL:function(E){this.UpdateIDLastUsedMale(
E);},ArK:function(E){this.UpdateIDLastUsedFemale(E);},Zk:function(E){this.UpdateAnimalListContent(
E);},AEG:function(E){this.UpdateAlarmListAction(E);},AEZ:function(E){this.UpdateFlashLightInMeasureState(
E);},AeS:function(E){this.UpdateAnimalInfoContent(E);},AFQ:function(E){this.UpdateWatchListAction(
E);},AE1:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.Arv(15359);this.Arw(MG);},ResetAutoActions:function(G){this.Ako(S6);},Awi:
function(E){this.UpdateAnimalTypesString(E);},ArY:function(E){this.UpdateTemperaturesHighString(
E);},ArZ:function(E){this.UpdateTemperaturesLowString(E);},Asj:function(G){this.
Awi(UN);this.ArZ(ZZ);this.ArY(WZ);this.Aw5(3600);},AwB:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArR:function(E){this.UpdateNaisIdLastUsedMale(E);},ArQ:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwO:function(E){this.UpdateNaisIdIncrementMale(E);},AwN:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Baj.call(this);A._GetAutoObject(
A.kR.A$).Cf(53);},Anp:function(E){this.UpdateBootloaderMessage(E);},AEB:function(
E){this.UpdateActionListAction(E);},Awg:function(E){this.UpdateActionListHideMeasured(
E);},Ug:function(E){this.UpdateAnimalIdGenerationMethod(E);},Awt:function(E){this.
UpdateDirectionOfCountingFemale(E);},Awu:function(E){this.UpdateDirectionOfCountingMale(
E);},Awv:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArM:function(E){this.
UpdateIDLastUsedUnisex(E);},ArS:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwP:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akq:function(E){this.UpdateEartagNrAssignmentMode(
E);},NY:function(E){this.UpdateBreed(E);},AFj:function(E){throw new Error(Is);},
AFd:function(E){throw new Error(Is);},AFK:function(E){throw new Error(Is);},AEL:
function(E){throw new Error(Is);},AEX:function(E){this.UpdateDryCowListAction(E);
},AJy:function(A0q){var Qu;switch(A0q){case 15:Qu=false;break;default:Qu=true;}return Qu;
},AEK:function(E){this.UpdateBirthListView(E);},AFL:function(E){this.UpdateTransferProgress(
E);},Ar0:function(E){this.UpdateTransferTarget(E);},Asx:function(){var B;A.pe([B=
A._GetAutoObject(C.Ack),B.BfL],this);},AwT:function(E){this.UpdatePremisesID(E);
},AwM:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE2:function(E){
this.UpdateFreshCowSpan(E);},AFM:function(E){this.UpdateUSBState(E);},Axw:function(
){var K=this.K;var B;this.GC.FileName=K.Bim.call(this,this.GC.AgH);switch(this.GC.
AgH){case 0:K.Byb.call(this,(C.VM.isPrototypeOf(B=this.GC)?B:null));break;case 1:
K.Bx_.call(this,(C.VM.isPrototypeOf(B=this.GC)?B:null));break;case 2:K.Byd.call(
this,(C.VM.isPrototypeOf(B=this.GC)?B:null));break;default:throw new Error(UO+this.
GC.AgH.toFixed());}},Aq_:function(){return true;},Aqv:function(){var K=this.K;switch(
this.GC.AgH){case 0:A._GetAutoObject(A.Device.Device).A6(72,true,A.jV,0,[this,K.
A2P]);break;case 1:A._GetAutoObject(A.Device.Device).A6(90,true,A.jV,0,[this,K.A2P
]);break;case 2:A._GetAutoObject(A.Device.Device).A6(99,true,A.jV,0,[this,K.A2P]
);break;default:throw new Error(Z0+this.GC.AgH.toFixed());}},AFx:function(E){throw new
Error(Is);},Awh:function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFz:function(
E){this.UpdateShutdownTimer(E);},Ask:function(G){this.Awj(W0);this.Ar4(Z1);this.
Ar3(W1);this.Ar2(Z2);this.Ar5(Z3);},Ar3:function(E){this.UpdateWeightGainsHighString(
E);},Ar4:function(E){this.UpdateWeightGainsLowString(E);},Awj:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar2:function(E){this.UpdateWeightGainsAverageString(E);},Ar5:function(E){this.
UpdateWeightValueBirthString(E);},Aww:function(E){this.UpdateEvaluationAnimalType(
E);},AwX:function(E){this.UpdateStartScreen(E);},ADM:function(){return 1;},ADN:function(
){return 1;},AFi:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw3:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nf:function(E){this.UpdateWhereAbouts(
E);},Ary:function(E){this.UpdateActiveMassRecordingFields(E);},Arz:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Ash:function(G){this.Ary(A.jV);this.Arz(
UP);},AFg:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajv:function(
){A._GetAutoObject(C.Ack).AEJ(true);return true;},Aqh:function(){var B;A._GetAutoObject(
C.Ack).Aqh(this);return true;},Aqg:function(){var B;A.pe([B=A._GetAutoObject(C.Ack
),B.Aqg],this);return true;},AuH:function(){var B;A.pe([B=A._GetAutoObject(C.Ack
),B.BgQ],this);return true;},AwJ:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwQ:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwQ(W2);},AwR:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwR(P8);},Aw9:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Aw9(Z4);},Aw4:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asg:function(Aox){this.GC.E5();this.GC.AgH=Aox;this.GC.Fb(1);this.GC.Fb(2);this.
Axw();},BA6:function(G){switch(this.KG){case 34:case 35:case 32:case 45:case 49:
case 55:case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2
);}break;case 15:break;default:this.UpdateScanState(4);}},BfH:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.Aub.AGA)K.AiX.AnO(this);A.ab5("%s",O2);}
,BBl:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.Aub.Axr)K.AaK.
AnO(this);},BB4:function(G){this.UpdateMeasureState(3);},ATI:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AKX],[B=K.Aub,B.A8J,B.ATi],0
);this.RX.AEV(A._GetAutoObject(A.Device.Helper).A6s(8));this.Sw.AEV(A._GetAutoObject(
A.Device.Helper).A6s(8));},A_U:function(G){var AzD=A._NewObject(A.Device.Axv,0);
AzD.OnSetTimestamp(1711385184);AzD.AFe(1);AzD.AFk(0);AzD.AFt(0);this.Sw=AzD;var Ay_=
A._NewObject(A.Device.Axv,0);Ay_.OnSetTimestamp(1711385184);Ay_.AFe(1);Ay_.AFk(0
);Ay_.AFt(4);this.RX=Ay_;var AlL=A._NewObject(A.Device.Avk,0);AlL.AFb(1);AlL.AFc(
0);AlL.AFa(0);AlL.AFI(1);AlL.AFJ(0);AlL.AFH(0);AlL.OnSetTimestamp(1711385184);this.
QW=AlL;var Amd=A._NewObject(A.Device.Avk,0);Amd.AFb(1);Amd.AFc(0);Amd.AFa(0);Amd.
AFI(1);Amd.AFJ(0);Amd.AFH(0);Amd.OnSetTimestamp(1711385184);this.SW=Amd;this.AhF=
A.aaR(A.acf.Unknown);},Byw:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Byb:function(AcV){var K=this.
K;var B;var Ac8=Ri;var Cy=A._NewObject(A.Device.Animal,0);var O;var Al6=0;for(O=
0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cy.E3(O,A._GetAutoObject(A.Device.
Device).An);if(Cy.IsRegistrationNoticePending&&(Cy.NaisId>0)){Ac8=Ac8+(((((((((((((((((
K.Apc.call(this,A._GetAutoObject(A.Device.Device).SI)+String.fromCharCode(0x3B))+
K.Apc.call(this,Cy.NaisId))+String.fromCharCode(0x3B))+K.A1K.call(this,Cy.DateOfBirth
))+String.fromCharCode(0x3B))+K.BcE.call(this,Cy.Breed))+String.fromCharCode(0x3B
))+K.BcD.call(this,Cy.Gender))+String.fromCharCode(0x3B))+K.ByB.call(this,Cy.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcF.call(this,Cy.WhereAbouts))+String.fromCharCode(
0x3B))+K.ByE.call(this,Cy.BirthType))+String.fromCharCode(0x3B))+K.Apc.call(this
,Cy.NaisIdMother))+L1);Al6++;}}AcV.AuX=Ac8;AcV.AGi=Al6;AcV.Fb(3);},Apc:function(
Rm){if(!Rm)return A.jV;return Rm.toFixed();},A1K:function(AyO){var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(AyO);return Au.Format(W3);},BcE:function(AcU){if(!AcU
)return A.jV;return A._GetAutoObject(A.Device.Converter).A44(AcU).toFixed();},BcD:
function(L4){var result=A.jV;switch(L4){case 0:result=W4;break;case 1:result=W5;
break;case 2:result=A.jV;break;default:A.ab5("%s",W6+L4.toFixed());}return result;
},ByB:function(AI0){if(!AI0)return A.jV;return AI0.toFixed();},BcF:function(AfI){
if(!AfI)return A.jV;return AfI.toFixed();},ByE:function(Atc){return(Atc+1).toFixed(
);},A2P:function(G){var K=this.K;var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!As)return;if(As.PopupState===7){K.Byw.call(this,this.GC.FileName,
Z5,(C.VM.isPrototypeOf(B=this.GC)?B:null).AuX);this.GC.E5();}else if(As.PopupState===
8)this.GC.E5();},Bx_:function(AcV){var K=this.K;var B;var Ac8=W7;var Cy=A._NewObject(
A.Device.Animal,0);var O;var Al6=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B9();O++){var Ay6=A.jV;if(Cy.Aq9())Ay6=K.ByG.call(this,Cy.FirstBodyWeight);Cy.E3(
O,A._GetAutoObject(A.Device.Device).An);Ac8=Ac8+(((((((((((K.Apc.call(this,Cy.NaisId
)+String.fromCharCode(0x3B))+K.ByC.call(this,Cy.VisualId))+String.fromCharCode(0x3B
))+K.Apc.call(this,Cy.TransponderId))+String.fromCharCode(0x3B))+K.ByA.call(this
,Cy.DateOfBirth))+String.fromCharCode(0x3B))+K.ByF.call(this,Cy.Gender))+String.
fromCharCode(0x3B))+Ay6)+L1);Al6++;}AcV.AuX=Ac8;AcV.AGi=Al6;AcV.Fb(3);},Bim:function(
Aox){var AJT=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Du());switch(Aox){case 0:AJT=Ac.Format(W8);break;case 1:AJT=Ac.
Format(S7);break;case 2:AJT=Ac.Format(UQ);break;default:throw new Error(UO+Aox.toFixed(
));}return AJT;},ByC:function(Rm){return Rm.toFixed();},ByF:function(L4){var result=
A.jV;switch(L4){case 0:result=UR;break;case 1:result=AcH;break;case 2:result=S8;
break;default:A.ab5("%s",W6+L4.toFixed());}return result;},ByG:function(ML){if(ML<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak4(ML);},ByA:function(
AyO){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyO);return Au.Format(Z6);},
Byd:function(AcV){var K=this.K;var B;var Ac8=Afw;var Cy=A._NewObject(A.Device.Animal
,0);var O;var Al6=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cy.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cy.IsRegistrationNoticePending&&(Cy.
NaisId>0)){Ac8=Ac8+(((((((((((((K.Apc.call(this,Cy.NaisId)+String.fromCharCode(0x3B
))+K.A1K.call(this,A._GetAutoObject(A.Device.Helper).Du()))+String.fromCharCode(
0x3B))+K.A1K.call(this,Cy.DateOfBirth))+String.fromCharCode(0x3B))+K.BcD.call(this
,Cy.Gender))+String.fromCharCode(0x3B))+K.BcF.call(this,Cy.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcE.call(this,Cy.Breed))+String.fromCharCode(0x3B))+K.Apc.
call(this,A._GetAutoObject(A.Device.Device).SI))+L1);Al6++;}}AcV.AuX=Ac8;AcV.AGi=
Al6;AcV.Fb(3);},_Init:function(aArg){var K=this.K;A.acl.Gk._Init.call(K.AiX={I:this
},0);A.acl.Gk._Init.call(K.AaK={I:this},0);K.__proto__=C.DeviceClass;this.Awl(100
);this.Anu(1);this.ArL(200);this.ArK(100);this.ArR(276000912345678);this.ArQ(276000923456789
);this.ArM(500);this.ArS(276000901234567);this.NY(1);K.AiX.HM(1);K.AiX.Fp(1000);
K.AaK.Wy(0);K.AaK.HM(1);K.AaK.Fp(750);K.AaK.B1=50000;this.GC=A._NewObject(C.VM,0
);K.AiX.Sx=[this,K.BA6];K.Aub=A._GetAutoObject(C.Uw);K.AaK.Sx=[this,K.BB4];K.AaK.
Q=[this,this.AEy,this.AIN];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.AiX._Done();K.AaK._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.AiX._ReInit();K.AaK._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGW={A4:0,_Init:function(aArg){C.Wn._Init.call(this,aArg);this.__proto__=C.AGW;
},_className:"DeviceSimulation::UInt8"};C.AGU={A4:0,_Init:function(aArg){C.Wn._Init.
call(this,aArg);this.__proto__=C.AGU;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A3W:0,AFA:function(E){var K=this.K;K.A3W=K.A3W+(E-this.Du());A.Device.
HelperClass.Baf.call(this,E);},Du:function(){var K=this.K;return A.Device.HelperClass.
Bab.call(this)+K.A3W;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A_0={Axr:false,AGA:false,ATh:function(E){if(this.AGA===E)return;this.AGA=E;A.
abo([this,this.A8I,this.ATh],0);},A8I:function(){return this.AGA;},ATi:function(
E){if(this.Axr===E)return;this.Axr=E;A.abo([this,this.A8J,this.ATi],0);},A8J:function(
){return this.Axr;},_Init:function(aArg){this.__proto__=C.A_0;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Uw={_Init:function(){C.A_0._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Uw._variants();
},_this:null};C.PopupContext={EV:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cg:function(
AH){var HD=A.Device.Rating.Bah.call(this,AH);if(HD){var Rt=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.AnimalId);if(Ad
!==-1){var Jm=Rt.Ox();if(Jm<=0)A.ab5("%s",Z7);else{var Cy=A._NewObject(A.Device.
Animal,0);Cy.E3(Ad,Rt);if((this.Temperature>0)&&(Cy.TimestampLastTemperature<this.
Timestamp)){Rt.A_T(Ad,5,this.Temperature);Rt.AkM(Ad,17,this.RatingTemperature);Rt.
Ach(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cy.TimestampLastWeighing<=this.
Timestamp){Rt.AUj(Ad,18,this.BodyWeight);Rt.Ach(Ad,19,this.Timestamp);}if(!Cy.TimestampFirstWeighing||(
Cy.TimestampFirstWeighing>=this.Timestamp)){Rt.AUj(Ad,23,this.BodyWeight);Rt.Ach(
Ad,24,this.Timestamp);Rt.Hm(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AF9(this)){var LP=A._GetAutoObject(A.Device.Helper).ACZ(this);Rt.AkM(Ad,13,LP);
Rt.Ach(Ad,31,this.Timestamp);}Rt.Oz(Jm);}}}return HD;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PU={Gf:A.abi(512,null,null),Pf:0,AJn:
0,AK6:0,A3Z:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKC:0,A3t:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bdw:512,Az6:-1,A00:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af0:false,CF:function(Ad,A3){var Bf=this.TP(Ad);if(!!Bf)return Bf.
CF(A3);return 0;},VU:function(Ad,A3){var Bf=this.TP(Ad);if(!!Bf)return Bf.VU(A3);
return A.jV;},H2:function(Ad,A3){var Bf=this.TP(Ad);if(!!Bf)return Bf.H2(A3);return false;
},VV:function(Ad,A3){var Bf=this.TP(Ad);if(!!Bf)return Bf.VV(A3);return 0;},Sh:function(
Ad,A3){var Bf=this.TP(Ad);if(!!Bf)return Bf.Sh(A3);return 0;},Ox:function(){if(this.
Af0)throw new Error(W9);this.Af0=true;return 12345;},Oz:function(AoJ){if(!this.Af0
)throw new Error(Z8);if(AoJ!==12345)throw new Error(Z9);this.Af0=false;return true;
},YA:function(){return this.A4s(A._NewObject(C.AGh,0));},ZG:function(Ad,A3,CZ){var
Bf=this.TP(Ad);if(!!Bf)return Bf.ZG(A3,CZ);return false;},Hm:function(Ad,A3,CZ){
var Bf=this.TP(Ad);if(!!Bf)return Bf.Hm(A3,CZ);return false;},ZF:function(Ad,A3,
CZ){var Bf=this.TP(Ad);if(!!Bf)return Bf.ZF(A3,CZ);return false;},N4:function(Ad
,A3,CZ){var Bf=this.TP(Ad);if(!!Bf)return Bf.N4(A3,CZ);return false;},ZE:function(
Ad,A3,CZ){var Bf=this.TP(Ad);if(!!Bf)return Bf.ZE(A3,CZ);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bcd();switch(this.Id){case 0:{this.
Bdw=256;A.pe([this,this.Bv2],this);}break;case 1:A.pe([this,this.Bv4],this);break;
case 3:A.pe([this,this.Bv1],this);break;case 4:A.pe([this,this.Bv3],this);break;
case 2:break;default:throw new Error(Afx+this.Id.toFixed());}},B9:function(){return this.
Pf;},KM:function(Ad,A3){var Bf=this.TP(Ad);if(!!Bf)return Bf.KM(A3);return 0;},Uv:
function(Ad,A3,CZ){var Bf=this.TP(Ad);if(!!Bf)return Bf.Uv(A3,CZ);return false;}
,E5:function(){this.Bcd();return true;},HI:function(){return this.Bdw;},A4s:function(
Ad){if(this.Pf>=512)throw new Error(KX);this.Gf.Set(this.Pf,Ad);this.Pf=this.Pf+
1;switch(this.Id){case 0:{this.Az6=this.Pf;this.Hm(this.Pf-1,0,this.Az6);}break;
case 1:{this.Az6=this.Pf-1;this.Hm(this.Pf-1,0,this.Az6);}break;default:;}A.pe([
this,this.Akh],this);return this.Pf-1;},TP:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gf.Get(aIndex);},Bcd:function(){var O;for(O=0;O<512;
O=O+1)this.Gf.Set(O,null);this.Pf=0;this.AJn=0;this.AKC=0;this.AK6=0;A.pe([this,
this.Akh],this);},AJ9:function(){this.AJn=(this.AJn+1)%15;return this.A00.Get(this.
AJn);},A1O:function(){this.AK6=(this.AK6+1)%10;return this.A3Z.Get(this.AK6);},AJV:
function(G){if(this.K&&this.K.AJV)return this.K.AJV.apply(this,arguments);else return C.
PU.Bv_.apply(this,arguments);},Bv_:function(G){var B;var Oi=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhL(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhL(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhL(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhL(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhL(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhL(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhL(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhL(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var BfT=0;for(O=
1;O<=7;O=O+1){BfT=3680+(20*O);Oi=BfT>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhL(7-O),0,1,Oi,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bv2:function(s){this.AJV(s);},AJX:
function(G){if(this.K&&this.K.AJX)return this.K.AJX.apply(this,arguments);else return C.
PU.Bwa.apply(this,arguments);},Bwa:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Du();var O;Ac=Ac-2678400;var Aiw;var Bcv;for(O=0;O<32;O=O+1){var A1y=this.
ByS();for(;A1y>0;A1y=A1y-1){Aiw=this.A1O();Bcv=A._GetAutoObject(A.Device.Converter
).Asz(0,Aiw);this.AG(Ac,12310020,Aiw,Bcv,this.AJ9(),this.AJ9(),this.AJ9(),this.AJ9(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aiw=this.A1O();this.AG(Ac,276000312310001,Aiw,A._GetAutoObject(A.Device.Converter
).Asz(0,Aiw),1,3,3,3,0);Aiw=this.A1O();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).Asz(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aiw,A._GetAutoObject(
A.Device.Converter).Asz(1,Aiw),2,3,3,3,0);},Bv4:function(s){this.AJX(s);},A0:function(
J2,Bwz,BwQ,Bbk,Atc,L4,BwH,BwM,BwJ,BwK,ML,Bwk,BwO,BwI,En,BwL,AcU,AI0,AfI,BwV,By$,
Bza,Bwp,BwX){var Cy=A._NewObject(A.Device.Animal,0);Cy.Gp();Cy.Aw8(0);Cy.Ae4(0);
Cy.Uk(false);Cy.Akv(false);if(Bza)Cy.PR(J2);if(By$)Cy.Nd(J2);Cy.SE(A._GetAutoObject(
A.Device.Helper).Sf(J2,BwX&0xFF,Bwp&0xFF)|0);Cy.AbZ(Bwz);Cy.Anv(BwQ);Cy.Q1(Bbk);
Cy.Akp(Atc);Cy.JR(L4);Cy.AnM(BwH);Cy.AGt(BwM);Cy.Ae0(BwK);Cy.Uk(BwJ);Cy.ArN(BwI);
Cy.AwF(BwO);Cy.Awq(Bwk);Cy.EB(En);Cy.Ae1(BwL);Cy.NY(AcU);Cy.Akr(AI0);Cy.Nf(AfI);
Cy.Anx(BwV);Cy.Cg(this);if(ML>0)A._GetAutoObject(C.Asa).AG(Bbk,J2,0,0,0,0,0,0,ML
);},AG:function(L3,AcS,AoH,Bw7,Bwt,Bwu,Bwc,Bw9,Bwe){var B0=A._NewObject(A.Device.
Rating,0);B0.Gp();var BbY=A._GetAutoObject(C.Amp).AOo(26,AcS);if(BbY>=0)B0.OnSetAnimalId(
A._GetAutoObject(C.Amp).CF(BbY,0));else A.ab5("%s%U",AcI,AcS);B0.OnSetTimestamp(
L3);B0.OnSetTemperature(AoH);B0.OnSetRatingTemperature(Bw7);B0.OnSetFaeces(Bwt);
B0.OnSetFeed(Bwu);B0.OnSetAppearance(Bwc);B0.OnSetRespiratory(Bw9);B0.OnSetBodyWeight(
Bwe);B0.Cg(this);},A55:function(aColumn,A9){var O;for(O=0;O<this.Pf;O=O+1)if(this.
Gf.Get(O).CF(aColumn)===A9)return O;return-1;},ByS:function(){this.AKC=(this.AKC+
1)%10;return this.A3t.Get(this.AKC);},AJU:function(G){if(this.K&&this.K.AJU)return this.
K.AJU.apply(this,arguments);else return C.PU.Bv9.apply(this,arguments);},Bv9:function(
G){this.AlF(10,Lu);this.AlF(20,AhS);this.AlF(30,An7);this.AlF(31,N$);this.AlF(32
,W_);},Bv1:function(s){this.AJU(s);},AlF:function(J2,BwA){var AJh=A._NewObject(A.
Device.AnimalGroup,0);AJh.Gp();AJh.OnSetId(J2);AJh.AE4(BwA);AJh.Cg(this);},Abm:function(
){return this.Az6;},AOo:function(aColumn,A9){var O;for(O=0;O<this.Pf;O=O+1)if(this.
Gf.Get(O).KM(aColumn)===A9)return O;return-1;},AJW:function(G){if(this.K&&this.K.
AJW)return this.K.AJW.apply(this,arguments);else return C.PU.Bv$.apply(this,arguments
);},Bv$:function(G){this.Aat(2016,216,6);this.Aat(2017,217,7);this.Aat(2018,218,
8);this.Aat(2019,219,9);this.Aat(2020,220,10);this.Aat(2021,221,11);},Bv3:function(
s){this.AJW(s);},Aat:function(Ac1,Bwo,Bwn){var U5=A._NewObject(A.Device.CalfDeregistrations
,0);U5.Gp();U5.AkA(Ac1);U5.Aws(Bwo);U5.Awr(Bwn);U5.Cg(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gf=[]).__proto__=C.PU.Gf;(this.A3Z=[
]).__proto__=C.PU.A3Z;(this.A3t=[]).__proto__=C.PU.A3t;(this.A00=[]).__proto__=C.
PU.A00;this.__proto__=C.PU;var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gf,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.PU._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.Amp={_Init:function(){C.PU._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.Auz={_Init:function(){C.PU.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Asa={_Init:function(){C.PU._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.GL={Alz:A.
abi(512,null,null),E9:null,Ao$:0,CF:function(Ad,A3){var Bf=this.Aar(Ad);if(!!Bf)
return Bf.CF(A3);return 0;},VU:function(Ad,A3){var Bf=this.Aar(Ad);if(!!Bf)return Bf.
VU(A3);return A.jV;},H2:function(Ad,A3){var Bf=this.Aar(Ad);if(!!Bf)return Bf.H2(
A3);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AFT(A._GetAutoObject(C.Amp));break;case 1:this.AFT(A._GetAutoObject(
C.Asa));break;case 3:this.AFT(A._GetAutoObject(C.Auz));break;case 4:this.AFT(A._GetAutoObject(
C.AuK));break;case 2:break;default:throw new Error(Afx+this.Id.toFixed());}},B9:
function(){if(!!this.Filter)return this.Ao$;else if(!!this.E9)return this.E9.Pf;
return 0;},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A0Y(this);},VV:function(
Ad,A3){var Bf=this.Aar(Ad);if(!!Bf)return Bf.VV(A3);return 0;},Sh:function(Ad,A3
){var Bf=this.Aar(Ad);if(!!Bf)return Bf.Sh(A3);return 0;},Ox:function(){if(!!this.
E9)return this.E9.Ox();return-1;},Oz:function(AoJ){var HD=false;if(!!this.E9)HD=
this.E9.Oz(AoJ);if(HD)A.pe([this,this.A0Y],this);return HD;},YA:function(){if(!!
this.Filter)throw new Error(An8+A._GetAutoObject(A.Device.Converter).Bh3(this.Id
,this.Filter));if(!!this.E9)return this.E9.A4s(A._NewObject(C.AGh,0));return-1;}
,ZG:function(Ad,A3,CZ){if(!this.E9.Af0)throw new Error(US);var Bf=this.Aar(Ad);if(
!!Bf)return Bf.ZG(A3,CZ);return false;},Hm:function(Ad,A3,CZ){if(!this.E9.Af0)throw new
Error(US);var Bf=this.Aar(Ad);if(!!Bf)return Bf.Hm(A3,CZ);return false;},ZF:function(
Ad,A3,CZ){if(!this.E9.Af0)throw new Error(US);var Bf=this.Aar(Ad);if(!!Bf)return Bf.
ZF(A3,CZ);return false;},N4:function(Ad,A3,CZ){if(!this.E9.Af0)throw new Error(US
);var Bf=this.Aar(Ad);if(!!Bf)return Bf.N4(A3,CZ);return false;},ZE:function(Ad,
A3,CZ){if(!this.E9.Af0)throw new Error(US);var Bf=this.Aar(Ad);if(!!Bf)return Bf.
ZE(A3,CZ);return false;},LS:function(aColumn,A9){if(!!this.Filter){var O;for(O=0;
O<this.Ao$;O=O+1)if(this.Alz.Get(O).CF(aColumn)===A9)return O;return-1;}else if(
!!this.E9)return this.E9.A55(aColumn,A9);return-1;},KM:function(Ad,A3){var Bf=this.
Aar(Ad);if(!!Bf)return Bf.KM(A3);return 0;},Uv:function(Ad,A3,CZ){if(!this.E9.Af0
)throw new Error(US);var Bf=this.Aar(Ad);if(!!Bf)return Bf.Uv(A3,CZ);return false;
},AgT:function(aColumn,A9){if(!!this.Filter){var O;for(O=0;O<this.Ao$;O=O+1)if(this.
Alz.Get(O).KM(aColumn)===A9)return O;return-1;}else if(!!this.E9)return this.E9.
AOo(aColumn,A9);return-1;},E5:function(){if(!!this.E9)return this.E9.E5();return false;
},AjE:function(aColumn,A9){if(!!this.E9)return this.E9.A55(aColumn,A9)>=0;return false;
},Aeg:function(aColumn,A9){if(!!this.E9)return this.E9.AOo(aColumn,A9)>=0;return false;
},HI:function(){if(!!this.E9)return this.E9.HI();return 0;},Abm:function(){if(!!
this.E9)return this.E9.Abm();return-1;},QF:function(){if(!!this.E9)return this.E9.
Pf;return 0;},A0Y:function(G){this.A1a();if(!!this.Filter&&!!this.E9){var O;for(
O=0;O<this.E9.B9();O=O+1){var A1C=true;var Av=this.Filter.AOB();var Bf=this.E9.TP(
O);if(!!Bf)while(A1C&&!!Av){A1C=Bf.Bi2(Av);Av=this.Filter.AOG(Av);}else A.ab5("%s"
,((AhT+O.toFixed())+AcJ)+this.E9.B9().toFixed());if(A1C){this.Alz.Set(this.Ao$,this.
E9.Gf.Get(O));this.Ao$=this.Ao$+1;}}}A.pe([this,this.Akh],this);},A1a:function(){
var O;for(O=0;O<512;O=O+1)this.Alz.Set(O,null);this.Ao$=0;},AFT:function(E){if(this.
E9===E)return;if(!!this.E9)A.z9([this,this.A3X],this.E9,0);this.E9=E;if(!!this.E9
){A.zV([this,this.A3X],this.E9,0);A.pe([this,this.A3X],this);}},A3X:function(G){
A.pe([this,this.A0Y],this);},Aar:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.Alz.Get(aIndex);}else if(!!this.E9
)return this.E9.TP(aIndex);A.ab5("%s",UT+aIndex.toFixed());return null;},_Init:function(
aArg){A.Device.ITable._Init.call(this,aArg);(this.Alz=[]).__proto__=C.GL.Alz;this.
__proto__=C.GL;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(
this.Alz,D);if((B=this.E9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A_1={KE:null,AdD:null,Ov:null,AMH:false,AMI:true,A3R:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Ab4(1);this.
AdD.Ar(true);}break;case 1:{A._GetAutoObject(A.Device.Device).Ab4(2);A._GetAutoObject(
A.Device.Device).Ar0(A._GetAutoObject(A.Device.Device).An.QF());this.KE.Fp(A._GetAutoObject(
A.Device.Device).Afm*50);this.KE.B1=A._GetAutoObject(A.Device.Device).Afm;this.KE.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Ab4(3);this.AdD.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Ab4(4);A._GetAutoObject(A.Device.
Device).Ar0(A._GetAutoObject(A.Device.Device).An.QF());this.KE.Fp(A._GetAutoObject(
A.Device.Device).Afm*50);this.KE.B1=A._GetAutoObject(A.Device.Device).Afm;this.KE.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Ab4(5);this.AdD.Ar(true
);}break;case 5:A.pe([this,this.BfL],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",An9,A._GetAutoObject(A.Device.Device).SyncState);}},BAp:function(G){this.
AdD.Ar(false);A.pe([this,this.A3R],this);},BBu:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Ab4(0);A.pe([this,this.A3R],this);}break;default:;}},BfL:function(G){this.AdD.
Ar(false);this.KE.Ar(false);A._GetAutoObject(A.Device.Device).Ab4(0);},AEJ:function(
E){if(this.AMI===E)return;this.AMI=E;A.abo([this,this.Bj0,this.AEJ],0);},Bj0:function(
){return this.AMI;},Aqg:function(G){var B;this.Ov.Cw=true;this.Ov.B1=false;this.
Ov.Fp(100);this.Ov.HM(1);this.Ov.Q=[this,this.AR$,this.ASH];A.pe([B=this.Ov,B.AnO
],this);},BgQ:function(G){var B;this.Ov.Cw=true;this.Ov.B1=false;this.Ov.Fp(400);
this.Ov.Uj(200);this.Ov.HM(3);this.Ov.Q=[this,this.AR$,this.ASH];this.AEJ(false);
A.pe([B=this.Ov,B.AnO],this);},ASH:function(E){if(this.AMH===E)return;this.AMH=E;
A.abo([this,this.AR$,this.ASH],0);},AR$:function(){return this.AMH;},Aqh:function(
G){var B;this.Ov.AnQ(this);this.AEJ(false);},_Init:function(aArg){A.acl.Gk._Init.
call(this.KE={I:this},0);A.Core.Timer._Init.call(this.AdD={I:this},0);A.acl.TD._Init.
call(this.Ov={I:this},0);this.__proto__=C.A_1;var B;this.KE.HM(1);this.AdD.PQ(2000
);this.KE.Sx=[this,this.A3R];this.KE.Q=[B=A._GetAutoObject(A.Device.Device),B.ASy
,B.AZ1];this.AdD.Mz=[this,this.BAp];A.h7++;},_Done:function(){this.__proto__=null;
this.KE._Done();this.AdD._Done();this.Ov._Done();A.h7--;},_ReInit:function(){this.
KE._ReInit();this.AdD._ReInit();this.Ov._ReInit();},_Mark:function(D){var B;if((
B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Ack={_Init:function(){C.A_1._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGV={A4:0,_Init:function(aArg){C.Wn._Init.
call(this,aArg);this.__proto__=C.AGV;},_className:"DeviceSimulation::UInt64"};C.
AuK={_Init:function(){C.PU._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dt:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Cb.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XV={Ad2:null,CC:function(G){var K=this.K;A.ab5("%s",An_);K.Ad2.Ar(true);},E4:
function(G){var K=this.K;if(K.Ad2.Bw===true){K.Ad2.Ar(false);A.ab5("%s",An$);}},
BjS:function(G){var K=this.K;K.Ad2.Ar(false);A._GetAutoObject(A.kR.A$).Ahr(A._GetAutoObject(
A.Device.Device).Axy);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad2={I:this},0);K.__proto__=C.XV;this.AeI.H(Aoa);K.Ad2.PQ(1500);this.Ux.R(Afy);
this.Ux.Z(true);this.AeI.Aw(A.aaL(A.ach.ARj));K.Ad2.Mz=[this,K.BjS];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad2._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad2._ReInit();},_Mark:function(D){var B;if((B=this.Ad2)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VM={AuX:A.jV,E5:function(){A.Device.VM.E5.call(this);this.AuX=A.jV;},_Init:function(
aArg){A.Device.VM._Init.call(this,aArg);this.__proto__=C.VM;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.ADI.__proto__=C.Wn;C.String.__proto__=C.Wn;C.ABP.__proto__=C.
Wn;C.AGW.__proto__=C.Wn;C.AGU.__proto__=C.Wn;C.PU.__proto__=A.Device.ITable;C.GL.
__proto__=A.Device.ITable;C.AGV.__proto__=C.Wn;C.VM.__proto__=A.Device.VM;};C._ReInit=
function(){var B;if((B=C.Uw._this))B._ReInit(),C.Uw._ReInit.call(B);if((B=C.Amp.
_this))B._ReInit(),C.Amp._ReInit.call(B);if((B=C.Auz._this))B._ReInit(),C.Auz._ReInit.
call(B);if((B=C.Asa._this))B._ReInit(),C.Asa._ReInit.call(B);if((B=C.Ack._this))
B._ReInit(),C.Ack._ReInit.call(B);if((B=C.AuK._this))B._ReInit(),C.AuK._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Uw._this)&&(B._cycle!=D))B._Done(C.Uw._this=
null);if((B=C.Amp._this)&&(B._cycle!=D))B._Done(C.Amp._this=null);if((B=C.Auz._this
)&&(B._cycle!=D))B._Done(C.Auz._this=null);if((B=C.Asa._this)&&(B._cycle!=D))B._Done(
C.Asa._this=null);if((B=C.Ack._this)&&(B._cycle!=D))B._Done(C.Ack._this=null);if((
B=C.AuK._this)&&(B._cycle!=D))B._Done(C.AuK._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */