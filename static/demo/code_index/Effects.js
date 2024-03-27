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
var E6="The fader doesn\'t belong to this task";var Hq="Trying to add a fader to a task, which is actually running";
var IT="The fader belongs already to a task";
C.E0={MX:null,timer:null,Qt:null,SA:null,Ahk:null,Tg:0,Ai9:0,U_:0,O9:0,AzU:0.001,
Qp:0,Ec:0,Dx:0,AN0:0.5,A5d:3,Axj:3,AuC:0.5,VT:3,AU2:0,AU1:0,JP:0,Pr:1000,PA:0,V2:
0,AhN:0,Bw:false,AkU:false,AUb:false,Ap5:false,ALm:false,Me:function(G){var B;if(
!this.timer)return;if(!this.Ai9){if(this.AUb)this.Ai9=-1;else this.Ai9=1;this.Tg=
this.Ai9;this.Dx=this.timer.Bs;this.Ec=0;this.Qp=-1;}var KD;if((this.Ai9>0)&&(this.
Tg>0))KD=this.BBm();else if((this.Ai9<0)&&(this.Tg<0))KD=this.BBp();else if(this.
Ai9>0)KD=this.BBn();else KD=this.BBo();if(KD){this.Ar(false);(B=this.Qt)?B[1].call(
B[0],this):null;(B=this.SA)?B[1].call(B[0],this):null;}},AKQ:function(AN){var B;
if(!this.MX&&(((this.AhN===19)||(this.AhN===20))||(this.AhN===21))){var AJr=this.
A5d+1;var ByN=Math.sqrt(this.AN0);var RL=0.5;var O;this.MX=A._NewObject(C.AGS,0);
this.MX.Pi.Set(0,1);this.MX.All.Set(0,1);for(O=1;O<AJr;O=O+1){this.MX.Pi.Set(O,this.
MX.Pi.Get(O-1)*ByN);this.MX.All.Set(O,this.MX.All.Get(O-1)*this.AN0);RL=RL+this.
MX.Pi.Get(O);}var BzA=1/RL;this.MX.Pi.Set(0,0.5);RL=0;for(O=0;O<AJr;O=O+1){this.
MX.Pi.Set(O,this.MX.Pi.Get(O)*BzA);RL=RL+this.MX.Pi.Get(O);}this.MX.Pi.Set(AJr,this.
MX.Pi.Get(AJr)+(1-RL));}if(this.AkU){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhN){case 1:AN=Math.pow(AN,this.VT);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
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
AN=((AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axj)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axj)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axj)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axj)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.MX;var O=0;var GG=0;var K6=Bz.Pi.
Get(0);var D8=1-AN;while(D8>K6){O=O+1;GG=K6;K6=K6+Bz.Pi.Get(O);}AN=(D8-GG)/(K6-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.All.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.MX;var O=0;var GG=0;var K6=Bz.Pi.Get(0);while(AN>K6){O=O+1;GG=K6;K6=
K6+Bz.Pi.Get(O);}AN=(AN-GG)/(K6-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.All.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.MX;var O=0;var GG=0;var K6=Bz.Pi.
Get(0);var LJ=AN*2;var D8=LJ-1;if(LJ<1)D8=-D8;while(D8>K6){O=O+1;GG=K6;K6=K6+Bz.
Pi.Get(O);}D8=(D8-GG)/(K6-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.All.Get(O
)*(1-(D8*D8)));}if(LJ<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap5){var LJ=AN;var AAi=1-LJ;AN=((AAi*LJ)*(this.O9+1))+(LJ*LJ);}else if(this.ALm){
var LJ=AN;var AAi=1-LJ;var BcO=LJ*LJ;var BzR=AAi*AAi;AN=(((BzR*LJ)*(this.O9+1))+((
AAi*BcO)*(this.U_+2)))+(BcO*LJ);}}this.AuH(AN);(B=this.Ahk)?B[1].call(B[0],this):
null;},BBp:function(){var Au=(this.timer.Bs-this.Dx)|0;if(Au<0)Au=-Au;var LD=this.
V2;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var KD=false;var Ed=this.Qp;if(
!this.Ec&&(Au>=Op)){this.Ec=1;Au=Au-Op;this.Dx=this.Dx+Op;}if((this.Ec>0)&&(Au>=
Hf)){var Ie=(Au/Hf)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}
if((this.Ec>2)&&!this.JP)this.Ec=1;if(this.Ec>0)LD=this.PA;if((this.Ec>=this.JP)&&(
this.JP>0)){KD=true;Ed=0;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzU);else if(Ed>=0)Ed=
0;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qp){this.Qp=Ed;this.AKQ(
Ed);}return KD;},BBo:function(){var Au=(this.Dx-this.timer.Bs)|0;var LD=this.V2;
var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var KD=false;var Ed=this.Qp;if((this.
Ec>1)&&(Au<0)){var Ie=(((-Au+Hf)-1)/Hf)|0;if((this.Ec-Ie)<=0)Ie=this.Ec-1;this.Ec=
this.Ec-Ie;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}if(((this.Ec===1)&&(Au<0))&&(this.
JP>0)){this.Ec=0;Au=Au+Op;this.Dx=this.Dx+Op;}if(((this.Ec===1)&&(Au<0))&&!this.
JP){var Ie=(((-Au+Hf)-1)/Hf)|0;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}if(this.Ec>
0)LD=this.PA;if(Au<0){KD=true;Ed=1;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzU);else if(
Ed>=0)Ed=1;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qp){this.Qp=
Ed;this.AKQ(Ed);}return KD;},BBn:function(){var Au=(this.Dx-this.timer.Bs)|0;var
LD=this.V2;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var KD=false;var Ed=this.
Qp;if((this.Ec>1)&&(Au<0)){var Ie=(((-Au+Hf)-1)/Hf)|0;if((this.Ec-Ie)<=0)Ie=this.
Ec-1;this.Ec=this.Ec-Ie;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf);}if(((this.Ec===1)&&(
Au<0))&&(this.JP>0)){this.Ec=0;Au=Au+Op;this.Dx=this.Dx+Op;}if(((this.Ec===1)&&(
Au<0))&&!this.JP){var Ie=(((-Au+Hf)-1)/Hf)|0;Au=Au+(Ie*Hf);this.Dx=this.Dx+(Ie*Hf
);}if(this.Ec>0)LD=this.PA;if(Au<0){KD=true;Ed=0;}else if(Au>=LD)Ed=(Au-LD)*this.
AzU;else if(Ed>=0)Ed=0;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qp){this.Qp=Ed;this.AKQ(Ed);}return KD;},BBm:function(){var Au=(this.timer.Bs-this.
Dx)|0;if(Au<0)Au=-Au;var LD=this.V2;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;
var KD=false;var Ed=this.Qp;if(!this.Ec&&(Au>=Op)){this.Ec=1;Au=Au-Op;this.Dx=this.
Dx+Op;}if((this.Ec>0)&&(Au>=Hf)){var Ie=(Au/Hf)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*Hf
);this.Dx=this.Dx+(Ie*Hf);}if((this.Ec>2)&&!this.JP)this.Ec=1;if(this.Ec>0)LD=this.
PA;if((this.Ec>=this.JP)&&(this.JP>0)){KD=true;Ed=1;}else if(Au>=LD)Ed=(Au-LD)*this.
AzU;else if(Ed>=0)Ed=1;if(Ed!==this.Qp){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qp){this.Qp=Ed;this.AKQ(Ed);}return KD;},Ae9:function(E){if(this.AUb===E)return;
this.AUb=E;if(!this.Bw||!this.Ai9)return;if(E)this.Tg=-1;else this.Tg=1;this.Dx=(
this.timer.Avk()*2)-this.Dx;},AE2:function(E){if(E<0)E=0;if(E>1)E=1;this.AN0=E;}
,AES:function(E){if(E<1)E=1;if(E>10)E=10;this.A5d=E;this.MX=null;},AFs:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axj=E;},AEL:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuC=E;},AwC:function(E){if(E<1)E=1;if(E>100)E=100;this.VT=E;},AFI:function(
E){if(this.AU2===E)return;this.AU2=E;if(this.AhN===26){this.U_=E;this.Ap5=(this.
O9===this.U_)&&!!this.O9;this.ALm=!this.Ap5&&(this.O9!==this.U_);}},AFH:function(
E){if(this.AU1===E)return;this.AU1=E;if(this.AhN===26){this.O9=E;this.Ap5=(this.
O9===this.U_)&&!!this.O9;this.ALm=!this.Ap5&&(this.O9!==this.U_);}},WC:function(
E){if(this.AhN===E)return;this.AhN=E;this.MX=null;switch(E){case 24:{this.O9=-1.1;
this.U_=1.1;}break;case 22:{this.O9=-1;this.U_=-2;}break;case 23:{this.O9=2;this.
U_=1;}break;case 25:{this.O9=1.1;this.U_=-1.1;}break;case 0:{this.O9=0;this.U_=0;
}break;default:{this.O9=this.AU1;this.U_=this.AU2;}}this.Ap5=(this.O9===this.U_)&&
!!this.O9;this.ALm=!this.Ap5&&(this.O9!==this.U_);},HM:function(E){if(E<0)E=0;this.
JP=E;},Fp:function(E){if(E<15)E=15;this.Pr=E;this.AzU=1/E;},Um:function(E){if(E<
0)E=0;this.PA=E;},Akx:function(E){if(E<0)E=0;this.V2=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeg);A.zV([this,this.Me],this.timer
,0);this.Ai9=0;A.pe([this,this.Me],this);}},AuH:function(Aai){},AnU:function(G){
this.Ar(false);},AnS:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gk={Q:null,A4:0,B1:255,Cw:0,AuH:function(Aai
){var F;this.A4=this.Cw+(Math.round((this.B1-this.Cw)*Aai)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gk;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF4={
Q:null,A4:A.wf,B1:Cc,Cw:A.wf,AuH:function(Aai){var F;var Eo=this.Cw[0];var Dg=this.
Cw[1];Eo=Eo+(Math.round((this.B1[0]-Eo)*Aai)|0);Dg=Dg+(Math.round((this.B1[1]-Dg
)*Aai)|0);this.A4=[Eo,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AF4;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANi={Q:null,A4:0,B1:0xFFFFFFFF,Cw:0,AuH:
function(Aai){var F;var Pg=this.Cw&0xFF;var Aau=(this.Cw>>8)&0xFF;var Alr=(this.
Cw>>16)&0xFF;var Alk=(this.Cw>>24)&0xFF;Pg=Pg+((((this.B1&0xFF)-Pg)*Aai)|0);Aau=
Aau+(((((this.B1>>8)&0xFF)-Aau)*Aai)|0);Alr=Alr+(((((this.B1>>16)&0xFF)-Alr)*Aai
)|0);Alk=Alk+(((((this.B1>>24)&0xFF)-Alk)*Aai)|0);if(Pg<0)Pg=0;if(Pg>255)Pg=255;
if(Aau<0)Aau=0;if(Aau>255)Aau=255;if(Alr<0)Alr=0;if(Alr>255)Alr=255;if(Alk<0)Alk=
0;if(Alk>255)Alk=255;this.A4=(Pg&0xFF)|((Aau&0xFF)<<8)|((Alr&0xFF)<<16)|((Alk&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANi;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M5={A4:0,B1:1,Cw:0,AuH:function(Aai){this.A4=this.Cw+((
this.B1-this.Cw)*Aai);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M5;},_className:"Effects::FloatEffect"};C.TG={timer:null,Q:null,Ec:0,Dx:0,JP:0
,Pr:1000,PA:1000,V2:0,Bw:false,Cw:false,B1:true,Me:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dx)|0;var Op=this.V2+this.Pr;var Hf=this.PA+this.Pr;var LD=this.V2;var Jk=this.Ec;
if(!Jk&&(Au>=Op)){Jk=1;Au=Au-Op;}if((Jk>0)&&(Au>=Hf)){var Ie=(Au/Hf)|0;Au=Au-(Ie
*Hf);Jk=Jk+Ie;}if((Jk>2)&&!this.JP)Jk=1;if(Jk!==this.Ec){this.Dx=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jk;}if(Jk>0)LD=this.PA;var KD=(Jk>=this.JP)&&(
this.JP>0);if(!!this.Q){if(!KD&&(Au>=LD))(F=this.Q,F[2].call(F[0],this.Cw));if(KD||((
Au<LD)&&(Jk>0)))(F=this.Q,F[2].call(F[0],this.B1));}if(KD)this.Ar(false);},HM:function(
E){if(E<0)E=0;this.JP=E;},Fp:function(E){if(E<100)E=100;this.Pr=E;},Um:function(
E){if(E<0)E=0;this.PA=E;},Akx:function(E){if(E<0)E=0;this.V2=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeg);A.zV([this,this.Me
],this.timer,0);this.Ec=-1;}},AnU:function(G){this.Ar(false);},AnS:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TG;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mo={Pj:null,AJ:null,Ah:null,Ab:null,P:null,AKs:null,A2V:null,Ako:null,Dt:true,
Bw:true,AcG:true,Ajj:false,Ajs:true,ZC:true,Q7:true,Mm:function(){if(!!this.Pj)this.
Pj.Mm();},AvO:function(){return true;},Zi:function(){},SJ:function(){this.Mm();}
,_Init:function(aArg){this.__proto__=C.Mo;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKs)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2V)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ako)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsO={Asd:A.wf,MQ:false,AvO:function(){return this.MQ;},Zi:function(
){if(!this.Dt&&!!this.P.Ab)this.P.Z(false);if((!this.Dt&&this.Q7)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(!this.Bw)this.P.Ar(false);},SJ:function(){if(this.Bw)this.P.Ar(
true);if((this.Dt||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajs)this.P.Ab.Bb(this.P);
if(this.Dt&&!this.AcG)this.P.H(A.abJ(this.P.M,this.Asd));if(this.Dt){this.P.Dk(255
);this.P.Z(true);}if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MQ=true;
this.Mm();},_Init:function(aArg){C.Mo._Init.call(this,aArg);this.__proto__=C.AsO;
},_className:"Effects::VisibilityFader"};C.Axf={E0:null,MQ:false,Ap8:false,AvO:function(
){return this.MQ;},Zi:function(){if(this.Dt)this.P.Dk(this.E0.B1);if(!this.Dt&&!
this.P.G8)this.P.Z(false);if((!this.Dt&&this.Q7)&&!!this.P.Ab)this.P.Ab.HN(this.
P);if(!this.Bw)this.P.Ar(false);},SJ:function(){var B;if(this.AcG){if(this.P.Fo(
)&&!!this.P.Ab)this.E0.Cw=this.P.G8;else this.E0.Cw=0;}var AzX=((!this.P.Ab||!this.
P.G8)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AzY=((!this.Dt&&((!this.P.Ab||!this.P.Fo())||this.Q7
))||!this.E0.B1)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AzX&&AzY){this.E0.Cw=0;this.E0.B1=0;}this.Ap8=this.P.ASf(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajs
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fo()){this.P.Dk(this.E0.Cw);this.P.Z(true);}if(!this.Dt&&((!this.P.Ab||
!this.P.Fo())||!this.P.G8)){this.MQ=true;this.Mm();return;}if(!this.Dt&&(this.E0.
Cw===this.E0.B1))this.P.Dk(this.E0.Cw);if(this.P.G8===this.E0.B1){this.MQ=true;this.
Mm();return;}if(this.E0.Cw===this.E0.B1){this.MQ=true;this.Mm();return;}if(!this.
E0.JP)this.E0.HM(1);this.E0.Q=[B=this.P,B.Awh,B.AZ3];this.E0.Ae9(false);this.E0.
AkU=false;this.E0.SA=[this,this.AiN];this.E0.Ahk=null;this.E0.Ar(true);},AiN:function(
G){this.MQ=true;this.Mm();},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.Gk.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axf;},_Done:function(){this.__proto__=
C.Mo;this.E0._Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mo._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae$={
Cp:null,D$:null,Ad6:false,MQ:false,Ap8:false,AvO:function(){return this.MQ;},Zi:
function(){if(this.Dt){this.P.Dk(this.Cp.B1);this.P.H(A.abJ(this.P.M,this.D$.B1)
);}if(!this.Dt&&!this.P.G8)this.P.Z(false);if((!this.Dt&&this.Q7)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(this.Ad6)this.P.ArE(this.Ap8);if(!this.Bw)this.P.Ar(false);},
SJ:function(){var B;if(this.AcG){if(this.P.Fo()&&!!this.P.Ab)this.Cp.Cw=this.P.G8;
else this.Cp.Cw=0;this.D$.Cw=this.P.M.slice(0,2);}var AzX=((!this.P.Ab||!this.P.
G8)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AzY=((!this.Dt&&((!this.P.Ab||!this.P.Fo())||this.Q7
))||!this.Cp.B1)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B1
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzX&&AzY){
this.Cp.Cw=0;this.Cp.B1=0;this.D$.Cw=this.D$.B1;}this.Ap8=this.P.ASf();if(this.Bw
)this.P.Ar(true);if((this.Dt||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajs)this.P.Ab.Bb(
this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dt&&!this.P.
Fo()){this.P.H(A.abJ(this.P.M,this.D$.Cw));this.P.Dk(this.Cp.Cw);this.P.Z(true);
}if(!this.Dt&&((!this.P.Ab||!this.P.Fo())||!this.P.G8)){this.MQ=true;this.Mm();return;
}if(!this.Dt&&A.aaX(this.D$.Cw,this.D$.B1))this.P.H(A.abJ(this.P.M,this.D$.Cw));
if(!this.Dt&&(this.Cp.Cw===this.Cp.B1))this.P.Dk(this.Cp.Cw);if((this.P.G8===this.
Cp.B1)&&A.aaX(this.P.M.slice(0,2),this.D$.B1)){this.MQ=true;this.Mm();return;}if((
this.Cp.Cw===this.Cp.B1)&&A.aaX(this.D$.Cw,this.D$.B1)){this.MQ=true;this.Mm();return;
}if(!this.Cp.JP)this.Cp.HM(1);if(!this.D$.JP)this.D$.HM(1);if(this.Ad6)this.P.ArE(
true);this.D$.Q=null;this.D$.Ae9(false);this.D$.AkU=false;this.D$.SA=[this,this.
AiN];this.D$.Ahk=[this,this.AAr];this.Cp.Q=[B=this.P,B.Awh,B.AZ3];this.Cp.Ae9(false
);this.Cp.AkU=false;this.Cp.SA=[this,this.AiN];this.Cp.Ahk=null;this.D$.Ar(!A.aaX(
this.D$.Cw,this.D$.B1));this.Cp.Ar(this.Cp.Cw!==this.Cp.B1);},AiN:function(G){this.
MQ=!this.Cp.Bw&&!this.D$.Bw;this.Mm();},AAr:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A4));},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.Gk._Init.call(this.
Cp={I:this},0);C.AF4._Init.call(this.D$={I:this},0);this.__proto__=C.Ae$;},_Done:
function(){this.__proto__=C.Mo;this.Cp._Done();this.D$._Done();C.Mo._Done.call(this
);},_ReInit:function(){C.Mo._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mo._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsP={AdK:null,Cp:null,G_:null,Wi:null,FP:null,Ut:A.wf,AkH:A.wf,MQ:false,Ap8:
false,AvO:function(){return this.MQ;},Zi:function(){if(this.Dt){this.P.Dk(this.Cp.
B1);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Ut));this.P.Z(true);}if(
!this.Dt&&!this.Cp.B1){this.P.Dk(0);this.P.Z(false);}if(((!this.Dt&&(this.Cp.B1>
0))&&!!this.P.Ab)&&!this.Q7){this.P.Dk(this.Cp.B1);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Ut));this.P.Z(true);}if((!this.Dt&&this.Q7)&&!!this.P.Ab)
this.P.Ab.HN(this.P);this.P.ArE(this.Ap8);if(!!this.AdK)this.Ab.HN(this.AdK);if(
!this.Bw)this.P.Ar(false);},SJ:function(){var B;if(this.AcG){if(this.P.Fo()&&!!this.
P.Ab)this.Cp.Cw=this.P.G8;else this.Cp.Cw=0;this.AkH=A.aaI(this.P.M);}var AzX=((
!this.P.Ab||!this.P.G8)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AzY=((!this.Dt&&((!this.P.Ab||!this.
P.Fo())||this.Q7))||!this.Cp.B1)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Ut),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzX&&
AzY){this.Cp.Cw=0;this.Cp.B1=0;this.AkH=this.Ut;this.Wi.A7l();}this.Ap8=this.P.ASf(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZC)this.P.Ab.ZB(this.P);if(this.Dt&&this.Ajs
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fo())this.P.Dk(this.Cp.Cw);if((!this.Dt&&A.aaX(this.AkH,this.Ut))&&this.
Wi.ADN())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkH));if(!this.Dt&&(
this.Cp.Cw===this.Cp.B1))this.P.Dk(this.Cp.Cw);if(!this.Dt&&((!this.P.Ab||!this.
P.Fo())||!this.P.G8)){this.MQ=true;this.Mm();return;}if(((this.Dt&&(this.P.G8===
this.Cp.B1))&&A.aaX(A.aaI(this.P.M),this.Ut))&&this.P.Fo()){this.MQ=true;this.Mm(
);return;}if(((!this.Dt&&(this.P.G8===this.Cp.B1))&&A.aaX(A.aaI(this.P.M),this.Ut
))&&this.Wi.ADN()){this.MQ=true;this.Mm();return;}if(((this.Cp.Cw===this.Cp.B1)&&
A.aaX(this.AkH,this.Ut))&&this.Wi.ADN()){this.MQ=true;this.Mm();return;}this.P.ArE(
true);this.P.Z(false);this.AdK=A._NewObject(A.acg.AVq,0);this.AdK.Bmi(this.P);this.
AdK.Dk(this.Cp.Cw);this.AdK.Bnd(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL4(this.AdK,this.P);if(!this.Cp.JP)this.Cp.HM(1);if(!this.G_.JP)this.G_.HM(
1);this.G_.Ae9(false);this.G_.AkU=false;this.G_.SA=[this,this.AiN];this.G_.Ahk=[
this,this.AAr];if(this.Dt){this.G_.Cw=0;this.G_.B1=1;}else{this.G_.Cw=1;this.G_.
B1=0;}this.Cp.Q=[B=this.AdK,B.Awh,B.Dk];this.Cp.Ae9(false);this.Cp.AkU=false;this.
Cp.SA=[this,this.AiN];this.Cp.Ahk=null;this.G_.Ar(!A.aaX(this.AkH,this.Ut)||!this.
Wi.ADN());this.Cp.Ar(this.Cp.Cw!==this.Cp.B1);},AiN:function(G){this.MQ=!this.Cp.
Bw&&!this.G_.Bw;this.Mm();},AAr:function(G){var B;var ABf=A.abe(this.Ut,this.AkH
);if(!this.Dt)ABf=[-ABf[0],-ABf[1]];this.FP.A7l();this.FP.AgT=this.Wi.AgT;this.FP.
BpF(ABf[0],ABf[1],0);this.FP.Bi$(this.Wi,this.FP,this.G_.A4);if(this.Dt)this.AdK.
A$H(this.AkH,this.FP);else this.AdK.A$H(this.Ut,this.FP);},_Init:function(aArg){
C.Mo._Init.call(this,aArg);C.Gk._Init.call(this.Cp={I:this},0);C.M5._Init.call(this.
G_={I:this},0);A.Graphics.AxW._Init.call(this.Wi={I:this},0);A.Graphics.AxW._Init.
call(this.FP={I:this},0);this.__proto__=C.AsP;},_Done:function(){this.__proto__=
C.Mo;this.Cp._Done();this.G_._Done();this.Wi._Done();this.FP._Done();C.Mo._Done.
call(this);},_ReInit:function(){C.Mo._ReInit.call(this);this.Cp._ReInit();this.G_.
_ReInit();this.Wi._ReInit();this.FP._ReInit();},_Mark:function(D){var B;C.Mo._Mark.
call(this,D);if((B=this.AdK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rf={Sb:function(){return null;},Sa:function(
){return null;},Aea:function(){return this.Sb();},Ad$:function(){return this.Sa(
);},_Init:function(aArg){this.__proto__=C.Rf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUC={Sb:function(){var Ao=A._NewObject(C.AsO,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajs=
false;Ao.ZC=true;Ao.AcG=false;Ao.Ako=[this,this.ApH];return Ao;},Sa:function(){var
Ao=A._NewObject(C.AsO,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;return Ao;},Aea:function(
){var Ao=C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var
Ao=A._NewObject(C.AsO,0);Ao.Dt=false;Ao.Bw=true;Ao.Ajj=true;Ao.Q7=false;return Ao;
},ApH:function(G){var B;var Ao=(C.AsO.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C4[1]/2)|0)];Ao.Asd=pos;},_Init:function(aArg){C.Rf._Init.
call(this,aArg);this.__proto__=C.AUC;},_className:"Effects::ShowHideTransition"};
C.Aek={ACv:500,Sb:function(){var Ao=A._NewObject(C.Ae$,0);Ao.Dt=true;Ao.Bw=true;
Ao.Ajs=false;Ao.ZC=true;Ao.AcG=true;Ao.Ad6=false;Ao.Ako=[this,this.ApH];Ao.Cp.Fp(
this.ACv);Ao.Cp.Cw=0;Ao.Cp.B1=255;Ao.D$.Fp(this.ACv);Ao.D$.WC(23);return Ao;},Sa:
function(){var Ao=A._NewObject(C.Axf,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;Ao.AcG=
true;Ao.E0.Cw=255;Ao.E0.B1=0;Ao.E0.Fp(this.ACv);return Ao;},Aea:function(){var Ao=
C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var Ao=C.Rf.
Ad$.call(this);Ao.Ajj=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApH:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ao.D$.B1=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G8)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rf._Init.call(this,aArg);this.__proto__=C.Aek;
},_className:"Effects::FadeInOutTransition"};C.AGF={Ki:0x12,AuW:0,Ad6:false,Sb:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajs=false;Ao.ZC=true;Ao.
AcG=true;Ao.Ad6=this.Ad6;Ao.Ako=[this,this.ApH];Ao.Cp.Fp(500);Ao.Cp.Akx(0);Ao.Cp.
Cw=0;Ao.Cp.B1=255;Ao.D$.Fp(500);Ao.D$.WC(23);Ao.D$.AFH(0);Ao.D$.AFI(0);Ao.D$.AwC(
3);Ao.D$.AEL(0.5);Ao.D$.AFs(3);Ao.D$.AES(3);Ao.D$.AE2(0.5);return Ao;},Sa:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;Ao.AcG=true;Ao.
Ad6=this.Ad6;Ao.Ako=[this,this.A27];Ao.Cp.Cw=255;Ao.Cp.B1=0;Ao.Cp.Fp(500);Ao.Cp.
Akx(0);Ao.D$.Fp(500);Ao.D$.WC(23);Ao.D$.AFH(0);Ao.D$.AFI(0);Ao.D$.AwC(3);Ao.D$.AEL(
0.5);Ao.D$.AFs(3);Ao.D$.AES(3);Ao.D$.AE2(0.5);return Ao;},Aea:function(){var Ao=
C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var Ao=C.Rf.
Ad$.call(this);Ao.Ajj=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApH:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bu=this.Ki;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C4[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C4[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C4[1]/2)|0)];Ao.D$.B1=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G8)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HC=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuW){case 5:pos=[pos[0],-C4[1]];break;case 3:{
pos=[pos[0],-C4[1]];pos=[HC[0],pos[1]];}break;case 8:pos=[-C4[0],-C4[1]];break;case
2:pos=[HC[0],pos[1]];break;case 7:pos=[-C4[0],pos[1]];break;case 4:pos=[pos[0],HC[
1]];break;case 1:{pos=[pos[0],HC[1]];pos=[HC[0],pos[1]];}break;case 6:{pos=[pos[
0],HC[1]];pos=[-C4[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A27:
function(G){var B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HC=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuW){case 5:pos=[pos[0],HC[1]];break;case 3:{pos=[pos[0],HC[1]];pos=[-
C4[0],pos[1]];}break;case 8:{pos=[pos[0],HC[1]];pos=[HC[0],pos[1]];}break;case 2:
pos=[-C4[0],pos[1]];break;case 7:pos=[HC[0],pos[1]];break;case 4:pos=[pos[0],-C4[
1]];break;case 1:pos=[-C4[0],-C4[1]];break;case 6:{pos=[pos[0],-C4[1]];pos=[HC[0
],pos[1]];}break;default:;}Ao.D$.B1=pos;},_Init:function(aArg){C.Rf._Init.call(this
,aArg);this.__proto__=C.AGF;},_className:"Effects::SlideTransition"};C.Afh={Sb:function(
){var Ao=A._NewObject(C.AsP,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajs=false;Ao.ZC=true;Ao.
AcG=true;Ao.Ako=[this,this.ApH];Ao.Cp.Fp(500);Ao.Cp.Akx(0);Ao.Cp.Cw=0;Ao.Cp.B1=255;
Ao.G_.Fp(500);Ao.G_.WC(23);Ao.G_.AFH(0);Ao.G_.AFI(0);Ao.G_.AwC(3);Ao.G_.AEL(0.5);
Ao.G_.AFs(3);Ao.G_.AES(3);Ao.G_.AE2(0.5);Ao.Wi.Afg(0.5,0.5,1);return Ao;},Sa:function(
){var Ao=A._NewObject(C.AsP,0);Ao.Dt=false;Ao.Bw=false;Ao.Q7=true;Ao.AcG=true;Ao.
Ako=[this,this.A27];Ao.Cp.Cw=255;Ao.Cp.B1=0;Ao.Cp.Fp(500);Ao.Cp.Akx(0);Ao.G_.Fp(
500);Ao.G_.WC(23);Ao.G_.AFH(0);Ao.G_.AFI(0);Ao.G_.AwC(3);Ao.G_.AEL(0.5);Ao.G_.AFs(
3);Ao.G_.AES(3);Ao.G_.AE2(0.5);Ao.Wi.Afg(0.5,0.5,1);return Ao;},Aea:function(){var
Ao=C.Rf.Aea.call(this);Ao.ZC=false;Ao.Bw=true;return Ao;},Ad$:function(){var Ao=
C.Rf.Ad$.call(this);Ao.Ajj=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApH:function(
G){var B;var Ao=(C.AsP.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C4=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C4[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C4[1]/2)|0)];Ao.Ut=A.abf(pos,[(C4[0]/2)|0,(C4[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fo())||!Ao.P.G8)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Ut,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A27:function(G){var Ao=(C.AsP.isPrototypeOf(G)?G:null);Ao.
Ut=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rf._Init.call(this,aArg);this.__proto__=
C.Afh;},_className:"Effects::ScaleTransition"};C.AhN={BEf:0,BEW:1,BEY:2,BEX:3,BDH:
4,BDJ:5,BDI:6,BFt:7,BFv:8,BFu:9,BDb:10,BDd:11,BDc:12,BCT:13,BCV:14,BCU:15,BDy:16
,BDA:17,BDz:18,BC4:19,BC6:20,BC5:21,BDx:22,BDL:23,BDw:24,BDM:25,BDi:26};C.BDq={A4H:
0x1,A4G:0x2,A4I:0x4,A4L:0x8,A4K:0x10,A4J:0x20};C.ANZ={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANZ;},_className:"Effects::EffectTimerClass"};C.
Aeg={_Init:function(){C.ANZ._Init.call(this,0);this.PR(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGS={Pi:A.abi(12,0
,null),All:A.abi(12,0,null),_Init:function(aArg){(this.Pi=[]).__proto__=C.AGS.Pi;(
this.All=[]).__proto__=C.AGS.All;this.__proto__=C.AGS;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACC={B8:null,B7:null,A7Y:function(Atp){var Ao=this.B7;while(
!!Ao){Ao.Zi();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B7;while(!!Ao){A.pe(Ao.A2V
,Ao);Ao=Ao.Ah;}},A7X:function(Atp){var Ao=this.B7;while(!!Ao){A.pe(Ao.AKs,Ao);Ao=
Ao.Ah;}this.B7=null;this.B8=null;},SJ:function(Atp){var B;if(!this.B7)this.Mm();
var Ao=this.B7;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApM=null;Ao=Ao.
Ah;}Ao=this.B7;while(!!Ao){(B=Ao.Ako)?B[1].call(B[0],Ao):null;Ao.SJ();Ao=Ao.Ah;}
},Mm:function(){var Ao=this.B7;while(!!Ao&&Ao.AvO())Ao=Ao.Ah;if(!Ao)A.Core.AkV.Mm.
call(this);},Bn_:function(FO){if(!FO)return;if(this.AQZ())throw new Error(BD);if(
FO.Pj!==this)throw new Error(E6);if(!!FO.Ah)FO.Ah.AJ=FO.AJ;else this.B8=FO.AJ;if(
!!FO.AJ)FO.AJ.Ah=FO.Ah;else this.B7=FO.Ah;FO.Pj=null;FO.Ah=null;FO.AJ=null;if(!!
FO.P)FO.P.ApM=null;A.pe(FO.AKs,FO);if(!this.B7)this.Amw();},A4B:function(FO){if(
!FO)return;if(this.AQZ())throw new Error(Hq);if(!!FO.Pj)throw new Error(IT);FO.AJ=
this.B8;FO.Ah=null;if(!!this.B8)this.B8.Ah=FO;else this.B7=FO;this.B8=FO;FO.Pj=this;
},_Init:function(aArg){A.Core.AkV._Init.call(this,aArg);this.__proto__=C.ACC;},_Mark:
function(D){var B;A.Core.AkV._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsA={_Init:function(){C.AUC._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gk.__proto__=C.E0;C.AF4.__proto__=C.E0;C.ANi.__proto__=C.E0;
C.M5.__proto__=C.E0;C.AsO.__proto__=C.Mo;C.Axf.__proto__=C.Mo;C.Ae$.__proto__=C.
Mo;C.AsP.__proto__=C.Mo;C.AUC.__proto__=C.Rf;C.Aek.__proto__=C.Rf;C.AGF.__proto__=
C.Rf;C.Afh.__proto__=C.Rf;C.ANZ.__proto__=A.Core.Timer;C.ACC.__proto__=A.Core.AkV;
};C._ReInit=function(){var B;if((B=C.Aeg._this))B._ReInit(),C.Aeg._ReInit.call(B
);if((B=C.AsA._this))B._ReInit(),C.AsA._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aeg._this)&&(B._cycle!=D))B._Done(C.Aeg._this=null);if((B=C.AsA._this)&&(
B._cycle!=D))B._Done(C.AsA._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */