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
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var B9=[0,0,370,60];var BC=[360,0,370,60];var EU=[0,0,370,710];var Hd="Unknown animalType";
var I7=[58,10,120,50];var II=[0,0,60,60];var OI=[120,0,360,60];var PM="\u2015";var
PN=[0,0,240,60];var CJ=[0,0,40,60];var E2=[100,0,130,60];var Li=[43,0,100,60];var
PO=[125,0,240,60];var Km=[0,0];var NV=[100,0];var PP=[100,60];var Mt=[0,60];var SF=[
107,0];var Uk=[240,0];var Zn=[240,60];var Wr=[107,60];var IJ="%d.%m.%Y";var Ul="Unhandled date unit: ";
var Zo=[0,0,200,180];var Ws=[36,0,200,30];var Zp=[0,30,160,60];var Um="Text";var
Zq=[0,70,40,110];var Zr=[44,70,156,110];var Un=[160,70,200,110];var Wt=[7,2,27,25
];var QZ=[0,30,170,180];var Zs=[170,34,190,57];var OJ=[0,0,40,40];var PQ=[0,40];
var Wu=[40,40];var Wv=[40,0];var Ww=[0,0,370,100];var Zt=[20,0,290,60];var Zu=[0
,60,370,100];var Wx="Cap";var Wy=[20,0,370,60];var SG=[310,0,370,60];var Zv=[370
,0];var Zw=[370,60];var Ab7="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Uo=".";var Zx=[0,0,170
,150];var AeS=[0,59,170,90];var Zy=[110,0,170,150];var Wz=[0,30];var WA=[50,0,100
,150];var Zz=[0,0,40,150];var AeT=[0,0,370,240];var JN=[0,60,370,710];var AeU=[0
,60,370,120];var Lj=[0,120,370,180];var Aha=[0,180,370,240];var Anw=[370,120];var
NW=[0,120];var WC=[370,180];var Anx=[0,180];var Ahb=[370,240];var Ahc=[0,240];var
Ab8=[0,0,50,60];var Uq=[50,0,100,60];var Any=[100,10,370,50];var Anz="276000901234567";
var AwF="Unhandled temperature unit";var AwG=[110,0,260,60];var Akv=[235,10,370,
50];var AwH="39.5";var AeV=[0,0,270,40];var ArW=[270,0];var OK=[270,40];var SI=[
150,0,170,40];var AwI=[205,10,207,30];var SJ=[0,0,370,40];var ArX=[50,0,320,40];
var AwJ=" ";var AwK=[135,23];var AwL=[135,0];var AnA=[100,0,370,60];var AwM="Error: Nullpointer Exception";
var ArY="Unknown Date Piecker Unit Index: ";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AK7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AK8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AK9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AK_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AN_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.APG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.AiN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AKQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Arv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.ASM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.ATe={Adv:null,AW:null,AQ:null,Background:null,HZ:null,AD:null,IE:null,De:
null,K9:null,A5i:null,A5M:0,Bg:function(aSize){A.acn.Menu.Bg.call(this,aSize);this.
IE.G(A.abP(this.IE.M,this.AD.Oy));this.IE.G([].concat(this.IE.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Io=((Ae&0x40)===0x40
);if(Io&&(this.AD.Gb<0))this.AD.GQ(0);},NI:function(E){if(this.K9===E)return;this.
K9=E;this.AD.NI(E);},Bj1:function(E){var B;if(this.A5i===E)return;if(!!this.Adv){
this.HG(this.Adv);this.Adv=null;}if(!!E){this.Adv=(C.Fn.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Adv.A7y([this,this.AgB]);this.Adv.A7z([this,this.AgC]);this.Adv.
Bj6(null);this.J(this.Adv,0);this.AD.A7F((B=this.Adv.M)[3]-B[1]);}else this.AD.A7F(
0);this.IE.G(A.abP(this.IE.M,this.AD.Oy));A.pe([this,this.E7],this);this.A5i=E;}
,G9:function(H){var B;var FS=this.AD.GN;var Aa=(C.A$.isPrototypeOf(B=this.AD.Ca)?
B:null);if(!Aa)return;Aa.YP(this.AW);Aa.B$(FS);Aa.YQ(this.AQ);Aa.G(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GP]));},YP:function(E){var B;if(this.AW===E)return;
if(!!this.AW){A.z9([this,this.B$],this.AW,0);A.z$([this,this.Ano],[B=this.AW,B.Fw
,B.FB],0);}this.AW=E;if(!!E){A.zV([this,this.B$],E,0);A.zX([this,this.Ano],[E,E.
Fw,E.FB],0);}A.pe([this,this.B$],this);A.pe([this,this.Ano],this);},B$:function(
H){if(!!this.AW){this.AD.Jm(this.AW.Ch());this.AD.AaY(0,this.AD.AR-1);}else this.
AD.Jm(0);if(this.A5M!==this.AD.AR){this.AD.AAb(null,null);this.A5M=this.AD.AR;}A.
pe([this,this.E7],this);},AgC:function(H){var B;this.G(A.abI(this.M,(B=this.AD.AMU(
))[3]-B[1]));},AgB:function(H){this.G(A.abI(this.M,180));},A6V:function(H){var Jr=(
A.Core.BO.isPrototypeOf(H)?H:null);var FS=this.AD.Gb;if(Jr.CH===4)FS=FS-1;else if(
Jr.CH===5)FS=FS+1;else if((Jr.D2>=0x30)&&(Jr.D2<=0x39))A._GetAutoObject(A.acp.AfZ
).E9(Jr.D2);else if(Jr.CH===45)A._GetAutoObject(A.acp.AfZ).Delete();else Jr.O9=true;
if((FS<0)||(FS>=this.AD.AR))return;this.AD.GQ(FS);this.Bvi(FS,true);},Bu9:function(
H){var Aa=(C.A$.isPrototypeOf(H)?H:null);this.AD.GQ(Aa.Hr);},Bvi:function(GW,Acl
){var B;if((GW<0)||(GW>=this.AD.AR))return;var Aw=this.AD.ApW(GW,GW);var A9=this.
AD.M;A9=A.abP(A9,(B=this.AD.AMU())[3]-B[1]);A9=A.abI(A9,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AMU())[3]-B[1]))-((B=this.AD.BfU())[3]-B[1]));var Ly=A.lb(Aw,A9);if((!
Acl&&!((Ly[0]>=Ly[2])||(Ly[1]>=Ly[3])))||(Acl&&A.aaY(Ly,Aw)))return;var Bo=0;if(
Aw[3]>A9[3])Bo=Aw[3]-A9[3];if(Bo>(Aw[1]-A9[1]))Bo=(Aw[3]-A9[1])-this.AD.GP;this.
AD.Ga(this.AD.Bp-Bo);},Ano:function(H){this.AD.GQ(-1);},E7:function(H){var B;this.
IE.Mk(this.AD.GP*this.AD.AR);this.IE.Mm(((B=this.AD.M)[3]-B[1])-this.AD.Oy);this.
IE.Ml(-this.AD.Bp);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AI._Init.call(this.Background={I:this},0);A.Core.HZ._Init.call(this.HZ={I:this},
0);A.Core.CF._Init.call(this.AD={I:this},0);A.kR.Au._Init.call(this.IE={I:this},
0);A.Core.BO._Init.call(this.De={I:this},0);this.__proto__=C.ATe;this.G(B9);this.
Background.AV(0x3);this.Background.G(B9);this.HZ.AV(0x3F);this.HZ.G(B9);this.AD.
AV(0x3F);this.AD.G(B9);this.AD.Aeg(60);this.AD.Jm(0);this.AD.NI(this.K9);this.IE.
AV(0x3A);this.IE.G(BC);this.IE.L(0xFF808080);this.J(this.Background,0);this.J(this.
HZ,0);this.J(this.AD,0);this.J(this.IE,0);this.AD.Eh=[this,this.E7];this.AD.G9=[
this,this.G9];this.AD.AvN(this.HZ);this.AQ=[this,this.Bu9];this.De.BP=[this,this.
A6V];this.De.DR=[this,this.A6V];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.HZ._Done();this.AD._Done();this.IE._Done();this.De._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.HZ._ReInit();this.AD._ReInit();this.IE._ReInit();
this.De._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Adv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AW)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.ASf={Gt:null,AI:null,Cy:null,Init:function(aArg){var B;A.zX([this,this.Hu],[
B=A._GetAutoObject(A.acp.K1),B.A6z,B.A7O],0);A.pe([this,this.Hu],this);},Abq:function(
E){if(this.Gt===E)return;if(!!this.Gt)this.HG(this.Gt);this.Gt=E;if(!!this.Gt)this.
J(this.Gt,0);this.Ba(E);this.AgV(E,this.Cy);this.An();},Hu:function(H){var B;if(
!!A._GetAutoObject(A.acp.K1).Ary)this.Abq((C.AgY.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.acp.K1).Ary,0))?B:null));else this.Abq(null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.AI={I:this},0);A.acg.Cy.
_Init.call(this.Cy={I:this},0);this.__proto__=C.ASf;this.G(EU);this.AI.AV(0x3F);
this.AI.G(EU);this.Cy.G(EU);this.Cy.L(0xFF000000);this.J(this.AI,0);this.J(this.
Cy,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AI._Done();
this.Cy._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AI._ReInit();this.Cy._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cy)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AKz={AfD:0,Nh:0,Background:null,V:null
,AiJ:null,Add:null,Xi:null,Ade:null,L8:null,Od:0,Lt:false,Ks:false,CT:function(){
this.An();},Ai:function(Ae){var B;C.A$.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10
);var Fg=((Ae&0x20)===0x20);var Io=((Ae&0x40)===0x40);if(!G1){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.L8.Ar(false);this.L8.Y(false);}else if(Io){
this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);this.L8.Ar(true);this.L8.Y(true);}else
if(Fg){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.L8.Ar(true);this.
L8.Y(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.L8.Ar(false
);this.L8.Y(false);}if(!this.Ks&&Fg)A._GetAutoObject(A.acp.K1).M4(this.AfD);this.
L8.Bj3(this.Nh>0);this.L8.Bkq(this.AfD>0);this.V.Q(this.Od.toFixed());this.Lt=G1;
this.Ks=Fg;},B$:function(Ac){if(!this.AW){this.Xi.Ax(A.aaL(A.ach.AdO));this.Add.
L(A.jb.AeL);return;}this.Hr=Ac;if(!!this.AW){this.Nh=this.AW.LE(Ac,26);this.AfD=
this.AW.LE(Ac,22);this.Od=this.AW.CA(Ac,1);var Ak6=this.AW.HT(Ac,11);var AkX=this.
AW.IU(Ac,17);var LC=this.AW.IU(Ac,13);var H4=this.AW.Amc(Ac,14);var WR=A._GetAutoObject(
A.Device.Helper).AKo(LC,Ak6,AkX);switch(H4){case 0:this.Xi.Ax(A.aaL(A.ach.AdO));
break;case 1:this.Xi.Ax(A.aaL(A.ach.AuA));break;case 2:this.Xi.Ax(A.aaL(A.ach.AuD
));break;default:A.ab5("%s%e",Hd,H4);}this.Ade.Ax(this.Xi.Al);this.Add.L(A._GetAutoObject(
A.acj.Assessment).P4(WR));this.An();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AI._Init.call(this.Background={I:this},0);A.kR.CP._Init.call(this.V={
I:this},0);A.acg.Am._Init.call(this.AiJ={I:this},0);A.acg.Am._Init.call(this.Add={
I:this},0);A.acg.Am._Init.call(this.Xi={I:this},0);A.acg.Am._Init.call(this.Ade={
I:this},0);C.L8._Init.call(this.L8={I:this},0);this.__proto__=C.AKz;this.Background.
AV(0x3F);this.Background.G(B9);this.V.AV(0x3F);this.V.G(I7);this.V.Q(A.aaR(A.acf.
Gy));this.V.A2(0x11);this.V.L(0xFF000000);this.AiJ.G(II);this.AiJ.L(A.jb.Text);this.
Add.G(II);this.Add.L(A.jb.EX);this.Xi.G(II);this.Ade.G(II);this.Ade.L(A.jb.Text);
this.Ade.Cr(1);this.L8.AV(0x3);this.L8.G(OI);this.J(this.Background,0);this.J(this.
V,0);this.J(this.AiJ,0);this.J(this.Add,0);this.J(this.Xi,0);this.J(this.Ade,0);
this.J(this.L8,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.
aaL(A.fl.By));this.AiJ.Ax(A.aaL(C.AFE));this.Add.Ax(A.aaL(C.ATw));this.Xi.Ax(A.aaL(
A.ach.AdO));this.Ade.Ax(A.aaL(A.ach.AdO));},_Done:function(){this.__proto__=C.A$;
this.Background._Done();this.V._Done();this.AiJ._Done();this.Add._Done();this.Xi.
_Done();this.Ade._Done();this.L8._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.AiJ._ReInit(
);this.Add._ReInit();this.Xi._ReInit();this.Ade._ReInit();this.L8._ReInit();this.
V.Q(A.aaR(A.acf.Gy));this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(
A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AiJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Add)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Xi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ade)._cycle!=D)B._Mark(B._cycle=D);if((B=this.L8)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.L8={T1:null,V$:null,Aki:null,M7:null
,NQ:null,Y2:null,AbS:null,AuV:false,Awt:false,CT:function(){this.An();},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Io=((Ae&0x40)===0x40);if(Io){this.M7.L(A.
jb.Bh);this.NQ.L(A.jb.Bh);}else{this.M7.L(A.jb.Text);this.NQ.L(A.jb.Text);}if(this.
Awt){this.M7.Q(A.aaR(A.acf.Bli));if(this.AuV){this.T1.Ax(A.aaL(C.AFm));this.V$.Ax(
A.aaL(C.AFm));}else{this.T1.Ax(A.aaL(C.Arv));this.V$.Ax(A.aaL(C.Arv));}}else if(
this.AuV){this.T1.Ax(A.aaL(C.AA7));this.V$.Ax(A.aaL(C.AA7));this.M7.Q(PM);}var A1x=
this.Awt||this.AuV;this.T1.Y(A1x);this.V$.Y(A1x);this.M7.Y(A1x);this.Y2.Ar(this.
Awt);},Bkq:function(E){if(this.Awt===E)return;this.Awt=E;this.An();},Bj3:function(
E){if(this.AuV===E)return;this.AuV=E;this.An();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Am._Init.call(this.T1={I:this},0);A.acg.Am._Init.call(this.
V$={I:this},0);A.acg.Am._Init.call(this.Aki={I:this},0);A.kR.CP._Init.call(this.
M7={I:this},0);A.kR.CP._Init.call(this.NQ={I:this},0);A.Core.Bi._Init.call(this.
Y2={I:this},0);A.Core.Bi._Init.call(this.AbS={I:this},0);this.__proto__=C.L8;var
B;this.G(PN);this.T1.AV(0x6);this.T1.G(CJ);this.T1.L(A.jb.C0);this.T1.Cr(1);this.
V$.AV(0x6);this.V$.G(CJ);this.V$.L(A.jb.Text);this.Aki.AV(0xE);this.Aki.G(E2);this.
M7.AV(0x7);this.M7.G(Li);this.M7.A2(0x11);this.M7.L(0xFF000000);this.NQ.AV(0x3);
this.NQ.G(PO);this.NQ.Q(A.aaR(A.acf.Temperature));this.NQ.A2(0x11);this.NQ.L(0xFF000000
);this.Y2.AV(0x3);this.Y2.Kc(Km);this.Y2.Kb(NV);this.Y2.DJ(PP);this.Y2.DX(Mt);this.
AbS.AV(0x3);this.AbS.Kc(SF);this.AbS.Kb(Uk);this.AbS.DJ(Zn);this.AbS.DX(Wr);this.
J(this.T1,0);this.J(this.V$,0);this.J(this.Aki,0);this.J(this.M7,0);this.J(this.
NQ,0);this.J(this.Y2,0);this.J(this.AbS,0);this.T1.Ax(A.aaL(C.Arv));this.V$.Ax(A.
aaL(C.Arv));this.Aki.Ax(A.aaL(C.ASM));this.M7.S(A.aaL(A.fl.Ah));this.M7.A5(A.aaL(
A.fl.Ak));this.M7.CC(A.aaL(A.fl.By));this.NQ.S(A.aaL(A.fl.Ah));this.NQ.A5(A.aaL(
A.fl.Ak));this.NQ.CC(A.aaL(A.fl.By));this.Y2.Lb=[B=A._GetAutoObject(A.acp.K1),B.
Bb8];this.AbS.Lb=[B=A._GetAutoObject(A.acp.K1),B.BbT];},_Done:function(){this.__proto__=
A.Core.O;this.T1._Done();this.V$._Done();this.Aki._Done();this.M7._Done();this.NQ.
_Done();this.Y2._Done();this.AbS._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.T1._ReInit();this.V$._ReInit();this.Aki._ReInit(
);this.M7._ReInit();this.NQ._ReInit();this.Y2._ReInit();this.AbS._ReInit();this.
NQ.Q(A.aaR(A.acf.Temperature));this.M7.S(A.aaL(A.fl.Ah));this.M7.A5(A.aaL(A.fl.Ak
));this.M7.CC(A.aaL(A.fl.By));this.NQ.S(A.aaL(A.fl.Ah));this.NQ.A5(A.aaL(A.fl.Ak
));this.NQ.CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.XU={CT:function(){this.An();
},Ai:function(Ae){C.Aqd.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.Q(
A.aaR(A.acf.Filter));},A5T:function(H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null
);if(!!DV)A._GetAutoObject(A.acp.AfZ).E9(DV.D2);},A5R:function(H){A._GetAutoObject(
A.acp.AfZ).Delete();},_Init:function(aArg){C.Aqd._Init.call(this,aArg);this.__proto__=
C.XU;this.Am.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Aqd._ReInit.call(this);this.
CT();},_className:"Demonstrator::FilterView"};C.Aaw={Df:null,XN:null,RN:null,XO:
null,Iv:null,X5:null,Al0:null,As:null,OQ:null,MQ:null,Aav:null,FJ:0,AuK:0,AEt:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.RN.Q(this.As.Format(IJ));if(this.
AEt){this.RN.Y(false);this.X5.Y(false);this.Iv.Y(false);this.XO.Y(false);this.OQ.
Ar(true);this.OQ.Y(true);this.MQ.Cr(2);this.MQ.ARc(2);this.MQ.G(A.abM(this.MQ.M,
this.OQ.M[2]));}else{this.RN.Y(true);this.X5.Y(true);this.Iv.Y(true);this.XO.Y(true
);this.OQ.Ar(false);this.OQ.Y(false);this.MQ.Cr(3);this.MQ.ARc(3);this.MQ.G(A.abM(
this.MQ.M,this.RN.M[2]));}},BwU:function(H){this.Bj9(!this.AEt);},AcR:function(H
){var F;if(!!this.Df)this.TP((F=this.Df,F[1].call(F[0])));},Abu:function(E){if(A.
aaZ(this.Df,E))return;if(!!this.Df)A.z$([this,this.AcR],this.Df,0);this.Df=E;if(
!!E)A.zX([this,this.AcR],E,0);if(!!E)A.pe([this,this.AcR],this);},TP:function(E){
if(this.FJ===E)return;this.FJ=E;this.As.Initialize(this.FJ);this.Bx0(this);this.
An();},AhX:function(H){var B;var F;var BL=this.FJ;var Ait=this.Aav.C$(this.AuK);
this.AHB(Ait);if(this.As.Year>2100)this.As.Initialize2(2100,12,31,0,0,0);this.TP(((
B=(this.As.JF()|0))<0)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.Df)(F=this.Df
,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}},AhJ:function(H){var B;var F;var BL=
this.FJ;var Ait=this.Aav.C$(this.AuK);this.AJk(Ait);if(this.As.Year<2000)this.As.
Initialize2(2000,1,1,0,0,0);this.TP(((B=(this.As.JF()|0))<0)?B+0x100000000:B);if(
this.FJ!==BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],this.FJ));A.abo(this.Df,0);
}},BjJ:function(E){if(this.AuK===E)return;this.AuK=E;},Bj9:function(E){if(this.AEt===
E)return;this.AEt=E;this.An();},Bxs:function(H){var B;var F;var BL=this.FJ;this.
As.Ld(this.OQ.ACW());this.As.TS(this.OQ.AC1());this.As.Year=this.OQ.AqC();this.TP(((
B=(this.As.JF()|0))<0)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.Df)(F=this.Df
,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}},Bx0:function(H){this.OQ.Ld(this.As.
Gv);this.OQ.TS(this.As.G7);this.OQ.Aj2(this.As.Year);},AHB:function(AxF){var B;switch(
AxF){case 0:if(this.As.Gv<this.As.YM())this.As.Ld(this.As.Gv+1);else{this.As.Ld(
1);this.AHB(2);}break;case 1:if((this.As.Gv+7)<=this.As.YM())this.As.Ld(this.As.
Gv+7);else{this.As.Ld((7-this.As.YM())+this.As.Gv);this.AHB(2);}break;case 2:if(
this.As.G7<12)this.As.TS(this.As.G7+1);else{this.As.TS(1);this.AHB(3);}break;case
3:this.As.Year++;break;default:throw new Error(Ul+AxF.toFixed());}},AJk:function(
AxF){var B;switch(AxF){case 0:if(this.As.Gv>1)this.As.Ld(this.As.Gv-1);else{this.
AJk(2);this.As.Ld(this.As.YM());}break;case 1:if((this.As.Gv-7)>0)this.As.Ld(this.
As.Gv-7);else{this.AJk(2);this.As.Ld(this.As.YM()-(7-this.As.Gv));}break;case 2:
if(this.As.G7>1)this.As.TS(this.As.G7-1);else{this.As.TS(12);this.AJk(3);}break;
case 3:this.As.Year--;break;default:throw new Error(Ul+AxF.toFixed());}},BhO:function(
){return this.AuK;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text.
_Init.call(this.XN={I:this},0);A.acg.Text._Init.call(this.RN={I:this},0);C.Auy._Init.
call(this.XO={I:this},0);A.acv.Iv._Init.call(this.Iv={I:this},0);C.Auy._Init.call(
this.X5={I:this},0);A.acg.Am._Init.call(this.Al0={I:this},0);A.Core.Bt._Init.call(
this.As={I:this},0);C.ALJ._Init.call(this.OQ={I:this},0);C.Auy._Init.call(this.MQ={
I:this},0);C.Aav._Init.call(this.Aav={I:this},0);this.__proto__=C.Aaw;this.G(Zo);
this.XN.G(Ws);this.XN.A2(0x11);this.XN.Q(A.aaR(A.acf.Date));this.XN.L(0xFF000000
);this.RN.G(Zp);this.RN.A2(0x11);this.RN.Q(Um);this.RN.L(0xFF000000);this.XO.G(Zq
);this.XO.A7p(200);this.Iv.G(Zr);this.Iv.AvC(120);this.Iv.GP=30;this.Iv.A6_(A.jb.
C0);this.Iv.BiK(A.jb.C0);this.Iv.BiO(A.jb.C0);this.Iv.A6$(A.jb.Text);this.Iv.BiP(
A.jb.Text);this.Iv.BiL(A.jb.AY);this.Iv.BiQ(A.jb.Bh);this.Iv.BiN(A.jb.AY);this.Iv.
BiM(A.jb.Text);this.X5.G(Un);this.X5.A7p(200);this.Al0.G(Wt);this.OQ.G(QZ);this.
MQ.G(Zs);this.MQ.Cr(3);this.MQ.ARc(3);this.MQ.L(A.jb.Text);this.J(this.XN,0);this.
J(this.RN,0);this.J(this.XO,0);this.J(this.Iv,0);this.J(this.X5,0);this.J(this.Al0
,0);this.J(this.OQ,0);this.J(this.MQ,0);this.XN.S(A.aaL(A.fl.Ak));this.RN.S(A.aaL(
A.fl.Ey));this.XO.AQ=[this,this.AhJ];this.XO.Dy(A.aaL(C.AK7));this.XO.ARd(A.aaL(
C.AK8));this.Iv.Av([this,this.BhO,this.BjJ]);this.Iv.BiV(this.Aav);this.Iv.ADs(A.
aaL(A.fl.Ak));this.Iv.AQZ(A.aaL(A.fl.Ak));this.X5.AQ=[this,this.AhX];this.X5.Dy(
A.aaL(C.AK9));this.X5.ARd(A.aaL(C.AK_));this.Al0.Ax(A.aaL(C.AN_));this.OQ.Di=[this
,this.Bxs];this.MQ.AQ=[this,this.BwU];this.MQ.Dy(A.aaL(A.ach.AlQ));this.MQ.ARd(A.
aaL(A.ach.AlQ));},_Done:function(){this.__proto__=A.Core.O;this.XN._Done();this.
RN._Done();this.XO._Done();this.Iv._Done();this.X5._Done();this.Al0._Done();this.
As._Done();this.OQ._Done();this.MQ._Done();this.Aav._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.XN._ReInit();this.RN.
_ReInit();this.XO._ReInit();this.Iv._ReInit();this.X5._ReInit();this.Al0._ReInit(
);this.As._ReInit();this.OQ._ReInit();this.MQ._ReInit();this.Aav._ReInit();this.
XN.Q(A.aaR(A.acf.Date));this.XN.S(A.aaL(A.fl.Ak));this.RN.S(A.aaL(A.fl.Ey));this.
Iv.ADs(A.aaL(A.fl.Ak));this.Iv.AQZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Df)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.As)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aav)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.Auy={C3:null,Av6:null,ALX:null,AQ:null,Bk:null,De:null,CO:null,Hk:null,X1:null
,ANM:0,Tp:0,ARP:0,AP:0xFFFFFFFF,AZS:false,Lt:false,Ks:false,P8:false,Ai:function(
Ae){var B;A.acn.AgR.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===
0x20);var Gm=this.CO.Down&&this.CO.X8;if(!G1)this.Hk.Ax(this.ALX);else if(Gm){this.
Hk.Ax(this.Av6);this.Hk.Cr(this.ARP);}else{this.Hk.Ax(this.C3);this.Hk.Cr(this.Tp
);}this.Hk.L(this.AP);this.Lt=G1;this.Ks=Fg;this.P8=Gm;},P7:function(H){this.An(
);A.pe(this.AQ,this);},Ah9:function(H){if(this.CO.Down)return;if(this.De.AbG)return;
this.An();if(this.Bk.Bw){A.pe(this.AQ,this);this.Bk.Ar(false);}this.Bk.Ar(true);
},BbR:function(H){this.An();},Azc:function(H){if(!this.CO.X8)return;if(this.CO.Nt
)return;if((this.X1.U5<=0)||(this.CO.Jg<this.X1.U5)){if(this.CO.Jg>=this.Bk.U5)A.
pe(this.AQ,this);else this.Bk.Ar(true);}this.X1.Ar(false);},Azb:function(H){this.
X1.Ar(true);if(this.Bk.Bw){A.pe(this.AQ,this);this.Bk.Ar(false);}},Dy:function(E
){if(this.C3===E)return;this.C3=E;this.An();},ARd:function(E){if(this.Av6===E)return;
this.Av6=E;this.An();},A0S:function(H){if(!this.CO.X8)return;if(this.CO.Nt)return;
if((this.ANM>=0)&&this.AZS){this.AZS=false;this.X1.Ar(true);A.pe(this.AQ,this);}
},A7p:function(E){if(this.ANM===E)return;this.ANM=E;this.X1.V2(E);},Bwo:function(
H){this.AZS=true;},Cr:function(E){if(this.Tp===E)return;this.Tp=E;this.An();},ARc:
function(E){if(this.ARP===E)return;this.ARP=E;this.An();},L:function(E){if(this.
AP===E)return;this.AP=E;this.An();},_Init:function(aArg){A.acn.AgR._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bk={I:this},0);A.Core.BO._Init.call(this.De={
I:this},0);A.Core.Bi._Init.call(this.CO={I:this},0);A.acg.Am._Init.call(this.Hk={
I:this},0);A.Core.Timer._Init.call(this.X1={I:this},0);this.__proto__=C.Auy;this.
G(OJ);this.Bk.QJ(0);this.Bk.V2(50);this.De.Filter=149;this.CO.AV(0x3F);this.CO.Kc(
PQ);this.CO.Kb(Wu);this.CO.DJ(Wv);this.CO.DX(Km);this.CO.Aer=0xF;this.CO.ADL(100
);this.Hk.AV(0x3F);this.Hk.G(OJ);this.Hk.A2(0x12);this.X1.QJ(0);this.J(this.CO,0
);this.J(this.Hk,0);this.Bk.M6=[this,this.P7];this.De.BP=[this,this.Ah9];this.CO.
AC6=[this,this.BbR];this.CO.AuY=[this,this.BbR];this.CO.DR=[this,this.A0S];this.
CO.Lb=[this,this.Azc];this.CO.BP=[this,this.Azb];this.Hk.Ax(A.aaL(A.aci.Tl));this.
C3=A.aaL(A.aci.Tl);this.Av6=A.aaL(A.aci.Tl);this.ALX=A.aaL(A.aci.Tl);this.X1.M6=[
this,this.Bwo];},_Done:function(){this.__proto__=A.acn.AgR;this.Bk._Done();this.
De._Done();this.CO._Done();this.Hk._Done();this.X1._Done();A.acn.AgR._Done.call(
this);},_ReInit:function(){A.acn.AgR._ReInit.call(this);this.Bk._ReInit();this.De.
_ReInit();this.CO._ReInit();this.Hk._ReInit();this.X1._ReInit();},_Mark:function(
D){var B;A.acn.AgR._Mark.call(this,D);if((B=this.C3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Av6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AKN={Pf:null,V:null,AdI:null,_Init:function(aArg){
C.Fn._Init.call(this,aArg);A.acg.AI._Init.call(this.Pf={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.AdI._Init.call(this.AdI={I:this},0);this.__proto__=C.AKN;
this.G(Ww);this.Pf.AV(0x1D);this.Pf.G(B9);this.Pf.L(0xFFE6E6E6);this.V.AV(0x1D);
this.V.G(Zt);this.V.A2(0x11);this.V.Q(A.aaR(A.acf.A2z));this.V.L(0xFF000000);this.
AdI.G(Zu);this.J(this.Pf,0);this.J(this.V,0);this.J(this.AdI,0);this.V.S(A.aaL(A.
fl.Ah));},_Done:function(){this.__proto__=C.Fn;this.Pf._Done();this.V._Done();this.
AdI._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.
Pf._ReInit();this.V._ReInit();this.AdI._ReInit();this.V.Q(A.aaR(A.acf.A2z));this.
V.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.
Pf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Atu={Pf:null,V:null,Ad7:null,Ad5:null,Bi:null,DD:Wx,AjF:false,Ai:function(Ae
){C.Fn.Ai.call(this,Ae);if(this.AjF){this.Ad5.Y(true);this.Ad7.Y(false);}else{this.
Ad5.Y(false);this.Ad7.Y(true);}},Bxe:function(H){if(this.AjF)A.pe(this.AgB,this);
else A.pe(this.AgC,this);this.ADO(!this.AjF);},U:function(E){if(this.DD===E)return;
this.DD=E;this.V.Q(E);},ADO:function(E){if(this.AjF===E)return;this.AjF=E;this.An(
);},_Init:function(aArg){C.Fn._Init.call(this,aArg);A.acg.AI._Init.call(this.Pf={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Am._Init.call(this.Ad7={
I:this},0);A.acg.Am._Init.call(this.Ad5={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);this.__proto__=C.Atu;this.G(B9);this.Pf.AV(0x1D);this.Pf.G(B9);this.Pf.
L(0xFFE6E6E6);this.V.AV(0x1D);this.V.G(Wy);this.V.A2(0x11);this.V.Q(Wx);this.V.L(
0xFF000000);this.Ad7.G(SG);this.Ad7.Y(false);this.Ad5.AV(0x3A);this.Ad5.G(SG);this.
Bi.Kc(Km);this.Bi.Kb(Zv);this.Bi.DJ(Zw);this.Bi.DX(Mt);this.J(this.Pf,0);this.J(
this.V,0);this.J(this.Ad7,0);this.J(this.Ad5,0);this.J(this.Bi,0);this.V.S(A.aaL(
A.fl.Ah));this.Ad7.Ax(A.aaL(C.AKQ));this.Ad5.Ax(A.aaL(C.AiN));this.Bi.Lb=[this,this.
Bxe];},_Done:function(){this.__proto__=C.Fn;this.Pf._Done();this.V._Done();this.
Ad7._Done();this.Ad5._Done();this.Bi._Done();C.Fn._Done.call(this);},_ReInit:function(
){C.Fn._ReInit.call(this);this.Pf._ReInit();this.V._ReInit();this.Ad7._ReInit();
this.Ad5._ReInit();this.Bi._ReInit();this.V.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Fn._Mark.call(this,D);if((B=this.Pf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.A$={AW:null,AQ:null,
CO:null,Hr:-1,YP:function(E){if(this.AW===E)return;this.AW=E;},B$:function(Ac){A.
ab5("%s",Ab7);},YQ:function(E){if(A.aa0(this.AQ,E))return;this.AQ=E;},Azc:function(
H){if(!this.CO.X8)return;if(this.CO.Nt)return;A.pe(this.AQ,this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.Bi._Init.call(this.CO={I:this},0);this.
__proto__=C.A$;this.G(B9);this.CO.AV(0x3F);this.CO.Kc(Mt);this.CO.Kb(Zw);this.CO.
DJ(Zv);this.CO.DX(Km);this.CO.Aer=0xF;this.CO.ADL(100);this.J(this.CO,0);this.CO.
Lb=[this,this.Azc];},_Done:function(){this.__proto__=A.Core.O;this.CO._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.CO.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AW)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fn={AQc:null,AgC:null,AgB:null,Bj6:function(E){if(A.aa0(this.AQc,E))return;this.
AQc=E;},A7z:function(E){if(A.aa0(this.AgC,E))return;this.AgC=E;},A7y:function(E){
if(A.aa0(this.AgB,E))return;this.AgB=E;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.Fn;this.G(B9);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AQc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ALJ={Di:null
,Aal:null,Wj:null,Wi:null,Wh:null,M0:null,MZ:null,KC:null,Lt:false,Ks:false,Bx7:
false,Ai:function(Ae){var B;A.acn.AgP.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);
var Fg=((Ae&0x20)===0x20);var BaW=(this.Wh.Y7||this.Wi.Y7)||this.Wj.Y7;if(BaW)this.
Aal.L(A.jb.Text);else this.Aal.L(A.jb.Bb);this.Lt=G1;this.Ks=Fg;this.Bx7=BaW;},Ay9:
function(H){this.An();if((!this.Wh.Y7&&!this.Wi.Y7)&&!this.Wj.Y7){var UE=this.AIu(
this.AC1(),this.AqC());var Acy=this.ACW();this.KC.Jm(UE);if(Acy>UE)this.Ld(UE);A.
pe(this.Di,this);}},A08:function(H){this.An();},Bir:function(H){var B;var FS=this.
M0.GN;var Cw=(A.acg.Text.isPrototypeOf(B=this.M0.Ca)?B:null);if(!Cw)return;Cw.Q(
A.abl(FS+1900,4,10));Cw.S(A.aaL(A.fl.Ah));Cw.L(A.jb.Text);Cw.A2(0x12);Cw.G(A.abK(
Cw.M,[(B=this.M0.M)[2]-B[0],this.M0.GP]));},Biq:function(H){var B;var FS=this.MZ.
GN;var Cw=(A.acg.Text.isPrototypeOf(B=this.MZ.Ca)?B:null);if(!Cw)return;Cw.Q(A.abl(
FS+1,2,10)+Uo);Cw.S(A.aaL(A.fl.Ah));Cw.L(A.jb.Text);Cw.A2(0x12);Cw.G(A.abK(Cw.M,[(
B=this.MZ.M)[2]-B[0],this.MZ.GP]));},Bio:function(H){var B;var FS=this.KC.GN;var
Cw=(A.acg.Text.isPrototypeOf(B=this.KC.Ca)?B:null);if(!Cw)return;Cw.Q(A.abl(FS+1
,2,10)+Uo);Cw.S(A.aaL(A.fl.Ah));Cw.L(A.jb.Text);Cw.A2(0x12);Cw.G(A.abK(Cw.M,[(B=
this.KC.M)[2]-B[0],this.KC.GP]));},AqC:function(){return 1900+((((-this.M0.Bp/this.
M0.GP)|0)+2)%200);},Aj2:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.M0.Ga(((
E-1900)-2)*-this.M0.GP);var UE=this.AIu(this.AC1(),E);this.KC.Jm(UE);if(this.ACW(
)>UE)this.Ld(UE);},AC1:function(){return 1+((((-this.MZ.Bp/this.MZ.GP)|0)+2)%12);
},TS:function(E){if(E<1)E=1;if(E>12)E=12;this.MZ.Ga(((E-1)-2)*-this.MZ.GP);var UE=
this.AIu(E,this.AqC());this.KC.Jm(UE);if(this.ACW()>UE)this.Ld(UE);},ACW:function(
){return 1+((((-this.KC.Bp/this.KC.GP)|0)+2)%this.KC.AR);},Ld:function(E){var UE=
this.AIu(this.AC1(),this.AqC());if(E<1)E=1;if(E>UE)E=UE;this.KC.Ga(((E-2)-1)*-this.
KC.GP);},AIu:function(Ae2,Acp){if(Ae2===2){if(!(Acp%4)&&(!!(Acp%100)||!(Acp%400)
))return 29;else return 28;}else if((((Ae2===4)||(Ae2===6))||(Ae2===9))||(Ae2===
11))return 30;else return 31;},_Init:function(aArg){A.acn.AgP._Init.call(this,aArg
);A.acg.Cy._Init.call(this.Aal={I:this},0);A.Core.HZ._Init.call(this.Wj={I:this}
,0);A.Core.HZ._Init.call(this.Wi={I:this},0);A.Core.HZ._Init.call(this.Wh={I:this
},0);A.Core.CF._Init.call(this.M0={I:this},0);A.Core.CF._Init.call(this.MZ={I:this
},0);A.Core.CF._Init.call(this.KC={I:this},0);this.__proto__=C.ALJ;this.G(Zx);this.
Aal.G(AeS);this.Aal.NJ(3);this.Aal.L(0xFFE1E1E1);this.Aal.Y(true);this.Wj.G(Zy);
this.Wj.ARk(Wz);this.Wj.AQ0(0.2);this.Wi.G(WA);this.Wi.ARk(Wz);this.Wi.AQ0(0.2);
this.Wh.G(Zz);this.Wh.ARk(Wz);this.Wh.AQ0(0.2);this.M0.G(Zy);this.M0.AQX(true);this.
M0.Ga(60);this.M0.Aeg(30);this.M0.Jm(200);this.MZ.G(WA);this.MZ.AQX(true);this.MZ.
Ga(60);this.MZ.Aeg(30);this.MZ.Jm(12);this.KC.G(Zz);this.KC.AQX(true);this.KC.Ga(
60);this.KC.Aeg(30);this.KC.Jm(31);this.J(this.Aal,0);this.J(this.Wj,0);this.J(this.
Wi,0);this.J(this.Wh,0);this.J(this.M0,0);this.J(this.MZ,0);this.J(this.KC,0);this.
Wj.YL=[this,this.Ay9];this.Wj.Sg=[this,this.A08];this.Wi.YL=[this,this.Ay9];this.
Wi.Sg=[this,this.A08];this.Wh.YL=[this,this.Ay9];this.Wh.Sg=[this,this.A08];this.
M0.G9=[this,this.Bir];this.M0.AvN(this.Wj);this.MZ.G9=[this,this.Biq];this.MZ.AvN(
this.Wi);this.KC.G9=[this,this.Bio];this.KC.AvN(this.Wh);},_Done:function(){this.
__proto__=A.acn.AgP;this.Aal._Done();this.Wj._Done();this.Wi._Done();this.Wh._Done(
);this.M0._Done();this.MZ._Done();this.KC._Done();A.acn.AgP._Done.call(this);},_ReInit:
function(){A.acn.AgP._ReInit.call(this);this.Aal._ReInit();this.Wj._ReInit();this.
Wi._ReInit();this.Wh._ReInit();this.M0._ReInit();this.MZ._ReInit();this.KC._ReInit(
);},_Mark:function(D){var B;A.acn.AgP._Mark.call(this,D);if((B=this.Di)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.MZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KC).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"};C.AFE={_class:
function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ATw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AgY={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.AgY;this.G(EU);},_className:"Demonstrator::SelectionAreaContent"};C.AKG={Z:null
,UX:null,Tb:null,BxG:function(H){var B;this.Tb.G(A.abI(this.Tb.M,((B=this.M)[3]-
B[1])-((B=this.UX.M)[3]-B[1])));},_Init:function(aArg){C.AgY._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.AKa._Init.call(this.UX={I:this},0);C.
ATe._Init.call(this.Tb={I:this},0);this.__proto__=C.AKG;this.Z.AV(0x3F);this.Z.G(
EU);this.Z.J$(1);this.UX.G(AeT);this.UX.Aj(true);this.UX.ADO(true);this.Tb.AV(0x3
);this.Tb.G(JN);this.Tb.Aj(true);this.Tb.NI(C.AKz);this.Tb.Bj1(C.AKN);this.J(this.
Z,0);this.J(this.UX,0);this.J(this.Tb,0);this.Ba(this.Tb);this.Z.Eh=[this,this.BxG
];this.Tb.YP(A._GetAutoObject(A.acp.Apt));},_Done:function(){this.__proto__=C.AgY;
this.Z._Done();this.UX._Done();this.Tb._Done();C.AgY._Done.call(this);},_ReInit:
function(){C.AgY._ReInit.call(this);this.Z._ReInit();this.UX._ReInit();this.Tb._ReInit(
);},_Mark:function(D){var B;C.AgY._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UX={
_Init:function(aArg){C.Atu._Init.call(this,aArg);this.__proto__=C.UX;this.U(A.aaR(
A.acf.A3D));},_ReInit:function(){C.Atu._ReInit.call(this);this.U(A.aaR(A.acf.A3D
));},_className:"Demonstrator::ActionsHeader"};C.AKa={Background:null,Z$:null,AeE:
null,Aev:null,AeD:null,Ajx:null,Ajy:null,Ajz:null,AjA:null,AjF:false,AgC:function(
H){var B;this.G(A.abI(this.M,(B=this.Z$.M)[3]-B[1]));},AgB:function(H){this.G(A.
abI(this.M,240));},ADO:function(E){if(this.AjF===E)return;this.AjF=E;this.Z$.ADO(
E);if(E)this.AgC(this);else this.AgB(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.UX._Init.call(
this.Z$={I:this},0);C.AeE._Init.call(this.AeE={I:this},0);C.Aev._Init.call(this.
Aev={I:this},0);C.AeD._Init.call(this.AeD={I:this},0);A.acg.DQ._Init.call(this.Ajx={
I:this},0);A.acg.DQ._Init.call(this.Ajy={I:this},0);A.acg.DQ._Init.call(this.Ajz={
I:this},0);A.acg.DQ._Init.call(this.AjA={I:this},0);this.__proto__=C.AKa;this.G(
AeT);this.Background.AV(0x3F);this.Background.G(AeT);this.Z$.AV(0x1D);this.Z$.G(
B9);this.AeE.G(AeU);this.Aev.G(Lj);this.AeD.G(Aha);this.Ajx.DJ(Zw);this.Ajx.DX(Mt
);this.Ajx.L(A.jb.Bb);this.Ajy.DJ(Anw);this.Ajy.DX(NW);this.Ajy.L(A.jb.Bb);this.
Ajz.DJ(WC);this.Ajz.DX(Anx);this.Ajz.L(A.jb.Bb);this.AjA.DJ(Ahb);this.AjA.DX(Ahc
);this.AjA.L(A.jb.Bb);this.J(this.Background,0);this.J(this.Z$,0);this.J(this.AeE
,0);this.J(this.Aev,0);this.J(this.AeD,0);this.J(this.Ajx,0);this.J(this.Ajy,0);
this.J(this.Ajz,0);this.J(this.AjA,0);this.Z$.A7z([this,this.AgC]);this.Z$.A7y([
this,this.AgB]);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.Z$._Done();this.AeE._Done();this.Aev._Done();this.AeD._Done();this.Ajx._Done(
);this.Ajy._Done();this.Ajz._Done();this.AjA._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Z$.
_ReInit();this.AeE._ReInit();this.Aev._ReInit();this.AeD._ReInit();this.Ajx._ReInit(
);this.Ajy._ReInit();this.Ajz._ReInit();this.AjA._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aev)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ajy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"
};C.L7={AaV:null,Agl:null,Bi:null,DQ:null,Ah5:function(H){},AX_:function(s){this.
Ah5(s);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(
this.AaV={I:this},0);A.acg.Am._Init.call(this.Agl={I:this},0);A.Core.Bi._Init.call(
this.Bi={I:this},0);A.acg.DQ._Init.call(this.DQ={I:this},0);this.__proto__=C.L7;
this.G(B9);this.AaV.G(Ab8);this.AaV.L(A.jb.Text);this.Agl.G(Uq);this.Agl.L(A.jb.
Text);this.Agl.Cr(0);this.Bi.Kc(Km);this.Bi.Kb(NV);this.Bi.DJ(PP);this.Bi.DX(Mt);
this.DQ.DJ(PP);this.DQ.DX(NV);this.DQ.L(A.jb.Bb);this.J(this.AaV,0);this.J(this.
Agl,0);this.J(this.Bi,0);this.J(this.DQ,0);this.AaV.Ax(A.aaL(A.aci.Tl));this.Agl.
Ax(A.aaL(A.aci.ARF));this.Bi.BP=[this,this.AX_];},_Done:function(){this.__proto__=
A.Core.O;this.AaV._Done();this.Agl._Done();this.Bi._Done();this.DQ._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AaV._ReInit(
);this.Agl._ReInit();this.Bi._ReInit();this.DQ._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Aev={AeI:null,Ah5:function(H){var AfD=A.ab0(this.AeI.String,0,10);var BxV=A.
_GetAutoObject(A.acp.K1).AzK(AfD);if(BxV){AfD=AfD+1;this.AeI.Q(AfD.toFixed());}}
,_Init:function(aArg){C.L7._Init.call(this,aArg);C.Aqu._Init.call(this.AeI={I:this
},0);this.__proto__=C.Aev;this.AeI.G(Any);this.AeI.Q(Anz);this.AeI.L(A.jb.Text);
this.J(this.AeI,-1);this.AaV.Ax(A.aaL(A.ach.Aml));},_Done:function(){this.__proto__=
C.L7;this.AeI._Done();C.L7._Done.call(this);},_ReInit:function(){C.L7._ReInit.call(
this);this.AeI._ReInit();},_Mark:function(D){var B;C.L7._Mark.call(this,D);if((B=
this.AeI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.AeE={Ua:null,OB:null,A1N:0,Init:function(aArg){var B;A.zX([this,this.Bw0],[B=A.
_GetAutoObject(A.acp.K1),B.AQD,B.ARe],0);A.zX([this,this.Azf],[B=A._GetAutoObject(
A.Device.Device),B.AqA,B.Asi],0);A.pe([this,this.Azf],this);},Ai:function(Ae){C.
L7.Ai.call(this,Ae);this.OB.Y(!A._GetAutoObject(A.acp.K1).Av7);},Ah5:function(H){
var B;A._GetAutoObject(A.acp.K1).BbT(this);},Azf:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A1N){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OB.Q(A.abk(A._GetAutoObject(A.acp.K1).ArI/100,0,1
));break;case 1:{var Atj=A._GetAutoObject(A.Device.Converter).ASQ(A._GetAutoObject(
A.acp.K1).ArI/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OB.Q(
A.abk(Atj,0,1));}break;default:A.ab5("%s%e",AwF,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A1N=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BwJ:function(H){var B;var Ati=A.abX(this.OB.String,0);Ati=A._GetAutoObject(A.Device.
Converter).ASQ(Ati,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Ati*=100;
A._GetAutoObject(A.acp.K1).A7S(Math.round(Ati)|0);},Bw0:function(H){this.An();},
_Init:function(aArg){C.L7._Init.call(this,aArg);A.acq.Ua._Init.call(this.Ua={I:this
},0);C.OB._Init.call(this.OB={I:this},0);this.__proto__=C.AeE;var B;this.Ua.G(AwG
);this.Ua.A7t(A.aaR(A.acf.A2G));this.OB.G(Akv);this.OB.Q(AwH);this.OB.L(A.jb.Text
);this.OB.BiX(true);this.A1N=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.Ua,0);this.J(this.OB,0);this.AaV.Ax(A.aaL(A.ach.AaU));this.Ua.Av([B=A._GetAutoObject(
A.acp.K1),B.AQD,B.ARe]);this.Ua.OnSetAppearance(A._GetAutoObject(A.acx.AtO));this.
OB.Di=[this,this.BwJ];this.Init(aArg);},_Done:function(){this.__proto__=C.L7;this.
Ua._Done();this.OB._Done();C.L7._Done.call(this);},_ReInit:function(){C.L7._ReInit.
call(this);this.Ua._ReInit();this.OB._ReInit();this.Ua.A7t(A.aaR(A.acf.A2G));},_Mark:
function(D){var B;C.L7._Mark.call(this,D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aqd={R:null,Cy:null,Bi:null,AfX:null,Amq:null,Amp:null,Aqi:null,Text:null,Hb:
null,Am:null,CR:null,Aqh:null,Aqj:null,Aou:false,Bg:function(aSize){this.Hb.G(A.
abK(this.Hb.M,aSize));this.Cy.Awb(1);this.Cy.Jh(0,40);this.Cy.E8(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.Cy.E8(0,20,20,12.5,12.5,90,270,10);this.Cy.Vc(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Io=((Ae&0x40)===0x40);if(
Io){if(!!this.R)this.Text.Q((F=this.R,F[1].call(F[0])));this.AfX.Ar(true);this.Am.
Y(false);}else{if(!!this.R)this.Text.Q((F=this.R,F[1].call(F[0])));this.AfX.Ar(false
);this.CR.Y(false);this.Am.Y(true);}this.Aou=Io;},Ah5:function(H){var B;if(!((this.
T&0x80)===0x80))this.Ia().AKY(this);},A5T:function(H){},A99:function(s){this.A5T(
s);},Bg1:function(H){var B;var F;if(!this.R||!(F=this.R,F[1].call(F[0])).length)
this.CR.G(A.abM(this.CR.M,A.aaI(this.Text.M)[0]));else{this.CR.G(A.abM(this.CR.M
,this.Text.AMW(0)[2]+2));this.CR.G(A.abO(this.CR.M,this.Text.AMW(0)[1]));this.CR.
G(A.abI(this.CR.M,(B=this.Text.AMW(0))[3]-B[1]));}this.Am.G(A.abM(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A5R:function(H){},A98:function(s){this.A5R(
s);},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.OT],this.
R,0);this.R=E;if(!!E)A.zX([this,this.OT],E,0);if(!!E)A.pe([this,this.OT],this);}
,OT:function(H){this.An();},Bit:function(H){var B;if(((this.T&0x80)===0x80))this.
Ia().AA_(this);},Bb1:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hn._Init.call(this.Cy={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);A.acl.U6._Init.call(this.AfX={I:this},0);A.Core.BO._Init.call(this.Amq={
I:this},0);A.Core.BO._Init.call(this.Amp={I:this},0);A.Core.BO._Init.call(this.Aqi={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hb._Init.call(this.
Hb={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.AI._Init.call(this.
CR={I:this},0);A.Core.BO._Init.call(this.Aqh={I:this},0);A.Core.BO._Init.call(this.
Aqj={I:this},0);this.__proto__=C.Aqd;var B;this.G(AeV);this.Bi.AV(0x3F);this.Bi.
Kc(Km);this.Bi.Kb(ArW);this.Bi.DJ(OK);this.Bi.DX(PQ);this.AfX.Fy(530);this.AfX.V5(
530);this.Amq.Filter=143;this.Amp.Filter=45;this.Aqi.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeV);this.Text.IZ(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
Hb.G(AeV);this.Hb.L(0xFFB3B3B3);this.Hb.NJ(1);this.Am.G(SI);this.CR.G(AwI);this.
CR.L(0xFFB3B3B3);this.CR.Y(false);this.Aqh.Filter=138;this.Aqj.Filter=137;this.J(
this.Bi,0);this.J(this.Text,0);this.J(this.Hb,0);this.J(this.Am,0);this.J(this.CR
,0);this.Bi.Lb=[this,this.Ah5];this.AfX.R=[B=this.CR,B.Fc,B.Y];this.Amq.BP=[this
,this.A99];this.Amq.DR=[this,this.A99];this.Amp.BP=[this,this.A98];this.Amp.DR=[
this,this.A98];this.Aqi.BP=[this,this.Bit];this.Text.QI([this,this.Bg1]);this.Text.
S(A.aaL(A.fl.Ak));this.Hb.YR(this.Cy);this.Am.Ax(null);this.Aqh.BP=[this,this.Bb1
];this.Aqj.BP=[this,this.Bb1];},_Done:function(){this.__proto__=A.Core.O;this.Cy.
_Done();this.Bi._Done();this.AfX._Done();this.Amq._Done();this.Amp._Done();this.
Aqi._Done();this.Text._Done();this.Hb._Done();this.Am._Done();this.CR._Done();this.
Aqh._Done();this.Aqj._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Cy._ReInit();this.Bi._ReInit();this.AfX._ReInit();this.
Amq._ReInit();this.Amp._ReInit();this.Aqi._ReInit();this.Text._ReInit();this.Hb.
_ReInit();this.Am._ReInit();this.CR._ReInit();this.Aqh._ReInit();this.Aqj._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cy)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Amp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.AdI={Background:null,XU:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AI._Init.call(this.Background={I:this},0);C.XU._Init.call(this.XU={I:this
},0);this.__proto__=C.AdI;var B;this.G(SJ);this.Background.G(SJ);this.XU.AV(0x1D
);this.XU.G(ArX);this.J(this.Background,0);this.J(this.XU,0);this.XU.Av([B=A._GetAutoObject(
A.acp.AfZ),B.A6w,B.AD3]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.XU._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.XU._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OB={Init:function(aArg){var B;A.zX([this,this.Azf],[B=A._GetAutoObject(A.Device.
Device),B.AqA,B.Asi],0);A.pe([this,this.Azf],this);},Ai:function(Ae){var B;C.Aqu.
Ai.call(this,Ae);var Io=((this.T&0x40)===0x40);if(!Io&&(this.String.length>0))this.
Text.Q(((this.String+AwJ)+A._GetAutoObject(A.acj.Temperature).Ak2())+String.fromCharCode(
0x0A));else this.Text.Q(this.String+String.fromCharCode(0x0A));if(this.Ec>this.String.
length)this.Ec=this.String.length;},Azf:function(H){this.An();},_Init:function(aArg
){C.Aqu._Init.call(this,aArg);this.__proto__=C.OB;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Aqu={B3:null,Di:null,IM:null,Cl:null,AlX:null,RP:null,Kz:null,Bi:null,Text:null
,CR:null,ApE:null,Ard:null,Cy:null,Hb:null,Aqw:null,Ap3:null,ApO:null,String:A.jV
,Ec:0,AP:0xFFB3B3B3,ALL:false,Mz:false,Bg:function(aSize){this.Hb.G(A.abK(this.Hb.
M,aSize));this.Cy.Awb(1);this.Cy.Jh(0,40);this.Cy.E8(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.Cy.E8(0,20,20,12.5,12.5,90,270,10);this.Cy.Vc(0);},Ai:function(Ae
){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IM.Ar(true);else{this.
IM.Ar(false);this.CR.Y(false);}},A1Y:function(H){var B;var A9=this.Text.M;var Ni=
0;var Nj=0;if(this.CR.Ei[0]<A9[0])Ni=A9[0]-this.CR.Ei[0];if(this.CR.Ei[0]>A9[2])
Ni=A9[2]-this.CR.Ei[0];if(this.CR.Ei[1]<A9[1])Nj=A9[1]-this.CR.Ei[1];if(this.CR.
Es[1]>A9[3])Nj=A9[3]-this.CR.Es[1];if(!!Ni||!!Nj)this.Text.Ga(A.abf(this.Text.Bp
,[Ni,Nj]));Ni=this.Text.Bp[0];Nj=this.Text.Bp[1];var CY=[(B=this.Text.C_())[2]-B[
0],B[3]-B[1]];if(CY[0]<=((B=this.Text.M)[2]-B[0]))Ni=0;if(CY[1]<=((B=this.Text.M
)[3]-B[1]))Nj=0;this.Text.Ga([Ni,Nj]);},AlC:function(H){if(!this.B3)return;var A1u=
this.Text.AE$(this.Ec);var pos=this.Text.Aes(A1u);this.CR.DX(A.abe(pos,[0,this.B3.
Ascent]));this.CR.DJ(A.abf(pos,[0,this.B3.Descent]));if(this.IM.Bw){this.IM.Ar(false
);this.IM.Ar(true);}if(this.Mz){A.pe([this,this.A1Y],this);this.Mz=false;}},Azb:
function(H){if(!this.A4z(0x80))this.Ia().AKY(this);var Ev=this.Text.ARJ(this.Bi.
HS);var UK=this.Text.Am$(Ev);if(UK!==this.Ec){this.Ec=UK;A.pe([this,this.AlC],this
);this.Mz=true;}},Ay7:function(H){if(!this.B3)return;var Ev=this.Text.AE$(this.Ec
);if(this.Cl.CH===6){Ev=[Ev[0]-1,Ev[1]];if(this.Text.Am$(Ev)===this.Ec){Ev=[Ev[0
],Ev[1]-1];Ev=[this.Text.ABt(Ev[1]).length,Ev[1]];}}if(this.Cl.CH===7){Ev=[Ev[0]+
1,Ev[1]];if(this.Text.Am$(Ev)===this.Ec){Ev=[Ev[0],Ev[1]+1];Ev=[0,Ev[1]];}}var UK=
this.Text.Am$(Ev);if(UK!==this.Ec){this.Ec=UK;A.pe([this,this.AlC],this);this.Mz=
true;}},BbL:function(H){if(!this.Ec)return;this.Q(A.ab1(this.String,this.Ec-1,1)
);this.Ec=this.Ec-1;this.Mz=true;A.pe(this.Di,this);},Ay8:function(H){if(this.Ec>=
this.String.length)return;this.Q(A.ab1(this.String,this.Ec,1));this.Mz=true;A.pe(
this.Di,this);},BbQ:function(H){if(this.String.length>=15)return;var Bu$=this.Kz.
D2;var Atg=String.fromCharCode(Bu$);this.Q(A.abU(this.String,Atg,this.Ec));this.
Ec=this.Ec+Atg.length;this.Mz=true;A.pe(this.Di,this);},Q:function(E){if(this.String===
E)return;this.String=E;if(this.Ec>(E.length+1))this.Ec=E.length;this.Text.Q(E+String.
fromCharCode(0x0A));this.Mz=true;this.Text.Ga(Km);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CR.L(E);this.Hb.L(E);},S:function(E){if(this.
B3===E)return;this.B3=E;this.Text.S(E);this.Mz=true;this.Text.Ga(Km);},Bb2:function(
H){if(this.ALL===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=15)return;this.Q(A.abU(this.String,Uo,this.Ec
));this.Ec=this.Ec+1;this.Mz=true;A.pe(this.Di,this);},BiX:function(E){if(this.ALL===
E)return;this.ALL=E;if(E===false){var BcF=this.String.indexOf(String.fromCharCode(
0x2E),0);if(BcF>=0)this.Q(A.abV(this.String,BcF));}this.Mz=true;this.Text.Ga(Km);
},BwR:function(H){if(this.A4z(0x80))this.Ia().AA_(this);this.An();},BwE:function(
H){var UK=this.String.length;if(UK!==this.Ec){this.Ec=UK;A.pe([this,this.AlC],this
);this.Mz=true;}},BwI:function(H){if(!!this.Ec){this.Ec=0;A.pe([this,this.AlC],this
);this.Mz=true;}},_Init:function(aArg){A.acn.I2._Init.call(this,aArg);A.acl.U6._Init.
call(this.IM={I:this},0);A.Core.BO._Init.call(this.Cl={I:this},0);A.Core.BO._Init.
call(this.AlX={I:this},0);A.Core.BO._Init.call(this.RP={I:this},0);A.Core.BO._Init.
call(this.Kz={I:this},0);A.Core.Bi._Init.call(this.Bi={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DQ._Init.call(this.CR={I:this},0);A.Core.BO._Init.
call(this.ApE={I:this},0);A.Core.BO._Init.call(this.Ard={I:this},0);A.Graphics.Hn.
_Init.call(this.Cy={I:this},0);A.acg.Hb._Init.call(this.Hb={I:this},0);A.Core.BO.
_Init.call(this.Aqw={I:this},0);A.Core.BO._Init.call(this.Ap3={I:this},0);A.Core.
BO._Init.call(this.ApO={I:this},0);this.__proto__=C.Aqu;var B;this.G(AeV);this.IM.
B1=false;this.IM.Ct=true;this.IM.Fy(500);this.IM.V5(500);this.Cl.Filter=147;this.
AlX.Filter=45;this.RP.Filter=44;this.Kz.Filter=143;this.Bi.AV(0x3F);this.Bi.Kc(PQ
);this.Bi.Kb(OK);this.Bi.DJ(ArW);this.Bi.DX(Km);this.Bi.ADL(3);this.Text.AV(0x3F
);this.Text.G(AeV);this.Text.KF(false);this.Text.A2(0x12);this.Text.Q(A.jV);this.
Text.L(0xFFB3B3B3);this.CR.DJ(AwK);this.CR.DX(AwL);this.CR.A74(2);this.CR.A73(2);
this.CR.L(0xFFB3B3B3);this.CR.Y(false);this.ApE.Filter=138;this.Ard.Filter=137;this.
Hb.G(AeV);this.Hb.L(0xFFB3B3B3);this.Hb.NJ(1);this.Aqw.Filter=1;this.Ap3.Filter=
41;this.ApO.Filter=42;this.J(this.Bi,0);this.J(this.Text,0);this.J(this.CR,0);this.
J(this.Hb,0);this.IM.R=[B=this.CR,B.Fc,B.Y];this.Cl.BP=[this,this.Ay7];this.Cl.DR=[
this,this.Ay7];this.AlX.BP=[this,this.BbL];this.AlX.DR=[this,this.BbL];this.RP.BP=[
this,this.Ay8];this.RP.DR=[this,this.Ay8];this.Kz.BP=[this,this.BbQ];this.Kz.DR=[
this,this.BbQ];this.Bi.BP=[this,this.Azb];this.Text.QI([this,this.AlC]);this.Text.
S(A.aaL(A.fl.Ak));this.B3=A.aaL(A.fl.Ak);this.ApE.BP=[this,this.Bb2];this.Ard.BP=[
this,this.Bb2];this.Hb.YR(this.Cy);this.Aqw.BP=[this,this.BwR];this.Ap3.BP=[this
,this.BwI];this.ApO.BP=[this,this.BwE];},_Done:function(){this.__proto__=A.acn.I2;
this.IM._Done();this.Cl._Done();this.AlX._Done();this.RP._Done();this.Kz._Done();
this.Bi._Done();this.Text._Done();this.CR._Done();this.ApE._Done();this.Ard._Done(
);this.Cy._Done();this.Hb._Done();this.Aqw._Done();this.Ap3._Done();this.ApO._Done(
);A.acn.I2._Done.call(this);},_ReInit:function(){A.acn.I2._ReInit.call(this);this.
IM._ReInit();this.Cl._ReInit();this.AlX._ReInit();this.RP._ReInit();this.Kz._ReInit(
);this.Bi._ReInit();this.Text._ReInit();this.CR._ReInit();this.ApE._ReInit();this.
Ard._ReInit();this.Cy._ReInit();this.Hb._ReInit();this.Aqw._ReInit();this.Ap3._ReInit(
);this.ApO._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.I2._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.ApE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ard)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ap3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApO)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AeD={LabelDataSync:
null,Ah5:function(H){var B;A.pe([B=A._GetAutoObject(A.acr.And),B.Byb],this);},_Init:
function(aArg){C.L7._Init.call(this,aArg);A.kR.CP._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AeD;this.LabelDataSync.G(AnA);this.LabelDataSync.Q(A.
aaR(A.acf.A3t));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
AaV.Ax(A.aaL(C.ASH));this.LabelDataSync.S(A.aaL(A.fl.Ah));this.LabelDataSync.A5(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.L7;this.LabelDataSync._Done(
);C.L7._Done.call(this);},_ReInit:function(){C.L7._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.Q(A.aaR(A.acf.A3t));this.LabelDataSync.S(A.aaL(A.fl.
Ah));this.LabelDataSync.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.L7._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.ASH={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Aav={TimespanDaysToString:null,ABv:
function(aIndex){if(this.ABq()>aIndex)return this.TimespanDaysToString.B0(aIndex
);A.ab5("%s",AwM);return A.jV;},ABq:function(){return 4;},C$:function(aIndex){var
Ait=0;switch(aIndex){case 0:Ait=0;break;case 1:Ait=1;break;case 2:Ait=2;break;case
3:Ait=3;break;default:throw new Error(ArY+aIndex.toFixed());}return Ait;},_Init:
function(aArg){A.acv.AlZ._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Aav;},_Done:function(
){this.__proto__=A.acv.AlZ;this.TimespanDaysToString._Done();A.acv.AlZ._Done.call(
this);},_ReInit:function(){A.acv.AlZ._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acv.AlZ._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BBR={Gv:0,ATl:1,G7:2,Year:3};C.AA7={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AFm={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.ATe.__proto__=A.acn.Menu;C.ASf.__proto__=A.Core.O;C.AKz.__proto__=
C.A$;C.L8.__proto__=A.Core.O;C.XU.__proto__=C.Aqd;C.Aaw.__proto__=A.Core.O;C.Auy.
__proto__=A.acn.AgR;C.AKN.__proto__=C.Fn;C.Atu.__proto__=C.Fn;C.A$.__proto__=A.Core.
O;C.Fn.__proto__=A.Core.O;C.ALJ.__proto__=A.acn.AgP;C.AgY.__proto__=A.Core.O;C.AKG.
__proto__=C.AgY;C.UX.__proto__=C.Atu;C.AKa.__proto__=A.Core.O;C.L7.__proto__=A.Core.
O;C.Aev.__proto__=C.L7;C.AeE.__proto__=C.L7;C.Aqd.__proto__=A.Core.O;C.AdI.__proto__=
A.Core.O;C.OB.__proto__=C.Aqu;C.Aqu.__proto__=A.acn.I2;C.AeD.__proto__=C.L7;C.Aav.
__proto__=A.acv.AlZ;};C._ReInit=function(){};C.DB=function(D){var B;if((B=C.Background[
0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=null);if((B=C.AK7[0]._this
)&&(B._cycle!=D))B._Done(C.AK7[0]._this=null);if((B=C.AK8[0]._this)&&(B._cycle!=
D))B._Done(C.AK8[0]._this=null);if((B=C.AK9[0]._this)&&(B._cycle!=D))B._Done(C.AK9[
0]._this=null);if((B=C.AK_[0]._this)&&(B._cycle!=D))B._Done(C.AK_[0]._this=null);
if((B=C.AN_[0]._this)&&(B._cycle!=D))B._Done(C.AN_[0]._this=null);if((B=C.Filter[
0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null);if((B=C.APG[0]._this)&&(
B._cycle!=D))B._Done(C.APG[0]._this=null);if((B=C.AiN[0]._this)&&(B._cycle!=D))B.
_Done(C.AiN[0]._this=null);if((B=C.AKQ[0]._this)&&(B._cycle!=D))B._Done(C.AKQ[0].
_this=null);if((B=C.Arv[0]._this)&&(B._cycle!=D))B._Done(C.Arv[0]._this=null);if((
B=C.ASM[0]._this)&&(B._cycle!=D))B._Done(C.ASM[0]._this=null);if((B=C.AFE[0]._this
)&&(B._cycle!=D))B._Done(C.AFE[0]._this=null);if((B=C.ATw[0]._this)&&(B._cycle!=
D))B._Done(C.ATw[0]._this=null);if((B=C.ASH[0]._this)&&(B._cycle!=D))B._Done(C.ASH[
0]._this=null);if((B=C.AA7[0]._this)&&(B._cycle!=D))B._Done(C.AA7[0]._this=null);
if((B=C.AFm[0]._this)&&(B._cycle!=D))B._Done(C.AFm[0]._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */