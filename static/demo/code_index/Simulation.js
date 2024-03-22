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
C.Ack={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuS={_Init:function(){A.acr.AU7._Init.call(this,0);this.BmC(0xFF706E6C);
this.BmF(0xFF706E6C);this.BmE(0xFFABABA8);this.BmD(0xFF706E6C);this.Bmy(0xFF706E6C
);this.BmB(0xFF706E6C);this.BmA(0xFFABABA8);this.Bmz(0xFF706E6C);this.Bmx(34);this.
Bml(0xFF706E6C);this.Bmo(0xFF706E6C);this.Bmn(0xAAABABA8);this.Bmm(0xFF706E6C);this.
Bmh(0xFF706E6C);this.Bmk(0xFF706E6C);this.Bmj(0xAAABABA8);this.Bmi(0xFF706E6C);this.
Bmg(34);this.Bmv(0x11);this.A9V(A.aaL(A.fl.Ak));this.A9U(A.aaL(A.fl.Ak));this.Bme(
0x11);this.BlQ(0x4);this.Bl3(7);this.Bl6(5);this.Bl5(1);this.Bl4(3);this.BlZ(A.aaL(
A.acr.Ad_));this.Bl2(A.aaL(A.acr.Ad_));this.Bl1(A.aaL(A.acr.Ad_));this.Bl0(A.aaL(
A.acr.Ad_));this.BlV(6);this.BlY(4);this.BlX(0);this.BlW(2);this.BlR(A.aaL(A.acr.
Ad_));this.BlU(A.aaL(A.acr.Ad_));this.BlT(A.aaL(A.acr.Ad_));this.BlS(A.aaL(A.acr.
Ad_));this.AFZ(Cc);},_ReInit:function(){this.A9V(A.aaL(A.fl.Ak));this.A9U(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuS._this))B._ReInit(),C.
AuS._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ack[0]._this)&&(B._cycle!=D
))B._Done(C.Ack[0]._this=null);if((B=C.ARi[0]._this)&&(B._cycle!=D))B._Done(C.ARi[
0]._this=null);if((B=C.AuS._this)&&(B._cycle!=D))B._Done(C.AuS._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */