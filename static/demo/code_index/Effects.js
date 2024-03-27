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
var E6="The fader doesn\'t belong to this task";var Hp="Trying to add a fader to a task, which is actually running";
var IS="The fader belongs already to a task";
C.E0={MX:null,timer:null,Qr:null,Sx:null,Ahi:null,Td:0,Ai6:0,U7:0,O7:0,AzR:0.001,
Qn:0,Ec:0,Dx:0,ANW:0.5,A43:3,Axe:3,Aux:0.5,VP:3,AUY:0,AUX:0,JO:0,Pp:1000,Pz:0,VZ:
0,AhM:0,Bw:false,AkR:false,AT9:false,Ap2:false,ALi:false,Me:function(G){var B;if(
!this.timer)return;if(!this.Ai6){if(this.AT9)this.Ai6=-1;else this.Ai6=1;this.Td=
this.Ai6;this.Dx=this.timer.Bs;this.Ec=0;this.Qn=-1;}var KB;if((this.Ai6>0)&&(this.
Td>0))KB=this.BAY();else if((this.Ai6<0)&&(this.Td<0))KB=this.BA2();else if(this.
Ai6>0)KB=this.BA0();else KB=this.BA1();if(KB){this.Ar(false);(B=this.Qr)?B[1].call(
B[0],this):null;(B=this.Sx)?B[1].call(B[0],this):null;}},AKO:function(AN){var B;
if(!this.MX&&(((this.AhM===19)||(this.AhM===20))||(this.AhM===21))){var AJq=this.
A43+1;var Byq=Math.sqrt(this.ANW);var RH=0.5;var O;this.MX=A._NewObject(C.AGP,0);
this.MX.Pg.Set(0,1);this.MX.Alh.Set(0,1);for(O=1;O<AJq;O=O+1){this.MX.Pg.Set(O,this.
MX.Pg.Get(O-1)*Byq);this.MX.Alh.Set(O,this.MX.Alh.Get(O-1)*this.ANW);RH=RH+this.
MX.Pg.Get(O);}var Bzd=1/RH;this.MX.Pg.Set(0,0.5);RH=0;for(O=0;O<AJq;O=O+1){this.
MX.Pg.Set(O,this.MX.Pg.Get(O)*Bzd);RH=RH+this.MX.Pg.Get(O);}this.MX.Pg.Set(AJq,this.
MX.Pg.Get(AJq)+(1-RH));}if(this.AkR){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhM){case 1:AN=Math.pow(AN,this.VP);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VP);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VP)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VP))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VP*AN)-1)/(Math.
pow(2.718,this.VP)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VP*AN)-1)
/(Math.pow(2.718,this.VP)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VP*AN)-1)/(Math.pow(2.718,this.VP)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VP*AN)-1)/(Math.pow(2.718,this.VP)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.Aux)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.Aux)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.Aux)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.Aux)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axe)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axe)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axe)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axe)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.MX;var O=0;var GG=0;var K5=Bz.Pg.
Get(0);var D8=1-AN;while(D8>K5){O=O+1;GG=K5;K5=K5+Bz.Pg.Get(O);}AN=(D8-GG)/(K5-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alh.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.MX;var O=0;var GG=0;var K5=Bz.Pg.Get(0);while(AN>K5){O=O+1;GG=K5;K5=
K5+Bz.Pg.Get(O);}AN=(AN-GG)/(K5-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alh.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.MX;var O=0;var GG=0;var K5=Bz.Pg.
Get(0);var LJ=AN*2;var D8=LJ-1;if(LJ<1)D8=-D8;while(D8>K5){O=O+1;GG=K5;K5=K5+Bz.
Pg.Get(O);}D8=(D8-GG)/(K5-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alh.Get(O
)*(1-(D8*D8)));}if(LJ<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap2){var LJ=AN;var AAf=1-LJ;AN=((AAf*LJ)*(this.O7+1))+(LJ*LJ);}else if(this.ALi){
var LJ=AN;var AAf=1-LJ;var Bcu=LJ*LJ;var Bzu=AAf*AAf;AN=(((Bzu*LJ)*(this.O7+1))+((
AAf*Bcu)*(this.U7+2)))+(Bcu*LJ);}}this.AuC(AN);(B=this.Ahi)?B[1].call(B[0],this):
null;},BA2:function(){var Au=(this.timer.Bs-this.Dx)|0;if(Au<0)Au=-Au;var LD=this.
VZ;var Oo=this.VZ+this.Pp;var He=this.Pz+this.Pp;var KB=false;var Ed=this.Qn;if(
!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dx=this.Dx+Oo;}if((this.Ec>0)&&(Au>=
He)){var Ie=(Au/He)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*He);this.Dx=this.Dx+(Ie*He);}
if((this.Ec>2)&&!this.JO)this.Ec=1;if(this.Ec>0)LD=this.Pz;if((this.Ec>=this.JO)&&(
this.JO>0)){KB=true;Ed=0;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzR);else if(Ed>=0)Ed=
0;if(Ed!==this.Qn){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qn){this.Qn=Ed;this.AKO(
Ed);}return KB;},BA1:function(){var Au=(this.Dx-this.timer.Bs)|0;var LD=this.VZ;
var Oo=this.VZ+this.Pp;var He=this.Pz+this.Pp;var KB=false;var Ed=this.Qn;if((this.
Ec>1)&&(Au<0)){var Ie=(((-Au+He)-1)/He)|0;if((this.Ec-Ie)<=0)Ie=this.Ec-1;this.Ec=
this.Ec-Ie;Au=Au+(Ie*He);this.Dx=this.Dx+(Ie*He);}if(((this.Ec===1)&&(Au<0))&&(this.
JO>0)){this.Ec=0;Au=Au+Oo;this.Dx=this.Dx+Oo;}if(((this.Ec===1)&&(Au<0))&&!this.
JO){var Ie=(((-Au+He)-1)/He)|0;Au=Au+(Ie*He);this.Dx=this.Dx+(Ie*He);}if(this.Ec>
0)LD=this.Pz;if(Au<0){KB=true;Ed=1;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzR);else if(
Ed>=0)Ed=1;if(Ed!==this.Qn){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qn){this.Qn=
Ed;this.AKO(Ed);}return KB;},BA0:function(){var Au=(this.Dx-this.timer.Bs)|0;var
LD=this.VZ;var Oo=this.VZ+this.Pp;var He=this.Pz+this.Pp;var KB=false;var Ed=this.
Qn;if((this.Ec>1)&&(Au<0)){var Ie=(((-Au+He)-1)/He)|0;if((this.Ec-Ie)<=0)Ie=this.
Ec-1;this.Ec=this.Ec-Ie;Au=Au+(Ie*He);this.Dx=this.Dx+(Ie*He);}if(((this.Ec===1)&&(
Au<0))&&(this.JO>0)){this.Ec=0;Au=Au+Oo;this.Dx=this.Dx+Oo;}if(((this.Ec===1)&&(
Au<0))&&!this.JO){var Ie=(((-Au+He)-1)/He)|0;Au=Au+(Ie*He);this.Dx=this.Dx+(Ie*He
);}if(this.Ec>0)LD=this.Pz;if(Au<0){KB=true;Ed=0;}else if(Au>=LD)Ed=(Au-LD)*this.
AzR;else if(Ed>=0)Ed=0;if(Ed!==this.Qn){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qn){this.Qn=Ed;this.AKO(Ed);}return KB;},BAY:function(){var Au=(this.timer.Bs-this.
Dx)|0;if(Au<0)Au=-Au;var LD=this.VZ;var Oo=this.VZ+this.Pp;var He=this.Pz+this.Pp;
var KB=false;var Ed=this.Qn;if(!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dx=this.
Dx+Oo;}if((this.Ec>0)&&(Au>=He)){var Ie=(Au/He)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*He
);this.Dx=this.Dx+(Ie*He);}if((this.Ec>2)&&!this.JO)this.Ec=1;if(this.Ec>0)LD=this.
Pz;if((this.Ec>=this.JO)&&(this.JO>0)){KB=true;Ed=1;}else if(Au>=LD)Ed=(Au-LD)*this.
AzR;else if(Ed>=0)Ed=1;if(Ed!==this.Qn){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qn){this.Qn=Ed;this.AKO(Ed);}return KB;},Ae6:function(E){if(this.AT9===E)return;
this.AT9=E;if(!this.Bw||!this.Ai6)return;if(E)this.Td=-1;else this.Td=1;this.Dx=(
this.timer.Avf()*2)-this.Dx;},AEY:function(E){if(E<0)E=0;if(E>1)E=1;this.ANW=E;}
,AEO:function(E){if(E<1)E=1;if(E>10)E=10;this.A43=E;this.MX=null;},AFo:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axe=E;},AEH:function(E){if(E<0)E=0;if(E>10)E=10;
this.Aux=E;},Awx:function(E){if(E<1)E=1;if(E>100)E=100;this.VP=E;},AFF:function(
E){if(this.AUY===E)return;this.AUY=E;if(this.AhM===26){this.U7=E;this.Ap2=(this.
O7===this.U7)&&!!this.O7;this.ALi=!this.Ap2&&(this.O7!==this.U7);}},AFE:function(
E){if(this.AUX===E)return;this.AUX=E;if(this.AhM===26){this.O7=E;this.Ap2=(this.
O7===this.U7)&&!!this.O7;this.ALi=!this.Ap2&&(this.O7!==this.U7);}},Wy:function(
E){if(this.AhM===E)return;this.AhM=E;this.MX=null;switch(E){case 24:{this.O7=-1.1;
this.U7=1.1;}break;case 22:{this.O7=-1;this.U7=-2;}break;case 23:{this.O7=2;this.
U7=1;}break;case 25:{this.O7=1.1;this.U7=-1.1;}break;case 0:{this.O7=0;this.U7=0;
}break;default:{this.O7=this.AUX;this.U7=this.AUY;}}this.Ap2=(this.O7===this.U7)&&
!!this.O7;this.ALi=!this.Ap2&&(this.O7!==this.U7);},HM:function(E){if(E<0)E=0;this.
JO=E;},Fp:function(E){if(E<15)E=15;this.Pp=E;this.AzR=1/E;},Uj:function(E){if(E<
0)E=0;this.Pz=E;},Aku:function(E){if(E<0)E=0;this.VZ=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aed);A.zV([this,this.Me],this.timer
,0);this.Ai6=0;A.pe([this,this.Me],this);}},AuC:function(Aag){},AnQ:function(G){
this.Ar(false);},AnO:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sx)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahi)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gk={Q:null,A4:0,B1:255,Cw:0,AuC:function(Aag
){var F;this.A4=this.Cw+(Math.round((this.B1-this.Cw)*Aag)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gk;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF1={
Q:null,A4:A.wf,B1:Cc,Cw:A.wf,AuC:function(Aag){var F;var Eo=this.Cw[0];var Dg=this.
Cw[1];Eo=Eo+(Math.round((this.B1[0]-Eo)*Aag)|0);Dg=Dg+(Math.round((this.B1[1]-Dg
)*Aag)|0);this.A4=[Eo,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AF1;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANe={Q:null,A4:0,B1:0xFFFFFFFF,Cw:0,AuC:
function(Aag){var F;var Pe=this.Cw&0xFF;var Aas=(this.Cw>>8)&0xFF;var Aln=(this.
Cw>>16)&0xFF;var Alg=(this.Cw>>24)&0xFF;Pe=Pe+((((this.B1&0xFF)-Pe)*Aag)|0);Aas=
Aas+(((((this.B1>>8)&0xFF)-Aas)*Aag)|0);Aln=Aln+(((((this.B1>>16)&0xFF)-Aln)*Aag
)|0);Alg=Alg+(((((this.B1>>24)&0xFF)-Alg)*Aag)|0);if(Pe<0)Pe=0;if(Pe>255)Pe=255;
if(Aas<0)Aas=0;if(Aas>255)Aas=255;if(Aln<0)Aln=0;if(Aln>255)Aln=255;if(Alg<0)Alg=
0;if(Alg>255)Alg=255;this.A4=(Pe&0xFF)|((Aas&0xFF)<<8)|((Aln&0xFF)<<16)|((Alg&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANe;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M5={A4:0,B1:1,Cw:0,AuC:function(Aag){this.A4=this.Cw+((
this.B1-this.Cw)*Aag);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M5;},_className:"Effects::FloatEffect"};C.TD={timer:null,Q:null,Ec:0,Dx:0,JO:0
,Pp:1000,Pz:1000,VZ:0,Bw:false,Cw:false,B1:true,Me:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dx)|0;var Oo=this.VZ+this.Pp;var He=this.Pz+this.Pp;var LD=this.VZ;var Jj=this.Ec;
if(!Jj&&(Au>=Oo)){Jj=1;Au=Au-Oo;}if((Jj>0)&&(Au>=He)){var Ie=(Au/He)|0;Au=Au-(Ie
*He);Jj=Jj+Ie;}if((Jj>2)&&!this.JO)Jj=1;if(Jj!==this.Ec){this.Dx=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jj;}if(Jj>0)LD=this.Pz;var KB=(Jj>=this.JO)&&(
this.JO>0);if(!!this.Q){if(!KB&&(Au>=LD))(F=this.Q,F[2].call(F[0],this.Cw));if(KB||((
Au<LD)&&(Jj>0)))(F=this.Q,F[2].call(F[0],this.B1));}if(KB)this.Ar(false);},HM:function(
E){if(E<0)E=0;this.JO=E;},Fp:function(E){if(E<100)E=100;this.Pp=E;},Uj:function(
E){if(E<0)E=0;this.Pz=E;},Aku:function(E){if(E<0)E=0;this.VZ=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aed);A.zV([this,this.Me
],this.timer,0);this.Ec=-1;}},AnQ:function(G){this.Ar(false);},AnO:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TD;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mo={Ph:null,AJ:null,Ah:null,Ab:null,P:null,AKq:null,A2J:null,Akl:null,Ds:true,
Bw:true,AcD:true,Ajg:false,Ajp:true,ZB:true,Q4:true,Mm:function(){if(!!this.Ph)this.
Ph.Mm();},AvJ:function(){return true;},Zh:function(){},SF:function(){this.Mm();}
,_Init:function(aArg){this.__proto__=C.Mo;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ph)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKq)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2J)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsI={Ar$:A.wf,MQ:false,AvJ:function(){return this.MQ;},Zh:function(
){if(!this.Ds&&!!this.P.Ab)this.P.Z(false);if((!this.Ds&&this.Q4)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(!this.Bw)this.P.Ar(false);},SF:function(){if(this.Bw)this.P.Ar(
true);if((this.Ds||this.Ajg)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Ds&&this.ZB)this.P.Ab.ZA(this.P);if(this.Ds&&this.Ajp)this.P.Ab.Bb(this.P);
if(this.Ds&&!this.AcD)this.P.H(A.abJ(this.P.M,this.Ar$));if(this.Ds){this.P.Dj(255
);this.P.Z(true);}if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MQ=true;
this.Mm();},_Init:function(aArg){C.Mo._Init.call(this,aArg);this.__proto__=C.AsI;
},_className:"Effects::VisibilityFader"};C.Axa={E0:null,MQ:false,Ap5:false,AvJ:function(
){return this.MQ;},Zh:function(){if(this.Ds)this.P.Dj(this.E0.B1);if(!this.Ds&&!
this.P.G7)this.P.Z(false);if((!this.Ds&&this.Q4)&&!!this.P.Ab)this.P.Ab.HN(this.
P);if(!this.Bw)this.P.Ar(false);},SF:function(){var B;if(this.AcD){if(this.P.Fo(
)&&!!this.P.Ab)this.E0.Cw=this.P.G7;else this.E0.Cw=0;}var AzU=((!this.P.Ab||!this.
P.G7)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AzV=((!this.Ds&&((!this.P.Ab||!this.P.Fo())||this.Q4
))||!this.E0.B1)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AzU&&AzV){this.E0.Cw=0;this.E0.B1=0;}this.Ap5=this.P.ASb(
);if(this.Bw)this.P.Ar(true);if((this.Ds||this.Ajg)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Ds&&this.ZB)this.P.Ab.ZA(this.P);if(this.Ds&&this.Ajp
)this.P.Ab.Bb(this.P);if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Ds&&!this.P.Fo()){this.P.Dj(this.E0.Cw);this.P.Z(true);}if(!this.Ds&&((!this.P.Ab||
!this.P.Fo())||!this.P.G7)){this.MQ=true;this.Mm();return;}if(!this.Ds&&(this.E0.
Cw===this.E0.B1))this.P.Dj(this.E0.Cw);if(this.P.G7===this.E0.B1){this.MQ=true;this.
Mm();return;}if(this.E0.Cw===this.E0.B1){this.MQ=true;this.Mm();return;}if(!this.
E0.JO)this.E0.HM(1);this.E0.Q=[B=this.P,B.Awc,B.AZT];this.E0.Ae6(false);this.E0.
AkR=false;this.E0.Sx=[this,this.AiK];this.E0.Ahi=null;this.E0.Ar(true);},AiK:function(
G){this.MQ=true;this.Mm();},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.Gk.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axa;},_Done:function(){this.__proto__=
C.Mo;this.E0._Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mo._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae8={
Cp:null,D$:null,Ad3:false,MQ:false,Ap5:false,AvJ:function(){return this.MQ;},Zh:
function(){if(this.Ds){this.P.Dj(this.Cp.B1);this.P.H(A.abJ(this.P.M,this.D$.B1)
);}if(!this.Ds&&!this.P.G7)this.P.Z(false);if((!this.Ds&&this.Q4)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(this.Ad3)this.P.ArB(this.Ap5);if(!this.Bw)this.P.Ar(false);},
SF:function(){var B;if(this.AcD){if(this.P.Fo()&&!!this.P.Ab)this.Cp.Cw=this.P.G7;
else this.Cp.Cw=0;this.D$.Cw=this.P.M.slice(0,2);}var AzU=((!this.P.Ab||!this.P.
G7)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AzV=((!this.Ds&&((!this.P.Ab||!this.P.Fo())||this.Q4
))||!this.Cp.B1)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B1
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzU&&AzV){
this.Cp.Cw=0;this.Cp.B1=0;this.D$.Cw=this.D$.B1;}this.Ap5=this.P.ASb();if(this.Bw
)this.P.Ar(true);if((this.Ds||this.Ajg)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Ds&&this.ZB)this.P.Ab.ZA(this.P);if(this.Ds&&this.Ajp)this.P.Ab.Bb(
this.P);if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Ds&&!this.P.
Fo()){this.P.H(A.abJ(this.P.M,this.D$.Cw));this.P.Dj(this.Cp.Cw);this.P.Z(true);
}if(!this.Ds&&((!this.P.Ab||!this.P.Fo())||!this.P.G7)){this.MQ=true;this.Mm();return;
}if(!this.Ds&&A.aaX(this.D$.Cw,this.D$.B1))this.P.H(A.abJ(this.P.M,this.D$.Cw));
if(!this.Ds&&(this.Cp.Cw===this.Cp.B1))this.P.Dj(this.Cp.Cw);if((this.P.G7===this.
Cp.B1)&&A.aaX(this.P.M.slice(0,2),this.D$.B1)){this.MQ=true;this.Mm();return;}if((
this.Cp.Cw===this.Cp.B1)&&A.aaX(this.D$.Cw,this.D$.B1)){this.MQ=true;this.Mm();return;
}if(!this.Cp.JO)this.Cp.HM(1);if(!this.D$.JO)this.D$.HM(1);if(this.Ad3)this.P.ArB(
true);this.D$.Q=null;this.D$.Ae6(false);this.D$.AkR=false;this.D$.Sx=[this,this.
AiK];this.D$.Ahi=[this,this.AAo];this.Cp.Q=[B=this.P,B.Awc,B.AZT];this.Cp.Ae6(false
);this.Cp.AkR=false;this.Cp.Sx=[this,this.AiK];this.Cp.Ahi=null;this.D$.Ar(!A.aaX(
this.D$.Cw,this.D$.B1));this.Cp.Ar(this.Cp.Cw!==this.Cp.B1);},AiK:function(G){this.
MQ=!this.Cp.Bw&&!this.D$.Bw;this.Mm();},AAo:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A4));},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.Gk._Init.call(this.
Cp={I:this},0);C.AF1._Init.call(this.D$={I:this},0);this.__proto__=C.Ae8;},_Done:
function(){this.__proto__=C.Mo;this.Cp._Done();this.D$._Done();C.Mo._Done.call(this
);},_ReInit:function(){C.Mo._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mo._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsJ={AdH:null,Cp:null,G9:null,Wf:null,FP:null,Uq:A.wf,AkE:A.wf,MQ:false,Ap5:
false,AvJ:function(){return this.MQ;},Zh:function(){if(this.Ds){this.P.Dj(this.Cp.
B1);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Uq));this.P.Z(true);}if(
!this.Ds&&!this.Cp.B1){this.P.Dj(0);this.P.Z(false);}if(((!this.Ds&&(this.Cp.B1>
0))&&!!this.P.Ab)&&!this.Q4){this.P.Dj(this.Cp.B1);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Uq));this.P.Z(true);}if((!this.Ds&&this.Q4)&&!!this.P.Ab)
this.P.Ab.HN(this.P);this.P.ArB(this.Ap5);if(!!this.AdH)this.Ab.HN(this.AdH);if(
!this.Bw)this.P.Ar(false);},SF:function(){var B;if(this.AcD){if(this.P.Fo()&&!!this.
P.Ab)this.Cp.Cw=this.P.G7;else this.Cp.Cw=0;this.AkE=A.aaI(this.P.M);}var AzU=((
!this.P.Ab||!this.P.G7)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AzV=((!this.Ds&&((!this.P.Ab||!this.
P.Fo())||this.Q4))||!this.Cp.B1)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Uq),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzU&&
AzV){this.Cp.Cw=0;this.Cp.B1=0;this.AkE=this.Uq;this.Wf.A6$();}this.Ap5=this.P.ASb(
);if(this.Bw)this.P.Ar(true);if((this.Ds||this.Ajg)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Ds&&this.ZB)this.P.Ab.ZA(this.P);if(this.Ds&&this.Ajp
)this.P.Ab.Bb(this.P);if(!this.Ds&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Ds&&!this.P.Fo())this.P.Dj(this.Cp.Cw);if((!this.Ds&&A.aaX(this.AkE,this.Uq))&&this.
Wf.ADK())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkE));if(!this.Ds&&(
this.Cp.Cw===this.Cp.B1))this.P.Dj(this.Cp.Cw);if(!this.Ds&&((!this.P.Ab||!this.
P.Fo())||!this.P.G7)){this.MQ=true;this.Mm();return;}if(((this.Ds&&(this.P.G7===
this.Cp.B1))&&A.aaX(A.aaI(this.P.M),this.Uq))&&this.P.Fo()){this.MQ=true;this.Mm(
);return;}if(((!this.Ds&&(this.P.G7===this.Cp.B1))&&A.aaX(A.aaI(this.P.M),this.Uq
))&&this.Wf.ADK()){this.MQ=true;this.Mm();return;}if(((this.Cp.Cw===this.Cp.B1)&&
A.aaX(this.AkE,this.Uq))&&this.Wf.ADK()){this.MQ=true;this.Mm();return;}this.P.ArB(
true);this.P.Z(false);this.AdH=A._NewObject(A.acg.AVm,0);this.AdH.BlX(this.P);this.
AdH.Dj(this.Cp.Cw);this.AdH.BmS(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL0(this.AdH,this.P);if(!this.Cp.JO)this.Cp.HM(1);if(!this.G9.JO)this.G9.HM(
1);this.G9.Ae6(false);this.G9.AkR=false;this.G9.Sx=[this,this.AiK];this.G9.Ahi=[
this,this.AAo];if(this.Ds){this.G9.Cw=0;this.G9.B1=1;}else{this.G9.Cw=1;this.G9.
B1=0;}this.Cp.Q=[B=this.AdH,B.Awc,B.Dj];this.Cp.Ae6(false);this.Cp.AkR=false;this.
Cp.Sx=[this,this.AiK];this.Cp.Ahi=null;this.G9.Ar(!A.aaX(this.AkE,this.Uq)||!this.
Wf.ADK());this.Cp.Ar(this.Cp.Cw!==this.Cp.B1);},AiK:function(G){this.MQ=!this.Cp.
Bw&&!this.G9.Bw;this.Mm();},AAo:function(G){var B;var ABc=A.abe(this.Uq,this.AkE
);if(!this.Ds)ABc=[-ABc[0],-ABc[1]];this.FP.A6$();this.FP.AgR=this.Wf.AgR;this.FP.
Bpe(ABc[0],ABc[1],0);this.FP.BiS(this.Wf,this.FP,this.G9.A4);if(this.Ds)this.AdH.
A$s(this.AkE,this.FP);else this.AdH.A$s(this.Uq,this.FP);},_Init:function(aArg){
C.Mo._Init.call(this,aArg);C.Gk._Init.call(this.Cp={I:this},0);C.M5._Init.call(this.
G9={I:this},0);A.Graphics.AxR._Init.call(this.Wf={I:this},0);A.Graphics.AxR._Init.
call(this.FP={I:this},0);this.__proto__=C.AsJ;},_Done:function(){this.__proto__=
C.Mo;this.Cp._Done();this.G9._Done();this.Wf._Done();this.FP._Done();C.Mo._Done.
call(this);},_ReInit:function(){C.Mo._ReInit.call(this);this.Cp._ReInit();this.G9.
_ReInit();this.Wf._ReInit();this.FP._ReInit();},_Mark:function(D){var B;C.Mo._Mark.
call(this,D);if((B=this.AdH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rc={R_:function(){return null;},R9:function(
){return null;},Ad9:function(){return this.R_();},Ad8:function(){return this.R9(
);},_Init:function(aArg){this.__proto__=C.Rc;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUy={R_:function(){var Ao=A._NewObject(C.AsI,0);Ao.Ds=true;Ao.Bw=true;Ao.Ajp=
false;Ao.ZB=true;Ao.AcD=false;Ao.Akl=[this,this.ApE];return Ao;},R9:function(){var
Ao=A._NewObject(C.AsI,0);Ao.Ds=false;Ao.Bw=false;Ao.Q4=true;return Ao;},Ad9:function(
){var Ao=C.Rc.Ad9.call(this);Ao.ZB=false;Ao.Bw=true;return Ao;},Ad8:function(){var
Ao=A._NewObject(C.AsI,0);Ao.Ds=false;Ao.Bw=true;Ao.Ajg=true;Ao.Q4=false;return Ao;
},ApE:function(G){var B;var Ao=(C.AsI.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C3[1]/2)|0)];Ao.Ar$=pos;},_Init:function(aArg){C.Rc._Init.
call(this,aArg);this.__proto__=C.AUy;},_className:"Effects::ShowHideTransition"};
C.Aeh={ACs:500,R_:function(){var Ao=A._NewObject(C.Ae8,0);Ao.Ds=true;Ao.Bw=true;
Ao.Ajp=false;Ao.ZB=true;Ao.AcD=true;Ao.Ad3=false;Ao.Akl=[this,this.ApE];Ao.Cp.Fp(
this.ACs);Ao.Cp.Cw=0;Ao.Cp.B1=255;Ao.D$.Fp(this.ACs);Ao.D$.Wy(23);return Ao;},R9:
function(){var Ao=A._NewObject(C.Axa,0);Ao.Ds=false;Ao.Bw=false;Ao.Q4=true;Ao.AcD=
true;Ao.E0.Cw=255;Ao.E0.B1=0;Ao.E0.Fp(this.ACs);return Ao;},Ad9:function(){var Ao=
C.Rc.Ad9.call(this);Ao.ZB=false;Ao.Bw=true;return Ao;},Ad8:function(){var Ao=C.Rc.
Ad8.call(this);Ao.Ajg=true;Ao.Q4=false;Ao.Bw=true;return Ao;},ApE:function(G){var
B;var Ao=(C.Ae8.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B1=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G7)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.Aeh;
},_className:"Effects::FadeInOutTransition"};C.AGC={Kg:0x12,AuR:0,Ad3:false,R_:function(
){var Ao=A._NewObject(C.Ae8,0);Ao.Ds=true;Ao.Bw=true;Ao.Ajp=false;Ao.ZB=true;Ao.
AcD=true;Ao.Ad3=this.Ad3;Ao.Akl=[this,this.ApE];Ao.Cp.Fp(500);Ao.Cp.Aku(0);Ao.Cp.
Cw=0;Ao.Cp.B1=255;Ao.D$.Fp(500);Ao.D$.Wy(23);Ao.D$.AFE(0);Ao.D$.AFF(0);Ao.D$.Awx(
3);Ao.D$.AEH(0.5);Ao.D$.AFo(3);Ao.D$.AEO(3);Ao.D$.AEY(0.5);return Ao;},R9:function(
){var Ao=A._NewObject(C.Ae8,0);Ao.Ds=false;Ao.Bw=false;Ao.Q4=true;Ao.AcD=true;Ao.
Ad3=this.Ad3;Ao.Akl=[this,this.A2V];Ao.Cp.Cw=255;Ao.Cp.B1=0;Ao.Cp.Fp(500);Ao.Cp.
Aku(0);Ao.D$.Fp(500);Ao.D$.Wy(23);Ao.D$.AFE(0);Ao.D$.AFF(0);Ao.D$.Awx(3);Ao.D$.AEH(
0.5);Ao.D$.AFo(3);Ao.D$.AEO(3);Ao.D$.AEY(0.5);return Ao;},Ad9:function(){var Ao=
C.Rc.Ad9.call(this);Ao.ZB=false;Ao.Bw=true;return Ao;},Ad8:function(){var Ao=C.Rc.
Ad8.call(this);Ao.Ajg=true;Ao.Q4=false;Ao.Bw=true;return Ao;},ApE:function(G){var
B;var Ao=(C.Ae8.isPrototypeOf(G)?G:null);var Bu=this.Kg;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C3[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C3[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B1=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G7)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HC=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuR){case 5:pos=[pos[0],-C3[1]];break;case 3:{
pos=[pos[0],-C3[1]];pos=[HC[0],pos[1]];}break;case 8:pos=[-C3[0],-C3[1]];break;case
2:pos=[HC[0],pos[1]];break;case 7:pos=[-C3[0],pos[1]];break;case 4:pos=[pos[0],HC[
1]];break;case 1:{pos=[pos[0],HC[1]];pos=[HC[0],pos[1]];}break;case 6:{pos=[pos[
0],HC[1]];pos=[-C3[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A2V:
function(G){var B;var Ao=(C.Ae8.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HC=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuR){case 5:pos=[pos[0],HC[1]];break;case 3:{pos=[pos[0],HC[1]];pos=[-
C3[0],pos[1]];}break;case 8:{pos=[pos[0],HC[1]];pos=[HC[0],pos[1]];}break;case 2:
pos=[-C3[0],pos[1]];break;case 7:pos=[HC[0],pos[1]];break;case 4:pos=[pos[0],-C3[
1]];break;case 1:pos=[-C3[0],-C3[1]];break;case 6:{pos=[pos[0],-C3[1]];pos=[HC[0
],pos[1]];}break;default:;}Ao.D$.B1=pos;},_Init:function(aArg){C.Rc._Init.call(this
,aArg);this.__proto__=C.AGC;},_className:"Effects::SlideTransition"};C.Afe={R_:function(
){var Ao=A._NewObject(C.AsJ,0);Ao.Ds=true;Ao.Bw=true;Ao.Ajp=false;Ao.ZB=true;Ao.
AcD=true;Ao.Akl=[this,this.ApE];Ao.Cp.Fp(500);Ao.Cp.Aku(0);Ao.Cp.Cw=0;Ao.Cp.B1=255;
Ao.G9.Fp(500);Ao.G9.Wy(23);Ao.G9.AFE(0);Ao.G9.AFF(0);Ao.G9.Awx(3);Ao.G9.AEH(0.5);
Ao.G9.AFo(3);Ao.G9.AEO(3);Ao.G9.AEY(0.5);Ao.Wf.Afd(0.5,0.5,1);return Ao;},R9:function(
){var Ao=A._NewObject(C.AsJ,0);Ao.Ds=false;Ao.Bw=false;Ao.Q4=true;Ao.AcD=true;Ao.
Akl=[this,this.A2V];Ao.Cp.Cw=255;Ao.Cp.B1=0;Ao.Cp.Fp(500);Ao.Cp.Aku(0);Ao.G9.Fp(
500);Ao.G9.Wy(23);Ao.G9.AFE(0);Ao.G9.AFF(0);Ao.G9.Awx(3);Ao.G9.AEH(0.5);Ao.G9.AFo(
3);Ao.G9.AEO(3);Ao.G9.AEY(0.5);Ao.Wf.Afd(0.5,0.5,1);return Ao;},Ad9:function(){var
Ao=C.Rc.Ad9.call(this);Ao.ZB=false;Ao.Bw=true;return Ao;},Ad8:function(){var Ao=
C.Rc.Ad8.call(this);Ao.Ajg=true;Ao.Q4=false;Ao.Bw=true;return Ao;},ApE:function(
G){var B;var Ao=(C.AsJ.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C3[1]/2)|0)];Ao.Uq=A.abf(pos,[(C3[0]/2)|0,(C3[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fo())||!Ao.P.G7)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Uq,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A2V:function(G){var Ao=(C.AsJ.isPrototypeOf(G)?G:null);Ao.
Uq=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=
C.Afe;},_className:"Effects::ScaleTransition"};C.AhM={BDS:0,BEx:1,BEz:2,BEy:3,BDi:
4,BDk:5,BDj:6,BE6:7,BE8:8,BE7:9,BCO:10,BCQ:11,BCP:12,BCu:13,BCw:14,BCv:15,BC$:16
,BDb:17,BDa:18,BCF:19,BCH:20,BCG:21,BC_:22,BDm:23,BC9:24,BDn:25,BCV:26};C.BC3={A4v:
0x1,A4u:0x2,A4w:0x4,A4z:0x8,A4y:0x10,A4x:0x20};C.ANV={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANV;},_className:"Effects::EffectTimerClass"};C.
Aed={_Init:function(){C.ANV._Init.call(this,0);this.PQ(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGP={Pg:A.abi(12,0
,null),Alh:A.abi(12,0,null),_Init:function(aArg){(this.Pg=[]).__proto__=C.AGP.Pg;(
this.Alh=[]).__proto__=C.AGP.Alh;this.__proto__=C.AGP;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACz={B8:null,B7:null,A7N:function(Atk){var Ao=this.B7;while(
!!Ao){Ao.Zh();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B7;while(!!Ao){A.pe(Ao.A2J
,Ao);Ao=Ao.Ah;}},A7M:function(Atk){var Ao=this.B7;while(!!Ao){A.pe(Ao.AKq,Ao);Ao=
Ao.Ah;}this.B7=null;this.B8=null;},SF:function(Atk){var B;if(!this.B7)this.Mm();
var Ao=this.B7;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApJ=null;Ao=Ao.
Ah;}Ao=this.B7;while(!!Ao){(B=Ao.Akl)?B[1].call(B[0],Ao):null;Ao.SF();Ao=Ao.Ah;}
},Mm:function(){var Ao=this.B7;while(!!Ao&&Ao.AvJ())Ao=Ao.Ah;if(!Ao)A.Core.AkS.Mm.
call(this);},BnL:function(FO){if(!FO)return;if(this.AQV())throw new Error(BD);if(
FO.Ph!==this)throw new Error(E6);if(!!FO.Ah)FO.Ah.AJ=FO.AJ;else this.B8=FO.AJ;if(
!!FO.AJ)FO.AJ.Ah=FO.Ah;else this.B7=FO.Ah;FO.Ph=null;FO.Ah=null;FO.AJ=null;if(!!
FO.P)FO.P.ApJ=null;A.pe(FO.AKq,FO);if(!this.B7)this.Amt();},A4p:function(FO){if(
!FO)return;if(this.AQV())throw new Error(Hp);if(!!FO.Ph)throw new Error(IS);FO.AJ=
this.B8;FO.Ah=null;if(!!this.B8)this.B8.Ah=FO;else this.B7=FO;this.B8=FO;FO.Ph=this;
},_Init:function(aArg){A.Core.AkS._Init.call(this,aArg);this.__proto__=C.ACz;},_Mark:
function(D){var B;A.Core.AkS._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.Asv={_Init:function(){C.AUy._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gk.__proto__=C.E0;C.AF1.__proto__=C.E0;C.ANe.__proto__=C.E0;
C.M5.__proto__=C.E0;C.AsI.__proto__=C.Mo;C.Axa.__proto__=C.Mo;C.Ae8.__proto__=C.
Mo;C.AsJ.__proto__=C.Mo;C.AUy.__proto__=C.Rc;C.Aeh.__proto__=C.Rc;C.AGC.__proto__=
C.Rc;C.Afe.__proto__=C.Rc;C.ANV.__proto__=A.Core.Timer;C.ACz.__proto__=A.Core.AkS;
};C._ReInit=function(){var B;if((B=C.Aed._this))B._ReInit(),C.Aed._ReInit.call(B
);if((B=C.Asv._this))B._ReInit(),C.Asv._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aed._this)&&(B._cycle!=D))B._Done(C.Aed._this=null);if((B=C.Asv._this)&&(
B._cycle!=D))B._Done(C.Asv._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */