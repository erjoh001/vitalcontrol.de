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
var Cd=[26,26];
C.Acg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.AuQ={_Init:function(){A.acr.AU$._Init.call(this,0);this.Bmx(0xFF706E6C);
this.BmA(0xFF706E6C);this.Bmz(0xFFABABA8);this.Bmy(0xFF706E6C);this.Bmt(0xFF706E6C
);this.Bmw(0xFF706E6C);this.Bmv(0xFFABABA8);this.Bmu(0xFF706E6C);this.Bms(34);this.
Bmg(0xFF706E6C);this.Bmj(0xFF706E6C);this.Bmi(0xAAABABA8);this.Bmh(0xFF706E6C);this.
Bmc(0xFF706E6C);this.Bmf(0xFF706E6C);this.Bme(0xAAABABA8);this.Bmd(0xFF706E6C);this.
Bmb(34);this.Bmq(0x11);this.A9Q(A.aaL(A.fl.Ak));this.A9P(A.aaL(A.fl.Ak));this.Bl$(
0x11);this.BlL(0x4);this.BlY(7);this.Bl1(5);this.Bl0(1);this.BlZ(3);this.BlU(A.aaL(
A.acr.Ad7));this.BlX(A.aaL(A.acr.Ad7));this.BlW(A.aaL(A.acr.Ad7));this.BlV(A.aaL(
A.acr.Ad7));this.BlQ(6);this.BlT(4);this.BlS(0);this.BlR(2);this.BlM(A.aaL(A.acr.
Ad7));this.BlP(A.aaL(A.acr.Ad7));this.BlO(A.aaL(A.acr.Ad7));this.BlN(A.aaL(A.acr.
Ad7));this.AFY(Cd);},_ReInit:function(){this.A9Q(A.aaL(A.fl.Ak));this.A9P(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.AuQ._this))B._ReInit(),C.
AuQ._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Acg[0]._this)&&(B._cycle!=D
))B._Done(C.Acg[0]._this=null);if((B=C.ARm[0]._this)&&(B._cycle!=D))B._Done(C.ARm[
0]._this=null);if((B=C.AuQ._this)&&(B._cycle!=D))B._Done(C.AuQ._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */