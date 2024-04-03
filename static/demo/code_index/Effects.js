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
var Cc=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var E7="The fader doesn\'t belong to this task";var Hq="Trying to add a fader to a task, which is actually running";
var IU="The fader belongs already to a task";
C.E0={MY:null,timer:null,Qt:null,Sz:null,Ahl:null,Tf:0,Ai_:0,U_:0,O9:0,AzZ:0.001,
Qp:0,Ec:0,Dx:0,AN3:0.5,A5n:3,Axl:3,AuD:0.5,VT:3,AVb:0,AVa:0,JQ:0,Pr:1000,PA:0,V2:
0,AhO:0,Bw:false,AkV:false,AUm:false,Ap7:false,ALp:false,Me:function(G){var B;if(
!this.timer)return;if(!this.Ai_){if(this.AUm)this.Ai_=-1;else this.Ai_=1;this.Tf=
this.Ai_;this.Dx=this.timer.Bs;this.Ec=0;this.Qp=-1;}var KD;if((this.Ai_>0)&&(this.
Tf>0))KD=this.BBF();else if((this.Ai_<0)&&(this.Tf<0))KD=this.BBI();else if(this.
Ai_>0)KD=this.BBG();else KD=this.BBH();if(KD){this.Ar(false);(B=this.Qt)?B[1].call(
B[0],this):null;(B=this.Sz)?B[1].call(B[0],this):null;}},AKT:function(AN){var B;
if(!this.MY&&(((this.AhO===19)||(this.AhO===20))||(this.AhO===21))){var AJu=this.
A5n+1;var By6=Math.sqrt(this.AN3);var RK=0.5;var O;this.MY=A._NewObject(C.AGW,0);
this.MY.Pi.Set(0,1);this.MY.Alo.Set(0,1);for(O=1;O<AJu;O=O+1){this.MY.Pi.Set(O,this.
MY.Pi.Get(O-1)*By6);this.MY.Alo.Set(O,this.MY.Alo.Get(O-1)*this.AN3);RK=RK+this.
MY.Pi.Get(O);}var BzT=1/RK;this.MY.Pi.Set(0,0.5);RK=0;for(O=0;O<AJu;O=O+1){this.
MY.Pi.Set(O,this.MY.Pi.Get(O)*BzT);RK=RK+this.MY.Pi.Get(O);}this.MY.Pi.Set(AJu,this.
MY.Pi.Get(AJu)+(1-RK));}if(this.AkV){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhO){case 1:AN=Math.pow(AN,this.VT);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VT);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VT)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VT))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VT*AN)-1)/(Math.
pow(2.718,this.VT)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VT*AN)-1)
/(Math.pow(2.718,this.VT)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VT*AN)-1)/(Math.pow(2.718,this.VT)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VT*AN)-1)/(Math.pow(2.718,this.VT)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuD)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuD)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuD)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuD)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axl)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axl)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axl)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axl)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.MY;var O=0;var GG=0;var K6=Bz.Pi.
Get(0);var D8=1-AN;while(D8>K6){O=O+1;GG=K6;K6=K6+Bz.Pi.Get(O);}AN=(D8-GG)/(K6-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alo.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.MY;var O=0;var GG=0;var K6=Bz.Pi.Get(0);while(AN>K6){O=O+1;GG=K6;K6=
K6+Bz.Pi.Get(O);}AN=(AN-GG)/(K6-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alo.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.MY;var O=0;var GG=0;var K6=Bz.Pi.
Get(0);var LJ=AN*2;var D8=LJ-1;if(LJ<1)D8=-D8;while(D8>K6){O=O+1;GG=K6;K6=K6+Bz.
Pi.Get(O);}D8=(D8-GG)/(K6-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alo.Get(O
)*(1-(D8*D8)));}if(LJ<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap7){var LJ=AN;var AAn=1-LJ;AN=((AAn*LJ)*(this.O9+1))+(LJ*LJ);}else if(this.ALp){
var LJ=AN;var AAn=1-LJ;var BcZ=LJ*LJ;var Bz_=AAn*AAn;AN=(((Bz_*LJ)*(this.O9+1))+((
AAn*BcZ)*(this.U_+2)))+(BcZ*LJ);}}this.AuJ(AN);(B=this.Ahl)?B[1].call(B[0],this):
null;},BBI:function(){var Au=(this.timer.Bs-this.Dx)|0;if(Au<0)Au=-Au;var LD=this.
V2;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var KD=false;var Ed=this.Qp;if(
!this.Ec&&(Au>=Op)){this.Ec=1;Au=Au-Op;this.Dx=this.Dx+Op;}if((this.Ec>0)&&(Au>=
Hf)){var Ie=(Au/Hf)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}
if((this.Ec>2)&&!this.JQ)this.Ec=1;if(this.Ec>0)LD=this.PA;if((this.Ec>=this.JQ)&&(
this.JQ>0)){KD=true;Ed=0;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzZ);else if(Ed>=0)Ed=
0;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qp){this.Qp=Ed;this.AKT(
Ed);}return KD;},BBH:function(){var Au=(this.Dx-this.timer.Bs)|0;var LD=this.V2;
var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var KD=false;var Ed=this.Qp;if((this.
Ec>1)&&(Au<0)){var Ie=(((-Au+Hf)-1)/Hf)|0;if((this.Ec-Ie)<=0)Ie=this.Ec-1;this.Ec=
this.Ec-Ie;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}if(((this.Ec===1)&&(Au<0))&&(this.
JQ>0)){this.Ec=0;Au=Au+Op;this.Dx=this.Dx+Op;}if(((this.Ec===1)&&(Au<0))&&!this.
JQ){var Ie=(((-Au+Hf)-1)/Hf)|0;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}if(this.Ec>
0)LD=this.PA;if(Au<0){KD=true;Ed=1;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzZ);else if(
Ed>=0)Ed=1;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qp){this.Qp=
Ed;this.AKT(Ed);}return KD;},BBG:function(){var Au=(this.Dx-this.timer.Bs)|0;var
LD=this.V2;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var KD=false;var Ed=this.
Qp;if((this.Ec>1)&&(Au<0)){var Ie=(((-Au+Hf)-1)/Hf)|0;if((this.Ec-Ie)<=0)Ie=this.
Ec-1;this.Ec=this.Ec-Ie;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}if(((this.Ec===1)&&(
Au<0))&&(this.JQ>0)){this.Ec=0;Au=Au+Op;this.Dx=this.Dx+Op;}if(((this.Ec===1)&&(
Au<0))&&!this.JQ){var Ie=(((-Au+Hf)-1)/Hf)|0;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf
);}if(this.Ec>0)LD=this.PA;if(Au<0){KD=true;Ed=0;}else if(Au>=LD)Ed=(Au-LD)*this.
AzZ;else if(Ed>=0)Ed=0;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qp){this.Qp=Ed;this.AKT(Ed);}return KD;},BBF:function(){var Au=(this.timer.Bs-this.
Dx)|0;if(Au<0)Au=-Au;var LD=this.V2;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;
var KD=false;var Ed=this.Qp;if(!this.Ec&&(Au>=Op)){this.Ec=1;Au=Au-Op;this.Dx=this.
Dx+Op;}if((this.Ec>0)&&(Au>=Hf)){var Ie=(Au/Hf)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*Hf
);this.Dx=this.Dx+(Ie*Hf);}if((this.Ec>2)&&!this.JQ)this.Ec=1;if(this.Ec>0)LD=this.
PA;if((this.Ec>=this.JQ)&&(this.JQ>0)){KD=true;Ed=1;}else if(Au>=LD)Ed=(Au-LD)*this.
AzZ;else if(Ed>=0)Ed=1;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qp){this.Qp=Ed;this.AKT(Ed);}return KD;},Ae9:function(E){if(this.AUm===E)return;
this.AUm=E;if(!this.Bw||!this.Ai_)return;if(E)this.Tf=-1;else this.Tf=1;this.Dx=(
this.timer.Avm()*2)-this.Dx;},AE6:function(E){if(E<0)E=0;if(E>1)E=1;this.AN3=E;}
,AEW:function(E){if(E<1)E=1;if(E>10)E=10;this.A5n=E;this.MY=null;},AFw:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axl=E;},AEO:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuD=E;},AwE:function(E){if(E<1)E=1;if(E>100)E=100;this.VT=E;},AFN:function(
E){if(this.AVb===E)return;this.AVb=E;if(this.AhO===26){this.U_=E;this.Ap7=(this.
O9===this.U_)&&!!this.O9;this.ALp=!this.Ap7&&(this.O9!==this.U_);}},AFM:function(
E){if(this.AVa===E)return;this.AVa=E;if(this.AhO===26){this.O9=E;this.Ap7=(this.
O9===this.U_)&&!!this.O9;this.ALp=!this.Ap7&&(this.O9!==this.U_);}},WC:function(
E){if(this.AhO===E)return;this.AhO=E;this.MY=null;switch(E){case 24:{this.O9=-1.1;
this.U_=1.1;}break;case 22:{this.O9=-1;this.U_=-2;}break;case 23:{this.O9=2;this.
U_=1;}break;case 25:{this.O9=1.1;this.U_=-1.1;}break;case 0:{this.O9=0;this.U_=0;
}break;default:{this.O9=this.AVa;this.U_=this.AVb;}}this.Ap7=(this.O9===this.U_)&&
!!this.O9;this.ALp=!this.Ap7&&(this.O9!==this.U_);},HM:function(E){if(E<0)E=0;this.
JQ=E;},Fq:function(E){if(E<15)E=15;this.Pr=E;this.AzZ=1/E;},Um:function(E){if(E<
0)E=0;this.PA=E;},Aky:function(E){if(E<0)E=0;this.V2=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeg);A.zV([this,this.Me],this.timer
,0);this.Ai_=0;A.pe([this,this.Me],this);}},AuJ:function(Aaj){},AnW:function(G){
this.Ar(false);},AnU:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MY)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sz)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gl={Q:null,A5:0,B2:255,Cx:0,AuJ:function(Aaj
){var F;this.A5=this.Cx+(Math.round((this.B2-this.Cx)*Aaj)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gl;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF9={
Q:null,A5:A.wf,B2:Cc,Cx:A.wf,AuJ:function(Aaj){var F;var Eo=this.Cx[0];var Dg=this.
Cx[1];Eo=Eo+(Math.round((this.B2[0]-Eo)*Aaj)|0);Dg=Dg+(Math.round((this.B2[1]-Dg
)*Aaj)|0);this.A5=[Eo,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AF9;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANl={Q:null,A5:0,B2:0xFFFFFFFF,Cx:0,AuJ:
function(Aaj){var F;var Pg=this.Cx&0xFF;var Aav=(this.Cx>>8)&0xFF;var Alu=(this.
Cx>>16)&0xFF;var Aln=(this.Cx>>24)&0xFF;Pg=Pg+((((this.B2&0xFF)-Pg)*Aaj)|0);Aav=
Aav+(((((this.B2>>8)&0xFF)-Aav)*Aaj)|0);Alu=Alu+(((((this.B2>>16)&0xFF)-Alu)*Aaj
)|0);Aln=Aln+(((((this.B2>>24)&0xFF)-Aln)*Aaj)|0);if(Pg<0)Pg=0;if(Pg>255)Pg=255;
if(Aav<0)Aav=0;if(Aav>255)Aav=255;if(Alu<0)Alu=0;if(Alu>255)Alu=255;if(Aln<0)Aln=
0;if(Aln>255)Aln=255;this.A5=(Pg&0xFF)|((Aav&0xFF)<<8)|((Alu&0xFF)<<16)|((Aln&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANl;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M6={A5:0,B2:1,Cx:0,AuJ:function(Aaj){this.A5=this.Cx+((
this.B2-this.Cx)*Aaj);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M6;},_className:"Effects::FloatEffect"};C.TF={timer:null,Q:null,Ec:0,Dx:0,JQ:0
,Pr:1000,PA:1000,V2:0,Bw:false,Cx:false,B2:true,Me:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dx)|0;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var LD=this.V2;var Jl=this.Ec;
if(!Jl&&(Au>=Op)){Jl=1;Au=Au-Op;}if((Jl>0)&&(Au>=Hf)){var Ie=(Au/Hf)|0;Au=Au-(Ie
*Hf);Jl=Jl+Ie;}if((Jl>2)&&!this.JQ)Jl=1;if(Jl!==this.Ec){this.Dx=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jl;}if(Jl>0)LD=this.PA;var KD=(Jl>=this.JQ)&&(
this.JQ>0);if(!!this.Q){if(!KD&&(Au>=LD))(F=this.Q,F[2].call(F[0],this.Cx));if(KD||((
Au<LD)&&(Jl>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KD)this.Ar(false);},HM:function(
E){if(E<0)E=0;this.JQ=E;},Fq:function(E){if(E<100)E=100;this.Pr=E;},Um:function(
E){if(E<0)E=0;this.PA=E;},Aky:function(E){if(E<0)E=0;this.V2=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeg);A.zV([this,this.Me
],this.timer,0);this.Ec=-1;}},AnW:function(G){this.Ar(false);},AnU:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TF;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mp={Pj:null,AJ:null,Ah:null,Ab:null,P:null,AKv:null,A25:null,Akp:null,Dt:true,
Bw:true,AcG:true,Ajk:false,Ajt:true,ZC:true,Q7:true,Mn:function(){if(!!this.Pj)this.
Pj.Mn();},AvQ:function(){return true;},Zi:function(){},SI:function(){this.Mn();}
,_Init:function(aArg){this.__proto__=C.Mp;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKv)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A25)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsQ={Asg:A.wf,MR:false,AvQ:function(){return this.MR;},Zi:function(
){if(!this.Dt&&!!this.P.Ab)this.P.Z(false);if((!this.Dt&&this.Q7)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(!this.Bw)this.P.Ar(false);},SI:function(){if(this.Bw)this.P.Ar(
true);if((this.Dt||this.Ajk)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajt)this.P.Ab.Bb(this.P);
if(this.Dt&&!this.AcG)this.P.H(A.abJ(this.P.M,this.Asg));if(this.Dt){this.P.Dk(255
);this.P.Z(true);}if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MR=true;
this.Mn();},_Init:function(aArg){C.Mp._Init.call(this,aArg);this.__proto__=C.AsQ;
},_className:"Effects::VisibilityFader"};C.Axh={E0:null,MR:false,Ap_:false,AvQ:function(
){return this.MR;},Zi:function(){if(this.Dt)this.P.Dk(this.E0.B2);if(!this.Dt&&!
this.P.G8)this.P.Z(false);if((!this.Dt&&this.Q7)&&!!this.P.Ab)this.P.Ab.HN(this.
P);if(!this.Bw)this.P.Ar(false);},SI:function(){var B;if(this.AcG){if(this.P.Fp(
)&&!!this.P.Ab)this.E0.Cx=this.P.G8;else this.E0.Cx=0;}var Az2=((!this.P.Ab||!this.
P.G8)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var Az3=((!this.Dt&&((!this.P.Ab||!this.P.Fp())||this.Q7
))||!this.E0.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(Az2&&Az3){this.E0.Cx=0;this.E0.B2=0;}this.Ap_=this.P.ASp(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajk)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajt
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fp()){this.P.Dk(this.E0.Cx);this.P.Z(true);}if(!this.Dt&&((!this.P.Ab||
!this.P.Fp())||!this.P.G8)){this.MR=true;this.Mn();return;}if(!this.Dt&&(this.E0.
Cx===this.E0.B2))this.P.Dk(this.E0.Cx);if(this.P.G8===this.E0.B2){this.MR=true;this.
Mn();return;}if(this.E0.Cx===this.E0.B2){this.MR=true;this.Mn();return;}if(!this.
E0.JQ)this.E0.HM(1);this.E0.Q=[B=this.P,B.Awj,B.A0b];this.E0.Ae9(false);this.E0.
AkV=false;this.E0.Sz=[this,this.AiO];this.E0.Ahl=null;this.E0.Ar(true);},AiO:function(
G){this.MR=true;this.Mn();},_Init:function(aArg){C.Mp._Init.call(this,aArg);C.Gl.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axh;},_Done:function(){this.__proto__=
C.Mp;this.E0._Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mp._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae$={
Cp:null,D$:null,Ad6:false,MR:false,Ap_:false,AvQ:function(){return this.MR;},Zi:
function(){if(this.Dt){this.P.Dk(this.Cp.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Dt&&!this.P.G8)this.P.Z(false);if((!this.Dt&&this.Q7)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(this.Ad6)this.P.ArH(this.Ap_);if(!this.Bw)this.P.Ar(false);},
SI:function(){var B;if(this.AcG){if(this.P.Fp()&&!!this.P.Ab)this.Cp.Cx=this.P.G8;
else this.Cp.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var Az2=((!this.P.Ab||!this.P.
G8)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var Az3=((!this.Dt&&((!this.P.Ab||!this.P.Fp())||this.Q7
))||!this.Cp.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az2&&Az3){
this.Cp.Cx=0;this.Cp.B2=0;this.D$.Cx=this.D$.B2;}this.Ap_=this.P.ASp();if(this.Bw
)this.P.Ar(true);if((this.Dt||this.Ajk)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajt)this.P.Ab.Bb(
this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dt&&!this.P.
Fp()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.Dk(this.Cp.Cx);this.P.Z(true);
}if(!this.Dt&&((!this.P.Ab||!this.P.Fp())||!this.P.G8)){this.MR=true;this.Mn();return;
}if(!this.Dt&&A.aaX(this.D$.Cx,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Dt&&(this.Cp.Cx===this.Cp.B2))this.P.Dk(this.Cp.Cx);if((this.P.G8===this.
Cp.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MR=true;this.Mn();return;}if((
this.Cp.Cx===this.Cp.B2)&&A.aaX(this.D$.Cx,this.D$.B2)){this.MR=true;this.Mn();return;
}if(!this.Cp.JQ)this.Cp.HM(1);if(!this.D$.JQ)this.D$.HM(1);if(this.Ad6)this.P.ArH(
true);this.D$.Q=null;this.D$.Ae9(false);this.D$.AkV=false;this.D$.Sz=[this,this.
AiO];this.D$.Ahl=[this,this.AAw];this.Cp.Q=[B=this.P,B.Awj,B.A0b];this.Cp.Ae9(false
);this.Cp.AkV=false;this.Cp.Sz=[this,this.AiO];this.Cp.Ahl=null;this.D$.Ar(!A.aaX(
this.D$.Cx,this.D$.B2));this.Cp.Ar(this.Cp.Cx!==this.Cp.B2);},AiO:function(G){this.
MR=!this.Cp.Bw&&!this.D$.Bw;this.Mn();},AAw:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A5));},_Init:function(aArg){C.Mp._Init.call(this,aArg);C.Gl._Init.call(this.
Cp={I:this},0);C.AF9._Init.call(this.D$={I:this},0);this.__proto__=C.Ae$;},_Done:
function(){this.__proto__=C.Mp;this.Cp._Done();this.D$._Done();C.Mp._Done.call(this
);},_ReInit:function(){C.Mp._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mp._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsR={AdK:null,Cp:null,G_:null,Wi:null,FQ:null,Ut:A.wf,AkI:A.wf,MR:false,Ap_:
false,AvQ:function(){return this.MR;},Zi:function(){if(this.Dt){this.P.Dk(this.Cp.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Ut));this.P.Z(true);}if(
!this.Dt&&!this.Cp.B2){this.P.Dk(0);this.P.Z(false);}if(((!this.Dt&&(this.Cp.B2>
0))&&!!this.P.Ab)&&!this.Q7){this.P.Dk(this.Cp.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Ut));this.P.Z(true);}if((!this.Dt&&this.Q7)&&!!this.P.Ab)
this.P.Ab.HN(this.P);this.P.ArH(this.Ap_);if(!!this.AdK)this.Ab.HN(this.AdK);if(
!this.Bw)this.P.Ar(false);},SI:function(){var B;if(this.AcG){if(this.P.Fp()&&!!this.
P.Ab)this.Cp.Cx=this.P.G8;else this.Cp.Cx=0;this.AkI=A.aaI(this.P.M);}var Az2=((
!this.P.Ab||!this.P.G8)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Az3=((!this.Dt&&((!this.P.Ab||!this.
P.Fp())||this.Q7))||!this.Cp.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Ut),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az2&&
Az3){this.Cp.Cx=0;this.Cp.B2=0;this.AkI=this.Ut;this.Wi.A7s();}this.Ap_=this.P.ASp(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajk)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajt
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fp())this.P.Dk(this.Cp.Cx);if((!this.Dt&&A.aaX(this.AkI,this.Ut))&&this.
Wi.ADQ())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkI));if(!this.Dt&&(
this.Cp.Cx===this.Cp.B2))this.P.Dk(this.Cp.Cx);if(!this.Dt&&((!this.P.Ab||!this.
P.Fp())||!this.P.G8)){this.MR=true;this.Mn();return;}if(((this.Dt&&(this.P.G8===
this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Ut))&&this.P.Fp()){this.MR=true;this.Mn(
);return;}if(((!this.Dt&&(this.P.G8===this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Ut
))&&this.Wi.ADQ()){this.MR=true;this.Mn();return;}if(((this.Cp.Cx===this.Cp.B2)&&
A.aaX(this.AkI,this.Ut))&&this.Wi.ADQ()){this.MR=true;this.Mn();return;}this.P.ArH(
true);this.P.Z(false);this.AdK=A._NewObject(A.acg.AVB,0);this.AdK.Bmx(this.P);this.
AdK.Dk(this.Cp.Cx);this.AdK.Bns(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL7(this.AdK,this.P);if(!this.Cp.JQ)this.Cp.HM(1);if(!this.G_.JQ)this.G_.HM(
1);this.G_.Ae9(false);this.G_.AkV=false;this.G_.Sz=[this,this.AiO];this.G_.Ahl=[
this,this.AAw];if(this.Dt){this.G_.Cx=0;this.G_.B2=1;}else{this.G_.Cx=1;this.G_.
B2=0;}this.Cp.Q=[B=this.AdK,B.Awj,B.Dk];this.Cp.Ae9(false);this.Cp.AkV=false;this.
Cp.Sz=[this,this.AiO];this.Cp.Ahl=null;this.G_.Ar(!A.aaX(this.AkI,this.Ut)||!this.
Wi.ADQ());this.Cp.Ar(this.Cp.Cx!==this.Cp.B2);},AiO:function(G){this.MR=!this.Cp.
Bw&&!this.G_.Bw;this.Mn();},AAw:function(G){var B;var ABk=A.abe(this.Ut,this.AkI
);if(!this.Dt)ABk=[-ABk[0],-ABk[1]];this.FQ.A7s();this.FQ.AgT=this.Wi.AgT;this.FQ.
BpW(ABk[0],ABk[1],0);this.FQ.Bjo(this.Wi,this.FQ,this.G_.A5);if(this.Dt)this.AdK.
A$R(this.AkI,this.FQ);else this.AdK.A$R(this.Ut,this.FQ);},_Init:function(aArg){
C.Mp._Init.call(this,aArg);C.Gl._Init.call(this.Cp={I:this},0);C.M6._Init.call(this.
G_={I:this},0);A.Graphics.AxY._Init.call(this.Wi={I:this},0);A.Graphics.AxY._Init.
call(this.FQ={I:this},0);this.__proto__=C.AsR;},_Done:function(){this.__proto__=
C.Mp;this.Cp._Done();this.G_._Done();this.Wi._Done();this.FQ._Done();C.Mp._Done.
call(this);},_ReInit:function(){C.Mp._ReInit.call(this);this.Cp._ReInit();this.G_.
_ReInit();this.Wi._ReInit();this.FQ._ReInit();},_Mark:function(D){var B;C.Mp._Mark.
call(this,D);if((B=this.AdK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rf={Sa:function(){return null;},R$:function(
){return null;},Aea:function(){return this.Sa();},Ad$:function(){return this.R$(
);},_Init:function(aArg){this.__proto__=C.Rf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUN={Sa:function(){var Ao=A._NewObject(C.AsQ,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajt=
false;Ao.ZC=true;Ao.AcG=false;Ao.Akp=[this,this.ApJ];return Ao;},R$:function(){var
Ao=A._NewObject(C.AsQ,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;return Ao;},Aea:function(
){var Ao=C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var
Ao=A._NewObject(C.AsQ,0);Ao.Dt=false;Ao.Bw=true;Ao.Ajk=true;Ao.Q7=false;return Ao;
},ApJ:function(G){var B;var Ao=(C.AsQ.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C4[1]/2)|0)];Ao.Asg=pos;},_Init:function(aArg){C.Rf._Init.
call(this,aArg);this.__proto__=C.AUN;},_className:"Effects::ShowHideTransition"};
C.Aek={ACA:500,Sa:function(){var Ao=A._NewObject(C.Ae$,0);Ao.Dt=true;Ao.Bw=true;
Ao.Ajt=false;Ao.ZC=true;Ao.AcG=true;Ao.Ad6=false;Ao.Akp=[this,this.ApJ];Ao.Cp.Fq(
this.ACA);Ao.Cp.Cx=0;Ao.Cp.B2=255;Ao.D$.Fq(this.ACA);Ao.D$.WC(23);return Ao;},R$:
function(){var Ao=A._NewObject(C.Axh,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;Ao.AcG=
true;Ao.E0.Cx=255;Ao.E0.B2=0;Ao.E0.Fq(this.ACA);return Ao;},Aea:function(){var Ao=
C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var Ao=C.Rf.
Ad$.call(this);Ao.Ajk=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApJ:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fp())||!Ao.P.G8)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rf._Init.call(this,aArg);this.__proto__=C.Aek;
},_className:"Effects::FadeInOutTransition"};C.AGJ={Ki:0x12,AuY:0,Ad6:false,Sa:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZC=true;Ao.
AcG=true;Ao.Ad6=this.Ad6;Ao.Akp=[this,this.ApJ];Ao.Cp.Fq(500);Ao.Cp.Aky(0);Ao.Cp.
Cx=0;Ao.Cp.B2=255;Ao.D$.Fq(500);Ao.D$.WC(23);Ao.D$.AFM(0);Ao.D$.AFN(0);Ao.D$.AwE(
3);Ao.D$.AEO(0.5);Ao.D$.AFw(3);Ao.D$.AEW(3);Ao.D$.AE6(0.5);return Ao;},R$:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;Ao.AcG=true;Ao.
Ad6=this.Ad6;Ao.Akp=[this,this.A3f];Ao.Cp.Cx=255;Ao.Cp.B2=0;Ao.Cp.Fq(500);Ao.Cp.
Aky(0);Ao.D$.Fq(500);Ao.D$.WC(23);Ao.D$.AFM(0);Ao.D$.AFN(0);Ao.D$.AwE(3);Ao.D$.AEO(
0.5);Ao.D$.AFw(3);Ao.D$.AEW(3);Ao.D$.AE6(0.5);return Ao;},Aea:function(){var Ao=
C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var Ao=C.Rf.
Ad$.call(this);Ao.Ajk=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApJ:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bu=this.Ki;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C4[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C4[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fp())||!Ao.P.G8)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HC=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuY){case 5:pos=[pos[0],-C4[1]];break;case 3:{
pos=[pos[0],-C4[1]];pos=[HC[0],pos[1]];}break;case 8:pos=[-C4[0],-C4[1]];break;case
2:pos=[HC[0],pos[1]];break;case 7:pos=[-C4[0],pos[1]];break;case 4:pos=[pos[0],HC[
1]];break;case 1:{pos=[pos[0],HC[1]];pos=[HC[0],pos[1]];}break;case 6:{pos=[pos[
0],HC[1]];pos=[-C4[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3f:
function(G){var B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HC=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuY){case 5:pos=[pos[0],HC[1]];break;case 3:{pos=[pos[0],HC[1]];pos=[-
C4[0],pos[1]];}break;case 8:{pos=[pos[0],HC[1]];pos=[HC[0],pos[1]];}break;case 2:
pos=[-C4[0],pos[1]];break;case 7:pos=[HC[0],pos[1]];break;case 4:pos=[pos[0],-C4[
1]];break;case 1:pos=[-C4[0],-C4[1]];break;case 6:{pos=[pos[0],-C4[1]];pos=[HC[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rf._Init.call(this
,aArg);this.__proto__=C.AGJ;},_className:"Effects::SlideTransition"};C.Afh={Sa:function(
){var Ao=A._NewObject(C.AsR,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZC=true;Ao.
AcG=true;Ao.Akp=[this,this.ApJ];Ao.Cp.Fq(500);Ao.Cp.Aky(0);Ao.Cp.Cx=0;Ao.Cp.B2=255;
Ao.G_.Fq(500);Ao.G_.WC(23);Ao.G_.AFM(0);Ao.G_.AFN(0);Ao.G_.AwE(3);Ao.G_.AEO(0.5);
Ao.G_.AFw(3);Ao.G_.AEW(3);Ao.G_.AE6(0.5);Ao.Wi.Afg(0.5,0.5,1);return Ao;},R$:function(
){var Ao=A._NewObject(C.AsR,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;Ao.AcG=true;Ao.
Akp=[this,this.A3f];Ao.Cp.Cx=255;Ao.Cp.B2=0;Ao.Cp.Fq(500);Ao.Cp.Aky(0);Ao.G_.Fq(
500);Ao.G_.WC(23);Ao.G_.AFM(0);Ao.G_.AFN(0);Ao.G_.AwE(3);Ao.G_.AEO(0.5);Ao.G_.AFw(
3);Ao.G_.AEW(3);Ao.G_.AE6(0.5);Ao.Wi.Afg(0.5,0.5,1);return Ao;},Aea:function(){var
Ao=C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var Ao=
C.Rf.Ad$.call(this);Ao.Ajk=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApJ:function(
G){var B;var Ao=(C.AsR.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C4[1]/2)|0)];Ao.Ut=A.abf(pos,[(C4[0]/2)|0,(C4[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fp())||!Ao.P.G8)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Ut,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3f:function(G){var Ao=(C.AsR.isPrototypeOf(G)?G:null);Ao.
Ut=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rf._Init.call(this,aArg);this.__proto__=
C.Afh;},_className:"Effects::ScaleTransition"};C.AhO={BEy:0,BFd:1,BFf:2,BFe:3,BD0:
4,BD2:5,BD1:6,BFM:7,BFO:8,BFN:9,BDu:10,BDw:11,BDv:12,BDa:13,BDc:14,BDb:15,BDR:16
,BDT:17,BDS:18,BDl:19,BDn:20,BDm:21,BDQ:22,BD4:23,BDP:24,BD5:25,BDB:26};C.BDJ={A4R:
0x1,A4Q:0x2,A4S:0x4,A4V:0x8,A4U:0x10,A4T:0x20};C.AN2={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN2;},_className:"Effects::EffectTimerClass"};C.
Aeg={_Init:function(){C.AN2._Init.call(this,0);this.PR(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGW={Pi:A.abi(12,0
,null),Alo:A.abi(12,0,null),_Init:function(aArg){(this.Pi=[]).__proto__=C.AGW.Pi;(
this.Alo=[]).__proto__=C.AGW.Alo;this.__proto__=C.AGW;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACH={B8:null,B7:null,A75:function(Atp){var Ao=this.B7;while(
!!Ao){Ao.Zi();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B7;while(!!Ao){A.pe(Ao.A25
,Ao);Ao=Ao.Ah;}},A74:function(Atp){var Ao=this.B7;while(!!Ao){A.pe(Ao.AKv,Ao);Ao=
Ao.Ah;}this.B7=null;this.B8=null;},SI:function(Atp){var B;if(!this.B7)this.Mn();
var Ao=this.B7;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApO=null;Ao=Ao.
Ah;}Ao=this.B7;while(!!Ao){(B=Ao.Akp)?B[1].call(B[0],Ao):null;Ao.SI();Ao=Ao.Ah;}
},Mn:function(){var Ao=this.B7;while(!!Ao&&Ao.AvQ())Ao=Ao.Ah;if(!Ao)A.Core.AkW.Mn.
call(this);},Bon:function(FP){if(!FP)return;if(this.AQ9())throw new Error(BD);if(
FP.Pj!==this)throw new Error(E7);if(!!FP.Ah)FP.Ah.AJ=FP.AJ;else this.B8=FP.AJ;if(
!!FP.AJ)FP.AJ.Ah=FP.Ah;else this.B7=FP.Ah;FP.Pj=null;FP.Ah=null;FP.AJ=null;if(!!
FP.P)FP.P.ApO=null;A.pe(FP.AKv,FP);if(!this.B7)this.Amz();},A4L:function(FP){if(
!FP)return;if(this.AQ9())throw new Error(Hq);if(!!FP.Pj)throw new Error(IU);FP.AJ=
this.B8;FP.Ah=null;if(!!this.B8)this.B8.Ah=FP;else this.B7=FP;this.B8=FP;FP.Pj=this;
},_Init:function(aArg){A.Core.AkW._Init.call(this,aArg);this.__proto__=C.ACH;},_Mark:
function(D){var B;A.Core.AkW._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsC={_Init:function(){C.AUN._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gl.__proto__=C.E0;C.AF9.__proto__=C.E0;C.ANl.__proto__=C.E0;
C.M6.__proto__=C.E0;C.AsQ.__proto__=C.Mp;C.Axh.__proto__=C.Mp;C.Ae$.__proto__=C.
Mp;C.AsR.__proto__=C.Mp;C.AUN.__proto__=C.Rf;C.Aek.__proto__=C.Rf;C.AGJ.__proto__=
C.Rf;C.Afh.__proto__=C.Rf;C.AN2.__proto__=A.Core.Timer;C.ACH.__proto__=A.Core.AkW;
};C._ReInit=function(){var B;if((B=C.Aeg._this))B._ReInit(),C.Aeg._ReInit.call(B
);if((B=C.AsC._this))B._ReInit(),C.AsC._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aeg._this)&&(B._cycle!=D))B._Done(C.Aeg._this=null);if((B=C.AsC._this)&&(
B._cycle!=D))B._Done(C.AsC._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */