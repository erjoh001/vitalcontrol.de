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
Is="Operator not handled:";var O6="1,8";var P_="INFO: Device.StartScan() called.";
var P$="INFO: Device.StopScan() called.";var CQ="V0.";var Ff=".";var L5="\n";var
Qa="Temp: ";var J6="Battery: ";var Od="%%";var Qb="Selected animal with row index";
var ML="1,256,2,2048,4096,8192,4,8,16,128,64,32,1024,262144,16384,131072,512";var
S$="1,2";var UW="0,1,2";var Z5="3900,3950,4000";var W8="4050,4100,4150";var It="Read only";
var UX="Unknown data export type: ";var Z6="Unhandled Device::DataExportType: ";
var W9="0,2,1";var Z7="650,150,700";var W_="800,200,900";var Z8="800,200,850";var
Z9="40000,4000,0";var UY="32,7,34,18,23,14";var W$="16384";var O7="1,1024";var Z_=
"Simulate Scan";var Oe="BNR15;LOM;GEB_DATR;RASSE;GESCHL_R;GEB_VERL;VERBLEIB;MEHRLADR;LOM_MUT\n";
var Rn="%d.%m.%Y";var Xa="1";var Xb="2";var Ta="Unknown gender: ";var Z$="text/csv";
var Aaa="National-ID-Animal;Farm-ID-Animal;Transponder-ID;DateOfBirth;Sex;BirthWeight-Kg\n";
var Xc="hit-geburt-%d-%m-%Y_%H-%M.csv";var Xd="animals-%d-%m-%Y_%H-%M.csv";var Tb=
"zugang-%d-%m-%Y_%H-%M.csv";var Tc="M";var Td="F";var Aab="?";var Te="%Y-%m-%d";
var Aac="LOM;ZUGA_DAT;Geburtsdatum;Geschlecht;Nutzung;Rasse;BNR15\n";var AfB="ERROR: Cannot start transaction";
var Aad="Nested transactions are not allowed.";var Xe="Transaction not opened.";
var Aae="Wrong transaction ID.";var Xf="Unhandled TableId:";var AhX="Maximum number of rows reached.";
var K1="Animal row not found in DeviceSimulation::AnimalTableData. NaisId";var AcN=
"10";var Ly="20";var AhY="30";var Aoe="31";var Of="32";var Xg="Severe: filter set when inserting row into table: ";
var Aaf="Warning: DeviceSimulation::TableData not in transaction";var AfC="ERROR: Row not found with index [";
var AhZ="] while Rows Count = ";var AcO="ERROR: trying to access an inexistent row with Index=";
var UZ="Invalid Device::SyncState";var Aof="Forwarding to home screen after 500 milliseconds ...";
var Aog="Forwarding to home screen canceled...";var Aoh=[0,58,240,208];var Aoi="VitalControl\nstarting up \u2026";
C.Table={GM:null,Init:function(aArg){var K=this.K;A.zV([this,this.Ako],K.GM,0);},
CF:function(Ad,A4){var K=this.K;return K.GM.CF(Ad,A4);},V2:function(Ad,A4){var K=
this.K;return K.GM.V2(Ad,A4);},H3:function(Ad,A4){var K=this.K;return K.GM.H3(Ad
,A4);},OnSetId:function(E){var K=this.K;if(this.Id===E)return;this.Id=E;K.GM.OnSetId(
E);},B_:function(){var K=this.K;return K.GM.B_();},Bk:function(E){var K=this.K;A.
Device.ITable.Bk.call(this,E);K.GM.Bk(E);},V3:function(Ad,A4){var K=this.K;return K.
GM.V3(Ad,A4);},Sm:function(Ad,A4){var K=this.K;return K.GM.Sm(Ad,A4);},OC:function(
){var K=this.K;return K.GM.OC();},OE:function(AoS){var K=this.K;return K.GM.OE(AoS
);},YH:function(){var K=this.K;return K.GM.YH();},ZL:function(Ad,A4,C0){var K=this.
K;return K.GM.ZL(Ad,A4,C0);},Ho:function(Ad,A4,C0){var K=this.K;return K.GM.Ho(Ad
,A4,C0);},ZK:function(Ad,A4,C0){var K=this.K;return K.GM.ZK(Ad,A4,C0);},N9:function(
Ad,A4,C0){var K=this.K;return K.GM.N9(Ad,A4,C0);},ZJ:function(Ad,A4,C0){var K=this.
K;return K.GM.ZJ(Ad,A4,C0);},LV:function(aColumn,A7){var K=this.K;return K.GM.LV(
aColumn,A7);},KR:function(Ad,A4){var K=this.K;return K.GM.KR(Ad,A4);},UE:function(
Ad,A4,C0){var K=this.K;return K.GM.UE(Ad,A4,C0);},AgZ:function(aColumn,A7){var K=
this.K;return K.GM.AgZ(aColumn,A7);},E6:function(){var K=this.K;return K.GM.E6();
},AjL:function(aColumn,A7){var K=this.K;return K.GM.AjL(aColumn,A7);},Aem:function(
aColumn,A7){var K=this.K;return K.GM.Aem(aColumn,A7);},HK:function(){var K=this.
K;return K.GM.HK();},Abs:function(){var K=this.K;return K.GM.Abs();},QK:function(
){var K=this.K;return K.GM.QK();},_Init:function(aArg){var K=this.K;C.GM._Init.call(
K.GM={I:this},0);K.__proto__=C.Table;K.Init.call(this,aArg);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;K.GM._Done();A.h7--;},_ReInit:function(){var K=this.
K;K.GM._ReInit();},_Mark:function(D){var B;if((B=this.GM)._cycle!=D)B._Mark(B._cycle=
D);},_variants:function(){return this;},_className:"DeviceSimulation::Table"};C.
AGA={Tl:A.abi(42,null,null),CF:function(aColumn){var B;this.Aap(aColumn);var Aq=(
C.AD0.isPrototypeOf(B=this.Tl.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;
},V2:function(aColumn){var B;this.Aap(aColumn);var Aq=(C.String.isPrototypeOf(B=
this.Tl.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return A.jV;},H3:function(aColumn
){var B;this.Aap(aColumn);var Aq=(C.AB6.isPrototypeOf(B=this.Tl.Get(aColumn))?B:
null);if(!!Aq)return Aq.A5;else A.ab5("%s",(Ce+aColumn.toFixed())+BD);return false;
},Ho:function(aColumn,A7){this.Aap(aColumn);var Aq=A._NewObject(C.AD0,0);Aq.A5=A7;
this.Tl.Set(aColumn,Aq);return true;},ZJ:function(aColumn,A7){this.Aap(aColumn);
var Aq=A._NewObject(C.String,0);Aq.A5=A7;this.Tl.Set(aColumn,Aq);return true;},N9:
function(aColumn,A7){this.Aap(aColumn);var Aq=A._NewObject(C.AB6,0);Aq.A5=A7;this.
Tl.Set(aColumn,Aq);return true;},Aap:function(aColumn){if((aColumn<0)||(aColumn>=
42))throw new Error((E7+aColumn.toFixed())+Hr);},Bj7:function(AI){if(!!(A.Device.
Int32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.AJQ(this.CF(AI.EJ),AI.
Operator,(A.Device.Int32FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!
!(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null))return this.By4(this.
Sm(AI.EJ),AI.Operator,(A.Device.UInt32FilterCriterion.isPrototypeOf(AI)?AI:null).
A5);else if(!!(A.Device.StringFilterCriterion.isPrototypeOf(AI)?AI:null))return this.
By3(this.V2(AI.EJ),AI.Operator,(A.Device.StringFilterCriterion.isPrototypeOf(AI)?
AI:null).A5);else if(!!(A.Device.BoolFilterCriterion.isPrototypeOf(AI)?AI:null))
return this.By2(this.H3(AI.EJ),AI.Operator,(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null).A5);else if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AI)?
AI:null))return this.AJQ(this.CF(AI.EJ),AI.Operator,(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.GenderFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJQ(this.CF(AI.EJ),AI.Operator,(A.Device.GenderFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.AssessmentFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.By7(this.V3(AI.EJ),AI.Operator,(((B=(A.Device.AssessmentFilterCriterion.
isPrototypeOf(AI)?AI:null).A5)<0)?B+0x100000000:B)&0xFF);else if(!!(A.Device.UInt64FilterCriterion.
isPrototypeOf(AI)?AI:null))return this.By5(this.KR(AI.EJ),AI.Operator,(A.Device.
UInt64FilterCriterion.isPrototypeOf(AI)?AI:null).A5);else if(!!(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null))return this.By6(this.KR(AI.EJ),AI.Operator,(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(AI)?AI:null).A5,(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(AI)?AI:null).Zm&0xFF,(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
AI)?AI:null).OG&0xFF);else if(!!(A.Device.WhereAboutsFilterCriterion.isPrototypeOf(
AI)?AI:null))return this.AJQ(this.CF(AI.EJ),AI.Operator,(A.Device.WhereAboutsFilterCriterion.
isPrototypeOf(AI)?AI:null).A5);else throw new Error(IV);},AJQ:function(Fu,Eb,GB){
switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:
return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new
Error(Is+Eb.toFixed());}},By3:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;
case 2:return Fu>GB;case 3:return Fu<GB;case 4:{A.ab5("%s%e%s%i",Fu,Eb,GB,Fu.indexOf(
GB,0));return Fu.indexOf(GB,0)>=0;}case 5:return Fu!==GB;default:throw new Error(
Is+Eb.toFixed());}},By2:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case
2:case 3:case 4:return false;case 5:return Fu!==GB;default:throw new Error(Is+Eb.
toFixed());}},V3:function(aColumn){var B;this.Aap(aColumn);var Aq=(C.AHd.isPrototypeOf(
B=this.Tl.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;return 0;},ZL:function(aColumn
,A7){this.Aap(aColumn);var Aq=A._NewObject(C.AHd,0);Aq.A5=A7;this.Tl.Set(aColumn
,Aq);return true;},By7:function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:
return Fu>GB;case 3:return Fu<GB;case 4:return Fu.toFixed().indexOf(GB.toFixed()
,0)>=0;case 5:return Fu!==GB;default:throw new Error(Is+Eb.toFixed());}},Sm:function(
aColumn){var B;this.Aap(aColumn);var Aq=(C.AHb.isPrototypeOf(B=this.Tl.Get(aColumn
))?B:null);if(!!Aq)return Aq.A5;return 0;},ZK:function(aColumn,A7){this.Aap(aColumn
);var Aq=A._NewObject(C.AHb,0);Aq.A5=A7;this.Tl.Set(aColumn,Aq);return true;},By4:
function(Fu,Eb,GB){switch(Eb){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<
GB;case 4:return Fu.toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:
throw new Error(Is+Eb.toFixed());}},KR:function(aColumn){var B;this.Aap(aColumn);
var Aq=(C.AHc.isPrototypeOf(B=this.Tl.Get(aColumn))?B:null);if(!!Aq)return Aq.A5;
return 0;},UE:function(aColumn,A7){this.Aap(aColumn);var Aq=A._NewObject(C.AHc,0
);Aq.A5=A7;this.Tl.Set(aColumn,Aq);return true;},By5:function(Fu,Eb,GB){switch(Eb
){case 0:return Fu===GB;case 2:return Fu>GB;case 3:return Fu<GB;case 4:return Fu.
toFixed().indexOf(GB.toFixed(),0)>=0;case 5:return Fu!==GB;default:throw new Error(
Is+Eb.toFixed());}},By6:function(Fu,Eb,GB,Atz,AJb){var AK6=Fu.toFixed();AK6=A.ab2(
A.abV(AK6,AK6.length-Atz),AJb);Fu=Math.trunc(Fu/A._GetAutoObject(A.Device.Helper
).ApT(Atz))%A._GetAutoObject(A.Device.Helper).ApT(AJb);var ALy=A.ab0(GB,0,10);switch(
Eb){case 0:return Fu===ALy;case 2:return Fu>ALy;case 3:return Fu<ALy;case 4:return AK6.
indexOf(GB,0)>=0;case 5:return Fu!==ALy;default:throw new Error(Is+Eb.toFixed());
}},_Init:function(aArg){(this.Tl=[]).__proto__=C.AGA.Tl;this.__proto__=C.AGA;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;A.aa6(this.Tl,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceSimulation::RowData"};C.Ww={_Init:function(
aArg){this.__proto__=C.Ww;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceSimulation::NativeType"
};C.AD0={A5:0,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=C.AD0;
},_className:"DeviceSimulation::Int32"};C.String={A5:A.jV,_Init:function(aArg){C.
Ww._Init.call(this,aArg);this.__proto__=C.String;},_className:"DeviceSimulation::String"
};C.AB6={A5:false,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=
C.AB6;},_className:"DeviceSimulation::Bool"};C.DeviceClass={Aur:null,Ai3:null,AaQ:
null,CP:function(){var K=this.K;K.A$J.call(this,this);},Init:function(aArg){var K=
this.K;var B;this.Zp(3);A.zX([this,K.BgF],[B=K.Aur,B.A9s,B.ATL],0);this.UpdateAutoActions(
O6);K.A$J.call(this,this);this.Asu(this);this.Asv(this);this.ResetActiveActions(
this);this.ResetAutoActions(this);this.Ass(this);this.ResetNoNaisIdListActions(this
);this.ResetNoTransponderListActions(this);this.ResetYoungNoTransponderListActions(
this);var languageMin=0;var languageMax=25;var languageValue=-1;{if(typeof ewLanguage===
'number'&&Number.isInteger(ewLanguage)&&ewLanguage>=languageMin&&ewLanguage<languageMax
){languageValue=ewLanguage;}}if(languageValue>=0)this.AnC(languageValue);A.pe([this
,K.AUa],this);},Zp:function(E){this.UpdateActiveScreen(E);},Awz:function(E){this.
UpdateBatteryChargeState(E);},AE$:function(E){this.UpdateChargeActive(E);},Ar5:function(
E){this.UpdateScanState(E);},AwY:function(E){this.UpdateMeasureState(E);},Axa:function(
E){this.UpdateTempValue(E);},AnC:function(E){this.UpdateLanguage(E);},Axb:function(
E){this.UpdateTemperatureUnit(E);},AE9:function(E){this.UpdateBrightness(E);},AFF:
function(E){this.UpdateMonitoring(E);},AxL:function(){var B;if(A._GetAutoObject(
C.UF).AxF){this.UpdateMeasureState(1);A._GetAutoObject(A.Device.Helper).ALa(this
);}},AhP:function(){var B;A._GetAutoObject(A.Device.Helper).SU.AnZ(this);this.UpdateMeasureState(
0);},AhM:function(){var K=this.K;A.ab5("%s",P_);this.UpdateScanState(1);A.pe([this
,K.BgF],this);},An0:function(){var K=this.K;var B;A.ab5("%s",P$);K.Ai3.AnZ(this);
this.UpdateScanState(0);},SetSystemTime:function(Ah$){},AxE:function(){A.Device.
DeviceClass.Ba$.call(this);this.Zp(1);},AGx:function(){A.Device.DeviceClass.Ba9.
call(this);this.Zp(2);},Dw:function(E){this.UpdateOverlayMenu(E);},Axh:function(
E){this.UpdateUnderTemp(E);},Ab9:function(E){this.UpdateSyncState(E);},ADb:function(
){var aString;aString=((((((((((CQ+A.abz(0,9).toFixed())+Ff)+A.abz(0,9).toFixed(
))+L5)+Qa)+A.abz(30,90).toFixed())+A.aaR(A.acf.AG2))+L5)+J6)+A.abz(1,100).toFixed(
))+Od;return aString;},PopupStateChanged:function(J9,Ae){var Agp=A._NewObject(C.
PopupContext,0);Agp.Id=J9;Agp.EN=Ae;this.AnO.Trigger(Agp,false);},AF7:function(E
){this.UpdateVibrationOnKeypressEnabled(E);},Afa:function(E){this.UpdateVibrationOn(
E);},Aw8:function(E){this.UpdateRatingMode(E);},Ae2:function(E){this.UpdateFlashLightOn(
E);},Uw:function(E){this.UpdateTopLightOn(E);},WH:function(E){this.UpdateRGBTopLight(
E);},Awy:function(E){this.UpdateAutoRegistrationMode(E);},Ar6:function(E){this.UpdateScanTransponder(
E.Id,E.TransponderType,E.TransponderProtocol);},OQ:function(E){this.UpdateDigitsID(
E);},PU:function(E){this.UpdateOffsetID(E);},AF$:function(E){this.UpdateWeightValue(
E);},AwV:function(E){this.UpdateMassUnit(E);},ArF:function(E){A.Device.DeviceClass.
Ba5.call(this,E);this.UpdateActiveActions(E);},ArG:function(E){A.Device.DeviceClass.
Ba6.call(this,E);this.UpdateActiveActionsOrder(E);},Akv:function(E){A.Device.DeviceClass.
Ba7.call(this,E);this.UpdateAutoActions(E);},AGY:function(){var K=this.K;this.UpdateMeasureState(
1);K.BCr.call(this,this);},AsJ:function(){var K=this.K;var B;K.AaQ.AnZ(this);this.
UpdateMeasureState(0);},EC:function(E){this.UpdateAnimalType(E);},Axi:function(E
){this.UpdateWeightRecordingMode(E);},AFK:function(E){this.UpdatePredictedTempValue(
E);},SR:function(L$){A.ab5("%s%i",Qb,L$);},AFe:function(E){this.UpdateDemoMode(E
);},AEX:function(E){this.UpdateAgeRegistration(E);},Axj:function(E){this.UpdateWeightRecordingScope(
E);},JX:function(E){this.UpdateGender(E);},ArV:function(E){this.UpdateIDLastUsedMale(
E);},ArU:function(E){this.UpdateIDLastUsedFemale(E);},Zq:function(E){this.UpdateAnimalListContent(
E);},AEZ:function(E){this.UpdateAlarmListAction(E);},AFh:function(E){this.UpdateFlashLightInMeasureState(
E);},AeX:function(E){this.UpdateAnimalInfoContent(E);},AF_:function(E){this.UpdateWatchListAction(
E);},AFj:function(E){this.UpdateFreshCowListAction(E);},ResetActiveActions:function(
G){this.ArF(15359);this.ArG(ML);},ResetAutoActions:function(G){this.Akv(S$);},Aww:
function(E){this.UpdateAnimalTypesString(E);},Ar9:function(E){this.UpdateTemperaturesHighString(
E);},Ar_:function(E){this.UpdateTemperaturesLowString(E);},Asu:function(G){this.
Aww(UW);this.Ar_(Z5);this.Ar9(W8);this.Axh(3600);},AwP:function(E){this.UpdateFreshCowsHideMeasured(
E);},Ar1:function(E){this.UpdateNaisIdLastUsedMale(E);},Ar0:function(E){this.UpdateNaisIdLastUsedFemale(
E);},Aw2:function(E){this.UpdateNaisIdIncrementMale(E);},Aw1:function(E){this.UpdateNaisIdIncrementFemale(
E);},UpdateFirmware:function(){A.Device.DeviceClass.Bba.call(this);A._GetAutoObject(
A.kR.A8).Cd(53);},Anx:function(E){this.UpdateBootloaderMessage(E);},AEU:function(
E){this.UpdateActionListAction(E);},Awu:function(E){this.UpdateActionListHideMeasured(
E);},Uq:function(E){this.UpdateAnimalIdGenerationMethod(E);},AwH:function(E){this.
UpdateDirectionOfCountingFemale(E);},AwI:function(E){this.UpdateDirectionOfCountingMale(
E);},AwJ:function(E){this.UpdateDirectionOfCountingUnisex(E);},ArW:function(E){this.
UpdateIDLastUsedUnisex(E);},Ar2:function(E){this.UpdateNaisIdLastUsedUnisex(E);}
,Aw3:function(E){this.UpdateNaisIdIncrementUnisex(E);},Akx:function(E){this.UpdateEartagNrAssignmentMode(
E);},N3:function(E){this.UpdateBreed(E);},AFD:function(E){throw new Error(It);},
AFx:function(E){throw new Error(It);},AF4:function(E){throw new Error(It);},AE5:
function(E){throw new Error(It);},AFf:function(E){this.UpdateDryCowListAction(E);
},AJN:function(A08){var Qz;switch(A08){case 15:Qz=false;break;default:Qz=true;}return Qz;
},AE3:function(E){this.UpdateBirthListView(E);},AF5:function(E){this.UpdateTransferProgress(
E);},Ar$:function(E){this.UpdateTransferTarget(E);},AsI:function(){var B;A.pe([B=
A._GetAutoObject(C.Acq),B.BgJ],this);},Aw7:function(E){this.UpdatePremisesID(E);
},Aw0:function(E){this.UpdateMotherSelectionDriedOffFilter(E);},AFk:function(E){
this.UpdateFreshCowSpan(E);},AF6:function(E){this.UpdateUSBDevice(E.Z1,E.AsS,E.Asl
);},AxK:function(){var K=this.K;var B;this.Gf.FileName=K.Bjr.call(this,this.Gf.AgN
);switch(this.Gf.AgN){case 0:K.Bze.call(this,(C.VT.isPrototypeOf(B=this.Gf)?B:null
));break;case 1:K.Bzb.call(this,(C.VT.isPrototypeOf(B=this.Gf)?B:null));break;case
2:K.Bzg.call(this,(C.VT.isPrototypeOf(B=this.Gf)?B:null));break;default:throw new
Error(UX+this.Gf.AgN.toFixed());}},Ari:function(){return true;},AqE:function(){var
K=this.K;switch(this.Gf.AgN){case 0:A._GetAutoObject(A.Device.Device).A3(72,true
,A.jV,0,[this,K.A3x]);break;case 1:A._GetAutoObject(A.Device.Device).A3(90,true,
A.jV,0,[this,K.A3x]);break;case 2:A._GetAutoObject(A.Device.Device).A3(99,true,A.
jV,0,[this,K.A3x]);break;default:throw new Error(Z6+this.Gf.AgN.toFixed());}},AFR:
function(E){throw new Error(It);},Awv:function(E){this.UpdateAnimalIdAutoGenerationMethod(
E);},AFT:function(E){this.UpdateShutdownTimer(E);},Asv:function(G){this.Awx(W9);
this.Asd(Z7);this.Asc(W_);this.Asb(Z8);this.Ase(Z9);},Asc:function(E){this.UpdateWeightGainsHighString(
E);},Asd:function(E){this.UpdateWeightGainsLowString(E);},Awx:function(E){this.UpdateAnimalTypesWeightGainsString(
E);},Asb:function(E){this.UpdateWeightGainsAverageString(E);},Ase:function(E){this.
UpdateWeightValueBirthString(E);},AwK:function(E){this.UpdateEvaluationAnimalType(
E);},Aw$:function(E){this.UpdateStartScreen(E);},AD4:function(){return 1;},AD5:function(
){return 1;},AFC:function(E){this.UpdateMaximumAgeNewOnFarm(E);},Axf:function(E){
this.UpdateTransponderAssignmentIdChangeMethod(E);},Nm:function(E){this.UpdateWhereAbouts(
E);},ArI:function(E){this.UpdateActiveMassRecordingFields(E);},ArJ:function(E){this.
UpdateActiveMassRecordingFieldsOrder(E);},Ass:function(G){this.ArI(A.jV);this.ArJ(
UY);},AFA:function(E){this.UpdateMassRecordingDateOfBirthMandatory(E);},AjC:function(
){A._GetAutoObject(C.Acq).AE2(true);return true;},Aqq:function(){var B;A._GetAutoObject(
C.Acq).Aqq(this);return true;},Aqp:function(){var B;A.pe([B=A._GetAutoObject(C.Acq
),B.Aqp],this);return true;},AuY:function(){var B;A.pe([B=A._GetAutoObject(C.Acq
),B.BhN],this);return true;},AwX:function(E){this.UpdateMaxWeightValuePrecision(
E);},Aw4:function(E){this.UpdateNoNaisIdListActions(E);},ResetNoNaisIdListActions:
function(G){this.Aw4(W$);},Aw5:function(E){this.UpdateNoTransponderListActions(E
);},ResetNoTransponderListActions:function(G){this.Aw5(O7);},Axl:function(E){this.
UpdateYoungNoTransponderListActions(E);},ResetYoungNoTransponderListActions:function(
G){this.Axl(O7);},Axg:function(E){this.UpdateTransponderUnlinkIdChangeMethod(E);
},Asr:function(AoG,AJj){this.Gf.E6();this.Gf.AgN=AoG;this.Gf.AU4=AJj;this.Gf.E5(
1);this.Gf.E5(2);this.AxK();},AE4:function(E){this.UpdateBirthRegistrationsListResetOnExport(
E);},AFL:function(E){this.UpdatePurchasedListResetOnExport(E);},BCb:function(G){
switch(this.Ij){case 34:case 35:case 32:case 45:case 49:case 55:case 80:{this.UpdateScanTransponder(
12310020,1,0);this.UpdateScanState(2);}break;case 15:break;default:this.UpdateScanState(
4);}},BgF:function(G){var K=this.K;var B;if((this.ScanState===1)&&K.Aur.AGT)K.Ai3.
AnX(this);A.ab5("%s",Z_);},BCr:function(G){var K=this.K;var B;if((this.MeasureState===
1)&&K.Aur.AxF)K.AaQ.AnX(this);},BC_:function(G){this.UpdateMeasureState(3);},AUa:
function(G){var K=this.K;var B;A.zX([B=A._GetAutoObject(A.Device.Helper),B.ALa],[
B=K.Aur,B.A9t,B.ATM],0);this.R3.AFd(A._GetAutoObject(A.Device.Helper).A6$(8));this.
SB.AFd(A._GetAutoObject(A.Device.Helper).A6$(8));},A$J:function(G){var AzR=A._NewObject(
A.Device.AxJ,0);AzR.OnSetTimestamp(1714662121);AzR.AFy(1);AzR.AFE(0);AzR.AFO(0);
this.SB=AzR;var Azm=A._NewObject(A.Device.AxJ,0);Azm.OnSetTimestamp(1714662121);
Azm.AFy(1);Azm.AFE(0);Azm.AFO(6);this.R3=Azm;var AlV=A._NewObject(A.Device.AvB,0
);AlV.AFv(1);AlV.AFw(0);AlV.AFu(0);AlV.AF2(1);AlV.AF3(0);AlV.AF1(0);AlV.OnSetTimestamp(
1714662121);this.Q1=AlV;var Amm=A._NewObject(A.Device.AvB,0);Amm.AFv(1);Amm.AFw(
0);Amm.AFu(0);Amm.AF2(1);Amm.AF3(0);Amm.AF1(0);Amm.OnSetTimestamp(1714662121);this.
S0=Amm;this.AhL=A.aaR(A.acf.Unknown);},BzA:function(aFilename,aMimeType,aContent
){{var bb=new Blob([aContent],{type:aMimeType});var a=document.createElement('a'
);a.download=aFilename;a.href=window.URL.createObjectURL(bb);a.click();}},Bze:function(
Ac1){var K=this.K;var B;var Adc=Oe;var Cz=A._NewObject(A.Device.Animal,0);var O;
var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B_();O++){Cz.E3(O,A._GetAutoObject(
A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.NaisId>0)){Adc=Adc+(((((((((((((((((
K.Apl.call(this,A._GetAutoObject(A.Device.Device).PY)+String.fromCharCode(0x3B))+
K.Apl.call(this,Cz.NaisId))+String.fromCharCode(0x3B))+K.A2r.call(this,Cz.DateOfBirth
))+String.fromCharCode(0x3B))+K.BdC.call(this,Cz.Breed))+String.fromCharCode(0x3B
))+K.BdB.call(this,Cz.Gender))+String.fromCharCode(0x3B))+K.BzF.call(this,Cz.EaseOfDelivery
))+String.fromCharCode(0x3B))+K.BdD.call(this,Cz.WhereAbouts))+String.fromCharCode(
0x3B))+K.BzI.call(this,Cz.BirthType))+String.fromCharCode(0x3B))+K.Apl.call(this
,Cz.NaisIdMother))+L5);Amd++;}}Ac1.Avc=Adc;Ac1.AGB=Amd;Ac1.E5(3);},Apl:function(
Rq){if(!Rq)return A.jV;return Rq.toFixed();},A2r:function(Ay2){var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(Ay2);return Av.Format(Rn);},BdC:function(Ac0){if(!Ac0
)return A.jV;return A._GetAutoObject(A.Device.Converter).A5P(Ac0).toFixed();},BdB:
function(L8){var result=A.jV;switch(L8){case 0:result=Xa;break;case 1:result=Xb;
break;case 2:result=A.jV;break;default:A.ab5("%s",Ta+L8.toFixed());}return result;
},BzF:function(AJc){if(!AJc)return A.jV;return AJc.toFixed();},BdD:function(AfN){
if(!AfN)return A.jV;return AfN.toFixed();},BzI:function(Ats){return(Ats+1).toFixed(
);},A3x:function(G){var K=this.K;var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!As)return;if(As.PopupState===7){K.BzA.call(this,this.Gf.FileName,
Z$,(C.VT.isPrototypeOf(B=this.Gf)?B:null).Avc);this.Gf.E6();}else if(As.PopupState===
8)this.Gf.E6();},Bzb:function(Ac1){var K=this.K;var B;var Adc=Aaa;var Cz=A._NewObject(
A.Device.Animal,0);var O;var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.
B_();O++){var Azi=A.jV;if(Cz.Arh())Azi=K.BzK.call(this,Cz.FirstBodyWeight);Cz.E3(
O,A._GetAutoObject(A.Device.Device).An);Adc=Adc+(((((((((((K.Apl.call(this,Cz.NaisId
)+String.fromCharCode(0x3B))+K.BzG.call(this,Cz.VisualId))+String.fromCharCode(0x3B
))+K.Apl.call(this,Cz.TransponderId))+String.fromCharCode(0x3B))+K.BzE.call(this
,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BzJ.call(this,Cz.Gender))+String.
fromCharCode(0x3B))+Azi)+L5);Amd++;}Ac1.Avc=Adc;Ac1.AGB=Amd;Ac1.E5(3);},Bjr:function(
AoG){var AJ8=A.jV;var Ac=A._NewObject(A.Core.Bs,0);Ac.Initialize(A._GetAutoObject(
A.Device.Helper).Dv());switch(AoG){case 0:AJ8=Ac.Format(Xc);break;case 1:AJ8=Ac.
Format(Xd);break;case 2:AJ8=Ac.Format(Tb);break;default:throw new Error(UX+AoG.toFixed(
));}return AJ8;},BzG:function(Rq){return Rq.toFixed();},BzJ:function(L8){var result=
A.jV;switch(L8){case 0:result=Tc;break;case 1:result=Td;break;case 2:result=Aab;
break;default:A.ab5("%s",Ta+L8.toFixed());}return result;},BzK:function(MQ){if(MQ<=
0)return A.jV;return A._GetAutoObject(A.Device.Converter).Ak$(MQ);},BzE:function(
Ay2){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(Ay2);return Av.Format(Te);},
Bzg:function(Ac1){var K=this.K;var B;var Adc=Aac;var Cz=A._NewObject(A.Device.Animal
,0);var O;var Amd=0;for(O=0;O<A._GetAutoObject(A.Device.Device).An.B_();O++){Cz.
E3(O,A._GetAutoObject(A.Device.Device).An);if(Cz.IsRegistrationNoticePending&&(Cz.
NaisId>0)){Adc=Adc+(((((((((((((K.Apl.call(this,Cz.NaisId)+String.fromCharCode(0x3B
))+K.A2r.call(this,A._GetAutoObject(A.Device.Helper).Dv()))+String.fromCharCode(
0x3B))+K.A2r.call(this,Cz.DateOfBirth))+String.fromCharCode(0x3B))+K.BdB.call(this
,Cz.Gender))+String.fromCharCode(0x3B))+K.BdD.call(this,Cz.WhereAbouts))+String.
fromCharCode(0x3B))+K.BdC.call(this,Cz.Breed))+String.fromCharCode(0x3B))+K.Apl.
call(this,A._GetAutoObject(A.Device.Device).PY))+L5);Amd++;}}Ac1.Avc=Adc;Ac1.AGB=
Amd;Ac1.E5(3);},_Init:function(aArg){var K=this.K;A.acl.Gm._Init.call(K.Ai3={I:this
},0);A.acl.Gm._Init.call(K.AaQ={I:this},0);K.__proto__=C.DeviceClass;this.Awz(100
);this.AnC(1);this.ArV(200);this.ArU(100);this.Ar1(276000912345678);this.Ar0(276000923456789
);this.ArW(500);this.Ar2(276000901234567);this.N3(1);K.Ai3.HO(1);K.Ai3.Fr(1000);
K.AaQ.WI(0);K.AaQ.HO(1);K.AaQ.Fr(750);K.AaQ.B2=50000;this.Gf=A._NewObject(C.VT,0
);K.Ai3.SC=[this,K.BCb];K.Aur=A._GetAutoObject(C.UF);K.AaQ.SC=[this,K.BC_];K.AaQ.
Q=[this,this.AER,this.AI3];K.Init.call(this,aArg);A.h7++;},_Done:function(){var K=
this.K;K.__proto__=null;K.Ai3._Done();K.AaQ._Done();A.h7--;},_ReInit:function(){
var K=this.K;K.Ai3._ReInit();K.AaQ._ReInit();K.CP.call(this);},_Mark:function(D){
var B;if((B=this.Aur)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);},_variants:
function(){return A.aco.DeviceClass._variants();},_className:"DeviceSimulation::DeviceClass"
};C.AHd={A5:0,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=C.AHd;
},_className:"DeviceSimulation::UInt8"};C.AHb={A5:0,_Init:function(aArg){C.Ww._Init.
call(this,aArg);this.__proto__=C.AHb;},_className:"DeviceSimulation::UInt32"};C.
HelperClass={A4H:0,AFU:function(E){var K=this.K;K.A4H=K.A4H+(E-this.Dv());A.Device.
HelperClass.Ba8.call(this,E);},Dv:function(){var K=this.K;return A.Device.HelperClass.
Ba4.call(this)+K.A4H;},_Init:function(aArg){var K=this.K;K.__proto__=C.HelperClass;
A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){},_variants:function(){return this;},_className:"DeviceSimulation::HelperClass"
};C.A$P={AxF:true,AGT:false,ATL:function(E){if(this.AGT===E)return;this.AGT=E;A.
abo([this,this.A9s,this.ATL],0);},A9s:function(){return this.AGT;},ATM:function(
E){if(this.AxF===E)return;this.AxF=E;A.abo([this,this.A9t,this.ATM],0);},A9t:function(
){return this.AxF;},_Init:function(aArg){this.__proto__=C.A$P;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationConfigClass"};C.UF={_Init:function(){C.A$P._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return A.aco.UF._variants();
},_this:null};C.PopupContext={EN:1,Id:0,_Init:function(aArg){this.__proto__=C.PopupContext;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"DeviceSimulation::PopupContext"};C.Rating={Ci:function(
AH){var HF=A.Device.Rating.Ba_.call(this,AH);if(HF){var Ry=A._GetAutoObject(A.Device.
Device).An;var Ad=A._GetAutoObject(A.Device.Device).An.LV(0,this.AnimalId);if(Ad
!==-1){var Jq=Ry.OC();if(Jq<=0)A.ab5("%s",AfB);else{var Cz=A._NewObject(A.Device.
Animal,0);Cz.E3(Ad,Ry);if((this.Temperature>0)&&(Cz.TimestampLastTemperature<this.
Timestamp)){Ry.A$I(Ad,5,this.Temperature);Ry.AkT(Ad,17,this.RatingTemperature);Ry.
Acn(Ad,30,this.Timestamp);}if(this.BodyWeight>0){if(Cz.TimestampLastWeighing<=this.
Timestamp){Ry.AUO(Ad,18,this.BodyWeight);Ry.Acn(Ad,19,this.Timestamp);}if(!Cz.TimestampFirstWeighing||(
Cz.TimestampFirstWeighing>=this.Timestamp)){Ry.AUO(Ad,23,this.BodyWeight);Ry.Acn(
Ad,24,this.Timestamp);Ry.Ho(Ad,25,this.Id);}}if(A._GetAutoObject(A.Device.Helper
).AGr(this)){var LT=A._GetAutoObject(A.Device.Helper).ADf(this);Ry.AkT(Ad,13,LT);
Ry.Acn(Ad,31,this.Timestamp);}Ry.OE(Jq);}}}return HF;},_Init:function(aArg){var K=
this.K;K.__proto__=C.Rating;A.h7++;},_Done:function(){var K=this.K;K.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){},_variants:function(){return this;
},_className:"DeviceSimulation::Rating"};C.PZ={Gh:A.abi(512,null,null),Pk:0,AJC:
0,ALi:0,A4K:A.abi(10,0,{0:3600,1:3750,2:3900,3:4200,4:3780,5:3600,6:3900,7:4010,
8:4020,9:4030}),AKR:0,A4b:A.abi(10,0,{0:5,1:4,2:3,3:1,4:2,5:1,6:1,7:1,8:1,9:1}),
Bev:512,AAi:-1,A1H:A.abi(15,0,{0:2,1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:3,10:1,11:1
,12:1,13:1,14:1}),Af5:false,CF:function(Ad,A4){var Bf=this.TZ(Ad);if(!!Bf)return Bf.
CF(A4);return 0;},V2:function(Ad,A4){var Bf=this.TZ(Ad);if(!!Bf)return Bf.V2(A4);
return A.jV;},H3:function(Ad,A4){var Bf=this.TZ(Ad);if(!!Bf)return Bf.H3(A4);return false;
},V3:function(Ad,A4){var Bf=this.TZ(Ad);if(!!Bf)return Bf.V3(A4);return 0;},Sm:function(
Ad,A4){var Bf=this.TZ(Ad);if(!!Bf)return Bf.Sm(A4);return 0;},OC:function(){if(this.
Af5)throw new Error(Aad);this.Af5=true;return 12345;},OE:function(AoS){if(!this.
Af5)throw new Error(Xe);if(AoS!==12345)throw new Error(Aae);this.Af5=false;return true;
},YH:function(){return this.A5d(A._NewObject(C.AGA,0));},ZL:function(Ad,A4,C0){var
Bf=this.TZ(Ad);if(!!Bf)return Bf.ZL(A4,C0);return false;},Ho:function(Ad,A4,C0){
var Bf=this.TZ(Ad);if(!!Bf)return Bf.Ho(A4,C0);return false;},ZK:function(Ad,A4,
C0){var Bf=this.TZ(Ad);if(!!Bf)return Bf.ZK(A4,C0);return false;},N9:function(Ad
,A4,C0){var Bf=this.TZ(Ad);if(!!Bf)return Bf.N9(A4,C0);return false;},ZJ:function(
Ad,A4,C0){var Bf=this.TZ(Ad);if(!!Bf)return Bf.ZJ(A4,C0);return false;},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;this.Bdb();switch(this.Id){case 0:{this.
Bev=256;A.pe([this,this.Bw6],this);}break;case 1:A.pe([this,this.Bw8],this);break;
case 3:A.pe([this,this.Bw5],this);break;case 4:A.pe([this,this.Bw7],this);break;
case 2:break;default:throw new Error(Xf+this.Id.toFixed());}},B_:function(){return this.
Pk;},KR:function(Ad,A4){var Bf=this.TZ(Ad);if(!!Bf)return Bf.KR(A4);return 0;},UE:
function(Ad,A4,C0){var Bf=this.TZ(Ad);if(!!Bf)return Bf.UE(A4,C0);return false;}
,E6:function(){this.Bdb();return true;},HK:function(){return this.Bev;},A5d:function(
Ad){if(this.Pk>=512)throw new Error(AhX);this.Gh.Set(this.Pk,Ad);this.Pk=this.Pk+
1;switch(this.Id){case 0:{this.AAi=this.Pk;this.Ho(this.Pk-1,0,this.AAi);}break;
case 1:{this.AAi=this.Pk-1;this.Ho(this.Pk-1,0,this.AAi);}break;default:;}A.pe([
this,this.Ako],this);return this.Pk-1;},TZ:function(aIndex){if((aIndex<0)||(aIndex>=
512))return null;return this.Gh.Get(aIndex);},Bdb:function(){var O;for(O=0;O<512;
O=O+1)this.Gh.Set(O,null);this.Pk=0;this.AJC=0;this.AKR=0;this.ALi=0;A.pe([this,
this.Ako],this);},AKm:function(){this.AJC=(this.AJC+1)%15;return this.A1H.Get(this.
AJC);},A2v:function(){this.ALi=(this.ALi+1)%10;return this.A4K.Get(this.ALi);},AJ_:
function(G){if(this.K&&this.K.AJ_)return this.K.AJ_.apply(this,arguments);else return C.
PZ.Bxc.apply(this,arguments);},Bxc:function(G){var B;var Oo=true;this.A1(276000312310001
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
A.Device.Device).A2,A._GetAutoObject(A.Device.Device).AF);var O;var BgR=0;for(O=
1;O<=7;O=O+1){BgR=3680+(20*O);Oo=BgR>3800;this.A1(276000312310050+(((B=O)<0)?B+0x10000000000000000:
B),30+(O%3),3,A._GetAutoObject(A.Device.Helper).AhR(7-O),0,1,Oo,false,false,true
,36000+(O*900),0,0,false,0,true,0,0,0,0,true,true,A._GetAutoObject(A.Device.Device
).A2,A._GetAutoObject(A.Device.Device).AF);}},Bw6:function(s){this.AJ_(s);},AKa:
function(G){if(this.K&&this.K.AKa)return this.K.AKa.apply(this,arguments);else return C.
PZ.Bxe.apply(this,arguments);},Bxe:function(G){var Ac=A._GetAutoObject(A.Device.
Helper).Dv();var O;Ac=Ac-2678400;var AiC;var Bdt;for(O=0;O<32;O=O+1){var A2f=this.
BzW();for(;A2f>0;A2f=A2f-1){AiC=this.A2v();Bdt=A._GetAutoObject(A.Device.Converter
).AsK(0,AiC);this.AG(Ac,12310020,AiC,Bdt,this.AKm(),this.AKm(),this.AKm(),this.AKm(
),0);}Ac=Ac+86400;}Ac=Ac-86400;this.AG(Ac,12310020,0,0,0,0,0,0,43700);this.AG(Ac-
86400,276000312310001,0,0,0,0,0,0,49800);this.AG(Ac,276000312310001,0,0,0,0,0,0,
51000);AiC=this.A2v();this.AG(Ac,276000312310001,AiC,A._GetAutoObject(A.Device.Converter
).AsK(0,AiC),1,3,3,3,0);AiC=this.A2v();this.AG(Ac-86400,276000312310022,3800,A._GetAutoObject(
A.Device.Converter).AsK(1,3800),2,3,3,3,0);this.AG(Ac,276000312310022,AiC,A._GetAutoObject(
A.Device.Converter).AsK(1,AiC),2,3,3,3,0);},Bw8:function(s){this.AKa(s);},A1:function(
J9,BxD,BxU,Bcf,Ats,L8,BxL,BxQ,BxN,BxO,MQ,Bxo,BxS,BxM,Eo,BxP,Ac0,AJc,AfN,BxZ,BAd,
BAe,Bxt,Bx1){var Cz=A._NewObject(A.Device.Animal,0);Cz.Gr();Cz.Axk(0);Cz.Ae9(0);
Cz.Uu(false);Cz.AkC(false);if(BAe)Cz.PW(J9);if(BAd)Cz.Nk(J9);Cz.SK(A._GetAutoObject(
A.Device.Helper).VY(J9,Bx1&0xFF,Bxt&0xFF)|0);Cz.Ab4(BxD);Cz.AnD(BxU);Cz.Q6(Bcf);
Cz.Akw(Ats);Cz.JX(L8);Cz.AnV(BxL);Cz.AGM(BxQ);Cz.Ae5(BxO);Cz.Uu(BxN);Cz.ArX(BxM);
Cz.AwT(BxS);Cz.AwE(Bxo);Cz.EC(Eo);Cz.Ae6(BxP);Cz.N3(Ac0);Cz.Aky(AJc);Cz.Nm(AfN);
Cz.AnF(BxZ);Cz.Ci(this);if(MQ>0)A._GetAutoObject(C.Asm).AG(Bcf,J9,0,0,0,0,0,0,MQ
);},AG:function(L7,AcY,AoQ,Bx_,Bxx,Bxy,Bxh,Bya,Bxj){var B1=A._NewObject(A.Device.
Rating,0);B1.Gr();var BcV=A._GetAutoObject(C.Amy).AOD(26,AcY);if(BcV>=0)B1.OnSetAnimalId(
A._GetAutoObject(C.Amy).CF(BcV,0));else A.ab5("%s%U",K1,AcY);B1.OnSetTimestamp(L7
);B1.OnSetTemperature(AoQ);B1.OnSetRatingTemperature(Bx_);B1.OnSetFaeces(Bxx);B1.
OnSetFeed(Bxy);B1.OnSetAppearance(Bxh);B1.OnSetRespiratory(Bya);B1.OnSetBodyWeight(
Bxj);B1.Ci(this);},A6M:function(aColumn,A7){var O;for(O=0;O<this.Pk;O=O+1)if(this.
Gh.Get(O).CF(aColumn)===A7)return O;return-1;},BzW:function(){this.AKR=(this.AKR+
1)%10;return this.A4b.Get(this.AKR);},AJ9:function(G){if(this.K&&this.K.AJ9)return this.
K.AJ9.apply(this,arguments);else return C.PZ.Bxb.apply(this,arguments);},Bxb:function(
G){this.AlP(10,AcN);this.AlP(20,Ly);this.AlP(30,AhY);this.AlP(31,Aoe);this.AlP(32
,Of);},Bw5:function(s){this.AJ9(s);},AlP:function(J9,BxE){var AJw=A._NewObject(A.
Device.AnimalGroup,0);AJw.Gr();AJw.OnSetId(J9);AJw.AFm(BxE);AJw.Ci(this);},Abs:function(
){return this.AAi;},AOD:function(aColumn,A7){var O;for(O=0;O<this.Pk;O=O+1)if(this.
Gh.Get(O).KR(aColumn)===A7)return O;return-1;},AJ$:function(G){if(this.K&&this.K.
AJ$)return this.K.AJ$.apply(this,arguments);else return C.PZ.Bxd.apply(this,arguments
);},Bxd:function(G){this.Aaz(2016,216,6);this.Aaz(2017,217,7);this.Aaz(2018,218,
8);this.Aaz(2019,219,9);this.Aaz(2020,220,10);this.Aaz(2021,221,11);},Bw7:function(
s){this.AJ$(s);},Aaz:function(Ac7,Bxs,Bxr){var U$=A._NewObject(A.Device.CalfDeregistrations
,0);U$.Gr();U$.AkH(Ac7);U$.AwG(Bxs);U$.AwF(Bxr);U$.Ci(this);},_Init:function(aArg
){A.Device.ITable._Init.call(this,aArg);(this.Gh=[]).__proto__=C.PZ.Gh;(this.A4K=[
]).__proto__=C.PZ.A4K;(this.A4b=[]).__proto__=C.PZ.A4b;(this.A1H=[]).__proto__=C.
PZ.A1H;this.__proto__=C.PZ;var J7=this._variants();if(J7){this.K={};J7._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
A.Device.ITable;A.Device.ITable._Done.call(this);},_ReInit:function(){A.Device.ITable.
_ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;
A.Device.ITable._Mark.call(this,D);A.aa6(this.Gh,D);if(this.K)this.K._Mark(D);},
_variants:function(){return A.aco.PZ._variants();},K:null,_className:"DeviceSimulation::TableData"
};C.Amy={_Init:function(){C.PZ._Init.call(this,0);this.OnSetId(0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AuQ={_Init:function(){C.PZ.
_Init.call(this,0);this.OnSetId(3);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Asm={_Init:function(){C.PZ._Init.call(this,0);this.OnSetId(1);},
_ReInit:function(){},_variants:function(){return this;},_this:null};C.GM={AlJ:A.
abi(512,null,null),E_:null,Api:0,CF:function(Ad,A4){var Bf=this.Aax(Ad);if(!!Bf)
return Bf.CF(A4);return 0;},V2:function(Ad,A4){var Bf=this.Aax(Ad);if(!!Bf)return Bf.
V2(A4);return A.jV;},H3:function(Ad,A4){var Bf=this.Aax(Ad);if(!!Bf)return Bf.H3(
A4);return false;},OnSetId:function(E){if(this.Id===E)return;this.Id=E;switch(this.
Id){case 0:this.AGb(A._GetAutoObject(C.Amy));break;case 1:this.AGb(A._GetAutoObject(
C.Asm));break;case 3:this.AGb(A._GetAutoObject(C.AuQ));break;case 4:this.AGb(A._GetAutoObject(
C.Au1));break;case 2:break;default:throw new Error(Xf+this.Id.toFixed());}},B_:function(
){if(!!this.Filter)return this.Api;else if(!!this.E_)return this.E_.Pk;return 0;
},Bk:function(E){A.Device.ITable.Bk.call(this,E);this.A1F(this);},V3:function(Ad
,A4){var Bf=this.Aax(Ad);if(!!Bf)return Bf.V3(A4);return 0;},Sm:function(Ad,A4){
var Bf=this.Aax(Ad);if(!!Bf)return Bf.Sm(A4);return 0;},OC:function(){if(!!this.
E_)return this.E_.OC();return-1;},OE:function(AoS){var HF=false;if(!!this.E_)HF=
this.E_.OE(AoS);if(HF)A.pe([this,this.A1F],this);return HF;},YH:function(){if(!!
this.Filter)throw new Error(Xg+A._GetAutoObject(A.Device.Converter).Bi8(this.Id,
this.Filter));if(!!this.E_)return this.E_.A5d(A._NewObject(C.AGA,0));return-1;},
ZL:function(Ad,A4,C0){if(!this.E_.Af5)throw new Error(Aaf);var Bf=this.Aax(Ad);if(
!!Bf)return Bf.ZL(A4,C0);return false;},Ho:function(Ad,A4,C0){if(!this.E_.Af5)throw new
Error(Aaf);var Bf=this.Aax(Ad);if(!!Bf)return Bf.Ho(A4,C0);return false;},ZK:function(
Ad,A4,C0){if(!this.E_.Af5)throw new Error(Aaf);var Bf=this.Aax(Ad);if(!!Bf)return Bf.
ZK(A4,C0);return false;},N9:function(Ad,A4,C0){if(!this.E_.Af5)throw new Error(Aaf
);var Bf=this.Aax(Ad);if(!!Bf)return Bf.N9(A4,C0);return false;},ZJ:function(Ad,
A4,C0){if(!this.E_.Af5)throw new Error(Aaf);var Bf=this.Aax(Ad);if(!!Bf)return Bf.
ZJ(A4,C0);return false;},LV:function(aColumn,A7){if(!!this.Filter){var O;for(O=0;
O<this.Api;O=O+1)if(this.AlJ.Get(O).CF(aColumn)===A7)return O;return-1;}else if(
!!this.E_)return this.E_.A6M(aColumn,A7);return-1;},KR:function(Ad,A4){var Bf=this.
Aax(Ad);if(!!Bf)return Bf.KR(A4);return 0;},UE:function(Ad,A4,C0){if(!this.E_.Af5
)throw new Error(Aaf);var Bf=this.Aax(Ad);if(!!Bf)return Bf.UE(A4,C0);return false;
},AgZ:function(aColumn,A7){if(!!this.Filter){var O;for(O=0;O<this.Api;O=O+1)if(this.
AlJ.Get(O).KR(aColumn)===A7)return O;return-1;}else if(!!this.E_)return this.E_.
AOD(aColumn,A7);return-1;},E6:function(){if(!!this.E_)return this.E_.E6();return false;
},AjL:function(aColumn,A7){if(!!this.E_)return this.E_.A6M(aColumn,A7)>=0;return false;
},Aem:function(aColumn,A7){if(!!this.E_)return this.E_.AOD(aColumn,A7)>=0;return false;
},HK:function(){if(!!this.E_)return this.E_.HK();return 0;},Abs:function(){if(!!
this.E_)return this.E_.Abs();return-1;},QK:function(){if(!!this.E_)return this.E_.
Pk;return 0;},A1F:function(G){this.A1T();if(!!this.Filter&&!!this.E_){var O;for(
O=0;O<this.E_.B_();O=O+1){var A2j=true;var Aw=this.Filter.AOQ();var Bf=this.E_.TZ(
O);if(!!Bf)while(A2j&&!!Aw){A2j=Bf.Bj7(Aw);Aw=this.Filter.AOV(Aw);}else A.ab5("%s"
,((AfC+O.toFixed())+AhZ)+this.E_.B_().toFixed());if(A2j){this.AlJ.Set(this.Api,this.
E_.Gh.Get(O));this.Api=this.Api+1;}}}A.pe([this,this.Ako],this);},A1T:function(){
var O;for(O=0;O<512;O=O+1)this.AlJ.Set(O,null);this.Api=0;},AGb:function(E){if(this.
E_===E)return;if(!!this.E_)A.z9([this,this.A4I],this.E_,0);this.E_=E;if(!!this.E_
){A.zV([this,this.A4I],this.E_,0);A.pe([this,this.A4I],this);}},A4I:function(G){
A.pe([this,this.A1F],this);},Aax:function(aIndex){if(!!this.Filter){if((aIndex<0
)||(aIndex>=512))return null;else return this.AlJ.Get(aIndex);}else if(!!this.E_
)return this.E_.TZ(aIndex);A.ab5("%s",AcO+aIndex.toFixed());return null;},_Init:
function(aArg){A.Device.ITable._Init.call(this,aArg);(this.AlJ=[]).__proto__=C.GM.
AlJ;this.__proto__=C.GM;},_Mark:function(D){var B;A.Device.ITable._Mark.call(this
,D);A.aa6(this.AlJ,D);if((B=this.E_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"DeviceSimulation::FilteredTable"};C.A$Q={KK:null,AdJ:null,OA:null,AMW:false,AMX:
true,A4B:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:{
A._GetAutoObject(A.Device.Device).Ab9(1);this.AdJ.Ar(true);}break;case 1:{A._GetAutoObject(
A.Device.Device).Ab9(2);A._GetAutoObject(A.Device.Device).Ar$(A._GetAutoObject(A.
Device.Device).An.QK());this.KK.Fr(A._GetAutoObject(A.Device.Device).Afr*50);this.
KK.B2=A._GetAutoObject(A.Device.Device).Afr;this.KK.Ar(true);}break;case 2:{A._GetAutoObject(
A.Device.Device).Ab9(3);this.AdJ.Ar(true);}break;case 3:{A._GetAutoObject(A.Device.
Device).Ab9(4);A._GetAutoObject(A.Device.Device).Ar$(A._GetAutoObject(A.Device.Device
).An.QK());this.KK.Fr(A._GetAutoObject(A.Device.Device).Afr*50);this.KK.B2=A._GetAutoObject(
A.Device.Device).Afr;this.KK.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device
).Ab9(5);this.AdJ.Ar(true);}break;case 5:A.pe([this,this.BgJ],this);break;case 7:
case 6:break;default:A.ab5("%s%e",UZ,A._GetAutoObject(A.Device.Device).SyncState
);}},BBx:function(G){this.AdJ.Ar(false);A.pe([this,this.A4B],this);},BCA:function(
G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:case 6:case 7:{A._GetAutoObject(
A.Device.Device).Ab9(0);A.pe([this,this.A4B],this);}break;default:;}},BgJ:function(
G){this.AdJ.Ar(false);this.KK.Ar(false);A._GetAutoObject(A.Device.Device).Ab9(0);
},AE2:function(E){if(this.AMX===E)return;this.AMX=E;A.abo([this,this.Bk7,this.AE2
],0);},Bk7:function(){return this.AMX;},Aqp:function(G){var B;this.OA.Cx=true;this.
OA.B2=false;this.OA.Fr(100);this.OA.HO(1);this.OA.Q=[this,this.ASC,this.AS$];A.pe([
B=this.OA,B.AnX],this);},BhN:function(G){var B;this.OA.Cx=true;this.OA.B2=false;
this.OA.Fr(400);this.OA.Ut(200);this.OA.HO(3);this.OA.Q=[this,this.ASC,this.AS$];
this.AE2(false);A.pe([B=this.OA,B.AnX],this);},AS$:function(E){if(this.AMW===E)return;
this.AMW=E;A.abo([this,this.ASC,this.AS$],0);},ASC:function(){return this.AMW;},
Aqq:function(G){var B;this.OA.AnZ(this);this.AE2(false);},_Init:function(aArg){A.
acl.Gm._Init.call(this.KK={I:this},0);A.Core.Timer._Init.call(this.AdJ={I:this},
0);A.acl.TM._Init.call(this.OA={I:this},0);this.__proto__=C.A$Q;var B;this.KK.HO(
1);this.AdJ.PV(2000);this.KK.SC=[this,this.A4B];this.KK.Q=[B=A._GetAutoObject(A.
Device.Device),B.AS1,B.A0H];this.AdJ.ME=[this,this.BBx];A.h7++;},_Done:function(
){this.__proto__=null;this.KK._Done();this.AdJ._Done();this.OA._Done();A.h7--;},
_ReInit:function(){this.KK._ReInit();this.AdJ._ReInit();this.OA._ReInit();},_Mark:
function(D){var B;if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.OA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceSimulation::SimulationHelperClass"};C.Acq={_Init:function(){C.A$Q._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
AHc={A5:0,_Init:function(aArg){C.Ww._Init.call(this,aArg);this.__proto__=C.AHc;}
,_className:"DeviceSimulation::UInt64"};C.Au1={_Init:function(){C.PZ._Init.call(
this,0);this.OnSetId(4);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.FactoryResetScope={Du:function(){return 1;},_Init:function(aArg){
var K=this.K;K.__proto__=C.FactoryResetScope;this.B7.Set(0,1);A.h7++;},_Done:function(
){var K=this.K;K.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){
},_variants:function(){return this;},_className:"DeviceSimulation::FactoryResetScope"
};C.X2={Ad8:null,CC:function(G){var K=this.K;A.ab5("%s",Aof);K.Ad8.Ar(true);},E4:
function(G){var K=this.K;if(K.Ad8.Bw===true){K.Ad8.Ar(false);A.ab5("%s",Aog);}},
BkY:function(G){var K=this.K;K.Ad8.Ar(false);A._GetAutoObject(A.kR.A8).Ab_(A._GetAutoObject(
A.Device.Device).AxM);},_Init:function(aArg){var K=this.K;A.Core.Timer._Init.call(
K.Ad8={I:this},0);K.__proto__=C.X2;this.AeO.H(Aoh);K.Ad8.PV(1500);this.UG.R(Aoi);
this.UG.Z(true);this.AeO.Ax(A.aaL(A.ach.ARM));K.Ad8.ME=[this,K.BkY];A.h7++;},_Done:
function(){var K=this.K;K.__proto__=null;K.Ad8._Done();A.h7--;},_ReInit:function(
){var K=this.K;K.Ad8._ReInit();},_Mark:function(D){var B;if((B=this.Ad8)._cycle!=
D)B._Mark(B._cycle=D);},_variants:function(){return this;},_className:"DeviceSimulation::BootScreen"
};C.VT={Avc:A.jV,E6:function(){A.Device.VT.E6.call(this);this.Avc=A.jV;},_Init:function(
aArg){A.Device.VT._Init.call(this,aArg);this.__proto__=C.VT;},_className:"DeviceSimulation::DataExportContext"
};
C._Init=function(){C.AD0.__proto__=C.Ww;C.String.__proto__=C.Ww;C.AB6.__proto__=C.
Ww;C.AHd.__proto__=C.Ww;C.AHb.__proto__=C.Ww;C.PZ.__proto__=A.Device.ITable;C.GM.
__proto__=A.Device.ITable;C.AHc.__proto__=C.Ww;C.VT.__proto__=A.Device.VT;};C._ReInit=
function(){var B;if((B=C.UF._this))B._ReInit(),C.UF._ReInit.call(B);if((B=C.Amy.
_this))B._ReInit(),C.Amy._ReInit.call(B);if((B=C.AuQ._this))B._ReInit(),C.AuQ._ReInit.
call(B);if((B=C.Asm._this))B._ReInit(),C.Asm._ReInit.call(B);if((B=C.Acq._this))
B._ReInit(),C.Acq._ReInit.call(B);if((B=C.Au1._this))B._ReInit(),C.Au1._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.UF._this)&&(B._cycle!=D))B._Done(C.UF._this=
null);if((B=C.Amy._this)&&(B._cycle!=D))B._Done(C.Amy._this=null);if((B=C.AuQ._this
)&&(B._cycle!=D))B._Done(C.AuQ._this=null);if((B=C.Asm._this)&&(B._cycle!=D))B._Done(
C.Asm._this=null);if((B=C.Acq._this)&&(B._cycle!=D))B._Done(C.Acq._this=null);if((
B=C.Au1._this)&&(B._cycle!=D))B._Done(C.Au1._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */