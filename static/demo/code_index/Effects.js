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
);if(index.acl)throw new Error("The unit file 'Effects.js' included twice!");index.
acl=(function(){var A=index;var C={};
var Ca=[100,100];var BC="Trying to remove a fader from a task, which is actually running";
var EW="The fader doesn\'t belong to this task";var Hh="Trying to add a fader to a task, which is actually running";
var I8="The fader belongs already to a task";
C.ER={MU:null,timer:null,Qh:null,Sl:null,AgZ:null,S6:0,AiR:0,UQ:0,O3:0,Aze:0.001,
Qd:0,D6:0,Dq:0,ANp:0.5,A4H:3,AwG:3,At7:0.5,Vv:3,AUt:0,AUs:0,JG:0,Pk:1000,Pt:0,VF:
0,Ahs:0,Bv:false,Akz:false,ATF:false,ApJ:false,AKM:false,L9:function(G){var B;if(
!this.timer)return;if(!this.AiR){if(this.ATF)this.AiR=-1;else this.AiR=1;this.S6=
this.AiR;this.Dq=this.timer.Bt;this.D6=0;this.Qd=-1;}var Kw;if((this.AiR>0)&&(this.
S6>0))Kw=this.Bz5();else if((this.AiR<0)&&(this.S6<0))Kw=this.Bz8();else if(this.
AiR>0)Kw=this.Bz6();else Kw=this.Bz7();if(Kw){this.Ar(false);(B=this.Qh)?B[1].call(
B[0],this):null;(B=this.Sl)?B[1].call(B[0],this):null;}},AKi:function(AL){var B;
if(!this.MU&&(((this.Ahs===19)||(this.Ahs===20))||(this.Ahs===21))){var AIU=this.
A4H+1;var Bxx=Math.sqrt(this.ANp);var Rv=0.5;var P;this.MU=A._NewObject(C.AGg,0);
this.MU.Pa.Set(0,1);this.MU.Ak0.Set(0,1);for(P=1;P<AIU;P=P+1){this.MU.Pa.Set(P,this.
MU.Pa.Get(P-1)*Bxx);this.MU.Ak0.Set(P,this.MU.Ak0.Get(P-1)*this.ANp);Rv=Rv+this.
MU.Pa.Get(P);}var Byk=1/Rv;this.MU.Pa.Set(0,0.5);Rv=0;for(P=0;P<AIU;P=P+1){this.
MU.Pa.Set(P,this.MU.Pa.Get(P)*Byk);Rv=Rv+this.MU.Pa.Get(P);}this.MU.Pa.Set(AIU,this.
MU.Pa.Get(AIU)+(1-Rv));}if(this.Akz){if(AL<0.5)AL=AL*2;else AL=2-(AL*2);}switch(
this.Ahs){case 1:AL=Math.pow(AL,this.Vv);break;case 2:{AL=1-AL;AL=1-Math.pow(AL,
this.Vv);}break;case 3:{AL=AL*2;if(AL<1)AL=Math.pow(AL,this.Vv)/2;else{AL=2-AL;AL=(
2-Math.pow(AL,this.Vv))*0.5;}}break;case 4:AL=(Math.pow(2.718,this.Vv*AL)-1)/(Math.
pow(2.718,this.Vv)-1);break;case 5:{AL=1-AL;AL=1-((Math.pow(2.718,this.Vv*AL)-1)
/(Math.pow(2.718,this.Vv)-1));}break;case 6:{AL=AL*2;if(AL<1)AL=((Math.pow(2.718
,this.Vv*AL)-1)/(Math.pow(2.718,this.Vv)-1))/2;else{AL=2-AL;AL=(2-((Math.pow(2.718
,this.Vv*AL)-1)/(Math.pow(2.718,this.Vv)-1)))*0.5;}}break;case 7:AL=1-Math.cos((
AL*90)*A.k$);break;case 8:AL=Math.sin((AL*90)*A.k$);break;case 9:{AL=AL*2;if(AL<
1){AL=1-Math.cos((AL*90)*A.k$);AL=AL*0.5;}else{AL=2-AL;AL=1-Math.cos((AL*90)*A.k$
);AL=(2-AL)*0.5;}}break;case 10:AL=1-Math.sqrt(1-(AL*AL));break;case 11:{AL=1-AL;
AL=Math.sqrt(1-(AL*AL));}break;case 12:{AL=AL*2;if(AL<1){AL=1-Math.sqrt(1-(AL*AL
));AL=AL*0.5;}else{AL=2-AL;AL=1-Math.sqrt(1-(AL*AL));AL=(2-AL)*0.5;}}break;case 13:
AL=((AL*AL)*AL)-((AL*this.At7)*Math.sin((AL*180)*A.k$));break;case 14:{AL=1-AL;AL=((
AL*AL)*AL)-((AL*this.At7)*Math.sin((AL*180)*A.k$));AL=1-AL;}break;case 15:{AL=AL
*2;if(AL<1){AL=((AL*AL)*AL)-((AL*this.At7)*Math.sin((AL*180)*A.k$));AL=AL*0.5;}else{
AL=2-AL;AL=((AL*AL)*AL)-((AL*this.At7)*Math.sin((AL*180)*A.k$));AL=(2-AL)*0.5;}}
break;case 16:AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwG)))*A.k$);break;case
17:{AL=1-AL;AL=1-(((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwG)))*A.k$));}break;
case 18:{AL=AL*2;if(AL<1){AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwG)))*A.
k$);AL=AL*0.5;}else{AL=2-AL;AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwG)))*
A.k$);AL=(2-AL)*0.5;}}break;case 19:{var Bz=this.MU;var P=0;var Gv=0;var K1=Bz.Pa.
Get(0);var D1=1-AL;while(D1>K1){P=P+1;Gv=K1;K1=K1+Bz.Pa.Get(P);}AL=(D1-Gv)/(K1-Gv
);if(!P)AL=1-(AL*AL);else{AL=(2*AL)-1;AL=Bz.Ak0.Get(P)*(1-(AL*AL));}}break;case 20:{
var Bz=this.MU;var P=0;var Gv=0;var K1=Bz.Pa.Get(0);while(AL>K1){P=P+1;Gv=K1;K1=
K1+Bz.Pa.Get(P);}AL=(AL-Gv)/(K1-Gv);if(!P)AL=AL*AL;else{AL=(2*AL)-1;AL=1-(Bz.Ak0.
Get(P)*(1-(AL*AL)));}}break;case 21:{var Bz=this.MU;var P=0;var Gv=0;var K1=Bz.Pa.
Get(0);var LD=AL*2;var D1=LD-1;if(LD<1)D1=-D1;while(D1>K1){P=P+1;Gv=K1;K1=K1+Bz.
Pa.Get(P);}D1=(D1-Gv)/(K1-Gv);if(!P)D1=D1*D1;else{D1=(2*D1)-1;D1=1-(Bz.Ak0.Get(P
)*(1-(D1*D1)));}if(LD<1)AL=0.5*(1-D1);else AL=0.5*(1+D1);}break;default:if(this.
ApJ){var LD=AL;var AzE=1-LD;AL=((AzE*LD)*(this.O3+1))+(LD*LD);}else if(this.AKM){
var LD=AL;var AzE=1-LD;var Bb4=LD*LD;var ByA=AzE*AzE;AL=(((ByA*LD)*(this.O3+1))+((
AzE*Bb4)*(this.UQ+2)))+(Bb4*LD);}}this.Aua(AL);(B=this.AgZ)?B[1].call(B[0],this):
null;},Bz8:function(){var Au=(this.timer.Bt-this.Dq)|0;if(Au<0)Au=-Au;var Lz=this.
VF;var Om=this.VF+this.Pk;var G7=this.Pt+this.Pk;var Kw=false;var D7=this.Qd;if(
!this.D6&&(Au>=Om)){this.D6=1;Au=Au-Om;this.Dq=this.Dq+Om;}if((this.D6>0)&&(Au>=
G7)){var H_=(Au/G7)|0;this.D6=this.D6+H_;Au=Au-(H_*G7);this.Dq=this.Dq+(H_*G7);}
if((this.D6>2)&&!this.JG)this.D6=1;if(this.D6>0)Lz=this.Pt;if((this.D6>=this.JG)&&(
this.JG>0)){Kw=true;D7=0;}else if(Au>=Lz)D7=1-((Au-Lz)*this.Aze);else if(D7>=0)D7=
0;if(D7!==this.Qd){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.Qd){this.Qd=D7;this.AKi(
D7);}return Kw;},Bz7:function(){var Au=(this.Dq-this.timer.Bt)|0;var Lz=this.VF;
var Om=this.VF+this.Pk;var G7=this.Pt+this.Pk;var Kw=false;var D7=this.Qd;if((this.
D6>1)&&(Au<0)){var H_=(((-Au+G7)-1)/G7)|0;if((this.D6-H_)<=0)H_=this.D6-1;this.D6=
this.D6-H_;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7);}if(((this.D6===1)&&(Au<0))&&(this.
JG>0)){this.D6=0;Au=Au+Om;this.Dq=this.Dq+Om;}if(((this.D6===1)&&(Au<0))&&!this.
JG){var H_=(((-Au+G7)-1)/G7)|0;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7);}if(this.D6>
0)Lz=this.Pt;if(Au<0){Kw=true;D7=1;}else if(Au>=Lz)D7=1-((Au-Lz)*this.Aze);else if(
D7>=0)D7=1;if(D7!==this.Qd){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.Qd){this.Qd=
D7;this.AKi(D7);}return Kw;},Bz6:function(){var Au=(this.Dq-this.timer.Bt)|0;var
Lz=this.VF;var Om=this.VF+this.Pk;var G7=this.Pt+this.Pk;var Kw=false;var D7=this.
Qd;if((this.D6>1)&&(Au<0)){var H_=(((-Au+G7)-1)/G7)|0;if((this.D6-H_)<=0)H_=this.
D6-1;this.D6=this.D6-H_;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7);}if(((this.D6===1)&&(
Au<0))&&(this.JG>0)){this.D6=0;Au=Au+Om;this.Dq=this.Dq+Om;}if(((this.D6===1)&&(
Au<0))&&!this.JG){var H_=(((-Au+G7)-1)/G7)|0;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7
);}if(this.D6>0)Lz=this.Pt;if(Au<0){Kw=true;D7=0;}else if(Au>=Lz)D7=(Au-Lz)*this.
Aze;else if(D7>=0)D7=0;if(D7!==this.Qd){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.
Qd){this.Qd=D7;this.AKi(D7);}return Kw;},Bz5:function(){var Au=(this.timer.Bt-this.
Dq)|0;if(Au<0)Au=-Au;var Lz=this.VF;var Om=this.VF+this.Pk;var G7=this.Pt+this.Pk;
var Kw=false;var D7=this.Qd;if(!this.D6&&(Au>=Om)){this.D6=1;Au=Au-Om;this.Dq=this.
Dq+Om;}if((this.D6>0)&&(Au>=G7)){var H_=(Au/G7)|0;this.D6=this.D6+H_;Au=Au-(H_*G7
);this.Dq=this.Dq+(H_*G7);}if((this.D6>2)&&!this.JG)this.D6=1;if(this.D6>0)Lz=this.
Pt;if((this.D6>=this.JG)&&(this.JG>0)){Kw=true;D7=1;}else if(Au>=Lz)D7=(Au-Lz)*this.
Aze;else if(D7>=0)D7=1;if(D7!==this.Qd){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.
Qd){this.Qd=D7;this.AKi(D7);}return Kw;},AeK:function(E){if(this.ATF===E)return;
this.ATF=E;if(!this.Bv||!this.AiR)return;if(E)this.S6=-1;else this.S6=1;this.Dq=(
this.timer.AuR()*2)-this.Dq;},AEo:function(E){if(E<0)E=0;if(E>1)E=1;this.ANp=E;}
,AEd:function(E){if(E<1)E=1;if(E>10)E=10;this.A4H=E;this.MU=null;},AEU:function(
E){if(E<1)E=1;if(E>10)E=10;this.AwG=E;},AD8:function(E){if(E<0)E=0;if(E>10)E=10;
this.At7=E;},Av2:function(E){if(E<1)E=1;if(E>100)E=100;this.Vv=E;},AE_:function(
E){if(this.AUt===E)return;this.AUt=E;if(this.Ahs===26){this.UQ=E;this.ApJ=(this.
O3===this.UQ)&&!!this.O3;this.AKM=!this.ApJ&&(this.O3!==this.UQ);}},AE9:function(
E){if(this.AUs===E)return;this.AUs=E;if(this.Ahs===26){this.O3=E;this.ApJ=(this.
O3===this.UQ)&&!!this.O3;this.AKM=!this.ApJ&&(this.O3!==this.UQ);}},Wi:function(
E){if(this.Ahs===E)return;this.Ahs=E;this.MU=null;switch(E){case 24:{this.O3=-1.1;
this.UQ=1.1;}break;case 22:{this.O3=-1;this.UQ=-2;}break;case 23:{this.O3=2;this.
UQ=1;}break;case 25:{this.O3=1.1;this.UQ=-1.1;}break;case 0:{this.O3=0;this.UQ=0;
}break;default:{this.O3=this.AUs;this.UQ=this.AUt;}}this.ApJ=(this.O3===this.UQ)&&
!!this.O3;this.AKM=!this.ApJ&&(this.O3!==this.UQ);},HG:function(E){if(E<0)E=0;this.
JG=E;},Fe:function(E){if(E<15)E=15;this.Pk=E;this.Aze=1/E;},T9:function(E){if(E<
0)E=0;this.Pt=E;},Akd:function(E){if(E<0)E=0;this.VF=E;},Ar:function(E){if(this.
Bv===E)return;this.Bv=E;if(!E&&!!this.timer){A.z9([this,this.L9],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.AdW);A.zV([this,this.L9],this.timer
,0);this.AiR=0;A.pe([this,this.L9],this);}},Aua:function(Z0){},Anz:function(G){this.
Ar(false);},Anx:function(G){if(this.Bv)this.Ar(false);this.Ar(true);},_Init:function(
aArg){this.__proto__=C.ER;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.MU)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Qh)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sl)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AgZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};C.Ga={Q:null,A7:0,B1:255,Cr:0,Aua:function(Z0){var F;this.A7=
this.Cr+(Math.round((this.B1-this.Cr)*Z0)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0
],this.A7));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.__proto__=C.Ga;
},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AFu={Q:null,A7:A.
wf,B1:Ca,Cr:A.wf,Aua:function(Z0){var F;var Eg=this.Cr[0];var Da=this.Cr[1];Eg=Eg+(
Math.round((this.B1[0]-Eg)*Z0)|0);Da=Da+(Math.round((this.B1[1]-Da)*Z0)|0);this.
A7=[Eg,Da];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A7));},_Init:function(aArg){
C.ER._Init.call(this,aArg);this.__proto__=C.AFu;},_Mark:function(D){var B;C.ER._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::PointEffect"};C.AMI={Q:null,A7:0,B1:0xFFFFFFFF,Cr:0,Aua:function(Z0){var
F;var O_=this.Cr&0xFF;var Aaa=(this.Cr>>8)&0xFF;var Ak6=(this.Cr>>16)&0xFF;var AkZ=(
this.Cr>>24)&0xFF;O_=O_+((((this.B1&0xFF)-O_)*Z0)|0);Aaa=Aaa+(((((this.B1>>8)&0xFF
)-Aaa)*Z0)|0);Ak6=Ak6+(((((this.B1>>16)&0xFF)-Ak6)*Z0)|0);AkZ=AkZ+(((((this.B1>>
24)&0xFF)-AkZ)*Z0)|0);if(O_<0)O_=0;if(O_>255)O_=255;if(Aaa<0)Aaa=0;if(Aaa>255)Aaa=
255;if(Ak6<0)Ak6=0;if(Ak6>255)Ak6=255;if(AkZ<0)AkZ=0;if(AkZ>255)AkZ=255;this.A7=(
O_&0xFF)|((Aaa&0xFF)<<8)|((Ak6&0xFF)<<16)|((AkZ&0xFF)<<24);if(!!this.Q)(F=this.Q
,F[2].call(F[0],this.A7));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.
__proto__=C.AMI;},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::ColorEffect"};C.M3={
A7:0,B1:1,Cr:0,Aua:function(Z0){this.A7=this.Cr+((this.B1-this.Cr)*Z0);},_Init:function(
aArg){C.ER._Init.call(this,aArg);this.__proto__=C.M3;},_className:"Effects::FloatEffect"
};C.Tu={timer:null,Q:null,D6:0,Dq:0,JG:0,Pk:1000,Pt:1000,VF:0,Bv:false,Cr:false,
B1:true,L9:function(G){var F;if(!this.timer)return;if(this.D6<0){this.Dq=this.timer.
Bt;this.D6=0;}var Au=(this.timer.Bt-this.Dq)|0;var Om=this.VF+this.Pk;var G7=this.
Pt+this.Pk;var Lz=this.VF;var Ja=this.D6;if(!Ja&&(Au>=Om)){Ja=1;Au=Au-Om;}if((Ja>
0)&&(Au>=G7)){var H_=(Au/G7)|0;Au=Au-(H_*G7);Ja=Ja+H_;}if((Ja>2)&&!this.JG)Ja=1;
if(Ja!==this.D6){this.Dq=this.timer.Bt-(((B=Au)<0)?B+0x100000000:B);this.D6=Ja;}
if(Ja>0)Lz=this.Pt;var Kw=(Ja>=this.JG)&&(this.JG>0);if(!!this.Q){if(!Kw&&(Au>=Lz
))(F=this.Q,F[2].call(F[0],this.Cr));if(Kw||((Au<Lz)&&(Ja>0)))(F=this.Q,F[2].call(
F[0],this.B1));}if(Kw)this.Ar(false);},HG:function(E){if(E<0)E=0;this.JG=E;},Fe:
function(E){if(E<100)E=100;this.Pk=E;},T9:function(E){if(E<0)E=0;this.Pt=E;},Akd:
function(E){if(E<0)E=0;this.VF=E;},Ar:function(E){if(this.Bv===E)return;this.Bv=
E;if(!E&&!!this.timer){A.z9([this,this.L9],this.timer,0);this.timer=null;}if(E){
this.timer=A._GetAutoObject(C.AdW);A.zV([this,this.L9],this.timer,0);this.D6=-1;
}},Anz:function(G){this.Ar(false);},Anx:function(G){if(this.Bv)this.Ar(false);this.
Ar(true);},_Init:function(aArg){this.__proto__=C.Tu;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.Mh={Pb:null,AH:null,Ag:null
,Ab:null,O:null,AJW:null,A2c:null,Aj6:null,Dn:true,Bv:true,Acm:true,Ai3:false,Ai$:
true,Zg:true,QX:true,Mf:function(){if(!!this.Pb)this.Pb.Mf();},Avg:function(){return true;
},Y2:function(){},Sq:function(){this.Mf();},_Init:function(aArg){this.__proto__=
C.Mh;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.Pb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AJW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A2c)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aj6)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Ase={ArJ:A.wf
,MN:false,Avg:function(){return this.MN;},Y2:function(){if(!this.Dn&&!!this.O.Ab
)this.O.Y(false);if((!this.Dn&&this.QX)&&!!this.O.Ab)this.O.Ab.HI(this.O);if(!this.
Bv)this.O.Ar(false);},Sq:function(){if(this.Bv)this.O.Ar(true);if((this.Dn||this.
Ai3)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dn&&this.Zg)this.
O.Ab.Zf(this.O);if(this.Dn&&this.Ai$)this.O.Ab.A9(this.O);if(this.Dn&&!this.Acm)
this.O.H(A.abJ(this.O.M,this.ArJ));if(this.Dn){this.O.Dl(255);this.O.Y(true);}if(
!this.Dn&&(this.Ab.AR===this.O))this.Ab.A9(null);this.MN=true;this.Mf();},_Init:
function(aArg){C.Mh._Init.call(this,aArg);this.__proto__=C.Ase;},_className:"Effects::VisibilityFader"
};C.AwC={ER:null,MN:false,ApM:false,Avg:function(){return this.MN;},Y2:function(
){if(this.Dn)this.O.Dl(this.ER.B1);if(!this.Dn&&!this.O.GY)this.O.Y(false);if((!
this.Dn&&this.QX)&&!!this.O.Ab)this.O.Ab.HI(this.O);if(!this.Bv)this.O.Ar(false);
},Sq:function(){var B;if(this.Acm){if(this.O.Fd()&&!!this.O.Ab)this.ER.Cr=this.O.
GY;else this.ER.Cr=0;}var Azh=((!this.O.Ab||!this.O.GY)||!this.O.Fd())||(((B=A.lb(
this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Azi=((
!this.Dn&&((!this.O.Ab||!this.O.Fd())||this.QX))||!this.ER.B1)||(((B=A.lb(this.O.
M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azh&&Azi){
this.ER.Cr=0;this.ER.B1=0;}this.ApM=this.O.ARG();if(this.Bv)this.O.Ar(true);if((
this.Dn||this.Ai3)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dn&&
this.Zg)this.O.Ab.Zf(this.O);if(this.Dn&&this.Ai$)this.O.Ab.A9(this.O);if(!this.
Dn&&(this.Ab.AR===this.O))this.Ab.A9(null);if(this.Dn&&!this.O.Fd()){this.O.Dl(this.
ER.Cr);this.O.Y(true);}if(!this.Dn&&((!this.O.Ab||!this.O.Fd())||!this.O.GY)){this.
MN=true;this.Mf();return;}if(!this.Dn&&(this.ER.Cr===this.ER.B1))this.O.Dl(this.
ER.Cr);if(this.O.GY===this.ER.B1){this.MN=true;this.Mf();return;}if(this.ER.Cr===
this.ER.B1){this.MN=true;this.Mf();return;}if(!this.ER.JG)this.ER.HG(1);this.ER.
Q=[B=this.O,B.AvH,B.AZp];this.ER.AeK(false);this.ER.Akz=false;this.ER.Sl=[this,this.
Aiv];this.ER.AgZ=null;this.ER.Ar(true);},Aiv:function(G){this.MN=true;this.Mf();
},_Init:function(aArg){C.Mh._Init.call(this,aArg);C.Ga._Init.call(this.ER={I:this
},0);this.__proto__=C.AwC;},_Done:function(){this.__proto__=C.Mh;this.ER._Done();
C.Mh._Done.call(this);},_ReInit:function(){C.Mh._ReInit.call(this);this.ER._ReInit(
);},_Mark:function(D){var B;C.Mh._Mark.call(this,D);if((B=this.ER)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.AeM={Cj:null,D4:null,AdK:false
,MN:false,ApM:false,Avg:function(){return this.MN;},Y2:function(){if(this.Dn){this.
O.Dl(this.Cj.B1);this.O.H(A.abJ(this.O.M,this.D4.B1));}if(!this.Dn&&!this.O.GY)this.
O.Y(false);if((!this.Dn&&this.QX)&&!!this.O.Ab)this.O.Ab.HI(this.O);if(this.AdK)
this.O.Arc(this.ApM);if(!this.Bv)this.O.Ar(false);},Sq:function(){var B;if(this.
Acm){if(this.O.Fd()&&!!this.O.Ab)this.Cj.Cr=this.O.GY;else this.Cj.Cr=0;this.D4.
Cr=this.O.M.slice(0,2);}var Azh=((!this.O.Ab||!this.O.GY)||!this.O.Fd())||(((B=A.
lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Azi=((!this.Dn&&((!this.O.Ab||!this.O.Fd())||this.QX))||!this.Cj.B1)||(((B=A.lb(
A.abh([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D4.B1),[0,0,(B=this.Ab.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azh&&Azi){this.Cj.Cr=0;this.Cj.B1=0;this.
D4.Cr=this.D4.B1;}this.ApM=this.O.ARG();if(this.Bv)this.O.Ar(true);if((this.Dn||
this.Ai3)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dn&&this.Zg)
this.O.Ab.Zf(this.O);if(this.Dn&&this.Ai$)this.O.Ab.A9(this.O);if(!this.Dn&&(this.
Ab.AR===this.O))this.Ab.A9(null);if(this.Dn&&!this.O.Fd()){this.O.H(A.abJ(this.O.
M,this.D4.Cr));this.O.Dl(this.Cj.Cr);this.O.Y(true);}if(!this.Dn&&((!this.O.Ab||
!this.O.Fd())||!this.O.GY)){this.MN=true;this.Mf();return;}if(!this.Dn&&A.aaX(this.
D4.Cr,this.D4.B1))this.O.H(A.abJ(this.O.M,this.D4.Cr));if(!this.Dn&&(this.Cj.Cr===
this.Cj.B1))this.O.Dl(this.Cj.Cr);if((this.O.GY===this.Cj.B1)&&A.aaX(this.O.M.slice(
0,2),this.D4.B1)){this.MN=true;this.Mf();return;}if((this.Cj.Cr===this.Cj.B1)&&A.
aaX(this.D4.Cr,this.D4.B1)){this.MN=true;this.Mf();return;}if(!this.Cj.JG)this.Cj.
HG(1);if(!this.D4.JG)this.D4.HG(1);if(this.AdK)this.O.Arc(true);this.D4.Q=null;this.
D4.AeK(false);this.D4.Akz=false;this.D4.Sl=[this,this.Aiv];this.D4.AgZ=[this,this.
AzN];this.Cj.Q=[B=this.O,B.AvH,B.AZp];this.Cj.AeK(false);this.Cj.Akz=false;this.
Cj.Sl=[this,this.Aiv];this.Cj.AgZ=null;this.D4.Ar(!A.aaX(this.D4.Cr,this.D4.B1));
this.Cj.Ar(this.Cj.Cr!==this.Cj.B1);},Aiv:function(G){this.MN=!this.Cj.Bv&&!this.
D4.Bv;this.Mf();},AzN:function(G){this.O.H(A.abJ(this.O.M,this.D4.A7));},_Init:function(
aArg){C.Mh._Init.call(this,aArg);C.Ga._Init.call(this.Cj={I:this},0);C.AFu._Init.
call(this.D4={I:this},0);this.__proto__=C.AeM;},_Done:function(){this.__proto__=
C.Mh;this.Cj._Done();this.D4._Done();C.Mh._Done.call(this);},_ReInit:function(){
C.Mh._ReInit.call(this);this.Cj._ReInit();this.D4._ReInit();},_Mark:function(D){
var B;C.Mh._Mark.call(this,D);if((B=this.Cj)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Asf={Adq:null,Cj:null,G0:null,V0:null,FF:null,Ue:A.wf,Akn:A.wf,MN:false,ApM:false
,Avg:function(){return this.MN;},Y2:function(){if(this.Dn){this.O.Dl(this.Cj.B1);
this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Ue));this.O.Y(true);}if(!this.
Dn&&!this.Cj.B1){this.O.Dl(0);this.O.Y(false);}if(((!this.Dn&&(this.Cj.B1>0))&&!
!this.O.Ab)&&!this.QX){this.O.Dl(this.Cj.B1);this.O.H(A.abh(A.abg(this.O.M,A.aaI(
this.O.M)),this.Ue));this.O.Y(true);}if((!this.Dn&&this.QX)&&!!this.O.Ab)this.O.
Ab.HI(this.O);this.O.Arc(this.ApM);if(!!this.Adq)this.Ab.HI(this.Adq);if(!this.Bv
)this.O.Ar(false);},Sq:function(){var B;if(this.Acm){if(this.O.Fd()&&!!this.O.Ab
)this.Cj.Cr=this.O.GY;else this.Cj.Cr=0;this.Akn=A.aaI(this.O.M);}var Azh=((!this.
O.Ab||!this.O.GY)||!this.O.Fd())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Azi=((!this.Dn&&((!this.O.Ab||!this.O.
Fd())||this.QX))||!this.Cj.B1)||(((B=A.lb(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),
this.Ue),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azh&&
Azi){this.Cj.Cr=0;this.Cj.B1=0;this.Akn=this.Ue;this.V0.A6O();}this.ApM=this.O.ARG(
);if(this.Bv)this.O.Ar(true);if((this.Dn||this.Ai3)&&!this.O.Ab){this.O.Y(false);
this.Ab.J(this.O,0);}if(this.Dn&&this.Zg)this.O.Ab.Zf(this.O);if(this.Dn&&this.Ai$
)this.O.Ab.A9(this.O);if(!this.Dn&&(this.Ab.AR===this.O))this.Ab.A9(null);if(this.
Dn&&!this.O.Fd())this.O.Dl(this.Cj.Cr);if((!this.Dn&&A.aaX(this.Akn,this.Ue))&&this.
V0.AC_())this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Akn));if(!this.Dn&&(
this.Cj.Cr===this.Cj.B1))this.O.Dl(this.Cj.Cr);if(!this.Dn&&((!this.O.Ab||!this.
O.Fd())||!this.O.GY)){this.MN=true;this.Mf();return;}if(((this.Dn&&(this.O.GY===
this.Cj.B1))&&A.aaX(A.aaI(this.O.M),this.Ue))&&this.O.Fd()){this.MN=true;this.Mf(
);return;}if(((!this.Dn&&(this.O.GY===this.Cj.B1))&&A.aaX(A.aaI(this.O.M),this.Ue
))&&this.V0.AC_()){this.MN=true;this.Mf();return;}if(((this.Cj.Cr===this.Cj.B1)&&
A.aaX(this.Akn,this.Ue))&&this.V0.AC_()){this.MN=true;this.Mf();return;}this.O.Arc(
true);this.O.Y(false);this.Adq=A._NewObject(A.acg.AUQ,0);this.Adq.Blp(this.O);this.
Adq.Dl(this.Cj.Cr);this.Adq.Bmg(A.aaI([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.
O.Ab.ALs(this.Adq,this.O);if(!this.Cj.JG)this.Cj.HG(1);if(!this.G0.JG)this.G0.HG(
1);this.G0.AeK(false);this.G0.Akz=false;this.G0.Sl=[this,this.Aiv];this.G0.AgZ=[
this,this.AzN];if(this.Dn){this.G0.Cr=0;this.G0.B1=1;}else{this.G0.Cr=1;this.G0.
B1=0;}this.Cj.Q=[B=this.Adq,B.AvH,B.Dl];this.Cj.AeK(false);this.Cj.Akz=false;this.
Cj.Sl=[this,this.Aiv];this.Cj.AgZ=null;this.G0.Ar(!A.aaX(this.Akn,this.Ue)||!this.
V0.AC_());this.Cj.Ar(this.Cj.Cr!==this.Cj.B1);},Aiv:function(G){this.MN=!this.Cj.
Bv&&!this.G0.Bv;this.Mf();},AzN:function(G){var B;var AAC=A.abe(this.Ue,this.Akn
);if(!this.Dn)AAC=[-AAC[0],-AAC[1]];this.FF.A6O();this.FF.Agw=this.V0.Agw;this.FF.
BoB(AAC[0],AAC[1],0);this.FF.Bib(this.V0,this.FF,this.G0.A7);if(this.Dn)this.Adq.
A_3(this.Akn,this.FF);else this.Adq.A_3(this.Ue,this.FF);},_Init:function(aArg){
C.Mh._Init.call(this,aArg);C.Ga._Init.call(this.Cj={I:this},0);C.M3._Init.call(this.
G0={I:this},0);A.Graphics.Axf._Init.call(this.V0={I:this},0);A.Graphics.Axf._Init.
call(this.FF={I:this},0);this.__proto__=C.Asf;},_Done:function(){this.__proto__=
C.Mh;this.Cj._Done();this.G0._Done();this.V0._Done();this.FF._Done();C.Mh._Done.
call(this);},_ReInit:function(){C.Mh._ReInit.call(this);this.Cj._ReInit();this.G0.
_ReInit();this.V0._ReInit();this.FF._ReInit();},_Mark:function(D){var B;C.Mh._Mark.
call(this,D);if((B=this.Adq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
V0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Q6={RY:function(){return null;},RX:function(
){return null;},AdQ:function(){return this.RY();},AdP:function(){return this.RX(
);},_Init:function(aArg){this.__proto__=C.Q6;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AT5={RY:function(){var Ao=A._NewObject(C.Ase,0);Ao.Dn=true;Ao.Bv=true;Ao.Ai$=
false;Ao.Zg=true;Ao.Acm=false;Ao.Aj6=[this,this.Apk];return Ao;},RX:function(){var
Ao=A._NewObject(C.Ase,0);Ao.Dn=false;Ao.Bv=false;Ao.QX=true;return Ao;},AdQ:function(
){var Ao=C.Q6.AdQ.call(this);Ao.Zg=false;Ao.Bv=true;return Ao;},AdP:function(){var
Ao=A._NewObject(C.Ase,0);Ao.Dn=false;Ao.Bv=true;Ao.Ai3=true;Ao.QX=false;return Ao;
},Apk:function(G){var B;var Ao=(C.Ase.isPrototypeOf(G)?G:null);var A$=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var CZ=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A$.slice(
0,2);pos=[(A$[0]+(((A$[2]-A$[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A$[1]+(((
A$[3]-A$[1])/2)|0))-((CZ[1]/2)|0)];Ao.ArJ=pos;},_Init:function(aArg){C.Q6._Init.
call(this,aArg);this.__proto__=C.AT5;},_className:"Effects::ShowHideTransition"};
C.Ad0={ABS:500,RY:function(){var Ao=A._NewObject(C.AeM,0);Ao.Dn=true;Ao.Bv=true;
Ao.Ai$=false;Ao.Zg=true;Ao.Acm=true;Ao.AdK=false;Ao.Aj6=[this,this.Apk];Ao.Cj.Fe(
this.ABS);Ao.Cj.Cr=0;Ao.Cj.B1=255;Ao.D4.Fe(this.ABS);Ao.D4.Wi(23);return Ao;},RX:
function(){var Ao=A._NewObject(C.AwC,0);Ao.Dn=false;Ao.Bv=false;Ao.QX=true;Ao.Acm=
true;Ao.ER.Cr=255;Ao.ER.B1=0;Ao.ER.Fe(this.ABS);return Ao;},AdQ:function(){var Ao=
C.Q6.AdQ.call(this);Ao.Zg=false;Ao.Bv=true;return Ao;},AdP:function(){var Ao=C.Q6.
AdP.call(this);Ao.Ai3=true;Ao.QX=false;Ao.Bv=true;return Ao;},Apk:function(G){var
B;var Ao=(C.AeM.isPrototypeOf(G)?G:null);var A$=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var CZ=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A$.slice(0,2);pos=[(A$[0]+(((A$[
2]-A$[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A$[1]+(((A$[3]-A$[1])/2)|0))-((
CZ[1]/2)|0)];Ao.D4.B1=pos;if(((!Ao.O.Ab||!Ao.O.Fd())||!Ao.O.GY)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.O.H(A.abJ(Ao.
O.M,pos));},_Init:function(aArg){C.Q6._Init.call(this,aArg);this.__proto__=C.Ad0;
},_className:"Effects::FadeInOutTransition"};C.AF5={J6:0x12,Auq:0,AdK:false,RY:function(
){var Ao=A._NewObject(C.AeM,0);Ao.Dn=true;Ao.Bv=true;Ao.Ai$=false;Ao.Zg=true;Ao.
Acm=true;Ao.AdK=this.AdK;Ao.Aj6=[this,this.Apk];Ao.Cj.Fe(500);Ao.Cj.Akd(0);Ao.Cj.
Cr=0;Ao.Cj.B1=255;Ao.D4.Fe(500);Ao.D4.Wi(23);Ao.D4.AE9(0);Ao.D4.AE_(0);Ao.D4.Av2(
3);Ao.D4.AD8(0.5);Ao.D4.AEU(3);Ao.D4.AEd(3);Ao.D4.AEo(0.5);return Ao;},RX:function(
){var Ao=A._NewObject(C.AeM,0);Ao.Dn=false;Ao.Bv=false;Ao.QX=true;Ao.Acm=true;Ao.
AdK=this.AdK;Ao.Aj6=[this,this.A2o];Ao.Cj.Cr=255;Ao.Cj.B1=0;Ao.Cj.Fe(500);Ao.Cj.
Akd(0);Ao.D4.Fe(500);Ao.D4.Wi(23);Ao.D4.AE9(0);Ao.D4.AE_(0);Ao.D4.Av2(3);Ao.D4.AD8(
0.5);Ao.D4.AEU(3);Ao.D4.AEd(3);Ao.D4.AEo(0.5);return Ao;},AdQ:function(){var Ao=
C.Q6.AdQ.call(this);Ao.Zg=false;Ao.Bv=true;return Ao;},AdP:function(){var Ao=C.Q6.
AdP.call(this);Ao.Ai3=true;Ao.QX=false;Ao.Bv=true;return Ao;},Apk:function(G){var
B;var Ao=(C.AeM.isPrototypeOf(G)?G:null);var Bs=this.J6;var A$=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var CZ=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A$.slice(0,2);if(((
Bs&0x4)===0x4))pos=[A$[2]-CZ[0],pos[1]];else if(((Bs&0x2)===0x2))pos=[(A$[0]+(((
A$[2]-A$[0])/2)|0))-((CZ[0]/2)|0),pos[1]];if(((Bs&0x20)===0x20))pos=[pos[0],A$[3
]-CZ[1]];else if(((Bs&0x10)===0x10))pos=[pos[0],(A$[1]+(((A$[3]-A$[1])/2)|0))-((
CZ[1]/2)|0)];Ao.D4.B1=pos;if(((!Ao.O.Ab||!Ao.O.Fd())||!Ao.O.GY)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Ht=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Auq){case 5:pos=[pos[0],-CZ[1]];break;case 3:{
pos=[pos[0],-CZ[1]];pos=[Ht[0],pos[1]];}break;case 8:pos=[-CZ[0],-CZ[1]];break;case
2:pos=[Ht[0],pos[1]];break;case 7:pos=[-CZ[0],pos[1]];break;case 4:pos=[pos[0],Ht[
1]];break;case 1:{pos=[pos[0],Ht[1]];pos=[Ht[0],pos[1]];}break;case 6:{pos=[pos[
0],Ht[1]];pos=[-CZ[0],pos[1]];}break;default:;}Ao.O.H(A.abJ(Ao.O.M,pos));}},A2o:
function(G){var B;var Ao=(C.AeM.isPrototypeOf(G)?G:null);var pos=Ao.O.M.slice(0,
2);var CZ=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var Ht=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Auq){case 5:pos=[pos[0],Ht[1]];break;case 3:{pos=[pos[0],Ht[1]];pos=[-
CZ[0],pos[1]];}break;case 8:{pos=[pos[0],Ht[1]];pos=[Ht[0],pos[1]];}break;case 2:
pos=[-CZ[0],pos[1]];break;case 7:pos=[Ht[0],pos[1]];break;case 4:pos=[pos[0],-CZ[
1]];break;case 1:pos=[-CZ[0],-CZ[1]];break;case 6:{pos=[pos[0],-CZ[1]];pos=[Ht[0
],pos[1]];}break;default:;}Ao.D4.B1=pos;},_Init:function(aArg){C.Q6._Init.call(this
,aArg);this.__proto__=C.AF5;},_className:"Effects::SlideTransition"};C.AeU={RY:function(
){var Ao=A._NewObject(C.Asf,0);Ao.Dn=true;Ao.Bv=true;Ao.Ai$=false;Ao.Zg=true;Ao.
Acm=true;Ao.Aj6=[this,this.Apk];Ao.Cj.Fe(500);Ao.Cj.Akd(0);Ao.Cj.Cr=0;Ao.Cj.B1=255;
Ao.G0.Fe(500);Ao.G0.Wi(23);Ao.G0.AE9(0);Ao.G0.AE_(0);Ao.G0.Av2(3);Ao.G0.AD8(0.5);
Ao.G0.AEU(3);Ao.G0.AEd(3);Ao.G0.AEo(0.5);Ao.V0.AeT(0.5,0.5,1);return Ao;},RX:function(
){var Ao=A._NewObject(C.Asf,0);Ao.Dn=false;Ao.Bv=false;Ao.QX=true;Ao.Acm=true;Ao.
Aj6=[this,this.A2o];Ao.Cj.Cr=255;Ao.Cj.B1=0;Ao.Cj.Fe(500);Ao.Cj.Akd(0);Ao.G0.Fe(
500);Ao.G0.Wi(23);Ao.G0.AE9(0);Ao.G0.AE_(0);Ao.G0.Av2(3);Ao.G0.AD8(0.5);Ao.G0.AEU(
3);Ao.G0.AEd(3);Ao.G0.AEo(0.5);Ao.V0.AeT(0.5,0.5,1);return Ao;},AdQ:function(){var
Ao=C.Q6.AdQ.call(this);Ao.Zg=false;Ao.Bv=true;return Ao;},AdP:function(){var Ao=
C.Q6.AdP.call(this);Ao.Ai3=true;Ao.QX=false;Ao.Bv=true;return Ao;},Apk:function(
G){var B;var Ao=(C.Asf.isPrototypeOf(G)?G:null);var A$=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var CZ=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A$.slice(0,2);pos=[(A$[
0]+(((A$[2]-A$[0])/2)|0))-((CZ[0]/2)|0),pos[1]];pos=[pos[0],(A$[1]+(((A$[3]-A$[1
])/2)|0))-((CZ[1]/2)|0)];Ao.Ue=A.abf(pos,[(CZ[0]/2)|0,(CZ[1]/2)|0]);if(((!Ao.O.Ab||
!Ao.O.Fd())||!Ao.O.GY)||(((B=A.lb(Ao.O.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.O.H(A.abJ(Ao.O.M,A.abe(Ao.Ue,A.aaI([0,0,(B=Ao.O.M)[2]-
B[0],B[3]-B[1]]))));},A2o:function(G){var Ao=(C.Asf.isPrototypeOf(G)?G:null);Ao.
Ue=A.aaI(Ao.O.M);},_Init:function(aArg){C.Q6._Init.call(this,aArg);this.__proto__=
C.AeU;},_className:"Effects::ScaleTransition"};C.Ahs={BCY:0,BDD:1,BDF:2,BDE:3,BCj:
4,BCl:5,BCk:6,BD_:7,BEa:8,BD$:9,BBQ:10,BBS:11,BBR:12,BBw:13,BBy:14,BBx:15,BCa:16
,BCc:17,BCb:18,BBH:19,BBJ:20,BBI:21,BB$:22,BCn:23,BB_:24,BCo:25,BBX:26};C.BB4={A32:
0x1,A31:0x2,A33:0x4,A36:0x8,A35:0x10,A34:0x20};C.ANo={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANo;},_className:"Effects::EffectTimerClass"};C.
AdW={_Init:function(){C.ANo._Init.call(this,0);this.PK(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGg={Pa:A.abi(12,0
,null),Ak0:A.abi(12,0,null),_Init:function(aArg){(this.Pa=[]).__proto__=C.AGg.Pa;(
this.Ak0=[]).__proto__=C.AGg.Ak0;this.__proto__=C.AGg;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ABZ={B7:null,B6:null,A7r:function(AsT){var Ao=this.B6;while(
!!Ao){Ao.Y2();Ao.O.T=Ao.O.T&~0x40000;Ao=Ao.Ag;}Ao=this.B6;while(!!Ao){A.pe(Ao.A2c
,Ao);Ao=Ao.Ag;}},A7q:function(AsT){var Ao=this.B6;while(!!Ao){A.pe(Ao.AJW,Ao);Ao=
Ao.Ag;}this.B6=null;this.B7=null;},Sq:function(AsT){var B;if(!this.B6)this.Mf();
var Ao=this.B6;while(!!Ao){Ao.O.T=(Ao.O.T|0x40000)&~0x20000;Ao.O.Apr=null;Ao=Ao.
Ag;}Ao=this.B6;while(!!Ao){(B=Ao.Aj6)?B[1].call(B[0],Ao):null;Ao.Sq();Ao=Ao.Ag;}
},Mf:function(){var Ao=this.B6;while(!!Ao&&Ao.Avg())Ao=Ao.Ag;if(!Ao)A.Core.AkA.Mf.
call(this);},Bm7:function(FE){if(!FE)return;if(this.AQq())throw new Error(BC);if(
FE.Pb!==this)throw new Error(EW);if(!!FE.Ag)FE.Ag.AH=FE.AH;else this.B7=FE.AH;if(
!!FE.AH)FE.AH.Ag=FE.Ag;else this.B6=FE.Ag;FE.Pb=null;FE.Ag=null;FE.AH=null;if(!!
FE.O)FE.O.Apr=null;A.pe(FE.AJW,FE);if(!this.B6)this.Amb();},A3V:function(FE){if(
!FE)return;if(this.AQq())throw new Error(Hh);if(!!FE.Pb)throw new Error(I8);FE.AH=
this.B7;FE.Ag=null;if(!!this.B7)this.B7.Ag=FE;else this.B6=FE;this.B7=FE;FE.Pb=this;
},_Init:function(aArg){A.Core.AkA._Init.call(this,aArg);this.__proto__=C.ABZ;},_Mark:
function(D){var B;A.Core.AkA._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.Ar4={_Init:function(){C.AT5._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Ga.__proto__=C.ER;C.AFu.__proto__=C.ER;C.AMI.__proto__=C.ER;
C.M3.__proto__=C.ER;C.Ase.__proto__=C.Mh;C.AwC.__proto__=C.Mh;C.AeM.__proto__=C.
Mh;C.Asf.__proto__=C.Mh;C.AT5.__proto__=C.Q6;C.Ad0.__proto__=C.Q6;C.AF5.__proto__=
C.Q6;C.AeU.__proto__=C.Q6;C.ANo.__proto__=A.Core.Timer;C.ABZ.__proto__=A.Core.AkA;
};C._ReInit=function(){var B;if((B=C.AdW._this))B._ReInit(),C.AdW._ReInit.call(B
);if((B=C.Ar4._this))B._ReInit(),C.Ar4._ReInit.call(B);};C.DB=function(D){var B;
if((B=C.AdW._this)&&(B._cycle!=D))B._Done(C.AdW._this=null);if((B=C.Ar4._this)&&(
B._cycle!=D))B._Done(C.Ar4._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */