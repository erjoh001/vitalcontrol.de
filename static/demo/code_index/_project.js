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

var EmWiCompr_13_02;var index;if(!EmWiCompr_13_02)throw new Error("The Embedded Wizard runtime environment file 'emwi_compr_13_02.js' isn't yet loaded!"
);if(index)throw new Error("The application file '_project.js' included twice!");
index=(function(){var A={__proto__:EmWiCompr_13_02};
A.Bosnian=1;A.Bulgarian=2;A.Chinese_TWN=3;A.Czech=4;A.Default=0;A.Dutch=5;A.Estonian=
6;A.Finnish=7;A.French=8;A.German=9;A.Greek=10;A.Italian=11;A.Japanese=12;A.Norwegian=
13;A.Polish=14;A.Russian=15;A.Spanish=16;A.Turkish=17;A.Ukrainian=18;
A.abC=[1000,740];A.rs=function(){return A.kR.AML;};A.zU="URBAN VitalControl - Demo App";
A.o7=0;A.wA=0;A.j0=[];A._Init=function(){A.Core._Init();A.acl._Init();A.Graphics.
_Init();A.aci._Init();A.acg._Init();A.kR._Init();A.acf._Init();A.ach._Init();A.jb.
_Init();A.fl._Init();A.acx._Init();A.acn._Init();A.acv._Init();A.Device._Init();
A.acs._Init();A.aco._Init();A.acw._Init();A.acq._Init();A.acy._Init();A.acj._Init(
);A.acA._Init();A.acB._Init();A.acr._Init();A.acm._Init();A.acz._Init();A.acu._Init(
);A.ack._Init();A.acp._Init();A.act._Init();this.__proto__._Init.apply(this,arguments
);};A._ReInit=function(){A.Core._ReInit();A.acl._ReInit();A.Graphics._ReInit();A.
aci._ReInit();A.acg._ReInit();A.kR._ReInit();A.acf._ReInit();A.ach._ReInit();A.jb.
_ReInit();A.fl._ReInit();A.acx._ReInit();A.acn._ReInit();A.acv._ReInit();A.Device.
_ReInit();A.acs._ReInit();A.aco._ReInit();A.acw._ReInit();A.acq._ReInit();A.acy.
_ReInit();A.acj._ReInit();A.acA._ReInit();A.acB._ReInit();A.acr._ReInit();A.acm.
_ReInit();A.acz._ReInit();A.acu._ReInit();A.ack._ReInit();A.acp._ReInit();A.act.
_ReInit();};A.abA=function(D){A.Core.DH(D);A.acl.DH(D);A.Graphics.DH(D);A.aci.DH(
D);A.acg.DH(D);A.kR.DH(D);A.acf.DH(D);A.ach.DH(D);A.jb.DH(D);A.fl.DH(D);A.acx.DH(
D);A.acn.DH(D);A.acv.DH(D);A.Device.DH(D);A.acs.DH(D);A.aco.DH(D);A.acw.DH(D);A.
acq.DH(D);A.acy.DH(D);A.acj.DH(D);A.acA.DH(D);A.acB.DH(D);A.acr.DH(D);A.acm.DH(D
);A.acz.DH(D);A.acu.DH(D);A.ack.DH(D);A.acp.DH(D);A.act.DH(D);};return A;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */