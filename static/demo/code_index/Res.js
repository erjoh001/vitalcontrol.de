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

C.AMW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.AQA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Aq$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.ADP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.AQB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.Aju={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.NV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AvN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AvP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AMV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.ADD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AeC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.APU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.AQ0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AqO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ARJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.NW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.AQ1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQ2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.Sc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.TM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.Aez={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ALQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ADA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQ3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.E2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.ANm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AqD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ACB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ALY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AeD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.AeA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.AQq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.AQZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.ADN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AvO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ALU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AvJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AP3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ADG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.ALH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Ag7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.ADI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.AvI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.ADE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.Ara={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AjW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ADS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ADT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ADL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Kl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.APV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ANk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AMO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.Ajt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AQw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AMP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.Afe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.APW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ABU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.ADh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ADg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ADi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.APg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AQn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.YA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.Arc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.Aq6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.ALI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AjY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AQI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ALJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AQs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.AeB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AQG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AQH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Am3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ADR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.Am2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AQx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.AvM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ALK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AvQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ADH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AQT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.AQv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQ$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AQ_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AU8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AU_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.AU7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AnR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.AQk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.APY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.Gw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.ADF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AQK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AQo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.AQd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ALL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AP7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.APl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.APj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AQ6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQ7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQ8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQ9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ALM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AQe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ADM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ADC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AvG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AQa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.AP$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.APi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ALN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ABS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.AQV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.AP_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AQF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AvE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.AP0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalPassport.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AQW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTemperatureOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[46,40],FrameDelay:0,_this:
null}};C.AQu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHistoryOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[59,40],FrameDelay:0,_this:
null}};C.AQS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRemoveWatchOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[65,40],FrameDelay:0,_this:
null}};C.AQQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[76,40],FrameDelay:0,_this:
null}};C.AQR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRemoveAlarmOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[67,40],FrameDelay:0,_this:
null}};C.APS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionsOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[57,40],FrameDelay:0,_this:
null}};C.AQ5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[54,40],FrameDelay:0,_this:
null}};C.APO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionChainOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[63,40],FrameDelay:0,_this:
null}};C.AP2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAssignTransponderOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[62,40],FrameDelay:0,_this:
null}};C.AP8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,40],FrameDelay:0,_this:
null}};C.AQ4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingLbsOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[54,40],FrameDelay:0,_this:
null}};C.AQY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconToggleWatchOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[65,40],FrameDelay:0,_this:
null}};C.AQX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconToggleAlarmOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,40],FrameDelay:0,_this:
null}};C.AQy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkIDOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[63,40],FrameDelay:0,_this:
null}};C.AQz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkID_ScanOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[70,40],FrameDelay:0,_this:
null}};C.APR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionsLbsOnOk.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[57,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){var B;if((B=C.AMW[0].
_this)&&(B._cycle!=D))B._Done(C.AMW[0]._this=null);if((B=C.AQA[0]._this)&&(B._cycle
!=D))B._Done(C.AQA[0]._this=null);if((B=C.AQU[0]._this)&&(B._cycle!=D))B._Done(C.
AQU[0]._this=null);if((B=C.Aq$[0]._this)&&(B._cycle!=D))B._Done(C.Aq$[0]._this=null
);if((B=C.ADP[0]._this)&&(B._cycle!=D))B._Done(C.ADP[0]._this=null);if((B=C.AQB[
0]._this)&&(B._cycle!=D))B._Done(C.AQB[0]._this=null);if((B=C.Aju[0]._this)&&(B.
_cycle!=D))B._Done(C.Aju[0]._this=null);if((B=C.NV[0]._this)&&(B._cycle!=D))B._Done(
C.NV[0]._this=null);if((B=C.AvN[0]._this)&&(B._cycle!=D))B._Done(C.AvN[0]._this=
null);if((B=C.AvP[0]._this)&&(B._cycle!=D))B._Done(C.AvP[0]._this=null);if((B=C.
AMV[0]._this)&&(B._cycle!=D))B._Done(C.AMV[0]._this=null);if((B=C.ADD[0]._this)&&(
B._cycle!=D))B._Done(C.ADD[0]._this=null);if((B=C.AeC[0]._this)&&(B._cycle!=D))B.
_Done(C.AeC[0]._this=null);if((B=C.APU[0]._this)&&(B._cycle!=D))B._Done(C.APU[0].
_this=null);if((B=C.ADK[0]._this)&&(B._cycle!=D))B._Done(C.ADK[0]._this=null);if((
B=C.AQ0[0]._this)&&(B._cycle!=D))B._Done(C.AQ0[0]._this=null);if((B=C.AQc[0]._this
)&&(B._cycle!=D))B._Done(C.AQc[0]._this=null);if((B=C.AqO[0]._this)&&(B._cycle!=
D))B._Done(C.AqO[0]._this=null);if((B=C.ARJ[0]._this)&&(B._cycle!=D))B._Done(C.ARJ[
0]._this=null);if((B=C.NW[0]._this)&&(B._cycle!=D))B._Done(C.NW[0]._this=null);if((
B=C.AQ1[0]._this)&&(B._cycle!=D))B._Done(C.AQ1[0]._this=null);if((B=C.AQ2[0]._this
)&&(B._cycle!=D))B._Done(C.AQ2[0]._this=null);if((B=C.Sc[0]._this)&&(B._cycle!=D
))B._Done(C.Sc[0]._this=null);if((B=C.TM[0]._this)&&(B._cycle!=D))B._Done(C.TM[0
]._this=null);if((B=C.Aez[0]._this)&&(B._cycle!=D))B._Done(C.Aez[0]._this=null);
if((B=C.AQL[0]._this)&&(B._cycle!=D))B._Done(C.AQL[0]._this=null);if((B=C.AQM[0].
_this)&&(B._cycle!=D))B._Done(C.AQM[0]._this=null);if((B=C.ALQ[0]._this)&&(B._cycle
!=D))B._Done(C.ALQ[0]._this=null);if((B=C.ALP[0]._this)&&(B._cycle!=D))B._Done(C.
ALP[0]._this=null);if((B=C.ALR[0]._this)&&(B._cycle!=D))B._Done(C.ALR[0]._this=null
);if((B=C.ALS[0]._this)&&(B._cycle!=D))B._Done(C.ALS[0]._this=null);if((B=C.ALT[
0]._this)&&(B._cycle!=D))B._Done(C.ALT[0]._this=null);if((B=C.ALV[0]._this)&&(B.
_cycle!=D))B._Done(C.ALV[0]._this=null);if((B=C.ALW[0]._this)&&(B._cycle!=D))B._Done(
C.ALW[0]._this=null);if((B=C.ADA[0]._this)&&(B._cycle!=D))B._Done(C.ADA[0]._this=
null);if((B=C.AQ3[0]._this)&&(B._cycle!=D))B._Done(C.AQ3[0]._this=null);if((B=C.
APQ[0]._this)&&(B._cycle!=D))B._Done(C.APQ[0]._this=null);if((B=C.E2[0]._this)&&(
B._cycle!=D))B._Done(C.E2[0]._this=null);if((B=C.ANm[0]._this)&&(B._cycle!=D))B.
_Done(C.ANm[0]._this=null);if((B=C.AqD[0]._this)&&(B._cycle!=D))B._Done(C.AqD[0].
_this=null);if((B=C.ACB[0]._this)&&(B._cycle!=D))B._Done(C.ACB[0]._this=null);if((
B=C.ALY[0]._this)&&(B._cycle!=D))B._Done(C.ALY[0]._this=null);if((B=C.ALX[0]._this
)&&(B._cycle!=D))B._Done(C.ALX[0]._this=null);if((B=C.AeD[0]._this)&&(B._cycle!=
D))B._Done(C.AeD[0]._this=null);if((B=C.AeA[0]._this)&&(B._cycle!=D))B._Done(C.AeA[
0]._this=null);if((B=C.AQq[0]._this)&&(B._cycle!=D))B._Done(C.AQq[0]._this=null);
if((B=C.AQZ[0]._this)&&(B._cycle!=D))B._Done(C.AQZ[0]._this=null);if((B=C.ADN[0].
_this)&&(B._cycle!=D))B._Done(C.ADN[0]._this=null);if((B=C.AvO[0]._this)&&(B._cycle
!=D))B._Done(C.AvO[0]._this=null);if((B=C.ALU[0]._this)&&(B._cycle!=D))B._Done(C.
ALU[0]._this=null);if((B=C.AvJ[0]._this)&&(B._cycle!=D))B._Done(C.AvJ[0]._this=null
);if((B=C.AP3[0]._this)&&(B._cycle!=D))B._Done(C.AP3[0]._this=null);if((B=C.ADO[
0]._this)&&(B._cycle!=D))B._Done(C.ADO[0]._this=null);if((B=C.ADG[0]._this)&&(B.
_cycle!=D))B._Done(C.ADG[0]._this=null);if((B=C.ALH[0]._this)&&(B._cycle!=D))B._Done(
C.ALH[0]._this=null);if((B=C.Ag7[0]._this)&&(B._cycle!=D))B._Done(C.Ag7[0]._this=
null);if((B=C.ADI[0]._this)&&(B._cycle!=D))B._Done(C.ADI[0]._this=null);if((B=C.
AvI[0]._this)&&(B._cycle!=D))B._Done(C.AvI[0]._this=null);if((B=C.ADE[0]._this)&&(
B._cycle!=D))B._Done(C.ADE[0]._this=null);if((B=C.AQE[0]._this)&&(B._cycle!=D))B.
_Done(C.AQE[0]._this=null);if((B=C.Ara[0]._this)&&(B._cycle!=D))B._Done(C.Ara[0].
_this=null);if((B=C.AjW[0]._this)&&(B._cycle!=D))B._Done(C.AjW[0]._this=null);if((
B=C.ADS[0]._this)&&(B._cycle!=D))B._Done(C.ADS[0]._this=null);if((B=C.ADT[0]._this
)&&(B._cycle!=D))B._Done(C.ADT[0]._this=null);if((B=C.ADL[0]._this)&&(B._cycle!=
D))B._Done(C.ADL[0]._this=null);if((B=C.Kl[0]._this)&&(B._cycle!=D))B._Done(C.Kl[
0]._this=null);if((B=C.APV[0]._this)&&(B._cycle!=D))B._Done(C.APV[0]._this=null);
if((B=C.ANk[0]._this)&&(B._cycle!=D))B._Done(C.ANk[0]._this=null);if((B=C.AMO[0].
_this)&&(B._cycle!=D))B._Done(C.AMO[0]._this=null);if((B=C.Ajt[0]._this)&&(B._cycle
!=D))B._Done(C.Ajt[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.AQw[0]._this)&&(B._cycle!=D))B._Done(C.AQw[0]._this=null);if((
B=C.AMP[0]._this)&&(B._cycle!=D))B._Done(C.AMP[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.Afe[0]._this)&&(B._cycle!=
D))B._Done(C.Afe[0]._this=null);if((B=C.APW[0]._this)&&(B._cycle!=D))B._Done(C.APW[
0]._this=null);if((B=C.AP1[0]._this)&&(B._cycle!=D))B._Done(C.AP1[0]._this=null);
if((B=C.ABU[0]._this)&&(B._cycle!=D))B._Done(C.ABU[0]._this=null);if((B=C.ADh[0].
_this)&&(B._cycle!=D))B._Done(C.ADh[0]._this=null);if((B=C.ADg[0]._this)&&(B._cycle
!=D))B._Done(C.ADg[0]._this=null);if((B=C.ADi[0]._this)&&(B._cycle!=D))B._Done(C.
ADi[0]._this=null);if((B=C.APg[0]._this)&&(B._cycle!=D))B._Done(C.APg[0]._this=null
);if((B=C.AQn[0]._this)&&(B._cycle!=D))B._Done(C.AQn[0]._this=null);if((B=C.APh[
0]._this)&&(B._cycle!=D))B._Done(C.APh[0]._this=null);if((B=C.YA[0]._this)&&(B._cycle
!=D))B._Done(C.YA[0]._this=null);if((B=C.Arc[0]._this)&&(B._cycle!=D))B._Done(C.
Arc[0]._this=null);if((B=C.Aq6[0]._this)&&(B._cycle!=D))B._Done(C.Aq6[0]._this=null
);if((B=C.ALI[0]._this)&&(B._cycle!=D))B._Done(C.ALI[0]._this=null);if((B=C.AjY[
0]._this)&&(B._cycle!=D))B._Done(C.AjY[0]._this=null);if((B=C.AQI[0]._this)&&(B.
_cycle!=D))B._Done(C.AQI[0]._this=null);if((B=C.AQJ[0]._this)&&(B._cycle!=D))B._Done(
C.AQJ[0]._this=null);if((B=C.APo[0]._this)&&(B._cycle!=D))B._Done(C.APo[0]._this=
null);if((B=C.ALJ[0]._this)&&(B._cycle!=D))B._Done(C.ALJ[0]._this=null);if((B=C.
AQs[0]._this)&&(B._cycle!=D))B._Done(C.AQs[0]._this=null);if((B=C.AeB[0]._this)&&(
B._cycle!=D))B._Done(C.AeB[0]._this=null);if((B=C.AQG[0]._this)&&(B._cycle!=D))B.
_Done(C.AQG[0]._this=null);if((B=C.AvD[0]._this)&&(B._cycle!=D))B._Done(C.AvD[0].
_this=null);if((B=C.AQH[0]._this)&&(B._cycle!=D))B._Done(C.AQH[0]._this=null);if((
B=C.APn[0]._this)&&(B._cycle!=D))B._Done(C.APn[0]._this=null);if((B=C.Am3[0]._this
)&&(B._cycle!=D))B._Done(C.Am3[0]._this=null);if((B=C.ADR[0]._this)&&(B._cycle!=
D))B._Done(C.ADR[0]._this=null);if((B=C.Am2[0]._this)&&(B._cycle!=D))B._Done(C.Am2[
0]._this=null);if((B=C.AQx[0]._this)&&(B._cycle!=D))B._Done(C.AQx[0]._this=null);
if((B=C.AvM[0]._this)&&(B._cycle!=D))B._Done(C.AvM[0]._this=null);if((B=C.ALK[0].
_this)&&(B._cycle!=D))B._Done(C.ALK[0]._this=null);if((B=C.AvQ[0]._this)&&(B._cycle
!=D))B._Done(C.AvQ[0]._this=null);if((B=C.ADH[0]._this)&&(B._cycle!=D))B._Done(C.
ADH[0]._this=null);if((B=C.AQT[0]._this)&&(B._cycle!=D))B._Done(C.AQT[0]._this=null
);if((B=C.AQv[0]._this)&&(B._cycle!=D))B._Done(C.AQv[0]._this=null);if((B=C.AQf[
0]._this)&&(B._cycle!=D))B._Done(C.AQf[0]._this=null);if((B=C.APP[0]._this)&&(B.
_cycle!=D))B._Done(C.APP[0]._this=null);if((B=C.AQr[0]._this)&&(B._cycle!=D))B._Done(
C.AQr[0]._this=null);if((B=C.AQt[0]._this)&&(B._cycle!=D))B._Done(C.AQt[0]._this=
null);if((B=C.AQ$[0]._this)&&(B._cycle!=D))B._Done(C.AQ$[0]._this=null);if((B=C.
AQ_[0]._this)&&(B._cycle!=D))B._Done(C.AQ_[0]._this=null);if((B=C.AU8[0]._this)&&(
B._cycle!=D))B._Done(C.AU8[0]._this=null);if((B=C.AU_[0]._this)&&(B._cycle!=D))B.
_Done(C.AU_[0]._this=null);if((B=C.AU7[0]._this)&&(B._cycle!=D))B._Done(C.AU7[0].
_this=null);if((B=C.AnR[0]._this)&&(B._cycle!=D))B._Done(C.AnR[0]._this=null);if((
B=C.AQO[0]._this)&&(B._cycle!=D))B._Done(C.AQO[0]._this=null);if((B=C.AQk[0]._this
)&&(B._cycle!=D))B._Done(C.AQk[0]._this=null);if((B=C.AQh[0]._this)&&(B._cycle!=
D))B._Done(C.AQh[0]._this=null);if((B=C.AQi[0]._this)&&(B._cycle!=D))B._Done(C.AQi[
0]._this=null);if((B=C.AQg[0]._this)&&(B._cycle!=D))B._Done(C.AQg[0]._this=null);
if((B=C.AQj[0]._this)&&(B._cycle!=D))B._Done(C.AQj[0]._this=null);if((B=C.AQl[0].
_this)&&(B._cycle!=D))B._Done(C.AQl[0]._this=null);if((B=C.ADJ[0]._this)&&(B._cycle
!=D))B._Done(C.ADJ[0]._this=null);if((B=C.APY[0]._this)&&(B._cycle!=D))B._Done(C.
APY[0]._this=null);if((B=C.Gw[0]._this)&&(B._cycle!=D))B._Done(C.Gw[0]._this=null
);if((B=C.APZ[0]._this)&&(B._cycle!=D))B._Done(C.APZ[0]._this=null);if((B=C.ADF[
0]._this)&&(B._cycle!=D))B._Done(C.ADF[0]._this=null);if((B=C.AQp[0]._this)&&(B.
_cycle!=D))B._Done(C.AQp[0]._this=null);if((B=C.AQD[0]._this)&&(B._cycle!=D))B._Done(
C.AQD[0]._this=null);if((B=C.AQC[0]._this)&&(B._cycle!=D))B._Done(C.AQC[0]._this=
null);if((B=C.AQK[0]._this)&&(B._cycle!=D))B._Done(C.AQK[0]._this=null);if((B=C.
AQo[0]._this)&&(B._cycle!=D))B._Done(C.AQo[0]._this=null);if((B=C.AQd[0]._this)&&(
B._cycle!=D))B._Done(C.AQd[0]._this=null);if((B=C.ADf[0]._this)&&(B._cycle!=D))B.
_Done(C.ADf[0]._this=null);if((B=C.ALL[0]._this)&&(B._cycle!=D))B._Done(C.ALL[0].
_this=null);if((B=C.AP7[0]._this)&&(B._cycle!=D))B._Done(C.AP7[0]._this=null);if((
B=C.APl[0]._this)&&(B._cycle!=D))B._Done(C.APl[0]._this=null);if((B=C.APj[0]._this
)&&(B._cycle!=D))B._Done(C.APj[0]._this=null);if((B=C.APm[0]._this)&&(B._cycle!=
D))B._Done(C.APm[0]._this=null);if((B=C.APk[0]._this)&&(B._cycle!=D))B._Done(C.APk[
0]._this=null);if((B=C.AQ6[0]._this)&&(B._cycle!=D))B._Done(C.AQ6[0]._this=null);
if((B=C.AQ7[0]._this)&&(B._cycle!=D))B._Done(C.AQ7[0]._this=null);if((B=C.AP5[0].
_this)&&(B._cycle!=D))B._Done(C.AP5[0]._this=null);if((B=C.AP6[0]._this)&&(B._cycle
!=D))B._Done(C.AP6[0]._this=null);if((B=C.AQ8[0]._this)&&(B._cycle!=D))B._Done(C.
AQ8[0]._this=null);if((B=C.AQ9[0]._this)&&(B._cycle!=D))B._Done(C.AQ9[0]._this=null
);if((B=C.AP9[0]._this)&&(B._cycle!=D))B._Done(C.AP9[0]._this=null);if((B=C.APX[
0]._this)&&(B._cycle!=D))B._Done(C.APX[0]._this=null);if((B=C.ADQ[0]._this)&&(B.
_cycle!=D))B._Done(C.ADQ[0]._this=null);if((B=C.APp[0]._this)&&(B._cycle!=D))B._Done(
C.APp[0]._this=null);if((B=C.ALM[0]._this)&&(B._cycle!=D))B._Done(C.ALM[0]._this=
null);if((B=C.AQe[0]._this)&&(B._cycle!=D))B._Done(C.AQe[0]._this=null);if((B=C.
AvK[0]._this)&&(B._cycle!=D))B._Done(C.AvK[0]._this=null);if((B=C.AvF[0]._this)&&(
B._cycle!=D))B._Done(C.AvF[0]._this=null);if((B=C.ADM[0]._this)&&(B._cycle!=D))B.
_Done(C.ADM[0]._this=null);if((B=C.ADC[0]._this)&&(B._cycle!=D))B._Done(C.ADC[0].
_this=null);if((B=C.AvG[0]._this)&&(B._cycle!=D))B._Done(C.AvG[0]._this=null);if((
B=C.AQa[0]._this)&&(B._cycle!=D))B._Done(C.AQa[0]._this=null);if((B=C.AP$[0]._this
)&&(B._cycle!=D))B._Done(C.AP$[0]._this=null);if((B=C.AQP[0]._this)&&(B._cycle!=
D))B._Done(C.AQP[0]._this=null);if((B=C.APi[0]._this)&&(B._cycle!=D))B._Done(C.APi[
0]._this=null);if((B=C.ALN[0]._this)&&(B._cycle!=D))B._Done(C.ALN[0]._this=null);
if((B=C.ALO[0]._this)&&(B._cycle!=D))B._Done(C.ALO[0]._this=null);if((B=C.ABS[0].
_this)&&(B._cycle!=D))B._Done(C.ABS[0]._this=null);if((B=C.AQV[0]._this)&&(B._cycle
!=D))B._Done(C.AQV[0]._this=null);if((B=C.AP_[0]._this)&&(B._cycle!=D))B._Done(C.
AP_[0]._this=null);if((B=C.AQN[0]._this)&&(B._cycle!=D))B._Done(C.AQN[0]._this=null
);if((B=C.AQF[0]._this)&&(B._cycle!=D))B._Done(C.AQF[0]._this=null);if((B=C.APT[
0]._this)&&(B._cycle!=D))B._Done(C.APT[0]._this=null);if((B=C.AP4[0]._this)&&(B.
_cycle!=D))B._Done(C.AP4[0]._this=null);if((B=C.AvE[0]._this)&&(B._cycle!=D))B._Done(
C.AvE[0]._this=null);if((B=C.AP0[0]._this)&&(B._cycle!=D))B._Done(C.AP0[0]._this=
null);if((B=C.AQW[0]._this)&&(B._cycle!=D))B._Done(C.AQW[0]._this=null);if((B=C.
AQu[0]._this)&&(B._cycle!=D))B._Done(C.AQu[0]._this=null);if((B=C.AQS[0]._this)&&(
B._cycle!=D))B._Done(C.AQS[0]._this=null);if((B=C.AQQ[0]._this)&&(B._cycle!=D))B.
_Done(C.AQQ[0]._this=null);if((B=C.AQR[0]._this)&&(B._cycle!=D))B._Done(C.AQR[0].
_this=null);if((B=C.APS[0]._this)&&(B._cycle!=D))B._Done(C.APS[0]._this=null);if((
B=C.AQ5[0]._this)&&(B._cycle!=D))B._Done(C.AQ5[0]._this=null);if((B=C.APO[0]._this
)&&(B._cycle!=D))B._Done(C.APO[0]._this=null);if((B=C.AP2[0]._this)&&(B._cycle!=
D))B._Done(C.AP2[0]._this=null);if((B=C.AP8[0]._this)&&(B._cycle!=D))B._Done(C.AP8[
0]._this=null);if((B=C.AQ4[0]._this)&&(B._cycle!=D))B._Done(C.AQ4[0]._this=null);
if((B=C.AQY[0]._this)&&(B._cycle!=D))B._Done(C.AQY[0]._this=null);if((B=C.AQX[0].
_this)&&(B._cycle!=D))B._Done(C.AQX[0]._this=null);if((B=C.AQy[0]._this)&&(B._cycle
!=D))B._Done(C.AQy[0]._this=null);if((B=C.AQz[0]._this)&&(B._cycle!=D))B._Done(C.
AQz[0]._this=null);if((B=C.APR[0]._this)&&(B._cycle!=D))B._Done(C.APR[0]._this=null
);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */