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
var Cc="ERROR: access to null Bool data in column [";var BD="]";var E7="Access to inexistent column index: ";
var Hq=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IU="Unsupported filter criterion class";var
Is="Operator not handled:";var O2="1,8";var P7="INFO: Device.StartScan() called.";
var P8="INFO: Device.StopScan() called.";var CQ="V0.";var Ff=".";var L1="\n";var
P9="Temp: ";var J2="Battery: ";var N$="%%";var P_="Selected animal with row index";
var MH="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S8="1,2";var UQ="0,1,2";var Z1="3900,3950,4000";var W1="4050,4100,4150";var It="Read only";
var UR="Unknown data export type: ";var Z2="Unhandled Device::DataExportType: ";
var W2="0,2,1";var Z3="650,150,700";var W3="800,200,900";var Z4="800,200,850";var
Z5="40000,4000,0";var US="32,7,34,18,23,14";var W4="16384";var O3="1,1024";var Z6=
"Simulate Scan";var O4="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rl="%d.%m.%Y";var W5="1";var W6="2";var UT="Unknown gender: ";var Z7="text/csv";
var Z8="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W7="hit-geburt-%d-%m-%Y_%H-%M.csv";var W8="animals-%d-%m-%Y_%H-%M.csv";var S9=
"zugang-%d-%m-%Y_%H-%M.csv";var UU="M";var UV="F";var AcK="?";var S_="%Y-%m-%d";
var Z9="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var Afz="ERROR: Cannot start transaction";
var Z_="Nested transactions are not allowed.";var W9="Transaction not opened.";var
Z$="Wrong transaction ID.";var W_="Unhandled TableId:";var AhT="Maximum number of rows reached.";
var KY="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcL=
"10";var Lv="20";var AhU="30";var Aob="31";var Oa="32";var W$="Severe: filter set when inserting row into table: ";
var Aaa="Warning: DeviceSimulation::TableData not in transaction";var AhV="ERROR: Row not found with index [";
var AhW="] while Rows Count = ";var AcM="ERROR: trying to access an inexistent row with Index=";
var UW="Invalid Device::SyncState";var Aoc="Forwarding to home screen after 500 milliseconds ...";
var Aod="Forwarding to home screen canceled...";var Aoe=[0,58,240,208];var Aof="VitalControl\nstarting up \u2026";
C.Table={GM:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akl],K.GM,0);},
CF:function(Ad,A4){var K=this.K;return K.GM.CF(Ad,A4);},VY:function(Ad,A4){var K=
this.K;return K.GM.VY(Ad,A4);},H2:function(Ad,A4){var K=this.K;return K.GM.H2(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GM.OnSetId(
E);},B9:function(){var K=this.K;return K.GM.B9();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GM.Bk(E);},VZ:function(Ad,A4){var K=this.K;return K.
GM.VZ(Ad,A4);},Sj:function(Ad,A4){var K=this.K;return K.GM.Sj(Ad,A4);},Oy:function(
){var K=this.K;return K.GM.Oy();},OA:function(AoO){var K=this.K;return K.GM.OA(AoO
);},YB:function(){var K=this.K;return K.GM.YB();},ZH:function(Ad,A4,CZ){var K=this.
K;return K.GM.ZH(Ad,A4,CZ);},Hn:function(Ad,A4,CZ){var K=this.K;return K.GM.Hn(Ad
,A4,CZ);},ZG:function(Ad,A4,CZ){var K=this.K;return K.GM.ZG(Ad,A4,CZ);},N5:function(
Ad,A4,CZ){var K=this.K;return K.GM.N5(Ad,A4,CZ);},ZF:function(Ad,A4,CZ){var K=this.
K;return K.GM.ZF(Ad,A4,CZ);},LS:function(aColumn,A_){var K=this.K;return K.GM.LS(
aColumn,A_);},KN:function(Ad,A4){var K=this.K;return K.GM.KN(Ad,A4);},Uy:function(
Ad,A4,CZ){var K=this.K;return K.GM.Uy(Ad,A4,CZ);},AgV:function(aColumn,A_){var K=
this.K;return K.GM.AgV(aColumn,A_);},E6:function(){var K=this.K;return K.GM.E6();
},AjI:function(aColumn,A_){var K=this.K;return K.GM.AjI(aColumn,A_);},Aej:function(
aColumn,A_){var K=this.K;return K.GM.Aej(aColumn,A_);},HI:function(){var K=this.
K;return K.GM.HI();},Abp:function(){var K=this.K;return K.GM.Abp();},QI:function(
){var K=this.K;return K.GM.QI();},_Init:function(aArg){var K=this.K;C.GM._Init.call(
K.GM={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GM._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GM._ReInit();},_Mark:function(D){var B;if((B=this.GM)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGo={Te:A.abi(42,null,null),CF:function(aColumn){var B;this.Aam(aColumn);var Aq=(
C.ADO.isPrototypeOf(B=this.Te.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},VY:function(aColumn){var B;this.Aam(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Te.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},H2:function(aColumn
){var B;this.Aam(aColumn);var Aq=(C.ABX.isPrototypeOf(B=this.Te.Get(aColumn))?B:
null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Cc+aColumn.toFixed())+BD);return false;
},Hn:function(aColumn,A_){this.Aam(aColumn);var Aq=A._NewObject(C.ADO,0);Aq.A5=A_;
this.Te.Set(aColumn,Aq);return true;},ZF:function(aColumn,A_){this.Aam(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A5=A_;this.Te.Set(aColumn,Aq);return true;},N5:
function(aColumn,A_){this.Aam(aColumn);var Aq=A._NewObject(C.ABX,0);Aq.A5=A_;this.
Te.Set(aColumn,Aq);return true;},Aam:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E7+aColumn.toFixed())+Hq);},Bjy:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJF(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.ByF(this.
Sj(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
ByE(this.VY(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.ByD(this.H2(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJF(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJF(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.ByI(this.VZ(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.ByG(this.KN(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.ByH(this.KN(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zh&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OB&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJF(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else throw new Error(IU);},AJF:function(Ft,Eb,GA){
switch(Eb){case 0:return Ft===GA;case 2:return Ft>GA;case 3:return Ft<GA;case 4:
return Ft.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Ft!==GA;default:throw new
Error(Is+Eb.toFixed());}},ByE:function(Ft,Eb,GA){switch(Eb){case 0:return Ft===GA;
case 2:return Ft>GA;case 3:return Ft<GA;case 4:{A.ab5("%s%e%s%i",Ft,Eb,GA,Ft.indexOf(
GA,0));return Ft.indexOf(GA,0)>=0;}case 5:return Ft!==GA;default:throw new Error(
Is+Eb.toFixed());}},ByD:function(Ft,Eb,GA){switch(Eb){case 0:return Ft===GA;case
2:case 3:case 4:return false;case 5:return Ft!==GA;default:throw new Error(Is+Eb.
toFixed());}},VZ:function(aColumn){var B;this.Aam(aColumn);var Aq=(C.AG3.isPrototypeOf(
B=this.Te.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},ZH:function(aColumn
,A_){this.Aam(aColumn);var Aq=A._NewObject(C.AG3,0);Aq.A5=A_;this.Te.Set(aColumn
,Aq);return true;},ByI:function(Ft,Eb,GA){switch(Eb){case 0:return Ft===GA;case 2:
return Ft>GA;case 3:return Ft<GA;case 4:return Ft.toFixed().indexOf(GA.toFixed()
,0)>=0;case 5:return Ft!==GA;default:throw new Error(Is+Eb.toFixed());}},Sj:function(
aColumn){var B;this.Aam(aColumn);var Aq=(C.AG1.isPrototypeOf(B=this.Te.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},ZG:function(aColumn,A_){this.Aam(aColumn
);var Aq=A._NewObject(C.AG1,0);Aq.A5=A_;this.Te.Set(aColumn,Aq);return true;},ByF:
function(Ft,Eb,GA){switch(Eb){case 0:return Ft===GA;case 2:return Ft>GA;case 3:return Ft<
GA;case 4:return Ft.toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Ft!==GA;default:
throw new Error(Is+Eb.toFixed());}},KN:function(aColumn){var B;this.Aam(aColumn);
var Aq=(C.AG2.isPrototypeOf(B=this.Te.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},Uy:function(aColumn,A_){this.Aam(aColumn);var Aq=A._NewObject(C.AG2,0
);Aq.A5=A_;this.Te.Set(aColumn,Aq);return true;},ByG:function(Ft,Eb,GA){switch(Eb
){case 0:return Ft===GA;case 2:return Ft>GA;case 3:return Ft<GA;case 4:return Ft.
toFixed().indexOf(GA.toFixed(),0)>=0;case 5:return Ft!==GA;default:throw new Error(
Is+Eb.toFixed());}},ByH:function(Ft,Eb,GA,Ato,AI3){var AKW=Ft.toFixed();AKW=A.ab2(
A.abV(AKW,AKW.length-Ato),AI3);Ft=Math.trunc(Ft/A._GetAutoObject(A.Device.Helper
).ApP(Ato))%A._GetAutoObject(A.Device.Helper).ApP(AI3);var ALq=A.ab0(GA,0,10);switch(
Eb){case 0:return Ft===ALq;case 2:return Ft>ALq;case 3:return Ft<ALq;case 4:return AKW.
indexOf(GA,0)>=0;case 5:return Ft!==ALq;default:throw new Error(Is+Eb.toFixed());
}},_Init:function(aArg){(this.Te=[]).__proto__=C.AGo.Te;this.__proto__=C.AGo;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Te,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wq={_Init:function(
aArg){this.__proto__=C.Wq;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADO={A5:0,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=C.ADO;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
Wq._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABX={A5:false,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=
C.ABX;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aug:null,Ai1:null,AaN:
null,CP:function(){var K=this.K;K.A$g.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zk(3);A.zX([this,K.Bf$],[B=K.Aug,B.A82,B.ATv],0);this.UpdateAutoActions(
O2);K.A$g.call(this,this);this.Asq(this);this.Asr(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Aso(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Anz(languageValue);A.pe([this
,K.ATW],this);},Zk:function(E){this.UpdateActiveScreen(E);},Aws:function(E){this.
UpdateBatteryChargeState(E);},AEZ:function(E){this.UpdateChargeActive(E);},Ar1:function(
E){this.UpdateScanState(E);},AwR:function(E){this.UpdateMeasureState(E);},Aw5:function(
E){this.UpdateTempValue(E);},Anz:function(E){this.UpdateLanguage(E);},Aw6:function(
E){this.UpdateTemperatureUnit(E);},AEX:function(E){this.UpdateBrightness(E);},AFt:
function(E){this.UpdateMonitoring(E);},AxE:function(){var B;if(A._GetAutoObject(
C.Uz).Axy){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK2(this
);}},AhL:function(){var B;A._GetAutoObject(A.Device.Helper).SR.AnW(this);this.UpdateMeasureState(
0);},AhI:function(){var K=this.K;A.ab5("%s",P7);this.UpdateScanState(1);A.pe([this
,K.Bf$],this);},AnX:function(){var K=this.K;var B;A.ab5("%s",P8);K.Ai1.AnW(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah9){},Axx:function(){A.Device.
DeviceClass.BaG.call(this);this.Zk(1);},AGl:function(){A.Device.DeviceClass.BaE.
call(this);this.Zk(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axa:function(
E){this.UpdateUnderTemp(E);},Ab6:function(E){this.UpdateSyncState(E);},AC3:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Ff)+A.abz(0,9).toFixed(
))+L1)+P9)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGQ))+L1)+J2)+A.abz(1,100).toFixed(
))+N$;return aString;},PopupStateChanged:function(J5,Ae){var Agl=A._NewObject(C.
PopupContext,0);Agl.Id=J5;Agl.EV=Ae;this.AnL.Trigger(Agl,false);},AFV:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae_:function(E){this.UpdateVibrationOn(
E);},Aw1:function(E){this.UpdateRatingMode(E);},Ae0:function(E){this.UpdateFlashLightOn(
E);},Uq:function(E){this.UpdateTopLightOn(E);},WA:function(E){this.UpdateRGBTopLight(
E);},Awr:function(E){this.UpdateAutoRegistrationMode(E);},Ar2:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OM:function(E){this.UpdateDigitsID(
E);},PQ:function(E){this.UpdateOffsetID(E);},AFZ:function(E){this.UpdateWeightValue(
E);},AwO:function(E){this.UpdateMassUnit(E);},ArB:function(E){A.Device.DeviceClass.
BaA.call(this,E);this.UpdateActiveActions(E);},ArC:function(E){A.Device.DeviceClass.
BaB.call(this,E);this.UpdateActiveActionsOrder(E);},Aks:function(E){A.Device.DeviceClass.
BaC.call(this,E);this.UpdateAutoActions(E);},AGM:function(){var K=this.K;this.UpdateMeasureState(
1);K.BB3.call(this,this);},AsF:function(){var K=this.K;var B;K.AaN.AnW(this);this.
UpdateMeasureState(0);},EB:function(E){this.UpdateAnimalType(E);},Axb:function(E
){this.UpdateWeightRecordingMode(E);},AFy:function(E){this.UpdatePredictedTempValue(
E);},SO:function(L7){A.ab5("%s%i",P_,L7);},AE4:function(E){this.UpdateDemoMode(E
);},AEL:function(E){this.UpdateAgeRegistration(E);},Axc:function(E){this.UpdateWeightRecordingScope(
E);},JT:function(E){this.UpdateGender(E);},ArR:function(E){this.UpdateIDLastUsedMale(
E);},ArQ:function(E){this.UpdateIDLastUsedFemale(E);},Zl:function(E){this.UpdateAnimalListContent(
E);},AEN:function(E){this.UpdateAlarmListAction(E);},AE7:function(E){this.UpdateFlashLightInMeasureState(
E);},AeV:function(E){this.UpdateAnimalInfoContent(E);},AFY:function(E){this.UpdateWatchListAction(
E);},AE9:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArB(15359);this.ArC(MH);},ResetAutoActions:function(G){this.Aks(S8);},Awp:
function(E){this.UpdateAnimalTypesString(E);},Ar5:function(E){this.UpdateTemperaturesHighString(
E);},Ar6:function(E){this.UpdateTemperaturesLowString(E);},Asq:function(G){this.
Awp(UQ);this.Ar6(Z1);this.Ar5(W1);this.Axa(3600);},AwI:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArX:function(E){this.UpdateNaisIdLastUsedMale(E);},ArW:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwV:function(E){this.UpdateNaisIdIncrementMale(E);},AwU:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.BaH.call(this);A._GetAutoObject(
A.kR.A9).Cd(53);},Anu:function(E){this.UpdateBootloaderMessage(E);},AEI:function(
E){this.UpdateActionListAction(E);},Awn:function(E){this.UpdateActionListHideMeasured(
E);},Uj:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwA:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwB:function(E){this.UpdateDirectionOfCountingMale(
E);},AwC:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArS:function(E){this.
UpdateIDLastUsedUnisex(E);},ArY:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwW:function(E){this.UpdateNaisIdIncrementUnisex(E);},Aku:function(E){this.UpdateEartagNrAssignmentMode(
E);},NZ:function(E){this.UpdateBreed(E);},AFr:function(E){throw new Error(It);},
AFl:function(E){throw new Error(It);},AFS:function(E){throw new Error(It);},AET:
function(E){throw new Error(It);},AE5:function(E){this.UpdateDryCowListAction(E);
},AJC:function(A0K){var Qw;switch(A0K){case 15:Qw=false;break;default:Qw=true;}return Qw;
},AER:function(E){this.UpdateBirthListView(E);},AFT:function(E){this.UpdateTransferProgress(
E);},Ar7:function(E){this.UpdateTransferTarget(E);},AsE:function(){var B;A.pe([B=
A._GetAutoObject(C.Acn),B.Bgd],this);},Aw0:function(E){this.UpdatePremisesID(E);
},AwT:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE_:function(E){
this.UpdateFreshCowSpan(E);},AFU:function(E){this.UpdateUSBDevice(E.ZX,E.AsO,E.Ash
);},AxD:function(){var K=this.K;var B;this.GC.FileName=K.BiT.call(this,this.GC.AgJ
);switch(this.GC.AgJ){case 0:K.ByR.call(this,(C.VP.isPrototypeOf(B=this.GC)?B:null
));break;case 1:K.ByO.call(this,(C.VP.isPrototypeOf(B=this.GC)?B:null));break;case
2:K.ByT.call(this,(C.VP.isPrototypeOf(B=this.GC)?B:null));break;default:throw new
Error(UR+this.GC.AgJ.toFixed());}},Are:function(){return true;},AqA:function(){var
K=this.K;switch(this.GC.AgJ){case 0:A._GetAutoObject(A.Device.Device).A3(72,true
,A.jV,0,[this,K.A2$]);break;case 1:A._GetAutoObject(A.Device.Device).A3(90,true,
A.jV,0,[this,K.A2$]);break;case 2:A._GetAutoObject(A.Device.Device).A3(99,true,A.
jV,0,[this,K.A2$]);break;default:throw new Error(Z2+this.GC.AgJ.toFixed());}},AFF:
function(E){throw new Error(It);},Awo:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFH:function(E){this.UpdateShutdownTimer(E);},Asr:function(G){this.Awq(W2);
this.Ar$(Z3);this.Ar_(W3);this.Ar9(Z4);this.Asa(Z5);},Ar_:function(E){this.UpdateWeightGainsHighString(
E);},Ar$:function(E){this.UpdateWeightGainsLowString(E);},Awq:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar9:function(E){this.UpdateWeightGainsAverageString(E);},Asa:function(E){this.
UpdateWeightValueBirthString(E);},AwD:function(E){this.UpdateEvaluationAnimalType(
E);},Aw4:function(E){this.UpdateStartScreen(E);},ADS:function(){return 1;},ADT:function(
){return 1;},AFq:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw_:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Ng:function(E){this.UpdateWhereAbouts(
E);},ArE:function(E){this.UpdateActiveMassRecordingFields(E);},ArF:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Aso:function(G){this.ArE(A.jV);this.ArF(
US);},AFo:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajz:function(
){A._GetAutoObject(C.Acn).AEQ(true);return true;},Aqm:function(){var B;A._GetAutoObject(
C.Acn).Aqm(this);return true;},Aql:function(){var B;A.pe([B=A._GetAutoObject(C.Acn
),B.Aql],this);return true;},AuO:function(){var B;A.pe([B=A._GetAutoObject(C.Acn
),B.Bhh],this);return true;},AwQ:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwX:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwX(W4);},AwY:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwY(O3);},Axe:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axe(O3);},Aw$:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asn:function(AoC){this.GC.E6();this.GC.AgJ=AoC;this.GC.Fc(1);this.GC.Fc(2);this.
AxD();},AES:function(E){this.UpdateBirthRegistrationsListResetOnExport(E);},AFz:
function(E){this.UpdatePurchasedListResetOnExport(E);},BBM:function(G){switch(this.
Ii){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},Bf$:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Aug.AGH)K.Ai1.
AnU(this);A.ab5("%s",Z6);},BB3:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Aug.Axy)K.AaN.AnU(this);},BCK:function(G){this.UpdateMeasureState(3);},ATW:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AK2],[
B=K.Aug,B.A83,B.ATw],0);this.RZ.AE3(A._GetAutoObject(A.Device.Helper).A6L(8));this.
Sy.AE3(A._GetAutoObject(A.Device.Helper).A6L(8));},A$g:function(G){var AzL=A._NewObject(
A.Device.AxC,0);AzL.OnSetTimestamp(1711385184);AzL.AFm(1);AzL.AFs(0);AzL.AFC(0);
this.Sy=AzL;var Azg=A._NewObject(A.Device.AxC,0);Azg.OnSetTimestamp(1711385184);
Azg.AFm(1);Azg.AFs(0);Azg.AFC(4);this.RZ=Azg;var AlS=A._NewObject(A.Device.Avr,0
);AlS.AFj(1);AlS.AFk(0);AlS.AFi(0);AlS.AFQ(1);AlS.AFR(0);AlS.AFP(0);AlS.OnSetTimestamp(
1711385184);this.QZ=AlS;var Amj=A._NewObject(A.Device.Avr,0);Amj.AFj(1);Amj.AFk(
0);Amj.AFi(0);Amj.AFQ(1);Amj.AFR(0);Amj.AFP(0);Amj.OnSetTimestamp(1711385184);this.
SX=Amj;this.AhH=A.aaR(A.acf.Unknown);},Bza:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},ByR:function(
AcY){var K=this.K;var B;var Ac$=O4;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Ama=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cz.E4(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Ac$=Ac$+(((((((((((((((((
K.Aph.call(this,A._GetAutoObject(A.Device.Device).PV)+String.fromCharCode(0x3B))+
K.Aph.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A15.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.Bc9.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.Bc8.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.Bzf.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Bc_.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.Bzi.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.Aph.call(this
,Cz.NaisIdMother))+L1);Ama++;}}AcY.Au4=Ac$;AcY.AGp=Ama;AcY.Fc(3);},Aph:function(
Rp){if(!Rp)return A.jV;return Rp.toFixed();},A15:function(AyW){var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(AyW);return Au.Format(Rl);},Bc9:function(AcX){if(!AcX
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5o(AcX).toFixed();},Bc8:
function(L4){var result=A.jV;switch(L4){case 0:result=W5;break;case 1:result=W6;
break;case 2:result=A.jV;break;default:A.ab5("%s",UT+L4.toFixed());}return result;
},Bzf:function(AI4){if(!AI4)return A.jV;return AI4.toFixed();},Bc_:function(AfJ){
if(!AfJ)return A.jV;return AfJ.toFixed();},Bzi:function(Ath){return(Ath+1).toFixed(
);},A2$:function(G){var K=this.K;var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!As)return;if(As.PopupState===7){K.Bza.call(this,this.GC.FileName,
Z7,(C.VP.isPrototypeOf(B=this.GC)?B:null).Au4);this.GC.E6();}else if(As.PopupState===
8)this.GC.E6();},ByO:function(AcY){var K=this.K;var B;var Ac$=Z8;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Ama=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B9();O++){var Azc=A.jV;if(Cz.Ard())Azc=K.Bzk.call(this,Cz.FirstBodyWeight);Cz.E4(
O,A._GetAutoObject(A.Device.Device).An);Ac$=Ac$+(((((((((((K.Aph.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.Bzg.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.Aph.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.Bze.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.Bzj.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azc)+L1);Ama++;}AcY.Au4=Ac$;AcY.AGp=Ama;AcY.Fc(3);},BiT:function(
AoC){var AJX=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoC){case 0:AJX=Ac.Format(W7);break;case 1:AJX=Ac.
Format(W8);break;case 2:AJX=Ac.Format(S9);break;default:throw new Error(UR+AoC.toFixed(
));}return AJX;},Bzg:function(Rp){return Rp.toFixed();},Bzj:function(L4){var result=
A.jV;switch(L4){case 0:result=UU;break;case 1:result=UV;break;case 2:result=AcK;
break;default:A.ab5("%s",UT+L4.toFixed());}return result;},Bzk:function(MM){if(MM<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak8(MM);},Bze:function(
AyW){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyW);return Au.Format(S_);},
ByT:function(AcY){var K=this.K;var B;var Ac$=Z9;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Ama=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cz.
E4(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Ac$=Ac$+(((((((((((((K.Aph.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A15.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A15.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.Bc8.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.Bc_.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.Bc9.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.Aph.
call(this,A._GetAutoObject(A.Device.Device).PV))+L1);Ama++;}}AcY.Au4=Ac$;AcY.AGp=
Ama;AcY.Fc(3);},_Init:function(aArg){var K=this.K;A.acl.Gl._Init.call(K.Ai1={I:this
},0);A.acl.Gl._Init.call(K.AaN={I:this},0);K.__proto__=C.DeviceClass;this.Aws(100
);this.Anz(1);this.ArR(200);this.ArQ(100);this.ArX(276000912345678);this.ArW(276000923456789
);this.ArS(500);this.ArY(276000901234567);this.NZ(1);K.Ai1.HM(1);K.Ai1.Fq(1000);
K.AaN.WC(0);K.AaN.HM(1);K.AaN.Fq(750);K.AaN.B2=50000;this.GC=A._NewObject(C.VP,0
);K.Ai1.Sz=[this,K.BBM];K.Aug=A._GetAutoObject(C.Uz);K.AaN.Sz=[this,K.BCK];K.AaN.
Q=[this,this.AEF,this.AIT];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai1._Done();K.AaN._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai1._ReInit();K.AaN._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AG3={A5:0,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=C.AG3;
},_className:"DeviceSimulation::UInt8"};C.AG1={A5:0,_Init:function(aArg){C.Wq._Init.
call(this,aArg);this.__proto__=C.AG1;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4g:0,AFI:function(E){var K=this.K;K.A4g=K.A4g+(E-this.Dv());A.Device.
HelperClass.BaD.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Baz.call(this)+K.A4g;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$m={Axy:true,AGH:false,ATv:function(E){if(this.AGH===E)return;this.AGH=E;A.
abo([this,this.A82,this.ATv],0);},A82:function(){return this.AGH;},ATw:function(
E){if(this.Axy===E)return;this.Axy=E;A.abo([this,this.A83,this.ATw],0);},A83:function(
){return this.Axy;},_Init:function(aArg){this.__proto__=C.A$m;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Uz={_Init:function(){C.A$m._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Uz._variants();
},_this:null};C.PopupContext={EV:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ch:function(
AH){var HD=A.Device.Rating.BaF.call(this,AH);if(HD){var Rw=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.AnimalId);if(Ad
!==-1){var Jo=Rw.Oy();if(Jo<=0)A.ab5("%s",Afz);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.E4(Ad,Rw);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){Rw.A$f(Ad,5,this.Temperature);Rw.AkQ(Ad,17,this.RatingTemperature);Rw.
Ack(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){Rw.AUy(Ad,18,this.BodyWeight);Rw.Ack(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){Rw.AUy(Ad,23,this.BodyWeight);Rw.Ack(
Ad,24,this.Timestamp);Rw.Hn(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGf(this)){var LP=A._GetAutoObject(A.Device.Helper).AC7(this);Rw.AkQ(Ad,13,LP);
Rw.Ack(Ad,31,this.Timestamp);}Rw.OA(Jo);}}}return HD;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PW={Gg:A.abi(512,null,null),Ph:0,AJr:
0,AK$:0,A4j:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKH:0,A3P:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bd1:512,AAc:-1,A1j:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af1:false,CF:function(Ad,A4){var Bf=this.TS(Ad);if(!!Bf)return Bf.
CF(A4);return 0;},VY:function(Ad,A4){var Bf=this.TS(Ad);if(!!Bf)return Bf.VY(A4);
return A.jV;},H2:function(Ad,A4){var Bf=this.TS(Ad);if(!!Bf)return Bf.H2(A4);return false;
},VZ:function(Ad,A4){var Bf=this.TS(Ad);if(!!Bf)return Bf.VZ(A4);return 0;},Sj:function(
Ad,A4){var Bf=this.TS(Ad);if(!!Bf)return Bf.Sj(A4);return 0;},Oy:function(){if(this.
Af1)throw new Error(Z_);this.Af1=true;return 12345;},OA:function(AoO){if(!this.Af1
)throw new Error(W9);if(AoO!==12345)throw new Error(Z$);this.Af1=false;return true;
},YB:function(){return this.A4O(A._NewObject(C.AGo,0));},ZH:function(Ad,A4,CZ){var
Bf=this.TS(Ad);if(!!Bf)return Bf.ZH(A4,CZ);return false;},Hn:function(Ad,A4,CZ){
var Bf=this.TS(Ad);if(!!Bf)return Bf.Hn(A4,CZ);return false;},ZG:function(Ad,A4,
CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.ZG(A4,CZ);return false;},N5:function(Ad
,A4,CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.N5(A4,CZ);return false;},ZF:function(
Ad,A4,CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.ZF(A4,CZ);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.BcI();switch(this.Id){case 0:{this.
Bd1=256;A.pe([this,this.BwH],this);}break;case 1:A.pe([this,this.BwJ],this);break;
case 3:A.pe([this,this.BwG],this);break;case 4:A.pe([this,this.BwI],this);break;
case 2:break;default:throw new Error(W_+this.Id.toFixed());}},B9:function(){return this.
Ph;},KN:function(Ad,A4){var Bf=this.TS(Ad);if(!!Bf)return Bf.KN(A4);return 0;},Uy:
function(Ad,A4,CZ){var Bf=this.TS(Ad);if(!!Bf)return Bf.Uy(A4,CZ);return false;}
,E6:function(){this.BcI();return true;},HI:function(){return this.Bd1;},A4O:function(
Ad){if(this.Ph>=512)throw new Error(AhT);this.Gg.Set(this.Ph,Ad);this.Ph=this.Ph+
1;switch(this.Id){case 0:{this.AAc=this.Ph;this.Hn(this.Ph-1,0,this.AAc);}break;
case 1:{this.AAc=this.Ph-1;this.Hn(this.Ph-1,0,this.AAc);}break;default:;}A.pe([
this,this.Akl],this);return this.Ph-1;},TS:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gg.Get(aIndex);},BcI:function(){var O;for(O=0;O<512;
O=O+1)this.Gg.Set(O,null);this.Ph=0;this.AJr=0;this.AKH=0;this.AK$=0;A.pe([this,
this.Akl],this);},AKb:function(){this.AJr=(this.AJr+1)%15;return this.A1j.Get(this.
AJr);},A19:function(){this.AK$=(this.AK$+1)%10;return this.A4j.Get(this.AK$);},AJZ:
function(G){if(this.K&&this.K.AJZ)return this.K.AJZ.apply(this,arguments);else return C.
PW.BwP.apply(this,arguments);},BwP:function(G){var B;var Oj=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhN(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhN(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhN(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhN(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhN(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhN(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhN(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhN(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var Bgl=0;for(O=
1;O<=7;O=O+1){Bgl=3680+(20*O);Oj=Bgl>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhN(7-O),0,1,Oj,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},BwH:function(s){this.AJZ(s);},AJ1:
function(G){if(this.K&&this.K.AJ1)return this.K.AJ1.apply(this,arguments);else return C.
PW.BwR.apply(this,arguments);},BwR:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var AiA;var Bc0;for(O=0;O<32;O=O+1){var A1T=this.
Bzw();for(;A1T>0;A1T=A1T-1){AiA=this.A19();Bc0=A._GetAutoObject(A.Device.Converter
).AsG(0,AiA);this.AG(Ac,12310020,AiA,Bc0,this.AKb(),this.AKb(),this.AKb(),this.AKb(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiA=this.A19();this.AG(Ac,276000312310001,AiA,A._GetAutoObject(A.Device.Converter
).AsG(0,AiA),1,3,3,3,0);AiA=this.A19();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsG(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiA,A._GetAutoObject(
A.Device.Converter).AsG(1,AiA),2,3,3,3,0);},BwJ:function(s){this.AJ1(s);},A0:function(
J5,Bxe,Bxv,BbM,Ath,L4,Bxm,Bxr,Bxo,Bxp,MM,Bw1,Bxt,Bxn,En,Bxq,AcX,AI4,AfJ,BxA,BzP,
BzQ,Bw6,BxC){var Cz=A._NewObject(A.Device.Animal,0);Cz.Gq();Cz.Axd(0);Cz.Ae7(0);
Cz.Un(false);Cz.Akz(false);if(BzQ)Cz.PT(J5);if(BzP)Cz.Ne(J5);Cz.SG(A._GetAutoObject(
A.Device.Helper).Sh(J5,BxC&0xFF,Bw6&0xFF)|0);Cz.Ab1(Bxe);Cz.AnA(Bxv);Cz.Q4(BbM);
Cz.Akt(Ath);Cz.JT(L4);Cz.AnS(Bxm);Cz.AGA(Bxr);Cz.Ae3(Bxp);Cz.Un(Bxo);Cz.ArT(Bxn);
Cz.AwM(Bxt);Cz.Awx(Bw1);Cz.EB(En);Cz.Ae4(Bxq);Cz.NZ(AcX);Cz.Akv(AI4);Cz.Ng(AfJ);
Cz.AnC(BxA);Cz.Ch(this);if(MM>0)A._GetAutoObject(C.Asi).AG(BbM,J5,0,0,0,0,0,0,MM
);},AG:function(L3,AcV,AoM,BxL,Bw_,Bw$,BwT,BxN,BwV){var B1=A._NewObject(A.Device.
Rating,0);B1.Gq();var Bcq=A._GetAutoObject(C.Amv).AOv(26,AcV);if(Bcq>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amv).CF(Bcq,0));else A.ab5("%s%U",KY,AcV);B1.OnSetTimestamp(L3
);B1.OnSetTemperature(AoM);B1.OnSetRatingTemperature(BxL);B1.OnSetFaeces(Bw_);B1.
OnSetFeed(Bw$);B1.OnSetAppearance(BwT);B1.OnSetRespiratory(BxN);B1.OnSetBodyWeight(
BwV);B1.Ch(this);},A6m:function(aColumn,A_){var O;for(O=0;O<this.Ph;O=O+1)if(this.
Gg.Get(O).CF(aColumn)===A_)return O;return-1;},Bzw:function(){this.AKH=(this.AKH+
1)%10;return this.A3P.Get(this.AKH);},AJY:function(G){if(this.K&&this.K.AJY)return this.
K.AJY.apply(this,arguments);else return C.PW.BwO.apply(this,arguments);},BwO:function(
G){this.AlM(10,AcL);this.AlM(20,Lv);this.AlM(30,AhU);this.AlM(31,Aob);this.AlM(32
,Oa);},BwG:function(s){this.AJY(s);},AlM:function(J5,Bxf){var AJl=A._NewObject(A.
Device.AnimalGroup,0);AJl.Gq();AJl.OnSetId(J5);AJl.AFa(Bxf);AJl.Ch(this);},Abp:function(
){return this.AAc;},AOv:function(aColumn,A_){var O;for(O=0;O<this.Ph;O=O+1)if(this.
Gg.Get(O).KN(aColumn)===A_)return O;return-1;},AJ0:function(G){if(this.K&&this.K.
AJ0)return this.K.AJ0.apply(this,arguments);else return C.PW.BwQ.apply(this,arguments
);},BwQ:function(G){this.Aaw(2016,216,6);this.Aaw(2017,217,7);this.Aaw(2018,218,
8);this.Aaw(2019,219,9);this.Aaw(2020,220,10);this.Aaw(2021,221,11);},BwI:function(
s){this.AJ0(s);},Aaw:function(Ac4,Bw5,Bw4){var U8=A._NewObject(A.Device.CalfDeregistrations
,0);U8.Gq();U8.AkE(Ac4);U8.Awz(Bw5);U8.Awy(Bw4);U8.Ch(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gg=[]).__proto__=C.PW.Gg;(this.A4j=[
]).__proto__=C.PW.A4j;(this.A3P=[]).__proto__=C.PW.A3P;(this.A1j=[]).__proto__=C.
PW.A1j;this.__proto__=C.PW;var J3=this._variants();if(J3){this.K={};J3._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gg,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.PW._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.Amv={_Init:function(){C.PW._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AuF={_Init:function(){C.PW.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Asi={_Init:function(){C.PW._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.GM={AlG:A.
abi(512,null,null),E_:null,Ape:0,CF:function(Ad,A4){var Bf=this.Aau(Ad);if(!!Bf)
return Bf.CF(A4);return 0;},VY:function(Ad,A4){var Bf=this.Aau(Ad);if(!!Bf)return Bf.
VY(A4);return A.jV;},H2:function(Ad,A4){var Bf=this.Aau(Ad);if(!!Bf)return Bf.H2(
A4);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AF1(A._GetAutoObject(C.Amv));break;case 1:this.AF1(A._GetAutoObject(
C.Asi));break;case 3:this.AF1(A._GetAutoObject(C.AuF));break;case 4:this.AF1(A._GetAutoObject(
C.AuR));break;case 2:break;default:throw new Error(W_+this.Id.toFixed());}},B9:function(
){if(!!this.Filter)return this.Ape;else if(!!this.E_)return this.E_.Ph;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1h(this);},VZ:function(Ad
,A4){var Bf=this.Aau(Ad);if(!!Bf)return Bf.VZ(A4);return 0;},Sj:function(Ad,A4){
var Bf=this.Aau(Ad);if(!!Bf)return Bf.Sj(A4);return 0;},Oy:function(){if(!!this.
E_)return this.E_.Oy();return-1;},OA:function(AoO){var HD=false;if(!!this.E_)HD=
this.E_.OA(AoO);if(HD)A.pe([this,this.A1h],this);return HD;},YB:function(){if(!!
this.Filter)throw new Error(W$+A._GetAutoObject(A.Device.Converter).Biy(this.Id,
this.Filter));if(!!this.E_)return this.E_.A4O(A._NewObject(C.AGo,0));return-1;},
ZH:function(Ad,A4,CZ){if(!this.E_.Af1)throw new Error(Aaa);var Bf=this.Aau(Ad);if(
!!Bf)return Bf.ZH(A4,CZ);return false;},Hn:function(Ad,A4,CZ){if(!this.E_.Af1)throw new
Error(Aaa);var Bf=this.Aau(Ad);if(!!Bf)return Bf.Hn(A4,CZ);return false;},ZG:function(
Ad,A4,CZ){if(!this.E_.Af1)throw new Error(Aaa);var Bf=this.Aau(Ad);if(!!Bf)return Bf.
ZG(A4,CZ);return false;},N5:function(Ad,A4,CZ){if(!this.E_.Af1)throw new Error(Aaa
);var Bf=this.Aau(Ad);if(!!Bf)return Bf.N5(A4,CZ);return false;},ZF:function(Ad,
A4,CZ){if(!this.E_.Af1)throw new Error(Aaa);var Bf=this.Aau(Ad);if(!!Bf)return Bf.
ZF(A4,CZ);return false;},LS:function(aColumn,A_){if(!!this.Filter){var O;for(O=0;
O<this.Ape;O=O+1)if(this.AlG.Get(O).CF(aColumn)===A_)return O;return-1;}else if(
!!this.E_)return this.E_.A6m(aColumn,A_);return-1;},KN:function(Ad,A4){var Bf=this.
Aau(Ad);if(!!Bf)return Bf.KN(A4);return 0;},Uy:function(Ad,A4,CZ){if(!this.E_.Af1
)throw new Error(Aaa);var Bf=this.Aau(Ad);if(!!Bf)return Bf.Uy(A4,CZ);return false;
},AgV:function(aColumn,A_){if(!!this.Filter){var O;for(O=0;O<this.Ape;O=O+1)if(this.
AlG.Get(O).KN(aColumn)===A_)return O;return-1;}else if(!!this.E_)return this.E_.
AOv(aColumn,A_);return-1;},E6:function(){if(!!this.E_)return this.E_.E6();return false;
},AjI:function(aColumn,A_){if(!!this.E_)return this.E_.A6m(aColumn,A_)>=0;return false;
},Aej:function(aColumn,A_){if(!!this.E_)return this.E_.AOv(aColumn,A_)>=0;return false;
},HI:function(){if(!!this.E_)return this.E_.HI();return 0;},Abp:function(){if(!!
this.E_)return this.E_.Abp();return-1;},QI:function(){if(!!this.E_)return this.E_.
Ph;return 0;},A1h:function(G){this.A1v();if(!!this.Filter&&!!this.E_){var O;for(
O=0;O<this.E_.B9();O=O+1){var A1X=true;var Av=this.Filter.AOI();var Bf=this.E_.TS(
O);if(!!Bf)while(A1X&&!!Av){A1X=Bf.Bjy(Av);Av=this.Filter.AON(Av);}else A.ab5("%s"
,((AhV+O.toFixed())+AhW)+this.E_.B9().toFixed());if(A1X){this.AlG.Set(this.Ape,this.
E_.Gg.Get(O));this.Ape=this.Ape+1;}}}A.pe([this,this.Akl],this);},A1v:function(){
var O;for(O=0;O<512;O=O+1)this.AlG.Set(O,null);this.Ape=0;},AF1:function(E){if(this.
E_===E)return;if(!!this.E_)A.z9([this,this.A4h],this.E_,0);this.E_=E;if(!!this.E_
){A.zV([this,this.A4h],this.E_,0);A.pe([this,this.A4h],this);}},A4h:function(G){
A.pe([this,this.A1h],this);},Aau:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlG.Get(aIndex);}else if(!!this.E_
)return this.E_.TS(aIndex);A.ab5("%s",AcM+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlG=[]).__proto__=C.GM.
AlG;this.__proto__=C.GM;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlG,D);if((B=this.E_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$n={KG:null,AdG:null,Ow:null,AMN:false,AMO:
true,A4b:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab6(1);this.AdG.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab6(2);A._GetAutoObject(A.Device.Device).Ar7(A._GetAutoObject(A.
Device.Device).An.QI());this.KG.Fq(A._GetAutoObject(A.Device.Device).Afp*50);this.
KG.B2=A._GetAutoObject(A.Device.Device).Afp;this.KG.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab6(3);this.AdG.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab6(4);A._GetAutoObject(A.Device.Device).Ar7(A._GetAutoObject(A.Device.Device
).An.QI());this.KG.Fq(A._GetAutoObject(A.Device.Device).Afp*50);this.KG.B2=A._GetAutoObject(
A.Device.Device).Afp;this.KG.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab6(5);this.AdG.Ar(true);}break;case 5:A.pe([this,this.Bgd],this);break;case 7:
case 6:break;default:A.ab5("%s%e",UW,A._GetAutoObject(A.Device.Device).SyncState
);}},BA8:function(G){this.AdG.Ar(false);A.pe([this,this.A4b],this);},BCa:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab6(0);A.pe([this,this.A4b],this);}break;default:;}},Bgd:function(
G){this.AdG.Ar(false);this.KG.Ar(false);A._GetAutoObject(A.Device.Device).Ab6(0);
},AEQ:function(E){if(this.AMO===E)return;this.AMO=E;A.abo([this,this.Bkx,this.AEQ
],0);},Bkx:function(){return this.AMO;},Aql:function(G){var B;this.Ow.Cx=true;this.
Ow.B2=false;this.Ow.Fq(100);this.Ow.HM(1);this.Ow.Q=[this,this.ASn,this.ASV];A.pe([
B=this.Ow,B.AnU],this);},Bhh:function(G){var B;this.Ow.Cx=true;this.Ow.B2=false;
this.Ow.Fq(400);this.Ow.Um(200);this.Ow.HM(3);this.Ow.Q=[this,this.ASn,this.ASV];
this.AEQ(false);A.pe([B=this.Ow,B.AnU],this);},ASV:function(E){if(this.AMN===E)return;
this.AMN=E;A.abo([this,this.ASn,this.ASV],0);},ASn:function(){return this.AMN;},
Aqm:function(G){var B;this.Ow.AnW(this);this.AEQ(false);},_Init:function(aArg){A.
acl.Gl._Init.call(this.KG={I:this},0);A.Core.Timer._Init.call(this.AdG={I:this},
0);A.acl.TF._Init.call(this.Ow={I:this},0);this.__proto__=C.A$n;var B;this.KG.HM(
1);this.AdG.PR(2000);this.KG.Sz=[this,this.A4b];this.KG.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASM,B.A0j];this.AdG.MB=[this,this.BA8];A.h7++;},_Done:function(
){this.__proto__=null;this.KG._Done();this.AdG._Done();this.Ow._Done();A.h7--;},
_ReInit:function(){this.KG._ReInit();this.AdG._ReInit();this.Ow._ReInit();},_Mark:
function(D){var B;if((B=this.KG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acn={_Init:function(){C.A$n._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AG2={A5:0,_Init:function(aArg){C.Wq._Init.call(this,aArg);this.__proto__=C.AG2;}
,_className:"DeviceSimulation::UInt64"};C.AuR={_Init:function(){C.PW._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Du:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Cb.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XW={Ad5:null,CC:function(G){var K=this.K;A.ab5("%s",Aoc);K.Ad5.Ar(true);},E5:
function(G){var K=this.K;if(K.Ad5.Bw===true){K.Ad5.Ar(false);A.ab5("%s",Aod);}},
Bkp:function(G){var K=this.K;K.Ad5.Ar(false);A._GetAutoObject(A.kR.A9).Ab7(A._GetAutoObject(
A.Device.Device).AxF);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad5={I:this},0);K.__proto__=C.XW;this.AeL.H(Aoe);K.Ad5.PR(1500);this.UA.R(Aof);
this.UA.Z(true);this.AeL.Ax(A.aaL(A.ach.ARx));K.Ad5.MB=[this,K.Bkp];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad5._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad5._ReInit();},_Mark:function(D){var B;if((B=this.Ad5)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VP={Au4:A.jV,E6:function(){A.Device.VP.E6.call(this);this.Au4=A.jV;},_Init:function(
aArg){A.Device.VP._Init.call(this,aArg);this.__proto__=C.VP;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.ADO.__proto__=C.Wq;C.String.__proto__=C.Wq;C.ABX.__proto__=C.
Wq;C.AG3.__proto__=C.Wq;C.AG1.__proto__=C.Wq;C.PW.__proto__=A.Device.ITable;C.GM.
__proto__=A.Device.ITable;C.AG2.__proto__=C.Wq;C.VP.__proto__=A.Device.VP;};C._ReInit=
function(){var B;if((B=C.Uz._this))B._ReInit(),C.Uz._ReInit.call(B);if((B=C.Amv.
_this))B._ReInit(),C.Amv._ReInit.call(B);if((B=C.AuF._this))B._ReInit(),C.AuF._ReInit.
call(B);if((B=C.Asi._this))B._ReInit(),C.Asi._ReInit.call(B);if((B=C.Acn._this))
B._ReInit(),C.Acn._ReInit.call(B);if((B=C.AuR._this))B._ReInit(),C.AuR._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Uz._this)&&(B._cycle!=D))B._Done(C.Uz._this=
null);if((B=C.Amv._this)&&(B._cycle!=D))B._Done(C.Amv._this=null);if((B=C.AuF._this
)&&(B._cycle!=D))B._Done(C.AuF._this=null);if((B=C.Asi._this)&&(B._cycle!=D))B._Done(
C.Asi._this=null);if((B=C.Acn._this)&&(B._cycle!=D))B._Done(C.Acn._this=null);if((
B=C.AuR._this)&&(B._cycle!=D))B._Done(C.AuR._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */