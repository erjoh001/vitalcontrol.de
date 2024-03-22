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
var Cc="ERROR: access to null Bool data in column [";var BF="]";var E7="Access to inexistent column index: ";
var Hp=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IS="Unsupported filter criterion class";var
Ir="Operator not handled:";var O1="1,8";var P3="INFO: Device.StartScan() called.";
var P4="INFO: Device.StopScan() called.";var CQ="V0.";var Fe=".";var Lu="\n";var
P5="Temp: ";var JZ="Battery: ";var N_="%%";var P6="Selected animal with row index";
var MG="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S8="1,2";var US="0,1,2";var Z8="3900,3950,4000";var W5="4050,4100,4150";var Is="Read only";
var UT="Unknown data export type: ";var Z9="Unhandled Device::DataExportType: ";
var W6="0,2,1";var Z_="650,150,700";var W7="800,200,900";var Z$="800,200,850";var
Aaa="40000,4000,0";var UU="32,7,34,18,23,14";var W8="16384";var P7="1,1024";var Aab=
"1,256,1024";var O2="Simulate Scan";var Rl="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var W9="%d.%m.%Y";var W_="1";var W$="2";var Xa="Unknown gender: ";var Aac="text/csv";
var Xb="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Xc="hit-geburt-%d-%m-%Y_%H-%M.csv";var S9="animals-%d-%m-%Y_%H-%M.csv";var UV=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var UW="herde-zugang-%d-%m-%Y_%H-%M.csv";var AcQ=
"M";var S_="F";var Aad="?";var Afz="%Y-%m-%d";var Aae="BNR15;LOM;ZUGA_DAT\n";var
Xd="Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";
var Aaf="ERROR: Cannot start transaction";var Aag="Nested transactions are not allowed.";
var AhV="Transaction not opened.";var J0="Wrong transaction ID.";var Aah="Unhandled TableId:";
var Lv="Maximum number of rows reached.";var AhW="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var Aof="10";var N$="20";var Xe="30";var Aog="31";var AhX="32";var AhY="Severe: filter set when inserting row into table: ";
var Rm="Warning: DeviceSimulation::TableData not in transaction";var UX="ERROR: Row not found with index [";
var Aoh="] while Rows Count = ";var Aoi="ERROR: trying to access an inexistent row with Index=";
var Aoj="Invalid Device::SyncState";var Aok="Forwarding to home screen after 500 milliseconds ...";
var AfA="Forwarding to home screen canceled...";var Ale=[0,58,240,208];var Aol="VitalControl\nstarting up \u2026";
C.Table={GL:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akr],K.GL,0);},
CF:function(Ad,A3){var K=this.K;return K.GL.CF(Ad,A3);},VZ:function(Ad,A3){var K=
this.K;return K.GL.VZ(Ad,A3);},H3:function(Ad,A3){var K=this.K;return K.GL.H3(Ad
,A3);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GL.OnSetId(
E);},B$:function(){var K=this.K;return K.GL.B$();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GL.Bk(E);},V0:function(Ad,A3){var K=this.K;return K.
GL.V0(Ad,A3);},Sl:function(Ad,A3){var K=this.K;return K.GL.Sl(Ad,A3);},Ox:function(
){var K=this.K;return K.GL.Ox();},Oz:function(AoT){var K=this.K;return K.GL.Oz(AoT
);},YJ:function(){var K=this.K;return K.GL.YJ();},ZO:function(Ad,A3,C0){var K=this.
K;return K.GL.ZO(Ad,A3,C0);},Hm:function(Ad,A3,C0){var K=this.K;return K.GL.Hm(Ad
,A3,C0);},ZN:function(Ad,A3,C0){var K=this.K;return K.GL.ZN(Ad,A3,C0);},N4:function(
Ad,A3,C0){var K=this.K;return K.GL.N4(Ad,A3,C0);},ZM:function(Ad,A3,C0){var K=this.
K;return K.GL.ZM(Ad,A3,C0);},LT:function(aColumn,A8){var K=this.K;return K.GL.LT(
aColumn,A8);},KN:function(Ad,A3){var K=this.K;return K.GL.KN(Ad,A3);},UA:function(
Ad,A3,C0){var K=this.K;return K.GL.UA(Ad,A3,C0);},AgW:function(aColumn,A8){var K=
this.K;return K.GL.AgW(aColumn,A8);},EX:function(){var K=this.K;return K.GL.EX();
},AjN:function(aColumn,A8){var K=this.K;return K.GL.AjN(aColumn,A8);},Aek:function(
aColumn,A8){var K=this.K;return K.GL.Aek(aColumn,A8);},HJ:function(){var K=this.
K;return K.GL.HJ();},Abu:function(){var K=this.K;return K.GL.Abu();},QG:function(
){var K=this.K;return K.GL.QG();},_Init:function(aArg){var K=this.K;C.GL._Init.call(
K.GL={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GL._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GL._ReInit();},_Mark:function(D){var B;if((B=this.GL)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGo={Tg:A.abi(42,null,null),CF:function(aColumn){var B;this.Aat(aColumn);var Aq=(
C.ADO.isPrototypeOf(B=this.Tg.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;
},VZ:function(aColumn){var B;this.Aat(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tg.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return A.jV;},H3:function(aColumn
){var B;this.Aat(aColumn);var Aq=(C.ABV.isPrototypeOf(B=this.Tg.Get(aColumn))?B:
null);if(!!Aq)return Aq.A4;else A.ab5("%s",(Cc+aColumn.toFixed())+BF);return false;
},Hm:function(aColumn,A8){this.Aat(aColumn);var Aq=A._NewObject(C.ADO,0);Aq.A4=A8;
this.Tg.Set(aColumn,Aq);return true;},ZM:function(aColumn,A8){this.Aat(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A4=A8;this.Tg.Set(aColumn,Aq);return true;},N4:
function(aColumn,A8){this.Aat(aColumn);var Aq=A._NewObject(C.ABV,0);Aq.A4=A8;this.
Tg.Set(aColumn,Aq);return true;},Aat:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E7+aColumn.toFixed())+Hp);},Bjf:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJF(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A4);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.Bye(this.
Sl(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A4);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
Byd(this.VZ(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A4);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.Byc(this.H3(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJF(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJF(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.Byh(this.V0(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A4)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Byf(this.KN(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A4);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Byg(this.KN(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A4,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zq&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OA&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJF(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A4);else throw new Error(IS);},AJF:function(Fs,Eb,GB){
switch(Eb){case 0:return Fs===GB;case 2:return Fs>GB;case 3:return Fs<GB;case 4:
return Fs.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fs!==GB;default:throw new
Error(Ir+Eb.toFixed());}},Byd:function(Fs,Eb,GB){switch(Eb){case 0:return Fs===GB;
case 2:return Fs>GB;case 3:return Fs<GB;case 4:{A.ab5("%s%e%s%i",Fs,Eb,GB,Fs.indexOf(
GB,0));return Fs.indexOf(GB,0)>=0;}case 5:return Fs!==GB;default:throw new Error(
Ir+Eb.toFixed());}},Byc:function(Fs,Eb,GB){switch(Eb){case 0:return Fs===GB;case
2:case 3:case 4:return false;case 5:return Fs!==GB;default:throw new Error(Ir+Eb.
toFixed());}},V0:function(aColumn){var B;this.Aat(aColumn);var Aq=(C.AG2.isPrototypeOf(
B=this.Tg.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;},ZO:function(aColumn
,A8){this.Aat(aColumn);var Aq=A._NewObject(C.AG2,0);Aq.A4=A8;this.Tg.Set(aColumn
,Aq);return true;},Byh:function(Fs,Eb,GB){switch(Eb){case 0:return Fs===GB;case 2:
return Fs>GB;case 3:return Fs<GB;case 4:return Fs.toFixed().indexOf(GB.toFixed()
,0)>=0;case 5:return Fs!==GB;default:throw new Error(Ir+Eb.toFixed());}},Sl:function(
aColumn){var B;this.Aat(aColumn);var Aq=(C.AG0.isPrototypeOf(B=this.Tg.Get(aColumn
))?B:null);if(!!Aq)return Aq.A4;return 0;},ZN:function(aColumn,A8){this.Aat(aColumn
);var Aq=A._NewObject(C.AG0,0);Aq.A4=A8;this.Tg.Set(aColumn,Aq);return true;},Bye:
function(Fs,Eb,GB){switch(Eb){case 0:return Fs===GB;case 2:return Fs>GB;case 3:return Fs<
GB;case 4:return Fs.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fs!==GB;default:
throw new Error(Ir+Eb.toFixed());}},KN:function(aColumn){var B;this.Aat(aColumn);
var Aq=(C.AG1.isPrototypeOf(B=this.Tg.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;
return 0;},UA:function(aColumn,A8){this.Aat(aColumn);var Aq=A._NewObject(C.AG1,0
);Aq.A4=A8;this.Tg.Set(aColumn,Aq);return true;},Byf:function(Fs,Eb,GB){switch(Eb
){case 0:return Fs===GB;case 2:return Fs>GB;case 3:return Fs<GB;case 4:return Fs.
toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fs!==GB;default:throw new Error(
Ir+Eb.toFixed());}},Byg:function(Fs,Eb,GB,Atr,AI3){var AKV=Fs.toFixed();AKV=A.ab2(
A.abV(AKV,AKV.length-Atr),AI3);Fs=Math.trunc(Fs/A._GetAutoObject(A.Device.Helper
).ApU(Atr))%A._GetAutoObject(A.Device.Helper).ApU(AI3);var ALn=A.ab0(GB,0,10);switch(
Eb){case 0:return Fs===ALn;case 2:return Fs>ALn;case 3:return Fs<ALn;case 4:return AKV.
indexOf(GB,0)>=0;case 5:return Fs!==ALn;default:throw new Error(Ir+Eb.toFixed());
}},_Init:function(aArg){(this.Tg=[]).__proto__=C.AGo.Tg;this.__proto__=C.AGo;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tg,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Ws={_Init:function(
aArg){this.__proto__=C.Ws;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADO={A4:0,_Init:function(aArg){C.Ws._Init.call(this,aArg);this.__proto__=C.ADO;
},_className:"DeviceSimulation::Int32"};C.String={A4:A.jV,_Init:function(aArg){C.
Ws._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABV={A4:false,_Init:function(aArg){C.Ws._Init.call(this,aArg);this.__proto__=
C.ABV;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aui:null,Ai6:null,AaT:
null,CP:function(){var K=this.K;K.A_7.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zt(3);A.zX([this,K.BfU],[B=K.Aui,B.A8V,B.ATn],0);this.UpdateAutoActions(
O1);K.A_7.call(this,this);this.Ast(this);this.Asu(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asr(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnD(languageValue);A.pe([this
,K.ATO],this);},Zt:function(E){this.UpdateActiveScreen(E);},Awr:function(E){this.
UpdateBatteryChargeState(E);},AEX:function(E){this.UpdateChargeActive(E);},Ar6:function(
E){this.UpdateScanState(E);},AwQ:function(E){this.UpdateMeasureState(E);},Aw4:function(
E){this.UpdateTempValue(E);},AnD:function(E){this.UpdateLanguage(E);},Aw5:function(
E){this.UpdateTemperatureUnit(E);},AEV:function(E){this.UpdateBrightness(E);},AFs:
function(E){this.UpdateMonitoring(E);},AxE:function(){var B;if(A._GetAutoObject(
C.UB).Axy){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK1(this
);}},AhM:function(){var B;A._GetAutoObject(A.Device.Helper).SS.An0(this);this.UpdateMeasureState(
0);},AhJ:function(){var K=this.K;A.ab5("%s",P3);this.UpdateScanState(1);A.pe([this
,K.BfU],this);},An1:function(){var K=this.K;var B;A.ab5("%s",P4);K.Ai6.An0(this);
this.UpdateScanState(0);},SetSystemTime:function(Aia){},Axx:function(){A.Device.
DeviceClass.Bav.call(this);this.Zt(1);},AGl:function(){A.Device.DeviceClass.Bat.
call(this);this.Zt(2);},Dt:function(E){this.UpdateOverlayMenu(E);},Aw$:function(
E){this.UpdateUnderTemp(E);},Acb:function(E){this.UpdateSyncState(E);},AC1:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Fe)+A.abz(0,9).toFixed(
))+Lu)+P5)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGP))+Lu)+JZ)+A.abz(1,100).toFixed(
))+N_;return aString;},PopupStateChanged:function(J2,Ae){var Agm=A._NewObject(C.
PopupContext,0);Agm.Id=J2;Agm.EY=Ae;this.AnP.Trigger(Agm,false);},AFU:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae_:function(E){this.UpdateVibrationOn(
E);},Aw0:function(E){this.UpdateRatingMode(E);},Ae0:function(E){this.UpdateFlashLightOn(
E);},Ur:function(E){this.UpdateTopLightOn(E);},WF:function(E){this.UpdateRGBTopLight(
E);},Awq:function(E){this.UpdateAutoRegistrationMode(E);},Ar7:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OL:function(E){this.UpdateDigitsID(
E);},PO:function(E){this.UpdateOffsetID(E);},AFY:function(E){this.UpdateWeightValue(
E);},AwN:function(E){this.UpdateMassUnit(E);},ArG:function(E){A.Device.DeviceClass.
Bap.call(this,E);this.UpdateActiveActions(E);},ArH:function(E){A.Device.DeviceClass.
Baq.call(this,E);this.UpdateActiveActionsOrder(E);},Aky:function(E){A.Device.DeviceClass.
Bar.call(this,E);this.UpdateAutoActions(E);},AGL:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBC.call(this,this);},AsI:function(){var K=this.K;var B;K.AaT.An0(this);this.
UpdateMeasureState(0);},EB:function(E){this.UpdateAnimalType(E);},Axa:function(E
){this.UpdateWeightRecordingMode(E);},AFx:function(E){this.UpdatePredictedTempValue(
E);},SP:function(L7){A.ab5("%s%i",P6,L7);},AE3:function(E){this.UpdateDemoMode(E
);},AEK:function(E){this.UpdateAgeRegistration(E);},Axb:function(E){this.UpdateWeightRecordingScope(
E);},JQ:function(E){this.UpdateGender(E);},ArW:function(E){this.UpdateIDLastUsedMale(
E);},ArV:function(E){this.UpdateIDLastUsedFemale(E);},Zu:function(E){this.UpdateAnimalListContent(
E);},AEM:function(E){this.UpdateAlarmListAction(E);},AE6:function(E){this.UpdateFlashLightInMeasureState(
E);},AeV:function(E){this.UpdateAnimalInfoContent(E);},AFX:function(E){this.UpdateWatchListAction(
E);},AE8:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArG(15359);this.ArH(MG);},ResetAutoActions:function(G){this.Aky(S8);},Awo:
function(E){this.UpdateAnimalTypesString(E);},Ar9:function(E){this.UpdateTemperaturesHighString(
E);},Ar_:function(E){this.UpdateTemperaturesLowString(E);},Ast:function(G){this.
Awo(US);this.Ar_(Z8);this.Ar9(W5);this.Aw$(3600);},AwH:function(E){this.UpdateFreshCowsHideMeasured(
E);},Ar2:function(E){this.UpdateNaisIdLastUsedMale(E);},Ar1:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwU:function(E){this.UpdateNaisIdIncrementMale(E);},AwT:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Baw.call(this);A._GetAutoObject(
A.kR.A$).Cf(53);},Any:function(E){this.UpdateBootloaderMessage(E);},AEH:function(
E){this.UpdateActionListAction(E);},Awm:function(E){this.UpdateActionListHideMeasured(
E);},Uk:function(E){this.UpdateAnimalIdGenerationMethod(E);},Awz:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwA:function(E){this.UpdateDirectionOfCountingMale(
E);},AwB:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArX:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar3:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwV:function(E){this.UpdateNaisIdIncrementUnisex(E);},AkA:function(E){this.UpdateEartagNrAssignmentMode(
E);},NY:function(E){this.UpdateBreed(E);},AFq:function(E){throw new Error(Is);},
AFk:function(E){throw new Error(Is);},AFR:function(E){throw new Error(Is);},AER:
function(E){throw new Error(Is);},AE4:function(E){this.UpdateDryCowListAction(E);
},AJC:function(A0D){var Qt;switch(A0D){case 15:Qt=false;break;default:Qt=true;}return Qt;
},AEQ:function(E){this.UpdateBirthListView(E);},AFS:function(E){this.UpdateTransferProgress(
E);},Ar$:function(E){this.UpdateTransferTarget(E);},AsH:function(){var B;A.pe([B=
A._GetAutoObject(C.Act),B.BfY],this);},AwZ:function(E){this.UpdatePremisesID(E);
},AwS:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE9:function(E){
this.UpdateFreshCowSpan(E);},AFT:function(E){this.UpdateUSBState(E);},AxD:function(
){var K=this.K;var B;this.FQ.FileName=K.BiA.call(this,this.FQ.AgK);switch(this.FQ.
AgK){case 0:K.Byr.call(this,(C.TL.isPrototypeOf(B=this.FQ)?B:null));break;case 1:
K.Byn.call(this,(C.TL.isPrototypeOf(B=this.FQ)?B:null));break;case 2:K.Bys.call(
this,(C.TL.isPrototypeOf(B=this.FQ)?B:null));break;case 3:K.Byq.call(this,(C.TL.
isPrototypeOf(B=this.FQ)?B:null));break;default:throw new Error(UT+this.FQ.AgK.toFixed(
));}},Arj:function(){return true;},AqF:function(){var K=this.K;switch(this.FQ.AgK
){case 0:A._GetAutoObject(A.Device.Device).A7(72,true,A.jV,0,[this,K.A22]);break;
case 1:A._GetAutoObject(A.Device.Device).A7(90,true,A.jV,0,[this,K.A22]);break;case
2:case 3:A._GetAutoObject(A.Device.Device).A7(99,true,A.jV,0,[this,K.A22]);break;
default:throw new Error(Z9+this.FQ.AgK.toFixed());}},AFE:function(E){throw new Error(
Is);},Awn:function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFG:function(
E){this.UpdateShutdownTimer(E);},Asu:function(G){this.Awp(W6);this.Asd(Z_);this.
Asc(W7);this.Asb(Z$);this.Ase(Aaa);},Asc:function(E){this.UpdateWeightGainsHighString(
E);},Asd:function(E){this.UpdateWeightGainsLowString(E);},Awp:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Asb:function(E){this.UpdateWeightGainsAverageString(E);},Ase:function(E){this.
UpdateWeightValueBirthString(E);},AwC:function(E){this.UpdateEvaluationAnimalType(
E);},Aw3:function(E){this.UpdateStartScreen(E);},ADS:function(){return 1;},ADT:function(
){return 1;},AFp:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw9:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AE2:function(E){this.UpdateDataExportDestination(
E);},Nf:function(E){this.UpdateWhereAbouts(E);},ArJ:function(E){this.UpdateActiveMassRecordingFields(
E);},ArK:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},Asr:function(
G){this.ArJ(A.jV);this.ArK(UU);},AFn:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},AjE:function(){A._GetAutoObject(C.Act).AEP(true);return true;},Aqr:function(
){var B;A._GetAutoObject(C.Act).Aqr(this);return true;},Aqq:function(){var B;A.pe([
B=A._GetAutoObject(C.Act),B.Aqq],this);return true;},AuO:function(){var B;A.pe([
B=A._GetAutoObject(C.Act),B.Bg3],this);return true;},AwP:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwW:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwW(W8);},AwX:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwX(P7);},Axd:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axd(Aab);},Aw_:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},AnS:function(AoH){this.FQ.EX();this.FQ.AgK=AoH;this.FQ.EW(1);this.FQ.EW(2);this.
AxD();},BBl:function(G){switch(this.KH){case 34:case 35:case 32:case 45:case 49:
case 55:case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2
);}break;case 15:break;default:this.UpdateScanState(4);}},BfU:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.Aui.AGG)K.Ai6.AnY(this);A.ab5("%s",O2);}
,BBC:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.Aui.Axy)K.AaT.
AnY(this);},BCj:function(G){this.UpdateMeasureState(3);},ATO:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AK1],[B=K.Aui,B.A8W,B.ATo],0
);this.R1.AE1(A._GetAutoObject(A.Device.Helper).A6F(8));this.SA.AE1(A._GetAutoObject(
A.Device.Helper).A6F(8));},A_7:function(G){var AzJ=A._NewObject(A.Device.AxC,0);
AzJ.OnSetTimestamp(1710328383);AzJ.AFl(1);AzJ.AFr(0);AzJ.AFA(0);this.SA=AzJ;var Azc=
A._NewObject(A.Device.AxC,0);Azc.OnSetTimestamp(1710328383);Azc.AFl(1);Azc.AFr(0
);Azc.AFA(4);this.R1=Azc;var AlW=A._NewObject(A.Device.Avq,0);AlW.AFi(1);AlW.AFj(
0);AlW.AFh(0);AlW.AFP(1);AlW.AFQ(0);AlW.AFO(0);AlW.OnSetTimestamp(1710328383);this.
QX=AlW;var Amm=A._NewObject(A.Device.Avq,0);Amm.AFi(1);Amm.AFj(0);Amm.AFh(0);Amm.
AFP(1);Amm.AFQ(0);Amm.AFO(0);Amm.OnSetTimestamp(1710328383);this.SY=Amm;this.AhI=
A.aaR(A.acf.Unknown);},ByN:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Byr:function(Ta){var K=this.K;
var B;var Tf=Rl;var Cj=A._NewObject(A.Device.Animal,0);var O;var AdF=0;for(O=0;O<
A._GetAutoObject(A.Device.Device).An.B$();O++){Cj.EU(O,A._GetAutoObject(A.Device.
Device).An);if(Cj.IsRegistrationNoticePending&&(Cj.NaisId>0)){Tf=Tf+(((((((((((((((((
K.AiE.call(this,A._GetAutoObject(A.Device.Device).Uw)+String.fromCharCode(0x3B))+
K.AiE.call(this,Cj.NaisId))+String.fromCharCode(0x3B))+K.AJ5.call(this,Cj.DateOfBirth
))+String.fromCharCode(0x3B))+K.BcR.call(this,Cj.Breed))+String.fromCharCode(0x3B
))+K.BcQ.call(this,Cj.Gender))+String.fromCharCode(0x3B))+K.ByS.call(this,Cj.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcS.call(this,Cj.WhereAbouts))+String.fromCharCode(
0x3B))+K.ByV.call(this,Cj.BirthType))+String.fromCharCode(0x3B))+K.AiE.call(this
,Cj.NaisIdMother))+Lu);AdF++;}}Ta.AqP=Tf;Ta.Axr=AdF;Ta.EW(3);},AiE:function(Rq){
if(!Rq)return A.jV;return Rq.toFixed();},AJ5:function(AyS){var Au=A._NewObject(A.
Core.Bs,0);Au.Initialize(AyS);return Au.Format(W9);},BcR:function(Ac0){if(!Ac0)return A.
jV;return A._GetAutoObject(A.Device.Converter).A5e(Ac0).toFixed();},BcQ:function(
L4){var result=A.jV;switch(L4){case 0:result=W_;break;case 1:result=W$;break;case
2:result=A.jV;break;default:A.ab5("%s",Xa+L4.toFixed());}return result;},ByS:function(
AI4){if(!AI4)return A.jV;return AI4.toFixed();},BcS:function(AfL){if(!AfL)return A.
jV;return AfL.toFixed();},ByV:function(Atk){return(Atk+1).toFixed();},A22:function(
G){var K=this.K;var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===7))K.ByN.call(this,this.FQ.FileName,Aac,(C.TL.isPrototypeOf(
B=this.FQ)?B:null).AqP);},Byn:function(Ta){var K=this.K;var B;var Tf=Xb;var Cj=A.
_NewObject(A.Device.Animal,0);var O;var AdF=0;for(O=0;O<A._GetAutoObject(A.Device.
Device).An.B$();O++){var Ay_=A.jV;if(Cj.Ari())Ay_=K.ByX.call(this,Cj.FirstBodyWeight
);Cj.EU(O,A._GetAutoObject(A.Device.Device).An);Tf=Tf+(((((((((((K.AiE.call(this
,Cj.NaisId)+String.fromCharCode(0x3B))+K.ByT.call(this,Cj.VisualId))+String.fromCharCode(
0x3B))+K.AiE.call(this,Cj.TransponderId))+String.fromCharCode(0x3B))+K.ByR.call(
this,Cj.DateOfBirth))+String.fromCharCode(0x3B))+K.ByW.call(this,Cj.Gender))+String.
fromCharCode(0x3B))+Ay_)+Lu);AdF++;}Ta.AqP=Tf;Ta.Axr=AdF;Ta.EW(3);},BiA:function(
AoH){var AzI=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dq());switch(AoH){case 0:AzI=Ac.Format(Xc);break;case 1:AzI=Ac.
Format(S9);break;case 2:AzI=Ac.Format(UV);break;case 3:AzI=Ac.Format(UW);break;default:
throw new Error(UT+AoH.toFixed());}return AzI;},ByT:function(Rq){return Rq.toFixed(
);},ByW:function(L4){var result=A.jV;switch(L4){case 0:result=AcQ;break;case 1:result=
S_;break;case 2:result=Aad;break;default:A.ab5("%s",Xa+L4.toFixed());}return result;
},ByX:function(ML){if(ML<=0)return A.jV;return A._GetAutoObject(A.Device.Converter
).Alb(ML);},ByR:function(AyS){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyS
);return Au.Format(Afz);},Bys:function(Ta){var K=this.K;var B;var Tf=Aae;var Cj=
A._NewObject(A.Device.Animal,0);var O;var AdF=0;for(O=0;O<A._GetAutoObject(A.Device.
Device).An.B$();O++){Cj.EU(O,A._GetAutoObject(A.Device.Device).An);if(Cj.IsRegistrationNoticePending&&(
Cj.NaisId>0)){Tf=Tf+(((((K.AiE.call(this,A._GetAutoObject(A.Device.Device).Uw)+String.
fromCharCode(0x3B))+K.AiE.call(this,Cj.NaisId))+String.fromCharCode(0x3B))+K.AJ5.
call(this,A._GetAutoObject(A.Device.Helper).Dq()))+Lu);AdF++;}}Ta.AqP=Tf;Ta.Axr=
AdF;Ta.EW(3);},Byq:function(Ta){var K=this.K;var B;var Tf=Xd;var Cj=A._NewObject(
A.Device.Animal,0);var O;var AdF=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B$();O++){Cj.EU(O,A._GetAutoObject(A.Device.Device).An);if(Cj.IsRegistrationNoticePending&&(
Cj.NaisId>0)){Tf=Tf+(((((((((((((K.AiE.call(this,Cj.NaisId)+String.fromCharCode(
0x3B))+K.AJ5.call(this,Cj.DateOfBirth))+String.fromCharCode(0x3B))+K.BcQ.call(this
,Cj.Gender))+String.fromCharCode(0x3B))+K.BcS.call(this,Cj.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcR.call(this,Cj.Breed))+String.fromCharCode(0x3B))+K.AJ5.
call(this,A._GetAutoObject(A.Device.Helper).Dq()))+String.fromCharCode(0x3B))+K.
AiE.call(this,Cj.TransponderId))+Lu);AdF++;}}Ta.AqP=Tf;Ta.Axr=AdF;Ta.EW(3);},_Init:
function(aArg){var K=this.K;A.acl.Gm._Init.call(K.Ai6={I:this},0);A.acl.Gm._Init.
call(K.AaT={I:this},0);K.__proto__=C.DeviceClass;this.Awr(100);this.AnD(1);this.
ArW(200);this.ArV(100);this.Ar2(276000912345678);this.Ar1(276000923456789);this.
ArX(500);this.Ar3(276000901234567);this.NY(1);K.Ai6.HO(1);K.Ai6.Fp(1000);K.AaT.WG(
0);K.AaT.HO(1);K.AaT.Fp(750);K.AaT.B2=50000;this.FQ=A._NewObject(C.TL,0);K.Ai6.SB=[
this,K.BBl];K.Aui=A._GetAutoObject(C.UB);K.AaT.SB=[this,K.BCj];K.AaT.Q=[this,this.
AEE,this.AIS];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=
null;K.Ai6._Done();K.AaT._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Ai6.
_ReInit();K.AaT._ReInit();K.CP.call(this);},_Mark:function(D){var B;if((B=this.Aui
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){return A.
aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"};C.AG2={
A4:0,_Init:function(aArg){C.Ws._Init.call(this,aArg);this.__proto__=C.AG2;},_className:
"DeviceSimulation::UInt8"};C.AG0={A4:0,_Init:function(aArg){C.Ws._Init.call(this
,aArg);this.__proto__=C.AG0;},_className:"DeviceSimulation::UInt32"};C.HelperClass={
A38:0,AFH:function(E){var K=this.K;K.A38=K.A38+(E-this.Dq());A.Device.HelperClass.
Bas.call(this,E);},Dq:function(){var K=this.K;return A.Device.HelperClass.Bao.call(
this)+K.A38;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;A.h7++;
},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$b={Axy:false,AGG:false,ATn:function(E){if(this.AGG===E)return;this.AGG=E;A.
abo([this,this.A8V,this.ATn],0);},A8V:function(){return this.AGG;},ATo:function(
E){if(this.Axy===E)return;this.Axy=E;A.abo([this,this.A8W,this.ATo],0);},A8W:function(
){return this.Axy;},_Init:function(aArg){this.__proto__=C.A$b;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UB={_Init:function(){C.A$b._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UB._variants();
},_this:null};C.PopupContext={EY:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cg:function(
AH){var HF=A.Device.Rating.Bau.call(this,AH);if(HF){var Rx=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LT(0,this.AnimalId);if(Ad
!==-1){var Jm=Rx.Ox();if(Jm<=0)A.ab5("%s",Aaf);else{var Cj=A._NewObject(A.Device.
Animal,0);Cj.EU(Ad,Rx);if((this.Temperature>0)&&(Cj.TimestampLastTemperature<this.
Timestamp)){Rx.A_6(Ad,5,this.Temperature);Rx.AkV(Ad,17,this.RatingTemperature);Rx.
Acq(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cj.TimestampLastWeighing<=this.
Timestamp){Rx.AUq(Ad,18,this.BodyWeight);Rx.Acq(Ad,19,this.Timestamp);}if(!Cj.TimestampFirstWeighing||(
Cj.TimestampFirstWeighing>=this.Timestamp)){Rx.AUq(Ad,23,this.BodyWeight);Rx.Acq(
Ad,24,this.Timestamp);Rx.Hm(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGe(this)){var LQ=A._GetAutoObject(A.Device.Helper).AC5(this);Rx.AkV(Ad,13,LQ);
Rx.Acq(Ad,31,this.Timestamp);}Rx.Oz(Jm);}}}return HF;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PT={Gi:A.abi(512,null,null),Pf:0,AJr:
0,AK_:0,A3$:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKG:0,A3F:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BdJ:512,AAa:-1,A1b:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af3:false,CF:function(Ad,A3){var Bf=this.TT(Ad);if(!!Bf)return Bf.
CF(A3);return 0;},VZ:function(Ad,A3){var Bf=this.TT(Ad);if(!!Bf)return Bf.VZ(A3);
return A.jV;},H3:function(Ad,A3){var Bf=this.TT(Ad);if(!!Bf)return Bf.H3(A3);return false;
},V0:function(Ad,A3){var Bf=this.TT(Ad);if(!!Bf)return Bf.V0(A3);return 0;},Sl:function(
Ad,A3){var Bf=this.TT(Ad);if(!!Bf)return Bf.Sl(A3);return 0;},Ox:function(){if(this.
Af3)throw new Error(Aag);this.Af3=true;return 12345;},Oz:function(AoT){if(!this.
Af3)throw new Error(AhV);if(AoT!==12345)throw new Error(J0);this.Af3=false;return true;
},YJ:function(){return this.A4E(A._NewObject(C.AGo,0));},ZO:function(Ad,A3,C0){var
Bf=this.TT(Ad);if(!!Bf)return Bf.ZO(A3,C0);return false;},Hm:function(Ad,A3,C0){
var Bf=this.TT(Ad);if(!!Bf)return Bf.Hm(A3,C0);return false;},ZN:function(Ad,A3,
C0){var Bf=this.TT(Ad);if(!!Bf)return Bf.ZN(A3,C0);return false;},N4:function(Ad
,A3,C0){var Bf=this.TT(Ad);if(!!Bf)return Bf.N4(A3,C0);return false;},ZM:function(
Ad,A3,C0){var Bf=this.TT(Ad);if(!!Bf)return Bf.ZM(A3,C0);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bcq();switch(this.Id){case 0:{this.
BdJ=256;A.pe([this,this.Bwf],this);}break;case 1:A.pe([this,this.Bwh],this);break;
case 3:A.pe([this,this.Bwe],this);break;case 4:A.pe([this,this.Bwg],this);break;
case 2:break;default:throw new Error(Aah+this.Id.toFixed());}},B$:function(){return this.
Pf;},KN:function(Ad,A3){var Bf=this.TT(Ad);if(!!Bf)return Bf.KN(A3);return 0;},UA:
function(Ad,A3,C0){var Bf=this.TT(Ad);if(!!Bf)return Bf.UA(A3,C0);return false;}
,EX:function(){this.Bcq();return true;},HJ:function(){return this.BdJ;},A4E:function(
Ad){if(this.Pf>=512)throw new Error(Lv);this.Gi.Set(this.Pf,Ad);this.Pf=this.Pf+
1;switch(this.Id){case 0:{this.AAa=this.Pf;this.Hm(this.Pf-1,0,this.AAa);}break;
case 1:{this.AAa=this.Pf-1;this.Hm(this.Pf-1,0,this.AAa);}break;default:;}A.pe([
this,this.Akr],this);return this.Pf-1;},TT:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gi.Get(aIndex);},Bcq:function(){var O;for(O=0;O<512;
O=O+1)this.Gi.Set(O,null);this.Pf=0;this.AJr=0;this.AKG=0;this.AK_=0;A.pe([this,
this.Akr],this);},AKb:function(){this.AJr=(this.AJr+1)%15;return this.A1b.Get(this.
AJr);},A11:function(){this.AK_=(this.AK_+1)%10;return this.A3$.Get(this.AK_);},AJY:
function(G){if(this.K&&this.K.AJY)return this.K.AJY.apply(this,arguments);else return C.
PT.Bwn.apply(this,arguments);},Bwn:function(G){var B;var Oh=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhO(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhO(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhO(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhO(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhO(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhO(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhO(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhO(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var Bf6=0;for(O=
1;O<=7;O=O+1){Bf6=3680+(20*O);Oh=Bf6>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhO(7-O),0,1,Oh,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bwf:function(s){this.AJY(s);},AJ0:
function(G){if(this.K&&this.K.AJ0)return this.K.AJ0.apply(this,arguments);else return C.
PT.Bwp.apply(this,arguments);},Bwp:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dq();var O;Ac=Ac-2678400;var AiD;var BcI;for(O=0;O<32;O=O+1){var A1M=this.
By9();for(;A1M>0;A1M=A1M-1){AiD=this.A11();BcI=A._GetAutoObject(A.Device.Converter
).AsJ(0,AiD);this.AG(Ac,12310020,AiD,BcI,this.AKb(),this.AKb(),this.AKb(),this.AKb(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiD=this.A11();this.AG(Ac,276000312310001,AiD,A._GetAutoObject(A.Device.Converter
).AsJ(0,AiD),1,3,3,3,0);AiD=this.A11();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsJ(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiD,A._GetAutoObject(
A.Device.Converter).AsJ(1,AiD),2,3,3,3,0);},Bwh:function(s){this.AJ0(s);},A0:function(
J2,BwO,Bw5,Bbx,Atk,L4,BwW,Bw1,BwY,BwZ,ML,Bwz,Bw3,BwX,En,Bw0,Ac0,AI4,AfL,Bw_,Bzq,
Bzr,BwE,Bxa){var Cj=A._NewObject(A.Device.Animal,0);Cj.Gr();Cj.Axc(0);Cj.Ae7(0);
Cj.Uo(false);Cj.AkF(false);if(Bzr)Cj.PQ(J2);if(Bzq)Cj.Nd(J2);Cj.SI(A._GetAutoObject(
A.Device.Helper).Sj(J2,Bxa&0xFF,BwE&0xFF)|0);Cj.Ab8(BwO);Cj.AnE(Bw5);Cj.Q3(Bbx);
Cj.Akz(Atk);Cj.JQ(L4);Cj.AnW(BwW);Cj.AGz(Bw1);Cj.Ae3(BwZ);Cj.Uo(BwY);Cj.ArY(BwX);
Cj.AwL(Bw3);Cj.Aww(Bwz);Cj.EB(En);Cj.Ae4(Bw0);Cj.NY(Ac0);Cj.AkB(AI4);Cj.Nf(AfL);
Cj.AnG(Bw_);Cj.Cg(this);if(ML>0)A._GetAutoObject(C.Asl).AG(Bbx,J2,0,0,0,0,0,0,ML
);},AG:function(L3,AcY,AoR,Bxk,BwI,BwJ,Bwr,Bxm,Bwt){var B1=A._NewObject(A.Device.
Rating,0);B1.Gr();var Bb$=A._GetAutoObject(C.Amy).AOt(26,AcY);if(Bb$>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amy).CF(Bb$,0));else A.ab5("%s%U",AhW,AcY);B1.OnSetTimestamp(
L3);B1.OnSetTemperature(AoR);B1.OnSetRatingTemperature(Bxk);B1.OnSetFaeces(BwI);
B1.OnSetFeed(BwJ);B1.OnSetAppearance(Bwr);B1.OnSetRespiratory(Bxm);B1.OnSetBodyWeight(
Bwt);B1.Cg(this);},A6g:function(aColumn,A8){var O;for(O=0;O<this.Pf;O=O+1)if(this.
Gi.Get(O).CF(aColumn)===A8)return O;return-1;},By9:function(){this.AKG=(this.AKG+
1)%10;return this.A3F.Get(this.AKG);},AJX:function(G){if(this.K&&this.K.AJX)return this.
K.AJX.apply(this,arguments);else return C.PT.Bwm.apply(this,arguments);},Bwm:function(
G){this.AlQ(10,Aof);this.AlQ(20,N$);this.AlQ(30,Xe);this.AlQ(31,Aog);this.AlQ(32
,AhX);},Bwe:function(s){this.AJX(s);},AlQ:function(J2,BwP){var AJl=A._NewObject(
A.Device.AnimalGroup,0);AJl.Gr();AJl.OnSetId(J2);AJl.AE$(BwP);AJl.Cg(this);},Abu:
function(){return this.AAa;},AOt:function(aColumn,A8){var O;for(O=0;O<this.Pf;O=
O+1)if(this.Gi.Get(O).KN(aColumn)===A8)return O;return-1;},AJZ:function(G){if(this.
K&&this.K.AJZ)return this.K.AJZ.apply(this,arguments);else return C.PT.Bwo.apply(
this,arguments);},Bwo:function(G){this.AaD(2016,216,6);this.AaD(2017,217,7);this.
AaD(2018,218,8);this.AaD(2019,219,9);this.AaD(2020,220,10);this.AaD(2021,221,11);
},Bwg:function(s){this.AJZ(s);},AaD:function(Ac6,BwD,BwC){var U9=A._NewObject(A.
Device.CalfDeregistrations,0);U9.Gr();U9.AkK(Ac6);U9.Awy(BwD);U9.Awx(BwC);U9.Cg(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gi=[]).
__proto__=C.PT.Gi;(this.A3$=[]).__proto__=C.PT.A3$;(this.A3F=[]).__proto__=C.PT.
A3F;(this.A1b=[]).__proto__=C.PT.A1b;this.__proto__=C.PT;var Lw=this._variants();
if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Gi,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.PT._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Amy={_Init:function(){C.PT._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AuG={_Init:function(){C.PT._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.Asl={_Init:
function(){C.PT._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GL={AlK:A.abi(512,null,null),E_:null,Apj:
0,CF:function(Ad,A3){var Bf=this.AaB(Ad);if(!!Bf)return Bf.CF(A3);return 0;},VZ:
function(Ad,A3){var Bf=this.AaB(Ad);if(!!Bf)return Bf.VZ(A3);return A.jV;},H3:function(
Ad,A3){var Bf=this.AaB(Ad);if(!!Bf)return Bf.H3(A3);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AF0(A._GetAutoObject(
C.Amy));break;case 1:this.AF0(A._GetAutoObject(C.Asl));break;case 3:this.AF0(A._GetAutoObject(
C.AuG));break;case 4:this.AF0(A._GetAutoObject(C.AuR));break;case 2:break;default:
throw new Error(Aah+this.Id.toFixed());}},B$:function(){if(!!this.Filter)return this.
Apj;else if(!!this.E_)return this.E_.Pf;return 0;},Bk:function(E){A.Device.ITable.
Bk.call(this,E);this.A0$(this);},V0:function(Ad,A3){var Bf=this.AaB(Ad);if(!!Bf)
return Bf.V0(A3);return 0;},Sl:function(Ad,A3){var Bf=this.AaB(Ad);if(!!Bf)return Bf.
Sl(A3);return 0;},Ox:function(){if(!!this.E_)return this.E_.Ox();return-1;},Oz:function(
AoT){var HF=false;if(!!this.E_)HF=this.E_.Oz(AoT);if(HF)A.pe([this,this.A0$],this
);return HF;},YJ:function(){if(!!this.Filter)throw new Error(AhY+A._GetAutoObject(
A.Device.Converter).Bif(this.Id,this.Filter));if(!!this.E_)return this.E_.A4E(A.
_NewObject(C.AGo,0));return-1;},ZO:function(Ad,A3,C0){if(!this.E_.Af3)throw new Error(
Rm);var Bf=this.AaB(Ad);if(!!Bf)return Bf.ZO(A3,C0);return false;},Hm:function(Ad
,A3,C0){if(!this.E_.Af3)throw new Error(Rm);var Bf=this.AaB(Ad);if(!!Bf)return Bf.
Hm(A3,C0);return false;},ZN:function(Ad,A3,C0){if(!this.E_.Af3)throw new Error(Rm
);var Bf=this.AaB(Ad);if(!!Bf)return Bf.ZN(A3,C0);return false;},N4:function(Ad,
A3,C0){if(!this.E_.Af3)throw new Error(Rm);var Bf=this.AaB(Ad);if(!!Bf)return Bf.
N4(A3,C0);return false;},ZM:function(Ad,A3,C0){if(!this.E_.Af3)throw new Error(Rm
);var Bf=this.AaB(Ad);if(!!Bf)return Bf.ZM(A3,C0);return false;},LT:function(aColumn
,A8){if(!!this.Filter){var O;for(O=0;O<this.Apj;O=O+1)if(this.AlK.Get(O).CF(aColumn
)===A8)return O;return-1;}else if(!!this.E_)return this.E_.A6g(aColumn,A8);return-
1;},KN:function(Ad,A3){var Bf=this.AaB(Ad);if(!!Bf)return Bf.KN(A3);return 0;},UA:
function(Ad,A3,C0){if(!this.E_.Af3)throw new Error(Rm);var Bf=this.AaB(Ad);if(!!
Bf)return Bf.UA(A3,C0);return false;},AgW:function(aColumn,A8){if(!!this.Filter){
var O;for(O=0;O<this.Apj;O=O+1)if(this.AlK.Get(O).KN(aColumn)===A8)return O;return-
1;}else if(!!this.E_)return this.E_.AOt(aColumn,A8);return-1;},EX:function(){if(
!!this.E_)return this.E_.EX();return false;},AjN:function(aColumn,A8){if(!!this.
E_)return this.E_.A6g(aColumn,A8)>=0;return false;},Aek:function(aColumn,A8){if(
!!this.E_)return this.E_.AOt(aColumn,A8)>=0;return false;},HJ:function(){if(!!this.
E_)return this.E_.HJ();return 0;},Abu:function(){if(!!this.E_)return this.E_.Abu(
);return-1;},QG:function(){if(!!this.E_)return this.E_.Pf;return 0;},A0$:function(
G){this.A1n();if(!!this.Filter&&!!this.E_){var O;for(O=0;O<this.E_.B$();O=O+1){var
A1Q=true;var Av=this.Filter.AOG();var Bf=this.E_.TT(O);if(!!Bf)while(A1Q&&!!Av){
A1Q=Bf.Bjf(Av);Av=this.Filter.AOL(Av);}else A.ab5("%s",((UX+O.toFixed())+Aoh)+this.
E_.B$().toFixed());if(A1Q){this.AlK.Set(this.Apj,this.E_.Gi.Get(O));this.Apj=this.
Apj+1;}}}A.pe([this,this.Akr],this);},A1n:function(){var O;for(O=0;O<512;O=O+1)this.
AlK.Set(O,null);this.Apj=0;},AF0:function(E){if(this.E_===E)return;if(!!this.E_)
A.z9([this,this.A39],this.E_,0);this.E_=E;if(!!this.E_){A.zV([this,this.A39],this.
E_,0);A.pe([this,this.A39],this);}},A39:function(G){A.pe([this,this.A0$],this);}
,AaB:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=512))return null;
else return this.AlK.Get(aIndex);}else if(!!this.E_)return this.E_.TT(aIndex);A.
ab5("%s",Aoi+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.ITable.
_Init.call(this,aArg);(this.AlK=[]).__proto__=C.GL.AlK;this.__proto__=C.GL;},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.AlK,D);if((B=this.
E_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A$c={KF:null,AdH:null,Ov:null,AML:false,AMM:true,A33:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Acb(1);this.
AdH.Ar(true);}break;case 1:{A._GetAutoObject(A.Device.Device).Acb(2);A._GetAutoObject(
A.Device.Device).Ar$(A._GetAutoObject(A.Device.Device).An.QG());this.KF.Fp(A._GetAutoObject(
A.Device.Device).Afp*50);this.KF.B2=A._GetAutoObject(A.Device.Device).Afp;this.KF.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Acb(3);this.AdH.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Acb(4);A._GetAutoObject(A.Device.
Device).Ar$(A._GetAutoObject(A.Device.Device).An.QG());this.KF.Fp(A._GetAutoObject(
A.Device.Device).Afp*50);this.KF.B2=A._GetAutoObject(A.Device.Device).Afp;this.KF.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Acb(5);this.AdH.Ar(true
);}break;case 5:A.pe([this,this.BfY],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Aoj,A._GetAutoObject(A.Device.Device).SyncState);}},BAG:function(G){this.
AdH.Ar(false);A.pe([this,this.A33],this);},BBL:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Acb(0);A.pe([this,this.A33],this);}break;default:;}},BfY:function(G){this.AdH.
Ar(false);this.KF.Ar(false);A._GetAutoObject(A.Device.Device).Acb(0);},AEP:function(
E){if(this.AMM===E)return;this.AMM=E;A.abo([this,this.Bkd,this.AEP],0);},Bkd:function(
){return this.AMM;},Aqq:function(G){var B;this.Ov.Cx=true;this.Ov.B2=false;this.
Ov.Fp(100);this.Ov.HO(1);this.Ov.Q=[this,this.ASe,this.ASN];A.pe([B=this.Ov,B.AnY
],this);},Bg3:function(G){var B;this.Ov.Cx=true;this.Ov.B2=false;this.Ov.Fp(400);
this.Ov.Un(200);this.Ov.HO(3);this.Ov.Q=[this,this.ASe,this.ASN];this.AEP(false);
A.pe([B=this.Ov,B.AnY],this);},ASN:function(E){if(this.AML===E)return;this.AML=E;
A.abo([this,this.ASe,this.ASN],0);},ASe:function(){return this.AML;},Aqr:function(
G){var B;this.Ov.An0(this);this.AEP(false);},_Init:function(aArg){A.acl.Gm._Init.
call(this.KF={I:this},0);A.Core.Timer._Init.call(this.AdH={I:this},0);A.acl.TG._Init.
call(this.Ov={I:this},0);this.__proto__=C.A$c;var B;this.KF.HO(1);this.AdH.PP(2000
);this.KF.SB=[this,this.A33];this.KF.Q=[B=A._GetAutoObject(A.Device.Device),B.ASE
,B.A0c];this.AdH.Mz=[this,this.BAG];A.h7++;},_Done:function(){this.__proto__=null;
this.KF._Done();this.AdH._Done();this.Ov._Done();A.h7--;},_ReInit:function(){this.
KF._ReInit();this.AdH._ReInit();this.Ov._ReInit();},_Mark:function(D){var B;if((
B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Act={_Init:function(){C.A$c._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AG1={A4:0,_Init:function(aArg){C.Ws._Init.
call(this,aArg);this.__proto__=C.AG1;},_className:"DeviceSimulation::UInt64"};C.
AuR={_Init:function(){C.PT._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dn:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Cb.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X5={Ad6:null,CD:function(G){var K=this.K;A.ab5("%s",Aok);K.Ad6.Ar(true);},E6:
function(G){var K=this.K;if(K.Ad6.Bw===true){K.Ad6.Ar(false);A.ab5("%s",AfA);}},
Bj7:function(G){var K=this.K;K.Ad6.Ar(false);A._GetAutoObject(A.kR.A$).Ahu(A._GetAutoObject(
A.Device.Device).AxF);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad6={I:this},0);K.__proto__=C.X5;this.AeL.H(Ale);K.Ad6.PP(1500);this.UC.R(Aol);
this.UC.Z(true);this.AeL.Aw(A.aaL(A.ach.ARo));K.Ad6.Mz=[this,K.Bj7];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad6._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad6._ReInit();},_Mark:function(D){var B;if((B=this.Ad6)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.TL={AqP:A.jV,EX:function(){A.Device.TL.EX.call(this);this.AqP=A.jV;},_Init:function(
aArg){A.Device.TL._Init.call(this,aArg);this.__proto__=C.TL;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.ADO.__proto__=C.Ws;C.String.__proto__=C.Ws;C.ABV.__proto__=C.
Ws;C.AG2.__proto__=C.Ws;C.AG0.__proto__=C.Ws;C.PT.__proto__=A.Device.ITable;C.GL.
__proto__=A.Device.ITable;C.AG1.__proto__=C.Ws;C.TL.__proto__=A.Device.TL;};C._ReInit=
function(){var B;if((B=C.UB._this))B._ReInit(),C.UB._ReInit.call(B);if((B=C.Amy.
_this))B._ReInit(),C.Amy._ReInit.call(B);if((B=C.AuG._this))B._ReInit(),C.AuG._ReInit.
call(B);if((B=C.Asl._this))B._ReInit(),C.Asl._ReInit.call(B);if((B=C.Act._this))
B._ReInit(),C.Act._ReInit.call(B);if((B=C.AuR._this))B._ReInit(),C.AuR._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.UB._this)&&(B._cycle!=D))B._Done(C.UB._this=
null);if((B=C.Amy._this)&&(B._cycle!=D))B._Done(C.Amy._this=null);if((B=C.AuG._this
)&&(B._cycle!=D))B._Done(C.AuG._this=null);if((B=C.Asl._this)&&(B._cycle!=D))B._Done(
C.Asl._this=null);if((B=C.Act._this)&&(B._cycle!=D))B._Done(C.Act._this=null);if((
B=C.AuR._this)&&(B._cycle!=D))B._Done(C.AuR._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */