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
var B9=[0,0,370,60];var BC=[360,0,370,60];var EU=[0,0,370,710];var Hc="Unknown animalType";
var I7=[58,10,120,50];var II=[0,0,60,60];var OH=[120,0,360,60];var PM="\u2015";var
PN=[0,0,240,60];var CI=[0,0,40,60];var E2=[100,0,130,60];var Li=[43,0,100,60];var
PO=[125,0,240,60];var Km=[0,0];var NV=[100,0];var PP=[100,60];var Mt=[0,60];var SF=[
107,0];var Uj=[240,0];var Zn=[240,60];var Wq=[107,60];var IJ="%d.%m.%Y";var Uk="Unhandled date unit: ";
var Zo=[0,0,200,180];var Wr=[36,0,200,30];var Zp=[0,30,160,60];var Ul="Text";var
Zq=[0,70,40,110];var Zr=[44,70,156,110];var Um=[160,70,200,110];var Ws=[7,2,27,25
];var QZ=[0,30,170,180];var Zs=[170,34,190,57];var OI=[0,0,40,40];var PQ=[0,40];
var Wt=[40,40];var Wu=[40,0];var Wv=[0,0,370,100];var Zt=[20,0,290,60];var Zu=[0
,60,370,100];var Ww="Cap";var Wx=[20,0,370,60];var SG=[310,0,370,60];var Zv=[370
,0];var Zw=[370,60];var Ab7="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Un=".";var Zx=[0,0,170
,150];var AeS=[0,59,170,90];var Zy=[110,0,170,150];var Wy=[0,30];var Wz=[50,0,100
,150];var Zz=[0,0,40,150];var AeT=[0,0,370,240];var JN=[0,60,370,710];var AeU=[0
,60,370,120];var Lj=[0,120,370,180];var Aha=[0,180,370,240];var Anw=[370,120];var
NW=[0,120];var WA=[370,180];var Anx=[0,180];var Ahb=[370,240];var Ahc=[0,240];var
Ab8=[0,0,50,60];var Uo=[50,0,100,60];var Any=[100,10,370,50];var Anz="276000901234567";
var AwF="Unhandled temperature unit";var AwG=[110,0,260,60];var Akv=[235,10,370,
50];var AwH="39.5";var AeV=[0,0,270,40];var ArW=[270,0];var OJ=[270,40];var SI=[
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
IE.G(A.abP(this.IE.M,this.AD.Ox));this.IE.G([].concat(this.IE.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Io=((Ae&0x40)===0x40
);if(Io&&(this.AD.Gb<0))this.AD.GQ(0);},NI:function(E){if(this.K9===E)return;this.
K9=E;this.AD.NI(E);},BjX:function(E){var B;if(this.A5i===E)return;if(!!this.Adv){
this.HG(this.Adv);this.Adv=null;}if(!!E){this.Adv=(C.Fn.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Adv.A7y([this,this.AgB]);this.Adv.A7z([this,this.AgC]);this.Adv.
Bj2(null);this.J(this.Adv,0);this.AD.A7F((B=this.Adv.M)[3]-B[1]);}else this.AD.A7F(
0);this.IE.G(A.abP(this.IE.M,this.AD.Ox));A.pe([this,this.E7],this);this.A5i=E;}
,G8:function(H){var B;var FS=this.AD.GN;var Aa=(C.A$.isPrototypeOf(B=this.AD.Ca)?
B:null);if(!Aa)return;Aa.YO(this.AW);Aa.B$(FS);Aa.YP(this.AQ);Aa.G(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GP]));},YO:function(E){var B;if(this.AW===E)return;
if(!!this.AW){A.z9([this,this.B$],this.AW,0);A.z$([this,this.Ano],[B=this.AW,B.Fw
,B.FB],0);}this.AW=E;if(!!E){A.zV([this,this.B$],E,0);A.zX([this,this.Ano],[E,E.
Fw,E.FB],0);}A.pe([this,this.B$],this);A.pe([this,this.Ano],this);},B$:function(
H){if(!!this.AW){this.AD.Jm(this.AW.Ch());this.AD.AaY(0,this.AD.AR-1);}else this.
AD.Jm(0);if(this.A5M!==this.AD.AR){this.AD.AAb(null,null);this.A5M=this.AD.AR;}A.
pe([this,this.E7],this);},AgC:function(H){var B;this.G(A.abI(this.M,(B=this.AD.AMU(
))[3]-B[1]));},AgB:function(H){this.G(A.abI(this.M,180));},A6V:function(H){var Jr=(
A.Core.BO.isPrototypeOf(H)?H:null);var FS=this.AD.Gb;if(Jr.CM===4)FS=FS-1;else if(
Jr.CM===5)FS=FS+1;else if((Jr.D2>=0x30)&&(Jr.D2<=0x39))A._GetAutoObject(A.acp.AfZ
).E9(Jr.D2);else if(Jr.CM===45)A._GetAutoObject(A.acp.AfZ).Delete();else Jr.O9=true;
if((FS<0)||(FS>=this.AD.AR))return;this.AD.GQ(FS);this.Bve(FS,true);},Bu5:function(
H){var Aa=(C.A$.isPrototypeOf(H)?H:null);this.AD.GQ(Aa.Hq);},Bve:function(GW,Acl
){var B;if((GW<0)||(GW>=this.AD.AR))return;var Av=this.AD.ApW(GW,GW);var A9=this.
AD.M;A9=A.abP(A9,(B=this.AD.AMU())[3]-B[1]);A9=A.abI(A9,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AMU())[3]-B[1]))-((B=this.AD.BfQ())[3]-B[1]));var Ly=A.lb(Av,A9);if((!
Acl&&!((Ly[0]>=Ly[2])||(Ly[1]>=Ly[3])))||(Acl&&A.aaY(Ly,Av)))return;var Bo=0;if(
Av[3]>A9[3])Bo=Av[3]-A9[3];if(Bo>(Av[1]-A9[1]))Bo=(Av[3]-A9[1])-this.AD.GP;this.
AD.Ga(this.AD.Bp-Bo);},Ano:function(H){this.AD.GQ(-1);},E7:function(H){var B;this.
IE.Mk(this.AD.GP*this.AD.AR);this.IE.Mm(((B=this.AD.M)[3]-B[1])-this.AD.Ox);this.
IE.Ml(-this.AD.Bp);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AI._Init.call(this.Background={I:this},0);A.Core.HZ._Init.call(this.HZ={I:this},
0);A.Core.CF._Init.call(this.AD={I:this},0);A.kR.Au._Init.call(this.IE={I:this},
0);A.Core.BO._Init.call(this.De={I:this},0);this.__proto__=C.ATe;this.G(B9);this.
Background.AV(0x3);this.Background.G(B9);this.HZ.AV(0x3F);this.HZ.G(B9);this.AD.
AV(0x3F);this.AD.G(B9);this.AD.Aeg(60);this.AD.Jm(0);this.AD.NI(this.K9);this.IE.
AV(0x3A);this.IE.G(BC);this.IE.L(0xFF808080);this.J(this.Background,0);this.J(this.
HZ,0);this.J(this.AD,0);this.J(this.IE,0);this.AD.Eh=[this,this.E7];this.AD.G8=[
this,this.G8];this.AD.AvN(this.HZ);this.AQ=[this,this.Bu5];this.De.BP=[this,this.
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
};C.ASf={Gt:null,AI:null,Cy:null,Init:function(aArg){var B;A.zX([this,this.Ht],[
B=A._GetAutoObject(A.acp.K1),B.A6z,B.A7O],0);A.pe([this,this.Ht],this);},Abq:function(
E){if(this.Gt===E)return;if(!!this.Gt)this.HG(this.Gt);this.Gt=E;if(!!this.Gt)this.
J(this.Gt,0);this.Ba(E);this.AgV(E,this.Cy);this.An();},Ht:function(H){var B;if(
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
,AiJ:null,Add:null,Xh:null,Ade:null,L8:null,Lt:false,Ks:false,Ai:function(Ae){var
B;C.A$.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20);var Io=((
Ae&0x40)===0x40);if(!G1){this.Background.L(0xFFAAAAAA);this.V.L(0xFF888888);this.
L8.Ar(false);this.L8.Y(false);}else if(Io){this.Background.L(A.jb.AY);this.V.L(A.
jb.Bh);this.L8.Ar(true);this.L8.Y(true);}else if(Fg){this.Background.L(0xFFE6DED8
);this.V.L(0xFF000000);this.L8.Ar(true);this.L8.Y(true);}else{this.Background.L(
0xFFFFFFFF);this.V.L(0xFF000000);this.L8.Ar(false);this.L8.Y(false);}if(!this.Ks&&
Fg)A._GetAutoObject(A.acp.K1).M4(this.AfD);this.L8.BjZ(this.Nh>0);this.L8.Bkm(this.
AfD>0);this.Lt=G1;this.Ks=Fg;},B$:function(Ac){if(!this.AW){this.Xh.Aw(A.aaL(A.ach.
AdO));this.Add.L(A.jb.AeL);return;}this.Hq=Ac;if(!!this.AW){this.Nh=this.AW.LE(Ac
,26);this.AfD=this.AW.LE(Ac,22);var O0=this.AW.CA(Ac,1);var Ak6=this.AW.HT(Ac,11
);var AkX=this.AW.IU(Ac,17);var LC=this.AW.IU(Ac,13);var H4=this.AW.Amc(Ac,14);this.
V.Q(O0.toFixed());var WQ=A._GetAutoObject(A.Device.Helper).AKo(LC,Ak6,AkX);switch(
H4){case 0:this.Xh.Aw(A.aaL(A.ach.AdO));break;case 1:this.Xh.Aw(A.aaL(A.ach.AuA)
);break;case 2:this.Xh.Aw(A.aaL(A.ach.AuD));break;default:A.ab5("%s%e",Hc,H4);}this.
Ade.Aw(this.Xh.Al);this.Add.L(A._GetAutoObject(A.acj.Assessment).P4(WQ));this.An(
);}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={
I:this},0);A.kR.CP._Init.call(this.V={I:this},0);A.acg.Am._Init.call(this.AiJ={I:
this},0);A.acg.Am._Init.call(this.Add={I:this},0);A.acg.Am._Init.call(this.Xh={I:
this},0);A.acg.Am._Init.call(this.Ade={I:this},0);C.L8._Init.call(this.L8={I:this
},0);this.__proto__=C.AKz;this.Background.AV(0x3F);this.Background.G(B9);this.V.
AV(0x3F);this.V.G(I7);this.V.Q(A.aaR(A.acf.Gy));this.V.A2(0x11);this.V.L(0xFF000000
);this.AiJ.G(II);this.AiJ.L(A.jb.Text);this.Add.G(II);this.Add.L(A.jb.EX);this.Xh.
G(II);this.Ade.G(II);this.Ade.L(A.jb.Text);this.Ade.Cr(1);this.L8.AV(0x3);this.L8.
G(OH);this.J(this.Background,0);this.J(this.V,0);this.J(this.AiJ,0);this.J(this.
Add,0);this.J(this.Xh,0);this.J(this.Ade,0);this.J(this.L8,0);this.V.S(A.aaL(A.fl.
Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.aaL(A.fl.By));this.AiJ.Aw(A.aaL(C.AFE
));this.Add.Aw(A.aaL(C.ATw));this.Xh.Aw(A.aaL(A.ach.AdO));this.Ade.Aw(A.aaL(A.ach.
AdO));},_Done:function(){this.__proto__=C.A$;this.Background._Done();this.V._Done(
);this.AiJ._Done();this.Add._Done();this.Xh._Done();this.Ade._Done();this.L8._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Background.
_ReInit();this.V._ReInit();this.AiJ._ReInit();this.Add._ReInit();this.Xh._ReInit(
);this.Ade._ReInit();this.L8._ReInit();this.V.Q(A.aaR(A.acf.Gy));this.V.S(A.aaL(
A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.aaL(A.fl.By));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Add)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ade)._cycle!=D)B._Mark(B._cycle=D);if((B=this.L8
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalMenuItem"};C.L8={
T0:null,V_:null,Aki:null,M7:null,NQ:null,Y2:null,AbS:null,AuV:false,Awt:false,C1:
function(){this.An();},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Io=((
Ae&0x40)===0x40);if(Io){this.M7.L(A.jb.Bh);this.NQ.L(A.jb.Bh);}else{this.M7.L(A.
jb.Text);this.NQ.L(A.jb.Text);}if(this.Awt){this.M7.Q(A.aaR(A.acf.Ble));if(this.
AuV){this.T0.Aw(A.aaL(C.AFm));this.V_.Aw(A.aaL(C.AFm));}else{this.T0.Aw(A.aaL(C.
Arv));this.V_.Aw(A.aaL(C.Arv));}}else if(this.AuV){this.T0.Aw(A.aaL(C.AA7));this.
V_.Aw(A.aaL(C.AA7));this.M7.Q(PM);}var A1x=this.Awt||this.AuV;this.T0.Y(A1x);this.
V_.Y(A1x);this.M7.Y(A1x);this.Y2.Ar(this.Awt);},Bkm:function(E){if(this.Awt===E)
return;this.Awt=E;this.An();},BjZ:function(E){if(this.AuV===E)return;this.AuV=E;
this.An();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(
this.T0={I:this},0);A.acg.Am._Init.call(this.V_={I:this},0);A.acg.Am._Init.call(
this.Aki={I:this},0);A.kR.CP._Init.call(this.M7={I:this},0);A.kR.CP._Init.call(this.
NQ={I:this},0);A.Core.Bi._Init.call(this.Y2={I:this},0);A.Core.Bi._Init.call(this.
AbS={I:this},0);this.__proto__=C.L8;var B;this.G(PN);this.T0.AV(0x6);this.T0.G(CI
);this.T0.L(A.jb.CZ);this.T0.Cr(1);this.V_.AV(0x6);this.V_.G(CI);this.V_.L(A.jb.
Text);this.Aki.AV(0xE);this.Aki.G(E2);this.M7.AV(0x7);this.M7.G(Li);this.M7.A2(0x11
);this.M7.L(0xFF000000);this.NQ.AV(0x3);this.NQ.G(PO);this.NQ.Q(A.aaR(A.acf.Temperature
));this.NQ.A2(0x11);this.NQ.L(0xFF000000);this.Y2.AV(0x3);this.Y2.Kc(Km);this.Y2.
Kb(NV);this.Y2.DJ(PP);this.Y2.DX(Mt);this.AbS.AV(0x3);this.AbS.Kc(SF);this.AbS.Kb(
Uj);this.AbS.DJ(Zn);this.AbS.DX(Wq);this.J(this.T0,0);this.J(this.V_,0);this.J(this.
Aki,0);this.J(this.M7,0);this.J(this.NQ,0);this.J(this.Y2,0);this.J(this.AbS,0);
this.T0.Aw(A.aaL(C.Arv));this.V_.Aw(A.aaL(C.Arv));this.Aki.Aw(A.aaL(C.ASM));this.
M7.S(A.aaL(A.fl.Ah));this.M7.A5(A.aaL(A.fl.Ak));this.M7.CC(A.aaL(A.fl.By));this.
NQ.S(A.aaL(A.fl.Ah));this.NQ.A5(A.aaL(A.fl.Ak));this.NQ.CC(A.aaL(A.fl.By));this.
Y2.Lb=[B=A._GetAutoObject(A.acp.K1),B.Bb8];this.AbS.Lb=[B=A._GetAutoObject(A.acp.
K1),B.BbT];},_Done:function(){this.__proto__=A.Core.O;this.T0._Done();this.V_._Done(
);this.Aki._Done();this.M7._Done();this.NQ._Done();this.Y2._Done();this.AbS._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
T0._ReInit();this.V_._ReInit();this.Aki._ReInit();this.M7._ReInit();this.NQ._ReInit(
);this.Y2._ReInit();this.AbS._ReInit();this.NQ.Q(A.aaR(A.acf.Temperature));this.
M7.S(A.aaL(A.fl.Ah));this.M7.A5(A.aaL(A.fl.Ak));this.M7.CC(A.aaL(A.fl.By));this.
NQ.S(A.aaL(A.fl.Ah));this.NQ.A5(A.aaL(A.fl.Ak));this.NQ.CC(A.aaL(A.fl.By));this.
C1();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.T0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.NQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalItemAction"
};C.XT={C1:function(){this.An();},Ai:function(Ae){C.Aqd.Ai.call(this,Ae);if(!this.
Text.String.length)this.Text.Q(A.aaR(A.acf.Filter));},A5T:function(H){var DV=(A.
Core.BO.isPrototypeOf(H)?H:null);if(!!DV)A._GetAutoObject(A.acp.AfZ).E9(DV.D2);}
,A5R:function(H){A._GetAutoObject(A.acp.AfZ).Delete();},_Init:function(aArg){C.Aqd.
_Init.call(this,aArg);this.__proto__=C.XT;this.Am.Aw(A.aaL(C.Filter));},_ReInit:
function(){C.Aqd._ReInit.call(this);this.C1();},_className:"Demonstrator::FilterView"
};C.Aaw={Df:null,XM:null,RN:null,XN:null,Iv:null,X4:null,Al0:null,As:null,OP:null
,MQ:null,Aav:null,FJ:0,AuK:0,AEt:false,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);
this.RN.Q(this.As.Format(IJ));if(this.AEt){this.RN.Y(false);this.X4.Y(false);this.
Iv.Y(false);this.XN.Y(false);this.OP.Ar(true);this.OP.Y(true);this.MQ.Cr(2);this.
MQ.ARc(2);this.MQ.G(A.abM(this.MQ.M,this.OP.M[2]));}else{this.RN.Y(true);this.X4.
Y(true);this.Iv.Y(true);this.XN.Y(true);this.OP.Ar(false);this.OP.Y(false);this.
MQ.Cr(3);this.MQ.ARc(3);this.MQ.G(A.abM(this.MQ.M,this.RN.M[2]));}},BwQ:function(
H){this.Bj5(!this.AEt);},AcR:function(H){var F;if(!!this.Df)this.TP((F=this.Df,F[
1].call(F[0])));},Abu:function(E){if(A.aaZ(this.Df,E))return;if(!!this.Df)A.z$([
this,this.AcR],this.Df,0);this.Df=E;if(!!E)A.zX([this,this.AcR],E,0);if(!!E)A.pe([
this,this.AcR],this);},TP:function(E){if(this.FJ===E)return;this.FJ=E;this.As.Initialize(
this.FJ);this.BxW(this);this.An();},AhX:function(H){var B;var F;var BL=this.FJ;var
Ait=this.Aav.C$(this.AuK);this.AHB(Ait);if(this.As.Year>2100)this.As.Initialize2(
2100,12,31,0,0,0);this.TP(((B=(this.As.JF()|0))<0)?B+0x100000000:B);if(this.FJ!==
BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}},AhJ:function(
H){var B;var F;var BL=this.FJ;var Ait=this.Aav.C$(this.AuK);this.AJk(Ait);if(this.
As.Year<2000)this.As.Initialize2(2000,1,1,0,0,0);this.TP(((B=(this.As.JF()|0))<0
)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],this.
FJ));A.abo(this.Df,0);}},BjF:function(E){if(this.AuK===E)return;this.AuK=E;},Bj5:
function(E){if(this.AEt===E)return;this.AEt=E;this.An();},Bxo:function(H){var B;
var F;var BL=this.FJ;this.As.Ld(this.OP.ACW());this.As.TS(this.OP.AC1());this.As.
Year=this.OP.AqC();this.TP(((B=(this.As.JF()|0))<0)?B+0x100000000:B);if(this.FJ!==
BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}},BxW:function(
H){this.OP.Ld(this.As.Gv);this.OP.TS(this.As.G6);this.OP.Aj2(this.As.Year);},AHB:
function(AxF){var B;switch(AxF){case 0:if(this.As.Gv<this.As.YL())this.As.Ld(this.
As.Gv+1);else{this.As.Ld(1);this.AHB(2);}break;case 1:if((this.As.Gv+7)<=this.As.
YL())this.As.Ld(this.As.Gv+7);else{this.As.Ld((7-this.As.YL())+this.As.Gv);this.
AHB(2);}break;case 2:if(this.As.G6<12)this.As.TS(this.As.G6+1);else{this.As.TS(1
);this.AHB(3);}break;case 3:this.As.Year++;break;default:throw new Error(Uk+AxF.
toFixed());}},AJk:function(AxF){var B;switch(AxF){case 0:if(this.As.Gv>1)this.As.
Ld(this.As.Gv-1);else{this.AJk(2);this.As.Ld(this.As.YL());}break;case 1:if((this.
As.Gv-7)>0)this.As.Ld(this.As.Gv-7);else{this.AJk(2);this.As.Ld(this.As.YL()-(7-
this.As.Gv));}break;case 2:if(this.As.G6>1)this.As.TS(this.As.G6-1);else{this.As.
TS(12);this.AJk(3);}break;case 3:this.As.Year--;break;default:throw new Error(Uk+
AxF.toFixed());}},BhK:function(){return this.AuK;},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.Text._Init.call(this.XM={I:this},0);A.acg.Text._Init.
call(this.RN={I:this},0);C.Auy._Init.call(this.XN={I:this},0);A.acv.Iv._Init.call(
this.Iv={I:this},0);C.Auy._Init.call(this.X4={I:this},0);A.acg.Am._Init.call(this.
Al0={I:this},0);A.Core.Bt._Init.call(this.As={I:this},0);C.ALJ._Init.call(this.OP={
I:this},0);C.Auy._Init.call(this.MQ={I:this},0);C.Aav._Init.call(this.Aav={I:this
},0);this.__proto__=C.Aaw;this.G(Zo);this.XM.G(Wr);this.XM.A2(0x11);this.XM.Q(A.
aaR(A.acf.Date));this.XM.L(0xFF000000);this.RN.G(Zp);this.RN.A2(0x11);this.RN.Q(
Ul);this.RN.L(0xFF000000);this.XN.G(Zq);this.XN.A7p(200);this.Iv.G(Zr);this.Iv.AvC(
120);this.Iv.GP=30;this.Iv.A6_(A.jb.CZ);this.Iv.BiG(A.jb.CZ);this.Iv.BiK(A.jb.CZ
);this.Iv.A6$(A.jb.Text);this.Iv.BiL(A.jb.Text);this.Iv.BiH(A.jb.AY);this.Iv.BiM(
A.jb.Bh);this.Iv.BiJ(A.jb.AY);this.Iv.BiI(A.jb.Text);this.X4.G(Um);this.X4.A7p(200
);this.Al0.G(Ws);this.OP.G(QZ);this.MQ.G(Zs);this.MQ.Cr(3);this.MQ.ARc(3);this.MQ.
L(A.jb.Text);this.J(this.XM,0);this.J(this.RN,0);this.J(this.XN,0);this.J(this.Iv
,0);this.J(this.X4,0);this.J(this.Al0,0);this.J(this.OP,0);this.J(this.MQ,0);this.
XM.S(A.aaL(A.fl.Ak));this.RN.S(A.aaL(A.fl.Ey));this.XN.AQ=[this,this.AhJ];this.XN.
Dx(A.aaL(C.AK7));this.XN.ARd(A.aaL(C.AK8));this.Iv.Ax([this,this.BhK,this.BjF]);
this.Iv.BiR(this.Aav);this.Iv.ADs(A.aaL(A.fl.Ak));this.Iv.AQZ(A.aaL(A.fl.Ak));this.
X4.AQ=[this,this.AhX];this.X4.Dx(A.aaL(C.AK9));this.X4.ARd(A.aaL(C.AK_));this.Al0.
Aw(A.aaL(C.AN_));this.OP.Di=[this,this.Bxo];this.MQ.AQ=[this,this.BwQ];this.MQ.Dx(
A.aaL(A.ach.AlQ));this.MQ.ARd(A.aaL(A.ach.AlQ));},_Done:function(){this.__proto__=
A.Core.O;this.XM._Done();this.RN._Done();this.XN._Done();this.Iv._Done();this.X4.
_Done();this.Al0._Done();this.As._Done();this.OP._Done();this.MQ._Done();this.Aav.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.XM._ReInit();this.RN._ReInit();this.XN._ReInit();this.Iv._ReInit();this.X4.
_ReInit();this.Al0._ReInit();this.As._ReInit();this.OP._ReInit();this.MQ._ReInit(
);this.Aav._ReInit();this.XM.Q(A.aaR(A.acf.Date));this.XM.S(A.aaL(A.fl.Ak));this.
RN.S(A.aaL(A.fl.Ey));this.Iv.ADs(A.aaL(A.fl.Ak));this.Iv.AQZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Df)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Iv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Al0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.As)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aav)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DateSelector"};C.Auy={C3:null,Av6:null,ALX:null,AQ:null,Bk:null,De:
null,CO:null,Hj:null,X0:null,ANM:0,Tp:0,ARP:0,AP:0xFFFFFFFF,AZS:false,Lt:false,Ks:
false,P8:false,Ai:function(Ae){var B;A.acn.AgR.Ai.call(this,Ae);var G1=((Ae&0x10
)===0x10);var Fg=((Ae&0x20)===0x20);var Gm=this.CO.Down&&this.CO.X7;if(!G1)this.
Hj.Aw(this.ALX);else if(Gm){this.Hj.Aw(this.Av6);this.Hj.Cr(this.ARP);}else{this.
Hj.Aw(this.C3);this.Hj.Cr(this.Tp);}this.Hj.L(this.AP);this.Lt=G1;this.Ks=Fg;this.
P8=Gm;},P7:function(H){this.An();A.pe(this.AQ,this);},Ah9:function(H){if(this.CO.
Down)return;if(this.De.AbG)return;this.An();if(this.Bk.Bw){A.pe(this.AQ,this);this.
Bk.Ar(false);}this.Bk.Ar(true);},BbR:function(H){this.An();},Azc:function(H){if(
!this.CO.X7)return;if(this.CO.Nt)return;if((this.X0.U4<=0)||(this.CO.Jg<this.X0.
U4)){if(this.CO.Jg>=this.Bk.U4)A.pe(this.AQ,this);else this.Bk.Ar(true);}this.X0.
Ar(false);},Azb:function(H){this.X0.Ar(true);if(this.Bk.Bw){A.pe(this.AQ,this);this.
Bk.Ar(false);}},Dx:function(E){if(this.C3===E)return;this.C3=E;this.An();},ARd:function(
E){if(this.Av6===E)return;this.Av6=E;this.An();},A0S:function(H){if(!this.CO.X7)
return;if(this.CO.Nt)return;if((this.ANM>=0)&&this.AZS){this.AZS=false;this.X0.Ar(
true);A.pe(this.AQ,this);}},A7p:function(E){if(this.ANM===E)return;this.ANM=E;this.
X0.V1(E);},Bwk:function(H){this.AZS=true;},Cr:function(E){if(this.Tp===E)return;
this.Tp=E;this.An();},ARc:function(E){if(this.ARP===E)return;this.ARP=E;this.An(
);},L:function(E){if(this.AP===E)return;this.AP=E;this.An();},_Init:function(aArg
){A.acn.AgR._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bk={I:this},0);A.
Core.BO._Init.call(this.De={I:this},0);A.Core.Bi._Init.call(this.CO={I:this},0);
A.acg.Am._Init.call(this.Hj={I:this},0);A.Core.Timer._Init.call(this.X0={I:this}
,0);this.__proto__=C.Auy;this.G(OI);this.Bk.QJ(0);this.Bk.V1(50);this.De.Filter=
149;this.CO.AV(0x3F);this.CO.Kc(PQ);this.CO.Kb(Wt);this.CO.DJ(Wu);this.CO.DX(Km);
this.CO.Aer=0xF;this.CO.ADL(100);this.Hj.AV(0x3F);this.Hj.G(OI);this.Hj.A2(0x12);
this.X0.QJ(0);this.J(this.CO,0);this.J(this.Hj,0);this.Bk.M6=[this,this.P7];this.
De.BP=[this,this.Ah9];this.CO.AC6=[this,this.BbR];this.CO.AuY=[this,this.BbR];this.
CO.DR=[this,this.A0S];this.CO.Lb=[this,this.Azc];this.CO.BP=[this,this.Azb];this.
Hj.Aw(A.aaL(A.aci.Tl));this.C3=A.aaL(A.aci.Tl);this.Av6=A.aaL(A.aci.Tl);this.ALX=
A.aaL(A.aci.Tl);this.X0.M6=[this,this.Bwk];},_Done:function(){this.__proto__=A.acn.
AgR;this.Bk._Done();this.De._Done();this.CO._Done();this.Hj._Done();this.X0._Done(
);A.acn.AgR._Done.call(this);},_ReInit:function(){A.acn.AgR._ReInit.call(this);this.
Bk._ReInit();this.De._ReInit();this.CO._ReInit();this.Hj._ReInit();this.X0._ReInit(
);},_Mark:function(D){var B;A.acn.AgR._Mark.call(this,D);if((B=this.C3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Av6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.ALX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::IconButton"};C.AKN={Pf:null,V:null,AdI:null,_Init:
function(aArg){C.Fn._Init.call(this,aArg);A.acg.AI._Init.call(this.Pf={I:this},0
);A.acg.Text._Init.call(this.V={I:this},0);C.AdI._Init.call(this.AdI={I:this},0);
this.__proto__=C.AKN;this.G(Wv);this.Pf.AV(0x1D);this.Pf.G(B9);this.Pf.L(0xFFE6E6E6
);this.V.AV(0x1D);this.V.G(Zt);this.V.A2(0x11);this.V.Q(A.aaR(A.acf.A2z));this.V.
L(0xFF000000);this.AdI.G(Zu);this.J(this.Pf,0);this.J(this.V,0);this.J(this.AdI,
0);this.V.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Fn;this.Pf._Done(
);this.V._Done();this.AdI._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn.
_ReInit.call(this);this.Pf._ReInit();this.V._ReInit();this.AdI._ReInit();this.V.
Q(A.aaR(A.acf.A2z));this.V.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fn._Mark.
call(this,D);if((B=this.Pf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::AnimalsHeader"};C.Atu={Pf:null,V:null,Ad7:null,Ad5:null,Bi:null,DD:
Ww,AjF:false,Ai:function(Ae){C.Fn.Ai.call(this,Ae);if(this.AjF){this.Ad5.Y(true);
this.Ad7.Y(false);}else{this.Ad5.Y(false);this.Ad7.Y(true);}},Bxa:function(H){if(
this.AjF)A.pe(this.AgB,this);else A.pe(this.AgC,this);this.ADO(!this.AjF);},U:function(
E){if(this.DD===E)return;this.DD=E;this.V.Q(E);},ADO:function(E){if(this.AjF===E
)return;this.AjF=E;this.An();},_Init:function(aArg){C.Fn._Init.call(this,aArg);A.
acg.AI._Init.call(this.Pf={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.
acg.Am._Init.call(this.Ad7={I:this},0);A.acg.Am._Init.call(this.Ad5={I:this},0);
A.Core.Bi._Init.call(this.Bi={I:this},0);this.__proto__=C.Atu;this.G(B9);this.Pf.
AV(0x1D);this.Pf.G(B9);this.Pf.L(0xFFE6E6E6);this.V.AV(0x1D);this.V.G(Wx);this.V.
A2(0x11);this.V.Q(Ww);this.V.L(0xFF000000);this.Ad7.G(SG);this.Ad7.Y(false);this.
Ad5.AV(0x3A);this.Ad5.G(SG);this.Bi.Kc(Km);this.Bi.Kb(Zv);this.Bi.DJ(Zw);this.Bi.
DX(Mt);this.J(this.Pf,0);this.J(this.V,0);this.J(this.Ad7,0);this.J(this.Ad5,0);
this.J(this.Bi,0);this.V.S(A.aaL(A.fl.Ah));this.Ad7.Aw(A.aaL(C.AKQ));this.Ad5.Aw(
A.aaL(C.AiN));this.Bi.Lb=[this,this.Bxa];},_Done:function(){this.__proto__=C.Fn;
this.Pf._Done();this.V._Done();this.Ad7._Done();this.Ad5._Done();this.Bi._Done();
C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.Pf._ReInit(
);this.V._ReInit();this.Ad7._ReInit();this.Ad5._ReInit();this.Bi._ReInit();this.
V.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.
Pf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AccordionHeader"
};C.A$={AW:null,AQ:null,CO:null,Hq:-1,YO:function(E){if(this.AW===E)return;this.
AW=E;},B$:function(Ac){A.ab5("%s",Ab7);},YP:function(E){if(A.aa0(this.AQ,E))return;
this.AQ=E;},Azc:function(H){if(!this.CO.X7)return;if(this.CO.Nt)return;A.pe(this.
AQ,this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Bi._Init.call(
this.CO={I:this},0);this.__proto__=C.A$;this.G(B9);this.CO.AV(0x3F);this.CO.Kc(Mt
);this.CO.Kb(Zw);this.CO.DJ(Zv);this.CO.DX(Km);this.CO.Aer=0xF;this.CO.ADL(100);
this.J(this.CO,0);this.CO.Lb=[this,this.Azc];},_Done:function(){this.__proto__=A.
Core.O;this.CO._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.CO._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.CO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::ListItem"};C.Fn={AQc:null,AgC:null,AgB:null,Bj2:function(E){if(A.
aa0(this.AQc,E))return;this.AQc=E;},A7z:function(E){if(A.aa0(this.AgC,E))return;
this.AgC=E;},A7y:function(E){if(A.aa0(this.AgB,E))return;this.AgB=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.Fn;this.G(B9);},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.AQc)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AgC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"
};C.ALJ={Di:null,Aal:null,Wi:null,Wh:null,Wg:null,M0:null,MZ:null,KC:null,Lt:false
,Ks:false,Bx3:false,Ai:function(Ae){var B;A.acn.AgP.Ai.call(this,Ae);var G1=((Ae&
0x10)===0x10);var Fg=((Ae&0x20)===0x20);var BaW=(this.Wg.Y7||this.Wh.Y7)||this.Wi.
Y7;if(BaW)this.Aal.L(A.jb.Text);else this.Aal.L(A.jb.Bb);this.Lt=G1;this.Ks=Fg;this.
Bx3=BaW;},Ay9:function(H){this.An();if((!this.Wg.Y7&&!this.Wh.Y7)&&!this.Wi.Y7){
var UD=this.AIu(this.AC1(),this.AqC());var Acy=this.ACW();this.KC.Jm(UD);if(Acy>
UD)this.Ld(UD);A.pe(this.Di,this);}},A08:function(H){this.An();},Bin:function(H){
var B;var FS=this.M0.GN;var Cw=(A.acg.Text.isPrototypeOf(B=this.M0.Ca)?B:null);if(
!Cw)return;Cw.Q(A.abl(FS+1900,4,10));Cw.S(A.aaL(A.fl.Ah));Cw.L(A.jb.Text);Cw.A2(
0x12);Cw.G(A.abK(Cw.M,[(B=this.M0.M)[2]-B[0],this.M0.GP]));},Bim:function(H){var
B;var FS=this.MZ.GN;var Cw=(A.acg.Text.isPrototypeOf(B=this.MZ.Ca)?B:null);if(!Cw
)return;Cw.Q(A.abl(FS+1,2,10)+Un);Cw.S(A.aaL(A.fl.Ah));Cw.L(A.jb.Text);Cw.A2(0x12
);Cw.G(A.abK(Cw.M,[(B=this.MZ.M)[2]-B[0],this.MZ.GP]));},Bik:function(H){var B;var
FS=this.KC.GN;var Cw=(A.acg.Text.isPrototypeOf(B=this.KC.Ca)?B:null);if(!Cw)return;
Cw.Q(A.abl(FS+1,2,10)+Un);Cw.S(A.aaL(A.fl.Ah));Cw.L(A.jb.Text);Cw.A2(0x12);Cw.G(
A.abK(Cw.M,[(B=this.KC.M)[2]-B[0],this.KC.GP]));},AqC:function(){return 1900+((((-
this.M0.Bp/this.M0.GP)|0)+2)%200);},Aj2:function(E){if(E<1900)E=1900;if(E>2100)E=
2100;this.M0.Ga(((E-1900)-2)*-this.M0.GP);var UD=this.AIu(this.AC1(),E);this.KC.
Jm(UD);if(this.ACW()>UD)this.Ld(UD);},AC1:function(){return 1+((((-this.MZ.Bp/this.
MZ.GP)|0)+2)%12);},TS:function(E){if(E<1)E=1;if(E>12)E=12;this.MZ.Ga(((E-1)-2)*-
this.MZ.GP);var UD=this.AIu(E,this.AqC());this.KC.Jm(UD);if(this.ACW()>UD)this.Ld(
UD);},ACW:function(){return 1+((((-this.KC.Bp/this.KC.GP)|0)+2)%this.KC.AR);},Ld:
function(E){var UD=this.AIu(this.AC1(),this.AqC());if(E<1)E=1;if(E>UD)E=UD;this.
KC.Ga(((E-2)-1)*-this.KC.GP);},AIu:function(Ae2,Acp){if(Ae2===2){if(!(Acp%4)&&(!
!(Acp%100)||!(Acp%400)))return 29;else return 28;}else if((((Ae2===4)||(Ae2===6)
)||(Ae2===9))||(Ae2===11))return 30;else return 31;},_Init:function(aArg){A.acn.
AgP._Init.call(this,aArg);A.acg.Cy._Init.call(this.Aal={I:this},0);A.Core.HZ._Init.
call(this.Wi={I:this},0);A.Core.HZ._Init.call(this.Wh={I:this},0);A.Core.HZ._Init.
call(this.Wg={I:this},0);A.Core.CF._Init.call(this.M0={I:this},0);A.Core.CF._Init.
call(this.MZ={I:this},0);A.Core.CF._Init.call(this.KC={I:this},0);this.__proto__=
C.ALJ;this.G(Zx);this.Aal.G(AeS);this.Aal.NJ(3);this.Aal.L(0xFFE1E1E1);this.Aal.
Y(true);this.Wi.G(Zy);this.Wi.ARk(Wy);this.Wi.AQ0(0.2);this.Wh.G(Wz);this.Wh.ARk(
Wy);this.Wh.AQ0(0.2);this.Wg.G(Zz);this.Wg.ARk(Wy);this.Wg.AQ0(0.2);this.M0.G(Zy
);this.M0.AQX(true);this.M0.Ga(60);this.M0.Aeg(30);this.M0.Jm(200);this.MZ.G(Wz);
this.MZ.AQX(true);this.MZ.Ga(60);this.MZ.Aeg(30);this.MZ.Jm(12);this.KC.G(Zz);this.
KC.AQX(true);this.KC.Ga(60);this.KC.Aeg(30);this.KC.Jm(31);this.J(this.Aal,0);this.
J(this.Wi,0);this.J(this.Wh,0);this.J(this.Wg,0);this.J(this.M0,0);this.J(this.MZ
,0);this.J(this.KC,0);this.Wi.YK=[this,this.Ay9];this.Wi.Sg=[this,this.A08];this.
Wh.YK=[this,this.Ay9];this.Wh.Sg=[this,this.A08];this.Wg.YK=[this,this.Ay9];this.
Wg.Sg=[this,this.A08];this.M0.G8=[this,this.Bin];this.M0.AvN(this.Wi);this.MZ.G8=[
this,this.Bim];this.MZ.AvN(this.Wh);this.KC.G8=[this,this.Bik];this.KC.AvN(this.
Wg);},_Done:function(){this.__proto__=A.acn.AgP;this.Aal._Done();this.Wi._Done();
this.Wh._Done();this.Wg._Done();this.M0._Done();this.MZ._Done();this.KC._Done();
A.acn.AgP._Done.call(this);},_ReInit:function(){A.acn.AgP._ReInit.call(this);this.
Aal._ReInit();this.Wi._ReInit();this.Wh._ReInit();this.Wg._ReInit();this.M0._ReInit(
);this.MZ._ReInit();this.KC._ReInit();},_Mark:function(D){var B;A.acn.AgP._Mark.
call(this,D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aal)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wg)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.M0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MZ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AFE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.ATw={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AgY={_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.AgY;this.G(EU);},_className:"Demonstrator::SelectionAreaContent"};C.AKG={Z:null
,UW:null,Tb:null,BxC:function(H){var B;this.Tb.G(A.abI(this.Tb.M,((B=this.M)[3]-
B[1])-((B=this.UW.M)[3]-B[1])));},_Init:function(aArg){C.AgY._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.AKa._Init.call(this.UW={I:this},0);C.
ATe._Init.call(this.Tb={I:this},0);this.__proto__=C.AKG;this.Z.AV(0x3F);this.Z.G(
EU);this.Z.J$(1);this.UW.G(AeT);this.UW.Aj(true);this.UW.ADO(true);this.Tb.AV(0x3
);this.Tb.G(JN);this.Tb.Aj(true);this.Tb.NI(C.AKz);this.Tb.BjX(C.AKN);this.J(this.
Z,0);this.J(this.UW,0);this.J(this.Tb,0);this.Ba(this.Tb);this.Z.Eh=[this,this.BxC
];this.Tb.YO(A._GetAutoObject(A.acp.Apt));},_Done:function(){this.__proto__=C.AgY;
this.Z._Done();this.UW._Done();this.Tb._Done();C.AgY._Done.call(this);},_ReInit:
function(){C.AgY._ReInit.call(this);this.Z._ReInit();this.UW._ReInit();this.Tb._ReInit(
);},_Mark:function(D){var B;C.AgY._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.UW={
_Init:function(aArg){C.Atu._Init.call(this,aArg);this.__proto__=C.UW;this.U(A.aaR(
A.acf.A3D));},_ReInit:function(){C.Atu._ReInit.call(this);this.U(A.aaR(A.acf.A3D
));},_className:"Demonstrator::ActionsHeader"};C.AKa={Background:null,Z$:null,AeE:
null,Aev:null,AeD:null,Ajx:null,Ajy:null,Ajz:null,AjA:null,AjF:false,AgC:function(
H){var B;this.G(A.abI(this.M,(B=this.Z$.M)[3]-B[1]));},AgB:function(H){this.G(A.
abI(this.M,240));},ADO:function(E){if(this.AjF===E)return;this.AjF=E;this.Z$.ADO(
E);if(E)this.AgC(this);else this.AgB(this);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.UW._Init.call(
this.Z$={I:this},0);C.AeE._Init.call(this.AeE={I:this},0);C.Aev._Init.call(this.
Aev={I:this},0);C.AeD._Init.call(this.AeD={I:this},0);A.acg.DQ._Init.call(this.Ajx={
I:this},0);A.acg.DQ._Init.call(this.Ajy={I:this},0);A.acg.DQ._Init.call(this.Ajz={
I:this},0);A.acg.DQ._Init.call(this.AjA={I:this},0);this.__proto__=C.AKa;this.G(
AeT);this.Background.AV(0x3F);this.Background.G(AeT);this.Z$.AV(0x1D);this.Z$.G(
B9);this.AeE.G(AeU);this.Aev.G(Lj);this.AeD.G(Aha);this.Ajx.DJ(Zw);this.Ajx.DX(Mt
);this.Ajx.L(A.jb.Bb);this.Ajy.DJ(Anw);this.Ajy.DX(NW);this.Ajy.L(A.jb.Bb);this.
Ajz.DJ(WA);this.Ajz.DX(Anx);this.Ajz.L(A.jb.Bb);this.AjA.DJ(Ahb);this.AjA.DX(Ahc
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
this.G(B9);this.AaV.G(Ab8);this.AaV.L(A.jb.Text);this.Agl.G(Uo);this.Agl.L(A.jb.
Text);this.Agl.Cr(0);this.Bi.Kc(Km);this.Bi.Kb(NV);this.Bi.DJ(PP);this.Bi.DX(Mt);
this.DQ.DJ(PP);this.DQ.DX(NV);this.DQ.L(A.jb.Bb);this.J(this.AaV,0);this.J(this.
Agl,0);this.J(this.Bi,0);this.J(this.DQ,0);this.AaV.Aw(A.aaL(A.aci.Tl));this.Agl.
Aw(A.aaL(A.aci.ARF));this.Bi.BP=[this,this.AX_];},_Done:function(){this.__proto__=
A.Core.O;this.AaV._Done();this.Agl._Done();this.Bi._Done();this.DQ._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AaV._ReInit(
);this.Agl._ReInit();this.Bi._ReInit();this.DQ._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"
};C.Aev={AeI:null,Ah5:function(H){var AfD=A.ab0(this.AeI.String,0,10);var BxR=A.
_GetAutoObject(A.acp.K1).AzK(AfD);if(BxR){AfD=AfD+1;this.AeI.Q(AfD.toFixed());}}
,_Init:function(aArg){C.L7._Init.call(this,aArg);C.Aqu._Init.call(this.AeI={I:this
},0);this.__proto__=C.Aev;this.AeI.G(Any);this.AeI.Q(Anz);this.AeI.L(A.jb.Text);
this.J(this.AeI,-1);this.AaV.Aw(A.aaL(A.ach.Aml));},_Done:function(){this.__proto__=
C.L7;this.AeI._Done();C.L7._Done.call(this);},_ReInit:function(){C.L7._ReInit.call(
this);this.AeI._ReInit();},_Mark:function(D){var B;C.L7._Mark.call(this,D);if((B=
this.AeI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanAction"};
C.AeE={T$:null,OA:null,A1N:0,Init:function(aArg){var B;A.zX([this,this.BwW],[B=A.
_GetAutoObject(A.acp.K1),B.AQD,B.ARe],0);A.zX([this,this.Azf],[B=A._GetAutoObject(
A.Device.Device),B.AqA,B.Asi],0);A.pe([this,this.Azf],this);},Ai:function(Ae){C.
L7.Ai.call(this,Ae);this.OA.Y(!A._GetAutoObject(A.acp.K1).Av7);},Ah5:function(H){
var B;A._GetAutoObject(A.acp.K1).BbT(this);},Azf:function(H){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A1N){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OA.Q(A.abk(A._GetAutoObject(A.acp.K1).ArI/100,0,1
));break;case 1:{var Atj=A._GetAutoObject(A.Device.Converter).ASQ(A._GetAutoObject(
A.acp.K1).ArI/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OA.Q(
A.abk(Atj,0,1));}break;default:A.ab5("%s%e",AwF,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A1N=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BwF:function(H){var B;var Ati=A.abX(this.OA.String,0);Ati=A._GetAutoObject(A.Device.
Converter).ASQ(Ati,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Ati*=100;
A._GetAutoObject(A.acp.K1).A7S(Math.round(Ati)|0);},BwW:function(H){this.An();},
_Init:function(aArg){C.L7._Init.call(this,aArg);A.acq.T$._Init.call(this.T$={I:this
},0);C.OA._Init.call(this.OA={I:this},0);this.__proto__=C.AeE;var B;this.T$.G(AwG
);this.T$.A7t(A.aaR(A.acf.A2G));this.OA.G(Akv);this.OA.Q(AwH);this.OA.L(A.jb.Text
);this.OA.BiT(true);this.A1N=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.T$,0);this.J(this.OA,0);this.AaV.Aw(A.aaL(A.ach.AaU));this.T$.Ax([B=A._GetAutoObject(
A.acp.K1),B.AQD,B.ARe]);this.T$.OnSetAppearance(A._GetAutoObject(A.acx.AtO));this.
OA.Di=[this,this.BwF];this.Init(aArg);},_Done:function(){this.__proto__=C.L7;this.
T$._Done();this.OA._Done();C.L7._Done.call(this);},_ReInit:function(){C.L7._ReInit.
call(this);this.T$._ReInit();this.OA._ReInit();this.T$.A7t(A.aaR(A.acf.A2G));},_Mark:
function(D){var B;C.L7._Mark.call(this,D);if((B=this.T$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Aqd={R:null,Cy:null,Bi:null,AfX:null,Amq:null,Amp:null,Aqi:null,Text:null,Ha:
null,Am:null,CR:null,Aqh:null,Aqj:null,Aou:false,Bg:function(aSize){this.Ha.G(A.
abK(this.Ha.M,aSize));this.Cy.Awb(1);this.Cy.Jh(0,40);this.Cy.E8(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.Cy.E8(0,20,20,12.5,12.5,90,270,10);this.Cy.Vb(0);},Ai:
function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var Io=((Ae&0x40)===0x40);if(
Io){if(!!this.R)this.Text.Q((F=this.R,F[1].call(F[0])));this.AfX.Ar(true);this.Am.
Y(false);}else{if(!!this.R)this.Text.Q((F=this.R,F[1].call(F[0])));this.AfX.Ar(false
);this.CR.Y(false);this.Am.Y(true);}this.Aou=Io;},Ah5:function(H){var B;if(!((this.
T&0x80)===0x80))this.Ia().AKY(this);},A5T:function(H){},A99:function(s){this.A5T(
s);},BgX:function(H){var B;var F;if(!this.R||!(F=this.R,F[1].call(F[0])).length)
this.CR.G(A.abM(this.CR.M,A.aaI(this.Text.M)[0]));else{this.CR.G(A.abM(this.CR.M
,this.Text.AMW(0)[2]+2));this.CR.G(A.abO(this.CR.M,this.Text.AMW(0)[1]));this.CR.
G(A.abI(this.CR.M,(B=this.Text.AMW(0))[3]-B[1]));}this.Am.G(A.abM(this.Am.M,this.
Text.M[0]-((B=this.Am.M)[2]-B[0])));},A5R:function(H){},A98:function(s){this.A5R(
s);},Ax:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.OS],this.
R,0);this.R=E;if(!!E)A.zX([this,this.OS],E,0);if(!!E)A.pe([this,this.OS],this);}
,OS:function(H){this.An();},Bip:function(H){var B;if(((this.T&0x80)===0x80))this.
Ia().AA_(this);},Bb1:function(H){},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.Graphics.Hm._Init.call(this.Cy={I:this},0);A.Core.Bi._Init.call(this.Bi={
I:this},0);A.acl.U5._Init.call(this.AfX={I:this},0);A.Core.BO._Init.call(this.Amq={
I:this},0);A.Core.BO._Init.call(this.Amp={I:this},0);A.Core.BO._Init.call(this.Aqi={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ha._Init.call(this.
Ha={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.AI._Init.call(this.
CR={I:this},0);A.Core.BO._Init.call(this.Aqh={I:this},0);A.Core.BO._Init.call(this.
Aqj={I:this},0);this.__proto__=C.Aqd;var B;this.G(AeV);this.Bi.AV(0x3F);this.Bi.
Kc(Km);this.Bi.Kb(ArW);this.Bi.DJ(OJ);this.Bi.DX(PQ);this.AfX.Fy(530);this.AfX.V4(
530);this.Amq.Filter=143;this.Amp.Filter=45;this.Aqi.Filter=1;this.Text.AV(0x3F);
this.Text.G(AeV);this.Text.IZ(true);this.Text.A2(0x12);this.Text.L(0xFFB3B3B3);this.
Ha.G(AeV);this.Ha.L(0xFFB3B3B3);this.Ha.NJ(1);this.Am.G(SI);this.CR.G(AwI);this.
CR.L(0xFFB3B3B3);this.CR.Y(false);this.Aqh.Filter=138;this.Aqj.Filter=137;this.J(
this.Bi,0);this.J(this.Text,0);this.J(this.Ha,0);this.J(this.Am,0);this.J(this.CR
,0);this.Bi.Lb=[this,this.Ah5];this.AfX.R=[B=this.CR,B.Fc,B.Y];this.Amq.BP=[this
,this.A99];this.Amq.DR=[this,this.A99];this.Amp.BP=[this,this.A98];this.Amp.DR=[
this,this.A98];this.Aqi.BP=[this,this.Bip];this.Text.QI([this,this.BgX]);this.Text.
S(A.aaL(A.fl.Ak));this.Ha.YQ(this.Cy);this.Am.Aw(null);this.Aqh.BP=[this,this.Bb1
];this.Aqj.BP=[this,this.Bb1];},_Done:function(){this.__proto__=A.Core.O;this.Cy.
_Done();this.Bi._Done();this.AfX._Done();this.Amq._Done();this.Amp._Done();this.
Aqi._Done();this.Text._Done();this.Ha._Done();this.Am._Done();this.CR._Done();this.
Aqh._Done();this.Aqj._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Cy._ReInit();this.Bi._ReInit();this.AfX._ReInit();this.
Amq._ReInit();this.Amp._ReInit();this.Aqi._ReInit();this.Text._ReInit();this.Ha.
_ReInit();this.Am._ReInit();this.CR._ReInit();this.Aqh._ReInit();this.Aqj._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cy)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AfX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Amp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.AdI={Background:null,XT:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AI._Init.call(this.Background={I:this},0);C.XT._Init.call(this.XT={I:this
},0);this.__proto__=C.AdI;var B;this.G(SJ);this.Background.G(SJ);this.XT.AV(0x1D
);this.XT.G(ArX);this.J(this.Background,0);this.J(this.XT,0);this.XT.Ax([B=A._GetAutoObject(
A.acp.AfZ),B.A6w,B.AD3]);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.XT._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.XT._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OA={Init:function(aArg){var B;A.zX([this,this.Azf],[B=A._GetAutoObject(A.Device.
Device),B.AqA,B.Asi],0);A.pe([this,this.Azf],this);},Ai:function(Ae){var B;C.Aqu.
Ai.call(this,Ae);var Io=((this.T&0x40)===0x40);if(!Io&&(this.String.length>0))this.
Text.Q(((this.String+AwJ)+A._GetAutoObject(A.acj.Temperature).Ak2())+String.fromCharCode(
0x0A));else this.Text.Q(this.String+String.fromCharCode(0x0A));if(this.Ec>this.String.
length)this.Ec=this.String.length;},Azf:function(H){this.An();},_Init:function(aArg
){C.Aqu._Init.call(this,aArg);this.__proto__=C.OA;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Aqu={B3:null,Di:null,IM:null,Cm:null,AlX:null,RP:null,Kz:null,Bi:null,Text:null
,CR:null,ApE:null,Ard:null,Cy:null,Ha:null,Aqw:null,Ap3:null,ApO:null,String:A.jV
,Ec:0,AP:0xFFB3B3B3,ALL:false,Mz:false,Bg:function(aSize){this.Ha.G(A.abK(this.Ha.
M,aSize));this.Cy.Awb(1);this.Cy.Jh(0,40);this.Cy.E8(0,aSize[0]-20,20,12.5,12.5,-
90,90,10);this.Cy.E8(0,20,20,12.5,12.5,90,270,10);this.Cy.Vb(0);},Ai:function(Ae
){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IM.Ar(true);else{this.
IM.Ar(false);this.CR.Y(false);}},A1Y:function(H){var B;var A9=this.Text.M;var Ni=
0;var Nj=0;if(this.CR.Ei[0]<A9[0])Ni=A9[0]-this.CR.Ei[0];if(this.CR.Ei[0]>A9[2])
Ni=A9[2]-this.CR.Ei[0];if(this.CR.Ei[1]<A9[1])Nj=A9[1]-this.CR.Ei[1];if(this.CR.
Es[1]>A9[3])Nj=A9[3]-this.CR.Es[1];if(!!Ni||!!Nj)this.Text.Ga(A.abf(this.Text.Bp
,[Ni,Nj]));Ni=this.Text.Bp[0];Nj=this.Text.Bp[1];var CX=[(B=this.Text.C_())[2]-B[
0],B[3]-B[1]];if(CX[0]<=((B=this.Text.M)[2]-B[0]))Ni=0;if(CX[1]<=((B=this.Text.M
)[3]-B[1]))Nj=0;this.Text.Ga([Ni,Nj]);},AlC:function(H){if(!this.B3)return;var A1u=
this.Text.AE$(this.Ec);var pos=this.Text.Aes(A1u);this.CR.DX(A.abe(pos,[0,this.B3.
Ascent]));this.CR.DJ(A.abf(pos,[0,this.B3.Descent]));if(this.IM.Bw){this.IM.Ar(false
);this.IM.Ar(true);}if(this.Mz){A.pe([this,this.A1Y],this);this.Mz=false;}},Azb:
function(H){if(!this.A4z(0x80))this.Ia().AKY(this);var Ev=this.Text.ARJ(this.Bi.
HS);var UJ=this.Text.Am$(Ev);if(UJ!==this.Ec){this.Ec=UJ;A.pe([this,this.AlC],this
);this.Mz=true;}},Ay7:function(H){if(!this.B3)return;var Ev=this.Text.AE$(this.Ec
);if(this.Cm.CM===6){Ev=[Ev[0]-1,Ev[1]];if(this.Text.Am$(Ev)===this.Ec){Ev=[Ev[0
],Ev[1]-1];Ev=[this.Text.ABt(Ev[1]).length,Ev[1]];}}if(this.Cm.CM===7){Ev=[Ev[0]+
1,Ev[1]];if(this.Text.Am$(Ev)===this.Ec){Ev=[Ev[0],Ev[1]+1];Ev=[0,Ev[1]];}}var UJ=
this.Text.Am$(Ev);if(UJ!==this.Ec){this.Ec=UJ;A.pe([this,this.AlC],this);this.Mz=
true;}},BbL:function(H){if(!this.Ec)return;this.Q(A.ab1(this.String,this.Ec-1,1)
);this.Ec=this.Ec-1;this.Mz=true;A.pe(this.Di,this);},Ay8:function(H){if(this.Ec>=
this.String.length)return;this.Q(A.ab1(this.String,this.Ec,1));this.Mz=true;A.pe(
this.Di,this);},BbQ:function(H){if(this.String.length>=15)return;var Bu7=this.Kz.
D2;var Atg=String.fromCharCode(Bu7);this.Q(A.abU(this.String,Atg,this.Ec));this.
Ec=this.Ec+Atg.length;this.Mz=true;A.pe(this.Di,this);},Q:function(E){if(this.String===
E)return;this.String=E;if(this.Ec>(E.length+1))this.Ec=E.length;this.Text.Q(E+String.
fromCharCode(0x0A));this.Mz=true;this.Text.Ga(Km);},L:function(E){if(this.AP===E
)return;this.AP=E;this.Text.L(E);this.CR.L(E);this.Ha.L(E);},S:function(E){if(this.
B3===E)return;this.B3=E;this.Text.S(E);this.Mz=true;this.Text.Ga(Km);},Bb2:function(
H){if(this.ALL===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=15)return;this.Q(A.abU(this.String,Un,this.Ec
));this.Ec=this.Ec+1;this.Mz=true;A.pe(this.Di,this);},BiT:function(E){if(this.ALL===
E)return;this.ALL=E;if(E===false){var BcF=this.String.indexOf(String.fromCharCode(
0x2E),0);if(BcF>=0)this.Q(A.abV(this.String,BcF));}this.Mz=true;this.Text.Ga(Km);
},BwN:function(H){if(this.A4z(0x80))this.Ia().AA_(this);this.An();},BwA:function(
H){var UJ=this.String.length;if(UJ!==this.Ec){this.Ec=UJ;A.pe([this,this.AlC],this
);this.Mz=true;}},BwE:function(H){if(!!this.Ec){this.Ec=0;A.pe([this,this.AlC],this
);this.Mz=true;}},_Init:function(aArg){A.acn.I2._Init.call(this,aArg);A.acl.U5._Init.
call(this.IM={I:this},0);A.Core.BO._Init.call(this.Cm={I:this},0);A.Core.BO._Init.
call(this.AlX={I:this},0);A.Core.BO._Init.call(this.RP={I:this},0);A.Core.BO._Init.
call(this.Kz={I:this},0);A.Core.Bi._Init.call(this.Bi={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DQ._Init.call(this.CR={I:this},0);A.Core.BO._Init.
call(this.ApE={I:this},0);A.Core.BO._Init.call(this.Ard={I:this},0);A.Graphics.Hm.
_Init.call(this.Cy={I:this},0);A.acg.Ha._Init.call(this.Ha={I:this},0);A.Core.BO.
_Init.call(this.Aqw={I:this},0);A.Core.BO._Init.call(this.Ap3={I:this},0);A.Core.
BO._Init.call(this.ApO={I:this},0);this.__proto__=C.Aqu;var B;this.G(AeV);this.IM.
B1=false;this.IM.Ct=true;this.IM.Fy(500);this.IM.V4(500);this.Cm.Filter=147;this.
AlX.Filter=45;this.RP.Filter=44;this.Kz.Filter=143;this.Bi.AV(0x3F);this.Bi.Kc(PQ
);this.Bi.Kb(OJ);this.Bi.DJ(ArW);this.Bi.DX(Km);this.Bi.ADL(3);this.Text.AV(0x3F
);this.Text.G(AeV);this.Text.KF(false);this.Text.A2(0x12);this.Text.Q(A.jV);this.
Text.L(0xFFB3B3B3);this.CR.DJ(AwK);this.CR.DX(AwL);this.CR.A74(2);this.CR.A73(2);
this.CR.L(0xFFB3B3B3);this.CR.Y(false);this.ApE.Filter=138;this.Ard.Filter=137;this.
Ha.G(AeV);this.Ha.L(0xFFB3B3B3);this.Ha.NJ(1);this.Aqw.Filter=1;this.Ap3.Filter=
41;this.ApO.Filter=42;this.J(this.Bi,0);this.J(this.Text,0);this.J(this.CR,0);this.
J(this.Ha,0);this.IM.R=[B=this.CR,B.Fc,B.Y];this.Cm.BP=[this,this.Ay7];this.Cm.DR=[
this,this.Ay7];this.AlX.BP=[this,this.BbL];this.AlX.DR=[this,this.BbL];this.RP.BP=[
this,this.Ay8];this.RP.DR=[this,this.Ay8];this.Kz.BP=[this,this.BbQ];this.Kz.DR=[
this,this.BbQ];this.Bi.BP=[this,this.Azb];this.Text.QI([this,this.AlC]);this.Text.
S(A.aaL(A.fl.Ak));this.B3=A.aaL(A.fl.Ak);this.ApE.BP=[this,this.Bb2];this.Ard.BP=[
this,this.Bb2];this.Ha.YQ(this.Cy);this.Aqw.BP=[this,this.BwN];this.Ap3.BP=[this
,this.BwE];this.ApO.BP=[this,this.BwA];},_Done:function(){this.__proto__=A.acn.I2;
this.IM._Done();this.Cm._Done();this.AlX._Done();this.RP._Done();this.Kz._Done();
this.Bi._Done();this.Text._Done();this.CR._Done();this.ApE._Done();this.Ard._Done(
);this.Cy._Done();this.Ha._Done();this.Aqw._Done();this.Ap3._Done();this.ApO._Done(
);A.acn.I2._Done.call(this);},_ReInit:function(){A.acn.I2._ReInit.call(this);this.
IM._ReInit();this.Cm._ReInit();this.AlX._ReInit();this.RP._ReInit();this.Kz._ReInit(
);this.Bi._ReInit();this.Text._ReInit();this.CR._ReInit();this.ApE._ReInit();this.
Ard._ReInit();this.Cy._ReInit();this.Ha._ReInit();this.Aqw._ReInit();this.Ap3._ReInit(
);this.ApO._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.I2._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.ApE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ard)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ap3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApO)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.AeD={LabelDataSync:
null,Ah5:function(H){var B;A.pe([B=A._GetAutoObject(A.acr.And),B.Bx9],this);},_Init:
function(aArg){C.L7._Init.call(this,aArg);A.kR.CP._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.AeD;this.LabelDataSync.G(AnA);this.LabelDataSync.Q(A.
aaR(A.acf.A3t));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
AaV.Aw(A.aaL(C.ASH));this.LabelDataSync.S(A.aaL(A.fl.Ah));this.LabelDataSync.A5(
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
BBN={Gv:0,ATl:1,G6:2,Year:3};C.AA7={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AFm={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C._Init=function(){C.ATe.__proto__=A.acn.Menu;C.ASf.__proto__=A.Core.O;C.AKz.__proto__=
C.A$;C.L8.__proto__=A.Core.O;C.XT.__proto__=C.Aqd;C.Aaw.__proto__=A.Core.O;C.Auy.
__proto__=A.acn.AgR;C.AKN.__proto__=C.Fn;C.Atu.__proto__=C.Fn;C.A$.__proto__=A.Core.
O;C.Fn.__proto__=A.Core.O;C.ALJ.__proto__=A.acn.AgP;C.AgY.__proto__=A.Core.O;C.AKG.
__proto__=C.AgY;C.UW.__proto__=C.Atu;C.AKa.__proto__=A.Core.O;C.L7.__proto__=A.Core.
O;C.Aev.__proto__=C.L7;C.AeE.__proto__=C.L7;C.Aqd.__proto__=A.Core.O;C.AdI.__proto__=
A.Core.O;C.OA.__proto__=C.Aqu;C.Aqu.__proto__=A.acn.I2;C.AeD.__proto__=C.L7;C.Aav.
__proto__=A.acv.AlZ;};C._ReInit=function(){};C.Dz=function(D){var B;if((B=C.Background[
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