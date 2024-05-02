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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acl)throw new Error("The unit file 'Effects.js' included twice!");index.
acl=(function(){var A=index;var C={};
var Ce=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var E7="The fader doesn\'t belong to this task";var Hr="Trying to add a fader to a task, which is actually running";
var IV="The fader belongs already to a task";
C.E0={M3:null,timer:null,Qw:null,SC:null,Ahp:null,Tm:0,Aja:0,Vb:0,Pb:0,Az5:0.001,
Qs:0,Ec:0,Dx:0,AN$:0.5,A5O:3,Axs:3,AuO:0.5,VX:3,AVs:0,AVr:0,JU:0,Pu:1000,PD:0,V6:
0,AhS:0,Bw:false,AkY:false,AUC:false,Ap$:false,ALx:false,Mi:function(G){var B;if(
!this.timer)return;if(!this.Aja){if(this.AUC)this.Aja=-1;else this.Aja=1;this.Tm=
this.Aja;this.Dx=this.timer.Bs;this.Ec=0;this.Qs=-1;}var KH;if((this.Aja>0)&&(this.
Tm>0))KH=this.BB6();else if((this.Aja<0)&&(this.Tm<0))KH=this.BB9();else if(this.
Aja>0)KH=this.BB7();else KH=this.BB8();if(KH){this.Ar(false);(B=this.Qw)?B[1].call(
B[0],this):null;(B=this.SC)?B[1].call(B[0],this):null;}},AK3:function(AN){var B;
if(!this.M3&&(((this.AhS===19)||(this.AhS===20))||(this.AhS===21))){var AJF=this.
A5O+1;var Bzu=Math.sqrt(this.AN$);var RN=0.5;var O;this.M3=A._NewObject(C.AG8,0);
this.M3.Pl.Set(0,1);this.M3.Alr.Set(0,1);for(O=1;O<AJF;O=O+1){this.M3.Pl.Set(O,this.
M3.Pl.Get(O-1)*Bzu);this.M3.Alr.Set(O,this.M3.Alr.Get(O-1)*this.AN$);RN=RN+this.
M3.Pl.Get(O);}var BAi=1/RN;this.M3.Pl.Set(0,0.5);RN=0;for(O=0;O<AJF;O=O+1){this.
M3.Pl.Set(O,this.M3.Pl.Get(O)*BAi);RN=RN+this.M3.Pl.Get(O);}this.M3.Pl.Set(AJF,this.
M3.Pl.Get(AJF)+(1-RN));}if(this.AkY){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhS){case 1:AN=Math.pow(AN,this.VX);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VX);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VX)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VX))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VX*AN)-1)/(Math.
pow(2.718,this.VX)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VX*AN)-1)
/(Math.pow(2.718,this.VX)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VX*AN)-1)/(Math.pow(2.718,this.VX)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VX*AN)-1)/(Math.pow(2.718,this.VX)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuO)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuO)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuO)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuO)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axs)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axs)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axs)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axs)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.M3;var O=0;var GG=0;var K9=Bz.Pl.
Get(0);var D8=1-AN;while(D8>K9){O=O+1;GG=K9;K9=K9+Bz.Pl.Get(O);}AN=(D8-GG)/(K9-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alr.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.M3;var O=0;var GG=0;var K9=Bz.Pl.Get(0);while(AN>K9){O=O+1;GG=K9;K9=
K9+Bz.Pl.Get(O);}AN=(AN-GG)/(K9-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alr.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.M3;var O=0;var GG=0;var K9=Bz.Pl.
Get(0);var LM=AN*2;var D8=LM-1;if(LM<1)D8=-D8;while(D8>K9){O=O+1;GG=K9;K9=K9+Bz.
Pl.Get(O);}D8=(D8-GG)/(K9-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alr.Get(O
)*(1-(D8*D8)));}if(LM<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap$){var LM=AN;var AAt=1-LM;AN=((AAt*LM)*(this.Pb+1))+(LM*LM);}else if(this.ALx){
var LM=AN;var AAt=1-LM;var Bds=LM*LM;var BAz=AAt*AAt;AN=(((BAz*LM)*(this.Pb+1))+((
AAt*Bds)*(this.Vb+2)))+(Bds*LM);}}this.AuT(AN);(B=this.Ahp)?B[1].call(B[0],this):
null;},BB9:function(){var Av=(this.timer.Bs-this.Dx)|0;if(Av<0)Av=-Av;var LI=this.
V6;var Ot=this.V6+this.Pu;var Hg=this.PD+this.Pu;var KH=false;var Ed=this.Qs;if(
!this.Ec&&(Av>=Ot)){this.Ec=1;Av=Av-Ot;this.Dx=this.Dx+Ot;}if((this.Ec>0)&&(Av>=
Hg)){var If=(Av/Hg)|0;this.Ec=this.Ec+If;Av=Av-(If*Hg);this.Dx=this.Dx+(If*Hg);}
if((this.Ec>2)&&!this.JU)this.Ec=1;if(this.Ec>0)LI=this.PD;if((this.Ec>=this.JU)&&(
this.JU>0)){KH=true;Ed=0;}else if(Av>=LI)Ed=1-((Av-LI)*this.Az5);else if(Ed>=0)Ed=
0;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qs){this.Qs=Ed;this.AK3(
Ed);}return KH;},BB8:function(){var Av=(this.Dx-this.timer.Bs)|0;var LI=this.V6;
var Ot=this.V6+this.Pu;var Hg=this.PD+this.Pu;var KH=false;var Ed=this.Qs;if((this.
Ec>1)&&(Av<0)){var If=(((-Av+Hg)-1)/Hg)|0;if((this.Ec-If)<=0)If=this.Ec-1;this.Ec=
this.Ec-If;Av=Av+(If*Hg);this.Dx=this.Dx+(If*Hg);}if(((this.Ec===1)&&(Av<0))&&(this.
JU>0)){this.Ec=0;Av=Av+Ot;this.Dx=this.Dx+Ot;}if(((this.Ec===1)&&(Av<0))&&!this.
JU){var If=(((-Av+Hg)-1)/Hg)|0;Av=Av+(If*Hg);this.Dx=this.Dx+(If*Hg);}if(this.Ec>
0)LI=this.PD;if(Av<0){KH=true;Ed=1;}else if(Av>=LI)Ed=1-((Av-LI)*this.Az5);else if(
Ed>=0)Ed=1;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qs){this.Qs=
Ed;this.AK3(Ed);}return KH;},BB7:function(){var Av=(this.Dx-this.timer.Bs)|0;var
LI=this.V6;var Ot=this.V6+this.Pu;var Hg=this.PD+this.Pu;var KH=false;var Ed=this.
Qs;if((this.Ec>1)&&(Av<0)){var If=(((-Av+Hg)-1)/Hg)|0;if((this.Ec-If)<=0)If=this.
Ec-1;this.Ec=this.Ec-If;Av=Av+(If*Hg);this.Dx=this.Dx+(If*Hg);}if(((this.Ec===1)&&(
Av<0))&&(this.JU>0)){this.Ec=0;Av=Av+Ot;this.Dx=this.Dx+Ot;}if(((this.Ec===1)&&(
Av<0))&&!this.JU){var If=(((-Av+Hg)-1)/Hg)|0;Av=Av+(If*Hg);this.Dx=this.Dx+(If*Hg
);}if(this.Ec>0)LI=this.PD;if(Av<0){KH=true;Ed=0;}else if(Av>=LI)Ed=(Av-LI)*this.
Az5;else if(Ed>=0)Ed=0;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qs){this.Qs=Ed;this.AK3(Ed);}return KH;},BB6:function(){var Av=(this.timer.Bs-this.
Dx)|0;if(Av<0)Av=-Av;var LI=this.V6;var Ot=this.V6+this.Pu;var Hg=this.PD+this.Pu;
var KH=false;var Ed=this.Qs;if(!this.Ec&&(Av>=Ot)){this.Ec=1;Av=Av-Ot;this.Dx=this.
Dx+Ot;}if((this.Ec>0)&&(Av>=Hg)){var If=(Av/Hg)|0;this.Ec=this.Ec+If;Av=Av-(If*Hg
);this.Dx=this.Dx+(If*Hg);}if((this.Ec>2)&&!this.JU)this.Ec=1;if(this.Ec>0)LI=this.
PD;if((this.Ec>=this.JU)&&(this.JU>0)){KH=true;Ed=1;}else if(Av>=LI)Ed=(Av-LI)*this.
Az5;else if(Ed>=0)Ed=1;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qs){this.Qs=Ed;this.AK3(Ed);}return KH;},Ae$:function(E){if(this.AUC===E)return;
this.AUC=E;if(!this.Bw||!this.Aja)return;if(E)this.Tm=-1;else this.Tm=1;this.Dx=(
this.timer.Avw()*2)-this.Dx;},AFg:function(E){if(E<0)E=0;if(E>1)E=1;this.AN$=E;}
,AE8:function(E){if(E<1)E=1;if(E>10)E=10;this.A5O=E;this.M3=null;},AFI:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axs=E;},AE0:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuO=E;},AwL:function(E){if(E<1)E=1;if(E>100)E=100;this.VX=E;},AFZ:function(
E){if(this.AVs===E)return;this.AVs=E;if(this.AhS===26){this.Vb=E;this.Ap$=(this.
Pb===this.Vb)&&!!this.Pb;this.ALx=!this.Ap$&&(this.Pb!==this.Vb);}},AFY:function(
E){if(this.AVr===E)return;this.AVr=E;if(this.AhS===26){this.Pb=E;this.Ap$=(this.
Pb===this.Vb)&&!!this.Pb;this.ALx=!this.Ap$&&(this.Pb!==this.Vb);}},WI:function(
E){if(this.AhS===E)return;this.AhS=E;this.M3=null;switch(E){case 24:{this.Pb=-1.1;
this.Vb=1.1;}break;case 22:{this.Pb=-1;this.Vb=-2;}break;case 23:{this.Pb=2;this.
Vb=1;}break;case 25:{this.Pb=1.1;this.Vb=-1.1;}break;case 0:{this.Pb=0;this.Vb=0;
}break;default:{this.Pb=this.AVr;this.Vb=this.AVs;}}this.Ap$=(this.Pb===this.Vb)&&
!!this.Pb;this.ALx=!this.Ap$&&(this.Pb!==this.Vb);},HO:function(E){if(E<0)E=0;this.
JU=E;},Fr:function(E){if(E<15)E=15;this.Pu=E;this.Az5=1/E;},Ut:function(E){if(E<
0)E=0;this.PD=E;},AkB:function(E){if(E<0)E=0;this.V6=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mi],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aej);A.zV([this,this.Mi],this.timer
,0);this.Aja=0;A.pe([this,this.Mi],this);}},AuT:function(Aan){},AnZ:function(G){
this.Ar(false);},AnX:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M3)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SC)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gm={Q:null,A5:0,B2:255,Cx:0,AuT:function(Aan
){var F;this.A5=this.Cx+(Math.round((this.B2-this.Cx)*Aan)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gm;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGj={
Q:null,A5:A.wf,B2:Ce,Cx:A.wf,AuT:function(Aan){var F;var Ep=this.Cx[0];var Di=this.
Cx[1];Ep=Ep+(Math.round((this.B2[0]-Ep)*Aan)|0);Di=Di+(Math.round((this.B2[1]-Di
)*Aan)|0);this.A5=[Ep,Di];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AGj;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANu={Q:null,A5:0,B2:0xFFFFFFFF,Cx:0,AuT:
function(Aan){var F;var Pj=this.Cx&0xFF;var Aay=(this.Cx>>8)&0xFF;var Alx=(this.
Cx>>16)&0xFF;var Alq=(this.Cx>>24)&0xFF;Pj=Pj+((((this.B2&0xFF)-Pj)*Aan)|0);Aay=
Aay+(((((this.B2>>8)&0xFF)-Aay)*Aan)|0);Alx=Alx+(((((this.B2>>16)&0xFF)-Alx)*Aan
)|0);Alq=Alq+(((((this.B2>>24)&0xFF)-Alq)*Aan)|0);if(Pj<0)Pj=0;if(Pj>255)Pj=255;
if(Aay<0)Aay=0;if(Aay>255)Aay=255;if(Alx<0)Alx=0;if(Alx>255)Alx=255;if(Alq<0)Alq=
0;if(Alq>255)Alq=255;this.A5=(Pj&0xFF)|((Aay&0xFF)<<8)|((Alx&0xFF)<<16)|((Alq&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANu;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M$={A5:0,B2:1,Cx:0,AuT:function(Aan){this.A5=this.Cx+((
this.B2-this.Cx)*Aan);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M$;},_className:"Effects::FloatEffect"};C.TM={timer:null,Q:null,Ec:0,Dx:0,JU:0
,Pu:1000,PD:1000,V6:0,Bw:false,Cx:false,B2:true,Mi:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.
Dx)|0;var Ot=this.V6+this.Pu;var Hg=this.PD+this.Pu;var LI=this.V6;var Jm=this.Ec;
if(!Jm&&(Av>=Ot)){Jm=1;Av=Av-Ot;}if((Jm>0)&&(Av>=Hg)){var If=(Av/Hg)|0;Av=Av-(If
*Hg);Jm=Jm+If;}if((Jm>2)&&!this.JU)Jm=1;if(Jm!==this.Ec){this.Dx=this.timer.Bs-(((
B=Av)<0)?B+0x100000000:B);this.Ec=Jm;}if(Jm>0)LI=this.PD;var KH=(Jm>=this.JU)&&(
this.JU>0);if(!!this.Q){if(!KH&&(Av>=LI))(F=this.Q,F[2].call(F[0],this.Cx));if(KH||((
Av<LI)&&(Jm>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KH)this.Ar(false);},HO:function(
E){if(E<0)E=0;this.JU=E;},Fr:function(E){if(E<100)E=100;this.Pu=E;},Ut:function(
E){if(E<0)E=0;this.PD=E;},AkB:function(E){if(E<0)E=0;this.V6=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mi],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aej);A.zV([this,this.Mi
],this.timer,0);this.Ec=-1;}},AnZ:function(G){this.Ar(false);},AnX:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TM;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mt={Pm:null,AJ:null,Ah:null,Ab:null,P:null,AKG:null,A3r:null,Aks:null,Dt:true,
Bw:true,AcJ:true,Ajm:false,Ajw:true,ZG:true,Q9:true,Mr:function(){if(!!this.Pm)this.
Pm.Mr();},AvX:function(){return true;},Zn:function(){},SL:function(){this.Mr();}
,_Init:function(aArg){this.__proto__=C.Mt;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKG)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3r)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aks)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsU={Ask:A.wf,MV:false,AvX:function(){return this.MV;},Zn:function(
){if(!this.Dt&&!!this.P.Ab)this.P.Z(false);if((!this.Dt&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HP(this.P);if(!this.Bw)this.P.Ar(false);},SL:function(){if(this.Bw)this.P.Ar(
true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dt&&this.ZG)this.P.Ab.ZF(this.P);if(this.Dt&&this.Ajw)this.P.Ab.Bb(this.P);
if(this.Dt&&!this.AcJ)this.P.H(A.abJ(this.P.M,this.Ask));if(this.Dt){this.P.C4(255
);this.P.Z(true);}if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MV=true;
this.Mr();},_Init:function(aArg){C.Mt._Init.call(this,aArg);this.__proto__=C.AsU;
},_className:"Effects::VisibilityFader"};C.Axo={E0:null,MV:false,Aqc:false,AvX:function(
){return this.MV;},Zn:function(){if(this.Dt)this.P.C4(this.E0.B2);if(!this.Dt&&!
this.P.G9)this.P.Z(false);if((!this.Dt&&this.Q9)&&!!this.P.Ab)this.P.Ab.HP(this.
P);if(!this.Bw)this.P.Ar(false);},SL:function(){var B;if(this.AcJ){if(this.P.Fq(
)&&!!this.P.Ab)this.E0.Cx=this.P.G9;else this.E0.Cx=0;}var Az8=((!this.P.Ab||!this.
P.G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var Az9=((!this.Dt&&((!this.P.Ab||!this.P.Fq())||this.Q9
))||!this.E0.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(Az8&&Az9){this.E0.Cx=0;this.E0.B2=0;}this.Aqc=this.P.ASE(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZG)this.P.Ab.ZF(this.P);if(this.Dt&&this.Ajw
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fq()){this.P.C4(this.E0.Cx);this.P.Z(true);}if(!this.Dt&&((!this.P.Ab||
!this.P.Fq())||!this.P.G9)){this.MV=true;this.Mr();return;}if(!this.Dt&&(this.E0.
Cx===this.E0.B2))this.P.C4(this.E0.Cx);if(this.P.G9===this.E0.B2){this.MV=true;this.
Mr();return;}if(this.E0.Cx===this.E0.B2){this.MV=true;this.Mr();return;}if(!this.
E0.JU)this.E0.HO(1);this.E0.Q=[B=this.P,B.Awq,B.A0z];this.E0.Ae$(false);this.E0.
AkY=false;this.E0.SC=[this,this.AiQ];this.E0.Ahp=null;this.E0.Ar(true);},AiQ:function(
G){this.MV=true;this.Mr();},_Init:function(aArg){C.Mt._Init.call(this,aArg);C.Gm.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axo;},_Done:function(){this.__proto__=
C.Mt;this.E0._Done();C.Mt._Done.call(this);},_ReInit:function(){C.Mt._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mt._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Afb={
Cp:null,D$:null,Ad9:false,MV:false,Aqc:false,AvX:function(){return this.MV;},Zn:
function(){if(this.Dt){this.P.C4(this.Cp.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Dt&&!this.P.G9)this.P.Z(false);if((!this.Dt&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HP(this.P);if(this.Ad9)this.P.ArL(this.Aqc);if(!this.Bw)this.P.Ar(false);},
SL:function(){var B;if(this.AcJ){if(this.P.Fq()&&!!this.P.Ab)this.Cp.Cx=this.P.G9;
else this.Cp.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var Az8=((!this.P.Ab||!this.P.
G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var Az9=((!this.Dt&&((!this.P.Ab||!this.P.Fq())||this.Q9
))||!this.Cp.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az8&&Az9){
this.Cp.Cx=0;this.Cp.B2=0;this.D$.Cx=this.D$.B2;}this.Aqc=this.P.ASE();if(this.Bw
)this.P.Ar(true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dt&&this.ZG)this.P.Ab.ZF(this.P);if(this.Dt&&this.Ajw)this.P.Ab.Bb(
this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dt&&!this.P.
Fq()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.C4(this.Cp.Cx);this.P.Z(true);
}if(!this.Dt&&((!this.P.Ab||!this.P.Fq())||!this.P.G9)){this.MV=true;this.Mr();return;
}if(!this.Dt&&A.aaX(this.D$.Cx,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Dt&&(this.Cp.Cx===this.Cp.B2))this.P.C4(this.Cp.Cx);if((this.P.G9===this.
Cp.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MV=true;this.Mr();return;}if((
this.Cp.Cx===this.Cp.B2)&&A.aaX(this.D$.Cx,this.D$.B2)){this.MV=true;this.Mr();return;
}if(!this.Cp.JU)this.Cp.HO(1);if(!this.D$.JU)this.D$.HO(1);if(this.Ad9)this.P.ArL(
true);this.D$.Q=null;this.D$.Ae$(false);this.D$.AkY=false;this.D$.SC=[this,this.
AiQ];this.D$.Ahp=[this,this.AAC];this.Cp.Q=[B=this.P,B.Awq,B.A0z];this.Cp.Ae$(false
);this.Cp.AkY=false;this.Cp.SC=[this,this.AiQ];this.Cp.Ahp=null;this.D$.Ar(!A.aaX(
this.D$.Cx,this.D$.B2));this.Cp.Ar(this.Cp.Cx!==this.Cp.B2);},AiQ:function(G){this.
MV=!this.Cp.Bw&&!this.D$.Bw;this.Mr();},AAC:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A5));},_Init:function(aArg){C.Mt._Init.call(this,aArg);C.Gm._Init.call(this.
Cp={I:this},0);C.AGj._Init.call(this.D$={I:this},0);this.__proto__=C.Afb;},_Done:
function(){this.__proto__=C.Mt;this.Cp._Done();this.D$._Done();C.Mt._Done.call(this
);},_ReInit:function(){C.Mt._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mt._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsV={AdN:null,Cp:null,G$:null,Wn:null,FQ:null,Uz:A.wf,AkL:A.wf,MV:false,Aqc:
false,AvX:function(){return this.MV;},Zn:function(){if(this.Dt){this.P.C4(this.Cp.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Uz));this.P.Z(true);}if(
!this.Dt&&!this.Cp.B2){this.P.C4(0);this.P.Z(false);}if(((!this.Dt&&(this.Cp.B2>
0))&&!!this.P.Ab)&&!this.Q9){this.P.C4(this.Cp.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Uz));this.P.Z(true);}if((!this.Dt&&this.Q9)&&!!this.P.Ab)
this.P.Ab.HP(this.P);this.P.ArL(this.Aqc);if(!!this.AdN)this.Ab.HP(this.AdN);if(
!this.Bw)this.P.Ar(false);},SL:function(){var B;if(this.AcJ){if(this.P.Fq()&&!!this.
P.Ab)this.Cp.Cx=this.P.G9;else this.Cp.Cx=0;this.AkL=A.aaI(this.P.M);}var Az8=((
!this.P.Ab||!this.P.G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Az9=((!this.Dt&&((!this.P.Ab||!this.
P.Fq())||this.Q9))||!this.Cp.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Uz),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az8&&
Az9){this.Cp.Cx=0;this.Cp.B2=0;this.AkL=this.Uz;this.Wn.A7T();}this.Aqc=this.P.ASE(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZG)this.P.Ab.ZF(this.P);if(this.Dt&&this.Ajw
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fq())this.P.C4(this.Cp.Cx);if((!this.Dt&&A.aaX(this.AkL,this.Uz))&&this.
Wn.AD2())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkL));if(!this.Dt&&(
this.Cp.Cx===this.Cp.B2))this.P.C4(this.Cp.Cx);if(!this.Dt&&((!this.P.Ab||!this.
P.Fq())||!this.P.G9)){this.MV=true;this.Mr();return;}if(((this.Dt&&(this.P.G9===
this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Uz))&&this.P.Fq()){this.MV=true;this.Mr(
);return;}if(((!this.Dt&&(this.P.G9===this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Uz
))&&this.Wn.AD2()){this.MV=true;this.Mr();return;}if(((this.Cp.Cx===this.Cp.B2)&&
A.aaX(this.AkL,this.Uz))&&this.Wn.AD2()){this.MV=true;this.Mr();return;}this.P.ArL(
true);this.P.Z(false);this.AdN=A._NewObject(A.acg.AVT,0);this.AdN.Bm7(this.P);this.
AdN.C4(this.Cp.Cx);this.AdN.Bn2(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMe(this.AdN,this.P);if(!this.Cp.JU)this.Cp.HO(1);if(!this.G$.JU)this.G$.HO(
1);this.G$.Ae$(false);this.G$.AkY=false;this.G$.SC=[this,this.AiQ];this.G$.Ahp=[
this,this.AAC];if(this.Dt){this.G$.Cx=0;this.G$.B2=1;}else{this.G$.Cx=1;this.G$.
B2=0;}this.Cp.Q=[B=this.AdN,B.Awq,B.C4];this.Cp.Ae$(false);this.Cp.AkY=false;this.
Cp.SC=[this,this.AiQ];this.Cp.Ahp=null;this.G$.Ar(!A.aaX(this.AkL,this.Uz)||!this.
Wn.AD2());this.Cp.Ar(this.Cp.Cx!==this.Cp.B2);},AiQ:function(G){this.MV=!this.Cp.
Bw&&!this.G$.Bw;this.Mr();},AAC:function(G){var B;var ABr=A.abe(this.Uz,this.AkL
);if(!this.Dt)ABr=[-ABr[0],-ABr[1]];this.FQ.A7T();this.FQ.AgX=this.Wn.AgX;this.FQ.
Bqs(ABr[0],ABr[1],0);this.FQ.BjX(this.Wn,this.FQ,this.G$.A5);if(this.Dt)this.AdN.
Bam(this.AkL,this.FQ);else this.AdN.Bam(this.Uz,this.FQ);},_Init:function(aArg){
C.Mt._Init.call(this,aArg);C.Gm._Init.call(this.Cp={I:this},0);C.M$._Init.call(this.
G$={I:this},0);A.Graphics.Ax5._Init.call(this.Wn={I:this},0);A.Graphics.Ax5._Init.
call(this.FQ={I:this},0);this.__proto__=C.AsV;},_Done:function(){this.__proto__=
C.Mt;this.Cp._Done();this.G$._Done();this.Wn._Done();this.FQ._Done();C.Mt._Done.
call(this);},_ReInit:function(){C.Mt._ReInit.call(this);this.Cp._ReInit();this.G$.
_ReInit();this.Wn._ReInit();this.FQ._ReInit();},_Mark:function(D){var B;C.Mt._Mark.
call(this,D);if((B=this.AdN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rh={Se:function(){return null;},Sd:function(
){return null;},Aed:function(){return this.Se();},Aec:function(){return this.Sd(
);},_Init:function(aArg){this.__proto__=C.Rh;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AU3={Se:function(){var Ao=A._NewObject(C.AsU,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajw=
false;Ao.ZG=true;Ao.AcJ=false;Ao.Aks=[this,this.ApN];return Ao;},Sd:function(){var
Ao=A._NewObject(C.AsU,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;return Ao;},Aed:function(
){var Ao=C.Rh.Aed.call(this);Ao.ZG=false;Ao.Bw=true;return Ao;},Aec:function(){var
Ao=A._NewObject(C.AsU,0);Ao.Dt=false;Ao.Bw=true;Ao.Ajm=true;Ao.Q9=false;return Ao;
},ApN:function(G){var B;var Ao=(C.AsU.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C6[1]/2)|0)];Ao.Ask=pos;},_Init:function(aArg){C.Rh._Init.
call(this,aArg);this.__proto__=C.AU3;},_className:"Effects::ShowHideTransition"};
C.Aen={ACJ:500,Se:function(){var Ao=A._NewObject(C.Afb,0);Ao.Dt=true;Ao.Bw=true;
Ao.Ajw=false;Ao.ZG=true;Ao.AcJ=true;Ao.Ad9=false;Ao.Aks=[this,this.ApN];Ao.Cp.Fr(
this.ACJ);Ao.Cp.Cx=0;Ao.Cp.B2=255;Ao.D$.Fr(this.ACJ);Ao.D$.WI(23);return Ao;},Sd:
function(){var Ao=A._NewObject(C.Axo,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;Ao.AcJ=
true;Ao.E0.Cx=255;Ao.E0.B2=0;Ao.E0.Fr(this.ACJ);return Ao;},Aed:function(){var Ao=
C.Rh.Aed.call(this);Ao.ZG=false;Ao.Bw=true;return Ao;},Aec:function(){var Ao=C.Rh.
Aec.call(this);Ao.Ajm=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApN:function(G){var
B;var Ao=(C.Afb.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C6[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=C.Aen;
},_className:"Effects::FadeInOutTransition"};C.AGV={Kl:0x12,Au8:0,Ad9:false,Se:function(
){var Ao=A._NewObject(C.Afb,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajw=false;Ao.ZG=true;Ao.
AcJ=true;Ao.Ad9=this.Ad9;Ao.Aks=[this,this.ApN];Ao.Cp.Fr(500);Ao.Cp.AkB(0);Ao.Cp.
Cx=0;Ao.Cp.B2=255;Ao.D$.Fr(500);Ao.D$.WI(23);Ao.D$.AFY(0);Ao.D$.AFZ(0);Ao.D$.AwL(
3);Ao.D$.AE0(0.5);Ao.D$.AFI(3);Ao.D$.AE8(3);Ao.D$.AFg(0.5);return Ao;},Sd:function(
){var Ao=A._NewObject(C.Afb,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;Ao.AcJ=true;Ao.
Ad9=this.Ad9;Ao.Aks=[this,this.A3D];Ao.Cp.Cx=255;Ao.Cp.B2=0;Ao.Cp.Fr(500);Ao.Cp.
AkB(0);Ao.D$.Fr(500);Ao.D$.WI(23);Ao.D$.AFY(0);Ao.D$.AFZ(0);Ao.D$.AwL(3);Ao.D$.AE0(
0.5);Ao.D$.AFI(3);Ao.D$.AE8(3);Ao.D$.AFg(0.5);return Ao;},Aed:function(){var Ao=
C.Rh.Aed.call(this);Ao.ZG=false;Ao.Bw=true;return Ao;},Aec:function(){var Ao=C.Rh.
Aec.call(this);Ao.Ajm=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApN:function(G){var
B;var Ao=(C.Afb.isPrototypeOf(G)?G:null);var Bu=this.Kl;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C6[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C6[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C6[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C6[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HD=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au8){case 5:pos=[pos[0],-C6[1]];break;case 3:{
pos=[pos[0],-C6[1]];pos=[HD[0],pos[1]];}break;case 8:pos=[-C6[0],-C6[1]];break;case
2:pos=[HD[0],pos[1]];break;case 7:pos=[-C6[0],pos[1]];break;case 4:pos=[pos[0],HD[
1]];break;case 1:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 6:{pos=[pos[
0],HD[1]];pos=[-C6[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3D:
function(G){var B;var Ao=(C.Afb.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HD=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au8){case 5:pos=[pos[0],HD[1]];break;case 3:{pos=[pos[0],HD[1]];pos=[-
C6[0],pos[1]];}break;case 8:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 2:
pos=[-C6[0],pos[1]];break;case 7:pos=[HD[0],pos[1]];break;case 4:pos=[pos[0],-C6[
1]];break;case 1:pos=[-C6[0],-C6[1]];break;case 6:{pos=[pos[0],-C6[1]];pos=[HD[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rh._Init.call(this
,aArg);this.__proto__=C.AGV;},_className:"Effects::SlideTransition"};C.Afj={Se:function(
){var Ao=A._NewObject(C.AsV,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajw=false;Ao.ZG=true;Ao.
AcJ=true;Ao.Aks=[this,this.ApN];Ao.Cp.Fr(500);Ao.Cp.AkB(0);Ao.Cp.Cx=0;Ao.Cp.B2=255;
Ao.G$.Fr(500);Ao.G$.WI(23);Ao.G$.AFY(0);Ao.G$.AFZ(0);Ao.G$.AwL(3);Ao.G$.AE0(0.5);
Ao.G$.AFI(3);Ao.G$.AE8(3);Ao.G$.AFg(0.5);Ao.Wn.Afi(0.5,0.5,1);return Ao;},Sd:function(
){var Ao=A._NewObject(C.AsV,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;Ao.AcJ=true;Ao.
Aks=[this,this.A3D];Ao.Cp.Cx=255;Ao.Cp.B2=0;Ao.Cp.Fr(500);Ao.Cp.AkB(0);Ao.G$.Fr(
500);Ao.G$.WI(23);Ao.G$.AFY(0);Ao.G$.AFZ(0);Ao.G$.AwL(3);Ao.G$.AE0(0.5);Ao.G$.AFI(
3);Ao.G$.AE8(3);Ao.G$.AFg(0.5);Ao.Wn.Afi(0.5,0.5,1);return Ao;},Aed:function(){var
Ao=C.Rh.Aed.call(this);Ao.ZG=false;Ao.Bw=true;return Ao;},Aec:function(){var Ao=
C.Rh.Aec.call(this);Ao.Ajm=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApN:function(
G){var B;var Ao=(C.AsV.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C6[1]/2)|0)];Ao.Uz=A.abf(pos,[(C6[0]/2)|0,(C6[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Uz,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3D:function(G){var Ao=(C.AsV.isPrototypeOf(G)?G:null);Ao.
Uz=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=
C.Afj;},_className:"Effects::ScaleTransition"};C.AhS={BEY:0,BFD:1,BFF:2,BFE:3,BEo:
4,BEq:5,BEp:6,BGa:7,BGc:8,BGb:9,BDU:10,BDW:11,BDV:12,BDA:13,BDC:14,BDB:15,BEf:16
,BEh:17,BEg:18,BDL:19,BDN:20,BDM:21,BEe:22,BEs:23,BEd:24,BEt:25,BD1:26};C.BD9={A5g:
0x1,A5f:0x2,A5h:0x4,A5k:0x8,A5j:0x10,A5i:0x20};C.AN_={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN_;},_className:"Effects::EffectTimerClass"};C.
Aej={_Init:function(){C.AN_._Init.call(this,0);this.PV(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AG8={Pl:A.abi(12,0
,null),Alr:A.abi(12,0,null),_Init:function(aArg){(this.Pl=[]).__proto__=C.AG8.Pl;(
this.Alr=[]).__proto__=C.AG8.Alr;this.__proto__=C.AG8;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACQ={B8:null,B7:null,A8v:function(AtA){var Ao=this.B7;while(
!!Ao){Ao.Zn();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B7;while(!!Ao){A.pe(Ao.A3r
,Ao);Ao=Ao.Ah;}},A8u:function(AtA){var Ao=this.B7;while(!!Ao){A.pe(Ao.AKG,Ao);Ao=
Ao.Ah;}this.B7=null;this.B8=null;},SL:function(AtA){var B;if(!this.B7)this.Mr();
var Ao=this.B7;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApS=null;Ao=Ao.
Ah;}Ao=this.B7;while(!!Ao){(B=Ao.Aks)?B[1].call(B[0],Ao):null;Ao.SL();Ao=Ao.Ah;}
},Mr:function(){var Ao=this.B7;while(!!Ao&&Ao.AvX())Ao=Ao.Ah;if(!Ao)A.Core.AkZ.Mr.
call(this);},BoW:function(FP){if(!FP)return;if(this.ARm())throw new Error(BD);if(
FP.Pm!==this)throw new Error(E7);if(!!FP.Ah)FP.Ah.AJ=FP.AJ;else this.B8=FP.AJ;if(
!!FP.AJ)FP.AJ.Ah=FP.Ah;else this.B7=FP.Ah;FP.Pm=null;FP.Ah=null;FP.AJ=null;if(!!
FP.P)FP.P.ApS=null;A.pe(FP.AKG,FP);if(!this.B7)this.AmC();},A5a:function(FP){if(
!FP)return;if(this.ARm())throw new Error(Hr);if(!!FP.Pm)throw new Error(IV);FP.AJ=
this.B8;FP.Ah=null;if(!!this.B8)this.B8.Ah=FP;else this.B7=FP;this.B8=FP;FP.Pm=this;
},_Init:function(aArg){A.Core.AkZ._Init.call(this,aArg);this.__proto__=C.ACQ;},_Mark:
function(D){var B;A.Core.AkZ._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsG={_Init:function(){C.AU3._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gm.__proto__=C.E0;C.AGj.__proto__=C.E0;C.ANu.__proto__=C.E0;
C.M$.__proto__=C.E0;C.AsU.__proto__=C.Mt;C.Axo.__proto__=C.Mt;C.Afb.__proto__=C.
Mt;C.AsV.__proto__=C.Mt;C.AU3.__proto__=C.Rh;C.Aen.__proto__=C.Rh;C.AGV.__proto__=
C.Rh;C.Afj.__proto__=C.Rh;C.AN_.__proto__=A.Core.Timer;C.ACQ.__proto__=A.Core.AkZ;
};C._ReInit=function(){var B;if((B=C.Aej._this))B._ReInit(),C.Aej._ReInit.call(B
);if((B=C.AsG._this))B._ReInit(),C.AsG._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aej._this)&&(B._cycle!=D))B._Done(C.Aej._this=null);if((B=C.AsG._this)&&(
B._cycle!=D))B._Done(C.AsG._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */