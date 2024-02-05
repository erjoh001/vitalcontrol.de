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
);if(index.acq)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acq=(function(){var A=index;var C={};
var B9=[0,0,200,50];var BC=[0,0,150,50];var EU=[0,50];var Hd=[150,50];var I7=[150
,0];var II=[0,0];
C.Adr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ABS={Awr:null,Awq:null,ASB:500,AFl:-1,AS4:0xFFFFFFFF,AFk:-1,Wq:A.wf,Bkn:
function(E){if(this.ASB===E)return;this.ASB=E;A.pe([this,this.Eu],this);},A7Z:function(
E){if(this.AFl===E)return;this.AFl=E;A.pe([this,this.Eu],this);},A7Y:function(E){
if(this.Awr===E)return;this.Awr=E;A.pe([this,this.Eu],this);},A7X:function(E){if(
this.AS4===E)return;this.AS4=E;A.pe([this,this.Eu],this);},A7W:function(E){if(this.
AFk===E)return;this.AFk=E;A.pe([this,this.Eu],this);},A7V:function(E){if(this.Awq===
E)return;this.Awq=E;A.pe([this,this.Eu],this);},AEm:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Wq,E))return;this.Wq=E;A.pe([this,this.Eu
],this);},_Init:function(aArg){C.Anv._Init.call(this,aArg);this.__proto__=C.ABS;
},_Mark:function(D){var B;C.Anv._Mark.call(this,D);if((B=this.Awr)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Awq)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.ASX={AuR:null,AuQ:null,At_:null,Aub:null
,Aua:null,At$:null,At6:null,At9:null,At8:null,At7:null,APh:0xFF000000,APk:0xFF000000
,APj:0xFF000000,APi:0xFF000000,APd:0xFF000000,APg:0xFF000000,APf:0xFF000000,APe:
0xFF000000,APc:0,A4M:0xFFFFFFFF,A4P:0xFFFFFFFF,A4O:0xFFFFFFFF,A4N:0xFFFFFFFF,A4I:
0xFFFFFFFF,A4L:0xFFFFFFFF,A4K:0xFFFFFFFF,A4J:0xFFFFFFFF,A4H:0,APb:0x12,A4G:0x12,
AMn:0x3F,AMs:-1,AMv:-1,AMu:-1,AMt:-1,AMo:-1,AMr:-1,AMq:-1,AMp:-1,Wq:A.wf,BjT:function(
E){if(this.APh===E)return;this.APh=E;A.pe([this,this.Eu],this);},BjW:function(E){
if(this.APk===E)return;this.APk=E;A.pe([this,this.Eu],this);},BjV:function(E){if(
this.APj===E)return;this.APj=E;A.pe([this,this.Eu],this);},BjU:function(E){if(this.
APi===E)return;this.APi=E;A.pe([this,this.Eu],this);},BjP:function(E){if(this.APd===
E)return;this.APd=E;A.pe([this,this.Eu],this);},BjS:function(E){if(this.APg===E)
return;this.APg=E;A.pe([this,this.Eu],this);},BjR:function(E){if(this.APf===E)return;
this.APf=E;A.pe([this,this.Eu],this);},BjQ:function(E){if(this.APe===E)return;this.
APe=E;A.pe([this,this.Eu],this);},BjO:function(E){if(this.APc===E)return;this.APc=
E;A.pe([this,this.Eu],this);},BjE:function(E){if(this.A4M===E)return;this.A4M=E;
A.pe([this,this.Eu],this);},BjH:function(E){if(this.A4P===E)return;this.A4P=E;A.
pe([this,this.Eu],this);},BjG:function(E){if(this.A4O===E)return;this.A4O=E;A.pe([
this,this.Eu],this);},BjF:function(E){if(this.A4N===E)return;this.A4N=E;A.pe([this
,this.Eu],this);},BjA:function(E){if(this.A4I===E)return;this.A4I=E;A.pe([this,this.
Eu],this);},BjD:function(E){if(this.A4L===E)return;this.A4L=E;A.pe([this,this.Eu
],this);},BjC:function(E){if(this.A4K===E)return;this.A4K=E;A.pe([this,this.Eu],
this);},BjB:function(E){if(this.A4J===E)return;this.A4J=E;A.pe([this,this.Eu],this
);},Bjz:function(E){if(this.A4H===E)return;this.A4H=E;A.pe([this,this.Eu],this);
},BjM:function(E){if(this.APb===E)return;this.APb=E;A.pe([this,this.Eu],this);},
A7v:function(E){if(this.AuR===E)return;this.AuR=E;A.pe([this,this.Eu],this);},A7u:
function(E){if(this.AuQ===E)return;this.AuQ=E;A.pe([this,this.Eu],this);},Bjx:function(
E){if(this.A4G===E)return;this.A4G=E;A.pe([this,this.Eu],this);},Bi9:function(E){
if(this.AMn===E)return;this.AMn=E;A.pe([this,this.Eu],this);},Bjk:function(E){if(
this.AMs===E)return;this.AMs=E;A.pe([this,this.Eu],this);},Bjn:function(E){if(this.
AMv===E)return;this.AMv=E;A.pe([this,this.Eu],this);},Bjm:function(E){if(this.AMu===
E)return;this.AMu=E;A.pe([this,this.Eu],this);},Bjl:function(E){if(this.AMt===E)
return;this.AMt=E;A.pe([this,this.Eu],this);},Bjg:function(E){if(this.At_===E)return;
this.At_=E;A.pe([this,this.Eu],this);},Bjj:function(E){if(this.Aub===E)return;this.
Aub=E;A.pe([this,this.Eu],this);},Bji:function(E){if(this.Aua===E)return;this.Aua=
E;A.pe([this,this.Eu],this);},Bjh:function(E){if(this.At$===E)return;this.At$=E;
A.pe([this,this.Eu],this);},Bjc:function(E){if(this.AMo===E)return;this.AMo=E;A.
pe([this,this.Eu],this);},Bjf:function(E){if(this.AMr===E)return;this.AMr=E;A.pe([
this,this.Eu],this);},Bje:function(E){if(this.AMq===E)return;this.AMq=E;A.pe([this
,this.Eu],this);},Bjd:function(E){if(this.AMp===E)return;this.AMp=E;A.pe([this,this.
Eu],this);},Bi_:function(E){if(this.At6===E)return;this.At6=E;A.pe([this,this.Eu
],this);},Bjb:function(E){if(this.At9===E)return;this.At9=E;A.pe([this,this.Eu],
this);},Bja:function(E){if(this.At8===E)return;this.At8=E;A.pe([this,this.Eu],this
);},Bi$:function(E){if(this.At7===E)return;this.At7=E;A.pe([this,this.Eu],this);
},AEm:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Wq,E))
return;this.Wq=E;A.pe([this,this.Eu],this);},_Init:function(aArg){C.Anv._Init.call(
this,aArg);this.__proto__=C.ASX;},_Mark:function(D){var B;C.Anv._Mark.call(this,
D);if((B=this.AuR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aua)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.At$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
At6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At7)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Anv={
Eu:function(H){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Anv;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ABR={Lx:null,Lw:null,Appearance:null
,MS:null,AhF:0,FO:100,F_:0,AK:50,Bc$:true,G:function(E){var B;if(!!this.Appearance
){var Ax5=[E[2]-E[0],E[3]-E[1]];var N8=Ax5;if(N8[0]<this.Appearance.Wq[0])N8=[this.
Appearance.Wq[0],N8[1]];if(N8[1]<this.Appearance.Wq[1])N8=[N8[0],this.Appearance.
Wq[1]];var GY=A.abe(N8,Ax5);if(!!GY[0]){var HK=((this.Ps&0x4)===0x4);var HL=((this.
Ps&0x8)===0x8);if(HK&&!HL)E=A.abN(E,E[2]+GY[0]);else if(!HK&&HL)E=[].concat(E[0]-
GY[0],E.slice(1,4));else{E=[].concat(E[0]-((GY[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+N8[0]);}}if(!!GY[1]){var HM=((this.Ps&0x10)===0x10);var HJ=((this.Ps&0x20)===
0x20);if(HM&&!HJ)E=[].concat(E.slice(0,3),E[3]+GY[1]);else if(!HM&&HJ)E=A.abP(E,
E[1]-GY[1]);else{E=A.abP(E,E[1]-((GY[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+N8[
1]);}}}A.Core.O.G.call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);
var Bbj=!!this.Appearance&&!!this.Appearance.Awq;var Bbk=!!this.Appearance&&!!this.
Appearance.Awr;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Bbj&&!!!this.Lw){this.
Lw=A._NewObject(A.acg.NA,0);this.J(this.Lw,0);}else if(!Bbj&&!!this.Lw){this.HG(
this.Lw);this.Lw=null;}if(Bbk&&!!!this.Lx){this.Lx=A._NewObject(A.acg.NA,0);this.
J(this.Lx,0);}else if(!Bbk&&!!this.Lx){this.HG(this.Lx);this.Lx=null;}if(!!this.
Lw){this.Lw.Ax(this.Appearance.Awq);this.Lw.L(this.Appearance.AS4);this.Lw.A7h(0x1B
);this.Lw.Aq3(54);if(this.Appearance.AFk<0){this.Lw.YO(true);this.Lw.Cr(0);}else{
this.Lw.YO(false);this.Lw.Cr(this.Appearance.AFk);}}if(!!this.Lx){this.Lx.Ax(this.
Appearance.Awr);this.Lx.L(0xFFFFFFFF);this.Lx.A7h(0x1E);this.Lx.Aq3(35);if(this.
Appearance.AFl<0){this.Lx.YO(true);this.Lx.Cr(0);}else{this.Lx.YO(false);this.Lx.
Cr(this.Appearance.AFl);}}var pos=((AE[2]-AE[0])*this.AhF)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.Lw&&!!this.Lw.Al){var s=this.Lw.Al.FrameSize;
var x2=AE[2]-AE[0];var Ee=pos;if(Ee>x2)Ee=x2;this.Lw.G([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ee,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.Lw.A7x([x2-((s[0]
/3)|0),this.Lw.AmE[1]]);this.Lw.Y(true);}if(!!this.Lx&&!!this.Lx.Al){var s=this.
Lx.Al.FrameSize;var x2=AE[2]-AE[0];var Ee=pos;if(Ee<0)Ee=0;this.Lx.G([Ee,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
Lx.A7x([x2-((s[0]/3)|0),this.Lx.AmE[1]]);this.Lx.Y(true);}},AIV:function(H){var AsV=
this.AhF;var AJm=0;if(!!this.Appearance)AJm=this.Appearance.ASB;if(this.Bc$&&(this.
FO!==this.F_)){this.AhF=-this.F_/(this.FO-this.F_);AsV=this.AhF;this.Bc$=false;}
if(this.FO!==this.F_)AsV=(this.TN()-this.F_)/(this.FO-this.F_);if(AsV===this.AhF
)return;this.MS.Ar(false);if(AJm<=0){this.AhF=AsV;this.An();return;}var AI2=AsV-
this.AhF;if(AI2<0)AI2=-AI2;this.MS.V7(14);this.MS.Ct=this.AhF;this.MS.B1=AsV;this.
MS.Fy((10+((AJm/2)|0))+((((AJm*AI2)|0)/2)|0));this.MS.Ar(true);},BwD:function(H){
},BwG:function(H){this.AhF=this.MS.A4;this.An();},AoV:function(H){A.pe([this,this.
AIV],this);if(!!this.Appearance)this.G(this.M);this.An();},Fd:function(E){if(this.
FO===E)return;this.FO=E;A.pe([this,this.AIV],this);},GC:function(E){if(this.F_===
E)return;this.F_=E;A.pe([this,this.AIV],this);},TN:function(){var E=this.AK;if(this.
F_>this.FO){if(E<this.FO)E=this.FO;if(E>this.F_)E=this.F_;}else{if(E<this.F_)E=this.
F_;if(E>this.FO)E=this.FO;}return E;},Bx:function(E){if(this.AK===E)return;this.
AK=E;A.pe([this,this.AIV],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.AoV],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.AoV],E,0);A.pe([this,this.AoV],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acl.MS._Init.call(this.MS={I:this},0);this.__proto__=
C.ABR;this.G(B9);this.MS.V7(14);this.MS.ID(1);this.MS.Sa=[this,this.BwD];this.MS.
Agz=[this,this.BwG];},_Done:function(){this.__proto__=A.Core.O;this.MS._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.MS.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Lx)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.Ua={Qd:null
,UG:null,Appearance:null,R:null,Bk:null,De:null,CO:null,ACp:A.jV,ACo:A.jV,A02:0,
Bxu:0,Va:false,G:function(E){var B;if(!!this.Appearance){var Ax5=[E[2]-E[0],E[3]-
E[1]];var N8=Ax5;if(N8[0]<this.Appearance.Wq[0])N8=[this.Appearance.Wq[0],N8[1]];
if(N8[1]<this.Appearance.Wq[1])N8=[N8[0],this.Appearance.Wq[1]];var GY=A.abe(N8,
Ax5);if(!!GY[0]){var HK=((this.Ps&0x4)===0x4);var HL=((this.Ps&0x8)===0x8);if(HK&&
!HL)E=A.abN(E,E[2]+GY[0]);else if(!HK&&HL)E=[].concat(E[0]-GY[0],E.slice(1,4));else{
E=[].concat(E[0]-((GY[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+N8[0]);}}if(!!GY[1]){
var HM=((this.Ps&0x10)===0x10);var HJ=((this.Ps&0x20)===0x20);if(HM&&!HJ)E=[].concat(
E.slice(0,3),E[3]+GY[1]);else if(!HM&&HJ)E=A.abP(E,E[1]-GY[1]);else{E=A.abP(E,E[
1]-((GY[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+N8[1]);}}}A.Core.O.G.call(this,E
);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Bbi=!!this.Appearance&&(((((((
!!this.Appearance.At7||!!this.Appearance.At8)||!!this.Appearance.At9)||!!this.Appearance.
At6)||!!this.Appearance.At$)||!!this.Appearance.Aua)||!!this.Appearance.Aub)||!!
this.Appearance.At_);var Bbl=!!this.Appearance&&((!!this.ACo&&!!this.Appearance.
AuQ)||(!!this.ACp&&!!this.Appearance.AuR));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Afj;if(Bbi&&!!!this.UG){this.UG=A._NewObject(A.acg.NA,0);this.J(this.UG,
0);}else if(!Bbi&&!!this.UG){this.HG(this.UG);this.UG=null;}if(Bbl&&!!!this.Qd){
this.Qd=A._NewObject(A.acg.Text,0);this.J(this.Qd,0);this.Qd.Bi2(true);}else if(
!Bbl&&!!this.Qd){this.HG(this.Qd);this.Qd=null;}if(!((Ae&0x10)===0x10))Afj=0x44;
else if(((this.CO.Down&&this.CO.X8)||this.De.Down)||this.Bk.Bw)Afj=0x41;else if(((
Ae&0x40)===0x40))Afj=0x46;else Afj=0x45;if(!this.Va)Afj=String.fromCharCode(Afj).
toLowerCase().charCodeAt(0)||0;this.Bxu=Afj;if(!!this.UG){var bitmap;var ZP;var EK=
this.Appearance.AMn;var Aw=[AE[0],AE[1],AE[2],AE[3]];switch(Afj){case 0x44:{bitmap=
this.Appearance.Aua;ZP=this.Appearance.AMu;}break;case 0x41:{bitmap=this.Appearance.
At_;ZP=this.Appearance.AMs;}break;case 0x46:{bitmap=this.Appearance.Aub;ZP=this.
Appearance.AMv;}break;case 0x45:{bitmap=this.Appearance.At$;ZP=this.Appearance.AMt;
}break;case 0x64:{bitmap=this.Appearance.At8;ZP=this.Appearance.AMq;}break;case 0x61:{
bitmap=this.Appearance.At6;ZP=this.Appearance.AMo;}break;case 0x66:{bitmap=this.
Appearance.At9;ZP=this.Appearance.AMr;}break;default:{bitmap=this.Appearance.At7;
ZP=this.Appearance.AMp;}}this.UG.YO(ZP<0);this.UG.L(0xFFFFFFFF);if(ZP<0)ZP=0;if(
!!bitmap&&!((EK&0x1)===0x1)){var HK=((EK&0x4)===0x4);var HL=((EK&0x8)===0x8);var
BR=bitmap.FrameSize[0];if(HK&&!HL)Aw=A.abN(Aw,Aw[0]+BR);else if(!HK&&HL)Aw=[].concat(
Aw[2]-BR,Aw.slice(1,4));else{Aw=[].concat(Aw[0]+((((Aw[2]-Aw[0])/2)|0)-((BR/2)|0
)),Aw.slice(1,4));Aw=A.abN(Aw,Aw[0]+BR);}}if(!!bitmap&&!((EK&0x2)===0x2)){var HM=((
EK&0x10)===0x10);var HJ=((EK&0x20)===0x20);var BH=bitmap.FrameSize[1];if(HM&&!HJ
)Aw=[].concat(Aw.slice(0,3),Aw[1]+BH);else if(!HM&&HJ)Aw=A.abP(Aw,Aw[3]-BH);else{
Aw=A.abP(Aw,Aw[1]+((((Aw[3]-Aw[1])/2)|0)-((BH/2)|0)));Aw=[].concat(Aw.slice(0,3)
,Aw[1]+BH);}}this.UG.Cr(ZP);this.UG.Ax(bitmap);this.UG.G(Aw);this.UG.Aq3(16);}if(
!!this.Qd){var AhD;var font;var A0a;switch(Afj){case 0x44:case 0x41:case 0x46:case
0x45:{font=this.Appearance.AuR;A0a=this.ACp;}break;default:{font=this.Appearance.
AuQ;A0a=this.ACo;}}switch(Afj){case 0x44:AhD=this.Appearance.APj;break;case 0x41:
AhD=this.Appearance.APh;break;case 0x46:AhD=this.Appearance.APk;break;case 0x45:
AhD=this.Appearance.APi;break;case 0x64:AhD=this.Appearance.APf;break;case 0x61:
AhD=this.Appearance.APd;break;case 0x66:AhD=this.Appearance.APg;break;default:AhD=
this.Appearance.APe;}this.Qd.G([AE[0]+this.Appearance.APc,AE[1],AE[2],AE[3]]);this.
Qd.A2(this.Appearance.APb);this.Qd.S(font);this.Qd.Q(A0a);this.Qd.L(AhD);this.Qd.
KF(true);this.Qd.Bi1(true);this.Qd.Aq3(92);}this.ExtendClipping(0,0,0,0);{var Ato=
AE;this.CO.DX(Ato.slice(0,2));this.CO.Kb(Ato.slice(2,4));this.CO.DJ([Ato[2],Ato[
1]]);this.CO.Kc([Ato[0],Ato[3]]);}},AoV:function(H){var Bbu=this.De.Filter;this.
De.Filter=149;if(!Bbu&&!!this.De.Filter)this.Cq(0x4,0x0);if(!!Bbu&&!this.De.Filter
)this.Cq(0x0,0x4);if(!!this.Appearance)this.G(this.M);this.An();},OT:function(H){
var F;if(!!this.R)this.AqM((F=this.R,F[1].call(F[0])));},P7:function(H){var F;this.
An();this.AqM(!this.Va);if(!!this.R){(F=this.R,F[2].call(F[0],this.Va));A.abo(this.
R,0);}},Bw2:function(H){var F;var Ao8=0;if(!!this.Appearance)Ao8=50;this.CO.Ar(true
);this.An();if(((this.De.Bt-this.A02)|0)>=Ao8){this.AqM(!this.Va);if(!!this.R){(
F=this.R,F[2].call(F[0],this.Va));A.abo(this.R,0);}}else{this.Bk.V2(Ao8-((this.De.
Bt-this.A02)|0));this.Bk.Ar(true);}},Ah9:function(H){var F;this.CO.Ar(false);this.
An();if(this.Bk.Bw){this.Bk.Ar(false);this.AqM(!this.Va);if(!!this.R){(F=this.R,
F[2].call(F[0],this.Va));A.abo(this.R,0);}}this.A02=this.De.Bt;},BwK:function(H){
this.An();},BwF:function(H){this.An();},Azc:function(H){var F;var Ao8=0;if(!!this.
Appearance)Ao8=50;this.De.Bw=true;if(!this.CO.X8)return;if(this.CO.Nt)return;if(
this.CO.Jg>=Ao8){this.AqM(!this.Va);if(!!this.R){(F=this.R,F[2].call(F[0],this.Va
));A.abo(this.R,0);}}else{this.Bk.V2(Ao8-this.CO.Jg);this.Bk.Ar(true);}},Azb:function(
H){var F;this.De.Bw=false;if(this.Bk.Bw){this.Bk.Ar(false);this.AqM(!this.Va);if(
!!this.R){(F=this.R,F[2].call(F[0],this.Va));A.abo(this.R,0);}}},Av:function(E){
if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.OT],this.R,0);this.R=E;if(
!!E)A.zX([this,this.OT],E,0);if(!!E)this.OT(this);},AqM:function(E){if(this.Va===
E)return;this.Va=E;this.An();},A7t:function(E){if((E===this.ACo)&&(E===this.ACp)
)return;this.ACo=E;this.ACp=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.AoV],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.AoV],E,0);A.pe([this,this.AoV],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bk={I:this},0);A.Core.
BO._Init.call(this.De={I:this},0);A.Core.Bi._Init.call(this.CO={I:this},0);this.
__proto__=C.Ua;this.G(BC);this.Bk.QJ(0);this.Bk.V2(50);this.De.Filter=149;this.CO.
Kc(EU);this.CO.Kb(Hd);this.CO.DJ(I7);this.CO.DX(II);this.CO.Bkd(16);this.CO.ADL(
100);this.J(this.CO,0);this.Bk.M6=[this,this.P7];this.De.Lb=[this,this.Bw2];this.
De.BP=[this,this.Ah9];this.CO.AC6=[this,this.BwK];this.CO.AuY=[this,this.BwF];this.
CO.Lb=[this,this.Azc];this.CO.BP=[this,this.Azb];},_Done:function(){this.__proto__=
A.Core.O;this.Bk._Done();this.De._Done();this.CO._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bk._ReInit();this.De._ReInit(
);this.CO._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Qd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.UG)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CO)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ABS.__proto__=C.Anv;C.ASX.__proto__=C.Anv;C.ABR.__proto__=A.
Core.O;C.Ua.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){var B;if((
B=C.Adr[0]._this)&&(B._cycle!=D))B._Done(C.Adr[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */