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
C.ES={MO:null,timer:null,P2:null,R5:null,Agw:null,SI:0,Aig:0,Uq:0,OU:0,Ax9:0.001,
WI:0,D9:0,Dq:0,ALR:0.5,A2G:3,AvK:3,Atg:0.5,U7:3,ASF:0,ASE:0,Mp:0,Pd:1000,Pm:0,Vg:
0,Ag3:0,Bw:false,Aj5:false,ART:false,Ao1:false,AJn:false,L$:function(H){var B;if(
!this.timer)return;if(!this.Aig){if(this.ART)this.Aig=-1;else this.Aig=1;this.SI=
this.Aig;this.Dq=this.timer.Bu;this.D9=0;this.WI=-1;}var MG;if((this.Aig>0)&&(this.
SI>0))MG=this.Bxs();else if((this.Aig<0)&&(this.SI<0))MG=this.Bxv();else if(this.
Aig>0)MG=this.Bxt();else MG=this.Bxu();if(MG){this.Ap(false);(B=this.P2)?B[1].call(
B[0],this):null;(B=this.R5)?B[1].call(B[0],this):null;}},AI0:function(AK){var B;
if(!this.MO&&(((this.Ag3===19)||(this.Ag3===20))||(this.Ag3===21))){var AHA=this.
A2G+1;var Bu1=Math.sqrt(this.ALR);var Rg=0.5;var P;this.MO=A._NewObject(C.AEZ,0);
this.MO.O3.Set(0,1);this.MO.Akx.Set(0,1);for(P=1;P<AHA;P=P+1){this.MO.O3.Set(P,this.
MO.O3.Get(P-1)*Bu1);this.MO.Akx.Set(P,this.MO.Akx.Get(P-1)*this.ALR);Rg=Rg+this.
MO.O3.Get(P);}var BvL=1/Rg;this.MO.O3.Set(0,0.5);Rg=0;for(P=0;P<AHA;P=P+1){this.
MO.O3.Set(P,this.MO.O3.Get(P)*BvL);Rg=Rg+this.MO.O3.Get(P);}this.MO.O3.Set(AHA,this.
MO.O3.Get(AHA)+(1-Rg));}if(this.Aj5){if(AK<0.5)AK=AK*2;else AK=2-(AK*2);}switch(
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
AK=((AK*AK)*AK)-((AK*this.Atg)*Math.sin((AK*180)*A.kw));break;case 14:{AK=1-AK;AK=((
AK*AK)*AK)-((AK*this.Atg)*Math.sin((AK*180)*A.kw));AK=1-AK;}break;case 15:{AK=AK
*2;if(AK<1){AK=((AK*AK)*AK)-((AK*this.Atg)*Math.sin((AK*180)*A.kw));AK=AK*0.5;}else{
AK=2-AK;AK=((AK*AK)*AK)-((AK*this.Atg)*Math.sin((AK*180)*A.kw));AK=(2-AK)*0.5;}}
break;case 16:AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvK)))*A.kw);break;case
17:{AK=1-AK;AK=1-(((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvK)))*A.kw));}break;
case 18:{AK=AK*2;if(AK<1){AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvK)))*A.
kw);AK=AK*0.5;}else{AK=2-AK;AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.AvK)))*
A.kw);AK=(2-AK)*0.5;}}break;case 19:{var BF=this.MO;var P=0;var Gp=0;var KV=BF.O3.
Get(0);var D2=1-AK;while(D2>KV){P=P+1;Gp=KV;KV=KV+BF.O3.Get(P);}AK=(D2-Gp)/(KV-Gp
);if(!P)AK=1-(AK*AK);else{AK=(2*AK)-1;AK=BF.Akx.Get(P)*(1-(AK*AK));}}break;case 20:{
var BF=this.MO;var P=0;var Gp=0;var KV=BF.O3.Get(0);while(AK>KV){P=P+1;Gp=KV;KV=
KV+BF.O3.Get(P);}AK=(AK-Gp)/(KV-Gp);if(!P)AK=AK*AK;else{AK=(2*AK)-1;AK=1-(BF.Akx.
Get(P)*(1-(AK*AK)));}}break;case 21:{var BF=this.MO;var P=0;var Gp=0;var KV=BF.O3.
Get(0);var Lt=AK*2;var D2=Lt-1;if(Lt<1)D2=-D2;while(D2>KV){P=P+1;Gp=KV;KV=KV+BF.
O3.Get(P);}D2=(D2-Gp)/(KV-Gp);if(!P)D2=D2*D2;else{D2=(2*D2)-1;D2=1-(BF.Akx.Get(P
)*(1-(D2*D2)));}if(Lt<1)AK=0.5*(1-D2);else AK=0.5*(1+D2);}break;default:if(this.
Ao1){var Lt=AK;var Ayw=1-Lt;AK=((Ayw*Lt)*(this.OU+1))+(Lt*Lt);}else if(this.AJn){
var Lt=AK;var Ayw=1-Lt;var A$w=Lt*Lt;var Bv0=Ayw*Ayw;AK=(((Bv0*Lt)*(this.OU+1))+((
Ayw*A$w)*(this.Uq+2)))+(A$w*Lt);}}this.Atl(AK);(B=this.Agw)?B[1].call(B[0],this):
null;},Bxv:function(){var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Lp=this.
Vg;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;var MG=false;var H8=this.WI;if(
!this.D9&&(Aq>=Og)){this.D9=1;Aq=Aq-Og;this.Dq=this.Dq+Og;}if((this.D9>0)&&(Aq>=
G0)){var H7=(Aq/G0)|0;this.D9=this.D9+H7;Aq=Aq-(H7*G0);this.Dq=this.Dq+(H7*G0);}
if((this.D9>2)&&!this.Mp)this.D9=1;if(this.D9>0)Lp=this.Pm;if((this.D9>=this.Mp)&&(
this.Mp>0)){MG=true;H8=0;}else if(Aq>=Lp)H8=1-((Aq-Lp)*this.Ax9);else if(H8>=0)H8=
0;if(H8!==this.WI){this.WI=H8;this.AI0(H8);}return MG;},Bxu:function(){var Aq=(this.
Dq-this.timer.Bu)|0;var Lp=this.Vg;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;
var MG=false;var H8=this.WI;if((this.D9>1)&&(Aq<0)){var H7=(((-Aq+G0)-1)/G0)|0;if((
this.D9-H7)<=0)H7=this.D9-1;this.D9=this.D9-H7;Aq=Aq+(H7*G0);this.Dq=this.Dq+(H7
*G0);}if(((this.D9===1)&&(Aq<0))&&(this.Mp>0)){this.D9=0;Aq=Aq+Og;this.Dq=this.Dq+
Og;}if(((this.D9===1)&&(Aq<0))&&!this.Mp){var H7=(((-Aq+G0)-1)/G0)|0;Aq=Aq+(H7*G0
);this.Dq=this.Dq+(H7*G0);}if(this.D9>0)Lp=this.Pm;if(Aq<0){MG=true;H8=1;}else if(
Aq>=Lp)H8=1-((Aq-Lp)*this.Ax9);else if(H8>=0)H8=1;if(H8!==this.WI){this.WI=H8;this.
AI0(H8);}return MG;},Bxt:function(){var Aq=(this.Dq-this.timer.Bu)|0;var Lp=this.
Vg;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;var MG=false;var H8=this.WI;if((
this.D9>1)&&(Aq<0)){var H7=(((-Aq+G0)-1)/G0)|0;if((this.D9-H7)<=0)H7=this.D9-1;this.
D9=this.D9-H7;Aq=Aq+(H7*G0);this.Dq=this.Dq+(H7*G0);}if(((this.D9===1)&&(Aq<0))&&(
this.Mp>0)){this.D9=0;Aq=Aq+Og;this.Dq=this.Dq+Og;}if(((this.D9===1)&&(Aq<0))&&!
this.Mp){var H7=(((-Aq+G0)-1)/G0)|0;Aq=Aq+(H7*G0);this.Dq=this.Dq+(H7*G0);}if(this.
D9>0)Lp=this.Pm;if(Aq<0){MG=true;H8=0;}else if(Aq>=Lp)H8=(Aq-Lp)*this.Ax9;else if(
H8>=0)H8=0;if(H8!==this.WI){this.WI=H8;this.AI0(H8);}return MG;},Bxs:function(){
var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Lp=this.Vg;var Og=this.Vg+this.
Pd;var G0=this.Pm+this.Pd;var MG=false;var H8=this.WI;if(!this.D9&&(Aq>=Og)){this.
D9=1;Aq=Aq-Og;this.Dq=this.Dq+Og;}if((this.D9>0)&&(Aq>=G0)){var H7=(Aq/G0)|0;this.
D9=this.D9+H7;Aq=Aq-(H7*G0);this.Dq=this.Dq+(H7*G0);}if((this.D9>2)&&!this.Mp)this.
D9=1;if(this.D9>0)Lp=this.Pm;if((this.D9>=this.Mp)&&(this.Mp>0)){MG=true;H8=1;}else
if(Aq>=Lp)H8=(Aq-Lp)*this.Ax9;else if(H8>=0)H8=1;if(H8!==this.WI){this.WI=H8;this.
AI0(H8);}return MG;},Ad7:function(E){if(this.ART===E)return;this.ART=E;if(!this.
Bw||!this.Aig)return;if(E)this.SI=-1;else this.SI=1;this.Dq=(this.timer.At1()*2)-
this.Dq;},AC7:function(E){if(E<0)E=0;if(E>1)E=1;this.ALR=E;},ACW:function(E){if(
E<1)E=1;if(E>10)E=10;this.A2G=E;this.MO=null;},ADz:function(E){if(E<1)E=1;if(E>10
)E=10;this.AvK=E;},ACR:function(E){if(E<0)E=0;if(E>10)E=10;this.Atg=E;},Au$:function(
E){if(E<1)E=1;if(E>100)E=100;this.U7=E;},ADO:function(E){if(this.ASF===E)return;
this.ASF=E;if(this.Ag3===26){this.Uq=E;this.Ao1=(this.OU===this.Uq)&&!!this.OU;this.
AJn=!this.Ao1&&(this.OU!==this.Uq);}},ADN:function(E){if(this.ASE===E)return;this.
ASE=E;if(this.Ag3===26){this.OU=E;this.Ao1=(this.OU===this.Uq)&&!!this.OU;this.AJn=
!this.Ao1&&(this.OU!==this.Uq);}},VN:function(E){if(this.Ag3===E)return;this.Ag3=
E;this.MO=null;switch(E){case 24:{this.OU=-1.1;this.Uq=1.1;}break;case 22:{this.
OU=-1;this.Uq=-2;}break;case 23:{this.OU=2;this.Uq=1;}break;case 25:{this.OU=1.1;
this.Uq=-1.1;}break;case 0:{this.OU=0;this.Uq=0;}break;default:{this.OU=this.ASE;
this.Uq=this.ASF;}}this.Ao1=(this.OU===this.Uq)&&!!this.OU;this.AJn=!this.Ao1&&(
this.OU!==this.Uq);},IF:function(E){if(E<0)E=0;this.Mp=E;},FA:function(E){if(E<15
)E=15;this.Pd=E;this.Ax9=1/E;},VM:function(E){if(E<0)E=0;this.Pm=E;},AjG:function(
E){if(E<0)E=0;this.Vg=E;},Ap:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&
!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(C.Af2);A.y_([this,this.L$],this.timer,0);this.Aig=0;A.ow([this,
this.L$],this);}},Atl:function(Zx){},Av5:function(H){this.Ap(false);},AEN:function(
H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.__proto__=
C.ES;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.MO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P2)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.R5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Agw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.F_={Q:null,A4:0,B1:255,Cv:0,Atl:function(Zx){var F;this.A4=this.Cv+(Math.round((
this.B1-this.Cv)*Zx)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.F_;},_Mark:function(D){var B;C.
ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Effects::Int32Effect"};C.AD$={Q:null,A4:A.vw,B1:B$,Cv:A.vw,Atl:function(
Zx){var F;var FY=this.Cv[0];var Dl=this.Cv[1];FY=FY+(Math.round((this.B1[0]-FY)*
Zx)|0);Dl=Dl+(Math.round((this.B1[1]-Dl)*Zx)|0);this.A4=[FY,Dl];if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.ES._Init.call(this,aArg);this.
__proto__=C.AD$;},_Mark:function(D){var B;C.ES._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::PointEffect"};C.ALd={
Q:null,A4:0,B1:0xFFFFFFFF,Cv:0,Atl:function(Zx){var F;var O1=this.Cv&0xFF;var ZI=(
this.Cv>>8)&0xFF;var AkD=(this.Cv>>16)&0xFF;var Akw=(this.Cv>>24)&0xFF;O1=O1+((((
this.B1&0xFF)-O1)*Zx)|0);ZI=ZI+(((((this.B1>>8)&0xFF)-ZI)*Zx)|0);AkD=AkD+(((((this.
B1>>16)&0xFF)-AkD)*Zx)|0);Akw=Akw+(((((this.B1>>24)&0xFF)-Akw)*Zx)|0);if(O1<0)O1=
0;if(O1>255)O1=255;if(ZI<0)ZI=0;if(ZI>255)ZI=255;if(AkD<0)AkD=0;if(AkD>255)AkD=255;
if(Akw<0)Akw=0;if(Akw>255)Akw=255;this.A4=(O1&0xFF)|((ZI&0xFF)<<8)|((AkD&0xFF)<<
16)|((Akw&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.ALd;},_Mark:function(D){var B;
C.ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Effects::ColorEffect"};C.MX={A4:0,B1:1,Cv:0,Atl:function(Zx){this.
A4=this.Cv+((this.B1-this.Cv)*Zx);},_Init:function(aArg){C.ES._Init.call(this,aArg
);this.__proto__=C.MX;},_className:"Effects::FloatEffect"};C.UT={timer:null,Q:null
,D9:0,Dq:0,Pd:1000,Pm:1000,Vg:0,Bw:false,Cv:false,B1:true,L$:function(H){var F;if(
!this.timer)return;if(this.D9<0){this.Dq=this.timer.Bu;this.D9=0;}var Aq=(this.timer.
Bu-this.Dq)|0;var Og=this.Vg+this.Pd;var G0=this.Pm+this.Pd;var Lp=this.Vg;var Jw=
this.D9;if(!Jw&&(Aq>=Og)){Jw=1;Aq=Aq-Og;}if((Jw>0)&&(Aq>=G0)){var H7=(Aq/G0)|0;Aq=
Aq-(H7*G0);Jw=Jw+H7;}if(Jw>2)Jw=1;if(Jw!==this.D9){this.Dq=this.timer.Bu-(((B=Aq
)<0)?B+0x100000000:B);this.D9=Jw;}if(Jw>0)Lp=this.Pm;if(!!this.Q){if(Aq>=Lp)(F=this.
Q,F[2].call(F[0],this.Cv));if((Aq<Lp)&&(Jw>0))(F=this.Q,F[2].call(F[0],this.B1));
}},FA:function(E){if(E<100)E=100;this.Pd=E;},VM:function(E){if(E<0)E=0;this.Pm=E;
},AjG:function(E){if(E<0)E=0;this.Vg=E;},Ap:function(E){if(this.Bw===E)return;this.
Bw=E;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;}if(
E){this.timer=A._GetAutoObject(C.Af2);A.y_([this,this.L$],this.timer,0);this.D9=-
1;}},_Init:function(aArg){this.__proto__=C.UT;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.timer)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.Mj={O4:null,AG:null,Af:null,Ac:null,O:null
,AID:null,A0n:null,Ajy:null,Dp:true,Bw:true,AbJ:true,Ait:false,AiC:true,YT:true,
QG:true,Mh:function(){if(!!this.O4)this.O4.Mh();},Aup:function(){return true;},Yy:
function(){},R$:function(){this.Mh();},_Init:function(aArg){this.__proto__=C.Mj;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.O4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ac)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AID)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.A0n)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajy)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Arr={AqS:A.vw
,MI:false,Aup:function(){return this.MI;},Yy:function(){if(!this.Dp&&!!this.O.Ac
)this.O.X(false);if((!this.Dp&&this.QG)&&!!this.O.Ac)this.O.Ac.HH(this.O);if(!this.
Bw)this.O.Ap(false);},R$:function(){if(this.Bw)this.O.Ap(true);if((this.Dp||this.
Ait)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YT)this.
O.Ac.QI(this.O);if(this.Dp&&this.AiC)this.O.Ac.A$(this.O);if(this.Dp&&!this.AbJ)
this.O.G(A.aaM(this.O.M,this.AqS));if(this.Dp){this.O.DD(255);this.O.X(true);}if(
!this.Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);this.MI=true;this.Mh();},_Init:
function(aArg){C.Mj._Init.call(this,aArg);this.__proto__=C.Arr;},_className:"Effects::VisibilityFader"
};C.AvG={ES:null,MI:false,Ao4:false,Aup:function(){return this.MI;},Yy:function(
){if(this.Dp)this.O.DD(this.ES.B1);if(!this.Dp&&!this.O.GN)this.O.X(false);if((!
this.Dp&&this.QG)&&!!this.O.Ac)this.O.Ac.HH(this.O);if(!this.Bw)this.O.Ap(false);
},R$:function(){var B;if(this.AbJ){if(this.O.E$()&&!!this.O.Ac)this.ES.Cv=this.O.
GN;else this.ES.Cv=0;}var Aya=((!this.O.Ac||!this.O.GN)||!this.O.E$())||(((B=A.kz(
this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ayb=((
!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QG))||!this.ES.B1)||(((B=A.kz(this.O.
M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Aya&&Ayb){
this.ES.Cv=0;this.ES.B1=0;}this.Ao4=this.O.AP6();if(this.Bw)this.O.Ap(true);if((
this.Dp||this.Ait)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&
this.YT)this.O.Ac.QI(this.O);if(this.Dp&&this.AiC)this.O.Ac.A$(this.O);if(!this.
Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);if(this.Dp&&!this.O.E$()){this.O.DD(this.
ES.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||!this.O.E$())||!this.O.GN)){this.
MI=true;this.Mh();return;}if(!this.Dp&&(this.ES.Cv===this.ES.B1))this.O.DD(this.
ES.Cv);if(this.O.GN===this.ES.B1){this.MI=true;this.Mh();return;}if(this.ES.Cv===
this.ES.B1){this.MI=true;this.Mh();return;}if(!this.ES.Mp)this.ES.IF(1);this.ES.
Q=[B=this.O,B.AuP,B.AXB];this.ES.Ad7(false);this.ES.Aj5=false;this.ES.R5=[this,this.
AhX];this.ES.Agw=null;this.ES.Ap(true);},AhX:function(H){this.MI=true;this.Mh();
},_Init:function(aArg){C.Mj._Init.call(this,aArg);C.F_._Init.call(this.ES={I:this
},0);this.__proto__=C.AvG;},_Done:function(){this.__proto__=C.Mj;this.ES._Done();
C.Mj._Done.call(this);},_ReInit:function(){C.Mj._ReInit.call(this);this.ES._ReInit(
);},_Mark:function(D){var B;C.Mj._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Aea={Cn:null,D6:null,Ac8:false
,MI:false,Ao4:false,Aup:function(){return this.MI;},Yy:function(){if(this.Dp){this.
O.DD(this.Cn.B1);this.O.G(A.aaM(this.O.M,this.D6.B1));}if(!this.Dp&&!this.O.GN)this.
O.X(false);if((!this.Dp&&this.QG)&&!!this.O.Ac)this.O.Ac.HH(this.O);if(this.Ac8)
this.O.Aqn(this.Ao4);if(!this.Bw)this.O.Ap(false);},R$:function(){var B;if(this.
AbJ){if(this.O.E$()&&!!this.O.Ac)this.Cn.Cv=this.O.GN;else this.Cn.Cv=0;this.D6.
Cv=this.O.M.slice(0,2);}var Aya=((!this.O.Ac||!this.O.GN)||!this.O.E$())||(((B=A.
kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Ayb=((!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QG))||!this.Cn.B1)||(((B=A.kz(
A.aam([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D6.B1),[0,0,(B=this.Ac.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Aya&&Ayb){this.Cn.Cv=0;this.Cn.B1=0;this.
D6.Cv=this.D6.B1;}this.Ao4=this.O.AP6();if(this.Bw)this.O.Ap(true);if((this.Dp||
this.Ait)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YT)
this.O.Ac.QI(this.O);if(this.Dp&&this.AiC)this.O.Ac.A$(this.O);if(!this.Dp&&(this.
Ac.AY===this.O))this.Ac.A$(null);if(this.Dp&&!this.O.E$()){this.O.G(A.aaM(this.O.
M,this.D6.Cv));this.O.DD(this.Cn.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||
!this.O.E$())||!this.O.GN)){this.MI=true;this.Mh();return;}if(!this.Dp&&A.z8(this.
D6.Cv,this.D6.B1))this.O.G(A.aaM(this.O.M,this.D6.Cv));if(!this.Dp&&(this.Cn.Cv===
this.Cn.B1))this.O.DD(this.Cn.Cv);if((this.O.GN===this.Cn.B1)&&A.z8(this.O.M.slice(
0,2),this.D6.B1)){this.MI=true;this.Mh();return;}if((this.Cn.Cv===this.Cn.B1)&&A.
z8(this.D6.Cv,this.D6.B1)){this.MI=true;this.Mh();return;}if(!this.Cn.Mp)this.Cn.
IF(1);if(!this.D6.Mp)this.D6.IF(1);if(this.Ac8)this.O.Aqn(true);this.D6.Q=null;this.
D6.Ad7(false);this.D6.Aj5=false;this.D6.R5=[this,this.AhX];this.D6.Agw=[this,this.
AyF];this.Cn.Q=[B=this.O,B.AuP,B.AXB];this.Cn.Ad7(false);this.Cn.Aj5=false;this.
Cn.R5=[this,this.AhX];this.Cn.Agw=null;this.D6.Ap(!A.z8(this.D6.Cv,this.D6.B1));
this.Cn.Ap(this.Cn.Cv!==this.Cn.B1);},AhX:function(H){this.MI=!this.Cn.Bw&&!this.
D6.Bw;this.Mh();},AyF:function(H){this.O.G(A.aaM(this.O.M,this.D6.A4));},_Init:function(
aArg){C.Mj._Init.call(this,aArg);C.F_._Init.call(this.Cn={I:this},0);C.AD$._Init.
call(this.D6={I:this},0);this.__proto__=C.Aea;},_Done:function(){this.__proto__=
C.Mj;this.Cn._Done();this.D6._Done();C.Mj._Done.call(this);},_ReInit:function(){
C.Mj._ReInit.call(this);this.Cn._ReInit();this.D6._ReInit();},_Mark:function(D){
var B;C.Mj._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Ars={AcN:null,Cn:null,GS:null,Vz:null,FG:null,TK:A.vw,AjS:A.vw,MI:false,Ao4:false
,Aup:function(){return this.MI;},Yy:function(){if(this.Dp){this.O.DD(this.Cn.B1);
this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.TK));this.O.X(true);}if(!this.
Dp&&!this.Cn.B1){this.O.DD(0);this.O.X(false);}if(((!this.Dp&&(this.Cn.B1>0))&&!
!this.O.Ac)&&!this.QG){this.O.DD(this.Cn.B1);this.O.G(A.aam(A.aal(this.O.M,A.zT(
this.O.M)),this.TK));this.O.X(true);}if((!this.Dp&&this.QG)&&!!this.O.Ac)this.O.
Ac.HH(this.O);this.O.Aqn(this.Ao4);if(!!this.AcN)this.Ac.HH(this.AcN);if(!this.Bw
)this.O.Ap(false);},R$:function(){var B;if(this.AbJ){if(this.O.E$()&&!!this.O.Ac
)this.Cn.Cv=this.O.GN;else this.Cn.Cv=0;this.AjS=A.zT(this.O.M);}var Aya=((!this.
O.Ac||!this.O.GN)||!this.O.E$())||(((B=A.kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ayb=((!this.Dp&&((!this.O.Ac||!this.O.
E$())||this.QG))||!this.Cn.B1)||(((B=A.kz(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.
TK),[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Aya&&Ayb
){this.Cn.Cv=0;this.Cn.B1=0;this.AjS=this.TK;this.Vz.A4J();}this.Ao4=this.O.AP6(
);if(this.Bw)this.O.Ap(true);if((this.Dp||this.Ait)&&!this.O.Ac){this.O.X(false);
this.Ac.J(this.O,0);}if(this.Dp&&this.YT)this.O.Ac.QI(this.O);if(this.Dp&&this.AiC
)this.O.Ac.A$(this.O);if(!this.Dp&&(this.Ac.AY===this.O))this.Ac.A$(null);if(this.
Dp&&!this.O.E$())this.O.DD(this.Cn.Cv);if((!this.Dp&&A.z8(this.AjS,this.TK))&&this.
Vz.ABY())this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.AjS));if(!this.Dp&&(
this.Cn.Cv===this.Cn.B1))this.O.DD(this.Cn.Cv);if(!this.Dp&&((!this.O.Ac||!this.
O.E$())||!this.O.GN)){this.MI=true;this.Mh();return;}if(((this.Dp&&(this.O.GN===
this.Cn.B1))&&A.z8(A.zT(this.O.M),this.TK))&&this.O.E$()){this.MI=true;this.Mh();
return;}if(((!this.Dp&&(this.O.GN===this.Cn.B1))&&A.z8(A.zT(this.O.M),this.TK))&&
this.Vz.ABY()){this.MI=true;this.Mh();return;}if(((this.Cn.Cv===this.Cn.B1)&&A.z8(
this.AjS,this.TK))&&this.Vz.ABY()){this.MI=true;this.Mh();return;}this.O.Aqn(true
);this.O.X(false);this.AcN=A._NewObject(A.abh.AS1,0);this.AcN.Bi_(this.O);this.AcN.
DD(this.Cn.Cv);this.AcN.Bj0(A.zT([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.O.Ac.
AJ2(this.AcN,this.O);if(!this.Cn.Mp)this.Cn.IF(1);if(!this.GS.Mp)this.GS.IF(1);this.
GS.Ad7(false);this.GS.Aj5=false;this.GS.R5=[this,this.AhX];this.GS.Agw=[this,this.
AyF];if(this.Dp){this.GS.Cv=0;this.GS.B1=1;}else{this.GS.Cv=1;this.GS.B1=0;}this.
Cn.Q=[B=this.AcN,B.AuP,B.DD];this.Cn.Ad7(false);this.Cn.Aj5=false;this.Cn.R5=[this
,this.AhX];this.Cn.Agw=null;this.GS.Ap(!A.z8(this.AjS,this.TK)||!this.Vz.ABY());
this.Cn.Ap(this.Cn.Cv!==this.Cn.B1);},AhX:function(H){this.MI=!this.Cn.Bw&&!this.
GS.Bw;this.Mh();},AyF:function(H){var B;var Azu=A.aaj(this.TK,this.AjS);if(!this.
Dp)Azu=[-Azu[0],-Azu[1]];this.FG.A4J();this.FG.Af6=this.Vz.Af6;this.FG.Bme(Azu[0
],Azu[1],0);this.FG.BfJ(this.Vz,this.FG,this.GS.A4);if(this.Dp)this.AcN.AFc(this.
AjS,this.FG);else this.AcN.AFc(this.TK,this.FG);},_Init:function(aArg){C.Mj._Init.
call(this,aArg);C.F_._Init.call(this.Cn={I:this},0);C.MX._Init.call(this.GS={I:this
},0);A.Graphics.Awi._Init.call(this.Vz={I:this},0);A.Graphics.Awi._Init.call(this.
FG={I:this},0);this.__proto__=C.Ars;},_Done:function(){this.__proto__=C.Mj;this.
Cn._Done();this.GS._Done();this.Vz._Done();this.FG._Done();C.Mj._Done.call(this);
},_ReInit:function(){C.Mj._ReInit.call(this);this.Cn._ReInit();this.GS._ReInit();
this.Vz._ReInit();this.FG._ReInit();},_Mark:function(D){var B;C.Mj._Mark.call(this
,D);if((B=this.AcN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.FG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Effects::WarpFader"};C.QR={RF:function(){return null;},RE:function(){return null;
},Add:function(){return this.RF();},Adc:function(){return this.RE();},_Init:function(
aArg){this.__proto__=C.QR;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.ASg={RF:function(){var Al=A._NewObject(C.Arr,0);Al.Dp=true;Al.Bw=true;Al.AiC=false;
Al.YT=true;Al.AbJ=false;Al.Ajy=[this,this.AoB];return Al;},RE:function(){var Al=
A._NewObject(C.Arr,0);Al.Dp=false;Al.Bw=false;Al.QG=true;return Al;},Add:function(
){var Al=C.QR.Add.call(this);Al.YT=false;Al.Bw=true;return Al;},Adc:function(){var
Al=A._NewObject(C.Arr,0);Al.Dp=false;Al.Bw=true;Al.Ait=true;Al.QG=false;return Al;
},AoB:function(H){var B;var Al=(C.Arr.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(
0,2);pos=[(A8[0]+(((A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((
A8[3]-A8[1])/2)|0))-((CZ[1]/2)|0)];Al.AqS=pos;},_Init:function(aArg){C.QR._Init.
call(this,aArg);this.__proto__=C.ASg;},_className:"Effects::ShowHideTransition"};
C.Adl={AAK:500,RF:function(){var Al=A._NewObject(C.Aea,0);Al.Dp=true;Al.Bw=true;
Al.AiC=false;Al.YT=true;Al.AbJ=true;Al.Ac8=false;Al.Ajy=[this,this.AoB];Al.Cn.FA(
this.AAK);Al.Cn.Cv=0;Al.Cn.B1=255;Al.D6.FA(this.AAK);Al.D6.VN(23);return Al;},RE:
function(){var Al=A._NewObject(C.AvG,0);Al.Dp=false;Al.Bw=false;Al.QG=true;Al.AbJ=
true;Al.ES.Cv=255;Al.ES.B1=0;Al.ES.FA(this.AAK);return Al;},Add:function(){var Al=
C.QR.Add.call(this);Al.YT=false;Al.Bw=true;return Al;},Adc:function(){var Al=C.QR.
Adc.call(this);Al.Ait=true;Al.QG=false;Al.Bw=true;return Al;},AoB:function(H){var
B;var Al=(C.Aea.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[
1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);pos=[(A8[0]+(((A8[
2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((A8[3]-A8[1])/2)|0))-((
CZ[1]/2)|0)];Al.D6.B1=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GN)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.
O.M,pos));},_Init:function(aArg){C.QR._Init.call(this,aArg);this.__proto__=C.Adl;
},_className:"Effects::FadeInOutTransition"};C.AEK={J7:0x12,Atz:0,Ac8:false,RF:function(
){var Al=A._NewObject(C.Aea,0);Al.Dp=true;Al.Bw=true;Al.AiC=false;Al.YT=true;Al.
AbJ=true;Al.Ac8=this.Ac8;Al.Ajy=[this,this.AoB];Al.Cn.FA(500);Al.Cn.AjG(0);Al.Cn.
Cv=0;Al.Cn.B1=255;Al.D6.FA(500);Al.D6.VN(23);Al.D6.ADN(0);Al.D6.ADO(0);Al.D6.Au$(
3);Al.D6.ACR(0.5);Al.D6.ADz(3);Al.D6.ACW(3);Al.D6.AC7(0.5);return Al;},RE:function(
){var Al=A._NewObject(C.Aea,0);Al.Dp=false;Al.Bw=false;Al.QG=true;Al.AbJ=true;Al.
Ac8=this.Ac8;Al.Ajy=[this,this.A0z];Al.Cn.Cv=255;Al.Cn.B1=0;Al.Cn.FA(500);Al.Cn.
AjG(0);Al.D6.FA(500);Al.D6.VN(23);Al.D6.ADN(0);Al.D6.ADO(0);Al.D6.Au$(3);Al.D6.ACR(
0.5);Al.D6.ADz(3);Al.D6.ACW(3);Al.D6.AC7(0.5);return Al;},Add:function(){var Al=
C.QR.Add.call(this);Al.YT=false;Al.Bw=true;return Al;},Adc:function(){var Al=C.QR.
Adc.call(this);Al.Ait=true;Al.QG=false;Al.Bw=true;return Al;},AoB:function(H){var
B;var Al=(C.Aea.isPrototypeOf(H)?H:null);var Br=this.J7;var A8=[0,0,(B=Al.Ac.M)[
2]-B[0],B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);if(((
Br&0x4)===0x4))pos=[A8[2]-CZ[0],pos[1]];else if(((Br&0x2)===0x2))pos=[(A8[0]+(((
A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];if(((Br&0x20)===0x20))pos=[pos[0],A8[3
]-CZ[1]];else if(((Br&0x10)===0x10))pos=[pos[0],(A8[1]+(((A8[3]-A8[1])/2)|0))-((
CZ[1]/2)|0)];Al.D6.B1=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GN)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hp=[(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];switch(this.Atz){case 5:pos=[pos[0],-CZ[1]];break;case 3:{
pos=[pos[0],-CZ[1]];pos=[Hp[0],pos[1]];}break;case 8:pos=[-CZ[0],-CZ[1]];break;case
2:pos=[Hp[0],pos[1]];break;case 7:pos=[-CZ[0],pos[1]];break;case 4:pos=[pos[0],Hp[
1]];break;case 1:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 6:{pos=[pos[
0],Hp[1]];pos=[-CZ[0],pos[1]];}break;default:;}Al.O.G(A.aaM(Al.O.M,pos));}},A0z:
function(H){var B;var Al=(C.Aea.isPrototypeOf(H)?H:null);var pos=Al.O.M.slice(0,
2);var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var Hp=[(B=Al.Ac.M)[2]-B[0],B[3]-B[1]];
switch(this.Atz){case 5:pos=[pos[0],Hp[1]];break;case 3:{pos=[pos[0],Hp[1]];pos=[-
CZ[0],pos[1]];}break;case 8:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 2:
pos=[-CZ[0],pos[1]];break;case 7:pos=[Hp[0],pos[1]];break;case 4:pos=[pos[0],-CZ[
1]];break;case 1:pos=[-CZ[0],-CZ[1]];break;case 6:{pos=[pos[0],-CZ[1]];pos=[Hp[0
],pos[1]];}break;default:;}Al.D6.B1=pos;},_Init:function(aArg){C.QR._Init.call(this
,aArg);this.__proto__=C.AEK;},_className:"Effects::SlideTransition"};C.AgT={RF:function(
){var Al=A._NewObject(C.Ars,0);Al.Dp=true;Al.Bw=true;Al.AiC=false;Al.YT=true;Al.
AbJ=true;Al.Ajy=[this,this.AoB];Al.Cn.FA(500);Al.Cn.AjG(0);Al.Cn.Cv=0;Al.Cn.B1=255;
Al.GS.FA(500);Al.GS.VN(23);Al.GS.ADN(0);Al.GS.ADO(0);Al.GS.Au$(3);Al.GS.ACR(0.5);
Al.GS.ADz(3);Al.GS.ACW(3);Al.GS.AC7(0.5);Al.Vz.Aej(0.5,0.5,1);return Al;},RE:function(
){var Al=A._NewObject(C.Ars,0);Al.Dp=false;Al.Bw=false;Al.QG=true;Al.AbJ=true;Al.
Ajy=[this,this.A0z];Al.Cn.Cv=255;Al.Cn.B1=0;Al.Cn.FA(500);Al.Cn.AjG(0);Al.GS.FA(
500);Al.GS.VN(23);Al.GS.ADN(0);Al.GS.ADO(0);Al.GS.Au$(3);Al.GS.ACR(0.5);Al.GS.ADz(
3);Al.GS.ACW(3);Al.GS.AC7(0.5);Al.Vz.Aej(0.5,0.5,1);return Al;},Add:function(){var
Al=C.QR.Add.call(this);Al.YT=false;Al.Bw=true;return Al;},Adc:function(){var Al=
C.QR.Adc.call(this);Al.Ait=true;Al.QG=false;Al.Bw=true;return Al;},AoB:function(
H){var B;var Al=(C.Ars.isPrototypeOf(H)?H:null);var A8=[0,0,(B=Al.Ac.M)[2]-B[0],
B[3]-B[1]];var CZ=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A8.slice(0,2);pos=[(A8[
0]+(((A8[2]-A8[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A8[1]+(((A8[3]-A8[1
])/2)|0))-((CZ[1]/2)|0)];Al.TK=A.aak(pos,[(CZ[0]/2)|0,(CZ[1]/2)|0]);if(((!Al.O.Ac||
!Al.O.E$())||!Al.O.GN)||(((B=A.kz(Al.O.M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.O.M,A.aaj(Al.TK,A.zT([0,0,(B=Al.O.M)[2]-
B[0],B[3]-B[1]]))));},A0z:function(H){var Al=(C.Ars.isPrototypeOf(H)?H:null);Al.
TK=A.zT(Al.O.M);},_Init:function(aArg){C.QR._Init.call(this,aArg);this.__proto__=
C.AgT;},_className:"Effects::ScaleTransition"};C.Ag3={BAa:0,BAQ:1,BAS:2,BAR:3,Bzx:
4,Bzz:5,Bzy:6,BBk:7,BBm:8,BBl:9,By6:10,By8:11,By7:12,ByM:13,ByO:14,ByN:15,Bzo:16
,Bzq:17,Bzp:18,ByX:19,ByZ:20,ByY:21,Bzn:22,BzB:23,Bzm:24,BzC:25,Bzb:26};C.Bzh={A17:
0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20};C.ALQ={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ALQ;},_className:"Effects::EffectTimerClass"};C.
Af2={_Init:function(){C.ALQ._Init.call(this,0);this.QB(15);this.Ap(true);},_variants:
function(){return this;},_this:null};C.AEZ={O3:A.aan(12,0,null),Akx:A.aan(12,0,null
),_Init:function(aArg){(this.O3=[]).__proto__=C.AEZ.O3;(this.Akx=[]).__proto__=C.
AEZ.Akx;this.__proto__=C.AEZ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};
C.AAR={B5:null,B8:null,A5f:function(Ar3){var Al=this.B8;while(!!Al){Al.Yy();Al.O.
U=Al.O.U&~0x40000;Al=Al.Af;}Al=this.B8;while(!!Al){A.ow(Al.A0n,Al);Al=Al.Af;}},A5e:
function(Ar3){var Al=this.B8;while(!!Al){A.ow(Al.AID,Al);Al=Al.Af;}this.B8=null;
this.B5=null;},R$:function(Ar3){var B;if(!this.B8)this.Mh();var Al=this.B8;while(
!!Al){Al.O.U=(Al.O.U|0x40000)&~0x20000;Al.O.AoJ=null;Al=Al.Af;}Al=this.B8;while(
!!Al){(B=Al.Ajy)?B[1].call(B[0],Al):null;Al.R$();Al=Al.Af;}},Mh:function(){var Al=
this.B8;while(!!Al&&Al.Aup())Al=Al.Af;if(!Al)A.Core.Aj6.Mh.call(this);},BkO:function(
FE){if(!FE)return;if(this.AOR())throw new Error(BH);if(FE.O4!==this)throw new Error(
EV);if(!!FE.Af)FE.Af.AG=FE.AG;else this.B5=FE.AG;if(!!FE.AG)FE.AG.Af=FE.Af;else this.
B8=FE.Af;FE.O4=null;FE.Af=null;FE.AG=null;if(!!FE.O)FE.O.AoJ=null;A.ow(FE.AID,FE
);if(!this.B8)this.Ac9();},A11:function(FE){if(!FE)return;if(this.AOR())throw new
Error(GT);if(!!FE.O4)throw new Error(Jt);FE.AG=this.B5;FE.Af=null;if(!!this.B5)this.
B5.Af=FE;else this.B8=FE;this.B5=FE;FE.O4=this;},_Init:function(aArg){A.Core.Aj6.
_Init.call(this,aArg);this.__proto__=C.AAR;},_Mark:function(D){var B;A.Core.Aj6.
_Mark.call(this,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::FaderTask"};C.AvX={
_Init:function(){C.ASg._Init.call(this,0);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.F_.__proto__=C.ES;C.AD$.__proto__=C.ES;C.ALd.__proto__=C.ES;
C.MX.__proto__=C.ES;C.Arr.__proto__=C.Mj;C.AvG.__proto__=C.Mj;C.Aea.__proto__=C.
Mj;C.Ars.__proto__=C.Mj;C.ASg.__proto__=C.QR;C.Adl.__proto__=C.QR;C.AEK.__proto__=
C.QR;C.AgT.__proto__=C.QR;C.ALQ.__proto__=A.Core.Timer;C.AAR.__proto__=A.Core.Aj6;
};C._ReInit=function(){var B;if((B=C.Af2._this))B._ReInit();if((B=C.AvX._this))B.
_ReInit();};C.DE=function(D){var B;if((B=C.Af2._this)&&(B._cycle!=D))B._Done(C.Af2.
_this=null);if((B=C.AvX._this)&&(B._cycle!=D))B._Done(C.AvX._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */