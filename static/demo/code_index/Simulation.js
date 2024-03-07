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
C.Ab4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.AQU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Auu={_Init:function(){A.acq.AUJ._Init.call(this,0);this.Bmd(0xFF706E6C);
this.Bmg(0xFF706E6C);this.Bmf(0xFFABABA8);this.Bme(0xFF706E6C);this.Bl$(0xFF706E6C
);this.Bmc(0xFF706E6C);this.Bmb(0xFFABABA8);this.Bma(0xFF706E6C);this.Bl_(34);this.
BlZ(0xFF706E6C);this.Bl2(0xFF706E6C);this.Bl1(0xAAABABA8);this.Bl0(0xFF706E6C);this.
BlV(0xFF706E6C);this.BlY(0xFF706E6C);this.BlX(0xAAABABA8);this.BlW(0xFF706E6C);this.
BlU(34);this.Bl8(0x11);this.A9H(A.aaL(A.fl.Ak));this.A9G(A.aaL(A.fl.Ak));this.BlS(
0x11);this.Bls(0x4);this.BlF(7);this.BlI(5);this.BlH(1);this.BlG(3);this.BlB(A.aaL(
A.acq.AdR));this.BlE(A.aaL(A.acq.AdR));this.BlD(A.aaL(A.acq.AdR));this.BlC(A.aaL(
A.acq.AdR));this.Blx(6);this.BlA(4);this.Blz(0);this.Bly(2);this.Blt(A.aaL(A.acq.
AdR));this.Blw(A.aaL(A.acq.AdR));this.Blv(A.aaL(A.acq.AdR));this.Blu(A.aaL(A.acq.
AdR));this.AFz(Cc);},_ReInit:function(){this.A9H(A.aaL(A.fl.Ak));this.A9G(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Auu._this))B._ReInit(),C.
Auu._ReInit.call(B);};C.DE=function(D){var B;if((B=C.Ab4[0]._this)&&(B._cycle!=D
))B._Done(C.Ab4[0]._this=null);if((B=C.AQU[0]._this)&&(B._cycle!=D))B._Done(C.AQU[
0]._this=null);if((B=C.Auu._this)&&(B._cycle!=D))B._Done(C.Auu._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */