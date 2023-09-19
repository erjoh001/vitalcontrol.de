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
);if(index.abz)throw new Error("The unit file 'Simulation.js' included twice!");
index.abz=(function(){var A=index;var C={};
var B$=[26,26];
C.Abr={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:null}};C.AO8={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationLightCone.png",Format:
A.jt,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:null}};C.AAi={_Init:function(
){A.abr.ASG._Init.call(this,0);this.Bjy(0xFF706E6C);this.BjB(0xFF706E6C);this.BjA(
0xFFABABA8);this.Bjz(0xFF706E6C);this.Bjt(0xFF706E6C);this.Bjw(0xFF706E6C);this.
Bjv(0xFFABABA8);this.Bju(0xFF706E6C);this.Bjs(34);this.Bjj(0xFF706E6C);this.Bjm(
0xFF706E6C);this.Bjl(0xAAABABA8);this.Bjk(0xFF706E6C);this.Bjf(0xFF706E6C);this.
Bji(0xFF706E6C);this.Bjh(0xAAABABA8);this.Bjg(0xFF706E6C);this.Bje(34);this.Bjr(
0x11);this.BjC(A.zW(A.eV.AB));this.Bjx(A.zW(A.eV.AB));this.Bjc(0x11);this.BiO(0x4
);this.Bi1(7);this.Bi4(5);this.Bi3(1);this.Bi2(3);this.BiX(A.zW(A.abr.Adb));this.
Bi0(A.zW(A.abr.Adb));this.BiZ(A.zW(A.abr.Adb));this.BiY(A.zW(A.abr.Adb));this.BiT(
6);this.BiW(4);this.BiV(0);this.BiU(2);this.BiP(A.zW(A.abr.Adb));this.BiS(A.zW(A.
abr.Adb));this.BiR(A.zW(A.abr.Adb));this.BiQ(A.zW(A.abr.Adb));this.AD2(B$);},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AAi._this))B._ReInit();};
C.DE=function(D){var B;if((B=C.Abr[0]._this)&&(B._cycle!=D))B._Done(C.Abr[0]._this=
null);if((B=C.AO8[0]._this)&&(B._cycle!=D))B._Done(C.AO8[0]._this=null);if((B=C.
AAi._this)&&(B._cycle!=D))B._Done(C.AAi._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */