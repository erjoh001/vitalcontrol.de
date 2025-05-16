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
);if(index.ach)throw new Error("The unit file 'Res.js' included twice!");index.ach=(
function(){var A=index;var C={};

C.AM6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.AQK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQ4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Ari={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.AD3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.AQL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.Ajv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.N0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AvQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AvS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AM5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.ADR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AeF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.AP4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.AQ_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.AQm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AqW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ARV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.N1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.AQ$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ARa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Sg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.TU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.AeC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AL1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ADO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ARb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.E2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.ANw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AqL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ACP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.AL9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AL8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AeG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.AeD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.AQA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.AQ9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.AD1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AvR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AL5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AvM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AD2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ADU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.ALS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Ag8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.ADW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.AvL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.ADS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.Arj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AjW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AD6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AD7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ADZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Kp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ANu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AMZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.Aju={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AQG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AM0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.Afg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.AP6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AP$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AB7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.ADv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ADu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ADw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.APq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AQx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.YI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.Arl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.Ard={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.ALT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AjY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AQS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ALU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AQC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.AeE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AQQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AQR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Am7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AD5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.Am6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AQH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.AvP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ALV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AvT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ADV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AQ3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.AQF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.ARj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.ARi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AVm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AVo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.AVl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AnV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.AQu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AP8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.Gw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.ADT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AQy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.AQn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ALW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AQf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.APv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.APt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ARe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ARf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ARg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ARh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AD4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ALX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AQo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AD0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ADQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AQk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.AQj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.APs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ALY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AB5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.AQ5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.AQi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Arc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.AP_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalPassport.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AQ6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTemperatureOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[46,40],FrameDelay:0,_this:
null}};C.AQE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHistoryOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[59,40],FrameDelay:0,_this:
null}};C.AQ2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRemoveWatchOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[65,40],FrameDelay:0,_this:
null}};C.AQ0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[76,40],FrameDelay:0,_this:
null}};C.AQ1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRemoveAlarmOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[67,40],FrameDelay:0,_this:
null}};C.AP2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionsOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[57,40],FrameDelay:0,_this:
null}};C.ARd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[54,40],FrameDelay:0,_this:
null}};C.APY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionChainOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[63,40],FrameDelay:0,_this:
null}};C.AQa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAssignTransponderOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[62,40],FrameDelay:0,_this:
null}};C.AQg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,40],FrameDelay:0,_this:
null}};C.ARc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingLbsOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[54,40],FrameDelay:0,_this:
null}};C.AQ8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconToggleWatchOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[65,40],FrameDelay:0,_this:
null}};C.AQ7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconToggleAlarmOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,40],FrameDelay:0,_this:
null}};C.AQI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkIDOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[63,40],FrameDelay:0,_this:
null}};C.AQJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkID_ScanOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[70,40],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionsLbsOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[57,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.DI=function(D){var B;if((B=C.AM6[0].
_this)&&(B._cycle!=D))B._Done(C.AM6[0]._this=null);if((B=C.AQK[0]._this)&&(B._cycle
!=D))B._Done(C.AQK[0]._this=null);if((B=C.AQ4[0]._this)&&(B._cycle!=D))B._Done(C.
AQ4[0]._this=null);if((B=C.Ari[0]._this)&&(B._cycle!=D))B._Done(C.Ari[0]._this=null
);if((B=C.AD3[0]._this)&&(B._cycle!=D))B._Done(C.AD3[0]._this=null);if((B=C.AQL[
0]._this)&&(B._cycle!=D))B._Done(C.AQL[0]._this=null);if((B=C.Ajv[0]._this)&&(B.
_cycle!=D))B._Done(C.Ajv[0]._this=null);if((B=C.N0[0]._this)&&(B._cycle!=D))B._Done(
C.N0[0]._this=null);if((B=C.AvQ[0]._this)&&(B._cycle!=D))B._Done(C.AvQ[0]._this=
null);if((B=C.AvS[0]._this)&&(B._cycle!=D))B._Done(C.AvS[0]._this=null);if((B=C.
AM5[0]._this)&&(B._cycle!=D))B._Done(C.AM5[0]._this=null);if((B=C.ADR[0]._this)&&(
B._cycle!=D))B._Done(C.ADR[0]._this=null);if((B=C.AeF[0]._this)&&(B._cycle!=D))B.
_Done(C.AeF[0]._this=null);if((B=C.AP4[0]._this)&&(B._cycle!=D))B._Done(C.AP4[0].
_this=null);if((B=C.ADY[0]._this)&&(B._cycle!=D))B._Done(C.ADY[0]._this=null);if((
B=C.AQ_[0]._this)&&(B._cycle!=D))B._Done(C.AQ_[0]._this=null);if((B=C.AQm[0]._this
)&&(B._cycle!=D))B._Done(C.AQm[0]._this=null);if((B=C.AqW[0]._this)&&(B._cycle!=
D))B._Done(C.AqW[0]._this=null);if((B=C.ARV[0]._this)&&(B._cycle!=D))B._Done(C.ARV[
0]._this=null);if((B=C.N1[0]._this)&&(B._cycle!=D))B._Done(C.N1[0]._this=null);if((
B=C.AQ$[0]._this)&&(B._cycle!=D))B._Done(C.AQ$[0]._this=null);if((B=C.ARa[0]._this
)&&(B._cycle!=D))B._Done(C.ARa[0]._this=null);if((B=C.Sg[0]._this)&&(B._cycle!=D
))B._Done(C.Sg[0]._this=null);if((B=C.TU[0]._this)&&(B._cycle!=D))B._Done(C.TU[0
]._this=null);if((B=C.AeC[0]._this)&&(B._cycle!=D))B._Done(C.AeC[0]._this=null);
if((B=C.AQV[0]._this)&&(B._cycle!=D))B._Done(C.AQV[0]._this=null);if((B=C.AQW[0].
_this)&&(B._cycle!=D))B._Done(C.AQW[0]._this=null);if((B=C.AL1[0]._this)&&(B._cycle
!=D))B._Done(C.AL1[0]._this=null);if((B=C.AL0[0]._this)&&(B._cycle!=D))B._Done(C.
AL0[0]._this=null);if((B=C.AL2[0]._this)&&(B._cycle!=D))B._Done(C.AL2[0]._this=null
);if((B=C.AL3[0]._this)&&(B._cycle!=D))B._Done(C.AL3[0]._this=null);if((B=C.AL4[
0]._this)&&(B._cycle!=D))B._Done(C.AL4[0]._this=null);if((B=C.AL6[0]._this)&&(B.
_cycle!=D))B._Done(C.AL6[0]._this=null);if((B=C.AL7[0]._this)&&(B._cycle!=D))B._Done(
C.AL7[0]._this=null);if((B=C.ADO[0]._this)&&(B._cycle!=D))B._Done(C.ADO[0]._this=
null);if((B=C.ARb[0]._this)&&(B._cycle!=D))B._Done(C.ARb[0]._this=null);if((B=C.
AP0[0]._this)&&(B._cycle!=D))B._Done(C.AP0[0]._this=null);if((B=C.E2[0]._this)&&(
B._cycle!=D))B._Done(C.E2[0]._this=null);if((B=C.ANw[0]._this)&&(B._cycle!=D))B.
_Done(C.ANw[0]._this=null);if((B=C.AqL[0]._this)&&(B._cycle!=D))B._Done(C.AqL[0].
_this=null);if((B=C.ACP[0]._this)&&(B._cycle!=D))B._Done(C.ACP[0]._this=null);if((
B=C.AL9[0]._this)&&(B._cycle!=D))B._Done(C.AL9[0]._this=null);if((B=C.AL8[0]._this
)&&(B._cycle!=D))B._Done(C.AL8[0]._this=null);if((B=C.AeG[0]._this)&&(B._cycle!=
D))B._Done(C.AeG[0]._this=null);if((B=C.AeD[0]._this)&&(B._cycle!=D))B._Done(C.AeD[
0]._this=null);if((B=C.AQA[0]._this)&&(B._cycle!=D))B._Done(C.AQA[0]._this=null);
if((B=C.AQ9[0]._this)&&(B._cycle!=D))B._Done(C.AQ9[0]._this=null);if((B=C.AD1[0].
_this)&&(B._cycle!=D))B._Done(C.AD1[0]._this=null);if((B=C.AvR[0]._this)&&(B._cycle
!=D))B._Done(C.AvR[0]._this=null);if((B=C.AL5[0]._this)&&(B._cycle!=D))B._Done(C.
AL5[0]._this=null);if((B=C.AvM[0]._this)&&(B._cycle!=D))B._Done(C.AvM[0]._this=null
);if((B=C.AQb[0]._this)&&(B._cycle!=D))B._Done(C.AQb[0]._this=null);if((B=C.AD2[
0]._this)&&(B._cycle!=D))B._Done(C.AD2[0]._this=null);if((B=C.ADU[0]._this)&&(B.
_cycle!=D))B._Done(C.ADU[0]._this=null);if((B=C.ALS[0]._this)&&(B._cycle!=D))B._Done(
C.ALS[0]._this=null);if((B=C.Ag8[0]._this)&&(B._cycle!=D))B._Done(C.Ag8[0]._this=
null);if((B=C.ADW[0]._this)&&(B._cycle!=D))B._Done(C.ADW[0]._this=null);if((B=C.
AvL[0]._this)&&(B._cycle!=D))B._Done(C.AvL[0]._this=null);if((B=C.ADS[0]._this)&&(
B._cycle!=D))B._Done(C.ADS[0]._this=null);if((B=C.AQO[0]._this)&&(B._cycle!=D))B.
_Done(C.AQO[0]._this=null);if((B=C.Arj[0]._this)&&(B._cycle!=D))B._Done(C.Arj[0].
_this=null);if((B=C.AjW[0]._this)&&(B._cycle!=D))B._Done(C.AjW[0]._this=null);if((
B=C.AD6[0]._this)&&(B._cycle!=D))B._Done(C.AD6[0]._this=null);if((B=C.AD7[0]._this
)&&(B._cycle!=D))B._Done(C.AD7[0]._this=null);if((B=C.ADZ[0]._this)&&(B._cycle!=
D))B._Done(C.ADZ[0]._this=null);if((B=C.Kp[0]._this)&&(B._cycle!=D))B._Done(C.Kp[
0]._this=null);if((B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0]._this=null);
if((B=C.ANu[0]._this)&&(B._cycle!=D))B._Done(C.ANu[0]._this=null);if((B=C.AMZ[0].
_this)&&(B._cycle!=D))B._Done(C.AMZ[0]._this=null);if((B=C.Aju[0]._this)&&(B._cycle
!=D))B._Done(C.Aju[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.AQG[0]._this)&&(B._cycle!=D))B._Done(C.AQG[0]._this=null);if((
B=C.AM0[0]._this)&&(B._cycle!=D))B._Done(C.AM0[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.Afg[0]._this)&&(B._cycle!=
D))B._Done(C.Afg[0]._this=null);if((B=C.AP6[0]._this)&&(B._cycle!=D))B._Done(C.AP6[
0]._this=null);if((B=C.AP$[0]._this)&&(B._cycle!=D))B._Done(C.AP$[0]._this=null);
if((B=C.AB7[0]._this)&&(B._cycle!=D))B._Done(C.AB7[0]._this=null);if((B=C.ADv[0].
_this)&&(B._cycle!=D))B._Done(C.ADv[0]._this=null);if((B=C.ADu[0]._this)&&(B._cycle
!=D))B._Done(C.ADu[0]._this=null);if((B=C.ADw[0]._this)&&(B._cycle!=D))B._Done(C.
ADw[0]._this=null);if((B=C.APq[0]._this)&&(B._cycle!=D))B._Done(C.APq[0]._this=null
);if((B=C.AQx[0]._this)&&(B._cycle!=D))B._Done(C.AQx[0]._this=null);if((B=C.APr[
0]._this)&&(B._cycle!=D))B._Done(C.APr[0]._this=null);if((B=C.YI[0]._this)&&(B._cycle
!=D))B._Done(C.YI[0]._this=null);if((B=C.Arl[0]._this)&&(B._cycle!=D))B._Done(C.
Arl[0]._this=null);if((B=C.Ard[0]._this)&&(B._cycle!=D))B._Done(C.Ard[0]._this=null
);if((B=C.ALT[0]._this)&&(B._cycle!=D))B._Done(C.ALT[0]._this=null);if((B=C.AjY[
0]._this)&&(B._cycle!=D))B._Done(C.AjY[0]._this=null);if((B=C.AQS[0]._this)&&(B.
_cycle!=D))B._Done(C.AQS[0]._this=null);if((B=C.AQT[0]._this)&&(B._cycle!=D))B._Done(
C.AQT[0]._this=null);if((B=C.APy[0]._this)&&(B._cycle!=D))B._Done(C.APy[0]._this=
null);if((B=C.ALU[0]._this)&&(B._cycle!=D))B._Done(C.ALU[0]._this=null);if((B=C.
AQC[0]._this)&&(B._cycle!=D))B._Done(C.AQC[0]._this=null);if((B=C.AeE[0]._this)&&(
B._cycle!=D))B._Done(C.AeE[0]._this=null);if((B=C.AQQ[0]._this)&&(B._cycle!=D))B.
_Done(C.AQQ[0]._this=null);if((B=C.AvH[0]._this)&&(B._cycle!=D))B._Done(C.AvH[0].
_this=null);if((B=C.AQR[0]._this)&&(B._cycle!=D))B._Done(C.AQR[0]._this=null);if((
B=C.APx[0]._this)&&(B._cycle!=D))B._Done(C.APx[0]._this=null);if((B=C.Am7[0]._this
)&&(B._cycle!=D))B._Done(C.Am7[0]._this=null);if((B=C.AD5[0]._this)&&(B._cycle!=
D))B._Done(C.AD5[0]._this=null);if((B=C.Am6[0]._this)&&(B._cycle!=D))B._Done(C.Am6[
0]._this=null);if((B=C.AQH[0]._this)&&(B._cycle!=D))B._Done(C.AQH[0]._this=null);
if((B=C.AvP[0]._this)&&(B._cycle!=D))B._Done(C.AvP[0]._this=null);if((B=C.ALV[0].
_this)&&(B._cycle!=D))B._Done(C.ALV[0]._this=null);if((B=C.AvT[0]._this)&&(B._cycle
!=D))B._Done(C.AvT[0]._this=null);if((B=C.ADV[0]._this)&&(B._cycle!=D))B._Done(C.
ADV[0]._this=null);if((B=C.AQ3[0]._this)&&(B._cycle!=D))B._Done(C.AQ3[0]._this=null
);if((B=C.AQF[0]._this)&&(B._cycle!=D))B._Done(C.AQF[0]._this=null);if((B=C.AQp[
0]._this)&&(B._cycle!=D))B._Done(C.AQp[0]._this=null);if((B=C.APZ[0]._this)&&(B.
_cycle!=D))B._Done(C.APZ[0]._this=null);if((B=C.AQB[0]._this)&&(B._cycle!=D))B._Done(
C.AQB[0]._this=null);if((B=C.AQD[0]._this)&&(B._cycle!=D))B._Done(C.AQD[0]._this=
null);if((B=C.ARj[0]._this)&&(B._cycle!=D))B._Done(C.ARj[0]._this=null);if((B=C.
ARi[0]._this)&&(B._cycle!=D))B._Done(C.ARi[0]._this=null);if((B=C.AVm[0]._this)&&(
B._cycle!=D))B._Done(C.AVm[0]._this=null);if((B=C.AVo[0]._this)&&(B._cycle!=D))B.
_Done(C.AVo[0]._this=null);if((B=C.AVl[0]._this)&&(B._cycle!=D))B._Done(C.AVl[0].
_this=null);if((B=C.AnV[0]._this)&&(B._cycle!=D))B._Done(C.AnV[0]._this=null);if((
B=C.AQY[0]._this)&&(B._cycle!=D))B._Done(C.AQY[0]._this=null);if((B=C.AQu[0]._this
)&&(B._cycle!=D))B._Done(C.AQu[0]._this=null);if((B=C.AQr[0]._this)&&(B._cycle!=
D))B._Done(C.AQr[0]._this=null);if((B=C.AQs[0]._this)&&(B._cycle!=D))B._Done(C.AQs[
0]._this=null);if((B=C.AQq[0]._this)&&(B._cycle!=D))B._Done(C.AQq[0]._this=null);
if((B=C.AQt[0]._this)&&(B._cycle!=D))B._Done(C.AQt[0]._this=null);if((B=C.AQv[0].
_this)&&(B._cycle!=D))B._Done(C.AQv[0]._this=null);if((B=C.ADX[0]._this)&&(B._cycle
!=D))B._Done(C.ADX[0]._this=null);if((B=C.AP8[0]._this)&&(B._cycle!=D))B._Done(C.
AP8[0]._this=null);if((B=C.Gw[0]._this)&&(B._cycle!=D))B._Done(C.Gw[0]._this=null
);if((B=C.AP9[0]._this)&&(B._cycle!=D))B._Done(C.AP9[0]._this=null);if((B=C.ADT[
0]._this)&&(B._cycle!=D))B._Done(C.ADT[0]._this=null);if((B=C.AQz[0]._this)&&(B.
_cycle!=D))B._Done(C.AQz[0]._this=null);if((B=C.AQN[0]._this)&&(B._cycle!=D))B._Done(
C.AQN[0]._this=null);if((B=C.AQM[0]._this)&&(B._cycle!=D))B._Done(C.AQM[0]._this=
null);if((B=C.AQU[0]._this)&&(B._cycle!=D))B._Done(C.AQU[0]._this=null);if((B=C.
AQy[0]._this)&&(B._cycle!=D))B._Done(C.AQy[0]._this=null);if((B=C.AQn[0]._this)&&(
B._cycle!=D))B._Done(C.AQn[0]._this=null);if((B=C.ADt[0]._this)&&(B._cycle!=D))B.
_Done(C.ADt[0]._this=null);if((B=C.ALW[0]._this)&&(B._cycle!=D))B._Done(C.ALW[0].
_this=null);if((B=C.AQf[0]._this)&&(B._cycle!=D))B._Done(C.AQf[0]._this=null);if((
B=C.APv[0]._this)&&(B._cycle!=D))B._Done(C.APv[0]._this=null);if((B=C.APt[0]._this
)&&(B._cycle!=D))B._Done(C.APt[0]._this=null);if((B=C.APw[0]._this)&&(B._cycle!=
D))B._Done(C.APw[0]._this=null);if((B=C.APu[0]._this)&&(B._cycle!=D))B._Done(C.APu[
0]._this=null);if((B=C.ARe[0]._this)&&(B._cycle!=D))B._Done(C.ARe[0]._this=null);
if((B=C.ARf[0]._this)&&(B._cycle!=D))B._Done(C.ARf[0]._this=null);if((B=C.AQd[0].
_this)&&(B._cycle!=D))B._Done(C.AQd[0]._this=null);if((B=C.AQe[0]._this)&&(B._cycle
!=D))B._Done(C.AQe[0]._this=null);if((B=C.ARg[0]._this)&&(B._cycle!=D))B._Done(C.
ARg[0]._this=null);if((B=C.ARh[0]._this)&&(B._cycle!=D))B._Done(C.ARh[0]._this=null
);if((B=C.AQh[0]._this)&&(B._cycle!=D))B._Done(C.AQh[0]._this=null);if((B=C.AP7[
0]._this)&&(B._cycle!=D))B._Done(C.AP7[0]._this=null);if((B=C.AD4[0]._this)&&(B.
_cycle!=D))B._Done(C.AD4[0]._this=null);if((B=C.APz[0]._this)&&(B._cycle!=D))B._Done(
C.APz[0]._this=null);if((B=C.ALX[0]._this)&&(B._cycle!=D))B._Done(C.ALX[0]._this=
null);if((B=C.AQo[0]._this)&&(B._cycle!=D))B._Done(C.AQo[0]._this=null);if((B=C.
AvN[0]._this)&&(B._cycle!=D))B._Done(C.AvN[0]._this=null);if((B=C.AvI[0]._this)&&(
B._cycle!=D))B._Done(C.AvI[0]._this=null);if((B=C.AD0[0]._this)&&(B._cycle!=D))B.
_Done(C.AD0[0]._this=null);if((B=C.ADQ[0]._this)&&(B._cycle!=D))B._Done(C.ADQ[0].
_this=null);if((B=C.AvJ[0]._this)&&(B._cycle!=D))B._Done(C.AvJ[0]._this=null);if((
B=C.AQk[0]._this)&&(B._cycle!=D))B._Done(C.AQk[0]._this=null);if((B=C.AQj[0]._this
)&&(B._cycle!=D))B._Done(C.AQj[0]._this=null);if((B=C.AQZ[0]._this)&&(B._cycle!=
D))B._Done(C.AQZ[0]._this=null);if((B=C.APs[0]._this)&&(B._cycle!=D))B._Done(C.APs[
0]._this=null);if((B=C.ALY[0]._this)&&(B._cycle!=D))B._Done(C.ALY[0]._this=null);
if((B=C.ALZ[0]._this)&&(B._cycle!=D))B._Done(C.ALZ[0]._this=null);if((B=C.AB5[0].
_this)&&(B._cycle!=D))B._Done(C.AB5[0]._this=null);if((B=C.AQ5[0]._this)&&(B._cycle
!=D))B._Done(C.AQ5[0]._this=null);if((B=C.AQi[0]._this)&&(B._cycle!=D))B._Done(C.
AQi[0]._this=null);if((B=C.AQX[0]._this)&&(B._cycle!=D))B._Done(C.AQX[0]._this=null
);if((B=C.AQP[0]._this)&&(B._cycle!=D))B._Done(C.AQP[0]._this=null);if((B=C.AP3[
0]._this)&&(B._cycle!=D))B._Done(C.AP3[0]._this=null);if((B=C.AQc[0]._this)&&(B.
_cycle!=D))B._Done(C.AQc[0]._this=null);if((B=C.Arc[0]._this)&&(B._cycle!=D))B._Done(
C.Arc[0]._this=null);if((B=C.AP_[0]._this)&&(B._cycle!=D))B._Done(C.AP_[0]._this=
null);if((B=C.AQ6[0]._this)&&(B._cycle!=D))B._Done(C.AQ6[0]._this=null);if((B=C.
AQE[0]._this)&&(B._cycle!=D))B._Done(C.AQE[0]._this=null);if((B=C.AQ2[0]._this)&&(
B._cycle!=D))B._Done(C.AQ2[0]._this=null);if((B=C.AQ0[0]._this)&&(B._cycle!=D))B.
_Done(C.AQ0[0]._this=null);if((B=C.AQ1[0]._this)&&(B._cycle!=D))B._Done(C.AQ1[0].
_this=null);if((B=C.AP2[0]._this)&&(B._cycle!=D))B._Done(C.AP2[0]._this=null);if((
B=C.ARd[0]._this)&&(B._cycle!=D))B._Done(C.ARd[0]._this=null);if((B=C.APY[0]._this
)&&(B._cycle!=D))B._Done(C.APY[0]._this=null);if((B=C.AQa[0]._this)&&(B._cycle!=
D))B._Done(C.AQa[0]._this=null);if((B=C.AQg[0]._this)&&(B._cycle!=D))B._Done(C.AQg[
0]._this=null);if((B=C.ARc[0]._this)&&(B._cycle!=D))B._Done(C.ARc[0]._this=null);
if((B=C.AQ8[0]._this)&&(B._cycle!=D))B._Done(C.AQ8[0]._this=null);if((B=C.AQ7[0].
_this)&&(B._cycle!=D))B._Done(C.AQ7[0]._this=null);if((B=C.AQI[0]._this)&&(B._cycle
!=D))B._Done(C.AQI[0]._this=null);if((B=C.AQJ[0]._this)&&(B._cycle!=D))B._Done(C.
AQJ[0]._this=null);if((B=C.AP1[0]._this)&&(B._cycle!=D))B._Done(C.AP1[0]._this=null
);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */