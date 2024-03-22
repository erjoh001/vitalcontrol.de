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
var E7="The fader doesn\'t belong to this task";var Hp="Trying to add a fader to a task, which is actually running";
var IS="The fader belongs already to a task";
C.E3={MX:null,timer:null,Qq:null,SB:null,Ahl:null,Th:0,Ajd:0,U$:0,O8:0,AzX:0.001,
Qm:0,Ec:0,Dw:0,AN0:0.5,A5d:3,Axk:3,AuE:0.5,VU:3,AU5:0,AU4:0,JN:0,Pp:1000,Py:0,V4:
0,AhP:0,Bw:false,Ak0:false,AUe:false,Aqa:false,ALm:false,Me:function(G){var B;if(
!this.timer)return;if(!this.Ajd){if(this.AUe)this.Ajd=-1;else this.Ajd=1;this.Th=
this.Ajd;this.Dw=this.timer.Bs;this.Ec=0;this.Qm=-1;}var KC;if((this.Ajd>0)&&(this.
Th>0))KC=this.BBe();else if((this.Ajd<0)&&(this.Th<0))KC=this.BBh();else if(this.
Ajd>0)KC=this.BBf();else KC=this.BBg();if(KC){this.Ar(false);(B=this.Qq)?B[1].call(
B[0],this):null;(B=this.SB)?B[1].call(B[0],this):null;}},AKS:function(AN){var B;
if(!this.MX&&(((this.AhP===19)||(this.AhP===20))||(this.AhP===21))){var AJu=this.
A5d+1;var ByH=Math.sqrt(this.AN0);var RL=0.5;var O;this.MX=A._NewObject(C.AGV,0);
this.MX.Pg.Set(0,1);this.MX.Als.Set(0,1);for(O=1;O<AJu;O=O+1){this.MX.Pg.Set(O,this.
MX.Pg.Get(O-1)*ByH);this.MX.Als.Set(O,this.MX.Als.Get(O-1)*this.AN0);RL=RL+this.
MX.Pg.Get(O);}var Bzu=1/RL;this.MX.Pg.Set(0,0.5);RL=0;for(O=0;O<AJu;O=O+1){this.
MX.Pg.Set(O,this.MX.Pg.Get(O)*Bzu);RL=RL+this.MX.Pg.Get(O);}this.MX.Pg.Set(AJu,this.
MX.Pg.Get(AJu)+(1-RL));}if(this.Ak0){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhP){case 1:AN=Math.pow(AN,this.VU);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VU);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VU)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VU))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VU*AN)-1)/(Math.
pow(2.718,this.VU)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VU*AN)-1)
/(Math.pow(2.718,this.VU)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VU*AN)-1)/(Math.pow(2.718,this.VU)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VU*AN)-1)/(Math.pow(2.718,this.VU)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BC=this.MX;var O=0;var GG=0;var K6=BC.Pg.
Get(0);var D8=1-AN;while(D8>K6){O=O+1;GG=K6;K6=K6+BC.Pg.Get(O);}AN=(D8-GG)/(K6-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BC.Als.Get(O)*(1-(AN*AN));}}break;case 20:{
var BC=this.MX;var O=0;var GG=0;var K6=BC.Pg.Get(0);while(AN>K6){O=O+1;GG=K6;K6=
K6+BC.Pg.Get(O);}AN=(AN-GG)/(K6-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BC.Als.
Get(O)*(1-(AN*AN)));}}break;case 21:{var BC=this.MX;var O=0;var GG=0;var K6=BC.Pg.
Get(0);var LK=AN*2;var D8=LK-1;if(LK<1)D8=-D8;while(D8>K6){O=O+1;GG=K6;K6=K6+BC.
Pg.Get(O);}D8=(D8-GG)/(K6-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(BC.Als.Get(O
)*(1-(D8*D8)));}if(LK<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Aqa){var LK=AN;var AAl=1-LK;AN=((AAl*LK)*(this.O8+1))+(LK*LK);}else if(this.ALm){
var LK=AN;var AAl=1-LK;var BcH=LK*LK;var BzL=AAl*AAl;AN=(((BzL*LK)*(this.O8+1))+((
AAl*BcH)*(this.U$+2)))+(BcH*LK);}}this.AuJ(AN);(B=this.Ahl)?B[1].call(B[0],this):
null;},BBh:function(){var Au=(this.timer.Bs-this.Dw)|0;if(Au<0)Au=-Au;var LE=this.
V4;var Oo=this.V4+this.Pp;var He=this.Py+this.Pp;var KC=false;var Ed=this.Qm;if(
!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dw=this.Dw+Oo;}if((this.Ec>0)&&(Au>=
He)){var Ie=(Au/He)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*He);this.Dw=this.Dw+(Ie*He);}
if((this.Ec>2)&&!this.JN)this.Ec=1;if(this.Ec>0)LE=this.Py;if((this.Ec>=this.JN)&&(
this.JN>0)){KC=true;Ed=0;}else if(Au>=LE)Ed=1-((Au-LE)*this.AzX);else if(Ed>=0)Ed=
0;if(Ed!==this.Qm){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qm){this.Qm=Ed;this.AKS(
Ed);}return KC;},BBg:function(){var Au=(this.Dw-this.timer.Bs)|0;var LE=this.V4;
var Oo=this.V4+this.Pp;var He=this.Py+this.Pp;var KC=false;var Ed=this.Qm;if((this.
Ec>1)&&(Au<0)){var Ie=(((-Au+He)-1)/He)|0;if((this.Ec-Ie)<=0)Ie=this.Ec-1;this.Ec=
this.Ec-Ie;Au=Au+(Ie*He);this.Dw=this.Dw+(Ie*He);}if(((this.Ec===1)&&(Au<0))&&(this.
JN>0)){this.Ec=0;Au=Au+Oo;this.Dw=this.Dw+Oo;}if(((this.Ec===1)&&(Au<0))&&!this.
JN){var Ie=(((-Au+He)-1)/He)|0;Au=Au+(Ie*He);this.Dw=this.Dw+(Ie*He);}if(this.Ec>
0)LE=this.Py;if(Au<0){KC=true;Ed=1;}else if(Au>=LE)Ed=1-((Au-LE)*this.AzX);else if(
Ed>=0)Ed=1;if(Ed!==this.Qm){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qm){this.Qm=
Ed;this.AKS(Ed);}return KC;},BBf:function(){var Au=(this.Dw-this.timer.Bs)|0;var
LE=this.V4;var Oo=this.V4+this.Pp;var He=this.Py+this.Pp;var KC=false;var Ed=this.
Qm;if((this.Ec>1)&&(Au<0)){var Ie=(((-Au+He)-1)/He)|0;if((this.Ec-Ie)<=0)Ie=this.
Ec-1;this.Ec=this.Ec-Ie;Au=Au+(Ie*He);this.Dw=this.Dw+(Ie*He);}if(((this.Ec===1)&&(
Au<0))&&(this.JN>0)){this.Ec=0;Au=Au+Oo;this.Dw=this.Dw+Oo;}if(((this.Ec===1)&&(
Au<0))&&!this.JN){var Ie=(((-Au+He)-1)/He)|0;Au=Au+(Ie*He);this.Dw=this.Dw+(Ie*He
);}if(this.Ec>0)LE=this.Py;if(Au<0){KC=true;Ed=0;}else if(Au>=LE)Ed=(Au-LE)*this.
AzX;else if(Ed>=0)Ed=0;if(Ed!==this.Qm){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qm){this.Qm=Ed;this.AKS(Ed);}return KC;},BBe:function(){var Au=(this.timer.Bs-this.
Dw)|0;if(Au<0)Au=-Au;var LE=this.V4;var Oo=this.V4+this.Pp;var He=this.Py+this.Pp;
var KC=false;var Ed=this.Qm;if(!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dw=this.
Dw+Oo;}if((this.Ec>0)&&(Au>=He)){var Ie=(Au/He)|0;this.Ec=this.Ec+Ie;Au=Au-(Ie*He
);this.Dw=this.Dw+(Ie*He);}if((this.Ec>2)&&!this.JN)this.Ec=1;if(this.Ec>0)LE=this.
Py;if((this.Ec>=this.JN)&&(this.JN>0)){KC=true;Ed=1;}else if(Au>=LE)Ed=(Au-LE)*this.
AzX;else if(Ed>=0)Ed=1;if(Ed!==this.Qm){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qm){this.Qm=Ed;this.AKS(Ed);}return KC;},Ae9:function(E){if(this.AUe===E)return;
this.AUe=E;if(!this.Bw||!this.Ajd)return;if(E)this.Th=-1;else this.Th=1;this.Dw=(
this.timer.Avl()*2)-this.Dw;},AE5:function(E){if(E<0)E=0;if(E>1)E=1;this.AN0=E;}
,AEU:function(E){if(E<1)E=1;if(E>10)E=10;this.A5d=E;this.MX=null;},AFv:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axk=E;},AEN:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuE=E;},AwD:function(E){if(E<1)E=1;if(E>100)E=100;this.VU=E;},AFM:function(
E){if(this.AU5===E)return;this.AU5=E;if(this.AhP===26){this.U$=E;this.Aqa=(this.
O8===this.U$)&&!!this.O8;this.ALm=!this.Aqa&&(this.O8!==this.U$);}},AFL:function(
E){if(this.AU4===E)return;this.AU4=E;if(this.AhP===26){this.O8=E;this.Aqa=(this.
O8===this.U$)&&!!this.O8;this.ALm=!this.Aqa&&(this.O8!==this.U$);}},WG:function(
E){if(this.AhP===E)return;this.AhP=E;this.MX=null;switch(E){case 24:{this.O8=-1.1;
this.U$=1.1;}break;case 22:{this.O8=-1;this.U$=-2;}break;case 23:{this.O8=2;this.
U$=1;}break;case 25:{this.O8=1.1;this.U$=-1.1;}break;case 0:{this.O8=0;this.U$=0;
}break;default:{this.O8=this.AU4;this.U$=this.AU5;}}this.Aqa=(this.O8===this.U$)&&
!!this.O8;this.ALm=!this.Aqa&&(this.O8!==this.U$);},HO:function(E){if(E<0)E=0;this.
JN=E;},Fp:function(E){if(E<15)E=15;this.Pp=E;this.AzX=1/E;},Un:function(E){if(E<
0)E=0;this.Py=E;},AkE:function(E){if(E<0)E=0;this.V4=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeh);A.zV([this,this.Me],this.timer
,0);this.Ajd=0;A.pe([this,this.Me],this);}},AuJ:function(Aaq){},An0:function(G){
this.Ar(false);},AnY:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E3;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gm={Q:null,A4:0,B2:255,Cx:0,AuJ:function(Aaq
){var F;this.A4=this.Cx+(Math.round((this.B2-this.Cx)*Aaq)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E3._Init.call(this,aArg);this.
__proto__=C.Gm;},_Mark:function(D){var B;C.E3._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF8={
Q:null,A4:A.wf,B2:Cc,Cx:A.wf,AuJ:function(Aaq){var F;var Eo=this.Cx[0];var Dg=this.
Cx[1];Eo=Eo+(Math.round((this.B2[0]-Eo)*Aaq)|0);Dg=Dg+(Math.round((this.B2[1]-Dg
)*Aaq)|0);this.A4=[Eo,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:
function(aArg){C.E3._Init.call(this,aArg);this.__proto__=C.AF8;},_Mark:function(
D){var B;C.E3._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANi={Q:null,A4:0,B2:0xFFFFFFFF,Cx:0,AuJ:
function(Aaq){var F;var Pe=this.Cx&0xFF;var AaC=(this.Cx>>8)&0xFF;var Aly=(this.
Cx>>16)&0xFF;var Alr=(this.Cx>>24)&0xFF;Pe=Pe+((((this.B2&0xFF)-Pe)*Aaq)|0);AaC=
AaC+(((((this.B2>>8)&0xFF)-AaC)*Aaq)|0);Aly=Aly+(((((this.B2>>16)&0xFF)-Aly)*Aaq
)|0);Alr=Alr+(((((this.B2>>24)&0xFF)-Alr)*Aaq)|0);if(Pe<0)Pe=0;if(Pe>255)Pe=255;
if(AaC<0)AaC=0;if(AaC>255)AaC=255;if(Aly<0)Aly=0;if(Aly>255)Aly=255;if(Alr<0)Alr=
0;if(Alr>255)Alr=255;this.A4=(Pe&0xFF)|((AaC&0xFF)<<8)|((Aly&0xFF)<<16)|((Alr&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E3.
_Init.call(this,aArg);this.__proto__=C.ANi;},_Mark:function(D){var B;C.E3._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M5={A4:0,B2:1,Cx:0,AuJ:function(Aaq){this.A4=this.Cx+((
this.B2-this.Cx)*Aaq);},_Init:function(aArg){C.E3._Init.call(this,aArg);this.__proto__=
C.M5;},_className:"Effects::FloatEffect"};C.TG={timer:null,Q:null,Ec:0,Dw:0,JN:0
,Pp:1000,Py:1000,V4:0,Bw:false,Cx:false,B2:true,Me:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dw)|0;var Oo=this.V4+this.Pp;var He=this.Py+this.Pp;var LE=this.V4;var Jj=this.Ec;
if(!Jj&&(Au>=Oo)){Jj=1;Au=Au-Oo;}if((Jj>0)&&(Au>=He)){var Ie=(Au/He)|0;Au=Au-(Ie
*He);Jj=Jj+Ie;}if((Jj>2)&&!this.JN)Jj=1;if(Jj!==this.Ec){this.Dw=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jj;}if(Jj>0)LE=this.Py;var KC=(Jj>=this.JN)&&(
this.JN>0);if(!!this.Q){if(!KC&&(Au>=LE))(F=this.Q,F[2].call(F[0],this.Cx));if(KC||((
Au<LE)&&(Jj>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KC)this.Ar(false);},HO:function(
E){if(E<0)E=0;this.JN=E;},Fp:function(E){if(E<100)E=100;this.Pp=E;},Un:function(
E){if(E<0)E=0;this.Py=E;},AkE:function(E){if(E<0)E=0;this.V4=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Me],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aeh);A.zV([this,this.Me
],this.timer,0);this.Ec=-1;}},An0:function(G){this.Ar(false);},AnY:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TG;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mo={Ph:null,AJ:null,Ah:null,Ab:null,P:null,AKu:null,A2W:null,Akv:null,Dv:true,
Bw:true,AcM:true,Ajp:false,Ajy:true,ZJ:true,Q7:true,Mm:function(){if(!!this.Ph)this.
Ph.Mm();},AvP:function(){return true;},Zr:function(){},SJ:function(){this.Mm();}
,_Init:function(aArg){this.__proto__=C.Mo;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ph)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKu)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2W)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsS={Ask:A.wf,MQ:false,AvP:function(){return this.MQ;},Zr:function(
){if(!this.Dv&&!!this.P.Ab)this.P.Z(false);if((!this.Dv&&this.Q7)&&!!this.P.Ab)this.
P.Ab.HP(this.P);if(!this.Bw)this.P.Ar(false);},SJ:function(){if(this.Bw)this.P.Ar(
true);if((this.Dv||this.Ajp)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dv&&this.ZJ)this.P.Ab.ZI(this.P);if(this.Dv&&this.Ajy)this.P.Ab.Bb(this.P);
if(this.Dv&&!this.AcM)this.P.H(A.abJ(this.P.M,this.Ask));if(this.Dv){this.P.Ds(255
);this.P.Z(true);}if(!this.Dv&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MQ=true;
this.Mm();},_Init:function(aArg){C.Mo._Init.call(this,aArg);this.__proto__=C.AsS;
},_className:"Effects::VisibilityFader"};C.Axg={E3:null,MQ:false,Aqd:false,AvP:function(
){return this.MQ;},Zr:function(){if(this.Dv)this.P.Ds(this.E3.B2);if(!this.Dv&&!
this.P.G7)this.P.Z(false);if((!this.Dv&&this.Q7)&&!!this.P.Ab)this.P.Ab.HP(this.
P);if(!this.Bw)this.P.Ar(false);},SJ:function(){var B;if(this.AcM){if(this.P.Fo(
)&&!!this.P.Ab)this.E3.Cx=this.P.G7;else this.E3.Cx=0;}var Az0=((!this.P.Ab||!this.
P.G7)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var Az1=((!this.Dv&&((!this.P.Ab||!this.P.Fo())||this.Q7
))||!this.E3.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(Az0&&Az1){this.E3.Cx=0;this.E3.B2=0;}this.Aqd=this.P.ASg(
);if(this.Bw)this.P.Ar(true);if((this.Dv||this.Ajp)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dv&&this.ZJ)this.P.Ab.ZI(this.P);if(this.Dv&&this.Ajy
)this.P.Ab.Bb(this.P);if(!this.Dv&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dv&&!this.P.Fo()){this.P.Ds(this.E3.Cx);this.P.Z(true);}if(!this.Dv&&((!this.P.Ab||
!this.P.Fo())||!this.P.G7)){this.MQ=true;this.Mm();return;}if(!this.Dv&&(this.E3.
Cx===this.E3.B2))this.P.Ds(this.E3.Cx);if(this.P.G7===this.E3.B2){this.MQ=true;this.
Mm();return;}if(this.E3.Cx===this.E3.B2){this.MQ=true;this.Mm();return;}if(!this.
E3.JN)this.E3.HO(1);this.E3.Q=[B=this.P,B.Awi,B.AZ6];this.E3.Ae9(false);this.E3.
Ak0=false;this.E3.SB=[this,this.AiT];this.E3.Ahl=null;this.E3.Ar(true);},AiT:function(
G){this.MQ=true;this.Mm();},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.Gm.
_Init.call(this.E3={I:this},0);this.__proto__=C.Axg;},_Done:function(){this.__proto__=
C.Mo;this.E3._Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.call(
this);this.E3._ReInit();},_Mark:function(D){var B;C.Mo._Mark.call(this,D);if((B=
this.E3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae$={
Cq:null,D$:null,Ad7:false,MQ:false,Aqd:false,AvP:function(){return this.MQ;},Zr:
function(){if(this.Dv){this.P.Ds(this.Cq.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Dv&&!this.P.G7)this.P.Z(false);if((!this.Dv&&this.Q7)&&!!this.P.Ab)this.
P.Ab.HP(this.P);if(this.Ad7)this.P.ArM(this.Aqd);if(!this.Bw)this.P.Ar(false);},
SJ:function(){var B;if(this.AcM){if(this.P.Fo()&&!!this.P.Ab)this.Cq.Cx=this.P.G7;
else this.Cq.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var Az0=((!this.P.Ab||!this.P.
G7)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var Az1=((!this.Dv&&((!this.P.Ab||!this.P.Fo())||this.Q7
))||!this.Cq.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az0&&Az1){
this.Cq.Cx=0;this.Cq.B2=0;this.D$.Cx=this.D$.B2;}this.Aqd=this.P.ASg();if(this.Bw
)this.P.Ar(true);if((this.Dv||this.Ajp)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dv&&this.ZJ)this.P.Ab.ZI(this.P);if(this.Dv&&this.Ajy)this.P.Ab.Bb(
this.P);if(!this.Dv&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dv&&!this.P.
Fo()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.Ds(this.Cq.Cx);this.P.Z(true);
}if(!this.Dv&&((!this.P.Ab||!this.P.Fo())||!this.P.G7)){this.MQ=true;this.Mm();return;
}if(!this.Dv&&A.aaX(this.D$.Cx,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Dv&&(this.Cq.Cx===this.Cq.B2))this.P.Ds(this.Cq.Cx);if((this.P.G7===this.
Cq.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MQ=true;this.Mm();return;}if((
this.Cq.Cx===this.Cq.B2)&&A.aaX(this.D$.Cx,this.D$.B2)){this.MQ=true;this.Mm();return;
}if(!this.Cq.JN)this.Cq.HO(1);if(!this.D$.JN)this.D$.HO(1);if(this.Ad7)this.P.ArM(
true);this.D$.Q=null;this.D$.Ae9(false);this.D$.Ak0=false;this.D$.SB=[this,this.
AiT];this.D$.Ahl=[this,this.AAu];this.Cq.Q=[B=this.P,B.Awi,B.AZ6];this.Cq.Ae9(false
);this.Cq.Ak0=false;this.Cq.SB=[this,this.AiT];this.Cq.Ahl=null;this.D$.Ar(!A.aaX(
this.D$.Cx,this.D$.B2));this.Cq.Ar(this.Cq.Cx!==this.Cq.B2);},AiT:function(G){this.
MQ=!this.Cq.Bw&&!this.D$.Bw;this.Mm();},AAu:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A4));},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.Gm._Init.call(this.
Cq={I:this},0);C.AF8._Init.call(this.D$={I:this},0);this.__proto__=C.Ae$;},_Done:
function(){this.__proto__=C.Mo;this.Cq._Done();this.D$._Done();C.Mo._Done.call(this
);},_ReInit:function(){C.Mo._ReInit.call(this);this.Cq._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mo._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsT={AdL:null,Cq:null,G9:null,Wk:null,FP:null,Uu:A.wf,AkO:A.wf,MQ:false,Aqd:
false,AvP:function(){return this.MQ;},Zr:function(){if(this.Dv){this.P.Ds(this.Cq.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Uu));this.P.Z(true);}if(
!this.Dv&&!this.Cq.B2){this.P.Ds(0);this.P.Z(false);}if(((!this.Dv&&(this.Cq.B2>
0))&&!!this.P.Ab)&&!this.Q7){this.P.Ds(this.Cq.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Uu));this.P.Z(true);}if((!this.Dv&&this.Q7)&&!!this.P.Ab)
this.P.Ab.HP(this.P);this.P.ArM(this.Aqd);if(!!this.AdL)this.Ab.HP(this.AdL);if(
!this.Bw)this.P.Ar(false);},SJ:function(){var B;if(this.AcM){if(this.P.Fo()&&!!this.
P.Ab)this.Cq.Cx=this.P.G7;else this.Cq.Cx=0;this.AkO=A.aaI(this.P.M);}var Az0=((
!this.P.Ab||!this.P.G7)||!this.P.Fo())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Az1=((!this.Dv&&((!this.P.Ab||!this.
P.Fo())||this.Q7))||!this.Cq.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Uu),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az0&&
Az1){this.Cq.Cx=0;this.Cq.B2=0;this.AkO=this.Uu;this.Wk.A7m();}this.Aqd=this.P.ASg(
);if(this.Bw)this.P.Ar(true);if((this.Dv||this.Ajp)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dv&&this.ZJ)this.P.Ab.ZI(this.P);if(this.Dv&&this.Ajy
)this.P.Ab.Bb(this.P);if(!this.Dv&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dv&&!this.P.Fo())this.P.Ds(this.Cq.Cx);if((!this.Dv&&A.aaX(this.AkO,this.Uu))&&this.
Wk.ADQ())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkO));if(!this.Dv&&(
this.Cq.Cx===this.Cq.B2))this.P.Ds(this.Cq.Cx);if(!this.Dv&&((!this.P.Ab||!this.
P.Fo())||!this.P.G7)){this.MQ=true;this.Mm();return;}if(((this.Dv&&(this.P.G7===
this.Cq.B2))&&A.aaX(A.aaI(this.P.M),this.Uu))&&this.P.Fo()){this.MQ=true;this.Mm(
);return;}if(((!this.Dv&&(this.P.G7===this.Cq.B2))&&A.aaX(A.aaI(this.P.M),this.Uu
))&&this.Wk.ADQ()){this.MQ=true;this.Mm();return;}if(((this.Cq.Cx===this.Cq.B2)&&
A.aaX(this.AkO,this.Uu))&&this.Wk.ADQ()){this.MQ=true;this.Mm();return;}this.P.ArM(
true);this.P.Z(false);this.AdL=A._NewObject(A.acg.AVt,0);this.AdL.Bmb(this.P);this.
AdL.Ds(this.Cq.Cx);this.AdL.Bm8(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL4(this.AdL,this.P);if(!this.Cq.JN)this.Cq.HO(1);if(!this.G9.JN)this.G9.HO(
1);this.G9.Ae9(false);this.G9.Ak0=false;this.G9.SB=[this,this.AiT];this.G9.Ahl=[
this,this.AAu];if(this.Dv){this.G9.Cx=0;this.G9.B2=1;}else{this.G9.Cx=1;this.G9.
B2=0;}this.Cq.Q=[B=this.AdL,B.Awi,B.Ds];this.Cq.Ae9(false);this.Cq.Ak0=false;this.
Cq.SB=[this,this.AiT];this.Cq.Ahl=null;this.G9.Ar(!A.aaX(this.AkO,this.Uu)||!this.
Wk.ADQ());this.Cq.Ar(this.Cq.Cx!==this.Cq.B2);},AiT:function(G){this.MQ=!this.Cq.
Bw&&!this.G9.Bw;this.Mm();},AAu:function(G){var B;var ABi=A.abe(this.Uu,this.AkO
);if(!this.Dv)ABi=[-ABi[0],-ABi[1]];this.FP.A7m();this.FP.AgU=this.Wk.AgU;this.FP.
Bpu(ABi[0],ABi[1],0);this.FP.Bi7(this.Wk,this.FP,this.G9.A4);if(this.Dv)this.AdL.
A$F(this.AkO,this.FP);else this.AdL.A$F(this.Uu,this.FP);},_Init:function(aArg){
C.Mo._Init.call(this,aArg);C.Gm._Init.call(this.Cq={I:this},0);C.M5._Init.call(this.
G9={I:this},0);A.Graphics.AxY._Init.call(this.Wk={I:this},0);A.Graphics.AxY._Init.
call(this.FP={I:this},0);this.__proto__=C.AsT;},_Done:function(){this.__proto__=
C.Mo;this.Cq._Done();this.G9._Done();this.Wk._Done();this.FP._Done();C.Mo._Done.
call(this);},_ReInit:function(){C.Mo._ReInit.call(this);this.Cq._ReInit();this.G9.
_ReInit();this.Wk._ReInit();this.FP._ReInit();},_Mark:function(D){var B;C.Mo._Mark.
call(this,D);if((B=this.AdL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rf={Sc:function(){return null;},Sb:function(
){return null;},Aeb:function(){return this.Sc();},Aea:function(){return this.Sb(
);},_Init:function(aArg){this.__proto__=C.Rf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUF={Sc:function(){var Ao=A._NewObject(C.AsS,0);Ao.Dv=true;Ao.Bw=true;Ao.Ajy=
false;Ao.ZJ=true;Ao.AcM=false;Ao.Akv=[this,this.ApN];return Ao;},Sb:function(){var
Ao=A._NewObject(C.AsS,0);Ao.Dv=false;Ao.Bw=false;Ao.Q7=true;return Ao;},Aeb:function(
){var Ao=C.Rf.Aeb.call(this);Ao.ZJ=false;Ao.Bw=true;return Ao;},Aea:function(){var
Ao=A._NewObject(C.AsS,0);Ao.Dv=false;Ao.Bw=true;Ao.Ajp=true;Ao.Q7=false;return Ao;
},ApN:function(G){var B;var Ao=(C.AsS.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C3[1]/2)|0)];Ao.Ask=pos;},_Init:function(aArg){C.Rf._Init.
call(this,aArg);this.__proto__=C.AUF;},_className:"Effects::ShowHideTransition"};
C.Ael={ACy:500,Sc:function(){var Ao=A._NewObject(C.Ae$,0);Ao.Dv=true;Ao.Bw=true;
Ao.Ajy=false;Ao.ZJ=true;Ao.AcM=true;Ao.Ad7=false;Ao.Akv=[this,this.ApN];Ao.Cq.Fp(
this.ACy);Ao.Cq.Cx=0;Ao.Cq.B2=255;Ao.D$.Fp(this.ACy);Ao.D$.WG(23);return Ao;},Sb:
function(){var Ao=A._NewObject(C.Axg,0);Ao.Dv=false;Ao.Bw=false;Ao.Q7=true;Ao.AcM=
true;Ao.E3.Cx=255;Ao.E3.B2=0;Ao.E3.Fp(this.ACy);return Ao;},Aeb:function(){var Ao=
C.Rf.Aeb.call(this);Ao.ZJ=false;Ao.Bw=true;return Ao;},Aea:function(){var Ao=C.Rf.
Aea.call(this);Ao.Ajp=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApN:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G7)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rf._Init.call(this,aArg);this.__proto__=C.Ael;
},_className:"Effects::FadeInOutTransition"};C.AGI={Kg:0x12,AuY:0,Ad7:false,Sc:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Dv=true;Ao.Bw=true;Ao.Ajy=false;Ao.ZJ=true;Ao.
AcM=true;Ao.Ad7=this.Ad7;Ao.Akv=[this,this.ApN];Ao.Cq.Fp(500);Ao.Cq.AkE(0);Ao.Cq.
Cx=0;Ao.Cq.B2=255;Ao.D$.Fp(500);Ao.D$.WG(23);Ao.D$.AFL(0);Ao.D$.AFM(0);Ao.D$.AwD(
3);Ao.D$.AEN(0.5);Ao.D$.AFv(3);Ao.D$.AEU(3);Ao.D$.AE5(0.5);return Ao;},Sb:function(
){var Ao=A._NewObject(C.Ae$,0);Ao.Dv=false;Ao.Bw=false;Ao.Q7=true;Ao.AcM=true;Ao.
Ad7=this.Ad7;Ao.Akv=[this,this.A28];Ao.Cq.Cx=255;Ao.Cq.B2=0;Ao.Cq.Fp(500);Ao.Cq.
AkE(0);Ao.D$.Fp(500);Ao.D$.WG(23);Ao.D$.AFL(0);Ao.D$.AFM(0);Ao.D$.AwD(3);Ao.D$.AEN(
0.5);Ao.D$.AFv(3);Ao.D$.AEU(3);Ao.D$.AE5(0.5);return Ao;},Aeb:function(){var Ao=
C.Rf.Aeb.call(this);Ao.ZJ=false;Ao.Bw=true;return Ao;},Aea:function(){var Ao=C.Rf.
Aea.call(this);Ao.Ajp=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApN:function(G){var
B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var Bu=this.Kg;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C3[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C3[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fo())||!Ao.P.G7)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HD=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuY){case 5:pos=[pos[0],-C3[1]];break;case 3:{
pos=[pos[0],-C3[1]];pos=[HD[0],pos[1]];}break;case 8:pos=[-C3[0],-C3[1]];break;case
2:pos=[HD[0],pos[1]];break;case 7:pos=[-C3[0],pos[1]];break;case 4:pos=[pos[0],HD[
1]];break;case 1:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 6:{pos=[pos[
0],HD[1]];pos=[-C3[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A28:
function(G){var B;var Ao=(C.Ae$.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HD=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuY){case 5:pos=[pos[0],HD[1]];break;case 3:{pos=[pos[0],HD[1]];pos=[-
C3[0],pos[1]];}break;case 8:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 2:
pos=[-C3[0],pos[1]];break;case 7:pos=[HD[0],pos[1]];break;case 4:pos=[pos[0],-C3[
1]];break;case 1:pos=[-C3[0],-C3[1]];break;case 6:{pos=[pos[0],-C3[1]];pos=[HD[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rf._Init.call(this
,aArg);this.__proto__=C.AGI;},_className:"Effects::SlideTransition"};C.Afh={Sc:function(
){var Ao=A._NewObject(C.AsT,0);Ao.Dv=true;Ao.Bw=true;Ao.Ajy=false;Ao.ZJ=true;Ao.
AcM=true;Ao.Akv=[this,this.ApN];Ao.Cq.Fp(500);Ao.Cq.AkE(0);Ao.Cq.Cx=0;Ao.Cq.B2=255;
Ao.G9.Fp(500);Ao.G9.WG(23);Ao.G9.AFL(0);Ao.G9.AFM(0);Ao.G9.AwD(3);Ao.G9.AEN(0.5);
Ao.G9.AFv(3);Ao.G9.AEU(3);Ao.G9.AE5(0.5);Ao.Wk.Afg(0.5,0.5,1);return Ao;},Sb:function(
){var Ao=A._NewObject(C.AsT,0);Ao.Dv=false;Ao.Bw=false;Ao.Q7=true;Ao.AcM=true;Ao.
Akv=[this,this.A28];Ao.Cq.Cx=255;Ao.Cq.B2=0;Ao.Cq.Fp(500);Ao.Cq.AkE(0);Ao.G9.Fp(
500);Ao.G9.WG(23);Ao.G9.AFL(0);Ao.G9.AFM(0);Ao.G9.AwD(3);Ao.G9.AEN(0.5);Ao.G9.AFv(
3);Ao.G9.AEU(3);Ao.G9.AE5(0.5);Ao.Wk.Afg(0.5,0.5,1);return Ao;},Aeb:function(){var
Ao=C.Rf.Aeb.call(this);Ao.ZJ=false;Ao.Bw=true;return Ao;},Aea:function(){var Ao=
C.Rf.Aea.call(this);Ao.Ajp=true;Ao.Q7=false;Ao.Bw=true;return Ao;},ApN:function(
G){var B;var Ao=(C.AsT.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C3[1]/2)|0)];Ao.Uu=A.abf(pos,[(C3[0]/2)|0,(C3[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fo())||!Ao.P.G7)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Uu,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A28:function(G){var Ao=(C.AsT.isPrototypeOf(G)?G:null);Ao.
Uu=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rf._Init.call(this,aArg);this.__proto__=
C.Afh;},_className:"Effects::ScaleTransition"};C.AhP={BEb:0,BES:1,BEU:2,BET:3,BDz:
4,BDB:5,BDA:6,BFo:7,BFq:8,BFp:9,BC5:10,BC7:11,BC6:12,BCL:13,BCN:14,BCM:15,BDq:16
,BDs:17,BDr:18,BCW:19,BCY:20,BCX:21,BDp:22,BDD:23,BDo:24,BDE:25,BDa:26};C.BDi={A4H:
0x1,A4G:0x2,A4I:0x4,A4L:0x8,A4K:0x10,A4J:0x20};C.ANZ={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANZ;},_className:"Effects::EffectTimerClass"};C.
Aeh={_Init:function(){C.ANZ._Init.call(this,0);this.PP(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGV={Pg:A.abi(12,0
,null),Als:A.abi(12,0,null),_Init:function(aArg){(this.Pg=[]).__proto__=C.AGV.Pg;(
this.Als=[]).__proto__=C.AGV.Als;this.__proto__=C.AGV;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACF={B_:null,B9:null,A70:function(Ats){var Ao=this.B9;while(
!!Ao){Ao.Zr();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B9;while(!!Ao){A.pe(Ao.A2W
,Ao);Ao=Ao.Ah;}},A7Z:function(Ats){var Ao=this.B9;while(!!Ao){A.pe(Ao.AKu,Ao);Ao=
Ao.Ah;}this.B9=null;this.B_=null;},SJ:function(Ats){var B;if(!this.B9)this.Mm();
var Ao=this.B9;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApT=null;Ao=Ao.
Ah;}Ao=this.B9;while(!!Ao){(B=Ao.Akv)?B[1].call(B[0],Ao):null;Ao.SJ();Ao=Ao.Ah;}
},Mm:function(){var Ao=this.B9;while(!!Ao&&Ao.AvP())Ao=Ao.Ah;if(!Ao)A.Core.Ak1.Mm.
call(this);},Bn1:function(FO){if(!FO)return;if(this.AQ0())throw new Error(BF);if(
FO.Ph!==this)throw new Error(E7);if(!!FO.Ah)FO.Ah.AJ=FO.AJ;else this.B_=FO.AJ;if(
!!FO.AJ)FO.AJ.Ah=FO.Ah;else this.B9=FO.Ah;FO.Ph=null;FO.Ah=null;FO.AJ=null;if(!!
FO.P)FO.P.ApT=null;A.pe(FO.AKu,FO);if(!this.B9)this.AmC();},A4B:function(FO){if(
!FO)return;if(this.AQ0())throw new Error(Hp);if(!!FO.Ph)throw new Error(IS);FO.AJ=
this.B_;FO.Ah=null;if(!!this.B_)this.B_.Ah=FO;else this.B9=FO;this.B_=FO;FO.Ph=this;
},_Init:function(aArg){A.Core.Ak1._Init.call(this,aArg);this.__proto__=C.ACF;},_Mark:
function(D){var B;A.Core.Ak1._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsF={_Init:function(){C.AUF._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gm.__proto__=C.E3;C.AF8.__proto__=C.E3;C.ANi.__proto__=C.E3;
C.M5.__proto__=C.E3;C.AsS.__proto__=C.Mo;C.Axg.__proto__=C.Mo;C.Ae$.__proto__=C.
Mo;C.AsT.__proto__=C.Mo;C.AUF.__proto__=C.Rf;C.Ael.__proto__=C.Rf;C.AGI.__proto__=
C.Rf;C.Afh.__proto__=C.Rf;C.ANZ.__proto__=A.Core.Timer;C.ACF.__proto__=A.Core.Ak1;
};C._ReInit=function(){var B;if((B=C.Aeh._this))B._ReInit(),C.Aeh._ReInit.call(B
);if((B=C.AsF._this))B._ReInit(),C.AsF._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aeh._this)&&(B._cycle!=D))B._Done(C.Aeh._this=null);if((B=C.AsF._this)&&(
B._cycle!=D))B._Done(C.AsF._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */