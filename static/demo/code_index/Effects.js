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
);if(index.abm)throw new Error("The unit file 'Effects.js' included twice!");index.
abm=(function(){var A=index;var C={};
var B4=[100,100];var BI="Trying to remove a fader from a task, which is actually running";
var EH="The fader doesn\'t belong to this task";var Gv="Trying to add a fader to a task, which is actually running";
var I5="The fader belongs already to a task";
C.EE={Mg:null,timer:null,Pt:null,Rn:null,Afn:null,R2:0,Ag0:0,TB:0,Om:0,AwC:0.001,
VQ:0,DV:0,Df:0,AJN:0.5,AZO:3,At7:3,ArI:0.5,Ud:3,AQg:0,AQf:0,LW:0,OH:1000,OP:0,Ul:
0,AfT:0,Bw:false,AiJ:false,APy:false,AnB:false,AHk:false,Lz:function(H){var B;if(
!this.timer)return;if(!this.Ag0){if(this.APy)this.Ag0=-1;else this.Ag0=1;this.R2=
this.Ag0;this.Df=this.timer.Bp;this.DV=0;this.VQ=-1;}var L9;if((this.Ag0>0)&&(this.
R2>0))L9=this.Buc();else if((this.Ag0<0)&&(this.R2<0))L9=this.Buf();else if(this.
Ag0>0)L9=this.Bud();else L9=this.Bue();if(L9){this.An(false);(B=this.Pt)?B[1].call(
B[0],this):null;(B=this.Rn)?B[1].call(B[0],this):null;}},AG0:function(AJ){var B;
if(!this.Mg&&(((this.AfT===19)||(this.AfT===20))||(this.AfT===21))){var AFE=this.
AZO+1;var BrJ=Math.sqrt(this.AJN);var QE=0.5;var P;this.Mg=A._NewObject(C.AC9,0);
this.Mg.Ov.Set(0,1);this.Mg.Ajf.Set(0,1);for(P=1;P<AFE;P=P+1){this.Mg.Ov.Set(P,this.
Mg.Ov.Get(P-1)*BrJ);this.Mg.Ajf.Set(P,this.Mg.Ajf.Get(P-1)*this.AJN);QE=QE+this.
Mg.Ov.Get(P);}var Bsv=1/QE;this.Mg.Ov.Set(0,0.5);QE=0;for(P=0;P<AFE;P=P+1){this.
Mg.Ov.Set(P,this.Mg.Ov.Get(P)*Bsv);QE=QE+this.Mg.Ov.Get(P);}this.Mg.Ov.Set(AFE,this.
Mg.Ov.Get(AFE)+(1-QE));}if(this.AiJ){if(AJ<0.5)AJ=AJ*2;else AJ=2-(AJ*2);}switch(
this.AfT){case 1:AJ=Math.pow(AJ,this.Ud);break;case 2:{AJ=1-AJ;AJ=1-Math.pow(AJ,
this.Ud);}break;case 3:{AJ=AJ*2;if(AJ<1)AJ=Math.pow(AJ,this.Ud)/2;else{AJ=2-AJ;AJ=(
2-Math.pow(AJ,this.Ud))*0.5;}}break;case 4:AJ=(Math.pow(2.718,this.Ud*AJ)-1)/(Math.
pow(2.718,this.Ud)-1);break;case 5:{AJ=1-AJ;AJ=1-((Math.pow(2.718,this.Ud*AJ)-1)
/(Math.pow(2.718,this.Ud)-1));}break;case 6:{AJ=AJ*2;if(AJ<1)AJ=((Math.pow(2.718
,this.Ud*AJ)-1)/(Math.pow(2.718,this.Ud)-1))/2;else{AJ=2-AJ;AJ=(2-((Math.pow(2.718
,this.Ud*AJ)-1)/(Math.pow(2.718,this.Ud)-1)))*0.5;}}break;case 7:AJ=1-Math.cos((
AJ*90)*A.kw);break;case 8:AJ=Math.sin((AJ*90)*A.kw);break;case 9:{AJ=AJ*2;if(AJ<
1){AJ=1-Math.cos((AJ*90)*A.kw);AJ=AJ*0.5;}else{AJ=2-AJ;AJ=1-Math.cos((AJ*90)*A.kw
);AJ=(2-AJ)*0.5;}}break;case 10:AJ=1-Math.sqrt(1-(AJ*AJ));break;case 11:{AJ=1-AJ;
AJ=Math.sqrt(1-(AJ*AJ));}break;case 12:{AJ=AJ*2;if(AJ<1){AJ=1-Math.sqrt(1-(AJ*AJ
));AJ=AJ*0.5;}else{AJ=2-AJ;AJ=1-Math.sqrt(1-(AJ*AJ));AJ=(2-AJ)*0.5;}}break;case 13:
AJ=((AJ*AJ)*AJ)-((AJ*this.ArI)*Math.sin((AJ*180)*A.kw));break;case 14:{AJ=1-AJ;AJ=((
AJ*AJ)*AJ)-((AJ*this.ArI)*Math.sin((AJ*180)*A.kw));AJ=1-AJ;}break;case 15:{AJ=AJ
*2;if(AJ<1){AJ=((AJ*AJ)*AJ)-((AJ*this.ArI)*Math.sin((AJ*180)*A.kw));AJ=AJ*0.5;}else{
AJ=2-AJ;AJ=((AJ*AJ)*AJ)-((AJ*this.ArI)*Math.sin((AJ*180)*A.kw));AJ=(2-AJ)*0.5;}}
break;case 16:AJ=((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At7)))*A.kw);break;case
17:{AJ=1-AJ;AJ=1-(((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At7)))*A.kw));}break;
case 18:{AJ=AJ*2;if(AJ<1){AJ=((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At7)))*A.
kw);AJ=AJ*0.5;}else{AJ=2-AJ;AJ=((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At7)))*
A.kw);AJ=(2-AJ)*0.5;}}break;case 19:{var Bx=this.Mg;var P=0;var FY=0;var Ks=Bx.Ov.
Get(0);var DN=1-AJ;while(DN>Ks){P=P+1;FY=Ks;Ks=Ks+Bx.Ov.Get(P);}AJ=(DN-FY)/(Ks-FY
);if(!P)AJ=1-(AJ*AJ);else{AJ=(2*AJ)-1;AJ=Bx.Ajf.Get(P)*(1-(AJ*AJ));}}break;case 20:{
var Bx=this.Mg;var P=0;var FY=0;var Ks=Bx.Ov.Get(0);while(AJ>Ks){P=P+1;FY=Ks;Ks=
Ks+Bx.Ov.Get(P);}AJ=(AJ-FY)/(Ks-FY);if(!P)AJ=AJ*AJ;else{AJ=(2*AJ)-1;AJ=1-(Bx.Ajf.
Get(P)*(1-(AJ*AJ)));}}break;case 21:{var Bx=this.Mg;var P=0;var FY=0;var Ks=Bx.Ov.
Get(0);var KY=AJ*2;var DN=KY-1;if(KY<1)DN=-DN;while(DN>Ks){P=P+1;FY=Ks;Ks=Ks+Bx.
Ov.Get(P);}DN=(DN-FY)/(Ks-FY);if(!P)DN=DN*DN;else{DN=(2*DN)-1;DN=1-(Bx.Ajf.Get(P
)*(1-(DN*DN)));}if(KY<1)AJ=0.5*(1-DN);else AJ=0.5*(1+DN);}break;default:if(this.
AnB){var KY=AJ;var AwY=1-KY;AJ=((AwY*KY)*(this.Om+1))+(KY*KY);}else if(this.AHk){
var KY=AJ;var AwY=1-KY;var A8p=KY*KY;var BsJ=AwY*AwY;AJ=(((BsJ*KY)*(this.Om+1))+((
AwY*A8p)*(this.TB+2)))+(A8p*KY);}}this.ArM(AJ);(B=this.Afn)?B[1].call(B[0],this):
null;},Buf:function(){var Ap=(this.timer.Bp-this.Df)|0;if(Ap<0)Ap=-Ap;var KV=this.
Ul;var NL=this.Ul+this.OH;var GA=this.OP+this.OH;var L9=false;var HK=this.VQ;if(
!this.DV&&(Ap>=NL)){this.DV=1;Ap=Ap-NL;this.Df=this.Df+NL;}if((this.DV>0)&&(Ap>=
GA)){var HJ=(Ap/GA)|0;this.DV=this.DV+HJ;Ap=Ap-(HJ*GA);this.Df=this.Df+(HJ*GA);}
if((this.DV>2)&&!this.LW)this.DV=1;if(this.DV>0)KV=this.OP;if((this.DV>=this.LW)&&(
this.LW>0)){L9=true;HK=0;}else if(Ap>=KV)HK=1-((Ap-KV)*this.AwC);else if(HK>=0)HK=
0;if(HK!==this.VQ){this.VQ=HK;this.AG0(HK);}return L9;},Bue:function(){var Ap=(this.
Df-this.timer.Bp)|0;var KV=this.Ul;var NL=this.Ul+this.OH;var GA=this.OP+this.OH;
var L9=false;var HK=this.VQ;if((this.DV>1)&&(Ap<0)){var HJ=(((-Ap+GA)-1)/GA)|0;if((
this.DV-HJ)<=0)HJ=this.DV-1;this.DV=this.DV-HJ;Ap=Ap+(HJ*GA);this.Df=this.Df+(HJ
*GA);}if(((this.DV===1)&&(Ap<0))&&(this.LW>0)){this.DV=0;Ap=Ap+NL;this.Df=this.Df+
NL;}if(((this.DV===1)&&(Ap<0))&&!this.LW){var HJ=(((-Ap+GA)-1)/GA)|0;Ap=Ap+(HJ*GA
);this.Df=this.Df+(HJ*GA);}if(this.DV>0)KV=this.OP;if(Ap<0){L9=true;HK=1;}else if(
Ap>=KV)HK=1-((Ap-KV)*this.AwC);else if(HK>=0)HK=1;if(HK!==this.VQ){this.VQ=HK;this.
AG0(HK);}return L9;},Bud:function(){var Ap=(this.Df-this.timer.Bp)|0;var KV=this.
Ul;var NL=this.Ul+this.OH;var GA=this.OP+this.OH;var L9=false;var HK=this.VQ;if((
this.DV>1)&&(Ap<0)){var HJ=(((-Ap+GA)-1)/GA)|0;if((this.DV-HJ)<=0)HJ=this.DV-1;this.
DV=this.DV-HJ;Ap=Ap+(HJ*GA);this.Df=this.Df+(HJ*GA);}if(((this.DV===1)&&(Ap<0))&&(
this.LW>0)){this.DV=0;Ap=Ap+NL;this.Df=this.Df+NL;}if(((this.DV===1)&&(Ap<0))&&!
this.LW){var HJ=(((-Ap+GA)-1)/GA)|0;Ap=Ap+(HJ*GA);this.Df=this.Df+(HJ*GA);}if(this.
DV>0)KV=this.OP;if(Ap<0){L9=true;HK=0;}else if(Ap>=KV)HK=(Ap-KV)*this.AwC;else if(
HK>=0)HK=0;if(HK!==this.VQ){this.VQ=HK;this.AG0(HK);}return L9;},Buc:function(){
var Ap=(this.timer.Bp-this.Df)|0;if(Ap<0)Ap=-Ap;var KV=this.Ul;var NL=this.Ul+this.
OH;var GA=this.OP+this.OH;var L9=false;var HK=this.VQ;if(!this.DV&&(Ap>=NL)){this.
DV=1;Ap=Ap-NL;this.Df=this.Df+NL;}if((this.DV>0)&&(Ap>=GA)){var HJ=(Ap/GA)|0;this.
DV=this.DV+HJ;Ap=Ap-(HJ*GA);this.Df=this.Df+(HJ*GA);}if((this.DV>2)&&!this.LW)this.
DV=1;if(this.DV>0)KV=this.OP;if((this.DV>=this.LW)&&(this.LW>0)){L9=true;HK=1;}else
if(Ap>=KV)HK=(Ap-KV)*this.AwC;else if(HK>=0)HK=1;if(HK!==this.VQ){this.VQ=HK;this.
AG0(HK);}return L9;},Ac4:function(E){if(this.APy===E)return;this.APy=E;if(!this.
Bw||!this.Ag0)return;if(E)this.R2=-1;else this.R2=1;this.Df=(this.timer.Asn()*2)-
this.Df;},ABj:function(E){if(E<0)E=0;if(E>1)E=1;this.AJN=E;},AA$:function(E){if(
E<1)E=1;if(E>10)E=10;this.AZO=E;this.Mg=null;},ABJ:function(E){if(E<1)E=1;if(E>10
)E=10;this.At7=E;},AA7:function(E){if(E<0)E=0;if(E>10)E=10;this.ArI=E;},Atw:function(
E){if(E<1)E=1;if(E>100)E=100;this.Ud=E;},ABX:function(E){if(this.AQg===E)return;
this.AQg=E;if(this.AfT===26){this.TB=E;this.AnB=(this.Om===this.TB)&&!!this.Om;this.
AHk=!this.AnB&&(this.Om!==this.TB);}},ABW:function(E){if(this.AQf===E)return;this.
AQf=E;if(this.AfT===26){this.Om=E;this.AnB=(this.Om===this.TB)&&!!this.Om;this.AHk=
!this.AnB&&(this.Om!==this.TB);}},UU:function(E){if(this.AfT===E)return;this.AfT=
E;this.Mg=null;switch(E){case 24:{this.Om=-1.1;this.TB=1.1;}break;case 22:{this.
Om=-1;this.TB=-2;}break;case 23:{this.Om=2;this.TB=1;}break;case 25:{this.Om=1.1;
this.TB=-1.1;}break;case 0:{this.Om=0;this.TB=0;}break;default:{this.Om=this.AQf;
this.TB=this.AQg;}}this.AnB=(this.Om===this.TB)&&!!this.Om;this.AHk=!this.AnB&&(
this.Om!==this.TB);},IG:function(E){if(E<0)E=0;this.LW=E;},FK:function(E){if(E<15
)E=15;this.OH=E;this.AwC=1/E;},Aab:function(E){if(E<0)E=0;this.OP=E;},Aim:function(
E){if(E<0)E=0;this.Ul=E;},An:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&
!!this.timer){A.zl([this,this.Lz],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(C.AeU);A.y_([this,this.Lz],this.timer,0);this.Ag0=0;A.ow([this,
this.Lz],this);}},ArM:function(Ys){},Aur:function(H){this.An(false);},ACX:function(
H){if(this.Bw)this.An(false);this.An(true);},_Init:function(aArg){this.__proto__=
C.EE;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.Mg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pt)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Rn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Afn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.FE={Q:null,AY:0,BX:255,Ci:0,ArM:function(Ys){var F;this.AY=this.Ci+(Math.round((
this.BX-this.Ci)*Ys)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AY));},_Init:function(
aArg){C.EE._Init.call(this,aArg);this.__proto__=C.FE;},_Mark:function(D){var B;C.
EE._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Effects::Int32Effect"};C.ACi={Q:null,AY:A.vw,BX:B4,Ci:A.vw,ArM:function(
Ys){var F;var FA=this.Ci[0];var C9=this.Ci[1];FA=FA+(Math.round((this.BX[0]-FA)*
Ys)|0);C9=C9+(Math.round((this.BX[1]-C9)*Ys)|0);this.AY=[FA,C9];if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AY));},_Init:function(aArg){C.EE._Init.call(this,aArg);this.
__proto__=C.ACi;},_Mark:function(D){var B;C.EE._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::PointEffect"};C.AI8={
Q:null,AY:0,BX:0xFFFFFFFF,Ci:0,ArM:function(Ys){var F;var Ot=this.Ci&0xFF;var YF=(
this.Ci>>8)&0xFF;var Ajj=(this.Ci>>16)&0xFF;var Aje=(this.Ci>>24)&0xFF;Ot=Ot+((((
this.BX&0xFF)-Ot)*Ys)|0);YF=YF+(((((this.BX>>8)&0xFF)-YF)*Ys)|0);Ajj=Ajj+(((((this.
BX>>16)&0xFF)-Ajj)*Ys)|0);Aje=Aje+(((((this.BX>>24)&0xFF)-Aje)*Ys)|0);if(Ot<0)Ot=
0;if(Ot>255)Ot=255;if(YF<0)YF=0;if(YF>255)YF=255;if(Ajj<0)Ajj=0;if(Ajj>255)Ajj=255;
if(Aje<0)Aje=0;if(Aje>255)Aje=255;this.AY=(Ot&0xFF)|((YF&0xFF)<<8)|((Ajj&0xFF)<<
16)|((Aje&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AY));},_Init:function(
aArg){C.EE._Init.call(this,aArg);this.__proto__=C.AI8;},_Mark:function(D){var B;
C.EE._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Effects::ColorEffect"};C.Mo={AY:0,BX:1,Ci:0,ArM:function(Ys){this.
AY=this.Ci+((this.BX-this.Ci)*Ys);},_Init:function(aArg){C.EE._Init.call(this,aArg
);this.__proto__=C.Mo;},_className:"Effects::FloatEffect"};C.Y$={timer:null,Q:null
,DV:0,Df:0,OH:1000,OP:1000,Ul:0,Bw:false,Ci:false,BX:true,Lz:function(H){var F;if(
!this.timer)return;if(this.DV<0){this.Df=this.timer.Bp;this.DV=0;}var Ap=(this.timer.
Bp-this.Df)|0;var NL=this.Ul+this.OH;var GA=this.OP+this.OH;var KV=this.Ul;var I9=
this.DV;if(!I9&&(Ap>=NL)){I9=1;Ap=Ap-NL;}if((I9>0)&&(Ap>=GA)){var HJ=(Ap/GA)|0;Ap=
Ap-(HJ*GA);I9=I9+HJ;}if(I9>2)I9=1;if(I9!==this.DV){this.Df=this.timer.Bp-(((B=Ap
)<0)?B+0x100000000:B);this.DV=I9;}if(I9>0)KV=this.OP;if(!!this.Q){if(Ap>=KV)(F=this.
Q,F[2].call(F[0],this.Ci));if((Ap<KV)&&(I9>0))(F=this.Q,F[2].call(F[0],this.BX));
}},FK:function(E){if(E<100)E=100;this.OH=E;},Aab:function(E){if(E<0)E=0;this.OP=
E;},Aim:function(E){if(E<0)E=0;this.Ul=E;},An:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.zl([this,this.Lz],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(C.AeU);A.y_([this,this.Lz],this.timer,0);this.
DV=-1;}},_Init:function(aArg){this.__proto__=C.Y$;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.LL={Ow:null,AG:null,Af:null
,Aa:null,O:null,AGC:null,AXx:null,Aif:null,Db:true,Bw:true,AaE:true,Aha:false,Ahi:
true,XS:true,P8:true,LJ:function(){if(!!this.Ow)this.Ow.LJ();},AsQ:function(){return true;
},Xz:function(){},Rv:function(){this.LJ();},_Init:function(aArg){this.__proto__=
C.LL;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.Ow)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AGC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AXx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aif)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.ApV={Apo:A.vw
,L_:false,AsQ:function(){return this.L_;},Xz:function(){if(!this.Db&&!!this.O.Aa
)this.O.W(false);if((!this.Db&&this.P8)&&!!this.O.Aa)this.O.Aa.HA(this.O);if(!this.
Bw)this.O.An(false);},Rv:function(){if(this.Bw)this.O.An(true);if((this.Db||this.
Aha)&&!this.O.Aa){this.O.W(false);this.Aa.J(this.O,0);}if(this.Db&&this.XS)this.
O.Aa.S4(this.O);if(this.Db&&this.Ahi)this.O.Aa.A8(this.O);if(this.Db&&!this.AaE)
this.O.G(A.aaM(this.O.M,this.Apo));if(this.Db){this.O.DF(255);this.O.W(true);}if(
!this.Db&&(this.Aa.A6===this.O))this.Aa.A8(null);this.L_=true;this.LJ();},_Init:
function(aArg){C.LL._Init.call(this,aArg);this.__proto__=C.ApV;},_className:"Effects::VisibilityFader"
};C.At3={EE:null,L_:false,AnE:false,AsQ:function(){return this.L_;},Xz:function(
){if(this.Db)this.O.DF(this.EE.BX);if(!this.Db&&!this.O.Gq)this.O.W(false);if((!
this.Db&&this.P8)&&!!this.O.Aa)this.O.Aa.HA(this.O);if(!this.Bw)this.O.An(false);
},Rv:function(){var B;if(this.AaE){if(this.O.Fe()&&!!this.O.Aa)this.EE.Ci=this.O.
Gq;else this.EE.Ci=0;}var AwF=((!this.O.Aa||!this.O.Gq)||!this.O.Fe())||(((B=A.kz(
this.O.M,[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AwG=((
!this.Db&&((!this.O.Aa||!this.O.Fe())||this.P8))||!this.EE.BX)||(((B=A.kz(this.O.
M,[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AwF&&AwG){
this.EE.Ci=0;this.EE.BX=0;}this.AnE=this.O.ANS();if(this.Bw)this.O.An(true);if((
this.Db||this.Aha)&&!this.O.Aa){this.O.W(false);this.Aa.J(this.O,0);}if(this.Db&&
this.XS)this.O.Aa.S4(this.O);if(this.Db&&this.Ahi)this.O.Aa.A8(this.O);if(!this.
Db&&(this.Aa.A6===this.O))this.Aa.A8(null);if(this.Db&&!this.O.Fe()){this.O.DF(this.
EE.Ci);this.O.W(true);}if(!this.Db&&((!this.O.Aa||!this.O.Fe())||!this.O.Gq)){this.
L_=true;this.LJ();return;}if(!this.Db&&(this.EE.Ci===this.EE.BX))this.O.DF(this.
EE.Ci);if(this.O.Gq===this.EE.BX){this.L_=true;this.LJ();return;}if(this.EE.Ci===
this.EE.BX){this.L_=true;this.LJ();return;}if(!this.EE.LW)this.EE.IG(1);this.EE.
Q=[B=this.O,B.Atb,B.AUS];this.EE.Ac4(false);this.EE.AiJ=false;this.EE.Rn=[this,this.
AgG];this.EE.Afn=null;this.EE.An(true);},AgG:function(H){this.L_=true;this.LJ();
},_Init:function(aArg){C.LL._Init.call(this,aArg);C.FE._Init.call(this.EE={I:this
},0);this.__proto__=C.At3;},_Done:function(){this.__proto__=C.LL;this.EE._Done();
C.LL._Done.call(this);},_ReInit:function(){C.LL._ReInit.call(this);this.EE._ReInit(
);},_Mark:function(D){var B;C.LL._Mark.call(this,D);if((B=this.EE)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Ac9={B9:null,DT:null,AbY:false
,L_:false,AnE:false,AsQ:function(){return this.L_;},Xz:function(){if(this.Db){this.
O.DF(this.B9.BX);this.O.G(A.aaM(this.O.M,this.DT.BX));}if(!this.Db&&!this.O.Gq)this.
O.W(false);if((!this.Db&&this.P8)&&!!this.O.Aa)this.O.Aa.HA(this.O);if(this.AbY)
this.O.AoT(this.AnE);if(!this.Bw)this.O.An(false);},Rv:function(){var B;if(this.
AaE){if(this.O.Fe()&&!!this.O.Aa)this.B9.Ci=this.O.Gq;else this.B9.Ci=0;this.DT.
Ci=this.O.M.slice(0,2);}var AwF=((!this.O.Aa||!this.O.Gq)||!this.O.Fe())||(((B=A.
kz(this.O.M,[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
AwG=((!this.Db&&((!this.O.Aa||!this.O.Fe())||this.P8))||!this.B9.BX)||(((B=A.kz(
A.aam([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.DT.BX),[0,0,(B=this.Aa.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AwF&&AwG){this.B9.Ci=0;this.B9.BX=0;this.
DT.Ci=this.DT.BX;}this.AnE=this.O.ANS();if(this.Bw)this.O.An(true);if((this.Db||
this.Aha)&&!this.O.Aa){this.O.W(false);this.Aa.J(this.O,0);}if(this.Db&&this.XS)
this.O.Aa.S4(this.O);if(this.Db&&this.Ahi)this.O.Aa.A8(this.O);if(!this.Db&&(this.
Aa.A6===this.O))this.Aa.A8(null);if(this.Db&&!this.O.Fe()){this.O.G(A.aaM(this.O.
M,this.DT.Ci));this.O.DF(this.B9.Ci);this.O.W(true);}if(!this.Db&&((!this.O.Aa||
!this.O.Fe())||!this.O.Gq)){this.L_=true;this.LJ();return;}if(!this.Db&&A.z8(this.
DT.Ci,this.DT.BX))this.O.G(A.aaM(this.O.M,this.DT.Ci));if(!this.Db&&(this.B9.Ci===
this.B9.BX))this.O.DF(this.B9.Ci);if((this.O.Gq===this.B9.BX)&&A.z8(this.O.M.slice(
0,2),this.DT.BX)){this.L_=true;this.LJ();return;}if((this.B9.Ci===this.B9.BX)&&A.
z8(this.DT.Ci,this.DT.BX)){this.L_=true;this.LJ();return;}if(!this.B9.LW)this.B9.
IG(1);if(!this.DT.LW)this.DT.IG(1);if(this.AbY)this.O.AoT(true);this.DT.Q=null;this.
DT.Ac4(false);this.DT.AiJ=false;this.DT.Rn=[this,this.AgG];this.DT.Afn=[this,this.
Aw6];this.B9.Q=[B=this.O,B.Atb,B.AUS];this.B9.Ac4(false);this.B9.AiJ=false;this.
B9.Rn=[this,this.AgG];this.B9.Afn=null;this.DT.An(!A.z8(this.DT.Ci,this.DT.BX));
this.B9.An(this.B9.Ci!==this.B9.BX);},AgG:function(H){this.L_=!this.B9.Bw&&!this.
DT.Bw;this.LJ();},Aw6:function(H){this.O.G(A.aaM(this.O.M,this.DT.AY));},_Init:function(
aArg){C.LL._Init.call(this,aArg);C.FE._Init.call(this.B9={I:this},0);C.ACi._Init.
call(this.DT={I:this},0);this.__proto__=C.Ac9;},_Done:function(){this.__proto__=
C.LL;this.B9._Done();this.DT._Done();C.LL._Done.call(this);},_ReInit:function(){
C.LL._ReInit.call(this);this.B9._ReInit();this.DT._ReInit();},_Mark:function(D){
var B;C.LL._Mark.call(this,D);if((B=this.B9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.DT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
ApW={AbD:null,B9:null,Gu:null,UF:null,Fi:null,S1:A.vw,Aix:A.vw,L_:false,AnE:false
,AsQ:function(){return this.L_;},Xz:function(){if(this.Db){this.O.DF(this.B9.BX);
this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.S1));this.O.W(true);}if(!this.
Db&&!this.B9.BX){this.O.DF(0);this.O.W(false);}if(((!this.Db&&(this.B9.BX>0))&&!
!this.O.Aa)&&!this.P8){this.O.DF(this.B9.BX);this.O.G(A.aam(A.aal(this.O.M,A.zT(
this.O.M)),this.S1));this.O.W(true);}if((!this.Db&&this.P8)&&!!this.O.Aa)this.O.
Aa.HA(this.O);this.O.AoT(this.AnE);if(!!this.AbD)this.Aa.HA(this.AbD);if(!this.Bw
)this.O.An(false);},Rv:function(){var B;if(this.AaE){if(this.O.Fe()&&!!this.O.Aa
)this.B9.Ci=this.O.Gq;else this.B9.Ci=0;this.Aix=A.zT(this.O.M);}var AwF=((!this.
O.Aa||!this.O.Gq)||!this.O.Fe())||(((B=A.kz(this.O.M,[0,0,(B=this.Aa.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AwG=((!this.Db&&((!this.O.Aa||!this.O.
Fe())||this.P8))||!this.B9.BX)||(((B=A.kz(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.
S1),[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AwF&&AwG
){this.B9.Ci=0;this.B9.BX=0;this.Aix=this.S1;this.UF.A1H();}this.AnE=this.O.ANS(
);if(this.Bw)this.O.An(true);if((this.Db||this.Aha)&&!this.O.Aa){this.O.W(false);
this.Aa.J(this.O,0);}if(this.Db&&this.XS)this.O.Aa.S4(this.O);if(this.Db&&this.Ahi
)this.O.Aa.A8(this.O);if(!this.Db&&(this.Aa.A6===this.O))this.Aa.A8(null);if(this.
Db&&!this.O.Fe())this.O.DF(this.B9.Ci);if((!this.Db&&A.z8(this.Aix,this.S1))&&this.
UF.AAe())this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.Aix));if(!this.Db&&(
this.B9.Ci===this.B9.BX))this.O.DF(this.B9.Ci);if(!this.Db&&((!this.O.Aa||!this.
O.Fe())||!this.O.Gq)){this.L_=true;this.LJ();return;}if(((this.Db&&(this.O.Gq===
this.B9.BX))&&A.z8(A.zT(this.O.M),this.S1))&&this.O.Fe()){this.L_=true;this.LJ();
return;}if(((!this.Db&&(this.O.Gq===this.B9.BX))&&A.z8(A.zT(this.O.M),this.S1))&&
this.UF.AAe()){this.L_=true;this.LJ();return;}if(((this.B9.Ci===this.B9.BX)&&A.z8(
this.Aix,this.S1))&&this.UF.AAe()){this.L_=true;this.LJ();return;}this.O.AoT(true
);this.O.W(false);this.AbD=A._NewObject(A.abh.AQB,0);this.AbD.BfV(this.O);this.AbD.
DF(this.B9.Ci);this.AbD.BgK(A.zT([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.O.Aa.
AHY(this.AbD,this.O);if(!this.B9.LW)this.B9.IG(1);if(!this.Gu.LW)this.Gu.IG(1);this.
Gu.Ac4(false);this.Gu.AiJ=false;this.Gu.Rn=[this,this.AgG];this.Gu.Afn=[this,this.
Aw6];if(this.Db){this.Gu.Ci=0;this.Gu.BX=1;}else{this.Gu.Ci=1;this.Gu.BX=0;}this.
B9.Q=[B=this.AbD,B.Atb,B.DF];this.B9.Ac4(false);this.B9.AiJ=false;this.B9.Rn=[this
,this.AgG];this.B9.Afn=null;this.Gu.An(!A.z8(this.Aix,this.S1)||!this.UF.AAe());
this.B9.An(this.B9.Ci!==this.B9.BX);},AgG:function(H){this.L_=!this.B9.Bw&&!this.
Gu.Bw;this.LJ();},Aw6:function(H){var B;var AxR=A.aaj(this.S1,this.Aix);if(!this.
Db)AxR=[-AxR[0],-AxR[1]];this.Fi.A1H();this.Fi.AeX=this.UF.AeX;this.Fi.BiY(AxR[0
],AxR[1],0);this.Fi.Bct(this.UF,this.Fi,this.Gu.AY);if(this.Db)this.AbD.ADl(this.
Aix,this.Fi);else this.AbD.ADl(this.S1,this.Fi);},_Init:function(aArg){C.LL._Init.
call(this,aArg);C.FE._Init.call(this.B9={I:this},0);C.Mo._Init.call(this.Gu={I:this
},0);A.Graphics.AuH._Init.call(this.UF={I:this},0);A.Graphics.AuH._Init.call(this.
Fi={I:this},0);this.__proto__=C.ApW;},_Done:function(){this.__proto__=C.LL;this.
B9._Done();this.Gu._Done();this.UF._Done();this.Fi._Done();C.LL._Done.call(this);
},_ReInit:function(){C.LL._ReInit.call(this);this.B9._ReInit();this.Gu._ReInit();
this.UF._ReInit();this.Fi._ReInit();},_Mark:function(D){var B;C.LL._Mark.call(this
,D);if((B=this.AbD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Fi)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Effects::WarpFader"};C.Qe={Q0:function(){return null;},QZ:function(){return null;
},Ab4:function(){return this.Q0();},Ab3:function(){return this.QZ();},_Init:function(
aArg){this.__proto__=C.Qe;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.APU={Q0:function(){var Ak=A._NewObject(C.ApV,0);Ak.Db=true;Ak.Bw=true;Ak.Ahi=false;
Ak.XS=true;Ak.AaE=false;Ak.Aif=[this,this.Anb];return Ak;},QZ:function(){var Ak=
A._NewObject(C.ApV,0);Ak.Db=false;Ak.Bw=false;Ak.P8=true;return Ak;},Ab4:function(
){var Ak=C.Qe.Ab4.call(this);Ak.XS=false;Ak.Bw=true;return Ak;},Ab3:function(){var
Ak=A._NewObject(C.ApV,0);Ak.Db=false;Ak.Bw=true;Ak.Aha=true;Ak.P8=false;return Ak;
},Anb:function(H){var B;var Ak=(C.ApV.isPrototypeOf(H)?H:null);var Ba=[0,0,(B=Ak.
Aa.M)[2]-B[0],B[3]-B[1]];var CW=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(
0,2);pos=[(Ba[0]+(((Ba[2]-Ba[0])/2)|0))-((CW[0]/2)|0),pos[1]];pos=[pos[0],(Ba[1]+(((
Ba[3]-Ba[1])/2)|0))-((CW[1]/2)|0)];Ak.Apo=pos;},_Init:function(aArg){C.Qe._Init.
call(this,aArg);this.__proto__=C.APU;},_className:"Effects::ShowHideTransition"};
C.Acc={Ay3:500,Q0:function(){var Ak=A._NewObject(C.Ac9,0);Ak.Db=true;Ak.Bw=true;
Ak.Ahi=false;Ak.XS=true;Ak.AaE=true;Ak.AbY=false;Ak.Aif=[this,this.Anb];Ak.B9.FK(
this.Ay3);Ak.B9.Ci=0;Ak.B9.BX=255;Ak.DT.FK(this.Ay3);Ak.DT.UU(23);return Ak;},QZ:
function(){var Ak=A._NewObject(C.At3,0);Ak.Db=false;Ak.Bw=false;Ak.P8=true;Ak.AaE=
true;Ak.EE.Ci=255;Ak.EE.BX=0;Ak.EE.FK(this.Ay3);return Ak;},Ab4:function(){var Ak=
C.Qe.Ab4.call(this);Ak.XS=false;Ak.Bw=true;return Ak;},Ab3:function(){var Ak=C.Qe.
Ab3.call(this);Ak.Aha=true;Ak.P8=false;Ak.Bw=true;return Ak;},Anb:function(H){var
B;var Ak=(C.Ac9.isPrototypeOf(H)?H:null);var Ba=[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[
1]];var CW=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(0,2);pos=[(Ba[0]+(((Ba[
2]-Ba[0])/2)|0))-((CW[0]/2)|0),pos[1]];pos=[pos[0],(Ba[1]+(((Ba[3]-Ba[1])/2)|0))-((
CW[1]/2)|0)];Ak.DT.BX=pos;if(((!Ak.O.Aa||!Ak.O.Fe())||!Ak.O.Gq)||(((B=A.kz(Ak.O.
M,[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ak.O.G(A.aaM(Ak.
O.M,pos));},_Init:function(aArg){C.Qe._Init.call(this,aArg);this.__proto__=C.Acc;
},_className:"Effects::FadeInOutTransition"};C.ACU={JH:0x12,Ar0:0,AbY:false,Q0:function(
){var Ak=A._NewObject(C.Ac9,0);Ak.Db=true;Ak.Bw=true;Ak.Ahi=false;Ak.XS=true;Ak.
AaE=true;Ak.AbY=this.AbY;Ak.Aif=[this,this.Anb];Ak.B9.FK(500);Ak.B9.Aim(0);Ak.B9.
Ci=0;Ak.B9.BX=255;Ak.DT.FK(500);Ak.DT.UU(23);Ak.DT.ABW(0);Ak.DT.ABX(0);Ak.DT.Atw(
3);Ak.DT.AA7(0.5);Ak.DT.ABJ(3);Ak.DT.AA$(3);Ak.DT.ABj(0.5);return Ak;},QZ:function(
){var Ak=A._NewObject(C.Ac9,0);Ak.Db=false;Ak.Bw=false;Ak.P8=true;Ak.AaE=true;Ak.
AbY=this.AbY;Ak.Aif=[this,this.AXF];Ak.B9.Ci=255;Ak.B9.BX=0;Ak.B9.FK(500);Ak.B9.
Aim(0);Ak.DT.FK(500);Ak.DT.UU(23);Ak.DT.ABW(0);Ak.DT.ABX(0);Ak.DT.Atw(3);Ak.DT.AA7(
0.5);Ak.DT.ABJ(3);Ak.DT.AA$(3);Ak.DT.ABj(0.5);return Ak;},Ab4:function(){var Ak=
C.Qe.Ab4.call(this);Ak.XS=false;Ak.Bw=true;return Ak;},Ab3:function(){var Ak=C.Qe.
Ab3.call(this);Ak.Aha=true;Ak.P8=false;Ak.Bw=true;return Ak;},Anb:function(H){var
B;var Ak=(C.Ac9.isPrototypeOf(H)?H:null);var Bm=this.JH;var Ba=[0,0,(B=Ak.Aa.M)[
2]-B[0],B[3]-B[1]];var CW=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(0,2);if(((
Bm&0x4)===0x4))pos=[Ba[2]-CW[0],pos[1]];else if(((Bm&0x2)===0x2))pos=[(Ba[0]+(((
Ba[2]-Ba[0])/2)|0))-((CW[0]/2)|0),pos[1]];if(((Bm&0x20)===0x20))pos=[pos[0],Ba[3
]-CW[1]];else if(((Bm&0x10)===0x10))pos=[pos[0],(Ba[1]+(((Ba[3]-Ba[1])/2)|0))-((
CW[1]/2)|0)];Ak.DT.BX=pos;if(((!Ak.O.Aa||!Ak.O.Fe())||!Ak.O.Gq)||(((B=A.kz(Ak.O.
M,[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var G6=[(B=Ak.
Aa.M)[2]-B[0],B[3]-B[1]];switch(this.Ar0){case 5:pos=[pos[0],-CW[1]];break;case 3:{
pos=[pos[0],-CW[1]];pos=[G6[0],pos[1]];}break;case 8:pos=[-CW[0],-CW[1]];break;case
2:pos=[G6[0],pos[1]];break;case 7:pos=[-CW[0],pos[1]];break;case 4:pos=[pos[0],G6[
1]];break;case 1:{pos=[pos[0],G6[1]];pos=[G6[0],pos[1]];}break;case 6:{pos=[pos[
0],G6[1]];pos=[-CW[0],pos[1]];}break;default:;}Ak.O.G(A.aaM(Ak.O.M,pos));}},AXF:
function(H){var B;var Ak=(C.Ac9.isPrototypeOf(H)?H:null);var pos=Ak.O.M.slice(0,
2);var CW=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var G6=[(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]];
switch(this.Ar0){case 5:pos=[pos[0],G6[1]];break;case 3:{pos=[pos[0],G6[1]];pos=[-
CW[0],pos[1]];}break;case 8:{pos=[pos[0],G6[1]];pos=[G6[0],pos[1]];}break;case 2:
pos=[-CW[0],pos[1]];break;case 7:pos=[G6[0],pos[1]];break;case 4:pos=[pos[0],-CW[
1]];break;case 1:pos=[-CW[0],-CW[1]];break;case 6:{pos=[pos[0],-CW[1]];pos=[G6[0
],pos[1]];}break;default:;}Ak.DT.BX=pos;},_Init:function(aArg){C.Qe._Init.call(this
,aArg);this.__proto__=C.ACU;},_className:"Effects::SlideTransition"};C.AfH={Q0:function(
){var Ak=A._NewObject(C.ApW,0);Ak.Db=true;Ak.Bw=true;Ak.Ahi=false;Ak.XS=true;Ak.
AaE=true;Ak.Aif=[this,this.Anb];Ak.B9.FK(500);Ak.B9.Aim(0);Ak.B9.Ci=0;Ak.B9.BX=255;
Ak.Gu.FK(500);Ak.Gu.UU(23);Ak.Gu.ABW(0);Ak.Gu.ABX(0);Ak.Gu.Atw(3);Ak.Gu.AA7(0.5);
Ak.Gu.ABJ(3);Ak.Gu.AA$(3);Ak.Gu.ABj(0.5);Ak.UF.Adg(0.5,0.5,1);return Ak;},QZ:function(
){var Ak=A._NewObject(C.ApW,0);Ak.Db=false;Ak.Bw=false;Ak.P8=true;Ak.AaE=true;Ak.
Aif=[this,this.AXF];Ak.B9.Ci=255;Ak.B9.BX=0;Ak.B9.FK(500);Ak.B9.Aim(0);Ak.Gu.FK(
500);Ak.Gu.UU(23);Ak.Gu.ABW(0);Ak.Gu.ABX(0);Ak.Gu.Atw(3);Ak.Gu.AA7(0.5);Ak.Gu.ABJ(
3);Ak.Gu.AA$(3);Ak.Gu.ABj(0.5);Ak.UF.Adg(0.5,0.5,1);return Ak;},Ab4:function(){var
Ak=C.Qe.Ab4.call(this);Ak.XS=false;Ak.Bw=true;return Ak;},Ab3:function(){var Ak=
C.Qe.Ab3.call(this);Ak.Aha=true;Ak.P8=false;Ak.Bw=true;return Ak;},Anb:function(
H){var B;var Ak=(C.ApW.isPrototypeOf(H)?H:null);var Ba=[0,0,(B=Ak.Aa.M)[2]-B[0],
B[3]-B[1]];var CW=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(0,2);pos=[(Ba[
0]+(((Ba[2]-Ba[0])/2)|0))-((CW[0]/2)|0),pos[1]];pos=[pos[0],(Ba[1]+(((Ba[3]-Ba[1
])/2)|0))-((CW[1]/2)|0)];Ak.S1=A.aak(pos,[(CW[0]/2)|0,(CW[1]/2)|0]);if(((!Ak.O.Aa||
!Ak.O.Fe())||!Ak.O.Gq)||(((B=A.kz(Ak.O.M,[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ak.O.G(A.aaM(Ak.O.M,A.aaj(Ak.S1,A.zT([0,0,(B=Ak.O.M)[2]-
B[0],B[3]-B[1]]))));},AXF:function(H){var Ak=(C.ApW.isPrototypeOf(H)?H:null);Ak.
S1=A.zT(Ak.O.M);},_Init:function(aArg){C.Qe._Init.call(this,aArg);this.__proto__=
C.AfH;},_className:"Effects::ScaleTransition"};C.AfT={BwM:0,Bxq:1,Bxs:2,Bxr:3,Bwd:
4,Bwf:5,Bwe:6,BxV:7,BxX:8,BxW:9,BvM:10,BvO:11,BvN:12,Bvs:13,Bvu:14,Bvt:15,Bv6:16
,Bv8:17,Bv7:18,BvD:19,BvF:20,BvE:21,Bv5:22,Bwh:23,Bv4:24,Bwi:25,BvT:26};C.BvZ={AY_:
0x1,AY9:0x2,AY$:0x4,AZc:0x8,AZb:0x10,AZa:0x20};C.AJM={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AJM;},_className:"Effects::EffectTimerClass"};C.
AeU={_Init:function(){C.AJM._Init.call(this,0);this.P4(15);this.An(true);},_variants:
function(){return this;},_this:null};C.AC9={Ov:A.aan(12,0,null),Ajf:A.aan(12,0,null
),_Init:function(aArg){(this.Ov=[]).__proto__=C.AC9.Ov;(this.Ajf=[]).__proto__=C.
AC9.Ajf;this.__proto__=C.AC9;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};
C.Ay$={BU:null,BZ:null,A2d:function(Aqs){var Ak=this.BZ;while(!!Ak){Ak.Xz();Ak.O.
S=Ak.O.S&~0x40000;Ak=Ak.Af;}Ak=this.BZ;while(!!Ak){A.ow(Ak.AXx,Ak);Ak=Ak.Af;}},A2c:
function(Aqs){var Ak=this.BZ;while(!!Ak){A.ow(Ak.AGC,Ak);Ak=Ak.Af;}this.BZ=null;
this.BU=null;},Rv:function(Aqs){var B;if(!this.BZ)this.LJ();var Ak=this.BZ;while(
!!Ak){Ak.O.S=(Ak.O.S|0x40000)&~0x20000;Ak.O.Anh=null;Ak=Ak.Af;}Ak=this.BZ;while(
!!Ak){(B=Ak.Aif)?B[1].call(B[0],Ak):null;Ak.Rv();Ak=Ak.Af;}},LJ:function(){var Ak=
this.BZ;while(!!Ak&&Ak.AsQ())Ak=Ak.Af;if(!Ak)A.Core.AiK.LJ.call(this);},BhB:function(
Fh){if(!Fh)return;if(this.AML())throw new Error(BI);if(Fh.Ow!==this)throw new Error(
EH);if(!!Fh.Af)Fh.Af.AG=Fh.AG;else this.BU=Fh.AG;if(!!Fh.AG)Fh.AG.Af=Fh.Af;else this.
BZ=Fh.Af;Fh.Ow=null;Fh.Af=null;Fh.AG=null;if(!!Fh.O)Fh.O.Anh=null;A.ow(Fh.AGC,Fh
);if(!this.BZ)this.AbZ();},AY4:function(Fh){if(!Fh)return;if(this.AML())throw new
Error(Gv);if(!!Fh.Ow)throw new Error(I5);Fh.AG=this.BU;Fh.Af=null;if(!!this.BU)this.
BU.Af=Fh;else this.BZ=Fh;this.BU=Fh;Fh.Ow=this;},_Init:function(aArg){A.Core.AiK.
_Init.call(this,aArg);this.__proto__=C.Ay$;},_Mark:function(D){var B;A.Core.AiK.
_Mark.call(this,D);if((B=this.BU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BZ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::FaderTask"};C.Aui={
_Init:function(){C.APU._Init.call(this,0);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.FE.__proto__=C.EE;C.ACi.__proto__=C.EE;C.AI8.__proto__=C.EE;
C.Mo.__proto__=C.EE;C.ApV.__proto__=C.LL;C.At3.__proto__=C.LL;C.Ac9.__proto__=C.
LL;C.ApW.__proto__=C.LL;C.APU.__proto__=C.Qe;C.Acc.__proto__=C.Qe;C.ACU.__proto__=
C.Qe;C.AfH.__proto__=C.Qe;C.AJM.__proto__=A.Core.Timer;C.Ay$.__proto__=A.Core.AiK;
};C._ReInit=function(){var B;if((B=C.AeU._this))B._ReInit();if((B=C.Aui._this))B.
_ReInit();};C.Dq=function(D){var B;if((B=C.AeU._this)&&(B._cycle!=D))B._Done(C.AeU.
_this=null);if((B=C.Aui._this)&&(B._cycle!=D))B._Done(C.Aui._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */