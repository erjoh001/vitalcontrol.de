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
C.AbX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.AQA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Aui={_Init:function(){A.acq.AUe._Init.call(this,0);this.Blm(0xFF706E6C);
this.Blp(0xFF706E6C);this.Blo(0xFFABABA8);this.Bln(0xFF706E6C);this.Bli(0xFF706E6C
);this.Bll(0xFF706E6C);this.Blk(0xFFABABA8);this.Blj(0xFF706E6C);this.Blh(34);this.
Bk9(0xFF706E6C);this.Bla(0xFF706E6C);this.Bk$(0xAAABABA8);this.Bk_(0xFF706E6C);this.
Bk5(0xFF706E6C);this.Bk8(0xFF706E6C);this.Bk7(0xAAABABA8);this.Bk6(0xFF706E6C);this.
Bk4(34);this.Blf(0x11);this.A8U(A.aaL(A.fl.Ak));this.A8T(A.aaL(A.fl.Ak));this.Bk2(
0x11);this.BkC(0x4);this.BkP(7);this.BkS(5);this.BkR(1);this.BkQ(3);this.BkL(A.aaL(
A.acq.AdK));this.BkO(A.aaL(A.acq.AdK));this.BkN(A.aaL(A.acq.AdK));this.BkM(A.aaL(
A.acq.AdK));this.BkH(6);this.BkK(4);this.BkJ(0);this.BkI(2);this.BkD(A.aaL(A.acq.
AdK));this.BkG(A.aaL(A.acq.AdK));this.BkF(A.aaL(A.acq.AdK));this.BkE(A.aaL(A.acq.
AdK));this.AFe(Ca);},_ReInit:function(){this.A8U(A.aaL(A.fl.Ak));this.A8T(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Aui._this))B._ReInit(),C.
Aui._ReInit.call(B);};C.Dz=function(D){var B;if((B=C.AbX[0]._this)&&(B._cycle!=D
))B._Done(C.AbX[0]._this=null);if((B=C.AQA[0]._this)&&(B._cycle!=D))B._Done(C.AQA[
0]._this=null);if((B=C.Aui._this)&&(B._cycle!=D))B._Done(C.Aui._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */