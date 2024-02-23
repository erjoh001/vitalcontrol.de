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
var Ca=[0,0];var BD="The property \'FrameSize\' is READ ONLY.";var EW=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,OE:false,Vf:false,K8:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Ca;this.FrameDelay=0;this.NoOfFrames=1;this.Vf=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Ca;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.OE=true;this.
Vf=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Ard:function(E){throw new
Error(BD);},Update:function(){},_Init:function(aArg){A.Core.Ahd._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.K8();this.__proto__=
A.Core.Ahd;A.Core.Ahd._Done.call(this);},_className:"Resources::Bitmap"};C.TB={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ABP={_class:function(){return C.B4;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B4={font:null,Leading:0,Descent:0,Ascent:0,K8:function(){this.Bxp(
);},Init:function(aArg){this.Bx4(aArg);},Bxp:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},Bx4:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},Bhm:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},Bhq:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A5J:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},Bmf:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},X$:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A5S:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return EW;var handle=this.font;var extent=EW;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ahd._Init.call(this,aArg);this.
__proto__=C.B4;this.Init(aArg);},_Done:function(){this.K8();this.__proto__=A.Core.
Ahd;A.Core.Ahd._Done.call(this);},_className:"Resources::Font"};C.AB9={_class:function(
){return C.B4;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.Asg={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.AQ4={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ASW={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.Bio="Monday";C.Bof="Tuesday";C.BoX="Wednesday";C.Bn2="Thursday";C.Bg3="Friday";
C.BmO="Saturday";C.BnP="Sunday";C.Bfl="AM";C.Bmd="PM";C.ADc="January";C.AB3="February";
C.ADo="March";C.AA3="April";C.ADr="May";C.ADe="June";C.ADd="July";C.AA$="August";
C.AFL="September";C.ADE="October";C.ADC="November";C.ABN="December";C.Bip="Mon";
C.Bog="Tue";C.BoY="Wed";C.Bn3="Thu";C.Bg4="Fri";C.BmP="Sat";C.BnQ="Sun";C.BhZ="Jan";
C.BgR="Feb";C.Big="Mar";C.BfE="Apr";C.Bik="May";C.Bh2="Jun";C.Bh1="Jul";C.BfG="Aug";
C.BmW="Sep";C.BiE="Oct";C.BiD="Nov";C.Bgj="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ahd;C.B4.__proto__=A.Core.Ahd;};C._ReInit=
function(){};C.Dz=function(D){var B;if((B=C.TB[0]._this)&&(B._cycle!=D))B._Done(
C.TB[0]._this=null);if((B=C.ABP[0]._this)&&(B._cycle!=D))B._Done(C.ABP[0]._this=
null);if((B=C.AB9[0]._this)&&(B._cycle!=D))B._Done(C.AB9[0]._this=null);if((B=C.
Asg[0]._this)&&(B._cycle!=D))B._Done(C.Asg[0]._this=null);if((B=C.AQ4[0]._this)&&(
B._cycle!=D))B._Done(C.AQ4[0]._this=null);if((B=C.ASW[0]._this)&&(B._cycle!=D))B.
_Done(C.ASW[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */