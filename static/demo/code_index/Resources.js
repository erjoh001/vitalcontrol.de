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
var B9=[0,0];var BG="The property \'FrameSize\' is READ ONLY.";var EV=[0,0,0,0];
C.Aj={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.vw,Ox:false,UM:false,K1:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.bitmap=null;this.
FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=1;this.UM=false;},Init:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=B9;var frameDelay=
0;{var bmp=A.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Ox=true;this.UM=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Aqd:function(E){throw new Error(
BG);},Update:function(){},_Init:function(aArg){A.Core.AgJ._Init.call(this,aArg);
this.__proto__=C.Aj;this.Init(aArg);},_Done:function(){this.K1();this.__proto__=
A.Core.AgJ;A.Core.AgJ._Done.call(this);},_className:"Resources::Bitmap"};C.K0={_class:
function(){return C.Aj;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A.cC,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};C.AAx={_class:function(
){return C.B4;},0:{Data:function(){return A.abO;},Cache:[],_this:null}};C.B4={font:
null,Leading:0,Descent:0,Ascent:0,K1:function(){this.Bu1();},Init:function(aArg){
this.BvC(aArg);},Bu1:function(){if(!this.font)return;var handle=this.font;A.zy(handle
);this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},BvC:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=A.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Be2:function(aString,aOffset,aCount,aColumn,aMinWidth
){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.
length))aOffset=aString.length;var handle=this.font;var pos=0;pos=A.zQ(handle,aString
,aOffset,aCount,aColumn,aMinWidth);return pos;},Be6:function(aString,aOffset,aCount
,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>
aString.length))aOffset=aString.length;var handle=this.font;var col=0;col=A.z0(handle
,aString,aOffset,aCount,aX,aMinWidth);return col;},A3u:function(aFlowString){if(
!this.font)return 0;var handle=this.font;var advance=0;advance=A.zG(handle,aFlowString
);return advance;},Bj3:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return A.jm;
var handle=this.font;var result=A.jm;result=A.aaz(handle,aString,aOffset,aWidth,
aMaxNoOfRows,aBidi);return result;},XB:function(aString,aOffset,aCount){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var
handle=this.font;var advance=0;advance=A.ms(handle,aString,aOffset,aCount);return advance;
},A3D:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return EV;var handle=this.font;var extent=EV;extent=
A.z1(handle,aString,aOffset,aCount);return extent;},_Init:function(aArg){A.Core.
AgJ._Init.call(this,aArg);this.__proto__=C.B4;this.Init(aArg);},_Done:function(){
this.K1();this.__proto__=A.Core.AgJ;A.Core.AgJ._Done.call(this);},_className:"Resources::Font"
};C.AAT={_class:function(){return C.B4;},0:{Data:function(){return A.abP;},Cache:[
],_this:null}};C.Arh={_class:function(){return C.Aj;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};C.APq={_class:
function(){return C.Aj;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:null}};C.ARd={_class:
function(){return C.Aj;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:null}};C.Bf9="Monday";
C.BlV="Tuesday";C.Bmw="Wednesday";C.BlI="Thursday";C.BeH="Friday";C.Bkz="Saturday";
C.Blv="Sunday";C.BcV="AM";C.Bj1="PM";C.ABV="January";C.AAM="February";C.AB6="March";
C.AzM="April";C.AB9="May";C.ABX="June";C.ABW="July";C.AzU="August";C.AEm="September";
C.ACl="October";C.ACj="November";C.AAv="December";C.Bf_="Mon";C.BlW="Tue";C.Bmx=
"Wed";C.BlJ="Thu";C.BeI="Fri";C.BkA="Sat";C.Blw="Sun";C.BfC="Jan";C.Bev="Feb";C.
BfZ="Mar";C.Bdb="Apr";C.Bf3="May";C.BfF="Jun";C.BfE="Jul";C.Bdd="Aug";C.BkG="Sep";
C.Bgw="Oct";C.Bgv="Nov";C.BdY="Dec";
C._Init=function(){C.Aj.__proto__=A.Core.AgJ;C.B4.__proto__=A.Core.AgJ;};C._ReInit=
function(){};C.DB=function(D){var B;if((B=C.K0[0]._this)&&(B._cycle!=D))B._Done(
C.K0[0]._this=null);if((B=C.AAx[0]._this)&&(B._cycle!=D))B._Done(C.AAx[0]._this=
null);if((B=C.AAT[0]._this)&&(B._cycle!=D))B._Done(C.AAT[0]._this=null);if((B=C.
Arh[0]._this)&&(B._cycle!=D))B._Done(C.Arh[0]._this=null);if((B=C.APq[0]._this)&&(
B._cycle!=D))B._Done(C.APq[0]._this=null);if((B=C.ARd[0]._this)&&(B._cycle!=D))B.
_Done(C.ARd[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */