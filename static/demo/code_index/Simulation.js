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
var Ce=[26,26];
C.Acg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au0={_Init:function(){A.acr.AVr._Init.call(this,0);this.Bnn(0xFF706E6C);
this.Bnq(0xFF706E6C);this.Bnp(0xFFABABA8);this.Bno(0xFF706E6C);this.Bnj(0xFF706E6C
);this.Bnm(0xFF706E6C);this.Bnl(0xFFABABA8);this.Bnk(0xFF706E6C);this.Bni(34);this.
Bm8(0xFF706E6C);this.Bm$(0xFF706E6C);this.Bm_(0xAAABABA8);this.Bm9(0xFF706E6C);this.
Bm4(0xFF706E6C);this.Bm7(0xFF706E6C);this.Bm6(0xAAABABA8);this.Bm5(0xFF706E6C);this.
Bm3(34);this.Bng(0x11);this.A_k(A.aaL(A.fl.Ak));this.A_j(A.aaL(A.fl.Ak));this.Bm1(
0x11);this.BmB(0x4);this.BmO(7);this.BmR(5);this.BmQ(1);this.BmP(3);this.BmK(A.aaL(
A.acr.Aea));this.BmN(A.aaL(A.acr.Aea));this.BmM(A.aaL(A.acr.Aea));this.BmL(A.aaL(
A.acr.Aea));this.BmG(6);this.BmJ(4);this.BmI(0);this.BmH(2);this.BmC(A.aaL(A.acr.
Aea));this.BmF(A.aaL(A.acr.Aea));this.BmE(A.aaL(A.acr.Aea));this.BmD(A.aaL(A.acr.
Aea));this.AF8(Ce);},_ReInit:function(){this.A_k(A.aaL(A.fl.Ak));this.A_j(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au0._this))B._ReInit(),C.
Au0._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Acg[0]._this)&&(B._cycle!=D
))B._Done(C.Acg[0]._this=null);if((B=C.ARD[0]._this)&&(B._cycle!=D))B._Done(C.ARD[
0]._this=null);if((B=C.Au0._this)&&(B._cycle!=D))B._Done(C.Au0._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */