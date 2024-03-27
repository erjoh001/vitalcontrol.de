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
var Cc=[0,0];var BD="The property \'FrameSize\' is READ ONLY.";var E6=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,OK:false,Vw:false,La:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;this.Vw=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Cc;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.OK=true;this.
Vw=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},ArI:function(E){throw new
Error(BD);},Update:function(){},_Init:function(aArg){A.Core.Ahx._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.La();this.__proto__=
A.Core.Ahx;A.Core.Ahx._Done.call(this);},_className:"Resources::Bitmap"};C.TI={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ACo={_class:function(){return C.B6;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B6={font:null,Leading:0,Descent:0,Ascent:0,La:function(){this.ByJ(
);},Init:function(aArg){this.Bzo(aArg);},ByJ:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},Bzo:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},Biw:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BiA:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A6k:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},Bnl:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},Ym:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A6v:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return E6;var handle=this.font;var extent=E6;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ahx._Init.call(this,aArg);this.
__proto__=C.B6;this.Init(aArg);},_Done:function(){this.La();this.__proto__=A.Core.
Ahx;A.Core.Ahx._Done.call(this);},_className:"Resources::Font"};C.ACH={_class:function(
){return C.B6;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.AsM={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ARH={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ATD={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.Bjw="Monday";C.Bpl="Tuesday";C.Bp3="Wednesday";C.Bo8="Thursday";C.Bib="Friday";
C.BnV="Saturday";C.BoV="Sunday";C.Bgr="AM";C.Bnj="PM";C.ADR="January";C.ACB="February";
C.AD3="March";C.ABD="April";C.AD5="May";C.ADT="June";C.ADS="July";C.ABK="August";
C.AGp="September";C.AEf="October";C.AEd="November";C.ACm="December";C.Bjx="Mon";
C.Bpm="Tue";C.Bp4="Wed";C.Bo9="Thu";C.Bic="Fri";C.BnW="Sat";C.BoW="Sun";C.Bi8="Jan";
C.Bh1="Feb";C.Bjo="Mar";C.BgI="Apr";C.Bjs="May";C.Bi$="Jun";C.Bi_="Jul";C.BgK="Aug";
C.Bn3="Sep";C.BjM="Oct";C.BjL="Nov";C.Bhp="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ahx;C.B6.__proto__=A.Core.Ahx;};C._ReInit=
function(){};C.DH=function(D){var B;if((B=C.TI[0]._this)&&(B._cycle!=D))B._Done(
C.TI[0]._this=null);if((B=C.ACo[0]._this)&&(B._cycle!=D))B._Done(C.ACo[0]._this=
null);if((B=C.ACH[0]._this)&&(B._cycle!=D))B._Done(C.ACH[0]._this=null);if((B=C.
AsM[0]._this)&&(B._cycle!=D))B._Done(C.AsM[0]._this=null);if((B=C.ARH[0]._this)&&(
B._cycle!=D))B._Done(C.ARH[0]._this=null);if((B=C.ATD[0]._this)&&(B._cycle!=D))B.
_Done(C.ATD[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */