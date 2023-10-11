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
var B$=[0,0];var BH="The property \'FrameSize\' is READ ONLY.";var EV=[0,0,0,0];
C.Aj={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.vw,Oy:false,UO:false,K3:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.bitmap=null;this.
FrameSize=B$;this.FrameDelay=0;this.NoOfFrames=1;this.UO=false;},Init:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=B$;var frameDelay=
0;{var bmp=A.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Oy=true;this.UO=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Aqs:function(E){throw new Error(
BH);},Update:function(){},_Init:function(aArg){A.Core.AgQ._Init.call(this,aArg);
this.__proto__=C.Aj;this.Init(aArg);},_Done:function(){this.K3();this.__proto__=
A.Core.AgQ;A.Core.AgQ._Done.call(this);},_className:"Resources::Bitmap"};C.K2={_class:
function(){return C.Aj;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A.cC,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};C.AAG={_class:function(
){return C.B6;},0:{Data:function(){return A.abO;},Cache:[],_this:null}};C.B6={font:
null,Leading:0,Descent:0,Ascent:0,K3:function(){this.Bvi();},Init:function(aArg){
this.BvW(aArg);},Bvi:function(){if(!this.font)return;var handle=this.font;A.zy(handle
);this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},BvW:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=A.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Bfo:function(aString,aOffset,aCount,aColumn,aMinWidth
){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.
length))aOffset=aString.length;var handle=this.font;var pos=0;pos=A.zQ(handle,aString
,aOffset,aCount,aColumn,aMinWidth);return pos;},Bfs:function(aString,aOffset,aCount
,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>
aString.length))aOffset=aString.length;var handle=this.font;var col=0;col=A.z0(handle
,aString,aOffset,aCount,aX,aMinWidth);return col;},A3Y:function(aFlowString){if(
!this.font)return 0;var handle=this.font;var advance=0;advance=A.zG(handle,aFlowString
);return advance;},Bkq:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return A.jm;
var handle=this.font;var result=A.jm;result=A.aaz(handle,aString,aOffset,aWidth,
aMaxNoOfRows,aBidi);return result;},XJ:function(aString,aOffset,aCount){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var
handle=this.font;var advance=0;advance=A.ms(handle,aString,aOffset,aCount);return advance;
},A37:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return EV;var handle=this.font;var extent=EV;extent=
A.z1(handle,aString,aOffset,aCount);return extent;},_Init:function(aArg){A.Core.
AgQ._Init.call(this,aArg);this.__proto__=C.B6;this.Init(aArg);},_Done:function(){
this.K3();this.__proto__=A.Core.AgQ;A.Core.AgQ._Done.call(this);},_className:"Resources::Font"
};C.AA1={_class:function(){return C.B6;},0:{Data:function(){return A.abP;},Cache:[
],_this:null}};C.Aru={_class:function(){return C.Aj;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};C.APA={_class:
function(){return C.Aj;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:null}};C.ARo={_class:
function(){return C.Aj;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A.jt,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:null}};C.Bgu="Monday";
C.Bmk="Tuesday";C.BmX="Wednesday";C.Bl9="Thursday";C.Be5="Friday";C.BkY="Saturday";
C.BlW="Sunday";C.Bdf="AM";C.Bko="PM";C.AB3="January";C.AAU="February";C.ACd="March";
C.AzV="April";C.ACg="May";C.AB5="June";C.AB4="July";C.Az3="August";C.AEx="September";
C.ACu="October";C.ACs="November";C.AAE="December";C.Bgv="Mon";C.Bml="Tue";C.BmY=
"Wed";C.Bl_="Thu";C.Be6="Fri";C.BkZ="Sat";C.BlX="Sun";C.Bf0="Jan";C.BeT="Feb";C.
Bgk="Mar";C.Bdx="Apr";C.Bgo="May";C.Bf3="Jun";C.Bf2="Jul";C.Bdz="Aug";C.Bk5="Sep";
C.BgT="Oct";C.BgS="Nov";C.Bej="Dec";
C._Init=function(){C.Aj.__proto__=A.Core.AgQ;C.B6.__proto__=A.Core.AgQ;};C._ReInit=
function(){};C.DE=function(D){var B;if((B=C.K2[0]._this)&&(B._cycle!=D))B._Done(
C.K2[0]._this=null);if((B=C.AAG[0]._this)&&(B._cycle!=D))B._Done(C.AAG[0]._this=
null);if((B=C.AA1[0]._this)&&(B._cycle!=D))B._Done(C.AA1[0]._this=null);if((B=C.
Aru[0]._this)&&(B._cycle!=D))B._Done(C.Aru[0]._this=null);if((B=C.APA[0]._this)&&(
B._cycle!=D))B._Done(C.APA[0]._this=null);if((B=C.ARo[0]._this)&&(B._cycle!=D))B.
_Done(C.ARo[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */