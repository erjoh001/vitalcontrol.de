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
var B$=[100,100];var BH="Trying to remove a fader from a task, which is actually running";
var EV="The fader doesn\'t belong to this task";var GT="Trying to add a fader to a task, which is actually running";
var Jt="The fader belongs already to a task";
C.ES={MP:null,timer:null,P2:null,R5:null,Agv:null,SI:0,Aih:0,Uq:0,OU:0,Ax_:0.001,
WJ:0,D9:0,Dq:0,ALQ:0.5,A2G:3,AvI:3,Ate:0.5,U7:3,ASE:0,ASD:0,Mq:0,Pd:1000,Pm:0,Vg:
0,Ag2:0,Bw:false,Aj6:false,ARS:false,Ao0:false,AJm:false,Ma:function(H){var B;if(
!this.timer)return;if(!this.Aih){if(this.ARS)this.Aih=-1;else this.Aih=1;this.SI=
this.Aih;this.Dq=this.timer.Bu;this.D9=0;this.WJ=-1;}var MH;if((this.Aih>0)&&(this.
SI>0))MH=this.Bxs();else if((this.Aih<0)&&(this.SI<0))MH=this.Bxv();else if(this.
Aih>0)MH=this.Bxt();else MH=this.Bxu();if(MH){this.Ap(false);(B=this.P2)?B[1].call(
B[0],this):null;(B=this.R5)?B[1].call(B[0],this):null;}},AIZ:function(AK){var B;
if(!this.MP&&(((this.Ag2===19)||(this.Ag2===20))||(this.Ag2===21))){var AHz=this.
A2G+1;var Bu1=Math.sqrt(this.ALQ);var Rg=0.5;var P;this.MP=A._NewObject(C.AE0,0);
this.MP.O3.Set(0,1);this.MP.Akv.Set(0,1);for(P=1;P<AHz;P=P+1){this.MP.O3.Set(P,this.
MP.O3.Get(P-1)*Bu1);this.MP.Akv.Set(P,this.MP.Akv.Get(P-1)*this.ALQ);Rg=Rg+this.
MP.O3.Get(P);}var BvL=1/Rg;this.MP.O3.Set(0,0.5);Rg=0;for(P=0;P<AHz;P=P+1){this.
MP.O3.Set(P,this.MP.O3.Get(P)*BvL);Rg=Rg+this.MP.O3.Get(P);}this.MP.O3.Set(AHz,this.
MP.O3.Get(AHz)+(1-Rg));}if(this.Aj6){if(AK<0.5)AK=AK*2;else AK=2-(AK*2);}switch(
this.Ag2){case 1:AK=Math.pow(AK,this.U7);break;case 2:{AK=1-AK;AK=1-Math.pow(AK,
this.U7);}break;case 3:{AK=AK*2;if(AK<1)AK=Math.pow(AK,this.U7)/2;else{AK=2-AK;AK=(
2-Math.pow(AK,this.U7))*0.5;}}break;case 4:AK=(Math.pow(2.718,this.U7*AK)-1)/(Math.
pow(2.718,this.U7)-1);break;case 5:{AK=1-AK;AK=1-((Math.pow(2.718,this.U7*AK)-1)
/(Math.pow(2.718,this.U7)-1));}break;case 6:{AK=AK*2;if(AK<1)AK=((Math.pow(2.718
,this.U7*AK)-1)/(Math.pow(2.718,this.U7)-1))/2;else{AK=2-AK;AK=(2-((Math.pow(2.718
,this.U7*AK)-1)/(Math.pow(2.718,this.U7)-1)))*0.5;}}break;case 7:AK=1-Math.cos((
AK*90)*A.kw);break;case 8:AK=Math.sin((AK*90)*A.kw);break;case 9:{AK=AK*2;if(AK<
1){AK=1-Math.cos((AK*90)*A.kw);AK=AK*0.5;}else{AK=2-AK;AK=1-Math.cos((AK*90)*A.kw
);AK=(2-AK)*0.5;}}break;case 10:AK=1-Math.sqrt(1-(AK*AK));break;case 11:{AK=1-AK;
AK=Math.sqrt(1-(AK*AK));}break;case 12:{AK=AK*2;if(AK<1){AK=1-Math.sqrt(1-(AK*AK
));AK=AK*0.5;}else{AK=2-AK;AK=1-Math.sqrt(1-(AK*AK));AK=(2-AK)*0.5;}}break;case 13:
AK=((AK*AK)*AK)-((AK*this.Ate)*Math.sin((AK*180)*A.kw));break;case 14:{AK=1-AK;AK=((
AK*AK)*AK)-((AK*this.Ate)*Math.sin((AK*180)*A.kw));AK=1-AK;}break;case 15:{AK=AK
*2;if(AK<1){AK=((AK*AK)*AK)-((AK*this.Ate)*Math.sin((AK*180)*A.kw));AK=AK*0.5;}else{
AK=2-AK;AK=((AK*AK)*AK)-((AK*this.Ate)*Math.sin((AK*180)*A.kw));AK=(2-AK)*0.5;}}
break;case 16:AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvI)))*A.kw);break;case
17:{AK=1-AK;AK=1-(((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvI)))*A.kw));}break;
case 18:{AK=AK*2;if(AK<1){AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvI)))*A.
kw);AK=AK*0.5;}else{AK=2-AK;AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvI)))*
A.kw);AK=(2-AK)*0.5;}}break;case 19:{var BF=this.MP;var P=0;var Gp=0;var KV=BF.O3.
Get(0);var D2=1-AK;while(D2>KV){P=P+1;Gp=KV;KV=KV+BF.O3.Get(P);}AK=(D2-Gp)/(KV-Gp
);if(!P)AK=1-(AK*AK);else{AK=(2*AK)-1;AK=BF.Akv.Get(P)*(1-(AK*AK));}}break;case 20:{
var BF=this.MP;var P=0;var Gp=0;var KV=BF.O3.Get(0);while(AK>KV){P=P+1;Gp=KV;KV=
KV+BF.O3.Get(P);}AK=(AK-Gp)/(KV-Gp);if(!P)AK=AK*AK;else{AK=(2*AK)-1;AK=1-(BF.Akv.
Get(P)*(1-(AK*AK)));}}break;case 21:{var BF=this.MP;var P=0;var Gp=0;var KV=BF.O3.
Get(0);var Lt=AK*2;var D2=Lt-1;if(Lt<1)D2=-D2;while(D2>KV){P=P+1;Gp=KV;KV=KV+BF.
O3.Get(P);}D2=(D2-Gp)/(KV-Gp);if(!P)D2=D2*D2;else{D2=(2*D2)-1;D2=1-(BF.Akv.Get(P
)*(1-(D2*D2)));}if(Lt<1)AK=0.5*(1-D2);else AK=0.5*(1+D2);}break;default:if(this.
Ao0){var Lt=AK;var Ayx=1-Lt;AK=((Ayx*Lt)*(this.OU+1))+(Lt*Lt);}else if(this.AJm){
var Lt=AK;var Ayx=1-Lt;var A$y=Lt*Lt;var Bv0=Ayx*Ayx;AK=(((Bv0*Lt)*(this.OU+1))+((
Ayx*A$y)*(this.Uq+2)))+(A$y*Lt);}}this.Atj(AK);(B=this.Agv)?B[1].call(B[0],this):
null;},Bxv:function(){var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Lp=this.
Vg;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;var MH=false;var H8=this.WJ;if(
!this.D9&&(Aq>=Og)){this.D9=1;Aq=Aq-Og;this.Dq=this.Dq+Og;}if((this.D9>0)&&(Aq>=
G0)){var H7=(Aq/G0)|0;this.D9=this.D9+H7;Aq=Aq-(H7*G0);this.Dq=this.Dq+(H7*G0);}
if((this.D9>2)&&!this.Mq)this.D9=1;if(this.D9>0)Lp=this.Pm;if((this.D9>=this.Mq)&&(
this.Mq>0)){MH=true;H8=0;}else if(Aq>=Lp)H8=1-((Aq-Lp)*this.Ax_);else if(H8>=0)H8=
0;if(H8!==this.WJ){this.WJ=H8;this.AIZ(H8);}return MH;},Bxu:function(){var Aq=(this.
Dq-this.timer.Bu)|0;var Lp=this.Vg;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;
var MH=false;var H8=this.WJ;if((this.D9>1)&&(Aq<0)){var H7=(((-Aq+G0)-1)/G0)|0;if((
this.D9-H7)<=0)H7=this.D9-1;this.D9=this.D9-H7;Aq=Aq+(H7*G0);this.Dq=this.Dq+(H7
*G0);}if(((this.D9===1)&&(Aq<0))&&(this.Mq>0)){this.D9=0;Aq=Aq+Og;this.Dq=this.Dq+
Og;}if(((this.D9===1)&&(Aq<0))&&!this.Mq){var H7=(((-Aq+G0)-1)/G0)|0;Aq=Aq+(H7*G0
);this.Dq=this.Dq+(H7*G0);}if(this.D9>0)Lp=this.Pm;if(Aq<0){MH=true;H8=1;}else if(
Aq>=Lp)H8=1-((Aq-Lp)*this.Ax_);else if(H8>=0)H8=1;if(H8!==this.WJ){this.WJ=H8;this.
AIZ(H8);}return MH;},Bxt:function(){var Aq=(this.Dq-this.timer.Bu)|0;var Lp=this.
Vg;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;var MH=false;var H8=this.WJ;if((
this.D9>1)&&(Aq<0)){var H7=(((-Aq+G0)-1)/G0)|0;if((this.D9-H7)<=0)H7=this.D9-1;this.
D9=this.D9-H7;Aq=Aq+(H7*G0);this.Dq=this.Dq+(H7*G0);}if(((this.D9===1)&&(Aq<0))&&(
this.Mq>0)){this.D9=0;Aq=Aq+Og;this.Dq=this.Dq+Og;}if(((this.D9===1)&&(Aq<0))&&!
this.Mq){var H7=(((-Aq+G0)-1)/G0)|0;Aq=Aq+(H7*G0);this.Dq=this.Dq+(H7*G0);}if(this.
D9>0)Lp=this.Pm;if(Aq<0){MH=true;H8=0;}else if(Aq>=Lp)H8=(Aq-Lp)*this.Ax_;else if(
H8>=0)H8=0;if(H8!==this.WJ){this.WJ=H8;this.AIZ(H8);}return MH;},Bxs:function(){
var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Lp=this.Vg;var Og=this.Vg+this.
Pd;var G0=this.Pm+this.Pd;var MH=false;var H8=this.WJ;if(!this.D9&&(Aq>=Og)){this.
D9=1;Aq=Aq-Og;this.Dq=this.Dq+Og;}if((this.D9>0)&&(Aq>=G0)){var H7=(Aq/G0)|0;this.
D9=this.D9+H7;Aq=Aq-(H7*G0);this.Dq=this.Dq+(H7*G0);}if((this.D9>2)&&!this.Mq)this.
D9=1;if(this.D9>0)Lp=this.Pm;if((this.D9>=this.Mq)&&(this.Mq>0)){MH=true;H8=1;}else
if(Aq>=Lp)H8=(Aq-Lp)*this.Ax_;else if(H8>=0)H8=1;if(H8!==this.WJ){this.WJ=H8;this.
AIZ(H8);}return MH;},Ad8:function(E){if(this.ARS===E)return;this.ARS=E;if(!this.
Bw||!this.Aih)return;if(E)this.SI=-1;else this.SI=1;this.Dq=(this.timer.AtZ()*2)-
this.Dq;},AC8:function(E){if(E<0)E=0;if(E>1)E=1;this.ALQ=E;},ACX:function(E){if(
E<1)E=1;if(E>10)E=10;this.A2G=E;this.MP=null;},ADA:function(E){if(E<1)E=1;if(E>10
)E=10;this.AvI=E;},ACS:function(E){if(E<0)E=0;if(E>10)E=10;this.Ate=E;},Au9:function(
E){if(E<1)E=1;if(E>100)E=100;this.U7=E;},ADP:function(E){if(this.ASE===E)return;
this.ASE=E;if(this.Ag2===26){this.Uq=E;this.Ao0=(this.OU===this.Uq)&&!!this.OU;this.
AJm=!this.Ao0&&(this.OU!==this.Uq);}},ADO:function(E){if(this.ASD===E)return;this.
ASD=E;if(this.Ag2===26){this.OU=E;this.Ao0=(this.OU===this.Uq)&&!!this.OU;this.AJm=
!this.Ao0&&(this.OU!==this.Uq);}},VN:function(E){if(this.Ag2===E)return;this.Ag2=
E;this.MP=null;switch(E){case 24:{this.OU=-1.1;this.Uq=1.1;}break;case 22:{this.
OU=-1;this.Uq=-2;}break;case 23:{this.OU=2;this.Uq=1;}break;case 25:{this.OU=1.1;
this.Uq=-1.1;}break;case 0:{this.OU=0;this.Uq=0;}break;default:{this.OU=this.ASD;
this.Uq=this.ASE;}}this.Ao0=(this.OU===this.Uq)&&!!this.OU;this.AJm=!this.Ao0&&(
this.OU!==this.Uq);},IF:function(E){if(E<0)E=0;this.Mq=E;},FA:function(E){if(E<15
)E=15;this.Pd=E;this.Ax_=1/E;},VM:function(E){if(E<0)E=0;this.Pm=E;},AjH:function(
E){if(E<0)E=0;this.Vg=E;},Ap:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&
!!this.timer){A.zl([this,this.Ma],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(C.Af1);A.y_([this,this.Ma],this.timer,0);this.Aih=0;A.ow([this,
this.Ma],this);}},Atj:function(Zy){},Av3:function(H){this.Ap(false);},AEO:function(
H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.__proto__=
C.ES;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P2)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.R5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Agv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.F_={Q:null,A4:0,B1:255,Cv:0,Atj:function(Zy){var F;this.A4=this.Cv+(Math.round((
this.B1-this.Cv)*Zy)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.F_;},_Mark:function(D){var B;C.
ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Effects::Int32Effect"};C.AEa={Q:null,A4:A.vw,B1:B$,Cv:A.vw,Atj:function(
Zy){var F;var FY=this.Cv[0];var Dl=this.Cv[1];FY=FY+(Math.round((this.B1[0]-FY)*
Zy)|0);Dl=Dl+(Math.round((this.B1[1]-Dl)*Zy)|0);this.A4=[FY,Dl];if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.ES._Init.call(this,aArg);this.
__proto__=C.AEa;},_Mark:function(D){var B;C.ES._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::PointEffect"};C.ALc={
Q:null,A4:0,B1:0xFFFFFFFF,Cv:0,Atj:function(Zy){var F;var O1=this.Cv&0xFF;var ZJ=(
this.Cv>>8)&0xFF;var AkB=(this.Cv>>16)&0xFF;var Aku=(this.Cv>>24)&0xFF;O1=O1+((((
this.B1&0xFF)-O1)*Zy)|0);ZJ=ZJ+(((((this.B1>>8)&0xFF)-ZJ)*Zy)|0);AkB=AkB+(((((this.
B1>>16)&0xFF)-AkB)*Zy)|0);Aku=Aku+(((((this.B1>>24)&0xFF)-Aku)*Zy)|0);if(O1<0)O1=
0;if(O1>255)O1=255;if(ZJ<0)ZJ=0;if(ZJ>255)ZJ=255;if(AkB<0)AkB=0;if(AkB>255)AkB=255;
if(Aku<0)Aku=0;if(Aku>255)Aku=255;this.A4=(O1&0xFF)|((ZJ&0xFF)<<8)|((AkB&0xFF)<<
16)|((Aku&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.ALc;},_Mark:function(D){var B;
C.ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Effects::ColorEffect"};C.MY={A4:0,B1:1,Cv:0,Atj:function(Zy){this.
A4=this.Cv+((this.B1-this.Cv)*Zy);},_Init:function(aArg){C.ES._Init.call(this,aArg
);this.__proto__=C.MY;},_className:"Effects::FloatEffect"};C.UT={timer:null,Q:null
,D9:0,Dq:0,Pd:1000,Pm:1000,Vg:0,Bw:false,Cv:false,B1:true,Ma:function(H){var F;if(
!this.timer)return;if(this.D9<0){this.Dq=this.timer.Bu;this.D9=0;}var Aq=(this.timer.
Bu-this.Dq)|0;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;var Lp=this.Vg;var Jw=
this.D9;if(!Jw&&(Aq>=Og)){Jw=1;Aq=Aq-Og;}if((Jw>0)&&(Aq>=G0)){var H7=(Aq/G0)|0;Aq=
Aq-(H7*G0);Jw=Jw+H7;}if(Jw>2)Jw=1;if(Jw!==this.D9){this.Dq=this.timer.Bu-(((B=Aq
)<0)?B+0x100000000:B);this.D9=Jw;}if(Jw>0)Lp=this.Pm;if(!!this.Q){if(Aq>=Lp)(F=this.
Q,F[2].call(F[0],this.Cv));if((Aq<Lp)&&(Jw>0))(F=this.Q,F[2].call(F[0],this.B1));
}},FA:function(E){if(E<100)E=100;this.Pd=E;},VM:function(E){if(E<0)E=0;this.Pm=E;
},AjH:function(E){if(E<0)E=0;this.Vg=E;},Ap:function(E){if(this.Bw===E)return;this.
Bw=E;if(!E&&!!this.timer){A.zl([this,this.Ma],this.timer,0);this.timer=null;}if(
E){this.timer=A._GetAutoObject(C.Af1);A.y_([this,this.Ma],this.timer,0);this.D9=-
1;}},_Init:function(aArg){this.__proto__=C.UT;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.timer)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.Mk={O4:null,AG:null,Af:null,Ac:null,O:null
,AIC:null,A0n:null,Ajz:null,Dp:true,Bw:true,AbJ:true,Aiu:false,AiD:true,YV:true,
QG:true,Mi:function(){if(!!this.O4)this.O4.Mi();},Aun:function(){return true;},YA:
function(){},R$:function(){this.Mi();},_Init:function(aArg){this.__proto__=C.Mk;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.O4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ac)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.A0n)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajz)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Arq={AqR:A.vw
,MJ:false,Aun:function(){return this.MJ;},YA:function(){if(!this.Dp&&!!this.O.Ac
)this.O.X(false);if((!this.Dp&&this.QG)&&!!this.O.Ac)this.O.Ac.HH(this.O);if(!this.
Bw)this.O.Ap(false);},R$:function(){if(this.Bw)this.O.Ap(true);if((this.Dp||this.
Aiu)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YV)this.
O.Ac.QI(this.O);if(this.Dp&&this.AiD)this.O.Ac.A$(this.O);if(this.Dp&&!this.AbJ)
this.O.G(A.aaM(this.O.M,this.AqR));if(this.Dp){this.O.DD(255);this.O.X(true);}if(
!this.Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);this.MJ=true;this.Mi();},_Init:
function(aArg){C.Mk._Init.call(this,aArg);this.__proto__=C.Arq;},_className:"Effects::VisibilityFader"
};C.AvE={ES:null,MJ:false,Ao3:false,Aun:function(){return this.MJ;},YA:function(
){if(this.Dp)this.O.DD(this.ES.B1);if(!this.Dp&&!this.O.GN)this.O.X(false);if((!
this.Dp&&this.QG)&&!!this.O.Ac)this.O.Ac.HH(this.O);if(!this.Bw)this.O.Ap(false);
},R$:function(){var B;if(this.AbJ){if(this.O.E$()&&!!this.O.Ac)this.ES.Cv=this.O.
GN;else this.ES.Cv=0;}var Ayb=((!this.O.Ac||!this.O.GN)||!this.O.E$())||(((B=A.kz(
this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ayc=((
!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QG))||!this.ES.B1)||(((B=A.kz(this.O.
M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ayb&&Ayc){
this.ES.Cv=0;this.ES.B1=0;}this.Ao3=this.O.AP5();if(this.Bw)this.O.Ap(true);if((
this.Dp||this.Aiu)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&
this.YV)this.O.Ac.QI(this.O);if(this.Dp&&this.AiD)this.O.Ac.A$(this.O);if(!this.
Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);if(this.Dp&&!this.O.E$()){this.O.DD(this.
ES.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||!this.O.E$())||!this.O.GN)){this.
MJ=true;this.Mi();return;}if(!this.Dp&&(this.ES.Cv===this.ES.B1))this.O.DD(this.
ES.Cv);if(this.O.GN===this.ES.B1){this.MJ=true;this.Mi();return;}if(this.ES.Cv===
this.ES.B1){this.MJ=true;this.Mi();return;}if(!this.ES.Mq)this.ES.IF(1);this.ES.
Q=[B=this.O,B.AuN,B.AXB];this.ES.Ad8(false);this.ES.Aj6=false;this.ES.R5=[this,this.
AhY];this.ES.Agv=null;this.ES.Ap(true);},AhY:function(H){this.MJ=true;this.Mi();
},_Init:function(aArg){C.Mk._Init.call(this,aArg);C.F_._Init.call(this.ES={I:this
},0);this.__proto__=C.AvE;},_Done:function(){this.__proto__=C.Mk;this.ES._Done();
C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.call(this);this.ES._ReInit(
);},_Mark:function(D){var B;C.Mk._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Aeb={Cn:null,D6:null,Ac9:false
,MJ:false,Ao3:false,Aun:function(){return this.MJ;},YA:function(){if(this.Dp){this.
O.DD(this.Cn.B1);this.O.G(A.aaM(this.O.M,this.D6.B1));}if(!this.Dp&&!this.O.GN)this.
O.X(false);if((!this.Dp&&this.QG)&&!!this.O.Ac)this.O.Ac.HH(this.O);if(this.Ac9)
this.O.Aqm(this.Ao3);if(!this.Bw)this.O.Ap(false);},R$:function(){var B;if(this.
AbJ){if(this.O.E$()&&!!this.O.Ac)this.Cn.Cv=this.O.GN;else this.Cn.Cv=0;this.D6.
Cv=this.O.M.slice(0,2);}var Ayb=((!this.O.Ac||!this.O.GN)||!this.O.E$())||(((B=A.
kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Ayc=((!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QG))||!this.Cn.B1)||(((B=A.kz(
A.aam([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D6.B1),[0,0,(B=this.Ac.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ayb&&Ayc){this.Cn.Cv=0;this.Cn.B1=0;this.
D6.Cv=this.D6.B1;}this.Ao3=this.O.AP5();if(this.Bw)this.O.Ap(true);if((this.Dp||
this.Aiu)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YV)
this.O.Ac.QI(this.O);if(this.Dp&&this.AiD)this.O.Ac.A$(this.O);if(!this.Dp&&(this.
Ac.AY===this.O))this.Ac.A$(null);if(this.Dp&&!this.O.E$()){this.O.G(A.aaM(this.O.
M,this.D6.Cv));this.O.DD(this.Cn.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||
!this.O.E$())||!this.O.GN)){this.MJ=true;this.Mi();return;}if(!this.Dp&&A.z8(this.
D6.Cv,this.D6.B1))this.O.G(A.aaM(this.O.M,this.D6.Cv));if(!this.Dp&&(this.Cn.Cv===
this.Cn.B1))this.O.DD(this.Cn.Cv);if((this.O.GN===this.Cn.B1)&&A.z8(this.O.M.slice(
0,2),this.D6.B1)){this.MJ=true;this.Mi();return;}if((this.Cn.Cv===this.Cn.B1)&&A.
z8(this.D6.Cv,this.D6.B1)){this.MJ=true;this.Mi();return;}if(!this.Cn.Mq)this.Cn.
IF(1);if(!this.D6.Mq)this.D6.IF(1);if(this.Ac9)this.O.Aqm(true);this.D6.Q=null;this.
D6.Ad8(false);this.D6.Aj6=false;this.D6.R5=[this,this.AhY];this.D6.Agv=[this,this.
AyG];this.Cn.Q=[B=this.O,B.AuN,B.AXB];this.Cn.Ad8(false);this.Cn.Aj6=false;this.
Cn.R5=[this,this.AhY];this.Cn.Agv=null;this.D6.Ap(!A.z8(this.D6.Cv,this.D6.B1));
this.Cn.Ap(this.Cn.Cv!==this.Cn.B1);},AhY:function(H){this.MJ=!this.Cn.Bw&&!this.
D6.Bw;this.Mi();},AyG:function(H){this.O.G(A.aaM(this.O.M,this.D6.A4));},_Init:function(
aArg){C.Mk._Init.call(this,aArg);C.F_._Init.call(this.Cn={I:this},0);C.AEa._Init.
call(this.D6={I:this},0);this.__proto__=C.Aeb;},_Done:function(){this.__proto__=
C.Mk;this.Cn._Done();this.D6._Done();C.Mk._Done.call(this);},_ReInit:function(){
C.Mk._ReInit.call(this);this.Cn._ReInit();this.D6._ReInit();},_Mark:function(D){
var B;C.Mk._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Arr={AcO:null,Cn:null,GS:null,Vz:null,FG:null,TK:A.vw,AjT:A.vw,MJ:false,Ao3:false
,Aun:function(){return this.MJ;},YA:function(){if(this.Dp){this.O.DD(this.Cn.B1);
this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.TK));this.O.X(true);}if(!this.
Dp&&!this.Cn.B1){this.O.DD(0);this.O.X(false);}if(((!this.Dp&&(this.Cn.B1>0))&&!
!this.O.Ac)&&!this.QG){this.O.DD(this.Cn.B1);this.O.G(A.aam(A.aal(this.O.M,A.zT(
this.O.M)),this.TK));this.O.X(true);}if((!this.Dp&&this.QG)&&!!this.O.Ac)this.O.
Ac.HH(this.O);this.O.Aqm(this.Ao3);if(!!this.AcO)this.Ac.HH(this.AcO);if(!this.Bw
)this.O.Ap(false);},R$:function(){var B;if(this.AbJ){if(this.O.E$()&&!!this.O.Ac
)this.Cn.Cv=this.O.GN;else this.Cn.Cv=0;this.AjT=A.zT(this.O.M);}var Ayb=((!this.
O.Ac||!this.O.GN)||!this.O.E$())||(((B=A.kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ayc=((!this.Dp&&((!this.O.Ac||!this.O.
E$())||this.QG))||!this.Cn.B1)||(((B=A.kz(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.
TK),[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ayb&&Ayc
){this.Cn.Cv=0;this.Cn.B1=0;this.AjT=this.TK;this.Vz.A4K();}this.Ao3=this.O.AP5(
);if(this.Bw)this.O.Ap(true);if((this.Dp||this.Aiu)&&!this.O.Ac){this.O.X(false);
this.Ac.J(this.O,0);}if(this.Dp&&this.YV)this.O.Ac.QI(this.O);if(this.Dp&&this.AiD
)this.O.Ac.A$(this.O);if(!this.Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);if(this.
Dp&&!this.O.E$())this.O.DD(this.Cn.Cv);if((!this.Dp&&A.z8(this.AjT,this.TK))&&this.
Vz.ABZ())this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.AjT));if(!this.Dp&&(
this.Cn.Cv===this.Cn.B1))this.O.DD(this.Cn.Cv);if(!this.Dp&&((!this.O.Ac||!this.
O.E$())||!this.O.GN)){this.MJ=true;this.Mi();return;}if(((this.Dp&&(this.O.GN===
this.Cn.B1))&&A.z8(A.zT(this.O.M),this.TK))&&this.O.E$()){this.MJ=true;this.Mi();
return;}if(((!this.Dp&&(this.O.GN===this.Cn.B1))&&A.z8(A.zT(this.O.M),this.TK))&&
this.Vz.ABZ()){this.MJ=true;this.Mi();return;}if(((this.Cn.Cv===this.Cn.B1)&&A.z8(
this.AjT,this.TK))&&this.Vz.ABZ()){this.MJ=true;this.Mi();return;}this.O.Aqm(true
);this.O.X(false);this.AcO=A._NewObject(A.abh.AS0,0);this.AcO.Bi$(this.O);this.AcO.
DD(this.Cn.Cv);this.AcO.Bj1(A.zT([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.O.Ac.
AJ1(this.AcO,this.O);if(!this.Cn.Mq)this.Cn.IF(1);if(!this.GS.Mq)this.GS.IF(1);this.
GS.Ad8(false);this.GS.Aj6=false;this.GS.R5=[this,this.AhY];this.GS.Agv=[this,this.
AyG];if(this.Dp){this.GS.Cv=0;this.GS.B1=1;}else{this.GS.Cv=1;this.GS.B1=0;}this.
Cn.Q=[B=this.AcO,B.AuN,B.DD];this.Cn.Ad8(false);this.Cn.Aj6=false;this.Cn.R5=[this
,this.AhY];this.Cn.Agv=null;this.GS.Ap(!A.z8(this.AjT,this.TK)||!this.Vz.ABZ());
this.Cn.Ap(this.Cn.Cv!==this.Cn.B1);},AhY:function(H){this.MJ=!this.Cn.Bw&&!this.
GS.Bw;this.Mi();},AyG:function(H){var B;var Azv=A.aaj(this.TK,this.AjT);if(!this.
Dp)Azv=[-Azv[0],-Azv[1]];this.FG.A4K();this.FG.Af5=this.Vz.Af5;this.FG.Bmf(Azv[0
],Azv[1],0);this.FG.BfK(this.Vz,this.FG,this.GS.A4);if(this.Dp)this.AcO.AFd(this.
AjT,this.FG);else this.AcO.AFd(this.TK,this.FG);},_Init:function(aArg){C.Mk._Init.
call(this,aArg);C.F_._Init.call(this.Cn={I:this},0);C.MY._Init.call(this.GS={I:this
},0);A.Graphics.Awg._Init.call(this.Vz={I:this},0);A.Graphics.Awg._Init.call(this.
FG={I:this},0);this.__proto__=C.Arr;},_Done:function(){this.__proto__=C.Mk;this.
Cn._Done();this.GS._Done();this.Vz._Done();this.FG._Done();C.Mk._Done.call(this);
},_ReInit:function(){C.Mk._ReInit.call(this);this.Cn._ReInit();this.GS._ReInit();
this.Vz._ReInit();this.FG._ReInit();},_Mark:function(D){var B;C.Mk._Mark.call(this
,D);if((B=this.AcO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.FG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Effects::WarpFader"};C.QR={RF:function(){return null;},RE:function(){return null;
},Ade:function(){return this.RF();},Add:function(){return this.RE();},_Init:function(
aArg){this.__proto__=C.QR;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.ASf={RF:function(){var Al=A._NewObject(C.Arq,0);Al.Dp=true;Al.Bw=true;Al.AiD=false;
Al.YV=true;Al.AbJ=false;Al.Ajz=[this,this.AoA];return Al;},RE:function(){var Al=
A._NewObject(C.Arq,0);Al.Dp=false;Al.Bw=false;Al.QG=true;return Al;},Ade:function(
){var Al=C.QR.Ade.call(this);Al.YV=false;Al.Bw=true;return Al;},Add:function(){var
Al=A._NewObject(C.Arq,0);Al.Dp=false;Al.Bw=true;Al.Aiu=true;Al.QG=false;return Al;
},AoA:function(H){var B;var Al=(C.Arq.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(
0,2);pos=[(A8[0]+(((A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((
A8[3]-A8[1])/2)|0))-((CZ[1]/2)|0)];Al.AqR=pos;},_Init:function(aArg){C.QR._Init.
call(this,aArg);this.__proto__=C.ASf;},_className:"Effects::ShowHideTransition"};
C.Adm={AAL:500,RF:function(){var Al=A._NewObject(C.Aeb,0);Al.Dp=true;Al.Bw=true;
Al.AiD=false;Al.YV=true;Al.AbJ=true;Al.Ac9=false;Al.Ajz=[this,this.AoA];Al.Cn.FA(
this.AAL);Al.Cn.Cv=0;Al.Cn.B1=255;Al.D6.FA(this.AAL);Al.D6.VN(23);return Al;},RE:
function(){var Al=A._NewObject(C.AvE,0);Al.Dp=false;Al.Bw=false;Al.QG=true;Al.AbJ=
true;Al.ES.Cv=255;Al.ES.B1=0;Al.ES.FA(this.AAL);return Al;},Ade:function(){var Al=
C.QR.Ade.call(this);Al.YV=false;Al.Bw=true;return Al;},Add:function(){var Al=C.QR.
Add.call(this);Al.Aiu=true;Al.QG=false;Al.Bw=true;return Al;},AoA:function(H){var
B;var Al=(C.Aeb.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[
1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);pos=[(A8[0]+(((A8[
2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((A8[3]-A8[1])/2)|0))-((
CZ[1]/2)|0)];Al.D6.B1=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GN)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.
O.M,pos));},_Init:function(aArg){C.QR._Init.call(this,aArg);this.__proto__=C.Adm;
},_className:"Effects::FadeInOutTransition"};C.AEL={J7:0x12,Atx:0,Ac9:false,RF:function(
){var Al=A._NewObject(C.Aeb,0);Al.Dp=true;Al.Bw=true;Al.AiD=false;Al.YV=true;Al.
AbJ=true;Al.Ac9=this.Ac9;Al.Ajz=[this,this.AoA];Al.Cn.FA(500);Al.Cn.AjH(0);Al.Cn.
Cv=0;Al.Cn.B1=255;Al.D6.FA(500);Al.D6.VN(23);Al.D6.ADO(0);Al.D6.ADP(0);Al.D6.Au9(
3);Al.D6.ACS(0.5);Al.D6.ADA(3);Al.D6.ACX(3);Al.D6.AC8(0.5);return Al;},RE:function(
){var Al=A._NewObject(C.Aeb,0);Al.Dp=false;Al.Bw=false;Al.QG=true;Al.AbJ=true;Al.
Ac9=this.Ac9;Al.Ajz=[this,this.A0z];Al.Cn.Cv=255;Al.Cn.B1=0;Al.Cn.FA(500);Al.Cn.
AjH(0);Al.D6.FA(500);Al.D6.VN(23);Al.D6.ADO(0);Al.D6.ADP(0);Al.D6.Au9(3);Al.D6.ACS(
0.5);Al.D6.ADA(3);Al.D6.ACX(3);Al.D6.AC8(0.5);return Al;},Ade:function(){var Al=
C.QR.Ade.call(this);Al.YV=false;Al.Bw=true;return Al;},Add:function(){var Al=C.QR.
Add.call(this);Al.Aiu=true;Al.QG=false;Al.Bw=true;return Al;},AoA:function(H){var
B;var Al=(C.Aeb.isPrototypeOf(H)?H:null);var Br=this.J7;var A8=[0,0,(B=Al.Ac.M)[
2]-B[0],B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);if(((
Br&0x4)===0x4))pos=[A8[2]-CZ[0],pos[1]];else if(((Br&0x2)===0x2))pos=[(A8[0]+(((
A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];if(((Br&0x20)===0x20))pos=[pos[0],A8[3
]-CZ[1]];else if(((Br&0x10)===0x10))pos=[pos[0],(A8[1]+(((A8[3]-A8[1])/2)|0))-((
CZ[1]/2)|0)];Al.D6.B1=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GN)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hp=[(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];switch(this.Atx){case 5:pos=[pos[0],-CZ[1]];break;case 3:{
pos=[pos[0],-CZ[1]];pos=[Hp[0],pos[1]];}break;case 8:pos=[-CZ[0],-CZ[1]];break;case
2:pos=[Hp[0],pos[1]];break;case 7:pos=[-CZ[0],pos[1]];break;case 4:pos=[pos[0],Hp[
1]];break;case 1:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 6:{pos=[pos[
0],Hp[1]];pos=[-CZ[0],pos[1]];}break;default:;}Al.O.G(A.aaM(Al.O.M,pos));}},A0z:
function(H){var B;var Al=(C.Aeb.isPrototypeOf(H)?H:null);var pos=Al.O.M.slice(0,
2);var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var Hp=[(B=Al.Ac.M)[2]-B[0],B[3]-B[1]];
switch(this.Atx){case 5:pos=[pos[0],Hp[1]];break;case 3:{pos=[pos[0],Hp[1]];pos=[-
CZ[0],pos[1]];}break;case 8:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 2:
pos=[-CZ[0],pos[1]];break;case 7:pos=[Hp[0],pos[1]];break;case 4:pos=[pos[0],-CZ[
1]];break;case 1:pos=[-CZ[0],-CZ[1]];break;case 6:{pos=[pos[0],-CZ[1]];pos=[Hp[0
],pos[1]];}break;default:;}Al.D6.B1=pos;},_Init:function(aArg){C.QR._Init.call(this
,aArg);this.__proto__=C.AEL;},_className:"Effects::SlideTransition"};C.AgS={RF:function(
){var Al=A._NewObject(C.Arr,0);Al.Dp=true;Al.Bw=true;Al.AiD=false;Al.YV=true;Al.
AbJ=true;Al.Ajz=[this,this.AoA];Al.Cn.FA(500);Al.Cn.AjH(0);Al.Cn.Cv=0;Al.Cn.B1=255;
Al.GS.FA(500);Al.GS.VN(23);Al.GS.ADO(0);Al.GS.ADP(0);Al.GS.Au9(3);Al.GS.ACS(0.5);
Al.GS.ADA(3);Al.GS.ACX(3);Al.GS.AC8(0.5);Al.Vz.Aek(0.5,0.5,1);return Al;},RE:function(
){var Al=A._NewObject(C.Arr,0);Al.Dp=false;Al.Bw=false;Al.QG=true;Al.AbJ=true;Al.
Ajz=[this,this.A0z];Al.Cn.Cv=255;Al.Cn.B1=0;Al.Cn.FA(500);Al.Cn.AjH(0);Al.GS.FA(
500);Al.GS.VN(23);Al.GS.ADO(0);Al.GS.ADP(0);Al.GS.Au9(3);Al.GS.ACS(0.5);Al.GS.ADA(
3);Al.GS.ACX(3);Al.GS.AC8(0.5);Al.Vz.Aek(0.5,0.5,1);return Al;},Ade:function(){var
Al=C.QR.Ade.call(this);Al.YV=false;Al.Bw=true;return Al;},Add:function(){var Al=
C.QR.Add.call(this);Al.Aiu=true;Al.QG=false;Al.Bw=true;return Al;},AoA:function(
H){var B;var Al=(C.Arr.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.Ac.M)[2]-B[0],
B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);pos=[(A8[
0]+(((A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((A8[3]-A8[1
])/2)|0))-((CZ[1]/2)|0)];Al.TK=A.aak(pos,[(CZ[0]/2)|0,(CZ[1]/2)|0]);if(((!Al.O.Ac||
!Al.O.E$())||!Al.O.GN)||(((B=A.kz(Al.O.M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.O.M,A.aaj(Al.TK,A.zT([0,0,(B=Al.O.M)[2]-
B[0],B[3]-B[1]]))));},A0z:function(H){var Al=(C.Arr.isPrototypeOf(H)?H:null);Al.
TK=A.zT(Al.O.M);},_Init:function(aArg){C.QR._Init.call(this,aArg);this.__proto__=
C.AgS;},_className:"Effects::ScaleTransition"};C.Ag2={BAa:0,BAQ:1,BAS:2,BAR:3,Bzx:
4,Bzz:5,Bzy:6,BBk:7,BBm:8,BBl:9,By6:10,By8:11,By7:12,ByM:13,ByO:14,ByN:15,Bzo:16
,Bzq:17,Bzp:18,ByX:19,ByZ:20,ByY:21,Bzn:22,BzB:23,Bzm:24,BzC:25,Bzb:26};C.Bzh={A17:
0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20};C.ALP={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ALP;},_className:"Effects::EffectTimerClass"};C.
Af1={_Init:function(){C.ALP._Init.call(this,0);this.QB(15);this.Ap(true);},_variants:
function(){return this;},_this:null};C.AE0={O3:A.aan(12,0,null),Akv:A.aan(12,0,null
),_Init:function(aArg){(this.O3=[]).__proto__=C.AE0.O3;(this.Akv=[]).__proto__=C.
AE0.Akv;this.__proto__=C.AE0;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};
C.AAS={B5:null,B8:null,A5g:function(Ar1){var Al=this.B8;while(!!Al){Al.YA();Al.O.
U=Al.O.U&~0x40000;Al=Al.Af;}Al=this.B8;while(!!Al){A.ow(Al.A0n,Al);Al=Al.Af;}},A5f:
function(Ar1){var Al=this.B8;while(!!Al){A.ow(Al.AIC,Al);Al=Al.Af;}this.B8=null;
this.B5=null;},R$:function(Ar1){var B;if(!this.B8)this.Mi();var Al=this.B8;while(
!!Al){Al.O.U=(Al.O.U|0x40000)&~0x20000;Al.O.AoI=null;Al=Al.Af;}Al=this.B8;while(
!!Al){(B=Al.Ajz)?B[1].call(B[0],Al):null;Al.R$();Al=Al.Af;}},Mi:function(){var Al=
this.B8;while(!!Al&&Al.Aun())Al=Al.Af;if(!Al)A.Core.Aj7.Mi.call(this);},BkP:function(
FE){if(!FE)return;if(this.AOQ())throw new Error(BH);if(FE.O4!==this)throw new Error(
EV);if(!!FE.Af)FE.Af.AG=FE.AG;else this.B5=FE.AG;if(!!FE.AG)FE.AG.Af=FE.Af;else this.
B8=FE.Af;FE.O4=null;FE.Af=null;FE.AG=null;if(!!FE.O)FE.O.AoI=null;A.ow(FE.AIC,FE
);if(!this.B8)this.Ac_();},A11:function(FE){if(!FE)return;if(this.AOQ())throw new
Error(GT);if(!!FE.O4)throw new Error(Jt);FE.AG=this.B5;FE.Af=null;if(!!this.B5)this.
B5.Af=FE;else this.B8=FE;this.B5=FE;FE.O4=this;},_Init:function(aArg){A.Core.Aj7.
_Init.call(this,aArg);this.__proto__=C.AAS;},_Mark:function(D){var B;A.Core.Aj7.
_Mark.call(this,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::FaderTask"};C.AvV={
_Init:function(){C.ASf._Init.call(this,0);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.F_.__proto__=C.ES;C.AEa.__proto__=C.ES;C.ALc.__proto__=C.ES;
C.MY.__proto__=C.ES;C.Arq.__proto__=C.Mk;C.AvE.__proto__=C.Mk;C.Aeb.__proto__=C.
Mk;C.Arr.__proto__=C.Mk;C.ASf.__proto__=C.QR;C.Adm.__proto__=C.QR;C.AEL.__proto__=
C.QR;C.AgS.__proto__=C.QR;C.ALP.__proto__=A.Core.Timer;C.AAS.__proto__=A.Core.Aj7;
};C._ReInit=function(){var B;if((B=C.Af1._this))B._ReInit();if((B=C.AvV._this))B.
_ReInit();};C.DE=function(D){var B;if((B=C.Af1._this)&&(B._cycle!=D))B._Done(C.Af1.
_this=null);if((B=C.AvV._this)&&(B._cycle!=D))B._Done(C.AvV._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */