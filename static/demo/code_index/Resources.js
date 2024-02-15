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
);if(index.aci)throw new Error("The unit file 'Resources.js' included twice!");index.
aci=(function(){var A=index;var C={};
var B9=[0,0];var BC="The property \'FrameSize\' is READ ONLY.";var EW=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,Ox:false,U9:false,K6:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=1;this.U9=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=B9;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Ox=true;this.
U9=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Aq6:function(E){throw new
Error(BC);},Update:function(){},_Init:function(aArg){A.Core.Ag4._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.K6();this.__proto__=
A.Core.Ag4;A.Core.Ag4._Done.call(this);},_className:"Resources::Bitmap"};C.Ts={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ABq={_class:function(){return C.B3;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B3={font:null,Leading:0,Descent:0,Ascent:0,K6:function(){this.Bwk(
);},Init:function(aArg){this.BwZ(aArg);},Bwk:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},BwZ:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},Bgx:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BgB:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A41:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},Blo:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},X2:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A4_:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return EW;var handle=this.font;var extent=EW;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ag4._Init.call(this,aArg);this.
__proto__=C.B3;this.Init(aArg);},_Done:function(){this.K6();this.__proto__=A.Core.
Ag4;A.Core.Ag4._Done.call(this);},_className:"Resources::Font"};C.ABK={_class:function(
){return C.B3;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.Ar$={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.AQn={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ASg={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BhA="Monday";C.Bnl="Tuesday";C.BnZ="Wednesday";C.Bm8="Thursday";C.Bgd="Friday";
C.BlV="Saturday";C.BmV="Sunday";C.Bex="AM";C.Blm="PM";C.ACN="January";C.ABE="February";
C.ACZ="March";C.AAF="April";C.AC2="May";C.ACP="June";C.ACO="July";C.AAN="August";
C.AFj="September";C.ADd="October";C.ADb="November";C.ABo="December";C.BhB="Mon";
C.Bnm="Tue";C.Bn0="Wed";C.Bm9="Thu";C.Bge="Fri";C.BlW="Sat";C.BmW="Sun";C.Bg9="Jan";
C.Bf3="Feb";C.Bhq="Mar";C.BeP="Apr";C.Bhu="May";C.Bha="Jun";C.Bg$="Jul";C.BeR="Aug";
C.Bl3="Sep";C.BhQ="Oct";C.BhP="Nov";C.Bfu="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ag4;C.B3.__proto__=A.Core.Ag4;};C._ReInit=
function(){};C.DB=function(D){var B;if((B=C.Ts[0]._this)&&(B._cycle!=D))B._Done(
C.Ts[0]._this=null);if((B=C.ABq[0]._this)&&(B._cycle!=D))B._Done(C.ABq[0]._this=
null);if((B=C.ABK[0]._this)&&(B._cycle!=D))B._Done(C.ABK[0]._this=null);if((B=C.
Ar$[0]._this)&&(B._cycle!=D))B._Done(C.Ar$[0]._this=null);if((B=C.AQn[0]._this)&&(
B._cycle!=D))B._Done(C.AQn[0]._this=null);if((B=C.ASg[0]._this)&&(B._cycle!=D))B.
_Done(C.ASg[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */