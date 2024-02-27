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
var Ca=[26,26];
C.AbY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.AQI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Auj={_Init:function(){A.acq.AUv._Init.call(this,0);this.BlO(0xFF706E6C);
this.BlR(0xFF706E6C);this.BlQ(0xFFABABA8);this.BlP(0xFF706E6C);this.BlK(0xFF706E6C
);this.BlN(0xFF706E6C);this.BlM(0xFFABABA8);this.BlL(0xFF706E6C);this.BlJ(34);this.
Blz(0xFF706E6C);this.BlC(0xFF706E6C);this.BlB(0xAAABABA8);this.BlA(0xFF706E6C);this.
Blv(0xFF706E6C);this.Bly(0xFF706E6C);this.Blx(0xAAABABA8);this.Blw(0xFF706E6C);this.
Blu(34);this.BlH(0x11);this.A9j(A.aaL(A.fl.Ak));this.A9i(A.aaL(A.fl.Ak));this.Bls(
0x11);this.Bk4(0x4);this.Blf(7);this.Bli(5);this.Blh(1);this.Blg(3);this.Blb(A.aaL(
A.acq.AdN));this.Ble(A.aaL(A.acq.AdN));this.Bld(A.aaL(A.acq.AdN));this.Blc(A.aaL(
A.acq.AdN));this.Bk9(6);this.Bla(4);this.Bk$(0);this.Bk_(2);this.Bk5(A.aaL(A.acq.
AdN));this.Bk8(A.aaL(A.acq.AdN));this.Bk7(A.aaL(A.acq.AdN));this.Bk6(A.aaL(A.acq.
AdN));this.AFl(Ca);},_ReInit:function(){this.A9j(A.aaL(A.fl.Ak));this.A9i(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Auj._this))B._ReInit(),C.
Auj._ReInit.call(B);};C.DB=function(D){var B;if((B=C.AbY[0]._this)&&(B._cycle!=D
))B._Done(C.AbY[0]._this=null);if((B=C.AQI[0]._this)&&(B._cycle!=D))B._Done(C.AQI[
0]._this=null);if((B=C.Auj._this)&&(B._cycle!=D))B._Done(C.Auj._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */