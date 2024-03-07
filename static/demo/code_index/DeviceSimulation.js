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
);if(index.acr)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acr=(function(){var A=index;var C={};
var Cc="ERROR: access to null Bool data in column [";var BF="]";var EY="Access to inexistent column index: ";
var Hi=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I7="Unsupported filter criterion class";var
Ik="Operator not handled:";var O0="1,8";var PZ="INFO: Device.StartScan() called.";
var P0="INFO: Device.StopScan() called.";var CO="V0.";var E7=".";var Ls="\n";var
P1="Temp: ";var Ks="Battery: ";var N$="%%";var P2="Selected animal with row index";
var ME="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
SY="1,2";var UJ="0,1,2";var ZM="3900,3950,4000";var WN="4050,4100,4150";var IJ="Read only";
var UK="Unknown data export type: ";var ZN="Unhandled Device::DataExportType: ";
var WO="0,2,1";var ZO="650,150,700";var WQ="800,200,900";var ZP="800,200,850";var
ZQ="40000,4000,0";var UL="32,7,34,18,23,14";var WR="16384";var Rd="1,1024";var ZR=
"1,256,1024";var O1="Simulate Scan";var Re="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var WS="%d.%m.%Y";var WT="1";var WU="2";var WV="Unknown gender: ";var ZS="text/csv";
var WW="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var WX="hit-geburt-%d-%m-%Y_%H-%M.csv";var SZ="animals-%d-%m-%Y_%H-%M.csv";var ZT=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var ZU="herde-zugang-%d-%m-%Y_%H-%M.csv";var Acu=
"M";var UM="F";var ZV="?";var Afk="%Y-%m-%d";var ZW="BNR15;LOM;ZUGA_DAT\n";var WY=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
ZX="ERROR: Cannot start transaction";var ZY="Nested transactions are not allowed.";
var Afl="Transaction not opened.";var JR="Wrong transaction ID.";var Acv="Unhandled TableId:";
var Lt="Maximum number of rows reached.";var AhF="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var AnY="10";var Oa="20";var WZ="30";var AnZ="31";var AhG="32";var AhH="Severe: filter set when inserting row into table: ";
var Acw="ERROR: Row not found with index [";var UN="] while Rows Count = ";var An0=
"ERROR: trying to access an inexistent row with Index=";var An1="Invalid Device::SyncState";
var An2="Forwarding to home screen after 500 milliseconds ...";var An3="Forwarding to home screen canceled...";
var Afm=[0,58,240,208];var An4="VitalControl\nstarting up \u2026";
C.Table={GE:null,Init:function(aArg){var K=this.K;A.zV([this,this.Aj_],K.GE,0);},
CE:function(Ad,A4){var K=this.K;return K.GE.CE(Ad,A4);},VG:function(Ad,A4){var K=
this.K;return K.GE.VG(Ad,A4);},HX:function(Ad,A4){var K=this.K;return K.GE.HX(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GE.OnSetId(
E);},Cd:function(){var K=this.K;return K.GE.Cd();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.GE.Bl(E);},VH:function(Ad,A4){var K=this.K;return K.
GE.VH(Ad,A4);},Sb:function(Ad,A4){var K=this.K;return K.GE.Sb(Ad,A4);},Oy:function(
){var K=this.K;return K.GE.Oy();},OA:function(Aov){var K=this.K;return K.GE.OA(Aov
);},Yp:function(){var K=this.K;return K.GE.Yp();},Zq:function(Ad,A4,C0){var K=this.
K;return K.GE.Zq(Ad,A4,C0);},Hf:function(Ad,A4,C0){var K=this.K;return K.GE.Hf(Ad
,A4,C0);},Zp:function(Ad,A4,C0){var K=this.K;return K.GE.Zp(Ad,A4,C0);},My:function(
Ad,A4,C0){var K=this.K;return K.GE.My(Ad,A4,C0);},Zo:function(Ad,A4,C0){var K=this.
K;return K.GE.Zo(Ad,A4,C0);},La:function(aColumn,A6){var K=this.K;return K.GE.La(
aColumn,A6);},KJ:function(Ad,A4){var K=this.K;return K.GE.KJ(Ad,A4);},SC:function(
Ad,A4,C0){var K=this.K;return K.GE.SC(Ad,A4,C0);},AgF:function(aColumn,A6){var K=
this.K;return K.GE.AgF(aColumn,A6);},He:function(){var K=this.K;return K.GE.He();
},Ajx:function(aColumn,A6){var K=this.K;return K.GE.Ajx(aColumn,A6);},Ad2:function(
aColumn,A6){var K=this.K;return K.GE.Ad2(aColumn,A6);},HC:function(){var K=this.
K;return K.GE.HC();},Aa$:function(){var K=this.K;return K.GE.Aa$();},QB:function(
){var K=this.K;return K.GE.QB();},_Init:function(aArg){var K=this.K;C.GE._Init.call(
K.GE={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GE._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GE._ReInit();},_Mark:function(D){var B;if((B=this.GE)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AF0={S9:A.abi(42,null,null),CE:function(aColumn){var B;this.Z_(aColumn);var Aq=(
C.ADl.isPrototypeOf(B=this.S9.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},VG:function(aColumn){var B;this.Z_(aColumn);var Aq=(C.String.isPrototypeOf(B=this.
S9.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},HX:function(aColumn){
var B;this.Z_(aColumn);var Aq=(C.ABq.isPrototypeOf(B=this.S9.Get(aColumn))?B:null
);if(!!Aq)return Aq.A5;else A.ab5("%s",(Cc+aColumn.toFixed())+BF);return false;}
,Hf:function(aColumn,A6){this.Z_(aColumn);var Aq=A._NewObject(C.ADl,0);Aq.A5=A6;
this.S9.Set(aColumn,Aq);return true;},Zo:function(aColumn,A6){this.Z_(aColumn);var
Aq=A._NewObject(C.String,0);Aq.A5=A6;this.S9.Set(aColumn,Aq);return true;},My:function(
aColumn,A6){this.Z_(aColumn);var Aq=A._NewObject(C.ABq,0);Aq.A5=A6;this.S9.Set(aColumn
,Aq);return true;},Z_:function(aColumn){if((aColumn<0)||(aColumn>=42))throw new Error((
EY+aColumn.toFixed())+Hi);},BiL:function(AH){if(!!(A.Device.Int32FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.AJb(this.CE(AH.EE),AH.Operator,(A.Device.
Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.BxE(this.Sb(AH.EE),AH.Operator,(A.Device.
UInt32FilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.StringFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.BxD(this.VG(AH.EE),AH.Operator,(A.Device.
StringFilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.BxC(this.HX(AH.EE),AH.Operator,(A.Device.
BoolFilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.AJb(this.CE(AH.EE),AH.Operator,(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.AJb(this.CE(AH.EE),AH.Operator,(A.Device.
GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.BxH(this.VH(AH.EE),AH.Operator,(((B=(A.Device.
AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null).A5)<0)?B+0x100000000:B)&0xFF
);else if(!!(A.Device.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null))return this.
BxF(this.KJ(AH.EE),AH.Operator,(A.Device.UInt64FilterCriterion.isPrototypeOf(AH)?
AH:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(AH)?
AH:null))return this.BxG(this.KJ(AH.EE),AH.Operator,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).A5,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).Aez&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:
null).TF&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJb(this.CE(AH.EE),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A5);else throw new Error(I7);},AJb:function(Fl,D9,Gt){
switch(D9){case 0:return Fl===Gt;case 2:return Fl>Gt;case 3:return Fl<Gt;case 4:
return Fl.toFixed().indexOf(Gt.toFixed(),0)>=0;case 5:return Fl!==Gt;default:throw new
Error(Ik+D9.toFixed());}},BxD:function(Fl,D9,Gt){switch(D9){case 0:return Fl===Gt;
case 2:return Fl>Gt;case 3:return Fl<Gt;case 4:{A.ab5("%s%e%s%i",Fl,D9,Gt,Fl.indexOf(
Gt,0));return Fl.indexOf(Gt,0)>=0;}case 5:return Fl!==Gt;default:throw new Error(
Ik+D9.toFixed());}},BxC:function(Fl,D9,Gt){switch(D9){case 0:return Fl===Gt;case
2:case 3:case 4:return false;case 5:return Fl!==Gt;default:throw new Error(Ik+D9.
toFixed());}},VH:function(aColumn){var B;this.Z_(aColumn);var Aq=(C.AGC.isPrototypeOf(
B=this.S9.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},Zq:function(aColumn
,A6){this.Z_(aColumn);var Aq=A._NewObject(C.AGC,0);Aq.A5=A6;this.S9.Set(aColumn,
Aq);return true;},BxH:function(Fl,D9,Gt){switch(D9){case 0:return Fl===Gt;case 2:
return Fl>Gt;case 3:return Fl<Gt;case 4:return Fl.toFixed().indexOf(Gt.toFixed()
,0)>=0;case 5:return Fl!==Gt;default:throw new Error(Ik+D9.toFixed());}},Sb:function(
aColumn){var B;this.Z_(aColumn);var Aq=(C.AGA.isPrototypeOf(B=this.S9.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},Zp:function(aColumn,A6){this.Z_(aColumn
);var Aq=A._NewObject(C.AGA,0);Aq.A5=A6;this.S9.Set(aColumn,Aq);return true;},BxE:
function(Fl,D9,Gt){switch(D9){case 0:return Fl===Gt;case 2:return Fl>Gt;case 3:return Fl<
Gt;case 4:return Fl.toFixed().indexOf(Gt.toFixed(),0)>=0;case 5:return Fl!==Gt;default:
throw new Error(Ik+D9.toFixed());}},KJ:function(aColumn){var B;this.Z_(aColumn);
var Aq=(C.AGB.isPrototypeOf(B=this.S9.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},SC:function(aColumn,A6){this.Z_(aColumn);var Aq=A._NewObject(C.AGB,0);
Aq.A5=A6;this.S9.Set(aColumn,Aq);return true;},BxF:function(Fl,D9,Gt){switch(D9){
case 0:return Fl===Gt;case 2:return Fl>Gt;case 3:return Fl<Gt;case 4:return Fl.toFixed(
).indexOf(Gt.toFixed(),0)>=0;case 5:return Fl!==Gt;default:throw new Error(Ik+D9.
toFixed());}},BxG:function(Fl,D9,Gt,As4,AIz){var AKt=Fl.toFixed();AKt=A.ab2(A.abV(
AKt,AKt.length-As4),AIz);Fl=Math.trunc(Fl/A._GetAutoObject(A.Device.Helper).Apy(
As4))%A._GetAutoObject(A.Device.Helper).Apy(AIz);var AKW=A.ab0(Gt,0,10);switch(D9
){case 0:return Fl===AKW;case 2:return Fl>AKW;case 3:return Fl<AKW;case 4:return AKt.
indexOf(Gt,0)>=0;case 5:return Fl!==AKW;default:throw new Error(Ik+D9.toFixed());
}},_Init:function(aArg){(this.S9=[]).__proto__=C.AF0.S9;this.__proto__=C.AF0;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.S9,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wb={_Init:function(
aArg){this.__proto__=C.Wb;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADl={A5:0,_Init:function(aArg){C.Wb._Init.call(this,aArg);this.__proto__=C.ADl;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
Wb._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABq={A5:false,_Init:function(aArg){C.Wb._Init.call(this,aArg);this.__proto__=
C.ABq;},_className:"DeviceSimulation::Bool"};C.DeviceClass={AtV:null,AJh:null,AiP:
null,Aax:null,CS:function(){var K=this.K;K.A_S.call(this,this);},Init:function(aArg
){var K=this.K;var B;this.Y_(3);A.zX([this,K.AAG],[B=K.AtV,B.A8N,B.ASY],0);this.
UpdateAutoActions(O0);K.A_S.call(this,this);this.ArZ(this);this.Ar0(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.ArX(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Ank(languageValue);A.pe([this
,K.ATo],this);},Y_:function(E){this.UpdateActiveScreen(E);},Av2:function(E){this.
UpdateBatteryChargeState(E);},AEv:function(E){this.UpdateChargeActive(E);},Arz:function(
E){this.UpdateScanState(E);},Awp:function(E){this.UpdateMeasureState(E);},AwD:function(
E){this.UpdateTempValue(E);},Ank:function(E){this.UpdateLanguage(E);},AwE:function(
E){this.UpdateTemperatureUnit(E);},AEt:function(E){this.UpdateBrightness(E);},AE4:
function(E){this.UpdateMonitoring(E);},Axa:function(){var B;if(A._GetAutoObject(
C.Us).Aw7){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AKy(this
);}},Ahv:function(){var B;A._GetAutoObject(A.Device.Helper).SG.AnG(this);this.UpdateMeasureState(
0);},Ahs:function(){var K=this.K;A.ab5("%s",PZ);this.UpdateScanState(1);A.pe([this
,K.AAG],this);},AnH:function(){var K=this.K;var B;A.ab5("%s",P0);K.AiP.AnG(this);
this.UpdateScanState(0);},SetSystemTime:function(AhU){},Aw6:function(){A.Device.
DeviceClass.Baf.call(this);this.Y_(1);},AFX:function(){A.Device.DeviceClass.Bad.
call(this);this.Y_(2);},Ds:function(E){this.UpdateOverlayMenu(E);},AwJ:function(
E){this.UpdateUnderTemp(E);},AbV:function(E){this.UpdateSyncState(E);},ACx:function(
){var aString;aString=((((((((((CO+A.abz(0,9).toFixed())+E7)+A.abz(0,9).toFixed(
))+Ls)+P1)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGo))+Ls)+Ks)+A.abz(1,100).toFixed(
))+N$;return aString;},PopupStateChanged:function(JU,Ae){var Af7=A._NewObject(C.
PopupContext,0);Af7.Id=JU;Af7.Gq=Ae;this.Anv.Trigger(Af7,false);},AFu:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},AeR:function(E){this.UpdateVibrationOn(
E);},Awz:function(E){this.UpdateRatingMode(E);},AeI:function(E){this.UpdateFlashLightOn(
E);},Uh:function(E){this.UpdateTopLightOn(E);},Wn:function(E){this.UpdateRGBTopLight(
E);},Av1:function(E){this.UpdateAutoRegistrationMode(E);},ArA:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},PM:function(E){this.UpdateDigitsID(
E);},QY:function(E){this.UpdateOffsetID(E);},AFy:function(E){this.UpdateWeightValue(
E);},Awm:function(E){this.UpdateMassUnit(E);},Arc:function(E){A.Device.DeviceClass.
A$$.call(this,E);this.UpdateActiveActions(E);},Ard:function(E){A.Device.DeviceClass.
Baa.call(this,E);this.UpdateActiveActionsOrder(E);},Akd:function(E){A.Device.DeviceClass.
Bab.call(this,E);this.UpdateAutoActions(E);},AGk:function(){var K=this.K;this.UpdateMeasureState(
1);K.BA0.call(this,this);},Asc:function(){var K=this.K;var B;K.Aax.AnG(this);this.
UpdateMeasureState(0);},Ew:function(E){this.UpdateAnimalType(E);},AwK:function(E
){this.UpdateWeightRecordingMode(E);},AE_:function(E){this.UpdatePredictedTempValue(
E);},SB:function(L3){A.ab5("%s%i",P2,L3);},AEB:function(E){this.UpdateDemoMode(E
);},AEi:function(E){this.UpdateAgeRegistration(E);},AwL:function(E){this.UpdateWeightRecordingScope(
E);},JJ:function(E){this.UpdateGender(E);},Ars:function(E){this.UpdateIDLastUsedMale(
E);},Arr:function(E){this.UpdateIDLastUsedFemale(E);},AbN:function(E){this.UpdateAnimalListContent(
E);},AEk:function(E){this.UpdateAlarmListAction(E);},AEE:function(E){this.UpdateFlashLightInMeasureState(
E);},AeC:function(E){this.UpdateAnimalInfoContent(E);},AFx:function(E){this.UpdateWatchListAction(
E);},AEH:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.Arc(15359);this.Ard(ME);},ResetAutoActions:function(G){this.Akd(SY);},AvZ:
function(E){this.UpdateAnimalTypesString(E);},ArC:function(E){this.UpdateTemperaturesHighString(
E);},ArD:function(E){this.UpdateTemperaturesLowString(E);},ArZ:function(G){this.
AvZ(UJ);this.ArD(ZM);this.ArC(WN);this.AwJ(3600);},Awf:function(E){this.UpdateFreshCowsHideMeasured(
E);},Arw:function(E){this.UpdateNaisIdLastUsedMale(E);},Arv:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Awt:function(E){this.UpdateNaisIdIncrementMale(E);},Aws:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bag.call(this);A._GetAutoObject(
A.kR.A1).BU(61);},Anf:function(E){this.UpdateBootloaderMessage(E);},AEf:function(
E){this.UpdateActionListAction(E);},AvX:function(E){this.UpdateActionListHideMeasured(
E);},Ub:function(E){this.UpdateAnimalIdGenerationMethod(E);},Av_:function(E){this.
UpdateDirectionOfCountingFemale(E);},Av$:function(E){this.UpdateDirectionOfCountingMale(
E);},Awa:function(E){this.UpdateDirectionOfCountingUnisex(E);},Art:function(E){this.
UpdateIDLastUsedUnisex(E);},Arx:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Awu:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akf:function(E){this.UpdateEartagNrAssignmentMode(
E);},NU:function(E){this.UpdateBreed(E);},AE1:function(E){throw new Error(IJ);},
AEV:function(E){throw new Error(IJ);},AFr:function(E){throw new Error(IJ);},AEp:
function(E){throw new Error(IJ);},AEC:function(E){this.UpdateDryCowListAction(E);
},AI_:function(A0i){var Qo;switch(A0i){case 15:Qo=false;break;default:Qo=true;}return Qo;
},AEo:function(E){this.UpdateBirthListView(E);},AFs:function(E){this.UpdateTransferProgress(
E);},ArE:function(E){this.UpdateTransferTarget(E);},Asb:function(){var B;A.pe([B=
A._GetAutoObject(C.Aca),B.Bfy],this);},Awy:function(E){this.UpdatePremisesID(E);
},Awr:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AEI:function(E){
this.UpdateFreshCowSpan(E);},AFt:function(E){this.UpdateUSBState(E);},AnD:function(
AhP){var K=this.K;var result=A._NewObject(C.Ajs,0);result.ABX=AhP;result.FileName=
K.Bh6.call(this,AhP);switch(AhP){case 0:K.BxR.call(this,result);break;case 1:K.BxN.
call(this,result);break;case 2:K.BxS.call(this,result);break;case 3:K.BxQ.call(this
,result);break;default:throw new Error(UK+AhP.toFixed());}K.AJh=result;return result;
},AqR:function(){return true;},Aqf:function(Nj){var K=this.K;switch(Nj.ABX){case
0:A._GetAutoObject(A.Device.Device).A_(72,true,A.jV,0,[this,K.A2F]);break;case 1:
A._GetAutoObject(A.Device.Device).A_(90,true,A.jV,0,[this,K.A2F]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A_(99,true,A.jV,0,[this,K.A2F]);break;default:
throw new Error(ZN+Nj.ABX.toFixed());}},AFe:function(E){throw new Error(IJ);},AvY:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFg:function(E){this.UpdateShutdownTimer(
E);},Ari:function(E){this.UpdateAnimalListInfoItemMode(E);},Ar0:function(G){this.
Av0(WO);this.ArI(ZO);this.ArH(WQ);this.ArG(ZP);this.ArJ(ZQ);},ArH:function(E){this.
UpdateWeightGainsHighString(E);},ArI:function(E){this.UpdateWeightGainsLowString(
E);},Av0:function(E){this.UpdateAnimalTypesWeightGainsString(E);},ArG:function(E
){this.UpdateWeightGainsAverageString(E);},ArJ:function(E){this.UpdateWeightValueBirthString(
E);},Awb:function(E){this.UpdateEvaluationAnimalType(E);},AwC:function(E){this.UpdateStartScreen(
E);},ADp:function(){return 1;},ADq:function(){return 1;},AE0:function(E){this.UpdateMaximumAgeNewOnFarm(
E);},AwI:function(E){this.UpdateTransponderAssignmentIdChangeMethod(E);},AEA:function(
E){this.UpdateDataExportDestination(E);},Nc:function(E){this.UpdateWhereAbouts(E
);},Arf:function(E){this.UpdateActiveMassRecordingFields(E);},Arg:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},ArX:function(G){this.Arf(A.jV);this.Arg(
UL);},AEY:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajn:function(
){A._GetAutoObject(C.Aca).AEn(true);return true;},Ap4:function(){var B;A._GetAutoObject(
C.Aca).Ap4(this);return true;},Ap3:function(){var B;A.pe([B=A._GetAutoObject(C.Aca
),B.Ap3],this);return true;},Auq:function(){var B;A.pe([B=A._GetAutoObject(C.Aca
),B.BgD],this);return true;},Awo:function(E){this.UpdateMaxWeightValuePrecision(
E);},Awv:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Awv(WR);},Aww:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aww(Rd);},AwN:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.AwN(ZR);},BAJ:function(G){switch(this.KD){case 34:case 35:case 32:case 50:
case 55:case 63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},AAG:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.AtV.AGf)K.AiP.AnE(this);A.ab5("%s",O1);}
,BA0:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.AtV.Aw7)K.Aax.
AnE(this);},BBF:function(G){this.UpdateMeasureState(3);},ATo:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AKy],[B=K.AtV,B.A8O,B.ASZ],0
);this.RQ.AEz(A._GetAutoObject(A.Device.Helper).A6t(8));this.Sq.AEz(A._GetAutoObject(
A.Device.Helper).A6t(8));},A_S:function(G){var Azg=A._NewObject(A.Device.Aw$,0);
Azg.OnSetTimestamp(1709636410);Azg.AEW(1);Azg.AE3(0);Azg.AFb(0);this.Sq=Azg;var AyL=
A._NewObject(A.Device.Aw$,0);AyL.OnSetTimestamp(1709636410);AyL.AEW(1);AyL.AE3(0
);AyL.AFb(4);this.RQ=AyL;var Alx=A._NewObject(A.Device.Au5,0);Alx.AET(1);Alx.AEU(
0);Alx.AES(0);Alx.AFp(1);Alx.AFq(0);Alx.AFo(0);Alx.OnSetTimestamp(1709636410);this.
QS=Alx;var AlZ=A._NewObject(A.Device.Au5,0);AlZ.AET(1);AlZ.AEU(0);AlZ.AES(0);AlZ.
AFp(1);AlZ.AFq(0);AlZ.AFo(0);AlZ.OnSetTimestamp(1709636410);this.SN=AlZ;this.Ahr=
A.aaR(A.acf.Unknown);},Byb:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},BxR:function(Nj){var K=this.K;
var B;var S8=Re;var B_=A._NewObject(A.Device.Animal,0);var P;var Ado=0;for(P=0;P<
A._GetAutoObject(A.Device.Device).Ao.Cd();P++){B_.EG(P,A._GetAutoObject(A.Device.
Device).Ao);if(B_.IsRegistrationNoticePending&&(B_.NaisId>0)){S8=S8+(((((((((((((((((
K.Ail.call(this,A._GetAutoObject(A.Device.Device).Un)+String.fromCharCode(0x3B))+
K.Ail.call(this,B_.NaisId))+String.fromCharCode(0x3B))+K.AJC.call(this,B_.DateOfBirth
))+String.fromCharCode(0x3B))+K.BcA.call(this,B_.Breed))+String.fromCharCode(0x3B
))+K.Bcz.call(this,B_.Gender))+String.fromCharCode(0x3B))+K.Byg.call(this,B_.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BcB.call(this,B_.WhereAbouts))+String.fromCharCode(
0x3B))+K.Byj.call(this,B_.BirthType))+String.fromCharCode(0x3B))+K.Ail.call(this
,B_.NaisIdMother))+Ls);Ado++;}}Nj.AuH=S8;Nj.AF1=Ado;Nj.AnI=true;},Ail:function(Rh
){if(!Rh)return A.jV;return Rh.toFixed();},AJC:function(A0h){var Av=A._NewObject(
A.Core.Bw,0);Av.Initialize(A0h);return Av.Format(WS);},BcA:function(AcI){if(!AcI
)return A.jV;return A._GetAutoObject(A.Device.Converter).A45(AcI).toFixed();},Bcz:
function(L0){var result=A.jV;switch(L0){case 0:result=WT;break;case 1:result=WU;
break;case 2:result=A.jV;break;default:A.ab5("%s",WV+L0.toFixed());}return result;
},Byg:function(AIA){if(!AIA)return A.jV;return AIA.toFixed();},BcB:function(Afw){
if(!Afw)return A.jV;return Afw.toFixed();},Byj:function(AsW){return(AsW+1).toFixed(
);},A2F:function(G){var K=this.K;var At=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!At&&(At.PopupState===7))K.Byb.call(this,K.AJh.FileName,ZS,K.AJh.AuH
);},BxN:function(Nj){var K=this.K;var B;var S8=WW;var B_=A._NewObject(A.Device.Animal
,0);var P;var Ado=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cd();P++){var
AyH=A.jV;if(B_.AqQ())AyH=K.Byl.call(this,B_.FirstBodyWeight);B_.EG(P,A._GetAutoObject(
A.Device.Device).Ao);S8=S8+(((((((((((K.Ail.call(this,B_.NaisId)+String.fromCharCode(
0x3B))+K.Byh.call(this,B_.VisualId))+String.fromCharCode(0x3B))+K.Ail.call(this,
B_.TransponderId))+String.fromCharCode(0x3B))+K.Byf.call(this,B_.DateOfBirth))+String.
fromCharCode(0x3B))+K.Byk.call(this,B_.Gender))+String.fromCharCode(0x3B))+AyH)+
Ls);Ado++;}Nj.AuH=S8;Nj.AF1=Ado;Nj.AnI=true;},Bh6:function(AhP){var Azf=A.jV;var
Ac=A._NewObject(A.Core.Bw,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Dw(
));switch(AhP){case 0:Azf=Ac.Format(WX);break;case 1:Azf=Ac.Format(SZ);break;case
2:Azf=Ac.Format(ZT);break;case 3:Azf=Ac.Format(ZU);break;default:throw new Error(
UK+AhP.toFixed());}return Azf;},Byh:function(Rh){return Rh.toFixed();},Byk:function(
L0){var result=A.jV;switch(L0){case 0:result=Acu;break;case 1:result=UM;break;case
2:result=ZV;break;default:A.ab5("%s",WV+L0.toFixed());}return result;},Byl:function(
MJ){if(MJ<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).AkQ(MJ);},Byf:
function(A0h){var Av=A._NewObject(A.Core.Bw,0);Av.Initialize(A0h);return Av.Format(
Afk);},BxS:function(Nj){var K=this.K;var B;var S8=ZW;var B_=A._NewObject(A.Device.
Animal,0);var P;var Ado=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cd();P++
){B_.EG(P,A._GetAutoObject(A.Device.Device).Ao);if(B_.IsRegistrationNoticePending&&(
B_.NaisId>0)){S8=S8+(((((K.Ail.call(this,A._GetAutoObject(A.Device.Device).Un)+String.
fromCharCode(0x3B))+K.Ail.call(this,B_.NaisId))+String.fromCharCode(0x3B))+K.AJC.
call(this,A._GetAutoObject(A.Device.Helper).Dw()))+Ls);Ado++;}}Nj.AuH=S8;Nj.AF1=
Ado;Nj.AnI=true;},BxQ:function(Nj){var K=this.K;var B;var S8=WY;var B_=A._NewObject(
A.Device.Animal,0);var P;var Ado=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.
Cd();P++){B_.EG(P,A._GetAutoObject(A.Device.Device).Ao);if(B_.IsRegistrationNoticePending&&(
B_.NaisId>0)){S8=S8+(((((((((((((K.Ail.call(this,B_.NaisId)+String.fromCharCode(
0x3B))+K.AJC.call(this,B_.DateOfBirth))+String.fromCharCode(0x3B))+K.Bcz.call(this
,B_.Gender))+String.fromCharCode(0x3B))+K.BcB.call(this,B_.WhereAbouts))+String.
fromCharCode(0x3B))+K.BcA.call(this,B_.Breed))+String.fromCharCode(0x3B))+K.AJC.
call(this,A._GetAutoObject(A.Device.Helper).Dw()))+String.fromCharCode(0x3B))+K.
Ail.call(this,B_.TransponderId))+Ls);Ado++;}}Nj.AuH=S8;Nj.AF1=Ado;Nj.AnI=true;},
_Init:function(aArg){var K=this.K;A.acl.Gc._Init.call(K.AiP={I:this},0);A.acl.Gc.
_Init.call(K.Aax={I:this},0);K.__proto__=C.DeviceClass;this.Av2(100);this.Ank(1);
this.Ars(200);this.Arr(100);this.Arw(276000912345678);this.Arv(276000923456789);
this.Art(500);this.Arx(276000901234567);this.NU(1);K.AiP.HI(1);K.AiP.Fi(1000);K.
Aax.Wo(0);K.Aax.HI(1);K.Aax.Fi(750);K.Aax.B3=50000;K.AiP.Sr=[this,K.BAJ];K.AtV=A.
_GetAutoObject(C.Us);K.Aax.Sr=[this,K.BBF];K.Aax.Q=[this,this.AEc,this.AIo];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.AiP._Done(
);K.Aax._Done();A.h7--;},_ReInit:function(){var K=this.K;K.AiP._ReInit();K.Aax._ReInit(
);K.CS.call(this);},_Mark:function(D){var B;if((B=this.AtV)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AJh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aax)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.acp.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGC={A5:0,_Init:function(aArg){C.Wb._Init.call(this,aArg);this.__proto__=C.AGC;
},_className:"DeviceSimulation::UInt8"};C.AGA={A5:0,_Init:function(aArg){C.Wb._Init.
call(this,aArg);this.__proto__=C.AGA;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A3M:0,AFh:function(E){var K=this.K;K.A3M=K.A3M+(E-this.Dw());A.Device.
HelperClass.Bac.call(this,E);},Dw:function(){var K=this.K;return A.Device.HelperClass.
A$_.call(this)+K.A3M;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A_Y={Aw7:false,AGf:false,ASY:function(E){if(this.AGf===E)return;this.AGf=E;A.
abo([this,this.A8N,this.ASY],0);},A8N:function(){return this.AGf;},ASZ:function(
E){if(this.Aw7===E)return;this.Aw7=E;A.abo([this,this.A8O,this.ASZ],0);},A8O:function(
){return this.Aw7;},_Init:function(aArg){this.__proto__=C.A_Y;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Us={_Init:function(){C.A_Y._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.acp.Us._variants();
},_this:null};C.PopupContext={Gq:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Cn:function(
AI){var Hx=A.Device.Rating.Bae.call(this,AI);if(Hx){var Rn=A._GetAutoObject(A.Device.
Device).Ao;var Ad=A._GetAutoObject(A.Device.Device).Ao.La(0,this.AnimalId);if(Ad
!==-1){var Jc=Rn.Oy();if(Jc<=0)A.ab5("%s",ZX);else{var B_=A._NewObject(A.Device.
Animal,0);B_.EG(Ad,Rn);if((this.Temperature>0)&&(B_.TimestampLastTemperature<this.
Timestamp)){Rn.A_R(Ad,5,this.Temperature);Rn.AkA(Ad,17,this.RatingTemperature);Rn.
Ab9(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(B_.TimestampLastWeighing<=this.
Timestamp){Rn.AT4(Ad,18,this.BodyWeight);Rn.Ab9(Ad,19,this.Timestamp);}if(!B_.TimestampFirstWeighing||(
B_.TimestampFirstWeighing>=this.Timestamp)){Rn.AT4(Ad,23,this.BodyWeight);Rn.Ab9(
Ad,24,this.Timestamp);Rn.Hf(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AFQ(this)){var LN=A._GetAutoObject(A.Device.Helper).ACC(this);Rn.AkA(Ad,13,LN);
Rn.Ab9(Ad,31,this.Timestamp);}Rn.OA(Jc);}}}return Hx;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PP={F0:A.abi(512,null,null),Pc:0,AIZ:
0,AKH:0,A3P:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKe:0,A3i:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bds:512,AzI:-1,A0S:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AJP:false,CE:function(Ad,A4){var Bf=this.TM(Ad);if(!!Bf)return Bf.
CE(A4);return 0;},VG:function(Ad,A4){var Bf=this.TM(Ad);if(!!Bf)return Bf.VG(A4);
return A.jV;},HX:function(Ad,A4){var Bf=this.TM(Ad);if(!!Bf)return Bf.HX(A4);return false;
},VH:function(Ad,A4){var Bf=this.TM(Ad);if(!!Bf)return Bf.VH(A4);return 0;},Sb:function(
Ad,A4){var Bf=this.TM(Ad);if(!!Bf)return Bf.Sb(A4);return 0;},Oy:function(){if(this.
AJP)throw new Error(ZY);this.AJP=true;return 12345;},OA:function(Aov){if(!this.AJP
)throw new Error(Afl);if(Aov!==12345)throw new Error(JR);this.AJP=false;return true;
},Yp:function(){return this.A4k(A._NewObject(C.AF0,0));},Zq:function(Ad,A4,C0){var
Bf=this.TM(Ad);if(!!Bf)return Bf.Zq(A4,C0);return false;},Hf:function(Ad,A4,C0){
var Bf=this.TM(Ad);if(!!Bf)return Bf.Hf(A4,C0);return false;},Zp:function(Ad,A4,
C0){var Bf=this.TM(Ad);if(!!Bf)return Bf.Zp(A4,C0);return false;},My:function(Ad
,A4,C0){var Bf=this.TM(Ad);if(!!Bf)return Bf.My(A4,C0);return false;},Zo:function(
Ad,A4,C0){var Bf=this.TM(Ad);if(!!Bf)return Bf.Zo(A4,C0);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bca();switch(this.Id){case 0:{this.
Bds=256;A.pe([this,this.BvG],this);}break;case 1:A.pe([this,this.BvI],this);break;
case 3:A.pe([this,this.BvF],this);break;case 4:A.pe([this,this.BvH],this);break;
case 2:break;default:throw new Error(Acv+this.Id.toFixed());}},Cd:function(){return this.
Pc;},KJ:function(Ad,A4){var Bf=this.TM(Ad);if(!!Bf)return Bf.KJ(A4);return 0;},SC:
function(Ad,A4,C0){var Bf=this.TM(Ad);if(!!Bf)return Bf.SC(A4,C0);return false;}
,He:function(){this.Bca();return true;},HC:function(){return this.Bds;},A4k:function(
Ad){if(this.Pc>=512)throw new Error(Lt);this.F0.Set(this.Pc,Ad);this.Pc=this.Pc+
1;switch(this.Id){case 0:{this.AzI=this.Pc;this.Hf(this.Pc-1,0,this.AzI);}break;
case 1:{this.AzI=this.Pc-1;this.Hf(this.Pc-1,0,this.AzI);}break;default:;}A.pe([
this,this.Aj_],this);return this.Pc-1;},TM:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.F0.Get(aIndex);},Bca:function(){var P;for(P=0;P<512;
P=P+1)this.F0.Set(P,null);this.Pc=0;this.AIZ=0;this.AKe=0;this.AKH=0;A.pe([this,
this.Aj_],this);},AJK:function(){this.AIZ=(this.AIZ+1)%15;return this.A0S.Get(this.
AIZ);},A1F:function(){this.AKH=(this.AKH+1)%10;return this.A3P.Get(this.AKH);},AJv:
function(G){if(this.K&&this.K.AJv)return this.K.AJv.apply(this,arguments);else return C.
PP.BvO.apply(this,arguments);},BvO:function(G){var B;var Oj=true;this.AZ(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).Ahx(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(12310020,20,12,A._GetAutoObject(A.Device.Helper).Ahx(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).Ahx(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).Ahx(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).Ahx(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).Ahx(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).Ahx(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).Ahx(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);var P;var BfE=0;for(P=
1;P<=7;P=P+1){BfE=3680+(20*P);Oj=BfE>3800;this.AZ(276000312310050+(((B=P)<0)?B+0x10000000000000000:
B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).Ahx(7-P),0,1,Oj,false,false,true
,36000+(P*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);}},BvG:function(s){this.AJv(s);},AJx:
function(G){if(this.K&&this.K.AJx)return this.K.AJx.apply(this,arguments);else return C.
PP.BvQ.apply(this,arguments);},BvQ:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dw();var P;Ac=Ac-2678400;var Aik;var Bcr;for(P=0;P<32;P=P+1){var A1q=this.
Byx();for(;A1q>0;A1q=A1q-1){Aik=this.A1F();Bcr=A._GetAutoObject(A.Device.Converter
).Asd(0,Aik);this.AG(Ac,12310020,Aik,Bcr,this.AJK(),this.AJK(),this.AJK(),this.AJK(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aik=this.A1F();this.AG(Ac,276000312310001,Aik,A._GetAutoObject(A.Device.Converter
).Asd(0,Aik),1,3,3,3,0);Aik=this.A1F();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).Asd(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aik,A._GetAutoObject(
A.Device.Converter).Asd(1,Aik),2,3,3,3,0);},BvI:function(s){this.AJx(s);},AZ:function(
JU,Bwc,Bwt,Bbg,AsW,L0,Bwk,Bwp,Bwm,Bwn,MJ,BvZ,Bwr,Bwl,Eh,Bwo,AcI,AIA,Afw,Bwy,ByQ,
ByR,Bv4,BwA){var B_=A._NewObject(A.Device.Animal,0);B_.Gh();B_.AwM(0);B_.AeO(0);
B_.Uf(false);B_.Akk(false);if(ByR)B_.NX(JU);if(ByQ)B_.Nb(JU);B_.Ui(A._GetAutoObject(
A.Device.Helper).R$(JU,BwA&0xFF,Bv4&0xFF)|0);B_.AbQ(Bwc);B_.Anl(Bwt);B_.QX(Bbg);
B_.Ake(AsW);B_.JJ(L0);B_.AnB(Bwk);B_.AF_(Bwp);B_.Ahc(Bwn);B_.Uf(Bwm);B_.Aru(Bwl);
B_.Awj(Bwr);B_.Av7(BvZ);B_.Ew(Eh);B_.AeL(Bwo);B_.NU(AcI);B_.Akg(AIA);B_.Nc(Afw);
B_.Ann(Bwy);B_.Cn(this);if(MJ>0)A._GetAutoObject(C.ArR).AG(Bbg,JU,0,0,0,0,0,0,MJ
);},AG:function(LZ,AcG,Aot,BwK,Bv8,Bv9,BvS,BwM,BvT){var B1=A._NewObject(A.Device.
Rating,0);B1.Gh();var BbV=A._GetAutoObject(C.Amb).AN4(26,AcG);if(BbV>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amb).CE(BbV,0));else A.ab5("%s%U",AhF,AcG);B1.OnSetTimestamp(
LZ);B1.OnSetTemperature(Aot);B1.OnSetRatingTemperature(BwK);B1.OnSetFaeces(Bv8);
B1.OnSetFeed(Bv9);B1.OnSetAppearance(BvS);B1.OnSetRespiratory(BwM);B1.OnSetBodyWeight(
BvT);B1.Cn(this);},A57:function(aColumn,A6){var P;for(P=0;P<this.Pc;P=P+1)if(this.
F0.Get(P).CE(aColumn)===A6)return P;return-1;},Byx:function(){this.AKe=(this.AKe+
1)%10;return this.A3i.Get(this.AKe);},AJu:function(G){if(this.K&&this.K.AJu)return this.
K.AJu.apply(this,arguments);else return C.PP.BvN.apply(this,arguments);},BvN:function(
G){this.Alr(10,AnY);this.Alr(20,Oa);this.Alr(30,WZ);this.Alr(31,AnZ);this.Alr(32
,AhG);},BvF:function(s){this.AJu(s);},Alr:function(JU,Bwd){var AIS=A._NewObject(
A.Device.AnimalGroup,0);AIS.Gh();AIS.OnSetId(JU);AIS.AEK(Bwd);AIS.Cn(this);},Aa$:
function(){return this.AzI;},AN4:function(aColumn,A6){var P;for(P=0;P<this.Pc;P=
P+1)if(this.F0.Get(P).KJ(aColumn)===A6)return P;return-1;},AJw:function(G){if(this.
K&&this.K.AJw)return this.K.AJw.apply(this,arguments);else return C.PP.BvP.apply(
this,arguments);},BvP:function(G){this.Aai(2016,216,6);this.Aai(2017,217,7);this.
Aai(2018,218,8);this.Aai(2019,219,9);this.Aai(2020,220,10);this.Aai(2021,221,11);
},BvH:function(s){this.AJw(s);},Aai:function(AcO,Bv3,Bv2){var UV=A._NewObject(A.
Device.CalfDeregistrations,0);UV.Gh();UV.Akp(AcO);UV.Av9(Bv3);UV.Av8(Bv2);UV.Cn(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.F0=[]).
__proto__=C.PP.F0;(this.A3P=[]).__proto__=C.PP.A3P;(this.A3i=[]).__proto__=C.PP.
A3i;(this.A0S=[]).__proto__=C.PP.A0S;this.__proto__=C.PP;var Lu=this._variants();
if(Lu){this.K={};Lu._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.F0,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.PP._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Amb={_Init:function(){C.PP._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Aui={_Init:function(){C.PP._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.ArR={_Init:
function(){C.PP._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GE={All:A.abi(512,null,null),Gm:null,AoY:
0,CE:function(Ad,A4){var Bf=this.Aag(Ad);if(!!Bf)return Bf.CE(A4);return 0;},VG:
function(Ad,A4){var Bf=this.Aag(Ad);if(!!Bf)return Bf.VG(A4);return A.jV;},HX:function(
Ad,A4){var Bf=this.Aag(Ad);if(!!Bf)return Bf.HX(A4);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AFA(A._GetAutoObject(
C.Amb));break;case 1:this.AFA(A._GetAutoObject(C.ArR));break;case 3:this.AFA(A._GetAutoObject(
C.Aui));break;case 4:this.AFA(A._GetAutoObject(C.Aut));break;case 2:break;default:
throw new Error(Acv+this.Id.toFixed());}},Cd:function(){if(!!this.Filter)return this.
AoY;else if(!!this.Gm)return this.Gm.Pc;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.A0Q(this);},VH:function(Ad,A4){var Bf=this.Aag(Ad);if(!!Bf)
return Bf.VH(A4);return 0;},Sb:function(Ad,A4){var Bf=this.Aag(Ad);if(!!Bf)return Bf.
Sb(A4);return 0;},Oy:function(){if(!!this.Gm)return this.Gm.Oy();return-1;},OA:function(
Aov){var Hx=false;if(!!this.Gm)Hx=this.Gm.OA(Aov);if(Hx)A.pe([this,this.A0Q],this
);return Hx;},Yp:function(){if(!!this.Filter)throw new Error(AhH+A._GetAutoObject(
A.Device.Converter).BhL(this.Id,this.Filter));if(!!this.Gm)return this.Gm.A4k(A.
_NewObject(C.AF0,0));return-1;},Zq:function(Ad,A4,C0){var Bf=this.Aag(Ad);if(!!Bf
)return Bf.Zq(A4,C0);return false;},Hf:function(Ad,A4,C0){var Bf=this.Aag(Ad);if(
!!Bf)return Bf.Hf(A4,C0);return false;},Zp:function(Ad,A4,C0){var Bf=this.Aag(Ad
);if(!!Bf)return Bf.Zp(A4,C0);return false;},My:function(Ad,A4,C0){var Bf=this.Aag(
Ad);if(!!Bf)return Bf.My(A4,C0);return false;},Zo:function(Ad,A4,C0){var Bf=this.
Aag(Ad);if(!!Bf)return Bf.Zo(A4,C0);return false;},La:function(aColumn,A6){if(!!
this.Filter){var P;for(P=0;P<this.AoY;P=P+1)if(this.All.Get(P).CE(aColumn)===A6)
return P;return-1;}else if(!!this.Gm)return this.Gm.A57(aColumn,A6);return-1;},KJ:
function(Ad,A4){var Bf=this.Aag(Ad);if(!!Bf)return Bf.KJ(A4);return 0;},SC:function(
Ad,A4,C0){var Bf=this.Aag(Ad);if(!!Bf)return Bf.SC(A4,C0);return false;},AgF:function(
aColumn,A6){if(!!this.Filter){var P;for(P=0;P<this.AoY;P=P+1)if(this.All.Get(P).
KJ(aColumn)===A6)return P;return-1;}else if(!!this.Gm)return this.Gm.AN4(aColumn
,A6);return-1;},He:function(){if(!!this.Gm)return this.Gm.He();return false;},Ajx:
function(aColumn,A6){if(!!this.Gm)return this.Gm.A57(aColumn,A6)>=0;return false;
},Ad2:function(aColumn,A6){if(!!this.Gm)return this.Gm.AN4(aColumn,A6)>=0;return false;
},HC:function(){if(!!this.Gm)return this.Gm.HC();return 0;},Aa$:function(){if(!!
this.Gm)return this.Gm.Aa$();return-1;},QB:function(){if(!!this.Gm)return this.Gm.
Pc;return 0;},A0Q:function(G){this.A04();if(!!this.Filter&&!!this.Gm){var P;for(
P=0;P<this.Gm.Cd();P=P+1){var A1u=true;var Au=this.Filter.AOg();var Bf=this.Gm.TM(
P);if(!!Bf)while(A1u&&!!Au){A1u=Bf.BiL(Au);Au=this.Filter.AOl(Au);}else A.ab5("%s"
,((Acw+P.toFixed())+UN)+this.Gm.Cd().toFixed());if(A1u){this.All.Set(this.AoY,this.
Gm.F0.Get(P));this.AoY=this.AoY+1;}}}A.pe([this,this.Aj_],this);},A04:function(){
var P;for(P=0;P<512;P=P+1)this.All.Set(P,null);this.AoY=0;},AFA:function(E){if(this.
Gm===E)return;if(!!this.Gm)A.z9([this,this.A3N],this.Gm,0);this.Gm=E;if(!!this.Gm
){A.zV([this,this.A3N],this.Gm,0);A.pe([this,this.A3N],this);}},A3N:function(G){
A.pe([this,this.A0Q],this);},Aag:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.All.Get(aIndex);}else if(!!this.Gm
)return this.Gm.TM(aIndex);A.ab5("%s",An0+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.All=[]).__proto__=C.GE.
All;this.__proto__=C.GE;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.All,D);if((B=this.Gm)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A_Z={KB:null,Adq:null,Ow:null,AMk:false,AMl:
true,A3H:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).AbV(1);this.Adq.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).AbV(2);A._GetAutoObject(A.Device.Device).ArE(A._GetAutoObject(A.
Device.Device).Ao.QB());this.KB.Fi(A._GetAutoObject(A.Device.Device).Ae$*50);this.
KB.B3=A._GetAutoObject(A.Device.Device).Ae$;this.KB.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).AbV(3);this.Adq.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).AbV(4);A._GetAutoObject(A.Device.Device).ArE(A._GetAutoObject(A.Device.Device
).Ao.QB());this.KB.Fi(A._GetAutoObject(A.Device.Device).Ae$*50);this.KB.B3=A._GetAutoObject(
A.Device.Device).Ae$;this.KB.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).AbV(5);this.Adq.Ar(true);}break;case 5:A.pe([this,this.Bfy],this);break;case 7:
case 6:break;default:A.ab5("%s%e",An1,A._GetAutoObject(A.Device.Device).SyncState
);}},Bz5:function(G){this.Adq.Ar(false);A.pe([this,this.A3H],this);},BA8:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).AbV(0);A.pe([this,this.A3H],this);}break;default:;}},Bfy:function(
G){this.Adq.Ar(false);this.KB.Ar(false);A._GetAutoObject(A.Device.Device).AbV(0);
},AEn:function(E){if(this.AMl===E)return;this.AMl=E;A.abo([this,this.BjM,this.AEn
],0);},BjM:function(){return this.AMl;},Ap3:function(G){var B;this.Ow.Cu=true;this.
Ow.B3=false;this.Ow.Fi(100);this.Ow.HI(1);this.Ow.Q=[this,this.ARQ,this.ASm];A.pe([
B=this.Ow,B.AnE],this);},BgD:function(G){var B;this.Ow.Cu=true;this.Ow.B3=false;
this.Ow.Fi(400);this.Ow.Ue(200);this.Ow.HI(3);this.Ow.Q=[this,this.ARQ,this.ASm];
this.AEn(false);A.pe([B=this.Ow,B.AnE],this);},ASm:function(E){if(this.AMk===E)return;
this.AMk=E;A.abo([this,this.ARQ,this.ASm],0);},ARQ:function(){return this.AMk;},
Ap4:function(G){var B;this.Ow.AnG(this);this.AEn(false);},_Init:function(aArg){A.
acl.Gc._Init.call(this.KB={I:this},0);A.Core.Timer._Init.call(this.Adq={I:this},
0);A.acl.Tz._Init.call(this.Ow={I:this},0);this.__proto__=C.A_Z;var B;this.KB.HI(
1);this.Adq.PN(2000);this.KB.Sr=[this,this.A3H];this.KB.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASe,B.AZT];this.Adq.Mv=[this,this.Bz5];A.h7++;},_Done:function(
){this.__proto__=null;this.KB._Done();this.Adq._Done();this.Ow._Done();A.h7--;},
_ReInit:function(){this.KB._ReInit();this.Adq._ReInit();this.Ow._ReInit();},_Mark:
function(D){var B;if((B=this.KB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Aca={_Init:function(){C.A_Z._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AGB={A5:0,_Init:function(aArg){C.Wb._Init.call(this,aArg);this.__proto__=C.AGB;}
,_className:"DeviceSimulation::UInt64"};C.Aut={_Init:function(){C.PP._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Dr:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Cq.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XN={AdN:null,CA:function(G){var K=this.K;A.ab5("%s",An2);K.AdN.Ar(true);},EX:
function(G){var K=this.K;if(K.AdN.By===true){K.AdN.Ar(false);A.ab5("%s",An3);}},
BjE:function(G){var K=this.K;K.AdN.Ar(false);A._GetAutoObject(A.kR.A1).Ahg(A._GetAutoObject(
A.Device.Device).Axb);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.AdN={I:this},0);K.__proto__=C.XN;this.Aer.H(Afm);K.AdN.PN(1500);this.Ut.R(An4);
this.Ut.Y(true);this.Aer.Ax(A.aaL(A.ach.AQ0));K.AdN.Mv=[this,K.BjE];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.AdN._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.AdN._ReInit();},_Mark:function(D){var B;if((B=this.AdN)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ajs={AuH:A.jV,_Init:function(aArg){A.Device.Ajs._Init.call(this,aArg);this.__proto__=
C.Ajs;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ADl.__proto__=C.Wb;C.String.__proto__=C.Wb;C.ABq.__proto__=C.
Wb;C.AGC.__proto__=C.Wb;C.AGA.__proto__=C.Wb;C.PP.__proto__=A.Device.ITable;C.GE.
__proto__=A.Device.ITable;C.AGB.__proto__=C.Wb;C.Ajs.__proto__=A.Device.Ajs;};C.
_ReInit=function(){var B;if((B=C.Us._this))B._ReInit(),C.Us._ReInit.call(B);if((
B=C.Amb._this))B._ReInit(),C.Amb._ReInit.call(B);if((B=C.Aui._this))B._ReInit(),
C.Aui._ReInit.call(B);if((B=C.ArR._this))B._ReInit(),C.ArR._ReInit.call(B);if((B=
C.Aca._this))B._ReInit(),C.Aca._ReInit.call(B);if((B=C.Aut._this))B._ReInit(),C.
Aut._ReInit.call(B);};C.DE=function(D){var B;if((B=C.Us._this)&&(B._cycle!=D))B.
_Done(C.Us._this=null);if((B=C.Amb._this)&&(B._cycle!=D))B._Done(C.Amb._this=null
);if((B=C.Aui._this)&&(B._cycle!=D))B._Done(C.Aui._this=null);if((B=C.ArR._this)&&(
B._cycle!=D))B._Done(C.ArR._this=null);if((B=C.Aca._this)&&(B._cycle!=D))B._Done(
C.Aca._this=null);if((B=C.Aut._this)&&(B._cycle!=D))B._Done(C.Aut._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */