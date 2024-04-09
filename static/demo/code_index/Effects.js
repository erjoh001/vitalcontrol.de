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
var Ce=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var E6="The fader doesn\'t belong to this task";var Hr="Trying to add a fader to a task, which is actually running";
var IU="The fader belongs already to a task";
C.E0={M2:null,timer:null,Qw:null,SB:null,Ahp:null,Ti:0,Aja:0,Va:0,Pa:0,Az2:0.001,
Qs:0,Ec:0,Dx:0,AN9:0.5,A5G:3,Axq:3,AuM:0.5,VV:3,AVq:0,AVp:0,JR:0,Pu:1000,PD:0,V4:
0,AhS:0,Bw:false,AkY:false,AUA:false,Ap9:false,ALv:false,Mg:function(G){var B;if(
!this.timer)return;if(!this.Aja){if(this.AUA)this.Aja=-1;else this.Aja=1;this.Ti=
this.Aja;this.Dx=this.timer.Bs;this.Ec=0;this.Qs=-1;}var KE;if((this.Aja>0)&&(this.
Ti>0))KE=this.BB4();else if((this.Aja<0)&&(this.Ti<0))KE=this.BB7();else if(this.
Aja>0)KE=this.BB5();else KE=this.BB6();if(KE){this.Ar(false);(B=this.Qw)?B[1].call(
B[0],this):null;(B=this.SB)?B[1].call(B[0],this):null;}},AK0:function(AN){var B;
if(!this.M2&&(((this.AhS===19)||(this.AhS===20))||(this.AhS===21))){var AJB=this.
A5G+1;var Bzs=Math.sqrt(this.AN9);var RM=0.5;var O;this.M2=A._NewObject(C.AG4,0);
this.M2.Pl.Set(0,1);this.M2.Alr.Set(0,1);for(O=1;O<AJB;O=O+1){this.M2.Pl.Set(O,this.
M2.Pl.Get(O-1)*Bzs);this.M2.Alr.Set(O,this.M2.Alr.Get(O-1)*this.AN9);RM=RM+this.
M2.Pl.Get(O);}var BAg=1/RM;this.M2.Pl.Set(0,0.5);RM=0;for(O=0;O<AJB;O=O+1){this.
M2.Pl.Set(O,this.M2.Pl.Get(O)*BAg);RM=RM+this.M2.Pl.Get(O);}this.M2.Pl.Set(AJB,this.
M2.Pl.Get(AJB)+(1-RM));}if(this.AkY){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhS){case 1:AN=Math.pow(AN,this.VV);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.VV);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.VV)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.VV))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.VV*AN)-1)/(Math.
pow(2.718,this.VV)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.VV*AN)-1)
/(Math.pow(2.718,this.VV)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.VV*AN)-1)/(Math.pow(2.718,this.VV)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.VV*AN)-1)/(Math.pow(2.718,this.VV)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuM)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuM)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuM)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuM)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axq)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axq)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axq)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axq)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.M2;var O=0;var GG=0;var K7=Bz.Pl.
Get(0);var D8=1-AN;while(D8>K7){O=O+1;GG=K7;K7=K7+Bz.Pl.Get(O);}AN=(D8-GG)/(K7-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alr.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.M2;var O=0;var GG=0;var K7=Bz.Pl.Get(0);while(AN>K7){O=O+1;GG=K7;K7=
K7+Bz.Pl.Get(O);}AN=(AN-GG)/(K7-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alr.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.M2;var O=0;var GG=0;var K7=Bz.Pl.
Get(0);var LK=AN*2;var D8=LK-1;if(LK<1)D8=-D8;while(D8>K7){O=O+1;GG=K7;K7=K7+Bz.
Pl.Get(O);}D8=(D8-GG)/(K7-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alr.Get(O
)*(1-(D8*D8)));}if(LK<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Ap9){var LK=AN;var AAq=1-LK;AN=((AAq*LK)*(this.Pa+1))+(LK*LK);}else if(this.ALv){
var LK=AN;var AAq=1-LK;var Bdi=LK*LK;var BAx=AAq*AAq;AN=(((BAx*LK)*(this.Pa+1))+((
AAq*Bdi)*(this.Va+2)))+(Bdi*LK);}}this.AuR(AN);(B=this.Ahp)?B[1].call(B[0],this):
null;},BB7:function(){var Av=(this.timer.Bs-this.Dx)|0;if(Av<0)Av=-Av;var LE=this.
V4;var Oq=this.V4+this.Pu;var Hg=this.PD+this.Pu;var KE=false;var Ed=this.Qs;if(
!this.Ec&&(Av>=Oq)){this.Ec=1;Av=Av-Oq;this.Dx=this.Dx+Oq;}if((this.Ec>0)&&(Av>=
Hg)){var Ie=(Av/Hg)|0;this.Ec=this.Ec+Ie;Av=Av-(Ie*Hg);this.Dx=this.Dx+(Ie*Hg);}
if((this.Ec>2)&&!this.JR)this.Ec=1;if(this.Ec>0)LE=this.PD;if((this.Ec>=this.JR)&&(
this.JR>0)){KE=true;Ed=0;}else if(Av>=LE)Ed=1-((Av-LE)*this.Az2);else if(Ed>=0)Ed=
0;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qs){this.Qs=Ed;this.AK0(
Ed);}return KE;},BB6:function(){var Av=(this.Dx-this.timer.Bs)|0;var LE=this.V4;
var Oq=this.V4+this.Pu;var Hg=this.PD+this.Pu;var KE=false;var Ed=this.Qs;if((this.
Ec>1)&&(Av<0)){var Ie=(((-Av+Hg)-1)/Hg)|0;if((this.Ec-Ie)<=0)Ie=this.Ec-1;this.Ec=
this.Ec-Ie;Av=Av+(Ie*Hg);this.Dx=this.Dx+(Ie*Hg);}if(((this.Ec===1)&&(Av<0))&&(this.
JR>0)){this.Ec=0;Av=Av+Oq;this.Dx=this.Dx+Oq;}if(((this.Ec===1)&&(Av<0))&&!this.
JR){var Ie=(((-Av+Hg)-1)/Hg)|0;Av=Av+(Ie*Hg);this.Dx=this.Dx+(Ie*Hg);}if(this.Ec>
0)LE=this.PD;if(Av<0){KE=true;Ed=1;}else if(Av>=LE)Ed=1-((Av-LE)*this.Az2);else if(
Ed>=0)Ed=1;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qs){this.Qs=
Ed;this.AK0(Ed);}return KE;},BB5:function(){var Av=(this.Dx-this.timer.Bs)|0;var
LE=this.V4;var Oq=this.V4+this.Pu;var Hg=this.PD+this.Pu;var KE=false;var Ed=this.
Qs;if((this.Ec>1)&&(Av<0)){var Ie=(((-Av+Hg)-1)/Hg)|0;if((this.Ec-Ie)<=0)Ie=this.
Ec-1;this.Ec=this.Ec-Ie;Av=Av+(Ie*Hg);this.Dx=this.Dx+(Ie*Hg);}if(((this.Ec===1)&&(
Av<0))&&(this.JR>0)){this.Ec=0;Av=Av+Oq;this.Dx=this.Dx+Oq;}if(((this.Ec===1)&&(
Av<0))&&!this.JR){var Ie=(((-Av+Hg)-1)/Hg)|0;Av=Av+(Ie*Hg);this.Dx=this.Dx+(Ie*Hg
);}if(this.Ec>0)LE=this.PD;if(Av<0){KE=true;Ed=0;}else if(Av>=LE)Ed=(Av-LE)*this.
Az2;else if(Ed>=0)Ed=0;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qs){this.Qs=Ed;this.AK0(Ed);}return KE;},BB4:function(){var Av=(this.timer.Bs-this.
Dx)|0;if(Av<0)Av=-Av;var LE=this.V4;var Oq=this.V4+this.Pu;var Hg=this.PD+this.Pu;
var KE=false;var Ed=this.Qs;if(!this.Ec&&(Av>=Oq)){this.Ec=1;Av=Av-Oq;this.Dx=this.
Dx+Oq;}if((this.Ec>0)&&(Av>=Hg)){var Ie=(Av/Hg)|0;this.Ec=this.Ec+Ie;Av=Av-(Ie*Hg
);this.Dx=this.Dx+(Ie*Hg);}if((this.Ec>2)&&!this.JR)this.Ec=1;if(this.Ec>0)LE=this.
PD;if((this.Ec>=this.JR)&&(this.JR>0)){KE=true;Ed=1;}else if(Av>=LE)Ed=(Av-LE)*this.
Az2;else if(Ed>=0)Ed=1;if(Ed!==this.Qs){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qs){this.Qs=Ed;this.AK0(Ed);}return KE;},Ae$:function(E){if(this.AUA===E)return;
this.AUA=E;if(!this.Bw||!this.Aja)return;if(E)this.Ti=-1;else this.Ti=1;this.Dx=(
this.timer.Avu()*2)-this.Dx;},AFc:function(E){if(E<0)E=0;if(E>1)E=1;this.AN9=E;}
,AE4:function(E){if(E<1)E=1;if(E>10)E=10;this.A5G=E;this.M2=null;},AFE:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axq=E;},AEW:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuM=E;},AwJ:function(E){if(E<1)E=1;if(E>100)E=100;this.VV=E;},AFV:function(
E){if(this.AVq===E)return;this.AVq=E;if(this.AhS===26){this.Va=E;this.Ap9=(this.
Pa===this.Va)&&!!this.Pa;this.ALv=!this.Ap9&&(this.Pa!==this.Va);}},AFU:function(
E){if(this.AVp===E)return;this.AVp=E;if(this.AhS===26){this.Pa=E;this.Ap9=(this.
Pa===this.Va)&&!!this.Pa;this.ALv=!this.Ap9&&(this.Pa!==this.Va);}},WF:function(
E){if(this.AhS===E)return;this.AhS=E;this.M2=null;switch(E){case 24:{this.Pa=-1.1;
this.Va=1.1;}break;case 22:{this.Pa=-1;this.Va=-2;}break;case 23:{this.Pa=2;this.
Va=1;}break;case 25:{this.Pa=1.1;this.Va=-1.1;}break;case 0:{this.Pa=0;this.Va=0;
}break;default:{this.Pa=this.AVp;this.Va=this.AVq;}}this.Ap9=(this.Pa===this.Va)&&
!!this.Pa;this.ALv=!this.Ap9&&(this.Pa!==this.Va);},HN:function(E){if(E<0)E=0;this.
JR=E;},Fr:function(E){if(E<15)E=15;this.Pu=E;this.Az2=1/E;},Uo:function(E){if(E<
0)E=0;this.PD=E;},AkB:function(E){if(E<0)E=0;this.V4=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mg],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aej);A.zV([this,this.Mg],this.timer
,0);this.Aja=0;A.pe([this,this.Mg],this);}},AuR:function(Aak){},AnZ:function(G){
this.Ar(false);},AnX:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M2)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gm={Q:null,A5:0,B2:255,Cx:0,AuR:function(Aak
){var F;this.A5=this.Cx+(Math.round((this.B2-this.Cx)*Aak)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gm;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGf={
Q:null,A5:A.wf,B2:Ce,Cx:A.wf,AuR:function(Aak){var F;var Ep=this.Cx[0];var Dh=this.
Cx[1];Ep=Ep+(Math.round((this.B2[0]-Ep)*Aak)|0);Dh=Dh+(Math.round((this.B2[1]-Dh
)*Aak)|0);this.A5=[Ep,Dh];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AGf;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANs={Q:null,A5:0,B2:0xFFFFFFFF,Cx:0,AuR:
function(Aak){var F;var Pj=this.Cx&0xFF;var Aav=(this.Cx>>8)&0xFF;var Alx=(this.
Cx>>16)&0xFF;var Alq=(this.Cx>>24)&0xFF;Pj=Pj+((((this.B2&0xFF)-Pj)*Aak)|0);Aav=
Aav+(((((this.B2>>8)&0xFF)-Aav)*Aak)|0);Alx=Alx+(((((this.B2>>16)&0xFF)-Alx)*Aak
)|0);Alq=Alq+(((((this.B2>>24)&0xFF)-Alq)*Aak)|0);if(Pj<0)Pj=0;if(Pj>255)Pj=255;
if(Aav<0)Aav=0;if(Aav>255)Aav=255;if(Alx<0)Alx=0;if(Alx>255)Alx=255;if(Alq<0)Alq=
0;if(Alq>255)Alq=255;this.A5=(Pj&0xFF)|((Aav&0xFF)<<8)|((Alx&0xFF)<<16)|((Alq&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANs;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.M_={A5:0,B2:1,Cx:0,AuR:function(Aak){this.A5=this.Cx+((
this.B2-this.Cx)*Aak);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.M_;},_className:"Effects::FloatEffect"};C.TI={timer:null,Q:null,Ec:0,Dx:0,JR:0
,Pu:1000,PD:1000,V4:0,Bw:false,Cx:false,B2:true,Mg:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.
Dx)|0;var Oq=this.V4+this.Pu;var Hg=this.PD+this.Pu;var LE=this.V4;var Jl=this.Ec;
if(!Jl&&(Av>=Oq)){Jl=1;Av=Av-Oq;}if((Jl>0)&&(Av>=Hg)){var Ie=(Av/Hg)|0;Av=Av-(Ie
*Hg);Jl=Jl+Ie;}if((Jl>2)&&!this.JR)Jl=1;if(Jl!==this.Ec){this.Dx=this.timer.Bs-(((
B=Av)<0)?B+0x100000000:B);this.Ec=Jl;}if(Jl>0)LE=this.PD;var KE=(Jl>=this.JR)&&(
this.JR>0);if(!!this.Q){if(!KE&&(Av>=LE))(F=this.Q,F[2].call(F[0],this.Cx));if(KE||((
Av<LE)&&(Jl>0)))(F=this.Q,F[2].call(F[0],this.B2));}if(KE)this.Ar(false);},HN:function(
E){if(E<0)E=0;this.JR=E;},Fr:function(E){if(E<100)E=100;this.Pu=E;},Uo:function(
E){if(E<0)E=0;this.PD=E;},AkB:function(E){if(E<0)E=0;this.V4=E;},Ar:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mg],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aej);A.zV([this,this.Mg
],this.timer,0);this.Ec=-1;}},AnZ:function(G){this.Ar(false);},AnX:function(G){if(
this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.TI;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.Mr={Pm:null,AJ:null,Ah:null,Ab:null,P:null,AKC:null,A3k:null,Aks:null,Dt:true,
Bw:true,AcI:true,Ajm:false,Ajw:true,ZE:true,Q9:true,Mp:function(){if(!!this.Pm)this.
Pm.Mp();},AvV:function(){return true;},Zl:function(){},SK:function(){this.Mp();}
,_Init:function(aArg){this.__proto__=C.Mr;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKC)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3k)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aks)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.AsS={Asi:A.wf,MU:false,AvV:function(){return this.MU;},Zl:function(
){if(!this.Dt&&!!this.P.Ab)this.P.Z(false);if((!this.Dt&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HO(this.P);if(!this.Bw)this.P.Ar(false);},SK:function(){if(this.Bw)this.P.Ar(
true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dt&&this.ZE)this.P.Ab.ZD(this.P);if(this.Dt&&this.Ajw)this.P.Ab.Bb(this.P);
if(this.Dt&&!this.AcI)this.P.H(A.abJ(this.P.M,this.Asi));if(this.Dt){this.P.C3(255
);this.P.Z(true);}if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.MU=true;
this.Mp();},_Init:function(aArg){C.Mr._Init.call(this,aArg);this.__proto__=C.AsS;
},_className:"Effects::VisibilityFader"};C.Axm={E0:null,MU:false,Aqa:false,AvV:function(
){return this.MU;},Zl:function(){if(this.Dt)this.P.C3(this.E0.B2);if(!this.Dt&&!
this.P.G9)this.P.Z(false);if((!this.Dt&&this.Q9)&&!!this.P.Ab)this.P.Ab.HO(this.
P);if(!this.Bw)this.P.Ar(false);},SK:function(){var B;if(this.AcI){if(this.P.Fq(
)&&!!this.P.Ab)this.E0.Cx=this.P.G9;else this.E0.Cx=0;}var Az5=((!this.P.Ab||!this.
P.G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var Az6=((!this.Dt&&((!this.P.Ab||!this.P.Fq())||this.Q9
))||!this.E0.B2)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(Az5&&Az6){this.E0.Cx=0;this.E0.B2=0;}this.Aqa=this.P.ASC(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZE)this.P.Ab.ZD(this.P);if(this.Dt&&this.Ajw
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fq()){this.P.C3(this.E0.Cx);this.P.Z(true);}if(!this.Dt&&((!this.P.Ab||
!this.P.Fq())||!this.P.G9)){this.MU=true;this.Mp();return;}if(!this.Dt&&(this.E0.
Cx===this.E0.B2))this.P.C3(this.E0.Cx);if(this.P.G9===this.E0.B2){this.MU=true;this.
Mp();return;}if(this.E0.Cx===this.E0.B2){this.MU=true;this.Mp();return;}if(!this.
E0.JR)this.E0.HN(1);this.E0.Q=[B=this.P,B.Awo,B.A0s];this.E0.Ae$(false);this.E0.
AkY=false;this.E0.SB=[this,this.AiQ];this.E0.Ahp=null;this.E0.Ar(true);},AiQ:function(
G){this.MU=true;this.Mp();},_Init:function(aArg){C.Mr._Init.call(this,aArg);C.Gm.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axm;},_Done:function(){this.__proto__=
C.Mr;this.E0._Done();C.Mr._Done.call(this);},_ReInit:function(){C.Mr._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.Mr._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Afb={
Cp:null,D$:null,Ad9:false,MU:false,Aqa:false,AvV:function(){return this.MU;},Zl:
function(){if(this.Dt){this.P.C3(this.Cp.B2);this.P.H(A.abJ(this.P.M,this.D$.B2)
);}if(!this.Dt&&!this.P.G9)this.P.Z(false);if((!this.Dt&&this.Q9)&&!!this.P.Ab)this.
P.Ab.HO(this.P);if(this.Ad9)this.P.ArJ(this.Aqa);if(!this.Bw)this.P.Ar(false);},
SK:function(){var B;if(this.AcI){if(this.P.Fq()&&!!this.P.Ab)this.Cp.Cx=this.P.G9;
else this.Cp.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var Az5=((!this.P.Ab||!this.P.
G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var Az6=((!this.Dt&&((!this.P.Ab||!this.P.Fq())||this.Q9
))||!this.Cp.B2)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B2
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az5&&Az6){
this.Cp.Cx=0;this.Cp.B2=0;this.D$.Cx=this.D$.B2;}this.Aqa=this.P.ASC();if(this.Bw
)this.P.Ar(true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dt&&this.ZE)this.P.Ab.ZD(this.P);if(this.Dt&&this.Ajw)this.P.Ab.Bb(
this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dt&&!this.P.
Fq()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.C3(this.Cp.Cx);this.P.Z(true);
}if(!this.Dt&&((!this.P.Ab||!this.P.Fq())||!this.P.G9)){this.MU=true;this.Mp();return;
}if(!this.Dt&&A.aaX(this.D$.Cx,this.D$.B2))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Dt&&(this.Cp.Cx===this.Cp.B2))this.P.C3(this.Cp.Cx);if((this.P.G9===this.
Cp.B2)&&A.aaX(this.P.M.slice(0,2),this.D$.B2)){this.MU=true;this.Mp();return;}if((
this.Cp.Cx===this.Cp.B2)&&A.aaX(this.D$.Cx,this.D$.B2)){this.MU=true;this.Mp();return;
}if(!this.Cp.JR)this.Cp.HN(1);if(!this.D$.JR)this.D$.HN(1);if(this.Ad9)this.P.ArJ(
true);this.D$.Q=null;this.D$.Ae$(false);this.D$.AkY=false;this.D$.SB=[this,this.
AiQ];this.D$.Ahp=[this,this.AAz];this.Cp.Q=[B=this.P,B.Awo,B.A0s];this.Cp.Ae$(false
);this.Cp.AkY=false;this.Cp.SB=[this,this.AiQ];this.Cp.Ahp=null;this.D$.Ar(!A.aaX(
this.D$.Cx,this.D$.B2));this.Cp.Ar(this.Cp.Cx!==this.Cp.B2);},AiQ:function(G){this.
MU=!this.Cp.Bw&&!this.D$.Bw;this.Mp();},AAz:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A5));},_Init:function(aArg){C.Mr._Init.call(this,aArg);C.Gm._Init.call(this.
Cp={I:this},0);C.AGf._Init.call(this.D$={I:this},0);this.__proto__=C.Afb;},_Done:
function(){this.__proto__=C.Mr;this.Cp._Done();this.D$._Done();C.Mr._Done.call(this
);},_ReInit:function(){C.Mr._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.Mr._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.AsT={AdN:null,Cp:null,G$:null,Wl:null,FQ:null,Uv:A.wf,AkL:A.wf,MU:false,Aqa:
false,AvV:function(){return this.MU;},Zl:function(){if(this.Dt){this.P.C3(this.Cp.
B2);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.Uv));this.P.Z(true);}if(
!this.Dt&&!this.Cp.B2){this.P.C3(0);this.P.Z(false);}if(((!this.Dt&&(this.Cp.B2>
0))&&!!this.P.Ab)&&!this.Q9){this.P.C3(this.Cp.B2);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.Uv));this.P.Z(true);}if((!this.Dt&&this.Q9)&&!!this.P.Ab)
this.P.Ab.HO(this.P);this.P.ArJ(this.Aqa);if(!!this.AdN)this.Ab.HO(this.AdN);if(
!this.Bw)this.P.Ar(false);},SK:function(){var B;if(this.AcI){if(this.P.Fq()&&!!this.
P.Ab)this.Cp.Cx=this.P.G9;else this.Cp.Cx=0;this.AkL=A.aaI(this.P.M);}var Az5=((
!this.P.Ab||!this.P.G9)||!this.P.Fq())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Az6=((!this.Dt&&((!this.P.Ab||!this.
P.Fq())||this.Q9))||!this.Cp.B2)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.Uv),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Az5&&
Az6){this.Cp.Cx=0;this.Cp.B2=0;this.AkL=this.Uv;this.Wl.A7J();}this.Aqa=this.P.ASC(
);if(this.Bw)this.P.Ar(true);if((this.Dt||this.Ajm)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZE)this.P.Ab.ZD(this.P);if(this.Dt&&this.Ajw
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fq())this.P.C3(this.Cp.Cx);if((!this.Dt&&A.aaX(this.AkL,this.Uv))&&this.
Wl.ADY())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkL));if(!this.Dt&&(
this.Cp.Cx===this.Cp.B2))this.P.C3(this.Cp.Cx);if(!this.Dt&&((!this.P.Ab||!this.
P.Fq())||!this.P.G9)){this.MU=true;this.Mp();return;}if(((this.Dt&&(this.P.G9===
this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Uv))&&this.P.Fq()){this.MU=true;this.Mp(
);return;}if(((!this.Dt&&(this.P.G9===this.Cp.B2))&&A.aaX(A.aaI(this.P.M),this.Uv
))&&this.Wl.ADY()){this.MU=true;this.Mp();return;}if(((this.Cp.Cx===this.Cp.B2)&&
A.aaX(this.AkL,this.Uv))&&this.Wl.ADY()){this.MU=true;this.Mp();return;}this.P.ArJ(
true);this.P.Z(false);this.AdN=A._NewObject(A.acg.AVQ,0);this.AdN.BmY(this.P);this.
AdN.C3(this.Cp.Cx);this.AdN.BnT(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMc(this.AdN,this.P);if(!this.Cp.JR)this.Cp.HN(1);if(!this.G$.JR)this.G$.HN(
1);this.G$.Ae$(false);this.G$.AkY=false;this.G$.SB=[this,this.AiQ];this.G$.Ahp=[
this,this.AAz];if(this.Dt){this.G$.Cx=0;this.G$.B2=1;}else{this.G$.Cx=1;this.G$.
B2=0;}this.Cp.Q=[B=this.AdN,B.Awo,B.C3];this.Cp.Ae$(false);this.Cp.AkY=false;this.
Cp.SB=[this,this.AiQ];this.Cp.Ahp=null;this.G$.Ar(!A.aaX(this.AkL,this.Uv)||!this.
Wl.ADY());this.Cp.Ar(this.Cp.Cx!==this.Cp.B2);},AiQ:function(G){this.MU=!this.Cp.
Bw&&!this.G$.Bw;this.Mp();},AAz:function(G){var B;var ABn=A.abe(this.Uv,this.AkL
);if(!this.Dt)ABn=[-ABn[0],-ABn[1]];this.FQ.A7J();this.FQ.AgX=this.Wl.AgX;this.FQ.
Bqj(ABn[0],ABn[1],0);this.FQ.BjO(this.Wl,this.FQ,this.G$.A5);if(this.Dt)this.AdN.
Baa(this.AkL,this.FQ);else this.AdN.Baa(this.Uv,this.FQ);},_Init:function(aArg){
C.Mr._Init.call(this,aArg);C.Gm._Init.call(this.Cp={I:this},0);C.M_._Init.call(this.
G$={I:this},0);A.Graphics.Ax3._Init.call(this.Wl={I:this},0);A.Graphics.Ax3._Init.
call(this.FQ={I:this},0);this.__proto__=C.AsT;},_Done:function(){this.__proto__=
C.Mr;this.Cp._Done();this.G$._Done();this.Wl._Done();this.FQ._Done();C.Mr._Done.
call(this);},_ReInit:function(){C.Mr._ReInit.call(this);this.Cp._ReInit();this.G$.
_ReInit();this.Wl._ReInit();this.FQ._ReInit();},_Mark:function(D){var B;C.Mr._Mark.
call(this,D);if((B=this.AdN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rh={Sc:function(){return null;},Sb:function(
){return null;},Aed:function(){return this.Sc();},Aec:function(){return this.Sb(
);},_Init:function(aArg){this.__proto__=C.Rh;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AU1={Sc:function(){var Ao=A._NewObject(C.AsS,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajw=
false;Ao.ZE=true;Ao.AcI=false;Ao.Aks=[this,this.ApL];return Ao;},Sb:function(){var
Ao=A._NewObject(C.AsS,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;return Ao;},Aed:function(
){var Ao=C.Rh.Aed.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Aec:function(){var
Ao=A._NewObject(C.AsS,0);Ao.Dt=false;Ao.Bw=true;Ao.Ajm=true;Ao.Q9=false;return Ao;
},ApL:function(G){var B;var Ao=(C.AsS.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(
0,2);pos=[(Bd[0]+(((Bd[2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((
Bd[3]-Bd[1])/2)|0))-((C5[1]/2)|0)];Ao.Asi=pos;},_Init:function(aArg){C.Rh._Init.
call(this,aArg);this.__proto__=C.AU1;},_className:"Effects::ShowHideTransition"};
C.Aen={ACF:500,Sc:function(){var Ao=A._NewObject(C.Afb,0);Ao.Dt=true;Ao.Bw=true;
Ao.Ajw=false;Ao.ZE=true;Ao.AcI=true;Ao.Ad9=false;Ao.Aks=[this,this.ApL];Ao.Cp.Fr(
this.ACF);Ao.Cp.Cx=0;Ao.Cp.B2=255;Ao.D$.Fr(this.ACF);Ao.D$.WF(23);return Ao;},Sb:
function(){var Ao=A._NewObject(C.Axm,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;Ao.AcI=
true;Ao.E0.Cx=255;Ao.E0.B2=0;Ao.E0.Fr(this.ACF);return Ao;},Aed:function(){var Ao=
C.Rh.Aed.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Aec:function(){var Ao=C.Rh.
Aec.call(this);Ao.Ajm=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApL:function(G){var
B;var Ao=(C.Afb.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[0]+(((Bd[
2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C5[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=C.Aen;
},_className:"Effects::FadeInOutTransition"};C.AGR={Kj:0x12,Au6:0,Ad9:false,Sc:function(
){var Ao=A._NewObject(C.Afb,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajw=false;Ao.ZE=true;Ao.
AcI=true;Ao.Ad9=this.Ad9;Ao.Aks=[this,this.ApL];Ao.Cp.Fr(500);Ao.Cp.AkB(0);Ao.Cp.
Cx=0;Ao.Cp.B2=255;Ao.D$.Fr(500);Ao.D$.WF(23);Ao.D$.AFU(0);Ao.D$.AFV(0);Ao.D$.AwJ(
3);Ao.D$.AEW(0.5);Ao.D$.AFE(3);Ao.D$.AE4(3);Ao.D$.AFc(0.5);return Ao;},Sb:function(
){var Ao=A._NewObject(C.Afb,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;Ao.AcI=true;Ao.
Ad9=this.Ad9;Ao.Aks=[this,this.A3w];Ao.Cp.Cx=255;Ao.Cp.B2=0;Ao.Cp.Fr(500);Ao.Cp.
AkB(0);Ao.D$.Fr(500);Ao.D$.WF(23);Ao.D$.AFU(0);Ao.D$.AFV(0);Ao.D$.AwJ(3);Ao.D$.AEW(
0.5);Ao.D$.AFE(3);Ao.D$.AE4(3);Ao.D$.AFc(0.5);return Ao;},Aed:function(){var Ao=
C.Rh.Aed.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Aec:function(){var Ao=C.Rh.
Aec.call(this);Ao.Ajm=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApL:function(G){var
B;var Ao=(C.Afb.isPrototypeOf(G)?G:null);var Bu=this.Kj;var Bd=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Bd[2]-C5[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Bd[0]+(((
Bd[2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Bd[3
]-C5[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1])/2)|0))-((
C5[1]/2)|0)];Ao.D$.B2=pos;if(((!Ao.P.Ab||!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HD=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au6){case 5:pos=[pos[0],-C5[1]];break;case 3:{
pos=[pos[0],-C5[1]];pos=[HD[0],pos[1]];}break;case 8:pos=[-C5[0],-C5[1]];break;case
2:pos=[HD[0],pos[1]];break;case 7:pos=[-C5[0],pos[1]];break;case 4:pos=[pos[0],HD[
1]];break;case 1:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 6:{pos=[pos[
0],HD[1]];pos=[-C5[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3w:
function(G){var B;var Ao=(C.Afb.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HD=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au6){case 5:pos=[pos[0],HD[1]];break;case 3:{pos=[pos[0],HD[1]];pos=[-
C5[0],pos[1]];}break;case 8:{pos=[pos[0],HD[1]];pos=[HD[0],pos[1]];}break;case 2:
pos=[-C5[0],pos[1]];break;case 7:pos=[HD[0],pos[1]];break;case 4:pos=[pos[0],-C5[
1]];break;case 1:pos=[-C5[0],-C5[1]];break;case 6:{pos=[pos[0],-C5[1]];pos=[HD[0
],pos[1]];}break;default:;}Ao.D$.B2=pos;},_Init:function(aArg){C.Rh._Init.call(this
,aArg);this.__proto__=C.AGR;},_className:"Effects::SlideTransition"};C.Afj={Sc:function(
){var Ao=A._NewObject(C.AsT,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajw=false;Ao.ZE=true;Ao.
AcI=true;Ao.Aks=[this,this.ApL];Ao.Cp.Fr(500);Ao.Cp.AkB(0);Ao.Cp.Cx=0;Ao.Cp.B2=255;
Ao.G$.Fr(500);Ao.G$.WF(23);Ao.G$.AFU(0);Ao.G$.AFV(0);Ao.G$.AwJ(3);Ao.G$.AEW(0.5);
Ao.G$.AFE(3);Ao.G$.AE4(3);Ao.G$.AFc(0.5);Ao.Wl.Afi(0.5,0.5,1);return Ao;},Sb:function(
){var Ao=A._NewObject(C.AsT,0);Ao.Dt=false;Ao.Bw=false;Ao.Q9=true;Ao.AcI=true;Ao.
Aks=[this,this.A3w];Ao.Cp.Cx=255;Ao.Cp.B2=0;Ao.Cp.Fr(500);Ao.Cp.AkB(0);Ao.G$.Fr(
500);Ao.G$.WF(23);Ao.G$.AFU(0);Ao.G$.AFV(0);Ao.G$.AwJ(3);Ao.G$.AEW(0.5);Ao.G$.AFE(
3);Ao.G$.AE4(3);Ao.G$.AFc(0.5);Ao.Wl.Afi(0.5,0.5,1);return Ao;},Aed:function(){var
Ao=C.Rh.Aed.call(this);Ao.ZE=false;Ao.Bw=true;return Ao;},Aec:function(){var Ao=
C.Rh.Aec.call(this);Ao.Ajm=true;Ao.Q9=false;Ao.Bw=true;return Ao;},ApL:function(
G){var B;var Ao=(C.AsT.isPrototypeOf(G)?G:null);var Bd=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C5=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Bd.slice(0,2);pos=[(Bd[
0]+(((Bd[2]-Bd[0])/2)|0))-((C5[0]/2)|0),pos[1]];pos=[pos[0],(Bd[1]+(((Bd[3]-Bd[1
])/2)|0))-((C5[1]/2)|0)];Ao.Uv=A.abf(pos,[(C5[0]/2)|0,(C5[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fq())||!Ao.P.G9)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.Uv,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3w:function(G){var Ao=(C.AsT.isPrototypeOf(G)?G:null);Ao.
Uv=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=
C.Afj;},_className:"Effects::ScaleTransition"};C.AhS={BEW:0,BFB:1,BFD:2,BFC:3,BEm:
4,BEo:5,BEn:6,BF_:7,BGa:8,BF$:9,BDS:10,BDU:11,BDT:12,BDy:13,BDA:14,BDz:15,BEd:16
,BEf:17,BEe:18,BDJ:19,BDL:20,BDK:21,BEc:22,BEq:23,BEb:24,BEr:25,BDZ:26};C.BD7={A4_:
0x1,A49:0x2,A4$:0x4,A5c:0x8,A5b:0x10,A5a:0x20};C.AN8={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AN8;},_className:"Effects::EffectTimerClass"};C.
Aej={_Init:function(){C.AN8._Init.call(this,0);this.PV(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AG4={Pl:A.abi(12,0
,null),Alr:A.abi(12,0,null),_Init:function(aArg){(this.Pl=[]).__proto__=C.AG4.Pl;(
this.Alr=[]).__proto__=C.AG4.Alr;this.__proto__=C.AG4;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ACM={B8:null,B7:null,A8l:function(Aty){var Ao=this.B7;while(
!!Ao){Ao.Zl();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B7;while(!!Ao){A.pe(Ao.A3k
,Ao);Ao=Ao.Ah;}},A8k:function(Aty){var Ao=this.B7;while(!!Ao){A.pe(Ao.AKC,Ao);Ao=
Ao.Ah;}this.B7=null;this.B8=null;},SK:function(Aty){var B;if(!this.B7)this.Mp();
var Ao=this.B7;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApQ=null;Ao=Ao.
Ah;}Ao=this.B7;while(!!Ao){(B=Ao.Aks)?B[1].call(B[0],Ao):null;Ao.SK();Ao=Ao.Ah;}
},Mp:function(){var Ao=this.B7;while(!!Ao&&Ao.AvV())Ao=Ao.Ah;if(!Ao)A.Core.AkZ.Mp.
call(this);},BoN:function(FP){if(!FP)return;if(this.ARk())throw new Error(BD);if(
FP.Pm!==this)throw new Error(E6);if(!!FP.Ah)FP.Ah.AJ=FP.AJ;else this.B8=FP.AJ;if(
!!FP.AJ)FP.AJ.Ah=FP.Ah;else this.B7=FP.Ah;FP.Pm=null;FP.Ah=null;FP.AJ=null;if(!!
FP.P)FP.P.ApQ=null;A.pe(FP.AKC,FP);if(!this.B7)this.AmC();},A44:function(FP){if(
!FP)return;if(this.ARk())throw new Error(Hr);if(!!FP.Pm)throw new Error(IU);FP.AJ=
this.B8;FP.Ah=null;if(!!this.B8)this.B8.Ah=FP;else this.B7=FP;this.B8=FP;FP.Pm=this;
},_Init:function(aArg){A.Core.AkZ._Init.call(this,aArg);this.__proto__=C.ACM;},_Mark:
function(D){var B;A.Core.AkZ._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsE={_Init:function(){C.AU1._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gm.__proto__=C.E0;C.AGf.__proto__=C.E0;C.ANs.__proto__=C.E0;
C.M_.__proto__=C.E0;C.AsS.__proto__=C.Mr;C.Axm.__proto__=C.Mr;C.Afb.__proto__=C.
Mr;C.AsT.__proto__=C.Mr;C.AU1.__proto__=C.Rh;C.Aen.__proto__=C.Rh;C.AGR.__proto__=
C.Rh;C.Afj.__proto__=C.Rh;C.AN8.__proto__=A.Core.Timer;C.ACM.__proto__=A.Core.AkZ;
};C._ReInit=function(){var B;if((B=C.Aej._this))B._ReInit(),C.Aej._ReInit.call(B
);if((B=C.AsE._this))B._ReInit(),C.AsE._ReInit.call(B);};C.DH=function(D){var B;
if((B=C.Aej._this)&&(B._cycle!=D))B._Done(C.Aej._this=null);if((B=C.AsE._this)&&(
B._cycle!=D))B._Done(C.AsE._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */