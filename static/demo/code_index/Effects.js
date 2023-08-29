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
var B9=[100,100];var BG="Trying to remove a fader from a task, which is actually running";
var EV="The fader doesn\'t belong to this task";var GS="Trying to add a fader to a task, which is actually running";
var Js="The fader belongs already to a task";
C.ER={MN:null,timer:null,P1:null,R4:null,Agm:null,SG:0,Ah7:0,Ul:0,OT:0,Ax1:0.001,
WF:0,D_:0,Dq:0,ALE:0.5,A2e:3,Avx:3,As7:0.5,U4:3,ASv:0,ASu:0,Mp:0,Pc:1000,Pl:0,Vc:
0,AgV:0,Bv:false,AjU:false,ARI:false,AoK:false,AJa:false,L$:function(H){var B;if(
!this.timer)return;if(!this.Ah7){if(this.ARI)this.Ah7=-1;else this.Ah7=1;this.SG=
this.Ah7;this.Dq=this.timer.Bu;this.D_=0;this.WF=-1;}var MG;if((this.Ah7>0)&&(this.
SG>0))MG=this.Bw_();else if((this.Ah7<0)&&(this.SG<0))MG=this.Bxb();else if(this.
Ah7>0)MG=this.Bw$();else MG=this.Bxa();if(MG){this.Ap(false);(B=this.P1)?B[1].call(
B[0],this):null;(B=this.R4)?B[1].call(B[0],this):null;}},AIN:function(AK){var B;
if(!this.MN&&(((this.AgV===19)||(this.AgV===20))||(this.AgV===21))){var AHn=this.
A2e+1;var BuK=Math.sqrt(this.ALE);var Rf=0.5;var P;this.MN=A._NewObject(C.AEP,0);
this.MN.O2.Set(0,1);this.MN.Akk.Set(0,1);for(P=1;P<AHn;P=P+1){this.MN.O2.Set(P,this.
MN.O2.Get(P-1)*BuK);this.MN.Akk.Set(P,this.MN.Akk.Get(P-1)*this.ALE);Rf=Rf+this.
MN.O2.Get(P);}var Bvs=1/Rf;this.MN.O2.Set(0,0.5);Rf=0;for(P=0;P<AHn;P=P+1){this.
MN.O2.Set(P,this.MN.O2.Get(P)*Bvs);Rf=Rf+this.MN.O2.Get(P);}this.MN.O2.Set(AHn,this.
MN.O2.Get(AHn)+(1-Rf));}if(this.AjU){if(AK<0.5)AK=AK*2;else AK=2-(AK*2);}switch(
this.AgV){case 1:AK=Math.pow(AK,this.U4);break;case 2:{AK=1-AK;AK=1-Math.pow(AK,
this.U4);}break;case 3:{AK=AK*2;if(AK<1)AK=Math.pow(AK,this.U4)/2;else{AK=2-AK;AK=(
2-Math.pow(AK,this.U4))*0.5;}}break;case 4:AK=(Math.pow(2.718,this.U4*AK)-1)/(Math.
pow(2.718,this.U4)-1);break;case 5:{AK=1-AK;AK=1-((Math.pow(2.718,this.U4*AK)-1)
/(Math.pow(2.718,this.U4)-1));}break;case 6:{AK=AK*2;if(AK<1)AK=((Math.pow(2.718
,this.U4*AK)-1)/(Math.pow(2.718,this.U4)-1))/2;else{AK=2-AK;AK=(2-((Math.pow(2.718
,this.U4*AK)-1)/(Math.pow(2.718,this.U4)-1)))*0.5;}}break;case 7:AK=1-Math.cos((
AK*90)*A.kw);break;case 8:AK=Math.sin((AK*90)*A.kw);break;case 9:{AK=AK*2;if(AK<
1){AK=1-Math.cos((AK*90)*A.kw);AK=AK*0.5;}else{AK=2-AK;AK=1-Math.cos((AK*90)*A.kw
);AK=(2-AK)*0.5;}}break;case 10:AK=1-Math.sqrt(1-(AK*AK));break;case 11:{AK=1-AK;
AK=Math.sqrt(1-(AK*AK));}break;case 12:{AK=AK*2;if(AK<1){AK=1-Math.sqrt(1-(AK*AK
));AK=AK*0.5;}else{AK=2-AK;AK=1-Math.sqrt(1-(AK*AK));AK=(2-AK)*0.5;}}break;case 13:
AK=((AK*AK)*AK)-((AK*this.As7)*Math.sin((AK*180)*A.kw));break;case 14:{AK=1-AK;AK=((
AK*AK)*AK)-((AK*this.As7)*Math.sin((AK*180)*A.kw));AK=1-AK;}break;case 15:{AK=AK
*2;if(AK<1){AK=((AK*AK)*AK)-((AK*this.As7)*Math.sin((AK*180)*A.kw));AK=AK*0.5;}else{
AK=2-AK;AK=((AK*AK)*AK)-((AK*this.As7)*Math.sin((AK*180)*A.kw));AK=(2-AK)*0.5;}}
break;case 16:AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.Avx)))*A.kw);break;case
17:{AK=1-AK;AK=1-(((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.Avx)))*A.kw));}break;
case 18:{AK=AK*2;if(AK<1){AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.Avx)))*A.
kw);AK=AK*0.5;}else{AK=2-AK;AK=((AK*AK)*AK)*Math.sin(((AK*90)*(1+(4*this.Avx)))*
A.kw);AK=(2-AK)*0.5;}}break;case 19:{var BD=this.MN;var P=0;var Gq=0;var KT=BD.O2.
Get(0);var D2=1-AK;while(D2>KT){P=P+1;Gq=KT;KT=KT+BD.O2.Get(P);}AK=(D2-Gq)/(KT-Gq
);if(!P)AK=1-(AK*AK);else{AK=(2*AK)-1;AK=BD.Akk.Get(P)*(1-(AK*AK));}}break;case 20:{
var BD=this.MN;var P=0;var Gq=0;var KT=BD.O2.Get(0);while(AK>KT){P=P+1;Gq=KT;KT=
KT+BD.O2.Get(P);}AK=(AK-Gq)/(KT-Gq);if(!P)AK=AK*AK;else{AK=(2*AK)-1;AK=1-(BD.Akk.
Get(P)*(1-(AK*AK)));}}break;case 21:{var BD=this.MN;var P=0;var Gq=0;var KT=BD.O2.
Get(0);var Lr=AK*2;var D2=Lr-1;if(Lr<1)D2=-D2;while(D2>KT){P=P+1;Gq=KT;KT=KT+BD.
O2.Get(P);}D2=(D2-Gq)/(KT-Gq);if(!P)D2=D2*D2;else{D2=(2*D2)-1;D2=1-(BD.Akk.Get(P
)*(1-(D2*D2)));}if(Lr<1)AK=0.5*(1-D2);else AK=0.5*(1+D2);}break;default:if(this.
AoK){var Lr=AK;var Ayo=1-Lr;AK=((Ayo*Lr)*(this.OT+1))+(Lr*Lr);}else if(this.AJa){
var Lr=AK;var Ayo=1-Lr;var A_$=Lr*Lr;var BvG=Ayo*Ayo;AK=(((BvG*Lr)*(this.OT+1))+((
Ayo*A_$)*(this.Ul+2)))+(A_$*Lr);}}this.Ata(AK);(B=this.Agm)?B[1].call(B[0],this):
null;},Bxb:function(){var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Ln=this.
Vc;var Of=this.Vc+this.Pc;var GZ=this.Pl+this.Pc;var MG=false;var H7=this.WF;if(
!this.D_&&(Aq>=Of)){this.D_=1;Aq=Aq-Of;this.Dq=this.Dq+Of;}if((this.D_>0)&&(Aq>=
GZ)){var H6=(Aq/GZ)|0;this.D_=this.D_+H6;Aq=Aq-(H6*GZ);this.Dq=this.Dq+(H6*GZ);}
if((this.D_>2)&&!this.Mp)this.D_=1;if(this.D_>0)Ln=this.Pl;if((this.D_>=this.Mp)&&(
this.Mp>0)){MG=true;H7=0;}else if(Aq>=Ln)H7=1-((Aq-Ln)*this.Ax1);else if(H7>=0)H7=
0;if(H7!==this.WF){this.WF=H7;this.AIN(H7);}return MG;},Bxa:function(){var Aq=(this.
Dq-this.timer.Bu)|0;var Ln=this.Vc;var Of=this.Vc+this.Pc;var GZ=this.Pl+this.Pc;
var MG=false;var H7=this.WF;if((this.D_>1)&&(Aq<0)){var H6=(((-Aq+GZ)-1)/GZ)|0;if((
this.D_-H6)<=0)H6=this.D_-1;this.D_=this.D_-H6;Aq=Aq+(H6*GZ);this.Dq=this.Dq+(H6
*GZ);}if(((this.D_===1)&&(Aq<0))&&(this.Mp>0)){this.D_=0;Aq=Aq+Of;this.Dq=this.Dq+
Of;}if(((this.D_===1)&&(Aq<0))&&!this.Mp){var H6=(((-Aq+GZ)-1)/GZ)|0;Aq=Aq+(H6*GZ
);this.Dq=this.Dq+(H6*GZ);}if(this.D_>0)Ln=this.Pl;if(Aq<0){MG=true;H7=1;}else if(
Aq>=Ln)H7=1-((Aq-Ln)*this.Ax1);else if(H7>=0)H7=1;if(H7!==this.WF){this.WF=H7;this.
AIN(H7);}return MG;},Bw$:function(){var Aq=(this.Dq-this.timer.Bu)|0;var Ln=this.
Vc;var Of=this.Vc+this.Pc;var GZ=this.Pl+this.Pc;var MG=false;var H7=this.WF;if((
this.D_>1)&&(Aq<0)){var H6=(((-Aq+GZ)-1)/GZ)|0;if((this.D_-H6)<=0)H6=this.D_-1;this.
D_=this.D_-H6;Aq=Aq+(H6*GZ);this.Dq=this.Dq+(H6*GZ);}if(((this.D_===1)&&(Aq<0))&&(
this.Mp>0)){this.D_=0;Aq=Aq+Of;this.Dq=this.Dq+Of;}if(((this.D_===1)&&(Aq<0))&&!
this.Mp){var H6=(((-Aq+GZ)-1)/GZ)|0;Aq=Aq+(H6*GZ);this.Dq=this.Dq+(H6*GZ);}if(this.
D_>0)Ln=this.Pl;if(Aq<0){MG=true;H7=0;}else if(Aq>=Ln)H7=(Aq-Ln)*this.Ax1;else if(
H7>=0)H7=0;if(H7!==this.WF){this.WF=H7;this.AIN(H7);}return MG;},Bw_:function(){
var Aq=(this.timer.Bu-this.Dq)|0;if(Aq<0)Aq=-Aq;var Ln=this.Vc;var Of=this.Vc+this.
Pc;var GZ=this.Pl+this.Pc;var MG=false;var H7=this.WF;if(!this.D_&&(Aq>=Of)){this.
D_=1;Aq=Aq-Of;this.Dq=this.Dq+Of;}if((this.D_>0)&&(Aq>=GZ)){var H6=(Aq/GZ)|0;this.
D_=this.D_+H6;Aq=Aq-(H6*GZ);this.Dq=this.Dq+(H6*GZ);}if((this.D_>2)&&!this.Mp)this.
D_=1;if(this.D_>0)Ln=this.Pl;if((this.D_>=this.Mp)&&(this.Mp>0)){MG=true;H7=1;}else
if(Aq>=Ln)H7=(Aq-Ln)*this.Ax1;else if(H7>=0)H7=1;if(H7!==this.WF){this.WF=H7;this.
AIN(H7);}return MG;},Ad0:function(E){if(this.ARI===E)return;this.ARI=E;if(!this.
Bv||!this.Ah7)return;if(E)this.SG=-1;else this.SG=1;this.Dq=(this.timer.AtP()*2)-
this.Dq;},ACY:function(E){if(E<0)E=0;if(E>1)E=1;this.ALE=E;},ACO:function(E){if(
E<1)E=1;if(E>10)E=10;this.A2e=E;this.MN=null;},ADq:function(E){if(E<1)E=1;if(E>10
)E=10;this.Avx=E;},ACJ:function(E){if(E<0)E=0;if(E>10)E=10;this.As7=E;},AuY:function(
E){if(E<1)E=1;if(E>100)E=100;this.U4=E;},ADG:function(E){if(this.ASv===E)return;
this.ASv=E;if(this.AgV===26){this.Ul=E;this.AoK=(this.OT===this.Ul)&&!!this.OT;this.
AJa=!this.AoK&&(this.OT!==this.Ul);}},ADF:function(E){if(this.ASu===E)return;this.
ASu=E;if(this.AgV===26){this.OT=E;this.AoK=(this.OT===this.Ul)&&!!this.OT;this.AJa=
!this.AoK&&(this.OT!==this.Ul);}},VJ:function(E){if(this.AgV===E)return;this.AgV=
E;this.MN=null;switch(E){case 24:{this.OT=-1.1;this.Ul=1.1;}break;case 22:{this.
OT=-1;this.Ul=-2;}break;case 23:{this.OT=2;this.Ul=1;}break;case 25:{this.OT=1.1;
this.Ul=-1.1;}break;case 0:{this.OT=0;this.Ul=0;}break;default:{this.OT=this.ASu;
this.Ul=this.ASv;}}this.AoK=(this.OT===this.Ul)&&!!this.OT;this.AJa=!this.AoK&&(
this.OT!==this.Ul);},IF:function(E){if(E<0)E=0;this.Mp=E;},Fz:function(E){if(E<15
)E=15;this.Pc=E;this.Ax1=1/E;},VI:function(E){if(E<0)E=0;this.Pl=E;},Ajv:function(
E){if(E<0)E=0;this.Vc=E;},Ap:function(E){if(this.Bv===E)return;this.Bv=E;if(!E&&
!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(C.AfS);A.y_([this,this.L$],this.timer,0);this.Ah7=0;A.ow([this,
this.L$],this);}},Ata:function(Zj){},AvS:function(H){this.Ap(false);},AED:function(
H){if(this.Bv)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.__proto__=
C.ER;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.MN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P1)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.R4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Agm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.F_={Q:null,A3:0,BZ:255,Cv:0,Ata:function(Zj){var F;this.A3=this.Cv+(Math.round((
this.BZ-this.Cv)*Zj)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A3));},_Init:function(
aArg){C.ER._Init.call(this,aArg);this.__proto__=C.F_;},_Mark:function(D){var B;C.
ER._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Effects::Int32Effect"};C.AD3={Q:null,A3:A.vw,BZ:B9,Cv:A.vw,Ata:function(
Zj){var F;var FY=this.Cv[0];var Dk=this.Cv[1];FY=FY+(Math.round((this.BZ[0]-FY)*
Zj)|0);Dk=Dk+(Math.round((this.BZ[1]-Dk)*Zj)|0);this.A3=[FY,Dk];if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A3));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.
__proto__=C.AD3;},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::PointEffect"};C.AK2={
Q:null,A3:0,BZ:0xFFFFFFFF,Cv:0,Ata:function(Zj){var F;var O0=this.Cv&0xFF;var Zu=(
this.Cv>>8)&0xFF;var Akq=(this.Cv>>16)&0xFF;var Akj=(this.Cv>>24)&0xFF;O0=O0+((((
this.BZ&0xFF)-O0)*Zj)|0);Zu=Zu+(((((this.BZ>>8)&0xFF)-Zu)*Zj)|0);Akq=Akq+(((((this.
BZ>>16)&0xFF)-Akq)*Zj)|0);Akj=Akj+(((((this.BZ>>24)&0xFF)-Akj)*Zj)|0);if(O0<0)O0=
0;if(O0>255)O0=255;if(Zu<0)Zu=0;if(Zu>255)Zu=255;if(Akq<0)Akq=0;if(Akq>255)Akq=255;
if(Akj<0)Akj=0;if(Akj>255)Akj=255;this.A3=(O0&0xFF)|((Zu&0xFF)<<8)|((Akq&0xFF)<<
16)|((Akj&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A3));},_Init:function(
aArg){C.ER._Init.call(this,aArg);this.__proto__=C.AK2;},_Mark:function(D){var B;
C.ER._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Effects::ColorEffect"};C.MX={A3:0,BZ:1,Cv:0,Ata:function(Zj){this.
A3=this.Cv+((this.BZ-this.Cv)*Zj);},_Init:function(aArg){C.ER._Init.call(this,aArg
);this.__proto__=C.MX;},_className:"Effects::FloatEffect"};C.UR={timer:null,Q:null
,D_:0,Dq:0,Pc:1000,Pl:1000,Vc:0,Bv:false,Cv:false,BZ:true,L$:function(H){var F;if(
!this.timer)return;if(this.D_<0){this.Dq=this.timer.Bu;this.D_=0;}var Aq=(this.timer.
Bu-this.Dq)|0;var Of=this.Vc+this.Pc;var GZ=this.Pl+this.Pc;var Ln=this.Vc;var Jv=
this.D_;if(!Jv&&(Aq>=Of)){Jv=1;Aq=Aq-Of;}if((Jv>0)&&(Aq>=GZ)){var H6=(Aq/GZ)|0;Aq=
Aq-(H6*GZ);Jv=Jv+H6;}if(Jv>2)Jv=1;if(Jv!==this.D_){this.Dq=this.timer.Bu-(((B=Aq
)<0)?B+0x100000000:B);this.D_=Jv;}if(Jv>0)Ln=this.Pl;if(!!this.Q){if(Aq>=Ln)(F=this.
Q,F[2].call(F[0],this.Cv));if((Aq<Ln)&&(Jv>0))(F=this.Q,F[2].call(F[0],this.BZ));
}},Fz:function(E){if(E<100)E=100;this.Pc=E;},VI:function(E){if(E<0)E=0;this.Pl=E;
},Ajv:function(E){if(E<0)E=0;this.Vc=E;},Ap:function(E){if(this.Bv===E)return;this.
Bv=E;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;}if(
E){this.timer=A._GetAutoObject(C.AfS);A.y_([this,this.L$],this.timer,0);this.D_=-
1;}},_Init:function(aArg){this.__proto__=C.UR;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.timer)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.Mj={O3:null,AG:null,Af:null,Ac:null,O:null
,AIq:null,AZX:null,Ajn:null,Dp:true,Bv:true,Abu:true,Aii:false,Air:true,YI:true,
QD:true,Mh:function(){if(!!this.O3)this.O3.Mh();},Aud:function(){return true;},Yp:
function(){},R_:function(){this.Mh();},_Init:function(aArg){this.__proto__=C.Mj;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.O3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ac)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AZX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajn)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Ard={AqC:A.vw
,MI:false,Aud:function(){return this.MI;},Yp:function(){if(!this.Dp&&!!this.O.Ac
)this.O.X(false);if((!this.Dp&&this.QD)&&!!this.O.Ac)this.O.Ac.HD(this.O);if(!this.
Bv)this.O.Ap(false);},R_:function(){if(this.Bv)this.O.Ap(true);if((this.Dp||this.
Aii)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YI)this.
O.Ac.QF(this.O);if(this.Dp&&this.Air)this.O.Ac.A_(this.O);if(this.Dp&&!this.Abu)
this.O.G(A.aaM(this.O.M,this.AqC));if(this.Dp){this.O.DL(255);this.O.X(true);}if(
!this.Dp&&(this.Ac.AY===this.O))this.Ac.A_(null);this.MI=true;this.Mh();},_Init:
function(aArg){C.Mj._Init.call(this,aArg);this.__proto__=C.Ard;},_className:"Effects::VisibilityFader"
};C.Avt={ER:null,MI:false,AoN:false,Aud:function(){return this.MI;},Yp:function(
){if(this.Dp)this.O.DL(this.ER.BZ);if(!this.Dp&&!this.O.GM)this.O.X(false);if((!
this.Dp&&this.QD)&&!!this.O.Ac)this.O.Ac.HD(this.O);if(!this.Bv)this.O.Ap(false);
},R_:function(){var B;if(this.Abu){if(this.O.E$()&&!!this.O.Ac)this.ER.Cv=this.O.
GM;else this.ER.Cv=0;}var Ax4=((!this.O.Ac||!this.O.GM)||!this.O.E$())||(((B=A.kz(
this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ax5=((
!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QD))||!this.ER.BZ)||(((B=A.kz(this.O.
M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ax4&&Ax5){
this.ER.Cv=0;this.ER.BZ=0;}this.AoN=this.O.APV();if(this.Bv)this.O.Ap(true);if((
this.Dp||this.Aii)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&
this.YI)this.O.Ac.QF(this.O);if(this.Dp&&this.Air)this.O.Ac.A_(this.O);if(!this.
Dp&&(this.Ac.AY===this.O))this.Ac.A_(null);if(this.Dp&&!this.O.E$()){this.O.DL(this.
ER.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||!this.O.E$())||!this.O.GM)){this.
MI=true;this.Mh();return;}if(!this.Dp&&(this.ER.Cv===this.ER.BZ))this.O.DL(this.
ER.Cv);if(this.O.GM===this.ER.BZ){this.MI=true;this.Mh();return;}if(this.ER.Cv===
this.ER.BZ){this.MI=true;this.Mh();return;}if(!this.ER.Mp)this.ER.IF(1);this.ER.
Q=[B=this.O,B.AuD,B.AXa];this.ER.Ad0(false);this.ER.AjU=false;this.ER.R4=[this,this.
AhM];this.ER.Agm=null;this.ER.Ap(true);},AhM:function(H){this.MI=true;this.Mh();
},_Init:function(aArg){C.Mj._Init.call(this,aArg);C.F_._Init.call(this.ER={I:this
},0);this.__proto__=C.Avt;},_Done:function(){this.__proto__=C.Mj;this.ER._Done();
C.Mj._Done.call(this);},_ReInit:function(){C.Mj._ReInit.call(this);this.ER._ReInit(
);},_Mark:function(D){var B;C.Mj._Mark.call(this,D);if((B=this.ER)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Ad5={Ch:null,D7:null,AcZ:false
,MI:false,AoN:false,Aud:function(){return this.MI;},Yp:function(){if(this.Dp){this.
O.DL(this.Ch.BZ);this.O.G(A.aaM(this.O.M,this.D7.BZ));}if(!this.Dp&&!this.O.GM)this.
O.X(false);if((!this.Dp&&this.QD)&&!!this.O.Ac)this.O.Ac.HD(this.O);if(this.AcZ)
this.O.Ap9(this.AoN);if(!this.Bv)this.O.Ap(false);},R_:function(){var B;if(this.
Abu){if(this.O.E$()&&!!this.O.Ac)this.Ch.Cv=this.O.GM;else this.Ch.Cv=0;this.D7.
Cv=this.O.M.slice(0,2);}var Ax4=((!this.O.Ac||!this.O.GM)||!this.O.E$())||(((B=A.
kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Ax5=((!this.Dp&&((!this.O.Ac||!this.O.E$())||this.QD))||!this.Ch.BZ)||(((B=A.kz(
A.aam([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D7.BZ),[0,0,(B=this.Ac.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ax4&&Ax5){this.Ch.Cv=0;this.Ch.BZ=0;this.
D7.Cv=this.D7.BZ;}this.AoN=this.O.APV();if(this.Bv)this.O.Ap(true);if((this.Dp||
this.Aii)&&!this.O.Ac){this.O.X(false);this.Ac.J(this.O,0);}if(this.Dp&&this.YI)
this.O.Ac.QF(this.O);if(this.Dp&&this.Air)this.O.Ac.A_(this.O);if(!this.Dp&&(this.
Ac.AY===this.O))this.Ac.A_(null);if(this.Dp&&!this.O.E$()){this.O.G(A.aaM(this.O.
M,this.D7.Cv));this.O.DL(this.Ch.Cv);this.O.X(true);}if(!this.Dp&&((!this.O.Ac||
!this.O.E$())||!this.O.GM)){this.MI=true;this.Mh();return;}if(!this.Dp&&A.z8(this.
D7.Cv,this.D7.BZ))this.O.G(A.aaM(this.O.M,this.D7.Cv));if(!this.Dp&&(this.Ch.Cv===
this.Ch.BZ))this.O.DL(this.Ch.Cv);if((this.O.GM===this.Ch.BZ)&&A.z8(this.O.M.slice(
0,2),this.D7.BZ)){this.MI=true;this.Mh();return;}if((this.Ch.Cv===this.Ch.BZ)&&A.
z8(this.D7.Cv,this.D7.BZ)){this.MI=true;this.Mh();return;}if(!this.Ch.Mp)this.Ch.
IF(1);if(!this.D7.Mp)this.D7.IF(1);if(this.AcZ)this.O.Ap9(true);this.D7.Q=null;this.
D7.Ad0(false);this.D7.AjU=false;this.D7.R4=[this,this.AhM];this.D7.Agm=[this,this.
Ayx];this.Ch.Q=[B=this.O,B.AuD,B.AXa];this.Ch.Ad0(false);this.Ch.AjU=false;this.
Ch.R4=[this,this.AhM];this.Ch.Agm=null;this.D7.Ap(!A.z8(this.D7.Cv,this.D7.BZ));
this.Ch.Ap(this.Ch.Cv!==this.Ch.BZ);},AhM:function(H){this.MI=!this.Ch.Bv&&!this.
D7.Bv;this.Mh();},Ayx:function(H){this.O.G(A.aaM(this.O.M,this.D7.A3));},_Init:function(
aArg){C.Mj._Init.call(this,aArg);C.F_._Init.call(this.Ch={I:this},0);C.AD3._Init.
call(this.D7={I:this},0);this.__proto__=C.Ad5;},_Done:function(){this.__proto__=
C.Mj;this.Ch._Done();this.D7._Done();C.Mj._Done.call(this);},_ReInit:function(){
C.Mj._ReInit.call(this);this.Ch._ReInit();this.D7._ReInit();},_Mark:function(D){
var B;C.Mj._Mark.call(this,D);if((B=this.Ch)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Are={AcC:null,Ch:null,GQ:null,Vv:null,FE:null,TH:A.vw,AjG:A.vw,MI:false,AoN:false
,Aud:function(){return this.MI;},Yp:function(){if(this.Dp){this.O.DL(this.Ch.BZ);
this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.TH));this.O.X(true);}if(!this.
Dp&&!this.Ch.BZ){this.O.DL(0);this.O.X(false);}if(((!this.Dp&&(this.Ch.BZ>0))&&!
!this.O.Ac)&&!this.QD){this.O.DL(this.Ch.BZ);this.O.G(A.aam(A.aal(this.O.M,A.zT(
this.O.M)),this.TH));this.O.X(true);}if((!this.Dp&&this.QD)&&!!this.O.Ac)this.O.
Ac.HD(this.O);this.O.Ap9(this.AoN);if(!!this.AcC)this.Ac.HD(this.AcC);if(!this.Bv
)this.O.Ap(false);},R_:function(){var B;if(this.Abu){if(this.O.E$()&&!!this.O.Ac
)this.Ch.Cv=this.O.GM;else this.Ch.Cv=0;this.AjG=A.zT(this.O.M);}var Ax4=((!this.
O.Ac||!this.O.GM)||!this.O.E$())||(((B=A.kz(this.O.M,[0,0,(B=this.Ac.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ax5=((!this.Dp&&((!this.O.Ac||!this.O.
E$())||this.QD))||!this.Ch.BZ)||(((B=A.kz(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.
TH),[0,0,(B=this.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Ax4&&Ax5
){this.Ch.Cv=0;this.Ch.BZ=0;this.AjG=this.TH;this.Vv.A4e();}this.AoN=this.O.APV(
);if(this.Bv)this.O.Ap(true);if((this.Dp||this.Aii)&&!this.O.Ac){this.O.X(false);
this.Ac.J(this.O,0);}if(this.Dp&&this.YI)this.O.Ac.QF(this.O);if(this.Dp&&this.Air
)this.O.Ac.A_(this.O);if(!this.Dp&&(this.Ac.AY===this.O))this.Ac.A_(null);if(this.
Dp&&!this.O.E$())this.O.DL(this.Ch.Cv);if((!this.Dp&&A.z8(this.AjG,this.TH))&&this.
Vv.ABR())this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.AjG));if(!this.Dp&&(
this.Ch.Cv===this.Ch.BZ))this.O.DL(this.Ch.Cv);if(!this.Dp&&((!this.O.Ac||!this.
O.E$())||!this.O.GM)){this.MI=true;this.Mh();return;}if(((this.Dp&&(this.O.GM===
this.Ch.BZ))&&A.z8(A.zT(this.O.M),this.TH))&&this.O.E$()){this.MI=true;this.Mh();
return;}if(((!this.Dp&&(this.O.GM===this.Ch.BZ))&&A.z8(A.zT(this.O.M),this.TH))&&
this.Vv.ABR()){this.MI=true;this.Mh();return;}if(((this.Ch.Cv===this.Ch.BZ)&&A.z8(
this.AjG,this.TH))&&this.Vv.ABR()){this.MI=true;this.Mh();return;}this.O.Ap9(true
);this.O.X(false);this.AcC=A._NewObject(A.abh.ASR,0);this.AcC.BiN(this.O);this.AcC.
DL(this.Ch.Cv);this.AcC.BjC(A.zT([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.O.Ac.
AJP(this.AcC,this.O);if(!this.Ch.Mp)this.Ch.IF(1);if(!this.GQ.Mp)this.GQ.IF(1);this.
GQ.Ad0(false);this.GQ.AjU=false;this.GQ.R4=[this,this.AhM];this.GQ.Agm=[this,this.
Ayx];if(this.Dp){this.GQ.Cv=0;this.GQ.BZ=1;}else{this.GQ.Cv=1;this.GQ.BZ=0;}this.
Ch.Q=[B=this.AcC,B.AuD,B.DL];this.Ch.Ad0(false);this.Ch.AjU=false;this.Ch.R4=[this
,this.AhM];this.Ch.Agm=null;this.GQ.Ap(!A.z8(this.AjG,this.TH)||!this.Vv.ABR());
this.Ch.Ap(this.Ch.Cv!==this.Ch.BZ);},AhM:function(H){this.MI=!this.Ch.Bv&&!this.
GQ.Bv;this.Mh();},Ayx:function(H){var B;var Azm=A.aaj(this.TH,this.AjG);if(!this.
Dp)Azm=[-Azm[0],-Azm[1]];this.FE.A4e();this.FE.AfW=this.Vv.AfW;this.FE.BlQ(Azm[0
],Azm[1],0);this.FE.Bfm(this.Vv,this.FE,this.GQ.A3);if(this.Dp)this.AcC.AE4(this.
AjG,this.FE);else this.AcC.AE4(this.TH,this.FE);},_Init:function(aArg){C.Mj._Init.
call(this,aArg);C.F_._Init.call(this.Ch={I:this},0);C.MX._Init.call(this.GQ={I:this
},0);A.Graphics.Av7._Init.call(this.Vv={I:this},0);A.Graphics.Av7._Init.call(this.
FE={I:this},0);this.__proto__=C.Are;},_Done:function(){this.__proto__=C.Mj;this.
Ch._Done();this.GQ._Done();this.Vv._Done();this.FE._Done();C.Mj._Done.call(this);
},_ReInit:function(){C.Mj._ReInit.call(this);this.Ch._ReInit();this.GQ._ReInit();
this.Vv._ReInit();this.FE._ReInit();},_Mark:function(D){var B;C.Mj._Mark.call(this
,D);if((B=this.AcC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ch)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vv).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.FE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Effects::WarpFader"};C.QO={RE:function(){return null;},RD:function(){return null;
},Ac6:function(){return this.RE();},Ac5:function(){return this.RD();},_Init:function(
aArg){this.__proto__=C.QO;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.AR8={RE:function(){var Al=A._NewObject(C.Ard,0);Al.Dp=true;Al.Bv=true;Al.Air=false;
Al.YI=true;Al.Abu=false;Al.Ajn=[this,this.Aol];return Al;},RD:function(){var Al=
A._NewObject(C.Ard,0);Al.Dp=false;Al.Bv=false;Al.QD=true;return Al;},Ac6:function(
){var Al=C.QO.Ac6.call(this);Al.YI=false;Al.Bv=true;return Al;},Ac5:function(){var
Al=A._NewObject(C.Ard,0);Al.Dp=false;Al.Bv=true;Al.Aii=true;Al.QD=false;return Al;
},Aol:function(H){var B;var Al=(C.Ard.isPrototypeOf(H)?H:null);var A7=[0,0,(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];var CY=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A7.slice(
0,2);pos=[(A7[0]+(((A7[2]-A7[0])/2)|0))-((CY[0]/2)|0),pos[1]];pos=[pos[0],(A7[1]+(((
A7[3]-A7[1])/2)|0))-((CY[1]/2)|0)];Al.AqC=pos;},_Init:function(aArg){C.QO._Init.
call(this,aArg);this.__proto__=C.AR8;},_className:"Effects::ShowHideTransition"};
C.Adc={AAC:500,RE:function(){var Al=A._NewObject(C.Ad5,0);Al.Dp=true;Al.Bv=true;
Al.Air=false;Al.YI=true;Al.Abu=true;Al.AcZ=false;Al.Ajn=[this,this.Aol];Al.Ch.Fz(
this.AAC);Al.Ch.Cv=0;Al.Ch.BZ=255;Al.D7.Fz(this.AAC);Al.D7.VJ(23);return Al;},RD:
function(){var Al=A._NewObject(C.Avt,0);Al.Dp=false;Al.Bv=false;Al.QD=true;Al.Abu=
true;Al.ER.Cv=255;Al.ER.BZ=0;Al.ER.Fz(this.AAC);return Al;},Ac6:function(){var Al=
C.QO.Ac6.call(this);Al.YI=false;Al.Bv=true;return Al;},Ac5:function(){var Al=C.QO.
Ac5.call(this);Al.Aii=true;Al.QD=false;Al.Bv=true;return Al;},Aol:function(H){var
B;var Al=(C.Ad5.isPrototypeOf(H)?H:null);var A7=[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[
1]];var CY=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A7.slice(0,2);pos=[(A7[0]+(((A7[
2]-A7[0])/2)|0))-((CY[0]/2)|0),pos[1]];pos=[pos[0],(A7[1]+(((A7[3]-A7[1])/2)|0))-((
CY[1]/2)|0)];Al.D7.BZ=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GM)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.
O.M,pos));},_Init:function(aArg){C.QO._Init.call(this,aArg);this.__proto__=C.Adc;
},_className:"Effects::FadeInOutTransition"};C.AEA={J6:0x12,Ato:0,AcZ:false,RE:function(
){var Al=A._NewObject(C.Ad5,0);Al.Dp=true;Al.Bv=true;Al.Air=false;Al.YI=true;Al.
Abu=true;Al.AcZ=this.AcZ;Al.Ajn=[this,this.Aol];Al.Ch.Fz(500);Al.Ch.Ajv(0);Al.Ch.
Cv=0;Al.Ch.BZ=255;Al.D7.Fz(500);Al.D7.VJ(23);Al.D7.ADF(0);Al.D7.ADG(0);Al.D7.AuY(
3);Al.D7.ACJ(0.5);Al.D7.ADq(3);Al.D7.ACO(3);Al.D7.ACY(0.5);return Al;},RD:function(
){var Al=A._NewObject(C.Ad5,0);Al.Dp=false;Al.Bv=false;Al.QD=true;Al.Abu=true;Al.
AcZ=this.AcZ;Al.Ajn=[this,this.AZ9];Al.Ch.Cv=255;Al.Ch.BZ=0;Al.Ch.Fz(500);Al.Ch.
Ajv(0);Al.D7.Fz(500);Al.D7.VJ(23);Al.D7.ADF(0);Al.D7.ADG(0);Al.D7.AuY(3);Al.D7.ACJ(
0.5);Al.D7.ADq(3);Al.D7.ACO(3);Al.D7.ACY(0.5);return Al;},Ac6:function(){var Al=
C.QO.Ac6.call(this);Al.YI=false;Al.Bv=true;return Al;},Ac5:function(){var Al=C.QO.
Ac5.call(this);Al.Aii=true;Al.QD=false;Al.Bv=true;return Al;},Aol:function(H){var
B;var Al=(C.Ad5.isPrototypeOf(H)?H:null);var Br=this.J6;var A7=[0,0,(B=Al.Ac.M)[
2]-B[0],B[3]-B[1]];var CY=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A7.slice(0,2);if(((
Br&0x4)===0x4))pos=[A7[2]-CY[0],pos[1]];else if(((Br&0x2)===0x2))pos=[(A7[0]+(((
A7[2]-A7[0])/2)|0))-((CY[0]/2)|0),pos[1]];if(((Br&0x20)===0x20))pos=[pos[0],A7[3
]-CY[1]];else if(((Br&0x10)===0x10))pos=[pos[0],(A7[1]+(((A7[3]-A7[1])/2)|0))-((
CY[1]/2)|0)];Al.D7.BZ=pos;if(((!Al.O.Ac||!Al.O.E$())||!Al.O.GM)||(((B=A.kz(Al.O.
M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hn=[(B=Al.
Ac.M)[2]-B[0],B[3]-B[1]];switch(this.Ato){case 5:pos=[pos[0],-CY[1]];break;case 3:{
pos=[pos[0],-CY[1]];pos=[Hn[0],pos[1]];}break;case 8:pos=[-CY[0],-CY[1]];break;case
2:pos=[Hn[0],pos[1]];break;case 7:pos=[-CY[0],pos[1]];break;case 4:pos=[pos[0],Hn[
1]];break;case 1:{pos=[pos[0],Hn[1]];pos=[Hn[0],pos[1]];}break;case 6:{pos=[pos[
0],Hn[1]];pos=[-CY[0],pos[1]];}break;default:;}Al.O.G(A.aaM(Al.O.M,pos));}},AZ9:
function(H){var B;var Al=(C.Ad5.isPrototypeOf(H)?H:null);var pos=Al.O.M.slice(0,
2);var CY=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var Hn=[(B=Al.Ac.M)[2]-B[0],B[3]-B[1]];
switch(this.Ato){case 5:pos=[pos[0],Hn[1]];break;case 3:{pos=[pos[0],Hn[1]];pos=[-
CY[0],pos[1]];}break;case 8:{pos=[pos[0],Hn[1]];pos=[Hn[0],pos[1]];}break;case 2:
pos=[-CY[0],pos[1]];break;case 7:pos=[Hn[0],pos[1]];break;case 4:pos=[pos[0],-CY[
1]];break;case 1:pos=[-CY[0],-CY[1]];break;case 6:{pos=[pos[0],-CY[1]];pos=[Hn[0
],pos[1]];}break;default:;}Al.D7.BZ=pos;},_Init:function(aArg){C.QO._Init.call(this
,aArg);this.__proto__=C.AEA;},_className:"Effects::SlideTransition"};C.AgL={RE:function(
){var Al=A._NewObject(C.Are,0);Al.Dp=true;Al.Bv=true;Al.Air=false;Al.YI=true;Al.
Abu=true;Al.Ajn=[this,this.Aol];Al.Ch.Fz(500);Al.Ch.Ajv(0);Al.Ch.Cv=0;Al.Ch.BZ=255;
Al.GQ.Fz(500);Al.GQ.VJ(23);Al.GQ.ADF(0);Al.GQ.ADG(0);Al.GQ.AuY(3);Al.GQ.ACJ(0.5);
Al.GQ.ADq(3);Al.GQ.ACO(3);Al.GQ.ACY(0.5);Al.Vv.Aec(0.5,0.5,1);return Al;},RD:function(
){var Al=A._NewObject(C.Are,0);Al.Dp=false;Al.Bv=false;Al.QD=true;Al.Abu=true;Al.
Ajn=[this,this.AZ9];Al.Ch.Cv=255;Al.Ch.BZ=0;Al.Ch.Fz(500);Al.Ch.Ajv(0);Al.GQ.Fz(
500);Al.GQ.VJ(23);Al.GQ.ADF(0);Al.GQ.ADG(0);Al.GQ.AuY(3);Al.GQ.ACJ(0.5);Al.GQ.ADq(
3);Al.GQ.ACO(3);Al.GQ.ACY(0.5);Al.Vv.Aec(0.5,0.5,1);return Al;},Ac6:function(){var
Al=C.QO.Ac6.call(this);Al.YI=false;Al.Bv=true;return Al;},Ac5:function(){var Al=
C.QO.Ac5.call(this);Al.Aii=true;Al.QD=false;Al.Bv=true;return Al;},Aol:function(
H){var B;var Al=(C.Are.isPrototypeOf(H)?H:null);var A7=[0,0,(B=Al.Ac.M)[2]-B[0],
B[3]-B[1]];var CY=[(B=Al.O.M)[2]-B[0],B[3]-B[1]];var pos=A7.slice(0,2);pos=[(A7[
0]+(((A7[2]-A7[0])/2)|0))-((CY[0]/2)|0),pos[1]];pos=[pos[0],(A7[1]+(((A7[3]-A7[1
])/2)|0))-((CY[1]/2)|0)];Al.TH=A.aak(pos,[(CY[0]/2)|0,(CY[1]/2)|0]);if(((!Al.O.Ac||
!Al.O.E$())||!Al.O.GM)||(((B=A.kz(Al.O.M,[0,0,(B=Al.Ac.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Al.O.G(A.aaM(Al.O.M,A.aaj(Al.TH,A.zT([0,0,(B=Al.O.M)[2]-
B[0],B[3]-B[1]]))));},AZ9:function(H){var Al=(C.Are.isPrototypeOf(H)?H:null);Al.
TH=A.zT(Al.O.M);},_Init:function(aArg){C.QO._Init.call(this,aArg);this.__proto__=
C.AgL;},_className:"Effects::ScaleTransition"};C.AgV={BzN:0,BAr:1,BAt:2,BAs:3,Bzd:
4,Bzf:5,Bze:6,BAW:7,BAY:8,BAX:9,ByM:10,ByO:11,ByN:12,Bys:13,Byu:14,Byt:15,By6:16
,By8:17,By7:18,ByD:19,ByF:20,ByE:21,By5:22,Bzh:23,By4:24,Bzi:25,ByT:26};C.ByZ={A1F:
0x1,A1E:0x2,A1G:0x4,A1J:0x8,A1I:0x10,A1H:0x20};C.ALD={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ALD;},_className:"Effects::EffectTimerClass"};C.
AfS={_Init:function(){C.ALD._Init.call(this,0);this.Qz(15);this.Ap(true);},_variants:
function(){return this;},_this:null};C.AEP={O2:A.aan(12,0,null),Akk:A.aan(12,0,null
),_Init:function(aArg){(this.O2=[]).__proto__=C.AEP.O2;(this.Akk=[]).__proto__=C.
AEP.Akk;this.__proto__=C.AEP;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};
C.AAK={B2:null,B6:null,A4M:function(ArS){var Al=this.B6;while(!!Al){Al.Yp();Al.O.
U=Al.O.U&~0x40000;Al=Al.Af;}Al=this.B6;while(!!Al){A.ow(Al.AZX,Al);Al=Al.Af;}},A4L:
function(ArS){var Al=this.B6;while(!!Al){A.ow(Al.AIq,Al);Al=Al.Af;}this.B6=null;
this.B2=null;},R_:function(ArS){var B;if(!this.B6)this.Mh();var Al=this.B6;while(
!!Al){Al.O.U=(Al.O.U|0x40000)&~0x20000;Al.O.Aos=null;Al=Al.Af;}Al=this.B6;while(
!!Al){(B=Al.Ajn)?B[1].call(B[0],Al):null;Al.R_();Al=Al.Af;}},Mh:function(){var Al=
this.B6;while(!!Al&&Al.Aud())Al=Al.Af;if(!Al)A.Core.AjV.Mh.call(this);},Bkq:function(
FC){if(!FC)return;if(this.AOG())throw new Error(BG);if(FC.O3!==this)throw new Error(
EV);if(!!FC.Af)FC.Af.AG=FC.AG;else this.B2=FC.AG;if(!!FC.AG)FC.AG.Af=FC.Af;else this.
B6=FC.Af;FC.O3=null;FC.Af=null;FC.AG=null;if(!!FC.O)FC.O.Aos=null;A.ow(FC.AIq,FC
);if(!this.B6)this.Ac0();},A1z:function(FC){if(!FC)return;if(this.AOG())throw new
Error(GS);if(!!FC.O3)throw new Error(Js);FC.AG=this.B2;FC.Af=null;if(!!this.B2)this.
B2.Af=FC;else this.B6=FC;this.B2=FC;FC.O3=this;},_Init:function(aArg){A.Core.AjV.
_Init.call(this,aArg);this.__proto__=C.AAK;},_Mark:function(D){var B;A.Core.AjV.
_Mark.call(this,D);if((B=this.B2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::FaderTask"};C.AvK={
_Init:function(){C.AR8._Init.call(this,0);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.F_.__proto__=C.ER;C.AD3.__proto__=C.ER;C.AK2.__proto__=C.ER;
C.MX.__proto__=C.ER;C.Ard.__proto__=C.Mj;C.Avt.__proto__=C.Mj;C.Ad5.__proto__=C.
Mj;C.Are.__proto__=C.Mj;C.AR8.__proto__=C.QO;C.Adc.__proto__=C.QO;C.AEA.__proto__=
C.QO;C.AgL.__proto__=C.QO;C.ALD.__proto__=A.Core.Timer;C.AAK.__proto__=A.Core.AjV;
};C._ReInit=function(){var B;if((B=C.AfS._this))B._ReInit();if((B=C.AvK._this))B.
_ReInit();};C.DB=function(D){var B;if((B=C.AfS._this)&&(B._cycle!=D))B._Done(C.AfS.
_this=null);if((B=C.AvK._this)&&(B._cycle!=D))B._Done(C.AvK._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */