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
var Cf=[100,100];var BD="Trying to remove a fader from a task, which is actually running";
var E8="The fader doesn\'t belong to this task";var Hs="Trying to add a fader to a task, which is actually running";
var I0="The fader belongs already to a task";
C.E0={M8:null,timer:null,Qz:null,SI:null,Ahq:null,Tr:0,Ajb:0,Vi:0,Pg:0,AAd:0.001,
Qv:0,Ec:0,Dx:0,AOg:0.5,A50:3,Axw:3,AuR:0.5,V4:3,AVE:0,AVD:0,JX:0,Py:1000,PH:0,Wb:
0,AhS:0,Bw:false,AkZ:false,AUO:false,Aqd:false,ALF:false,Mm:function(G){var B;if(
!this.timer)return;if(!this.Ajb){if(this.AUO)this.Ajb=-1;else this.Ajb=1;this.Tr=
this.Ajb;this.Dx=this.timer.Bs;this.Ec=0;this.Qv=-1;}var KJ;if((this.Ajb>0)&&(this.
Tr>0))KJ=this.BCd();else if((this.Ajb<0)&&(this.Tr<0))KJ=this.BCg();else if(this.
Ajb>0)KJ=this.BCe();else KJ=this.BCf();if(KJ){this.As(false);(B=this.Qz)?B[1].call(
B[0],this):null;(B=this.SI)?B[1].call(B[0],this):null;}},AK$:function(AN){var B;
if(!this.M8&&(((this.AhS===19)||(this.AhS===20))||(this.AhS===21))){var AJM=this.
A50+1;var BzD=Math.sqrt(this.AOg);var RR=0.5;var O;this.M8=A._NewObject(C.AHf,0);
this.M8.Pp.Set(0,1);this.M8.Alv.Set(0,1);for(O=1;O<AJM;O=O+1){this.M8.Pp.Set(O,this.
M8.Pp.Get(O-1)*BzD);this.M8.Alv.Set(O,this.M8.Alv.Get(O-1)*this.AOg);RR=RR+this.
M8.Pp.Get(O);}var BAr=1/RR;this.M8.Pp.Set(0,0.5);RR=0;for(O=0;O<AJM;O=O+1){this.
M8.Pp.Set(O,this.M8.Pp.Get(O)*BAr);RR=RR+this.M8.Pp.Get(O);}this.M8.Pp.Set(AJM,this.
M8.Pp.Get(AJM)+(1-RR));}if(this.AkZ){if(AN<0.5)AN=AN*2;else AN=2-(AN*2);}switch(
this.AhS){case 1:AN=Math.pow(AN,this.V4);break;case 2:{AN=1-AN;AN=1-Math.pow(AN,
this.V4);}break;case 3:{AN=AN*2;if(AN<1)AN=Math.pow(AN,this.V4)/2;else{AN=2-AN;AN=(
2-Math.pow(AN,this.V4))*0.5;}}break;case 4:AN=(Math.pow(2.718,this.V4*AN)-1)/(Math.
pow(2.718,this.V4)-1);break;case 5:{AN=1-AN;AN=1-((Math.pow(2.718,this.V4*AN)-1)
/(Math.pow(2.718,this.V4)-1));}break;case 6:{AN=AN*2;if(AN<1)AN=((Math.pow(2.718
,this.V4*AN)-1)/(Math.pow(2.718,this.V4)-1))/2;else{AN=2-AN;AN=(2-((Math.pow(2.718
,this.V4*AN)-1)/(Math.pow(2.718,this.V4)-1)))*0.5;}}break;case 7:AN=1-Math.cos((
AN*90)*A.k$);break;case 8:AN=Math.sin((AN*90)*A.k$);break;case 9:{AN=AN*2;if(AN<
1){AN=1-Math.cos((AN*90)*A.k$);AN=AN*0.5;}else{AN=2-AN;AN=1-Math.cos((AN*90)*A.k$
);AN=(2-AN)*0.5;}}break;case 10:AN=1-Math.sqrt(1-(AN*AN));break;case 11:{AN=1-AN;
AN=Math.sqrt(1-(AN*AN));}break;case 12:{AN=AN*2;if(AN<1){AN=1-Math.sqrt(1-(AN*AN
));AN=AN*0.5;}else{AN=2-AN;AN=1-Math.sqrt(1-(AN*AN));AN=(2-AN)*0.5;}}break;case 13:
AN=((AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));break;case 14:{AN=1-AN;AN=((
AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));AN=1-AN;}break;case 15:{AN=AN
*2;if(AN<1){AN=((AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));AN=AN*0.5;}else{
AN=2-AN;AN=((AN*AN)*AN)-((AN*this.AuR)*Math.sin((AN*180)*A.k$));AN=(2-AN)*0.5;}}
break;case 16:AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axw)))*A.k$);break;case
17:{AN=1-AN;AN=1-(((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axw)))*A.k$));}break;
case 18:{AN=AN*2;if(AN<1){AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axw)))*A.
k$);AN=AN*0.5;}else{AN=2-AN;AN=((AN*AN)*AN)*Math.sin(((AN*90)*(1+(4*this.Axw)))*
A.k$);AN=(2-AN)*0.5;}}break;case 19:{var Bz=this.M8;var O=0;var GG=0;var La=Bz.Pp.
Get(0);var D8=1-AN;while(D8>La){O=O+1;GG=La;La=La+Bz.Pp.Get(O);}AN=(D8-GG)/(La-GG
);if(!O)AN=1-(AN*AN);else{AN=(2*AN)-1;AN=Bz.Alv.Get(O)*(1-(AN*AN));}}break;case 20:{
var Bz=this.M8;var O=0;var GG=0;var La=Bz.Pp.Get(0);while(AN>La){O=O+1;GG=La;La=
La+Bz.Pp.Get(O);}AN=(AN-GG)/(La-GG);if(!O)AN=AN*AN;else{AN=(2*AN)-1;AN=1-(Bz.Alv.
Get(O)*(1-(AN*AN)));}}break;case 21:{var Bz=this.M8;var O=0;var GG=0;var La=Bz.Pp.
Get(0);var LP=AN*2;var D8=LP-1;if(LP<1)D8=-D8;while(D8>La){O=O+1;GG=La;La=La+Bz.
Pp.Get(O);}D8=(D8-GG)/(La-GG);if(!O)D8=D8*D8;else{D8=(2*D8)-1;D8=1-(Bz.Alv.Get(O
)*(1-(D8*D8)));}if(LP<1)AN=0.5*(1-D8);else AN=0.5*(1+D8);}break;default:if(this.
Aqd){var LP=AN;var AAC=1-LP;AN=((AAC*LP)*(this.Pg+1))+(LP*LP);}else if(this.ALF){
var LP=AN;var AAC=1-LP;var BdE=LP*LP;var BAI=AAC*AAC;AN=(((BAI*LP)*(this.Pg+1))+((
AAC*BdE)*(this.Vi+2)))+(BdE*LP);}}this.AuW(AN);(B=this.Ahq)?B[1].call(B[0],this):
null;},BCg:function(){var Av=(this.timer.Bs-this.Dx)|0;if(Av<0)Av=-Av;var LL=this.
Wb;var Ox=this.Wb+this.Py;var Hi=this.PH+this.Py;var KJ=false;var Ed=this.Qv;if(
!this.Ec&&(Av>=Ox)){this.Ec=1;Av=Av-Ox;this.Dx=this.Dx+Ox;}if((this.Ec>0)&&(Av>=
Hi)){var Ij=(Av/Hi)|0;this.Ec=this.Ec+Ij;Av=Av-(Ij*Hi);this.Dx=this.Dx+(Ij*Hi);}
if((this.Ec>2)&&!this.JX)this.Ec=1;if(this.Ec>0)LL=this.PH;if((this.Ec>=this.JX)&&(
this.JX>0)){KJ=true;Ed=0;}else if(Av>=LL)Ed=1-((Av-LL)*this.AAd);else if(Ed>=0)Ed=
0;if(Ed!==this.Qv){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qv){this.Qv=Ed;this.AK$(
Ed);}return KJ;},BCf:function(){var Av=(this.Dx-this.timer.Bs)|0;var LL=this.Wb;
var Ox=this.Wb+this.Py;var Hi=this.PH+this.Py;var KJ=false;var Ed=this.Qv;if((this.
Ec>1)&&(Av<0)){var Ij=(((-Av+Hi)-1)/Hi)|0;if((this.Ec-Ij)<=0)Ij=this.Ec-1;this.Ec=
this.Ec-Ij;Av=Av+(Ij*Hi);this.Dx=this.Dx+(Ij*Hi);}if(((this.Ec===1)&&(Av<0))&&(this.
JX>0)){this.Ec=0;Av=Av+Ox;this.Dx=this.Dx+Ox;}if(((this.Ec===1)&&(Av<0))&&!this.
JX){var Ij=(((-Av+Hi)-1)/Hi)|0;Av=Av+(Ij*Hi);this.Dx=this.Dx+(Ij*Hi);}if(this.Ec>
0)LL=this.PH;if(Av<0){KJ=true;Ed=1;}else if(Av>=LL)Ed=1-((Av-LL)*this.AAd);else if(
Ed>=0)Ed=1;if(Ed!==this.Qv){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.Qv){this.Qv=
Ed;this.AK$(Ed);}return KJ;},BCe:function(){var Av=(this.Dx-this.timer.Bs)|0;var
LL=this.Wb;var Ox=this.Wb+this.Py;var Hi=this.PH+this.Py;var KJ=false;var Ed=this.
Qv;if((this.Ec>1)&&(Av<0)){var Ij=(((-Av+Hi)-1)/Hi)|0;if((this.Ec-Ij)<=0)Ij=this.
Ec-1;this.Ec=this.Ec-Ij;Av=Av+(Ij*Hi);this.Dx=this.Dx+(Ij*Hi);}if(((this.Ec===1)&&(
Av<0))&&(this.JX>0)){this.Ec=0;Av=Av+Ox;this.Dx=this.Dx+Ox;}if(((this.Ec===1)&&(
Av<0))&&!this.JX){var Ij=(((-Av+Hi)-1)/Hi)|0;Av=Av+(Ij*Hi);this.Dx=this.Dx+(Ij*Hi
);}if(this.Ec>0)LL=this.PH;if(Av<0){KJ=true;Ed=0;}else if(Av>=LL)Ed=(Av-LL)*this.
AAd;else if(Ed>=0)Ed=0;if(Ed!==this.Qv){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qv){this.Qv=Ed;this.AK$(Ed);}return KJ;},BCd:function(){var Av=(this.timer.Bs-this.
Dx)|0;if(Av<0)Av=-Av;var LL=this.Wb;var Ox=this.Wb+this.Py;var Hi=this.PH+this.Py;
var KJ=false;var Ed=this.Qv;if(!this.Ec&&(Av>=Ox)){this.Ec=1;Av=Av-Ox;this.Dx=this.
Dx+Ox;}if((this.Ec>0)&&(Av>=Hi)){var Ij=(Av/Hi)|0;this.Ec=this.Ec+Ij;Av=Av-(Ij*Hi
);this.Dx=this.Dx+(Ij*Hi);}if((this.Ec>2)&&!this.JX)this.Ec=1;if(this.Ec>0)LL=this.
PH;if((this.Ec>=this.JX)&&(this.JX>0)){KJ=true;Ed=1;}else if(Av>=LL)Ed=(Av-LL)*this.
AAd;else if(Ed>=0)Ed=1;if(Ed!==this.Qv){if(Ed<0)Ed=0;if(Ed>1)Ed=1;}if(Ed!==this.
Qv){this.Qv=Ed;this.AK$(Ed);}return KJ;},Afa:function(E){if(this.AUO===E)return;
this.AUO=E;if(!this.Bw||!this.Ajb)return;if(E)this.Tr=-1;else this.Tr=1;this.Dx=(
this.timer.Avy()*2)-this.Dx;},AFq:function(E){if(E<0)E=0;if(E>1)E=1;this.AOg=E;}
,AFg:function(E){if(E<1)E=1;if(E>10)E=10;this.A50=E;this.M8=null;},AFS:function(
E){if(E<1)E=1;if(E>10)E=10;this.Axw=E;},AE$:function(E){if(E<0)E=0;if(E>10)E=10;
this.AuR=E;},AwO:function(E){if(E<1)E=1;if(E>100)E=100;this.V4=E;},AF9:function(
E){if(this.AVE===E)return;this.AVE=E;if(this.AhS===26){this.Vi=E;this.Aqd=(this.
Pg===this.Vi)&&!!this.Pg;this.ALF=!this.Aqd&&(this.Pg!==this.Vi);}},AF8:function(
E){if(this.AVD===E)return;this.AVD=E;if(this.AhS===26){this.Pg=E;this.Aqd=(this.
Pg===this.Vi)&&!!this.Pg;this.ALF=!this.Aqd&&(this.Pg!==this.Vi);}},WR:function(
E){if(this.AhS===E)return;this.AhS=E;this.M8=null;switch(E){case 24:{this.Pg=-1.1;
this.Vi=1.1;}break;case 22:{this.Pg=-1;this.Vi=-2;}break;case 23:{this.Pg=2;this.
Vi=1;}break;case 25:{this.Pg=1.1;this.Vi=-1.1;}break;case 0:{this.Pg=0;this.Vi=0;
}break;default:{this.Pg=this.AVD;this.Vi=this.AVE;}}this.Aqd=(this.Pg===this.Vi)&&
!!this.Pg;this.ALF=!this.Aqd&&(this.Pg!==this.Vi);},HQ:function(E){if(E<0)E=0;this.
JX=E;},Fq:function(E){if(E<15)E=15;this.Py=E;this.AAd=1/E;},Ux:function(E){if(E<
0)E=0;this.PH=E;},AkB:function(E){if(E<0)E=0;this.Wb=E;},As:function(E){if(this.
Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mm],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(C.Aek);A.zV([this,this.Mm],this.timer
,0);this.Ajb=0;A.pe([this,this.Mm],this);}},AuW:function(Aav){},An3:function(G){
this.As(false);},An1:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.E0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Qz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};C.Gn={Q:null,A5:0,B3:255,Cx:0,AuW:function(Aav
){var F;this.A5=this.Cx+(Math.round((this.B3-this.Cx)*Aav)|0);if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0._Init.call(this,aArg);this.
__proto__=C.Gn;},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Effects::Int32Effect"};C.AGs={
Q:null,A5:A.wf,B3:Cf,Cx:A.wf,AuW:function(Aav){var F;var Ep=this.Cx[0];var Di=this.
Cx[1];Ep=Ep+(Math.round((this.B3[0]-Ep)*Aav)|0);Di=Di+(Math.round((this.B3[1]-Di
)*Aav)|0);this.A5=[Ep,Di];if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:
function(aArg){C.E0._Init.call(this,aArg);this.__proto__=C.AGs;},_Mark:function(
D){var B;C.E0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Effects::PointEffect"};C.ANB={Q:null,A5:0,B3:0xFFFFFFFF,Cx:0,AuW:
function(Aav){var F;var Po=this.Cx&0xFF;var AaG=(this.Cx>>8)&0xFF;var AlB=(this.
Cx>>16)&0xFF;var Alu=(this.Cx>>24)&0xFF;Po=Po+((((this.B3&0xFF)-Po)*Aav)|0);AaG=
AaG+(((((this.B3>>8)&0xFF)-AaG)*Aav)|0);AlB=AlB+(((((this.B3>>16)&0xFF)-AlB)*Aav
)|0);Alu=Alu+(((((this.B3>>24)&0xFF)-Alu)*Aav)|0);if(Po<0)Po=0;if(Po>255)Po=255;
if(AaG<0)AaG=0;if(AaG>255)AaG=255;if(AlB<0)AlB=0;if(AlB>255)AlB=255;if(Alu<0)Alu=
0;if(Alu>255)Alu=255;this.A5=(Po&0xFF)|((AaG&0xFF)<<8)|((AlB&0xFF)<<16)|((Alu&0xFF
)<<24);if(!!this.Q)(F=this.Q,F[2].call(F[0],this.A5));},_Init:function(aArg){C.E0.
_Init.call(this,aArg);this.__proto__=C.ANB;},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::ColorEffect"};C.Nf={A5:0,B3:1,Cx:0,AuW:function(Aav){this.A5=this.Cx+((
this.B3-this.Cx)*Aav);},_Init:function(aArg){C.E0._Init.call(this,aArg);this.__proto__=
C.Nf;},_className:"Effects::FloatEffect"};C.TQ={timer:null,Q:null,Ec:0,Dx:0,JX:0
,Py:1000,PH:1000,Wb:0,Bw:false,Cx:false,B3:true,Mm:function(G){var F;if(!this.timer
)return;if(this.Ec<0){this.Dx=this.timer.Bs;this.Ec=0;}var Av=(this.timer.Bs-this.
Dx)|0;var Ox=this.Wb+this.Py;var Hi=this.PH+this.Py;var LL=this.Wb;var Jp=this.Ec;
if(!Jp&&(Av>=Ox)){Jp=1;Av=Av-Ox;}if((Jp>0)&&(Av>=Hi)){var Ij=(Av/Hi)|0;Av=Av-(Ij
*Hi);Jp=Jp+Ij;}if((Jp>2)&&!this.JX)Jp=1;if(Jp!==this.Ec){this.Dx=this.timer.Bs-(((
B=Av)<0)?B+0x100000000:B);this.Ec=Jp;}if(Jp>0)LL=this.PH;var KJ=(Jp>=this.JX)&&(
this.JX>0);if(!!this.Q){if(!KJ&&(Av>=LL))(F=this.Q,F[2].call(F[0],this.Cx));if(KJ||((
Av<LL)&&(Jp>0)))(F=this.Q,F[2].call(F[0],this.B3));}if(KJ)this.As(false);},HQ:function(
E){if(E<0)E=0;this.JX=E;},Fq:function(E){if(E<100)E=100;this.Py=E;},Ux:function(
E){if(E<0)E=0;this.PH=E;},AkB:function(E){if(E<0)E=0;this.Wb=E;},As:function(E){
if(this.Bw===E)return;this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Mm],this.timer
,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(C.Aek);A.zV([this,this.Mm
],this.timer,0);this.Ec=-1;}},An3:function(G){this.As(false);},An1:function(G){if(
this.Bw)this.As(false);this.As(true);},_Init:function(aArg){this.__proto__=C.TQ;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};
C.My={Pq:null,AJ:null,Ah:null,Ab:null,P:null,AKN:null,A3E:null,Aks:null,Dt:true,
Bw:true,AcM:true,Ajn:false,Ajx:true,ZM:true,Q$:true,Mv:function(){if(!!this.Pq)this.
Pq.Mv();},AvY:function(){return true;},Zt:function(){},SQ:function(){this.Mv();}
,_Init:function(aArg){this.__proto__=C.My;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pq)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKN)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3E)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aks)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};C.As0={Asq:A.wf,M1:false,AvY:function(){return this.M1;},Zt:function(
){if(!this.Dt&&!!this.P.Ab)this.P.Z(false);if((!this.Dt&&this.Q$)&&!!this.P.Ab)this.
P.Ab.HR(this.P);if(!this.Bw)this.P.As(false);},SQ:function(){if(this.Bw)this.P.As(
true);if((this.Dt||this.Ajn)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.P,0);}if(
this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajx)this.P.Ab.Bb(this.P);
if(this.Dt&&!this.AcM)this.P.H(A.abJ(this.P.M,this.Asq));if(this.Dt){this.P.CZ(255
);this.P.Z(true);}if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);this.M1=true;
this.Mv();},_Init:function(aArg){C.My._Init.call(this,aArg);this.__proto__=C.As0;
},_className:"Effects::VisibilityFader"};C.Axs={E0:null,M1:false,Aqg:false,AvY:function(
){return this.M1;},Zt:function(){if(this.Dt)this.P.CZ(this.E0.B3);if(!this.Dt&&!
this.P.G_)this.P.Z(false);if((!this.Dt&&this.Q$)&&!!this.P.Ab)this.P.Ab.HR(this.
P);if(!this.Bw)this.P.As(false);},SQ:function(){var B;if(this.AcM){if(this.P.Fp(
)&&!!this.P.Ab)this.E0.Cx=this.P.G_;else this.E0.Cx=0;}var AAg=((!this.P.Ab||!this.
P.G_)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[
0]>=B[2])||(B[1]>=B[3]));var AAh=((!this.Dt&&((!this.P.Ab||!this.P.Fp())||this.Q$
))||!this.E0.B3)||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=
B[2])||(B[1]>=B[3]));if(AAg&&AAh){this.E0.Cx=0;this.E0.B3=0;}this.Aqg=this.P.ASM(
);if(this.Bw)this.P.As(true);if((this.Dt||this.Ajn)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajx
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fp()){this.P.CZ(this.E0.Cx);this.P.Z(true);}if(!this.Dt&&((!this.P.Ab||
!this.P.Fp())||!this.P.G_)){this.M1=true;this.Mv();return;}if(!this.Dt&&(this.E0.
Cx===this.E0.B3))this.P.CZ(this.E0.Cx);if(this.P.G_===this.E0.B3){this.M1=true;this.
Mv();return;}if(this.E0.Cx===this.E0.B3){this.M1=true;this.Mv();return;}if(!this.
E0.JX)this.E0.HQ(1);this.E0.Q=[B=this.P,B.Aws,B.A0M];this.E0.Afa(false);this.E0.
AkZ=false;this.E0.SI=[this,this.AiR];this.E0.Ahq=null;this.E0.As(true);},AiR:function(
G){this.M1=true;this.Mv();},_Init:function(aArg){C.My._Init.call(this,aArg);C.Gn.
_Init.call(this.E0={I:this},0);this.__proto__=C.Axs;},_Done:function(){this.__proto__=
C.My;this.E0._Done();C.My._Done.call(this);},_ReInit:function(){C.My._ReInit.call(
this);this.E0._ReInit();},_Mark:function(D){var B;C.My._Mark.call(this,D);if((B=
this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::OpacityFader"};C.Afc={
Cp:null,D$:null,Ad_:false,M1:false,Aqg:false,AvY:function(){return this.M1;},Zt:
function(){if(this.Dt){this.P.CZ(this.Cp.B3);this.P.H(A.abJ(this.P.M,this.D$.B3)
);}if(!this.Dt&&!this.P.G_)this.P.Z(false);if((!this.Dt&&this.Q$)&&!!this.P.Ab)this.
P.Ab.HR(this.P);if(this.Ad_)this.P.ArS(this.Aqg);if(!this.Bw)this.P.As(false);},
SQ:function(){var B;if(this.AcM){if(this.P.Fp()&&!!this.P.Ab)this.Cp.Cx=this.P.G_;
else this.Cp.Cx=0;this.D$.Cx=this.P.M.slice(0,2);}var AAg=((!this.P.Ab||!this.P.
G_)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3]));var AAh=((!this.Dt&&((!this.P.Ab||!this.P.Fp())||this.Q$
))||!this.Cp.B3)||(((B=A.lb(A.abh([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]],this.D$.B3
),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAg&&AAh){
this.Cp.Cx=0;this.Cp.B3=0;this.D$.Cx=this.D$.B3;}this.Aqg=this.P.ASM();if(this.Bw
)this.P.As(true);if((this.Dt||this.Ajn)&&!this.P.Ab){this.P.Z(false);this.Ab.J(this.
P,0);}if(this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajx)this.P.Ab.Bb(
this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.Dt&&!this.P.
Fp()){this.P.H(A.abJ(this.P.M,this.D$.Cx));this.P.CZ(this.Cp.Cx);this.P.Z(true);
}if(!this.Dt&&((!this.P.Ab||!this.P.Fp())||!this.P.G_)){this.M1=true;this.Mv();return;
}if(!this.Dt&&A.aaX(this.D$.Cx,this.D$.B3))this.P.H(A.abJ(this.P.M,this.D$.Cx));
if(!this.Dt&&(this.Cp.Cx===this.Cp.B3))this.P.CZ(this.Cp.Cx);if((this.P.G_===this.
Cp.B3)&&A.aaX(this.P.M.slice(0,2),this.D$.B3)){this.M1=true;this.Mv();return;}if((
this.Cp.Cx===this.Cp.B3)&&A.aaX(this.D$.Cx,this.D$.B3)){this.M1=true;this.Mv();return;
}if(!this.Cp.JX)this.Cp.HQ(1);if(!this.D$.JX)this.D$.HQ(1);if(this.Ad_)this.P.ArS(
true);this.D$.Q=null;this.D$.Afa(false);this.D$.AkZ=false;this.D$.SI=[this,this.
AiR];this.D$.Ahq=[this,this.AAL];this.Cp.Q=[B=this.P,B.Aws,B.A0M];this.Cp.Afa(false
);this.Cp.AkZ=false;this.Cp.SI=[this,this.AiR];this.Cp.Ahq=null;this.D$.As(!A.aaX(
this.D$.Cx,this.D$.B3));this.Cp.As(this.Cp.Cx!==this.Cp.B3);},AiR:function(G){this.
M1=!this.Cp.Bw&&!this.D$.Bw;this.Mv();},AAL:function(G){this.P.H(A.abJ(this.P.M,
this.D$.A5));},_Init:function(aArg){C.My._Init.call(this,aArg);C.Gn._Init.call(this.
Cp={I:this},0);C.AGs._Init.call(this.D$={I:this},0);this.__proto__=C.Afc;},_Done:
function(){this.__proto__=C.My;this.Cp._Done();this.D$._Done();C.My._Done.call(this
);},_ReInit:function(){C.My._ReInit.call(this);this.Cp._ReInit();this.D$._ReInit(
);},_Mark:function(D){var B;C.My._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Effects::PositionFader"
};C.As1={AdO:null,Cp:null,Ha:null,Wu:null,FS:null,UD:A.wf,AkM:A.wf,M1:false,Aqg:
false,AvY:function(){return this.M1;},Zt:function(){if(this.Dt){this.P.CZ(this.Cp.
B3);this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.UD));this.P.Z(true);}if(
!this.Dt&&!this.Cp.B3){this.P.CZ(0);this.P.Z(false);}if(((!this.Dt&&(this.Cp.B3>
0))&&!!this.P.Ab)&&!this.Q$){this.P.CZ(this.Cp.B3);this.P.H(A.abh(A.abg(this.P.M
,A.aaI(this.P.M)),this.UD));this.P.Z(true);}if((!this.Dt&&this.Q$)&&!!this.P.Ab)
this.P.Ab.HR(this.P);this.P.ArS(this.Aqg);if(!!this.AdO)this.Ab.HR(this.AdO);if(
!this.Bw)this.P.As(false);},SQ:function(){var B;if(this.AcM){if(this.P.Fp()&&!!this.
P.Ab)this.Cp.Cx=this.P.G_;else this.Cp.Cx=0;this.AkM=A.aaI(this.P.M);}var AAg=((
!this.P.Ab||!this.P.G_)||!this.P.Fp())||(((B=A.lb(this.P.M,[0,0,(B=this.Ab.M)[2]-
B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));var AAh=((!this.Dt&&((!this.P.Ab||!this.
P.Fp())||this.Q$))||!this.Cp.B3)||(((B=A.lb(A.abh(A.abg(this.P.M,A.aaI(this.P.M)
),this.UD),[0,0,(B=this.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]));if(AAg&&
AAh){this.Cp.Cx=0;this.Cp.B3=0;this.AkM=this.UD;this.Wu.A75();}this.Aqg=this.P.ASM(
);if(this.Bw)this.P.As(true);if((this.Dt||this.Ajn)&&!this.P.Ab){this.P.Z(false);
this.Ab.J(this.P,0);}if(this.Dt&&this.ZM)this.P.Ab.ZL(this.P);if(this.Dt&&this.Ajx
)this.P.Ab.Bb(this.P);if(!this.Dt&&(this.Ab.AV===this.P))this.Ab.Bb(null);if(this.
Dt&&!this.P.Fp())this.P.CZ(this.Cp.Cx);if((!this.Dt&&A.aaX(this.AkM,this.UD))&&this.
Wu.AEb())this.P.H(A.abh(A.abg(this.P.M,A.aaI(this.P.M)),this.AkM));if(!this.Dt&&(
this.Cp.Cx===this.Cp.B3))this.P.CZ(this.Cp.Cx);if(!this.Dt&&((!this.P.Ab||!this.
P.Fp())||!this.P.G_)){this.M1=true;this.Mv();return;}if(((this.Dt&&(this.P.G_===
this.Cp.B3))&&A.aaX(A.aaI(this.P.M),this.UD))&&this.P.Fp()){this.M1=true;this.Mv(
);return;}if(((!this.Dt&&(this.P.G_===this.Cp.B3))&&A.aaX(A.aaI(this.P.M),this.UD
))&&this.Wu.AEb()){this.M1=true;this.Mv();return;}if(((this.Cp.Cx===this.Cp.B3)&&
A.aaX(this.AkM,this.UD))&&this.Wu.AEb()){this.M1=true;this.Mv();return;}this.P.ArS(
true);this.P.Z(false);this.AdO=A._NewObject(A.acg.AV6,0);this.AdO.Bnf(this.P);this.
AdO.CZ(this.Cp.Cx);this.AdO.Bob(A.aaI([0,0,(B=this.P.M)[2]-B[0],B[3]-B[1]]));this.
P.Ab.AMm(this.AdO,this.P);if(!this.Cp.JX)this.Cp.HQ(1);if(!this.Ha.JX)this.Ha.HQ(
1);this.Ha.Afa(false);this.Ha.AkZ=false;this.Ha.SI=[this,this.AiR];this.Ha.Ahq=[
this,this.AAL];if(this.Dt){this.Ha.Cx=0;this.Ha.B3=1;}else{this.Ha.Cx=1;this.Ha.
B3=0;}this.Cp.Q=[B=this.AdO,B.Aws,B.CZ];this.Cp.Afa(false);this.Cp.AkZ=false;this.
Cp.SI=[this,this.AiR];this.Cp.Ahq=null;this.Ha.As(!A.aaX(this.AkM,this.UD)||!this.
Wu.AEb());this.Cp.As(this.Cp.Cx!==this.Cp.B3);},AiR:function(G){this.M1=!this.Cp.
Bw&&!this.Ha.Bw;this.Mv();},AAL:function(G){var B;var ABB=A.abe(this.UD,this.AkM
);if(!this.Dt)ABB=[-ABB[0],-ABB[1]];this.FS.A75();this.FS.AgZ=this.Wu.AgZ;this.FS.
BqB(ABB[0],ABB[1],0);this.FS.Bj9(this.Wu,this.FS,this.Ha.A5);if(this.Dt)this.AdO.
Bay(this.AkM,this.FS);else this.AdO.Bay(this.UD,this.FS);},_Init:function(aArg){
C.My._Init.call(this,aArg);C.Gn._Init.call(this.Cp={I:this},0);C.Nf._Init.call(this.
Ha={I:this},0);A.Graphics.Ax9._Init.call(this.Wu={I:this},0);A.Graphics.Ax9._Init.
call(this.FS={I:this},0);this.__proto__=C.As1;},_Done:function(){this.__proto__=
C.My;this.Cp._Done();this.Ha._Done();this.Wu._Done();this.FS._Done();C.My._Done.
call(this);},_ReInit:function(){C.My._ReInit.call(this);this.Cp._ReInit();this.Ha.
_ReInit();this.Wu._ReInit();this.FS._ReInit();},_Mark:function(D){var B;C.My._Mark.
call(this,D);if((B=this.AdO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Effects::WarpFader"};C.Rj={Si:function(){return null;},Sh:function(
){return null;},Aee:function(){return this.Si();},Aed:function(){return this.Sh(
);},_Init:function(aArg){this.__proto__=C.Rj;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};C.AVe={Si:function(){var Ao=A._NewObject(C.As0,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajx=
false;Ao.ZM=true;Ao.AcM=false;Ao.Aks=[this,this.ApQ];return Ao;},Sh:function(){var
Ao=A._NewObject(C.As0,0);Ao.Dt=false;Ao.Bw=false;Ao.Q$=true;return Ao;},Aee:function(
){var Ao=C.Rj.Aee.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aed:function(){var
Ao=A._NewObject(C.As0,0);Ao.Dt=false;Ao.Bw=true;Ao.Ajn=true;Ao.Q$=false;return Ao;
},ApQ:function(G){var B;var Ao=(C.As0.isPrototypeOf(G)?G:null);var Be=[0,0,(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(
0,2);pos=[(Be[0]+(((Be[2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Be[1]+(((
Be[3]-Be[1])/2)|0))-((C6[1]/2)|0)];Ao.Asq=pos;},_Init:function(aArg){C.Rj._Init.
call(this,aArg);this.__proto__=C.AVe;},_className:"Effects::ShowHideTransition"};
C.Aeo={ACU:500,Si:function(){var Ao=A._NewObject(C.Afc,0);Ao.Dt=true;Ao.Bw=true;
Ao.Ajx=false;Ao.ZM=true;Ao.AcM=true;Ao.Ad_=false;Ao.Aks=[this,this.ApQ];Ao.Cp.Fq(
this.ACU);Ao.Cp.Cx=0;Ao.Cp.B3=255;Ao.D$.Fq(this.ACU);Ao.D$.WR(23);return Ao;},Sh:
function(){var Ao=A._NewObject(C.Axs,0);Ao.Dt=false;Ao.Bw=false;Ao.Q$=true;Ao.AcM=
true;Ao.E0.Cx=255;Ao.E0.B3=0;Ao.E0.Fq(this.ACU);return Ao;},Aee:function(){var Ao=
C.Rj.Aee.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aed:function(){var Ao=C.Rj.
Aed.call(this);Ao.Ajn=true;Ao.Q$=false;Ao.Bw=true;return Ao;},ApQ:function(G){var
B;var Ao=(C.Afc.isPrototypeOf(G)?G:null);var Be=[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[
1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(0,2);pos=[(Be[0]+(((Be[
2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Be[1]+(((Be[3]-Be[1])/2)|0))-((
C6[1]/2)|0)];Ao.D$.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fp())||!Ao.P.G_)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.
P.M,pos));},_Init:function(aArg){C.Rj._Init.call(this,aArg);this.__proto__=C.Aeo;
},_className:"Effects::FadeInOutTransition"};C.AG3={Kn:0x12,Au_:0,Ad_:false,Si:function(
){var Ao=A._NewObject(C.Afc,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajx=false;Ao.ZM=true;Ao.
AcM=true;Ao.Ad_=this.Ad_;Ao.Aks=[this,this.ApQ];Ao.Cp.Fq(500);Ao.Cp.AkB(0);Ao.Cp.
Cx=0;Ao.Cp.B3=255;Ao.D$.Fq(500);Ao.D$.WR(23);Ao.D$.AF8(0);Ao.D$.AF9(0);Ao.D$.AwO(
3);Ao.D$.AE$(0.5);Ao.D$.AFS(3);Ao.D$.AFg(3);Ao.D$.AFq(0.5);return Ao;},Sh:function(
){var Ao=A._NewObject(C.Afc,0);Ao.Dt=false;Ao.Bw=false;Ao.Q$=true;Ao.AcM=true;Ao.
Ad_=this.Ad_;Ao.Aks=[this,this.A3P];Ao.Cp.Cx=255;Ao.Cp.B3=0;Ao.Cp.Fq(500);Ao.Cp.
AkB(0);Ao.D$.Fq(500);Ao.D$.WR(23);Ao.D$.AF8(0);Ao.D$.AF9(0);Ao.D$.AwO(3);Ao.D$.AE$(
0.5);Ao.D$.AFS(3);Ao.D$.AFg(3);Ao.D$.AFq(0.5);return Ao;},Aee:function(){var Ao=
C.Rj.Aee.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aed:function(){var Ao=C.Rj.
Aed.call(this);Ao.Ajn=true;Ao.Q$=false;Ao.Bw=true;return Ao;},ApQ:function(G){var
B;var Ao=(C.Afc.isPrototypeOf(G)?G:null);var Bu=this.Kn;var Be=[0,0,(B=Ao.Ab.M)[
2]-B[0],B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(0,2);if(((
Bu&0x4)===0x4))pos=[Be[2]-C6[0],pos[1]];else if(((Bu&0x2)===0x2))pos=[(Be[0]+(((
Be[2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];if(((Bu&0x20)===0x20))pos=[pos[0],Be[3
]-C6[1]];else if(((Bu&0x10)===0x10))pos=[pos[0],(Be[1]+(((Be[3]-Be[1])/2)|0))-((
C6[1]/2)|0)];Ao.D$.B3=pos;if(((!Ao.P.Ab||!Ao.P.Fp())||!Ao.P.G_)||(((B=A.lb(Ao.P.
M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0]>=B[2])||(B[1]>=B[3]))){var HG=[(B=Ao.
Ab.M)[2]-B[0],B[3]-B[1]];switch(this.Au_){case 5:pos=[pos[0],-C6[1]];break;case 3:{
pos=[pos[0],-C6[1]];pos=[HG[0],pos[1]];}break;case 8:pos=[-C6[0],-C6[1]];break;case
2:pos=[HG[0],pos[1]];break;case 7:pos=[-C6[0],pos[1]];break;case 4:pos=[pos[0],HG[
1]];break;case 1:{pos=[pos[0],HG[1]];pos=[HG[0],pos[1]];}break;case 6:{pos=[pos[
0],HG[1]];pos=[-C6[0],pos[1]];}break;default:;}Ao.P.H(A.abJ(Ao.P.M,pos));}},A3P:
function(G){var B;var Ao=(C.Afc.isPrototypeOf(G)?G:null);var pos=Ao.P.M.slice(0,
2);var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var HG=[(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]];
switch(this.Au_){case 5:pos=[pos[0],HG[1]];break;case 3:{pos=[pos[0],HG[1]];pos=[-
C6[0],pos[1]];}break;case 8:{pos=[pos[0],HG[1]];pos=[HG[0],pos[1]];}break;case 2:
pos=[-C6[0],pos[1]];break;case 7:pos=[HG[0],pos[1]];break;case 4:pos=[pos[0],-C6[
1]];break;case 1:pos=[-C6[0],-C6[1]];break;case 6:{pos=[pos[0],-C6[1]];pos=[HG[0
],pos[1]];}break;default:;}Ao.D$.B3=pos;},_Init:function(aArg){C.Rj._Init.call(this
,aArg);this.__proto__=C.AG3;},_className:"Effects::SlideTransition"};C.Afk={Si:function(
){var Ao=A._NewObject(C.As1,0);Ao.Dt=true;Ao.Bw=true;Ao.Ajx=false;Ao.ZM=true;Ao.
AcM=true;Ao.Aks=[this,this.ApQ];Ao.Cp.Fq(500);Ao.Cp.AkB(0);Ao.Cp.Cx=0;Ao.Cp.B3=255;
Ao.Ha.Fq(500);Ao.Ha.WR(23);Ao.Ha.AF8(0);Ao.Ha.AF9(0);Ao.Ha.AwO(3);Ao.Ha.AE$(0.5);
Ao.Ha.AFS(3);Ao.Ha.AFg(3);Ao.Ha.AFq(0.5);Ao.Wu.Afj(0.5,0.5,1);return Ao;},Sh:function(
){var Ao=A._NewObject(C.As1,0);Ao.Dt=false;Ao.Bw=false;Ao.Q$=true;Ao.AcM=true;Ao.
Aks=[this,this.A3P];Ao.Cp.Cx=255;Ao.Cp.B3=0;Ao.Cp.Fq(500);Ao.Cp.AkB(0);Ao.Ha.Fq(
500);Ao.Ha.WR(23);Ao.Ha.AF8(0);Ao.Ha.AF9(0);Ao.Ha.AwO(3);Ao.Ha.AE$(0.5);Ao.Ha.AFS(
3);Ao.Ha.AFg(3);Ao.Ha.AFq(0.5);Ao.Wu.Afj(0.5,0.5,1);return Ao;},Aee:function(){var
Ao=C.Rj.Aee.call(this);Ao.ZM=false;Ao.Bw=true;return Ao;},Aed:function(){var Ao=
C.Rj.Aed.call(this);Ao.Ajn=true;Ao.Q$=false;Ao.Bw=true;return Ao;},ApQ:function(
G){var B;var Ao=(C.As1.isPrototypeOf(G)?G:null);var Be=[0,0,(B=Ao.Ab.M)[2]-B[0],
B[3]-B[1]];var C6=[(B=Ao.P.M)[2]-B[0],B[3]-B[1]];var pos=Be.slice(0,2);pos=[(Be[
0]+(((Be[2]-Be[0])/2)|0))-((C6[0]/2)|0),pos[1]];pos=[pos[0],(Be[1]+(((Be[3]-Be[1
])/2)|0))-((C6[1]/2)|0)];Ao.UD=A.abf(pos,[(C6[0]/2)|0,(C6[1]/2)|0]);if(((!Ao.P.Ab||
!Ao.P.Fp())||!Ao.P.G_)||(((B=A.lb(Ao.P.M,[0,0,(B=Ao.Ab.M)[2]-B[0],B[3]-B[1]]))[0
]>=B[2])||(B[1]>=B[3])))Ao.P.H(A.abJ(Ao.P.M,A.abe(Ao.UD,A.aaI([0,0,(B=Ao.P.M)[2]-
B[0],B[3]-B[1]]))));},A3P:function(G){var Ao=(C.As1.isPrototypeOf(G)?G:null);Ao.
UD=A.aaI(Ao.P.M);},_Init:function(aArg){C.Rj._Init.call(this,aArg);this.__proto__=
C.Afk;},_className:"Effects::ScaleTransition"};C.AhS={BE7:0,BFM:1,BFO:2,BFN:3,BEx:
4,BEz:5,BEy:6,BGj:7,BGl:8,BGk:9,BD3:10,BD5:11,BD4:12,BDJ:13,BDL:14,BDK:15,BEo:16
,BEq:17,BEp:18,BDU:19,BDW:20,BDV:21,BEn:22,BEB:23,BEm:24,BEC:25,BD_:26};C.BEg={A5s:
0x1,A5r:0x2,A5t:0x4,A5w:0x8,A5v:0x10,A5u:0x20};C.AOf={Trigger:function(){A.Core.
Timer.Trigger.call(this);A.we(this,0);},_Init:function(aArg){A.Core.Timer._Init.
call(this,aArg);this.__proto__=C.AOf;},_className:"Effects::EffectTimerClass"};C.
Aek={_Init:function(){C.AOf._Init.call(this,0);this.PZ(15);this.As(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.AHf={Pp:A.abi(12,0
,null),Alv:A.abi(12,0,null),_Init:function(aArg){(this.Pp=[]).__proto__=C.AHf.Pp;(
this.Alv=[]).__proto__=C.AHf.Alv;this.__proto__=C.AHf;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Effects::TimingList"};C.AC1={B9:null,B8:null,A8H:function(AtD){var Ao=this.B8;while(
!!Ao){Ao.Zt();Ao.P.U=Ao.P.U&~0x40000;Ao=Ao.Ah;}Ao=this.B8;while(!!Ao){A.pe(Ao.A3E
,Ao);Ao=Ao.Ah;}},A8G:function(AtD){var Ao=this.B8;while(!!Ao){A.pe(Ao.AKN,Ao);Ao=
Ao.Ah;}this.B8=null;this.B9=null;},SQ:function(AtD){var B;if(!this.B8)this.Mv();
var Ao=this.B8;while(!!Ao){Ao.P.U=(Ao.P.U|0x40000)&~0x20000;Ao.P.ApV=null;Ao=Ao.
Ah;}Ao=this.B8;while(!!Ao){(B=Ao.Aks)?B[1].call(B[0],Ao):null;Ao.SQ();Ao=Ao.Ah;}
},Mv:function(){var Ao=this.B8;while(!!Ao&&Ao.AvY())Ao=Ao.Ah;if(!Ao)A.Core.Ak0.Mv.
call(this);},Bo7:function(FQ){if(!FQ)return;if(this.ARt())throw new Error(BD);if(
FQ.Pq!==this)throw new Error(E8);if(!!FQ.Ah)FQ.Ah.AJ=FQ.AJ;else this.B9=FQ.AJ;if(
!!FQ.AJ)FQ.AJ.Ah=FQ.Ah;else this.B8=FQ.Ah;FQ.Pq=null;FQ.Ah=null;FQ.AJ=null;if(!!
FQ.P)FQ.P.ApV=null;A.pe(FQ.AKN,FQ);if(!this.B8)this.AmG();},A5m:function(FQ){if(
!FQ)return;if(this.ARt())throw new Error(Hs);if(!!FQ.Pq)throw new Error(I0);FQ.AJ=
this.B9;FQ.Ah=null;if(!!this.B9)this.B9.Ah=FQ;else this.B8=FQ;this.B9=FQ;FQ.Pq=this;
},_Init:function(aArg){A.Core.Ak0._Init.call(this,aArg);this.__proto__=C.AC1;},_Mark:
function(D){var B;A.Core.Ak0._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Effects::FaderTask"};C.AsM={_Init:function(){C.AVe._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gn.__proto__=C.E0;C.AGs.__proto__=C.E0;C.ANB.__proto__=C.E0;
C.Nf.__proto__=C.E0;C.As0.__proto__=C.My;C.Axs.__proto__=C.My;C.Afc.__proto__=C.
My;C.As1.__proto__=C.My;C.AVe.__proto__=C.Rj;C.Aeo.__proto__=C.Rj;C.AG3.__proto__=
C.Rj;C.Afk.__proto__=C.Rj;C.AOf.__proto__=A.Core.Timer;C.AC1.__proto__=A.Core.Ak0;
};C._ReInit=function(){var B;if((B=C.Aek._this))B._ReInit(),C.Aek._ReInit.call(B
);if((B=C.AsM._this))B._ReInit(),C.AsM._ReInit.call(B);};C.DI=function(D){var B;
if((B=C.Aek._this)&&(B._cycle!=D))B._Done(C.Aek._this=null);if((B=C.AsM._this)&&(
B._cycle!=D))B._Done(C.AsM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */