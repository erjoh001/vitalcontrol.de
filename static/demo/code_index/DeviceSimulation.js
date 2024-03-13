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
var Cc="ERROR: access to null Bool data in column [";var BF="]";var E4="Access to inexistent column index: ";
var Hm=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IQ="Unsupported filter criterion class";var
Ip="Operator not handled:";var O2="1,8";var P1="INFO: Device.StartScan() called.";
var P2="INFO: Device.StopScan() called.";var CQ="V0.";var E$=".";var Lu="\n";var
P3="Temp: ";var JZ="Battery: ";var N_="%%";var P4="Selected animal with row index";
var MF="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S4="1,2";var UO="0,1,2";var Z5="3900,3950,4000";var W1="4050,4100,4150";var Iq="Read only";
var UP="Unknown data export type: ";var Z6="Unhandled Device::DataExportType: ";
var W2="0,2,1";var Z7="650,150,700";var W3="800,200,900";var Z8="800,200,850";var
Z9="40000,4000,0";var UQ="32,7,34,18,23,14";var W4="16384";var P5="1,1024";var Z_=
"1,256,1024";var O3="Simulate Scan";var Ri="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var W5="%d.%m.%Y";var W6="1";var W7="2";var W8="Unknown gender: ";var Z$="text/csv";
var W9="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W_="hit-geburt-%d-%m-%Y_%H-%M.csv";var S5="animals-%d-%m-%Y_%H-%M.csv";var UR=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var US="herde-zugang-%d-%m-%Y_%H-%M.csv";var AcN=
"M";var S6="F";var Aaa="?";var Afx="%Y-%m-%d";var Aab="BNR15;LOM;ZUGA_DAT\n";var
W$="Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";
var Aac="ERROR: Cannot start transaction";var Aad="Nested transactions are not allowed.";
var AhQ="Transaction not opened.";var J0="Wrong transaction ID.";var Aae="Unhandled TableId:";
var Lv="Maximum number of rows reached.";var AhR="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var Aog="10";var N$="20";var Xa="30";var Aoh="31";var AhS="32";var AhT="Severe: filter set when inserting row into table: ";
var AcO="ERROR: Row not found with index [";var UT="] while Rows Count = ";var Aoi=
"ERROR: trying to access an inexistent row with Index=";var Aoj="Invalid Device::SyncState";
var Aok="Forwarding to home screen after 500 milliseconds ...";var Aol="Forwarding to home screen canceled...";
var Afy=[0,58,240,208];var Ala="VitalControl\nstarting up \u2026";
C.Table={GI:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akn],K.GI,0);},
CE:function(Ad,A3){var K=this.K;return K.GI.CE(Ad,A3);},VU:function(Ad,A3){var K=
this.K;return K.GI.VU(Ad,A3);},H1:function(Ad,A3){var K=this.K;return K.GI.H1(Ad
,A3);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GI.OnSetId(
E);},Ca:function(){var K=this.K;return K.GI.Ca();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.GI.Bl(E);},VV:function(Ad,A3){var K=this.K;return K.
GI.VV(Ad,A3);},Sf:function(Ad,A3){var K=this.K;return K.GI.Sf(Ad,A3);},Oy:function(
){var K=this.K;return K.GI.Oy();},OA:function(AoQ){var K=this.K;return K.GI.OA(AoQ
);},YF:function(){var K=this.K;return K.GI.YF();},ZK:function(Ad,A3,C0){var K=this.
K;return K.GI.ZK(Ad,A3,C0);},Hj:function(Ad,A3,C0){var K=this.K;return K.GI.Hj(Ad
,A3,C0);},ZJ:function(Ad,A3,C0){var K=this.K;return K.GI.ZJ(Ad,A3,C0);},MB:function(
Ad,A3,C0){var K=this.K;return K.GI.MB(Ad,A3,C0);},ZI:function(Ad,A3,C0){var K=this.
K;return K.GI.ZI(Ad,A3,C0);},Lc:function(aColumn,A7){var K=this.K;return K.GI.Lc(
aColumn,A7);},KN:function(Ad,A3){var K=this.K;return K.GI.KN(Ad,A3);},SK:function(
Ad,A3,C0){var K=this.K;return K.GI.SK(Ad,A3,C0);},AgQ:function(aColumn,A7){var K=
this.K;return K.GI.AgQ(aColumn,A7);},Hi:function(){var K=this.K;return K.GI.Hi();
},AjJ:function(aColumn,A7){var K=this.K;return K.GI.AjJ(aColumn,A7);},Aej:function(
aColumn,A7){var K=this.K;return K.GI.Aej(aColumn,A7);},HG:function(){var K=this.
K;return K.GI.HG();},Abs:function(){var K=this.K;return K.GI.Abs();},QE:function(
){var K=this.K;return K.GI.QE();},_Init:function(aArg){var K=this.K;C.GI._Init.call(
K.GI={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GI._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GI._ReInit();},_Mark:function(D){var B;if((B=this.GI)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGo={Tc:A.abi(42,null,null),CE:function(aColumn){var B;this.Aar(aColumn);var Aq=(
C.ADN.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;
},VU:function(aColumn){var B;this.Aar(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return A.jV;},H1:function(aColumn
){var B;this.Aar(aColumn);var Aq=(C.ABT.isPrototypeOf(B=this.Tc.Get(aColumn))?B:
null);if(!!Aq)return Aq.A4;else A.ab5("%s",(Cc+aColumn.toFixed())+BF);return false;
},Hj:function(aColumn,A7){this.Aar(aColumn);var Aq=A._NewObject(C.ADN,0);Aq.A4=A7;
this.Tc.Set(aColumn,Aq);return true;},ZI:function(aColumn,A7){this.Aar(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},MB:
function(aColumn,A7){this.Aar(aColumn);var Aq=A._NewObject(C.ABT,0);Aq.A4=A7;this.
Tc.Set(aColumn,Aq);return true;},Aar:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E4+aColumn.toFixed())+Hm);},Bjj:function(AH){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.AJF(this.CE(AH.EJ),AH.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A4);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.Bym(this.
Sf(AH.EJ),AH.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null).
A4);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AH)?AH:null))return this.
Byl(this.VU(AH.EJ),AH.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AH)?
AH:null).A4);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AH)?AH:null))
return this.Byk(this.H1(AH.EJ),AH.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null).A4);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJF(this.CE(AH.EJ),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJF(this.CE(AH.EJ),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Byp(this.VV(AH.EJ),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A4)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Byn(this.KN(AH.EJ),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A4);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Byo(this.KN(AH.EJ),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A4,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).Zn&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).OB&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJF(this.CE(AH.EJ),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A4);else throw new Error(IQ);},AJF:function(Fo,Eb,Gx){
switch(Eb){case 0:return Fo===Gx;case 2:return Fo>Gx;case 3:return Fo<Gx;case 4:
return Fo.toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fo!==Gx;default:throw new
Error(Ip+Eb.toFixed());}},Byl:function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;
case 2:return Fo>Gx;case 3:return Fo<Gx;case 4:{A.ab5("%s%e%s%i",Fo,Eb,Gx,Fo.indexOf(
Gx,0));return Fo.indexOf(Gx,0)>=0;}case 5:return Fo!==Gx;default:throw new Error(
Ip+Eb.toFixed());}},Byk:function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;case
2:case 3:case 4:return false;case 5:return Fo!==Gx;default:throw new Error(Ip+Eb.
toFixed());}},VV:function(aColumn){var B;this.Aar(aColumn);var Aq=(C.AG3.isPrototypeOf(
B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;return 0;},ZK:function(aColumn
,A7){this.Aar(aColumn);var Aq=A._NewObject(C.AG3,0);Aq.A4=A7;this.Tc.Set(aColumn
,Aq);return true;},Byp:function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;case 2:
return Fo>Gx;case 3:return Fo<Gx;case 4:return Fo.toFixed().indexOf(Gx.toFixed()
,0)>=0;case 5:return Fo!==Gx;default:throw new Error(Ip+Eb.toFixed());}},Sf:function(
aColumn){var B;this.Aar(aColumn);var Aq=(C.AG1.isPrototypeOf(B=this.Tc.Get(aColumn
))?B:null);if(!!Aq)return Aq.A4;return 0;},ZJ:function(aColumn,A7){this.Aar(aColumn
);var Aq=A._NewObject(C.AG1,0);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},Bym:
function(Fo,Eb,Gx){switch(Eb){case 0:return Fo===Gx;case 2:return Fo>Gx;case 3:return Fo<
Gx;case 4:return Fo.toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fo!==Gx;default:
throw new Error(Ip+Eb.toFixed());}},KN:function(aColumn){var B;this.Aar(aColumn);
var Aq=(C.AG2.isPrototypeOf(B=this.Tc.Get(aColumn))?B:null);if(!!Aq)return Aq.A4;
return 0;},SK:function(aColumn,A7){this.Aar(aColumn);var Aq=A._NewObject(C.AG2,0
);Aq.A4=A7;this.Tc.Set(aColumn,Aq);return true;},Byn:function(Fo,Eb,Gx){switch(Eb
){case 0:return Fo===Gx;case 2:return Fo>Gx;case 3:return Fo<Gx;case 4:return Fo.
toFixed().indexOf(Gx.toFixed(),0)>=0;case 5:return Fo!==Gx;default:throw new Error(
Ip+Eb.toFixed());}},Byo:function(Fo,Eb,Gx,Atq,AI2){var AKY=Fo.toFixed();AKY=A.ab2(
A.abV(AKY,AKY.length-Atq),AI2);Fo=Math.trunc(Fo/A._GetAutoObject(A.Device.Helper
).ApR(Atq))%A._GetAutoObject(A.Device.Helper).ApR(AI2);var ALq=A.ab0(Gx,0,10);switch(
Eb){case 0:return Fo===ALq;case 2:return Fo>ALq;case 3:return Fo<ALq;case 4:return AKY.
indexOf(Gx,0)>=0;case 5:return Fo!==ALq;default:throw new Error(Ip+Eb.toFixed());
}},_Init:function(aArg){(this.Tc=[]).__proto__=C.AGo.Tc;this.__proto__=C.AGo;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tc,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wo={_Init:function(
aArg){this.__proto__=C.Wo;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADN={A4:0,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=C.ADN;
},_className:"DeviceSimulation::Int32"};C.String={A4:A.jV,_Init:function(aArg){C.
Wo._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABT={A4:false,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=
C.ABT;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Auh:null,AJL:null,Ai1:
null,AaR:null,CP:function(){var K=this.K;K.A$a.call(this,this);},Init:function(aArg
){var K=this.K;var B;this.Zq(3);A.zX([this,K.Bf0],[B=K.Auh,B.A80,B.ATr],0);this.
UpdateAutoActions(O2);K.A$a.call(this,this);this.Aso(this);this.Asp(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asm(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnD(languageValue);A.pe([this
,K.ATT],this);},Zq:function(E){this.UpdateActiveScreen(E);},Awr:function(E){this.
UpdateBatteryChargeState(E);},AEX:function(E){this.UpdateChargeActive(E);},Ar1:function(
E){this.UpdateScanState(E);},AwQ:function(E){this.UpdateMeasureState(E);},Aw4:function(
E){this.UpdateTempValue(E);},AnD:function(E){this.UpdateLanguage(E);},Aw5:function(
E){this.UpdateTemperatureUnit(E);},AEV:function(E){this.UpdateBrightness(E);},AFs:
function(E){this.UpdateMonitoring(E);},AxC:function(){var B;if(A._GetAutoObject(
C.Ux).Axx){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK4(this
);}},AhH:function(){var B;A._GetAutoObject(A.Device.Helper).SN.An0(this);this.UpdateMeasureState(
0);},AhE:function(){var K=this.K;A.ab5("%s",P1);this.UpdateScanState(1);A.pe([this
,K.Bf0],this);},An1:function(){var K=this.K;var B;A.ab5("%s",P2);K.Ai1.An0(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah7){},Axw:function(){A.Device.
DeviceClass.BaA.call(this);this.Zq(1);},AGl:function(){A.Device.DeviceClass.Bay.
call(this);this.Zq(2);},Ds:function(E){this.UpdateOverlayMenu(E);},Aw$:function(
E){this.UpdateUnderTemp(E);},Ab$:function(E){this.UpdateSyncState(E);},AC0:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+E$)+A.abz(0,9).toFixed(
))+Lu)+P3)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGQ))+Lu)+JZ)+A.abz(1,100).toFixed(
))+N_;return aString;},PopupStateChanged:function(J2,Ae){var Agh=A._NewObject(C.
PopupContext,0);Agh.Id=J2;Agh.Gu=Ae;this.AnP.Trigger(Agh,false);},AFU:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae8:function(E){this.UpdateVibrationOn(
E);},Aw0:function(E){this.UpdateRatingMode(E);},AeZ:function(E){this.UpdateFlashLightOn(
E);},Un:function(E){this.UpdateTopLightOn(E);},WA:function(E){this.UpdateRGBTopLight(
E);},Awq:function(E){this.UpdateAutoRegistrationMode(E);},Ar2:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OM:function(E){this.UpdateDigitsID(
E);},PN:function(E){this.UpdateOffsetID(E);},AFY:function(E){this.UpdateWeightValue(
E);},AwN:function(E){this.UpdateMassUnit(E);},ArA:function(E){A.Device.DeviceClass.
Bau.call(this,E);this.UpdateActiveActions(E);},ArB:function(E){A.Device.DeviceClass.
Bav.call(this,E);this.UpdateActiveActionsOrder(E);},Aku:function(E){A.Device.DeviceClass.
Baw.call(this,E);this.UpdateAutoActions(E);},AGM:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBJ.call(this,this);},AsD:function(){var K=this.K;var B;K.AaR.An0(this);this.
UpdateMeasureState(0);},EB:function(E){this.UpdateAnimalType(E);},Axa:function(E
){this.UpdateWeightRecordingMode(E);},AFx:function(E){this.UpdatePredictedTempValue(
E);},SJ:function(L6){A.ab5("%s%i",P4,L6);},AE3:function(E){this.UpdateDemoMode(E
);},AEK:function(E){this.UpdateAgeRegistration(E);},Axb:function(E){this.UpdateWeightRecordingScope(
E);},JQ:function(E){this.UpdateGender(E);},ArR:function(E){this.UpdateIDLastUsedMale(
E);},ArQ:function(E){this.UpdateIDLastUsedFemale(E);},Ab3:function(E){this.UpdateAnimalListContent(
E);},AEM:function(E){this.UpdateAlarmListAction(E);},AE6:function(E){this.UpdateFlashLightInMeasureState(
E);},AeU:function(E){this.UpdateAnimalInfoContent(E);},AFX:function(E){this.UpdateWatchListAction(
E);},AE8:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArA(15359);this.ArB(MF);},ResetAutoActions:function(G){this.Aku(S4);},Awo:
function(E){this.UpdateAnimalTypesString(E);},Ar4:function(E){this.UpdateTemperaturesHighString(
E);},Ar5:function(E){this.UpdateTemperaturesLowString(E);},Aso:function(G){this.
Awo(UO);this.Ar5(Z5);this.Ar4(W1);this.Aw$(3600);},AwH:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArX:function(E){this.UpdateNaisIdLastUsedMale(E);},ArW:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwU:function(E){this.UpdateNaisIdIncrementMale(E);},AwT:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.BaB.call(this);A._GetAutoObject(
A.kR.A$).Cg(53);},Any:function(E){this.UpdateBootloaderMessage(E);},AEH:function(
E){this.UpdateActionListAction(E);},Awm:function(E){this.UpdateActionListHideMeasured(
E);},Uh:function(E){this.UpdateAnimalIdGenerationMethod(E);},Awz:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwA:function(E){this.UpdateDirectionOfCountingMale(
E);},AwB:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArS:function(E){this.
UpdateIDLastUsedUnisex(E);},ArY:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwV:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akw:function(E){this.UpdateEartagNrAssignmentMode(
E);},NY:function(E){this.UpdateBreed(E);},AFq:function(E){throw new Error(Iq);},
AFk:function(E){throw new Error(Iq);},AFR:function(E){throw new Error(Iq);},AER:
function(E){throw new Error(Iq);},AE4:function(E){this.UpdateDryCowListAction(E);
},AJC:function(A0F){var Qr;switch(A0F){case 15:Qr=false;break;default:Qr=true;}return Qr;
},AEQ:function(E){this.UpdateBirthListView(E);},AFS:function(E){this.UpdateTransferProgress(
E);},Ar6:function(E){this.UpdateTransferTarget(E);},AsC:function(){var B;A.pe([B=
A._GetAutoObject(C.Acr),B.Bf4],this);},AwZ:function(E){this.UpdatePremisesID(E);
},AwS:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE9:function(E){
this.UpdateFreshCowSpan(E);},AFT:function(E){this.UpdateUSBState(E);},AnX:function(
Ah2){var K=this.K;var result=A._NewObject(C.AjE,0);result.ACo=Ah2;result.FileName=
K.BiE.call(this,Ah2);switch(Ah2){case 0:K.Byz.call(this,result);break;case 1:K.Byv.
call(this,result);break;case 2:K.ByA.call(this,result);break;case 3:K.Byy.call(this
,result);break;default:throw new Error(UP+Ah2.toFixed());}K.AJL=result;return result;
},Ard:function(){return true;},AqB:function(Nq){var K=this.K;switch(Nq.ACo){case
0:A._GetAutoObject(A.Device.Device).A9(72,true,A.jV,0,[this,K.A23]);break;case 1:
A._GetAutoObject(A.Device.Device).A9(90,true,A.jV,0,[this,K.A23]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A9(99,true,A.jV,0,[this,K.A23]);break;default:
throw new Error(Z6+Nq.ACo.toFixed());}},AFE:function(E){throw new Error(Iq);},Awn:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFG:function(E){this.UpdateShutdownTimer(
E);},ArG:function(E){this.UpdateAnimalListInfoItemMode(E);},Asp:function(G){this.
Awp(W2);this.Ar_(Z7);this.Ar9(W3);this.Ar8(Z8);this.Ar$(Z9);},Ar9:function(E){this.
UpdateWeightGainsHighString(E);},Ar_:function(E){this.UpdateWeightGainsLowString(
E);},Awp:function(E){this.UpdateAnimalTypesWeightGainsString(E);},Ar8:function(E
){this.UpdateWeightGainsAverageString(E);},Ar$:function(E){this.UpdateWeightValueBirthString(
E);},AwC:function(E){this.UpdateEvaluationAnimalType(E);},Aw3:function(E){this.UpdateStartScreen(
E);},ADR:function(){return 1;},ADS:function(){return 1;},AFp:function(E){this.UpdateMaximumAgeNewOnFarm(
E);},Aw9:function(E){this.UpdateTransponderAssignmentIdChangeMethod(E);},AE2:function(
E){this.UpdateDataExportDestination(E);},Ng:function(E){this.UpdateWhereAbouts(E
);},ArD:function(E){this.UpdateActiveMassRecordingFields(E);},ArE:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asm:function(G){this.ArD(A.jV);this.ArE(
UQ);},AFn:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajz:function(
){A._GetAutoObject(C.Acr).AEP(true);return true;},Aqo:function(){var B;A._GetAutoObject(
C.Acr).Aqo(this);return true;},Aqn:function(){var B;A.pe([B=A._GetAutoObject(C.Acr
),B.Aqn],this);return true;},AuO:function(){var B;A.pe([B=A._GetAutoObject(C.Acr
),B.Bg_],this);return true;},AwP:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwW:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwW(W4);},AwX:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwX(P5);},Axd:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axd(Z_);},Aw_:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},BBs:function(G){switch(this.KH){case 34:case 35:case 32:case 45:case 49:case 55:
case 80:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(2);}break;
case 15:break;default:this.UpdateScanState(4);}},Bf0:function(G){var K=this.K;var
B;if((this.ScanState===1)&&K.Auh.AGH)K.Ai1.AnY(this);A.ab5("%s",O3);},BBJ:function(
G){var K=this.K;var B;if((this.MeasureState===1)&&K.Auh.Axx)K.AaR.AnY(this);},BCp:
function(G){this.UpdateMeasureState(3);},ATT:function(G){var K=this.K;var B;A.zX([
B=A._GetAutoObject(A.Device.Helper),B.AK4],[B=K.Auh,B.A81,B.ATs],0);this.RU.AE1(
A._GetAutoObject(A.Device.Helper).A6H(8));this.Su.AE1(A._GetAutoObject(A.Device.
Helper).A6H(8));},A$a:function(G){var AzK=A._NewObject(A.Device.AxB,0);AzK.OnSetTimestamp(
1710328383);AzK.AFl(1);AzK.AFr(0);AzK.AFA(0);this.Su=AzK;var Azd=A._NewObject(A.
Device.AxB,0);Azd.OnSetTimestamp(1710328383);Azd.AFl(1);Azd.AFr(0);Azd.AFA(4);this.
RU=Azd;var AlS=A._NewObject(A.Device.Avr,0);AlS.AFi(1);AlS.AFj(0);AlS.AFh(0);AlS.
AFP(1);AlS.AFQ(0);AlS.AFO(0);AlS.OnSetTimestamp(1710328383);this.QV=AlS;var Ami=
A._NewObject(A.Device.Avr,0);Ami.AFi(1);Ami.AFj(0);Ami.AFh(0);Ami.AFP(1);Ami.AFQ(
0);Ami.AFO(0);Ami.OnSetTimestamp(1710328383);this.ST=Ami;this.AhD=A.aaR(A.acf.Unknown
);},ByV:function(aFilename,aMimeType,aContent){{var bb=new Blob([aContent],{type:
aMimeType});var a=document.createElement('a');a.download=aFilename;a.href=window.
URL.createObjectURL(bb);a.click();}},Byz:function(Nq){var K=this.K;var B;var Tb=
Ri;var B$=A._NewObject(A.Device.Animal,0);var O;var AdG=0;for(O=0;O<A._GetAutoObject(
A.Device.Device).Am.Ca();O++){B$.EM(O,A._GetAutoObject(A.Device.Device).Am);if(B$.
IsRegistrationNoticePending&&(B$.NaisId>0)){Tb=Tb+(((((((((((((((((K.Aiy.call(this
,A._GetAutoObject(A.Device.Device).Ut)+String.fromCharCode(0x3B))+K.Aiy.call(this
,B$.NaisId))+String.fromCharCode(0x3B))+K.AJ6.call(this,B$.DateOfBirth))+String.
fromCharCode(0x3B))+K.BcY.call(this,B$.Breed))+String.fromCharCode(0x3B))+K.BcX.
call(this,B$.Gender))+String.fromCharCode(0x3B))+K.By0.call(this,B$.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcZ.call(this,B$.WhereAbouts))+String.fromCharCode(
0x3B))+K.By3.call(this,B$.BirthType))+String.fromCharCode(0x3B))+K.Aiy.call(this
,B$.NaisIdMother))+Lu);AdG++;}}Nq.Au4=Tb;Nq.AGp=AdG;Nq.An2=true;},Aiy:function(Rm
){if(!Rm)return A.jV;return Rm.toFixed();},AJ6:function(AyU){var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(AyU);return Au.Format(W5);},BcY:function(AcY){if(!AcY
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5g(AcY).toFixed();},BcX:
function(L3){var result=A.jV;switch(L3){case 0:result=W6;break;case 1:result=W7;
break;case 2:result=A.jV;break;default:A.ab5("%s",W8+L3.toFixed());}return result;
},By0:function(AI3){if(!AI3)return A.jV;return AI3.toFixed();},BcZ:function(AfI){
if(!AfI)return A.jV;return AfI.toFixed();},By3:function(Atj){return(Atj+1).toFixed(
);},A23:function(G){var K=this.K;var At=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!At&&(At.PopupState===7))K.ByV.call(this,K.AJL.FileName,Z$,K.AJL.Au4
);},Byv:function(Nq){var K=this.K;var B;var Tb=W9;var B$=A._NewObject(A.Device.Animal
,0);var O;var AdG=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.Ca();O++){var
Ay$=A.jV;if(B$.Arc())Ay$=K.By5.call(this,B$.FirstBodyWeight);B$.EM(O,A._GetAutoObject(
A.Device.Device).Am);Tb=Tb+(((((((((((K.Aiy.call(this,B$.NaisId)+String.fromCharCode(
0x3B))+K.By1.call(this,B$.VisualId))+String.fromCharCode(0x3B))+K.Aiy.call(this,
B$.TransponderId))+String.fromCharCode(0x3B))+K.ByZ.call(this,B$.DateOfBirth))+String.
fromCharCode(0x3B))+K.By4.call(this,B$.Gender))+String.fromCharCode(0x3B))+Ay$)+
Lu);AdG++;}Nq.Au4=Tb;Nq.AGp=AdG;Nq.An2=true;},BiE:function(Ah2){var AzJ=A.jV;var
Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dv(
));switch(Ah2){case 0:AzJ=Ac.Format(W_);break;case 1:AzJ=Ac.Format(S5);break;case
2:AzJ=Ac.Format(UR);break;case 3:AzJ=Ac.Format(US);break;default:throw new Error(
UP+Ah2.toFixed());}return AzJ;},By1:function(Rm){return Rm.toFixed();},By4:function(
L3){var result=A.jV;switch(L3){case 0:result=AcN;break;case 1:result=S6;break;case
2:result=Aaa;break;default:A.ab5("%s",W8+L3.toFixed());}return result;},By5:function(
MK){if(MK<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak9(MK);},ByZ:
function(AyU){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(AyU);return Au.Format(
Afx);},ByA:function(Nq){var K=this.K;var B;var Tb=Aab;var B$=A._NewObject(A.Device.
Animal,0);var O;var AdG=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.Ca();O++
){B$.EM(O,A._GetAutoObject(A.Device.Device).Am);if(B$.IsRegistrationNoticePending&&(
B$.NaisId>0)){Tb=Tb+(((((K.Aiy.call(this,A._GetAutoObject(A.Device.Device).Ut)+String.
fromCharCode(0x3B))+K.Aiy.call(this,B$.NaisId))+String.fromCharCode(0x3B))+K.AJ6.
call(this,A._GetAutoObject(A.Device.Helper).Dv()))+Lu);AdG++;}}Nq.Au4=Tb;Nq.AGp=
AdG;Nq.An2=true;},Byy:function(Nq){var K=this.K;var B;var Tb=W$;var B$=A._NewObject(
A.Device.Animal,0);var O;var AdG=0;for(O=0;O<A._GetAutoObject(A.Device.Device).Am.
Ca();O++){B$.EM(O,A._GetAutoObject(A.Device.Device).Am);if(B$.IsRegistrationNoticePending&&(
B$.NaisId>0)){Tb=Tb+(((((((((((((K.Aiy.call(this,B$.NaisId)+String.fromCharCode(
0x3B))+K.AJ6.call(this,B$.DateOfBirth))+String.fromCharCode(0x3B))+K.BcX.call(this
,B$.Gender))+String.fromCharCode(0x3B))+K.BcZ.call(this,B$.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcY.call(this,B$.Breed))+String.fromCharCode(0x3B))+K.AJ6.
call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(0x3B))+K.
Aiy.call(this,B$.TransponderId))+Lu);AdG++;}}Nq.Au4=Tb;Nq.AGp=AdG;Nq.An2=true;},
_Init:function(aArg){var K=this.K;A.acl.Gh._Init.call(K.Ai1={I:this},0);A.acl.Gh.
_Init.call(K.AaR={I:this},0);K.__proto__=C.DeviceClass;this.Awr(100);this.AnD(1);
this.ArR(200);this.ArQ(100);this.ArX(276000912345678);this.ArW(276000923456789);
this.ArS(500);this.ArY(276000901234567);this.NY(1);K.Ai1.HM(1);K.Ai1.Fl(1000);K.
AaR.WC(0);K.AaR.HM(1);K.AaR.Fl(750);K.AaR.B2=50000;K.Ai1.Sv=[this,K.BBs];K.Auh=A.
_GetAutoObject(C.Ux);K.AaR.Sv=[this,K.BCp];K.AaR.Q=[this,this.AEE,this.AIR];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.Ai1._Done(
);K.AaR._Done();A.h7--;},_ReInit:function(){var K=this.K;K.Ai1._ReInit();K.AaR._ReInit(
);K.CP.call(this);},_Mark:function(D){var B;if((B=this.Auh)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AJL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AG3={A4:0,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=C.AG3;
},_className:"DeviceSimulation::UInt8"};C.AG1={A4:0,_Init:function(aArg){C.Wo._Init.
call(this,aArg);this.__proto__=C.AG1;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A3_:0,AFH:function(E){var K=this.K;K.A3_=K.A3_+(E-this.Dv());A.Device.
HelperClass.Bax.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Bat.call(this)+K.A3_;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$g={Axx:false,AGH:false,ATr:function(E){if(this.AGH===E)return;this.AGH=E;A.
abo([this,this.A80,this.ATr],0);},A80:function(){return this.AGH;},ATs:function(
E){if(this.Axx===E)return;this.Axx=E;A.abo([this,this.A81,this.ATs],0);},A81:function(
){return this.Axx;},_Init:function(aArg){this.__proto__=C.A$g;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Ux={_Init:function(){C.A$g._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Ux._variants();
},_this:null};C.PopupContext={Gu:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cq:function(
AI){var HA=A.Device.Rating.Baz.call(this,AI);if(HA){var Rs=A._GetAutoObject(A.Device.
Device).Am;var Ad=A._GetAutoObject(A.Device.Device).Am.Lc(0,this.AnimalId);if(Ad
!==-1){var Jk=Rs.Oy();if(Jk<=0)A.ab5("%s",Aac);else{var B$=A._NewObject(A.Device.
Animal,0);B$.EM(Ad,Rs);if((this.Temperature>0)&&(B$.TimestampLastTemperature<this.
Timestamp)){Rs.A_$(Ad,5,this.Temperature);Rs.AkR(Ad,17,this.RatingTemperature);Rs.
Aco(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(B$.TimestampLastWeighing<=this.
Timestamp){Rs.AUw(Ad,18,this.BodyWeight);Rs.Aco(Ad,19,this.Timestamp);}if(!B$.TimestampFirstWeighing||(
B$.TimestampFirstWeighing>=this.Timestamp)){Rs.AUw(Ad,23,this.BodyWeight);Rs.Aco(
Ad,24,this.Timestamp);Rs.Hj(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGe(this)){var LQ=A._GetAutoObject(A.Device.Helper).AC4(this);Rs.AkR(Ad,13,LQ);
Rs.Aco(Ad,31,this.Timestamp);}Rs.OA(Jk);}}}return HA;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PQ={Gd:A.abi(512,null,null),Pe:0,AJr:
0,ALb:0,A4b:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKJ:0,A3G:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BdQ:512,AAa:-1,A1d:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AKh:false,CE:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.
CE(A3);return 0;},VU:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.VU(A3);
return A.jV;},H1:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.H1(A3);return false;
},VV:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.VV(A3);return 0;},Sf:function(
Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.Sf(A3);return 0;},Oy:function(){if(this.
AKh)throw new Error(Aad);this.AKh=true;return 12345;},OA:function(AoQ){if(!this.
AKh)throw new Error(AhQ);if(AoQ!==12345)throw new Error(J0);this.AKh=false;return true;
},YF:function(){return this.A4H(A._NewObject(C.AGo,0));},ZK:function(Ad,A3,C0){var
Bf=this.TQ(Ad);if(!!Bf)return Bf.ZK(A3,C0);return false;},Hj:function(Ad,A3,C0){
var Bf=this.TQ(Ad);if(!!Bf)return Bf.Hj(A3,C0);return false;},ZJ:function(Ad,A3,
C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.ZJ(A3,C0);return false;},MB:function(Ad
,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.MB(A3,C0);return false;},ZI:function(
Ad,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.ZI(A3,C0);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bcx();switch(this.Id){case 0:{this.
BdQ=256;A.pe([this,this.Bwn],this);}break;case 1:A.pe([this,this.Bwp],this);break;
case 3:A.pe([this,this.Bwm],this);break;case 4:A.pe([this,this.Bwo],this);break;
case 2:break;default:throw new Error(Aae+this.Id.toFixed());}},Ca:function(){return this.
Pe;},KN:function(Ad,A3){var Bf=this.TQ(Ad);if(!!Bf)return Bf.KN(A3);return 0;},SK:
function(Ad,A3,C0){var Bf=this.TQ(Ad);if(!!Bf)return Bf.SK(A3,C0);return false;}
,Hi:function(){this.Bcx();return true;},HG:function(){return this.BdQ;},A4H:function(
Ad){if(this.Pe>=512)throw new Error(Lv);this.Gd.Set(this.Pe,Ad);this.Pe=this.Pe+
1;switch(this.Id){case 0:{this.AAa=this.Pe;this.Hj(this.Pe-1,0,this.AAa);}break;
case 1:{this.AAa=this.Pe-1;this.Hj(this.Pe-1,0,this.AAa);}break;default:;}A.pe([
this,this.Akn],this);return this.Pe-1;},TQ:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gd.Get(aIndex);},Bcx:function(){var O;for(O=0;O<512;
O=O+1)this.Gd.Set(O,null);this.Pe=0;this.AJr=0;this.AKJ=0;this.ALb=0;A.pe([this,
this.Akn],this);},AKc:function(){this.AJr=(this.AJr+1)%15;return this.A1d.Get(this.
AJr);},A13:function(){this.ALb=(this.ALb+1)%10;return this.A4b.Get(this.ALb);},AJZ:
function(G){if(this.K&&this.K.AJZ)return this.K.AJZ.apply(this,arguments);else return C.
PQ.Bwv.apply(this,arguments);},Bwv:function(G){var B;var Oi=true;this.A0(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhJ(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhJ(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);this.A0(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhJ(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhJ(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhJ(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhJ(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhJ(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A1,A._GetAutoObject(
A.Device.Device).AF);this.A0(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhJ(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A1,A._GetAutoObject(A.Device.Device).AF);var O;var Bga=0;for(O=
1;O<=7;O=O+1){Bga=3680+(20*O);Oi=Bga>3800;this.A0(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhJ(7-O),0,1,Oi,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A1,A._GetAutoObject(A.Device.Device).AF);}},Bwn:function(s){this.AJZ(s);},AJ1:
function(G){if(this.K&&this.K.AJ1)return this.K.AJ1.apply(this,arguments);else return C.
PQ.Bwx.apply(this,arguments);},Bwx:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var Aix;var BcP;for(O=0;O<32;O=O+1){var A1O=this.
Bzf();for(;A1O>0;A1O=A1O-1){Aix=this.A13();BcP=A._GetAutoObject(A.Device.Converter
).AsE(0,Aix);this.AG(Ac,12310020,Aix,BcP,this.AKc(),this.AKc(),this.AKc(),this.AKc(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aix=this.A13();this.AG(Ac,276000312310001,Aix,A._GetAutoObject(A.Device.Converter
).AsE(0,Aix),1,3,3,3,0);Aix=this.A13();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsE(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aix,A._GetAutoObject(
A.Device.Converter).AsE(1,Aix),2,3,3,3,0);},Bwp:function(s){this.AJ1(s);},A0:function(
J2,BwW,Bxb,BbE,Atj,L3,Bw4,Bw9,Bw6,Bw7,MK,BwH,Bw$,Bw5,Em,Bw8,AcY,AI3,AfI,Bxg,Bzy,
Bzz,BwM,Bxi){var B$=A._NewObject(A.Device.Animal,0);B$.Gm();B$.Axc(0);B$.Ae5(0);
B$.Ul(false);B$.AkB(false);if(Bzz)B$.Q2(J2);if(Bzy)B$.Ne(J2);B$.SA(A._GetAutoObject(
A.Device.Helper).Sd(J2,Bxi&0xFF,BwM&0xFF)|0);B$.Ab6(BwW);B$.AnE(Bxb);B$.Q0(BbE);
B$.Akv(Atj);B$.JQ(L3);B$.AnV(Bw4);B$.AGA(Bw9);B$.Ahl(Bw7);B$.Ul(Bw6);B$.ArT(Bw5);
B$.AwL(Bw$);B$.Aww(BwH);B$.EB(Em);B$.Ae2(Bw8);B$.NY(AcY);B$.Akx(AI3);B$.Ng(AfI);
B$.AnG(Bxg);B$.Cq(this);if(MK>0)A._GetAutoObject(C.Asg).AG(BbE,J2,0,0,0,0,0,0,MK
);},AG:function(L2,AcW,AoO,Bxs,BwQ,BwR,Bwz,Bxu,BwB){var B1=A._NewObject(A.Device.
Rating,0);B1.Gm();var Bcg=A._GetAutoObject(C.Amv).AOw(26,AcW);if(Bcg>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amv).CE(Bcg,0));else A.ab5("%s%U",AhR,AcW);B1.OnSetTimestamp(
L2);B1.OnSetTemperature(AoO);B1.OnSetRatingTemperature(Bxs);B1.OnSetFaeces(BwQ);
B1.OnSetFeed(BwR);B1.OnSetAppearance(Bwz);B1.OnSetRespiratory(Bxu);B1.OnSetBodyWeight(
BwB);B1.Cq(this);},A6j:function(aColumn,A7){var O;for(O=0;O<this.Pe;O=O+1)if(this.
Gd.Get(O).CE(aColumn)===A7)return O;return-1;},Bzf:function(){this.AKJ=(this.AKJ+
1)%10;return this.A3G.Get(this.AKJ);},AJY:function(G){if(this.K&&this.K.AJY)return this.
K.AJY.apply(this,arguments);else return C.PQ.Bwu.apply(this,arguments);},Bwu:function(
G){this.AlM(10,Aog);this.AlM(20,N$);this.AlM(30,Xa);this.AlM(31,Aoh);this.AlM(32
,AhS);},Bwm:function(s){this.AJY(s);},AlM:function(J2,BwX){var AJk=A._NewObject(
A.Device.AnimalGroup,0);AJk.Gm();AJk.OnSetId(J2);AJk.AE$(BwX);AJk.Cq(this);},Abs:
function(){return this.AAa;},AOw:function(aColumn,A7){var O;for(O=0;O<this.Pe;O=
O+1)if(this.Gd.Get(O).KN(aColumn)===A7)return O;return-1;},AJ0:function(G){if(this.
K&&this.K.AJ0)return this.K.AJ0.apply(this,arguments);else return C.PQ.Bww.apply(
this,arguments);},Bww:function(G){this.AaB(2016,216,6);this.AaB(2017,217,7);this.
AaB(2018,218,8);this.AaB(2019,219,9);this.AaB(2020,220,10);this.AaB(2021,221,11);
},Bwo:function(s){this.AJ0(s);},AaB:function(Ac4,BwL,BwK){var U5=A._NewObject(A.
Device.CalfDeregistrations,0);U5.Gm();U5.AkG(Ac4);U5.Awy(BwL);U5.Awx(BwK);U5.Cq(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Gd=[]).
__proto__=C.PQ.Gd;(this.A4b=[]).__proto__=C.PQ.A4b;(this.A3G=[]).__proto__=C.PQ.
A3G;(this.A1d=[]).__proto__=C.PQ.A1d;this.__proto__=C.PQ;var Lw=this._variants();
if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.Gd,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.PQ._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Amv={_Init:function(){C.PQ._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AuG={_Init:function(){C.PQ._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.Asg={_Init:
function(){C.PQ._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GI={AlG:A.abi(512,null,null),Gq:null,Apg:
0,CE:function(Ad,A3){var Bf=this.Aaz(Ad);if(!!Bf)return Bf.CE(A3);return 0;},VU:
function(Ad,A3){var Bf=this.Aaz(Ad);if(!!Bf)return Bf.VU(A3);return A.jV;},H1:function(
Ad,A3){var Bf=this.Aaz(Ad);if(!!Bf)return Bf.H1(A3);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AF0(A._GetAutoObject(
C.Amv));break;case 1:this.AF0(A._GetAutoObject(C.Asg));break;case 3:this.AF0(A._GetAutoObject(
C.AuG));break;case 4:this.AF0(A._GetAutoObject(C.AuR));break;case 2:break;default:
throw new Error(Aae+this.Id.toFixed());}},Ca:function(){if(!!this.Filter)return this.
Apg;else if(!!this.Gq)return this.Gq.Pe;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.A1b(this);},VV:function(Ad,A3){var Bf=this.Aaz(Ad);if(!!Bf)
return Bf.VV(A3);return 0;},Sf:function(Ad,A3){var Bf=this.Aaz(Ad);if(!!Bf)return Bf.
Sf(A3);return 0;},Oy:function(){if(!!this.Gq)return this.Gq.Oy();return-1;},OA:function(
AoQ){var HA=false;if(!!this.Gq)HA=this.Gq.OA(AoQ);if(HA)A.pe([this,this.A1b],this
);return HA;},YF:function(){if(!!this.Filter)throw new Error(AhT+A._GetAutoObject(
A.Device.Converter).Bij(this.Id,this.Filter));if(!!this.Gq)return this.Gq.A4H(A.
_NewObject(C.AGo,0));return-1;},ZK:function(Ad,A3,C0){var Bf=this.Aaz(Ad);if(!!Bf
)return Bf.ZK(A3,C0);return false;},Hj:function(Ad,A3,C0){var Bf=this.Aaz(Ad);if(
!!Bf)return Bf.Hj(A3,C0);return false;},ZJ:function(Ad,A3,C0){var Bf=this.Aaz(Ad
);if(!!Bf)return Bf.ZJ(A3,C0);return false;},MB:function(Ad,A3,C0){var Bf=this.Aaz(
Ad);if(!!Bf)return Bf.MB(A3,C0);return false;},ZI:function(Ad,A3,C0){var Bf=this.
Aaz(Ad);if(!!Bf)return Bf.ZI(A3,C0);return false;},Lc:function(aColumn,A7){if(!!
this.Filter){var O;for(O=0;O<this.Apg;O=O+1)if(this.AlG.Get(O).CE(aColumn)===A7)
return O;return-1;}else if(!!this.Gq)return this.Gq.A6j(aColumn,A7);return-1;},KN:
function(Ad,A3){var Bf=this.Aaz(Ad);if(!!Bf)return Bf.KN(A3);return 0;},SK:function(
Ad,A3,C0){var Bf=this.Aaz(Ad);if(!!Bf)return Bf.SK(A3,C0);return false;},AgQ:function(
aColumn,A7){if(!!this.Filter){var O;for(O=0;O<this.Apg;O=O+1)if(this.AlG.Get(O).
KN(aColumn)===A7)return O;return-1;}else if(!!this.Gq)return this.Gq.AOw(aColumn
,A7);return-1;},Hi:function(){if(!!this.Gq)return this.Gq.Hi();return false;},AjJ:
function(aColumn,A7){if(!!this.Gq)return this.Gq.A6j(aColumn,A7)>=0;return false;
},Aej:function(aColumn,A7){if(!!this.Gq)return this.Gq.AOw(aColumn,A7)>=0;return false;
},HG:function(){if(!!this.Gq)return this.Gq.HG();return 0;},Abs:function(){if(!!
this.Gq)return this.Gq.Abs();return-1;},QE:function(){if(!!this.Gq)return this.Gq.
Pe;return 0;},A1b:function(G){this.A1p();if(!!this.Filter&&!!this.Gq){var O;for(
O=0;O<this.Gq.Ca();O=O+1){var A1S=true;var Av=this.Filter.AOJ();var Bf=this.Gq.TQ(
O);if(!!Bf)while(A1S&&!!Av){A1S=Bf.Bjj(Av);Av=this.Filter.AOO(Av);}else A.ab5("%s"
,((AcO+O.toFixed())+UT)+this.Gq.Ca().toFixed());if(A1S){this.AlG.Set(this.Apg,this.
Gq.Gd.Get(O));this.Apg=this.Apg+1;}}}A.pe([this,this.Akn],this);},A1p:function(){
var O;for(O=0;O<512;O=O+1)this.AlG.Set(O,null);this.Apg=0;},AF0:function(E){if(this.
Gq===E)return;if(!!this.Gq)A.z9([this,this.A3$],this.Gq,0);this.Gq=E;if(!!this.Gq
){A.zV([this,this.A3$],this.Gq,0);A.pe([this,this.A3$],this);}},A3$:function(G){
A.pe([this,this.A1b],this);},Aaz:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlG.Get(aIndex);}else if(!!this.Gq
)return this.Gq.TQ(aIndex);A.ab5("%s",Aoi+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlG=[]).__proto__=C.GI.
AlG;this.__proto__=C.GI;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlG,D);if((B=this.Gq)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$h={KF:null,AdI:null,Ow:null,AMO:false,AMP:
true,A35:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab$(1);this.AdI.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab$(2);A._GetAutoObject(A.Device.Device).Ar6(A._GetAutoObject(A.
Device.Device).Am.QE());this.KF.Fl(A._GetAutoObject(A.Device.Device).Afn*50);this.
KF.B2=A._GetAutoObject(A.Device.Device).Afn;this.KF.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab$(3);this.AdI.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab$(4);A._GetAutoObject(A.Device.Device).Ar6(A._GetAutoObject(A.Device.Device
).Am.QE());this.KF.Fl(A._GetAutoObject(A.Device.Device).Afn*50);this.KF.B2=A._GetAutoObject(
A.Device.Device).Afn;this.KF.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab$(5);this.AdI.Ar(true);}break;case 5:A.pe([this,this.Bf4],this);break;case 7:
case 6:break;default:A.ab5("%s%e",Aoj,A._GetAutoObject(A.Device.Device).SyncState
);}},BAM:function(G){this.AdI.Ar(false);A.pe([this,this.A35],this);},BBR:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab$(0);A.pe([this,this.A35],this);}break;default:;}},Bf4:function(
G){this.AdI.Ar(false);this.KF.Ar(false);A._GetAutoObject(A.Device.Device).Ab$(0);
},AEP:function(E){if(this.AMP===E)return;this.AMP=E;A.abo([this,this.Bkk,this.AEP
],0);},Bkk:function(){return this.AMP;},Aqn:function(G){var B;this.Ow.Cw=true;this.
Ow.B2=false;this.Ow.Fl(100);this.Ow.HM(1);this.Ow.Q=[this,this.ASh,this.ASQ];A.pe([
B=this.Ow,B.AnY],this);},Bg_:function(G){var B;this.Ow.Cw=true;this.Ow.B2=false;
this.Ow.Fl(400);this.Ow.Uk(200);this.Ow.HM(3);this.Ow.Q=[this,this.ASh,this.ASQ];
this.AEP(false);A.pe([B=this.Ow,B.AnY],this);},ASQ:function(E){if(this.AMO===E)return;
this.AMO=E;A.abo([this,this.ASh,this.ASQ],0);},ASh:function(){return this.AMO;},
Aqo:function(G){var B;this.Ow.An0(this);this.AEP(false);},_Init:function(aArg){A.
acl.Gh._Init.call(this.KF={I:this},0);A.Core.Timer._Init.call(this.AdI={I:this},
0);A.acl.TE._Init.call(this.Ow={I:this},0);this.__proto__=C.A$h;var B;this.KF.HM(
1);this.AdI.PO(2000);this.KF.Sv=[this,this.A35];this.KF.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASH,B.A0f];this.AdI.Mx=[this,this.BAM];A.h7++;},_Done:function(
){this.__proto__=null;this.KF._Done();this.AdI._Done();this.Ow._Done();A.h7--;},
_ReInit:function(){this.KF._ReInit();this.AdI._ReInit();this.Ow._ReInit();},_Mark:
function(D){var B;if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acr={_Init:function(){C.A$h._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AG2={A4:0,_Init:function(aArg){C.Wo._Init.call(this,aArg);this.__proto__=C.AG2;}
,_className:"DeviceSimulation::UInt64"};C.AuR={_Init:function(){C.PQ._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Do:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Cf.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X1={Ad5:null,CF:function(G){var K=this.K;A.ab5("%s",Aok);K.Ad5.Ar(true);},E3:
function(G){var K=this.K;if(K.Ad5.Bw===true){K.Ad5.Ar(false);A.ab5("%s",Aol);}},
Bkc:function(G){var K=this.K;K.Ad5.Ar(false);A._GetAutoObject(A.kR.A$).Ahp(A._GetAutoObject(
A.Device.Device).AxD);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad5={I:this},0);K.__proto__=C.X1;this.AeK.H(Afy);K.Ad5.PO(1500);this.Uy.R(Ala);
this.Uy.Z(true);this.AeK.Aw(A.aaL(A.ach.ARr));K.Ad5.Mx=[this,K.Bkc];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad5._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad5._ReInit();},_Mark:function(D){var B;if((B=this.Ad5)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.AjE={Au4:A.jV,_Init:function(aArg){A.Device.AjE._Init.call(this,aArg);this.__proto__=
C.AjE;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ADN.__proto__=C.Wo;C.String.__proto__=C.Wo;C.ABT.__proto__=C.
Wo;C.AG3.__proto__=C.Wo;C.AG1.__proto__=C.Wo;C.PQ.__proto__=A.Device.ITable;C.GI.
__proto__=A.Device.ITable;C.AG2.__proto__=C.Wo;C.AjE.__proto__=A.Device.AjE;};C.
_ReInit=function(){var B;if((B=C.Ux._this))B._ReInit(),C.Ux._ReInit.call(B);if((
B=C.Amv._this))B._ReInit(),C.Amv._ReInit.call(B);if((B=C.AuG._this))B._ReInit(),
C.AuG._ReInit.call(B);if((B=C.Asg._this))B._ReInit(),C.Asg._ReInit.call(B);if((B=
C.Acr._this))B._ReInit(),C.Acr._ReInit.call(B);if((B=C.AuR._this))B._ReInit(),C.
AuR._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ux._this)&&(B._cycle!=D))B.
_Done(C.Ux._this=null);if((B=C.Amv._this)&&(B._cycle!=D))B._Done(C.Amv._this=null
);if((B=C.AuG._this)&&(B._cycle!=D))B._Done(C.AuG._this=null);if((B=C.Asg._this)&&(
B._cycle!=D))B._Done(C.Asg._this=null);if((B=C.Acr._this)&&(B._cycle!=D))B._Done(
C.Acr._this=null);if((B=C.AuR._this)&&(B._cycle!=D))B._Done(C.AuR._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */