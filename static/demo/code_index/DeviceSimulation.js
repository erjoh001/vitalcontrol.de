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
var Ce="ERROR: access to null Bool data in column [";var BD="]";var E6="Access to inexistent column index: ";
var Hr=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IU="Unsupported filter criterion class";var
Is="Operator not handled:";var O4="1,8";var P_="INFO: Device.StartScan() called.";
var P$="INFO: Device.StopScan() called.";var CQ="V0.";var Ff=".";var L3="\n";var
Qa="Temp: ";var J3="Battery: ";var Ob="%%";var Qb="Selected animal with row index";
var MJ="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S_="1,2";var US="0,1,2";var Z3="3900,3950,4000";var W5="4050,4100,4150";var It="Read only";
var UT="Unknown data export type: ";var Z4="Unhandled Device::DataExportType: ";
var W6="0,2,1";var Z5="650,150,700";var W7="800,200,900";var Z6="800,200,850";var
Z7="40000,4000,0";var UU="32,7,34,18,23,14";var W8="16384";var O5="1,1024";var Z8=
"Simulate Scan";var O6="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rn="%d.%m.%Y";var W9="1";var W_="2";var UV="Unknown gender: ";var Z9="text/csv";
var Z_="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W$="hit-geburt-%d-%m-%Y_%H-%M.csv";var Xa="animals-%d-%m-%Y_%H-%M.csv";var S$=
"zugang-%d-%m-%Y_%H-%M.csv";var UW="M";var UX="F";var AcM="?";var Ta="%Y-%m-%d";
var Z$="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var AfB="ERROR: Cannot start transaction";
var Aaa="Nested transactions are not allowed.";var Xb="Transaction not opened.";
var Aab="Wrong transaction ID.";var Xc="Unhandled TableId:";var AhX="Maximum number of rows reached.";
var KZ="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcN=
"10";var Lw="20";var AhY="30";var Aoe="31";var Oc="32";var Xd="Severe: filter set when inserting row into table: ";
var Aac="Warning: DeviceSimulation::TableData not in transaction";var AfC="ERROR: Row not found with index [";
var AhZ="] while Rows Count = ";var AcO="ERROR: trying to access an inexistent row with Index=";
var UY="Invalid Device::SyncState";var Aof="Forwarding to home screen after 500 milliseconds ...";
var Aog="Forwarding to home screen canceled...";var Aoh=[0,58,240,208];var Aoi="VitalControl\nstarting up \u2026";
C.Table={GM:null,Init:function(aArg){var K=this.K;A.zV([this,this.Ako],K.GM,0);},
CF:function(Ad,A4){var K=this.K;return K.GM.CF(Ad,A4);},V0:function(Ad,A4){var K=
this.K;return K.GM.V0(Ad,A4);},H2:function(Ad,A4){var K=this.K;return K.GM.H2(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GM.OnSetId(
E);},B9:function(){var K=this.K;return K.GM.B9();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GM.Bk(E);},V1:function(Ad,A4){var K=this.K;return K.
GM.V1(Ad,A4);},Sl:function(Ad,A4){var K=this.K;return K.GM.Sl(Ad,A4);},Oz:function(
){var K=this.K;return K.GM.Oz();},OB:function(AoQ){var K=this.K;return K.GM.OB(AoQ
);},YF:function(){var K=this.K;return K.GM.YF();},ZJ:function(Ad,A4,CZ){var K=this.
K;return K.GM.ZJ(Ad,A4,CZ);},Ho:function(Ad,A4,CZ){var K=this.K;return K.GM.Ho(Ad
,A4,CZ);},ZI:function(Ad,A4,CZ){var K=this.K;return K.GM.ZI(Ad,A4,CZ);},N7:function(
Ad,A4,CZ){var K=this.K;return K.GM.N7(Ad,A4,CZ);},ZH:function(Ad,A4,CZ){var K=this.
K;return K.GM.ZH(Ad,A4,CZ);},LT:function(aColumn,A7){var K=this.K;return K.GM.LT(
aColumn,A7);},KO:function(Ad,A4){var K=this.K;return K.GM.KO(Ad,A4);},UA:function(
Ad,A4,CZ){var K=this.K;return K.GM.UA(Ad,A4,CZ);},AgZ:function(aColumn,A7){var K=
this.K;return K.GM.AgZ(aColumn,A7);},E5:function(){var K=this.K;return K.GM.E5();
},AjL:function(aColumn,A7){var K=this.K;return K.GM.AjL(aColumn,A7);},Aem:function(
aColumn,A7){var K=this.K;return K.GM.Aem(aColumn,A7);},HJ:function(){var K=this.
K;return K.GM.HJ();},Abq:function(){var K=this.K;return K.GM.Abq();},QK:function(
){var K=this.K;return K.GM.QK();},_Init:function(aArg){var K=this.K;C.GM._Init.call(
K.GM={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GM._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GM._ReInit();},_Mark:function(D){var B;if((B=this.GM)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGw={Th:A.abi(42,null,null),CF:function(aColumn){var B;this.Aam(aColumn);var Aq=(
C.ADW.isPrototypeOf(B=this.Th.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},V0:function(aColumn){var B;this.Aam(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Th.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},H2:function(aColumn
){var B;this.Aam(aColumn);var Aq=(C.AB2.isPrototypeOf(B=this.Th.Get(aColumn))?B:
null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Ce+aColumn.toFixed())+BD);return false;
},Ho:function(aColumn,A7){this.Aam(aColumn);var Aq=A._NewObject(C.ADW,0);Aq.A5=A7;
this.Th.Set(aColumn,Aq);return true;},ZH:function(aColumn,A7){this.Aam(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A5=A7;this.Th.Set(aColumn,Aq);return true;},N7:
function(aColumn,A7){this.Aam(aColumn);var Aq=A._NewObject(C.AB2,0);Aq.A5=A7;this.
Th.Set(aColumn,Aq);return true;},Aam:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E6+aColumn.toFixed())+Hr);},BjY:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJM(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.By2(this.
Sl(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
By1(this.V0(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.By0(this.H2(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJM(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJM(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.By5(this.V1(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.By3(this.KO(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.By4(this.KO(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zk&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OD&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJM(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else throw new Error(IU);},AJM:function(Fu,Eb,GB){
switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:
return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new
Error(Is+Eb.toFixed());}},By1:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;
case 2:return Fu>GB;case 3:return Fu<GB;case 4:{A.ab5("%s%e%s%i",Fu,Eb,GB,Fu.indexOf(
GB,0));return Fu.indexOf(GB,0)>=0;}case 5:return Fu!==GB;default:throw new Error(
Is+Eb.toFixed());}},By0:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case
2:case 3:case 4:return false;case 5:return Fu!==GB;default:throw new Error(Is+Eb.
toFixed());}},V1:function(aColumn){var B;this.Aam(aColumn);var Aq=(C.AG$.isPrototypeOf(
B=this.Th.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},ZJ:function(aColumn
,A7){this.Aam(aColumn);var Aq=A._NewObject(C.AG$,0);Aq.A5=A7;this.Th.Set(aColumn
,Aq);return true;},By5:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:
return Fu>GB;case 3:return Fu<GB;case 4:return Fu.toFixed().indexOf(GB.toFixed()
,0)>=0;case 5:return Fu!==GB;default:throw new Error(Is+Eb.toFixed());}},Sl:function(
aColumn){var B;this.Aam(aColumn);var Aq=(C.AG9.isPrototypeOf(B=this.Th.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},ZI:function(aColumn,A7){this.Aam(aColumn
);var Aq=A._NewObject(C.AG9,0);Aq.A5=A7;this.Th.Set(aColumn,Aq);return true;},By2:
function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<
GB;case 4:return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:
throw new Error(Is+Eb.toFixed());}},KO:function(aColumn){var B;this.Aam(aColumn);
var Aq=(C.AG_.isPrototypeOf(B=this.Th.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},UA:function(aColumn,A7){this.Aam(aColumn);var Aq=A._NewObject(C.AG_,0
);Aq.A5=A7;this.Th.Set(aColumn,Aq);return true;},By3:function(Fu,Eb,GB){switch(Eb
){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:return Fu.
toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new Error(
Is+Eb.toFixed());}},By4:function(Fu,Eb,GB,Atx,AI9){var AK3=Fu.toFixed();AK3=A.ab2(
A.abV(AK3,AK3.length-Atx),AI9);Fu=Math.trunc(Fu/A._GetAutoObject(A.Device.Helper
).ApR(Atx))%A._GetAutoObject(A.Device.Helper).ApR(AI9);var ALw=A.ab0(GB,0,10);switch(
Eb){case 0:return Fu===ALw;case 2:return Fu>ALw;case 3:return Fu<ALw;case 4:return AK3.
indexOf(GB,0)>=0;case 5:return Fu!==ALw;default:throw new Error(Is+Eb.toFixed());
}},_Init:function(aArg){(this.Th=[]).__proto__=C.AGw.Th;this.__proto__=C.AGw;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Th,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wt={_Init:function(
aArg){this.__proto__=C.Wt;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADW={A5:0,_Init:function(aArg){C.Wt._Init.call(this,aArg);this.__proto__=C.ADW;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
Wt._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.AB2={A5:false,_Init:function(aArg){C.Wt._Init.call(this,aArg);this.__proto__=
C.AB2;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aup:null,Ai3:null,AaN:
null,CP:function(){var K=this.K;K.A$z.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zn(3);A.zX([this,K.Bgu],[B=K.Aup,B.A9i,B.ATJ],0);this.UpdateAutoActions(
O4);K.A$z.call(this,this);this.Ass(this);this.Ast(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asq(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnC(languageValue);A.pe([this
,K.AT_],this);},Zn:function(E){this.UpdateActiveScreen(E);},Awx:function(E){this.
UpdateBatteryChargeState(E);},AE7:function(E){this.UpdateChargeActive(E);},Ar3:function(
E){this.UpdateScanState(E);},AwW:function(E){this.UpdateMeasureState(E);},Aw_:function(
E){this.UpdateTempValue(E);},AnC:function(E){this.UpdateLanguage(E);},Aw$:function(
E){this.UpdateTemperatureUnit(E);},AE5:function(E){this.UpdateBrightness(E);},AFB:
function(E){this.UpdateMonitoring(E);},AxJ:function(){var B;if(A._GetAutoObject(
C.UB).AxD){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK9(this
);}},AhP:function(){var B;A._GetAutoObject(A.Device.Helper).ST.AnZ(this);this.UpdateMeasureState(
0);},AhM:function(){var K=this.K;A.ab5("%s",P_);this.UpdateScanState(1);A.pe([this
,K.Bgu],this);},An0:function(){var K=this.K;var B;A.ab5("%s",P$);K.Ai3.AnZ(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah$){},AxC:function(){A.Device.
DeviceClass.Ba1.call(this);this.Zn(1);},AGt:function(){A.Device.DeviceClass.BaZ.
call(this);this.Zn(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axf:function(
E){this.UpdateUnderTemp(E);},Ab8:function(E){this.UpdateSyncState(E);},AC9:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Ff)+A.abz(0,9).toFixed(
))+L3)+Qa)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGY))+L3)+J3)+A.abz(1,100).toFixed(
))+Ob;return aString;},PopupStateChanged:function(J6,Ae){var Agp=A._NewObject(C.
PopupContext,0);Agp.Id=J6;Agp.EV=Ae;this.AnO.Trigger(Agp,false);},AF3:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Afa:function(E){this.UpdateVibrationOn(
E);},Aw6:function(E){this.UpdateRatingMode(E);},Ae2:function(E){this.UpdateFlashLightOn(
E);},Us:function(E){this.UpdateTopLightOn(E);},WE:function(E){this.UpdateRGBTopLight(
E);},Aww:function(E){this.UpdateAutoRegistrationMode(E);},Ar4:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OO:function(E){this.UpdateDigitsID(
E);},PU:function(E){this.UpdateOffsetID(E);},AF7:function(E){this.UpdateWeightValue(
E);},AwT:function(E){this.UpdateMassUnit(E);},ArD:function(E){A.Device.DeviceClass.
BaV.call(this,E);this.UpdateActiveActions(E);},ArE:function(E){A.Device.DeviceClass.
BaW.call(this,E);this.UpdateActiveActionsOrder(E);},Akv:function(E){A.Device.DeviceClass.
BaX.call(this,E);this.UpdateAutoActions(E);},AGU:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCp.call(this,this);},AsH:function(){var K=this.K;var B;K.AaN.AnZ(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axg:function(E
){this.UpdateWeightRecordingMode(E);},AFG:function(E){this.UpdatePredictedTempValue(
E);},SQ:function(L9){A.ab5("%s%i",Qb,L9);},AFa:function(E){this.UpdateDemoMode(E
);},AET:function(E){this.UpdateAgeRegistration(E);},Axh:function(E){this.UpdateWeightRecordingScope(
E);},JU:function(E){this.UpdateGender(E);},ArT:function(E){this.UpdateIDLastUsedMale(
E);},ArS:function(E){this.UpdateIDLastUsedFemale(E);},Zo:function(E){this.UpdateAnimalListContent(
E);},AEV:function(E){this.UpdateAlarmListAction(E);},AFd:function(E){this.UpdateFlashLightInMeasureState(
E);},AeX:function(E){this.UpdateAnimalInfoContent(E);},AF6:function(E){this.UpdateWatchListAction(
E);},AFf:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArD(15359);this.ArE(MJ);},ResetAutoActions:function(G){this.Akv(S_);},Awu:
function(E){this.UpdateAnimalTypesString(E);},Ar7:function(E){this.UpdateTemperaturesHighString(
E);},Ar8:function(E){this.UpdateTemperaturesLowString(E);},Ass:function(G){this.
Awu(US);this.Ar8(Z3);this.Ar7(W5);this.Axf(3600);},AwN:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArZ:function(E){this.UpdateNaisIdLastUsedMale(E);},ArY:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw0:function(E){this.UpdateNaisIdIncrementMale(E);},AwZ:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Ba2.call(this);A._GetAutoObject(
A.kR.A8).Cd(53);},Anx:function(E){this.UpdateBootloaderMessage(E);},AEQ:function(
E){this.UpdateActionListAction(E);},Aws:function(E){this.UpdateActionListHideMeasured(
E);},Ul:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwF:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwG:function(E){this.UpdateDirectionOfCountingMale(
E);},AwH:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArU:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar0:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw1:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akx:function(E){this.UpdateEartagNrAssignmentMode(
E);},N1:function(E){this.UpdateBreed(E);},AFz:function(E){throw new Error(It);},
AFt:function(E){throw new Error(It);},AF0:function(E){throw new Error(It);},AE1:
function(E){throw new Error(It);},AFb:function(E){this.UpdateDryCowListAction(E);
},AJJ:function(A01){var Qz;switch(A01){case 15:Qz=false;break;default:Qz=true;}return Qz;
},AEZ:function(E){this.UpdateBirthListView(E);},AF1:function(E){this.UpdateTransferProgress(
E);},Ar9:function(E){this.UpdateTransferTarget(E);},AsG:function(){var B;A.pe([B=
A._GetAutoObject(C.Acp),B.Bgy],this);},Aw5:function(E){this.UpdatePremisesID(E);
},AwY:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFg:function(E){
this.UpdateFreshCowSpan(E);},AF2:function(E){this.UpdateUSBDevice(E.ZZ,E.AsQ,E.Asj
);},AxI:function(){var K=this.K;var B;this.Gf.FileName=K.Bjh.call(this,this.Gf.AgN
);switch(this.Gf.AgN){case 0:K.Bzc.call(this,(C.VS.isPrototypeOf(B=this.Gf)?B:null
));break;case 1:K.By$.call(this,(C.VS.isPrototypeOf(B=this.Gf)?B:null));break;case
2:K.Bze.call(this,(C.VS.isPrototypeOf(B=this.Gf)?B:null));break;default:throw new
Error(UT+this.Gf.AgN.toFixed());}},Arg:function(){return true;},AqC:function(){var
K=this.K;switch(this.Gf.AgN){case 0:A._GetAutoObject(A.Device.Device).A3(72,true
,A.jV,0,[this,K.A3q]);break;case 1:A._GetAutoObject(A.Device.Device).A3(90,true,
A.jV,0,[this,K.A3q]);break;case 2:A._GetAutoObject(A.Device.Device).A3(99,true,A.
jV,0,[this,K.A3q]);break;default:throw new Error(Z4+this.Gf.AgN.toFixed());}},AFN:
function(E){throw new Error(It);},Awt:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFP:function(E){this.UpdateShutdownTimer(E);},Ast:function(G){this.Awv(W6);
this.Asb(Z5);this.Asa(W7);this.Ar$(Z6);this.Asc(Z7);},Asa:function(E){this.UpdateWeightGainsHighString(
E);},Asb:function(E){this.UpdateWeightGainsLowString(E);},Awv:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar$:function(E){this.UpdateWeightGainsAverageString(E);},Asc:function(E){this.
UpdateWeightValueBirthString(E);},AwI:function(E){this.UpdateEvaluationAnimalType(
E);},Aw9:function(E){this.UpdateStartScreen(E);},AD0:function(){return 1;},AD1:function(
){return 1;},AFy:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axd:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nl:function(E){this.UpdateWhereAbouts(
E);},ArG:function(E){this.UpdateActiveMassRecordingFields(E);},ArH:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asq:function(G){this.ArG(A.jV);this.ArH(
UU);},AFw:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},AjC:function(
){A._GetAutoObject(C.Acp).AEY(true);return true;},Aqo:function(){var B;A._GetAutoObject(
C.Acp).Aqo(this);return true;},Aqn:function(){var B;A.pe([B=A._GetAutoObject(C.Acp
),B.Aqn],this);return true;},AuW:function(){var B;A.pe([B=A._GetAutoObject(C.Acp
),B.BhC],this);return true;},AwV:function(E){this.UpdateMaxWeightValuePrecision(
E);},Aw2:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw2(W8);},Aw3:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw3(O5);},Axj:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axj(O5);},Axe:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asp:function(AoE,AJf){this.Gf.E5();this.Gf.AgN=AoE;this.Gf.AU2=AJf;this.Gf.Fb(
1);this.Gf.Fb(2);this.AxI();},AE0:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFH:function(E){this.UpdatePurchasedListResetOnExport(E);},BB$:function(G){
switch(this.Ii){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},Bgu:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Aup.AGP)K.Ai3.
AnX(this);A.ab5("%s",Z8);},BCp:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Aup.AxD)K.AaN.AnX(this);},BC8:function(G){this.UpdateMeasureState(3);},AT_:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AK9],[
B=K.Aup,B.A9j,B.ATK],0);this.R1.AE$(A._GetAutoObject(A.Device.Helper).A62(8));this.
SA.AE$(A._GetAutoObject(A.Device.Helper).A62(8));},A$z:function(G){var AzO=A._NewObject(
A.Device.AxH,0);AzO.OnSetTimestamp(1711385184);AzO.AFu(1);AzO.AFA(0);AzO.AFK(0);
this.SA=AzO;var Azj=A._NewObject(A.Device.AxH,0);Azj.OnSetTimestamp(1711385184);
Azj.AFu(1);Azj.AFA(0);Azj.AFK(4);this.R1=Azj;var AlV=A._NewObject(A.Device.Avz,0
);AlV.AFr(1);AlV.AFs(0);AlV.AFq(0);AlV.AFY(1);AlV.AFZ(0);AlV.AFX(0);AlV.OnSetTimestamp(
1711385184);this.Q1=AlV;var Amm=A._NewObject(A.Device.Avz,0);Amm.AFr(1);Amm.AFs(
0);Amm.AFq(0);Amm.AFY(1);Amm.AFZ(0);Amm.AFX(0);Amm.OnSetTimestamp(1711385184);this.
SZ=Amm;this.AhL=A.aaR(A.acf.Unknown);},Bzy:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},Bzc:function(
Ac1){var K=this.K;var B;var Adc=O6;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cz.E3(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Adc=Adc+(((((((((((((((((
K.Apj.call(this,A._GetAutoObject(A.Device.Device).PY)+String.fromCharCode(0x3B))+
K.Apj.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A2k.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.Bds.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.Bdr.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.BzD.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Bdt.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.BzG.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.Apj.call(this
,Cz.NaisIdMother))+L3);Amd++;}}Ac1.Ava=Adc;Ac1.AGx=Amd;Ac1.Fb(3);},Apj:function(
Rq){if(!Rq)return A.jV;return Rq.toFixed();},A2k:function(AyZ){var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(AyZ);return Av.Format(Rn);},Bds:function(Ac0){if(!Ac0
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5H(Ac0).toFixed();},Bdr:
function(L6){var result=A.jV;switch(L6){case 0:result=W9;break;case 1:result=W_;
break;case 2:result=A.jV;break;default:A.ab5("%s",UV+L6.toFixed());}return result;
},BzD:function(AI_){if(!AI_)return A.jV;return AI_.toFixed();},Bdt:function(AfN){
if(!AfN)return A.jV;return AfN.toFixed();},BzG:function(Atq){return(Atq+1).toFixed(
);},A3q:function(G){var K=this.K;var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!As)return;if(As.PopupState===7){K.Bzy.call(this,this.Gf.FileName,
Z9,(C.VS.isPrototypeOf(B=this.Gf)?B:null).Ava);this.Gf.E5();}else if(As.PopupState===
8)this.Gf.E5();},By$:function(Ac1){var K=this.K;var B;var Adc=Z_;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B9();O++){var Azf=A.jV;if(Cz.Arf())Azf=K.BzI.call(this,Cz.FirstBodyWeight);Cz.E3(
O,A._GetAutoObject(A.Device.Device).An);Adc=Adc+(((((((((((K.Apj.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.BzE.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.Apj.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.BzC.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BzH.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azf)+L3);Amd++;}Ac1.Ava=Adc;Ac1.AGx=Amd;Ac1.Fb(3);},Bjh:function(
AoE){var AJ4=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoE){case 0:AJ4=Ac.Format(W$);break;case 1:AJ4=Ac.
Format(Xa);break;case 2:AJ4=Ac.Format(S$);break;default:throw new Error(UT+AoE.toFixed(
));}return AJ4;},BzE:function(Rq){return Rq.toFixed();},BzH:function(L6){var result=
A.jV;switch(L6){case 0:result=UW;break;case 1:result=UX;break;case 2:result=AcM;
break;default:A.ab5("%s",UV+L6.toFixed());}return result;},BzI:function(MP){if(MP<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak$(MP);},BzC:function(
AyZ){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(AyZ);return Av.Format(Ta);},
Bze:function(Ac1){var K=this.K;var B;var Adc=Z$;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cz.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Adc=Adc+(((((((((((((K.Apj.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A2k.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A2k.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.Bdr.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.Bdt.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.Bds.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.Apj.
call(this,A._GetAutoObject(A.Device.Device).PY))+L3);Amd++;}}Ac1.Ava=Adc;Ac1.AGx=
Amd;Ac1.Fb(3);},_Init:function(aArg){var K=this.K;A.acl.Gm._Init.call(K.Ai3={I:this
},0);A.acl.Gm._Init.call(K.AaN={I:this},0);K.__proto__=C.DeviceClass;this.Awx(100
);this.AnC(1);this.ArT(200);this.ArS(100);this.ArZ(276000912345678);this.ArY(276000923456789
);this.ArU(500);this.Ar0(276000901234567);this.N1(1);K.Ai3.HN(1);K.Ai3.Fr(1000);
K.AaN.WF(0);K.AaN.HN(1);K.AaN.Fr(750);K.AaN.B2=50000;this.Gf=A._NewObject(C.VS,0
);K.Ai3.SB=[this,K.BB$];K.Aup=A._GetAutoObject(C.UB);K.AaN.SB=[this,K.BC8];K.AaN.
Q=[this,this.AEN,this.AIZ];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai3._Done();K.AaN._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai3._ReInit();K.AaN._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AG$={A5:0,_Init:function(aArg){C.Wt._Init.call(this,aArg);this.__proto__=C.AG$;
},_className:"DeviceSimulation::UInt8"};C.AG9={A5:0,_Init:function(aArg){C.Wt._Init.
call(this,aArg);this.__proto__=C.AG9;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4z:0,AFQ:function(E){var K=this.K;K.A4z=K.A4z+(E-this.Dv());A.Device.
HelperClass.BaY.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
BaU.call(this)+K.A4z;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$F={AxD:true,AGP:false,ATJ:function(E){if(this.AGP===E)return;this.AGP=E;A.
abo([this,this.A9i,this.ATJ],0);},A9i:function(){return this.AGP;},ATK:function(
E){if(this.AxD===E)return;this.AxD=E;A.abo([this,this.A9j,this.ATK],0);},A9j:function(
){return this.AxD;},_Init:function(aArg){this.__proto__=C.A$F;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UB={_Init:function(){C.A$F._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UB._variants();
},_this:null};C.PopupContext={EV:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ci:function(
AH){var HF=A.Device.Rating.Ba0.call(this,AH);if(HF){var Ry=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LT(0,this.AnimalId);if(Ad
!==-1){var Jo=Ry.Oz();if(Jo<=0)A.ab5("%s",AfB);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.E3(Ad,Ry);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){Ry.A$y(Ad,5,this.Temperature);Ry.AkT(Ad,17,this.RatingTemperature);Ry.
Acm(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){Ry.AUM(Ad,18,this.BodyWeight);Ry.Acm(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){Ry.AUM(Ad,23,this.BodyWeight);Ry.Acm(
Ad,24,this.Timestamp);Ry.Ho(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGn(this)){var LQ=A._GetAutoObject(A.Device.Helper).ADb(this);Ry.AkT(Ad,13,LQ);
Ry.Acm(Ad,31,this.Timestamp);}Ry.OB(Jo);}}}return HF;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PZ={Gh:A.abi(512,null,null),Pk:0,AJy:
0,ALg:0,A4C:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKO:0,A36:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bek:512,AAf:-1,A1A:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af5:false,CF:function(Ad,A4){var Bf=this.TU(Ad);if(!!Bf)return Bf.
CF(A4);return 0;},V0:function(Ad,A4){var Bf=this.TU(Ad);if(!!Bf)return Bf.V0(A4);
return A.jV;},H2:function(Ad,A4){var Bf=this.TU(Ad);if(!!Bf)return Bf.H2(A4);return false;
},V1:function(Ad,A4){var Bf=this.TU(Ad);if(!!Bf)return Bf.V1(A4);return 0;},Sl:function(
Ad,A4){var Bf=this.TU(Ad);if(!!Bf)return Bf.Sl(A4);return 0;},Oz:function(){if(this.
Af5)throw new Error(Aaa);this.Af5=true;return 12345;},OB:function(AoQ){if(!this.
Af5)throw new Error(Xb);if(AoQ!==12345)throw new Error(Aab);this.Af5=false;return true;
},YF:function(){return this.A47(A._NewObject(C.AGw,0));},ZJ:function(Ad,A4,CZ){var
Bf=this.TU(Ad);if(!!Bf)return Bf.ZJ(A4,CZ);return false;},Ho:function(Ad,A4,CZ){
var Bf=this.TU(Ad);if(!!Bf)return Bf.Ho(A4,CZ);return false;},ZI:function(Ad,A4,
CZ){var Bf=this.TU(Ad);if(!!Bf)return Bf.ZI(A4,CZ);return false;},N7:function(Ad
,A4,CZ){var Bf=this.TU(Ad);if(!!Bf)return Bf.N7(A4,CZ);return false;},ZH:function(
Ad,A4,CZ){var Bf=this.TU(Ad);if(!!Bf)return Bf.ZH(A4,CZ);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bc3();switch(this.Id){case 0:{this.
Bek=256;A.pe([this,this.Bw4],this);}break;case 1:A.pe([this,this.Bw6],this);break;
case 3:A.pe([this,this.Bw3],this);break;case 4:A.pe([this,this.Bw5],this);break;
case 2:break;default:throw new Error(Xc+this.Id.toFixed());}},B9:function(){return this.
Pk;},KO:function(Ad,A4){var Bf=this.TU(Ad);if(!!Bf)return Bf.KO(A4);return 0;},UA:
function(Ad,A4,CZ){var Bf=this.TU(Ad);if(!!Bf)return Bf.UA(A4,CZ);return false;}
,E5:function(){this.Bc3();return true;},HJ:function(){return this.Bek;},A47:function(
Ad){if(this.Pk>=512)throw new Error(AhX);this.Gh.Set(this.Pk,Ad);this.Pk=this.Pk+
1;switch(this.Id){case 0:{this.AAf=this.Pk;this.Ho(this.Pk-1,0,this.AAf);}break;
case 1:{this.AAf=this.Pk-1;this.Ho(this.Pk-1,0,this.AAf);}break;default:;}A.pe([
this,this.Ako],this);return this.Pk-1;},TU:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gh.Get(aIndex);},Bc3:function(){var O;for(O=0;O<512;
O=O+1)this.Gh.Set(O,null);this.Pk=0;this.AJy=0;this.AKO=0;this.ALg=0;A.pe([this,
this.Ako],this);},AKi:function(){this.AJy=(this.AJy+1)%15;return this.A1A.Get(this.
AJy);},A2o:function(){this.ALg=(this.ALg+1)%10;return this.A4C.Get(this.ALg);},AJ6:
function(G){if(this.K&&this.K.AJ6)return this.K.AJ6.apply(this,arguments);else return C.
PZ.Bxa.apply(this,arguments);},Bxa:function(G){var B;var Ol=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhR(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhR(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhR(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhR(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhR(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhR(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhR(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhR(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var BgG=0;for(O=
1;O<=7;O=O+1){BgG=3680+(20*O);Ol=BgG>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhR(7-O),0,1,Ol,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bw4:function(s){this.AJ6(s);},AJ8:
function(G){if(this.K&&this.K.AJ8)return this.K.AJ8.apply(this,arguments);else return C.
PZ.Bxc.apply(this,arguments);},Bxc:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var AiC;var Bdj;for(O=0;O<32;O=O+1){var A1_=this.
BzU();for(;A1_>0;A1_=A1_-1){AiC=this.A2o();Bdj=A._GetAutoObject(A.Device.Converter
).AsI(0,AiC);this.AG(Ac,12310020,AiC,Bdj,this.AKi(),this.AKi(),this.AKi(),this.AKi(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiC=this.A2o();this.AG(Ac,276000312310001,AiC,A._GetAutoObject(A.Device.Converter
).AsI(0,AiC),1,3,3,3,0);AiC=this.A2o();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsI(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiC,A._GetAutoObject(
A.Device.Converter).AsI(1,AiC),2,3,3,3,0);},Bw6:function(s){this.AJ8(s);},A0:function(
J6,BxB,BxS,Bb7,Atq,L6,BxJ,BxO,BxL,BxM,MP,Bxm,BxQ,BxK,Eo,BxN,Ac0,AI_,AfN,BxX,BAb,
BAc,Bxr,BxZ){var Cz=A._NewObject(A.Device.Animal,0);Cz.Gr();Cz.Axi(0);Cz.Ae9(0);
Cz.Uq(false);Cz.AkC(false);if(BAc)Cz.PW(J6);if(BAb)Cz.Nj(J6);Cz.SJ(A._GetAutoObject(
A.Device.Helper).Sj(J6,BxZ&0xFF,Bxr&0xFF)|0);Cz.Ab3(BxB);Cz.AnD(BxS);Cz.Q6(Bb7);
Cz.Akw(Atq);Cz.JU(L6);Cz.AnV(BxJ);Cz.AGI(BxO);Cz.Ae5(BxM);Cz.Uq(BxL);Cz.ArV(BxK);
Cz.AwR(BxQ);Cz.AwC(Bxm);Cz.EC(Eo);Cz.Ae6(BxN);Cz.N1(Ac0);Cz.Aky(AI_);Cz.Nl(AfN);
Cz.AnF(BxX);Cz.Ci(this);if(MP>0)A._GetAutoObject(C.Ask).AG(Bb7,J6,0,0,0,0,0,0,MP
);},AG:function(L5,AcY,AoO,Bx8,Bxv,Bxw,Bxf,Bx_,Bxh){var B1=A._NewObject(A.Device.
Rating,0);B1.Gr();var BcL=A._GetAutoObject(C.Amy).AOB(26,AcY);if(BcL>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amy).CF(BcL,0));else A.ab5("%s%U",KZ,AcY);B1.OnSetTimestamp(L5
);B1.OnSetTemperature(AoO);B1.OnSetRatingTemperature(Bx8);B1.OnSetFaeces(Bxv);B1.
OnSetFeed(Bxw);B1.OnSetAppearance(Bxf);B1.OnSetRespiratory(Bx_);B1.OnSetBodyWeight(
Bxh);B1.Ci(this);},A6D:function(aColumn,A7){var O;for(O=0;O<this.Pk;O=O+1)if(this.
Gh.Get(O).CF(aColumn)===A7)return O;return-1;},BzU:function(){this.AKO=(this.AKO+
1)%10;return this.A36.Get(this.AKO);},AJ5:function(G){if(this.K&&this.K.AJ5)return this.
K.AJ5.apply(this,arguments);else return C.PZ.Bw$.apply(this,arguments);},Bw$:function(
G){this.AlP(10,AcN);this.AlP(20,Lw);this.AlP(30,AhY);this.AlP(31,Aoe);this.AlP(32
,Oc);},Bw3:function(s){this.AJ5(s);},AlP:function(J6,BxC){var AJs=A._NewObject(A.
Device.AnimalGroup,0);AJs.Gr();AJs.OnSetId(J6);AJs.AFi(BxC);AJs.Ci(this);},Abq:function(
){return this.AAf;},AOB:function(aColumn,A7){var O;for(O=0;O<this.Pk;O=O+1)if(this.
Gh.Get(O).KO(aColumn)===A7)return O;return-1;},AJ7:function(G){if(this.K&&this.K.
AJ7)return this.K.AJ7.apply(this,arguments);else return C.PZ.Bxb.apply(this,arguments
);},Bxb:function(G){this.Aaw(2016,216,6);this.Aaw(2017,217,7);this.Aaw(2018,218,
8);this.Aaw(2019,219,9);this.Aaw(2020,220,10);this.Aaw(2021,221,11);},Bw5:function(
s){this.AJ7(s);},Aaw:function(Ac7,Bxq,Bxp){var U_=A._NewObject(A.Device.CalfDeregistrations
,0);U_.Gr();U_.AkH(Ac7);U_.AwE(Bxq);U_.AwD(Bxp);U_.Ci(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gh=[]).__proto__=C.PZ.Gh;(this.A4C=[
]).__proto__=C.PZ.A4C;(this.A36=[]).__proto__=C.PZ.A36;(this.A1A=[]).__proto__=C.
PZ.A1A;this.__proto__=C.PZ;var J4=this._variants();if(J4){this.K={};J4._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gh,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.PZ._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.Amy={_Init:function(){C.PZ._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AuO={_Init:function(){C.PZ.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Ask={_Init:function(){C.PZ._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.GM={AlJ:A.
abi(512,null,null),E9:null,Apg:0,CF:function(Ad,A4){var Bf=this.Aau(Ad);if(!!Bf)
return Bf.CF(A4);return 0;},V0:function(Ad,A4){var Bf=this.Aau(Ad);if(!!Bf)return Bf.
V0(A4);return A.jV;},H2:function(Ad,A4){var Bf=this.Aau(Ad);if(!!Bf)return Bf.H2(
A4);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AF9(A._GetAutoObject(C.Amy));break;case 1:this.AF9(A._GetAutoObject(
C.Ask));break;case 3:this.AF9(A._GetAutoObject(C.AuO));break;case 4:this.AF9(A._GetAutoObject(
C.AuZ));break;case 2:break;default:throw new Error(Xc+this.Id.toFixed());}},B9:function(
){if(!!this.Filter)return this.Apg;else if(!!this.E9)return this.E9.Pk;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1y(this);},V1:function(Ad
,A4){var Bf=this.Aau(Ad);if(!!Bf)return Bf.V1(A4);return 0;},Sl:function(Ad,A4){
var Bf=this.Aau(Ad);if(!!Bf)return Bf.Sl(A4);return 0;},Oz:function(){if(!!this.
E9)return this.E9.Oz();return-1;},OB:function(AoQ){var HF=false;if(!!this.E9)HF=
this.E9.OB(AoQ);if(HF)A.pe([this,this.A1y],this);return HF;},YF:function(){if(!!
this.Filter)throw new Error(Xd+A._GetAutoObject(A.Device.Converter).BiY(this.Id,
this.Filter));if(!!this.E9)return this.E9.A47(A._NewObject(C.AGw,0));return-1;},
ZJ:function(Ad,A4,CZ){if(!this.E9.Af5)throw new Error(Aac);var Bf=this.Aau(Ad);if(
!!Bf)return Bf.ZJ(A4,CZ);return false;},Ho:function(Ad,A4,CZ){if(!this.E9.Af5)throw new
Error(Aac);var Bf=this.Aau(Ad);if(!!Bf)return Bf.Ho(A4,CZ);return false;},ZI:function(
Ad,A4,CZ){if(!this.E9.Af5)throw new Error(Aac);var Bf=this.Aau(Ad);if(!!Bf)return Bf.
ZI(A4,CZ);return false;},N7:function(Ad,A4,CZ){if(!this.E9.Af5)throw new Error(Aac
);var Bf=this.Aau(Ad);if(!!Bf)return Bf.N7(A4,CZ);return false;},ZH:function(Ad,
A4,CZ){if(!this.E9.Af5)throw new Error(Aac);var Bf=this.Aau(Ad);if(!!Bf)return Bf.
ZH(A4,CZ);return false;},LT:function(aColumn,A7){if(!!this.Filter){var O;for(O=0;
O<this.Apg;O=O+1)if(this.AlJ.Get(O).CF(aColumn)===A7)return O;return-1;}else if(
!!this.E9)return this.E9.A6D(aColumn,A7);return-1;},KO:function(Ad,A4){var Bf=this.
Aau(Ad);if(!!Bf)return Bf.KO(A4);return 0;},UA:function(Ad,A4,CZ){if(!this.E9.Af5
)throw new Error(Aac);var Bf=this.Aau(Ad);if(!!Bf)return Bf.UA(A4,CZ);return false;
},AgZ:function(aColumn,A7){if(!!this.Filter){var O;for(O=0;O<this.Apg;O=O+1)if(this.
AlJ.Get(O).KO(aColumn)===A7)return O;return-1;}else if(!!this.E9)return this.E9.
AOB(aColumn,A7);return-1;},E5:function(){if(!!this.E9)return this.E9.E5();return false;
},AjL:function(aColumn,A7){if(!!this.E9)return this.E9.A6D(aColumn,A7)>=0;return false;
},Aem:function(aColumn,A7){if(!!this.E9)return this.E9.AOB(aColumn,A7)>=0;return false;
},HJ:function(){if(!!this.E9)return this.E9.HJ();return 0;},Abq:function(){if(!!
this.E9)return this.E9.Abq();return-1;},QK:function(){if(!!this.E9)return this.E9.
Pk;return 0;},A1y:function(G){this.A1M();if(!!this.Filter&&!!this.E9){var O;for(
O=0;O<this.E9.B9();O=O+1){var A2c=true;var Aw=this.Filter.AOO();var Bf=this.E9.TU(
O);if(!!Bf)while(A2c&&!!Aw){A2c=Bf.BjY(Aw);Aw=this.Filter.AOT(Aw);}else A.ab5("%s"
,((AfC+O.toFixed())+AhZ)+this.E9.B9().toFixed());if(A2c){this.AlJ.Set(this.Apg,this.
E9.Gh.Get(O));this.Apg=this.Apg+1;}}}A.pe([this,this.Ako],this);},A1M:function(){
var O;for(O=0;O<512;O=O+1)this.AlJ.Set(O,null);this.Apg=0;},AF9:function(E){if(this.
E9===E)return;if(!!this.E9)A.z9([this,this.A4A],this.E9,0);this.E9=E;if(!!this.E9
){A.zV([this,this.A4A],this.E9,0);A.pe([this,this.A4A],this);}},A4A:function(G){
A.pe([this,this.A1y],this);},Aau:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlJ.Get(aIndex);}else if(!!this.E9
)return this.E9.TU(aIndex);A.ab5("%s",AcO+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlJ=[]).__proto__=C.GM.
AlJ;this.__proto__=C.GM;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlJ,D);if((B=this.E9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$G={KH:null,AdJ:null,Ox:null,AMU:false,AMV:
true,A4u:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab8(1);this.AdJ.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab8(2);A._GetAutoObject(A.Device.Device).Ar9(A._GetAutoObject(A.
Device.Device).An.QK());this.KH.Fr(A._GetAutoObject(A.Device.Device).Afr*50);this.
KH.B2=A._GetAutoObject(A.Device.Device).Afr;this.KH.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab8(3);this.AdJ.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab8(4);A._GetAutoObject(A.Device.Device).Ar9(A._GetAutoObject(A.Device.Device
).An.QK());this.KH.Fr(A._GetAutoObject(A.Device.Device).Afr*50);this.KH.B2=A._GetAutoObject(
A.Device.Device).Afr;this.KH.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab8(5);this.AdJ.Ar(true);}break;case 5:A.pe([this,this.Bgy],this);break;case 7:
case 6:break;default:A.ab5("%s%e",UY,A._GetAutoObject(A.Device.Device).SyncState
);}},BBv:function(G){this.AdJ.Ar(false);A.pe([this,this.A4u],this);},BCy:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab8(0);A.pe([this,this.A4u],this);}break;default:;}},Bgy:function(
G){this.AdJ.Ar(false);this.KH.Ar(false);A._GetAutoObject(A.Device.Device).Ab8(0);
},AEY:function(E){if(this.AMV===E)return;this.AMV=E;A.abo([this,this.BkY,this.AEY
],0);},BkY:function(){return this.AMV;},Aqn:function(G){var B;this.Ox.Cx=true;this.
Ox.B2=false;this.Ox.Fr(100);this.Ox.HN(1);this.Ox.Q=[this,this.ASA,this.AS9];A.pe([
B=this.Ox,B.AnX],this);},BhC:function(G){var B;this.Ox.Cx=true;this.Ox.B2=false;
this.Ox.Fr(400);this.Ox.Uo(200);this.Ox.HN(3);this.Ox.Q=[this,this.ASA,this.AS9];
this.AEY(false);A.pe([B=this.Ox,B.AnX],this);},AS9:function(E){if(this.AMU===E)return;
this.AMU=E;A.abo([this,this.ASA,this.AS9],0);},ASA:function(){return this.AMU;},
Aqo:function(G){var B;this.Ox.AnZ(this);this.AEY(false);},_Init:function(aArg){A.
acl.Gm._Init.call(this.KH={I:this},0);A.Core.Timer._Init.call(this.AdJ={I:this},
0);A.acl.TI._Init.call(this.Ox={I:this},0);this.__proto__=C.A$G;var B;this.KH.HN(
1);this.AdJ.PV(2000);this.KH.SB=[this,this.A4u];this.KH.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASZ,B.A0A];this.AdJ.MC=[this,this.BBv];A.h7++;},_Done:function(
){this.__proto__=null;this.KH._Done();this.AdJ._Done();this.Ox._Done();A.h7--;},
_ReInit:function(){this.KH._ReInit();this.AdJ._ReInit();this.Ox._ReInit();},_Mark:
function(D){var B;if((B=this.KH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acp={_Init:function(){C.A$G._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AG_={A5:0,_Init:function(aArg){C.Wt._Init.call(this,aArg);this.__proto__=C.AG_;}
,_className:"DeviceSimulation::UInt64"};C.AuZ={_Init:function(){C.PZ._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Du:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Ca.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X0={Ad8:null,CC:function(G){var K=this.K;A.ab5("%s",Aof);K.Ad8.Ar(true);},E4:
function(G){var K=this.K;if(K.Ad8.Bw===true){K.Ad8.Ar(false);A.ab5("%s",Aog);}},
BkP:function(G){var K=this.K;K.Ad8.Ar(false);A._GetAutoObject(A.kR.A8).Ab9(A._GetAutoObject(
A.Device.Device).AxK);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad8={I:this},0);K.__proto__=C.X0;this.AeO.H(Aoh);K.Ad8.PV(1500);this.UC.R(Aoi);
this.UC.Z(true);this.AeO.Ax(A.aaL(A.ach.ARK));K.Ad8.MC=[this,K.BkP];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad8._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad8._ReInit();},_Mark:function(D){var B;if((B=this.Ad8)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VS={Ava:A.jV,E5:function(){A.Device.VS.E5.call(this);this.Ava=A.jV;},_Init:function(
aArg){A.Device.VS._Init.call(this,aArg);this.__proto__=C.VS;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.ADW.__proto__=C.Wt;C.String.__proto__=C.Wt;C.AB2.__proto__=C.
Wt;C.AG$.__proto__=C.Wt;C.AG9.__proto__=C.Wt;C.PZ.__proto__=A.Device.ITable;C.GM.
__proto__=A.Device.ITable;C.AG_.__proto__=C.Wt;C.VS.__proto__=A.Device.VS;};C._ReInit=
function(){var B;if((B=C.UB._this))B._ReInit(),C.UB._ReInit.call(B);if((B=C.Amy.
_this))B._ReInit(),C.Amy._ReInit.call(B);if((B=C.AuO._this))B._ReInit(),C.AuO._ReInit.
call(B);if((B=C.Ask._this))B._ReInit(),C.Ask._ReInit.call(B);if((B=C.Acp._this))
B._ReInit(),C.Acp._ReInit.call(B);if((B=C.AuZ._this))B._ReInit(),C.AuZ._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.UB._this)&&(B._cycle!=D))B._Done(C.UB._this=
null);if((B=C.Amy._this)&&(B._cycle!=D))B._Done(C.Amy._this=null);if((B=C.AuO._this
)&&(B._cycle!=D))B._Done(C.AuO._this=null);if((B=C.Ask._this)&&(B._cycle!=D))B._Done(
C.Ask._this=null);if((B=C.Acp._this)&&(B._cycle!=D))B._Done(C.Acp._this=null);if((
B=C.AuZ._this)&&(B._cycle!=D))B._Done(C.AuZ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */