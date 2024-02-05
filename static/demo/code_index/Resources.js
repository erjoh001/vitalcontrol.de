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
var B9=[0,0];var BC="The property \'FrameSize\' is READ ONLY.";var EU=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,Ou:false,U1:false,K2:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=1;this.U1=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=B9;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Ou=true;this.
U1=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},AqQ:function(E){throw new
Error(BC);},Update:function(){},_Init:function(aArg){A.Core.AgU._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.K2();this.__proto__=
A.Core.AgU;A.Core.AgU._Done.call(this);},_className:"Resources::Bitmap"};C.Tl={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.AA1={_class:function(){return C.B3;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B3={font:null,Leading:0,Descent:0,Ascent:0,K2:function(){this.Bvz(
);},Init:function(aArg){this.Bwb(aArg);},Bvz:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},Bwb:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},BfV:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BfZ:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A4m:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},BkK:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},XX:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A4v:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return EU;var handle=this.font;var extent=EU;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.AgU._Init.call(this,aArg);this.
__proto__=C.B3;this.Init(aArg);},_Done:function(){this.K2();this.__proto__=A.Core.
AgU;A.Core.AgU._Done.call(this);},_className:"Resources::Font"};C.ABj={_class:function(
){return C.B3;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.ArV={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.APR={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ARF={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BgZ="Monday";C.BmC="Tuesday";C.Bnd="Wednesday";C.Bmp="Thursday";C.BfB="Friday";
C.Blf="Saturday";C.Bmc="Sunday";C.BdS="AM";C.BkI="PM";C.ACl="January";C.ABd="February";
C.ACx="March";C.AAg="April";C.ACA="May";C.ACn="June";C.ACm="July";C.AAo="August";
C.AES="September";C.ACN="October";C.ACL="November";C.AAZ="December";C.Bg0="Mon";
C.BmD="Tue";C.Bne="Wed";C.Bmq="Thu";C.BfC="Fri";C.Blg="Sat";C.Bmd="Sun";C.Bgv="Jan";
C.Bfp="Feb";C.BgP="Mar";C.Bd_="Apr";C.BgT="May";C.Bgy="Jun";C.Bgx="Jul";C.Bea="Aug";
C.Bll="Sep";C.Bhd="Oct";C.Bhc="Nov";C.BeS="Dec";
C._Init=function(){C.Al.__proto__=A.Core.AgU;C.B3.__proto__=A.Core.AgU;};C._ReInit=
function(){};C.DB=function(D){var B;if((B=C.Tl[0]._this)&&(B._cycle!=D))B._Done(
C.Tl[0]._this=null);if((B=C.AA1[0]._this)&&(B._cycle!=D))B._Done(C.AA1[0]._this=
null);if((B=C.ABj[0]._this)&&(B._cycle!=D))B._Done(C.ABj[0]._this=null);if((B=C.
ArV[0]._this)&&(B._cycle!=D))B._Done(C.ArV[0]._this=null);if((B=C.APR[0]._this)&&(
B._cycle!=D))B._Done(C.APR[0]._this=null);if((B=C.ARF[0]._this)&&(B._cycle!=D))B.
_Done(C.ARF[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */