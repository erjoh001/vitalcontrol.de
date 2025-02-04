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
null}};C.ARQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au5={_Init:function(){A.acs.AVI._Init.call(this,0);this.BnI(0xFF706E6C);
this.BnL(0xFF706E6C);this.BnK(0xFFABABA8);this.BnJ(0xFF706E6C);this.BnE(0xFF706E6C
);this.BnH(0xFF706E6C);this.BnG(0xFFABABA8);this.BnF(0xFF706E6C);this.BnD(34);this.
Bnr(0xFF706E6C);this.Bnu(0xFF706E6C);this.Bnt(0xAAABABA8);this.Bns(0xFF706E6C);this.
Bnn(0xFF706E6C);this.Bnq(0xFF706E6C);this.Bnp(0xAAABABA8);this.Bno(0xFF706E6C);this.
Bnm(34);this.BnB(0x11);this.A_J(A.aaL(A.fl.Ak));this.A_I(A.aaL(A.fl.Ak));this.Bnk(
0x11);this.BmW(0x4);this.Bm9(7);this.Bna(5);this.Bm$(1);this.Bm_(3);this.Bm5(A.aaL(
A.acs.Aec));this.Bm8(A.aaL(A.acs.Aec));this.Bm7(A.aaL(A.acs.Aec));this.Bm6(A.aaL(
A.acs.Aec));this.Bm1(6);this.Bm4(4);this.Bm3(0);this.Bm2(2);this.BmX(A.aaL(A.acs.
Aec));this.Bm0(A.aaL(A.acs.Aec));this.BmZ(A.aaL(A.acs.Aec));this.BmY(A.aaL(A.acs.
Aec));this.AGl(Cf);},_ReInit:function(){this.A_J(A.aaL(A.fl.Ak));this.A_I(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au5._this))B._ReInit(),C.
Au5._ReInit.call(B);};C.DI=function(D){var B;if((B=C.Aco[0]._this)&&(B._cycle!=D
))B._Done(C.Aco[0]._this=null);if((B=C.ARQ[0]._this)&&(B._cycle!=D))B._Done(C.ARQ[
0]._this=null);if((B=C.Au5._this)&&(B._cycle!=D))B._Done(C.Au5._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */