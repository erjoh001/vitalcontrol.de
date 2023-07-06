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
var B3=[26,26];
C.Aaf={_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:null}};C.AMV={_class:
function(){return A.abj.Ah;},0:{FileName:"./res_index/SimulationLightCone.png",Format:
A.jt,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:null}};C.Ayy={_Init:function(
){A.abr.AQa._Init.call(this,0);this.Bf4(0xFF706E6C);this.Bf7(0xFF706E6C);this.Bf6(
0xFFABABA8);this.Bf5(0xFF706E6C);this.BfZ(0xFF706E6C);this.Bf2(0xFF706E6C);this.
Bf1(0xFFABABA8);this.Bf0(0xFF706E6C);this.BfY(34);this.BfP(0xFF706E6C);this.BfS(
0xFF706E6C);this.BfR(0xAAABABA8);this.BfQ(0xFF706E6C);this.BfL(0xFF706E6C);this.
BfO(0xFF706E6C);this.BfN(0xAAABABA8);this.BfM(0xFF706E6C);this.BfK(34);this.BfX(
0x11);this.Bf8(A.zW(A.eV.AB));this.Bf3(A.zW(A.eV.AB));this.BfI(0x11);this.Bfi(0x4
);this.Bfv(7);this.Bfy(5);this.Bfx(1);this.Bfw(3);this.Bfr(A.zW(A.abr.AbU));this.
Bfu(A.zW(A.abr.AbU));this.Bft(A.zW(A.abr.AbU));this.Bfs(A.zW(A.abr.AbU));this.Bfn(
6);this.Bfq(4);this.Bfp(0);this.Bfo(2);this.Bfj(A.zW(A.abr.AbU));this.Bfm(A.zW(A.
abr.AbU));this.Bfl(A.zW(A.abr.AbU));this.Bfk(A.zW(A.abr.AbU));this.AB2(B3);},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Ayy._this))B._ReInit();};
C.Dn=function(D){var B;if((B=C.Aaf[0]._this)&&(B._cycle!=D))B._Done(C.Aaf[0]._this=
null);if((B=C.AMV[0]._this)&&(B._cycle!=D))B._Done(C.AMV[0]._this=null);if((B=C.
Ayy._this)&&(B._cycle!=D))B._Done(C.Ayy._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */