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
var B_=[100,100];var BH="Trying to remove a fader from a task, which is actually running";
var EV="The fader doesn\'t belong to this task";var GS="Trying to add a fader to a task, which is actually running";
var Jt="The fader belongs already to a task";
C.ES={MN:null,timer:null,P1:null,R5:null,Agw:null,SI:0,Aif:0,Un:0,OU:0,Ax7:0.001,
WH:0,D9:0,Dq:0,ALU:0.5,A2G:3,AvH:3,Ate:0.5,U7:3,ASI:0,ASH:0,Mp:0,Pd:1000,Pm:0,Vg:
0,Ag3:0,Bw:false,Aj4:false,ARW:false,Ao1:false,AJq:false,L$:function(H){var B;if(
!this.timer)return;if(!this.Aif){if(this.ARW)this.Aif=-1;else this.Aif=1;this.SI=
this.Aif;this.Dq=this.timer.Bu;this.D9=0;this.WH=-1;}var MG;if((this.Aif>0)&&(this.
SI>0))MG=this.Bxo();else if((this.Aif<0)&&(this.SI<0))MG=this.Bxr();else if(this.
Aif>0)MG=this.Bxp();else MG=this.Bxq();if(MG){this.Ap(false);(B=this.P1)?B[1].call(
B[0],this):null;(B=this.R5)?B[1].call(B[0],this):null;}},AI3:function(AK){var B;
if(!this.MN&&(((this.Ag3===19)||(this.Ag3===20))||(this.Ag3===21))){var AHD=this.
A2G+1;var BuX=Math.sqrt(this.ALU);var Rf=0.5;var P;this.MN=A._NewObject(C.AEZ,0);
this.MN.O3.Set(0,1);this.MN.Akw.Set(0,1);for(P=1;P<AHD;P=P+1){this.MN.O3.Set(P,this.
MN.O3.Get(P-1)*BuX);this.MN.Akw.Set(P,this.MN.Akw.Get(P-1)*this.ALU);Rf=Rf+this.
MN.O3.Get(P);}var BvH=1/Rf;this.MN.O3.Set(0,0.5);Rf=0;for(P=0;P<AHD;P=P+1){this.
MN.O3.Set(P,this.MN.O3.Get(P)*BvH);Rf=Rf+this.MN.O3.Get(P);}this.MN.O3.Set(AHD,this.
MN.O3.Get(AHD)+(1-Rf));}if(this.Aj4){if(AK<0.5)AK=AK*2;else AK=2-(AK*2);}switch(
this.Ag3){case 1:AK=Math.pow(AK,this.U7);break;case 2:{AK=1-AK;AK=1-Math.pow(AK,
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
break;case 16:AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvH)))*A.kw);break;case
17:{AK=1-AK;AK=1-(((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvH)))*A.kw));}break;
case 18:{AK=AK*2;if(AK<1){AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvH)))*A.
kw);AK=AK*0.5;}else{AK=2-AK;AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvH)))*
A.kw);AK=(2-AK)*0.5;}}break;case 19:{var BF=this.MN;var P=0;var Gp=0;var KV=BF.O3.
Get(0);var D2=1-AK;while(D2>KV){P=P+1;Gp=KV;KV=KV+BF.O3.Get(P);}AK=(D2-Gp)/(KV-Gp
);if(!P)AK=1-(AK*AK);else{AK=(2*AK)-1;AK=BF.Akw.Get(P)*(1-(AK*AK));}}break;case 20:{
var BF=this.MN;var P=0;var Gp=0;var KV=BF.O3.Get(0);while(AK>KV){P=P+1;Gp=KV;KV=
KV+BF.O3.Get(P);}AK=(AK-Gp)/(KV-Gp);if(!P)AK=AK*AK;else{AK=(2*AK)-1;AK=1-(BF.Akw.
Get(P)*(1-(AK*AK)));}}break;case 21:{var BF=this.MN;var P=0;var Gp=0;var KV=BF.O3.
Get(0);var Lt=AK*2;var D2=Lt-1;if(Lt<1)D2=-D2;while(D2>KV){P=P+1;Gp=KV;KV=KV+BF.
O3.Get(P);}D2=(D2-Gp)/(KV-Gp);if(!P)D2=D2*D2;else{D2=(2*D2)-1;D2=1-(BF.Akw.Get(P
)*(1-(D2*D2)));}if(Lt<1)AK=0.5*(1-D2);else AK=0.5*(1+D2);}break;default:if(this.
Ao1){var Lt=AK;var Ayu=1-Lt;AK=((Ayu*Lt)*(this.OU+1))+(Lt*Lt);}else if(this.AJq){
var Lt=AK;var Ayu=1-Lt;var A$w=Lt*Lt;var BvW=Ayu*Ayu;AK=(((BvW*Lt)*(this.OU+1))+((
Ayu*A$w)*(this.Un+2)))+(A$w*Lt);}}this.Atj(AK);(B=this.Agw)?B[1].call(B[0],this):
null;},Bxr:function(){var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Lp=this.
Vg;var Og=this.Vg+this.Pd;var GZ=this.Pm+this.Pd;var MG=false;var H8=this.WH;if(
!this.D9&&(Aq>=Og)){this.D9=1;Aq=Aq-Og;this.Dq=this.Dq+Og;}if((this.D9>0)&&(Aq>=
GZ)){var H7=(Aq/GZ)|0;this.D9=this.D9+H7;Aq=Aq-(H7*GZ);this.Dq=this.Dq+(H7*GZ);}
if((this.D9>2)&&!this.Mp)this.D9=1;if(this.D9>0)Lp=this.Pm;if((this.D9>=this.Mp)&&(
this.Mp>0)){MG=true;H8=0;}else if(Aq>=Lp)H8=1-((Aq-Lp)*this.Ax7);else if(H8>=0)H8=
0;if(H8!==this.WH){this.WH=H8;this.AI3(H8);}return MG;},Bxq:function(){var Aq=(this.
Dq-this.timer.Bu)|0;var Lp=this.Vg;var Og=this.Vg+this.Pd;var GZ=this.Pm+this.Pd;
var MG=false;var H8=this.WH;if((this.D9>1)&&(Aq<0)){var H7=(((-Aq+GZ)-1)/GZ)|0;if((
this.D9-H7)<=0)H7=this.D9-1;this.D9=this.D9-H7;Aq=Aq+(H7*GZ);this.Dq=this.Dq+(H7
*GZ);}if(((this.D9===1)&&(Aq<0))&&(this.Mp>0)){this.D9=0;Aq=Aq+Og;this.Dq=this.Dq+
Og;}if(((this.D9===1)&&(Aq<0))&&!this.Mp){var H7=(((-Aq+GZ)-1)/GZ)|0;Aq=Aq+(H7*GZ
);this.Dq=this.Dq+(H7*GZ);}if(this.D9>0)Lp=this.Pm;if(Aq<0){MG=true;H8=1;}else if(
Aq>=Lp)H8=1-((Aq-Lp)*this.Ax7);else if(H8>=0)H8=1;if(H8!==this.WH){this.WH=H8;this.
AI3(H8);}return MG;},Bxp:function(){var Aq=(this.Dq-this.timer.Bu)|0;var Lp=this.
Vg;var Og=this.Vg+this.Pd;var GZ=this.Pm+this.Pd;var MG=false;var H8=this.WH;if((
this.D9>1)&&(Aq<0)){var H7=(((-Aq+GZ)-1)/GZ)|0;if((this.D9-H7)<=0)H7=this.D9-1;this.
D9=this.D9-H7;Aq=Aq+(H7*GZ);this.Dq=this.Dq+(H7*GZ);}if(((this.D9===1)&&(Aq<0))&&(
this.Mp>0)){this.D9=0;Aq=Aq+Og;this.Dq=this.Dq+Og;}if(((this.D9===1)&&(Aq<0))&&!
this.Mp){var H7=(((-Aq+GZ)-1)/GZ)|0;Aq=Aq+(H7*GZ);this.Dq=this.Dq+(H7*GZ);}if(this.
D9>0)Lp=this.Pm;if(Aq<0){MG=true;H8=0;}else if(Aq>=Lp)H8=(Aq-Lp)*this.Ax7;else if(
H8>=0)H8=0;if(H8!==this.WH){this.WH=H8;this.AI3(H8);}return MG;},Bxo:function(){
var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Lp=this.Vg;var Og=this.Vg+this.
Pd;var GZ=this.Pm+this.Pd;var MG=false;var H8=this.WH;if(!this.D9&&(Aq>=Og)){this.
D9=1;Aq=Aq-Og;this.Dq=this.Dq+Og;}if((this.D9>0)&&(Aq>=GZ)){var H7=(Aq/GZ)|0;this.
D9=this.D9+H7;Aq=Aq-(H7*GZ);this.Dq=this.Dq+(H7*GZ);}if((this.D9>2)&&!this.Mp)this.
D9=1;if(this.D9>0)Lp=this.Pm;if((this.D9>=this.Mp)&&(this.Mp>0)){MG=true;H8=1;}else
if(Aq>=Lp)H8=(Aq-Lp)*this.Ax7;else if(H8>=0)H8=1;if(H8!==this.WH){this.WH=H8;this.
AI3(H8);}return MG;},Ad7:function(E){if(this.ARW===E)return;this.ARW=E;if(!this.
Bw||!this.Aif)return;if(E)this.SI=-1;else this.SI=1;this.Dq=(this.timer.AtZ()*2)-
this.Dq;},AC7:function(E){if(E<0)E=0;if(E>1)E=1;this.ALU=E;},ACW:function(E){if(
E<1)E=1;if(E>10)E=10;this.A2G=E;this.MN=null;},ADz:function(E){if(E<1)E=1;if(E>10
)E=10;this.AvH=E;},ACR:function(E){if(E<0)E=0;if(E>10)E=10;this.Ate=E;},Au8:function(
E){if(E<1)E=1;if(E>100)E=100;this.U7=E;},ADO:function(E){if(this.ASI===E)return;
this.ASI=E;if(this.Ag3===26){this.Un=E;this.Ao1=(this.OU===this.Un)&&!!this.OU;this.
AJq=!this.Ao1&&(this.OU!==this.Un);}},ADN:function(E){if(this.ASH===E)return;this.
ASH=E;if(this.Ag3===26){this.OU=E;this.Ao1=(this.OU===this.Un)&&!!this.OU;this.AJq=
!this.Ao1&&(this.OU!==this.Un);}},VN:function(E){if(this.Ag3===E)return;this.Ag3=
E;this.MN=null;switch(E){case 24:{this.OU=-1.1;this.Un=1.1;}break;case 22:{this.
OU=-1;this.Un=-2;}break;case 23:{this.OU=2;this.Un=1;}break;case 25:{this.OU=1.1;
this.Un=-1.1;}break;case 0:{this.OU=0;this.Un=0;}break;default:{this.OU=this.ASH;
this.Un=this.ASI;}}this.Ao1=(this.OU===this.Un)&&!!this.OU;this.AJq=!this.Ao1&&(
this.OU!==this.Un);},IF:function(E){if(E<0)E=0;this.Mp=E;},Fz:function(E){if(E<15
)E=15;this.Pd=E;this.Ax7=1/E;},VM:function(E){if(E<0)E=0;this.Pm=E;},AjF:function(
E){if(E<0)E=0;this.Vg=E;},Ap:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&
!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(C.Af2);A.y_([this,this.L$],this.timer,0);this.Aif=0;A.ow([this,
this.L$],this);}},Atj:function(Zv){},Av2:function(H){this.Ap(false);},AEN:function(
H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.__proto__=
C.ES;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.MN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P1)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.R5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Agw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.F_={Q:null,A4:0,B0:255,Cv:0,Atj:function(Zv){var F;this.A4=this.Cv+(Math.round((
this.B0-this.Cv)*Zv)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.F_;},_Mark:function(D){var B;C.
ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Effects::Int32Effect"};C.AD$={Q:null,A4:A.vw,B0:B_,Cv:A.vw,Atj:function(
Zv){var F;var FY=this.Cv[0];var Dl=this.Cv[1];FY=FY+(Math.round((this.B0[0]-FY)*
Zv)|0);Dl=Dl+(Math.round((this.B0[1]-Dl)*Zv)|0);this.A4=[FY,Dl];if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.ES._Init.call(this,aArg);this.
__proto__=C.AD$;},_Mark:function(D){var B;C.ES._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::PointEffect"};C.ALg={
Q:null,A4:0,B0:0xFFFFFFFF,Cv:0,Atj:function(Zv){var F;var O1=this.Cv&0xFF;var ZG=(
this.Cv>>8)&0xFF;var AkC=(this.Cv>>16)&0xFF;var Akv=(this.Cv>>24)&0xFF;O1=O1+((((
this.B0&0xFF)-O1)*Zv)|0);ZG=ZG+(((((this.B0>>8)&0xFF)-ZG)*Zv)|0);AkC=AkC+(((((this.
B0>>16)&0xFF)-AkC)*Zv)|0);Akv=Akv+(((((this.B0>>24)&0xFF)-Akv)*Zv)|0);if(O1<0)O1=
0;if(O1>255)O1=255;if(ZG<0)ZG=0;if(ZG>255)ZG=255;if(AkC<0)AkC=0;if(AkC>255)AkC=255;
if(Akv<0)Akv=0;if(Akv>255)Akv=255;this.A4=(O1&0xFF)|((ZG&0xFF)<<8)|((AkC&0xFF)<<
16)|((Akv&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.ALg;},_Mark:function(D){var B;
C.ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Effects::ColorEffect"};C.MV={A4:0,B0:1,Cv:0,Atj:function(Zv){this.
A4=this.Cv+((this.B0-this.Cv)*Zv);},_Init:function(aArg){C.ES._Init.call(this,aArg
);this.__proto__=C.MV;},_className:"Effects::FloatEffect"};C.UT={timer:null,Q:null
,D9:0,Dq:0,Pd:1000,Pm:1000,Vg:0,Bw:false,Cv:false,B0:true,L$:function(H){var F;if(
!this.timer)return;if(this.D9<0){this.Dq=this.timer.Bu;this.D9=0;}var Aq=(this.timer.
Bu-this.Dq)|0;var Og=this.Vg+this.Pd;var GZ=this.Pm+this.Pd;var Lp=this.Vg;var Jw=
this.D9;if(!Jw&&(Aq>=Og)){Jw=1;Aq=Aq-Og;}if((Jw>0)&&(Aq>=GZ)){var H7=(Aq/GZ)|0;Aq=
Aq-(H7*GZ);Jw=Jw+H7;}if(Jw>2)Jw=1;if(Jw!==this.D9){this.Dq=this.timer.Bu-(((B=Aq
)<0)?B+0x100000000:B);this.D9=Jw;}if(Jw>0)Lp=this.Pm;if(!!this.Q){if(Aq>=Lp)(F=this.
Q,F[2].call(F[0],this.Cv));if((Aq<Lp)&&(Jw>0))(F=this.Q,F[2].call(F[0],this.B0));
}},Fz:function(E){if(E<100)E=100;this.Pd=E;},VM:function(E){if(E<0)E=0;this.Pm=E;
},AjF:function(E){if(E<0)E=0;this.Vg=E;},Ap:function(E){if(this.Bw===E)return;this.
Bw=E;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;}if(
E){this.timer=A._GetAutoObject(C.Af2);A.y_([this,this.L$],this.timer,0);this.D9=-
1;}},_Init:function(aArg){this.__proto__=C.UT;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.timer)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.Mj={O4:null,AG:null,Af:null,Ac:null,O:null
,AIG:null,A0n:null,Ajx:null,Dp:true,Bw:true,AbJ:true,Ais:false,AiB:true,YR:true,
QE:true,Mh:function(){if(!!this.O4)this.O4.Mh();},Aun:function(){return true;},Yw:
function(){},R$:function(){this.Mh();},_Init:function(aArg){this.__proto__=C.Mj;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.O4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ac)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.A0n)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajx)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Arr={AqS:A.vw
,MI:false,Aun:function(){return this.MI;},Yw:function(){if(!this.Dp&&!!this.O.Ac
)this.O.X(false);if((!this.Dp&&this.QE)&&!!this.O.Ac)this.O.Ac.HG(this.O);if(!this.
Bw)this.O.Ap(false);},R$:function(){if(this.Bw)this.O.Ap(true);if((this.Dp||this.
Ais)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YR)this.
O.Ac.QG(this.O);if(this.Dp&&this.AiB)this.O.Ac.A$(this.O);if(this.Dp&&!this.AbJ)
this.O.G(A.aaM(this.O.M,this.AqS));if(this.Dp){this.O.DD(255);this.O.X(true);}if(
!this.Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);this.MI=true;this.Mh();},_Init:
function(aArg){C.Mj._Init.call(this,aArg);this.__proto__=C.Arr;},_className:"Effects::VisibilityFader"
};C.AvD={ES:null,MI:false,Ao4:false,Aun:function(){return this.MI;},Yw:function(
){if(this.Dp)this.O.DD(this.ES.B0);if(!this.Dp&&!this.O.GM)this.O.X(false);if((!
this.Dp&&this.QE)&&!!this.O.Ac)this.O.Ac.HG(this.O);if(!this.Bw)this.O.Ap(false);
},R$:function(){var B;if(this.AbJ){if(this.O.E$()&&!!this.O.Ac)this.ES.Cv=this.O.
GM;else this.ES.Cv=0;}var Ax_=((!this.O.Ac||!this.O.GM)||!this.O.E$())||(((B=A.kz(
this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ax$=((
!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QE))||!this.ES.B0)||(((B=A.kz(this.O.
M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ax_&&Ax$){
this.ES.Cv=0;this.ES.B0=0;}this.Ao4=this.O.AP9();if(this.Bw)this.O.Ap(true);if((
this.Dp||this.Ais)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&
this.YR)this.O.Ac.QG(this.O);if(this.Dp&&this.AiB)this.O.Ac.A$(this.O);if(!this.
Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);if(this.Dp&&!this.O.E$()){this.O.DD(this.
ES.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||!this.O.E$())||!this.O.GM)){this.
MI=true;this.Mh();return;}if(!this.Dp&&(this.ES.Cv===this.ES.B0))this.O.DD(this.
ES.Cv);if(this.O.GM===this.ES.B0){this.MI=true;this.Mh();return;}if(this.ES.Cv===
this.ES.B0){this.MI=true;this.Mh();return;}if(!this.ES.Mp)this.ES.IF(1);this.ES.
Q=[B=this.O,B.AuN,B.AXB];this.ES.Ad7(false);this.ES.Aj4=false;this.ES.R5=[this,this.
AhW];this.ES.Agw=null;this.ES.Ap(true);},AhW:function(H){this.MI=true;this.Mh();
},_Init:function(aArg){C.Mj._Init.call(this,aArg);C.F_._Init.call(this.ES={I:this
},0);this.__proto__=C.AvD;},_Done:function(){this.__proto__=C.Mj;this.ES._Done();
C.Mj._Done.call(this);},_ReInit:function(){C.Mj._ReInit.call(this);this.ES._ReInit(
);},_Mark:function(D){var B;C.Mj._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Aea={Cm:null,D6:null,Ac8:false
,MI:false,Ao4:false,Aun:function(){return this.MI;},Yw:function(){if(this.Dp){this.
O.DD(this.Cm.B0);this.O.G(A.aaM(this.O.M,this.D6.B0));}if(!this.Dp&&!this.O.GM)this.
O.X(false);if((!this.Dp&&this.QE)&&!!this.O.Ac)this.O.Ac.HG(this.O);if(this.Ac8)
this.O.Aqn(this.Ao4);if(!this.Bw)this.O.Ap(false);},R$:function(){var B;if(this.
AbJ){if(this.O.E$()&&!!this.O.Ac)this.Cm.Cv=this.O.GM;else this.Cm.Cv=0;this.D6.
Cv=this.O.M.slice(0,2);}var Ax_=((!this.O.Ac||!this.O.GM)||!this.O.E$())||(((B=A.
kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Ax$=((!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QE))||!this.Cm.B0)||(((B=A.kz(
A.aam([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D6.B0),[0,0,(B=this.Ac.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ax_&&Ax$){this.Cm.Cv=0;this.Cm.B0=0;this.
D6.Cv=this.D6.B0;}this.Ao4=this.O.AP9();if(this.Bw)this.O.Ap(true);if((this.Dp||
this.Ais)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YR)
this.O.Ac.QG(this.O);if(this.Dp&&this.AiB)this.O.Ac.A$(this.O);if(!this.Dp&&(this.
Ac.AY===this.O))this.Ac.A$(null);if(this.Dp&&!this.O.E$()){this.O.G(A.aaM(this.O.
M,this.D6.Cv));this.O.DD(this.Cm.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||
!this.O.E$())||!this.O.GM)){this.MI=true;this.Mh();return;}if(!this.Dp&&A.z8(this.
D6.Cv,this.D6.B0))this.O.G(A.aaM(this.O.M,this.D6.Cv));if(!this.Dp&&(this.Cm.Cv===
this.Cm.B0))this.O.DD(this.Cm.Cv);if((this.O.GM===this.Cm.B0)&&A.z8(this.O.M.slice(
0,2),this.D6.B0)){this.MI=true;this.Mh();return;}if((this.Cm.Cv===this.Cm.B0)&&A.
z8(this.D6.Cv,this.D6.B0)){this.MI=true;this.Mh();return;}if(!this.Cm.Mp)this.Cm.
IF(1);if(!this.D6.Mp)this.D6.IF(1);if(this.Ac8)this.O.Aqn(true);this.D6.Q=null;this.
D6.Ad7(false);this.D6.Aj4=false;this.D6.R5=[this,this.AhW];this.D6.Agw=[this,this.
AyD];this.Cm.Q=[B=this.O,B.AuN,B.AXB];this.Cm.Ad7(false);this.Cm.Aj4=false;this.
Cm.R5=[this,this.AhW];this.Cm.Agw=null;this.D6.Ap(!A.z8(this.D6.Cv,this.D6.B0));
this.Cm.Ap(this.Cm.Cv!==this.Cm.B0);},AhW:function(H){this.MI=!this.Cm.Bw&&!this.
D6.Bw;this.Mh();},AyD:function(H){this.O.G(A.aaM(this.O.M,this.D6.A4));},_Init:function(
aArg){C.Mj._Init.call(this,aArg);C.F_._Init.call(this.Cm={I:this},0);C.AD$._Init.
call(this.D6={I:this},0);this.__proto__=C.Aea;},_Done:function(){this.__proto__=
C.Mj;this.Cm._Done();this.D6._Done();C.Mj._Done.call(this);},_ReInit:function(){
C.Mj._ReInit.call(this);this.Cm._ReInit();this.D6._ReInit();},_Mark:function(D){
var B;C.Mj._Mark.call(this,D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Ars={AcN:null,Cm:null,GQ:null,Vz:null,FF:null,TI:A.vw,AjR:A.vw,MI:false,Ao4:false
,Aun:function(){return this.MI;},Yw:function(){if(this.Dp){this.O.DD(this.Cm.B0);
this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.TI));this.O.X(true);}if(!this.
Dp&&!this.Cm.B0){this.O.DD(0);this.O.X(false);}if(((!this.Dp&&(this.Cm.B0>0))&&!
!this.O.Ac)&&!this.QE){this.O.DD(this.Cm.B0);this.O.G(A.aam(A.aal(this.O.M,A.zT(
this.O.M)),this.TI));this.O.X(true);}if((!this.Dp&&this.QE)&&!!this.O.Ac)this.O.
Ac.HG(this.O);this.O.Aqn(this.Ao4);if(!!this.AcN)this.Ac.HG(this.AcN);if(!this.Bw
)this.O.Ap(false);},R$:function(){var B;if(this.AbJ){if(this.O.E$()&&!!this.O.Ac
)this.Cm.Cv=this.O.GM;else this.Cm.Cv=0;this.AjR=A.zT(this.O.M);}var Ax_=((!this.
O.Ac||!this.O.GM)||!this.O.E$())||(((B=A.kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ax$=((!this.Dp&&((!this.O.Ac||!this.O.
E$())||this.QE))||!this.Cm.B0)||(((B=A.kz(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.
TI),[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ax_&&Ax$
){this.Cm.Cv=0;this.Cm.B0=0;this.AjR=this.TI;this.Vz.A4J();}this.Ao4=this.O.AP9(
);if(this.Bw)this.O.Ap(true);if((this.Dp||this.Ais)&&!this.O.Ac){this.O.X(false);
this.Ac.J(this.O,0);}if(this.Dp&&this.YR)this.O.Ac.QG(this.O);if(this.Dp&&this.AiB
)this.O.Ac.A$(this.O);if(!this.Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);if(this.
Dp&&!this.O.E$())this.O.DD(this.Cm.Cv);if((!this.Dp&&A.z8(this.AjR,this.TI))&&this.
Vz.ABX())this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.AjR));if(!this.Dp&&(
this.Cm.Cv===this.Cm.B0))this.O.DD(this.Cm.Cv);if(!this.Dp&&((!this.O.Ac||!this.
O.E$())||!this.O.GM)){this.MI=true;this.Mh();return;}if(((this.Dp&&(this.O.GM===
this.Cm.B0))&&A.z8(A.zT(this.O.M),this.TI))&&this.O.E$()){this.MI=true;this.Mh();
return;}if(((!this.Dp&&(this.O.GM===this.Cm.B0))&&A.z8(A.zT(this.O.M),this.TI))&&
this.Vz.ABX()){this.MI=true;this.Mh();return;}if(((this.Cm.Cv===this.Cm.B0)&&A.z8(
this.AjR,this.TI))&&this.Vz.ABX()){this.MI=true;this.Mh();return;}this.O.Aqn(true
);this.O.X(false);this.AcN=A._NewObject(A.abh.AS4,0);this.AcN.Bi9(this.O);this.AcN.
DD(this.Cm.Cv);this.AcN.BjZ(A.zT([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.O.Ac.
AJ5(this.AcN,this.O);if(!this.Cm.Mp)this.Cm.IF(1);if(!this.GQ.Mp)this.GQ.IF(1);this.
GQ.Ad7(false);this.GQ.Aj4=false;this.GQ.R5=[this,this.AhW];this.GQ.Agw=[this,this.
AyD];if(this.Dp){this.GQ.Cv=0;this.GQ.B0=1;}else{this.GQ.Cv=1;this.GQ.B0=0;}this.
Cm.Q=[B=this.AcN,B.AuN,B.DD];this.Cm.Ad7(false);this.Cm.Aj4=false;this.Cm.R5=[this
,this.AhW];this.Cm.Agw=null;this.GQ.Ap(!A.z8(this.AjR,this.TI)||!this.Vz.ABX());
this.Cm.Ap(this.Cm.Cv!==this.Cm.B0);},AhW:function(H){this.MI=!this.Cm.Bw&&!this.
GQ.Bw;this.Mh();},AyD:function(H){var B;var Azt=A.aaj(this.TI,this.AjR);if(!this.
Dp)Azt=[-Azt[0],-Azt[1]];this.FF.A4J();this.FF.Af6=this.Vz.Af6;this.FF.Bma(Azt[0
],Azt[1],0);this.FF.BfI(this.Vz,this.FF,this.GQ.A4);if(this.Dp)this.AcN.AFc(this.
AjR,this.FF);else this.AcN.AFc(this.TI,this.FF);},_Init:function(aArg){C.Mj._Init.
call(this,aArg);C.F_._Init.call(this.Cm={I:this},0);C.MV._Init.call(this.GQ={I:this
},0);A.Graphics.Awf._Init.call(this.Vz={I:this},0);A.Graphics.Awf._Init.call(this.
FF={I:this},0);this.__proto__=C.Ars;},_Done:function(){this.__proto__=C.Mj;this.
Cm._Done();this.GQ._Done();this.Vz._Done();this.FF._Done();C.Mj._Done.call(this);
},_ReInit:function(){C.Mj._ReInit.call(this);this.Cm._ReInit();this.GQ._ReInit();
this.Vz._ReInit();this.FF._ReInit();},_Mark:function(D){var B;C.Mj._Mark.call(this
,D);if((B=this.AcN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.FF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Effects::WarpFader"};C.QP={RF:function(){return null;},RE:function(){return null;
},Add:function(){return this.RF();},Adc:function(){return this.RE();},_Init:function(
aArg){this.__proto__=C.QP;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.ASj={RF:function(){var Al=A._NewObject(C.Arr,0);Al.Dp=true;Al.Bw=true;Al.AiB=false;
Al.YR=true;Al.AbJ=false;Al.Ajx=[this,this.AoB];return Al;},RE:function(){var Al=
A._NewObject(C.Arr,0);Al.Dp=false;Al.Bw=false;Al.QE=true;return Al;},Add:function(
){var Al=C.QP.Add.call(this);Al.YR=false;Al.Bw=true;return Al;},Adc:function(){var
Al=A._NewObject(C.Arr,0);Al.Dp=false;Al.Bw=true;Al.Ais=true;Al.QE=false;return Al;
},AoB:function(H){var B;var Al=(C.Arr.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(
0,2);pos=[(A8[0]+(((A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((
A8[3]-A8[1])/2)|0))-((CZ[1]/2)|0)];Al.AqS=pos;},_Init:function(aArg){C.QP._Init.
call(this,aArg);this.__proto__=C.ASj;},_className:"Effects::ShowHideTransition"};
C.Adl={AAJ:500,RF:function(){var Al=A._NewObject(C.Aea,0);Al.Dp=true;Al.Bw=true;
Al.AiB=false;Al.YR=true;Al.AbJ=true;Al.Ac8=false;Al.Ajx=[this,this.AoB];Al.Cm.Fz(
this.AAJ);Al.Cm.Cv=0;Al.Cm.B0=255;Al.D6.Fz(this.AAJ);Al.D6.VN(23);return Al;},RE:
function(){var Al=A._NewObject(C.AvD,0);Al.Dp=false;Al.Bw=false;Al.QE=true;Al.AbJ=
true;Al.ES.Cv=255;Al.ES.B0=0;Al.ES.Fz(this.AAJ);return Al;},Add:function(){var Al=
C.QP.Add.call(this);Al.YR=false;Al.Bw=true;return Al;},Adc:function(){var Al=C.QP.
Adc.call(this);Al.Ais=true;Al.QE=false;Al.Bw=true;return Al;},AoB:function(H){var
B;var Al=(C.Aea.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[
1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);pos=[(A8[0]+(((A8[
2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((A8[3]-A8[1])/2)|0))-((
CZ[1]/2)|0)];Al.D6.B0=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GM)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.
O.M,pos));},_Init:function(aArg){C.QP._Init.call(this,aArg);this.__proto__=C.Adl;
},_className:"Effects::FadeInOutTransition"};C.AEK={J7:0x12,Atx:0,Ac8:false,RF:function(
){var Al=A._NewObject(C.Aea,0);Al.Dp=true;Al.Bw=true;Al.AiB=false;Al.YR=true;Al.
AbJ=true;Al.Ac8=this.Ac8;Al.Ajx=[this,this.AoB];Al.Cm.Fz(500);Al.Cm.AjF(0);Al.Cm.
Cv=0;Al.Cm.B0=255;Al.D6.Fz(500);Al.D6.VN(23);Al.D6.ADN(0);Al.D6.ADO(0);Al.D6.Au8(
3);Al.D6.ACR(0.5);Al.D6.ADz(3);Al.D6.ACW(3);Al.D6.AC7(0.5);return Al;},RE:function(
){var Al=A._NewObject(C.Aea,0);Al.Dp=false;Al.Bw=false;Al.QE=true;Al.AbJ=true;Al.
Ac8=this.Ac8;Al.Ajx=[this,this.A0z];Al.Cm.Cv=255;Al.Cm.B0=0;Al.Cm.Fz(500);Al.Cm.
AjF(0);Al.D6.Fz(500);Al.D6.VN(23);Al.D6.ADN(0);Al.D6.ADO(0);Al.D6.Au8(3);Al.D6.ACR(
0.5);Al.D6.ADz(3);Al.D6.ACW(3);Al.D6.AC7(0.5);return Al;},Add:function(){var Al=
C.QP.Add.call(this);Al.YR=false;Al.Bw=true;return Al;},Adc:function(){var Al=C.QP.
Adc.call(this);Al.Ais=true;Al.QE=false;Al.Bw=true;return Al;},AoB:function(H){var
B;var Al=(C.Aea.isPrototypeOf(H)?H:null);var Br=this.J7;var A8=[0,0,(B=Al.Ac.M)[
2]-B[0],B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);if(((
Br&0x4)===0x4))pos=[A8[2]-CZ[0],pos[1]];else if(((Br&0x2)===0x2))pos=[(A8[0]+(((
A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];if(((Br&0x20)===0x20))pos=[pos[0],A8[3
]-CZ[1]];else if(((Br&0x10)===0x10))pos=[pos[0],(A8[1]+(((A8[3]-A8[1])/2)|0))-((
CZ[1]/2)|0)];Al.D6.B0=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GM)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hp=[(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];switch(this.Atx){case 5:pos=[pos[0],-CZ[1]];break;case 3:{
pos=[pos[0],-CZ[1]];pos=[Hp[0],pos[1]];}break;case 8:pos=[-CZ[0],-CZ[1]];break;case
2:pos=[Hp[0],pos[1]];break;case 7:pos=[-CZ[0],pos[1]];break;case 4:pos=[pos[0],Hp[
1]];break;case 1:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 6:{pos=[pos[
0],Hp[1]];pos=[-CZ[0],pos[1]];}break;default:;}Al.O.G(A.aaM(Al.O.M,pos));}},A0z:
function(H){var B;var Al=(C.Aea.isPrototypeOf(H)?H:null);var pos=Al.O.M.slice(0,
2);var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var Hp=[(B=Al.Ac.M)[2]-B[0],B[3]-B[1]];
switch(this.Atx){case 5:pos=[pos[0],Hp[1]];break;case 3:{pos=[pos[0],Hp[1]];pos=[-
CZ[0],pos[1]];}break;case 8:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 2:
pos=[-CZ[0],pos[1]];break;case 7:pos=[Hp[0],pos[1]];break;case 4:pos=[pos[0],-CZ[
1]];break;case 1:pos=[-CZ[0],-CZ[1]];break;case 6:{pos=[pos[0],-CZ[1]];pos=[Hp[0
],pos[1]];}break;default:;}Al.D6.B0=pos;},_Init:function(aArg){C.QP._Init.call(this
,aArg);this.__proto__=C.AEK;},_className:"Effects::SlideTransition"};C.AgT={RF:function(
){var Al=A._NewObject(C.Ars,0);Al.Dp=true;Al.Bw=true;Al.AiB=false;Al.YR=true;Al.
AbJ=true;Al.Ajx=[this,this.AoB];Al.Cm.Fz(500);Al.Cm.AjF(0);Al.Cm.Cv=0;Al.Cm.B0=255;
Al.GQ.Fz(500);Al.GQ.VN(23);Al.GQ.ADN(0);Al.GQ.ADO(0);Al.GQ.Au8(3);Al.GQ.ACR(0.5);
Al.GQ.ADz(3);Al.GQ.ACW(3);Al.GQ.AC7(0.5);Al.Vz.Aej(0.5,0.5,1);return Al;},RE:function(
){var Al=A._NewObject(C.Ars,0);Al.Dp=false;Al.Bw=false;Al.QE=true;Al.AbJ=true;Al.
Ajx=[this,this.A0z];Al.Cm.Cv=255;Al.Cm.B0=0;Al.Cm.Fz(500);Al.Cm.AjF(0);Al.GQ.Fz(
500);Al.GQ.VN(23);Al.GQ.ADN(0);Al.GQ.ADO(0);Al.GQ.Au8(3);Al.GQ.ACR(0.5);Al.GQ.ADz(
3);Al.GQ.ACW(3);Al.GQ.AC7(0.5);Al.Vz.Aej(0.5,0.5,1);return Al;},Add:function(){var
Al=C.QP.Add.call(this);Al.YR=false;Al.Bw=true;return Al;},Adc:function(){var Al=
C.QP.Adc.call(this);Al.Ais=true;Al.QE=false;Al.Bw=true;return Al;},AoB:function(
H){var B;var Al=(C.Ars.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.Ac.M)[2]-B[0],
B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);pos=[(A8[
0]+(((A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((A8[3]-A8[1
])/2)|0))-((CZ[1]/2)|0)];Al.TI=A.aak(pos,[(CZ[0]/2)|0,(CZ[1]/2)|0]);if(((!Al.O.Ac||
!Al.O.E$())||!Al.O.GM)||(((B=A.kz(Al.O.M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.O.M,A.aaj(Al.TI,A.zT([0,0,(B=Al.O.M)[2]-
B[0],B[3]-B[1]]))));},A0z:function(H){var Al=(C.Ars.isPrototypeOf(H)?H:null);Al.
TI=A.zT(Al.O.M);},_Init:function(aArg){C.QP._Init.call(this,aArg);this.__proto__=
C.AgT;},_className:"Effects::ScaleTransition"};C.Ag3={Bz7:0,BAL:1,BAN:2,BAM:3,Bzt:
4,Bzv:5,Bzu:6,BBf:7,BBh:8,BBg:9,By2:10,By4:11,By3:12,ByI:13,ByK:14,ByJ:15,Bzk:16
,Bzm:17,Bzl:18,ByT:19,ByV:20,ByU:21,Bzj:22,Bzx:23,Bzi:24,Bzy:25,By9:26};C.Bzd={A17:
0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20};C.ALT={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ALT;},_className:"Effects::EffectTimerClass"};C.
Af2={_Init:function(){C.ALT._Init.call(this,0);this.Qz(15);this.Ap(true);},_variants:
function(){return this;},_this:null};C.AEZ={O3:A.aan(12,0,null),Akw:A.aan(12,0,null
),_Init:function(aArg){(this.O3=[]).__proto__=C.AEZ.O3;(this.Akw=[]).__proto__=C.
AEZ.Akw;this.__proto__=C.AEZ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};
C.AAQ={B4:null,B7:null,A5f:function(Ar2){var Al=this.B7;while(!!Al){Al.Yw();Al.O.
U=Al.O.U&~0x40000;Al=Al.Af;}Al=this.B7;while(!!Al){A.ow(Al.A0n,Al);Al=Al.Af;}},A5e:
function(Ar2){var Al=this.B7;while(!!Al){A.ow(Al.AIG,Al);Al=Al.Af;}this.B7=null;
this.B4=null;},R$:function(Ar2){var B;if(!this.B7)this.Mh();var Al=this.B7;while(
!!Al){Al.O.U=(Al.O.U|0x40000)&~0x20000;Al.O.AoJ=null;Al=Al.Af;}Al=this.B7;while(
!!Al){(B=Al.Ajx)?B[1].call(B[0],Al):null;Al.R$();Al=Al.Af;}},Mh:function(){var Al=
this.B7;while(!!Al&&Al.Aun())Al=Al.Af;if(!Al)A.Core.Aj5.Mh.call(this);},BkM:function(
FD){if(!FD)return;if(this.AOU())throw new Error(BH);if(FD.O4!==this)throw new Error(
EV);if(!!FD.Af)FD.Af.AG=FD.AG;else this.B4=FD.AG;if(!!FD.AG)FD.AG.Af=FD.Af;else this.
B7=FD.Af;FD.O4=null;FD.Af=null;FD.AG=null;if(!!FD.O)FD.O.AoJ=null;A.ow(FD.AIG,FD
);if(!this.B7)this.Ac9();},A11:function(FD){if(!FD)return;if(this.AOU())throw new
Error(GS);if(!!FD.O4)throw new Error(Jt);FD.AG=this.B4;FD.Af=null;if(!!this.B4)this.
B4.Af=FD;else this.B7=FD;this.B4=FD;FD.O4=this;},_Init:function(aArg){A.Core.Aj5.
_Init.call(this,aArg);this.__proto__=C.AAQ;},_Mark:function(D){var B;A.Core.Aj5.
_Mark.call(this,D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::FaderTask"};C.AvU={
_Init:function(){C.ASj._Init.call(this,0);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.F_.__proto__=C.ES;C.AD$.__proto__=C.ES;C.ALg.__proto__=C.ES;
C.MV.__proto__=C.ES;C.Arr.__proto__=C.Mj;C.AvD.__proto__=C.Mj;C.Aea.__proto__=C.
Mj;C.Ars.__proto__=C.Mj;C.ASj.__proto__=C.QP;C.Adl.__proto__=C.QP;C.AEK.__proto__=
C.QP;C.AgT.__proto__=C.QP;C.ALT.__proto__=A.Core.Timer;C.AAQ.__proto__=A.Core.Aj5;
};C._ReInit=function(){var B;if((B=C.Af2._this))B._ReInit();if((B=C.AvU._this))B.
_ReInit();};C.DE=function(D){var B;if((B=C.Af2._this)&&(B._cycle!=D))B._Done(C.Af2.
_this=null);if((B=C.AvU._this)&&(B._cycle!=D))B._Done(C.AvU._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */