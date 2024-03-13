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
var Cc=[0,0];var BF="The property \'FrameSize\' is READ ONLY.";var E4=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,OL:false,Vw:false,Lb:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;this.Vw=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Cc;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.OL=true;this.
Vw=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},ArO:function(E){throw new
Error(BF);},Update:function(){},_Init:function(aArg){A.Core.Ahv._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=
A.Core.Ahv;A.Core.Ahv._Done.call(this);},_className:"Resources::Bitmap"};C.TJ={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ACt={_class:function(){return C.B6;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B6={font:null,Leading:0,Descent:0,Ascent:0,Lb:function(){this.By8(
);},Init:function(aArg){this.BzN(aArg);},By8:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},BzN:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},BiO:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BiS:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A6A:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},BnF:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},Ys:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A6K:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return E4;var handle=this.font;var extent=E4;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.Ahv._Init.call(this,aArg);this.
__proto__=C.B6;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=A.Core.
Ahv;A.Core.Ahv._Done.call(this);},_className:"Resources::Font"};C.ACM={_class:function(
){return C.B6;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.AsR={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ARP={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.ATO={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BjQ="Monday";C.BpG="Tuesday";C.Bqm="Wednesday";C.Bpr="Thursday";C.Bit="Friday";
C.Bod="Saturday";C.Bpe="Sunday";C.BgK="AM";C.BnD="PM";C.ADW="January";C.ACG="February";
C.AD8="March";C.ABH="April";C.AD$="May";C.ADY="June";C.ADX="July";C.ABO="August";
C.AGw="September";C.AEl="October";C.AEj="November";C.ACr="December";C.BjR="Mon";
C.BpH="Tue";C.Bqn="Wed";C.Bps="Thu";C.Biu="Fri";C.Boe="Sat";C.Bpf="Sun";C.Bjp="Jan";
C.Bih="Feb";C.BjI="Mar";C.Bg2="Apr";C.BjM="May";C.Bjs="Jun";C.Bjr="Jul";C.Bg4="Aug";
C.Bol="Sep";C.Bj6="Oct";C.Bj5="Nov";C.BhJ="Dec";
C._Init=function(){C.Al.__proto__=A.Core.Ahv;C.B6.__proto__=A.Core.Ahv;};C._ReInit=
function(){};C.DH=function(D){var B;if((B=C.TJ[0]._this)&&(B._cycle!=D))B._Done(
C.TJ[0]._this=null);if((B=C.ACt[0]._this)&&(B._cycle!=D))B._Done(C.ACt[0]._this=
null);if((B=C.ACM[0]._this)&&(B._cycle!=D))B._Done(C.ACM[0]._this=null);if((B=C.
AsR[0]._this)&&(B._cycle!=D))B._Done(C.AsR[0]._this=null);if((B=C.ARP[0]._this)&&(
B._cycle!=D))B._Done(C.ARP[0]._this=null);if((B=C.ATO[0]._this)&&(B._cycle!=D))B.
_Done(C.ATO[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */