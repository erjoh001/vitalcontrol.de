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
);if(index.acs)throw new Error("The unit file 'DeviceSimulation.js' included twice!"
);index.acs=(function(){var A=index;var C={};
var Ce="ERROR: access to null Bool data in column [";var BD="]";var E7="Access to inexistent column index: ";
var Hr=", or not enough indexes for store column. You can increase the \'data\' "+
"array size to hold this column.";var IV="Unsupported filter criterion class";var
Is="Operator not handled:";var O4="1,8";var P_="INFO: Device.StartScan() called.";
var P$="INFO: Device.StopScan() called.";var CQ="V0.";var Ff=".";var L3="\n";var
Qa="Temp: ";var J5="Battery: ";var Oc="%%";var Qb="Selected animal with row index";
var MJ="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S$="1,2";var UT="0,1,2";var Z5="3900,3950,4000";var W8="4050,4100,4150";var It="Read only";
var UU="Unknown data export type: ";var Z6="Unhandled Device::DataExportType: ";
var W9="0,2,1";var Z7="650,150,700";var W_="800,200,900";var Z8="800,200,850";var
Z9="40000,4000,0";var UV="32,7,34,18,23,14";var W$="16384";var O5="1,1024";var Z_=
"Simulate Scan";var O6="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rn="%d.%m.%Y";var Xa="1";var Xb="2";var UW="Unknown gender: ";var Z$="text/csv";
var Aaa="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Xc="hit-geburt-%d-%m-%Y_%H-%M.csv";var Xd="animals-%d-%m-%Y_%H-%M.csv";var Ta=
"zugang-%d-%m-%Y_%H-%M.csv";var UX="M";var UY="F";var AcM="?";var Tb="%Y-%m-%d";
var Aab="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var AfB="ERROR: Cannot start transaction";
var Aac="Nested transactions are not allowed.";var Xe="Transaction not opened.";
var Aad="Wrong transaction ID.";var Xf="Unhandled TableId:";var AhX="Maximum number of rows reached.";
var KZ="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcN=
"10";var Lw="20";var AhY="30";var Aoe="31";var Od="32";var Xg="Severe: filter set when inserting row into table: ";
var Aae="Warning: DeviceSimulation::TableData not in transaction";var AfC="ERROR: Row not found with index [";
var AhZ="] while Rows Count = ";var AcO="ERROR: trying to access an inexistent row with Index=";
var UZ="Invalid Device::SyncState";var Aof="Forwarding to home screen after 500 milliseconds ...";
var Aog="Forwarding to home screen canceled...";var Aoh=[0,58,240,208];var Aoi="VitalControl\nstarting up \u2026";
C.Table={GM:null,Init:function(aArg){var K=this.K;A.zV([this,this.Ako],K.GM,0);},
CF:function(Ad,A4){var K=this.K;return K.GM.CF(Ad,A4);},V2:function(Ad,A4){var K=
this.K;return K.GM.V2(Ad,A4);},H3:function(Ad,A4){var K=this.K;return K.GM.H3(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GM.OnSetId(
E);},B9:function(){var K=this.K;return K.GM.B9();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GM.Bk(E);},V3:function(Ad,A4){var K=this.K;return K.
GM.V3(Ad,A4);},Sm:function(Ad,A4){var K=this.K;return K.GM.Sm(Ad,A4);},OA:function(
){var K=this.K;return K.GM.OA();},OC:function(AoQ){var K=this.K;return K.GM.OC(AoQ
);},YH:function(){var K=this.K;return K.GM.YH();},ZL:function(Ad,A4,CZ){var K=this.
K;return K.GM.ZL(Ad,A4,CZ);},Ho:function(Ad,A4,CZ){var K=this.K;return K.GM.Ho(Ad
,A4,CZ);},ZK:function(Ad,A4,CZ){var K=this.K;return K.GM.ZK(Ad,A4,CZ);},N8:function(
Ad,A4,CZ){var K=this.K;return K.GM.N8(Ad,A4,CZ);},ZJ:function(Ad,A4,CZ){var K=this.
K;return K.GM.ZJ(Ad,A4,CZ);},LT:function(aColumn,A7){var K=this.K;return K.GM.LT(
aColumn,A7);},KP:function(Ad,A4){var K=this.K;return K.GM.KP(Ad,A4);},UB:function(
Ad,A4,CZ){var K=this.K;return K.GM.UB(Ad,A4,CZ);},AgZ:function(aColumn,A7){var K=
this.K;return K.GM.AgZ(aColumn,A7);},E6:function(){var K=this.K;return K.GM.E6();
},AjL:function(aColumn,A7){var K=this.K;return K.GM.AjL(aColumn,A7);},Aem:function(
aColumn,A7){var K=this.K;return K.GM.Aem(aColumn,A7);},HK:function(){var K=this.
K;return K.GM.HK();},Abr:function(){var K=this.K;return K.GM.Abr();},QK:function(
){var K=this.K;return K.GM.QK();},_Init:function(aArg){var K=this.K;C.GM._Init.call(
K.GM={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GM._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GM._ReInit();},_Mark:function(D){var B;if((B=this.GM)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGx={Ti:A.abi(42,null,null),CF:function(aColumn){var B;this.Aao(aColumn);var Aq=(
C.ADX.isPrototypeOf(B=this.Ti.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},V2:function(aColumn){var B;this.Aao(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Ti.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},H3:function(aColumn
){var B;this.Aao(aColumn);var Aq=(C.AB3.isPrototypeOf(B=this.Ti.Get(aColumn))?B:
null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Ce+aColumn.toFixed())+BD);return false;
},Ho:function(aColumn,A7){this.Aao(aColumn);var Aq=A._NewObject(C.ADX,0);Aq.A5=A7;
this.Ti.Set(aColumn,Aq);return true;},ZJ:function(aColumn,A7){this.Aao(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A5=A7;this.Ti.Set(aColumn,Aq);return true;},N8:
function(aColumn,A7){this.Aao(aColumn);var Aq=A._NewObject(C.AB3,0);Aq.A5=A7;this.
Ti.Set(aColumn,Aq);return true;},Aao:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E7+aColumn.toFixed())+Hr);},Bj2:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJN(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.By4(this.
Sm(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
By3(this.V2(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.By2(this.H3(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJN(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJN(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.By7(this.V3(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.By5(this.KP(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.By6(this.KP(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zm&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OE&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJN(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else throw new Error(IV);},AJN:function(Fu,Eb,GB){
switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:
return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new
Error(Is+Eb.toFixed());}},By3:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;
case 2:return Fu>GB;case 3:return Fu<GB;case 4:{A.ab5("%s%e%s%i",Fu,Eb,GB,Fu.indexOf(
GB,0));return Fu.indexOf(GB,0)>=0;}case 5:return Fu!==GB;default:throw new Error(
Is+Eb.toFixed());}},By2:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case
2:case 3:case 4:return false;case 5:return Fu!==GB;default:throw new Error(Is+Eb.
toFixed());}},V3:function(aColumn){var B;this.Aao(aColumn);var Aq=(C.AHa.isPrototypeOf(
B=this.Ti.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},ZL:function(aColumn
,A7){this.Aao(aColumn);var Aq=A._NewObject(C.AHa,0);Aq.A5=A7;this.Ti.Set(aColumn
,Aq);return true;},By7:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:
return Fu>GB;case 3:return Fu<GB;case 4:return Fu.toFixed().indexOf(GB.toFixed()
,0)>=0;case 5:return Fu!==GB;default:throw new Error(Is+Eb.toFixed());}},Sm:function(
aColumn){var B;this.Aao(aColumn);var Aq=(C.AG_.isPrototypeOf(B=this.Ti.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},ZK:function(aColumn,A7){this.Aao(aColumn
);var Aq=A._NewObject(C.AG_,0);Aq.A5=A7;this.Ti.Set(aColumn,Aq);return true;},By4:
function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<
GB;case 4:return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:
throw new Error(Is+Eb.toFixed());}},KP:function(aColumn){var B;this.Aao(aColumn);
var Aq=(C.AG$.isPrototypeOf(B=this.Ti.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},UB:function(aColumn,A7){this.Aao(aColumn);var Aq=A._NewObject(C.AG$,0
);Aq.A5=A7;this.Ti.Set(aColumn,Aq);return true;},By5:function(Fu,Eb,GB){switch(Eb
){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:return Fu.
toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new Error(
Is+Eb.toFixed());}},By6:function(Fu,Eb,GB,Atx,AI_){var AK3=Fu.toFixed();AK3=A.ab2(
A.abV(AK3,AK3.length-Atx),AI_);Fu=Math.trunc(Fu/A._GetAutoObject(A.Device.Helper
).ApR(Atx))%A._GetAutoObject(A.Device.Helper).ApR(AI_);var ALv=A.ab0(GB,0,10);switch(
Eb){case 0:return Fu===ALv;case 2:return Fu>ALv;case 3:return Fu<ALv;case 4:return AK3.
indexOf(GB,0)>=0;case 5:return Fu!==ALv;default:throw new Error(Is+Eb.toFixed());
}},_Init:function(aArg){(this.Ti=[]).__proto__=C.AGx.Ti;this.__proto__=C.AGx;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Ti,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Ww={_Init:function(
aArg){this.__proto__=C.Ww;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.ADX={A5:0,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=C.ADX;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
Ww._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.AB3={A5:false,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=
C.AB3;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aup:null,Ai3:null,AaP:
null,CP:function(){var K=this.K;K.A$C.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zp(3);A.zX([this,K.BgA],[B=K.Aup,B.A9l,B.ATI],0);this.UpdateAutoActions(
O4);K.A$C.call(this,this);this.Ass(this);this.Ast(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Asq(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=17;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnC(languageValue);A.pe([this
,K.AT9],this);},Zp:function(E){this.UpdateActiveScreen(E);},Awx:function(E){this.
UpdateBatteryChargeState(E);},AE8:function(E){this.UpdateChargeActive(E);},Ar3:function(
E){this.UpdateScanState(E);},AwW:function(E){this.UpdateMeasureState(E);},Aw_:function(
E){this.UpdateTempValue(E);},AnC:function(E){this.UpdateLanguage(E);},Aw$:function(
E){this.UpdateTemperatureUnit(E);},AE6:function(E){this.UpdateBrightness(E);},AFC:
function(E){this.UpdateMonitoring(E);},AxJ:function(){var B;if(A._GetAutoObject(
C.UC).AxD){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).AK9(this
);}},AhP:function(){var B;A._GetAutoObject(A.Device.Helper).SU.AnZ(this);this.UpdateMeasureState(
0);},AhM:function(){var K=this.K;A.ab5("%s",P_);this.UpdateScanState(1);A.pe([this
,K.BgA],this);},An0:function(){var K=this.K;var B;A.ab5("%s",P$);K.Ai3.AnZ(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah$){},AxC:function(){A.Device.
DeviceClass.Ba6.call(this);this.Zp(1);},AGu:function(){A.Device.DeviceClass.Ba4.
call(this);this.Zp(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axf:function(
E){this.UpdateUnderTemp(E);},Ab8:function(E){this.UpdateSyncState(E);},AC_:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Ff)+A.abz(0,9).toFixed(
))+L3)+Qa)+A.abz(30,90).toFixed())+A.aaR(A.acf.AGZ))+L3)+J5)+A.abz(1,100).toFixed(
))+Oc;return aString;},PopupStateChanged:function(J8,Ae){var Agp=A._NewObject(C.
PopupContext,0);Agp.Id=J8;Agp.EN=Ae;this.AnO.Trigger(Agp,false);},AF4:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Afa:function(E){this.UpdateVibrationOn(
E);},Aw6:function(E){this.UpdateRatingMode(E);},Ae2:function(E){this.UpdateFlashLightOn(
E);},Ut:function(E){this.UpdateTopLightOn(E);},WH:function(E){this.UpdateRGBTopLight(
E);},Aww:function(E){this.UpdateAutoRegistrationMode(E);},Ar4:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OO:function(E){this.UpdateDigitsID(
E);},PU:function(E){this.UpdateOffsetID(E);},AF8:function(E){this.UpdateWeightValue(
E);},AwT:function(E){this.UpdateMassUnit(E);},ArD:function(E){A.Device.DeviceClass.
Ba0.call(this,E);this.UpdateActiveActions(E);},ArE:function(E){A.Device.DeviceClass.
Ba1.call(this,E);this.UpdateActiveActionsOrder(E);},Akv:function(E){A.Device.DeviceClass.
Ba2.call(this,E);this.UpdateAutoActions(E);},AGV:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCr.call(this,this);},AsH:function(){var K=this.K;var B;K.AaP.AnZ(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axg:function(E
){this.UpdateWeightRecordingMode(E);},AFH:function(E){this.UpdatePredictedTempValue(
E);},SR:function(L9){A.ab5("%s%i",Qb,L9);},AFb:function(E){this.UpdateDemoMode(E
);},AEU:function(E){this.UpdateAgeRegistration(E);},Axh:function(E){this.UpdateWeightRecordingScope(
E);},JW:function(E){this.UpdateGender(E);},ArT:function(E){this.UpdateIDLastUsedMale(
E);},ArS:function(E){this.UpdateIDLastUsedFemale(E);},Zq:function(E){this.UpdateAnimalListContent(
E);},AEW:function(E){this.UpdateAlarmListAction(E);},AFe:function(E){this.UpdateFlashLightInMeasureState(
E);},AeX:function(E){this.UpdateAnimalInfoContent(E);},AF7:function(E){this.UpdateWatchListAction(
E);},AFg:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArD(15359);this.ArE(MJ);},ResetAutoActions:function(G){this.Akv(S$);},Awu:
function(E){this.UpdateAnimalTypesString(E);},Ar7:function(E){this.UpdateTemperaturesHighString(
E);},Ar8:function(E){this.UpdateTemperaturesLowString(E);},Ass:function(G){this.
Awu(UT);this.Ar8(Z5);this.Ar7(W8);this.Axf(3600);},AwN:function(E){this.UpdateFreshCowsHideMeasured(
E);},ArZ:function(E){this.UpdateNaisIdLastUsedMale(E);},ArY:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw0:function(E){this.UpdateNaisIdIncrementMale(E);},AwZ:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Ba7.call(this);A._GetAutoObject(
A.kR.A8).Cd(53);},Anx:function(E){this.UpdateBootloaderMessage(E);},AER:function(
E){this.UpdateActionListAction(E);},Aws:function(E){this.UpdateActionListHideMeasured(
E);},Um:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwF:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwG:function(E){this.UpdateDirectionOfCountingMale(
E);},AwH:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArU:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar0:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw1:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akx:function(E){this.UpdateEartagNrAssignmentMode(
E);},N2:function(E){this.UpdateBreed(E);},AFA:function(E){throw new Error(It);},
AFu:function(E){throw new Error(It);},AF1:function(E){throw new Error(It);},AE2:
function(E){throw new Error(It);},AFc:function(E){this.UpdateDryCowListAction(E);
},AJK:function(A01){var Qz;switch(A01){case 15:Qz=false;break;default:Qz=true;}return Qz;
},AE0:function(E){this.UpdateBirthListView(E);},AF2:function(E){this.UpdateTransferProgress(
E);},Ar9:function(E){this.UpdateTransferTarget(E);},AsG:function(){var B;A.pe([B=
A._GetAutoObject(C.Acp),B.BgE],this);},Aw5:function(E){this.UpdatePremisesID(E);
},AwY:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFh:function(E){
this.UpdateFreshCowSpan(E);},AF3:function(E){this.UpdateUSBDevice(E.Z1,E.AsQ,E.Asj
);},AxI:function(){var K=this.K;var B;this.Gf.FileName=K.Bjm.call(this,this.Gf.AgN
);switch(this.Gf.AgN){case 0:K.Bze.call(this,(C.VT.isPrototypeOf(B=this.Gf)?B:null
));break;case 1:K.Bzb.call(this,(C.VT.isPrototypeOf(B=this.Gf)?B:null));break;case
2:K.Bzg.call(this,(C.VT.isPrototypeOf(B=this.Gf)?B:null));break;default:throw new
Error(UU+this.Gf.AgN.toFixed());}},Arg:function(){return true;},AqC:function(){var
K=this.K;switch(this.Gf.AgN){case 0:A._GetAutoObject(A.Device.Device).A3(72,true
,A.jV,0,[this,K.A3q]);break;case 1:A._GetAutoObject(A.Device.Device).A3(90,true,
A.jV,0,[this,K.A3q]);break;case 2:A._GetAutoObject(A.Device.Device).A3(99,true,A.
jV,0,[this,K.A3q]);break;default:throw new Error(Z6+this.Gf.AgN.toFixed());}},AFO:
function(E){throw new Error(It);},Awt:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFQ:function(E){this.UpdateShutdownTimer(E);},Ast:function(G){this.Awv(W9);
this.Asb(Z7);this.Asa(W_);this.Ar$(Z8);this.Asc(Z9);},Asa:function(E){this.UpdateWeightGainsHighString(
E);},Asb:function(E){this.UpdateWeightGainsLowString(E);},Awv:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Ar$:function(E){this.UpdateWeightGainsAverageString(E);},Asc:function(E){this.
UpdateWeightValueBirthString(E);},AwI:function(E){this.UpdateEvaluationAnimalType(
E);},Aw9:function(E){this.UpdateStartScreen(E);},AD1:function(){return 1;},AD2:function(
){return 1;},AFz:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axd:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nl:function(E){this.UpdateWhereAbouts(
E);},ArG:function(E){this.UpdateActiveMassRecordingFields(E);},ArH:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Asq:function(G){this.ArG(A.jV);this.ArH(
UV);},AFx:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},AjC:function(
){A._GetAutoObject(C.Acp).AEZ(true);return true;},Aqo:function(){var B;A._GetAutoObject(
C.Acp).Aqo(this);return true;},Aqn:function(){var B;A.pe([B=A._GetAutoObject(C.Acp
),B.Aqn],this);return true;},AuW:function(){var B;A.pe([B=A._GetAutoObject(C.Acp
),B.BhI],this);return true;},AwV:function(E){this.UpdateMaxWeightValuePrecision(
E);},Aw2:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw2(W$);},Aw3:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw3(O5);},Axj:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axj(O5);},Axe:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asp:function(AoE,AJg){this.Gf.E6();this.Gf.AgN=AoE;this.Gf.AU1=AJg;this.Gf.E5(
1);this.Gf.E5(2);this.AxI();},AE1:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFI:function(E){this.UpdatePurchasedListResetOnExport(E);},BCb:function(G){
switch(this.Ij){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},BgA:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Aup.AGQ)K.Ai3.
AnX(this);A.ab5("%s",Z_);},BCr:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Aup.AxD)K.AaP.AnX(this);},BC_:function(G){this.UpdateMeasureState(3);},AT9:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.AK9],[
B=K.Aup,B.A9m,B.ATJ],0);this.R3.AFa(A._GetAutoObject(A.Device.Helper).A64(8));this.
SB.AFa(A._GetAutoObject(A.Device.Helper).A64(8));},A$C:function(G){var AzO=A._NewObject(
A.Device.AxH,0);AzO.OnSetTimestamp(1713968356);AzO.AFv(1);AzO.AFB(0);AzO.AFL(0);
this.SB=AzO;var Azj=A._NewObject(A.Device.AxH,0);Azj.OnSetTimestamp(1713968356);
Azj.AFv(1);Azj.AFB(0);Azj.AFL(6);this.R3=Azj;var AlV=A._NewObject(A.Device.Avz,0
);AlV.AFs(1);AlV.AFt(0);AlV.AFr(0);AlV.AFZ(1);AlV.AF0(0);AlV.AFY(0);AlV.OnSetTimestamp(
1713968356);this.Q1=AlV;var Amm=A._NewObject(A.Device.Avz,0);Amm.AFs(1);Amm.AFt(
0);Amm.AFr(0);Amm.AFZ(1);Amm.AF0(0);Amm.AFY(0);Amm.OnSetTimestamp(1713968356);this.
S0=Amm;this.AhL=A.aaR(A.acf.Unknown);},BzA:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},Bze:function(
Ac1){var K=this.K;var B;var Adc=O6;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cz.E3(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Adc=Adc+(((((((((((((((((
K.Apj.call(this,A._GetAutoObject(A.Device.Device).PY)+String.fromCharCode(0x3B))+
K.Apj.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A2k.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.Bdx.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.Bdw.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.BzF.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.Bdy.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.BzI.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.Apj.call(this
,Cz.NaisIdMother))+L3);Amd++;}}Ac1.Ava=Adc;Ac1.AGy=Amd;Ac1.E5(3);},Apj:function(
Rq){if(!Rq)return A.jV;return Rq.toFixed();},A2k:function(AyZ){var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(AyZ);return Av.Format(Rn);},Bdx:function(Ac0){if(!Ac0
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5I(Ac0).toFixed();},Bdw:
function(L6){var result=A.jV;switch(L6){case 0:result=Xa;break;case 1:result=Xb;
break;case 2:result=A.jV;break;default:A.ab5("%s",UW+L6.toFixed());}return result;
},BzF:function(AI$){if(!AI$)return A.jV;return AI$.toFixed();},Bdy:function(AfN){
if(!AfN)return A.jV;return AfN.toFixed();},BzI:function(Atq){return(Atq+1).toFixed(
);},A3q:function(G){var K=this.K;var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!As)return;if(As.PopupState===7){K.BzA.call(this,this.Gf.FileName,
Z$,(C.VT.isPrototypeOf(B=this.Gf)?B:null).Ava);this.Gf.E6();}else if(As.PopupState===
8)this.Gf.E6();},Bzb:function(Ac1){var K=this.K;var B;var Adc=Aaa;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B9();O++){var Azf=A.jV;if(Cz.Arf())Azf=K.BzK.call(this,Cz.FirstBodyWeight);Cz.E3(
O,A._GetAutoObject(A.Device.Device).An);Adc=Adc+(((((((((((K.Apj.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.BzG.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.Apj.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.BzE.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BzJ.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azf)+L3);Amd++;}Ac1.Ava=Adc;Ac1.AGy=Amd;Ac1.E5(3);},Bjm:function(
AoE){var AJ5=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoE){case 0:AJ5=Ac.Format(Xc);break;case 1:AJ5=Ac.
Format(Xd);break;case 2:AJ5=Ac.Format(Ta);break;default:throw new Error(UU+AoE.toFixed(
));}return AJ5;},BzG:function(Rq){return Rq.toFixed();},BzJ:function(L6){var result=
A.jV;switch(L6){case 0:result=UX;break;case 1:result=UY;break;case 2:result=AcM;
break;default:A.ab5("%s",UW+L6.toFixed());}return result;},BzK:function(MP){if(MP<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak$(MP);},BzE:function(
AyZ){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(AyZ);return Av.Format(Tb);},
Bzg:function(Ac1){var K=this.K;var B;var Adc=Aab;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B9();O++){Cz.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Adc=Adc+(((((((((((((K.Apj.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A2k.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A2k.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.Bdw.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.Bdy.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.Bdx.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.Apj.
call(this,A._GetAutoObject(A.Device.Device).PY))+L3);Amd++;}}Ac1.Ava=Adc;Ac1.AGy=
Amd;Ac1.E5(3);},_Init:function(aArg){var K=this.K;A.acl.Gm._Init.call(K.Ai3={I:this
},0);A.acl.Gm._Init.call(K.AaP={I:this},0);K.__proto__=C.DeviceClass;this.Awx(100
);this.AnC(1);this.ArT(200);this.ArS(100);this.ArZ(276000912345678);this.ArY(276000923456789
);this.ArU(500);this.Ar0(276000901234567);this.N2(1);K.Ai3.HO(1);K.Ai3.Fr(1000);
K.AaP.WI(0);K.AaP.HO(1);K.AaP.Fr(750);K.AaP.B2=50000;this.Gf=A._NewObject(C.VT,0
);K.Ai3.SC=[this,K.BCb];K.Aup=A._GetAutoObject(C.UC);K.AaP.SC=[this,K.BC_];K.AaP.
Q=[this,this.AEO,this.AI0];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai3._Done();K.AaP._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai3._ReInit();K.AaP._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaP)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AHa={A5:0,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=C.AHa;
},_className:"DeviceSimulation::UInt8"};C.AG_={A5:0,_Init:function(aArg){C.Ww._Init.
call(this,aArg);this.__proto__=C.AG_;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4A:0,AFR:function(E){var K=this.K;K.A4A=K.A4A+(E-this.Dv());A.Device.
HelperClass.Ba3.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
BaZ.call(this)+K.A4A;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$I={AxD:true,AGQ:false,ATI:function(E){if(this.AGQ===E)return;this.AGQ=E;A.
abo([this,this.A9l,this.ATI],0);},A9l:function(){return this.AGQ;},ATJ:function(
E){if(this.AxD===E)return;this.AxD=E;A.abo([this,this.A9m,this.ATJ],0);},A9m:function(
){return this.AxD;},_Init:function(aArg){this.__proto__=C.A$I;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UC={_Init:function(){C.A$I._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UC._variants();
},_this:null};C.PopupContext={EN:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ci:function(
AH){var HF=A.Device.Rating.Ba5.call(this,AH);if(HF){var Ry=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LT(0,this.AnimalId);if(Ad
!==-1){var Jp=Ry.OA();if(Jp<=0)A.ab5("%s",AfB);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.E3(Ad,Ry);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){Ry.A$B(Ad,5,this.Temperature);Ry.AkT(Ad,17,this.RatingTemperature);Ry.
Acm(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){Ry.AUL(Ad,18,this.BodyWeight);Ry.Acm(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){Ry.AUL(Ad,23,this.BodyWeight);Ry.Acm(
Ad,24,this.Timestamp);Ry.Ho(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGo(this)){var LQ=A._GetAutoObject(A.Device.Helper).ADc(this);Ry.AkT(Ad,13,LQ);
Ry.Acm(Ad,31,this.Timestamp);}Ry.OC(Jp);}}}return HF;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PZ={Gh:A.abi(512,null,null),Pk:0,AJz:
0,ALf:0,A4D:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKO:0,A36:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Beq:512,AAf:-1,A1A:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af5:false,CF:function(Ad,A4){var Bf=this.TW(Ad);if(!!Bf)return Bf.
CF(A4);return 0;},V2:function(Ad,A4){var Bf=this.TW(Ad);if(!!Bf)return Bf.V2(A4);
return A.jV;},H3:function(Ad,A4){var Bf=this.TW(Ad);if(!!Bf)return Bf.H3(A4);return false;
},V3:function(Ad,A4){var Bf=this.TW(Ad);if(!!Bf)return Bf.V3(A4);return 0;},Sm:function(
Ad,A4){var Bf=this.TW(Ad);if(!!Bf)return Bf.Sm(A4);return 0;},OA:function(){if(this.
Af5)throw new Error(Aac);this.Af5=true;return 12345;},OC:function(AoQ){if(!this.
Af5)throw new Error(Xe);if(AoQ!==12345)throw new Error(Aad);this.Af5=false;return true;
},YH:function(){return this.A48(A._NewObject(C.AGx,0));},ZL:function(Ad,A4,CZ){var
Bf=this.TW(Ad);if(!!Bf)return Bf.ZL(A4,CZ);return false;},Ho:function(Ad,A4,CZ){
var Bf=this.TW(Ad);if(!!Bf)return Bf.Ho(A4,CZ);return false;},ZK:function(Ad,A4,
CZ){var Bf=this.TW(Ad);if(!!Bf)return Bf.ZK(A4,CZ);return false;},N8:function(Ad
,A4,CZ){var Bf=this.TW(Ad);if(!!Bf)return Bf.N8(A4,CZ);return false;},ZJ:function(
Ad,A4,CZ){var Bf=this.TW(Ad);if(!!Bf)return Bf.ZJ(A4,CZ);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bc8();switch(this.Id){case 0:{this.
Beq=256;A.pe([this,this.Bw6],this);}break;case 1:A.pe([this,this.Bw8],this);break;
case 3:A.pe([this,this.Bw5],this);break;case 4:A.pe([this,this.Bw7],this);break;
case 2:break;default:throw new Error(Xf+this.Id.toFixed());}},B9:function(){return this.
Pk;},KP:function(Ad,A4){var Bf=this.TW(Ad);if(!!Bf)return Bf.KP(A4);return 0;},UB:
function(Ad,A4,CZ){var Bf=this.TW(Ad);if(!!Bf)return Bf.UB(A4,CZ);return false;}
,E6:function(){this.Bc8();return true;},HK:function(){return this.Beq;},A48:function(
Ad){if(this.Pk>=512)throw new Error(AhX);this.Gh.Set(this.Pk,Ad);this.Pk=this.Pk+
1;switch(this.Id){case 0:{this.AAf=this.Pk;this.Ho(this.Pk-1,0,this.AAf);}break;
case 1:{this.AAf=this.Pk-1;this.Ho(this.Pk-1,0,this.AAf);}break;default:;}A.pe([
this,this.Ako],this);return this.Pk-1;},TW:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gh.Get(aIndex);},Bc8:function(){var O;for(O=0;O<512;
O=O+1)this.Gh.Set(O,null);this.Pk=0;this.AJz=0;this.AKO=0;this.ALf=0;A.pe([this,
this.Ako],this);},AKj:function(){this.AJz=(this.AJz+1)%15;return this.A1A.Get(this.
AJz);},A2o:function(){this.ALf=(this.ALf+1)%10;return this.A4D.Get(this.ALf);},AJ7:
function(G){if(this.K&&this.K.AJ7)return this.K.AJ7.apply(this,arguments);else return C.
PZ.Bxc.apply(this,arguments);},Bxc:function(G){var B;var Om=true;this.A1(276000312310001
,10,1,A._GetAutoObject(A.Device.Helper).AhR(12),0,1,true,true,false,true,39000,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(12310020,20,12,A._GetAutoObject(A.Device.Helper).AhR(
12),0,0,false,false,true,true,36500,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);this.A1(276000312310021
,10,1,A._GetAutoObject(A.Device.Helper).AhR(9),0,0,true,false,false,true,37200,0
,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312310022,20,2,A._GetAutoObject(A.Device.Helper
).AhR(830),0,1,false,false,false,true,41200,A._GetAutoObject(A.Device.Helper).AhR(
1),1,true,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312310023,20,2,A._GetAutoObject(A.Device.Helper
).AhR(1200),0,1,false,false,false,true,43500,A._GetAutoObject(A.Device.Helper).AhR(
8),2,false,1,false,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device).A2,A._GetAutoObject(
A.Device.Device).AF);this.A1(276000312310026,20,2,A._GetAutoObject(A.Device.Helper
).AhR(8),0,0,true,false,false,true,34000,0,0,false,0,false,0,0,0,0,true,true,A._GetAutoObject(
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);var O;var BgM=0;for(O=
1;O<=7;O=O+1){BgM=3680+(20*O);Om=BgM>3800;this.A1(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhR(7-O),0,1,Om,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);}},Bw6:function(s){this.AJ7(s);},AJ9:
function(G){if(this.K&&this.K.AJ9)return this.K.AJ9.apply(this,arguments);else return C.
PZ.Bxe.apply(this,arguments);},Bxe:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var AiC;var Bdo;for(O=0;O<32;O=O+1){var A1_=this.
BzW();for(;A1_>0;A1_=A1_-1){AiC=this.A2o();Bdo=A._GetAutoObject(A.Device.Converter
).AsI(0,AiC);this.AG(Ac,12310020,AiC,Bdo,this.AKj(),this.AKj(),this.AKj(),this.AKj(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiC=this.A2o();this.AG(Ac,276000312310001,AiC,A._GetAutoObject(A.Device.Converter
).AsI(0,AiC),1,3,3,3,0);AiC=this.A2o();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsI(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiC,A._GetAutoObject(
A.Device.Converter).AsI(1,AiC),2,3,3,3,0);},Bw8:function(s){this.AJ9(s);},A1:function(
J8,BxD,BxU,Bca,Atq,L6,BxL,BxQ,BxN,BxO,MP,Bxo,BxS,BxM,Eo,BxP,Ac0,AI$,AfN,BxZ,BAd,
BAe,Bxt,Bx1){var Cz=A._NewObject(A.Device.Animal,0);Cz.Gr();Cz.Axi(0);Cz.Ae9(0);
Cz.Ur(false);Cz.AkC(false);if(BAe)Cz.PW(J8);if(BAd)Cz.Nj(J8);Cz.SK(A._GetAutoObject(
A.Device.Helper).VY(J8,Bx1&0xFF,Bxt&0xFF)|0);Cz.Ab3(BxD);Cz.AnD(BxU);Cz.Q6(Bca);
Cz.Akw(Atq);Cz.JW(L6);Cz.AnV(BxL);Cz.AGJ(BxQ);Cz.Ae5(BxO);Cz.Ur(BxN);Cz.ArV(BxM);
Cz.AwR(BxS);Cz.AwC(Bxo);Cz.EC(Eo);Cz.Ae6(BxP);Cz.N2(Ac0);Cz.Aky(AI$);Cz.Nl(AfN);
Cz.AnF(BxZ);Cz.Ci(this);if(MP>0)A._GetAutoObject(C.Ask).AG(Bca,J8,0,0,0,0,0,0,MP
);},AG:function(L5,AcY,AoO,Bx_,Bxx,Bxy,Bxh,Bya,Bxj){var B1=A._NewObject(A.Device.
Rating,0);B1.Gr();var BcQ=A._GetAutoObject(C.Amy).AOA(26,AcY);if(BcQ>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amy).CF(BcQ,0));else A.ab5("%s%U",KZ,AcY);B1.OnSetTimestamp(L5
);B1.OnSetTemperature(AoO);B1.OnSetRatingTemperature(Bx_);B1.OnSetFaeces(Bxx);B1.
OnSetFeed(Bxy);B1.OnSetAppearance(Bxh);B1.OnSetRespiratory(Bya);B1.OnSetBodyWeight(
Bxj);B1.Ci(this);},A6F:function(aColumn,A7){var O;for(O=0;O<this.Pk;O=O+1)if(this.
Gh.Get(O).CF(aColumn)===A7)return O;return-1;},BzW:function(){this.AKO=(this.AKO+
1)%10;return this.A36.Get(this.AKO);},AJ6:function(G){if(this.K&&this.K.AJ6)return this.
K.AJ6.apply(this,arguments);else return C.PZ.Bxb.apply(this,arguments);},Bxb:function(
G){this.AlP(10,AcN);this.AlP(20,Lw);this.AlP(30,AhY);this.AlP(31,Aoe);this.AlP(32
,Od);},Bw5:function(s){this.AJ6(s);},AlP:function(J8,BxE){var AJt=A._NewObject(A.
Device.AnimalGroup,0);AJt.Gr();AJt.OnSetId(J8);AJt.AFj(BxE);AJt.Ci(this);},Abr:function(
){return this.AAf;},AOA:function(aColumn,A7){var O;for(O=0;O<this.Pk;O=O+1)if(this.
Gh.Get(O).KP(aColumn)===A7)return O;return-1;},AJ8:function(G){if(this.K&&this.K.
AJ8)return this.K.AJ8.apply(this,arguments);else return C.PZ.Bxd.apply(this,arguments
);},Bxd:function(G){this.Aay(2016,216,6);this.Aay(2017,217,7);this.Aay(2018,218,
8);this.Aay(2019,219,9);this.Aay(2020,220,10);this.Aay(2021,221,11);},Bw7:function(
s){this.AJ8(s);},Aay:function(Ac7,Bxs,Bxr){var U$=A._NewObject(A.Device.CalfDeregistrations
,0);U$.Gr();U$.AkH(Ac7);U$.AwE(Bxs);U$.AwD(Bxr);U$.Ci(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gh=[]).__proto__=C.PZ.Gh;(this.A4D=[
]).__proto__=C.PZ.A4D;(this.A36=[]).__proto__=C.PZ.A36;(this.A1A=[]).__proto__=C.
PZ.A1A;this.__proto__=C.PZ;var J6=this._variants();if(J6){this.K={};J6._Init.call(
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
abi(512,null,null),E_:null,Apg:0,CF:function(Ad,A4){var Bf=this.Aaw(Ad);if(!!Bf)
return Bf.CF(A4);return 0;},V2:function(Ad,A4){var Bf=this.Aaw(Ad);if(!!Bf)return Bf.
V2(A4);return A.jV;},H3:function(Ad,A4){var Bf=this.Aaw(Ad);if(!!Bf)return Bf.H3(
A4);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AF_(A._GetAutoObject(C.Amy));break;case 1:this.AF_(A._GetAutoObject(
C.Ask));break;case 3:this.AF_(A._GetAutoObject(C.AuO));break;case 4:this.AF_(A._GetAutoObject(
C.AuZ));break;case 2:break;default:throw new Error(Xf+this.Id.toFixed());}},B9:function(
){if(!!this.Filter)return this.Apg;else if(!!this.E_)return this.E_.Pk;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1y(this);},V3:function(Ad
,A4){var Bf=this.Aaw(Ad);if(!!Bf)return Bf.V3(A4);return 0;},Sm:function(Ad,A4){
var Bf=this.Aaw(Ad);if(!!Bf)return Bf.Sm(A4);return 0;},OA:function(){if(!!this.
E_)return this.E_.OA();return-1;},OC:function(AoQ){var HF=false;if(!!this.E_)HF=
this.E_.OC(AoQ);if(HF)A.pe([this,this.A1y],this);return HF;},YH:function(){if(!!
this.Filter)throw new Error(Xg+A._GetAutoObject(A.Device.Converter).Bi3(this.Id,
this.Filter));if(!!this.E_)return this.E_.A48(A._NewObject(C.AGx,0));return-1;},
ZL:function(Ad,A4,CZ){if(!this.E_.Af5)throw new Error(Aae);var Bf=this.Aaw(Ad);if(
!!Bf)return Bf.ZL(A4,CZ);return false;},Ho:function(Ad,A4,CZ){if(!this.E_.Af5)throw new
Error(Aae);var Bf=this.Aaw(Ad);if(!!Bf)return Bf.Ho(A4,CZ);return false;},ZK:function(
Ad,A4,CZ){if(!this.E_.Af5)throw new Error(Aae);var Bf=this.Aaw(Ad);if(!!Bf)return Bf.
ZK(A4,CZ);return false;},N8:function(Ad,A4,CZ){if(!this.E_.Af5)throw new Error(Aae
);var Bf=this.Aaw(Ad);if(!!Bf)return Bf.N8(A4,CZ);return false;},ZJ:function(Ad,
A4,CZ){if(!this.E_.Af5)throw new Error(Aae);var Bf=this.Aaw(Ad);if(!!Bf)return Bf.
ZJ(A4,CZ);return false;},LT:function(aColumn,A7){if(!!this.Filter){var O;for(O=0;
O<this.Apg;O=O+1)if(this.AlJ.Get(O).CF(aColumn)===A7)return O;return-1;}else if(
!!this.E_)return this.E_.A6F(aColumn,A7);return-1;},KP:function(Ad,A4){var Bf=this.
Aaw(Ad);if(!!Bf)return Bf.KP(A4);return 0;},UB:function(Ad,A4,CZ){if(!this.E_.Af5
)throw new Error(Aae);var Bf=this.Aaw(Ad);if(!!Bf)return Bf.UB(A4,CZ);return false;
},AgZ:function(aColumn,A7){if(!!this.Filter){var O;for(O=0;O<this.Apg;O=O+1)if(this.
AlJ.Get(O).KP(aColumn)===A7)return O;return-1;}else if(!!this.E_)return this.E_.
AOA(aColumn,A7);return-1;},E6:function(){if(!!this.E_)return this.E_.E6();return false;
},AjL:function(aColumn,A7){if(!!this.E_)return this.E_.A6F(aColumn,A7)>=0;return false;
},Aem:function(aColumn,A7){if(!!this.E_)return this.E_.AOA(aColumn,A7)>=0;return false;
},HK:function(){if(!!this.E_)return this.E_.HK();return 0;},Abr:function(){if(!!
this.E_)return this.E_.Abr();return-1;},QK:function(){if(!!this.E_)return this.E_.
Pk;return 0;},A1y:function(G){this.A1M();if(!!this.Filter&&!!this.E_){var O;for(
O=0;O<this.E_.B9();O=O+1){var A2c=true;var Aw=this.Filter.AON();var Bf=this.E_.TW(
O);if(!!Bf)while(A2c&&!!Aw){A2c=Bf.Bj2(Aw);Aw=this.Filter.AOS(Aw);}else A.ab5("%s"
,((AfC+O.toFixed())+AhZ)+this.E_.B9().toFixed());if(A2c){this.AlJ.Set(this.Apg,this.
E_.Gh.Get(O));this.Apg=this.Apg+1;}}}A.pe([this,this.Ako],this);},A1M:function(){
var O;for(O=0;O<512;O=O+1)this.AlJ.Set(O,null);this.Apg=0;},AF_:function(E){if(this.
E_===E)return;if(!!this.E_)A.z9([this,this.A4B],this.E_,0);this.E_=E;if(!!this.E_
){A.zV([this,this.A4B],this.E_,0);A.pe([this,this.A4B],this);}},A4B:function(G){
A.pe([this,this.A1y],this);},Aaw:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlJ.Get(aIndex);}else if(!!this.E_
)return this.E_.TW(aIndex);A.ab5("%s",AcO+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlJ=[]).__proto__=C.GM.
AlJ;this.__proto__=C.GM;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlJ,D);if((B=this.E_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$J={KI:null,AdJ:null,Oy:null,AMT:false,AMU:
true,A4u:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab8(1);this.AdJ.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab8(2);A._GetAutoObject(A.Device.Device).Ar9(A._GetAutoObject(A.
Device.Device).An.QK());this.KI.Fr(A._GetAutoObject(A.Device.Device).Afr*50);this.
KI.B2=A._GetAutoObject(A.Device.Device).Afr;this.KI.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab8(3);this.AdJ.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab8(4);A._GetAutoObject(A.Device.Device).Ar9(A._GetAutoObject(A.Device.Device
).An.QK());this.KI.Fr(A._GetAutoObject(A.Device.Device).Afr*50);this.KI.B2=A._GetAutoObject(
A.Device.Device).Afr;this.KI.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab8(5);this.AdJ.Ar(true);}break;case 5:A.pe([this,this.BgE],this);break;case 7:
case 6:break;default:A.ab5("%s%e",UZ,A._GetAutoObject(A.Device.Device).SyncState
);}},BBx:function(G){this.AdJ.Ar(false);A.pe([this,this.A4u],this);},BCA:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab8(0);A.pe([this,this.A4u],this);}break;default:;}},BgE:function(
G){this.AdJ.Ar(false);this.KI.Ar(false);A._GetAutoObject(A.Device.Device).Ab8(0);
},AEZ:function(E){if(this.AMU===E)return;this.AMU=E;A.abo([this,this.Bk2,this.AEZ
],0);},Bk2:function(){return this.AMU;},Aqn:function(G){var B;this.Oy.Cx=true;this.
Oy.B2=false;this.Oy.Fr(100);this.Oy.HO(1);this.Oy.Q=[this,this.ASz,this.AS8];A.pe([
B=this.Oy,B.AnX],this);},BhI:function(G){var B;this.Oy.Cx=true;this.Oy.B2=false;
this.Oy.Fr(400);this.Oy.Uq(200);this.Oy.HO(3);this.Oy.Q=[this,this.ASz,this.AS8];
this.AEZ(false);A.pe([B=this.Oy,B.AnX],this);},AS8:function(E){if(this.AMT===E)return;
this.AMT=E;A.abo([this,this.ASz,this.AS8],0);},ASz:function(){return this.AMT;},
Aqo:function(G){var B;this.Oy.AnZ(this);this.AEZ(false);},_Init:function(aArg){A.
acl.Gm._Init.call(this.KI={I:this},0);A.Core.Timer._Init.call(this.AdJ={I:this},
0);A.acl.TJ._Init.call(this.Oy={I:this},0);this.__proto__=C.A$J;var B;this.KI.HO(
1);this.AdJ.PV(2000);this.KI.SC=[this,this.A4u];this.KI.Q=[B=A._GetAutoObject(A.
Device.Device),B.ASY,B.A0A];this.AdJ.MC=[this,this.BBx];A.h7++;},_Done:function(
){this.__proto__=null;this.KI._Done();this.AdJ._Done();this.Oy._Done();A.h7--;},
_ReInit:function(){this.KI._ReInit();this.AdJ._ReInit();this.Oy._ReInit();},_Mark:
function(D){var B;if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acp={_Init:function(){C.A$J._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AG$={A5:0,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=C.AG$;}
,_className:"DeviceSimulation::UInt64"};C.AuZ={_Init:function(){C.PZ._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Du:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.Ca.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X2={Ad8:null,CC:function(G){var K=this.K;A.ab5("%s",Aof);K.Ad8.Ar(true);},E4:
function(G){var K=this.K;if(K.Ad8.Bw===true){K.Ad8.Ar(false);A.ab5("%s",Aog);}},
BkT:function(G){var K=this.K;K.Ad8.Ar(false);A._GetAutoObject(A.kR.A8).Ab9(A._GetAutoObject(
A.Device.Device).AxK);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad8={I:this},0);K.__proto__=C.X2;this.AeO.H(Aoh);K.Ad8.PV(1500);this.UD.R(Aoi);
this.UD.Z(true);this.AeO.Ax(A.aaL(A.ach.ARJ));K.Ad8.MC=[this,K.BkT];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad8._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad8._ReInit();},_Mark:function(D){var B;if((B=this.Ad8)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VT={Ava:A.jV,E6:function(){A.Device.VT.E6.call(this);this.Ava=A.jV;},_Init:function(
aArg){A.Device.VT._Init.call(this,aArg);this.__proto__=C.VT;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.ADX.__proto__=C.Ww;C.String.__proto__=C.Ww;C.AB3.__proto__=C.
Ww;C.AHa.__proto__=C.Ww;C.AG_.__proto__=C.Ww;C.PZ.__proto__=A.Device.ITable;C.GM.
__proto__=A.Device.ITable;C.AG$.__proto__=C.Ww;C.VT.__proto__=A.Device.VT;};C._ReInit=
function(){var B;if((B=C.UC._this))B._ReInit(),C.UC._ReInit.call(B);if((B=C.Amy.
_this))B._ReInit(),C.Amy._ReInit.call(B);if((B=C.AuO._this))B._ReInit(),C.AuO._ReInit.
call(B);if((B=C.Ask._this))B._ReInit(),C.Ask._ReInit.call(B);if((B=C.Acp._this))
B._ReInit(),C.Acp._ReInit.call(B);if((B=C.AuZ._this))B._ReInit(),C.AuZ._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.UC._this)&&(B._cycle!=D))B._Done(C.UC._this=
null);if((B=C.Amy._this)&&(B._cycle!=D))B._Done(C.Amy._this=null);if((B=C.AuO._this
)&&(B._cycle!=D))B._Done(C.AuO._this=null);if((B=C.Ask._this)&&(B._cycle!=D))B._Done(
C.Ask._this=null);if((B=C.Acp._this)&&(B._cycle!=D))B._Done(C.Acp._this=null);if((
B=C.AuZ._this)&&(B._cycle!=D))B._Done(C.AuZ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */