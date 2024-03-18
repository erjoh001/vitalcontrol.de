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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.aci)throw new Error("The unit file 'Resources.js' included twice!");index.
aci=(function(){var A=index;var C={};
var Cd=[0,0];var BF="The property \'FrameSize\' is READ ONLY.";var E4=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,OK:false,Vx:false,La:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Cd;this.FrameDelay=0;this.NoOfFrames=1;this.Vx=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Cd;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.OK=true;this.
Vx=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},ArQ:function(E){throw new
Error(BF);},Update:function(){},_Init:function(aArg){A.Core.Ahu._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.La();this.__proto__=
A.Core.Ahu;A.Core.Ahu._Done.call(this);},_className:"Resources::Bitmap"};C.TJ={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ACr={_class:function(){return C.B7;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B7={font:null,Leading:0,Descent:0,Ascent:0,La:function(){this.ByV(
);},Init:function(aArg){this.BzA(aArg);},ByV:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},BzA:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},BiF:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BiJ:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A6t:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},Bnw:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},Ys:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A6D:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return E4;var handle=this.font;var extent=E4;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ahu._Init.call(this,aArg);this.
__proto__=C.B7;this.Init(aArg);},_Done:function(){this.La();this.__proto__=A.Core.
Ahu;A.Core.Ahu._Done.call(this);},_className:"Resources::Font"};C.ACK={_class:function(
){return C.B7;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.AsT={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ARQ={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ATN={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BjG="Monday";C.Bpw="Tuesday";C.Bqc="Wednesday";C.Bph="Thursday";C.Bik="Friday";
C.Bn6="Saturday";C.Bo6="Sunday";C.BgA="AM";C.Bnu="PM";C.ADV="January";C.ACE="February";
C.AD7="March";C.ABF="April";C.AD_="May";C.ADX="June";C.ADW="July";C.ABM="August";
C.AGv="September";C.AEk="October";C.AEi="November";C.ACp="December";C.BjH="Mon";
C.Bpx="Tue";C.Bqd="Wed";C.Bpi="Thu";C.Bil="Fri";C.Bn7="Sat";C.Bo7="Sun";C.Bjg="Jan";
C.Bh_="Feb";C.Bjy="Mar";C.BgR="Apr";C.BjC="May";C.Bjj="Jun";C.Bji="Jul";C.BgT="Aug";
C.Boc="Sep";C.BjW="Oct";C.BjV="Nov";C.Bhy="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ahu;C.B7.__proto__=A.Core.Ahu;};C._ReInit=
function(){};C.DH=function(D){var B;if((B=C.TJ[0]._this)&&(B._cycle!=D))B._Done(
C.TJ[0]._this=null);if((B=C.ACr[0]._this)&&(B._cycle!=D))B._Done(C.ACr[0]._this=
null);if((B=C.ACK[0]._this)&&(B._cycle!=D))B._Done(C.ACK[0]._this=null);if((B=C.
AsT[0]._this)&&(B._cycle!=D))B._Done(C.AsT[0]._this=null);if((B=C.ARQ[0]._this)&&(
B._cycle!=D))B._Done(C.ARQ[0]._this=null);if((B=C.ATN[0]._this)&&(B._cycle!=D))B.
_Done(C.ATN[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */