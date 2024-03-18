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
Ip="Operator not handled:";var O1="1,8";var P2="INFO: Device.StartScan() called.";
var P3="INFO: Device.StopScan() called.";var CQ="V0.";var Fb=".";var Lt="\n";var
P4="Temp: ";var JY="Battery: ";var N_="%%";var P5="Selected animal with row index";
var ME="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S5="1,2";var UP="0,1,2";var Z4="3900,3950,4000";var W2="4050,4100,4150";var Iq="Read only";
var UQ="Unknown data export type: ";var Z5="Unhandled Device::DataExportType: ";
var W3="0,2,1";var Z6="650,150,700";var W4="800,200,900";var Z7="800,200,850";var
Z8="40000,4000,0";var UR="32,7,34,18,23,14";var W5="16384";var P6="1,1024";var Z9=
"1,256,1024";var O2="Simulate Scan";var Ri="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var W6="%d.%m.%Y";var W7="1";var W8="2";var W9="Unknown gender: ";var Z_="text/csv";
var W_="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W$="hit-geburt-%d-%m-%Y_%H-%M.csv";var S6="animals-%d-%m-%Y_%H-%M.csv";var US=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var UT="herde-zugang-%d-%m-%Y_%H-%M.csv";var AcM=
"M";var S7="F";var Z$="?";var Afw="%Y-%m-%d";var Aaa="BNR15;LOM;ZUGA_DAT\n";var Xa=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
Aab="ERROR: Cannot start transaction";var Aac="Nested transactions are not allowed.";
var AhP="Transaction not opened.";var JZ="Wrong transaction ID.";var Aad="Unhandled TableId:";
var Lu="Maximum number of rows reached.";var AhQ="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var Aoc="10";var N$="20";var Xb="30";var Aod="31";var AhR="32";var AhS="Severe: filter set when inserting row into table: ";
var Rj="Warning: DeviceSimulation::TableData not in transaction";var UU="ERROR: Row not found with index [";
var Aoe="] while Rows Count = ";var Aof="ERROR: trying to access an inexistent row with Index=";
var Aog="Invalid Device::SyncState";var Aoh="Forwarding to home screen after 500 milliseconds ...";
var Afx="Forwarding to home screen canceled...";var Ala=[0,58,240,208];var Aoi="VitalControl\nstarting up \u2026";
C.Table={GI:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akn],K.GI,0);},
CE:function(Ad,A3){var K=this.K;return K.GI.CE(Ad,A3);},VV:function(Ad,A3){var K=
this.K;return K.GI.VV(Ad,A3);},H1:function(Ad,A3){var K=this.K;return K.GI.H1(Ad
,A3);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GI.OnSetId(
E);},Ca:function(){var K=this.K;return K.GI.Ca();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.GI.Bl(E);},VX:function(Ad,A3){var K=this.K;return K.
GI.VX(Ad,A3);},Sh:function(Ad,A3){var K=this.K;return K.GI.Sh(Ad,A3);},Ox:function(
){var K=this.K;return K.GI.Ox();},Oz:function(AoR){var K=this.K;return K.GI.Oz(AoR
);},YF:function(){var K=this.K;return K.GI.YF();},ZK:function(Ad,A3,C0){var K=this.
K;return K.GI.ZK(Ad,A3,C0);},Hj:function(Ad,A3,C0){var K=this.K;return K.GI.Hj(Ad
,A3,C0);},ZJ:function(Ad,A3,C0){var K=this.K;return K.GI.ZJ(Ad,A3,C0);},N4:function(
Ad,A3,C0){var K=this.K;return K.GI.N4(Ad,A3,C0);},ZI:function(Ad,A3,C0){var K=this.
K;return K.GI.ZI(Ad,A3,C0);},LS:function(aColumn,A7){var K=this.K;return K.GI.LS(
aColumn,A7);},KM:function(Ad,A3){var K=this.K;return K.GI.KM(Ad,A3);},Ux:function(
Ad,A3,C0){var K=this.K;return K.GI.Ux(Ad,A3,C0);},AgQ:function(aColumn,A7){var K=
this.K;return K.GI.AgQ(aColumn,A7);},Hi:function(){var K=this.K;return K.GI.Hi();
},AjJ:function(aColumn,A7){var K=this.K;return K.GI.AjJ(aColumn,A7);},Aeh:function(
aColumn,A7){var K=this.K;return K.GI.Aeh(aColumn,A7);},HG:function(){var K=this.
K;return K.GI.HG();},Abq:function(){var K=this.K;return K.GI.Abq();},QF:function(
){var K=this.K;return K.GI.QF();},_Init:function(aArg){var K=this.K;C.GI._Init.call(
K.GI={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GI._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GI._ReInit();},_Mark:function(D){var B;if((B=this.GI)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGn={Tc:A.abi(42,null,null),CE:function(aColumn){var B;this.Aap(aColumn);var Aq=(
C.ADM.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;
},VV:function(aColumn){var B;this.Aap(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return A.jV;},H1:function(aColumn
){var B;this.Aap(aColumn);var Aq=(C.ABR.isPrototypeOf(B=this.Tc.Get(aColumn))?B:
null);if(!!Aq)return Aq.A4;else A.ab5("%s",(Cd+aColumn.toFixed())+BF);return false;
},Hj:function(aColumn,A7){this.Aap(aColumn);var Aq=A._NewObject(C.ADM,0);Aq.A4=A7;
this.Tc.Set(aColumn,Aq);return true;},ZI:function(aColumn,A7){this.Aap(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},N4:
function(aColumn,A7){this.Aap(aColumn);var Aq=A._NewObject(C.ABR,0);Aq.A4=A7;this.
Tc.Set(aColumn,Aq);return true;},Aap:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E4+aColumn.toFixed())+Hm);},Bja:function(AH){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.AJH(this.CE(AH.EK),AH.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.Bx$(this.
Sh(AH.EK),AH.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null).
A4);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AH)?AH:null))return this.
Bx_(this.VV(AH.EK),AH.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AH)?
AH:null).A4);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AH)?AH:null))
return this.Bx9(this.H1(AH.EK),AH.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJH(this.CE(AH.EK),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJH(this.CE(AH.EK),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Byc(this.VX(AH.EK),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bya(this.KM(AH.EK),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Byb(this.KM(AH.EK),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A4,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).Zm&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).OA&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJH(this.CE(AH.EK),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else throw new Error(IQ);},AJH:function(Fp,Eb,Gx){
switch(Eb){case 0:return Fp===Gx;case 2:return Fp>Gx;case 3:return Fp<Gx;case 4:
return Fp.toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fp!==Gx;default:throw new
Error(Ip+Eb.toFixed());}},Bx_:function(Fp,Eb,Gx){switch(Eb){case 0:return Fp===Gx;
case 2:return Fp>Gx;case 3:return Fp<Gx;case 4:{A.ab5("%s%e%s%i",Fp,Eb,Gx,Fp.indexOf(
Gx,0));return Fp.indexOf(Gx,0)>=0;}case 5:return Fp!==Gx;default:throw new Error(
Ip+Eb.toFixed());}},Bx9:function(Fp,Eb,Gx){switch(Eb){case 0:return Fp===Gx;case
2:case 3:case 4:return false;case 5:return Fp!==Gx;default:throw new Error(Ip+Eb.
toFixed());}},VX:function(aColumn){var B;this.Aap(aColumn);var Aq=(C.AG2.isPrototypeOf(
B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;},ZK:function(aColumn
,A7){this.Aap(aColumn);var Aq=A._NewObject(C.AG2,0);Aq.A4=A7;this.Tc.Set(aColumn
,Aq);return true;},Byc:function(Fp,Eb,Gx){switch(Eb){case 0:return Fp===Gx;case 2:
return Fp>Gx;case 3:return Fp<Gx;case 4:return Fp.toFixed().indexOf(Gx.toFixed()
,0)>=0;case 5:return Fp!==Gx;default:throw new Error(Ip+Eb.toFixed());}},Sh:function(
aColumn){var B;this.Aap(aColumn);var Aq=(C.AG0.isPrototypeOf(B=this.Tc.Get(aColumn
))?B:null);if(!!Aq)return Aq.A4;return 0;},ZJ:function(aColumn,A7){this.Aap(aColumn
);var Aq=A._NewObject(C.AG0,0);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},Bx$:
function(Fp,Eb,Gx){switch(Eb){case 0:return Fp===Gx;case 2:return Fp>Gx;case 3:return Fp<
Gx;case 4:return Fp.toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fp!==Gx;default:
throw new Error(Ip+Eb.toFixed());}},KM:function(aColumn){var B;this.Aap(aColumn);
var Aq=(C.AG1.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;
return 0;},Ux:function(aColumn,A7){this.Aap(aColumn);var Aq=A._NewObject(C.AG1,0
);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},Bya:function(Fp,Eb,Gx){switch(Eb
){case 0:return Fp===Gx;case 2:return Fp>Gx;case 3:return Fp<Gx;case 4:return Fp.
toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fp!==Gx;default:throw new Error(
Ip+Eb.toFixed());}},Byb:function(Fp,Eb,Gx,Atp,AI5){var AKZ=Fp.toFixed();AKZ=A.ab2(
A.abV(AKZ,AKZ.length-Atp),AI5);Fp=Math.trunc(Fp/A._GetAutoObject(A.Device.Helper
).ApS(Atp))%A._GetAutoObject(A.Device.Helper).ApS(AI5);var ALr=A.ab0(Gx,0,10);switch(
Eb){case 0:return Fp===ALr;case 2:return Fp>ALr;case 3:return Fp<ALr;case 4:return AKZ.
indexOf(Gx,0)>=0;case 5:return Fp!==ALr;default:throw new Error(Ip+Eb.toFixed());
}},_Init:function(aArg){(this.Tc=[]).__proto__=C.AGn.Tc;this.__proto__=C.AGn;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tc,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wp={_Init:function(
aArg){this.__proto__=C.Wp;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADM={A4:0,_Init:function(aArg){C.Wp._Init.call(this,aArg);this.__proto__=C.ADM;
},_className:"DeviceSimulation::Int32"};C.String={A4:A.jV,_Init:function(aArg){C.
Wp._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABR={A4:false,_Init:function(aArg){C.Wp._Init.call(this,aArg);this.__proto__=
C.ABR;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aug:null,AJN:null,Ai1:
null,AaP:null,CP:function(){var K=this.K;K.A_2.call(this,this);},Init:function(aArg
){var K=this.K;var B;this.Zp(3);A.zX([this,K.BfQ],[B=K.Aug,B.A8Q,B.ATr],0);this.
UpdateAutoActions(O1);K.A_2.call(this,this);this.Asq(this);this.Asr(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Aso(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Anz(languageValue);A.pe([this
,K.ATS],this);},Zp:function(E){this.UpdateActiveScreen(E);},Awo:function(E){this.
UpdateBatteryChargeState(E);},AEW:function(E){this.UpdateChargeActive(E);},Ar3:function(
E){this.UpdateScanState(E);},AwN:function(E){this.UpdateMeasureState(E);},Aw1:function(
E){this.UpdateTempValue(E);},Anz:function(E){this.UpdateLanguage(E);},Aw2:function(
E){this.UpdateTemperatureUnit(E);},AEU:function(E){this.UpdateBrightness(E);},AFr:
function(E){this.UpdateMonitoring(E);},Axz:function(){var B;if(A._GetAutoObject(
C.Uy).Axu){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK5(this
);}},AhG:function(){var B;A._GetAutoObject(A.Device.Helper).SO.AnW(this);this.UpdateMeasureState(
0);},AhD:function(){var K=this.K;A.ab5("%s",P2);this.UpdateScanState(1);A.pe([this
,K.BfQ],this);},AnX:function(){var K=this.K;var B;A.ab5("%s",P3);K.Ai1.AnW(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah5){},Axt:function(){A.Device.
DeviceClass.Baq.call(this);this.Zp(1);},AGk:function(){A.Device.DeviceClass.Bao.
call(this);this.Zp(2);},Ds:function(E){this.UpdateOverlayMenu(E);},Aw8:function(
E){this.UpdateUnderTemp(E);},Ab9:function(E){this.UpdateSyncState(E);},ACZ:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Fb)+A.abz(0,9).toFixed(
))+Lt)+P4)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGP))+Lt)+JY)+A.abz(1,100).toFixed(
))+N_;return aString;},PopupStateChanged:function(J1,Ae){var Agi=A._NewObject(C.
PopupContext,0);Agi.Id=J1;Agi.Gu=Ae;this.AnL.Trigger(Agi,false);},AFT:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae7:function(E){this.UpdateVibrationOn(
E);},AwX:function(E){this.UpdateRatingMode(E);},AeX:function(E){this.UpdateFlashLightOn(
E);},Un:function(E){this.UpdateTopLightOn(E);},WC:function(E){this.UpdateRGBTopLight(
E);},Awn:function(E){this.UpdateAutoRegistrationMode(E);},Ar4:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OL:function(E){this.UpdateDigitsID(
E);},PN:function(E){this.UpdateOffsetID(E);},AFX:function(E){this.UpdateWeightValue(
E);},AwK:function(E){this.UpdateMassUnit(E);},ArD:function(E){A.Device.DeviceClass.
Bak.call(this,E);this.UpdateActiveActions(E);},ArE:function(E){A.Device.DeviceClass.
Bal.call(this,E);this.UpdateActiveActionsOrder(E);},Aku:function(E){A.Device.DeviceClass.
Bam.call(this,E);this.UpdateAutoActions(E);},AGL:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBv.call(this,this);},AsF:function(){var K=this.K;var B;K.AaP.AnW(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Aw9:function(E
){this.UpdateWeightRecordingMode(E);},AFw:function(E){this.UpdatePredictedTempValue(
E);},SL:function(L6){A.ab5("%s%i",P5,L6);},AE2:function(E){this.UpdateDemoMode(E
);},AEJ:function(E){this.UpdateAgeRegistration(E);},Aw_:function(E){this.UpdateWeightRecordingScope(
E);},JP:function(E){this.UpdateGender(E);},ArT:function(E){this.UpdateIDLastUsedMale(
E);},ArS:function(E){this.UpdateIDLastUsedFemale(E);},Zq:function(E){this.UpdateAnimalListContent(
E);},AEL:function(E){this.UpdateAlarmListAction(E);},AE5:function(E){this.UpdateFlashLightInMeasureState(
E);},AeS:function(E){this.UpdateAnimalInfoContent(E);},AFW:function(E){this.UpdateWatchListAction(
E);},AE7:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArD(15359);this.ArE(ME);},ResetAutoActions:function(G){this.Aku(S5);},Awl:
function(E){this.UpdateAnimalTypesString(E);},Ar6:function(E){this.UpdateTemperaturesHighString(
E);},Ar7:function(E){this.UpdateTemperaturesLowString(E);},Asq:function(G){this.
Awl(UP);this.Ar7(Z4);this.Ar6(W2);this.Aw8(3600);},AwE:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArZ:function(E){this.UpdateNaisIdLastUsedMale(E);},ArY:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwR:function(E){this.UpdateNaisIdIncrementMale(E);},AwQ:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bar.call(this);A._GetAutoObject(
A.kR.A$).Cg(53);},Anu:function(E){this.UpdateBootloaderMessage(E);},AEG:function(
E){this.UpdateActionListAction(E);},Awj:function(E){this.UpdateActionListHideMeasured(
E);},Uh:function(E){this.UpdateAnimalIdGenerationMethod(E);},Aww:function(E){this.
UpdateDirectionOfCountingFemale(E);},Awx:function(E){this.UpdateDirectionOfCountingMale(
E);},Awy:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArU:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar0:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwS:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akw:function(E){this.UpdateEartagNrAssignmentMode(
E);},NY:function(E){this.UpdateBreed(E);},AFp:function(E){throw new Error(Iq);},
AFj:function(E){throw new Error(Iq);},AFQ:function(E){throw new Error(Iq);},AEQ:
function(E){throw new Error(Iq);},AE3:function(E){this.UpdateDryCowListAction(E);
},AJE:function(A0B){var Qs;switch(A0B){case 15:Qs=false;break;default:Qs=true;}return Qs;
},AEP:function(E){this.UpdateBirthListView(E);},AFR:function(E){this.UpdateTransferProgress(
E);},Ar8:function(E){this.UpdateTransferTarget(E);},AsE:function(){var B;A.pe([B=
A._GetAutoObject(C.Acp),B.BfU],this);},AwW:function(E){this.UpdatePremisesID(E);
},AwP:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE8:function(E){
this.UpdateFreshCowSpan(E);},AFS:function(E){this.UpdateUSBState(E);},AnT:function(
Ah0){var K=this.K;var result=A._NewObject(C.AjE,0);result.ACm=Ah0;result.FileName=
K.Biv.call(this,Ah0);switch(Ah0){case 0:K.Bym.call(this,result);break;case 1:K.Byi.
call(this,result);break;case 2:K.Byn.call(this,result);break;case 3:K.Byl.call(this
,result);break;default:throw new Error(UQ+Ah0.toFixed());}K.AJN=result;return result;
},Arg:function(){return true;},AqD:function(Np){var K=this.K;switch(Np.ACm){case
0:A._GetAutoObject(A.Device.Device).A9(72,true,A.jV,0,[this,K.A2Y]);break;case 1:
A._GetAutoObject(A.Device.Device).A9(90,true,A.jV,0,[this,K.A2Y]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A9(99,true,A.jV,0,[this,K.A2Y]);break;default:
throw new Error(Z5+Np.ACm.toFixed());}},AFD:function(E){throw new Error(Iq);},Awk:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFF:function(E){this.UpdateShutdownTimer(
E);},Asr:function(G){this.Awm(W3);this.Asa(Z6);this.Ar$(W4);this.Ar_(Z7);this.Asb(
Z8);},Ar$:function(E){this.UpdateWeightGainsHighString(E);},Asa:function(E){this.
UpdateWeightGainsLowString(E);},Awm:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar_:function(E){this.UpdateWeightGainsAverageString(E);},Asb:function(E){this.
UpdateWeightValueBirthString(E);},Awz:function(E){this.UpdateEvaluationAnimalType(
E);},Aw0:function(E){this.UpdateStartScreen(E);},ADQ:function(){return 1;},ADR:function(
){return 1;},AFo:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Aw6:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},AE1:function(E){this.UpdateDataExportDestination(
E);},Ne:function(E){this.UpdateWhereAbouts(E);},ArG:function(E){this.UpdateActiveMassRecordingFields(
E);},ArH:function(E){this.UpdateActiveMassRecordingFieldsOrder(E);},Aso:function(
G){this.ArG(A.jV);this.ArH(UR);},AFm:function(E){this.UpdateMassRecordingDateOfBirthMandatory(
E);},Ajz:function(){A._GetAutoObject(C.Acp).AEO(true);return true;},Aqp:function(
){var B;A._GetAutoObject(C.Acp).Aqp(this);return true;},Aqo:function(){var B;A.pe([
B=A._GetAutoObject(C.Acp),B.Aqo],this);return true;},AuM:function(){var B;A.pe([
B=A._GetAutoObject(C.Acp),B.BgZ],this);return true;},AwM:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwT:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwT(W5);},AwU:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwU(P6);},Axa:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axa(Z9);},Aw7:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},BBe:function(G){switch(this.KG){case 34:case 35:case 32:case 45:case 49:case 55:
case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},BfQ:function(G){var K=this.K;var
B;if((this.ScanState===1)&&K.Aug.AGG)K.Ai1.AnU(this);A.ab5("%s",O2);},BBv:function(
G){var K=this.K;var B;if((this.MeasureState===1)&&K.Aug.Axu)K.AaP.AnU(this);},BCb:
function(G){this.UpdateMeasureState(3);},ATS:function(G){var K=this.K;var B;A.zX([
B=A._GetAutoObject(A.Device.Helper),B.AK5],[B=K.Aug,B.A8R,B.ATs],0);this.RX.AE0(
A._GetAutoObject(A.Device.Helper).A6A(8));this.Sw.AE0(A._GetAutoObject(A.Device.
Helper).A6A(8));},A_2:function(G){var AzG=A._NewObject(A.Device.Axy,0);AzG.OnSetTimestamp(
1710328383);AzG.AFk(1);AzG.AFq(0);AzG.AFz(0);this.Sw=AzG;var Ay$=A._NewObject(A.
Device.Axy,0);Ay$.OnSetTimestamp(1710328383);Ay$.AFk(1);Ay$.AFq(0);Ay$.AFz(4);this.
RX=Ay$;var AlR=A._NewObject(A.Device.Avo,0);AlR.AFh(1);AlR.AFi(0);AlR.AFg(0);AlR.
AFO(1);AlR.AFP(0);AlR.AFN(0);AlR.OnSetTimestamp(1710328383);this.QW=AlR;var Amh=
A._NewObject(A.Device.Avo,0);Amh.AFh(1);Amh.AFi(0);Amh.AFg(0);Amh.AFO(1);Amh.AFP(
0);Amh.AFN(0);Amh.OnSetTimestamp(1710328383);this.SU=Amh;this.AhC=A.aaR(A.acf.Unknown
);},ByI:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},Bym:function(Np){var K=this.K;var B;var Tb=
Ri;var B3=A._NewObject(A.Device.Animal,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(
A.Device.Device).Am.Ca();O++){B3.Er(O,A._GetAutoObject(A.Device.Device).Am);if(B3.
IsRegistrationNoticePending&&(B3.NaisId>0)){Tb=Tb+(((((((((((((((((K.Aiy.call(this
,A._GetAutoObject(A.Device.Device).Ut)+String.fromCharCode(0x3B))+K.Aiy.call(this
,B3.NaisId))+String.fromCharCode(0x3B))+K.AJ8.call(this,B3.DateOfBirth))+String.
fromCharCode(0x3B))+K.BcN.call(this,B3.Breed))+String.fromCharCode(0x3B))+K.BcM.
call(this,B3.Gender))+String.fromCharCode(0x3B))+K.ByN.call(this,B3.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcO.call(this,B3.WhereAbouts))+String.fromCharCode(
0x3B))+K.ByQ.call(this,B3.BirthType))+String.fromCharCode(0x3B))+K.Aiy.call(this
,B3.NaisIdMother))+Lt);AdC++;}}Np.Au2=Tb;Np.AGo=AdC;Np.AnY=true;},Aiy:function(Rn
){if(!Rn)return A.jV;return Rn.toFixed();},AJ8:function(AyP){var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(AyP);return Au.Format(W6);},BcN:function(AcW){if(!AcW
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5a(AcW).toFixed();},BcM:
function(L3){var result=A.jV;switch(L3){case 0:result=W7;break;case 1:result=W8;
break;case 2:result=A.jV;break;default:A.ab5("%s",W9+L3.toFixed());}return result;
},ByN:function(AI6){if(!AI6)return A.jV;return AI6.toFixed();},BcO:function(AfI){
if(!AfI)return A.jV;return AfI.toFixed();},ByQ:function(Ati){return(Ati+1).toFixed(
);},A2Y:function(G){var K=this.K;var At=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!At&&(At.PopupState===7))K.ByI.call(this,K.AJN.FileName,Z_,K.AJN.Au2
);},Byi:function(Np){var K=this.K;var B;var Tb=W_;var B3=A._NewObject(A.Device.Animal
,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.Ca();O++){var
Ay7=A.jV;if(B3.Arf())Ay7=K.ByS.call(this,B3.FirstBodyWeight);B3.Er(O,A._GetAutoObject(
A.Device.Device).Am);Tb=Tb+(((((((((((K.Aiy.call(this,B3.NaisId)+String.fromCharCode(
0x3B))+K.ByO.call(this,B3.VisualId))+String.fromCharCode(0x3B))+K.Aiy.call(this,
B3.TransponderId))+String.fromCharCode(0x3B))+K.ByM.call(this,B3.DateOfBirth))+String.
fromCharCode(0x3B))+K.ByR.call(this,B3.Gender))+String.fromCharCode(0x3B))+Ay7)+
Lt);AdC++;}Np.Au2=Tb;Np.AGo=AdC;Np.AnY=true;},Biv:function(Ah0){var AzF=A.jV;var
Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dv(
));switch(Ah0){case 0:AzF=Ac.Format(W$);break;case 1:AzF=Ac.Format(S6);break;case
2:AzF=Ac.Format(US);break;case 3:AzF=Ac.Format(UT);break;default:throw new Error(
UQ+Ah0.toFixed());}return AzF;},ByO:function(Rn){return Rn.toFixed();},ByR:function(
L3){var result=A.jV;switch(L3){case 0:result=AcM;break;case 1:result=S7;break;case
2:result=Z$;break;default:A.ab5("%s",W9+L3.toFixed());}return result;},ByS:function(
MJ){if(MJ<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak9(MJ);},ByM:
function(AyP){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyP);return Au.Format(
Afw);},Byn:function(Np){var K=this.K;var B;var Tb=Aaa;var B3=A._NewObject(A.Device.
Animal,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.Ca();O++
){B3.Er(O,A._GetAutoObject(A.Device.Device).Am);if(B3.IsRegistrationNoticePending&&(
B3.NaisId>0)){Tb=Tb+(((((K.Aiy.call(this,A._GetAutoObject(A.Device.Device).Ut)+String.
fromCharCode(0x3B))+K.Aiy.call(this,B3.NaisId))+String.fromCharCode(0x3B))+K.AJ8.
call(this,A._GetAutoObject(A.Device.Helper).Dv()))+Lt);AdC++;}}Np.Au2=Tb;Np.AGo=
AdC;Np.AnY=true;},Byl:function(Np){var K=this.K;var B;var Tb=Xa;var B3=A._NewObject(
A.Device.Animal,0);var O;var AdC=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.
Ca();O++){B3.Er(O,A._GetAutoObject(A.Device.Device).Am);if(B3.IsRegistrationNoticePending&&(
B3.NaisId>0)){Tb=Tb+(((((((((((((K.Aiy.call(this,B3.NaisId)+String.fromCharCode(
0x3B))+K.AJ8.call(this,B3.DateOfBirth))+String.fromCharCode(0x3B))+K.BcM.call(this
,B3.Gender))+String.fromCharCode(0x3B))+K.BcO.call(this,B3.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcN.call(this,B3.Breed))+String.fromCharCode(0x3B))+K.AJ8.
call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(0x3B))+K.
Aiy.call(this,B3.TransponderId))+Lt);AdC++;}}Np.Au2=Tb;Np.AGo=AdC;Np.AnY=true;},
_Init:function(aArg){var K=this.K;A.acl.Gi._Init.call(K.Ai1={I:this},0);A.acl.Gi.
_Init.call(K.AaP={I:this},0);K.__proto__=C.DeviceClass;this.Awo(100);this.Anz(1);
this.ArT(200);this.ArS(100);this.ArZ(276000912345678);this.ArY(276000923456789);
this.ArU(500);this.Ar0(276000901234567);this.NY(1);K.Ai1.HM(1);K.Ai1.Fm(1000);K.
AaP.WD(0);K.AaP.HM(1);K.AaP.Fm(750);K.AaP.B2=50000;K.Ai1.Sx=[this,K.BBe];K.Aug=A.
_GetAutoObject(C.Uy);K.AaP.Sx=[this,K.BCb];K.AaP.Q=[this,this.AED,this.AIU];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ai1._Done(
);K.AaP._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Ai1._ReInit();K.AaP._ReInit(
);K.CP.call(this);},_Mark:function(D){var B;if((B=this.Aug)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AJN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AaP)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AG2={A4:0,_Init:function(aArg){C.Wp._Init.call(this,aArg);this.__proto__=C.AG2;
},_className:"DeviceSimulation::UInt8"};C.AG0={A4:0,_Init:function(aArg){C.Wp._Init.
call(this,aArg);this.__proto__=C.AG0;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A34:0,AFG:function(E){var K=this.K;K.A34=K.A34+(E-this.Dv());A.Device.
HelperClass.Ban.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Baj.call(this)+K.A34;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A_8={Axu:false,AGG:false,ATr:function(E){if(this.AGG===E)return;this.AGG=E;A.
abo([this,this.A8Q,this.ATr],0);},A8Q:function(){return this.AGG;},ATs:function(
E){if(this.Axu===E)return;this.Axu=E;A.abo([this,this.A8R,this.ATs],0);},A8R:function(
){return this.Axu;},_Init:function(aArg){this.__proto__=C.A_8;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Uy={_Init:function(){C.A_8._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Uy._variants();
},_this:null};C.PopupContext={Gu:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ch:function(
AI){var HA=A.Device.Rating.Bap.call(this,AI);if(HA){var Ru=A._GetAutoObject(A.Device.
Device).Am;var Ad=A._GetAutoObject(A.Device.Device).Am.LS(0,this.AnimalId);if(Ad
!==-1){var Jk=Ru.Ox();if(Jk<=0)A.ab5("%s",Aab);else{var B3=A._NewObject(A.Device.
Animal,0);B3.Er(Ad,Ru);if((this.Temperature>0)&&(B3.TimestampLastTemperature<this.
Timestamp)){Ru.A_1(Ad,5,this.Temperature);Ru.AkR(Ad,17,this.RatingTemperature);Ru.
Acm(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(B3.TimestampLastWeighing<=this.
Timestamp){Ru.AUu(Ad,18,this.BodyWeight);Ru.Acm(Ad,19,this.Timestamp);}if(!B3.TimestampFirstWeighing||(
B3.TimestampFirstWeighing>=this.Timestamp)){Ru.AUu(Ad,23,this.BodyWeight);Ru.Acm(
Ad,24,this.Timestamp);Ru.Hj(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGd(this)){var LP=A._GetAutoObject(A.Device.Helper).AC3(this);Ru.AkR(Ad,13,LP);
Ru.Acm(Ad,31,this.Timestamp);}Ru.Oz(Jk);}}}return HA;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PR={Ge:A.abi(512,null,null),Pe:0,AJt:
0,ALc:0,A37:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKK:0,A3B:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BdF:512,Az8:-1,A0$:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af0:false,CE:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.
CE(A3);return 0;},VV:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.VV(A3);
return A.jV;},H1:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.H1(A3);return false;
},VX:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.VX(A3);return 0;},Sh:function(
Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.Sh(A3);return 0;},Ox:function(){if(this.
Af0)throw new Error(Aac);this.Af0=true;return 12345;},Oz:function(AoR){if(!this.
Af0)throw new Error(AhP);if(AoR!==12345)throw new Error(JZ);this.Af0=false;return true;
},YF:function(){return this.A4A(A._NewObject(C.AGn,0));},ZK:function(Ad,A3,C0){var
Bf=this.TQ(Ad);if(!!Bf)return Bf.ZK(A3,C0);return false;},Hj:function(Ad,A3,C0){
var Bf=this.TQ(Ad);if(!!Bf)return Bf.Hj(A3,C0);return false;},ZJ:function(Ad,A3,
C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.ZJ(A3,C0);return false;},N4:function(Ad
,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.N4(A3,C0);return false;},ZI:function(
Ad,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.ZI(A3,C0);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bcm();switch(this.Id){case 0:{this.
BdF=256;A.pe([this,this.Bwa],this);}break;case 1:A.pe([this,this.Bwc],this);break;
case 3:A.pe([this,this.Bv$],this);break;case 4:A.pe([this,this.Bwb],this);break;
case 2:break;default:throw new Error(Aad+this.Id.toFixed());}},Ca:function(){return this.
Pe;},KM:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.KM(A3);return 0;},Ux:
function(Ad,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.Ux(A3,C0);return false;}
,Hi:function(){this.Bcm();return true;},HG:function(){return this.BdF;},A4A:function(
Ad){if(this.Pe>=512)throw new Error(Lu);this.Ge.Set(this.Pe,Ad);this.Pe=this.Pe+
1;switch(this.Id){case 0:{this.Az8=this.Pe;this.Hj(this.Pe-1,0,this.Az8);}break;
case 1:{this.Az8=this.Pe-1;this.Hj(this.Pe-1,0,this.Az8);}break;default:;}A.pe([
this,this.Akn],this);return this.Pe-1;},TQ:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Ge.Get(aIndex);},Bcm:function(){var O;for(O=0;O<512;
O=O+1)this.Ge.Set(O,null);this.Pe=0;this.AJt=0;this.AKK=0;this.ALc=0;A.pe([this,
this.Akn],this);},AKe:function(){this.AJt=(this.AJt+1)%15;return this.A0$.Get(this.
AJt);},A1Z:function(){this.ALc=(this.ALc+1)%10;return this.A37.Get(this.ALc);},AJ1:
function(G){if(this.K&&this.K.AJ1)return this.K.AJ1.apply(this,arguments);else return C.
PR.Bwi.apply(this,arguments);},Bwi:function(G){var B;var Oh=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhI(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhI(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhI(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhI(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhI(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhI(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhI(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhI(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var Bf2=0;for(O=
1;O<=7;O=O+1){Bf2=3680+(20*O);Oh=Bf2>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhI(7-O),0,1,Oh,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bwa:function(s){this.AJ1(s);},AJ3:
function(G){if(this.K&&this.K.AJ3)return this.K.AJ3.apply(this,arguments);else return C.
PR.Bwk.apply(this,arguments);},Bwk:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var Aix;var BcE;for(O=0;O<32;O=O+1){var A1K=this.
By4();for(;A1K>0;A1K=A1K-1){Aix=this.A1Z();BcE=A._GetAutoObject(A.Device.Converter
).AsG(0,Aix);this.AG(Ac,12310020,Aix,BcE,this.AKe(),this.AKe(),this.AKe(),this.AKe(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aix=this.A1Z();this.AG(Ac,276000312310001,Aix,A._GetAutoObject(A.Device.Converter
).AsG(0,Aix),1,3,3,3,0);Aix=this.A1Z();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsG(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aix,A._GetAutoObject(
A.Device.Converter).AsG(1,Aix),2,3,3,3,0);},Bwc:function(s){this.AJ3(s);},A0:function(
J1,BwJ,Bw0,Bbt,Ati,L3,BwR,BwW,BwT,BwU,MJ,Bwu,BwY,BwS,Em,BwV,AcW,AI6,AfI,Bw5,Bzl,
Bzm,Bwz,Bw7){var B3=A._NewObject(A.Device.Animal,0);B3.Gn();B3.Aw$(0);B3.Ae4(0);
B3.Ul(false);B3.AkB(false);if(Bzm)B3.PP(J1);if(Bzl)B3.Nc(J1);B3.SC(A._GetAutoObject(
A.Device.Helper).Sf(J1,Bw7&0xFF,Bwz&0xFF)|0);B3.Ab4(BwJ);B3.AnA(Bw0);B3.Q1(Bbt);
B3.Akv(Ati);B3.JP(L3);B3.AnR(BwR);B3.AGz(BwW);B3.Ae0(BwU);B3.Ul(BwT);B3.ArV(BwS);
B3.AwI(BwY);B3.Awt(Bwu);B3.EC(Em);B3.Ae1(BwV);B3.NY(AcW);B3.Akx(AI6);B3.Ne(AfI);
B3.AnC(Bw5);B3.Ch(this);if(MJ>0)A._GetAutoObject(C.Asi).AG(Bbt,J1,0,0,0,0,0,0,MJ
);},AG:function(L2,AcU,AoP,Bxf,BwD,BwE,Bwm,Bxh,Bwo){var B1=A._NewObject(A.Device.
Rating,0);B1.Gn();var Bb7=A._GetAutoObject(C.Amt).AOx(26,AcU);if(Bb7>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amt).CE(Bb7,0));else A.ab5("%s%U",AhQ,AcU);B1.OnSetTimestamp(
L2);B1.OnSetTemperature(AoP);B1.OnSetRatingTemperature(Bxf);B1.OnSetFaeces(BwD);
B1.OnSetFeed(BwE);B1.OnSetAppearance(Bwm);B1.OnSetRespiratory(Bxh);B1.OnSetBodyWeight(
Bwo);B1.Ch(this);},A6c:function(aColumn,A7){var O;for(O=0;O<this.Pe;O=O+1)if(this.
Ge.Get(O).CE(aColumn)===A7)return O;return-1;},By4:function(){this.AKK=(this.AKK+
1)%10;return this.A3B.Get(this.AKK);},AJ0:function(G){if(this.K&&this.K.AJ0)return this.
K.AJ0.apply(this,arguments);else return C.PR.Bwh.apply(this,arguments);},Bwh:function(
G){this.AlL(10,Aoc);this.AlL(20,N$);this.AlL(30,Xb);this.AlL(31,Aod);this.AlL(32
,AhR);},Bv$:function(s){this.AJ0(s);},AlL:function(J1,BwK){var AJn=A._NewObject(
A.Device.AnimalGroup,0);AJn.Gn();AJn.OnSetId(J1);AJn.AE_(BwK);AJn.Ch(this);},Abq:
function(){return this.Az8;},AOx:function(aColumn,A7){var O;for(O=0;O<this.Pe;O=
O+1)if(this.Ge.Get(O).KM(aColumn)===A7)return O;return-1;},AJ2:function(G){if(this.
K&&this.K.AJ2)return this.K.AJ2.apply(this,arguments);else return C.PR.Bwj.apply(
this,arguments);},Bwj:function(G){this.Aaz(2016,216,6);this.Aaz(2017,217,7);this.
Aaz(2018,218,8);this.Aaz(2019,219,9);this.Aaz(2020,220,10);this.Aaz(2021,221,11);
},Bwb:function(s){this.AJ2(s);},Aaz:function(Ac2,Bwy,Bwx){var U6=A._NewObject(A.
Device.CalfDeregistrations,0);U6.Gn();U6.AkG(Ac2);U6.Awv(Bwy);U6.Awu(Bwx);U6.Ch(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Ge=[]).
__proto__=C.PR.Ge;(this.A37=[]).__proto__=C.PR.A37;(this.A3B=[]).__proto__=C.PR.
A3B;(this.A0$=[]).__proto__=C.PR.A0$;this.__proto__=C.PR;var Lv=this._variants();
if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Ge,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.PR._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Amt={_Init:function(){C.PR._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AuE={_Init:function(){C.PR._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.Asi={_Init:
function(){C.PR._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GI={AlF:A.abi(512,null,null),E7:null,Aph:
0,CE:function(Ad,A3){var Bf=this.Aax(Ad);if(!!Bf)return Bf.CE(A3);return 0;},VV:
function(Ad,A3){var Bf=this.Aax(Ad);if(!!Bf)return Bf.VV(A3);return A.jV;},H1:function(
Ad,A3){var Bf=this.Aax(Ad);if(!!Bf)return Bf.H1(A3);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AFZ(A._GetAutoObject(
C.Amt));break;case 1:this.AFZ(A._GetAutoObject(C.Asi));break;case 3:this.AFZ(A._GetAutoObject(
C.AuE));break;case 4:this.AFZ(A._GetAutoObject(C.AuP));break;case 2:break;default:
throw new Error(Aad+this.Id.toFixed());}},Ca:function(){if(!!this.Filter)return this.
Aph;else if(!!this.E7)return this.E7.Pe;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.A09(this);},VX:function(Ad,A3){var Bf=this.Aax(Ad);if(!!Bf)
return Bf.VX(A3);return 0;},Sh:function(Ad,A3){var Bf=this.Aax(Ad);if(!!Bf)return Bf.
Sh(A3);return 0;},Ox:function(){if(!!this.E7)return this.E7.Ox();return-1;},Oz:function(
AoR){var HA=false;if(!!this.E7)HA=this.E7.Oz(AoR);if(HA)A.pe([this,this.A09],this
);return HA;},YF:function(){if(!!this.Filter)throw new Error(AhS+A._GetAutoObject(
A.Device.Converter).Bia(this.Id,this.Filter));if(!!this.E7)return this.E7.A4A(A.
_NewObject(C.AGn,0));return-1;},ZK:function(Ad,A3,C0){if(!this.E7.Af0)throw new Error(
Rj);var Bf=this.Aax(Ad);if(!!Bf)return Bf.ZK(A3,C0);return false;},Hj:function(Ad
,A3,C0){if(!this.E7.Af0)throw new Error(Rj);var Bf=this.Aax(Ad);if(!!Bf)return Bf.
Hj(A3,C0);return false;},ZJ:function(Ad,A3,C0){if(!this.E7.Af0)throw new Error(Rj
);var Bf=this.Aax(Ad);if(!!Bf)return Bf.ZJ(A3,C0);return false;},N4:function(Ad,
A3,C0){if(!this.E7.Af0)throw new Error(Rj);var Bf=this.Aax(Ad);if(!!Bf)return Bf.
N4(A3,C0);return false;},ZI:function(Ad,A3,C0){if(!this.E7.Af0)throw new Error(Rj
);var Bf=this.Aax(Ad);if(!!Bf)return Bf.ZI(A3,C0);return false;},LS:function(aColumn
,A7){if(!!this.Filter){var O;for(O=0;O<this.Aph;O=O+1)if(this.AlF.Get(O).CE(aColumn
)===A7)return O;return-1;}else if(!!this.E7)return this.E7.A6c(aColumn,A7);return-
1;},KM:function(Ad,A3){var Bf=this.Aax(Ad);if(!!Bf)return Bf.KM(A3);return 0;},Ux:
function(Ad,A3,C0){if(!this.E7.Af0)throw new Error(Rj);var Bf=this.Aax(Ad);if(!!
Bf)return Bf.Ux(A3,C0);return false;},AgQ:function(aColumn,A7){if(!!this.Filter){
var O;for(O=0;O<this.Aph;O=O+1)if(this.AlF.Get(O).KM(aColumn)===A7)return O;return-
1;}else if(!!this.E7)return this.E7.AOx(aColumn,A7);return-1;},Hi:function(){if(
!!this.E7)return this.E7.Hi();return false;},AjJ:function(aColumn,A7){if(!!this.
E7)return this.E7.A6c(aColumn,A7)>=0;return false;},Aeh:function(aColumn,A7){if(
!!this.E7)return this.E7.AOx(aColumn,A7)>=0;return false;},HG:function(){if(!!this.
E7)return this.E7.HG();return 0;},Abq:function(){if(!!this.E7)return this.E7.Abq(
);return-1;},QF:function(){if(!!this.E7)return this.E7.Pe;return 0;},A09:function(
G){this.A1l();if(!!this.Filter&&!!this.E7){var O;for(O=0;O<this.E7.Ca();O=O+1){var
A1O=true;var Av=this.Filter.AOK();var Bf=this.E7.TQ(O);if(!!Bf)while(A1O&&!!Av){
A1O=Bf.Bja(Av);Av=this.Filter.AOP(Av);}else A.ab5("%s",((UU+O.toFixed())+Aoe)+this.
E7.Ca().toFixed());if(A1O){this.AlF.Set(this.Aph,this.E7.Ge.Get(O));this.Aph=this.
Aph+1;}}}A.pe([this,this.Akn],this);},A1l:function(){var O;for(O=0;O<512;O=O+1)this.
AlF.Set(O,null);this.Aph=0;},AFZ:function(E){if(this.E7===E)return;if(!!this.E7)
A.z9([this,this.A35],this.E7,0);this.E7=E;if(!!this.E7){A.zV([this,this.A35],this.
E7,0);A.pe([this,this.A35],this);}},A35:function(G){A.pe([this,this.A09],this);}
,Aax:function(aIndex){if(!!this.Filter){if((aIndex<0)||(aIndex>=512))return null;
else return this.AlF.Get(aIndex);}else if(!!this.E7)return this.E7.TQ(aIndex);A.
ab5("%s",Aof+aIndex.toFixed());return null;},_Init:function(aArg){A.Device.ITable.
_Init.call(this,aArg);(this.AlF=[]).__proto__=C.GI.AlF;this.__proto__=C.GI;},_Mark:
function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.AlF,D);if((B=this.
E7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"DeviceSimulation::FilteredTable"
};C.A_9={KE:null,AdE:null,Ov:null,AMP:false,AMQ:true,A3Z:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:{A._GetAutoObject(A.Device.Device).Ab9(1);this.
AdE.Ar(true);}break;case 1:{A._GetAutoObject(A.Device.Device).Ab9(2);A._GetAutoObject(
A.Device.Device).Ar8(A._GetAutoObject(A.Device.Device).Am.QF());this.KE.Fm(A._GetAutoObject(
A.Device.Device).Afm*50);this.KE.B2=A._GetAutoObject(A.Device.Device).Afm;this.KE.
Ar(true);}break;case 2:{A._GetAutoObject(A.Device.Device).Ab9(3);this.AdE.Ar(true
);}break;case 3:{A._GetAutoObject(A.Device.Device).Ab9(4);A._GetAutoObject(A.Device.
Device).Ar8(A._GetAutoObject(A.Device.Device).Am.QF());this.KE.Fm(A._GetAutoObject(
A.Device.Device).Afm*50);this.KE.B2=A._GetAutoObject(A.Device.Device).Afm;this.KE.
Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Ab9(5);this.AdE.Ar(true
);}break;case 5:A.pe([this,this.BfU],this);break;case 7:case 6:break;default:A.ab5(
"%s%e",Aog,A._GetAutoObject(A.Device.Device).SyncState);}},BAz:function(G){this.
AdE.Ar(false);A.pe([this,this.A3Z],this);},BBD:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(A.Device.Device
).Ab9(0);A.pe([this,this.A3Z],this);}break;default:;}},BfU:function(G){this.AdE.
Ar(false);this.KE.Ar(false);A._GetAutoObject(A.Device.Device).Ab9(0);},AEO:function(
E){if(this.AMQ===E)return;this.AMQ=E;A.abo([this,this.Bj_,this.AEO],0);},Bj_:function(
){return this.AMQ;},Aqo:function(G){var B;this.Ov.Cw=true;this.Ov.B2=false;this.
Ov.Fm(100);this.Ov.HM(1);this.Ov.Q=[this,this.ASi,this.ASR];A.pe([B=this.Ov,B.AnU
],this);},BgZ:function(G){var B;this.Ov.Cw=true;this.Ov.B2=false;this.Ov.Fm(400);
this.Ov.Uk(200);this.Ov.HM(3);this.Ov.Q=[this,this.ASi,this.ASR];this.AEO(false);
A.pe([B=this.Ov,B.AnU],this);},ASR:function(E){if(this.AMP===E)return;this.AMP=E;
A.abo([this,this.ASi,this.ASR],0);},ASi:function(){return this.AMP;},Aqp:function(
G){var B;this.Ov.AnW(this);this.AEO(false);},_Init:function(aArg){A.acl.Gi._Init.
call(this.KE={I:this},0);A.Core.Timer._Init.call(this.AdE={I:this},0);A.acl.TE._Init.
call(this.Ov={I:this},0);this.__proto__=C.A_9;var B;this.KE.HM(1);this.AdE.PO(2000
);this.KE.Sx=[this,this.A3Z];this.KE.Q=[B=A._GetAutoObject(A.Device.Device),B.ASI
,B.A0b];this.AdE.Mx=[this,this.BAz];A.h7++;},_Done:function(){this.__proto__=null;
this.KE._Done();this.AdE._Done();this.Ov._Done();A.h7--;},_ReInit:function(){this.
KE._ReInit();this.AdE._ReInit();this.Ov._ReInit();},_Mark:function(D){var B;if((
B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::SimulationHelperClass"
};C.Acp={_Init:function(){C.A_9._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AG1={A4:0,_Init:function(aArg){C.Wp._Init.
call(this,aArg);this.__proto__=C.AG1;},_className:"DeviceSimulation::UInt64"};C.
AuP={_Init:function(){C.PR._Init.call(this,0);this.OnSetId(4);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.FactoryResetScope={Dn:function(
){return 1;},_Init:function(aArg){var K=this.K;K.__proto__=C.FactoryResetScope;this.
Cc.Set(0,1);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X1={Ad3:null,CF:function(G){var K=this.K;A.ab5("%s",Aoh);K.Ad3.Ar(true);},E3:
function(G){var K=this.K;if(K.Ad3.Bw===true){K.Ad3.Ar(false);A.ab5("%s",Afx);}},
Bj2:function(G){var K=this.K;K.Ad3.Ar(false);A._GetAutoObject(A.kR.A$).Aho(A._GetAutoObject(
A.Device.Device).AxA);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad3={I:this},0);K.__proto__=C.X1;this.AeI.H(Ala);K.Ad3.PO(1500);this.Uz.R(Aoi);
this.Uz.Z(true);this.AeI.Aw(A.aaL(A.ach.ARs));K.Ad3.Mx=[this,K.Bj2];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad3._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad3._ReInit();},_Mark:function(D){var B;if((B=this.Ad3)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AjE={Au2:A.jV,_Init:function(aArg){A.Device.AjE._Init.call(this,aArg);this.__proto__=
C.AjE;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ADM.__proto__=C.Wp;C.String.__proto__=C.Wp;C.ABR.__proto__=C.
Wp;C.AG2.__proto__=C.Wp;C.AG0.__proto__=C.Wp;C.PR.__proto__=A.Device.ITable;C.GI.
__proto__=A.Device.ITable;C.AG1.__proto__=C.Wp;C.AjE.__proto__=A.Device.AjE;};C.
_ReInit=function(){var B;if((B=C.Uy._this))B._ReInit(),C.Uy._ReInit.call(B);if((
B=C.Amt._this))B._ReInit(),C.Amt._ReInit.call(B);if((B=C.AuE._this))B._ReInit(),
C.AuE._ReInit.call(B);if((B=C.Asi._this))B._ReInit(),C.Asi._ReInit.call(B);if((B=
C.Acp._this))B._ReInit(),C.Acp._ReInit.call(B);if((B=C.AuP._this))B._ReInit(),C.
AuP._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Uy._this)&&(B._cycle!=D))B.
_Done(C.Uy._this=null);if((B=C.Amt._this)&&(B._cycle!=D))B._Done(C.Amt._this=null
);if((B=C.AuE._this)&&(B._cycle!=D))B._Done(C.AuE._this=null);if((B=C.Asi._this)&&(
B._cycle!=D))B._Done(C.Asi._this=null);if((B=C.Acp._this)&&(B._cycle!=D))B._Done(
C.Acp._this=null);if((B=C.AuP._this)&&(B._cycle!=D))B._Done(C.AuP._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */