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
C.AbN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.APV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Aub={_Init:function(){A.acq.ATz._Init.call(this,0);this.Bkx(0xFF706E6C);
this.BkA(0xFF706E6C);this.Bkz(0xFFABABA8);this.Bky(0xFF706E6C);this.Bkt(0xFF706E6C
);this.Bkw(0xFF706E6C);this.Bkv(0xFFABABA8);this.Bku(0xFF706E6C);this.Bks(34);this.
Bki(0xFF706E6C);this.Bkl(0xFF706E6C);this.Bkk(0xAAABABA8);this.Bkj(0xFF706E6C);this.
Bke(0xFF706E6C);this.Bkh(0xFF706E6C);this.Bkg(0xAAABABA8);this.Bkf(0xFF706E6C);this.
Bkd(34);this.Bkq(0x11);this.A8a(A.aaL(A.fl.Ak));this.A7$(A.aaL(A.fl.Ak));this.Bkb(
0x11);this.BjN(0x4);this.Bj0(7);this.Bj3(5);this.Bj2(1);this.Bj1(3);this.BjW(A.aaL(
A.acq.Adz));this.BjZ(A.aaL(A.acq.Adz));this.BjY(A.aaL(A.acq.Adz));this.BjX(A.aaL(
A.acq.Adz));this.BjS(6);this.BjV(4);this.BjU(0);this.BjT(2);this.BjO(A.aaL(A.acq.
Adz));this.BjR(A.aaL(A.acq.Adz));this.BjQ(A.aaL(A.acq.Adz));this.BjP(A.aaL(A.acq.
Adz));this.AEP(B9);},_ReInit:function(){this.A8a(A.aaL(A.fl.Ak));this.A7$(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Aub._this))B._ReInit(),C.
Aub._ReInit.call(B);};C.DB=function(D){var B;if((B=C.AbN[0]._this)&&(B._cycle!=D
))B._Done(C.AbN[0]._this=null);if((B=C.APV[0]._this)&&(B._cycle!=D))B._Done(C.APV[
0]._this=null);if((B=C.Aub._this)&&(B._cycle!=D))B._Done(C.Aub._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */