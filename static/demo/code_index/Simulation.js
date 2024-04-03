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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acx)throw new Error("The unit file 'Simulation.js' included twice!");
index.acx=(function(){var A=index;var C={};
var Cc=[26,26];
C.Ace={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuS={_Init:function(){A.acr.AVd._Init.call(this,0);this.BmY(0xFF706E6C);
this.Bm1(0xFF706E6C);this.Bm0(0xFFABABA8);this.BmZ(0xFF706E6C);this.BmU(0xFF706E6C
);this.BmX(0xFF706E6C);this.BmW(0xFFABABA8);this.BmV(0xFF706E6C);this.BmT(34);this.
BmH(0xFF706E6C);this.BmK(0xFF706E6C);this.BmJ(0xAAABABA8);this.BmI(0xFF706E6C);this.
BmD(0xFF706E6C);this.BmG(0xFF706E6C);this.BmF(0xAAABABA8);this.BmE(0xFF706E6C);this.
BmC(34);this.BmR(0x11);this.A93(A.aaL(A.fl.Ak));this.A92(A.aaL(A.fl.Ak));this.BmA(
0x11);this.Bma(0x4);this.Bmn(7);this.Bmq(5);this.Bmp(1);this.Bmo(3);this.Bmj(A.aaL(
A.acr.Ad9));this.Bmm(A.aaL(A.acr.Ad9));this.Bml(A.aaL(A.acr.Ad9));this.Bmk(A.aaL(
A.acr.Ad9));this.Bmf(6);this.Bmi(4);this.Bmh(0);this.Bmg(2);this.Bmb(A.aaL(A.acr.
Ad9));this.Bme(A.aaL(A.acr.Ad9));this.Bmd(A.aaL(A.acr.Ad9));this.Bmc(A.aaL(A.acr.
Ad9));this.AF0(Cc);},_ReInit:function(){this.A93(A.aaL(A.fl.Ak));this.A92(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuS._this))B._ReInit(),C.
AuS._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ace[0]._this)&&(B._cycle!=D
))B._Done(C.Ace[0]._this=null);if((B=C.ARr[0]._this)&&(B._cycle!=D))B._Done(C.ARr[
0]._this=null);if((B=C.AuS._this)&&(B._cycle!=D))B._Done(C.AuS._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */