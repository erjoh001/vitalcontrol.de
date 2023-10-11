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

C.AKI={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:null}};C.AOd={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLists.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AOv={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconSettings.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ApO={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRFIDTransponder.png",Format:A.jt,NoOfFrames:
3,FrameSize:[82,82],FrameDelay:0,_this:null}};C.ABS={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRFIDAnim.png",Format:A.jt,NoOfFrames:4,
FrameSize:[52,82],FrameDelay:0,_this:null}};C.AOe={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconLocation.png",Format:A.jt,NoOfFrames:1,FrameSize:[
18,28],FrameDelay:0,_this:null}};C.AlD={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResArrowsSmall.png",Format:A.jt,NoOfFrames:4,FrameSize:[20,20],FrameDelay:
0,_this:null}};C.NK={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:null}};C.Aue={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconMeasureAnim.png",Format:
A.jt,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:null}};C.Aug={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRatingTemp.png",Format:A.jt,
NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:null}};C.AKH={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResBatteryBig.png",Format:A.jt,NoOfFrames:
1,FrameSize:[90,33],FrameDelay:0,_this:null}};C.ABF={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AdB={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconFilter.png",Format:A.jt,NoOfFrames:1,FrameSize:[
28,28],FrameDelay:0,_this:null}};C.ANB={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconAnimal.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:
0,_this:null}};C.ABM={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:null}};C.AOy={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconUsb.png",Format:A.jt
,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:null}};C.ANU={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconDevice.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Apv={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResFlashlightOnOff.png",Format:A.jt,NoOfFrames:
2,FrameSize:[40,40],FrameDelay:0,_this:null}};C.APc={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResLogo.png",Format:A.cC,NoOfFrames:1,FrameSize:[
150,150],FrameDelay:0,_this:null}};C.NL={_class:function(){return A.abj.Aj;},0:{
FileName:"./res_index/ResIconMenuBackground.png",Format:A.jt,NoOfFrames:1,FrameSize:[
116,120],FrameDelay:0,_this:null}};C.AOz={_class:function(){return A.abj.Aj;},0:{
FileName:"./res_index/ResIconVibrateOff.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AOA={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconVibrateOn.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:
0,_this:null}};C.RD={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:null}};C.S$={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:null}};C.Ady={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCalfSmallBase.png",
Format:A.jt,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AOo={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AOp={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AJF={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA2_Rating.png",Format:A.
jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJE={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png",
Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJG={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA3_Alarm.png",Format:A.
jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJH={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA4_OnWatch.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJI={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResA5_History.png",Format:A.jt,NoOfFrames:2,FrameSize:[
58,58],FrameDelay:0,_this:null}};C.AJK={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA7_Unregister.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:
0,_this:null}};C.AJL={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ABB={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAlarmList.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AOB={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconWatchList.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANy={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconActions.png",Format:A.jt,NoOfFrames:2,FrameSize:[
97,58],FrameDelay:0,_this:null}};C.EU={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconArrowBack.png",Format:A.jt,NoOfFrames:1,FrameSize:[49,29],FrameDelay:
0,_this:null}};C.AK9={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:null}};C.Apm={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResDecoratorPlus.png",Format:
A.jt,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:null}};C.AAF={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResDecoratorMinus.png",Format:A.jt,
NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:null}};C.AJN={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA9_WeighingKg.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJM={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResA9WeighingLbs.png",Format:A.jt,NoOfFrames:2
,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AaM={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconSettingsSmall.png",Format:A.jt,NoOfFrames:1
,FrameSize:[25,25],FrameDelay:0,_this:null}};C.Adz={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconClose.png",Format:A.jt,NoOfFrames:1,FrameSize:[
26,30],FrameDelay:0,_this:null}};C.AN8={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconHerd.png",Format:A.jt,NoOfFrames:2,FrameSize:[100,80],FrameDelay:
0,_this:null}};C.AOx={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:null}};C.ABQ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNewAnimal.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Auf={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNewAnimals.png",Format:A.jt,
NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AJJ={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA6_AnimalLoss.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.Aua={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCowSmallBase.png",Format:A.jt,NoOfFrames:
2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.ANI={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconAutoActions.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABR={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconOnWatch.png",Format:A.jt,NoOfFrames:1,FrameSize:[
28,40],FrameDelay:0,_this:null}};C.ABI={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconExclamationMark.png",Format:A.jt,NoOfFrames:1,FrameSize:[11,
40],FrameDelay:0,_this:null}};C.AJw={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA10_FirstFeeding.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58]
,FrameDelay:0,_this:null}};C.AaN={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconThermometer.png",Format:A.jt,NoOfFrames:1,FrameSize:[14,40],
FrameDelay:0,_this:null}};C.ABK={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconFemale.png",Format:A.jt,NoOfFrames:1,FrameSize:[17,40],FrameDelay:
0,_this:null}};C.At$={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:null}};C.ABG={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCow.png",Format:A.jt
,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AOh={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconMale.png",Format:A.jt,NoOfFrames:
1,FrameSize:[21,40],FrameDelay:0,_this:null}};C.Al7={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRatingEye.png",Format:A.cC,NoOfFrames:1
,FrameSize:[28,40],FrameDelay:0,_this:null}};C.Ai9={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconCalfBasicData.png",Format:A.jt,NoOfFrames:1
,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Auh={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconWeightKG.png",Format:A.jt,NoOfFrames:1,FrameSize:[
26,40],FrameDelay:0,_this:null}};C.Aui={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeightLBS.png",Format:A.jt,NoOfFrames:1,FrameSize:[26,40],FrameDelay:
0,_this:null}};C.ABO={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.J8={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResColoredCircle.png",Format:
A.jt,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:null}};C.ANC={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AK8={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResCharts.png",Format:A.jt,NoOfFrames:
1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AKC={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResArrowLeft.png",Format:A.jt,NoOfFrames:1,FrameSize:[
15,40],FrameDelay:0,_this:null}};C.AiB={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResArrowRight.png",Format:A.jt,NoOfFrames:1,FrameSize:[15,40],FrameDelay:
0,_this:null}};C.AC={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Options={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResOptions.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.ABN={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconInfo.png",Format:A.jt,NoOfFrames:
1,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AKD={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResArrowUpDown.png",Format:A.jt,NoOfFrames:1,FrameSize:[
27,40],FrameDelay:0,_this:null}};C.Edit={_class:function(){return A.abj.Aj;},0:{
FileName:"./res_index/ResEdit.png",Format:A.jt,NoOfFrames:1,FrameSize:[28,30],FrameDelay:
0,_this:null}};C.Aec={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:null}};C.AND={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.ANH={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AzZ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResAttention.png",Format:A.
cC,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:null}};C.AEn={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AqW={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResRemoveFromWatchList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABk={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png",Format:
A.jt,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:null}};C.ABj={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png",Format:A.
jt,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:null}};C.ABl={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconSettings.png",Format:A.
jt,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:null}};C.AM1={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconDevice.png",Format:A.jt
,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:null}};C.AN5={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconFreshCowsList.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AM2={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.Vf={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png",Format:A.
jt,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:null}};C.ApR={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconUp.png",Format:A.jt,NoOfFrames:
1,FrameSize:[23,40],FrameDelay:0,_this:null}};C.ApJ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconDown.png",Format:A.jt,NoOfFrames:1,FrameSize:[
23,40],FrameDelay:0,_this:null}};C.AJx={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA11_LinkTransponderID.png",Format:A.jt,NoOfFrames:2,FrameSize:[58
,58],FrameDelay:0,_this:null}};C.Al9={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[33,40],
FrameDelay:0,_this:null}};C.AOl={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconNoTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[30,40
],FrameDelay:0,_this:null}};C.AOm={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconNoTransponderList.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.At7={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconAddTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[34,40
],FrameDelay:0,_this:null}};C.AM9={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNoTranponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[
27,40],FrameDelay:0,_this:null}};C.AJy={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA12_AutoActions.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58],
FrameDelay:0,_this:null}};C.AN_={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconHideTempLast6h.png",Format:A.jt,NoOfFrames:1,FrameSize:[41,40
],FrameDelay:0,_this:null}};C.AdA={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconContinue.png",Format:A.jt,NoOfFrames:1,FrameSize:[31,24],FrameDelay:
0,_this:null}};C.AOj={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABC={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:null}};C.AOk={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AM8={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Al8={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconSave.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABU={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconSaveAndContinue.png",Format:A.jt,NoOfFrames:
1,FrameSize:[79,40],FrameDelay:0,_this:null}};C.Al6={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconBack.png",Format:A.jt,NoOfFrames:1,FrameSize:[
31,24],FrameDelay:0,_this:null}};C.AOb={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconLamb.png",Format:A.jt,NoOfFrames:1,FrameSize:[38,40],FrameDelay:
0,_this:null}};C.Aud={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AJz={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA13_Calving.png",Format:
A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ApP={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconReset_Retry.png",Format:A.jt
,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABJ={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png",Format:A.
jt,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:null}};C.AOt={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:null}};C.AOa={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconIDRange.png",Format:A.jt,NoOfFrames:
1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANX={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluation.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANx={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconActionListKg.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AN9={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png",Format:A.jt,NoOfFrames:
1,FrameSize:[45,40],FrameDelay:0,_this:null}};C.AN$={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png",Format:A.jt,NoOfFrames:
1,FrameSize:[45,40],FrameDelay:0,_this:null}};C.AOH={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconsViewSwitching.png",Format:A.jt,NoOfFrames:
5,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AOG={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconsMiddleButton.png",Format:A.jt,NoOfFrames:
2,FrameSize:[50,40],FrameDelay:0,_this:null}};C.ANz={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconActions_Footer.png",Format:A.jt,NoOfFrames:
1,FrameSize:[39,40],FrameDelay:0,_this:null}};C.ANJ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png",Format:A.jt,NoOfFrames:
1,FrameSize:[36,40],FrameDelay:0,_this:null}};C.ASm={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResSwitchGenerateID.png",Format:A.jt,NoOfFrames:
7,FrameSize:[30,40],FrameDelay:0,_this:null}};C.ASo={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png",Format:A.jt,NoOfFrames:
4,FrameSize:[20,40],FrameDelay:0,_this:null}};C.ASl={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png",Format:A.jt,NoOfFrames:
8,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AmV={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResResetToDefault.png",Format:A.jt,NoOfFrames:
1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AOr={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRFIDEartag.png",Format:A.jt,NoOfFrames:
3,FrameSize:[120,125],FrameDelay:0,_this:null}};C.AN2={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationWeight.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANZ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AN0={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png",Format:A.jt,
NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANY={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AN1={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AN3={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABL={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconFilterRemoval.png",
Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.ANF={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:null}};C.Ti={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalHerd.png",Format:
A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANG={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png",Format:
A.jt,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:null}};C.ABH={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationLists.png",Format:
A.jt,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AN7={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconHeaderLosses.png",Format:A.jt
,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AOg={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLossesPercent.png",Format:A.
jt,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AOf={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLossesNumber.png",Format:A.jt
,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AOn={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNumberInHerd.png",Format:A.jt
,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:null}};C.AN6={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconHeaderHerd.png",Format:A.jt,
NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:null}};C.ANV={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconDryCowsList.png",Format:A.jt
,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABi={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AJA={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA14_DryingOff.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ANO={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCalving.png",Format:A.jt,NoOfFrames:1,FrameSize:[
32,40],FrameDelay:0,_this:null}};C.AM6={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewLamb.png",Format:A.jt,NoOfFrames:1,FrameSize:[48,40
],FrameDelay:0,_this:null}};C.AM4={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewCow.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40]
,FrameDelay:0,_this:null}};C.AM7={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewLambs.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40
],FrameDelay:0,_this:null}};C.AM5={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewCows.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40
],FrameDelay:0,_this:null}};C.AOC={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeighingToday.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80
],FrameDelay:0,_this:null}};C.AOD={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeighingTodayLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.ANM={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBirthWeights.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80]
,FrameDelay:0,_this:null}};C.ANN={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBirthWeightsLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,
80],FrameDelay:0,_this:null}};C.AOE={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeightDevelopment.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.AOF={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeightDevelopmentLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[
96,80],FrameDelay:0,_this:null}};C.ANP={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconCalvingXL.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:
0,_this:null}};C.ANE={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABT={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRegistrations.png",
Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AM_={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AOc={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLinkAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AJB={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png",Format:
A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ANW={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEartagCow.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.Aub={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEartagCalf.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.At8={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconBirthDate.png",Format:A.jt,NoOfFrames:1
,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ABP={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconMaleOrFemale.png",Format:A.jt,NoOfFrames:1,
FrameSize:[28,40],FrameDelay:0,_this:null}};C.ABE={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconBirthSingle.png",Format:A.jt,NoOfFrames:1,FrameSize:[
34,40],FrameDelay:0,_this:null}};C.At9={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBirthMultiples.png",Format:A.jt,NoOfFrames:3,FrameSize:[42,40
],FrameDelay:0,_this:null}};C.ANS={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconDamList.png",Format:A.jt,NoOfFrames:3,FrameSize:[30,36],FrameDelay:
0,_this:null}};C.ANR={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AOs={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:null}};C.AM3={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:null}};C.AOu={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AJC={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJD={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AzW={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResArrowsLeftRight.png",Format:
A.jt,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:null}};C.AOw={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconStack.png",Format:A.jt,NoOfFrames:
1,FrameSize:[32,25],FrameDelay:0,_this:null}};C.ANQ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCalvings.png",Format:A.jt,NoOfFrames:2,
FrameSize:[96,80],FrameDelay:0,_this:null}};C.AOq={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png",Format:A.cC,NoOfFrames:
1,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AOi={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconNewNoTransponder.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANA={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconAgeRange.png",Format:A.jt,NoOfFrames:1,
FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANL={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconBarcodes.png",Format:A.jt,NoOfFrames:2,FrameSize:[
96,80],FrameDelay:0,_this:null}};C.ANK={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBarcodeScan.png",Format:A.jt,NoOfFrames:1,FrameSize:[36,40],
FrameDelay:0,_this:null}};
C._Init=function(){};C._ReInit=function(){};C.DE=function(D){var B;if((B=C.AKI[0].
_this)&&(B._cycle!=D))B._Done(C.AKI[0]._this=null);if((B=C.AOd[0]._this)&&(B._cycle
!=D))B._Done(C.AOd[0]._this=null);if((B=C.AOv[0]._this)&&(B._cycle!=D))B._Done(C.
AOv[0]._this=null);if((B=C.ApO[0]._this)&&(B._cycle!=D))B._Done(C.ApO[0]._this=null
);if((B=C.ABS[0]._this)&&(B._cycle!=D))B._Done(C.ABS[0]._this=null);if((B=C.AOe[
0]._this)&&(B._cycle!=D))B._Done(C.AOe[0]._this=null);if((B=C.AlD[0]._this)&&(B.
_cycle!=D))B._Done(C.AlD[0]._this=null);if((B=C.NK[0]._this)&&(B._cycle!=D))B._Done(
C.NK[0]._this=null);if((B=C.Aue[0]._this)&&(B._cycle!=D))B._Done(C.Aue[0]._this=
null);if((B=C.Aug[0]._this)&&(B._cycle!=D))B._Done(C.Aug[0]._this=null);if((B=C.
AKH[0]._this)&&(B._cycle!=D))B._Done(C.AKH[0]._this=null);if((B=C.ABF[0]._this)&&(
B._cycle!=D))B._Done(C.ABF[0]._this=null);if((B=C.AdB[0]._this)&&(B._cycle!=D))B.
_Done(C.AdB[0]._this=null);if((B=C.ANB[0]._this)&&(B._cycle!=D))B._Done(C.ANB[0].
_this=null);if((B=C.ABM[0]._this)&&(B._cycle!=D))B._Done(C.ABM[0]._this=null);if((
B=C.AOy[0]._this)&&(B._cycle!=D))B._Done(C.AOy[0]._this=null);if((B=C.ANU[0]._this
)&&(B._cycle!=D))B._Done(C.ANU[0]._this=null);if((B=C.Apv[0]._this)&&(B._cycle!=
D))B._Done(C.Apv[0]._this=null);if((B=C.APc[0]._this)&&(B._cycle!=D))B._Done(C.APc[
0]._this=null);if((B=C.NL[0]._this)&&(B._cycle!=D))B._Done(C.NL[0]._this=null);if((
B=C.AOz[0]._this)&&(B._cycle!=D))B._Done(C.AOz[0]._this=null);if((B=C.AOA[0]._this
)&&(B._cycle!=D))B._Done(C.AOA[0]._this=null);if((B=C.RD[0]._this)&&(B._cycle!=D
))B._Done(C.RD[0]._this=null);if((B=C.S$[0]._this)&&(B._cycle!=D))B._Done(C.S$[0
]._this=null);if((B=C.Ady[0]._this)&&(B._cycle!=D))B._Done(C.Ady[0]._this=null);
if((B=C.AOo[0]._this)&&(B._cycle!=D))B._Done(C.AOo[0]._this=null);if((B=C.AOp[0].
_this)&&(B._cycle!=D))B._Done(C.AOp[0]._this=null);if((B=C.AJF[0]._this)&&(B._cycle
!=D))B._Done(C.AJF[0]._this=null);if((B=C.AJE[0]._this)&&(B._cycle!=D))B._Done(C.
AJE[0]._this=null);if((B=C.AJG[0]._this)&&(B._cycle!=D))B._Done(C.AJG[0]._this=null
);if((B=C.AJH[0]._this)&&(B._cycle!=D))B._Done(C.AJH[0]._this=null);if((B=C.AJI[
0]._this)&&(B._cycle!=D))B._Done(C.AJI[0]._this=null);if((B=C.AJK[0]._this)&&(B.
_cycle!=D))B._Done(C.AJK[0]._this=null);if((B=C.AJL[0]._this)&&(B._cycle!=D))B._Done(
C.AJL[0]._this=null);if((B=C.ABB[0]._this)&&(B._cycle!=D))B._Done(C.ABB[0]._this=
null);if((B=C.AOB[0]._this)&&(B._cycle!=D))B._Done(C.AOB[0]._this=null);if((B=C.
ANy[0]._this)&&(B._cycle!=D))B._Done(C.ANy[0]._this=null);if((B=C.EU[0]._this)&&(
B._cycle!=D))B._Done(C.EU[0]._this=null);if((B=C.AK9[0]._this)&&(B._cycle!=D))B.
_Done(C.AK9[0]._this=null);if((B=C.Apm[0]._this)&&(B._cycle!=D))B._Done(C.Apm[0].
_this=null);if((B=C.AAF[0]._this)&&(B._cycle!=D))B._Done(C.AAF[0]._this=null);if((
B=C.AJN[0]._this)&&(B._cycle!=D))B._Done(C.AJN[0]._this=null);if((B=C.AJM[0]._this
)&&(B._cycle!=D))B._Done(C.AJM[0]._this=null);if((B=C.AaM[0]._this)&&(B._cycle!=
D))B._Done(C.AaM[0]._this=null);if((B=C.Adz[0]._this)&&(B._cycle!=D))B._Done(C.Adz[
0]._this=null);if((B=C.AN8[0]._this)&&(B._cycle!=D))B._Done(C.AN8[0]._this=null);
if((B=C.AOx[0]._this)&&(B._cycle!=D))B._Done(C.AOx[0]._this=null);if((B=C.ABQ[0].
_this)&&(B._cycle!=D))B._Done(C.ABQ[0]._this=null);if((B=C.Auf[0]._this)&&(B._cycle
!=D))B._Done(C.Auf[0]._this=null);if((B=C.AJJ[0]._this)&&(B._cycle!=D))B._Done(C.
AJJ[0]._this=null);if((B=C.Aua[0]._this)&&(B._cycle!=D))B._Done(C.Aua[0]._this=null
);if((B=C.ANI[0]._this)&&(B._cycle!=D))B._Done(C.ANI[0]._this=null);if((B=C.ABR[
0]._this)&&(B._cycle!=D))B._Done(C.ABR[0]._this=null);if((B=C.ABI[0]._this)&&(B.
_cycle!=D))B._Done(C.ABI[0]._this=null);if((B=C.AJw[0]._this)&&(B._cycle!=D))B._Done(
C.AJw[0]._this=null);if((B=C.AaN[0]._this)&&(B._cycle!=D))B._Done(C.AaN[0]._this=
null);if((B=C.ABK[0]._this)&&(B._cycle!=D))B._Done(C.ABK[0]._this=null);if((B=C.
At$[0]._this)&&(B._cycle!=D))B._Done(C.At$[0]._this=null);if((B=C.ABG[0]._this)&&(
B._cycle!=D))B._Done(C.ABG[0]._this=null);if((B=C.AOh[0]._this)&&(B._cycle!=D))B.
_Done(C.AOh[0]._this=null);if((B=C.Al7[0]._this)&&(B._cycle!=D))B._Done(C.Al7[0].
_this=null);if((B=C.Ai9[0]._this)&&(B._cycle!=D))B._Done(C.Ai9[0]._this=null);if((
B=C.Auh[0]._this)&&(B._cycle!=D))B._Done(C.Auh[0]._this=null);if((B=C.Aui[0]._this
)&&(B._cycle!=D))B._Done(C.Aui[0]._this=null);if((B=C.ABO[0]._this)&&(B._cycle!=
D))B._Done(C.ABO[0]._this=null);if((B=C.J8[0]._this)&&(B._cycle!=D))B._Done(C.J8[
0]._this=null);if((B=C.ANC[0]._this)&&(B._cycle!=D))B._Done(C.ANC[0]._this=null);
if((B=C.AK8[0]._this)&&(B._cycle!=D))B._Done(C.AK8[0]._this=null);if((B=C.AKC[0].
_this)&&(B._cycle!=D))B._Done(C.AKC[0]._this=null);if((B=C.AiB[0]._this)&&(B._cycle
!=D))B._Done(C.AiB[0]._this=null);if((B=C.AC[0]._this)&&(B._cycle!=D))B._Done(C.
AC[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.ABN[0]._this)&&(B._cycle!=D))B._Done(C.ABN[0]._this=null);if((
B=C.AKD[0]._this)&&(B._cycle!=D))B._Done(C.AKD[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.Aec[0]._this)&&(B._cycle!=
D))B._Done(C.Aec[0]._this=null);if((B=C.AND[0]._this)&&(B._cycle!=D))B._Done(C.AND[
0]._this=null);if((B=C.ANH[0]._this)&&(B._cycle!=D))B._Done(C.ANH[0]._this=null);
if((B=C.AzZ[0]._this)&&(B._cycle!=D))B._Done(C.AzZ[0]._this=null);if((B=C.AEn[0].
_this)&&(B._cycle!=D))B._Done(C.AEn[0]._this=null);if((B=C.AqW[0]._this)&&(B._cycle
!=D))B._Done(C.AqW[0]._this=null);if((B=C.ABk[0]._this)&&(B._cycle!=D))B._Done(C.
ABk[0]._this=null);if((B=C.ABj[0]._this)&&(B._cycle!=D))B._Done(C.ABj[0]._this=null
);if((B=C.ABl[0]._this)&&(B._cycle!=D))B._Done(C.ABl[0]._this=null);if((B=C.AM1[
0]._this)&&(B._cycle!=D))B._Done(C.AM1[0]._this=null);if((B=C.AN5[0]._this)&&(B.
_cycle!=D))B._Done(C.AN5[0]._this=null);if((B=C.AM2[0]._this)&&(B._cycle!=D))B._Done(
C.AM2[0]._this=null);if((B=C.Vf[0]._this)&&(B._cycle!=D))B._Done(C.Vf[0]._this=null
);if((B=C.ApR[0]._this)&&(B._cycle!=D))B._Done(C.ApR[0]._this=null);if((B=C.ApJ[
0]._this)&&(B._cycle!=D))B._Done(C.ApJ[0]._this=null);if((B=C.AJx[0]._this)&&(B.
_cycle!=D))B._Done(C.AJx[0]._this=null);if((B=C.Al9[0]._this)&&(B._cycle!=D))B._Done(
C.Al9[0]._this=null);if((B=C.AOl[0]._this)&&(B._cycle!=D))B._Done(C.AOl[0]._this=
null);if((B=C.AOm[0]._this)&&(B._cycle!=D))B._Done(C.AOm[0]._this=null);if((B=C.
At7[0]._this)&&(B._cycle!=D))B._Done(C.At7[0]._this=null);if((B=C.AM9[0]._this)&&(
B._cycle!=D))B._Done(C.AM9[0]._this=null);if((B=C.AJy[0]._this)&&(B._cycle!=D))B.
_Done(C.AJy[0]._this=null);if((B=C.AN_[0]._this)&&(B._cycle!=D))B._Done(C.AN_[0].
_this=null);if((B=C.AdA[0]._this)&&(B._cycle!=D))B._Done(C.AdA[0]._this=null);if((
B=C.AOj[0]._this)&&(B._cycle!=D))B._Done(C.AOj[0]._this=null);if((B=C.ABC[0]._this
)&&(B._cycle!=D))B._Done(C.ABC[0]._this=null);if((B=C.AOk[0]._this)&&(B._cycle!=
D))B._Done(C.AOk[0]._this=null);if((B=C.AM8[0]._this)&&(B._cycle!=D))B._Done(C.AM8[
0]._this=null);if((B=C.Al8[0]._this)&&(B._cycle!=D))B._Done(C.Al8[0]._this=null);
if((B=C.ABU[0]._this)&&(B._cycle!=D))B._Done(C.ABU[0]._this=null);if((B=C.Al6[0].
_this)&&(B._cycle!=D))B._Done(C.Al6[0]._this=null);if((B=C.AOb[0]._this)&&(B._cycle
!=D))B._Done(C.AOb[0]._this=null);if((B=C.Aud[0]._this)&&(B._cycle!=D))B._Done(C.
Aud[0]._this=null);if((B=C.AJz[0]._this)&&(B._cycle!=D))B._Done(C.AJz[0]._this=null
);if((B=C.ApP[0]._this)&&(B._cycle!=D))B._Done(C.ApP[0]._this=null);if((B=C.ABJ[
0]._this)&&(B._cycle!=D))B._Done(C.ABJ[0]._this=null);if((B=C.AOt[0]._this)&&(B.
_cycle!=D))B._Done(C.AOt[0]._this=null);if((B=C.AOa[0]._this)&&(B._cycle!=D))B._Done(
C.AOa[0]._this=null);if((B=C.ANX[0]._this)&&(B._cycle!=D))B._Done(C.ANX[0]._this=
null);if((B=C.ANx[0]._this)&&(B._cycle!=D))B._Done(C.ANx[0]._this=null);if((B=C.
AN9[0]._this)&&(B._cycle!=D))B._Done(C.AN9[0]._this=null);if((B=C.AN$[0]._this)&&(
B._cycle!=D))B._Done(C.AN$[0]._this=null);if((B=C.AOH[0]._this)&&(B._cycle!=D))B.
_Done(C.AOH[0]._this=null);if((B=C.AOG[0]._this)&&(B._cycle!=D))B._Done(C.AOG[0].
_this=null);if((B=C.ANz[0]._this)&&(B._cycle!=D))B._Done(C.ANz[0]._this=null);if((
B=C.ANJ[0]._this)&&(B._cycle!=D))B._Done(C.ANJ[0]._this=null);if((B=C.ASm[0]._this
)&&(B._cycle!=D))B._Done(C.ASm[0]._this=null);if((B=C.ASo[0]._this)&&(B._cycle!=
D))B._Done(C.ASo[0]._this=null);if((B=C.ASl[0]._this)&&(B._cycle!=D))B._Done(C.ASl[
0]._this=null);if((B=C.AmV[0]._this)&&(B._cycle!=D))B._Done(C.AmV[0]._this=null);
if((B=C.AOr[0]._this)&&(B._cycle!=D))B._Done(C.AOr[0]._this=null);if((B=C.AN2[0].
_this)&&(B._cycle!=D))B._Done(C.AN2[0]._this=null);if((B=C.ANZ[0]._this)&&(B._cycle
!=D))B._Done(C.ANZ[0]._this=null);if((B=C.AN0[0]._this)&&(B._cycle!=D))B._Done(C.
AN0[0]._this=null);if((B=C.ANY[0]._this)&&(B._cycle!=D))B._Done(C.ANY[0]._this=null
);if((B=C.AN1[0]._this)&&(B._cycle!=D))B._Done(C.AN1[0]._this=null);if((B=C.AN3[
0]._this)&&(B._cycle!=D))B._Done(C.AN3[0]._this=null);if((B=C.ABL[0]._this)&&(B.
_cycle!=D))B._Done(C.ABL[0]._this=null);if((B=C.ANF[0]._this)&&(B._cycle!=D))B._Done(
C.ANF[0]._this=null);if((B=C.Ti[0]._this)&&(B._cycle!=D))B._Done(C.Ti[0]._this=null
);if((B=C.ANG[0]._this)&&(B._cycle!=D))B._Done(C.ANG[0]._this=null);if((B=C.ABH[
0]._this)&&(B._cycle!=D))B._Done(C.ABH[0]._this=null);if((B=C.AN7[0]._this)&&(B.
_cycle!=D))B._Done(C.AN7[0]._this=null);if((B=C.AOg[0]._this)&&(B._cycle!=D))B._Done(
C.AOg[0]._this=null);if((B=C.AOf[0]._this)&&(B._cycle!=D))B._Done(C.AOf[0]._this=
null);if((B=C.AOn[0]._this)&&(B._cycle!=D))B._Done(C.AOn[0]._this=null);if((B=C.
AN6[0]._this)&&(B._cycle!=D))B._Done(C.AN6[0]._this=null);if((B=C.ANV[0]._this)&&(
B._cycle!=D))B._Done(C.ANV[0]._this=null);if((B=C.ABi[0]._this)&&(B._cycle!=D))B.
_Done(C.ABi[0]._this=null);if((B=C.AJA[0]._this)&&(B._cycle!=D))B._Done(C.AJA[0].
_this=null);if((B=C.ANO[0]._this)&&(B._cycle!=D))B._Done(C.ANO[0]._this=null);if((
B=C.AM6[0]._this)&&(B._cycle!=D))B._Done(C.AM6[0]._this=null);if((B=C.AM4[0]._this
)&&(B._cycle!=D))B._Done(C.AM4[0]._this=null);if((B=C.AM7[0]._this)&&(B._cycle!=
D))B._Done(C.AM7[0]._this=null);if((B=C.AM5[0]._this)&&(B._cycle!=D))B._Done(C.AM5[
0]._this=null);if((B=C.AOC[0]._this)&&(B._cycle!=D))B._Done(C.AOC[0]._this=null);
if((B=C.AOD[0]._this)&&(B._cycle!=D))B._Done(C.AOD[0]._this=null);if((B=C.ANM[0].
_this)&&(B._cycle!=D))B._Done(C.ANM[0]._this=null);if((B=C.ANN[0]._this)&&(B._cycle
!=D))B._Done(C.ANN[0]._this=null);if((B=C.AOE[0]._this)&&(B._cycle!=D))B._Done(C.
AOE[0]._this=null);if((B=C.AOF[0]._this)&&(B._cycle!=D))B._Done(C.AOF[0]._this=null
);if((B=C.ANP[0]._this)&&(B._cycle!=D))B._Done(C.ANP[0]._this=null);if((B=C.ANE[
0]._this)&&(B._cycle!=D))B._Done(C.ANE[0]._this=null);if((B=C.ABT[0]._this)&&(B.
_cycle!=D))B._Done(C.ABT[0]._this=null);if((B=C.AM_[0]._this)&&(B._cycle!=D))B._Done(
C.AM_[0]._this=null);if((B=C.AOc[0]._this)&&(B._cycle!=D))B._Done(C.AOc[0]._this=
null);if((B=C.AJB[0]._this)&&(B._cycle!=D))B._Done(C.AJB[0]._this=null);if((B=C.
ANW[0]._this)&&(B._cycle!=D))B._Done(C.ANW[0]._this=null);if((B=C.Aub[0]._this)&&(
B._cycle!=D))B._Done(C.Aub[0]._this=null);if((B=C.At8[0]._this)&&(B._cycle!=D))B.
_Done(C.At8[0]._this=null);if((B=C.ABP[0]._this)&&(B._cycle!=D))B._Done(C.ABP[0].
_this=null);if((B=C.ABE[0]._this)&&(B._cycle!=D))B._Done(C.ABE[0]._this=null);if((
B=C.At9[0]._this)&&(B._cycle!=D))B._Done(C.At9[0]._this=null);if((B=C.ANS[0]._this
)&&(B._cycle!=D))B._Done(C.ANS[0]._this=null);if((B=C.ANR[0]._this)&&(B._cycle!=
D))B._Done(C.ANR[0]._this=null);if((B=C.AOs[0]._this)&&(B._cycle!=D))B._Done(C.AOs[
0]._this=null);if((B=C.AM3[0]._this)&&(B._cycle!=D))B._Done(C.AM3[0]._this=null);
if((B=C.AOu[0]._this)&&(B._cycle!=D))B._Done(C.AOu[0]._this=null);if((B=C.AJC[0].
_this)&&(B._cycle!=D))B._Done(C.AJC[0]._this=null);if((B=C.AJD[0]._this)&&(B._cycle
!=D))B._Done(C.AJD[0]._this=null);if((B=C.AzW[0]._this)&&(B._cycle!=D))B._Done(C.
AzW[0]._this=null);if((B=C.AOw[0]._this)&&(B._cycle!=D))B._Done(C.AOw[0]._this=null
);if((B=C.ANQ[0]._this)&&(B._cycle!=D))B._Done(C.ANQ[0]._this=null);if((B=C.AOq[
0]._this)&&(B._cycle!=D))B._Done(C.AOq[0]._this=null);if((B=C.AOi[0]._this)&&(B.
_cycle!=D))B._Done(C.AOi[0]._this=null);if((B=C.ANA[0]._this)&&(B._cycle!=D))B._Done(
C.ANA[0]._this=null);if((B=C.ANL[0]._this)&&(B._cycle!=D))B._Done(C.ANL[0]._this=
null);if((B=C.ANK[0]._this)&&(B._cycle!=D))B._Done(C.ANK[0]._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */