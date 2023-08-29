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
);if(index.abh)throw new Error("The unit file 'Views.js' included twice!");index.
abh=(function(){var A=index;var C={};
var B9=[1,1];var BG=[0,0];var EV=[0,0,0,0];var GS="\uFEFF";var Js="No matrix to perform 3D transformation";
var IL="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DS={Ks:null,Aj7:1,Aj6:1,AP:0xFFFFFFFF,J9:function(CV,aClip,aOffset,Cd,aBlend){var
B;var Afr=this.Aj6;var Afs=this.Aj7;var Acq=A.aak(this.Em,aOffset);var Acr=A.aak(
this.Ev,aOffset);var Akr;var Aks;var BJ=this.AP;if(A.z8(Acq,Acr))return;aBlend=aBlend&&((
this.U&0x2)===0x2);Cd=Cd+1;Akr=Aks=BJ;if(Cd<256){Akr=(Akr&0x00FFFFFF)|((((Cd*((Akr>>
24)&0xFF))>>8)&0xFF)<<24);Aks=(Aks&0x00FFFFFF)|((((Cd*((Aks>>24)&0xFF))>>8)&0xFF
)<<24);}if((Afr===1)&&(Afs===1))CV.Atr(aClip,Acq,Acr,Akr,Aks,aBlend);else CV.Bee(
aClip,Acq,Acr,Afr,Afs,Akr,Aks,aBlend);},GetExtent:function(){var Afr=this.Aj6;var
Afs=this.Aj7;var Acq=this.Em;var Acr=this.Ev;if(((Afr===1)&&(Afs===1))||A.z8(Acq
,Acr))return A.Core.Ajd.GetExtent.call(this);var AhA=Afr/2;var AhB=Afs/2;var AnX=
Acq[0];var AnY=Acq[1];var AnZ=Acr[0];var An0=Acr[1];var JX=AnZ-AnX;var JY=An0-AnY;
var IQ=Math.sqrt((JX*JX)+(JY*JY));JX=JX/IQ;JY=JY/IQ;var A_O=AnX+(JY*AhA);var A_P=
AnY-(JX*AhA);var AHo=AnZ+(JY*AhB);var AHp=An0-(JX*AhB);var AHq=AnZ-(JY*AhB);var AHr=
An0+(JX*AhB);var AHs=AnX-(JY*AhA);var AHt=AnY+(JX*AhA);var left=A_O;var right=A_O;
var top=A_P;var bottom=A_P;if(AHo<left)left=AHo;if(AHq<left)left=AHq;if(AHs<left
)left=AHs;if(AHo>right)right=AHo;if(AHq>right)right=AHq;if(AHs>right)right=AHs;if(
AHp<top)top=AHp;if(AHr<top)top=AHr;if(AHt<top)top=AHt;if(AHp>bottom)bottom=AHp;if(
AHr>bottom)bottom=AHr;if(AHt>bottom)bottom=AHt;var AM=[left|0,top|0,right|0,bottom|
0];AM=[].concat(AM.slice(0,2),A.aak(AM.slice(2,4),B9));return AM;},Rd:function(H
){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},A64:function(
E){var B;if(E<1)E=1;if(E===this.Aj7)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Aj7=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Aj6!==1))&&!this.Ks){this.Ks=A.zW(A.abj.Arh
);if(this.Ks.Ox)A.y_([this,this.Rd],this.Ks,0);}if(((E===1)&&(this.Aj6===1))&&!!
this.Ks){if(this.Ks.Ox)A.zl([this,this.Rd],this.Ks,0);this.Ks=null;}},A63:function(
E){var B;if(E<1)E=1;if(E===this.Aj6)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Aj6=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Aj7!==1))&&!this.Ks){this.Ks=A.zW(A.abj.Arh
);if(this.Ks.Ox)A.y_([this,this.Rd],this.Ks,0);}if(((E===1)&&(this.Aj7===1))&&!!
this.Ks){if(this.Ks.Ox)A.zl([this,this.Rd],this.Ks,0);this.Ks=null;}},NQ:function(
E){var B;if(E<1)E=1;if((E===this.Aj6)&&(E===this.Aj7))return;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Aj6=E;this.Aj7=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((E!==1)&&!this.Ks){this.Ks=A.
zW(A.abj.Arh);if(this.Ks.Ox)A.y_([this,this.Rd],this.Ks,0);}if((E===1)&&!!this.Ks
){if(this.Ks.Ox)A.zl([this,this.Rd],this.Ks,0);this.Ks=null;}},L:function(E){var
B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());},Ai:function(E){if(E)this.C3(0x400,0x0);else this.C3(0x0,0x400
);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C3(
0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg){A.Core.Ajd._Init.call(this
,aArg);this.__proto__=C.DS;},_Mark:function(D){var B;A.Core.Ajd._Mark.call(this,
D);if((B=this.Ks)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Line"};
C.AH={AK0:0xFFFFFFFF,AK1:0xFFFFFFFF,AK5:0xFFFFFFFF,AK4:0xFFFFFFFF,AP:0xFFFFFFFF,
J9:function(CV,aClip,aOffset,Cd,aBlend){var B;var Du=this.AK4;var DH=this.AK5;var
DC=this.AK0;var DG=this.AK1;var BJ=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Cd=
Cd+1;if((((Du===DH)&&(DC===DG))&&(Du===DC))&&(Du===0xFFFFFFFF))Du=DH=DC=DG=BJ;else
if(BJ!==0xFFFFFFFF){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*(((BJ>>24)&0xFF)+1))>>
8)&0xFF)<<24);Du=(Du&0xFFFFFF00)|((((Du&0xFF)*((BJ&0xFF)+1))>>8)&0xFF);Du=(Du&0xFFFF00FF
)|((((((Du>>8)&0xFF)*(((BJ>>8)&0xFF)+1))>>8)&0xFF)<<8);Du=(Du&0xFF00FFFF)|((((((
Du>>16)&0xFF)*(((BJ>>16)&0xFF)+1))>>8)&0xFF)<<16);DH=(DH&0x00FFFFFF)|((((((DH>>24
)&0xFF)*(((BJ>>24)&0xFF)+1))>>8)&0xFF)<<24);DH=(DH&0xFFFFFF00)|((((DH&0xFF)*((BJ&
0xFF)+1))>>8)&0xFF);DH=(DH&0xFFFF00FF)|((((((DH>>8)&0xFF)*(((BJ>>8)&0xFF)+1))>>8
)&0xFF)<<8);DH=(DH&0xFF00FFFF)|((((((DH>>16)&0xFF)*(((BJ>>16)&0xFF)+1))>>8)&0xFF
)<<16);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*(((BJ>>24)&0xFF)+1))>>8)&0xFF)<<24
);DC=(DC&0xFFFFFF00)|((((DC&0xFF)*((BJ&0xFF)+1))>>8)&0xFF);DC=(DC&0xFFFF00FF)|((((((
DC>>8)&0xFF)*(((BJ>>8)&0xFF)+1))>>8)&0xFF)<<8);DC=(DC&0xFF00FFFF)|((((((DC>>16)&
0xFF)*(((BJ>>16)&0xFF)+1))>>8)&0xFF)<<16);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)
*(((BJ>>24)&0xFF)+1))>>8)&0xFF)<<24);DG=(DG&0xFFFFFF00)|((((DG&0xFF)*((BJ&0xFF)+
1))>>8)&0xFF);DG=(DG&0xFFFF00FF)|((((((DG>>8)&0xFF)*(((BJ>>8)&0xFF)+1))>>8)&0xFF
)<<8);DG=(DG&0xFF00FFFF)|((((((DG>>16)&0xFF)*(((BJ>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Cd<256){Du=(Du&0x00FFFFFF)|((((Cd*((Du>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF
)|((((Cd*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cd*((DC>>24)&0xFF
))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cd*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CV.
AtG(aClip,A.aam(this.M,aOffset),Du,DH,DG,DC,aBlend);},AuM:function(E){var B;if(E===
this.AK0)return;this.AK0=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},AuN:function(E){var B;if(E===this.AK1)return;this.AK1=E;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},AuQ:function(E){var B;if(E===this.AK5)return;this.
AK5=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},AuP:function(E){var
B;if(E===this.AK4)return;this.AK4=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},E$:function(){var B;return((this.U&0x1)===0x1
);},X:function(E){if(E)this.C3(0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg
){A.Core.ED._Init.call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"
};C.CB={Width:1,AP:0xFFFFFFFF,J9:function(CV,aClip,aOffset,Cd,aBlend){var B;var Du;
var DH;var DC;var DG;var BJ=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Cd=Cd+1;
Du=DH=DC=DG=BJ;if(Cd<256){Du=(Du&0x00FFFFFF)|((((Cd*((Du>>24)&0xFF))>>8)&0xFF)<<
24);DH=(DH&0x00FFFFFF)|((((Cd*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((
Cd*((DC>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cd*((DG>>24)&0xFF))>>8
)&0xFF)<<24);}CV.Bec(aClip,A.aam(this.M,aOffset),this.Width,Du,DH,DG,DC,aBlend);
},NQ:function(E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(
E){if(E)this.C3(0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg){A.Core.ED.
_Init.call(this,aArg);this.__proto__=C.CB;},_className:"Views::Border"};C.NG={timer:
null,Aj:null,MD:-1,AP:0xFFFFFFFF,Ats:0x1F,S$:0,Dq:0,Amg:A.vw,UM:false,J9:function(
CV,aClip,aOffset,Cd,aBlend){var B;var Nj=this.S$;if(this.MD>=0)Nj=this.MD;if(!this.
Aj||(Nj>=this.Aj.NoOfFrames))return;this.Aj.Update();var Du;var DH;var DG;var DC;
var BJ=this.AP;var J4=(((Cd+1)*255)>>8)+1;var N_=this.Ats;var AM=A.aam(this.M,aOffset
);var AIO=A.aaj([AM[2]-AM[0],AM[3]-AM[1]],this.Amg);aBlend=aBlend&&((this.U&0x2)===
0x2);Du=DH=DC=DG=BJ;if(J4<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J4)>>8)&0xFF
)<<24);DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*J4)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF
)|((((((DG>>24)&0xFF)*J4)>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*
J4)>>8)&0xFF)<<24);}if(((this.Amg[0]>0)&&(AIO[0]>0))&&!((N_&0x5)===0x5)){var d=((
this.Aj.FrameSize[0]/3)|0)-AIO[0];if(((N_&0x1)===0x1)){if(aClip[2]>AM[2])aClip=A.
aaQ(aClip,AM[2]);if(d>0)AM=A.aaQ(AM,AM[2]+d);N_=N_|0x4;}else if(((N_&0x4)===0x4)
){if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.slice(1,4));if(d>0)AM=[].concat(
AM[0]-d,AM.slice(1,4));N_=N_|0x1;}else{if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.
slice(1,4));if(aClip[2]>AM[2])aClip=A.aaQ(aClip,AM[2]);if(d>0){AM=[].concat(AM[0
]-((d/2)|0),AM.slice(1,4));AM=A.aaQ(AM,(AM[2]+d)-((d/2)|0));}N_=N_|0x5;}}if(((this.
Amg[1]>0)&&(AIO[1]>0))&&!((N_&0xA)===0xA)){var d=((this.Aj.FrameSize[1]/3)|0)-AIO[
1];if(((N_&0x2)===0x2)){if(aClip[3]>AM[3])aClip=[].concat(aClip.slice(0,3),AM[3]
);if(d>0)AM=[].concat(AM.slice(0,3),AM[3]+d);N_=N_|0x8;}else if(((N_&0x8)===0x8)
){if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(d>0)AM=A.aaS(AM,AM[1]-d);N_=N_|0x2;
}else{if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(aClip[3]>AM[3])aClip=[].concat(
aClip.slice(0,3),AM[3]);if(d>0){AM=A.aaS(AM,AM[1]-((d/2)|0));AM=[].concat(AM.slice(
0,3),(AM[3]+d)-((d/2)|0));}N_=N_|0xA;}}CV.Beb(aClip,this.Aj,Nj,AM,N_,Du,DH,DG,DC
,aBlend);},Rd:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.
M);},L$:function(H){var B;var Nj=this.MD;var SN=0;if(!!this.Aj)SN=this.Aj.NoOfFrames
*this.Aj.FrameDelay;if((!!this.timer&&(this.MD<0))&&(SN>0))this.Dq=this.timer.Bu-(
this.S$*this.Aj.FrameDelay);if(!!this.timer&&(SN>0)){var Aq=(this.timer.Bu-this.
Dq)|0;Nj=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SN){Nj=Nj%this.Aj.NoOfFrames;this.Dq=this.
timer.Bu-(Aq%SN);}}if(((Nj!==this.MD)&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);this.MD=Nj;if(!SN&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.
timer=null;}},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},Ys:function(E){var B;if(this.UM===E)return;
this.UM=E;this.MD=-1;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(A.abm.AfS);A.y_([this,this.L$],this.
timer,0);A.ow([this,this.L$],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},A6g:function(E){var B;if(E===this.Ats)return;this.Ats=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},Cs:function(E){var B;if(E<0)E=0;if((E===
this.S$)&&(this.MD===-1))return;this.S$=E;if(!this.timer)this.MD=-1;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;
if(!!this.Aj&&this.Aj.Ox)A.zl([this,this.Rd],this.Aj,0);this.Aj=E;this.MD=-1;if(
!!E&&E.Ox)A.y_([this,this.Rd],E,0);if(this.UM){this.Ys(false);this.Ys(true);}if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C3(
0x1,0x0);else this.C3(0x0,0x1);},A6v:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[
1]<0)E=[E[0],0];if(A.z8(E,this.Amg))return;this.Amg=E;if((!!this.Ac&&((this.U&0x1
)===0x1))&&!((this.Ats&0xF)===0xF))this.Ac.Bg(this.M);},_Init:function(aArg){A.Core.
ED._Init.call(this,aArg);this.__proto__=C.NG;},_Mark:function(D){var B;A.Core.ED.
_Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Frame"};C.Ak={timer:
null,Aj:null,Dq:0,MD:0,AP:0xFFFFFFFF,J6:0x12,S$:0,GM:255,UM:false,ZX:false,J9:function(
CV,aClip,aOffset,Cd,aBlend){var B;var Nj=this.S$;if(this.MD>=0)Nj=this.MD;if(!this.
Aj||(Nj>=this.Aj.NoOfFrames))return;this.Aj.Update();var AD=this.C9();var CY=this.
Aj.FrameSize;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;var Du;var DH;var DG;var DC;
var BJ=this.AP;var J4=(((Cd+1)*this.GM)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2
);Du=DH=DC=DG=BJ;if(J4<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J4)>>8)&0xFF)<<
24);DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*J4)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((
DG>>24)&0xFF)*J4)>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J4)>>8)&
0xFF)<<24);}if(A.z8([AD[2]-AD[0],AD[3]-AD[1]],CY))CV.A2z(aClip,this.Aj,Nj,A.aam(
this.M,aOffset),A.aaj(this.M.slice(0,2),AD.slice(0,2)),Du,DH,DG,DC,aBlend);else CV.
BkB(aClip,this.Aj,Nj,A.aam(AD,aOffset),[].concat(BG,CY),Du,DH,DG,DC,aBlend,true);
},Rd:function(H){var B;if(((this.ZX&&!!this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.
Aj.FrameSize[1]>0))this.G(this.C9());if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},L$:function(H){var B;var Nj=this.MD;var SN=0;if(!!this.Aj)SN=this.Aj.
NoOfFrames*this.Aj.FrameDelay;if((!!this.timer&&(this.MD<0))&&(SN>0))this.Dq=this.
timer.Bu-(this.S$*this.Aj.FrameDelay);if(!!this.timer&&(SN>0)){var Aq=(this.timer.
Bu-this.Dq)|0;Nj=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SN){Nj=Nj%this.Aj.NoOfFrames;this.
Dq=this.timer.Bu-(Aq%SN);}}if(((Nj!==this.MD)&&!!this.Ac)&&((this.U&0x1)===0x1))
this.Ac.Bg(this.M);this.MD=Nj;if(!SN&&!!this.timer){A.zl([this,this.L$],this.timer
,0);this.timer=null;}},I0:function(E){if(E===this.ZX)return;this.ZX=E;if(((E&&!!
this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.Aj.FrameSize[1]>0))this.G(this.C9());
},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},Ys:function(E){var B;if(this.UM===E)return;this.UM=
E;this.MD=-1;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.AfS);A.y_([this,this.L$],this.timer,0);
A.ow([this,this.L$],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},A1:function(E){var B;if(E===this.J6)return;this.J6=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},Cs:function(E){var B;if(E<0)E=0;if((E===this.S$)&&(
this.MD===-1))return;this.S$=E;if(!this.timer)this.MD=-1;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;if(!
!this.Aj&&this.Aj.Ox)A.zl([this,this.Rd],this.Aj,0);this.Aj=E;this.MD=-1;if(!!E&&
E.Ox)A.y_([this,this.Rd],E,0);if(this.UM){this.Ys(false);this.Ys(true);}if(((this.
ZX&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.G(this.C9());if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},DL:function(E){var B;if(E>255)E=255;if(E<
0)E=0;if(E===this.GM)return;this.GM=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},Ai:function(E){if(E)this.C3(0x400,0x0);else this.C3(0x0,0x400);},E$:
function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C3(0x1,0x0
);else this.C3(0x0,0x1);},C9:function(){var B;if(!this.Aj)return EV;var Br=this.
J6;var CY=this.Aj.FrameSize;var A7=this.M;var width=A7[2]-A7[0];var height=A7[3]-
A7[1];if(!CY[0]||!CY[1])return EV;var C8=[0,0,width,height];var BW=C8;if(((Br&0x40
)===0x40)){var A0L=((((C8[2]-C8[0])<<16)+((CY[0]/2)|0))/CY[0])|0;var Ay8=((((C8[
3]-C8[1])<<16)+((CY[1]/2)|0))/CY[1])|0;var AhY=A0L;if(Ay8>AhY)AhY=Ay8;BW=A.aaO(BW
,((CY[0]*AhY)+32768)>>16);BW=A.aaL(BW,((CY[1]*AhY)+32768)>>16);}else if(((Br&0x80
)===0x80)){var A0L=((((C8[2]-C8[0])<<16)+((CY[0]/2)|0))/CY[0])|0;var Ay8=((((C8[
3]-C8[1])<<16)+((CY[1]/2)|0))/CY[1])|0;var AhY=A0L;if(Ay8<AhY)AhY=Ay8;BW=A.aaO(BW
,((CY[0]*AhY)+32768)>>16);BW=A.aaL(BW,((CY[1]*AhY)+32768)>>16);}else if(!((Br&0x100
)===0x100))BW=A.aaN(BW,CY);if((BW[2]-BW[0])!==(C8[2]-C8[0])){if(((Br&0x4)===0x4)
)BW=A.aaP(BW,C8[2]-(BW[2]-BW[0]));else if(((Br&0x2)===0x2))BW=A.aaP(BW,(C8[0]+(((
C8[2]-C8[0])/2)|0))-(((BW[2]-BW[0])/2)|0));}if((BW[3]-BW[1])!==(C8[3]-C8[1])){if(((
Br&0x20)===0x20))BW=A.aaR(BW,C8[3]-(BW[3]-BW[1]));else if(((Br&0x10)===0x10))BW=
A.aaR(BW,(C8[1]+(((C8[3]-C8[1])/2)|0))-(((BW[3]-BW[1])/2)|0));}BW=A.aam(BW,A7.slice(
0,2));return BW;},BgP:function(){return this.AP;},AP0:function(){return this.S$;
},_Init:function(aArg){A.Core.ED._Init.call(this,aArg);this.__proto__=C.Ak;},_Mark:
function(D){var B;A.Core.ED._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Views::Image"};C.Text={B4:null,El:null,CG:A.jm,String:A.jm,N7:null,Alh:A.vw,I1:
0,Sb:0,Aby:0,Bn:A.vw,J6:0x12,AP:0xFFFFFFFF,AeF:false,ZX:false,Xr:false,ALK:false
,HO:false,K1:function(){if(!!this.N7){this.AY4(this.N7);this.N7=null;}},J9:function(
CV,aClip,aOffset,Cd,aBlend){var B;if((this.CG===A.jm)||!this.B4)return;var Br=this.
J6;var font=this.B4;var C8=A.aam(this.M,aOffset);var Du;var DH;var DG;var DC;var
col=this.AP;var J4=(((Cd+1)*255)>>8)+1;var J3=this.CG.charCodeAt(0)||0;var AD=A.
aam(this.C9(),aOffset);var Bm=[C8[0]-AD[0],(C8[1]-AD[1])-font.Ascent];if(J3<1)return;
Du=DH=DC=DG=col;if(J4<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J4)>>8)&0xFF)<<
24);DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*J4)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((
DG>>24)&0xFF)*J4)>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J4)>>8)&
0xFF)<<24);}if(((Br&0x80)===0x80)){if(this.Ai3())Br=(Br&~0x80)|0x4;else Br=(Br&~
0x80)|0x1;}if((J3===1)&&!((Br&0x40)===0x40)){CV.A23(aClip,font,this.CG,2,(this.CG.
charCodeAt(1)||0)-1,C8,Bm,0,0,Du,DH,DG,DC,true);return;}var leading=font.Leading;
if(this.Sb>0)leading=(this.Sb-font.Ascent)-font.Descent;var ZI=(font.Ascent+font.
Descent)+leading;var Bug=aClip[1]-AD[1];var Buh=aClip[3]-AD[1];var AYh=AD[2]-AD[
0];var Dk=0;var P=1;var BJ=this.CG.charCodeAt(1)||0;while(((Dk+ZI)<Bug)&&(BJ>0)){
P=P+BJ;Dk=Dk+ZI;BJ=this.CG.charCodeAt(P)||0;}while((Dk<Buh)&&(BJ>0)){var L5=A.aaj(
Bm,[0,Dk]);var Alb=0;var OV=false;if(((((Br&0x40)===0x40)&&((this.CG.charCodeAt((
P+BJ)-1)||0)!==0x0A))&&((this.CG.charCodeAt(P+1)||0)!==0x0A))&&((this.CG.charCodeAt(
P+BJ)||0)!==0x00))OV=true;if(OV&&!!(Br&0x6)){var AoC=P+BJ;var Axn=this.CG.indexOf(
String.fromCharCode(0x20),P+1);var Axo=this.CG.indexOf(String.fromCharCode(0xA0)
,P+1);if(((Axn<0)||(Axn>=AoC))&&((Axo<0)||(Axo>=AoC)))OV=false;}if(OV)Alb=AYh;else
if(((Br&0x4)===0x4))L5=[(L5[0]-AYh)+font.XB(this.CG,P+1,BJ-1),L5[1]];else if(((Br&
0x2)===0x2))L5=[(L5[0]-((AYh/2)|0))+((font.XB(this.CG,P+1,BJ-1)/2)|0),L5[1]];CV.
A23(aClip,font,this.CG,P+1,BJ-1,C8,L5,Alb,0,Du,DH,DG,DC,true);P=P+BJ;Dk=Dk+ZI;BJ=
this.CG.charCodeAt(P)||0;}},G:function(E){var B;if(A.z9(E,this.M))return;var BbY;
BbY=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BbY&&!this.Aby)&&this.AeF)&&this.HO
)&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HO=false;A.ow([this,this.OY],this
);}if(((this.Xr&&this.HO)&&!A.z8([(B=this.M)[2]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-
E[1]]))&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HO=false;A.ow([this,this.
OY],this);}A.Core.ED.G.call(this,E);A.ow([this,this.AhR],this);},Bt_:function(aBidi
,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.ze(aBidi,aRowStart,aRowEnd
,aIndex);return aIndex;},Bt9:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)
return aIndex;aIndex=A.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},AY4:function(
aBidi){if(!aBidi)return;A.qU(aBidi);},But:function(aSize){var bidi=null;bidi=A.vj(
aSize);return bidi;},AhR:function(H){A.ow(this.El,this);},OY:function(H){A.ow([this
,this.WQ],this);},WQ:function(H){var B;if(this.HO)return;var width=(B=this.M)[2]-
B[0];var height=(B=this.M)[3]-B[1];var WH=-1;var font=this.B4;if((!!font&&!!!font.
Ascent)&&!!!font.Descent)font=null;if(this.AeF){if(this.Aby>0)WH=this.Aby;else if(
!this.ZX)WH=width-(this.I1*2);else WH=width;if(WH<0)WH=1;}if(!!this.N7){this.AY4(
this.N7);this.N7=null;}this.HO=true;if((this.String!==A.jm)&&!!font){var length=
this.String.length;if(this.ALK)this.N7=this.But(length);this.CG=font.Bj3(this.String
,0,WH,length,this.N7);if(!!this.N7&&!this.Bfs()){this.AY4(this.N7);this.N7=null;
}}else this.CG=A.jm;this.Alh=BG;if(((this.Xr&&(this.CG!==A.jm))&&!this.ZX)&&!!font
){var Br=this.J6;var leading=font.Leading;var Io=this.CG;var AIM=this.Ai3();if(((
Br&0x80)===0x80)){if(AIM)Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sb>0)
leading=(this.Sb-font.Ascent)-font.Descent;var Ay3=(font.Ascent+font.Descent)+leading;
var J3=Io.charCodeAt(0)||0;var AkS=((height+leading)/Ay3)|0;var AYw=false;var AHw=
false;if(AkS<=0)AkS=1;if(J3>AkS){var A8=0;var Ay4=0;var AIK=J3-1;var KO;var Nk=Io.
length;var tmp=A.jm;if(!!(Br&0x110)&&!!(Br&0x28))Br&=~0x110;if(!!(Br&0x110))Br&=
~0x28;if(((Br&0x20)===0x20))Ay4=J3-AkS;else if(((Br&0x10)===0x10)||((Br&0x100)===
0x100)){Ay4=((J3-AkS)/2)|0;AIK=(Ay4+AkS)-1;}else AIK=AkS-1;AYw=Ay4>0;AHw=AIK<(J3-
1);for(KO=1;A8<Ay4;A8=A8+1)KO=KO+(Io.charCodeAt(KO)||0);if(AHw)for(Nk=KO;A8<AIK;
A8=A8+1)Nk=Nk+(Io.charCodeAt(Nk)||0);if(AYw){var IQ=Io.charCodeAt(KO)||0;tmp=(GS+
A.aaY(Io,KO,IQ))+GS;tmp=A.aaT(tmp,0,(IQ+2)&0xFFFF);KO=KO+IQ;if((tmp.charCodeAt(IQ
)||0)===0x0A){tmp=A.aaT(tmp,IQ,0xFEFF);tmp=A.aaT(tmp,IQ+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(tmp,1,0x0A);}else tmp=A.aaT(tmp
,1,0xFEFF);}tmp=tmp+A.aaY(Io,KO,Nk-KO);if(AHw&&(Nk>=KO)){var IQ=Io.charCodeAt(Nk
)||0;var P6=(GS+A.aaY(Io,Nk,IQ))+GS;P6=A.aaT(P6,0,(IQ+2)&0xFFFF);P6=A.aaT(P6,1,0xFEFF
);if((P6.charCodeAt(IQ)||0)===0x0A){P6=A.aaT(P6,IQ,0xFEFF);P6=A.aaT(P6,IQ+1,0x0A
);}if((P6.charCodeAt(2)||0)===0x0A){P6=A.aaT(P6,2,0xFEFF);P6=A.aaT(P6,1,0x0A);}else
P6=A.aaT(P6,1,0xFEFF);tmp=tmp+P6;}Io=String.fromCharCode(AkS&0xFFFF)+tmp;}var A8=
0;var inx=1;var AIl=width-(this.I1*2);if(this.AeF&&(this.Aby>0))AIl=this.Aby;J3=
Io.charCodeAt(0)||0;for(;A8<J3;A8=A8+1){var Ak_=AYw&&!A8;var Ak$=AHw&&(A8===(J3-
1));var Wv=false;var Ww=false;var AsH=AIM;if((AIM&&Ak_)&&!Ak$){Ak_=false;Ak$=true;
}else if((AIM&&Ak$)&&!Ak_){Ak$=false;Ak_=true;}var WR=inx+1;var IQ=Io.charCodeAt(
inx)||0;var KO=WR;var Nk=(WR+IQ)-2;var AZk=-1;var AZl=-1;if(!this.AeF&&(font.XB(
Io,WR,IQ-1)>AIl)){var Anx=Br;if(((Anx&0x2)===0x2)&&!!(Anx&0x5))Anx&=~0x2;if(((Anx&
0x2)===0x2))Anx&=~0x5;if(((Anx&0x4)===0x4))Wv=true;else if(((Anx&0x2)===0x2)){Wv=
true;Ww=true;}else Ww=true;}if((Io.charCodeAt(KO)||0)===0x0A)KO=KO+1;if((Io.charCodeAt(
Nk)||0)===0x0A)Nk=Nk-1;while(Wv&&((Io.charCodeAt(KO)||0)===0xFEFF))KO=KO+1;while(
Ww&&((Io.charCodeAt(Nk)||0)===0xFEFF))Nk=Nk-1;Wv=Wv&&!Ak$;Ww=Ww&&!Ak_;while((((Wv||
Ww)||Ak_)||Ak$)&&(KO<Nk)){if((Wv&&(AsH||!Ww))||Ak_){if(AZk>0)Io=A.aaT(Io,AZk,0xFEFF
);Io=A.aaT(Io,KO,0x2026);AZk=KO;KO=KO+1;AsH=!AsH;Ak_=false;if(font.XB(Io,WR,IQ-1
)<=AIl){Wv=false;Ww=false;}else Wv=Wv||!Ww;}if((Ww&&(!AsH||!Wv))||Ak$){if(AZl>0)
Io=A.aaT(Io,AZl,0xFEFF);Io=A.aaT(Io,Nk,0x2026);AZl=Nk;Nk=Nk-1;AsH=!AsH;Ak$=false;
if(font.XB(Io,WR,IQ-1)<=AIl){Wv=false;Ww=false;}else Ww=Ww||!Wv;}}inx=inx+IQ;}this.
Alh=[font.A3u(Io),((Io.charCodeAt(0)||0)*Ay3)-leading];this.CG=Io;}if(this.ZX&&(
this.CG!==A.jm)){var Ast=[this.I1,0];this.U=this.U|0x2000;this.G(A.aal(A.z4(this.
C9(),Ast),this.Bn));this.U=this.U&~0x2000;}if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);A.ow([this,this.AhR],this);},Bij:function(E){if(E===this.ALK)return;
this.ALK=E;this.CG=A.jm;this.HO=false;A.ow([this,this.OY],this);},HC:function(E){
if(E<0)E=0;if(this.I1===E)return;this.I1=E;this.CG=A.jm;this.HO=false;A.ow([this
,this.OY],this);},Bjx:function(E){var B;if(E<0)E=0;if(this.Sb===E)return;this.Sb=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);if(this.Xr){this.CG=A.jm;
this.HO=false;A.ow([this,this.OY],this);}if(this.ZX&&this.HO)this.G(A.aal(this.C9(
),this.Bn));if(this.HO)A.ow([this,this.AhR],this);},Bii:function(E){if(E===this.
Xr)return;this.Xr=E;if(((this.AeF&&!!!this.Aby)||E)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;this.CG=A.jm;this.HO=false;A.ow([this,this.OY],this);},
Qy:function(E){if(A.z$(E,this.El))return;this.El=E;if(((!!!this.Aby&&this.AeF)||
!!E)||this.Xr)this.U=this.U&~0x100;else this.U=this.U|0x100;},I0:function(E){if(
E===this.ZX)return;this.ZX=E;if(E&&this.Xr){this.CG=A.jm;this.HO=false;A.ow([this
,this.OY],this);}if(E&&this.HO){var Ast=[this.I1,0];this.U=this.U|0x2000;this.G(
A.aal(A.z4(this.C9(),Ast),this.Bn));this.U=this.U&~0x2000;}},BjO:function(E){if(
E<0)E=0;if(E===this.Aby)return;this.Aby=E;if(this.AeF&&this.HO){this.CG=A.jm;this.
HO=false;A.ow([this,this.OY],this);}if(((!!!E&&this.AeF)||this.Xr)||!!this.El)this.
U=this.U&~0x100;else this.U=this.U|0x100;},KB:function(E){if(E===this.AeF)return;
this.AeF=E;if(this.HO){this.CG=A.jm;this.HO=false;A.ow([this,this.OY],this);}if(((
E&&!!!this.Aby)||this.Xr)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;
},Gk:function(E){var B;if(A.z8(E,this.Bn))return;this.Bn=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);if(this.HO)A.ow([this,this.AhR],this);},A1:function(
E){var B;if(E===this.J6)return;this.J6=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if(this.Xr){this.CG=A.jm;this.HO=false;A.ow([this,this.OY],this);}
if(this.HO)A.ow([this,this.AhR],this);},R:function(E){if(E===this.String)return;
this.String=E;this.CG=A.jm;this.HO=false;A.ow([this,this.OY],this);},Aa:function(
E){if(E===this.B4)return;this.B4=E;this.CG=A.jm;this.HO=false;A.ow([this,this.OY
],this);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},Ai:function(E){if(E)this.C3(0x400,0x0);else this.
C3(0x0,0x400);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(
E)this.C3(0x1,0x0);else this.C3(0x0,0x1);},Ai3:function(){if(!this.HO)this.WQ(this
);if(!this.N7)return false;var result=false;var bidi=this.N7;result=A.vi(bidi);return result;
},Bfs:function(){if(!this.HO)this.WQ(this);if(!this.N7)return false;var result=false;
var bidi=this.N7;result=A.zc(bidi);return result;},AEH:function(aIndex){if(((this.
String===A.jm)||!this.B4)||this.Xr)return BG;if(!this.HO)this.WQ(this);if(aIndex<
0)aIndex=0;var Bvz=(this.CG.charCodeAt(0)||0)-1;var L_=this.CG.charCodeAt(1)||0;
var inx=1;var Ah2=2;var A8=0;var col=-1;var CO=true;aIndex=aIndex+2;while((A8<Bvz
)&&((inx+L_)<=aIndex)){inx=inx+L_;A8=A8+1;Ah2=Ah2+1;aIndex=aIndex+1;L_=this.CG.charCodeAt(
inx)||0;}if(aIndex>(inx+L_))aIndex=inx+L_;if(!!this.N7)aIndex=(inx+this.Bt9(this.
N7,(inx+1)-Ah2,(inx+L_)-Ah2,(aIndex-inx)-1))+1;for(;aIndex>inx;inx=inx+1){var Ik=
this.CG.charCodeAt(inx+1)||0;if(CO)col=col+1;CO=(Ik!==0xFEFF)&&(Ik!==0x0A);}return[
col,A8];},AmM:function(Anp){if(((this.String===A.jm)||!this.B4)||this.Xr)return 0;
if(!this.HO)this.WQ(this);var A8=Anp[1];var col=Anp[0];var inx=1;var Ah2=2;var J3=
this.CG.charCodeAt(0)||0;var L_=this.CG.charCodeAt(1)||0;if(A8>=J3){A8=J3-1;col=
this.CG.length;}if(A8<0){A8=0;col=0;}if(col<0)col=0;while((A8>0)&&(L_>0)){inx=inx+
L_;A8=A8-1;Ah2=Ah2+1;L_=this.CG.charCodeAt(inx)||0;}var WE=inx;var AIL=(inx-Ah2)+
1;var AoC=(AIL+L_)-1;var AyQ=false;while((col>=0)&&(L_>1)){var Ik=this.CG.charCodeAt(
inx+1)||0;inx=inx+1;L_=L_-1;AyQ=(Ik===0xFEFF)||(Ik===0x0A);if(!AyQ){col=col-1;WE=
inx;}}if((!AyQ&&(col>=0))&&((this.CG.charCodeAt(inx+1)||0)===0x00))AyQ=true;if(AyQ
)WE=WE+1;WE=WE-Ah2;if(!!this.N7)WE=AIL+this.Bt_(this.N7,AIL,AoC,WE-AIL);return WE;
},ARh:function(KI){var B;if((this.String===A.jm)||!this.B4)return BG;if(!this.HO
)this.WQ(this);var AD=this.C9();if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return BG;var font=
this.B4;var Br=this.J6;var J3=this.CG.charCodeAt(0)||0;var leading=font.Leading;
if(KI[1]<AD[1])KI=[KI[0],AD[1]];if(KI[1]>=AD[3])KI=[KI[0],AD[3]-1];if(this.Sb>0)
leading=(this.Sb-font.Ascent)-font.Descent;var ZI=(font.Ascent+font.Descent)+leading;
var A8=((KI[1]-AD[1])/ZI)|0;var Nv=this.AA3(A8);var L_=Nv.length;var OV=false;if(((
Br&0x80)===0x80)){if(this.Ai3())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&
0x40)===0x40)&&(A8<(J3-1)))OV=true;if((OV&&(Nv.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nv.indexOf(String.fromCharCode(0xA0),0)<0))OV=false;if(OV){var inx=1;var
AoB=A8;while(AoB>0){inx=inx+(this.CG.charCodeAt(inx)||0);AoB=AoB-1;}if(((this.CG.
charCodeAt(inx+1)||0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx
)||0))-1)||0)===0x0A))OV=false;}var Alb=0;var FY=0;if(OV)Alb=AD[2]-AD[0];else if(((
Br&0x4)===0x4))FY=(AD[2]-AD[0])-font.XB(Nv,0,L_);else if(((Br&0x2)===0x2))FY=(((
AD[2]-AD[0])/2)|0)-((font.XB(Nv,0,L_)/2)|0);var col=font.Be6(Nv,0,L_,(KI[0]-AD[0
])-FY,Alb);if(col<0)col=0;return[col,A8];},Aeb:function(Anp){var B;if((this.String===
A.jm)||!this.B4)return BG;if(!this.HO)this.WQ(this);var J3=this.CG.charCodeAt(0)||
0;var font=this.B4;var Br=this.J6;var A8=Anp[1];var col=Anp[0];if(A8>=J3){A8=J3-
1;col=this.CG.length;}if(A8<0){A8=0;col=0;}var Nv=this.AA3(A8);var L_=Nv.length;
var AD=this.C9();var OV=false;var leading=font.Leading;if(((Br&0x80)===0x80)){if(
this.Ai3())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)&&(A8<(
J3-1)))OV=true;if((OV&&(Nv.indexOf(String.fromCharCode(0x20),0)<0))&&(Nv.indexOf(
String.fromCharCode(0xA0),0)<0))OV=false;if(OV){var inx=1;var AoB=A8;while(AoB>0
){inx=inx+(this.CG.charCodeAt(inx)||0);AoB=AoB-1;}if(((this.CG.charCodeAt(inx+1)||
0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx)||0))-1)||0)===0x0A
))OV=false;}if(this.Sb>0)leading=(this.Sb-font.Ascent)-font.Descent;var Dk=(AD[1
]+(A8*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Alb=0;var FY=AD[0];
if(OV)Alb=AD[2]-AD[0];else if(((Br&0x4)===0x4))FY=AD[2]-font.XB(Nv,0,L_);else if(((
Br&0x2)===0x2))FY=(FY+(((AD[2]-AD[0])/2)|0))-((font.XB(Nv,0,L_)/2)|0);var pos=font.
Be2(Nv,0,L_,col,Alb);if(pos<0)pos=0;return[FY+pos,Dk];},AMt:function(Ab){var B;if((
this.String===A.jm)||!this.B4)return EV;if(!this.HO)this.WQ(this);var J3=this.CG.
charCodeAt(0)||0;var font=this.B4;if((Ab<0)||((Ab>=J3)&&(Ab>0)))return EV;var Br=
this.J6;var inx=1;var leading=font.Leading;var A7=this.M;var width=A7[2]-A7[0];var
height=A7[3]-A7[1];width=width-(this.I1*2);if(((Br&0x80)===0x80)){if(this.Ai3())
Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sb>0)leading=(this.Sb-font.Ascent
)-font.Descent;var Dk=Ab*((font.Ascent+font.Descent)+leading);var FY=0;while(Ab>
0){inx=inx+(this.CG.charCodeAt(inx)||0);Ab=Ab-1;}var Ay5=(this.CG.charCodeAt(inx
)||0)-1;var BbZ=font.XB(this.CG,inx+1,Ay5);var A0K=font.A3D(this.CG,inx+1,Ay5);var
AoD=BbZ;var ZI=font.Ascent+font.Descent;var Azi=(J3*((font.Ascent+font.Descent)+
leading))-leading;if(!J3)Azi=ZI;if((((this.CG.charCodeAt((inx+Ay5)+1)||0)===0x00
)||((this.CG.charCodeAt(inx+Ay5)||0)===0x0A))||((this.CG.charCodeAt(inx+1)||0)===
0x0A))Br=Br&~0x40;if(((Br&0x40)===0x40)){var AoC=(inx+1)+Ay5;var Axn=this.CG.indexOf(
String.fromCharCode(0x20),inx+1);var Axo=this.CG.indexOf(String.fromCharCode(0xA0
),inx+1);if(((Axn>=0)&&(Axn<AoC))||((Axo>=0)&&(Axo<AoC)))AoD=width;}if((!!(Br&0x110
)&&!!(Br&0x28))&&(Azi>height))Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;if((((Br&0x2)===
0x2)&&!!(Br&0x5))&&(AoD>width))Br&=~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if(((Br&0x4
)===0x4))FY=width-AoD;else if(((Br&0x2)===0x2))FY=((width/2)|0)-((AoD/2)|0);if(((
Br&0x20)===0x20))Dk=Dk+(height-Azi);else if(((Br&0x100)===0x100))Dk=((Dk+((height
/2)|0))-((Azi/2)|0))+(((this.B4.Descent-this.B4.Ascent)/2)|0);else if(((Br&0x10)===
0x10))Dk=(Dk+((height/2)|0))-((Azi/2)|0);FY=(FY+A0K[0])+this.I1;AoD=(AoD+(A0K[2]-
A0K[0]))-BbZ;var BW;{var Bbs=[A7[0]+FY,A7[1]+Dk];BW=[].concat(Bbs,A.aak(Bbs,[AoD
,ZI]));}return A.aam(BW,this.Bn);},AA3:function(Ab){if((this.String===A.jm)||!this.
B4)return A.jm;if(!this.HO)this.WQ(this);var J3=this.CG.charCodeAt(0)||0;var inx=
1;if((!this.B4||(Ab<0))||(Ab>=J3))return A.jm;while(Ab>0){inx=inx+(this.CG.charCodeAt(
inx)||0);Ab=Ab-1;}var WR=inx;var Ar9=inx+(this.CG.charCodeAt(inx)||0);var Ik=0x00;
do{WR=WR+1;Ik=this.CG.charCodeAt(WR)||0;}while(((Ik===0xFEFF)||(Ik===0x0A))&&(WR<=
Ar9));do{Ar9=Ar9-1;Ik=this.CG.charCodeAt(Ar9)||0;}while(((Ik===0xFEFF)||(Ik===0x0A
))&&(WR<=Ar9));var Nv=A.aaY(this.CG,WR,(Ar9-WR)+1);var An5;for(An5=Nv.indexOf(String.
fromCharCode(0xFEFF),0);An5>=0;An5=Nv.indexOf(String.fromCharCode(0xFEFF),An5+1)
){var WE=An5+1;while((Nv.charCodeAt(WE)||0)===0xFEFF)WE=WE+1;Nv=A.aa3(Nv,An5,WE-
An5);}return Nv;},C9:function(){var B;if((this.String===A.jm)||!this.B4)return EV;
if(!this.HO)this.WQ(this);if(this.CG===A.jm)return EV;var leading=this.B4.Leading;
var Ay3=(this.B4.Ascent+this.B4.Descent)+this.B4.Leading;if(this.Sb>0){leading=(
this.Sb-this.B4.Ascent)-this.B4.Descent;Ay3=this.Sb;}if(A.z8(this.Alh,BG))this.Alh=[
this.B4.A3u(this.CG),this.Alh[1]];this.Alh=[this.Alh[0],((this.CG.charCodeAt(0)||
0)*Ay3)-leading];var Br=this.J6;var A7=this.M;var Ast=this.I1;var width=A7[2]-A7[
0];var height=A7[3]-A7[1];var C8=[Ast,0,width-Ast,height];var BW=[].concat(C8.slice(
0,2),A.aak(C8.slice(0,2),this.Alh));if(((Br&0x80)===0x80)){if(this.Ai3())Br=(Br&
~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)){var WH=this.Aby;if(WH<=
0)WH=width-(this.I1*2);if(WH<0)WH=0;if(WH>(BW[2]-BW[0]))BW=A.aaO(BW,WH);}if((!!(
Br&0x110)&&!!(Br&0x28))&&((BW[3]-BW[1])>(C8[3]-C8[1])))Br&=~0x110;if(!!(Br&0x110
))Br&=~0x28;if((((Br&0x2)===0x2)&&!!(Br&0x5))&&((BW[2]-BW[0])>(C8[2]-C8[0])))Br&=
~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if((BW[2]-BW[0])!==(C8[2]-C8[0])){if(((Br&0x4)===
0x4))BW=A.aaP(BW,C8[2]-(BW[2]-BW[0]));else if(((Br&0x2)===0x2))BW=A.aaP(BW,(C8[0
]+(((C8[2]-C8[0])/2)|0))-(((BW[2]-BW[0])/2)|0));}if((BW[3]-BW[1])!==(C8[3]-C8[1]
)){if(((Br&0x20)===0x20))BW=A.aaR(BW,C8[3]-(BW[3]-BW[1]));else if(((Br&0x100)===
0x100))BW=A.aaR(BW,((C8[1]+(((C8[3]-C8[1])/2)|0))-(((BW[3]-BW[1])/2)|0))+(((this.
B4.Descent-this.B4.Ascent)/2)|0));else if(((Br&0x10)===0x10))BW=A.aaR(BW,(C8[1]+(((
C8[3]-C8[1])/2)|0))-(((BW[3]-BW[1])/2)|0));}BW=A.aam(BW,A7.slice(0,2));return A.
aam(BW,this.Bn);},_Init:function(aArg){A.Core.ED._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.K1();this.__proto__=A.Core.ED;A.Core.ED._Done.call(
this);},_Mark:function(D){var B;A.Core.ED._Mark.call(this,D);if((B=this.B4)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Views::Text"};C.Atd={attrString:null,AttrSet:null,String:A.jm,J6:
0x12,J9:function(CV,aClip,aOffset,Cd,aBlend){var B;if(!this.attrString||!this.AttrSet
)return;var AD=this.C9();Cd=Cd+1;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;CV.Bd$(
aClip,this.AttrSet,this.attrString,A.aam(this.M,aOffset),A.aaj(this.M.slice(0,2)
,AD.slice(0,2)),(Cd*255)>>8,(Cd*255)>>8,(Cd*255)>>8,(Cd*255)>>8,true);},G:function(
E){var B;if(A.z9(E,this.M))return;if(((((B=this.M)[2]-B[0])!==(E[2]-E[0]))&&!!this.
attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=null;A.ow([this,this.OY
],this);}A.Core.ED.G.call(this,E);A.ow([this,this.AhR],this);},AhR:function(H){}
,WQ:function(H){var B;var AJh;AJh=(B=this.M)[2]-B[0];if(AJh<0)AJh=1;if((this.String===
A.jm)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(this.String!==A.
jm))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A1X,0);if(!!this.attrString
)this.attrString.Bj2(this.AttrSet,this.String,AJh,false);if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.AhR],this);},OY:function(H){A.ow([
this,this.WQ],this);},BbT:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);},A1:function(E){var B;E&=~0x140;if(E===this.J6)return;this.J6=E;if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.AhR],this);},
R:function(E){if(this.String===E)return;this.String=E;this.attrString=null;A.ow([
this,this.OY],this);},A52:function(E){if(this.AttrSet===E)return;if(!!this.AttrSet
){A.zl([this,this.BbT],this.AttrSet,0);A.zl([this,this.OY],this.AttrSet,1);}this.
AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.y_([this,this.BbT],this.AttrSet
,0);A.y_([this,this.OY],this.AttrSet,1);}A.ow([this,this.OY],this);},C9:function(
){var B;if((this.String===A.jm)||!this.AttrSet)return EV;if(!this.attrString)this.
WQ(this);if(!this.attrString)return EV;var Br=this.J6;var CY=this.attrString.Be7(
);var C8=A.z4(this.M,BG);var BW=[].concat(C8.slice(0,2),A.aak(C8.slice(0,2),CY));
if(!CY[0]||!CY[1])return EV;if(((Br&0x80)===0x80)){if(this.attrString.Ai3())Br=(
Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((BW[2]-BW[0])!==(C8[2]-C8[0])){if(((Br&
0x4)===0x4))BW=A.aaP(BW,C8[2]-(BW[2]-BW[0]));else if(((Br&0x2)===0x2))BW=A.aaP(BW
,(C8[0]+(((C8[2]-C8[0])/2)|0))-(((BW[2]-BW[0])/2)|0));}if((BW[3]-BW[1])!==(C8[3]-
C8[1])){if(((Br&0x20)===0x20))BW=A.aaR(BW,C8[3]-(BW[3]-BW[1]));else if(((Br&0x10
)===0x10))BW=A.aaR(BW,(C8[1]+(((C8[3]-C8[1])/2)|0))-(((BW[3]-BW[1])/2)|0));}return BW;
},_Init:function(aArg){A.Core.ED._Init.call(this,aArg);this.__proto__=C.Atd;this.
U=0x3;},_Mark:function(D){var B;A.Core.ED._Mark.call(this,D);if((B=this.attrString
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::AttrText"};C.Ag0={Fs:null,Ahs:0,Ahr:0,Ui:A.vw,Ce:
A.aan(4,3,0,null),AEB:A.vw,SL:0,Aog:0,Kz:function(E){if(A.z8(E,this.Kg))return;A.
Core.YE.Kz.call(this,E);this.Ce.Set(3,0,E[0]);this.Ce.Set(3,1,E[1]);this.Ce.Set(
3,2,1);this.SL=0x45;this.Fs=null;A.ow([this,this.ArM],this);},Ky:function(E){if(
A.z8(E,this.Mv))return;A.Core.YE.Ky.call(this,E);this.Ce.Set(2,0,E[0]);this.Ce.Set(
2,1,E[1]);this.Ce.Set(2,2,1);this.SL=0x45;this.Fs=null;A.ow([this,this.ArM],this
);},DN:function(E){if(A.z8(E,this.Ev))return;A.Core.YE.DN.call(this,E);this.Ce.Set(
1,0,E[0]);this.Ce.Set(1,1,E[1]);this.Ce.Set(1,2,1);this.SL=0x45;this.Fs=null;A.ow([
this,this.ArM],this);},D6:function(E){if(A.z8(E,this.Em))return;A.Core.YE.D6.call(
this,E);this.Ce.Set(0,0,E[0]);this.Ce.Set(0,1,E[1]);this.Ce.Set(0,2,1);this.SL=0x45;
this.Fs=null;A.ow([this,this.ArM],this);},AYo:function(){return;},AsW:function(H
){var B;if(this.SL===0x00)return;if(this.SL===0x45){var KP=A._NewObject(A.Graphics.
Av7,0);KP=KP.Bd0(this.Ce.Get(0,0),this.Ce.Get(0,1),this.Ce.Get(1,0),this.Ce.Get(
1,1),this.Ce.Get(2,0),this.Ce.Get(2,1),this.Ce.Get(3,0),this.Ce.Get(3,1));if(!!KP
){KP.Az5(0,0);this.Ce.Set(0,2,KP.T7*240);KP.Az5(1,0);this.Ce.Set(1,2,KP.T7*240);
KP.Az5(1,1);this.Ce.Set(2,2,KP.T7*240);KP.Az5(0,1);this.Ce.Set(3,2,KP.T7*240);}this.
AYo();}if((((this.SL===0x4D)&&!!this.Fs)&&!!this.Ui[0])&&!!this.Ui[1]){var Ah5=[
].concat(BG,this.Ui);var Ah4=this.AEB;var Ae9=Ah5[0]-Ah4[0];var AM=Ah5[2]-Ah4[0];
var D2=Ah5[1]-Ah4[1];var Q4=Ah5[3]-Ah4[1];this.Fs.AjI(Ae9,D2);this.Ce.Set(0,0,this.
Fs.T5+this.Ahr);this.Ce.Set(0,1,this.Fs.T6+this.Ahs);this.Ce.Set(0,2,this.Fs.T7);
this.Fs.AjI(AM,D2);this.Ce.Set(1,0,this.Fs.T5+this.Ahr);this.Ce.Set(1,1,this.Fs.
T6+this.Ahs);this.Ce.Set(1,2,this.Fs.T7);this.Fs.AjI(AM,Q4);this.Ce.Set(2,0,this.
Fs.T5+this.Ahr);this.Ce.Set(2,1,this.Fs.T6+this.Ahs);this.Ce.Set(2,2,this.Fs.T7);
this.Fs.AjI(Ae9,Q4);this.Ce.Set(3,0,this.Fs.T5+this.Ahr);this.Ce.Set(3,1,this.Fs.
T6+this.Ahs);this.Ce.Set(3,2,this.Fs.T7);if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Em=[(this.Ce.Get(0,0)+0.5)|0,(this.Ce.Get(0,1)+0.5)|
0];this.Ev=[(this.Ce.Get(1,0)+0.5)|0,(this.Ce.Get(1,1)+0.5)|0];this.Mv=[(this.Ce.
Get(2,0)+0.5)|0,(this.Ce.Get(2,1)+0.5)|0];this.Kg=[(this.Ce.Get(3,0)+0.5)|0,(this.
Ce.Get(3,1)+0.5)|0];this.AYo();}this.Aog=this.SL;this.SL=0x00;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},ArM:function(s){this.AsW(s);},BjC:function(
E){if(A.z8(E,this.AEB))return;this.AEB=E;if((this.Aog!==0x45)&&(this.SL===0x00)){
this.SL=this.Aog;A.ow([this,this.ArM],this);}},AE4:function(AGS,KH){var B;if(!KH
)throw new Error(Js);if(!this.Fs)this.Fs=A._NewObject(A.Graphics.Av7,0);this.Fs.
Bdc(KH);this.Ahr=AGS[0];this.Ahs=AGS[1];this.Aog=0x4D;this.SL=0x00;if(!this.Ui[0
]||!this.Ui[1])return;var Ah5=[].concat(BG,this.Ui);var Ah4=this.AEB;var Ae9=Ah5[
0]-Ah4[0];var AM=Ah5[2]-Ah4[0];var D2=Ah5[1]-Ah4[1];var Q4=Ah5[3]-Ah4[1];this.Fs.
AjI(Ae9,D2);this.Ce.Set(0,0,this.Fs.T5+this.Ahr);this.Ce.Set(0,1,this.Fs.T6+this.
Ahs);this.Ce.Set(0,2,this.Fs.T7);this.Fs.AjI(AM,D2);this.Ce.Set(1,0,this.Fs.T5+this.
Ahr);this.Ce.Set(1,1,this.Fs.T6+this.Ahs);this.Ce.Set(1,2,this.Fs.T7);this.Fs.AjI(
AM,Q4);this.Ce.Set(2,0,this.Fs.T5+this.Ahr);this.Ce.Set(2,1,this.Fs.T6+this.Ahs);
this.Ce.Set(2,2,this.Fs.T7);this.Fs.AjI(Ae9,Q4);this.Ce.Set(3,0,this.Fs.T5+this.
Ahr);this.Ce.Set(3,1,this.Fs.T6+this.Ahs);this.Ce.Set(3,2,this.Fs.T7);if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Em=[(this.Ce.Get(0,0)+
0.5)|0,(this.Ce.Get(0,1)+0.5)|0];this.Ev=[(this.Ce.Get(1,0)+0.5)|0,(this.Ce.Get(
1,1)+0.5)|0];this.Mv=[(this.Ce.Get(2,0)+0.5)|0,(this.Ce.Get(2,1)+0.5)|0];this.Kg=[(
this.Ce.Get(3,0)+0.5)|0,(this.Ce.Get(3,1)+0.5)|0];if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.GetExtent());this.AYo();},_Init:function(aArg){A.Core.YE._Init.
call(this,aArg);(this.Ce=[]).__proto__=C.Ag0.Ce;this.__proto__=C.Ag0;this.U=0x3;
},_Mark:function(D){var B;A.Core.YE._Mark.call(this,D);if((B=this.Fs)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.ASR={Fc:null,bitmap:null
,O:null,A$F:1,A$G:0,A$H:0,A$I:0,A$J:1,A$K:0,A$L:0,A$M:0,A$N:1,GM:255,AIf:false,J9:
function(CV,aClip,aOffset,Cd,aBlend){var B;if(!this.bitmap)return;this.bitmap.Update(
);var Nn=aOffset[0];var Np=aOffset[1];var AD=[].concat(BG,this.Ui);aBlend=aBlend&&((
this.U&0x2)===0x2);Cd=Cd+1;var Bas;var Bat;var Bau;var Bav;var BvH=this.GM;Bas=Bat=
Bau=Bav=BvH;var Akr=255|(255<<8)|(255<<16)|((((Cd*Bas)>>8)&0xFF)<<24);var Aks=255|(
255<<8)|(255<<16)|((((Cd*Bat)>>8)&0xFF)<<24);var Bt$=255|(255<<8)|(255<<16)|((((
Cd*Bau)>>8)&0xFF)<<24);var Bua=255|(255<<8)|(255<<16)|((((Cd*Bav)>>8)&0xFF)<<24);
aClip=A.z6(aClip,A.aam(EV,aOffset));CV.AgZ(aClip,this.bitmap,0,this.Ce.Get(0,0)+
Nn,this.Ce.Get(0,1)+Np,this.Ce.Get(0,2),this.Ce.Get(1,0)+Nn,this.Ce.Get(1,1)+Np,
this.Ce.Get(1,2),this.Ce.Get(2,0)+Nn,this.Ce.Get(2,1)+Np,this.Ce.Get(2,2),this.Ce.
Get(3,0)+Nn,this.Ce.Get(3,1)+Np,this.Ce.Get(3,2),AD,Akr,Aks,Bt$,Bua,aBlend,true);
},GH:function(CK){if(!this.O||!this.Fc)return null;var BN=(A.Core.Ac8.isPrototypeOf(
CK)?CK:null);var DW=(A.Core.Ao_.isPrototypeOf(CK)?CK:null);if(!BN&&!DW)return null;
var Ff=BG;var B7=this.Fc.Ac;while(!!B7&&(B7!==this.O)){Ff=A.aaj(Ff,B7.M.slice(0,
2));B7=B7.Ac;}var W=this.Fc;if(!!BN&&!BN.Down)this.Fc=null;if(!!BN){BN.HS=A.aak(
this.Ask(BN.HS),Ff);BN.NH=A.aak(this.Ask(BN.NH),Ff);return W.GH(BN);}if(!!DW){var
BvL=A.aak(this.Ask(A.aaj(DW.HS,DW.Dy)),Ff);DW.HS=A.aak(this.Ask(DW.HS),Ff);DW.NH=
A.aak(this.Ask(DW.NH),Ff);DW.Dy=A.aaj(DW.HS,BvL);return W.GH(DW);}return C.Ag0.GH.
call(this,CK);},Xm:function(Db,BF,N4,AbR,AbW,AbV){var B;if(!this.O||!((this.O.U&
0x18)===0x18))return null;var pos=A.zT(Db);pos=this.Ask(pos);var AoH=[].concat(BG
,this.Ui);if(!A.vt(AoH,pos))return null;var Jy=this.O.Xm(A.aam(A.aam([0,0,Db[2]-
Db[0],Db[3]-Db[1]],pos),this.O.M.slice(0,2)),BF,N4,AbR,null,AbV);if(!!Jy)this.Fc=
Jy.Cc;else this.Fc=null;if(!!this.Fc)return A._NewObject(A.Core.Atj,0).Initialize(
this,BG);return null;},AsW:function(H){C.Ag0.AsW.call(this,H);this.AIf=false;},AE4:
function(AGS,KH){C.Ag0.AE4.call(this,AGS,KH);this.AIf=false;},BxW:function(){var
x1=this.Ce.Get(0,0);var y1=this.Ce.Get(0,1);var x2=this.Ce.Get(1,0);var y2=this.
Ce.Get(1,1);var x3=this.Ce.Get(2,0);var y3=this.Ce.Get(2,1);var x4=this.Ce.Get(3
,0);var y4=this.Ce.Get(3,1);var AxJ=x2-x3;var AxL=y2-y3;var AxK=x4-x3;var AxM=y4-
y3;var Aze=((x1-x2)+x3)-x4;var Azf=((y1-y2)+y3)-y4;var AnI=(AxJ*AxM)-(AxL*AxK);if(
!AnI)return;var Asc=((Aze*AxM)-(Azf*AxK))/AnI;var BK=((AxJ*Azf)-(AxL*Aze))/AnI;var
a=(x2-x1)+(Asc*x2);var Q4=(x4-x1)+(BK*x4);var BJ=x1;var d=(y2-y1)+(Asc*y2);var AHO=(
y4-y1)+(BK*y4);var Lr=y1;this.A$F=AHO-(Lr*BK);this.A$G=(BJ*BK)-Q4;this.A$H=(Q4*Lr
)-(BJ*AHO);this.A$I=(Lr*Asc)-d;this.A$J=a-(BJ*Asc);this.A$K=(BJ*d)-(a*Lr);this.A$L=(
d*BK)-(AHO*Asc);this.A$M=(Q4*Asc)-(a*BK);this.A$N=(a*AHO)-(Q4*d);this.AIf=true;}
,Ask:function(Fo){var B;if(!this.AIf)this.BxW();var A1l=Fo[0];var A1n=Fo[1];var Azy=((
A1l*this.A$F)+(A1n*this.A$G))+this.A$H;var AzB=((A1l*this.A$I)+(A1n*this.A$J))+this.
A$K;var A0A=((A1l*this.A$L)+(A1n*this.A$M))+this.A$N;if(!!A0A){Azy=Azy/A0A;AzB=AzB
/A0A;}var AoH=[].concat(BG,this.Ui);Azy=Azy*(AoH[2]-AoH[0]);AzB=AzB*(AoH[3]-AoH[
1]);return A.aak([Azy|0,AzB|0],AoH.slice(0,2));},Rd:function(H){var B;var Baw=this.
Ui;if(!!this.O)this.bitmap=this.O.HM;else this.bitmap=null;if(!!this.bitmap)this.
Ui=this.bitmap.FrameSize;else this.Ui=BG;if(((A.z8(Baw,this.Ui)||((this.Aog===0x45
)&&(this.SL===0x00)))&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if(((this.Aog!==0x45)&&(this.SL===0x00))&&!A.z8(Baw,this.Ui)){this.SL=this.Aog;
A.ow([this,this.ArM],this);}},DL:function(E){var B;if(E===this.GM)return;this.GM=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},BiN:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ac))throw new Error(IL);if(!!this.O){A.
zl([this,this.Rd],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.y_([this,this.Rd
],E,0);this.bitmap=E.HM;}this.Rd(this);},AuD:function(){return this.GM;},_Init:function(
aArg){C.Ag0._Init.call(this,aArg);this.__proto__=C.ASR;},_Mark:function(D){var B;
C.Ag0._Mark.call(this,D);if((B=this.Fc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Adf={Hj:null,AP:0xFFFFFFFF,Dy:A.vw
,AL_:false,K1:function(){this.AYG();},J9:function(CV,aClip,aOffset,Cd,aBlend){if(
!this.Hj)return;var Du;var DH;var DC;var DG;var BJ=this.AP;Cd=Cd+1;Du=DH=DC=DG=BJ;
if(Cd<256){Du=(Du&0x00FFFFFF)|((((Cd*((Du>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF
)|((((Cd*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cd*((DC>>24)&0xFF
))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cd*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CV.
Adf(aClip,this.Hj,A.aam(this.M,aOffset),this.AL_,this.Dy,Du,DH,DG,DC,true,true,0
);},AYG:function(){return;},Ah_:function(H){var B;if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if((
!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hj)this.Ac.Bg(this.M);},AmA:function(E){
var B;if(A.z8(E,this.Dy))return;this.Dy=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hj)this.Ac.Bg(this.M);},BiI:function(E){var B;if(E===this.AL_)return;this.
AL_=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hj)this.Ac.Bg(this.M);},Yv:function(
E){var B;if(E===this.Hj)return;if(!!this.Hj)A.zl([this,this.Ah_],this.Hj,0);this.
Hj=E;if(!!this.Hj)A.y_([this,this.Ah_],this.Hj,0);if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C3(0x1,0x0);else this.C3(0x0,0x1
);},_Init:function(aArg){A.Core.ED._Init.call(this,aArg);this.__proto__=C.Adf;},
_Done:function(){this.K1();this.__proto__=A.Core.ED;A.Core.ED._Done.call(this);}
,_Mark:function(D){var B;A.Core.ED._Mark.call(this,D);if((B=this.Hj)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Ha={Hj:null,AP:0xFFFFFFFF
,Dy:A.vw,Width:1,K1:function(){this.AYG();},J9:function(CV,aClip,aOffset,Cd,aBlend
){if(!this.Hj)return;var Du;var DH;var DC;var DG;var BJ=this.AP;Cd=Cd+1;Du=DH=DC=
DG=BJ;if(Cd<256){Du=(Du&0x00FFFFFF)|((((Cd*((Du>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&
0x00FFFFFF)|((((Cd*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cd*((DC>>
24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cd*((DG>>24)&0xFF))>>8)&0xFF)<<
24);}CV.Ha(aClip,this.Hj,A.aam(this.M,aOffset),false,this.Dy,this.Width,0,0,0,3,
Du,DH,DG,DC,true,true);},AYG:function(){return;},Ah_:function(H){var B;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hj)this.Ac.Bg(this.
M);},AmA:function(E){var B;if(A.z8(E,this.Dy))return;this.Dy=E;if((!!this.Ac&&((
this.U&0x1)===0x1))&&!!this.Hj)this.Ac.Bg(this.M);},NQ:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hj)this.Ac.Bg(this.M);},Yv:function(E){var B;if(E===this.Hj)return;if(!!this.
Hj)A.zl([this,this.Ah_],this.Hj,0);this.Hj=E;if(!!this.Hj)A.y_([this,this.Ah_],this.
Hj,0);if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E
)this.C3(0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg){A.Core.ED._Init.call(
this,aArg);this.__proto__=C.Ha;},_Done:function(){this.K1();this.__proto__=A.Core.
ED;A.Core.ED._Done.call(this);},_Mark:function(D){var B;A.Core.ED._Mark.call(this
,D);if((B=this.Hj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BzC={A1F:0x1,A1E:0x2,A1G:0x4,A1J:0x8,A1I:0x10,A1H:0x20,BAP:0x40,BAQ:0x80,BA1:
0x100};C.BA5={A1F:0x1,A1E:0x2,A1G:0x4,A1J:0x8,A1I:0x10,A1H:0x20,Byc:0x40,Byb:0x80
,Byh:0x100};C.BAe={Normal:0,BAK:1,BAI:2,BAJ:3};
C._Init=function(){C.DS.__proto__=A.Core.Ajd;C.AH.__proto__=A.Core.ED;C.CB.__proto__=
A.Core.ED;C.NG.__proto__=A.Core.ED;C.Ak.__proto__=A.Core.ED;C.Text.__proto__=A.Core.
ED;C.Atd.__proto__=A.Core.ED;C.Ag0.__proto__=A.Core.YE;C.ASR.__proto__=C.Ag0;C.Adf.
__proto__=A.Core.ED;C.Ha.__proto__=A.Core.ED;};C._ReInit=function(){};C.DB=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */