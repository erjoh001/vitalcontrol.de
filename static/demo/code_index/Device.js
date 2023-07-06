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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var B3="ERROR: Cannot add criterion, it is already in the list.";var BI="ERROR: BatteryChargeState is read only";
var EG="ERROR: UpdateChargeActive is read only";var Gr="ERROR: ScanState is read only.";
var I4="ERROR: MeasureState is read only.";var Ip="ERROR: Temperature value is read only";
var Oc="ERROR: UpdateDataTable called for Undefined data table.";var Pb="ERROR: UpdateDataTable called for unknown data table id=";
var Nm="ERROR: SyncState is read only.";var Cv="ERROR: ScanTransponder is read only.";
var FK="ERROR: Body weight value is read only";var Od="ERROR: Predicted temperature value is read only";
var Nn="ERROR: TransferProgress is read only";var Ka="ERROR: TransferTarget is read only";
var Oe="ERROR: unhandled assessment.";var MB="Unhandled enum BodyTemperature: ";
var Pc="AU";var RL="AT";var Ti="BE";var Ve="BA";var Vf="BG";var JT="CA";var RM="CN";
var Vg="TW";var Vh="HR";var X7="CY";var RN="CZ";var X8="DK";var Vi="EE";var Tj="FI";
var Vj="FR";var Qg="DE";var Vk="GR";var Np="HU";var Pd="IE";var Tk="IT";var X9="JP";
var Vl="LV";var X_="LT";var X$="LU";var Vm="MT";var Vn="NL";var RO="NO";var Ya="PL";
var Yb="PT";var AaC="RO";var Qh="RU";var AaD="SK";var Adz="SI";var Yc="ES";var Vo=
"SE";var Yd="CH";var AdA="TR";var KM="UA";var AaE="UK";var RP="US";var Nq=".";var
AlR="-";var AlS="ERROR: Unhandled mass unit: ";var JU=" ";var AlT="Unhandled gender";
var AlU="Unhandled animal type";var AfU="Unhandled Device::MassUnit.";var AaF="Unhandled Device::AnimalListContent.";
var Ye="Avid";var AuF="Ordicam / IER SA";var AuG="Agrident";var AuH="Datamars";var
AuI="Allflex";var AiR="Texas Instruments";var AuJ="Nedap";var AuK="Digital Angel";
var AdB="null";var AdC="[ ";var Kb=", ";var AuL=" ]";var Vp="Unhandled language";
var AiS="Unhandled Device::AnimalListAction.";var AuM="Temperature unit conversion not supported: ";
var AuN="->";var AuO="=";var AlV=">";var AuP="<";var ApY="!=";var Kc="WARNING: Unhandled operator.";
var AQN="Unknown birth type";var ApZ="Unhandled country: ";var AaG="ERROR: Cannot start transaction";
var ADl="ERROR: Table is null, cannot load row (";var ADm=")";var ADn="Table Id mismatch!";
var ADo="ERROR: Row index (";var AuQ=") out of bounds [0,";var ADp="]";var AQO="ERROR: Table is full. Item limit: ";
var AQP="Device::ScanTransponder not set";var AQQ="Unhandled TransponderType.";var
AQR="Unhandled ScanState.";var Ap0="Could not load animal with transponder";var AuR=
"Birth type";var Qi="Time calving";var AuS="Pend. Birth announcement";var AQS="Perished";
var AQT="Rating temp.";var AQU=" mother";var AQV="Reason leaving";var ADq="Time alarm";
var ADr="Time first weighing";var AdD="Time control";var AlW="Time temp.";var AQW=
"Time watch";var ADs="Time weighing";var AiT="Assessment";var ADt="Time rating";
var ADu="ERROR: Unhandled AnimalTable filter field:";var ADv="Field ";var AQX="ERROR: Unhandled RatingTable filter field:";
var AQY="ERROR: Unhandled table ";var AQZ=" filter fields.";var AdE="WARNING: Unhandled filter criterion type.";
var ADw="0";var Ap1="No table specified";var ADx="Invalid animal id generation method: ";
var ADy="Unhandled AnimalIdGenerationMethod: ";var AuT="Invalid gender: ";var ADz=
"Invalid ear tag number assignment mode: ";var AuU=";";var AQ0="Invalid animal creation error code: ";
var AQ1="Invalid EartagNrAssignmentMode: ";var AQ2="Unsupported exponent: ";var AQ3=
"Unknown whereabouts type: ";var AQ4="Unhandled Gender: ";var AQ5="Unhandled AnimalIdAutoGenerationMethod: ";
var Of="\n";var AuV="\n\n";var AQ6="Bootloader:\nV\xA0";var AQ7="Middleware:\nV\xA0";
var AQ8="GUI:\nV\xA0";var AQ9="Mainboard: ";var AQ_="Torchboard: ";var AQ$="Operator not supported.";
var Ap2="Unhandled enum value ";var AuW="UNDEFINED";var ADA="Boot";var ARa="Charge";
var ADB="ChargeWarning";var ARb="ControlledPowerOff";var ARc="DeviceMain";var ARd=
"DeviceService";var ARe="DeviceInfo";var ADC="DeviceBackup";var ARf="DeviceCheck";
var AuX="Home";var ADD="Settings";var ADE="DateTimeSettings";var ARg="UnitsSettings";
var ADF="DataAcquisitionSettings";var ARh="AutoAssignIdsSettings";var ARi="TemperatureSettings";
var Vq="WeightGainSettings";var Vr="DeviceSettings";var ARj="RegistrationSettings";
var ARk="InitializationSettings";var ARl="PremisesSettings";var ARm="Sleep";var ARn=
"Sync";var ARo="EditAnimalData";var ARp="EditAnimalDataNaisId";var AiU="AnimalList";
var ADG="AnimalListFilter";var ARq="AlarmListFilter";var ARr="WatchListFilter";var
ADH="AnimalActionActions";var ADI="AnimalActionTemperature";var AuY="TemperatureMeasurement";
var RQ="AnimalActionWeighing";var ARs="AnimalActionRate";var ARt="AnimalActionUnregister";
var ARu="AnimalActionPerished";var Ap3="AnimalActionNewBornCare";var ARv="AlarmList";
var ARw="ControlMeasure";var ARx="ControlList";var ARy="RangeTest";var ARz="ListsMain";
var ARA="ListsIdManagement";var Ap4="WatchList";var ARB="AnimalListActions";var ARC=
"AlarmListActions";var ARD="ControlListActions";var ARE="WatchListActions";var ARF=
"EvaluationMenuMain";var ARG="EvaluationMenuWeights";var ARH="EvaluationLosses";
var ARI="EvaluationRatings";var ARJ="EvaluationTemperatures";var ARK="EvaluationWeights";
var ADJ="EvaluationWeightsRecent";var Ap5="EvaluationBirthWeights";var ARL="AnimalEvaluationFilter";
var ARM="NewMenu";var ARN="NewAnimals";var AuZ="NewAnimalManualData";var AiV="NewAnimalTransponderData";
var AfV="NewAnimalLoss";var Au0="AutoActionScanScreen";var AlX="ManualActionScanScreen";
var AfW="SetTransponderScreen";var ARO="SetSaveTransponderScreen";var Ap6="NewAnimalSetTransponderScreen";
var ADK="NewAnimalsSetTransponderScreen";var AdF="NewAnimalCalvingDataScreen";var
ADL="WeightListScreen";var Yf="AnimalSingleInfoScreen";var AiW="AnimalMultiInfoScreen";
var AlY="AnimalRegistrationDetails";var ARP="MultiInfoActionsScreen";var ARQ="FreshCowListScreen";
var ARR="FreshCowListActionsScreen";var ARS="FreshCowListFilterScreen";var ART="DryCowListScreen";
var Ap7="DryCowListActionsScreen";var ADM="DryCowListFilterScreen";var ADN="NoTransponderListScreen";
var ARU="NoTransponderListActionsScreen";var ARV="NoTransponderListFilterScreen";
var ARW="YoungNoTransponderListScreen";var ARX="YoungNoTransponderListActionsScreen";
var ARY="YoungNoTransponderListFilterScreen";var ARZ="NoNaisIdListScreen";var ADO=
"NoNaisIdListActionsScreen";var AR0="NoNaisIdListFilterScreen";var ADP="RegistrationsListScreen";
var ADQ="RegistrationsListActionsScreen";var ADR="RegistrationsListFilterScreen";
var ADS="ActionListScreen";var ADT="ActionListActionsScreen";var ADU="ActionListFilterScreen";
var ADV="UpdateScreen";var AR1="MotherScanScreen";var AR2="SetSaveNaisIdScreen";
var AR3="Unhandled display mode: ";var AR4="None";var AR5="Actions Settings";var
AR6="Auto Action";var AR7="Menu Item Settings";var Au1="Rating Type";var ADW="Weighing settings";
var AR8="Options";var ADX="AnimalSearch";var AiX="AnimalSearchUnfiltered";var AfX=
"AnimalSearchDriedOff";var AR9="MeasurementReady";var AiY="AnimalMultiInfoMenu";
var AR_="Unhandled overlay menu: ";var Au2="Error";var AiZ="Idle";var AdG="IdScanned";
var AR$="NotFound";var ADY="Progress";var Ap8="Unhandled scan state: ";var ASa="Prediction";
var Nr="Ready";var ASb="Unhandled measure state: ";var ASc="Unhandled temperature unit: ";
var ASd="Unhandled species: ";var ASe="English";var ADZ="Nederlands";var AD0="Deutsch";
var ASf="Eesti";var ASg="Suomalainen";var ASh="Fran\xE7ais";var ASi="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var ASj="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var ASk="Italiano";
var ASl="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var ASm="Espa\xF1ol";var AD1=
"T\xFCrk\xE7e";var ASn="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AD2="\u010Ce\u0161tina";
var AD3="Bosanski";var Au3="Norsk";var ASo="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AD4="Unhandled language: ";var ASp="Unhandled gender: ";var ASq="Unhandled birth type: ";
var ASr="Exporting";var ASs="ImportFinish";var ASt="ImportStart";var ASu="Importing";
var Au4="Init";var AD5="Unhandled sync state: ";var Au5="Unhandled rating attribute: ";
var ASv="Unhandled assessment: ";var Au6="Illegal boolean value: ";var AD6="Unhandled popup ID:";
var ASw="Unknown";var ASx="Severe Error";var ASy="ErrorsDeviceDriverCheck";var ASz=
"Enter Sleep";var ASA="About";var ASB="InfoSoftwareVersions";var ASC="InfoHardwareVersions";
var ASD="InfoSerial";var ASE="ShutDown";var ASF="SuccessDataSync";var ASG="SuccessResetFactory";
var ASH="SuccessResetAnimalData";var ASI="SuccessCreateBackup";var ASJ="SuccessRestoreBackup";
var ASK="CreateBackupInProgress";var AD7="RestoreBackupInProgress";var AD8="FailedCreateBackup";
var AD9="FailedRestoreBackup";var AD_="TechnicalDetails";var AD$="WarningDataSync";
var AEa="WarningFactory";var AEb="WarningResetAnimalData";var ASL="WarningRestart";
var ASM="WarningAutoAction";var ASN="WarningAutoActionNotApplicable";var ASO="WarningNoMenuItem";
var ASP="WarningEnterDemoMode";var ASQ="NoAnimalsRegistered";var ASR="MaxNumAnimalsReached";
var ASS="MaxNumRatingsReached";var AST="MaxNumCalfDeregistrationsReached";var ASU=
"ScanInTransponder";var ASV="WarningScanOverwriteNaisId";var ASW="EarTagNumberTooShort";
var ASX="NoValidCountryCode";var Au7="WarningOutdatedAnimalWeight";var ASY="WarningOutdatedAnimalWeights";
var ASZ="WarningWeightEvaluationSingular";var Au8="WarningWeightEvaluationPlural";
var Au9="ScanError";var Yg="ScanNotFound";var Ap9="ScannedAnimalNotFound";var AEc=
"ScannedTransponderNotFound";var AS0="AnimalNotFound";var AS1="SuccessUnregister";
var AEd="SuccessUnregisterPerished";var AS2="SuccessCreationNewAnimal";var AEe="SuccessCreationNewAnimals";
var AS3="AnimalCreationInProgress";var AS4="EvaluationInProgress";var AS5="DataSyncInProgress";
var Ap_="AddedToAlarm";var AS6="RemovedFromAlarm";var AS7="AddedToWatch";var AEf=
"RemovedFromWatch";var AS8="AddedToDryOff";var AS9="RemovedFromDryOff";var AS_="AnimalIdAlreadyExists";
var AS$="AnimalIdAlreadyExistsContinuable";var Yh="MissingAnimalId";var ATa="MissingAnimalIdMother";
var ATb="MissingEartagNumber";var ATc="MissingTransponderId";var ATd="TransponderAlreadyRegistered";
var AEg="TransponderAlreadyRegisteredContinuable";var ATe="HelpAnimalInfoRating";
var ATf="CannotReassignTransponder";var ATg="CannotReassignNaisId";var ATh="WarningResetToDefaultValue";
var ATi="WarningResetThresholds";var ATj="WarningResetTempThresholds";var AEh="UpdateFirmware";
var ATk="UpdateFirmwareBatteryLow";var ATl="ConfirmFirmwareUpdated";var ATm="ConfirmBootloaderUpdated";
var AEi="QuestionAddAnotherCalfMultiples";var AEj="RemovedAllBirthAnnouncmentsPending";
var ATn="RemovedFromBirthAnnouncmentPending";var ATo="SuccessClearAnimalLoss";var
ATp="RemovedAnimal";var ATq="WarningNoActionsForAnimalLoss";var Qj="SuccessLinkTransponder";
var Ap$="SuccessUnlinkTransponder";var AEk="SuccessLinkNaisId";var AEl="WarningDataExportFailed";
var AlZ="SuccessDataExport";var Al0="SuccessDataExportDownload";var Au_="WarningDataExportAnimalsFailed";
var ATr="SuccessDataExportAnimalsRatings";var AEm="SuccessDataExportAnimalsDownload";
var ATs="WarningNoPremisesID";var ATt="WarningNoFlashDrivePresent";var ATu="WarningNoBackupPathPresent";
var ATv="WarningNoBackupFilePresent";var ATw="DemoFunctionNotAvailable";var ATx=
"WarningImpreciseTimeSetting";var ATy="ConfirmationRestoreBackup";var ATz="AnimalId";
var ATA="FarmId";var ATB="GroupId";var ATC="PersonId";var ATD="Unhandled transponder type: ";
var ATE="FDX";var ATF="HDX";var ATG="HDX (Urban)";var ATH="Unhandled transponder protocol: ";
var ATI="Illegal RatingMode: ";var Al1="Unhandled mass unit: ";var AEn="Max array size is 10";
var AEo="Index out of bounds";var AEp="ERROR: Received more integers than expected!";
var Au$="Unhandled double scan action :";var AaH="Illegal WeightRecordingMode: ";
var AEq="Illegal WeightRecordingScope: ";var ATJ="AnimalData";var AEr="Rating";var
ATK="Temperature";var Ava="Weight";var ATL="Alarm infos";var ATM="Control infos";
var ATN="Watch infos";var ATO="Fresh cow infos";var ATP="No transponder infos";var
ATQ="Dry cow info";var AEs="No nais id infos";var Al2="Registrations infos";var AEt=
"Unhandled animal list content:";var ATR="Illegal AutoRegistrationMode: ";var AEu=
"Illegal FactoryResetScope: ";var Ai0="??";var Ai1="Illegal EaseOfDelivery: ";var
ATS="Illegal Whereabouts: ";var Al3="Illegal breed: ";var ATT="Unisex";var AEv="Illegal animalIdGenerationMethod: ";
var AEw="Ascending";var ATU="Descending";var ATV="Illegal directionOfCountingName: ";
var Avb="Unhandled direction of counting: ";var Aqa="Unhandled German state: ";var
ATW="SH";var ATX="HH";var ATY="NI";var ATZ="HB";var AT0="NW";var AT1="HE";var AT2=
"RP";var AT3="BW";var AT4="BY";var AT5="SL";var AT6="BB";var AT7="MV";var AEx="SN";
var Yi="ST";var AT8="TH";var Avc="One Range Male Female";var AT9="Two Ranges Male Female";
var AEy="Illegal EartagAssignmentMode: ";var AT_="Unhandled code set value ";var
AEz="Implement in derived class";var AT$="Illegal HIT-Code: ";var AUa="Illegal ReasonOfLeaving: ";
var Al4="Illegal code: ";var Aqb="Undefined";var Aqc="Illegal DeviceComponent: ";
var Aqd="Unhandled Device::MotherSelectionFilterMode: ";var Avd="Illegal Device::TimespanDays: ";
var Al5="Not connected";var AUb="Host";var AUc="Device";var AUd="Device CDC";var
AUe="Host MSC";var AUf="Illegal animalIdAutoGenerationMethod: ";var AUg="Unhandled month: ";
C.Action={UNDEFINED:0,TempMeasurement:1,Rating:2,Alarm:4,Watch:8,History:16,AnimalLoss:
32,Unregister:64,Edit:128,Weighing:256,FirstFeeding:512,LinkTransponder:1024,AutoActions:
2048,Calving:4096,DryOff:8192,LinkNaisId:16384,ClearBirthAnnouncementPending:32768
,DeleteAnimal:65536,ScanNaisId:131072,UnlinkTransponder:262144};C.AnimalTableFields={
Id:0,VisualId:1,GroupId:2,LocationId:3,DateOfBirth:4,LastTemperature:5,BirthType:
6,Gender:7,IsAlarm:8,IsControl:9,IsRegistered:10,IsFever:11,IsWatch:12,WorstAssessment:
13,AnimalType:14,TimestampAlarm:15,TimestampExpirationFeverAlarm:16,LastRatingTemperature:
17,LastBodyWeight:18,TimestampLastWeighing:19,TimestampLastControl:20,TimestampLastWatch:
21,TransponderId:22,FirstBodyWeight:23,TimestampFirstWeighing:24,FirstBodyWeightId:
25,NaisId:26,IsPerished:27,DateOfLastCalving:28,LactationNumber:29,TimestampLastTemperature:
30,TimestampLastAssessment:31,Breed:32,EaseOfDelivery:33,WhereAbouts:34,NaisIdMother:
35,ReasonOfLeaving:36,IsBirthAnnouncementPending:37,IsDry:38};C.Assessment={None:
0,Red:1,Yellow:2,Green:3,Blue:4,Gray:5};C.Filter={BY:null,BT:null,CO:function(AK
){if(!AK)return;var At=this.BY;while(!!At){if(At===AK)throw new Error(B3);At=At.
Af;}AK.AG=this.BT;if(!!this.BT)this.BT.Af=AK;this.BT=AK;if(!this.BY)this.BY=AK;}
,AKo:function(){return this.BY;},AKs:function(A6Z){if(!!A6Z)return A6Z.Af;return null;
},DG:function(AE5,En){var At=this.BY;while(!!At){if(At.EE===AE5){if(En===1)return At;
else if(At.Operator===En)return At;}At=At.Af;}return null;},P6:function(AK){var At=
this.BY;while(!!At){if(At===AK){if(!!At.AG)At.AG.Af=At.Af;if(!!At.Af)At.Af.AG=At.
AG;if(this.BY===At)this.BY=At.Af;if(this.BT===At)this.BT=At.AG;At.Af=null;At.AG=
null;return;}At=At.Af;}},F0:function(){var Bb=A._NewObject(C.Filter,0);var At=this.
BY;while(!!At){Bb.CO(At.Ab2());At=At.Af;}return Bb;},_Init:function(aArg){this.__proto__=
C.Filter;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Filter"};C.FilterCriterion={
Af:null,AG:null,EE:-1,Operator:1,ZF:false,Ab2:function(){return null;},F0:function(
AK){if(!AK)return;this.EE=AK.EE;this.Operator=AK.Operator;this.ZF=AK.ZF;},_Init:
function(aArg){this.__proto__=C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::FilterCriterion"};C.Int32FilterCriterion={AY:0,Ab2:function(){var At=A.
_NewObject(C.Int32FilterCriterion,0);At.F0(this);return At;},F0:function(AK){C.FilterCriterion.
F0.call(this,AK);var At=(C.Int32FilterCriterion.isPrototypeOf(AK)?AK:null);if(!!
At)this.AY=At.AY;},Initialize:function(AQ,En,A2,RT){this.EE=AQ;this.Operator=En;
this.AY=A2;this.ZF=RT;return this;},_Init:function(aArg){C.FilterCriterion._Init.
call(this,aArg);this.__proto__=C.Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"
};C.DeviceClass={AAv:0,AAu:0,AsV:0,Ac3:0,O6:null,Rl:null,PX:null,RE:null,QO:null
,Aq:null,Bt:null,Aet:null,Alr:null,OD:null,Ary:A.jm,AutoActions:A.jm,Aya:A.jm,ACZ:
A.jm,AC0:A.jm,AfF:A.jm,ADg:A.jm,ADh:A.jm,Ayb:A.jm,ADf:A.jm,ADj:A.jm,Y4:100,JR:0,
AIH:75,X4:3600,AO$:0,Fn:5,Fb:0,Io:50000,Py:0,ACb:0,Ake:0,Ass:0,Asr:0,ANg:1,ANf:1
,Aob:0,ANh:1,Aur:0,Adq:0,An4:10,APN:5,Aul:3,Ay3:0,Akg:0,Aev:1,AiM:0,ZT:0,APl:13,
ANs:12,AJA:11,Breed:0,EartagNrAssignmentMode:0,ArX:0,AyW:0,AyV:0,HM:5,Ax5:2,AnI:
0,ANx:8,AKf:2,AQu:0,DK:0,AHT:0,Jd:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:
1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:
0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:0,J3:3,Akc:true,AkD:false
,Akz:true,G9:false,AQd:false,AkA:false,AQs:false,ApR:false,AAt:false,Akn:false,UpdateActiveScreen:
function(AN){if(this.J3===AN)return;this.J3=AN;A.aat([this,this.AAF,this.A6c],0);
},Xw:function(E){if(this.K&&this.K.Xw)return this.K.Xw.apply(this,arguments);else
return C.DeviceClass.Bm$.apply(this,arguments);},Bm$:function(E){},A6c:function(
Ao){this.Xw(Ao);},UpdateBatteryChargeState:function(AN){if(this.Y4===AN)return;this.
Y4=AN;A.aat([this,this.AsX,this.Avj],0);},Atd:function(E){if(this.K&&this.K.Atd)
return this.K.Atd.apply(this,arguments);else return C.DeviceClass.Bnl.apply(this
,arguments);},Bnl:function(E){A.aa8("%s",BI);},Avj:function(Ao){this.Atd(Ao);},UpdateChargeActive:
function(AN){if(this.Akn===AN)return;this.Akn=AN;A.aat([this,this.AsZ,this.Avk],
0);},AA7:function(E){if(this.K&&this.K.AA7)return this.K.AA7.apply(this,arguments
);else return C.DeviceClass.Bnq.apply(this,arguments);},Bnq:function(E){A.aa8("%s"
,EG);},Avk:function(Ao){this.AA7(Ao);},UpdateScanState:function(AN){var B;if(this.
ScanState===AN)return;this.ScanState=AN;A.aat([this,this.AN3,this.AUN],0);A._GetAutoObject(
C.Helper).Bta(this);},Ao8:function(E){if(this.K&&this.K.Ao8)return this.K.Ao8.apply(
this,arguments);else return C.DeviceClass.Bn4.apply(this,arguments);},Bn4:function(
E){A.aa8("%s",Gr);},AUN:function(Ao){this.Ao8(Ao);},UpdateMeasureState:function(
AN){if(this.MeasureState===AN)return;this.MeasureState=AN;A.aat([this,this.AAM,this.
AEM],0);},AtC:function(E){if(this.K&&this.K.AtC)return this.K.AtC.apply(this,arguments
);else return C.DeviceClass.BnL.apply(this,arguments);},BnL:function(E){A.aa8("%s"
,I4);},AEM:function(Ao){this.AtC(Ao);},UpdateTempValue:function(AN){if(this.JR===
AN)return;this.JR=AN;A.aat([this,this.AAQ,this.AEP],0);},AtO:function(E){if(this.
K&&this.K.AtO)return this.K.AtO.apply(this,arguments);else return C.DeviceClass.
Bn_.apply(this,arguments);},Bn_:function(E){A.aa8("%s",Ip);},AEP:function(Ao){this.
AtO(Ao);},Ao3:function(E){if(this.K&&this.K.Ao3)return this.K.Ao3.apply(this,arguments
);else return C.DeviceClass.BnI.apply(this,arguments);},BnI:function(E){},A6s:function(
Ao){this.Ao3(Ao);},AtP:function(E){if(this.K&&this.K.AtP)return this.K.AtP.apply(
this,arguments);else return C.DeviceClass.Bn$.apply(this,arguments);},Bn$:function(
E){},Aqg:function(Ao){this.AtP(Ao);},AA5:function(E){if(this.K&&this.K.AA5)return this.
K.AA5.apply(this,arguments);else return C.DeviceClass.Bnp.apply(this,arguments);
},Bnp:function(E){},A6k:function(Ao){this.AA5(Ao);},ABx:function(E){if(this.K&&this.
K.ABx)return this.K.ABx.apply(this,arguments);else return C.DeviceClass.BnN.apply(
this,arguments);},BnN:function(E){},AUG:function(Ao){this.ABx(Ao);},UpdateMonitoring:
function(AN){if(this.AAt===AN)return;this.AAt=AN;A.aat([this,this.ANT,this.AUG],
0);},UpdateDataTable:function(A60){var B;switch(A60){case 0:A.ow([B=this.Aq,B.Ah4
],this);break;case 1:A.ow([B=this.Bt,B.Ah4],this);break;case 3:A.ow([B=this.Aet,
B.Ah4],this);break;case 4:A.ow([B=this.OD,B.Ah4],this);break;case 2:A.aa8("%s",Oc
);break;default:A.aa8("%s%e",Pb,A60);}},Auk:function(){if(this.K&&this.K.Auk)return this.
K.Auk.apply(this,arguments);else return C.DeviceClass.BoA.apply(this,arguments);
},BoA:function(){},AfJ:function(){if(this.K&&this.K.AfJ)return this.K.AfJ.apply(
this,arguments);else return C.DeviceClass.BoD.apply(this,arguments);},BoD:function(
){},Adg:function(){if(this.K&&this.K.Adg)return this.K.Adg.apply(this,arguments);
else return C.DeviceClass.BoB.apply(this,arguments);},BoB:function(){},AlD:function(
){if(this.K&&this.K.AlD)return this.K.AlD.apply(this,arguments);else return C.DeviceClass.
BoE.apply(this,arguments);},BoE:function(){},UpdateLanguage:function(AN){if(this.
Language===AN)return;this.Language=AN;switch(AN){case 14:A._SetLanguage(1);break;
case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(
4);break;case 0:A._SetLanguage(0);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.aat([this,this.A2x,this.A6s],0);},UpdateTemperatureUnit:
function(AN){if(this.TemperatureUnit===AN)return;this.TemperatureUnit=AN;A.aat([
this,this.AoG,this.Aqg],0);},UpdateBrightness:function(AN){if(this.AIH===AN)return;
this.AIH=AN;A.aat([this,this.A2l,this.A6k],0);},SetSystemTime:function(Af3){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.Boy.apply(this,arguments);},Boy:function(Af3){},Auf:function(){if(this.
K&&this.K.Auf)return this.K.Auf.apply(this,arguments);else return C.DeviceClass.
A58.apply(this,arguments);},A58:function(){},ACo:function(){if(this.K&&this.K.ACo
)return this.K.ACo.apply(this,arguments);else return C.DeviceClass.A56.apply(this
,arguments);},A56:function(){},Bhn:function(){},UpdateOverlayMenu:function(AN){if(
this.OverlayMenu===AN)return;this.OverlayMenu=AN;A.aat([this,this.AAP,this.AEO],
0);},Cn:function(E){if(this.K&&this.K.Cn)return this.K.Cn.apply(this,arguments);
else return C.DeviceClass.BnY.apply(this,arguments);},BnY:function(E){},AEO:function(
Ao){this.Cn(Ao);},AtT:function(E){if(this.K&&this.K.AtT)return this.K.AtT.apply(
this,arguments);else return C.DeviceClass.Boh.apply(this,arguments);},Boh:function(
E){},A6C:function(Ao){this.AtT(Ao);},UpdateUnderTemp:function(AN){if(this.X4===AN
)return;this.X4=AN;A.aat([this,this.A2V,this.A6C],0);},UpdateSyncState:function(
AN){if(this.SyncState===AN)return;this.SyncState=AN;A.aat([this,this.AN5,this.AUP
],0);},Z_:function(E){if(this.K&&this.K.Z_)return this.K.Z_.apply(this,arguments
);else return C.DeviceClass.Bn9.apply(this,arguments);},Bn9:function(E){A.aa8("%s"
,Nm);},AUP:function(Ao){this.Z_(Ao);},Azk:function(){if(this.K&&this.K.Azk)return this.
K.Azk.apply(this,arguments);else return C.DeviceClass.Bm5.apply(this,arguments);
},Bm5:function(){return A.jm;},UpdatePopup:function(JX,AVu,AVq,AVx){this.A_(JX,AVu
,AVq,AVx,[this,this.BsU]);},PopupStateChanged:function(JX,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.Bos.apply(this,arguments);},Bos:function(JX,Ae){},ABX:function(E){if(
this.K&&this.K.ABX)return this.K.ABX.apply(this,arguments);else return C.DeviceClass.
Boj.apply(this,arguments);},Boj:function(E){},A6D:function(Ao){this.ABX(Ao);},UpdateVibrationOnKeypressEnabled:
function(AN){if(this.ApR===AN)return;this.ApR=AN;A.aat([this,this.A2W,this.A6D],
0);},AcY:function(E){if(this.K&&this.K.AcY)return this.K.AcY.apply(this,arguments
);else return C.DeviceClass.Boi.apply(this,arguments);},Boi:function(E){},AEQ:function(
Ao){this.AcY(Ao);},UpdateVibrationOn:function(A7o){if(this.AQs===A7o)return;this.
AQs=A7o;A.aat([this,this.AAR,this.AEQ],0);},A_:function(JX,AVu,AVq,AVx,Bp4){var Aef=
A._NewObject(C.PopupContext,0);Aef.Id=JX;Aef.Show=AVu;Aef.Aio=AVq;Aef.AiI=AVx;Aef.
AB6=Bp4;this.Alr.Trigger(Aef,false);},BsU:function(H){var As=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!As)this.PopupStateChanged(As.Id,As.PopupState);},AtJ:function(E){
if(this.K&&this.K.AtJ)return this.K.AtJ.apply(this,arguments);else return C.DeviceClass.
Bn2.apply(this,arguments);},Bn2:function(E){},AUM:function(Ao){this.AtJ(Ao);},UpdateRatingMode:
function(AN){if(this.RatingMode===AN)return;this.RatingMode=AN;A.aat([this,this.
AN2,this.AUM],0);},AcP:function(E){if(this.K&&this.K.AcP)return this.K.AcP.apply(
this,arguments);else return C.DeviceClass.BnA.apply(this,arguments);},BnA:function(
E){},Aqf:function(Ao){this.AcP(Ao);},UpdateFlashLightOn:function(A68){if(this.AkA===
A68)return;this.AkA=A68;A.aat([this,this.AoC,this.Aqf],0);},Z$:function(E){if(this.
K&&this.K.Z$)return this.K.Z$.apply(this,arguments);else return C.DeviceClass.Boc.
apply(this,arguments);},Boc:function(E){},A6A:function(Ao){this.Z$(Ao);},UpdateTopLightOn:
function(A7k){if(this.AQd===A7k)return;this.AQd=A7k;A.aat([this,this.A2T,this.A6A
],0);},AcW:function(E){if(this.K&&this.K.AcW)return this.K.AcW.apply(this,arguments
);else return C.DeviceClass.Bn1.apply(this,arguments);},Bn1:function(E){},BoU:function(
Ao){this.AcW(Ao);},UpdateRGBTopLight:function(A7f){if(this.AO$===A7f)return;this.
AO$=A7f;A.aat([this,this.Bec,this.BoU],0);},Atc:function(E){if(this.K&&this.K.Atc
)return this.K.Atc.apply(this,arguments);else return C.DeviceClass.Bnk.apply(this
,arguments);},Bnk:function(E){},BoM:function(Ao){this.Atc(Ao);},UpdateAutoRegistrationMode:
function(A6W){if(this.AutoRegistrationMode===A6W)return;this.AutoRegistrationMode=
A6W;A.aat([this,this.BdE,this.BoM],0);},Ao9:function(E){if(this.K&&this.K.Ao9)return this.
K.Ao9.apply(this,arguments);else return C.DeviceClass.Bn5.apply(this,arguments);
},Bn5:function(E){A.aa8("%s",Cv);},AUO:function(Ao){this.Ao9(Ao);},UpdateScanTransponder:
function(JX,A7m,A7l){if(((this.O6.Id===JX)&&(this.O6.TransponderType===A7m))&&(this.
O6.TransponderProtocol===A7l))return;this.O6.OnSetId(JX);this.O6.AOR(A7m);this.O6.
AOQ(A7l);A.aat([this,this.AN4,this.AUO],0);},P2:function(E){if(this.K&&this.K.P2
)return this.K.P2.apply(this,arguments);else return C.DeviceClass.Bns.apply(this
,arguments);},Bns:function(E){},Ai2:function(Ao){this.P2(Ao);},UpdateDigitsID:function(
A64){if(this.Fn===A64)return;this.Fn=A64;A.aat([this,this.Ah5,this.Ai2],0);},Rq:
function(E){if(this.K&&this.K.Rq)return this.K.Rq.apply(this,arguments);else return C.
DeviceClass.BnX.apply(this,arguments);},BnX:function(E){},Ai3:function(Ao){this.
Rq(Ao);},UpdateOffsetID:function(A7c){if(this.Fb===A7c)return;this.Fb=A7c;A.aat([
this,this.Ah6,this.Ai3],0);},AB1:function(E){if(this.K&&this.K.AB1)return this.K.
AB1.apply(this,arguments);else return C.DeviceClass.Boq.apply(this,arguments);},
Boq:function(E){A.aa8("%s",FK);},AER:function(Ao){this.AB1(Ao);},UpdateWeightValue:
function(AN){if(this.Io===AN)return;this.Io=AN;A.aat([this,this.AAS,this.AER],0);
},AtA:function(E){if(this.K&&this.K.AtA)return this.K.AtA.apply(this,arguments);
else return C.DeviceClass.BnK.apply(this,arguments);},BnK:function(E){},AUF:function(
Ao){this.AtA(Ao);},UpdateMassUnit:function(AN){if(this.MassUnit===AN)return;this.
MassUnit=AN;A.aat([this,this.ANS,this.AUF],0);},AoJ:function(E){if(this.K&&this.
K.AoJ)return this.K.AoJ.apply(this,arguments);else return C.DeviceClass.A52.apply(
this,arguments);},A52:function(E){},A6b:function(Ao){this.AoJ(Ao);},AoK:function(
E){if(this.K&&this.K.AoK)return this.K.AoK.apply(this,arguments);else return C.DeviceClass.
A53.apply(this,arguments);},A53:function(E){},AUA:function(Ao){this.AoK(Ao);},UpdateActiveActions:
function(AN){if(this.Py===AN)return;this.Py=AN;A.aat([this,this.A18,this.A6b],0);
},UpdateActiveActionsOrder:function(AN){if(this.Ary===AN)return;this.Ary=AN;A.aat([
this,this.ANG,this.AUA],0);},Z0:function(E){if(this.K&&this.K.Z0)return this.K.Z0.
apply(this,arguments);else return C.DeviceClass.A54.apply(this,arguments);},A54:
function(E){},A6i:function(Ao){this.Z0(Ao);},UpdateAutoActions:function(AN){if(this.
AutoActions===AN)return;this.AutoActions=AN;A.aat([this,this.A2g,this.A6i],0);},
ACQ:function(){if(this.K&&this.K.ACQ)return this.K.ACQ.apply(this,arguments);else
return C.DeviceClass.BoC.apply(this,arguments);},BoC:function(){},ApH:function(){
if(this.K&&this.K.ApH)return this.K.ApH.apply(this,arguments);else return C.DeviceClass.
BoG.apply(this,arguments);},BoG:function(){},DO:function(E){if(this.K&&this.K.DO
)return this.K.DO.apply(this,arguments);else return C.DeviceClass.Bnh.apply(this
,arguments);},Bnh:function(E){},BoL:function(Ao){this.DO(Ao);},UpdateAnimalType:
function(D3){if(this.AnimalType===D3)return;this.AnimalType=D3;A.aat([this,this.
O0,this.BoL],0);},AtU:function(E){if(this.K&&this.K.AtU)return this.K.AtU.apply(
this,arguments);else return C.DeviceClass.Boo.apply(this,arguments);},Boo:function(
E){},A6I:function(Ao){this.AtU(Ao);},UpdateWeightRecordingMode:function(A7q){if(
this.WeightRecordingMode===A7q)return;this.WeightRecordingMode=A7q;A.aat([this,this.
A24,this.A6I],0);},ABE:function(E){if(this.K&&this.K.ABE)return this.K.ABE.apply(
this,arguments);else return C.DeviceClass.BnZ.apply(this,arguments);},BnZ:function(
E){A.aa8("%s",Od);},AUK:function(Ao){this.ABE(Ao);},UpdatePredictedTempValue:function(
AN){if(this.ACb===AN)return;this.ACb=AN;A.aat([this,this.ANZ,this.AUK],0);},UV:function(
Oi){if(this.K&&this.K.UV)return this.K.UV.apply(this,arguments);else return C.DeviceClass.
Box.apply(this,arguments);},Box:function(Oi){},ABa:function(E){if(this.K&&this.K.
ABa)return this.K.ABa.apply(this,arguments);else return C.DeviceClass.Bnr.apply(
this,arguments);},Bnr:function(E){},AEK:function(Ao){this.ABa(Ao);},UpdateDemoMode:
function(AN){if(this.G9===AN)return;this.G9=AN;A.aat([this,this.AAK,this.AEK],0);
},AAX:function(E){if(this.K&&this.K.AAX)return this.K.AAX.apply(this,arguments);
else return C.DeviceClass.Bna.apply(this,arguments);},Bna:function(E){},A6d:function(
Ao){this.AAX(Ao);},UpdateAgeRegistration:function(A7b){if(this.Ake===A7b)return;
this.Ake=A7b;A.aat([this,this.A1$,this.A6d],0);},AtV:function(E){if(this.K&&this.
K.AtV)return this.K.AtV.apply(this,arguments);else return C.DeviceClass.Bop.apply(
this,arguments);},Bop:function(E){},A6J:function(Ao){this.AtV(Ao);},UpdateWeightRecordingScope:
function(A7g){if(this.WeightRecordingScope===A7g)return;this.WeightRecordingScope=
A7g;A.aat([this,this.A25,this.A6J],0);},J7:function(E){if(this.K&&this.K.J7)return this.
K.J7.apply(this,arguments);else return C.DeviceClass.BnE.apply(this,arguments);}
,BnE:function(E){},A6r:function(Ao){this.J7(Ao);},UpdateGender:function(Lm){if(this.
Gender===Lm)return;this.Gender=Lm;A.aat([this,this.Xu,this.A6r],0);},Ao0:function(
E){if(this.K&&this.K.Ao0)return this.K.Ao0.apply(this,arguments);else return C.DeviceClass.
BnG.apply(this,arguments);},BnG:function(E){},Avn:function(Ao){this.Ao0(Ao);},UpdateIDLastUsedMale:
function(Qk){if(this.Ass===Qk)return;this.Ass=Qk;A.aat([this,this.As3,this.Avn],
0);},AoZ:function(E){if(this.K&&this.K.AoZ)return this.K.AoZ.apply(this,arguments
);else return C.DeviceClass.BnF.apply(this,arguments);},BnF:function(E){},Avm:function(
Ao){this.AoZ(Ao);},UpdateIDLastUsedFemale:function(Qk){if(this.Asr===Qk)return;this.
Asr=Qk;A.aat([this,this.As2,this.Avm],0);},ZZ:function(E){if(this.K&&this.K.ZZ)return this.
K.ZZ.apply(this,arguments);else return C.DeviceClass.Bnf.apply(this,arguments);}
,Bnf:function(E){},AEJ:function(Ao){this.ZZ(Ao);},UpdateAnimalListContent:function(
AN){if(this.Jd===AN)return;this.Jd=AN;A.aat([this,this.AAG,this.AEJ],0);},AAZ:function(
E){if(this.K&&this.K.AAZ)return this.K.AAZ.apply(this,arguments);else return C.DeviceClass.
Bnb.apply(this,arguments);},Bnb:function(E){},A6e:function(Ao){this.AAZ(Ao);},UpdateAlarmListAction:
function(AN){if(this.AHT===AN)return;this.AHT=AN;A.aat([this,this.A2b,this.A6e],
0);},ABe:function(E){if(this.K&&this.K.ABe)return this.K.ABe.apply(this,arguments
);else return C.DeviceClass.Bnz.apply(this,arguments);},Bnz:function(E){},A6n:function(
Ao){this.ABe(Ao);},UpdateFlashLightInMeasureState:function(A69){if(this.Akz===A69
)return;this.Akz=A69;A.aat([this,this.A2o,this.A6n],0);},AcL:function(E){if(this.
K&&this.K.AcL)return this.K.AcL.apply(this,arguments);else return C.DeviceClass.
Bne.apply(this,arguments);},Bne:function(E){},AUC:function(Ao){this.AcL(Ao);},UpdateAnimalInfoContent:
function(AN){if(this.DK===AN)return;this.DK=AN;A.aat([this,this.ANI,this.AUC],0);
},AB0:function(E){if(this.K&&this.K.AB0)return this.K.AB0.apply(this,arguments);
else return C.DeviceClass.Bok.apply(this,arguments);},Bok:function(E){},A6E:function(
Ao){this.AB0(Ao);},UpdateWatchListAction:function(AN){if(this.AQu===AN)return;this.
AQu=AN;A.aat([this,this.A20,this.A6E],0);},ABf:function(E){if(this.K&&this.K.ABf
)return this.K.ABf.apply(this,arguments);else return C.DeviceClass.BnB.apply(this
,arguments);},BnB:function(E){},A6p:function(Ao){this.ABf(Ao);},UpdateFreshCowListAction:
function(AN){if(this.AKf===AN)return;this.AKf=AN;A.aat([this,this.A2q,this.A6p],
0);},App:function(H){if(this.K&&this.K.App)return this.K.App.apply(this,arguments
);else return C.DeviceClass.Bot.apply(this,arguments);},Bot:function(H){},Bx5:function(
s){this.App(s);},Apq:function(H){if(this.K&&this.K.Apq)return this.K.Apq.apply(this
,arguments);else return C.DeviceClass.Bou.apply(this,arguments);},Bou:function(H
){},Bx6:function(s){this.Apq(s);},Ata:function(E){if(this.K&&this.K.Ata)return this.
K.Ata.apply(this,arguments);else return C.DeviceClass.Bni.apply(this,arguments);
},Bni:function(E){},A6g:function(Ao){this.Ata(Ao);},Ao_:function(E){if(this.K&&this.
K.Ao_)return this.K.Ao_.apply(this,arguments);else return C.DeviceClass.Boa.apply(
this,arguments);},Boa:function(E){},A6y:function(Ao){this.Ao_(Ao);},Ao$:function(
E){if(this.K&&this.K.Ao$)return this.K.Ao$.apply(this,arguments);else return C.DeviceClass.
Bob.apply(this,arguments);},Bob:function(E){},A6z:function(Ao){this.Ao$(Ao);},Aps:
function(H){if(this.K&&this.K.Aps)return this.K.Aps.apply(this,arguments);else return C.
DeviceClass.Bov.apply(this,arguments);},Bov:function(H){},Bx7:function(s){this.Aps(
s);},UpdateTemperaturesLowString:function(AN){if(this.AC0===AN)return;this.AC0=AN;
A.aat([this,this.A2Q,this.A6z],0);},UpdateTemperaturesHighString:function(AN){if(
this.ACZ===AN)return;this.ACZ=AN;A.aat([this,this.A2P,this.A6y],0);},UpdateAnimalTypesString:
function(AN){if(this.Aya===AN)return;this.Aya=AN;A.aat([this,this.A2e,this.A6g],
0);},ABz:function(E){if(this.K&&this.K.ABz)return this.K.ABz.apply(this,arguments
);else return C.DeviceClass.BnW.apply(this,arguments);},BnW:function(E){},AUI:function(
Ao){this.ABz(Ao);},UpdateNoTransponderListAction:function(AN){if(this.ANx===AN)return;
this.ANx=AN;A.aat([this,this.ANW,this.AUI],0);},Atv:function(E){if(this.K&&this.
K.Atv)return this.K.Atv.apply(this,arguments);else return C.DeviceClass.BnD.apply(
this,arguments);},BnD:function(E){},BoQ:function(Ao){this.Atv(Ao);},UpdateFreshCowsHideMeasured:
function(AN){if(this.AkD===AN)return;this.AkD=AN;A.aat([this,this.BdX,this.BoQ],
0);},Ao5:function(E){if(this.K&&this.K.Ao5)return this.K.Ao5.apply(this,arguments
);else return C.DeviceClass.BnT.apply(this,arguments);},BnT:function(E){},A6u:function(
Ao){this.Ao5(Ao);},UpdateNaisIdLastUsedMale:function(AdN){if(this.AAv===AdN)return;
this.AAv=AdN;A.aat([this,this.A2C,this.A6u],0);},Ao4:function(E){if(this.K&&this.
K.Ao4)return this.K.Ao4.apply(this,arguments);else return C.DeviceClass.BnS.apply(
this,arguments);},BnS:function(E){},A6t:function(Ao){this.Ao4(Ao);},UpdateNaisIdLastUsedFemale:
function(AdN){if(this.AAu===AdN)return;this.AAu=AdN;A.aat([this,this.A2B,this.A6t
],0);},AtF:function(E){if(this.K&&this.K.AtF)return this.K.AtF.apply(this,arguments
);else return C.DeviceClass.BnQ.apply(this,arguments);},BnQ:function(E){},Avp:function(
Ao){this.AtF(Ao);},UpdateNaisIdIncrementMale:function(Aja){if(this.ANg===Aja)return;
this.ANg=Aja;A.aat([this,this.As6,this.Avp],0);},AtE:function(E){if(this.K&&this.
K.AtE)return this.K.AtE.apply(this,arguments);else return C.DeviceClass.BnP.apply(
this,arguments);},BnP:function(E){},Avo:function(Ao){this.AtE(Ao);},UpdateNaisIdIncrementFemale:
function(Aja){if(this.ANf===Aja)return;this.ANf=Aja;A.aat([this,this.As5,this.Avo
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.A59.apply(this,arguments
);},A59:function(){},Alc:function(E){if(this.K&&this.K.Alc)return this.K.Alc.apply(
this,arguments);else return C.DeviceClass.Bnm.apply(this,arguments);},Bnm:function(
E){},A6j:function(Ao){this.Alc(Ao);},UpdateBootloaderMessage:function(AN){if(this.
AnI===AN)return;this.AnI=AN;A.aat([this,this.A2k,this.A6j],0);},AAV:function(E){
if(this.K&&this.K.AAV)return this.K.AAV.apply(this,arguments);else return C.DeviceClass.
Bm9.apply(this,arguments);},Bm9:function(E){},A6a:function(Ao){this.AAV(Ao);},UpdateActionListAction:
function(AN){if(this.Ax5===AN)return;this.Ax5=AN;A.aat([this,this.A17,this.A6a],
0);},As_:function(E){if(this.K&&this.K.As_)return this.K.As_.apply(this,arguments
);else return C.DeviceClass.Bm_.apply(this,arguments);},Bm_:function(E){},BoK:function(
Ao){this.As_(Ao);},UpdateActionListHideMeasured:function(AN){if(this.Akc===AN)return;
this.Akc=AN;A.aat([this,this.BdA,this.BoK],0);},SS:function(E){if(this.K&&this.K.
SS)return this.K.SS.apply(this,arguments);else return C.DeviceClass.Bnd.apply(this
,arguments);},Bnd:function(E){},Al7:function(Ao){this.SS(Ao);},UpdateAnimalIdGenerationMethod:
function(A7v){if(this.HM===A7v)return;this.HM=A7v;A.aat([this,this.Ak8,this.Al7]
,0);},Atn:function(E){if(this.K&&this.K.Atn)return this.K.Atn.apply(this,arguments
);else return C.DeviceClass.Bnt.apply(this,arguments);},Bnt:function(E){},AUD:function(
Ao){this.Atn(Ao);},UpdateDirectionOfCountingFemale:function(Ai5){if(this.AyV===Ai5
)return;this.AyV=Ai5;A.aat([this,this.ANM,this.AUD],0);},Ato:function(E){if(this.
K&&this.K.Ato)return this.K.Ato.apply(this,arguments);else return C.DeviceClass.
Bnu.apply(this,arguments);},Bnu:function(E){},AUE:function(Ao){this.Ato(Ao);},UpdateDirectionOfCountingMale:
function(Ai5){if(this.AyW===Ai5)return;this.AyW=Ai5;A.aat([this,this.ANN,this.AUE
],0);},Atp:function(E){if(this.K&&this.K.Atp)return this.K.Atp.apply(this,arguments
);else return C.DeviceClass.Bnv.apply(this,arguments);},Bnv:function(E){},Avl:function(
Ao){this.Atp(Ao);},UpdateDirectionOfCountingUnisex:function(Ai5){if(this.ArX===Ai5
)return;this.ArX=Ai5;A.aat([this,this.As1,this.Avl],0);},Ao1:function(E){if(this.
K&&this.K.Ao1)return this.K.Ao1.apply(this,arguments);else return C.DeviceClass.
BnH.apply(this,arguments);},BnH:function(E){},Al8:function(Ao){this.Ao1(Ao);},UpdateIDLastUsedUnisex:
function(Qk){if(this.Aob===Qk)return;this.Aob=Qk;A.aat([this,this.Ak_,this.Al8],
0);},Ao6:function(E){if(this.K&&this.K.Ao6)return this.K.Ao6.apply(this,arguments
);else return C.DeviceClass.BnU.apply(this,arguments);},BnU:function(E){},AUH:function(
Ao){this.Ao6(Ao);},UpdateNaisIdLastUsedUnisex:function(AdN){if(this.AsV===AdN)return;
this.AsV=AdN;A.aat([this,this.ANU,this.AUH],0);},AtG:function(E){if(this.K&&this.
K.AtG)return this.K.AtG.apply(this,arguments);else return C.DeviceClass.BnR.apply(
this,arguments);},BnR:function(E){},Avq:function(Ao){this.AtG(Ao);},UpdateNaisIdIncrementUnisex:
function(Aja){if(this.ANh===Aja)return;this.ANh=Aja;A.aat([this,this.As7,this.Avq
],0);},Ald:function(E){if(this.K&&this.K.Ald)return this.K.Ald.apply(this,arguments
);else return C.DeviceClass.Bnx.apply(this,arguments);},Bnx:function(E){},AEL:function(
Ao){this.Ald(Ao);},UpdateEartagNrAssignmentMode:function(Ai6){if(this.EartagNrAssignmentMode===
Ai6)return;this.EartagNrAssignmentMode=Ai6;A.aat([this,this.AAL,this.AEL],0);},O1:
function(E){if(this.K&&this.K.O1)return this.K.O1.apply(this,arguments);else return C.
DeviceClass.Bno.apply(this,arguments);},Bno:function(E){},BoO:function(Ao){this.
O1(Ao);},UpdateBreed:function(AaM){if(this.Breed===AaM)return;this.Breed=AaM;A.aat([
this,this.AsY,this.BoO],0);},ABu:function(E){if(this.K&&this.K.ABu)return this.K.
ABu.apply(this,arguments);else return C.DeviceClass.BnM.apply(this,arguments);},
BnM:function(E){},BoS:function(Ao){this.ABu(Ao);},UpdateMiddlewareVersions:function(
Ph,AVm,AVn,AVt,AVb){this.Rl.OnSetTimestamp(Ph);this.Rl.ABs(AVm);this.Rl.ABw(AVn);
this.Rl.ABH(AVt);this.Rl.AA$(AVb);A.aat([this,this.Bd9,this.BoS],0);},ABr:function(
E){if(this.K&&this.K.ABr)return this.K.ABr.apply(this,arguments);else return C.DeviceClass.
BnJ.apply(this,arguments);},BnJ:function(E){},BoR:function(Ao){this.ABr(Ao);},UpdateMainboardVersions:
function(Ph,AVk,AVl,AVj,AVz,AVA,AVy){this.PX.OnSetTimestamp(Ph);this.PX.ABp(AVk);
this.PX.ABq(AVl);this.PX.ABo(AVj);this.PX.ABS(AVz);this.PX.ABT(AVA);this.PX.ABR(
AVy);A.aat([this,this.Bd8,this.BoR],0);},ABU:function(E){if(this.K&&this.K.ABU)return this.
K.ABU.apply(this,arguments);else return C.DeviceClass.Bod.apply(this,arguments);
},Bod:function(E){},BoY:function(Ao){this.ABU(Ao);},UpdateTorchboardVersions:function(
Ph,AVk,AVl,AVj,AVz,AVA,AVy){this.RE.OnSetTimestamp(Ph);this.RE.ABp(AVk);this.RE.
ABq(AVl);this.RE.ABo(AVj);this.RE.ABS(AVz);this.RE.ABT(AVA);this.RE.ABR(AVy);A.aat([
this,this.Beu,this.BoY],0);},AA1:function(E){if(this.K&&this.K.AA1)return this.K.
AA1.apply(this,arguments);else return C.DeviceClass.Bnn.apply(this,arguments);},
Bnn:function(E){},BoN:function(Ao){this.AA1(Ao);},UpdateBootloaderVersions:function(
Ph,AVm,AVn,AVt,AVb){this.QO.OnSetTimestamp(Ph);this.QO.ABs(AVm);this.QO.ABw(AVn);
this.QO.ABH(AVt);this.QO.AA$(AVb);A.aat([this,this.BdG,this.BoN],0);},ABb:function(
E){if(this.K&&this.K.ABb)return this.K.ABb.apply(this,arguments);else return C.DeviceClass.
Bnw.apply(this,arguments);},Bnw:function(E){},A6m:function(Ao){this.ABb(Ao);},UpdateDryCowListAction:
function(AN){if(this.AJA===AN)return;this.AJA=AN;A.aat([this,this.A2m,this.A6m],
0);},AFF:function(AVd){if(this.K&&this.K.AFF)return this.K.AFF.apply(this,arguments
);else return C.DeviceClass.Bo9.apply(this,arguments);},Bo9:function(AVd){return false;
},ABy:function(E){if(this.K&&this.K.ABy)return this.K.ABy.apply(this,arguments);
else return C.DeviceClass.BnV.apply(this,arguments);},BnV:function(E){},A6v:function(
Ao){this.ABy(Ao);},UpdateNoNaisIdListAction:function(AN){if(this.ANs===AN)return;
this.ANs=AN;A.aat([this,this.A2D,this.A6v],0);},ABG:function(E){if(this.K&&this.
K.ABG)return this.K.ABG.apply(this,arguments);else return C.DeviceClass.Bn3.apply(
this,arguments);},Bn3:function(E){},A6w:function(Ao){this.ABG(Ao);},UpdateRegistrationsListAction:
function(AN){if(this.APl===AN)return;this.APl=AN;A.aat([this,this.A2F,this.A6w],
0);},BatchResetBirthAnnouncementPending:function(){var Cx=A._NewObject(C.Animal,
0);var P;var AGM=0;var Agm=A._GetAutoObject(C.Device).Aq.Filter;var Bb=A._GetAutoObject(
C.Helper).LO();var A7K=A._NewObject(C.BoolFilterCriterion,0);A7K.Initialize(37,0
,true,false);Bb.CO(A7K);A._GetAutoObject(C.Device).Aq.Bo(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Aq.Cd();P++){Cx.Fo(P,A._GetAutoObject(C.Device).Aq);Cx.Alg(false);Cx.Cr(
A._GetAutoObject(C.Device).Aq);AGM++;}A._GetAutoObject(C.Device).Aq.Bo(Agm);return AGM;
},UpdateTransferProgress:function(AN){if(this.Aur===AN)return;this.Aur=AN;A.aat([
this,this.AN7,this.AUQ],0);},ABV:function(E){if(this.K&&this.K.ABV)return this.K.
ABV.apply(this,arguments);else return C.DeviceClass.Boe.apply(this,arguments);},
Boe:function(E){A.aa8("%s",Nn);},AUQ:function(Ao){this.ABV(Ao);},UpdateTransferTarget:
function(AN){if(this.Adq===AN)return;this.Adq=AN;A.aat([this,this.A2U,this.A6B],
0);},Apa:function(E){if(this.K&&this.K.Apa)return this.K.Apa.apply(this,arguments
);else return C.DeviceClass.Bof.apply(this,arguments);},Bof:function(E){A.aa8("%s"
,Ka);},A6B:function(Ao){this.Apa(Ao);},ApG:function(){if(this.K&&this.K.ApG)return this.
K.ApG.apply(this,arguments);else return C.DeviceClass.BoF.apply(this,arguments);
},BoF:function(){},AtI:function(E){if(this.K&&this.K.AtI)return this.K.AtI.apply(
this,arguments);else return C.DeviceClass.Bn0.apply(this,arguments);},Bn0:function(
E){},AUL:function(Ao){this.AtI(Ao);},UpdatePremisesID:function(Qk){if(this.Ac3===
Qk)return;this.Ac3=Qk;A.aat([this,this.AN0,this.AUL],0);},AtD:function(E){if(this.
K&&this.K.AtD)return this.K.AtD.apply(this,arguments);else return C.DeviceClass.
BnO.apply(this,arguments);},BnO:function(E){},AEN:function(Ao){this.AtD(Ao);},UpdateMotherSelectionDriedOffFilter:
function(AN){if(this.ZT===AN)return;this.ZT=AN;A.aat([this,this.AAO,this.AEN],0);
},ABg:function(E){if(this.K&&this.K.ABg)return this.K.ABg.apply(this,arguments);
else return C.DeviceClass.BnC.apply(this,arguments);},BnC:function(E){},A6q:function(
Ao){this.ABg(Ao);},UpdateFreshCowSpan:function(AN){if(this.An4===AN)return;this.
An4=AN;A.aat([this,this.A2r,this.A6q],0);},UpdateUSBState:function(A7n){if(this.
AiM===A7n)return;this.AiM=A7n;A.aat([this,this.AcK,this.AdH],0);},ABW:function(E
){if(this.K&&this.K.ABW)return this.K.ABW.apply(this,arguments);else return C.DeviceClass.
Bog.apply(this,arguments);},Bog:function(E){A.aa8("%s",EG);},AdH:function(Ao){this.
ABW(Ao);},Auj:function(AfZ){if(this.K&&this.K.Auj)return this.K.Auj.apply(this,arguments
);else return C.DeviceClass.Boz.apply(this,arguments);},Boz:function(AfZ){return A.
_NewObject(C.Ahj,0);},AsM:function(){if(this.K&&this.K.AsM)return this.K.AsM.apply(
this,arguments);else return C.DeviceClass.Bm8.apply(this,arguments);},Bm8:function(
){return false;},ArS:function(Yj){if(this.K&&this.K.ArS)return this.K.ArS.apply(
this,arguments);else return C.DeviceClass.Bm3.apply(this,arguments);},Bm3:function(
Yj){},ABK:function(E){if(this.K&&this.K.ABK)return this.K.ABK.apply(this,arguments
);else return C.DeviceClass.Bn6.apply(this,arguments);},Bn6:function(E){},BoV:function(
Ao){this.ABK(Ao);},UpdateSerialNumber:function(AN){if(this.AfF===AN)return;this.
AfF=AN;A.aat([this,this.Bei,this.BoV],0);},As$:function(E){if(this.K&&this.K.As$
)return this.K.As$.apply(this,arguments);else return C.DeviceClass.Bnc.apply(this
,arguments);},Bnc:function(E){},AUB:function(Ao){this.As$(Ao);},UpdateAnimalIdAutoGenerationMethod:
function(A7u){if(this.Aev===A7u)return;this.Aev=A7u;A.aat([this,this.ANH,this.AUB
],0);},AyK:function(){return false;},ACp:function(){return false;},ABL:function(
E){if(this.K&&this.K.ABL)return this.K.ABL.apply(this,arguments);else return C.DeviceClass.
Bn7.apply(this,arguments);},Bn7:function(E){},A6x:function(Ao){this.ABL(Ao);},UpdateShutdownTimer:
function(AN){if(this.APN===AN)return;this.APN=AN;A.aat([this,this.A2M,this.A6x],
0);},AoO:function(E){if(this.K&&this.K.AoO)return this.K.AoO.apply(this,arguments
);else return C.DeviceClass.Bng.apply(this,arguments);},Bng:function(E){},A6f:function(
Ao){this.AoO(Ao);},UpdateAnimalListInfoItemMode:function(AN){if(this.Akg===AN)return;
this.Akg=AN;A.aat([this,this.A2c,this.A6f],0);},Apt:function(H){if(this.K&&this.
K.Apt)return this.K.Apt.apply(this,arguments);else return C.DeviceClass.Bow.apply(
this,arguments);},Bow:function(H){},Bx8:function(s){this.Apt(s);},Apd:function(E
){if(this.K&&this.K.Apd)return this.K.Apd.apply(this,arguments);else return C.DeviceClass.
Bom.apply(this,arguments);},Bom:function(E){},A6G:function(Ao){this.Apd(Ao);},Ape:
function(E){if(this.K&&this.K.Ape)return this.K.Ape.apply(this,arguments);else return C.
DeviceClass.Bon.apply(this,arguments);},Bon:function(E){},A6H:function(Ao){this.
Ape(Ao);},UpdateWeightGainsLowString:function(AN){if(this.ADh===AN)return;this.ADh=
AN;A.aat([this,this.A23,this.A6H],0);},UpdateWeightGainsHighString:function(AN){
if(this.ADg===AN)return;this.ADg=AN;A.aat([this,this.A22,this.A6G],0);},Atb:function(
E){if(this.K&&this.K.Atb)return this.K.Atb.apply(this,arguments);else return C.DeviceClass.
Bnj.apply(this,arguments);},Bnj:function(E){},A6h:function(Ao){this.Atb(Ao);},UpdateAnimalTypesWeightGainsString:
function(AN){if(this.Ayb===AN)return;this.Ayb=AN;A.aat([this,this.A2f,this.A6h],
0);},Apc:function(E){if(this.K&&this.K.Apc)return this.K.Apc.apply(this,arguments
);else return C.DeviceClass.Bol.apply(this,arguments);},Bol:function(E){},A6F:function(
Ao){this.Apc(Ao);},Apf:function(E){if(this.K&&this.K.Apf)return this.K.Apf.apply(
this,arguments);else return C.DeviceClass.Bor.apply(this,arguments);},Bor:function(
E){},A6K:function(Ao){this.Apf(Ao);},UpdateWeightValueBirthString:function(AN){if(
this.ADj===AN)return;this.ADj=AN;A.aat([this,this.A26,this.A6K],0);},UpdateWeightGainsAverageString:
function(AN){if(this.ADf===AN)return;this.ADf=AN;A.aat([this,this.A21,this.A6F],
0);},Atq:function(E){if(this.K&&this.K.Atq)return this.K.Atq.apply(this,arguments
);else return C.DeviceClass.Bny.apply(this,arguments);},Bny:function(E){},BoP:function(
Ao){this.Atq(Ao);},UpdateEvaluationAnimalType:function(D3){if(this.Ay3===D3)return;
this.Ay3=D3;A.aat([this,this.BdQ,this.BoP],0);},UpdateStartScreen:function(AN){if(
this.Aul===AN)return;this.Aul=AN;A.aat([this,this.Bek,this.BoW],0);},AtM:function(
E){if(this.K&&this.K.AtM)return this.K.AtM.apply(this,arguments);else return C.DeviceClass.
Bn8.apply(this,arguments);},Bn8:function(E){},BoW:function(Ao){this.AtM(Ao);},Az_:
function(){if(this.K&&this.K.Az_)return this.K.Az_.apply(this,arguments);else return C.
DeviceClass.Bm6.apply(this,arguments);},Bm6:function(){return 1;},Az$:function(){
if(this.K&&this.K.Az$)return this.K.Az$.apply(this,arguments);else return C.DeviceClass.
Bm7.apply(this,arguments);},Bm7:function(){return 1;},GetCommitCount:function(){
return 1826;},GetCommitEpoch:function(){return 1685968304;},GetCommitHash:function(
){return A.kh.Bay;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AAF:function(){return this.J3;}
,AsX:function(){return this.Y4;},AsZ:function(){return this.Akn;},AN3:function(){
return this.ScanState;},AAM:function(){return this.MeasureState;},AAQ:function(){
return this.JR;},A2x:function(){return this.Language;},AoG:function(){return this.
TemperatureUnit;},A2l:function(){return this.AIH;},ANT:function(){return this.AAt;
},AAP:function(){return this.OverlayMenu;},A2V:function(){return this.X4;},AN5:function(
){return this.SyncState;},A2W:function(){return this.ApR;},AAR:function(){return this.
AQs;},AN2:function(){return this.RatingMode;},AoC:function(){return this.AkA;},A2T:
function(){return this.AQd;},Bec:function(){return this.AO$;},BdE:function(){return this.
AutoRegistrationMode;},AN4:function(){return this.O6;},Ah5:function(){return this.
Fn;},Ah6:function(){return this.Fb;},AAS:function(){return this.Io;},ANS:function(
){return this.MassUnit;},A18:function(){return this.Py;},ANG:function(){return this.
Ary;},A2g:function(){return this.AutoActions;},O0:function(){return this.AnimalType;
},A24:function(){return this.WeightRecordingMode;},ANZ:function(){return this.ACb;
},AAK:function(){return this.G9;},A1$:function(){return this.Ake;},A25:function(
){return this.WeightRecordingScope;},Xu:function(){return this.Gender;},As3:function(
){return this.Ass;},As2:function(){return this.Asr;},AAG:function(){return this.
Jd;},A2b:function(){return this.AHT;},A2o:function(){return this.Akz;},ANI:function(
){return this.DK;},A20:function(){return this.AQu;},A2q:function(){return this.AKf;
},A2e:function(){return this.Aya;},A2P:function(){return this.ACZ;},A2Q:function(
){return this.AC0;},ANW:function(){return this.ANx;},BdX:function(){return this.
AkD;},A2C:function(){return this.AAv;},A2B:function(){return this.AAu;},As6:function(
){return this.ANg;},As5:function(){return this.ANf;},A2k:function(){return this.
AnI;},A17:function(){return this.Ax5;},BdA:function(){return this.Akc;},Ak8:function(
){return this.HM;},ANM:function(){return this.AyV;},ANN:function(){return this.AyW;
},As1:function(){return this.ArX;},Ak_:function(){return this.Aob;},ANU:function(
){return this.AsV;},As7:function(){return this.ANh;},AAL:function(){return this.
EartagNrAssignmentMode;},AsY:function(){return this.Breed;},Bd9:function(){return this.
Rl;},Bd8:function(){return this.PX;},Beu:function(){return this.RE;},BdG:function(
){return this.QO;},A2m:function(){return this.AJA;},A2D:function(){return this.ANs;
},A2F:function(){return this.APl;},AN7:function(){return this.Aur;},A2U:function(
){return this.Adq;},AN0:function(){return this.Ac3;},AAO:function(){return this.
ZT;},A2r:function(){return this.An4;},AcK:function(){return this.AiM;},Bei:function(
){return this.AfF;},ANH:function(){return this.Aev;},A2M:function(){return this.
APN;},A2c:function(){return this.Akg;},A22:function(){return this.ADg;},A23:function(
){return this.ADh;},A2f:function(){return this.Ayb;},A21:function(){return this.
ADf;},A26:function(){return this.ADj;},BdQ:function(){return this.Ay3;},Bek:function(
){return this.Aul;},_Init:function(aArg){C.Table._Init.call(this.Aq={I:this},0);
C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.call(this.Aet={I:this},0);A.
Core.A42._Init.call(this.Alr={I:this},0);C.Table._Init.call(this.OD={I:this},0);
this.__proto__=C.DeviceClass;this.Aq.OnSetId(0);this.Bt.OnSetId(1);this.Aet.OnSetId(
3);this.OD.OnSetId(4);this.O6=A._NewObject(C.Transponder,0);this.Rl=A._NewObject(
C.Aui,0);this.PX=A._NewObject(C.Asl,0);this.RE=A._NewObject(C.Asl,0);this.QO=A._NewObject(
C.Aui,0);var KN=this._variants();if(KN){this.K={};KN._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Aq.
_Done();this.Bt._Done();this.Aet._Done();this.Alr._Done();this.OD._Done();A.hJ--;
},_ReInit:function(){this.Aq._ReInit();this.Bt._ReInit();this.Aet._ReInit();this.
Alr._ReInit();this.OD._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.O6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rl)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.PX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.RE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QO)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Alr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.DeviceClass._variants();},K:null,I:null,_cycle:0,_observers:
null,_className:"Device::DeviceClass"};C.Device={_Init:function(){C.DeviceClass.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.ScreenType={
UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:7,AnimalList:
8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:11,AlarmList:12
,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16,TemperatureSettings:
17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:21
,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:
25,NewAnimals:26,NewAnimalManualData:27,AnimalActionUnregister:28,AnimalActionNewbornCare:
29,NewAnimalTransponderData:30,SetTransponderScreen:31,WeightListScreen:32,AutoActionScanScreen:
33,ManualActionScanScreen:34,AnimalSingleInfoScreen:35,AnimalListActions:36,InitializationSettings:
37,ControlledPowerOff:38,ChargeWarning:39,AlarmListFilter:40,WatchListFilter:41,
AlarmListActions:42,ControlListActions:43,WatchListActions:44,DataAcquisitionSettings:
45,FreshCowList:46,FreshCowListFilter:47,FreshCowListActions:48,SetSaveTransponderScreen:
49,NoTransponderList:50,NoTransponderListFilter:51,NoTransponderListActions:52,AnimalActionPerished:
53,NewAnimalSetTransponderScreen:54,AutoAssignIDsSettings:55,AnimalMultiInfoScreen:
56,MultiInfoActionsScreen:57,ActionList:58,ActionListFilter:59,ActionListActions:
60,Update:61,NewAnimalCalvingData:62,NewAnimalsSetTransponderScreen:63,EvaluationTemperatures:
64,EvaluationWeights:65,EvaluationRatings:66,EvaluationLosses:67,TemperatureMeasurement:
68,DryCowList:69,DryCowListFilter:70,DryCowListActions:71,DeviceMain:72,DeviceService:
73,DeviceCheck:74,EvaluationMenuWeights:75,EvaluationBirthWeights:76,EvaluationWeightsRecent:
77,ListsMain:78,ListsIdManagement:79,NoNaisIdList:80,NoNaisIdListFilter:81,NoNaisIdListActions:
82,RegistrationsListFilter:83,RegistrationsListActions:84,RegistrationsList:85,AnimalRegistrationDetails:
86,PremisesSettings:87,NewMenu:88,NewAnimalLoss:89,MotherScanScreen:90,SetSaveNaisIdScreen:
91,EditAnimalDataNaisId:92,DeviceInfo:93,DeviceDatamanagement:94,AnimalEvaluationFilter:
95,YoungNoTransponderList:96,YoungNoTransponderListFilter:97,YoungNoTransponderListActions:
98,LAST:99};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.
MeasureState={Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
AY:A.jm,Ab2:function(){var At=A._NewObject(C.StringFilterCriterion,0);At.F0(this
);return At;},F0:function(AK){C.FilterCriterion.F0.call(this,AK);var At=(C.StringFilterCriterion.
isPrototypeOf(AK)?AK:null);if(!!At)this.AY=At.AY;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={Cp:function(Z,AQ){if(this.K&&this.K.Cp)return this.K.Cp.apply(this,arguments
);else return C.ITable.Cp.apply(this,arguments);},Ub:function(Z,AQ){if(this.K&&this.
K.Ub)return this.K.Ub.apply(this,arguments);else return C.ITable.Ub.apply(this,arguments
);},Hq:function(Z,AQ){if(this.K&&this.K.Hq)return this.K.Hq.apply(this,arguments
);else return C.ITable.Hq.apply(this,arguments);},OnSetId:function(E){if(this.K&&
this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.ITable.
OnSetId.apply(this,arguments);},Cd:function(){if(this.K&&this.K.Cd)return this.K.
Cd.apply(this,arguments);else return C.ITable.Cd.apply(this,arguments);},Bo:function(
E){if(this.K&&this.K.Bo)return this.K.Bo.apply(this,arguments);else return C.ITable.
Bo.apply(this,arguments);},Uc:function(Z,AQ){if(this.K&&this.K.Uc)return this.K.
Uc.apply(this,arguments);else return C.ITable.Uc.apply(this,arguments);},Q_:function(
Z,AQ){if(this.K&&this.K.Q_)return this.K.Q_.apply(this,arguments);else return C.
ITable.Q_.apply(this,arguments);},NQ:function(){if(this.K&&this.K.NQ)return this.
K.NQ.apply(this,arguments);else return C.ITable.NQ.apply(this,arguments);},NS:function(
Amh){if(this.K&&this.K.NS)return this.K.NS.apply(this,arguments);else return C.ITable.
NS.apply(this,arguments);},WU:function(){if(this.K&&this.K.WU)return this.K.WU.apply(
this,arguments);else return C.ITable.WU.apply(this,arguments);},XQ:function(Z,AQ
,CK){if(this.K&&this.K.XQ)return this.K.XQ.apply(this,arguments);else return C.ITable.
XQ.apply(this,arguments);},GG:function(Z,AQ,CK){if(this.K&&this.K.GG)return this.
K.GG.apply(this,arguments);else return C.ITable.GG.apply(this,arguments);},XP:function(
Z,AQ,CK){if(this.K&&this.K.XP)return this.K.XP.apply(this,arguments);else return C.
ITable.XP.apply(this,arguments);},My:function(Z,AQ,CK){if(this.K&&this.K.My)return this.
K.My.apply(this,arguments);else return C.ITable.My.apply(this,arguments);},XO:function(
Z,AQ,CK){if(this.K&&this.K.XO)return this.K.XO.apply(this,arguments);else return C.
ITable.XO.apply(this,arguments);},LL:function(aColumn,A2){if(this.K&&this.K.LL)return this.
K.LL.apply(this,arguments);else return C.ITable.LL.apply(this,arguments);},LP:function(
Z,AQ){if(this.K&&this.K.LP)return this.K.LP.apply(this,arguments);else return C.
ITable.LP.apply(this,arguments);},S3:function(Z,AQ,CK){if(this.K&&this.K.S3)return this.
K.S3.apply(this,arguments);else return C.ITable.S3.apply(this,arguments);},Ahs:function(
aColumn,A2){if(this.K&&this.K.Ahs)return this.K.Ahs.apply(this,arguments);else return C.
ITable.Ahs.apply(this,arguments);},GZ:function(){if(this.K&&this.K.GZ)return this.
K.GZ.apply(this,arguments);else return C.ITable.GZ.apply(this,arguments);},Ahq:function(
aColumn,A2){if(this.K&&this.K.Ahq)return this.K.Ahq.apply(this,arguments);else return C.
ITable.Ahq.apply(this,arguments);},Ab5:function(aColumn,A2){if(this.K&&this.K.Ab5
)return this.K.Ab5.apply(this,arguments);else return C.ITable.Ab5.apply(this,arguments
);},Ie:function(){if(this.K&&this.K.Ie)return this.K.Ie.apply(this,arguments);else
return C.ITable.Ie.apply(this,arguments);},Zq:function(){if(this.K&&this.K.Zq)return this.
K.Zq.apply(this,arguments);else return C.ITable.Zq.apply(this,arguments);},PF:function(
){if(this.K&&this.K.PF)return this.K.PF.apply(this,arguments);else return C.ITable.
PF.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var KN=this._variants();if(KN){this.K={};KN._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.abt.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MS:null,AiG:function(Amf){var A75;var Ark=this.AP6(Amf/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A75=A.aap(Ark,0,1);return A75;},A4$:function(MD){if(MD<=
0)return 0;else if(MD<=1)return 5;else if(MD<=2)return 3;else if(MD<=4)return 2;
else if(MD<=6)return 1;else if(MD<=8)return 4;else return 0;},AbJ:function(MD){var
a=0;switch(MD){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",Oe);}return a;},ApK:function(
D3,Qm){var MF=A._GetAutoObject(C.Converter).Ag5(Qm,D3);switch(MF){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(MB+MF.toFixed(
));}},AfO:function(){var B;var DI=A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(
C.Helper).DN());DI.Alf(0);DI.Ali(0);DI.All(0);return((B=(DI.JL()|0))<0)?B+0x100000000:
B;},BaD:function(Aqj){var C5;switch(Aqj){case 36:C5=Pc;break;case 40:C5=RL;break;
case 56:C5=Ti;break;case 70:C5=Ve;break;case 100:C5=Vf;break;case 124:C5=JT;break;
case 156:C5=RM;break;case 158:C5=Vg;break;case 191:C5=Vh;break;case 196:C5=X7;break;
case 203:C5=RN;break;case 208:C5=X8;break;case 233:C5=Vi;break;case 246:C5=Tj;break;
case 250:C5=Vj;break;case 276:C5=Qg;break;case 300:C5=Vk;break;case 348:C5=Np;break;
case 372:C5=Pd;break;case 380:C5=Tk;break;case 392:C5=X9;break;case 428:C5=Vl;break;
case 440:C5=X_;break;case 442:C5=X$;break;case 470:C5=Vm;break;case 528:C5=Vn;break;
case 578:C5=RO;break;case 616:C5=Ya;break;case 620:C5=Yb;break;case 642:C5=AaC;break;
case 643:C5=Qh;break;case 703:C5=AaD;break;case 705:C5=Adz;break;case 724:C5=Yc;
break;case 752:C5=Vo;break;case 756:C5=Yd;break;case 792:C5=AdA;break;case 804:C5=
KM;break;case 826:C5=AaE;break;case 840:C5=RP;break;default:C5=Aqj.toFixed();}return C5;
},AlP:function(Nv){return this.Nl(Nv,1,false);},AuE:function(Nv,Amv){return this.
Nl(Nv,Amv,false);},Nl:function(Nv,Amv,Bsb){var B;var Ajn=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(Bsb)Ajn=A.aaq(Nv,0,0);else{var A9k=Nv<0;if(Amv<3)Nv=
Nv+(((A9k?-1:1)*5)*(Math.pow(10,2-Amv)|0));Ajn=(((((B=Nv)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(Amv>0)Ajn=Ajn+(Nq+A.aaX(A.aaq((((B=Nv)>-2147483648)?
Math.abs(B):B)%1000,3,10),Amv));if(A9k)Ajn=AlR+Ajn;}break;case 1:Ajn=A.aap(Nv/453.592
,0,Amv);break;default:A.aa8("%s%s",AlS,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return Ajn;},U_:function(Nu){var AYt=Nu.toFixed();var A$p=AYt.length;if((A$p>=
14)&&(A$p<=15)){var AWI=this.Aut(Nu);var Bq6=A._GetAutoObject(C.Converter).BaD(AWI
);AYt=(Bq6+JU)+A.aar(A._GetAutoObject(C.Helper).T$(Nu,0,12),12,10);}return AYt;}
,AkE:function(Lm){switch(Lm){case 0:return A.zW(A.abi.AL6);case 1:return A.zW(A.
abi.AzW);case 2:return A.zW(A.abi.Az1);default:{A.aa8("%s%e",AlT,Lm);return null;
}}},AY$:function(BqD){switch(BqD){case 0:return A.zW(A.abi.Asw);case 1:return A.
zW(A.abi.AzR);case 2:return A.zW(A.abi.AL0);default:throw new Error(AlU);}},Aey:
function(AFn){switch(AFn){case 0:return A.zW(A.abi.AhC);case 2:return A.zW(A.abi.
AkM);case 1:return A.zW(A.abi.ZA);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.AsF);case 1:return A.zW(A.abi.AsG);default:throw new Error(
AfU+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
ALr);case 5:return A.zW(A.abi.ALs);case 6:return A.zW(A.abi.ALw);case 7:return A.
zW(A.abi.AKS);case 8:return A.zW(A.abi.AKZ);case 9:return A.zW(A.abi.Azs);case 10:
return A.zW(A.abi.AKY);case 11:return A.zW(A.abi.AK0);default:throw new Error(AaF+
AFn.toFixed());}},A$X:function(AvI){switch(AvI){case 0:return A.zW(A.abi.AzZ);case
3:return A.zW(A.abi.AkM);case 1:return A.zW(A.abi.ZA);case 2:return A._GetAutoObject(
A.abk.Dv).A8q();default:throw new Error(AaF+AvI.toFixed());}},BaC:function(Aqj){
switch(Aqj){case 977:return Ye;case 978:return AuF;case 980:return AuG;case 981:
return AuH;case 982:return AuI;case 983:return AiR;case 984:return AuJ;case 985:
return AuK;default:return A.z2(A.abg.Unknown);}},BaX:function(AaO){switch(AaO){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},BiJ:function(Nu){if(
!Nu)return-1;return(Nu%100000000)|0;},Bbo:function(Ame,aFilter){var B;if(!aFilter
)return AdB;var AmG=AdC;var At=aFilter.AKo();while(!!At){AmG=AmG+A._GetAutoObject(
C.Helper).A0N(Ame,At);At=aFilter.AKs(At);if(!!At)AmG=AmG+Kb;}AmG=AmG+AuL;return AmG;
},BcA:function(A6_){var L2=0;switch(A6_){case 14:L2=2;break;case 13:L2=4;break;case
6:L2=36;break;case 11:L2=9;break;case 0:L2=0;break;case 10:L2=26;break;case 12:L2=
12;break;case 5:L2=14;break;case 3:L2=15;break;case 1:L2=10;break;case 8:L2=16;break;
case 4:L2=20;break;case 15:L2=27;break;case 9:L2=31;break;case 2:L2=13;break;case
7:L2=35;break;case 16:L2=37;break;default:A.aa8("%s%e",Vp,A6_);}return L2;},A$W:
function(AvI){switch(AvI){case 0:return 1;case 3:return 0;case 1:return 2;case 2:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:
throw new Error(AfU+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:
throw new Error(AaF+AvI.toFixed());}},A$Y:function(Amm){switch(Amm){case 0:return A.
zW(A.abi.ALn);case 1:return A.zW(A.abi.AzZ);case 9:return A.zW(A.abi.ALy);case 4:
return A.zW(A.abi.ACn);case 6:return A.zW(A.abi.Apn);case 8:return A.zW(A.abi.Ast
);case 2:return A.zW(A.abi.ZA);case 3:return A.zW(A.abi.AkM);case 7:return A.zW(
A.abj.J4);case 5:return A.zW(A.abj.J4);case 10:switch(A._GetAutoObject(C.Device).
MassUnit){case 0:return A.zW(A.abi.AsF);case 1:return A.zW(A.abi.AsG);default:throw new
Error(AfU+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
zW(A.abj.J4);case 12:return A.zW(A.abj.J4);case 13:return A.zW(A.abj.J4);case 14:
return A.zW(A.abj.J4);case 15:return A.zW(A.abj.J4);case 16:return A.zW(A.abj.J4
);case 17:return A.zW(A.abj.J4);default:throw new Error(AiS+Amm.toFixed());}},AJd:
function(Aqj){switch(Aqj){case 40:return 1;case 56:return 3;case 70:return 2;case
100:return 4;case 124:return 5;case 156:return 7;case 158:return 36;case 191:return 17;
case 196:return 8;case 203:return 9;case 208:return 11;case 233:return 12;case 246:
return 14;case 250:return 15;case 276:return 10;case 300:return 16;case 348:return 18;
case 372:return 19;case 380:return 20;case 392:return 21;case 428:return 24;case
440:return 22;case 442:return 23;case 470:return 25;case 528:return 26;case 578:
return 27;case 616:return 28;case 620:return 29;case 642:return 30;case 643:return 31;
case 703:return 34;case 705:return 33;case 724:return 13;case 752:return 32;case
756:return 6;case 792:return 35;case 804:return 37;case 826:return 38;case 840:return 39;
default:return 0;}},AfQ:function(Nu){var AWI=this.Aut(Nu);return this.AJd(AWI);}
,Aut:function(Nu){return A._GetAutoObject(C.Helper).T$(Nu,12,3)|0;},A5r:function(
Amj,D3){if(Amj<A._GetAutoObject(C.Helper).Azo(D3))return 1;else if(Amj<A._GetAutoObject(
C.Helper).Azn(D3))return 2;else return 3;},AKl:function(Bqi){switch(Bqi){case 1:
return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:
return 6;case 7:return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:
return 11;case 12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;
case 16:return 16;default:return 0;}},AP6:function(A2,AFa,AFb){if(AFa===AFb)return A2;
if(!AFa&&(AFb===1)){var result=((A2*9)/5)+32;return result;}if((AFa===1)&&!AFb){
var result=((A2-32)*5)/9;return result;}throw new Error(((AuM+AFa.toFixed())+AuN
)+AFb.toFixed());},A0z:function(En){switch(En){case 0:return AuO;case 1:return A.
jm;case 2:return AlV;case 3:return AuP;case 4:return A.z2(A.abg.Contains);case 5:
return ApY;default:{A.aa8("%s%e",Kc,En);return A.jm;}}},AZG:function(AaM){return this.
MS.Ab4(AaM);},Bb7:function(AaM){return this.MS.Akp(AaM);},Baj:function(Aqi){var AwV=
0;switch(Aqi){case 0:AwV=1;break;case 1:AwV=2;break;case 2:AwV=3;break;case 3:AwV=
4;break;default:A.aa8("%s%e",AQN,Aqi);}return AwV;},Ag5:function(AU8,D3){if(AU8>=
A._GetAutoObject(C.Helper).A0K(D3))return 3;else if(AU8>=A._GetAutoObject(C.Helper
).Ash(D3))return 2;else if(AU8<A._GetAutoObject(C.Device).X4)return 0;else return 1;
},ArO:function(L2){var BJ=-1;switch(L2){case 0:BJ=0;break;case 1:BJ=40;break;case
2:BJ=70;break;case 3:BJ=56;break;case 4:BJ=100;break;case 5:BJ=124;break;case 6:
BJ=756;break;case 7:BJ=156;break;case 8:BJ=196;break;case 9:BJ=203;break;case 10:
BJ=276;break;case 11:BJ=208;break;case 12:BJ=233;break;case 13:BJ=724;break;case
14:BJ=246;break;case 15:BJ=250;break;case 16:BJ=300;break;case 17:BJ=191;break;case
18:BJ=348;break;case 19:BJ=372;break;case 20:BJ=380;break;case 21:BJ=392;break;case
22:BJ=440;break;case 23:BJ=442;break;case 24:BJ=428;break;case 25:BJ=470;break;case
26:BJ=528;break;case 27:BJ=578;break;case 28:BJ=616;break;case 29:BJ=620;break;case
30:BJ=642;break;case 31:BJ=643;break;case 32:BJ=752;break;case 33:BJ=705;break;case
34:BJ=703;break;case 35:BJ=792;break;case 36:BJ=158;break;case 37:BJ=804;break;case
38:BJ=826;break;case 39:BJ=840;break;default:throw new Error(ApZ+L2.toFixed());}
return BJ;},_Init:function(aArg){C.MS._Init.call(this.MS={I:this},0);this.__proto__=
C.ConverterClass;A.hJ++;},_Done:function(){this.__proto__=null;this.MS._Done();A.
hJ--;},_ReInit:function(){this.MS._ReInit();},_Mark:function(D){var B;if((B=this.
MS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"};C.Converter={
_Init:function(){C.ConverterClass._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.MinLowTemperature=3000;C.MaxHighTemperature=5000;C.TemperatureStep=
10;C.RatingTableFields={Id:0,AnimalId:1,FeedAssessment:2,AppearanceAssessment:3,
RespiratoryAssessment:4,FaecesAssessment:5,Timestamp:6,Temperature:7,BodyWeight:
8,RatingTemperature:9};C.Animal={TransponderId:0,NaisId:0,NaisIdMother:0,Id:0,VisualId:
0,GroupId:0,DateOfBirth:0,LocationId:0,LastTemperature:0,TimestampLastControl:0,
TimestampLastWatch:0,TimestampExpirationFeverAlarm:0,TimestampAlarm:0,LastBodyWeight:
0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:0,FirstBodyWeightId:
0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:0,TimestampLastAssessment:
0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:0,AnimalType:0,LastRatingTemperature:
0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:false,IsBirthAnnouncementPending:
false,IsPerished:false,IsFever:false,IsWatch:false,IsRegistered:false,IsControl:
false,IsAlarm:false,Fo:function(Z,AE){var G6=C.Row.Fo.call(this,Z,AE);if(G6&&!!AE
){this.OnSetId(AE.Cp(Z,0));this.XE(AE.Cp(Z,1));this.Z4(AE.Cp(Z,2));this.Alh(AE.Cp(
Z,3));this.AcO(AE.Hr(Z,4));this.J7(AE.AKq(Z,7));this.Ah$(AE.BbH(Z,6));this.DO(AE.
AkF(Z,14));this.Nc(AE.LP(Z,22));this.O2(AE.LP(Z,26));this.AtW(AE.IC(Z,13));this.
AcQ(AE.Hq(Z,8));this.AtQ(AE.Hr(Z,15));this.AOL(AE.Hr(Z,31));this.AcU(AE.A0V(Z,5)
);this.AOr(AE.IC(Z,17));this.ST(AE.Hq(Z,11));this.AOK(AE.Hr(Z,16));this.AON(AE.Hr(
Z,30));this.Aif(AE.Hq(Z,9));this.AcS(AE.Hq(Z,12));this.AOM(AE.Hr(Z,20));this.AtS(
AE.Hr(Z,21));this.Afp(AE.Hq(Z,10));this.Atx(AE.Hq(Z,27));this.ABn(AE.Azj(Z,18));
this.ABO(AE.Hr(Z,19));this.Att(AE.Azj(Z,23));this.AtR(AE.Hr(Z,24));this.AOi(AE.Cp(
Z,25));this.Atk(AE.Hr(Z,28));this.Aty(AE.Cp(Z,29));this.Ao2(AE.Hq(Z,38));this.O1(
AE.BbI(Z,32));this.Aib(AE.BbL(Z,33));this.Alj(AE.LP(Z,35));this.Aaa(AE.AKz(Z,34)
);this.Alg(AE.Hq(Z,37));this.ABF(AE.BbV(Z,36));}return G6;},Cr:function(AE){var G6=
C.Row.Cr.call(this,AE);if(G6&&!!AE){var IQ=AE.NQ();if(IQ<=0)A.aa8("%s",AaG);else{
var AwC=this.AkQ();if(AwC)this.Ct=AE.WU();else AE.GG(this.Ct,0,this.Id);AE.GG(this.
Ct,1,this.VisualId);AE.GG(this.Ct,2,this.GroupId);AE.GG(this.Ct,3,this.LocationId
);AE.Aai(this.Ct,4,this.DateOfBirth);AE.BhI(this.Ct,7,this.Gender);AE.BhE(this.Ct
,6,this.BirthType);AE.BhC(this.Ct,14,this.AnimalType);AE.S3(this.Ct,22,this.TransponderId
);AE.S3(this.Ct,26,this.NaisId);AE.Aiy(this.Ct,13,this.WorstAssessment);AE.My(this.
Ct,8,this.IsAlarm);AE.Aai(this.Ct,15,this.TimestampAlarm);AE.My(this.Ct,11,this.
IsFever);AE.Aai(this.Ct,16,this.TimestampExpirationFeverAlarm);AE.My(this.Ct,9,this.
IsControl);AE.My(this.Ct,12,this.IsWatch);AE.Aai(this.Ct,20,this.TimestampLastControl
);AE.Aai(this.Ct,21,this.TimestampLastWatch);AE.My(this.Ct,10,this.IsRegistered);
AE.My(this.Ct,27,this.IsPerished);AE.Aai(this.Ct,28,this.DateOfLastCalving);AE.GG(
this.Ct,29,this.LactationNumber);AE.My(this.Ct,38,this.IsDry);AE.BhG(this.Ct,32,
this.Breed);AE.BhH(this.Ct,33,this.EaseOfDelivery);AE.S3(this.Ct,35,this.NaisIdMother
);AE.BhO(this.Ct,34,this.WhereAbouts);AE.My(this.Ct,37,this.IsBirthAnnouncementPending
);AE.BhM(this.Ct,36,this.ReasonOfLeaving);G6=AE.NS(IQ);if(AwC)this.OnSetId(AE.Zq(
));}}return G6;},GC:function(){C.Row.GC.call(this);this.OnSetId(-1);this.Afp(true
);},GZ:function(){C.Row.GZ.call(this);this.OnSetId(0);this.XE(0);this.Z4(0);this.
Alh(0);this.AcO(0);this.J7(A._GetAutoObject(C.Device).Gender);this.Ah$(0);this.DO(
A._GetAutoObject(C.Device).AnimalType);this.Nc(0);this.O2(0);this.AtW(0);this.AcQ(
false);this.AtQ(0);this.AOL(0);this.AcU(0);this.AOr(0);this.ST(false);this.AON(0
);this.AOK(0);this.Aif(false);this.AcS(false);this.AOM(0);this.AtS(0);this.Afp(false
);this.Atx(false);this.ABn(0);this.ABO(0);this.Att(0);this.AtR(0);this.AOi(-1);this.
Atk(0);this.Aty(0);this.Ao2(false);this.O1(0);this.Aib(0);this.Alj(0);this.Aaa(0
);this.Alg(false);this.ABF(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.aat([this,this.P0,this.OnSetId],0);},XE:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.aat([this,this.AoH,this.XE],0);},Z4:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.aat([this,this.BdY,this.Z4],0);},AcO:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.aat([this,this.AAI,this.AcO],0);},J7:
function(E){if(this.Gender===E)return;this.Gender=E;A.aat([this,this.Xu,this.J7]
,0);},Ah$:function(E){if(this.BirthType===E)return;this.BirthType=E;A.aat([this,
this.ANK,this.Ah$],0);},Alh:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.aat([this,this.A2A,this.Alh],0);},AcU:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.aat([this,this.A2z,this.AcU],0);},AcQ:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.aat([this,this.A2u,this.AcQ],0);}
,Aif:function(E){if(this.IsControl===E)return;this.IsControl=E;A.aat([this,this.
Bd2,this.Aif],0);},Afp:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.aat([this,this.Bd5,this.Afp],0);},AcS:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.aat([this,this.A2w,this.AcS],0);},AtW:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.aat([this,this.A27,this.AtW],0);},ST:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.aat([this,this.A2v,this.ST],0);},
AOM:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.aat([this,this.Ber,this.AOM],0);},AtS:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.aat([this,this.Bet,this.AtS],0);},AOr:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.aat([
this,this.Bd7,this.AOr],0);},AOK:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.aat([this,this.Bep,this.AOK],0);
},AtQ:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.aat([
this,this.Beo,this.AtQ],0);},DO:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.aat([this,this.O0,this.DO],0);},ABn:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.aat([this,this.A2y,this.ABn],0);},ABO:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.aat([this,this.A2S
,this.ABO],0);},Nc:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.aat([this,this.Ah7,this.Nc],0);},NN:function(){return A._GetAutoObject(C.Helper
).L6(this.DateOfBirth,A._GetAutoObject(C.Helper).DN());},Att:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.ANP,this.Att]
,0);},AtR:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AN6,this.AtR],0);},Aon:function(){var Yt=A._NewObject(A.Core.
Bp,0);Yt.Initialize(this.DateOfBirth);var AWu=A._NewObject(A.Core.Bp,0);AWu.Initialize(
this.TimestampFirstWeighing);if(((Yt.Year===AWu.Year)&&(Yt.ZX()===AWu.ZX()))&&(this.
FirstBodyWeight>0))return true;else return false;},AiO:function(AE6){var VN;var Ant;
if(this.TimestampLastWeighing>0){Ant=this.TimestampLastWeighing;VN=this.LastBodyWeight;
}else if(this.AnimalType===1){Ant=A._GetAutoObject(C.Helper).DN();VN=600000;}else{
Ant=this.DateOfBirth;VN=A._GetAutoObject(C.Helper).Ahw(this.AnimalType);}return A.
_GetAutoObject(C.Helper).AiO(VN,Ant,AE6,this.AnimalType);},AOi:function(E){if(this.
FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.BdW,this.
AOi],0);},Alz:function(A7t){this.AcQ(A7t);if(A7t){if(!this.TimestampAlarm)this.AtQ(
A._GetAutoObject(C.Helper).DN());}else this.AtQ(0);},O2:function(E){if(this.NaisId===
E)return;this.NaisId=E;A.aat([this,this.AoD,this.O2],0);},ACA:function(A7p){this.
AcS(A7p);if(A7p){if(!this.TimestampLastWatch)this.AtS(A._GetAutoObject(C.Helper).
DN());}else this.AtS(0);},Atk:function(E){if(this.DateOfLastCalving===E)return;this.
DateOfLastCalving=E;A.aat([this,this.BdM,this.Atk],0);},Aty:function(E){if(this.
LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bd6,this.Aty]
,0);},Atx:function(E){if(this.IsPerished===E)return;this.IsPerished=E;A.aat([this
,this.Bd4,this.Atx],0);},AON:function(E){if(this.TimestampLastTemperature===E)return;
this.TimestampLastTemperature=E;A.aat([this,this.Bes,this.AON],0);},AOL:function(
E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=E;A.aat([
this,this.Beq,this.AOL],0);},O1:function(E){if(this.Breed===E)return;this.Breed=
E;A.aat([this,this.AsY,this.O1],0);},Aib:function(E){if(this.EaseOfDelivery===E)
return;this.EaseOfDelivery=E;A.aat([this,this.ANO,this.Aib],0);},Aaa:function(E){
if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AN_,this.Aaa]
,0);},Alj:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.ANV,this.Alj],0);},ABF:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.Bee,this.ABF],0);},Alg:function(E){if(this.
IsBirthAnnouncementPending===E)return;this.IsBirthAnnouncementPending=E;A.aat([this
,this.Bd1,this.Alg],0);},Ao2:function(E){if(this.IsDry===E)return;this.IsDry=E;A.
aat([this,this.Bd3,this.Ao2],0);},P0:function(){return this.Id;},AoH:function(){
return this.VisualId;},BdY:function(){return this.GroupId;},AAI:function(){return this.
DateOfBirth;},Xu:function(){return this.Gender;},ANK:function(){return this.BirthType;
},A2A:function(){return this.LocationId;},A2z:function(){return this.LastTemperature;
},A2u:function(){return this.IsAlarm;},Bd2:function(){return this.IsControl;},Bd5:
function(){return this.IsRegistered;},A2w:function(){return this.IsWatch;},A27:function(
){return this.WorstAssessment;},A2v:function(){return this.IsFever;},Ber:function(
){return this.TimestampLastControl;},Bet:function(){return this.TimestampLastWatch;
},Bd7:function(){return this.LastRatingTemperature;},Bep:function(){return this.
TimestampExpirationFeverAlarm;},Beo:function(){return this.TimestampAlarm;},O0:function(
){return this.AnimalType;},A2y:function(){return this.LastBodyWeight;},A2S:function(
){return this.TimestampLastWeighing;},Ah7:function(){return this.TransponderId;}
,ANP:function(){return this.FirstBodyWeight;},AN6:function(){return this.TimestampFirstWeighing;
},BdW:function(){return this.FirstBodyWeightId;},AoD:function(){return this.NaisId;
},BdM:function(){return this.DateOfLastCalving;},Bd6:function(){return this.LactationNumber;
},Bd4:function(){return this.IsPerished;},Bes:function(){return this.TimestampLastTemperature;
},Beq:function(){return this.TimestampLastAssessment;},AsY:function(){return this.
Breed;},ANO:function(){return this.EaseOfDelivery;},AN_:function(){return this.WhereAbouts;
},ANV:function(){return this.NaisIdMother;},Bee:function(){return this.ReasonOfLeaving;
},Bd1:function(){return this.IsBirthAnnouncementPending;},Bd3:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={Ct:-1,TableId:2,Fo:function(
Z,AE){if(!AE){A.aa8("%s",(ADl+this.Ct.toFixed())+ADm);return false;}else if(AE.Id
!==this.TableId)throw new Error(ADn);else if((Z<0)||(Z>=AE.Cd())){A.aa8("%s",(((
ADo+this.Ct.toFixed())+AuQ)+AE.Cd().toFixed())+ADp);return false;}this.Ct=Z;return true;
},Cr:function(AE){if(!AE){A.aa8("%s",(ADl+this.Ct.toFixed())+ADm);return false;}
else if(AE.Id!==this.TableId)throw new Error(ADn);else if(this.AkQ()&&AE.Mp()){A.
aa8("%s",AQO+AE.Ie().toFixed());return false;}else if(!this.AkQ()&&((this.Ct<0)||(
this.Ct>=AE.Cd()))){A.aa8("%s",(((ADo+this.Ct.toFixed())+AuQ)+AE.Cd().toFixed())+
ADp);return false;}return true;},GC:function(){this.GZ();this.Ct=-1;},AkQ:function(
){return this.Ct===-1;},GZ:function(){this.Ct=-2;},An9:function(){return this.Ct
!==-2;},A2G:function(){return this.Ct;},A3W:function(E){this.Ct=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,Fo:function(Z,AE){var G6=C.Row.Fo.call(this,
Z,AE);if(G6&&!!AE){this.OnSetId(AE.Cp(Z,0));this.OnSetAnimalId(AE.Cp(Z,1));this.
OnSetTimestamp(AE.Hr(Z,6));this.OnSetFeed(AE.IC(Z,2));this.OnSetAppearance(AE.IC(
Z,3));this.OnSetRespiratory(AE.IC(Z,4));this.OnSetFaeces(AE.IC(Z,5));this.OnSetTemperature(
AE.A0V(Z,7));this.OnSetBodyWeight(AE.Azj(Z,8));this.OnSetRatingTemperature(AE.IC(
Z,9));}return G6;},Cr:function(AE){if(this.K&&this.K.Cr)return this.K.Cr.apply(this
,arguments);else return C.Rating.A57.apply(this,arguments);},A57:function(AE){var
G6=C.Row.Cr.call(this,AE);if((G6&&!!AE)&&(AE.Id===1)){var IQ=AE.NQ();if(IQ<=0)A.
aa8("%s",AaG);else{var AwC=this.AkQ();if(AwC)this.Ct=AE.WU();else AE.GG(this.Ct,
0,this.Id);AE.GG(this.Ct,1,this.AnimalId);AE.Aai(this.Ct,6,this.Timestamp);AE.Aiy(
this.Ct,2,this.Feed);AE.Aiy(this.Ct,3,this.Appearance);AE.Aiy(this.Ct,4,this.Respiratory
);AE.Aiy(this.Ct,5,this.Faeces);AE.A4L(this.Ct,7,this.Temperature);AE.APA(this.Ct
,8,this.BodyWeight);AE.Aiy(this.Ct,9,this.RatingTemperature);AE.NS(IQ);if(AwC)this.
OnSetId(AE.Zq());var Qo=A._GetAutoObject(C.Device).Aq;var Z=A._GetAutoObject(C.Device
).Aq.LL(0,this.AnimalId);if(Z>=0){var Cx=A._NewObject(C.Animal,0);Cx.Fo(Z,Qo);if(
this.Temperature>0)Cx.ST(A._GetAutoObject(C.Helper).A1k(this));if((this.Temperature>
0)&&A._GetAutoObject(C.Helper).ACg(this)){var NC=A._GetAutoObject(C.Helper).AMD(
this);Cx.Aif(NC);Cx.Alz(NC);}else if(this.Temperature>0){var NC=(A._GetAutoObject(
C.Helper).AMD(this)||(Cx.WorstAssessment===2))||(Cx.WorstAssessment===1);Cx.Aif(
NC);Cx.Alz(NC);}else{var NC=A._GetAutoObject(C.Helper).AMD(this)||Cx.IsFever;Cx.
Aif(NC);Cx.Alz(NC);}Cx.Cr(Qo);}}}return G6;},GC:function(){C.Row.GC.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).DN());this.OnSetId(-1);},GZ:function(){
C.Row.GZ.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.Ben,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.P0,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.BdB,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
BdT,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.BdC,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.Bef
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.BdR,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A2R,this.OnSetTimestamp
],0);},BhD:function(ME,A2){switch(ME){case 2:this.OnSetAppearance(A2);break;case
1:this.OnSetFeed(A2);break;case 4:this.OnSetFaeces(A2);break;case 3:this.OnSetRespiratory(
A2);break;default:;}},BbF:function(ME){switch(ME){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.Bed,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.BdF,this.OnSetBodyWeight],0);},Ben:function(){return this.Temperature;
},P0:function(){return this.Id;},BdB:function(){return this.AnimalId;},BdT:function(
){return this.Feed;},BdC:function(){return this.Appearance;},Bef:function(){return this.
Respiratory;},BdR:function(){return this.Faeces;},A2R:function(){return this.Timestamp;
},Bed:function(){return this.RatingTemperature;},BdF:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var KN=this._variants();if(KN){this.K={};KN._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={S2:null,AfC:null,APu:null,APv:null,V:null,Ap:null,J0:null,RB:null
,AbI:null,S7:null,S6:null,Ab7:null,Adv:null,Adu:null,Adt:null,Adw:null,AeB:null,
ACU:0,Init:function(aArg){A.ow([this,this.AO5],this);},Aij:function(E){this.S2=E;
A.aat([this,this.AoF,this.Aij],0);},ABI:function(E){this.AfC=E;A.aat([this,this.
A2H,this.ABI],0);},Bta:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var Arp=A._GetAutoObject(C.Device).O6;if(!Arp)throw new Error(
AQP);switch(Arp.TransponderType){case 1:this.Aij(Arp);break;case 2:this.AOC(Arp);
break;case 3:this.ABI(Arp);break;case 4:this.AOD(Arp);break;case 0:break;default:
throw new Error(AQQ);}}break;case 4:A._GetAutoObject(C.Device).A_(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A_(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(AQR);}},Aiv:function(){this.Aij(null);this.
AOC(null);this.ABI(null);this.AOD(null);},ABM:function(E){if(this.K&&this.K.ABM)
return this.K.ABM.apply(this,arguments);else return C.HelperClass.A55.apply(this
,arguments);},A55:function(E){A.aat([this,this.Tl,this.Tm],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Tm:function(Ao){this.ABM(Ao);},DN:function(){if(this.
K&&this.K.DN)return this.K.DN.apply(this,arguments);else return C.HelperClass.A51.
apply(this,arguments);},A51:function(){var B;return((B=(this.Ap.A8o()|0))<0)?B+0x100000000:
B;},Tl:function(){return this.DN();},Apr:function(){A._GetAutoObject(C.Device).UV(-
1);this.V.GZ();A.vv(this.V,0);},A1w:function(Nu){if(!Nu){A.aa8("%s%U",Ap0,Nu);return false;
}var A5=A._GetAutoObject(C.Device).Aq.Ahs(22,Nu);return this.HS(A5);},AkG:function(
Ame,AE5){switch(Ame){case 0:{var AmF=AE5;switch(AmF){case 14:return A.z2(A.abg.Auv
);case 6:return AuR;case 4:return A.z2(A.abg.AnR);case 28:return Qi;case 7:return A.
z2(A.abg.Aub);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.Hs);case 37:return AuS;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AI_);case 38:return A.z2(
A.abg.AJz);case 11:return A.z2(A.abg.Fever);case 27:return AQS;case 10:return A.
z2(A.abg.Bhi);case 12:return A.z2(A.abg.Apg);case 29:return A.z2(A.abg.A1o);case
18:return A.z2(A.abg.Weighing);case 17:return AQT;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.BcJ);case 26:return A.z2(A.abg.ZU);case 35:return A.z2(
A.abg.ZU)+AQU;case 36:return AQV;case 15:return ADq;case 24:return ADr;case 20:return AdD;
case 30:return AlW;case 21:return AQW;case 19:return ADs;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gd);case 34:return A.z2(A.abg.Vc);case 13:
return AiT;case 31:return ADt;default:{A.aa8("%s",ADu+AmF.toFixed());return ADv+
AmF.toFixed();}}}case 1:{var AmF=AE5;switch(AmF){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.ACf);case 8:return A.z2(A.abg.AfT);case 5:return A.z2(
A.abg.ACh);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.ACi);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bp);default:{A.aa8("%s",AQX+AmF.toFixed(
));return ADv+AmF.toFixed();}}}default:A.aa8("%s",(AQY+Ame.toFixed())+AQZ);}return A.
jm;},A0N:function(Ame,AK){var result=A.jm;if(!!AK){result=this.AkG(Ame,AK.EE);result=((
result+JU)+A._GetAutoObject(C.Converter).A0z(AK.Operator))+JU;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AK)?AK:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AK
)?AK:null).AY.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AK)?AK:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AK)?AK:null).AY.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AK)?AK:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AK)?AK:null).AY;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AK)?AK:null)){if((C.BoolFilterCriterion.isPrototypeOf(AK)?AK:null).
AY)result=this.AkG(Ame,AK.EE);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
isPrototypeOf(AK)?AK:null)){var BrK=A._NewObject(C.GenderToString,0);result=result+
BrK.KL((C.GenderFilterCriterion.isPrototypeOf(AK)?AK:null).AY);}else if(!!(C.AnimalTypeFilterCriterion.
isPrototypeOf(AK)?AK:null)){var BqG=A._NewObject(C.AnimalTypeToString,0);result=
result+BqG.KL((C.AnimalTypeFilterCriterion.isPrototypeOf(AK)?AK:null).AY);}else if(
!!(C.AssessmentFilterCriterion.isPrototypeOf(AK)?AK:null)){var BqI=A._NewObject(
C.AssesmentToString,0);result=result+BqI.KL((C.AssessmentFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(AK)?AK:null))
result=result+(C.UInt64FilterCriterion.isPrototypeOf(AK)?AK:null).AY.toFixed();else
if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AK)?AK:null)){var BuK=A._NewObject(
C.WhereAboutsToString,0);result=result+BuK.KL((C.WhereAboutsFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);}else A.aa8("%s",AdE);}return result;},Nh:function(aString,A7d,
BpU){var result=A.jm;var A_J=false;var index=0;var BpW=A7d.length;while(!A_J){var
AXV=aString.indexOf(A7d,index);if(AXV!==-1){result=(result+A.aaY(aString,index,AXV-
index))+BpU;index=AXV+BpW;}else{var A7h=aString.length;if(index<A7h)result=result+
A.aa4(aString,A7h-index);A_J=true;}}return result;},AOC:function(E){this.APu=E;A.
aat([this,this.Beg,this.AOC],0);},AOD:function(E){this.APv=E;A.aat([this,this.Beh
,this.AOD],0);},A8O:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).O6)&&(A._GetAutoObject(C.Device).O6.TransponderType===
1);},Ad4:function(H){if(!this.V.AkQ()&&!!this.V.Id)this.BcI(this.V.Id);},Ash:function(
D3){return A._GetAutoObject(C.Helper).S7.Get(D3);},A0K:function(D3){return A._GetAutoObject(
C.Helper).S6.Get(D3);},A0R:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).S7.LZ){if(A._GetAutoObject(C.Helper).S7.Get(P)<min)min=A._GetAutoObject(
C.Helper).S7.Get(P);P=P+1;}return min;},AO5:function(H){A.y_([this,this.Ad4],A._GetAutoObject(
C.Device).Aq,0);},AMD:function(DD){if(!DD)return false;var Bch=(((this.Awy(DD.Faeces
)||this.Awy(DD.Feed))||this.Awy(DD.Appearance))||this.Awy(DD.Respiratory))||this.
Awy(DD.RatingTemperature);return Bch||this.A1k(DD);},Awy:function(A6U){return(A6U===
2)||(A6U===1);},A1k:function(DD){return!!DD&&(DD.Temperature>A._GetAutoObject(C.
Helper).Ash(A._GetAutoObject(C.Helper).V.AnimalType));},HS:function(Oi){var AW2=
false;if(Oi>=0){if(Oi!==this.V.Ct)A._GetAutoObject(C.Device).UV(Oi);AW2=this.V.Fo(
Oi,A._GetAutoObject(C.Device).Aq);if(AW2)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).UV(-1);this.V.GZ();A.vv(this.V,0);}return AW2;},AfM:function(Af0){var B;
return(((B=(this.Ap.A8o()|0))<0)?B+0x100000000:B)-this.AyQ(Af0);},ApG:function(){
var B;A.ow([B=this.J0,B.Aum],this);},Bue:function(H){A._GetAutoObject(C.Device).
A_(16,false,ADw,0,null);A._GetAutoObject(C.Device).A_(5,true,A.jm,0,null);},BgN:
function(H){var As=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!As&&(As.PopupState===
5))this.ApG();},Bgz:function(E){if(this.ACU===E)return;this.ACU=E;A._GetAutoObject(
C.Device).A_(16,true,this.ACU.toFixed(),0,[this,this.BgN]);},L6:function(Bpu,Bqa
){var DI;var A$e=A._NewObject(A.Core.AlH,0);var FW=A._NewObject(A.Core.Bp,0);var
Kq=A._NewObject(A.Core.Bp,0);FW.Initialize(Bpu);Kq.Initialize(Bqa);DI=Kq.BaW(FW);
A$e.Initialize2(0,DI.AzK,DI.AAs,DI.ACu);if(FW.J(A$e).Gz===FW.Gz)return DI.LJ;else
return DI.LJ+1;},Bug:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).JR>=A._GetAutoObject(C.Device).X4)&&(A._GetAutoObject(
C.Device).JR<=A._GetAutoObject(C.Helper).Ash(A._GetAutoObject(C.Helper).V.AnimalType
))){var BqF=A._GetAutoObject(C.Helper).V.Id;var BtO=A._GetAutoObject(C.Device).Aq.
LL(0,BqF);A._GetAutoObject(C.Device).Aq.My(BtO,9,false);A._GetAutoObject(C.Device
).Aq.Bo(A._GetAutoObject(C.Device).Aq.Filter);}},AGY:function(H){var A$1=A._GetAutoObject(
C.Helper).Ash(A._GetAutoObject(C.Helper).V.AnimalType);var A$V=A._GetAutoObject(
C.Helper).A0K(A._GetAutoObject(C.Helper).V.AnimalType);var Arj=A.aaC(A$1-100,A$V+
100);this.A76(Arj);},AyQ:function(Af0){return Af0*86400;},AlI:function(JX){var B;
if(!!JX&&(JX<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fb)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).T$(JX,A._GetAutoObject(C.Device).
Fb&0xFF,A._GetAutoObject(C.Device).Fn&0xFF)|0;},ACg:function(DD){if(!DD)return false;
return((!!DD.Faeces||!!DD.Feed)||!!DD.Appearance)||!!DD.Respiratory;},AiO:function(
AVh,A7j,AE6,D3){var B;var And;if((AVh<650000)&&(A7j<this.DN())){var A7F=this.AeB.
Asj(D3);var A7E=0;if(A7F>=0)A7E=this.Adt.Get(A7F);And=AVh+(this.L6(A7j,this.DN()
)*A7E);if(AE6>0){var AWc=this.Axi(AE6);And=(Math.trunc(((((B=And)<0)?B+0x10000000000000000:
B)+Math.trunc(AWc/2))/AWc)*AWc)|0;}if(And>650000)And=650000;}else And=AVh;return And;
},Azp:function(DD){var AnB=A._GetAutoObject(C.Converter).AbJ(DD.Faeces);if(AnB<A.
_GetAutoObject(C.Converter).AbJ(DD.Feed))AnB=A._GetAutoObject(C.Converter).AbJ(DD.
Feed);if(AnB<A._GetAutoObject(C.Converter).AbJ(DD.Appearance))AnB=A._GetAutoObject(
C.Converter).AbJ(DD.Appearance);if(AnB<A._GetAutoObject(C.Converter).AbJ(DD.Respiratory
))AnB=A._GetAutoObject(C.Converter).AbJ(DD.Respiratory);return A._GetAutoObject(
C.Converter).A4$(AnB);},At$:function(DD,MD){if(!!DD){DD.OnSetFaeces(MD);DD.OnSetFeed(
MD);DD.OnSetAppearance(MD);DD.OnSetRespiratory(MD);}},BbD:function(AE,AE$,AaU,VA
,AdK){if(!AE)throw new Error(Ap1);var Bb=A._NewObject(C.Filter,0);var Am3=AE.Filter;
var Nw=A._NewObject(C.Int32FilterCriterion,0);Nw.Operator=0;Nw.EE=1;Nw.AY=AaU;Bb.
CO(Nw);if(VA>0){var NL=A._NewObject(C.UInt32FilterCriterion,0);NL.Operator=2;NL.
EE=6;NL.AY=VA;Bb.CO(NL);}if(AdK>0){var NB=A._NewObject(C.UInt32FilterCriterion,0
);NB.Operator=3;NB.EE=6;NB.AY=AdK;Bb.CO(NB);}AE.Bo(Bb);var Lo=A._NewObject(C.Int32ArrayWrapper
,0);Lo.XD(6);var P;for(P=0;P<Lo.LZ;P=P+1)Lo.Set(P,0);var Tv;for(P=0;P<AE.Cd();P=
P+1){Tv=AE.IC(P,AE$);Lo.Set(Tv,Lo.Get(Tv)+1);}AE.Bo(Am3);return Lo;},XU:function(
Af0){var B;var FW=A._NewObject(A.Core.Bp,0);var A$d=A._NewObject(A.Core.AlH,0);FW.
Initialize(A._GetAutoObject(C.Converter).AfO());A$d.Initialize2(Af0,0,0,0);FW=FW.
Bh6(A$d);return((B=(FW.JL()|0))<0)?B+0x100000000:B;},A0L:function(AE,AaU,AdK,VA){
if(!AE)throw new Error(Ap1);var Bb=A._NewObject(C.Filter,0);var Am3=AE.Filter;var
Nw=A._NewObject(C.Int32FilterCriterion,0);Nw.Operator=0;Nw.EE=1;Nw.AY=AaU;Bb.CO(
Nw);if(VA>0){var NL=A._NewObject(C.UInt32FilterCriterion,0);NL.Operator=2;NL.EE=
6;NL.AY=VA;Bb.CO(NL);}if(AdK>0){var NB=A._NewObject(C.UInt32FilterCriterion,0);NB.
Operator=3;NB.EE=6;NB.AY=AdK;Bb.CO(NB);}AE.Bo(Bb);var Lo=A._NewObject(C.Int32ArrayWrapper
,0);Lo.XD(6);var P;for(P=0;P<Lo.LZ;P=P+1)Lo.Set(P,0);var Amt=A._NewObject(C.Rating
,0);var AV6;for(P=0;P<AE.Cd();P=P+1){Amt.Fo(P,AE);if(A._GetAutoObject(C.Helper).
ACg(Amt)){AV6=A._GetAutoObject(C.Helper).Azp(Amt);Lo.Set(AV6,Lo.Get(AV6)+1);}}AE.
Bo(Am3);return Lo;},AWC:function(AE,AaU,Brc){if(!AE)throw new Error(Ap1);var Bb=
A._NewObject(C.Filter,0);var Am3=AE.Filter;var Nw=A._NewObject(C.Int32FilterCriterion
,0);Nw.Operator=0;Nw.EE=1;Nw.AY=AaU;Bb.CO(Nw);var VA=A._GetAutoObject(C.Converter
).AfO()+A._GetAutoObject(C.Helper).AyQ(Brc);var AdK=VA+A._GetAutoObject(C.Helper
).AyQ(1);var NL=A._NewObject(C.UInt32FilterCriterion,0);NL.Operator=2;NL.EE=6;NL.
AY=VA;Bb.CO(NL);var NB=A._NewObject(C.UInt32FilterCriterion,0);NB.Operator=3;NB.
EE=6;NB.AY=AdK;Bb.CO(NB);AE.Bo(Bb);var Amt=A._NewObject(C.Rating,0);var Tv;var K0=
0;var P;for(P=0;P<AE.Cd();P=P+1){Amt.Fo(P,AE);if(A._GetAutoObject(C.Helper).ACg(
Amt)){Tv=A._GetAutoObject(C.Helper).Azp(Amt);if(A._GetAutoObject(C.Converter).AbJ(
Tv)>A._GetAutoObject(C.Converter).AbJ(K0))K0=Tv;}}AE.Bo(Am3);return K0;},AkP:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A1m:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BbE:function(AE,AE$,AaU,VA
,AdK){if(!AE)throw new Error(Ap1);var Bb=A._NewObject(C.Filter,0);var Am3=AE.Filter;
var Nw=A._NewObject(C.Int32FilterCriterion,0);Nw.Operator=0;Nw.EE=1;Nw.AY=AaU;Bb.
CO(Nw);if(VA>0){var NL=A._NewObject(C.UInt32FilterCriterion,0);NL.Operator=2;NL.
EE=6;NL.AY=VA;Bb.CO(NL);}if(AdK>0){var NB=A._NewObject(C.UInt32FilterCriterion,0
);NB.Operator=3;NB.EE=6;NB.AY=AdK;Bb.CO(NB);}AE.Bo(Bb);var Lo=A._NewObject(C.Int32ArrayWrapper
,0);Lo.XD(6);var P;for(P=0;P<Lo.LZ;P=P+1)Lo.Set(P,0);if(AE.Cd()>0){var Tv=AE.IC(
0,AE$);var Anh=AE.Hr(P,6);var Ad=A._NewObject(A.Core.Bp,0);Ad.Initialize(Anh);var
AnA=Tv;var AF5=A._NewObject(A.Core.Bp,0);AF5.Initialize(Ad.JL());for(P=1;P<AE.Cd(
);P=P+1){Tv=AE.IC(P,AE$);Anh=AE.Hr(P,6);Ad.Initialize(Anh);if((Ad.ZX()!==AF5.ZX(
))||(Ad.Year!==AF5.Year)){Lo.Set(AnA,Lo.Get(AnA)+1);AF5.Initialize(Ad.JL());AnA=
Tv;}else if(!!Tv&&(Tv<AnA))AnA=Tv;}Lo.Set(AnA,Lo.Get(AnA)+1);}AE.Bo(Am3);return Lo;
},AnG:function(Ll){var B;var FW=A._NewObject(A.Core.Bp,0);FW.Initialize(Ll);FW.Alf(
0);FW.Ali(0);FW.All(0);return((B=(FW.JL()|0))<0)?B+0x100000000:B;},AJO:function(
Ll){var B;Ll=Ll+86400;var FW=A._NewObject(A.Core.Bp,0);FW.Initialize(Ll);FW.Alf(
0);FW.Ali(0);FW.All(0);return((B=(FW.JL()|0))<0)?B+0x100000000:B;},BbG:function(
Bud,Brn,Aj4,Ajo){var A71=A._GetAutoObject(C.Helper).L6(Bud,Brn);if(A71>0)return((
Ajo-Aj4)/A71)|0;return 0;},BiB:function(Bpv,Bqb){var FW=A._NewObject(A.Core.Bp,0
);var Kq=A._NewObject(A.Core.Bp,0);FW.Initialize(Bpv);Kq.Initialize(Bqb);return(
FW.Year===Kq.Year)&&(FW.ZX()===Kq.ZX());},A0P:function(){var Bb=A._GetAutoObject(
C.Helper).LO();var A81=A._NewObject(C.UInt32FilterCriterion,0);var Bqk=A._GetAutoObject(
C.Helper).XU(A._GetAutoObject(C.Device).An4)-1;A81.Initialize(28,2,Bqk,true);Bb.
CO(A81);var Tq=A._NewObject(C.AnimalTypeFilterCriterion,0);Tq.Initialize(14,0,1,
true);Bb.CO(Tq);if(A._GetAutoObject(C.Device).AkD){var AwN=A._NewObject(C.UInt32FilterCriterion
,0);var AWY=A._GetAutoObject(C.Helper).DN()-21600;AwN.Initialize(30,3,AWY,true);
Bb.CO(AwN);}return Bb;},Bhm:function(){var IQ=A._GetAutoObject(C.Device).Aq.NQ();
if(IQ<=0)A.aa8("%s",AaG);else{A._GetAutoObject(C.Device).Aq.GZ();A._GetAutoObject(
C.Device).Aq.NS(IQ);}IQ=A._GetAutoObject(C.Device).Aet.NQ();if(IQ<=0)A.aa8("%s",
AaG);else{A._GetAutoObject(C.Device).Aet.GZ();A._GetAutoObject(C.Device).Aet.NS(
IQ);}IQ=A._GetAutoObject(C.Device).Bt.NQ();if(IQ<=0)A.aa8("%s",AaG);else{A._GetAutoObject(
C.Device).Bt.GZ();A._GetAutoObject(C.Device).Bt.NS(IQ);}IQ=A._GetAutoObject(C.Device
).OD.NQ();if(IQ<=0)A.aa8("%s",AaG);else{A._GetAutoObject(C.Device).OD.GZ();A._GetAutoObject(
C.Device).OD.NS(IQ);}},BcI:function(AaU){var A5=A._GetAutoObject(C.Device).Aq.LL(
0,AaU);return this.HS(A5);},AMI:function(Nu){var Agj=A._GetAutoObject(C.Device).
Aq.Ab5(22,Nu);return Agj;},AKt:function(){var Bb=A._GetAutoObject(C.Helper).LO();
var AgU=A._NewObject(C.UInt64FilterCriterion,0);AgU.Initialize(22,0,0,true);Bb.CO(
AgU);return Bb;},AKn:function(Amm,Brk,RT){var AvL=-1;switch(Amm){case 2:AvL=30;break;
case 3:AvL=31;break;case 10:AvL=19;break;default:A.aa8("%s%e",AiS,Amm);}if(AvL<0
)return null;var Aa6=A._NewObject(C.UInt32FilterCriterion,0);Aa6.Initialize(AvL,
3,A._GetAutoObject(C.Helper).DN()-Brk,RT);return Aa6;},Bhl:function(aFilter){var
AK=aFilter.DG(30,3);if(!!AK)aFilter.P6(AK);AK=aFilter.DG(31,3);if(!!AK)aFilter.P6(
AK);AK=aFilter.DG(19,3);if(!!AK)aFilter.P6(AK);},A7R:function(AdS,Avw,AE){if(AE.
Mp())return 5;if(AdS.VisualId<=0)switch(Avw){case 0:if(!AdS.NaisId)return 1;break;
case 1:if(!AdS.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;
default:throw new Error(ADx+Avw.toFixed());}if((!AdS.NaisId&&!AdS.TransponderId)&&
A._GetAutoObject(C.Device).Aq.Ahq(1,AdS.VisualId))return 2;if(!!AdS.NaisId&&A._GetAutoObject(
C.Helper).AMG(AdS.NaisId))return 3;if(!!AdS.TransponderId&&A._GetAutoObject(C.Helper
).AMI(AdS.TransponderId))return 4;return 0;},Ax$:function(GI){GI.DO(A._GetAutoObject(
C.Device).AnimalType);GI.O1(A._GetAutoObject(C.Device).Breed);GI.AcO(A._GetAutoObject(
C.Helper).DN()-A._GetAutoObject(C.Helper).AyQ(A._GetAutoObject(C.Device).Ake));GI.
J7(A._GetAutoObject(C.Device).Gender);},AY7:function(Vz,GI){var Ma=0;switch(Vz){
case 0:Ma=A._GetAutoObject(C.Helper).AlI(GI.NaisId);break;case 1:Ma=A._GetAutoObject(
C.Helper).AlI(GI.TransponderId);break;case 3:Ma=A._GetAutoObject(C.Device).Asr;break;
case 2:Ma=A._GetAutoObject(C.Device).Ass;break;case 4:case 5:Ma=A._GetAutoObject(
C.Device).Aob;break;default:throw new Error(ADy+Vz.toFixed());}return Ma;},A5h:function(
Ai6,Lm,Bph,A6Y,BpP){var B;var Pq=null;var VK=null;switch(Ai6){case 0:{Pq=[B=A._GetAutoObject(
C.Device),B.ANU,B.AUH];VK=[B=A._GetAutoObject(C.Device),B.As7,B.Avq];}break;case
1:switch(Lm){case 1:{Pq=[B=A._GetAutoObject(C.Device),B.A2B,B.A6t];VK=[B=A._GetAutoObject(
C.Device),B.As5,B.Avo];}break;case 0:{Pq=[B=A._GetAutoObject(C.Device),B.A2C,B.A6u
];VK=[B=A._GetAutoObject(C.Device),B.As6,B.Avp];}break;case 2:{Pq=[B=A._GetAutoObject(
C.Device),B.ANU,B.AUH];VK=[B=A._GetAutoObject(C.Device),B.As7,B.Avq];}break;default:
throw new Error(AuT+Lm.toFixed());}break;default:throw new Error(ADz+Ai6.toFixed(
));}if(!!Pq&&!!VK){Pq[2].call(Pq[0],Bph);if((VK[1].call(VK[0])>0)&&(A6Y<BpP))Pq[
2].call(Pq[0],Pq[1].call(Pq[0])+VK[1].call(VK[0]));else if((VK[1].call(VK[0])<0)&&(
A6Y>0))Pq[2].call(Pq[0],Pq[1].call(Pq[0])+VK[1].call(VK[0]));return Pq[1].call(Pq[
0]);}return 0;},AQl:function(GI,Ai6,Bpo){if(!GI||(Bpo===true))return;switch(Ai6){
case 0:GI.O2(A._GetAutoObject(C.Device).AsV);break;case 1:switch(GI.Gender){case
0:GI.O2(A._GetAutoObject(C.Device).AAv);break;case 1:GI.O2(A._GetAutoObject(C.Device
).AAu);break;case 2:GI.O2(A._GetAutoObject(C.Device).AsV);break;default:throw new
Error(AuT+GI.Gender.toFixed());}break;default:throw new Error(ADz+Ai6.toFixed());
}},Bci:function(Vz,GI){var result=false;switch(Vz){case 0:result=!!GI.NaisId;break;
case 1:result=!!GI.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(ADy+Vz.toFixed());}return result;},AWE:function(GI
,A6T,Avw,Aqt,AdO){switch(A6T){case 2:if(Aqt<=0)A._GetAutoObject(C.Device).A_(21,
true,GI.VisualId.toFixed(),0,AdO);else A._GetAutoObject(C.Device).A_(48,true,(GI.
VisualId.toFixed()+AuU)+Aqt.toFixed(),0,AdO);break;case 3:if(Aqt<=0)A._GetAutoObject(
C.Device).A_(21,true,A._GetAutoObject(C.Converter).U_(GI.NaisId),0,AdO);else A._GetAutoObject(
C.Device).A_(48,true,(A._GetAutoObject(C.Converter).U_(GI.NaisId)+AuU)+Aqt.toFixed(
),0,AdO);break;case 4:if(Aqt<=0)A._GetAutoObject(C.Device).A_(25,true,A._GetAutoObject(
C.Converter).U_(GI.TransponderId),0,AdO);else A._GetAutoObject(C.Device).A_(47,true
,(A._GetAutoObject(C.Converter).U_(GI.TransponderId)+AuU)+Aqt.toFixed(),0,AdO);break;
case 1:switch(Avw){case 1:A._GetAutoObject(C.Device).A_(42,true,A.jm,0,AdO);break;
case 0:A._GetAutoObject(C.Device).A_(43,true,A.jm,0,AdO);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A_(22,true,A.jm,0,AdO);break;default:throw new
Error(ADx+Avw.toFixed());}break;case 5:A._GetAutoObject(C.Device).A_(41,true,A._GetAutoObject(
C.Device).Aq.Ie().toFixed(),0,AdO);break;case 0:break;default:throw new Error(AQ0+
A6T.toFixed());}},A8s:function(A65,Lm){var B;var AwQ=null;switch(A65){case 0:AwQ=[
B=A._GetAutoObject(C.Device),B.As7,B.Avq];break;case 1:switch(Lm){case 1:AwQ=[B=
A._GetAutoObject(C.Device),B.As5,B.Avo];break;case 0:AwQ=[B=A._GetAutoObject(C.Device
),B.As6,B.Avp];break;case 2:AwQ=[B=A._GetAutoObject(C.Device),B.As7,B.Avq];break;
default:throw new Error(AuT+Lm.toFixed());}break;default:throw new Error(AQ1+A65.
toFixed());}return AwQ;},A0Z:function(Ph,Bp2){var YP=A._NewObject(A.Core.Bp,0);YP.
Initialize(Ph);var Ax1=YP.Year;var A5=A._GetAutoObject(C.Device).OD.LL(0,Ax1);var
Tu=A._NewObject(C.CalfDeregistrations,0);if(A5<0){if(A._GetAutoObject(C.Device).
OD.Mp())A._GetAutoObject(C.Device).A_(51,true,A._GetAutoObject(C.Device).OD.Ie().
toFixed(),0,null);else{Tu.GC();Tu.Aim(Ax1);}}else Tu.Fo(A5,A._GetAutoObject(C.Device
).OD);Tu.Atm(Tu.Deregistrations+1);if(Bp2)Tu.Atl(Tu.Deaths+1);Tu.Cr(A._GetAutoObject(
C.Device).OD);},AH2:function(K0,Ajy,Ajp){var AGC=0;if((Ajy&&(Ajp===1))||(K0===1)
)AGC=1;else if((Ajy&&(Ajp===2))||(K0===2))AGC=2;else if(!!K0&&(K0!==5))AGC=K0;return AGC;
},A76:function(Bqj){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.RB.
Ch=A._GetAutoObject(C.Device).X4;this.RB.BW=Bqj;this.RB.ACP(this);}},Azf:function(
){var Bb=this.AKm();var A8R=A._NewObject(C.BoolFilterCriterion,0);A8R.Initialize(
38,0,true,true);Bb.CO(A8R);return Bb;},A0J:function(Jr){var Bb=A._GetAutoObject(
C.Helper).LO();if(A._GetAutoObject(C.Device).Akc){var AWG=A._GetAutoObject(C.Helper
).AKn(Jr,21600,true);Bb.CO(AWG);}return Bb;},A0T:function(){var Bb=A._GetAutoObject(
C.Helper).LO();var A9e=A._NewObject(C.UInt64FilterCriterion,0);A9e.Initialize(26
,0,0,true);Bb.CO(A9e);return Bb;},A0W:function(){var B;var Bb=A._GetAutoObject(C.
Helper).LO();var AwU=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.DG(34,3))?
B:null);if(!!AwU)Bb.P6(AwU);var A_q=A._NewObject(C.BoolFilterCriterion,0);A_q.Initialize(
37,0,true,true);Bb.CO(A_q);return Bb;},T$:function(A2,BpV,AVi){var B;A2=Math.trunc(
A2/this.Axi(BpV));A2%=this.Axi(AVi);return A2;},Axi:function(A66){switch(A66){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AQ2+A66.toFixed());}},LO:
function(){var Bb=A._NewObject(C.Filter,0);var A_N=A._NewObject(C.BoolFilterCriterion
,0);A_N.Initialize(10,0,true,true);Bb.CO(A_N);var AwU=A._NewObject(C.WhereAboutsFilterCriterion
,0);AwU.Initialize(34,3,6,true);Bb.CO(AwU);return Bb;},Aom:function(aFilter){return!
this.Azi(aFilter);},Azi:function(aFilter){var I7=0;var At=aFilter.AKo();while(!!
At){if(At.ZF===false)I7++;At=aFilter.AKs(At);}return I7;},AKm:function(){var Bb=
this.LO();var Tq=A._NewObject(C.AnimalTypeFilterCriterion,0);Tq.Initialize(14,0,
1,true);Bb.CO(Tq);return Bb;},Azm:function(){var B;var AYl;var Ny=this.BbW();AYl=(((
B=A._GetAutoObject(C.Converter).ArO(Ny))<0)?B+0x10000000000000000:B)*this.Axi(12
);if((Ny===10)&&(A._GetAutoObject(C.Device).Ac3>0)){var BrL=A._GetAutoObject(C.Helper
).T$(A._GetAutoObject(C.Device).Ac3,10,2)*this.Axi(8);AYl+=BrL;}return AYl;},BbW:
function(){var Ny=0;if(A._GetAutoObject(C.Device).Ac3>0)Ny=A._GetAutoObject(C.Converter
).AfQ(A._GetAutoObject(C.Device).Ac3);if(!Ny)Ny=A._GetAutoObject(C.Converter).BcA(
A._GetAutoObject(C.Device).Language);return Ny;},AMG:function(AdN){var Agj=A._GetAutoObject(
C.Device).Aq.Ab5(26,AdN);return Agj;},AhM:function(Amk){switch(Amk){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AQ3+Amk.toFixed());}},A$U:function(Vz,GI){var Ma=0;switch(
Vz){case 1:Ma=A._GetAutoObject(C.Helper).AlI(GI.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Ma=A._GetAutoObject(C.Device).
Aob;else switch(GI.Gender){case 0:Ma=A._GetAutoObject(C.Device).Ass;break;case 1:
Ma=A._GetAutoObject(C.Device).Asr;break;case 2:Ma=A._GetAutoObject(C.Device).Aob;
break;default:throw new Error(AQ4+GI.Gender.toFixed());}break;default:throw new Error(
AQ5+Vz.toFixed());}return Ma;},Bbs:function(){var B;var Aww=(((((((A.z2(A.abg.AfF
)+A.z2(A.abg.Colon))+Of)+A._GetAutoObject(C.Device).AfF)+AuV)+A.z2(A.abg.Bg5))+A.
z2(A.abg.Colon))+Of)+A._GetAutoObject(A.abk.K5).Bbq(((B=A._GetAutoObject(C.Device
).PX.Timestamp)<0)?B+0x100000000:B);return Aww;},Bbt:function(){var B;var Aww=((((((((((((((((((((((((((((
AQ6+A._GetAutoObject(C.Device).QO.AAl.toFixed())+Nq)+A._GetAutoObject(C.Device).
QO.AAr.toFixed())+Nq)+A._GetAutoObject(C.Device).QO.ACq.toFixed())+Kb)+A._GetAutoObject(
C.Device).QO.AyL)+Kb)+A._GetAutoObject(A.abk.K5).Aht(((B=A._GetAutoObject(C.Device
).QO.Timestamp)<0)?B+0x100000000:B))+Of)+AQ7)+A._GetAutoObject(C.Device).Rl.AAl.
toFixed())+Nq)+A._GetAutoObject(C.Device).Rl.AAr.toFixed())+Nq)+A._GetAutoObject(
C.Device).Rl.ACq.toFixed())+Kb)+A._GetAutoObject(C.Device).Rl.AyL)+Kb)+A._GetAutoObject(
A.abk.K5).Aht(((B=A._GetAutoObject(C.Device).Rl.Timestamp)<0)?B+0x100000000:B))+
Of)+AQ8)+A._GetAutoObject(C.Helper).BbZ())+Kb)+A._GetAutoObject(C.Device).GetCommitHash(
))+Kb)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+Kb)+A._GetAutoObject(
A.abk.K5).Aht(A._GetAutoObject(C.Device).GetCommitEpoch());return Aww;},Bbr:function(
){var B;var Aww=(((((((((((((((((((((AQ9+A._GetAutoObject(C.Device).PX.AM4.toFixed(
))+Nq)+A._GetAutoObject(C.Device).PX.AM5.toFixed())+Nq)+A._GetAutoObject(C.Device
).PX.AM3.toFixed())+Of)+A.z2(A.abg.A0C))+A.z2(A.abg.Colon))+JU)+A._GetAutoObject(
A.abk.K5).Aht(((B=A._GetAutoObject(C.Device).PX.Timestamp)<0)?B+0x100000000:B))+
AuV)+AQ_)+A._GetAutoObject(C.Device).RE.AQf.toFixed())+Nq)+A._GetAutoObject(C.Device
).RE.AQg.toFixed())+Nq)+A._GetAutoObject(C.Device).RE.AQe.toFixed())+Of)+A.z2(A.
abg.A0C))+A.z2(A.abg.Colon))+JU)+A._GetAutoObject(A.abk.K5).Aht(((B=A._GetAutoObject(
C.Device).RE.Timestamp)<0)?B+0x100000000:B);return Aww;},A0U:function(AVi){var B;
var P;var Axm=A.jm;for(P=1;P<=AVi;P=P+1)if(!!A.aaC(0,2))Axm=Axm+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else Axm=Axm+String.fromCharCode(A.aaC(48,57)&0xFFFF);return Axm;
},Ahw:function(D3){var AvP=0;if(D3===1)D3=0;var A7L=this.AeB.Asj(D3);if(A7L>=0)AvP=
this.Adw.Get(A7L);return AvP;},Azo:function(D3){var Fk=0;var AxY=this.AeB.Asj(D3
);if(AxY>=0)Fk=this.Adv.Get(AxY);return Fk;},Azn:function(D3){var Fk=0;var AxY=this.
AeB.Asj(D3);if(AxY>=0)Fk=this.Adu.Get(AxY);return Fk;},A0M:function(){var Bb=this.
LO();var Tq=A._NewObject(C.AnimalTypeFilterCriterion,0);Tq.Initialize(14,0,A._GetAutoObject(
C.Device).Ay3,true);Bb.CO(Tq);return Bb;},AMJ:function(JX){var BJ=Math.trunc(JX/
1000000000000)|0;if(!BJ)return 0;else if(BJ>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AJd(BJ))return 2;else return 3;},A0Y:function(){var Bb=A._GetAutoObject(
C.Helper).AKt();var Ai9=A._GetAutoObject(C.Helper).BbC(3,60);Ai9.ZF=true;Bb.CO(Ai9
);return Bb;},BbC:function(En,A6S){var At=A._NewObject(C.UInt32FilterCriterion,0
);At.EE=4;switch(En){case 2:{At.Operator=3;At.AY=A._GetAutoObject(C.Helper).XU(A6S
);}break;case 3:{At.Operator=2;At.AY=A._GetAutoObject(C.Helper).XU(A6S-1);}break;
default:A.aa8("%s%e",AQ$,En);}return At;},BbZ:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Nq)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Nq)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},AoF:function(
){return this.S2;},A2H:function(){return this.AfC;},Beg:function(){return this.APu;
},Beh:function(){return this.APv;},Bel:function(){return this.ACU;},_Init:function(
aArg){C.Akx._Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.
Bp._Init.call(this.Ap={I:this},0);A.abm.FC._Init.call(this.J0={I:this},0);A.abm.
FC._Init.call(this.RB={I:this},0);C.AIm._Init.call(this.AbI={I:this},0);C.AP8._Init.
call(this.S7={I:this},0);C.AP7._Init.call(this.S6={I:this},0);C.Y5._Init.call(this.
Ab7={I:this},0);C.AQF._Init.call(this.Adv={I:this},0);C.AQE._Init.call(this.Adu={
I:this},0);C.AQD._Init.call(this.Adt={I:this},0);C.AQH._Init.call(this.Adw={I:this
},0);C.AIn._Init.call(this.AeB={I:this},0);this.__proto__=C.HelperClass;var B;this.
J0.IF(1);this.J0.FI(3000);this.J0.BW=100;this.RB.Atr(10);this.RB.UP(5);this.RB.IF(
1);this.RB.FI(4000);this.Ab7.BW=false;this.Ab7.Ch=true;this.Ab7.IF(1);this.Ab7.FI(
100);this.J0.Rm=[this,this.Bue];this.J0.Q=[this,this.Bel,this.Bgz];this.RB.Rm=[this
,this.Bug];this.RB.Q=[B=A._GetAutoObject(C.Device),B.AAQ,B.AEP];this.Ab7.Q=[B=A.
_GetAutoObject(C.Device),B.AAR,B.AEQ];this.Init(aArg);var KN=this._variants();if(
KN){this.K={};KN._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.Akx;this.V._Done();this.Ap._Done();this.J0._Done();this.
RB._Done();this.AbI._Done();this.S7._Done();this.S6._Done();this.Ab7._Done();this.
Adv._Done();this.Adu._Done();this.Adt._Done();this.Adw._Done();this.AeB._Done();
C.Akx._Done.call(this);},_ReInit:function(){C.Akx._ReInit.call(this);this.V._ReInit(
);this.Ap._ReInit();this.J0._ReInit();this.RB._ReInit();this.AbI._ReInit();this.
S7._ReInit();this.S6._ReInit();this.Ab7._ReInit();this.Adv._ReInit();this.Adu._ReInit(
);this.Adt._ReInit();this.Adw._ReInit();this.AeB._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.Akx._Mark.call(this,D);if((B=this.S2)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AfC)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.APu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.APv)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.J0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Adu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Adt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={AY:false,Ab2:function(){var At=
A._NewObject(C.BoolFilterCriterion,0);At.F0(this);return At;},F0:function(AK){C.
FilterCriterion.F0.call(this,AK);var At=(C.BoolFilterCriterion.isPrototypeOf(AK)?
AK:null);if(!!At)this.AY=At.AY;},Initialize:function(AQ,En,A2,RT){this.EE=AQ;this.
Operator=En;this.AY=A2;this.ZF=RT;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={AY:0,Ab2:function(){var At=A._NewObject(C.UInt32FilterCriterion
,0);At.F0(this);return At;},F0:function(AK){C.FilterCriterion.F0.call(this,AK);var
At=(C.UInt32FilterCriterion.isPrototypeOf(AK)?AK:null);if(!!At)this.AY=At.AY;},Initialize:
function(AQ,En,A2,RT){this.EE=AQ;this.Operator=En;this.AY=A2;this.ZF=RT;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,LAST:13};C.EnumToString={Ca:
function(A9){throw new Error(Ap2+A9.toFixed());},KL:function(A9){return this.Ca(
A9);},_Init:function(aArg){this.__proto__=C.EnumToString;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={Ca:function(A9){var AFV=A9;var Bs;
switch(AFV){case 3:Bs=A.z2(A.abg.Asq);break;case 33:Bs=A.z2(A.abg.Ox);break;case
34:Bs=A.z2(A.abg.TQ);break;case 46:Bs=A.z2(A.abg.AKj);break;default:Bs=this.BiC(
A9);}return Bs;},BiC:function(A9){var AFV=A9;var Bs=A.jm;switch(AFV){case 0:Bs=AuW;
break;case 2:Bs=ADA;break;case 4:Bs=ARa;break;case 39:Bs=ADB;break;case 38:Bs=ARb;
break;case 72:Bs=ARc;break;case 73:Bs=ARd;break;case 93:Bs=ARe;break;case 94:Bs=
ADC;break;case 74:Bs=ARf;break;case 3:Bs=AuX;break;case 6:Bs=ADD;break;case 16:Bs=
ADE;break;case 22:Bs=ARg;break;case 45:Bs=ADF;break;case 55:Bs=ARh;break;case 17:
Bs=ARi;break;case 23:Bs=Vq;break;case 18:Bs=Vr;break;case 19:Bs=ARj;break;case 37:
Bs=ARk;break;case 87:Bs=ARl;break;case 1:Bs=ARm;break;case 5:Bs=ARn;break;case 7:
Bs=ARo;break;case 92:Bs=ARp;break;case 8:Bs=AiU;break;case 9:Bs=ADG;break;case 40:
Bs=ARq;break;case 41:Bs=ARr;break;case 24:Bs=ADH;break;case 10:Bs=ADI;break;case
68:Bs=AuY;break;case 21:Bs=RQ;break;case 11:Bs=ARs;break;case 28:Bs=ARt;break;case
53:Bs=ARu;break;case 29:Bs=Ap3;break;case 12:Bs=ARv;break;case 13:Bs=ARw;break;case
14:Bs=ARx;break;case 15:Bs=ARy;break;case 78:Bs=ARz;break;case 79:Bs=ARA;break;case
20:Bs=Ap4;break;case 36:Bs=ARB;break;case 42:Bs=ARC;break;case 43:Bs=ARD;break;case
44:Bs=ARE;break;case 25:Bs=ARF;break;case 75:Bs=ARG;break;case 67:Bs=ARH;break;case
66:Bs=ARI;break;case 64:Bs=ARJ;break;case 65:Bs=ARK;break;case 77:Bs=ADJ;break;case
76:Bs=Ap5;break;case 95:Bs=ARL;break;case 88:Bs=ARM;break;case 26:Bs=ARN;break;case
27:Bs=AuZ;break;case 30:Bs=AiV;break;case 89:Bs=AfV;break;case 33:Bs=Au0;break;case
34:Bs=AlX;break;case 31:Bs=AfW;break;case 49:Bs=ARO;break;case 54:Bs=Ap6;break;case
63:Bs=ADK;break;case 62:Bs=AdF;break;case 32:Bs=ADL;break;case 35:Bs=Yf;break;case
56:Bs=AiW;break;case 86:Bs=AlY;break;case 57:Bs=ARP;break;case 46:Bs=ARQ;break;case
48:Bs=ARR;break;case 47:Bs=ARS;break;case 69:Bs=ART;break;case 71:Bs=Ap7;break;case
70:Bs=ADM;break;case 50:Bs=ADN;break;case 52:Bs=ARU;break;case 51:Bs=ARV;break;case
96:Bs=ARW;break;case 98:Bs=ARX;break;case 97:Bs=ARY;break;case 80:Bs=ARZ;break;case
82:Bs=ADO;break;case 81:Bs=AR0;break;case 85:Bs=ADP;break;case 84:Bs=ADQ;break;case
83:Bs=ADR;break;case 58:Bs=ADS;break;case 60:Bs=ADT;break;case 59:Bs=ADU;break;case
61:Bs=ADV;break;case 90:Bs=AR1;break;case 91:Bs=AR2;break;default:throw new Error(
AR3+AFV.toFixed());}return Bs;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={Ca:function(A9){var A_m=A9;var TF=A.jm;switch(A_m){case
0:TF=AR4;break;case 1:TF=AuX;break;case 8:TF=AR5;break;case 2:TF=AR6;break;case 3:
TF=AR7;break;case 4:TF=Au1;break;case 5:TF=ADW;break;case 6:TF=AR8;break;case 7:
TF=ADX;break;case 11:TF=AiX;break;case 12:TF=AfX;break;case 9:TF=AR9;break;case 10:
TF=AiY;break;default:throw new Error(AR_+A_m.toFixed());}return TF;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={Ca:function(A9){
var A_V=A9;var Bl=A.jm;switch(A_V){case 4:Bl=Au2;break;case 0:Bl=AiZ;break;case 2:
Bl=AdG;break;case 3:Bl=AR$;break;case 1:Bl=ADY;break;default:throw new Error(Ap8+
A_V.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={Ca:function(A9){var A8_=A9;var Bl=A.jm;switch(A8_){case
4:Bl=Au2;break;case 0:Bl=AiZ;break;case 2:Bl=ASa;break;case 1:Bl=ADY;break;case 3:
Bl=Nr;break;default:throw new Error(ASb+A8_.toFixed());}return Bl;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={Ca:function(A9){var A$i=A9;var Anu=A.jm;switch(
A$i){case 0:Anu=A.z2(A.abg.BiT);break;case 1:Anu=A.z2(A.abg.BiU);break;default:throw new
Error(ASc+A$i.toFixed());}return Anu;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
Ca:function(A9){var A__=A9;var type=A.jm;switch(A__){case 0:type=A.z2(A.abg.Bap);
break;case 1:type=A.z2(A.abg.BaE);break;case 2:type=A.z2(A.abg.Bcx);break;default:
throw new Error(ASd+A__.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={Ca:function(A9){var AwI=
A9;var On=A.jm;switch(AwI){case 0:On=ASe;break;case 10:On=ADZ;break;case 1:On=AD0;
break;case 12:On=ASf;break;case 5:On=ASg;break;case 3:On=ASh;break;case 8:On=ASi;
break;case 13:On=ASj;break;case 4:On=ASk;break;case 9:On=ASl;break;case 2:On=ASm;
break;case 7:On=AD1;break;case 6:On=ASn;break;case 11:On=AD2;break;case 14:On=AD3;
break;case 15:On=Au3;break;case 16:On=ASo;break;default:throw new Error(AD4+AwI.
toFixed());}return On;},KL:function(A9){var AwI=A9;var C5=A.jm;switch(AwI){case 0:
C5=RP;break;case 10:C5=Vn;break;case 1:C5=Qg;break;case 12:C5=Vi;break;case 5:C5=
Tj;break;case 3:C5=Vj;break;case 8:C5=Vk;break;case 13:C5=Vf;break;case 4:C5=Tk;
break;case 9:C5=Qh;break;case 2:C5=Yc;break;case 7:C5=AdA;break;case 6:C5=Vg;break;
case 11:C5=RN;break;case 14:C5=Ve;break;case 15:C5=RO;break;case 16:C5=AaE;break;
default:throw new Error(AD4+AwI.toFixed());}return C5;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={Ca:function(A9){var AqL=A9;var AF$=A.jm;
switch(AqL){case 0:AF$=A.z2(A.abg.Male);break;case 1:AF$=A.z2(A.abg.Female);break;
case 2:AF$=A.z2(A.abg.Unknown);break;default:throw new Error(ASp+AqL.toFixed());
}return AF$;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={Ca:
function(A9){var type=A9;var AdV=A.jm;switch(type){case 0:AdV=A.z2(A.abg.BhX);break;
case 1:AdV=A.z2(A.abg.BiP);break;case 2:AdV=A.z2(A.abg.Triplets);break;case 3:AdV=
A.z2(A.abg.Quadruplets);break;default:throw new Error(ASq+type.toFixed());}return AdV;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;
},_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2
,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={
Ca:function(A9){var A$c=A9;var Bl=A.jm;switch(A$c){case 7:Bl=Au2;break;case 0:Bl=
AiZ;break;case 6:Bl=Nr;break;case 2:Bl=ASr;break;case 5:Bl=ASs;break;case 3:Bl=ASt;
break;case 4:Bl=ASu;break;case 1:Bl=Au4;break;default:throw new Error(AD5+A$c.toFixed(
));}return Bl;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.SyncStateToString;},_className:"Device::SyncStateToString"};C.RatedAttributeToString={
Ca:function(A9){var Axn=A9;switch(Axn){case 0:return A.jm;case 1:return A.z2(A.abg.
Bhb);case 4:return A.z2(A.abg.Bha);case 3:return A.z2(A.abg.Bhc);case 2:return A.
z2(A.abg.Bg$);default:throw new Error(Au5+Axn.toFixed());}},KL:function(A9){var Axn=
A9;switch(Axn){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.
z2(A.abg.ACh);case 3:return A.z2(A.abg.ACi);case 2:return A.z2(A.abg.ACf);default:
throw new Error(Au5+Axn.toFixed());}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={Ca:function(A9){var Ajc=A9;var AvX=A.jm;switch(Ajc){case 0:
case 5:AvX=A.jm;break;case 3:AvX=A.z2(A.abk.Bh3);break;case 2:AvX=A.z2(A.abk.Bh5
);break;case 1:AvX=A.z2(A.abk.Bh4);break;default:throw new Error(ASv+Ajc.toFixed(
));}return AvX;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AssesmentToString;},_className:"Device::AssesmentToString"};C.PopupId={
Unknown:0,SevereError:1,EnterSleep:2,About:3,WarningDataSync:4,SuccessDataSync:5
,WarningRestart:6,WarningFactorySettings:7,SuccessResetFactorySettings:8,ShutDown:
9,TechnicalDetails:10,ScanError:11,ScanNotFound:12,ScannedAnimalNotFound:13,AnimalNotFound:
14,SuccessUnregister:15,DataSynchInProgress:16,AddedToAlarm:17,RemovedFromAlarm:
18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:21,MissingAnimalId:
22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
25,SuccessCreationNewAnimal:26,WarningNoActionDefined:27,WarningNoMenuItemVisible:
28,WarningEnterPresentationMode:29,WarningNoAnimalsRegistered:30,HelpAnimalInfoRating:
31,CannotReassignTransponder:32,WarningResetAnimalData:33,SuccessResetAnimalData:
34,SuccessUnregisterPerished:35,ScannedTransponderNotFound:36,WarningResetWeightSettings:
37,WarningResetTempThresholds:38,UpdateFirmware:39,ConfirmFirmwareUpdated:40,WarningMaxNumAnimalsReached:
41,WarningScanTransponder:42,MissingEartagNumber:43,WarningResetToDefault:44,WarningEartagNumberTooShort:
45,WarningNoValidCountryCode:46,TransponderAlreadyRegisteredContinuable:47,AnimalIdAlreadyExistsContinuable:
48,EvaluationInProgress:49,WarningMaxNumRatingsReached:50,WarningMaxNumCalfDeregistrationsReached:
51,WarningOutdatedAnimalWeights:52,WarningWeightEvaluationSingular:53,AddedToDryOff:
54,RemovedFromDryOff:55,WarningWeightEvaluationPlural:56,WarningOutdatedAnimalWeight:
57,ErrorsDeviceDriverCheck:58,QuestionAddAnotherCalfMultiples:59,RemovedFromBirthAnnouncmentPending:
60,RemovedAnimal:61,RemovedAllBirthAnnouncmentsPending:62,MissingAnimalIdMother:
63,WarningActionNotApplicable:64,SuccessClearAnimalLoss:65,WarningNoActionsForAnimalLoss:
66,SuccessLinkTransponder:67,SuccessLinkNaisId:68,CannotReassignNaisId:69,WarningDataExportHitBirthFailed:
70,SuccessDataExportHitBirth:71,SuccessDataExportHitBirthDownload:72,WarningNoPremisesID:
73,WarningNoFlashDrivePresent:74,ConfirmBootloaderUpdated:75,UpdateFirmwareBatteryLow:
76,InfoSoftwareVersions:77,InfoHardwareVersions:78,InfoSerial:79,SuccessCreateBackup:
80,SuccessRestoreBackup:81,FailedCreateBackup:82,FailedRestoreBackup:83,DemoFunctionNotAvailable:
84,MissingTransponderId:85,SuccessUnlinkTransponder:86,WarningImpreciseTimeSetting:
87,WarningDataExportAnimalsFailed:88,SuccessDataExportAnimalsRatings:89,SuccessDataExportAnimalsDownload:
90,WarningScanOverwriteNaisId:91,CreateBackupInProgress:92,RestoreBackupInProgress:
93,WarningNoBackupFilePresent:94,WarningNoBackupPathPresent:95,ConfirmationRestoreBackup:
96,LAST:97};C.PopupState={Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:
4,ClosedWithCancel:5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:
9};C.PopupContext={AB6:null,Aio:A.jm,AiI:0,PopupState:1,Id:0,Show:false,Bgk:function(
E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.AB6)(B=this.AB6
)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AB6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={Ca:function(
A9){switch(A9){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.Yes);default:
return Au6+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:ADw,Id:0,Fo:function(Z,AE){var G6=C.Row.
Fo.call(this,Z,AE);if(G6&&!!AE){this.OnSetId(AE.Cp(Z,0));this.ABi(AE.Ub(Z,1));}return G6;
},Cr:function(AE){var G6=C.Row.Cr.call(this,AE);if(G6&&!!AE){var IQ=AE.NQ();if(IQ<=
0)A.aa8("%s",AaG);else{if(this.AkQ())this.Ct=AE.WU();AE.GG(this.Ct,0,this.Id);AE.
XO(this.Ct,1,this.GroupName);AE.NS(IQ);}}return G6;},GC:function(){C.Row.GC.call(
this);this.OnSetId(-1);},GZ:function(){C.Row.GZ.call(this);this.OnSetId(0);this.
ABi(A.jm);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.
P0,this.OnSetId],0);},ABi:function(E){if(this.GroupName===E)return;this.GroupName=
E;A.aat([this,this.BdZ,this.ABi],0);},P0:function(){return this.Id;},BdZ:function(
){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.
__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={
Ca:function(A9){var Abm=A9;var Ax=A.jm;var AFT;AFT=A.z2(A.abg.Bja)+Of;switch(Abm
){case 0:Ax=A.z2(A.abg.Unknown);break;case 1:Ax=A.z2(A.abg.SevereError);break;case
58:Ax=A.z2(A.abg.Bbg);break;case 2:Ax=A.z2(A.abg.Bbe);break;case 3:Ax=A.z2(A.abg.
BiY);break;case 77:Ax=A._GetAutoObject(C.Helper).Bbt();break;case 78:Ax=A._GetAutoObject(
C.Helper).Bbr();break;case 79:Ax=A._GetAutoObject(C.Helper).Bbs();break;case 9:Ax=
A.z2(A.abg.Bjk);break;case 5:Ax=A.z2(A.abg.SuccessDataSync);break;case 8:Ax=A.z2(
A.abg.SuccessResetFactorySettings);break;case 34:Ax=A.z2(A.abg.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).Azk();break;case 82:Ax=A.z2(A.abg.
Bbi);break;case 83:Ax=A.z2(A.abg.Bbj);break;case 80:Ax=A.z2(A.abg.Bia);break;case
81:Ax=A.z2(A.abg.SuccessRestoreBackup);break;case 92:Ax=A.z2(A.abg.Baf);break;case
93:Ax=A.z2(A.abg.Bho);break;case 4:Ax=A.z2(A.abg.WarningDataSync);break;case 7:Ax=
A.z2(A.abg.Bjh);break;case 33:Ax=A.z2(A.abg.WarningResetAnimalData);break;case 6:
Ax=A.z2(A.abg.WarningRestart);break;case 27:Ax=A.z2(A.abg.WarningNoActionDefined
);break;case 64:Ax=A.z2(A.abg.WarningActionNotApplicable);break;case 28:Ax=A.z2(
A.abg.WarningNoMenuItemVisible);break;case 29:Ax=A.z2(A.abg.WarningEnterPresentationMode
);break;case 30:Ax=A.z2(A.abg.WarningNoAnimalsRegistered);break;case 41:Ax=((AFT+
A.z2(A.abg.AM8))+Of)+A.z2(A.abg.BcP);break;case 50:Ax=((AFT+A.z2(A.abg.AM8))+Of)+
A.z2(A.abg.BcR);break;case 51:Ax=((AFT+A.z2(A.abg.AM8))+Of)+A.z2(A.abg.BcQ);break;
case 42:Ax=A.z2(A.abg.Bjj);break;case 91:Ax=A.z2(A.abg.WarningScanOverwriteNaisId
);break;case 45:Ax=A.z2(A.abg.Bje);break;case 46:Ax=A.z2(A.abg.WarningNoValidCountryCode
);break;case 57:Ax=A.z2(A.abg.WarningOutdatedAnimalWeight);break;case 52:Ax=A.z2(
A.abg.WarningOutdatedAnimalWeights);break;case 53:Ax=A.z2(A.abg.WarningWeightEvaluationSingular
);break;case 56:Ax=A.z2(A.abg.WarningWeightEvaluationPlural);break;case 11:Ax=A.
z2(A.abg.ScanError);break;case 12:Ax=A.z2(A.abg.ScanNotFound);break;case 13:Ax=A.
z2(A.abg.A$2);break;case 36:Ax=A.z2(A.abg.BiK);break;case 14:Ax=A.z2(A.abg.AnimalNotFound
);break;case 15:Ax=A.z2(A.abg.SuccessUnregister);break;case 35:Ax=A.z2(A.abg.SuccessUnregisterPerished
);break;case 26:Ax=A.z2(A.abg.SuccessCreationNewAnimal);break;case 23:Ax=A.z2(A.
abg.SuccessCreationNewAnimals);break;case 24:Ax=A.z2(A.abg.BaH);break;case 49:Ax=
A.z2(A.abg.EvaluationInProgress);break;case 16:Ax=A.z2(A.abg.BaM);break;case 17:
Ax=A.z2(A.abg.Bh7);break;case 18:Ax=A.z2(A.abg.Bif);break;case 19:Ax=A.z2(A.abg.
Bh8);break;case 20:Ax=A.z2(A.abg.Big);break;case 54:Ax=A.z2(A.abg.Bib);break;case
55:Ax=A.z2(A.abg.Bie);break;case 21:Ax=A.z2(A.abg.AY8);break;case 48:Ax=(A.z2(A.
abg.AY8)+Of)+A.z2(A.abg.AZS);break;case 22:Ax=A.z2(A.abg.BcW);break;case 63:Ax=A.
z2(A.abg.Bjf);break;case 85:Ax=A.z2(A.abg.Bjg);break;case 43:Ax=A.z2(A.abg.BcX);
break;case 25:Ax=A.z2(A.abg.A48);break;case 47:Ax=(A.z2(A.abg.A48)+Of)+A.z2(A.abg.
AZS);break;case 31:{var Br9=(((((((((((((((((((A.z2(A.abg.Bax)+AuV)+A.z2(A.abg.AI9
))+A.z2(A.abg.Colon))+JU)+A.z2(A.abg.Baz))+Of)+A.z2(A.abg.AJ9))+A.z2(A.abg.Colon
))+JU)+A.z2(A.abg.Bbn))+Of)+A.z2(A.abg.APf))+A.z2(A.abg.Colon))+JU)+A.z2(A.abg.Bhe
))+Of)+A.z2(A.abg.APe))+A.z2(A.abg.Colon))+JU)+A.z2(A.abg.Bhd);Ax=Br9;}break;case
32:Ax=A.z2(A.abg.BiL);break;case 69:Ax=A.z2(A.abg.Bc4);break;case 44:Ax=A.z2(A.abg.
Bji);break;case 37:Ax=A.z2(A.abg.WarningResetWeightSettings);break;case 38:Ax=A.
z2(A.abg.WarningResetTempThresholds);break;case 39:Ax=A.z2(A.abg.Bg7);break;case
76:Ax=(A.z2(A.abg.AZA)+Of)+A.z2(A.abg.APh);break;case 40:Ax=A.z2(A.abg.Bic);break;
case 75:Ax=A.z2(A.abg.Bh9);break;case 59:Ax=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Ax=A.z2(A.abg.Bh_);break;case 60:Ax=A.z2(A.abg.Bh$);break;case 61:
Ax=A.z2(A.abg.Bih);break;case 65:Ax=A.z2(A.abg.SuccessClearAnimalLoss);break;case
66:Ax=A.z2(A.abg.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.z2(A.abg.SuccessLinkTransponder
);break;case 86:Ax=A.z2(A.abg.SuccessUnlinkTransponder);break;case 68:Ax=A.z2(A.
abg.Bid);break;case 70:Ax=A.z2(A.abg.Bbk);break;case 71:Ax=A.z2(A.abg.Bik);break;
case 72:Ax=A.z2(A.abg.Bil);break;case 88:Ax=A.z2(A.abg.Bbl);break;case 89:Ax=A.z2(
A.abg.Bii);break;case 90:Ax=A.z2(A.abg.Bij);break;case 73:Ax=A.z2(A.abg.WarningNoPremisesID
);break;case 74:Ax=A.z2(A.abg.WarningNoFlashDrivePresent);break;case 95:Ax=A.z2(
A.abg.WarningNoBackupPathPresent);break;case 94:Ax=A.z2(A.abg.WarningNoBackupFilePresent
);break;case 84:Ax=A.z2(A.abg.BbA);break;case 87:Ax=A.z2(A.abg.Bjm);break;case 96:
Ax=A.z2(A.abg.Bjd);break;default:throw new Error(AD6+Abm.toFixed());}return Ax;}
,KL:function(A9){var Abm=A9;var Ax=A.jm;switch(Abm){case 0:Ax=ASw;break;case 1:Ax=
ASx;break;case 58:Ax=ASy;break;case 2:Ax=ASz;break;case 3:Ax=ASA;break;case 77:Ax=
ASB;break;case 78:Ax=ASC;break;case 79:Ax=ASD;break;case 9:Ax=ASE;break;case 5:Ax=
ASF;break;case 8:Ax=ASG;break;case 34:Ax=ASH;break;case 80:Ax=ASI;break;case 81:
Ax=ASJ;break;case 92:Ax=ASK;break;case 93:Ax=AD7;break;case 82:Ax=AD8;break;case
83:Ax=AD9;break;case 10:Ax=AD_;break;case 4:Ax=AD$;break;case 7:Ax=AEa;break;case
33:Ax=AEb;break;case 6:Ax=ASL;break;case 27:Ax=ASM;break;case 64:Ax=ASN;break;case
28:Ax=ASO;break;case 29:Ax=ASP;break;case 30:Ax=ASQ;break;case 41:Ax=ASR;break;case
50:Ax=ASS;break;case 51:Ax=AST;break;case 42:Ax=ASU;break;case 91:Ax=ASV;break;case
45:Ax=ASW;break;case 46:Ax=ASX;break;case 57:Ax=Au7;break;case 52:Ax=ASY;break;case
53:Ax=ASZ;break;case 56:Ax=Au8;break;case 11:Ax=Au9;break;case 12:Ax=Yg;break;case
13:Ax=Ap9;break;case 36:Ax=AEc;break;case 14:Ax=AS0;break;case 15:Ax=AS1;break;case
35:Ax=AEd;break;case 26:Ax=AS2;break;case 23:Ax=AEe;break;case 24:Ax=AS3;break;case
49:Ax=AS4;break;case 16:Ax=AS5;break;case 17:Ax=Ap_;break;case 18:Ax=AS6;break;case
19:Ax=AS7;break;case 20:Ax=AEf;break;case 54:Ax=AS8;break;case 55:Ax=AS9;break;case
21:Ax=AS_;break;case 48:Ax=AS$;break;case 22:Ax=Yh;break;case 63:Ax=ATa;break;case
43:Ax=ATb;break;case 85:Ax=ATc;break;case 25:Ax=ATd;break;case 47:Ax=AEg;break;case
31:Ax=ATe;break;case 32:Ax=ATf;break;case 69:Ax=ATg;break;case 44:Ax=ATh;break;case
37:Ax=ATi;break;case 38:Ax=ATj;break;case 39:Ax=AEh;break;case 76:Ax=ATk;break;case
40:Ax=ATl;break;case 75:Ax=ATm;break;case 59:Ax=AEi;break;case 62:Ax=AEj;break;case
60:Ax=ATn;break;case 65:Ax=ATo;break;case 61:Ax=ATp;break;case 66:Ax=ATq;break;case
67:Ax=Qj;break;case 86:Ax=Ap$;break;case 68:Ax=AEk;break;case 70:Ax=AEl;break;case
71:Ax=AlZ;break;case 72:Ax=Al0;break;case 88:Ax=Au_;break;case 89:Ax=ATr;break;case
90:Ax=AEm;break;case 73:Ax=ATs;break;case 74:Ax=ATt;break;case 95:Ax=ATu;break;case
94:Ax=ATv;break;case 84:Ax=ATw;break;case 87:Ax=ATx;break;case 96:Ax=ATy;break;default:
throw new Error(AD6+Abm.toFixed());}return Ax;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"
};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={Ca:function(
A9){var A$r=A9;var type=A.jm;switch(A$r){case 1:type=ATz;break;case 2:type=ATA;break;
case 3:type=ATB;break;case 4:type=ATC;break;case 0:type=AuW;break;default:throw new
Error(ATD+A$r.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={Ca:function(A9){var A$q=A9;var Axk=A.jm;switch(
A$q){case 1:Axk=ATE;break;case 2:Axk=ATF;break;case 3:Axk=ATG;break;case 0:Axk=AuW;
break;default:throw new Error(ATH+A$q.toFixed());}return Axk;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AOR:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.aat([this,this.Bex,this.AOR],0);},AOQ:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.aat([this,this.Bew,this.AOQ],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.P0,this.OnSetId],0);
},AKx:function(){return A._GetAutoObject(C.Converter).BiJ(this.Id);},BbJ:function(
){return A._GetAutoObject(C.Converter).Aut(this.Id);},Bex:function(){return this.
TransponderType;},Bew:function(){return this.TransponderProtocol;},P0:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={Ca:function(A9){var
TC=A9;var MI=A.jm;switch(TC){case 0:MI=A.z2(A.abg.Basic);break;case 1:MI=A.z2(A.
abg.Extended);break;default:throw new Error(ATI+TC.toFixed());}return MI;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={Ca:function(A9){var
A87=A9;var Anu=A.jm;switch(A87){case 0:Anu=A.z2(A.abg.Bcv);break;case 1:Anu=A.z2(
A.abg.Pound);break;default:throw new Error(Al1+A87.toFixed());}return Anu;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={LZ:10,Array:A.aan(10,0,null),XD:function(
E){if(this.LZ===E)return;if(E>10)throw new Error(AEn);this.LZ=E;},Set:function(aIndex
,AN){if((aIndex<0)||(aIndex>=this.LZ))throw new Error(AEo);this.Array.Set(aIndex
,AN);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.LZ))throw new Error(AEo
);return this.Array.Get(aIndex);},AkH:function(){var HK=0;var P;for(P=0;P<this.LZ;
P=P+1)HK=HK+this.Get(P);return HK;},toString:function(){var AW$=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.LZ;P=P+1)AW$=(AW$+Kb)+this.Array.Get(P).toFixed(
);return AW$;},Fo:function(aString){var KR=aString.indexOf(String.fromCharCode(0x2C
),0);var AV5=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(KR===-1){AV5=aString;aString=A.jm;}else{AV5=A.aaX(aString,KR);aString=A.aa3(aString
,0,KR+1);}this.Array.Set(P,A.vQ(AV5,0,10));KR=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AEp);},Cr:function(){},GZ:function(
){var P;for(P=0;P<this.LZ;P=P+1)this.Set(P,0);},Asj:function(A2){var P=0;while(P<
this.LZ){if(this.Array.Get(P)===A2)return P;P=P+1;}return-1;},HN:function(){var P=
0;var max=-1;while(P<this.LZ){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={Ca:function(A9){var Awh=A9;var EP=A.jm;switch(Awh){case 4:EP=
A.z2(A.abg.Alarm);break;case 256:EP=A.z2(A.abg.Weighing);break;case 128:EP=A.z2(
A.abg.A0o);break;case 16:EP=A.z2(A.abg.AH4);break;case 1:EP=A.z2(A.abg.Temperature
);break;case 32:EP=A.z2(A.abg.AnimalLoss);break;case 2:EP=A.z2(A.abg.Rating);break;
case 8:EP=A.z2(A.abg.Apg);break;case 64:EP=A.z2(A.abg.Unregister);break;case 512:
EP=A.z2(A.abg.ANp);break;case 1024:EP=A.z2(A.abg.LinkTransponder);break;case 262144:
EP=A.z2(A.abg.UnlinkTransponder);break;case 2048:EP=A.z2(A.abg.Ox);break;case 4096:
EP=A.z2(A.abg.Calving);break;case 8192:EP=A.z2(A.abg.DryOff);break;case 16384:EP=
A.z2(A.abg.A1t);break;case 32768:EP=A.z2(A.abg.Ayz);break;case 65536:EP=A.z2(A.abg.
Delete);break;case 131072:EP=A.z2(A.abg.A1u);break;case 0:EP=A.z2(A.abg.A1R);break;
default:throw new Error(Au$+Awh.toFixed());}return EP;},KL:function(A9){var Awh=
A9;var EP=A.jm;switch(Awh){case 4:EP=A.z2(A.abg.Alarm);break;case 256:EP=A.z2(A.
abg.Weighing);break;case 128:EP=A.z2(A.abg.A0o);break;case 16:EP=A.z2(A.abg.AH4);
break;case 1:EP=A.z2(A.abg.Temperature);break;case 32:EP=A.z2(A.abg.AnimalLoss);
break;case 2:EP=A.z2(A.abg.Rating);break;case 8:EP=A.z2(A.abg.Apg);break;case 64:
EP=A.z2(A.abg.Unregister);break;case 512:EP=A.z2(A.abg.ANp);break;case 1024:EP=A.
z2(A.abg.LinkTransponder);break;case 262144:EP=A.z2(A.abg.UnlinkTransponder);break;
case 2048:EP=A.z2(A.abg.Ox);break;case 4096:EP=A.z2(A.abg.Calving);break;case 8192:
EP=A.z2(A.abg.DryOff);break;case 16384:EP=A.z2(A.abg.A1s);break;case 32768:EP=A.
z2(A.abg.Ayz);break;case 65536:EP=A.z2(A.abg.Delete);break;case 131072:EP=A.z2(A.
abg.A1s);break;case 0:EP=A.z2(A.abg.A1R);break;default:throw new Error(Au$+Awh.toFixed(
));}return EP;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,Cp:function(Z,AQ){return 0;},Ub:function(Z,AQ){return A.
jm;},Ah4:function(H){A.vv(this,0);A.ow([this,this.Ez],this);},Hq:function(Z,AQ){
return false;},Hr:function(Z,AQ){return this.Q_(Z,AQ);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;},Cd:function(){return 0;},Bo:function(E){if(this.Filter===
E)return;this.Filter=E;A.aat([this,this.Fd,this.Ff],0);},Ff:function(Ao){this.Bo(
Ao);},IC:function(Z,AQ){var BtA=this.Uc(Z,AQ);return A._GetAutoObject(C.Converter
).A4$(BtA);},Uc:function(Z,AQ){return 0;},Q_:function(Z,AQ){return 0;},A0V:function(
Z,AQ){return this.Cp(Z,AQ);},NQ:function(){var IQ=0;var Buf=this.Id;return IQ;},
NS:function(Amh){var G6=0;var Buf=this.Id;return G6===1;},WU:function(){return-1;
},XQ:function(Z,AQ,CK){return false;},GG:function(Z,AQ,CK){return false;},XP:function(
Z,AQ,CK){return false;},My:function(Z,AQ,CK){return false;},XO:function(Z,AQ,CK){
return false;},Aai:function(Z,AQ,CK){return this.XP(Z,AQ,CK);},Aiy:function(Z,AQ
,CK){var BtB=A._GetAutoObject(C.Converter).AbJ(CK);return this.XQ(Z,AQ,BtB);},A4L:
function(Z,AQ,CK){return this.GG(Z,AQ,CK);},AKq:function(Z,AQ){return this.Cp(Z,
AQ);},BbH:function(Z,AQ){return this.Cp(Z,AQ);},BhI:function(Z,AQ,CK){return this.
GG(Z,AQ,CK);},BhE:function(Z,AQ,CK){return this.GG(Z,AQ,CK);},LL:function(aColumn
,A2){return-1;},AkF:function(Z,AQ){return this.Cp(Z,AQ);},BhC:function(Z,AQ,CK){
return this.GG(Z,AQ,CK);},Azj:function(Z,AQ){return this.Cp(Z,AQ);},APA:function(
Z,AQ,Nv){return this.GG(Z,AQ,Nv);},Ez:function(H){this.BqR();},BqR:function(){return-
1;},LP:function(Z,AQ){return 0;},S3:function(Z,AQ,CK){return false;},Ahs:function(
aColumn,A2){return-1;},GZ:function(){return false;},BbI:function(Z,AQ){var BtC=this.
Cp(Z,AQ);return A._GetAutoObject(C.Converter).Bb7(BtC);},BbL:function(Z,AQ){return this.
Cp(Z,AQ);},AKz:function(Z,AQ){return this.Cp(Z,AQ);},BhG:function(Z,AQ,CK){var BtD=
A._GetAutoObject(C.Converter).AZG(CK);return this.GG(Z,AQ,BtD);},BhH:function(Z,
AQ,CK){return this.GG(Z,AQ,CK);},BhO:function(Z,AQ,CK){return this.GG(Z,AQ,CK);}
,Ahq:function(aColumn,A2){return false;},Ab5:function(aColumn,A2){return false;}
,BbV:function(Z,AQ){return this.Cp(Z,AQ);},BhM:function(Z,AQ,CK){return this.GG(
Z,AQ,CK);},Mp:function(){return this.PF()>=this.Ie();},Ie:function(){return 0;},
Zq:function(){return-1;},PF:function(){return 0;},Fd:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
Ca:function(A9){var TC=A9;var MI=A.jm;switch(TC){case 0:MI=A.z2(A.abg.Automatic);
break;case 1:MI=A.z2(A.abg.Manual);break;default:throw new Error(AaH+TC.toFixed(
));}return MI;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={Ca:function(A9){switch(A9){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.V$);default:return Au6+A9.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
Ca:function(A9){var A_W=A9;var Axx=A.jm;switch(A_W){case 0:Axx=A.z2(A.abg.BaJ);break;
case 1:Axx=A.z2(A.abg.Bak);break;case 2:Axx=A.z2(A.abg.Bai);break;case 3:Axx=A.z2(
A.abg.Bdi);break;default:throw new Error(AEq+A_W.toFixed());}return Axx;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Jd={AbC:0,Temperature:1,Rating:2,AfT:3,BuN:
4,Bvr:5,BxZ:6,Bv4:7,BwM:8,BvC:9,BwL:10,Bw$:11,LAST:12};C.AnimalListContentToString={
Ca:function(A9){var A7z=A9;var VC=A.jm;switch(A7z){case 0:VC=ATJ;break;case 2:VC=
AEr;break;case 1:VC=ATK;break;case 3:VC=Ava;break;case 4:VC=ATL;break;case 5:VC=
ATM;break;case 6:VC=ATN;break;case 7:VC=ATO;break;case 8:VC=ATP;break;case 9:VC=
ATQ;break;case 10:VC=AEs;break;case 11:VC=Al2;break;default:throw new Error(AEt+
A7z.toFixed());}return VC;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={AY:0,Ab2:function(){var At=A._NewObject(C.GenderFilterCriterion
,0);At.F0(this);return At;},F0:function(AK){C.FilterCriterion.F0.call(this,AK);var
At=(C.GenderFilterCriterion.isPrototypeOf(AK)?AK:null);if(!!At)this.AY=At.AY;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={AY:0,
Ab2:function(){var At=A._NewObject(C.AnimalTypeFilterCriterion,0);At.F0(this);return At;
},F0:function(AK){C.FilterCriterion.F0.call(this,AK);var At=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AK)?AK:null);if(!!At)this.AY=At.AY;},Initialize:function(AQ,En,A2,
RT){this.EE=AQ;this.Operator=En;this.AY=A2;this.ZF=RT;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.BuZ={Aem:0,BuY:1,Bwx:2,A4s:3
,AZM:4,BxI:5,Bvq:6,BxH:7,LinkTransponder:8,Ox:9,Weighing:10,Calving:11,LinkNaisId:
12,Bw_:13,ClearBirthAnnouncementPending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17
};C.AutoRegistrationModeToString={Ca:function(A9){var TC=A9;var MI=A.jm;switch(TC
){case 0:MI=A.z2(A.abg.BaA);break;case 1:MI=A.z2(A.abg.Bb$);break;case 2:MI=A.z2(
A.abg.Off);break;default:throw new Error(ATR+TC.toFixed());}return MI;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={AY:0,Ab2:function(){var
At=A._NewObject(C.AssessmentFilterCriterion,0);At.F0(this);return At;},F0:function(
AK){C.FilterCriterion.F0.call(this,AK);var At=(C.AssessmentFilterCriterion.isPrototypeOf(
AK)?AK:null);if(!!At)this.AY=At.AY;},Initialize:function(AQ,En,A2,RT){this.EE=AQ;
this.Operator=En;this.AY=A2;this.ZF=RT;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.DK={AbC:0,Temperature:1,AfT:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={Ca:function(A9){switch(A9
){case 0:return A.z2(A.abg.A$S);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return AEu+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.AP8={Cr:function(){A._GetAutoObject(C.Device).Ao$(this.toString());},Init:function(
aArg){var B;A.za([this,this.A99],[B=A._GetAutoObject(C.Device),B.A2Q,B.A6z],0);this.
A99(this);},A99:function(H){this.Fo(A._GetAutoObject(C.Device).AC0);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AP8;this.XD(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AP7={Init:function(aArg){var B;A.za([this,this.A97],[B=A._GetAutoObject(C.Device
),B.A2P,B.A6y],0);this.A97(this);},Cr:function(){A._GetAutoObject(C.Device).Ao_(
this.toString());},A97:function(H){this.Fo(A._GetAutoObject(C.Device).ACZ);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AP7;this.XD(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AIm={Init:function(aArg){var B;A.za([this,this.A9D],[B=A._GetAutoObject(C.Device
),B.A2e,B.A6g],0);this.A9D(this);},A9D:function(H){this.Fo(A._GetAutoObject(C.Device
).Aya);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AIm;this.XD(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={AY:0,Ab2:function(){var At=A._NewObject(C.UInt64FilterCriterion
,0);At.F0(this);return At;},F0:function(AK){C.FilterCriterion.F0.call(this,AK);var
At=(C.UInt64FilterCriterion.isPrototypeOf(AK)?AK:null);if(!!At)this.AY=At.AY;},Initialize:
function(AQ,En,A2,RT){this.EE=AQ;this.Operator=En;this.AY=A2;this.ZF=RT;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
Ca:function(A9){switch(A9){case 0:return A.z2(A.abg.Ah3);case 1:return A.z2(A.abg.
A$T);default:return Au6+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.CZ={UNDEFINED:0,AT:1,BA:2,BE:3,Bu4:
4,Bvh:5,Bvi:6,Bvj:7,Bvk:8,Bvl:9,Bvv:10,Bvw:11,BvD:12,BvE:13,BvT:14,FR:15,GR:16,Bv6:
17,Bv7:18,Bwa:19,Bwb:20,Bwg:21,Bwh:22,Bwi:23,Bwj:24,Bwp:25,BwD:26,BwE:27,BwS:28,
BwT:29,Bw8:30,Bw9:31,Bxm:32,Bxn:33,Bxo:34,BxB:35,BxC:36,BxS:37,A5a:38,BxT:39,LAST:
40};C.CountryToString={Ca:function(A9){var Ny=A9;var E8=A.jm;switch(Ny){case 1:E8=
A.z2(A.abn.A$6);break;case 2:E8=A.z2(A.abn.Bal);break;case 3:E8=A.z2(A.abn.Bah);
break;case 4:E8=A.abn.Bao;break;case 5:E8=A.z2(A.abn.Bar);break;case 6:E8=A.z2(A.
abn.Bip);break;case 7:E8=A.z2(A.abn.Bau);break;case 8:E8=A.z2(A.abn.BaK);break;case
9:E8=A.z2(A.abn.BaL);break;case 10:E8=A.z2(A.abn.BbB);break;case 11:E8=A.z2(A.abn.
BaQ);break;case 12:E8=A.z2(A.abn.Bbh);break;case 13:E8=A.z2(A.abn.Bh0);break;case
14:E8=A.z2(A.abn.Bbp);break;case 15:E8=A.z2(A.abn.Bbx);break;case 16:E8=A.z2(A.abn.
Bb3);break;case 17:E8=A.z2(A.abn.BaI);break;case 18:E8=A.z2(A.abn.Bb8);break;case
19:E8=A.z2(A.abn.Bcg);break;case 20:E8=A.z2(A.abn.Bcq);break;case 21:E8=A.z2(A.abn.
Bcs);break;case 22:E8=A.z2(A.abn.BcH);break;case 23:E8=A.z2(A.abn.BcL);break;case
24:E8=A.z2(A.abn.BcF);break;case 25:E8=A.abn.BcN;break;case 26:E8=A.z2(A.abn.Bc5
);break;case 27:E8=A.z2(A.abn.Bdj);break;case 28:E8=A.z2(A.abn.BgZ);break;case 29:
E8=A.z2(A.abn.Bg0);break;case 30:E8=A.z2(A.abn.Bhp);break;case 31:E8=A.z2(A.abn.
Bhr);break;case 32:E8=A.z2(A.abn.Bio);break;case 33:E8=A.z2(A.abn.BhZ);break;case
34:E8=A.z2(A.abn.BhY);break;case 35:E8=A.z2(A.abn.BiO);break;case 36:E8=A.z2(A.abn.
Biy);break;case 37:E8=A.z2(A.abn.BiS);break;case 38:E8=A.z2(A.abn.A5a);break;case
39:E8=A.z2(A.abn.BiR);break;case 0:E8=Ai0;break;default:throw new Error(ApZ+Ny.toFixed(
));}return E8;},KL:function(A9){var Ny=A9;var BJ=A.jm;switch(Ny){case 1:BJ=RL;break;
case 2:BJ=Ve;break;case 3:BJ=Ti;break;case 4:BJ=Vf;break;case 5:BJ=JT;break;case
6:BJ=Yd;break;case 7:BJ=RM;break;case 8:BJ=X7;break;case 9:BJ=RN;break;case 10:BJ=
Qg;break;case 11:BJ=X8;break;case 12:BJ=Vi;break;case 13:BJ=Yc;break;case 14:BJ=
Tj;break;case 15:BJ=Vj;break;case 16:BJ=Vk;break;case 17:BJ=Vh;break;case 18:BJ=
Np;break;case 19:BJ=Pd;break;case 20:BJ=Tk;break;case 21:BJ=X9;break;case 22:BJ=
X_;break;case 23:BJ=X$;break;case 24:BJ=Vl;break;case 25:BJ=Vm;break;case 26:BJ=
Vn;break;case 27:BJ=RO;break;case 28:BJ=Ya;break;case 29:BJ=Yb;break;case 30:BJ=
AaC;break;case 31:BJ=Qh;break;case 32:BJ=Vo;break;case 33:BJ=Adz;break;case 34:BJ=
AaD;break;case 35:BJ=AdA;break;case 36:BJ=Vg;break;case 37:BJ=KM;break;case 38:BJ=
AaE;break;case 39:BJ=RP;break;case 0:BJ=Ai0;break;default:throw new Error(ApZ+Ny.
toFixed());}return BJ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};C.EaseOfDelivery={
Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={
Ca:function(A9){var A79=A9;var AqE=A.jm;switch(A79){case 0:AqE=A.z2(A.abg.Unspecified
);break;case 1:AqE=A.z2(A.abg.Easy);break;case 2:AqE=A.z2(A.abg.Moderate);break;
case 3:AqE=A.z2(A.abg.Difficult);break;case 4:AqE=A.z2(A.abg.Surgery);break;default:
throw new Error(Ai1+A79.toFixed());}return AqE;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={Ca:function(A9){var A$I=A9;var YS=A.jm;switch(
A$I){case 0:YS=A.z2(A.abg.Unknown);break;case 1:YS=A.z2(A.abg.Bi0);break;case 2:
YS=A.z2(A.abg.BiZ);break;case 3:YS=A.z2(A.abg.Bi8);break;case 4:YS=A.z2(A.abg.Bi7
);break;case 5:YS=A.z2(A.abg.Bi5);break;case 6:YS=A.z2(A.abg.Bi2);break;case 7:YS=
A.z2(A.abg.Bi4);break;case 8:YS=A.z2(A.abg.Bi3);break;case 9:YS=A.z2(A.abg.Bi1);
break;case 10:YS=A.z2(A.abg.Bi6);break;default:throw new Error(ATS+A$I.toFixed()
);}return YS;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:
0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:
14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26
,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:
39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:
51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:
63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:
75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:
87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,
LAST:99};C.BreedToString={Ca:function(A9){var Bn=A9;var BD=A.jm;switch(Bn){case 0:
BD=A.z2(A.abg.Unknown);break;case 1:BD=A.z2(A.abl.SBT);break;case 2:BD=A.z2(A.abl.
RBT);break;case 3:BD=A.z2(A.abl.JER);break;case 4:BD=A.z2(A.abl.BV);break;case 5:
BD=A.z2(A.abl.RVA);break;case 6:BD=A.z2(A.abl.RV);break;case 7:BD=A.z2(A.abl.RDN
);break;case 8:BD=A.z2(A.abl.DSN);break;case 9:BD=A.z2(A.abl.FL);break;case 10:BD=
A.z2(A.abl.GV);break;case 11:BD=A.z2(A.abl.PIN);break;case 12:BD=A.z2(A.abl.HIN);
break;case 13:BD=A.z2(A.abl.MW);break;case 14:BD=A.z2(A.abl.VW);break;case 15:BD=
A.z2(A.abl.LMP);break;case 16:BD=A.z2(A.abl.DBV);break;case 17:BD=A.z2(A.abl.AS);
break;case 18:BD=A.z2(A.abl.VR);break;case 19:BD=A.z2(A.abl.CHA);break;case 20:BD=
A.z2(A.abl.LIM);break;case 21:BD=A.z2(A.abl.WBB);break;case 22:BD=A.z2(A.abl.BA);
break;case 23:BD=A.z2(A.abl.MA);break;case 24:BD=A.z2(A.abl.SAL);break;case 25:BD=
A.z2(A.abl.MON);break;case 26:BD=A.z2(A.abl.AU);break;case 27:BD=A.z2(A.abl.PIE);
break;case 28:BD=A.z2(A.abl.CHI);break;case 29:BD=A.z2(A.abl.ROM);break;case 30:
BD=A.z2(A.abl.MAR);break;case 31:BD=A.z2(A.abl.WP);break;case 32:BD=A.z2(A.abl.BB
);break;case 33:BD=A.z2(A.abl.DA);break;case 34:BD=A.z2(A.abl.AA);break;case 35:
BD=A.z2(A.abl.HE);break;case 36:BD=A.z2(A.abl.SH);break;case 37:BD=A.z2(A.abl.HLD
);break;case 38:BD=A.z2(A.abl.WB);break;case 39:BD=A.z2(A.abl.GAL);break;case 40:
BD=A.z2(A.abl.LR);break;case 41:BD=A.z2(A.abl.BGA);break;case 42:BD=A.z2(A.abl.LG
);break;case 43:BD=A.z2(A.abl.BRA);break;case 44:BD=A.z2(A.abl.NOR);break;case 45:
BD=A.z2(A.abl.UST);break;case 46:BD=A.z2(A.abl.ZEB);break;case 47:BD=A.z2(A.abl.
GRV);break;case 48:BD=A.z2(A.abl.DEX);break;case 49:BD=A.z2(A.abl.WGA);break;case
50:BD=A.z2(A.abl.LH);break;case 51:BD=A.z2(A.abl.SD);break;case 52:BD=A.z2(A.abl.
FR);break;case 53:BD=A.z2(A.abl.TUX);break;case 54:BD=A.z2(A.abl.TLM);break;case
55:BD=A.z2(A.abl.FLF);break;case 56:BD=A.z2(A.abl.UCK);break;case 57:BD=A.z2(A.abl.
BLA);break;case 58:BD=A.z2(A.abl.WIT);break;case 59:BD=A.z2(A.abl.LAK);break;case
60:BD=A.z2(A.abl.RHV);break;case 61:BD=A.z2(A.abl.AT);break;case 62:BD=A.z2(A.abl.
GR);break;case 63:BD=A.z2(A.abl.PIF);break;case 64:BD=A.z2(A.abl.PS);break;case 65:
BD=A.z2(A.abl.GVF);break;case 66:BD=A.z2(A.abl.BVF);break;case 67:BD=A.z2(A.abl.
RBF);break;case 68:BD=A.z2(A.abl.HWF);break;case 69:BD=A.z2(A.abl.MWF);break;case
70:BD=A.z2(A.abl.VWF);break;case 71:BD=A.z2(A.abl.LPF);break;case 72:BD=A.z2(A.abl.
BRN);break;case 73:BD=A.z2(A.abl.BAZ);break;case 74:BD=A.z2(A.abl.AO);break;case
75:BD=A.z2(A.abl.BE);break;case 76:BD=A.z2(A.abl.WL);break;case 77:BD=A.z2(A.abl.
BIS);break;case 78:BD=A.z2(A.abl.YAK);break;case 79:BD=A.z2(A.abl.SON);break;case
80:BD=A.z2(A.abl.TAU);break;case 81:BD=A.z2(A.abl.IND);break;case 82:BD=A.z2(A.abl.
TIN);break;case 83:BD=A.z2(A.abl.WAG);break;case 84:BD=A.z2(A.abl.XFF);break;case
85:BD=A.z2(A.abl.XFM);break;case 86:BD=A.z2(A.abl.XMM);break;case 87:BD=A.z2(A.abl.
EVO);break;case 88:BD=A.abl.BLH;break;case 89:BD=A.abl.TLH;break;case 90:BD=A.abl.
MGR;break;case 91:BD=A.abl.WSH;break;case 92:BD=A.abl.MUR;break;case 93:BD=A.z2(
A.abl.EBS);break;case 94:BD=A.z2(A.abl.ERI);break;case 95:BD=A.abl.PAR;break;case
96:BD=A.z2(A.abl.XZF);break;case 97:BD=A.z2(A.abl.XZM);break;case 98:BD=A.z2(A.abl.
XZZ);break;default:throw new Error(Al3+Bn.toFixed());}return BD;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.Y5={timer:null,Q:null,DR:0,Dc:0,LV:0,OF:1000,OO:1000,
Bw:false,Ch:false,BW:true,Ly:function(H){var F;if(!this.timer)return;if(this.DR<
0){this.Dc=this.timer.Bp;this.DR=0;}var Ap=(this.timer.Bp-this.Dc)|0;var NI=this.
OF;var Gw=this.OO+this.OF;var KU=0;var I7=this.DR;if(!I7&&(Ap>=NI)){I7=1;Ap=Ap-NI;
}if((I7>0)&&(Ap>=Gw)){var HH=(Ap/Gw)|0;Ap=Ap-(HH*Gw);I7=I7+HH;}if((I7>2)&&!this.
LV)I7=1;if(I7!==this.DR){this.Dc=this.timer.Bp-(((B=Ap)<0)?B+0x100000000:B);this.
DR=I7;}if(I7>0)KU=this.OO;var L8=(I7>=this.LV)&&(this.LV>0);if(!!this.Q){if((!L8&&(
Ap>=KU))&&((F=this.Q,F[1].call(F[0]))!==this.Ch))(F=this.Q,F[2].call(F[0],this.Ch
));if((L8||((Ap<KU)&&(I7>0)))&&((F=this.Q,F[1].call(F[0]))!==this.BW))(F=this.Q,
F[2].call(F[0],this.BW));}if(L8)this.An(false);},IF:function(E){if(E<0)E=0;this.
LV=E;},FI:function(E){if(E<100)E=100;this.OF=E;},Z6:function(E){if(E<0)E=0;this.
OO=E;},An:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.zl([
this,this.Ly],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
abm.AeN);A.y_([this,this.Ly],this.timer,0);this.DR=-1;}},_Init:function(aArg){this.
__proto__=C.Y5;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.HM={AnimalId:0,TransponderId:1,Bws:2,Bwr:3,Bwv:4,Bwu:5};C.ArW={Bu2:0,Bvx:1};
C.AnimalIdGenerationMethodToString={Ca:function(A9){var Ajb=A9;var Amn=A.jm;switch(
Ajb){case 0:Amn=A.z2(A.abg.ZU);break;case 1:Amn=A.z2(A.abg.Transponder);break;case
3:Amn=(A.z2(A.abg.Manual)+JU)+A.z2(A.abg.Male);break;case 2:Amn=(A.z2(A.abg.Manual
)+JU)+A.z2(A.abg.Female);break;case 4:Amn=(A.z2(A.abg.Manual)+JU)+A.z2(A.abg.Unknown
);break;case 5:Amn=(A.z2(A.abg.Manual)+JU)+ATT;break;default:throw new Error(AEv+
Ajb.toFixed());}return Amn;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={Ca:function(A9){var Awg=A9;var AWa=A.jm;switch(
Awg){case 0:AWa=AEw;break;case 1:AWa=ATU;break;default:throw new Error(ATV+Awg.toFixed(
));}return AWa;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={ApM:function(A9){throw new Error(Ap2+A9.toFixed());},ApN:function(
A9){throw new Error(Ap2+A9.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Ab0={ApM:function(A9){return A.
zW(A.abi.APV);},ApN:function(A9){var Awg=A9;var Qw=-1;switch(Awg){case 0:Qw=3;break;
case 1:Qw=2;break;default:throw new Error(Avb+Awg.toFixed());}return Qw;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Ab0;},_className:
"Device::DirectionOfCountingToIcon"};C.AbG={ApM:function(A9){return A.zW(A.abi.APT
);},ApN:function(A9){var Ajb=A9;var Qw=-1;switch(Ajb){case 0:Qw=0;break;case 1:Qw=
6;break;case 3:Qw=4;break;case 2:Qw=5;break;case 4:Qw=2;break;case 5:Qw=3;break;
default:throw new Error(Avb+Ajb.toFixed());}return Qw;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AbG;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.OJ={UNDEFINED:0,SH:1,AKC:2,ANa:3,AKB:4,A1K:5,HE:6,A4q:7,AZr:8,AIy:9,APr:10,BE:
11,BB:12,A1z:13,APs:14,APt:15,AP0:16};C.GermanStateToString={Ca:function(A9){var
Bl=A9;var FV=A.jm;switch(Bl){case 1:FV=A.z2(A.abo.SH);break;case 2:FV=A.z2(A.abo.
AKC);break;case 3:FV=A.z2(A.abo.ANa);break;case 4:FV=A.z2(A.abo.AKB);break;case 5:
FV=A.z2(A.abo.A1K);break;case 6:FV=A.z2(A.abo.HE);break;case 7:FV=A.z2(A.abo.A4q
);break;case 8:FV=A.z2(A.abo.AZr);break;case 9:FV=A.z2(A.abo.AIy);break;case 10:
FV=A.z2(A.abo.APr);break;case 11:FV=A.z2(A.abo.BE);break;case 12:FV=A.z2(A.abo.BB
);break;case 13:FV=A.z2(A.abo.A1z);break;case 14:FV=A.z2(A.abo.APs);break;case 15:
FV=A.z2(A.abo.APt);break;case 16:FV=A.z2(A.abo.AP0);break;case 0:FV=Ai0;break;default:
throw new Error(Aqa+Bl.toFixed());}return FV;},KL:function(A9){var Bl=A9;var FV=
A.jm;switch(Bl){case 1:FV=A.z2(A.abo.Bhs);break;case 2:FV=A.z2(A.abo.AKC);break;
case 3:FV=A.z2(A.abo.ANa);break;case 4:FV=A.z2(A.abo.AKB);break;case 5:FV=A.z2(A.
abo.Bc2);break;case 6:FV=A.z2(A.abo.HE);break;case 7:FV=A.z2(A.abo.Bg_);break;case
8:FV=A.z2(A.abo.A$9);break;case 9:FV=A.z2(A.abo.AIy);break;case 10:FV=A.z2(A.abo.
APr);break;case 11:FV=A.z2(A.abo.BE);break;case 12:FV=A.z2(A.abo.BB);break;case 13:
FV=A.z2(A.abo.BcM);break;case 14:FV=A.z2(A.abo.APs);break;case 15:FV=A.z2(A.abo.
APt);break;case 16:FV=A.z2(A.abo.AP0);break;case 0:FV=Ai0;break;default:throw new
Error(Aqa+Bl.toFixed());}return FV;},BiD:function(A9){var Bl=A9;var Fx=-1;switch(
Bl){case 0:Fx=0;break;case 1:Fx=1;break;case 2:Fx=2;break;case 3:Fx=3;break;case
4:Fx=4;break;case 5:Fx=5;break;case 6:Fx=6;break;case 7:Fx=7;break;case 8:Fx=8;break;
case 9:Fx=9;break;case 10:Fx=10;break;case 11:Fx=11;break;case 12:Fx=12;break;case
13:Fx=13;break;case 14:Fx=14;break;case 15:Fx=15;break;case 16:Fx=16;break;default:
throw new Error(Aqa+Bl.toFixed());}return Fx;},BiE:function(A9){var Bl=A9;var Fx=
A.jm;switch(Bl){case 1:Fx=ATW;break;case 2:Fx=ATX;break;case 3:Fx=ATY;break;case
4:Fx=ATZ;break;case 5:Fx=AT0;break;case 6:Fx=AT1;break;case 7:Fx=AT2;break;case 8:
Fx=AT3;break;case 9:Fx=AT4;break;case 10:Fx=AT5;break;case 11:Fx=Ti;break;case 12:
Fx=AT6;break;case 13:Fx=AT7;break;case 14:Fx=AEx;break;case 15:Fx=Yi;break;case 16:
Fx=AT8;break;case 0:Fx=Ai0;break;default:throw new Error(Aqa+Bl.toFixed());}return Fx;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={KL:function(A9){var
TC=A9;var MI=A.jm;switch(TC){case 0:MI=Avc;break;case 1:MI=AT9;break;default:throw new
Error(AEy+TC.toFixed());}return MI;},Ca:function(A9){var TC=A9;var MI=A.jm;switch(
TC){case 0:MI=A.z2(A.abg.BgS);break;case 1:MI=A.z2(A.abg.BiQ);break;default:throw new
Error(AEy+TC.toFixed());}return MI;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.BuW={BwJ:0,Bwz:1,BvN:2,BvO:3,BvP:4,BxD:5};C.EnumToCodeset={Akp:function(AfY){
throw new Error(AT_+AfY.toFixed());},Ab4:function(A9){throw new Error(Ap2+A9.toFixed(
));},An6:function(){A.aa8("%s",AEz);return 0;},HN:function(){A.aa8("%s",AEz);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MS={Akp:function(AfY){var Bn;switch(AfY){case 0:Bn=0;
break;case 1:Bn=1;break;case 2:Bn=2;break;case 3:Bn=3;break;case 4:Bn=4;break;case
5:Bn=5;break;case 6:Bn=6;break;case 9:Bn=7;break;case 10:Bn=8;break;case 11:Bn=9;
break;case 12:Bn=10;break;case 13:Bn=11;break;case 14:Bn=12;break;case 15:Bn=13;
break;case 16:Bn=14;break;case 17:Bn=15;break;case 18:Bn=16;break;case 19:Bn=17;
break;case 20:Bn=18;break;case 21:Bn=19;break;case 22:Bn=20;break;case 23:Bn=21;
break;case 24:Bn=22;break;case 25:Bn=23;break;case 26:Bn=24;break;case 27:Bn=25;
break;case 28:Bn=26;break;case 31:Bn=27;break;case 32:Bn=28;break;case 33:Bn=29;
break;case 34:Bn=30;break;case 35:Bn=31;break;case 36:Bn=32;break;case 41:Bn=33;
break;case 42:Bn=34;break;case 43:Bn=35;break;case 44:Bn=36;break;case 45:Bn=37;
break;case 46:Bn=38;break;case 47:Bn=39;break;case 48:Bn=40;break;case 49:Bn=41;
break;case 50:Bn=42;break;case 51:Bn=43;break;case 52:Bn=44;break;case 53:Bn=45;
break;case 54:Bn=46;break;case 55:Bn=47;break;case 56:Bn=48;break;case 57:Bn=49;
break;case 58:Bn=50;break;case 59:Bn=51;break;case 60:Bn=52;break;case 61:Bn=53;
break;case 65:Bn=54;break;case 66:Bn=55;break;case 67:Bn=56;break;case 68:Bn=57;
break;case 69:Bn=58;break;case 70:Bn=59;break;case 71:Bn=60;break;case 72:Bn=61;
break;case 73:Bn=62;break;case 74:Bn=63;break;case 75:Bn=64;break;case 76:Bn=65;
break;case 77:Bn=66;break;case 78:Bn=67;break;case 79:Bn=68;break;case 80:Bn=69;
break;case 81:Bn=70;break;case 82:Bn=71;break;case 83:Bn=72;break;case 84:Bn=73;
break;case 85:Bn=74;break;case 86:Bn=75;break;case 87:Bn=76;break;case 88:Bn=77;
break;case 89:Bn=78;break;case 90:Bn=79;break;case 91:Bn=80;break;case 92:Bn=81;
break;case 93:Bn=82;break;case 94:Bn=83;break;case 97:Bn=84;break;case 98:Bn=85;
break;case 99:Bn=86;break;case 100:Bn=87;break;case 101:Bn=88;break;case 102:Bn=
89;break;case 103:Bn=90;break;case 104:Bn=91;break;case 105:Bn=92;break;case 106:
Bn=93;break;case 107:Bn=94;break;case 108:Bn=95;break;case 109:Bn=96;break;case 110:
Bn=97;break;case 111:Bn=98;break;default:Bn=0;}return Bn;},Ab4:function(A9){var Bn=
A9;var BH=0;switch(Bn){case 0:BH=0;break;case 1:BH=1;break;case 2:BH=2;break;case
3:BH=3;break;case 4:BH=4;break;case 5:BH=5;break;case 6:BH=6;break;case 7:BH=9;break;
case 8:BH=10;break;case 9:BH=11;break;case 10:BH=12;break;case 11:BH=13;break;case
12:BH=14;break;case 13:BH=15;break;case 14:BH=16;break;case 15:BH=17;break;case 16:
BH=18;break;case 17:BH=19;break;case 18:BH=20;break;case 19:BH=21;break;case 20:
BH=22;break;case 21:BH=23;break;case 22:BH=24;break;case 23:BH=25;break;case 24:
BH=26;break;case 25:BH=27;break;case 26:BH=28;break;case 27:BH=31;break;case 28:
BH=32;break;case 29:BH=33;break;case 30:BH=34;break;case 31:BH=35;break;case 32:
BH=36;break;case 33:BH=41;break;case 34:BH=42;break;case 35:BH=43;break;case 36:
BH=44;break;case 37:BH=45;break;case 38:BH=46;break;case 39:BH=47;break;case 40:
BH=48;break;case 41:BH=49;break;case 42:BH=50;break;case 43:BH=51;break;case 44:
BH=52;break;case 45:BH=53;break;case 46:BH=54;break;case 47:BH=55;break;case 48:
BH=56;break;case 49:BH=57;break;case 50:BH=58;break;case 51:BH=59;break;case 52:
BH=60;break;case 53:BH=61;break;case 54:BH=65;break;case 55:BH=66;break;case 56:
BH=67;break;case 57:BH=68;break;case 58:BH=69;break;case 59:BH=70;break;case 60:
BH=71;break;case 61:BH=72;break;case 62:BH=73;break;case 63:BH=74;break;case 64:
BH=75;break;case 65:BH=76;break;case 66:BH=77;break;case 67:BH=78;break;case 68:
BH=79;break;case 69:BH=80;break;case 70:BH=81;break;case 71:BH=82;break;case 72:
BH=83;break;case 73:BH=84;break;case 74:BH=85;break;case 75:BH=86;break;case 76:
BH=87;break;case 77:BH=88;break;case 78:BH=89;break;case 79:BH=90;break;case 80:
BH=91;break;case 81:BH=92;break;case 82:BH=93;break;case 83:BH=94;break;case 84:
BH=97;break;case 85:BH=98;break;case 86:BH=99;break;case 87:BH=100;break;case 88:
BH=101;break;case 89:BH=102;break;case 90:BH=103;break;case 91:BH=104;break;case
92:BH=105;break;case 93:BH=106;break;case 94:BH=107;break;case 95:BH=108;break;case
96:BH=109;break;case 97:BH=110;break;case 98:BH=111;break;default:throw new Error(
AT$+Bn.toFixed());}return BH;},An6:function(){return 0;},HN:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MS;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A4X:1,NN:
2,A4l:3,A1f:4,BwR:5,A5b:6,A1G:7,AZL:8,A4i:9,A1E:10,AZO:11,Bw6:12,Bw7:13,LAST:14};
C.ReasonOfLeavingToString={Ca:function(A9){var Abn=A9;var R9=A.jm;switch(Abn){case
0:R9=A.z2(A.abg.Unknown);break;case 1:R9=A.z2(A.abg.A4X);break;case 2:R9=A.z2(A.
abg.NN);break;case 3:R9=A.z2(A.abg.A4l);break;case 4:R9=A.z2(A.abg.A1f);break;case
5:R9=A.z2(A.abg.BgT);break;case 6:R9=A.z2(A.abg.A5b);break;case 7:R9=A.z2(A.abg.
A1G);break;case 8:R9=A.z2(A.abg.AZL);break;case 9:R9=A.z2(A.abg.A4i);break;case 10:
R9=A.z2(A.abg.A1E);break;case 11:R9=A.z2(A.abg.AZO);break;case 12:R9=A.z2(A.abg.
Bg4);break;case 13:R9=A.z2(A.abg.Bg3);break;default:throw new Error(AUa+Abn.toFixed(
));}return R9;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.Afz={
Akp:function(AfY){var NJ;switch(AfY){case 0:NJ=0;break;case 1:NJ=1;break;case 2:
NJ=2;break;case 3:NJ=3;break;case 4:NJ=4;break;case 5:NJ=5;break;case 6:NJ=6;break;
case 7:NJ=7;break;case 8:NJ=8;break;case 9:NJ=9;break;case 10:NJ=10;break;case 11:
NJ=11;break;case 12:NJ=12;break;case 13:NJ=13;break;default:NJ=0;}return NJ;},Ab4:
function(A9){var NJ=A9;var IN=0;switch(NJ){case 0:IN=0;break;case 2:IN=2;break;case
8:IN=8;break;case 11:IN=11;break;case 4:IN=4;break;case 10:IN=10;break;case 7:IN=
7;break;case 5:IN=5;break;case 9:IN=9;break;case 3:IN=3;break;case 12:IN=12;break;
case 13:IN=13;break;case 1:IN=1;break;case 6:IN=6;break;default:throw new Error(
Al4+NJ.toFixed());}return IN;},An6:function(){return 0;},HN:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Afz;
},_className:"Device::ReasonOfLeavingToCodeset"};C.Adx={Akp:function(AfY){var J1;
switch(AfY){case 0:J1=0;break;case 1:J1=1;break;case 2:J1=2;break;case 3:J1=3;break;
case 4:J1=4;break;case 5:J1=5;break;case 6:J1=6;break;case 7:J1=7;break;case 8:J1=
8;break;case 9:J1=9;break;case 10:J1=10;break;default:J1=0;}return J1;},Ab4:function(
A9){var J1=A9;var IN=0;switch(J1){case 0:IN=0;break;case 2:IN=2;break;case 1:IN=
1;break;case 9:IN=9;break;case 6:IN=6;break;case 8:IN=8;break;case 7:IN=7;break;
case 5:IN=5;break;case 10:IN=10;break;case 4:IN=4;break;case 3:IN=3;break;default:
throw new Error(Al4+J1.toFixed());}return IN;},An6:function(){return 0;},HN:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.Adx;},_className:"Device::WhereAboutsToCodeset"};C.Akx={_Init:function(aArg){this.
__proto__=C.Akx;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,Fo:function(Z,AE){var G6=C.Row.Fo.call(this,Z,AE);if(G6&&!!AE){this.Aim(
AE.Cp(Z,0));this.Atm(AE.Cp(Z,1));this.Atl(AE.Cp(Z,2));}return G6;},Cr:function(AE
){var G6=C.Row.Cr.call(this,AE);if(G6&&!!AE){var IQ=AE.NQ();if(IQ<=0)A.aa8("%s",
AaG);else{if(this.AkQ())this.Ct=AE.WU();AE.GG(this.Ct,0,this.Year);AE.GG(this.Ct
,1,this.Deregistrations);AE.GG(this.Ct,2,this.Deaths);AE.NS(IQ);}}return G6;},GC:
function(){C.Row.GC.call(this);this.Aim(-1);},GZ:function(){C.Row.GZ.call(this);
this.Aim(0);this.Atm(0);this.Atl(0);},Atm:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.BdP,this.Atm],0);},Atl:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.BdN,this.Atl],0);},Aim:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.AoI,this.Aim],0
);},BdP:function(){return this.Deregistrations;},BdN:function(){return this.Deaths;
},AoI:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.ArU={Undefined:0,Display:1,A4p:2,A4C:3,A5t:4,Bv8:5,Bxe:6,BxO:7,Bwq:8,Bvm:9,BuL:
10,A0I:11,A4r:12,BxV:13,A1J:14,BxY:15};C.DeviceComponentToString={Ca:function(A9
){var A73=A9;var Pm=A.jm;switch(A73){case 0:Pm=Aqb;break;case 10:Pm=A.z2(A.abg.A$J
);break;case 9:Pm=A.z2(A.abg.Bat);break;case 1:Pm=A.z2(A.abg.Ba_);break;case 11:
Pm=A.z2(A.abg.A0I);break;case 5:Pm=A.z2(A.abg.Bi9);break;case 8:Pm=A.z2(A.abg.Ba$
);break;case 14:Pm=A.z2(A.abg.A1J);break;case 2:Pm=A.z2(A.abg.A4p);break;case 12:
Pm=A.z2(A.abg.A4r);break;case 6:Pm=A.z2(A.abg.Bg9);break;case 3:Pm=A.z2(A.abg.A4C
);break;case 7:Pm=A.z2(A.abg.Bba);break;case 13:Pm=A.z2(A.abg.BaV);break;case 15:
Pm=A.z2(A.abg.Bjb);break;case 4:Pm=A.z2(A.abg.A5t);break;default:throw new Error(
Aqc+A73.toFixed());}return Pm;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.AeM={Akp:function(AfY){return AfY;},Ab4:function(A9){return A9;},An6:function(
){return 0;},HN:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AeM;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AcF={ApM:function(A9){return A.zW(A.abi.ALF);},ApN:function(A9){var A8c=A9;var
Qw=-1;switch(A8c){case 0:Qw=0;break;case 1:Qw=1;break;case 2:Qw=2;break;default:
throw new Error(Aqd+A8c.toFixed());}return Qw;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AcF;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={AY:0,Ab2:function(){var At=A._NewObject(C.WhereAboutsFilterCriterion
,0);At.F0(this);return At;},F0:function(AK){C.FilterCriterion.F0.call(this,AK);var
At=(C.WhereAboutsFilterCriterion.isPrototypeOf(AK)?AK:null);if(!!At)this.AY=At.AY;
},Initialize:function(AQ,En,A2,RT){this.EE=AQ;this.Operator=En;this.AY=A2;this.ZF=
RT;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.BwC={AJz:0,Bvt:1,ALi:2,LAST:3};C.BxF={Gz:0,AQy:1,GB:2,Year:3,LAST:4};C.TimespanDaysToString={
Ca:function(A9){var A$l=A9;var AxL=A.jm;switch(A$l){case 0:AxL=A.z2(A.abg.AZ0);break;
case 1:AxL=A.z2(A.abg.AQy);break;case 2:AxL=A.z2(A.abg.GB);break;case 3:AxL=A.z2(
A.abg.Year);break;default:throw new Error(Avd+A$l.toFixed());}return AxL;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AiM={BwO:0,Bv_:1,Bvy:2,Bv$:3,Bvz:
4,LAST:5};C.USBStateToString={Ca:function(A9){var A$D=A9;var Bl=A.jm;switch(A$D){
case 0:Bl=Al5;break;case 1:Bl=AUb;break;case 2:Bl=AUc;break;case 4:Bl=AUd;break;
case 3:Bl=AUe;break;default:throw new Error(Ap8+A$D.toFixed());}return Bl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.USBStateToString;
},_className:"Device::USBStateToString"};C.AnQ={Bv9:0,BuX:1};C.Aui={AyL:A.jm,Timestamp:
0,AAl:0,AAr:0,ACq:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.
Timestamp=E;},ABs:function(E){if(this.AAl===E)return;this.AAl=E;},ABw:function(E
){if(this.AAr===E)return;this.AAr=E;},ABH:function(E){if(this.ACq===E)return;this.
ACq=E;},AA$:function(E){if(this.AyL===E)return;this.AyL=E;},_Init:function(aArg){
this.__proto__=C.Aui;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::SoftwareVersionInformation"
};C.Asl={Timestamp:0,AM4:0,AM5:0,AQf:0,AQg:0,AQe:0,AM3:0,OnSetTimestamp:function(
E){if(this.Timestamp===E)return;this.Timestamp=E;},ABp:function(E){if(this.AM4===
E)return;this.AM4=E;},ABq:function(E){if(this.AM5===E)return;this.AM5=E;},ABS:function(
E){if(this.AQf===E)return;this.AQf=E;},ABT:function(E){if(this.AQg===E)return;this.
AQg=E;},ABR:function(E){if(this.AQe===E)return;this.AQe=E;},ABo:function(E){if(this.
AM3===E)return;this.AM3=E;},_Init:function(aArg){this.__proto__=C.Asl;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::HardwareVersionInformation"};C.AnI={Undefined:0,BvY:1,Bu_:
2};C.Aev={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
Ca:function(A9){var A7x=A9;var AVG=A.jm;switch(A7x){case 0:AVG=A.z2(A.abg.BaB);break;
case 1:AVG=A.z2(A.abg.BaR);break;default:throw new Error(AUf+A7x.toFixed());}return AVG;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.GB={AZE:0,AAb:1,Ay8:
2,AAm:3,Ayc:4,AAo:5,AAd:6,AAc:7,Ayj:8,ACx:9,AAA:10,AAy:11,AyR:12,LAST:13};C.MonthToString={
Ca:function(A9){var A9a=A9;var VP=A.jm;switch(A9a){case 1:VP=A.z2(A.abu.AAb);break;
case 2:VP=A.z2(A.abu.Ay8);break;case 3:VP=A.z2(A.abu.AAm);break;case 4:VP=A.z2(A.
abu.Ayc);break;case 5:VP=A.z2(A.abu.AAo);break;case 6:VP=A.z2(A.abu.AAd);break;case
7:VP=A.z2(A.abu.AAc);break;case 8:VP=A.z2(A.abu.Ayj);break;case 9:VP=A.z2(A.abu.
ACx);break;case 10:VP=A.z2(A.abu.AAA);break;case 11:VP=A.z2(A.abu.AAy);break;case
12:VP=A.z2(A.abu.AyR);break;default:throw new Error(AUg+A9a.toFixed());}return VP;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.Ahj={FileName:A.jm,A4A:0,AnQ:0,ACT:false
,_Init:function(aArg){this.__proto__=C.Ahj;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.Akg={Bv5:0,Bxv:1};C.AQF={Init:function(aArg){var B;A.za([this,this.A_g],[B=A.
_GetAutoObject(C.Device),B.A23,B.A6H],0);this.A_g(this);},Cr:function(){A._GetAutoObject(
C.Device).Ape(this.toString());},A_g:function(H){this.Fo(A._GetAutoObject(C.Device
).ADh);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AQF;this.XD(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.AQE={Init:function(aArg){var B;A.za([this,this.A_e],[B=A._GetAutoObject(C.Device
),B.A22,B.A6G],0);this.A_e(this);},Cr:function(){A._GetAutoObject(C.Device).Apd(
this.toString());},A_e:function(H){this.Fo(A._GetAutoObject(C.Device).ADg);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQE;this.XD(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
AQH={Init:function(aArg){var B;A.za([this,this.A_i],[B=A._GetAutoObject(C.Device
),B.A26,B.A6K],0);this.A_i(this);},Cr:function(){A._GetAutoObject(C.Device).Apf(
this.toString());},A_i:function(H){this.Fo(A._GetAutoObject(C.Device).ADj);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQH;this.XD(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.AQD={Init:function(aArg){var B;A.za([this,this.A_c],[B=A._GetAutoObject(C.Device
),B.A21,B.A6F],0);this.A_c(this);},Cr:function(){A._GetAutoObject(C.Device).Apc(
this.toString());},A_c:function(H){this.Fo(A._GetAutoObject(C.Device).ADf);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQD;this.XD(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AIn={Init:function(aArg){var B;A.za([this,this.A9E],[B=A._GetAutoObject(C.Device
),B.A2f,B.A6h],0);this.A9E(this);},A9E:function(H){this.Fo(A._GetAutoObject(C.Device
).Ayb);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AIn;this.XD(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BwF={BwI:0,Bww:1,Bvs:2,BxW:3,Unknown:4};C.Bu8={None:0,BwP:1,BwK:2,BwG:3,BwH:
4};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.Akx;C.BoolFilterCriterion.__proto__=
C.FilterCriterion;C.UInt32FilterCriterion.__proto__=C.FilterCriterion;C.ScreenTypeToString.
__proto__=C.EnumToString;C.OverlayMenuToString.__proto__=C.EnumToString;C.ScanStateToString.
__proto__=C.EnumToString;C.MeasureStateToString.__proto__=C.EnumToString;C.TemperatureUnitToString.
__proto__=C.EnumToString;C.AnimalTypeToString.__proto__=C.EnumToString;C.LanguageToString.
__proto__=C.EnumToString;C.GenderToString.__proto__=C.EnumToString;C.BirthTypeToString.
__proto__=C.EnumToString;C.SyncStateToString.__proto__=C.EnumToString;C.RatedAttributeToString.
__proto__=C.EnumToString;C.AssesmentToString.__proto__=C.EnumToString;C.BooleanToYesNo.
__proto__=C.EnumToString;C.AnimalGroup.__proto__=C.Row;C.PopupIdToString.__proto__=
C.EnumToString;C.TransponderTypeToString.__proto__=C.EnumToString;C.TransponderProtocolToString.
__proto__=C.EnumToString;C.RatingModeToString.__proto__=C.EnumToString;C.MassUnitToString.
__proto__=C.EnumToString;C.ActionToString.__proto__=C.EnumToString;C.WeightRecordingModeToString.
__proto__=C.EnumToString;C.BooleanToAutoOnOff.__proto__=C.EnumToString;C.WeightRecordingScopeToString.
__proto__=C.EnumToString;C.AnimalListContentToString.__proto__=C.EnumToString;C.
GenderFilterCriterion.__proto__=C.FilterCriterion;C.AnimalTypeFilterCriterion.__proto__=
C.FilterCriterion;C.AutoRegistrationModeToString.__proto__=C.EnumToString;C.AssessmentFilterCriterion.
__proto__=C.FilterCriterion;C.FactoryResetScopeToString.__proto__=C.EnumToString;
C.AP8.__proto__=C.Int32ArrayWrapper;C.AP7.__proto__=C.Int32ArrayWrapper;C.AIm.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Ab0.__proto__=C.EnumToIcon;
C.AbG.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MS.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Afz.__proto__=C.EnumToCodeset;C.Adx.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AeM.__proto__=C.EnumToCodeset;C.AcF.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AQF.__proto__=C.Int32ArrayWrapper;C.AQE.
__proto__=C.Int32ArrayWrapper;C.AQH.__proto__=C.Int32ArrayWrapper;C.AQD.__proto__=
C.Int32ArrayWrapper;C.AIn.__proto__=C.Int32ArrayWrapper;};C._ReInit=function(){var
B;if((B=C.Device._this))B._ReInit();if((B=C.Converter._this))B._ReInit();if((B=C.
Helper._this))B._ReInit();};C.Dn=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */