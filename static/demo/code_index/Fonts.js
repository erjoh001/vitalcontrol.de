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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.fl)throw new Error("The unit file 'Fonts.js' included twice!");index.
fl=(function(){var A=index;var C={};

C.Ak={_class:function(){return A.aci.B3;},0:{Data:function(){return A.acG;},Cache:[
],_this:null}};C.Ah={_class:function(){return A.aci.B3;},0:{Data:function(){return A.
acF;},Cache:[],_this:null}};C.Ey={_class:function(){return A.aci.B3;},0:{Data:function(
){return A.acE;},Cache:[],_this:null}};C.AdJ={_class:function(){return A.aci.B3;
},0:{Data:function(){return A.acK;},Cache:[],_this:null}};C.Hh={_class:function(
){return A.aci.B3;},0:{Data:function(){return A.acH;},Cache:[],_this:null}};C.By={
_class:function(){return A.aci.B3;},0:{Data:function(){return A.acL;},Cache:[],_this:
null}};C.AMB={_class:function(){return A.aci.B3;},0:{Data:function(){return A.acI;
},Cache:[],_this:null}};C.H$={_class:function(){return A.aci.B3;},0:{Data:function(
){return A.acD;},Cache:[],_this:null}};C.J6={_class:function(){return A.aci.B3;}
,0:{Data:function(){return A.acC;},Cache:[],_this:null}};C.AMC={_class:function(
){return A.aci.B3;},0:{Data:function(){return A.acJ;},Cache:[],_this:null}};
C._Init=function(){};C._ReInit=function(){};C.Dz=function(D){var B;if((B=C.Ak[0].
_this)&&(B._cycle!=D))B._Done(C.Ak[0]._this=null);if((B=C.Ah[0]._this)&&(B._cycle
!=D))B._Done(C.Ah[0]._this=null);if((B=C.Ey[0]._this)&&(B._cycle!=D))B._Done(C.Ey[
0]._this=null);if((B=C.AdJ[0]._this)&&(B._cycle!=D))B._Done(C.AdJ[0]._this=null);
if((B=C.Hh[0]._this)&&(B._cycle!=D))B._Done(C.Hh[0]._this=null);if((B=C.By[0]._this
)&&(B._cycle!=D))B._Done(C.By[0]._this=null);if((B=C.AMB[0]._this)&&(B._cycle!=D
))B._Done(C.AMB[0]._this=null);if((B=C.H$[0]._this)&&(B._cycle!=D))B._Done(C.H$[
0]._this=null);if((B=C.J6[0]._this)&&(B._cycle!=D))B._Done(C.J6[0]._this=null);if((
B=C.AMC[0]._this)&&(B._cycle!=D))B._Done(C.AMC[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */