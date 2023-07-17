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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.eV)throw new Error("The unit file 'Fonts.js' included twice!");index.
eV=(function(){var A=index;var C={};

C.Az={_class:function(){return A.abj.Cp;},0:{Data:function(){return A.abI;},Cache:[
],_this:null}};C.Au={_class:function(){return A.abj.Cp;},0:{Data:function(){return A.
abH;},Cache:[],_this:null}};C.Gk={_class:function(){return A.abj.Cp;},0:{Data:function(
){return A.abG;},Cache:[],_this:null}};C.Ach={_class:function(){return A.abj.Cp;
},0:{Data:function(){return A.abM;},Cache:[],_this:null}};C.LO={_class:function(
){return A.abj.Cp;},0:{Data:function(){return A.abJ;},Cache:[],_this:null}};C.Cr={
_class:function(){return A.abj.Cp;},0:{Data:function(){return A.abN;},Cache:[],_this:
null}};C.AKh={_class:function(){return A.abj.Cp;},0:{Data:function(){return A.abK;
},Cache:[],_this:null}};C.K7={_class:function(){return A.abj.Cp;},0:{Data:function(
){return A.abF;},Cache:[],_this:null}};C.OK={_class:function(){return A.abj.Cp;}
,0:{Data:function(){return A.abE;},Cache:[],_this:null}};C.AKi={_class:function(
){return A.abj.Cp;},0:{Data:function(){return A.abL;},Cache:[],_this:null}};
C._Init=function(){};C._ReInit=function(){};C.Dq=function(D){var B;if((B=C.Az[0].
_this)&&(B._cycle!=D))B._Done(C.Az[0]._this=null);if((B=C.Au[0]._this)&&(B._cycle
!=D))B._Done(C.Au[0]._this=null);if((B=C.Gk[0]._this)&&(B._cycle!=D))B._Done(C.Gk[
0]._this=null);if((B=C.Ach[0]._this)&&(B._cycle!=D))B._Done(C.Ach[0]._this=null);
if((B=C.LO[0]._this)&&(B._cycle!=D))B._Done(C.LO[0]._this=null);if((B=C.Cr[0]._this
)&&(B._cycle!=D))B._Done(C.Cr[0]._this=null);if((B=C.AKh[0]._this)&&(B._cycle!=D
))B._Done(C.AKh[0]._this=null);if((B=C.K7[0]._this)&&(B._cycle!=D))B._Done(C.K7[
0]._this=null);if((B=C.OK[0]._this)&&(B._cycle!=D))B._Done(C.OK[0]._this=null);if((
B=C.AKi[0]._this)&&(B._cycle!=D))B._Done(C.AKi[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */