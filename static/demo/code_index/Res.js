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

C.ALt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.AO2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Aqp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.ACC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.AO3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.Al3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.NH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.Au2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.Au4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.ALs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.ACp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.Ad0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.AOo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.APl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.AOH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Ap7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.NI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.APm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.RO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.Tq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.AdX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AKo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ACl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.EV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.ALU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ApY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ABp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.AKw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Aa0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.AdY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.AOV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.APk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.ACA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Au3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AKs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AuY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AOv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ACs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.AKf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Aa1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.ACu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.AuX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.ACq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AO6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.Amw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Ajt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Au6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.Au7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ACy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.J4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.AOp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ALT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ALl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AiW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ACx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.ALm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.AeA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.AOq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AOu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AAJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.AE$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ArC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AB6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.AB5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AB7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.ANO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AOS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.Vz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.Aqr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.Aqk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.AKg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Amy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AO_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AO$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AuT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAddTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ANW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AKh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AOX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.AdZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AO8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AO9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Amx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.Amv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AO0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.Au1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AKi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Au5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.APg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.AOZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AOK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AOY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.APu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.APt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[39,40],FrameDelay:0,_this:
null}};C.AOw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.ATe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.ATg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.ATd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.Anl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.APe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.AOP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AON={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AOs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.TD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AOt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.ACr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AOU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AO5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AO4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.APa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AOT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.AOI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AB4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AKj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AOB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.ANT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ANR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ANU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ANS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ANX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AO1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AKk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AOJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AuZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AuU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ACz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ACo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AuV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.AOF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.AOE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.APf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.ANQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AKl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AKm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AAG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.APj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.AOD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AO7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AOy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.ALt[0].
_this)&&(B._cycle!=D))B._Done(C.ALt[0]._this=null);if((B=C.AO2[0]._this)&&(B._cycle
!=D))B._Done(C.AO2[0]._this=null);if((B=C.APi[0]._this)&&(B._cycle!=D))B._Done(C.
APi[0]._this=null);if((B=C.Aqp[0]._this)&&(B._cycle!=D))B._Done(C.Aqp[0]._this=null
);if((B=C.ACC[0]._this)&&(B._cycle!=D))B._Done(C.ACC[0]._this=null);if((B=C.AO3[
0]._this)&&(B._cycle!=D))B._Done(C.AO3[0]._this=null);if((B=C.Al3[0]._this)&&(B.
_cycle!=D))B._Done(C.Al3[0]._this=null);if((B=C.NH[0]._this)&&(B._cycle!=D))B._Done(
C.NH[0]._this=null);if((B=C.Au2[0]._this)&&(B._cycle!=D))B._Done(C.Au2[0]._this=
null);if((B=C.Au4[0]._this)&&(B._cycle!=D))B._Done(C.Au4[0]._this=null);if((B=C.
ALs[0]._this)&&(B._cycle!=D))B._Done(C.ALs[0]._this=null);if((B=C.ACp[0]._this)&&(
B._cycle!=D))B._Done(C.ACp[0]._this=null);if((B=C.Ad0[0]._this)&&(B._cycle!=D))B.
_Done(C.Ad0[0]._this=null);if((B=C.AOo[0]._this)&&(B._cycle!=D))B._Done(C.AOo[0].
_this=null);if((B=C.ACw[0]._this)&&(B._cycle!=D))B._Done(C.ACw[0]._this=null);if((
B=C.APl[0]._this)&&(B._cycle!=D))B._Done(C.APl[0]._this=null);if((B=C.AOH[0]._this
)&&(B._cycle!=D))B._Done(C.AOH[0]._this=null);if((B=C.Ap7[0]._this)&&(B._cycle!=
D))B._Done(C.Ap7[0]._this=null);if((B=C.AP1[0]._this)&&(B._cycle!=D))B._Done(C.AP1[
0]._this=null);if((B=C.NI[0]._this)&&(B._cycle!=D))B._Done(C.NI[0]._this=null);if((
B=C.APm[0]._this)&&(B._cycle!=D))B._Done(C.APm[0]._this=null);if((B=C.APn[0]._this
)&&(B._cycle!=D))B._Done(C.APn[0]._this=null);if((B=C.RO[0]._this)&&(B._cycle!=D
))B._Done(C.RO[0]._this=null);if((B=C.Tq[0]._this)&&(B._cycle!=D))B._Done(C.Tq[0
]._this=null);if((B=C.AdX[0]._this)&&(B._cycle!=D))B._Done(C.AdX[0]._this=null);
if((B=C.APb[0]._this)&&(B._cycle!=D))B._Done(C.APb[0]._this=null);if((B=C.APc[0].
_this)&&(B._cycle!=D))B._Done(C.APc[0]._this=null);if((B=C.AKo[0]._this)&&(B._cycle
!=D))B._Done(C.AKo[0]._this=null);if((B=C.AKn[0]._this)&&(B._cycle!=D))B._Done(C.
AKn[0]._this=null);if((B=C.AKp[0]._this)&&(B._cycle!=D))B._Done(C.AKp[0]._this=null
);if((B=C.AKq[0]._this)&&(B._cycle!=D))B._Done(C.AKq[0]._this=null);if((B=C.AKr[
0]._this)&&(B._cycle!=D))B._Done(C.AKr[0]._this=null);if((B=C.AKt[0]._this)&&(B.
_cycle!=D))B._Done(C.AKt[0]._this=null);if((B=C.AKu[0]._this)&&(B._cycle!=D))B._Done(
C.AKu[0]._this=null);if((B=C.ACl[0]._this)&&(B._cycle!=D))B._Done(C.ACl[0]._this=
null);if((B=C.APo[0]._this)&&(B._cycle!=D))B._Done(C.APo[0]._this=null);if((B=C.
AOl[0]._this)&&(B._cycle!=D))B._Done(C.AOl[0]._this=null);if((B=C.EV[0]._this)&&(
B._cycle!=D))B._Done(C.EV[0]._this=null);if((B=C.ALU[0]._this)&&(B._cycle!=D))B.
_Done(C.ALU[0]._this=null);if((B=C.ApY[0]._this)&&(B._cycle!=D))B._Done(C.ApY[0].
_this=null);if((B=C.ABp[0]._this)&&(B._cycle!=D))B._Done(C.ABp[0]._this=null);if((
B=C.AKw[0]._this)&&(B._cycle!=D))B._Done(C.AKw[0]._this=null);if((B=C.AKv[0]._this
)&&(B._cycle!=D))B._Done(C.AKv[0]._this=null);if((B=C.Aa0[0]._this)&&(B._cycle!=
D))B._Done(C.Aa0[0]._this=null);if((B=C.AdY[0]._this)&&(B._cycle!=D))B._Done(C.AdY[
0]._this=null);if((B=C.AOV[0]._this)&&(B._cycle!=D))B._Done(C.AOV[0]._this=null);
if((B=C.APk[0]._this)&&(B._cycle!=D))B._Done(C.APk[0]._this=null);if((B=C.ACA[0].
_this)&&(B._cycle!=D))B._Done(C.ACA[0]._this=null);if((B=C.Au3[0]._this)&&(B._cycle
!=D))B._Done(C.Au3[0]._this=null);if((B=C.AKs[0]._this)&&(B._cycle!=D))B._Done(C.
AKs[0]._this=null);if((B=C.AuY[0]._this)&&(B._cycle!=D))B._Done(C.AuY[0]._this=null
);if((B=C.AOv[0]._this)&&(B._cycle!=D))B._Done(C.AOv[0]._this=null);if((B=C.ACB[
0]._this)&&(B._cycle!=D))B._Done(C.ACB[0]._this=null);if((B=C.ACs[0]._this)&&(B.
_cycle!=D))B._Done(C.ACs[0]._this=null);if((B=C.AKf[0]._this)&&(B._cycle!=D))B._Done(
C.AKf[0]._this=null);if((B=C.Aa1[0]._this)&&(B._cycle!=D))B._Done(C.Aa1[0]._this=
null);if((B=C.ACu[0]._this)&&(B._cycle!=D))B._Done(C.ACu[0]._this=null);if((B=C.
AuX[0]._this)&&(B._cycle!=D))B._Done(C.AuX[0]._this=null);if((B=C.ACq[0]._this)&&(
B._cycle!=D))B._Done(C.ACq[0]._this=null);if((B=C.AO6[0]._this)&&(B._cycle!=D))B.
_Done(C.AO6[0]._this=null);if((B=C.Amw[0]._this)&&(B._cycle!=D))B._Done(C.Amw[0].
_this=null);if((B=C.Ajt[0]._this)&&(B._cycle!=D))B._Done(C.Ajt[0]._this=null);if((
B=C.Au6[0]._this)&&(B._cycle!=D))B._Done(C.Au6[0]._this=null);if((B=C.Au7[0]._this
)&&(B._cycle!=D))B._Done(C.Au7[0]._this=null);if((B=C.ACy[0]._this)&&(B._cycle!=
D))B._Done(C.ACy[0]._this=null);if((B=C.J4[0]._this)&&(B._cycle!=D))B._Done(C.J4[
0]._this=null);if((B=C.AOp[0]._this)&&(B._cycle!=D))B._Done(C.AOp[0]._this=null);
if((B=C.ALT[0]._this)&&(B._cycle!=D))B._Done(C.ALT[0]._this=null);if((B=C.ALl[0].
_this)&&(B._cycle!=D))B._Done(C.ALl[0]._this=null);if((B=C.AiW[0]._this)&&(B._cycle
!=D))B._Done(C.AiW[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.ACx[0]._this)&&(B._cycle!=D))B._Done(C.ACx[0]._this=null);if((
B=C.ALm[0]._this)&&(B._cycle!=D))B._Done(C.ALm[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.AeA[0]._this)&&(B._cycle!=
D))B._Done(C.AeA[0]._this=null);if((B=C.AOq[0]._this)&&(B._cycle!=D))B._Done(C.AOq[
0]._this=null);if((B=C.AOu[0]._this)&&(B._cycle!=D))B._Done(C.AOu[0]._this=null);
if((B=C.AAJ[0]._this)&&(B._cycle!=D))B._Done(C.AAJ[0]._this=null);if((B=C.AE$[0].
_this)&&(B._cycle!=D))B._Done(C.AE$[0]._this=null);if((B=C.ArC[0]._this)&&(B._cycle
!=D))B._Done(C.ArC[0]._this=null);if((B=C.AB6[0]._this)&&(B._cycle!=D))B._Done(C.
AB6[0]._this=null);if((B=C.AB5[0]._this)&&(B._cycle!=D))B._Done(C.AB5[0]._this=null
);if((B=C.AB7[0]._this)&&(B._cycle!=D))B._Done(C.AB7[0]._this=null);if((B=C.ANO[
0]._this)&&(B._cycle!=D))B._Done(C.ANO[0]._this=null);if((B=C.AOS[0]._this)&&(B.
_cycle!=D))B._Done(C.AOS[0]._this=null);if((B=C.ANP[0]._this)&&(B._cycle!=D))B._Done(
C.ANP[0]._this=null);if((B=C.Vz[0]._this)&&(B._cycle!=D))B._Done(C.Vz[0]._this=null
);if((B=C.Aqr[0]._this)&&(B._cycle!=D))B._Done(C.Aqr[0]._this=null);if((B=C.Aqk[
0]._this)&&(B._cycle!=D))B._Done(C.Aqk[0]._this=null);if((B=C.AKg[0]._this)&&(B.
_cycle!=D))B._Done(C.AKg[0]._this=null);if((B=C.Amy[0]._this)&&(B._cycle!=D))B._Done(
C.Amy[0]._this=null);if((B=C.AO_[0]._this)&&(B._cycle!=D))B._Done(C.AO_[0]._this=
null);if((B=C.AO$[0]._this)&&(B._cycle!=D))B._Done(C.AO$[0]._this=null);if((B=C.
AuT[0]._this)&&(B._cycle!=D))B._Done(C.AuT[0]._this=null);if((B=C.ANW[0]._this)&&(
B._cycle!=D))B._Done(C.ANW[0]._this=null);if((B=C.AKh[0]._this)&&(B._cycle!=D))B.
_Done(C.AKh[0]._this=null);if((B=C.AOX[0]._this)&&(B._cycle!=D))B._Done(C.AOX[0].
_this=null);if((B=C.AdZ[0]._this)&&(B._cycle!=D))B._Done(C.AdZ[0]._this=null);if((
B=C.AO8[0]._this)&&(B._cycle!=D))B._Done(C.AO8[0]._this=null);if((B=C.ACm[0]._this
)&&(B._cycle!=D))B._Done(C.ACm[0]._this=null);if((B=C.AO9[0]._this)&&(B._cycle!=
D))B._Done(C.AO9[0]._this=null);if((B=C.ANV[0]._this)&&(B._cycle!=D))B._Done(C.ANV[
0]._this=null);if((B=C.Amx[0]._this)&&(B._cycle!=D))B._Done(C.Amx[0]._this=null);
if((B=C.ACE[0]._this)&&(B._cycle!=D))B._Done(C.ACE[0]._this=null);if((B=C.Amv[0].
_this)&&(B._cycle!=D))B._Done(C.Amv[0]._this=null);if((B=C.AO0[0]._this)&&(B._cycle
!=D))B._Done(C.AO0[0]._this=null);if((B=C.Au1[0]._this)&&(B._cycle!=D))B._Done(C.
Au1[0]._this=null);if((B=C.AKi[0]._this)&&(B._cycle!=D))B._Done(C.AKi[0]._this=null
);if((B=C.Au5[0]._this)&&(B._cycle!=D))B._Done(C.Au5[0]._this=null);if((B=C.ACt[
0]._this)&&(B._cycle!=D))B._Done(C.ACt[0]._this=null);if((B=C.APg[0]._this)&&(B.
_cycle!=D))B._Done(C.APg[0]._this=null);if((B=C.AOZ[0]._this)&&(B._cycle!=D))B._Done(
C.AOZ[0]._this=null);if((B=C.AOK[0]._this)&&(B._cycle!=D))B._Done(C.AOK[0]._this=
null);if((B=C.AOk[0]._this)&&(B._cycle!=D))B._Done(C.AOk[0]._this=null);if((B=C.
AOW[0]._this)&&(B._cycle!=D))B._Done(C.AOW[0]._this=null);if((B=C.AOY[0]._this)&&(
B._cycle!=D))B._Done(C.AOY[0]._this=null);if((B=C.APu[0]._this)&&(B._cycle!=D))B.
_Done(C.APu[0]._this=null);if((B=C.APt[0]._this)&&(B._cycle!=D))B._Done(C.APt[0].
_this=null);if((B=C.AOm[0]._this)&&(B._cycle!=D))B._Done(C.AOm[0]._this=null);if((
B=C.AOw[0]._this)&&(B._cycle!=D))B._Done(C.AOw[0]._this=null);if((B=C.ATe[0]._this
)&&(B._cycle!=D))B._Done(C.ATe[0]._this=null);if((B=C.ATg[0]._this)&&(B._cycle!=
D))B._Done(C.ATg[0]._this=null);if((B=C.ATd[0]._this)&&(B._cycle!=D))B._Done(C.ATd[
0]._this=null);if((B=C.Anl[0]._this)&&(B._cycle!=D))B._Done(C.Anl[0]._this=null);
if((B=C.APe[0]._this)&&(B._cycle!=D))B._Done(C.APe[0]._this=null);if((B=C.AOP[0].
_this)&&(B._cycle!=D))B._Done(C.AOP[0]._this=null);if((B=C.AOM[0]._this)&&(B._cycle
!=D))B._Done(C.AOM[0]._this=null);if((B=C.AON[0]._this)&&(B._cycle!=D))B._Done(C.
AON[0]._this=null);if((B=C.AOL[0]._this)&&(B._cycle!=D))B._Done(C.AOL[0]._this=null
);if((B=C.AOO[0]._this)&&(B._cycle!=D))B._Done(C.AOO[0]._this=null);if((B=C.AOQ[
0]._this)&&(B._cycle!=D))B._Done(C.AOQ[0]._this=null);if((B=C.ACv[0]._this)&&(B.
_cycle!=D))B._Done(C.ACv[0]._this=null);if((B=C.AOs[0]._this)&&(B._cycle!=D))B._Done(
C.AOs[0]._this=null);if((B=C.TD[0]._this)&&(B._cycle!=D))B._Done(C.TD[0]._this=null
);if((B=C.AOt[0]._this)&&(B._cycle!=D))B._Done(C.AOt[0]._this=null);if((B=C.ACr[
0]._this)&&(B._cycle!=D))B._Done(C.ACr[0]._this=null);if((B=C.AOU[0]._this)&&(B.
_cycle!=D))B._Done(C.AOU[0]._this=null);if((B=C.AO5[0]._this)&&(B._cycle!=D))B._Done(
C.AO5[0]._this=null);if((B=C.AO4[0]._this)&&(B._cycle!=D))B._Done(C.AO4[0]._this=
null);if((B=C.APa[0]._this)&&(B._cycle!=D))B._Done(C.APa[0]._this=null);if((B=C.
AOT[0]._this)&&(B._cycle!=D))B._Done(C.AOT[0]._this=null);if((B=C.AOI[0]._this)&&(
B._cycle!=D))B._Done(C.AOI[0]._this=null);if((B=C.AB4[0]._this)&&(B._cycle!=D))B.
_Done(C.AB4[0]._this=null);if((B=C.AKj[0]._this)&&(B._cycle!=D))B._Done(C.AKj[0].
_this=null);if((B=C.AOB[0]._this)&&(B._cycle!=D))B._Done(C.AOB[0]._this=null);if((
B=C.ANT[0]._this)&&(B._cycle!=D))B._Done(C.ANT[0]._this=null);if((B=C.ANR[0]._this
)&&(B._cycle!=D))B._Done(C.ANR[0]._this=null);if((B=C.ANU[0]._this)&&(B._cycle!=
D))B._Done(C.ANU[0]._this=null);if((B=C.ANS[0]._this)&&(B._cycle!=D))B._Done(C.ANS[
0]._this=null);if((B=C.APp[0]._this)&&(B._cycle!=D))B._Done(C.APp[0]._this=null);
if((B=C.APq[0]._this)&&(B._cycle!=D))B._Done(C.APq[0]._this=null);if((B=C.AOz[0].
_this)&&(B._cycle!=D))B._Done(C.AOz[0]._this=null);if((B=C.AOA[0]._this)&&(B._cycle
!=D))B._Done(C.AOA[0]._this=null);if((B=C.APr[0]._this)&&(B._cycle!=D))B._Done(C.
APr[0]._this=null);if((B=C.APs[0]._this)&&(B._cycle!=D))B._Done(C.APs[0]._this=null
);if((B=C.AOC[0]._this)&&(B._cycle!=D))B._Done(C.AOC[0]._this=null);if((B=C.AOr[
0]._this)&&(B._cycle!=D))B._Done(C.AOr[0]._this=null);if((B=C.ACD[0]._this)&&(B.
_cycle!=D))B._Done(C.ACD[0]._this=null);if((B=C.ANX[0]._this)&&(B._cycle!=D))B._Done(
C.ANX[0]._this=null);if((B=C.AO1[0]._this)&&(B._cycle!=D))B._Done(C.AO1[0]._this=
null);if((B=C.AKk[0]._this)&&(B._cycle!=D))B._Done(C.AKk[0]._this=null);if((B=C.
AOJ[0]._this)&&(B._cycle!=D))B._Done(C.AOJ[0]._this=null);if((B=C.AuZ[0]._this)&&(
B._cycle!=D))B._Done(C.AuZ[0]._this=null);if((B=C.AuU[0]._this)&&(B._cycle!=D))B.
_Done(C.AuU[0]._this=null);if((B=C.ACz[0]._this)&&(B._cycle!=D))B._Done(C.ACz[0].
_this=null);if((B=C.ACo[0]._this)&&(B._cycle!=D))B._Done(C.ACo[0]._this=null);if((
B=C.AuV[0]._this)&&(B._cycle!=D))B._Done(C.AuV[0]._this=null);if((B=C.AOF[0]._this
)&&(B._cycle!=D))B._Done(C.AOF[0]._this=null);if((B=C.AOE[0]._this)&&(B._cycle!=
D))B._Done(C.AOE[0]._this=null);if((B=C.APf[0]._this)&&(B._cycle!=D))B._Done(C.APf[
0]._this=null);if((B=C.ANQ[0]._this)&&(B._cycle!=D))B._Done(C.ANQ[0]._this=null);
if((B=C.APh[0]._this)&&(B._cycle!=D))B._Done(C.APh[0]._this=null);if((B=C.AKl[0].
_this)&&(B._cycle!=D))B._Done(C.AKl[0]._this=null);if((B=C.AKm[0]._this)&&(B._cycle
!=D))B._Done(C.AKm[0]._this=null);if((B=C.AAG[0]._this)&&(B._cycle!=D))B._Done(C.
AAG[0]._this=null);if((B=C.APj[0]._this)&&(B._cycle!=D))B._Done(C.APj[0]._this=null
);if((B=C.AOD[0]._this)&&(B._cycle!=D))B._Done(C.AOD[0]._this=null);if((B=C.APd[
0]._this)&&(B._cycle!=D))B._Done(C.APd[0]._this=null);if((B=C.AO7[0]._this)&&(B.
_cycle!=D))B._Done(C.AO7[0]._this=null);if((B=C.AOn[0]._this)&&(B._cycle!=D))B._Done(
C.AOn[0]._this=null);if((B=C.AOy[0]._this)&&(B._cycle!=D))B._Done(C.AOy[0]._this=
null);if((B=C.AOx[0]._this)&&(B._cycle!=D))B._Done(C.AOx[0]._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */