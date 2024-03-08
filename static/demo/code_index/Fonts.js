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
);if(index.fl)throw new Error("The unit file 'Fonts.js' included twice!");index.
fl=(function(){var A=index;var C={};

C.Ak={_class:function(){return A.aci.B7;},0:{Data:function(){return A.acG;},Cache:[
],_this:null}};C.Af={_class:function(){return A.aci.B7;},0:{Data:function(){return A.
acF;},Cache:[],_this:null}};C.EG={_class:function(){return A.aci.B7;},0:{Data:function(
){return A.acE;},Cache:[],_this:null}};C.Aef={_class:function(){return A.aci.B7;
},0:{Data:function(){return A.acK;},Cache:[],_this:null}};C.Ho={_class:function(
){return A.aci.B7;},0:{Data:function(){return A.acH;},Cache:[],_this:null}};C.Bi={
_class:function(){return A.aci.B7;},0:{Data:function(){return A.acL;},Cache:[],_this:
null}};C.AOm={_class:function(){return A.aci.B7;},0:{Data:function(){return A.acI;
},Cache:[],_this:null}};C.Ih={_class:function(){return A.aci.B7;},0:{Data:function(
){return A.acD;},Cache:[],_this:null}};C.Kh={_class:function(){return A.aci.B7;}
,0:{Data:function(){return A.acC;},Cache:[],_this:null}};C.AOn={_class:function(
){return A.aci.B7;},0:{Data:function(){return A.acJ;},Cache:[],_this:null}};
C._Init=function(){};C._ReInit=function(){};C.DF=function(D){var B;if((B=C.Ak[0].
_this)&&(B._cycle!=D))B._Done(C.Ak[0]._this=null);if((B=C.Af[0]._this)&&(B._cycle
!=D))B._Done(C.Af[0]._this=null);if((B=C.EG[0]._this)&&(B._cycle!=D))B._Done(C.EG[
0]._this=null);if((B=C.Aef[0]._this)&&(B._cycle!=D))B._Done(C.Aef[0]._this=null);
if((B=C.Ho[0]._this)&&(B._cycle!=D))B._Done(C.Ho[0]._this=null);if((B=C.Bi[0]._this
)&&(B._cycle!=D))B._Done(C.Bi[0]._this=null);if((B=C.AOm[0]._this)&&(B._cycle!=D
))B._Done(C.AOm[0]._this=null);if((B=C.Ih[0]._this)&&(B._cycle!=D))B._Done(C.Ih[
0]._this=null);if((B=C.Kh[0]._this)&&(B._cycle!=D))B._Done(C.Kh[0]._this=null);if((
B=C.AOn[0]._this)&&(B._cycle!=D))B._Done(C.AOn[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */