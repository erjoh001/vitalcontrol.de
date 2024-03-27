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
C.Acb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARd={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuL={_Init:function(){A.acr.AU0._Init.call(this,0);this.Bmm(0xFF706E6C);
this.Bmp(0xFF706E6C);this.Bmo(0xFFABABA8);this.Bmn(0xFF706E6C);this.Bmi(0xFF706E6C
);this.Bml(0xFF706E6C);this.Bmk(0xFFABABA8);this.Bmj(0xFF706E6C);this.Bmh(34);this.
Bl7(0xFF706E6C);this.Bl_(0xFF706E6C);this.Bl9(0xAAABABA8);this.Bl8(0xFF706E6C);this.
Bl3(0xFF706E6C);this.Bl6(0xFF706E6C);this.Bl5(0xAAABABA8);this.Bl4(0xFF706E6C);this.
Bl2(34);this.Bmf(0x11);this.A9I(A.aaL(A.fl.Ak));this.A9H(A.aaL(A.fl.Ak));this.Bl0(
0x11);this.BlA(0x4);this.BlN(7);this.BlQ(5);this.BlP(1);this.BlO(3);this.BlJ(A.aaL(
A.acr.Ad6));this.BlM(A.aaL(A.acr.Ad6));this.BlL(A.aaL(A.acr.Ad6));this.BlK(A.aaL(
A.acr.Ad6));this.BlF(6);this.BlI(4);this.BlH(0);this.BlG(2);this.BlB(A.aaL(A.acr.
Ad6));this.BlE(A.aaL(A.acr.Ad6));this.BlD(A.aaL(A.acr.Ad6));this.BlC(A.aaL(A.acr.
Ad6));this.AFS(Cc);},_ReInit:function(){this.A9I(A.aaL(A.fl.Ak));this.A9H(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuL._this))B._ReInit(),C.
AuL._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Acb[0]._this)&&(B._cycle!=D
))B._Done(C.Acb[0]._this=null);if((B=C.ARd[0]._this)&&(B._cycle!=D))B._Done(C.ARd[
0]._this=null);if((B=C.AuL._this)&&(B._cycle!=D))B._Done(C.AuL._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */