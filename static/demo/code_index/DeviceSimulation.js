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
Iw="Operator not handled:";var O$="1,8";var Qc="INFO: Device.StartScan() called.";
var Qd="INFO: Device.StopScan() called.";var CR="V0.";var Ff=".";var L9="\n";var
Qe="Temp: ";var J9="Battery: ";var Oh="%%";var Qf="Selected animal with row index";
var MR="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
Tf="1,2";var U1="0,1,2";var Aab="3900,3950,4000";var Xf="4050,4100,4150";var Ix=
"Read only";var U2="Unknown data export type: ";var Aac="Unhandled Device::DataExportType: ";
var U3="0,2,1";var Aad="650,150,700";var Xg="800,200,900";var Aae="800,200,850";
var Aaf="40000,4000,0";var U4="32,7,34,18,23,14";var Xh="16384";var Pa="1,1024";
var Aag="Simulate Scan";var Oi="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rq="%d.%m.%Y";var Xi="1";var Xj="2";var Tg="Unknown gender: ";var Xk="text/csv";
var Aah="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Xl="hit-geburt-%d-%m-%Y_%H-%M.csv";var Xm="animals-%d-%m-%Y_%H-%M.csv";var Th=
"zugang-%d-%m-%Y_%H-%M.csv";var Ti="M";var Tj="F";var Aai="?";var Tk="%Y-%m-%d";
var Aaj="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var AfG="ERROR: Cannot start transaction";
var Aak="Nested transactions are not allowed.";var Xn="Transaction not opened.";
var Aal="Wrong transaction ID.";var Xo="Unhandled TableId:";var AhY="Maximum number of rows reached.";
var K3="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcS=
"10";var LB="20";var AhZ="30";var Aoj="31";var Oj="32";var Xp="Severe: filter set when inserting row into table: ";
var Aam="Warning: DeviceSimulation::TableData not in transaction";var AfH="ERROR: Row not found with index [";
var Ah0="] while Rows Count = ";var AcT="ERROR: trying to access an inexistent row with Index=";
var U5="Invalid Device::SyncState";var Aok="Forwarding to home screen after 500 milliseconds ...";
var Aol="Forwarding to home screen canceled...";var Aom=[0,58,240,208];var Aon="VitalControl\nstarting up \u2026";
C.Table={GN:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akp],K.GN,0);},
CG:function(Ad,A4){var K=this.K;return K.GN.CG(Ad,A4);},V_:function(Ad,A4){var K=
this.K;return K.GN.V_(Ad,A4);},H7:function(Ad,A4){var K=this.K;return K.GN.H7(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GN.OnSetId(
E);},B8:function(){var K=this.K;return K.GN.B8();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GN.Bk(E);},V$:function(Ad,A4){var K=this.K;return K.
GN.V$(Ad,A4);},Sq:function(Ad,A4){var K=this.K;return K.GN.Sq(Ad,A4);},OG:function(
){var K=this.K;return K.GN.OG();},OI:function(AoW){var K=this.K;return K.GN.OI(AoW
);},YP:function(){var K=this.K;return K.GN.YP();},ZS:function(Ad,A4,C1){var K=this.
K;return K.GN.ZS(Ad,A4,C1);},Hp:function(Ad,A4,C1){var K=this.K;return K.GN.Hp(Ad
,A4,C1);},ZR:function(Ad,A4,C1){var K=this.K;return K.GN.ZR(Ad,A4,C1);},Ob:function(
Ad,A4,C1){var K=this.K;return K.GN.Ob(Ad,A4,C1);},ZQ:function(Ad,A4,C1){var K=this.
K;return K.GN.ZQ(Ad,A4,C1);},LZ:function(aColumn,A8){var K=this.K;return K.GN.LZ(
aColumn,A8);},KT:function(Ad,A4){var K=this.K;return K.GN.KT(Ad,A4);},UJ:function(
Ad,A4,C1){var K=this.K;return K.GN.UJ(Ad,A4,C1);},Aew:function(aColumn,A8){var K=
this.K;return K.GN.Aew(aColumn,A8);},E7:function(){var K=this.K;return K.GN.E7();
},AjM:function(aColumn,A8){var K=this.K;return K.GN.AjM(aColumn,A8);},Aep:function(
aColumn,A8){var K=this.K;return K.GN.Aep(aColumn,A8);},HM:function(){var K=this.
K;return K.GN.HM();},AbB:function(){var K=this.K;return K.GN.AbB();},QN:function(
){var K=this.K;return K.GN.QN();},_Init:function(aArg){var K=this.K;C.GN._Init.call(
K.GN={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GN._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GN._ReInit();},_Mark:function(D){var B;if((B=this.GN)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGL={Tr:A.abi(42,null,null),CG:function(aColumn){var B;this.Aax(aColumn);var Aq=(
C.AEb.isPrototypeOf(B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},V_:function(aColumn){var B;this.Aax(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},H7:function(aColumn
){var B;this.Aax(aColumn);var Aq=(C.ACh.isPrototypeOf(B=this.Tr.Get(aColumn))?B:
null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Cf+aColumn.toFixed())+BD);return false;
},Hp:function(aColumn,A8){this.Aax(aColumn);var Aq=A._NewObject(C.AEb,0);Aq.A5=A8;
this.Tr.Set(aColumn,Aq);return true;},ZQ:function(aColumn,A8){this.Aax(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},Ob:
function(aColumn,A8){this.Aax(aColumn);var Aq=A._NewObject(C.ACh,0);Aq.A5=A8;this.
Tr.Set(aColumn,Aq);return true;},Aax:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E8+aColumn.toFixed())+Hs);},Bkk:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJZ(this.CG(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.Bzf(this.
Sq(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
Bze(this.V_(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.Bzd(this.H7(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJZ(this.CG(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJZ(this.CG(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.Bzi(this.V$(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Bzg(this.KT(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.Bzh(this.KT(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zs&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OK&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJZ(this.CG(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else throw new Error(I0);},AJZ:function(Fu,Eb,GB){
switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:
return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new
Error(Iw+Eb.toFixed());}},Bze:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;
case 2:return Fu>GB;case 3:return Fu<GB;case 4:{A.ab5("%s%e%s%i",Fu,Eb,GB,Fu.indexOf(
GB,0));return Fu.indexOf(GB,0)>=0;}case 5:return Fu!==GB;default:throw new Error(
Iw+Eb.toFixed());}},Bzd:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case
2:case 3:case 4:return false;case 5:return Fu!==GB;default:throw new Error(Iw+Eb.
toFixed());}},V$:function(aColumn){var B;this.Aax(aColumn);var Aq=(C.AHo.isPrototypeOf(
B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},ZS:function(aColumn
,A8){this.Aax(aColumn);var Aq=A._NewObject(C.AHo,0);Aq.A5=A8;this.Tr.Set(aColumn
,Aq);return true;},Bzi:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:
return Fu>GB;case 3:return Fu<GB;case 4:return Fu.toFixed().indexOf(GB.toFixed()
,0)>=0;case 5:return Fu!==GB;default:throw new Error(Iw+Eb.toFixed());}},Sq:function(
aColumn){var B;this.Aax(aColumn);var Aq=(C.AHm.isPrototypeOf(B=this.Tr.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},ZR:function(aColumn,A8){this.Aax(aColumn
);var Aq=A._NewObject(C.AHm,0);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},Bzf:
function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<
GB;case 4:return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:
throw new Error(Iw+Eb.toFixed());}},KT:function(aColumn){var B;this.Aax(aColumn);
var Aq=(C.AHn.isPrototypeOf(B=this.Tr.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},UJ:function(aColumn,A8){this.Aax(aColumn);var Aq=A._NewObject(C.AHn,0
);Aq.A5=A8;this.Tr.Set(aColumn,Aq);return true;},Bzg:function(Fu,Eb,GB){switch(Eb
){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:return Fu.
toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new Error(
Iw+Eb.toFixed());}},Bzh:function(Fu,Eb,GB,AtD,AJk){var ALe=Fu.toFixed();ALe=A.ab2(
A.abV(ALe,ALe.length-AtD),AJk);Fu=Math.trunc(Fu/A._GetAutoObject(A.Device.Helper
).ApX(AtD))%A._GetAutoObject(A.Device.Helper).ApX(AJk);var ALI=A.ab0(GB,0,10);switch(
Eb){case 0:return Fu===ALI;case 2:return Fu>ALI;case 3:return Fu<ALI;case 4:return ALe.
indexOf(GB,0)>=0;case 5:return Fu!==ALI;default:throw new Error(Iw+Eb.toFixed());
}},_Init:function(aArg){(this.Tr=[]).__proto__=C.AGL.Tr;this.__proto__=C.AGL;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tr,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.WF={_Init:function(
aArg){this.__proto__=C.WF;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.AEb={A5:0,_Init:function(aArg){C.WF._Init.call(this,aArg);this.__proto__=C.AEb;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
WF._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ACh={A5:false,_Init:function(aArg){C.WF._Init.call(this,aArg);this.__proto__=
C.ACh;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Auv:null,Ai5:null,AaZ:
null,CQ:function(){var K=this.K;K.A$Y.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zv(3);A.zX([this,K.BgT],[B=K.Auv,B.A9H,B.ATX],0);this.UpdateAutoActions(
O$);K.A$Y.call(this,this);this.AsB(this);this.AsC(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asz(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=28;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnI(languageValue);A.pe([this
,K.AUo],this);},Zv:function(E){this.UpdateActiveScreen(E);},AwD:function(E){this.
UpdateBatteryChargeState(E);},AFl:function(E){this.UpdateChargeActive(E);},Asa:function(
E){this.UpdateScanState(E);},Aw2:function(E){this.UpdateMeasureState(E);},Axe:function(
E){this.UpdateTempValue(E);},AnI:function(E){this.UpdateLanguage(E);},Axf:function(
E){this.UpdateTemperatureUnit(E);},AFj:function(E){this.UpdateBrightness(E);},AFR:
function(E){this.UpdateMonitoring(E);},AxQ:function(){var B;if(A._GetAutoObject(
C.UK).AxK){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).ALk(this
);}},AhQ:function(){var B;A._GetAutoObject(A.Device.Helper).S0.An4(this);this.UpdateMeasureState(
0);},AhN:function(){var K=this.K;A.ab5("%s",Qc);this.UpdateScanState(1);A.pe([this
,K.BgT],this);},An5:function(){var K=this.K;var B;A.ab5("%s",Qd);K.Ai5.An4(this);
this.UpdateScanState(0);},SetSystemTime:function(Aib){},AxJ:function(){A.Device.
DeviceClass.Bbn.call(this);this.Zv(1);},AGI:function(){A.Device.DeviceClass.Bbl.
call(this);this.Zv(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axm:function(
E){this.UpdateUnderTemp(E);},Acf:function(E){this.UpdateSyncState(E);},ADo:function(
){var aString;aString=((((((((((CR+A.abz(0,9).toFixed())+Ff)+A.abz(0,9).toFixed(
))+L9)+Qe)+A.abz(30,90).toFixed())+A.aaR(A.acf.AHa))+L9)+J9)+A.abz(1,100).toFixed(
))+Oh;return aString;},PopupStateChanged:function(Ka,Ae){var Ags=A._NewObject(C.
PopupContext,0);Ags.Id=Ka;Ags.EN=Ae;this.AnT.Trigger(Ags,false);},AGg:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Afd:function(E){this.UpdateVibrationOn(
E);},Axa:function(E){this.UpdateRatingMode(E);},Ae5:function(E){this.UpdateFlashLightOn(
E);},UB:function(E){this.UpdateTopLightOn(E);},WR:function(E){this.UpdateRGBTopLight(
E);},AwB:function(E){this.UpdateAutoRegistrationMode(E);},Asb:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OU:function(E){this.UpdateDigitsID(
E);},PZ:function(E){this.UpdateOffsetID(E);},AGk:function(E){this.UpdateWeightValue(
E);},AwZ:function(E){this.UpdateMassUnit(E);},ArN:function(E){A.Device.DeviceClass.
Bbh.call(this,E);this.UpdateActiveActions(E);},ArO:function(E){A.Device.DeviceClass.
Bbi.call(this,E);this.UpdateActiveActionsOrder(E);},Akw:function(E){A.Device.DeviceClass.
Bbj.call(this,E);this.UpdateAutoActions(E);},AG8:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCE.call(this,this);},AsQ:function(){var K=this.K;var B;K.AaZ.An4(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axn:function(E
){this.UpdateWeightRecordingMode(E);},AFW:function(E){this.UpdatePredictedTempValue(
E);},SX:function(Md){A.ab5("%s%i",Qf,Md);},AFq:function(E){this.UpdateDemoMode(E
);},AE_:function(E){this.UpdateAgeRegistration(E);},Axo:function(E){this.UpdateWeightRecordingScope(
E);},J0:function(E){this.UpdateGender(E);},Ar2:function(E){this.UpdateIDLastUsedMale(
E);},Ar1:function(E){this.UpdateIDLastUsedFemale(E);},Zw:function(E){this.UpdateAnimalListContent(
E);},AFa:function(E){this.UpdateAlarmListAction(E);},AFt:function(E){this.UpdateFlashLightInMeasureState(
E);},Ae0:function(E){this.UpdateAnimalInfoContent(E);},AGj:function(E){this.UpdateWatchListAction(
E);},AFv:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArN(15359);this.ArO(MR);},ResetAutoActions:function(G){this.Akw(Tf);},Awz:
function(E){this.UpdateAnimalTypesString(E);},Ase:function(E){this.UpdateTemperaturesHighString(
E);},Asf:function(E){this.UpdateTemperaturesLowString(E);},AsB:function(G){this.
Awz(U1);this.Asf(Aab);this.Ase(Xf);this.Axm(3600);},AwT:function(E){this.UpdateFreshCowsHideMeasured(
E);},Ar8:function(E){this.UpdateNaisIdLastUsedMale(E);},Ar7:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw6:function(E){this.UpdateNaisIdIncrementMale(E);},Aw5:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bbo.call(this);A._GetAutoObject(
A.kR.A7).Cb(53);},AnC:function(E){this.UpdateBootloaderMessage(E);},AE7:function(
E){this.UpdateActionListAction(E);},Awx:function(E){this.UpdateActionListHideMeasured(
E);},Uv:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwL:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwM:function(E){this.UpdateDirectionOfCountingMale(
E);},AwN:function(E){this.UpdateDirectionOfCountingUnisex(E);},Ar3:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar9:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw7:function(E){this.UpdateNaisIdIncrementUnisex(E);},Aky:function(E){this.UpdateEartagNrAssignmentMode(
E);},N7:function(E){this.UpdateBreed(E);},AFP:function(E){throw new Error(Ix);},
AFJ:function(E){throw new Error(Ix);},AGe:function(E){throw new Error(Ix);},AFf:
function(E){throw new Error(Ix);},AFr:function(E){this.UpdateDryCowListAction(E);
},AJW:function(A1l){var QD;switch(A1l){case 15:QD=false;break;default:QD=true;}return QD;
},AFd:function(E){this.UpdateBirthListView(E);},AGf:function(E){this.UpdateTransferProgress(
E);},Asg:function(E){this.UpdateTransferTarget(E);},AsP:function(){var B;A.pe([B=
A._GetAutoObject(C.W1),B.BgX],this);},Aw$:function(E){this.UpdatePremisesID(E);}
,Aw4:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFw:function(E){this.
UpdateFreshCowSpan(E);},Axl:function(E){this.UpdateUSBDevice(E.Z8,E.AsZ,E.Ass);}
,AxP:function(){var K=this.K;var B;this.Gg.FileName=K.BjG.call(this,this.Gg.AgQ);
switch(this.Gg.AgQ){case 0:K.Bzr.call(this,(C.V2.isPrototypeOf(B=this.Gg)?B:null
));break;case 1:K.Bzo.call(this,(C.V2.isPrototypeOf(B=this.Gg)?B:null));break;case
2:K.Bzt.call(this,(C.V2.isPrototypeOf(B=this.Gg)?B:null));break;default:throw new
Error(U2+this.Gg.AgQ.toFixed());}},Arq:function(){return true;},AqL:function(){var
K=this.K;switch(this.Gg.AgQ){case 0:A._GetAutoObject(A.Device.Device).AZ(72,true
,A.jV,0,[this,K.A3L]);break;case 1:A._GetAutoObject(A.Device.Device).AZ(90,true,
A.jV,0,[this,K.A3L]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(99,true,A.
jV,0,[this,K.A3L]);break;default:throw new Error(Aac+this.Gg.AgQ.toFixed());}},AF3:
function(E){throw new Error(Ix);},Awy:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AF5:function(E){this.UpdateShutdownTimer(E);},AsC:function(G){this.AwA(U3);
this.Ask(Aad);this.Asj(Xg);this.Asi(Aae);this.Asl(Aaf);},Asj:function(E){this.UpdateWeightGainsHighString(
E);},Ask:function(E){this.UpdateWeightGainsLowString(E);},AwA:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Asi:function(E){this.UpdateWeightGainsAverageString(E);},Asl:function(E){this.
UpdateWeightValueBirthString(E);},AwO:function(E){this.UpdateEvaluationAnimalType(
E);},Axd:function(E){this.UpdateStartScreen(E);},AEf:function(){return 1;},AEg:function(
){return 1;},AFO:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axj:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nt:function(E){this.UpdateWhereAbouts(
E);},ArQ:function(E){this.UpdateActiveMassRecordingFields(E);},ArR:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asz:function(G){this.ArQ(A.jV);this.ArR(
U4);},AFM:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},X9:function(
){A._GetAutoObject(C.W1).AwC(true);return true;},Aqw:function(){var B;A._GetAutoObject(
C.W1).Aqw(this);return true;},Aqv:function(){var B;A.pe([B=A._GetAutoObject(C.W1
),B.Aqv],this);return true;},Aqx:function(){var B;A.pe([B=A._GetAutoObject(C.W1)
,B.Bh2],this);return true;},Aw1:function(E){this.UpdateMaxWeightValuePrecision(E
);},Aw8:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw8(Xh);},Aw9:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw9(Pa);},Axq:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axq(Pa);},Axk:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asy:function(AoK,AJs){this.Gg.E7();this.Gg.AgQ=AoK;this.Gg.AVh=AJs;this.Gg.E5(
1);this.Gg.E5(2);this.AxP();},AFe:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFX:function(E){this.UpdatePurchasedListResetOnExport(E);},BCo:function(G){
switch(this.In){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},BgT:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Auv.AG3)K.Ai5.
An2(this);A.ab5("%s",Aag);},BCE:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Auv.AxK)K.AaZ.An2(this);},BDl:function(G){this.UpdateMeasureState(3);},AUo:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.ALk],[
B=K.Auv,B.A9I,B.ATY],0);this.R7.AFp(A._GetAutoObject(A.Device.Helper).A7n(8));this.
SG.AFp(A._GetAutoObject(A.Device.Helper).A7n(8));},A$Y:function(G){var Az2=A._NewObject(
A.Device.AxO,0);Az2.OnSetTimestamp(1747383260);Az2.AFK(1);Az2.AFQ(0);Az2.AF0(0);
this.SG=Az2;var Azx=A._NewObject(A.Device.AxO,0);Azx.OnSetTimestamp(1747383260);
Azx.AFK(1);Azx.AFQ(0);Azx.AF0(6);this.R7=Azx;var Al0=A._NewObject(A.Device.AvE,0
);Al0.AFH(1);Al0.AFI(0);Al0.AFG(0);Al0.AGc(1);Al0.AGd(0);Al0.AGb(0);Al0.OnSetTimestamp(
1747383260);this.Q4=Al0;var Amr=A._NewObject(A.Device.AvE,0);Amr.AFH(1);Amr.AFI(
0);Amr.AFG(0);Amr.AGc(1);Amr.AGd(0);Amr.AGb(0);Amr.OnSetTimestamp(1747383260);this.
S6=Amr;this.AhM=A.aaR(A.acf.Unknown);},BzN:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},Bzr:function(
Ac4){var K=this.K;var B;var Adf=Oi;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Ami=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B8();O++){Cz.E3(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Adf=Adf+(((((((((((((((((
K.App.call(this,A._GetAutoObject(A.Device.Device).OZ)+String.fromCharCode(0x3B))+
K.App.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A2G.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.BdQ.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.BdP.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.BzS.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BdR.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.BzV.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.App.call(this
,Cz.NaisIdMother))+L9);Ami++;}}Ac4.Avf=Adf;Ac4.AGM=Ami;Ac4.E5(3);},App:function(
Ru){if(!Ru)return A.jV;return Ru.toFixed();},A2G:function(Azb){var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(Azb);return Av.Format(Rq);},BdQ:function(Ac3){if(!Ac3
)return A.jV;return A._GetAutoObject(A.Device.Converter).A53(Ac3).toFixed();},BdP:
function(Ma){var result=A.jV;switch(Ma){case 0:result=Xi;break;case 1:result=Xj;
break;case 2:result=A.jV;break;default:A.ab5("%s",Tg+Ma.toFixed());}return result;
},BzS:function(AJl){if(!AJl)return A.jV;return AJl.toFixed();},BdR:function(AfS){
if(!AfS)return A.jV;return AfS.toFixed();},BzV:function(Atw){return(Atw+1).toFixed(
);},A3L:function(G){var K=this.K;var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!Ar)return;if(Ar.PopupState===7){K.BzN.call(this,this.Gg.FileName,
Xk,(C.V2.isPrototypeOf(B=this.Gg)?B:null).Avf);this.Gg.E7();}else if(Ar.PopupState===
8)this.Gg.E7();},Bzo:function(Ac4){var K=this.K;var B;var Adf=Aah;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Ami=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B8();O++){var Azt=A.jV;if(Cz.Arp())Azt=K.BzX.call(this,Cz.FirstBodyWeight);Cz.E3(
O,A._GetAutoObject(A.Device.Device).An);Adf=Adf+(((((((((((K.App.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.BzT.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.App.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.BzR.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BzW.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azt)+L9);Ami++;}Ac4.Avf=Adf;Ac4.AGM=Ami;Ac4.E5(3);},BjG:function(
AoK){var AKf=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoK){case 0:AKf=Ac.Format(Xl);break;case 1:AKf=Ac.
Format(Xm);break;case 2:AKf=Ac.Format(Th);break;default:throw new Error(U2+AoK.toFixed(
));}return AKf;},BzT:function(Ru){return Ru.toFixed();},BzW:function(Ma){var result=
A.jV;switch(Ma){case 0:result=Ti;break;case 1:result=Tj;break;case 2:result=Aai;
break;default:A.ab5("%s",Tg+Ma.toFixed());}return result;},BzX:function(MX){if(MX<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Alb(MX);},BzR:function(
Azb){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(Azb);return Av.Format(Tk);},
Bzt:function(Ac4){var K=this.K;var B;var Adf=Aaj;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Ami=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B8();O++){Cz.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Adf=Adf+(((((((((((((K.App.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A2G.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A2G.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BdP.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.BdR.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.BdQ.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.App.
call(this,A._GetAutoObject(A.Device.Device).OZ))+L9);Ami++;}}Ac4.Avf=Adf;Ac4.AGM=
Ami;Ac4.E5(3);},_Init:function(aArg){var K=this.K;A.acl.Gn._Init.call(K.Ai5={I:this
},0);A.acl.Gn._Init.call(K.AaZ={I:this},0);K.__proto__=C.DeviceClass;this.AwD(100
);this.AnI(1);this.Ar2(200);this.Ar1(100);this.Ar8(276000912345678);this.Ar7(276000923456789
);this.Ar3(500);this.Ar9(276000901234567);this.N7(1);K.Ai5.HQ(1);K.Ai5.Fr(1000);
K.AaZ.WS(0);K.AaZ.HQ(1);K.AaZ.Fr(750);K.AaZ.B3=50000;this.Gg=A._NewObject(C.V2,0
);K.Ai5.SJ=[this,K.BCo];K.Auv=A._GetAutoObject(C.UK);K.AaZ.SJ=[this,K.BDl];K.AaZ.
Q=[this,this.AE4,this.AJa];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai5._Done();K.AaZ._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai5._ReInit();K.AaZ._ReInit();K.CQ.call(this);},_Mark:function(D){
var B;if((B=this.Auv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AHo={A5:0,_Init:function(aArg){C.WF._Init.call(this,aArg);this.__proto__=C.AHo;
},_className:"DeviceSimulation::UInt8"};C.AHm={A5:0,_Init:function(aArg){C.WF._Init.
call(this,aArg);this.__proto__=C.AHm;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4V:0,AF6:function(E){var K=this.K;K.A4V=K.A4V+(E-this.Dv());A.Device.
HelperClass.Bbk.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Bbg.call(this)+K.A4V;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$4={AxK:true,AG3:false,ATX:function(E){if(this.AG3===E)return;this.AG3=E;A.
abo([this,this.A9H,this.ATX],0);},A9H:function(){return this.AG3;},ATY:function(
E){if(this.AxK===E)return;this.AxK=E;A.abo([this,this.A9I,this.ATY],0);},A9I:function(
){return this.AxK;},_Init:function(aArg){this.__proto__=C.A$4;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UK={_Init:function(){C.A$4._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UK._variants();
},_this:null};C.PopupContext={EN:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ci:function(
AH){var HG=A.Device.Rating.Bbm.call(this,AH);if(HG){var RC=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.AnimalId);if(Ad
!==-1){var Jt=RC.OG();if(Jt<=0)A.ab5("%s",AfG);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.E3(Ad,RC);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){RC.A$W(Ad,5,this.Temperature);RC.AkV(Ad,17,this.RatingTemperature);RC.
Acu(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){RC.AU3(Ad,18,this.BodyWeight);RC.Acu(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){RC.AU3(Ad,23,this.BodyWeight);RC.Acu(
Ad,24,this.Timestamp);RC.Hp(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGC(this)){var LW=A._GetAutoObject(A.Device.Helper).ADs(this);RC.AkV(Ad,13,LW);
RC.Acu(Ad,31,this.Timestamp);}RC.OI(Jt);}}}return HG;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.P3={Gi:A.abi(512,null,null),Pp:0,AJL:
0,ALs:0,A4Y:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AK1:0,A4p:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BeJ:512,AAt:-1,A1W:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af_:false,CG:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.
CG(A4);return 0;},V_:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.V_(A4);
return A.jV;},H7:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.H7(A4);return false;
},V$:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.V$(A4);return 0;},Sq:function(
Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.Sq(A4);return 0;},OG:function(){if(this.
Af_)throw new Error(Aak);this.Af_=true;return 12345;},OI:function(AoW){if(!this.
Af_)throw new Error(Xn);if(AoW!==12345)throw new Error(Aal);this.Af_=false;return true;
},YP:function(){return this.A5r(A._NewObject(C.AGL,0));},ZS:function(Ad,A4,C1){var
Bd=this.T3(Ad);if(!!Bd)return Bd.ZS(A4,C1);return false;},Hp:function(Ad,A4,C1){
var Bd=this.T3(Ad);if(!!Bd)return Bd.Hp(A4,C1);return false;},ZR:function(Ad,A4,
C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.ZR(A4,C1);return false;},Ob:function(Ad
,A4,C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.Ob(A4,C1);return false;},ZQ:function(
Ad,A4,C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.ZQ(A4,C1);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bdp();switch(this.Id){case 0:{this.
BeJ=256;A.pe([this,this.Bxf],this);}break;case 1:A.pe([this,this.Bxh],this);break;
case 3:A.pe([this,this.Bxe],this);break;case 4:A.pe([this,this.Bxg],this);break;
case 2:break;default:throw new Error(Xo+this.Id.toFixed());}},B8:function(){return this.
Pp;},KT:function(Ad,A4){var Bd=this.T3(Ad);if(!!Bd)return Bd.KT(A4);return 0;},UJ:
function(Ad,A4,C1){var Bd=this.T3(Ad);if(!!Bd)return Bd.UJ(A4,C1);return false;}
,E7:function(){this.Bdp();return true;},HM:function(){return this.BeJ;},A5r:function(
Ad){if(this.Pp>=512)throw new Error(AhY);this.Gi.Set(this.Pp,Ad);this.Pp=this.Pp+
1;switch(this.Id){case 0:{this.AAt=this.Pp;this.Hp(this.Pp-1,0,this.AAt);}break;
case 1:{this.AAt=this.Pp-1;this.Hp(this.Pp-1,0,this.AAt);}break;default:;}A.pe([
this,this.Akp],this);return this.Pp-1;},T3:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gi.Get(aIndex);},Bdp:function(){var O;for(O=0;O<512;
O=O+1)this.Gi.Set(O,null);this.Pp=0;this.AJL=0;this.AK1=0;this.ALs=0;A.pe([this,
this.Akp],this);},AKv:function(){this.AJL=(this.AJL+1)%15;return this.A1W.Get(this.
AJL);},A2K:function(){this.ALs=(this.ALs+1)%10;return this.A4Y.Get(this.ALs);},AKh:
function(G){if(this.K&&this.K.AKh)return this.K.AKh.apply(this,arguments);else return C.
P3.Bxo.apply(this,arguments);},Bxo:function(G){var B;var Os=true;this.A2(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhS(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhS(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);this.A2(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhS(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhS(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhS(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhS(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhS(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A3,A._GetAutoObject(
A.Device.Device).AF);this.A2(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhS(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A3,A._GetAutoObject(A.Device.Device).AF);var O;var Bg5=0;for(O=
1;O<=7;O=O+1){Bg5=3680+(20*O);Os=Bg5>3800;this.A2(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhS(7-O),0,1,Os,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A3,A._GetAutoObject(A.Device.Device).AF);}},Bxf:function(s){this.AKh(s);},AKj:
function(G){if(this.K&&this.K.AKj)return this.K.AKj.apply(this,arguments);else return C.
P3.Bxq.apply(this,arguments);},Bxq:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var AiE;var BdH;for(O=0;O<32;O=O+1){var A2u=this.
Bz9();for(;A2u>0;A2u=A2u-1){AiE=this.A2K();BdH=A._GetAutoObject(A.Device.Converter
).AsR(0,AiE);this.AG(Ac,12310020,AiE,BdH,this.AKv(),this.AKv(),this.AKv(),this.AKv(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiE=this.A2K();this.AG(Ac,276000312310001,AiE,A._GetAutoObject(A.Device.Converter
).AsR(0,AiE),1,3,3,3,0);AiE=this.A2K();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsR(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiE,A._GetAutoObject(
A.Device.Converter).AsR(1,AiE),2,3,3,3,0);},Bxh:function(s){this.AKj(s);},A2:function(
Ka,BxP,Bx6,Bct,Atw,Ma,BxX,Bx2,BxZ,Bx0,MX,BxA,Bx4,BxY,Eo,Bx1,Ac3,AJl,AfS,Bx$,BAq,
BAr,BxF,Byb){var Cz=A._NewObject(A.Device.Animal,0);Cz.Gs();Cz.Axp(0);Cz.Afa(0);
Cz.Uz(false);Cz.AkD(false);if(BAr)Cz.P1(Ka);if(BAq)Cz.Nr(Ka);Cz.SQ(A._GetAutoObject(
A.Device.Helper).V6(Ka,Byb&0xFF,BxF&0xFF)|0);Cz.Aca(BxP);Cz.AnJ(Bx6);Cz.Q9(Bct);
Cz.Akx(Atw);Cz.J0(Ma);Cz.An0(BxX);Cz.AGW(Bx2);Cz.Ae8(Bx0);Cz.Uz(BxZ);Cz.Ar4(BxY);
Cz.AwX(Bx4);Cz.AwI(BxA);Cz.EC(Eo);Cz.Ae9(Bx1);Cz.N7(Ac3);Cz.Akz(AJl);Cz.Nt(AfS);
Cz.AnL(Bx$);Cz.Ci(this);if(MX>0)A._GetAutoObject(C.Ast).AG(Bct,Ka,0,0,0,0,0,0,MX
);},AG:function(L$,Ac1,AoU,Byk,BxJ,BxK,Bxt,Bym,Bxv){var B2=A._NewObject(A.Device.
Rating,0);B2.Gs();var Bc9=A._GetAutoObject(C.AmD).AOM(26,Ac1);if(Bc9>=0)B2.OnSetAnimalId(
A._GetAutoObject(C.AmD).CG(Bc9,0));else A.ab5("%s%U",K3,Ac1);B2.OnSetTimestamp(L$
);B2.OnSetTemperature(AoU);B2.OnSetRatingTemperature(Byk);B2.OnSetFaeces(BxJ);B2.
OnSetFeed(BxK);B2.OnSetAppearance(Bxt);B2.OnSetRespiratory(Bym);B2.OnSetBodyWeight(
Bxv);B2.Ci(this);},A60:function(aColumn,A8){var O;for(O=0;O<this.Pp;O=O+1)if(this.
Gi.Get(O).CG(aColumn)===A8)return O;return-1;},Bz9:function(){this.AK1=(this.AK1+
1)%10;return this.A4p.Get(this.AK1);},AKg:function(G){if(this.K&&this.K.AKg)return this.
K.AKg.apply(this,arguments);else return C.P3.Bxn.apply(this,arguments);},Bxn:function(
G){this.AlU(10,AcS);this.AlU(20,LB);this.AlU(30,AhZ);this.AlU(31,Aoj);this.AlU(32
,Oj);},Bxe:function(s){this.AKg(s);},AlU:function(Ka,BxQ){var AJF=A._NewObject(A.
Device.AnimalGroup,0);AJF.Gs();AJF.OnSetId(Ka);AJF.AFy(BxQ);AJF.Ci(this);},AbB:function(
){return this.AAt;},AOM:function(aColumn,A8){var O;for(O=0;O<this.Pp;O=O+1)if(this.
Gi.Get(O).KT(aColumn)===A8)return O;return-1;},AKi:function(G){if(this.K&&this.K.
AKi)return this.K.AKi.apply(this,arguments);else return C.P3.Bxp.apply(this,arguments
);},Bxp:function(G){this.AaH(2016,216,6);this.AaH(2017,217,7);this.AaH(2018,218,
8);this.AaH(2019,219,9);this.AaH(2020,220,10);this.AaH(2021,221,11);},Bxg:function(
s){this.AKi(s);},AaH:function(Ac_,BxE,BxD){var Vh=A._NewObject(A.Device.CalfDeregistrations
,0);Vh.Gs();Vh.AkI(Ac_);Vh.AwK(BxE);Vh.AwJ(BxD);Vh.Ci(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gi=[]).__proto__=C.P3.Gi;(this.A4Y=[
]).__proto__=C.P3.A4Y;(this.A4p=[]).__proto__=C.P3.A4p;(this.A1W=[]).__proto__=C.
P3.A1W;this.__proto__=C.P3;var J_=this._variants();if(J_){this.K={};J_._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gi,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.P3._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.AmD={_Init:function(){C.P3._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AuU={_Init:function(){C.P3.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Ast={_Init:function(){C.P3._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.GN={AlO:A.
abi(512,null,null),E$:null,Apm:0,CG:function(Ad,A4){var Bd=this.AaF(Ad);if(!!Bd)
return Bd.CG(A4);return 0;},V_:function(Ad,A4){var Bd=this.AaF(Ad);if(!!Bd)return Bd.
V_(A4);return A.jV;},H7:function(Ad,A4){var Bd=this.AaF(Ad);if(!!Bd)return Bd.H7(
A4);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AGm(A._GetAutoObject(C.AmD));break;case 1:this.AGm(A._GetAutoObject(
C.Ast));break;case 3:this.AGm(A._GetAutoObject(C.AuU));break;case 4:this.AGm(A._GetAutoObject(
C.Au4));break;case 2:break;default:throw new Error(Xo+this.Id.toFixed());}},B8:function(
){if(!!this.Filter)return this.Apm;else if(!!this.E$)return this.E$.Pp;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1U(this);},V$:function(Ad
,A4){var Bd=this.AaF(Ad);if(!!Bd)return Bd.V$(A4);return 0;},Sq:function(Ad,A4){
var Bd=this.AaF(Ad);if(!!Bd)return Bd.Sq(A4);return 0;},OG:function(){if(!!this.
E$)return this.E$.OG();return-1;},OI:function(AoW){var HG=false;if(!!this.E$)HG=
this.E$.OI(AoW);if(HG)A.pe([this,this.A1U],this);return HG;},YP:function(){if(!!
this.Filter)throw new Error(Xp+A._GetAutoObject(A.Device.Converter).Bjl(this.Id,
this.Filter));if(!!this.E$)return this.E$.A5r(A._NewObject(C.AGL,0));return-1;},
ZS:function(Ad,A4,C1){if(!this.E$.Af_)throw new Error(Aam);var Bd=this.AaF(Ad);if(
!!Bd)return Bd.ZS(A4,C1);return false;},Hp:function(Ad,A4,C1){if(!this.E$.Af_)throw new
Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.Hp(A4,C1);return false;},ZR:function(
Ad,A4,C1){if(!this.E$.Af_)throw new Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.
ZR(A4,C1);return false;},Ob:function(Ad,A4,C1){if(!this.E$.Af_)throw new Error(Aam
);var Bd=this.AaF(Ad);if(!!Bd)return Bd.Ob(A4,C1);return false;},ZQ:function(Ad,
A4,C1){if(!this.E$.Af_)throw new Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.
ZQ(A4,C1);return false;},LZ:function(aColumn,A8){if(!!this.Filter){var O;for(O=0;
O<this.Apm;O=O+1)if(this.AlO.Get(O).CG(aColumn)===A8)return O;return-1;}else if(
!!this.E$)return this.E$.A60(aColumn,A8);return-1;},KT:function(Ad,A4){var Bd=this.
AaF(Ad);if(!!Bd)return Bd.KT(A4);return 0;},UJ:function(Ad,A4,C1){if(!this.E$.Af_
)throw new Error(Aam);var Bd=this.AaF(Ad);if(!!Bd)return Bd.UJ(A4,C1);return false;
},Aew:function(aColumn,A8){if(!!this.Filter){var O;for(O=0;O<this.Apm;O=O+1)if(this.
AlO.Get(O).KT(aColumn)===A8)return O;return-1;}else if(!!this.E$)return this.E$.
AOM(aColumn,A8);return-1;},E7:function(){if(!!this.E$)return this.E$.E7();return false;
},AjM:function(aColumn,A8){if(!!this.E$)return this.E$.A60(aColumn,A8)>=0;return false;
},Aep:function(aColumn,A8){if(!!this.E$)return this.E$.AOM(aColumn,A8)>=0;return false;
},HM:function(){if(!!this.E$)return this.E$.HM();return 0;},AbB:function(){if(!!
this.E$)return this.E$.AbB();return-1;},QN:function(){if(!!this.E$)return this.E$.
Pp;return 0;},A1U:function(G){this.A18();if(!!this.Filter&&!!this.E$){var O;for(
O=0;O<this.E$.B8();O=O+1){var A2y=true;var Aw=this.Filter.AOZ();var Bd=this.E$.T3(
O);if(!!Bd)while(A2y&&!!Aw){A2y=Bd.Bkk(Aw);Aw=this.Filter.AO4(Aw);}else A.ab5("%s"
,((AfH+O.toFixed())+Ah0)+this.E$.B8().toFixed());if(A2y){this.AlO.Set(this.Apm,this.
E$.Gi.Get(O));this.Apm=this.Apm+1;}}}A.pe([this,this.Akp],this);},A18:function(){
var O;for(O=0;O<512;O=O+1)this.AlO.Set(O,null);this.Apm=0;},AGm:function(E){if(this.
E$===E)return;if(!!this.E$)A.z9([this,this.A4W],this.E$,0);this.E$=E;if(!!this.E$
){A.zV([this,this.A4W],this.E$,0);A.pe([this,this.A4W],this);}},A4W:function(G){
A.pe([this,this.A1U],this);},AaF:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlO.Get(aIndex);}else if(!!this.E$
)return this.E$.T3(aIndex);A.ab5("%s",AcT+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlO=[]).__proto__=C.GN.
AlO;this.__proto__=C.GN;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlO,D);if((B=this.E$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$5={KN:null,AdM:null,OE:null,AM6:false,ACe:
true,A4P:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Acf(1);this.AdM.As(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Acf(2);A._GetAutoObject(A.Device.Device).Asg(A._GetAutoObject(A.
Device.Device).An.QN());this.KN.Fr(A._GetAutoObject(A.Device.Device).Afw*50);this.
KN.B3=A._GetAutoObject(A.Device.Device).Afw;this.KN.As(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Acf(3);this.AdM.As(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Acf(4);A._GetAutoObject(A.Device.Device).Asg(A._GetAutoObject(A.Device.Device
).An.QN());this.KN.Fr(A._GetAutoObject(A.Device.Device).Afw*50);this.KN.B3=A._GetAutoObject(
A.Device.Device).Afw;this.KN.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Acf(5);this.AdM.As(true);}break;case 5:A.pe([this,this.BgX],this);break;case 7:
case 6:break;default:A.ab5("%s%e",U5,A._GetAutoObject(A.Device.Device).SyncState
);}},BBK:function(G){this.AdM.As(false);A.pe([this,this.A4P],this);},BCN:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Acf(0);A.pe([this,this.A4P],this);}break;default:;}},BgX:function(
G){this.AdM.As(false);this.KN.As(false);A._GetAutoObject(A.Device.Device).Acf(0);
},AwC:function(E){if(this.ACe===E)return;this.ACe=E;A.abo([this,this.Blk,this.AwC
],0);},Aqv:function(G){var B;this.OE.Cx=true;this.OE.B3=false;this.OE.Fr(100);this.
OE.HQ(1);this.OE.Q=[this,this.ASM,this.ATj];A.pe([B=this.OE,B.An2],this);},Bh2:function(
G){var B;this.OE.Cx=true;this.OE.B3=false;this.OE.Fr(400);this.OE.Uy(200);this.OE.
HQ(3);this.OE.Q=[this,this.ASM,this.ATj];this.AwC(false);A.pe([B=this.OE,B.An2],
this);},ATj:function(E){if(this.AM6===E)return;this.AM6=E;A.abo([this,this.ASM,this.
ATj],0);},Aqw:function(G){var B;this.OE.An4(this);this.AwC(false);},ByF:function(
XK){var ALG=A._NewObject(A.Device.AV2,0);if(XK){ALG.AT$(6);ALG.ATN(16900);ALG.AUb(
1529);}A._GetAutoObject(A.Device.Device).Axl(ALG);this.AwC(XK);},Blk:function(){
return this.ACe;},ASM:function(){return this.AM6;},_Init:function(aArg){A.acl.Gn.
_Init.call(this.KN={I:this},0);A.Core.Timer._Init.call(this.AdM={I:this},0);A.acl.
TR._Init.call(this.OE={I:this},0);this.__proto__=C.A$5;var B;this.KN.HQ(1);this.
AdM.P0(2000);this.KN.SJ=[this,this.A4P];this.KN.Q=[B=A._GetAutoObject(A.Device.Device
),B.AS$,B.A0W];this.AdM.MK=[this,this.BBK];A.h7++;},_Done:function(){this.__proto__=
null;this.KN._Done();this.AdM._Done();this.OE._Done();A.h7--;},_ReInit:function(
){this.KN._ReInit();this.AdM._ReInit();this.OE._ReInit();},_Mark:function(D){var
B;if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.W1={_Init:function(){C.A$5._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AHn={A5:0,_Init:function(aArg){C.WF._Init.
call(this,aArg);this.__proto__=C.AHn;},_className:"DeviceSimulation::UInt64"};C.
Au4={_Init:function(){C.P3._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Du:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
BI.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X_={Ad$:null,CC:function(G){var K=this.K;A.ab5("%s",Aok);K.Ad$.As(true);},E4:
function(G){var K=this.K;if(K.Ad$.Bw===true){K.Ad$.As(false);A.ab5("%s",Aol);}},
Blb:function(G){var K=this.K;K.Ad$.As(false);A._GetAutoObject(A.kR.A7).Acg(A._GetAutoObject(
A.Device.Device).AxR);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad$={I:this},0);K.__proto__=C.X_;this.AeS.H(Aom);K.Ad$.P0(1500);this.UL.R(Aon);
this.UL.Z(true);this.AeS.Ax(A.aaL(A.ach.ARX));K.Ad$.MK=[this,K.Blb];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad$._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad$._ReInit();},_Mark:function(D){var B;if((B=this.Ad$)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.V2={Avf:A.jV,E7:function(){A.Device.V2.E7.call(this);this.Avf=A.jV;},_Init:function(
aArg){A.Device.V2._Init.call(this,aArg);this.__proto__=C.V2;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.AEb.__proto__=C.WF;C.String.__proto__=C.WF;C.ACh.__proto__=C.
WF;C.AHo.__proto__=C.WF;C.AHm.__proto__=C.WF;C.P3.__proto__=A.Device.ITable;C.GN.
__proto__=A.Device.ITable;C.AHn.__proto__=C.WF;C.V2.__proto__=A.Device.V2;};C._ReInit=
function(){var B;if((B=C.UK._this))B._ReInit(),C.UK._ReInit.call(B);if((B=C.AmD.
_this))B._ReInit(),C.AmD._ReInit.call(B);if((B=C.AuU._this))B._ReInit(),C.AuU._ReInit.
call(B);if((B=C.Ast._this))B._ReInit(),C.Ast._ReInit.call(B);if((B=C.W1._this))B.
_ReInit(),C.W1._ReInit.call(B);if((B=C.Au4._this))B._ReInit(),C.Au4._ReInit.call(
B);};C.DI=function(D){var B;if((B=C.UK._this)&&(B._cycle!=D))B._Done(C.UK._this=
null);if((B=C.AmD._this)&&(B._cycle!=D))B._Done(C.AmD._this=null);if((B=C.AuU._this
)&&(B._cycle!=D))B._Done(C.AuU._this=null);if((B=C.Ast._this)&&(B._cycle!=D))B._Done(
C.Ast._this=null);if((B=C.W1._this)&&(B._cycle!=D))B._Done(C.W1._this=null);if((
B=C.Au4._this)&&(B._cycle!=D))B._Done(C.Au4._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */