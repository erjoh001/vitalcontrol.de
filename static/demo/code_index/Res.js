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
);if(index.ach)throw new Error("The unit file 'Res.js' included twice!");index.ach=(
function(){var A=index;var C={};

C.AMO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.AQm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Aq9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.ADG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.AQn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.Ajr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.NR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AvG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AvI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AMN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.ADt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.Aey={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.APL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.AQH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.AP3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AqN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ARo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.NS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.AQI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.R6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.TH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.Aev={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ALI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ADp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.API={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.E2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.ANd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AqC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ACr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ALQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AbC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.Aew={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.AQf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.AQG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.ADE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AvH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ALM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AvC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ADw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.ALz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AbD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.ADy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.AvB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.ADu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.Am2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AjV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AvK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AvL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ADC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Kh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.APM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ANb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AMG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ADB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AMH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.Afa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.APN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.APS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ABJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.AGj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Ask={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AC8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.AC7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AC9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AO$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.VZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.Aq$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.Aq4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.ALA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AjX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AQu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Avv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAddTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.APh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ALB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AQh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.Aex={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AQs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Avw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AQt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Am3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ADI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.Am1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AQk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.AvF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ALC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AvJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ADx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AQC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.AQj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AQP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[39,40],FrameDelay:0,_this:
null}};C.APU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.AUP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AUR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.AUO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AnS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.AP$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.APP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.Gr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.ADv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AQd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.AP4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AC6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ALD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ADs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.APe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.APc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AQL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AQl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Avy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ADD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ADr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Avz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.AP0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.APb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AQD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ABH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.AQF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.APZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Avx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.APR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalPassport.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){var B;if((B=C.AMO[0].
_this)&&(B._cycle!=D))B._Done(C.AMO[0]._this=null);if((B=C.AQm[0]._this)&&(B._cycle
!=D))B._Done(C.AQm[0]._this=null);if((B=C.AQE[0]._this)&&(B._cycle!=D))B._Done(C.
AQE[0]._this=null);if((B=C.Aq9[0]._this)&&(B._cycle!=D))B._Done(C.Aq9[0]._this=null
);if((B=C.ADG[0]._this)&&(B._cycle!=D))B._Done(C.ADG[0]._this=null);if((B=C.AQn[
0]._this)&&(B._cycle!=D))B._Done(C.AQn[0]._this=null);if((B=C.Ajr[0]._this)&&(B.
_cycle!=D))B._Done(C.Ajr[0]._this=null);if((B=C.NR[0]._this)&&(B._cycle!=D))B._Done(
C.NR[0]._this=null);if((B=C.AvG[0]._this)&&(B._cycle!=D))B._Done(C.AvG[0]._this=
null);if((B=C.AvI[0]._this)&&(B._cycle!=D))B._Done(C.AvI[0]._this=null);if((B=C.
AMN[0]._this)&&(B._cycle!=D))B._Done(C.AMN[0]._this=null);if((B=C.ADt[0]._this)&&(
B._cycle!=D))B._Done(C.ADt[0]._this=null);if((B=C.Aey[0]._this)&&(B._cycle!=D))B.
_Done(C.Aey[0]._this=null);if((B=C.APL[0]._this)&&(B._cycle!=D))B._Done(C.APL[0].
_this=null);if((B=C.ADA[0]._this)&&(B._cycle!=D))B._Done(C.ADA[0]._this=null);if((
B=C.AQH[0]._this)&&(B._cycle!=D))B._Done(C.AQH[0]._this=null);if((B=C.AP3[0]._this
)&&(B._cycle!=D))B._Done(C.AP3[0]._this=null);if((B=C.AqN[0]._this)&&(B._cycle!=
D))B._Done(C.AqN[0]._this=null);if((B=C.ARo[0]._this)&&(B._cycle!=D))B._Done(C.ARo[
0]._this=null);if((B=C.NS[0]._this)&&(B._cycle!=D))B._Done(C.NS[0]._this=null);if((
B=C.AQI[0]._this)&&(B._cycle!=D))B._Done(C.AQI[0]._this=null);if((B=C.AQJ[0]._this
)&&(B._cycle!=D))B._Done(C.AQJ[0]._this=null);if((B=C.R6[0]._this)&&(B._cycle!=D
))B._Done(C.R6[0]._this=null);if((B=C.TH[0]._this)&&(B._cycle!=D))B._Done(C.TH[0
]._this=null);if((B=C.Aev[0]._this)&&(B._cycle!=D))B._Done(C.Aev[0]._this=null);
if((B=C.AQx[0]._this)&&(B._cycle!=D))B._Done(C.AQx[0]._this=null);if((B=C.AQy[0].
_this)&&(B._cycle!=D))B._Done(C.AQy[0]._this=null);if((B=C.ALI[0]._this)&&(B._cycle
!=D))B._Done(C.ALI[0]._this=null);if((B=C.ALH[0]._this)&&(B._cycle!=D))B._Done(C.
ALH[0]._this=null);if((B=C.ALJ[0]._this)&&(B._cycle!=D))B._Done(C.ALJ[0]._this=null
);if((B=C.ALK[0]._this)&&(B._cycle!=D))B._Done(C.ALK[0]._this=null);if((B=C.ALL[
0]._this)&&(B._cycle!=D))B._Done(C.ALL[0]._this=null);if((B=C.ALN[0]._this)&&(B.
_cycle!=D))B._Done(C.ALN[0]._this=null);if((B=C.ALO[0]._this)&&(B._cycle!=D))B._Done(
C.ALO[0]._this=null);if((B=C.ADp[0]._this)&&(B._cycle!=D))B._Done(C.ADp[0]._this=
null);if((B=C.AQK[0]._this)&&(B._cycle!=D))B._Done(C.AQK[0]._this=null);if((B=C.
API[0]._this)&&(B._cycle!=D))B._Done(C.API[0]._this=null);if((B=C.E2[0]._this)&&(
B._cycle!=D))B._Done(C.E2[0]._this=null);if((B=C.ANd[0]._this)&&(B._cycle!=D))B.
_Done(C.ANd[0]._this=null);if((B=C.AqC[0]._this)&&(B._cycle!=D))B._Done(C.AqC[0].
_this=null);if((B=C.ACr[0]._this)&&(B._cycle!=D))B._Done(C.ACr[0]._this=null);if((
B=C.ALQ[0]._this)&&(B._cycle!=D))B._Done(C.ALQ[0]._this=null);if((B=C.ALP[0]._this
)&&(B._cycle!=D))B._Done(C.ALP[0]._this=null);if((B=C.AbC[0]._this)&&(B._cycle!=
D))B._Done(C.AbC[0]._this=null);if((B=C.Aew[0]._this)&&(B._cycle!=D))B._Done(C.Aew[
0]._this=null);if((B=C.AQf[0]._this)&&(B._cycle!=D))B._Done(C.AQf[0]._this=null);
if((B=C.AQG[0]._this)&&(B._cycle!=D))B._Done(C.AQG[0]._this=null);if((B=C.ADE[0].
_this)&&(B._cycle!=D))B._Done(C.ADE[0]._this=null);if((B=C.AvH[0]._this)&&(B._cycle
!=D))B._Done(C.AvH[0]._this=null);if((B=C.ALM[0]._this)&&(B._cycle!=D))B._Done(C.
ALM[0]._this=null);if((B=C.AvC[0]._this)&&(B._cycle!=D))B._Done(C.AvC[0]._this=null
);if((B=C.APT[0]._this)&&(B._cycle!=D))B._Done(C.APT[0]._this=null);if((B=C.ADF[
0]._this)&&(B._cycle!=D))B._Done(C.ADF[0]._this=null);if((B=C.ADw[0]._this)&&(B.
_cycle!=D))B._Done(C.ADw[0]._this=null);if((B=C.ALz[0]._this)&&(B._cycle!=D))B._Done(
C.ALz[0]._this=null);if((B=C.AbD[0]._this)&&(B._cycle!=D))B._Done(C.AbD[0]._this=
null);if((B=C.ADy[0]._this)&&(B._cycle!=D))B._Done(C.ADy[0]._this=null);if((B=C.
AvB[0]._this)&&(B._cycle!=D))B._Done(C.AvB[0]._this=null);if((B=C.ADu[0]._this)&&(
B._cycle!=D))B._Done(C.ADu[0]._this=null);if((B=C.AQq[0]._this)&&(B._cycle!=D))B.
_Done(C.AQq[0]._this=null);if((B=C.Am2[0]._this)&&(B._cycle!=D))B._Done(C.Am2[0].
_this=null);if((B=C.AjV[0]._this)&&(B._cycle!=D))B._Done(C.AjV[0]._this=null);if((
B=C.AvK[0]._this)&&(B._cycle!=D))B._Done(C.AvK[0]._this=null);if((B=C.AvL[0]._this
)&&(B._cycle!=D))B._Done(C.AvL[0]._this=null);if((B=C.ADC[0]._this)&&(B._cycle!=
D))B._Done(C.ADC[0]._this=null);if((B=C.Kh[0]._this)&&(B._cycle!=D))B._Done(C.Kh[
0]._this=null);if((B=C.APM[0]._this)&&(B._cycle!=D))B._Done(C.APM[0]._this=null);
if((B=C.ANb[0]._this)&&(B._cycle!=D))B._Done(C.ANb[0]._this=null);if((B=C.AMG[0].
_this)&&(B._cycle!=D))B._Done(C.AMG[0]._this=null);if((B=C.Ajq[0]._this)&&(B._cycle
!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.ADB[0]._this)&&(B._cycle!=D))B._Done(C.ADB[0]._this=null);if((
B=C.AMH[0]._this)&&(B._cycle!=D))B._Done(C.AMH[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.Afa[0]._this)&&(B._cycle!=
D))B._Done(C.Afa[0]._this=null);if((B=C.APN[0]._this)&&(B._cycle!=D))B._Done(C.APN[
0]._this=null);if((B=C.APS[0]._this)&&(B._cycle!=D))B._Done(C.APS[0]._this=null);
if((B=C.ABJ[0]._this)&&(B._cycle!=D))B._Done(C.ABJ[0]._this=null);if((B=C.AGj[0].
_this)&&(B._cycle!=D))B._Done(C.AGj[0]._this=null);if((B=C.Ask[0]._this)&&(B._cycle
!=D))B._Done(C.Ask[0]._this=null);if((B=C.AC8[0]._this)&&(B._cycle!=D))B._Done(C.
AC8[0]._this=null);if((B=C.AC7[0]._this)&&(B._cycle!=D))B._Done(C.AC7[0]._this=null
);if((B=C.AC9[0]._this)&&(B._cycle!=D))B._Done(C.AC9[0]._this=null);if((B=C.AO$[
0]._this)&&(B._cycle!=D))B._Done(C.AO$[0]._this=null);if((B=C.AQc[0]._this)&&(B.
_cycle!=D))B._Done(C.AQc[0]._this=null);if((B=C.APa[0]._this)&&(B._cycle!=D))B._Done(
C.APa[0]._this=null);if((B=C.VZ[0]._this)&&(B._cycle!=D))B._Done(C.VZ[0]._this=null
);if((B=C.Aq$[0]._this)&&(B._cycle!=D))B._Done(C.Aq$[0]._this=null);if((B=C.Aq4[
0]._this)&&(B._cycle!=D))B._Done(C.Aq4[0]._this=null);if((B=C.ALA[0]._this)&&(B.
_cycle!=D))B._Done(C.ALA[0]._this=null);if((B=C.AjX[0]._this)&&(B._cycle!=D))B._Done(
C.AjX[0]._this=null);if((B=C.AQu[0]._this)&&(B._cycle!=D))B._Done(C.AQu[0]._this=
null);if((B=C.AQv[0]._this)&&(B._cycle!=D))B._Done(C.AQv[0]._this=null);if((B=C.
Avv[0]._this)&&(B._cycle!=D))B._Done(C.Avv[0]._this=null);if((B=C.APh[0]._this)&&(
B._cycle!=D))B._Done(C.APh[0]._this=null);if((B=C.ALB[0]._this)&&(B._cycle!=D))B.
_Done(C.ALB[0]._this=null);if((B=C.AQh[0]._this)&&(B._cycle!=D))B._Done(C.AQh[0].
_this=null);if((B=C.Aex[0]._this)&&(B._cycle!=D))B._Done(C.Aex[0]._this=null);if((
B=C.AQs[0]._this)&&(B._cycle!=D))B._Done(C.AQs[0]._this=null);if((B=C.Avw[0]._this
)&&(B._cycle!=D))B._Done(C.Avw[0]._this=null);if((B=C.AQt[0]._this)&&(B._cycle!=
D))B._Done(C.AQt[0]._this=null);if((B=C.APg[0]._this)&&(B._cycle!=D))B._Done(C.APg[
0]._this=null);if((B=C.Am3[0]._this)&&(B._cycle!=D))B._Done(C.Am3[0]._this=null);
if((B=C.ADI[0]._this)&&(B._cycle!=D))B._Done(C.ADI[0]._this=null);if((B=C.Am1[0].
_this)&&(B._cycle!=D))B._Done(C.Am1[0]._this=null);if((B=C.AQk[0]._this)&&(B._cycle
!=D))B._Done(C.AQk[0]._this=null);if((B=C.AvF[0]._this)&&(B._cycle!=D))B._Done(C.
AvF[0]._this=null);if((B=C.ALC[0]._this)&&(B._cycle!=D))B._Done(C.ALC[0]._this=null
);if((B=C.AvJ[0]._this)&&(B._cycle!=D))B._Done(C.AvJ[0]._this=null);if((B=C.ADx[
0]._this)&&(B._cycle!=D))B._Done(C.ADx[0]._this=null);if((B=C.AQC[0]._this)&&(B.
_cycle!=D))B._Done(C.AQC[0]._this=null);if((B=C.AQj[0]._this)&&(B._cycle!=D))B._Done(
C.AQj[0]._this=null);if((B=C.AP6[0]._this)&&(B._cycle!=D))B._Done(C.AP6[0]._this=
null);if((B=C.APH[0]._this)&&(B._cycle!=D))B._Done(C.APH[0]._this=null);if((B=C.
AQg[0]._this)&&(B._cycle!=D))B._Done(C.AQg[0]._this=null);if((B=C.AQi[0]._this)&&(
B._cycle!=D))B._Done(C.AQi[0]._this=null);if((B=C.AQQ[0]._this)&&(B._cycle!=D))B.
_Done(C.AQQ[0]._this=null);if((B=C.AQP[0]._this)&&(B._cycle!=D))B._Done(C.AQP[0].
_this=null);if((B=C.APJ[0]._this)&&(B._cycle!=D))B._Done(C.APJ[0]._this=null);if((
B=C.APU[0]._this)&&(B._cycle!=D))B._Done(C.APU[0]._this=null);if((B=C.AUP[0]._this
)&&(B._cycle!=D))B._Done(C.AUP[0]._this=null);if((B=C.AUR[0]._this)&&(B._cycle!=
D))B._Done(C.AUR[0]._this=null);if((B=C.AUO[0]._this)&&(B._cycle!=D))B._Done(C.AUO[
0]._this=null);if((B=C.AnS[0]._this)&&(B._cycle!=D))B._Done(C.AnS[0]._this=null);
if((B=C.AQA[0]._this)&&(B._cycle!=D))B._Done(C.AQA[0]._this=null);if((B=C.AP$[0].
_this)&&(B._cycle!=D))B._Done(C.AP$[0]._this=null);if((B=C.AP8[0]._this)&&(B._cycle
!=D))B._Done(C.AP8[0]._this=null);if((B=C.AP9[0]._this)&&(B._cycle!=D))B._Done(C.
AP9[0]._this=null);if((B=C.AP7[0]._this)&&(B._cycle!=D))B._Done(C.AP7[0]._this=null
);if((B=C.AP_[0]._this)&&(B._cycle!=D))B._Done(C.AP_[0]._this=null);if((B=C.AQa[
0]._this)&&(B._cycle!=D))B._Done(C.AQa[0]._this=null);if((B=C.ADz[0]._this)&&(B.
_cycle!=D))B._Done(C.ADz[0]._this=null);if((B=C.APP[0]._this)&&(B._cycle!=D))B._Done(
C.APP[0]._this=null);if((B=C.Gr[0]._this)&&(B._cycle!=D))B._Done(C.Gr[0]._this=null
);if((B=C.APQ[0]._this)&&(B._cycle!=D))B._Done(C.APQ[0]._this=null);if((B=C.ADv[
0]._this)&&(B._cycle!=D))B._Done(C.ADv[0]._this=null);if((B=C.AQe[0]._this)&&(B.
_cycle!=D))B._Done(C.AQe[0]._this=null);if((B=C.AQp[0]._this)&&(B._cycle!=D))B._Done(
C.AQp[0]._this=null);if((B=C.AQo[0]._this)&&(B._cycle!=D))B._Done(C.AQo[0]._this=
null);if((B=C.AQw[0]._this)&&(B._cycle!=D))B._Done(C.AQw[0]._this=null);if((B=C.
AQd[0]._this)&&(B._cycle!=D))B._Done(C.AQd[0]._this=null);if((B=C.AP4[0]._this)&&(
B._cycle!=D))B._Done(C.AP4[0]._this=null);if((B=C.AC6[0]._this)&&(B._cycle!=D))B.
_Done(C.AC6[0]._this=null);if((B=C.ALD[0]._this)&&(B._cycle!=D))B._Done(C.ALD[0].
_this=null);if((B=C.ADs[0]._this)&&(B._cycle!=D))B._Done(C.ADs[0]._this=null);if((
B=C.APe[0]._this)&&(B._cycle!=D))B._Done(C.APe[0]._this=null);if((B=C.APc[0]._this
)&&(B._cycle!=D))B._Done(C.APc[0]._this=null);if((B=C.APf[0]._this)&&(B._cycle!=
D))B._Done(C.APf[0]._this=null);if((B=C.APd[0]._this)&&(B._cycle!=D))B._Done(C.APd[
0]._this=null);if((B=C.AQL[0]._this)&&(B._cycle!=D))B._Done(C.AQL[0]._this=null);
if((B=C.AQM[0]._this)&&(B._cycle!=D))B._Done(C.AQM[0]._this=null);if((B=C.APW[0].
_this)&&(B._cycle!=D))B._Done(C.APW[0]._this=null);if((B=C.APX[0]._this)&&(B._cycle
!=D))B._Done(C.APX[0]._this=null);if((B=C.AQN[0]._this)&&(B._cycle!=D))B._Done(C.
AQN[0]._this=null);if((B=C.AQO[0]._this)&&(B._cycle!=D))B._Done(C.AQO[0]._this=null
);if((B=C.APY[0]._this)&&(B._cycle!=D))B._Done(C.APY[0]._this=null);if((B=C.APO[
0]._this)&&(B._cycle!=D))B._Done(C.APO[0]._this=null);if((B=C.ADH[0]._this)&&(B.
_cycle!=D))B._Done(C.ADH[0]._this=null);if((B=C.APi[0]._this)&&(B._cycle!=D))B._Done(
C.APi[0]._this=null);if((B=C.AQl[0]._this)&&(B._cycle!=D))B._Done(C.AQl[0]._this=
null);if((B=C.ALE[0]._this)&&(B._cycle!=D))B._Done(C.ALE[0]._this=null);if((B=C.
AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0]._this=null);if((B=C.AvD[0]._this)&&(
B._cycle!=D))B._Done(C.AvD[0]._this=null);if((B=C.Avy[0]._this)&&(B._cycle!=D))B.
_Done(C.Avy[0]._this=null);if((B=C.ADD[0]._this)&&(B._cycle!=D))B._Done(C.ADD[0].
_this=null);if((B=C.ADr[0]._this)&&(B._cycle!=D))B._Done(C.ADr[0]._this=null);if((
B=C.Avz[0]._this)&&(B._cycle!=D))B._Done(C.Avz[0]._this=null);if((B=C.AP1[0]._this
)&&(B._cycle!=D))B._Done(C.AP1[0]._this=null);if((B=C.AP0[0]._this)&&(B._cycle!=
D))B._Done(C.AP0[0]._this=null);if((B=C.AQB[0]._this)&&(B._cycle!=D))B._Done(C.AQB[
0]._this=null);if((B=C.APb[0]._this)&&(B._cycle!=D))B._Done(C.APb[0]._this=null);
if((B=C.AQD[0]._this)&&(B._cycle!=D))B._Done(C.AQD[0]._this=null);if((B=C.ALF[0].
_this)&&(B._cycle!=D))B._Done(C.ALF[0]._this=null);if((B=C.ALG[0]._this)&&(B._cycle
!=D))B._Done(C.ALG[0]._this=null);if((B=C.ABH[0]._this)&&(B._cycle!=D))B._Done(C.
ABH[0]._this=null);if((B=C.AQF[0]._this)&&(B._cycle!=D))B._Done(C.AQF[0]._this=null
);if((B=C.APZ[0]._this)&&(B._cycle!=D))B._Done(C.APZ[0]._this=null);if((B=C.AQz[
0]._this)&&(B._cycle!=D))B._Done(C.AQz[0]._this=null);if((B=C.AQr[0]._this)&&(B.
_cycle!=D))B._Done(C.AQr[0]._this=null);if((B=C.APK[0]._this)&&(B._cycle!=D))B._Done(
C.APK[0]._this=null);if((B=C.APV[0]._this)&&(B._cycle!=D))B._Done(C.APV[0]._this=
null);if((B=C.Avx[0]._this)&&(B._cycle!=D))B._Done(C.Avx[0]._this=null);if((B=C.
APR[0]._this)&&(B._cycle!=D))B._Done(C.APR[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */