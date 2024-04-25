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
var Ce=[26,26];
C.Acg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au0={_Init:function(){A.acr.AVr._Init.call(this,0);this.Bnr(0xFF706E6C);
this.Bnu(0xFF706E6C);this.Bnt(0xFFABABA8);this.Bns(0xFF706E6C);this.Bnn(0xFF706E6C
);this.Bnq(0xFF706E6C);this.Bnp(0xFFABABA8);this.Bno(0xFF706E6C);this.Bnm(34);this.
Bna(0xFF706E6C);this.Bnd(0xFF706E6C);this.Bnc(0xAAABABA8);this.Bnb(0xFF706E6C);this.
Bm8(0xFF706E6C);this.Bm$(0xFF706E6C);this.Bm_(0xAAABABA8);this.Bm9(0xFF706E6C);this.
Bm7(34);this.Bnk(0x11);this.A_m(A.aaL(A.fl.Ak));this.A_l(A.aaL(A.fl.Ak));this.Bm5(
0x11);this.BmF(0x4);this.BmS(7);this.BmV(5);this.BmU(1);this.BmT(3);this.BmO(A.aaL(
A.acr.Aea));this.BmR(A.aaL(A.acr.Aea));this.BmQ(A.aaL(A.acr.Aea));this.BmP(A.aaL(
A.acr.Aea));this.BmK(6);this.BmN(4);this.BmM(0);this.BmL(2);this.BmG(A.aaL(A.acr.
Aea));this.BmJ(A.aaL(A.acr.Aea));this.BmI(A.aaL(A.acr.Aea));this.BmH(A.aaL(A.acr.
Aea));this.AF9(Ce);},_ReInit:function(){this.A_m(A.aaL(A.fl.Ak));this.A_l(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au0._this))B._ReInit(),C.
Au0._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Acg[0]._this)&&(B._cycle!=D
))B._Done(C.Acg[0]._this=null);if((B=C.ARD[0]._this)&&(B._cycle!=D))B._Done(C.ARD[
0]._this=null);if((B=C.Au0._this)&&(B._cycle!=D))B._Done(C.Au0._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */