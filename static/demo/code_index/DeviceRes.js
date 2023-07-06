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
);if(index.abk)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
abk=(function(){var A=index;var C={};
var B3="Unhandled enum BodyTemperature: ";var BI="Unhandled BodyTemperatureValue: ";
var EG="ERROR: Unhandled temperature unit: ";var Gr="ERROR: unhandled assessment.";
var I4="%H:%M";var Ip="Invalid month";var Oc="%";var Pb="Invalid format code";var
Nm=" %Y";var Cv="ERROR: Unhandled mass unit: ";
C.A44={Br5:function(D3,Qm){if((Qm>=A._GetAutoObject(A.Device.Helper).Ash(D3))||(Qm<=
A._GetAutoObject(A.Device.Device).X4))return 1;else return 0;},Br4:function(D3,Qm
){var MF=A._GetAutoObject(A.Device.Converter).Ag5(Qm,D3);switch(MF){case 3:return A.
z2(A.abg.Asp);case 2:return A.z2(A.abg.Bca);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.BcK);default:throw new Error(B3+MF.toFixed());}},BrW:function(
D3,Qm){var MF=A._GetAutoObject(A.Device.Converter).Ag5(Qm,D3);switch(MF){case 3:
return A.iF.FY;case 2:return A.iF.Hy;case 1:return A.iF.E1;case 0:return A.iF.Ads;
default:throw new Error(BI+MF.toFixed());}},Aju:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.ACW);case 1:return A.
z2(A.abg.Bix);default:A.aa8("%s%s",EG,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jm;},BrX:function(D3,Qm){var MF=A._GetAutoObject(A.Device.Converter
).Ag5(Qm,D3);switch(MF){case 3:return A.iF.Bg;case 2:return A.iF.Text;case 1:return A.
iF.Bg;case 0:return A.iF.Bg;default:throw new Error(B3+MF.toFixed());}},BrZ:function(
D3,Qm){var MF=A._GetAutoObject(A.Device.Converter).Ag5(Qm,D3);switch(MF){case 3:
return A.iF.FY;case 2:return A.iF.Text;case 1:return A.iF.E1;case 0:return A.iF.
Ads;default:throw new Error(BI+MF.toFixed());}},Br0:function(D3,Qm){var MF=A._GetAutoObject(
A.Device.Converter).Ag5(Qm,D3);switch(MF){case 3:return 16711680;case 2:return 16776960;
case 1:return 65280;case 0:return 255;default:throw new Error(B3+MF.toFixed());}
},BrY:function(D3,Qm){var MF=A._GetAutoObject(A.Device.Converter).Ag5(Qm,D3);switch(
MF){case 3:return A.iF.Bg;case 2:return A.iF.FY;case 1:return A.iF.FY;case 0:return A.
iF.FY;default:throw new Error(B3+MF.toFixed());}},_Init:function(aArg){this.__proto__=
C.A44;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A44._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.AZe={A8l:function(MD){var BF=A.iF.AiJ;switch(MD){case 3:BF=A.iF.E1;break;
case 2:BF=A.iF.Hy;break;case 1:BF=A.iF.FY;break;case 0:BF=A.iF.AiJ;break;case 4:
BF=A.iF.Ads;break;case 5:BF=A.iF.AiJ;break;default:A.aa8("%s",Gr);}return BF;},Pp:
function(MD){var BF=A.iF.AiJ;switch(MD){case 3:BF=A.iF.E1;break;case 2:BF=A.iF.Hy;
break;case 1:BF=A.iF.FY;break;case 0:BF=A.iF.CD;break;case 5:BF=A.iF.CD;break;case
4:BF=A.iF.Ads;break;default:A.aa8("%s%e",Gr,MD);}return BF;},VJ:function(MD){var
BF=A.iF.Text;switch(MD){case 3:BF=A.iF.Bg;break;case 2:BF=A.iF.Text;break;case 1:
BF=A.iF.Bg;break;case 0:BF=A.iF.Text;break;case 4:BF=A.iF.Text;break;case 5:BF=A.
iF.Text;break;default:A.aa8("%s",Gr);}return BF;},_Init:function(aArg){this.__proto__=
C.AZe;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.AZe._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.AZZ={MonthToString:null,Bbu:function(Ll){if(!Ll)return A.jm;else{var Ap=
A._NewObject(A.Core.Bp,0);Ap.Initialize(Ll);return Ap.Format(A.z2(A.abg.Bbw));}}
,Aht:function(Ll){if(!Ll)return A.jm;else{var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(
Ll);return Ap.Format(A.z2(A.abg.AeS));}},AKe:function(Ll){if(!Ll)return A.jm;else{
var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(Ll);return Ap.Format(A.z2(A.abg.Bbv
));}},A0G:function(Ll){if(!Ll)return A.jm;else{var Ap=A._NewObject(A.Core.Bp,0);
Ap.Initialize(Ll);return Ap.Format(I4);}},Azd:function(AVv,AVf,HZ){var B;var Dc=
A._NewObject(A.Core.Bp,0);var Pn=A._NewObject(A.Core.Bp,0);var A7C=AVf<AVv;if(A7C
){Dc.Initialize(AVf);Pn.Initialize(AVv);}else{Dc.Initialize(AVv);Pn.Initialize(AVf
);}var Ax2=0;var AmY=0;var Pl=0;Pl+=(Pn.Gz-Dc.Gz);if(Pl<0){switch(Pn.GB){case 1:
case 2:case 4:case 6:case 8:case 9:case 11:Pl+=31;break;case 5:case 7:case 10:case
12:Pl+=30;break;case 3:if(this.Bcn(Pn.Year))Pl+=29;else Pl+=28;break;default:A.aa8(
"%s%i",Ip,Pn.GB);}AmY--;}AmY+=(Pn.GB-Dc.GB);if(AmY<0){AmY+=12;Ax2--;}Ax2+=(Pn.Year-
Dc.Year);if(A7C){Ax2=-Ax2;AmY=-AmY;Pl=-Pl;}var index=HZ.indexOf(String.fromCharCode(
0x25),0);while(index>=0){var A8Y=HZ.charCodeAt(index+1)||0;HZ=A.aa3(HZ,index,2);
switch(A8Y){case 0x64:HZ=A.aaW(HZ,Pl.toFixed(),index);break;case 0x6D:HZ=A.aaW(HZ
,AmY.toFixed(),index);break;case 0x79:case 0x59:HZ=A.aaW(HZ,Ax2.toFixed(),index);
break;case 0x25:HZ=A.aaW(HZ,Oc,index);break;default:A.aa8("%s%s",Pb,Oc+String.fromCharCode(
A8Y));}index=HZ.indexOf(String.fromCharCode(0x25),index+1);}return HZ;},Bcn:function(
AaT){if(!(AaT%4)&&!!(AaT%100))return true;if(!(AaT%400))return true;return false;
},Bbq:function(Ll){if(!Ll)return A.jm;else{var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(
Ll);return this.MonthToString.Ca(Ap.GB)+Ap.Format(Nm);}},_Init:function(aArg){A.
Device.MonthToString._Init.call(this.MonthToString={I:this},0);this.__proto__=C.
AZZ;A.hJ++;},_Done:function(){this.__proto__=null;this.MonthToString._Done();A.hJ--;
},_ReInit:function(){this.MonthToString._ReInit();},_Mark:function(D){var B;if((
B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::DateFormatterClass"
};C.K5={_Init:function(){C.AZZ._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.A1A={Aa$:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.z2(A.abg.AGm);case 1:return A.z2(A.abg.A1q);default:A.aa8("%s%s"
,Cv,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},BrV:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AHF
);case 1:return A.zW(A.abi.AHE);default:A.aa8("%s%s",Cv,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Awr:function(Amj,D3){if(Amj<A._GetAutoObject(
A.Device.Helper).Azo(D3))return A.iF.FY;else if(Amj<A._GetAutoObject(A.Device.Helper
).Azn(D3))return A.iF.Hy;else return A.iF.E1;},Awt:function(Amj,D3){if(Amj<A._GetAutoObject(
A.Device.Helper).Azo(D3))return A.iF.Bg;else{A._GetAutoObject(A.Device.Helper).Azn(
D3);return A.iF.Text;}},Yx:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.z2(A.abg.Bb2);case 1:return A.z2(A.abg.Bg2);default:A.aa8("%s%s"
,Cv,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Aws:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",Cv,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A8w:function(AEZ,GJ){var Art;if((AEZ<50000)||((AEZ===50000)&&(GJ===5)))Art=100;
else if((AEZ<100000)||((AEZ===100000)&&(GJ===5)))Art=500;else Art=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:Art=(Art/2)|0;break;
default:A.aa8("%s%s",Cv,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return Art;
},A8q:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.AsF);case 1:return A.zW(A.abi.AsG);default:A.aa8("%s%s",Cv,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},Ajg:function(A63,Bqh,Bpq){if(
!A63)return 0;return Math.round((Bpq-Bqh)/A63)|0;},_Init:function(aArg){this.__proto__=
C.A1A;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.Dv={_Init:function(
){C.A1A._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Bh3={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bh4={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bh5={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.K5._this))B._ReInit();if((B=C.Dv.
_this))B._ReInit();};C.Dn=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.K5._this)&&(B._cycle!=D))B._Done(C.K5._this=
null);if((B=C.Dv._this)&&(B._cycle!=D))B._Done(C.Dv._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */