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
var Cd=[100,100];var BF="Trying to remove a fader from a task, which is actually running";
var E4="The fader doesn\'t belong to this task";var Hm="Trying to add a fader to a task, which is actually running";
var IQ="The fader belongs already to a task";
C.E0={MX:null,timer:null,Qo:null,Sw:null,Ahd:null,Te:0,Ai9:0,U7:0,O8:0,AzS:0.001,
Qk:0,Ec:0,Dw:0,AN3:0.5,A4$:3,Axg:3,AuA:0.5,VP:3,AU8:0,AU7:0,JM:0,Po:1000,Px:0,V0:
0,AhI:0,Bw:false,AkV:false,AUh:false,Ap8:false,ALp:false,Mc:function(G){var B;if(
!this.timer)return;if(!this.Ai9){if(this.AUh)this.Ai9=-1;else this.Ai9=1;this.Te=
this.Ai9;this.Dw=this.timer.Bs;this.Ec=0;this.Qk=-1;}var KC;if((this.Ai9>0)&&(this.
Te>0))KC=this.BA_();else if((this.Ai9<0)&&(this.Te<0))KC=this.BBb();else if(this.
Ai9>0)KC=this.BA$();else KC=this.BBa();if(KC){this.Ar(false);(B=this.Qo)?B[1].call(
B[0],this):null;(B=this.Sw)?B[1].call(B[0],this):null;}},AKV:function(AN){var B;
if(!this.MX&&(((this.AhI===19)||(this.AhI===20))||(this.AhI===21))){var AJu=this.
A4$+1;var ByC=Math.sqrt(this.AN3);var RH=0.5;var O;this.MX=A._NewObject(C.AGS,0);
this.MX.Pf.Set(0,1);this.MX.Alm.Set(0,1);for(O=1;O<AJu;O=O+1){this.MX.Pf.Set(O,this.
MX.Pf.Get(O-1)*ByC);this.MX.Alm.Set(O,this.MX.Alm.Get(O-1)*this.AN3);RH=RH+this.
MX.Pf.Get(O);}var Bzp=1/RH;this.MX.Pf.Set(0,0.5);RH=0;for(O=0;O<AJu;O=O+1){this.
MX.Pf.Set(O,this.MX.Pf.Get(O)*Bzp);RH=RH+this.MX.Pf.Get(O);}this.MX.Pf.Set(AJu,this.
MX.Pf.Get(AJu)+(1-RH));}if(this.AkV){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhI){case 1:AN=Math.pow(AN,this.VP);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
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
AN=((AN*AN)*AN)-((AN*this.AuA)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuA)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuA)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuA)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axg)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axg)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axg)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axg)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BC=this.MX;var O=0;var GD=0;var K6=BC.Pf.
Get(0);var D8=1-AN;while(D8>K6){O=O+1;GD=K6;K6=K6+BC.Pf.Get(O);}AN=(D8-GD)/(K6-GD
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BC.Alm.Get(O)*(1-(AN*AN));}}break;case 20:{
var BC=this.MX;var O=0;var GD=0;var K6=BC.Pf.Get(0);while(AN>K6){O=O+1;GD=K6;K6=
K6+BC.Pf.Get(O);}AN=(AN-GD)/(K6-GD);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BC.Alm.
Get(O)*(1-(AN*AN)));}}break;case 21:{var BC=this.MX;var O=0;var GD=0;var K6=BC.Pf.
Get(0);var LK=AN*2;var D8=LK-1;if(LK<1)D8=-D8;while(D8>K6){O=O+1;GD=K6;K6=K6+BC.
Pf.Get(O);}D8=(D8-GD)/(K6-GD);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(BC.Alm.Get(O
)*(1-(D8*D8)));}if(LK<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap8){var LK=AN;var AAg=1-LK;AN=((AAg*LK)*(this.O8+1))+(LK*LK);}else if(this.ALp){
var LK=AN;var AAg=1-LK;var BcE=LK*LK;var BzF=AAg*AAg;AN=(((BzF*LK)*(this.O8+1))+((
AAg*BcE)*(this.U7+2)))+(BcE*LK);}}this.AuF(AN);(B=this.Ahd)?B[1].call(B[0],this):
null;},BBb:function(){var Au=(this.timer.Bs-this.Dw)|0;if(Au<0)Au=-Au;var LE=this.
V0;var Oo=this.V0+this.Po;var Ha=this.Px+this.Po;var KC=false;var Ed=this.Qk;if(
!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dw=this.Dw+Oo;}if((this.Ec>0)&&(Au>=
Ha)){var Ib=(Au/Ha)|0;this.Ec=this.Ec+Ib;Au=Au-(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}
if((this.Ec>2)&&!this.JM)this.Ec=1;if(this.Ec>0)LE=this.Px;if((this.Ec>=this.JM)&&(
this.JM>0)){KC=true;Ed=0;}else if(Au>=LE)Ed=1-((Au-LE)*this.AzS);else if(Ed>=0)Ed=
0;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qk){this.Qk=Ed;this.AKV(
Ed);}return KC;},BBa:function(){var Au=(this.Dw-this.timer.Bs)|0;var LE=this.V0;
var Oo=this.V0+this.Po;var Ha=this.Px+this.Po;var KC=false;var Ed=this.Qk;if((this.
Ec>1)&&(Au<0)){var Ib=(((-Au+Ha)-1)/Ha)|0;if((this.Ec-Ib)<=0)Ib=this.Ec-1;this.Ec=
this.Ec-Ib;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(((this.Ec===1)&&(Au<0))&&(this.
JM>0)){this.Ec=0;Au=Au+Oo;this.Dw=this.Dw+Oo;}if(((this.Ec===1)&&(Au<0))&&!this.
JM){var Ib=(((-Au+Ha)-1)/Ha)|0;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(this.Ec>
0)LE=this.Px;if(Au<0){KC=true;Ed=1;}else if(Au>=LE)Ed=1-((Au-LE)*this.AzS);else if(
Ed>=0)Ed=1;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qk){this.Qk=
Ed;this.AKV(Ed);}return KC;},BA$:function(){var Au=(this.Dw-this.timer.Bs)|0;var
LE=this.V0;var Oo=this.V0+this.Po;var Ha=this.Px+this.Po;var KC=false;var Ed=this.
Qk;if((this.Ec>1)&&(Au<0)){var Ib=(((-Au+Ha)-1)/Ha)|0;if((this.Ec-Ib)<=0)Ib=this.
Ec-1;this.Ec=this.Ec-Ib;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(((this.Ec===1)&&(
Au<0))&&(this.JM>0)){this.Ec=0;Au=Au+Oo;this.Dw=this.Dw+Oo;}if(((this.Ec===1)&&(
Au<0))&&!this.JM){var Ib=(((-Au+Ha)-1)/Ha)|0;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha
);}if(this.Ec>0)LE=this.Px;if(Au<0){KC=true;Ed=0;}else if(Au>=LE)Ed=(Au-LE)*this.
AzS;else if(Ed>=0)Ed=0;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qk){this.Qk=Ed;this.AKV(Ed);}return KC;},BA_:function(){var Au=(this.timer.Bs-this.
Dw)|0;if(Au<0)Au=-Au;var LE=this.V0;var Oo=this.V0+this.Po;var Ha=this.Px+this.Po;
var KC=false;var Ed=this.Qk;if(!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dw=this.
Dw+Oo;}if((this.Ec>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;this.Ec=this.Ec+Ib;Au=Au-(Ib*Ha
);this.Dw=this.Dw+(Ib*Ha);}if((this.Ec>2)&&!this.JM)this.Ec=1;if(this.Ec>0)LE=this.
Px;if((this.Ec>=this.JM)&&(this.JM>0)){KC=true;Ed=1;}else if(Au>=LE)Ed=(Au-LE)*this.
AzS;else if(Ed>=0)Ed=1;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qk){this.Qk=Ed;this.AKV(Ed);}return KC;},Ae5:function(E){if(this.AUh===E)return;
this.AUh=E;if(!this.Bw||!this.Ai9)return;if(E)this.Te=-1;else this.Te=1;this.Dw=(
this.timer.Avj()*2)-this.Dw;},AE1:function(E){if(E<0)E=0;if(E>1)E=1;this.AN3=E;}
,AEQ:function(E){if(E<1)E=1;if(E>10)E=10;this.A4$=E;this.MX=null;},AFr:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axg=E;},AEJ:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuA=E;},Awz:function(E){if(E<1)E=1;if(E>100)E=100;this.VP=E;},AFI:function(
E){if(this.AU8===E)return;this.AU8=E;if(this.AhI===26){this.U7=E;this.Ap8=(this.
O8===this.U7)&&!!this.O8;this.ALp=!this.Ap8&&(this.O8!==this.U7);}},AFH:function(
E){if(this.AU7===E)return;this.AU7=E;if(this.AhI===26){this.O8=E;this.Ap8=(this.
O8===this.U7)&&!!this.O8;this.ALp=!this.Ap8&&(this.O8!==this.U7);}},WC:function(
E){if(this.AhI===E)return;this.AhI=E;this.MX=null;switch(E){case 24:{this.O8=-1.1;
this.U7=1.1;}break;case 22:{this.O8=-1;this.U7=-2;}break;case 23:{this.O8=2;this.
U7=1;}break;case 25:{this.O8=1.1;this.U7=-1.1;}break;case 0:{this.O8=0;this.U7=0;
}break;default:{this.O8=this.AU7;this.U7=this.AU8;}}this.Ap8=(this.O8===this.U7)&&
!!this.O8;this.ALp=!this.Ap8&&(this.O8!==this.U7);},HM:function(E){if(E<0)E=0;this.
JM=E;},Fl:function(E){if(E<15)E=15;this.Po=E;this.AzS=1/E;},Uk:function(E){if(E<
0)E=0;this.Px=E;},Akz:function(E){if(E<0)E=0;this.V0=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aee);A.zV([this,this.Mc],this.timer
,0);this.Ai9=0;A.pe([this,this.Mc],this);}},AuF:function(Aan){},AnV:function(G){
this.Ar(false);},AnT:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gh={Q:null,A4:0,B2:255,Cw:0,AuF:function(Aan
){var F;this.A4=this.Cw+(Math.round((this.B2-this.Cw)*Aan)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gh;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF4={
Q:null,A4:A.wf,B2:Cd,Cw:A.wf,AuF:function(Aan){var F;var En=this.Cw[0];var Dg=this.
Cw[1];En=En+(Math.round((this.B2[0]-En)*Aan)|0);Dg=Dg+(Math.round((this.B2[1]-Dg
)*Aan)|0);this.A4=[En,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AF4;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANl={Q:null,A4:0,B2:0xFFFFFFFF,Cw:0,AuF:
function(Aan){var F;var Pd=this.Cw&0xFF;var Aaz=(this.Cw>>8)&0xFF;var Als=(this.
Cw>>16)&0xFF;var All=(this.Cw>>24)&0xFF;Pd=Pd+((((this.B2&0xFF)-Pd)*Aan)|0);Aaz=
Aaz+(((((this.B2>>8)&0xFF)-Aaz)*Aan)|0);Als=Als+(((((this.B2>>16)&0xFF)-Als)*Aan
)|0);All=All+(((((this.B2>>24)&0xFF)-All)*Aan)|0);if(Pd<0)Pd=0;if(Pd>255)Pd=255;
if(Aaz<0)Aaz=0;if(Aaz>255)Aaz=255;if(Als<0)Als=0;if(Als>255)Als=255;if(All<0)All=
0;if(All>255)All=255;this.A4=(Pd&0xFF)|((Aaz&0xFF)<<8)|((Als&0xFF)<<16)|((All&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANl;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M5={A4:0,B2:1,Cw:0,AuF:function(Aan){this.A4=this.Cw+((
this.B2-this.Cw)*Aan);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M5;},_className:"Effects::FloatEffect"};C.TE={timer:null,Q:null,Ec:0,Dw:0,JM:0
,Po:1000,Px:1000,V0:0,Bw:false,Cw:false,B2:true,Mc:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dw)|0;var Oo=this.V0+this.Po;var Ha=this.Px+this.Po;var LE=this.V0;var Jh=this.Ec;
if(!Jh&&(Au>=Oo)){Jh=1;Au=Au-Oo;}if((Jh>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;Au=Au-(Ib
*Ha);Jh=Jh+Ib;}if((Jh>2)&&!this.JM)Jh=1;if(Jh!==this.Ec){this.Dw=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jh;}if(Jh>0)LE=this.Px;var KC=(Jh>=this.JM)&&(
this.JM>0);if(!!this.Q){if(!KC&&(Au>=LE))(F=this.Q,F[2].call(F[0],this.Cw));if(KC||((
Au<LE)&&(Jh>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KC)this.Ar(false);},HM:function(
E){if(E<0)E=0;this.JM=E;},Fl:function(E){if(E<100)E=100;this.Po=E;},Uk:function(
E){if(E<0)E=0;this.Px=E;},Akz:function(E){if(E<0)E=0;this.V0=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aee);A.zV([this,this.Mc
],this.timer,0);this.Ec=-1;}},AnV:function(G){this.Ar(false);},AnT:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TE;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mm={Pg:null,AJ:null,Ah:null,Ab:null,P:null,AKx:null,A2R:null,Akq:null,Du:true,
Bw:true,AcH:true,Ajj:false,Ajs:true,ZF:true,Q5:true,Mk:function(){if(!!this.Pg)this.
Pg.Mk();},AvM:function(){return true;},Zn:function(){},SC:function(){this.Mk();}
,_Init:function(aArg){this.__proto__=C.Mm;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKx)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2R)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsN={Asf:A.wf,MQ:false,AvM:function(){return this.MQ;},Zn:function(
){if(!this.Du&&!!this.P.Ab)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(!this.Bw)this.P.Ar(false);},SC:function(){if(this.Bw)this.P.Ar(
true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajs)this.P.Ab.Bb(this.P);
if(this.Du&&!this.AcH)this.P.H(A.abJ(this.P.M,this.Asf));if(this.Du){this.P.Dr(255
);this.P.Z(true);}if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MQ=true;
this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);this.__proto__=C.AsN;
},_className:"Effects::VisibilityFader"};C.Axc={E0:null,MQ:false,Ap$:false,AvM:function(
){return this.MQ;},Zn:function(){if(this.Du)this.P.Dr(this.E0.B2);if(!this.Du&&!
this.P.G3)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.P.Ab.HN(this.
P);if(!this.Bw)this.P.Ar(false);},SC:function(){var B;if(this.AcH){if(this.P.Fk(
)&&!!this.P.Ab)this.E0.Cw=this.P.G3;else this.E0.Cw=0;}var AzV=((!this.P.Ab||!this.
P.G3)||!this.P.Fk())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AzW=((!this.Du&&((!this.P.Ab||!this.P.Fk())||this.Q5
))||!this.E0.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AzV&&AzW){this.E0.Cw=0;this.E0.B2=0;}this.Ap$=this.P.ASj(
);if(this.Bw)this.P.Ar(true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajs
)this.P.Ab.Bb(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Du&&!this.P.Fk()){this.P.Dr(this.E0.Cw);this.P.Z(true);}if(!this.Du&&((!this.P.Ab||
!this.P.Fk())||!this.P.G3)){this.MQ=true;this.Mk();return;}if(!this.Du&&(this.E0.
Cw===this.E0.B2))this.P.Dr(this.E0.Cw);if(this.P.G3===this.E0.B2){this.MQ=true;this.
Mk();return;}if(this.E0.Cw===this.E0.B2){this.MQ=true;this.Mk();return;}if(!this.
E0.JM)this.E0.HM(1);this.E0.Q=[B=this.P,B.Awe,B.AZ4];this.E0.Ae5(false);this.E0.
AkV=false;this.E0.Sw=[this,this.AiM];this.E0.Ahd=null;this.E0.Ar(true);},AiM:function(
G){this.MQ=true;this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Gh.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axc;},_Done:function(){this.__proto__=
C.Mm;this.E0._Done();C.Mm._Done.call(this);},_ReInit:function(){C.Mm._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae7={
Cp:null,D$:null,Ad4:false,MQ:false,Ap$:false,AvM:function(){return this.MQ;},Zn:
function(){if(this.Du){this.P.Dr(this.Cp.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Du&&!this.P.G3)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(this.Ad4)this.P.ArH(this.Ap$);if(!this.Bw)this.P.Ar(false);},
SC:function(){var B;if(this.AcH){if(this.P.Fk()&&!!this.P.Ab)this.Cp.Cw=this.P.G3;
else this.Cp.Cw=0;this.D$.Cw=this.P.M.slice(0,2);}var AzV=((!this.P.Ab||!this.P.
G3)||!this.P.Fk())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AzW=((!this.Du&&((!this.P.Ab||!this.P.Fk())||this.Q5
))||!this.Cp.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzV&&AzW){
this.Cp.Cw=0;this.Cp.B2=0;this.D$.Cw=this.D$.B2;}this.Ap$=this.P.ASj();if(this.Bw
)this.P.Ar(true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajs)this.P.Ab.Bb(
this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Du&&!this.P.
Fk()){this.P.H(A.abJ(this.P.M,this.D$.Cw));this.P.Dr(this.Cp.Cw);this.P.Z(true);
}if(!this.Du&&((!this.P.Ab||!this.P.Fk())||!this.P.G3)){this.MQ=true;this.Mk();return;
}if(!this.Du&&A.aaX(this.D$.Cw,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cw));
if(!this.Du&&(this.Cp.Cw===this.Cp.B2))this.P.Dr(this.Cp.Cw);if((this.P.G3===this.
Cp.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MQ=true;this.Mk();return;}if((
this.Cp.Cw===this.Cp.B2)&&A.aaX(this.D$.Cw,this.D$.B2)){this.MQ=true;this.Mk();return;
}if(!this.Cp.JM)this.Cp.HM(1);if(!this.D$.JM)this.D$.HM(1);if(this.Ad4)this.P.ArH(
true);this.D$.Q=null;this.D$.Ae5(false);this.D$.AkV=false;this.D$.Sw=[this,this.
AiM];this.D$.Ahd=[this,this.AAp];this.Cp.Q=[B=this.P,B.Awe,B.AZ4];this.Cp.Ae5(false
);this.Cp.AkV=false;this.Cp.Sw=[this,this.AiM];this.Cp.Ahd=null;this.D$.Ar(!A.aaX(
this.D$.Cw,this.D$.B2));this.Cp.Ar(this.Cp.Cw!==this.Cp.B2);},AiM:function(G){this.
MQ=!this.Cp.Bw&&!this.D$.Bw;this.Mk();},AAp:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A4));},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Gh._Init.call(this.
Cp={I:this},0);C.AF4._Init.call(this.D$={I:this},0);this.__proto__=C.Ae7;},_Done:
function(){this.__proto__=C.Mm;this.Cp._Done();this.D$._Done();C.Mm._Done.call(this
);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsO={AdI:null,Cp:null,G5:null,Wg:null,FK:null,Ur:A.wf,AkJ:A.wf,MQ:false,Ap$:
false,AvM:function(){return this.MQ;},Zn:function(){if(this.Du){this.P.Dr(this.Cp.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Ur));this.P.Z(true);}if(
!this.Du&&!this.Cp.B2){this.P.Dr(0);this.P.Z(false);}if(((!this.Du&&(this.Cp.B2>
0))&&!!this.P.Ab)&&!this.Q5){this.P.Dr(this.Cp.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Ur));this.P.Z(true);}if((!this.Du&&this.Q5)&&!!this.P.Ab)
this.P.Ab.HN(this.P);this.P.ArH(this.Ap$);if(!!this.AdI)this.Ab.HN(this.AdI);if(
!this.Bw)this.P.Ar(false);},SC:function(){var B;if(this.AcH){if(this.P.Fk()&&!!this.
P.Ab)this.Cp.Cw=this.P.G3;else this.Cp.Cw=0;this.AkJ=A.aaI(this.P.M);}var AzV=((
!this.P.Ab||!this.P.G3)||!this.P.Fk())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AzW=((!this.Du&&((!this.P.Ab||!this.
P.Fk())||this.Q5))||!this.Cp.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Ur),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzV&&
AzW){this.Cp.Cw=0;this.Cp.B2=0;this.AkJ=this.Ur;this.Wg.A7i();}this.Ap$=this.P.ASj(
);if(this.Bw)this.P.Ar(true);if((this.Du||this.Ajj)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajs
)this.P.Ab.Bb(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Du&&!this.P.Fk())this.P.Dr(this.Cp.Cw);if((!this.Du&&A.aaX(this.AkJ,this.Ur))&&this.
Wg.ADL())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkJ));if(!this.Du&&(
this.Cp.Cw===this.Cp.B2))this.P.Dr(this.Cp.Cw);if(!this.Du&&((!this.P.Ab||!this.
P.Fk())||!this.P.G3)){this.MQ=true;this.Mk();return;}if(((this.Du&&(this.P.G3===
this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Ur))&&this.P.Fk()){this.MQ=true;this.Mk(
);return;}if(((!this.Du&&(this.P.G3===this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Ur
))&&this.Wg.ADL()){this.MQ=true;this.Mk();return;}if(((this.Cp.Cw===this.Cp.B2)&&
A.aaX(this.AkJ,this.Ur))&&this.Wg.ADL()){this.MQ=true;this.Mk();return;}this.P.ArH(
true);this.P.Z(false);this.AdI=A._NewObject(A.acg.AVw,0);this.AdI.Bl8(this.P);this.
AdI.Dr(this.Cp.Cw);this.AdI.Bm3(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL7(this.AdI,this.P);if(!this.Cp.JM)this.Cp.HM(1);if(!this.G5.JM)this.G5.HM(
1);this.G5.Ae5(false);this.G5.AkV=false;this.G5.Sw=[this,this.AiM];this.G5.Ahd=[
this,this.AAp];if(this.Du){this.G5.Cw=0;this.G5.B2=1;}else{this.G5.Cw=1;this.G5.
B2=0;}this.Cp.Q=[B=this.AdI,B.Awe,B.Dr];this.Cp.Ae5(false);this.Cp.AkV=false;this.
Cp.Sw=[this,this.AiM];this.Cp.Ahd=null;this.G5.Ar(!A.aaX(this.AkJ,this.Ur)||!this.
Wg.ADL());this.Cp.Ar(this.Cp.Cw!==this.Cp.B2);},AiM:function(G){this.MQ=!this.Cp.
Bw&&!this.G5.Bw;this.Mk();},AAp:function(G){var B;var ABc=A.abe(this.Ur,this.AkJ
);if(!this.Du)ABc=[-ABc[0],-ABc[1]];this.FK.A7i();this.FK.AgM=this.Wg.AgM;this.FK.
Bpp(ABc[0],ABc[1],0);this.FK.Bi2(this.Wg,this.FK,this.G5.A4);if(this.Du)this.AdI.
A$B(this.AkJ,this.FK);else this.AdI.A$B(this.Ur,this.FK);},_Init:function(aArg){
C.Mm._Init.call(this,aArg);C.Gh._Init.call(this.Cp={I:this},0);C.M5._Init.call(this.
G5={I:this},0);A.Graphics.AxS._Init.call(this.Wg={I:this},0);A.Graphics.AxS._Init.
call(this.FK={I:this},0);this.__proto__=C.AsO;},_Done:function(){this.__proto__=
C.Mm;this.Cp._Done();this.G5._Done();this.Wg._Done();this.FK._Done();C.Mm._Done.
call(this);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cp._ReInit();this.G5.
_ReInit();this.Wg._ReInit();this.FK._ReInit();},_Mark:function(D){var B;C.Mm._Mark.
call(this,D);if((B=this.AdI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FK)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rd={R9:function(){return null;},R8:function(
){return null;},Ad_:function(){return this.R9();},Ad9:function(){return this.R8(
);},_Init:function(aArg){this.__proto__=C.Rd;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUI={R9:function(){var Ao=A._NewObject(C.AsN,0);Ao.Du=true;Ao.Bw=true;Ao.Ajs=
false;Ao.ZF=true;Ao.AcH=false;Ao.Akq=[this,this.ApJ];return Ao;},R8:function(){var
Ao=A._NewObject(C.AsN,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;return Ao;},Ad_:function(
){var Ao=C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var
Ao=A._NewObject(C.AsN,0);Ao.Du=false;Ao.Bw=true;Ao.Ajj=true;Ao.Q5=false;return Ao;
},ApJ:function(G){var B;var Ao=(C.AsN.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C3[1]/2)|0)];Ao.Asf=pos;},_Init:function(aArg){C.Rd._Init.
call(this,aArg);this.__proto__=C.AUI;},_className:"Effects::ShowHideTransition"};
C.Aei={ACt:500,R9:function(){var Ao=A._NewObject(C.Ae7,0);Ao.Du=true;Ao.Bw=true;
Ao.Ajs=false;Ao.ZF=true;Ao.AcH=true;Ao.Ad4=false;Ao.Akq=[this,this.ApJ];Ao.Cp.Fl(
this.ACt);Ao.Cp.Cw=0;Ao.Cp.B2=255;Ao.D$.Fl(this.ACt);Ao.D$.WC(23);return Ao;},R8:
function(){var Ao=A._NewObject(C.Axc,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcH=
true;Ao.E0.Cw=255;Ao.E0.B2=0;Ao.E0.Fl(this.ACt);return Ao;},Ad_:function(){var Ao=
C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var Ao=C.Rd.
Ad9.call(this);Ao.Ajj=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApJ:function(G){var
B;var Ao=(C.Ae7.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fk())||!Ao.P.G3)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=C.Aei;
},_className:"Effects::FadeInOutTransition"};C.AGF={Kf:0x12,AuU:0,Ad4:false,R9:function(
){var Ao=A._NewObject(C.Ae7,0);Ao.Du=true;Ao.Bw=true;Ao.Ajs=false;Ao.ZF=true;Ao.
AcH=true;Ao.Ad4=this.Ad4;Ao.Akq=[this,this.ApJ];Ao.Cp.Fl(500);Ao.Cp.Akz(0);Ao.Cp.
Cw=0;Ao.Cp.B2=255;Ao.D$.Fl(500);Ao.D$.WC(23);Ao.D$.AFH(0);Ao.D$.AFI(0);Ao.D$.Awz(
3);Ao.D$.AEJ(0.5);Ao.D$.AFr(3);Ao.D$.AEQ(3);Ao.D$.AE1(0.5);return Ao;},R8:function(
){var Ao=A._NewObject(C.Ae7,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcH=true;Ao.
Ad4=this.Ad4;Ao.Akq=[this,this.A23];Ao.Cp.Cw=255;Ao.Cp.B2=0;Ao.Cp.Fl(500);Ao.Cp.
Akz(0);Ao.D$.Fl(500);Ao.D$.WC(23);Ao.D$.AFH(0);Ao.D$.AFI(0);Ao.D$.Awz(3);Ao.D$.AEJ(
0.5);Ao.D$.AFr(3);Ao.D$.AEQ(3);Ao.D$.AE1(0.5);return Ao;},Ad_:function(){var Ao=
C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var Ao=C.Rd.
Ad9.call(this);Ao.Ajj=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApJ:function(G){var
B;var Ao=(C.Ae7.isPrototypeOf(G)?G:null);var Bu=this.Kf;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C3[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C3[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fk())||!Ao.P.G3)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hz=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuU){case 5:pos=[pos[0],-C3[1]];break;case 3:{
pos=[pos[0],-C3[1]];pos=[Hz[0],pos[1]];}break;case 8:pos=[-C3[0],-C3[1]];break;case
2:pos=[Hz[0],pos[1]];break;case 7:pos=[-C3[0],pos[1]];break;case 4:pos=[pos[0],Hz[
1]];break;case 1:{pos=[pos[0],Hz[1]];pos=[Hz[0],pos[1]];}break;case 6:{pos=[pos[
0],Hz[1]];pos=[-C3[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A23:
function(G){var B;var Ao=(C.Ae7.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var Hz=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuU){case 5:pos=[pos[0],Hz[1]];break;case 3:{pos=[pos[0],Hz[1]];pos=[-
C3[0],pos[1]];}break;case 8:{pos=[pos[0],Hz[1]];pos=[Hz[0],pos[1]];}break;case 2:
pos=[-C3[0],pos[1]];break;case 7:pos=[Hz[0],pos[1]];break;case 4:pos=[pos[0],-C3[
1]];break;case 1:pos=[-C3[0],-C3[1]];break;case 6:{pos=[pos[0],-C3[1]];pos=[Hz[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rd._Init.call(this
,aArg);this.__proto__=C.AGF;},_className:"Effects::SlideTransition"};C.Afd={R9:function(
){var Ao=A._NewObject(C.AsO,0);Ao.Du=true;Ao.Bw=true;Ao.Ajs=false;Ao.ZF=true;Ao.
AcH=true;Ao.Akq=[this,this.ApJ];Ao.Cp.Fl(500);Ao.Cp.Akz(0);Ao.Cp.Cw=0;Ao.Cp.B2=255;
Ao.G5.Fl(500);Ao.G5.WC(23);Ao.G5.AFH(0);Ao.G5.AFI(0);Ao.G5.Awz(3);Ao.G5.AEJ(0.5);
Ao.G5.AFr(3);Ao.G5.AEQ(3);Ao.G5.AE1(0.5);Ao.Wg.Afc(0.5,0.5,1);return Ao;},R8:function(
){var Ao=A._NewObject(C.AsO,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcH=true;Ao.
Akq=[this,this.A23];Ao.Cp.Cw=255;Ao.Cp.B2=0;Ao.Cp.Fl(500);Ao.Cp.Akz(0);Ao.G5.Fl(
500);Ao.G5.WC(23);Ao.G5.AFH(0);Ao.G5.AFI(0);Ao.G5.Awz(3);Ao.G5.AEJ(0.5);Ao.G5.AFr(
3);Ao.G5.AEQ(3);Ao.G5.AE1(0.5);Ao.Wg.Afc(0.5,0.5,1);return Ao;},Ad_:function(){var
Ao=C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var Ao=
C.Rd.Ad9.call(this);Ao.Ajj=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApJ:function(
G){var B;var Ao=(C.AsO.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C3[1]/2)|0)];Ao.Ur=A.abf(pos,[(C3[0]/2)|0,(C3[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fk())||!Ao.P.G3)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Ur,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A23:function(G){var Ao=(C.AsO.isPrototypeOf(G)?G:null);Ao.
Ur=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=
C.Afd;},_className:"Effects::ScaleTransition"};C.AhI={BD5:0,BEK:1,BEM:2,BEL:3,BDr:
4,BDt:5,BDs:6,BFe:7,BFg:8,BFf:9,BCY:10,BC0:11,BCZ:12,BCE:13,BCG:14,BCF:15,BDi:16
,BDk:17,BDj:18,BCP:19,BCR:20,BCQ:21,BDh:22,BDv:23,BDg:24,BDw:25,BC5:26};C.BDa={A4D:
0x1,A4C:0x2,A4E:0x4,A4H:0x8,A4G:0x10,A4F:0x20};C.AN2={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN2;},_className:"Effects::EffectTimerClass"};C.
Aee={_Init:function(){C.AN2._Init.call(this,0);this.PO(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGS={Pf:A.abi(12,0
,null),Alm:A.abi(12,0,null),_Init:function(aArg){(this.Pf=[]).__proto__=C.AGS.Pf;(
this.Alm=[]).__proto__=C.AGS.Alm;this.__proto__=C.AGS;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACA={B_:null,B9:null,A7W:function(Ato){var Ao=this.B9;while(
!!Ao){Ao.Zn();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B9;while(!!Ao){A.pe(Ao.A2R
,Ao);Ao=Ao.Ah;}},A7V:function(Ato){var Ao=this.B9;while(!!Ao){A.pe(Ao.AKx,Ao);Ao=
Ao.Ah;}this.B9=null;this.B_=null;},SC:function(Ato){var B;if(!this.B9)this.Mk();
var Ao=this.B9;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApP=null;Ao=Ao.
Ah;}Ao=this.B9;while(!!Ao){(B=Ao.Akq)?B[1].call(B[0],Ao):null;Ao.SC();Ao=Ao.Ah;}
},Mk:function(){var Ao=this.B9;while(!!Ao&&Ao.AvM())Ao=Ao.Ah;if(!Ao)A.Core.AkW.Mk.
call(this);},BnW:function(FJ){if(!FJ)return;if(this.AQ3())throw new Error(BF);if(
FJ.Pg!==this)throw new Error(E4);if(!!FJ.Ah)FJ.Ah.AJ=FJ.AJ;else this.B_=FJ.AJ;if(
!!FJ.AJ)FJ.AJ.Ah=FJ.Ah;else this.B9=FJ.Ah;FJ.Pg=null;FJ.Ah=null;FJ.AJ=null;if(!!
FJ.P)FJ.P.ApP=null;A.pe(FJ.AKx,FJ);if(!this.B9)this.Amw();},A4x:function(FJ){if(
!FJ)return;if(this.AQ3())throw new Error(Hm);if(!!FJ.Pg)throw new Error(IQ);FJ.AJ=
this.B_;FJ.Ah=null;if(!!this.B_)this.B_.Ah=FJ;else this.B9=FJ;this.B_=FJ;FJ.Pg=this;
},_Init:function(aArg){A.Core.AkW._Init.call(this,aArg);this.__proto__=C.ACA;},_Mark:
function(D){var B;A.Core.AkW._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsA={_Init:function(){C.AUI._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gh.__proto__=C.E0;C.AF4.__proto__=C.E0;C.ANl.__proto__=C.E0;
C.M5.__proto__=C.E0;C.AsN.__proto__=C.Mm;C.Axc.__proto__=C.Mm;C.Ae7.__proto__=C.
Mm;C.AsO.__proto__=C.Mm;C.AUI.__proto__=C.Rd;C.Aei.__proto__=C.Rd;C.AGF.__proto__=
C.Rd;C.Afd.__proto__=C.Rd;C.AN2.__proto__=A.Core.Timer;C.ACA.__proto__=A.Core.AkW;
};C._ReInit=function(){var B;if((B=C.Aee._this))B._ReInit(),C.Aee._ReInit.call(B
);if((B=C.AsA._this))B._ReInit(),C.AsA._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aee._this)&&(B._cycle!=D))B._Done(C.Aee._this=null);if((B=C.AsA._this)&&(
B._cycle!=D))B._Done(C.AsA._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */