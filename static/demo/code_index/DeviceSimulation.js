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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acq)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acq=(function(){var A=index;var C={};
var Cf="ERROR: access to null Bool data in column [";var BD="]";var E8="Access to inexistent column index: ";
var Hs=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I0="Unsupported filter criterion class";var
Iw="Operator not handled:";var O$="1,8";var Qb="INFO: Device.StartScan() called.";
var Qc="INFO: Device.StopScan() called.";var CR="V0.";var Fe=".";var L9="\n";var
Qd="Temp: ";var J9="Battery: ";var Oh="%%";var Qe="Selected animal with row index";
var MR="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Tf="1,2";var U1="0,1,2";var Aab="3900,3950,4000";var Xf="4050,4100,4150";var Ix=
"Read only";var U2="Unknown data export type: ";var Aac="Unhandled Device::DataExportType: ";
var U3="0,2,1";var Aad="650,150,700";var Xg="800,200,900";var Aae="800,200,850";
var Aaf="40000,4000,0";var U4="32,7,34,18,23,14";var Xh="16384";var Pa="1,1024";
var Aag="Simulate Scan";var Oi="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rp="%d.%m.%Y";var Xi="1";var Xj="2";var Tg="Unknown gender: ";var Xk="text/csv";
var Aah="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Xl="hit-geburt-%d-%m-%Y_%H-%M.csv";var Xm="animals-%d-%m-%Y_%H-%M.csv";var Th=
"zugang-%d-%m-%Y_%H-%M.csv";var Ti="M";var Tj="F";var Aai="?";var Tk="%Y-%m-%d";
var Aaj="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var AfF="ERROR: Cannot start transaction";
var Aak="Nested transactions are not allowed.";var Xn="Transaction not opened.";
var Aal="Wrong transaction ID.";var Xo="Unhandled TableId:";var AhX="Maximum number of rows reached.";
var K3="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcR=
"10";var LB="20";var AhY="30";var Aoi="31";var Oj="32";var Xp="Severe: filter set when inserting row into table: ";
var Aam="Warning: DeviceSimulation::TableData not in transaction";var AfG="ERROR: Row not found with index [";
var AhZ="] while Rows Count = ";var AcS="ERROR: trying to access an inexistent row with Index=";
var U5="Invalid Device::SyncState";var Aoj="Forwarding to home screen after 500 milliseconds ...";
var Aok="Forwarding to home screen canceled...";var Aol=[0,58,240,208];var Aom="VitalControl\nstarting up \u2026";
C.Table={G5:null,Init:function(aArg){var K=this.K;A.zV([this,this.Ako],K.G5,0);},
CC:function(Ad,A4){var K=this.K;return K.G5.CC(Ad,A4);},V_:function(Ad,A4){var K=
this.K;return K.G5.V_(Ad,A4);},H7:function(Ad,A4){var K=this.K;return K.G5.H7(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.G5.OnSetId(
E);},B8:function(){var K=this.K;return K.G5.B8();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.G5.Bk(E);},V$:function(Ad,A4){var K=this.K;return K.
G5.V$(Ad,A4);},Sq:function(Ad,A4){var K=this.K;return K.G5.Sq(Ad,A4);},OG:function(
){var K=this.K;return K.G5.OG();},OI:function(AoV){var K=this.K;return K.G5.OI(AoV
);},YP:function(){var K=this.K;return K.G5.YP();},ZS:function(Ad,A4,C1){var K=this.
K;return K.G5.ZS(Ad,A4,C1);},HB:function(Ad,A4,C1){var K=this.K;return K.G5.HB(Ad
,A4,C1);},ZR:function(Ad,A4,C1){var K=this.K;return K.G5.ZR(Ad,A4,C1);},Ob:function(
Ad,A4,C1){var K=this.K;return K.G5.Ob(Ad,A4,C1);},ZQ:function(Ad,A4,C1){var K=this.
K;return K.G5.ZQ(Ad,A4,C1);},LZ:function(aColumn,A8){var K=this.K;return K.G5.LZ(
aColumn,A8);},KT:function(Ad,A4){var K=this.K;return K.G5.KT(Ad,A4);},UJ:function(
Ad,A4,C1){var K=this.K;return K.G5.UJ(Ad,A4,C1);},Aev:function(aColumn,A8){var K=
this.K;return K.G5.Aev(aColumn,A8);},E7:function(){var K=this.K;return K.G5.E7();
},AjL:function(aColumn,A8){var K=this.K;return K.G5.AjL(aColumn,A8);},Aeo:function(
aColumn,A8){var K=this.K;return K.G5.Aeo(aColumn,A8);},HM:function(){var K=this.
K;return K.G5.HM();},QM:function(){var K=this.K;return K.G5.QM();},_Init:function(
aArg){var K=this.K;C.G5._Init.call(K.G5={I:this},0);K.__proto__=C.Table;K.Init.call(
this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.G5._Done();
A.h7--;},_ReInit:function(){var K=this.K;K.G5._ReInit();},_Mark:function(D){var B;
if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_variants:function(){return this;
},_className:"DeviceSimulation::Table"};C.AGJ={Tr:A.abi(42,null,null),CC:function(
aColumn){var B;this.Aax(aColumn);var Aq=(C.AD$.isPrototypeOf(B=this.Tr.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},V_:function(aColumn){var B;this.Aax(aColumn
);var Aq=(C.String.isPrototypeOf(B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.
A5;return A.jV;},H7:function(aColumn){var B;this.Aax(aColumn);var Aq=(C.ACf.isPrototypeOf(
B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Cf+aColumn.
toFixed())+BD);return false;},HB:function(aColumn,A8){this.Aax(aColumn);var Aq=A.
_NewObject(C.AD$,0);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},ZQ:function(aColumn
,A8){this.Aax(aColumn);var Aq=A._NewObject(C.String,0);Aq.A5=A8;this.Tr.Set(aColumn
,Aq);return true;},Ob:function(aColumn,A8){this.Aax(aColumn);var Aq=A._NewObject(
C.ACf,0);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},Aax:function(aColumn){if((
aColumn<0)||(aColumn>=42))throw new Error((E8+aColumn.toFixed())+Hs);},Bki:function(
AI){if(!!(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJX(
this.CC(AI.EJ),AI.Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null
).A5);else if(!!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.
Bzd(this.Sq(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?
AI:null).A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null
))return this.Bzc(this.V_(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null
))return this.Bzb(this.H7(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJX(this.CC(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJX(this.CC(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.Bzg(this.V$(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Bze(this.KT(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Bzf(this.KT(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zs&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OK&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJX(this.CC(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else throw new Error(I0);},AJX:function(Ft,Eb,GB){
switch(Eb){case 0:return Ft===GB;case 2:return Ft>GB;case 3:return Ft<GB;case 4:
return Ft.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Ft!==GB;default:throw new
Error(Iw+Eb.toFixed());}},Bzc:function(Ft,Eb,GB){switch(Eb){case 0:return Ft===GB;
case 2:return Ft>GB;case 3:return Ft<GB;case 4:{A.ab5("%s%e%s%i",Ft,Eb,GB,Ft.indexOf(
GB,0));return Ft.indexOf(GB,0)>=0;}case 5:return Ft!==GB;default:throw new Error(
Iw+Eb.toFixed());}},Bzb:function(Ft,Eb,GB){switch(Eb){case 0:return Ft===GB;case
2:case 3:case 4:return false;case 5:return Ft!==GB;default:throw new Error(Iw+Eb.
toFixed());}},V$:function(aColumn){var B;this.Aax(aColumn);var Aq=(C.AHm.isPrototypeOf(
B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},ZS:function(aColumn
,A8){this.Aax(aColumn);var Aq=A._NewObject(C.AHm,0);Aq.A5=A8;this.Tr.Set(aColumn
,Aq);return true;},Bzg:function(Ft,Eb,GB){switch(Eb){case 0:return Ft===GB;case 2:
return Ft>GB;case 3:return Ft<GB;case 4:return Ft.toFixed().indexOf(GB.toFixed()
,0)>=0;case 5:return Ft!==GB;default:throw new Error(Iw+Eb.toFixed());}},Sq:function(
aColumn){var B;this.Aax(aColumn);var Aq=(C.AHk.isPrototypeOf(B=this.Tr.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},ZR:function(aColumn,A8){this.Aax(aColumn
);var Aq=A._NewObject(C.AHk,0);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},Bzd:
function(Ft,Eb,GB){switch(Eb){case 0:return Ft===GB;case 2:return Ft>GB;case 3:return Ft<
GB;case 4:return Ft.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Ft!==GB;default:
throw new Error(Iw+Eb.toFixed());}},KT:function(aColumn){var B;this.Aax(aColumn);
var Aq=(C.AHl.isPrototypeOf(B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},UJ:function(aColumn,A8){this.Aax(aColumn);var Aq=A._NewObject(C.AHl,0
);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},Bze:function(Ft,Eb,GB){switch(Eb
){case 0:return Ft===GB;case 2:return Ft>GB;case 3:return Ft<GB;case 4:return Ft.
toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Ft!==GB;default:throw new Error(
Iw+Eb.toFixed());}},Bzf:function(Ft,Eb,GB,AtC,AJi){var ALc=Ft.toFixed();ALc=A.ab2(
A.abV(ALc,ALc.length-AtC),AJi);Ft=Math.trunc(Ft/A._GetAutoObject(A.Device.Helper
).ApW(AtC))%A._GetAutoObject(A.Device.Helper).ApW(AJi);var ALG=A.ab0(GB,0,10);switch(
Eb){case 0:return Ft===ALG;case 2:return Ft>ALG;case 3:return Ft<ALG;case 4:return ALc.
indexOf(GB,0)>=0;case 5:return Ft!==ALG;default:throw new Error(Iw+Eb.toFixed());
}},_Init:function(aArg){(this.Tr=[]).__proto__=C.AGJ.Tr;this.__proto__=C.AGJ;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tr,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.WF={_Init:function(
aArg){this.__proto__=C.WF;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.AD$={A5:0,_Init:function(aArg){C.WF._Init.call(this,aArg);this.__proto__=C.AD$;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
WF._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ACf={A5:false,_Init:function(aArg){C.WF._Init.call(this,aArg);this.__proto__=
C.ACf;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Auu:null,Ai4:null,AaZ:
null,CQ:function(){var K=this.K;K.A$W.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zv(3);A.zX([this,K.BgR],[B=K.Auu,B.A9F,B.ATV],0);this.UpdateAutoActions(
O$);K.A$W.call(this,this);this.AsA(this);this.AsB(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asy(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=28;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnH(languageValue);A.pe([this
,K.AUm],this);},Zv:function(E){this.UpdateActiveScreen(E);},AwC:function(E){this.
UpdateBatteryChargeState(E);},AFj:function(E){this.UpdateChargeActive(E);},Ar$:function(
E){this.UpdateScanState(E);},Aw1:function(E){this.UpdateMeasureState(E);},Axd:function(
E){this.UpdateTempValue(E);},AnH:function(E){this.UpdateLanguage(E);},Axe:function(
E){this.UpdateTemperatureUnit(E);},AFh:function(E){this.UpdateBrightness(E);},AFP:
function(E){this.UpdateMonitoring(E);},AxP:function(){var B;if(A._GetAutoObject(
C.UK).AxJ){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).ALi(this
);}},AhP:function(){var B;A._GetAutoObject(A.Device.Helper).S0.An3(this);this.UpdateMeasureState(
0);},AhM:function(){var K=this.K;A.ab5("%s",Qb);this.UpdateScanState(1);A.pe([this
,K.BgR],this);},An4:function(){var K=this.K;var B;A.ab5("%s",Qc);K.Ai4.An3(this);
this.UpdateScanState(0);},SetSystemTime:function(Aia){},AxI:function(){A.Device.
DeviceClass.Bbl.call(this);this.Zv(1);},AGG:function(){A.Device.DeviceClass.Bbj.
call(this);this.Zv(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axl:function(
E){this.UpdateUnderTemp(E);},Ace:function(E){this.UpdateSyncState(E);},ADm:function(
){var aString;aString=((((((((((CR+A.abz(0,9).toFixed())+Fe)+A.abz(0,9).toFixed(
))+L9)+Qd)+A.abz(30,90).toFixed())+A.aaR(A.acf.AG_))+L9)+J9)+A.abz(1,100).toFixed(
))+Oh;return aString;},PopupStateChanged:function(Ka,Ae){var Agr=A._NewObject(C.
PopupContext,0);Agr.Id=Ka;Agr.EN=Ae;this.AnS.Trigger(Agr,false);},AGe:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Afc:function(E){this.UpdateVibrationOn(
E);},Aw$:function(E){this.UpdateRatingMode(E);},Ae4:function(E){this.UpdateFlashLightOn(
E);},UB:function(E){this.UpdateTopLightOn(E);},WR:function(E){this.UpdateRGBTopLight(
E);},AwA:function(E){this.UpdateAutoRegistrationMode(E);},Asa:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OU:function(E){this.UpdateDigitsID(
E);},PY:function(E){this.UpdateOffsetID(E);},AGi:function(E){this.UpdateWeightValue(
E);},AwY:function(E){this.UpdateMassUnit(E);},ArM:function(E){A.Device.DeviceClass.
Bbf.call(this,E);this.UpdateActiveActions(E);},ArN:function(E){A.Device.DeviceClass.
Bbg.call(this,E);this.UpdateActiveActionsOrder(E);},Akv:function(E){A.Device.DeviceClass.
Bbh.call(this,E);this.UpdateAutoActions(E);},AG6:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCC.call(this,this);},AsP:function(){var K=this.K;var B;K.AaZ.An3(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axm:function(E
){this.UpdateWeightRecordingMode(E);},AFU:function(E){this.UpdatePredictedTempValue(
E);},SX:function(Md){A.ab5("%s%i",Qe,Md);},AFo:function(E){this.UpdateDemoMode(E
);},AE8:function(E){this.UpdateAgeRegistration(E);},Axn:function(E){this.UpdateWeightRecordingScope(
E);},J0:function(E){this.UpdateGender(E);},Ar1:function(E){this.UpdateIDLastUsedMale(
E);},Ar0:function(E){this.UpdateIDLastUsedFemale(E);},Zw:function(E){this.UpdateAnimalListContent(
E);},AE_:function(E){this.UpdateAlarmListAction(E);},AFr:function(E){this.UpdateFlashLightInMeasureState(
E);},AeZ:function(E){this.UpdateAnimalInfoContent(E);},AGh:function(E){this.UpdateWatchListAction(
E);},AFt:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArM(15359);this.ArN(MR);},ResetAutoActions:function(G){this.Akv(Tf);},Awy:
function(E){this.UpdateAnimalTypesString(E);},Asd:function(E){this.UpdateTemperaturesHighString(
E);},Ase:function(E){this.UpdateTemperaturesLowString(E);},AsA:function(G){this.
Awy(U1);this.Ase(Aab);this.Asd(Xf);this.Axl(3600);},AwS:function(E){this.UpdateFreshCowsHideMeasured(
E);},Ar7:function(E){this.UpdateNaisIdLastUsedMale(E);},Ar6:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw5:function(E){this.UpdateNaisIdIncrementMale(E);},Aw4:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bbm.call(this);A._GetAutoObject(
A.kR.A7).Cb(53);},AnB:function(E){this.UpdateBootloaderMessage(E);},AE5:function(
E){this.UpdateActionListAction(E);},Aww:function(E){this.UpdateActionListHideMeasured(
E);},Uv:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwK:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwL:function(E){this.UpdateDirectionOfCountingMale(
E);},AwM:function(E){this.UpdateDirectionOfCountingUnisex(E);},Ar2:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar8:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw6:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akx:function(E){this.UpdateEartagNrAssignmentMode(
E);},N7:function(E){this.UpdateBreed(E);},AFN:function(E){throw new Error(Ix);},
AFH:function(E){throw new Error(Ix);},AGc:function(E){throw new Error(Ix);},AFd:
function(E){throw new Error(Ix);},AFp:function(E){this.UpdateDryCowListAction(E);
},AJU:function(A1j){var QC;switch(A1j){case 15:QC=false;break;default:QC=true;}return QC;
},AFb:function(E){this.UpdateBirthListView(E);},AGd:function(E){this.UpdateTransferProgress(
E);},Asf:function(E){this.UpdateTransferTarget(E);},AsO:function(){var B;A.pe([B=
A._GetAutoObject(C.W1),B.BgV],this);},Aw_:function(E){this.UpdatePremisesID(E);}
,Aw3:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFu:function(E){this.
UpdateFreshCowSpan(E);},Axk:function(E){this.UpdateUSBDevice(E.Z8,E.AsY,E.Asr);}
,AxO:function(){var K=this.K;var B;this.Gg.FileName=K.BjE.call(this,this.Gg.AgP);
switch(this.Gg.AgP){case 0:K.Bzp.call(this,(C.V2.isPrototypeOf(B=this.Gg)?B:null
));break;case 1:K.Bzm.call(this,(C.V2.isPrototypeOf(B=this.Gg)?B:null));break;case
2:K.Bzr.call(this,(C.V2.isPrototypeOf(B=this.Gg)?B:null));break;default:throw new
Error(U2+this.Gg.AgP.toFixed());}},Arp:function(){return true;},AqK:function(){var
K=this.K;switch(this.Gg.AgP){case 0:A._GetAutoObject(A.Device.Device).AZ(72,true
,A.jV,0,[this,K.A3J]);break;case 1:A._GetAutoObject(A.Device.Device).AZ(90,true,
A.jV,0,[this,K.A3J]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(99,true,A.
jV,0,[this,K.A3J]);break;default:throw new Error(Aac+this.Gg.AgP.toFixed());}},AF1:
function(E){throw new Error(Ix);},Awx:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AF3:function(E){this.UpdateShutdownTimer(E);},AsB:function(G){this.Awz(U3);
this.Asj(Aad);this.Asi(Xg);this.Ash(Aae);this.Ask(Aaf);},Asi:function(E){this.UpdateWeightGainsHighString(
E);},Asj:function(E){this.UpdateWeightGainsLowString(E);},Awz:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ash:function(E){this.UpdateWeightGainsAverageString(E);},Ask:function(E){this.
UpdateWeightValueBirthString(E);},AwN:function(E){this.UpdateEvaluationAnimalType(
E);},Axc:function(E){this.UpdateStartScreen(E);},AEd:function(){return 1;},AEe:function(
){return 1;},AFM:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axi:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nt:function(E){this.UpdateWhereAbouts(
E);},ArP:function(E){this.UpdateActiveMassRecordingFields(E);},ArQ:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asy:function(G){this.ArP(A.jV);this.ArQ(
U4);},AFK:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},X9:function(
){A._GetAutoObject(C.W1).AwB(true);return true;},Aqv:function(){var B;A._GetAutoObject(
C.W1).Aqv(this);return true;},Aqu:function(){var B;A.pe([B=A._GetAutoObject(C.W1
),B.Aqu],this);return true;},Aqw:function(){var B;A.pe([B=A._GetAutoObject(C.W1)
,B.Bh0],this);return true;},Aw0:function(E){this.UpdateMaxWeightValuePrecision(E
);},Aw7:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw7(Xh);},Aw8:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw8(Pa);},Axp:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axp(Pa);},Axj:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asx:function(AoJ,AJq){this.Gg.E7();this.Gg.AgP=AoJ;this.Gg.AVf=AJq;this.Gg.E5(
1);this.Gg.E5(2);this.AxO();},AFc:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFV:function(E){this.UpdatePurchasedListResetOnExport(E);},BCm:function(G){
switch(this.In){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},BgR:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Auu.AG1)K.Ai4.
An1(this);A.ab5("%s",Aag);},BCC:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Auu.AxJ)K.AaZ.An1(this);},BDj:function(G){this.UpdateMeasureState(3);},AUm:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.ALi],[
B=K.Auu,B.A9G,B.ATW],0);this.R7.AFn(A._GetAutoObject(A.Device.Helper).A7l(8));this.
SG.AFn(A._GetAutoObject(A.Device.Helper).A7l(8));},A$W:function(G){var Az1=A._NewObject(
A.Device.AxN,0);Az1.OnSetTimestamp(1747383260);Az1.AFI(1);Az1.AFO(0);Az1.AFY(0);
this.SG=Az1;var Azw=A._NewObject(A.Device.AxN,0);Azw.OnSetTimestamp(1747383260);
Azw.AFI(1);Azw.AFO(0);Azw.AFY(6);this.R7=Azw;var AlZ=A._NewObject(A.Device.AvD,0
);AlZ.AFF(1);AlZ.AFG(0);AlZ.AFE(0);AlZ.AGa(1);AlZ.AGb(0);AlZ.AF$(0);AlZ.OnSetTimestamp(
1747383260);this.Q3=AlZ;var Amq=A._NewObject(A.Device.AvD,0);Amq.AFF(1);Amq.AFG(
0);Amq.AFE(0);Amq.AGa(1);Amq.AGb(0);Amq.AF$(0);Amq.OnSetTimestamp(1747383260);this.
S6=Amq;this.AhL=A.aaR(A.acf.Unknown);},BzL:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},Bzp:function(
Ac3){var K=this.K;var B;var Ade=Oi;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Amh=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B8();O++){Cz.E3(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Ade=Ade+(((((((((((((((((
K.Apo.call(this,A._GetAutoObject(A.Device.Device).OZ)+String.fromCharCode(0x3B))+
K.Apo.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A2E.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.BdO.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.BdN.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.BzQ.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BdP.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.BzT.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.Apo.call(this
,Cz.NaisIdMother))+L9);Amh++;}}Ac3.Ave=Ade;Ac3.AGK=Amh;Ac3.E5(3);},Apo:function(
Rt){if(!Rt)return A.jV;return Rt.toFixed();},A2E:function(Aza){var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(Aza);return Av.Format(Rp);},BdO:function(Ac2){if(!Ac2
)return A.jV;return A._GetAutoObject(A.Device.Converter).A51(Ac2).toFixed();},BdN:
function(Ma){var result=A.jV;switch(Ma){case 0:result=Xi;break;case 1:result=Xj;
break;case 2:result=A.jV;break;default:A.ab5("%s",Tg+Ma.toFixed());}return result;
},BzQ:function(AJj){if(!AJj)return A.jV;return AJj.toFixed();},BdP:function(AfR){
if(!AfR)return A.jV;return AfR.toFixed();},BzT:function(Atv){return(Atv+1).toFixed(
);},A3J:function(G){var K=this.K;var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!Ar)return;if(Ar.PopupState===7){K.BzL.call(this,this.Gg.FileName,
Xk,(C.V2.isPrototypeOf(B=this.Gg)?B:null).Ave);this.Gg.E7();}else if(Ar.PopupState===
8)this.Gg.E7();},Bzm:function(Ac3){var K=this.K;var B;var Ade=Aah;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Amh=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B8();O++){var Azs=A.jV;if(Cz.Aro())Azs=K.BzV.call(this,Cz.FirstBodyWeight);Cz.E3(
O,A._GetAutoObject(A.Device.Device).An);Ade=Ade+(((((((((((K.Apo.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.BzR.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.Apo.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.BzP.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BzU.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azs)+L9);Amh++;}Ac3.Ave=Ade;Ac3.AGK=Amh;Ac3.E5(3);},BjE:function(
AoJ){var AKd=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoJ){case 0:AKd=Ac.Format(Xl);break;case 1:AKd=Ac.
Format(Xm);break;case 2:AKd=Ac.Format(Th);break;default:throw new Error(U2+AoJ.toFixed(
));}return AKd;},BzR:function(Rt){return Rt.toFixed();},BzU:function(Ma){var result=
A.jV;switch(Ma){case 0:result=Ti;break;case 1:result=Tj;break;case 2:result=Aai;
break;default:A.ab5("%s",Tg+Ma.toFixed());}return result;},BzV:function(MX){if(MX<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ala(MX);},BzP:function(
Aza){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(Aza);return Av.Format(Tk);},
Bzr:function(Ac3){var K=this.K;var B;var Ade=Aaj;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Amh=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B8();O++){Cz.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Ade=Ade+(((((((((((((K.Apo.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A2E.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A2E.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BdN.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.BdP.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.BdO.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.Apo.
call(this,A._GetAutoObject(A.Device.Device).OZ))+L9);Amh++;}}Ac3.Ave=Ade;Ac3.AGK=
Amh;Ac3.E5(3);},_Init:function(aArg){var K=this.K;A.acl.Gn._Init.call(K.Ai4={I:this
},0);A.acl.Gn._Init.call(K.AaZ={I:this},0);K.__proto__=C.DeviceClass;this.AwC(100
);this.AnH(1);this.Ar1(200);this.Ar0(100);this.Ar7(276000912345678);this.Ar6(276000923456789
);this.Ar2(500);this.Ar8(276000901234567);this.N7(1);K.Ai4.HQ(1);K.Ai4.Fq(1000);
K.AaZ.WS(0);K.AaZ.HQ(1);K.AaZ.Fq(750);K.AaZ.B3=50000;this.Gg=A._NewObject(C.V2,0
);K.Ai4.SJ=[this,K.BCm];K.Auu=A._GetAutoObject(C.UK);K.AaZ.SJ=[this,K.BDj];K.AaZ.
Q=[this,this.AE2,this.AI_];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai4._Done();K.AaZ._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai4._ReInit();K.AaZ._ReInit();K.CQ.call(this);},_Mark:function(D){
var B;if((B=this.Auu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AHm={A5:0,_Init:function(aArg){C.WF._Init.call(this,aArg);this.__proto__=C.AHm;
},_className:"DeviceSimulation::UInt8"};C.AHk={A5:0,_Init:function(aArg){C.WF._Init.
call(this,aArg);this.__proto__=C.AHk;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4T:0,AF4:function(E){var K=this.K;K.A4T=K.A4T+(E-this.Dv());A.Device.
HelperClass.Bbi.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Bbe.call(this)+K.A4T;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$2={AxJ:true,AG1:false,ATV:function(E){if(this.AG1===E)return;this.AG1=E;A.
abo([this,this.A9F,this.ATV],0);},A9F:function(){return this.AG1;},ATW:function(
E){if(this.AxJ===E)return;this.AxJ=E;A.abo([this,this.A9G,this.ATW],0);},A9G:function(
){return this.AxJ;},_Init:function(aArg){this.__proto__=C.A$2;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UK={_Init:function(){C.A$2._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UK._variants();
},_this:null};C.PopupContext={EN:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ci:function(
AH){var G1=A.Device.Rating.Bbk.call(this,AH);if(G1){var RB=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.AnimalId);if(Ad
!==-1){var Jt=RB.OG();if(Jt<=0)A.ab5("%s",AfF);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.E3(Ad,RB);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){RB.A$U(Ad,5,this.Temperature);RB.AkU(Ad,17,this.RatingTemperature);RB.
Act(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){RB.AU1(Ad,18,this.BodyWeight);RB.Act(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){RB.AU1(Ad,23,this.BodyWeight);RB.Act(
Ad,24,this.Timestamp);RB.HB(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGA(this)){var LW=A._GetAutoObject(A.Device.Helper).ADq(this);RB.AkU(Ad,13,LW);
RB.Act(Ad,31,this.Timestamp);}RB.OI(Jt);}}}return G1;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.P2={Gi:A.abi(512,null,null),RQ:0,AJJ:
0,ALq:0,A4W:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKZ:0,A4n:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BeH:512,A1U:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1,12:1,13:
1,14:1}),Af9:false,CC:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.CC(A4
);return 0;},V_:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.V_(A4);return A.
jV;},H7:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.H7(A4);return false;
},V$:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.V$(A4);return 0;},Sq:function(
Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.Sq(A4);return 0;},OG:function(){if(this.
Af9)throw new Error(Aak);this.Af9=true;return 12345;},OI:function(AoV){if(!this.
Af9)throw new Error(Xn);if(AoV!==12345)throw new Error(Aal);this.Af9=false;return true;
},YP:function(){return this.A5p(A._NewObject(C.AGJ,0));},ZS:function(Ad,A4,C1){var
Bd=this.T3(Ad);if(!!Bd)return Bd.ZS(A4,C1);return false;},HB:function(Ad,A4,C1){
var Bd=this.T3(Ad);if(!!Bd)return Bd.HB(A4,C1);return false;},ZR:function(Ad,A4,
C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.ZR(A4,C1);return false;},Ob:function(Ad
,A4,C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.Ob(A4,C1);return false;},ZQ:function(
Ad,A4,C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.ZQ(A4,C1);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bdn();switch(this.Id){case 0:{this.
BeH=256;A.pe([this,this.Bxd],this);}break;case 1:A.pe([this,this.Bxf],this);break;
case 3:A.pe([this,this.Bxc],this);break;case 4:A.pe([this,this.Bxe],this);break;
case 2:break;default:throw new Error(Xo+this.Id.toFixed());}},B8:function(){return this.
RQ;},KT:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.KT(A4);return 0;},UJ:
function(Ad,A4,C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.UJ(A4,C1);return false;}
,E7:function(){this.Bdn();return true;},A5p:function(Ad){if(this.RQ>=512)throw new
Error(AhX);this.Gi.Set(this.RQ,Ad);this.RQ=this.RQ+1;switch(this.Id){case 0:case
1:this.HB(this.RQ-1,0,this.RQ-1);break;default:;}A.pe([this,this.Ako],this);return this.
RQ-1;},T3:function(aIndex){if((aIndex<0)||(aIndex>=512))return null;return this.
Gi.Get(aIndex);},Bdn:function(){var O;for(O=0;O<512;O=O+1)this.Gi.Set(O,null);this.
RQ=0;this.AJJ=0;this.AKZ=0;this.ALq=0;A.pe([this,this.Ako],this);},AKt:function(
){this.AJJ=(this.AJJ+1)%15;return this.A1U.Get(this.AJJ);},A2I:function(){this.ALq=(
this.ALq+1)%10;return this.A4W.Get(this.ALq);},AKf:function(G){if(this.K&&this.K.
AKf)return this.K.AKf.apply(this,arguments);else return C.P2.Bxm.apply(this,arguments
);},Bxm:function(G){var B;var Os=true;this.A2(276000312310001,10,1,A._GetAutoObject(
A.Device.Helper).AhR(12),0,1,true,true,false,true,39000,0,0,false,0,false,0,0,0,
0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(A.Device.Device
).AF);this.A2(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhR(12),0,0,false
,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.
Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310021,10,1,A.
_GetAutoObject(A.Device.Helper).AhR(9),0,0,true,false,false,true,37200,0,0,false
,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhR(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhR(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhR(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhR(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhR(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);var O;var Bg3=0;for(O=
1;O<=7;O=O+1){Bg3=3680+(20*O);Os=Bg3>3800;this.A2(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhR(7-O),0,1,Os,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);}},Bxd:function(s){this.AKf(s);},AKh:
function(G){if(this.K&&this.K.AKh)return this.K.AKh.apply(this,arguments);else return C.
P2.Bxo.apply(this,arguments);},Bxo:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var AiD;var BdF;for(O=0;O<32;O=O+1){var A2s=this.
Bz7();for(;A2s>0;A2s=A2s-1){AiD=this.A2I();BdF=A._GetAutoObject(A.Device.Converter
).AsQ(0,AiD);this.AG(Ac,12310020,AiD,BdF,this.AKt(),this.AKt(),this.AKt(),this.AKt(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiD=this.A2I();this.AG(Ac,276000312310001,AiD,A._GetAutoObject(A.Device.Converter
).AsQ(0,AiD),1,3,3,3,0);AiD=this.A2I();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsQ(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiD,A._GetAutoObject(
A.Device.Converter).AsQ(1,AiD),2,3,3,3,0);},Bxf:function(s){this.AKh(s);},A2:function(
Ka,BxN,Bx4,Bcr,Atv,Ma,BxV,Bx0,BxX,BxY,MX,Bxy,Bx2,BxW,Eo,BxZ,Ac2,AJj,AfR,Bx9,BAo,
BAp,BxD,Bx$){var Cz=A._NewObject(A.Device.Animal,0);Cz.Gs();Cz.Axo(0);Cz.Ae$(0);
Cz.Uz(false);Cz.AkC(false);if(BAp)Cz.P0(Ka);if(BAo)Cz.Nr(Ka);Cz.SQ(A._GetAutoObject(
A.Device.Helper).V6(Ka,Bx$&0xFF,BxD&0xFF)|0);Cz.Ab$(BxN);Cz.AnI(Bx4);Cz.Q8(Bcr);
Cz.Akw(Atv);Cz.J0(Ma);Cz.AnZ(BxV);Cz.AGU(Bx0);Cz.Ae7(BxY);Cz.Uz(BxX);Cz.Ar3(BxW);
Cz.AwW(Bx2);Cz.AwH(Bxy);Cz.EC(Eo);Cz.Ae8(BxZ);Cz.N7(Ac2);Cz.Aky(AJj);Cz.Nt(AfR);
Cz.AnK(Bx9);Cz.Ci(this);if(MX>0)A._GetAutoObject(C.Ass).AG(Bcr,Ka,0,0,0,0,0,0,MX
);},AG:function(L$,Ac0,AoT,Byi,BxH,BxI,Bxr,Byk,Bxt){var B2=A._NewObject(A.Device.
Rating,0);B2.Gs();var Bc7=A._GetAutoObject(C.AmC).AOK(26,Ac0);if(Bc7>=0)B2.OnSetAnimalId(
A._GetAutoObject(C.AmC).CC(Bc7,0));else A.ab5("%s%U",K3,Ac0);B2.OnSetTimestamp(L$
);B2.OnSetTemperature(AoT);B2.OnSetRatingTemperature(Byi);B2.OnSetFaeces(BxH);B2.
OnSetFeed(BxI);B2.OnSetAppearance(Bxr);B2.OnSetRespiratory(Byk);B2.OnSetBodyWeight(
Bxt);B2.Ci(this);},A6Y:function(aColumn,A8){var O;for(O=0;O<this.RQ;O=O+1)if(this.
Gi.Get(O).CC(aColumn)===A8)return O;return-1;},Bz7:function(){this.AKZ=(this.AKZ+
1)%10;return this.A4n.Get(this.AKZ);},AKe:function(G){if(this.K&&this.K.AKe)return this.
K.AKe.apply(this,arguments);else return C.P2.Bxl.apply(this,arguments);},Bxl:function(
G){this.AlT(10,AcR);this.AlT(20,LB);this.AlT(30,AhY);this.AlT(31,Aoi);this.AlT(32
,Oj);},Bxc:function(s){this.AKe(s);},AlT:function(Ka,BxO){var AJD=A._NewObject(A.
Device.AnimalGroup,0);AJD.Gs();AJD.OnSetId(Ka);AJD.AFw(BxO);AJD.Ci(this);},HM:function(
){return this.BeH;},AOK:function(aColumn,A8){var O;for(O=0;O<this.RQ;O=O+1)if(this.
Gi.Get(O).KT(aColumn)===A8)return O;return-1;},AKg:function(G){if(this.K&&this.K.
AKg)return this.K.AKg.apply(this,arguments);else return C.P2.Bxn.apply(this,arguments
);},Bxn:function(G){this.AaH(2016,216,6);this.AaH(2017,217,7);this.AaH(2018,218,
8);this.AaH(2019,219,9);this.AaH(2020,220,10);this.AaH(2021,221,11);},Bxe:function(
s){this.AKg(s);},AaH:function(Ac9,BxC,BxB){var Vh=A._NewObject(A.Device.CalfDeregistrations
,0);Vh.Gs();Vh.AkH(Ac9);Vh.AwJ(BxC);Vh.AwI(BxB);Vh.Ci(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gi=[]).__proto__=C.P2.Gi;(this.A4W=[
]).__proto__=C.P2.A4W;(this.A4n=[]).__proto__=C.P2.A4n;(this.A1U=[]).__proto__=C.
P2.A1U;this.__proto__=C.P2;var J_=this._variants();if(J_){this.K={};J_._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gi,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.P2._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.AmC={_Init:function(){C.P2._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AuT={_Init:function(){C.P2.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Ass={_Init:function(){C.P2._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.G5={AlN:A.
abi(512,null,null),Fy:null,Apl:0,CC:function(Ad,A4){var Bd=this.AaF(Ad);if(!!Bd)
return Bd.CC(A4);return 0;},V_:function(Ad,A4){var Bd=this.AaF(Ad);if(!!Bd)return Bd.
V_(A4);return A.jV;},H7:function(Ad,A4){var Bd=this.AaF(Ad);if(!!Bd)return Bd.H7(
A4);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AGk(A._GetAutoObject(C.AmC));break;case 1:this.AGk(A._GetAutoObject(
C.Ass));break;case 3:this.AGk(A._GetAutoObject(C.AuT));break;case 4:this.AGk(A._GetAutoObject(
C.Au3));break;case 2:break;default:throw new Error(Xo+this.Id.toFixed());}},B8:function(
){if(!!this.Filter)return this.Apl;else if(!!this.Fy)return this.Fy.RQ;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1S(this);},V$:function(Ad
,A4){var Bd=this.AaF(Ad);if(!!Bd)return Bd.V$(A4);return 0;},Sq:function(Ad,A4){
var Bd=this.AaF(Ad);if(!!Bd)return Bd.Sq(A4);return 0;},OG:function(){if(!!this.
Fy)return this.Fy.OG();return-1;},OI:function(AoV){var G1=false;if(!!this.Fy)G1=
this.Fy.OI(AoV);if(G1)A.pe([this,this.A1S],this);return G1;},YP:function(){if(!!
this.Filter)throw new Error(Xp+A._GetAutoObject(A.Device.Converter).Bjj(this.Id,
this.Filter));if(!!this.Fy)return this.Fy.A5p(A._NewObject(C.AGJ,0));return-1;},
ZS:function(Ad,A4,C1){if(!this.Fy.Af9)throw new Error(Aam);var Bd=this.AaF(Ad);if(
!!Bd)return Bd.ZS(A4,C1);return false;},HB:function(Ad,A4,C1){if(!this.Fy.Af9)throw new
Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.HB(A4,C1);return false;},ZR:function(
Ad,A4,C1){if(!this.Fy.Af9)throw new Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.
ZR(A4,C1);return false;},Ob:function(Ad,A4,C1){if(!this.Fy.Af9)throw new Error(Aam
);var Bd=this.AaF(Ad);if(!!Bd)return Bd.Ob(A4,C1);return false;},ZQ:function(Ad,
A4,C1){if(!this.Fy.Af9)throw new Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.
ZQ(A4,C1);return false;},LZ:function(aColumn,A8){if(!!this.Filter){var O;for(O=0;
O<this.Apl;O=O+1)if(this.AlN.Get(O).CC(aColumn)===A8)return O;return-1;}else if(
!!this.Fy)return this.Fy.A6Y(aColumn,A8);return-1;},KT:function(Ad,A4){var Bd=this.
AaF(Ad);if(!!Bd)return Bd.KT(A4);return 0;},UJ:function(Ad,A4,C1){if(!this.Fy.Af9
)throw new Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.UJ(A4,C1);return false;
},Aev:function(aColumn,A8){if(!!this.Filter){var O;for(O=0;O<this.Apl;O=O+1)if(this.
AlN.Get(O).KT(aColumn)===A8)return O;return-1;}else if(!!this.Fy)return this.Fy.
AOK(aColumn,A8);return-1;},E7:function(){if(!!this.Fy)return this.Fy.E7();return false;
},AjL:function(aColumn,A8){if(!!this.Fy)return this.Fy.A6Y(aColumn,A8)>=0;return false;
},Aeo:function(aColumn,A8){if(!!this.Fy)return this.Fy.AOK(aColumn,A8)>=0;return false;
},HM:function(){if(!!this.Fy)return this.Fy.HM();return 0;},QM:function(){if(!!this.
Fy)return this.Fy.RQ;return 0;},A1S:function(G){this.A16();if(!!this.Filter&&!!this.
Fy){var O;for(O=0;O<this.Fy.B8();O=O+1){var A2w=true;var Aw=this.Filter.AOX();var
Bd=this.Fy.T3(O);if(!!Bd)while(A2w&&!!Aw){A2w=Bd.Bki(Aw);Aw=this.Filter.AO2(Aw);
}else A.ab5("%s",((AfG+O.toFixed())+AhZ)+this.Fy.B8().toFixed());if(A2w){this.AlN.
Set(this.Apl,this.Fy.Gi.Get(O));this.Apl=this.Apl+1;}}}A.pe([this,this.Ako],this
);},A16:function(){var O;for(O=0;O<512;O=O+1)this.AlN.Set(O,null);this.Apl=0;},AGk:
function(E){if(this.Fy===E)return;if(!!this.Fy)A.z9([this,this.A4U],this.Fy,0);this.
Fy=E;if(!!this.Fy){A.zV([this,this.A4U],this.Fy,0);A.pe([this,this.A4U],this);}}
,A4U:function(G){A.pe([this,this.A1S],this);},AaF:function(aIndex){if(!!this.Filter
){if((aIndex<0)||(aIndex>=512))return null;else return this.AlN.Get(aIndex);}else
if(!!this.Fy)return this.Fy.T3(aIndex);A.ab5("%s",AcS+aIndex.toFixed());return null;
},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlN=[]).__proto__=
C.G5.AlN;this.__proto__=C.G5;},_Mark:function(D){var B;A.Device.ITable._Mark.call(
this,D);A.aa6(this.AlN,D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$3={KN:null,AdL:null,OE:null,AM4:false,ACc:
true,A4N:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ace(1);this.AdL.As(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ace(2);A._GetAutoObject(A.Device.Device).Asf(A._GetAutoObject(A.
Device.Device).An.QM());this.KN.Fq(A._GetAutoObject(A.Device.Device).Afv*50);this.
KN.B3=A._GetAutoObject(A.Device.Device).Afv;this.KN.As(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ace(3);this.AdL.As(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ace(4);A._GetAutoObject(A.Device.Device).Asf(A._GetAutoObject(A.Device.Device
).An.QM());this.KN.Fq(A._GetAutoObject(A.Device.Device).Afv*50);this.KN.B3=A._GetAutoObject(
A.Device.Device).Afv;this.KN.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ace(5);this.AdL.As(true);}break;case 5:A.pe([this,this.BgV],this);break;case 7:
case 6:break;default:A.ab5("%s%e",U5,A._GetAutoObject(A.Device.Device).SyncState
);}},BBI:function(G){this.AdL.As(false);A.pe([this,this.A4N],this);},BCL:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ace(0);A.pe([this,this.A4N],this);}break;default:;}},BgV:function(
G){this.AdL.As(false);this.KN.As(false);A._GetAutoObject(A.Device.Device).Ace(0);
},AwB:function(E){if(this.ACc===E)return;this.ACc=E;A.abo([this,this.Bli,this.AwB
],0);},Aqu:function(G){var B;this.OE.Cx=true;this.OE.B3=false;this.OE.Fq(100);this.
OE.HQ(1);this.OE.Q=[this,this.ASK,this.ATh];A.pe([B=this.OE,B.An1],this);},Bh0:function(
G){var B;this.OE.Cx=true;this.OE.B3=false;this.OE.Fq(400);this.OE.Uy(200);this.OE.
HQ(3);this.OE.Q=[this,this.ASK,this.ATh];this.AwB(false);A.pe([B=this.OE,B.An1],
this);},ATh:function(E){if(this.AM4===E)return;this.AM4=E;A.abo([this,this.ASK,this.
ATh],0);},Aqv:function(G){var B;this.OE.An3(this);this.AwB(false);},ByD:function(
XK){var ALE=A._NewObject(A.Device.AV0,0);if(XK){ALE.AT9(6);ALE.ATL(16900);ALE.AT$(
1529);}A._GetAutoObject(A.Device.Device).Axk(ALE);this.AwB(XK);},Bli:function(){
return this.ACc;},ASK:function(){return this.AM4;},_Init:function(aArg){A.acl.Gn.
_Init.call(this.KN={I:this},0);A.Core.Timer._Init.call(this.AdL={I:this},0);A.acl.
TR._Init.call(this.OE={I:this},0);this.__proto__=C.A$3;var B;this.KN.HQ(1);this.
AdL.PZ(2000);this.KN.SJ=[this,this.A4N];this.KN.Q=[B=A._GetAutoObject(A.Device.Device
),B.AS9,B.A0U];this.AdL.MK=[this,this.BBI];A.h7++;},_Done:function(){this.__proto__=
null;this.KN._Done();this.AdL._Done();this.OE._Done();A.h7--;},_ReInit:function(
){this.KN._ReInit();this.AdL._ReInit();this.OE._ReInit();},_Mark:function(D){var
B;if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.W1={_Init:function(){C.A$3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AHl={A5:0,_Init:function(aArg){C.WF._Init.
call(this,aArg);this.__proto__=C.AHl;},_className:"DeviceSimulation::UInt64"};C.
Au3={_Init:function(){C.P2._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Du:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
BI.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X_={Ad_:null,CD:function(G){var K=this.K;A.ab5("%s",Aoj);K.Ad_.As(true);},E4:
function(G){var K=this.K;if(K.Ad_.Bw===true){K.Ad_.As(false);A.ab5("%s",Aok);}},
Bk$:function(G){var K=this.K;K.Ad_.As(false);A._GetAutoObject(A.kR.A7).Acf(A._GetAutoObject(
A.Device.Device).AxQ);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad_={I:this},0);K.__proto__=C.X_;this.AeR.H(Aol);K.Ad_.PZ(1500);this.UL.R(Aom);
this.UL.Z(true);this.AeR.Ax(A.aaL(A.ach.ARV));K.Ad_.MK=[this,K.Bk$];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad_._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad_._ReInit();},_Mark:function(D){var B;if((B=this.Ad_)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.V2={Ave:A.jV,E7:function(){A.Device.V2.E7.call(this);this.Ave=A.jV;},_Init:function(
aArg){A.Device.V2._Init.call(this,aArg);this.__proto__=C.V2;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.AD$.__proto__=C.WF;C.String.__proto__=C.WF;C.ACf.__proto__=C.
WF;C.AHm.__proto__=C.WF;C.AHk.__proto__=C.WF;C.P2.__proto__=A.Device.ITable;C.G5.
__proto__=A.Device.ITable;C.AHl.__proto__=C.WF;C.V2.__proto__=A.Device.V2;};C._ReInit=
function(){var B;if((B=C.UK._this))B._ReInit(),C.UK._ReInit.call(B);if((B=C.AmC.
_this))B._ReInit(),C.AmC._ReInit.call(B);if((B=C.AuT._this))B._ReInit(),C.AuT._ReInit.
call(B);if((B=C.Ass._this))B._ReInit(),C.Ass._ReInit.call(B);if((B=C.W1._this))B.
_ReInit(),C.W1._ReInit.call(B);if((B=C.Au3._this))B._ReInit(),C.Au3._ReInit.call(
B);};C.DI=function(D){var B;if((B=C.UK._this)&&(B._cycle!=D))B._Done(C.UK._this=
null);if((B=C.AmC._this)&&(B._cycle!=D))B._Done(C.AmC._this=null);if((B=C.AuT._this
)&&(B._cycle!=D))B._Done(C.AuT._this=null);if((B=C.Ass._this)&&(B._cycle!=D))B._Done(
C.Ass._this=null);if((B=C.W1._this)&&(B._cycle!=D))B._Done(C.W1._this=null);if((
B=C.Au3._this)&&(B._cycle!=D))B._Done(C.Au3._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */