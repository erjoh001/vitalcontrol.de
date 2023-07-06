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

var EmWiCompr_12_05;var index;if(!EmWiCompr_12_05)throw new Error("The Embedded Wizard runtime environment file 'emwi_compr_12_05.js' isn't yet loaded!"
);if(index)throw new Error("The application file '_project.js' included twice!");
index=(function(){var A={__proto__:EmWiCompr_12_05};
A.Bosnian=1;A.Bulgarian=2;A.Chinese_TWN=3;A.Czech=4;A.Default=0;A.Dutch=5;A.Estonian=
6;A.Finnish=7;A.French=8;A.German=9;A.Greek=10;A.Italian=11;A.Japanese=12;A.Norwegian=
13;A.Polish=14;A.Russian=15;A.Spanish=16;A.Turkish=17;A.Ukrainian=18;
A.aaF=[1000,740];A.qJ=function(){return A.kh.AIq;};A.y9="URBAN VitalControl - Demo App";
A.on=0;A.aa6=0;A.ju=[];A._Init=function(){A.Core._Init();A.abm._Init();A.Graphics.
_Init();A.abj._Init();A.abh._Init();A.kh._Init();A.abg._Init();A.abi._Init();A.iF.
_Init();A.eV._Init();A.abz._Init();A.abp._Init();A.abw._Init();A.Device._Init();
A.abt._Init();A.abq._Init();A.abx._Init();A.abA._Init();A.abk._Init();A.aby._Init(
);A.abC._Init();A.abD._Init();A.abr._Init();A.abn._Init();A.abB._Init();A.abv._Init(
);A.abl._Init();A.abo._Init();A.abu._Init();this.__proto__._Init.apply(this,arguments
);};A._ReInit=function(){A.Core._ReInit();A.abm._ReInit();A.Graphics._ReInit();A.
abj._ReInit();A.abh._ReInit();A.kh._ReInit();A.abg._ReInit();A.abi._ReInit();A.iF.
_ReInit();A.eV._ReInit();A.abz._ReInit();A.abp._ReInit();A.abw._ReInit();A.Device.
_ReInit();A.abt._ReInit();A.abq._ReInit();A.abx._ReInit();A.abA._ReInit();A.abk.
_ReInit();A.aby._ReInit();A.abC._ReInit();A.abD._ReInit();A.abr._ReInit();A.abn.
_ReInit();A.abB._ReInit();A.abv._ReInit();A.abl._ReInit();A.abo._ReInit();A.abu.
_ReInit();};A.aaD=function(D){A.Core.Dn(D);A.abm.Dn(D);A.Graphics.Dn(D);A.abj.Dn(
D);A.abh.Dn(D);A.kh.Dn(D);A.abg.Dn(D);A.abi.Dn(D);A.iF.Dn(D);A.eV.Dn(D);A.abz.Dn(
D);A.abp.Dn(D);A.abw.Dn(D);A.Device.Dn(D);A.abt.Dn(D);A.abq.Dn(D);A.abx.Dn(D);A.
abA.Dn(D);A.abk.Dn(D);A.aby.Dn(D);A.abC.Dn(D);A.abD.Dn(D);A.abr.Dn(D);A.abn.Dn(D
);A.abB.Dn(D);A.abv.Dn(D);A.abl.Dn(D);A.abo.Dn(D);A.abu.Dn(D);};return A;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */