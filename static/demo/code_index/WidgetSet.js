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
var B9=[0,0,200,50];var BC=[0,0,150,50];var EW=[0,50];var He=[150,50];var I7=[150
,0];var IH=[0,0];
C.Adz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ACi={AwP:null,AwO:null,ATc:500,AFM:-1,ATG:0xFFFFFFFF,AFL:-1,Wv:A.wf,Bk3:
function(E){if(this.ATc===E)return;this.ATc=E;A.pe([this,this.Ev],this);},A8E:function(
E){if(this.AFM===E)return;this.AFM=E;A.pe([this,this.Ev],this);},A8D:function(E){
if(this.AwP===E)return;this.AwP=E;A.pe([this,this.Ev],this);},A8C:function(E){if(
this.ATG===E)return;this.ATG=E;A.pe([this,this.Ev],this);},A8B:function(E){if(this.
AFL===E)return;this.AFL=E;A.pe([this,this.Ev],this);},A8A:function(E){if(this.AwO===
E)return;this.AwO=E;A.pe([this,this.Ev],this);},AEP:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Wv,E))return;this.Wv=E;A.pe([this,this.Ev
],this);},_Init:function(aArg){C.AnI._Init.call(this,aArg);this.__proto__=C.ACi;
},_Mark:function(D){var B;C.AnI._Mark.call(this,D);if((B=this.AwP)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AwO)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.ATz={Avd:null,Avc:null,Auw:null,Auz:null
,Auy:null,Aux:null,Aus:null,Auv:null,Auu:null,Aut:null,APP:0xFF000000,APS:0xFF000000
,APR:0xFF000000,APQ:0xFF000000,APL:0xFF000000,APO:0xFF000000,APN:0xFF000000,APM:
0xFF000000,APK:0,A5p:0xFFFFFFFF,A5s:0xFFFFFFFF,A5r:0xFFFFFFFF,A5q:0xFFFFFFFF,A5l:
0xFFFFFFFF,A5o:0xFFFFFFFF,A5n:0xFFFFFFFF,A5m:0xFFFFFFFF,A5k:0,APJ:0x12,A5j:0x12,
AMV:0x3F,AM0:-1,AM3:-1,AM2:-1,AM1:-1,AMW:-1,AMZ:-1,AMY:-1,AMX:-1,Wv:A.wf,Bkx:function(
E){if(this.APP===E)return;this.APP=E;A.pe([this,this.Ev],this);},BkA:function(E){
if(this.APS===E)return;this.APS=E;A.pe([this,this.Ev],this);},Bkz:function(E){if(
this.APR===E)return;this.APR=E;A.pe([this,this.Ev],this);},Bky:function(E){if(this.
APQ===E)return;this.APQ=E;A.pe([this,this.Ev],this);},Bkt:function(E){if(this.APL===
E)return;this.APL=E;A.pe([this,this.Ev],this);},Bkw:function(E){if(this.APO===E)
return;this.APO=E;A.pe([this,this.Ev],this);},Bkv:function(E){if(this.APN===E)return;
this.APN=E;A.pe([this,this.Ev],this);},Bku:function(E){if(this.APM===E)return;this.
APM=E;A.pe([this,this.Ev],this);},Bks:function(E){if(this.APK===E)return;this.APK=
E;A.pe([this,this.Ev],this);},Bki:function(E){if(this.A5p===E)return;this.A5p=E;
A.pe([this,this.Ev],this);},Bkl:function(E){if(this.A5s===E)return;this.A5s=E;A.
pe([this,this.Ev],this);},Bkk:function(E){if(this.A5r===E)return;this.A5r=E;A.pe([
this,this.Ev],this);},Bkj:function(E){if(this.A5q===E)return;this.A5q=E;A.pe([this
,this.Ev],this);},Bke:function(E){if(this.A5l===E)return;this.A5l=E;A.pe([this,this.
Ev],this);},Bkh:function(E){if(this.A5o===E)return;this.A5o=E;A.pe([this,this.Ev
],this);},Bkg:function(E){if(this.A5n===E)return;this.A5n=E;A.pe([this,this.Ev],
this);},Bkf:function(E){if(this.A5m===E)return;this.A5m=E;A.pe([this,this.Ev],this
);},Bkd:function(E){if(this.A5k===E)return;this.A5k=E;A.pe([this,this.Ev],this);
},Bkq:function(E){if(this.APJ===E)return;this.APJ=E;A.pe([this,this.Ev],this);},
A8a:function(E){if(this.Avd===E)return;this.Avd=E;A.pe([this,this.Ev],this);},A7$:
function(E){if(this.Avc===E)return;this.Avc=E;A.pe([this,this.Ev],this);},Bkb:function(
E){if(this.A5j===E)return;this.A5j=E;A.pe([this,this.Ev],this);},BjN:function(E){
if(this.AMV===E)return;this.AMV=E;A.pe([this,this.Ev],this);},Bj0:function(E){if(
this.AM0===E)return;this.AM0=E;A.pe([this,this.Ev],this);},Bj3:function(E){if(this.
AM3===E)return;this.AM3=E;A.pe([this,this.Ev],this);},Bj2:function(E){if(this.AM2===
E)return;this.AM2=E;A.pe([this,this.Ev],this);},Bj1:function(E){if(this.AM1===E)
return;this.AM1=E;A.pe([this,this.Ev],this);},BjW:function(E){if(this.Auw===E)return;
this.Auw=E;A.pe([this,this.Ev],this);},BjZ:function(E){if(this.Auz===E)return;this.
Auz=E;A.pe([this,this.Ev],this);},BjY:function(E){if(this.Auy===E)return;this.Auy=
E;A.pe([this,this.Ev],this);},BjX:function(E){if(this.Aux===E)return;this.Aux=E;
A.pe([this,this.Ev],this);},BjS:function(E){if(this.AMW===E)return;this.AMW=E;A.
pe([this,this.Ev],this);},BjV:function(E){if(this.AMZ===E)return;this.AMZ=E;A.pe([
this,this.Ev],this);},BjU:function(E){if(this.AMY===E)return;this.AMY=E;A.pe([this
,this.Ev],this);},BjT:function(E){if(this.AMX===E)return;this.AMX=E;A.pe([this,this.
Ev],this);},BjO:function(E){if(this.Aus===E)return;this.Aus=E;A.pe([this,this.Ev
],this);},BjR:function(E){if(this.Auv===E)return;this.Auv=E;A.pe([this,this.Ev],
this);},BjQ:function(E){if(this.Auu===E)return;this.Auu=E;A.pe([this,this.Ev],this
);},BjP:function(E){if(this.Aut===E)return;this.Aut=E;A.pe([this,this.Ev],this);
},AEP:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Wv,E))
return;this.Wv=E;A.pe([this,this.Ev],this);},_Init:function(aArg){C.AnI._Init.call(
this,aArg);this.__proto__=C.ATz;},_Mark:function(D){var B;C.AnI._Mark.call(this,
D);if((B=this.Avd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Auw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auy)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aux)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aus)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auv)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Auu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aut)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.AnI={
Ev:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.AnI;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ACh={LC:null,LB:null,Appearance:null
,MY:null,AhN:0,FP:100,Ga:0,AK:50,BdP:true,H:function(E){var B;if(!!this.Appearance
){var Ayp=[E[2]-E[0],E[3]-E[1]];var N9=Ayp;if(N9[0]<this.Appearance.Wv[0])N9=[this.
Appearance.Wv[0],N9[1]];if(N9[1]<this.Appearance.Wv[1])N9=[N9[0],this.Appearance.
Wv[1]];var GZ=A.abe(N9,Ayp);if(!!GZ[0]){var HL=((this.Pv&0x4)===0x4);var HM=((this.
Pv&0x8)===0x8);if(HL&&!HM)E=A.abN(E,E[2]+GZ[0]);else if(!HL&&HM)E=[].concat(E[0]-
GZ[0],E.slice(1,4));else{E=[].concat(E[0]-((GZ[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+N9[0]);}}if(!!GZ[1]){var HN=((this.Pv&0x10)===0x10);var HK=((this.Pv&0x20)===
0x20);if(HN&&!HK)E=[].concat(E.slice(0,3),E[3]+GZ[1]);else if(!HN&&HK)E=A.abP(E,
E[1]-GZ[1]);else{E=A.abP(E,E[1]-((GZ[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+N9[
1]);}}}A.Core.O.H.call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);
var BbZ=!!this.Appearance&&!!this.Appearance.AwO;var Bb0=!!this.Appearance&&!!this.
Appearance.AwP;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BbZ&&!!!this.LB){this.
LB=A._NewObject(A.acg.NF,0);this.J(this.LB,0);}else if(!BbZ&&!!this.LB){this.HH(
this.LB);this.LB=null;}if(Bb0&&!!!this.LC){this.LC=A._NewObject(A.acg.NF,0);this.
J(this.LC,0);}else if(!Bb0&&!!this.LC){this.HH(this.LC);this.LC=null;}if(!!this.
LB){this.LB.Ax(this.Appearance.AwO);this.LB.L(this.Appearance.ATG);this.LB.A7Y(0x1B
);this.LB.Arh(54);if(this.Appearance.AFL<0){this.LB.YU(true);this.LB.Ct(0);}else{
this.LB.YU(false);this.LB.Ct(this.Appearance.AFL);}}if(!!this.LC){this.LC.Ax(this.
Appearance.AwP);this.LC.L(0xFFFFFFFF);this.LC.A7Y(0x1E);this.LC.Arh(35);if(this.
Appearance.AFM<0){this.LC.YU(true);this.LC.Ct(0);}else{this.LC.YU(false);this.LC.
Ct(this.Appearance.AFM);}}var pos=((AE[2]-AE[0])*this.AhN)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LB&&!!this.LB.Al){var s=this.LB.Al.FrameSize;
var x2=AE[2]-AE[0];var Ef=pos;if(Ef>x2)Ef=x2;this.LB.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ef,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LB.A8c([x2-((s[0]
/3)|0),this.LB.AmR[1]]);this.LB.Y(true);}if(!!this.LC&&!!this.LC.Al){var s=this.
LC.Al.FrameSize;var x2=AE[2]-AE[0];var Ef=pos;if(Ef<0)Ef=0;this.LC.H([Ef,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LC.A8c([x2-((s[0]/3)|0),this.LC.AmR[1]]);this.LC.Y(true);}},AJl:function(G){var Ati=
this.AhN;var AJQ=0;if(!!this.Appearance)AJQ=this.Appearance.ATc;if(this.BdP&&(this.
FP!==this.Ga)){this.AhN=-this.Ga/(this.FP-this.Ga);Ati=this.AhN;this.BdP=false;}
if(this.FP!==this.Ga)Ati=(this.TX()-this.Ga)/(this.FP-this.Ga);if(Ati===this.AhN
)return;this.MY.Ar(false);if(AJQ<=0){this.AhN=Ati;this.An();return;}var AJs=Ati-
this.AhN;if(AJs<0)AJs=-AJs;this.MY.Wa(14);this.MY.Cq=this.AhN;this.MY.BY=Ati;this.
MY.Ff((10+((AJQ/2)|0))+((((AJQ*AJs)|0)/2)|0));this.MY.Ar(true);},Bxp:function(G){
},Bxs:function(G){this.AhN=this.MY.A4;this.An();},Ao6:function(G){A.pe([this,this.
AJl],this);if(!!this.Appearance)this.H(this.M);this.An();},E1:function(E){if(this.
FP===E)return;this.FP=E;A.pe([this,this.AJl],this);},Gk:function(E){if(this.Ga===
E)return;this.Ga=E;A.pe([this,this.AJl],this);},TX:function(){var E=this.AK;if(this.
Ga>this.FP){if(E<this.FP)E=this.FP;if(E>this.Ga)E=this.Ga;}else{if(E<this.Ga)E=this.
Ga;if(E>this.FP)E=this.FP;}return E;},Bx:function(E){if(this.AK===E)return;this.
AK=E;A.pe([this,this.AJl],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Ao6],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Ao6],E,0);A.pe([this,this.Ao6],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acl.MY._Init.call(this.MY={I:this},0);this.__proto__=
C.ACh;this.H(B9);this.MY.Wa(14);this.MY.HF(1);this.MY.Se=[this,this.Bxp];this.MY.
AgK=[this,this.Bxs];},_Done:function(){this.__proto__=A.Core.O;this.MY._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.MY.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.LC)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MY)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.Uk={Qi:null
,UP:null,Appearance:null,Q:null,Bk:null,Df:null,CN:null,ACR:A.jV,ACQ:A.jV,A1F:0,
Byg:0,Vh:false,H:function(E){var B;if(!!this.Appearance){var Ayp=[E[2]-E[0],E[3]-
E[1]];var N9=Ayp;if(N9[0]<this.Appearance.Wv[0])N9=[this.Appearance.Wv[0],N9[1]];
if(N9[1]<this.Appearance.Wv[1])N9=[N9[0],this.Appearance.Wv[1]];var GZ=A.abe(N9,
Ayp);if(!!GZ[0]){var HL=((this.Pv&0x4)===0x4);var HM=((this.Pv&0x8)===0x8);if(HL&&
!HM)E=A.abN(E,E[2]+GZ[0]);else if(!HL&&HM)E=[].concat(E[0]-GZ[0],E.slice(1,4));else{
E=[].concat(E[0]-((GZ[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+N9[0]);}}if(!!GZ[1]){
var HN=((this.Pv&0x10)===0x10);var HK=((this.Pv&0x20)===0x20);if(HN&&!HK)E=[].concat(
E.slice(0,3),E[3]+GZ[1]);else if(!HN&&HK)E=A.abP(E,E[1]-GZ[1]);else{E=A.abP(E,E[
1]-((GZ[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+N9[1]);}}}A.Core.O.H.call(this,E
);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var BbY=!!this.Appearance&&(((((((
!!this.Appearance.Aut||!!this.Appearance.Auu)||!!this.Appearance.Auv)||!!this.Appearance.
Aus)||!!this.Appearance.Aux)||!!this.Appearance.Auy)||!!this.Appearance.Auz)||!!
this.Appearance.Auw);var Bb1=!!this.Appearance&&((!!this.ACQ&&!!this.Appearance.
Avc)||(!!this.ACR&&!!this.Appearance.Avd));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Afw;if(BbY&&!!!this.UP){this.UP=A._NewObject(A.acg.NF,0);this.J(this.UP,
0);}else if(!BbY&&!!this.UP){this.HH(this.UP);this.UP=null;}if(Bb1&&!!!this.Qi){
this.Qi=A._NewObject(A.acg.Text,0);this.J(this.Qi,0);this.Qi.BjG(true);}else if(
!Bb1&&!!this.Qi){this.HH(this.Qi);this.Qi=null;}if(!((Ae&0x10)===0x10))Afw=0x44;
else if(((this.CN.Down&&this.CN.Yb)||this.Df.Down)||this.Bk.Bv)Afw=0x41;else if(((
Ae&0x40)===0x40))Afw=0x46;else Afw=0x45;if(!this.Vh)Afw=String.fromCharCode(Afw).
toLowerCase().charCodeAt(0)||0;this.Byg=Afw;if(!!this.UP){var bitmap;var ZW;var EL=
this.Appearance.AMV;var Aw=[AE[0],AE[1],AE[2],AE[3]];switch(Afw){case 0x44:{bitmap=
this.Appearance.Auy;ZW=this.Appearance.AM2;}break;case 0x41:{bitmap=this.Appearance.
Auw;ZW=this.Appearance.AM0;}break;case 0x46:{bitmap=this.Appearance.Auz;ZW=this.
Appearance.AM3;}break;case 0x45:{bitmap=this.Appearance.Aux;ZW=this.Appearance.AM1;
}break;case 0x64:{bitmap=this.Appearance.Auu;ZW=this.Appearance.AMY;}break;case 0x61:{
bitmap=this.Appearance.Aus;ZW=this.Appearance.AMW;}break;case 0x66:{bitmap=this.
Appearance.Auv;ZW=this.Appearance.AMZ;}break;default:{bitmap=this.Appearance.Aut;
ZW=this.Appearance.AMX;}}this.UP.YU(ZW<0);this.UP.L(0xFFFFFFFF);if(ZW<0)ZW=0;if(
!!bitmap&&!((EL&0x1)===0x1)){var HL=((EL&0x4)===0x4);var HM=((EL&0x8)===0x8);var
BR=bitmap.FrameSize[0];if(HL&&!HM)Aw=A.abN(Aw,Aw[0]+BR);else if(!HL&&HM)Aw=[].concat(
Aw[2]-BR,Aw.slice(1,4));else{Aw=[].concat(Aw[0]+((((Aw[2]-Aw[0])/2)|0)-((BR/2)|0
)),Aw.slice(1,4));Aw=A.abN(Aw,Aw[0]+BR);}}if(!!bitmap&&!((EL&0x2)===0x2)){var HN=((
EL&0x10)===0x10);var HK=((EL&0x20)===0x20);var BH=bitmap.FrameSize[1];if(HN&&!HK
)Aw=[].concat(Aw.slice(0,3),Aw[1]+BH);else if(!HN&&HK)Aw=A.abP(Aw,Aw[3]-BH);else{
Aw=A.abP(Aw,Aw[1]+((((Aw[3]-Aw[1])/2)|0)-((BH/2)|0)));Aw=[].concat(Aw.slice(0,3)
,Aw[1]+BH);}}this.UP.Ct(ZW);this.UP.Ax(bitmap);this.UP.H(Aw);this.UP.Arh(16);}if(
!!this.Qi){var AhL;var font;var A0N;switch(Afw){case 0x44:case 0x41:case 0x46:case
0x45:{font=this.Appearance.Avd;A0N=this.ACR;}break;default:{font=this.Appearance.
Avc;A0N=this.ACQ;}}switch(Afw){case 0x44:AhL=this.Appearance.APR;break;case 0x41:
AhL=this.Appearance.APP;break;case 0x46:AhL=this.Appearance.APS;break;case 0x45:
AhL=this.Appearance.APQ;break;case 0x64:AhL=this.Appearance.APN;break;case 0x61:
AhL=this.Appearance.APL;break;case 0x66:AhL=this.Appearance.APO;break;default:AhL=
this.Appearance.APM;}this.Qi.H([AE[0]+this.Appearance.APK,AE[1],AE[2],AE[3]]);this.
Qi.A2(this.Appearance.APJ);this.Qi.S(font);this.Qi.R(A0N);this.Qi.L(AhL);this.Qi.
KI(true);this.Qi.BjF(true);this.Qi.Arh(92);}this.ExtendClipping(0,0,0,0);{var AtN=
AE;this.CN.DY(AtN.slice(0,2));this.CN.Kd(AtN.slice(2,4));this.CN.DK([AtN[2],AtN[
1]]);this.CN.Ke([AtN[0],AtN[3]]);}},Ao6:function(G){var Bb_=this.Df.Filter;this.
Df.Filter=149;if(!Bb_&&!!this.Df.Filter)this.Cs(0x4,0x0);if(!!Bb_&&!this.Df.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.An();},OX:function(G){
var F;if(!!this.Q)this.Aq1((F=this.Q,F[1].call(F[0])));},Qa:function(G){var F;this.
An();this.Aq1(!this.Vh);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vh));A.abo(this.
Q,0);}},BxO:function(G){var F;var Aph=0;if(!!this.Appearance)Aph=50;this.CN.Ar(true
);this.An();if(((this.Df.Bt-this.A1F)|0)>=Aph){this.Aq1(!this.Vh);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.Vh));A.abo(this.Q,0);}}else{this.Bk.V8(Aph-((this.Df.
Bt-this.A1F)|0));this.Bk.Ar(true);}},Aig:function(G){var F;this.CN.Ar(false);this.
An();if(this.Bk.Bv){this.Bk.Ar(false);this.Aq1(!this.Vh);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.Vh));A.abo(this.Q,0);}}this.A1F=this.Df.Bt;},Bxw:function(G){
this.An();},Bxr:function(G){this.An();},AzB:function(G){var F;var Aph=0;if(!!this.
Appearance)Aph=50;this.Df.Bv=true;if(!this.CN.Yb)return;if(this.CN.Nw)return;if(
this.CN.Jg>=Aph){this.Aq1(!this.Vh);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vh
));A.abo(this.Q,0);}}else{this.Bk.V8(Aph-this.CN.Jg);this.Bk.Ar(true);}},AzA:function(
G){var F;this.Df.Bv=false;if(this.Bk.Bv){this.Bk.Ar(false);this.Aq1(!this.Vh);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Vh));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.OX],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.OX],E,0);if(!!E)this.OX(this);},Aq1:function(E){if(this.Vh===
E)return;this.Vh=E;this.An();},A7_:function(E){if((E===this.ACQ)&&(E===this.ACR)
)return;this.ACQ=E;this.ACR=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Ao6],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Ao6],E,0);A.pe([this,this.Ao6],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bk={I:this},0);A.Core.
BJ._Init.call(this.Df={I:this},0);A.Core.Bi._Init.call(this.CN={I:this},0);this.
__proto__=C.Uk;this.H(BC);this.Bk.PC(0);this.Bk.V8(50);this.Df.Filter=149;this.CN.
Ke(EW);this.CN.Kd(He);this.CN.DK(I7);this.CN.DY(IH);this.CN.BkT(16);this.CN.AEc(
100);this.J(this.CN,0);this.Bk.Mp=[this,this.Qa];this.Df.Lg=[this,this.BxO];this.
Df.BK=[this,this.Aig];this.CN.ADw=[this,this.Bxw];this.CN.Avk=[this,this.Bxr];this.
CN.Lg=[this,this.AzB];this.CN.BK=[this,this.AzA];},_Done:function(){this.__proto__=
A.Core.O;this.Bk._Done();this.Df._Done();this.CN._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bk._ReInit();this.Df._ReInit(
);this.CN._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Qi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.UP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CN)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ACi.__proto__=C.AnI;C.ATz.__proto__=C.AnI;C.ACh.__proto__=A.
Core.O;C.Uk.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){var B;if((
B=C.Adz[0]._this)&&(B._cycle!=D))B._Done(C.Adz[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */