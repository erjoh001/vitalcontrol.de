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
C.Ab_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.AQ$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuJ={_Init:function(){A.acr.AU1._Init.call(this,0);this.BmH(0xFF706E6C);
this.BmK(0xFF706E6C);this.BmJ(0xFFABABA8);this.BmI(0xFF706E6C);this.BmD(0xFF706E6C
);this.BmG(0xFF706E6C);this.BmF(0xFFABABA8);this.BmE(0xFF706E6C);this.BmC(34);this.
Bmr(0xFF706E6C);this.Bmu(0xFF706E6C);this.Bmt(0xAAABABA8);this.Bms(0xFF706E6C);this.
Bmn(0xFF706E6C);this.Bmq(0xFF706E6C);this.Bmp(0xAAABABA8);this.Bmo(0xFF706E6C);this.
Bmm(34);this.BmA(0x11);this.A96(A.aaL(A.fl.Ak));this.A95(A.aaL(A.fl.Ak));this.Bmk(
0x11);this.BlW(0x4);this.Bl9(7);this.Bma(5);this.Bl$(1);this.Bl_(3);this.Bl5(A.aaL(
A.acr.AdY));this.Bl8(A.aaL(A.acr.AdY));this.Bl7(A.aaL(A.acr.AdY));this.Bl6(A.aaL(
A.acr.AdY));this.Bl1(6);this.Bl4(4);this.Bl3(0);this.Bl2(2);this.BlX(A.aaL(A.acr.
AdY));this.Bl0(A.aaL(A.acr.AdY));this.BlZ(A.aaL(A.acr.AdY));this.BlY(A.aaL(A.acr.
AdY));this.AFR(Cc);},_ReInit:function(){this.A96(A.aaL(A.fl.Ak));this.A95(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuJ._this))B._ReInit(),C.
AuJ._ReInit.call(B);};C.DF=function(D){var B;if((B=C.Ab_[0]._this)&&(B._cycle!=D
))B._Done(C.Ab_[0]._this=null);if((B=C.AQ$[0]._this)&&(B._cycle!=D))B._Done(C.AQ$[
0]._this=null);if((B=C.AuJ._this)&&(B._cycle!=D))B._Done(C.AuJ._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */