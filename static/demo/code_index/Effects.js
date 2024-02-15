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
var B9=[100,100];var BC="Trying to remove a fader from a task, which is actually running";
var EW="The fader doesn\'t belong to this task";var He="Trying to add a fader to a task, which is actually running";
var I7="The fader belongs already to a task";
C.ES={MP:null,timer:null,Qc:null,Se:null,AgK:null,SY:0,AiB:0,UL:0,OT:0,AyW:0.001,
P_:0,D5:0,Dm:0,AMC:0.5,A3L:3,Awr:3,AtZ:0.5,Vo:3,ATx:0,ATw:0,JE:0,Pc:1000,Pl:0,VA:
0,Ahe:0,Bv:false,Akq:false,ASK:false,Apx:false,AJ5:false,L8:function(G){var B;if(
!this.timer)return;if(!this.AiB){if(this.ASK)this.AiB=-1;else this.AiB=1;this.SY=
this.AiB;this.Dm=this.timer.Bt;this.D5=0;this.P_=-1;}var Kt;if((this.AiB>0)&&(this.
SY>0))Kt=this.Byw();else if((this.AiB<0)&&(this.SY<0))Kt=this.Byz();else if(this.
AiB>0)Kt=this.Byx();else Kt=this.Byy();if(Kt){this.Ar(false);(B=this.Qc)?B[1].call(
B[0],this):null;(B=this.Se)?B[1].call(B[0],this):null;}},AJD:function(AL){var B;
if(!this.MP&&(((this.Ahe===19)||(this.Ahe===20))||(this.Ahe===21))){var AId=this.
A3L+1;var Bv3=Math.sqrt(this.AMC);var Rq=0.5;var P;this.MP=A._NewObject(C.AFI,0);
this.MP.O3.Set(0,1);this.MP.AkT.Set(0,1);for(P=1;P<AId;P=P+1){this.MP.O3.Set(P,this.
MP.O3.Get(P-1)*Bv3);this.MP.AkT.Set(P,this.MP.AkT.Get(P-1)*this.AMC);Rq=Rq+this.
MP.O3.Get(P);}var BwO=1/Rq;this.MP.O3.Set(0,0.5);Rq=0;for(P=0;P<AId;P=P+1){this.
MP.O3.Set(P,this.MP.O3.Get(P)*BwO);Rq=Rq+this.MP.O3.Get(P);}this.MP.O3.Set(AId,this.
MP.O3.Get(AId)+(1-Rq));}if(this.Akq){if(AL<0.5)AL=AL*2;else AL=2-(AL*2);}switch(
this.Ahe){case 1:AL=Math.pow(AL,this.Vo);break;case 2:{AL=1-AL;AL=1-Math.pow(AL,
this.Vo);}break;case 3:{AL=AL*2;if(AL<1)AL=Math.pow(AL,this.Vo)/2;else{AL=2-AL;AL=(
2-Math.pow(AL,this.Vo))*0.5;}}break;case 4:AL=(Math.pow(2.718,this.Vo*AL)-1)/(Math.
pow(2.718,this.Vo)-1);break;case 5:{AL=1-AL;AL=1-((Math.pow(2.718,this.Vo*AL)-1)
/(Math.pow(2.718,this.Vo)-1));}break;case 6:{AL=AL*2;if(AL<1)AL=((Math.pow(2.718
,this.Vo*AL)-1)/(Math.pow(2.718,this.Vo)-1))/2;else{AL=2-AL;AL=(2-((Math.pow(2.718
,this.Vo*AL)-1)/(Math.pow(2.718,this.Vo)-1)))*0.5;}}break;case 7:AL=1-Math.cos((
AL*90)*A.k$);break;case 8:AL=Math.sin((AL*90)*A.k$);break;case 9:{AL=AL*2;if(AL<
1){AL=1-Math.cos((AL*90)*A.k$);AL=AL*0.5;}else{AL=2-AL;AL=1-Math.cos((AL*90)*A.k$
);AL=(2-AL)*0.5;}}break;case 10:AL=1-Math.sqrt(1-(AL*AL));break;case 11:{AL=1-AL;
AL=Math.sqrt(1-(AL*AL));}break;case 12:{AL=AL*2;if(AL<1){AL=1-Math.sqrt(1-(AL*AL
));AL=AL*0.5;}else{AL=2-AL;AL=1-Math.sqrt(1-(AL*AL));AL=(2-AL)*0.5;}}break;case 13:
AL=((AL*AL)*AL)-((AL*this.AtZ)*Math.sin((AL*180)*A.k$));break;case 14:{AL=1-AL;AL=((
AL*AL)*AL)-((AL*this.AtZ)*Math.sin((AL*180)*A.k$));AL=1-AL;}break;case 15:{AL=AL
*2;if(AL<1){AL=((AL*AL)*AL)-((AL*this.AtZ)*Math.sin((AL*180)*A.k$));AL=AL*0.5;}else{
AL=2-AL;AL=((AL*AL)*AL)-((AL*this.AtZ)*Math.sin((AL*180)*A.k$));AL=(2-AL)*0.5;}}
break;case 16:AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Awr)))*A.k$);break;case
17:{AL=1-AL;AL=1-(((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Awr)))*A.k$));}break;
case 18:{AL=AL*2;if(AL<1){AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Awr)))*A.
k$);AL=AL*0.5;}else{AL=2-AL;AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Awr)))*
A.k$);AL=(2-AL)*0.5;}}break;case 19:{var Bz=this.MP;var P=0;var Gt=0;var KY=Bz.O3.
Get(0);var D1=1-AL;while(D1>KY){P=P+1;Gt=KY;KY=KY+Bz.O3.Get(P);}AL=(D1-Gt)/(KY-Gt
);if(!P)AL=1-(AL*AL);else{AL=(2*AL)-1;AL=Bz.AkT.Get(P)*(1-(AL*AL));}}break;case 20:{
var Bz=this.MP;var P=0;var Gt=0;var KY=Bz.O3.Get(0);while(AL>KY){P=P+1;Gt=KY;KY=
KY+Bz.O3.Get(P);}AL=(AL-Gt)/(KY-Gt);if(!P)AL=AL*AL;else{AL=(2*AL)-1;AL=1-(Bz.AkT.
Get(P)*(1-(AL*AL)));}}break;case 21:{var Bz=this.MP;var P=0;var Gt=0;var KY=Bz.O3.
Get(0);var LA=AL*2;var D1=LA-1;if(LA<1)D1=-D1;while(D1>KY){P=P+1;Gt=KY;KY=KY+Bz.
O3.Get(P);}D1=(D1-Gt)/(KY-Gt);if(!P)D1=D1*D1;else{D1=(2*D1)-1;D1=1-(Bz.AkT.Get(P
)*(1-(D1*D1)));}if(LA<1)AL=0.5*(1-D1);else AL=0.5*(1+D1);}break;default:if(this.
Apx){var LA=AL;var Azk=1-LA;AL=((Azk*LA)*(this.OT+1))+(LA*LA);}else if(this.AJ5){
var LA=AL;var Azk=1-LA;var BaO=LA*LA;var Bw3=Azk*Azk;AL=(((Bw3*LA)*(this.OT+1))+((
Azk*BaO)*(this.UL+2)))+(BaO*LA);}}this.At4(AL);(B=this.AgK)?B[1].call(B[0],this):
null;},Byz:function(){var At=(this.timer.Bt-this.Dm)|0;if(At<0)At=-At;var Lw=this.
VA;var Ob=this.VA+this.Pc;var G3=this.Pl+this.Pc;var Kt=false;var D6=this.P_;if(
!this.D5&&(At>=Ob)){this.D5=1;At=At-Ob;this.Dm=this.Dm+Ob;}if((this.D5>0)&&(At>=
G3)){var H7=(At/G3)|0;this.D5=this.D5+H7;At=At-(H7*G3);this.Dm=this.Dm+(H7*G3);}
if((this.D5>2)&&!this.JE)this.D5=1;if(this.D5>0)Lw=this.Pl;if((this.D5>=this.JE)&&(
this.JE>0)){Kt=true;D6=0;}else if(At>=Lw)D6=1-((At-Lw)*this.AyW);else if(D6>=0)D6=
0;if(D6!==this.P_){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.P_){this.P_=D6;this.AJD(
D6);}return Kt;},Byy:function(){var At=(this.Dm-this.timer.Bt)|0;var Lw=this.VA;
var Ob=this.VA+this.Pc;var G3=this.Pl+this.Pc;var Kt=false;var D6=this.P_;if((this.
D5>1)&&(At<0)){var H7=(((-At+G3)-1)/G3)|0;if((this.D5-H7)<=0)H7=this.D5-1;this.D5=
this.D5-H7;At=At+(H7*G3);this.Dm=this.Dm+(H7*G3);}if(((this.D5===1)&&(At<0))&&(this.
JE>0)){this.D5=0;At=At+Ob;this.Dm=this.Dm+Ob;}if(((this.D5===1)&&(At<0))&&!this.
JE){var H7=(((-At+G3)-1)/G3)|0;At=At+(H7*G3);this.Dm=this.Dm+(H7*G3);}if(this.D5>
0)Lw=this.Pl;if(At<0){Kt=true;D6=1;}else if(At>=Lw)D6=1-((At-Lw)*this.AyW);else if(
D6>=0)D6=1;if(D6!==this.P_){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.P_){this.P_=
D6;this.AJD(D6);}return Kt;},Byx:function(){var At=(this.Dm-this.timer.Bt)|0;var
Lw=this.VA;var Ob=this.VA+this.Pc;var G3=this.Pl+this.Pc;var Kt=false;var D6=this.
P_;if((this.D5>1)&&(At<0)){var H7=(((-At+G3)-1)/G3)|0;if((this.D5-H7)<=0)H7=this.
D5-1;this.D5=this.D5-H7;At=At+(H7*G3);this.Dm=this.Dm+(H7*G3);}if(((this.D5===1)&&(
At<0))&&(this.JE>0)){this.D5=0;At=At+Ob;this.Dm=this.Dm+Ob;}if(((this.D5===1)&&(
At<0))&&!this.JE){var H7=(((-At+G3)-1)/G3)|0;At=At+(H7*G3);this.Dm=this.Dm+(H7*G3
);}if(this.D5>0)Lw=this.Pl;if(At<0){Kt=true;D6=0;}else if(At>=Lw)D6=(At-Lw)*this.
AyW;else if(D6>=0)D6=0;if(D6!==this.P_){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.
P_){this.P_=D6;this.AJD(D6);}return Kt;},Byw:function(){var At=(this.timer.Bt-this.
Dm)|0;if(At<0)At=-At;var Lw=this.VA;var Ob=this.VA+this.Pc;var G3=this.Pl+this.Pc;
var Kt=false;var D6=this.P_;if(!this.D5&&(At>=Ob)){this.D5=1;At=At-Ob;this.Dm=this.
Dm+Ob;}if((this.D5>0)&&(At>=G3)){var H7=(At/G3)|0;this.D5=this.D5+H7;At=At-(H7*G3
);this.Dm=this.Dm+(H7*G3);}if((this.D5>2)&&!this.JE)this.D5=1;if(this.D5>0)Lw=this.
Pl;if((this.D5>=this.JE)&&(this.JE>0)){Kt=true;D6=1;}else if(At>=Lw)D6=(At-Lw)*this.
AyW;else if(D6>=0)D6=1;if(D6!==this.P_){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.
P_){this.P_=D6;this.AJD(D6);}return Kt;},Aeu:function(E){if(this.ASK===E)return;
this.ASK=E;if(!this.Bv||!this.AiB)return;if(E)this.SY=-1;else this.SY=1;this.Dm=(
this.timer.AuL()*2)-this.Dm;},ADT:function(E){if(E<0)E=0;if(E>1)E=1;this.AMC=E;}
,ADI:function(E){if(E<1)E=1;if(E>10)E=10;this.A3L=E;this.MP=null;},AEn:function(
E){if(E<1)E=1;if(E>10)E=10;this.Awr=E;},ADC:function(E){if(E<0)E=0;if(E>10)E=10;
this.AtZ=E;},AvT:function(E){if(E<1)E=1;if(E>100)E=100;this.Vo=E;},AEC:function(
E){if(this.ATx===E)return;this.ATx=E;if(this.Ahe===26){this.UL=E;this.Apx=(this.
OT===this.UL)&&!!this.OT;this.AJ5=!this.Apx&&(this.OT!==this.UL);}},AEB:function(
E){if(this.ATw===E)return;this.ATw=E;if(this.Ahe===26){this.OT=E;this.Apx=(this.
OT===this.UL)&&!!this.OT;this.AJ5=!this.Apx&&(this.OT!==this.UL);}},Wa:function(
E){if(this.Ahe===E)return;this.Ahe=E;this.MP=null;switch(E){case 24:{this.OT=-1.1;
this.UL=1.1;}break;case 22:{this.OT=-1;this.UL=-2;}break;case 23:{this.OT=2;this.
UL=1;}break;case 25:{this.OT=1.1;this.UL=-1.1;}break;case 0:{this.OT=0;this.UL=0;
}break;default:{this.OT=this.ATw;this.UL=this.ATx;}}this.Apx=(this.OT===this.UL)&&
!!this.OT;this.AJ5=!this.Apx&&(this.OT!==this.UL);},HF:function(E){if(E<0)E=0;this.
JE=E;},Ff:function(E){if(E<15)E=15;this.Pc=E;this.AyW=1/E;},T1:function(E){if(E<
0)E=0;this.Pl=E;},Aj4:function(E){if(E<0)E=0;this.VA=E;},Ar:function(E){if(this.
Bv===E)return;this.Bv=E;if(!E&&!!this.timer){A.z9([this,this.L8],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.AdI);A.zV([this,this.L8],this.timer
,0);this.AiB=0;A.pe([this,this.L8],this);}},At4:function(ZN){},Ant:function(G){this.
Ar(false);},Anr:function(G){if(this.Bv)this.Ar(false);this.Ar(true);},_Init:function(
aArg){this.__proto__=C.ES;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.MP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Qc)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Se)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AgK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};C.FZ={Q:null,A4:0,BY:255,Cq:0,At4:function(ZN){var F;this.A4=
this.Cq+(Math.round((this.BY-this.Cq)*ZN)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0
],this.A4));},_Init:function(aArg){C.ES._Init.call(this,aArg);this.__proto__=C.FZ;
},_Mark:function(D){var B;C.ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AEY={Q:null,A4:A.
wf,BY:B9,Cq:A.wf,At4:function(ZN){var F;var Ef=this.Cq[0];var C$=this.Cq[1];Ef=Ef+(
Math.round((this.BY[0]-Ef)*ZN)|0);C$=C$+(Math.round((this.BY[1]-C$)*ZN)|0);this.
A4=[Ef,C$];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A4));},_Init:function(aArg){
C.ES._Init.call(this,aArg);this.__proto__=C.AEY;},_Mark:function(D){var B;C.ES._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::PointEffect"};C.ALZ={Q:null,A4:0,BY:0xFFFFFFFF,Cq:0,At4:function(ZN){var
F;var O1=this.Cq&0xFF;var ZZ=(this.Cq>>8)&0xFF;var AkZ=(this.Cq>>16)&0xFF;var AkS=(
this.Cq>>24)&0xFF;O1=O1+((((this.BY&0xFF)-O1)*ZN)|0);ZZ=ZZ+(((((this.BY>>8)&0xFF
)-ZZ)*ZN)|0);AkZ=AkZ+(((((this.BY>>16)&0xFF)-AkZ)*ZN)|0);AkS=AkS+(((((this.BY>>24
)&0xFF)-AkS)*ZN)|0);if(O1<0)O1=0;if(O1>255)O1=255;if(ZZ<0)ZZ=0;if(ZZ>255)ZZ=255;
if(AkZ<0)AkZ=0;if(AkZ>255)AkZ=255;if(AkS<0)AkS=0;if(AkS>255)AkS=255;this.A4=(O1&
0xFF)|((ZZ&0xFF)<<8)|((AkZ&0xFF)<<16)|((AkS&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2
].call(F[0],this.A4));},_Init:function(aArg){C.ES._Init.call(this,aArg);this.__proto__=
C.ALZ;},_Mark:function(D){var B;C.ES._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::ColorEffect"};C.MY={A4:0,BY:
1,Cq:0,At4:function(ZN){this.A4=this.Cq+((this.BY-this.Cq)*ZN);},_Init:function(
aArg){C.ES._Init.call(this,aArg);this.__proto__=C.MY;},_className:"Effects::FloatEffect"
};C.Tn={timer:null,Q:null,D5:0,Dm:0,JE:0,Pc:1000,Pl:1000,VA:0,Bv:false,Cq:false,
BY:true,L8:function(G){var F;if(!this.timer)return;if(this.D5<0){this.Dm=this.timer.
Bt;this.D5=0;}var At=(this.timer.Bt-this.Dm)|0;var Ob=this.VA+this.Pc;var G3=this.
Pl+this.Pc;var Lw=this.VA;var I_=this.D5;if(!I_&&(At>=Ob)){I_=1;At=At-Ob;}if((I_>
0)&&(At>=G3)){var H7=(At/G3)|0;At=At-(H7*G3);I_=I_+H7;}if((I_>2)&&!this.JE)I_=1;
if(I_!==this.D5){this.Dm=this.timer.Bt-(((B=At)<0)?B+0x100000000:B);this.D5=I_;}
if(I_>0)Lw=this.Pl;var Kt=(I_>=this.JE)&&(this.JE>0);if(!!this.Q){if(!Kt&&(At>=Lw
))(F=this.Q,F[2].call(F[0],this.Cq));if(Kt||((At<Lw)&&(I_>0)))(F=this.Q,F[2].call(
F[0],this.BY));}if(Kt)this.Ar(false);},HF:function(E){if(E<0)E=0;this.JE=E;},Ff:
function(E){if(E<100)E=100;this.Pc=E;},T1:function(E){if(E<0)E=0;this.Pl=E;},Aj4:
function(E){if(E<0)E=0;this.VA=E;},Ar:function(E){if(this.Bv===E)return;this.Bv=
E;if(!E&&!!this.timer){A.z9([this,this.L8],this.timer,0);this.timer=null;}if(E){
this.timer=A._GetAutoObject(C.AdI);A.zV([this,this.L8],this.timer,0);this.D5=-1;
}},Ant:function(G){this.Ar(false);},Anr:function(G){if(this.Bv)this.Ar(false);this.
Ar(true);},_Init:function(aArg){this.__proto__=C.Tn;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.Mg={O4:null,AH:null,Ag:null
,Ab:null,O:null,AJf:null,A1j:null,AjW:null,Dl:true,Bv:true,Acb:true,AiP:false,AiY:
true,Y6:true,QR:true,Me:function(){if(!!this.O4)this.O4.Me();},Ava:function(){return true;
},YR:function(){},Sk:function(){this.Me();},_Init:function(aArg){this.__proto__=
C.Mg;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.O4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AJf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A1j)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AjW)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Ar7={Arw:A.wf
,MI:false,Ava:function(){return this.MI;},YR:function(){if(!this.Dl&&!!this.O.Ab
)this.O.Y(false);if((!this.Dl&&this.QR)&&!!this.O.Ab)this.O.Ab.HH(this.O);if(!this.
Bv)this.O.Ar(false);},Sk:function(){if(this.Bv)this.O.Ar(true);if((this.Dl||this.
AiP)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dl&&this.Y6)this.
O.Ab.Y5(this.O);if(this.Dl&&this.AiY)this.O.Ab.A8(this.O);if(this.Dl&&!this.Acb)
this.O.H(A.abJ(this.O.M,this.Arw));if(this.Dl){this.O.Ds(255);this.O.Y(true);}if(
!this.Dl&&(this.Ab.AR===this.O))this.Ab.A8(null);this.MI=true;this.Me();},_Init:
function(aArg){C.Mg._Init.call(this,aArg);this.__proto__=C.Ar7;},_className:"Effects::VisibilityFader"
};C.Awn={ES:null,MI:false,ApA:false,Ava:function(){return this.MI;},YR:function(
){if(this.Dl)this.O.Ds(this.ES.BY);if(!this.Dl&&!this.O.GT)this.O.Y(false);if((!
this.Dl&&this.QR)&&!!this.O.Ab)this.O.Ab.HH(this.O);if(!this.Bv)this.O.Ar(false);
},Sk:function(){var B;if(this.Acb){if(this.O.Fe()&&!!this.O.Ab)this.ES.Cq=this.O.
GT;else this.ES.Cq=0;}var AyZ=((!this.O.Ab||!this.O.GT)||!this.O.Fe())||(((B=A.lb(
this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ay0=((
!this.Dl&&((!this.O.Ab||!this.O.Fe())||this.QR))||!this.ES.BY)||(((B=A.lb(this.O.
M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AyZ&&Ay0){
this.ES.Cq=0;this.ES.BY=0;}this.ApA=this.O.AQV();if(this.Bv)this.O.Ar(true);if((
this.Dl||this.AiP)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dl&&
this.Y6)this.O.Ab.Y5(this.O);if(this.Dl&&this.AiY)this.O.Ab.A8(this.O);if(!this.
Dl&&(this.Ab.AR===this.O))this.Ab.A8(null);if(this.Dl&&!this.O.Fe()){this.O.Ds(this.
ES.Cq);this.O.Y(true);}if(!this.Dl&&((!this.O.Ab||!this.O.Fe())||!this.O.GT)){this.
MI=true;this.Me();return;}if(!this.Dl&&(this.ES.Cq===this.ES.BY))this.O.Ds(this.
ES.Cq);if(this.O.GT===this.ES.BY){this.MI=true;this.Me();return;}if(this.ES.Cq===
this.ES.BY){this.MI=true;this.Me();return;}if(!this.ES.JE)this.ES.HF(1);this.ES.
Q=[B=this.O,B.Avy,B.AYx];this.ES.Aeu(false);this.ES.Akq=false;this.ES.Se=[this,this.
Aif];this.ES.AgK=null;this.ES.Ar(true);},Aif:function(G){this.MI=true;this.Me();
},_Init:function(aArg){C.Mg._Init.call(this,aArg);C.FZ._Init.call(this.ES={I:this
},0);this.__proto__=C.Awn;},_Done:function(){this.__proto__=C.Mg;this.ES._Done();
C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.ES._ReInit(
);},_Mark:function(D){var B;C.Mg._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Aex={Ck:null,D3:null,Adw:false
,MI:false,ApA:false,Ava:function(){return this.MI;},YR:function(){if(this.Dl){this.
O.Ds(this.Ck.BY);this.O.H(A.abJ(this.O.M,this.D3.BY));}if(!this.Dl&&!this.O.GT)this.
O.Y(false);if((!this.Dl&&this.QR)&&!!this.O.Ab)this.O.Ab.HH(this.O);if(this.Adw)
this.O.Aq0(this.ApA);if(!this.Bv)this.O.Ar(false);},Sk:function(){var B;if(this.
Acb){if(this.O.Fe()&&!!this.O.Ab)this.Ck.Cq=this.O.GT;else this.Ck.Cq=0;this.D3.
Cq=this.O.M.slice(0,2);}var AyZ=((!this.O.Ab||!this.O.GT)||!this.O.Fe())||(((B=A.
lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Ay0=((!this.Dl&&((!this.O.Ab||!this.O.Fe())||this.QR))||!this.Ck.BY)||(((B=A.lb(
A.abh([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D3.BY),[0,0,(B=this.Ab.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AyZ&&Ay0){this.Ck.Cq=0;this.Ck.BY=0;this.
D3.Cq=this.D3.BY;}this.ApA=this.O.AQV();if(this.Bv)this.O.Ar(true);if((this.Dl||
this.AiP)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Dl&&this.Y6)
this.O.Ab.Y5(this.O);if(this.Dl&&this.AiY)this.O.Ab.A8(this.O);if(!this.Dl&&(this.
Ab.AR===this.O))this.Ab.A8(null);if(this.Dl&&!this.O.Fe()){this.O.H(A.abJ(this.O.
M,this.D3.Cq));this.O.Ds(this.Ck.Cq);this.O.Y(true);}if(!this.Dl&&((!this.O.Ab||
!this.O.Fe())||!this.O.GT)){this.MI=true;this.Me();return;}if(!this.Dl&&A.aaX(this.
D3.Cq,this.D3.BY))this.O.H(A.abJ(this.O.M,this.D3.Cq));if(!this.Dl&&(this.Ck.Cq===
this.Ck.BY))this.O.Ds(this.Ck.Cq);if((this.O.GT===this.Ck.BY)&&A.aaX(this.O.M.slice(
0,2),this.D3.BY)){this.MI=true;this.Me();return;}if((this.Ck.Cq===this.Ck.BY)&&A.
aaX(this.D3.Cq,this.D3.BY)){this.MI=true;this.Me();return;}if(!this.Ck.JE)this.Ck.
HF(1);if(!this.D3.JE)this.D3.HF(1);if(this.Adw)this.O.Aq0(true);this.D3.Q=null;this.
D3.Aeu(false);this.D3.Akq=false;this.D3.Se=[this,this.Aif];this.D3.AgK=[this,this.
Azt];this.Ck.Q=[B=this.O,B.Avy,B.AYx];this.Ck.Aeu(false);this.Ck.Akq=false;this.
Ck.Se=[this,this.Aif];this.Ck.AgK=null;this.D3.Ar(!A.aaX(this.D3.Cq,this.D3.BY));
this.Ck.Ar(this.Ck.Cq!==this.Ck.BY);},Aif:function(G){this.MI=!this.Ck.Bv&&!this.
D3.Bv;this.Me();},Azt:function(G){this.O.H(A.abJ(this.O.M,this.D3.A4));},_Init:function(
aArg){C.Mg._Init.call(this,aArg);C.FZ._Init.call(this.Ck={I:this},0);C.AEY._Init.
call(this.D3={I:this},0);this.__proto__=C.Aex;},_Done:function(){this.__proto__=
C.Mg;this.Ck._Done();this.D3._Done();C.Mg._Done.call(this);},_ReInit:function(){
C.Mg._ReInit.call(this);this.Ck._ReInit();this.D3._ReInit();},_Mark:function(D){
var B;C.Mg._Mark.call(this,D);if((B=this.Ck)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Ar8={Adb:null,Ck:null,GW:null,VU:null,FD:null,T8:A.wf,Ake:A.wf,MI:false,ApA:false
,Ava:function(){return this.MI;},YR:function(){if(this.Dl){this.O.Ds(this.Ck.BY);
this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.T8));this.O.Y(true);}if(!this.
Dl&&!this.Ck.BY){this.O.Ds(0);this.O.Y(false);}if(((!this.Dl&&(this.Ck.BY>0))&&!
!this.O.Ab)&&!this.QR){this.O.Ds(this.Ck.BY);this.O.H(A.abh(A.abg(this.O.M,A.aaI(
this.O.M)),this.T8));this.O.Y(true);}if((!this.Dl&&this.QR)&&!!this.O.Ab)this.O.
Ab.HH(this.O);this.O.Aq0(this.ApA);if(!!this.Adb)this.Ab.HH(this.Adb);if(!this.Bv
)this.O.Ar(false);},Sk:function(){var B;if(this.Acb){if(this.O.Fe()&&!!this.O.Ab
)this.Ck.Cq=this.O.GT;else this.Ck.Cq=0;this.Ake=A.aaI(this.O.M);}var AyZ=((!this.
O.Ab||!this.O.GT)||!this.O.Fe())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Ay0=((!this.Dl&&((!this.O.Ab||!this.O.
Fe())||this.QR))||!this.Ck.BY)||(((B=A.lb(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),
this.T8),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AyZ&&
Ay0){this.Ck.Cq=0;this.Ck.BY=0;this.Ake=this.T8;this.VU.A5Q();}this.ApA=this.O.AQV(
);if(this.Bv)this.O.Ar(true);if((this.Dl||this.AiP)&&!this.O.Ab){this.O.Y(false);
this.Ab.J(this.O,0);}if(this.Dl&&this.Y6)this.O.Ab.Y5(this.O);if(this.Dl&&this.AiY
)this.O.Ab.A8(this.O);if(!this.Dl&&(this.Ab.AR===this.O))this.Ab.A8(null);if(this.
Dl&&!this.O.Fe())this.O.Ds(this.Ck.Cq);if((!this.Dl&&A.aaX(this.Ake,this.T8))&&this.
VU.ACJ())this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Ake));if(!this.Dl&&(
this.Ck.Cq===this.Ck.BY))this.O.Ds(this.Ck.Cq);if(!this.Dl&&((!this.O.Ab||!this.
O.Fe())||!this.O.GT)){this.MI=true;this.Me();return;}if(((this.Dl&&(this.O.GT===
this.Ck.BY))&&A.aaX(A.aaI(this.O.M),this.T8))&&this.O.Fe()){this.MI=true;this.Me(
);return;}if(((!this.Dl&&(this.O.GT===this.Ck.BY))&&A.aaX(A.aaI(this.O.M),this.T8
))&&this.VU.ACJ()){this.MI=true;this.Me();return;}if(((this.Ck.Cq===this.Ck.BY)&&
A.aaX(this.Ake,this.T8))&&this.VU.ACJ()){this.MI=true;this.Me();return;}this.O.Aq0(
true);this.O.Y(false);this.Adb=A._NewObject(A.acg.ATU,0);this.Adb.Bj_(this.O);this.
Adb.Ds(this.Ck.Cq);this.Adb.BkZ(A.aaI([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.
O.Ab.AKK(this.Adb,this.O);if(!this.Ck.JE)this.Ck.HF(1);if(!this.GW.JE)this.GW.HF(
1);this.GW.Aeu(false);this.GW.Akq=false;this.GW.Se=[this,this.Aif];this.GW.AgK=[
this,this.Azt];if(this.Dl){this.GW.Cq=0;this.GW.BY=1;}else{this.GW.Cq=1;this.GW.
BY=0;}this.Ck.Q=[B=this.Adb,B.Avy,B.Ds];this.Ck.Aeu(false);this.Ck.Akq=false;this.
Ck.Se=[this,this.Aif];this.Ck.AgK=null;this.GW.Ar(!A.aaX(this.Ake,this.T8)||!this.
VU.ACJ());this.Ck.Ar(this.Ck.Cq!==this.Ck.BY);},Aif:function(G){this.MI=!this.Ck.
Bv&&!this.GW.Bv;this.Me();},Azt:function(G){var B;var AAh=A.abe(this.T8,this.Ake
);if(!this.Dl)AAh=[-AAh[0],-AAh[1]];this.FD.A5Q();this.FD.Agi=this.VU.Agi;this.FD.
Bne(AAh[0],AAh[1],0);this.FD.BgT(this.VU,this.FD,this.GW.A4);if(this.Dl)this.Adb.
A9S(this.Ake,this.FD);else this.Adb.A9S(this.T8,this.FD);},_Init:function(aArg){
C.Mg._Init.call(this,aArg);C.FZ._Init.call(this.Ck={I:this},0);C.MY._Init.call(this.
GW={I:this},0);A.Graphics.Aw0._Init.call(this.VU={I:this},0);A.Graphics.Aw0._Init.
call(this.FD={I:this},0);this.__proto__=C.Ar8;},_Done:function(){this.__proto__=
C.Mg;this.Ck._Done();this.GW._Done();this.VU._Done();this.FD._Done();C.Mg._Done.
call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.Ck._ReInit();this.GW.
_ReInit();this.VU._ReInit();this.FD._ReInit();},_Mark:function(D){var B;C.Mg._Mark.
call(this,D);if((B=this.Adb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
VU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Q0={RQ:function(){return null;},RP:function(
){return null;},AdC:function(){return this.RQ();},AdB:function(){return this.RP(
);},_Init:function(aArg){this.__proto__=C.Q0;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AS9={RQ:function(){var Ao=A._NewObject(C.Ar7,0);Ao.Dl=true;Ao.Bv=true;Ao.AiY=
false;Ao.Y6=true;Ao.Acb=false;Ao.AjW=[this,this.Ao8];return Ao;},RP:function(){var
Ao=A._NewObject(C.Ar7,0);Ao.Dl=false;Ao.Bv=false;Ao.QR=true;return Ao;},AdC:function(
){var Ao=C.Q0.AdC.call(this);Ao.Y6=false;Ao.Bv=true;return Ao;},AdB:function(){var
Ao=A._NewObject(C.Ar7,0);Ao.Dl=false;Ao.Bv=true;Ao.AiP=true;Ao.QR=false;return Ao;
},Ao8:function(G){var B;var Ao=(C.Ar7.isPrototypeOf(G)?G:null);var A_=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var CY=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(
0,2);pos=[(A_[0]+(((A_[2]-A_[0])/2)|0))-((CY[0]/2)|0),pos[1]];pos=[pos[0],(A_[1]+(((
A_[3]-A_[1])/2)|0))-((CY[1]/2)|0)];Ao.Arw=pos;},_Init:function(aArg){C.Q0._Init.
call(this,aArg);this.__proto__=C.AS9;},_className:"Effects::ShowHideTransition"};
C.AdM={ABv:500,RQ:function(){var Ao=A._NewObject(C.Aex,0);Ao.Dl=true;Ao.Bv=true;
Ao.AiY=false;Ao.Y6=true;Ao.Acb=true;Ao.Adw=false;Ao.AjW=[this,this.Ao8];Ao.Ck.Ff(
this.ABv);Ao.Ck.Cq=0;Ao.Ck.BY=255;Ao.D3.Ff(this.ABv);Ao.D3.Wa(23);return Ao;},RP:
function(){var Ao=A._NewObject(C.Awn,0);Ao.Dl=false;Ao.Bv=false;Ao.QR=true;Ao.Acb=
true;Ao.ES.Cq=255;Ao.ES.BY=0;Ao.ES.Ff(this.ABv);return Ao;},AdC:function(){var Ao=
C.Q0.AdC.call(this);Ao.Y6=false;Ao.Bv=true;return Ao;},AdB:function(){var Ao=C.Q0.
AdB.call(this);Ao.AiP=true;Ao.QR=false;Ao.Bv=true;return Ao;},Ao8:function(G){var
B;var Ao=(C.Aex.isPrototypeOf(G)?G:null);var A_=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var CY=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(0,2);pos=[(A_[0]+(((A_[
2]-A_[0])/2)|0))-((CY[0]/2)|0),pos[1]];pos=[pos[0],(A_[1]+(((A_[3]-A_[1])/2)|0))-((
CY[1]/2)|0)];Ao.D3.BY=pos;if(((!Ao.O.Ab||!Ao.O.Fe())||!Ao.O.GT)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.O.H(A.abJ(Ao.
O.M,pos));},_Init:function(aArg){C.Q0._Init.call(this,aArg);this.__proto__=C.AdM;
},_className:"Effects::FadeInOutTransition"};C.AFv={J3:0x12,Auk:0,Adw:false,RQ:function(
){var Ao=A._NewObject(C.Aex,0);Ao.Dl=true;Ao.Bv=true;Ao.AiY=false;Ao.Y6=true;Ao.
Acb=true;Ao.Adw=this.Adw;Ao.AjW=[this,this.Ao8];Ao.Ck.Ff(500);Ao.Ck.Aj4(0);Ao.Ck.
Cq=0;Ao.Ck.BY=255;Ao.D3.Ff(500);Ao.D3.Wa(23);Ao.D3.AEB(0);Ao.D3.AEC(0);Ao.D3.AvT(
3);Ao.D3.ADC(0.5);Ao.D3.AEn(3);Ao.D3.ADI(3);Ao.D3.ADT(0.5);return Ao;},RP:function(
){var Ao=A._NewObject(C.Aex,0);Ao.Dl=false;Ao.Bv=false;Ao.QR=true;Ao.Acb=true;Ao.
Adw=this.Adw;Ao.AjW=[this,this.A1v];Ao.Ck.Cq=255;Ao.Ck.BY=0;Ao.Ck.Ff(500);Ao.Ck.
Aj4(0);Ao.D3.Ff(500);Ao.D3.Wa(23);Ao.D3.AEB(0);Ao.D3.AEC(0);Ao.D3.AvT(3);Ao.D3.ADC(
0.5);Ao.D3.AEn(3);Ao.D3.ADI(3);Ao.D3.ADT(0.5);return Ao;},AdC:function(){var Ao=
C.Q0.AdC.call(this);Ao.Y6=false;Ao.Bv=true;return Ao;},AdB:function(){var Ao=C.Q0.
AdB.call(this);Ao.AiP=true;Ao.QR=false;Ao.Bv=true;return Ao;},Ao8:function(G){var
B;var Ao=(C.Aex.isPrototypeOf(G)?G:null);var Br=this.J3;var A_=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var CY=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(0,2);if(((
Br&0x4)===0x4))pos=[A_[2]-CY[0],pos[1]];else if(((Br&0x2)===0x2))pos=[(A_[0]+(((
A_[2]-A_[0])/2)|0))-((CY[0]/2)|0),pos[1]];if(((Br&0x20)===0x20))pos=[pos[0],A_[3
]-CY[1]];else if(((Br&0x10)===0x10))pos=[pos[0],(A_[1]+(((A_[3]-A_[1])/2)|0))-((
CY[1]/2)|0)];Ao.D3.BY=pos;if(((!Ao.O.Ab||!Ao.O.Fe())||!Ao.O.GT)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hq=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Auk){case 5:pos=[pos[0],-CY[1]];break;case 3:{
pos=[pos[0],-CY[1]];pos=[Hq[0],pos[1]];}break;case 8:pos=[-CY[0],-CY[1]];break;case
2:pos=[Hq[0],pos[1]];break;case 7:pos=[-CY[0],pos[1]];break;case 4:pos=[pos[0],Hq[
1]];break;case 1:{pos=[pos[0],Hq[1]];pos=[Hq[0],pos[1]];}break;case 6:{pos=[pos[
0],Hq[1]];pos=[-CY[0],pos[1]];}break;default:;}Ao.O.H(A.abJ(Ao.O.M,pos));}},A1v:
function(G){var B;var Ao=(C.Aex.isPrototypeOf(G)?G:null);var pos=Ao.O.M.slice(0,
2);var CY=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var Hq=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Auk){case 5:pos=[pos[0],Hq[1]];break;case 3:{pos=[pos[0],Hq[1]];pos=[-
CY[0],pos[1]];}break;case 8:{pos=[pos[0],Hq[1]];pos=[Hq[0],pos[1]];}break;case 2:
pos=[-CY[0],pos[1]];break;case 7:pos=[Hq[0],pos[1]];break;case 4:pos=[pos[0],-CY[
1]];break;case 1:pos=[-CY[0],-CY[1]];break;case 6:{pos=[pos[0],-CY[1]];pos=[Hq[0
],pos[1]];}break;default:;}Ao.D3.BY=pos;},_Init:function(aArg){C.Q0._Init.call(this
,aArg);this.__proto__=C.AFv;},_className:"Effects::SlideTransition"};C.AeF={RQ:function(
){var Ao=A._NewObject(C.Ar8,0);Ao.Dl=true;Ao.Bv=true;Ao.AiY=false;Ao.Y6=true;Ao.
Acb=true;Ao.AjW=[this,this.Ao8];Ao.Ck.Ff(500);Ao.Ck.Aj4(0);Ao.Ck.Cq=0;Ao.Ck.BY=255;
Ao.GW.Ff(500);Ao.GW.Wa(23);Ao.GW.AEB(0);Ao.GW.AEC(0);Ao.GW.AvT(3);Ao.GW.ADC(0.5);
Ao.GW.AEn(3);Ao.GW.ADI(3);Ao.GW.ADT(0.5);Ao.VU.AeE(0.5,0.5,1);return Ao;},RP:function(
){var Ao=A._NewObject(C.Ar8,0);Ao.Dl=false;Ao.Bv=false;Ao.QR=true;Ao.Acb=true;Ao.
AjW=[this,this.A1v];Ao.Ck.Cq=255;Ao.Ck.BY=0;Ao.Ck.Ff(500);Ao.Ck.Aj4(0);Ao.GW.Ff(
500);Ao.GW.Wa(23);Ao.GW.AEB(0);Ao.GW.AEC(0);Ao.GW.AvT(3);Ao.GW.ADC(0.5);Ao.GW.AEn(
3);Ao.GW.ADI(3);Ao.GW.ADT(0.5);Ao.VU.AeE(0.5,0.5,1);return Ao;},AdC:function(){var
Ao=C.Q0.AdC.call(this);Ao.Y6=false;Ao.Bv=true;return Ao;},AdB:function(){var Ao=
C.Q0.AdB.call(this);Ao.AiP=true;Ao.QR=false;Ao.Bv=true;return Ao;},Ao8:function(
G){var B;var Ao=(C.Ar8.isPrototypeOf(G)?G:null);var A_=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var CY=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(0,2);pos=[(A_[
0]+(((A_[2]-A_[0])/2)|0))-((CY[0]/2)|0),pos[1]];pos=[pos[0],(A_[1]+(((A_[3]-A_[1
])/2)|0))-((CY[1]/2)|0)];Ao.T8=A.abf(pos,[(CY[0]/2)|0,(CY[1]/2)|0]);if(((!Ao.O.Ab||
!Ao.O.Fe())||!Ao.O.GT)||(((B=A.lb(Ao.O.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.O.H(A.abJ(Ao.O.M,A.abe(Ao.T8,A.aaI([0,0,(B=Ao.O.M)[2]-
B[0],B[3]-B[1]]))));},A1v:function(G){var Ao=(C.Ar8.isPrototypeOf(G)?G:null);Ao.
T8=A.aaI(Ao.O.M);},_Init:function(aArg){C.Q0._Init.call(this,aArg);this.__proto__=
C.AeF;},_className:"Effects::ScaleTransition"};C.Ahe={BBh:0,BBX:1,BBZ:2,BBY:3,BAD:
4,BAF:5,BAE:6,BCr:7,BCt:8,BCs:9,Bz_:10,BAa:11,Bz$:12,BzQ:13,BzS:14,BzR:15,BAu:16
,BAw:17,BAv:18,Bz1:19,Bz3:20,Bz2:21,BAt:22,BAH:23,BAs:24,BAI:25,BAf:26};C.BAm={A25:
0x1,A24:0x2,A26:0x4,A29:0x8,A28:0x10,A27:0x20};C.AMB={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AMB;},_className:"Effects::EffectTimerClass"};C.
AdI={_Init:function(){C.AMB._Init.call(this,0);this.PC(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AFI={O3:A.abi(12,0
,null),AkT:A.abi(12,0,null),_Init:function(aArg){(this.O3=[]).__proto__=C.AFI.O3;(
this.AkT=[]).__proto__=C.AFI.AkT;this.__proto__=C.AFI;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ABC={B7:null,B6:null,A6u:function(AsO){var Ao=this.B6;while(
!!Ao){Ao.YR();Ao.O.T=Ao.O.T&~0x40000;Ao=Ao.Ag;}Ao=this.B6;while(!!Ao){A.pe(Ao.A1j
,Ao);Ao=Ao.Ag;}},A6t:function(AsO){var Ao=this.B6;while(!!Ao){A.pe(Ao.AJf,Ao);Ao=
Ao.Ag;}this.B6=null;this.B7=null;},Sk:function(AsO){var B;if(!this.B6)this.Me();
var Ao=this.B6;while(!!Ao){Ao.O.T=(Ao.O.T|0x40000)&~0x20000;Ao.O.Ape=null;Ao=Ao.
Ag;}Ao=this.B6;while(!!Ao){(B=Ao.AjW)?B[1].call(B[0],Ao):null;Ao.Sk();Ao=Ao.Ag;}
},Me:function(){var Ao=this.B6;while(!!Ao&&Ao.Ava())Ao=Ao.Ag;if(!Ao)A.Core.Akr.Me.
call(this);},BlM:function(FC){if(!FC)return;if(this.APD())throw new Error(BC);if(
FC.O4!==this)throw new Error(EW);if(!!FC.Ag)FC.Ag.AH=FC.AH;else this.B7=FC.AH;if(
!!FC.AH)FC.AH.Ag=FC.Ag;else this.B6=FC.Ag;FC.O4=null;FC.Ag=null;FC.AH=null;if(!!
FC.O)FC.O.Ape=null;A.pe(FC.AJf,FC);if(!this.B6)this.Al7();},A2Z:function(FC){if(
!FC)return;if(this.APD())throw new Error(He);if(!!FC.O4)throw new Error(I7);FC.AH=
this.B7;FC.Ag=null;if(!!this.B7)this.B7.Ag=FC;else this.B6=FC;this.B7=FC;FC.O4=this;
},_Init:function(aArg){A.Core.Akr._Init.call(this,aArg);this.__proto__=C.ABC;},_Mark:
function(D){var B;A.Core.Akr._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.ArU={_Init:function(){C.AS9._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.FZ.__proto__=C.ES;C.AEY.__proto__=C.ES;C.ALZ.__proto__=C.ES;
C.MY.__proto__=C.ES;C.Ar7.__proto__=C.Mg;C.Awn.__proto__=C.Mg;C.Aex.__proto__=C.
Mg;C.Ar8.__proto__=C.Mg;C.AS9.__proto__=C.Q0;C.AdM.__proto__=C.Q0;C.AFv.__proto__=
C.Q0;C.AeF.__proto__=C.Q0;C.AMB.__proto__=A.Core.Timer;C.ABC.__proto__=A.Core.Akr;
};C._ReInit=function(){var B;if((B=C.AdI._this))B._ReInit(),C.AdI._ReInit.call(B
);if((B=C.ArU._this))B._ReInit(),C.ArU._ReInit.call(B);};C.DB=function(D){var B;
if((B=C.AdI._this)&&(B._cycle!=D))B._Done(C.AdI._this=null);if((B=C.ArU._this)&&(
B._cycle!=D))B._Done(C.ArU._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */