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
);if(index.acl)throw new Error("The unit file 'Effects.js' included twice!");index.
acl=(function(){var A=index;var C={};
var Cc=[100,100];var BF="Trying to remove a fader from a task, which is actually running";
var EZ="The fader doesn\'t belong to this task";var Hj="Trying to add a fader to a task, which is actually running";
var I$="The fader belongs already to a task";
C.EV={MX:null,timer:null,Qm:null,Su:null,Ag_:null,Tc:0,Ai2:0,U1:0,O6:0,AzN:0.001,
Qi:0,Ea:0,Du:0,ANR:0.5,A5l:3,Axa:3,Auv:0.5,VH:3,AUZ:0,AUY:0,JL:0,Po:1000,Px:0,VQ:
0,AhD:0,By:false,AkM:false,AT_:false,Ap0:false,AK$:false,Mc:function(G){var B;if(
!this.timer)return;if(!this.Ai2){if(this.AT_)this.Ai2=-1;else this.Ai2=1;this.Tc=
this.Ai2;this.Du=this.timer.Bu;this.Ea=0;this.Qi=-1;}var Kz;if((this.Ai2>0)&&(this.
Tc>0))Kz=this.BA9();else if((this.Ai2<0)&&(this.Tc<0))Kz=this.BBa();else if(this.
Ai2>0)Kz=this.BA_();else Kz=this.BA$();if(Kz){this.Ar(false);(B=this.Qm)?B[1].call(
B[0],this):null;(B=this.Su)?B[1].call(B[0],this):null;}},AKG:function(AN){var B;
if(!this.MX&&(((this.AhD===19)||(this.AhD===20))||(this.AhD===21))){var AJg=this.
A5l+1;var ByB=Math.sqrt(this.ANR);var RE=0.5;var P;this.MX=A._NewObject(C.AGO,0);
this.MX.Pe.Set(0,1);this.MX.Ale.Set(0,1);for(P=1;P<AJg;P=P+1){this.MX.Pe.Set(P,this.
MX.Pe.Get(P-1)*ByB);this.MX.Ale.Set(P,this.MX.Ale.Get(P-1)*this.ANR);RE=RE+this.
MX.Pe.Get(P);}var Bzo=1/RE;this.MX.Pe.Set(0,0.5);RE=0;for(P=0;P<AJg;P=P+1){this.
MX.Pe.Set(P,this.MX.Pe.Get(P)*Bzo);RE=RE+this.MX.Pe.Get(P);}this.MX.Pe.Set(AJg,this.
MX.Pe.Get(AJg)+(1-RE));}if(this.AkM){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhD){case 1:AN=Math.pow(AN,this.VH);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VH);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VH)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VH))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VH*AN)-1)/(Math.
pow(2.718,this.VH)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VH*AN)-1)
/(Math.pow(2.718,this.VH)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VH*AN)-1)/(Math.pow(2.718,this.VH)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VH*AN)-1)/(Math.pow(2.718,this.VH)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.Auv)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.Auv)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.Auv)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.Auv)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axa)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axa)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axa)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axa)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BD=this.MX;var P=0;var Gz=0;var K5=BD.Pe.
Get(0);var D6=1-AN;while(D6>K5){P=P+1;Gz=K5;K5=K5+BD.Pe.Get(P);}AN=(D6-Gz)/(K5-Gz
);if(!P)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BD.Ale.Get(P)*(1-(AN*AN));}}break;case 20:{
var BD=this.MX;var P=0;var Gz=0;var K5=BD.Pe.Get(0);while(AN>K5){P=P+1;Gz=K5;K5=
K5+BD.Pe.Get(P);}AN=(AN-Gz)/(K5-Gz);if(!P)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BD.Ale.
Get(P)*(1-(AN*AN)));}}break;case 21:{var BD=this.MX;var P=0;var Gz=0;var K5=BD.Pe.
Get(0);var LJ=AN*2;var D6=LJ-1;if(LJ<1)D6=-D6;while(D6>K5){P=P+1;Gz=K5;K5=K5+BD.
Pe.Get(P);}D6=(D6-Gz)/(K5-Gz);if(!P)D6=D6*D6;else{D6=(2*D6)-1;D6=1-(BD.Ale.Get(P
)*(1-(D6*D6)));}if(LJ<1)AN=0.5*(1-D6);else AN=0.5*(1+D6);}break;default:if(this.
Ap0){var LJ=AN;var AAb=1-LJ;AN=((AAb*LJ)*(this.O6+1))+(LJ*LJ);}else if(this.AK$){
var LJ=AN;var AAb=1-LJ;var BcS=LJ*LJ;var BzE=AAb*AAb;AN=(((BzE*LJ)*(this.O6+1))+((
AAb*BcS)*(this.U1+2)))+(BcS*LJ);}}this.AuA(AN);(B=this.Ag_)?B[1].call(B[0],this):
null;},BBa:function(){var Au=(this.timer.Bu-this.Du)|0;if(Au<0)Au=-Au;var LD=this.
VQ;var Op=this.VQ+this.Po;var G_=this.Px+this.Po;var Kz=false;var Eb=this.Qi;if(
!this.Ea&&(Au>=Op)){this.Ea=1;Au=Au-Op;this.Du=this.Du+Op;}if((this.Ea>0)&&(Au>=
G_)){var H$=(Au/G_)|0;this.Ea=this.Ea+H$;Au=Au-(H$*G_);this.Du=this.Du+(H$*G_);}
if((this.Ea>2)&&!this.JL)this.Ea=1;if(this.Ea>0)LD=this.Px;if((this.Ea>=this.JL)&&(
this.JL>0)){Kz=true;Eb=0;}else if(Au>=LD)Eb=1-((Au-LD)*this.AzN);else if(Eb>=0)Eb=
0;if(Eb!==this.Qi){if(Eb<0)Eb=0;if(Eb>1)Eb=1;}if(Eb!==this.Qi){this.Qi=Eb;this.AKG(
Eb);}return Kz;},BA$:function(){var Au=(this.Du-this.timer.Bu)|0;var LD=this.VQ;
var Op=this.VQ+this.Po;var G_=this.Px+this.Po;var Kz=false;var Eb=this.Qi;if((this.
Ea>1)&&(Au<0)){var H$=(((-Au+G_)-1)/G_)|0;if((this.Ea-H$)<=0)H$=this.Ea-1;this.Ea=
this.Ea-H$;Au=Au+(H$*G_);this.Du=this.Du+(H$*G_);}if(((this.Ea===1)&&(Au<0))&&(this.
JL>0)){this.Ea=0;Au=Au+Op;this.Du=this.Du+Op;}if(((this.Ea===1)&&(Au<0))&&!this.
JL){var H$=(((-Au+G_)-1)/G_)|0;Au=Au+(H$*G_);this.Du=this.Du+(H$*G_);}if(this.Ea>
0)LD=this.Px;if(Au<0){Kz=true;Eb=1;}else if(Au>=LD)Eb=1-((Au-LD)*this.AzN);else if(
Eb>=0)Eb=1;if(Eb!==this.Qi){if(Eb<0)Eb=0;if(Eb>1)Eb=1;}if(Eb!==this.Qi){this.Qi=
Eb;this.AKG(Eb);}return Kz;},BA_:function(){var Au=(this.Du-this.timer.Bu)|0;var
LD=this.VQ;var Op=this.VQ+this.Po;var G_=this.Px+this.Po;var Kz=false;var Eb=this.
Qi;if((this.Ea>1)&&(Au<0)){var H$=(((-Au+G_)-1)/G_)|0;if((this.Ea-H$)<=0)H$=this.
Ea-1;this.Ea=this.Ea-H$;Au=Au+(H$*G_);this.Du=this.Du+(H$*G_);}if(((this.Ea===1)&&(
Au<0))&&(this.JL>0)){this.Ea=0;Au=Au+Op;this.Du=this.Du+Op;}if(((this.Ea===1)&&(
Au<0))&&!this.JL){var H$=(((-Au+G_)-1)/G_)|0;Au=Au+(H$*G_);this.Du=this.Du+(H$*G_
);}if(this.Ea>0)LD=this.Px;if(Au<0){Kz=true;Eb=0;}else if(Au>=LD)Eb=(Au-LD)*this.
AzN;else if(Eb>=0)Eb=0;if(Eb!==this.Qi){if(Eb<0)Eb=0;if(Eb>1)Eb=1;}if(Eb!==this.
Qi){this.Qi=Eb;this.AKG(Eb);}return Kz;},BA9:function(){var Au=(this.timer.Bu-this.
Du)|0;if(Au<0)Au=-Au;var LD=this.VQ;var Op=this.VQ+this.Po;var G_=this.Px+this.Po;
var Kz=false;var Eb=this.Qi;if(!this.Ea&&(Au>=Op)){this.Ea=1;Au=Au-Op;this.Du=this.
Du+Op;}if((this.Ea>0)&&(Au>=G_)){var H$=(Au/G_)|0;this.Ea=this.Ea+H$;Au=Au-(H$*G_
);this.Du=this.Du+(H$*G_);}if((this.Ea>2)&&!this.JL)this.Ea=1;if(this.Ea>0)LD=this.
Px;if((this.Ea>=this.JL)&&(this.JL>0)){Kz=true;Eb=1;}else if(Au>=LD)Eb=(Au-LD)*this.
AzN;else if(Eb>=0)Eb=1;if(Eb!==this.Qi){if(Eb<0)Eb=0;if(Eb>1)Eb=1;}if(Eb!==this.
Qi){this.Qi=Eb;this.AKG(Eb);}return Kz;},AeZ:function(E){if(this.AT_===E)return;
this.AT_=E;if(!this.By||!this.Ai2)return;if(E)this.Tc=-1;else this.Tc=1;this.Du=(
this.timer.Avf()*2)-this.Du;},AEW:function(E){if(E<0)E=0;if(E>1)E=1;this.ANR=E;}
,AEL:function(E){if(E<1)E=1;if(E>10)E=10;this.A5l=E;this.MX=null;},AFn:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axa=E;},AEE:function(E){if(E<0)E=0;if(E>10)E=10;
this.Auv=E;},Awu:function(E){if(E<1)E=1;if(E>100)E=100;this.VH=E;},AFE:function(
E){if(this.AUZ===E)return;this.AUZ=E;if(this.AhD===26){this.U1=E;this.Ap0=(this.
O6===this.U1)&&!!this.O6;this.AK$=!this.Ap0&&(this.O6!==this.U1);}},AFD:function(
E){if(this.AUY===E)return;this.AUY=E;if(this.AhD===26){this.O6=E;this.Ap0=(this.
O6===this.U1)&&!!this.O6;this.AK$=!this.Ap0&&(this.O6!==this.U1);}},Wt:function(
E){if(this.AhD===E)return;this.AhD=E;this.MX=null;switch(E){case 24:{this.O6=-1.1;
this.U1=1.1;}break;case 22:{this.O6=-1;this.U1=-2;}break;case 23:{this.O6=2;this.
U1=1;}break;case 25:{this.O6=1.1;this.U1=-1.1;}break;case 0:{this.O6=0;this.U1=0;
}break;default:{this.O6=this.AUY;this.U1=this.AUZ;}}this.Ap0=(this.O6===this.U1)&&
!!this.O6;this.AK$=!this.Ap0&&(this.O6!==this.U1);},HK:function(E){if(E<0)E=0;this.
JL=E;},Fj:function(E){if(E<15)E=15;this.Po=E;this.AzN=1/E;},Uh:function(E){if(E<
0)E=0;this.Px=E;},Akq:function(E){if(E<0)E=0;this.VQ=E;},Ar:function(E){if(this.
By===E)return;this.By=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Ad7);A.zV([this,this.Mc],this.timer
,0);this.Ai2=0;A.pe([this,this.Mc],this);}},AuA:function(Aad){},AnQ:function(G){
this.Ar(false);},AnO:function(G){if(this.By)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.EV;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Su)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Ge={Q:null,A5:0,B3:255,Cw:0,AuA:function(Aad
){var F;this.A5=this.Cw+(Math.round((this.B3-this.Cw)*Aad)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.EV._Init.call(this,aArg);this.
__proto__=C.Ge;},_Mark:function(D){var B;C.EV._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF0={
Q:null,A5:A.wf,B3:Cc,Cw:A.wf,AuA:function(Aad){var F;var El=this.Cw[0];var Df=this.
Cw[1];El=El+(Math.round((this.B3[0]-El)*Aad)|0);Df=Df+(Math.round((this.B3[1]-Df
)*Aad)|0);this.A5=[El,Df];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:
function(aArg){C.EV._Init.call(this,aArg);this.__proto__=C.AF0;},_Mark:function(
D){var B;C.EV._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.AM8={Q:null,A5:0,B3:0xFFFFFFFF,Cw:0,AuA:
function(Aad){var F;var Pc=this.Cw&0xFF;var Aap=(this.Cw>>8)&0xFF;var Alk=(this.
Cw>>16)&0xFF;var Ald=(this.Cw>>24)&0xFF;Pc=Pc+((((this.B3&0xFF)-Pc)*Aad)|0);Aap=
Aap+(((((this.B3>>8)&0xFF)-Aap)*Aad)|0);Alk=Alk+(((((this.B3>>16)&0xFF)-Alk)*Aad
)|0);Ald=Ald+(((((this.B3>>24)&0xFF)-Ald)*Aad)|0);if(Pc<0)Pc=0;if(Pc>255)Pc=255;
if(Aap<0)Aap=0;if(Aap>255)Aap=255;if(Alk<0)Alk=0;if(Alk>255)Alk=255;if(Ald<0)Ald=
0;if(Ald>255)Ald=255;this.A5=(Pc&0xFF)|((Aap&0xFF)<<8)|((Alk&0xFF)<<16)|((Ald&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.EV.
_Init.call(this,aArg);this.__proto__=C.AM8;},_Mark:function(D){var B;C.EV._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M5={A5:0,B3:1,Cw:0,AuA:function(Aad){this.A5=this.Cw+((
this.B3-this.Cw)*Aad);},_Init:function(aArg){C.EV._Init.call(this,aArg);this.__proto__=
C.M5;},_className:"Effects::FloatEffect"};C.TC={timer:null,Q:null,Ea:0,Du:0,JL:0
,Po:1000,Px:1000,VQ:0,By:false,Cw:false,B3:true,Mc:function(G){var F;if(!this.timer
)return;if(this.Ea<0){this.Du=this.timer.Bu;this.Ea=0;}var Au=(this.timer.Bu-this.
Du)|0;var Op=this.VQ+this.Po;var G_=this.Px+this.Po;var LD=this.VQ;var Jd=this.Ea;
if(!Jd&&(Au>=Op)){Jd=1;Au=Au-Op;}if((Jd>0)&&(Au>=G_)){var H$=(Au/G_)|0;Au=Au-(H$
*G_);Jd=Jd+H$;}if((Jd>2)&&!this.JL)Jd=1;if(Jd!==this.Ea){this.Du=this.timer.Bu-(((
B=Au)<0)?B+0x100000000:B);this.Ea=Jd;}if(Jd>0)LD=this.Px;var Kz=(Jd>=this.JL)&&(
this.JL>0);if(!!this.Q){if(!Kz&&(Au>=LD))(F=this.Q,F[2].call(F[0],this.Cw));if(Kz||((
Au<LD)&&(Jd>0)))(F=this.Q,F[2].call(F[0],this.B3));}if(Kz)this.Ar(false);},HK:function(
E){if(E<0)E=0;this.JL=E;},Fj:function(E){if(E<100)E=100;this.Po=E;},Uh:function(
E){if(E<0)E=0;this.Px=E;},Akq:function(E){if(E<0)E=0;this.VQ=E;},Ar:function(E){
if(this.By===E)return;this.By=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Ad7);A.zV([this,this.Mc
],this.timer,0);this.Ea=-1;}},AnQ:function(G){this.Ar(false);},AnO:function(G){if(
this.By)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TC;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mm={Pf:null,AJ:null,Ah:null,Ab:null,O:null,AKi:null,A2Q:null,Akh:null,Dq:true,
By:true,Acz:true,Ajd:false,Ajm:true,Zu:true,Q4:true,Mk:function(){if(!!this.Pf)this.
Pf.Mk();},AvI:function(){return true;},Ze:function(){},Sz:function(){this.Mk();}
,_Init:function(aArg){this.__proto__=C.Mm;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKi)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.Asy={Ar3:A.wf,MQ:false,AvI:function(){return this.MQ;},Ze:function(
){if(!this.Dq&&!!this.O.Ab)this.O.Z(false);if((!this.Dq&&this.Q4)&&!!this.O.Ab)this.
O.Ab.HL(this.O);if(!this.By)this.O.Ar(false);},Sz:function(){if(this.By)this.O.Ar(
true);if((this.Dq||this.Ajd)&&!this.O.Ab){this.O.Z(false);this.Ab.J(this.O,0);}if(
this.Dq&&this.Zu)this.O.Ab.Zt(this.O);if(this.Dq&&this.Ajm)this.O.Ab.Bb(this.O);
if(this.Dq&&!this.Acz)this.O.H(A.abJ(this.O.M,this.Ar3));if(this.Dq){this.O.Do(255
);this.O.Z(true);}if(!this.Dq&&(this.Ab.AV===this.O))this.Ab.Bb(null);this.MQ=true;
this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);this.__proto__=C.Asy;
},_className:"Effects::VisibilityFader"};C.Aw8={EV:null,MQ:false,Ap3:false,AvI:function(
){return this.MQ;},Ze:function(){if(this.Dq)this.O.Do(this.EV.B3);if(!this.Dq&&!
this.O.G1)this.O.Z(false);if((!this.Dq&&this.Q4)&&!!this.O.Ab)this.O.Ab.HL(this.
O);if(!this.By)this.O.Ar(false);},Sz:function(){var B;if(this.Acz){if(this.O.Fi(
)&&!!this.O.Ab)this.EV.Cw=this.O.G1;else this.EV.Cw=0;}var AzQ=((!this.O.Ab||!this.
O.G1)||!this.O.Fi())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AzR=((!this.Dq&&((!this.O.Ab||!this.O.Fi())||this.Q4
))||!this.EV.B3)||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AzQ&&AzR){this.EV.Cw=0;this.EV.B3=0;}this.Ap3=this.O.AR9(
);if(this.By)this.O.Ar(true);if((this.Dq||this.Ajd)&&!this.O.Ab){this.O.Z(false);
this.Ab.J(this.O,0);}if(this.Dq&&this.Zu)this.O.Ab.Zt(this.O);if(this.Dq&&this.Ajm
)this.O.Ab.Bb(this.O);if(!this.Dq&&(this.Ab.AV===this.O))this.Ab.Bb(null);if(this.
Dq&&!this.O.Fi()){this.O.Do(this.EV.Cw);this.O.Z(true);}if(!this.Dq&&((!this.O.Ab||
!this.O.Fi())||!this.O.G1)){this.MQ=true;this.Mk();return;}if(!this.Dq&&(this.EV.
Cw===this.EV.B3))this.O.Do(this.EV.Cw);if(this.O.G1===this.EV.B3){this.MQ=true;this.
Mk();return;}if(this.EV.Cw===this.EV.B3){this.MQ=true;this.Mk();return;}if(!this.
EV.JL)this.EV.HK(1);this.EV.Q=[B=this.O,B.Av$,B.AZ0];this.EV.AeZ(false);this.EV.
AkM=false;this.EV.Su=[this,this.AiF];this.EV.Ag_=null;this.EV.Ar(true);},AiF:function(
G){this.MQ=true;this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Ge.
_Init.call(this.EV={I:this},0);this.__proto__=C.Aw8;},_Done:function(){this.__proto__=
C.Mm;this.EV._Done();C.Mm._Done.call(this);},_ReInit:function(){C.Mm._ReInit.call(
this);this.EV._ReInit();},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=
this.EV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae1={
Cn:null,D9:null,AdV:false,MQ:false,Ap3:false,AvI:function(){return this.MQ;},Ze:
function(){if(this.Dq){this.O.Do(this.Cn.B3);this.O.H(A.abJ(this.O.M,this.D9.B3)
);}if(!this.Dq&&!this.O.G1)this.O.Z(false);if((!this.Dq&&this.Q4)&&!!this.O.Ab)this.
O.Ab.HL(this.O);if(this.AdV)this.O.Aru(this.Ap3);if(!this.By)this.O.Ar(false);},
Sz:function(){var B;if(this.Acz){if(this.O.Fi()&&!!this.O.Ab)this.Cn.Cw=this.O.G1;
else this.Cn.Cw=0;this.D9.Cw=this.O.M.slice(0,2);}var AzQ=((!this.O.Ab||!this.O.
G1)||!this.O.Fi())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AzR=((!this.Dq&&((!this.O.Ab||!this.O.Fi())||this.Q4
))||!this.Cn.B3)||(((B=A.lb(A.abh([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D9.B3
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzQ&&AzR){
this.Cn.Cw=0;this.Cn.B3=0;this.D9.Cw=this.D9.B3;}this.Ap3=this.O.AR9();if(this.By
)this.O.Ar(true);if((this.Dq||this.Ajd)&&!this.O.Ab){this.O.Z(false);this.Ab.J(this.
O,0);}if(this.Dq&&this.Zu)this.O.Ab.Zt(this.O);if(this.Dq&&this.Ajm)this.O.Ab.Bb(
this.O);if(!this.Dq&&(this.Ab.AV===this.O))this.Ab.Bb(null);if(this.Dq&&!this.O.
Fi()){this.O.H(A.abJ(this.O.M,this.D9.Cw));this.O.Do(this.Cn.Cw);this.O.Z(true);
}if(!this.Dq&&((!this.O.Ab||!this.O.Fi())||!this.O.G1)){this.MQ=true;this.Mk();return;
}if(!this.Dq&&A.aaX(this.D9.Cw,this.D9.B3))this.O.H(A.abJ(this.O.M,this.D9.Cw));
if(!this.Dq&&(this.Cn.Cw===this.Cn.B3))this.O.Do(this.Cn.Cw);if((this.O.G1===this.
Cn.B3)&&A.aaX(this.O.M.slice(0,2),this.D9.B3)){this.MQ=true;this.Mk();return;}if((
this.Cn.Cw===this.Cn.B3)&&A.aaX(this.D9.Cw,this.D9.B3)){this.MQ=true;this.Mk();return;
}if(!this.Cn.JL)this.Cn.HK(1);if(!this.D9.JL)this.D9.HK(1);if(this.AdV)this.O.Aru(
true);this.D9.Q=null;this.D9.AeZ(false);this.D9.AkM=false;this.D9.Su=[this,this.
AiF];this.D9.Ag_=[this,this.AAk];this.Cn.Q=[B=this.O,B.Av$,B.AZ0];this.Cn.AeZ(false
);this.Cn.AkM=false;this.Cn.Su=[this,this.AiF];this.Cn.Ag_=null;this.D9.Ar(!A.aaX(
this.D9.Cw,this.D9.B3));this.Cn.Ar(this.Cn.Cw!==this.Cn.B3);},AiF:function(G){this.
MQ=!this.Cn.By&&!this.D9.By;this.Mk();},AAk:function(G){this.O.H(A.abJ(this.O.M,
this.D9.A5));},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Ge._Init.call(this.
Cn={I:this},0);C.AF0._Init.call(this.D9={I:this},0);this.__proto__=C.Ae1;},_Done:
function(){this.__proto__=C.Mm;this.Cn._Done();this.D9._Done();C.Mm._Done.call(this
);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cn._ReInit();this.D9._ReInit(
);},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.Asz={AdB:null,Cn:null,G3:null,V_:null,FJ:null,Uo:A.wf,AkA:A.wf,MQ:false,Ap3:
false,AvI:function(){return this.MQ;},Ze:function(){if(this.Dq){this.O.Do(this.Cn.
B3);this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Uo));this.O.Z(true);}if(
!this.Dq&&!this.Cn.B3){this.O.Do(0);this.O.Z(false);}if(((!this.Dq&&(this.Cn.B3>
0))&&!!this.O.Ab)&&!this.Q4){this.O.Do(this.Cn.B3);this.O.H(A.abh(A.abg(this.O.M
,A.aaI(this.O.M)),this.Uo));this.O.Z(true);}if((!this.Dq&&this.Q4)&&!!this.O.Ab)
this.O.Ab.HL(this.O);this.O.Aru(this.Ap3);if(!!this.AdB)this.Ab.HL(this.AdB);if(
!this.By)this.O.Ar(false);},Sz:function(){var B;if(this.Acz){if(this.O.Fi()&&!!this.
O.Ab)this.Cn.Cw=this.O.G1;else this.Cn.Cw=0;this.AkA=A.aaI(this.O.M);}var AzQ=((
!this.O.Ab||!this.O.G1)||!this.O.Fi())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AzR=((!this.Dq&&((!this.O.Ab||!this.
O.Fi())||this.Q4))||!this.Cn.B3)||(((B=A.lb(A.abh(A.abg(this.O.M,A.aaI(this.O.M)
),this.Uo),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzQ&&
AzR){this.Cn.Cw=0;this.Cn.B3=0;this.AkA=this.Uo;this.V_.A7u();}this.Ap3=this.O.AR9(
);if(this.By)this.O.Ar(true);if((this.Dq||this.Ajd)&&!this.O.Ab){this.O.Z(false);
this.Ab.J(this.O,0);}if(this.Dq&&this.Zu)this.O.Ab.Zt(this.O);if(this.Dq&&this.Ajm
)this.O.Ab.Bb(this.O);if(!this.Dq&&(this.Ab.AV===this.O))this.Ab.Bb(null);if(this.
Dq&&!this.O.Fi())this.O.Do(this.Cn.Cw);if((!this.Dq&&A.aaX(this.AkA,this.Uo))&&this.
V_.ADF())this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.AkA));if(!this.Dq&&(
this.Cn.Cw===this.Cn.B3))this.O.Do(this.Cn.Cw);if(!this.Dq&&((!this.O.Ab||!this.
O.Fi())||!this.O.G1)){this.MQ=true;this.Mk();return;}if(((this.Dq&&(this.O.G1===
this.Cn.B3))&&A.aaX(A.aaI(this.O.M),this.Uo))&&this.O.Fi()){this.MQ=true;this.Mk(
);return;}if(((!this.Dq&&(this.O.G1===this.Cn.B3))&&A.aaX(A.aaI(this.O.M),this.Uo
))&&this.V_.ADF()){this.MQ=true;this.Mk();return;}if(((this.Cn.Cw===this.Cn.B3)&&
A.aaX(this.AkA,this.Uo))&&this.V_.ADF()){this.MQ=true;this.Mk();return;}this.O.Aru(
true);this.O.Z(false);this.AdB=A._NewObject(A.acg.AVk,0);this.AdB.Bmh(this.O);this.
AdB.Do(this.Cn.Cw);this.AdB.Bnb(A.aaI([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.
O.Ab.ALS(this.AdB,this.O);if(!this.Cn.JL)this.Cn.HK(1);if(!this.G3.JL)this.G3.HK(
1);this.G3.AeZ(false);this.G3.AkM=false;this.G3.Su=[this,this.AiF];this.G3.Ag_=[
this,this.AAk];if(this.Dq){this.G3.Cw=0;this.G3.B3=1;}else{this.G3.Cw=1;this.G3.
B3=0;}this.Cn.Q=[B=this.AdB,B.Av$,B.Do];this.Cn.AeZ(false);this.Cn.AkM=false;this.
Cn.Su=[this,this.AiF];this.Cn.Ag_=null;this.G3.Ar(!A.aaX(this.AkA,this.Uo)||!this.
V_.ADF());this.Cn.Ar(this.Cn.Cw!==this.Cn.B3);},AiF:function(G){this.MQ=!this.Cn.
By&&!this.G3.By;this.Mk();},AAk:function(G){var B;var AA9=A.abe(this.Uo,this.AkA
);if(!this.Dq)AA9=[-AA9[0],-AA9[1]];this.FJ.A7u();this.FJ.AgH=this.V_.AgH;this.FJ.
Bpw(AA9[0],AA9[1],0);this.FJ.Bi_(this.V_,this.FJ,this.G3.A5);if(this.Dq)this.AdB.
A$Q(this.AkA,this.FJ);else this.AdB.A$Q(this.Uo,this.FJ);},_Init:function(aArg){
C.Mm._Init.call(this,aArg);C.Ge._Init.call(this.Cn={I:this},0);C.M5._Init.call(this.
G3={I:this},0);A.Graphics.AxL._Init.call(this.V_={I:this},0);A.Graphics.AxL._Init.
call(this.FJ={I:this},0);this.__proto__=C.Asz;},_Done:function(){this.__proto__=
C.Mm;this.Cn._Done();this.G3._Done();this.V_._Done();this.FJ._Done();C.Mm._Done.
call(this);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cn._ReInit();this.G3.
_ReInit();this.V_._ReInit();this.FJ._ReInit();},_Mark:function(D){var B;C.Mm._Mark.
call(this,D);if((B=this.AdB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FJ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rb={R7:function(){return null;},R6:function(
){return null;},Ad1:function(){return this.R7();},Ad0:function(){return this.R6(
);},_Init:function(aArg){this.__proto__=C.Rb;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUz={R7:function(){var Ap=A._NewObject(C.Asy,0);Ap.Dq=true;Ap.By=true;Ap.Ajm=
false;Ap.Zu=true;Ap.Acz=false;Ap.Akh=[this,this.ApA];return Ap;},R6:function(){var
Ap=A._NewObject(C.Asy,0);Ap.Dq=false;Ap.By=false;Ap.Q4=true;return Ap;},Ad1:function(
){var Ap=C.Rb.Ad1.call(this);Ap.Zu=false;Ap.By=true;return Ap;},Ad0:function(){var
Ap=A._NewObject(C.Asy,0);Ap.Dq=false;Ap.By=true;Ap.Ajd=true;Ap.Q4=false;return Ap;
},ApA:function(G){var B;var Ap=(C.Asy.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ap.
Ab.M)[2]-B[0],B[3]-B[1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C4[1]/2)|0)];Ap.Ar3=pos;},_Init:function(aArg){C.Rb._Init.
call(this,aArg);this.__proto__=C.AUz;},_className:"Effects::ShowHideTransition"};
C.Ad$={ACp:500,R7:function(){var Ap=A._NewObject(C.Ae1,0);Ap.Dq=true;Ap.By=true;
Ap.Ajm=false;Ap.Zu=true;Ap.Acz=true;Ap.AdV=false;Ap.Akh=[this,this.ApA];Ap.Cn.Fj(
this.ACp);Ap.Cn.Cw=0;Ap.Cn.B3=255;Ap.D9.Fj(this.ACp);Ap.D9.Wt(23);return Ap;},R6:
function(){var Ap=A._NewObject(C.Aw8,0);Ap.Dq=false;Ap.By=false;Ap.Q4=true;Ap.Acz=
true;Ap.EV.Cw=255;Ap.EV.B3=0;Ap.EV.Fj(this.ACp);return Ap;},Ad1:function(){var Ap=
C.Rb.Ad1.call(this);Ap.Zu=false;Ap.By=true;return Ap;},Ad0:function(){var Ap=C.Rb.
Ad0.call(this);Ap.Ajd=true;Ap.Q4=false;Ap.By=true;return Ap;},ApA:function(G){var
B;var Ap=(C.Ae1.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[
1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ap.D9.B3=pos;if(((!Ap.O.Ab||!Ap.O.Fi())||!Ap.O.G1)||(((B=A.lb(Ap.O.
M,[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ap.O.H(A.abJ(Ap.
O.M,pos));},_Init:function(aArg){C.Rb._Init.call(this,aArg);this.__proto__=C.Ad$;
},_className:"Effects::FadeInOutTransition"};C.AGB={Kc:0x12,AuQ:0,AdV:false,R7:function(
){var Ap=A._NewObject(C.Ae1,0);Ap.Dq=true;Ap.By=true;Ap.Ajm=false;Ap.Zu=true;Ap.
Acz=true;Ap.AdV=this.AdV;Ap.Akh=[this,this.ApA];Ap.Cn.Fj(500);Ap.Cn.Akq(0);Ap.Cn.
Cw=0;Ap.Cn.B3=255;Ap.D9.Fj(500);Ap.D9.Wt(23);Ap.D9.AFD(0);Ap.D9.AFE(0);Ap.D9.Awu(
3);Ap.D9.AEE(0.5);Ap.D9.AFn(3);Ap.D9.AEL(3);Ap.D9.AEW(0.5);return Ap;},R6:function(
){var Ap=A._NewObject(C.Ae1,0);Ap.Dq=false;Ap.By=false;Ap.Q4=true;Ap.Acz=true;Ap.
AdV=this.AdV;Ap.Akh=[this,this.A22];Ap.Cn.Cw=255;Ap.Cn.B3=0;Ap.Cn.Fj(500);Ap.Cn.
Akq(0);Ap.D9.Fj(500);Ap.D9.Wt(23);Ap.D9.AFD(0);Ap.D9.AFE(0);Ap.D9.Awu(3);Ap.D9.AEE(
0.5);Ap.D9.AFn(3);Ap.D9.AEL(3);Ap.D9.AEW(0.5);return Ap;},Ad1:function(){var Ap=
C.Rb.Ad1.call(this);Ap.Zu=false;Ap.By=true;return Ap;},Ad0:function(){var Ap=C.Rb.
Ad0.call(this);Ap.Ajd=true;Ap.Q4=false;Ap.By=true;return Ap;},ApA:function(G){var
B;var Ap=(C.Ae1.isPrototypeOf(G)?G:null);var Bw=this.Kc;var Bd=[0,0,(B=Ap.Ab.M)[
2]-B[0],B[3]-B[1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bw&0x4)===0x4))pos=[Bd[2]-C4[0],pos[1]];else if(((Bw&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];if(((Bw&0x20)===0x20))pos=[pos[0],Bd[3
]-C4[1]];else if(((Bw&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ap.D9.B3=pos;if(((!Ap.O.Ab||!Ap.O.Fi())||!Ap.O.G1)||(((B=A.lb(Ap.O.
M,[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hy=[(B=Ap.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuQ){case 5:pos=[pos[0],-C4[1]];break;case 3:{
pos=[pos[0],-C4[1]];pos=[Hy[0],pos[1]];}break;case 8:pos=[-C4[0],-C4[1]];break;case
2:pos=[Hy[0],pos[1]];break;case 7:pos=[-C4[0],pos[1]];break;case 4:pos=[pos[0],Hy[
1]];break;case 1:{pos=[pos[0],Hy[1]];pos=[Hy[0],pos[1]];}break;case 6:{pos=[pos[
0],Hy[1]];pos=[-C4[0],pos[1]];}break;default:;}Ap.O.H(A.abJ(Ap.O.M,pos));}},A22:
function(G){var B;var Ap=(C.Ae1.isPrototypeOf(G)?G:null);var pos=Ap.O.M.slice(0,
2);var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var Hy=[(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuQ){case 5:pos=[pos[0],Hy[1]];break;case 3:{pos=[pos[0],Hy[1]];pos=[-
C4[0],pos[1]];}break;case 8:{pos=[pos[0],Hy[1]];pos=[Hy[0],pos[1]];}break;case 2:
pos=[-C4[0],pos[1]];break;case 7:pos=[Hy[0],pos[1]];break;case 4:pos=[pos[0],-C4[
1]];break;case 1:pos=[-C4[0],-C4[1]];break;case 6:{pos=[pos[0],-C4[1]];pos=[Hy[0
],pos[1]];}break;default:;}Ap.D9.B3=pos;},_Init:function(aArg){C.Rb._Init.call(this
,aArg);this.__proto__=C.AGB;},_className:"Effects::SlideTransition"};C.Ae9={R7:function(
){var Ap=A._NewObject(C.Asz,0);Ap.Dq=true;Ap.By=true;Ap.Ajm=false;Ap.Zu=true;Ap.
Acz=true;Ap.Akh=[this,this.ApA];Ap.Cn.Fj(500);Ap.Cn.Akq(0);Ap.Cn.Cw=0;Ap.Cn.B3=255;
Ap.G3.Fj(500);Ap.G3.Wt(23);Ap.G3.AFD(0);Ap.G3.AFE(0);Ap.G3.Awu(3);Ap.G3.AEE(0.5);
Ap.G3.AFn(3);Ap.G3.AEL(3);Ap.G3.AEW(0.5);Ap.V_.Ae8(0.5,0.5,1);return Ap;},R6:function(
){var Ap=A._NewObject(C.Asz,0);Ap.Dq=false;Ap.By=false;Ap.Q4=true;Ap.Acz=true;Ap.
Akh=[this,this.A22];Ap.Cn.Cw=255;Ap.Cn.B3=0;Ap.Cn.Fj(500);Ap.Cn.Akq(0);Ap.G3.Fj(
500);Ap.G3.Wt(23);Ap.G3.AFD(0);Ap.G3.AFE(0);Ap.G3.Awu(3);Ap.G3.AEE(0.5);Ap.G3.AFn(
3);Ap.G3.AEL(3);Ap.G3.AEW(0.5);Ap.V_.Ae8(0.5,0.5,1);return Ap;},Ad1:function(){var
Ap=C.Rb.Ad1.call(this);Ap.Zu=false;Ap.By=true;return Ap;},Ad0:function(){var Ap=
C.Rb.Ad0.call(this);Ap.Ajd=true;Ap.Q4=false;Ap.By=true;return Ap;},ApA:function(
G){var B;var Ap=(C.Asz.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ap.Ab.M)[2]-B[0],
B[3]-B[1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C4[1]/2)|0)];Ap.Uo=A.abf(pos,[(C4[0]/2)|0,(C4[1]/2)|0]);if(((!Ap.O.Ab||
!Ap.O.Fi())||!Ap.O.G1)||(((B=A.lb(Ap.O.M,[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ap.O.H(A.abJ(Ap.O.M,A.abe(Ap.Uo,A.aaI([0,0,(B=Ap.O.M)[2]-
B[0],B[3]-B[1]]))));},A22:function(G){var Ap=(C.Asz.isPrototypeOf(G)?G:null);Ap.
Uo=A.aaI(Ap.O.M);},_Init:function(aArg){C.Rb._Init.call(this,aArg);this.__proto__=
C.Ae9;},_className:"Effects::ScaleTransition"};C.AhD={BD3:0,BEI:1,BEK:2,BEJ:3,BDo:
4,BDq:5,BDp:6,BFd:7,BFf:8,BFe:9,BCV:10,BCX:11,BCW:12,BCB:13,BCD:14,BCC:15,BDf:16
,BDh:17,BDg:18,BCM:19,BCO:20,BCN:21,BDe:22,BDs:23,BDd:24,BDt:25,BC2:26};C.BC9={A4F:
0x1,A4E:0x2,A4G:0x4,A4J:0x8,A4I:0x10,A4H:0x20};C.ANQ={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANQ;},_className:"Effects::EffectTimerClass"};C.
Ad7={_Init:function(){C.ANQ._Init.call(this,0);this.PO(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGO={Pe:A.abi(12,0
,null),Ale:A.abi(12,0,null),_Init:function(aArg){(this.Pe=[]).__proto__=C.AGO.Pe;(
this.Ale=[]).__proto__=C.AGO.Ale;this.__proto__=C.AGO;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACw={B9:null,B8:null,A79:function(Ati){var Ap=this.B8;while(
!!Ap){Ap.Ze();Ap.O.U=Ap.O.U&~0x40000;Ap=Ap.Ah;}Ap=this.B8;while(!!Ap){A.pe(Ap.A2Q
,Ap);Ap=Ap.Ah;}},A78:function(Ati){var Ap=this.B8;while(!!Ap){A.pe(Ap.AKi,Ap);Ap=
Ap.Ah;}this.B8=null;this.B9=null;},Sz:function(Ati){var B;if(!this.B8)this.Mk();
var Ap=this.B8;while(!!Ap){Ap.O.U=(Ap.O.U|0x40000)&~0x20000;Ap.O.ApH=null;Ap=Ap.
Ah;}Ap=this.B8;while(!!Ap){(B=Ap.Akh)?B[1].call(B[0],Ap):null;Ap.Sz();Ap=Ap.Ah;}
},Mk:function(){var Ap=this.B8;while(!!Ap&&Ap.AvI())Ap=Ap.Ah;if(!Ap)A.Core.AkN.Mk.
call(this);},Bn2:function(FI){if(!FI)return;if(this.AQS())throw new Error(BF);if(
FI.Pf!==this)throw new Error(EZ);if(!!FI.Ah)FI.Ah.AJ=FI.AJ;else this.B9=FI.AJ;if(
!!FI.AJ)FI.AJ.Ah=FI.Ah;else this.B8=FI.Ah;FI.Pf=null;FI.Ah=null;FI.AJ=null;if(!!
FI.O)FI.O.ApH=null;A.pe(FI.AKi,FI);if(!this.B8)this.Amr();},A4y:function(FI){if(
!FI)return;if(this.AQS())throw new Error(Hj);if(!!FI.Pf)throw new Error(I$);FI.AJ=
this.B9;FI.Ah=null;if(!!this.B9)this.B9.Ah=FI;else this.B8=FI;this.B9=FI;FI.Pf=this;
},_Init:function(aArg){A.Core.AkN._Init.call(this,aArg);this.__proto__=C.ACw;},_Mark:
function(D){var B;A.Core.AkN._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.Asm={_Init:function(){C.AUz._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Ge.__proto__=C.EV;C.AF0.__proto__=C.EV;C.AM8.__proto__=C.EV;
C.M5.__proto__=C.EV;C.Asy.__proto__=C.Mm;C.Aw8.__proto__=C.Mm;C.Ae1.__proto__=C.
Mm;C.Asz.__proto__=C.Mm;C.AUz.__proto__=C.Rb;C.Ad$.__proto__=C.Rb;C.AGB.__proto__=
C.Rb;C.Ae9.__proto__=C.Rb;C.ANQ.__proto__=A.Core.Timer;C.ACw.__proto__=A.Core.AkN;
};C._ReInit=function(){var B;if((B=C.Ad7._this))B._ReInit(),C.Ad7._ReInit.call(B
);if((B=C.Asm._this))B._ReInit(),C.Asm._ReInit.call(B);};C.DF=function(D){var B;
if((B=C.Ad7._this)&&(B._cycle!=D))B._Done(C.Ad7._this=null);if((B=C.Asm._this)&&(
B._cycle!=D))B._Done(C.Asm._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */