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
null}};C.ARe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuK={_Init:function(){A.acr.AU1._Init.call(this,0);this.Bmn(0xFF706E6C);
this.Bmq(0xFF706E6C);this.Bmp(0xFFABABA8);this.Bmo(0xFF706E6C);this.Bmj(0xFF706E6C
);this.Bmm(0xFF706E6C);this.Bml(0xFFABABA8);this.Bmk(0xFF706E6C);this.Bmi(34);this.
Bl8(0xFF706E6C);this.Bl$(0xFF706E6C);this.Bl_(0xAAABABA8);this.Bl9(0xFF706E6C);this.
Bl4(0xFF706E6C);this.Bl7(0xFF706E6C);this.Bl6(0xAAABABA8);this.Bl5(0xFF706E6C);this.
Bl3(34);this.Bmg(0x11);this.A9J(A.aaL(A.fl.Ak));this.A9I(A.aaL(A.fl.Ak));this.Bl1(
0x11);this.BlB(0x4);this.BlO(7);this.BlR(5);this.BlQ(1);this.BlP(3);this.BlK(A.aaL(
A.acr.Ad6));this.BlN(A.aaL(A.acr.Ad6));this.BlM(A.aaL(A.acr.Ad6));this.BlL(A.aaL(
A.acr.Ad6));this.BlG(6);this.BlJ(4);this.BlI(0);this.BlH(2);this.BlC(A.aaL(A.acr.
Ad6));this.BlF(A.aaL(A.acr.Ad6));this.BlE(A.aaL(A.acr.Ad6));this.BlD(A.aaL(A.acr.
Ad6));this.AFS(Cc);},_ReInit:function(){this.A9J(A.aaL(A.fl.Ak));this.A9I(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuK._this))B._ReInit(),C.
AuK._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Acb[0]._this)&&(B._cycle!=D
))B._Done(C.Acb[0]._this=null);if((B=C.ARe[0]._this)&&(B._cycle!=D))B._Done(C.ARe[
0]._this=null);if((B=C.AuK._this)&&(B._cycle!=D))B._Done(C.AuK._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */