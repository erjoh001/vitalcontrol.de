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
C.Acn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au4={_Init:function(){A.acs.AVG._Init.call(this,0);this.BnG(0xFF706E6C);
this.BnJ(0xFF706E6C);this.BnI(0xFFABABA8);this.BnH(0xFF706E6C);this.BnC(0xFF706E6C
);this.BnF(0xFF706E6C);this.BnE(0xFFABABA8);this.BnD(0xFF706E6C);this.BnB(34);this.
Bnp(0xFF706E6C);this.Bns(0xFF706E6C);this.Bnr(0xAAABABA8);this.Bnq(0xFF706E6C);this.
Bnl(0xFF706E6C);this.Bno(0xFF706E6C);this.Bnn(0xAAABABA8);this.Bnm(0xFF706E6C);this.
Bnk(34);this.Bnz(0x11);this.A_H(A.aaL(A.fl.Ak));this.A_G(A.aaL(A.fl.Ak));this.Bni(
0x11);this.BmU(0x4);this.Bm7(7);this.Bm_(5);this.Bm9(1);this.Bm8(3);this.Bm3(A.aaL(
A.acs.Aeb));this.Bm6(A.aaL(A.acs.Aeb));this.Bm5(A.aaL(A.acs.Aeb));this.Bm4(A.aaL(
A.acs.Aeb));this.BmZ(6);this.Bm2(4);this.Bm1(0);this.Bm0(2);this.BmV(A.aaL(A.acs.
Aeb));this.BmY(A.aaL(A.acs.Aeb));this.BmX(A.aaL(A.acs.Aeb));this.BmW(A.aaL(A.acs.
Aeb));this.AGj(Cf);},_ReInit:function(){this.A_H(A.aaL(A.fl.Ak));this.A_G(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au4._this))B._ReInit(),C.
Au4._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Acn[0]._this)&&(B._cycle!=D
))B._Done(C.Acn[0]._this=null);if((B=C.ARO[0]._this)&&(B._cycle!=D))B._Done(C.ARO[
0]._this=null);if((B=C.Au4._this)&&(B._cycle!=D))B._Done(C.Au4._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */