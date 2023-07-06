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
var B3=[0,0];var BI="The property \'FrameSize\' is READ ONLY.";var EG=[0,0,0,0];
C.Ah={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.vw,NY:false,TU:false,Kx:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.bitmap=null;this.
FrameSize=B3;this.FrameDelay=0;this.NoOfFrames=1;this.TU=false;},Init:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=B3;var frameDelay=
0;{var bmp=A.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.NY=true;this.TU=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},AoY:function(E){throw new Error(
BI);},Update:function(){},_Init:function(aArg){A.Core.AfA._Init.call(this,aArg);
this.__proto__=C.Ah;this.Init(aArg);},_Done:function(){this.Kx();this.__proto__=
A.Core.AfA;A.Core.AfA._Done.call(this);},_className:"Resources::Bitmap"};C.J4={_class:
function(){return C.Ah;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A.cC,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};C.AyT={_class:function(
){return C.Co;},0:{Data:function(){return A.abO;},Cache:[],_this:null}};C.Co={font:
null,Leading:0,Descent:0,Ascent:0,Kx:function(){this.BrI();},Init:function(aArg){
this.Bsi(aArg);},BrI:function(){if(!this.font)return;var handle=this.font;A.zy(handle
);this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},Bsi:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=A.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},BbT:function(aString,aOffset,aCount,aColumn,aMinWidth
){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.
length))aOffset=aString.length;var handle=this.font;var pos=0;pos=A.zQ(handle,aString
,aOffset,aCount,aColumn,aMinWidth);return pos;},BbX:function(aString,aOffset,aCount
,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>
aString.length))aOffset=aString.length;var handle=this.font;var col=0;col=A.z0(handle
,aString,aOffset,aCount,aX,aMinWidth);return col;},A0O:function(aFlowString){if(
!this.font)return 0;var handle=this.font;var advance=0;advance=A.zG(handle,aFlowString
);return advance;},BgW:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return A.jm;
var handle=this.font;var result=A.jm;result=A.aaz(handle,aString,aOffset,aWidth,
aMaxNoOfRows,aBidi);return result;},WG:function(aString,aOffset,aCount){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var
handle=this.font;var advance=0;advance=A.ms(handle,aString,aOffset,aCount);return advance;
},A0X:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return EG;var handle=this.font;var extent=EG;extent=
A.z1(handle,aString,aOffset,aCount);return extent;},_Init:function(aArg){A.Core.
AfA._Init.call(this,aArg);this.__proto__=C.Co;this.Init(aArg);},_Done:function(){
this.Kx();this.__proto__=A.Core.AfA;A.Core.AfA._Done.call(this);},_className:"Resources::Font"
};C.ApX={_class:function(){return C.Ah;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};C.ANj={_class:
function(){return C.Ah;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:null}};C.AO1={_class:
function(){return C.Ah;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:null}};C.BcY="Monday";
C.BiM="Tuesday";C.Bjn="Wednesday";C.Biz="Thursday";C.Bby="Friday";C.Bht="Saturday";
C.Bim="Sunday";C.A$M="AM";C.BgU="PM";C.AAb="January";C.Ay8="February";C.AAm="March";
C.Ayc="April";C.AAo="May";C.AAd="June";C.AAc="July";C.Ayj="August";C.ACx="September";
C.AAA="October";C.AAy="November";C.AyR="December";C.BcZ="Mon";C.BiN="Tue";C.Bjo=
"Wed";C.BiA="Thu";C.Bbz="Fri";C.Bhu="Sat";C.Bin="Sun";C.Bcr="Jan";C.Bbm="Feb";C.
BcO="Mar";C.A$3="Apr";C.BcS="May";C.Bcu="Jun";C.Bct="Jul";C.A$5="Aug";C.BhA="Sep";
C.Bdl="Oct";C.Bdk="Nov";C.BaP="Dec";
C._Init=function(){C.Ah.__proto__=A.Core.AfA;C.Co.__proto__=A.Core.AfA;};C._ReInit=
function(){};C.Dn=function(D){var B;if((B=C.J4[0]._this)&&(B._cycle!=D))B._Done(
C.J4[0]._this=null);if((B=C.AyT[0]._this)&&(B._cycle!=D))B._Done(C.AyT[0]._this=
null);if((B=C.ApX[0]._this)&&(B._cycle!=D))B._Done(C.ApX[0]._this=null);if((B=C.
ANj[0]._this)&&(B._cycle!=D))B._Done(C.ANj[0]._this=null);if((B=C.AO1[0]._this)&&(
B._cycle!=D))B._Done(C.AO1[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */