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
null}};C.ARG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/SimulationLightCone.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[120,120],FrameDelay:0,_this:
null}};C.Au2={_Init:function(){A.acr.AVu._Init.call(this,0);this.Bnw(0xFF706E6C);
this.Bnz(0xFF706E6C);this.Bny(0xFFABABA8);this.Bnx(0xFF706E6C);this.Bns(0xFF706E6C
);this.Bnv(0xFF706E6C);this.Bnu(0xFFABABA8);this.Bnt(0xFF706E6C);this.Bnr(34);this.
Bnf(0xFF706E6C);this.Bni(0xFF706E6C);this.Bnh(0xAAABABA8);this.Bng(0xFF706E6C);this.
Bnb(0xFF706E6C);this.Bne(0xFF706E6C);this.Bnd(0xAAABABA8);this.Bnc(0xFF706E6C);this.
Bna(34);this.Bnp(0x11);this.A_t(A.aaL(A.fl.Ak));this.A_s(A.aaL(A.fl.Ak));this.Bm_(
0x11);this.BmK(0x4);this.BmX(7);this.Bm0(5);this.BmZ(1);this.BmY(3);this.BmT(A.aaL(
A.acr.Aea));this.BmW(A.aaL(A.acr.Aea));this.BmV(A.aaL(A.acr.Aea));this.BmU(A.aaL(
A.acr.Aea));this.BmP(6);this.BmS(4);this.BmR(0);this.BmQ(2);this.BmL(A.aaL(A.acr.
Aea));this.BmO(A.aaL(A.acr.Aea));this.BmN(A.aaL(A.acr.Aea));this.BmM(A.aaL(A.acr.
Aea));this.AGa(Ce);},_ReInit:function(){this.A_t(A.aaL(A.fl.Ak));this.A_s(A.aaL(
A.fl.Ak));},_variants:function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Au2._this))B._ReInit(),C.
Au2._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Ach[0]._this)&&(B._cycle!=D
))B._Done(C.Ach[0]._this=null);if((B=C.ARG[0]._this)&&(B._cycle!=D))B._Done(C.ARG[
0]._this=null);if((B=C.Au2._this)&&(B._cycle!=D))B._Done(C.Au2._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */