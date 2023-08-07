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
);if(index.abj)throw new Error("The unit file 'Resources.js' included twice!");index.
abj=(function(){var A=index;var C={};
var B4=[0,0];var BI="The property \'FrameSize\' is READ ONLY.";var EH=[0,0,0,0];
C.Ai={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.vw,N0:false,T0:false,Kz:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.bitmap=null;this.
FrameSize=B4;this.FrameDelay=0;this.NoOfFrames=1;this.T0=false;},Init:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=B4;var frameDelay=
0;{var bmp=A.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.N0=true;this.T0=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Ao2:function(E){throw new Error(
BI);},Update:function(){},_Init:function(aArg){A.Core.AfG._Init.call(this,aArg);
this.__proto__=C.Ai;this.Init(aArg);},_Done:function(){this.Kz();this.__proto__=
A.Core.AfG;A.Core.AfG._Done.call(this);},_className:"Resources::Bitmap"};C.J6={_class:
function(){return C.Ai;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A.cC,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};C.AyY={_class:function(
){return C.Cp;},0:{Data:function(){return A.abO;},Cache:[],_this:null}};C.Cp={font:
null,Leading:0,Descent:0,Ascent:0,Kz:function(){this.Br5();},Init:function(aArg){
this.BsF(aArg);},Br5:function(){if(!this.font)return;var handle=this.font;A.zy(handle
);this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},BsF:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=A.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Bb9:function(aString,aOffset,aCount,aColumn,aMinWidth
){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.
length))aOffset=aString.length;var handle=this.font;var pos=0;pos=A.zQ(handle,aString
,aOffset,aCount,aColumn,aMinWidth);return pos;},Bcb:function(aString,aOffset,aCount
,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>
aString.length))aOffset=aString.length;var handle=this.font;var col=0;col=A.z0(handle
,aString,aOffset,aCount,aX,aMinWidth);return col;},A0X:function(aFlowString){if(
!this.font)return 0;var handle=this.font;var advance=0;advance=A.zG(handle,aFlowString
);return advance;},Bhb:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return A.jm;
var handle=this.font;var result=A.jm;result=A.aaz(handle,aString,aOffset,aWidth,
aMaxNoOfRows,aBidi);return result;},WM:function(aString,aOffset,aCount){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var
handle=this.font;var advance=0;advance=A.ms(handle,aString,aOffset,aCount);return advance;
},A06:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return EH;var handle=this.font;var extent=EH;extent=
A.z1(handle,aString,aOffset,aCount);return extent;},_Init:function(aArg){A.Core.
AfG._Init.call(this,aArg);this.__proto__=C.Cp;this.Init(aArg);},_Done:function(){
this.Kz();this.__proto__=A.Core.AfG;A.Core.AfG._Done.call(this);},_className:"Resources::Font"
};C.Ap0={_class:function(){return C.Ai;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};C.ANq={_class:
function(){return C.Ai;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:null}};C.AO9={_class:
function(){return C.Ai;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:null}};C.Bdc="Monday";
C.Bi3="Tuesday";C.BjE="Wednesday";C.BiQ="Thursday";C.BbO="Friday";C.BhK="Saturday";
C.BiD="Sunday";C.A$2="AM";C.Bg$="PM";C.AAi="January";C.Azb="February";C.AAt="March";
C.Ayh="April";C.AAv="May";C.AAk="June";C.AAj="July";C.Ayo="August";C.ACF="September";
C.AAH="October";C.AAF="November";C.AyW="December";C.Bdd="Mon";C.Bi4="Tue";C.BjF=
"Wed";C.BiR="Thu";C.BbP="Fri";C.BhL="Sat";C.BiE="Sun";C.BcH="Jan";C.BbC="Feb";C.
Bc4="Mar";C.Bah="Apr";C.Bc8="May";C.BcK="Jun";C.BcJ="Jul";C.Baj="Aug";C.BhR="Sep";
C.BdB="Oct";C.BdA="Nov";C.Ba5="Dec";
C._Init=function(){C.Ai.__proto__=A.Core.AfG;C.Cp.__proto__=A.Core.AfG;};C._ReInit=
function(){};C.Dq=function(D){var B;if((B=C.J6[0]._this)&&(B._cycle!=D))B._Done(
C.J6[0]._this=null);if((B=C.AyY[0]._this)&&(B._cycle!=D))B._Done(C.AyY[0]._this=
null);if((B=C.Ap0[0]._this)&&(B._cycle!=D))B._Done(C.Ap0[0]._this=null);if((B=C.
ANq[0]._this)&&(B._cycle!=D))B._Done(C.ANq[0]._this=null);if((B=C.AO9[0]._this)&&(
B._cycle!=D))B._Done(C.AO9[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */