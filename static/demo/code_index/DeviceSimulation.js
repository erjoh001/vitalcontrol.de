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
var Cc="ERROR: access to null Bool data in column [";var BF="]";var EZ="Access to inexistent column index: ";
var Hj=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var I$="Unsupported filter criterion class";var
Io="Operator not handled:";var OZ="1,8";var P0="INFO: Device.StartScan() called.";
var P1="INFO: Device.StopScan() called.";var CO="V0.";var E8=".";var Lt="\n";var
P2="Temp: ";var JX="Battery: ";var N$="%%";var P3="Selected animal with row index";
var MF="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S2="1,2";var UM="0,1,2";var ZU="3900,3950,4000";var WT="4050,4100,4150";var Ip="Read only";
var UN="Unknown data export type: ";var ZV="Unhandled Device::DataExportType: ";
var WU="0,2,1";var ZW="650,150,700";var WV="800,200,900";var ZX="800,200,850";var
ZY="40000,4000,0";var UO="32,7,34,18,23,14";var WW="16384";var Rf="1,1024";var ZZ=
"1,256,1024";var O0="Simulate Scan";var Rg="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var WX="%d.%m.%Y";var WY="1";var WZ="2";var W0="Unknown gender: ";var Z0="text/csv";
var W1="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var W2="hit-geburt-%d-%m-%Y_%H-%M.csv";var S3="animals-%d-%m-%Y_%H-%M.csv";var UP=
"hit-zugang-%d-%m-%Y_%H-%M.csv";var Z1="herde-zugang-%d-%m-%Y_%H-%M.csv";var AcD=
"M";var S4="F";var Z2="?";var Afp="%Y-%m-%d";var Z3="BNR15;LOM;ZUGA_DAT\n";var W3=
"Ohrnummer;Geburtsdatum;Geschlecht;Nutzung;Rasse;Zugangsdatum;Transponder\n";var
Z4="ERROR: Cannot start transaction";var Z5="Nested transactions are not allowed.";
var Ak0="Transaction not opened.";var JY="Wrong transaction ID.";var Z6="Unhandled TableId:";
var Lu="Maximum number of rows reached.";var AhK="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";
var An8="10";var Oa="20";var W4="30";var An9="31";var AhL="32";var AhM="Severe: filter set when inserting row into table: ";
var AcE="ERROR: Row not found with index [";var UQ="] while Rows Count = ";var An_=
"ERROR: trying to access an inexistent row with Index=";var An$="Invalid Device::SyncState";
var Aoa="Forwarding to home screen after 500 milliseconds ...";var Aob="Forwarding to home screen canceled...";
var Afq=[0,58,240,208];var Ak1="VitalControl\nstarting up \u2026";
C.Table={GF:null,Init:function(aArg){var K=this.K;A.zV([this,this.Akd],K.GF,0);},
CE:function(Ad,A4){var K=this.K;return K.GF.CE(Ad,A4);},VL:function(Ad,A4){var K=
this.K;return K.GF.VL(Ad,A4);},HZ:function(Ad,A4){var K=this.K;return K.GF.HZ(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GF.OnSetId(
E);},Cd:function(){var K=this.K;return K.GF.Cd();},Bl:function(E){var K=this.K;A.
Device.ITable.Bl.call(this,E);K.GF.Bl(E);},VM:function(Ad,A4){var K=this.K;return K.
GF.VM(Ad,A4);},Se:function(Ad,A4){var K=this.K;return K.GF.Se(Ad,A4);},Ox:function(
){var K=this.K;return K.GF.Ox();},Oz:function(AoG){var K=this.K;return K.GF.Oz(AoG
);},Yx:function(){var K=this.K;return K.GF.Yx();},Zz:function(Ad,A4,C1){var K=this.
K;return K.GF.Zz(Ad,A4,C1);},Hg:function(Ad,A4,C1){var K=this.K;return K.GF.Hg(Ad
,A4,C1);},Zy:function(Ad,A4,C1){var K=this.K;return K.GF.Zy(Ad,A4,C1);},MB:function(
Ad,A4,C1){var K=this.K;return K.GF.MB(Ad,A4,C1);},Zx:function(Ad,A4,C1){var K=this.
K;return K.GF.Zx(Ad,A4,C1);},Lb:function(aColumn,A7){var K=this.K;return K.GF.Lb(
aColumn,A7);},KL:function(Ad,A4){var K=this.K;return K.GF.KL(Ad,A4);},SG:function(
Ad,A4,C1){var K=this.K;return K.GF.SG(Ad,A4,C1);},AgJ:function(aColumn,A7){var K=
this.K;return K.GF.AgJ(aColumn,A7);},Hf:function(){var K=this.K;return K.GF.Hf();
},AjC:function(aColumn,A7){var K=this.K;return K.GF.AjC(aColumn,A7);},Ad_:function(
aColumn,A7){var K=this.K;return K.GF.Ad_(aColumn,A7);},HF:function(){var K=this.
K;return K.GF.HF();},Abg:function(){var K=this.K;return K.GF.Abg();},QC:function(
){var K=this.K;return K.GF.QC();},_Init:function(aArg){var K=this.K;C.GF._Init.call(
K.GF={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GF._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GF._ReInit();},_Mark:function(D){var B;if((B=this.GF)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGg={Ta:A.abi(42,null,null),CE:function(aColumn){var B;this.Aag(aColumn);var Aq=(
C.ADD.isPrototypeOf(B=this.Ta.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},VL:function(aColumn){var B;this.Aag(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Ta.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},HZ:function(aColumn
){var B;this.Aag(aColumn);var Aq=(C.ABK.isPrototypeOf(B=this.Ta.Get(aColumn))?B:
null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Cc+aColumn.toFixed())+BF);return false;
},Hg:function(aColumn,A7){this.Aag(aColumn);var Aq=A._NewObject(C.ADD,0);Aq.A5=A7;
this.Ta.Set(aColumn,Aq);return true;},Zx:function(aColumn,A7){this.Aag(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A5=A7;this.Ta.Set(aColumn,Aq);return true;},MB:
function(aColumn,A7){this.Aag(aColumn);var Aq=A._NewObject(C.ABK,0);Aq.A5=A7;this.
Ta.Set(aColumn,Aq);return true;},Aag:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((EZ+aColumn.toFixed())+Hj);},Bji:function(AH){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.AJr(this.CE(AH.EF),AH.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))return this.Bx_(this.
Se(AH.EF),AH.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null).
A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AH)?AH:null))return this.
Bx9(this.VL(AH.EF),AH.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AH)?
AH:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AH)?AH:null))
return this.Bx8(this.HZ(AH.EF),AH.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AH)?
AH:null))return this.AJr(this.CE(AH.EF),AH.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJr(this.CE(AH.EF),AH.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.Byb(this.VM(AH.EF),AH.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bx$(this.KL(AH.EF),AH.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null))return this.Bya(this.KL(AH.EF),AH.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AH)?AH:null).AeI&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AH)?AH:null).TI&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AH)?AH:null))return this.AJr(this.CE(AH.EF),AH.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null).A5);else throw new Error(I$);},AJr:function(Fm,D$,Gu){
switch(D$){case 0:return Fm===Gu;case 2:return Fm>Gu;case 3:return Fm<Gu;case 4:
return Fm.toFixed().indexOf(Gu.toFixed(),0)>=0;case 5:return Fm!==Gu;default:throw new
Error(Io+D$.toFixed());}},Bx9:function(Fm,D$,Gu){switch(D$){case 0:return Fm===Gu;
case 2:return Fm>Gu;case 3:return Fm<Gu;case 4:{A.ab5("%s%e%s%i",Fm,D$,Gu,Fm.indexOf(
Gu,0));return Fm.indexOf(Gu,0)>=0;}case 5:return Fm!==Gu;default:throw new Error(
Io+D$.toFixed());}},Bx8:function(Fm,D$,Gu){switch(D$){case 0:return Fm===Gu;case
2:case 3:case 4:return false;case 5:return Fm!==Gu;default:throw new Error(Io+D$.
toFixed());}},VM:function(aColumn){var B;this.Aag(aColumn);var Aq=(C.AGW.isPrototypeOf(
B=this.Ta.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},Zz:function(aColumn
,A7){this.Aag(aColumn);var Aq=A._NewObject(C.AGW,0);Aq.A5=A7;this.Ta.Set(aColumn
,Aq);return true;},Byb:function(Fm,D$,Gu){switch(D$){case 0:return Fm===Gu;case 2:
return Fm>Gu;case 3:return Fm<Gu;case 4:return Fm.toFixed().indexOf(Gu.toFixed()
,0)>=0;case 5:return Fm!==Gu;default:throw new Error(Io+D$.toFixed());}},Se:function(
aColumn){var B;this.Aag(aColumn);var Aq=(C.AGU.isPrototypeOf(B=this.Ta.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},Zy:function(aColumn,A7){this.Aag(aColumn
);var Aq=A._NewObject(C.AGU,0);Aq.A5=A7;this.Ta.Set(aColumn,Aq);return true;},Bx_:
function(Fm,D$,Gu){switch(D$){case 0:return Fm===Gu;case 2:return Fm>Gu;case 3:return Fm<
Gu;case 4:return Fm.toFixed().indexOf(Gu.toFixed(),0)>=0;case 5:return Fm!==Gu;default:
throw new Error(Io+D$.toFixed());}},KL:function(aColumn){var B;this.Aag(aColumn);
var Aq=(C.AGV.isPrototypeOf(B=this.Ta.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},SG:function(aColumn,A7){this.Aag(aColumn);var Aq=A._NewObject(C.AGV,0
);Aq.A5=A7;this.Ta.Set(aColumn,Aq);return true;},Bx$:function(Fm,D$,Gu){switch(D$
){case 0:return Fm===Gu;case 2:return Fm>Gu;case 3:return Fm<Gu;case 4:return Fm.
toFixed().indexOf(Gu.toFixed(),0)>=0;case 5:return Fm!==Gu;default:throw new Error(
Io+D$.toFixed());}},Bya:function(Fm,D$,Gu,Ath,AIP){var AKJ=Fm.toFixed();AKJ=A.ab2(
A.abV(AKJ,AKJ.length-Ath),AIP);Fm=Math.trunc(Fm/A._GetAutoObject(A.Device.Helper
).ApI(Ath))%A._GetAutoObject(A.Device.Helper).ApI(AIP);var ALa=A.ab0(Gu,0,10);switch(
D$){case 0:return Fm===ALa;case 2:return Fm>ALa;case 3:return Fm<ALa;case 4:return AKJ.
indexOf(Gu,0)>=0;case 5:return Fm!==ALa;default:throw new Error(Io+D$.toFixed());
}},_Init:function(aArg){(this.Ta=[]).__proto__=C.AGg.Ta;this.__proto__=C.AGg;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Ta,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Wg={_Init:function(
aArg){this.__proto__=C.Wg;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADD={A5:0,_Init:function(aArg){C.Wg._Init.call(this,aArg);this.__proto__=C.ADD;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
Wg._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.ABK={A5:false,_Init:function(aArg){C.Wg._Init.call(this,aArg);this.__proto__=
C.ABK;},_className:"DeviceSimulation::Bool"};C.DeviceClass={At_:null,AJx:null,AiT:
null,AaF:null,CS:function(){var K=this.K;K.A$g.call(this,this);},Init:function(aArg
){var K=this.K;var B;this.Zg(3);A.zX([this,K.Bf3],[B=K.At_,B.A86,B.ATe],0);this.
UpdateAutoActions(OZ);K.A$g.call(this,this);this.Asa(this);this.Asb(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Ar_(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.Ant(languageValue);A.pe([this
,K.ATG],this);},Zg:function(E){this.UpdateActiveScreen(E);},Awi:function(E){this.
UpdateBatteryChargeState(E);},AEO:function(E){this.UpdateChargeActive(E);},ArN:function(
E){this.UpdateScanState(E);},AwH:function(E){this.UpdateMeasureState(E);},AwV:function(
E){this.UpdateTempValue(E);},Ant:function(E){this.UpdateLanguage(E);},AwW:function(
E){this.UpdateTemperatureUnit(E);},AEM:function(E){this.UpdateBrightness(E);},AFj:
function(E){this.UpdateMonitoring(E);},Axs:function(){var B;if(A._GetAutoObject(
C.Uv).Axn){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AKO(this
);}},AhA:function(){var B;A._GetAutoObject(A.Device.Helper).SK.AnQ(this);this.UpdateMeasureState(
0);},Ahx:function(){var K=this.K;A.ab5("%s",P0);this.UpdateScanState(1);A.pe([this
,K.Bf3],this);},AnR:function(){var K=this.K;var B;A.ab5("%s",P1);K.AiT.AnQ(this);
this.UpdateScanState(0);},SetSystemTime:function(AhZ){},Axm:function(){A.Device.
DeviceClass.BaF.call(this);this.Zg(1);},AGd:function(){A.Device.DeviceClass.BaD.
call(this);this.Zg(2);},Dt:function(E){this.UpdateOverlayMenu(E);},Aw1:function(
E){this.UpdateUnderTemp(E);},Ab1:function(E){this.UpdateSyncState(E);},ACQ:function(
){var aString;aString=((((((((((CO+A.abz(0,9).toFixed())+E8)+A.abz(0,9).toFixed(
))+Lt)+P2)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGI))+Lt)+JX)+A.abz(1,100).toFixed(
))+N$;return aString;},PopupStateChanged:function(J0,Ae){var Aga=A._NewObject(C.
PopupContext,0);Aga.Id=J0;Aga.Gr=Ae;this.AnF.Trigger(Aga,false);},AFM:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Ae0:function(E){this.UpdateVibrationOn(
E);},AwR:function(E){this.UpdateRatingMode(E);},AeR:function(E){this.UpdateFlashLightOn(
E);},Uk:function(E){this.UpdateTopLightOn(E);},Ws:function(E){this.UpdateRGBTopLight(
E);},Awh:function(E){this.UpdateAutoRegistrationMode(E);},ArO:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},PN:function(E){this.UpdateDigitsID(
E);},QZ:function(E){this.UpdateOffsetID(E);},AFQ:function(E){this.UpdateWeightValue(
E);},AwE:function(E){this.UpdateMassUnit(E);},Arn:function(E){A.Device.DeviceClass.
Baz.call(this,E);this.UpdateActiveActions(E);},Aro:function(E){A.Device.DeviceClass.
BaA.call(this,E);this.UpdateActiveActionsOrder(E);},Akk:function(E){A.Device.DeviceClass.
BaB.call(this,E);this.UpdateAutoActions(E);},AGE:function(){var K=this.K;this.UpdateMeasureState(
1);K.BBv.call(this,this);},Asp:function(){var K=this.K;var B;K.AaF.AnQ(this);this.
UpdateMeasureState(0);},Ex:function(E){this.UpdateAnimalType(E);},Aw2:function(E
){this.UpdateWeightRecordingMode(E);},AFp:function(E){this.UpdatePredictedTempValue(
E);},SF:function(L6){A.ab5("%s%i",P3,L6);},AEU:function(E){this.UpdateDemoMode(E
);},AEB:function(E){this.UpdateAgeRegistration(E);},Aw3:function(E){this.UpdateWeightRecordingScope(
E);},JO:function(E){this.UpdateGender(E);},ArE:function(E){this.UpdateIDLastUsedMale(
E);},ArD:function(E){this.UpdateIDLastUsedFemale(E);},AbT:function(E){this.UpdateAnimalListContent(
E);},AED:function(E){this.UpdateAlarmListAction(E);},AEX:function(E){this.UpdateFlashLightInMeasureState(
E);},AeL:function(E){this.UpdateAnimalInfoContent(E);},AFP:function(E){this.UpdateWatchListAction(
E);},AEZ:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.Arn(15359);this.Aro(MF);},ResetAutoActions:function(G){this.Akk(S2);},Awf:
function(E){this.UpdateAnimalTypesString(E);},ArQ:function(E){this.UpdateTemperaturesHighString(
E);},ArR:function(E){this.UpdateTemperaturesLowString(E);},Asa:function(G){this.
Awf(UM);this.ArR(ZU);this.ArQ(WT);this.Aw1(3600);},Awy:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArK:function(E){this.UpdateNaisIdLastUsedMale(E);},ArJ:function(E){this.UpdateNaisIdLastUsedFemale(
E);},AwL:function(E){this.UpdateNaisIdIncrementMale(E);},AwK:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.BaG.call(this);A._GetAutoObject(
A.kR.A1).BU(61);},Ano:function(E){this.UpdateBootloaderMessage(E);},AEy:function(
E){this.UpdateActionListAction(E);},Awd:function(E){this.UpdateActionListHideMeasured(
E);},Ue:function(E){this.UpdateAnimalIdGenerationMethod(E);},Awq:function(E){this.
UpdateDirectionOfCountingFemale(E);},Awr:function(E){this.UpdateDirectionOfCountingMale(
E);},Aws:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArF:function(E){this.
UpdateIDLastUsedUnisex(E);},ArL:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,AwM:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akm:function(E){this.UpdateEartagNrAssignmentMode(
E);},NW:function(E){this.UpdateBreed(E);},AFh:function(E){throw new Error(Ip);},
AFb:function(E){throw new Error(Ip);},AFJ:function(E){throw new Error(Ip);},AEI:
function(E){throw new Error(Ip);},AEV:function(E){this.UpdateDryCowListAction(E);
},AJo:function(A0w){var Qp;switch(A0w){case 15:Qp=false;break;default:Qp=true;}return Qp;
},AEH:function(E){this.UpdateBirthListView(E);},AFK:function(E){this.UpdateTransferProgress(
E);},ArS:function(E){this.UpdateTransferTarget(E);},Aso:function(){var B;A.pe([B=
A._GetAutoObject(C.Ach),B.Bf7],this);},AwQ:function(E){this.UpdatePremisesID(E);
},AwJ:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AE0:function(E){
this.UpdateFreshCowSpan(E);},AFL:function(E){this.UpdateUSBState(E);},AnN:function(
AhU){var K=this.K;var result=A._NewObject(C.Ajx,0);result.ACf=AhU;result.FileName=
K.BiD.call(this,AhU);switch(AhU){case 0:K.Byl.call(this,result);break;case 1:K.Byh.
call(this,result);break;case 2:K.Bym.call(this,result);break;case 3:K.Byk.call(this
,result);break;default:throw new Error(UN+AhU.toFixed());}K.AJx=result;return result;
},Aq2:function(){return true;},Aqp:function(Nl){var K=this.K;switch(Nl.ACf){case
0:A._GetAutoObject(A.Device.Device).A_(72,true,A.jV,0,[this,K.A2W]);break;case 1:
A._GetAutoObject(A.Device.Device).A_(90,true,A.jV,0,[this,K.A2W]);break;case 2:case
3:A._GetAutoObject(A.Device.Device).A_(99,true,A.jV,0,[this,K.A2W]);break;default:
throw new Error(ZV+Nl.ACf.toFixed());}},AFw:function(E){throw new Error(Ip);},Awe:
function(E){this.UpdateAnimalIdAutoGenerationMethod(E);},AFy:function(E){this.UpdateShutdownTimer(
E);},Art:function(E){this.UpdateAnimalListInfoItemMode(E);},Asb:function(G){this.
Awg(WU);this.ArW(ZW);this.ArV(WV);this.ArU(ZX);this.ArX(ZY);},ArV:function(E){this.
UpdateWeightGainsHighString(E);},ArW:function(E){this.UpdateWeightGainsLowString(
E);},Awg:function(E){this.UpdateAnimalTypesWeightGainsString(E);},ArU:function(E
){this.UpdateWeightGainsAverageString(E);},ArX:function(E){this.UpdateWeightValueBirthString(
E);},Awt:function(E){this.UpdateEvaluationAnimalType(E);},AwU:function(E){this.UpdateStartScreen(
E);},ADH:function(){return 1;},ADI:function(){return 1;},AFg:function(E){this.UpdateMaximumAgeNewOnFarm(
E);},Aw0:function(E){this.UpdateTransponderAssignmentIdChangeMethod(E);},AET:function(
E){this.UpdateDataExportDestination(E);},Nd:function(E){this.UpdateWhereAbouts(E
);},Arq:function(E){this.UpdateActiveMassRecordingFields(E);},Arr:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Ar_:function(G){this.Arq(A.jV);this.Arr(
UO);},AFe:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},Ajs:function(
){A._GetAutoObject(C.Ach).AEG(true);return true;},Aqc:function(){var B;A._GetAutoObject(
C.Ach).Aqc(this);return true;},Aqb:function(){var B;A.pe([B=A._GetAutoObject(C.Ach
),B.Aqb],this);return true;},AuF:function(){var B;A.pe([B=A._GetAutoObject(C.Ach
),B.Bha],this);return true;},AwG:function(E){this.UpdateMaxWeightValuePrecision(
E);},AwN:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.AwN(WW);},AwO:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.AwO(Rf);},Aw5:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Aw5(ZZ);},BBe:function(G){switch(this.KF){case 34:case 35:case 32:case 50:
case 55:case 63:case 91:{this.UpdateScanTransponder(12310020,1,0);this.UpdateScanState(
2);}break;case 15:break;default:this.UpdateScanState(4);}},Bf3:function(G){var K=
this.K;var B;if((this.ScanState===1)&&K.At_.AGz)K.AiT.AnO(this);A.ab5("%s",O0);}
,BBv:function(G){var K=this.K;var B;if((this.MeasureState===1)&&K.At_.Axn)K.AaF.
AnO(this);},BCa:function(G){this.UpdateMeasureState(3);},ATG:function(G){var K=this.
K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AKO],[B=K.At_,B.A87,B.ATf],0
);this.RT.AES(A._GetAutoObject(A.Device.Helper).A6M(8));this.St.AES(A._GetAutoObject(
A.Device.Helper).A6M(8));},A$g:function(G){var AzA=A._NewObject(A.Device.Axr,0);
AzA.OnSetTimestamp(1709636410);AzA.AFc(1);AzA.AFi(0);AzA.AFs(0);this.St=AzA;var Ay5=
A._NewObject(A.Device.Axr,0);Ay5.OnSetTimestamp(1709636410);Ay5.AFc(1);Ay5.AFi(0
);Ay5.AFs(4);this.RT=Ay5;var AlI=A._NewObject(A.Device.Avj,0);AlI.AE$(1);AlI.AFa(
0);AlI.AE_(0);AlI.AFH(1);AlI.AFI(0);AlI.AFG(0);AlI.OnSetTimestamp(1709636410);this.
QT=AlI;var Al_=A._NewObject(A.Device.Avj,0);Al_.AE$(1);Al_.AFa(0);Al_.AE_(0);Al_.
AFH(1);Al_.AFI(0);Al_.AFG(0);Al_.OnSetTimestamp(1709636410);this.SQ=Al_;this.Ahw=
A.aaR(A.acf.Unknown);},ByH:function(aFilename,aMimeType,aContent){{var bb=new Blob([
aContent],{type:aMimeType});var a=document.createElement('a');a.download=aFilename;
a.href=window.URL.createObjectURL(bb);a.click();}},Byl:function(Nl){var K=this.K;
var B;var S$=Rg;var B_=A._NewObject(A.Device.Animal,0);var P;var Adv=0;for(P=0;P<
A._GetAutoObject(A.Device.Device).Ao.Cd();P++){B_.EH(P,A._GetAutoObject(A.Device.
Device).Ao);if(B_.IsRegistrationNoticePending&&(B_.NaisId>0)){S$=S$+(((((((((((((((((
K.Aiq.call(this,A._GetAutoObject(A.Device.Device).Ur)+String.fromCharCode(0x3B))+
K.Aiq.call(this,B_.NaisId))+String.fromCharCode(0x3B))+K.AJS.call(this,B_.DateOfBirth
))+String.fromCharCode(0x3B))+K.Bc2.call(this,B_.Breed))+String.fromCharCode(0x3B
))+K.Bc1.call(this,B_.Gender))+String.fromCharCode(0x3B))+K.ByM.call(this,B_.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Bc3.call(this,B_.WhereAbouts))+String.fromCharCode(
0x3B))+K.ByP.call(this,B_.BirthType))+String.fromCharCode(0x3B))+K.Aiq.call(this
,B_.NaisIdMother))+Lt);Adv++;}}Nl.AuW=S$;Nl.AGh=Adv;Nl.AnS=true;},Aiq:function(Rk
){if(!Rk)return A.jV;return Rk.toFixed();},AJS:function(AyL){var Au=A._NewObject(
A.Core.Bu,0);Au.Initialize(AyL);return Au.Format(WX);},Bc2:function(AcP){if(!AcP
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5m(AcP).toFixed();},Bc1:
function(L3){var result=A.jV;switch(L3){case 0:result=WY;break;case 1:result=WZ;
break;case 2:result=A.jV;break;default:A.ab5("%s",W0+L3.toFixed());}return result;
},ByM:function(AIQ){if(!AIQ)return A.jV;return AIQ.toFixed();},Bc3:function(AfA){
if(!AfA)return A.jV;return AfA.toFixed();},ByP:function(As$){return(As$+1).toFixed(
);},A2W:function(G){var K=this.K;var At=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!At&&(At.PopupState===7))K.ByH.call(this,K.AJx.FileName,Z0,K.AJx.AuW
);},Byh:function(Nl){var K=this.K;var B;var S$=W1;var B_=A._NewObject(A.Device.Animal
,0);var P;var Adv=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cd();P++){var
Ay1=A.jV;if(B_.Aq1())Ay1=K.ByR.call(this,B_.FirstBodyWeight);B_.EH(P,A._GetAutoObject(
A.Device.Device).Ao);S$=S$+(((((((((((K.Aiq.call(this,B_.NaisId)+String.fromCharCode(
0x3B))+K.ByN.call(this,B_.VisualId))+String.fromCharCode(0x3B))+K.Aiq.call(this,
B_.TransponderId))+String.fromCharCode(0x3B))+K.ByL.call(this,B_.DateOfBirth))+String.
fromCharCode(0x3B))+K.ByQ.call(this,B_.Gender))+String.fromCharCode(0x3B))+Ay1)+
Lt);Adv++;}Nl.AuW=S$;Nl.AGh=Adv;Nl.AnS=true;},BiD:function(AhU){var Azz=A.jV;var
Ac=A._NewObject(A.Core.Bu,0);Ac.Initialize(A._GetAutoObject(A.Device.Helper).Ds(
));switch(AhU){case 0:Azz=Ac.Format(W2);break;case 1:Azz=Ac.Format(S3);break;case
2:Azz=Ac.Format(UP);break;case 3:Azz=Ac.Format(Z1);break;default:throw new Error(
UN+AhU.toFixed());}return Azz;},ByN:function(Rk){return Rk.toFixed();},ByQ:function(
L3){var result=A.jV;switch(L3){case 0:result=AcD;break;case 1:result=S4;break;case
2:result=Z2;break;default:A.ab5("%s",W0+L3.toFixed());}return result;},ByR:function(
MK){if(MK<=0)return A.jV;return A._GetAutoObject(A.Device.Converter).AkX(MK);},ByL:
function(AyL){var Au=A._NewObject(A.Core.Bu,0);Au.Initialize(AyL);return Au.Format(
Afp);},Bym:function(Nl){var K=this.K;var B;var S$=Z3;var B_=A._NewObject(A.Device.
Animal,0);var P;var Adv=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.Cd();P++
){B_.EH(P,A._GetAutoObject(A.Device.Device).Ao);if(B_.IsRegistrationNoticePending&&(
B_.NaisId>0)){S$=S$+(((((K.Aiq.call(this,A._GetAutoObject(A.Device.Device).Ur)+String.
fromCharCode(0x3B))+K.Aiq.call(this,B_.NaisId))+String.fromCharCode(0x3B))+K.AJS.
call(this,A._GetAutoObject(A.Device.Helper).Ds()))+Lt);Adv++;}}Nl.AuW=S$;Nl.AGh=
Adv;Nl.AnS=true;},Byk:function(Nl){var K=this.K;var B;var S$=W3;var B_=A._NewObject(
A.Device.Animal,0);var P;var Adv=0;for(P=0;P<A._GetAutoObject(A.Device.Device).Ao.
Cd();P++){B_.EH(P,A._GetAutoObject(A.Device.Device).Ao);if(B_.IsRegistrationNoticePending&&(
B_.NaisId>0)){S$=S$+(((((((((((((K.Aiq.call(this,B_.NaisId)+String.fromCharCode(
0x3B))+K.AJS.call(this,B_.DateOfBirth))+String.fromCharCode(0x3B))+K.Bc1.call(this
,B_.Gender))+String.fromCharCode(0x3B))+K.Bc3.call(this,B_.WhereAbouts))+String.
fromCharCode(0x3B))+K.Bc2.call(this,B_.Breed))+String.fromCharCode(0x3B))+K.AJS.
call(this,A._GetAutoObject(A.Device.Helper).Ds()))+String.fromCharCode(0x3B))+K.
Aiq.call(this,B_.TransponderId))+Lt);Adv++;}}Nl.AuW=S$;Nl.AGh=Adv;Nl.AnS=true;},
_Init:function(aArg){var K=this.K;A.acl.Ge._Init.call(K.AiT={I:this},0);A.acl.Ge.
_Init.call(K.AaF={I:this},0);K.__proto__=C.DeviceClass;this.Awi(100);this.Ant(1);
this.ArE(200);this.ArD(100);this.ArK(276000912345678);this.ArJ(276000923456789);
this.ArF(500);this.ArL(276000901234567);this.NW(1);K.AiT.HK(1);K.AiT.Fj(1000);K.
AaF.Wt(0);K.AaF.HK(1);K.AaF.Fj(750);K.AaF.B3=50000;K.AiT.Su=[this,K.BBe];K.At_=A.
_GetAutoObject(C.Uv);K.AaF.Su=[this,K.BCa];K.AaF.Q=[this,this.AEv,this.AIE];K.Init.
call(this,aArg);A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;K.AiT._Done(
);K.AaF._Done();A.h7--;},_ReInit:function(){var K=this.K;K.AiT._ReInit();K.AaF._ReInit(
);K.CS.call(this);},_Mark:function(D){var B;if((B=this.At_)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AJx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AaF)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AGW={A5:0,_Init:function(aArg){C.Wg._Init.call(this,aArg);this.__proto__=C.AGW;
},_className:"DeviceSimulation::UInt8"};C.AGU={A5:0,_Init:function(aArg){C.Wg._Init.
call(this,aArg);this.__proto__=C.AGU;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A34:0,AFz:function(E){var K=this.K;K.A34=K.A34+(E-this.Ds());A.Device.
HelperClass.BaC.call(this,E);},Ds:function(){var K=this.K;return A.Device.HelperClass.
Bay.call(this)+K.A34;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$m={Axn:false,AGz:false,ATe:function(E){if(this.AGz===E)return;this.AGz=E;A.
abo([this,this.A86,this.ATe],0);},A86:function(){return this.AGz;},ATf:function(
E){if(this.Axn===E)return;this.Axn=E;A.abo([this,this.A87,this.ATf],0);},A87:function(
){return this.Axn;},_Init:function(aArg){this.__proto__=C.A$m;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.Uv={_Init:function(){C.A$m._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.Uv._variants();
},_this:null};C.PopupContext={Gr:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Co:function(
AI){var Hz=A.Device.Rating.BaE.call(this,AI);if(Hz){var Rq=A._GetAutoObject(A.Device.
Device).Ao;var Ad=A._GetAutoObject(A.Device.Device).Ao.Lb(0,this.AnimalId);if(Ad
!==-1){var Jg=Rq.Ox();if(Jg<=0)A.ab5("%s",Z4);else{var B_=A._NewObject(A.Device.
Animal,0);B_.EH(Ad,Rq);if((this.Temperature>0)&&(B_.TimestampLastTemperature<this.
Timestamp)){Rq.A$f(Ad,5,this.Temperature);Rq.AkH(Ad,17,this.RatingTemperature);Rq.
Ace(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(B_.TimestampLastWeighing<=this.
Timestamp){Rq.AUk(Ad,18,this.BodyWeight);Rq.Ace(Ad,19,this.Timestamp);}if(!B_.TimestampFirstWeighing||(
B_.TimestampFirstWeighing>=this.Timestamp)){Rq.AUk(Ad,23,this.BodyWeight);Rq.Ace(
Ad,24,this.Timestamp);Rq.Hg(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AF8(this)){var LP=A._GetAutoObject(A.Device.Helper).ACU(this);Rq.AkH(Ad,13,LP);
Rq.Ace(Ad,31,this.Timestamp);}Rq.Oz(Jg);}}}return Hz;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PQ={F$:A.abi(512,null,null),Pd:0,AJd:
0,AKX:0,A37:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKu:0,A3z:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
BdU:512,Az2:-1,A07:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),AJ5:false,CE:function(Ad,A4){var Bf=this.TP(Ad);if(!!Bf)return Bf.
CE(A4);return 0;},VL:function(Ad,A4){var Bf=this.TP(Ad);if(!!Bf)return Bf.VL(A4);
return A.jV;},HZ:function(Ad,A4){var Bf=this.TP(Ad);if(!!Bf)return Bf.HZ(A4);return false;
},VM:function(Ad,A4){var Bf=this.TP(Ad);if(!!Bf)return Bf.VM(A4);return 0;},Se:function(
Ad,A4){var Bf=this.TP(Ad);if(!!Bf)return Bf.Se(A4);return 0;},Ox:function(){if(this.
AJ5)throw new Error(Z5);this.AJ5=true;return 12345;},Oz:function(AoG){if(!this.AJ5
)throw new Error(Ak0);if(AoG!==12345)throw new Error(JY);this.AJ5=false;return true;
},Yx:function(){return this.A4C(A._NewObject(C.AGg,0));},Zz:function(Ad,A4,C1){var
Bf=this.TP(Ad);if(!!Bf)return Bf.Zz(A4,C1);return false;},Hg:function(Ad,A4,C1){
var Bf=this.TP(Ad);if(!!Bf)return Bf.Hg(A4,C1);return false;},Zy:function(Ad,A4,
C1){var Bf=this.TP(Ad);if(!!Bf)return Bf.Zy(A4,C1);return false;},MB:function(Ad
,A4,C1){var Bf=this.TP(Ad);if(!!Bf)return Bf.MB(A4,C1);return false;},Zx:function(
Ad,A4,C1){var Bf=this.TP(Ad);if(!!Bf)return Bf.Zx(A4,C1);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.BcB();switch(this.Id){case 0:{this.
BdU=256;A.pe([this,this.Bv$],this);}break;case 1:A.pe([this,this.Bwb],this);break;
case 3:A.pe([this,this.Bv_],this);break;case 4:A.pe([this,this.Bwa],this);break;
case 2:break;default:throw new Error(Z6+this.Id.toFixed());}},Cd:function(){return this.
Pd;},KL:function(Ad,A4){var Bf=this.TP(Ad);if(!!Bf)return Bf.KL(A4);return 0;},SG:
function(Ad,A4,C1){var Bf=this.TP(Ad);if(!!Bf)return Bf.SG(A4,C1);return false;}
,Hf:function(){this.BcB();return true;},HF:function(){return this.BdU;},A4C:function(
Ad){if(this.Pd>=512)throw new Error(Lu);this.F$.Set(this.Pd,Ad);this.Pd=this.Pd+
1;switch(this.Id){case 0:{this.Az2=this.Pd;this.Hg(this.Pd-1,0,this.Az2);}break;
case 1:{this.Az2=this.Pd-1;this.Hg(this.Pd-1,0,this.Az2);}break;default:;}A.pe([
this,this.Akd],this);return this.Pd-1;},TP:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.F$.Get(aIndex);},BcB:function(){var P;for(P=0;P<512;
P=P+1)this.F$.Set(P,null);this.Pd=0;this.AJd=0;this.AKu=0;this.AKX=0;A.pe([this,
this.Akd],this);},AJ0:function(){this.AJd=(this.AJd+1)%15;return this.A07.Get(this.
AJd);},A1W:function(){this.AKX=(this.AKX+1)%10;return this.A37.Get(this.AKX);},AJL:
function(G){if(this.K&&this.K.AJL)return this.K.AJL.apply(this,arguments);else return C.
PQ.Bwh.apply(this,arguments);},Bwh:function(G){var B;var Oi=true;this.AZ(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhC(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhC(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);this.AZ(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhC(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhC(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhC(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhC(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhC(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A0,A._GetAutoObject(
A.Device.Device).AF);this.AZ(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhC(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A0,A._GetAutoObject(A.Device.Device).AF);var P;var Bgb=0;for(P=
1;P<=7;P=P+1){Bgb=3680+(20*P);Oi=Bgb>3800;this.AZ(276000312310050+(((B=P)<0)?B+0x10000000000000000:
B),30+(P%3),3,A._GetAutoObject(A.Device.Helper).AhC(7-P),0,1,Oi,false,false,true
,36000+(P*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A0,A._GetAutoObject(A.Device.Device).AF);}},Bv$:function(s){this.AJL(s);},AJN:
function(G){if(this.K&&this.K.AJN)return this.K.AJN.apply(this,arguments);else return C.
PQ.Bwj.apply(this,arguments);},Bwj:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Ds();var P;Ac=Ac-2678400;var Aip;var BcT;for(P=0;P<32;P=P+1){var A1H=this.
By3();for(;A1H>0;A1H=A1H-1){Aip=this.A1W();BcT=A._GetAutoObject(A.Device.Converter
).Asq(0,Aip);this.AG(Ac,12310020,Aip,BcT,this.AJ0(),this.AJ0(),this.AJ0(),this.AJ0(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);Aip=this.A1W();this.AG(Ac,276000312310001,Aip,A._GetAutoObject(A.Device.Converter
).Asq(0,Aip),1,3,3,3,0);Aip=this.A1W();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).Asq(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,Aip,A._GetAutoObject(
A.Device.Converter).Asq(1,Aip),2,3,3,3,0);},Bwb:function(s){this.AJN(s);},AZ:function(
J0,BwI,BwZ,BbH,As$,L3,BwQ,BwV,BwS,BwT,MK,Bwt,BwX,BwR,Ek,BwU,AcP,AIQ,AfA,Bw4,Bzk,
Bzl,Bwy,Bw6){var B_=A._NewObject(A.Device.Animal,0);B_.Gj();B_.Aw4(0);B_.AeX(0);
B_.Ui(false);B_.Akr(false);if(Bzl)B_.Q1(J0);if(Bzk)B_.Nc(J0);B_.Ul(A._GetAutoObject(
A.Device.Helper).Sc(J0,Bw6&0xFF,Bwy&0xFF)|0);B_.AbW(BwI);B_.Anu(BwZ);B_.QY(BbH);
B_.Akl(As$);B_.JO(L3);B_.AnL(BwQ);B_.AGs(BwV);B_.Ahe(BwT);B_.Ui(BwS);B_.ArG(BwR);
B_.AwC(BwX);B_.Awn(Bwt);B_.Ex(Ek);B_.AeU(BwU);B_.NW(AcP);B_.Akn(AIQ);B_.Nd(AfA);
B_.Anw(Bw4);B_.Co(this);if(MK>0)A._GetAutoObject(C.Ar4).AG(BbH,J0,0,0,0,0,0,0,MK
);},AG:function(L2,AcN,AoE,Bxe,BwC,BwD,Bwl,Bxg,Bwn){var B1=A._NewObject(A.Device.
Rating,0);B1.Gj();var Bck=A._GetAutoObject(C.Amm).AOk(26,AcN);if(Bck>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amm).CE(Bck,0));else A.ab5("%s%U",AhK,AcN);B1.OnSetTimestamp(
L2);B1.OnSetTemperature(AoE);B1.OnSetRatingTemperature(Bxe);B1.OnSetFaeces(BwC);
B1.OnSetFeed(BwD);B1.OnSetAppearance(Bwl);B1.OnSetRespiratory(Bxg);B1.OnSetBodyWeight(
Bwn);B1.Co(this);},A6o:function(aColumn,A7){var P;for(P=0;P<this.Pd;P=P+1)if(this.
F$.Get(P).CE(aColumn)===A7)return P;return-1;},By3:function(){this.AKu=(this.AKu+
1)%10;return this.A3z.Get(this.AKu);},AJK:function(G){if(this.K&&this.K.AJK)return this.
K.AJK.apply(this,arguments);else return C.PQ.Bwg.apply(this,arguments);},Bwg:function(
G){this.AlC(10,An8);this.AlC(20,Oa);this.AlC(30,W4);this.AlC(31,An9);this.AlC(32
,AhL);},Bv_:function(s){this.AJK(s);},AlC:function(J0,BwJ){var AI8=A._NewObject(
A.Device.AnimalGroup,0);AI8.Gj();AI8.OnSetId(J0);AI8.AE2(BwJ);AI8.Co(this);},Abg:
function(){return this.Az2;},AOk:function(aColumn,A7){var P;for(P=0;P<this.Pd;P=
P+1)if(this.F$.Get(P).KL(aColumn)===A7)return P;return-1;},AJM:function(G){if(this.
K&&this.K.AJM)return this.K.AJM.apply(this,arguments);else return C.PQ.Bwi.apply(
this,arguments);},Bwi:function(G){this.Aaq(2016,216,6);this.Aaq(2017,217,7);this.
Aaq(2018,218,8);this.Aaq(2019,219,9);this.Aaq(2020,220,10);this.Aaq(2021,221,11);
},Bwa:function(s){this.AJM(s);},Aaq:function(AcV,Bwx,Bww){var UZ=A._NewObject(A.
Device.CalfDeregistrations,0);UZ.Gj();UZ.Akw(AcV);UZ.Awp(Bwx);UZ.Awo(Bww);UZ.Co(
this);},_Init:function(aArg){A.Device.ITable._Init.call(this,aArg);(this.F$=[]).
__proto__=C.PQ.F$;(this.A37=[]).__proto__=C.PQ.A37;(this.A3z=[]).__proto__=C.PQ.
A3z;(this.A07=[]).__proto__=C.PQ.A07;this.__proto__=C.PQ;var Lv=this._variants();
if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:
function(){A.Device.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this
);},_Mark:function(D){var B;A.Device.ITable._Mark.call(this,D);A.aa6(this.F$,D);
if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.PQ._variants();},K:
null,_className:"DeviceSimulation::TableData"};C.Amm={_Init:function(){C.PQ._Init.
call(this,0);this.OnSetId(0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Aux={_Init:function(){C.PQ._Init.call(this,0);this.OnSetId(3);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.Ar4={_Init:
function(){C.PQ._Init.call(this,0);this.OnSetId(1);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.GF={Alw:A.abi(512,null,null),Gn:null,Ao8:
0,CE:function(Ad,A4){var Bf=this.Aao(Ad);if(!!Bf)return Bf.CE(A4);return 0;},VL:
function(Ad,A4){var Bf=this.Aao(Ad);if(!!Bf)return Bf.VL(A4);return A.jV;},HZ:function(
Ad,A4){var Bf=this.Aao(Ad);if(!!Bf)return Bf.HZ(A4);return false;},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;switch(this.Id){case 0:this.AFS(A._GetAutoObject(
C.Amm));break;case 1:this.AFS(A._GetAutoObject(C.Ar4));break;case 3:this.AFS(A._GetAutoObject(
C.Aux));break;case 4:this.AFS(A._GetAutoObject(C.AuI));break;case 2:break;default:
throw new Error(Z6+this.Id.toFixed());}},Cd:function(){if(!!this.Filter)return this.
Ao8;else if(!!this.Gn)return this.Gn.Pd;return 0;},Bl:function(E){A.Device.ITable.
Bl.call(this,E);this.A05(this);},VM:function(Ad,A4){var Bf=this.Aao(Ad);if(!!Bf)
return Bf.VM(A4);return 0;},Se:function(Ad,A4){var Bf=this.Aao(Ad);if(!!Bf)return Bf.
Se(A4);return 0;},Ox:function(){if(!!this.Gn)return this.Gn.Ox();return-1;},Oz:function(
AoG){var Hz=false;if(!!this.Gn)Hz=this.Gn.Oz(AoG);if(Hz)A.pe([this,this.A05],this
);return Hz;},Yx:function(){if(!!this.Filter)throw new Error(AhM+A._GetAutoObject(
A.Device.Converter).Bii(this.Id,this.Filter));if(!!this.Gn)return this.Gn.A4C(A.
_NewObject(C.AGg,0));return-1;},Zz:function(Ad,A4,C1){var Bf=this.Aao(Ad);if(!!Bf
)return Bf.Zz(A4,C1);return false;},Hg:function(Ad,A4,C1){var Bf=this.Aao(Ad);if(
!!Bf)return Bf.Hg(A4,C1);return false;},Zy:function(Ad,A4,C1){var Bf=this.Aao(Ad
);if(!!Bf)return Bf.Zy(A4,C1);return false;},MB:function(Ad,A4,C1){var Bf=this.Aao(
Ad);if(!!Bf)return Bf.MB(A4,C1);return false;},Zx:function(Ad,A4,C1){var Bf=this.
Aao(Ad);if(!!Bf)return Bf.Zx(A4,C1);return false;},Lb:function(aColumn,A7){if(!!
this.Filter){var P;for(P=0;P<this.Ao8;P=P+1)if(this.Alw.Get(P).CE(aColumn)===A7)
return P;return-1;}else if(!!this.Gn)return this.Gn.A6o(aColumn,A7);return-1;},KL:
function(Ad,A4){var Bf=this.Aao(Ad);if(!!Bf)return Bf.KL(A4);return 0;},SG:function(
Ad,A4,C1){var Bf=this.Aao(Ad);if(!!Bf)return Bf.SG(A4,C1);return false;},AgJ:function(
aColumn,A7){if(!!this.Filter){var P;for(P=0;P<this.Ao8;P=P+1)if(this.Alw.Get(P).
KL(aColumn)===A7)return P;return-1;}else if(!!this.Gn)return this.Gn.AOk(aColumn
,A7);return-1;},Hf:function(){if(!!this.Gn)return this.Gn.Hf();return false;},AjC:
function(aColumn,A7){if(!!this.Gn)return this.Gn.A6o(aColumn,A7)>=0;return false;
},Ad_:function(aColumn,A7){if(!!this.Gn)return this.Gn.AOk(aColumn,A7)>=0;return false;
},HF:function(){if(!!this.Gn)return this.Gn.HF();return 0;},Abg:function(){if(!!
this.Gn)return this.Gn.Abg();return-1;},QC:function(){if(!!this.Gn)return this.Gn.
Pd;return 0;},A05:function(G){this.A1i();if(!!this.Filter&&!!this.Gn){var P;for(
P=0;P<this.Gn.Cd();P=P+1){var A1L=true;var Av=this.Filter.AOy();var Bf=this.Gn.TP(
P);if(!!Bf)while(A1L&&!!Av){A1L=Bf.Bji(Av);Av=this.Filter.AOD(Av);}else A.ab5("%s"
,((AcE+P.toFixed())+UQ)+this.Gn.Cd().toFixed());if(A1L){this.Alw.Set(this.Ao8,this.
Gn.F$.Get(P));this.Ao8=this.Ao8+1;}}}A.pe([this,this.Akd],this);},A1i:function(){
var P;for(P=0;P<512;P=P+1)this.Alw.Set(P,null);this.Ao8=0;},AFS:function(E){if(this.
Gn===E)return;if(!!this.Gn)A.z9([this,this.A35],this.Gn,0);this.Gn=E;if(!!this.Gn
){A.zV([this,this.A35],this.Gn,0);A.pe([this,this.A35],this);}},A35:function(G){
A.pe([this,this.A05],this);},Aao:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.Alw.Get(aIndex);}else if(!!this.Gn
)return this.Gn.TP(aIndex);A.ab5("%s",An_+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.Alw=[]).__proto__=C.GF.
Alw;this.__proto__=C.GF;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.Alw,D);if((B=this.Gn)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$n={KD:null,Adx:null,Ov:null,AMA:false,AMB:
true,A3Z:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab1(1);this.Adx.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab1(2);A._GetAutoObject(A.Device.Device).ArS(A._GetAutoObject(A.
Device.Device).Ao.QC());this.KD.Fj(A._GetAutoObject(A.Device.Device).Aff*50);this.
KD.B3=A._GetAutoObject(A.Device.Device).Aff;this.KD.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab1(3);this.Adx.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab1(4);A._GetAutoObject(A.Device.Device).ArS(A._GetAutoObject(A.Device.Device
).Ao.QC());this.KD.Fj(A._GetAutoObject(A.Device.Device).Aff*50);this.KD.B3=A._GetAutoObject(
A.Device.Device).Aff;this.KD.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab1(5);this.Adx.Ar(true);}break;case 5:A.pe([this,this.Bf7],this);break;case 7:
case 6:break;default:A.ab5("%s%e",An$,A._GetAutoObject(A.Device.Device).SyncState
);}},BAz:function(G){this.Adx.Ar(false);A.pe([this,this.A3Z],this);},BBD:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab1(0);A.pe([this,this.A3Z],this);}break;default:;}},Bf7:function(
G){this.Adx.Ar(false);this.KD.Ar(false);A._GetAutoObject(A.Device.Device).Ab1(0);
},AEG:function(E){if(this.AMB===E)return;this.AMB=E;A.abo([this,this.Bkj,this.AEG
],0);},Bkj:function(){return this.AMB;},Aqb:function(G){var B;this.Ov.Cw=true;this.
Ov.B3=false;this.Ov.Fj(100);this.Ov.HK(1);this.Ov.Q=[this,this.AR7,this.ASD];A.pe([
B=this.Ov,B.AnO],this);},Bha:function(G){var B;this.Ov.Cw=true;this.Ov.B3=false;
this.Ov.Fj(400);this.Ov.Uh(200);this.Ov.HK(3);this.Ov.Q=[this,this.AR7,this.ASD];
this.AEG(false);A.pe([B=this.Ov,B.AnO],this);},ASD:function(E){if(this.AMA===E)return;
this.AMA=E;A.abo([this,this.AR7,this.ASD],0);},AR7:function(){return this.AMA;},
Aqc:function(G){var B;this.Ov.AnQ(this);this.AEG(false);},_Init:function(aArg){A.
acl.Ge._Init.call(this.KD={I:this},0);A.Core.Timer._Init.call(this.Adx={I:this},
0);A.acl.TC._Init.call(this.Ov={I:this},0);this.__proto__=C.A$n;var B;this.KD.HK(
1);this.Adx.PO(2000);this.KD.Su=[this,this.A3Z];this.KD.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASv,B.AZ8];this.Adx.Mx=[this,this.BAz];A.h7++;},_Done:function(
){this.__proto__=null;this.KD._Done();this.Adx._Done();this.Ov._Done();A.h7--;},
_ReInit:function(){this.KD._ReInit();this.Adx._ReInit();this.Ov._ReInit();},_Mark:
function(D){var B;if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Ach={_Init:function(){C.A$n._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AGV={A5:0,_Init:function(aArg){C.Wg._Init.call(this,aArg);this.__proto__=C.AGV;}
,_className:"DeviceSimulation::UInt64"};C.AuI={_Init:function(){C.PQ._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Dr:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Cr.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.XU={AdU:null,CB:function(G){var K=this.K;A.ab5("%s",Aoa);K.AdU.Ar(true);},EY:
function(G){var K=this.K;if(K.AdU.By===true){K.AdU.Ar(false);A.ab5("%s",Aob);}},
Bkb:function(G){var K=this.K;K.AdU.Ar(false);A._GetAutoObject(A.kR.A1).Ahi(A._GetAutoObject(
A.Device.Device).Axt);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.AdU={I:this},0);K.__proto__=C.XU;this.AeA.H(Afq);K.AdU.PO(1500);this.Uw.R(Ak1);
this.Uw.Z(true);this.AeA.Aw(A.aaL(A.ach.ARf));K.AdU.Mx=[this,K.Bkb];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.AdU._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.AdU._ReInit();},_Mark:function(D){var B;if((B=this.AdU)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.Ajx={AuW:A.jV,_Init:function(aArg){A.Device.Ajx._Init.call(this,aArg);this.__proto__=
C.Ajx;},_className:"DeviceSimulation::DataExportContext"};
C._Init=function(){C.ADD.__proto__=C.Wg;C.String.__proto__=C.Wg;C.ABK.__proto__=C.
Wg;C.AGW.__proto__=C.Wg;C.AGU.__proto__=C.Wg;C.PQ.__proto__=A.Device.ITable;C.GF.
__proto__=A.Device.ITable;C.AGV.__proto__=C.Wg;C.Ajx.__proto__=A.Device.Ajx;};C.
_ReInit=function(){var B;if((B=C.Uv._this))B._ReInit(),C.Uv._ReInit.call(B);if((
B=C.Amm._this))B._ReInit(),C.Amm._ReInit.call(B);if((B=C.Aux._this))B._ReInit(),
C.Aux._ReInit.call(B);if((B=C.Ar4._this))B._ReInit(),C.Ar4._ReInit.call(B);if((B=
C.Ach._this))B._ReInit(),C.Ach._ReInit.call(B);if((B=C.AuI._this))B._ReInit(),C.
AuI._ReInit.call(B);};C.DF=function(D){var B;if((B=C.Uv._this)&&(B._cycle!=D))B.
_Done(C.Uv._this=null);if((B=C.Amm._this)&&(B._cycle!=D))B._Done(C.Amm._this=null
);if((B=C.Aux._this)&&(B._cycle!=D))B._Done(C.Aux._this=null);if((B=C.Ar4._this)&&(
B._cycle!=D))B._Done(C.Ar4._this=null);if((B=C.Ach._this)&&(B._cycle!=D))B._Done(
C.Ach._this=null);if((B=C.AuI._this)&&(B._cycle!=D))B._Done(C.AuI._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */