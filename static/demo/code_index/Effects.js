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
var EU="The fader doesn\'t belong to this task";var Hc="Trying to add a fader to a task, which is actually running";
var I7="The fader belongs already to a task";
C.ER={MK:null,timer:null,P9:null,Sa:null,Agz:null,ST:0,Ais:0,UB:0,OO:0,Ayy:0.001,
P5:0,D5:0,Dl:0,AL6:0.5,A27:3,Av5:3,AtB:0.5,Vg:3,ASV:0,ASU:0,Mi:0,O$:1000,Pi:0,Vt:
0,Ag6:0,Bw:false,Akg:false,AR9:false,Apm:false,AJA:false,L5:function(H){var B;if(
!this.timer)return;if(!this.Ais){if(this.AR9)this.Ais=-1;else this.Ais=1;this.ST=
this.Ais;this.Dl=this.timer.Bt;this.D5=0;this.P5=-1;}var MC;if((this.Ais>0)&&(this.
ST>0))MC=this.BxG();else if((this.Ais<0)&&(this.ST<0))MC=this.BxJ();else if(this.
Ais>0)MC=this.BxH();else MC=this.BxI();if(MC){this.Ar(false);(B=this.P9)?B[1].call(
B[0],this):null;(B=this.Sa)?B[1].call(B[0],this):null;}},AJb:function(AL){var B;
if(!this.MK&&(((this.Ag6===19)||(this.Ag6===20))||(this.Ag6===21))){var AHN=this.
A27+1;var Bvc=Math.sqrt(this.AL6);var Rm=0.5;var P;this.MK=A._NewObject(C.AFh,0);
this.MK.OY.Set(0,1);this.MK.AkH.Set(0,1);for(P=1;P<AHN;P=P+1){this.MK.OY.Set(P,this.
MK.OY.Get(P-1)*Bvc);this.MK.AkH.Set(P,this.MK.AkH.Get(P-1)*this.AL6);Rm=Rm+this.
MK.OY.Get(P);}var BvY=1/Rm;this.MK.OY.Set(0,0.5);Rm=0;for(P=0;P<AHN;P=P+1){this.
MK.OY.Set(P,this.MK.OY.Get(P)*BvY);Rm=Rm+this.MK.OY.Get(P);}this.MK.OY.Set(AHN,this.
MK.OY.Get(AHN)+(1-Rm));}if(this.Akg){if(AL<0.5)AL=AL*2;else AL=2-(AL*2);}switch(
this.Ag6){case 1:AL=Math.pow(AL,this.Vg);break;case 2:{AL=1-AL;AL=1-Math.pow(AL,
this.Vg);}break;case 3:{AL=AL*2;if(AL<1)AL=Math.pow(AL,this.Vg)/2;else{AL=2-AL;AL=(
2-Math.pow(AL,this.Vg))*0.5;}}break;case 4:AL=(Math.pow(2.718,this.Vg*AL)-1)/(Math.
pow(2.718,this.Vg)-1);break;case 5:{AL=1-AL;AL=1-((Math.pow(2.718,this.Vg*AL)-1)
/(Math.pow(2.718,this.Vg)-1));}break;case 6:{AL=AL*2;if(AL<1)AL=((Math.pow(2.718
,this.Vg*AL)-1)/(Math.pow(2.718,this.Vg)-1))/2;else{AL=2-AL;AL=(2-((Math.pow(2.718
,this.Vg*AL)-1)/(Math.pow(2.718,this.Vg)-1)))*0.5;}}break;case 7:AL=1-Math.cos((
AL*90)*A.k$);break;case 8:AL=Math.sin((AL*90)*A.k$);break;case 9:{AL=AL*2;if(AL<
1){AL=1-Math.cos((AL*90)*A.k$);AL=AL*0.5;}else{AL=2-AL;AL=1-Math.cos((AL*90)*A.k$
);AL=(2-AL)*0.5;}}break;case 10:AL=1-Math.sqrt(1-(AL*AL));break;case 11:{AL=1-AL;
AL=Math.sqrt(1-(AL*AL));}break;case 12:{AL=AL*2;if(AL<1){AL=1-Math.sqrt(1-(AL*AL
));AL=AL*0.5;}else{AL=2-AL;AL=1-Math.sqrt(1-(AL*AL));AL=(2-AL)*0.5;}}break;case 13:
AL=((AL*AL)*AL)-((AL*this.AtB)*Math.sin((AL*180)*A.k$));break;case 14:{AL=1-AL;AL=((
AL*AL)*AL)-((AL*this.AtB)*Math.sin((AL*180)*A.k$));AL=1-AL;}break;case 15:{AL=AL
*2;if(AL<1){AL=((AL*AL)*AL)-((AL*this.AtB)*Math.sin((AL*180)*A.k$));AL=AL*0.5;}else{
AL=2-AL;AL=((AL*AL)*AL)-((AL*this.AtB)*Math.sin((AL*180)*A.k$));AL=(2-AL)*0.5;}}
break;case 16:AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Av5)))*A.k$);break;case
17:{AL=1-AL;AL=1-(((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Av5)))*A.k$));}break;
case 18:{AL=AL*2;if(AL<1){AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Av5)))*A.
k$);AL=AL*0.5;}else{AL=2-AL;AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.Av5)))*
A.k$);AL=(2-AL)*0.5;}}break;case 19:{var Bz=this.MK;var P=0;var Gp=0;var KU=Bz.OY.
Get(0);var D0=1-AL;while(D0>KU){P=P+1;Gp=KU;KU=KU+Bz.OY.Get(P);}AL=(D0-Gp)/(KU-Gp
);if(!P)AL=1-(AL*AL);else{AL=(2*AL)-1;AL=Bz.AkH.Get(P)*(1-(AL*AL));}}break;case 20:{
var Bz=this.MK;var P=0;var Gp=0;var KU=Bz.OY.Get(0);while(AL>KU){P=P+1;Gp=KU;KU=
KU+Bz.OY.Get(P);}AL=(AL-Gp)/(KU-Gp);if(!P)AL=AL*AL;else{AL=(2*AL)-1;AL=1-(Bz.AkH.
Get(P)*(1-(AL*AL)));}}break;case 21:{var Bz=this.MK;var P=0;var Gp=0;var KU=Bz.OY.
Get(0);var Lv=AL*2;var D0=Lv-1;if(Lv<1)D0=-D0;while(D0>KU){P=P+1;Gp=KU;KU=KU+Bz.
OY.Get(P);}D0=(D0-Gp)/(KU-Gp);if(!P)D0=D0*D0;else{D0=(2*D0)-1;D0=1-(Bz.AkH.Get(P
)*(1-(D0*D0)));}if(Lv<1)AL=0.5*(1-D0);else AL=0.5*(1+D0);}break;default:if(this.
Apm){var Lv=AL;var AyX=1-Lv;AL=((AyX*Lv)*(this.OO+1))+(Lv*Lv);}else if(this.AJA){
var Lv=AL;var AyX=1-Lv;var A$$=Lv*Lv;var Bwb=AyX*AyX;AL=(((Bwb*Lv)*(this.OO+1))+((
AyX*A$$)*(this.UB+2)))+(A$$*Lv);}}this.AtG(AL);(B=this.Agz)?B[1].call(B[0],this):
null;},BxJ:function(){var As=(this.timer.Bt-this.Dl)|0;if(As<0)As=-As;var Lr=this.
Vt;var Oa=this.Vt+this.O$;var G2=this.Pi+this.O$;var MC=false;var D6=this.P5;if(
!this.D5&&(As>=Oa)){this.D5=1;As=As-Oa;this.Dl=this.Dl+Oa;}if((this.D5>0)&&(As>=
G2)){var H6=(As/G2)|0;this.D5=this.D5+H6;As=As-(H6*G2);this.Dl=this.Dl+(H6*G2);}
if((this.D5>2)&&!this.Mi)this.D5=1;if(this.D5>0)Lr=this.Pi;if((this.D5>=this.Mi)&&(
this.Mi>0)){MC=true;D6=0;}else if(As>=Lr)D6=1-((As-Lr)*this.Ayy);else if(D6>=0)D6=
0;if(D6!==this.P5){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.P5){this.P5=D6;this.AJb(
D6);}return MC;},BxI:function(){var As=(this.Dl-this.timer.Bt)|0;var Lr=this.Vt;
var Oa=this.Vt+this.O$;var G2=this.Pi+this.O$;var MC=false;var D6=this.P5;if((this.
D5>1)&&(As<0)){var H6=(((-As+G2)-1)/G2)|0;if((this.D5-H6)<=0)H6=this.D5-1;this.D5=
this.D5-H6;As=As+(H6*G2);this.Dl=this.Dl+(H6*G2);}if(((this.D5===1)&&(As<0))&&(this.
Mi>0)){this.D5=0;As=As+Oa;this.Dl=this.Dl+Oa;}if(((this.D5===1)&&(As<0))&&!this.
Mi){var H6=(((-As+G2)-1)/G2)|0;As=As+(H6*G2);this.Dl=this.Dl+(H6*G2);}if(this.D5>
0)Lr=this.Pi;if(As<0){MC=true;D6=1;}else if(As>=Lr)D6=1-((As-Lr)*this.Ayy);else if(
D6>=0)D6=1;if(D6!==this.P5){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.P5){this.P5=
D6;this.AJb(D6);}return MC;},BxH:function(){var As=(this.Dl-this.timer.Bt)|0;var
Lr=this.Vt;var Oa=this.Vt+this.O$;var G2=this.Pi+this.O$;var MC=false;var D6=this.
P5;if((this.D5>1)&&(As<0)){var H6=(((-As+G2)-1)/G2)|0;if((this.D5-H6)<=0)H6=this.
D5-1;this.D5=this.D5-H6;As=As+(H6*G2);this.Dl=this.Dl+(H6*G2);}if(((this.D5===1)&&(
As<0))&&(this.Mi>0)){this.D5=0;As=As+Oa;this.Dl=this.Dl+Oa;}if(((this.D5===1)&&(
As<0))&&!this.Mi){var H6=(((-As+G2)-1)/G2)|0;As=As+(H6*G2);this.Dl=this.Dl+(H6*G2
);}if(this.D5>0)Lr=this.Pi;if(As<0){MC=true;D6=0;}else if(As>=Lr)D6=(As-Lr)*this.
Ayy;else if(D6>=0)D6=0;if(D6!==this.P5){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.
P5){this.P5=D6;this.AJb(D6);}return MC;},BxG:function(){var As=(this.timer.Bt-this.
Dl)|0;if(As<0)As=-As;var Lr=this.Vt;var Oa=this.Vt+this.O$;var G2=this.Pi+this.O$;
var MC=false;var D6=this.P5;if(!this.D5&&(As>=Oa)){this.D5=1;As=As-Oa;this.Dl=this.
Dl+Oa;}if((this.D5>0)&&(As>=G2)){var H6=(As/G2)|0;this.D5=this.D5+H6;As=As-(H6*G2
);this.Dl=this.Dl+(H6*G2);}if((this.D5>2)&&!this.Mi)this.D5=1;if(this.D5>0)Lr=this.
Pi;if((this.D5>=this.Mi)&&(this.Mi>0)){MC=true;D6=1;}else if(As>=Lr)D6=(As-Lr)*this.
Ayy;else if(D6>=0)D6=1;if(D6!==this.P5){if(D6<0)D6=0;if(D6>1)D6=1;}if(D6!==this.
P5){this.P5=D6;this.AJb(D6);}return MC;},Aej:function(E){if(this.AR9===E)return;
this.AR9=E;if(!this.Bw||!this.Ais)return;if(E)this.ST=-1;else this.ST=1;this.Dl=(
this.timer.Aun()*2)-this.Dl;},ADq:function(E){if(E<0)E=0;if(E>1)E=1;this.AL6=E;}
,ADf:function(E){if(E<1)E=1;if(E>10)E=10;this.A27=E;this.MK=null;},ADW:function(
E){if(E<1)E=1;if(E>10)E=10;this.Av5=E;},ADa:function(E){if(E<0)E=0;if(E>10)E=10;
this.AtB=E;},Avw:function(E){if(E<1)E=1;if(E>100)E=100;this.Vg=E;},AD$:function(
E){if(this.ASV===E)return;this.ASV=E;if(this.Ag6===26){this.UB=E;this.Apm=(this.
OO===this.UB)&&!!this.OO;this.AJA=!this.Apm&&(this.OO!==this.UB);}},AD_:function(
E){if(this.ASU===E)return;this.ASU=E;if(this.Ag6===26){this.OO=E;this.Apm=(this.
OO===this.UB)&&!!this.OO;this.AJA=!this.Apm&&(this.OO!==this.UB);}},V5:function(
E){if(this.Ag6===E)return;this.Ag6=E;this.MK=null;switch(E){case 24:{this.OO=-1.1;
this.UB=1.1;}break;case 22:{this.OO=-1;this.UB=-2;}break;case 23:{this.OO=2;this.
UB=1;}break;case 25:{this.OO=1.1;this.UB=-1.1;}break;case 0:{this.OO=0;this.UB=0;
}break;default:{this.OO=this.ASU;this.UB=this.ASV;}}this.Apm=(this.OO===this.UB)&&
!!this.OO;this.AJA=!this.Apm&&(this.OO!==this.UB);},ID:function(E){if(E<0)E=0;this.
Mi=E;},Fy:function(E){if(E<15)E=15;this.O$=E;this.Ayy=1/E;},V4:function(E){if(E<
0)E=0;this.Pi=E;},AjU:function(E){if(E<0)E=0;this.Vt=E;},Ar:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.L5],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.AdA);A.zV([this,this.L5],this.timer
,0);this.Ais=0;A.pe([this,this.L5],this);}},AtG:function(ZH){},Awm:function(H){this.
Ar(false);},AE7:function(H){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:function(
aArg){this.__proto__=C.ER;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.MK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P9)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sa)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Agz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};C.FX={R:null,A4:0,B1:255,Ct:0,AtG:function(ZH){var F;this.A4=
this.Ct+(Math.round((this.B1-this.Ct)*ZH)|0);if(!!this.R)(F=this.R,F[2].call(F[0
],this.A4));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.__proto__=C.FX;
},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.R)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AEv={R:null,A4:A.
wf,B1:B9,Ct:A.wf,AtG:function(ZH){var F;var Ee=this.Ct[0];var C9=this.Ct[1];Ee=Ee+(
Math.round((this.B1[0]-Ee)*ZH)|0);C9=C9+(Math.round((this.B1[1]-C9)*ZH)|0);this.
A4=[Ee,C9];if(!!this.R)(F=this.R,F[2].call(F[0],this.A4));},_Init:function(aArg){
C.ER._Init.call(this,aArg);this.__proto__=C.AEv;},_Mark:function(D){var B;C.ER._Mark.
call(this,D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::PointEffect"};C.ALr={R:null,A4:0,B1:0xFFFFFFFF,Ct:0,AtG:function(ZH){var
F;var OW=this.Ct&0xFF;var ZS=(this.Ct>>8)&0xFF;var AkN=(this.Ct>>16)&0xFF;var AkG=(
this.Ct>>24)&0xFF;OW=OW+((((this.B1&0xFF)-OW)*ZH)|0);ZS=ZS+(((((this.B1>>8)&0xFF
)-ZS)*ZH)|0);AkN=AkN+(((((this.B1>>16)&0xFF)-AkN)*ZH)|0);AkG=AkG+(((((this.B1>>24
)&0xFF)-AkG)*ZH)|0);if(OW<0)OW=0;if(OW>255)OW=255;if(ZS<0)ZS=0;if(ZS>255)ZS=255;
if(AkN<0)AkN=0;if(AkN>255)AkN=255;if(AkG<0)AkG=0;if(AkG>255)AkG=255;this.A4=(OW&
0xFF)|((ZS&0xFF)<<8)|((AkN&0xFF)<<16)|((AkG&0xFF)<<24);if(!!this.R)(F=this.R,F[2
].call(F[0],this.A4));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.__proto__=
C.ALr;},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.R)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::ColorEffect"};C.MS={A4:0,B1:
1,Ct:0,AtG:function(ZH){this.A4=this.Ct+((this.B1-this.Ct)*ZH);},_Init:function(
aArg){C.ER._Init.call(this,aArg);this.__proto__=C.MS;},_className:"Effects::FloatEffect"
};C.U5={timer:null,R:null,D5:0,Dl:0,O$:1000,Pi:1000,Vt:0,Bw:false,Ct:false,B1:true
,L5:function(H){var F;if(!this.timer)return;if(this.D5<0){this.Dl=this.timer.Bt;
this.D5=0;}var As=(this.timer.Bt-this.Dl)|0;var Oa=this.Vt+this.O$;var G2=this.Pi+
this.O$;var Lr=this.Vt;var Jq=this.D5;if(!Jq&&(As>=Oa)){Jq=1;As=As-Oa;}if((Jq>0)&&(
As>=G2)){var H6=(As/G2)|0;As=As-(H6*G2);Jq=Jq+H6;}if(Jq>2)Jq=1;if(Jq!==this.D5){
this.Dl=this.timer.Bt-(((B=As)<0)?B+0x100000000:B);this.D5=Jq;}if(Jq>0)Lr=this.Pi;
if(!!this.R){if(As>=Lr)(F=this.R,F[2].call(F[0],this.Ct));if((As<Lr)&&(Jq>0))(F=
this.R,F[2].call(F[0],this.B1));}},Fy:function(E){if(E<100)E=100;this.O$=E;},V4:
function(E){if(E<0)E=0;this.Pi=E;},AjU:function(E){if(E<0)E=0;this.Vt=E;},Ar:function(
E){if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.L5],this.
timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.AdA);A.zV([this,this.
L5],this.timer,0);this.D5=-1;}},_Init:function(aArg){this.__proto__=C.U5;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};C.Md={OZ:
null,AH:null,Ag:null,Ab:null,O:null,AIP:null,A0I:null,AjM:null,Dk:true,Bw:true,Ab3:
true,AiG:false,AiP:true,Y1:true,QN:true,Mb:function(){if(!!this.OZ)this.OZ.Mb();
},AuO:function(){return true;},YK:function(){},Sg:function(){this.Mb();},_Init:function(
aArg){this.__proto__=C.Md;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.OZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.O)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIP)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.A0I)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AjM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"
};C.ArR={Arg:A.wf,ME:false,AuO:function(){return this.ME;},YK:function(){if(!this.
Dk&&!!this.O.Ab)this.O.Y(false);if((!this.Dk&&this.QN)&&!!this.O.Ab)this.O.Ab.HG(
this.O);if(!this.Bw)this.O.Ar(false);},Sg:function(){if(this.Bw)this.O.Ar(true);
if((this.Dk||this.AiG)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.
Dk&&this.Y1)this.O.Ab.Y0(this.O);if(this.Dk&&this.AiP)this.O.Ab.Ba(this.O);if(this.
Dk&&!this.Ab3)this.O.G(A.abJ(this.O.M,this.Arg));if(this.Dk){this.O.Dy(255);this.
O.Y(true);}if(!this.Dk&&(this.Ab.AY===this.O))this.Ab.Ba(null);this.ME=true;this.
Mb();},_Init:function(aArg){C.Md._Init.call(this,aArg);this.__proto__=C.ArR;},_className:
"Effects::VisibilityFader"};C.Av1={ER:null,ME:false,App:false,AuO:function(){return this.
ME;},YK:function(){if(this.Dk)this.O.Dy(this.ER.B1);if(!this.Dk&&!this.O.GS)this.
O.Y(false);if((!this.Dk&&this.QN)&&!!this.O.Ab)this.O.Ab.HG(this.O);if(!this.Bw)
this.O.Ar(false);},Sg:function(){var B;if(this.Ab3){if(this.O.Fc()&&!!this.O.Ab)
this.ER.Ct=this.O.GS;else this.ER.Ct=0;}var AyB=((!this.O.Ab||!this.O.GS)||!this.
O.Fc())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(
B[1]>=B[3]));var AyC=((!this.Dk&&((!this.O.Ab||!this.O.Fc())||this.QN))||!this.ER.
B1)||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=
B[3]));if(AyB&&AyC){this.ER.Ct=0;this.ER.B1=0;}this.App=this.O.AQl();if(this.Bw)
this.O.Ar(true);if((this.Dk||this.AiG)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.
O,0);}if(this.Dk&&this.Y1)this.O.Ab.Y0(this.O);if(this.Dk&&this.AiP)this.O.Ab.Ba(
this.O);if(!this.Dk&&(this.Ab.AY===this.O))this.Ab.Ba(null);if(this.Dk&&!this.O.
Fc()){this.O.Dy(this.ER.Ct);this.O.Y(true);}if(!this.Dk&&((!this.O.Ab||!this.O.Fc(
))||!this.O.GS)){this.ME=true;this.Mb();return;}if(!this.Dk&&(this.ER.Ct===this.
ER.B1))this.O.Dy(this.ER.Ct);if(this.O.GS===this.ER.B1){this.ME=true;this.Mb();return;
}if(this.ER.Ct===this.ER.B1){this.ME=true;this.Mb();return;}if(!this.ER.Mi)this.
ER.ID(1);this.ER.R=[B=this.O,B.Ava,B.AXT];this.ER.Aej(false);this.ER.Akg=false;this.
ER.Sa=[this,this.Ah8];this.ER.Agz=null;this.ER.Ar(true);},Ah8:function(H){this.ME=
true;this.Mb();},_Init:function(aArg){C.Md._Init.call(this,aArg);C.FX._Init.call(
this.ER={I:this},0);this.__proto__=C.Av1;},_Done:function(){this.__proto__=C.Md;
this.ER._Done();C.Md._Done.call(this);},_ReInit:function(){C.Md._ReInit.call(this
);this.ER._ReInit();},_Mark:function(D){var B;C.Md._Mark.call(this,D);if((B=this.
ER)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Aem={Ck:
null,D3:null,Ado:false,ME:false,App:false,AuO:function(){return this.ME;},YK:function(
){if(this.Dk){this.O.Dy(this.Ck.B1);this.O.G(A.abJ(this.O.M,this.D3.B1));}if(!this.
Dk&&!this.O.GS)this.O.Y(false);if((!this.Dk&&this.QN)&&!!this.O.Ab)this.O.Ab.HG(
this.O);if(this.Ado)this.O.AqL(this.App);if(!this.Bw)this.O.Ar(false);},Sg:function(
){var B;if(this.Ab3){if(this.O.Fc()&&!!this.O.Ab)this.Ck.Ct=this.O.GS;else this.
Ck.Ct=0;this.D3.Ct=this.O.M.slice(0,2);}var AyB=((!this.O.Ab||!this.O.GS)||!this.
O.Fc())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(
B[1]>=B[3]));var AyC=((!this.Dk&&((!this.O.Ab||!this.O.Fc())||this.QN))||!this.Ck.
B1)||(((B=A.lb(A.abh([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D3.B1),[0,0,(B=this.
Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AyB&&AyC){this.Ck.Ct=0;this.
Ck.B1=0;this.D3.Ct=this.D3.B1;}this.App=this.O.AQl();if(this.Bw)this.O.Ar(true);
if((this.Dk||this.AiG)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.
Dk&&this.Y1)this.O.Ab.Y0(this.O);if(this.Dk&&this.AiP)this.O.Ab.Ba(this.O);if(!this.
Dk&&(this.Ab.AY===this.O))this.Ab.Ba(null);if(this.Dk&&!this.O.Fc()){this.O.G(A.
abJ(this.O.M,this.D3.Ct));this.O.Dy(this.Ck.Ct);this.O.Y(true);}if(!this.Dk&&((!
this.O.Ab||!this.O.Fc())||!this.O.GS)){this.ME=true;this.Mb();return;}if(!this.Dk&&
A.aaX(this.D3.Ct,this.D3.B1))this.O.G(A.abJ(this.O.M,this.D3.Ct));if(!this.Dk&&(
this.Ck.Ct===this.Ck.B1))this.O.Dy(this.Ck.Ct);if((this.O.GS===this.Ck.B1)&&A.aaX(
this.O.M.slice(0,2),this.D3.B1)){this.ME=true;this.Mb();return;}if((this.Ck.Ct===
this.Ck.B1)&&A.aaX(this.D3.Ct,this.D3.B1)){this.ME=true;this.Mb();return;}if(!this.
Ck.Mi)this.Ck.ID(1);if(!this.D3.Mi)this.D3.ID(1);if(this.Ado)this.O.AqL(true);this.
D3.R=null;this.D3.Aej(false);this.D3.Akg=false;this.D3.Sa=[this,this.Ah8];this.D3.
Agz=[this,this.Ay6];this.Ck.R=[B=this.O,B.Ava,B.AXT];this.Ck.Aej(false);this.Ck.
Akg=false;this.Ck.Sa=[this,this.Ah8];this.Ck.Agz=null;this.D3.Ar(!A.aaX(this.D3.
Ct,this.D3.B1));this.Ck.Ar(this.Ck.Ct!==this.Ck.B1);},Ah8:function(H){this.ME=!this.
Ck.Bw&&!this.D3.Bw;this.Mb();},Ay6:function(H){this.O.G(A.abJ(this.O.M,this.D3.A4
));},_Init:function(aArg){C.Md._Init.call(this,aArg);C.FX._Init.call(this.Ck={I:
this},0);C.AEv._Init.call(this.D3={I:this},0);this.__proto__=C.Aem;},_Done:function(
){this.__proto__=C.Md;this.Ck._Done();this.D3._Done();C.Md._Done.call(this);},_ReInit:
function(){C.Md._ReInit.call(this);this.Ck._ReInit();this.D3._ReInit();},_Mark:function(
D){var B;C.Md._Mark.call(this,D);if((B=this.Ck)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};
C.ArS={Ac5:null,Ck:null,GU:null,VM:null,FD:null,TX:A.wf,Aj6:A.wf,ME:false,App:false
,AuO:function(){return this.ME;},YK:function(){if(this.Dk){this.O.Dy(this.Ck.B1);
this.O.G(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.TX));this.O.Y(true);}if(!this.
Dk&&!this.Ck.B1){this.O.Dy(0);this.O.Y(false);}if(((!this.Dk&&(this.Ck.B1>0))&&!
!this.O.Ab)&&!this.QN){this.O.Dy(this.Ck.B1);this.O.G(A.abh(A.abg(this.O.M,A.aaI(
this.O.M)),this.TX));this.O.Y(true);}if((!this.Dk&&this.QN)&&!!this.O.Ab)this.O.
Ab.HG(this.O);this.O.AqL(this.App);if(!!this.Ac5)this.Ab.HG(this.Ac5);if(!this.Bw
)this.O.Ar(false);},Sg:function(){var B;if(this.Ab3){if(this.O.Fc()&&!!this.O.Ab
)this.Ck.Ct=this.O.GS;else this.Ck.Ct=0;this.Aj6=A.aaI(this.O.M);}var AyB=((!this.
O.Ab||!this.O.GS)||!this.O.Fc())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AyC=((!this.Dk&&((!this.O.Ab||!this.O.
Fc())||this.QN))||!this.Ck.B1)||(((B=A.lb(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),
this.TX),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AyB&&
AyC){this.Ck.Ct=0;this.Ck.B1=0;this.Aj6=this.TX;this.VM.A5b();}this.App=this.O.AQl(
);if(this.Bw)this.O.Ar(true);if((this.Dk||this.AiG)&&!this.O.Ab){this.O.Y(false);
this.Ab.J(this.O,0);}if(this.Dk&&this.Y1)this.O.Ab.Y0(this.O);if(this.Dk&&this.AiP
)this.O.Ab.Ba(this.O);if(!this.Dk&&(this.Ab.AY===this.O))this.Ab.Ba(null);if(this.
Dk&&!this.O.Fc())this.O.Dy(this.Ck.Ct);if((!this.Dk&&A.aaX(this.Aj6,this.TX))&&this.
VM.ACh())this.O.G(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Aj6));if(!this.Dk&&(
this.Ck.Ct===this.Ck.B1))this.O.Dy(this.Ck.Ct);if(!this.Dk&&((!this.O.Ab||!this.
O.Fc())||!this.O.GS)){this.ME=true;this.Mb();return;}if(((this.Dk&&(this.O.GS===
this.Ck.B1))&&A.aaX(A.aaI(this.O.M),this.TX))&&this.O.Fc()){this.ME=true;this.Mb(
);return;}if(((!this.Dk&&(this.O.GS===this.Ck.B1))&&A.aaX(A.aaI(this.O.M),this.TX
))&&this.VM.ACh()){this.ME=true;this.Mb();return;}if(((this.Ck.Ct===this.Ck.B1)&&
A.aaX(this.Aj6,this.TX))&&this.VM.ACh()){this.ME=true;this.Mb();return;}this.O.AqL(
true);this.O.Y(false);this.Ac5=A._NewObject(A.acg.ATg,0);this.Ac5.Bjq(this.O);this.
Ac5.Dy(this.Ck.Ct);this.Ac5.Bkf(A.aaI([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.
O.Ab.AKe(this.Ac5,this.O);if(!this.Ck.Mi)this.Ck.ID(1);if(!this.GU.Mi)this.GU.ID(
1);this.GU.Aej(false);this.GU.Akg=false;this.GU.Sa=[this,this.Ah8];this.GU.Agz=[
this,this.Ay6];if(this.Dk){this.GU.Ct=0;this.GU.B1=1;}else{this.GU.Ct=1;this.GU.
B1=0;}this.Ck.R=[B=this.Ac5,B.Ava,B.Dy];this.Ck.Aej(false);this.Ck.Akg=false;this.
Ck.Sa=[this,this.Ah8];this.Ck.Agz=null;this.GU.Ar(!A.aaX(this.Aj6,this.TX)||!this.
VM.ACh());this.Ck.Ar(this.Ck.Ct!==this.Ck.B1);},Ah8:function(H){this.ME=!this.Ck.
Bw&&!this.GU.Bw;this.Mb();},Ay6:function(H){var B;var AzU=A.abe(this.TX,this.Aj6
);if(!this.Dk)AzU=[-AzU[0],-AzU[1]];this.FD.A5b();this.FD.Af9=this.VM.Af9;this.FD.
Bmt(AzU[0],AzU[1],0);this.FD.Bgb(this.VM,this.FD,this.GU.A4);if(this.Dk)this.Ac5.
A9b(this.Aj6,this.FD);else this.Ac5.A9b(this.TX,this.FD);},_Init:function(aArg){
C.Md._Init.call(this,aArg);C.FX._Init.call(this.Ck={I:this},0);C.MS._Init.call(this.
GU={I:this},0);A.Graphics.AwC._Init.call(this.VM={I:this},0);A.Graphics.AwC._Init.
call(this.FD={I:this},0);this.__proto__=C.ArS;},_Done:function(){this.__proto__=
C.Md;this.Ck._Done();this.GU._Done();this.VM._Done();this.FD._Done();C.Md._Done.
call(this);},_ReInit:function(){C.Md._ReInit.call(this);this.Ck._ReInit();this.GU.
_ReInit();this.VM._ReInit();this.FD._ReInit();},_Mark:function(D){var B;C.Md._Mark.
call(this,D);if((B=this.Ac5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
VM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.QW={RM:function(){return null;},RL:function(
){return null;},Adu:function(){return this.RM();},Adt:function(){return this.RL(
);},_Init:function(aArg){this.__proto__=C.QW;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.ASw={RM:function(){var Ao=A._NewObject(C.ArR,0);Ao.Dk=true;Ao.Bw=true;Ao.AiP=
false;Ao.Y1=true;Ao.Ab3=false;Ao.AjM=[this,this.AoX];return Ao;},RL:function(){var
Ao=A._NewObject(C.ArR,0);Ao.Dk=false;Ao.Bw=false;Ao.QN=true;return Ao;},Adu:function(
){var Ao=C.QW.Adu.call(this);Ao.Y1=false;Ao.Bw=true;return Ao;},Adt:function(){var
Ao=A._NewObject(C.ArR,0);Ao.Dk=false;Ao.Bw=true;Ao.AiG=true;Ao.QN=false;return Ao;
},AoX:function(H){var B;var Ao=(C.ArR.isPrototypeOf(H)?H:null);var A9=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var CX=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A9.slice(
0,2);pos=[(A9[0]+(((A9[2]-A9[0])/2)|0))-((CX[0]/2)|0),pos[1]];pos=[pos[0],(A9[1]+(((
A9[3]-A9[1])/2)|0))-((CX[1]/2)|0)];Ao.Arg=pos;},_Init:function(aArg){C.QW._Init.
call(this,aArg);this.__proto__=C.ASw;},_className:"Effects::ShowHideTransition"};
C.AdD={AA6:500,RM:function(){var Ao=A._NewObject(C.Aem,0);Ao.Dk=true;Ao.Bw=true;
Ao.AiP=false;Ao.Y1=true;Ao.Ab3=true;Ao.Ado=false;Ao.AjM=[this,this.AoX];Ao.Ck.Fy(
this.AA6);Ao.Ck.Ct=0;Ao.Ck.B1=255;Ao.D3.Fy(this.AA6);Ao.D3.V5(23);return Ao;},RL:
function(){var Ao=A._NewObject(C.Av1,0);Ao.Dk=false;Ao.Bw=false;Ao.QN=true;Ao.Ab3=
true;Ao.ER.Ct=255;Ao.ER.B1=0;Ao.ER.Fy(this.AA6);return Ao;},Adu:function(){var Ao=
C.QW.Adu.call(this);Ao.Y1=false;Ao.Bw=true;return Ao;},Adt:function(){var Ao=C.QW.
Adt.call(this);Ao.AiG=true;Ao.QN=false;Ao.Bw=true;return Ao;},AoX:function(H){var
B;var Ao=(C.Aem.isPrototypeOf(H)?H:null);var A9=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var CX=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A9.slice(0,2);pos=[(A9[0]+(((A9[
2]-A9[0])/2)|0))-((CX[0]/2)|0),pos[1]];pos=[pos[0],(A9[1]+(((A9[3]-A9[1])/2)|0))-((
CX[1]/2)|0)];Ao.D3.B1=pos;if(((!Ao.O.Ab||!Ao.O.Fc())||!Ao.O.GS)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.O.G(A.abJ(Ao.
O.M,pos));},_Init:function(aArg){C.QW._Init.call(this,aArg);this.__proto__=C.AdD;
},_className:"Effects::FadeInOutTransition"};C.AE4={J1:0x12,AtY:0,Ado:false,RM:function(
){var Ao=A._NewObject(C.Aem,0);Ao.Dk=true;Ao.Bw=true;Ao.AiP=false;Ao.Y1=true;Ao.
Ab3=true;Ao.Ado=this.Ado;Ao.AjM=[this,this.AoX];Ao.Ck.Fy(500);Ao.Ck.AjU(0);Ao.Ck.
Ct=0;Ao.Ck.B1=255;Ao.D3.Fy(500);Ao.D3.V5(23);Ao.D3.AD_(0);Ao.D3.AD$(0);Ao.D3.Avw(
3);Ao.D3.ADa(0.5);Ao.D3.ADW(3);Ao.D3.ADf(3);Ao.D3.ADq(0.5);return Ao;},RL:function(
){var Ao=A._NewObject(C.Aem,0);Ao.Dk=false;Ao.Bw=false;Ao.QN=true;Ao.Ab3=true;Ao.
Ado=this.Ado;Ao.AjM=[this,this.A0U];Ao.Ck.Ct=255;Ao.Ck.B1=0;Ao.Ck.Fy(500);Ao.Ck.
AjU(0);Ao.D3.Fy(500);Ao.D3.V5(23);Ao.D3.AD_(0);Ao.D3.AD$(0);Ao.D3.Avw(3);Ao.D3.ADa(
0.5);Ao.D3.ADW(3);Ao.D3.ADf(3);Ao.D3.ADq(0.5);return Ao;},Adu:function(){var Ao=
C.QW.Adu.call(this);Ao.Y1=false;Ao.Bw=true;return Ao;},Adt:function(){var Ao=C.QW.
Adt.call(this);Ao.AiG=true;Ao.QN=false;Ao.Bw=true;return Ao;},AoX:function(H){var
B;var Ao=(C.Aem.isPrototypeOf(H)?H:null);var Br=this.J1;var A9=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var CX=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A9.slice(0,2);if(((
Br&0x4)===0x4))pos=[A9[2]-CX[0],pos[1]];else if(((Br&0x2)===0x2))pos=[(A9[0]+(((
A9[2]-A9[0])/2)|0))-((CX[0]/2)|0),pos[1]];if(((Br&0x20)===0x20))pos=[pos[0],A9[3
]-CX[1]];else if(((Br&0x10)===0x10))pos=[pos[0],(A9[1]+(((A9[3]-A9[1])/2)|0))-((
CX[1]/2)|0)];Ao.D3.B1=pos;if(((!Ao.O.Ab||!Ao.O.Fc())||!Ao.O.GS)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Hp=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.AtY){case 5:pos=[pos[0],-CX[1]];break;case 3:{
pos=[pos[0],-CX[1]];pos=[Hp[0],pos[1]];}break;case 8:pos=[-CX[0],-CX[1]];break;case
2:pos=[Hp[0],pos[1]];break;case 7:pos=[-CX[0],pos[1]];break;case 4:pos=[pos[0],Hp[
1]];break;case 1:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 6:{pos=[pos[
0],Hp[1]];pos=[-CX[0],pos[1]];}break;default:;}Ao.O.G(A.abJ(Ao.O.M,pos));}},A0U:
function(H){var B;var Ao=(C.Aem.isPrototypeOf(H)?H:null);var pos=Ao.O.M.slice(0,
2);var CX=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var Hp=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.AtY){case 5:pos=[pos[0],Hp[1]];break;case 3:{pos=[pos[0],Hp[1]];pos=[-
CX[0],pos[1]];}break;case 8:{pos=[pos[0],Hp[1]];pos=[Hp[0],pos[1]];}break;case 2:
pos=[-CX[0],pos[1]];break;case 7:pos=[Hp[0],pos[1]];break;case 4:pos=[pos[0],-CX[
1]];break;case 1:pos=[-CX[0],-CX[1]];break;case 6:{pos=[pos[0],-CX[1]];pos=[Hp[0
],pos[1]];}break;default:;}Ao.D3.B1=pos;},_Init:function(aArg){C.QW._Init.call(this
,aArg);this.__proto__=C.AE4;},_className:"Effects::SlideTransition"};C.Aeu={RM:function(
){var Ao=A._NewObject(C.ArS,0);Ao.Dk=true;Ao.Bw=true;Ao.AiP=false;Ao.Y1=true;Ao.
Ab3=true;Ao.AjM=[this,this.AoX];Ao.Ck.Fy(500);Ao.Ck.AjU(0);Ao.Ck.Ct=0;Ao.Ck.B1=255;
Ao.GU.Fy(500);Ao.GU.V5(23);Ao.GU.AD_(0);Ao.GU.AD$(0);Ao.GU.Avw(3);Ao.GU.ADa(0.5);
Ao.GU.ADW(3);Ao.GU.ADf(3);Ao.GU.ADq(0.5);Ao.VM.Aet(0.5,0.5,1);return Ao;},RL:function(
){var Ao=A._NewObject(C.ArS,0);Ao.Dk=false;Ao.Bw=false;Ao.QN=true;Ao.Ab3=true;Ao.
AjM=[this,this.A0U];Ao.Ck.Ct=255;Ao.Ck.B1=0;Ao.Ck.Fy(500);Ao.Ck.AjU(0);Ao.GU.Fy(
500);Ao.GU.V5(23);Ao.GU.AD_(0);Ao.GU.AD$(0);Ao.GU.Avw(3);Ao.GU.ADa(0.5);Ao.GU.ADW(
3);Ao.GU.ADf(3);Ao.GU.ADq(0.5);Ao.VM.Aet(0.5,0.5,1);return Ao;},Adu:function(){var
Ao=C.QW.Adu.call(this);Ao.Y1=false;Ao.Bw=true;return Ao;},Adt:function(){var Ao=
C.QW.Adt.call(this);Ao.AiG=true;Ao.QN=false;Ao.Bw=true;return Ao;},AoX:function(
H){var B;var Ao=(C.ArS.isPrototypeOf(H)?H:null);var A9=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var CX=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A9.slice(0,2);pos=[(A9[
0]+(((A9[2]-A9[0])/2)|0))-((CX[0]/2)|0),pos[1]];pos=[pos[0],(A9[1]+(((A9[3]-A9[1
])/2)|0))-((CX[1]/2)|0)];Ao.TX=A.abf(pos,[(CX[0]/2)|0,(CX[1]/2)|0]);if(((!Ao.O.Ab||
!Ao.O.Fc())||!Ao.O.GS)||(((B=A.lb(Ao.O.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.O.G(A.abJ(Ao.O.M,A.abe(Ao.TX,A.aaI([0,0,(B=Ao.O.M)[2]-
B[0],B[3]-B[1]]))));},A0U:function(H){var Ao=(C.ArS.isPrototypeOf(H)?H:null);Ao.
TX=A.aaI(Ao.O.M);},_Init:function(aArg){C.QW._Init.call(this,aArg);this.__proto__=
C.Aeu;},_className:"Effects::ScaleTransition"};C.Ag6={BAr:0,BA8:1,BA_:2,BA9:3,BzO:
4,BzQ:5,BzP:6,BBC:7,BBE:8,BBD:9,Bzj:10,Bzl:11,Bzk:12,By1:13,By3:14,By2:15,BzF:16
,BzH:17,BzG:18,Bza:19,Bzc:20,Bzb:21,BzE:22,BzS:23,BzD:24,BzT:25,Bzq:26};C.Bzx={A2p:
0x1,A2o:0x2,A2q:0x4,A2t:0x8,A2s:0x10,A2r:0x20};C.AL5={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AL5;},_className:"Effects::EffectTimerClass"};C.
AdA={_Init:function(){C.AL5._Init.call(this,0);this.QJ(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AFh={OY:A.abi(12,0
,null),AkH:A.abi(12,0,null),_Init:function(aArg){(this.OY=[]).__proto__=C.AFh.OY;(
this.AkH=[]).__proto__=C.AFh.AkH;this.__proto__=C.AFh;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.ABb={B7:null,B6:null,A5Q:function(Asp){var Ao=this.B6;while(
!!Ao){Ao.YK();Ao.O.T=Ao.O.T&~0x40000;Ao=Ao.Ag;}Ao=this.B6;while(!!Ao){A.pe(Ao.A0I
,Ao);Ao=Ao.Ag;}},A5P:function(Asp){var Ao=this.B6;while(!!Ao){A.pe(Ao.AIP,Ao);Ao=
Ao.Ag;}this.B6=null;this.B7=null;},Sg:function(Asp){var B;if(!this.B6)this.Mb();
var Ao=this.B6;while(!!Ao){Ao.O.T=(Ao.O.T|0x40000)&~0x20000;Ao.O.Ao5=null;Ao=Ao.
Ag;}Ao=this.B6;while(!!Ao){(B=Ao.AjM)?B[1].call(B[0],Ao):null;Ao.Sg();Ao=Ao.Ag;}
},Mb:function(){var Ao=this.B6;while(!!Ao&&Ao.AuO())Ao=Ao.Ag;if(!Ao)A.Core.Akh.Mb.
call(this);},Bk4:function(FC){if(!FC)return;if(this.AO7())throw new Error(BC);if(
FC.OZ!==this)throw new Error(EU);if(!!FC.Ag)FC.Ag.AH=FC.AH;else this.B7=FC.AH;if(
!!FC.AH)FC.AH.Ag=FC.Ag;else this.B6=FC.Ag;FC.OZ=null;FC.Ag=null;FC.AH=null;if(!!
FC.O)FC.O.Ao5=null;A.pe(FC.AIP,FC);if(!this.B6)this.AlU();},A2j:function(FC){if(
!FC)return;if(this.AO7())throw new Error(Hc);if(!!FC.OZ)throw new Error(I7);FC.AH=
this.B7;FC.Ag=null;if(!!this.B7)this.B7.Ag=FC;else this.B6=FC;this.B7=FC;FC.OZ=this;
},_Init:function(aArg){A.Core.Akh._Init.call(this,aArg);this.__proto__=C.ABb;},_Mark:
function(D){var B;A.Core.Akh._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.ArE={_Init:function(){C.ASw._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.FX.__proto__=C.ER;C.AEv.__proto__=C.ER;C.ALr.__proto__=C.ER;
C.MS.__proto__=C.ER;C.ArR.__proto__=C.Md;C.Av1.__proto__=C.Md;C.Aem.__proto__=C.
Md;C.ArS.__proto__=C.Md;C.ASw.__proto__=C.QW;C.AdD.__proto__=C.QW;C.AE4.__proto__=
C.QW;C.Aeu.__proto__=C.QW;C.AL5.__proto__=A.Core.Timer;C.ABb.__proto__=A.Core.Akh;
};C._ReInit=function(){var B;if((B=C.AdA._this))B._ReInit(),C.AdA._ReInit.call(B
);if((B=C.ArE._this))B._ReInit(),C.ArE._ReInit.call(B);};C.Dz=function(D){var B;
if((B=C.AdA._this)&&(B._cycle!=D))B._Done(C.AdA._this=null);if((B=C.ArE._this)&&(
B._cycle!=D))B._Done(C.ArE._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */