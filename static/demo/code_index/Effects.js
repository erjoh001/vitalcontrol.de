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
var EY="The fader doesn\'t belong to this task";var Hi="Trying to add a fader to a task, which is actually running";
var I7="The fader belongs already to a task";
C.EU={MX:null,timer:null,Ql:null,Sr:null,Ag6:null,S$:0,AiY:0,UX:0,O6:0,Azt:0.001,
Qh:0,D_:0,Dt:0,ANz:0.5,A44:3,AwU:3,Aug:0.5,VC:3,AUH:0,AUG:0,JH:0,Pn:1000,Pw:0,VL:
0,Ahy:0,By:false,AkF:false,ATS:false,ApQ:false,AKV:false,L$:function(G){var B;if(
!this.timer)return;if(!this.AiY){if(this.ATS)this.AiY=-1;else this.AiY=1;this.S$=
this.AiY;this.Dt=this.timer.Bw;this.D_=0;this.Qh=-1;}var Kw;if((this.AiY>0)&&(this.
S$>0))Kw=this.BAD();else if((this.AiY<0)&&(this.S$<0))Kw=this.BAG();else if(this.
AiY>0)Kw=this.BAE();else Kw=this.BAF();if(Kw){this.Ar(false);(B=this.Ql)?B[1].call(
B[0],this):null;(B=this.Sr)?B[1].call(B[0],this):null;}},AKq:function(AN){var B;
if(!this.MX&&(((this.Ahy===19)||(this.Ahy===20))||(this.Ahy===21))){var AI2=this.
A44+1;var Bx7=Math.sqrt(this.ANz);var RB=0.5;var P;this.MX=A._NewObject(C.AGu,0);
this.MX.Pd.Set(0,1);this.MX.Ak5.Set(0,1);for(P=1;P<AI2;P=P+1){this.MX.Pd.Set(P,this.
MX.Pd.Get(P-1)*Bx7);this.MX.Ak5.Set(P,this.MX.Ak5.Get(P-1)*this.ANz);RB=RB+this.
MX.Pd.Get(P);}var ByU=1/RB;this.MX.Pd.Set(0,0.5);RB=0;for(P=0;P<AI2;P=P+1){this.
MX.Pd.Set(P,this.MX.Pd.Get(P)*ByU);RB=RB+this.MX.Pd.Get(P);}this.MX.Pd.Set(AI2,this.
MX.Pd.Get(AI2)+(1-RB));}if(this.AkF){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.Ahy){case 1:AN=Math.pow(AN,this.VC);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VC);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VC)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VC))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VC*AN)-1)/(Math.
pow(2.718,this.VC)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VC*AN)-1)
/(Math.pow(2.718,this.VC)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VC*AN)-1)/(Math.pow(2.718,this.VC)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VC*AN)-1)/(Math.pow(2.718,this.VC)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.Aug)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.Aug)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.Aug)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.Aug)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.AwU)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.AwU)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.AwU)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.AwU)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BD=this.MX;var P=0;var Gy=0;var K3=BD.Pd.
Get(0);var D4=1-AN;while(D4>K3){P=P+1;Gy=K3;K3=K3+BD.Pd.Get(P);}AN=(D4-Gy)/(K3-Gy
);if(!P)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BD.Ak5.Get(P)*(1-(AN*AN));}}break;case 20:{
var BD=this.MX;var P=0;var Gy=0;var K3=BD.Pd.Get(0);while(AN>K3){P=P+1;Gy=K3;K3=
K3+BD.Pd.Get(P);}AN=(AN-Gy)/(K3-Gy);if(!P)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BD.Ak5.
Get(P)*(1-(AN*AN)));}}break;case 21:{var BD=this.MX;var P=0;var Gy=0;var K3=BD.Pd.
Get(0);var LF=AN*2;var D4=LF-1;if(LF<1)D4=-D4;while(D4>K3){P=P+1;Gy=K3;K3=K3+BD.
Pd.Get(P);}D4=(D4-Gy)/(K3-Gy);if(!P)D4=D4*D4;else{D4=(2*D4)-1;D4=1-(BD.Ak5.Get(P
)*(1-(D4*D4)));}if(LF<1)AN=0.5*(1-D4);else AN=0.5*(1+D4);}break;default:if(this.
ApQ){var LF=AN;var AzT=1-LF;AN=((AzT*LF)*(this.O6+1))+(LF*LF);}else if(this.AKV){
var LF=AN;var AzT=1-LF;var Bcq=LF*LF;var By_=AzT*AzT;AN=(((By_*LF)*(this.O6+1))+((
AzT*Bcq)*(this.UX+2)))+(Bcq*LF);}}this.Aul(AN);(B=this.Ag6)?B[1].call(B[0],this):
null;},BAG:function(){var Av=(this.timer.Bw-this.Dt)|0;if(Av<0)Av=-Av;var LB=this.
VL;var Oq=this.VL+this.Pn;var G9=this.Pw+this.Pn;var Kw=false;var D$=this.Qh;if(
!this.D_&&(Av>=Oq)){this.D_=1;Av=Av-Oq;this.Dt=this.Dt+Oq;}if((this.D_>0)&&(Av>=
G9)){var H9=(Av/G9)|0;this.D_=this.D_+H9;Av=Av-(H9*G9);this.Dt=this.Dt+(H9*G9);}
if((this.D_>2)&&!this.JH)this.D_=1;if(this.D_>0)LB=this.Pw;if((this.D_>=this.JH)&&(
this.JH>0)){Kw=true;D$=0;}else if(Av>=LB)D$=1-((Av-LB)*this.Azt);else if(D$>=0)D$=
0;if(D$!==this.Qh){if(D$<0)D$=0;if(D$>1)D$=1;}if(D$!==this.Qh){this.Qh=D$;this.AKq(
D$);}return Kw;},BAF:function(){var Av=(this.Dt-this.timer.Bw)|0;var LB=this.VL;
var Oq=this.VL+this.Pn;var G9=this.Pw+this.Pn;var Kw=false;var D$=this.Qh;if((this.
D_>1)&&(Av<0)){var H9=(((-Av+G9)-1)/G9)|0;if((this.D_-H9)<=0)H9=this.D_-1;this.D_=
this.D_-H9;Av=Av+(H9*G9);this.Dt=this.Dt+(H9*G9);}if(((this.D_===1)&&(Av<0))&&(this.
JH>0)){this.D_=0;Av=Av+Oq;this.Dt=this.Dt+Oq;}if(((this.D_===1)&&(Av<0))&&!this.
JH){var H9=(((-Av+G9)-1)/G9)|0;Av=Av+(H9*G9);this.Dt=this.Dt+(H9*G9);}if(this.D_>
0)LB=this.Pw;if(Av<0){Kw=true;D$=1;}else if(Av>=LB)D$=1-((Av-LB)*this.Azt);else if(
D$>=0)D$=1;if(D$!==this.Qh){if(D$<0)D$=0;if(D$>1)D$=1;}if(D$!==this.Qh){this.Qh=
D$;this.AKq(D$);}return Kw;},BAE:function(){var Av=(this.Dt-this.timer.Bw)|0;var
LB=this.VL;var Oq=this.VL+this.Pn;var G9=this.Pw+this.Pn;var Kw=false;var D$=this.
Qh;if((this.D_>1)&&(Av<0)){var H9=(((-Av+G9)-1)/G9)|0;if((this.D_-H9)<=0)H9=this.
D_-1;this.D_=this.D_-H9;Av=Av+(H9*G9);this.Dt=this.Dt+(H9*G9);}if(((this.D_===1)&&(
Av<0))&&(this.JH>0)){this.D_=0;Av=Av+Oq;this.Dt=this.Dt+Oq;}if(((this.D_===1)&&(
Av<0))&&!this.JH){var H9=(((-Av+G9)-1)/G9)|0;Av=Av+(H9*G9);this.Dt=this.Dt+(H9*G9
);}if(this.D_>0)LB=this.Pw;if(Av<0){Kw=true;D$=0;}else if(Av>=LB)D$=(Av-LB)*this.
Azt;else if(D$>=0)D$=0;if(D$!==this.Qh){if(D$<0)D$=0;if(D$>1)D$=1;}if(D$!==this.
Qh){this.Qh=D$;this.AKq(D$);}return Kw;},BAD:function(){var Av=(this.timer.Bw-this.
Dt)|0;if(Av<0)Av=-Av;var LB=this.VL;var Oq=this.VL+this.Pn;var G9=this.Pw+this.Pn;
var Kw=false;var D$=this.Qh;if(!this.D_&&(Av>=Oq)){this.D_=1;Av=Av-Oq;this.Dt=this.
Dt+Oq;}if((this.D_>0)&&(Av>=G9)){var H9=(Av/G9)|0;this.D_=this.D_+H9;Av=Av-(H9*G9
);this.Dt=this.Dt+(H9*G9);}if((this.D_>2)&&!this.JH)this.D_=1;if(this.D_>0)LB=this.
Pw;if((this.D_>=this.JH)&&(this.JH>0)){Kw=true;D$=1;}else if(Av>=LB)D$=(Av-LB)*this.
Azt;else if(D$>=0)D$=1;if(D$!==this.Qh){if(D$<0)D$=0;if(D$>1)D$=1;}if(D$!==this.
Qh){this.Qh=D$;this.AKq(D$);}return Kw;},AeQ:function(E){if(this.ATS===E)return;
this.ATS=E;if(!this.By||!this.AiY)return;if(E)this.S$=-1;else this.S$=1;this.Dt=(
this.timer.Au2()*2)-this.Dt;},AED:function(E){if(E<0)E=0;if(E>1)E=1;this.ANz=E;}
,AEs:function(E){if(E<1)E=1;if(E>10)E=10;this.A44=E;this.MX=null;},AE8:function(
E){if(E<1)E=1;if(E>10)E=10;this.AwU=E;},AEl:function(E){if(E<0)E=0;if(E>10)E=10;
this.Aug=E;},Awc:function(E){if(E<1)E=1;if(E>100)E=100;this.VC=E;},AFm:function(
E){if(this.AUH===E)return;this.AUH=E;if(this.Ahy===26){this.UX=E;this.ApQ=(this.
O6===this.UX)&&!!this.O6;this.AKV=!this.ApQ&&(this.O6!==this.UX);}},AFl:function(
E){if(this.AUG===E)return;this.AUG=E;if(this.Ahy===26){this.O6=E;this.ApQ=(this.
O6===this.UX)&&!!this.O6;this.AKV=!this.ApQ&&(this.O6!==this.UX);}},Wo:function(
E){if(this.Ahy===E)return;this.Ahy=E;this.MX=null;switch(E){case 24:{this.O6=-1.1;
this.UX=1.1;}break;case 22:{this.O6=-1;this.UX=-2;}break;case 23:{this.O6=2;this.
UX=1;}break;case 25:{this.O6=1.1;this.UX=-1.1;}break;case 0:{this.O6=0;this.UX=0;
}break;default:{this.O6=this.AUG;this.UX=this.AUH;}}this.ApQ=(this.O6===this.UX)&&
!!this.O6;this.AKV=!this.ApQ&&(this.O6!==this.UX);},HI:function(E){if(E<0)E=0;this.
JH=E;},Fi:function(E){if(E<15)E=15;this.Pn=E;this.Azt=1/E;},Ue:function(E){if(E<
0)E=0;this.Pw=E;},Akj:function(E){if(E<0)E=0;this.VL=E;},Ar:function(E){if(this.
By===E)return;this.By=E;if(!E&&!!this.timer){A.z9([this,this.L$],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.AdZ);A.zV([this,this.L$],this.timer
,0);this.AiY=0;A.pe([this,this.L$],this);}},Aul:function(Z7){},AnG:function(G){this.
Ar(false);},AnE:function(G){if(this.By)this.Ar(false);this.Ar(true);},_Init:function(
aArg){this.__proto__=C.EU;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ql)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sr)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ag6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};C.Gc={Q:null,A5:0,B3:255,Cu:0,Aul:function(Z7){var F;this.A5=
this.Cu+(Math.round((this.B3-this.Cu)*Z7)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0
],this.A5));},_Init:function(aArg){C.EU._Init.call(this,aArg);this.__proto__=C.Gc;
},_Mark:function(D){var B;C.EU._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AFI={Q:null,A5:A.
wf,B3:Cc,Cu:A.wf,Aul:function(Z7){var F;var Ej=this.Cu[0];var De=this.Cu[1];Ej=Ej+(
Math.round((this.B3[0]-Ej)*Z7)|0);De=De+(Math.round((this.B3[1]-De)*Z7)|0);this.
A5=[Ej,De];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){
C.EU._Init.call(this,aArg);this.__proto__=C.AFI;},_Mark:function(D){var B;C.EU._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::PointEffect"};C.AMS={Q:null,A5:0,B3:0xFFFFFFFF,Cu:0,Aul:function(Z7){var
F;var Pb=this.Cu&0xFF;var Aah=(this.Cu>>8)&0xFF;var Ak$=(this.Cu>>16)&0xFF;var Ak4=(
this.Cu>>24)&0xFF;Pb=Pb+((((this.B3&0xFF)-Pb)*Z7)|0);Aah=Aah+(((((this.B3>>8)&0xFF
)-Aah)*Z7)|0);Ak$=Ak$+(((((this.B3>>16)&0xFF)-Ak$)*Z7)|0);Ak4=Ak4+(((((this.B3>>
24)&0xFF)-Ak4)*Z7)|0);if(Pb<0)Pb=0;if(Pb>255)Pb=255;if(Aah<0)Aah=0;if(Aah>255)Aah=
255;if(Ak$<0)Ak$=0;if(Ak$>255)Ak$=255;if(Ak4<0)Ak4=0;if(Ak4>255)Ak4=255;this.A5=(
Pb&0xFF)|((Aah&0xFF)<<8)|((Ak$&0xFF)<<16)|((Ak4&0xFF)<<24);if(!!this.Q)(F=this.Q
,F[2].call(F[0],this.A5));},_Init:function(aArg){C.EU._Init.call(this,aArg);this.
__proto__=C.AMS;},_Mark:function(D){var B;C.EU._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::ColorEffect"};C.M5={
A5:0,B3:1,Cu:0,Aul:function(Z7){this.A5=this.Cu+((this.B3-this.Cu)*Z7);},_Init:function(
aArg){C.EU._Init.call(this,aArg);this.__proto__=C.M5;},_className:"Effects::FloatEffect"
};C.Tz={timer:null,Q:null,D_:0,Dt:0,JH:0,Pn:1000,Pw:1000,VL:0,By:false,Cu:false,
B3:true,L$:function(G){var F;if(!this.timer)return;if(this.D_<0){this.Dt=this.timer.
Bw;this.D_=0;}var Av=(this.timer.Bw-this.Dt)|0;var Oq=this.VL+this.Pn;var G9=this.
Pw+this.Pn;var LB=this.VL;var I$=this.D_;if(!I$&&(Av>=Oq)){I$=1;Av=Av-Oq;}if((I$>
0)&&(Av>=G9)){var H9=(Av/G9)|0;Av=Av-(H9*G9);I$=I$+H9;}if((I$>2)&&!this.JH)I$=1;
if(I$!==this.D_){this.Dt=this.timer.Bw-(((B=Av)<0)?B+0x100000000:B);this.D_=I$;}
if(I$>0)LB=this.Pw;var Kw=(I$>=this.JH)&&(this.JH>0);if(!!this.Q){if(!Kw&&(Av>=LB
))(F=this.Q,F[2].call(F[0],this.Cu));if(Kw||((Av<LB)&&(I$>0)))(F=this.Q,F[2].call(
F[0],this.B3));}if(Kw)this.Ar(false);},HI:function(E){if(E<0)E=0;this.JH=E;},Fi:
function(E){if(E<100)E=100;this.Pn=E;},Ue:function(E){if(E<0)E=0;this.Pw=E;},Akj:
function(E){if(E<0)E=0;this.VL=E;},Ar:function(E){if(this.By===E)return;this.By=
E;if(!E&&!!this.timer){A.z9([this,this.L$],this.timer,0);this.timer=null;}if(E){
this.timer=A._GetAutoObject(C.AdZ);A.zV([this,this.L$],this.timer,0);this.D_=-1;
}},AnG:function(G){this.Ar(false);},AnE:function(G){if(this.By)this.Ar(false);this.
Ar(true);},_Init:function(aArg){this.__proto__=C.Tz;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.Mk={Pe:null,AJ:null,Ah:null
,Ab:null,O:null,AJ4:null,A2z:null,Akc:null,Dq:true,By:true,Acq:true,Ai$:false,Ajh:
true,Zm:true,Q2:true,Mi:function(){if(!!this.Pe)this.Pe.Mi();},Avr:function(){return true;
},Y8:function(){},Sw:function(){this.Mi();},_Init:function(aArg){this.__proto__=
C.Mk;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A2z)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akc)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Asl={ArQ:A.wf
,MQ:false,Avr:function(){return this.MQ;},Y8:function(){if(!this.Dq&&!!this.O.Ab
)this.O.Y(false);if((!this.Dq&&this.Q2)&&!!this.O.Ab)this.O.Ab.HJ(this.O);if(!this.
By)this.O.Ar(false);},Sw:function(){if(this.By)this.O.Ar(true);if((this.Dq||this.
Ai$)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dq&&this.Zm)this.
O.Ab.Zl(this.O);if(this.Dq&&this.Ajh)this.O.Ab.Bb(this.O);if(this.Dq&&!this.Acq)
this.O.H(A.abJ(this.O.M,this.ArQ));if(this.Dq){this.O.Do(255);this.O.Y(true);}if(
!this.Dq&&(this.Ab.AW===this.O))this.Ab.Bb(null);this.MQ=true;this.Mi();},_Init:
function(aArg){C.Mk._Init.call(this,aArg);this.__proto__=C.Asl;},_className:"Effects::VisibilityFader"
};C.AwQ={EU:null,MQ:false,ApT:false,Avr:function(){return this.MQ;},Y8:function(
){if(this.Dq)this.O.Do(this.EU.B3);if(!this.Dq&&!this.O.G0)this.O.Y(false);if((!
this.Dq&&this.Q2)&&!!this.O.Ab)this.O.Ab.HJ(this.O);if(!this.By)this.O.Ar(false);
},Sw:function(){var B;if(this.Acq){if(this.O.Fh()&&!!this.O.Ab)this.EU.Cu=this.O.
G0;else this.EU.Cu=0;}var Azw=((!this.O.Ab||!this.O.G0)||!this.O.Fh())||(((B=A.lb(
this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Azx=((
!this.Dq&&((!this.O.Ab||!this.O.Fh())||this.Q2))||!this.EU.B3)||(((B=A.lb(this.O.
M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azw&&Azx){
this.EU.Cu=0;this.EU.B3=0;}this.ApT=this.O.ARS();if(this.By)this.O.Ar(true);if((
this.Dq||this.Ai$)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dq&&
this.Zm)this.O.Ab.Zl(this.O);if(this.Dq&&this.Ajh)this.O.Ab.Bb(this.O);if(!this.
Dq&&(this.Ab.AW===this.O))this.Ab.Bb(null);if(this.Dq&&!this.O.Fh()){this.O.Do(this.
EU.Cu);this.O.Y(true);}if(!this.Dq&&((!this.O.Ab||!this.O.Fh())||!this.O.G0)){this.
MQ=true;this.Mi();return;}if(!this.Dq&&(this.EU.Cu===this.EU.B3))this.O.Do(this.
EU.Cu);if(this.O.G0===this.EU.B3){this.MQ=true;this.Mi();return;}if(this.EU.Cu===
this.EU.B3){this.MQ=true;this.Mi();return;}if(!this.EU.JH)this.EU.HI(1);this.EU.
Q=[B=this.O,B.AvT,B.AZL];this.EU.AeQ(false);this.EU.AkF=false;this.EU.Sr=[this,this.
AiB];this.EU.Ag6=null;this.EU.Ar(true);},AiB:function(G){this.MQ=true;this.Mi();
},_Init:function(aArg){C.Mk._Init.call(this,aArg);C.Gc._Init.call(this.EU={I:this
},0);this.__proto__=C.AwQ;},_Done:function(){this.__proto__=C.Mk;this.EU._Done();
C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.call(this);this.EU._ReInit(
);},_Mark:function(D){var B;C.Mk._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.AeS={Cm:null,D7:null,AdO:false
,MQ:false,ApT:false,Avr:function(){return this.MQ;},Y8:function(){if(this.Dq){this.
O.Do(this.Cm.B3);this.O.H(A.abJ(this.O.M,this.D7.B3));}if(!this.Dq&&!this.O.G0)this.
O.Y(false);if((!this.Dq&&this.Q2)&&!!this.O.Ab)this.O.Ab.HJ(this.O);if(this.AdO)
this.O.Arj(this.ApT);if(!this.By)this.O.Ar(false);},Sw:function(){var B;if(this.
Acq){if(this.O.Fh()&&!!this.O.Ab)this.Cm.Cu=this.O.G0;else this.Cm.Cu=0;this.D7.
Cu=this.O.M.slice(0,2);}var Azw=((!this.O.Ab||!this.O.G0)||!this.O.Fh())||(((B=A.
lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Azx=((!this.Dq&&((!this.O.Ab||!this.O.Fh())||this.Q2))||!this.Cm.B3)||(((B=A.lb(
A.abh([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D7.B3),[0,0,(B=this.Ab.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azw&&Azx){this.Cm.Cu=0;this.Cm.B3=0;this.
D7.Cu=this.D7.B3;}this.ApT=this.O.ARS();if(this.By)this.O.Ar(true);if((this.Dq||
this.Ai$)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dq&&this.Zm)
this.O.Ab.Zl(this.O);if(this.Dq&&this.Ajh)this.O.Ab.Bb(this.O);if(!this.Dq&&(this.
Ab.AW===this.O))this.Ab.Bb(null);if(this.Dq&&!this.O.Fh()){this.O.H(A.abJ(this.O.
M,this.D7.Cu));this.O.Do(this.Cm.Cu);this.O.Y(true);}if(!this.Dq&&((!this.O.Ab||
!this.O.Fh())||!this.O.G0)){this.MQ=true;this.Mi();return;}if(!this.Dq&&A.aaX(this.
D7.Cu,this.D7.B3))this.O.H(A.abJ(this.O.M,this.D7.Cu));if(!this.Dq&&(this.Cm.Cu===
this.Cm.B3))this.O.Do(this.Cm.Cu);if((this.O.G0===this.Cm.B3)&&A.aaX(this.O.M.slice(
0,2),this.D7.B3)){this.MQ=true;this.Mi();return;}if((this.Cm.Cu===this.Cm.B3)&&A.
aaX(this.D7.Cu,this.D7.B3)){this.MQ=true;this.Mi();return;}if(!this.Cm.JH)this.Cm.
HI(1);if(!this.D7.JH)this.D7.HI(1);if(this.AdO)this.O.Arj(true);this.D7.Q=null;this.
D7.AeQ(false);this.D7.AkF=false;this.D7.Sr=[this,this.AiB];this.D7.Ag6=[this,this.
Az2];this.Cm.Q=[B=this.O,B.AvT,B.AZL];this.Cm.AeQ(false);this.Cm.AkF=false;this.
Cm.Sr=[this,this.AiB];this.Cm.Ag6=null;this.D7.Ar(!A.aaX(this.D7.Cu,this.D7.B3));
this.Cm.Ar(this.Cm.Cu!==this.Cm.B3);},AiB:function(G){this.MQ=!this.Cm.By&&!this.
D7.By;this.Mi();},Az2:function(G){this.O.H(A.abJ(this.O.M,this.D7.A5));},_Init:function(
aArg){C.Mk._Init.call(this,aArg);C.Gc._Init.call(this.Cm={I:this},0);C.AFI._Init.
call(this.D7={I:this},0);this.__proto__=C.AeS;},_Done:function(){this.__proto__=
C.Mk;this.Cm._Done();this.D7._Done();C.Mk._Done.call(this);},_ReInit:function(){
C.Mk._ReInit.call(this);this.Cm._ReInit();this.D7._ReInit();},_Mark:function(D){
var B;C.Mk._Mark.call(this,D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Asm={Adu:null,Cm:null,G2:null,V5:null,FI:null,Ul:A.wf,Akt:A.wf,MQ:false,ApT:false
,Avr:function(){return this.MQ;},Y8:function(){if(this.Dq){this.O.Do(this.Cm.B3);
this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Ul));this.O.Y(true);}if(!this.
Dq&&!this.Cm.B3){this.O.Do(0);this.O.Y(false);}if(((!this.Dq&&(this.Cm.B3>0))&&!
!this.O.Ab)&&!this.Q2){this.O.Do(this.Cm.B3);this.O.H(A.abh(A.abg(this.O.M,A.aaI(
this.O.M)),this.Ul));this.O.Y(true);}if((!this.Dq&&this.Q2)&&!!this.O.Ab)this.O.
Ab.HJ(this.O);this.O.Arj(this.ApT);if(!!this.Adu)this.Ab.HJ(this.Adu);if(!this.By
)this.O.Ar(false);},Sw:function(){var B;if(this.Acq){if(this.O.Fh()&&!!this.O.Ab
)this.Cm.Cu=this.O.G0;else this.Cm.Cu=0;this.Akt=A.aaI(this.O.M);}var Azw=((!this.
O.Ab||!this.O.G0)||!this.O.Fh())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Azx=((!this.Dq&&((!this.O.Ab||!this.O.
Fh())||this.Q2))||!this.Cm.B3)||(((B=A.lb(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),
this.Ul),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azw&&
Azx){this.Cm.Cu=0;this.Cm.B3=0;this.Akt=this.Ul;this.V5.A7b();}this.ApT=this.O.ARS(
);if(this.By)this.O.Ar(true);if((this.Dq||this.Ai$)&&!this.O.Ab){this.O.Y(false);
this.Ab.J(this.O,0);}if(this.Dq&&this.Zm)this.O.Ab.Zl(this.O);if(this.Dq&&this.Ajh
)this.O.Ab.Bb(this.O);if(!this.Dq&&(this.Ab.AW===this.O))this.Ab.Bb(null);if(this.
Dq&&!this.O.Fh())this.O.Do(this.Cm.Cu);if((!this.Dq&&A.aaX(this.Akt,this.Ul))&&this.
V5.ADn())this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Akt));if(!this.Dq&&(
this.Cm.Cu===this.Cm.B3))this.O.Do(this.Cm.Cu);if(!this.Dq&&((!this.O.Ab||!this.
O.Fh())||!this.O.G0)){this.MQ=true;this.Mi();return;}if(((this.Dq&&(this.O.G0===
this.Cm.B3))&&A.aaX(A.aaI(this.O.M),this.Ul))&&this.O.Fh()){this.MQ=true;this.Mi(
);return;}if(((!this.Dq&&(this.O.G0===this.Cm.B3))&&A.aaX(A.aaI(this.O.M),this.Ul
))&&this.V5.ADn()){this.MQ=true;this.Mi();return;}if(((this.Cm.Cu===this.Cm.B3)&&
A.aaX(this.Akt,this.Ul))&&this.V5.ADn()){this.MQ=true;this.Mi();return;}this.O.Arj(
true);this.O.Y(false);this.Adu=A._NewObject(A.acg.AU4,0);this.Adu.BlP(this.O);this.
Adu.Do(this.Cm.Cu);this.Adu.BmI(A.aaI([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.
O.Ab.ALC(this.Adu,this.O);if(!this.Cm.JH)this.Cm.HI(1);if(!this.G2.JH)this.G2.HI(
1);this.G2.AeQ(false);this.G2.AkF=false;this.G2.Sr=[this,this.AiB];this.G2.Ag6=[
this,this.Az2];if(this.Dq){this.G2.Cu=0;this.G2.B3=1;}else{this.G2.Cu=1;this.G2.
B3=0;}this.Cm.Q=[B=this.Adu,B.AvT,B.Do];this.Cm.AeQ(false);this.Cm.AkF=false;this.
Cm.Sr=[this,this.AiB];this.Cm.Ag6=null;this.G2.Ar(!A.aaX(this.Akt,this.Ul)||!this.
V5.ADn());this.Cm.Ar(this.Cm.Cu!==this.Cm.B3);},AiB:function(G){this.MQ=!this.Cm.
By&&!this.G2.By;this.Mi();},Az2:function(G){var B;var AAQ=A.abe(this.Ul,this.Akt
);if(!this.Dq)AAQ=[-AAQ[0],-AAQ[1]];this.FI.A7b();this.FI.AgD=this.V5.AgD;this.FI.
Bo3(AAQ[0],AAQ[1],0);this.FI.BiB(this.V5,this.FI,this.G2.A5);if(this.Dq)this.Adu.
A$q(this.Akt,this.FI);else this.Adu.A$q(this.Ul,this.FI);},_Init:function(aArg){
C.Mk._Init.call(this,aArg);C.Gc._Init.call(this.Cm={I:this},0);C.M5._Init.call(this.
G2={I:this},0);A.Graphics.Axt._Init.call(this.V5={I:this},0);A.Graphics.Axt._Init.
call(this.FI={I:this},0);this.__proto__=C.Asm;},_Done:function(){this.__proto__=
C.Mk;this.Cm._Done();this.G2._Done();this.V5._Done();this.FI._Done();C.Mk._Done.
call(this);},_ReInit:function(){C.Mk._ReInit.call(this);this.Cm._ReInit();this.G2.
_ReInit();this.V5._ReInit();this.FI._ReInit();},_Mark:function(D){var B;C.Mk._Mark.
call(this,D);if((B=this.Adu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Q$={R4:function(){return null;},R3:function(
){return null;},AdU:function(){return this.R4();},AdT:function(){return this.R3(
);},_Init:function(aArg){this.__proto__=C.Q$;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUh={R4:function(){var Ap=A._NewObject(C.Asl,0);Ap.Dq=true;Ap.By=true;Ap.Ajh=
false;Ap.Zm=true;Ap.Acq=false;Ap.Akc=[this,this.Apq];return Ap;},R3:function(){var
Ap=A._NewObject(C.Asl,0);Ap.Dq=false;Ap.By=false;Ap.Q2=true;return Ap;},AdU:function(
){var Ap=C.Q$.AdU.call(this);Ap.Zm=false;Ap.By=true;return Ap;},AdT:function(){var
Ap=A._NewObject(C.Asl,0);Ap.Dq=false;Ap.By=true;Ap.Ai$=true;Ap.Q2=false;return Ap;
},Apq:function(G){var B;var Ap=(C.Asl.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ap.
Ab.M)[2]-B[0],B[3]-B[1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C4[1]/2)|0)];Ap.ArQ=pos;},_Init:function(aArg){C.Q$._Init.
call(this,aArg);this.__proto__=C.AUh;},_className:"Effects::ShowHideTransition"};
C.Ad3={AB7:500,R4:function(){var Ap=A._NewObject(C.AeS,0);Ap.Dq=true;Ap.By=true;
Ap.Ajh=false;Ap.Zm=true;Ap.Acq=true;Ap.AdO=false;Ap.Akc=[this,this.Apq];Ap.Cm.Fi(
this.AB7);Ap.Cm.Cu=0;Ap.Cm.B3=255;Ap.D7.Fi(this.AB7);Ap.D7.Wo(23);return Ap;},R3:
function(){var Ap=A._NewObject(C.AwQ,0);Ap.Dq=false;Ap.By=false;Ap.Q2=true;Ap.Acq=
true;Ap.EU.Cu=255;Ap.EU.B3=0;Ap.EU.Fi(this.AB7);return Ap;},AdU:function(){var Ap=
C.Q$.AdU.call(this);Ap.Zm=false;Ap.By=true;return Ap;},AdT:function(){var Ap=C.Q$.
AdT.call(this);Ap.Ai$=true;Ap.Q2=false;Ap.By=true;return Ap;},Apq:function(G){var
B;var Ap=(C.AeS.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[
1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ap.D7.B3=pos;if(((!Ap.O.Ab||!Ap.O.Fh())||!Ap.O.G0)||(((B=A.lb(Ap.O.
M,[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ap.O.H(A.abJ(Ap.
O.M,pos));},_Init:function(aArg){C.Q$._Init.call(this,aArg);this.__proto__=C.Ad3;
},_className:"Effects::FadeInOutTransition"};C.AGh={J8:0x12,AuB:0,AdO:false,R4:function(
){var Ap=A._NewObject(C.AeS,0);Ap.Dq=true;Ap.By=true;Ap.Ajh=false;Ap.Zm=true;Ap.
Acq=true;Ap.AdO=this.AdO;Ap.Akc=[this,this.Apq];Ap.Cm.Fi(500);Ap.Cm.Akj(0);Ap.Cm.
Cu=0;Ap.Cm.B3=255;Ap.D7.Fi(500);Ap.D7.Wo(23);Ap.D7.AFl(0);Ap.D7.AFm(0);Ap.D7.Awc(
3);Ap.D7.AEl(0.5);Ap.D7.AE8(3);Ap.D7.AEs(3);Ap.D7.AED(0.5);return Ap;},R3:function(
){var Ap=A._NewObject(C.AeS,0);Ap.Dq=false;Ap.By=false;Ap.Q2=true;Ap.Acq=true;Ap.
AdO=this.AdO;Ap.Akc=[this,this.A2L];Ap.Cm.Cu=255;Ap.Cm.B3=0;Ap.Cm.Fi(500);Ap.Cm.
Akj(0);Ap.D7.Fi(500);Ap.D7.Wo(23);Ap.D7.AFl(0);Ap.D7.AFm(0);Ap.D7.Awc(3);Ap.D7.AEl(
0.5);Ap.D7.AE8(3);Ap.D7.AEs(3);Ap.D7.AED(0.5);return Ap;},AdU:function(){var Ap=
C.Q$.AdU.call(this);Ap.Zm=false;Ap.By=true;return Ap;},AdT:function(){var Ap=C.Q$.
AdT.call(this);Ap.Ai$=true;Ap.Q2=false;Ap.By=true;return Ap;},Apq:function(G){var
B;var Ap=(C.AeS.isPrototypeOf(G)?G:null);var Bv=this.J8;var Bd=[0,0,(B=Ap.Ab.M)[
2]-B[0],B[3]-B[1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bv&0x4)===0x4))pos=[Bd[2]-C4[0],pos[1]];else if(((Bv&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];if(((Bv&0x20)===0x20))pos=[pos[0],Bd[3
]-C4[1]];else if(((Bv&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ap.D7.B3=pos;if(((!Ap.O.Ab||!Ap.O.Fh())||!Ap.O.G0)||(((B=A.lb(Ap.O.
M,[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hw=[(B=Ap.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuB){case 5:pos=[pos[0],-C4[1]];break;case 3:{
pos=[pos[0],-C4[1]];pos=[Hw[0],pos[1]];}break;case 8:pos=[-C4[0],-C4[1]];break;case
2:pos=[Hw[0],pos[1]];break;case 7:pos=[-C4[0],pos[1]];break;case 4:pos=[pos[0],Hw[
1]];break;case 1:{pos=[pos[0],Hw[1]];pos=[Hw[0],pos[1]];}break;case 6:{pos=[pos[
0],Hw[1]];pos=[-C4[0],pos[1]];}break;default:;}Ap.O.H(A.abJ(Ap.O.M,pos));}},A2L:
function(G){var B;var Ap=(C.AeS.isPrototypeOf(G)?G:null);var pos=Ap.O.M.slice(0,
2);var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var Hw=[(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuB){case 5:pos=[pos[0],Hw[1]];break;case 3:{pos=[pos[0],Hw[1]];pos=[-
C4[0],pos[1]];}break;case 8:{pos=[pos[0],Hw[1]];pos=[Hw[0],pos[1]];}break;case 2:
pos=[-C4[0],pos[1]];break;case 7:pos=[Hw[0],pos[1]];break;case 4:pos=[pos[0],-C4[
1]];break;case 1:pos=[-C4[0],-C4[1]];break;case 6:{pos=[pos[0],-C4[1]];pos=[Hw[0
],pos[1]];}break;default:;}Ap.D7.B3=pos;},_Init:function(aArg){C.Q$._Init.call(this
,aArg);this.__proto__=C.AGh;},_className:"Effects::SlideTransition"};C.Ae0={R4:function(
){var Ap=A._NewObject(C.Asm,0);Ap.Dq=true;Ap.By=true;Ap.Ajh=false;Ap.Zm=true;Ap.
Acq=true;Ap.Akc=[this,this.Apq];Ap.Cm.Fi(500);Ap.Cm.Akj(0);Ap.Cm.Cu=0;Ap.Cm.B3=255;
Ap.G2.Fi(500);Ap.G2.Wo(23);Ap.G2.AFl(0);Ap.G2.AFm(0);Ap.G2.Awc(3);Ap.G2.AEl(0.5);
Ap.G2.AE8(3);Ap.G2.AEs(3);Ap.G2.AED(0.5);Ap.V5.AeZ(0.5,0.5,1);return Ap;},R3:function(
){var Ap=A._NewObject(C.Asm,0);Ap.Dq=false;Ap.By=false;Ap.Q2=true;Ap.Acq=true;Ap.
Akc=[this,this.A2L];Ap.Cm.Cu=255;Ap.Cm.B3=0;Ap.Cm.Fi(500);Ap.Cm.Akj(0);Ap.G2.Fi(
500);Ap.G2.Wo(23);Ap.G2.AFl(0);Ap.G2.AFm(0);Ap.G2.Awc(3);Ap.G2.AEl(0.5);Ap.G2.AE8(
3);Ap.G2.AEs(3);Ap.G2.AED(0.5);Ap.V5.AeZ(0.5,0.5,1);return Ap;},AdU:function(){var
Ap=C.Q$.AdU.call(this);Ap.Zm=false;Ap.By=true;return Ap;},AdT:function(){var Ap=
C.Q$.AdT.call(this);Ap.Ai$=true;Ap.Q2=false;Ap.By=true;return Ap;},Apq:function(
G){var B;var Ap=(C.Asm.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ap.Ab.M)[2]-B[0],
B[3]-B[1]];var C4=[(B=Ap.O.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C4[1]/2)|0)];Ap.Ul=A.abf(pos,[(C4[0]/2)|0,(C4[1]/2)|0]);if(((!Ap.O.Ab||
!Ap.O.Fh())||!Ap.O.G0)||(((B=A.lb(Ap.O.M,[0,0,(B=Ap.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ap.O.H(A.abJ(Ap.O.M,A.abe(Ap.Ul,A.aaI([0,0,(B=Ap.O.M)[2]-
B[0],B[3]-B[1]]))));},A2L:function(G){var Ap=(C.Asm.isPrototypeOf(G)?G:null);Ap.
Ul=A.aaI(Ap.O.M);},_Init:function(aArg){C.Q$._Init.call(this,aArg);this.__proto__=
C.Ae0;},_className:"Effects::ScaleTransition"};C.Ahy={BDw:0,BEb:1,BEd:2,BEc:3,BCT:
4,BCV:5,BCU:6,BEI:7,BEK:8,BEJ:9,BCo:10,BCq:11,BCp:12,BB6:13,BB8:14,BB7:15,BCK:16
,BCM:17,BCL:18,BCf:19,BCh:20,BCg:21,BCJ:22,BCX:23,BCI:24,BCY:25,BCv:26};C.BCC={A4n:
0x1,A4m:0x2,A4o:0x4,A4r:0x8,A4q:0x10,A4p:0x20};C.ANy={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANy;},_className:"Effects::EffectTimerClass"};C.
AdZ={_Init:function(){C.ANy._Init.call(this,0);this.PN(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGu={Pd:A.abi(12,0
,null),Ak5:A.abi(12,0,null),_Init:function(aArg){(this.Pd=[]).__proto__=C.AGu.Pd;(
this.Ak5=[]).__proto__=C.AGu.Ak5;this.__proto__=C.AGu;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACc={B9:null,B8:null,A7Q:function(As5){var Ap=this.B8;while(
!!Ap){Ap.Y8();Ap.O.U=Ap.O.U&~0x40000;Ap=Ap.Ah;}Ap=this.B8;while(!!Ap){A.pe(Ap.A2z
,Ap);Ap=Ap.Ah;}},A7P:function(As5){var Ap=this.B8;while(!!Ap){A.pe(Ap.AJ4,Ap);Ap=
Ap.Ah;}this.B8=null;this.B9=null;},Sw:function(As5){var B;if(!this.B8)this.Mi();
var Ap=this.B8;while(!!Ap){Ap.O.U=(Ap.O.U|0x40000)&~0x20000;Ap.O.Apx=null;Ap=Ap.
Ah;}Ap=this.B8;while(!!Ap){(B=Ap.Akc)?B[1].call(B[0],Ap):null;Ap.Sw();Ap=Ap.Ah;}
},Mi:function(){var Ap=this.B8;while(!!Ap&&Ap.Avr())Ap=Ap.Ah;if(!Ap)A.Core.AkG.Mi.
call(this);},Bnx:function(FH){if(!FH)return;if(this.AQB())throw new Error(BF);if(
FH.Pe!==this)throw new Error(EY);if(!!FH.Ah)FH.Ah.AJ=FH.AJ;else this.B9=FH.AJ;if(
!!FH.AJ)FH.AJ.Ah=FH.Ah;else this.B8=FH.Ah;FH.Pe=null;FH.Ah=null;FH.AJ=null;if(!!
FH.O)FH.O.Apx=null;A.pe(FH.AJ4,FH);if(!this.B8)this.Amh();},A4g:function(FH){if(
!FH)return;if(this.AQB())throw new Error(Hi);if(!!FH.Pe)throw new Error(I7);FH.AJ=
this.B9;FH.Ah=null;if(!!this.B9)this.B9.Ah=FH;else this.B8=FH;this.B9=FH;FH.Pe=this;
},_Init:function(aArg){A.Core.AkG._Init.call(this,aArg);this.__proto__=C.ACc;},_Mark:
function(D){var B;A.Core.AkG._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.Ar$={_Init:function(){C.AUh._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gc.__proto__=C.EU;C.AFI.__proto__=C.EU;C.AMS.__proto__=C.EU;
C.M5.__proto__=C.EU;C.Asl.__proto__=C.Mk;C.AwQ.__proto__=C.Mk;C.AeS.__proto__=C.
Mk;C.Asm.__proto__=C.Mk;C.AUh.__proto__=C.Q$;C.Ad3.__proto__=C.Q$;C.AGh.__proto__=
C.Q$;C.Ae0.__proto__=C.Q$;C.ANy.__proto__=A.Core.Timer;C.ACc.__proto__=A.Core.AkG;
};C._ReInit=function(){var B;if((B=C.AdZ._this))B._ReInit(),C.AdZ._ReInit.call(B
);if((B=C.Ar$._this))B._ReInit(),C.Ar$._ReInit.call(B);};C.DE=function(D){var B;
if((B=C.AdZ._this)&&(B._cycle!=D))B._Done(C.AdZ._this=null);if((B=C.Ar$._this)&&(
B._cycle!=D))B._Done(C.Ar$._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */