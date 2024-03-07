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
var Cc=[0,0];var BF="The property \'FrameSize\' is READ ONLY.";var EY=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,OK:false,Vl:false,K$:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;this.Vl=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Cc;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.OK=true;this.
Vl=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Arp:function(E){throw new
Error(BF);},Update:function(){},_Init:function(aArg){A.Core.Ahm._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.K$();this.__proto__=
A.Core.Ahm;A.Core.Ahm._Done.call(this);},_className:"Resources::Bitmap"};C.TE={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.AB2={_class:function(){return C.B7;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B7={font:null,Leading:0,Descent:0,Ascent:0,K$:function(){this.Byo(
);},Init:function(aArg){this.By5(aArg);},Byo:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},By5:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},Bie:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},Bii:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A6m:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},Bm_:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},Ye:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A6w:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return EY;var handle=this.font;var extent=EY;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ahm._Init.call(this,aArg);this.
__proto__=C.B7;this.Init(aArg);},_Done:function(){this.K$();this.__proto__=A.Core.
Ahm;A.Core.Ahm._Done.call(this);},_className:"Resources::Font"};C.ACk={_class:function(
){return C.B7;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.Asp={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ARm={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ATj={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.Bjg="Monday";C.Bo_="Tuesday";C.BpQ="Wednesday";C.BoV="Thursday";C.BhV="Friday";
C.BnH="Saturday";C.BoI="Sunday";C.Bgb="AM";C.Bm8="PM";C.ADu="January";C.ACe="February";
C.ADG="March";C.ABc="April";C.ADJ="May";C.ADw="June";C.ADv="July";C.ABk="August";
C.AF6="September";C.ADW="October";C.ADU="November";C.AB0="December";C.Bjh="Mon";
C.Bo$="Tue";C.BpR="Wed";C.BoW="Thu";C.BhW="Fri";C.BnI="Sat";C.BoJ="Sun";C.BiR="Jan";
C.BhJ="Feb";C.Bi_="Mar";C.Bgv="Apr";C.Bjc="May";C.BiU="Jun";C.BiT="Jul";C.Bgx="Aug";
C.BnP="Sep";C.Bjw="Oct";C.Bjv="Nov";C.Bhb="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ahm;C.B7.__proto__=A.Core.Ahm;};C._ReInit=
function(){};C.DE=function(D){var B;if((B=C.TE[0]._this)&&(B._cycle!=D))B._Done(
C.TE[0]._this=null);if((B=C.AB2[0]._this)&&(B._cycle!=D))B._Done(C.AB2[0]._this=
null);if((B=C.ACk[0]._this)&&(B._cycle!=D))B._Done(C.ACk[0]._this=null);if((B=C.
Asp[0]._this)&&(B._cycle!=D))B._Done(C.Asp[0]._this=null);if((B=C.ARm[0]._this)&&(
B._cycle!=D))B._Done(C.ARm[0]._this=null);if((B=C.ATj[0]._this)&&(B._cycle!=D))B.
_Done(C.ATj[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */