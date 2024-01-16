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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acx)throw new Error("The unit file 'Simulation.js' included twice!");
index.acx=(function(){var A=index;var C={};
var B9=[26,26];
C.AbF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.APn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AtO={_Init:function(){A.acq.ASX._Init.call(this,0);this.BjP(0xFF706E6C);
this.BjS(0xFF706E6C);this.BjR(0xFFABABA8);this.BjQ(0xFF706E6C);this.BjL(0xFF706E6C
);this.BjO(0xFF706E6C);this.BjN(0xFFABABA8);this.BjM(0xFF706E6C);this.BjK(34);this.
BjA(0xFF706E6C);this.BjD(0xFF706E6C);this.BjC(0xAAABABA8);this.BjB(0xFF706E6C);this.
Bjw(0xFF706E6C);this.Bjz(0xFF706E6C);this.Bjy(0xAAABABA8);this.Bjx(0xFF706E6C);this.
Bjv(34);this.BjI(0x11);this.A7v(A.aaL(A.fl.Ak));this.A7u(A.aaL(A.fl.Ak));this.Bjt(
0x11);this.Bi5(0x4);this.Bjg(7);this.Bjj(5);this.Bji(1);this.Bjh(3);this.Bjc(A.aaL(
A.acq.Adr));this.Bjf(A.aaL(A.acq.Adr));this.Bje(A.aaL(A.acq.Adr));this.Bjd(A.aaL(
A.acq.Adr));this.Bi_(6);this.Bjb(4);this.Bja(0);this.Bi$(2);this.Bi6(A.aaL(A.acq.
Adr));this.Bi9(A.aaL(A.acq.Adr));this.Bi8(A.aaL(A.acq.Adr));this.Bi7(A.aaL(A.acq.
Adr));this.AEm(B9);},_ReInit:function(){this.A7v(A.aaL(A.fl.Ak));this.A7u(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AtO._this))B._ReInit(),C.
AtO._ReInit.call(B);};C.Dz=function(D){var B;if((B=C.AbF[0]._this)&&(B._cycle!=D
))B._Done(C.AbF[0]._this=null);if((B=C.APn[0]._this)&&(B._cycle!=D))B._Done(C.APn[
0]._this=null);if((B=C.AtO._this)&&(B._cycle!=D))B._Done(C.AtO._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */