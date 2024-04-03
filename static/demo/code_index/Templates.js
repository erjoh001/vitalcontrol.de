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
);if(index.acn)throw new Error("The unit file 'Templates.js' included twice!");index.
acn=(function(){var A=index;var C={};

C.Ahw={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.Ahw;}
,_className:"Templates::PushButton"};C.Jd={_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.Jd;},_className:"Templates::TextEditor"};C.Menu={_Init:
function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.Menu;},_className:
"Templates::Menu"};C.Ahu={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.Ahu;},_className:"Templates::PickerControl"};
C._Init=function(){C.Ahw.__proto__=A.Core.P;C.Jd.__proto__=A.Core.P;C.Menu.__proto__=
A.Core.P;C.Ahu.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */