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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.aci)throw new Error("The unit file 'Resources.js' included twice!");index.
aci=(function(){var A=index;var C={};
var Ce=[0,0];var BD="The property \'FrameSize\' is READ ONLY.";var E7=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,N1:false,VD:false,Lc:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=1;this.VD=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Ce;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.N1=true;this.
VD=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},ArQ:function(E){throw new
Error(BD);},Update:function(){},_Init:function(aArg){A.Core.AhD._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.Lc();this.__proto__=
A.Core.AhD;A.Core.AhD._Done.call(this);},_className:"Resources::Bitmap"};C.TP={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ACC={_class:function(){return C.B6;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B6={font:null,Leading:0,Descent:0,Ascent:0,Lc:function(){this.BzL(
);},Init:function(aArg){this.BAr(aArg);},BzL:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},BAr:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},Bjs:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},Bjw:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A6V:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},Bon:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},Yt:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A66:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return E7;var handle=this.font;var extent=E7;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.AhD._Init.call(this,aArg);this.
__proto__=C.B6;this.Init(aArg);},_Done:function(){this.Lc();this.__proto__=A.Core.
AhD;A.Core.AhD._Done.call(this);},_className:"Resources::Font"};C.ACV={_class:function(
){return C.B6;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.AsW={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.AR7={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.AT4={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.Bkt="Monday";C.Bqq="Tuesday";C.Bq8="Wednesday";C.Bqb="Thursday";C.Bi9="Friday";
C.BoZ="Saturday";C.Bp0="Sunday";C.Bhg="AM";C.Bol="PM";C.AD6="January";C.ACP="February";
C.AEg="March";C.ABR="April";C.AEi="May";C.AD8="June";C.AD7="July";C.ABY="August";
C.AGF="September";C.AEv="October";C.AEt="November";C.ACA="December";C.Bku="Mon";
C.Bqr="Tue";C.Bq9="Wed";C.Bqc="Thu";C.Bi_="Fri";C.Bo0="Sat";C.Bp1="Sun";C.Bj5="Jan";
C.BiX="Feb";C.Bkl="Mar";C.Bhw="Apr";C.Bkp="May";C.Bj8="Jun";C.Bj7="Jul";C.Bhy="Aug";
C.Bo9="Sep";C.BkJ="Oct";C.BkI="Nov";C.Bif="Dec";
C._Init=function(){C.Al.__proto__=A.Core.AhD;C.B6.__proto__=A.Core.AhD;};C._ReInit=
function(){};C.DH=function(D){var B;if((B=C.TP[0]._this)&&(B._cycle!=D))B._Done(
C.TP[0]._this=null);if((B=C.ACC[0]._this)&&(B._cycle!=D))B._Done(C.ACC[0]._this=
null);if((B=C.ACV[0]._this)&&(B._cycle!=D))B._Done(C.ACV[0]._this=null);if((B=C.
AsW[0]._this)&&(B._cycle!=D))B._Done(C.AsW[0]._this=null);if((B=C.AR7[0]._this)&&(
B._cycle!=D))B._Done(C.AR7[0]._this=null);if((B=C.AT4[0]._this)&&(B._cycle!=D))B.
_Done(C.AT4[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */