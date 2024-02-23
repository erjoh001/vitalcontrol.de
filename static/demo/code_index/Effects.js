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
var Ca=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var EW="The fader doesn\'t belong to this task";var Hh="Trying to add a fader to a task, which is actually running";
var I8="The fader belongs already to a task";
C.ER={MV:null,timer:null,Qi:null,Sm:null,AgW:null,S8:0,AiN:0,UR:0,O0:0,Azh:0.001,
Qe:0,D6:0,Dq:0,ANg:0.5,A4q:3,AwF:3,At6:0.5,Vw:3,AUc:0,AUb:0,JH:0,Ph:1000,Ps:0,VH:
0,Ahp:0,Bv:false,Aky:false,ATo:false,ApG:false,AKC:false,L_:function(G){var B;if(
!this.timer)return;if(!this.AiN){if(this.ATo)this.AiN=-1;else this.AiN=1;this.S8=
this.AiN;this.Dq=this.timer.Bt;this.D6=0;this.Qe=-1;}var Kv;if((this.AiN>0)&&(this.
S8>0))Kv=this.BzD();else if((this.AiN<0)&&(this.S8<0))Kv=this.BzG();else if(this.
AiN>0)Kv=this.BzE();else Kv=this.BzF();if(Kv){this.Ar(false);(B=this.Qi)?B[1].call(
B[0],this):null;(B=this.Sm)?B[1].call(B[0],this):null;}},AJ_:function(AL){var B;
if(!this.MV&&(((this.Ahp===19)||(this.Ahp===20))||(this.Ahp===21))){var AIK=this.
A4q+1;var Bw8=Math.sqrt(this.ANg);var Rv=0.5;var P;this.MV=A._NewObject(C.AF$,0);
this.MV.O9.Set(0,1);this.MV.AkY.Set(0,1);for(P=1;P<AIK;P=P+1){this.MV.O9.Set(P,this.
MV.O9.Get(P-1)*Bw8);this.MV.AkY.Set(P,this.MV.AkY.Get(P-1)*this.ANg);Rv=Rv+this.
MV.O9.Get(P);}var BxT=1/Rv;this.MV.O9.Set(0,0.5);Rv=0;for(P=0;P<AIK;P=P+1){this.
MV.O9.Set(P,this.MV.O9.Get(P)*BxT);Rv=Rv+this.MV.O9.Get(P);}this.MV.O9.Set(AIK,this.
MV.O9.Get(AIK)+(1-Rv));}if(this.Aky){if(AL<0.5)AL=AL*2;else AL=2-(AL*2);}switch(
this.Ahp){case 1:AL=Math.pow(AL,this.Vw);break;case 2:{AL=1-AL;AL=1-Math.pow(AL,
this.Vw);}break;case 3:{AL=AL*2;if(AL<1)AL=Math.pow(AL,this.Vw)/2;else{AL=2-AL;AL=(
2-Math.pow(AL,this.Vw))*0.5;}}break;case 4:AL=(Math.pow(2.718,this.Vw*AL)-1)/(Math.
pow(2.718,this.Vw)-1);break;case 5:{AL=1-AL;AL=1-((Math.pow(2.718,this.Vw*AL)-1)
/(Math.pow(2.718,this.Vw)-1));}break;case 6:{AL=AL*2;if(AL<1)AL=((Math.pow(2.718
,this.Vw*AL)-1)/(Math.pow(2.718,this.Vw)-1))/2;else{AL=2-AL;AL=(2-((Math.pow(2.718
,this.Vw*AL)-1)/(Math.pow(2.718,this.Vw)-1)))*0.5;}}break;case 7:AL=1-Math.cos((
AL*90)*A.k$);break;case 8:AL=Math.sin((AL*90)*A.k$);break;case 9:{AL=AL*2;if(AL<
1){AL=1-Math.cos((AL*90)*A.k$);AL=AL*0.5;}else{AL=2-AL;AL=1-Math.cos((AL*90)*A.k$
);AL=(2-AL)*0.5;}}break;case 10:AL=1-Math.sqrt(1-(AL*AL));break;case 11:{AL=1-AL;
AL=Math.sqrt(1-(AL*AL));}break;case 12:{AL=AL*2;if(AL<1){AL=1-Math.sqrt(1-(AL*AL
));AL=AL*0.5;}else{AL=2-AL;AL=1-Math.sqrt(1-(AL*AL));AL=(2-AL)*0.5;}}break;case 13:
AL=((AL*AL)*AL)-((AL*this.At6)*Math.sin((AL*180)*A.k$));break;case 14:{AL=1-AL;AL=((
AL*AL)*AL)-((AL*this.At6)*Math.sin((AL*180)*A.k$));AL=1-AL;}break;case 15:{AL=AL
*2;if(AL<1){AL=((AL*AL)*AL)-((AL*this.At6)*Math.sin((AL*180)*A.k$));AL=AL*0.5;}else{
AL=2-AL;AL=((AL*AL)*AL)-((AL*this.At6)*Math.sin((AL*180)*A.k$));AL=(2-AL)*0.5;}}
break;case 16:AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwF)))*A.k$);break;case
17:{AL=1-AL;AL=1-(((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwF)))*A.k$));}break;
case 18:{AL=AL*2;if(AL<1){AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwF)))*A.
k$);AL=AL*0.5;}else{AL=2-AL;AL=((AL*AL)*AL)*Math.sin(((AL*90)*(1+(4*this.AwF)))*
A.k$);AL=(2-AL)*0.5;}}break;case 19:{var BC=this.MV;var P=0;var Gv=0;var K0=BC.O9.
Get(0);var D1=1-AL;while(D1>K0){P=P+1;Gv=K0;K0=K0+BC.O9.Get(P);}AL=(D1-Gv)/(K0-Gv
);if(!P)AL=1-(AL*AL);else{AL=(2*AL)-1;AL=BC.AkY.Get(P)*(1-(AL*AL));}}break;case 20:{
var BC=this.MV;var P=0;var Gv=0;var K0=BC.O9.Get(0);while(AL>K0){P=P+1;Gv=K0;K0=
K0+BC.O9.Get(P);}AL=(AL-Gv)/(K0-Gv);if(!P)AL=AL*AL;else{AL=(2*AL)-1;AL=1-(BC.AkY.
Get(P)*(1-(AL*AL)));}}break;case 21:{var BC=this.MV;var P=0;var Gv=0;var K0=BC.O9.
Get(0);var LC=AL*2;var D1=LC-1;if(LC<1)D1=-D1;while(D1>K0){P=P+1;Gv=K0;K0=K0+BC.
O9.Get(P);}D1=(D1-Gv)/(K0-Gv);if(!P)D1=D1*D1;else{D1=(2*D1)-1;D1=1-(BC.AkY.Get(P
)*(1-(D1*D1)));}if(LC<1)AL=0.5*(1-D1);else AL=0.5*(1+D1);}break;default:if(this.
ApG){var LC=AL;var AzH=1-LC;AL=((AzH*LC)*(this.O0+1))+(LC*LC);}else if(this.AKC){
var LC=AL;var AzH=1-LC;var BbD=LC*LC;var Bx9=AzH*AzH;AL=(((Bx9*LC)*(this.O0+1))+((
AzH*BbD)*(this.UR+2)))+(BbD*LC);}}this.At$(AL);(B=this.AgW)?B[1].call(B[0],this):
null;},BzG:function(){var Au=(this.timer.Bt-this.Dq)|0;if(Au<0)Au=-Au;var Ly=this.
VH;var Oj=this.VH+this.Ph;var G7=this.Ps+this.Ph;var Kv=false;var D7=this.Qe;if(
!this.D6&&(Au>=Oj)){this.D6=1;Au=Au-Oj;this.Dq=this.Dq+Oj;}if((this.D6>0)&&(Au>=
G7)){var H_=(Au/G7)|0;this.D6=this.D6+H_;Au=Au-(H_*G7);this.Dq=this.Dq+(H_*G7);}
if((this.D6>2)&&!this.JH)this.D6=1;if(this.D6>0)Ly=this.Ps;if((this.D6>=this.JH)&&(
this.JH>0)){Kv=true;D7=0;}else if(Au>=Ly)D7=1-((Au-Ly)*this.Azh);else if(D7>=0)D7=
0;if(D7!==this.Qe){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.Qe){this.Qe=D7;this.AJ_(
D7);}return Kv;},BzF:function(){var Au=(this.Dq-this.timer.Bt)|0;var Ly=this.VH;
var Oj=this.VH+this.Ph;var G7=this.Ps+this.Ph;var Kv=false;var D7=this.Qe;if((this.
D6>1)&&(Au<0)){var H_=(((-Au+G7)-1)/G7)|0;if((this.D6-H_)<=0)H_=this.D6-1;this.D6=
this.D6-H_;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7);}if(((this.D6===1)&&(Au<0))&&(this.
JH>0)){this.D6=0;Au=Au+Oj;this.Dq=this.Dq+Oj;}if(((this.D6===1)&&(Au<0))&&!this.
JH){var H_=(((-Au+G7)-1)/G7)|0;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7);}if(this.D6>
0)Ly=this.Ps;if(Au<0){Kv=true;D7=1;}else if(Au>=Ly)D7=1-((Au-Ly)*this.Azh);else if(
D7>=0)D7=1;if(D7!==this.Qe){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.Qe){this.Qe=
D7;this.AJ_(D7);}return Kv;},BzE:function(){var Au=(this.Dq-this.timer.Bt)|0;var
Ly=this.VH;var Oj=this.VH+this.Ph;var G7=this.Ps+this.Ph;var Kv=false;var D7=this.
Qe;if((this.D6>1)&&(Au<0)){var H_=(((-Au+G7)-1)/G7)|0;if((this.D6-H_)<=0)H_=this.
D6-1;this.D6=this.D6-H_;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7);}if(((this.D6===1)&&(
Au<0))&&(this.JH>0)){this.D6=0;Au=Au+Oj;this.Dq=this.Dq+Oj;}if(((this.D6===1)&&(
Au<0))&&!this.JH){var H_=(((-Au+G7)-1)/G7)|0;Au=Au+(H_*G7);this.Dq=this.Dq+(H_*G7
);}if(this.D6>0)Ly=this.Ps;if(Au<0){Kv=true;D7=0;}else if(Au>=Ly)D7=(Au-Ly)*this.
Azh;else if(D7>=0)D7=0;if(D7!==this.Qe){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.
Qe){this.Qe=D7;this.AJ_(D7);}return Kv;},BzD:function(){var Au=(this.timer.Bt-this.
Dq)|0;if(Au<0)Au=-Au;var Ly=this.VH;var Oj=this.VH+this.Ph;var G7=this.Ps+this.Ph;
var Kv=false;var D7=this.Qe;if(!this.D6&&(Au>=Oj)){this.D6=1;Au=Au-Oj;this.Dq=this.
Dq+Oj;}if((this.D6>0)&&(Au>=G7)){var H_=(Au/G7)|0;this.D6=this.D6+H_;Au=Au-(H_*G7
);this.Dq=this.Dq+(H_*G7);}if((this.D6>2)&&!this.JH)this.D6=1;if(this.D6>0)Ly=this.
Ps;if((this.D6>=this.JH)&&(this.JH>0)){Kv=true;D7=1;}else if(Au>=Ly)D7=(Au-Ly)*this.
Azh;else if(D7>=0)D7=1;if(D7!==this.Qe){if(D7<0)D7=0;if(D7>1)D7=1;}if(D7!==this.
Qe){this.Qe=D7;this.AJ_(D7);}return Kv;},AeG:function(E){if(this.ATo===E)return;
this.ATo=E;if(!this.Bv||!this.AiN)return;if(E)this.S8=-1;else this.S8=1;this.Dq=(
this.timer.AuR()*2)-this.Dq;},AEk:function(E){if(E<0)E=0;if(E>1)E=1;this.ANg=E;}
,AD$:function(E){if(E<1)E=1;if(E>10)E=10;this.A4q=E;this.MV=null;},AEO:function(
E){if(E<1)E=1;if(E>10)E=10;this.AwF=E;},AD4:function(E){if(E<0)E=0;if(E>10)E=10;
this.At6=E;},Av2:function(E){if(E<1)E=1;if(E>100)E=100;this.Vw=E;},AE3:function(
E){if(this.AUc===E)return;this.AUc=E;if(this.Ahp===26){this.UR=E;this.ApG=(this.
O0===this.UR)&&!!this.O0;this.AKC=!this.ApG&&(this.O0!==this.UR);}},AE2:function(
E){if(this.AUb===E)return;this.AUb=E;if(this.Ahp===26){this.O0=E;this.ApG=(this.
O0===this.UR)&&!!this.O0;this.AKC=!this.ApG&&(this.O0!==this.UR);}},Wj:function(
E){if(this.Ahp===E)return;this.Ahp=E;this.MV=null;switch(E){case 24:{this.O0=-1.1;
this.UR=1.1;}break;case 22:{this.O0=-1;this.UR=-2;}break;case 23:{this.O0=2;this.
UR=1;}break;case 25:{this.O0=1.1;this.UR=-1.1;}break;case 0:{this.O0=0;this.UR=0;
}break;default:{this.O0=this.AUb;this.UR=this.AUc;}}this.ApG=(this.O0===this.UR)&&
!!this.O0;this.AKC=!this.ApG&&(this.O0!==this.UR);},HG:function(E){if(E<0)E=0;this.
JH=E;},Fe:function(E){if(E<15)E=15;this.Ph=E;this.Azh=1/E;},T$:function(E){if(E<
0)E=0;this.Ps=E;},Akc:function(E){if(E<0)E=0;this.VH=E;},Ar:function(E){if(this.
Bv===E)return;this.Bv=E;if(!E&&!!this.timer){A.z9([this,this.L_],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.AdT);A.zV([this,this.L_],this.timer
,0);this.AiN=0;A.pe([this,this.L_],this);}},At$:function(ZZ){},Anx:function(G){this.
Ar(false);},Anv:function(G){if(this.Bv)this.Ar(false);this.Ar(true);},_Init:function(
aArg){this.__proto__=C.ER;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.MV)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Qi)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sm)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AgW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};C.Ga={Q:null,A6:0,B0:255,Cs:0,At$:function(ZZ){var F;this.A6=
this.Cs+(Math.round((this.B0-this.Cs)*ZZ)|0);if(!!this.Q)(F=this.Q,F[2].call(F[0
],this.A6));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.__proto__=C.Ga;
},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AFn={Q:null,A6:A.
wf,B0:Ca,Cs:A.wf,At$:function(ZZ){var F;var Eg=this.Cs[0];var Da=this.Cs[1];Eg=Eg+(
Math.round((this.B0[0]-Eg)*ZZ)|0);Da=Da+(Math.round((this.B0[1]-Da)*ZZ)|0);this.
A6=[Eg,Da];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A6));},_Init:function(aArg){
C.ER._Init.call(this,aArg);this.__proto__=C.AFn;},_Mark:function(D){var B;C.ER._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::PointEffect"};C.AMz={Q:null,A6:0,B0:0xFFFFFFFF,Cs:0,At$:function(ZZ){var
F;var O7=this.Cs&0xFF;var Z$=(this.Cs>>8)&0xFF;var Ak4=(this.Cs>>16)&0xFF;var AkX=(
this.Cs>>24)&0xFF;O7=O7+((((this.B0&0xFF)-O7)*ZZ)|0);Z$=Z$+(((((this.B0>>8)&0xFF
)-Z$)*ZZ)|0);Ak4=Ak4+(((((this.B0>>16)&0xFF)-Ak4)*ZZ)|0);AkX=AkX+(((((this.B0>>24
)&0xFF)-AkX)*ZZ)|0);if(O7<0)O7=0;if(O7>255)O7=255;if(Z$<0)Z$=0;if(Z$>255)Z$=255;
if(Ak4<0)Ak4=0;if(Ak4>255)Ak4=255;if(AkX<0)AkX=0;if(AkX>255)AkX=255;this.A6=(O7&
0xFF)|((Z$&0xFF)<<8)|((Ak4&0xFF)<<16)|((AkX&0xFF)<<24);if(!!this.Q)(F=this.Q,F[2
].call(F[0],this.A6));},_Init:function(aArg){C.ER._Init.call(this,aArg);this.__proto__=
C.AMz;},_Mark:function(D){var B;C.ER._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::ColorEffect"};C.M4={A6:0,B0:
1,Cs:0,At$:function(ZZ){this.A6=this.Cs+((this.B0-this.Cs)*ZZ);},_Init:function(
aArg){C.ER._Init.call(this,aArg);this.__proto__=C.M4;},_className:"Effects::FloatEffect"
};C.Tw={timer:null,Q:null,D6:0,Dq:0,JH:0,Ph:1000,Ps:1000,VH:0,Bv:false,Cs:false,
B0:true,L_:function(G){var F;if(!this.timer)return;if(this.D6<0){this.Dq=this.timer.
Bt;this.D6=0;}var Au=(this.timer.Bt-this.Dq)|0;var Oj=this.VH+this.Ph;var G7=this.
Ps+this.Ph;var Ly=this.VH;var Ja=this.D6;if(!Ja&&(Au>=Oj)){Ja=1;Au=Au-Oj;}if((Ja>
0)&&(Au>=G7)){var H_=(Au/G7)|0;Au=Au-(H_*G7);Ja=Ja+H_;}if((Ja>2)&&!this.JH)Ja=1;
if(Ja!==this.D6){this.Dq=this.timer.Bt-(((B=Au)<0)?B+0x100000000:B);this.D6=Ja;}
if(Ja>0)Ly=this.Ps;var Kv=(Ja>=this.JH)&&(this.JH>0);if(!!this.Q){if(!Kv&&(Au>=Ly
))(F=this.Q,F[2].call(F[0],this.Cs));if(Kv||((Au<Ly)&&(Ja>0)))(F=this.Q,F[2].call(
F[0],this.B0));}if(Kv)this.Ar(false);},HG:function(E){if(E<0)E=0;this.JH=E;},Fe:
function(E){if(E<100)E=100;this.Ph=E;},T$:function(E){if(E<0)E=0;this.Ps=E;},Akc:
function(E){if(E<0)E=0;this.VH=E;},Ar:function(E){if(this.Bv===E)return;this.Bv=
E;if(!E&&!!this.timer){A.z9([this,this.L_],this.timer,0);this.timer=null;}if(E){
this.timer=A._GetAutoObject(C.AdT);A.zV([this,this.L_],this.timer,0);this.D6=-1;
}},Anx:function(G){this.Ar(false);},Anv:function(G){if(this.Bv)this.Ar(false);this.
Ar(true);},_Init:function(aArg){this.__proto__=C.Tw;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.Mi={O_:null,AH:null,Ag:null
,Ab:null,O:null,AJM:null,A1X:null,Aj5:null,Do:true,Bv:true,Acl:true,AiZ:false,Ai8:
true,Zf:true,QX:true,Mg:function(){if(!!this.O_)this.O_.Mg();},Avg:function(){return true;
},Y2:function(){},Ss:function(){this.Mg();},_Init:function(aArg){this.__proto__=
C.Mi;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){}
,_Mark:function(D){var B;if((B=this.O_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AJM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A1X)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aj5)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Asc={ArE:A.wf
,MO:false,Avg:function(){return this.MO;},Y2:function(){if(!this.Do&&!!this.O.Ab
)this.O.Y(false);if((!this.Do&&this.QX)&&!!this.O.Ab)this.O.Ab.HI(this.O);if(!this.
Bv)this.O.Ar(false);},Ss:function(){if(this.Bv)this.O.Ar(true);if((this.Do||this.
AiZ)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Do&&this.Zf)this.
O.Ab.Ze(this.O);if(this.Do&&this.Ai8)this.O.Ab.A8(this.O);if(this.Do&&!this.Acl)
this.O.H(A.abJ(this.O.M,this.ArE));if(this.Do){this.O.Dm(255);this.O.Y(true);}if(
!this.Do&&(this.Ab.AR===this.O))this.Ab.A8(null);this.MO=true;this.Mg();},_Init:
function(aArg){C.Mi._Init.call(this,aArg);this.__proto__=C.Asc;},_className:"Effects::VisibilityFader"
};C.AwB={ER:null,MO:false,ApJ:false,Avg:function(){return this.MO;},Y2:function(
){if(this.Do)this.O.Dm(this.ER.B0);if(!this.Do&&!this.O.GY)this.O.Y(false);if((!
this.Do&&this.QX)&&!!this.O.Ab)this.O.Ab.HI(this.O);if(!this.Bv)this.O.Ar(false);
},Ss:function(){var B;if(this.Acl){if(this.O.Fd()&&!!this.O.Ab)this.ER.Cs=this.O.
GY;else this.ER.Cs=0;}var Azk=((!this.O.Ab||!this.O.GY)||!this.O.Fd())||(((B=A.lb(
this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Azl=((
!this.Do&&((!this.O.Ab||!this.O.Fd())||this.QX))||!this.ER.B0)||(((B=A.lb(this.O.
M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azk&&Azl){
this.ER.Cs=0;this.ER.B0=0;}this.ApJ=this.O.ARz();if(this.Bv)this.O.Ar(true);if((
this.Do||this.AiZ)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Do&&
this.Zf)this.O.Ab.Ze(this.O);if(this.Do&&this.Ai8)this.O.Ab.A8(this.O);if(!this.
Do&&(this.Ab.AR===this.O))this.Ab.A8(null);if(this.Do&&!this.O.Fd()){this.O.Dm(this.
ER.Cs);this.O.Y(true);}if(!this.Do&&((!this.O.Ab||!this.O.Fd())||!this.O.GY)){this.
MO=true;this.Mg();return;}if(!this.Do&&(this.ER.Cs===this.ER.B0))this.O.Dm(this.
ER.Cs);if(this.O.GY===this.ER.B0){this.MO=true;this.Mg();return;}if(this.ER.Cs===
this.ER.B0){this.MO=true;this.Mg();return;}if(!this.ER.JH)this.ER.HG(1);this.ER.
Q=[B=this.O,B.AvH,B.AY$];this.ER.AeG(false);this.ER.Aky=false;this.ER.Sm=[this,this.
Air];this.ER.AgW=null;this.ER.Ar(true);},Air:function(G){this.MO=true;this.Mg();
},_Init:function(aArg){C.Mi._Init.call(this,aArg);C.Ga._Init.call(this.ER={I:this
},0);this.__proto__=C.AwB;},_Done:function(){this.__proto__=C.Mi;this.ER._Done();
C.Mi._Done.call(this);},_ReInit:function(){C.Mi._ReInit.call(this);this.ER._ReInit(
);},_Mark:function(D){var B;C.Mi._Mark.call(this,D);if((B=this.ER)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Effects::OpacityFader"};C.AeJ={Ck:null,D4:null,AdH:false
,MO:false,ApJ:false,Avg:function(){return this.MO;},Y2:function(){if(this.Do){this.
O.Dm(this.Ck.B0);this.O.H(A.abJ(this.O.M,this.D4.B0));}if(!this.Do&&!this.O.GY)this.
O.Y(false);if((!this.Do&&this.QX)&&!!this.O.Ab)this.O.Ab.HI(this.O);if(this.AdH)
this.O.Aq9(this.ApJ);if(!this.Bv)this.O.Ar(false);},Ss:function(){var B;if(this.
Acl){if(this.O.Fd()&&!!this.O.Ab)this.Ck.Cs=this.O.GY;else this.Ck.Cs=0;this.D4.
Cs=this.O.M.slice(0,2);}var Azk=((!this.O.Ab||!this.O.GY)||!this.O.Fd())||(((B=A.
lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var
Azl=((!this.Do&&((!this.O.Ab||!this.O.Fd())||this.QX))||!this.Ck.B0)||(((B=A.lb(
A.abh([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]],this.D4.B0),[0,0,(B=this.Ab.M)[2]-B[0
],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azk&&Azl){this.Ck.Cs=0;this.Ck.B0=0;this.
D4.Cs=this.D4.B0;}this.ApJ=this.O.ARz();if(this.Bv)this.O.Ar(true);if((this.Do||
this.AiZ)&&!this.O.Ab){this.O.Y(false);this.Ab.J(this.O,0);}if(this.Do&&this.Zf)
this.O.Ab.Ze(this.O);if(this.Do&&this.Ai8)this.O.Ab.A8(this.O);if(!this.Do&&(this.
Ab.AR===this.O))this.Ab.A8(null);if(this.Do&&!this.O.Fd()){this.O.H(A.abJ(this.O.
M,this.D4.Cs));this.O.Dm(this.Ck.Cs);this.O.Y(true);}if(!this.Do&&((!this.O.Ab||
!this.O.Fd())||!this.O.GY)){this.MO=true;this.Mg();return;}if(!this.Do&&A.aaX(this.
D4.Cs,this.D4.B0))this.O.H(A.abJ(this.O.M,this.D4.Cs));if(!this.Do&&(this.Ck.Cs===
this.Ck.B0))this.O.Dm(this.Ck.Cs);if((this.O.GY===this.Ck.B0)&&A.aaX(this.O.M.slice(
0,2),this.D4.B0)){this.MO=true;this.Mg();return;}if((this.Ck.Cs===this.Ck.B0)&&A.
aaX(this.D4.Cs,this.D4.B0)){this.MO=true;this.Mg();return;}if(!this.Ck.JH)this.Ck.
HG(1);if(!this.D4.JH)this.D4.HG(1);if(this.AdH)this.O.Aq9(true);this.D4.Q=null;this.
D4.AeG(false);this.D4.Aky=false;this.D4.Sm=[this,this.Air];this.D4.AgW=[this,this.
AzQ];this.Ck.Q=[B=this.O,B.AvH,B.AY$];this.Ck.AeG(false);this.Ck.Aky=false;this.
Ck.Sm=[this,this.Air];this.Ck.AgW=null;this.D4.Ar(!A.aaX(this.D4.Cs,this.D4.B0));
this.Ck.Ar(this.Ck.Cs!==this.Ck.B0);},Air:function(G){this.MO=!this.Ck.Bv&&!this.
D4.Bv;this.Mg();},AzQ:function(G){this.O.H(A.abJ(this.O.M,this.D4.A6));},_Init:function(
aArg){C.Mi._Init.call(this,aArg);C.Ga._Init.call(this.Ck={I:this},0);C.AFn._Init.
call(this.D4={I:this},0);this.__proto__=C.AeJ;},_Done:function(){this.__proto__=
C.Mi;this.Ck._Done();this.D4._Done();C.Mi._Done.call(this);},_ReInit:function(){
C.Mi._ReInit.call(this);this.Ck._ReInit();this.D4._ReInit();},_Mark:function(D){
var B;C.Mi._Mark.call(this,D);if((B=this.Ck)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"};C.
Asd={Ado:null,Ck:null,G0:null,V2:null,FF:null,Ug:A.wf,Akm:A.wf,MO:false,ApJ:false
,Avg:function(){return this.MO;},Y2:function(){if(this.Do){this.O.Dm(this.Ck.B0);
this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Ug));this.O.Y(true);}if(!this.
Do&&!this.Ck.B0){this.O.Dm(0);this.O.Y(false);}if(((!this.Do&&(this.Ck.B0>0))&&!
!this.O.Ab)&&!this.QX){this.O.Dm(this.Ck.B0);this.O.H(A.abh(A.abg(this.O.M,A.aaI(
this.O.M)),this.Ug));this.O.Y(true);}if((!this.Do&&this.QX)&&!!this.O.Ab)this.O.
Ab.HI(this.O);this.O.Aq9(this.ApJ);if(!!this.Ado)this.Ab.HI(this.Ado);if(!this.Bv
)this.O.Ar(false);},Ss:function(){var B;if(this.Acl){if(this.O.Fd()&&!!this.O.Ab
)this.Ck.Cs=this.O.GY;else this.Ck.Cs=0;this.Akm=A.aaI(this.O.M);}var Azk=((!this.
O.Ab||!this.O.GY)||!this.O.Fd())||(((B=A.lb(this.O.M,[0,0,(B=this.Ab.M)[2]-B[0],
B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var Azl=((!this.Do&&((!this.O.Ab||!this.O.
Fd())||this.QX))||!this.Ck.B0)||(((B=A.lb(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),
this.Ug),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(Azk&&
Azl){this.Ck.Cs=0;this.Ck.B0=0;this.Akm=this.Ug;this.V2.A6x();}this.ApJ=this.O.ARz(
);if(this.Bv)this.O.Ar(true);if((this.Do||this.AiZ)&&!this.O.Ab){this.O.Y(false);
this.Ab.J(this.O,0);}if(this.Do&&this.Zf)this.O.Ab.Ze(this.O);if(this.Do&&this.Ai8
)this.O.Ab.A8(this.O);if(!this.Do&&(this.Ab.AR===this.O))this.Ab.A8(null);if(this.
Do&&!this.O.Fd())this.O.Dm(this.Ck.Cs);if((!this.Do&&A.aaX(this.Akm,this.Ug))&&this.
V2.AC_())this.O.H(A.abh(A.abg(this.O.M,A.aaI(this.O.M)),this.Akm));if(!this.Do&&(
this.Ck.Cs===this.Ck.B0))this.O.Dm(this.Ck.Cs);if(!this.Do&&((!this.O.Ab||!this.
O.Fd())||!this.O.GY)){this.MO=true;this.Mg();return;}if(((this.Do&&(this.O.GY===
this.Ck.B0))&&A.aaX(A.aaI(this.O.M),this.Ug))&&this.O.Fd()){this.MO=true;this.Mg(
);return;}if(((!this.Do&&(this.O.GY===this.Ck.B0))&&A.aaX(A.aaI(this.O.M),this.Ug
))&&this.V2.AC_()){this.MO=true;this.Mg();return;}if(((this.Ck.Cs===this.Ck.B0)&&
A.aaX(this.Akm,this.Ug))&&this.V2.AC_()){this.MO=true;this.Mg();return;}this.O.Aq9(
true);this.O.Y(false);this.Ado=A._NewObject(A.acg.AUz,0);this.Ado.BkZ(this.O);this.
Ado.Dm(this.Ck.Cs);this.Ado.BlP(A.aaI([0,0,(B=this.O.M)[2]-B[0],B[3]-B[1]]));this.
O.Ab.ALi(this.Ado,this.O);if(!this.Ck.JH)this.Ck.HG(1);if(!this.G0.JH)this.G0.HG(
1);this.G0.AeG(false);this.G0.Aky=false;this.G0.Sm=[this,this.Air];this.G0.AgW=[
this,this.AzQ];if(this.Do){this.G0.Cs=0;this.G0.B0=1;}else{this.G0.Cs=1;this.G0.
B0=0;}this.Ck.Q=[B=this.Ado,B.AvH,B.Dm];this.Ck.AeG(false);this.Ck.Aky=false;this.
Ck.Sm=[this,this.Air];this.Ck.AgW=null;this.G0.Ar(!A.aaX(this.Akm,this.Ug)||!this.
V2.AC_());this.Ck.Ar(this.Ck.Cs!==this.Ck.B0);},Air:function(G){this.MO=!this.Ck.
Bv&&!this.G0.Bv;this.Mg();},AzQ:function(G){var B;var AAF=A.abe(this.Ug,this.Akm
);if(!this.Do)AAF=[-AAF[0],-AAF[1]];this.FF.A6x();this.FF.Agt=this.V2.Agt;this.FF.
Bn_(AAF[0],AAF[1],0);this.FF.BhJ(this.V2,this.FF,this.G0.A6);if(this.Do)this.Ado.
A_E(this.Akm,this.FF);else this.Ado.A_E(this.Ug,this.FF);},_Init:function(aArg){
C.Mi._Init.call(this,aArg);C.Ga._Init.call(this.Ck={I:this},0);C.M4._Init.call(this.
G0={I:this},0);A.Graphics.Axh._Init.call(this.V2={I:this},0);A.Graphics.Axh._Init.
call(this.FF={I:this},0);this.__proto__=C.Asd;},_Done:function(){this.__proto__=
C.Mi;this.Ck._Done();this.G0._Done();this.V2._Done();this.FF._Done();C.Mi._Done.
call(this);},_ReInit:function(){C.Mi._ReInit.call(this);this.Ck._ReInit();this.G0.
_ReInit();this.V2._ReInit();this.FF._ReInit();},_Mark:function(D){var B;C.Mi._Mark.
call(this,D);if((B=this.Ado)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Q6={RY:function(){return null;},RX:function(
){return null;},AdN:function(){return this.RY();},AdM:function(){return this.RX(
);},_Init:function(aArg){this.__proto__=C.Q6;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.ATO={RY:function(){var Ao=A._NewObject(C.Asc,0);Ao.Do=true;Ao.Bv=true;Ao.Ai8=
false;Ao.Zf=true;Ao.Acl=false;Ao.Aj5=[this,this.Aph];return Ao;},RX:function(){var
Ao=A._NewObject(C.Asc,0);Ao.Do=false;Ao.Bv=false;Ao.QX=true;return Ao;},AdN:function(
){var Ao=C.Q6.AdN.call(this);Ao.Zf=false;Ao.Bv=true;return Ao;},AdM:function(){var
Ao=A._NewObject(C.Asc,0);Ao.Do=false;Ao.Bv=true;Ao.AiZ=true;Ao.QX=false;return Ao;
},Aph:function(G){var B;var Ao=(C.Asc.isPrototypeOf(G)?G:null);var A_=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C0=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(
0,2);pos=[(A_[0]+(((A_[2]-A_[0])/2)|0))-((C0[0]/2)|0),pos[1]];pos=[pos[0],(A_[1]+(((
A_[3]-A_[1])/2)|0))-((C0[1]/2)|0)];Ao.ArE=pos;},_Init:function(aArg){C.Q6._Init.
call(this,aArg);this.__proto__=C.ATO;},_className:"Effects::ShowHideTransition"};
C.AdX={ABU:500,RY:function(){var Ao=A._NewObject(C.AeJ,0);Ao.Do=true;Ao.Bv=true;
Ao.Ai8=false;Ao.Zf=true;Ao.Acl=true;Ao.AdH=false;Ao.Aj5=[this,this.Aph];Ao.Ck.Fe(
this.ABU);Ao.Ck.Cs=0;Ao.Ck.B0=255;Ao.D4.Fe(this.ABU);Ao.D4.Wj(23);return Ao;},RX:
function(){var Ao=A._NewObject(C.AwB,0);Ao.Do=false;Ao.Bv=false;Ao.QX=true;Ao.Acl=
true;Ao.ER.Cs=255;Ao.ER.B0=0;Ao.ER.Fe(this.ABU);return Ao;},AdN:function(){var Ao=
C.Q6.AdN.call(this);Ao.Zf=false;Ao.Bv=true;return Ao;},AdM:function(){var Ao=C.Q6.
AdM.call(this);Ao.AiZ=true;Ao.QX=false;Ao.Bv=true;return Ao;},Aph:function(G){var
B;var Ao=(C.AeJ.isPrototypeOf(G)?G:null);var A_=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C0=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(0,2);pos=[(A_[0]+(((A_[
2]-A_[0])/2)|0))-((C0[0]/2)|0),pos[1]];pos=[pos[0],(A_[1]+(((A_[3]-A_[1])/2)|0))-((
C0[1]/2)|0)];Ao.D4.B0=pos;if(((!Ao.O.Ab||!Ao.O.Fd())||!Ao.O.GY)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.O.H(A.abJ(Ao.
O.M,pos));},_Init:function(aArg){C.Q6._Init.call(this,aArg);this.__proto__=C.AdX;
},_className:"Effects::FadeInOutTransition"};C.AFY={J5:0x12,Auq:0,AdH:false,RY:function(
){var Ao=A._NewObject(C.AeJ,0);Ao.Do=true;Ao.Bv=true;Ao.Ai8=false;Ao.Zf=true;Ao.
Acl=true;Ao.AdH=this.AdH;Ao.Aj5=[this,this.Aph];Ao.Ck.Fe(500);Ao.Ck.Akc(0);Ao.Ck.
Cs=0;Ao.Ck.B0=255;Ao.D4.Fe(500);Ao.D4.Wj(23);Ao.D4.AE2(0);Ao.D4.AE3(0);Ao.D4.Av2(
3);Ao.D4.AD4(0.5);Ao.D4.AEO(3);Ao.D4.AD$(3);Ao.D4.AEk(0.5);return Ao;},RX:function(
){var Ao=A._NewObject(C.AeJ,0);Ao.Do=false;Ao.Bv=false;Ao.QX=true;Ao.Acl=true;Ao.
AdH=this.AdH;Ao.Aj5=[this,this.A19];Ao.Ck.Cs=255;Ao.Ck.B0=0;Ao.Ck.Fe(500);Ao.Ck.
Akc(0);Ao.D4.Fe(500);Ao.D4.Wj(23);Ao.D4.AE2(0);Ao.D4.AE3(0);Ao.D4.Av2(3);Ao.D4.AD4(
0.5);Ao.D4.AEO(3);Ao.D4.AD$(3);Ao.D4.AEk(0.5);return Ao;},AdN:function(){var Ao=
C.Q6.AdN.call(this);Ao.Zf=false;Ao.Bv=true;return Ao;},AdM:function(){var Ao=C.Q6.
AdM.call(this);Ao.AiZ=true;Ao.QX=false;Ao.Bv=true;return Ao;},Aph:function(G){var
B;var Ao=(C.AeJ.isPrototypeOf(G)?G:null);var Bs=this.J5;var A_=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C0=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(0,2);if(((
Bs&0x4)===0x4))pos=[A_[2]-C0[0],pos[1]];else if(((Bs&0x2)===0x2))pos=[(A_[0]+(((
A_[2]-A_[0])/2)|0))-((C0[0]/2)|0),pos[1]];if(((Bs&0x20)===0x20))pos=[pos[0],A_[3
]-C0[1]];else if(((Bs&0x10)===0x10))pos=[pos[0],(A_[1]+(((A_[3]-A_[1])/2)|0))-((
C0[1]/2)|0)];Ao.D4.B0=pos;if(((!Ao.O.Ab||!Ao.O.Fd())||!Ao.O.GY)||(((B=A.lb(Ao.O.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var Ht=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Auq){case 5:pos=[pos[0],-C0[1]];break;case 3:{
pos=[pos[0],-C0[1]];pos=[Ht[0],pos[1]];}break;case 8:pos=[-C0[0],-C0[1]];break;case
2:pos=[Ht[0],pos[1]];break;case 7:pos=[-C0[0],pos[1]];break;case 4:pos=[pos[0],Ht[
1]];break;case 1:{pos=[pos[0],Ht[1]];pos=[Ht[0],pos[1]];}break;case 6:{pos=[pos[
0],Ht[1]];pos=[-C0[0],pos[1]];}break;default:;}Ao.O.H(A.abJ(Ao.O.M,pos));}},A19:
function(G){var B;var Ao=(C.AeJ.isPrototypeOf(G)?G:null);var pos=Ao.O.M.slice(0,
2);var C0=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var Ht=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Auq){case 5:pos=[pos[0],Ht[1]];break;case 3:{pos=[pos[0],Ht[1]];pos=[-
C0[0],pos[1]];}break;case 8:{pos=[pos[0],Ht[1]];pos=[Ht[0],pos[1]];}break;case 2:
pos=[-C0[0],pos[1]];break;case 7:pos=[Ht[0],pos[1]];break;case 4:pos=[pos[0],-C0[
1]];break;case 1:pos=[-C0[0],-C0[1]];break;case 6:{pos=[pos[0],-C0[1]];pos=[Ht[0
],pos[1]];}break;default:;}Ao.D4.B0=pos;},_Init:function(aArg){C.Q6._Init.call(this
,aArg);this.__proto__=C.AFY;},_className:"Effects::SlideTransition"};C.AeR={RY:function(
){var Ao=A._NewObject(C.Asd,0);Ao.Do=true;Ao.Bv=true;Ao.Ai8=false;Ao.Zf=true;Ao.
Acl=true;Ao.Aj5=[this,this.Aph];Ao.Ck.Fe(500);Ao.Ck.Akc(0);Ao.Ck.Cs=0;Ao.Ck.B0=255;
Ao.G0.Fe(500);Ao.G0.Wj(23);Ao.G0.AE2(0);Ao.G0.AE3(0);Ao.G0.Av2(3);Ao.G0.AD4(0.5);
Ao.G0.AEO(3);Ao.G0.AD$(3);Ao.G0.AEk(0.5);Ao.V2.AeQ(0.5,0.5,1);return Ao;},RX:function(
){var Ao=A._NewObject(C.Asd,0);Ao.Do=false;Ao.Bv=false;Ao.QX=true;Ao.Acl=true;Ao.
Aj5=[this,this.A19];Ao.Ck.Cs=255;Ao.Ck.B0=0;Ao.Ck.Fe(500);Ao.Ck.Akc(0);Ao.G0.Fe(
500);Ao.G0.Wj(23);Ao.G0.AE2(0);Ao.G0.AE3(0);Ao.G0.Av2(3);Ao.G0.AD4(0.5);Ao.G0.AEO(
3);Ao.G0.AD$(3);Ao.G0.AEk(0.5);Ao.V2.AeQ(0.5,0.5,1);return Ao;},AdN:function(){var
Ao=C.Q6.AdN.call(this);Ao.Zf=false;Ao.Bv=true;return Ao;},AdM:function(){var Ao=
C.Q6.AdM.call(this);Ao.AiZ=true;Ao.QX=false;Ao.Bv=true;return Ao;},Aph:function(
G){var B;var Ao=(C.Asd.isPrototypeOf(G)?G:null);var A_=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C0=[(B=Ao.O.M)[2]-B[0],B[3]-B[1]];var pos=A_.slice(0,2);pos=[(A_[
0]+(((A_[2]-A_[0])/2)|0))-((C0[0]/2)|0),pos[1]];pos=[pos[0],(A_[1]+(((A_[3]-A_[1
])/2)|0))-((C0[1]/2)|0)];Ao.Ug=A.abf(pos,[(C0[0]/2)|0,(C0[1]/2)|0]);if(((!Ao.O.Ab||
!Ao.O.Fd())||!Ao.O.GY)||(((B=A.lb(Ao.O.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.O.H(A.abJ(Ao.O.M,A.abe(Ao.Ug,A.aaI([0,0,(B=Ao.O.M)[2]-
B[0],B[3]-B[1]]))));},A19:function(G){var Ao=(C.Asd.isPrototypeOf(G)?G:null);Ao.
Ug=A.aaI(Ao.O.M);},_Init:function(aArg){C.Q6._Init.call(this,aArg);this.__proto__=
C.AeR;},_className:"Effects::ScaleTransition"};C.Ahp={BCv:0,BDa:1,BDc:2,BDb:3,BBS:
4,BBU:5,BBT:6,BDG:7,BDI:8,BDH:9,BBn:10,BBp:11,BBo:12,BA5:13,BA7:14,BA6:15,BBJ:16
,BBL:17,BBK:18,BBe:19,BBg:20,BBf:21,BBI:22,BBW:23,BBH:24,BBX:25,BBu:26};C.BBB={A3L:
0x1,A3K:0x2,A3M:0x4,A3P:0x8,A3O:0x10,A3N:0x20};C.ANf={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.ANf;},_className:"Effects::EffectTimerClass"};C.
AdT={_Init:function(){C.ANf._Init.call(this,0);this.PJ(15);this.Ar(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AF$={O9:A.abi(12,0
,null),AkY:A.abi(12,0,null),_Init:function(aArg){(this.O9=[]).__proto__=C.AF$.O9;(
this.AkY=[]).__proto__=C.AF$.AkY;this.__proto__=C.AF$;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.AB1={B8:null,B7:null,A7a:function(AsS){var Ao=this.B7;while(
!!Ao){Ao.Y2();Ao.O.T=Ao.O.T&~0x40000;Ao=Ao.Ag;}Ao=this.B7;while(!!Ao){A.pe(Ao.A1X
,Ao);Ao=Ao.Ag;}},A6$:function(AsS){var Ao=this.B7;while(!!Ao){A.pe(Ao.AJM,Ao);Ao=
Ao.Ag;}this.B7=null;this.B8=null;},Ss:function(AsS){var B;if(!this.B7)this.Mg();
var Ao=this.B7;while(!!Ao){Ao.O.T=(Ao.O.T|0x40000)&~0x20000;Ao.O.Apo=null;Ao=Ao.
Ag;}Ao=this.B7;while(!!Ao){(B=Ao.Aj5)?B[1].call(B[0],Ao):null;Ao.Ss();Ao=Ao.Ag;}
},Mg:function(){var Ao=this.B7;while(!!Ao&&Ao.Avg())Ao=Ao.Ag;if(!Ao)A.Core.Akz.Mg.
call(this);},BmE:function(FE){if(!FE)return;if(this.AQi())throw new Error(BD);if(
FE.O_!==this)throw new Error(EW);if(!!FE.Ag)FE.Ag.AH=FE.AH;else this.B8=FE.AH;if(
!!FE.AH)FE.AH.Ag=FE.Ag;else this.B7=FE.Ag;FE.O_=null;FE.Ag=null;FE.AH=null;if(!!
FE.O)FE.O.Apo=null;A.pe(FE.AJM,FE);if(!this.B7)this.Ama();},A3E:function(FE){if(
!FE)return;if(this.AQi())throw new Error(Hh);if(!!FE.O_)throw new Error(I8);FE.AH=
this.B8;FE.Ag=null;if(!!this.B8)this.B8.Ag=FE;else this.B7=FE;this.B8=FE;FE.O_=this;
},_Init:function(aArg){A.Core.Akz._Init.call(this,aArg);this.__proto__=C.AB1;},_Mark:
function(D){var B;A.Core.Akz._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.Ar1={_Init:function(){C.ATO._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Ga.__proto__=C.ER;C.AFn.__proto__=C.ER;C.AMz.__proto__=C.ER;
C.M4.__proto__=C.ER;C.Asc.__proto__=C.Mi;C.AwB.__proto__=C.Mi;C.AeJ.__proto__=C.
Mi;C.Asd.__proto__=C.Mi;C.ATO.__proto__=C.Q6;C.AdX.__proto__=C.Q6;C.AFY.__proto__=
C.Q6;C.AeR.__proto__=C.Q6;C.ANf.__proto__=A.Core.Timer;C.AB1.__proto__=A.Core.Akz;
};C._ReInit=function(){var B;if((B=C.AdT._this))B._ReInit(),C.AdT._ReInit.call(B
);if((B=C.Ar1._this))B._ReInit(),C.Ar1._ReInit.call(B);};C.Dz=function(D){var B;
if((B=C.AdT._this)&&(B._cycle!=D))B._Done(C.AdT._this=null);if((B=C.Ar1._this)&&(
B._cycle!=D))B._Done(C.Ar1._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */