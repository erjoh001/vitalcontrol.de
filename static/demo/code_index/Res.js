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

C.AKw={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResBatterySmall.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[16,28],FrameDelay:0,_this:null}};C.AN3={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLists.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AOl={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconSettings.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Apz={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRFIDTransponder.png",Format:A.jt,NoOfFrames:
3,FrameSize:[82,82],FrameDelay:0,_this:null}};C.ABK={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRFIDAnim.png",Format:A.jt,NoOfFrames:4,
FrameSize:[52,82],FrameDelay:0,_this:null}};C.AN4={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconLocation.png",Format:A.jt,NoOfFrames:1,FrameSize:[
18,28],FrameDelay:0,_this:null}};C.Alv={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResArrowsSmall.png",Format:A.jt,NoOfFrames:4,FrameSize:[20,20],FrameDelay:
0,_this:null}};C.NI={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconBg.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[66,66],FrameDelay:0,_this:null}};C.At6={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconMeasureAnim.png",Format:
A.jt,NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:null}};C.At8={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRatingTemp.png",Format:A.jt,
NoOfFrames:3,FrameSize:[66,66],FrameDelay:0,_this:null}};C.AKv={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResBatteryBig.png",Format:A.jt,NoOfFrames:
1,FrameSize:[90,33],FrameDelay:0,_this:null}};C.ABx={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCheckmarkInCircle.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,34],FrameDelay:0,_this:null}};C.Adr={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconFilter.png",Format:A.jt,NoOfFrames:1,FrameSize:[
28,28],FrameDelay:0,_this:null}};C.ANp={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconAnimal.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:
0,_this:null}};C.ABE={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconHome.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[19,17],FrameDelay:0,_this:null}};C.AOo={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconUsb.png",Format:A.jt
,NoOfFrames:1,FrameSize:[114,52],FrameDelay:0,_this:null}};C.ANI={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconDevice.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.Apf={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResFlashlightOnOff.png",Format:A.jt,NoOfFrames:
2,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AO4={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResLogo.png",Format:A.cC,NoOfFrames:1,FrameSize:[
150,150],FrameDelay:0,_this:null}};C.NJ={_class:function(){return A.abj.Aj;},0:{
FileName:"./res_index/ResIconMenuBackground.png",Format:A.jt,NoOfFrames:1,FrameSize:[
116,120],FrameDelay:0,_this:null}};C.AOp={_class:function(){return A.abj.Aj;},0:{
FileName:"./res_index/ResIconVibrateOff.png",Format:A.jt,NoOfFrames:1,FrameSize:[
40,40],FrameDelay:0,_this:null}};C.AOq={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconVibrateOn.png",Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:
0,_this:null}};C.RC={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResCheckmark.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[36,39],FrameDelay:0,_this:null}};C.S8={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResCheckmarkBackground.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[66,65],FrameDelay:0,_this:null}};C.Ado={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCalfSmallBase.png",
Format:A.jt,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AOc={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconOverlaySmallAlarm.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AOd={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconOverlaySmallFever.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AJt={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA2_Rating.png",Format:A.
jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJs={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA1_Temperature_Measurement.png",
Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJu={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA3_Alarm.png",Format:A.
jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJv={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA4_OnWatch.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJw={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResA5_History.png",Format:A.jt,NoOfFrames:2,FrameSize:[
58,58],FrameDelay:0,_this:null}};C.AJy={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA7_Unregister.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:
0,_this:null}};C.AJz={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA8_EditAnimalData.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ABt={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAlarmList.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AOr={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconWatchList.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANm={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconActions.png",Format:A.jt,NoOfFrames:2,FrameSize:[
97,58],FrameDelay:0,_this:null}};C.ET={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconArrowBack.png",Format:A.jt,NoOfFrames:1,FrameSize:[49,29],FrameDelay:
0,_this:null}};C.AKX={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResCircleBackground.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[58,58],FrameDelay:0,_this:null}};C.Ao7={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResDecoratorPlus.png",Format:
A.jt,NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:null}};C.AAw={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResDecoratorMinus.png",Format:A.jt,
NoOfFrames:2,FrameSize:[18,18],FrameDelay:0,_this:null}};C.AJB={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA9_WeighingKg.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJA={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResA9WeighingLbs.png",Format:A.jt,NoOfFrames:2
,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AiX={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconSettingsSmall.png",Format:A.jt,NoOfFrames:1
,FrameSize:[25,25],FrameDelay:0,_this:null}};C.Adp={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconClose.png",Format:A.jt,NoOfFrames:1,FrameSize:[
26,30],FrameDelay:0,_this:null}};C.ANW={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconHerd.png",Format:A.jt,NoOfFrames:2,FrameSize:[100,80],FrameDelay:
0,_this:null}};C.AOn={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconTrendCurve.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[78,54],FrameDelay:0,_this:null}};C.ABI={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNewAnimal.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.At7={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNewAnimals.png",Format:A.jt,
NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AJx={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA6_AnimalLoss.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.At2={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCowSmallBase.png",Format:A.jt,NoOfFrames:
2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.ANw={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconAutoActions.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABJ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconOnWatch.png",Format:A.jt,NoOfFrames:1,FrameSize:[
28,40],FrameDelay:0,_this:null}};C.ABA={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconExclamationMark.png",Format:A.jt,NoOfFrames:1,FrameSize:[11,
40],FrameDelay:0,_this:null}};C.AJk={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA10_FirstFeeding.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58]
,FrameDelay:0,_this:null}};C.Aax={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconThermometer.png",Format:A.jt,NoOfFrames:1,FrameSize:[14,40],
FrameDelay:0,_this:null}};C.ABC={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconFemale.png",Format:A.jt,NoOfFrames:1,FrameSize:[17,40],FrameDelay:
0,_this:null}};C.At1={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCalf.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[37,40],FrameDelay:0,_this:null}};C.ABy={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCow.png",Format:A.jt
,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AN7={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconMale.png",Format:A.jt,NoOfFrames:
1,FrameSize:[21,40],FrameDelay:0,_this:null}};C.AlY={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRatingEye.png",Format:A.cC,NoOfFrames:1
,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AiW={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconCalfBasicData.png",Format:A.jt,NoOfFrames:1
,FrameSize:[27,40],FrameDelay:0,_this:null}};C.At9={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconWeightKG.png",Format:A.jt,NoOfFrames:1,FrameSize:[
26,40],FrameDelay:0,_this:null}};C.At_={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeightLBS.png",Format:A.jt,NoOfFrames:1,FrameSize:[26,40],FrameDelay:
0,_this:null}};C.ABG={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconMagnifier.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.J7={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResColoredCircle.png",Format:
A.jt,NoOfFrames:2,FrameSize:[25,25],FrameDelay:0,_this:null}};C.ANq={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalListAlarm.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AKW={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResCharts.png",Format:A.jt,NoOfFrames:
1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AKq={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResArrowLeft.png",Format:A.jt,NoOfFrames:1,FrameSize:[
15,40],FrameDelay:0,_this:null}};C.Aip={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResArrowRight.png",Format:A.jt,NoOfFrames:1,FrameSize:[15,40],FrameDelay:
0,_this:null}};C.AC={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.Options={
_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResOptions.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.ABF={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconInfo.png",Format:A.jt,NoOfFrames:
1,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AKr={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResArrowUpDown.png",Format:A.jt,NoOfFrames:1,FrameSize:[
27,40],FrameDelay:0,_this:null}};C.Edit={_class:function(){return A.abj.Aj;},0:{
FileName:"./res_index/ResEdit.png",Format:A.jt,NoOfFrames:1,FrameSize:[28,30],FrameDelay:
0,_this:null}};C.Ad6={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResRFIDWaves.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[24,34],FrameDelay:0,_this:null}};C.ANr={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalListControl.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.ANv={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalWatchList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AzQ={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResAttention.png",Format:A.
cC,NoOfFrames:1,FrameSize:[95,83],FrameDelay:0,_this:null}};C.AEd={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResRemoveFromAlarmList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AqH={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResRemoveFromWatchList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABc={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNewCalves.png",Format:
A.jt,NoOfFrames:1,FrameSize:[48,40],FrameDelay:0,_this:null}};C.ABb={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNewCalf.png",Format:A.
jt,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:null}};C.ABd={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconSettings.png",Format:A.
jt,NoOfFrames:1,FrameSize:[33,40],FrameDelay:0,_this:null}};C.AMP={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconDevice.png",Format:A.jt
,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:null}};C.ANT={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconFreshCowsList.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMQ={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconFreshCowsList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.Aaw={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconSaveAndExitF1.png",Format:A.
jt,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:null}};C.ApC={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconUp.png",Format:A.jt,NoOfFrames:
1,FrameSize:[23,40],FrameDelay:0,_this:null}};C.Apu={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconDown.png",Format:A.jt,NoOfFrames:1,FrameSize:[
23,40],FrameDelay:0,_this:null}};C.AJl={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA11_LinkTransponderID.png",Format:A.jt,NoOfFrames:2,FrameSize:[58
,58],FrameDelay:0,_this:null}};C.Al0={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[33,40],
FrameDelay:0,_this:null}};C.AN$={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconNoTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[30,40
],FrameDelay:0,_this:null}};C.AOa={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconNoTransponderList.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.AtX={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconAddTransponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[34,40
],FrameDelay:0,_this:null}};C.AMX={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNoTranponder.png",Format:A.jt,NoOfFrames:1,FrameSize:[
27,40],FrameDelay:0,_this:null}};C.AJm={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResA12_AutoActions.png",Format:A.jt,NoOfFrames:2,FrameSize:[58,58],
FrameDelay:0,_this:null}};C.ANY={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconHideTempLast6h.png",Format:A.jt,NoOfFrames:1,FrameSize:[41,40
],FrameDelay:0,_this:null}};C.Adq={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconContinue.png",Format:A.jt,NoOfFrames:1,FrameSize:[31,24],FrameDelay:
0,_this:null}};C.AN9={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNoAnimalID.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABu={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[26,40],FrameDelay:0,_this:null}};C.AN_={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNoAnimalIDList.png",Format:A.
jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMW={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNoAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[27,40],FrameDelay:0,_this:null}};C.AlZ={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconSave.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABM={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconSaveAndContinue.png",Format:A.jt,NoOfFrames:
1,FrameSize:[79,40],FrameDelay:0,_this:null}};C.AlX={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconBack.png",Format:A.jt,NoOfFrames:1,FrameSize:[
31,24],FrameDelay:0,_this:null}};C.AN1={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconLamb.png",Format:A.jt,NoOfFrames:1,FrameSize:[38,40],FrameDelay:
0,_this:null}};C.At5={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLambSmallBase.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AJn={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA13_Calving.png",Format:
A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ApA={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconReset_Retry.png",Format:A.jt
,NoOfFrames:1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.ABB={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconExitAndSaveF3.png",Format:A.
jt,NoOfFrames:1,FrameSize:[85,40],FrameDelay:0,_this:null}};C.AOj={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconResetAddToWatchList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[74,40],FrameDelay:0,_this:null}};C.AN0={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconIDRange.png",Format:A.jt,NoOfFrames:
1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANL={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluation.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANl={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconActionListKg.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANX={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconHideRatedLast6h.png",Format:A.jt,NoOfFrames:
1,FrameSize:[45,40],FrameDelay:0,_this:null}};C.ANZ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconHideWeighedLast6h.png",Format:A.jt,NoOfFrames:
1,FrameSize:[45,40],FrameDelay:0,_this:null}};C.AOx={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconsViewSwitching.png",Format:A.jt,NoOfFrames:
5,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AOw={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconsMiddleButton.png",Format:A.jt,NoOfFrames:
2,FrameSize:[50,40],FrameDelay:0,_this:null}};C.ANn={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconActions_Footer.png",Format:A.jt,NoOfFrames:
1,FrameSize:[39,40],FrameDelay:0,_this:null}};C.ANx={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconAutoActions_Footer.png",Format:A.jt,NoOfFrames:
1,FrameSize:[36,40],FrameDelay:0,_this:null}};C.ASd={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResSwitchGenerateID.png",Format:A.jt,NoOfFrames:
7,FrameSize:[30,40],FrameDelay:0,_this:null}};C.ASf={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResSwitchIncreaseDecrease.png",Format:A.jt,NoOfFrames:
4,FrameSize:[20,40],FrameDelay:0,_this:null}};C.ASc={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResSwitchEarTagUpDown.png",Format:A.jt,NoOfFrames:
8,FrameSize:[25,40],FrameDelay:0,_this:null}};C.AmL={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResResetToDefault.png",Format:A.jt,NoOfFrames:
1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AOf={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconRFIDEartag.png",Format:A.jt,NoOfFrames:
3,FrameSize:[120,125],FrameDelay:0,_this:null}};C.ANQ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationWeight.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANN={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationCalfLoss.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANO={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationTemperature.png",Format:A.jt,
NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANM={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationAssessment.png",Format:
A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANP={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationTemperatureFahrenheit.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANR={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationWeightLbs.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABD={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconFilterRemoval.png",
Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.ANt={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalNumberBg.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:null}};C.Tf={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalHerd.png",Format:
A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANu={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalNumberBorder.png",Format:
A.jt,NoOfFrames:1,FrameSize:[20,20],FrameDelay:0,_this:null}};C.ABz={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEvaluationLists.png",Format:
A.jt,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.ANV={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconHeaderLosses.png",Format:A.jt
,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AN6={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLossesPercent.png",Format:A.
jt,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AN5={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLossesNumber.png",Format:A.jt
,NoOfFrames:1,FrameSize:[35,40],FrameDelay:0,_this:null}};C.AOb={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconNumberInHerd.png",Format:A.jt
,NoOfFrames:1,FrameSize:[42,40],FrameDelay:0,_this:null}};C.ANU={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconHeaderHerd.png",Format:A.jt,
NoOfFrames:1,FrameSize:[51,40],FrameDelay:0,_this:null}};C.ANJ={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconDryCowsList.png",Format:A.jt
,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABa={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconDryCowsList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AJo={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA14_DryingOff.png",Format:A.jt,NoOfFrames:
2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.ANC={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCalving.png",Format:A.jt,NoOfFrames:1,FrameSize:[
32,40],FrameDelay:0,_this:null}};C.AMU={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewLamb.png",Format:A.jt,NoOfFrames:1,FrameSize:[48,40
],FrameDelay:0,_this:null}};C.AMS={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewCow.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40]
,FrameDelay:0,_this:null}};C.AMV={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewLambs.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40
],FrameDelay:0,_this:null}};C.AMT={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResHeaderIconNewCows.png",Format:A.jt,NoOfFrames:1,FrameSize:[50,40
],FrameDelay:0,_this:null}};C.AOs={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeighingToday.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80
],FrameDelay:0,_this:null}};C.AOt={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeighingTodayLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.ANA={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBirthWeights.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80]
,FrameDelay:0,_this:null}};C.ANB={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBirthWeightsLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,
80],FrameDelay:0,_this:null}};C.AOu={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeightDevelopment.png",Format:A.jt,NoOfFrames:2,FrameSize:[96
,80],FrameDelay:0,_this:null}};C.AOv={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconWeightDevelopmentLbs.png",Format:A.jt,NoOfFrames:2,FrameSize:[
96,80],FrameDelay:0,_this:null}};C.AND={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconCalvingXL.png",Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:
0,_this:null}};C.ANs={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconAnimalLoss.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ABL={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRegistrations.png",
Format:A.jt,NoOfFrames:2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.AMY={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconRegistrations.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[28,40],FrameDelay:0,_this:null}};C.AN2={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconLinkAnimalID.png",Format:
A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AJp={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResA15_LinkNAIS_ID_Manual.png",Format:
A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AOh={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRegistrationDetail.png",Format:
A.jt,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:null}};C.AOi={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRegistrationList.png",Format:
A.jt,NoOfFrames:1,FrameSize:[32,40],FrameDelay:0,_this:null}};C.ANK={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconEartagCow.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.At3={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconEartagCalf.png",Format:A.jt,NoOfFrames:
1,FrameSize:[34,40],FrameDelay:0,_this:null}};C.AtY={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconBirthDate.png",Format:A.jt,NoOfFrames:1
,FrameSize:[40,40],FrameDelay:0,_this:null}};C.ABH={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconMaleOrFemale.png",Format:A.jt,NoOfFrames:1,
FrameSize:[28,40],FrameDelay:0,_this:null}};C.ABw={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconBirthSingle.png",Format:A.jt,NoOfFrames:1,FrameSize:[
34,40],FrameDelay:0,_this:null}};C.AtZ={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBirthMultiples.png",Format:A.jt,NoOfFrames:3,FrameSize:[42,40
],FrameDelay:0,_this:null}};C.ANG={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconDamList.png",Format:A.jt,NoOfFrames:3,FrameSize:[30,36],FrameDelay:
0,_this:null}};C.ANF={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconCowsList.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[30,40],FrameDelay:0,_this:null}};C.AOg={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconRFIDEartagSmall.png"
,Format:A.jt,NoOfFrames:3,FrameSize:[106,110],FrameDelay:0,_this:null}};C.AMR={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResHeaderIconNewAnimalLoss.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[50,40],FrameDelay:0,_this:null}};C.AOk={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResIconScanLinkAnimalID.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:null}};C.AJq={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA16_LinkNAIS_ID_Scan.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AJr={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResA17_RemoveTransponder.png"
,Format:A.jt,NoOfFrames:2,FrameSize:[58,58],FrameDelay:0,_this:null}};C.AzN={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/ResArrowsLeftRight.png",Format:
A.jt,NoOfFrames:2,FrameSize:[28,46],FrameDelay:0,_this:null}};C.AOm={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ResIconStack.png",Format:A.jt,NoOfFrames:
1,FrameSize:[32,25],FrameDelay:0,_this:null}};C.ANE={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconCalvings.png",Format:A.jt,NoOfFrames:2,
FrameSize:[96,80],FrameDelay:0,_this:null}};C.AOe={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconOverlaySmallObservation.png",Format:A.cC,NoOfFrames:
1,FrameSize:[34,34],FrameDelay:0,_this:null}};C.AN8={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconNewNoTransponder.png",Format:A.jt,NoOfFrames:
2,FrameSize:[96,80],FrameDelay:0,_this:null}};C.ANo={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ResIconAgeRange.png",Format:A.jt,NoOfFrames:1,
FrameSize:[40,40],FrameDelay:0,_this:null}};C.ANz={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ResIconBarcodes.png",Format:A.jt,NoOfFrames:2,FrameSize:[
96,80],FrameDelay:0,_this:null}};C.ANy={_class:function(){return A.abj.Aj;},0:{FileName:
"./res_index/ResIconBarcodeScan.png",Format:A.jt,NoOfFrames:1,FrameSize:[36,40],
FrameDelay:0,_this:null}};
C._Init=function(){};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.AKw[0].
_this)&&(B._cycle!=D))B._Done(C.AKw[0]._this=null);if((B=C.AN3[0]._this)&&(B._cycle
!=D))B._Done(C.AN3[0]._this=null);if((B=C.AOl[0]._this)&&(B._cycle!=D))B._Done(C.
AOl[0]._this=null);if((B=C.Apz[0]._this)&&(B._cycle!=D))B._Done(C.Apz[0]._this=null
);if((B=C.ABK[0]._this)&&(B._cycle!=D))B._Done(C.ABK[0]._this=null);if((B=C.AN4[
0]._this)&&(B._cycle!=D))B._Done(C.AN4[0]._this=null);if((B=C.Alv[0]._this)&&(B.
_cycle!=D))B._Done(C.Alv[0]._this=null);if((B=C.NI[0]._this)&&(B._cycle!=D))B._Done(
C.NI[0]._this=null);if((B=C.At6[0]._this)&&(B._cycle!=D))B._Done(C.At6[0]._this=
null);if((B=C.At8[0]._this)&&(B._cycle!=D))B._Done(C.At8[0]._this=null);if((B=C.
AKv[0]._this)&&(B._cycle!=D))B._Done(C.AKv[0]._this=null);if((B=C.ABx[0]._this)&&(
B._cycle!=D))B._Done(C.ABx[0]._this=null);if((B=C.Adr[0]._this)&&(B._cycle!=D))B.
_Done(C.Adr[0]._this=null);if((B=C.ANp[0]._this)&&(B._cycle!=D))B._Done(C.ANp[0].
_this=null);if((B=C.ABE[0]._this)&&(B._cycle!=D))B._Done(C.ABE[0]._this=null);if((
B=C.AOo[0]._this)&&(B._cycle!=D))B._Done(C.AOo[0]._this=null);if((B=C.ANI[0]._this
)&&(B._cycle!=D))B._Done(C.ANI[0]._this=null);if((B=C.Apf[0]._this)&&(B._cycle!=
D))B._Done(C.Apf[0]._this=null);if((B=C.AO4[0]._this)&&(B._cycle!=D))B._Done(C.AO4[
0]._this=null);if((B=C.NJ[0]._this)&&(B._cycle!=D))B._Done(C.NJ[0]._this=null);if((
B=C.AOp[0]._this)&&(B._cycle!=D))B._Done(C.AOp[0]._this=null);if((B=C.AOq[0]._this
)&&(B._cycle!=D))B._Done(C.AOq[0]._this=null);if((B=C.RC[0]._this)&&(B._cycle!=D
))B._Done(C.RC[0]._this=null);if((B=C.S8[0]._this)&&(B._cycle!=D))B._Done(C.S8[0
]._this=null);if((B=C.Ado[0]._this)&&(B._cycle!=D))B._Done(C.Ado[0]._this=null);
if((B=C.AOc[0]._this)&&(B._cycle!=D))B._Done(C.AOc[0]._this=null);if((B=C.AOd[0].
_this)&&(B._cycle!=D))B._Done(C.AOd[0]._this=null);if((B=C.AJt[0]._this)&&(B._cycle
!=D))B._Done(C.AJt[0]._this=null);if((B=C.AJs[0]._this)&&(B._cycle!=D))B._Done(C.
AJs[0]._this=null);if((B=C.AJu[0]._this)&&(B._cycle!=D))B._Done(C.AJu[0]._this=null
);if((B=C.AJv[0]._this)&&(B._cycle!=D))B._Done(C.AJv[0]._this=null);if((B=C.AJw[
0]._this)&&(B._cycle!=D))B._Done(C.AJw[0]._this=null);if((B=C.AJy[0]._this)&&(B.
_cycle!=D))B._Done(C.AJy[0]._this=null);if((B=C.AJz[0]._this)&&(B._cycle!=D))B._Done(
C.AJz[0]._this=null);if((B=C.ABt[0]._this)&&(B._cycle!=D))B._Done(C.ABt[0]._this=
null);if((B=C.AOr[0]._this)&&(B._cycle!=D))B._Done(C.AOr[0]._this=null);if((B=C.
ANm[0]._this)&&(B._cycle!=D))B._Done(C.ANm[0]._this=null);if((B=C.ET[0]._this)&&(
B._cycle!=D))B._Done(C.ET[0]._this=null);if((B=C.AKX[0]._this)&&(B._cycle!=D))B.
_Done(C.AKX[0]._this=null);if((B=C.Ao7[0]._this)&&(B._cycle!=D))B._Done(C.Ao7[0].
_this=null);if((B=C.AAw[0]._this)&&(B._cycle!=D))B._Done(C.AAw[0]._this=null);if((
B=C.AJB[0]._this)&&(B._cycle!=D))B._Done(C.AJB[0]._this=null);if((B=C.AJA[0]._this
)&&(B._cycle!=D))B._Done(C.AJA[0]._this=null);if((B=C.AiX[0]._this)&&(B._cycle!=
D))B._Done(C.AiX[0]._this=null);if((B=C.Adp[0]._this)&&(B._cycle!=D))B._Done(C.Adp[
0]._this=null);if((B=C.ANW[0]._this)&&(B._cycle!=D))B._Done(C.ANW[0]._this=null);
if((B=C.AOn[0]._this)&&(B._cycle!=D))B._Done(C.AOn[0]._this=null);if((B=C.ABI[0].
_this)&&(B._cycle!=D))B._Done(C.ABI[0]._this=null);if((B=C.At7[0]._this)&&(B._cycle
!=D))B._Done(C.At7[0]._this=null);if((B=C.AJx[0]._this)&&(B._cycle!=D))B._Done(C.
AJx[0]._this=null);if((B=C.At2[0]._this)&&(B._cycle!=D))B._Done(C.At2[0]._this=null
);if((B=C.ANw[0]._this)&&(B._cycle!=D))B._Done(C.ANw[0]._this=null);if((B=C.ABJ[
0]._this)&&(B._cycle!=D))B._Done(C.ABJ[0]._this=null);if((B=C.ABA[0]._this)&&(B.
_cycle!=D))B._Done(C.ABA[0]._this=null);if((B=C.AJk[0]._this)&&(B._cycle!=D))B._Done(
C.AJk[0]._this=null);if((B=C.Aax[0]._this)&&(B._cycle!=D))B._Done(C.Aax[0]._this=
null);if((B=C.ABC[0]._this)&&(B._cycle!=D))B._Done(C.ABC[0]._this=null);if((B=C.
At1[0]._this)&&(B._cycle!=D))B._Done(C.At1[0]._this=null);if((B=C.ABy[0]._this)&&(
B._cycle!=D))B._Done(C.ABy[0]._this=null);if((B=C.AN7[0]._this)&&(B._cycle!=D))B.
_Done(C.AN7[0]._this=null);if((B=C.AlY[0]._this)&&(B._cycle!=D))B._Done(C.AlY[0].
_this=null);if((B=C.AiW[0]._this)&&(B._cycle!=D))B._Done(C.AiW[0]._this=null);if((
B=C.At9[0]._this)&&(B._cycle!=D))B._Done(C.At9[0]._this=null);if((B=C.At_[0]._this
)&&(B._cycle!=D))B._Done(C.At_[0]._this=null);if((B=C.ABG[0]._this)&&(B._cycle!=
D))B._Done(C.ABG[0]._this=null);if((B=C.J7[0]._this)&&(B._cycle!=D))B._Done(C.J7[
0]._this=null);if((B=C.ANq[0]._this)&&(B._cycle!=D))B._Done(C.ANq[0]._this=null);
if((B=C.AKW[0]._this)&&(B._cycle!=D))B._Done(C.AKW[0]._this=null);if((B=C.AKq[0].
_this)&&(B._cycle!=D))B._Done(C.AKq[0]._this=null);if((B=C.Aip[0]._this)&&(B._cycle
!=D))B._Done(C.Aip[0]._this=null);if((B=C.AC[0]._this)&&(B._cycle!=D))B._Done(C.
AC[0]._this=null);if((B=C.Options[0]._this)&&(B._cycle!=D))B._Done(C.Options[0].
_this=null);if((B=C.ABF[0]._this)&&(B._cycle!=D))B._Done(C.ABF[0]._this=null);if((
B=C.AKr[0]._this)&&(B._cycle!=D))B._Done(C.AKr[0]._this=null);if((B=C.Edit[0]._this
)&&(B._cycle!=D))B._Done(C.Edit[0]._this=null);if((B=C.Ad6[0]._this)&&(B._cycle!=
D))B._Done(C.Ad6[0]._this=null);if((B=C.ANr[0]._this)&&(B._cycle!=D))B._Done(C.ANr[
0]._this=null);if((B=C.ANv[0]._this)&&(B._cycle!=D))B._Done(C.ANv[0]._this=null);
if((B=C.AzQ[0]._this)&&(B._cycle!=D))B._Done(C.AzQ[0]._this=null);if((B=C.AEd[0].
_this)&&(B._cycle!=D))B._Done(C.AEd[0]._this=null);if((B=C.AqH[0]._this)&&(B._cycle
!=D))B._Done(C.AqH[0]._this=null);if((B=C.ABc[0]._this)&&(B._cycle!=D))B._Done(C.
ABc[0]._this=null);if((B=C.ABb[0]._this)&&(B._cycle!=D))B._Done(C.ABb[0]._this=null
);if((B=C.ABd[0]._this)&&(B._cycle!=D))B._Done(C.ABd[0]._this=null);if((B=C.AMP[
0]._this)&&(B._cycle!=D))B._Done(C.AMP[0]._this=null);if((B=C.ANT[0]._this)&&(B.
_cycle!=D))B._Done(C.ANT[0]._this=null);if((B=C.AMQ[0]._this)&&(B._cycle!=D))B._Done(
C.AMQ[0]._this=null);if((B=C.Aaw[0]._this)&&(B._cycle!=D))B._Done(C.Aaw[0]._this=
null);if((B=C.ApC[0]._this)&&(B._cycle!=D))B._Done(C.ApC[0]._this=null);if((B=C.
Apu[0]._this)&&(B._cycle!=D))B._Done(C.Apu[0]._this=null);if((B=C.AJl[0]._this)&&(
B._cycle!=D))B._Done(C.AJl[0]._this=null);if((B=C.Al0[0]._this)&&(B._cycle!=D))B.
_Done(C.Al0[0]._this=null);if((B=C.AN$[0]._this)&&(B._cycle!=D))B._Done(C.AN$[0].
_this=null);if((B=C.AOa[0]._this)&&(B._cycle!=D))B._Done(C.AOa[0]._this=null);if((
B=C.AtX[0]._this)&&(B._cycle!=D))B._Done(C.AtX[0]._this=null);if((B=C.AMX[0]._this
)&&(B._cycle!=D))B._Done(C.AMX[0]._this=null);if((B=C.AJm[0]._this)&&(B._cycle!=
D))B._Done(C.AJm[0]._this=null);if((B=C.ANY[0]._this)&&(B._cycle!=D))B._Done(C.ANY[
0]._this=null);if((B=C.Adq[0]._this)&&(B._cycle!=D))B._Done(C.Adq[0]._this=null);
if((B=C.AN9[0]._this)&&(B._cycle!=D))B._Done(C.AN9[0]._this=null);if((B=C.ABu[0].
_this)&&(B._cycle!=D))B._Done(C.ABu[0]._this=null);if((B=C.AN_[0]._this)&&(B._cycle
!=D))B._Done(C.AN_[0]._this=null);if((B=C.AMW[0]._this)&&(B._cycle!=D))B._Done(C.
AMW[0]._this=null);if((B=C.AlZ[0]._this)&&(B._cycle!=D))B._Done(C.AlZ[0]._this=null
);if((B=C.ABM[0]._this)&&(B._cycle!=D))B._Done(C.ABM[0]._this=null);if((B=C.AlX[
0]._this)&&(B._cycle!=D))B._Done(C.AlX[0]._this=null);if((B=C.AN1[0]._this)&&(B.
_cycle!=D))B._Done(C.AN1[0]._this=null);if((B=C.At5[0]._this)&&(B._cycle!=D))B._Done(
C.At5[0]._this=null);if((B=C.AJn[0]._this)&&(B._cycle!=D))B._Done(C.AJn[0]._this=
null);if((B=C.ApA[0]._this)&&(B._cycle!=D))B._Done(C.ApA[0]._this=null);if((B=C.
ABB[0]._this)&&(B._cycle!=D))B._Done(C.ABB[0]._this=null);if((B=C.AOj[0]._this)&&(
B._cycle!=D))B._Done(C.AOj[0]._this=null);if((B=C.AN0[0]._this)&&(B._cycle!=D))B.
_Done(C.AN0[0]._this=null);if((B=C.ANL[0]._this)&&(B._cycle!=D))B._Done(C.ANL[0].
_this=null);if((B=C.ANl[0]._this)&&(B._cycle!=D))B._Done(C.ANl[0]._this=null);if((
B=C.ANX[0]._this)&&(B._cycle!=D))B._Done(C.ANX[0]._this=null);if((B=C.ANZ[0]._this
)&&(B._cycle!=D))B._Done(C.ANZ[0]._this=null);if((B=C.AOx[0]._this)&&(B._cycle!=
D))B._Done(C.AOx[0]._this=null);if((B=C.AOw[0]._this)&&(B._cycle!=D))B._Done(C.AOw[
0]._this=null);if((B=C.ANn[0]._this)&&(B._cycle!=D))B._Done(C.ANn[0]._this=null);
if((B=C.ANx[0]._this)&&(B._cycle!=D))B._Done(C.ANx[0]._this=null);if((B=C.ASd[0].
_this)&&(B._cycle!=D))B._Done(C.ASd[0]._this=null);if((B=C.ASf[0]._this)&&(B._cycle
!=D))B._Done(C.ASf[0]._this=null);if((B=C.ASc[0]._this)&&(B._cycle!=D))B._Done(C.
ASc[0]._this=null);if((B=C.AmL[0]._this)&&(B._cycle!=D))B._Done(C.AmL[0]._this=null
);if((B=C.AOf[0]._this)&&(B._cycle!=D))B._Done(C.AOf[0]._this=null);if((B=C.ANQ[
0]._this)&&(B._cycle!=D))B._Done(C.ANQ[0]._this=null);if((B=C.ANN[0]._this)&&(B.
_cycle!=D))B._Done(C.ANN[0]._this=null);if((B=C.ANO[0]._this)&&(B._cycle!=D))B._Done(
C.ANO[0]._this=null);if((B=C.ANM[0]._this)&&(B._cycle!=D))B._Done(C.ANM[0]._this=
null);if((B=C.ANP[0]._this)&&(B._cycle!=D))B._Done(C.ANP[0]._this=null);if((B=C.
ANR[0]._this)&&(B._cycle!=D))B._Done(C.ANR[0]._this=null);if((B=C.ABD[0]._this)&&(
B._cycle!=D))B._Done(C.ABD[0]._this=null);if((B=C.ANt[0]._this)&&(B._cycle!=D))B.
_Done(C.ANt[0]._this=null);if((B=C.Tf[0]._this)&&(B._cycle!=D))B._Done(C.Tf[0]._this=
null);if((B=C.ANu[0]._this)&&(B._cycle!=D))B._Done(C.ANu[0]._this=null);if((B=C.
ABz[0]._this)&&(B._cycle!=D))B._Done(C.ABz[0]._this=null);if((B=C.ANV[0]._this)&&(
B._cycle!=D))B._Done(C.ANV[0]._this=null);if((B=C.AN6[0]._this)&&(B._cycle!=D))B.
_Done(C.AN6[0]._this=null);if((B=C.AN5[0]._this)&&(B._cycle!=D))B._Done(C.AN5[0].
_this=null);if((B=C.AOb[0]._this)&&(B._cycle!=D))B._Done(C.AOb[0]._this=null);if((
B=C.ANU[0]._this)&&(B._cycle!=D))B._Done(C.ANU[0]._this=null);if((B=C.ANJ[0]._this
)&&(B._cycle!=D))B._Done(C.ANJ[0]._this=null);if((B=C.ABa[0]._this)&&(B._cycle!=
D))B._Done(C.ABa[0]._this=null);if((B=C.AJo[0]._this)&&(B._cycle!=D))B._Done(C.AJo[
0]._this=null);if((B=C.ANC[0]._this)&&(B._cycle!=D))B._Done(C.ANC[0]._this=null);
if((B=C.AMU[0]._this)&&(B._cycle!=D))B._Done(C.AMU[0]._this=null);if((B=C.AMS[0].
_this)&&(B._cycle!=D))B._Done(C.AMS[0]._this=null);if((B=C.AMV[0]._this)&&(B._cycle
!=D))B._Done(C.AMV[0]._this=null);if((B=C.AMT[0]._this)&&(B._cycle!=D))B._Done(C.
AMT[0]._this=null);if((B=C.AOs[0]._this)&&(B._cycle!=D))B._Done(C.AOs[0]._this=null
);if((B=C.AOt[0]._this)&&(B._cycle!=D))B._Done(C.AOt[0]._this=null);if((B=C.ANA[
0]._this)&&(B._cycle!=D))B._Done(C.ANA[0]._this=null);if((B=C.ANB[0]._this)&&(B.
_cycle!=D))B._Done(C.ANB[0]._this=null);if((B=C.AOu[0]._this)&&(B._cycle!=D))B._Done(
C.AOu[0]._this=null);if((B=C.AOv[0]._this)&&(B._cycle!=D))B._Done(C.AOv[0]._this=
null);if((B=C.AND[0]._this)&&(B._cycle!=D))B._Done(C.AND[0]._this=null);if((B=C.
ANs[0]._this)&&(B._cycle!=D))B._Done(C.ANs[0]._this=null);if((B=C.ABL[0]._this)&&(
B._cycle!=D))B._Done(C.ABL[0]._this=null);if((B=C.AMY[0]._this)&&(B._cycle!=D))B.
_Done(C.AMY[0]._this=null);if((B=C.AN2[0]._this)&&(B._cycle!=D))B._Done(C.AN2[0].
_this=null);if((B=C.AJp[0]._this)&&(B._cycle!=D))B._Done(C.AJp[0]._this=null);if((
B=C.AOh[0]._this)&&(B._cycle!=D))B._Done(C.AOh[0]._this=null);if((B=C.AOi[0]._this
)&&(B._cycle!=D))B._Done(C.AOi[0]._this=null);if((B=C.ANK[0]._this)&&(B._cycle!=
D))B._Done(C.ANK[0]._this=null);if((B=C.At3[0]._this)&&(B._cycle!=D))B._Done(C.At3[
0]._this=null);if((B=C.AtY[0]._this)&&(B._cycle!=D))B._Done(C.AtY[0]._this=null);
if((B=C.ABH[0]._this)&&(B._cycle!=D))B._Done(C.ABH[0]._this=null);if((B=C.ABw[0].
_this)&&(B._cycle!=D))B._Done(C.ABw[0]._this=null);if((B=C.AtZ[0]._this)&&(B._cycle
!=D))B._Done(C.AtZ[0]._this=null);if((B=C.ANG[0]._this)&&(B._cycle!=D))B._Done(C.
ANG[0]._this=null);if((B=C.ANF[0]._this)&&(B._cycle!=D))B._Done(C.ANF[0]._this=null
);if((B=C.AOg[0]._this)&&(B._cycle!=D))B._Done(C.AOg[0]._this=null);if((B=C.AMR[
0]._this)&&(B._cycle!=D))B._Done(C.AMR[0]._this=null);if((B=C.AOk[0]._this)&&(B.
_cycle!=D))B._Done(C.AOk[0]._this=null);if((B=C.AJq[0]._this)&&(B._cycle!=D))B._Done(
C.AJq[0]._this=null);if((B=C.AJr[0]._this)&&(B._cycle!=D))B._Done(C.AJr[0]._this=
null);if((B=C.AzN[0]._this)&&(B._cycle!=D))B._Done(C.AzN[0]._this=null);if((B=C.
AOm[0]._this)&&(B._cycle!=D))B._Done(C.AOm[0]._this=null);if((B=C.ANE[0]._this)&&(
B._cycle!=D))B._Done(C.ANE[0]._this=null);if((B=C.AOe[0]._this)&&(B._cycle!=D))B.
_Done(C.AOe[0]._this=null);if((B=C.AN8[0]._this)&&(B._cycle!=D))B._Done(C.AN8[0].
_this=null);if((B=C.ANo[0]._this)&&(B._cycle!=D))B._Done(C.ANo[0]._this=null);if((
B=C.ANz[0]._this)&&(B._cycle!=D))B._Done(C.ANz[0]._this=null);if((B=C.ANy[0]._this
)&&(B._cycle!=D))B._Done(C.ANy[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */