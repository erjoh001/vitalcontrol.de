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
C.E0={MV:null,timer:null,Qp:null,Sx:null,Ahf:null,Te:0,Ai_:0,U8:0,O8:0,AzT:0.001,
Ql:0,Ec:0,Dw:0,AN4:0.5,A4$:3,Axh:3,AuC:0.5,VQ:3,AU9:0,AU8:0,JM:0,Po:1000,Px:0,V1:
0,AhJ:0,Bw:false,AkW:false,AUi:false,Ap_:false,ALq:false,Mc:function(G){var B;if(
!this.timer)return;if(!this.Ai_){if(this.AUi)this.Ai_=-1;else this.Ai_=1;this.Te=
this.Ai_;this.Dw=this.timer.Bs;this.Ec=0;this.Ql=-1;}var KB;if((this.Ai_>0)&&(this.
Te>0))KB=this.BA9();else if((this.Ai_<0)&&(this.Te<0))KB=this.BBa();else if(this.
Ai_>0)KB=this.BA_();else KB=this.BA$();if(KB){this.Ar(false);(B=this.Qp)?B[1].call(
B[0],this):null;(B=this.Sx)?B[1].call(B[0],this):null;}},AKW:function(AN){var B;
if(!this.MV&&(((this.AhJ===19)||(this.AhJ===20))||(this.AhJ===21))){var AJw=this.
A4$+1;var ByC=Math.sqrt(this.AN4);var RI=0.5;var O;this.MV=A._NewObject(C.AGV,0);
this.MV.Pf.Set(0,1);this.MV.Aln.Set(0,1);for(O=1;O<AJw;O=O+1){this.MV.Pf.Set(O,this.
MV.Pf.Get(O-1)*ByC);this.MV.Aln.Set(O,this.MV.Aln.Get(O-1)*this.AN4);RI=RI+this.
MV.Pf.Get(O);}var Bzp=1/RI;this.MV.Pf.Set(0,0.5);RI=0;for(O=0;O<AJw;O=O+1){this.
MV.Pf.Set(O,this.MV.Pf.Get(O)*Bzp);RI=RI+this.MV.Pf.Get(O);}this.MV.Pf.Set(AJw,this.
MV.Pf.Get(AJw)+(1-RI));}if(this.AkW){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhJ){case 1:AN=Math.pow(AN,this.VQ);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VQ);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VQ)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VQ))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VQ*AN)-1)/(Math.
pow(2.718,this.VQ)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VQ*AN)-1)
/(Math.pow(2.718,this.VQ)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VQ*AN)-1)/(Math.pow(2.718,this.VQ)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VQ*AN)-1)/(Math.pow(2.718,this.VQ)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuC)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axh)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axh)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axh)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axh)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var BC=this.MV;var O=0;var GD=0;var K5=BC.Pf.
Get(0);var D8=1-AN;while(D8>K5){O=O+1;GD=K5;K5=K5+BC.Pf.Get(O);}AN=(D8-GD)/(K5-GD
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=BC.Aln.Get(O)*(1-(AN*AN));}}break;case 20:{
var BC=this.MV;var O=0;var GD=0;var K5=BC.Pf.Get(0);while(AN>K5){O=O+1;GD=K5;K5=
K5+BC.Pf.Get(O);}AN=(AN-GD)/(K5-GD);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(BC.Aln.
Get(O)*(1-(AN*AN)));}}break;case 21:{var BC=this.MV;var O=0;var GD=0;var K5=BC.Pf.
Get(0);var LJ=AN*2;var D8=LJ-1;if(LJ<1)D8=-D8;while(D8>K5){O=O+1;GD=K5;K5=K5+BC.
Pf.Get(O);}D8=(D8-GD)/(K5-GD);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(BC.Aln.Get(O
)*(1-(D8*D8)));}if(LJ<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap_){var LJ=AN;var AAh=1-LJ;AN=((AAh*LJ)*(this.O8+1))+(LJ*LJ);}else if(this.ALq){
var LJ=AN;var AAh=1-LJ;var BcD=LJ*LJ;var BzF=AAh*AAh;AN=(((BzF*LJ)*(this.O8+1))+((
AAh*BcD)*(this.U8+2)))+(BcD*LJ);}}this.AuH(AN);(B=this.Ahf)?B[1].call(B[0],this):
null;},BBa:function(){var Au=(this.timer.Bs-this.Dw)|0;if(Au<0)Au=-Au;var LD=this.
V1;var Oo=this.V1+this.Po;var Ha=this.Px+this.Po;var KB=false;var Ed=this.Ql;if(
!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dw=this.Dw+Oo;}if((this.Ec>0)&&(Au>=
Ha)){var Ib=(Au/Ha)|0;this.Ec=this.Ec+Ib;Au=Au-(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}
if((this.Ec>2)&&!this.JM)this.Ec=1;if(this.Ec>0)LD=this.Px;if((this.Ec>=this.JM)&&(
this.JM>0)){KB=true;Ed=0;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzT);else if(Ed>=0)Ed=
0;if(Ed!==this.Ql){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Ql){this.Ql=Ed;this.AKW(
Ed);}return KB;},BA$:function(){var Au=(this.Dw-this.timer.Bs)|0;var LD=this.V1;
var Oo=this.V1+this.Po;var Ha=this.Px+this.Po;var KB=false;var Ed=this.Ql;if((this.
Ec>1)&&(Au<0)){var Ib=(((-Au+Ha)-1)/Ha)|0;if((this.Ec-Ib)<=0)Ib=this.Ec-1;this.Ec=
this.Ec-Ib;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(((this.Ec===1)&&(Au<0))&&(this.
JM>0)){this.Ec=0;Au=Au+Oo;this.Dw=this.Dw+Oo;}if(((this.Ec===1)&&(Au<0))&&!this.
JM){var Ib=(((-Au+Ha)-1)/Ha)|0;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(this.Ec>
0)LD=this.Px;if(Au<0){KB=true;Ed=1;}else if(Au>=LD)Ed=1-((Au-LD)*this.AzT);else if(
Ed>=0)Ed=1;if(Ed!==this.Ql){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Ql){this.Ql=
Ed;this.AKW(Ed);}return KB;},BA_:function(){var Au=(this.Dw-this.timer.Bs)|0;var
LD=this.V1;var Oo=this.V1+this.Po;var Ha=this.Px+this.Po;var KB=false;var Ed=this.
Ql;if((this.Ec>1)&&(Au<0)){var Ib=(((-Au+Ha)-1)/Ha)|0;if((this.Ec-Ib)<=0)Ib=this.
Ec-1;this.Ec=this.Ec-Ib;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha);}if(((this.Ec===1)&&(
Au<0))&&(this.JM>0)){this.Ec=0;Au=Au+Oo;this.Dw=this.Dw+Oo;}if(((this.Ec===1)&&(
Au<0))&&!this.JM){var Ib=(((-Au+Ha)-1)/Ha)|0;Au=Au+(Ib*Ha);this.Dw=this.Dw+(Ib*Ha
);}if(this.Ec>0)LD=this.Px;if(Au<0){KB=true;Ed=0;}else if(Au>=LD)Ed=(Au-LD)*this.
AzT;else if(Ed>=0)Ed=0;if(Ed!==this.Ql){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Ql){this.Ql=Ed;this.AKW(Ed);}return KB;},BA9:function(){var Au=(this.timer.Bs-this.
Dw)|0;if(Au<0)Au=-Au;var LD=this.V1;var Oo=this.V1+this.Po;var Ha=this.Px+this.Po;
var KB=false;var Ed=this.Ql;if(!this.Ec&&(Au>=Oo)){this.Ec=1;Au=Au-Oo;this.Dw=this.
Dw+Oo;}if((this.Ec>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;this.Ec=this.Ec+Ib;Au=Au-(Ib*Ha
);this.Dw=this.Dw+(Ib*Ha);}if((this.Ec>2)&&!this.JM)this.Ec=1;if(this.Ec>0)LD=this.
Px;if((this.Ec>=this.JM)&&(this.JM>0)){KB=true;Ed=1;}else if(Au>=LD)Ed=(Au-LD)*this.
AzT;else if(Ed>=0)Ed=1;if(Ed!==this.Ql){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Ql){this.Ql=Ed;this.AKW(Ed);}return KB;},Ae6:function(E){if(this.AUi===E)return;
this.AUi=E;if(!this.Bw||!this.Ai_)return;if(E)this.Te=-1;else this.Te=1;this.Dw=(
this.timer.Avk()*2)-this.Dw;},AE4:function(E){if(E<0)E=0;if(E>1)E=1;this.AN4=E;}
,AET:function(E){if(E<1)E=1;if(E>10)E=10;this.A4$=E;this.MV=null;},AFu:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axh=E;},AEM:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuC=E;},AwA:function(E){if(E<1)E=1;if(E>100)E=100;this.VQ=E;},AFL:function(
E){if(this.AU9===E)return;this.AU9=E;if(this.AhJ===26){this.U8=E;this.Ap_=(this.
O8===this.U8)&&!!this.O8;this.ALq=!this.Ap_&&(this.O8!==this.U8);}},AFK:function(
E){if(this.AU8===E)return;this.AU8=E;if(this.AhJ===26){this.O8=E;this.Ap_=(this.
O8===this.U8)&&!!this.O8;this.ALq=!this.Ap_&&(this.O8!==this.U8);}},WD:function(
E){if(this.AhJ===E)return;this.AhJ=E;this.MV=null;switch(E){case 24:{this.O8=-1.1;
this.U8=1.1;}break;case 22:{this.O8=-1;this.U8=-2;}break;case 23:{this.O8=2;this.
U8=1;}break;case 25:{this.O8=1.1;this.U8=-1.1;}break;case 0:{this.O8=0;this.U8=0;
}break;default:{this.O8=this.AU8;this.U8=this.AU9;}}this.Ap_=(this.O8===this.U8)&&
!!this.O8;this.ALq=!this.Ap_&&(this.O8!==this.U8);},HM:function(E){if(E<0)E=0;this.
JM=E;},Fm:function(E){if(E<15)E=15;this.Po=E;this.AzT=1/E;},Uk:function(E){if(E<
0)E=0;this.Px=E;},AkA:function(E){if(E<0)E=0;this.V1=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aee);A.zV([this,this.Mc],this.timer
,0);this.Ai_=0;A.pe([this,this.Mc],this);}},AuH:function(Aam){},AnW:function(G){
this.Ar(false);},AnU:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MV)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sx)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gi={Q:null,A4:0,B2:255,Cw:0,AuH:function(Aam
){var F;this.A4=this.Cw+(Math.round((this.B2-this.Cw)*Aam)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gi;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AF7={
Q:null,A4:A.wf,B2:Cd,Cw:A.wf,AuH:function(Aam){var F;var En=this.Cw[0];var Dg=this.
Cw[1];En=En+(Math.round((this.B2[0]-En)*Aam)|0);Dg=Dg+(Math.round((this.B2[1]-Dg
)*Aam)|0);this.A4=[En,Dg];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AF7;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANm={Q:null,A4:0,B2:0xFFFFFFFF,Cw:0,AuH:
function(Aam){var F;var Pd=this.Cw&0xFF;var Aay=(this.Cw>>8)&0xFF;var Alt=(this.
Cw>>16)&0xFF;var Alm=(this.Cw>>24)&0xFF;Pd=Pd+((((this.B2&0xFF)-Pd)*Aam)|0);Aay=
Aay+(((((this.B2>>8)&0xFF)-Aay)*Aam)|0);Alt=Alt+(((((this.B2>>16)&0xFF)-Alt)*Aam
)|0);Alm=Alm+(((((this.B2>>24)&0xFF)-Alm)*Aam)|0);if(Pd<0)Pd=0;if(Pd>255)Pd=255;
if(Aay<0)Aay=0;if(Aay>255)Aay=255;if(Alt<0)Alt=0;if(Alt>255)Alt=255;if(Alm<0)Alm=
0;if(Alm>255)Alm=255;this.A4=(Pd&0xFF)|((Aay&0xFF)<<8)|((Alt&0xFF)<<16)|((Alm&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANm;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M4={A4:0,B2:1,Cw:0,AuH:function(Aam){this.A4=this.Cw+((
this.B2-this.Cw)*Aam);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M4;},_className:"Effects::FloatEffect"};C.TE={timer:null,Q:null,Ec:0,Dw:0,JM:0
,Po:1000,Px:1000,V1:0,Bw:false,Cw:false,B2:true,Mc:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dw=this.timer.Bs;this.Ec=0;}var Au=(this.timer.Bs-this.
Dw)|0;var Oo=this.V1+this.Po;var Ha=this.Px+this.Po;var LD=this.V1;var Jh=this.Ec;
if(!Jh&&(Au>=Oo)){Jh=1;Au=Au-Oo;}if((Jh>0)&&(Au>=Ha)){var Ib=(Au/Ha)|0;Au=Au-(Ib
*Ha);Jh=Jh+Ib;}if((Jh>2)&&!this.JM)Jh=1;if(Jh!==this.Ec){this.Dw=this.timer.Bs-(((
B=Au)<0)?B+0x100000000:B);this.Ec=Jh;}if(Jh>0)LD=this.Px;var KB=(Jh>=this.JM)&&(
this.JM>0);if(!!this.Q){if(!KB&&(Au>=LD))(F=this.Q,F[2].call(F[0],this.Cw));if(KB||((
Au<LD)&&(Jh>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KB)this.Ar(false);},HM:function(
E){if(E<0)E=0;this.JM=E;},Fm:function(E){if(E<100)E=100;this.Po=E;},Uk:function(
E){if(E<0)E=0;this.Px=E;},AkA:function(E){if(E<0)E=0;this.V1=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mc],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aee);A.zV([this,this.Mc
],this.timer,0);this.Ec=-1;}},AnW:function(G){this.Ar(false);},AnU:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TE;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mm={Pg:null,AJ:null,Ah:null,Ab:null,P:null,AKy:null,A2S:null,Akr:null,Du:true,
Bw:true,AcI:true,Ajk:false,Ajt:true,ZF:true,Q5:true,Mk:function(){if(!!this.Pg)this.
Pg.Mk();},AvN:function(){return true;},Zn:function(){},SE:function(){this.Mk();}
,_Init:function(aArg){this.__proto__=C.Mm;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKy)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2S)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Akr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsP={Ash:A.wf,MP:false,AvN:function(){return this.MP;},Zn:function(
){if(!this.Du&&!!this.P.Ab)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(!this.Bw)this.P.Ar(false);},SE:function(){if(this.Bw)this.P.Ar(
true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajt)this.P.Ab.Bb(this.P);
if(this.Du&&!this.AcI)this.P.H(A.abJ(this.P.M,this.Ash));if(this.Du){this.P.Dr(255
);this.P.Z(true);}if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MP=true;
this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);this.__proto__=C.AsP;
},_className:"Effects::VisibilityFader"};C.Axd={E0:null,MP:false,Aqb:false,AvN:function(
){return this.MP;},Zn:function(){if(this.Du)this.P.Dr(this.E0.B2);if(!this.Du&&!
this.P.G3)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.P.Ab.HN(this.
P);if(!this.Bw)this.P.Ar(false);},SE:function(){var B;if(this.AcI){if(this.P.Fl(
)&&!!this.P.Ab)this.E0.Cw=this.P.G3;else this.E0.Cw=0;}var AzW=((!this.P.Ab||!this.
P.G3)||!this.P.Fl())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AzX=((!this.Du&&((!this.P.Ab||!this.P.Fl())||this.Q5
))||!this.E0.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AzW&&AzX){this.E0.Cw=0;this.E0.B2=0;}this.Aqb=this.P.ASk(
);if(this.Bw)this.P.Ar(true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajt
)this.P.Ab.Bb(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Du&&!this.P.Fl()){this.P.Dr(this.E0.Cw);this.P.Z(true);}if(!this.Du&&((!this.P.Ab||
!this.P.Fl())||!this.P.G3)){this.MP=true;this.Mk();return;}if(!this.Du&&(this.E0.
Cw===this.E0.B2))this.P.Dr(this.E0.Cw);if(this.P.G3===this.E0.B2){this.MP=true;this.
Mk();return;}if(this.E0.Cw===this.E0.B2){this.MP=true;this.Mk();return;}if(!this.
E0.JM)this.E0.HM(1);this.E0.Q=[B=this.P,B.Awf,B.AZ5];this.E0.Ae6(false);this.E0.
AkW=false;this.E0.Sx=[this,this.AiN];this.E0.Ahf=null;this.E0.Ar(true);},AiN:function(
G){this.MP=true;this.Mk();},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Gi.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axd;},_Done:function(){this.__proto__=
C.Mm;this.E0._Done();C.Mm._Done.call(this);},_ReInit:function(){C.Mm._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Ae8={
Cq:null,D$:null,Ad4:false,MP:false,Aqb:false,AvN:function(){return this.MP;},Zn:
function(){if(this.Du){this.P.Dr(this.Cq.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Du&&!this.P.G3)this.P.Z(false);if((!this.Du&&this.Q5)&&!!this.P.Ab)this.
P.Ab.HN(this.P);if(this.Ad4)this.P.ArJ(this.Aqb);if(!this.Bw)this.P.Ar(false);},
SE:function(){var B;if(this.AcI){if(this.P.Fl()&&!!this.P.Ab)this.Cq.Cw=this.P.G3;
else this.Cq.Cw=0;this.D$.Cw=this.P.M.slice(0,2);}var AzW=((!this.P.Ab||!this.P.
G3)||!this.P.Fl())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AzX=((!this.Du&&((!this.P.Ab||!this.P.Fl())||this.Q5
))||!this.Cq.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzW&&AzX){
this.Cq.Cw=0;this.Cq.B2=0;this.D$.Cw=this.D$.B2;}this.Aqb=this.P.ASk();if(this.Bw
)this.P.Ar(true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajt)this.P.Ab.Bb(
this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Du&&!this.P.
Fl()){this.P.H(A.abJ(this.P.M,this.D$.Cw));this.P.Dr(this.Cq.Cw);this.P.Z(true);
}if(!this.Du&&((!this.P.Ab||!this.P.Fl())||!this.P.G3)){this.MP=true;this.Mk();return;
}if(!this.Du&&A.aaX(this.D$.Cw,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cw));
if(!this.Du&&(this.Cq.Cw===this.Cq.B2))this.P.Dr(this.Cq.Cw);if((this.P.G3===this.
Cq.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MP=true;this.Mk();return;}if((
this.Cq.Cw===this.Cq.B2)&&A.aaX(this.D$.Cw,this.D$.B2)){this.MP=true;this.Mk();return;
}if(!this.Cq.JM)this.Cq.HM(1);if(!this.D$.JM)this.D$.HM(1);if(this.Ad4)this.P.ArJ(
true);this.D$.Q=null;this.D$.Ae6(false);this.D$.AkW=false;this.D$.Sx=[this,this.
AiN];this.D$.Ahf=[this,this.AAq];this.Cq.Q=[B=this.P,B.Awf,B.AZ5];this.Cq.Ae6(false
);this.Cq.AkW=false;this.Cq.Sx=[this,this.AiN];this.Cq.Ahf=null;this.D$.Ar(!A.aaX(
this.D$.Cw,this.D$.B2));this.Cq.Ar(this.Cq.Cw!==this.Cq.B2);},AiN:function(G){this.
MP=!this.Cq.Bw&&!this.D$.Bw;this.Mk();},AAq:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A4));},_Init:function(aArg){C.Mm._Init.call(this,aArg);C.Gi._Init.call(this.
Cq={I:this},0);C.AF7._Init.call(this.D$={I:this},0);this.__proto__=C.Ae8;},_Done:
function(){this.__proto__=C.Mm;this.Cq._Done();this.D$._Done();C.Mm._Done.call(this
);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cq._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mm._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsQ={AdI:null,Cq:null,G5:null,Wh:null,FM:null,Ur:A.wf,AkK:A.wf,MP:false,Aqb:
false,AvN:function(){return this.MP;},Zn:function(){if(this.Du){this.P.Dr(this.Cq.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Ur));this.P.Z(true);}if(
!this.Du&&!this.Cq.B2){this.P.Dr(0);this.P.Z(false);}if(((!this.Du&&(this.Cq.B2>
0))&&!!this.P.Ab)&&!this.Q5){this.P.Dr(this.Cq.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Ur));this.P.Z(true);}if((!this.Du&&this.Q5)&&!!this.P.Ab)
this.P.Ab.HN(this.P);this.P.ArJ(this.Aqb);if(!!this.AdI)this.Ab.HN(this.AdI);if(
!this.Bw)this.P.Ar(false);},SE:function(){var B;if(this.AcI){if(this.P.Fl()&&!!this.
P.Ab)this.Cq.Cw=this.P.G3;else this.Cq.Cw=0;this.AkK=A.aaI(this.P.M);}var AzW=((
!this.P.Ab||!this.P.G3)||!this.P.Fl())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AzX=((!this.Du&&((!this.P.Ab||!this.
P.Fl())||this.Q5))||!this.Cq.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Ur),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AzW&&
AzX){this.Cq.Cw=0;this.Cq.B2=0;this.AkK=this.Ur;this.Wh.A7h();}this.Aqb=this.P.ASk(
);if(this.Bw)this.P.Ar(true);if((this.Du||this.Ajk)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Du&&this.ZF)this.P.Ab.ZE(this.P);if(this.Du&&this.Ajt
)this.P.Ab.Bb(this.P);if(!this.Du&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Du&&!this.P.Fl())this.P.Dr(this.Cq.Cw);if((!this.Du&&A.aaX(this.AkK,this.Ur))&&this.
Wh.ADO())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkK));if(!this.Du&&(
this.Cq.Cw===this.Cq.B2))this.P.Dr(this.Cq.Cw);if(!this.Du&&((!this.P.Ab||!this.
P.Fl())||!this.P.G3)){this.MP=true;this.Mk();return;}if(((this.Du&&(this.P.G3===
this.Cq.B2))&&A.aaX(A.aaI(this.P.M),this.Ur))&&this.P.Fl()){this.MP=true;this.Mk(
);return;}if(((!this.Du&&(this.P.G3===this.Cq.B2))&&A.aaX(A.aaI(this.P.M),this.Ur
))&&this.Wh.ADO()){this.MP=true;this.Mk();return;}if(((this.Cq.Cw===this.Cq.B2)&&
A.aaX(this.AkK,this.Ur))&&this.Wh.ADO()){this.MP=true;this.Mk();return;}this.P.ArJ(
true);this.P.Z(false);this.AdI=A._NewObject(A.acg.AVx,0);this.AdI.Bl8(this.P);this.
AdI.Dr(this.Cq.Cw);this.AdI.Bm3(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AL8(this.AdI,this.P);if(!this.Cq.JM)this.Cq.HM(1);if(!this.G5.JM)this.G5.HM(
1);this.G5.Ae6(false);this.G5.AkW=false;this.G5.Sx=[this,this.AiN];this.G5.Ahf=[
this,this.AAq];if(this.Du){this.G5.Cw=0;this.G5.B2=1;}else{this.G5.Cw=1;this.G5.
B2=0;}this.Cq.Q=[B=this.AdI,B.Awf,B.Dr];this.Cq.Ae6(false);this.Cq.AkW=false;this.
Cq.Sx=[this,this.AiN];this.Cq.Ahf=null;this.G5.Ar(!A.aaX(this.AkK,this.Ur)||!this.
Wh.ADO());this.Cq.Ar(this.Cq.Cw!==this.Cq.B2);},AiN:function(G){this.MP=!this.Cq.
Bw&&!this.G5.Bw;this.Mk();},AAq:function(G){var B;var ABe=A.abe(this.Ur,this.AkK
);if(!this.Du)ABe=[-ABe[0],-ABe[1]];this.FM.A7h();this.FM.AgO=this.Wh.AgO;this.FM.
Bpp(ABe[0],ABe[1],0);this.FM.Bi2(this.Wh,this.FM,this.G5.A4);if(this.Du)this.AdI.
A$A(this.AkK,this.FM);else this.AdI.A$A(this.Ur,this.FM);},_Init:function(aArg){
C.Mm._Init.call(this,aArg);C.Gi._Init.call(this.Cq={I:this},0);C.M4._Init.call(this.
G5={I:this},0);A.Graphics.AxT._Init.call(this.Wh={I:this},0);A.Graphics.AxT._Init.
call(this.FM={I:this},0);this.__proto__=C.AsQ;},_Done:function(){this.__proto__=
C.Mm;this.Cq._Done();this.G5._Done();this.Wh._Done();this.FM._Done();C.Mm._Done.
call(this);},_ReInit:function(){C.Mm._ReInit.call(this);this.Cq._ReInit();this.G5.
_ReInit();this.Wh._ReInit();this.FM._ReInit();},_Mark:function(D){var B;C.Mm._Mark.
call(this,D);if((B=this.AdI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rd={R_:function(){return null;},R9:function(
){return null;},Ad_:function(){return this.R_();},Ad9:function(){return this.R9(
);},_Init:function(aArg){this.__proto__=C.Rd;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AUJ={R_:function(){var Ao=A._NewObject(C.AsP,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=
false;Ao.ZF=true;Ao.AcI=false;Ao.Akr=[this,this.ApL];return Ao;},R9:function(){var
Ao=A._NewObject(C.AsP,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;return Ao;},Ad_:function(
){var Ao=C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var
Ao=A._NewObject(C.AsP,0);Ao.Du=false;Ao.Bw=true;Ao.Ajk=true;Ao.Q5=false;return Ao;
},ApL:function(G){var B;var Ao=(C.AsP.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C3[1]/2)|0)];Ao.Ash=pos;},_Init:function(aArg){C.Rd._Init.
call(this,aArg);this.__proto__=C.AUJ;},_className:"Effects::ShowHideTransition"};
C.Aei={ACv:500,R_:function(){var Ao=A._NewObject(C.Ae8,0);Ao.Du=true;Ao.Bw=true;
Ao.Ajt=false;Ao.ZF=true;Ao.AcI=true;Ao.Ad4=false;Ao.Akr=[this,this.ApL];Ao.Cq.Fm(
this.ACv);Ao.Cq.Cw=0;Ao.Cq.B2=255;Ao.D$.Fm(this.ACv);Ao.D$.WD(23);return Ao;},R9:
function(){var Ao=A._NewObject(C.Axd,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcI=
true;Ao.E0.Cw=255;Ao.E0.B2=0;Ao.E0.Fm(this.ACv);return Ao;},Ad_:function(){var Ao=
C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var Ao=C.Rd.
Ad9.call(this);Ao.Ajk=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApL:function(G){var
B;var Ao=(C.Ae8.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fl())||!Ao.P.G3)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=C.Aei;
},_className:"Effects::FadeInOutTransition"};C.AGI={Kf:0x12,AuW:0,Ad4:false,R_:function(
){var Ao=A._NewObject(C.Ae8,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZF=true;Ao.
AcI=true;Ao.Ad4=this.Ad4;Ao.Akr=[this,this.ApL];Ao.Cq.Fm(500);Ao.Cq.AkA(0);Ao.Cq.
Cw=0;Ao.Cq.B2=255;Ao.D$.Fm(500);Ao.D$.WD(23);Ao.D$.AFK(0);Ao.D$.AFL(0);Ao.D$.AwA(
3);Ao.D$.AEM(0.5);Ao.D$.AFu(3);Ao.D$.AET(3);Ao.D$.AE4(0.5);return Ao;},R9:function(
){var Ao=A._NewObject(C.Ae8,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcI=true;Ao.
Ad4=this.Ad4;Ao.Akr=[this,this.A24];Ao.Cq.Cw=255;Ao.Cq.B2=0;Ao.Cq.Fm(500);Ao.Cq.
AkA(0);Ao.D$.Fm(500);Ao.D$.WD(23);Ao.D$.AFK(0);Ao.D$.AFL(0);Ao.D$.AwA(3);Ao.D$.AEM(
0.5);Ao.D$.AFu(3);Ao.D$.AET(3);Ao.D$.AE4(0.5);return Ao;},Ad_:function(){var Ao=
C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var Ao=C.Rd.
Ad9.call(this);Ao.Ajk=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApL:function(G){var
B;var Ao=(C.Ae8.isPrototypeOf(G)?G:null);var Bu=this.Kf;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C3[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C3[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C3[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fl())||!Ao.P.G3)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hz=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AuW){case 5:pos=[pos[0],-C3[1]];break;case 3:{
pos=[pos[0],-C3[1]];pos=[Hz[0],pos[1]];}break;case 8:pos=[-C3[0],-C3[1]];break;case
2:pos=[Hz[0],pos[1]];break;case 7:pos=[-C3[0],pos[1]];break;case 4:pos=[pos[0],Hz[
1]];break;case 1:{pos=[pos[0],Hz[1]];pos=[Hz[0],pos[1]];}break;case 6:{pos=[pos[
0],Hz[1]];pos=[-C3[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A24:
function(G){var B;var Ao=(C.Ae8.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var Hz=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AuW){case 5:pos=[pos[0],Hz[1]];break;case 3:{pos=[pos[0],Hz[1]];pos=[-
C3[0],pos[1]];}break;case 8:{pos=[pos[0],Hz[1]];pos=[Hz[0],pos[1]];}break;case 2:
pos=[-C3[0],pos[1]];break;case 7:pos=[Hz[0],pos[1]];break;case 4:pos=[pos[0],-C3[
1]];break;case 1:pos=[-C3[0],-C3[1]];break;case 6:{pos=[pos[0],-C3[1]];pos=[Hz[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rd._Init.call(this
,aArg);this.__proto__=C.AGI;},_className:"Effects::SlideTransition"};C.Afe={R_:function(
){var Ao=A._NewObject(C.AsQ,0);Ao.Du=true;Ao.Bw=true;Ao.Ajt=false;Ao.ZF=true;Ao.
AcI=true;Ao.Akr=[this,this.ApL];Ao.Cq.Fm(500);Ao.Cq.AkA(0);Ao.Cq.Cw=0;Ao.Cq.B2=255;
Ao.G5.Fm(500);Ao.G5.WD(23);Ao.G5.AFK(0);Ao.G5.AFL(0);Ao.G5.AwA(3);Ao.G5.AEM(0.5);
Ao.G5.AFu(3);Ao.G5.AET(3);Ao.G5.AE4(0.5);Ao.Wh.Afd(0.5,0.5,1);return Ao;},R9:function(
){var Ao=A._NewObject(C.AsQ,0);Ao.Du=false;Ao.Bw=false;Ao.Q5=true;Ao.AcI=true;Ao.
Akr=[this,this.A24];Ao.Cq.Cw=255;Ao.Cq.B2=0;Ao.Cq.Fm(500);Ao.Cq.AkA(0);Ao.G5.Fm(
500);Ao.G5.WD(23);Ao.G5.AFK(0);Ao.G5.AFL(0);Ao.G5.AwA(3);Ao.G5.AEM(0.5);Ao.G5.AFu(
3);Ao.G5.AET(3);Ao.G5.AE4(0.5);Ao.Wh.Afd(0.5,0.5,1);return Ao;},Ad_:function(){var
Ao=C.Rd.Ad_.call(this);Ao.ZF=false;Ao.Bw=true;return Ao;},Ad9:function(){var Ao=
C.Rd.Ad9.call(this);Ao.Ajk=true;Ao.Q5=false;Ao.Bw=true;return Ao;},ApL:function(
G){var B;var Ao=(C.AsQ.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C3=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C3[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C3[1]/2)|0)];Ao.Ur=A.abf(pos,[(C3[0]/2)|0,(C3[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fl())||!Ao.P.G3)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Ur,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A24:function(G){var Ao=(C.AsQ.isPrototypeOf(G)?G:null);Ao.
Ur=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=
C.Afe;},_className:"Effects::ScaleTransition"};C.AhJ={BD4:0,BEJ:1,BEL:2,BEK:3,BDq:
4,BDs:5,BDr:6,BFd:7,BFf:8,BFe:9,BCX:10,BCZ:11,BCY:12,BCD:13,BCF:14,BCE:15,BDh:16
,BDj:17,BDi:18,BCO:19,BCQ:20,BCP:21,BDg:22,BDu:23,BDf:24,BDv:25,BC4:26};C.BC$={A4D:
0x1,A4C:0x2,A4E:0x4,A4H:0x8,A4G:0x10,A4F:0x20};C.AN3={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN3;},_className:"Effects::EffectTimerClass"};C.
Aee={_Init:function(){C.AN3._Init.call(this,0);this.PO(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AGV={Pf:A.abi(12,0
,null),Aln:A.abi(12,0,null),_Init:function(aArg){(this.Pf=[]).__proto__=C.AGV.Pf;(
this.Aln=[]).__proto__=C.AGV.Aln;this.__proto__=C.AGV;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACC={B$:null,B_:null,A7V:function(Atq){var Ao=this.B_;while(
!!Ao){Ao.Zn();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B_;while(!!Ao){A.pe(Ao.A2S
,Ao);Ao=Ao.Ah;}},A7U:function(Atq){var Ao=this.B_;while(!!Ao){A.pe(Ao.AKy,Ao);Ao=
Ao.Ah;}this.B_=null;this.B$=null;},SE:function(Atq){var B;if(!this.B_)this.Mk();
var Ao=this.B_;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApR=null;Ao=Ao.
Ah;}Ao=this.B_;while(!!Ao){(B=Ao.Akr)?B[1].call(B[0],Ao):null;Ao.SE();Ao=Ao.Ah;}
},Mk:function(){var Ao=this.B_;while(!!Ao&&Ao.AvN())Ao=Ao.Ah;if(!Ao)A.Core.AkX.Mk.
call(this);},BnW:function(FK){if(!FK)return;if(this.AQ4())throw new Error(BF);if(
FK.Pg!==this)throw new Error(E4);if(!!FK.Ah)FK.Ah.AJ=FK.AJ;else this.B$=FK.AJ;if(
!!FK.AJ)FK.AJ.Ah=FK.Ah;else this.B_=FK.Ah;FK.Pg=null;FK.Ah=null;FK.AJ=null;if(!!
FK.P)FK.P.ApR=null;A.pe(FK.AKy,FK);if(!this.B_)this.Amx();},A4x:function(FK){if(
!FK)return;if(this.AQ4())throw new Error(Hm);if(!!FK.Pg)throw new Error(IQ);FK.AJ=
this.B$;FK.Ah=null;if(!!this.B$)this.B$.Ah=FK;else this.B_=FK;this.B$=FK;FK.Pg=this;
},_Init:function(aArg){A.Core.AkX._Init.call(this,aArg);this.__proto__=C.ACC;},_Mark:
function(D){var B;A.Core.AkX._Mark.call(this,D);if((B=this.B$)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsC={_Init:function(){C.AUJ._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gi.__proto__=C.E0;C.AF7.__proto__=C.E0;C.ANm.__proto__=C.E0;
C.M4.__proto__=C.E0;C.AsP.__proto__=C.Mm;C.Axd.__proto__=C.Mm;C.Ae8.__proto__=C.
Mm;C.AsQ.__proto__=C.Mm;C.AUJ.__proto__=C.Rd;C.Aei.__proto__=C.Rd;C.AGI.__proto__=
C.Rd;C.Afe.__proto__=C.Rd;C.AN3.__proto__=A.Core.Timer;C.ACC.__proto__=A.Core.AkX;
};C._ReInit=function(){var B;if((B=C.Aee._this))B._ReInit(),C.Aee._ReInit.call(B
);if((B=C.AsC._this))B._ReInit(),C.AsC._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aee._this)&&(B._cycle!=D))B._Done(C.Aee._this=null);if((B=C.AsC._this)&&(
B._cycle!=D))B._Done(C.AsC._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */