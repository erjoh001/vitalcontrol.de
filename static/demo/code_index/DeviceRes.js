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
);if(index.acj)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
acj=(function(){var A=index;var C={};
var Cc="Unhandled enum BodyTemperature: ";var BF="Unhandled BodyTemperatureValue: ";
var EY="ERROR: Unhandled temperature unit: ";var Hi="ERROR: unhandled assessment.";
var I7="%H:%M";var Ik="Invalid month";var O0="%";var PZ="Invalid format code";var
P0=" %Y";var CO="ERROR: Unhandled mass unit: ";
C.A_9={ByM:function(Eh,Rl){if((Rl>=A._GetAutoObject(A.Device.Helper).Au1(Eh))||(Rl<=
A._GetAutoObject(A.Device.Device).ZI))return 1;else return 0;},ByL:function(Eh,Rl
){var Nk=A._GetAutoObject(A.Device.Converter).Aja(Rl,Eh);switch(Nk){case 3:return A.
aaR(A.acf.Au7);case 2:return A.aaR(A.acf.Biy);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bi6);default:throw new Error(Cc+Nk.toFixed());}},ByD:function(
Eh,Rl){var Nk=A._GetAutoObject(A.Device.Converter).Aja(Rl,Eh);switch(Nk){case 3:
return A.jb.F$;case 2:return A.jb.H2;case 1:return A.jb.EV;case 0:return A.jb.Afd;
default:throw new Error(BF+Nk.toFixed());}},Alo:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGo);case 1:return A.
aaR(A.acf.BoT);default:A.ab5("%s%s",EY,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},ByE:function(Eh,Rl){var Nk=A._GetAutoObject(A.Device.Converter
).Aja(Rl,Eh);switch(Nk){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nk.toFixed());}},ByG:function(Eh,Rl){var Nk=A._GetAutoObject(
A.Device.Converter).Aja(Rl,Eh);switch(Nk){case 3:return A.jb.F$;case 2:return A.
jb.Text;case 1:return A.jb.EV;case 0:return A.jb.Afd;default:throw new Error(BF+
Nk.toFixed());}},ByH:function(Eh,Rl){var Nk=A._GetAutoObject(A.Device.Converter).
Aja(Rl,Eh);switch(Nk){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nk.toFixed());}},ByF:function(Eh,Rl
){var Nk=A._GetAutoObject(A.Device.Converter).Aja(Rl,Eh);switch(Nk){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.F$;default:throw new Error(Cc+Nk.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A_9;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A_9._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4A={BcE:function(Nh){var B4=
A.jb.ZF;switch(Nh){case 3:B4=A.jb.EV;break;case 2:B4=A.jb.H2;break;case 1:B4=A.jb.
F$;break;case 4:B4=A.jb.Afd;break;case 0:case 5:B4=A.jb.ZF;break;default:A.ab5("%s"
,Hi);}return B4;},Qg:function(Nh){var B4=A.jb.ZF;switch(Nh){case 3:B4=A.jb.EV;break;
case 2:B4=A.jb.H2;break;case 1:B4=A.jb.F$;break;case 0:case 5:B4=A.jb.CI;break;case
4:B4=A.jb.Afd;break;default:A.ab5("%s%e",Hi,Nh);}return B4;},Xi:function(Nh){var
B4=A.jb.Text;switch(Nh){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hi);}return B4;},_Init:function(aArg){this.
__proto__=C.A4A;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4A._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5r={MonthToString:null,BhR:function(LZ){if(!LZ)return A.
jV;else{var Av=A._NewObject(A.Core.Bw,0);Av.Initialize(LZ);return Av.Format(A.aaR(
A.acf.BhT));}},AjA:function(LZ){if(!LZ)return A.jV;else{var Av=A._NewObject(A.Core.
Bw,0);Av.Initialize(LZ);return Av.Format(A.aaR(A.acf.AgG));}},ACm:function(LZ){if(
!LZ)return A.jV;else{var Av=A._NewObject(A.Core.Bw,0);Av.Initialize(LZ);return Av.
Format(A.aaR(A.acf.BhS));}},A6b:function(LZ){if(!LZ)return A.jV;else{var Av=A._NewObject(
A.Core.Bw,0);Av.Initialize(LZ);return Av.Format(I7);}},ACn:function(A0B,A0k,Im){
var B;var Dt=A._NewObject(A.Core.Bw,0);var Qd=A._NewObject(A.Core.Bw,0);var BbW=
A0k<A0B;if(BbW){Dt.Initialize(A0k);Qd.Initialize(A0B);}else{Dt.Initialize(A0B);Qd.
Initialize(A0k);}var AA4=0;var Ape=0;var Qb=0;Qb+=(Qd.GD-Dt.GD);if(Qb<0){switch(
Qd.Hb){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qb+=31;break;case 5:case
7:case 10:case 12:Qb+=30;break;case 3:if(this.BiM(Qd.Year))Qb+=29;else Qb+=28;break;
default:A.ab5("%s%i",Ik,Qd.Hb);}Ape--;}Ape+=(Qd.Hb-Dt.Hb);if(Ape<0){Ape+=12;AA4--;
}AA4+=(Qd.Year-Dt.Year);if(BbW){AA4=-AA4;Ape=-Ape;Qb=-Qb;}var index=Im.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bdg=Im.charCodeAt(index+1)||0;Im=A.ab1(
Im,index,2);switch(Bdg){case 0x64:Im=A.abU(Im,Qb.toFixed(),index);break;case 0x6D:
Im=A.abU(Im,Ape.toFixed(),index);break;case 0x79:case 0x59:Im=A.abU(Im,AA4.toFixed(
),index);break;case 0x25:Im=A.abU(Im,O0,index);break;default:A.ab5("%s%s",PZ,O0+
String.fromCharCode(Bdg));}index=Im.indexOf(String.fromCharCode(0x25),index+1);}
return Im;},BiM:function(AcO){if(!(AcO%4)&&!!(AcO%100))return true;if(!(AcO%400)
)return true;return false;},BhN:function(LZ){if(!LZ)return A.jV;else{var Av=A._NewObject(
A.Core.Bw,0);Av.Initialize(LZ);return this.MonthToString.BS(Av.Hb)+Av.Format(P0);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5r;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KG={_Init:function(){C.A5r._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7e={AfN:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AzD);case 1:return A.aaR(A.acf.A67);default:A.ab5("%s%s",CO,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},ByC:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALn
);case 1:return A.aaL(A.ach.ALm);default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Azk:function(Aox,Eh){if(Aox<A._GetAutoObject(
A.Device.Helper).ACB(Eh))return A.jb.F$;else if(Aox<A._GetAutoObject(A.Device.Helper
).ACA(Eh))return A.jb.H2;else return A.jb.EV;},Azm:function(Aox,Eh){if(Aox<A._GetAutoObject(
A.Device.Helper).ACB(Eh))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ACA(
Eh);return A.jb.Text;}},Aaf:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.Bin);case 1:return A.aaR(A.acf.Bnd);default:
A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},Azl:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BcP:function(AsY,Gs){var ApU;if(((AsY<10000)||((AsY===10000
)&&(Gs===5)))&&(A._GetAutoObject(A.Device.Device).OJ===2))ApU=10;else if(((AsY<50000
)||((AsY===50000)&&(Gs===5)))&&!!A._GetAutoObject(A.Device.Device).OJ)ApU=100;else
if(((AsY<100000)||((AsY===100000)&&(Gs===5)))&&!!A._GetAutoObject(A.Device.Device
).OJ)ApU=500;else ApU=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:ApU=(ApU/2)|0;break;default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return ApU;},BcJ:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.Avl);case 1:return A.aaL(A.
ach.Avm);default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alc:function(Bbi,BwX,Bv7){if(!Bbi)return 0;return Math.round((
Bv7-BwX)/Bbi)|0;},_Init:function(aArg){this.__proto__=C.A7e;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DS={_Init:function(){C.A7e._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.Bog={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Boh={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Boi={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KG._this))B._ReInit(),C.KG._ReInit.call(B);if((B=C.DS._this
))B._ReInit(),C.DS._ReInit.call(B);};C.DE=function(D){var B;if((B=C.Temperature.
_this)&&(B._cycle!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this
)&&(B._cycle!=D))B._Done(C.Assessment._this=null);if((B=C.KG._this)&&(B._cycle!=
D))B._Done(C.KG._this=null);if((B=C.DS._this)&&(B._cycle!=D))B._Done(C.DS._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */