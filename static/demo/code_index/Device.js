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
var B4="ERROR: Cannot add criterion, it is already in the list.";var BI="ERROR: BatteryChargeState is read only";
var EH="ERROR: UpdateChargeActive is read only";var Gv="ERROR: ScanState is read only.";
var I5="ERROR: MeasureState is read only.";var Iq="ERROR: Temperature value is read only";
var Oe="ERROR: UpdateDataTable called for Undefined data table.";var Pc="ERROR: UpdateDataTable called for unknown data table id=";
var Nq="ERROR: SyncState is read only.";var Cw="ERROR: ScanTransponder is read only.";
var FN="ERROR: Body weight value is read only";var Of="ERROR: Predicted temperature value is read only";
var Nr="ERROR: TransferProgress is read only";var Kc="ERROR: TransferTarget is read only";
var Og="ERROR: unhandled assessment.";var ME="Unhandled enum BodyTemperature: ";
var Pd="AU";var RO="AT";var Tn="BE";var Vi="BA";var Vj="BG";var JV="CA";var RP="CN";
var Vk="TW";var Vl="HR";var Yb="CY";var RQ="CZ";var Yc="DK";var Vm="EE";var To="FI";
var Vn="FR";var Qh="DE";var Vo="GR";var Ns="HU";var Pe="IE";var Tp="IT";var Yd="JP";
var Vp="LV";var Ye="LT";var Yf="LU";var Vq="MT";var Vr="NL";var RR="NO";var Yg="PL";
var Yh="PT";var AaK="RO";var Qi="RU";var AaL="SK";var AdG="SI";var Yi="ES";var Vs=
"SE";var Yj="CH";var AdH="TR";var KO="UA";var AaM="UK";var RS="US";var Nt=".";var
AlX="-";var AlY="ERROR: Unhandled mass unit: ";var JW=" ";var AlZ="Unhandled gender";
var Al0="Unhandled animal type";var Af0="Unhandled Device::MassUnit.";var AaN="Unhandled Device::AnimalListContent.";
var Yk="Avid";var AuK="Ordicam / IER SA";var AuL="Agrident";var AuM="Datamars";var
AuN="Allflex";var AiY="Texas Instruments";var AuO="Nedap";var AuP="Digital Angel";
var AdI="null";var AdJ="[ ";var Kd=", ";var AuQ=" ]";var Vt="Unhandled language";
var AiZ="Unhandled Device::AnimalListAction.";var AuR="Temperature unit conversion not supported: ";
var AuS="->";var AuT="=";var Al1=">";var AuU="<";var Ap1="!=";var Ke="WARNING: Unhandled operator.";
var AQV="Unknown birth type";var Ap2="Unhandled country: ";var AaO="ERROR: Cannot start transaction";
var ADt="ERROR: Table is null, cannot load row (";var ADu=")";var ADv="Table Id mismatch!";
var ADw="ERROR: Row index (";var AuV=") out of bounds [0,";var ADx="]";var AQW="ERROR: Table is full. Item limit: ";
var AQX="Device::ScanTransponder not set";var AQY="Unhandled TransponderType.";var
AQZ="Unhandled ScanState.";var Ap3="Could not load animal with transponder";var AuW=
"Birth type";var Qj="Time calving";var AuX="Pend. Birth announcement";var AQ0="Perished";
var AQ1="Rating temp.";var AQ2=" mother";var AQ3="Reason leaving";var ADy="Time alarm";
var ADz="Time first weighing";var AdK="Time control";var Al2="Time temp.";var AQ4=
"Time watch";var ADA="Time weighing";var Ai0="Assessment";var ADB="Time rating";
var ADC="ERROR: Unhandled AnimalTable filter field:";var ADD="Field ";var AQ5="ERROR: Unhandled RatingTable filter field:";
var AQ6="ERROR: Unhandled table ";var AQ7=" filter fields.";var AdL="WARNING: Unhandled filter criterion type.";
var ADE="0";var Ap4="No table specified";var ADF="Invalid animal id generation method: ";
var ADG="Unhandled AnimalIdGenerationMethod: ";var AuY="Invalid gender: ";var ADH=
"Invalid ear tag number assignment mode: ";var AuZ=";";var AQ8="Invalid animal creation error code: ";
var AQ9="Invalid EartagNrAssignmentMode: ";var AQ_="Unsupported exponent: ";var AQ$=
"Unknown whereabouts type: ";var ARa="Unhandled Gender: ";var ARb="Unhandled AnimalIdAutoGenerationMethod: ";
var Oh="\n";var Au0="\n\n";var ARc="Bootloader:\nV\xA0";var ARd="Middleware:\nV\xA0";
var ARe="GUI:\nV\xA0";var ARf="Mainboard: ";var ARg="Torchboard: ";var ARh="Operator not supported.";
var Ap5="Unhandled enum value ";var Au1="UNDEFINED";var ADI="Boot";var ARi="Charge";
var ADJ="ChargeWarning";var ARj="ControlledPowerOff";var ARk="DeviceMain";var ARl=
"DeviceService";var ARm="DeviceInfo";var ADK="DeviceBackup";var ARn="DeviceCheck";
var Au2="Home";var ADL="Settings";var ADM="DateTimeSettings";var ARo="UnitsSettings";
var ADN="DataAcquisitionSettings";var ARp="AutoAssignIdsSettings";var ARq="TemperatureSettings";
var Vu="WeightGainSettings";var Vv="DeviceSettings";var ARr="RegistrationSettings";
var ARs="InitializationSettings";var ARt="PremisesSettings";var ARu="Sleep";var ARv=
"Sync";var ARw="EditAnimalData";var ARx="EditAnimalDataNaisId";var Af1="AnimalList";
var ADO="AnimalListFilter";var ARy="AlarmListFilter";var ARz="WatchListFilter";var
ADP="AnimalActionActions";var ADQ="AnimalActionTemperature";var Au3="TemperatureMeasurement";
var RT="AnimalActionWeighing";var ARA="AnimalActionRate";var ARB="AnimalActionUnregister";
var ARC="AnimalActionPerished";var Ap6="AnimalActionNewBornCare";var ARD="AlarmList";
var ARE="ControlMeasure";var ARF="ControlList";var ARG="RangeTest";var ARH="ListsMain";
var ARI="ListsIdManagement";var Ap7="WatchList";var ARJ="AnimalListActions";var ARK=
"AlarmListActions";var ARL="ControlListActions";var ARM="WatchListActions";var ARN=
"EvaluationMenuMain";var ARO="EvaluationMenuWeights";var ARP="EvaluationLosses";
var ARQ="EvaluationRatings";var ARR="EvaluationTemperatures";var ARS="EvaluationWeights";
var ADR="EvaluationWeightsRecent";var Ap8="EvaluationBirthWeights";var ART="AnimalEvaluationFilter";
var ARU="NewMenu";var ARV="NewAnimals";var Au4="NewAnimalManualData";var Ai1="NewAnimalTransponderData";
var Af2="NewAnimalLoss";var Au5="AutoActionScanScreen";var Al3="ManualActionScanScreen";
var Af3="SetTransponderScreen";var ARW="SetSaveTransponderScreen";var Ap9="NewAnimalSetTransponderScreen";
var ADS="NewAnimalsSetTransponderScreen";var AdM="NewAnimalCalvingDataScreen";var
ADT="WeightListScreen";var Yl="AnimalSingleInfoScreen";var Ai2="AnimalMultiInfoScreen";
var Al4="AnimalRegistrationDetails";var ARX="MultiInfoActionsScreen";var ARY="FreshCowListScreen";
var ARZ="FreshCowListActionsScreen";var AR0="FreshCowListFilterScreen";var AR1="DryCowListScreen";
var Ap_="DryCowListActionsScreen";var ADU="DryCowListFilterScreen";var ADV="NoTransponderListScreen";
var AR2="NoTransponderListActionsScreen";var AR3="NoTransponderListFilterScreen";
var AR4="YoungNoTransponderListScreen";var AR5="YoungNoTransponderListActionsScreen";
var AR6="YoungNoTransponderListFilterScreen";var AR7="NoNaisIdListScreen";var ADW=
"NoNaisIdListActionsScreen";var AR8="NoNaisIdListFilterScreen";var Au6="RegistrationsListScreen";
var ADX="RegistrationsListActionsScreen";var ADY="RegistrationsListFilterScreen";
var ADZ="ActionListScreen";var AD0="ActionListActionsScreen";var AD1="ActionListFilterScreen";
var AD2="UpdateScreen";var AR9="MotherScanScreen";var AR_="SetSaveNaisIdScreen";
var AR$="Unhandled display mode: ";var ASa="None";var ASb="Actions Settings";var
ASc="Auto Action";var ASd="Menu Item Settings";var Au7="Rating Type";var AD3="Weighing settings";
var ASe="Options";var AD4="AnimalSearch";var Ai3="AnimalSearchUnfiltered";var Af4=
"AnimalSearchDriedOff";var ASf="MeasurementReady";var Ai4="AnimalMultiInfoMenu";
var ASg="Unhandled overlay menu: ";var Au8="Error";var Ai5="Idle";var AdN="IdScanned";
var ASh="NotFound";var AD5="Progress";var Ap$="Unhandled scan state: ";var ASi="Prediction";
var Nu="Ready";var ASj="Unhandled measure state: ";var ASk="Unhandled temperature unit: ";
var ASl="Unhandled species: ";var ASm="English";var AD6="Nederlands";var AD7="Deutsch";
var ASn="Eesti";var ASo="Suomalainen";var ASp="Fran\xE7ais";var ASq="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";
var ASr="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var ASs="Italiano";
var ASt="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var ASu="Espa\xF1ol";var AD8=
"T\xFCrk\xE7e";var ASv="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";var AD9="\u010Ce\u0161tina";
var AD_="Bosanski";var Au9="Norsk";var ASw="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";
var AD$="Unhandled language: ";var ASx="Unhandled gender: ";var ASy="Unhandled birth type: ";
var ASz="Exporting";var ASA="ImportFinish";var ASB="ImportStart";var ASC="Importing";
var Au_="Init";var AEa="Unhandled sync state: ";var Au$="Unhandled rating attribute: ";
var ASD="Unhandled assessment: ";var Ava="Illegal boolean value: ";var AEb="Unhandled popup ID:";
var ASE="Unknown";var ASF="Severe Error";var ASG="ErrorsDeviceDriverCheck";var ASH=
"Enter Sleep";var ASI="About";var ASJ="InfoSoftwareVersions";var ASK="InfoHardwareVersions";
var ASL="InfoSerial";var ASM="ShutDown";var ASN="SuccessDataSync";var ASO="SuccessResetFactory";
var ASP="SuccessResetAnimalData";var ASQ="SuccessCreateBackup";var ASR="SuccessRestoreBackup";
var ASS="CreateBackupInProgress";var AEc="RestoreBackupInProgress";var AEd="FailedCreateBackup";
var AEe="FailedRestoreBackup";var AEf="TechnicalDetails";var AEg="WarningDataSync";
var AEh="WarningFactory";var AEi="WarningResetAnimalData";var AST="WarningRestart";
var ASU="WarningAutoAction";var ASV="WarningAutoActionNotApplicable";var ASW="WarningNoMenuItem";
var ASX="WarningEnterDemoMode";var ASY="NoAnimalsRegistered";var ASZ="MaxNumAnimalsReached";
var AS0="MaxNumRatingsReached";var AS1="MaxNumCalfDeregistrationsReached";var AS2=
"ScanInTransponder";var AS3="WarningScanOverwriteNaisId";var AS4="EarTagNumberTooShort";
var AS5="NoValidCountryCode";var Avb="WarningOutdatedAnimalWeight";var AS6="WarningOutdatedAnimalWeights";
var AS7="WarningWeightEvaluationSingular";var Avc="WarningWeightEvaluationPlural";
var Avd="ScanError";var Ym="ScanNotFound";var Aqa="ScannedAnimalNotFound";var AEj=
"ScannedTransponderNotFound";var AS8="AnimalNotFound";var AS9="SuccessUnregister";
var AEk="SuccessUnregisterPerished";var AS_="SuccessCreationNewAnimal";var AEl="SuccessCreationNewAnimals";
var AS$="AnimalCreationInProgress";var ATa="EvaluationInProgress";var ATb="DataSyncInProgress";
var Aqb="AddedToAlarm";var ATc="RemovedFromAlarm";var ATd="AddedToWatch";var AEm=
"RemovedFromWatch";var ATe="AddedToDryOff";var ATf="RemovedFromDryOff";var ATg="AnimalIdAlreadyExists";
var ATh="AnimalIdAlreadyExistsContinuable";var Yn="MissingAnimalId";var ATi="MissingAnimalIdMother";
var ATj="MissingEartagNumber";var ATk="MissingTransponderId";var ATl="TransponderAlreadyRegistered";
var AEn="TransponderAlreadyRegisteredContinuable";var ATm="HelpAnimalInfoRating";
var ATn="CannotReassignTransponder";var ATo="CannotReassignNaisId";var ATp="WarningResetToDefaultValue";
var ATq="WarningResetThresholds";var ATr="WarningResetTempThresholds";var AEo="UpdateFirmware";
var ATs="UpdateFirmwareBatteryLow";var ATt="ConfirmFirmwareUpdated";var ATu="ConfirmBootloaderUpdated";
var AEp="QuestionAddAnotherCalfMultiples";var AEq="RemovedAllBirthAnnouncmentsPending";
var ATv="RemovedFromBirthAnnouncmentPending";var ATw="SuccessClearAnimalLoss";var
ATx="RemovedAnimal";var ATy="WarningNoActionsForAnimalLoss";var Qk="SuccessLinkTransponder";
var Aqc="SuccessUnlinkTransponder";var AEr="SuccessLinkNaisId";var AEs="WarningDataExportFailed";
var Al5="SuccessDataExport";var Al6="SuccessDataExportDownload";var Ave="WarningDataExportAnimalsFailed";
var ATz="SuccessDataExportAnimalsRatings";var AEt="SuccessDataExportAnimalsDownload";
var ATA="WarningNoPremisesID";var ATB="WarningNoFlashDrivePresent";var ATC="WarningNoBackupPathPresent";
var ATD="WarningNoBackupFilePresent";var ATE="DemoFunctionNotAvailable";var ATF=
"WarningImpreciseTimeSetting";var ATG="ConfirmationRestoreBackup";var ATH="AnimalId";
var ATI="FarmId";var ATJ="GroupId";var ATK="PersonId";var ATL="Unhandled transponder type: ";
var ATM="FDX";var ATN="HDX";var ATO="HDX (Urban)";var ATP="Unhandled transponder protocol: ";
var ATQ="Illegal RatingMode: ";var Al7="Unhandled mass unit: ";var AEu="Max array size is 10";
var AEv="Index out of bounds";var AEw="ERROR: Received more integers than expected!";
var Avf="Unhandled double scan action :";var AaP="Illegal WeightRecordingMode: ";
var AEx="Illegal WeightRecordingScope: ";var ATR="AnimalData";var AEy="Rating";var
ATS="Temperature";var Avg="Weight";var ATT="Alarm infos";var ATU="Control infos";
var ATV="Watch infos";var ATW="Fresh cow infos";var ATX="No transponder infos";var
ATY="Dry cow info";var AEz="No nais id infos";var Al8="Registrations infos";var AEA=
"Unhandled animal list content:";var ATZ="Illegal AutoRegistrationMode: ";var AEB=
"Illegal FactoryResetScope: ";var Ai6="??";var Ai7="Illegal EaseOfDelivery: ";var
AT0="Illegal Whereabouts: ";var Al9="Illegal breed: ";var AT1="Unisex";var AEC="Illegal animalIdGenerationMethod: ";
var AED="Ascending";var AT2="Descending";var AT3="Illegal directionOfCountingName: ";
var Avh="Unhandled direction of counting: ";var Aqd="Unhandled German state: ";var
AT4="SH";var AT5="HH";var AT6="NI";var AT7="HB";var AT8="NW";var AT9="HE";var AT_=
"RP";var AT$="BW";var AUa="BY";var AUb="SL";var AUc="BB";var AUd="MV";var AEE="SN";
var Yo="ST";var AUe="TH";var Avi="One Range Male Female";var AUf="Two Ranges Male Female";
var AEF="Illegal EartagAssignmentMode: ";var AUg="Unhandled code set value ";var
AEG="Implement in derived class";var AUh="Illegal HIT-Code: ";var AUi="Illegal ReasonOfLeaving: ";
var Al_="Illegal code: ";var Aqe="Undefined";var Aqf="Illegal DeviceComponent: ";
var Aqg="Unhandled Device::MotherSelectionFilterMode: ";var Avj="Illegal Device::TimespanDays: ";
var Al$="Not connected";var AUj="Host";var AUk="Device";var AUl="Device CDC";var
AUm="Host MSC";var AUn="Illegal animalIdAutoGenerationMethod: ";var AUo="Unhandled month: ";
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
0,Red:1,Yellow:2,Green:3,Blue:4,Gray:5};C.Filter={BZ:null,BU:null,CQ:function(AK
){if(!AK)return;var As=this.BZ;while(!!As){if(As===AK)throw new Error(B4);As=As.
Af;}AK.AG=this.BU;if(!!this.BU)this.BU.Af=AK;this.BU=AK;if(!this.BZ)this.BZ=AK;}
,AKu:function(){return this.BZ;},AKy:function(A7d){if(!!A7d)return A7d.Af;return null;
},DJ:function(AE$,En){var As=this.BZ;while(!!As){if(As.EF===AE$){if(En===1)return As;
else if(As.Operator===En)return As;}As=As.Af;}return null;},P7:function(AK){var As=
this.BZ;while(!!As){if(As===AK){if(!!As.AG)As.AG.Af=As.Af;if(!!As.Af)As.Af.AG=As.
AG;if(this.BZ===As)this.BZ=As.Af;if(this.BU===As)this.BU=As.AG;As.Af=null;As.AG=
null;return;}As=As.Af;}},F$:function(){var Bb=A._NewObject(C.Filter,0);var As=this.
BZ;while(!!As){Bb.CQ(As.Ab_());As=As.Af;}return Bb;},_Init:function(aArg){this.__proto__=
C.Filter;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.BZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Filter"};C.FilterCriterion={
Af:null,AG:null,EF:-1,Operator:1,ZM:false,Ab_:function(){return null;},F$:function(
AK){if(!AK)return;this.EF=AK.EF;this.Operator=AK.Operator;this.ZM=AK.ZM;},_Init:
function(aArg){this.__proto__=C.FilterCriterion;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::FilterCriterion"};C.Int32FilterCriterion={AY:0,Ab_:function(){var As=A.
_NewObject(C.Int32FilterCriterion,0);As.F$(this);return As;},F$:function(AK){C.FilterCriterion.
F$.call(this,AK);var As=(C.Int32FilterCriterion.isPrototypeOf(AK)?AK:null);if(!!
As)this.AY=As.AY;},Initialize:function(AR,En,A2,RX){this.EF=AR;this.Operator=En;
this.AY=A2;this.ZM=RX;return this;},_Init:function(aArg){C.FilterCriterion._Init.
call(this,aArg);this.__proto__=C.Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"
};C.DeviceClass={AAC:0,AAB:0,As0:0,Ac_:0,O7:null,Rm:null,PY:null,RG:null,QP:null
,Aq:null,Bt:null,AeA:null,Aly:null,OF:null,ArD:A.jm,AutoActions:A.jm,Ayf:A.jm,AC7:
A.jm,AC8:A.jm,AfL:A.jm,ADo:A.jm,ADp:A.jm,Ayg:A.jm,ADn:A.jm,ADr:A.jm,Y_:100,JT:0,
AIN:75,X_:3600,APh:0,Fp:5,Fb:0,Ip:50000,Pz:0,ACj:0,Akk:0,Asx:0,Asw:0,ANn:1,ANm:1
,Aof:0,ANo:1,Auw:0,Adx:0,An8:10,APV:5,Auq:3,Ay8:0,Akm:0,AeC:1,AiT:0,Z0:0,APt:13,
ANz:12,AJG:11,Breed:0,EartagNrAssignmentMode:0,Ar2:0,Ay1:0,Ay0:0,HO:5,Ax_:2,AnN:
0,ANE:8,AKl:2,AQC:0,DP:0,AHZ:0,Jf:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:
1,AnimalType:0,MassUnit:0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:
0,TemperatureUnit:0,Language:0,MeasureState:0,ScanState:0,J5:3,Aki:true,AkJ:false
,AkF:true,G$:false,AQl:false,AkG:false,AQA:false,ApU:false,AAA:false,Akt:false,UpdateActiveScreen:
function(AP){if(this.J5===AP)return;this.J5=AP;A.aat([this,this.AAM,this.A6s],0);
},XC:function(E){if(this.K&&this.K.XC)return this.K.XC.apply(this,arguments);else
return C.DeviceClass.Bnw.apply(this,arguments);},Bnw:function(E){},A6s:function(
Ao){this.XC(Ao);},UpdateBatteryChargeState:function(AP){if(this.Y_===AP)return;this.
Y_=AP;A.aat([this,this.As2,this.Avp],0);},Ati:function(E){if(this.K&&this.K.Ati)
return this.K.Ati.apply(this,arguments);else return C.DeviceClass.BnI.apply(this
,arguments);},BnI:function(E){A.aa8("%s",BI);},Avp:function(Ao){this.Ati(Ao);},UpdateChargeActive:
function(AP){if(this.Akt===AP)return;this.Akt=AP;A.aat([this,this.As4,this.Avq],
0);},ABc:function(E){if(this.K&&this.K.ABc)return this.K.ABc.apply(this,arguments
);else return C.DeviceClass.BnN.apply(this,arguments);},BnN:function(E){A.aa8("%s"
,EH);},Avq:function(Ao){this.ABc(Ao);},UpdateScanState:function(AP){var B;if(this.
ScanState===AP)return;this.ScanState=AP;A.aat([this,this.AN_,this.AUW],0);A._GetAutoObject(
C.Helper).Btz(this);},Ao$:function(E){if(this.K&&this.K.Ao$)return this.K.Ao$.apply(
this,arguments);else return C.DeviceClass.Bop.apply(this,arguments);},Bop:function(
E){A.aa8("%s",Gv);},AUW:function(Ao){this.Ao$(Ao);},UpdateMeasureState:function(
AP){if(this.MeasureState===AP)return;this.MeasureState=AP;A.aat([this,this.AAT,this.
AES],0);},AtH:function(E){if(this.K&&this.K.AtH)return this.K.AtH.apply(this,arguments
);else return C.DeviceClass.Bn8.apply(this,arguments);},Bn8:function(E){A.aa8("%s"
,I5);},AES:function(Ao){this.AtH(Ao);},UpdateTempValue:function(AP){if(this.JT===
AP)return;this.JT=AP;A.aat([this,this.AAX,this.AEV],0);},AtT:function(E){if(this.
K&&this.K.AtT)return this.K.AtT.apply(this,arguments);else return C.DeviceClass.
Bov.apply(this,arguments);},Bov:function(E){A.aa8("%s",Iq);},AEV:function(Ao){this.
AtT(Ao);},Aln:function(E){if(this.K&&this.K.Aln)return this.K.Aln.apply(this,arguments
);else return C.DeviceClass.Bn5.apply(this,arguments);},Bn5:function(E){},A6I:function(
Ao){this.Aln(Ao);},AtU:function(E){if(this.K&&this.K.AtU)return this.K.AtU.apply(
this,arguments);else return C.DeviceClass.Bow.apply(this,arguments);},Bow:function(
E){},Aqk:function(Ao){this.AtU(Ao);},ABa:function(E){if(this.K&&this.K.ABa)return this.
K.ABa.apply(this,arguments);else return C.DeviceClass.BnM.apply(this,arguments);
},BnM:function(E){},A6A:function(Ao){this.ABa(Ao);},ABE:function(E){if(this.K&&this.
K.ABE)return this.K.ABE.apply(this,arguments);else return C.DeviceClass.Bn_.apply(
this,arguments);},Bn_:function(E){},AUP:function(Ao){this.ABE(Ao);},UpdateMonitoring:
function(AP){if(this.AAA===AP)return;this.AAA=AP;A.aat([this,this.AN0,this.AUP],
0);},UpdateDataTable:function(A7e){var B;switch(A7e){case 0:A.ow([B=this.Aq,B.Aia
],this);break;case 1:A.ow([B=this.Bt,B.Aia],this);break;case 3:A.ow([B=this.AeA,
B.Aia],this);break;case 4:A.ow([B=this.OF,B.Aia],this);break;case 2:A.aa8("%s",Oe
);break;default:A.aa8("%s%e",Pc,A7e);}},Aup:function(){if(this.K&&this.K.Aup)return this.
K.Aup.apply(this,arguments);else return C.DeviceClass.BoX.apply(this,arguments);
},BoX:function(){},AfP:function(){if(this.K&&this.K.AfP)return this.K.AfP.apply(
this,arguments);else return C.DeviceClass.Bo0.apply(this,arguments);},Bo0:function(
){},Adn:function(){if(this.K&&this.K.Adn)return this.K.Adn.apply(this,arguments);
else return C.DeviceClass.BoY.apply(this,arguments);},BoY:function(){},AlJ:function(
){if(this.K&&this.K.AlJ)return this.K.AlJ.apply(this,arguments);else return C.DeviceClass.
Bo1.apply(this,arguments);},Bo1:function(){},UpdateLanguage:function(AP){if(this.
Language===AP)return;this.Language=AP;switch(AP){case 14:A._SetLanguage(1);break;
case 13:A._SetLanguage(2);break;case 6:A._SetLanguage(3);break;case 11:A._SetLanguage(
4);break;case 0:A._SetLanguage(0);break;case 10:A._SetLanguage(5);break;case 12:
A._SetLanguage(6);break;case 5:A._SetLanguage(7);break;case 3:A._SetLanguage(8);
break;case 1:A._SetLanguage(9);break;case 8:A._SetLanguage(10);break;case 4:A._SetLanguage(
11);break;case 15:A._SetLanguage(13);break;case 9:A._SetLanguage(15);break;case 2:
A._SetLanguage(16);break;case 7:A._SetLanguage(17);break;case 16:A._SetLanguage(
18);break;default:A._SetLanguage(0);}A.aat([this,this.A2I,this.A6I],0);},UpdateTemperatureUnit:
function(AP){if(this.TemperatureUnit===AP)return;this.TemperatureUnit=AP;A.aat([
this,this.AoK,this.Aqk],0);},UpdateBrightness:function(AP){if(this.AIN===AP)return;
this.AIN=AP;A.aat([this,this.A2w,this.A6A],0);},SetSystemTime:function(Af$){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BoV.apply(this,arguments);},BoV:function(Af$){},Auk:function(){if(this.
K&&this.K.Auk)return this.K.Auk.apply(this,arguments);else return C.DeviceClass.
A6m.apply(this,arguments);},A6m:function(){},ACw:function(){if(this.K&&this.K.ACw
)return this.K.ACw.apply(this,arguments);else return C.DeviceClass.A6k.apply(this
,arguments);},A6k:function(){},BhE:function(){},UpdateOverlayMenu:function(AP){if(
this.OverlayMenu===AP)return;this.OverlayMenu=AP;A.aat([this,this.AAW,this.AEU],
0);},Co:function(E){if(this.K&&this.K.Co)return this.K.Co.apply(this,arguments);
else return C.DeviceClass.Boj.apply(this,arguments);},Boj:function(E){},AEU:function(
Ao){this.Co(Ao);},AtY:function(E){if(this.K&&this.K.AtY)return this.K.AtY.apply(
this,arguments);else return C.DeviceClass.BoE.apply(this,arguments);},BoE:function(
E){},A6S:function(Ao){this.AtY(Ao);},UpdateUnderTemp:function(AP){if(this.X_===AP
)return;this.X_=AP;A.aat([this,this.A26,this.A6S],0);},UpdateSyncState:function(
AP){if(this.SyncState===AP)return;this.SyncState=AP;A.aat([this,this.AOa,this.AUY
],0);},Aaf:function(E){if(this.K&&this.K.Aaf)return this.K.Aaf.apply(this,arguments
);else return C.DeviceClass.Bou.apply(this,arguments);},Bou:function(E){A.aa8("%s"
,Nq);},AUY:function(Ao){this.Aaf(Ao);},Azq:function(){if(this.K&&this.K.Azq)return this.
K.Azq.apply(this,arguments);else return C.DeviceClass.Bnq.apply(this,arguments);
},Bnq:function(){return A.jm;},UpdatePopup:function(JZ,AVD,AVz,AVG){this.A_(JZ,AVD
,AVz,AVG,[this,this.Btg]);},PopupStateChanged:function(JZ,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BoP.apply(this,arguments);},BoP:function(JZ,Ae){},AB5:function(E){if(
this.K&&this.K.AB5)return this.K.AB5.apply(this,arguments);else return C.DeviceClass.
BoG.apply(this,arguments);},BoG:function(E){},A6T:function(Ao){this.AB5(Ao);},UpdateVibrationOnKeypressEnabled:
function(AP){if(this.ApU===AP)return;this.ApU=AP;A.aat([this,this.A27,this.A6T],
0);},Ac5:function(E){if(this.K&&this.K.Ac5)return this.K.Ac5.apply(this,arguments
);else return C.DeviceClass.BoF.apply(this,arguments);},BoF:function(E){},AEW:function(
Ao){this.Ac5(Ao);},UpdateVibrationOn:function(A7E){if(this.AQA===A7E)return;this.
AQA=A7E;A.aat([this,this.AAY,this.AEW],0);},A_:function(JZ,AVD,AVz,AVG,Bqp){var Aem=
A._NewObject(C.PopupContext,0);Aem.Id=JZ;Aem.Show=AVD;Aem.Aiv=AVz;Aem.AiP=AVG;Aem.
ACc=Bqp;this.Aly.Trigger(Aem,false);},Btg:function(H){var Ar=(C.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},AtO:function(E){
if(this.K&&this.K.AtO)return this.K.AtO.apply(this,arguments);else return C.DeviceClass.
Bon.apply(this,arguments);},Bon:function(E){},AUV:function(Ao){this.AtO(Ao);},UpdateRatingMode:
function(AP){if(this.RatingMode===AP)return;this.RatingMode=AP;A.aat([this,this.
AN9,this.AUV],0);},AcW:function(E){if(this.K&&this.K.AcW)return this.K.AcW.apply(
this,arguments);else return C.DeviceClass.BnX.apply(this,arguments);},BnX:function(
E){},Aqj:function(Ao){this.AcW(Ao);},UpdateFlashLightOn:function(A7m){if(this.AkG===
A7m)return;this.AkG=A7m;A.aat([this,this.AoG,this.Aqj],0);},Aag:function(E){if(this.
K&&this.K.Aag)return this.K.Aag.apply(this,arguments);else return C.DeviceClass.
Boz.apply(this,arguments);},Boz:function(E){},A6Q:function(Ao){this.Aag(Ao);},UpdateTopLightOn:
function(A7A){if(this.AQl===A7A)return;this.AQl=A7A;A.aat([this,this.A24,this.A6Q
],0);},Ac3:function(E){if(this.K&&this.K.Ac3)return this.K.Ac3.apply(this,arguments
);else return C.DeviceClass.Bom.apply(this,arguments);},Bom:function(E){},Bpf:function(
Ao){this.Ac3(Ao);},UpdateRGBTopLight:function(A7v){if(this.APh===A7v)return;this.
APh=A7v;A.aat([this,this.Bes,this.Bpf],0);},Ath:function(E){if(this.K&&this.K.Ath
)return this.K.Ath.apply(this,arguments);else return C.DeviceClass.BnH.apply(this
,arguments);},BnH:function(E){},Bo9:function(Ao){this.Ath(Ao);},UpdateAutoRegistrationMode:
function(A7a){if(this.AutoRegistrationMode===A7a)return;this.AutoRegistrationMode=
A7a;A.aat([this,this.BdU,this.Bo9],0);},Apa:function(E){if(this.K&&this.K.Apa)return this.
K.Apa.apply(this,arguments);else return C.DeviceClass.Boq.apply(this,arguments);
},Boq:function(E){A.aa8("%s",Cw);},AUX:function(Ao){this.Apa(Ao);},UpdateScanTransponder:
function(JZ,A7C,A7B){if(((this.O7.Id===JZ)&&(this.O7.TransponderType===A7C))&&(this.
O7.TransponderProtocol===A7B))return;this.O7.OnSetId(JZ);this.O7.AOZ(A7C);this.O7.
AOY(A7B);A.aat([this,this.AN$,this.AUX],0);},P3:function(E){if(this.K&&this.K.P3
)return this.K.P3.apply(this,arguments);else return C.DeviceClass.BnP.apply(this
,arguments);},BnP:function(E){},Ai8:function(Ao){this.P3(Ao);},UpdateDigitsID:function(
A7i){if(this.Fp===A7i)return;this.Fp=A7i;A.aat([this,this.Aib,this.Ai8],0);},Rr:
function(E){if(this.K&&this.K.Rr)return this.K.Rr.apply(this,arguments);else return C.
DeviceClass.Boi.apply(this,arguments);},Boi:function(E){},Ai9:function(Ao){this.
Rr(Ao);},UpdateOffsetID:function(A7s){if(this.Fb===A7s)return;this.Fb=A7s;A.aat([
this,this.Aic,this.Ai9],0);},AB9:function(E){if(this.K&&this.K.AB9)return this.K.
AB9.apply(this,arguments);else return C.DeviceClass.BoN.apply(this,arguments);},
BoN:function(E){A.aa8("%s",FN);},AEX:function(Ao){this.AB9(Ao);},UpdateWeightValue:
function(AP){if(this.Ip===AP)return;this.Ip=AP;A.aat([this,this.AAZ,this.AEX],0);
},AtF:function(E){if(this.K&&this.K.AtF)return this.K.AtF.apply(this,arguments);
else return C.DeviceClass.Bn7.apply(this,arguments);},Bn7:function(E){},AUO:function(
Ao){this.AtF(Ao);},UpdateMassUnit:function(AP){if(this.MassUnit===AP)return;this.
MassUnit=AP;A.aat([this,this.ANZ,this.AUO],0);},AoN:function(E){if(this.K&&this.
K.AoN)return this.K.AoN.apply(this,arguments);else return C.DeviceClass.A6g.apply(
this,arguments);},A6g:function(E){},A6r:function(Ao){this.AoN(Ao);},AoO:function(
E){if(this.K&&this.K.AoO)return this.K.AoO.apply(this,arguments);else return C.DeviceClass.
A6h.apply(this,arguments);},A6h:function(E){},AUJ:function(Ao){this.AoO(Ao);},UpdateActiveActions:
function(AP){if(this.Pz===AP)return;this.Pz=AP;A.aat([this,this.A2h,this.A6r],0);
},UpdateActiveActionsOrder:function(AP){if(this.ArD===AP)return;this.ArD=AP;A.aat([
this,this.ANN,this.AUJ],0);},Z7:function(E){if(this.K&&this.K.Z7)return this.K.Z7.
apply(this,arguments);else return C.DeviceClass.A6i.apply(this,arguments);},A6i:
function(E){},A6y:function(Ao){this.Z7(Ao);},UpdateAutoActions:function(AP){if(this.
AutoActions===AP)return;this.AutoActions=AP;A.aat([this,this.A2r,this.A6y],0);},
ACY:function(){if(this.K&&this.K.ACY)return this.K.ACY.apply(this,arguments);else
return C.DeviceClass.BoZ.apply(this,arguments);},BoZ:function(){},ApK:function(){
if(this.K&&this.K.ApK)return this.K.ApK.apply(this,arguments);else return C.DeviceClass.
Bo3.apply(this,arguments);},Bo3:function(){},DS:function(E){if(this.K&&this.K.DS
)return this.K.DS.apply(this,arguments);else return C.DeviceClass.BnE.apply(this
,arguments);},BnE:function(E){},Bo8:function(Ao){this.DS(Ao);},UpdateAnimalType:
function(D7){if(this.AnimalType===D7)return;this.AnimalType=D7;A.aat([this,this.
O1,this.Bo8],0);},AtZ:function(E){if(this.K&&this.K.AtZ)return this.K.AtZ.apply(
this,arguments);else return C.DeviceClass.BoL.apply(this,arguments);},BoL:function(
E){},A6Y:function(Ao){this.AtZ(Ao);},UpdateWeightRecordingMode:function(A7G){if(
this.WeightRecordingMode===A7G)return;this.WeightRecordingMode=A7G;A.aat([this,this.
A3d,this.A6Y],0);},ABL:function(E){if(this.K&&this.K.ABL)return this.K.ABL.apply(
this,arguments);else return C.DeviceClass.Bok.apply(this,arguments);},Bok:function(
E){A.aa8("%s",Of);},AUT:function(Ao){this.ABL(Ao);},UpdatePredictedTempValue:function(
AP){if(this.ACj===AP)return;this.ACj=AP;A.aat([this,this.AN6,this.AUT],0);},UZ:function(
Ol){if(this.K&&this.K.UZ)return this.K.UZ.apply(this,arguments);else return C.DeviceClass.
BoU.apply(this,arguments);},BoU:function(Ol){},ABh:function(E){if(this.K&&this.K.
ABh)return this.K.ABh.apply(this,arguments);else return C.DeviceClass.BnO.apply(
this,arguments);},BnO:function(E){},AEQ:function(Ao){this.ABh(Ao);},UpdateDemoMode:
function(AP){if(this.G$===AP)return;this.G$=AP;A.aat([this,this.AAR,this.AEQ],0);
},AA4:function(E){if(this.K&&this.K.AA4)return this.K.AA4.apply(this,arguments);
else return C.DeviceClass.Bnx.apply(this,arguments);},Bnx:function(E){},A6t:function(
Ao){this.AA4(Ao);},UpdateAgeRegistration:function(A7r){if(this.Akk===A7r)return;
this.Akk=A7r;A.aat([this,this.A2k,this.A6t],0);},At0:function(E){if(this.K&&this.
K.At0)return this.K.At0.apply(this,arguments);else return C.DeviceClass.BoM.apply(
this,arguments);},BoM:function(E){},A6Z:function(Ao){this.At0(Ao);},UpdateWeightRecordingScope:
function(A7w){if(this.WeightRecordingScope===A7w)return;this.WeightRecordingScope=
A7w;A.aat([this,this.A3e,this.A6Z],0);},J9:function(E){if(this.K&&this.K.J9)return this.
K.J9.apply(this,arguments);else return C.DeviceClass.Bn1.apply(this,arguments);}
,Bn1:function(E){},A6H:function(Ao){this.J9(Ao);},UpdateGender:function(Ln){if(this.
Gender===Ln)return;this.Gender=Ln;A.aat([this,this.XA,this.A6H],0);},Ao4:function(
E){if(this.K&&this.K.Ao4)return this.K.Ao4.apply(this,arguments);else return C.DeviceClass.
Bn3.apply(this,arguments);},Bn3:function(E){},Avt:function(Ao){this.Ao4(Ao);},UpdateIDLastUsedMale:
function(Ql){if(this.Asx===Ql)return;this.Asx=Ql;A.aat([this,this.As8,this.Avt],
0);},Ao3:function(E){if(this.K&&this.K.Ao3)return this.K.Ao3.apply(this,arguments
);else return C.DeviceClass.Bn2.apply(this,arguments);},Bn2:function(E){},Avs:function(
Ao){this.Ao3(Ao);},UpdateIDLastUsedFemale:function(Ql){if(this.Asw===Ql)return;this.
Asw=Ql;A.aat([this,this.As7,this.Avs],0);},Z6:function(E){if(this.K&&this.K.Z6)return this.
K.Z6.apply(this,arguments);else return C.DeviceClass.BnC.apply(this,arguments);}
,BnC:function(E){},AEP:function(Ao){this.Z6(Ao);},UpdateAnimalListContent:function(
AP){if(this.Jf===AP)return;this.Jf=AP;A.aat([this,this.AAN,this.AEP],0);},AA6:function(
E){if(this.K&&this.K.AA6)return this.K.AA6.apply(this,arguments);else return C.DeviceClass.
Bny.apply(this,arguments);},Bny:function(E){},A6u:function(Ao){this.AA6(Ao);},UpdateAlarmListAction:
function(AP){if(this.AHZ===AP)return;this.AHZ=AP;A.aat([this,this.A2m,this.A6u],
0);},ABl:function(E){if(this.K&&this.K.ABl)return this.K.ABl.apply(this,arguments
);else return C.DeviceClass.BnW.apply(this,arguments);},BnW:function(E){},A6D:function(
Ao){this.ABl(Ao);},UpdateFlashLightInMeasureState:function(A7n){if(this.AkF===A7n
)return;this.AkF=A7n;A.aat([this,this.A2z,this.A6D],0);},AcS:function(E){if(this.
K&&this.K.AcS)return this.K.AcS.apply(this,arguments);else return C.DeviceClass.
BnB.apply(this,arguments);},BnB:function(E){},AUL:function(Ao){this.AcS(Ao);},UpdateAnimalInfoContent:
function(AP){if(this.DP===AP)return;this.DP=AP;A.aat([this,this.ANP,this.AUL],0);
},AB8:function(E){if(this.K&&this.K.AB8)return this.K.AB8.apply(this,arguments);
else return C.DeviceClass.BoH.apply(this,arguments);},BoH:function(E){},A6U:function(
Ao){this.AB8(Ao);},UpdateWatchListAction:function(AP){if(this.AQC===AP)return;this.
AQC=AP;A.aat([this,this.A2$,this.A6U],0);},ABm:function(E){if(this.K&&this.K.ABm
)return this.K.ABm.apply(this,arguments);else return C.DeviceClass.BnY.apply(this
,arguments);},BnY:function(E){},A6F:function(Ao){this.ABm(Ao);},UpdateFreshCowListAction:
function(AP){if(this.AKl===AP)return;this.AKl=AP;A.aat([this,this.A2B,this.A6F],
0);},Aps:function(H){if(this.K&&this.K.Aps)return this.K.Aps.apply(this,arguments
);else return C.DeviceClass.BoQ.apply(this,arguments);},BoQ:function(H){},Bys:function(
s){this.Aps(s);},Apt:function(H){if(this.K&&this.K.Apt)return this.K.Apt.apply(this
,arguments);else return C.DeviceClass.BoR.apply(this,arguments);},BoR:function(H
){},Byt:function(s){this.Apt(s);},Atf:function(E){if(this.K&&this.K.Atf)return this.
K.Atf.apply(this,arguments);else return C.DeviceClass.BnF.apply(this,arguments);
},BnF:function(E){},A6w:function(Ao){this.Atf(Ao);},Apb:function(E){if(this.K&&this.
K.Apb)return this.K.Apb.apply(this,arguments);else return C.DeviceClass.Box.apply(
this,arguments);},Box:function(E){},A6O:function(Ao){this.Apb(Ao);},Apc:function(
E){if(this.K&&this.K.Apc)return this.K.Apc.apply(this,arguments);else return C.DeviceClass.
Boy.apply(this,arguments);},Boy:function(E){},A6P:function(Ao){this.Apc(Ao);},Apv:
function(H){if(this.K&&this.K.Apv)return this.K.Apv.apply(this,arguments);else return C.
DeviceClass.BoS.apply(this,arguments);},BoS:function(H){},Byu:function(s){this.Apv(
s);},UpdateTemperaturesLowString:function(AP){if(this.AC8===AP)return;this.AC8=AP;
A.aat([this,this.A21,this.A6P],0);},UpdateTemperaturesHighString:function(AP){if(
this.AC7===AP)return;this.AC7=AP;A.aat([this,this.A20,this.A6O],0);},UpdateAnimalTypesString:
function(AP){if(this.Ayf===AP)return;this.Ayf=AP;A.aat([this,this.A2p,this.A6w],
0);},ABG:function(E){if(this.K&&this.K.ABG)return this.K.ABG.apply(this,arguments
);else return C.DeviceClass.Boh.apply(this,arguments);},Boh:function(E){},AUR:function(
Ao){this.ABG(Ao);},UpdateNoTransponderListAction:function(AP){if(this.ANE===AP)return;
this.ANE=AP;A.aat([this,this.AN3,this.AUR],0);},AtA:function(E){if(this.K&&this.
K.AtA)return this.K.AtA.apply(this,arguments);else return C.DeviceClass.Bn0.apply(
this,arguments);},Bn0:function(E){},Bpb:function(Ao){this.AtA(Ao);},UpdateFreshCowsHideMeasured:
function(AP){if(this.AkJ===AP)return;this.AkJ=AP;A.aat([this,this.Beb,this.Bpb],
0);},Ao8:function(E){if(this.K&&this.K.Ao8)return this.K.Ao8.apply(this,arguments
);else return C.DeviceClass.Boe.apply(this,arguments);},Boe:function(E){},A6K:function(
Ao){this.Ao8(Ao);},UpdateNaisIdLastUsedMale:function(AdU){if(this.AAC===AdU)return;
this.AAC=AdU;A.aat([this,this.A2N,this.A6K],0);},Ao7:function(E){if(this.K&&this.
K.Ao7)return this.K.Ao7.apply(this,arguments);else return C.DeviceClass.Bod.apply(
this,arguments);},Bod:function(E){},A6J:function(Ao){this.Ao7(Ao);},UpdateNaisIdLastUsedFemale:
function(AdU){if(this.AAB===AdU)return;this.AAB=AdU;A.aat([this,this.A2M,this.A6J
],0);},AtK:function(E){if(this.K&&this.K.AtK)return this.K.AtK.apply(this,arguments
);else return C.DeviceClass.Bob.apply(this,arguments);},Bob:function(E){},Avv:function(
Ao){this.AtK(Ao);},UpdateNaisIdIncrementMale:function(Ajg){if(this.ANn===Ajg)return;
this.ANn=Ajg;A.aat([this,this.As$,this.Avv],0);},AtJ:function(E){if(this.K&&this.
K.AtJ)return this.K.AtJ.apply(this,arguments);else return C.DeviceClass.Boa.apply(
this,arguments);},Boa:function(E){},Avu:function(Ao){this.AtJ(Ao);},UpdateNaisIdIncrementFemale:
function(Ajg){if(this.ANm===Ajg)return;this.ANm=Ajg;A.aat([this,this.As_,this.Avu
],0);},UpdateFirmware:function(){if(this.K&&this.K.UpdateFirmware)return this.K.
UpdateFirmware.apply(this,arguments);else return C.DeviceClass.A6n.apply(this,arguments
);},A6n:function(){},Ali:function(E){if(this.K&&this.K.Ali)return this.K.Ali.apply(
this,arguments);else return C.DeviceClass.BnJ.apply(this,arguments);},BnJ:function(
E){},A6z:function(Ao){this.Ali(Ao);},UpdateBootloaderMessage:function(AP){if(this.
AnN===AP)return;this.AnN=AP;A.aat([this,this.A2v,this.A6z],0);},AA2:function(E){
if(this.K&&this.K.AA2)return this.K.AA2.apply(this,arguments);else return C.DeviceClass.
Bnu.apply(this,arguments);},Bnu:function(E){},A6q:function(Ao){this.AA2(Ao);},UpdateActionListAction:
function(AP){if(this.Ax_===AP)return;this.Ax_=AP;A.aat([this,this.A2g,this.A6q],
0);},Atd:function(E){if(this.K&&this.K.Atd)return this.K.Atd.apply(this,arguments
);else return C.DeviceClass.Bnv.apply(this,arguments);},Bnv:function(E){},Bo7:function(
Ao){this.Atd(Ao);},UpdateActionListHideMeasured:function(AP){if(this.Aki===AP)return;
this.Aki=AP;A.aat([this,this.BdQ,this.Bo7],0);},SX:function(E){if(this.K&&this.K.
SX)return this.K.SX.apply(this,arguments);else return C.DeviceClass.BnA.apply(this
,arguments);},BnA:function(E){},Ama:function(Ao){this.SX(Ao);},UpdateAnimalIdGenerationMethod:
function(A7L){if(this.HO===A7L)return;this.HO=A7L;A.aat([this,this.Alc,this.Ama]
,0);},Ats:function(E){if(this.K&&this.K.Ats)return this.K.Ats.apply(this,arguments
);else return C.DeviceClass.BnQ.apply(this,arguments);},BnQ:function(E){},AUM:function(
Ao){this.Ats(Ao);},UpdateDirectionOfCountingFemale:function(Ai$){if(this.Ay0===Ai$
)return;this.Ay0=Ai$;A.aat([this,this.ANT,this.AUM],0);},Att:function(E){if(this.
K&&this.K.Att)return this.K.Att.apply(this,arguments);else return C.DeviceClass.
BnR.apply(this,arguments);},BnR:function(E){},AUN:function(Ao){this.Att(Ao);},UpdateDirectionOfCountingMale:
function(Ai$){if(this.Ay1===Ai$)return;this.Ay1=Ai$;A.aat([this,this.ANU,this.AUN
],0);},Atu:function(E){if(this.K&&this.K.Atu)return this.K.Atu.apply(this,arguments
);else return C.DeviceClass.BnS.apply(this,arguments);},BnS:function(E){},Avr:function(
Ao){this.Atu(Ao);},UpdateDirectionOfCountingUnisex:function(Ai$){if(this.Ar2===Ai$
)return;this.Ar2=Ai$;A.aat([this,this.As6,this.Avr],0);},Ao5:function(E){if(this.
K&&this.K.Ao5)return this.K.Ao5.apply(this,arguments);else return C.DeviceClass.
Bn4.apply(this,arguments);},Bn4:function(E){},Amb:function(Ao){this.Ao5(Ao);},UpdateIDLastUsedUnisex:
function(Ql){if(this.Aof===Ql)return;this.Aof=Ql;A.aat([this,this.Ale,this.Amb],
0);},Ao9:function(E){if(this.K&&this.K.Ao9)return this.K.Ao9.apply(this,arguments
);else return C.DeviceClass.Bof.apply(this,arguments);},Bof:function(E){},AUQ:function(
Ao){this.Ao9(Ao);},UpdateNaisIdLastUsedUnisex:function(AdU){if(this.As0===AdU)return;
this.As0=AdU;A.aat([this,this.AN1,this.AUQ],0);},AtL:function(E){if(this.K&&this.
K.AtL)return this.K.AtL.apply(this,arguments);else return C.DeviceClass.Boc.apply(
this,arguments);},Boc:function(E){},Avw:function(Ao){this.AtL(Ao);},UpdateNaisIdIncrementUnisex:
function(Ajg){if(this.ANo===Ajg)return;this.ANo=Ajg;A.aat([this,this.Ata,this.Avw
],0);},Alj:function(E){if(this.K&&this.K.Alj)return this.K.Alj.apply(this,arguments
);else return C.DeviceClass.BnU.apply(this,arguments);},BnU:function(E){},AER:function(
Ao){this.Alj(Ao);},UpdateEartagNrAssignmentMode:function(Aja){if(this.EartagNrAssignmentMode===
Aja)return;this.EartagNrAssignmentMode=Aja;A.aat([this,this.AAS,this.AER],0);},O2:
function(E){if(this.K&&this.K.O2)return this.K.O2.apply(this,arguments);else return C.
DeviceClass.BnL.apply(this,arguments);},BnL:function(E){},Bo$:function(Ao){this.
O2(Ao);},UpdateBreed:function(AaU){if(this.Breed===AaU)return;this.Breed=AaU;A.aat([
this,this.As3,this.Bo$],0);},ABB:function(E){if(this.K&&this.K.ABB)return this.K.
ABB.apply(this,arguments);else return C.DeviceClass.Bn9.apply(this,arguments);},
Bn9:function(E){},Bpd:function(Ao){this.ABB(Ao);},UpdateMiddlewareVersions:function(
Pi,AVv,AVw,AVC,AVk){this.Rm.OnSetTimestamp(Pi);this.Rm.ABz(AVv);this.Rm.ABD(AVw);
this.Rm.ABO(AVC);this.Rm.ABg(AVk);A.aat([this,this.Ben,this.Bpd],0);},ABy:function(
E){if(this.K&&this.K.ABy)return this.K.ABy.apply(this,arguments);else return C.DeviceClass.
Bn6.apply(this,arguments);},Bn6:function(E){},Bpc:function(Ao){this.ABy(Ao);},UpdateMainboardVersions:
function(Pi,AVt,AVu,AVs,AVI,AVJ,AVH){this.PY.OnSetTimestamp(Pi);this.PY.ABw(AVt);
this.PY.ABx(AVu);this.PY.ABv(AVs);this.PY.AB0(AVI);this.PY.AB1(AVJ);this.PY.ABZ(
AVH);A.aat([this,this.Bem,this.Bpc],0);},AB2:function(E){if(this.K&&this.K.AB2)return this.
K.AB2.apply(this,arguments);else return C.DeviceClass.BoA.apply(this,arguments);
},BoA:function(E){},Bpj:function(Ao){this.AB2(Ao);},UpdateTorchboardVersions:function(
Pi,AVt,AVu,AVs,AVI,AVJ,AVH){this.RG.OnSetTimestamp(Pi);this.RG.ABw(AVt);this.RG.
ABx(AVu);this.RG.ABv(AVs);this.RG.AB0(AVI);this.RG.AB1(AVJ);this.RG.ABZ(AVH);A.aat([
this,this.BeK,this.Bpj],0);},AA8:function(E){if(this.K&&this.K.AA8)return this.K.
AA8.apply(this,arguments);else return C.DeviceClass.BnK.apply(this,arguments);},
BnK:function(E){},Bo_:function(Ao){this.AA8(Ao);},UpdateBootloaderVersions:function(
Pi,AVv,AVw,AVC,AVk){this.QP.OnSetTimestamp(Pi);this.QP.ABz(AVv);this.QP.ABD(AVw);
this.QP.ABO(AVC);this.QP.ABg(AVk);A.aat([this,this.BdW,this.Bo_],0);},ABi:function(
E){if(this.K&&this.K.ABi)return this.K.ABi.apply(this,arguments);else return C.DeviceClass.
BnT.apply(this,arguments);},BnT:function(E){},A6C:function(Ao){this.ABi(Ao);},UpdateDryCowListAction:
function(AP){if(this.AJG===AP)return;this.AJG=AP;A.aat([this,this.A2x,this.A6C],
0);},AFL:function(AVm){if(this.K&&this.K.AFL)return this.K.AFL.apply(this,arguments
);else return C.DeviceClass.Bpu.apply(this,arguments);},Bpu:function(AVm){return false;
},ABF:function(E){if(this.K&&this.K.ABF)return this.K.ABF.apply(this,arguments);
else return C.DeviceClass.Bog.apply(this,arguments);},Bog:function(E){},A6L:function(
Ao){this.ABF(Ao);},UpdateNoNaisIdListAction:function(AP){if(this.ANz===AP)return;
this.ANz=AP;A.aat([this,this.A2O,this.A6L],0);},ABN:function(E){if(this.K&&this.
K.ABN)return this.K.ABN.apply(this,arguments);else return C.DeviceClass.Boo.apply(
this,arguments);},Boo:function(E){},A6M:function(Ao){this.ABN(Ao);},UpdateRegistrationsListAction:
function(AP){if(this.APt===AP)return;this.APt=AP;A.aat([this,this.A2Q,this.A6M],
0);},BatchResetBirthAnnouncementPending:function(){var Cy=A._NewObject(C.Animal,
0);var P;var AGS=0;var Agu=A._GetAutoObject(C.Device).Aq.Filter;var Bb=A._GetAutoObject(
C.Helper).LP();var A70=A._NewObject(C.BoolFilterCriterion,0);A70.Initialize(37,0
,true,false);Bb.CQ(A70);A._GetAutoObject(C.Device).Aq.Bo(Bb);for(P=0;P<A._GetAutoObject(
C.Device).Aq.Cf();P++){Cy.Fq(P,A._GetAutoObject(C.Device).Aq);Cy.Alm(false);Cy.Cs(
A._GetAutoObject(C.Device).Aq);AGS++;}A._GetAutoObject(C.Device).Aq.Bo(Agu);return AGS;
},UpdateTransferProgress:function(AP){if(this.Auw===AP)return;this.Auw=AP;A.aat([
this,this.AOc,this.AUZ],0);},AB3:function(E){if(this.K&&this.K.AB3)return this.K.
AB3.apply(this,arguments);else return C.DeviceClass.BoB.apply(this,arguments);},
BoB:function(E){A.aa8("%s",Nr);},AUZ:function(Ao){this.AB3(Ao);},UpdateTransferTarget:
function(AP){if(this.Adx===AP)return;this.Adx=AP;A.aat([this,this.A25,this.A6R],
0);},Apd:function(E){if(this.K&&this.K.Apd)return this.K.Apd.apply(this,arguments
);else return C.DeviceClass.BoC.apply(this,arguments);},BoC:function(E){A.aa8("%s"
,Kc);},A6R:function(Ao){this.Apd(Ao);},ApJ:function(){if(this.K&&this.K.ApJ)return this.
K.ApJ.apply(this,arguments);else return C.DeviceClass.Bo2.apply(this,arguments);
},Bo2:function(){},AtN:function(E){if(this.K&&this.K.AtN)return this.K.AtN.apply(
this,arguments);else return C.DeviceClass.Bol.apply(this,arguments);},Bol:function(
E){},AUU:function(Ao){this.AtN(Ao);},UpdatePremisesID:function(Ql){if(this.Ac_===
Ql)return;this.Ac_=Ql;A.aat([this,this.AN7,this.AUU],0);},AtI:function(E){if(this.
K&&this.K.AtI)return this.K.AtI.apply(this,arguments);else return C.DeviceClass.
Bn$.apply(this,arguments);},Bn$:function(E){},AET:function(Ao){this.AtI(Ao);},UpdateMotherSelectionDriedOffFilter:
function(AP){if(this.Z0===AP)return;this.Z0=AP;A.aat([this,this.AAV,this.AET],0);
},ABn:function(E){if(this.K&&this.K.ABn)return this.K.ABn.apply(this,arguments);
else return C.DeviceClass.BnZ.apply(this,arguments);},BnZ:function(E){},A6G:function(
Ao){this.ABn(Ao);},UpdateFreshCowSpan:function(AP){if(this.An8===AP)return;this.
An8=AP;A.aat([this,this.A2C,this.A6G],0);},UpdateUSBState:function(A7D){if(this.
AiT===A7D)return;this.AiT=A7D;A.aat([this,this.AcR,this.AdO],0);},AB4:function(E
){if(this.K&&this.K.AB4)return this.K.AB4.apply(this,arguments);else return C.DeviceClass.
BoD.apply(this,arguments);},BoD:function(E){A.aa8("%s",EH);},AdO:function(Ao){this.
AB4(Ao);},Auo:function(Af7){if(this.K&&this.K.Auo)return this.K.Auo.apply(this,arguments
);else return C.DeviceClass.BoW.apply(this,arguments);},BoW:function(Af7){return A.
_NewObject(C.Ahr,0);},AsR:function(){if(this.K&&this.K.AsR)return this.K.AsR.apply(
this,arguments);else return C.DeviceClass.Bnt.apply(this,arguments);},Bnt:function(
){return false;},ArX:function(Yp){if(this.K&&this.K.ArX)return this.K.ArX.apply(
this,arguments);else return C.DeviceClass.Bno.apply(this,arguments);},Bno:function(
Yp){},ABR:function(E){if(this.K&&this.K.ABR)return this.K.ABR.apply(this,arguments
);else return C.DeviceClass.Bor.apply(this,arguments);},Bor:function(E){},Bpg:function(
Ao){this.ABR(Ao);},UpdateSerialNumber:function(AP){if(this.AfL===AP)return;this.
AfL=AP;A.aat([this,this.Bey,this.Bpg],0);},Ate:function(E){if(this.K&&this.K.Ate
)return this.K.Ate.apply(this,arguments);else return C.DeviceClass.Bnz.apply(this
,arguments);},Bnz:function(E){},AUK:function(Ao){this.Ate(Ao);},UpdateAnimalIdAutoGenerationMethod:
function(A7K){if(this.AeC===A7K)return;this.AeC=A7K;A.aat([this,this.ANO,this.AUK
],0);},AyP:function(){return false;},ACx:function(){return false;},ABS:function(
E){if(this.K&&this.K.ABS)return this.K.ABS.apply(this,arguments);else return C.DeviceClass.
Bos.apply(this,arguments);},Bos:function(E){},A6N:function(Ao){this.ABS(Ao);},UpdateShutdownTimer:
function(AP){if(this.APV===AP)return;this.APV=AP;A.aat([this,this.A2X,this.A6N],
0);},AoS:function(E){if(this.K&&this.K.AoS)return this.K.AoS.apply(this,arguments
);else return C.DeviceClass.BnD.apply(this,arguments);},BnD:function(E){},A6v:function(
Ao){this.AoS(Ao);},UpdateAnimalListInfoItemMode:function(AP){if(this.Akm===AP)return;
this.Akm=AP;A.aat([this,this.A2n,this.A6v],0);},Apw:function(H){if(this.K&&this.
K.Apw)return this.K.Apw.apply(this,arguments);else return C.DeviceClass.BoT.apply(
this,arguments);},BoT:function(H){},Byv:function(s){this.Apw(s);},Apg:function(E
){if(this.K&&this.K.Apg)return this.K.Apg.apply(this,arguments);else return C.DeviceClass.
BoJ.apply(this,arguments);},BoJ:function(E){},A6W:function(Ao){this.Apg(Ao);},Aph:
function(E){if(this.K&&this.K.Aph)return this.K.Aph.apply(this,arguments);else return C.
DeviceClass.BoK.apply(this,arguments);},BoK:function(E){},A6X:function(Ao){this.
Aph(Ao);},UpdateWeightGainsLowString:function(AP){if(this.ADp===AP)return;this.ADp=
AP;A.aat([this,this.A3c,this.A6X],0);},UpdateWeightGainsHighString:function(AP){
if(this.ADo===AP)return;this.ADo=AP;A.aat([this,this.A3b,this.A6W],0);},Atg:function(
E){if(this.K&&this.K.Atg)return this.K.Atg.apply(this,arguments);else return C.DeviceClass.
BnG.apply(this,arguments);},BnG:function(E){},A6x:function(Ao){this.Atg(Ao);},UpdateAnimalTypesWeightGainsString:
function(AP){if(this.Ayg===AP)return;this.Ayg=AP;A.aat([this,this.A2q,this.A6x],
0);},Apf:function(E){if(this.K&&this.K.Apf)return this.K.Apf.apply(this,arguments
);else return C.DeviceClass.BoI.apply(this,arguments);},BoI:function(E){},A6V:function(
Ao){this.Apf(Ao);},Api:function(E){if(this.K&&this.K.Api)return this.K.Api.apply(
this,arguments);else return C.DeviceClass.BoO.apply(this,arguments);},BoO:function(
E){},A60:function(Ao){this.Api(Ao);},UpdateWeightValueBirthString:function(AP){if(
this.ADr===AP)return;this.ADr=AP;A.aat([this,this.A3f,this.A60],0);},UpdateWeightGainsAverageString:
function(AP){if(this.ADn===AP)return;this.ADn=AP;A.aat([this,this.A3a,this.A6V],
0);},Atv:function(E){if(this.K&&this.K.Atv)return this.K.Atv.apply(this,arguments
);else return C.DeviceClass.BnV.apply(this,arguments);},BnV:function(E){},Bpa:function(
Ao){this.Atv(Ao);},UpdateEvaluationAnimalType:function(D7){if(this.Ay8===D7)return;
this.Ay8=D7;A.aat([this,this.Bd6,this.Bpa],0);},UpdateStartScreen:function(AP){if(
this.Auq===AP)return;this.Auq=AP;A.aat([this,this.BeA,this.Bph],0);},AtR:function(
E){if(this.K&&this.K.AtR)return this.K.AtR.apply(this,arguments);else return C.DeviceClass.
Bot.apply(this,arguments);},Bot:function(E){},Bph:function(Ao){this.AtR(Ao);},AAf:
function(){if(this.K&&this.K.AAf)return this.K.AAf.apply(this,arguments);else return C.
DeviceClass.Bnr.apply(this,arguments);},Bnr:function(){return 1;},AAg:function(){
if(this.K&&this.K.AAg)return this.K.AAg.apply(this,arguments);else return C.DeviceClass.
Bns.apply(this,arguments);},Bns:function(){return 1;},GetCommitCount:function(){
return 1826;},GetCommitEpoch:function(){return 1685968304;},GetCommitHash:function(
){return A.kh.BaO;},GetVersionMajor:function(){return 0;},GetVersionMinor:function(
){return 9;},GetVersionRev:function(){return 9;},AAM:function(){return this.J5;}
,As2:function(){return this.Y_;},As4:function(){return this.Akt;},AN_:function(){
return this.ScanState;},AAT:function(){return this.MeasureState;},AAX:function(){
return this.JT;},A2I:function(){return this.Language;},AoK:function(){return this.
TemperatureUnit;},A2w:function(){return this.AIN;},AN0:function(){return this.AAA;
},AAW:function(){return this.OverlayMenu;},A26:function(){return this.X_;},AOa:function(
){return this.SyncState;},A27:function(){return this.ApU;},AAY:function(){return this.
AQA;},AN9:function(){return this.RatingMode;},AoG:function(){return this.AkG;},A24:
function(){return this.AQl;},Bes:function(){return this.APh;},BdU:function(){return this.
AutoRegistrationMode;},AN$:function(){return this.O7;},Aib:function(){return this.
Fp;},Aic:function(){return this.Fb;},AAZ:function(){return this.Ip;},ANZ:function(
){return this.MassUnit;},A2h:function(){return this.Pz;},ANN:function(){return this.
ArD;},A2r:function(){return this.AutoActions;},O1:function(){return this.AnimalType;
},A3d:function(){return this.WeightRecordingMode;},AN6:function(){return this.ACj;
},AAR:function(){return this.G$;},A2k:function(){return this.Akk;},A3e:function(
){return this.WeightRecordingScope;},XA:function(){return this.Gender;},As8:function(
){return this.Asx;},As7:function(){return this.Asw;},AAN:function(){return this.
Jf;},A2m:function(){return this.AHZ;},A2z:function(){return this.AkF;},ANP:function(
){return this.DP;},A2$:function(){return this.AQC;},A2B:function(){return this.AKl;
},A2p:function(){return this.Ayf;},A20:function(){return this.AC7;},A21:function(
){return this.AC8;},AN3:function(){return this.ANE;},Beb:function(){return this.
AkJ;},A2N:function(){return this.AAC;},A2M:function(){return this.AAB;},As$:function(
){return this.ANn;},As_:function(){return this.ANm;},A2v:function(){return this.
AnN;},A2g:function(){return this.Ax_;},BdQ:function(){return this.Aki;},Alc:function(
){return this.HO;},ANT:function(){return this.Ay0;},ANU:function(){return this.Ay1;
},As6:function(){return this.Ar2;},Ale:function(){return this.Aof;},AN1:function(
){return this.As0;},Ata:function(){return this.ANo;},AAS:function(){return this.
EartagNrAssignmentMode;},As3:function(){return this.Breed;},Ben:function(){return this.
Rm;},Bem:function(){return this.PY;},BeK:function(){return this.RG;},BdW:function(
){return this.QP;},A2x:function(){return this.AJG;},A2O:function(){return this.ANz;
},A2Q:function(){return this.APt;},AOc:function(){return this.Auw;},A25:function(
){return this.Adx;},AN7:function(){return this.Ac_;},AAV:function(){return this.
Z0;},A2C:function(){return this.An8;},AcR:function(){return this.AiT;},Bey:function(
){return this.AfL;},ANO:function(){return this.AeC;},A2X:function(){return this.
APV;},A2n:function(){return this.Akm;},A3b:function(){return this.ADo;},A3c:function(
){return this.ADp;},A2q:function(){return this.Ayg;},A3a:function(){return this.
ADn;},A3f:function(){return this.ADr;},Bd6:function(){return this.Ay8;},BeA:function(
){return this.Auq;},_Init:function(aArg){C.Table._Init.call(this.Aq={I:this},0);
C.Table._Init.call(this.Bt={I:this},0);C.Table._Init.call(this.AeA={I:this},0);A.
Core.A5c._Init.call(this.Aly={I:this},0);C.Table._Init.call(this.OF={I:this},0);
this.__proto__=C.DeviceClass;this.Aq.OnSetId(0);this.Bt.OnSetId(1);this.AeA.OnSetId(
3);this.OF.OnSetId(4);this.O7=A._NewObject(C.Transponder,0);this.Rm=A._NewObject(
C.Aun,0);this.PY=A._NewObject(C.Asq,0);this.RG=A._NewObject(C.Asq,0);this.QP=A._NewObject(
C.Aun,0);var KP=this._variants();if(KP){this.K={};KP._Init.call(this,aArg);}A.hJ++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Aq.
_Done();this.Bt._Done();this.AeA._Done();this.Aly._Done();this.OF._Done();A.hJ--;
},_ReInit:function(){this.Aq._ReInit();this.Bt._ReInit();this.AeA._ReInit();this.
Aly._ReInit();this.OF._ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(
D){var B;if((B=this.O7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.PY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.RG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.QP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aly
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((
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
AY:A.jm,Ab_:function(){var As=A._NewObject(C.StringFilterCriterion,0);As.F$(this
);return As;},F$:function(AK){C.FilterCriterion.F$.call(this,AK);var As=(C.StringFilterCriterion.
isPrototypeOf(AK)?AK:null);if(!!As)this.AY=As.AY;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={Cq:function(Z,AR){if(this.K&&this.K.Cq)return this.K.Cq.apply(this,arguments
);else return C.ITable.Cq.apply(this,arguments);},Ug:function(Z,AR){if(this.K&&this.
K.Ug)return this.K.Ug.apply(this,arguments);else return C.ITable.Ug.apply(this,arguments
);},Hs:function(Z,AR){if(this.K&&this.K.Hs)return this.K.Hs.apply(this,arguments
);else return C.ITable.Hs.apply(this,arguments);},OnSetId:function(E){if(this.K&&
this.K.OnSetId)return this.K.OnSetId.apply(this,arguments);else return C.ITable.
OnSetId.apply(this,arguments);},Cf:function(){if(this.K&&this.K.Cf)return this.K.
Cf.apply(this,arguments);else return C.ITable.Cf.apply(this,arguments);},Bo:function(
E){if(this.K&&this.K.Bo)return this.K.Bo.apply(this,arguments);else return C.ITable.
Bo.apply(this,arguments);},Uh:function(Z,AR){if(this.K&&this.K.Uh)return this.K.
Uh.apply(this,arguments);else return C.ITable.Uh.apply(this,arguments);},Q_:function(
Z,AR){if(this.K&&this.K.Q_)return this.K.Q_.apply(this,arguments);else return C.
ITable.Q_.apply(this,arguments);},NS:function(){if(this.K&&this.K.NS)return this.
K.NS.apply(this,arguments);else return C.ITable.NS.apply(this,arguments);},NU:function(
Amm){if(this.K&&this.K.NU)return this.K.NU.apply(this,arguments);else return C.ITable.
NU.apply(this,arguments);},WZ:function(){if(this.K&&this.K.WZ)return this.K.WZ.apply(
this,arguments);else return C.ITable.WZ.apply(this,arguments);},XW:function(Z,AR
,CM){if(this.K&&this.K.XW)return this.K.XW.apply(this,arguments);else return C.ITable.
XW.apply(this,arguments);},GJ:function(Z,AR,CM){if(this.K&&this.K.GJ)return this.
K.GJ.apply(this,arguments);else return C.ITable.GJ.apply(this,arguments);},XV:function(
Z,AR,CM){if(this.K&&this.K.XV)return this.K.XV.apply(this,arguments);else return C.
ITable.XV.apply(this,arguments);},MC:function(Z,AR,CM){if(this.K&&this.K.MC)return this.
K.MC.apply(this,arguments);else return C.ITable.MC.apply(this,arguments);},XU:function(
Z,AR,CM){if(this.K&&this.K.XU)return this.K.XU.apply(this,arguments);else return C.
ITable.XU.apply(this,arguments);},LM:function(aColumn,A2){if(this.K&&this.K.LM)return this.
K.LM.apply(this,arguments);else return C.ITable.LM.apply(this,arguments);},LQ:function(
Z,AR){if(this.K&&this.K.LQ)return this.K.LQ.apply(this,arguments);else return C.
ITable.LQ.apply(this,arguments);},S8:function(Z,AR,CM){if(this.K&&this.K.S8)return this.
K.S8.apply(this,arguments);else return C.ITable.S8.apply(this,arguments);},AhA:function(
aColumn,A2){if(this.K&&this.K.AhA)return this.K.AhA.apply(this,arguments);else return C.
ITable.AhA.apply(this,arguments);},G1:function(){if(this.K&&this.K.G1)return this.
K.G1.apply(this,arguments);else return C.ITable.G1.apply(this,arguments);},Ahy:function(
aColumn,A2){if(this.K&&this.K.Ahy)return this.K.Ahy.apply(this,arguments);else return C.
ITable.Ahy.apply(this,arguments);},Acb:function(aColumn,A2){if(this.K&&this.K.Acb
)return this.K.Acb.apply(this,arguments);else return C.ITable.Acb.apply(this,arguments
);},If:function(){if(this.K&&this.K.If)return this.K.If.apply(this,arguments);else
return C.ITable.If.apply(this,arguments);},Zx:function(){if(this.K&&this.K.Zx)return this.
K.Zx.apply(this,arguments);else return C.ITable.Zx.apply(this,arguments);},PG:function(
){if(this.K&&this.K.PG)return this.K.PG.apply(this,arguments);else return C.ITable.
PG.apply(this,arguments);},_Init:function(aArg){C.ITable._Init.call(this,aArg);this.
__proto__=C.Table;var KP=this._variants();if(KP){this.K={};KP._Init.call(this,aArg
);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=C.ITable;
C.ITable._Done.call(this);},_ReInit:function(){C.ITable._ReInit.call(this);if(this.
K)this.K._ReInit.call(this);},_Mark:function(D){C.ITable._Mark.call(this,D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.abt.Table._variants();},K:null
,_className:"Device::Table"};C.TableId={Animal:0,Rating:1,Undefined:2,AnimalGroup:
3,CalfDeregistrations:4};C.ScanState={Idle:0,Progress:1,IdScanned:2,NotFound:3,Error:
4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:2,Respiratory:3,Faeces:4};C.
ConverterClass={MV:null,AiN:function(Amk){var A8j;var Arp=this.AQc(Amk/100,0,A._GetAutoObject(
C.Device).TemperatureUnit);A8j=A.aap(Arp,0,1);return A8j;},A5l:function(MG){if(MG<=
0)return 0;else if(MG<=1)return 5;else if(MG<=2)return 3;else if(MG<=4)return 2;
else if(MG<=6)return 1;else if(MG<=8)return 4;else return 0;},AbR:function(MG){var
a=0;switch(MG){case 3:a=2;break;case 2:a=4;break;case 1:a=6;break;case 0:a=0;break;
case 4:a=8;break;case 5:a=1;break;default:A.aa8("%s",Og);}return a;},ApN:function(
D7,Qn){var MI=A._GetAutoObject(C.Converter).Ahb(Qn,D7);switch(MI){case 3:return 1;
case 2:return 2;case 1:return 3;case 0:return 4;default:throw new Error(ME+MI.toFixed(
));}},AfU:function(){var B;var DN=A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(
C.Helper).DR());DN.All(0);DN.Alp(0);DN.Als(0);return((B=(DN.JN()|0))<0)?B+0x100000000:
B;},BaT:function(Aqn){var C8;switch(Aqn){case 36:C8=Pd;break;case 40:C8=RO;break;
case 56:C8=Tn;break;case 70:C8=Vi;break;case 100:C8=Vj;break;case 124:C8=JV;break;
case 156:C8=RP;break;case 158:C8=Vk;break;case 191:C8=Vl;break;case 196:C8=Yb;break;
case 203:C8=RQ;break;case 208:C8=Yc;break;case 233:C8=Vm;break;case 246:C8=To;break;
case 250:C8=Vn;break;case 276:C8=Qh;break;case 300:C8=Vo;break;case 348:C8=Ns;break;
case 372:C8=Pe;break;case 380:C8=Tp;break;case 392:C8=Yd;break;case 428:C8=Vp;break;
case 440:C8=Ye;break;case 442:C8=Yf;break;case 470:C8=Vq;break;case 528:C8=Vr;break;
case 578:C8=RR;break;case 616:C8=Yg;break;case 620:C8=Yh;break;case 642:C8=AaK;break;
case 643:C8=Qi;break;case 703:C8=AaL;break;case 705:C8=AdG;break;case 724:C8=Yi;
break;case 752:C8=Vs;break;case 756:C8=Yj;break;case 792:C8=AdH;break;case 804:C8=
KO;break;case 826:C8=AaM;break;case 840:C8=RS;break;default:C8=Aqn.toFixed();}return C8;
},AlV:function(Ny){return this.Np(Ny,1,false);},AuJ:function(Ny,AmA){return this.
Np(Ny,AmA,false);},Np:function(Ny,AmA,Bsy){var B;var Ajt=A.jm;switch(A._GetAutoObject(
C.Device).MassUnit){case 0:if(Bsy)Ajt=A.aaq(Ny,0,0);else{var A9A=Ny<0;if(AmA<3)Ny=
Ny+(((A9A?-1:1)*5)*(Math.pow(10,2-AmA)|0));Ajt=(((((B=Ny)>-2147483648)?Math.abs(
B):B)/1000)|0).toFixed();if(AmA>0)Ajt=Ajt+(Nt+A.aaX(A.aaq((((B=Ny)>-2147483648)?
Math.abs(B):B)%1000,3,10),AmA));if(A9A)Ajt=AlX+Ajt;}break;case 1:Ajt=A.aap(Ny/453.592
,0,AmA);break;default:A.aa8("%s%s",AlY,A._GetAutoObject(C.Device).MassUnit.toFixed(
));}return Ajt;},Vc:function(Nx){var AYC=Nx.toFixed();var A$F=AYC.length;if((A$F>=
14)&&(A$F<=15)){var AWR=this.Auy(Nx);var Brr=A._GetAutoObject(C.Converter).BaT(AWR
);AYC=(Brr+JW)+A.aar(A._GetAutoObject(C.Helper).Ue(Nx,0,12),12,10);}return AYC;}
,AkK:function(Ln){switch(Ln){case 0:return A.zW(A.abi.AL$);case 1:return A.zW(A.
abi.Az2);case 2:return A.zW(A.abi.Az7);default:{A.aa8("%s%e",AlZ,Ln);return null;
}}},AZi:function(Bq0){switch(Bq0){case 0:return A.zW(A.abi.AsB);case 1:return A.
zW(A.abi.AzX);case 2:return A.zW(A.abi.AL5);default:throw new Error(Al0);}},AeF:
function(AFt){switch(AFt){case 0:return A.zW(A.abi.AhK);case 2:return A.zW(A.abi.
AkS);case 1:return A.zW(A.abi.ZH);case 3:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.zW(A.abi.AsK);case 1:return A.zW(A.abi.AsL);default:throw new Error(
Af0+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 4:return A.zW(A.abi.
ALw);case 5:return A.zW(A.abi.ALx);case 6:return A.zW(A.abi.ALB);case 7:return A.
zW(A.abi.AKY);case 8:return A.zW(A.abi.AK5);case 9:return A.zW(A.abi.Azy);case 10:
return A.zW(A.abi.AK4);case 11:return A.zW(A.abi.AK6);default:throw new Error(AaN+
AFt.toFixed());}},Bab:function(AvO){switch(AvO){case 0:return A.zW(A.abi.Az5);case
3:return A.zW(A.abi.AkS);case 1:return A.zW(A.abi.ZH);case 2:return A._GetAutoObject(
A.abk.Dy).A8G();default:throw new Error(AaN+AvO.toFixed());}},BaS:function(Aqn){
switch(Aqn){case 977:return Yk;case 978:return AuK;case 980:return AuL;case 981:
return AuM;case 982:return AuN;case 983:return AiY;case 984:return AuO;case 985:
return AuP;default:return A.z2(A.abg.Unknown);}},Bbb:function(AaW){switch(AaW){case
1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;case
5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;case
9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},Bi0:function(Nx){if(
!Nx)return-1;return(Nx%100000000)|0;},BbE:function(Amj,aFilter){var B;if(!aFilter
)return AdI;var AmL=AdJ;var As=aFilter.AKu();while(!!As){AmL=AmL+A._GetAutoObject(
C.Helper).A0W(Amj,As);As=aFilter.AKy(As);if(!!As)AmL=AmL+Kd;}AmL=AmL+AuQ;return AmL;
},BcQ:function(A7o){var L3=0;switch(A7o){case 14:L3=2;break;case 13:L3=4;break;case
6:L3=36;break;case 11:L3=9;break;case 0:L3=0;break;case 10:L3=26;break;case 12:L3=
12;break;case 5:L3=14;break;case 3:L3=15;break;case 1:L3=10;break;case 8:L3=16;break;
case 4:L3=20;break;case 15:L3=27;break;case 9:L3=31;break;case 2:L3=13;break;case
7:L3=35;break;case 16:L3=37;break;default:A.aa8("%s%e",Vt,A7o);}return L3;},Baa:
function(AvO){switch(AvO){case 0:return 1;case 3:return 0;case 1:return 2;case 2:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return 3;case 1:return 4;default:
throw new Error(Af0+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:
throw new Error(AaN+AvO.toFixed());}},Bac:function(Amr){switch(Amr){case 0:return A.
zW(A.abi.ALt);case 1:return A.zW(A.abi.Az5);case 9:return A.zW(A.abi.ALD);case 4:
return A.zW(A.abi.ACv);case 6:return A.zW(A.abi.Apq);case 8:return A.zW(A.abi.Asy
);case 2:return A.zW(A.abi.ZH);case 3:return A.zW(A.abi.AkS);case 7:return A.zW(
A.abj.J6);case 5:return A.zW(A.abj.J6);case 10:switch(A._GetAutoObject(C.Device).
MassUnit){case 0:return A.zW(A.abi.AsK);case 1:return A.zW(A.abi.AsL);default:throw new
Error(Af0+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
zW(A.abj.J6);case 12:return A.zW(A.abj.J6);case 13:return A.zW(A.abj.J6);case 14:
return A.zW(A.abj.J6);case 15:return A.zW(A.abj.J6);case 16:return A.zW(A.abj.J6
);case 17:return A.zW(A.abj.J6);default:throw new Error(AiZ+Amr.toFixed());}},AJj:
function(Aqn){switch(Aqn){case 40:return 1;case 56:return 3;case 70:return 2;case
100:return 4;case 124:return 5;case 156:return 7;case 158:return 36;case 191:return 17;
case 196:return 8;case 203:return 9;case 208:return 11;case 233:return 12;case 246:
return 14;case 250:return 15;case 276:return 10;case 300:return 16;case 348:return 18;
case 372:return 19;case 380:return 20;case 392:return 21;case 428:return 24;case
440:return 22;case 442:return 23;case 470:return 25;case 528:return 26;case 578:
return 27;case 616:return 28;case 620:return 29;case 642:return 30;case 643:return 31;
case 703:return 34;case 705:return 33;case 724:return 13;case 752:return 32;case
756:return 6;case 792:return 35;case 804:return 37;case 826:return 38;case 840:return 39;
default:return 0;}},AfW:function(Nx){var AWR=this.Auy(Nx);return this.AJj(AWR);}
,Auy:function(Nx){return A._GetAutoObject(C.Helper).Ue(Nx,12,3)|0;},A5D:function(
Amo,D7){if(Amo<A._GetAutoObject(C.Helper).Azu(D7))return 1;else if(Amo<A._GetAutoObject(
C.Helper).Azt(D7))return 2;else return 3;},AKr:function(BqF){switch(BqF){case 1:
return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:
return 6;case 7:return 7;case 8:return 8;case 9:return 9;case 10:return 10;case 11:
return 11;case 12:return 12;case 13:return 13;case 14:return 14;case 15:return 15;
case 16:return 16;default:return 0;}},AQc:function(A2,AFg,AFh){if(AFg===AFh)return A2;
if(!AFg&&(AFh===1)){var result=((A2*9)/5)+32;return result;}if((AFg===1)&&!AFh){
var result=((A2-32)*5)/9;return result;}throw new Error(((AuR+AFg.toFixed())+AuS
)+AFh.toFixed());},A0I:function(En){switch(En){case 0:return AuT;case 1:return A.
jm;case 2:return Al1;case 3:return AuU;case 4:return A.z2(A.abg.Contains);case 5:
return Ap1;default:{A.aa8("%s%e",Ke,En);return A.jm;}}},AZP:function(AaU){return this.
MV.Aca(AaU);},Bcl:function(AaU){return this.MV.Akv(AaU);},Baz:function(Aqm){var Aw0=
0;switch(Aqm){case 0:Aw0=1;break;case 1:Aw0=2;break;case 2:Aw0=3;break;case 3:Aw0=
4;break;default:A.aa8("%s%e",AQV,Aqm);}return Aw0;},Ahb:function(AVf,D7){if(AVf>=
A._GetAutoObject(C.Helper).A0T(D7))return 3;else if(AVf>=A._GetAutoObject(C.Helper
).Asm(D7))return 2;else if(AVf<A._GetAutoObject(C.Device).X_)return 0;else return 1;
},ArT:function(L3){var BJ=-1;switch(L3){case 0:BJ=0;break;case 1:BJ=40;break;case
2:BJ=70;break;case 3:BJ=56;break;case 4:BJ=100;break;case 5:BJ=124;break;case 6:
BJ=756;break;case 7:BJ=156;break;case 8:BJ=196;break;case 9:BJ=203;break;case 10:
BJ=276;break;case 11:BJ=208;break;case 12:BJ=233;break;case 13:BJ=724;break;case
14:BJ=246;break;case 15:BJ=250;break;case 16:BJ=300;break;case 17:BJ=191;break;case
18:BJ=348;break;case 19:BJ=372;break;case 20:BJ=380;break;case 21:BJ=392;break;case
22:BJ=440;break;case 23:BJ=442;break;case 24:BJ=428;break;case 25:BJ=470;break;case
26:BJ=528;break;case 27:BJ=578;break;case 28:BJ=616;break;case 29:BJ=620;break;case
30:BJ=642;break;case 31:BJ=643;break;case 32:BJ=752;break;case 33:BJ=705;break;case
34:BJ=703;break;case 35:BJ=792;break;case 36:BJ=158;break;case 37:BJ=804;break;case
38:BJ=826;break;case 39:BJ=840;break;default:throw new Error(Ap2+L3.toFixed());}
return BJ;},_Init:function(aArg){C.MV._Init.call(this.MV={I:this},0);this.__proto__=
C.ConverterClass;A.hJ++;},_Done:function(){this.__proto__=null;this.MV._Done();A.
hJ--;},_ReInit:function(){this.MV._ReInit();},_Mark:function(D){var B;if((B=this.
MV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
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
false,IsAlarm:false,Fq:function(Z,AF){var G8=C.Row.Fq.call(this,Z,AF);if(G8&&!!AF
){this.OnSetId(AF.Cq(Z,0));this.XK(AF.Cq(Z,1));this.Z$(AF.Cq(Z,2));this.Alo(AF.Cq(
Z,3));this.AcV(AF.Ht(Z,4));this.J9(AF.AKw(Z,7));this.Aih(AF.BbX(Z,6));this.DS(AF.
AkL(Z,14));this.Nf(AF.LQ(Z,22));this.O3(AF.LQ(Z,26));this.At1(AF.ID(Z,13));this.
AcX(AF.Hs(Z,8));this.AtV(AF.Ht(Z,15));this.AOT(AF.Ht(Z,31));this.Ac1(AF.A04(Z,5)
);this.AOy(AF.ID(Z,17));this.SY(AF.Hs(Z,11));this.AOS(AF.Ht(Z,16));this.AOV(AF.Ht(
Z,30));this.Ain(AF.Hs(Z,9));this.AcZ(AF.Hs(Z,12));this.AOU(AF.Ht(Z,20));this.AtX(
AF.Ht(Z,21));this.Afv(AF.Hs(Z,10));this.AtC(AF.Hs(Z,27));this.ABu(AF.Azp(Z,18));
this.ABV(AF.Ht(Z,19));this.Aty(AF.Azp(Z,23));this.AtW(AF.Ht(Z,24));this.AOp(AF.Cq(
Z,25));this.Atp(AF.Ht(Z,28));this.AtD(AF.Cq(Z,29));this.Ao6(AF.Hs(Z,38));this.O2(
AF.BbY(Z,32));this.Aij(AF.Bb1(Z,33));this.Alq(AF.LQ(Z,35));this.Aah(AF.AKF(Z,34)
);this.Alm(AF.Hs(Z,37));this.ABM(AF.Bb$(Z,36));}return G8;},Cs:function(AF){var G8=
C.Row.Cs.call(this,AF);if(G8&&!!AF){var IR=AF.NS();if(IR<=0)A.aa8("%s",AaO);else{
var AwH=this.AkW();if(AwH)this.Cu=AF.WZ();else AF.GJ(this.Cu,0,this.Id);AF.GJ(this.
Cu,1,this.VisualId);AF.GJ(this.Cu,2,this.GroupId);AF.GJ(this.Cu,3,this.LocationId
);AF.Aap(this.Cu,4,this.DateOfBirth);AF.BhZ(this.Cu,7,this.Gender);AF.BhV(this.Cu
,6,this.BirthType);AF.BhT(this.Cu,14,this.AnimalType);AF.S8(this.Cu,22,this.TransponderId
);AF.S8(this.Cu,26,this.NaisId);AF.AiF(this.Cu,13,this.WorstAssessment);AF.MC(this.
Cu,8,this.IsAlarm);AF.Aap(this.Cu,15,this.TimestampAlarm);AF.MC(this.Cu,11,this.
IsFever);AF.Aap(this.Cu,16,this.TimestampExpirationFeverAlarm);AF.MC(this.Cu,9,this.
IsControl);AF.MC(this.Cu,12,this.IsWatch);AF.Aap(this.Cu,20,this.TimestampLastControl
);AF.Aap(this.Cu,21,this.TimestampLastWatch);AF.MC(this.Cu,10,this.IsRegistered);
AF.MC(this.Cu,27,this.IsPerished);AF.Aap(this.Cu,28,this.DateOfLastCalving);AF.GJ(
this.Cu,29,this.LactationNumber);AF.MC(this.Cu,38,this.IsDry);AF.BhX(this.Cu,32,
this.Breed);AF.BhY(this.Cu,33,this.EaseOfDelivery);AF.S8(this.Cu,35,this.NaisIdMother
);AF.Bh5(this.Cu,34,this.WhereAbouts);AF.MC(this.Cu,37,this.IsBirthAnnouncementPending
);AF.Bh3(this.Cu,36,this.ReasonOfLeaving);G8=AF.NU(IR);if(AwH)this.OnSetId(AF.Zx(
));}}return G8;},GG:function(){C.Row.GG.call(this);this.OnSetId(-1);this.Afv(true
);},G1:function(){C.Row.G1.call(this);this.OnSetId(0);this.XK(0);this.Z$(0);this.
Alo(0);this.AcV(0);this.J9(A._GetAutoObject(C.Device).Gender);this.Aih(0);this.DS(
A._GetAutoObject(C.Device).AnimalType);this.Nf(0);this.O3(0);this.At1(0);this.AcX(
false);this.AtV(0);this.AOT(0);this.Ac1(0);this.AOy(0);this.SY(false);this.AOV(0
);this.AOS(0);this.Ain(false);this.AcZ(false);this.AOU(0);this.AtX(0);this.Afv(false
);this.AtC(false);this.ABu(0);this.ABV(0);this.Aty(0);this.AtW(0);this.AOp(-1);this.
Atp(0);this.AtD(0);this.Ao6(false);this.O2(0);this.Aij(0);this.Alq(0);this.Aah(0
);this.Alm(false);this.ABM(0);},OnSetId:function(E){if(this.Id===E)return;this.Id=
E;A.aat([this,this.P1,this.OnSetId],0);},XK:function(E){if(this.VisualId===E)return;
this.VisualId=E;A.aat([this,this.AoL,this.XK],0);},Z$:function(E){if(this.GroupId===
E)return;this.GroupId=E;A.aat([this,this.Bec,this.Z$],0);},AcV:function(E){if(this.
DateOfBirth===E)return;this.DateOfBirth=E;A.aat([this,this.AAP,this.AcV],0);},J9:
function(E){if(this.Gender===E)return;this.Gender=E;A.aat([this,this.XA,this.J9]
,0);},Aih:function(E){if(this.BirthType===E)return;this.BirthType=E;A.aat([this,
this.ANR,this.Aih],0);},Alo:function(E){if(this.LocationId===E)return;this.LocationId=
E;A.aat([this,this.A2L,this.Alo],0);},Ac1:function(E){if(this.LastTemperature===
E)return;this.LastTemperature=E;A.aat([this,this.A2K,this.Ac1],0);},AcX:function(
E){if(this.IsAlarm===E)return;this.IsAlarm=E;A.aat([this,this.A2F,this.AcX],0);}
,Ain:function(E){if(this.IsControl===E)return;this.IsControl=E;A.aat([this,this.
Beg,this.Ain],0);},Afv:function(E){if(this.IsRegistered===E)return;this.IsRegistered=
E;A.aat([this,this.Bej,this.Afv],0);},AcZ:function(E){if(this.IsWatch===E)return;
this.IsWatch=E;A.aat([this,this.A2H,this.AcZ],0);},At1:function(E){if(this.WorstAssessment===
E)return;this.WorstAssessment=E;A.aat([this,this.A3g,this.At1],0);},SY:function(
E){if(this.IsFever===E)return;this.IsFever=E;A.aat([this,this.A2G,this.SY],0);},
AOU:function(E){if(this.TimestampLastControl===E)return;this.TimestampLastControl=
E;A.aat([this,this.BeH,this.AOU],0);},AtX:function(E){if(this.TimestampLastWatch===
E)return;this.TimestampLastWatch=E;A.aat([this,this.BeJ,this.AtX],0);},AOy:function(
E){if(this.LastRatingTemperature===E)return;this.LastRatingTemperature=E;A.aat([
this,this.Bel,this.AOy],0);},AOS:function(E){if(this.TimestampExpirationFeverAlarm===
E)return;this.TimestampExpirationFeverAlarm=E;A.aat([this,this.BeF,this.AOS],0);
},AtV:function(E){if(this.TimestampAlarm===E)return;this.TimestampAlarm=E;A.aat([
this,this.BeE,this.AtV],0);},DS:function(E){if(this.AnimalType===E)return;this.AnimalType=
E;A.aat([this,this.O1,this.DS],0);},ABu:function(E){if(this.LastBodyWeight===E)return;
this.LastBodyWeight=E;A.aat([this,this.A2J,this.ABu],0);},ABV:function(E){if(this.
TimestampLastWeighing===E)return;this.TimestampLastWeighing=E;A.aat([this,this.A23
,this.ABV],0);},Nf:function(E){if(this.TransponderId===E)return;this.TransponderId=
E;A.aat([this,this.Aid,this.Nf],0);},Sg:function(){return A._GetAutoObject(C.Helper
).L7(this.DateOfBirth,A._GetAutoObject(C.Helper).DR());},Aty:function(E){if(this.
FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.aat([this,this.ANW,this.Aty]
,0);},AtW:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.aat([this,this.AOb,this.AtW],0);},Aor:function(){var Yz=A._NewObject(A.Core.
Bp,0);Yz.Initialize(this.DateOfBirth);var AWD=A._NewObject(A.Core.Bp,0);AWD.Initialize(
this.TimestampFirstWeighing);if(((Yz.Year===AWD.Year)&&(Yz.Z4()===AWD.Z4()))&&(this.
FirstBodyWeight>0))return true;else return false;},AiV:function(AFa){var VS;var Any;
if(this.TimestampLastWeighing>0){Any=this.TimestampLastWeighing;VS=this.LastBodyWeight;
}else if(this.AnimalType===1){Any=A._GetAutoObject(C.Helper).DR();VS=600000;}else{
Any=this.DateOfBirth;VS=A._GetAutoObject(C.Helper).AhE(this.AnimalType);}return A.
_GetAutoObject(C.Helper).AiV(VS,Any,AFa,this.AnimalType);},AOp:function(E){if(this.
FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;A.aat([this,this.Bea,this.
AOp],0);},AlG:function(A7J){this.AcX(A7J);if(A7J){if(!this.TimestampAlarm)this.AtV(
A._GetAutoObject(C.Helper).DR());}else this.AtV(0);},O3:function(E){if(this.NaisId===
E)return;this.NaisId=E;A.aat([this,this.AoH,this.O3],0);},ACI:function(A7F){this.
AcZ(A7F);if(A7F){if(!this.TimestampLastWatch)this.AtX(A._GetAutoObject(C.Helper).
DR());}else this.AtX(0);},Atp:function(E){if(this.DateOfLastCalving===E)return;this.
DateOfLastCalving=E;A.aat([this,this.Bd2,this.Atp],0);},AtD:function(E){if(this.
LactationNumber===E)return;this.LactationNumber=E;A.aat([this,this.Bek,this.AtD]
,0);},AtC:function(E){if(this.IsPerished===E)return;this.IsPerished=E;A.aat([this
,this.Bei,this.AtC],0);},AOV:function(E){if(this.TimestampLastTemperature===E)return;
this.TimestampLastTemperature=E;A.aat([this,this.BeI,this.AOV],0);},AOT:function(
E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=E;A.aat([
this,this.BeG,this.AOT],0);},O2:function(E){if(this.Breed===E)return;this.Breed=
E;A.aat([this,this.As3,this.O2],0);},Aij:function(E){if(this.EaseOfDelivery===E)
return;this.EaseOfDelivery=E;A.aat([this,this.ANV,this.Aij],0);},Aah:function(E){
if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.aat([this,this.AOf,this.Aah]
,0);},Alq:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.aat([
this,this.AN2,this.Alq],0);},ABM:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.aat([this,this.Beu,this.ABM],0);},Alm:function(E){if(this.
IsBirthAnnouncementPending===E)return;this.IsBirthAnnouncementPending=E;A.aat([this
,this.Bef,this.Alm],0);},Ao6:function(E){if(this.IsDry===E)return;this.IsDry=E;A.
aat([this,this.Beh,this.Ao6],0);},P1:function(){return this.Id;},AoL:function(){
return this.VisualId;},Bec:function(){return this.GroupId;},AAP:function(){return this.
DateOfBirth;},XA:function(){return this.Gender;},ANR:function(){return this.BirthType;
},A2L:function(){return this.LocationId;},A2K:function(){return this.LastTemperature;
},A2F:function(){return this.IsAlarm;},Beg:function(){return this.IsControl;},Bej:
function(){return this.IsRegistered;},A2H:function(){return this.IsWatch;},A3g:function(
){return this.WorstAssessment;},A2G:function(){return this.IsFever;},BeH:function(
){return this.TimestampLastControl;},BeJ:function(){return this.TimestampLastWatch;
},Bel:function(){return this.LastRatingTemperature;},BeF:function(){return this.
TimestampExpirationFeverAlarm;},BeE:function(){return this.TimestampAlarm;},O1:function(
){return this.AnimalType;},A2J:function(){return this.LastBodyWeight;},A23:function(
){return this.TimestampLastWeighing;},Aid:function(){return this.TransponderId;}
,ANW:function(){return this.FirstBodyWeight;},AOb:function(){return this.TimestampFirstWeighing;
},Bea:function(){return this.FirstBodyWeightId;},AoH:function(){return this.NaisId;
},Bd2:function(){return this.DateOfLastCalving;},Bek:function(){return this.LactationNumber;
},Bei:function(){return this.IsPerished;},BeI:function(){return this.TimestampLastTemperature;
},BeG:function(){return this.TimestampLastAssessment;},As3:function(){return this.
Breed;},ANV:function(){return this.EaseOfDelivery;},AOf:function(){return this.WhereAbouts;
},AN2:function(){return this.NaisIdMother;},Beu:function(){return this.ReasonOfLeaving;
},Bef:function(){return this.IsBirthAnnouncementPending;},Beh:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={Cu:-1,TableId:2,Fq:function(
Z,AF){if(!AF){A.aa8("%s",(ADt+this.Cu.toFixed())+ADu);return false;}else if(AF.Id
!==this.TableId)throw new Error(ADv);else if((Z<0)||(Z>=AF.Cf())){A.aa8("%s",(((
ADw+this.Cu.toFixed())+AuV)+AF.Cf().toFixed())+ADx);return false;}this.Cu=Z;return true;
},Cs:function(AF){if(!AF){A.aa8("%s",(ADt+this.Cu.toFixed())+ADu);return false;}
else if(AF.Id!==this.TableId)throw new Error(ADv);else if(this.AkW()&&AF.Ms()){A.
aa8("%s",AQW+AF.If().toFixed());return false;}else if(!this.AkW()&&((this.Cu<0)||(
this.Cu>=AF.Cf()))){A.aa8("%s",(((ADw+this.Cu.toFixed())+AuV)+AF.Cf().toFixed())+
ADx);return false;}return true;},GG:function(){this.G1();this.Cu=-1;},AkW:function(
){return this.Cu===-1;},G1:function(){this.Cu=-2;},Aob:function(){return this.Cu
!==-2;},A2R:function(){return this.Cu;},A38:function(E){this.Cu=E;},_Init:function(
aArg){this.__proto__=C.Row;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:0,AnimalId:0,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,Fq:function(Z,AF){var G8=C.Row.Fq.call(this,
Z,AF);if(G8&&!!AF){this.OnSetId(AF.Cq(Z,0));this.OnSetAnimalId(AF.Cq(Z,1));this.
OnSetTimestamp(AF.Ht(Z,6));this.OnSetFeed(AF.ID(Z,2));this.OnSetAppearance(AF.ID(
Z,3));this.OnSetRespiratory(AF.ID(Z,4));this.OnSetFaeces(AF.ID(Z,5));this.OnSetTemperature(
AF.A04(Z,7));this.OnSetBodyWeight(AF.Azp(Z,8));this.OnSetRatingTemperature(AF.ID(
Z,9));}return G8;},Cs:function(AF){if(this.K&&this.K.Cs)return this.K.Cs.apply(this
,arguments);else return C.Rating.A6l.apply(this,arguments);},A6l:function(AF){var
G8=C.Row.Cs.call(this,AF);if((G8&&!!AF)&&(AF.Id===1)){var IR=AF.NS();if(IR<=0)A.
aa8("%s",AaO);else{var AwH=this.AkW();if(AwH)this.Cu=AF.WZ();else AF.GJ(this.Cu,
0,this.Id);AF.GJ(this.Cu,1,this.AnimalId);AF.Aap(this.Cu,6,this.Timestamp);AF.AiF(
this.Cu,2,this.Feed);AF.AiF(this.Cu,3,this.Appearance);AF.AiF(this.Cu,4,this.Respiratory
);AF.AiF(this.Cu,5,this.Faeces);AF.A4X(this.Cu,7,this.Temperature);AF.API(this.Cu
,8,this.BodyWeight);AF.AiF(this.Cu,9,this.RatingTemperature);AF.NU(IR);if(AwH)this.
OnSetId(AF.Zx());var Qp=A._GetAutoObject(C.Device).Aq;var Z=A._GetAutoObject(C.Device
).Aq.LM(0,this.AnimalId);if(Z>=0){var Cy=A._NewObject(C.Animal,0);Cy.Fq(Z,Qp);if(
this.Temperature>0)Cy.SY(A._GetAutoObject(C.Helper).A1t(this));if((this.Temperature>
0)&&A._GetAutoObject(C.Helper).ACo(this)){var NF=A._GetAutoObject(C.Helper).AMK(
this);Cy.Ain(NF);Cy.AlG(NF);}else if(this.Temperature>0){var NF=(A._GetAutoObject(
C.Helper).AMK(this)||(Cy.WorstAssessment===2))||(Cy.WorstAssessment===1);Cy.Ain(
NF);Cy.AlG(NF);}else{var NF=A._GetAutoObject(C.Helper).AMK(this)||Cy.IsFever;Cy.
Ain(NF);Cy.AlG(NF);}Cy.Cs(Qp);}}}return G8;},GG:function(){C.Row.GG.call(this);this.
OnSetTimestamp(A._GetAutoObject(C.Helper).DR());this.OnSetId(-1);},G1:function(){
C.Row.G1.call(this);this.OnSetTimestamp(0);this.OnSetId(0);this.OnSetAnimalId(0);
this.OnSetFeed(0);this.OnSetAppearance(0);this.OnSetRespiratory(0);this.OnSetFaeces(
0);this.OnSetTemperature(0);this.OnSetBodyWeight(0);this.OnSetRatingTemperature(
0);},OnSetTemperature:function(E){if(this.Temperature===E)return;this.Temperature=
E;A.aat([this,this.BeD,this.OnSetTemperature],0);},OnSetId:function(E){if(this.Id===
E)return;this.Id=E;A.aat([this,this.P1,this.OnSetId],0);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;A.aat([this,this.BdR,this.OnSetAnimalId
],0);},OnSetFeed:function(E){if(this.Feed===E)return;this.Feed=E;A.aat([this,this.
Bd9,this.OnSetFeed],0);},OnSetAppearance:function(E){if(this.Appearance===E)return;
this.Appearance=E;A.aat([this,this.BdS,this.OnSetAppearance],0);},OnSetRespiratory:
function(E){if(this.Respiratory===E)return;this.Respiratory=E;A.aat([this,this.Bev
,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.Faeces===E)return;this.
Faeces=E;A.aat([this,this.Bd7,this.OnSetFaeces],0);},OnSetTimestamp:function(E){
if(this.Timestamp===E)return;this.Timestamp=E;A.aat([this,this.A22,this.OnSetTimestamp
],0);},BhU:function(MH,A2){switch(MH){case 2:this.OnSetAppearance(A2);break;case
1:this.OnSetFeed(A2);break;case 4:this.OnSetFaeces(A2);break;case 3:this.OnSetRespiratory(
A2);break;default:;}},BbV:function(MH){switch(MH){case 2:return this.Appearance;
case 1:return this.Feed;case 4:return this.Faeces;case 3:return this.Respiratory;
default:return 0;}},OnSetRatingTemperature:function(E){if(this.RatingTemperature===
E)return;this.RatingTemperature=E;A.aat([this,this.Bet,this.OnSetRatingTemperature
],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===E)return;this.BodyWeight=
E;A.aat([this,this.BdV,this.OnSetBodyWeight],0);},BeD:function(){return this.Temperature;
},P1:function(){return this.Id;},BdR:function(){return this.AnimalId;},Bd9:function(
){return this.Feed;},BdS:function(){return this.Appearance;},Bev:function(){return this.
Respiratory;},Bd7:function(){return this.Faeces;},A22:function(){return this.Timestamp;
},Bet:function(){return this.RatingTemperature;},BdV:function(){return this.BodyWeight;
},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Rating;this.
TableId=1;var KP=this._variants();if(KP){this.K={};KP._Init.call(this,aArg);}},_Done:
function(){if(this.K)this.K._Done.call(this);this.__proto__=C.Row;C.Row._Done.call(
this);},_ReInit:function(){C.Row._ReInit.call(this);if(this.K)this.K._ReInit.call(
this);},_Mark:function(D){C.Row._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.Rating._variants();},K:null,_className:"Device::Rating"};
C.HelperClass={S7:null,AfI:null,APC:null,APD:null,V:null,Ap:null,J2:null,RD:null
,AbQ:null,Ta:null,S$:null,Acd:null,AdC:null,AdB:null,AdA:null,AdD:null,AeI:null,
AC2:0,Init:function(aArg){A.ow([this,this.APb],this);},Air:function(E){this.S7=E;
A.aat([this,this.AoJ,this.Air],0);},ABP:function(E){this.AfI=E;A.aat([this,this.
A2S,this.ABP],0);},Btz:function(H){switch(A._GetAutoObject(C.Device).ScanState){
case 0:break;case 2:{var Aru=A._GetAutoObject(C.Device).O7;if(!Aru)throw new Error(
AQX);switch(Aru.TransponderType){case 1:this.Air(Aru);break;case 2:this.AOK(Aru);
break;case 3:this.ABP(Aru);break;case 4:this.AOL(Aru);break;case 0:break;default:
throw new Error(AQY);}}break;case 4:A._GetAutoObject(C.Device).A_(11,true,A.jm,2000
,null);break;case 3:A._GetAutoObject(C.Device).A_(12,true,A.jm,2000,null);break;
case 1:break;default:throw new Error(AQZ);}},AiC:function(){this.Air(null);this.
AOK(null);this.ABP(null);this.AOL(null);},ABT:function(E){if(this.K&&this.K.ABT)
return this.K.ABT.apply(this,arguments);else return C.HelperClass.A6j.apply(this
,arguments);},A6j:function(E){A.aat([this,this.Tq,this.Tr],0);A._GetAutoObject(C.
Device).SetSystemTime(E);},Tr:function(Ao){this.ABT(Ao);},DR:function(){if(this.
K&&this.K.DR)return this.K.DR.apply(this,arguments);else return C.HelperClass.A6f.
apply(this,arguments);},A6f:function(){var B;return((B=(this.Ap.A8E()|0))<0)?B+0x100000000:
B;},Tq:function(){return this.DR();},Apu:function(){A._GetAutoObject(C.Device).UZ(-
1);this.V.G1();A.vv(this.V,0);},A1G:function(Nx){if(!Nx){A.aa8("%s%U",Ap3,Nx);return false;
}var A5=A._GetAutoObject(C.Device).Aq.AhA(22,Nx);return this.HU(A5);},AkM:function(
Amj,AE$){switch(Amj){case 0:{var AmK=AE$;switch(AmK){case 14:return A.z2(A.abg.AuA
);case 6:return AuW;case 4:return A.z2(A.abg.AnW);case 28:return Qj;case 7:return A.
z2(A.abg.Aug);case 2:return A.z2(A.abg.O);case 0:return A.z2(A.abg.Hu);case 37:return AuX;
case 8:return A.z2(A.abg.Alarm);case 9:return A.z2(A.abg.AJe);case 38:return A.z2(
A.abg.AJF);case 11:return A.z2(A.abg.Fever);case 27:return AQ0;case 10:return A.
z2(A.abg.Bhz);case 12:return A.z2(A.abg.Apj);case 29:return A.z2(A.abg.A1y);case
18:return A.z2(A.abg.Weighing);case 17:return AQ1;case 5:return A.z2(A.abg.Temperature
);case 3:return A.z2(A.abg.BcZ);case 26:return A.z2(A.abg.Z1);case 35:return A.z2(
A.abg.Z1)+AQ2;case 36:return AQ3;case 15:return ADy;case 24:return ADz;case 20:return AdK;
case 30:return Al2;case 21:return AQ4;case 19:return ADA;case 22:return A.z2(A.abg.
Transponder);case 1:return A.z2(A.abg.Gh);case 34:return A.z2(A.abg.Vg);case 13:
return Ai0;case 31:return ADB;default:{A.aa8("%s",ADC+AmK.toFixed());return ADD+
AmK.toFixed();}}}case 1:{var AmK=AE$;switch(AmK){case 1:return A.z2(A.abg.Animal
);case 3:return A.z2(A.abg.ACn);case 8:return A.z2(A.abg.AfZ);case 5:return A.z2(
A.abg.ACp);case 2:return A.z2(A.abg.Feed);case 4:return A.z2(A.abg.ACq);case 7:return A.
z2(A.abg.Temperature);case 6:return A.z2(A.abg.Bp);default:{A.aa8("%s",AQ5+AmK.toFixed(
));return ADD+AmK.toFixed();}}}default:A.aa8("%s",(AQ6+Amj.toFixed())+AQ7);}return A.
jm;},A0W:function(Amj,AK){var result=A.jm;if(!!AK){result=this.AkM(Amj,AK.EF);result=((
result+JW)+A._GetAutoObject(C.Converter).A0I(AK.Operator))+JW;if(!!(C.Int32FilterCriterion.
isPrototypeOf(AK)?AK:null))result=result+(C.Int32FilterCriterion.isPrototypeOf(AK
)?AK:null).AY.toFixed();else if(!!(C.UInt32FilterCriterion.isPrototypeOf(AK)?AK:
null))result=result+(C.UInt32FilterCriterion.isPrototypeOf(AK)?AK:null).AY.toFixed(
);else if(!!(C.StringFilterCriterion.isPrototypeOf(AK)?AK:null))result=result+(C.
StringFilterCriterion.isPrototypeOf(AK)?AK:null).AY;else if(!!(C.BoolFilterCriterion.
isPrototypeOf(AK)?AK:null)){if((C.BoolFilterCriterion.isPrototypeOf(AK)?AK:null).
AY)result=this.AkM(Amj,AK.EF);else result=A.jm;}else if(!!(C.GenderFilterCriterion.
isPrototypeOf(AK)?AK:null)){var Br7=A._NewObject(C.GenderToString,0);result=result+
Br7.KN((C.GenderFilterCriterion.isPrototypeOf(AK)?AK:null).AY);}else if(!!(C.AnimalTypeFilterCriterion.
isPrototypeOf(AK)?AK:null)){var Bq3=A._NewObject(C.AnimalTypeToString,0);result=
result+Bq3.KN((C.AnimalTypeFilterCriterion.isPrototypeOf(AK)?AK:null).AY);}else if(
!!(C.AssessmentFilterCriterion.isPrototypeOf(AK)?AK:null)){var Bq5=A._NewObject(
C.AssesmentToString,0);result=result+Bq5.KN((C.AssessmentFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(AK)?AK:null))
result=result+(C.UInt64FilterCriterion.isPrototypeOf(AK)?AK:null).AY.toFixed();else
if(!!(C.WhereAboutsFilterCriterion.isPrototypeOf(AK)?AK:null)){var Bu9=A._NewObject(
C.WhereAboutsToString,0);result=result+Bu9.KN((C.WhereAboutsFilterCriterion.isPrototypeOf(
AK)?AK:null).AY);}else A.aa8("%s",AdL);}return result;},Nk:function(aString,A7t,
Bqf){var result=A.jm;var A_Z=false;var index=0;var Bqh=A7t.length;while(!A_Z){var
AX4=aString.indexOf(A7t,index);if(AX4!==-1){result=(result+A.aaY(aString,index,AX4-
index))+Bqf;index=AX4+Bqh;}else{var A7x=aString.length;if(index<A7x)result=result+
A.aa4(aString,A7x-index);A_Z=true;}}return result;},AOK:function(E){this.APC=E;A.
aat([this,this.Bew,this.AOK],0);},AOL:function(E){this.APD=E;A.aat([this,this.Bex
,this.AOL],0);},A84:function(){return((A._GetAutoObject(C.Device).ScanState===2)&&
!!A._GetAutoObject(C.Device).O7)&&(A._GetAutoObject(C.Device).O7.TransponderType===
1);},Ad$:function(H){if(!this.V.AkW()&&!!this.V.Id)this.BcY(this.V.Id);},Asm:function(
D7){return A._GetAutoObject(C.Helper).Ta.Get(D7);},A0T:function(D7){return A._GetAutoObject(
C.Helper).S$.Get(D7);},A00:function(){var P=0;var min=32767;while(P<A._GetAutoObject(
C.Helper).Ta.L0){if(A._GetAutoObject(C.Helper).Ta.Get(P)<min)min=A._GetAutoObject(
C.Helper).Ta.Get(P);P=P+1;}return min;},APb:function(H){A.y_([this,this.Ad$],A._GetAutoObject(
C.Device).Aq,0);},AMK:function(DG){if(!DG)return false;var Bcx=(((this.AwD(DG.Faeces
)||this.AwD(DG.Feed))||this.AwD(DG.Appearance))||this.AwD(DG.Respiratory))||this.
AwD(DG.RatingTemperature);return Bcx||this.A1t(DG);},AwD:function(A6_){return(A6_===
2)||(A6_===1);},A1t:function(DG){return!!DG&&(DG.Temperature>A._GetAutoObject(C.
Helper).Asm(A._GetAutoObject(C.Helper).V.AnimalType));},HU:function(Ol){var AW$=
false;if(Ol>=0){if(Ol!==this.V.Cu)A._GetAutoObject(C.Device).UZ(Ol);AW$=this.V.Fq(
Ol,A._GetAutoObject(C.Device).Aq);if(AW$)A.vv(this.V,0);}else{A._GetAutoObject(C.
Device).UZ(-1);this.V.G1();A.vv(this.V,0);}return AW$;},AfS:function(Af8){var B;
return(((B=(this.Ap.A8E()|0))<0)?B+0x100000000:B)-this.AyV(Af8);},ApJ:function(){
var B;A.ow([B=this.J2,B.Aur],this);},BuD:function(H){A._GetAutoObject(C.Device).
A_(16,false,ADE,0,null);A._GetAutoObject(C.Device).A_(5,true,A.jm,0,null);},Bg4:
function(H){var Ar=(C.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===
5))this.ApJ();},BgQ:function(E){if(this.AC2===E)return;this.AC2=E;A._GetAutoObject(
C.Device).A_(16,true,this.AC2.toFixed(),0,[this,this.Bg4]);},L7:function(BpR,Bqx
){var DN;var A$u=A._NewObject(A.Core.AlN,0);var FY=A._NewObject(A.Core.Bp,0);var
Ks=A._NewObject(A.Core.Bp,0);FY.Initialize(BpR);Ks.Initialize(Bqx);DN=Ks.Bba(FY);
A$u.Initialize2(0,DN.AzQ,DN.AAz,DN.ACC);if(FY.J(A$u).GD===FY.GD)return DN.Ky;else
return DN.Ky+1;},BuF:function(H){A._GetAutoObject(C.Device).UpdateMeasureState(3
);if((A._GetAutoObject(C.Device).JT>=A._GetAutoObject(C.Device).X_)&&(A._GetAutoObject(
C.Device).JT<=A._GetAutoObject(C.Helper).Asm(A._GetAutoObject(C.Helper).V.AnimalType
))){var Bq2=A._GetAutoObject(C.Helper).V.Id;var Bub=A._GetAutoObject(C.Device).Aq.
LM(0,Bq2);A._GetAutoObject(C.Device).Aq.MC(Bub,9,false);A._GetAutoObject(C.Device
).Aq.Bo(A._GetAutoObject(C.Device).Aq.Filter);}},AG4:function(H){var Baf=A._GetAutoObject(
C.Helper).Asm(A._GetAutoObject(C.Helper).V.AnimalType);var A$$=A._GetAutoObject(
C.Helper).A0T(A._GetAutoObject(C.Helper).V.AnimalType);var Aro=A.aaC(Baf-100,A$$+
100);this.A8k(Aro);},AyV:function(Af8){return Af8*86400;},AlO:function(JZ){var B;
if(!!JZ&&(JZ<(((B=Math.trunc(Math.pow(10,A._GetAutoObject(C.Device).Fb)))<0)?B+0x10000000000000000:
B)))return-1;return A._GetAutoObject(C.Helper).Ue(JZ,A._GetAutoObject(C.Device).
Fb&0xFF,A._GetAutoObject(C.Device).Fp&0xFF)|0;},ACo:function(DG){if(!DG)return false;
return((!!DG.Faeces||!!DG.Feed)||!!DG.Appearance)||!!DG.Respiratory;},AiV:function(
AVq,A7z,AFa,D7){var B;var Ani;if((AVq<650000)&&(A7z<this.DR())){var A7V=this.AeI.
Aso(D7);var A7U=0;if(A7V>=0)A7U=this.AdA.Get(A7V);Ani=AVq+(this.L7(A7z,this.DR()
)*A7U);if(AFa>0){var AWl=this.Axn(AFa);Ani=(Math.trunc(((((B=Ani)<0)?B+0x10000000000000000:
B)+Math.trunc(AWl/2))/AWl)*AWl)|0;}if(Ani>650000)Ani=650000;}else Ani=AVq;return Ani;
},Azv:function(DG){var AnG=A._GetAutoObject(C.Converter).AbR(DG.Faeces);if(AnG<A.
_GetAutoObject(C.Converter).AbR(DG.Feed))AnG=A._GetAutoObject(C.Converter).AbR(DG.
Feed);if(AnG<A._GetAutoObject(C.Converter).AbR(DG.Appearance))AnG=A._GetAutoObject(
C.Converter).AbR(DG.Appearance);if(AnG<A._GetAutoObject(C.Converter).AbR(DG.Respiratory
))AnG=A._GetAutoObject(C.Converter).AbR(DG.Respiratory);return A._GetAutoObject(
C.Converter).A5l(AnG);},Aue:function(DG,MG){if(!!DG){DG.OnSetFaeces(MG);DG.OnSetFeed(
MG);DG.OnSetAppearance(MG);DG.OnSetRespiratory(MG);}},BbT:function(AF,AFf,Aa2,VE
,AdR){if(!AF)throw new Error(Ap4);var Bb=A._NewObject(C.Filter,0);var Am8=AF.Filter;
var Nz=A._NewObject(C.Int32FilterCriterion,0);Nz.Operator=0;Nz.EF=1;Nz.AY=Aa2;Bb.
CQ(Nz);if(VE>0){var NO=A._NewObject(C.UInt32FilterCriterion,0);NO.Operator=2;NO.
EF=6;NO.AY=VE;Bb.CQ(NO);}if(AdR>0){var NE=A._NewObject(C.UInt32FilterCriterion,0
);NE.Operator=3;NE.EF=6;NE.AY=AdR;Bb.CQ(NE);}AF.Bo(Bb);var Lp=A._NewObject(C.Int32ArrayWrapper
,0);Lp.XJ(6);var P;for(P=0;P<Lp.L0;P=P+1)Lp.Set(P,0);var TA;for(P=0;P<AF.Cf();P=
P+1){TA=AF.ID(P,AFf);Lp.Set(TA,Lp.Get(TA)+1);}AF.Bo(Am8);return Lp;},X0:function(
Af8){var B;var FY=A._NewObject(A.Core.Bp,0);var A$t=A._NewObject(A.Core.AlN,0);FY.
Initialize(A._GetAutoObject(C.Converter).AfU());A$t.Initialize2(Af8,0,0,0);FY=FY.
Bil(A$t);return((B=(FY.JN()|0))<0)?B+0x100000000:B;},A0U:function(AF,Aa2,AdR,VE){
if(!AF)throw new Error(Ap4);var Bb=A._NewObject(C.Filter,0);var Am8=AF.Filter;var
Nz=A._NewObject(C.Int32FilterCriterion,0);Nz.Operator=0;Nz.EF=1;Nz.AY=Aa2;Bb.CQ(
Nz);if(VE>0){var NO=A._NewObject(C.UInt32FilterCriterion,0);NO.Operator=2;NO.EF=
6;NO.AY=VE;Bb.CQ(NO);}if(AdR>0){var NE=A._NewObject(C.UInt32FilterCriterion,0);NE.
Operator=3;NE.EF=6;NE.AY=AdR;Bb.CQ(NE);}AF.Bo(Bb);var Lp=A._NewObject(C.Int32ArrayWrapper
,0);Lp.XJ(6);var P;for(P=0;P<Lp.L0;P=P+1)Lp.Set(P,0);var Amy=A._NewObject(C.Rating
,0);var AWd;for(P=0;P<AF.Cf();P=P+1){Amy.Fq(P,AF);if(A._GetAutoObject(C.Helper).
ACo(Amy)){AWd=A._GetAutoObject(C.Helper).Azv(Amy);Lp.Set(AWd,Lp.Get(AWd)+1);}}AF.
Bo(Am8);return Lp;},AWL:function(AF,Aa2,Brz){if(!AF)throw new Error(Ap4);var Bb=
A._NewObject(C.Filter,0);var Am8=AF.Filter;var Nz=A._NewObject(C.Int32FilterCriterion
,0);Nz.Operator=0;Nz.EF=1;Nz.AY=Aa2;Bb.CQ(Nz);var VE=A._GetAutoObject(C.Converter
).AfU()+A._GetAutoObject(C.Helper).AyV(Brz);var AdR=VE+A._GetAutoObject(C.Helper
).AyV(1);var NO=A._NewObject(C.UInt32FilterCriterion,0);NO.Operator=2;NO.EF=6;NO.
AY=VE;Bb.CQ(NO);var NE=A._NewObject(C.UInt32FilterCriterion,0);NE.Operator=3;NE.
EF=6;NE.AY=AdR;Bb.CQ(NE);AF.Bo(Bb);var Amy=A._NewObject(C.Rating,0);var TA;var K1=
0;var P;for(P=0;P<AF.Cf();P=P+1){Amy.Fq(P,AF);if(A._GetAutoObject(C.Helper).ACo(
Amy)){TA=A._GetAutoObject(C.Helper).Azv(Amy);if(A._GetAutoObject(C.Converter).AbR(
TA)>A._GetAutoObject(C.Converter).AbR(K1))K1=TA;}}AF.Bo(Am8);return K1;},AkV:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A1w:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BbU:function(AF,AFf,Aa2,VE
,AdR){if(!AF)throw new Error(Ap4);var Bb=A._NewObject(C.Filter,0);var Am8=AF.Filter;
var Nz=A._NewObject(C.Int32FilterCriterion,0);Nz.Operator=0;Nz.EF=1;Nz.AY=Aa2;Bb.
CQ(Nz);if(VE>0){var NO=A._NewObject(C.UInt32FilterCriterion,0);NO.Operator=2;NO.
EF=6;NO.AY=VE;Bb.CQ(NO);}if(AdR>0){var NE=A._NewObject(C.UInt32FilterCriterion,0
);NE.Operator=3;NE.EF=6;NE.AY=AdR;Bb.CQ(NE);}AF.Bo(Bb);var Lp=A._NewObject(C.Int32ArrayWrapper
,0);Lp.XJ(6);var P;for(P=0;P<Lp.L0;P=P+1)Lp.Set(P,0);if(AF.Cf()>0){var TA=AF.ID(
0,AFf);var Anm=AF.Ht(P,6);var Ad=A._NewObject(A.Core.Bp,0);Ad.Initialize(Anm);var
AnF=TA;var AF$=A._NewObject(A.Core.Bp,0);AF$.Initialize(Ad.JN());for(P=1;P<AF.Cf(
);P=P+1){TA=AF.ID(P,AFf);Anm=AF.Ht(P,6);Ad.Initialize(Anm);if((Ad.Z4()!==AF$.Z4(
))||(Ad.Year!==AF$.Year)){Lp.Set(AnF,Lp.Get(AnF)+1);AF$.Initialize(Ad.JN());AnF=
TA;}else if(!!TA&&(TA<AnF))AnF=TA;}Lp.Set(AnF,Lp.Get(AnF)+1);}AF.Bo(Am8);return Lp;
},AnL:function(Lm){var B;var FY=A._NewObject(A.Core.Bp,0);FY.Initialize(Lm);FY.All(
0);FY.Alp(0);FY.Als(0);return((B=(FY.JN()|0))<0)?B+0x100000000:B;},AJU:function(
Lm){var B;Lm=Lm+86400;var FY=A._NewObject(A.Core.Bp,0);FY.Initialize(Lm);FY.All(
0);FY.Alp(0);FY.Als(0);return((B=(FY.JN()|0))<0)?B+0x100000000:B;},BbW:function(
BuC,BrK,Aj_,Aju){var A8f=A._GetAutoObject(C.Helper).L7(BuC,BrK);if(A8f>0)return((
Aju-Aj_)/A8f)|0;return 0;},BiS:function(BpS,Bqy){var FY=A._NewObject(A.Core.Bp,0
);var Ks=A._NewObject(A.Core.Bp,0);FY.Initialize(BpS);Ks.Initialize(Bqy);return(
FY.Year===Ks.Year)&&(FY.Z4()===Ks.Z4());},A0Y:function(){var Bb=A._GetAutoObject(
C.Helper).LP();var A9f=A._NewObject(C.UInt32FilterCriterion,0);var BqH=A._GetAutoObject(
C.Helper).X0(A._GetAutoObject(C.Device).An8)-1;A9f.Initialize(28,2,BqH,true);Bb.
CQ(A9f);var Tv=A._NewObject(C.AnimalTypeFilterCriterion,0);Tv.Initialize(14,0,1,
true);Bb.CQ(Tv);if(A._GetAutoObject(C.Device).AkJ){var AwS=A._NewObject(C.UInt32FilterCriterion
,0);var AW7=A._GetAutoObject(C.Helper).DR()-21600;AwS.Initialize(30,3,AW7,true);
Bb.CQ(AwS);}return Bb;},BhD:function(){var IR=A._GetAutoObject(C.Device).Aq.NS();
if(IR<=0)A.aa8("%s",AaO);else{A._GetAutoObject(C.Device).Aq.G1();A._GetAutoObject(
C.Device).Aq.NU(IR);}IR=A._GetAutoObject(C.Device).AeA.NS();if(IR<=0)A.aa8("%s",
AaO);else{A._GetAutoObject(C.Device).AeA.G1();A._GetAutoObject(C.Device).AeA.NU(
IR);}IR=A._GetAutoObject(C.Device).Bt.NS();if(IR<=0)A.aa8("%s",AaO);else{A._GetAutoObject(
C.Device).Bt.G1();A._GetAutoObject(C.Device).Bt.NU(IR);}IR=A._GetAutoObject(C.Device
).OF.NS();if(IR<=0)A.aa8("%s",AaO);else{A._GetAutoObject(C.Device).OF.G1();A._GetAutoObject(
C.Device).OF.NU(IR);}},BcY:function(Aa2){var A5=A._GetAutoObject(C.Device).Aq.LM(
0,Aa2);return this.HU(A5);},AMP:function(Nx){var Agr=A._GetAutoObject(C.Device).
Aq.Acb(22,Nx);return Agr;},AKz:function(){var Bb=A._GetAutoObject(C.Helper).LP();
var Ag2=A._NewObject(C.UInt64FilterCriterion,0);Ag2.Initialize(22,0,0,true);Bb.CQ(
Ag2);return Bb;},AKt:function(Amr,BrH,RX){var AvR=-1;switch(Amr){case 2:AvR=30;break;
case 3:AvR=31;break;case 10:AvR=19;break;default:A.aa8("%s%e",AiZ,Amr);}if(AvR<0
)return null;var Abc=A._NewObject(C.UInt32FilterCriterion,0);Abc.Initialize(AvR,
3,A._GetAutoObject(C.Helper).DR()-BrH,RX);return Abc;},BhC:function(aFilter){var
AK=aFilter.DJ(30,3);if(!!AK)aFilter.P7(AK);AK=aFilter.DJ(31,3);if(!!AK)aFilter.P7(
AK);AK=aFilter.DJ(19,3);if(!!AK)aFilter.P7(AK);},A77:function(AdZ,AvC,AF){if(AF.
Ms())return 5;if(AdZ.VisualId<=0)switch(AvC){case 0:if(!AdZ.NaisId)return 1;break;
case 1:if(!AdZ.TransponderId)return 1;break;case 3:case 2:case 5:case 4:return 1;
default:throw new Error(ADF+AvC.toFixed());}if((!AdZ.NaisId&&!AdZ.TransponderId)&&
A._GetAutoObject(C.Device).Aq.Ahy(1,AdZ.VisualId))return 2;if(!!AdZ.NaisId&&A._GetAutoObject(
C.Helper).AMN(AdZ.NaisId))return 3;if(!!AdZ.TransponderId&&A._GetAutoObject(C.Helper
).AMP(AdZ.TransponderId))return 4;return 0;},Aye:function(GL){GL.DS(A._GetAutoObject(
C.Device).AnimalType);GL.O2(A._GetAutoObject(C.Device).Breed);GL.AcV(A._GetAutoObject(
C.Helper).DR()-A._GetAutoObject(C.Helper).AyV(A._GetAutoObject(C.Device).Akk));GL.
J9(A._GetAutoObject(C.Device).Gender);},AZe:function(VD,GL){var Mb=0;switch(VD){
case 0:Mb=A._GetAutoObject(C.Helper).AlO(GL.NaisId);break;case 1:Mb=A._GetAutoObject(
C.Helper).AlO(GL.TransponderId);break;case 3:Mb=A._GetAutoObject(C.Device).Asw;break;
case 2:Mb=A._GetAutoObject(C.Device).Asx;break;case 4:case 5:Mb=A._GetAutoObject(
C.Device).Aof;break;default:throw new Error(ADG+VD.toFixed());}return Mb;},A5t:function(
Aja,Ln,BpE,A7c,Bqa){var B;var Pr=null;var VO=null;switch(Aja){case 0:{Pr=[B=A._GetAutoObject(
C.Device),B.AN1,B.AUQ];VO=[B=A._GetAutoObject(C.Device),B.Ata,B.Avw];}break;case
1:switch(Ln){case 1:{Pr=[B=A._GetAutoObject(C.Device),B.A2M,B.A6J];VO=[B=A._GetAutoObject(
C.Device),B.As_,B.Avu];}break;case 0:{Pr=[B=A._GetAutoObject(C.Device),B.A2N,B.A6K
];VO=[B=A._GetAutoObject(C.Device),B.As$,B.Avv];}break;case 2:{Pr=[B=A._GetAutoObject(
C.Device),B.AN1,B.AUQ];VO=[B=A._GetAutoObject(C.Device),B.Ata,B.Avw];}break;default:
throw new Error(AuY+Ln.toFixed());}break;default:throw new Error(ADH+Aja.toFixed(
));}if(!!Pr&&!!VO){Pr[2].call(Pr[0],BpE);if((VO[1].call(VO[0])>0)&&(A7c<Bqa))Pr[
2].call(Pr[0],Pr[1].call(Pr[0])+VO[1].call(VO[0]));else if((VO[1].call(VO[0])<0)&&(
A7c>0))Pr[2].call(Pr[0],Pr[1].call(Pr[0])+VO[1].call(VO[0]));return Pr[1].call(Pr[
0]);}return 0;},AQt:function(GL,Aja,BpL){if(!GL||(BpL===true))return;switch(Aja){
case 0:GL.O3(A._GetAutoObject(C.Device).As0);break;case 1:switch(GL.Gender){case
0:GL.O3(A._GetAutoObject(C.Device).AAC);break;case 1:GL.O3(A._GetAutoObject(C.Device
).AAB);break;case 2:GL.O3(A._GetAutoObject(C.Device).As0);break;default:throw new
Error(AuY+GL.Gender.toFixed());}break;default:throw new Error(ADH+Aja.toFixed());
}},Bcy:function(VD,GL){var result=false;switch(VD){case 0:result=!!GL.NaisId;break;
case 1:result=!!GL.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(ADG+VD.toFixed());}return result;},AWN:function(GL
,A69,AvC,Aqy,AdV){switch(A69){case 2:if(Aqy<=0)A._GetAutoObject(C.Device).A_(21,
true,GL.VisualId.toFixed(),0,AdV);else A._GetAutoObject(C.Device).A_(48,true,(GL.
VisualId.toFixed()+AuZ)+Aqy.toFixed(),0,AdV);break;case 3:if(Aqy<=0)A._GetAutoObject(
C.Device).A_(21,true,A._GetAutoObject(C.Converter).Vc(GL.NaisId),0,AdV);else A._GetAutoObject(
C.Device).A_(48,true,(A._GetAutoObject(C.Converter).Vc(GL.NaisId)+AuZ)+Aqy.toFixed(
),0,AdV);break;case 4:if(Aqy<=0)A._GetAutoObject(C.Device).A_(25,true,A._GetAutoObject(
C.Converter).Vc(GL.TransponderId),0,AdV);else A._GetAutoObject(C.Device).A_(47,true
,(A._GetAutoObject(C.Converter).Vc(GL.TransponderId)+AuZ)+Aqy.toFixed(),0,AdV);break;
case 1:switch(AvC){case 1:A._GetAutoObject(C.Device).A_(42,true,A.jm,0,AdV);break;
case 0:A._GetAutoObject(C.Device).A_(43,true,A.jm,0,AdV);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).A_(22,true,A.jm,0,AdV);break;default:throw new
Error(ADF+AvC.toFixed());}break;case 5:A._GetAutoObject(C.Device).A_(41,true,A._GetAutoObject(
C.Device).Aq.If().toFixed(),0,AdV);break;case 0:break;default:throw new Error(AQ8+
A69.toFixed());}},A8I:function(A7j,Ln){var B;var AwV=null;switch(A7j){case 0:AwV=[
B=A._GetAutoObject(C.Device),B.Ata,B.Avw];break;case 1:switch(Ln){case 1:AwV=[B=
A._GetAutoObject(C.Device),B.As_,B.Avu];break;case 0:AwV=[B=A._GetAutoObject(C.Device
),B.As$,B.Avv];break;case 2:AwV=[B=A._GetAutoObject(C.Device),B.Ata,B.Avw];break;
default:throw new Error(AuY+Ln.toFixed());}break;default:throw new Error(AQ9+A7j.
toFixed());}return AwV;},A08:function(Pi,Bqn){var YV=A._NewObject(A.Core.Bp,0);YV.
Initialize(Pi);var Ax6=YV.Year;var A5=A._GetAutoObject(C.Device).OF.LM(0,Ax6);var
Tz=A._NewObject(C.CalfDeregistrations,0);if(A5<0){if(A._GetAutoObject(C.Device).
OF.Ms())A._GetAutoObject(C.Device).A_(51,true,A._GetAutoObject(C.Device).OF.If().
toFixed(),0,null);else{Tz.GG();Tz.Ait(Ax6);}}else Tz.Fq(A5,A._GetAutoObject(C.Device
).OF);Tz.Atr(Tz.Deregistrations+1);if(Bqn)Tz.Atq(Tz.Deaths+1);Tz.Cs(A._GetAutoObject(
C.Device).OF);},AH8:function(K1,AjE,Ajv){var AGI=0;if((AjE&&(Ajv===1))||(K1===1)
)AGI=1;else if((AjE&&(Ajv===2))||(K1===2))AGI=2;else if(!!K1&&(K1!==5))AGI=K1;return AGI;
},A8k:function(BqG){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.RD.
Ci=A._GetAutoObject(C.Device).X_;this.RD.BX=BqG;this.RD.ACX(this);}},Azl:function(
){var Bb=this.AKs();var A87=A._NewObject(C.BoolFilterCriterion,0);A87.Initialize(
38,0,true,true);Bb.CQ(A87);return Bb;},A0S:function(Jt){var Bb=A._GetAutoObject(
C.Helper).LP();if(A._GetAutoObject(C.Device).Aki){var AWP=A._GetAutoObject(C.Helper
).AKt(Jt,21600,true);Bb.CQ(AWP);}return Bb;},A02:function(){var Bb=A._GetAutoObject(
C.Helper).LP();var A9u=A._NewObject(C.UInt64FilterCriterion,0);A9u.Initialize(26
,0,0,true);Bb.CQ(A9u);return Bb;},A05:function(){var B;var Bb=A._GetAutoObject(C.
Helper).LP();var AwZ=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Bb.DJ(34,3))?
B:null);if(!!AwZ)Bb.P7(AwZ);var A_G=A._NewObject(C.BoolFilterCriterion,0);A_G.Initialize(
37,0,true,true);Bb.CQ(A_G);return Bb;},Ue:function(A2,Bqg,AVr){var B;A2=Math.trunc(
A2/this.Axn(Bqg));A2%=this.Axn(AVr);return A2;},Axn:function(A7k){switch(A7k){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AQ_+A7k.toFixed());}},LP:
function(){var Bb=A._NewObject(C.Filter,0);var A_3=A._NewObject(C.BoolFilterCriterion
,0);A_3.Initialize(10,0,true,true);Bb.CQ(A_3);var AwZ=A._NewObject(C.WhereAboutsFilterCriterion
,0);AwZ.Initialize(34,3,6,true);Bb.CQ(AwZ);return Bb;},Aoq:function(aFilter){return!
this.Azo(aFilter);},Azo:function(aFilter){var I9=0;var As=aFilter.AKu();while(!!
As){if(As.ZM===false)I9++;As=aFilter.AKy(As);}return I9;},AKs:function(){var Bb=
this.LP();var Tv=A._NewObject(C.AnimalTypeFilterCriterion,0);Tv.Initialize(14,0,
1,true);Bb.CQ(Tv);return Bb;},Azs:function(){var B;var AYu;var NB=this.Bca();AYu=(((
B=A._GetAutoObject(C.Converter).ArT(NB))<0)?B+0x10000000000000000:B)*this.Axn(12
);if((NB===10)&&(A._GetAutoObject(C.Device).Ac_>0)){var Br8=A._GetAutoObject(C.Helper
).Ue(A._GetAutoObject(C.Device).Ac_,10,2)*this.Axn(8);AYu+=Br8;}return AYu;},Bca:
function(){var NB=0;if(A._GetAutoObject(C.Device).Ac_>0)NB=A._GetAutoObject(C.Converter
).AfW(A._GetAutoObject(C.Device).Ac_);if(!NB)NB=A._GetAutoObject(C.Converter).BcQ(
A._GetAutoObject(C.Device).Language);return NB;},AMN:function(AdU){var Agr=A._GetAutoObject(
C.Device).Aq.Acb(26,AdU);return Agr;},AhU:function(Amp){switch(Amp){case 0:case 1:
case 2:case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AQ$+Amp.toFixed());}},A$_:function(VD,GL){var Mb=0;switch(
VD){case 1:Mb=A._GetAutoObject(C.Helper).AlO(GL.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)Mb=A._GetAutoObject(C.Device).
Aof;else switch(GL.Gender){case 0:Mb=A._GetAutoObject(C.Device).Asx;break;case 1:
Mb=A._GetAutoObject(C.Device).Asw;break;case 2:Mb=A._GetAutoObject(C.Device).Aof;
break;default:throw new Error(ARa+GL.Gender.toFixed());}break;default:throw new Error(
ARb+VD.toFixed());}return Mb;},BbI:function(){var B;var AwB=(((((((A.z2(A.abg.AfL
)+A.z2(A.abg.Colon))+Oh)+A._GetAutoObject(C.Device).AfL)+Au0)+A.z2(A.abg.Bhk))+A.
z2(A.abg.Colon))+Oh)+A._GetAutoObject(A.abk.K5).BbG(((B=A._GetAutoObject(C.Device
).PY.Timestamp)<0)?B+0x100000000:B);return AwB;},BbJ:function(){var B;var AwB=((((((((((((((((((((((((((((
ARc+A._GetAutoObject(C.Device).QP.AAs.toFixed())+Nt)+A._GetAutoObject(C.Device).
QP.AAy.toFixed())+Nt)+A._GetAutoObject(C.Device).QP.ACy.toFixed())+Kd)+A._GetAutoObject(
C.Device).QP.AyQ)+Kd)+A._GetAutoObject(A.abk.K5).AhB(((B=A._GetAutoObject(C.Device
).QP.Timestamp)<0)?B+0x100000000:B))+Oh)+ARd)+A._GetAutoObject(C.Device).Rm.AAs.
toFixed())+Nt)+A._GetAutoObject(C.Device).Rm.AAy.toFixed())+Nt)+A._GetAutoObject(
C.Device).Rm.ACy.toFixed())+Kd)+A._GetAutoObject(C.Device).Rm.AyQ)+Kd)+A._GetAutoObject(
A.abk.K5).AhB(((B=A._GetAutoObject(C.Device).Rm.Timestamp)<0)?B+0x100000000:B))+
Oh)+ARe)+A._GetAutoObject(C.Helper).Bcd())+Kd)+A._GetAutoObject(C.Device).GetCommitHash(
))+Kd)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+Kd)+A._GetAutoObject(
A.abk.K5).AhB(A._GetAutoObject(C.Device).GetCommitEpoch());return AwB;},BbH:function(
){var B;var AwB=(((((((((((((((((((((ARf+A._GetAutoObject(C.Device).PY.AM$.toFixed(
))+Nt)+A._GetAutoObject(C.Device).PY.ANa.toFixed())+Nt)+A._GetAutoObject(C.Device
).PY.AM_.toFixed())+Oh)+A.z2(A.abg.A0L))+A.z2(A.abg.Colon))+JW)+A._GetAutoObject(
A.abk.K5).AhB(((B=A._GetAutoObject(C.Device).PY.Timestamp)<0)?B+0x100000000:B))+
Au0)+ARg)+A._GetAutoObject(C.Device).RG.AQn.toFixed())+Nt)+A._GetAutoObject(C.Device
).RG.AQo.toFixed())+Nt)+A._GetAutoObject(C.Device).RG.AQm.toFixed())+Oh)+A.z2(A.
abg.A0L))+A.z2(A.abg.Colon))+JW)+A._GetAutoObject(A.abk.K5).AhB(((B=A._GetAutoObject(
C.Device).RG.Timestamp)<0)?B+0x100000000:B);return AwB;},A03:function(AVr){var B;
var P;var Axr=A.jm;for(P=1;P<=AVr;P=P+1)if(!!A.aaC(0,2))Axr=Axr+String.fromCharCode(
A.aaC(97,104)&0xFFFF);else Axr=Axr+String.fromCharCode(A.aaC(48,57)&0xFFFF);return Axr;
},AhE:function(D7){var AvU=0;if(D7===1)D7=0;var A71=this.AeI.Aso(D7);if(A71>=0)AvU=
this.AdD.Get(A71);return AvU;},Azu:function(D7){var Fl=0;var Ax3=this.AeI.Aso(D7
);if(Ax3>=0)Fl=this.AdC.Get(Ax3);return Fl;},Azt:function(D7){var Fl=0;var Ax3=this.
AeI.Aso(D7);if(Ax3>=0)Fl=this.AdB.Get(Ax3);return Fl;},A0V:function(){var Bb=this.
LP();var Tv=A._NewObject(C.AnimalTypeFilterCriterion,0);Tv.Initialize(14,0,A._GetAutoObject(
C.Device).Ay8,true);Bb.CQ(Tv);return Bb;},AMQ:function(JZ){var BJ=Math.trunc(JZ/
1000000000000)|0;if(!BJ)return 0;else if(BJ>=900)return 1;else if(!A._GetAutoObject(
C.Converter).AJj(BJ))return 2;else return 3;},A07:function(){var Bb=A._GetAutoObject(
C.Helper).AKz();var Ajd=A._GetAutoObject(C.Helper).BbS(3,60);Ajd.ZM=true;Bb.CQ(Ajd
);return Bb;},BbS:function(En,A68){var As=A._NewObject(C.UInt32FilterCriterion,0
);As.EF=4;switch(En){case 2:{As.Operator=3;As.AY=A._GetAutoObject(C.Helper).X0(A68
);}break;case 3:{As.Operator=2;As.AY=A._GetAutoObject(C.Helper).X0(A68-1);}break;
default:A.aa8("%s%e",ARh,En);}return As;},Bcd:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+Nt)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+Nt)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},AoJ:function(
){return this.S7;},A2S:function(){return this.AfI;},Bew:function(){return this.APC;
},Bex:function(){return this.APD;},BeB:function(){return this.AC2;},_Init:function(
aArg){C.AkD._Init.call(this,aArg);C.Animal._Init.call(this.V={I:this},0);A.Core.
Bp._Init.call(this.Ap={I:this},0);A.abm.FE._Init.call(this.J2={I:this},0);A.abm.
FE._Init.call(this.RD={I:this},0);C.AIs._Init.call(this.AbQ={I:this},0);C.AQe._Init.
call(this.Ta={I:this},0);C.AQd._Init.call(this.S$={I:this},0);C.Y$._Init.call(this.
Acd={I:this},0);C.AQN._Init.call(this.AdC={I:this},0);C.AQM._Init.call(this.AdB={
I:this},0);C.AQL._Init.call(this.AdA={I:this},0);C.AQP._Init.call(this.AdD={I:this
},0);C.AIt._Init.call(this.AeI={I:this},0);this.__proto__=C.HelperClass;var B;this.
J2.IG(1);this.J2.FK(3000);this.J2.BX=100;this.RD.Atw(10);this.RD.UU(5);this.RD.IG(
1);this.RD.FK(4000);this.Acd.BX=false;this.Acd.Ci=true;this.Acd.IG(1);this.Acd.FK(
100);this.J2.Rn=[this,this.BuD];this.J2.Q=[this,this.BeB,this.BgQ];this.RD.Rn=[this
,this.BuF];this.RD.Q=[B=A._GetAutoObject(C.Device),B.AAX,B.AEV];this.Acd.Q=[B=A.
_GetAutoObject(C.Device),B.AAY,B.AEW];this.Init(aArg);var KP=this._variants();if(
KP){this.K={};KP._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AkD;this.V._Done();this.Ap._Done();this.J2._Done();this.
RD._Done();this.AbQ._Done();this.Ta._Done();this.S$._Done();this.Acd._Done();this.
AdC._Done();this.AdB._Done();this.AdA._Done();this.AdD._Done();this.AeI._Done();
C.AkD._Done.call(this);},_ReInit:function(){C.AkD._ReInit.call(this);this.V._ReInit(
);this.Ap._ReInit();this.J2._ReInit();this.RD._ReInit();this.AbQ._ReInit();this.
Ta._ReInit();this.S$._ReInit();this.Acd._ReInit();this.AdC._ReInit();this.AdB._ReInit(
);this.AdA._ReInit();this.AdD._ReInit();this.AeI._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AkD._Mark.call(this,D);if((B=this.S7)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AfI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.APC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.APD)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.J2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ta)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AdB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.abt.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_variants:function(
){return this;},_this:null};C.BoolFilterCriterion={AY:false,Ab_:function(){var As=
A._NewObject(C.BoolFilterCriterion,0);As.F$(this);return As;},F$:function(AK){C.
FilterCriterion.F$.call(this,AK);var As=(C.BoolFilterCriterion.isPrototypeOf(AK)?
AK:null);if(!!As)this.AY=As.AY;},Initialize:function(AR,En,A2,RX){this.EF=AR;this.
Operator=En;this.AY=A2;this.ZM=RX;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;},_className:"Device::BoolFilterCriterion"
};C.UInt32FilterCriterion={AY:0,Ab_:function(){var As=A._NewObject(C.UInt32FilterCriterion
,0);As.F$(this);return As;},F$:function(AK){C.FilterCriterion.F$.call(this,AK);var
As=(C.UInt32FilterCriterion.isPrototypeOf(AK)?AK:null);if(!!As)this.AY=As.AY;},Initialize:
function(AR,En,A2,RX){this.EF=AR;this.Operator=En;this.AY=A2;this.ZM=RX;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"};C.OverlayMenu={
None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,WeighingSettings:
5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,AnimalMultiInfoMenu:
10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,LAST:13};C.EnumToString={Cb:
function(A9){throw new Error(Ap5+A9.toFixed());},KN:function(A9){return this.Cb(
A9);},_Init:function(aArg){this.__proto__=C.EnumToString;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToString"};C.ScreenTypeToString={Cb:function(A9){var AF1=A9;var Bs;
switch(AF1){case 3:Bs=A.z2(A.abg.Asv);break;case 33:Bs=A.z2(A.abg.Oz);break;case
34:Bs=A.z2(A.abg.TW);break;case 46:Bs=A.z2(A.abg.AKp);break;default:Bs=this.BiT(
A9);}return Bs;},BiT:function(A9){var AF1=A9;var Bs=A.jm;switch(AF1){case 0:Bs=Au1;
break;case 2:Bs=ADI;break;case 4:Bs=ARi;break;case 39:Bs=ADJ;break;case 38:Bs=ARj;
break;case 72:Bs=ARk;break;case 73:Bs=ARl;break;case 93:Bs=ARm;break;case 94:Bs=
ADK;break;case 74:Bs=ARn;break;case 3:Bs=Au2;break;case 6:Bs=ADL;break;case 16:Bs=
ADM;break;case 22:Bs=ARo;break;case 45:Bs=ADN;break;case 55:Bs=ARp;break;case 17:
Bs=ARq;break;case 23:Bs=Vu;break;case 18:Bs=Vv;break;case 19:Bs=ARr;break;case 37:
Bs=ARs;break;case 87:Bs=ARt;break;case 1:Bs=ARu;break;case 5:Bs=ARv;break;case 7:
Bs=ARw;break;case 92:Bs=ARx;break;case 8:Bs=Af1;break;case 9:Bs=ADO;break;case 40:
Bs=ARy;break;case 41:Bs=ARz;break;case 24:Bs=ADP;break;case 10:Bs=ADQ;break;case
68:Bs=Au3;break;case 21:Bs=RT;break;case 11:Bs=ARA;break;case 28:Bs=ARB;break;case
53:Bs=ARC;break;case 29:Bs=Ap6;break;case 12:Bs=ARD;break;case 13:Bs=ARE;break;case
14:Bs=ARF;break;case 15:Bs=ARG;break;case 78:Bs=ARH;break;case 79:Bs=ARI;break;case
20:Bs=Ap7;break;case 36:Bs=ARJ;break;case 42:Bs=ARK;break;case 43:Bs=ARL;break;case
44:Bs=ARM;break;case 25:Bs=ARN;break;case 75:Bs=ARO;break;case 67:Bs=ARP;break;case
66:Bs=ARQ;break;case 64:Bs=ARR;break;case 65:Bs=ARS;break;case 77:Bs=ADR;break;case
76:Bs=Ap8;break;case 95:Bs=ART;break;case 88:Bs=ARU;break;case 26:Bs=ARV;break;case
27:Bs=Au4;break;case 30:Bs=Ai1;break;case 89:Bs=Af2;break;case 33:Bs=Au5;break;case
34:Bs=Al3;break;case 31:Bs=Af3;break;case 49:Bs=ARW;break;case 54:Bs=Ap9;break;case
63:Bs=ADS;break;case 62:Bs=AdM;break;case 32:Bs=ADT;break;case 35:Bs=Yl;break;case
56:Bs=Ai2;break;case 86:Bs=Al4;break;case 57:Bs=ARX;break;case 46:Bs=ARY;break;case
48:Bs=ARZ;break;case 47:Bs=AR0;break;case 69:Bs=AR1;break;case 71:Bs=Ap_;break;case
70:Bs=ADU;break;case 50:Bs=ADV;break;case 52:Bs=AR2;break;case 51:Bs=AR3;break;case
96:Bs=AR4;break;case 98:Bs=AR5;break;case 97:Bs=AR6;break;case 80:Bs=AR7;break;case
82:Bs=ADW;break;case 81:Bs=AR8;break;case 85:Bs=Au6;break;case 84:Bs=ADX;break;case
83:Bs=ADY;break;case 58:Bs=ADZ;break;case 60:Bs=AD0;break;case 59:Bs=AD1;break;case
61:Bs=AD2;break;case 90:Bs=AR9;break;case 91:Bs=AR_;break;default:throw new Error(
AR$+AF1.toFixed());}return Bs;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.ScreenTypeToString;},_className:"Device::ScreenTypeToString"
};C.OverlayMenuToString={Cb:function(A9){var A_C=A9;var TK=A.jm;switch(A_C){case
0:TK=ASa;break;case 1:TK=Au2;break;case 8:TK=ASb;break;case 2:TK=ASc;break;case 3:
TK=ASd;break;case 4:TK=Au7;break;case 5:TK=AD3;break;case 6:TK=ASe;break;case 7:
TK=AD4;break;case 11:TK=Ai3;break;case 12:TK=Af4;break;case 9:TK=ASf;break;case 10:
TK=Ai4;break;default:throw new Error(ASg+A_C.toFixed());}return TK;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.OverlayMenuToString;
},_className:"Device::OverlayMenuToString"};C.ScanStateToString={Cb:function(A9){
var A_$=A9;var Bl=A.jm;switch(A_$){case 4:Bl=Au8;break;case 0:Bl=Ai5;break;case 2:
Bl=AdN;break;case 3:Bl=ASh;break;case 1:Bl=AD5;break;default:throw new Error(Ap$+
A_$.toFixed());}return Bl;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.ScanStateToString;},_className:"Device::ScanStateToString"
};C.MeasureStateToString={Cb:function(A9){var A9o=A9;var Bl=A.jm;switch(A9o){case
4:Bl=Au8;break;case 0:Bl=Ai5;break;case 2:Bl=ASi;break;case 1:Bl=AD5;break;case 3:
Bl=Nu;break;default:throw new Error(ASj+A9o.toFixed());}return Bl;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MeasureStateToString;
},_className:"Device::MeasureStateToString"};C.TemperatureUnit={Celsius:0,Fahrenheit:
1,LAST:2};C.TemperatureUnitToString={Cb:function(A9){var A$y=A9;var Anz=A.jm;switch(
A$y){case 0:Anz=A.z2(A.abg.Bi_);break;case 1:Anz=A.z2(A.abg.Bi$);break;default:throw new
Error(ASk+A$y.toFixed());}return Anz;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TemperatureUnitToString;},_className:"Device::TemperatureUnitToString"
};C.AnimalType={DairyCalf:0,DairyCow:1,SheepLamb:2,LAST:3};C.AnimalTypeToString={
Cb:function(A9){var A$o=A9;var type=A.jm;switch(A$o){case 0:type=A.z2(A.abg.BaF);
break;case 1:type=A.z2(A.abg.BaU);break;case 2:type=A.z2(A.abg.BcN);break;default:
throw new Error(ASl+A$o.toFixed());}return type;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"
};C.Language={Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:
6,Turkish:7,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:
14,Norwegian:15,Ukrainian:16,LAST:17};C.LanguageToString={Cb:function(A9){var AwN=
A9;var Op=A.jm;switch(AwN){case 0:Op=ASm;break;case 10:Op=AD6;break;case 1:Op=AD7;
break;case 12:Op=ASn;break;case 5:Op=ASo;break;case 3:Op=ASp;break;case 8:Op=ASq;
break;case 13:Op=ASr;break;case 4:Op=ASs;break;case 9:Op=ASt;break;case 2:Op=ASu;
break;case 7:Op=AD8;break;case 6:Op=ASv;break;case 11:Op=AD9;break;case 14:Op=AD_;
break;case 15:Op=Au9;break;case 16:Op=ASw;break;default:throw new Error(AD$+AwN.
toFixed());}return Op;},KN:function(A9){var AwN=A9;var C8=A.jm;switch(AwN){case 0:
C8=RS;break;case 10:C8=Vr;break;case 1:C8=Qh;break;case 12:C8=Vm;break;case 5:C8=
To;break;case 3:C8=Vn;break;case 8:C8=Vo;break;case 13:C8=Vj;break;case 4:C8=Tp;
break;case 9:C8=Qi;break;case 2:C8=Yi;break;case 7:C8=AdH;break;case 6:C8=Vk;break;
case 11:C8=RQ;break;case 14:C8=Vi;break;case 15:C8=RR;break;case 16:C8=AaM;break;
default:throw new Error(AD$+AwN.toFixed());}return C8;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={Cb:function(A9){var AqQ=A9;var AGf=A.jm;
switch(AqQ){case 0:AGf=A.z2(A.abg.Male);break;case 1:AGf=A.z2(A.abg.Female);break;
case 2:AGf=A.z2(A.abg.Unknown);break;default:throw new Error(ASx+AqQ.toFixed());
}return AGf;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={Cb:
function(A9){var type=A9;var Ad2=A.jm;switch(type){case 0:Ad2=A.z2(A.abg.Bic);break;
case 1:Ad2=A.z2(A.abg.Bi6);break;case 2:Ad2=A.z2(A.abg.Triplets);break;case 3:Ad2=
A.z2(A.abg.Quadruplets);break;default:throw new Error(ASy+type.toFixed());}return Ad2;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BirthTypeToString;
},_className:"Device::BirthTypeToString"};C.SyncState={Idle:0,Init:1,Exporting:2
,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:8};C.SyncStateToString={
Cb:function(A9){var A$s=A9;var Bl=A.jm;switch(A$s){case 7:Bl=Au8;break;case 0:Bl=
Ai5;break;case 6:Bl=Nu;break;case 2:Bl=ASz;break;case 5:Bl=ASA;break;case 3:Bl=ASB;
break;case 4:Bl=ASC;break;case 1:Bl=Au_;break;default:throw new Error(AEa+A$s.toFixed(
));}return Bl;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.SyncStateToString;},_className:"Device::SyncStateToString"};C.RatedAttributeToString={
Cb:function(A9){var Axs=A9;switch(Axs){case 0:return A.jm;case 1:return A.z2(A.abg.
Bhs);case 4:return A.z2(A.abg.Bhr);case 3:return A.z2(A.abg.Bht);case 2:return A.
z2(A.abg.Bhq);default:throw new Error(Au$+Axs.toFixed());}},KN:function(A9){var Axs=
A9;switch(Axs){case 0:return A.jm;case 1:return A.z2(A.abg.Feed);case 4:return A.
z2(A.abg.ACp);case 3:return A.z2(A.abg.ACq);case 2:return A.z2(A.abg.ACn);default:
throw new Error(Au$+Axs.toFixed());}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.RatedAttributeToString;},_className:"Device::RatedAttributeToString"
};C.AssesmentToString={Cb:function(A9){var Aji=A9;var Av2=A.jm;switch(Aji){case 0:
case 5:Av2=A.jm;break;case 3:Av2=A.z2(A.abk.Bii);break;case 2:Av2=A.z2(A.abk.Bik
);break;case 1:Av2=A.z2(A.abk.Bij);break;default:throw new Error(ASD+Aji.toFixed(
));}return Av2;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
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
9};C.PopupContext={ACc:null,Aiv:A.jm,AiP:0,PopupState:1,Id:0,Show:false,BgB:function(
E){var B;if(this.PopupState===E)return;this.PopupState=E;if(!!this.ACc)(B=this.ACc
)?B[1].call(B[0],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.ACc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::PopupContext"};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={Cb:function(
A9){switch(A9){case 0:return A.z2(A.abg.No);case 1:return A.z2(A.abg.Yes);default:
return Ava+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.AnimalGroupTableFields={
Id:0,GroupName:1};C.AnimalGroup={GroupName:ADE,Id:0,Fq:function(Z,AF){var G8=C.Row.
Fq.call(this,Z,AF);if(G8&&!!AF){this.OnSetId(AF.Cq(Z,0));this.ABp(AF.Ug(Z,1));}return G8;
},Cs:function(AF){var G8=C.Row.Cs.call(this,AF);if(G8&&!!AF){var IR=AF.NS();if(IR<=
0)A.aa8("%s",AaO);else{if(this.AkW())this.Cu=AF.WZ();AF.GJ(this.Cu,0,this.Id);AF.
XU(this.Cu,1,this.GroupName);AF.NU(IR);}}return G8;},GG:function(){C.Row.GG.call(
this);this.OnSetId(-1);},G1:function(){C.Row.G1.call(this);this.OnSetId(0);this.
ABp(A.jm);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.
P1,this.OnSetId],0);},ABp:function(E){if(this.GroupName===E)return;this.GroupName=
E;A.aat([this,this.Bed,this.ABp],0);},P1:function(){return this.Id;},Bed:function(
){return this.GroupName;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.
__proto__=C.AnimalGroup;this.TableId=3;},_className:"Device::AnimalGroup"};C.PopupIdToString={
Cb:function(A9){var Abu=A9;var Ax=A.jm;var AFZ;AFZ=A.z2(A.abg.Bjr)+Oh;switch(Abu
){case 0:Ax=A.z2(A.abg.Unknown);break;case 1:Ax=A.z2(A.abg.SevereError);break;case
58:Ax=A.z2(A.abg.Bbw);break;case 2:Ax=A.z2(A.abg.Bbu);break;case 3:Ax=A.z2(A.abg.
Bjd);break;case 77:Ax=A._GetAutoObject(C.Helper).BbJ();break;case 78:Ax=A._GetAutoObject(
C.Helper).BbH();break;case 79:Ax=A._GetAutoObject(C.Helper).BbI();break;case 9:Ax=
A.z2(A.abg.BjB);break;case 5:Ax=A.z2(A.abg.SuccessDataSync);break;case 8:Ax=A.z2(
A.abg.SuccessResetFactorySettings);break;case 34:Ax=A.z2(A.abg.SuccessResetAnimalData
);break;case 10:Ax=A._GetAutoObject(C.Device).Azq();break;case 82:Ax=A.z2(A.abg.
Bby);break;case 83:Ax=A.z2(A.abg.Bbz);break;case 80:Ax=A.z2(A.abg.Bir);break;case
81:Ax=A.z2(A.abg.SuccessRestoreBackup);break;case 92:Ax=A.z2(A.abg.Bav);break;case
93:Ax=A.z2(A.abg.BhF);break;case 4:Ax=A.z2(A.abg.WarningDataSync);break;case 7:Ax=
A.z2(A.abg.Bjy);break;case 33:Ax=A.z2(A.abg.WarningResetAnimalData);break;case 6:
Ax=A.z2(A.abg.WarningRestart);break;case 27:Ax=A.z2(A.abg.WarningNoActionDefined
);break;case 64:Ax=A.z2(A.abg.WarningActionNotApplicable);break;case 28:Ax=A.z2(
A.abg.WarningNoMenuItemVisible);break;case 29:Ax=A.z2(A.abg.WarningEnterPresentationMode
);break;case 30:Ax=A.z2(A.abg.WarningNoAnimalsRegistered);break;case 41:Ax=((AFZ+
A.z2(A.abg.ANd))+Oh)+A.z2(A.abg.Bc5);break;case 50:Ax=((AFZ+A.z2(A.abg.ANd))+Oh)+
A.z2(A.abg.Bc7);break;case 51:Ax=((AFZ+A.z2(A.abg.ANd))+Oh)+A.z2(A.abg.Bc6);break;
case 42:Ax=A.z2(A.abg.BjA);break;case 91:Ax=A.z2(A.abg.WarningScanOverwriteNaisId
);break;case 45:Ax=A.z2(A.abg.Bjv);break;case 46:Ax=A.z2(A.abg.WarningNoValidCountryCode
);break;case 57:Ax=A.z2(A.abg.WarningOutdatedAnimalWeight);break;case 52:Ax=A.z2(
A.abg.WarningOutdatedAnimalWeights);break;case 53:Ax=A.z2(A.abg.WarningWeightEvaluationSingular
);break;case 56:Ax=A.z2(A.abg.WarningWeightEvaluationPlural);break;case 11:Ax=A.
z2(A.abg.ScanError);break;case 12:Ax=A.z2(A.abg.ScanNotFound);break;case 13:Ax=A.
z2(A.abg.Bag);break;case 36:Ax=A.z2(A.abg.Bi1);break;case 14:Ax=A.z2(A.abg.AnimalNotFound
);break;case 15:Ax=A.z2(A.abg.SuccessUnregister);break;case 35:Ax=A.z2(A.abg.SuccessUnregisterPerished
);break;case 26:Ax=A.z2(A.abg.SuccessCreationNewAnimal);break;case 23:Ax=A.z2(A.
abg.SuccessCreationNewAnimals);break;case 24:Ax=A.z2(A.abg.BaX);break;case 49:Ax=
A.z2(A.abg.EvaluationInProgress);break;case 16:Ax=A.z2(A.abg.Ba2);break;case 17:
Ax=A.z2(A.abg.Bim);break;case 18:Ax=A.z2(A.abg.Biw);break;case 19:Ax=A.z2(A.abg.
Bin);break;case 20:Ax=A.z2(A.abg.Bix);break;case 54:Ax=A.z2(A.abg.Bis);break;case
55:Ax=A.z2(A.abg.Biv);break;case 21:Ax=A.z2(A.abg.AZf);break;case 48:Ax=(A.z2(A.
abg.AZf)+Oh)+A.z2(A.abg.AZ1);break;case 22:Ax=A.z2(A.abg.Bda);break;case 63:Ax=A.
z2(A.abg.Bjw);break;case 85:Ax=A.z2(A.abg.Bjx);break;case 43:Ax=A.z2(A.abg.Bdb);
break;case 25:Ax=A.z2(A.abg.A5i);break;case 47:Ax=(A.z2(A.abg.A5i)+Oh)+A.z2(A.abg.
AZ1);break;case 31:{var Bsu=(((((((((((((((((((A.z2(A.abg.BaN)+Au0)+A.z2(A.abg.AJd
))+A.z2(A.abg.Colon))+JW)+A.z2(A.abg.BaP))+Oh)+A.z2(A.abg.AKd))+A.z2(A.abg.Colon
))+JW)+A.z2(A.abg.BbD))+Oh)+A.z2(A.abg.APn))+A.z2(A.abg.Colon))+JW)+A.z2(A.abg.Bhv
))+Oh)+A.z2(A.abg.APm))+A.z2(A.abg.Colon))+JW)+A.z2(A.abg.Bhu);Ax=Bsu;}break;case
32:Ax=A.z2(A.abg.Bi2);break;case 69:Ax=A.z2(A.abg.Bdi);break;case 44:Ax=A.z2(A.abg.
Bjz);break;case 37:Ax=A.z2(A.abg.WarningResetWeightSettings);break;case 38:Ax=A.
z2(A.abg.WarningResetTempThresholds);break;case 39:Ax=A.z2(A.abg.Bhm);break;case
76:Ax=(A.z2(A.abg.AZJ)+Oh)+A.z2(A.abg.APp);break;case 40:Ax=A.z2(A.abg.Bit);break;
case 75:Ax=A.z2(A.abg.Bio);break;case 59:Ax=A.z2(A.abg.QuestionAddAnotherCalfMultiples
);break;case 62:Ax=A.z2(A.abg.Bip);break;case 60:Ax=A.z2(A.abg.Biq);break;case 61:
Ax=A.z2(A.abg.Biy);break;case 65:Ax=A.z2(A.abg.SuccessClearAnimalLoss);break;case
66:Ax=A.z2(A.abg.WarningNoActionsForAnimalLoss);break;case 67:Ax=A.z2(A.abg.SuccessLinkTransponder
);break;case 86:Ax=A.z2(A.abg.SuccessUnlinkTransponder);break;case 68:Ax=A.z2(A.
abg.Biu);break;case 70:Ax=A.z2(A.abg.BbA);break;case 71:Ax=A.z2(A.abg.BiB);break;
case 72:Ax=A.z2(A.abg.BiC);break;case 88:Ax=A.z2(A.abg.BbB);break;case 89:Ax=A.z2(
A.abg.Biz);break;case 90:Ax=A.z2(A.abg.BiA);break;case 73:Ax=A.z2(A.abg.WarningNoPremisesID
);break;case 74:Ax=A.z2(A.abg.WarningNoFlashDrivePresent);break;case 95:Ax=A.z2(
A.abg.WarningNoBackupPathPresent);break;case 94:Ax=A.z2(A.abg.WarningNoBackupFilePresent
);break;case 84:Ax=A.z2(A.abg.BbQ);break;case 87:Ax=A.z2(A.abg.BjD);break;case 96:
Ax=A.z2(A.abg.Bju);break;default:throw new Error(AEb+Abu.toFixed());}return Ax;}
,KN:function(A9){var Abu=A9;var Ax=A.jm;switch(Abu){case 0:Ax=ASE;break;case 1:Ax=
ASF;break;case 58:Ax=ASG;break;case 2:Ax=ASH;break;case 3:Ax=ASI;break;case 77:Ax=
ASJ;break;case 78:Ax=ASK;break;case 79:Ax=ASL;break;case 9:Ax=ASM;break;case 5:Ax=
ASN;break;case 8:Ax=ASO;break;case 34:Ax=ASP;break;case 80:Ax=ASQ;break;case 81:
Ax=ASR;break;case 92:Ax=ASS;break;case 93:Ax=AEc;break;case 82:Ax=AEd;break;case
83:Ax=AEe;break;case 10:Ax=AEf;break;case 4:Ax=AEg;break;case 7:Ax=AEh;break;case
33:Ax=AEi;break;case 6:Ax=AST;break;case 27:Ax=ASU;break;case 64:Ax=ASV;break;case
28:Ax=ASW;break;case 29:Ax=ASX;break;case 30:Ax=ASY;break;case 41:Ax=ASZ;break;case
50:Ax=AS0;break;case 51:Ax=AS1;break;case 42:Ax=AS2;break;case 91:Ax=AS3;break;case
45:Ax=AS4;break;case 46:Ax=AS5;break;case 57:Ax=Avb;break;case 52:Ax=AS6;break;case
53:Ax=AS7;break;case 56:Ax=Avc;break;case 11:Ax=Avd;break;case 12:Ax=Ym;break;case
13:Ax=Aqa;break;case 36:Ax=AEj;break;case 14:Ax=AS8;break;case 15:Ax=AS9;break;case
35:Ax=AEk;break;case 26:Ax=AS_;break;case 23:Ax=AEl;break;case 24:Ax=AS$;break;case
49:Ax=ATa;break;case 16:Ax=ATb;break;case 17:Ax=Aqb;break;case 18:Ax=ATc;break;case
19:Ax=ATd;break;case 20:Ax=AEm;break;case 54:Ax=ATe;break;case 55:Ax=ATf;break;case
21:Ax=ATg;break;case 48:Ax=ATh;break;case 22:Ax=Yn;break;case 63:Ax=ATi;break;case
43:Ax=ATj;break;case 85:Ax=ATk;break;case 25:Ax=ATl;break;case 47:Ax=AEn;break;case
31:Ax=ATm;break;case 32:Ax=ATn;break;case 69:Ax=ATo;break;case 44:Ax=ATp;break;case
37:Ax=ATq;break;case 38:Ax=ATr;break;case 39:Ax=AEo;break;case 76:Ax=ATs;break;case
40:Ax=ATt;break;case 75:Ax=ATu;break;case 59:Ax=AEp;break;case 62:Ax=AEq;break;case
60:Ax=ATv;break;case 65:Ax=ATw;break;case 61:Ax=ATx;break;case 66:Ax=ATy;break;case
67:Ax=Qk;break;case 86:Ax=Aqc;break;case 68:Ax=AEr;break;case 70:Ax=AEs;break;case
71:Ax=Al5;break;case 72:Ax=Al6;break;case 88:Ax=Ave;break;case 89:Ax=ATz;break;case
90:Ax=AEt;break;case 73:Ax=ATA;break;case 74:Ax=ATB;break;case 95:Ax=ATC;break;case
94:Ax=ATD;break;case 84:Ax=ATE;break;case 87:Ax=ATF;break;case 96:Ax=ATG;break;default:
throw new Error(AEb+Abu.toFixed());}return Ax;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"
};C.PopupParamSeparator=";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={
UNDEFINED:0,AnimalId:1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={
UNDEFINED:0,FDX:1,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={Cb:function(
A9){var A$H=A9;var type=A.jm;switch(A$H){case 1:type=ATH;break;case 2:type=ATI;break;
case 3:type=ATJ;break;case 4:type=ATK;break;case 0:type=Au1;break;default:throw new
Error(ATL+A$H.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={Cb:function(A9){var A$G=A9;var Axp=A.jm;switch(
A$G){case 1:Axp=ATM;break;case 2:Axp=ATN;break;case 3:Axp=ATO;break;case 0:Axp=Au1;
break;default:throw new Error(ATP+A$G.toFixed());}return Axp;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AOZ:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.aat([this,this.BeN,this.AOZ],0);},AOY:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.aat([this,this.BeM,this.AOY],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.aat([this,this.P1,this.OnSetId],0);
},AKD:function(){return A._GetAutoObject(C.Converter).Bi0(this.Id);},BbZ:function(
){return A._GetAutoObject(C.Converter).Auy(this.Id);},BeN:function(){return this.
TransponderType;},BeM:function(){return this.TransponderProtocol;},P1:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={Cb:function(A9){var
TH=A9;var ML=A.jm;switch(TH){case 0:ML=A.z2(A.abg.Basic);break;case 1:ML=A.z2(A.
abg.Extended);break;default:throw new Error(ATQ+TH.toFixed());}return ML;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={Cb:function(A9){var
A9l=A9;var Anz=A.jm;switch(A9l){case 0:Anz=A.z2(A.abg.BcL);break;case 1:Anz=A.z2(
A.abg.Pound);break;default:throw new Error(Al7+A9l.toFixed());}return Anz;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={L0:10,Array:A.aan(10,0,null),XJ:function(
E){if(this.L0===E)return;if(E>10)throw new Error(AEu);this.L0=E;},Set:function(aIndex
,AP){if((aIndex<0)||(aIndex>=this.L0))throw new Error(AEv);this.Array.Set(aIndex
,AP);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.L0))throw new Error(AEv
);return this.Array.Get(aIndex);},AkN:function(){var HM=0;var P;for(P=0;P<this.L0;
P=P+1)HM=HM+this.Get(P);return HM;},toString:function(){var AXi=this.Array.Get(0
).toFixed();var P;for(P=1;P<this.L0;P=P+1)AXi=(AXi+Kd)+this.Array.Get(P).toFixed(
);return AXi;},Fq:function(aString){var I6=aString.indexOf(String.fromCharCode(0x2C
),0);var AWc=A.jm;var P=0;while(P<10){if(aString===A.jm)this.Array.Set(P,0);else{
if(I6===-1){AWc=aString;aString=A.jm;}else{AWc=A.aaX(aString,I6);aString=A.aa3(aString
,0,I6+1);}this.Array.Set(P,A.vQ(AWc,0,10));I6=aString.indexOf(String.fromCharCode(
0x2C),0);}P=P+1;}if(aString!==A.jm)A.aa8("%s",AEw);},Cs:function(){},G1:function(
){var P;for(P=0;P<this.L0;P=P+1)this.Set(P,0);},Aso:function(A2){var P=0;while(P<
this.L0){if(this.Array.Get(P)===A2)return P;P=P+1;}return-1;},HP:function(){var P=
0;var max=-1;while(P<this.L0){if(this.Array.Get(P)>max)max=this.Array.Get(P);P=P+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={Cb:function(A9){var Awm=A9;var EP=A.jm;switch(Awm){case 4:EP=
A.z2(A.abg.Alarm);break;case 256:EP=A.z2(A.abg.Weighing);break;case 128:EP=A.z2(
A.abg.A0x);break;case 16:EP=A.z2(A.abg.AH_);break;case 1:EP=A.z2(A.abg.Temperature
);break;case 32:EP=A.z2(A.abg.AnimalLoss);break;case 2:EP=A.z2(A.abg.Rating);break;
case 8:EP=A.z2(A.abg.Apj);break;case 64:EP=A.z2(A.abg.Unregister);break;case 512:
EP=A.z2(A.abg.ANw);break;case 1024:EP=A.z2(A.abg.LinkTransponder);break;case 262144:
EP=A.z2(A.abg.UnlinkTransponder);break;case 2048:EP=A.z2(A.abg.Oz);break;case 4096:
EP=A.z2(A.abg.Calving);break;case 8192:EP=A.z2(A.abg.DryOff);break;case 16384:EP=
A.z2(A.abg.A1D);break;case 32768:EP=A.z2(A.abg.AyE);break;case 65536:EP=A.z2(A.abg.
Delete);break;case 131072:EP=A.z2(A.abg.A1E);break;case 0:EP=A.z2(A.abg.A11);break;
default:throw new Error(Avf+Awm.toFixed());}return EP;},KN:function(A9){var Awm=
A9;var EP=A.jm;switch(Awm){case 4:EP=A.z2(A.abg.Alarm);break;case 256:EP=A.z2(A.
abg.Weighing);break;case 128:EP=A.z2(A.abg.A0x);break;case 16:EP=A.z2(A.abg.AH_);
break;case 1:EP=A.z2(A.abg.Temperature);break;case 32:EP=A.z2(A.abg.AnimalLoss);
break;case 2:EP=A.z2(A.abg.Rating);break;case 8:EP=A.z2(A.abg.Apj);break;case 64:
EP=A.z2(A.abg.Unregister);break;case 512:EP=A.z2(A.abg.ANw);break;case 1024:EP=A.
z2(A.abg.LinkTransponder);break;case 262144:EP=A.z2(A.abg.UnlinkTransponder);break;
case 2048:EP=A.z2(A.abg.Oz);break;case 4096:EP=A.z2(A.abg.Calving);break;case 8192:
EP=A.z2(A.abg.DryOff);break;case 16384:EP=A.z2(A.abg.A1C);break;case 32768:EP=A.
z2(A.abg.AyE);break;case 65536:EP=A.z2(A.abg.Delete);break;case 131072:EP=A.z2(A.
abg.A1C);break;case 0:EP=A.z2(A.abg.A11);break;default:throw new Error(Avf+Awm.toFixed(
));}return EP;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ActionToString;},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=
2000;C.ITable={Filter:null,Id:2,Cq:function(Z,AR){return 0;},Ug:function(Z,AR){return A.
jm;},Aia:function(H){A.vv(this,0);A.ow([this,this.EA],this);},Hs:function(Z,AR){
return false;},Ht:function(Z,AR){return this.Q_(Z,AR);},OnSetId:function(E){if(this.
Id===E)return;this.Id=E;},Cf:function(){return 0;},Bo:function(E){if(this.Filter===
E)return;this.Filter=E;A.aat([this,this.Fd,this.Fg],0);},Fg:function(Ao){this.Bo(
Ao);},ID:function(Z,AR){var BtZ=this.Uh(Z,AR);return A._GetAutoObject(C.Converter
).A5l(BtZ);},Uh:function(Z,AR){return 0;},Q_:function(Z,AR){return 0;},A04:function(
Z,AR){return this.Cq(Z,AR);},NS:function(){var IR=0;var BuE=this.Id;return IR;},
NU:function(Amm){var G8=0;var BuE=this.Id;return G8===1;},WZ:function(){return-1;
},XW:function(Z,AR,CM){return false;},GJ:function(Z,AR,CM){return false;},XV:function(
Z,AR,CM){return false;},MC:function(Z,AR,CM){return false;},XU:function(Z,AR,CM){
return false;},Aap:function(Z,AR,CM){return this.XV(Z,AR,CM);},AiF:function(Z,AR
,CM){var Bt0=A._GetAutoObject(C.Converter).AbR(CM);return this.XW(Z,AR,Bt0);},A4X:
function(Z,AR,CM){return this.GJ(Z,AR,CM);},AKw:function(Z,AR){return this.Cq(Z,
AR);},BbX:function(Z,AR){return this.Cq(Z,AR);},BhZ:function(Z,AR,CM){return this.
GJ(Z,AR,CM);},BhV:function(Z,AR,CM){return this.GJ(Z,AR,CM);},LM:function(aColumn
,A2){return-1;},AkL:function(Z,AR){return this.Cq(Z,AR);},BhT:function(Z,AR,CM){
return this.GJ(Z,AR,CM);},Azp:function(Z,AR){return this.Cq(Z,AR);},API:function(
Z,AR,Ny){return this.GJ(Z,AR,Ny);},EA:function(H){this.Brc();},Brc:function(){return-
1;},LQ:function(Z,AR){return 0;},S8:function(Z,AR,CM){return false;},AhA:function(
aColumn,A2){return-1;},G1:function(){return false;},BbY:function(Z,AR){var Bt1=this.
Cq(Z,AR);return A._GetAutoObject(C.Converter).Bcl(Bt1);},Bb1:function(Z,AR){return this.
Cq(Z,AR);},AKF:function(Z,AR){return this.Cq(Z,AR);},BhX:function(Z,AR,CM){var Bt2=
A._GetAutoObject(C.Converter).AZP(CM);return this.GJ(Z,AR,Bt2);},BhY:function(Z,
AR,CM){return this.GJ(Z,AR,CM);},Bh5:function(Z,AR,CM){return this.GJ(Z,AR,CM);}
,Ahy:function(aColumn,A2){return false;},Acb:function(aColumn,A2){return false;}
,Bb$:function(Z,AR){return this.Cq(Z,AR);},Bh3:function(Z,AR,CM){return this.GJ(
Z,AR,CM);},Ms:function(){return this.PG()>=this.If();},If:function(){return 0;},
Zx:function(){return-1;},PG:function(){return 0;},Fd:function(){return this.Filter;
},_Init:function(aArg){this.__proto__=C.ITable;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Filter)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D
);},I:null,_cycle:0,_observers:null,_className:"Device::ITable"};C.MaxAutoActionsCount=
4;C.WeightRecordingMode={Automatic:0,Manual:1,LAST:2};C.WeightRecordingModeToString={
Cb:function(A9){var TH=A9;var ML=A.jm;switch(TH){case 0:ML=A.z2(A.abg.Automatic);
break;case 1:ML=A.z2(A.abg.Manual);break;default:throw new Error(AaP+TH.toFixed(
));}return ML;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WeightRecordingModeToString;},_className:"Device::WeightRecordingModeToString"
};C.BooleanToAutoOnOff={Cb:function(A9){switch(A9){case 0:return A.z2(A.abg.Off);
case 1:return A.z2(A.abg.Wd);default:return Ava+A9.toFixed();}},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BooleanToAutoOnOff;},_className:
"Device::BooleanToAutoOnOff"};C.WeightStep=100;C.WeightRecordingScope={CurrentWeightOnly:
0,BirthWeightOnly:1,BirthAndCurrentWeight:2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={
Cb:function(A9){var A$a=A9;var AxC=A.jm;switch(A$a){case 0:AxC=A.z2(A.abg.BaZ);break;
case 1:AxC=A.z2(A.abg.BaA);break;case 2:AxC=A.z2(A.abg.Bay);break;case 3:AxC=A.z2(
A.abg.Bdy);break;default:throw new Error(AEx+A$a.toFixed());}return AxC;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Jf={AbK:0,Temperature:1,Rating:2,AfZ:3,Bva:
4,BvQ:5,Bym:6,Bwr:7,Bw$:8,Bv1:9,Bw_:10,Bxy:11,LAST:12};C.AnimalListContentToString={
Cb:function(A9){var A7P=A9;var VG=A.jm;switch(A7P){case 0:VG=ATR;break;case 2:VG=
AEy;break;case 1:VG=ATS;break;case 3:VG=Avg;break;case 4:VG=ATT;break;case 5:VG=
ATU;break;case 6:VG=ATV;break;case 7:VG=ATW;break;case 8:VG=ATX;break;case 9:VG=
ATY;break;case 10:VG=AEz;break;case 11:VG=Al8;break;default:throw new Error(AEA+
A7P.toFixed());}return VG;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.AnimalListContentToString;},_className:"Device::AnimalListContentToString"
};C.GenderFilterCriterion={AY:0,Ab_:function(){var As=A._NewObject(C.GenderFilterCriterion
,0);As.F$(this);return As;},F$:function(AK){C.FilterCriterion.F$.call(this,AK);var
As=(C.GenderFilterCriterion.isPrototypeOf(AK)?AK:null);if(!!As)this.AY=As.AY;},_Init:
function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;
},_className:"Device::GenderFilterCriterion"};C.AnimalTypeFilterCriterion={AY:0,
Ab_:function(){var As=A._NewObject(C.AnimalTypeFilterCriterion,0);As.F$(this);return As;
},F$:function(AK){C.FilterCriterion.F$.call(this,AK);var As=(C.AnimalTypeFilterCriterion.
isPrototypeOf(AK)?AK:null);if(!!As)this.AY=As.AY;},Initialize:function(AR,En,A2,
RX){this.EF=AR;this.Operator=En;this.AY=A2;this.ZM=RX;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AnimalTypeFilterCriterion;
},_className:"Device::AnimalTypeFilterCriterion"};C.Bvm={Aet:0,Bvl:1,BwW:2,A4E:3
,AZV:4,Bx7:5,BvP:6,Bx6:7,LinkTransponder:8,Oz:9,Weighing:10,Calving:11,LinkNaisId:
12,Bxx:13,ClearBirthAnnouncementPending:14,DeleteAnimal:15,ScanNaisId:16,Edit:17
};C.AutoRegistrationModeToString={Cb:function(A9){var TH=A9;var ML=A.jm;switch(TH
){case 0:ML=A.z2(A.abg.BaQ);break;case 1:ML=A.z2(A.abg.Bcp);break;case 2:ML=A.z2(
A.abg.Off);break;default:throw new Error(ATZ+TH.toFixed());}return ML;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AutoRegistrationModeToString;
},_className:"Device::AutoRegistrationModeToString"};C.AutoRegistrationMode={UserConfirmed:
0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={AY:0,Ab_:function(){var
As=A._NewObject(C.AssessmentFilterCriterion,0);As.F$(this);return As;},F$:function(
AK){C.FilterCriterion.F$.call(this,AK);var As=(C.AssessmentFilterCriterion.isPrototypeOf(
AK)?AK:null);if(!!As)this.AY=As.AY;},Initialize:function(AR,En,A2,RX){this.EF=AR;
this.Operator=En;this.AY=A2;this.ZM=RX;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;},_className:"Device::AssessmentFilterCriterion"
};C.DP={AbK:0,Temperature:1,AfZ:2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:
0,AnimalDataOnly:1,LAST:2};C.FactoryResetScopeToString={Cb:function(A9){switch(A9
){case 0:return A.z2(A.abg.A$8);case 1:return A.z2(A.abg.AnimalDataOnly);default:
return AEB+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.FactoryResetScopeToString;},_className:"Device::FactoryResetScopeToString"
};C.AQe={Cs:function(){A._GetAutoObject(C.Device).Apc(this.toString());},Init:function(
aArg){var B;A.za([this,this.A_n],[B=A._GetAutoObject(C.Device),B.A21,B.A6P],0);this.
A_n(this);},A_n:function(H){this.Fq(A._GetAutoObject(C.Device).AC8);A.vv(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQe;this.XJ(3);this.Init(aArg);},_className:"Device::TemperaturesLowClass"};C.
AQd={Init:function(aArg){var B;A.za([this,this.A_l],[B=A._GetAutoObject(C.Device
),B.A20,B.A6O],0);this.A_l(this);},Cs:function(){A._GetAutoObject(C.Device).Apb(
this.toString());},A_l:function(H){this.Fq(A._GetAutoObject(C.Device).AC7);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQd;this.XJ(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"};C.
AIs={Init:function(aArg){var B;A.za([this,this.A9T],[B=A._GetAutoObject(C.Device
),B.A2p,B.A6w],0);this.A9T(this);},A9T:function(H){this.Fq(A._GetAutoObject(C.Device
).Ayf);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AIs;this.XJ(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={AY:0,Ab_:function(){var As=A._NewObject(C.UInt64FilterCriterion
,0);As.F$(this);return As;},F$:function(AK){C.FilterCriterion.F$.call(this,AK);var
As=(C.UInt64FilterCriterion.isPrototypeOf(AK)?AK:null);if(!!As)this.AY=As.AY;},Initialize:
function(AR,En,A2,RX){this.EF=AR;this.Operator=En;this.AY=A2;this.ZM=RX;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
Cb:function(A9){switch(A9){case 0:return A.z2(A.abg.Ah$);case 1:return A.z2(A.abg.
A$9);default:return Ava+A9.toFixed();}},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.C2={UNDEFINED:0,AT:1,BA:2,BE:3,Bvr:
4,BvG:5,BvH:6,BvI:7,BvJ:8,BvK:9,BvU:10,BvV:11,Bv2:12,Bv3:13,Bwg:14,FR:15,GR:16,Bwt:
17,Bwu:18,Bwz:19,BwA:20,BwF:21,BwG:22,BwH:23,BwI:24,BwO:25,Bw2:26,Bw3:27,Bxf:28,
Bxg:29,Bxv:30,Bxw:31,BxL:32,BxM:33,BxN:34,Bx0:35,Bx1:36,Byf:37,A5m:38,Byg:39,LAST:
40};C.CountryToString={Cb:function(A9){var NB=A9;var E8=A.jm;switch(NB){case 1:E8=
A.z2(A.abn.Bak);break;case 2:E8=A.z2(A.abn.BaB);break;case 3:E8=A.z2(A.abn.Bax);
break;case 4:E8=A.abn.BaE;break;case 5:E8=A.z2(A.abn.BaH);break;case 6:E8=A.z2(A.
abn.BiG);break;case 7:E8=A.z2(A.abn.BaK);break;case 8:E8=A.z2(A.abn.Ba0);break;case
9:E8=A.z2(A.abn.Ba1);break;case 10:E8=A.z2(A.abn.BbR);break;case 11:E8=A.z2(A.abn.
Ba6);break;case 12:E8=A.z2(A.abn.Bbx);break;case 13:E8=A.z2(A.abn.Bif);break;case
14:E8=A.z2(A.abn.BbF);break;case 15:E8=A.z2(A.abn.BbN);break;case 16:E8=A.z2(A.abn.
Bch);break;case 17:E8=A.z2(A.abn.BaY);break;case 18:E8=A.z2(A.abn.Bcm);break;case
19:E8=A.z2(A.abn.Bcw);break;case 20:E8=A.z2(A.abn.BcG);break;case 21:E8=A.z2(A.abn.
BcI);break;case 22:E8=A.z2(A.abn.BcX);break;case 23:E8=A.z2(A.abn.Bc1);break;case
24:E8=A.z2(A.abn.BcV);break;case 25:E8=A.abn.Bc3;break;case 26:E8=A.z2(A.abn.Bdj
);break;case 27:E8=A.z2(A.abn.Bdz);break;case 28:E8=A.z2(A.abn.Bhe);break;case 29:
E8=A.z2(A.abn.Bhf);break;case 30:E8=A.z2(A.abn.BhG);break;case 31:E8=A.z2(A.abn.
BhI);break;case 32:E8=A.z2(A.abn.BiF);break;case 33:E8=A.z2(A.abn.Bie);break;case
34:E8=A.z2(A.abn.Bid);break;case 35:E8=A.z2(A.abn.Bi5);break;case 36:E8=A.z2(A.abn.
BiP);break;case 37:E8=A.z2(A.abn.Bi9);break;case 38:E8=A.z2(A.abn.A5m);break;case
39:E8=A.z2(A.abn.Bi8);break;case 0:E8=Ai6;break;default:throw new Error(Ap2+NB.toFixed(
));}return E8;},KN:function(A9){var NB=A9;var BJ=A.jm;switch(NB){case 1:BJ=RO;break;
case 2:BJ=Vi;break;case 3:BJ=Tn;break;case 4:BJ=Vj;break;case 5:BJ=JV;break;case
6:BJ=Yj;break;case 7:BJ=RP;break;case 8:BJ=Yb;break;case 9:BJ=RQ;break;case 10:BJ=
Qh;break;case 11:BJ=Yc;break;case 12:BJ=Vm;break;case 13:BJ=Yi;break;case 14:BJ=
To;break;case 15:BJ=Vn;break;case 16:BJ=Vo;break;case 17:BJ=Vl;break;case 18:BJ=
Ns;break;case 19:BJ=Pe;break;case 20:BJ=Tp;break;case 21:BJ=Yd;break;case 22:BJ=
Ye;break;case 23:BJ=Yf;break;case 24:BJ=Vp;break;case 25:BJ=Vq;break;case 26:BJ=
Vr;break;case 27:BJ=RR;break;case 28:BJ=Yg;break;case 29:BJ=Yh;break;case 30:BJ=
AaK;break;case 31:BJ=Qi;break;case 32:BJ=Vs;break;case 33:BJ=AdG;break;case 34:BJ=
AaL;break;case 35:BJ=AdH;break;case 36:BJ=Vk;break;case 37:BJ=KO;break;case 38:BJ=
AaM;break;case 39:BJ=RS;break;case 0:BJ=Ai6;break;default:throw new Error(Ap2+NB.
toFixed());}return BJ;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};C.EaseOfDelivery={
Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};C.EaseOfDeliveryToString={
Cb:function(A9){var A8n=A9;var AqJ=A.jm;switch(A8n){case 0:AqJ=A.z2(A.abg.Unspecified
);break;case 1:AqJ=A.z2(A.abg.Easy);break;case 2:AqJ=A.z2(A.abg.Moderate);break;
case 3:AqJ=A.z2(A.abg.Difficult);break;case 4:AqJ=A.z2(A.abg.Surgery);break;default:
throw new Error(Ai7+A8n.toFixed());}return AqJ;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;},_className:"Device::EaseOfDeliveryToString"
};C.WhereAbouts={UNB:0,EZU:1,EMA:2,VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:
10,LAST:11};C.WhereAboutsToString={Cb:function(A9){var A$Y=A9;var YY=A.jm;switch(
A$Y){case 0:YY=A.z2(A.abg.Unknown);break;case 1:YY=A.z2(A.abg.Bjf);break;case 2:
YY=A.z2(A.abg.Bje);break;case 3:YY=A.z2(A.abg.Bjn);break;case 4:YY=A.z2(A.abg.Bjm
);break;case 5:YY=A.z2(A.abg.Bjk);break;case 6:YY=A.z2(A.abg.Bjh);break;case 7:YY=
A.z2(A.abg.Bjj);break;case 8:YY=A.z2(A.abg.Bji);break;case 9:YY=A.z2(A.abg.Bjg);
break;case 10:YY=A.z2(A.abg.Bjl);break;default:throw new Error(AT0+A$Y.toFixed()
);}return YY;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.WhereAboutsToString;},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:
0,SBT:1,RBT:2,JER:3,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:
14,LMP:15,DBV:16,AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26
,PIE:27,CHI:28,ROM:29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:
39,LR:40,BGA:41,LG:42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:
51,FR:52,TUX:53,TLM:54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:
63,PS:64,GVF:65,BVF:66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:
75,WL:76,BIS:77,YAK:78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:
87,BLH:88,TLH:89,MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,
LAST:99};C.BreedToString={Cb:function(A9){var Bn=A9;var BD=A.jm;switch(Bn){case 0:
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
XZZ);break;default:throw new Error(Al9+Bn.toFixed());}return BD;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.BreedToString;},_className:
"Device::BreedToString"};C.Y$={timer:null,Q:null,DV:0,Df:0,LW:0,OH:1000,OP:1000,
Bw:false,Ci:false,BX:true,Lz:function(H){var F;if(!this.timer)return;if(this.DV<
0){this.Df=this.timer.Bp;this.DV=0;}var Ap=(this.timer.Bp-this.Df)|0;var NL=this.
OH;var GA=this.OP+this.OH;var KV=0;var I9=this.DV;if(!I9&&(Ap>=NL)){I9=1;Ap=Ap-NL;
}if((I9>0)&&(Ap>=GA)){var HJ=(Ap/GA)|0;Ap=Ap-(HJ*GA);I9=I9+HJ;}if((I9>2)&&!this.
LW)I9=1;if(I9!==this.DV){this.Df=this.timer.Bp-(((B=Ap)<0)?B+0x100000000:B);this.
DV=I9;}if(I9>0)KV=this.OP;var L9=(I9>=this.LW)&&(this.LW>0);if(!!this.Q){if((!L9&&(
Ap>=KV))&&((F=this.Q,F[1].call(F[0]))!==this.Ci))(F=this.Q,F[2].call(F[0],this.Ci
));if((L9||((Ap<KV)&&(I9>0)))&&((F=this.Q,F[1].call(F[0]))!==this.BX))(F=this.Q,
F[2].call(F[0],this.BX));}if(L9)this.An(false);},IG:function(E){if(E<0)E=0;this.
LW=E;},FK:function(E){if(E<100)E=100;this.OH=E;},Aab:function(E){if(E<0)E=0;this.
OP=E;},An:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.zl([
this,this.Lz],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.
abm.AeU);A.y_([this,this.Lz],this.timer,0);this.DV=-1;}},_Init:function(aArg){this.
__proto__=C.Y$;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::BoolEffect"
};C.HO={AnimalId:0,TransponderId:1,BwR:2,BwQ:3,BwU:4,BwT:5};C.Ar1={Bvp:0,BvW:1};
C.AnimalIdGenerationMethodToString={Cb:function(A9){var Ajh=A9;var Ams=A.jm;switch(
Ajh){case 0:Ams=A.z2(A.abg.Z1);break;case 1:Ams=A.z2(A.abg.Transponder);break;case
3:Ams=(A.z2(A.abg.Manual)+JW)+A.z2(A.abg.Male);break;case 2:Ams=(A.z2(A.abg.Manual
)+JW)+A.z2(A.abg.Female);break;case 4:Ams=(A.z2(A.abg.Manual)+JW)+A.z2(A.abg.Unknown
);break;case 5:Ams=(A.z2(A.abg.Manual)+JW)+AT1;break;default:throw new Error(AEC+
Ajh.toFixed());}return Ams;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;},_className:"Device::AnimalIdGenerationMethodToString"
};C.DirectionOfCountingToString={Cb:function(A9){var Awl=A9;var AWj=A.jm;switch(
Awl){case 0:AWj=AED;break;case 1:AWj=AT2;break;default:throw new Error(AT3+Awl.toFixed(
));}return AWj;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.DirectionOfCountingToString;},_className:"Device::DirectionOfCountingToString"
};C.EnumToIcon={ApP:function(A9){throw new Error(Ap5+A9.toFixed());},ApQ:function(
A9){throw new Error(Ap5+A9.toFixed());},_Init:function(aArg){this.__proto__=C.EnumToIcon;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToIcon"};C.Ab8={ApP:function(A9){return A.
zW(A.abi.AP3);},ApQ:function(A9){var Awl=A9;var Qx=-1;switch(Awl){case 0:Qx=3;break;
case 1:Qx=2;break;default:throw new Error(Avh+Awl.toFixed());}return Qx;},_Init:
function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=C.Ab8;},_className:
"Device::DirectionOfCountingToIcon"};C.AbO={ApP:function(A9){return A.zW(A.abi.AP1
);},ApQ:function(A9){var Ajh=A9;var Qx=-1;switch(Ajh){case 0:Qx=0;break;case 1:Qx=
6;break;case 3:Qx=4;break;case 2:Qx=5;break;case 4:Qx=2;break;case 5:Qx=3;break;
default:throw new Error(Avh+Ajh.toFixed());}return Qx;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AbO;},_className:"Device::AnimalIdGenerationMethodToIcon"
};C.OL={UNDEFINED:0,SH:1,AKI:2,ANh:3,AKH:4,A1U:5,HE:6,A4C:7,AZA:8,AIE:9,APz:10,BE:
11,BB:12,A1J:13,APA:14,APB:15,AP8:16};C.GermanStateToString={Cb:function(A9){var
Bl=A9;var FX=A.jm;switch(Bl){case 1:FX=A.z2(A.abo.SH);break;case 2:FX=A.z2(A.abo.
AKI);break;case 3:FX=A.z2(A.abo.ANh);break;case 4:FX=A.z2(A.abo.AKH);break;case 5:
FX=A.z2(A.abo.A1U);break;case 6:FX=A.z2(A.abo.HE);break;case 7:FX=A.z2(A.abo.A4C
);break;case 8:FX=A.z2(A.abo.AZA);break;case 9:FX=A.z2(A.abo.AIE);break;case 10:
FX=A.z2(A.abo.APz);break;case 11:FX=A.z2(A.abo.BE);break;case 12:FX=A.z2(A.abo.BB
);break;case 13:FX=A.z2(A.abo.A1J);break;case 14:FX=A.z2(A.abo.APA);break;case 15:
FX=A.z2(A.abo.APB);break;case 16:FX=A.z2(A.abo.AP8);break;case 0:FX=Ai6;break;default:
throw new Error(Aqd+Bl.toFixed());}return FX;},KN:function(A9){var Bl=A9;var FX=
A.jm;switch(Bl){case 1:FX=A.z2(A.abo.BhJ);break;case 2:FX=A.z2(A.abo.AKI);break;
case 3:FX=A.z2(A.abo.ANh);break;case 4:FX=A.z2(A.abo.AKH);break;case 5:FX=A.z2(A.
abo.Bdg);break;case 6:FX=A.z2(A.abo.HE);break;case 7:FX=A.z2(A.abo.Bhp);break;case
8:FX=A.z2(A.abo.Ban);break;case 9:FX=A.z2(A.abo.AIE);break;case 10:FX=A.z2(A.abo.
APz);break;case 11:FX=A.z2(A.abo.BE);break;case 12:FX=A.z2(A.abo.BB);break;case 13:
FX=A.z2(A.abo.Bc2);break;case 14:FX=A.z2(A.abo.APA);break;case 15:FX=A.z2(A.abo.
APB);break;case 16:FX=A.z2(A.abo.AP8);break;case 0:FX=Ai6;break;default:throw new
Error(Aqd+Bl.toFixed());}return FX;},BiU:function(A9){var Bl=A9;var Fz=-1;switch(
Bl){case 0:Fz=0;break;case 1:Fz=1;break;case 2:Fz=2;break;case 3:Fz=3;break;case
4:Fz=4;break;case 5:Fz=5;break;case 6:Fz=6;break;case 7:Fz=7;break;case 8:Fz=8;break;
case 9:Fz=9;break;case 10:Fz=10;break;case 11:Fz=11;break;case 12:Fz=12;break;case
13:Fz=13;break;case 14:Fz=14;break;case 15:Fz=15;break;case 16:Fz=16;break;default:
throw new Error(Aqd+Bl.toFixed());}return Fz;},BiV:function(A9){var Bl=A9;var Fz=
A.jm;switch(Bl){case 1:Fz=AT4;break;case 2:Fz=AT5;break;case 3:Fz=AT6;break;case
4:Fz=AT7;break;case 5:Fz=AT8;break;case 6:Fz=AT9;break;case 7:Fz=AT_;break;case 8:
Fz=AT$;break;case 9:Fz=AUa;break;case 10:Fz=AUb;break;case 11:Fz=Tn;break;case 12:
Fz=AUc;break;case 13:Fz=AUd;break;case 14:Fz=AEE;break;case 15:Fz=Yo;break;case 16:
Fz=AUe;break;case 0:Fz=Ai6;break;default:throw new Error(Aqd+Bl.toFixed());}return Fz;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={KN:function(A9){var
TH=A9;var ML=A.jm;switch(TH){case 0:ML=Avi;break;case 1:ML=AUf;break;default:throw new
Error(AEF+TH.toFixed());}return ML;},Cb:function(A9){var TH=A9;var ML=A.jm;switch(
TH){case 0:ML=A.z2(A.abg.Bg9);break;case 1:ML=A.z2(A.abg.Bi7);break;default:throw new
Error(AEF+TH.toFixed());}return ML;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.Bvj={Bw8:0,BwY:1,Bwa:2,Bwb:3,Bwc:4,Bx2:5};C.EnumToCodeset={Akv:function(Af6){
throw new Error(AUg+Af6.toFixed());},Aca:function(A9){throw new Error(Ap5+A9.toFixed(
));},An_:function(){A.aa8("%s",AEG);return 0;},HP:function(){A.aa8("%s",AEG);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.hJ++;},_Done:function(){
this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.MV={Akv:function(Af6){var Bn;switch(Af6){case 0:Bn=0;
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
Bn=97;break;case 111:Bn=98;break;default:Bn=0;}return Bn;},Aca:function(A9){var Bn=
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
AUh+Bn.toFixed());}return BH;},An_:function(){return 0;},HP:function(){return 111;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.MV;
},_className:"Device::BreedToHitCodeset"};C.ReasonOfLeaving={Unknown:0,A49:1,Sg:
2,A4x:3,A1o:4,Bxe:5,A5n:6,A1Q:7,AZU:8,A4u:9,A1O:10,AZX:11,Bxt:12,Bxu:13,LAST:14};
C.ReasonOfLeavingToString={Cb:function(A9){var Abv=A9;var Sa=A.jm;switch(Abv){case
0:Sa=A.z2(A.abg.Unknown);break;case 1:Sa=A.z2(A.abg.A49);break;case 2:Sa=A.z2(A.
abg.Sg);break;case 3:Sa=A.z2(A.abg.A4x);break;case 4:Sa=A.z2(A.abg.A1o);break;case
5:Sa=A.z2(A.abg.Bg_);break;case 6:Sa=A.z2(A.abg.A5n);break;case 7:Sa=A.z2(A.abg.
A1Q);break;case 8:Sa=A.z2(A.abg.AZU);break;case 9:Sa=A.z2(A.abg.A4u);break;case 10:
Sa=A.z2(A.abg.A1O);break;case 11:Sa=A.z2(A.abg.AZX);break;case 12:Sa=A.z2(A.abg.
Bhj);break;case 13:Sa=A.z2(A.abg.Bhi);break;default:throw new Error(AUi+Abv.toFixed(
));}return Sa;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.ReasonOfLeavingToString;},_className:"Device::ReasonOfLeavingToString"};C.AfF={
Akv:function(Af6){var NM;switch(Af6){case 0:NM=0;break;case 1:NM=1;break;case 2:
NM=2;break;case 3:NM=3;break;case 4:NM=4;break;case 5:NM=5;break;case 6:NM=6;break;
case 7:NM=7;break;case 8:NM=8;break;case 9:NM=9;break;case 10:NM=10;break;case 11:
NM=11;break;case 12:NM=12;break;case 13:NM=13;break;default:NM=0;}return NM;},Aca:
function(A9){var NM=A9;var IO=0;switch(NM){case 0:IO=0;break;case 2:IO=2;break;case
8:IO=8;break;case 11:IO=11;break;case 4:IO=4;break;case 10:IO=10;break;case 7:IO=
7;break;case 5:IO=5;break;case 9:IO=9;break;case 3:IO=3;break;case 12:IO=12;break;
case 13:IO=13;break;case 1:IO=1;break;case 6:IO=6;break;default:throw new Error(
Al_+NM.toFixed());}return IO;},An_:function(){return 0;},HP:function(){return 13;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AfF;
},_className:"Device::ReasonOfLeavingToCodeset"};C.AdE={Akv:function(Af6){var J3;
switch(Af6){case 0:J3=0;break;case 1:J3=1;break;case 2:J3=2;break;case 3:J3=3;break;
case 4:J3=4;break;case 5:J3=5;break;case 6:J3=6;break;case 7:J3=7;break;case 8:J3=
8;break;case 9:J3=9;break;case 10:J3=10;break;default:J3=0;}return J3;},Aca:function(
A9){var J3=A9;var IO=0;switch(J3){case 0:IO=0;break;case 2:IO=2;break;case 1:IO=
1;break;case 9:IO=9;break;case 6:IO=6;break;case 8:IO=8;break;case 7:IO=7;break;
case 5:IO=5;break;case 10:IO=10;break;case 4:IO=4;break;case 3:IO=3;break;default:
throw new Error(Al_+J3.toFixed());}return IO;},An_:function(){return 0;},HP:function(
){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=
C.AdE;},_className:"Device::WhereAboutsToCodeset"};C.AkD={_Init:function(aArg){this.
__proto__=C.AkD;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::EmptyClass"};C.CalfDeregistrationsTableFields={
Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={Deregistrations:0,Deaths:
0,Year:0,Fq:function(Z,AF){var G8=C.Row.Fq.call(this,Z,AF);if(G8&&!!AF){this.Ait(
AF.Cq(Z,0));this.Atr(AF.Cq(Z,1));this.Atq(AF.Cq(Z,2));}return G8;},Cs:function(AF
){var G8=C.Row.Cs.call(this,AF);if(G8&&!!AF){var IR=AF.NS();if(IR<=0)A.aa8("%s",
AaO);else{if(this.AkW())this.Cu=AF.WZ();AF.GJ(this.Cu,0,this.Year);AF.GJ(this.Cu
,1,this.Deregistrations);AF.GJ(this.Cu,2,this.Deaths);AF.NU(IR);}}return G8;},GG:
function(){C.Row.GG.call(this);this.Ait(-1);},G1:function(){C.Row.G1.call(this);
this.Ait(0);this.Atr(0);this.Atq(0);},Atr:function(E){if(this.Deregistrations===
E)return;this.Deregistrations=E;A.aat([this,this.Bd5,this.Atr],0);},Atq:function(
E){if(this.Deaths===E)return;this.Deaths=E;A.aat([this,this.Bd3,this.Atq],0);},Ait:
function(E){if(this.Year===E)return;this.Year=E;A.aat([this,this.AoM,this.Ait],0
);},Bd5:function(){return this.Deregistrations;},Bd3:function(){return this.Deaths;
},AoM:function(){return this.Year;},_Init:function(aArg){C.Row._Init.call(this,aArg
);this.__proto__=C.CalfDeregistrations;this.TableId=4;},_className:"Device::CalfDeregistrations"
};C.ArZ={Undefined:0,Display:1,A4B:2,A4O:3,A5F:4,Bwv:5,BxD:6,Byb:7,BwP:8,BvL:9,Bu_:
10,A0R:11,A4D:12,Byi:13,A1T:14,Byl:15};C.DeviceComponentToString={Cb:function(A9
){var A8h=A9;var Pn=A.jm;switch(A8h){case 0:Pn=Aqe;break;case 10:Pn=A.z2(A.abg.A$Z
);break;case 9:Pn=A.z2(A.abg.BaJ);break;case 1:Pn=A.z2(A.abg.Bbo);break;case 11:
Pn=A.z2(A.abg.A0R);break;case 5:Pn=A.z2(A.abg.Bjo);break;case 8:Pn=A.z2(A.abg.Bbp
);break;case 14:Pn=A.z2(A.abg.A1T);break;case 2:Pn=A.z2(A.abg.A4B);break;case 12:
Pn=A.z2(A.abg.A4D);break;case 6:Pn=A.z2(A.abg.Bho);break;case 3:Pn=A.z2(A.abg.A4O
);break;case 7:Pn=A.z2(A.abg.Bbq);break;case 13:Pn=A.z2(A.abg.Ba$);break;case 15:
Pn=A.z2(A.abg.Bjs);break;case 4:Pn=A.z2(A.abg.A5F);break;default:throw new Error(
Aqf+A8h.toFixed());}return Pn;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.DeviceComponentToString;},_className:"Device::DeviceComponentToString"
};C.AeT={Akv:function(Af6){return Af6;},Aca:function(A9){return A9;},An_:function(
){return 0;},HP:function(){return 4;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.AeT;},_className:"Device::EaseOfDeliveryToCodeset"
};C.AcM={ApP:function(A9){return A.zW(A.abi.ALK);},ApQ:function(A9){var A8s=A9;var
Qx=-1;switch(A8s){case 0:Qx=0;break;case 1:Qx=1;break;case 2:Qx=2;break;default:
throw new Error(Aqg+A8s.toFixed());}return Qx;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.AcM;},_className:"Device::MotherSelectionFilterModeToIcon"
};C.WhereAboutsFilterCriterion={AY:0,Ab_:function(){var As=A._NewObject(C.WhereAboutsFilterCriterion
,0);As.F$(this);return As;},F$:function(AK){C.FilterCriterion.F$.call(this,AK);var
As=(C.WhereAboutsFilterCriterion.isPrototypeOf(AK)?AK:null);if(!!As)this.AY=As.AY;
},Initialize:function(AR,En,A2,RX){this.EF=AR;this.Operator=En;this.AY=A2;this.ZM=
RX;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.WhereAboutsFilterCriterion;},_className:"Device::WhereAboutsFilterCriterion"
};C.Bw1={AJF:0,BvS:1,ALo:2,LAST:3};C.Bx4={GD:0,AQG:1,GF:2,Year:3,LAST:4};C.TimespanDaysToString={
Cb:function(A9){var A$B=A9;var AxQ=A.jm;switch(A$B){case 0:AxQ=A.z2(A.abg.AZ9);break;
case 1:AxQ=A.z2(A.abg.AQG);break;case 2:AxQ=A.z2(A.abg.GF);break;case 3:AxQ=A.z2(
A.abg.Year);break;default:throw new Error(Avj+A$B.toFixed());}return AxQ;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.AiT={Bxb:0,Bwx:1,BvX:2,Bwy:3,BvY:
4,LAST:5};C.USBStateToString={Cb:function(A9){var A$T=A9;var Bl=A.jm;switch(A$T){
case 0:Bl=Al$;break;case 1:Bl=AUj;break;case 2:Bl=AUk;break;case 4:Bl=AUl;break;
case 3:Bl=AUm;break;default:throw new Error(Ap$+A$T.toFixed());}return Bl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.USBStateToString;
},_className:"Device::USBStateToString"};C.AnV={Bww:0,Bvk:1};C.Aun={AyQ:A.jm,Timestamp:
0,AAs:0,AAy:0,ACy:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.
Timestamp=E;},ABz:function(E){if(this.AAs===E)return;this.AAs=E;},ABD:function(E
){if(this.AAy===E)return;this.AAy=E;},ABO:function(E){if(this.ACy===E)return;this.
ACy=E;},ABg:function(E){if(this.AyQ===E)return;this.AyQ=E;},_Init:function(aArg){
this.__proto__=C.Aun;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::SoftwareVersionInformation"
};C.Asq={Timestamp:0,AM$:0,ANa:0,AQn:0,AQo:0,AQm:0,AM_:0,OnSetTimestamp:function(
E){if(this.Timestamp===E)return;this.Timestamp=E;},ABw:function(E){if(this.AM$===
E)return;this.AM$=E;},ABx:function(E){if(this.ANa===E)return;this.ANa=E;},AB0:function(
E){if(this.AQn===E)return;this.AQn=E;},AB1:function(E){if(this.AQo===E)return;this.
AQo=E;},ABZ:function(E){if(this.AQm===E)return;this.AQm=E;},ABv:function(E){if(this.
AM_===E)return;this.AM_=E;},_Init:function(aArg){this.__proto__=C.Asq;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::HardwareVersionInformation"};C.AnN={Undefined:0,Bwl:1,Bvx:
2};C.AeC={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
Cb:function(A9){var A7N=A9;var AVP=A.jm;switch(A7N){case 0:AVP=A.z2(A.abg.BaR);break;
case 1:AVP=A.z2(A.abg.Ba7);break;default:throw new Error(AUn+A7N.toFixed());}return AVP;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdAutoGenerationMethodToString;
},_className:"Device::AnimalIdAutoGenerationMethodToString"};C.GF={AZN:0,AAi:1,Azb:
2,AAt:3,Ayh:4,AAv:5,AAk:6,AAj:7,Ayo:8,ACF:9,AAH:10,AAF:11,AyW:12,LAST:13};C.MonthToString={
Cb:function(A9){var A9q=A9;var VU=A.jm;switch(A9q){case 1:VU=A.z2(A.abu.AAi);break;
case 2:VU=A.z2(A.abu.Azb);break;case 3:VU=A.z2(A.abu.AAt);break;case 4:VU=A.z2(A.
abu.Ayh);break;case 5:VU=A.z2(A.abu.AAv);break;case 6:VU=A.z2(A.abu.AAk);break;case
7:VU=A.z2(A.abu.AAj);break;case 8:VU=A.z2(A.abu.Ayo);break;case 9:VU=A.z2(A.abu.
ACF);break;case 10:VU=A.z2(A.abu.AAH);break;case 11:VU=A.z2(A.abu.AAF);break;case
12:VU=A.z2(A.abu.AyW);break;default:throw new Error(AUo+A9q.toFixed());}return VU;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MonthToString;
},_className:"Device::MonthToString"};C.Ahr={FileName:A.jm,A4M:0,AnV:0,AC1:false
,_Init:function(aArg){this.__proto__=C.Ahr;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.Akm={Bws:0,BxU:1};C.AQN={Init:function(aArg){var B;A.za([this,this.A_w],[B=A.
_GetAutoObject(C.Device),B.A3c,B.A6X],0);this.A_w(this);},Cs:function(){A._GetAutoObject(
C.Device).Aph(this.toString());},A_w:function(H){this.Fq(A._GetAutoObject(C.Device
).ADp);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AQN;this.XJ(2);this.Init(aArg);},_className:"Device::WeightGainsLowClass"
};C.AQM={Init:function(aArg){var B;A.za([this,this.A_u],[B=A._GetAutoObject(C.Device
),B.A3b,B.A6W],0);this.A_u(this);},Cs:function(){A._GetAutoObject(C.Device).Apg(
this.toString());},A_u:function(H){this.Fq(A._GetAutoObject(C.Device).ADo);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQM;this.XJ(2);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.
AQP={Init:function(aArg){var B;A.za([this,this.A_y],[B=A._GetAutoObject(C.Device
),B.A3f,B.A60],0);this.A_y(this);},Cs:function(){A._GetAutoObject(C.Device).Api(
this.toString());},A_y:function(H){this.Fq(A._GetAutoObject(C.Device).ADr);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQP;this.XJ(2);this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};
C.AQL={Init:function(aArg){var B;A.za([this,this.A_s],[B=A._GetAutoObject(C.Device
),B.A3a,B.A6V],0);this.A_s(this);},Cs:function(){A._GetAutoObject(C.Device).Apf(
this.toString());},A_s:function(H){this.Fq(A._GetAutoObject(C.Device).ADn);A.vv(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AQL;this.XJ(2);this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};
C.AIt={Init:function(aArg){var B;A.za([this,this.A9U],[B=A._GetAutoObject(C.Device
),B.A2q,B.A6x],0);this.A9U(this);},A9U:function(H){this.Fq(A._GetAutoObject(C.Device
).Ayg);A.vv(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AIt;this.XJ(2);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.Bw4={Bw7:0,BwV:1,BvR:2,Byj:3,Unknown:4};C.Bvv={None:0,Bxc:1,Bw9:2,Bw5:3,Bw6:
4};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AkD;C.BoolFilterCriterion.__proto__=
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
C.AQe.__proto__=C.Int32ArrayWrapper;C.AQd.__proto__=C.Int32ArrayWrapper;C.AIs.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Ab8.__proto__=C.EnumToIcon;
C.AbO.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.MV.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.AfF.__proto__=C.EnumToCodeset;C.AdE.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AeT.__proto__=C.EnumToCodeset;C.AcM.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AQN.__proto__=C.Int32ArrayWrapper;C.AQM.
__proto__=C.Int32ArrayWrapper;C.AQP.__proto__=C.Int32ArrayWrapper;C.AQL.__proto__=
C.Int32ArrayWrapper;C.AIt.__proto__=C.Int32ArrayWrapper;};C._ReInit=function(){var
B;if((B=C.Device._this))B._ReInit();if((B=C.Converter._this))B._ReInit();if((B=C.
Helper._this))B._ReInit();};C.Dq=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */