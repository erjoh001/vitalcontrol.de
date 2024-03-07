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

C.AMn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:
null}};C.APZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AqL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[82,82],FrameDelay:0,_this:
null}};C.ADf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[52,82],FrameDelay:0,_this:
null}};C.AP0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLocation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[18,28],FrameDelay:0,_this:
null}};C.Amc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.NM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.Avh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMeasureAnim.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.Avj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingTemp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:
null}};C.AMm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResBatteryBig.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[90,33],FrameDelay:0,_this:
null}};C.AC4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.Aeg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilter.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,28],FrameDelay:0,_this:
null}};C.APm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AC$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:
null}};C.AQi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUsb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:
null}};C.APE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Aqq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResFlashlightOnOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQ0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResLogo.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[150,150],FrameDelay:0,_this:
null}};C.NN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMenuBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[116,120],FrameDelay:0,_this:
null}};C.AQj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconVibrateOn.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.R2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:
null}};C.TC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:
null}};C.Aed={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AP_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AP$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.ALf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA2_Rating.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA3_Alarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA4_OnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA5_History.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA7_Unregister.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AC0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[97,58],FrameDelay:0,_this:
null}};C.EW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconArrowBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[49,29],FrameDelay:0,_this:
null}};C.AMN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Aqg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorPlus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.AB1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResDecoratorMinus.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:
null}};C.ALn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9_WeighingKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA9WeighingLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Abk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSettingsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.Aee={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconClose.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,30],FrameDelay:0,_this:
null}};C.APS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[100,80],FrameDelay:0,_this:
null}};C.AQh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:
null}};C.ADd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimal.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Avi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewAnimals.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ALj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA6_AnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Avd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.APt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOnWatch.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AC7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExclamationMark.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[11,40],FrameDelay:0,_this:
null}};C.AK8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA10_FirstFeeding.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Abl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconThermometer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[14,40],FrameDelay:0,_this:
null}};C.AC9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[17,40],FrameDelay:0,_this:
null}};C.Avc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:
null}};C.AC5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AP3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[21,40],FrameDelay:0,_this:
null}};C.AmK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRatingEye.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AjJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalfBasicData.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Avl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightKG.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.Avm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightLBS.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.ADb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.J9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResColoredCircle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:
null}};C.APn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AMM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResCharts.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AMf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowLeft.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.Ajf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[15,40],FrameDelay:0,_this:
null}};C.AD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Options={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResOptions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ADa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconInfo.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AMg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.Edit={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResEdit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,30],FrameDelay:0,_this:
null}};C.AeV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:
null}};C.APo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.APs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.ABg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResAttention.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:
null}};C.AFW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ArV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResRemoveFromWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ACH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.ACG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.ACI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconSettings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AOM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDevice.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.APP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AON={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.VK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AqN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconUp.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.AqG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[23,40],FrameDelay:0,_this:
null}};C.AK9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA11_LinkTransponderID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AmM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:
null}};C.AP7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AP8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoTransponderList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.Au9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAddTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AOU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoTranponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AK_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA12_AutoActions.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.APU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideTempLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[41,40],FrameDelay:0,_this:
null}};C.Aef={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.AP5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Au_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:
null}};C.AP6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:
null}};C.AmL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSave.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.ADh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconSaveAndContinue.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[79,40],FrameDelay:0,_this:
null}};C.AmJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[31,24],FrameDelay:0,_this:
null}};C.APX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[38,40],FrameDelay:0,_this:
null}};C.Avg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AK$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA13_Calving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.Avk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconReset_Retry.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.AC8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:
null}};C.AQd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:
null}};C.APW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconIDRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluation.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActionListKg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.APV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[45,40],FrameDelay:0,_this:
null}};C.AQr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsViewSwitching.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:5,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.AQq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconsMiddleButton.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.APk={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[39,40],FrameDelay:0,_this:
null}};C.APu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};C.AUo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchGenerateID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:7,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AUq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:4,FrameSize:[20,40],FrameDelay:0,_this:
null}};C.AUn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:8,FrameSize:[25,40],FrameDelay:0,_this:
null}};C.Any={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResResetToDefault.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartag.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[120,125],FrameDelay:0,_this:
null}};C.APM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.API={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AC_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconFilterRemoval.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.APq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.JE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:
null}};C.AC6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEvaluationLists.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.APR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderLosses.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AP2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesPercent.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AP1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLossesNumber.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:
null}};C.AP9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNumberInHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.APQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconHeaderHerd.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:
null}};C.APF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ACF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.ALa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA14_DryingOff.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.AC3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalving.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:
null}};C.AOR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLamb.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:
null}};C.AOP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOS={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewLambs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AOQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewCows.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AQm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingToday.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeighingTodayLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeights.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APy={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthWeightsLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopment.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconWeightDevelopmentLbs.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvingXL.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.ADg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AOV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.APY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.APG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCow.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Ave={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconEartagCalf.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Au$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthDate.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ADc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconMaleOrFemale.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:
null}};C.AC2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthSingle.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:
null}};C.Ava={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBirthMultiples.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[42,40],FrameDelay:0,_this:
null}};C.APC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconDamList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[30,36],FrameDelay:0,_this:
null}};C.APB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:
null}};C.AOO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:
null}};C.AQe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ALc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ALd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:
null}};C.ABd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResArrowsLeftRight.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:
null}};C.AQg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconStack.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[32,25],FrameDelay:0,_this:
null}};C.APA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconCalvings.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.AQa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[34,34],FrameDelay:0,_this:
null}};C.AP4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconNewNoTransponder.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APl={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconAgeRange.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.APw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodes.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:
null}};C.APv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ResIconBarcodeScan.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[36,40],FrameDelay:0,_this:
null}};
C._Init=function(){};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.AMn[0].
_this)&&(B._cycle!=D))B._Done(C.AMn[0]._this=null);if((B=C.APZ[0]._this)&&(B._cycle
!=D))B._Done(C.APZ[0]._this=null);if((B=C.AQf[0]._this)&&(B._cycle!=D))B._Done(C.
AQf[0]._this=null);if((B=C.AqL[0]._this)&&(B._cycle!=D))B._Done(C.AqL[0]._this=null
);if((B=C.ADf[0]._this)&&(B._cycle!=D))B._Done(C.ADf[0]._this=null);if((B=C.AP0[
0]._this)&&(B._cycle!=D))B._Done(C.AP0[0]._this=null);if((B=C.Amc[0]._this)&&(B.
_cycle!=D))B._Done(C.Amc[0]._this=null);if((B=C.NM[0]._this)&&(B._cycle!=D))B._Done(
C.NM[0]._this=null);if((B=C.Avh[0]._this)&&(B._cycle!=D))B._Done(C.Avh[0]._this=
null);if((B=C.Avj[0]._this)&&(B._cycle!=D))B._Done(C.Avj[0]._this=null);if((B=C.
AMm[0]._this)&&(B._cycle!=D))B._Done(C.AMm[0]._this=null);if((B=C.AC4[0]._this)&&(
B._cycle!=D))B._Done(C.AC4[0]._this=null);if((B=C.Aeg[0]._this)&&(B._cycle!=D))B.
_Done(C.Aeg[0]._this=null);if((B=C.APm[0]._this)&&(B._cycle!=D))B._Done(C.APm[0].
_this=null);if((B=C.AC$[0]._this)&&(B._cycle!=D))B._Done(C.AC$[0]._this=null);if((
B=C.AQi[0]._this)&&(B._cycle!=D))B._Done(C.AQi[0]._this=null);if((B=C.APE[0]._this
)&&(B._cycle!=D))B._Done(C.APE[0]._this=null);if((B=C.Aqq[0]._this)&&(B._cycle!=
D))B._Done(C.Aqq[0]._this=null);if((B=C.AQ0[0]._this)&&(B._cycle!=D))B._Done(C.AQ0[
0]._this=null);if((B=C.NN[0]._this)&&(B._cycle!=D))B._Done(C.NN[0]._this=null);if((
B=C.AQj[0]._this)&&(B._cycle!=D))B._Done(C.AQj[0]._this=null);if((B=C.AQk[0]._this
)&&(B._cycle!=D))B._Done(C.AQk[0]._this=null);if((B=C.R2[0]._this)&&(B._cycle!=D
))B._Done(C.R2[0]._this=null);if((B=C.TC[0]._this)&&(B._cycle!=D))B._Done(C.TC[0
]._this=null);if((B=C.Aed[0]._this)&&(B._cycle!=D))B._Done(C.Aed[0]._this=null);
if((B=C.AP_[0]._this)&&(B._cycle!=D))B._Done(C.AP_[0]._this=null);if((B=C.AP$[0].
_this)&&(B._cycle!=D))B._Done(C.AP$[0]._this=null);if((B=C.ALf[0]._this)&&(B._cycle
!=D))B._Done(C.ALf[0]._this=null);if((B=C.ALe[0]._this)&&(B._cycle!=D))B._Done(C.
ALe[0]._this=null);if((B=C.ALg[0]._this)&&(B._cycle!=D))B._Done(C.ALg[0]._this=null
);if((B=C.ALh[0]._this)&&(B._cycle!=D))B._Done(C.ALh[0]._this=null);if((B=C.ALi[
0]._this)&&(B._cycle!=D))B._Done(C.ALi[0]._this=null);if((B=C.ALk[0]._this)&&(B.
_cycle!=D))B._Done(C.ALk[0]._this=null);if((B=C.ALl[0]._this)&&(B._cycle!=D))B._Done(
C.ALl[0]._this=null);if((B=C.AC0[0]._this)&&(B._cycle!=D))B._Done(C.AC0[0]._this=
null);if((B=C.AQl[0]._this)&&(B._cycle!=D))B._Done(C.AQl[0]._this=null);if((B=C.
APj[0]._this)&&(B._cycle!=D))B._Done(C.APj[0]._this=null);if((B=C.EW[0]._this)&&(
B._cycle!=D))B._Done(C.EW[0]._this=null);if((B=C.AMN[0]._this)&&(B._cycle!=D))B.
_Done(C.AMN[0]._this=null);if((B=C.Aqg[0]._this)&&(B._cycle!=D))B._Done(C.Aqg[0].
_this=null);if((B=C.AB1[0]._this)&&(B._cycle!=D))B._Done(C.AB1[0]._this=null);if((
B=C.ALn[0]._this)&&(B._cycle!=D))B._Done(C.ALn[0]._this=null);if((B=C.ALm[0]._this
)&&(B._cycle!=D))B._Done(C.ALm[0]._this=null);if((B=C.Abk[0]._this)&&(B._cycle!=
D))B._Done(C.Abk[0]._this=null);if((B=C.Aee[0]._this)&&(B._cycle!=D))B._Done(C.Aee[
0]._this=null);if((B=C.APS[0]._this)&&(B._cycle!=D))B._Done(C.APS[0]._this=null);
if((B=C.AQh[0]._this)&&(B._cycle!=D))B._Done(C.AQh[0]._this=null);if((B=C.ADd[0].
_this)&&(B._cycle!=D))B._Done(C.ADd[0]._this=null);if((B=C.Avi[0]._this)&&(B._cycle
!=D))B._Done(C.Avi[0]._this=null);if((B=C.ALj[0]._this)&&(B._cycle!=D))B._Done(C.
ALj[0]._this=null);if((B=C.Avd[0]._this)&&(B._cycle!=D))B._Done(C.Avd[0]._this=null
);if((B=C.APt[0]._this)&&(B._cycle!=D))B._Done(C.APt[0]._this=null);if((B=C.ADe[
0]._this)&&(B._cycle!=D))B._Done(C.ADe[0]._this=null);if((B=C.AC7[0]._this)&&(B.
_cycle!=D))B._Done(C.AC7[0]._this=null);if((B=C.AK8[0]._this)&&(B._cycle!=D))B._Done(
C.AK8[0]._this=null);if((B=C.Abl[0]._this)&&(B._cycle!=D))B._Done(C.Abl[0]._this=
null);if((B=C.AC9[0]._this)&&(B._cycle!=D))B._Done(C.AC9[0]._this=null);if((B=C.
Avc[0]._this)&&(B._cycle!=D))B._Done(C.Avc[0]._this=null);if((B=C.AC5[0]._this)&&(
B._cycle!=D))B._Done(C.AC5[0]._this=null);if((B=C.AP3[0]._this)&&(B._cycle!=D))B.
_Done(C.AP3[0]._this=null);if((B=C.AmK[0]._this)&&(B._cycle!=D))B._Done(C.AmK[0].
_this=null);if((B=C.AjJ[0]._this)&&(B._cycle!=D))B._Done(C.AjJ[0]._this=null);if((
B=C.Avl[0]._this)&&(B._cycle!=D))B._Done(C.Avl[0]._this=null);if((B=C.Avm[0]._this
)&&(B._cycle!=D))B._Done(C.Avm[0]._this=null);if((B=C.ADb[0]._this)&&(B._cycle!=
D))B._Done(C.ADb[0]._this=null);if((B=C.J9[0]._this)&&(B._cycle!=D))B._Done(C.J9[
0]._this=null);if((B=C.APn[0]._this)&&(B._cycle!=D))B._Done(C.APn[0]._this=null);
if((B=C.AMM[0]._this)&&(B._cycle!=D))B._Done(C.AMM[0]._this=null);if((B=C.AMf[0].
_this)&&(B._cycle!=D))B._Done(C.AMf[0]._this=null);if((B=C.Ajf[0]._this)&&(B._cycle
!=D))B._Done(C.Ajf[0]._this=null);if((B=C.AD[0]._this)&&(B._cycle!=D))B._Done(C.
AD[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.ADa[0]._this)&&(B._cycle!=D))B._Done(C.ADa[0]._this=null);if((
B=C.AMg[0]._this)&&(B._cycle!=D))B._Done(C.AMg[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.AeV[0]._this)&&(B._cycle!=
D))B._Done(C.AeV[0]._this=null);if((B=C.APo[0]._this)&&(B._cycle!=D))B._Done(C.APo[
0]._this=null);if((B=C.APs[0]._this)&&(B._cycle!=D))B._Done(C.APs[0]._this=null);
if((B=C.ABg[0]._this)&&(B._cycle!=D))B._Done(C.ABg[0]._this=null);if((B=C.AFW[0].
_this)&&(B._cycle!=D))B._Done(C.AFW[0]._this=null);if((B=C.ArV[0]._this)&&(B._cycle
!=D))B._Done(C.ArV[0]._this=null);if((B=C.ACH[0]._this)&&(B._cycle!=D))B._Done(C.
ACH[0]._this=null);if((B=C.ACG[0]._this)&&(B._cycle!=D))B._Done(C.ACG[0]._this=null
);if((B=C.ACI[0]._this)&&(B._cycle!=D))B._Done(C.ACI[0]._this=null);if((B=C.AOM[
0]._this)&&(B._cycle!=D))B._Done(C.AOM[0]._this=null);if((B=C.APP[0]._this)&&(B.
_cycle!=D))B._Done(C.APP[0]._this=null);if((B=C.AON[0]._this)&&(B._cycle!=D))B._Done(
C.AON[0]._this=null);if((B=C.VK[0]._this)&&(B._cycle!=D))B._Done(C.VK[0]._this=null
);if((B=C.AqN[0]._this)&&(B._cycle!=D))B._Done(C.AqN[0]._this=null);if((B=C.AqG[
0]._this)&&(B._cycle!=D))B._Done(C.AqG[0]._this=null);if((B=C.AK9[0]._this)&&(B.
_cycle!=D))B._Done(C.AK9[0]._this=null);if((B=C.AmM[0]._this)&&(B._cycle!=D))B._Done(
C.AmM[0]._this=null);if((B=C.AP7[0]._this)&&(B._cycle!=D))B._Done(C.AP7[0]._this=
null);if((B=C.AP8[0]._this)&&(B._cycle!=D))B._Done(C.AP8[0]._this=null);if((B=C.
Au9[0]._this)&&(B._cycle!=D))B._Done(C.Au9[0]._this=null);if((B=C.AOU[0]._this)&&(
B._cycle!=D))B._Done(C.AOU[0]._this=null);if((B=C.AK_[0]._this)&&(B._cycle!=D))B.
_Done(C.AK_[0]._this=null);if((B=C.APU[0]._this)&&(B._cycle!=D))B._Done(C.APU[0].
_this=null);if((B=C.Aef[0]._this)&&(B._cycle!=D))B._Done(C.Aef[0]._this=null);if((
B=C.AP5[0]._this)&&(B._cycle!=D))B._Done(C.AP5[0]._this=null);if((B=C.Au_[0]._this
)&&(B._cycle!=D))B._Done(C.Au_[0]._this=null);if((B=C.AP6[0]._this)&&(B._cycle!=
D))B._Done(C.AP6[0]._this=null);if((B=C.AOT[0]._this)&&(B._cycle!=D))B._Done(C.AOT[
0]._this=null);if((B=C.AmL[0]._this)&&(B._cycle!=D))B._Done(C.AmL[0]._this=null);
if((B=C.ADh[0]._this)&&(B._cycle!=D))B._Done(C.ADh[0]._this=null);if((B=C.AmJ[0].
_this)&&(B._cycle!=D))B._Done(C.AmJ[0]._this=null);if((B=C.APX[0]._this)&&(B._cycle
!=D))B._Done(C.APX[0]._this=null);if((B=C.Avg[0]._this)&&(B._cycle!=D))B._Done(C.
Avg[0]._this=null);if((B=C.AK$[0]._this)&&(B._cycle!=D))B._Done(C.AK$[0]._this=null
);if((B=C.Avk[0]._this)&&(B._cycle!=D))B._Done(C.Avk[0]._this=null);if((B=C.AC8[
0]._this)&&(B._cycle!=D))B._Done(C.AC8[0]._this=null);if((B=C.AQd[0]._this)&&(B.
_cycle!=D))B._Done(C.AQd[0]._this=null);if((B=C.APW[0]._this)&&(B._cycle!=D))B._Done(
C.APW[0]._this=null);if((B=C.APH[0]._this)&&(B._cycle!=D))B._Done(C.APH[0]._this=
null);if((B=C.APi[0]._this)&&(B._cycle!=D))B._Done(C.APi[0]._this=null);if((B=C.
APT[0]._this)&&(B._cycle!=D))B._Done(C.APT[0]._this=null);if((B=C.APV[0]._this)&&(
B._cycle!=D))B._Done(C.APV[0]._this=null);if((B=C.AQr[0]._this)&&(B._cycle!=D))B.
_Done(C.AQr[0]._this=null);if((B=C.AQq[0]._this)&&(B._cycle!=D))B._Done(C.AQq[0].
_this=null);if((B=C.APk[0]._this)&&(B._cycle!=D))B._Done(C.APk[0]._this=null);if((
B=C.APu[0]._this)&&(B._cycle!=D))B._Done(C.APu[0]._this=null);if((B=C.AUo[0]._this
)&&(B._cycle!=D))B._Done(C.AUo[0]._this=null);if((B=C.AUq[0]._this)&&(B._cycle!=
D))B._Done(C.AUq[0]._this=null);if((B=C.AUn[0]._this)&&(B._cycle!=D))B._Done(C.AUn[
0]._this=null);if((B=C.Any[0]._this)&&(B._cycle!=D))B._Done(C.Any[0]._this=null);
if((B=C.AQb[0]._this)&&(B._cycle!=D))B._Done(C.AQb[0]._this=null);if((B=C.APM[0].
_this)&&(B._cycle!=D))B._Done(C.APM[0]._this=null);if((B=C.APJ[0]._this)&&(B._cycle
!=D))B._Done(C.APJ[0]._this=null);if((B=C.APK[0]._this)&&(B._cycle!=D))B._Done(C.
APK[0]._this=null);if((B=C.API[0]._this)&&(B._cycle!=D))B._Done(C.API[0]._this=null
);if((B=C.APL[0]._this)&&(B._cycle!=D))B._Done(C.APL[0]._this=null);if((B=C.APN[
0]._this)&&(B._cycle!=D))B._Done(C.APN[0]._this=null);if((B=C.AC_[0]._this)&&(B.
_cycle!=D))B._Done(C.AC_[0]._this=null);if((B=C.APq[0]._this)&&(B._cycle!=D))B._Done(
C.APq[0]._this=null);if((B=C.JE[0]._this)&&(B._cycle!=D))B._Done(C.JE[0]._this=null
);if((B=C.APr[0]._this)&&(B._cycle!=D))B._Done(C.APr[0]._this=null);if((B=C.AC6[
0]._this)&&(B._cycle!=D))B._Done(C.AC6[0]._this=null);if((B=C.APR[0]._this)&&(B.
_cycle!=D))B._Done(C.APR[0]._this=null);if((B=C.AP2[0]._this)&&(B._cycle!=D))B._Done(
C.AP2[0]._this=null);if((B=C.AP1[0]._this)&&(B._cycle!=D))B._Done(C.AP1[0]._this=
null);if((B=C.AP9[0]._this)&&(B._cycle!=D))B._Done(C.AP9[0]._this=null);if((B=C.
APQ[0]._this)&&(B._cycle!=D))B._Done(C.APQ[0]._this=null);if((B=C.APF[0]._this)&&(
B._cycle!=D))B._Done(C.APF[0]._this=null);if((B=C.ACF[0]._this)&&(B._cycle!=D))B.
_Done(C.ACF[0]._this=null);if((B=C.ALa[0]._this)&&(B._cycle!=D))B._Done(C.ALa[0].
_this=null);if((B=C.AC3[0]._this)&&(B._cycle!=D))B._Done(C.AC3[0]._this=null);if((
B=C.AOR[0]._this)&&(B._cycle!=D))B._Done(C.AOR[0]._this=null);if((B=C.AOP[0]._this
)&&(B._cycle!=D))B._Done(C.AOP[0]._this=null);if((B=C.AOS[0]._this)&&(B._cycle!=
D))B._Done(C.AOS[0]._this=null);if((B=C.AOQ[0]._this)&&(B._cycle!=D))B._Done(C.AOQ[
0]._this=null);if((B=C.AQm[0]._this)&&(B._cycle!=D))B._Done(C.AQm[0]._this=null);
if((B=C.AQn[0]._this)&&(B._cycle!=D))B._Done(C.AQn[0]._this=null);if((B=C.APx[0].
_this)&&(B._cycle!=D))B._Done(C.APx[0]._this=null);if((B=C.APy[0]._this)&&(B._cycle
!=D))B._Done(C.APy[0]._this=null);if((B=C.AQo[0]._this)&&(B._cycle!=D))B._Done(C.
AQo[0]._this=null);if((B=C.AQp[0]._this)&&(B._cycle!=D))B._Done(C.AQp[0]._this=null
);if((B=C.APz[0]._this)&&(B._cycle!=D))B._Done(C.APz[0]._this=null);if((B=C.APp[
0]._this)&&(B._cycle!=D))B._Done(C.APp[0]._this=null);if((B=C.ADg[0]._this)&&(B.
_cycle!=D))B._Done(C.ADg[0]._this=null);if((B=C.AOV[0]._this)&&(B._cycle!=D))B._Done(
C.AOV[0]._this=null);if((B=C.APY[0]._this)&&(B._cycle!=D))B._Done(C.APY[0]._this=
null);if((B=C.ALb[0]._this)&&(B._cycle!=D))B._Done(C.ALb[0]._this=null);if((B=C.
APG[0]._this)&&(B._cycle!=D))B._Done(C.APG[0]._this=null);if((B=C.Ave[0]._this)&&(
B._cycle!=D))B._Done(C.Ave[0]._this=null);if((B=C.Au$[0]._this)&&(B._cycle!=D))B.
_Done(C.Au$[0]._this=null);if((B=C.ADc[0]._this)&&(B._cycle!=D))B._Done(C.ADc[0].
_this=null);if((B=C.AC2[0]._this)&&(B._cycle!=D))B._Done(C.AC2[0]._this=null);if((
B=C.Ava[0]._this)&&(B._cycle!=D))B._Done(C.Ava[0]._this=null);if((B=C.APC[0]._this
)&&(B._cycle!=D))B._Done(C.APC[0]._this=null);if((B=C.APB[0]._this)&&(B._cycle!=
D))B._Done(C.APB[0]._this=null);if((B=C.AQc[0]._this)&&(B._cycle!=D))B._Done(C.AQc[
0]._this=null);if((B=C.AOO[0]._this)&&(B._cycle!=D))B._Done(C.AOO[0]._this=null);
if((B=C.AQe[0]._this)&&(B._cycle!=D))B._Done(C.AQe[0]._this=null);if((B=C.ALc[0].
_this)&&(B._cycle!=D))B._Done(C.ALc[0]._this=null);if((B=C.ALd[0]._this)&&(B._cycle
!=D))B._Done(C.ALd[0]._this=null);if((B=C.ABd[0]._this)&&(B._cycle!=D))B._Done(C.
ABd[0]._this=null);if((B=C.AQg[0]._this)&&(B._cycle!=D))B._Done(C.AQg[0]._this=null
);if((B=C.APA[0]._this)&&(B._cycle!=D))B._Done(C.APA[0]._this=null);if((B=C.AQa[
0]._this)&&(B._cycle!=D))B._Done(C.AQa[0]._this=null);if((B=C.AP4[0]._this)&&(B.
_cycle!=D))B._Done(C.AP4[0]._this=null);if((B=C.APl[0]._this)&&(B._cycle!=D))B._Done(
C.APl[0]._this=null);if((B=C.APw[0]._this)&&(B._cycle!=D))B._Done(C.APw[0]._this=
null);if((B=C.APv[0]._this)&&(B._cycle!=D))B._Done(C.APv[0]._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */