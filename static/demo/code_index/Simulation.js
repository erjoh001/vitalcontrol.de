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
var B4=[26,26];
C.Aam={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:null}};C.AM2={_class:
function(){return A.abj.Ai;},0:{FileName:"./res_index/SimulationLightCone.png",Format:
A.jt,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:null}};C.AyD={_Init:function(
){A.abr.AQi._Init.call(this,0);this.Bgj(0xFF706E6C);this.Bgm(0xFF706E6C);this.Bgl(
0xFFABABA8);this.Bgk(0xFF706E6C);this.Bge(0xFF706E6C);this.Bgh(0xFF706E6C);this.
Bgg(0xFFABABA8);this.Bgf(0xFF706E6C);this.Bgd(34);this.Bf5(0xFF706E6C);this.Bf8(
0xFF706E6C);this.Bf7(0xAAABABA8);this.Bf6(0xFF706E6C);this.Bf1(0xFF706E6C);this.
Bf4(0xFF706E6C);this.Bf3(0xAAABABA8);this.Bf2(0xFF706E6C);this.Bf0(34);this.Bgc(
0x11);this.Bgn(A.zW(A.eV.Az));this.Bgi(A.zW(A.eV.Az));this.BfY(0x11);this.Bfy(0x4
);this.BfL(7);this.BfO(5);this.BfN(1);this.BfM(3);this.BfH(A.zW(A.abr.Ab2));this.
BfK(A.zW(A.abr.Ab2));this.BfJ(A.zW(A.abr.Ab2));this.BfI(A.zW(A.abr.Ab2));this.BfD(
6);this.BfG(4);this.BfF(0);this.BfE(2);this.Bfz(A.zW(A.abr.Ab2));this.BfC(A.zW(A.
abr.Ab2));this.BfB(A.zW(A.abr.Ab2));this.BfA(A.zW(A.abr.Ab2));this.AB_(B4);},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AyD._this))B._ReInit();};
C.Dq=function(D){var B;if((B=C.Aam[0]._this)&&(B._cycle!=D))B._Done(C.Aam[0]._this=
null);if((B=C.AM2[0]._this)&&(B._cycle!=D))B._Done(C.AM2[0]._this=null);if((B=C.
AyD._this)&&(B._cycle!=D))B._Done(C.AyD._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */