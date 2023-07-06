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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abm)throw new Error("The unit file 'Effects.js' included twice!");index.
abm=(function(){var A=index;var C={};
var B3=[100,100];var BI="Trying to remove a fader from a task, which is actually running";
var EG="The fader doesn\'t belong to this task";var Gr="Trying to add a fader to a task, which is actually running";
var I4="The fader belongs already to a task";
C.ED={Mf:null,timer:null,Ps:null,Rm:null,Afh:null,RZ:0,AgS:0,Tw:0,Oj:0,Awx:0.001,
VM:0,DR:0,Dc:0,AJH:0.5,AZF:3,At2:3,ArD:0.5,T_:3,AP_:0,AP9:0,LV:0,OF:1000,OO:0,Ug:
0,AfN:0,Bw:false,AiC:false,APq:false,Anw:false,AHe:false,Ly:function(H){var B;if(
!this.timer)return;if(!this.AgS){if(this.APq)this.AgS=-1;else this.AgS=1;this.RZ=
this.AgS;this.Dc=this.timer.Bp;this.DR=0;this.VM=-1;}var L8;if((this.AgS>0)&&(this.
RZ>0))L8=this.BtP();else if((this.AgS<0)&&(this.RZ<0))L8=this.BtS();else if(this.
AgS>0)L8=this.BtQ();else L8=this.BtR();if(L8){this.An(false);(B=this.Ps)?B[1].call(
B[0],this):null;(B=this.Rm)?B[1].call(B[0],this):null;}},AGU:function(AJ){var B;
if(!this.Mf&&(((this.AfN===19)||(this.AfN===20))||(this.AfN===21))){var AFy=this.
AZF+1;var Brm=Math.sqrt(this.AJH);var QD=0.5;var P;this.Mf=A._NewObject(C.AC1,0);
this.Mf.Ot.Set(0,1);this.Mf.Ai$.Set(0,1);for(P=1;P<AFy;P=P+1){this.Mf.Ot.Set(P,this.
Mf.Ot.Get(P-1)*Brm);this.Mf.Ai$.Set(P,this.Mf.Ai$.Get(P-1)*this.AJH);QD=QD+this.
Mf.Ot.Get(P);}var Br_=1/QD;this.Mf.Ot.Set(0,0.5);QD=0;for(P=0;P<AFy;P=P+1){this.
Mf.Ot.Set(P,this.Mf.Ot.Get(P)*Br_);QD=QD+this.Mf.Ot.Get(P);}this.Mf.Ot.Set(AFy,this.
Mf.Ot.Get(AFy)+(1-QD));}if(this.AiC){if(AJ<0.5)AJ=AJ*2;else AJ=2-(AJ*2);}switch(
this.AfN){case 1:AJ=Math.pow(AJ,this.T_);break;case 2:{AJ=1-AJ;AJ=1-Math.pow(AJ,
this.T_);}break;case 3:{AJ=AJ*2;if(AJ<1)AJ=Math.pow(AJ,this.T_)/2;else{AJ=2-AJ;AJ=(
2-Math.pow(AJ,this.T_))*0.5;}}break;case 4:AJ=(Math.pow(2.718,this.T_*AJ)-1)/(Math.
pow(2.718,this.T_)-1);break;case 5:{AJ=1-AJ;AJ=1-((Math.pow(2.718,this.T_*AJ)-1)
/(Math.pow(2.718,this.T_)-1));}break;case 6:{AJ=AJ*2;if(AJ<1)AJ=((Math.pow(2.718
,this.T_*AJ)-1)/(Math.pow(2.718,this.T_)-1))/2;else{AJ=2-AJ;AJ=(2-((Math.pow(2.718
,this.T_*AJ)-1)/(Math.pow(2.718,this.T_)-1)))*0.5;}}break;case 7:AJ=1-Math.cos((
AJ*90)*A.kw);break;case 8:AJ=Math.sin((AJ*90)*A.kw);break;case 9:{AJ=AJ*2;if(AJ<
1){AJ=1-Math.cos((AJ*90)*A.kw);AJ=AJ*0.5;}else{AJ=2-AJ;AJ=1-Math.cos((AJ*90)*A.kw
);AJ=(2-AJ)*0.5;}}break;case 10:AJ=1-Math.sqrt(1-(AJ*AJ));break;case 11:{AJ=1-AJ;
AJ=Math.sqrt(1-(AJ*AJ));}break;case 12:{AJ=AJ*2;if(AJ<1){AJ=1-Math.sqrt(1-(AJ*AJ
));AJ=AJ*0.5;}else{AJ=2-AJ;AJ=1-Math.sqrt(1-(AJ*AJ));AJ=(2-AJ)*0.5;}}break;case 13:
AJ=((AJ*AJ)*AJ)-((AJ*this.ArD)*Math.sin((AJ*180)*A.kw));break;case 14:{AJ=1-AJ;AJ=((
AJ*AJ)*AJ)-((AJ*this.ArD)*Math.sin((AJ*180)*A.kw));AJ=1-AJ;}break;case 15:{AJ=AJ
*2;if(AJ<1){AJ=((AJ*AJ)*AJ)-((AJ*this.ArD)*Math.sin((AJ*180)*A.kw));AJ=AJ*0.5;}else{
AJ=2-AJ;AJ=((AJ*AJ)*AJ)-((AJ*this.ArD)*Math.sin((AJ*180)*A.kw));AJ=(2-AJ)*0.5;}}
break;case 16:AJ=((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At2)))*A.kw);break;case
17:{AJ=1-AJ;AJ=1-(((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At2)))*A.kw));}break;
case 18:{AJ=AJ*2;if(AJ<1){AJ=((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At2)))*A.
kw);AJ=AJ*0.5;}else{AJ=2-AJ;AJ=((AJ*AJ)*AJ)*Math.sin(((AJ*90)*(1+(4*this.At2)))*
A.kw);AJ=(2-AJ)*0.5;}}break;case 19:{var Bx=this.Mf;var P=0;var FW=0;var Kq=Bx.Ot.
Get(0);var DI=1-AJ;while(DI>Kq){P=P+1;FW=Kq;Kq=Kq+Bx.Ot.Get(P);}AJ=(DI-FW)/(Kq-FW
);if(!P)AJ=1-(AJ*AJ);else{AJ=(2*AJ)-1;AJ=Bx.Ai$.Get(P)*(1-(AJ*AJ));}}break;case 20:{
var Bx=this.Mf;var P=0;var FW=0;var Kq=Bx.Ot.Get(0);while(AJ>Kq){P=P+1;FW=Kq;Kq=
Kq+Bx.Ot.Get(P);}AJ=(AJ-FW)/(Kq-FW);if(!P)AJ=AJ*AJ;else{AJ=(2*AJ)-1;AJ=1-(Bx.Ai$.
Get(P)*(1-(AJ*AJ)));}}break;case 21:{var Bx=this.Mf;var P=0;var FW=0;var Kq=Bx.Ot.
Get(0);var KX=AJ*2;var DI=KX-1;if(KX<1)DI=-DI;while(DI>Kq){P=P+1;FW=Kq;Kq=Kq+Bx.
Ot.Get(P);}DI=(DI-FW)/(Kq-FW);if(!P)DI=DI*DI;else{DI=(2*DI)-1;DI=1-(Bx.Ai$.Get(P
)*(1-(DI*DI)));}if(KX<1)AJ=0.5*(1-DI);else AJ=0.5*(1+DI);}break;default:if(this.
Anw){var KX=AJ;var AwT=1-KX;AJ=((AwT*KX)*(this.Oj+1))+(KX*KX);}else if(this.AHe){
var KX=AJ;var AwT=1-KX;var A7$=KX*KX;var Bsm=AwT*AwT;AJ=(((Bsm*KX)*(this.Oj+1))+((
AwT*A7$)*(this.Tw+2)))+(A7$*KX);}}this.ArH(AJ);(B=this.Afh)?B[1].call(B[0],this):
null;},BtS:function(){var Ap=(this.timer.Bp-this.Dc)|0;if(Ap<0)Ap=-Ap;var KU=this.
Ug;var NI=this.Ug+this.OF;var Gw=this.OO+this.OF;var L8=false;var HI=this.VM;if(
!this.DR&&(Ap>=NI)){this.DR=1;Ap=Ap-NI;this.Dc=this.Dc+NI;}if((this.DR>0)&&(Ap>=
Gw)){var HH=(Ap/Gw)|0;this.DR=this.DR+HH;Ap=Ap-(HH*Gw);this.Dc=this.Dc+(HH*Gw);}
if((this.DR>2)&&!this.LV)this.DR=1;if(this.DR>0)KU=this.OO;if((this.DR>=this.LV)&&(
this.LV>0)){L8=true;HI=0;}else if(Ap>=KU)HI=1-((Ap-KU)*this.Awx);else if(HI>=0)HI=
0;if(HI!==this.VM){this.VM=HI;this.AGU(HI);}return L8;},BtR:function(){var Ap=(this.
Dc-this.timer.Bp)|0;var KU=this.Ug;var NI=this.Ug+this.OF;var Gw=this.OO+this.OF;
var L8=false;var HI=this.VM;if((this.DR>1)&&(Ap<0)){var HH=(((-Ap+Gw)-1)/Gw)|0;if((
this.DR-HH)<=0)HH=this.DR-1;this.DR=this.DR-HH;Ap=Ap+(HH*Gw);this.Dc=this.Dc+(HH
*Gw);}if(((this.DR===1)&&(Ap<0))&&(this.LV>0)){this.DR=0;Ap=Ap+NI;this.Dc=this.Dc+
NI;}if(((this.DR===1)&&(Ap<0))&&!this.LV){var HH=(((-Ap+Gw)-1)/Gw)|0;Ap=Ap+(HH*Gw
);this.Dc=this.Dc+(HH*Gw);}if(this.DR>0)KU=this.OO;if(Ap<0){L8=true;HI=1;}else if(
Ap>=KU)HI=1-((Ap-KU)*this.Awx);else if(HI>=0)HI=1;if(HI!==this.VM){this.VM=HI;this.
AGU(HI);}return L8;},BtQ:function(){var Ap=(this.Dc-this.timer.Bp)|0;var KU=this.
Ug;var NI=this.Ug+this.OF;var Gw=this.OO+this.OF;var L8=false;var HI=this.VM;if((
this.DR>1)&&(Ap<0)){var HH=(((-Ap+Gw)-1)/Gw)|0;if((this.DR-HH)<=0)HH=this.DR-1;this.
DR=this.DR-HH;Ap=Ap+(HH*Gw);this.Dc=this.Dc+(HH*Gw);}if(((this.DR===1)&&(Ap<0))&&(
this.LV>0)){this.DR=0;Ap=Ap+NI;this.Dc=this.Dc+NI;}if(((this.DR===1)&&(Ap<0))&&!
this.LV){var HH=(((-Ap+Gw)-1)/Gw)|0;Ap=Ap+(HH*Gw);this.Dc=this.Dc+(HH*Gw);}if(this.
DR>0)KU=this.OO;if(Ap<0){L8=true;HI=0;}else if(Ap>=KU)HI=(Ap-KU)*this.Awx;else if(
HI>=0)HI=0;if(HI!==this.VM){this.VM=HI;this.AGU(HI);}return L8;},BtP:function(){
var Ap=(this.timer.Bp-this.Dc)|0;if(Ap<0)Ap=-Ap;var KU=this.Ug;var NI=this.Ug+this.
OF;var Gw=this.OO+this.OF;var L8=false;var HI=this.VM;if(!this.DR&&(Ap>=NI)){this.
DR=1;Ap=Ap-NI;this.Dc=this.Dc+NI;}if((this.DR>0)&&(Ap>=Gw)){var HH=(Ap/Gw)|0;this.
DR=this.DR+HH;Ap=Ap-(HH*Gw);this.Dc=this.Dc+(HH*Gw);}if((this.DR>2)&&!this.LV)this.
DR=1;if(this.DR>0)KU=this.OO;if((this.DR>=this.LV)&&(this.LV>0)){L8=true;HI=1;}else
if(Ap>=KU)HI=(Ap-KU)*this.Awx;else if(HI>=0)HI=1;if(HI!==this.VM){this.VM=HI;this.
AGU(HI);}return L8;},AcX:function(E){if(this.APq===E)return;this.APq=E;if(!this.
Bw||!this.AgS)return;if(E)this.RZ=-1;else this.RZ=1;this.Dc=(this.timer.Asi()*2)-
this.Dc;},ABc:function(E){if(E<0)E=0;if(E>1)E=1;this.AJH=E;},AA4:function(E){if(
E<1)E=1;if(E>10)E=10;this.AZF=E;this.Mf=null;},ABC:function(E){if(E<1)E=1;if(E>10
)E=10;this.At2=E;},AA0:function(E){if(E<0)E=0;if(E>10)E=10;this.ArD=E;},Atr:function(
E){if(E<1)E=1;if(E>100)E=100;this.T_=E;},ABQ:function(E){if(this.AP_===E)return;
this.AP_=E;if(this.AfN===26){this.Tw=E;this.Anw=(this.Oj===this.Tw)&&!!this.Oj;this.
AHe=!this.Anw&&(this.Oj!==this.Tw);}},ABP:function(E){if(this.AP9===E)return;this.
AP9=E;if(this.AfN===26){this.Oj=E;this.Anw=(this.Oj===this.Tw)&&!!this.Oj;this.AHe=
!this.Anw&&(this.Oj!==this.Tw);}},UP:function(E){if(this.AfN===E)return;this.AfN=
E;this.Mf=null;switch(E){case 24:{this.Oj=-1.1;this.Tw=1.1;}break;case 22:{this.
Oj=-1;this.Tw=-2;}break;case 23:{this.Oj=2;this.Tw=1;}break;case 25:{this.Oj=1.1;
this.Tw=-1.1;}break;case 0:{this.Oj=0;this.Tw=0;}break;default:{this.Oj=this.AP9;
this.Tw=this.AP_;}}this.Anw=(this.Oj===this.Tw)&&!!this.Oj;this.AHe=!this.Anw&&(
this.Oj!==this.Tw);},IF:function(E){if(E<0)E=0;this.LV=E;},FI:function(E){if(E<15
)E=15;this.OF=E;this.Awx=1/E;},Z6:function(E){if(E<0)E=0;this.OO=E;},Aie:function(
E){if(E<0)E=0;this.Ug=E;},An:function(E){if(this.Bw===E)return;this.Bw=E;if(!E&&
!!this.timer){A.zl([this,this.Ly],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(C.AeN);A.y_([this,this.Ly],this.timer,0);this.AgS=0;A.ow([this,
this.Ly],this);}},ArH:function(Ym){},Aum:function(H){this.An(false);},ACP:function(
H){if(this.Bw)this.An(false);this.An(true);},_Init:function(aArg){this.__proto__=
C.ED;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.Mf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ps)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Rm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Afh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.FC={Q:null,AY:0,BW:255,Ch:0,ArH:function(Ym){var F;this.AY=this.Ch+(Math.round((
this.BW-this.Ch)*Ym)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AY));},_Init:function(
aArg){C.ED._Init.call(this,aArg);this.__proto__=C.FC;},_Mark:function(D){var B;C.
ED._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Effects::Int32Effect"};C.ACa={Q:null,AY:A.vw,BW:B3,Ch:A.vw,ArH:function(
Ym){var F;var Fy=this.Ch[0];var C6=this.Ch[1];Fy=Fy+(Math.round((this.BW[0]-Fy)*
Ym)|0);C6=C6+(Math.round((this.BW[1]-C6)*Ym)|0);this.AY=[Fy,C6];if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AY));},_Init:function(aArg){C.ED._Init.call(this,aArg);this.
__proto__=C.ACa;},_Mark:function(D){var B;C.ED._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::PointEffect"};C.AI2={
Q:null,AY:0,BW:0xFFFFFFFF,Ch:0,ArH:function(Ym){var F;var Or=this.Ch&0xFF;var Yz=(
this.Ch>>8)&0xFF;var Ajd=(this.Ch>>16)&0xFF;var Ai_=(this.Ch>>24)&0xFF;Or=Or+((((
this.BW&0xFF)-Or)*Ym)|0);Yz=Yz+(((((this.BW>>8)&0xFF)-Yz)*Ym)|0);Ajd=Ajd+(((((this.
BW>>16)&0xFF)-Ajd)*Ym)|0);Ai_=Ai_+(((((this.BW>>24)&0xFF)-Ai_)*Ym)|0);if(Or<0)Or=
0;if(Or>255)Or=255;if(Yz<0)Yz=0;if(Yz>255)Yz=255;if(Ajd<0)Ajd=0;if(Ajd>255)Ajd=255;
if(Ai_<0)Ai_=0;if(Ai_>255)Ai_=255;this.AY=(Or&0xFF)|((Yz&0xFF)<<8)|((Ajd&0xFF)<<
16)|((Ai_&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AY));},_Init:function(
aArg){C.ED._Init.call(this,aArg);this.__proto__=C.AI2;},_Mark:function(D){var B;
C.ED._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Effects::ColorEffect"};C.Ml={AY:0,BW:1,Ch:0,ArH:function(Ym){this.
AY=this.Ch+((this.BW-this.Ch)*Ym);},_Init:function(aArg){C.ED._Init.call(this,aArg
);this.__proto__=C.Ml;},_className:"Effects::FloatEffect"};C.Y5={timer:null,Q:null
,DR:0,Dc:0,OF:1000,OO:1000,Ug:0,Bw:false,Ch:false,BW:true,Ly:function(H){var F;if(
!this.timer)return;if(this.DR<0){this.Dc=this.timer.Bp;this.DR=0;}var Ap=(this.timer.
Bp-this.Dc)|0;var NI=this.Ug+this.OF;var Gw=this.OO+this.OF;var KU=this.Ug;var I7=
this.DR;if(!I7&&(Ap>=NI)){I7=1;Ap=Ap-NI;}if((I7>0)&&(Ap>=Gw)){var HH=(Ap/Gw)|0;Ap=
Ap-(HH*Gw);I7=I7+HH;}if(I7>2)I7=1;if(I7!==this.DR){this.Dc=this.timer.Bp-(((B=Ap
)<0)?B+0x100000000:B);this.DR=I7;}if(I7>0)KU=this.OO;if(!!this.Q){if(Ap>=KU)(F=this.
Q,F[2].call(F[0],this.Ch));if((Ap<KU)&&(I7>0))(F=this.Q,F[2].call(F[0],this.BW));
}},FI:function(E){if(E<100)E=100;this.OF=E;},Z6:function(E){if(E<0)E=0;this.OO=E;
},Aie:function(E){if(E<0)E=0;this.Ug=E;},An:function(E){if(this.Bw===E)return;this.
Bw=E;if(!E&&!!this.timer){A.zl([this,this.Ly],this.timer,0);this.timer=null;}if(
E){this.timer=A._GetAutoObject(C.AeN);A.y_([this,this.Ly],this.timer,0);this.DR=-
1;}},_Init:function(aArg){this.__proto__=C.Y5;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.timer)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.LK={Ou:null,AG:null,Af:null,Aa:null,O:null
,AGw:null,AXo:null,Ah9:null,C_:true,Bw:true,Aaw:true,Ag4:false,Aha:true,XM:true,
P7:true,LF:function(){if(!!this.Ou)this.Ou.LF();},AsL:function(){return true;},Xt:
function(){},Ru:function(){this.LF();},_Init:function(aArg){this.__proto__=C.LK;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ou)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AGw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AXo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah9)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.ApS={Apl:A.vw
,L9:false,AsL:function(){return this.L9;},Xt:function(){if(!this.C_&&!!this.O.Aa
)this.O.W(false);if((!this.C_&&this.P7)&&!!this.O.Aa)this.O.Aa.HW(this.O);if(!this.
Bw)this.O.An(false);},Ru:function(){if(this.Bw)this.O.An(true);if((this.C_||this.
Ag4)&&!this.O.Aa){this.O.W(false);this.Aa.J(this.O,0);}if(this.C_&&this.XM)this.
O.Aa.SZ(this.O);if(this.C_&&this.Aha)this.O.Aa.A8(this.O);if(this.C_&&!this.Aaw)
this.O.G(A.aaM(this.O.M,this.Apl));if(this.C_){this.O.DC(255);this.O.W(true);}if(
!this.C_&&(this.Aa.A6===this.O))this.Aa.A8(null);this.L9=true;this.LF();},_Init:
function(aArg){C.LK._Init.call(this,aArg);this.__proto__=C.ApS;},_className:"Effects::VisibilityFader"
};C.AtY={ED:null,L9:false,Anz:false,AsL:function(){return this.L9;},Xt:function(
){if(this.C_)this.O.DC(this.ED.BW);if(!this.C_&&!this.O.Gm)this.O.W(false);if((!
this.C_&&this.P7)&&!!this.O.Aa)this.O.Aa.HW(this.O);if(!this.Bw)this.O.An(false);
},Ru:function(){var B;if(this.Aaw){if(this.O.Fe()&&!!this.O.Aa)this.ED.Ch=this.O.
Gm;else this.ED.Ch=0;}var AwA=((!this.O.Aa||!this.O.Gm)||!this.O.Fe())||(((B=A.kz(
this.O.M,[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AwB=((
!this.C_&&((!this.O.Aa||!this.O.Fe())||this.P7))||!this.ED.BW)||(((B=A.kz(this.O.
M,[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AwA&&AwB){
this.ED.Ch=0;this.ED.BW=0;}this.Anz=this.O.ANL();if(this.Bw)this.O.An(true);if((
this.C_||this.Ag4)&&!this.O.Aa){this.O.W(false);this.Aa.J(this.O,0);}if(this.C_&&
this.XM)this.O.Aa.SZ(this.O);if(this.C_&&this.Aha)this.O.Aa.A8(this.O);if(!this.
C_&&(this.Aa.A6===this.O))this.Aa.A8(null);if(this.C_&&!this.O.Fe()){this.O.DC(this.
ED.Ch);this.O.W(true);}if(!this.C_&&((!this.O.Aa||!this.O.Fe())||!this.O.Gm)){this.
L9=true;this.LF();return;}if(!this.C_&&(this.ED.Ch===this.ED.BW))this.O.DC(this.
ED.Ch);if(this.O.Gm===this.ED.BW){this.L9=true;this.LF();return;}if(this.ED.Ch===
this.ED.BW){this.L9=true;this.LF();return;}if(!this.ED.LV)this.ED.IF(1);this.ED.
Q=[B=this.O,B.As8,B.AUJ];this.ED.AcX(false);this.ED.AiC=false;this.ED.Rm=[this,this.
Agy];this.ED.Afh=null;this.ED.An(true);},Agy:function(H){this.L9=true;this.LF();
},_Init:function(aArg){C.LK._Init.call(this,aArg);C.FC._Init.call(this.ED={I:this
},0);this.__proto__=C.AtY;},_Done:function(){this.__proto__=C.LK;this.ED._Done();
C.LK._Done.call(this);},_ReInit:function(){C.LK._ReInit.call(this);this.ED._ReInit(
);},_Mark:function(D){var B;C.LK._Mark.call(this,D);if((B=this.ED)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.Ac2={B8:null,DP:null,AbQ:false
,L9:false,Anz:false,AsL:function(){return this.L9;},Xt:function(){if(this.C_){this.
O.DC(this.B8.BW);this.O.G(A.aaM(this.O.M,this.DP.BW));}if(!this.C_&&!this.O.Gm)this.
O.W(false);if((!this.C_&&this.P7)&&!!this.O.Aa)this.O.Aa.HW(this.O);if(this.AbQ)
this.O.AoP(this.Anz);if(!this.Bw)this.O.An(false);},Ru:function(){var B;if(this.
Aaw){if(this.O.Fe()&&!!this.O.Aa)this.B8.Ch=this.O.Gm;else this.B8.Ch=0;this.DP.
Ch=this.O.M.slice(0,2);}var AwA=((!this.O.Aa||!this.O.Gm)||!this.O.Fe())||(((B=A.
kz(this.O.M,[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
AwB=((!this.C_&&((!this.O.Aa||!this.O.Fe())||this.P7))||!this.B8.BW)||(((B=A.kz(
A.aam([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.DP.BW),[0,0,(B=this.Aa.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AwA&&AwB){this.B8.Ch=0;this.B8.BW=0;this.
DP.Ch=this.DP.BW;}this.Anz=this.O.ANL();if(this.Bw)this.O.An(true);if((this.C_||
this.Ag4)&&!this.O.Aa){this.O.W(false);this.Aa.J(this.O,0);}if(this.C_&&this.XM)
this.O.Aa.SZ(this.O);if(this.C_&&this.Aha)this.O.Aa.A8(this.O);if(!this.C_&&(this.
Aa.A6===this.O))this.Aa.A8(null);if(this.C_&&!this.O.Fe()){this.O.G(A.aaM(this.O.
M,this.DP.Ch));this.O.DC(this.B8.Ch);this.O.W(true);}if(!this.C_&&((!this.O.Aa||
!this.O.Fe())||!this.O.Gm)){this.L9=true;this.LF();return;}if(!this.C_&&A.z8(this.
DP.Ch,this.DP.BW))this.O.G(A.aaM(this.O.M,this.DP.Ch));if(!this.C_&&(this.B8.Ch===
this.B8.BW))this.O.DC(this.B8.Ch);if((this.O.Gm===this.B8.BW)&&A.z8(this.O.M.slice(
0,2),this.DP.BW)){this.L9=true;this.LF();return;}if((this.B8.Ch===this.B8.BW)&&A.
z8(this.DP.Ch,this.DP.BW)){this.L9=true;this.LF();return;}if(!this.B8.LV)this.B8.
IF(1);if(!this.DP.LV)this.DP.IF(1);if(this.AbQ)this.O.AoP(true);this.DP.Q=null;this.
DP.AcX(false);this.DP.AiC=false;this.DP.Rm=[this,this.Agy];this.DP.Afh=[this,this.
Aw1];this.B8.Q=[B=this.O,B.As8,B.AUJ];this.B8.AcX(false);this.B8.AiC=false;this.
B8.Rm=[this,this.Agy];this.B8.Afh=null;this.DP.An(!A.z8(this.DP.Ch,this.DP.BW));
this.B8.An(this.B8.Ch!==this.B8.BW);},Agy:function(H){this.L9=!this.B8.Bw&&!this.
DP.Bw;this.LF();},Aw1:function(H){this.O.G(A.aaM(this.O.M,this.DP.AY));},_Init:function(
aArg){C.LK._Init.call(this,aArg);C.FC._Init.call(this.B8={I:this},0);C.ACa._Init.
call(this.DP={I:this},0);this.__proto__=C.Ac2;},_Done:function(){this.__proto__=
C.LK;this.B8._Done();this.DP._Done();C.LK._Done.call(this);},_ReInit:function(){
C.LK._ReInit.call(this);this.B8._ReInit();this.DP._ReInit();},_Mark:function(D){
var B;C.LK._Mark.call(this,D);if((B=this.B8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.DP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
ApT={Abv:null,B8:null,Gq:null,UA:null,Fh:null,SW:A.vw,Aiq:A.vw,L9:false,Anz:false
,AsL:function(){return this.L9;},Xt:function(){if(this.C_){this.O.DC(this.B8.BW);
this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.SW));this.O.W(true);}if(!this.
C_&&!this.B8.BW){this.O.DC(0);this.O.W(false);}if(((!this.C_&&(this.B8.BW>0))&&!
!this.O.Aa)&&!this.P7){this.O.DC(this.B8.BW);this.O.G(A.aam(A.aal(this.O.M,A.zT(
this.O.M)),this.SW));this.O.W(true);}if((!this.C_&&this.P7)&&!!this.O.Aa)this.O.
Aa.HW(this.O);this.O.AoP(this.Anz);if(!!this.Abv)this.Aa.HW(this.Abv);if(!this.Bw
)this.O.An(false);},Ru:function(){var B;if(this.Aaw){if(this.O.Fe()&&!!this.O.Aa
)this.B8.Ch=this.O.Gm;else this.B8.Ch=0;this.Aiq=A.zT(this.O.M);}var AwA=((!this.
O.Aa||!this.O.Gm)||!this.O.Fe())||(((B=A.kz(this.O.M,[0,0,(B=this.Aa.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AwB=((!this.C_&&((!this.O.Aa||!this.O.
Fe())||this.P7))||!this.B8.BW)||(((B=A.kz(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.
SW),[0,0,(B=this.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AwA&&AwB
){this.B8.Ch=0;this.B8.BW=0;this.Aiq=this.SW;this.UA.A1x();}this.Anz=this.O.ANL(
);if(this.Bw)this.O.An(true);if((this.C_||this.Ag4)&&!this.O.Aa){this.O.W(false);
this.Aa.J(this.O,0);}if(this.C_&&this.XM)this.O.Aa.SZ(this.O);if(this.C_&&this.Aha
)this.O.Aa.A8(this.O);if(!this.C_&&(this.Aa.A6===this.O))this.Aa.A8(null);if(this.
C_&&!this.O.Fe())this.O.DC(this.B8.Ch);if((!this.C_&&A.z8(this.Aiq,this.SW))&&this.
UA.Az9())this.O.G(A.aam(A.aal(this.O.M,A.zT(this.O.M)),this.Aiq));if(!this.C_&&(
this.B8.Ch===this.B8.BW))this.O.DC(this.B8.Ch);if(!this.C_&&((!this.O.Aa||!this.
O.Fe())||!this.O.Gm)){this.L9=true;this.LF();return;}if(((this.C_&&(this.O.Gm===
this.B8.BW))&&A.z8(A.zT(this.O.M),this.SW))&&this.O.Fe()){this.L9=true;this.LF();
return;}if(((!this.C_&&(this.O.Gm===this.B8.BW))&&A.z8(A.zT(this.O.M),this.SW))&&
this.UA.Az9()){this.L9=true;this.LF();return;}if(((this.B8.Ch===this.B8.BW)&&A.z8(
this.Aiq,this.SW))&&this.UA.Az9()){this.L9=true;this.LF();return;}this.O.AoP(true
);this.O.W(false);this.Abv=A._NewObject(A.abh.AQt,0);this.Abv.BfF(this.O);this.Abv.
DC(this.B8.Ch);this.Abv.Bgt(A.zT([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.O.Aa.
AHS(this.Abv,this.O);if(!this.B8.LV)this.B8.IF(1);if(!this.Gq.LV)this.Gq.IF(1);this.
Gq.AcX(false);this.Gq.AiC=false;this.Gq.Rm=[this,this.Agy];this.Gq.Afh=[this,this.
Aw1];if(this.C_){this.Gq.Ch=0;this.Gq.BW=1;}else{this.Gq.Ch=1;this.Gq.BW=0;}this.
B8.Q=[B=this.Abv,B.As8,B.DC];this.B8.AcX(false);this.B8.AiC=false;this.B8.Rm=[this
,this.Agy];this.B8.Afh=null;this.Gq.An(!A.z8(this.Aiq,this.SW)||!this.UA.Az9());
this.B8.An(this.B8.Ch!==this.B8.BW);},Agy:function(H){this.L9=!this.B8.Bw&&!this.
Gq.Bw;this.LF();},Aw1:function(H){var B;var AxM=A.aaj(this.SW,this.Aiq);if(!this.
C_)AxM=[-AxM[0],-AxM[1]];this.Fh.A1x();this.Fh.AeQ=this.UA.AeQ;this.Fh.BiH(AxM[0
],AxM[1],0);this.Fh.Bcd(this.UA,this.Fh,this.Gq.AY);if(this.C_)this.Abv.ADd(this.
Aiq,this.Fh);else this.Abv.ADd(this.SW,this.Fh);},_Init:function(aArg){C.LK._Init.
call(this,aArg);C.FC._Init.call(this.B8={I:this},0);C.Ml._Init.call(this.Gq={I:this
},0);A.Graphics.AuC._Init.call(this.UA={I:this},0);A.Graphics.AuC._Init.call(this.
Fh={I:this},0);this.__proto__=C.ApT;},_Done:function(){this.__proto__=C.LK;this.
B8._Done();this.Gq._Done();this.UA._Done();this.Fh._Done();C.LK._Done.call(this);
},_ReInit:function(){C.LK._ReInit.call(this);this.B8._ReInit();this.Gq._ReInit();
this.UA._ReInit();this.Fh._ReInit();},_Mark:function(D){var B;C.LK._Mark.call(this
,D);if((B=this.Abv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Gq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Effects::WarpFader"};C.Qd={QZ:function(){return null;},QY:function(){return null;
},AbW:function(){return this.QZ();},AbV:function(){return this.QY();},_Init:function(
aArg){this.__proto__=C.Qd;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.APM={QZ:function(){var Ak=A._NewObject(C.ApS,0);Ak.C_=true;Ak.Bw=true;Ak.Aha=false;
Ak.XM=true;Ak.Aaw=false;Ak.Ah9=[this,this.Am8];return Ak;},QY:function(){var Ak=
A._NewObject(C.ApS,0);Ak.C_=false;Ak.Bw=false;Ak.P7=true;return Ak;},AbW:function(
){var Ak=C.Qd.AbW.call(this);Ak.XM=false;Ak.Bw=true;return Ak;},AbV:function(){var
Ak=A._NewObject(C.ApS,0);Ak.C_=false;Ak.Bw=true;Ak.Ag4=true;Ak.P7=false;return Ak;
},Am8:function(H){var B;var Ak=(C.ApS.isPrototypeOf(H)?H:null);var Ba=[0,0,(B=Ak.
Aa.M)[2]-B[0],B[3]-B[1]];var CT=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(
0,2);pos=[(Ba[0]+(((Ba[2]-Ba[0])/2)|0))-((CT[0]/2)|0),pos[1]];pos=[pos[0],(Ba[1]+(((
Ba[3]-Ba[1])/2)|0))-((CT[1]/2)|0)];Ak.Apl=pos;},_Init:function(aArg){C.Qd._Init.
call(this,aArg);this.__proto__=C.APM;},_className:"Effects::ShowHideTransition"};
C.Ab6={AyY:500,QZ:function(){var Ak=A._NewObject(C.Ac2,0);Ak.C_=true;Ak.Bw=true;
Ak.Aha=false;Ak.XM=true;Ak.Aaw=true;Ak.AbQ=false;Ak.Ah9=[this,this.Am8];Ak.B8.FI(
this.AyY);Ak.B8.Ch=0;Ak.B8.BW=255;Ak.DP.FI(this.AyY);Ak.DP.UP(23);return Ak;},QY:
function(){var Ak=A._NewObject(C.AtY,0);Ak.C_=false;Ak.Bw=false;Ak.P7=true;Ak.Aaw=
true;Ak.ED.Ch=255;Ak.ED.BW=0;Ak.ED.FI(this.AyY);return Ak;},AbW:function(){var Ak=
C.Qd.AbW.call(this);Ak.XM=false;Ak.Bw=true;return Ak;},AbV:function(){var Ak=C.Qd.
AbV.call(this);Ak.Ag4=true;Ak.P7=false;Ak.Bw=true;return Ak;},Am8:function(H){var
B;var Ak=(C.Ac2.isPrototypeOf(H)?H:null);var Ba=[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[
1]];var CT=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(0,2);pos=[(Ba[0]+(((Ba[
2]-Ba[0])/2)|0))-((CT[0]/2)|0),pos[1]];pos=[pos[0],(Ba[1]+(((Ba[3]-Ba[1])/2)|0))-((
CT[1]/2)|0)];Ak.DP.BW=pos;if(((!Ak.O.Aa||!Ak.O.Fe())||!Ak.O.Gm)||(((B=A.kz(Ak.O.
M,[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ak.O.G(A.aaM(Ak.
O.M,pos));},_Init:function(aArg){C.Qd._Init.call(this,aArg);this.__proto__=C.Ab6;
},_className:"Effects::FadeInOutTransition"};C.ACM={JF:0x12,ArV:0,AbQ:false,QZ:function(
){var Ak=A._NewObject(C.Ac2,0);Ak.C_=true;Ak.Bw=true;Ak.Aha=false;Ak.XM=true;Ak.
Aaw=true;Ak.AbQ=this.AbQ;Ak.Ah9=[this,this.Am8];Ak.B8.FI(500);Ak.B8.Aie(0);Ak.B8.
Ch=0;Ak.B8.BW=255;Ak.DP.FI(500);Ak.DP.UP(23);Ak.DP.ABP(0);Ak.DP.ABQ(0);Ak.DP.Atr(
3);Ak.DP.AA0(0.5);Ak.DP.ABC(3);Ak.DP.AA4(3);Ak.DP.ABc(0.5);return Ak;},QY:function(
){var Ak=A._NewObject(C.Ac2,0);Ak.C_=false;Ak.Bw=false;Ak.P7=true;Ak.Aaw=true;Ak.
AbQ=this.AbQ;Ak.Ah9=[this,this.AXw];Ak.B8.Ch=255;Ak.B8.BW=0;Ak.B8.FI(500);Ak.B8.
Aie(0);Ak.DP.FI(500);Ak.DP.UP(23);Ak.DP.ABP(0);Ak.DP.ABQ(0);Ak.DP.Atr(3);Ak.DP.AA0(
0.5);Ak.DP.ABC(3);Ak.DP.AA4(3);Ak.DP.ABc(0.5);return Ak;},AbW:function(){var Ak=
C.Qd.AbW.call(this);Ak.XM=false;Ak.Bw=true;return Ak;},AbV:function(){var Ak=C.Qd.
AbV.call(this);Ak.Ag4=true;Ak.P7=false;Ak.Bw=true;return Ak;},Am8:function(H){var
B;var Ak=(C.Ac2.isPrototypeOf(H)?H:null);var Bm=this.JF;var Ba=[0,0,(B=Ak.Aa.M)[
2]-B[0],B[3]-B[1]];var CT=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(0,2);if(((
Bm&0x4)===0x4))pos=[Ba[2]-CT[0],pos[1]];else if(((Bm&0x2)===0x2))pos=[(Ba[0]+(((
Ba[2]-Ba[0])/2)|0))-((CT[0]/2)|0),pos[1]];if(((Bm&0x20)===0x20))pos=[pos[0],Ba[3
]-CT[1]];else if(((Bm&0x10)===0x10))pos=[pos[0],(Ba[1]+(((Ba[3]-Ba[1])/2)|0))-((
CT[1]/2)|0)];Ak.DP.BW=pos;if(((!Ak.O.Aa||!Ak.O.Fe())||!Ak.O.Gm)||(((B=A.kz(Ak.O.
M,[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var G4=[(B=Ak.
Aa.M)[2]-B[0],B[3]-B[1]];switch(this.ArV){case 5:pos=[pos[0],-CT[1]];break;case 3:{
pos=[pos[0],-CT[1]];pos=[G4[0],pos[1]];}break;case 8:pos=[-CT[0],-CT[1]];break;case
2:pos=[G4[0],pos[1]];break;case 7:pos=[-CT[0],pos[1]];break;case 4:pos=[pos[0],G4[
1]];break;case 1:{pos=[pos[0],G4[1]];pos=[G4[0],pos[1]];}break;case 6:{pos=[pos[
0],G4[1]];pos=[-CT[0],pos[1]];}break;default:;}Ak.O.G(A.aaM(Ak.O.M,pos));}},AXw:
function(H){var B;var Ak=(C.Ac2.isPrototypeOf(H)?H:null);var pos=Ak.O.M.slice(0,
2);var CT=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var G4=[(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]];
switch(this.ArV){case 5:pos=[pos[0],G4[1]];break;case 3:{pos=[pos[0],G4[1]];pos=[-
CT[0],pos[1]];}break;case 8:{pos=[pos[0],G4[1]];pos=[G4[0],pos[1]];}break;case 2:
pos=[-CT[0],pos[1]];break;case 7:pos=[G4[0],pos[1]];break;case 4:pos=[pos[0],-CT[
1]];break;case 1:pos=[-CT[0],-CT[1]];break;case 6:{pos=[pos[0],-CT[1]];pos=[G4[0
],pos[1]];}break;default:;}Ak.DP.BW=pos;},_Init:function(aArg){C.Qd._Init.call(this
,aArg);this.__proto__=C.ACM;},_className:"Effects::SlideTransition"};C.AfB={QZ:function(
){var Ak=A._NewObject(C.ApT,0);Ak.C_=true;Ak.Bw=true;Ak.Aha=false;Ak.XM=true;Ak.
Aaw=true;Ak.Ah9=[this,this.Am8];Ak.B8.FI(500);Ak.B8.Aie(0);Ak.B8.Ch=0;Ak.B8.BW=255;
Ak.Gq.FI(500);Ak.Gq.UP(23);Ak.Gq.ABP(0);Ak.Gq.ABQ(0);Ak.Gq.Atr(3);Ak.Gq.AA0(0.5);
Ak.Gq.ABC(3);Ak.Gq.AA4(3);Ak.Gq.ABc(0.5);Ak.UA.Ac$(0.5,0.5,1);return Ak;},QY:function(
){var Ak=A._NewObject(C.ApT,0);Ak.C_=false;Ak.Bw=false;Ak.P7=true;Ak.Aaw=true;Ak.
Ah9=[this,this.AXw];Ak.B8.Ch=255;Ak.B8.BW=0;Ak.B8.FI(500);Ak.B8.Aie(0);Ak.Gq.FI(
500);Ak.Gq.UP(23);Ak.Gq.ABP(0);Ak.Gq.ABQ(0);Ak.Gq.Atr(3);Ak.Gq.AA0(0.5);Ak.Gq.ABC(
3);Ak.Gq.AA4(3);Ak.Gq.ABc(0.5);Ak.UA.Ac$(0.5,0.5,1);return Ak;},AbW:function(){var
Ak=C.Qd.AbW.call(this);Ak.XM=false;Ak.Bw=true;return Ak;},AbV:function(){var Ak=
C.Qd.AbV.call(this);Ak.Ag4=true;Ak.P7=false;Ak.Bw=true;return Ak;},Am8:function(
H){var B;var Ak=(C.ApT.isPrototypeOf(H)?H:null);var Ba=[0,0,(B=Ak.Aa.M)[2]-B[0],
B[3]-B[1]];var CT=[(B=Ak.O.M)[2]-B[0],B[3]-B[1]];var pos=Ba.slice(0,2);pos=[(Ba[
0]+(((Ba[2]-Ba[0])/2)|0))-((CT[0]/2)|0),pos[1]];pos=[pos[0],(Ba[1]+(((Ba[3]-Ba[1
])/2)|0))-((CT[1]/2)|0)];Ak.SW=A.aak(pos,[(CT[0]/2)|0,(CT[1]/2)|0]);if(((!Ak.O.Aa||
!Ak.O.Fe())||!Ak.O.Gm)||(((B=A.kz(Ak.O.M,[0,0,(B=Ak.Aa.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ak.O.G(A.aaM(Ak.O.M,A.aaj(Ak.SW,A.zT([0,0,(B=Ak.O.M)[2]-
B[0],B[3]-B[1]]))));},AXw:function(H){var Ak=(C.ApT.isPrototypeOf(H)?H:null);Ak.
SW=A.zT(Ak.O.M);},_Init:function(aArg){C.Qd._Init.call(this,aArg);this.__proto__=
C.AfB;},_className:"Effects::ScaleTransition"};C.AfN={Bwn:0,Bw3:1,Bw5:2,Bw4:3,BvQ:
4,BvS:5,BvR:6,Bxw:7,Bxy:8,Bxx:9,Bvn:10,Bvp:11,Bvo:12,Bu5:13,Bu7:14,Bu6:15,BvH:16
,BvJ:17,BvI:18,Bve:19,Bvg:20,Bvf:21,BvG:22,BvU:23,BvF:24,BvV:25,Bvu:26};C.BvA={AY1:
0x1,AY0:0x2,AY2:0x4,AY5:0x8,AY4:0x10,AY3:0x20};C.AJG={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AJG;},_className:"Effects::EffectTimerClass"};C.
AeN={_Init:function(){C.AJG._Init.call(this,0);this.P3(15);this.An(true);},_variants:
function(){return this;},_this:null};C.AC1={Ot:A.aan(12,0,null),Ai$:A.aan(12,0,null
),_Init:function(aArg){(this.Ot=[]).__proto__=C.AC1.Ot;(this.Ai$=[]).__proto__=C.
AC1.Ai$;this.__proto__=C.AC1;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};
C.Ay6={BT:null,BY:null,A14:function(Aqo){var Ak=this.BY;while(!!Ak){Ak.Xt();Ak.O.
S=Ak.O.S&~0x40000;Ak=Ak.Af;}Ak=this.BY;while(!!Ak){A.ow(Ak.AXo,Ak);Ak=Ak.Af;}},A13:
function(Aqo){var Ak=this.BY;while(!!Ak){A.ow(Ak.AGw,Ak);Ak=Ak.Af;}this.BY=null;
this.BT=null;},Ru:function(Aqo){var B;if(!this.BY)this.LF();var Ak=this.BY;while(
!!Ak){Ak.O.S=(Ak.O.S|0x40000)&~0x20000;Ak.O.Anc=null;Ak=Ak.Af;}Ak=this.BY;while(
!!Ak){(B=Ak.Ah9)?B[1].call(B[0],Ak):null;Ak.Ru();Ak=Ak.Af;}},LF:function(){var Ak=
this.BY;while(!!Ak&&Ak.AsL())Ak=Ak.Af;if(!Ak)A.Core.AiD.LF.call(this);},Bhk:function(
Fg){if(!Fg)return;if(this.AME())throw new Error(BI);if(Fg.Ou!==this)throw new Error(
EG);if(!!Fg.Af)Fg.Af.AG=Fg.AG;else this.BT=Fg.AG;if(!!Fg.AG)Fg.AG.Af=Fg.Af;else this.
BY=Fg.Af;Fg.Ou=null;Fg.Af=null;Fg.AG=null;if(!!Fg.O)Fg.O.Anc=null;A.ow(Fg.AGw,Fg
);if(!this.BY)this.AbR();},AYV:function(Fg){if(!Fg)return;if(this.AME())throw new
Error(Gr);if(!!Fg.Ou)throw new Error(I4);Fg.AG=this.BT;Fg.Af=null;if(!!this.BT)this.
BT.Af=Fg;else this.BY=Fg;this.BT=Fg;Fg.Ou=this;},_Init:function(aArg){A.Core.AiD.
_Init.call(this,aArg);this.__proto__=C.Ay6;},_Mark:function(D){var B;A.Core.AiD.
_Mark.call(this,D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::FaderTask"};C.Aud={
_Init:function(){C.APM._Init.call(this,0);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.FC.__proto__=C.ED;C.ACa.__proto__=C.ED;C.AI2.__proto__=C.ED;
C.Ml.__proto__=C.ED;C.ApS.__proto__=C.LK;C.AtY.__proto__=C.LK;C.Ac2.__proto__=C.
LK;C.ApT.__proto__=C.LK;C.APM.__proto__=C.Qd;C.Ab6.__proto__=C.Qd;C.ACM.__proto__=
C.Qd;C.AfB.__proto__=C.Qd;C.AJG.__proto__=A.Core.Timer;C.Ay6.__proto__=A.Core.AiD;
};C._ReInit=function(){var B;if((B=C.AeN._this))B._ReInit();if((B=C.Aud._this))B.
_ReInit();};C.Dn=function(D){var B;if((B=C.AeN._this)&&(B._cycle!=D))B._Done(C.AeN.
_this=null);if((B=C.Aud._this)&&(B._cycle!=D))B._Done(C.Aud._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */