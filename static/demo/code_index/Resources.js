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
var Ca=[0,0];var BC="The property \'FrameSize\' is READ ONLY.";var EW=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,OH:false,Ve:false,K9:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Ca;this.FrameDelay=0;this.NoOfFrames=1;this.Ve=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Ca;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.OH=true;this.
Ve=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Ari:function(E){throw new
Error(BC);},Update:function(){},_Init:function(aArg){A.Core.Ahg._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.K9();this.__proto__=
A.Core.Ahg;A.Core.Ahg._Done.call(this);},_className:"Resources::Bitmap"};C.Tz={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ABN={_class:function(){return C.B5;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B5={font:null,Leading:0,Descent:0,Ascent:0,K9:function(){this.BxQ(
);},Init:function(aArg){this.Byv(aArg);},BxQ:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},Byv:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},BhQ:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BhU:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A50:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},BmI:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},X_:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A59:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return EW;var handle=this.font;var extent=EW;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ahg._Init.call(this,aArg);this.
__proto__=C.B5;this.Init(aArg);},_Done:function(){this.K9();this.__proto__=A.Core.
Ahg;A.Core.Ahg._Done.call(this);},_className:"Resources::Font"};C.AB7={_class:function(
){return C.B5;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.Asi={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ARa={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.AS8={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BiS="Monday";C.BoI="Tuesday";C.Bpo="Wednesday";C.Bot="Thursday";C.Bhv="Friday";
C.Bnf="Saturday";C.Bog="Sunday";C.BfN="AM";C.BmG="PM";C.ADf="January";C.AB1="February";
C.ADr="March";C.AA0="April";C.ADu="May";C.ADh="June";C.ADg="July";C.AA8="August";
C.AFS="September";C.ADH="October";C.ADF="November";C.ABL="December";C.BiT="Mon";
C.BoJ="Tue";C.Bpp="Wed";C.Bou="Thu";C.Bhw="Fri";C.Bng="Sat";C.Boh="Sun";C.Bir="Jan";
C.Bhj="Feb";C.BiK="Mar";C.Bf7="Apr";C.BiO="May";C.Biu="Jun";C.Bit="Jul";C.Bf9="Aug";
C.Bnn="Sep";C.Bi8="Oct";C.Bi7="Nov";C.BgN="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ahg;C.B5.__proto__=A.Core.Ahg;};C._ReInit=
function(){};C.DB=function(D){var B;if((B=C.Tz[0]._this)&&(B._cycle!=D))B._Done(
C.Tz[0]._this=null);if((B=C.ABN[0]._this)&&(B._cycle!=D))B._Done(C.ABN[0]._this=
null);if((B=C.AB7[0]._this)&&(B._cycle!=D))B._Done(C.AB7[0]._this=null);if((B=C.
Asi[0]._this)&&(B._cycle!=D))B._Done(C.Asi[0]._this=null);if((B=C.ARa[0]._this)&&(
B._cycle!=D))B._Done(C.ARa[0]._this=null);if((B=C.AS8[0]._this)&&(B._cycle!=D))B.
_Done(C.AS8[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */