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
var Ca=[0,0,200,50];var BC=[0,0,150,50];var EW=[0,50];var Hh=[150,50];var I8=[150
,0];var IJ=[0,0];
C.AdN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ACH={Aw6:null,Aw5:null,AT_:500,AGk:-1,AUC:0xFFFFFFFF,AGj:-1,WF:A.wf,Bml:
function(E){if(this.AT_===E)return;this.AT_=E;A.pe([this,this.Ey],this);},A9N:function(
E){if(this.AGk===E)return;this.AGk=E;A.pe([this,this.Ey],this);},A9M:function(E){
if(this.Aw6===E)return;this.Aw6=E;A.pe([this,this.Ey],this);},A9L:function(E){if(
this.AUC===E)return;this.AUC=E;A.pe([this,this.Ey],this);},A9K:function(E){if(this.
AGj===E)return;this.AGj=E;A.pe([this,this.Ey],this);},A9J:function(E){if(this.Aw5===
E)return;this.Aw5=E;A.pe([this,this.Ey],this);},AFl:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WF,E))return;this.WF=E;A.pe([this,this.Ey
],this);},_Init:function(aArg){C.AnP._Init.call(this,aArg);this.__proto__=C.ACH;
},_Mark:function(D){var B;C.AnP._Mark.call(this,D);if((B=this.Aw6)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Aw5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AUv={Avj:null,Avi:null,AuC:null,AuF:null
,AuE:null,AuD:null,Auy:null,AuB:null,AuA:null,Auz:null,AQC:0xFF000000,AQF:0xFF000000
,AQE:0xFF000000,AQD:0xFF000000,AQy:0xFF000000,AQB:0xFF000000,AQA:0xFF000000,AQz:
0xFF000000,AQx:0,A6o:0xFFFFFFFF,A6r:0xFFFFFFFF,A6q:0xFFFFFFFF,A6p:0xFFFFFFFF,A6k:
0xFFFFFFFF,A6n:0xFFFFFFFF,A6m:0xFFFFFFFF,A6l:0xFFFFFFFF,A6j:0,AQw:0x12,A6i:0x12,
ANI:0x3F,ANN:-1,ANQ:-1,ANP:-1,ANO:-1,ANJ:-1,ANM:-1,ANL:-1,ANK:-1,WF:A.wf,BlO:function(
E){if(this.AQC===E)return;this.AQC=E;A.pe([this,this.Ey],this);},BlR:function(E){
if(this.AQF===E)return;this.AQF=E;A.pe([this,this.Ey],this);},BlQ:function(E){if(
this.AQE===E)return;this.AQE=E;A.pe([this,this.Ey],this);},BlP:function(E){if(this.
AQD===E)return;this.AQD=E;A.pe([this,this.Ey],this);},BlK:function(E){if(this.AQy===
E)return;this.AQy=E;A.pe([this,this.Ey],this);},BlN:function(E){if(this.AQB===E)
return;this.AQB=E;A.pe([this,this.Ey],this);},BlM:function(E){if(this.AQA===E)return;
this.AQA=E;A.pe([this,this.Ey],this);},BlL:function(E){if(this.AQz===E)return;this.
AQz=E;A.pe([this,this.Ey],this);},BlJ:function(E){if(this.AQx===E)return;this.AQx=
E;A.pe([this,this.Ey],this);},Blz:function(E){if(this.A6o===E)return;this.A6o=E;
A.pe([this,this.Ey],this);},BlC:function(E){if(this.A6r===E)return;this.A6r=E;A.
pe([this,this.Ey],this);},BlB:function(E){if(this.A6q===E)return;this.A6q=E;A.pe([
this,this.Ey],this);},BlA:function(E){if(this.A6p===E)return;this.A6p=E;A.pe([this
,this.Ey],this);},Blv:function(E){if(this.A6k===E)return;this.A6k=E;A.pe([this,this.
Ey],this);},Bly:function(E){if(this.A6n===E)return;this.A6n=E;A.pe([this,this.Ey
],this);},Blx:function(E){if(this.A6m===E)return;this.A6m=E;A.pe([this,this.Ey],
this);},Blw:function(E){if(this.A6l===E)return;this.A6l=E;A.pe([this,this.Ey],this
);},Blu:function(E){if(this.A6j===E)return;this.A6j=E;A.pe([this,this.Ey],this);
},BlH:function(E){if(this.AQw===E)return;this.AQw=E;A.pe([this,this.Ey],this);},
A9j:function(E){if(this.Avj===E)return;this.Avj=E;A.pe([this,this.Ey],this);},A9i:
function(E){if(this.Avi===E)return;this.Avi=E;A.pe([this,this.Ey],this);},Bls:function(
E){if(this.A6i===E)return;this.A6i=E;A.pe([this,this.Ey],this);},Bk4:function(E){
if(this.ANI===E)return;this.ANI=E;A.pe([this,this.Ey],this);},Blf:function(E){if(
this.ANN===E)return;this.ANN=E;A.pe([this,this.Ey],this);},Bli:function(E){if(this.
ANQ===E)return;this.ANQ=E;A.pe([this,this.Ey],this);},Blh:function(E){if(this.ANP===
E)return;this.ANP=E;A.pe([this,this.Ey],this);},Blg:function(E){if(this.ANO===E)
return;this.ANO=E;A.pe([this,this.Ey],this);},Blb:function(E){if(this.AuC===E)return;
this.AuC=E;A.pe([this,this.Ey],this);},Ble:function(E){if(this.AuF===E)return;this.
AuF=E;A.pe([this,this.Ey],this);},Bld:function(E){if(this.AuE===E)return;this.AuE=
E;A.pe([this,this.Ey],this);},Blc:function(E){if(this.AuD===E)return;this.AuD=E;
A.pe([this,this.Ey],this);},Bk9:function(E){if(this.ANJ===E)return;this.ANJ=E;A.
pe([this,this.Ey],this);},Bla:function(E){if(this.ANM===E)return;this.ANM=E;A.pe([
this,this.Ey],this);},Bk$:function(E){if(this.ANL===E)return;this.ANL=E;A.pe([this
,this.Ey],this);},Bk_:function(E){if(this.ANK===E)return;this.ANK=E;A.pe([this,this.
Ey],this);},Bk5:function(E){if(this.Auy===E)return;this.Auy=E;A.pe([this,this.Ey
],this);},Bk8:function(E){if(this.AuB===E)return;this.AuB=E;A.pe([this,this.Ey],
this);},Bk7:function(E){if(this.AuA===E)return;this.AuA=E;A.pe([this,this.Ey],this
);},Bk6:function(E){if(this.Auz===E)return;this.Auz=E;A.pe([this,this.Ey],this);
},AFl:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WF,E))
return;this.WF=E;A.pe([this,this.Ey],this);},_Init:function(aArg){C.AnP._Init.call(
this,aArg);this.__proto__=C.AUv;},_Mark:function(D){var B;C.AnP._Mark.call(this,
D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuE)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AuD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuB)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AuA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auz)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.AnP={
Ey:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.AnP;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ACG={LF:null,LE:null,Appearance:null
,M3:null,Ah3:0,FS:100,Ge:0,AK:50,Be5:true,H:function(E){var B;if(!!this.Appearance
){var AyI=[E[2]-E[0],E[3]-E[1]];var Oh=AyI;if(Oh[0]<this.Appearance.WF[0])Oh=[this.
Appearance.WF[0],Oh[1]];if(Oh[1]<this.Appearance.WF[1])Oh=[Oh[0],this.Appearance.
WF[1]];var G3=A.abe(Oh,AyI);if(!!G3[0]){var HN=((this.PD&0x4)===0x4);var HO=((this.
PD&0x8)===0x8);if(HN&&!HO)E=A.abN(E,E[2]+G3[0]);else if(!HN&&HO)E=[].concat(E[0]-
G3[0],E.slice(1,4));else{E=[].concat(E[0]-((G3[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Oh[0]);}}if(!!G3[1]){var HP=((this.PD&0x10)===0x10);var HM=((this.PD&0x20)===
0x20);if(HP&&!HM)E=[].concat(E.slice(0,3),E[3]+G3[1]);else if(!HP&&HM)E=A.abP(E,
E[1]-G3[1]);else{E=A.abP(E,E[1]-((G3[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oh[
1]);}}}A.Core.O.H.call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);
var Bde=!!this.Appearance&&!!this.Appearance.Aw5;var Bdf=!!this.Appearance&&!!this.
Appearance.Aw6;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Bde&&!!!this.LE){this.
LE=A._NewObject(A.acg.NI,0);this.J(this.LE,0);}else if(!Bde&&!!this.LE){this.HI(
this.LE);this.LE=null;}if(Bdf&&!!!this.LF){this.LF=A._NewObject(A.acg.NI,0);this.
J(this.LF,0);}else if(!Bdf&&!!this.LF){this.HI(this.LF);this.LF=null;}if(!!this.
LE){this.LE.Ax(this.Appearance.Aw5);this.LE.L(this.Appearance.AUC);this.LE.A87(0x1B
);this.LE.Aru(54);if(this.Appearance.AGj<0){this.LE.Y5(true);this.LE.Cu(0);}else{
this.LE.Y5(false);this.LE.Cu(this.Appearance.AGj);}}if(!!this.LF){this.LF.Ax(this.
Appearance.Aw6);this.LF.L(0xFFFFFFFF);this.LF.A87(0x1E);this.LF.Aru(35);if(this.
Appearance.AGk<0){this.LF.Y5(true);this.LF.Cu(0);}else{this.LF.Y5(false);this.LF.
Cu(this.Appearance.AGk);}}var pos=((AE[2]-AE[0])*this.Ah3)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LE&&!!this.LE.Al){var s=this.LE.Al.FrameSize;
var x2=AE[2]-AE[0];var Eg=pos;if(Eg>x2)Eg=x2;this.LE.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eg,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LE.A9l([x2-((s[0]
/3)|0),this.LE.AmY[1]]);this.LE.Y(true);}if(!!this.LF&&!!this.LF.Al){var s=this.
LF.Al.FrameSize;var x2=AE[2]-AE[0];var Eg=pos;if(Eg<0)Eg=0;this.LF.H([Eg,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LF.A9l([x2-((s[0]/3)|0),this.LF.AmY[1]]);this.LF.Y(true);}},AJ2:function(G){var Atn=
this.Ah3;var AKw=0;if(!!this.Appearance)AKw=this.Appearance.AT_;if(this.Be5&&(this.
FS!==this.Ge)){this.Ah3=-this.Ge/(this.FS-this.Ge);Atn=this.Ah3;this.Be5=false;}
if(this.FS!==this.Ge)Atn=(this.T5()-this.Ge)/(this.FS-this.Ge);if(Atn===this.Ah3
)return;this.M3.Ar(false);if(AKw<=0){this.Ah3=Atn;this.Am();return;}var AJ9=Atn-
this.Ah3;if(AJ9<0)AJ9=-AJ9;this.M3.Wi(14);this.M3.Cr=this.Ah3;this.M3.B1=Atn;this.
M3.Fe((10+((AKw/2)|0))+((((AKw*AJ9)|0)/2)|0));this.M3.Ar(true);},ByZ:function(G){
},By2:function(G){this.Ah3=this.M3.A7;this.Am();},Api:function(G){A.pe([this,this.
AJ2],this);if(!!this.Appearance)this.H(this.M);this.Am();},E1:function(E){if(this.
FS===E)return;this.FS=E;A.pe([this,this.AJ2],this);},Gn:function(E){if(this.Ge===
E)return;this.Ge=E;A.pe([this,this.AJ2],this);},T5:function(){var E=this.AK;if(this.
Ge>this.FS){if(E<this.FS)E=this.FS;if(E>this.Ge)E=this.Ge;}else{if(E<this.Ge)E=this.
Ge;if(E>this.FS)E=this.FS;}return E;},Bx:function(E){if(this.AK===E)return;this.
AK=E;A.pe([this,this.AJ2],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Api],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Api],E,0);A.pe([this,this.Api],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acl.M3._Init.call(this.M3={I:this},0);this.__proto__=
C.ACG;this.H(Ca);this.M3.Wi(14);this.M3.HG(1);this.M3.Sl=[this,this.ByZ];this.M3.
AgZ=[this,this.By2];},_Done:function(){this.__proto__=A.Core.O;this.M3._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.M3.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.LF)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M3)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.Ut={Qn:null
,UU:null,Appearance:null,Q:null,Bl:null,Dg:null,CP:null,ADj:A.jV,ADi:A.jV,A2z:0,
BzQ:0,Vo:false,H:function(E){var B;if(!!this.Appearance){var AyI=[E[2]-E[0],E[3]-
E[1]];var Oh=AyI;if(Oh[0]<this.Appearance.WF[0])Oh=[this.Appearance.WF[0],Oh[1]];
if(Oh[1]<this.Appearance.WF[1])Oh=[Oh[0],this.Appearance.WF[1]];var G3=A.abe(Oh,
AyI);if(!!G3[0]){var HN=((this.PD&0x4)===0x4);var HO=((this.PD&0x8)===0x8);if(HN&&
!HO)E=A.abN(E,E[2]+G3[0]);else if(!HN&&HO)E=[].concat(E[0]-G3[0],E.slice(1,4));else{
E=[].concat(E[0]-((G3[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Oh[0]);}}if(!!G3[1]){
var HP=((this.PD&0x10)===0x10);var HM=((this.PD&0x20)===0x20);if(HP&&!HM)E=[].concat(
E.slice(0,3),E[3]+G3[1]);else if(!HP&&HM)E=A.abP(E,E[1]-G3[1]);else{E=A.abP(E,E[
1]-((G3[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oh[1]);}}}A.Core.O.H.call(this,E
);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Bdd=!!this.Appearance&&(((((((
!!this.Appearance.Auz||!!this.Appearance.AuA)||!!this.Appearance.AuB)||!!this.Appearance.
Auy)||!!this.Appearance.AuD)||!!this.Appearance.AuE)||!!this.Appearance.AuF)||!!
this.Appearance.AuC);var Bdg=!!this.Appearance&&((!!this.ADi&&!!this.Appearance.
Avi)||(!!this.ADj&&!!this.Appearance.Avj));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var AfJ;if(Bdd&&!!!this.UU){this.UU=A._NewObject(A.acg.NI,0);this.J(this.UU,
0);}else if(!Bdd&&!!this.UU){this.HI(this.UU);this.UU=null;}if(Bdg&&!!!this.Qn){
this.Qn=A._NewObject(A.acg.Text,0);this.J(this.Qn,0);this.Qn.BkX(true);}else if(
!Bdg&&!!this.Qn){this.HI(this.Qn);this.Qn=null;}if(!((Ae&0x10)===0x10))AfJ=0x44;
else if(((this.CP.Down&&this.CP.Yk)||this.Dg.Down)||this.Bl.Bv)AfJ=0x41;else if(((
Ae&0x40)===0x40))AfJ=0x46;else AfJ=0x45;if(!this.Vo)AfJ=String.fromCharCode(AfJ).
toLowerCase().charCodeAt(0)||0;this.BzQ=AfJ;if(!!this.UU){var bitmap;var Z9;var EM=
this.Appearance.ANI;var Ay=[AE[0],AE[1],AE[2],AE[3]];switch(AfJ){case 0x44:{bitmap=
this.Appearance.AuE;Z9=this.Appearance.ANP;}break;case 0x41:{bitmap=this.Appearance.
AuC;Z9=this.Appearance.ANN;}break;case 0x46:{bitmap=this.Appearance.AuF;Z9=this.
Appearance.ANQ;}break;case 0x45:{bitmap=this.Appearance.AuD;Z9=this.Appearance.ANO;
}break;case 0x64:{bitmap=this.Appearance.AuA;Z9=this.Appearance.ANL;}break;case 0x61:{
bitmap=this.Appearance.Auy;Z9=this.Appearance.ANJ;}break;case 0x66:{bitmap=this.
Appearance.AuB;Z9=this.Appearance.ANM;}break;default:{bitmap=this.Appearance.Auz;
Z9=this.Appearance.ANK;}}this.UU.Y5(Z9<0);this.UU.L(0xFFFFFFFF);if(Z9<0)Z9=0;if(
!!bitmap&&!((EM&0x1)===0x1)){var HN=((EM&0x4)===0x4);var HO=((EM&0x8)===0x8);var
BU=bitmap.FrameSize[0];if(HN&&!HO)Ay=A.abN(Ay,Ay[0]+BU);else if(!HN&&HO)Ay=[].concat(
Ay[2]-BU,Ay.slice(1,4));else{Ay=[].concat(Ay[0]+((((Ay[2]-Ay[0])/2)|0)-((BU/2)|0
)),Ay.slice(1,4));Ay=A.abN(Ay,Ay[0]+BU);}}if(!!bitmap&&!((EM&0x2)===0x2)){var HP=((
EM&0x10)===0x10);var HM=((EM&0x20)===0x20);var BH=bitmap.FrameSize[1];if(HP&&!HM
)Ay=[].concat(Ay.slice(0,3),Ay[1]+BH);else if(!HP&&HM)Ay=A.abP(Ay,Ay[3]-BH);else{
Ay=A.abP(Ay,Ay[1]+((((Ay[3]-Ay[1])/2)|0)-((BH/2)|0)));Ay=[].concat(Ay.slice(0,3)
,Ay[1]+BH);}}this.UU.Cu(Z9);this.UU.Ax(bitmap);this.UU.H(Ay);this.UU.Aru(16);}if(
!!this.Qn){var Ah1;var font;var A1E;switch(AfJ){case 0x44:case 0x41:case 0x46:case
0x45:{font=this.Appearance.Avj;A1E=this.ADj;}break;default:{font=this.Appearance.
Avi;A1E=this.ADi;}}switch(AfJ){case 0x44:Ah1=this.Appearance.AQE;break;case 0x41:
Ah1=this.Appearance.AQC;break;case 0x46:Ah1=this.Appearance.AQF;break;case 0x45:
Ah1=this.Appearance.AQD;break;case 0x64:Ah1=this.Appearance.AQA;break;case 0x61:
Ah1=this.Appearance.AQy;break;case 0x66:Ah1=this.Appearance.AQB;break;default:Ah1=
this.Appearance.AQz;}this.Qn.H([AE[0]+this.Appearance.AQx,AE[1],AE[2],AE[3]]);this.
Qn.A4(this.Appearance.AQw);this.Qn.S(font);this.Qn.R(A1E);this.Qn.L(Ah1);this.Qn.
KM(true);this.Qn.BkW(true);this.Qn.Aru(92);}this.ExtendClipping(0,0,0,0);{var AtT=
AE;this.CP.DY(AtT.slice(0,2));this.CP.Kh(AtT.slice(2,4));this.CP.DM([AtT[2],AtT[
1]]);this.CP.Ki([AtT[0],AtT[3]]);}},Api:function(G){var Bdp=this.Dg.Filter;this.
Dg.Filter=149;if(!Bdp&&!!this.Dg.Filter)this.Ct(0x4,0x0);if(!!Bdp&&!this.Dg.Filter
)this.Ct(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},J3:function(G){
var F;if(!!this.Q)this.Ard((F=this.Q,F[1].call(F[0])));},Qf:function(G){var F;this.
Am();this.Ard(!this.Vo);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vo));A.abo(this.
Q,0);}},Bzm:function(G){var F;var Apu=0;if(!!this.Appearance)Apu=50;this.CP.Ar(true
);this.Am();if(((this.Dg.Bt-this.A2z)|0)>=Apu){this.Ard(!this.Vo);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.Vo));A.abo(this.Q,0);}}else{this.Bl.We(Apu-((this.Dg.
Bt-this.A2z)|0));this.Bl.Ar(true);}},Aiw:function(G){var F;this.CP.Ar(false);this.
Am();if(this.Bl.Bv){this.Bl.Ar(false);this.Ard(!this.Vo);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.Vo));A.abo(this.Q,0);}}this.A2z=this.Dg.Bt;},By6:function(G){
this.Am();},By1:function(G){this.Am();},AzV:function(G){var F;var Apu=0;if(!!this.
Appearance)Apu=50;this.Dg.Bv=true;if(!this.CP.Yk)return;if(this.CP.Nz)return;if(
this.CP.Jh>=Apu){this.Ard(!this.Vo);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vo
));A.abo(this.Q,0);}}else{this.Bl.We(Apu-this.CP.Jh);this.Bl.Ar(true);}},AzU:function(
G){var F;this.Dg.Bv=false;if(this.Bl.Bv){this.Bl.Ar(false);this.Ard(!this.Vo);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Vo));A.abo(this.Q,0);}}},At:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J3],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.J3],E,0);if(!!E)this.J3(this);},Ard:function(E){if(this.Vo===
E)return;this.Vo=E;this.Am();},A9h:function(E){if((E===this.ADi)&&(E===this.ADj)
)return;this.ADi=E;this.ADj=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Api],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Api],E,0);A.pe([this,this.Api],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bl={I:this},0);A.Core.
BJ._Init.call(this.Dg={I:this},0);A.Core.Bk._Init.call(this.CP={I:this},0);this.
__proto__=C.Ut;this.H(BC);this.Bl.PK(0);this.Bl.We(50);this.Dg.Filter=149;this.CP.
Ki(EW);this.CP.Kh(Hh);this.CP.DM(I8);this.CP.DY(IJ);this.CP.Bmb(16);this.CP.AEL(
100);this.J(this.CP,0);this.Bl.Ms=[this,this.Qf];this.Dg.Lj=[this,this.Bzm];this.
Dg.BK=[this,this.Aiw];this.CP.AD1=[this,this.By6];this.CP.Avt=[this,this.By1];this.
CP.Lj=[this,this.AzV];this.CP.BK=[this,this.AzU];},_Done:function(){this.__proto__=
A.Core.O;this.Bl._Done();this.Dg._Done();this.CP._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bl._ReInit();this.Dg._ReInit(
);this.CP._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Qn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.UU)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bl)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CP)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ACH.__proto__=C.AnP;C.AUv.__proto__=C.AnP;C.ACG.__proto__=A.
Core.O;C.Ut.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){var B;if((
B=C.AdN[0]._this)&&(B._cycle!=D))B._Done(C.AdN[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */