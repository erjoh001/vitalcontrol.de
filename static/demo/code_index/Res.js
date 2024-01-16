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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.ach)throw new Error("The unit file 'Res.js' included twice!");index.ach=(
function(){var A=index;var C={};

C.AKX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.AOu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Aqa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.ACa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.AOv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.AlQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.NC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AuE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AuG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AKW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.ABZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AdR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.ANS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AB6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.AOP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.AN$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ApS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.ND={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.AOQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AOR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.RK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.Tj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.AdO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AOF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AOG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AJU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJ0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ABV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.ET={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.ALm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ApJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.AA0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.AJ2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJ1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AaT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.AdP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.AOn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.AOO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.AB_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AuF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AJY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AuA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ANZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AB$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AB2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.AJL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AaU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.AB4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.Auz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.AB0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AOy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.Amj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Ajj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AuI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AuJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AB8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.J2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.ANT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ALl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AKR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AiN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AB7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AKS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.Aep={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.ANU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ANY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AAk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.AEI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Arm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ABE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ABD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ABF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.ANg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AOk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Vs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.Aqc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.Ap7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.AJM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Aml={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AOC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AOD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Auv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAddTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ANo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AJN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AOp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.AdQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AOA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ABW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AOB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Amk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.Ami={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AOs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.AuD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AJO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AuH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AB3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AOK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.AOr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AOc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AOq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AOY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AOX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ANQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[39,40],FrameDelay:0,_this:
null}};C.AN0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.ASD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.ASF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.ASC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.Am_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AOI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.AOh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AB5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ANW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.Tv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ANX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.AB1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AOm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AOx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AOw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AOE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AOl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.AOa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ABC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AJP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AN5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.ANl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ANj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ANm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ANk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AN3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AN4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AN6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AOt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AJQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AOb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AuB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Auw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AB9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ABY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Aux={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AN9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.AN8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AOJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.ANi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AJR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AJS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AAh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.AON={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.AN7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AOz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AN2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AN1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.Dz=function(D){var B;if((B=C.AKX[0].
_this)&&(B._cycle!=D))B._Done(C.AKX[0]._this=null);if((B=C.AOu[0]._this)&&(B._cycle
!=D))B._Done(C.AOu[0]._this=null);if((B=C.AOM[0]._this)&&(B._cycle!=D))B._Done(C.
AOM[0]._this=null);if((B=C.Aqa[0]._this)&&(B._cycle!=D))B._Done(C.Aqa[0]._this=null
);if((B=C.ACa[0]._this)&&(B._cycle!=D))B._Done(C.ACa[0]._this=null);if((B=C.AOv[
0]._this)&&(B._cycle!=D))B._Done(C.AOv[0]._this=null);if((B=C.AlQ[0]._this)&&(B.
_cycle!=D))B._Done(C.AlQ[0]._this=null);if((B=C.NC[0]._this)&&(B._cycle!=D))B._Done(
C.NC[0]._this=null);if((B=C.AuE[0]._this)&&(B._cycle!=D))B._Done(C.AuE[0]._this=
null);if((B=C.AuG[0]._this)&&(B._cycle!=D))B._Done(C.AuG[0]._this=null);if((B=C.
AKW[0]._this)&&(B._cycle!=D))B._Done(C.AKW[0]._this=null);if((B=C.ABZ[0]._this)&&(
B._cycle!=D))B._Done(C.ABZ[0]._this=null);if((B=C.AdR[0]._this)&&(B._cycle!=D))B.
_Done(C.AdR[0]._this=null);if((B=C.ANS[0]._this)&&(B._cycle!=D))B._Done(C.ANS[0].
_this=null);if((B=C.AB6[0]._this)&&(B._cycle!=D))B._Done(C.AB6[0]._this=null);if((
B=C.AOP[0]._this)&&(B._cycle!=D))B._Done(C.AOP[0]._this=null);if((B=C.AN$[0]._this
)&&(B._cycle!=D))B._Done(C.AN$[0]._this=null);if((B=C.ApS[0]._this)&&(B._cycle!=
D))B._Done(C.ApS[0]._this=null);if((B=C.APt[0]._this)&&(B._cycle!=D))B._Done(C.APt[
0]._this=null);if((B=C.ND[0]._this)&&(B._cycle!=D))B._Done(C.ND[0]._this=null);if((
B=C.AOQ[0]._this)&&(B._cycle!=D))B._Done(C.AOQ[0]._this=null);if((B=C.AOR[0]._this
)&&(B._cycle!=D))B._Done(C.AOR[0]._this=null);if((B=C.RK[0]._this)&&(B._cycle!=D
))B._Done(C.RK[0]._this=null);if((B=C.Tj[0]._this)&&(B._cycle!=D))B._Done(C.Tj[0
]._this=null);if((B=C.AdO[0]._this)&&(B._cycle!=D))B._Done(C.AdO[0]._this=null);
if((B=C.AOF[0]._this)&&(B._cycle!=D))B._Done(C.AOF[0]._this=null);if((B=C.AOG[0].
_this)&&(B._cycle!=D))B._Done(C.AOG[0]._this=null);if((B=C.AJU[0]._this)&&(B._cycle
!=D))B._Done(C.AJU[0]._this=null);if((B=C.AJT[0]._this)&&(B._cycle!=D))B._Done(C.
AJT[0]._this=null);if((B=C.AJV[0]._this)&&(B._cycle!=D))B._Done(C.AJV[0]._this=null
);if((B=C.AJW[0]._this)&&(B._cycle!=D))B._Done(C.AJW[0]._this=null);if((B=C.AJX[
0]._this)&&(B._cycle!=D))B._Done(C.AJX[0]._this=null);if((B=C.AJZ[0]._this)&&(B.
_cycle!=D))B._Done(C.AJZ[0]._this=null);if((B=C.AJ0[0]._this)&&(B._cycle!=D))B._Done(
C.AJ0[0]._this=null);if((B=C.ABV[0]._this)&&(B._cycle!=D))B._Done(C.ABV[0]._this=
null);if((B=C.AOS[0]._this)&&(B._cycle!=D))B._Done(C.AOS[0]._this=null);if((B=C.
ANP[0]._this)&&(B._cycle!=D))B._Done(C.ANP[0]._this=null);if((B=C.ET[0]._this)&&(
B._cycle!=D))B._Done(C.ET[0]._this=null);if((B=C.ALm[0]._this)&&(B._cycle!=D))B.
_Done(C.ALm[0]._this=null);if((B=C.ApJ[0]._this)&&(B._cycle!=D))B._Done(C.ApJ[0].
_this=null);if((B=C.AA0[0]._this)&&(B._cycle!=D))B._Done(C.AA0[0]._this=null);if((
B=C.AJ2[0]._this)&&(B._cycle!=D))B._Done(C.AJ2[0]._this=null);if((B=C.AJ1[0]._this
)&&(B._cycle!=D))B._Done(C.AJ1[0]._this=null);if((B=C.AaT[0]._this)&&(B._cycle!=
D))B._Done(C.AaT[0]._this=null);if((B=C.AdP[0]._this)&&(B._cycle!=D))B._Done(C.AdP[
0]._this=null);if((B=C.AOn[0]._this)&&(B._cycle!=D))B._Done(C.AOn[0]._this=null);
if((B=C.AOO[0]._this)&&(B._cycle!=D))B._Done(C.AOO[0]._this=null);if((B=C.AB_[0].
_this)&&(B._cycle!=D))B._Done(C.AB_[0]._this=null);if((B=C.AuF[0]._this)&&(B._cycle
!=D))B._Done(C.AuF[0]._this=null);if((B=C.AJY[0]._this)&&(B._cycle!=D))B._Done(C.
AJY[0]._this=null);if((B=C.AuA[0]._this)&&(B._cycle!=D))B._Done(C.AuA[0]._this=null
);if((B=C.ANZ[0]._this)&&(B._cycle!=D))B._Done(C.ANZ[0]._this=null);if((B=C.AB$[
0]._this)&&(B._cycle!=D))B._Done(C.AB$[0]._this=null);if((B=C.AB2[0]._this)&&(B.
_cycle!=D))B._Done(C.AB2[0]._this=null);if((B=C.AJL[0]._this)&&(B._cycle!=D))B._Done(
C.AJL[0]._this=null);if((B=C.AaU[0]._this)&&(B._cycle!=D))B._Done(C.AaU[0]._this=
null);if((B=C.AB4[0]._this)&&(B._cycle!=D))B._Done(C.AB4[0]._this=null);if((B=C.
Auz[0]._this)&&(B._cycle!=D))B._Done(C.Auz[0]._this=null);if((B=C.AB0[0]._this)&&(
B._cycle!=D))B._Done(C.AB0[0]._this=null);if((B=C.AOy[0]._this)&&(B._cycle!=D))B.
_Done(C.AOy[0]._this=null);if((B=C.Amj[0]._this)&&(B._cycle!=D))B._Done(C.Amj[0].
_this=null);if((B=C.Ajj[0]._this)&&(B._cycle!=D))B._Done(C.Ajj[0]._this=null);if((
B=C.AuI[0]._this)&&(B._cycle!=D))B._Done(C.AuI[0]._this=null);if((B=C.AuJ[0]._this
)&&(B._cycle!=D))B._Done(C.AuJ[0]._this=null);if((B=C.AB8[0]._this)&&(B._cycle!=
D))B._Done(C.AB8[0]._this=null);if((B=C.J2[0]._this)&&(B._cycle!=D))B._Done(C.J2[
0]._this=null);if((B=C.ANT[0]._this)&&(B._cycle!=D))B._Done(C.ANT[0]._this=null);
if((B=C.ALl[0]._this)&&(B._cycle!=D))B._Done(C.ALl[0]._this=null);if((B=C.AKR[0].
_this)&&(B._cycle!=D))B._Done(C.AKR[0]._this=null);if((B=C.AiN[0]._this)&&(B._cycle
!=D))B._Done(C.AiN[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.AB7[0]._this)&&(B._cycle!=D))B._Done(C.AB7[0]._this=null);if((
B=C.AKS[0]._this)&&(B._cycle!=D))B._Done(C.AKS[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.Aep[0]._this)&&(B._cycle!=
D))B._Done(C.Aep[0]._this=null);if((B=C.ANU[0]._this)&&(B._cycle!=D))B._Done(C.ANU[
0]._this=null);if((B=C.ANY[0]._this)&&(B._cycle!=D))B._Done(C.ANY[0]._this=null);
if((B=C.AAk[0]._this)&&(B._cycle!=D))B._Done(C.AAk[0]._this=null);if((B=C.AEI[0].
_this)&&(B._cycle!=D))B._Done(C.AEI[0]._this=null);if((B=C.Arm[0]._this)&&(B._cycle
!=D))B._Done(C.Arm[0]._this=null);if((B=C.ABE[0]._this)&&(B._cycle!=D))B._Done(C.
ABE[0]._this=null);if((B=C.ABD[0]._this)&&(B._cycle!=D))B._Done(C.ABD[0]._this=null
);if((B=C.ABF[0]._this)&&(B._cycle!=D))B._Done(C.ABF[0]._this=null);if((B=C.ANg[
0]._this)&&(B._cycle!=D))B._Done(C.ANg[0]._this=null);if((B=C.AOk[0]._this)&&(B.
_cycle!=D))B._Done(C.AOk[0]._this=null);if((B=C.ANh[0]._this)&&(B._cycle!=D))B._Done(
C.ANh[0]._this=null);if((B=C.Vs[0]._this)&&(B._cycle!=D))B._Done(C.Vs[0]._this=null
);if((B=C.Aqc[0]._this)&&(B._cycle!=D))B._Done(C.Aqc[0]._this=null);if((B=C.Ap7[
0]._this)&&(B._cycle!=D))B._Done(C.Ap7[0]._this=null);if((B=C.AJM[0]._this)&&(B.
_cycle!=D))B._Done(C.AJM[0]._this=null);if((B=C.Aml[0]._this)&&(B._cycle!=D))B._Done(
C.Aml[0]._this=null);if((B=C.AOC[0]._this)&&(B._cycle!=D))B._Done(C.AOC[0]._this=
null);if((B=C.AOD[0]._this)&&(B._cycle!=D))B._Done(C.AOD[0]._this=null);if((B=C.
Auv[0]._this)&&(B._cycle!=D))B._Done(C.Auv[0]._this=null);if((B=C.ANo[0]._this)&&(
B._cycle!=D))B._Done(C.ANo[0]._this=null);if((B=C.AJN[0]._this)&&(B._cycle!=D))B.
_Done(C.AJN[0]._this=null);if((B=C.AOp[0]._this)&&(B._cycle!=D))B._Done(C.AOp[0].
_this=null);if((B=C.AdQ[0]._this)&&(B._cycle!=D))B._Done(C.AdQ[0]._this=null);if((
B=C.AOA[0]._this)&&(B._cycle!=D))B._Done(C.AOA[0]._this=null);if((B=C.ABW[0]._this
)&&(B._cycle!=D))B._Done(C.ABW[0]._this=null);if((B=C.AOB[0]._this)&&(B._cycle!=
D))B._Done(C.AOB[0]._this=null);if((B=C.ANn[0]._this)&&(B._cycle!=D))B._Done(C.ANn[
0]._this=null);if((B=C.Amk[0]._this)&&(B._cycle!=D))B._Done(C.Amk[0]._this=null);
if((B=C.ACc[0]._this)&&(B._cycle!=D))B._Done(C.ACc[0]._this=null);if((B=C.Ami[0].
_this)&&(B._cycle!=D))B._Done(C.Ami[0]._this=null);if((B=C.AOs[0]._this)&&(B._cycle
!=D))B._Done(C.AOs[0]._this=null);if((B=C.AuD[0]._this)&&(B._cycle!=D))B._Done(C.
AuD[0]._this=null);if((B=C.AJO[0]._this)&&(B._cycle!=D))B._Done(C.AJO[0]._this=null
);if((B=C.AuH[0]._this)&&(B._cycle!=D))B._Done(C.AuH[0]._this=null);if((B=C.AB3[
0]._this)&&(B._cycle!=D))B._Done(C.AB3[0]._this=null);if((B=C.AOK[0]._this)&&(B.
_cycle!=D))B._Done(C.AOK[0]._this=null);if((B=C.AOr[0]._this)&&(B._cycle!=D))B._Done(
C.AOr[0]._this=null);if((B=C.AOc[0]._this)&&(B._cycle!=D))B._Done(C.AOc[0]._this=
null);if((B=C.ANO[0]._this)&&(B._cycle!=D))B._Done(C.ANO[0]._this=null);if((B=C.
AOo[0]._this)&&(B._cycle!=D))B._Done(C.AOo[0]._this=null);if((B=C.AOq[0]._this)&&(
B._cycle!=D))B._Done(C.AOq[0]._this=null);if((B=C.AOY[0]._this)&&(B._cycle!=D))B.
_Done(C.AOY[0]._this=null);if((B=C.AOX[0]._this)&&(B._cycle!=D))B._Done(C.AOX[0].
_this=null);if((B=C.ANQ[0]._this)&&(B._cycle!=D))B._Done(C.ANQ[0]._this=null);if((
B=C.AN0[0]._this)&&(B._cycle!=D))B._Done(C.AN0[0]._this=null);if((B=C.ASD[0]._this
)&&(B._cycle!=D))B._Done(C.ASD[0]._this=null);if((B=C.ASF[0]._this)&&(B._cycle!=
D))B._Done(C.ASF[0]._this=null);if((B=C.ASC[0]._this)&&(B._cycle!=D))B._Done(C.ASC[
0]._this=null);if((B=C.Am_[0]._this)&&(B._cycle!=D))B._Done(C.Am_[0]._this=null);
if((B=C.AOI[0]._this)&&(B._cycle!=D))B._Done(C.AOI[0]._this=null);if((B=C.AOh[0].
_this)&&(B._cycle!=D))B._Done(C.AOh[0]._this=null);if((B=C.AOe[0]._this)&&(B._cycle
!=D))B._Done(C.AOe[0]._this=null);if((B=C.AOf[0]._this)&&(B._cycle!=D))B._Done(C.
AOf[0]._this=null);if((B=C.AOd[0]._this)&&(B._cycle!=D))B._Done(C.AOd[0]._this=null
);if((B=C.AOg[0]._this)&&(B._cycle!=D))B._Done(C.AOg[0]._this=null);if((B=C.AOi[
0]._this)&&(B._cycle!=D))B._Done(C.AOi[0]._this=null);if((B=C.AB5[0]._this)&&(B.
_cycle!=D))B._Done(C.AB5[0]._this=null);if((B=C.ANW[0]._this)&&(B._cycle!=D))B._Done(
C.ANW[0]._this=null);if((B=C.Tv[0]._this)&&(B._cycle!=D))B._Done(C.Tv[0]._this=null
);if((B=C.ANX[0]._this)&&(B._cycle!=D))B._Done(C.ANX[0]._this=null);if((B=C.AB1[
0]._this)&&(B._cycle!=D))B._Done(C.AB1[0]._this=null);if((B=C.AOm[0]._this)&&(B.
_cycle!=D))B._Done(C.AOm[0]._this=null);if((B=C.AOx[0]._this)&&(B._cycle!=D))B._Done(
C.AOx[0]._this=null);if((B=C.AOw[0]._this)&&(B._cycle!=D))B._Done(C.AOw[0]._this=
null);if((B=C.AOE[0]._this)&&(B._cycle!=D))B._Done(C.AOE[0]._this=null);if((B=C.
AOl[0]._this)&&(B._cycle!=D))B._Done(C.AOl[0]._this=null);if((B=C.AOa[0]._this)&&(
B._cycle!=D))B._Done(C.AOa[0]._this=null);if((B=C.ABC[0]._this)&&(B._cycle!=D))B.
_Done(C.ABC[0]._this=null);if((B=C.AJP[0]._this)&&(B._cycle!=D))B._Done(C.AJP[0].
_this=null);if((B=C.AN5[0]._this)&&(B._cycle!=D))B._Done(C.AN5[0]._this=null);if((
B=C.ANl[0]._this)&&(B._cycle!=D))B._Done(C.ANl[0]._this=null);if((B=C.ANj[0]._this
)&&(B._cycle!=D))B._Done(C.ANj[0]._this=null);if((B=C.ANm[0]._this)&&(B._cycle!=
D))B._Done(C.ANm[0]._this=null);if((B=C.ANk[0]._this)&&(B._cycle!=D))B._Done(C.ANk[
0]._this=null);if((B=C.AOT[0]._this)&&(B._cycle!=D))B._Done(C.AOT[0]._this=null);
if((B=C.AOU[0]._this)&&(B._cycle!=D))B._Done(C.AOU[0]._this=null);if((B=C.AN3[0].
_this)&&(B._cycle!=D))B._Done(C.AN3[0]._this=null);if((B=C.AN4[0]._this)&&(B._cycle
!=D))B._Done(C.AN4[0]._this=null);if((B=C.AOV[0]._this)&&(B._cycle!=D))B._Done(C.
AOV[0]._this=null);if((B=C.AOW[0]._this)&&(B._cycle!=D))B._Done(C.AOW[0]._this=null
);if((B=C.AN6[0]._this)&&(B._cycle!=D))B._Done(C.AN6[0]._this=null);if((B=C.ANV[
0]._this)&&(B._cycle!=D))B._Done(C.ANV[0]._this=null);if((B=C.ACb[0]._this)&&(B.
_cycle!=D))B._Done(C.ACb[0]._this=null);if((B=C.ANp[0]._this)&&(B._cycle!=D))B._Done(
C.ANp[0]._this=null);if((B=C.AOt[0]._this)&&(B._cycle!=D))B._Done(C.AOt[0]._this=
null);if((B=C.AJQ[0]._this)&&(B._cycle!=D))B._Done(C.AJQ[0]._this=null);if((B=C.
AOb[0]._this)&&(B._cycle!=D))B._Done(C.AOb[0]._this=null);if((B=C.AuB[0]._this)&&(
B._cycle!=D))B._Done(C.AuB[0]._this=null);if((B=C.Auw[0]._this)&&(B._cycle!=D))B.
_Done(C.Auw[0]._this=null);if((B=C.AB9[0]._this)&&(B._cycle!=D))B._Done(C.AB9[0].
_this=null);if((B=C.ABY[0]._this)&&(B._cycle!=D))B._Done(C.ABY[0]._this=null);if((
B=C.Aux[0]._this)&&(B._cycle!=D))B._Done(C.Aux[0]._this=null);if((B=C.AN9[0]._this
)&&(B._cycle!=D))B._Done(C.AN9[0]._this=null);if((B=C.AN8[0]._this)&&(B._cycle!=
D))B._Done(C.AN8[0]._this=null);if((B=C.AOJ[0]._this)&&(B._cycle!=D))B._Done(C.AOJ[
0]._this=null);if((B=C.ANi[0]._this)&&(B._cycle!=D))B._Done(C.ANi[0]._this=null);
if((B=C.AOL[0]._this)&&(B._cycle!=D))B._Done(C.AOL[0]._this=null);if((B=C.AJR[0].
_this)&&(B._cycle!=D))B._Done(C.AJR[0]._this=null);if((B=C.AJS[0]._this)&&(B._cycle
!=D))B._Done(C.AJS[0]._this=null);if((B=C.AAh[0]._this)&&(B._cycle!=D))B._Done(C.
AAh[0]._this=null);if((B=C.AON[0]._this)&&(B._cycle!=D))B._Done(C.AON[0]._this=null
);if((B=C.AN7[0]._this)&&(B._cycle!=D))B._Done(C.AN7[0]._this=null);if((B=C.AOH[
0]._this)&&(B._cycle!=D))B._Done(C.AOH[0]._this=null);if((B=C.AOz[0]._this)&&(B.
_cycle!=D))B._Done(C.AOz[0]._this=null);if((B=C.ANR[0]._this)&&(B._cycle!=D))B._Done(
C.ANR[0]._this=null);if((B=C.AN2[0]._this)&&(B._cycle!=D))B._Done(C.AN2[0]._this=
null);if((B=C.AN1[0]._this)&&(B._cycle!=D))B._Done(C.AN1[0]._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */