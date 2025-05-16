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
C.Aco={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au4={_Init:function(){A.acs.AVG._Init.call(this,0);this.BnH(0xFF706E6C);
this.BnK(0xFF706E6C);this.BnJ(0xFFABABA8);this.BnI(0xFF706E6C);this.BnD(0xFF706E6C
);this.BnG(0xFF706E6C);this.BnF(0xFFABABA8);this.BnE(0xFF706E6C);this.BnC(34);this.
Bnq(0xFF706E6C);this.Bnt(0xFF706E6C);this.Bns(0xAAABABA8);this.Bnr(0xFF706E6C);this.
Bnm(0xFF706E6C);this.Bnp(0xFF706E6C);this.Bno(0xAAABABA8);this.Bnn(0xFF706E6C);this.
Bnl(34);this.BnA(0x11);this.A_H(A.aaL(A.fl.Ak));this.A_G(A.aaL(A.fl.Ak));this.Bnj(
0x11);this.BmV(0x4);this.Bm8(7);this.Bm$(5);this.Bm_(1);this.Bm9(3);this.Bm4(A.aaL(
A.acs.Aec));this.Bm7(A.aaL(A.acs.Aec));this.Bm6(A.aaL(A.acs.Aec));this.Bm5(A.aaL(
A.acs.Aec));this.Bm0(6);this.Bm3(4);this.Bm2(0);this.Bm1(2);this.BmW(A.aaL(A.acs.
Aec));this.BmZ(A.aaL(A.acs.Aec));this.BmY(A.aaL(A.acs.Aec));this.BmX(A.aaL(A.acs.
Aec));this.AGj(Cf);},_ReInit:function(){this.A_H(A.aaL(A.fl.Ak));this.A_G(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au4._this))B._ReInit(),C.
Au4._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Aco[0]._this)&&(B._cycle!=D
))B._Done(C.Aco[0]._this=null);if((B=C.ARO[0]._this)&&(B._cycle!=D))B._Done(C.ARO[
0]._this=null);if((B=C.Au4._this)&&(B._cycle!=D))B._Done(C.Au4._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */