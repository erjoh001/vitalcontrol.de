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
,Format:A.cC,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:null}};C.APb={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationLightCone.png",Format:
A.jt,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:null}};C.AAh={_Init:function(
){A.abr.ASM._Init.call(this,0);this.Bjq(0xFF706E6C);this.Bjt(0xFF706E6C);this.Bjs(
0xFFABABA8);this.Bjr(0xFF706E6C);this.Bjl(0xFF706E6C);this.Bjo(0xFF706E6C);this.
Bjn(0xFFABABA8);this.Bjm(0xFF706E6C);this.Bjk(34);this.Bjb(0xFF706E6C);this.Bje(
0xFF706E6C);this.Bjd(0xAAABABA8);this.Bjc(0xFF706E6C);this.Bi9(0xFF706E6C);this.
Bja(0xFF706E6C);this.Bi$(0xAAABABA8);this.Bi_(0xFF706E6C);this.Bi8(34);this.Bjj(
0x11);this.Bju(A.zW(A.eV.AB));this.Bjp(A.zW(A.eV.AB));this.Bi6(0x11);this.BiG(0x4
);this.BiT(7);this.BiW(5);this.BiV(1);this.BiU(3);this.BiP(A.zW(A.abr.Adb));this.
BiS(A.zW(A.abr.Adb));this.BiR(A.zW(A.abr.Adb));this.BiQ(A.zW(A.abr.Adb));this.BiL(
6);this.BiO(4);this.BiN(0);this.BiM(2);this.BiH(A.zW(A.abr.Adb));this.BiK(A.zW(A.
abr.Adb));this.BiJ(A.zW(A.abr.Adb));this.BiI(A.zW(A.abr.Adb));this.AD2(B_);},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AAh._this))B._ReInit();};
C.DE=function(D){var B;if((B=C.Abr[0]._this)&&(B._cycle!=D))B._Done(C.Abr[0]._this=
null);if((B=C.APb[0]._this)&&(B._cycle!=D))B._Done(C.APb[0]._this=null);if((B=C.
AAh._this)&&(B._cycle!=D))B._Done(C.AAh._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */