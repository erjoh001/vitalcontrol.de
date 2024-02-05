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
null}};C.AtO={_Init:function(){A.acq.ASX._Init.call(this,0);this.BjT(0xFF706E6C);
this.BjW(0xFF706E6C);this.BjV(0xFFABABA8);this.BjU(0xFF706E6C);this.BjP(0xFF706E6C
);this.BjS(0xFF706E6C);this.BjR(0xFFABABA8);this.BjQ(0xFF706E6C);this.BjO(34);this.
BjE(0xFF706E6C);this.BjH(0xFF706E6C);this.BjG(0xAAABABA8);this.BjF(0xFF706E6C);this.
BjA(0xFF706E6C);this.BjD(0xFF706E6C);this.BjC(0xAAABABA8);this.BjB(0xFF706E6C);this.
Bjz(34);this.BjM(0x11);this.A7v(A.aaL(A.fl.Ak));this.A7u(A.aaL(A.fl.Ak));this.Bjx(
0x11);this.Bi9(0x4);this.Bjk(7);this.Bjn(5);this.Bjm(1);this.Bjl(3);this.Bjg(A.aaL(
A.acq.Adr));this.Bjj(A.aaL(A.acq.Adr));this.Bji(A.aaL(A.acq.Adr));this.Bjh(A.aaL(
A.acq.Adr));this.Bjc(6);this.Bjf(4);this.Bje(0);this.Bjd(2);this.Bi_(A.aaL(A.acq.
Adr));this.Bjb(A.aaL(A.acq.Adr));this.Bja(A.aaL(A.acq.Adr));this.Bi$(A.aaL(A.acq.
Adr));this.AEm(B9);},_ReInit:function(){this.A7v(A.aaL(A.fl.Ak));this.A7u(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AtO._this))B._ReInit(),C.
AtO._ReInit.call(B);};C.DB=function(D){var B;if((B=C.AbF[0]._this)&&(B._cycle!=D
))B._Done(C.AbF[0]._this=null);if((B=C.APn[0]._this)&&(B._cycle!=D))B._Done(C.APn[
0]._this=null);if((B=C.AtO._this)&&(B._cycle!=D))B._Done(C.AtO._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */