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
var E4="The fader doesn\'t belong to this task";var Hm="Trying to add a fader to a task, which is actually running";
var IQ="The fader belongs already to a task";
C.E0={MX:null,timer:null,Qo:null,Sv:null,Ahf:null,Te:0,Ai_:0,U7:0,O8:0,AzW:0.001,
Qk:0,Ec:0,Dw:0,AN0:0.5,A5f:3,Axk:3,AuE:0.5,VP:3,AU8:0,AU7:0,JN:0,Po:1000,Px:0,V0:
0,AhK:0,Bw:false,AkW:false,AUh:false,Ap9:false,ALm:false,Mc:function(G){var B;if(
!this.timer)return;if(!this.Ai_){if(this.AUh)this.Ai_=-1;else this.Ai_=1;this.Te=
this.Ai_;this.Dw=this.timer.Bs;this.Ec=0;this.Qk=-1;}var KC;if((this.Ai_>0)&&(this.
Te>0))KC=this.BBi();else if((this.Ai_<0)&&(this.Te<0))KC=this.BBl();else if(this.
Ai_>0)KC=this.BBj();else KC=this.BBk();if(KC){this.Ar(false);(B=this.Qo)?B[1].call(
B[0],this):null;(B=this.Sv)?B[1].call(B[0],this):null;}},AKT:function(AN){var B;
if(!this.MX&&(((this.AhK===19)||(this.AhK===20))||(this.AhK===21))){var AJt=this.
A5f+1;var ByM=Math.sqrt(this.AN0);var RG=0.5;var O;this.MX=A._NewObject(C.AGV,0);
this.MX.Pf.Set(0,1);this.MX.Alo.Set(0,1);for(O=1;O<AJt;O=O+1){this.MX.Pf.Set(O,this.
MX.Pf.Get(O-1)*ByM);this.MX.Alo.Set(O,this.MX.Alo.Get(O-1)*this.AN0);RG=RG+this.
MX.Pf.Get(O);}var Bzz=1/RG;this.MX.Pf.Set(0,0.5);RG=0;for(O=0;O<AJt;O=O+1){this.
MX.Pf.Set(O,this.MX.Pf.Get(O)*Bzz);RG=RG+this.MX.Pf.Get(O);}this.MX.Pf.Set(AJt,this.
MX.Pf.Get(AJt)+(1-RG));}if(this.AkW){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhK){case 1:AN=Math.pow(AN,this.VP);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
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
AN=((AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuE)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axk)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BC=this.MX;var O=0;var GD=0;var K6=BC.Pf.
Get(0);var D8=1-AN;while(D8>K6){O=O+1;GD=K6;K6=K6+BC.Pf.Get(O);}AN=(D8-GD)/(K6-GD
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BC.Alo.Get(O)*(1-(AN*AN));}}break;case 20:{
var BC=this.MX;var O=0;var GD=0;var K6=BC.Pf.Get(0);while(AN>K6){O=O+1;GD=K6;K6=
K6+BC.Pf.Get(O);}AN=(AN-GD)/(K6-GD);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BC.Alo.
Get(O)*(1-(AN*AN)));}}break;case 21:{var BC=this.MX;var O=0;var GD=0;var K6=BC.Pf.
Get(0);var LK=AN*2;var D8=LK-1;if(LK<1)D8=-D8;while(D8>K6){O=O+1;GD=K6;K6=K6+BC.
Pf.Get(O);}D8=(D8-GD)/(K6-GD);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(BC.Alo.Get(O
)*(1-(D8*D8)));}if(LK<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap9){var LK=AN;var AAk=1-LK;AN=((AAk*LK)*(this.O8+1))+(LK*LK);}else if(this.ALm){
var LK=AN;var AAk=1-LK;var BcO=LK*LK;var BzP=AAk*AAk;AN=(((BzP*LK)*(this.O8+1))+((
AAk*BcO)*(this.U7+2)))+(BcO*LK);}}this.AuJ(AN);(B=this.Ahf)?B[1].call(B[0],this):
null;},BBl:function(){var Au=(this.timer.Bs-this.Dw)|0;if(Au<0)Au=-Au;var LE=this.
V0;var Op=this.V0+this.Po;var Ha=this.Px+this.Po;var KC=false;var Ed=this.Qk;if(
!this.Ec&&(Au>=Op)){this.Ec=1;Au=Au-Op;this.Dw=this.Dw+Op;}if((this.Ec>0)&&(Au>=
Ha)){var Ib=(Au/Ha)|0;this.Ec=this.Ec+Ib;Au=Au-(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}
if((this.Ec>2)&&!this.JN)this.Ec=1;if(this.Ec>0)LE=this.Px;if((this.Ec>=this.JN)&&(
this.JN>0)){KC=true;Ed=0;}else if(Au>=LE)Ed=1-((Au-LE)*this.AzW);else if(Ed>=0)Ed=
0;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qk){this.Qk=Ed;this.AKT(
Ed);}return KC;},BBk:function(){var Au=(this.Dw-this.timer.Bs)|0;var LE=this.V0;
var Op=this.V0+this.Po;var Ha=this.Px+this.Po;var KC=false;var Ed=this.Qk;if((this.
Ec>1)&&(Au<0)){var Ib=(((-Au+Ha)-1)/Ha)|0;if((this.Ec-Ib)<=0)Ib=this.Ec-1;this.Ec=
this.Ec-Ib;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(((this.Ec===1)&&(Au<0))&&(this.
JN>0)){this.Ec=0;Au=Au+Op;this.Dw=this.Dw+Op;}if(((this.Ec===1)&&(Au<0))&&!this.
JN){var Ib=(((-Au+Ha)-1)/Ha)|0;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(this.Ec>
0)LE=this.Px;if(Au<0){KC=true;Ed=1;}else if(Au>=LE)Ed=1-((Au-LE)*this.AzW);else if(
Ed>=0)Ed=1;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qk){this.Qk=
Ed;this.AKT(Ed);}return KC;},BBj:function(){var Au=(this.Dw-this.timer.Bs)|0;var
LE=this.V0;var Op=this.V0+this.Po;var Ha=this.Px+this.Po;var KC=false;var Ed=this.
Qk;if((this.Ec>1)&&(Au<0)){var Ib=(((-Au+Ha)-1)/Ha)|0;if((this.Ec-Ib)<=0)Ib=this.
Ec-1;this.Ec=this.Ec-Ib;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(((this.Ec===1)&&(
Au<0))&&(this.JN>0)){this.Ec=0;Au=Au+Op;this.Dw=this.Dw+Op;}if(((this.Ec===1)&&(
Au<0))&&!this.JN){var Ib=(((-Au+Ha)-1)/Ha)|0;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha
);}if(this.Ec>0)LE=this.Px;if(Au<0){KC=true;Ed=0;}else if(Au>=LE)Ed=(Au-LE)*this.
AzW;else if(Ed>=0)Ed=0;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qk){this.Qk=Ed;this.AKT(Ed);}return KC;},BBi:function(){var Au=(this.timer.Bs-this.
Dw)|0;if(Au<0)Au=-Au;var LE=this.V0;var Op=this.V0+this.Po;var Ha=this.Px+this.Po;
var KC=false;var Ed=this.Qk;if(!this.Ec&&(Au>=Op)){this.Ec=1;Au=Au-Op;this.Dw=this.
Dw+Op;}if((this.Ec>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;this.Ec=this.Ec+Ib;Au=Au-(Ib*Ha
);this.Dw=this.Dw+(Ib*Ha);}if((this.Ec>2)&&!this.JN)this.Ec=1;if(this.Ec>0)LE=this.
Px;if((this.Ec>=this.JN)&&(this.JN>0)){KC=true;Ed=1;}else if(Au>=LE)Ed=(Au-LE)*this.
AzW;else if(Ed>=0)Ed=1;if(Ed!==this.Qk){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qk){this.Qk=Ed;this.AKT(Ed);}return KC;},Ae7:function(E){if(this.AUh===E)return;
this.AUh=E;if(!this.Bw||!this.Ai_)return;if(E)this.Te=-1;else this.Te=1;this.Dw=(
this.timer.Avn()*2)-this.Dw;},AE4:function(E){if(E<0)E=0;if(E>1)E=1;this.AN0=E;}
,AET:function(E){if(E<1)E=1;if(E>10)E=10;this.A5f=E;this.MX=null;},AFu:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axk=E;},AEM:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuE=E;},AwD:function(E){if(E<1)E=1;if(E>100)E=100;this.VP=E;},AFL:function(
E){if(this.AU8===E)return;this.AU8=E;if(this.AhK===26){this.U7=E;this.Ap9=(this.
O8===this.U7)&&!!this.O8;this.ALm=!this.Ap9&&(this.O8!==this.U7);}},AFK:function(
E){if(this.AU7===E)return;this.AU7=E;if(this.AhK===26){this.O8=E;this.Ap9=(this.
O8===this.U7)&&!!this.O8;this.ALm=!this.Ap9&&(this.O8!==this.U7);}},WC:function(
E){if(this.AhK===E)return;this.AhK=E;this.MX=null;switch(E){case 24:{this.O8=-1.1;
this.U7=1.1;}break;case 22:{this.O8=-1;this.U7=-2;}break;case 23:{this.O8=2;this.
U7=1;}break;case 25:{this.O8=1.1;this.U7=-1.1;}break;case 0:{this.O8=0;this.U7=0;
}break;default:{this.O8=this.AU7;this.U7=this.AU8;}}this.Ap9=(this.O8===this.U7)&&
!!this.O8;this.ALm=!this.Ap9&&(this.O8!==this.U7);},HM:function(E){if(E<0)E=0;this.
JN=E;},Fl:function(E){if(E<15)E=15;this.Po=E;this.AzW=1/E;},Uk:function(E){if(E<
0)E=0;this.Px=E;},AkA:function(E){if(E<0)E=0;this.V0=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aef);A.zV([this,this.Mc],this.timer
,0);this.Ai_=0;A.pe([this,this.Mc],this);}},AuJ:function(Aan){},An0:function(G){
this.Ar(false);},AnY:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MX)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sv)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gh={Q:null,A4:0,B2:255,Cw:0,AuJ:function(Aan
){var F;this.A4=this.Cw+(Math.round((this.B2-this.Cw)*Aan)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gh;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF7={
Q:null,A4:A.wf,B2:Cc,Cw:A.wf,AuJ:function(Aan){var F;var En=this.Cw[0];var Dg=this.
Cw[1];En=En+(Math.round((this.B2[0]-En)*Aan)|0);Dg=Dg+(Math.round((this.B2[1]-Dg
)*Aan)|0);this.A4=[En,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AF7;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANi={Q:null,A4:0,B2:0xFFFFFFFF,Cw:0,AuJ:
function(Aan){var F;var Pd=this.Cw&0xFF;var Aaz=(this.Cw>>8)&0xFF;var Alu=(this.
Cw>>16)&0xFF;var Aln=(this.Cw>>24)&0xFF;Pd=Pd+((((this.B2&0xFF)-Pd)*Aan)|0);Aaz=
Aaz+(((((this.B2>>8)&0xFF)-Aaz)*Aan)|0);Alu=Alu+(((((this.B2>>16)&0xFF)-Alu)*Aan
)|0);Aln=Aln+(((((this.B2>>24)&0xFF)-Aln)*Aan)|0);if(Pd<0)Pd=0;if(Pd>255)Pd=255;
if(Aaz<0)Aaz=0;if(Aaz>255)Aaz=255;if(Alu<0)Alu=0;if(Alu>255)Alu=255;if(Aln<0)Aln=
0;if(Aln>255)Aln=255;this.A4=(Pd&0xFF)|((Aaz&0xFF)<<8)|((Alu&0xFF)<<16)|((Aln&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANi;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M6={A4:0,B2:1,Cw:0,AuJ:function(Aan){this.A4=this.Cw+((
this.B2-this.Cw)*Aan);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M6;},_className:"Effects::FloatEffect"};C.TE={timer:null,Q:null,Ec:0,Dw:0,JN:0
,Po:1000,Px:1000,V0:0,Bw:false,Cw:false,B2:true,Mc:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dw)|0;var Op=this.V0+this.Po;var Ha=this.Px+this.Po;var LE=this.V0;var Jh=this.Ec;
if(!Jh&&(Au>=Op)){Jh=1;Au=Au-Op;}if((Jh>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;Au=Au-(Ib
*Ha);Jh=Jh+Ib;}if((Jh>2)&&!this.JN)Jh=1;if(Jh!==this.Ec){this.Dw=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jh;}if(Jh>0)LE=this.Px;var KC=(Jh>=this.JN)&&(
this.JN>0);if(!!this.Q){if(!KC&&(Au>=LE))(F=this.Q,F[2].call(F[0],this.Cw));if(KC||((
Au<LE)&&(Jh>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KC)this.Ar(false);},HM:function(
E){if(E<0)E=0;this.JN=E;},Fl:function(E){if(E<100)E=100;this.Po=E;},Uk:function(
E){if(E<0)E=0;this.Px=E;},AkA:function(E){if(E<0)E=0;this.V0=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aef);A.zV([this,this.Mc
],this.timer,0);this.Ec=-1;}},An0:function(G){this.Ar(false);},AnY:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TE;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mm={Pg:null,AJ:null,Ah:null,Ab:null,P:null,AKv:null,A2W:null,Akr:null,Du:true,
Bw:true,AcI:true,Ajk:false,Ajt:true,ZE:true,Q5:true,Mk:function(){if(!!this.Pg)this.
Pg.Mk();},AvQ:function(){return true;},Zn:function(){},SB:function(){this.Mk();}
,_Init:function(aArg){this.__proto__=C.Mm;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKv)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2W)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsN={Asf:A.wf,MQ:false,AvQ:function(){return this.MQ;},Zn:function(
){if(!this.Du&&!!this.P.Ab)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(!this.Bw)this.P.Ar(false);},SB:function(){if(this.Bw)this.P.Ar(
true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Du&&this.ZE)this.P.Ab.ZD(this.P);if(this.Du&&this.Ajt)this.P.Ab.Bb(this.P);
if(this.Du&&!this.AcI)this.P.H(A.abJ(this.P.M,this.Asf));if(this.Du){this.P.Dr(255
);this.P.Z(true);}if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MQ=true;
this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);this.__proto__=C.AsN;
},_className:"Effects::VisibilityFader"};C.Axg={E0:null,MQ:false,Aqa:false,AvQ:function(
){return this.MQ;},Zn:function(){if(this.Du)this.P.Dr(this.E0.B2);if(!this.Du&&!
this.P.G3)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.P.Ab.HN(this.
P);if(!this.Bw)this.P.Ar(false);},SB:function(){var B;if(this.AcI){if(this.P.Fk(
)&&!!this.P.Ab)this.E0.Cw=this.P.G3;else this.E0.Cw=0;}var AzZ=((!this.P.Ab||!this.
P.G3)||!this.P.Fk())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var Az0=((!this.Du&&((!this.P.Ab||!this.P.Fk())||this.Q5
))||!this.E0.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AzZ&&Az0){this.E0.Cw=0;this.E0.B2=0;}this.Aqa=this.P.ASg(
);if(this.Bw)this.P.Ar(true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZE)this.P.Ab.ZD(this.P);if(this.Du&&this.Ajt
)this.P.Ab.Bb(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Du&&!this.P.Fk()){this.P.Dr(this.E0.Cw);this.P.Z(true);}if(!this.Du&&((!this.P.Ab||
!this.P.Fk())||!this.P.G3)){this.MQ=true;this.Mk();return;}if(!this.Du&&(this.E0.
Cw===this.E0.B2))this.P.Dr(this.E0.Cw);if(this.P.G3===this.E0.B2){this.MQ=true;this.
Mk();return;}if(this.E0.Cw===this.E0.B2){this.MQ=true;this.Mk();return;}if(!this.
E0.JN)this.E0.HM(1);this.E0.Q=[B=this.P,B.Awi,B.AZ7];this.E0.Ae7(false);this.E0.
AkW=false;this.E0.Sv=[this,this.AiN];this.E0.Ahf=null;this.E0.Ar(true);},AiN:function(
G){this.MQ=true;this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Gh.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axg;},_Done:function(){this.__proto__=
C.Mm;this.E0._Done();C.Mm._Done.call(this);},_ReInit:function(){C.Mm._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae9={
Cp:null,D$:null,Ad5:false,MQ:false,Aqa:false,AvQ:function(){return this.MQ;},Zn:
function(){if(this.Du){this.P.Dr(this.Cp.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Du&&!this.P.G3)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(this.Ad5)this.P.ArH(this.Aqa);if(!this.Bw)this.P.Ar(false);},
SB:function(){var B;if(this.AcI){if(this.P.Fk()&&!!this.P.Ab)this.Cp.Cw=this.P.G3;
else this.Cp.Cw=0;this.D$.Cw=this.P.M.slice(0,2);}var AzZ=((!this.P.Ab||!this.P.
G3)||!this.P.Fk())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var Az0=((!this.Du&&((!this.P.Ab||!this.P.Fk())||this.Q5
))||!this.Cp.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzZ&&Az0){
this.Cp.Cw=0;this.Cp.B2=0;this.D$.Cw=this.D$.B2;}this.Aqa=this.P.ASg();if(this.Bw
)this.P.Ar(true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Du&&this.ZE)this.P.Ab.ZD(this.P);if(this.Du&&this.Ajt)this.P.Ab.Bb(
this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Du&&!this.P.
Fk()){this.P.H(A.abJ(this.P.M,this.D$.Cw));this.P.Dr(this.Cp.Cw);this.P.Z(true);
}if(!this.Du&&((!this.P.Ab||!this.P.Fk())||!this.P.G3)){this.MQ=true;this.Mk();return;
}if(!this.Du&&A.aaX(this.D$.Cw,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cw));
if(!this.Du&&(this.Cp.Cw===this.Cp.B2))this.P.Dr(this.Cp.Cw);if((this.P.G3===this.
Cp.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MQ=true;this.Mk();return;}if((
this.Cp.Cw===this.Cp.B2)&&A.aaX(this.D$.Cw,this.D$.B2)){this.MQ=true;this.Mk();return;
}if(!this.Cp.JN)this.Cp.HM(1);if(!this.D$.JN)this.D$.HM(1);if(this.Ad5)this.P.ArH(
true);this.D$.Q=null;this.D$.Ae7(false);this.D$.AkW=false;this.D$.Sv=[this,this.
AiN];this.D$.Ahf=[this,this.AAt];this.Cp.Q=[B=this.P,B.Awi,B.AZ7];this.Cp.Ae7(false
);this.Cp.AkW=false;this.Cp.Sv=[this,this.AiN];this.Cp.Ahf=null;this.D$.Ar(!A.aaX(
this.D$.Cw,this.D$.B2));this.Cp.Ar(this.Cp.Cw!==this.Cp.B2);},AiN:function(G){this.
MQ=!this.Cp.Bw&&!this.D$.Bw;this.Mk();},AAt:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A4));},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Gh._Init.call(this.
Cp={I:this},0);C.AF7._Init.call(this.D$={I:this},0);this.__proto__=C.Ae9;},_Done:
function(){this.__proto__=C.Mm;this.Cp._Done();this.D$._Done();C.Mm._Done.call(this
);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsO={AdL:null,Cp:null,G5:null,Wg:null,FM:null,Ur:A.wf,AkK:A.wf,MQ:false,Aqa:
false,AvQ:function(){return this.MQ;},Zn:function(){if(this.Du){this.P.Dr(this.Cp.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Ur));this.P.Z(true);}if(
!this.Du&&!this.Cp.B2){this.P.Dr(0);this.P.Z(false);}if(((!this.Du&&(this.Cp.B2>
0))&&!!this.P.Ab)&&!this.Q5){this.P.Dr(this.Cp.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Ur));this.P.Z(true);}if((!this.Du&&this.Q5)&&!!this.P.Ab)
this.P.Ab.HN(this.P);this.P.ArH(this.Aqa);if(!!this.AdL)this.Ab.HN(this.AdL);if(
!this.Bw)this.P.Ar(false);},SB:function(){var B;if(this.AcI){if(this.P.Fk()&&!!this.
P.Ab)this.Cp.Cw=this.P.G3;else this.Cp.Cw=0;this.AkK=A.aaI(this.P.M);}var AzZ=((
!this.P.Ab||!this.P.G3)||!this.P.Fk())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Az0=((!this.Du&&((!this.P.Ab||!this.
P.Fk())||this.Q5))||!this.Cp.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Ur),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzZ&&
Az0){this.Cp.Cw=0;this.Cp.B2=0;this.AkK=this.Ur;this.Wg.A7p();}this.Aqa=this.P.ASg(
);if(this.Bw)this.P.Ar(true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZE)this.P.Ab.ZD(this.P);if(this.Du&&this.Ajt
)this.P.Ab.Bb(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Du&&!this.P.Fk())this.P.Dr(this.Cp.Cw);if((!this.Du&&A.aaX(this.AkK,this.Ur))&&this.
Wg.ADO())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkK));if(!this.Du&&(
this.Cp.Cw===this.Cp.B2))this.P.Dr(this.Cp.Cw);if(!this.Du&&((!this.P.Ab||!this.
P.Fk())||!this.P.G3)){this.MQ=true;this.Mk();return;}if(((this.Du&&(this.P.G3===
this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Ur))&&this.P.Fk()){this.MQ=true;this.Mk(
);return;}if(((!this.Du&&(this.P.G3===this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Ur
))&&this.Wg.ADO()){this.MQ=true;this.Mk();return;}if(((this.Cp.Cw===this.Cp.B2)&&
A.aaX(this.AkK,this.Ur))&&this.Wg.ADO()){this.MQ=true;this.Mk();return;}this.P.ArH(
true);this.P.Z(false);this.AdL=A._NewObject(A.acg.AVw,0);this.AdL.Bmg(this.P);this.
AdL.Dr(this.Cp.Cw);this.AdL.Bnb(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL4(this.AdL,this.P);if(!this.Cp.JN)this.Cp.HM(1);if(!this.G5.JN)this.G5.HM(
1);this.G5.Ae7(false);this.G5.AkW=false;this.G5.Sv=[this,this.AiN];this.G5.Ahf=[
this,this.AAt];if(this.Du){this.G5.Cw=0;this.G5.B2=1;}else{this.G5.Cw=1;this.G5.
B2=0;}this.Cp.Q=[B=this.AdL,B.Awi,B.Dr];this.Cp.Ae7(false);this.Cp.AkW=false;this.
Cp.Sv=[this,this.AiN];this.Cp.Ahf=null;this.G5.Ar(!A.aaX(this.AkK,this.Ur)||!this.
Wg.ADO());this.Cp.Ar(this.Cp.Cw!==this.Cp.B2);},AiN:function(G){this.MQ=!this.Cp.
Bw&&!this.G5.Bw;this.Mk();},AAt:function(G){var B;var ABg=A.abe(this.Ur,this.AkK
);if(!this.Du)ABg=[-ABg[0],-ABg[1]];this.FM.A7p();this.FM.AgO=this.Wg.AgO;this.FM.
Bpx(ABg[0],ABg[1],0);this.FM.Bi9(this.Wg,this.FM,this.G5.A4);if(this.Du)this.AdL.
A$K(this.AkK,this.FM);else this.AdL.A$K(this.Ur,this.FM);},_Init:function(aArg){
C.Mm._Init.call(this,aArg);C.Gh._Init.call(this.Cp={I:this},0);C.M6._Init.call(this.
G5={I:this},0);A.Graphics.AxV._Init.call(this.Wg={I:this},0);A.Graphics.AxV._Init.
call(this.FM={I:this},0);this.__proto__=C.AsO;},_Done:function(){this.__proto__=
C.Mm;this.Cp._Done();this.G5._Done();this.Wg._Done();this.FM._Done();C.Mm._Done.
call(this);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cp._ReInit();this.G5.
_ReInit();this.Wg._ReInit();this.FM._ReInit();},_Mark:function(D){var B;C.Mm._Mark.
call(this,D);if((B=this.AdL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rd={R8:function(){return null;},R7:function(
){return null;},Ad$:function(){return this.R8();},Ad_:function(){return this.R7(
);},_Init:function(aArg){this.__proto__=C.Rd;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUI={R8:function(){var Ao=A._NewObject(C.AsN,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=
false;Ao.ZE=true;Ao.AcI=false;Ao.Akr=[this,this.ApK];return Ao;},R7:function(){var
Ao=A._NewObject(C.AsN,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;return Ao;},Ad$:function(
){var Ao=C.Rd.Ad$.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Ad_:function(){var
Ao=A._NewObject(C.AsN,0);Ao.Du=false;Ao.Bw=true;Ao.Ajk=true;Ao.Q5=false;return Ao;
},ApK:function(G){var B;var Ao=(C.AsN.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C3[1]/2)|0)];Ao.Asf=pos;},_Init:function(aArg){C.Rd._Init.
call(this,aArg);this.__proto__=C.AUI;},_className:"Effects::ShowHideTransition"};
C.Aej={ACw:500,R8:function(){var Ao=A._NewObject(C.Ae9,0);Ao.Du=true;Ao.Bw=true;
Ao.Ajt=false;Ao.ZE=true;Ao.AcI=true;Ao.Ad5=false;Ao.Akr=[this,this.ApK];Ao.Cp.Fl(
this.ACw);Ao.Cp.Cw=0;Ao.Cp.B2=255;Ao.D$.Fl(this.ACw);Ao.D$.WC(23);return Ao;},R7:
function(){var Ao=A._NewObject(C.Axg,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcI=
true;Ao.E0.Cw=255;Ao.E0.B2=0;Ao.E0.Fl(this.ACw);return Ao;},Ad$:function(){var Ao=
C.Rd.Ad$.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Ad_:function(){var Ao=C.Rd.
Ad_.call(this);Ao.Ajk=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApK:function(G){var
B;var Ao=(C.Ae9.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fk())||!Ao.P.G3)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=C.Aej;
},_className:"Effects::FadeInOutTransition"};C.AGI={Kg:0x12,AuY:0,Ad5:false,R8:function(
){var Ao=A._NewObject(C.Ae9,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZE=true;Ao.
AcI=true;Ao.Ad5=this.Ad5;Ao.Akr=[this,this.ApK];Ao.Cp.Fl(500);Ao.Cp.AkA(0);Ao.Cp.
Cw=0;Ao.Cp.B2=255;Ao.D$.Fl(500);Ao.D$.WC(23);Ao.D$.AFK(0);Ao.D$.AFL(0);Ao.D$.AwD(
3);Ao.D$.AEM(0.5);Ao.D$.AFu(3);Ao.D$.AET(3);Ao.D$.AE4(0.5);return Ao;},R7:function(
){var Ao=A._NewObject(C.Ae9,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcI=true;Ao.
Ad5=this.Ad5;Ao.Akr=[this,this.A28];Ao.Cp.Cw=255;Ao.Cp.B2=0;Ao.Cp.Fl(500);Ao.Cp.
AkA(0);Ao.D$.Fl(500);Ao.D$.WC(23);Ao.D$.AFK(0);Ao.D$.AFL(0);Ao.D$.AwD(3);Ao.D$.AEM(
0.5);Ao.D$.AFu(3);Ao.D$.AET(3);Ao.D$.AE4(0.5);return Ao;},Ad$:function(){var Ao=
C.Rd.Ad$.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Ad_:function(){var Ao=C.Rd.
Ad_.call(this);Ao.Ajk=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApK:function(G){var
B;var Ao=(C.Ae9.isPrototypeOf(G)?G:null);var Bu=this.Kg;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C3[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C3[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fk())||!Ao.P.G3)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hz=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuY){case 5:pos=[pos[0],-C3[1]];break;case 3:{
pos=[pos[0],-C3[1]];pos=[Hz[0],pos[1]];}break;case 8:pos=[-C3[0],-C3[1]];break;case
2:pos=[Hz[0],pos[1]];break;case 7:pos=[-C3[0],pos[1]];break;case 4:pos=[pos[0],Hz[
1]];break;case 1:{pos=[pos[0],Hz[1]];pos=[Hz[0],pos[1]];}break;case 6:{pos=[pos[
0],Hz[1]];pos=[-C3[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A28:
function(G){var B;var Ao=(C.Ae9.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var Hz=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuY){case 5:pos=[pos[0],Hz[1]];break;case 3:{pos=[pos[0],Hz[1]];pos=[-
C3[0],pos[1]];}break;case 8:{pos=[pos[0],Hz[1]];pos=[Hz[0],pos[1]];}break;case 2:
pos=[-C3[0],pos[1]];break;case 7:pos=[Hz[0],pos[1]];break;case 4:pos=[pos[0],-C3[
1]];break;case 1:pos=[-C3[0],-C3[1]];break;case 6:{pos=[pos[0],-C3[1]];pos=[Hz[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rd._Init.call(this
,aArg);this.__proto__=C.AGI;},_className:"Effects::SlideTransition"};C.Aff={R8:function(
){var Ao=A._NewObject(C.AsO,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZE=true;Ao.
AcI=true;Ao.Akr=[this,this.ApK];Ao.Cp.Fl(500);Ao.Cp.AkA(0);Ao.Cp.Cw=0;Ao.Cp.B2=255;
Ao.G5.Fl(500);Ao.G5.WC(23);Ao.G5.AFK(0);Ao.G5.AFL(0);Ao.G5.AwD(3);Ao.G5.AEM(0.5);
Ao.G5.AFu(3);Ao.G5.AET(3);Ao.G5.AE4(0.5);Ao.Wg.Afe(0.5,0.5,1);return Ao;},R7:function(
){var Ao=A._NewObject(C.AsO,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcI=true;Ao.
Akr=[this,this.A28];Ao.Cp.Cw=255;Ao.Cp.B2=0;Ao.Cp.Fl(500);Ao.Cp.AkA(0);Ao.G5.Fl(
500);Ao.G5.WC(23);Ao.G5.AFK(0);Ao.G5.AFL(0);Ao.G5.AwD(3);Ao.G5.AEM(0.5);Ao.G5.AFu(
3);Ao.G5.AET(3);Ao.G5.AE4(0.5);Ao.Wg.Afe(0.5,0.5,1);return Ao;},Ad$:function(){var
Ao=C.Rd.Ad$.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Ad_:function(){var Ao=
C.Rd.Ad_.call(this);Ao.Ajk=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApK:function(
G){var B;var Ao=(C.AsO.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C3[1]/2)|0)];Ao.Ur=A.abf(pos,[(C3[0]/2)|0,(C3[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fk())||!Ao.P.G3)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Ur,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A28:function(G){var Ao=(C.AsO.isPrototypeOf(G)?G:null);Ao.
Ur=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=
C.Aff;},_className:"Effects::ScaleTransition"};C.AhK={BEd:0,BEU:1,BEW:2,BEV:3,BDA:
4,BDC:5,BDB:6,BFp:7,BFr:8,BFq:9,BC7:10,BC9:11,BC8:12,BCN:13,BCP:14,BCO:15,BDr:16
,BDt:17,BDs:18,BCY:19,BC0:20,BCZ:21,BDq:22,BDE:23,BDp:24,BDF:25,BDc:26};C.BDj={A4K:
0x1,A4J:0x2,A4L:0x4,A4O:0x8,A4N:0x10,A4M:0x20};C.ANZ={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANZ;},_className:"Effects::EffectTimerClass"};C.
Aef={_Init:function(){C.ANZ._Init.call(this,0);this.PO(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGV={Pf:A.abi(12,0
,null),Alo:A.abi(12,0,null),_Init:function(aArg){(this.Pf=[]).__proto__=C.AGV.Pf;(
this.Alo=[]).__proto__=C.AGV.Alo;this.__proto__=C.AGV;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACD={B_:null,B9:null,A73:function(Atr){var Ao=this.B9;while(
!!Ao){Ao.Zn();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B9;while(!!Ao){A.pe(Ao.A2W
,Ao);Ao=Ao.Ah;}},A72:function(Atr){var Ao=this.B9;while(!!Ao){A.pe(Ao.AKv,Ao);Ao=
Ao.Ah;}this.B9=null;this.B_=null;},SB:function(Atr){var B;if(!this.B9)this.Mk();
var Ao=this.B9;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApQ=null;Ao=Ao.
Ah;}Ao=this.B9;while(!!Ao){(B=Ao.Akr)?B[1].call(B[0],Ao):null;Ao.SB();Ao=Ao.Ah;}
},Mk:function(){var Ao=this.B9;while(!!Ao&&Ao.AvQ())Ao=Ao.Ah;if(!Ao)A.Core.AkX.Mk.
call(this);},Bn3:function(FK){if(!FK)return;if(this.AQ0())throw new Error(BF);if(
FK.Pg!==this)throw new Error(E4);if(!!FK.Ah)FK.Ah.AJ=FK.AJ;else this.B_=FK.AJ;if(
!!FK.AJ)FK.AJ.Ah=FK.Ah;else this.B9=FK.Ah;FK.Pg=null;FK.Ah=null;FK.AJ=null;if(!!
FK.P)FK.P.ApQ=null;A.pe(FK.AKv,FK);if(!this.B9)this.AmA();},A4D:function(FK){if(
!FK)return;if(this.AQ0())throw new Error(Hm);if(!!FK.Pg)throw new Error(IQ);FK.AJ=
this.B_;FK.Ah=null;if(!!this.B_)this.B_.Ah=FK;else this.B9=FK;this.B_=FK;FK.Pg=this;
},_Init:function(aArg){A.Core.AkX._Init.call(this,aArg);this.__proto__=C.ACD;},_Mark:
function(D){var B;A.Core.AkX._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsA={_Init:function(){C.AUI._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gh.__proto__=C.E0;C.AF7.__proto__=C.E0;C.ANi.__proto__=C.E0;
C.M6.__proto__=C.E0;C.AsN.__proto__=C.Mm;C.Axg.__proto__=C.Mm;C.Ae9.__proto__=C.
Mm;C.AsO.__proto__=C.Mm;C.AUI.__proto__=C.Rd;C.Aej.__proto__=C.Rd;C.AGI.__proto__=
C.Rd;C.Aff.__proto__=C.Rd;C.ANZ.__proto__=A.Core.Timer;C.ACD.__proto__=A.Core.AkX;
};C._ReInit=function(){var B;if((B=C.Aef._this))B._ReInit(),C.Aef._ReInit.call(B
);if((B=C.AsA._this))B._ReInit(),C.AsA._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aef._this)&&(B._cycle!=D))B._Done(C.Aef._this=null);if((B=C.AsA._this)&&(
B._cycle!=D))B._Done(C.AsA._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */