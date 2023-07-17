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
);if(index.abi)throw new Error("The unit file 'Res.js' included twice!");index.abi=(
function(){var A=index;var C={};

C.AIG={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:null}};C.AL7={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconLists.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMq={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconSettings.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Aok={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconRFIDTransponder.png",Format:A.jt,NoOfFrames:
3,FrameSize:[82,82],FrameDelay:0,_this:null}};C.Az_={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconRFIDAnim.png",Format:A.jt,NoOfFrames:4,
FrameSize:[52,82],FrameDelay:0,_this:null}};C.AL8={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconLocation.png",Format:A.jt,NoOfFrames:1,FrameSize:[
18,28],FrameDelay:0,_this:null}};C.Ako={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResArrowsSmall.png",Format:A.jt,NoOfFrames:4,FrameSize:[20,20],FrameDelay:
0,_this:null}};C.M4={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:null}};C.AsG={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconMeasureAnim.png",Format:
A.jt,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:null}};C.AsI={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconRatingTemp.png",Format:A.jt,
NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:null}};C.AIF={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResBatteryBig.png",Format:A.jt,NoOfFrames:
1,FrameSize:[90,33],FrameDelay:0,_this:null}};C.AzW={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,34],FrameDelay:0,_this:null}};C.Act={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconFilter.png",Format:A.jt,NoOfFrames:1,FrameSize:[
28,28],FrameDelay:0,_this:null}};C.ALv={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconAnimal.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:
0,_this:null}};C.Az4={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:null}};C.AMt={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconUsb.png",Format:A.jt
,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:null}};C.ALM={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconDevice.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.An6={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResFlashlightOnOff.png",Format:A.jt,NoOfFrames:
2,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AM8={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResLogo.png",Format:A.cC,NoOfFrames:1,FrameSize:[
150,150],FrameDelay:0,_this:null}};C.M5={_class:function(){return A.abj.Ai;},0:{
FileName:"./res_index/ResIconMenuBackground.png",Format:A.jt,NoOfFrames:1,FrameSize:[
116,120],FrameDelay:0,_this:null}};C.AMu={_class:function(){return A.abj.Ai;},0:{
FileName:"./res_index/ResIconVibrateOff.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AMv={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconVibrateOn.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:
0,_this:null}};C.QY={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:null}};C.St={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:null}};C.Acq={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconCalfSmallBase.png",
Format:A.jt,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AMg={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AMh={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AHD={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResA2_Rating.png",Format:A.
jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AHC={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png",
Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AHE={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResA3_Alarm.png",Format:A.
jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AHF={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResA4_OnWatch.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AHG={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResA5_History.png",Format:A.jt,NoOfFrames:2,FrameSize:[
58,58],FrameDelay:0,_this:null}};C.AHI={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResA7_Unregister.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:
0,_this:null}};C.AHJ={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AzR={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAlarmList.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMw={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconWatchList.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALs={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconActions.png",Format:A.jt,NoOfFrames:2,FrameSize:[
97,58],FrameDelay:0,_this:null}};C.ET={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconArrowBack.png",Format:A.jt,NoOfFrames:1,FrameSize:[49,29],FrameDelay:
0,_this:null}};C.AI3={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AnX={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResDecoratorPlus.png",Format:
A.jt,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:null}};C.AyX={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResDecoratorMinus.png",Format:A.jt,
NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:null}};C.AHL={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResA9_WeighingKg.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AHK={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResA9WeighingLbs.png",Format:A.jt,NoOfFrames:2
,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AhM={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconSettingsSmall.png",Format:A.jt,NoOfFrames:1
,FrameSize:[25,25],FrameDelay:0,_this:null}};C.Acr={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconClose.png",Format:A.jt,NoOfFrames:1,FrameSize:[
26,30],FrameDelay:0,_this:null}};C.AL0={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconHerd.png",Format:A.jt,NoOfFrames:2,FrameSize:[100,80],FrameDelay:
0,_this:null}};C.AMs={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:null}};C.Az8={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconNewAnimal.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AsH={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconNewAnimals.png",Format:A.jt,
NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AHH={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResA6_AnimalLoss.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AsC={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconCowSmallBase.png",Format:A.jt,NoOfFrames:
2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.ALC={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconAutoActions.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Az9={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconOnWatch.png",Format:A.jt,NoOfFrames:1,FrameSize:[
28,40],FrameDelay:0,_this:null}};C.Az0={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconExclamationMark.png",Format:A.jt,NoOfFrames:1,FrameSize:[11,
40],FrameDelay:0,_this:null}};C.AHu={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResA10_FirstFeeding.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58]
,FrameDelay:0,_this:null}};C.ZH={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconThermometer.png",Format:A.jt,NoOfFrames:1,FrameSize:[14,40],
FrameDelay:0,_this:null}};C.Az2={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconFemale.png",Format:A.jt,NoOfFrames:1,FrameSize:[17,40],FrameDelay:
0,_this:null}};C.AsB={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:null}};C.AzX={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconCow.png",Format:A.jt
,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AL$={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconMale.png",Format:A.jt,NoOfFrames:
1,FrameSize:[21,40],FrameDelay:0,_this:null}};C.AkS={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconRatingEye.png",Format:A.cC,NoOfFrames:1
,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AhK={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconCalfBasicData.png",Format:A.jt,NoOfFrames:1
,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AsK={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconWeightKG.png",Format:A.jt,NoOfFrames:1,FrameSize:[
26,40],FrameDelay:0,_this:null}};C.AsL={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconWeightLBS.png",Format:A.jt,NoOfFrames:1,FrameSize:[26,40],FrameDelay:
0,_this:null}};C.Az6={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.JI={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResColoredCircle.png",Format:
A.jt,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:null}};C.ALw={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AI2={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResCharts.png",Format:A.jt,NoOfFrames:
1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AIz={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResArrowLeft.png",Format:A.jt,NoOfFrames:1,FrameSize:[
15,40],FrameDelay:0,_this:null}};C.Ahg={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResArrowRight.png",Format:A.jt,NoOfFrames:1,FrameSize:[15,40],FrameDelay:
0,_this:null}};C.Av={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Options={
_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResOptions.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Az5={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconInfo.png",Format:A.jt,NoOfFrames:
1,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AIA={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResArrowUpDown.png",Format:A.jt,NoOfFrames:1,FrameSize:[
27,40],FrameDelay:0,_this:null}};C.Edit={_class:function(){return A.abj.Ai;},0:{
FileName:"./res_index/ResEdit.png",Format:A.jt,NoOfFrames:1,FrameSize:[28,30],FrameDelay:
0,_this:null}};C.Ac$={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:null}};C.ALx={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.ALB={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Ayk={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResAttention.png",Format:A.
cC,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:null}};C.ACv={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.Apq={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResRemoveFromWatchList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AzA={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png",Format:
A.jt,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:null}};C.Azz={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png",Format:A.
jt,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:null}};C.AzB={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconSettings.png",Format:A.
jt,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:null}};C.AKX={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconDevice.png",Format:A.jt
,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:null}};C.ALX={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconFreshCowsList.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AKY={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AhL={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png",Format:A.
jt,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:null}};C.AsJ={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconUp.png",Format:A.jt,NoOfFrames:
1,FrameSize:[23,40],FrameDelay:0,_this:null}};C.AsD={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconDown.png",Format:A.jt,NoOfFrames:1,FrameSize:[
23,40],FrameDelay:0,_this:null}};C.AHv={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResA11_LinkTransponderID.png",Format:A.jt,NoOfFrames:2,FrameSize:[58
,58],FrameDelay:0,_this:null}};C.Aoo={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[33,40],
FrameDelay:0,_this:null}};C.AMd={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconNoTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[30,40
],FrameDelay:0,_this:null}};C.AMe={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconNoTransponderList.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.Asy={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconAddTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[34,40
],FrameDelay:0,_this:null}};C.AK5={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResHeaderIconNoTranponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[
27,40],FrameDelay:0,_this:null}};C.AHw={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResA12_AutoActions.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58],
FrameDelay:0,_this:null}};C.AL2={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconHideTempLast6h.png",Format:A.jt,NoOfFrames:1,FrameSize:[41,40
],FrameDelay:0,_this:null}};C.Acs={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconContinue.png",Format:A.jt,NoOfFrames:1,FrameSize:[31,24],FrameDelay:
0,_this:null}};C.AMb={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AzS={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:null}};C.AMc={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AK4={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Aom={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconSave.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.Az$={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconSaveAndContinue.png",Format:A.jt,NoOfFrames:
1,FrameSize:[79,40],FrameDelay:0,_this:null}};C.AkR={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconBack.png",Format:A.jt,NoOfFrames:1,FrameSize:[
31,24],FrameDelay:0,_this:null}};C.AL5={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconLamb.png",Format:A.jt,NoOfFrames:1,FrameSize:[38,40],FrameDelay:
0,_this:null}};C.AsF={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AHx={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResA13_Calving.png",Format:
A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.Aol={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconReset_Retry.png",Format:A.jt
,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.Az1={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png",Format:A.
jt,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:null}};C.AMo={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:null}};C.AL4={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconIDRange.png",Format:A.jt,NoOfFrames:
1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ALP={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconEvaluation.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALr={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconActionListKg.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AL1={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png",Format:A.jt,NoOfFrames:
1,FrameSize:[45,40],FrameDelay:0,_this:null}};C.AL3={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png",Format:A.jt,NoOfFrames:
1,FrameSize:[45,40],FrameDelay:0,_this:null}};C.AMC={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconsViewSwitching.png",Format:A.jt,NoOfFrames:
5,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AMB={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconsMiddleButton.png",Format:A.jt,NoOfFrames:
2,FrameSize:[50,40],FrameDelay:0,_this:null}};C.ALt={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconActions_Footer.png",Format:A.jt,NoOfFrames:
1,FrameSize:[39,40],FrameDelay:0,_this:null}};C.ALD={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png",Format:A.jt,NoOfFrames:
1,FrameSize:[36,40],FrameDelay:0,_this:null}};C.AP1={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResSwitchGenerateID.png",Format:A.jt,NoOfFrames:
7,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AP3={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png",Format:A.jt,NoOfFrames:
4,FrameSize:[20,40],FrameDelay:0,_this:null}};C.AP0={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png",Format:A.jt,NoOfFrames:
8,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AlC={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResResetToDefault.png",Format:A.jt,NoOfFrames:
1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AMj={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconRFIDEartag.png",Format:A.jt,NoOfFrames:
3,FrameSize:[120,125],FrameDelay:0,_this:null}};C.ALU={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationWeight.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALR={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALS={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png",Format:A.jt,
NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALQ={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALT={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALV={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Az3={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconFilterRemoval.png",
Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.ALz={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:null}};C.SB={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalHerd.png",Format:
A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ALA={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png",Format:
A.jt,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:null}};C.AzZ={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconEvaluationLists.png",Format:
A.jt,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.ALZ={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconHeaderLosses.png",Format:A.jt
,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AL_={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconLossesPercent.png",Format:A.
jt,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AL9={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconLossesNumber.png",Format:A.jt
,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AMf={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconNumberInHerd.png",Format:A.jt
,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:null}};C.ALY={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconHeaderHerd.png",Format:A.jt,
NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:null}};C.ALN={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconDryCowsList.png",Format:A.jt
,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Azy={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AHy={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResA14_DryingOff.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ALG={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconCalving.png",Format:A.jt,NoOfFrames:1,FrameSize:[
32,40],FrameDelay:0,_this:null}};C.AK2={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResHeaderIconNewLamb.png",Format:A.jt,NoOfFrames:1,FrameSize:[48,40
],FrameDelay:0,_this:null}};C.AK0={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResHeaderIconNewCow.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40]
,FrameDelay:0,_this:null}};C.AK3={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResHeaderIconNewLambs.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40
],FrameDelay:0,_this:null}};C.AK1={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResHeaderIconNewCows.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40
],FrameDelay:0,_this:null}};C.AMx={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconWeighingToday.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80
],FrameDelay:0,_this:null}};C.AMy={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconWeighingTodayLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.ALE={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconBirthWeights.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80]
,FrameDelay:0,_this:null}};C.ALF={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconBirthWeightsLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,
80],FrameDelay:0,_this:null}};C.AMz={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconWeightDevelopment.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.AMA={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconWeightDevelopmentLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[
96,80],FrameDelay:0,_this:null}};C.ALH={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconCalvingXL.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:
0,_this:null}};C.ALy={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMn={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconRegistrations.png",
Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AK6={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AL6={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconLinkAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AHz={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png",Format:
A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AMl={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconRegistrationDetail.png",Format:
A.jt,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:null}};C.AMm={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconRegistrationList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:null}};C.ALO={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconEartagCow.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AzY={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconEartagCalf.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AzU={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconBirthDate.png",Format:A.jt,NoOfFrames:1
,FrameSize:[40,40],FrameDelay:0,_this:null}};C.Az7={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconMaleOrFemale.png",Format:A.jt,NoOfFrames:1,
FrameSize:[28,40],FrameDelay:0,_this:null}};C.AzV={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconBirthSingle.png",Format:A.jt,NoOfFrames:1,FrameSize:[
34,40],FrameDelay:0,_this:null}};C.Asz={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconBirthMultiples.png",Format:A.jt,NoOfFrames:3,FrameSize:[42,40
],FrameDelay:0,_this:null}};C.ALK={_class:function(){return A.abj.Ai;},0:{FileName:
"./res_index/ResIconDamList.png",Format:A.jt,NoOfFrames:3,FrameSize:[30,36],FrameDelay:
0,_this:null}};C.ALJ={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AMk={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:null}};C.AKZ={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:null}};C.AMp={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AHA={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AHB={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.Ayi={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/ResArrowsLeftRight.png",Format:
A.jt,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:null}};C.AMr={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ResIconStack.png",Format:A.jt,NoOfFrames:
1,FrameSize:[32,25],FrameDelay:0,_this:null}};C.ALI={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconCalvings.png",Format:A.jt,NoOfFrames:2,
FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMi={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png",Format:A.cC,NoOfFrames:
1,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AMa={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconNewNoTransponder.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ALu={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ResIconAgeRange.png",Format:A.jt,NoOfFrames:1,
FrameSize:[40,40],FrameDelay:0,_this:null}};
C._Init=function(){};C._ReInit=function(){};C.Dq=function(D){var B;if((B=C.AIG[0].
_this)&&(B._cycle!=D))B._Done(C.AIG[0]._this=null);if((B=C.AL7[0]._this)&&(B._cycle
!=D))B._Done(C.AL7[0]._this=null);if((B=C.AMq[0]._this)&&(B._cycle!=D))B._Done(C.
AMq[0]._this=null);if((B=C.Aok[0]._this)&&(B._cycle!=D))B._Done(C.Aok[0]._this=null
);if((B=C.Az_[0]._this)&&(B._cycle!=D))B._Done(C.Az_[0]._this=null);if((B=C.AL8[
0]._this)&&(B._cycle!=D))B._Done(C.AL8[0]._this=null);if((B=C.Ako[0]._this)&&(B.
_cycle!=D))B._Done(C.Ako[0]._this=null);if((B=C.M4[0]._this)&&(B._cycle!=D))B._Done(
C.M4[0]._this=null);if((B=C.AsG[0]._this)&&(B._cycle!=D))B._Done(C.AsG[0]._this=
null);if((B=C.AsI[0]._this)&&(B._cycle!=D))B._Done(C.AsI[0]._this=null);if((B=C.
AIF[0]._this)&&(B._cycle!=D))B._Done(C.AIF[0]._this=null);if((B=C.AzW[0]._this)&&(
B._cycle!=D))B._Done(C.AzW[0]._this=null);if((B=C.Act[0]._this)&&(B._cycle!=D))B.
_Done(C.Act[0]._this=null);if((B=C.ALv[0]._this)&&(B._cycle!=D))B._Done(C.ALv[0].
_this=null);if((B=C.Az4[0]._this)&&(B._cycle!=D))B._Done(C.Az4[0]._this=null);if((
B=C.AMt[0]._this)&&(B._cycle!=D))B._Done(C.AMt[0]._this=null);if((B=C.ALM[0]._this
)&&(B._cycle!=D))B._Done(C.ALM[0]._this=null);if((B=C.An6[0]._this)&&(B._cycle!=
D))B._Done(C.An6[0]._this=null);if((B=C.AM8[0]._this)&&(B._cycle!=D))B._Done(C.AM8[
0]._this=null);if((B=C.M5[0]._this)&&(B._cycle!=D))B._Done(C.M5[0]._this=null);if((
B=C.AMu[0]._this)&&(B._cycle!=D))B._Done(C.AMu[0]._this=null);if((B=C.AMv[0]._this
)&&(B._cycle!=D))B._Done(C.AMv[0]._this=null);if((B=C.QY[0]._this)&&(B._cycle!=D
))B._Done(C.QY[0]._this=null);if((B=C.St[0]._this)&&(B._cycle!=D))B._Done(C.St[0
]._this=null);if((B=C.Acq[0]._this)&&(B._cycle!=D))B._Done(C.Acq[0]._this=null);
if((B=C.AMg[0]._this)&&(B._cycle!=D))B._Done(C.AMg[0]._this=null);if((B=C.AMh[0].
_this)&&(B._cycle!=D))B._Done(C.AMh[0]._this=null);if((B=C.AHD[0]._this)&&(B._cycle
!=D))B._Done(C.AHD[0]._this=null);if((B=C.AHC[0]._this)&&(B._cycle!=D))B._Done(C.
AHC[0]._this=null);if((B=C.AHE[0]._this)&&(B._cycle!=D))B._Done(C.AHE[0]._this=null
);if((B=C.AHF[0]._this)&&(B._cycle!=D))B._Done(C.AHF[0]._this=null);if((B=C.AHG[
0]._this)&&(B._cycle!=D))B._Done(C.AHG[0]._this=null);if((B=C.AHI[0]._this)&&(B.
_cycle!=D))B._Done(C.AHI[0]._this=null);if((B=C.AHJ[0]._this)&&(B._cycle!=D))B._Done(
C.AHJ[0]._this=null);if((B=C.AzR[0]._this)&&(B._cycle!=D))B._Done(C.AzR[0]._this=
null);if((B=C.AMw[0]._this)&&(B._cycle!=D))B._Done(C.AMw[0]._this=null);if((B=C.
ALs[0]._this)&&(B._cycle!=D))B._Done(C.ALs[0]._this=null);if((B=C.ET[0]._this)&&(
B._cycle!=D))B._Done(C.ET[0]._this=null);if((B=C.AI3[0]._this)&&(B._cycle!=D))B.
_Done(C.AI3[0]._this=null);if((B=C.AnX[0]._this)&&(B._cycle!=D))B._Done(C.AnX[0].
_this=null);if((B=C.AyX[0]._this)&&(B._cycle!=D))B._Done(C.AyX[0]._this=null);if((
B=C.AHL[0]._this)&&(B._cycle!=D))B._Done(C.AHL[0]._this=null);if((B=C.AHK[0]._this
)&&(B._cycle!=D))B._Done(C.AHK[0]._this=null);if((B=C.AhM[0]._this)&&(B._cycle!=
D))B._Done(C.AhM[0]._this=null);if((B=C.Acr[0]._this)&&(B._cycle!=D))B._Done(C.Acr[
0]._this=null);if((B=C.AL0[0]._this)&&(B._cycle!=D))B._Done(C.AL0[0]._this=null);
if((B=C.AMs[0]._this)&&(B._cycle!=D))B._Done(C.AMs[0]._this=null);if((B=C.Az8[0].
_this)&&(B._cycle!=D))B._Done(C.Az8[0]._this=null);if((B=C.AsH[0]._this)&&(B._cycle
!=D))B._Done(C.AsH[0]._this=null);if((B=C.AHH[0]._this)&&(B._cycle!=D))B._Done(C.
AHH[0]._this=null);if((B=C.AsC[0]._this)&&(B._cycle!=D))B._Done(C.AsC[0]._this=null
);if((B=C.ALC[0]._this)&&(B._cycle!=D))B._Done(C.ALC[0]._this=null);if((B=C.Az9[
0]._this)&&(B._cycle!=D))B._Done(C.Az9[0]._this=null);if((B=C.Az0[0]._this)&&(B.
_cycle!=D))B._Done(C.Az0[0]._this=null);if((B=C.AHu[0]._this)&&(B._cycle!=D))B._Done(
C.AHu[0]._this=null);if((B=C.ZH[0]._this)&&(B._cycle!=D))B._Done(C.ZH[0]._this=null
);if((B=C.Az2[0]._this)&&(B._cycle!=D))B._Done(C.Az2[0]._this=null);if((B=C.AsB[
0]._this)&&(B._cycle!=D))B._Done(C.AsB[0]._this=null);if((B=C.AzX[0]._this)&&(B.
_cycle!=D))B._Done(C.AzX[0]._this=null);if((B=C.AL$[0]._this)&&(B._cycle!=D))B._Done(
C.AL$[0]._this=null);if((B=C.AkS[0]._this)&&(B._cycle!=D))B._Done(C.AkS[0]._this=
null);if((B=C.AhK[0]._this)&&(B._cycle!=D))B._Done(C.AhK[0]._this=null);if((B=C.
AsK[0]._this)&&(B._cycle!=D))B._Done(C.AsK[0]._this=null);if((B=C.AsL[0]._this)&&(
B._cycle!=D))B._Done(C.AsL[0]._this=null);if((B=C.Az6[0]._this)&&(B._cycle!=D))B.
_Done(C.Az6[0]._this=null);if((B=C.JI[0]._this)&&(B._cycle!=D))B._Done(C.JI[0]._this=
null);if((B=C.ALw[0]._this)&&(B._cycle!=D))B._Done(C.ALw[0]._this=null);if((B=C.
AI2[0]._this)&&(B._cycle!=D))B._Done(C.AI2[0]._this=null);if((B=C.AIz[0]._this)&&(
B._cycle!=D))B._Done(C.AIz[0]._this=null);if((B=C.Ahg[0]._this)&&(B._cycle!=D))B.
_Done(C.Ahg[0]._this=null);if((B=C.Av[0]._this)&&(B._cycle!=D))B._Done(C.Av[0]._this=
null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0]._this=null);
if((B=C.Az5[0]._this)&&(B._cycle!=D))B._Done(C.Az5[0]._this=null);if((B=C.AIA[0].
_this)&&(B._cycle!=D))B._Done(C.AIA[0]._this=null);if((B=C.Edit[0]._this)&&(B._cycle
!=D))B._Done(C.Edit[0]._this=null);if((B=C.Ac$[0]._this)&&(B._cycle!=D))B._Done(
C.Ac$[0]._this=null);if((B=C.ALx[0]._this)&&(B._cycle!=D))B._Done(C.ALx[0]._this=
null);if((B=C.ALB[0]._this)&&(B._cycle!=D))B._Done(C.ALB[0]._this=null);if((B=C.
Ayk[0]._this)&&(B._cycle!=D))B._Done(C.Ayk[0]._this=null);if((B=C.ACv[0]._this)&&(
B._cycle!=D))B._Done(C.ACv[0]._this=null);if((B=C.Apq[0]._this)&&(B._cycle!=D))B.
_Done(C.Apq[0]._this=null);if((B=C.AzA[0]._this)&&(B._cycle!=D))B._Done(C.AzA[0].
_this=null);if((B=C.Azz[0]._this)&&(B._cycle!=D))B._Done(C.Azz[0]._this=null);if((
B=C.AzB[0]._this)&&(B._cycle!=D))B._Done(C.AzB[0]._this=null);if((B=C.AKX[0]._this
)&&(B._cycle!=D))B._Done(C.AKX[0]._this=null);if((B=C.ALX[0]._this)&&(B._cycle!=
D))B._Done(C.ALX[0]._this=null);if((B=C.AKY[0]._this)&&(B._cycle!=D))B._Done(C.AKY[
0]._this=null);if((B=C.AhL[0]._this)&&(B._cycle!=D))B._Done(C.AhL[0]._this=null);
if((B=C.AsJ[0]._this)&&(B._cycle!=D))B._Done(C.AsJ[0]._this=null);if((B=C.AsD[0].
_this)&&(B._cycle!=D))B._Done(C.AsD[0]._this=null);if((B=C.AHv[0]._this)&&(B._cycle
!=D))B._Done(C.AHv[0]._this=null);if((B=C.Aoo[0]._this)&&(B._cycle!=D))B._Done(C.
Aoo[0]._this=null);if((B=C.AMd[0]._this)&&(B._cycle!=D))B._Done(C.AMd[0]._this=null
);if((B=C.AMe[0]._this)&&(B._cycle!=D))B._Done(C.AMe[0]._this=null);if((B=C.Asy[
0]._this)&&(B._cycle!=D))B._Done(C.Asy[0]._this=null);if((B=C.AK5[0]._this)&&(B.
_cycle!=D))B._Done(C.AK5[0]._this=null);if((B=C.AHw[0]._this)&&(B._cycle!=D))B._Done(
C.AHw[0]._this=null);if((B=C.AL2[0]._this)&&(B._cycle!=D))B._Done(C.AL2[0]._this=
null);if((B=C.Acs[0]._this)&&(B._cycle!=D))B._Done(C.Acs[0]._this=null);if((B=C.
AMb[0]._this)&&(B._cycle!=D))B._Done(C.AMb[0]._this=null);if((B=C.AzS[0]._this)&&(
B._cycle!=D))B._Done(C.AzS[0]._this=null);if((B=C.AMc[0]._this)&&(B._cycle!=D))B.
_Done(C.AMc[0]._this=null);if((B=C.AK4[0]._this)&&(B._cycle!=D))B._Done(C.AK4[0].
_this=null);if((B=C.Aom[0]._this)&&(B._cycle!=D))B._Done(C.Aom[0]._this=null);if((
B=C.Az$[0]._this)&&(B._cycle!=D))B._Done(C.Az$[0]._this=null);if((B=C.AkR[0]._this
)&&(B._cycle!=D))B._Done(C.AkR[0]._this=null);if((B=C.AL5[0]._this)&&(B._cycle!=
D))B._Done(C.AL5[0]._this=null);if((B=C.AsF[0]._this)&&(B._cycle!=D))B._Done(C.AsF[
0]._this=null);if((B=C.AHx[0]._this)&&(B._cycle!=D))B._Done(C.AHx[0]._this=null);
if((B=C.Aol[0]._this)&&(B._cycle!=D))B._Done(C.Aol[0]._this=null);if((B=C.Az1[0].
_this)&&(B._cycle!=D))B._Done(C.Az1[0]._this=null);if((B=C.AMo[0]._this)&&(B._cycle
!=D))B._Done(C.AMo[0]._this=null);if((B=C.AL4[0]._this)&&(B._cycle!=D))B._Done(C.
AL4[0]._this=null);if((B=C.ALP[0]._this)&&(B._cycle!=D))B._Done(C.ALP[0]._this=null
);if((B=C.ALr[0]._this)&&(B._cycle!=D))B._Done(C.ALr[0]._this=null);if((B=C.AL1[
0]._this)&&(B._cycle!=D))B._Done(C.AL1[0]._this=null);if((B=C.AL3[0]._this)&&(B.
_cycle!=D))B._Done(C.AL3[0]._this=null);if((B=C.AMC[0]._this)&&(B._cycle!=D))B._Done(
C.AMC[0]._this=null);if((B=C.AMB[0]._this)&&(B._cycle!=D))B._Done(C.AMB[0]._this=
null);if((B=C.ALt[0]._this)&&(B._cycle!=D))B._Done(C.ALt[0]._this=null);if((B=C.
ALD[0]._this)&&(B._cycle!=D))B._Done(C.ALD[0]._this=null);if((B=C.AP1[0]._this)&&(
B._cycle!=D))B._Done(C.AP1[0]._this=null);if((B=C.AP3[0]._this)&&(B._cycle!=D))B.
_Done(C.AP3[0]._this=null);if((B=C.AP0[0]._this)&&(B._cycle!=D))B._Done(C.AP0[0].
_this=null);if((B=C.AlC[0]._this)&&(B._cycle!=D))B._Done(C.AlC[0]._this=null);if((
B=C.AMj[0]._this)&&(B._cycle!=D))B._Done(C.AMj[0]._this=null);if((B=C.ALU[0]._this
)&&(B._cycle!=D))B._Done(C.ALU[0]._this=null);if((B=C.ALR[0]._this)&&(B._cycle!=
D))B._Done(C.ALR[0]._this=null);if((B=C.ALS[0]._this)&&(B._cycle!=D))B._Done(C.ALS[
0]._this=null);if((B=C.ALQ[0]._this)&&(B._cycle!=D))B._Done(C.ALQ[0]._this=null);
if((B=C.ALT[0]._this)&&(B._cycle!=D))B._Done(C.ALT[0]._this=null);if((B=C.ALV[0].
_this)&&(B._cycle!=D))B._Done(C.ALV[0]._this=null);if((B=C.Az3[0]._this)&&(B._cycle
!=D))B._Done(C.Az3[0]._this=null);if((B=C.ALz[0]._this)&&(B._cycle!=D))B._Done(C.
ALz[0]._this=null);if((B=C.SB[0]._this)&&(B._cycle!=D))B._Done(C.SB[0]._this=null
);if((B=C.ALA[0]._this)&&(B._cycle!=D))B._Done(C.ALA[0]._this=null);if((B=C.AzZ[
0]._this)&&(B._cycle!=D))B._Done(C.AzZ[0]._this=null);if((B=C.ALZ[0]._this)&&(B.
_cycle!=D))B._Done(C.ALZ[0]._this=null);if((B=C.AL_[0]._this)&&(B._cycle!=D))B._Done(
C.AL_[0]._this=null);if((B=C.AL9[0]._this)&&(B._cycle!=D))B._Done(C.AL9[0]._this=
null);if((B=C.AMf[0]._this)&&(B._cycle!=D))B._Done(C.AMf[0]._this=null);if((B=C.
ALY[0]._this)&&(B._cycle!=D))B._Done(C.ALY[0]._this=null);if((B=C.ALN[0]._this)&&(
B._cycle!=D))B._Done(C.ALN[0]._this=null);if((B=C.Azy[0]._this)&&(B._cycle!=D))B.
_Done(C.Azy[0]._this=null);if((B=C.AHy[0]._this)&&(B._cycle!=D))B._Done(C.AHy[0].
_this=null);if((B=C.ALG[0]._this)&&(B._cycle!=D))B._Done(C.ALG[0]._this=null);if((
B=C.AK2[0]._this)&&(B._cycle!=D))B._Done(C.AK2[0]._this=null);if((B=C.AK0[0]._this
)&&(B._cycle!=D))B._Done(C.AK0[0]._this=null);if((B=C.AK3[0]._this)&&(B._cycle!=
D))B._Done(C.AK3[0]._this=null);if((B=C.AK1[0]._this)&&(B._cycle!=D))B._Done(C.AK1[
0]._this=null);if((B=C.AMx[0]._this)&&(B._cycle!=D))B._Done(C.AMx[0]._this=null);
if((B=C.AMy[0]._this)&&(B._cycle!=D))B._Done(C.AMy[0]._this=null);if((B=C.ALE[0].
_this)&&(B._cycle!=D))B._Done(C.ALE[0]._this=null);if((B=C.ALF[0]._this)&&(B._cycle
!=D))B._Done(C.ALF[0]._this=null);if((B=C.AMz[0]._this)&&(B._cycle!=D))B._Done(C.
AMz[0]._this=null);if((B=C.AMA[0]._this)&&(B._cycle!=D))B._Done(C.AMA[0]._this=null
);if((B=C.ALH[0]._this)&&(B._cycle!=D))B._Done(C.ALH[0]._this=null);if((B=C.ALy[
0]._this)&&(B._cycle!=D))B._Done(C.ALy[0]._this=null);if((B=C.AMn[0]._this)&&(B.
_cycle!=D))B._Done(C.AMn[0]._this=null);if((B=C.AK6[0]._this)&&(B._cycle!=D))B._Done(
C.AK6[0]._this=null);if((B=C.AL6[0]._this)&&(B._cycle!=D))B._Done(C.AL6[0]._this=
null);if((B=C.AHz[0]._this)&&(B._cycle!=D))B._Done(C.AHz[0]._this=null);if((B=C.
AMl[0]._this)&&(B._cycle!=D))B._Done(C.AMl[0]._this=null);if((B=C.AMm[0]._this)&&(
B._cycle!=D))B._Done(C.AMm[0]._this=null);if((B=C.ALO[0]._this)&&(B._cycle!=D))B.
_Done(C.ALO[0]._this=null);if((B=C.AzY[0]._this)&&(B._cycle!=D))B._Done(C.AzY[0].
_this=null);if((B=C.AzU[0]._this)&&(B._cycle!=D))B._Done(C.AzU[0]._this=null);if((
B=C.Az7[0]._this)&&(B._cycle!=D))B._Done(C.Az7[0]._this=null);if((B=C.AzV[0]._this
)&&(B._cycle!=D))B._Done(C.AzV[0]._this=null);if((B=C.Asz[0]._this)&&(B._cycle!=
D))B._Done(C.Asz[0]._this=null);if((B=C.ALK[0]._this)&&(B._cycle!=D))B._Done(C.ALK[
0]._this=null);if((B=C.ALJ[0]._this)&&(B._cycle!=D))B._Done(C.ALJ[0]._this=null);
if((B=C.AMk[0]._this)&&(B._cycle!=D))B._Done(C.AMk[0]._this=null);if((B=C.AKZ[0].
_this)&&(B._cycle!=D))B._Done(C.AKZ[0]._this=null);if((B=C.AMp[0]._this)&&(B._cycle
!=D))B._Done(C.AMp[0]._this=null);if((B=C.AHA[0]._this)&&(B._cycle!=D))B._Done(C.
AHA[0]._this=null);if((B=C.AHB[0]._this)&&(B._cycle!=D))B._Done(C.AHB[0]._this=null
);if((B=C.Ayi[0]._this)&&(B._cycle!=D))B._Done(C.Ayi[0]._this=null);if((B=C.AMr[
0]._this)&&(B._cycle!=D))B._Done(C.AMr[0]._this=null);if((B=C.ALI[0]._this)&&(B.
_cycle!=D))B._Done(C.ALI[0]._this=null);if((B=C.AMi[0]._this)&&(B._cycle!=D))B._Done(
C.AMi[0]._this=null);if((B=C.AMa[0]._this)&&(B._cycle!=D))B._Done(C.AMa[0]._this=
null);if((B=C.ALu[0]._this)&&(B._cycle!=D))B._Done(C.ALu[0]._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */