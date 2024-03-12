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
C.Ach={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuS={_Init:function(){A.acr.AU_._Init.call(this,0);this.BmH(0xFF706E6C);
this.BmK(0xFF706E6C);this.BmJ(0xFFABABA8);this.BmI(0xFF706E6C);this.BmD(0xFF706E6C
);this.BmG(0xFF706E6C);this.BmF(0xFFABABA8);this.BmE(0xFF706E6C);this.BmC(34);this.
Bmq(0xFF706E6C);this.Bmt(0xFF706E6C);this.Bms(0xAAABABA8);this.Bmr(0xFF706E6C);this.
Bmm(0xFF706E6C);this.Bmp(0xFF706E6C);this.Bmo(0xAAABABA8);this.Bmn(0xFF706E6C);this.
Bml(34);this.BmA(0x11);this.A90(A.aaL(A.fl.Ak));this.A9Z(A.aaL(A.fl.Ak));this.Bmj(
0x11);this.BlV(0x4);this.Bl8(7);this.Bl$(5);this.Bl_(1);this.Bl9(3);this.Bl4(A.aaL(
A.acr.Ad8));this.Bl7(A.aaL(A.acr.Ad8));this.Bl6(A.aaL(A.acr.Ad8));this.Bl5(A.aaL(
A.acr.Ad8));this.Bl0(6);this.Bl3(4);this.Bl2(0);this.Bl1(2);this.BlW(A.aaL(A.acr.
Ad8));this.BlZ(A.aaL(A.acr.Ad8));this.BlY(A.aaL(A.acr.Ad8));this.BlX(A.aaL(A.acr.
Ad8));this.AFY(Cc);},_ReInit:function(){this.A90(A.aaL(A.fl.Ak));this.A9Z(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuS._this))B._ReInit(),C.
AuS._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ach[0]._this)&&(B._cycle!=D
))B._Done(C.Ach[0]._this=null);if((B=C.ARi[0]._this)&&(B._cycle!=D))B._Done(C.ARi[
0]._this=null);if((B=C.AuS._this)&&(B._cycle!=D))B._Done(C.AuS._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */