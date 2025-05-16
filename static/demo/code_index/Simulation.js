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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acx)throw new Error("The unit file 'Simulation.js' included twice!");
index.acx=(function(){var A=index;var C={};
var Cf=[26,26];
C.Acp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au5={_Init:function(){A.acs.AVI._Init.call(this,0);this.BnJ(0xFF706E6C);
this.BnM(0xFF706E6C);this.BnL(0xFFABABA8);this.BnK(0xFF706E6C);this.BnF(0xFF706E6C
);this.BnI(0xFF706E6C);this.BnH(0xFFABABA8);this.BnG(0xFF706E6C);this.BnE(34);this.
Bns(0xFF706E6C);this.Bnv(0xFF706E6C);this.Bnu(0xAAABABA8);this.Bnt(0xFF706E6C);this.
Bno(0xFF706E6C);this.Bnr(0xFF706E6C);this.Bnq(0xAAABABA8);this.Bnp(0xFF706E6C);this.
Bnn(34);this.BnC(0x11);this.A_J(A.aaL(A.fl.Ak));this.A_I(A.aaL(A.fl.Ak));this.Bnl(
0x11);this.BmX(0x4);this.Bm_(7);this.Bnb(5);this.Bna(1);this.Bm$(3);this.Bm6(A.aaL(
A.acs.Aed));this.Bm9(A.aaL(A.acs.Aed));this.Bm8(A.aaL(A.acs.Aed));this.Bm7(A.aaL(
A.acs.Aed));this.Bm2(6);this.Bm5(4);this.Bm4(0);this.Bm3(2);this.BmY(A.aaL(A.acs.
Aed));this.Bm1(A.aaL(A.acs.Aed));this.Bm0(A.aaL(A.acs.Aed));this.BmZ(A.aaL(A.acs.
Aed));this.AGl(Cf);},_ReInit:function(){this.A_J(A.aaL(A.fl.Ak));this.A_I(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au5._this))B._ReInit(),C.
Au5._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Acp[0]._this)&&(B._cycle!=D
))B._Done(C.Acp[0]._this=null);if((B=C.ARQ[0]._this)&&(B._cycle!=D))B._Done(C.ARQ[
0]._this=null);if((B=C.Au5._this)&&(B._cycle!=D))B._Done(C.Au5._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */