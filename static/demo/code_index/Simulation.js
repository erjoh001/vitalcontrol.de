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
C.Ach={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationReader.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[354,730],FrameDelay:0,_this:
null}};C.ARI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au1={_Init:function(){A.acr.AVw._Init.call(this,0);this.Bny(0xFF706E6C);
this.BnB(0xFF706E6C);this.BnA(0xFFABABA8);this.Bnz(0xFF706E6C);this.Bnu(0xFF706E6C
);this.Bnx(0xFF706E6C);this.Bnw(0xFFABABA8);this.Bnv(0xFF706E6C);this.Bnt(34);this.
Bnh(0xFF706E6C);this.Bnk(0xFF706E6C);this.Bnj(0xAAABABA8);this.Bni(0xFF706E6C);this.
Bnd(0xFF706E6C);this.Bng(0xFF706E6C);this.Bnf(0xAAABABA8);this.Bne(0xFF706E6C);this.
Bnc(34);this.Bnr(0x11);this.A_v(A.aaL(A.fl.Ak));this.A_u(A.aaL(A.fl.Ak));this.Bna(
0x11);this.BmM(0x4);this.BmZ(7);this.Bm2(5);this.Bm1(1);this.Bm0(3);this.BmV(A.aaL(
A.acr.Aea));this.BmY(A.aaL(A.acr.Aea));this.BmX(A.aaL(A.acr.Aea));this.BmW(A.aaL(
A.acr.Aea));this.BmR(6);this.BmU(4);this.BmT(0);this.BmS(2);this.BmN(A.aaL(A.acr.
Aea));this.BmQ(A.aaL(A.acr.Aea));this.BmP(A.aaL(A.acr.Aea));this.BmO(A.aaL(A.acr.
Aea));this.AGb(Ce);},_ReInit:function(){this.A_v(A.aaL(A.fl.Ak));this.A_u(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au1._this))B._ReInit(),C.
Au1._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ach[0]._this)&&(B._cycle!=D
))B._Done(C.Ach[0]._this=null);if((B=C.ARI[0]._this)&&(B._cycle!=D))B._Done(C.ARI[
0]._this=null);if((B=C.Au1._this)&&(B._cycle!=D))B._Done(C.Au1._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */