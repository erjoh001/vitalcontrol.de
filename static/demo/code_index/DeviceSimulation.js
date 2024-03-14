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
var Cd="ERROR: access to null Bool data in column [";var BF="]";var E4="Access to inexistent column index: ";
var Hm=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IQ="Unsupported filter criterion class";var
Ip="Operator not handled:";var O1="1,8";var P1="INFO: Device.StartScan() called.";
var P2="INFO: Device.StopScan() called.";var CQ="V0.";var E$=".";var Lu="\n";var
P3="Temp: ";var JY="Battery: ";var N_="%%";var P4="Selected animal with row index";
var MF="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S5="1,2";var UO="0,1,2";var Z5="3900,3950,4000";var W1="4050,4100,4150";var Iq="Read only";
var UP="Unknown data export type: ";var Z6="Unhandled Device::DataExportType: ";
var W2="0,2,1";var Z7="650,150,700";var W3="800,200,900";var Z8="800,200,850";var
Z9="40000,4000,0";var UQ="32,7,34,18,23,14";var W4="16384";var P5="1,1024";var Z_=
"1,256,1024";var O2="Simulate Scan";var Ri="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var W5="%d.%m.%Y";var W6="1";var W7="2";var W8="Unknown gender: ";var Z$="text/csv";
var W9="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W_="hit-geburt-%d-%m-%Y_%H-%M.csv";var S6="animals-%d-%m-%Y_%H-%M.csv";var UR=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var US="herde-zugang-%d-%m-%Y_%H-%M.csv";var AcL=
"M";var S7="F";var Aaa="?";var Afv="%Y-%m-%d";var Aab="BNR15;LOM;ZUGA_DAT\n";var
W$="Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";
var Aac="ERROR: Cannot start transaction";var Aad="Nested transactions are not allowed.";
var AhO="Transaction not opened.";var JZ="Wrong transaction ID.";var Aae="Unhandled TableId:";
var Lv="Maximum number of rows reached.";var AhP="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var Aob="10";var N$="20";var Xa="30";var Aoc="31";var AhQ="32";var AhR="Severe: filter set when inserting row into table: ";
var AcM="ERROR: Row not found with index [";var UT="] while Rows Count = ";var Aod=
"ERROR: trying to access an inexistent row with Index=";var Aoe="Invalid Device::SyncState";
var Aof="Forwarding to home screen after 500 milliseconds ...";var Aog="Forwarding to home screen canceled...";
var Afw=[0,58,240,208];var Ak$="VitalControl\nstarting up \u2026";
C.Table={GI:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akm],K.GI,0);},
CE:function(Ad,A3){var K=this.K;return K.GI.CE(Ad,A3);},VU:function(Ad,A3){var K=
this.K;return K.GI.VU(Ad,A3);},H1:function(Ad,A3){var K=this.K;return K.GI.H1(Ad
,A3);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GI.OnSetId(
E);},Ca:function(){var K=this.K;return K.GI.Ca();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.GI.Bl(E);},VV:function(Ad,A3){var K=this.K;return K.
GI.VV(Ad,A3);},Sg:function(Ad,A3){var K=this.K;return K.GI.Sg(Ad,A3);},Ox:function(
){var K=this.K;return K.GI.Ox();},Oz:function(AoP){var K=this.K;return K.GI.Oz(AoP
);},YE:function(){var K=this.K;return K.GI.YE();},ZK:function(Ad,A3,C0){var K=this.
K;return K.GI.ZK(Ad,A3,C0);},Hj:function(Ad,A3,C0){var K=this.K;return K.GI.Hj(Ad
,A3,C0);},ZJ:function(Ad,A3,C0){var K=this.K;return K.GI.ZJ(Ad,A3,C0);},MB:function(
Ad,A3,C0){var K=this.K;return K.GI.MB(Ad,A3,C0);},ZI:function(Ad,A3,C0){var K=this.
K;return K.GI.ZI(Ad,A3,C0);},Lc:function(aColumn,A7){var K=this.K;return K.GI.Lc(
aColumn,A7);},KN:function(Ad,A3){var K=this.K;return K.GI.KN(Ad,A3);},SL:function(
Ad,A3,C0){var K=this.K;return K.GI.SL(Ad,A3,C0);},AgO:function(aColumn,A7){var K=
this.K;return K.GI.AgO(aColumn,A7);},Hi:function(){var K=this.K;return K.GI.Hi();
},AjI:function(aColumn,A7){var K=this.K;return K.GI.AjI(aColumn,A7);},Aeh:function(
aColumn,A7){var K=this.K;return K.GI.Aeh(aColumn,A7);},HG:function(){var K=this.
K;return K.GI.HG();},Abr:function(){var K=this.K;return K.GI.Abr();},QE:function(
){var K=this.K;return K.GI.QE();},_Init:function(aArg){var K=this.K;C.GI._Init.call(
K.GI={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GI._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GI._ReInit();},_Mark:function(D){var B;if((B=this.GI)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGk={Tc:A.abi(42,null,null),CE:function(aColumn){var B;this.Aaq(aColumn);var Aq=(
C.ADJ.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;
},VU:function(aColumn){var B;this.Aaq(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return A.jV;},H1:function(aColumn
){var B;this.Aaq(aColumn);var Aq=(C.ABP.isPrototypeOf(B=this.Tc.Get(aColumn))?B:
null);if(!!Aq)return Aq.A4;else A.ab5("%s",(Cd+aColumn.toFixed())+BF);return false;
},Hj:function(aColumn,A7){this.Aaq(aColumn);var Aq=A._NewObject(C.ADJ,0);Aq.A4=A7;
this.Tc.Set(aColumn,Aq);return true;},ZI:function(aColumn,A7){this.Aaq(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},MB:
function(aColumn,A7){this.Aaq(aColumn);var Aq=A._NewObject(C.ABP,0);Aq.A4=A7;this.
Tc.Set(aColumn,Aq);return true;},Aaq:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E4+aColumn.toFixed())+Hm);},Bja:function(AH){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.AJF(this.CE(AH.EJ),AH.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.Bx$(this.
Sg(AH.EJ),AH.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null).
A4);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AH)?AH:null))return this.
Bx_(this.VU(AH.EJ),AH.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AH)?
AH:null).A4);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AH)?AH:null))
return this.Bx9(this.H1(AH.EJ),AH.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJF(this.CE(AH.EJ),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJF(this.CE(AH.EJ),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Byc(this.VV(AH.EJ),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bya(this.KN(AH.EJ),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Byb(this.KN(AH.EJ),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A4,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).Zm&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).OA&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJF(this.CE(AH.EJ),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else throw new Error(IQ);},AJF:function(Fo,Eb,Gx){
switch(Eb){case 0:return Fo===Gx;case 2:return Fo>Gx;case 3:return Fo<Gx;case 4:
return Fo.toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fo!==Gx;default:throw new
Error(Ip+Eb.toFixed());}},Bx_:function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;
case 2:return Fo>Gx;case 3:return Fo<Gx;case 4:{A.ab5("%s%e%s%i",Fo,Eb,Gx,Fo.indexOf(
Gx,0));return Fo.indexOf(Gx,0)>=0;}case 5:return Fo!==Gx;default:throw new Error(
Ip+Eb.toFixed());}},Bx9:function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;case
2:case 3:case 4:return false;case 5:return Fo!==Gx;default:throw new Error(Ip+Eb.
toFixed());}},VV:function(aColumn){var B;this.Aaq(aColumn);var Aq=(C.AGZ.isPrototypeOf(
B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;},ZK:function(aColumn
,A7){this.Aaq(aColumn);var Aq=A._NewObject(C.AGZ,0);Aq.A4=A7;this.Tc.Set(aColumn
,Aq);return true;},Byc:function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;case 2:
return Fo>Gx;case 3:return Fo<Gx;case 4:return Fo.toFixed().indexOf(Gx.toFixed()
,0)>=0;case 5:return Fo!==Gx;default:throw new Error(Ip+Eb.toFixed());}},Sg:function(
aColumn){var B;this.Aaq(aColumn);var Aq=(C.AGX.isPrototypeOf(B=this.Tc.Get(aColumn
))?B:null);if(!!Aq)return Aq.A4;return 0;},ZJ:function(aColumn,A7){this.Aaq(aColumn
);var Aq=A._NewObject(C.AGX,0);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},Bx$:
function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;case 2:return Fo>Gx;case 3:return Fo<
Gx;case 4:return Fo.toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fo!==Gx;default:
throw new Error(Ip+Eb.toFixed());}},KN:function(aColumn){var B;this.Aaq(aColumn);
var Aq=(C.AGY.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;
return 0;},SL:function(aColumn,A7){this.Aaq(aColumn);var Aq=A._NewObject(C.AGY,0
);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},Bya:function(Fo,Eb,Gx){switch(Eb
){case 0:return Fo===Gx;case 2:return Fo>Gx;case 3:return Fo<Gx;case 4:return Fo.
toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fo!==Gx;default:throw new Error(
Ip+Eb.toFixed());}},Byb:function(Fo,Eb,Gx,Atn,AI2){var AKY=Fo.toFixed();AKY=A.ab2(
A.abV(AKY,AKY.length-Atn),AI2);Fo=Math.trunc(Fo/A._GetAutoObject(A.Device.Helper
).ApQ(Atn))%A._GetAutoObject(A.Device.Helper).ApQ(AI2);var ALq=A.ab0(Gx,0,10);switch(
Eb){case 0:return Fo===ALq;case 2:return Fo>ALq;case 3:return Fo<ALq;case 4:return AKY.
indexOf(Gx,0)>=0;case 5:return Fo!==ALq;default:throw new Error(Ip+Eb.toFixed());
}},_Init:function(aArg){(this.Tc=[]).__proto__=C.AGk.Tc;this.__proto__=C.AGk;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tc,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wo={_Init:function(
aArg){this.__proto__=C.Wo;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADJ={A4:0,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=C.ADJ;
},_className:"DeviceSimulation::Int32"};C.String={A4:A.jV,_Init:function(aArg){C.
Wo._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABP={A4:false,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=
C.ABP;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aue:null,AJL:null,Ai0:
null,AaQ:null,CP:function(){var K=this.K;K.A_3.call(this,this);},Init:function(aArg
){var K=this.K;var B;this.Zp(3);A.zX([this,K.BfR],[B=K.Aue,B.A8R,B.ATq],0);this.
UpdateAutoActions(O1);K.A_3.call(this,this);this.Aso(this);this.Asp(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asm(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Any(languageValue);A.pe([this
,K.ATR],this);},Zp:function(E){this.UpdateActiveScreen(E);},Awn:function(E){this.
UpdateBatteryChargeState(E);},AET:function(E){this.UpdateChargeActive(E);},Ar1:function(
E){this.UpdateScanState(E);},AwM:function(E){this.UpdateMeasureState(E);},Aw0:function(
E){this.UpdateTempValue(E);},Any:function(E){this.UpdateLanguage(E);},Aw1:function(
E){this.UpdateTemperatureUnit(E);},AER:function(E){this.UpdateBrightness(E);},AFo:
function(E){this.UpdateMonitoring(E);},Axy:function(){var B;if(A._GetAutoObject(
C.Ux).Axt){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK4(this
);}},AhF:function(){var B;A._GetAutoObject(A.Device.Helper).SO.AnV(this);this.UpdateMeasureState(
0);},AhC:function(){var K=this.K;A.ab5("%s",P1);this.UpdateScanState(1);A.pe([this
,K.BfR],this);},AnW:function(){var K=this.K;var B;A.ab5("%s",P2);K.Ai0.AnV(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah4){},Axs:function(){A.Device.
DeviceClass.Bar.call(this);this.Zp(1);},AGh:function(){A.Device.DeviceClass.Bap.
call(this);this.Zp(2);},Ds:function(E){this.UpdateOverlayMenu(E);},Aw7:function(
E){this.UpdateUnderTemp(E);},Ab9:function(E){this.UpdateSyncState(E);},ACW:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+E$)+A.abz(0,9).toFixed(
))+Lu)+P3)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGM))+Lu)+JY)+A.abz(1,100).toFixed(
))+N_;return aString;},PopupStateChanged:function(J1,Ae){var Agg=A._NewObject(C.
PopupContext,0);Agg.Id=J1;Agg.Gu=Ae;this.AnK.Trigger(Agg,false);},AFQ:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae6:function(E){this.UpdateVibrationOn(
E);},AwW:function(E){this.UpdateRatingMode(E);},AeX:function(E){this.UpdateFlashLightOn(
E);},Un:function(E){this.UpdateTopLightOn(E);},WA:function(E){this.UpdateRGBTopLight(
E);},Awm:function(E){this.UpdateAutoRegistrationMode(E);},Ar2:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OL:function(E){this.UpdateDigitsID(
E);},PN:function(E){this.UpdateOffsetID(E);},AFU:function(E){this.UpdateWeightValue(
E);},AwJ:function(E){this.UpdateMassUnit(E);},ArB:function(E){A.Device.DeviceClass.
Bal.call(this,E);this.UpdateActiveActions(E);},ArC:function(E){A.Device.DeviceClass.
Bam.call(this,E);this.UpdateActiveActionsOrder(E);},Akt:function(E){A.Device.DeviceClass.
Ban.call(this,E);this.UpdateAutoActions(E);},AGI:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBw.call(this,this);},AsD:function(){var K=this.K;var B;K.AaQ.AnV(this);this.
UpdateMeasureState(0);},EB:function(E){this.UpdateAnimalType(E);},Aw8:function(E
){this.UpdateWeightRecordingMode(E);},AFt:function(E){this.UpdatePredictedTempValue(
E);},SK:function(L6){A.ab5("%s%i",P4,L6);},AEZ:function(E){this.UpdateDemoMode(E
);},AEG:function(E){this.UpdateAgeRegistration(E);},Aw9:function(E){this.UpdateWeightRecordingScope(
E);},JP:function(E){this.UpdateGender(E);},ArR:function(E){this.UpdateIDLastUsedMale(
E);},ArQ:function(E){this.UpdateIDLastUsedFemale(E);},Zq:function(E){this.UpdateAnimalListContent(
E);},AEI:function(E){this.UpdateAlarmListAction(E);},AE2:function(E){this.UpdateFlashLightInMeasureState(
E);},AeS:function(E){this.UpdateAnimalInfoContent(E);},AFT:function(E){this.UpdateWatchListAction(
E);},AE4:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArB(15359);this.ArC(MF);},ResetAutoActions:function(G){this.Akt(S5);},Awk:
function(E){this.UpdateAnimalTypesString(E);},Ar4:function(E){this.UpdateTemperaturesHighString(
E);},Ar5:function(E){this.UpdateTemperaturesLowString(E);},Aso:function(G){this.
Awk(UO);this.Ar5(Z5);this.Ar4(W1);this.Aw7(3600);},AwD:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArX:function(E){this.UpdateNaisIdLastUsedMale(E);},ArW:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwQ:function(E){this.UpdateNaisIdIncrementMale(E);},AwP:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bas.call(this);A._GetAutoObject(
A.kR.A$).Cg(53);},Ant:function(E){this.UpdateBootloaderMessage(E);},AED:function(
E){this.UpdateActionListAction(E);},Awi:function(E){this.UpdateActionListHideMeasured(
E);},Uh:function(E){this.UpdateAnimalIdGenerationMethod(E);},Awv:function(E){this.
UpdateDirectionOfCountingFemale(E);},Aww:function(E){this.UpdateDirectionOfCountingMale(
E);},Awx:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArS:function(E){this.
UpdateIDLastUsedUnisex(E);},ArY:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwR:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akv:function(E){this.UpdateEartagNrAssignmentMode(
E);},NY:function(E){this.UpdateBreed(E);},AFm:function(E){throw new Error(Iq);},
AFg:function(E){throw new Error(Iq);},AFN:function(E){throw new Error(Iq);},AEN:
function(E){throw new Error(Iq);},AE0:function(E){this.UpdateDryCowListAction(E);
},AJC:function(A0A){var Qr;switch(A0A){case 15:Qr=false;break;default:Qr=true;}return Qr;
},AEM:function(E){this.UpdateBirthListView(E);},AFO:function(E){this.UpdateTransferProgress(
E);},Ar6:function(E){this.UpdateTransferTarget(E);},AsC:function(){var B;A.pe([B=
A._GetAutoObject(C.Acp),B.BfV],this);},AwV:function(E){this.UpdatePremisesID(E);
},AwO:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE5:function(E){
this.UpdateFreshCowSpan(E);},AFP:function(E){this.UpdateUSBState(E);},AnS:function(
AhZ){var K=this.K;var result=A._NewObject(C.AjD,0);result.ACk=AhZ;result.FileName=
K.Biw.call(this,AhZ);switch(AhZ){case 0:K.Bym.call(this,result);break;case 1:K.Byi.
call(this,result);break;case 2:K.Byn.call(this,result);break;case 3:K.Byl.call(this
,result);break;default:throw new Error(UP+AhZ.toFixed());}K.AJL=result;return result;
},Are:function(){return true;},AqB:function(Np){var K=this.K;switch(Np.ACk){case
0:A._GetAutoObject(A.Device.Device).A9(72,true,A.jV,0,[this,K.A2X]);break;case 1:
A._GetAutoObject(A.Device.Device).A9(90,true,A.jV,0,[this,K.A2X]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A9(99,true,A.jV,0,[this,K.A2X]);break;default:
throw new Error(Z6+Np.ACk.toFixed());}},AFA:function(E){throw new Error(Iq);},Awj:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFC:function(E){this.UpdateShutdownTimer(
E);},Asp:function(G){this.Awl(W2);this.Ar_(Z7);this.Ar9(W3);this.Ar8(Z8);this.Ar$(
Z9);},Ar9:function(E){this.UpdateWeightGainsHighString(E);},Ar_:function(E){this.
UpdateWeightGainsLowString(E);},Awl:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar8:function(E){this.UpdateWeightGainsAverageString(E);},Ar$:function(E){this.
UpdateWeightValueBirthString(E);},Awy:function(E){this.UpdateEvaluationAnimalType(
E);},AwZ:function(E){this.UpdateStartScreen(E);},ADN:function(){return 1;},ADO:function(
){return 1;},AFl:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw5:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AEY:function(E){this.UpdateDataExportDestination(
E);},Nf:function(E){this.UpdateWhereAbouts(E);},ArE:function(E){this.UpdateActiveMassRecordingFields(
E);},ArF:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},Asm:function(
G){this.ArE(A.jV);this.ArF(UQ);},AFj:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},Ajy:function(){A._GetAutoObject(C.Acp).AEL(true);return true;},Aqn:function(
){var B;A._GetAutoObject(C.Acp).Aqn(this);return true;},Aqm:function(){var B;A.pe([
B=A._GetAutoObject(C.Acp),B.Aqm],this);return true;},AuK:function(){var B;A.pe([
B=A._GetAutoObject(C.Acp),B.Bg0],this);return true;},AwL:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwS:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwS(W4);},AwT:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwT(P5);},Aw$:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Aw$(Z_);},Aw6:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},BBf:function(G){switch(this.KH){case 34:case 35:case 32:case 45:case 49:case 55:
case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},BfR:function(G){var K=this.K;var
B;if((this.ScanState===1)&&K.Aue.AGD)K.Ai0.AnT(this);A.ab5("%s",O2);},BBw:function(
G){var K=this.K;var B;if((this.MeasureState===1)&&K.Aue.Axt)K.AaQ.AnT(this);},BCc:
function(G){this.UpdateMeasureState(3);},ATR:function(G){var K=this.K;var B;A.zX([
B=A._GetAutoObject(A.Device.Helper),B.AK4],[B=K.Aue,B.A8S,B.ATr],0);this.RW.AEX(
A._GetAutoObject(A.Device.Helper).A6A(8));this.Sv.AEX(A._GetAutoObject(A.Device.
Helper).A6A(8));},A_3:function(G){var AzF=A._NewObject(A.Device.Axx,0);AzF.OnSetTimestamp(
1710328383);AzF.AFh(1);AzF.AFn(0);AzF.AFw(0);this.Sv=AzF;var Ay_=A._NewObject(A.
Device.Axx,0);Ay_.OnSetTimestamp(1710328383);Ay_.AFh(1);Ay_.AFn(0);Ay_.AFw(4);this.
RW=Ay_;var AlQ=A._NewObject(A.Device.Avn,0);AlQ.AFe(1);AlQ.AFf(0);AlQ.AFd(0);AlQ.
AFL(1);AlQ.AFM(0);AlQ.AFK(0);AlQ.OnSetTimestamp(1710328383);this.QV=AlQ;var Amg=
A._NewObject(A.Device.Avn,0);Amg.AFe(1);Amg.AFf(0);Amg.AFd(0);Amg.AFL(1);Amg.AFM(
0);Amg.AFK(0);Amg.OnSetTimestamp(1710328383);this.SU=Amg;this.AhB=A.aaR(A.acf.Unknown
);},ByI:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},Bym:function(Np){var K=this.K;var B;var Tb=
Ri;var B$=A._NewObject(A.Device.Animal,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(
A.Device.Device).Am.Ca();O++){B$.EM(O,A._GetAutoObject(A.Device.Device).Am);if(B$.
IsRegistrationNoticePending&&(B$.NaisId>0)){Tb=Tb+(((((((((((((((((K.Aix.call(this
,A._GetAutoObject(A.Device.Device).Ut)+String.fromCharCode(0x3B))+K.Aix.call(this
,B$.NaisId))+String.fromCharCode(0x3B))+K.AJ6.call(this,B$.DateOfBirth))+String.
fromCharCode(0x3B))+K.BcO.call(this,B$.Breed))+String.fromCharCode(0x3B))+K.BcN.
call(this,B$.Gender))+String.fromCharCode(0x3B))+K.ByN.call(this,B$.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcP.call(this,B$.WhereAbouts))+String.fromCharCode(
0x3B))+K.ByQ.call(this,B$.BirthType))+String.fromCharCode(0x3B))+K.Aix.call(this
,B$.NaisIdMother))+Lu);AdC++;}}Np.Au0=Tb;Np.AGl=AdC;Np.AnX=true;},Aix:function(Rm
){if(!Rm)return A.jV;return Rm.toFixed();},AJ6:function(AyP){var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(AyP);return Au.Format(W5);},BcO:function(AcW){if(!AcW
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5a(AcW).toFixed();},BcN:
function(L3){var result=A.jV;switch(L3){case 0:result=W6;break;case 1:result=W7;
break;case 2:result=A.jV;break;default:A.ab5("%s",W8+L3.toFixed());}return result;
},ByN:function(AI3){if(!AI3)return A.jV;return AI3.toFixed();},BcP:function(AfH){
if(!AfH)return A.jV;return AfH.toFixed();},ByQ:function(Atg){return(Atg+1).toFixed(
);},A2X:function(G){var K=this.K;var At=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!At&&(At.PopupState===7))K.ByI.call(this,K.AJL.FileName,Z$,K.AJL.Au0
);},Byi:function(Np){var K=this.K;var B;var Tb=W9;var B$=A._NewObject(A.Device.Animal
,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.Ca();O++){var
Ay6=A.jV;if(B$.Ard())Ay6=K.ByS.call(this,B$.FirstBodyWeight);B$.EM(O,A._GetAutoObject(
A.Device.Device).Am);Tb=Tb+(((((((((((K.Aix.call(this,B$.NaisId)+String.fromCharCode(
0x3B))+K.ByO.call(this,B$.VisualId))+String.fromCharCode(0x3B))+K.Aix.call(this,
B$.TransponderId))+String.fromCharCode(0x3B))+K.ByM.call(this,B$.DateOfBirth))+String.
fromCharCode(0x3B))+K.ByR.call(this,B$.Gender))+String.fromCharCode(0x3B))+Ay6)+
Lu);AdC++;}Np.Au0=Tb;Np.AGl=AdC;Np.AnX=true;},Biw:function(AhZ){var AzE=A.jV;var
Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dv(
));switch(AhZ){case 0:AzE=Ac.Format(W_);break;case 1:AzE=Ac.Format(S6);break;case
2:AzE=Ac.Format(UR);break;case 3:AzE=Ac.Format(US);break;default:throw new Error(
UP+AhZ.toFixed());}return AzE;},ByO:function(Rm){return Rm.toFixed();},ByR:function(
L3){var result=A.jV;switch(L3){case 0:result=AcL;break;case 1:result=S7;break;case
2:result=Aaa;break;default:A.ab5("%s",W8+L3.toFixed());}return result;},ByS:function(
MK){if(MK<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak8(MK);},ByM:
function(AyP){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyP);return Au.Format(
Afv);},Byn:function(Np){var K=this.K;var B;var Tb=Aab;var B$=A._NewObject(A.Device.
Animal,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.Ca();O++
){B$.EM(O,A._GetAutoObject(A.Device.Device).Am);if(B$.IsRegistrationNoticePending&&(
B$.NaisId>0)){Tb=Tb+(((((K.Aix.call(this,A._GetAutoObject(A.Device.Device).Ut)+String.
fromCharCode(0x3B))+K.Aix.call(this,B$.NaisId))+String.fromCharCode(0x3B))+K.AJ6.
call(this,A._GetAutoObject(A.Device.Helper).Dv()))+Lu);AdC++;}}Np.Au0=Tb;Np.AGl=
AdC;Np.AnX=true;},Byl:function(Np){var K=this.K;var B;var Tb=W$;var B$=A._NewObject(
A.Device.Animal,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.
Ca();O++){B$.EM(O,A._GetAutoObject(A.Device.Device).Am);if(B$.IsRegistrationNoticePending&&(
B$.NaisId>0)){Tb=Tb+(((((((((((((K.Aix.call(this,B$.NaisId)+String.fromCharCode(
0x3B))+K.AJ6.call(this,B$.DateOfBirth))+String.fromCharCode(0x3B))+K.BcN.call(this
,B$.Gender))+String.fromCharCode(0x3B))+K.BcP.call(this,B$.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcO.call(this,B$.Breed))+String.fromCharCode(0x3B))+K.AJ6.
call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(0x3B))+K.
Aix.call(this,B$.TransponderId))+Lu);AdC++;}}Np.Au0=Tb;Np.AGl=AdC;Np.AnX=true;},
_Init:function(aArg){var K=this.K;A.acl.Gh._Init.call(K.Ai0={I:this},0);A.acl.Gh.
_Init.call(K.AaQ={I:this},0);K.__proto__=C.DeviceClass;this.Awn(100);this.Any(1);
this.ArR(200);this.ArQ(100);this.ArX(276000912345678);this.ArW(276000923456789);
this.ArS(500);this.ArY(276000901234567);this.NY(1);K.Ai0.HM(1);K.Ai0.Fl(1000);K.
AaQ.WC(0);K.AaQ.HM(1);K.AaQ.Fl(750);K.AaQ.B2=50000;K.Ai0.Sw=[this,K.BBf];K.Aue=A.
_GetAutoObject(C.Ux);K.AaQ.Sw=[this,K.BCc];K.AaQ.Q=[this,this.AEA,this.AIR];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ai0._Done(
);K.AaQ._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Ai0._ReInit();K.AaQ._ReInit(
);K.CP.call(this);},_Mark:function(D){var B;if((B=this.Aue)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AJL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGZ={A4:0,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=C.AGZ;
},_className:"DeviceSimulation::UInt8"};C.AGX={A4:0,_Init:function(aArg){C.Wo._Init.
call(this,aArg);this.__proto__=C.AGX;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A34:0,AFD:function(E){var K=this.K;K.A34=K.A34+(E-this.Dv());A.Device.
HelperClass.Bao.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Bak.call(this)+K.A34;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A_9={Axt:false,AGD:false,ATq:function(E){if(this.AGD===E)return;this.AGD=E;A.
abo([this,this.A8R,this.ATq],0);},A8R:function(){return this.AGD;},ATr:function(
E){if(this.Axt===E)return;this.Axt=E;A.abo([this,this.A8S,this.ATr],0);},A8S:function(
){return this.Axt;},_Init:function(aArg){this.__proto__=C.A_9;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Ux={_Init:function(){C.A_9._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Ux._variants();
},_this:null};C.PopupContext={Gu:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cq:function(
AI){var HA=A.Device.Rating.Baq.call(this,AI);if(HA){var Rt=A._GetAutoObject(A.Device.
Device).Am;var Ad=A._GetAutoObject(A.Device.Device).Am.Lc(0,this.AnimalId);if(Ad
!==-1){var Jk=Rt.Ox();if(Jk<=0)A.ab5("%s",Aac);else{var B$=A._NewObject(A.Device.
Animal,0);B$.EM(Ad,Rt);if((this.Temperature>0)&&(B$.TimestampLastTemperature<this.
Timestamp)){Rt.A_2(Ad,5,this.Temperature);Rt.AkQ(Ad,17,this.RatingTemperature);Rt.
Acm(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(B$.TimestampLastWeighing<=this.
Timestamp){Rt.AUt(Ad,18,this.BodyWeight);Rt.Acm(Ad,19,this.Timestamp);}if(!B$.TimestampFirstWeighing||(
B$.TimestampFirstWeighing>=this.Timestamp)){Rt.AUt(Ad,23,this.BodyWeight);Rt.Acm(
Ad,24,this.Timestamp);Rt.Hj(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGa(this)){var LQ=A._GetAutoObject(A.Device.Helper).AC0(this);Rt.AkQ(Ad,13,LQ);
Rt.Acm(Ad,31,this.Timestamp);}Rt.Oz(Jk);}}}return HA;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PQ={Gd:A.abi(512,null,null),Pe:0,AJr:
0,ALb:0,A37:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKJ:0,A3A:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BdG:512,Az7:-1,A0_:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AKh:false,CE:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.
CE(A3);return 0;},VU:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.VU(A3);
return A.jV;},H1:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.H1(A3);return false;
},VV:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.VV(A3);return 0;},Sg:function(
Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.Sg(A3);return 0;},Ox:function(){if(this.
AKh)throw new Error(Aad);this.AKh=true;return 12345;},Oz:function(AoP){if(!this.
AKh)throw new Error(AhO);if(AoP!==12345)throw new Error(JZ);this.AKh=false;return true;
},YE:function(){return this.A4A(A._NewObject(C.AGk,0));},ZK:function(Ad,A3,C0){var
Bf=this.TQ(Ad);if(!!Bf)return Bf.ZK(A3,C0);return false;},Hj:function(Ad,A3,C0){
var Bf=this.TQ(Ad);if(!!Bf)return Bf.Hj(A3,C0);return false;},ZJ:function(Ad,A3,
C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.ZJ(A3,C0);return false;},MB:function(Ad
,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.MB(A3,C0);return false;},ZI:function(
Ad,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.ZI(A3,C0);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bcn();switch(this.Id){case 0:{this.
BdG=256;A.pe([this,this.Bwa],this);}break;case 1:A.pe([this,this.Bwc],this);break;
case 3:A.pe([this,this.Bv$],this);break;case 4:A.pe([this,this.Bwb],this);break;
case 2:break;default:throw new Error(Aae+this.Id.toFixed());}},Ca:function(){return this.
Pe;},KN:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.KN(A3);return 0;},SL:
function(Ad,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.SL(A3,C0);return false;}
,Hi:function(){this.Bcn();return true;},HG:function(){return this.BdG;},A4A:function(
Ad){if(this.Pe>=512)throw new Error(Lv);this.Gd.Set(this.Pe,Ad);this.Pe=this.Pe+
1;switch(this.Id){case 0:{this.Az7=this.Pe;this.Hj(this.Pe-1,0,this.Az7);}break;
case 1:{this.Az7=this.Pe-1;this.Hj(this.Pe-1,0,this.Az7);}break;default:;}A.pe([
this,this.Akm],this);return this.Pe-1;},TQ:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gd.Get(aIndex);},Bcn:function(){var O;for(O=0;O<512;
O=O+1)this.Gd.Set(O,null);this.Pe=0;this.AJr=0;this.AKJ=0;this.ALb=0;A.pe([this,
this.Akm],this);},AKc:function(){this.AJr=(this.AJr+1)%15;return this.A0_.Get(this.
AJr);},A1Y:function(){this.ALb=(this.ALb+1)%10;return this.A37.Get(this.ALb);},AJZ:
function(G){if(this.K&&this.K.AJZ)return this.K.AJZ.apply(this,arguments);else return C.
PQ.Bwi.apply(this,arguments);},Bwi:function(G){var B;var Oh=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhH(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhH(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhH(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhH(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhH(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhH(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhH(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhH(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var Bf3=0;for(O=
1;O<=7;O=O+1){Bf3=3680+(20*O);Oh=Bf3>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhH(7-O),0,1,Oh,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bwa:function(s){this.AJZ(s);},AJ1:
function(G){if(this.K&&this.K.AJ1)return this.K.AJ1.apply(this,arguments);else return C.
PQ.Bwk.apply(this,arguments);},Bwk:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var Aiw;var BcF;for(O=0;O<32;O=O+1){var A1J=this.
By4();for(;A1J>0;A1J=A1J-1){Aiw=this.A1Y();BcF=A._GetAutoObject(A.Device.Converter
).AsE(0,Aiw);this.AG(Ac,12310020,Aiw,BcF,this.AKc(),this.AKc(),this.AKc(),this.AKc(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aiw=this.A1Y();this.AG(Ac,276000312310001,Aiw,A._GetAutoObject(A.Device.Converter
).AsE(0,Aiw),1,3,3,3,0);Aiw=this.A1Y();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsE(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aiw,A._GetAutoObject(
A.Device.Converter).AsE(1,Aiw),2,3,3,3,0);},Bwc:function(s){this.AJ1(s);},A0:function(
J1,BwJ,Bw0,Bbu,Atg,L3,BwR,BwW,BwT,BwU,MK,Bwu,BwY,BwS,Em,BwV,AcW,AI3,AfH,Bw5,Bzl,
Bzm,Bwz,Bw7){var B$=A._NewObject(A.Device.Animal,0);B$.Gm();B$.Aw_(0);B$.Ae3(0);
B$.Ul(false);B$.AkA(false);if(Bzm)B$.Q2(J1);if(Bzl)B$.Nd(J1);B$.SB(A._GetAutoObject(
A.Device.Helper).Se(J1,Bw7&0xFF,Bwz&0xFF)|0);B$.Ab4(BwJ);B$.Anz(Bw0);B$.Q0(Bbu);
B$.Aku(Atg);B$.JP(L3);B$.AnQ(BwR);B$.AGw(BwW);B$.Ahj(BwU);B$.Ul(BwT);B$.ArT(BwS);
B$.AwH(BwY);B$.Aws(Bwu);B$.EB(Em);B$.Ae0(BwV);B$.NY(AcW);B$.Akw(AI3);B$.Nf(AfH);
B$.AnB(Bw5);B$.Cq(this);if(MK>0)A._GetAutoObject(C.Asg).AG(Bbu,J1,0,0,0,0,0,0,MK
);},AG:function(L2,AcU,AoN,Bxf,BwD,BwE,Bwm,Bxh,Bwo){var B1=A._NewObject(A.Device.
Rating,0);B1.Gm();var Bb8=A._GetAutoObject(C.Ams).AOw(26,AcU);if(Bb8>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Ams).CE(Bb8,0));else A.ab5("%s%U",AhP,AcU);B1.OnSetTimestamp(
L2);B1.OnSetTemperature(AoN);B1.OnSetRatingTemperature(Bxf);B1.OnSetFaeces(BwD);
B1.OnSetFeed(BwE);B1.OnSetAppearance(Bwm);B1.OnSetRespiratory(Bxh);B1.OnSetBodyWeight(
Bwo);B1.Cq(this);},A6c:function(aColumn,A7){var O;for(O=0;O<this.Pe;O=O+1)if(this.
Gd.Get(O).CE(aColumn)===A7)return O;return-1;},By4:function(){this.AKJ=(this.AKJ+
1)%10;return this.A3A.Get(this.AKJ);},AJY:function(G){if(this.K&&this.K.AJY)return this.
K.AJY.apply(this,arguments);else return C.PQ.Bwh.apply(this,arguments);},Bwh:function(
G){this.AlK(10,Aob);this.AlK(20,N$);this.AlK(30,Xa);this.AlK(31,Aoc);this.AlK(32
,AhQ);},Bv$:function(s){this.AJY(s);},AlK:function(J1,BwK){var AJk=A._NewObject(
A.Device.AnimalGroup,0);AJk.Gm();AJk.OnSetId(J1);AJk.AE7(BwK);AJk.Cq(this);},Abr:
function(){return this.Az7;},AOw:function(aColumn,A7){var O;for(O=0;O<this.Pe;O=
O+1)if(this.Gd.Get(O).KN(aColumn)===A7)return O;return-1;},AJ0:function(G){if(this.
K&&this.K.AJ0)return this.K.AJ0.apply(this,arguments);else return C.PQ.Bwj.apply(
this,arguments);},Bwj:function(G){this.AaA(2016,216,6);this.AaA(2017,217,7);this.
AaA(2018,218,8);this.AaA(2019,219,9);this.AaA(2020,220,10);this.AaA(2021,221,11);
},Bwb:function(s){this.AJ0(s);},AaA:function(Ac2,Bwy,Bwx){var U5=A._NewObject(A.
Device.CalfDeregistrations,0);U5.Gm();U5.AkF(Ac2);U5.Awu(Bwy);U5.Awt(Bwx);U5.Cq(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gd=[]).
__proto__=C.PQ.Gd;(this.A37=[]).__proto__=C.PQ.A37;(this.A3A=[]).__proto__=C.PQ.
A3A;(this.A0_=[]).__proto__=C.PQ.A0_;this.__proto__=C.PQ;var Lw=this._variants();
if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Gd,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.PQ._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Ams={_Init:function(){C.PQ._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AuC={_Init:function(){C.PQ._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.Asg={_Init:
function(){C.PQ._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GI={AlE:A.abi(512,null,null),Gq:null,Apf:
0,CE:function(Ad,A3){var Bf=this.Aay(Ad);if(!!Bf)return Bf.CE(A3);return 0;},VU:
function(Ad,A3){var Bf=this.Aay(Ad);if(!!Bf)return Bf.VU(A3);return A.jV;},H1:function(
Ad,A3){var Bf=this.Aay(Ad);if(!!Bf)return Bf.H1(A3);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AFW(A._GetAutoObject(
C.Ams));break;case 1:this.AFW(A._GetAutoObject(C.Asg));break;case 3:this.AFW(A._GetAutoObject(
C.AuC));break;case 4:this.AFW(A._GetAutoObject(C.AuN));break;case 2:break;default:
throw new Error(Aae+this.Id.toFixed());}},Ca:function(){if(!!this.Filter)return this.
Apf;else if(!!this.Gq)return this.Gq.Pe;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.A08(this);},VV:function(Ad,A3){var Bf=this.Aay(Ad);if(!!Bf)
return Bf.VV(A3);return 0;},Sg:function(Ad,A3){var Bf=this.Aay(Ad);if(!!Bf)return Bf.
Sg(A3);return 0;},Ox:function(){if(!!this.Gq)return this.Gq.Ox();return-1;},Oz:function(
AoP){var HA=false;if(!!this.Gq)HA=this.Gq.Oz(AoP);if(HA)A.pe([this,this.A08],this
);return HA;},YE:function(){if(!!this.Filter)throw new Error(AhR+A._GetAutoObject(
A.Device.Converter).Bib(this.Id,this.Filter));if(!!this.Gq)return this.Gq.A4A(A.
_NewObject(C.AGk,0));return-1;},ZK:function(Ad,A3,C0){var Bf=this.Aay(Ad);if(!!Bf
)return Bf.ZK(A3,C0);return false;},Hj:function(Ad,A3,C0){var Bf=this.Aay(Ad);if(
!!Bf)return Bf.Hj(A3,C0);return false;},ZJ:function(Ad,A3,C0){var Bf=this.Aay(Ad
);if(!!Bf)return Bf.ZJ(A3,C0);return false;},MB:function(Ad,A3,C0){var Bf=this.Aay(
Ad);if(!!Bf)return Bf.MB(A3,C0);return false;},ZI:function(Ad,A3,C0){var Bf=this.
Aay(Ad);if(!!Bf)return Bf.ZI(A3,C0);return false;},Lc:function(aColumn,A7){if(!!
this.Filter){var O;for(O=0;O<this.Apf;O=O+1)if(this.AlE.Get(O).CE(aColumn)===A7)
return O;return-1;}else if(!!this.Gq)return this.Gq.A6c(aColumn,A7);return-1;},KN:
function(Ad,A3){var Bf=this.Aay(Ad);if(!!Bf)return Bf.KN(A3);return 0;},SL:function(
Ad,A3,C0){var Bf=this.Aay(Ad);if(!!Bf)return Bf.SL(A3,C0);return false;},AgO:function(
aColumn,A7){if(!!this.Filter){var O;for(O=0;O<this.Apf;O=O+1)if(this.AlE.Get(O).
KN(aColumn)===A7)return O;return-1;}else if(!!this.Gq)return this.Gq.AOw(aColumn
,A7);return-1;},Hi:function(){if(!!this.Gq)return this.Gq.Hi();return false;},AjI:
function(aColumn,A7){if(!!this.Gq)return this.Gq.A6c(aColumn,A7)>=0;return false;
},Aeh:function(aColumn,A7){if(!!this.Gq)return this.Gq.AOw(aColumn,A7)>=0;return false;
},HG:function(){if(!!this.Gq)return this.Gq.HG();return 0;},Abr:function(){if(!!
this.Gq)return this.Gq.Abr();return-1;},QE:function(){if(!!this.Gq)return this.Gq.
Pe;return 0;},A08:function(G){this.A1k();if(!!this.Filter&&!!this.Gq){var O;for(
O=0;O<this.Gq.Ca();O=O+1){var A1N=true;var Av=this.Filter.AOJ();var Bf=this.Gq.TQ(
O);if(!!Bf)while(A1N&&!!Av){A1N=Bf.Bja(Av);Av=this.Filter.AOO(Av);}else A.ab5("%s"
,((AcM+O.toFixed())+UT)+this.Gq.Ca().toFixed());if(A1N){this.AlE.Set(this.Apf,this.
Gq.Gd.Get(O));this.Apf=this.Apf+1;}}}A.pe([this,this.Akm],this);},A1k:function(){
var O;for(O=0;O<512;O=O+1)this.AlE.Set(O,null);this.Apf=0;},AFW:function(E){if(this.
Gq===E)return;if(!!this.Gq)A.z9([this,this.A35],this.Gq,0);this.Gq=E;if(!!this.Gq
){A.zV([this,this.A35],this.Gq,0);A.pe([this,this.A35],this);}},A35:function(G){
A.pe([this,this.A08],this);},Aay:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlE.Get(aIndex);}else if(!!this.Gq
)return this.Gq.TQ(aIndex);A.ab5("%s",Aod+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlE=[]).__proto__=C.GI.
AlE;this.__proto__=C.GI;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlE,D);if((B=this.Gq)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A__={KF:null,AdE:null,Ov:null,AMO:false,AMP:
true,A3Z:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab9(1);this.AdE.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab9(2);A._GetAutoObject(A.Device.Device).Ar6(A._GetAutoObject(A.
Device.Device).Am.QE());this.KF.Fl(A._GetAutoObject(A.Device.Device).Afl*50);this.
KF.B2=A._GetAutoObject(A.Device.Device).Afl;this.KF.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab9(3);this.AdE.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab9(4);A._GetAutoObject(A.Device.Device).Ar6(A._GetAutoObject(A.Device.Device
).Am.QE());this.KF.Fl(A._GetAutoObject(A.Device.Device).Afl*50);this.KF.B2=A._GetAutoObject(
A.Device.Device).Afl;this.KF.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab9(5);this.AdE.Ar(true);}break;case 5:A.pe([this,this.BfV],this);break;case 7:
case 6:break;default:A.ab5("%s%e",Aoe,A._GetAutoObject(A.Device.Device).SyncState
);}},BAz:function(G){this.AdE.Ar(false);A.pe([this,this.A3Z],this);},BBE:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab9(0);A.pe([this,this.A3Z],this);}break;default:;}},BfV:function(
G){this.AdE.Ar(false);this.KF.Ar(false);A._GetAutoObject(A.Device.Device).Ab9(0);
},AEL:function(E){if(this.AMP===E)return;this.AMP=E;A.abo([this,this.Bj_,this.AEL
],0);},Bj_:function(){return this.AMP;},Aqm:function(G){var B;this.Ov.Cw=true;this.
Ov.B2=false;this.Ov.Fl(100);this.Ov.HM(1);this.Ov.Q=[this,this.ASh,this.ASQ];A.pe([
B=this.Ov,B.AnT],this);},Bg0:function(G){var B;this.Ov.Cw=true;this.Ov.B2=false;
this.Ov.Fl(400);this.Ov.Uk(200);this.Ov.HM(3);this.Ov.Q=[this,this.ASh,this.ASQ];
this.AEL(false);A.pe([B=this.Ov,B.AnT],this);},ASQ:function(E){if(this.AMO===E)return;
this.AMO=E;A.abo([this,this.ASh,this.ASQ],0);},ASh:function(){return this.AMO;},
Aqn:function(G){var B;this.Ov.AnV(this);this.AEL(false);},_Init:function(aArg){A.
acl.Gh._Init.call(this.KF={I:this},0);A.Core.Timer._Init.call(this.AdE={I:this},
0);A.acl.TE._Init.call(this.Ov={I:this},0);this.__proto__=C.A__;var B;this.KF.HM(
1);this.AdE.PO(2000);this.KF.Sw=[this,this.A3Z];this.KF.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASH,B.A0a];this.AdE.Mx=[this,this.BAz];A.h7++;},_Done:function(
){this.__proto__=null;this.KF._Done();this.AdE._Done();this.Ov._Done();A.h7--;},
_ReInit:function(){this.KF._ReInit();this.AdE._ReInit();this.Ov._ReInit();},_Mark:
function(D){var B;if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acp={_Init:function(){C.A__._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AGY={A4:0,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=C.AGY;}
,_className:"DeviceSimulation::UInt64"};C.AuN={_Init:function(){C.PQ._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Dn:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Cc.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X0={Ad3:null,CF:function(G){var K=this.K;A.ab5("%s",Aof);K.Ad3.Ar(true);},E3:
function(G){var K=this.K;if(K.Ad3.Bw===true){K.Ad3.Ar(false);A.ab5("%s",Aog);}},
Bj2:function(G){var K=this.K;K.Ad3.Ar(false);A._GetAutoObject(A.kR.A$).Ahn(A._GetAutoObject(
A.Device.Device).Axz);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad3={I:this},0);K.__proto__=C.X0;this.AeI.H(Afw);K.Ad3.PO(1500);this.Uy.R(Ak$);
this.Uy.Z(true);this.AeI.Aw(A.aaL(A.ach.ARr));K.Ad3.Mx=[this,K.Bj2];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad3._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad3._ReInit();},_Mark:function(D){var B;if((B=this.Ad3)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AjD={Au0:A.jV,_Init:function(aArg){A.Device.AjD._Init.call(this,aArg);this.__proto__=
C.AjD;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ADJ.__proto__=C.Wo;C.String.__proto__=C.Wo;C.ABP.__proto__=C.
Wo;C.AGZ.__proto__=C.Wo;C.AGX.__proto__=C.Wo;C.PQ.__proto__=A.Device.ITable;C.GI.
__proto__=A.Device.ITable;C.AGY.__proto__=C.Wo;C.AjD.__proto__=A.Device.AjD;};C.
_ReInit=function(){var B;if((B=C.Ux._this))B._ReInit(),C.Ux._ReInit.call(B);if((
B=C.Ams._this))B._ReInit(),C.Ams._ReInit.call(B);if((B=C.AuC._this))B._ReInit(),
C.AuC._ReInit.call(B);if((B=C.Asg._this))B._ReInit(),C.Asg._ReInit.call(B);if((B=
C.Acp._this))B._ReInit(),C.Acp._ReInit.call(B);if((B=C.AuN._this))B._ReInit(),C.
AuN._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ux._this)&&(B._cycle!=D))B.
_Done(C.Ux._this=null);if((B=C.Ams._this)&&(B._cycle!=D))B._Done(C.Ams._this=null
);if((B=C.AuC._this)&&(B._cycle!=D))B._Done(C.AuC._this=null);if((B=C.Asg._this)&&(
B._cycle!=D))B._Done(C.Asg._this=null);if((B=C.Acp._this)&&(B._cycle!=D))B._Done(
C.Acp._this=null);if((B=C.AuN._this)&&(B._cycle!=D))B._Done(C.AuN._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */