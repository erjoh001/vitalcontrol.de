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
var B_=[26,26];
C.Abr={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:null}};C.APa={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationLightCone.png",Format:
A.jt,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:null}};C.AAg={_Init:function(
){A.abr.ASK._Init.call(this,0);this.Bjv(0xFF706E6C);this.Bjy(0xFF706E6C);this.Bjx(
0xFFABABA8);this.Bjw(0xFF706E6C);this.Bjq(0xFF706E6C);this.Bjt(0xFF706E6C);this.
Bjs(0xFFABABA8);this.Bjr(0xFF706E6C);this.Bjp(34);this.Bjg(0xFF706E6C);this.Bjj(
0xFF706E6C);this.Bji(0xAAABABA8);this.Bjh(0xFF706E6C);this.Bjc(0xFF706E6C);this.
Bjf(0xFF706E6C);this.Bje(0xAAABABA8);this.Bjd(0xFF706E6C);this.Bjb(34);this.Bjo(
0x11);this.Bjz(A.zW(A.eV.AB));this.Bju(A.zW(A.eV.AB));this.Bi$(0x11);this.BiL(0x4
);this.BiY(7);this.Bi1(5);this.Bi0(1);this.BiZ(3);this.BiU(A.zW(A.abr.Ada));this.
BiX(A.zW(A.abr.Ada));this.BiW(A.zW(A.abr.Ada));this.BiV(A.zW(A.abr.Ada));this.BiQ(
6);this.BiT(4);this.BiS(0);this.BiR(2);this.BiM(A.zW(A.abr.Ada));this.BiP(A.zW(A.
abr.Ada));this.BiO(A.zW(A.abr.Ada));this.BiN(A.zW(A.abr.Ada));this.AD1(B_);},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AAg._this))B._ReInit();};
C.DE=function(D){var B;if((B=C.Abr[0]._this)&&(B._cycle!=D))B._Done(C.Abr[0]._this=
null);if((B=C.APa[0]._this)&&(B._cycle!=D))B._Done(C.APa[0]._this=null);if((B=C.
AAg._this)&&(B._cycle!=D))B._Done(C.AAg._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */