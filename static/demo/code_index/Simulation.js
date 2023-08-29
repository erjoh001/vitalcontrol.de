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
var B9=[26,26];
C.Abc={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:null}};C.AOY={_class:
function(){return A.abj.Aj;},0:{FileName:"./res_index/SimulationLightCone.png",Format:
A.jt,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:null}};C.Az$={_Init:function(
){A.abr.ASx._Init.call(this,0);this.Bja(0xFF706E6C);this.Bjd(0xFF706E6C);this.Bjc(
0xFFABABA8);this.Bjb(0xFF706E6C);this.Bi7(0xFF706E6C);this.Bi_(0xFF706E6C);this.
Bi9(0xFFABABA8);this.Bi8(0xFF706E6C);this.Bi6(34);this.BiX(0xFF706E6C);this.Bi0(
0xFF706E6C);this.BiZ(0xAAABABA8);this.BiY(0xFF706E6C);this.BiT(0xFF706E6C);this.
BiW(0xFF706E6C);this.BiV(0xAAABABA8);this.BiU(0xFF706E6C);this.BiS(34);this.Bi5(
0x11);this.Bje(A.zW(A.eV.Az));this.Bi$(A.zW(A.eV.Az));this.BiQ(0x11);this.Biq(0x4
);this.BiD(7);this.BiG(5);this.BiF(1);this.BiE(3);this.Biz(A.zW(A.abr.Ac3));this.
BiC(A.zW(A.abr.Ac3));this.BiB(A.zW(A.abr.Ac3));this.BiA(A.zW(A.abr.Ac3));this.Biv(
6);this.Biy(4);this.Bix(0);this.Biw(2);this.Bir(A.zW(A.abr.Ac3));this.Biu(A.zW(A.
abr.Ac3));this.Bit(A.zW(A.abr.Ac3));this.Bis(A.zW(A.abr.Ac3));this.ADT(B9);},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Az$._this))B._ReInit();};
C.DB=function(D){var B;if((B=C.Abc[0]._this)&&(B._cycle!=D))B._Done(C.Abc[0]._this=
null);if((B=C.AOY[0]._this)&&(B._cycle!=D))B._Done(C.AOY[0]._this=null);if((B=C.
Az$._this)&&(B._cycle!=D))B._Done(C.Az$._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */