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

C.AMd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.APO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AqE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.AC2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.APP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.Al9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.NL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.Au8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.Au_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AMc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.ACP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.Aed={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.APb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.AP9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.APt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Aqj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.NM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.AP_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.RW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.Tx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.Aea={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AP0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AK7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AK6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AK8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AK9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AK_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ACK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AO_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.EU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.AMD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Ap$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ABM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ALd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Abc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.Aeb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.APH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.AP8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.AC0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Au9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AK$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Au4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AC1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ACS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.AKY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Abd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.ACU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.Au3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.ACQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.APS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.AmD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AjD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Ava={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.Avb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ACY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.J7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.APc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AMC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AL7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.Ai9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ACX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AL8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.AeP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.APd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.APh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AA4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.AFI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ArO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ACr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ACt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AOC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.APE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.VE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AqG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.Aqz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.AKZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AmF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.APW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.APX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AuZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAddTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AOK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AK0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.APJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.Aec={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.APU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.APV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AmE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AC4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.AmC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.APM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.Au7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AK1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Au$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AP4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.APL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AO9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.API={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.APK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AQf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AO$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[39,40],FrameDelay:0,_this:
null}};C.APj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.AUa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AUc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.AT$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.Anr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AP2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.APB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.APf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.TK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.ACR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.APG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.APR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.APQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.APY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.APF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.APu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AK2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ACO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.AOH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.AOF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AQb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AC3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.APN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AK3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.APv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Au5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Au0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ACZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ACN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Au1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.APr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.APq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AP3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.AOE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AK4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AK5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AA1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.AP7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.APp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.AMd[0].
_this)&&(B._cycle!=D))B._Done(C.AMd[0]._this=null);if((B=C.APO[0]._this)&&(B._cycle
!=D))B._Done(C.APO[0]._this=null);if((B=C.AP6[0]._this)&&(B._cycle!=D))B._Done(C.
AP6[0]._this=null);if((B=C.AqE[0]._this)&&(B._cycle!=D))B._Done(C.AqE[0]._this=null
);if((B=C.AC2[0]._this)&&(B._cycle!=D))B._Done(C.AC2[0]._this=null);if((B=C.APP[
0]._this)&&(B._cycle!=D))B._Done(C.APP[0]._this=null);if((B=C.Al9[0]._this)&&(B.
_cycle!=D))B._Done(C.Al9[0]._this=null);if((B=C.NL[0]._this)&&(B._cycle!=D))B._Done(
C.NL[0]._this=null);if((B=C.Au8[0]._this)&&(B._cycle!=D))B._Done(C.Au8[0]._this=
null);if((B=C.Au_[0]._this)&&(B._cycle!=D))B._Done(C.Au_[0]._this=null);if((B=C.
AMc[0]._this)&&(B._cycle!=D))B._Done(C.AMc[0]._this=null);if((B=C.ACP[0]._this)&&(
B._cycle!=D))B._Done(C.ACP[0]._this=null);if((B=C.Aed[0]._this)&&(B._cycle!=D))B.
_Done(C.Aed[0]._this=null);if((B=C.APb[0]._this)&&(B._cycle!=D))B._Done(C.APb[0].
_this=null);if((B=C.ACW[0]._this)&&(B._cycle!=D))B._Done(C.ACW[0]._this=null);if((
B=C.AP9[0]._this)&&(B._cycle!=D))B._Done(C.AP9[0]._this=null);if((B=C.APt[0]._this
)&&(B._cycle!=D))B._Done(C.APt[0]._this=null);if((B=C.Aqj[0]._this)&&(B._cycle!=
D))B._Done(C.Aqj[0]._this=null);if((B=C.AQO[0]._this)&&(B._cycle!=D))B._Done(C.AQO[
0]._this=null);if((B=C.NM[0]._this)&&(B._cycle!=D))B._Done(C.NM[0]._this=null);if((
B=C.AP_[0]._this)&&(B._cycle!=D))B._Done(C.AP_[0]._this=null);if((B=C.AP$[0]._this
)&&(B._cycle!=D))B._Done(C.AP$[0]._this=null);if((B=C.RW[0]._this)&&(B._cycle!=D
))B._Done(C.RW[0]._this=null);if((B=C.Tx[0]._this)&&(B._cycle!=D))B._Done(C.Tx[0
]._this=null);if((B=C.Aea[0]._this)&&(B._cycle!=D))B._Done(C.Aea[0]._this=null);
if((B=C.APZ[0]._this)&&(B._cycle!=D))B._Done(C.APZ[0]._this=null);if((B=C.AP0[0].
_this)&&(B._cycle!=D))B._Done(C.AP0[0]._this=null);if((B=C.AK7[0]._this)&&(B._cycle
!=D))B._Done(C.AK7[0]._this=null);if((B=C.AK6[0]._this)&&(B._cycle!=D))B._Done(C.
AK6[0]._this=null);if((B=C.AK8[0]._this)&&(B._cycle!=D))B._Done(C.AK8[0]._this=null
);if((B=C.AK9[0]._this)&&(B._cycle!=D))B._Done(C.AK9[0]._this=null);if((B=C.AK_[
0]._this)&&(B._cycle!=D))B._Done(C.AK_[0]._this=null);if((B=C.ALa[0]._this)&&(B.
_cycle!=D))B._Done(C.ALa[0]._this=null);if((B=C.ALb[0]._this)&&(B._cycle!=D))B._Done(
C.ALb[0]._this=null);if((B=C.ACK[0]._this)&&(B._cycle!=D))B._Done(C.ACK[0]._this=
null);if((B=C.AQa[0]._this)&&(B._cycle!=D))B._Done(C.AQa[0]._this=null);if((B=C.
AO_[0]._this)&&(B._cycle!=D))B._Done(C.AO_[0]._this=null);if((B=C.EU[0]._this)&&(
B._cycle!=D))B._Done(C.EU[0]._this=null);if((B=C.AMD[0]._this)&&(B._cycle!=D))B.
_Done(C.AMD[0]._this=null);if((B=C.Ap$[0]._this)&&(B._cycle!=D))B._Done(C.Ap$[0].
_this=null);if((B=C.ABM[0]._this)&&(B._cycle!=D))B._Done(C.ABM[0]._this=null);if((
B=C.ALd[0]._this)&&(B._cycle!=D))B._Done(C.ALd[0]._this=null);if((B=C.ALc[0]._this
)&&(B._cycle!=D))B._Done(C.ALc[0]._this=null);if((B=C.Abc[0]._this)&&(B._cycle!=
D))B._Done(C.Abc[0]._this=null);if((B=C.Aeb[0]._this)&&(B._cycle!=D))B._Done(C.Aeb[
0]._this=null);if((B=C.APH[0]._this)&&(B._cycle!=D))B._Done(C.APH[0]._this=null);
if((B=C.AP8[0]._this)&&(B._cycle!=D))B._Done(C.AP8[0]._this=null);if((B=C.AC0[0].
_this)&&(B._cycle!=D))B._Done(C.AC0[0]._this=null);if((B=C.Au9[0]._this)&&(B._cycle
!=D))B._Done(C.Au9[0]._this=null);if((B=C.AK$[0]._this)&&(B._cycle!=D))B._Done(C.
AK$[0]._this=null);if((B=C.Au4[0]._this)&&(B._cycle!=D))B._Done(C.Au4[0]._this=null
);if((B=C.APi[0]._this)&&(B._cycle!=D))B._Done(C.APi[0]._this=null);if((B=C.AC1[
0]._this)&&(B._cycle!=D))B._Done(C.AC1[0]._this=null);if((B=C.ACS[0]._this)&&(B.
_cycle!=D))B._Done(C.ACS[0]._this=null);if((B=C.AKY[0]._this)&&(B._cycle!=D))B._Done(
C.AKY[0]._this=null);if((B=C.Abd[0]._this)&&(B._cycle!=D))B._Done(C.Abd[0]._this=
null);if((B=C.ACU[0]._this)&&(B._cycle!=D))B._Done(C.ACU[0]._this=null);if((B=C.
Au3[0]._this)&&(B._cycle!=D))B._Done(C.Au3[0]._this=null);if((B=C.ACQ[0]._this)&&(
B._cycle!=D))B._Done(C.ACQ[0]._this=null);if((B=C.APS[0]._this)&&(B._cycle!=D))B.
_Done(C.APS[0]._this=null);if((B=C.AmD[0]._this)&&(B._cycle!=D))B._Done(C.AmD[0].
_this=null);if((B=C.AjD[0]._this)&&(B._cycle!=D))B._Done(C.AjD[0]._this=null);if((
B=C.Ava[0]._this)&&(B._cycle!=D))B._Done(C.Ava[0]._this=null);if((B=C.Avb[0]._this
)&&(B._cycle!=D))B._Done(C.Avb[0]._this=null);if((B=C.ACY[0]._this)&&(B._cycle!=
D))B._Done(C.ACY[0]._this=null);if((B=C.J7[0]._this)&&(B._cycle!=D))B._Done(C.J7[
0]._this=null);if((B=C.APc[0]._this)&&(B._cycle!=D))B._Done(C.APc[0]._this=null);
if((B=C.AMC[0]._this)&&(B._cycle!=D))B._Done(C.AMC[0]._this=null);if((B=C.AL7[0].
_this)&&(B._cycle!=D))B._Done(C.AL7[0]._this=null);if((B=C.Ai9[0]._this)&&(B._cycle
!=D))B._Done(C.Ai9[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.ACX[0]._this)&&(B._cycle!=D))B._Done(C.ACX[0]._this=null);if((
B=C.AL8[0]._this)&&(B._cycle!=D))B._Done(C.AL8[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.AeP[0]._this)&&(B._cycle!=
D))B._Done(C.AeP[0]._this=null);if((B=C.APd[0]._this)&&(B._cycle!=D))B._Done(C.APd[
0]._this=null);if((B=C.APh[0]._this)&&(B._cycle!=D))B._Done(C.APh[0]._this=null);
if((B=C.AA4[0]._this)&&(B._cycle!=D))B._Done(C.AA4[0]._this=null);if((B=C.AFI[0].
_this)&&(B._cycle!=D))B._Done(C.AFI[0]._this=null);if((B=C.ArO[0]._this)&&(B._cycle
!=D))B._Done(C.ArO[0]._this=null);if((B=C.ACs[0]._this)&&(B._cycle!=D))B._Done(C.
ACs[0]._this=null);if((B=C.ACr[0]._this)&&(B._cycle!=D))B._Done(C.ACr[0]._this=null
);if((B=C.ACt[0]._this)&&(B._cycle!=D))B._Done(C.ACt[0]._this=null);if((B=C.AOC[
0]._this)&&(B._cycle!=D))B._Done(C.AOC[0]._this=null);if((B=C.APE[0]._this)&&(B.
_cycle!=D))B._Done(C.APE[0]._this=null);if((B=C.AOD[0]._this)&&(B._cycle!=D))B._Done(
C.AOD[0]._this=null);if((B=C.VE[0]._this)&&(B._cycle!=D))B._Done(C.VE[0]._this=null
);if((B=C.AqG[0]._this)&&(B._cycle!=D))B._Done(C.AqG[0]._this=null);if((B=C.Aqz[
0]._this)&&(B._cycle!=D))B._Done(C.Aqz[0]._this=null);if((B=C.AKZ[0]._this)&&(B.
_cycle!=D))B._Done(C.AKZ[0]._this=null);if((B=C.AmF[0]._this)&&(B._cycle!=D))B._Done(
C.AmF[0]._this=null);if((B=C.APW[0]._this)&&(B._cycle!=D))B._Done(C.APW[0]._this=
null);if((B=C.APX[0]._this)&&(B._cycle!=D))B._Done(C.APX[0]._this=null);if((B=C.
AuZ[0]._this)&&(B._cycle!=D))B._Done(C.AuZ[0]._this=null);if((B=C.AOK[0]._this)&&(
B._cycle!=D))B._Done(C.AOK[0]._this=null);if((B=C.AK0[0]._this)&&(B._cycle!=D))B.
_Done(C.AK0[0]._this=null);if((B=C.APJ[0]._this)&&(B._cycle!=D))B._Done(C.APJ[0].
_this=null);if((B=C.Aec[0]._this)&&(B._cycle!=D))B._Done(C.Aec[0]._this=null);if((
B=C.APU[0]._this)&&(B._cycle!=D))B._Done(C.APU[0]._this=null);if((B=C.ACL[0]._this
)&&(B._cycle!=D))B._Done(C.ACL[0]._this=null);if((B=C.APV[0]._this)&&(B._cycle!=
D))B._Done(C.APV[0]._this=null);if((B=C.AOJ[0]._this)&&(B._cycle!=D))B._Done(C.AOJ[
0]._this=null);if((B=C.AmE[0]._this)&&(B._cycle!=D))B._Done(C.AmE[0]._this=null);
if((B=C.AC4[0]._this)&&(B._cycle!=D))B._Done(C.AC4[0]._this=null);if((B=C.AmC[0].
_this)&&(B._cycle!=D))B._Done(C.AmC[0]._this=null);if((B=C.APM[0]._this)&&(B._cycle
!=D))B._Done(C.APM[0]._this=null);if((B=C.Au7[0]._this)&&(B._cycle!=D))B._Done(C.
Au7[0]._this=null);if((B=C.AK1[0]._this)&&(B._cycle!=D))B._Done(C.AK1[0]._this=null
);if((B=C.Au$[0]._this)&&(B._cycle!=D))B._Done(C.Au$[0]._this=null);if((B=C.ACT[
0]._this)&&(B._cycle!=D))B._Done(C.ACT[0]._this=null);if((B=C.AP4[0]._this)&&(B.
_cycle!=D))B._Done(C.AP4[0]._this=null);if((B=C.APL[0]._this)&&(B._cycle!=D))B._Done(
C.APL[0]._this=null);if((B=C.APw[0]._this)&&(B._cycle!=D))B._Done(C.APw[0]._this=
null);if((B=C.AO9[0]._this)&&(B._cycle!=D))B._Done(C.AO9[0]._this=null);if((B=C.
API[0]._this)&&(B._cycle!=D))B._Done(C.API[0]._this=null);if((B=C.APK[0]._this)&&(
B._cycle!=D))B._Done(C.APK[0]._this=null);if((B=C.AQg[0]._this)&&(B._cycle!=D))B.
_Done(C.AQg[0]._this=null);if((B=C.AQf[0]._this)&&(B._cycle!=D))B._Done(C.AQf[0].
_this=null);if((B=C.AO$[0]._this)&&(B._cycle!=D))B._Done(C.AO$[0]._this=null);if((
B=C.APj[0]._this)&&(B._cycle!=D))B._Done(C.APj[0]._this=null);if((B=C.AUa[0]._this
)&&(B._cycle!=D))B._Done(C.AUa[0]._this=null);if((B=C.AUc[0]._this)&&(B._cycle!=
D))B._Done(C.AUc[0]._this=null);if((B=C.AT$[0]._this)&&(B._cycle!=D))B._Done(C.AT$[
0]._this=null);if((B=C.Anr[0]._this)&&(B._cycle!=D))B._Done(C.Anr[0]._this=null);
if((B=C.AP2[0]._this)&&(B._cycle!=D))B._Done(C.AP2[0]._this=null);if((B=C.APB[0].
_this)&&(B._cycle!=D))B._Done(C.APB[0]._this=null);if((B=C.APy[0]._this)&&(B._cycle
!=D))B._Done(C.APy[0]._this=null);if((B=C.APz[0]._this)&&(B._cycle!=D))B._Done(C.
APz[0]._this=null);if((B=C.APx[0]._this)&&(B._cycle!=D))B._Done(C.APx[0]._this=null
);if((B=C.APA[0]._this)&&(B._cycle!=D))B._Done(C.APA[0]._this=null);if((B=C.APC[
0]._this)&&(B._cycle!=D))B._Done(C.APC[0]._this=null);if((B=C.ACV[0]._this)&&(B.
_cycle!=D))B._Done(C.ACV[0]._this=null);if((B=C.APf[0]._this)&&(B._cycle!=D))B._Done(
C.APf[0]._this=null);if((B=C.TK[0]._this)&&(B._cycle!=D))B._Done(C.TK[0]._this=null
);if((B=C.APg[0]._this)&&(B._cycle!=D))B._Done(C.APg[0]._this=null);if((B=C.ACR[
0]._this)&&(B._cycle!=D))B._Done(C.ACR[0]._this=null);if((B=C.APG[0]._this)&&(B.
_cycle!=D))B._Done(C.APG[0]._this=null);if((B=C.APR[0]._this)&&(B._cycle!=D))B._Done(
C.APR[0]._this=null);if((B=C.APQ[0]._this)&&(B._cycle!=D))B._Done(C.APQ[0]._this=
null);if((B=C.APY[0]._this)&&(B._cycle!=D))B._Done(C.APY[0]._this=null);if((B=C.
APF[0]._this)&&(B._cycle!=D))B._Done(C.APF[0]._this=null);if((B=C.APu[0]._this)&&(
B._cycle!=D))B._Done(C.APu[0]._this=null);if((B=C.ACq[0]._this)&&(B._cycle!=D))B.
_Done(C.ACq[0]._this=null);if((B=C.AK2[0]._this)&&(B._cycle!=D))B._Done(C.AK2[0].
_this=null);if((B=C.ACO[0]._this)&&(B._cycle!=D))B._Done(C.ACO[0]._this=null);if((
B=C.AOH[0]._this)&&(B._cycle!=D))B._Done(C.AOH[0]._this=null);if((B=C.AOF[0]._this
)&&(B._cycle!=D))B._Done(C.AOF[0]._this=null);if((B=C.AOI[0]._this)&&(B._cycle!=
D))B._Done(C.AOI[0]._this=null);if((B=C.AOG[0]._this)&&(B._cycle!=D))B._Done(C.AOG[
0]._this=null);if((B=C.AQb[0]._this)&&(B._cycle!=D))B._Done(C.AQb[0]._this=null);
if((B=C.AQc[0]._this)&&(B._cycle!=D))B._Done(C.AQc[0]._this=null);if((B=C.APm[0].
_this)&&(B._cycle!=D))B._Done(C.APm[0]._this=null);if((B=C.APn[0]._this)&&(B._cycle
!=D))B._Done(C.APn[0]._this=null);if((B=C.AQd[0]._this)&&(B._cycle!=D))B._Done(C.
AQd[0]._this=null);if((B=C.AQe[0]._this)&&(B._cycle!=D))B._Done(C.AQe[0]._this=null
);if((B=C.APo[0]._this)&&(B._cycle!=D))B._Done(C.APo[0]._this=null);if((B=C.APe[
0]._this)&&(B._cycle!=D))B._Done(C.APe[0]._this=null);if((B=C.AC3[0]._this)&&(B.
_cycle!=D))B._Done(C.AC3[0]._this=null);if((B=C.AOL[0]._this)&&(B._cycle!=D))B._Done(
C.AOL[0]._this=null);if((B=C.APN[0]._this)&&(B._cycle!=D))B._Done(C.APN[0]._this=
null);if((B=C.AK3[0]._this)&&(B._cycle!=D))B._Done(C.AK3[0]._this=null);if((B=C.
APv[0]._this)&&(B._cycle!=D))B._Done(C.APv[0]._this=null);if((B=C.Au5[0]._this)&&(
B._cycle!=D))B._Done(C.Au5[0]._this=null);if((B=C.Au0[0]._this)&&(B._cycle!=D))B.
_Done(C.Au0[0]._this=null);if((B=C.ACZ[0]._this)&&(B._cycle!=D))B._Done(C.ACZ[0].
_this=null);if((B=C.ACN[0]._this)&&(B._cycle!=D))B._Done(C.ACN[0]._this=null);if((
B=C.Au1[0]._this)&&(B._cycle!=D))B._Done(C.Au1[0]._this=null);if((B=C.APr[0]._this
)&&(B._cycle!=D))B._Done(C.APr[0]._this=null);if((B=C.APq[0]._this)&&(B._cycle!=
D))B._Done(C.APq[0]._this=null);if((B=C.AP3[0]._this)&&(B._cycle!=D))B._Done(C.AP3[
0]._this=null);if((B=C.AOE[0]._this)&&(B._cycle!=D))B._Done(C.AOE[0]._this=null);
if((B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0]._this=null);if((B=C.AK4[0].
_this)&&(B._cycle!=D))B._Done(C.AK4[0]._this=null);if((B=C.AK5[0]._this)&&(B._cycle
!=D))B._Done(C.AK5[0]._this=null);if((B=C.AA1[0]._this)&&(B._cycle!=D))B._Done(C.
AA1[0]._this=null);if((B=C.AP7[0]._this)&&(B._cycle!=D))B._Done(C.AP7[0]._this=null
);if((B=C.APp[0]._this)&&(B._cycle!=D))B._Done(C.APp[0]._this=null);if((B=C.AP1[
0]._this)&&(B._cycle!=D))B._Done(C.AP1[0]._this=null);if((B=C.APT[0]._this)&&(B.
_cycle!=D))B._Done(C.APT[0]._this=null);if((B=C.APa[0]._this)&&(B._cycle!=D))B._Done(
C.APa[0]._this=null);if((B=C.APl[0]._this)&&(B._cycle!=D))B._Done(C.APl[0]._this=
null);if((B=C.APk[0]._this)&&(B._cycle!=D))B._Done(C.APk[0]._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */