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
);if(index.kR)throw new Error("The unit file 'Application.js' included twice!");
index.kR=(function(){var A=index;var C={};
var Ca=[0,0,240,320];var BC=[0,0,240,40];var EW=[0,0,20,30];var Hh=[6,21,14,25];var
I8=[6,15,14,19];var IJ=[6,9,14,13];var OW=[209,7,229,37];var PW=[0,40,240,320];var
PX=[0,228,240,298];var CL=" ";var E4=[0,40,240,280];var Lq=[0,40,232,280];var PY=[
0,40,116,160];var Ks=[114,40,230,160];var N8=[0,160,116,280];var PZ=[116,160,232
,280];var MB=[0,280,116,400];var ST=[116,280,232,400];var UC=[0,400,116,520];var
ZE=[116,400,232,520];var WG=[-1,520,115,640];var IK=[232,40,240,280];var UD=[5,40
,235,120];var ZF=[120,140,210,230];var WH=[20,140,110,230];var ZG=[0,0,116,120];
var WI=[0,0,120,120];var ZH=[0,0,116,45];var ZI=[0,0,8,200];var UE=[0,0,8,20];var
WJ=[30,0,210,40];var Q9=[0,0,40,40];var ZJ=[7,8,200,40];var OX=[0,0,200,40];var Q_=[
6,1];var WK="ERROR: Invalid value for ItemHighlighting";var WM=[10,10,40,30];var
WN=[0,0,120,40];var WO=[60,0,180,40];var ZK=[120,0,240,40];var WQ=[0,0,100,40];var
WR=[83,0,157,40];var SU=[140,0,240,40];var ZL=[0,0,20,40];var ZM=[220,0,240,40];
var Acq=[0,0,300,30];var UF=[0,30,300,60];var ZN=[0,60,300,90];var Afe=[0,90,300
,120];var ZO=[0,100,300,110];var WS=[0,50,300,60];var ZP=[0,30,300,40];var ZQ="*";
var Aff=[40,40];var JP=[0,0,240,80];var Acr=[0,0,240,50];var Lr="Cap";var Ahz=[0
,40,40,80];var AnQ=[200,40,240,80];var N9=[30,40,210,80];var WT="--";var AnR="%d";
var AhA="%m";var AhB="%Y";var Acs=" (";var UG=[0,0,232,80];var AnS="Date";var AnT=[
48,40,88,78];var AnU=[39,40,79,80];var AnV=[80,44,87,77];var Afg=".";var AnW=[88
,44,120,77];var Afh=[120,44,127,77];var Asj=[127,44,191,77];var OY=[0,0,80,40];var
SV="Text";var Axj=[430,102,430,102];var SW=[0,0,240,240];var Ask=[232,0,240,240];
var Axk=[0,10,240,240];var Axl="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Axm="Unhandled option";
var AnX=[0,80,240,280];var Axn="Unhandled animal list action";var Asl="Animal list content not handled.";
var JQ=[0,40,240,80];var Axo="Set Selected";var Act="Unhandled AnimalListInfoItemMode ";
var Axp=" %%";var AGF=[0,180,240,220];var AGG=[82,127,167,150];var AGH="Group";var
AGI=[77,91,167,124];var Axq=[0,0,90,33];var AU_=[4,4,18,29];var AU$=[20,4,34,29];
var AVa=[36,4,50,29];var AVb=[52,4,66,29];var AVc=[68,4,82,29];var Asm="ERROR: Unhandled Device::SyncState";
var Axr=":\n";var P0="{1}";var Axs="{2}";var AVd=[0,49,240,109];var AVe=[0,170,240
,243];var AVf=[0,110,240,170];var AVg=[20,243,220,268];var AGJ=[30,8];var AGK="\u2265 ";
var Afi=[0,0,240,160];var AnY=[0,0,0,0];var AVh=[0,0,240,66];var AGL=[10,0,76,66
];var AkO=[33,33];var AGM=[87,0,153,66];var AGN=[164,0,230,66];var AGO="No statistics available";
var AVi="in this environment.";var AVj=" fps";var AVk="CPU: - %%";var Acu=[0,0,240
,120];var AGP=[130,0,237,20];var Asn=[20,0,120,20];var AGQ=[0,20,240,40];var AGR=[
40,20,100,40];var Axt=[100,20,240,40];var AGS=[0,40,240,60];var Axu=[40,40,100,60
];var AVl=[100,40,240,60];var AVm=[0,60,50,80];var AVn=[100,60,240,80];var AVo=[
0,80,50,100];var AGT=[100,80,240,100];var AVp=[0,100,50,120];var OZ=[100,100,240
,120];var Axv=[5,5,15,15];var AVq="%H";var AVr="%M";var AVs="Time";var AVt=[79,40
,119,78];var AVu=[125,40,164,80];var AVv=[86,40,126,80];var AVw=":";var AGU=[75,
40,115,80];var AnZ=[0,0,240,150];var Axw=[60,0,155,40];var AGV=[30,0,65,40];var AVx=[
60,0,100,40];var AVy=[88,0,128,40];var AVz=[60,0,71,40];var AVA=[60,0,74,40];var
AGW=[90,0,123,40];var AVB=[120,0,161,40];var AGX=[120,0,165,40];var AGY=[60,0,88
,40];var AGZ=[60,0,95,40];var AVC="Did not expect iterator bigger than number of records";
var Axx=[20,0,240,20];var AVD=[0,38,240,40];var AVE=[0,0,8,4];var Q$=[0,0,240,280
];var WU=[0,280,240,320];var AVF="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AVG="]";var AVH="ERROR: Cannot find closing bracket \'}\' in text [";var AVI=
"] opened at index ";var AVJ="#";var AVK="ERROR: Invalid parameter: {";var AVL="}";
var AhC=[20,20];var AG0=[0,12];var AVM="ERROR: Not expected Application::FooterFocus, ";
var AVN="%M:%S";var AG1=[30,150,207,170];var AG2=[20,70,217,194];var Axy="Unhandled item.";
var P1=[0,80,240,120];var AVO="Unhandled Overlay Menu ";var AVP="Invalid bootloader message: ";
var AVQ="Unknown USBState: ";var Aso="Invalid fader";var AVR=[2,4,32,40];var AVS=[
29,4,80,40];var AVT=[120,4,200,40];var AVU=[80,0,114,40];var AVV="-1";var AVW="< ";
var Asp=[0,0,232,40];var AVX=[22,40,180,80];var AVY=[2,40,22,80];var AVZ=[23,40,
163,80];var AV0=[210,40,230,80];var AV1=[164,40,210,80];var AV2=[169,43,205,77];
var AV3="ERROR: No outlet assigned";var AV4="Unhandled screen";var AV5="ERROR: Cannot cache null screen.";
var AV6="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AG3="Untreated Rating Method type!";var AkP="Unhandled animal type";var AV7=[
5,60,235,140];var AV8=[0,130,240,196];var AV9=[49,240,229,280];var Axz="Implement in derived classes!";
var AkQ="Implement in derived class";var AhD=[0,40,230,120];var AxA=[0,120,230,200
];var An0=[0,200,230,280];var AhE=[0,280,230,360];var AV_=[0,360,230,440];var AxB=[
230,40,238,280];var AG4="WARNING: Unhandled filter field: ";var Afj="Should not happen.";
var AG5="Invalid Boolean item";var ZR=[0,120,240,160];var AkR=[0,160,240,200];var
An1=[0,200,240,240];var AV$=[1152,11,1392,51];var AWa=[1152,51,1392,91];var AWb=[
1152,91,1392,131];var AWc=[1152,131,1392,171];var AWd=[1152,171,1392,211];var Asq=[
0,240,240,280];var AG6=[10,0,240,40];var AG7=[190,0,230,40];var AWe=[60,3,95,39];
var AWf=[95,4,200,40];var AWg=[3,3];var AWh=[6,6];var AWi=[0,4,40,40];var AWj=[39
,5,197,35];var AG8=[40,0,200,40];var AWk="Illegal shifting direction";var AxC=[0
,0,160,30];var AG9=[0,0,25,30];var AG_=[27,0,52,30];var AG$=[54,0,79,30];var AHa=[
81,0,106,30];var AHb=[108,0,133,30];var AHc=[135,0,160,30];var AWl="Internal queue error";
var AWm="ERROR: No corresponding Id ";var AWn=" found.";var AWo="ERROR: Error in range test";
var AWp=[120,67,210,157];var AWq=[0,40,240,70];var AWr=[20,67,110,157];var AxD=[
0,160,240,280];var AHd=[20,77,90,147];var AWs=[0,0,210,40];var AHe=[195,0,235,40
];var AhF=[0,40,232,120];var WV=[0,120,232,200];var AWt=[0,40,232,200];var ZS=[0
,200,232,280];var AWu=[0,320,240,400];var AWv=[0,120,53,200];var An2=[0,280,232,
360];var Afk="%%";var AkS=[0,360,232,440];var AHf=[0,440,232,520];var AWw=[0,80,
207,120];var O0=")";var AWx="/";var AWy=[5,0,88,30];var AWz=[88,0,240,30];var AWA=
"276000312345678";var AHg=[5,30,100,60];var AHh=[100,30,240,60];var AWB="Manufacturer";
var AxE="Country";var AxF=[5,60,240,90];var AWC="Niedersachsen";var AWD=[5,90,145
,120];var AHi=[140,90,240,120];var AHj="Protocol";var AWE=[0,0,120,100];var AxG=[
0,40,116,120];var AWF=[40,80,92,107];var AHk=[0,0,50,23];var AHl="ERROR: Unhandled Device::MeasureState";
var AxH=[0,120,240,280];var AWG=[178,159,248,203];var AWH=[10,145,170,225];var AWI=[
0,61,240,101];var AWJ=[0,0,40,23];var AWK=[101,113,141,136];var AWL=[101,235,141
,258];var AWM=[69,288,101,313];var AWN=[0,40,240,200];var Asr=[0,200,240,280];var
Ass=[0,280,240,360];var AHm="\u2264 ";var AWO=[0,80,94,160];var AWP=[94,80,184,160
];var AWQ=[184,80,240,160];var AWR=[197,105,231,139];var AWS=[105,101,173,127];var
AHn=[7,101,75,127];var AWT=[94,125,184,151];var AWU=[2,125,92,151];var AWV=[0,70
,240,101];var AWW=[0,106,240,280];var AWX=[30,40,240,70];var AWY=[0,40,30,70];var
AWZ="\u278B";var AW0=[0,0,240,175];var AW1=[0,0,232,175];var AW2=[232,0,240,175];
var AW3="Text Here !";var AW4=[200,0,240,40];var AHo="1";var AHp="2";var AxI="3";
var AHq="4";var An3=[0,360,232,400];var Ast="ERROR: invalid item class.";var AHr=[
10,220,250,260];var AW5=[185,0,225,40];var AHs="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AW6="ERROR: Received more actions than expected!";var AHt=", ";var AW7=
"ERROR: Cannot set action at position=";var AW8=". Current elements:";var AW9=", max elements:";
var AW_="17";var AW$=[0,0,58,58];var AXa=[0,0,60,60];var AXb=[30,0,58,20];var AXc=[
7,6,25,24];var AXd=[30,60,130,160];var AXe=[0,0,28,20];var AXf=[4,3,40,24];var AXg=[
0,0,42,27];var AxJ=[0,0,17,17];var AXh="Unknown direction of counting enum value: ";
var AXi="Unknown id generation method enum value: ";var AxK="Invalid animal id generation method: ";
var Asu="Unhandled popup id";var ZT="0";var Asv=";";var AXj=[0,400,230,480];var AXk=[
5,120,235,200];var AXl=[0,640,230,760];var AHu=[0,0,300,200];var AXm=[20,40,220,
80];var AHv=[20,80,220,280];var AXn=[140,0,188,40];var AXo="ERROR: Row containing birth weight could not be loaded";
var AXp=[0,440,230,520];var Asw="ID";var AXq=[40,40,198,70];var AXr="Extra info: ";
var AHw=" -";var AXs=[0,0,230,120];var AXt=[0,0,230,40];var AXu=[0,80,230,120];var
AXv="\xB0Brix";var Acv=[0,320,230,400];var AXw=[0,410,230,490];var AXx="ERROR: aNumberOfDays can not be < 0 ";
var AXy="{WEIGHTGAIN} ";var AXz="\xB1";var AHx="+";var AXA="{WEIGHTGAIN}";var AXB=
"{DAYS}";var AXC="ERROR: aString can not be null";var AXD=[166,70,240,114];var AXE=[
0,60,160,120];var AXF=[30,0,240,60];var AHy=[1,6,29,54];var AXG=[30,60,240,120];
var AXH="Con";var AXI=[70,50,170,70];var AHz="Unhandled Device::NaisIdValidationResult: ";
var AHA="Unhandled PopupId";var AXJ=[110,123,230,248];var AXK=[5,0,250,40];var AXL=[
102,0,186,40];var AXM=[153,0,240,40];var Ra="-";var Asx=[170,0,240,40];var AHB=[
220,0,320,30];var AHC=[200,20,300,50];var An4=[180,0,180,40];var An5=[170,0,170,
40];var AxL="Untreated state";var AXN="ERROR: Animal id scanned in an unexpected state : ";
var AHD="ERROR: Null animal id scanned.";var AXO=[40,40,235,100];var AXP=[120,100
,210,190];var AXQ=[20,100,110,190];var AXR=[0,40,40,100];var AXS="\u278A";var AXT=
"Action untreated";var AXU="ERROR: No corresponding ";var AXV=" action found!";var
AXW="Unhandled action: ";var AXX=[0,190,240,220];var AXY=[0,220,232,280];var AXZ=[
5,190,235,270];var AX0=[232,60];var AX1=[0,2];var AX2=[58,58];var AX3="A";var AX4=[
56,0,156,40];var An6=[156,0,240,40];var AHE=" 7 ";var AX5=[40,0,156,40];var AHF=
"/-1/-2";var AHG=[72,0,144,40];var ZU="\n";var AHH="(";var AX6=[72,0,156,40];var
AHI="%y/%m";var AX7=[70,0,240,40];var AxM=[70,0,120,40];var AX8=[160,0,245,40];var
AX9="- ";var AxN=" - ";var AX_="{parc}{clr3}";var AX$="{clr0}/^{clr2}";var AYa="{clr0}/^{clr1}";
var AHJ=[0,0,85,40];var An7="?";var AHK=[0,0,120,140];var AYb=[0,0,116,40];var AHL=[
15,0,100,40];var AHM=[110,0,200,40];var AkT=[0,0,34,34];var AYc=[129,0,157,40];var
An8=[0,0,25,25];var AYd="\u2611";var AHN="\u2610";var AHO=[5,0,72,40];var AYe=[150
,0,240,40];var AYf=[72,0,139,40];var AHP="Unvalid content class: ";var AYg=[0,320
,240,360];var AHQ=[0,360,240,400];var AYh=[144,0,170,40];var AHR=[187,0,213,40];
var AYi=[207,10,233,50];var AYj=[247,20,273,60];var AYk=[140,0,150,100];var AYl=[
165,0,175,100];var AYm=[185,0,195,100];var AYn=[205,0,215,100];var AYo=[211,0,233
,40];var AYp=[189,0,211,40];var AYq=[167,0,189,40];var AYr=[145,0,167,40];var AHS=[
5,0,240,40];var ZV=[10,0,10,40];var AYs="= \u2211 ";var AxO=[125,0,240,40];var AYt=[
130,0,170,40];var AYu="\xD8 ";var AYv=[100,10,116,36];var AYw=[117,10,133,36];var
An9=[135,10,151,36];var AYx="Implement in derieved class";var Asy=[0,80,240,240];
var Asz=[0,120,232,160];var AsA=[0,160,232,200];var AsB=[0,200,232,240];var AxP=[
0,240,232,280];var An_=[0,320,232,360];var AYy=[-61,360,232,400];var AHT=[0,100];
var AsC=[0,40,240,240];var AYz=[0,50000];var AYA=[0,500];var AYB=[0,0,240,105];var
AYC=[0,105,240,210];var AYD=[0,40,240,81];var AYE=[0,81,240,122];var AYF=[0,122,
240,163];var AYG=[0,163,240,205];var AYH=[0,205,240,240];var AYI=[0,200];var AYJ=[
0,40,240,73];var AxQ=[0,0,30,40];var AYK=[0,40,30,80];var AxR=[60,40];var AxS=[60
,0];var AYL=[10,0,40,40];var AYM=[0,190,240,260];var AHU=[0,130,240,190];var AHV=[
40,40,200,130];var AHW=[90,230,170,253];var AYN=[80,190,170,223];var AYO=[0,130,
240,180];var AHX=[0,250,240,280];var AYP=[129,0,156,40];var AYQ=[72,0,100,40];var
AYR=[100,0,129,40];var AYS=[78,8,103,33];var AHY=[0,0,300,120];var AYT=[1,-1];var
AYU=[20,40,240,120];var AYV=[20,0,240,40];var AYW=[0,118,240,120];var AYX=[0,20,
130,40];var AYY=[130,20,240,40];var AYZ=[0,0,10,20];var AHZ="\u2191";var AY0=[230
,0,240,20];var AsD=[0,40,232,80];var AY1=[0,80,232,160];var AY2=[0,160,230,240];
var AsE=" p. p.";var AxT="Unknown animal type";var AsF=[80,0,140,40];var AY3=[50
,0,172,40];var Bps=[172,0,240,40];var Bpt=[0,90,240,92];var A$d="Unhandled menu item";
var A$e=[0,0,50,30];var AsG=[0,0,30,30];var Bpu="No AnimalActionTemperatureScreen found!";
var Bpv="840003123456789";var Bpw=[40,0,230,40];var Bpx=[50,10,230,30];var AY4="No AnimalMultiInfoScreen found!";
var AH0=[0,0,25,40];var A$f="/^";var A$g="?/?";var Bpy=[100,4,180,40];var Bpz=[65
,0,99,40];var BpA=[165,0,200,40];var A$h=[0,0,60,40];var A$i="9999/^9999";var BpB=
"Invalid index: ";var BpC="Unknown AnimalIdGenerationMethod: ";var BpD="Invalid gender: ";
var AsH="Invalid input state: ";var BpE="Unhandled AnimalIdGenerationMethod";var
BpF=[42,35,67,75];var BpG=[5,35,39,75];var BpH=[70,40,228,70];var BpI="Invalid direction for setting focus";
var AhG="Invalid index";var BpJ="Unvalid direction";var BpK=[0,0,42,30];var A$j=[
22,0,42,30];var BpL=[20,0,40,30];var BpM=[0,0,158,30];var A$k=[32,0,62,30];var A$l=[
64,0,94,30];var A$m=[96,0,126,30];var BpN=[128,0,158,30];var BpO=" %% ";var BpP=[
0,70,240,220];var BpQ=[0,237,240,307];var A$n="\n44 %% done";var BpR=[0,0,166,30
];var AH1=[0,0,12,30];var AxU=[14,0,26,30];var AY5=[28,0,40,30];var AY6=[42,0,54
,30];var AY7=[56,0,68,30];var AY8=[70,0,82,30];var AY9=[84,0,96,30];var AY_=[98,
0,110,30];var A$o=[112,0,124,30];var AY$=[126,0,138,30];var BpS=[140,0,152,30];var
BpT=[154,0,166,30];var A$p=[20,0,46,30];var BpU="\u2642";var BpV="{fnt3}\u2642{fnt1}";
var BpW="\u2640";var BpX="{fnt3}\u2640{fnt1}";var BpY="{parc}";var BpZ=[30,30,210
,80];var Bp0="Implement in derieved class!";var Bp1=[60,4,226,34];var A$q=[30,4,
58,34];var A$r=[4,0,27,40];var Bp2=[116,4,228,34];var Bp3=[60,4,86,34];var Bp4=[
88,4,114,34];var An$="Implement in derived class!";var A$s="Implement in derived class.";
var Bp5="Invalid nais id view: ";var Bp6=[0,35,240,75];var Bp7=[0,0,110,30];var Bp8=[
0,0,26,30];var Bp9="100";var AZa="\n\n";var Bp_=[240,240];var Bp$=[0,240];var Bqa=
"Unknown rated attribute: ";var Bqb=[120,80,240,280];var Bqc=[0,80,120,280];var AH2=
" %% (";var AxV=" \xB1 ";var AxW=" (n = ";var AZb=[0,80,232,120];var Bqd=[0,242,
232,282];var AZc=[0,280,232,320];var Bqe=[35,0,200,40];var Bqf=[1,0,31,40];var Bqg=[
32,40];var Bqh=[32,0];var Bqi=[3,0,83,40];var A$t=[180,0,240,40];var Bqj=[120,0,
180,40];var Bqk=[65,0,125,40];var Bql=[0,0,120,200];var Bqm=[0,40,120,150];var A$u=[
15,160,60,190];var A$v=[60,160,105,190];var Bqn=[0,65,240,135];var Bqo=[10,112,170
,192];var Bqp=[178,129,248,173];var Bqq=[0,40,240,110];var Bqr=[10,98,170,178];var
Bqs=[178,112,248,156];var Bqt=[85,190,160,265];var Bqu=[89,194,155,260];var Bqv=[
26,190,111,250];var Bqw=[125,181,225,211];var Bqx=[100,220,183,250];var Bqy="38.7";
var Bqz=[180,220,225,250];var BqA="\xB0C";var BqB=[0,99,240,178];var BqC=[100,280
,140,320];var BqD=[0,26,240,105];var A$w=[30,40];var A$x=[30,0];var BqE=[149,0,200
,40];var BqF=[145,40];var BqG=[145,0];var BqH=[38,0,88,40];var A$y=[0,0,35,40];var
BqI=[0,0,50,40];var BqJ=[95,0,145,40];var BqK=[65,5,223,35];var AZd=[0,0,15,40];
var BqL=[72,0,140,40];var A$z="\n(";var BqM="%y/%m/%d";var BqN="%y ";var BqO=" %m ";
var BqP=" %d ";var BqQ="20";var BqR=[225,0,240,40];var BqS=[0,400,232,440];var BqT=[
0,440,232,480];var BqU=[0,480,232,520];var BqV=[0,520,232,560];var BqW=[0,560,232
,600];var BqX=[0,598,232,638];var BqY=[5,0,215,40];var BqZ=[215,8,240,33];var Bq0=
"Implement in dervied class.";var Bq1="ERROR: Unhandled temperature unit: ";var AH3=
"ERROR: Unhandled mass unit: ";var Bq2=[-1,160,115,280];var Bq3=[114,160,230,280
];var AZe=[116,40,232,160];var AxX="Unknown weight class index: ";var Bq4="< 35";
var Bq5="35 - 40";var Bq6="40 - 45";var Bq7="45 - 50";var Bq8="\u2265 50";var Bq9=
"< 80";var Bq_="80 - 90";var Bq$="90 - 100";var Bra="100 - 110";var Brb="\u2265 110";
var A$A="Unknown mass unit";var Brc=[143,0,193,40];var A$B=[192,0,240,40];var Brd=[
44,28,44,28];var Bre="0 %%";var Brf=[-1,40,115,160];var Brg=[117,40,233,160];var
Brh=[1,160,117,280];var Bri=[114,158,230,278];var Brj=[1,280,117,400];var Brk=[30
,0,155,40];var A$C="\u2620";var A$D=[380,150,380,190];var A$E=[105,0,155,50];var
A$F=[190,1,240,41];var Brl=[72,0,108,40];var Brm=[108,0,180,40];var Brn=[60,0,94
,40];var Bro=[94,0,200,40];var Brp="Scroll direction not supported.";var Brq=[44
,0,207,40];var Brr=[207,0,240,40];var Brs="99";var Brt="Unknown birth type";var Bru=[
44,0,189,40];var Brv=[5,0,44,40];var Brw=[44,0,240,40];var Brx=[240,0,240,40];var
Bry="\u25C9";var A$G="\u25CB";var Brz=[75,4,215,34];var BrA=[47,4,73,34];var A$H=[
17,4,45,34];var BrB=[0,0,138,30];var BrC=[47,4,215,34];var AZf="Unhandled MotherSelectionFilterMode: ";
var BrD="Read only!";var BrE="actions array too small to hold all actions";var BrF=[
120,40];var BrG=[120,0];var BrH=[5,0,115,40];var BrI=[0,0,205,40];var BrJ=[0,1,37
,37];var BrK=[40,4,170,34];var BrL=[175,1,205,37];var BrM=[0,0,37,40];var BrN=[115
,98,205,188];var BrO=[0,40,235,100];var BrP=[2,200,240,280];var BrQ=" 01234";var
BrR=[0,0];var BrS=[33,63];var BrT=[25,56];var BrU="Unknown transponder image type: ";
var AH4=[0,0,82,82];var BrV=[0,0,81,26];var BrW=[105,120,195,210];var BrX=[10,140
,100,230];var A$I="Unhandled EartagNrAssignmentMode: ";var BrY="Unhandled Gender";
var BrZ=[10,35,35,75];var Br0=[44,40,202,70];var Br1=[204,35,232,75];var Br2="Unvalid FatoryResetScope";
var A$J=[0,120,240,200];var Br3=[144,0,192,40];var Br4=[144,0,240,40];var Br5=[195
,0,245,50];var Br6=[120,0,120,40];var Br7=[140,0,240,30];var Br8=[30,0,232,40];var
Br9=[60,0,160,40];var Br_=[160,0,200,40];var Br$=[150,17,200,40];var Bsa=[155,40
];var Bsb=[155,0];var Bsc=[146,80,240,160];var Bsd=[56,80,146,160];var Bse=[0,80
,56,160];var Bsf=[13,107,47,141];var Bsg=[74,109,104,139];var Bsh=[50,100,130,150
];var Bsi=[55,112,145,140];var Bsj=[146,112,236,140];var Bsk=[150,86,223,110];var
AH5=[0,40,240,120];var Bsl="Menu item for animal table field not found";var A$K=[
0,360,240,440];var Bsm=[0,440,240,520];var Bsn=[5,40,235,104];var Bso=[120,108,226
,218];var Bsp=[20,120,110,210];var Bsq=[5,223,235,280];var Bsr=[0,0,64,30];var Bss=[
44,0,64,30];var Bst=[185,5,225,35];var Bsu=[170,5,234,35];var Bsv="Unhandled number of digits";
var Bsw=[0,0,126,30];var Bsx=[22,5,149,35];var Bsy=[149,0,232,40];var A$L=[5,20];
var Bsz=[5,0];var BsA="Unhandled AnimalIdAutoGenerationMethod: ";var BsB=[4,440,
236,520];var BsC="Unhandled TransponderAssignmentIdChangeMethod: ";var BsD="\n";
var BsE="%";var BsF=[0,0,160,120];var BsG=[2,2,157,117];var BsH=[50,70];var BsI=[
50,50];var BsJ="Unhandled data export destination ";var BsK=[0,0,168,40];var BsL=[
168,0,240,40];var BsM=[0,47,232,77];var BsN=[121,17,171,40];var A$M=[0,40,230,280
];var BsO="##Disable all + reset order";var BsP="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BsQ="ERROR: Received more animal table fields than expected!";
var BsR=[0,80,240,130];var BsS=[0,80,240,200];var A$N="Unhandled BackupError: ";
var BsT="Unhandled PopupId: ";
C.AL4={Device:null,A5e:null,Gz:null,Init:function(aArg){},DriveCursorHitting:function(
SY,BD,E6){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.Gz._Init.call(this.
Gz={I:this},0);this.__proto__=C.AL4;this.H(Ca);this.J(this.Gz,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5e=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Ls=
this._variants();if(Ls){this.K={};Ls._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.Gz._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.Gz.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5e)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.A4b._variants();
},K:null,_className:"Application::Application"};C.ArX=[240,320];C.AB={Background:
null,Ec:null,ACp:null,AnH:0,Init:function(aArg){A.pe([this,this.AZO],this);A.pe([
this,this.BdO],this);},LJ:function(G){},AZO:function(s){this.LJ(s);},Cw:function(
G){},AH7:function(s){this.Cw(s);},EV:function(G){},AxY:function(s){this.EV(s);},
Dk:function(E){if(this.ACp===E)return;this.ACp=E;A.pe([this,this.BdO],this);},BdO:
function(G){var B;if(!!this.ACp)this.Ec.AbJ((C.BP.isPrototypeOf(B=A._NewObject(this.
ACp,0))?B:null));else this.Ec.AbJ(null);},_Init:function(aArg){C.AaV._Init.call(
this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.Ec._Init.call(this.
Ec={I:this},0);this.__proto__=C.AB;this.Background.AY(0x3F);this.Background.H(Ca
);this.Background.L(A.jb.C0);this.Ec.H(BC);this.Ec.Ar(false);this.J(this.Background
,-1);this.J(this.Ec,0);this.Init(aArg);},_Done:function(){this.__proto__=C.AaV;this.
Background._Done();this.Ec._Done();C.AaV._Done.call(this);},_ReInit:function(){C.
AaV._ReInit.call(this);this.Background._ReInit();this.Ec._ReInit();},_Mark:function(
D){var B;C.AaV._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.Wn={KB:null,Y4:function(E){var B;if(this.KB===E)return;if(!!this.KB)this.Aqa(
this.KB,null,null,null,[B=this.KB,B.AxY],null,false);this.KB=E;if(!!this.KB)this.
Ako(this.KB,null,null,null,null,null,null,[B=this.KB,B.AH7],null,false);},ADN:function(
){return this.KB;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Wn;this.H([0,0,C.ArX[0],C.ArX[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.KB)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ou={UM:null,Q:null,Anm:null,Zb:null,NI:null,Os:null,Tr:null,Ts:null,AFx:255,
J3:function(G){var F;if(!!this.Q){this.A1i();var AcR=(F=this.Q,F[1].call(F[0]));
if(AcR>20)this.Os.L(A.jb.ET);else this.Os.L(A.jb.FZ);this.Os.L((this.Os.AQ&0x00FFFFFF
)|(this.Ali(AcR,0,30)<<24));this.Tr.L((this.Tr.AQ&0x00FFFFFF)|(this.Ali(AcR,31,60
)<<24));this.Ts.L((this.Ts.AQ&0x00FFFFFF)|(this.Ali(AcR,61,100)<<24));}},AZM:function(
s){this.J3(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AZM],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AZM],E,0);if(!!E)A.pe([this,
this.AZM],this);},A2u:function(G){var F;if(!!this.Anm)this.Zb.Ar((F=this.Anm,F[1
].call(F[0])));else this.Zb.Ar(false);this.A9x(255);},A9q:function(E){if(A.aaZ(this.
Anm,E))return;if(!!this.Anm)A.z$([this,this.A2u],this.Anm,0);this.Anm=E;if(!!E)A.
zX([this,this.A2u],E,0);if(!!E)A.pe([this,this.A2u],this);},A9x:function(E){if(this.
AFx===E)return;this.AFx=E;if(!!this.UM)this.UM.L((this.UM.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},Ali:function(AZS,Ba7,BvY){if(AZS<Ba7)return 0;else if((AZS>=Ba7)&&(AZS<
BvY))return this.AFx&0xFF;else return 255;},A1i:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.UM=this.Ts;else if((F=this.Q,F[1].call(F[0]))>
30)this.UM=this.Tr;else this.UM=this.Os;}else this.UM=null;},BjV:function(){return this.
AFx;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Zb._Init.call(this.Zb={
I:this},0);A.acg.An._Init.call(this.NI={I:this},0);A.acg.AJ._Init.call(this.Os={
I:this},0);A.acg.AJ._Init.call(this.Tr={I:this},0);A.acg.AJ._Init.call(this.Ts={
I:this},0);this.__proto__=C.Ou;this.H(EW);this.Zb.Fe(2000);this.NI.H(EW);this.NI.
L(A.jb.Text);this.Os.H(Hh);this.Os.L(A.jb.ET);this.Tr.H(I8);this.Tr.L(A.jb.ET);this.
Ts.H(IJ);this.Ts.L(A.jb.ET);this.J(this.NI,0);this.J(this.Os,0);this.J(this.Tr,0
);this.J(this.Ts,0);this.Zb.Q=[this,this.BjV,this.A9x];this.NI.Ax(A.aaL(A.ach.AMd
));},_Done:function(){this.__proto__=A.Core.O;this.Zb._Done();this.NI._Done();this.
Os._Done();this.Tr._Done();this.Ts._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Zb._ReInit();this.NI._ReInit();this.Os._ReInit(
);this.Tr._ReInit();this.Ts._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.UM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Anm)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zb={_Init:function(aArg){A.acl.Ga._Init.call(
this,aArg);this.__proto__=C.Zb;this.Akz=true;this.B1=0;this.Cr=255;},_className:
"Application::PulseAnimation"};C.Ec={Gz:null,AN:null,Background:null,Ou:null,Bl:
null,Dg:null,K2:0,AuL:0,AuM:0,AoB:0,LB:false,Ky:false,Qg:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20);
var Gt=this.Bl.Bv;if(!G6){this.AoB=A.jb.C0;this.K2=A.jb.Text;}else if(Gt){this.AoB=
this.AuL;this.K2=this.AuM;}else if(Fh){this.AoB=this.AuL;this.K2=this.AuM;}else{
this.AoB=A.jb.C0;this.K2=A.jb.Text;}this.Background.L(this.AoB);if(!!this.Gz){this.
Gz.AbH(this.AoB);this.Gz.C8(this.K2);}this.LB=G6;this.Ky=Fh;this.Qg=Gt;},Qf:function(
G){this.Am();A.pe(this.AN,this);},Aiw:function(G){if(this.Dg.AbZ)return;this.Am(
);if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false);}this.Bl.Ar(true);},AbJ:function(
E){if(this.Gz===E)return;if(!!this.Gz)this.HI(this.Gz);this.Gz=E;if(!!this.Gz)this.
J(this.Gz,0);this.A9(E);this.Am();},A8$:function(E){if(this.AuL===E)return;this.
AuL=E;this.Am();},A9a:function(E){if(this.AuM===E)return;this.AuM=E;this.Am();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={
I:this},0);C.Ou._Init.call(this.Ou={I:this},0);A.Core.Timer._Init.call(this.Bl={
I:this},0);A.Core.BJ._Init.call(this.Dg={I:this},0);this.__proto__=C.Ec;var B;this.
H(BC);this.Background.AY(0x3F);this.Background.H(BC);this.Background.L(A.jb.C0);
this.Ou.H(OW);this.K2=A.jb.Text;this.Bl.PK(0);this.Bl.We(50);this.Dg.Filter=1;this.
AuL=A.jb.AR;this.AuM=A.jb.Bj;this.AoB=A.jb.Text;this.J(this.Background,0);this.J(
this.Ou,0);this.Ou.At([B=A._GetAutoObject(A.Device.Device),B.Avu,B.AxZ]);this.Ou.
A9q([B=A._GetAutoObject(A.Device.Device),B.Avx,B.Ax0]);this.Bl.Ms=[this,this.Qf];
this.Dg.BK=[this,this.Aiw];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Ou._Done();this.Bl._Done();this.Dg._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
Ou._ReInit();this.Bl._ReInit();this.Dg._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XH={Aeo:null,Ul:null,Cw:function(G){if(this.K&&this.K.Cw
)return this.K.Cw.apply(this,arguments);else return C.AB.Cw.apply(this,arguments
);},EV:function(G){if(this.K&&this.K.EV)return this.K.EV.apply(this,arguments);else
return C.AB.EV.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.An._Init.call(this.Aeo={I:this},0);A.acg.Text._Init.call(this.Ul={I:
this},0);this.__proto__=C.XH;this.Aeo.H(PW);this.Ul.H(PX);this.Ul.R(A.jV);this.Ul.
L(A.jb.Text);this.Ul.Y(false);this.J(this.Aeo,0);this.J(this.Ul,0);this.Aeo.Ax(null
);this.Ul.S(A.aaL(A.fl.EB));var Ls=this._variants();if(Ls){this.K={};Ls._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.Aeo._Done();this.Ul._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.Aeo._ReInit();this.Ul._ReInit();this.Ul.S(A.aaL(A.fl.
EB));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Aeo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ul)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.
XH._variants();},K:null,_className:"Application::BootScreen"};C.AT7={AzT:function(
G){A._GetAutoObject(C.AX).Aha(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AT7;this.Background.L(0xFF000000);this.Ec.Y(false);},_className:
"Application::SleepScreen"};C.AuY={DP:null,Z:null,XT:null,XU:null,Vk:null,XK:null
,Vl:null,XI:null,XN:null,Tw:null,XM:null,XV:null,Aw:null,CT:function(){this.DD(this
);},Init:function(aArg){var B;A.zX([this,this.DD],[B=A._GetAutoObject(A.Device.Device
),B.Aq1,B.AsI],0);A._GetAutoObject(A.Device.Helper).Akr();this.A9(this.Vk);this.
N.Cn(A.aaL(A.ach.ACW));A.pe([this,this.DD],this);},A9:function(E){var B;var A14=
this.AR;C.AB.A9.call(this,E);if((this.AR!==A14)&&(!!this.AR&&((this.AR.T&0x400)===
0x400))){var AJk=A._NewObject(A.acl.AFu,0);AJk.Fe(250);AJk.HG(1);AJk.Wi(6);this.
Z.Hy(this.AR,true,AJk,null);}},Cw:function(G){this.A3y(this);A._GetAutoObject(A.
Device.Device).Ap.Bi(null);A._GetAutoObject(A.Device.Device).Br.Bi(null);A._GetAutoObject(
A.Device.Helper).Akr();A._GetAutoObject(A.Device.Helper).ArR();},E9:function(G){
var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.
Aw.Mq(-this.Z.Bq[1]);},Ia:function(G){var Cs=(C.Fc.isPrototypeOf(G)?G:null);if(!
Cs)return;if(Cs===this.Vk)A._GetAutoObject(C.AX).BS(35);else if(Cs===this.XK)A._GetAutoObject(
C.AX).BS(34);else if(Cs===this.XN)A._GetAutoObject(C.AX).BS(78);else if(Cs===this.
Vl)A._GetAutoObject(C.AX).BS(8);else if(Cs===this.XI)A._GetAutoObject(C.AX).BS(56
);else if(Cs===this.Tw)A._GetAutoObject(C.AX).BS(25);else if(Cs===this.XT)A._GetAutoObject(
C.AX).BS(88);else if(Cs===this.XU)A._GetAutoObject(C.AX).BS(79);else if(Cs===this.
XV)A._GetAutoObject(C.AX).BS(6);else if(Cs===this.XM)A._GetAutoObject(C.AX).BS(72
);},By7:function(G){A._GetAutoObject(A.Device.Device).AeC(!A._GetAutoObject(A.Device.
Device).Ams);},DD:function(G){if(A._GetAutoObject(A.Device.Device).Ams)this.N.Ho((
A.aaR(A.acf.A6J)+CL)+A.aaR(A.acf.Off).toLowerCase());else this.N.Ho((A.aaR(A.acf.
A6J)+CL)+A.aaR(A.acf.A7p).toLowerCase());},Xi:function(G){A._GetAutoObject(A.Device.
Device).Dp(1);},A3y:function(G){A._GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(
A.Device.Helper).Mj());this.Vl.Y9(A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed(
));},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AJ._Init.call(this.DP={I:this},0);A.Core.Z._Init.call(this.
Z={I:this},0);C.Fc._Init.call(this.XT={I:this},0);C.Fc._Init.call(this.XU={I:this
},0);C.Fc._Init.call(this.Vk={I:this},0);C.Fc._Init.call(this.XK={I:this},0);C.QI.
_Init.call(this.Vl={I:this},0);C.Fc._Init.call(this.XI={I:this},0);C.Fc._Init.call(
this.XN={I:this},0);C.Fc._Init.call(this.Tw={I:this},0);C.Fc._Init.call(this.XM={
I:this},0);C.Fc._Init.call(this.XV={I:this},0);C.Aw._Init.call(this.Aw={I:this},
0);this.__proto__=C.AuY;this.Background.L(A.jb.C0);this.N.Ar(false);this.N.Y(true
);this.Dk(C.Aqu);this.DP.AY(0x3F);this.DP.H(E4);this.DP.L(A.jb.CF);this.Z.H(Lq);
this.Z.Kf(9);this.XT.H(PY);this.XT.Aj(true);this.XT.U(A.aaR(A.acf.Gf));this.XU.H(
Ks);this.XU.Aj(true);this.XU.U(A.aaR(A.acf.A66));this.Vk.H(N8);this.Vk.Aj(true);
this.Vk.U(A.aaR(A.acf.Tk));this.XK.H(PZ);this.XK.Aj(true);this.XK.U(A.aaR(A.acf.
Tj));this.Vl.H(MB);this.Vl.Aj(true);this.Vl.U(A.aaR(A.acf.AO6));this.XI.H(ST);this.
XI.Aj(true);this.XI.U(A.aaR(A.acf.Animal));this.XN.H(Ks);this.XN.Aj(true);this.XN.
U(A.aaR(A.acf.A6M));this.Tw.H(UC);this.Tw.Ar(true);this.Tw.Aj(true);this.Tw.Y(true
);this.Tw.U(A.aaR(A.acf.A5y));this.XM.H(ZE);this.XM.Aj(true);this.XM.U(A.aaR(A.acf.
Device));this.XV.H(WG);this.XV.Aj(true);this.XV.U(A.aaR(A.acf.Settings));this.Aw.
H(IK);this.J(this.DP,0);this.J(this.Z,0);this.J(this.XT,0);this.J(this.XU,0);this.
J(this.Vk,0);this.J(this.XK,0);this.J(this.Vl,0);this.J(this.XI,0);this.J(this.XN
,0);this.J(this.Tw,0);this.J(this.XM,0);this.J(this.XV,0);this.J(this.Aw,0);this.
N.Cv=[this,this.By7];this.N.Ch=[this,this.Xi];this.Z.Ej=[this,this.G8];this.XT.AN=[
this,this.Ia];this.XT.Dz(A.aaL(A.ach.AC0));this.XU.AN=[this,this.Ia];this.XU.Dz(
A.aaL(A.ach.AC3));this.Vk.AN=[this,this.Ia];this.Vk.Dz(A.aaL(A.ach.AO_));this.XK.
AN=[this,this.Ia];this.XK.Dz(A.aaL(A.ach.APi));this.Vl.AN=[this,this.Ia];this.Vl.
Dz(A.aaL(A.ach.APH));this.XI.AN=[this,this.Ia];this.XI.Dz(A.aaL(A.ach.APb));this.
XN.AN=[this,this.Ia];this.XN.Dz(A.aaL(A.ach.APO));this.Tw.AN=[this,this.Ia];this.
Tw.Dz(A.aaL(A.ach.APw));this.XM.AN=[this,this.Ia];this.XM.Dz(A.aaL(A.ach.APt));this.
XV.AN=[this,this.Ia];this.XV.Dz(A.aaL(A.ach.AP6));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.DP._Done();this.Z._Done();this.XT._Done();this.XU._Done(
);this.Vk._Done();this.XK._Done();this.Vl._Done();this.XI._Done();this.XN._Done(
);this.Tw._Done();this.XM._Done();this.XV._Done();this.Aw._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DP._ReInit();this.Z._ReInit(
);this.XT._ReInit();this.XU._ReInit();this.Vk._ReInit();this.XK._ReInit();this.Vl.
_ReInit();this.XI._ReInit();this.XN._ReInit();this.Tw._ReInit();this.XM._ReInit(
);this.XV._ReInit();this.Aw._ReInit();this.XT.U(A.aaR(A.acf.Gf));this.XU.U(A.aaR(
A.acf.A66));this.Vk.U(A.aaR(A.acf.Tk));this.XK.U(A.aaR(A.acf.Tj));this.Vl.U(A.aaR(
A.acf.AO6));this.XI.U(A.aaR(A.acf.Animal));this.XN.U(A.aaR(A.acf.A6M));this.Tw.U(
A.aaR(A.acf.A5y));this.XM.U(A.aaR(A.acf.Device));this.XV.U(A.aaR(A.acf.Settings)
);this.CT();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeScreen"};C.QZ={Number:null,I6:null,II:null,Tp:null,Asb:0,Init:
function(aArg){var B;A.zX([this,this.BaL],[B=A._GetAutoObject(A.Device.Device),B.
ARZ,B.AZt],0);A.pe([this,this.BaL],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);
this.AnI();},Cw:function(G){A._GetAutoObject(A.Device.Device).Ahm();},EV:function(
G){A._GetAutoObject(A.Device.Device).AnA();},AlD:function(G){var F;this.Am();this.
Tp.Ar(A._GetAutoObject(A.Device.Device).ScanState===1);if(A._GetAutoObject(A.Device.
Device).ScanState===2)A._GetAutoObject(A.Device.Helper).Ad1.Ar(true);if(!this.Tp.
Bv)(F=this.Tp.Q,F[2].call(F[0],this.Tp.B1));},BaL:function(s){this.AlD(s);},AnI:
function(){switch(A._GetAutoObject(A.Device.Device).ScanState){case 4:this.Background.
L(A.jb.FZ);break;case 3:this.Background.L(A.jb.H1);break;default:this.Background.
L(A.jb.CF);}},Aki:function(E){if(this.Asb===E)return;this.Asb=E;this.I6.Aki(E);}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Number={
I:this},0);C.I6._Init.call(this.I6={I:this},0);A.acg.An._Init.call(this.II={I:this
},0);A.acl.Ga._Init.call(this.Tp={I:this},0);this.__proto__=C.QZ;var B;this.Background.
L(A.jb.CF);this.N.Y(false);this.Number.H(UD);this.Number.KM(true);this.Number.L(
A.jb.Text);this.I6.H(ZF);this.I6.Aki(0);this.II.H(WH);this.II.L(A.jb.AR);this.II.
Y5(true);this.Tp.Fe(1750);this.Tp.T9(750);this.Tp.Akd(0);this.Tp.Ar(true);this.Tp.
B1=3;this.J(this.Number,0);this.J(this.I6,0);this.J(this.II,0);this.Number.S(A.aaL(
A.fl.Ah));this.II.Ax(A.aaL(A.ach.AC2));this.Tp.Q=[B=this.II,B.ARM,B.Cu];this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Number._Done();this.I6._Done();
this.II._Done();this.Tp._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Number._ReInit();this.I6._ReInit();this.II._ReInit();this.
Tp._ReInit();this.Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Number)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScanScreen"};C.Fc={
C5:null,ACM:null,AN:null,Bl:null,Dg:null,Background:null,Mi:null,Oy:null,QO:null
,GZ:null,A4N:true,LB:false,Ky:false,Qg:false,Init:function(aArg){},Bh:function(aSize
){var B;C.G_.Bh.call(this,aSize);this.Mi.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.
QO.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);this.Oy.H(this.QO.M);this.GZ.
H([].concat(0,this.GZ.M.slice(1,4)));this.GZ.H(A.abN(this.GZ.M,aSize[0]));this.GZ.
H(A.abP(this.GZ.M,0));this.GZ.H([].concat(this.GZ.M.slice(0,3),47));},Ai:function(
Ae){var B;C.G_.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20
);var Gt=this.Bl.Bv;if(!G6){this.QO.L(A.jb.AmG);this.GZ.L(A.jb.CF);this.Oy.Y(true
);this.Oy.L(A.jb.AQh);this.Mi.Y(false);}else if(Gt){this.QO.L(A.jb.Bj);this.GZ.L(
A.jb.Bj);this.Oy.Y(false);this.Mi.Y(true);}else if(Fh){this.QO.L(A.jb.Bj);this.GZ.
L(A.jb.Bj);this.Oy.Y(false);this.Mi.Y(true);}else{this.QO.L(A.jb.Text);this.GZ.L(
A.jb.Text);this.Oy.Y(true);this.Oy.L(A.jb.C0);this.Mi.Y(false);}this.LB=G6;this.
Ky=Fh;this.Qg=Gt;},Qf:function(G){this.Am();A.pe(this.AN,this);},Aiw:function(G){
if(this.Dg.AbZ)return;this.Am();if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false
);}this.Bl.Ar(true);},U:function(E){if(this.DE===E)return;this.DE=E;this.GZ.R(E);
},Dz:function(E){if(this.C5===E)return;this.C5=E;this.QO.Ax(E);this.Oy.Ax(E);},AbI:
function(E){if(this.A4N===E)return;this.A4N=E;this.GZ.Y(E);},AbL:function(E){if(
this.ACM===E)return;this.ACM=E;this.Mi.Ax(E);this.Mi.H(A.abK(this.Mi.M,E.FrameSize
));},_Init:function(aArg){C.G_._Init.call(this,aArg);A.Core.Timer._Init.call(this.
Bl={I:this},0);A.Core.BJ._Init.call(this.Dg={I:this},0);A.acg.AJ._Init.call(this.
Background={I:this},0);A.acg.An._Init.call(this.Mi={I:this},0);A.acg.An._Init.call(
this.Oy={I:this},0);A.acg.An._Init.call(this.QO={I:this},0);C.CO._Init.call(this.
GZ={I:this},0);this.__proto__=C.Fc;this.H(ZG);this.Bl.PK(0);this.Bl.We(50);this.
Dg.Filter=1;this.Background.H(WI);this.Background.Y(false);this.Mi.AY(0x14);this.
Mi.L(A.jb.AR);this.Mi.Cu(0);this.Oy.L(A.jb.C0);this.Oy.Cu(1);this.GZ.H(ZH);this.
J(this.Background,0);this.J(this.Mi,0);this.J(this.Oy,0);this.J(this.QO,0);this.
J(this.GZ,0);this.Bl.Ms=[this,this.Qf];this.Dg.BK=[this,this.Aiw];this.Mi.Ax(A.aaL(
A.ach.NM));this.Oy.Ax(A.aaL(A.ach.Au9));this.QO.Ax(A.aaL(A.ach.Au9));this.GZ.S(A.
aaL(A.fl.Ah));this.GZ.A8(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(A.fl.By));this.ACM=A.aaL(
A.ach.NM);this.Init(aArg);},_Done:function(){this.__proto__=C.G_;this.Bl._Done();
this.Dg._Done();this.Background._Done();this.Mi._Done();this.Oy._Done();this.QO.
_Done();this.GZ._Done();C.G_._Done.call(this);},_ReInit:function(){C.G_._ReInit.
call(this);this.Bl._ReInit();this.Dg._ReInit();this.Background._ReInit();this.Mi.
_ReInit();this.Oy._ReInit();this.QO._ReInit();this.GZ._ReInit();this.GZ.S(A.aaL(
A.fl.Ah));this.GZ.A8(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.G_._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.ACM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Bl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GZ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"};C.
Aw={AwA:null,Background:null,OS:null,ArJ:0,AkJ:10,Ajj:100,AQ:0,Aou:true,Bh:function(
aSize){A.Core.O.Bh.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OS.H([].concat(2,this.OS.M.slice(1,4)));this.OS.H(A.abN(this.OS.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.O.Ai.call(this,Ae);var AfI=this.AkJ<this.Ajj;var AIT=(
B=this.M)[3]-B[1];var A1S=10;var AtO=AIT;var A3u=0;if(10>AIT)A1S=AIT;if(this.AkJ<
this.Ajj)AtO=((AtO*this.AkJ)/this.Ajj)|0;if(AtO<A1S)AtO=A1S;if(this.AkJ<this.Ajj
)A3u=((this.BjU()*(AIT-AtO))/(this.Ajj-this.AkJ))|0;this.OS.H(A.abP(this.OS.M,A3u
));this.OS.H([].concat(this.OS.M.slice(0,3),A3u+AtO));this.OS.Y(AfI);this.Background.
Y(AfI);if(!!this.AwA&&(this.Aou!==AfI))A.pe(this.AwA,this);this.Aou=AfI;},BjU:function(
){var E=this.ArJ;var Ht=this.Ajj-this.AkJ;if((Ht>0)&&(E>Ht))E=Ht;if(Ht<=0)E=0;return E;
},Mq:function(E){if(E<0)E=0;if(this.ArJ===E)return;this.ArJ=E;this.Am();},Mr:function(
E){if(E<0)E=0;if(this.AkJ===E)return;this.AkJ=E;this.Am();},Mp:function(E){if(E<
0)E=0;if(this.Ajj===E)return;this.Ajj=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OS.L(E);},Bl4:function(E){if(A.aa0(this.AwA,E))return;this.
AwA=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Background={I:this},0);A.acg.AJ._Init.call(this.OS={I:this},0);this.__proto__=
C.Aw;this.H(ZI);this.Ar(false);this.AQ=A.jb.AR;this.Background.AY(0x0);this.Background.
H(UE);this.Background.L(A.jb.C0);this.OS.AY(0x0);this.OS.H(UE);this.OS.L(A.jb.AR
);this.J(this.Background,0);this.J(this.OS,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.OS._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.OS._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AwA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cq={G$:null,Z:null,Aw:null,An:null,A6c:A.jV,Init:function(aArg){A.pe([this,this.
AAp],this);},Dw:function(G){var B;C.AB.Dw.call(this,G);this.Am();if(!!this.AR&&((
this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);this.AAp(this);},Alz:
function(G){if(!!this.N.Cv)A.pe(this.N.Cv,this);},Apm:function(G){if(!!this.N.Cc
)A.pe(this.N.Cc,this);},AzT:function(G){if(!!this.N.Ch)A.pe(this.N.Ch,this);},E9:
function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[
3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);A.pe([this,this.Bzr],this);},AAp:function(G){
var B;var GL=(C.Ci.isPrototypeOf(B=this.AR)?B:null);this.N.Ho(A.jV);this.N.CS(A.
aaL(A.ach.VE));this.N.Cv=[this,this.Eo];if(!!GL&&!!GL.AlZ){this.N.FC(A.jV);this.
N.Kp.Dl(255);this.N.Arh(GL.Aql);this.N.Cn(GL.Au6);this.N.Ch=GL.AlZ;}else{this.N.
FC(A.jV);this.N.Cn(null);this.N.Ch=null;}if(!!GL&&!!GL.Af7){this.N.B0(GL.Aw4);this.
N.HL.Dl(GL.AwB);this.N.Ana(GL.Amu);this.N.C2(GL.AqA);this.N.Cc=GL.Af7;}else{this.
N.B0(A.jV);this.N.C2(null);this.N.Cc=null;}},JJ:function(E){if(this.A6c===E)return;
this.A6c=E;this.G$.R(E);},Eo:function(G){A._GetAutoObject(C.AX).Fl();},Bzr:function(
G){var B;var Byp=this.Aw.Background.Fd();var BcT=(Byp?this.M[2]-((B=this.Aw.M)[2
]-B[0]):this.M[2]);var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){var AiW=X;
X=X.Ag;if(((AiW.T&0x400)===0x400)){if(!!(A.Core.AjV.isPrototypeOf(AiW)?AiW:null)
){var BcZ=(A.Core.AjV.isPrototypeOf(AiW)?AiW:null);BcZ.DM([BcT,BcZ.Eu[1]]);}else
if(!!(A.Core.El.isPrototypeOf(AiW)?AiW:null)){var BeM=(A.Core.El.isPrototypeOf(AiW
)?AiW:null);BeM.H(A.abN(BeM.M,BcT));}}}},G8:function(G){A.pe([this,this.E9],this
);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.CO._Init.call(this.G$={I:this
},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw._Init.call(this.Aw={I:this},0);
A.acg.An._Init.call(this.An={I:this},0);this.__proto__=C.Cq;this.N.Y(true);this.
G$.H(WJ);this.G$.Ar(false);this.G$.R(A.aaR(A.acf.Settings));this.G$.L(A.jb.Text);
this.Z.H(E4);this.Z.Kf(1);this.Aw.H(IK);this.An.H(Q9);this.An.L(A.jb.Text);this.
J(this.G$,0);this.J(this.Z,0);this.J(this.Aw,0);this.J(this.An,0);this.G$.S(A.aaL(
A.fl.J$));this.G$.A8(A.aaL(A.fl.Ie));this.Z.Ej=[this,this.G8];this.An.Ax(A.aaL(A.
ach.ACt));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.G$._Done();
this.Z._Done();this.Aw._Done();this.An._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.G$._ReInit();this.Z._ReInit();this.Aw._ReInit();this.
An._ReInit();this.G$.R(A.aaR(A.acf.Settings));this.G$.S(A.aaL(A.fl.J$));this.G$.
A8(A.aaL(A.fl.Ie));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsScreen"};C.Aqu={Timer:null,Text:null,Init:
function(aArg){var B;A.zX([this,this.BfB],[B=A._GetAutoObject(A.Device.Helper),B.
UH,B.UI],0);},C8:function(E){C.BP.C8.call(this,E);this.Text.L(E);},BfB:function(
G){this.Text.R(A._GetAutoObject(A.acj.KE).Bhr(A._GetAutoObject(A.Device.Helper).
Dt()));},_Init:function(aArg){C.BP._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Timer={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.Aqu;this.Timer.We(1);this.Timer.Ar(true);this.Text.H(ZJ);this.Text.R(A.jV);this.
J(this.Text,0);this.Timer.Ms=[this,this.BfB];this.Text.S(A.aaL(A.fl.Ah));this.Init(
aArg);},_Done:function(){this.__proto__=C.BP;this.Timer._Done();this.Text._Done(
);C.BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.call(this);this.Timer.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var
B;C.BP._Mark.call(this,D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderTime"};
C.BP={KN:0xFFFFFFFF,LM:0,C8:function(E){if(this.KN===E)return;this.KN=E;},AbH:function(
E){if(this.LM===E)return;this.LM=E;},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.BP;this.H(OX);},_className:"Application::HeaderContent"};
C.N={Vx:null,Vy:null,Vz:null,AgD:null,AgE:null,AgF:null,Cv:null,Ch:null,Cc:null,
Background:null,NA:null,I4:null,Kp:null,HL:null,Pr:null,IX:null,La:null,TM:null,
TN:null,AnD:A.jV,AnE:A.jV,AnF:A.jV,AqB:0,AqC:0,AqD:0,AgX:0,Ze:false,Zd:false,ArP:
false,Ar3:false,Ar2:false,Init:function(aArg){},Ai:function(Ae){if(!!this.Vx)this.
I4.S(this.Vx);if(!!this.Vy)this.Kp.S(this.Vy);if(!!this.Vz)this.HL.S(this.Vz);switch(
this.AgX){case 0:{this.NA.Y(false);this.I4.L(A.jb.Bj);this.Kp.L(A.jb.Bj);this.HL.
L(A.jb.Bj);this.Pr.L(A.jb.Bj);this.IX.L(A.jb.Bj);this.La.L(A.jb.Bj);}break;case 1:{
if(!this.AgD)this.NA.H(A.aaT(this.I4.ARD(),Q_));else this.NA.H(this.Pr.Db());this.
NA.Y(true);this.I4.L(A.jb.Text);this.Kp.L(A.jb.Bj);this.HL.L(A.jb.Bj);this.Pr.L(
A.jb.Text);this.IX.L(A.jb.Bj);this.La.L(A.jb.Bj);}break;case 3:{if(!this.AgF)this.
NA.H(A.aaT(this.HL.ARD(),Q_));else this.NA.H(this.La.Db());this.NA.Y(true);this.
I4.L(A.jb.Bj);this.Kp.L(A.jb.Bj);this.HL.L(A.jb.Text);this.Pr.L(A.jb.Bj);this.IX.
L(A.jb.Bj);this.La.L(A.jb.Text);}break;case 2:{if(!this.AgE)this.NA.H(A.aaT(this.
Kp.ARD(),Q_));else this.NA.H(this.IX.Db());this.NA.Y(true);this.I4.L(A.jb.Bj);this.
Kp.L(A.jb.Text);this.HL.L(A.jb.Bj);this.Pr.L(A.jb.Bj);this.IX.L(A.jb.Text);this.
La.L(A.jb.Bj);}break;default:{this.NA.Y(false);A.ab5("%s",WK);}}if(!!this.Pr.Al){
this.Pr.Y(true);this.I4.Y(false);}else{this.Pr.Y(false);this.I4.Y(true);}if(this.
AnE.length<=0){this.IX.Y(true);this.Kp.Y(false);}else{this.IX.Y(false);this.Kp.Y(
true);}if(!!this.La.Al){this.La.Y(true);this.HL.Y(false);}else{this.La.Y(false);
this.HL.Y(true);}},Ho:function(E){if(this.AnD===E)return;this.AnD=E;this.I4.R(E);
this.Am();},FC:function(E){if(this.AnE===E)return;this.AnE=E;this.Kp.R(E);this.Am(
);},B0:function(E){if(this.AnF===E)return;this.AnF=E;this.HL.R(E);this.Am();},AEB:
function(E){if(this.AgX===E)return;this.AgX=E;this.Am();},AEr:function(E){if(this.
Vx===E)return;this.Vx=E;this.I4.S(E);this.Am();},Arh:function(E){if(this.Vy===E)
return;this.Vy=E;this.Kp.S(E);this.Am();},Ana:function(E){if(this.Vz===E)return;
this.Vz=E;this.HL.S(E);this.Am();},A2I:function(G){this.Am();},CS:function(E){if(
this.AgD===E)return;this.AgD=E;this.Pr.Ax(E);this.Am();},Cn:function(E){if(this.
AgE===E)return;this.AgE=E;this.IX.Ax(E);this.Am();},C2:function(E){if(this.AgF===
E)return;this.AgF=E;this.La.Ax(E);this.Am();},OJ:function(E){if(this.Ar2===E)return;
this.Ar2=E;this.TM.Y(E);if(E)this.I4.H([].concat(this.TM.M[2],this.I4.M.slice(1,
4)));else this.I4.H([].concat(0,this.I4.M.slice(1,4)));this.Am();},OK:function(E
){if(this.Ar3===E)return;this.Ar3=E;this.TN.Y(E);if(E)this.HL.H(A.abN(this.HL.M,
this.TN.M[0]));else this.HL.H(A.abN(this.HL.M,this.M[2]));this.Am();},Blt:function(
E){if(this.AqB===E)return;this.AqB=E;this.Pr.Cu(E);this.Am();},ASm:function(E){if(
this.AqC===E)return;this.AqC=E;this.IX.Cu(E);this.Am();},A9e:function(E){if(this.
AqD===E)return;this.AqD=E;this.La.Cu(E);this.Am();},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);A.acg.AJ.
_Init.call(this.NA={I:this},0);C.CO._Init.call(this.I4={I:this},0);C.CO._Init.call(
this.Kp={I:this},0);C.CO._Init.call(this.HL={I:this},0);A.acg.An._Init.call(this.
Pr={I:this},0);A.acg.An._Init.call(this.IX={I:this},0);A.acg.An._Init.call(this.
La={I:this},0);A.acg.An._Init.call(this.TM={I:this},0);A.acg.An._Init.call(this.
TN={I:this},0);this.__proto__=C.N;this.H(BC);this.Background.AY(0x3F);this.Background.
H(BC);this.Background.L(A.jb.AdO);this.NA.H(WM);this.NA.L(A.jb.C0);this.NA.Y(false
);this.I4.AY(0x14);this.I4.H(WN);this.I4.A4(0x12);this.Kp.AY(0x14);this.Kp.H(WO);
this.Kp.A4(0x12);this.HL.H(ZK);this.Pr.H(WQ);this.IX.H(WR);this.La.H(SU);this.La.
Y(false);this.TM.H(ZL);this.TM.Y(false);this.TN.H(ZM);this.TN.Y(false);this.J(this.
Background,0);this.J(this.NA,0);this.J(this.I4,0);this.J(this.Kp,0);this.J(this.
HL,0);this.J(this.Pr,0);this.J(this.IX,0);this.J(this.La,0);this.J(this.TM,0);this.
J(this.TN,0);this.I4.S(A.aaL(A.fl.Ak));this.I4.A8(A.aaL(A.fl.By));this.I4.QT([this
,this.A2I]);this.Kp.S(A.aaL(A.fl.Ak));this.Kp.A8(A.aaL(A.fl.By));this.Kp.QT([this
,this.A2I]);this.HL.S(A.aaL(A.fl.Ak));this.HL.A8(A.aaL(A.fl.By));this.HL.QT([this
,this.A2I]);this.Vx=A.aaL(A.fl.Ak);this.Vy=A.aaL(A.fl.Ak);this.Vz=A.aaL(A.fl.Ak);
this.Pr.Ax(null);this.IX.Ax(null);this.La.Ax(null);this.TM.Ax(A.aaL(A.ach.AL7));
this.TN.Ax(A.aaL(A.ach.Ai9));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();this.NA._Done();this.I4._Done();this.Kp._Done();this.
HL._Done();this.Pr._Done();this.IX._Done();this.La._Done();this.TM._Done();this.
TN._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.NA._ReInit();this.I4._ReInit();this.Kp._ReInit(
);this.HL._ReInit();this.Pr._ReInit();this.IX._ReInit();this.La._ReInit();this.TM.
_ReInit();this.TN._ReInit();this.I4.S(A.aaL(A.fl.Ak));this.I4.A8(A.aaL(A.fl.By));
this.Kp.S(A.aaL(A.fl.Ak));this.Kp.A8(A.aaL(A.fl.By));this.HL.S(A.aaL(A.fl.Ak));this.
HL.A8(A.aaL(A.fl.By));this.AEr(A.aaL(A.fl.Ak));this.Arh(A.aaL(A.fl.Ak));this.Ana(
A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
Vx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Vz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgD)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AgE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AgF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cv)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ch)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Cc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.NA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.La)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::Footer"};C.ACx={Init:function(aArg
){var B;A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper),B.Aq3,B.Akh],0);
A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper),B.A8i,B.AE0],0);A.pe([this
,this.Nf],this);},D$:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ahi)this.
AbK(A._GetAutoObject(A.Device.Helper).Ahi.AOf());else this.AbK(-1);if(!!A._GetAutoObject(
A.Device.Helper).Uj)this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).AkH(A._GetAutoObject(
A.Device.Helper).Uj.Id));else this.OnSetAnimalId(-1);},_Init:function(aArg){C.AmA.
_Init.call(this,aArg);this.__proto__=C.ACx;this.Init(aArg);},_className:"Application::HeaderScannedIds"
};C.AGb={Eq:null,Ea:null,FM:null,XG:null,Tq:null,Iw:null,Ix:null,Init:function(aArg
){},Wl:function(G){var B;C.DL.Wl.call(this,G);var AJ_=this.AyF(A._GetAutoObject(
A.Device.Helper).Uo.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var AKW=
this.AyF(A._GetAutoObject(A.Device.Helper).Uq.Get(A._GetAutoObject(A.Device.Helper
).W.AnimalType));var Byf=this.AyF(A._GetAutoObject(A.Device.Device).ZA);this.Eq.
H(A.abP(this.Eq.M,0));this.Eq.H([].concat(this.Eq.M.slice(0,3),((B=this.M)[3]-B[
1])-AJ_));this.Ix.H(A.abO(this.Ix.M,this.Eq.M[3]-((((B=this.Ix.M)[3]-B[1])/2)|0)
));this.Ea.H(A.abP(this.Ea.M,this.Eq.M[3]));this.Ea.H([].concat(this.Ea.M.slice(
0,3),((B=this.M)[3]-B[1])-AKW));this.Iw.H(A.abO(this.Iw.M,(this.Ea.M[3]-((((B=this.
Iw.M)[3]-B[1])/2)|0))+2));this.FM.H(A.abP(this.FM.M,this.Ea.M[3]));this.FM.H([].
concat(this.FM.M.slice(0,3),((B=this.M)[3]-B[1])-Byf));this.Tq.H(A.abO(this.Tq.M
,this.FM.M[3]-((((B=this.Tq.M)[3]-B[1])/2)|0)));this.XG.H(A.abP(this.XG.M,this.FM.
M[3]));this.XG.H([].concat(this.XG.M.slice(0,3),(B=this.M)[3]-B[1]));},AI6:function(
Aoq){return A._GetAutoObject(A.Device.Converter).AkD(Aoq);},AJE:function(){return A.
_GetAutoObject(A.acj.Temperature).Alj();},_Init:function(aArg){C.DL._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Eq={I:this},0);A.acg.AJ._Init.call(this.Ea={I:this
},0);A.acg.AJ._Init.call(this.FM={I:this},0);A.acg.AJ._Init.call(this.XG={I:this
},0);A.acg.AJ._Init.call(this.Tq={I:this},0);A.acg.AJ._Init.call(this.Iw={I:this
},0);A.acg.AJ._Init.call(this.Ix={I:this},0);this.__proto__=C.AGb;this.Eq.AY(0xD
);this.Eq.H(Acq);this.Eq.L(A.jb.FZ);this.Ea.AY(0xD);this.Ea.H(UF);this.Ea.L(A.jb.
H1);this.FM.AY(0xD);this.FM.H(ZN);this.FM.L(A.jb.ET);this.XG.AY(0xD);this.XG.H(Afe
);this.XG.L(A.jb.Ae9);this.Tq.AY(0xD);this.Tq.H(ZO);this.Tq.AvR(A.jb.Ae9);this.Tq.
AvS(A.jb.Ae9);this.Tq.AvU(A.jb.ET);this.Tq.AvT(A.jb.ET);this.Iw.AY(0xD);this.Iw.
H(WS);this.Iw.AvR(A.jb.ET);this.Iw.AvS(A.jb.ET);this.Iw.AvU(A.jb.H1);this.Iw.AvT(
A.jb.H1);this.Ix.AY(0xD);this.Ix.H(ZP);this.Ix.AvR(A.jb.H1);this.Ix.AvS(A.jb.H1);
this.Ix.AvU(A.jb.FZ);this.Ix.AvT(A.jb.FZ);this.J(this.Eq,-1);this.J(this.Ea,-1);
this.J(this.FM,-1);this.J(this.XG,-1);this.J(this.Tq,-1);this.J(this.Iw,-1);this.
J(this.Ix,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DL;this.Eq._Done(
);this.Ea._Done();this.FM._Done();this.XG._Done();this.Tq._Done();this.Iw._Done(
);this.Ix._Done();C.DL._Done.call(this);},_ReInit:function(){C.DL._ReInit.call(this
);this.Eq._ReInit();this.Ea._ReInit();this.FM._ReInit();this.XG._ReInit();this.Tq.
_ReInit();this.Iw._ReInit();this.Ix._ReInit();},_Mark:function(D){var B;C.DL._Mark.
call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Iw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TemperatureGraph"};C.Ci={AuN:null,Amu:null,APD:null
,AqA:null,Aql:null,Au6:null,AN:null,Af7:null,AlZ:null,N:null,Bl:null,QF:null,Aw4:
A.jV,AT3:false,AF1:false,AoT:false,AwB:255,LB:false,Ky:false,Qg:false,Ai:function(
Ae){var B;C.OQ.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20
);var Ir=((Ae&0x40)===0x40);var Gt=this.Bl.Bv;var FG=A.jb.CF;var GJ=A.jb.Text;if(
this.Hb){FG=A.jb.Bj;GJ=A.jb.Text;}if(!G6){this.Background.L(A.jb.C0);this.V.L(A.
jb.CF);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(Ir){this.
Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(Fh){this.Background.L(A.jb.AmG);
this.V.L(A.jb.Bj);}else{this.Background.L(FG);this.V.L(GJ);}this.LB=G6;this.Ky=Fh;
this.Qg=Gt;this.AoT=Ir;},Qf:function(G){this.Am();A.pe(this.AN,this);},Bvc:function(
s){this.Qf(s);},IP:function(G){if(this.QF.AbZ)return;this.Am();if(this.Bl.Bv){A.
pe(this.AN,this);this.Bl.Ar(false);}this.Bl.Ar(true);},AsK:function(s){this.IP(s
);},Aex:function(E){if(A.aa0(this.Af7,E))return;this.Af7=E;},A9H:function(E){if(
this.Aw4===E)return;this.Aw4=E;},Wf:function(E){if(this.AuN===E)return;this.AuN=
E;},Wg:function(E){if(this.Amu===E)return;this.Amu=E;},A9o:function(E){if(this.AwB===
E)return;this.AwB=E;},Gg:function(E){if(A.aaZ(this.N,E))return;this.N=E;},U:function(
E){if(this.DE===E)return;this.DE=E;this.AKF();},A2g:function(G){},BER:function(s
){this.A2g(s);},Akc:function(E){if(this.AqA===E)return;this.AqA=E;},LT:function(
E){if(A.aa0(this.AlZ,E))return;this.AlZ=E;},Blm:function(E){if(this.Aql===E)return;
this.Aql=E;},LV:function(E){if(this.Au6===E)return;this.Au6=E;},Y_:function(E){if(
this.AF1===E)return;this.AF1=E;this.AKF();},AKF:function(){var B;var Qm=this.DE;
if(this.AF1)Qm=Qm+A.aaR(A.acf.Colon);if(this.AT3)Qm=Qm+ZQ;this.V.R(Qm);},ASK:function(
E){if(this.AT3===E)return;this.AT3=E;this.AKF();},_Init:function(aArg){C.OQ._Init.
call(this,aArg);A.Core.Timer._Init.call(this.Bl={I:this},0);A.Core.BJ._Init.call(
this.QF={I:this},0);this.__proto__=C.Ci;this.Bl.PK(0);this.Bl.We(50);this.Bl.Ar(
false);this.QF.Filter=1;this.Bl.Ms=[this,this.Bvc];this.QF.BK=[this,this.AsK];this.
AuN=A.aaL(A.fl.Ak);this.Amu=A.aaL(A.fl.Ak);this.APD=A.aaL(A.ach.EU);this.Aql=A.aaL(
A.fl.Ak);},_Done:function(){this.__proto__=C.OQ;this.Bl._Done();this.QF._Done();
C.OQ._Done.call(this);},_ReInit:function(){C.OQ._ReInit.call(this);this.Bl._ReInit(
);this.QF._ReInit();this.Wf(A.aaL(A.fl.Ak));this.Wg(A.aaL(A.fl.Ak));this.Blm(A.aaL(
A.fl.Ak));},_Mark:function(D){var B;C.OQ._Mark.call(this,D);if((B=this.AuN)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Amu)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.APD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqA)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Aql)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Af7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AlZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"};C.
Dm={Q:null,AmQ:null,AmS:null,Hn:null,HX:null,AK:0,Ge:0,FS:100,Fr:0,Init:function(
aArg){},IP:function(G){this.Fr=1;C.D_.IP.call(this,G);},Bh:function(aSize){C.D_.
Bh.call(this,aSize);this.Hn.H([0,aSize[1]-40,40,aSize[1]]);this.HX.H([].concat(A.
abe(aSize,Aff),aSize));},Ai:function(Ae){var B;C.D_.Ai.call(this,Ae);var Fh=((Ae&
0x20)===0x20);var Gt=this.Bl.Bv;this.Hn.L(this.V.AQ);this.HX.L(this.V.AQ);this.Hn.
Y((Fh||Gt)&&(this.AK>this.Ge));this.HX.Y((Fh||Gt)&&(this.AK<this.FS));if(this.Fr===
6)this.Hn.L(A.jb.ET);if(this.Fr===7)this.HX.L(A.jb.ET);},Bd0:function(G){this.Fr=
6;this.Am();if(this.Bl.Bv){A.pe([this,this.Ax8],this);this.Bl.Ar(false);}this.Bl.
Ar(true);},Qf:function(G){if(this.Fr===6)A.pe([this,this.Ax8],this);if(this.Fr===
7)A.pe([this,this.Ax9],this);if(this.Fr===1)A.pe(this.AN,this);this.Fr=0;this.Am(
);},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcA:function(
s){this.De(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcA],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcA],E,0);if(!!E)A.pe([this,
this.AcA],this);},Bd1:function(G){this.Fr=7;this.Am();if(this.Bl.Bv){A.pe([this,
this.Ax9],this);this.Bl.Ar(false);}this.Bl.Ar(true);},J0:function(G){this.Fr=0;}
,Ax9:function(s){this.J0(s);},JV:function(G){this.Fr=0;},Ax8:function(s){this.JV(
s);},Bx:function(E){if(E<this.Ge)E=this.Ge;if(E>this.FS)E=this.FS;if(this.AK===E
)return;this.AK=E;this.Am();},Bad:function(Aq){this.Bx(Aq);},Gn:function(E){if(this.
Ge===E)return;this.Ge=E;this.Am();},E1:function(E){if(this.FS===E)return;this.FS=
E;this.Am();},T5:function(){return this.AK;},_Init:function(aArg){C.D_._Init.call(
this,aArg);A.Core.BJ._Init.call(this.AmQ={I:this},0);A.Core.BJ._Init.call(this.AmS={
I:this},0);A.acg.An._Init.call(this.Hn={I:this},0);A.acg.An._Init.call(this.HX={
I:this},0);this.__proto__=C.Dm;this.H(JP);this.AmQ.Filter=6;this.AmS.Filter=7;this.
Background.H(JP);this.V.H(Acr);this.V.R(Lr);this.Hn.H(Ahz);this.HX.H(AnQ);this.HX.
Cu(1);this.J(this.Hn,0);this.J(this.HX,0);this.AmQ.BK=[this,this.Bd0];this.AmQ.DS=[
this,this.Bd0];this.AmS.BK=[this,this.Bd1];this.AmS.DS=[this,this.Bd1];this.V.S(
A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(null);this.Hn.Ax(A.aaL(A.ach.
Al9));this.HX.Ax(A.aaL(A.ach.Al9));this.Init(aArg);},_Done:function(){this.__proto__=
C.D_;this.AmQ._Done();this.AmS._Done();this.Hn._Done();this.HX._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.AmQ._ReInit();this.
AmS._ReInit();this.Hn._ReInit();this.HX._ReInit();this.V.S(A.aaL(A.fl.Ah));this.
V.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmQ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AmS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hn)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.HX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Do:function(){return-1;},C4:function(aIndex){return-1;},F$:function(
aIndex){return A.jV;},DK:function(A3){return-1;},Hl:function(){return-1;},At:function(
E){this.Q=E;},B_:function(Aq){this.At(Aq);},ACa:function(aIndex){return null;},ACc:
function(aIndex){return 0;},B9:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.I2={AwW:null
,BR:null,AGp:A.jV,AUE:A.jV,AjI:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dm.Ai.call(this,Ae);if(!this.AwW){this.BR.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BR.R(((F=this.Q,F[1].call(F[0])).toFixed()+CL)+this.
AUE);else this.BR.R(((F=this.Q,F[1].call(F[0])).toFixed()+CL)+this.AGp);}}else(B=
this.AwW)?B[1].call(B[0],this):null;},J0:function(G){var F;var BO=this.AK;C.Dm.J0.
call(this,G);this.Bx(this.AK+this.AjI);if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AK));A.abo(this.Q,0);}},JV:function(G){var F;var BO=this.AK;C.
Dm.JV.call(this,G);this.Bx(this.AK-this.AjI);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Kj:function(E){if(this.AGp===E)return;
this.AGp=E;this.Am();},KL:function(E){if(this.AUE===E)return;this.AUE=E;this.Am(
);},ASn:function(E){if(this.AjI===E)return;this.AjI=E;},A9E:function(E){if(A.aa0(
this.AwW,E))return;this.AwW=E;},_Init:function(aArg){C.Dm._Init.call(this,aArg);
C.CO._Init.call(this.BR={I:this},0);this.__proto__=C.I2;this.H(JP);this.BR.H(N9);
this.J(this.BR,-1);this.BR.S(A.aaL(A.fl.Ah));this.BR.A8(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dm;this.BR._Done();C.Dm._Done.call(this
);},_ReInit:function(){C.Dm._ReInit.call(this);this.BR._ReInit();this.BR.S(A.aaL(
A.fl.Ah));this.BR.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dm._Mark.call(this
,D);if((B=this.AwW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BX={AC:
null,Ds:null,HD:null,CT:function(){this.Ai(this.T);},Init:function(aArg){},Bh:function(
aSize){var B;C.Dm.Bh.call(this,aSize);this.Ds.H([this.Hn.M[2]-10,this.Hn.M[1],this.
HX.M[0]+10,this.Hn.M[3]]);this.Ds.AEC((B=this.Ds.M)[2]-B[0]);this.Ds.Hy(this.Ds.
Gi,true,null,null);},Ai:function(Ae){var B;C.Dm.Ai.call(this,Ae);var Fh=((Ae&0x20
)===0x20);var Gt=this.Bl.Bv;this.Ds.Abh(0,this.Ds.AV-1);this.Hn.Y(Fh||Gt);this.HX.
Y(Fh||Gt);},De:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DK((F=this.
Q,F[1].call(F[0]))));},J0:function(G){var F;var BO=this.AK;C.Dm.J0.call(this,G);
this.Bx(this.AK+1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C4(this.AK)));A.abo(this.Q,0);}},JV:function(G){var F;var BO=this.AK;
C.Dm.JV.call(this,G);this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C4(this.AK)));A.abo(this.Q,0);}},Bx:function(E){
var Ql=0;if(E<this.Ge){E=this.FS;Ql=-this.Ds.VQ*this.Ds.AV;}if(E>this.FS){E=this.
Ge;Ql=this.Ds.VQ;}C.Dm.Bx.call(this,E);if(!!Ql)this.Ds.Gh(Ql);this.Ds.GX(this.AK
);if(this.Ds.Bin())this.Ds.BnP(false,false);this.Ds.Hy(this.Ds.Gi,true,this.HD,null
);},Hc:function(G){var B;var FW=this.Ds.GT;var Cx=(C.CO.isPrototypeOf(B=this.Ds.
Ce)?B:null);if(!Cx)return;Cx.S(this.V.B5);Cx.A8(this.V.Amt);Cx.CB(this.V.Aqk);Cx.
L(this.V.AQ);if(!!this.AC)Cx.R(this.AC.F$(FW));else Cx.R(WT);Cx.H(A.abK(Cx.M,[this.
Ds.VQ,(B=this.Ds.M)[3]-B[1]]));},BuP:function(s){this.Hc(s);},CG:function(E){if(
this.AC===E)return;this.AC=E;if(!!this.AC){this.Gn(0);this.E1(this.AC.Do()-1);this.
Ds.Jn(this.AC.Do());this.Ds.Abh(0,this.Ds.AV-1);}},_Init:function(aArg){C.Dm._Init.
call(this,aArg);A.Core.Ds._Init.call(this.Ds={I:this},0);A.acl.Ga._Init.call(this.
HD={I:this},0);this.__proto__=C.BX;this.H(JP);this.Ds.NU(C.CO);this.HD.Wi(23);this.
HD.HG(1);this.HD.Fe(200);this.J(this.Ds,0);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.
aaL(A.fl.Ak));this.Ds.Hc=[this,this.BuP];this.Init(aArg);},_Done:function(){this.
__proto__=C.Dm;this.Ds._Done();this.HD._Done();C.Dm._Done.call(this);},_ReInit:function(
){C.Dm._ReInit.call(this);this.Ds._ReInit();this.HD._ReInit();this.V.S(A.aaL(A.fl.
Ah));this.V.A8(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var B;C.Dm._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ds)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroup"};C.Sy={Fv:null,OB:null,Dd:null,Au:null,Jl:null,
HC:null,Pl:null,Vu:null,QN:null,X3:null,PV:null,Gm:null,Gl:null,FN:0,A5:0,ArM:false
,Bij:false,Init:function(aArg){},Ai:function(Ae){C.Dm.Ai.call(this,Ae);this.Hn.Y(
false);this.HX.Y(false);var Atg=A.jV;if(!!this.Dd){this.Pl.R(this.Au.Format(AnR)
);this.QN.R(this.Au.Format(AhA));this.PV.R(this.Au.Format(AhB));}if(this.A5===1){
this.HC.Y(true);this.HC.H(this.Pl.M);this.HC.L(this.V.AQ);this.Pl.L(this.Background.
AQ);this.QN.L(this.V.AQ);this.PV.L(this.V.AQ);Atg=A.aaR(A.acf.A47);}else if(this.
A5===2){this.HC.Y(true);this.HC.H(this.QN.M);this.HC.L(this.V.AQ);this.Pl.L(this.
V.AQ);this.QN.L(this.Background.AQ);this.PV.L(this.V.AQ);Atg=A.aaR(A.acf.Ha);}else
if(this.A5===3){this.HC.Y(true);this.HC.H(this.PV.M);this.HC.L(this.V.AQ);this.Pl.
L(this.V.AQ);this.QN.L(this.V.AQ);this.PV.L(this.Background.AQ);Atg=A.aaR(A.acf.
Year);}else{this.HC.Y(false);this.Pl.L(this.V.AQ);this.X3.L(this.V.AQ);this.QN.L(
this.V.AQ);this.Vu.L(this.V.AQ);this.PV.L(this.V.AQ);}if(Atg.length>0){if(this.AF1
)this.V.R((((this.DE+Acs)+Atg)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else
this.V.R(((this.DE+Acs)+Atg)+String.fromCharCode(0x29));}else this.AKF();},Qf:function(
G){if(this.Fr===1)A.pe([this,this.UR],this);else if(this.Fr===4)A.pe([this,this.
Aik],this);else if(this.Fr===5)A.pe([this,this.Ah7],this);C.Dm.Qf.call(this,G);}
,J0:function(G){switch(this.A5){case 0:C.Dm.J0.call(this,G);break;case 3:break;default:
this.Ada(this);}},JV:function(G){switch(this.A5){case 0:C.Dm.JV.call(this,G);break;
default:this.Ah6(this);}},Adc:function(G){var F;if(!!this.Dd)this.T7((F=this.Dd,
F[1].call(F[0])));},AbN:function(E){if(A.aaZ(this.Dd,E))return;if(!!this.Dd)A.z$([
this,this.Adc],this.Dd,0);this.Dd=E;if(!!E)A.zX([this,this.Adc],E,0);if(!!E)A.pe([
this,this.Adc],this);},T7:function(E){if(this.FN===E)return;this.FN=E;this.Au.Initialize(
this.FN);this.Am();},Ada:function(G){this.Fr=1;this.Am();if(this.Bl.Bv){A.pe([this
,this.UR],this);this.Bl.Ar(false);}this.Bl.Ar(true);},BaJ:function(s){this.Ada(s
);},UR:function(G){this.Ep(this.A5+1);},AlC:function(G){this.Fr=4;this.Am();if(this.
Bl.Bv){A.pe([this,this.Aik],this);this.Bl.Ar(false);}this.Bl.Ar(true);},AlB:function(
G){this.Fr=5;this.Am();if(this.Bl.Bv){A.pe([this,this.Ah7],this);this.Bl.Ar(false
);}this.Bl.Ar(true);},Aik:function(G){var B;var F;var BO=this.FN;switch(this.A5){
case 1:{if(this.ArM){var AAz=A._NewObject(A.Core.AnG,0);AAz.J8=1;if(this.Au.J(AAz
).JH()>A._GetAutoObject(A.Device.Helper).Dt())return;}if(this.Au.GB<this.Au.Y3()
)this.Au.Ll(this.Au.GB+1);}break;case 2:{if(this.ArM){var AAz=A._NewObject(A.Core.
AnG,0);AAz.J8=this.Au.Y3();if(this.Au.J(AAz).JH()>A._GetAutoObject(A.Device.Helper
).Dt())return;}this.Au.T$(this.Au.Ha+1);if(this.Au.Y3()<this.Au.GB)this.Au.Ll(this.
Au.Y3());}break;case 3:{if(this.ArM){var A0H=A._NewObject(A.Core.Bt,0);A0H.Initialize(
this.Au.JH());A0H.Year+=1;if(A0H.JH()>A._GetAutoObject(A.Device.Helper).Dt())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
T7(((B=(this.Au.JH()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dd)(F=this.
Dd,F[2].call(F[0],this.FN));A.abo(this.Dd,0);}},Ah7:function(G){var B;var F;var BO=
this.FN;if(this.A5===1)this.Au.Ll(this.Au.GB-1);if(this.A5===2){this.Au.T$(this.
Au.Ha-1);if(this.Au.Y3()<this.Au.GB)this.Au.Ll(this.Au.Y3());}if(this.A5===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.T7(((B=(this.Au.JH()|
0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dd)(F=this.Dd,F[2].call(F[0],
this.FN));A.abo(this.Dd,0);}},DD:function(G){var F;if(!this.N)return;switch(this.
A5){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[
0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[
0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=
null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aec));(F=this.N,F[1].call(F[0])).
B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.UR];}break;case 2:{(F=this.N,F[
1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N
,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(A.aaL(A.ach.AmC
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=[this,this.
Ah6];(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aec));(F=this.N,F[1].call(F[0])).
B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.UR];}break;case 3:{(F=this.N,F[
1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N
,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(A.aaL(A.ach.AmC
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=[this,this.
Ah6];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).B0(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.Fv.Aks((F=this.N,F[1].call(F[
0])));}},AEY:function(E){if(this.ArM===E)return;this.ArM=E;},FJ:function(G){this.
Ep(1);},G5:function(G){this.Ep(0);},Ep:function(EF){var F;var AzH=this.A5;if(!this.
A5){this.Fv.Aje((F=this.N,F[1].call(F[0])));if((EF===1)&&!this.FN){var BO=this.FN;
this.T7(A._GetAutoObject(A.Device.Helper).Dt());if(this.FN!==BO){if(!!this.Dd)(F=
this.Dd,F[2].call(F[0],this.FN));A.abo(this.Dd,0);}}}this.A5=EF;this.Bij=true;if((
this.A5<0)||(this.A5>3))this.A5=0;this.DD(this);this.Gm.Bv=!!this.A5;this.Gl.Bv=
!!this.A5;if((!!AzH&&!this.A5)&&!!this.OB)A.pe(this.OB,this);this.Am();},Ah6:function(
G){if(this.A5>1)this.Ep(this.A5-1);},_Init:function(aArg){C.Dm._Init.call(this,aArg
);A.Core.Bt._Init.call(this.Au={I:this},0);A.Core.BJ._Init.call(this.Jl={I:this}
,0);A.acg.AJ._Init.call(this.HC={I:this},0);A.acg.Text._Init.call(this.Pl={I:this
},0);A.acg.Text._Init.call(this.Vu={I:this},0);A.acg.Text._Init.call(this.QN={I:
this},0);A.acg.Text._Init.call(this.X3={I:this},0);A.acg.Text._Init.call(this.PV={
I:this},0);A.Core.BJ._Init.call(this.Gm={I:this},0);A.Core.BJ._Init.call(this.Gl={
I:this},0);this.__proto__=C.Sy;this.H(UG);this.V.R(AnS);this.Hn.Y(false);this.HX.
Y(false);this.Jl.Filter=1;this.HC.H(AnT);this.HC.L(0x55FFFFFF);this.Pl.H(AnU);this.
Pl.I0(true);this.Pl.A4(0x14);this.Vu.H(AnV);this.Vu.I0(true);this.Vu.A4(0x14);this.
Vu.R(Afg);this.QN.H(AnW);this.QN.I0(true);this.X3.H(Afh);this.X3.I0(true);this.X3.
R(Afg);this.PV.H(Asj);this.PV.I0(true);this.PV.A4(0x11);this.Gm.Filter=4;this.Gm.
Bv=false;this.Gl.Filter=5;this.Gl.Bv=false;this.J(this.HC,0);this.J(this.Pl,0);this.
J(this.Vu,0);this.J(this.QN,0);this.J(this.X3,0);this.J(this.PV,0);this.Jl.BK=[this
,this.BaJ];this.Pl.S(A.aaL(A.fl.EB));this.Vu.S(A.aaL(A.fl.EB));this.QN.S(A.aaL(A.
fl.EB));this.X3.S(A.aaL(A.fl.EB));this.PV.S(A.aaL(A.fl.EB));this.Gm.BK=[this,this.
AlC];this.Gm.DS=[this,this.Aik];this.Gl.BK=[this,this.AlB];this.Gl.DS=[this,this.
Ah7];this.Fv=A._NewObject(C.Ad7,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dm;this.Au._Done();this.Jl._Done();this.HC._Done();this.Pl._Done();this.Vu._Done(
);this.QN._Done();this.X3._Done();this.PV._Done();this.Gm._Done();this.Gl._Done(
);C.Dm._Done.call(this);},_ReInit:function(){C.Dm._ReInit.call(this);this.Au._ReInit(
);this.Jl._ReInit();this.HC._ReInit();this.Pl._ReInit();this.Vu._ReInit();this.QN.
_ReInit();this.X3._ReInit();this.PV._ReInit();this.Gm._ReInit();this.Gl._ReInit(
);this.Pl.S(A.aaL(A.fl.EB));this.Vu.S(A.aaL(A.fl.EB));this.QN.S(A.aaL(A.fl.EB));
this.X3.S(A.aaL(A.fl.EB));this.PV.S(A.aaL(A.fl.EB));},_Mark:function(D){var B;C.
Dm._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dd)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OE={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BcW],[B=A._GetAutoObject(A.Device.Device),B.A72,B.Bak],0);
A.pe([this,this.BcW],this);},Do:function(){return 16;},F$:function(aIndex){return this.
LanguageToString.BQ(this.C4(aIndex));},At:function(E){C.CN.At.call(this,E);A._GetAutoObject(
A.Device.Device).And(E);},BcW:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CN._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OE;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,5);this.Co.
Set(3,3);this.Co.Set(4,8);this.Co.Set(5,9);this.Co.Set(6,7);this.Co.Set(7,6);this.
Co.Set(8,10);this.Co.Set(9,2);this.Co.Set(10,11);this.Co.Set(11,12);this.Co.Set(
12,13);this.Co.Set(13,14);this.Co.Set(14,15);this.Co.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.CN;this.LanguageToString._Done();C.CN._Done.
call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.CN._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Q4={TemperatureUnitToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awq(E);}
,Init:function(aArg){var B;A.zX([this,this.Bfg],[B=A._GetAutoObject(A.Device.Device
),B.Aq4,B.AsJ],0);A.pe([this,this.Bfg],this);},Bfg:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B9,this.B_],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Q4;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUk={Ajc:null,Ace:null,Kq:null,AP:null,A_:null,Bh:function(aSize){C.Bc.Bh.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kq.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajc.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Ace.H(this.Ajc.M);},Ai:function(Ae){C.Bc.Ai.call(
this,Ae);this.Kq.L(this.V.AQ);},Init:function(aArg){},Cd:function(Ad){if(!this.AZ
)return;this.Hu=Ad;if(!!this.AZ){var Ala=this.AZ.Hz(Ad,6);var Apw=this.AZ.CC(Ad,
7);var Atw=this.AZ.IV(Ad,9);this.U(A._GetAutoObject(A.acj.KE).AB9(Ala));this.Kq.
R(A._GetAutoObject(A.acj.KE).A5P(Ala));this.Ace.R(A._GetAutoObject(A.Device.Converter
).AkD(Apw));this.Ace.L(A._GetAutoObject(A.acj.Assessment).Xc(Atw));this.Ajc.L(A.
_GetAutoObject(A.acj.Assessment).Qc(Atw));this.Am();}},_Init:function(aArg){C.Bc.
_Init.call(this,aArg);A.acg.AJ._Init.call(this.Ajc={I:this},0);A.acg.Text._Init.
call(this.Ace={I:this},0);A.acg.Text._Init.call(this.Kq={I:this},0);A.acg.AJ._Init.
call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);this.__proto__=
C.AUk;this.V.H(OY);this.Ace.L(A.jb.Text);this.Kq.R(SV);this.Kq.L(A.jb.Text);this.
AP.L(A.jb.Bd);this.A_.H(Axj);this.A_.L(A.jb.Bd);this.J(this.Ajc,0);this.J(this.Ace
,0);this.J(this.Kq,0);this.J(this.AP,0);this.J(this.A_,0);this.Ace.S(A.aaL(A.fl.
Ah));this.Kq.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Bc;this.Ajc._Done();this.Ace._Done();this.Kq._Done();this.AP._Done();this.A_._Done(
);C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.Ajc._ReInit(
);this.Ace._ReInit();this.Kq._ReInit();this.AP._ReInit();this.A_._ReInit();this.
Ace.S(A.aaL(A.fl.Ah));this.Kq.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.
call(this,D);if((B=this.Ajc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.FT={AZ:null,AN:null,Cl:null,AD:
null,AeX:null,Qv:null,KG:A.jV,Lf:null,AUG:true,Hc:function(G){var B;var FW=this.
AD.GT;var Aa=(C.Bc.isPrototypeOf(B=this.AD.Ce)?B:null);if(!Aa)return;Aa.Y6(this.
AZ);Aa.Cd(FW);Aa.AN=this.AN;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GW]));
},NU:function(E){if(E===this.Lf)return;this.Lf=E;this.AD.NU(E);},Y6:function(E){
if(this.AZ===E)return;if(!!this.AZ)A.z9([this,this.Cd],this.AZ,0);this.AZ=E;if(!
!E)A.zV([this,this.Cd],E,0);A.pe([this,this.Cd],this);},Cd:function(G){if(this.AUG===
false)return;if(!!this.AZ){this.AD.Jn(this.AZ.Cb());this.AD.Abh(0,this.AD.AV-1);
}else this.AD.Jn(0);if((this.AD.AV>0)&&(this.FA()<0))this.GX(0);if(this.FA()>=this.
AD.AV){this.GX(0);this.AD.Gh(0);}if(this.AD.AV<=0){this.Qv.Y(true);this.GX(-1);}
else{this.Qv.Y(false);this.AAV(null,null);}},E9:function(G){var B;this.AeX.Mp(this.
AD.GW*this.AD.AV);this.AeX.Mr((B=this.AD.M)[3]-B[1]);this.AeX.Mq(-this.AD.Bq);},
Dw:function(G){if(this.AD.AV>0){switch(this.Cl.CK){case 4:if(this.FA()>0)this.GX(
this.FA()-1);break;case 5:if(this.FA()<(this.AD.AV-1))this.GX(this.FA()+1);break;
default:this.Cl.NB=true;}this.AD.Hy(this.FA(),true,null,null);}else if((this.Cl.
CK!==4)&&(this.Cl.CK!==5))this.Cl.NB=true;},Y7:function(E){if(A.aa0(this.AN,E))return;
this.AN=E;this.AD.Abh(0,this.AD.AV);},GX:function(E){this.AD.GX(E);this.AD.Hy(E,
true,null,null);},FA:function(){return this.AD.Gi;},Du:function(E){if(this.KG===
E)return;this.KG=E;this.Qv.R(E);},AAV:function(AcD,EX){this.AD.AAV(AcD,EX);},ASZ:
function(E){if(this.AUG===E)return;this.AUG=E;if(E)A.pe([this,this.Cd],this);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BJ._Init.call(this.Cl={I:this
},0);A.Core.CI._Init.call(this.AD={I:this},0);C.Aw._Init.call(this.AeX={I:this},
0);A.acg.Text._Init.call(this.Qv={I:this},0);this.__proto__=C.FT;this.H(SW);this.
Lf=C.Bc;this.Cl.Filter=147;this.AD.AY(0x3F);this.AD.H(SW);this.AD.AeH(40);this.AeX.
AY(0x3A);this.AeX.H(Ask);this.Qv.AY(0x3F);this.Qv.H(Axk);this.Qv.HH(10);this.Qv.
KM(true);this.Qv.A4(0xA);this.Qv.L(A.jb.Text);this.J(this.AD,0);this.J(this.AeX,
0);this.J(this.Qv,0);this.Cl.BK=[this,this.Dw];this.Cl.DS=[this,this.Dw];this.AD.
Ej=[this,this.E9];this.AD.Hc=[this,this.Hc];this.Qv.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=A.Core.O;this.Cl._Done();this.AD._Done();this.AeX._Done();this.
Qv._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Cl._ReInit();this.AD._ReInit();this.AeX._ReInit();this.Qv._ReInit();this.
Qv.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AeX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Bc={AZ:null,Hu:-1,CT:function(){this.Cd(this.Hu);},Ai:function(Ae){var B;C.Ci.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hu%2)===1)this.Background.L(A.
jb.CF);else this.Background.L(A.jb.C0);}},Y6:function(E){if(this.AZ===E)return;this.
AZ=E;},Cd:function(Ad){A.ab5("%s",Axl);},_Init:function(aArg){C.Ci._Init.call(this
,aArg);this.__proto__=C.Bc;},_ReInit:function(){C.Ci._ReInit.call(this);this.CT(
);},_Mark:function(D){var B;C.Ci._Mark.call(this,D);if((B=this.AZ)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GN={Bf:null,Fn:null
,DI:null,Fx:null,VC:null,JB:null,KG:A.jV,ATl:0,ATm:0,ATn:0,AeY:false,Init:function(
aArg){var B;A.zX([this,this.A17],[B=A._GetAutoObject(A.Device.Device),B.ADP,B.AH9
],0);A.zX([this,this.A17],[B=A._GetAutoObject(A.Device.Device),B.A7F,B.A$9],0);A.
zV([this,this.AfM],A._GetAutoObject(A.Device.Device).Ap,0);A.zV([this,this.Ack],
A._GetAutoObject(A.Device.Device).Ap,0);A.zX([this,this.Bzw],[B=A._GetAutoObject(
A.Device.Helper),B.UH,B.UI],0);A.pe([this,this.Ack],this);A.pe([this,this.AZB],this
);A.pe([this,this.AwR],this);},Wd:function(G){this.Af9();if(!A._GetAutoObject(A.
Device.Device).JB){this.A3W(A.aaR(A.acf.BiA),[this,this.Bjb],1);this.A3W(A.aaR(A.
acf.BnB),[this,this.Bja],0);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(
A.aaR(A.acf.Bh$));A._GetAutoObject(C.BL).Ft();}var P;for(P=this.JB.Do()-1;P>=0;P=
P-1)switch(this.JB.C4(P)){case 0:this.Af8(A.aaR(A.acf.Xv),[this,this.AS0],0);break;
case 1:this.Af8(A.aaR(A.acf.Temperature),[this,this.AS2],1);break;case 2:this.Af8(
A.aaR(A.acf.Rating),[this,this.AS1],2);break;case 3:this.Af8(A.aaR(A.acf.Ae_),[this
,this.AS3],3);break;default:A.ab5("%s",Axm);}A._GetAutoObject(C.BL).Ft();A._GetAutoObject(
C.BL).Nw(A.aaR(A.acf.A5g));A._GetAutoObject(A.Device.Device).Dp(6);},BuQ:function(
s){this.Wd(s);},Dw:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);var AfB=
this.JB.DK(A._GetAutoObject(A.Device.Device).JB);if(this.AeY)return;switch(DW.CK
){case 6:{AfB=AfB-1;if(AfB<0)AfB=this.JB.Do()-1;A._GetAutoObject(A.Device.Device
).AbG(this.JB.C4(AfB));}break;case 7:{AfB=AfB+1;if(AfB>=this.JB.Do())AfB=0;A._GetAutoObject(
A.Device.Device).AbG(this.JB.C4(AfB));}break;default:DW.NB=true;}},Cw:function(G
){if(this.DI.Azg()){this.DI.AcO();if(this.DI.Azg()===false)this.Bf.ASZ(true);return;
}else if(this.AeY)this.A20(this);if(!!this.Bf)this.Bf.ASZ(true);},EV:function(G){
if(!!this.Bf)this.Bf.ASZ(false);},AwR:function(G){var B;if(!!this.Bf)this.HI(this.
Bf);this.Bf=A._NewObject(C.ALT,0);this.Bf.H(AnX);this.Bf.Y6(A._GetAutoObject(A.Device.
Device).Ap);this.Bf.Y7([this,this.AIk]);if(!!this.Fn)this.Bf.A8Q([B=this.Fn,B.A8k
,B.A9A]);this.A3h(this);this.J(this.Bf,0);if(this.AeY===false)this.A9(this.Bf);this.
A17(this);this.Bnz(this);},A8M:function(G){A._GetAutoObject(A.Device.Device).Dp(
0);this.Dk(C.Ya);this.Ec.AN=[this,this.AIk];this.AKK(this);this.Ec.Ar(true);this.
A9(this.Ec);this.AeY=true;},Bjh:function(G){var B;A._GetAutoObject(A.Device.Device
).Dp(0);if(!this.Bf)return;var Aa=(C.ABk.isPrototypeOf(B=this.Bf.AD.BhX(this.Bf.
AD.Gi))?B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).HF(Aa.Hu);else A._GetAutoObject(
A.Device.Helper).W.Hd();this.AfU();},AlA:function(G){var F;if(!this.Fx)this.A5h(
this);else switch((F=this.Fx,F[1].call(F[0]))){case 0:this.A5h(this);break;case 1:
this.BgT(this);break;case 9:this.A5i(this);break;case 4:this.A5k(this);break;case
6:this.A5n(this);break;case 8:this.ANh(this);break;case 2:this.A5r(this);break;case
3:this.BgU(this);break;case 7:this.BgV(this);break;case 5:this.BgW(this);break;case
10:this.BgY(this);break;case 11:this.A5j(this);break;case 12:this.A5q(this);break;
case 13:this.A5s(this);break;case 14:this.A5l(this);break;case 18:this.A5m(this);
break;case 15:this.A5o(this);break;case 16:this.A5t(this);break;case 17:this.A5p(
this);break;default:A.ab5("%s%e",Axn,(F=this.Fx,F[1].call(F[0])));}},AIk:function(
s){this.AlA(s);},Bkp:function(G){var B;this.Dk(C.Ka);this.Ec.AN=null;this.AeY=false;
this.Ack(this);var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device
).Ap.Filter){Filter=A._GetAutoObject(A.Device.Device).Ap.Filter.GA();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?B:null);if(!!FilterCriterion
)Filter.QW(FilterCriterion);A._GetAutoObject(A.Device.Device).Ap.Bi(Filter);}this.
N.TM.Dl(255);this.N.TN.Dl(255);this.A9(this.Bf);this.Ec.Ar(false);},Am1:function(
G){A._GetAutoObject(C.AX).Fl();},Du:function(E){if(this.KG===E)return;this.KG=E;
this.A3h(this);},Aa4:function(){switch(A._GetAutoObject(A.Device.Device).JB){case
0:return this.Bf3(A._GetAutoObject(A.Device.Device).Al6);case 2:return C.AMu;case
1:return C.AMv;case 3:return C.AMx;case 8:case 9:case 10:case 4:case 5:case 6:return C.
Ajg;case 7:return C.ABj;case 12:return C.ABl;case 11:return C.ABi;default:throw new
Error(Asl);}},Aa5:function(){switch(A._GetAutoObject(A.Device.Device).JB){case 0:
return this.Bf4(A._GetAutoObject(A.Device.Device).Al6);case 2:return C.ACE;case 1:
return C.AOZ;case 3:return C.AO1;case 4:return C.ACA;case 8:case 9:case 10:case 5:
case 6:return C.AjA;case 7:return C.ACC;case 12:return C.ACD;case 11:return C.ACB;
default:throw new Error(Asl);}},A17:function(G){this.ASC(A._GetAutoObject(A.Device.
Device).JB);this.ASD(A._GetAutoObject(A.Device.Device).Al6);if(!!this.Bf){this.Bf.
NU(this.Aa4());this.BnF(this);}},BnF:function(G){var B;if(!!this.Fn)this.HI(this.
Fn);this.Fn=(C.Dx.isPrototypeOf(B=A._NewObject(this.Aa5(),0))?B:null);this.Fn.H(
JQ);if(!!this.Bf)this.Bf.A8Q([B=this.Fn,B.A8k,B.A9A]);this.J(this.Fn,0);},Bjf:function(
G){this.QY(this);A._GetAutoObject(A.Device.Device).Dp(0);},AS0:function(G){A._GetAutoObject(
A.Device.Device).AbG(0);},AS2:function(G){A._GetAutoObject(A.Device.Device).AbG(
1);},AS1:function(G){A._GetAutoObject(A.Device.Device).AbG(2);},AS3:function(G){
A._GetAutoObject(A.Device.Device).AbG(3);},QY:function(G){A._GetAutoObject(A.Device.
Device).Ap.Bi(A._GetAutoObject(A.Device.Helper).Mj());},AZB:function(s){this.QY(
s);},HJ:function(G){if(this.AeY){this.AKK(this);return;}this.N.CS(A.aaL(A.ach.EU
));this.N.Cn(A.aaL(A.ach.ACY));this.N.C2(A.aaL(A.ach.Options));this.N.Cv=[this,this.
Am1];this.N.Ch=[this,this.A8M];this.N.Cc=[this,this.BuQ];this.N.Ho(A.jV);this.N.
FC(A.jV);this.N.B0(A.jV);if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){this.N.IX.
Dl(100);this.N.Ch=null;}else this.N.IX.Dl(255);},AIh:function(s){this.HJ(s);},Af8:
function(AcM,AcN,AIH){A._GetAutoObject(C.BL).At3(AcM,AcN,[this,this.A8d,this.ASC
],AIH);},AfM:function(G){this.A3h(this);if(this.AeY)A.pe([this,this.AKK],this);}
,AfU:function(){A._GetAutoObject(C.AX).BS(9);},A3h:function(G){if(!this.Bf)return;
if(!A._GetAutoObject(A.Device.Device).Ap.Qw()||!A._GetAutoObject(A.Device.Device
).Ap.Filter)this.Bf.Du(A.aaR(A.acf.ADE));else if(A._GetAutoObject(A.Device.Helper
).AqI(A._GetAutoObject(A.Device.Device).Ap.Filter))this.Bf.Du(this.KG);else if(!
A._GetAutoObject(A.Device.Device).Ap.Filter.DX(1,4)){if(A._GetAutoObject(A.Device.
Helper).ACf(A._GetAutoObject(A.Device.Device).Ap.Filter)===1)this.Bf.Du(A.aaR(A.
acf.ANs));else this.Bf.Du(A.aaR(A.acf.ANr));}else this.Bf.Du(A.aaR(A.acf.ARn));}
,AD3:function(G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(F[0],0));},Av9:function(
E){if(A.aaZ(this.Fx,E))return;if(!!this.Fx)A.z$([this,this.AZK],this.Fx,0);this.
Fx=E;if(!!E)A.zX([this,this.AZK],this.Fx,0);if(!!E)A.pe([this,this.AZK],this);},
AD9:function(G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(F[0],1));},Awd:function(
G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(F[0],2));},ASH:function(G){var F;if(!
!this.Fx)(F=this.Fx,F[2].call(F[0],3));},ASV:function(G){var F;if(!!this.Fx)(F=this.
Fx,F[2].call(F[0],7));},ASW:function(G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(
F[0],5));},A5r:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(A.Device.
Helper).HF(this.Bf.FA());this.DI.Qa(1);}},IR:function(AcM,AcN,Aox){A._GetAutoObject(
C.BL).At3(AcM,AcN,[this,this.A8f,this.ASE],Aox);},Bkz:function(G){var F;if(!!this.
Fx)(F=this.Fx,F[2].call(F[0],4));},A5k:function(G){if(!this.Bf)return;if(this.M6(
)){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.DI.BzY();}},BkA:function(
G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(F[0],6));},A5n:function(G){if(!this.Bf
)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.DI.
BzZ();}},ANh:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(A.Device.
Helper).HF(this.Bf.FA());this.DI.Qa(1024);}},BlS:function(G){var F;if(!!this.Fx)(
F=this.Fx,F[2].call(F[0],8));},Aj7:function(G){var F;if(!!this.Fx)(F=this.Fx,F[2
].call(F[0],9));},BgU:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(
A.Device.Helper).HF(this.Bf.FA());this.DI.Qa(2);}},A5h:function(G){if(!this.Bf)return;
if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());if(A._GetAutoObject(
A.Device.Helper).AjK(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).A6(66,true,A.jV,0,null);else this.AfT();}},BgT:function(G){if(!
this.Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());
this.DI.Qa(16);}},AfT:function(){A._GetAutoObject(C.AX).BS(37);},BgV:function(G){
if(!this.Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA(
));this.DI.Qa(4);}},BgW:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(
A.Device.Helper).HF(this.Bf.FA());this.DI.Qa(8);}},A5i:function(G){var B;if(!this.
Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());if(this.
AeY){A.zX([this,this.AzJ],[B=this.DI,B.Am8,B.Jo],0);this.A20(this);}this.DI.AcO(
);}},ALt:function(AcM,AcN,BwM){A._GetAutoObject(C.BL).BfR(AcM,AcN,BwM);},AKK:function(
G){this.N.Ho(A.jV);this.N.B0(A.jV);this.N.CS(A.aaL(A.ach.Aeb));this.N.Cv=[this,this.
Bkp];this.N.TM.Dl(100);this.N.TN.Dl(100);var FX=A._GetAutoObject(A.Device.Device
).Ap.Cb();if(FX<=0){this.N.Cn(null);this.N.C2(null);this.N.Ch=null;this.N.Cc=null;
this.N.Zd=false;this.N.Ze=false;}else if(FX===1){this.N.Cn(null);this.N.C2(A.aaL(
A.ach.Aec));this.N.Ch=null;this.N.Cc=[this,this.AIk];this.N.Zd=false;this.N.Ze=false;
}else{this.N.Cn(A.aaL(A.ach.Aqz));this.N.C2(A.aaL(A.ach.AqG));this.N.Ch=[this,this.
A2B];this.N.Cc=[this,this.A2C];this.N.Zd=true;this.N.Ze=true;}},A2B:function(G){
if(!this.Bf)return;if(this.Bf.FA()<(A._GetAutoObject(A.Device.Device).Ap.Cb()-1)
)this.Bf.GX(this.Bf.FA()+1);},A2C:function(G){if(!this.Bf)return;if(this.Bf.FA()>
0)this.Bf.GX(this.Bf.FA()-1);},Bnz:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bb=A._GetAutoObject(A.Device.Device).Ap.K_(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bb>=0){this.Bf.GX(Bb);A.ab5("%s",Axo);}}},M6:function(){return this.
Bf.FA()>=0;},AjW:function(){return A._GetAutoObject(A.Device.Device).Ap.Cb()>5;}
,Af9:function(){this.BfS();A._GetAutoObject(C.BL).Qp(A.aaR(A.acf.ATL),[this,this.
A8M]);A._GetAutoObject(C.BL).Ft();},Ack:function(G){if(this.AeY)this.AKK(this);else
this.HJ(this);},A20:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Ap.
Filter.GA();var Ayi=aFilter.DX(1,4);if(!!Ayi){aFilter.QW(Ayi);A._GetAutoObject(A.
Device.Device).Ap.Bi(aFilter);if(!!this.Bf)this.Bf.GX(0);}},AzJ:function(G){var B;
if(!this.DI.Go&&this.AeY){A.z$([this,this.AzJ],[B=this.DI,B.Am8,B.Jo],0);this.A20(
this);}},Bmr:function(G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(F[0],10));},BgY:
function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(
this.Bf.FA());this.DI.Qa(256);}},A2s:function(G){var F;this.ASE((F=this.Fx,F[1].
call(F[0])));A.pe([this,this.AIh],this);},AZK:function(s){this.A2s(s);},Bkw:function(
G){var F;if(!!this.Fx)(F=this.Fx,F[2].call(F[0],11));},A5j:function(G){if(!this.
Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.
DI.Qa(4096);}},A5q:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(
A.Device.Helper).HF(this.Bf.FA());this.DI.Qa(16384);}},A5s:function(G){if(!this.
Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.
BzJ();}},BzJ:function(){A._GetAutoObject(C.AX).Aha(86);},A5l:function(G){if(!this.
Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.
DI.Qa(32768);}},A5o:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(
A.Device.Helper).HF(this.Bf.FA());this.DI.Qa(65536);}},A5t:function(G){if(!this.
Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.
DI.Qa(131072);}},BfS:function(){if(!A._GetAutoObject(A.Device.Device).Ap.Filter||
A._GetAutoObject(A.Device.Helper).AqI(A._GetAutoObject(A.Device.Device).Ap.Filter
))A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.ABo));else A._GetAutoObject(C.BL).Qp(A.aaR(
A.acf.ABo),[this,this.Bjf]);A._GetAutoObject(C.BL).Qp(A.aaR(A.acf.Akv),[this,this.
Bjh]);A._GetAutoObject(C.BL).Ft();},Bf4:function(Aoc){switch(Aoc){case 0:return C.
AjA;case 1:return C.AOX;default:throw new Error(Act+Aoc.toFixed());}},Bf3:function(
Aoc){switch(Aoc){case 0:return C.Ajg;case 1:return C.AMs;default:throw new Error(
Act+Aoc.toFixed());}},Bja:function(G){A._GetAutoObject(A.Device.Device).Arb(0);}
,Bjb:function(G){A._GetAutoObject(A.Device.Device).Arb(1);},A3W:function(AcM,AcN
,Aoc){A._GetAutoObject(C.BL).At3(AcM,AcN,[this,this.A8e,this.ASD],Aoc);},A5p:function(
G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.
FA());this.DI.Qa(128);}},Bzw:function(G){var B;if(!this.Bf)return;A.pe([B=this.Bf
,B.Cd],this);},A5m:function(G){if(!this.Bf)return;if(this.M6()){A._GetAutoObject(
A.Device.Helper).HF(this.Bf.FA());this.DI.Qa(524288);}},BgX:function(G){if(!this.
Bf)return;if(this.M6()){A._GetAutoObject(A.Device.Helper).HF(this.Bf.FA());this.
DI.Qa(262144);}},ASC:function(E){if(this.ATl===E)return;this.ATl=E;A.abo([this,this.
A8d,this.ASC],0);},ASD:function(E){if(this.ATm===E)return;this.ATm=E;A.abo([this
,this.A8e,this.ASD],0);},ASE:function(E){if(this.ATn===E)return;this.ATn=E;A.abo([
this,this.A8f,this.ASE],0);},A8d:function(){return this.ATl;},A8e:function(){return this.
ATm;},A8f:function(){return this.ATn;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ACE._Init.call(this.VC={I:this},0);C.JB._Init.call(this.JB={I:this},0);
this.__proto__=C.GN;this.Background.H(Ca);this.N.Y(true);this.N.OJ(true);this.N.
OK(true);this.Ec.A8$(A.jb.C0);this.Ec.A9a(A.jb.Text);this.Dk(C.Ka);this.VC.H(JQ);
this.KG=A.aaR(A.acf.ADE);this.J(this.VC,0);this.DI=A._GetAutoObject(C.DI);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.VC._Done();this.JB._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.VC._ReInit();
this.JB._ReInit();this.Du(A.aaR(A.acf.ADE));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Fx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.VC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListScreen"};C.ABk={AP:null,A_:null,Us:null,Acc:null,Init:function(
aArg){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Us.H([this.
V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([this.Us.M[2]-1,0,this.Us.M[
2]+1,aSize[1]]);this.Acc.H([this.Us.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){
C.Bc.Ai.call(this,Ae);this.Us.L(this.V.AQ);this.Acc.L(this.V.AQ);},Cd:function(Ad
){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){this.U(this.AZ.CC(Ad,1).toFixed());
this.Us.R(this.AZ.CC(Ad,2).toFixed());this.Acc.R(this.AZ.CC(Ad,3).toFixed());this.
Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.call(this.
AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.
Us={I:this},0);A.acg.Text._Init.call(this.Acc={I:this},0);this.__proto__=C.ABk;this.
AP.L(A.jb.Bd);this.A_.L(A.jb.Bd);this.Us.L(A.jb.Text);this.Acc.L(A.jb.Text);this.
J(this.AP,0);this.J(this.A_,0);this.J(this.Us,0);this.J(this.Acc,0);this.Us.S(A.
aaL(A.fl.Ah));this.Acc.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.
__proto__=C.Bc;this.AP._Done();this.A_._Done();this.Us._Done();this.Acc._Done();
C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.AP._ReInit(
);this.A_._ReInit();this.Us._ReInit();this.Acc._ReInit();this.Us.S(A.aaL(A.fl.Ah
));this.Acc.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Us)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"};C.AdM={Ow:null,Sz:
null,Md:null,Init:function(aArg){var B;A.zX([this,this.A1_],[B=A._GetAutoObject(
A.Device.Device),B.Avx,B.Ax0],0);A.zX([this,this.Adb],[B=A._GetAutoObject(A.Device.
Device),B.Avu,B.AxZ],0);A.pe([this,this.Adb],this);},Ai:function(Ae){C.AB.Ai.call(
this,Ae);this.Sz.R(A._GetAutoObject(A.Device.Device).AaF.toFixed()+Axp);this.Ow.
Y(A._GetAutoObject(A.Device.Device).Amd);},Adb:function(G){this.Am();},MS:function(
G){A._GetAutoObject(C.AX).Fl();},A1_:function(G){if(A._GetAutoObject(A.Device.Device
).Amd===false){this.Ow.Y(false);A._GetAutoObject(C.AX).Fl();}else this.Ow.Y(true
);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Ow={
I:this},0);A.acg.Text._Init.call(this.Sz={I:this},0);C.Md._Init.call(this.Md={I:
this},0);this.__proto__=C.AdM;var B;this.Background.L(A.jb.C0);this.N.Y(true);this.
N.B0(A.aaR(A.acf.Ok));this.Ow.H(AGF);this.Ow.R(A.aaR(A.acf.Ow));this.Ow.L(A.jb.Text
);this.Ow.Y(false);this.Sz.H(AGG);this.Sz.R(AGH);this.Sz.L(A.jb.Text);this.Md.H(
AGI);this.J(this.Ow,0);this.J(this.Sz,0);this.J(this.Md,0);this.N.Cc=[this,this.
MS];this.Ow.S(A.aaL(A.fl.Ah));this.Sz.S(A.aaL(A.fl.Ah));this.Md.At([B=A._GetAutoObject(
A.Device.Device),B.Avu,B.AxZ]);this.Md.A9q([B=A._GetAutoObject(A.Device.Device),
B.Avx,B.Ax0]);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ow._Done(
);this.Sz._Done();this.Md._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Ow._ReInit();this.Sz._ReInit();this.Md._ReInit();this.N.
B0(A.aaR(A.acf.Ok));this.Ow.R(A.aaR(A.acf.Ow));this.Ow.S(A.aaL(A.fl.Ah));this.Sz.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ow
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Md)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Md={AdH:null,AdI:null,J3:function(G){var F;if(!!this.Q){this.A1i();var AcR=(
F=this.Q,F[1].call(F[0]));if(AcR>20)this.Os.L(A.jb.ET);else this.Os.L(A.jb.FZ);this.
Os.L((this.Os.AQ&0x00FFFFFF)|(this.Ali(AcR,0,20)<<24));this.Tr.L((this.Tr.AQ&0x00FFFFFF
)|(this.Ali(AcR,21,40)<<24));this.Ts.L((this.Ts.AQ&0x00FFFFFF)|(this.Ali(AcR,41,
60)<<24));this.AdH.L((this.AdH.AQ&0x00FFFFFF)|(this.Ali(AcR,61,80)<<24));this.AdI.
L((this.AdI.AQ&0x00FFFFFF)|(this.Ali(AcR,81,100)<<24));}},A1i:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.UM=this.AdI;else if((F=this.Q,F[
1].call(F[0]))>60)this.UM=this.AdH;else if((F=this.Q,F[1].call(F[0]))>40)this.UM=
this.Ts;else if((F=this.Q,F[1].call(F[0]))>20)this.UM=this.Tr;else this.UM=this.
Os;}else this.UM=null;},_Init:function(aArg){C.Ou._Init.call(this,aArg);A.acg.AJ.
_Init.call(this.AdH={I:this},0);A.acg.AJ._Init.call(this.AdI={I:this},0);this.__proto__=
C.Md;this.H(Axq);this.NI.H(Axq);this.Os.H(AU_);this.Tr.H(AU$);this.Ts.H(AVa);this.
AdH.H(AVb);this.AdH.L(A.jb.ET);this.AdI.H(AVc);this.AdI.L(A.jb.ET);this.J(this.AdH
,0);this.J(this.AdI,0);this.NI.Ax(A.aaL(A.ach.AMc));},_Done:function(){this.__proto__=
C.Ou;this.AdH._Done();this.AdI._Done();C.Ou._Done.call(this);},_ReInit:function(
){C.Ou._ReInit.call(this);this.AdH._ReInit();this.AdI._ReInit();},_Mark:function(
D){var B;C.Ou._Mark.call(this,D);if((B=this.AdH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUf={N3:null,Ln:null,AkI:null,Zy:null,Zx:null,CT:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.Apn],[B=A._GetAutoObject(A.Device.Device),B.
AR1,B.AZv],0);A.zX([this,this.Apn],[B=A._GetAutoObject(A.Device.Device),B.AR4,B.
AZx],0);A.zX([this,this.Apn],[B=A._GetAutoObject(A.Device.Device),B.A8u,B.Bau],0
);A.pe([this,this.Apn],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Gw(this
);this.AAJ(this);this.BAQ(this);this.DD(this);},Bza:function(G){A._GetAutoObject(
A.Device.Device).Ar6();},Apn:function(G){this.Am();},Gw:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Zy.Y(false);break;case 4:{var A2U;if(!A._GetAutoObject(A.Device.Device).Ae5)A2U=
0;else A2U=((A._GetAutoObject(A.Device.Device).Aw7*100)/A._GetAutoObject(A.Device.
Device).Ae5)|0;this.Zy.Bx(A2U);this.Zy.Y(true);}break;default:A.ab5("%s%e",Asm,A.
_GetAutoObject(A.Device.Device).SyncState);}},BAQ:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CF);this.Ln.L(A.jb.Text);this.N3.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.FZ);this.Ln.L(A.jb.Bj);this.N3.L(A.jb.Bj);}break;default:A.ab5(
"%s%e",Asm,A._GetAutoObject(A.Device.Device).SyncState);}},DD:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CS(null);this.N.Cv=null;this.N.B0(A.jV);this.N.Cc=null;}break;
case 7:{this.N.CS(null);this.N.Cv=null;this.N.B0(A.aaR(A.acf.Ok));this.N.Cc=[this
,this.Bza];}break;default:A.ab5("%s%e",Asm,A._GetAutoObject(A.Device.Device).SyncState
);}},AAJ:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Ln.R(A.aaR(A.acf.Boq));break;case 1:this.Ln.R(A.aaR(A.acf.Bon));break;
case 2:this.Ln.R(A.aaR(A.acf.Bok));break;case 3:this.Ln.R(A.aaR(A.acf.Boo));break;
case 4:this.Ln.R((A.aaR(A.acf.Bom)+Axr)+A._GetAutoObject(A.Device.Helper).Nd(A._GetAutoObject(
A.Device.Helper).Nd(A.aaR(A.acf.Bm2),P0,A._GetAutoObject(A.Device.Device).Aw7.toFixed(
)),Axs,A._GetAutoObject(A.Device.Device).Ae5.toFixed()));break;case 5:this.Ln.R(
A.aaR(A.acf.Bop));break;case 7:this.Ln.R(A.aaR(A.acf.Bol));break;default:A.ab5("%s%e"
,Asm,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CO._Init.call(this.N3={I:this},0);C.CO._Init.call(this.Ln={I:this
},0);A.acg.An._Init.call(this.AkI={I:this},0);A.acq.ACG._Init.call(this.Zy={I:this
},0);A.acq.ACH._Init.call(this.Zx={I:this},0);this.__proto__=C.AUf;this.N.Y(true
);this.N3.H(AVd);this.N3.R(A.aaR(A.acf.N3));this.Ln.AY(0x3F);this.Ln.H(AVe);this.
Ln.A4(0x12);this.AkI.H(AVf);this.AkI.L(A.jb.AR);this.Zy.H(AVg);this.Zy.Ar(false);
this.Zy.Bx(0);this.Zx.Bml(0);this.Zx.A9N(0);this.Zx.A9L(A.jb.AR);this.Zx.A9K(0);
this.Zx.AFl(AGJ);this.J(this.N3,0);this.J(this.Ln,0);this.J(this.AkI,0);this.J(this.
Zy,0);this.N3.S(A.aaL(A.fl.EB));this.N3.A8(A.aaL(A.fl.Ah));this.N3.CB(A.aaL(A.fl.
Ak));this.Ln.S(A.aaL(A.fl.Ah));this.Ln.A8(A.aaL(A.fl.Ak));this.Ln.CB(A.aaL(A.fl.
By));this.AkI.Ax(A.aaL(A.ach.AP9));this.Zy.OnSetAppearance(this.Zx);this.Zx.A9M(
A.aaL(A.ach.NM));this.Zx.A9J(A.aaL(A.ach.NM));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N3._Done();this.Ln._Done();this.AkI._Done();this.Zy._Done(
);this.Zx._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N3._ReInit();this.Ln._ReInit();this.AkI._ReInit();this.Zy._ReInit();this.
Zx._ReInit();this.N3.R(A.aaR(A.acf.N3));this.N3.S(A.aaL(A.fl.EB));this.N3.A8(A.aaL(
A.fl.Ah));this.N3.CB(A.aaL(A.fl.Ak));this.Ln.S(A.aaL(A.fl.Ah));this.Ln.A8(A.aaL(
A.fl.Ak));this.Ln.CB(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zy
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aqt={_Init:function(aArg){C.ACx._Init.call(this,aArg
);this.__proto__=C.Aqt;this.A9c(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Co:A.abi(3,0,{0:2,2:1}),Do:function(
){return 3;},C4:function(aIndex){if(aIndex>=3)return-1;return this.Co.Get(aIndex
);},F$:function(aIndex){return this.GenderToString.BQ(this.C4(aIndex));},DK:function(
A3){var P=0;while(P<3){if(this.Co.Get(P)===A3)return P;P=P+1;}return-1;},Hl:function(
){var P=0;var max=-1;while(P<3){if(this.Co.Get(P)>max)max=this.Co.Get(P);P=P+1;}
return max;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal)this.Animal.JI(
E);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfG],[B=this.Animal,B.Wb,B.JI],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfG],[B=this.Animal,B.Wb,B.JI],0);A.pe([this,this.AfG],this);},AfG:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B9,
this.B_],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Co=[]).__proto__=C.Gender.Co;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Co:A.abi(4,0,{1:1,2:2,3:3}),Do:function(){return 4;},C4:function(aIndex){if(
aIndex>=4)return-1;return this.Co.Get(aIndex);},F$:function(aIndex){return this.
BirthTypeToString.BQ(this.C4(aIndex));},DK:function(A3){var P=0;while(P<4){if(this.
Co.Get(P)===A3)return P;P=P+1;}return-1;},Hl:function(){var P=0;var max=-1;while(
P<4){if(this.Co.Get(P)>max)max=this.Co.Get(P);P=P+1;}return max;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Aj8(E);},A0z:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B9,this.
B_],0);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A0z],[B=this.Animal,B.ARF,B.Aj8],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A0z],[B=this.Animal,B.ARF,B.Aj8],0);A.pe([this,this.A0z],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Co=[]).__proto__=C.BirthType.Co;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Ab7:null,Do:
function(){return A._GetAutoObject(A.Device.Helper).AdC.Mx;},C4:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdC.Mx)return-1;return A._GetAutoObject(
A.Device.Helper).AdC.Get(aIndex);},F$:function(aIndex){return this.Ab7.BQ(this.C4(
aIndex));},DK:function(A3){var P=0;while(P<A._GetAutoObject(A.Device.Helper).AdC.
Mx){if(A._GetAutoObject(A.Device.Helper).AdC.Get(P)===A3)return P;P=P+1;}return-
1;},Hl:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).Uo.
Mx){if(A._GetAutoObject(A.Device.Helper).Uo.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).Uo.Get(P);P=P+1;}return max;},At:function(E){C.AC.At.call(this,E);if(!!this.
Animal)this.Animal.DT(E);},A0s:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B9,this.B_],0);},LU:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0s],[B=this.Animal,B.PH,B.DT],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0s],[B=this.Animal,B.PH,B.DT],0);A.pe([
this,this.A0s],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Ab7={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Ab7._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Ab7._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ab7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.ATX={Init:function(aArg){var B;A.pe([this,this.Afl],this);A.zX([this,this.Afl
],[B=A._GetAutoObject(A.Device.Device),B.Aq4,B.AsJ],0);},A21:function(G){A._GetAutoObject(
A.Device.Device).A6(38,true,A.jV,0,[this,this.BaK]);},A2A:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).ArS(this);},A0S:function(G){var F;if(this.A5===1){var BO=this.D0;
this.D0=this.D0-10;if(this.D0<this.Alq)this.D0=this.Alq;if(this.D0<A._GetAutoObject(
A.Device.Device).ZA)this.D0=A._GetAutoObject(A.Device.Device).ZA;if(this.DO!==BO
){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.D0));A.abo(this.JL,0);}}if(this.A5===
2){var BO=this.DO;this.DO=this.DO-10;if(this.DO<this.D0)this.DO=this.D0;if(this.
DO!==BO){if(!!this.JK)(F=this.JK,F[2].call(F[0],this.DO));A.abo(this.JK,0);}}this.
DD(this);this.Am();},A1r:function(G){var F;if(this.A5===1){var BO=this.D0;this.D0=
this.D0+10;if(this.D0>this.DO)this.D0=this.DO;if(this.D0!==BO){if(!!this.JL)(F=this.
JL,F[2].call(F[0],this.D0));A.abo(this.JL,0);}}if(this.A5===2){var BO=this.DO;this.
DO=this.DO+10;if(this.DO>this.All)this.DO=this.All;if(this.DO!==BO){if(!!this.JK
)(F=this.JK,F[2].call(F[0],this.DO));A.abo(this.JK,0);}}this.DD(this);this.Am();
},Gw:function(G){this.PB.R(AGK+A._GetAutoObject(A.Device.Converter).AkD(this.D0)
);this.PC.R(AGK+A._GetAutoObject(A.Device.Converter).AkD(this.DO));this.Si.R(A._GetAutoObject(
A.acj.Temperature).Alj());},A1k:function(AsQ){if(AsQ===1)return this.PB;else if(
AsQ===2)return this.PC;else return null;},_Init:function(aArg){C.Ab5._Init.call(
this,aArg);this.__proto__=C.ATX;this.All=5000;this.Alq=3000;this.U(A.aaR(A.acf.AqT
));this.Background.H(Afi);this.V.H(BC);this.V.R(A.aaR(A.acf.AGf));this.V.A4(0x12
);this.Init(aArg);},_ReInit:function(){C.Ab5._ReInit.call(this);this.U(A.aaR(A.acf.
AqT));this.V.R(A.aaR(A.acf.AGf));},_className:"Application::SettingsItemThresholdsTemp"
};C.Et={Background:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.
AJ._Init.call(this.Background={I:this},0);this.__proto__=C.Et;this.H(BC);this.Background.
H(BC);this.Background.L(A.jb.CF);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AN:null,AaI:null,AaM:null,AaK:
null,Background:null,AaH:null,AaL:null,AaJ:null,Ajk:null,AqZ:null,Vp:null,A7:0,ByS:
function(G){if(this.Ajk.CK===6){if(this.A7===1)this.Anj(2);else if(this.A7===2)this.
Anj(3);else this.Anj(1);}else if(this.Ajk.CK===7){if(this.A7===3)this.Anj(2);else
if(this.A7===2)this.Anj(1);else this.Anj(3);}},Anj:function(E){if(this.A7===E)return;
this.A7=E;switch(this.A7){case 3:this.Background.H(this.AaH.M);break;case 2:this.
Background.H(this.AaL.M);break;case 1:this.Background.H(this.AaJ.M);break;default:
this.Background.H(AnY);}},IP:function(G){var B;if(!!this.AN)(B=this.AN)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Hf._Init.
call(this.AaI={I:this},0);A.acg.Hf._Init.call(this.AaM={I:this},0);A.acg.Hf._Init.
call(this.AaK={I:this},0);A.acg.An._Init.call(this.Background={I:this},0);A.acg.
Ad3._Init.call(this.AaH={I:this},0);A.acg.Ad3._Init.call(this.AaL={I:this},0);A.
acg.Ad3._Init.call(this.AaJ={I:this},0);A.Core.BJ._Init.call(this.Ajk={I:this},0
);A.Core.BJ._Init.call(this.AqZ={I:this},0);A.Graphics.AL5._Init.call(this.Vp={I:
this},0);this.__proto__=C.Rating;this.H(AVh);this.AaI.H(AGL);this.AaI.L(A.jb.Text
);this.AaI.Anh(AkO);this.AaI.NX(3);this.AaI.Y(true);this.AaM.H(AGM);this.AaM.L(A.
jb.Text);this.AaM.Anh(AkO);this.AaM.NX(3);this.AaM.Y(true);this.AaK.H(AGN);this.
AaK.L(A.jb.Text);this.AaK.Anh(AkO);this.AaK.NX(3);this.AaK.Y(true);this.Background.
H(AnY);this.Background.L(A.jb.AR);this.AaH.H(AGL);this.AaH.L(A.jb.ET);this.AaH.Anh(
AkO);this.AaH.Y(true);this.AaL.H(AGM);this.AaL.L(A.jb.H1);this.AaL.Anh(AkO);this.
AaL.Y(true);this.AaJ.H(AGN);this.AaJ.L(A.jb.FZ);this.AaJ.Anh(AkO);this.AaJ.Y(true
);this.Ajk.Filter=147;this.AqZ.Filter=1;this.Vp.BkZ(360);this.Vp.Bma(22);this.Vp.
Bmj(2);this.J(this.AaI,0);this.J(this.AaM,0);this.J(this.AaK,0);this.J(this.Background
,0);this.J(this.AaH,0);this.J(this.AaL,0);this.J(this.AaJ,0);this.AaI.Y8(this.Vp
);this.AaM.Y8(this.Vp);this.AaK.Y8(this.Vp);this.Background.Ax(A.aaL(A.ach.NL));
this.AaH.Y8(this.Vp);this.AaL.Y8(this.Vp);this.AaJ.Y8(this.Vp);this.Ajk.BK=[this
,this.ByS];this.AqZ.BK=[this,this.IP];},_Done:function(){this.__proto__=A.Core.O;
this.AaI._Done();this.AaM._Done();this.AaK._Done();this.Background._Done();this.
AaH._Done();this.AaL._Done();this.AaJ._Done();this.Ajk._Done();this.AqZ._Done();
this.Vp._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AaI._ReInit();this.AaM._ReInit();this.AaK._ReInit();this.Background.
_ReInit();this.AaH._ReInit();this.AaL._ReInit();this.AaJ._ReInit();this.Ajk._ReInit(
);this.AqZ._ReInit();this.Vp._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AaI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AaH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaL).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ajk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.ArU={AjY:null,ArF:null,Background:null,TD:null,Ty:null,AbA:null,Abz:null,Aby:
null,Ab$:null,Ab_:null,Ab9:null,Ab1:null,Ab0:null,Abt:null,Abs:null,AbR:null,AbQ:
null,Ap8:null,Init:function(aArg){},BiR:function(G){this.AbA.R(AGO);this.Abz.R(A.
jV);this.Aby.R(A.jV);this.Ab$.R(AVi);this.Ab_.R(A.jV);this.Ab9.R(A.jV);this.Ab1.
R(A.jV);this.Ab0.R(A.jV);this.Abt.R(A.jV);this.Abs.R(A.jV);this.AbR.R(A.jV);this.
AbQ.R(A.jV);},BmK:function(G){this.Ty.Y(true);this.TD.Y(true);var It=this.If();if(
!It)return;this.TD.R(It.GetFPS().toFixed()+AVj);this.Ty.R(AVk);this.Ty.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(
this.AjY={I:this},0);A.Core.Timer._Init.call(this.ArF={I:this},0);A.acg.AJ._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TD={I:this},0);A.acg.
Text._Init.call(this.Ty={I:this},0);A.acg.Text._Init.call(this.AbA={I:this},0);A.
acg.Text._Init.call(this.Abz={I:this},0);A.acg.Text._Init.call(this.Aby={I:this}
,0);A.acg.Text._Init.call(this.Ab$={I:this},0);A.acg.Text._Init.call(this.Ab_={I:
this},0);A.acg.Text._Init.call(this.Ab9={I:this},0);A.acg.Text._Init.call(this.Ab1={
I:this},0);A.acg.Text._Init.call(this.Ab0={I:this},0);A.acg.Text._Init.call(this.
Abt={I:this},0);A.acg.Text._Init.call(this.Abs={I:this},0);A.acg.Text._Init.call(
this.AbR={I:this},0);A.acg.Text._Init.call(this.AbQ={I:this},0);A.acg.AJ._Init.call(
this.Ap8={I:this},0);this.__proto__=C.ArU;this.H(Acu);this.Ar(false);this.AjY.PK(
2000);this.AjY.We(1);this.AjY.Ar(true);this.ArF.Ar(true);this.Background.AY(0x3F
);this.Background.H(Acu);this.Background.L(0x78000000);this.TD.H(AGP);this.TD.A4(
0x14);this.TD.R(A.jV);this.TD.L(0xFFFFFC00);this.TD.Y(false);this.Ty.H(Asn);this.
Ty.A4(0x11);this.Ty.R(A.jV);this.Ty.Y(false);this.AbA.H(AGQ);this.AbA.A4(0x11);this.
AbA.R(A.jV);this.Abz.H(AGR);this.Abz.A4(0x11);this.Abz.R(A.jV);this.Aby.H(Axt);this.
Aby.A4(0x14);this.Aby.R(A.jV);this.Ab$.H(AGS);this.Ab$.A4(0x11);this.Ab$.R(A.jV);
this.Ab_.H(Axu);this.Ab_.A4(0x11);this.Ab_.R(A.jV);this.Ab9.H(AVl);this.Ab9.A4(0x14
);this.Ab9.R(A.jV);this.Ab1.H(AVm);this.Ab1.A4(0x11);this.Ab1.R(A.jV);this.Ab0.H(
AVn);this.Ab0.A4(0x14);this.Ab0.R(A.jV);this.Abt.H(AVo);this.Abt.A4(0x11);this.Abt.
R(A.jV);this.Abs.H(AGT);this.Abs.A4(0x14);this.Abs.R(A.jV);this.AbR.H(AVp);this.
AbR.A4(0x11);this.AbR.R(A.jV);this.AbQ.H(OZ);this.AbQ.A4(0x14);this.AbQ.R(A.jV);
this.Ap8.H(Axv);this.J(this.Background,0);this.J(this.TD,0);this.J(this.Ty,0);this.
J(this.AbA,0);this.J(this.Abz,0);this.J(this.Aby,0);this.J(this.Ab$,0);this.J(this.
Ab_,0);this.J(this.Ab9,0);this.J(this.Ab1,0);this.J(this.Ab0,0);this.J(this.Abt,
0);this.J(this.Abs,0);this.J(this.AbR,0);this.J(this.AbQ,0);this.J(this.Ap8,0);this.
AjY.Ms=[this,this.BiR];this.ArF.Ms=[this,this.BmK];this.TD.S(A.aaL(A.fl.Ak));this.
Ty.S(A.aaL(A.fl.Ak));this.AbA.S(A.aaL(A.fl.Ak));this.Abz.S(A.aaL(A.fl.Ak));this.
Aby.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));this.
Ab9.S(A.aaL(A.fl.Ak));this.Ab1.S(A.aaL(A.fl.Ak));this.Ab0.S(A.aaL(A.fl.Ak));this.
Abt.S(A.aaL(A.fl.Ak));this.Abs.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.
AbQ.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;
this.AjY._Done();this.ArF._Done();this.Background._Done();this.TD._Done();this.Ty.
_Done();this.AbA._Done();this.Abz._Done();this.Aby._Done();this.Ab$._Done();this.
Ab_._Done();this.Ab9._Done();this.Ab1._Done();this.Ab0._Done();this.Abt._Done();
this.Abs._Done();this.AbR._Done();this.AbQ._Done();this.Ap8._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AjY._ReInit();this.
ArF._ReInit();this.Background._ReInit();this.TD._ReInit();this.Ty._ReInit();this.
AbA._ReInit();this.Abz._ReInit();this.Aby._ReInit();this.Ab$._ReInit();this.Ab_.
_ReInit();this.Ab9._ReInit();this.Ab1._ReInit();this.Ab0._ReInit();this.Abt._ReInit(
);this.Abs._ReInit();this.AbR._ReInit();this.AbQ._ReInit();this.Ap8._ReInit();this.
TD.S(A.aaL(A.fl.Ak));this.Ty.S(A.aaL(A.fl.Ak));this.AbA.S(A.aaL(A.fl.Ak));this.Abz.
S(A.aaL(A.fl.Ak));this.Aby.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));this.Ab_.
S(A.aaL(A.fl.Ak));this.Ab9.S(A.aaL(A.fl.Ak));this.Ab1.S(A.aaL(A.fl.Ak));this.Ab0.
S(A.aaL(A.fl.Ak));this.Abt.S(A.aaL(A.fl.Ak));this.Abs.S(A.aaL(A.fl.Ak));this.AbR.
S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArF).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ab9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abt)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ap8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AFZ={Fv:null,Dd:null,Au:null,Jl:null,HC:null,T4:null,Bd:null,R9:null,Gm:null
,Gl:null,FN:0,A5:0,Bio:false,Init:function(aArg){},Ai:function(Ae){C.Dm.Ai.call(
this,Ae);this.Hn.Y(false);this.HX.Y(false);if(!!this.Dd){this.R9.R(this.Au.Format(
AVq));this.T4.R(this.Au.Format(AVr));}if(this.A5===1){this.HC.Y(true);this.HC.H(
this.R9.M);this.HC.L(A.jb.Bj);this.R9.L(this.Background.AQ);this.T4.L(A.jb.Bj);}
else if(this.A5===2){this.HC.Y(true);this.HC.H(this.T4.M);this.HC.L(A.jb.Bj);this.
R9.L(A.jb.Bj);this.T4.L(this.Background.AQ);}else{this.HC.Y(false);this.R9.L(this.
V.AQ);this.Bd.L(this.V.AQ);this.T4.L(this.V.AQ);}},Qf:function(G){if(this.Fr===1
)A.pe([this,this.UR],this);else if(this.Fr===4)A.pe([this,this.Aik],this);else if(
this.Fr===5)A.pe([this,this.Ah7],this);C.Dm.Qf.call(this,G);},J0:function(G){switch(
this.A5){case 0:C.Dm.J0.call(this,G);break;case 2:break;default:this.Ada(this);}
},JV:function(G){switch(this.A5){case 0:C.Dm.JV.call(this,G);break;default:this.
Ah6(this);}},Adc:function(G){var F;if(!!this.Dd)this.T7((F=this.Dd,F[1].call(F[0
])));},AbN:function(E){if(A.aaZ(this.Dd,E))return;if(!!this.Dd)A.z$([this,this.Adc
],this.Dd,0);this.Dd=E;if(!!E)A.zX([this,this.Adc],E,0);if(!!E)A.pe([this,this.Adc
],this);},T7:function(E){if(this.FN===E)return;this.FN=E;this.Au.Initialize(this.
FN);this.Am();},Ada:function(G){this.Fr=1;this.Am();if(this.Bl.Bv){A.pe([this,this.
UR],this);this.Bl.Ar(false);}this.Bl.Ar(true);},UR:function(G){this.Ep(this.A5+1
);},AlC:function(G){this.Fr=4;this.Am();if(this.Bl.Bv){A.pe([this,this.Aik],this
);this.Bl.Ar(false);}this.Bl.Ar(true);},AlB:function(G){this.Fr=5;this.Am();if(this.
Bl.Bv){A.pe([this,this.Ah7],this);this.Bl.Ar(false);}this.Bl.Ar(true);},Aik:function(
G){var B;var F;var BO=this.FN;if(this.A5===1)this.Au.Anc(this.Au.AjB+1);if(this.
A5===2)this.Au.Anf(this.Au.Avn+1);this.Au.Ani(0);this.T7(((B=(this.Au.JH()|0))<0
)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dd)(F=this.Dd,F[2].call(F[0],this.
FN));A.abo(this.Dd,0);}},Ah7:function(G){var B;var F;var BO=this.FN;if(this.A5===
1)this.Au.Anc(this.Au.AjB-1);if(this.A5===2)this.Au.Anf(this.Au.Avn-1);this.Au.Ani(
0);this.T7(((B=(this.Au.JH()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.
Dd)(F=this.Dd,F[2].call(F[0],this.FN));A.abo(this.Dd,0);}},DD:function(G){var F;
if(!this.N)return;switch(this.A5){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.
ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this
,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV
);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aec
));(F=this.N,F[1].call(F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.
UR];}break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].
call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].
call(F[0])).Cn(A.aaL(A.ach.AmC));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[
1].call(F[0])).Ch=[this,this.Ah6];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,
F[1].call(F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:this.
Fv.Aks((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:function(G){
this.Ep(0);},Ep:function(EF){var F;if(!this.A5)this.Fv.Aje((F=this.N,F[1].call(F[
0])));this.A5=EF;this.Bio=true;if((this.A5<0)||(this.A5>2))this.A5=0;this.DD(this
);this.Gm.Bv=!!this.A5;this.Gl.Bv=!!this.A5;this.Am();},Ah6:function(G){if(this.
A5>1)this.Ep(this.A5-1);},_Init:function(aArg){C.Dm._Init.call(this,aArg);A.Core.
Bt._Init.call(this.Au={I:this},0);A.Core.BJ._Init.call(this.Jl={I:this},0);A.acg.
AJ._Init.call(this.HC={I:this},0);A.acg.Text._Init.call(this.T4={I:this},0);A.acg.
Text._Init.call(this.Bd={I:this},0);A.acg.Text._Init.call(this.R9={I:this},0);A.
Core.BJ._Init.call(this.Gm={I:this},0);A.Core.BJ._Init.call(this.Gl={I:this},0);
this.__proto__=C.AFZ;this.H(UG);this.V.R(AVs);this.V.L(A.jb.Bj);this.Hn.Y(false);
this.HX.Y(false);this.Jl.Filter=1;this.HC.H(AVt);this.HC.L(0x55FFFFFF);this.T4.H(
AVu);this.T4.I0(true);this.Bd.H(AVv);this.Bd.A4(0x14);this.Bd.R(AVw);this.R9.H(AGU
);this.R9.I0(true);this.R9.A4(0x14);this.Gm.Filter=4;this.Gm.Bv=false;this.Gl.Filter=
5;this.Gl.Bv=false;this.J(this.HC,0);this.J(this.T4,0);this.J(this.Bd,0);this.J(
this.R9,0);this.Jl.BK=[this,this.Ada];this.T4.S(A.aaL(A.fl.EB));this.Bd.S(A.aaL(
A.fl.EB));this.R9.S(A.aaL(A.fl.EB));this.Gm.BK=[this,this.AlC];this.Gm.DS=[this,
this.Aik];this.Gl.BK=[this,this.AlB];this.Gl.DS=[this,this.Ah7];this.Fv=A._NewObject(
C.Ad7,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dm;this.Au._Done();
this.Jl._Done();this.HC._Done();this.T4._Done();this.Bd._Done();this.R9._Done();
this.Gm._Done();this.Gl._Done();C.Dm._Done.call(this);},_ReInit:function(){C.Dm.
_ReInit.call(this);this.Au._ReInit();this.Jl._ReInit();this.HC._ReInit();this.T4.
_ReInit();this.Bd._ReInit();this.R9._ReInit();this.Gm._ReInit();this.Gl._ReInit(
);this.T4.S(A.aaL(A.fl.EB));this.Bd.S(A.aaL(A.fl.EB));this.R9.S(A.aaL(A.fl.EB));
},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Dd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CO={B5:null,Amt:null,Aqk:null,Ej:null,Text:null,String:A.jV,BcF:A.jV,J6:0x12,AKt:
0,AQ:0xFFFFFFFF,BcG:true,GQ:function(CJ){var LC=(A.Core.AQH.isPrototypeOf(CJ)?CJ:
null);if(!!LC)this.BA2(this);return A.Core.O.GQ.call(this,CJ);},Bh:function(aSize
){A.Core.O.Bh.call(this,aSize);A.pe([this,this.At2],this);},Db:function(aFilter){
return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.BcG){this.BcF=E;this.BcG=false;}this.AKt=E.length;
A.pe([this,this.At2],this);},S:function(E){if(this.B5===E)return;this.B5=E;A.pe([
this,this.At2],this);},A8:function(E){if(this.Amt===E)return;this.Amt=E;A.pe([this
,this.At2],this);},CB:function(E){if(this.Aqk===E)return;this.Aqk=E;A.pe([this,this.
At2],this);},A4:function(E){if(E===this.J6)return;this.J6=E;this.Text.A4(E);},At2:
function(G){var B;var AKz=0;if(!this.AKt){this.Text.Y(false);return;}this.Text.Y(
true);this.Text.R(this.String);this.Text.KM(false);if(!!this.B5){AKz=this.B5.X_(
this.String,0,this.AKt);if(AKz<(((B=this.M)[2]-B[0])-(2*this.Text.I1))){this.Text.
S(this.B5);return;}}this.Text.KM(true);if(!!this.Amt){AKz=this.Amt.X_(this.String
,0,this.AKt);this.Text.S(this.Amt);if((AKz<(((B=this.M)[2]-B[0])-(2*this.Text.I1
)))&&(((B=this.Text.Db())[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.Aqk){
this.Text.S(this.Aqk);if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.
Text.Bmc((((this.Text.B5.Ascent+this.Text.B5.Descent)*75)/100)|0);}},L:function(
E){if(E===this.AQ)return;this.AQ=E;this.Text.L(E);},BA2:function(G){this.R(this.
BcF);},QT:function(E){if(A.aa0(this.Ej,E))return;this.Ej=E;this.Text.QT(E);},ARD:
function(){return A.abh(this.Text.Db(),this.M.slice(0,2));},AeS:function(Aol){return A.
abf(this.M.slice(0,2),this.Text.AeS(Aol));},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.CO;
this.H(AnZ);this.Ar(false);this.Text.AY(0x3F);this.Text.H(AnZ);this.Text.R(SV);this.
J(this.Text,0);},_Done:function(){this.__proto__=A.Core.O;this.Text._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Text._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.B5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Amt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aqk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AutoSizeText"};C.Ajz={Z:null,IC:null,Aem:null,IW:null,M4:null,Aeg:
null,Ael:null,Aek:null,Aeh:null,Aej:null,Aei:null,M5:null,NN:null,Mk:null,C8:function(
E){C.X$.C8.call(this,E);this.IC.L(E);this.Aem.L(E);this.IW.L(E);this.M4.L(E);this.
Mk.L(E);this.Aeg.L(E);this.M5.L(E);this.NN.L(E);this.Ael.L(E);this.Aek.L(E);this.
Aeh.L(E);this.Aej.L(E);this.Aei.L(E);},D$:function(G){C.X$.D$.call(this,G);this.
Xr(8,1,this.M4);this.Xr(12,1,this.Mk);this.Xr(11,1,this.Aeg);this.Xr(7,1,this.M5
);this.Xr(14,1,this.NN);this.Xr(1,4,this.IC);this.Xr(1,1,this.Aem);this.Xr(4,1,this.
IW);this.Xr(22,1,this.Ael);this.Xr(26,1,this.Aek);this.Xr(30,1,this.Aeh);this.Xr(
19,1,this.Aej);this.Xr(31,1,this.Aei);this.Text.Y(!this.Z.Vw(null,0x1));},Xr:function(
AII,EG,Afx){var AAr=false;if(!!A._GetAutoObject(A.Device.Device).Ap.Filter){var Ac0=
A._GetAutoObject(A.Device.Device).Ap.Filter.DX(AII,EG);if(!!Ac0){AAr=true;switch(
AII){case 14:{var AyH=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Ac0)?Ac0:
null);if(!!AyH)Afx.Ax(A._GetAutoObject(A.Device.Converter).A3_(AyH.A7));}break;case
7:{var AyH=(A.Device.GenderFilterCriterion.isPrototypeOf(Ac0)?Ac0:null);if(!!AyH
)Afx.Ax(A._GetAutoObject(A.Device.Converter).Amv(AyH.A7));}break;case 1:if(EG===
4)Afx.Ax(A.aaL(A.ach.ACY));else if(Ac0.Operator===4)AAr=false;break;case 22:switch(
Ac0.Operator){case 0:case 3:Afx.Ax(A.aaL(A.ach.APW));break;default:Afx.Ax(A.aaL(
A.ach.AmF));}break;case 26:switch(Ac0.Operator){case 0:case 3:Afx.Ax(A.aaL(A.ach.
APU));break;default:Afx.Ax(A.aaL(A.ach.ACL));}break;default:;}}else if((AII===1)&&(
EG===4)){AAr=true;Afx.Ax(A.aaL(A.ach.Aed));}}else if((AII===1)&&(EG===4)){AAr=true;
Afx.Ax(A.aaL(A.ach.Aed));}Afx.Y(AAr);},_Init:function(aArg){C.X$._Init.call(this
,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.An._Init.call(this.IC={I:this
},0);A.acg.An._Init.call(this.Aem={I:this},0);A.acg.An._Init.call(this.IW={I:this
},0);A.acg.An._Init.call(this.M4={I:this},0);A.acg.An._Init.call(this.Aeg={I:this
},0);A.acg.An._Init.call(this.Ael={I:this},0);A.acg.An._Init.call(this.Aek={I:this
},0);A.acg.An._Init.call(this.Aeh={I:this},0);A.acg.An._Init.call(this.Aej={I:this
},0);A.acg.An._Init.call(this.Aei={I:this},0);A.acg.An._Init.call(this.M5={I:this
},0);A.acg.An._Init.call(this.NN={I:this},0);A.acg.An._Init.call(this.Mk={I:this
},0);this.__proto__=C.Ajz;this.Z.AY(0x3F);this.Z.H(Axw);this.Z.Kf(3);this.IC.H(AGV
);this.Aem.H(AVx);this.Aem.Aj(true);this.IW.H(AVy);this.IW.Aj(true);this.M4.H(AVz
);this.M4.Aj(true);this.Aeg.H(AVA);this.Aeg.Aj(true);this.Ael.H(AGW);this.Ael.Aj(
true);this.Aek.H(AGW);this.Aek.Aj(true);this.Aeh.H(AVB);this.Aeh.Aj(true);this.Aej.
H(AGX);this.Aej.Aj(true);this.Aei.H(AGX);this.Aei.Aj(true);this.M5.H(AGY);this.M5.
Aj(true);this.NN.H(AGZ);this.NN.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mk.
H(AGY);this.Mk.Aj(true);this.Kn(this.TK,-3);this.Kn(this.DZ,-3);this.Kn(this.A_,-
3);this.Kn(this.AP,-2);this.J(this.Z,-2);this.J(this.IC,-2);this.J(this.Aem,-2);
this.J(this.IW,-2);this.J(this.M4,-2);this.J(this.Aeg,-2);this.J(this.Ael,-2);this.
J(this.Aek,-2);this.J(this.Aeh,-2);this.J(this.Aej,-2);this.J(this.Aei,-2);this.
J(this.M5,-2);this.J(this.NN,-2);this.J(this.Mk,0);this.IC.Ax(A.aaL(A.ach.Aed));
this.Aem.Ax(A.aaL(A.ach.APL));this.IW.Ax(A.aaL(A.ach.APa));this.M4.Ax(A.aaL(A.ach.
ACS));this.Aeg.Ax(A.aaL(A.ach.Abd));this.Ael.Ax(A.aaL(A.ach.AmF));this.Aek.Ax(A.
aaL(A.ach.ACL));this.Aeh.Ax(A.aaL(A.ach.APJ));this.Aej.Ax(A.aaL(A.ach.APK));this.
Aei.Ax(A.aaL(A.ach.API));this.M5.Ax(A.aaL(A.ach.ACU));this.NN.Ax(A.aaL(A.ach.Au3
));this.Mk.Ax(A.aaL(A.ach.AC1));},_Done:function(){this.__proto__=C.X$;this.Z._Done(
);this.IC._Done();this.Aem._Done();this.IW._Done();this.M4._Done();this.Aeg._Done(
);this.Ael._Done();this.Aek._Done();this.Aeh._Done();this.Aej._Done();this.Aei._Done(
);this.M5._Done();this.NN._Done();this.Mk._Done();C.X$._Done.call(this);},_ReInit:
function(){C.X$._ReInit.call(this);this.Z._ReInit();this.IC._ReInit();this.Aem._ReInit(
);this.IW._ReInit();this.M4._ReInit();this.Aeg._ReInit();this.Ael._ReInit();this.
Aek._ReInit();this.Aeh._ReInit();this.Aej._ReInit();this.Aei._ReInit();this.M5._ReInit(
);this.NN._ReInit();this.Mk._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(
D){var B;C.X$._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aeg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ael)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aeh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mk)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"};C.Al4={H0:null,Cw:
function(G){if(A._GetAutoObject(A.Device.Device).Br.Ld())A._GetAutoObject(A.Device.
Device).A6(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);this.
H0.Gf();this.H0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);C.Q3.Cw.call(
this,G);},AnI:function(){C.Q3.AnI.call(this);switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.Temperature).Bx5(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ko));this.C5.L(A._GetAutoObject(A.acj.Temperature).Bx8(A._GetAutoObject(A.Device.
Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ko));this.JE.L(A._GetAutoObject(
A.acj.Temperature).Bx6(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ko));this.Hw.L(A._GetAutoObject(A.acj.Temperature).Bx7(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ko));this.My.L(this.
JE.AQ);this.TemperatureUnit.L(this.JE.AQ);}break;default:;}},Ack:function(){C.Q3.
Ack.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
N.Cn(A.aaL(A.ach.AP4));this.N.C2(A.aaL(A.ach.AmE));}break;case 4:{this.N.Cn(null
);this.N.C2(A.aaL(A.ach.Au$));}break;default:;}},Wr:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Ko>3240)&&(A._GetAutoObject(A.Device.Device).Ko<5460)){A._GetAutoObject(A.Device.
Device).Ahp();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:{this.H0.OnSetTemperature(A._GetAutoObject(A.Device.Device).Ko);var BZ=A._GetAutoObject(
A.Device.Converter).Ar8(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ko);this.H0.OnSetRatingTemperature(BZ);this.H0.Ck(A._GetAutoObject(
A.Device.Device).Br);A._GetAutoObject(C.AX).Fl();}break;case 4:this.AJ0(this);break;
default:;}},Aky:function(G){C.Q3.Aky.call(this,G);switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 3:A._GetAutoObject(A.Device.Device).Dp(9);break;case 4:
this.AJ0(this);break;default:;}},Axa:function(){C.Q3.Axa.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:this.JE.R(A._GetAutoObject(A.acj.Temperature
).Byb(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Ko));break;default:;}},Axb:function(){C.Q3.Axb.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{A._GetAutoObject(A.Device.Device).Wh(A._GetAutoObject(
A.acj.Temperature).Bx9(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ko));this.I5.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.
Device).Wh(16711680);this.I5.Ar(true);}break;default:this.I5.Ar(false);}},ATR:function(
){this.C5.Ax(A.aaL(A.ach.Au_));this.C5.Cu(A._GetAutoObject(A.acj.Temperature).Byc(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ko));this.NL.Cu(0);},_Init:function(aArg){C.Q3._Init.call(this,aArg);this.__proto__=
C.Al4;this.Dk(C.IA);this.H0=A._NewObject(A.Device.Rating,0);},_Mark:function(D){
var B;C.Q3._Mark.call(this,D);if((B=this.H0)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::AnimalActionTemperatureScreen"};C.Ahe={N1:null,DE:null
,Ic:null,Bd:null,AtV:null,String:A.jV,Aw1:A.jV,Mo:7,AjQ:2,KN:0,AT4:false,Init:function(
aArg){},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);this.DE.H([0,0,aSize[0]-
this.AjQ,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DE.S(A.aaL(A.fl.By));else this.DE.
S(A.aaL(A.fl.Ak));this.Ic.S(this.DE.B5);this.Ic.H(this.DE.M);this.Bd.H([].concat([
0,aSize[1]-2],aSize));A.pe([this,this.Wl],this);},R:function(E){if(this.String===
E)return;this.String=E;this.DE.R(E);},Ag_:function(E){if(this.Aw1===E)return;this.
Aw1=E;this.Ic.R(E);},AbM:function(E){this.Mo=E;if(E<10)this.ASo(2);else if(E<40)
this.ASo(1);else this.ASo(0);A.pe([this,this.Wl],this);},Wl:function(G){var B;while(
!!this.Bd.Ag)this.HI(this.Bd.Ag);if(this.Mo>1){var AcV=this.AN$();var A1e=this.AN9(
);var Ao2=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;var Azl;var AKm;var Att;var AlJ=
null;if(!!this.N1&&(this.N1.AV>0))AlJ=this.N1.KU;while((AcV>=A1e)&&(AcV>0)){var As6=
A._NewObject(C.Ai_,0);x1=Math.round(((((B=this.M)[2]-B[0])-this.AjQ)*(((AcV-A1e)
/86400)|0))/this.Mo)|0;x2=Math.round(((((B=this.M)[2]-B[0])-this.AjQ)*((((AcV-A1e
)/86400)|0)+1))/this.Mo)|0;while(!!AlJ&&(AlJ.Timestamp>=AcV)){if(AlJ.Timestamp<(
AcV+86400))As6.Oq(AlJ.A7,AlJ.Timestamp);AlJ=AlJ.Ag;}var AtF=0;if(As6.AV>0)AtF=((((((
B=this.M)[3]-B[1])/2)|0)-((B=this.Bd.M)[3]-B[1]))/As6.AV)|0;else if(this.Mo<10){
AtF=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bd.M)[3]-B[1]);Att=A._NewObject(A.acg.
Text,0);Att.H([x1,Ao2,x2,Ao2+AtF]);Att.S(A.aaL(A.fl.By));Att.L(A.jb.Text);Att.R(
A.aaR(A.acf.AeO));this.J(Att,0);}var AJb=As6.KU;var P=0;while(!!AJb){if(P>=As6.AV
)throw new Error(AVC);Azl=A._NewObject(A.acg.AJ,0);Azl.L(A._GetAutoObject(A.acj.
Assessment).Qc(AJb.A7));if(P===(As6.AV-1))Azl.H([x1,Ao2+(P*AtF),x2,this.Bd.M[1]]
);else Azl.H([x1,Ao2+(P*AtF),x2,Ao2+((P+1)*AtF)]);this.J(Azl,0);AJb=AJb.Ag;P=P+1;
}if(this.AT4){var BwT=A._GetAutoObject(A.Device.Helper).ApY(A._GetAutoObject(A.Device.
Helper).Dt());var BwS=A._GetAutoObject(A.Device.Helper).ApY(AcV);if(BwT===BwS){var
AKP=A._NewObject(A.acg.Ad3,0);AKP.L(A.jb.Text);var Bc2=(x1+this.AjQ)+(((x2-x1)/2
)|0);AKP.H([Bc2-4,this.Bd.M[1]-4,Bc2+4,this.Bd.M[1]]);AKP.Y8(this.AtV);this.J(AKP
,0);}}AcV=AcV-86400;if(this.AjQ>0){AKm=A._NewObject(A.acg.AJ,0);AKm.H([x1,Ao2,x1+
this.AjQ,Ao2+((((B=this.M)[3]-B[1])/2)|0)]);AKm.L(A.jb.Bd);this.J(AKm,0);}}}},AbO:
function(E){this.N1=E;A.pe([this,this.Wl],this);},ASo:function(E){if(this.AjQ===
E)return;this.AjQ=E;A.pe([this,this.Wl],this);},C8:function(E){if(this.KN===E)return;
this.KN=E;this.DE.L(E);this.Ic.L(E);},AN9:function(){var B;return this.AN$()-(((((
B=this.Mo)<0)?B+0x100000000:B)-1)*86400);},AN$:function(){return A._GetAutoObject(
A.Device.Converter).Aht();},Bmf:function(E){if(this.AT4===E)return;this.AT4=E;A.
pe([this,this.Wl],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
acg.Text._Init.call(this.DE={I:this},0);A.acg.Text._Init.call(this.Ic={I:this},0
);A.acg.AJ._Init.call(this.Bd={I:this},0);C.Aw_._Init.call(this.AtV={I:this},0);
this.__proto__=C.Ahe;this.H(BC);this.Ar(false);this.DE.H(Axx);this.DE.HH(5);this.
DE.A4(0x11);this.DE.L(A.jb.Text);this.Ic.H(Axx);this.Ic.HH(5);this.Ic.A4(0x14);this.
Ic.L(A.jb.Text);this.Bd.H(AVD);this.Bd.L(A.jb.Bd);this.KN=A.jb.Text;this.AtV.H(AVE
);this.J(this.DE,0);this.J(this.Ic,0);this.J(this.Bd,0);this.DE.S(A.aaL(A.fl.Ak)
);this.Ic.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.DE._Done();this.Ic._Done();this.Bd._Done();this.AtV._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.DE._ReInit(
);this.Ic._ReInit();this.Bd._ReInit();this.AtV._ReInit();this.DE.S(A.aaL(A.fl.Ak
));this.Ic.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.N1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DE)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AtV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4e={Ag:null,Timestamp:0,A7:0,_Init:function(
aArg){this.__proto__=C.A4e;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ai_={KU:null,MP:null,AV:0,Oq:
function(A3,P5){var G9;G9=A._NewObject(C.A4e,0);G9.A7=A3;G9.Timestamp=P5;if(!this.
KU){this.KU=G9;this.MP=G9;this.AV=1;}else{this.MP.Ag=G9;this.MP=G9;this.AV=this.
AV+1;}},_Init:function(aArg){this.__proto__=C.Ai_;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Eb={Z:null,Aw:null,Init:function(
aArg){A.pe([this,this.MC],this);},Dw:function(G){var B;var E7=0;var X=this.AR;switch(
this.Cl.CK){case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;
default:;}X=this.R5(X,E7,0x414);if(!!X)this.A9(X);if(!!X&&((X.T&0x400)===0x400))
this.Z.Hy(X,true,null,null);this.DD(this);},Alz:function(G){A._GetAutoObject(C.AX
).Fl();},Apm:function(G){var B;if(!!(C.Ci.isPrototypeOf(B=this.AR)?B:null).Af7)A.
pe((C.Ci.isPrototypeOf(B=this.AR)?B:null).Af7,this);},E9:function(G){var B;this.
Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.
Z.Bq[1]);},DD:function(G){var B;var GL=(C.Ci.isPrototypeOf(B=this.AR)?B:null);if(
!!GL){this.N.Ho(A.jV);this.N.B0(GL.Aw4);this.N.I4.Dl(255);this.N.HL.Dl(GL.AwB);this.
N.AEr(GL.AuN);this.N.Ana(GL.Amu);this.N.CS(GL.APD);this.N.C2(GL.AqA);GL.A2g(this
);}},MC:function(s){this.DD(s);},G8:function(G){A.pe([this,this.E9],this);},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);
C.Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.Eb;this.Background.H(Q$);this.
Background.L(A.jb.C0);this.N.H(WU);this.N.Ar(false);this.N.Y(true);this.Z.H(E4);
this.Z.Kf(1);this.Aw.H(IK);this.J(this.Z,0);this.J(this.Aw,0);this.Z.Ej=[this,this.
G8];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Aw.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Z._ReInit();this.Aw._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceScreen"};C.AS9={Nt:null,AR9:null,AdG:null,Vj:
null,GH:null,PopupTimeout:null,AbS:null,Agh:null,PopupIdToString:null,As2:null,Text:
A.jV,Akl:A.jV,AJv:A.jV,AkF:0,AKB:-1,AyG:-1,AJ7:0,AS$:0,A1n:false,CT:function(){this.
A9G(this.PopupIdToString.BQ(this.AS$));},Init:function(aArg){this.BnD(this);},BfC:
function(G){var B;if(this.AkF>0){this.A9U((this.AkF/1000)|0);this.PopupTimeout.We(
0);this.PopupTimeout.PK(1000);this.PopupTimeout.StartTimer(this);}else this.PopupTimeout.
Aw0(this);},Bfy:function(G){var Qm=this.Text;var AfA=this.Akl;var AJ5=A.abi(16,A.
jV,null);var index=0;var AyB=0;while(AfA!==A.jV){AyB=AfA.indexOf(A.Device.PopupParamSeparator
,0);if(AyB!==-1){AJ5.Set(index,A.ab1(AfA,AyB,(AfA.length-AyB)+1));AfA=A.ab1(AfA,
0,AyB+1);index=index+1;if(index>=16){A.ab5("%s",(AVF+AfA)+AVG);AfA=A.jV;}}else{AJ5.
Set(index,AfA);AfA=A.jV;}}index=0;while(index<Qm.length){if((Qm.charCodeAt(index
)||0)===0x7B){var BcE=Qm.indexOf(String.fromCharCode(0x7D),index);if(BcE===-1){A.
ab5("%s",(((AVH+Qm)+AVI)+index.toFixed())+Afg);index=Qm.length;}else{var Ber=(BcE-
index)-1;var A2Q=A.abW(Qm,index+1,Ber);var AJ4=A.wz(A2Q,-1,10);Qm=A.ab1(Qm,index
,Ber+2);if(A2Q===AVJ)this.Bmw(index);else if(((AJ4>0)&&(AJ4<=16))&&(this.Akl!==A.
jV)){Qm=A.abU(Qm,AJ5.Get(AJ4-1),index);if(this.A1n===true)this.Bmv(A.wz(AJ5.Get(
AJ4-1),0,10));}else A.ab5("%s",(AVK+A2Q)+AVL);}}index=index+1;}this.Bmu(Qm);},Cw:
function(G){A.pe([this,this.BfC],this);},Ai:function(Ae){var B;this.AdG.H(A.aaT(
this.GH.Db(),AhC));this.Vj.H(A.aaT(this.GH.Db(),AhC));if(!!this.Nt){this.Nt.H(A.
abM(this.Nt.M,this.GH.M[0]));this.Nt.H(A.abO(this.Nt.M,this.GH.M[3]+10));this.Nt.
H(A.abL(this.Nt.M,(B=this.GH.M)[2]-B[0]));this.Nt.H(A.abI(this.Nt.M,8));this.AdG.
H(A.abh(A.aaT(this.GH.Db(),AhC),AG0));this.Vj.H(A.abh(A.aaT(this.GH.Db(),AhC),AG0
));}else{this.AdG.H(A.aaT(this.GH.Db(),AhC));this.Vj.H(A.aaT(this.GH.Db(),AhC));
}},Dw:function(G){var Jr=(A.Core.BJ.isPrototypeOf(G)?G:null);if((Jr.CK===4)&&((this.
Vj.M[1]+this.M[1])<this.M[1])){this.GH.H(A.abO(this.GH.M,this.GH.M[1]+28));this.
Am();}else if((Jr.CK===5)&&((this.Vj.M[3]+this.M[1])>this.N.M[1])){this.GH.H(A.abO(
this.GH.M,this.GH.M[1]-28));this.Am();}if((Jr.CK===6)&&!!this.D3().Cv)this.D3().
AEB(1);else if((Jr.CK===7)&&!!this.D3().Cc)this.D3().AEB(3);},IP:function(G){switch(
this.D3().AgX){case 1:this.Alz(this);break;case 3:this.Apm(this);break;case 2:this.
AzT(this);break;case 0:break;default:A.ab5("%s%e",AVM,this.D3().AgX);}},Alz:function(
G){var B;(B=this.D3().Cv)?B[1].call(B[0],this):null;},Apm:function(G){var B;(B=this.
D3().Cc)?B[1].call(B[0],this):null;},AzT:function(G){var B;(B=this.D3().Ch)?B[1].
call(B[0],this):null;},LJ:function(G){this.N.IX.L((this.N.IX.AQ&0x00FFFFFF)|(100<<
24));},EV:function(G){var B;this.PopupTimeout.Aw0(this);},A9G:function(E){if(this.
Text===E)return;this.Text=E;A.pe([this,this.Bfy],this);},Bzf:function(G){var B;this.
A9U(this.AyG-1);if(this.AyG<=0){this.PopupTimeout.Aw0(this);(B=this.AR9)?B[1].call(
B[0],this):null;}},A9I:function(E){if(this.AkF===E)return;this.AkF=E;A.pe([this,
this.BfC],this);},A9u:function(E){if(this.Akl===E)return;this.Akl=E;A.pe([this,this.
Bfy],this);},Bmu:function(E){if(this.AJv===E)return;this.AJv=E;this.AAJ(this);this.
Bw0(this);},AAJ:function(G){if((this.AyG!==-1)&&(this.AKB!==-1)){var BxP=this.As2.
Format(AVN);this.GH.R(A.abU(this.AJv,BxP,this.AKB));}else this.GH.R(this.AJv);this.
GH.H(AG1);},Bmw:function(E){if(this.AKB===E)return;this.AKB=E;this.AAJ(this);},A9U:
function(E){if(this.AyG===E)return;this.AyG=E;this.As2.AE7(E);A.pe([this,this.AAJ
],this);},Bw0:function(G){this.GH.Db();if(this.GH.M[1]<=this.M[1])this.GH.H(A.abO(
this.GH.M,28));this.Am();},A9W:function(E){if(this.A1n===E)return;this.A1n=E;if(
E===true)A.pe([this,this.BzP],this);},BzP:function(G){if(!this.Nt){this.Nt=A._NewObject(
A.acq.ACG,0);this.Nt.Gn(0);this.Nt.E1(100);this.Nt.OnSetAppearance(this.AbS);this.
J(this.Nt,0);this.Ahh(this.Nt,this.GH);}this.Nt.Bx(this.AJ7);},Bmv:function(E){if(
this.AJ7===E)return;this.AJ7=E;if(!!this.Nt)this.Nt.Bx(this.AJ7);},BnD:function(
G){var B;this.N.Dl(0);this.Agh.Anx(this);},Bl8:function(E){if(this.AS$===E)return;
this.AS$=E;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ._Init.call(
this.AdG={I:this},0);A.acg.Cz._Init.call(this.Vj={I:this},0);A.acg.Text._Init.call(
this.GH={I:this},0);A.Core.Timer._Init.call(this.PopupTimeout={I:this},0);A.acq.
ACH._Init.call(this.AbS={I:this},0);A.acl.Ga._Init.call(this.Agh={I:this},0);A.Device.
PopupIdToString._Init.call(this.PopupIdToString={I:this},0);A.Core.Bt._Init.call(
this.As2={I:this},0);this.__proto__=C.AS9;var B;this.H(Ca);this.Background.H(E4);
this.Background.L(0x88FFFFFF);this.Background.Y(false);this.Ec.Ar(false);this.Ec.
Y(false);this.AdG.H(AG2);this.AdG.L(A.jb.CF);this.Vj.H(AG2);this.Vj.NX(2);this.Vj.
L(A.jb.Text);this.GH.H(AG1);this.GH.HH(10);this.GH.I0(true);this.GH.Bmt(0);this.
GH.KM(true);this.GH.L(A.jb.Text);this.PopupTimeout.PK(0);this.AbS.A9N(0);this.AbS.
A9L(A.jb.AR);this.AbS.A9K(0);this.AbS.AFl(AGJ);this.Agh.HG(1);this.Agh.B1=255;this.
Agh.Cr=0;this.Kn(this.Ec,-1);this.J(this.AdG,0);this.J(this.Vj,0);this.J(this.GH
,0);this.GH.S(A.aaL(A.fl.Ah));this.PopupTimeout.Ms=[this,this.Bzf];this.AbS.A9M(
A.aaL(A.ach.NM));this.AbS.A9J(A.aaL(A.ach.NM));this.Agh.Q=[B=this.N,B.AvH,B.AZp];
this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.AdG._Done();this.Vj.
_Done();this.GH._Done();this.PopupTimeout._Done();this.AbS._Done();this.Agh._Done(
);this.PopupIdToString._Done();this.As2._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.AdG._ReInit();this.Vj._ReInit();this.GH.
_ReInit();this.PopupTimeout._ReInit();this.AbS._ReInit();this.Agh._ReInit();this.
PopupIdToString._ReInit();this.As2._ReInit();this.GH.S(A.aaL(A.fl.Ah));this.CT();
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Nt)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AR9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AdG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupTimeout)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.As2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"
};C.Mg={Ai:function(Ae){C.Ci.Ai.call(this,Ae);var FG=A.jb.CF;var GJ=A.jb.Text;if(
this.Hb){FG=A.jb.Text;GJ=A.jb.Bj;}if(!this.LB){this.Background.L(FG);this.V.L(A.
jb.AmG);}else if(this.Qg){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(
this.Ky){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.L(FG
);this.V.L(GJ);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=
C.Mg;},_className:"Application::DarkThemeMenuItem"};C.AmV={Adg:0,_Init:function(
aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.AmV;},_className:"Application::MenuItemPopUp"
};C.OverlayMenu={Xh:function(G){A._GetAutoObject(A.Device.Device).Dp(0);},KK:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cc=[this,this.A2h];this.Bw.Ch=
null;this.Bw.Cv=[this,this.Xh];this.Bw.B0(A.aaR(A.acf.Ok));this.Bw.Cn(null);this.
Bw.CS(A.aaL(A.ach.Aeb));}return this.Bw;},A2h:function(G){var B;if(!!(C.Ci.isPrototypeOf(
B=this.AR)?B:null))(C.Ci.isPrototypeOf(B=this.AR)?B:null).IP(this);},Cw:function(
G){},AH7:function(s){this.Cw(s);},EV:function(G){},AxY:function(s){this.EV(s);},
_Init:function(aArg){C.AaV._Init.call(this,aArg);this.__proto__=C.OverlayMenu;},
_className:"Application::OverlayMenu"};C.AO8={VN:null,Yt:null,Ym:null,Init:function(
aArg){this.A9(this.VN);},Ac$:function(G){var Aa=(C.Ci.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yt)A._GetAutoObject(A.Device.Device).A6(6,true,A.jV,0,[this
,this.Bz3]);else if(Aa===this.VN)A._GetAutoObject(A.Device.Device).A6(9,true,A.jV
,0,[this,this.BAo]);else if(Aa===this.Ym)A._GetAutoObject(C.AX).BS(4);else throw new
Error(Axy);A._GetAutoObject(A.Device.Device).Dp(0);},Bz3:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).AFJ();},BAo:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).AwS();
},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Mg._Init.call(this.
VN={I:this},0);C.Mg._Init.call(this.Yt={I:this},0);C.Mg._Init.call(this.Ym={I:this
},0);this.__proto__=C.AO8;this.H(Acu);this.VN.H(BC);this.VN.Ar(true);this.VN.U(A.
aaR(A.acf.A_x));this.VN.Bg(true);this.Yt.H(JQ);this.Yt.Ar(true);this.Yt.U(A.aaR(
A.acf.A_f));this.Yt.Bg(true);this.Ym.H(P1);this.Ym.Ar(true);this.Ym.U(A.aaR(A.acf.
Sz));this.Ym.Bg(true);this.J(this.VN,0);this.J(this.Yt,0);this.J(this.Ym,0);this.
VN.AN=[this,this.Ac$];this.Yt.AN=[this,this.Ac$];this.Ym.AN=[this,this.Ac$];this.
Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.VN._Done();this.
Yt._Done();this.Ym._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.
OverlayMenu._ReInit.call(this);this.VN._ReInit();this.Yt._ReInit();this.Ym._ReInit(
);this.VN.U(A.aaR(A.acf.A_x));this.Yt.U(A.aaR(A.acf.A_f));this.Ym.U(A.aaR(A.acf.
Sz));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ym)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeOverlayMenu"};C.
Gz={Aag:null,OverlayMenu:null,Wn:null,A3a:null,K7:null,A2P:null,Akm:null,NZ:null
,Azr:100,Init:function(aArg){var B;A.zX([this,this.BdX],[B=A._GetAutoObject(A.Device.
Device),B.AvI,B.Ax7],0);A.zX([this,this.BdR],[B=A._GetAutoObject(A.Device.Device
),B.ARQ,B.AZn],0);A.zX([this,this.A1_],[B=A._GetAutoObject(A.Device.Device),B.Avx
,B.Ax0],0);A.zX([this,this.ByN],[B=A._GetAutoObject(A.Device.Device),B.Avu,B.AxZ
],0);A.zX([this,this.ByO],[B=A._GetAutoObject(A.Device.Device),B.A7M,B.Bab],0);A.
zX([this,this.Apn],[B=A._GetAutoObject(A.Device.Device),B.AR1,B.AZv],0);A.zX([this
,this.Beb],[B=A._GetAutoObject(A.Device.Device),B.Wc,B.WW],0);A.pe([this,this.BdX
],this);A.pe([this,this.BdR],this);A.pe([this,this.Apn],this);A.pe([this,this.Beb
],this);this.A3a.At([B=this.Wn,B.ADN,B.Y4]);this.J(this.Wn,0);this.A9(this.Wn);this.
BwD(this);},Ai:function(Ae){},BdR:function(G){var B;if(A._GetAutoObject(A.Device.
Device).ADz){if(!this.Aag){this.Aag=A._NewObject(C.ArU,0);this.Aag.H(A.abJ(this.
Aag.M,this.Wn.M.slice(0,2)));this.Aag.H(A.abO(this.Aag.M,this.Wn.M[3]-((B=this.Aag.
M)[3]-B[1])));this.J(this.Aag,1);}}else{if(!!this.Aag)this.HI(this.Aag);this.Aag=
null;}},BdX:function(G){switch(A._GetAutoObject(A.Device.Device).OverlayMenu){case
0:this.Dp(null);break;case 1:this.Dp(A._NewObject(C.AO8,0));break;case 8:this.Dp(
A._NewObject(C.ALm,0));break;case 2:this.Dp(A._NewObject(C.ALi,0));break;case 3:
this.Dp(A._NewObject(C.ALp,0));break;case 4:this.Dp(A._NewObject(C.ATs,0));break;
case 5:this.Dp(A._NewObject(C.AUW,0));break;case 6:this.Dp(A._NewObject(C.AS4,0)
);break;case 7:this.Dp(A._NewObject(C.Al7,0));break;case 11:this.Dp(A._NewObject(
C.ALV,0));break;case 12:this.Dp(A._NewObject(C.ALU,0));break;case 9:this.Dp(A._NewObject(
C.AQ0,0));break;case 10:this.Dp(A._NewObject(C.ALQ,0));break;case 14:this.Dp(A._NewObject(
C.AQW,0));break;case 15:this.Dp(A._NewObject(C.AQX,0));break;case 13:this.Dp(A._NewObject(
C.AQY,0));break;case 16:this.Dp(A._NewObject(C.ATh,0));break;case 17:this.Dp(A._NewObject(
C.AMf,0));break;default:throw new Error(AVO+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Dp:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.Wj).Aq9(null);this.NZ.Aqa(this.OverlayMenu,A._GetAutoObject(
C.AwV),null,null,[B=this.OverlayMenu,B.AxY],null,true);this.A9(this.Wn);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.NZ.Ako(this.OverlayMenu,A._GetAutoObject(C.AwU),null
,null,null,null,null,[B=this.OverlayMenu,B.AH7],null,false);this.A9(this.NZ);A._GetAutoObject(
C.Wj).Aq9(this.OverlayMenu.KK());}else if(!!this.K7){this.A9(this.NZ);A._GetAutoObject(
C.Wj).Aq9(this.K7.Aj5().KK());}},Ag4:function(E){var B;if(this.K7===E)return;if(
!!this.K7){A._GetAutoObject(C.Wj).Aq9(null);this.NZ.Aqa(this.K7.Aj5(),A._GetAutoObject(
C.AeU),null,null,[B=this.K7.Aj5(),B.AxY],null,false);this.A9(this.Wn);}this.K7=E;
if(!!this.K7){this.NZ.Ako(this.K7.Aj5(),A._GetAutoObject(C.AeU),null,null,null,null
,null,[this,this.Bkn],null,false);this.A9(this.NZ);A._GetAutoObject(C.Wj).Aq9(this.
K7.Aj5().KK());}else if(!!this.OverlayMenu){this.A9(this.NZ);A._GetAutoObject(C.
Wj).Aq9(this.OverlayMenu.KK());}},BwD:function(G){var B;var F;this.J(this.A2P,0);(
F=A._GetAutoObject(C.Wj),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wj).M)[3]-B[1]))));this.Zf(this.NZ);},A1_:function(G){if(A._GetAutoObject(A.Device.
Device).Amd)switch(A._GetAutoObject(A.Device.Device).KB){case 4:case 39:case 5:break;
case 40:A._GetAutoObject(C.AX).Aha(4);break;default:if(A._GetAutoObject(A.Device.
Device).AaF<98)A._GetAutoObject(C.AX).BS(4);}else{this.Azr=100;this.BbM();}},ByN:
function(G){this.BbM();},BbM:function(){if(!A._GetAutoObject(A.Device.Device).Amd
){if(A._GetAutoObject(A.Device.Device).AaF<=2){if(this.Azr>2)switch(A._GetAutoObject(
A.Device.Device).KB){case 39:break;case 4:case 40:A._GetAutoObject(C.AX).Aha(39);
break;default:A._GetAutoObject(C.AX).BS(39);}}else if(A._GetAutoObject(A.Device.
Device).AaF<=10){if(this.Azr>10)switch(A._GetAutoObject(A.Device.Device).KB){case
40:break;case 4:case 39:A._GetAutoObject(C.AX).Aha(40);break;default:A._GetAutoObject(
C.AX).BS(40);}}else if(A._GetAutoObject(A.Device.Device).AaF<=20){if(this.Azr>20
)switch(A._GetAutoObject(A.Device.Device).KB){case 40:break;case 4:case 39:A._GetAutoObject(
C.AX).Aha(40);break;default:A._GetAutoObject(C.AX).BS(40);}}else switch(A._GetAutoObject(
A.Device.Device).KB){case 39:case 4:case 40:A._GetAutoObject(C.AX).Fl();break;default:;
}this.Azr=A._GetAutoObject(A.Device.Device).AaF;}},ByO:function(G){switch(A._GetAutoObject(
A.Device.Device).Ap1){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A6(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Am_(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A6(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Am_(0
);}break;default:A.ab5("%s",AVP+A._GetAutoObject(A.Device.Device).Ap1.toFixed());
}},Apn:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dp(0);A._GetAutoObject(C.AX).BS(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KB===5)A._GetAutoObject(C.AX).Aha(3);break;
default:;}},Beb:function(G){switch(A._GetAutoObject(A.Device.Device).Ahw){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Ua(false);break;case 5:{A._GetAutoObject(
A.Device.Device).Wh(65535);A._GetAutoObject(A.Device.Device).Ua(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Wh(255);A._GetAutoObject(A.Device.Device).Ua(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wh(16776960);A._GetAutoObject(
A.Device.Device).Ua(true);}break;case 6:{A._GetAutoObject(A.Device.Device).Wh(16711935
);A._GetAutoObject(A.Device.Device).Ua(true);}break;default:A.ab5("%s",AVQ+A._GetAutoObject(
A.Device.Device).Ahw.toFixed());}},Bkn:function(G){var B;this.K7.Aj5().Cw(this);
this.K7.Bzd(this);},Bjt:function(){return this.K7;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.Akm._Init.call(this.Akm={I:this},0);C.NZ._Init.call(this.
NZ={I:this},0);this.__proto__=C.Gz;this.H(Ca);this.NZ.H(Q$);this.J(this.NZ,0);this.
Wn=A._NewObject(C.Wn,0);this.A3a=A._GetAutoObject(C.AX);this.Akm.AMW=[this,this.
Bjt,this.Ag4];this.A2P=A._GetAutoObject(C.Wj);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.O;this.Akm._Done();this.NZ._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Akm._ReInit();this.NZ._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aag)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Wn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3a)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A2P)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.AaV={A96:null,Bw:null,N:null,Cl:null,AmN:null,AmP:null,QF:null,AmO:null,AmL:
null,AmR:null,AmM:null,Dw:function(G){var E7=0;var X=this.AR;switch(this.Cl.CK){
case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;
}X=this.R5(X,E7,0x14);if(!!X)this.A9(X);},BaI:function(s){this.Dw(s);},Alz:function(
G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);if(DW.AbZ&&(this.D3().ArP===false)
)return;A.pe(this.D3().Cv,this);},AIj:function(s){this.Alz(s);},Apm:function(G){
var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);if(DW.AbZ&&(this.D3().Ze===false))return;
A.pe(this.D3().Cc,this);},AIm:function(s){this.Apm(s);},IP:function(G){if(this.QF.
AbZ)return;},AsK:function(s){this.IP(s);},AzT:function(G){var DW=(A.Core.BJ.isPrototypeOf(
G)?G:null);if(DW.AbZ&&(this.D3().Zd===false))return;A.pe(this.D3().Ch,this);},AIl:
function(s){this.AzT(s);},D3:function(){if(!!this.KK())return this.Bw;else return this.
N;},KK:function(){return this.Bw;},GG:function(E){this.A96=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BJ._Init.
call(this.Cl={I:this},0);A.Core.BJ._Init.call(this.AmN={I:this},0);A.Core.BJ._Init.
call(this.AmP={I:this},0);A.Core.BJ._Init.call(this.QF={I:this},0);A.Core.BJ._Init.
call(this.AmO={I:this},0);A.Core.BJ._Init.call(this.AmL={I:this},0);A.Core.BJ._Init.
call(this.AmR={I:this},0);A.Core.BJ._Init.call(this.AmM={I:this},0);this.__proto__=
C.AaV;this.H([0,0,C.ArX[0],C.ArX[1]]);this.N.H(WU);this.N.Ar(false);this.N.Y(false
);this.Cl.Filter=147;this.AmN.Filter=26;this.AmP.Filter=28;this.QF.Filter=1;this.
AmO.Filter=27;this.AmL.Filter=44;this.AmR.Filter=9;this.AmM.Filter=42;this.J(this.
N,0);this.Cl.BK=[this,this.BaI];this.Cl.DS=[this,this.BaI];this.AmN.BK=[this,this.
AIj];this.AmN.DS=[this,this.AIj];this.AmP.BK=[this,this.AIm];this.AmP.DS=[this,this.
AIm];this.QF.BK=[this,this.AsK];this.QF.DS=[this,this.AsK];this.AmO.BK=[this,this.
AIl];this.AmO.DS=[this,this.AIl];this.AmL.BK=[this,this.AIj];this.AmL.DS=[this,this.
AIj];this.AmR.BK=[this,this.AIm];this.AmR.DS=[this,this.AIm];this.AmM.BK=[this,this.
AIl];this.AmM.DS=[this,this.AIl];},_Done:function(){this.__proto__=A.Core.O;this.
N._Done();this.Cl._Done();this.AmN._Done();this.AmP._Done();this.QF._Done();this.
AmO._Done();this.AmL._Done();this.AmR._Done();this.AmM._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.N._ReInit();this.Cl.
_ReInit();this.AmN._ReInit();this.AmP._ReInit();this.QF._ReInit();this.AmO._ReInit(
);this.AmL._ReInit();this.AmR._ReInit();this.AmM._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.A96)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AmP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AmM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AwU={_Init:function(){A.acl.AF5._Init.call(this,0);this.J6=0x22;this.AdK=true;
this.Auq=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AwV={_Init:function(){A.acl.AF5._Init.call(this,0);this.J6=0x22;this.AdK=true;
this.Auq=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AT2={RY:function(){var B;var Ao=(A.acl.AeM.isPrototypeOf(B=A.acl.Ad0.RY.call(this
))?B:null);if(!Ao)throw new Error(Aso);Ao.Cj.Cr=100;return Ao;},RX:function(){var
B;var Ao=(A.acl.AwC.isPrototypeOf(B=A.acl.Ad0.RX.call(this))?B:null);if(!Ao)throw new
Error(Aso);Ao.ER.B1=100;return Ao;},_Init:function(aArg){A.acl.Ad0._Init.call(this
,aArg);this.__proto__=C.AT2;},_className:"Application::ShadeTransition"};C.AmA={
AgJ:null,SE:null,HK:null,CY:null,AnimalId:-1,GroupId:-1,ACo:true,C8:function(E){
C.BP.C8.call(this,E);this.SE.L(E);this.HK.L(E);this.AgJ.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HK.R(A.aaR(A.acf.AeO)
);else this.HK.R(E.toFixed());},AbK:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SE.R(A.aaR(A.acf.AeO));else this.SE.R(E.toFixed());},D$:function(
G){},Nf:function(s){this.D$(s);},A9c:function(E){if(this.ACo===E)return;this.ACo=
E;this.SE.Y(this.ACo);this.AgJ.Y(this.ACo);},_Init:function(aArg){C.BP._Init.call(
this,aArg);A.acg.An._Init.call(this.AgJ={I:this},0);A.acg.Text._Init.call(this.SE={
I:this},0);A.acg.Text._Init.call(this.HK={I:this},0);C.CY._Init.call(this.CY={I:
this},0);this.__proto__=C.AmA;this.AgJ.H(AVR);this.SE.H(AVS);this.SE.A4(0x11);this.
SE.R(A.aaR(A.acf.AeO));this.HK.H(AVT);this.HK.A4(0x11);this.HK.R(A.aaR(A.acf.AeO
));this.CY.H(AVU);this.J(this.AgJ,0);this.J(this.SE,0);this.J(this.HK,0);this.J(
this.CY,0);this.AgJ.Ax(A.aaL(A.ach.APP));this.SE.S(A.aaL(A.fl.Ah));this.HK.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.BP;this.AgJ._Done();this.SE._Done(
);this.HK._Done();this.CY._Done();C.BP._Done.call(this);},_ReInit:function(){C.BP.
_ReInit.call(this);this.AgJ._ReInit();this.SE._ReInit();this.HK._ReInit();this.CY.
_ReInit();this.SE.R(A.aaR(A.acf.AeO));this.HK.R(A.aaR(A.acf.AeO));this.SE.S(A.aaL(
A.fl.Ah));this.HK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BP._Mark.call(this
,D);if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ACy={Init:function(
aArg){var B;A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper).W,B.Aq5,B.Ub
],0);A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper).W,B.A75,B.Ane],0);
A.zV([this,this.Nf],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nf],[
B=A._GetAutoObject(A.Device.Helper).W,B.PH,B.DT],0);A.zX([this,this.Nf],[B=A._GetAutoObject(
A.Device.Helper).W,B.A8H,B.Awy],0);A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.
Helper).W,B.A7W,B.AeD],0);A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper
).W,B.A7X,B.T_],0);A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper).W,B.
A70,B.AeG],0);A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.Helper).W,B.A74,B.
AeI],0);A.pe([this,this.Nf],this);},C8:function(E){C.AmA.C8.call(this,E);this.CY.
C8(E);},D$:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqs()){this.AbK(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.AbK(-1);this.OnSetAnimalId(-1);}this.CY.
DT(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.CY.AEj(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.CY.AeD(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.CY.T_(A._GetAutoObject(A.Device.Helper).W.IsFever);this.CY.AeG(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.CY.AeI(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmA._Init.call(this,aArg);this.
__proto__=C.ACy;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.J8={Ahq:A.abi(3,A.jV,null),Co:A.abi(3,0,{0:7,1:30,2:90}),AmZ:3,Do:function(){
if(this.AmZ<3)return this.AmZ;else return 3;},C4:function(aIndex){if((aIndex>=3)||(
aIndex>=this.AmZ))return-1;return this.Co.Get(aIndex);},F$:function(aIndex){if((
aIndex>=3)||(aIndex>=this.AmZ))return AVV;return this.Ahq.Get(aIndex);},DK:function(
A3){var P=0;while((P<3)&&(P<=this.AmZ)){if(this.Co.Get(P)===A3)return P;P=P+1;}return-
1;},Hl:function(){var P=0;var max=-1;while((P<3)&&(P<=this.AmZ)){if(this.Co.Get(
P)>max)max=this.Co.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Ahq=[]).__proto__=C.J8.Ahq;(this.Co=[]).__proto__=C.J8.Co;this.
__proto__=C.J8;this.Ahq.Set(0,A.aaR(A.acf.A6H));this.Ahq.Set(1,A.aaR(A.acf.A6F));
this.Ahq.Set(2,A.aaR(A.acf.A6G));},_ReInit:function(){C.AC._ReInit.call(this);this.
Ahq.Set(0,A.aaR(A.acf.A6H));this.Ahq.Set(1,A.aaR(A.acf.A6F));this.Ahq.Set(2,A.aaR(
A.acf.A6G));},_className:"Application::Days"};C.ATZ={Al_:null,BR:null,QU:null,Qt:
null,A_T:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.Bzx],[B=A._GetAutoObject(A.Device.Device),B.Aq4,B.AsJ],0);},Bh:function(
aSize){},Ai:function(Ae){var B;var F;C.Dm.Ai.call(this,Ae);var Fh=((Ae&0x20)===0x20
);var Gt=this.Bl.Bv;this.BR.L(A.jb.Bj);if(!!this.Q)this.BR.R(((AVW+A._GetAutoObject(
A.Device.Converter).AkD((F=this.Q,F[1].call(F[0]))))+CL)+A._GetAutoObject(A.acj.
Temperature).Alj());this.HX.Y((this.AK<A._GetAutoObject(A.Device.Helper).A53())&&(
Fh||Gt));},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},J0:function(G){var F;var BO=this.AK;C.Dm.J0.call(this,G);if(this.AK<A._GetAutoObject(
A.Device.Helper).A53()){this.Bx(this.AK+10);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}},JV:function(G){var F;var BO=this.
AK;C.Dm.JV.call(this,G);this.Bx(this.AK-10);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},A9P:function(E){if(this.A_T===E)return;
this.A_T=E;this.Am();},Bzx:function(G){this.Am();},_Init:function(aArg){C.Dm._Init.
call(this,aArg);A.acg.AJ._Init.call(this.Al_={I:this},0);C.CO._Init.call(this.BR={
I:this},0);A.acg.AJ._Init.call(this.QU={I:this},0);A.acg.An._Init.call(this.Qt={
I:this},0);this.__proto__=C.ATZ;this.H(UG);this.Background.H(UG);this.V.H(Asp);this.
V.L(A.jb.Bj);this.Al_.H(AVX);this.Al_.L(A.jb.Ae9);this.Hn.H(AVY);this.BR.H(AVZ);
this.BR.A4(0x12);this.BR.L(A.jb.Text);this.HX.H(AV0);this.QU.H(AV1);this.QU.L(A.
jb.ET);this.Qt.H(AV2);this.J(this.Al_,-2);this.J(this.BR,-1);this.J(this.QU,0);this.
J(this.Qt,0);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.BR.S(A.aaL(
A.fl.EB));this.BR.A8(A.aaL(A.fl.Ah));this.Qt.Ax(A.aaL(A.ach.ACP));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dm;this.Al_._Done();this.BR._Done();this.QU.
_Done();this.Qt._Done();C.Dm._Done.call(this);},_ReInit:function(){C.Dm._ReInit.
call(this);this.Al_._ReInit();this.BR._ReInit();this.QU._ReInit();this.Qt._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.BR.S(A.aaL(A.fl.EB));this.
BR.A8(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((B=this.
Al_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qt)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_l={Q:null
,AiK:null,Init:function(aArg){var B;A.zX([this,this.Bdv],[B=A._GetAutoObject(A.Device.
Device),B.ADN,B.A$6],0);A.pe([this,this.Bdv],this);},At:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Aha:function(AkY){A._GetAutoObject(A.Device.Device).Y4(AkY
);},Bdv:function(G){var F;if(!this.Q){A.ab5("%s",AV3);return;}var Bm=null;if(this.
AiK.Contains(A._GetAutoObject(A.Device.Device).KB)){Bm=this.AiK.A94();while(!!Bm&&(
Bm.AnH!==A._GetAutoObject(A.Device.Device).KB))Bm=this.AiK.A94();}if(!Bm)Bm=this.
Bya(A._GetAutoObject(A.Device.Device).KB);(F=this.Q,F[2].call(F[0],Bm));},Bya:function(
AkY){var Bm=null;switch(AkY){case 0:case 1:Bm=A._NewObject(C.AT7,0);break;case 2:
Bm=A._NewObject(C.XH,0);break;case 3:Bm=A._NewObject(C.AuY,0);break;case 61:Bm=A.
_NewObject(C.AUK,0);break;case 88:Bm=A._NewObject(C.NewMenu,0);break;case 27:Bm=
A._NewObject(C.ARe,0);break;case 6:Bm=A._NewObject(C.AQP,0);break;case 16:Bm=A._NewObject(
C.AM2,0);break;case 22:Bm=A._NewObject(C.AUF,0);break;case 17:Bm=A._NewObject(C.
AUm,0);break;case 46:Bm=A._NewObject(C.AM0,0);break;case 99:Bm=A._NewObject(C.ATA
,0);break;case 100:Bm=A._NewObject(C.ATz,0);break;case 101:Bm=A._NewObject(C.AUD
,0);break;case 23:Bm=A._NewObject(C.AU3,0);break;case 18:Bm=A._NewObject(C.ANe,0
);break;case 19:Bm=A._NewObject(C.ATB,0);break;case 38:Bm=A._NewObject(C.AQi,0);
break;case 87:Bm=A._NewObject(C.ATf,0);break;case 72:Bm=A._NewObject(C.ANc,0);break;
case 73:Bm=A._NewObject(C.ANd,0);break;case 93:Bm=A._NewObject(C.ANb,0);break;case
94:Bm=A._NewObject(C.AM$,0);break;case 104:Bm=A._NewObject(C.AM9,0);break;case 105:
Bm=A._NewObject(C.ANa,0);break;case 74:Bm=A._NewObject(C.AM_,0);break;case 5:Bm=
A._NewObject(C.AUf,0);break;case 4:Bm=A._NewObject(C.AdM,0);break;case 40:Bm=A._NewObject(
C.AMB,0);break;case 39:Bm=A._NewObject(C.AMU,0);break;case 28:Bm=A._NewObject(C.
V9,0);break;case 7:Bm=A._NewObject(C.Aqd,0);break;case 92:Bm=A._NewObject(C.ANn,
0);break;case 31:Bm=A._NewObject(C.AqW,0);break;case 89:Bm=A._NewObject(C.ARc,0);
break;case 34:Bm=A._NewObject(C.ALg,0);break;case 35:Bm=A._NewObject(C.ManualActionScanScreen
,0);break;case 32:Bm=A._NewObject(C.SetTransponderScreen,0);break;case 50:Bm=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 55:Bm=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bm=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bm=A._NewObject(C.MotherScanScreen,0);break;case 91:Bm=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bm=A._NewObject(C.GN,0);break;case 9:Bm=A._NewObject(C.IT,0);break;
case 24:Bm=A._NewObject(C.ALz,0);break;case 10:Bm=A._NewObject(C.Al4,0);break;case
21:Bm=A._NewObject(C.ALD,0);break;case 11:Bm=A._NewObject(C.ALC,0);break;case 29:
Bm=A._NewObject(C.At8,0);break;case 54:Bm=A._NewObject(C.ALB,0);break;case 30:Bm=
A._NewObject(C.ALA,0);break;case 37:Bm=A._NewObject(C.Gy,0);break;case 12:Bm=A._NewObject(
C.ALy,0);break;case 41:Bm=A._NewObject(C.ALx,0);break;case 43:Bm=A._NewObject(C.
ALw,0);break;case 14:Bm=A._NewObject(C.AMS,0);break;case 13:Bm=A._NewObject(C.AMT
,0);break;case 44:Bm=A._NewObject(C.AMR,0);break;case 20:Bm=A._NewObject(C.AUU,0
);break;case 42:Bm=A._NewObject(C.AUT,0);break;case 45:Bm=A._NewObject(C.AUS,0);
break;case 47:Bm=A._NewObject(C.AN2,0);break;case 48:Bm=A._NewObject(C.AN1,0);break;
case 49:Bm=A._NewObject(C.AN0,0);break;case 69:Bm=A._NewObject(C.ANm,0);break;case
70:Bm=A._NewObject(C.ANl,0);break;case 71:Bm=A._NewObject(C.ANk,0);break;case 51:
Bm=A._NewObject(C.ARr,0);break;case 52:Bm=A._NewObject(C.ARq,0);break;case 53:Bm=
A._NewObject(C.ARp,0);break;case 96:Bm=A._NewObject(C.AU9,0);break;case 97:Bm=A.
_NewObject(C.AU8,0);break;case 98:Bm=A._NewObject(C.AU7,0);break;case 80:Bm=A._NewObject(
C.ARm,0);break;case 81:Bm=A._NewObject(C.ARl,0);break;case 82:Bm=A._NewObject(C.
ARk,0);break;case 85:Bm=A._NewObject(C.AMg,0);break;case 102:Bm=A._NewObject(C.ATi
,0);break;case 83:Bm=A._NewObject(C.ATD,0);break;case 84:Bm=A._NewObject(C.ATC,0
);break;case 58:Bm=A._NewObject(C.ALl,0);break;case 59:Bm=A._NewObject(C.ALk,0);
break;case 60:Bm=A._NewObject(C.ALj,0);break;case 15:Bm=A._NewObject(C.ATp,0);break;
case 68:Bm=A._NewObject(C.AUl,0);break;case 78:Bm=A._NewObject(C.AQN,0);break;case
79:Bm=A._NewObject(C.AQM,0);break;case 26:Bm=A._NewObject(C.ARf,0);break;case 62:
Bm=A._NewObject(C.ARb,0);break;case 25:Bm=A._NewObject(C.ANA,0);break;case 75:Bm=
A._NewObject(C.ANB,0);break;case 67:Bm=A._NewObject(C.ANz,0);break;case 66:Bm=A.
_NewObject(C.ANC,0);break;case 64:Bm=A._NewObject(C.AND,0);break;case 65:Bm=A._NewObject(
C.Aqg,0);break;case 77:Bm=A._NewObject(C.ANE,0);break;case 76:Bm=A._NewObject(C.
ANx,0);break;case 95:Bm=A._NewObject(C.ALF,0);break;case 33:Bm=A._NewObject(C.WeightListScreen
,0);break;case 36:Bm=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 56:Bm=A.
_NewObject(C.AnimalMultiInfoScreen,0);break;case 57:Bm=A._NewObject(C.MultiInfoActionsScreen
,0);break;case 86:Bm=A._NewObject(C.ALS,0);break;case 103:Bm=A._NewObject(C.AUr,
0);break;default:throw new Error(AV4);}if(!!Bm)Bm.AnH=AkY;return Bm;},BS:function(
AkY){var F;if(!(F=this.Q,F[1].call(F[0])))A.ab5("%s",AV5);else this.AiK.BmT((F=this.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).Y4(AkY);},Fl:function(){var
BeF=3;var BeE=this.AiK.BmJ();if(!!BeE)BeF=BeE.AnH;else A.ab5("%s",AV6);A._GetAutoObject(
A.Device.Device).Y4(BeF);},_Init:function(aArg){C.A_n._Init.call(this.AiK={I:this
},0);this.__proto__=C.A_l;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;this.AiK._Done();A.h7--;},_ReInit:function(){this.AiK._ReInit();},_Mark:function(
D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiK).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"};C.
AX={_Init:function(){C.A_l._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.AFA={H0:null,Yb:null,AeQ:null,Aal:null,Mt:null,AyM:
1,RatingMode:0,RatedAttribute:0,CT:function(){this.Yb.R(this.Bch(this.RatedAttribute
));this.AJZ(this);},Ai:function(Ae){this.Mt.R(A._GetAutoObject(A.Device.Helper).
Nd(A.aaR(A.acf.AQ4),P0,this.AyM.toFixed()));if(this.RatingMode===1)this.Mt.Y(true
);else this.Mt.Y(false);},Cw:function(G){var B;C.AB.Cw.call(this,G);if(A._GetAutoObject(
A.Device.Device).Br.Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);this.H0.Gf();this.H0.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AwN(this.
H0,5);A.zX([this,this.AJZ],[B=A._GetAutoObject(A.Device.Device),B.ARY,B.AZs],0);
A.zX([this,this.AJZ],[B=A._GetAutoObject(A.Device.Helper).W,B.PH,B.DT],0);A.pe([
this,this.AJZ],this);},Ar5:function(G){var a=this.AJD(this.RatedAttribute);this.
BeV();this.AyM=this.AyM-1;this.Am();if(!a)this.AQ$();else this.Sp(a);},Wr:function(
G){var a=this.Bco(this.RatedAttribute);this.BeV();this.AyM=this.AyM+1;this.Am();
if(!a)this.A64();else this.Sp(a);},AJD:function(Nh){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nh){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AG3);},Bco:function(Nh){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nh){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AG3);},Sp:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yb.R(this.Bch(E));this.
DD(E);this.AeQ.Anj(this.H0.BhB(E));if(!this.AJD(E)){if(this.AQr())this.N.Cn(A.aaL(
A.ach.Abc));else this.N.Cn(null);}else this.N.Cn(A.aaL(A.ach.Aeb));},Bch:function(
Nh){return this.Aal.BQ(Nh);},Bx$:function(Nh){if(!!Nh){var a=this.AJD(Nh);if(!a)
return A.jV;else return this.Bci(a);}else return A.jV;},Bx_:function(Nh){if(!!Nh
){var a=this.Bco(Nh);if(!a)return A.jV;else return this.Bci(a);}else return A.jV;
},AQ$:function(){},A64:function(){},A54:function(){return null;},Bci:function(Nh
){return this.Aal.Lp(Nh);},BeV:function(){if(!!this.RatedAttribute)this.H0.Bnp(this.
RatedAttribute,this.AeQ.A7);},AJZ:function(G){if(this.AQr())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.Sp(2);this.DD(this.RatedAttribute
);this.Am();},Xi:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},Aky:function(G){var a=this.AJD(this.RatedAttribute);if(!a){if(this.AQr())this.
Xi(this);}else this.AQ$();},DD:function(Nh){this.N.Ho(this.Bx$(Nh));if(!!this.N.
AnD){this.N.CS(null);this.N.OJ(true);}else{this.N.CS(A.aaL(A.ach.Aeb));this.N.OJ(
false);}this.N.B0(this.Bx_(Nh));if(!!this.N.AnF){this.N.C2(null);this.N.OK(true);
}else{this.N.C2(this.A54());this.N.OK(false);}},AQr:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",AkP,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yb={
I:this},0);C.Rating._Init.call(this.AeQ={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.Aal={I:this},0);A.acg.Text._Init.call(this.Mt={I:this},0);this.__proto__=
C.AFA;this.Background.L(A.jb.CF);this.N.Y(true);this.Dk(C.IA);this.Yb.H(AV7);this.
Yb.KM(true);this.Yb.L(A.jb.Text);this.AeQ.H(AV8);this.Mt.H(AV9);this.Mt.A4(0x14);
this.Mt.R(A.aaR(A.acf.AQ4));this.Mt.L(A.jb.Text);this.J(this.Yb,0);this.J(this.AeQ
,0);this.J(this.Mt,0);this.A9(this.AeQ);this.N.Cv=[this,this.Ar5];this.N.Ch=[this
,this.Aky];this.N.Cc=[this,this.Wr];this.Yb.S(A.aaL(A.fl.Ah));this.AeQ.AN=[this,
this.Wr];this.Mt.S(A.aaL(A.fl.Ah));this.H0=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yb._Done();this.AeQ._Done();this.Aal._Done();
this.Mt._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yb._ReInit();this.AeQ._ReInit();this.Aal._ReInit();this.Mt._ReInit();this.
Mt.R(A.aaR(A.acf.AQ4));this.Yb.S(A.aaL(A.fl.Ah));this.Mt.S(A.aaL(A.fl.Ah));this.
CT();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HT={Z:null,Gender:null,AnimalType:null,Breed:null,I7:null,Pf:null,Ash:null,BW:
null,C7:null,C6:null,CD:null,Gb:null,Aw:null,KC:0,Init:function(aArg){A.zX([this
,this.BaH],this.BW.Q,0);A.pe([this,this.BaH],this);A.pe([this,this.AAp],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).AMO(this.
Z);},Dw:function(G){var B;var E7=0;var X=this.AR;switch(this.Cl.CK){case 6:E7=2;
break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.R5(
X,E7,0x415);if(!!X)this.A9(X);if(!!X&&((X.T&0x400)===0x400))this.Z.Hy(X,true,null
,null);this.AAp(this);},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[
1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},Aez:function(E){
if(this.KC===E)return;this.KC=E;A.abo([this,this.Avv,this.Aez],0);},AAp:function(
G){var B;var GL=(C.Ci.isPrototypeOf(B=this.AR)?B:null);this.N.Ho(A.jV);this.N.CS(
A.aaL(A.ach.EU));this.N.Cv=[this,this.AIi];if(!!GL&&!!GL.AlZ){this.N.FC(A.jV);this.
N.Kp.Dl(255);this.N.Arh(GL.Aql);this.N.Cn(GL.Au6);this.N.Ch=GL.AlZ;}else{this.N.
FC(A.jV);this.N.Cn(null);this.N.Ch=null;}if(!!GL&&!!GL.Af7){this.N.B0(GL.Aw4);this.
N.HL.Dl(GL.AwB);this.N.Ana(GL.Amu);this.N.C2(GL.AqA);this.N.Cc=GL.Af7;}else this.
AtH();},AfR:function(G){A.ab5("%s",Axz);},Ax_:function(s){this.AfR(s);},Eo:function(
G){A.ab5("%s",Axz);},AIi:function(s){this.Eo(s);},AtH:function(){A.ab5("%s",AkQ);
},AzM:function(G){A.ab5("%s",Axz);},Acy:function(s){this.AzM(s);},Jx:function(Af
){this.A9(Af);this.Z.Hy(Af,true,null,null);this.Z.Vb(null,null);},Aph:function(G
){var F;this.C6.Ag9(A._GetAutoObject(A.Device.Helper).Aa2((F=this.BW.Q,F[1].call(
F[0]))));},BaH:function(s){this.Aph(s);},G8:function(G){A.pe([this,this.E9],this
);},Avv:function(){return this.KC;},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.Gender._Init.call(this.Gender={I:this
},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Breed._Init.call(this.
Breed={I:this},0);C.UA._Init.call(this.I7={I:this},0);A.Device.MY._Init.call(this.
Pf={I:this},0);A.Device.KS._Init.call(this.Ash={I:this},0);C.BX._Init.call(this.
BW={I:this},0);C.BX._Init.call(this.C7={I:this},0);C.Akw._Init.call(this.C6={I:this
},0);C.AwQ._Init.call(this.CD={I:this},0);C.Ar0._Init.call(this.Gb={I:this},0);C.
Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.HT;var B;this.N.Y(true);this.
Dk(C.IA);this.Z.H(E4);this.Z.Kf(1);this.KC=A._GetAutoObject(A.Device.Helper).Aa2(
this.AnimalType.Q);this.BW.H(AhD);this.BW.Aj(true);this.BW.U(A.aaR(A.acf.Ae8));this.
C7.H(AxA);this.C7.Aj(true);this.C7.U(A.aaR(A.acf.Ae0));this.C6.H(An0);this.C6.Aj(
true);this.C6.U(A.aaR(A.acf.KC));this.C6.Gn(1000);this.C6.E1(99000);this.C6.Ag9(
A._GetAutoObject(A.Device.Helper).Aa2(this.AnimalType.Q));this.CD.H(AhE);this.CD.
Aj(true);this.CD.U(A.aaR(A.acf.Breed));this.Gb.H(AV_);this.Gb.Aj(true);this.Gb.U(
A.aaR(A.acf.I7));this.Aw.H(AxB);this.J(this.Z,0);this.J(this.BW,0);this.J(this.C7
,0);this.J(this.C6,0);this.J(this.CD,0);this.J(this.Gb,0);this.J(this.Aw,0);this.
Z.Ej=[this,this.G8];this.Gender.LU(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LU(A._GetAutoObject(A.Device.Helper).W);this.Breed.LU(A._GetAutoObject(A.Device.
Helper).W);this.I7.LU(A._GetAutoObject(A.Device.Helper).W);this.BW.At([B=this.AnimalType
,B.B9,B.B_]);this.BW.CG(this.AnimalType);this.C7.At([B=this.Gender,B.B9,B.B_]);this.
C7.CG(this.Gender);this.C6.At([this,this.Avv,this.Aez]);this.CD.Gg([this,this.D3
,this.GG]);this.CD.LT([B=this.CD,B.FJ]);this.CD.LV(A.aaL(A.ach.Edit));this.CD.At([
B=this.Breed,B.B9,B.B_]);this.CD.CG(this.Breed);this.CD.Am$(this.Pf);this.Gb.Gg([
this,this.D3,this.GG]);this.Gb.LT([B=this.Gb,B.FJ]);this.Gb.LV(A.aaL(A.ach.Edit)
);this.Gb.At([B=this.I7,B.B9,B.B_]);this.Gb.CG(this.I7);this.Gb.Am$(this.Ash);this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Gender._Done(
);this.AnimalType._Done();this.Breed._Done();this.I7._Done();this.Pf._Done();this.
Ash._Done();this.BW._Done();this.C7._Done();this.C6._Done();this.CD._Done();this.
Gb._Done();this.Aw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Z._ReInit();this.Gender._ReInit();this.AnimalType._ReInit();this.
Breed._ReInit();this.I7._ReInit();this.Pf._ReInit();this.Ash._ReInit();this.BW._ReInit(
);this.C7._ReInit();this.C6._ReInit();this.CD._ReInit();this.Gb._ReInit();this.Aw.
_ReInit();this.BW.U(A.aaR(A.acf.Ae8));this.C7.U(A.aaR(A.acf.Ae0));this.C6.U(A.aaR(
A.acf.KC));this.CD.U(A.aaR(A.acf.Breed));this.Gb.U(A.aaR(A.acf.I7));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Pf)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ash)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalDataScreen"};C.V9={Aym:false,LJ:function(G){if(A._GetAutoObject(
A.Device.Device).Ap.Ld())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(
A.Device.Device).Ap.HA().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gf(
);A._GetAutoObject(A.Device.Helper).ApT(A._GetAutoObject(A.Device.Helper).W);},AtH:
function(){this.N.B0(A.jV);this.N.C2(A.aaL(A.ach.ACT));this.N.Cc=[this,this.Ax_];
},Cw:function(G){if(!this.Aym){this.Aym=true;A.pe([this,this.Acy],this);}else C.
AqW.Cw.call(this,G);},AzM:function(G){A._GetAutoObject(C.AX).BS(55);},_Init:function(
aArg){C.AqW._Init.call(this,aArg);this.__proto__=C.V9;this.Kn(this.Aw,-1);},_className:
"Application::NewAnimalManualDataScreen"};C.IA={_Init:function(aArg){C.ACy._Init.
call(this,aArg);this.__proto__=C.IA;this.A9c(false);},_className:"Application::HeaderSelectedAnimalId"
};C.IT={Filter:null,Gender:null,AnimalType:null,Transponder:null,Ed:null,Z:null,
PR:null,SO:null,N7:null,SP:null,Ne:null,Pd:null,RA:null,Or:null,RB:null,Nx:null,
K$:null,Jf:null,KQ:null,Mm:null,X7:null,SQ:null,RC:null,Aw:null,Axe:0,Axd:0,At6:
0,At5:0,AqV:0,Asa:0,AuJ:0,AuK:0,Al3:false,AnN:false,Init:function(aArg){A.zX([this
,this.AuP],this.K$.Q,0);A.zX([this,this.At$],this.Jf.Q,0);A.zX([this,this.BoC],this.
KQ.Q,0);A.zX([this,this.BiX],this.Mm.Q,0);A.zX([this,this.Bo8],this.Ne.Q,0);A.zX([
this,this.Bo7],this.N7.Q,0);A.zX([this,this.BfV],this.Nx.Q,0);A.zX([this,this.BfU
],this.Or.Q,0);this.A9(this.PR);},Dw:function(G){var E7=0;var X=this.AR;switch(this.
Cl.CK){case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;
}X=this.R5(X,E7,0x414);if(!!X)this.A9(X);this.ML(this);},Cw:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ap.Filter)this.Bi(A._GetAutoObject(A.Device.Device).Ap.Filter.GA(
));else this.Bi(A._NewObject(A.Device.Filter,0));},Eo:function(G){A._GetAutoObject(
C.AX).Fl();},A15:function(G){var Ew=(C.Ad4.isPrototypeOf(G)?G:null);if(!Ew)return;
var Az=this.Filter.DX(Ew.Ei,Ew.Operator);if(!!Az){this.Filter.QW(Az);A.abo([this
,this.Fz,this.FD],0);}else{if(Ew.Ei===11){Az=A._NewObject(A.Device.BoolFilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Az)?Az:null).A7=true;}else if(Ew.Ei===12){Az=A._NewObject(A.Device.BoolFilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Az)?Az:null).A7=true;}else if(Ew.Ei===8){Az=A._NewObject(A.Device.BoolFilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Az)?Az:null).A7=true;}else A.ab5("%s",AG4+Ew.Ei.toFixed());if(!!Az){this.Filter.
CX(Az);A.abo([this,this.Fz,this.FD],0);}}},ByL:function(G){A._GetAutoObject(A.Device.
Device).Ap.Bi(this.Filter);A._GetAutoObject(C.AX).Fl();},AzK:function(G){var Ew=(
C.Amz.isPrototypeOf(G)?G:null);if(!Ew)return;var Az=this.Filter.DX(Ew.Ei,Ew.Operator
);if(!!Az){this.Filter.QW(Az);A.abo([this,this.Fz,this.FD],0);}else{if(Ew.Ei===7
){Az=A._NewObject(A.Device.GenderFilterCriterion,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;
}else if(Ew.Ei===14){Az=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Az.ES=
Ew.Ei;Az.Operator=Ew.Operator;}else if((Ew.Ei===22)||(Ew.Ei===26)){var AZ_=A._NewObject(
A.Device.UInt64FilterCriterion,0);AZ_.ES=Ew.Ei;AZ_.Operator=0;Az=AZ_;}else A.ab5(
"%s",AG4+Ew.Ei.toFixed());if(!!Az){this.Filter.CX(Az);A.abo([this,this.Fz,this.FD
],0);}}},A89:function(E){if(this.AuJ===E)return;this.AuJ=E;A.abo([this,this.BjC,
this.A89],0);},A8_:function(E){if(this.AuK===E)return;this.AuK=E;A.abo([this,this.
BjD,this.A8_],0);},AuP:function(G){var F;this.A8_((F=this.K$.Q,F[1].call(F[0])));
var Az=this.Filter.DX(7,0);if(!!Az){var Ay6=(A.Device.GenderFilterCriterion.isPrototypeOf(
Az)?Az:null);if(!!Ay6)Ay6.A7=this.AuK;else A.ab5("%s",Afj);}},At$:function(G){var
F;this.A89((F=this.Jf.Q,F[1].call(F[0])));var Az=this.Filter.DX(14,0);if(!!Az){var
UL=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Az)?Az:null);if(!!UL)UL.A7=
this.AuJ;else A.ab5("%s",Afj);}},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1
))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},A9O:function(
E){if(this.Asa===E)return;this.Asa=E;A.abo([this,this.Bkc,this.A9O],0);},BoC:function(
G){var F;this.A9O((F=this.KQ.Q,F[1].call(F[0])));var Az=this.Filter.DX(22,1);if(
!!Az){var AiT=(A.Device.UInt64FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!AiT
)switch(this.Asa){case 1:AiT.Operator=5;break;case 0:AiT.Operator=0;break;default:
A.ab5("%s%e",AG5,this.Asa);}else A.ab5("%s",Afj);}},A9k:function(E){if(this.AqV===
E)return;this.AqV=E;A.abo([this,this.BjS,this.A9k],0);},BiX:function(G){var F;this.
A9k((F=this.Mm.Q,F[1].call(F[0])));var Az=this.Filter.DX(26,1);if(!!Az){var Atl=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!Atl)switch(this.AqV
){case 1:Atl.Operator=5;break;case 0:Atl.Operator=0;break;default:A.ab5("%s%e",AG5
,this.AqV);}else A.ab5("%s",Afj);}},Bi:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PR.Bi([this,this.Fz,this.FD]);this.SO.
Bi([this,this.Fz,this.FD]);this.N7.Bi([this,this.Fz,this.FD]);this.SP.Bi([this,this.
Fz,this.FD]);this.Ne.Bi([this,this.Fz,this.FD]);this.Pd.Bi([this,this.Fz,this.FD
]);this.RA.Bi([this,this.Fz,this.FD]);this.Or.Bi([this,this.Fz,this.FD]);this.RB.
Bi([this,this.Fz,this.FD]);this.Nx.Bi([this,this.Fz,this.FD]);this.K$.Bi([this,this.
Fz,this.FD]);this.Jf.Bi([this,this.Fz,this.FD]);this.KQ.Bi([this,this.Fz,this.FD
]);this.Mm.Bi([this,this.Fz,this.FD]);this.X7.Bi([this,this.Fz,this.FD]);this.SQ.
Bi([this,this.Fz,this.FD]);this.RC.Bi([this,this.Fz,this.FD]);this.Ary(false);A.
pe([this,this.A3E],this);var Bc1=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DX(1,2))?B:null);if(!!Bc1){this.Ary(true);this.AFh(Bc1.A7);}var Bcu=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DX(1,3))?B:null);if(!!
Bcu){this.Ary(true);this.AFi(Bcu.A7);}this.Ara(false);A.pe([this,this.A3x],this);
var Bc0=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DX(4,3))?B:null
);if(!!Bc0){this.Ara(true);this.AD4(A._GetAutoObject(A.Device.Helper).MK(Bc0.A7,
A._GetAutoObject(A.Device.Helper).Dt()));}var Bct=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DX(4,2))?B:null);if(!!Bct){this.Ara(true);this.AD6(A.
_GetAutoObject(A.Device.Helper).MK(Bct.A7,A._GetAutoObject(A.Device.Helper).Dt()
)+1);}var Ay6=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DX(7,0
))?B:null);if(!!Ay6)this.K$.Bx(this.Gender.DK(Ay6.A7));var UL=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DX(14,0))?B:null);if(!!UL)this.Jf.Bx(this.AnimalType.
DK(UL.A7));var AiT=this.Filter.DX(22,1);if(!!AiT){if(!AiT.Operator)this.KQ.Bx(0);
else this.KQ.Bx(1);}var Atl=this.Filter.DX(26,1);if(!!Atl){if(!Atl.Operator)this.
Mm.Bx(0);else this.Mm.Bx(1);}},FD:function(Aq){this.Bi(Aq);},AFi:function(E){if(
this.Axe===E)return;this.Axe=E;A.abo([this,this.A8z,this.AFi],0);},AFh:function(
E){if(this.Axd===E)return;this.Axd=E;A.abo([this,this.A8y,this.AFh],0);},Bo8:function(
G){var F;this.AFi((F=this.Ne.Q,F[1].call(F[0])));var Az=this.Filter.DX(1,3);if(!
!Az){var AAL=(A.Device.Int32FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!AAL)
AAL.A7=this.Axe;else A.ab5("%s",Afj);}},Bo7:function(G){var F;this.AFh((F=this.N7.
Q,F[1].call(F[0])));var Az=this.Filter.DX(1,2);if(!!Az){var AAL=(A.Device.Int32FilterCriterion.
isPrototypeOf(Az)?Az:null);if(!!AAL)AAL.A7=this.Axd;else A.ab5("%s",Afj);}},Bds:
function(G){var Ew=(C.Ajq.isPrototypeOf(G)?G:null);if(!Ew)return;var Az=this.Filter.
DX(Ew.Ei,Ew.Operator);if(!!Az){this.Filter.QW(Az);A.abo([this,this.Fz,this.FD],0
);}else{if(Ew===this.SO){Az=A._NewObject(A.Device.Int32FilterCriterion,0);Az.ES=
Ew.Ei;Az.Operator=Ew.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Az)?Az:
null).A7=this.Axd;this.A9(this.N7);}else if(Ew===this.SP){Az=A._NewObject(A.Device.
Int32FilterCriterion,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Az)?Az:null).A7=this.Axe;this.A9(this.Ne);}if(!!Az){this.Filter.CX(
Az);A.abo([this,this.Fz,this.FD],0);}}A.pe([this,this.A3E],this);},A3E:function(
G){var A1P=!!this.Filter.DX(this.N7.Ei,this.N7.Operator);var A3F=!!this.Filter.DX(
this.Ne.Ei,this.Ne.Operator);A._GetAutoObject(A.Device.Helper).Mw(this.SO,this.AnN
);A._GetAutoObject(A.Device.Helper).Mw(this.SP,this.AnN);A._GetAutoObject(A.Device.
Helper).Mw(this.N7,A1P);A._GetAutoObject(A.Device.Helper).Mw(this.Ne,A3F);},ML:function(
G){var B;this.Z.Vb(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(
this.AR,true,null,null);},BzE:function(G){A.pe([this,this.E9],this);A.pe([this,this.
ML],this);},ByI:function(G){this.Ary(!this.AnN);if(this.AnN===false){var Az=this.
Filter.DX(this.PR.Ei,this.PR.Operator);while(!!Az){this.Filter.QW(Az);Az=this.Filter.
DX(this.PR.Ei,this.PR.Operator);}A.abo([this,this.Fz,this.FD],0);}},Ary:function(
E){if(this.AnN===E)return;this.AnN=E;A.abo([this,this.A8x,this.Ary],0);A.pe([this
,this.A3E],this);},AD6:function(E){if(this.At6===E)return;this.At6=E;A.abo([this
,this.A7D,this.AD6],0);},AD4:function(E){if(this.At5===E)return;this.At5=E;A.abo([
this,this.A7B,this.AD4],0);},BfV:function(G){var F;this.AD6((F=this.Nx.Q,F[1].call(
F[0])));var Az=this.Filter.DX(4,2);if(!!Az){var Afv=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Az)?Az:null);if(!!Afv){var Aap=A._GetAutoObject(A.Device.Helper).Zq(
this.At6-1);Afv.A7=Aap;}else A.ab5("%s",Afj);}},BfU:function(G){var F;this.AD4((
F=this.Or.Q,F[1].call(F[0])));var Az=this.Filter.DX(4,3);if(!!Az){var Afv=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!Afv){var Aap=A._GetAutoObject(
A.Device.Helper).Zq(this.At5);Afv.A7=Aap;}else A.ab5("%s",Afj);}},A3x:function(G
){var A1P=!!this.Filter.DX(this.Or.Ei,this.Or.Operator);var A3F=!!this.Filter.DX(
this.Nx.Ei,this.Nx.Operator);A._GetAutoObject(A.Device.Helper).Mw(this.RA,this.Al3
);A._GetAutoObject(A.Device.Helper).Mw(this.RB,this.Al3);A._GetAutoObject(A.Device.
Helper).Mw(this.Or,A1P);A._GetAutoObject(A.Device.Helper).Mw(this.Nx,A3F);},Ara:
function(E){if(this.Al3===E)return;this.Al3=E;A.abo([this,this.A7A,this.Ara],0);
A.pe([this,this.A3x],this);},Bdr:function(G){var Ew=(C.Ajq.isPrototypeOf(G)?G:null
);if(!Ew)return;var Az=this.Filter.DX(Ew.Ei,Ew.Operator);if(!!Az){this.Filter.QW(
Az);A.abo([this,this.Fz,this.FD],0);}else{if(Ew===this.RA){Az=A._NewObject(A.Device.
UInt32FilterCriterion,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Az)?Az:null).A7=A._GetAutoObject(A.Device.Helper).Zq(this.At5);this.
A9(this.Or);}else if(Ew===this.RB){Az=A._NewObject(A.Device.UInt32FilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(
Az)?Az:null).A7=A._GetAutoObject(A.Device.Helper).Zq(this.At6-1);this.A9(this.Nx
);}if(!!Az){this.Filter.CX(Az);A.abo([this,this.Fz,this.FD],0);}}A.pe([this,this.
A3x],this);},ByH:function(G){this.Ara(!this.Al3);if(this.Al3===false){var Az=this.
Filter.DX(this.Pd.Ei,this.Pd.Operator);while(!!Az){this.Filter.QW(Az);Az=this.Filter.
DX(this.Pd.Ei,this.Pd.Operator);}A.abo([this,this.Fz,this.FD],0);}},Fz:function(
){return this.Filter;},BjD:function(){return this.AuK;},BjC:function(){return this.
AuJ;},Bkc:function(){return this.Asa;},BjS:function(){return this.AqV;},A8z:function(
){return this.Axe;},A8y:function(){return this.Axd;},A8x:function(){return this.
AnN;},A7D:function(){return this.At6;},A7B:function(){return this.At5;},A7A:function(
){return this.Al3;},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Gender._Init.
call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);
C.AA2._Init.call(this.Transponder={I:this},0);C.AA2._Init.call(this.Ed={I:this},
0);A.Core.Z._Init.call(this.Z={I:this},0);C.ABd._Init.call(this.PR={I:this},0);C.
Ajq._Init.call(this.SO={I:this},0);C.Aa1._Init.call(this.N7={I:this},0);C.Ajq._Init.
call(this.SP={I:this},0);C.Aa1._Init.call(this.Ne={I:this},0);C.ABd._Init.call(this.
Pd={I:this},0);C.Ajq._Init.call(this.RA={I:this},0);C.AB3._Init.call(this.Or={I:
this},0);C.Ajq._Init.call(this.RB={I:this},0);C.AB3._Init.call(this.Nx={I:this},
0);C.Amz._Init.call(this.K$={I:this},0);C.Amz._Init.call(this.Jf={I:this},0);C.Amz.
_Init.call(this.KQ={I:this},0);C.Amz._Init.call(this.Mm={I:this},0);C.Qr._Init.call(
this.X7={I:this},0);C.Qr._Init.call(this.SQ={I:this},0);C.Qr._Init.call(this.RC={
I:this},0);C.Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.IT;var B;this.N.
Y(true);this.N.B0(A.aaR(A.acf.A4c));this.Dk(C.AOV);this.Gender.At(this.AuK);this.
AnimalType.At(this.AuJ);this.Transponder.At(this.Asa);this.Ed.At(this.AqV);this.
Z.H(E4);this.Z.Kf(1);this.PR.H(JQ);this.PR.Aj(true);this.PR.U(A._GetAutoObject(A.
Device.Helper).Amx(0,1));this.PR.M$(1);this.SO.H(P1);this.SO.Aj(true);this.SO.U(
A.aaR(A.acf.ADp));this.SO.M$(1);this.SO.OI(2);this.N7.H(ZR);this.N7.M$(1);this.N7.
OI(2);this.N7.AE$(A.aaR(A.acf.GD));this.SP.H(AkR);this.SP.Aj(true);this.SP.U(A.aaR(
A.acf.AGt));this.SP.M$(1);this.SP.OI(3);this.Ne.H(An1);this.Ne.Aj(true);this.Ne.
M$(1);this.Ne.OI(3);this.Ne.AE$(A.aaR(A.acf.GD));this.Pd.H(AV$);this.Pd.Aj(true);
this.Pd.U(A.aaR(A.acf.Rz));this.Pd.M$(4);this.RA.H(AWa);this.RA.Aj(true);this.RA.
U(A.aaR(A.acf.ADp));this.RA.M$(4);this.RA.OI(3);this.Or.H(AWb);this.Or.M$(4);this.
Or.OI(3);this.Or.A9p(2);this.RB.H(AWc);this.RB.Aj(true);this.RB.U(A.aaR(A.acf.AGt
));this.RB.M$(4);this.RB.OI(2);this.Nx.H(AWd);this.Nx.Aj(true);this.Nx.M$(4);this.
Nx.OI(2);this.Nx.A9p(3);this.K$.H(Asq);this.K$.Aj(true);this.K$.M$(7);this.K$.Ag$(
0);this.K$.OI(0);this.Jf.H(WU);this.Jf.Aj(true);this.Jf.M$(14);this.Jf.Ag$(0);this.
Jf.OI(0);this.KQ.H(WU);this.KQ.Aj(true);this.KQ.M$(22);this.KQ.Ag$(0);this.KQ.OI(
1);this.Mm.H(WU);this.Mm.Aj(true);this.Mm.M$(26);this.Mm.Ag$(0);this.Mm.OI(1);this.
X7.H(WU);this.X7.Aj(true);this.X7.M$(11);this.X7.Ag$(0);this.X7.OI(0);this.SQ.H(
WU);this.SQ.Aj(true);this.SQ.M$(12);this.SQ.Ag$(0);this.SQ.OI(0);this.RC.H(WU);this.
RC.Aj(true);this.RC.M$(8);this.RC.Ag$(0);this.RC.OI(0);this.Aw.H(IK);this.J(this.
Z,0);this.J(this.PR,0);this.J(this.SO,0);this.J(this.N7,0);this.J(this.SP,0);this.
J(this.Ne,0);this.J(this.Pd,0);this.J(this.RA,0);this.J(this.Or,0);this.J(this.RB
,0);this.J(this.Nx,0);this.J(this.K$,0);this.J(this.Jf,0);this.J(this.KQ,0);this.
J(this.Mm,0);this.J(this.X7,0);this.J(this.SQ,0);this.J(this.RC,0);this.J(this.Aw
,0);this.N.Cv=[this,this.Eo];this.N.Cc=[this,this.ByL];this.N.CS(A.aaL(A.ach.EU)
);this.Z.Ej=[this,this.BzE];this.PR.AN=[this,this.ByI];this.PR.At([this,this.A8x
,this.Ary]);this.SO.AN=[this,this.Bds];this.N7.Gg([this,this.D3,this.GG]);this.N7.
At([this,this.A8y,this.AFh]);this.SP.AN=[this,this.Bds];this.Ne.Gg([this,this.D3
,this.GG]);this.Ne.At([this,this.A8z,this.AFi]);this.Pd.AN=[this,this.ByH];this.
Pd.At([this,this.A7A,this.Ara]);this.RA.AN=[this,this.Bdr];this.Or.Gg([this,this.
D3,this.GG]);this.Or.At([this,this.A7B,this.AD4]);this.RB.AN=[this,this.Bdr];this.
Nx.Gg([this,this.D3,this.GG]);this.Nx.At([this,this.A7D,this.AD6]);this.K$.AN=[this
,this.AzK];this.K$.At([B=this.Gender,B.B9,B.B_]);this.K$.CG(this.Gender);this.Jf.
AN=[this,this.AzK];this.Jf.At([B=this.AnimalType,B.B9,B.B_]);this.Jf.CG(this.AnimalType
);this.KQ.AN=[this,this.AzK];this.KQ.At([B=this.Transponder,B.B9,B.B_]);this.KQ.
CG(this.Transponder);this.Mm.AN=[this,this.AzK];this.Mm.At([B=this.Ed,B.B9,B.B_]
);this.Mm.CG(this.Ed);this.X7.AN=[this,this.A15];this.SQ.AN=[this,this.A15];this.
RC.AN=[this,this.A15];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.
Gender._Done();this.AnimalType._Done();this.Transponder._Done();this.Ed._Done();
this.Z._Done();this.PR._Done();this.SO._Done();this.N7._Done();this.SP._Done();this.
Ne._Done();this.Pd._Done();this.RA._Done();this.Or._Done();this.RB._Done();this.
Nx._Done();this.K$._Done();this.Jf._Done();this.KQ._Done();this.Mm._Done();this.
X7._Done();this.SQ._Done();this.RC._Done();this.Aw._Done();C.AB._Done.call(this);
},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit();this.AnimalType.
_ReInit();this.Transponder._ReInit();this.Ed._ReInit();this.Z._ReInit();this.PR.
_ReInit();this.SO._ReInit();this.N7._ReInit();this.SP._ReInit();this.Ne._ReInit(
);this.Pd._ReInit();this.RA._ReInit();this.Or._ReInit();this.RB._ReInit();this.Nx.
_ReInit();this.K$._ReInit();this.Jf._ReInit();this.KQ._ReInit();this.Mm._ReInit(
);this.X7._ReInit();this.SQ._ReInit();this.RC._ReInit();this.Aw._ReInit();this.N.
B0(A.aaR(A.acf.A4c));this.SO.U(A.aaR(A.acf.ADp));this.N7.AE$(A.aaR(A.acf.GD));this.
SP.U(A.aaR(A.acf.AGt));this.Ne.AE$(A.aaR(A.acf.GD));this.Pd.U(A.aaR(A.acf.Rz));this.
RA.U(A.aaR(A.acf.ADp));this.RB.U(A.aaR(A.acf.AGt));},_Mark:function(D){var B;C.AB.
_Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ne)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Or)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.RB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListFilterScreen"};C.A_n={Zr:null,BmT:function(Bwf){var Ex=A.
_NewObject(C.A_m,0);Ex.AB=Bwf;Ex.Mn=this.Zr;this.Zr=Ex;},A94:function(){var U2=null;
if(!!this.Zr){U2=this.Zr.AB;this.Zr=this.Zr.Mn;}return U2;},Contains:function(AkY
){var Ex=this.Zr;while(!!Ex){if(Ex.AB.AnH===AkY)return true;Ex=Ex.Mn;}return false;
},BmJ:function(){if(!!this.Zr)return this.Zr.AB;else return null;},_Init:function(
aArg){this.__proto__=C.A_n;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Zr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenStack"};C.A_m={AB:null,Mn:null,_Init:function(
aArg){this.__proto__=C.A_m;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Mn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.ALC={AQ$:function(){A._GetAutoObject(A.Device.Helper).AwN(this.H0,0);A._GetAutoObject(
C.AX).Fl();},A64:function(){this.H0.Ck(A._GetAutoObject(A.Device.Device).Br);A._GetAutoObject(
C.AX).Fl();},A54:function(){return A.aaL(A.ach.AmE);},_Init:function(aArg){C.AFA.
_Init.call(this,aArg);this.__proto__=C.ALC;this.Dk(C.IA);},_className:"Application::AnimalActionRateScreen"
};C.ALy={Wd:function(G){this.Af9();this.IR(A.aaR(A.acf.AUw),[this,this.ASW],5);this.
IR(A.aaR(A.acf.A4Q),[this,this.Bkz],4);this.IR(A.aaR(A.acf.AFz),[this,this.ASH],
3);this.IR(A.aaR(A.acf.AnC),[this,this.Awd],2);this.IR(A.aaR(A.acf.Xv),[this,this.
AD9],1);this.IR(A.aaR(A.acf.At0),[this,this.AD3],0);A._GetAutoObject(C.BL).Ft();
A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.Al0)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dp(6);},Dw:function(G){},Aa4:function(){return C.AMr;},Aa5:function(
){return C.ACA;},QY:function(G){var Ba=A._GetAutoObject(A.Device.Helper).Mj();var
Ayk=A._NewObject(A.Device.BoolFilterCriterion,0);Ayk.Initialize(8,0,true,true);Ba.
CX(Ayk);A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);},HJ:function(G){C.GN.HJ.call(
this,G);if(this.AjW()===false){this.N.Cn(A.aaL(A.ach.AFI));this.N.Ch=[this,this.
A5k];this.N.FC(A.jV);}this.N.OJ(false);this.N.OK(false);},AfU:function(){A._GetAutoObject(
C.AX).BS(41);},AfT:function(){A._GetAutoObject(C.AX).BS(43);},_Init:function(aArg
){C.GN._Init.call(this,aArg);this.__proto__=C.ALy;var B;this.Dk(C.AOl);this.Du(A.
aaR(A.acf.A6$));this.Av9([B=A._GetAutoObject(A.Device.Device),B.A7E,B.A$8]);},_ReInit:
function(){C.GN._ReInit.call(this);this.Du(A.aaR(A.acf.A6$));},_className:"Application::AlarmListScreen"
};C.AMS={Dw:function(G){},AlA:function(G){if(!!this.Bf)A.ab5("%i",this.Bf.AD.Gi);
var Aa=(C.ABk.isPrototypeOf(G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper
).HF(Aa.Hu);A._GetAutoObject(C.AX).BS(13);}},QY:function(G){var Ba=A._GetAutoObject(
A.Device.Helper).Mj();var AyE=A._NewObject(A.Device.BoolFilterCriterion,0);AyE.Initialize(
9,0,true,true);Ba.CX(AyE);A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);},HJ:function(
G){C.GN.HJ.call(this,G);this.N.OJ(false);this.N.OK(false);},_Init:function(aArg){
C.GN._Init.call(this,aArg);this.__proto__=C.AMS;this.Dk(C.AOn);this.Du(A.aaR(A.acf.
A7a));},_ReInit:function(){C.GN._ReInit.call(this);this.Du(A.aaR(A.acf.A7a));},_className:
"Application::ControlListScreen"};C.Ad4={Filter:null,Ei:0,I1:10,TableId:0,Operator:
1,CT:function(){var F;this.Te((F=this.Filter,F[1].call(F[0])).DX(this.Ei,this.Operator
));},Bh:function(aSize){C.Ci.Bh.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[
0]-(2*this.I1),aSize[1]]));},Bi:function(E){if(A.aaZ(this.Filter,E))return;if(!!
this.Filter)A.z$([this,this.L6],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.
L6],E,0);A.pe([this,this.L6],this);},L6:function(G){var F;if(!!this.Filter&&!!(F=
this.Filter,F[1].call(F[0])))this.Te((F=this.Filter,F[1].call(F[0])).DX(this.Ei,
this.Operator));else this.Te(null);},Ag$:function(E){if(this.TableId===E)return;
this.TableId=E;A.pe([this,this.L6],this);},M$:function(E){if(this.Ei===E)return;
this.Ei=E;A.pe([this,this.L6],this);},Te:function(AM){if(!!AM)this.U(A._GetAutoObject(
A.Device.Helper).A5Z(this.TableId,AM));else this.U(A._GetAutoObject(A.Device.Helper
).Amx(this.TableId,this.Ei));},OI:function(E){if(this.Operator===E)return;this.Operator=
E;A.pe([this,this.L6],this);},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.
__proto__=C.Ad4;this.V.H(AG6);this.V.A4(0x11);},_ReInit:function(){C.Ci._ReInit.
call(this);this.CT();},_Mark:function(D){var B;C.Ci._Mark.call(this,D);if((B=this.
Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"
};C.Qr={HZ:null,Bh:function(aSize){var B;C.Ad4.Bh.call(this,aSize);this.HZ.H([(aSize[
0]-((B=this.HZ.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I1,0,this.
HZ.M[0]-this.I1,aSize[1]]);},Te:function(AM){this.U(A._GetAutoObject(A.Device.Helper
).Amx(this.TableId,this.Ei));var Az=(A.Device.BoolFilterCriterion.isPrototypeOf(
AM)?AM:null);if(!!Az&&Az.A7)this.HZ.Cu(1);else this.HZ.Cu(0);},_Init:function(aArg
){C.Ad4._Init.call(this,aArg);A.acg.An._Init.call(this.HZ={I:this},0);this.__proto__=
C.Qr;this.HZ.H(AG7);this.HZ.Cu(0);this.J(this.HZ,0);this.HZ.Ax(A.aaL(A.ach.Aqj));
},_Done:function(){this.__proto__=C.Ad4;this.HZ._Done();C.Ad4._Done.call(this);}
,_ReInit:function(){C.Ad4._ReInit.call(this);this.HZ._ReInit();},_Mark:function(
D){var B;C.Ad4._Mark.call(this,D);if((B=this.HZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.AOV={An:null,Text:null,C8:function(
E){C.BP.C8.call(this,E);this.Text.L(E);this.An.L(E);},_Init:function(aArg){C.BP.
_Init.call(this,aArg);A.acg.An._Init.call(this.An={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AOV;this.An.H(AWe);this.Text.H(AWf);this.
Text.A4(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.An,0);this.J(this.Text
,0);this.An.Ax(A.aaL(A.ach.Aed));this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=C.BP;this.An._Done();this.Text._Done();C.BP._Done.call(this);},_ReInit:
function(){C.BP._ReInit.call(this);this.An._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BP.
_Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AuW={
CY:null,A1:null,VG:null,Bh:function(aSize){var B;C.BP.Bh.call(this,aSize);this.VG.
H(A.abJ(this.VG.M,A.abe(this.A1.M.slice(0,2),AWg)));this.VG.H(A.abK(this.VG.M,A.
abf([(B=this.A1.M)[2]-B[0],B[3]-B[1]],AWh)));},Ai:function(Ae){var B;C.BP.Ai.call(
this,Ae);var Ir=((Ae&0x40)===0x40)&&(this.AR===this.A1);if(Ir)this.VG.L(A.jb.AR);
else this.VG.L(A.jb.AmG);},C8:function(E){C.BP.C8.call(this,E);this.CY.C8(E);},Ag0:
function(){return this.A1.Ag0();},DT:function(E){this.CY.DT(E);},_Init:function(
aArg){C.BP._Init.call(this,aArg);C.CY._Init.call(this.CY={I:this},0);C.A1._Init.
call(this.A1={I:this},0);A.acg.Cz._Init.call(this.VG={I:this},0);this.__proto__=
C.AuW;this.CY.H(AWi);this.CY.DT(0);this.A1.H(AWj);this.VG.H(AG8);this.VG.NX(2);this.
J(this.CY,0);this.J(this.A1,0);this.J(this.VG,0);this.A9(this.A1);},_Done:function(
){this.__proto__=C.BP;this.CY._Done();this.A1._Done();this.VG._Done();C.BP._Done.
call(this);},_ReInit:function(){C.BP._ReInit.call(this);this.CY._ReInit();this.A1.
_ReInit();this.VG._ReInit();},_Mark:function(D){var B;C.BP._Mark.call(this,D);if((
B=this.CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DF={Dj:null,Ij:null,Ii:null,AfQ:function(G){if(this.E$<0)this.M_(1);else if(
this.E$===9)this.M_(0);else this.M_(this.E$+1);A.pe(this.Dj,this);},Ai:function(
Ae){var B;C.E$.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Ir=((Ae&0x40)===0x40
);if(Ir){this.Background.L(A.jb.AR);this.Text.L(A.jb.Bj);this.Dl(256);}else if(G6
){this.Background.L(this.MX);this.Text.L(A.jb.Text);this.Dl(256);}else{this.Background.
L(this.MX);this.Text.L(A.jb.Text);this.Dl(128);}},AfP:function(G){if(this.E$<=0)
this.M_(9);else this.M_(this.E$-1);A.pe(this.Dj,this);},_Init:function(aArg){C.E$.
_Init.call(this,aArg);A.Core.BJ._Init.call(this.Ij={I:this},0);A.Core.BJ._Init.call(
this.Ii={I:this},0);this.__proto__=C.DF;this.Ij.Filter=4;this.Ii.Filter=5;this.Ij.
BK=[this,this.AfQ];this.Ij.DS=[this,this.AfQ];this.Ii.BK=[this,this.AfP];this.Ii.
DS=[this,this.AfP];},_Done:function(){this.__proto__=C.E$;this.Ij._Done();this.Ii.
_Done();C.E$._Done.call(this);},_ReInit:function(){C.E$._ReInit.call(this);this.
Ij._ReInit();this.Ii._ReInit();},_Mark:function(D){var B;C.E$._Mark.call(this,D);
if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ij)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.A1={Dj:null,Cp:null,CQ:null,Dr:null,Eh:null,F_:null
,EQ:null,Fb:null,E0:null,M2:0,Ap0:false,Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);if(((Ae&0x40)===0x40)&&this.Ap0)this.EQ.Aj9(true);else this.EQ.Aj9(false);}
,AEw:function(E){var B;if(E===this.Ag0())return;var AJU=E;var Em=this.EQ;while(!
!Em){if(AJU>0){Em.M_(AJU%10);AJU=(AJU/10)|0;}else Em.M_(-1);Em=(C.DF.isPrototypeOf(
B=this.R5(Em,2,0x11))?B:null);}},Ag0:function(){var B;var KW=A.jV;var P=0;var B4=
this.Cp;for(;P<6;P=P+1){if(!!B4&&(B4.E$>=0))KW=KW+B4.E$.toFixed();B4=(C.DF.isPrototypeOf(
B=this.Vw(B4,0x11))?B:null);}return A.wz(KW,-1,10);},Oi:function(G){if(this.Ag0(
)>=10)this.Be6(7);},MS:function(G){if((this.Ag0()>0)&&(this.Cp.E$<0))this.Be6(2);
else if(this.Ag0()<=0)this.E0.NB=true;},Ac_:function(G){A.pe(this.Dj,this);},Be6:
function(Gq){var B;var AKQ=0;var Em=null;switch(Gq){case 2:{Em=this.Cp;AKQ=7;}break;
case 7:{Em=this.EQ;AKQ=2;}break;default:throw new Error(AWk);}while(!!Em){var A1Y=(
C.DF.isPrototypeOf(B=this.R5(Em,AKQ,0x11))?B:null);if(!!A1Y)Em.M_(A1Y.E$);else if(
AKQ===7)Em.M_(0);else Em.M_(-1);Em=A1Y;}A.pe([this,this.Ac_],this);},Aj9:function(
E){if(this.Ap0===E)return;this.Ap0=E;this.Am();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.DF._Init.call(this.Cp={I:this},0);C.DF._Init.call(this.CQ={I:this
},0);C.DF._Init.call(this.Dr={I:this},0);C.DF._Init.call(this.Eh={I:this},0);C.DF.
_Init.call(this.F_={I:this},0);C.DF._Init.call(this.EQ={I:this},0);A.Core.BJ._Init.
call(this.Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0);this.__proto__=
C.A1;this.H(AxC);this.Cp.AY(0x3);this.Cp.H(AG9);this.CQ.AY(0x3);this.CQ.H(AG_);this.
Dr.AY(0x3);this.Dr.H(AG$);this.Eh.AY(0x3);this.Eh.H(AHa);this.F_.AY(0x3);this.F_.
H(AHb);this.EQ.AY(0x3);this.EQ.H(AHc);this.EQ.M_(0);this.Fb.Filter=6;this.E0.Filter=
7;this.M2=A.jb.CF;this.J(this.Cp,0);this.J(this.CQ,0);this.J(this.Dr,0);this.J(this.
Eh,0);this.J(this.F_,0);this.J(this.EQ,0);this.A9(this.EQ);this.Cp.Dj=[this,this.
Ac_];this.CQ.Dj=[this,this.Ac_];this.Dr.Dj=[this,this.Ac_];this.Eh.Dj=[this,this.
Ac_];this.F_.Dj=[this,this.Ac_];this.EQ.Dj=[this,this.Ac_];this.Fb.BK=[this,this.
Oi];this.E0.BK=[this,this.MS];},_Done:function(){this.__proto__=A.Core.O;this.Cp.
_Done();this.CQ._Done();this.Dr._Done();this.Eh._Done();this.F_._Done();this.EQ.
_Done();this.Fb._Done();this.E0._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Cp._ReInit();this.CQ._ReInit();this.Dr._ReInit(
);this.Eh._ReInit();this.F_._ReInit();this.EQ._ReInit();this.Fb._ReInit();this.E0.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Dj)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bgw="f8b39c50";C.BBd={Undefined:0,BCf:1,BBu:2};C.Akm={
Tc:null,AiC:null,K7:null,AMW:null,AnK:null,push:function(ME){if(!this.Tc){ME.Ahc=
null;ME.Mn=null;this.Tc=ME;this.AiC=this.Tc;}else{ME.Ahc=this.AiC;ME.Mn=null;this.
AiC.Mn=ME;this.AiC=ME;}},BAd:function(ME){var P8=this.Tc;while(!!P8){if(P8.JD.Id===
ME.Id)return P8;P8=P8.Mn;}return P8;},BzX:function(ME){if(ME===this.Tc)this.pop(
);else if(ME===this.AiC){ME=ME.Ahc;if(!!ME)ME.Mn=null;this.AiC=ME;}else{ME.Ahc.Mn=
ME.Mn;ME.Mn.Ahc=ME.Ahc;}},Ag4:function(E){var F;if(this.K7===E)return;this.K7=E;
if(!!this.K7)this.K7.Agm(2);(F=this.AMW,F[2].call(F[0],this.K7));},UZ:function(G
){var P8=(C.AS_.isPrototypeOf(G)?G:null);if(!!P8){if(!P8.JD.PopupState){if(!this.
K7)this.Ag4(this.top());}else if(P8.JD.PopupState===4){this.pop();this.Ag4(this.
top());}else if(P8.JD.PopupState===5){this.pop();this.Ag4(this.top());}else if(P8.
JD.PopupState===7){this.pop();this.Ag4(this.top());}else if(P8.JD.PopupState===8
){this.pop();this.Ag4(this.top());}else if(P8.JD.PopupState===6){if(P8===this.K7
){this.pop();this.Ag4(this.top());}else this.BzX(P8);}else if(P8.JD.PopupState===
3){this.pop();this.Ag4(this.top());}}},pop:function(){var AKd=null;if(!!this.Tc){
AKd=this.Tc;if(this.Tc===this.AiC){this.Tc=null;this.AiC=null;}else{this.Tc=this.
Tc.Mn;if(!this.Tc)throw new Error(AWl);this.Tc.Ahc=null;}AKd.Ahc=null;AKd.Mn=null;
}return AKd;},top:function(){return this.Tc;},BzF:function(G){var B;var Atm=(A.Device.
PopupContext.isPrototypeOf(B=this.AnK.JD)?B:null);if(!!Atm){var A3b=this.BAd(Atm
);if(!!A3b){A3b.A80(Atm);if(!Atm.Show)A3b.Agm(6);}else if(Atm.Show){var AJS=A._NewObject(
C.AS_,0);AJS.A80(Atm);AJS.AR8=[this,this.UZ];this.push(AJS);AJS.Agm(0);}}},_Init:
function(aArg){A.Core.A_J._Init.call(this.AnK={I:this},0);this.__proto__=C.Akm;this.
AnK.ARz=[this,this.BzF];this.AnK.Bk2(A._GetAutoObject(A.Device.Device).Ano);A.h7++;
},_Done:function(){this.__proto__=null;this.AnK._Done();A.h7--;},_ReInit:function(
){this.AnK._ReInit();},_Mark:function(D){var B;if((B=this.Tc)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K7)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AMW)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AnK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AS_={SS:null,Mn:null,Ahc:null,JD:null,AR8:null,PopupIdToString:null,Ah2:function(
Bvm,BvV,Bwe,Bv6,Bv8,Bv5,BvE){var U1=A._NewObject(C.AS9,0);U1.Bl8(this.JD.Id);U1.
A9G(Bvm);U1.AR9=Bv5;U1.A9I(this.JD.AkF);U1.A9u(this.JD.Akl);U1.Bw=A._NewObject(C.
N,0);U1.KK().Cc=Bv8;U1.KK().Ch=null;U1.KK().Cv=Bv6;U1.KK().B0(Bwe);U1.KK().Cn(null
);U1.KK().Ho(BvV);U1.KK().AEB(BvE);return U1;},Aj5:function(){if(!this.SS){var AiA=
this.PopupIdToString.BQ(this.JD.Id);switch(this.JD.Id){case 46:this.SS=this.Ah2(
AiA,A.jV,A.aaR(A.acf.Ok),null,[this,this.AJX],[this,this.Aiu],1);break;case 91:case
92:this.SS=this.Ah2(AiA,A.jV,A.jV,null,null,[this,this.Aiu],0);break;case 39:this.
SS=this.Ah2(AiA,A.aaR(A.acf.Amb),A.aaR(A.acf.Ok),[this,this.A2a],[this,this.A2b]
,[this,this.Aiu],3);break;case 13:this.SS=this.Ah2(AiA,A.aaR(A.acf.Amb),A.aaR(A.
acf.Bm4),[this,this.A1$],[this,this.AJX],[this,this.Aiu],3);break;case 25:this.SS=
this.Ah2(AiA,A.aaR(A.acf.Amb),A.aaR(A.acf.Ok),[this,this.A1$],[this,this.AJX],[this
,this.Aiu],3);break;case 16:case 24:case 49:case 74:this.SS=this.Ah2(AiA,A.aaR(A.
acf.Amb),A.jV,[this,this.A1$],null,[this,this.Aiu],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.SS=this.Ah2(AiA,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2a],[this,this.A2b],[this,this.Aiu],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.SS=this.Ah2(AiA,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AJX],[this,this.Aiu],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.SS=
this.Ah2(AiA,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2a],[this,this.A2b],[this
,this.Aiu],3);break;default:A.ab5("%s",(AWm+this.JD.Id.toFixed())+AWn);}}switch(
this.JD.Id){case 16:case 49:this.SS.A9W(true);break;case 91:case 92:this.SS.A9W(
false);break;default:;}return this.SS;},AJX:function(G){this.Agm(4);},A1$:function(
G){this.Agm(5);},A2b:function(G){this.Agm(7);},A2a:function(G){this.Agm(8);},Aiu:
function(G){this.Agm(3);},A80:function(E){if(this.JD===E)return;this.JD=E;if(!!this.
SS){this.Aj5().A9I(this.JD.AkF);this.Aj5().A9u(this.JD.Akl);}},Agm:function(Bv$){
var B;this.JD.Bl9(Bv$);(B=this.AR8)?B[1].call(B[0],this):null;},Bzd:function(G){
this.Agm(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.AS_;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.SS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahc)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR8)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.FU={BooleanToYesNo:null,Do:function(
){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.FU;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.AeZ={Uc:null,J0:function(G){var F;var BO=this.AK;this.Bx(this.AK+1);if(this.
AK!==BO){if(!!this.Uc&&!!this.AC)switch(this.AC.C4(this.AK)){case 0:(F=this.Uc,F[
2].call(F[0],false));break;case 1:(F=this.Uc,F[2].call(F[0],true));break;default:;
}A.abo(this.Uc,0);}},JV:function(G){var F;var BO=this.AK;this.Bx(this.AK-1);if(this.
AK!==BO){if(!!this.Uc&&!!this.AC)switch(this.AC.C4(this.AK)){case 0:(F=this.Uc,F[
2].call(F[0],false));break;case 1:(F=this.Uc,F[2].call(F[0],true));break;default:;
}A.abo(this.Uc,0);}},Akf:function(E){if(A.aaZ(this.Uc,E))return;if(!!this.Q)A.z$([
this,this.A2O],this.Uc,0);this.Uc=E;if(!!E)A.zX([this,this.A2O],E,0);if(!!E)A.pe([
this,this.A2O],this);},A2O:function(G){var F;if(!!this.Uc){if((F=this.Uc,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BX._Init.call(this,aArg
);this.__proto__=C.AeZ;this.Kn(this.V,-1);},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.Uc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ATp={I6:null,OP:null,II:null,Ga:null,AJ:null,AaU:null,Agr:null,Tx:null,RW:null
,Ach:null,WC:null,G$:null,AAK:true,Init:function(aArg){var B;A.zX([this,this.AlD
],[B=A._GetAutoObject(A.Device.Device),B.ARZ,B.AZt],0);A.pe([this,this.AlD],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.AAK)this.N.C2(A.aaL(A.ach.
AP_));else this.N.C2(A.aaL(A.ach.AP$));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OP.L(A.jb.Bj);this.RW.Y(false);this.Tx.Y(false);this.II.Y(true);this.Ga.
Ar(false);(F=this.Ga.Q,F[2].call(F[0],this.Ga.B1));this.Background.L(A.jb.FZ);}else
if(this.AaU.Bv){this.OP.L(A.jb.Text);this.RW.Y(true);this.Tx.Y(true);this.II.Y(false
);this.Ga.Ar(false);(F=this.Ga.Q,F[2].call(F[0],this.Ga.B1));this.Background.L(A.
jb.ET);}else{this.OP.L(A.jb.Text);this.RW.Y(false);this.Tx.Y(false);this.II.Y(true
);this.Ga.Ar(true);this.Background.L(A.jb.CF);}if(this.Agr.Bv)this.WC.Y(true);else
this.WC.Y(false);},Cw:function(G){A._GetAutoObject(A.Device.Device).Ahm();},EV:function(
G){A._GetAutoObject(A.Device.Device).AnA();A._GetAutoObject(A.Device.Device).AeL(
false);A._GetAutoObject(A.Device.Device).Ua(false);},AlD:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
ByU],this);break;case 3:{A.pe([this,this.Bd3],this);A.pe([B=this.AaU,B.Aw0],this
);A.pe(this.AaU.Ms,this);}break;case 4:A.ab5("%s",AWo);break;default:;}},Eo:function(
G){A._GetAutoObject(C.AX).Fl();},BzG:function(G){this.Bmx(!this.AAK);},Bmx:function(
E){if(this.AAK===E)return;this.AAK=E;if(!E)A._GetAutoObject(A.Device.Device).AeL(
false);this.Am();},ByU:function(G){var B;this.Bd3(this);if(this.AAK)A._GetAutoObject(
A.Device.Device).AeL(true);A._GetAutoObject(A.Device.Device).Wh(65280);A._GetAutoObject(
A.Device.Device).Ua(true);A.pe([B=this.AaU,B.StartTimer],this);A.pe([B=this.Agr,
B.StartTimer],this);this.Am();},ByV:function(G){A._GetAutoObject(A.Device.Device
).AeL(false);A._GetAutoObject(A.Device.Device).Ua(false);this.Am();},ByX:function(
G){this.Am();},Bd3:function(G){A._GetAutoObject(A.Device.Device).Ahm();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.I6._Init.call(this.I6={I:this},0);C.CO._Init.
call(this.OP={I:this},0);A.acg.An._Init.call(this.II={I:this},0);A.acl.Ga._Init.
call(this.Ga={I:this},0);A.acg.AJ._Init.call(this.AJ={I:this},0);A.Core.Timer._Init.
call(this.AaU={I:this},0);A.Core.Timer._Init.call(this.Agr={I:this},0);A.acg.An.
_Init.call(this.Tx={I:this},0);A.acg.An._Init.call(this.RW={I:this},0);A.acg.Text.
_Init.call(this.Ach={I:this},0);C.WC._Init.call(this.WC={I:this},0);C.CO._Init.call(
this.G$={I:this},0);this.__proto__=C.ATp;var B;this.Background.L(A.jb.CF);this.N.
Y(true);this.I6.H(AWp);this.I6.Aki(0);this.OP.H(AWq);this.OP.R(A.aaR(A.acf.A_O));
this.OP.L(A.jb.Text);this.II.H(AWr);this.II.L(A.jb.AR);this.II.Y5(true);this.Ga.
Fe(1750);this.Ga.T9(750);this.Ga.Akd(0);this.Ga.Ar(true);this.Ga.B1=3;this.AJ.H(
AxD);this.AaU.PK(-1);this.AaU.We(1000);this.Agr.PK(-1);this.Agr.We(5000);this.Tx.
H(AHd);this.RW.H(AHd);this.RW.L(A.jb.ET);this.Ach.H(AxD);this.Ach.R(A.aaR(A.acf.
A_o));this.Ach.L(A.jb.Text);this.WC.H(AxD);this.G$.H(AWs);this.G$.Ar(false);this.
G$.R(A.aaR(A.acf.RangeTest));this.G$.L(A.jb.Text);this.J(this.I6,0);this.J(this.
OP,0);this.J(this.II,0);this.J(this.AJ,0);this.J(this.Tx,0);this.J(this.RW,0);this.
J(this.Ach,0);this.J(this.WC,0);this.J(this.G$,0);this.N.Cv=[this,this.Eo];this.
N.Cc=[this,this.BzG];this.N.CS(A.aaL(A.ach.EU));this.OP.S(A.aaL(A.fl.Ah));this.OP.
A8(A.aaL(A.fl.Ak));this.OP.CB(A.aaL(A.fl.By));this.II.Ax(A.aaL(A.ach.AC2));this.
Ga.Q=[B=this.II,B.ARM,B.Cu];this.AaU.Ms=[this,this.ByV];this.Agr.Ms=[this,this.ByX
];this.Tx.Ax(A.aaL(A.ach.Tx));this.RW.Ax(A.aaL(A.ach.RW));this.Ach.S(A.aaL(A.fl.
Ah));this.WC.At([B=A._GetAutoObject(A.Device.Device),B.AR0,B.AZu]);this.G$.S(A.aaL(
A.fl.J$));this.G$.A8(A.aaL(A.fl.Ie));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.I6._Done();this.OP._Done();this.II._Done();this.Ga._Done();this.AJ._Done(
);this.AaU._Done();this.Agr._Done();this.Tx._Done();this.RW._Done();this.Ach._Done(
);this.WC._Done();this.G$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.I6._ReInit();this.OP._ReInit();this.II._ReInit();this.Ga.
_ReInit();this.AJ._ReInit();this.AaU._ReInit();this.Agr._ReInit();this.Tx._ReInit(
);this.RW._ReInit();this.Ach._ReInit();this.WC._ReInit();this.G$._ReInit();this.
OP.R(A.aaR(A.acf.A_O));this.Ach.R(A.aaR(A.acf.A_o));this.G$.R(A.aaR(A.acf.RangeTest
));this.OP.S(A.aaL(A.fl.Ah));this.OP.A8(A.aaL(A.fl.Ak));this.OP.CB(A.aaL(A.fl.By
));this.Ach.S(A.aaL(A.fl.Ah));this.G$.S(A.aaL(A.fl.J$));this.G$.A8(A.aaL(A.fl.Ie
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.I6)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Agr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G$).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Abw={
ScreenType:0,NV:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},NY:
function(G){A._GetAutoObject(C.AX).BS(this.ScreenType);},_Init:function(aArg){C.
Ci._Init.call(this,aArg);this.__proto__=C.Abw;},_className:"Application::MenuItemScreen"
};C.TZ={AdL:null,Me:null,Amc:false,Init:function(aArg){},Ai:function(Ae){C.Ci.Ai.
call(this,Ae);if(this.Amc){this.Me.Cu(1);this.Me.L(A.jb.H1);}else{this.Me.Cu(0);
if(this.Ky)this.Me.L(A.jb.Bj);else if(this.Hb)this.Me.L(A.jb.Text);else this.Me.
L(A.jb.Bj);}},IP:function(G){var F,CM;if(!!this.AdL){(CM=this.AdL,CM[2].call(CM[
0],!(F=this.AdL,F[1].call(F[0]))));this.AEf((F=this.AdL,F[1].call(F[0])));A.pe([
this,this.DD],this);}},A2g:function(G){this.Ky=true;this.DD(this);},AEf:function(
E){if(this.Amc===E)return;this.Amc=E;this.DD(this);this.Am();},A2H:function(G){var
F;this.AEf((F=this.AdL,F[1].call(F[0])));},AZN:function(s){this.A2H(s);},DD:function(
G){var F;if(!this.N||!this.Ky)return;if(this.Amc){(F=this.N,F[1].call(F[0])).B0(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HL.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).B0(A.aaR(A.acf.A7p));(F=this.N,F[1].call(F[0])).HL.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASc:function(E){if(A.aaZ(this.AdL,E))
return;if(!!this.AdL)A.z$([this,this.AZN],this.AdL,0);this.AdL=E;if(!!E)A.zX([this
,this.AZN],E,0);if(!!E)A.pe([this,this.AZN],this);},_Init:function(aArg){C.Ci._Init.
call(this,aArg);A.acg.An._Init.call(this.Me={I:this},0);this.__proto__=C.TZ;this.
V.L(A.jb.H1);this.Me.H(AHe);this.Me.Cu(0);this.J(this.Me,0);this.Me.Ax(A.aaL(A.ach.
Aqj));this.Init(aArg);},_Done:function(){this.__proto__=C.Ci;this.Me._Done();C.Ci.
_Done.call(this);},_ReInit:function(){C.Ci._ReInit.call(this);this.Me._ReInit();
},_Mark:function(D){var B;C.Ci._Mark.call(this,D);if((B=this.AdL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Me)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.AM2={HY:null,ID:null,_Init:function(aArg){C.Cq.
_Init.call(this,aArg);C.Sy._Init.call(this.HY={I:this},0);C.AFZ._Init.call(this.
ID={I:this},0);this.__proto__=C.AM2;var B;this.JJ(A.aaR(A.acf.ABK));this.HY.H(AhF
);this.HY.Aj(true);this.HY.U(A.aaR(A.acf.Date));this.HY.Bg(true);this.ID.H(WV);this.
ID.Aj(true);this.ID.U(A.aaR(A.acf.Bt));this.J(this.HY,0);this.J(this.ID,0);this.
HY.Aex([B=this.HY,B.FJ]);this.HY.Gg([this,this.D3,this.GG]);this.HY.Akc(A.aaL(A.
ach.Edit));this.HY.AbN([B=A._GetAutoObject(A.Device.Helper),B.UH,B.UI]);this.ID.
Aex([B=this.ID,B.FJ]);this.ID.Gg([this,this.D3,this.GG]);this.ID.Akc(A.aaL(A.ach.
Edit));this.ID.AbN([B=A._GetAutoObject(A.Device.Helper),B.UH,B.UI]);},_Done:function(
){this.__proto__=C.Cq;this.HY._Done();this.ID._Done();C.Cq._Done.call(this);},_ReInit:
function(){C.Cq._ReInit.call(this);this.HY._ReInit();this.ID._ReInit();this.JJ(A.
aaR(A.acf.ABK));this.HY.U(A.aaR(A.acf.Date));this.ID.U(A.aaR(A.acf.Bt));},_Mark:
function(D){var B;C.Cq._Mark.call(this,D);if((B=this.HY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUm={Q4:null,Fu:null,BW:null,OD:null,Yo:null,AaD:null,_Init:function(aArg){C.
Cq._Init.call(this,aArg);C.Q4._Init.call(this.Q4={I:this},0);C.ALY._Init.call(this.
Fu={I:this},0);C.ATX._Init.call(this.BW={I:this},0);C.ATZ._Init.call(this.OD={I:
this},0);C.AeZ._Init.call(this.Yo={I:this},0);C.AaD._Init.call(this.AaD={I:this}
,0);this.__proto__=C.AUm;var B;this.JJ(A.aaR(A.acf.Temperature));this.Fu.At(A._GetAutoObject(
A.Device.Device).AnimalType);this.BW.H(AWt);this.BW.Aj(true);this.BW.U(A.aaR(A.acf.
AqT));this.BW.Bg(false);this.OD.H(ZS);this.OD.Aj(true);this.OD.U(A.aaR(A.acf.Undertemperature
));this.OD.Bg(true);this.OD.Bx(3800);this.OD.Gn(3000);this.OD.E1(5000);this.OD.A9P(
A.aaR(A.acf.AGa));this.Yo.H(AWu);this.Yo.Aj(true);this.Yo.Y(true);this.Yo.U(A.aaR(
A.acf.A4a));this.J(this.BW,0);this.J(this.OD,0);this.J(this.Yo,0);this.BW.Aex([B=
this.BW,B.FJ]);this.BW.Gg([this,this.D3,this.GG]);this.BW.Akc(A.aaL(A.ach.Edit));
this.BW.LT([B=this.BW,B.Ax$]);this.BW.LV(A.aaL(A.ach.Anr));this.BW.At([B=this.Fu
,B.B9,B.B_]);this.BW.CG(this.Fu);this.BW.A9s([B=this.Fu,B.AR7,B.AZA]);this.BW.A9r([
B=this.Fu,B.AR6,B.AZz]);this.OD.LT([B=this.BW,B.Ax$]);this.OD.LV(A.aaL(A.ach.Anr
));this.OD.At([B=A._GetAutoObject(A.Device.Device),B.A8v,B.Bav]);this.Yo.CG(this.
AaD);this.Yo.Akf([B=A._GetAutoObject(A.Device.Device),B.A7Q,B.Baf]);},_Done:function(
){this.__proto__=C.Cq;this.Q4._Done();this.Fu._Done();this.BW._Done();this.OD._Done(
);this.Yo._Done();this.AaD._Done();C.Cq._Done.call(this);},_ReInit:function(){C.
Cq._ReInit.call(this);this.Q4._ReInit();this.Fu._ReInit();this.BW._ReInit();this.
OD._ReInit();this.Yo._ReInit();this.AaD._ReInit();this.JJ(A.aaR(A.acf.Temperature
));this.BW.U(A.aaR(A.acf.AqT));this.OD.U(A.aaR(A.acf.Undertemperature));this.OD.
A9P(A.aaR(A.acf.AGa));this.Yo.U(A.aaR(A.acf.A4a));},_Mark:function(D){var B;C.Cq.
_Mark.call(this,D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANe={Pz:null,PA:null,Se:null,VH:null,Sg:null,Sf:null,FU:null,Ab8:null,Init:function(
aArg){A.zX([this,this.BnO],this.PA.Q,0);},BnO:function(G){var F;A._GetAutoObject(
A.Device.Device).Awo((F=this.PA.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cq.
_Init.call(this,aArg);C.I2._Init.call(this.Pz={I:this},0);C.BX._Init.call(this.PA={
I:this},0);C.AeZ._Init.call(this.Se={I:this},0);C.I2._Init.call(this.VH={I:this}
,0);C.AeZ._Init.call(this.Sg={I:this},0);C.AeZ._Init.call(this.Sf={I:this},0);C.
FU._Init.call(this.FU={I:this},0);C.Ab8._Init.call(this.Ab8={I:this},0);this.__proto__=
C.ANe;var B;this.N.H(WU);this.JJ(A.aaR(A.acf.Device));this.Pz.H(AhF);this.Pz.Aj(
true);this.Pz.U(A.aaR(A.acf.A_y));this.Pz.Bg(false);this.Pz.Gn(2);this.Pz.E1(60);
this.Pz.Kj(A.aaR(A.acf.AGq));this.Pz.KL(A.aaR(A.acf.AGq));this.PA.H(AWv);this.PA.
Aj(true);this.PA.U(A.aaR(A.acf.A_F));this.PA.Bg(true);this.PA.Bx(0);this.PA.Gn(-
1);this.PA.E1(1);this.Se.H(ZS);this.Se.Aj(true);this.Se.U(A.aaR(A.acf.Hw));this.
Se.Bg(false);this.Se.Bx(0);this.Se.Gn(-1);this.Se.E1(1);this.VH.H(An2);this.VH.Aj(
true);this.VH.U(A.aaR(A.acf.A4J));this.VH.Bg(true);this.VH.Kj(Afk);this.VH.KL(Afk
);this.Sg.H(AkS);this.Sg.Aj(true);this.Sg.U(A.aaR(A.acf.Asd));this.Sg.Bg(false);
this.Sg.Bx(1);this.Sg.Gn(-1);this.Sg.E1(1);this.Sf.H(AHf);this.Sf.Aj(true);this.
Sf.U(A.aaR(A.acf.ArU));this.Sf.Bg(true);this.Sf.Bx(0);this.Sf.Gn(-1);this.Sf.E1(
1);this.Ab8.At(A._GetAutoObject(A.Device.Device).AwZ);this.J(this.Pz,0);this.J(this.
PA,0);this.J(this.Se,0);this.J(this.VH,0);this.J(this.Sg,0);this.J(this.Sf,0);this.
Pz.At([B=A._GetAutoObject(A.Device.Device),B.A8n,B.Bar]);this.PA.At([B=this.Ab8,
B.B9,B.B_]);this.PA.CG(this.Ab8);this.Se.CG(this.FU);this.Se.Akf([B=A._GetAutoObject(
A.Device.Device),B.ADS,B.AH$]);this.VH.At([B=A._GetAutoObject(A.Device.Device),B.
A7N,B.Bac]);this.Sg.CG(this.FU);this.Sg.Akf([B=A._GetAutoObject(A.Device.Device)
,B.A8w,B.Baw]);this.Sf.CG(this.FU);this.Sf.Akf([B=A._GetAutoObject(A.Device.Device
),B.ARQ,B.AZn]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cq;this.Pz._Done(
);this.PA._Done();this.Se._Done();this.VH._Done();this.Sg._Done();this.Sf._Done(
);this.FU._Done();this.Ab8._Done();C.Cq._Done.call(this);},_ReInit:function(){C.
Cq._ReInit.call(this);this.Pz._ReInit();this.PA._ReInit();this.Se._ReInit();this.
VH._ReInit();this.Sg._ReInit();this.Sf._ReInit();this.FU._ReInit();this.Ab8._ReInit(
);this.JJ(A.aaR(A.acf.Device));this.Pz.U(A.aaR(A.acf.A_y));this.Pz.Kj(A.aaR(A.acf.
AGq));this.Pz.KL(A.aaR(A.acf.AGq));this.PA.U(A.aaR(A.acf.A_F));this.Se.U(A.aaR(A.
acf.Hw));this.VH.U(A.aaR(A.acf.A4J));this.Sg.U(A.aaR(A.acf.Asd));this.Sf.U(A.aaR(
A.acf.ArU));},_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.Pz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.ATB={VK:null,VJ:
null,QB:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bg_
],this.QB.Q,0);},Bg_:function(G){var F;A._GetAutoObject(A.Device.Device).Aj_((F=
this.QB.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cq._Init.call(this,aArg);C.
NS._Init.call(this.VK={I:this},0);C.NS._Init.call(this.VJ={I:this},0);C.ATT._Init.
call(this.QB={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.ATB;var B;this.JJ(A.aaR(A.acf.ArN));this.VK.H(JQ);this.
VK.Aj(true);this.VK.U(A.aaR(A.acf.Ajm));this.VK.Bg(false);this.VK.NV(99);this.VJ.
H(AWw);this.VJ.Aj(true);this.VJ.U(A.aaR(A.acf.ApV));this.VJ.Bg(true);this.VJ.NV(
100);this.QB.H(WV);this.QB.Aj(true);this.QB.U(A.aaR(A.acf.A4f));this.QB.Bg(false
);this.QB.Gn(-1);this.QB.E1(1);this.EartagNrAssignmentMode.At(A._GetAutoObject(A.
Device.Device).EartagNrAssignmentMode);this.J(this.VK,0);this.J(this.VJ,0);this.
J(this.QB,0);this.VK.AN=[B=this.VK,B.NY];this.VJ.AN=[B=this.VJ,B.NY];this.QB.At([
B=this.EartagNrAssignmentMode,B.B9,B.B_]);this.QB.CG(this.EartagNrAssignmentMode
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cq;this.VK._Done();this.VJ.
_Done();this.QB._Done();this.EartagNrAssignmentMode._Done();C.Cq._Done.call(this
);},_ReInit:function(){C.Cq._ReInit.call(this);this.VK._ReInit();this.VJ._ReInit(
);this.QB._ReInit();this.EartagNrAssignmentMode._ReInit();this.JJ(A.aaR(A.acf.ArN
));this.VK.U(A.aaR(A.acf.Ajm));this.VJ.U(A.aaR(A.acf.ApV));this.QB.U(A.aaR(A.acf.
A4f));},_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.VK)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QB).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};C.WC={Q:null
,TransponderProtocolToString:null,Ao1:null,Background:null,Z:null,R_:null,GD:null
,PE:null,OF:null,Pj:null,C3:null,Go:null,Ss:null,N0:null,CountryToString:null,At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J3],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.J3],E,0);if(!!E)A.pe([this,this.J3],this);},J3:function(
G){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GD.R((F=this.
Q,F[1].call(F[0])).Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).BhF();if(BM<900
){var JU=A._GetAutoObject(A.Device.Converter).AMV(BM);if(!!JU)this.C3.R(((this.CountryToString.
Lp(JU)+Acs)+BM.toFixed())+O0);else this.C3.R(BM.toFixed());if(JU===10){var AJA=this.
A6h((F=this.Q,F[1].call(F[0])).Id);this.C3.R(this.C3.String+((((AWx+this.Ao1.Boy(
AJA))+Acs)+A.abl(this.Ao1.Box(AJA),2,10))+O0));}this.C3.Y(true);this.Pj.Y(true);
this.OF.Y(false);this.PE.Y(false);}else{this.OF.R(((A._GetAutoObject(A.Device.Converter
).Bgz(BM)+Acs)+BM.toFixed())+O0);this.OF.Y(true);this.PE.Y(true);this.C3.Y(false
);this.Pj.Y(false);}if(BM===276){this.Go.R(this.Ao1.BQ(this.A6h((F=this.Q,F[1].call(
F[0])).Id)));this.Go.Y(true);}else this.Go.Y(false);this.N0.R(this.TransponderProtocolToString.
BQ((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GD.R(A.jV);this.OF.
R(A.jV);this.Go.R(A.jV);this.C3.R(A.jV);this.N0.R(A.jV);}},A6h:function(JS){var Qk=
0;var JU=A._GetAutoObject(A.Device.Converter).Acg(JS);switch(JU){case 10:{var FY=
A._GetAutoObject(A.Device.Helper).TB(JS,8,2)|0;Qk=A._GetAutoObject(A.Device.Converter
).AB$(FY);}break;default:;}return Qk;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Ao1={I:this},0);A.acg.AJ.
_Init.call(this.Background={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.
CO._Init.call(this.R_={I:this},0);C.CO._Init.call(this.GD={I:this},0);C.CO._Init.
call(this.PE={I:this},0);C.CO._Init.call(this.OF={I:this},0);C.CO._Init.call(this.
Pj={I:this},0);C.CO._Init.call(this.C3={I:this},0);C.CO._Init.call(this.Go={I:this
},0);C.CO._Init.call(this.Ss={I:this},0);C.CO._Init.call(this.N0={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WC;
this.H(Acu);this.Background.AY(0x3F);this.Background.H(Acu);this.Background.L(A.
jb.C0);this.Z.AY(0x3F);this.Z.H(Acu);this.Z.Kf(9);this.R_.H(AWy);this.R_.Aj(true
);this.R_.R(A.aaR(A.acf.GD)+A.aaR(A.acf.Colon));this.R_.A4(0x11);this.R_.L(A.jb.
Text);this.GD.H(AWz);this.GD.Aj(true);this.GD.R(AWA);this.GD.A4(0x14);this.GD.L(
A.jb.Text);this.PE.H(AHg);this.PE.Aj(true);this.PE.R(A.aaR(A.acf.A95)+A.aaR(A.acf.
Colon));this.PE.A4(0x11);this.PE.L(A.jb.Text);this.OF.H(AHh);this.OF.Aj(true);this.
OF.R(AWB);this.OF.A4(0x14);this.OF.L(A.jb.Text);this.Pj.H(AHg);this.Pj.Aj(true);
this.Pj.R(A.aaR(A.acf.C3)+A.aaR(A.acf.Colon));this.Pj.A4(0x11);this.Pj.L(A.jb.Text
);this.C3.H(AHh);this.C3.Aj(true);this.C3.R(AxE);this.C3.A4(0x14);this.C3.L(A.jb.
Text);this.Go.H(AxF);this.Go.Aj(true);this.Go.R(AWC);this.Go.A4(0x14);this.Go.L(
A.jb.Text);this.Ss.H(AWD);this.Ss.Aj(true);this.Ss.R(A.aaR(A.acf.N0)+A.aaR(A.acf.
Colon));this.Ss.A4(0x11);this.Ss.L(A.jb.Text);this.N0.H(AHi);this.N0.Aj(true);this.
N0.R(AHj);this.N0.A4(0x14);this.N0.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Z,0);this.J(this.R_,0);this.J(this.GD,0);this.J(this.PE,0);this.J(this.OF,0
);this.J(this.Pj,0);this.J(this.C3,0);this.J(this.Go,0);this.J(this.Ss,0);this.J(
this.N0,0);this.R_.S(A.aaL(A.fl.Ak));this.R_.A8(A.aaL(A.fl.By));this.GD.S(A.aaL(
A.fl.Ak));this.GD.A8(A.aaL(A.fl.By));this.PE.S(A.aaL(A.fl.Ak));this.PE.A8(A.aaL(
A.fl.By));this.OF.S(A.aaL(A.fl.Ak));this.OF.A8(A.aaL(A.fl.By));this.Pj.S(A.aaL(A.
fl.Ak));this.Pj.A8(A.aaL(A.fl.By));this.C3.S(A.aaL(A.fl.Ak));this.C3.A8(A.aaL(A.
fl.By));this.Go.S(A.aaL(A.fl.Ak));this.Go.A8(A.aaL(A.fl.By));this.Ss.S(A.aaL(A.fl.
Ak));this.Ss.A8(A.aaL(A.fl.By));this.N0.S(A.aaL(A.fl.Ak));this.N0.A8(A.aaL(A.fl.
By));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.Ao1._Done();this.Background._Done();this.Z._Done();this.R_._Done();
this.GD._Done();this.PE._Done();this.OF._Done();this.Pj._Done();this.C3._Done();
this.Go._Done();this.Ss._Done();this.N0._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Ao1._ReInit();this.Background._ReInit();this.Z._ReInit();this.R_.
_ReInit();this.GD._ReInit();this.PE._ReInit();this.OF._ReInit();this.Pj._ReInit(
);this.C3._ReInit();this.Go._ReInit();this.Ss._ReInit();this.N0._ReInit();this.CountryToString.
_ReInit();this.R_.R(A.aaR(A.acf.GD)+A.aaR(A.acf.Colon));this.PE.R(A.aaR(A.acf.A95
)+A.aaR(A.acf.Colon));this.Pj.R(A.aaR(A.acf.C3)+A.aaR(A.acf.Colon));this.Ss.R(A.
aaR(A.acf.N0)+A.aaR(A.acf.Colon));this.R_.S(A.aaL(A.fl.Ak));this.R_.A8(A.aaL(A.fl.
By));this.GD.S(A.aaL(A.fl.Ak));this.GD.A8(A.aaL(A.fl.By));this.PE.S(A.aaL(A.fl.Ak
));this.PE.A8(A.aaL(A.fl.By));this.OF.S(A.aaL(A.fl.Ak));this.OF.A8(A.aaL(A.fl.By
));this.Pj.S(A.aaL(A.fl.Ak));this.Pj.A8(A.aaL(A.fl.By));this.C3.S(A.aaL(A.fl.Ak)
);this.C3.A8(A.aaL(A.fl.By));this.Go.S(A.aaL(A.fl.Ak));this.Go.A8(A.aaL(A.fl.By)
);this.Ss.S(A.aaL(A.fl.Ak));this.Ss.A8(A.aaL(A.fl.By));this.N0.S(A.aaL(A.fl.Ak));
this.N0.A8(A.aaL(A.fl.By));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ao1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QI={DZ:null,A_g:A.jV,Ai:function(Ae){C.Fc.Ai.call(
this,Ae);if(this.Mi.Fd())this.DZ.C1(A.jb.AR);else this.DZ.C1(this.Background.AQ);
this.DZ.Akb(this.GZ.AQ);},Y9:function(E){if(this.A_g===E)return;this.A_g=E;this.
DZ.Text.R(E);this.DZ.Y(E!==A.jV);},_Init:function(aArg){C.Fc._Init.call(this,aArg
);C.DZ._Init.call(this.DZ={I:this},0);this.__proto__=C.QI;this.Background.H(AWE);
this.Mi.H(WI);this.Oy.H(AxG);this.QO.H(AxG);this.DZ.H(AWF);this.DZ.Y(false);this.
J(this.DZ,0);this.GZ.S(A.aaL(A.fl.Ah));this.GZ.A8(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(
A.fl.By));},_Done:function(){this.__proto__=C.Fc;this.DZ._Done();C.Fc._Done.call(
this);},_ReInit:function(){C.Fc._ReInit.call(this);this.DZ._ReInit();this.GZ.S(A.
aaL(A.fl.Ah));this.GZ.A8(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.Fc._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.DZ={B5:null,Aef:null,An:null,Text:null
,DE:A.jV,Amq:0,MX:0,I1:0,A4M:0x14,Init:function(aArg){},U:function(E){if(this.DE===
E)return;this.DE=E;this.Text.R(E);},BAT:function(G){this.An.H(this.Text.M);this.
Aef.H(this.Text.M);},Akb:function(E){if(this.Amq===E)return;this.Amq=E;this.Aef.
L(E);this.Text.L(E);},C1:function(E){if(this.MX===E)return;this.MX=E;this.An.L(E
);},S:function(E){if(this.B5===E)return;this.B5=E;this.Text.S(E);},HH:function(E
){if(this.I1===E)return;this.I1=E;this.Text.HH(E);},Bkx:function(E){if(this.A4M===
E)return;this.A4M=E;this.Text.A4(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.NI._Init.call(this.Aef={I:this},0);A.acg.NI._Init.call(this.An={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.DZ;this.H(AHk);
this.Aef.AY(0x8);this.Aef.L(A.jb.Text);this.An.AY(0x8);this.An.L(A.jb.C0);this.Text.
AY(0xD);this.Text.H(AHk);this.Text.HH(5);this.Text.I0(true);this.Text.A4(0x14);this.
Text.L(A.jb.Text);this.J(this.Aef,0);this.J(this.An,0);this.J(this.Text,0);this.
Aef.Ax(A.aaL(A.ach.APg));this.An.Ax(A.aaL(A.ach.APf));this.Text.QT([this,this.BAT
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Aef._Done();this.An._Done();this.Text._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aef._ReInit();this.An.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.TU={DP:null,Z:null,Aw:null,Dw:function(G){var B;C.AB.Dw.call(this,G);if(!!this.
AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},Cw:function(
G){C.AB.Cw.call(this,G);this.AKG(this);A._GetAutoObject(A.Device.Device).Ap.Bi(null
);A._GetAutoObject(A.Device.Device).Br.Bi(null);A._GetAutoObject(A.Device.Helper
).Akr();A._GetAutoObject(A.Device.Helper).ArR();},Ia:function(G){},Acz:function(
s){this.Ia(s);},A2x:function(G){A._GetAutoObject(C.AX).Fl();},E9:function(G){var
B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.
Mq(-this.Z.Bq[1]);},AKG:function(G){},BEW:function(s){this.AKG(s);},G8:function(
G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.
acg.AJ._Init.call(this.DP={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw.
_Init.call(this.Aw={I:this},0);this.__proto__=C.TU;this.Background.L(A.jb.C0);this.
N.Y(true);this.N.B0(A.jV);this.Dk(C.Aqu);this.DP.AY(0x3F);this.DP.H(E4);this.DP.
L(A.jb.CF);this.Z.H(E4);this.Z.Kf(9);this.Aw.H(IK);this.J(this.DP,0);this.J(this.
Z,0);this.J(this.Aw,0);this.N.Cv=[this,this.A2x];this.N.CS(A.aaL(A.ach.EU));this.
Z.Ej=[this,this.G8];},_Done:function(){this.__proto__=C.AB;this.DP._Done();this.
Z._Done();this.Aw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DP._ReInit();this.Z._ReInit();this.Aw._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ListsScreen"};C.AUU={Wd:function(G){this.Af9();this.
IR(A.aaR(A.acf.AUu),[this,this.ASV],7);this.IR(A.aaR(A.acf.ArO),[this,this.BkA],
6);this.IR(A.aaR(A.acf.AFz),[this,this.ASH],3);this.IR(A.aaR(A.acf.AnC),[this,this.
Awd],2);this.IR(A.aaR(A.acf.Xv),[this,this.AD9],1);this.IR(A.aaR(A.acf.At0),[this
,this.AD3],0);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.
Al0)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dp(6);},Dw:function(G
){},Aa4:function(){return C.AMw;},Aa5:function(){return C.AO0;},QY:function(G){var
Ba=A._GetAutoObject(A.Device.Helper).Mj();var AAM=A._NewObject(A.Device.BoolFilterCriterion
,0);AAM.Initialize(12,0,true,true);Ba.CX(AAM);A._GetAutoObject(A.Device.Device).
Ap.Bi(Ba);},HJ:function(G){C.GN.HJ.call(this,G);if(this.AjW()===false){this.N.Cn(
A.aaL(A.ach.ArO));this.N.Ch=[this,this.A5n];this.N.FC(A.jV);}this.N.OJ(false);this.
N.OK(false);},AfU:function(){A._GetAutoObject(C.AX).BS(42);},AfT:function(){A._GetAutoObject(
C.AX).BS(45);},_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=C.
AUU;var B;this.Dk(C.AOW);this.Du(A.aaR(A.acf.A7b));this.Av9([B=A._GetAutoObject(
A.Device.Device),B.A8A,B.Bax]);},_ReInit:function(){C.GN._ReInit.call(this);this.
Du(A.aaR(A.acf.A7b));},_className:"Application::WatchListScreen"};C.ALD={Dw:function(
G){var B;var Jr=(A.Core.BJ.isPrototypeOf(G)?G:null);if(((Jr.CK===4)||(Jr.CK===5)
)===false){C.Axg.Dw.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState
!==1)return;var BbU=A._GetAutoObject(A.Device.Device).KR;var S6;if(Jr.CK===5)S6=
5;else S6=4;var AAt=A._GetAutoObject(A.acj.DN).Bcr(BbU,S6);var GK=(((BbU+((AAt/2
)|0))/AAt)|0)*AAt;if(Jr.CK===4)GK+=AAt;else if(Jr.CK===5)GK-=AAt;if(GK>999900)GK=
999900;if(GK<100)GK=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GK);
},Ar5:function(G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.
pe([B=this.OV,B.Cv],this);else A._GetAutoObject(C.AX).Fl();},Wr:function(G){if(A.
_GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device
).Ar7();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(this.A_w()===
false){this.H0.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KR);this.H0.Ck(
A._GetAutoObject(A.Device.Device).Br);A._GetAutoObject(C.AX).Fl();}}else if(A._GetAutoObject(
A.Device.Device).MeasureState===3){this.H0.OnSetBodyWeight(A._GetAutoObject(A.Device.
Device).KR);this.H0.Ck(A._GetAutoObject(A.Device.Device).Br);A._GetAutoObject(C.
AX).Fl();}},Aky:function(G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.pe([B=this.OV,B.Cc],this);},Bcq:function(){var AKT=A._GetAutoObject(A.Device.
Helper).W.Ahy(1);if(AKT>=100000)AKT=(Math.round(AKT/1000)|0)*1000;return AKT;},_Init:
function(aArg){C.Axg._Init.call(this,aArg);this.__proto__=C.ALD;},_className:"Application::AnimalActionWeighingScreen"
};C.AUF={VO:null,Yq:null,Q4:null,Aeq:null,_Init:function(aArg){C.Cq._Init.call(this
,aArg);C.BX._Init.call(this.VO={I:this},0);C.BX._Init.call(this.Yq={I:this},0);C.
Q4._Init.call(this.Q4={I:this},0);C.Aeq._Init.call(this.Aeq={I:this},0);this.__proto__=
C.AUF;var B;this.JJ(A.aaR(A.acf.AGr));this.VO.H(AhF);this.VO.Aj(true);this.VO.U(
A.aaR(A.acf.A_V));this.VO.Bg(true);this.VO.Bx(0);this.Yq.H(WV);this.Yq.Aj(true);
this.Yq.U(A.aaR(A.acf.A_U));this.Yq.Bg(false);this.J(this.VO,0);this.J(this.Yq,0
);this.VO.At([B=this.Q4,B.B9,B.B_]);this.VO.CG(this.Q4);this.Yq.At([B=this.Aeq,B.
B9,B.B_]);this.Yq.CG(this.Aeq);},_Done:function(){this.__proto__=C.Cq;this.VO._Done(
);this.Yq._Done();this.Q4._Done();this.Aeq._Done();C.Cq._Done.call(this);},_ReInit:
function(){C.Cq._ReInit.call(this);this.VO._ReInit();this.Yq._ReInit();this.Q4._ReInit(
);this.Aeq._ReInit();this.JJ(A.aaR(A.acf.AGr));this.VO.U(A.aaR(A.acf.A_V));this.
Yq.U(A.aaR(A.acf.A_U));},_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.
VO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.Aeq={MassUnitToString:null
,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Av$(E);}
,Init:function(aArg){var B;A.zX([this,this.Bc4],[B=A._GetAutoObject(A.Device.Device
),B.ARP,B.AZm],0);A.pe([this,this.Bc4],this);},Bc4:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.Aeq;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Axg={H0:null,Aja:null,MassUnit:null,
KR:null,Vd:null,Ann:null,Acj:null,Zz:null,OV:null,Yg:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DN).AfH());A.zX([this,this.AJY],[B=A._GetAutoObject(
A.Device.Device),B.ADV,B.AIc],0);A.zX([this,this.BzH],[B=A._GetAutoObject(A.Device.
Device),B.AD0,B.AIg],0);A.zX([this,this.BzI],[B=this.OV,B.Aq2,B.Jn],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.Aw$();this.Ack();},IP:function(G){this.Wr(this);}
,Cw:function(G){C.AB.Cw.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).Ar7();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Br.Ld())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),
0,null);this.H0.Gf();this.H0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AF8();else{var BA8=this.Bcq();this.Zz.Y(true);this.Acj.Y(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BA8);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},EV:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).Ar7();else A._GetAutoObject(A.Device.Device).Ahp(
);},Aw$:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.BfD();break;case 3:{this.BfD();this.Zz.Y(false);this.Acj.Y(false
);if(this.A_w()){this.Vd.Y(false);this.KR.H(A.abO(this.KR.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.OV.Ar(true);this.OV.Y(true);this.A9(this.OV);}}break;
case 4:this.KR.R(A.aaR(A.act.Aj0));break;default:A.ab5("%s%e",AHl,A._GetAutoObject(
A.Device.Device).MeasureState);}},Ack:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CS(A.aaL(A.ach.Aeb));this.N.Cn(null);
this.Yg.Y(false);this.N.C2(A.aaL(A.ach.AmE));this.N.B0(A.jV);}break;case 3:{if(this.
OV.AV<=1){this.N.CS(null);this.N.Cn(null);this.Yg.Y(false);this.N.C2(null);}else{
this.N.CS(A.aaL(A.ach.AmC));this.N.Cn(A.aaL(A.ach.Aec));this.Yg.Y(true);this.N.C2(
null);}this.N.B0(A.aaR(A.acf.Ok));}break;case 4:{this.N.C2(A.aaL(A.ach.Au$));this.
N.Cc=[this,this.Bko];this.N.Cn(null);this.Yg.Y(false);this.N.B0(A.jV);}break;default:;
}},Ar5:function(G){},Bu6:function(s){this.Ar5(s);},Wr:function(G){},AZD:function(
s){this.Wr(s);},Bko:function(G){this.Cw(this);},BzH:function(G){this.Am();},AJY:
function(G){this.Am();},A_w:function(){var AtR=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AtR>0)&&!A._GetAutoObject(A.Device.Helper).Bov(AtR
,this.H0.Timestamp);},Aky:function(G){},AZC:function(s){this.Aky(s);},BzI:function(
G){this.Am();},BfD:function(){this.KR.R(A._GetAutoObject(A.Device.Converter).AkL(
A._GetAutoObject(A.Device.Device).KR));},Bcq:function(){return A._GetAutoObject(
A.Device.Helper).W.Ahy(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AJ._Init.call(this.Aja={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KR={I:this},0);A.acg.Text._Init.call(this.Vd={I:this
},0);C.Aw_._Init.call(this.Ann={I:this},0);A.acg.Ad3._Init.call(this.Acj={I:this
},0);A.acg.Ad3._Init.call(this.Zz={I:this},0);C.AUZ._Init.call(this.OV={I:this},
0);A.acg.An._Init.call(this.Yg={I:this},0);this.__proto__=C.Axg;this.Background.
L(A.jb.CF);this.N.Y(true);this.Dk(C.IA);this.Aja.AY(0x3F);this.Aja.H(AxH);this.Aja.
L(A.jb.CF);this.MassUnit.H(AWG);this.MassUnit.A4(0x9);this.MassUnit.R(A.aaR(A.acf.
Azo));this.MassUnit.L(A.jb.Text);this.KR.H(AWH);this.KR.A4(0x14);this.KR.R(A.aaR(
A.act.Aj0));this.KR.L(A.jb.Text);this.Vd.H(AWI);this.Vd.R(A.aaR(A.acf.A_6));this.
Vd.L(A.jb.Text);this.Vd.Y(true);this.Ann.H(AWJ);this.Acj.H(AWK);this.Acj.L(A.jb.
AdO);this.Acj.Y(false);this.Zz.H(AWL);this.Zz.L(A.jb.AdO);this.Zz.Blk(true);this.
Zz.Y(false);this.OV.AY(0x3F);this.OV.H(AxH);this.OV.Ar(false);this.OV.Y(false);this.
Yg.H(AWM);this.Yg.L(A.jb.Bj);this.J(this.Aja,0);this.J(this.MassUnit,0);this.J(this.
KR,0);this.J(this.Vd,0);this.J(this.Acj,0);this.J(this.Zz,0);this.J(this.OV,0);this.
J(this.Yg,0);this.N.Cv=[this,this.Bu6];this.N.Ch=[this,this.AZC];this.N.Cc=[this
,this.AZD];this.MassUnit.S(A.aaL(A.fl.EB));this.KR.S(A.aaL(A.fl.Ad6));this.Vd.S(
A.aaL(A.fl.EB));this.Acj.Y8(this.Ann);this.Zz.Y8(this.Ann);this.H0=A._NewObject(
A.Device.Rating,0);this.OV.LU(A._GetAutoObject(A.Device.Helper).W);this.OV.Akg(this.
H0);this.Yg.Ax(A.aaL(A.ach.AP7));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aja._Done();this.MassUnit._Done();this.KR._Done();this.Vd._Done();this.
Ann._Done();this.Acj._Done();this.Zz._Done();this.OV._Done();this.Yg._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aja._ReInit();
this.MassUnit._ReInit();this.KR._ReInit();this.Vd._ReInit();this.Ann._ReInit();this.
Acj._ReInit();this.Zz._ReInit();this.OV._ReInit();this.Yg._ReInit();this.MassUnit.
R(A.aaR(A.acf.Azo));this.KR.R(A.aaR(A.act.Aj0));this.Vd.R(A.aaR(A.acf.A_6));this.
MassUnit.S(A.aaL(A.fl.EB));this.KR.S(A.aaL(A.fl.Ad6));this.Vd.S(A.aaL(A.fl.EB));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H0)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ann)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AU3={Fu:null
,OG:null,M7:null,C6:null,LQ:null,TR:null,Init:function(aArg){var B;A.zX([this,this.
Gw],[B=this.Fu,B.B9,B.B_],0);A.pe([this,this.Gw],this);},Cw:function(G){C.Cq.Cw.
call(this,G);A.pe([this,this.Gw],this);},Bjd:function(G){var F;this.LQ.BR.L(this.
LQ.V.AQ);if(!!this.LQ.Q)this.LQ.BR.R((A._GetAutoObject(A.Device.Converter).SR((F=
this.LQ.Q,F[1].call(F[0])),2,true)+CL)+A._GetAutoObject(A.acj.DN).Z_());},Gw:function(
G){var AIS=true;if(this.Fu.Q===1)AIS=false;this.C6.Aj(AIS);this.C6.Ar(AIS);this.
C6.Y(AIS);A._GetAutoObject(A.Device.Helper).AMO(this.Z);},_Init:function(aArg){C.
Cq._Init.call(this,aArg);C.ALZ._Init.call(this.Fu={I:this},0);C.AGC._Init.call(this.
OG={I:this},0);C.ATY._Init.call(this.M7={I:this},0);C.Akw._Init.call(this.C6={I:
this},0);C.I2._Init.call(this.LQ={I:this},0);C.BX._Init.call(this.TR={I:this},0);
this.__proto__=C.AU3;var B;this.JJ(A.aaR(A.acf.Settings));this.G$.R(A.aaR(A.acf.
Asg));this.Fu.At(A._GetAutoObject(A.Device.Device).AnimalType);this.OG.At(A._GetAutoObject(
A.Device.Device).OG);this.M7.H(AWN);this.M7.Aj(true);this.C6.H(Asr);this.C6.Aj(true
);this.C6.U(A.aaR(A.acf.KC));this.C6.Bg(true);this.C6.Gn(1000);this.C6.E1(99000);
this.LQ.H(Ass);this.LQ.Aj(true);this.LQ.U(A.aaR(A.acf.A4j));this.LQ.Gn(50);this.
LQ.E1(2000);this.LQ.ASn(A._GetAutoObject(A.acj.DN).Ay8());this.TR.H(AkS);this.TR.
Aj(true);this.TR.U(A.aaR(A.acf.A6U));this.TR.Gn(-1);this.TR.E1(1);this.Kn(this.Z
,-1);this.Kn(this.Aw,-1);this.J(this.M7,0);this.J(this.C6,0);this.J(this.LQ,0);this.
J(this.TR,0);this.M7.Aex([B=this.M7,B.FJ]);this.M7.Gg([this,this.D3,this.GG]);this.
M7.Akc(A.aaL(A.ach.Edit));this.M7.LT([B=this.M7,B.Ax$]);this.M7.LV(A.aaL(A.ach.Anr
));this.M7.At([B=this.Fu,B.B9,B.B_]);this.M7.CG(this.Fu);this.M7.A9s([B=this.Fu,
B.AR7,B.AZA]);this.M7.A9r([B=this.Fu,B.AR6,B.AZz]);this.C6.Gg([this,this.D3,this.
GG]);this.C6.LT([B=this.M7,B.Ax$]);this.C6.LV(A.aaL(A.ach.Anr));this.C6.At([B=this.
Fu,B.A7L,B.ASb]);this.LQ.Gg([this,this.D3,this.GG]);this.LQ.LT([B=this.M7,B.Ax$]
);this.LQ.LV(A.aaL(A.ach.Anr));this.LQ.At([B=this.Fu,B.A7K,B.AR$]);this.LQ.A9E([
this,this.Bjd]);this.TR.Gg([this,this.D3,this.GG]);this.TR.At([B=this.OG,B.B9,B.
B_]);this.TR.CG(this.OG);this.Init(aArg);},_Done:function(){this.__proto__=C.Cq;
this.Fu._Done();this.OG._Done();this.M7._Done();this.C6._Done();this.LQ._Done();
this.TR._Done();C.Cq._Done.call(this);},_ReInit:function(){C.Cq._ReInit.call(this
);this.Fu._ReInit();this.OG._ReInit();this.M7._ReInit();this.C6._ReInit();this.LQ.
_ReInit();this.TR._ReInit();this.JJ(A.aaR(A.acf.Settings));this.G$.R(A.aaR(A.acf.
Asg));this.C6.U(A.aaR(A.acf.KC));this.LQ.U(A.aaR(A.acf.A4j));this.TR.U(A.aaR(A.acf.
A6U));},_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.Fu)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.ATY={YC:null,Init:
function(aArg){var B;A.zX([this,this.Afl],[B=A._GetAutoObject(A.Device.Device),B.
ARP,B.AZm],0);A.pe([this,this.Afl],this);},A21:function(G){A._GetAutoObject(A.Device.
Device).A6(37,true,A.jV,0,[this,this.BaK]);},A0S:function(G){var F;if(this.A5===
1){var BO=this.D0;this.D0=this.D0-A._GetAutoObject(A.acj.DN).Ay8();if(this.D0<this.
Alq)this.D0=this.Alq;if(this.DO!==BO){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.
D0));A.abo(this.JL,0);}}if(this.A5===2){var BO=this.DO;this.DO=this.DO-A._GetAutoObject(
A.acj.DN).Ay8();if(this.DO<this.D0)this.DO=this.D0;if(this.DO!==BO){if(!!this.JK
)(F=this.JK,F[2].call(F[0],this.DO));A.abo(this.JK,0);}}this.DD(this);this.Am();
},A1r:function(G){var F;if(this.A5===1){var BO=this.D0;this.D0=this.D0+A._GetAutoObject(
A.acj.DN).Ay8();if(this.D0>this.DO)this.D0=this.DO;if(this.D0!==BO){if(!!this.JL
)(F=this.JL,F[2].call(F[0],this.D0));A.abo(this.JL,0);}}if(this.A5===2){var BO=this.
DO;this.DO=this.DO+A._GetAutoObject(A.acj.DN).Ay8();if(this.DO>this.All)this.DO=
this.All;if(this.DO!==BO){if(!!this.JK)(F=this.JK,F[2].call(F[0],this.DO));A.abo(
this.JK,0);}}this.DD(this);this.Am();},Gw:function(G){this.PC.R(AHm+A._GetAutoObject(
A.Device.Converter).SR(this.D0,2,true));this.PB.R(AHm+A._GetAutoObject(A.Device.
Converter).SR(this.DO,2,true));this.Si.R(A._GetAutoObject(A.acj.DN).Z_());this.YC.
R(this.Si.String);},A2A:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).ArT(this
);},A1k:function(AsQ){if(AsQ===1)return this.PC;else if(AsQ===2)return this.PB;else
return null;},_Init:function(aArg){C.Ab5._Init.call(this,aArg);A.acg.Text._Init.
call(this.YC={I:this},0);this.__proto__=C.ATY;this.U(A.aaR(A.acf.ABE));this.All=
2000;this.Alq=20;this.Background.H(JP);this.V.H(BC);this.V.R(A.aaR(A.acf.ABE)+A.
aaR(A.acf.Colon));this.V.A4(0x12);this.Akp.H(AWO);this.Akq.H(AWP);this.QU.H(AWQ);
this.Qt.H(AWR);this.PB.H(AWS);this.PC.H(AHn);this.Si.H(AWT);this.YC.H(AWU);this.
YC.I0(false);this.YC.A4(0x12);this.YC.L(0xFF000000);this.Kn(this.HX,-8);this.J(this.
YC,0);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.YC.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Ab5;this.YC._Done();C.Ab5.
_Done.call(this);},_ReInit:function(){C.Ab5._ReInit.call(this);this.YC._ReInit();
this.U(A.aaR(A.acf.ABE));this.V.R(A.aaR(A.acf.ABE)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.YC.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Ab5._Mark.call(this,D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.AAR={M:Q9,A6u:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6u();},_Init:function(
aArg){A.Graphics.Hp._Init.call(this,aArg);this.__proto__=C.AAR;},_className:"Application::AbstractPath"
};C.Ai1={DI:null,DP:null,Q7:null,Adu:null,N6:null,Adt:null,AtZ:1,A3S:0,BbC:false
,Ay4:true,CT:function(){this.Bfz(this);},Init:function(aArg){var B;this.A9(this.
Adu);A.zX([this,this.Bfz],[B=this.Adu,B.A7R,B.Bag],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.Adt.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BgS(this.AtZ+this.A3S)));if(this.AtZ===1)this.N6.R(A.aaR(A.acf.Auk));else this.
N6.R(A.aaR(A.acf.Bgt));},Cw:function(G){if(this.Ay4)this.Ay4=false;else if(this.
DI.BbL()===false)A.pe([this,this.A19],this);else if(this.DI.Azg())this.DI.AcO();
A.zV([this,this.AfM],A._GetAutoObject(A.Device.Device).Ap,0);},EV:function(G){A.
z9([this,this.AfM],A._GetAutoObject(A.Device.Device).Ap,0);},A19:function(G){this.
BbC=true;A._GetAutoObject(C.AX).Fl();},Bfz:function(G){var B;var Bca=(C.V1.isPrototypeOf(
B=this.Adu.AR)?B:null);if(!!Bca){var Ayn=A._NewObject(A.Device.ActionToString,0);
this.Q7.R(Ayn.Lp(Bca.Action));}},Ia:function(G){var Cs=(C.V1.isPrototypeOf(G)?G:
null);if(!Cs)return;this.DI.Qa(Cs.Action);this.Bkr(this.AtZ+1);},Bzc:function(G){
if(A._GetAutoObject(C.Pc).NO(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},By3:function(G){
A._GetAutoObject(C.AX).BS(3);},Bkr:function(E){if(this.AtZ===E)return;this.AtZ=E;
this.Am();},AfM:function(G){if((this.BbC===false)&&(this.DI.BbL()===false))A.pe([
this,this.A19],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ.
_Init.call(this.DP={I:this},0);C.CO._Init.call(this.Q7={I:this},0);C.AQT._Init.call(
this.Adu={I:this},0);C.CO._Init.call(this.N6={I:this},0);A.acg.Text._Init.call(this.
Adt={I:this},0);this.__proto__=C.Ai1;this.Background.L(A.jb.C0);this.N.H(WU);this.
N.Y(true);this.Dk(C.IA);this.DP.AY(0x3F);this.DP.H(E4);this.DP.L(A.jb.CF);this.Q7.
H(AWV);this.Q7.L(A.jb.Text);this.Adu.H(AWW);this.N6.H(AWX);this.N6.R(A.aaR(A.acf.
Auk));this.N6.L(A.jb.Text);this.Adt.H(AWY);this.Adt.R(AWZ);this.Adt.L(A.jb.Text);
this.J(this.DP,0);this.J(this.Q7,0);this.J(this.Adu,0);this.J(this.N6,0);this.J(
this.Adt,0);this.N.Cv=[this,this.By3];this.N.Ch=[this,this.Bzc];this.N.Cc=[this,
this.A19];this.N.CS(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.Abc));this.Q7.S(A.aaL(
A.fl.EB));this.Q7.A8(A.aaL(A.fl.Ah));this.Q7.CB(A.aaL(A.fl.Ak));this.Adu.A2y=[this
,this.Ia];this.N6.S(A.aaL(A.fl.EB));this.N6.A8(A.aaL(A.fl.Ah));this.N6.CB(A.aaL(
A.fl.Ak));this.Adt.S(A.aaL(A.fl.Hk));this.DI=A._GetAutoObject(C.DI);this.Init(aArg
);},_Done:function(){this.__proto__=C.AB;this.DP._Done();this.Q7._Done();this.Adu.
_Done();this.N6._Done();this.Adt._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DP._ReInit();this.Q7._ReInit();this.Adu._ReInit();
this.N6._ReInit();this.Adt._ReInit();this.N6.R(A.aaR(A.acf.Auk));this.Q7.S(A.aaL(
A.fl.EB));this.Q7.A8(A.aaL(A.fl.Ah));this.Q7.CB(A.aaL(A.fl.Ak));this.N6.S(A.aaL(
A.fl.EB));this.N6.A8(A.aaL(A.fl.Ah));this.N6.CB(A.aaL(A.fl.Ak));this.CT();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Adu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adt)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AQT={H7:null,A2y:null,Cl:null,Z:null,Aw:
null,A3d:0,Init:function(aArg){A.zV([this,this.AAH],this.H7,0);A.zV([this,this.Bfw
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AtW],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.AAH],this);},A9:function(E){var A14=this.AR;
A.Core.O.A9.call(this,E);if(this.AR!==A14)A.abo([this,this.A7R,this.Bag],0);},Dw:
function(G){var B;var E7=0;var X=this.AR;switch(this.Cl.CK){case 6:E7=2;break;case
7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.R5(X,E7,0x415);
if((E7===5)&&!X){var AKx=this.AR;while(!X){AKx=this.R5(AKx,2,0x415);if(!!AKx)X=this.
R5(AKx,E7,0x415);else break;}}if(!!X)this.A9(X);var GL=(C.V1.isPrototypeOf(B=this.
AR)?B:null);if(!!GL)this.A3d=(C.V1.isPrototypeOf(B=this.AR)?B:null).Action;else this.
A3d=0;A.pe([this,this.ML],this);},A0L:function(Ev){var EI=A._GetAutoObject(C.DI).
BbT(Ev,this.A2y);this.J(EI,0);},AoC:function(){var B;var X=this.Z.Ag;while(!!X&&
!((X.T&0x200)===0x200)){var Adp=X;X=X.Ag;if(((Adp.T&0x400)===0x400))this.HI(Adp);
}},AAH:function(G){this.AoC();var P;var CA=A._GetAutoObject(C.Pc).NJ();for(P=0;P<
CA;P=P+1){var Z1=A._GetAutoObject(C.Pc).Oz(P);this.A0L(Z1);}A.pe([this,this.Bfw]
,this);A.pe([this,this.BoT],this);A.pe([this,this.AtW],this);},BoT:function(G){var
B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var
Aa=(C.V1.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ag;}},AtW:function(G){var B;var X=this.Z.Ag;while(!!
X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var Aa=(C.V1.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ASQ(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ASQ(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ASQ(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ag;}},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((
B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},Bfw:function(G){var B;var X=this.
Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var Aa=(C.V1.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pc).NO(Aa.Action)&&A._GetAutoObject(C.
DI).A3R(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Y(true);if(
this.A3d===Aa.Action)this.A9(Aa);}else{Aa.Ar(false);Aa.Y(false);}}}X=X.Ag;}A.pe([
this,this.ML],this);},ML:function(G){var B;this.Z.Vb(null,null);if(!!this.AR&&((
this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},G8:function(G){A.pe([
this,this.E9],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BJ._Init.call(this.Cl={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw._Init.
call(this.Aw={I:this},0);this.__proto__=C.AQT;this.H(AW0);this.Cl.Filter=147;this.
Z.AY(0xB);this.Z.H(AW1);this.Z.Kf(9);this.Aw.AY(0xA);this.Aw.H(AW2);this.J(this.
Z,0);this.J(this.Aw,0);this.Cl.BK=[this,this.Dw];this.Cl.DS=[this,this.Dw];this.
Z.Ej=[this,this.G8];this.H7=A._GetAutoObject(C.Pc);this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Cl._Done();this.Z._Done();this.Aw._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Cl._ReInit(
);this.Z._ReInit();this.Aw._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2y)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ManualActionScreenGrid"};C.Ff={Ec:null,AJ:null,Text:
null,An:null,_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Ec._Init.
call(this.Ec={I:this},0);A.acg.AJ._Init.call(this.AJ={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.An._Init.call(this.An={I:this},0);this.__proto__=
C.Ff;this.N.Ar(false);this.Ec.H(BC);this.Ec.Ar(false);this.AJ.H(E4);this.AJ.L(A.
jb.AdO);this.Text.H(BC);this.Text.R(AW3);this.Text.L(0xFF000000);this.An.H(Q9);this.
An.L(A.jb.Text);this.J(this.Ec,0);this.J(this.AJ,0);this.J(this.Text,0);this.J(this.
An,0);this.N.Cn(A.aaL(A.ach.Abc));this.Text.S(A.aaL(A.fl.Ak));this.An.Ax(A.aaL(A.
ach.ACt));},_Done:function(){this.__proto__=C.OverlayMenu;this.Ec._Done();this.AJ.
_Done();this.Text._Done();this.An._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.Ec._ReInit();this.AJ._ReInit();
this.Text._ReInit();this.An._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"
};C.Xt={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));},IP:function(G){},Ai:function(
Ae){C.BX.Ai.call(this,Ae);var FG=A.jb.AdO;var GJ=A.jb.C0;if(this.Hb){FG=A.jb.Text;
GJ=A.jb.Bj;}if(!this.LB){this.Background.L(A.jb.C0);this.V.L(A.jb.CF);}else if(this.
Qg){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(this.Ky){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.L(FG);this.V.L(GJ);}this.Hn.L(
A.jb.C0);this.HX.L(A.jb.C0);},Hc:function(G){var B;var FW=this.Ds.GT;var Cx=(C.CO.
isPrototypeOf(B=this.Ds.Ce)?B:null);if(!Cx)return;Cx.S(A.aaL(A.fl.Ak));Cx.A8(A.aaL(
A.fl.By));Cx.L(this.V.AQ);if(!!this.AC)Cx.R(this.AC.F$(FW));else Cx.R(WT);Cx.H(A.
abK(Cx.M,[this.Ds.VQ,(B=this.Ds.M)[3]-B[1]]));},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.Xt;this.Ds.AEC(170);this.Ds.NU(C.CO);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ai2={C5:null,Init:function(
aArg){this.V.Text.A4(0x11);this.V.Text.HH(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Ci.Ai.call(this,Ae);var FG=A.jb.AdO;var GJ=A.jb.C0;if(this.Hb){FG=A.jb.Text;
GJ=A.jb.Bj;}if(!this.LB){this.Background.L(A.jb.C0);this.V.L(A.jb.CF);}else if(this.
Qg){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(this.Ky){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.L(FG);this.V.L(GJ);}},_Init:function(
aArg){C.Ci._Init.call(this,aArg);A.acg.An._Init.call(this.C5={I:this},0);this.__proto__=
C.Ai2;this.C5.H(AW4);this.C5.Cu(1);this.J(this.C5,0);this.C5.Ax(A.aaL(A.ach.Al9)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ci;this.C5._Done();C.Ci._Done.
call(this);},_ReInit:function(){C.Ci._ReInit.call(this);this.C5._ReInit();},_Mark:
function(D){var B;C.Ci._Mark.call(this,D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALi={Z:null,Rw:null,Tg:null
,Th:null,Ti:null,Ads:null,Xs:null,U8:null,U9:null,Aat:null,Aw:null,Init:function(
aArg){this.A9(this.Rw);},Dw:function(G){C.Ff.Dw.call(this,G);this.ML(this);},IP:
function(G){this.BeU(this);},KK:function(){if(!this.Bw){this.Bw=A._NewObject(C.N
,0);this.Bw.Cv=[this,this.BeU];this.Bw.Ch=null;this.Bw.Cc=null;this.Bw.B0(A.jV);
this.Bw.Cn(null);this.Bw.CS(A.aaL(A.ach.VE));}return this.Bw;},AAk:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.Xs.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.Xs.Q))A._GetAutoObject(C.AutoActions).J(this.Xs.Q);if(!!this.U8.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.U8.Q))A._GetAutoObject(C.AutoActions
).J(this.U8.Q);if(!!this.U9.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.U9.
Q))A._GetAutoObject(C.AutoActions).J(this.U9.Q);if(!!this.Aat.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aat.Q))A._GetAutoObject(C.AutoActions).J(this.Aat.Q
);A._GetAutoObject(C.AutoActions).Ck();},BeU:function(G){if(this.Byl()===true){this.
AAk();this.Xh(this);}else A._GetAutoObject(A.Device.Device).A6(27,true,A.jV,0,null
);},Byl:function(){return(!!this.Xs.C4(this.Xs.Q)||!!this.U8.C4(this.U8.Q))||!!this.
U9.C4(this.U9.Q);},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.
Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},ML:function(G){var B;this.
Z.Vb(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true
,null,null);},Bzo:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.Xs.AsX(this);this.U8.AsX(this);this.U9.AsX(this);this.Aat.AsX(this);}
,G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Ff._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Xt._Init.call(this.Rw={I:this
},0);C.Xt._Init.call(this.Tg={I:this},0);C.Xt._Init.call(this.Th={I:this},0);C.Xt.
_Init.call(this.Ti={I:this},0);C.Auv._Init.call(this.Ads={I:this},0);C.AutoAction.
_Init.call(this.Xs={I:this},0);C.AutoAction._Init.call(this.U8={I:this},0);C.AutoAction.
_Init.call(this.U9={I:this},0);C.AutoAction._Init.call(this.Aat={I:this},0);C.Aw.
_Init.call(this.Aw={I:this},0);this.__proto__=C.ALi;var B;this.H(Q$);this.Text.R(
A.aaR(A.acf.Tj));this.Z.H(Lq);this.Z.Kf(1);this.Rw.H(AhF);this.Rw.Ar(true);this.
Rw.Aj(true);this.Rw.U(A._GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AHo
));this.Tg.H(WV);this.Tg.Ar(true);this.Tg.Aj(true);this.Tg.U(A._GetAutoObject(A.
Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AHp));this.Th.H(ZS);this.Th.Ar(true);this.
Th.Aj(true);this.Th.U(A._GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AxI
));this.Ti.H(An2);this.Ti.Ar(true);this.Ti.Aj(true);this.Ti.U(A._GetAutoObject(A.
Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AHq));this.Ads.H(An3);this.Ads.Aj(true);this.
Ads.U(A.aaR(A.acf.A_e));this.U8.Index=1;this.U9.Index=2;this.Aat.Index=3;this.Aw.
H(IK);this.J(this.Z,0);this.J(this.Rw,0);this.J(this.Tg,0);this.J(this.Th,0);this.
J(this.Ti,0);this.J(this.Ads,0);this.J(this.Aw,0);this.Z.Ej=[this,this.G8];this.
Rw.Wf(A.aaL(A.fl.Hk));this.Rw.Wg(A.aaL(A.fl.Hk));this.Rw.At([B=this.Xs,B.B9,B.B_
]);this.Rw.CG(this.Xs);this.Tg.Wf(A.aaL(A.fl.Hk));this.Tg.Wg(A.aaL(A.fl.Hk));this.
Tg.At([B=this.U8,B.B9,B.B_]);this.Tg.CG(this.U8);this.Th.Wf(A.aaL(A.fl.Hk));this.
Th.Wg(A.aaL(A.fl.Hk));this.Th.At([B=this.U9,B.B9,B.B_]);this.Th.CG(this.U9);this.
Ti.Wf(A.aaL(A.fl.Hk));this.Ti.Wg(A.aaL(A.fl.Hk));this.Ti.At([B=this.Aat,B.B9,B.B_
]);this.Ti.CG(this.Aat);this.Ads.AN=[this,this.Bzo];this.Init(aArg);},_Done:function(
){this.__proto__=C.Ff;this.Z._Done();this.Rw._Done();this.Tg._Done();this.Th._Done(
);this.Ti._Done();this.Ads._Done();this.Xs._Done();this.U8._Done();this.U9._Done(
);this.Aat._Done();this.Aw._Done();C.Ff._Done.call(this);},_ReInit:function(){C.
Ff._ReInit.call(this);this.Z._ReInit();this.Rw._ReInit();this.Tg._ReInit();this.
Th._ReInit();this.Ti._ReInit();this.Ads._ReInit();this.Xs._ReInit();this.U8._ReInit(
);this.U9._ReInit();this.Aat._ReInit();this.Aw._ReInit();this.Text.R(A.aaR(A.acf.
Tj));this.Rw.U(A._GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AHo));this.
Tg.U(A._GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AHp));this.Th.U(A.
_GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AxI));this.Ti.U(A._GetAutoObject(
A.Device.Helper).Nd(A.aaR(A.acf.Ai0),P0,AHq));this.Ads.U(A.aaR(A.acf.A_e));},_Mark:
function(D){var B;C.Ff._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Rw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Th)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ti)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ads)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xs
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.U9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aat)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"
};C.CN={Co:A.abi(16,0,null),Do:function(){return 16;},C4:function(aIndex){if(aIndex>=
16)return-1;return this.Co.Get(aIndex);},DK:function(A3){var P=0;while(P<16){if(
this.Co.Get(P)===A3)return P;P=P+1;}return-1;},Hl:function(){var P=0;var max=-1;
while(P<16){if(this.Co.Get(P)>max)max=this.Co.Get(P);P=P+1;}return max;},_Init:function(
aArg){C.AC._Init.call(this,aArg);(this.Co=[]).__proto__=C.CN.Co;this.__proto__=C.
CN;},_className:"Application::ArraySelection"};C.AutoAction={H7:null,AcO:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AsX],this.AcO,0);A.pe([this,this.
AsX],this);},Do:function(){return this.H7.NJ();},C4:function(aIndex){if(aIndex>=
this.Do())return-1;return this.H7.Oz(aIndex);},F$:function(aIndex){return this.ActionToString.
BQ(this.C4(aIndex));},DK:function(A3){var P=0;while(P<this.Do()){if(this.H7.Oz(P
)===A3)return P;P=P+1;}return-1;},Hl:function(){var P=0;var max=-1;while(P<this.
Do()){if(this.H7.Oz(P)>max)max=this.H7.Oz(P);P=P+1;}return max;},AsX:function(G){
this.Q=this.AcO.Oz(this.Index);A.abo([this,this.B9,this.B_],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.H7=A._GetAutoObject(C.Aue);this.AcO=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AcO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.ALo={AsU:0,Init:function(aArg
){var B;A.zX([this,this.Bdt],[B=A._GetAutoObject(A.Device.Device),B.A7x,B.A$3],0
);A.zX([this,this.Bdq],[B=A._GetAutoObject(A.Device.Device),B.ARB,B.AZg],0);A.pe([
this,this.Bdt],this);A.pe([this,this.Bdq],this);},Clear:function(){C.Va.Clear.call(
this);this.AsU=0;},Ck:function(){A._GetAutoObject(A.Device.Device).Aq7(this.AsU);
A._GetAutoObject(A.Device.Device).Aq8(this.toString());},Bdt:function(G){this.AsU=
A._GetAutoObject(A.Device.Device).Pc;A.we(this,0);},Bdq:function(G){this.EC(A._GetAutoObject(
A.Device.Device).At1);A.we(this,0);},NO:function(Ev){if((this.AsU&(((B=Ev)<0)?B+
0x100000000:B))===(((B=Ev)<0)?B+0x100000000:B))return true;return false;},ATO:function(
Ev){this.AsU=this.AsU|(((B=Ev)<0)?B+0x100000000:B);},_Init:function(aArg){C.Va._Init.
call(this,aArg);this.__proto__=C.ALo;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pc={_Init:function(){C.ALo._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ALp={Tk:null,Aw:null,Z:null,Ke:null,CT:function(
){this.Aio(this);},Init:function(aArg){A.zV([this,this.Aio],this.Tk,0);A.pe([this
,this.Aio],this);},Dw:function(G){C.Ff.Dw.call(this,G);this.ML(this);},KK:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cv=[this,this.Eo];this.Bw.Ch=[
this,this.A2f];this.Bw.Cc=[this,this.A2J];this.Bw.C2(A.aaL(A.ach.AqG));this.Bw.Cn(
A.aaL(A.ach.Aqz));this.Bw.CS(A.aaL(A.ach.VE));}return this.Bw;},Eo:function(G){if(
this.Bxb()>0){this.AAk();this.Xh(this);}else A._GetAutoObject(A.Device.Device).A6(
28,true,A.jV,0,null);},Aio:function(G){this.AoC();var P;for(P=0;P<this.Tk.NJ();P=
P+1){var Z1=A._GetAutoObject(C.Pc).Oz(P);this.A0o(Z1);}this.J(this.Ke,0);A.aaS([
this,this.ML],this);},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]
);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},ML:function(G){var
B;this.Z.Vb(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.
AR,true,null,null);},A0o:function(G1){var Ayn=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.R2,0);Aa.U(Ayn.BQ(G1));Aa.Aj(true);Aa.GT=G1;Aa.A9f(this.
Tk.NO(G1));this.J(Aa,0);this.Zf(Aa);},AoC:function(){var B;var X=this.Z.Ag;while(
!!X&&!((X.T&0x200)===0x200)){var Adp=X;X=X.Ag;if(((Adp.T&0x400)===0x400))this.HI(
Adp);}},AAk:function(){var B;this.Tk.Clear();var X=this.Z.Ag;while(!!X&&!((X.T&0x200
)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.Ke)){var Aa=(C.R2.isPrototypeOf(
X)?X:null);if(!!Aa){this.Tk.J(Aa.GT);if(Aa.ARN())this.Tk.ATO(Aa.GT);}else A.ab5(
"%s",Ast);}X=X.Ag;}this.Tk.Ck();},Bxb:function(){var B;var A3e=0;var X=this.Z.Ag;
while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.Ke)){var
Aa=(C.R2.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ARN())A3e=A3e+1;}else A.ab5("%s"
,Ast);}X=X.Ag;}return A3e;},A2f:function(G){var B;var Aa=(C.R2.isPrototypeOf(B=this.
AR)?B:null);if(!!Aa){var AzD=(C.R2.isPrototypeOf(B=Aa.Ag)?B:null);if(!!AzD){this.
Ahh(AzD,Aa);A.pe([this,this.ML],this);}}},A2J:function(G){var B;var Aa=(C.R2.isPrototypeOf(
B=this.AR)?B:null);if(!!Aa){var Az_=(C.R2.isPrototypeOf(B=Aa.AH)?B:null);if(!!Az_
){this.Ahh(Aa,Az_);A.pe([this,this.ML],this);}}},Aqe:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.Aio],this);},G8:function(
G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Ff._Init.call(this,aArg);C.
Aw._Init.call(this.Aw={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Auv._Init.
call(this.Ke={I:this},0);this.__proto__=C.ALp;this.H(Q$);this.Text.R(A.aaR(A.acf.
ADw));this.Aw.H(IK);this.Z.H(Lq);this.Z.Kf(1);this.Ke.H(AHr);this.Ke.Aj(true);this.
Ke.U(A.aaR(A.acf.Aqe));this.J(this.Aw,0);this.J(this.Z,0);this.J(this.Ke,0);this.
Z.Ej=[this,this.G8];this.Ke.AN=[this,this.Aqe];this.Tk=A._GetAutoObject(C.Pc);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.Aw._Done();this.Z._Done();
this.Ke._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this
);this.Aw._ReInit();this.Z._ReInit();this.Ke._ReInit();this.Text.R(A.aaR(A.acf.ADw
));this.Ke.U(A.aaR(A.acf.Aqe));this.CT();},_Mark:function(D){var B;C.Ff._Mark.call(
this,D);if((B=this.Tk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ke).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.R2={GT:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A4(0x11);this.
V.Text.HH(10);},Bh:function(aSize){C.TZ.Bh.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Me.M[0]));},Ai:function(Ae){var B;C.TZ.Ai.call(this,Ae);var G6=((Ae&0x10
)===0x10);var Fh=((Ae&0x20)===0x20);var Gt=this.Bl.Bv;var FG=A.jb.AdO;var GJ=A.jb.
Bj;if(this.Hb){FG=A.jb.Bj;GJ=A.jb.Text;}if(!G6){this.Background.L(FG);this.V.L(A.
jb.CF);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(Fh){this.
Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.L(FG);this.V.L(GJ);
}this.LB=G6;this.Ky=Fh;this.Qg=Gt;},IP:function(G){this.A2H(this);},A2H:function(
G){this.AEf(!this.Amc);},A9f:function(E){this.AEf(E);},ARN:function(){return this.
Amc;},_Init:function(aArg){C.TZ._Init.call(this,aArg);this.__proto__=C.R2;this.Me.
H(AW5);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Va={CA:0,
H7:A.abi(17,0,null),Oz:function(Hq){return this.H7.Get(Hq);},NJ:function(){return this.
CA;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.H7.Set(P,0);this.CA=0;},J:function(
Ev){if(this.CA>=17)A.ab5("%s",AHs);else{this.H7.Set(this.CA,Ev);this.CA=this.CA+
1;}},Ck:function(){},EC:function(AcB){var AIE=AcB.indexOf(String.fromCharCode(0x2C
),0);var A0M=A.jV;var P=0;this.CA=0;while(P<17)if(AcB===A.jV){this.H7.Set(P,0);P++;
}else{if(AIE===-1){A0M=AcB;AcB=A.jV;}else{A0M=A.abV(AcB,AIE);AcB=A.ab1(AcB,0,AIE+
1);}var Z1=A.abZ(A0M,0,10)|0;if(this.AC9(Z1)){this.H7.Set(this.CA,Z1);this.CA=this.
CA+1;P++;}AIE=AcB.indexOf(String.fromCharCode(0x2C),0);}if(AcB!==A.jV)A.ab5("%s"
,AW6);},toString:function(){var A1V=(((B=this.H7.Get(0))<0)?B+0x100000000:B).toFixed(
);var P;for(P=1;P<this.CA;P=P+1)A1V=(A1V+AHt)+(((B=this.H7.Get(P))<0)?B+0x100000000:
B).toFixed();return A1V;},AwO:function(Hq,Ev){if(Hq>=this.CA){A.ab5("%s",((((AW7+
Hq.toFixed())+AW8)+this.CA.toFixed())+AW9)+AW_);return;}this.H7.Set(Hq,Ev);},Contains:
function(Ev){var P;for(P=0;P<this.CA;P=P+1)if(this.H7.Get(P)===Ev)return true;return false;
},AC9:function(Ev){return true;},DK:function(Ev){var P;for(P=0;P<this.CA;P=P+1)if(
this.H7.Get(P)===Ev)return P;return-1;},_Init:function(aArg){(this.H7=[]).__proto__=
C.Va.H7;this.__proto__=C.Va;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AL9={Init:function(aArg){var B;A.zX([this,this.BdD],[B=A._GetAutoObject(A.Device.
Device),B.A7J,B.Baa],0);A.pe([this,this.BdD],this);},Ck:function(){A._GetAutoObject(
A.Device.Device).Aj7(this.toString());},AC9:function(Ev){switch(Ev){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},BdD:function(
G){this.EC(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Va._Init.call(this,aArg);this.__proto__=C.AL9;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AL9._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
V1={U_:null,Kl:null,A6t:A.jV,Action:0,A3T:false,A92:false,A_H:false,Bh:function(
aSize){C.Fc.Bh.call(this,aSize);this.QO.H(this.Mi.M);this.Oy.H(this.QO.M);},Ai:function(
Ae){C.Fc.Ai.call(this,Ae);if(!this.LB){this.Kl.TL.L(A.jb.AmG);this.Kl.Qx.Y(true);
this.Kl.Qx.L(A.jb.AQh);}else if(this.Qg){this.Kl.TL.L(A.jb.Bj);this.Kl.Qx.Y(false
);}else if(this.Ky){this.Kl.TL.L(A.jb.Bj);this.Kl.Qx.Y(false);}else{this.Kl.TL.L(
A.jb.Text);this.Kl.Qx.Y(true);this.Kl.Qx.L(A.jb.C0);}},Bkq:function(E){if(this.Action===
E)return;this.Action=E;},BlF:function(E){if(this.A6t===E)return;this.A6t=E;this.
U_.Text.R(E);},ASQ:function(E){if(this.A_H===E)return;this.A_H=E;this.Kl.Bmm(!this.
Kl.AUb);},AEV:function(E){if(this.A92===E)return;this.A92=E;this.Kl.Y(!this.Kl.Fd(
));},A8O:function(E){if(this.A3T===E)return;this.A3T=E;this.U_.Y(E);},_Init:function(
aArg){C.Fc._Init.call(this,aArg);C.U_._Init.call(this.U_={I:this},0);C.Kl._Init.
call(this.Kl={I:this},0);this.__proto__=C.V1;this.H(AW$);this.Background.H(AXa);
this.GZ.Ar(false);this.GZ.Y(false);this.U_.H(AXb);this.U_.Y(false);this.Kl.H(AXc
);this.Kl.Y(false);this.J(this.U_,0);this.J(this.Kl,0);this.Mi.Ax(A.aaL(A.ach.AMD
));},_Done:function(){this.__proto__=C.Fc;this.U_._Done();this.Kl._Done();C.Fc._Done.
call(this);},_ReInit:function(){C.Fc._ReInit.call(this);this.U_._ReInit();this.Kl.
_ReInit();},_Mark:function(D){var B;C.Fc._Mark.call(this,D);if((B=this.U_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.U_={AJ:null,Text:null,Cz:null,Init:function(
aArg){this.Text.H(this.M);this.Cz.H(this.M);this.AJ.H(this.M);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.AJ={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.Cz._Init.call(this.Cz={I:this},0);this.__proto__=
C.U_;this.AJ.H(AXd);this.AJ.L(A.jb.Bia);this.H(AXe);this.Text.H(AXf);this.Text.L(
A.jb.Text);this.Cz.H(AXg);this.Cz.NX(1);this.Cz.L(A.jb.Text);this.J(this.AJ,0);this.
J(this.Text,0);this.J(this.Cz,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.O;this.AJ._Done();this.Text._Done();this.Cz._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AJ._ReInit();this.Text._ReInit();this.Cz._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AJ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.Kl={Qx:null
,TL:null,AUb:false,Bmm:function(E){if(this.AUb===E)return;this.AUb=E;if(E){this.
TL.Ax(A.aaL(A.ach.ABM));this.Qx.Ax(A.aaL(A.ach.ABM));}else{this.TL.Ax(A.aaL(A.ach.
Ap$));this.Qx.Ax(A.aaL(A.ach.Ap$));}},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.An._Init.call(this.Qx={I:this},0);A.acg.An._Init.call(this.TL={I:this
},0);this.__proto__=C.Kl;this.H(AxJ);this.Qx.H(AxJ);this.Qx.Cu(1);this.TL.H(AxJ);
this.TL.Cu(0);this.J(this.Qx,0);this.J(this.TL,0);this.Qx.Ax(A.aaL(A.ach.Ap$));this.
TL.Ax(A.aaL(A.ach.Ap$));},_Done:function(){this.__proto__=A.Core.O;this.Qx._Done(
);this.TL._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Qx._ReInit();this.TL._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ARf={
FV:null,B$:null,Df:null,Dc:null,Kc:null,Y1:10,Aqw:0,ADG:0,ARt:0,Aym:false,LP:false
,BbK:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).Ap.Ld(
))A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).
Ap.HA().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(
A.Device.Helper).ApT(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AzR],this.
C7.Q,0);A.zX([this,this.By$],this.Df.Q,0);A.zX([this,this.AAF],this.Dc.Q,0);A.zX([
this,this.AAF],this.Dc.Hx.Q,0);A.zX([this,this.AAF],[this,this.ARU,this.AET],0);
A.zX([this,this.Gw],[B=A._GetAutoObject(A.Device.Device),B.A8F,B.BaC],0);A.zX([this
,this.Bea],this.B$.Q,0);A.pe([this,this.AzR],this);A.pe([this,this.Gw],this);A.pe([
this,this.AAF],this);A.pe([this,this.Bea],this);},Cw:function(G){if(!this.Aym){this.
Aym=true;A.pe([this,this.Acy],this);}else C.HT.Cw.call(this,G);},AfR:function(G){
this.ARt=this.Y1;this.BbS(this);},Eo:function(G){A._GetAutoObject(A.Device.Helper
).W.Hd();A._GetAutoObject(C.AX).Fl();},AtH:function(){this.N.B0(A.jV);this.N.C2(
A.aaL(A.ach.ACT));this.N.Cc=[this,this.Ax_];},AzM:function(G){A._GetAutoObject(C.
AX).BS(63);},AET:function(E){if(this.Y1===E)return;this.Y1=E;A.abo([this,this.ARU
,this.AET],0);},BbS:function(G){var F;if(!this.Y1||(this.BbK===true)){A._GetAutoObject(
A.Device.Device).A6(24,false,CL,0,null);if(this.ADG===1)A._GetAutoObject(A.Device.
Device).A6(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A6(23,
true,this.ADG.toFixed(),2000,null);this.Eo(this);return;}this.FV.Gf();this.FV.DT(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.FV.NT(A._GetAutoObject(A.Device.
Helper).W.Breed);this.FV.QR(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FV.JI(A._GetAutoObject(A.Device.Helper).W.Gender);this.FV.Na(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.FV.NW(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.FV.Ub(A._GetAutoObject(A.Device.Helper).W.VisualId);var Ak2=A._GetAutoObject(
A.Device.Helper).A0G(this.FV,(F=this.Dc.HU.Hj,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Ap);if(!Ak2)this.AiH();else{A._GetAutoObject(A.Device.Helper).AJG(
this.FV,Ak2,(F=this.Dc.HU.Hj,F[1].call(F[0])),this.Y1-1,[this,this.Apg]);A._GetAutoObject(
A.Device.Device).A6(24,false,CL,0,null);}},Gw:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmH())this.C6.Y(true);else this.C6.Y(false);if(this.LP){this.Df.
Y(false);this.B$.U(A.aaR(A.acf.ABU));this.B$.AEh(A.aaL(A.ach.AeP));}else{this.Df.
Y(true);this.B$.U(A.aaR(A.acf.AkG));this.B$.AEh(null);}if((this.Z.BhK(this.AR)>=
0)&&(((this.AR.T&0x1)===0x1)===false))this.Jx(this.Z.Vw(this.AR,0x1));this.Am();
},ASl:function(E){if(this.Aqw===E)return;this.Aqw=E;A.abo([this,this.A7V,this.ASl
],0);},AAF:function(G){var F;var AJr=(F=this.Dc.Q,F[1].call(F[0]));var Azu=-1;switch((
F=this.Dc.HU.Hj,F[1].call(F[0]))){case 0:Azu=AJr+((F=A._GetAutoObject(A.Device.Helper
).Bcn(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Y1-1));break;case 1:Azu=(AJr+this.
Y1)-1;break;case 3:case 2:case 5:case 4:switch(this.Dc.Hx.AC.Q){case 0:Azu=(AJr+
this.Y1)-1;break;case 1:Azu=(AJr-this.Y1)+1;break;default:throw new Error(AXh+this.
Dc.Hx.AC.Q.toFixed());}break;default:throw new Error(AXi+this.Dc.Hx.AC.Q.toFixed(
));}this.ASl(Azu);},By$:function(G){A.pe([this,this.Gw],this);A.pe([this,this.Atq
],this);},AzR:function(G){A._GetAutoObject(A.Device.Helper).AUH(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LP);A.pe([this,this.AAF],this);},Apg:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.Apa();else switch((F=this.Dc.HU.Hj,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.Jx(this.Dc);break;case 0:this.Jx(this.Df
);break;case 1:this.Jx(this.B$);break;default:throw new Error(AxK+(F=this.Dc.HU.
Hj,F[1].call(F[0])).toFixed());}break;case 25:this.Jx(this.B$);break;case 47:if(
As.PopupState===7)this.Apa();else{this.Jx(this.Dc);this.Jx(this.B$);}break;case 43:{
this.Jx(this.Dc);this.Jx(this.Df);}break;case 42:{this.Jx(this.Dc);this.Jx(this.
B$);}break;case 41:break;default:A.ab5("%s%e",Asu,As.Id);}},AiH:function(){this.
FV.Ck(A._GetAutoObject(A.Device.Device).Ap);this.ADG=this.ADG+1;if(A._GetAutoObject(
A.Device.Helper).AmH()){if(A._GetAutoObject(A.Device.Device).Br.Ld()){A._GetAutoObject(
A.Device.Device).A6(24,false,ZT,0,null);A._GetAutoObject(A.Device.Device).A6(50,
true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);}else{var L1=A.
_GetAutoObject(A.Device.Device).Ap.K_(0,this.FV.Id);A._GetAutoObject(A.Device.Device
).Sw(L1);var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(this.FV.
Id);BZ.OnSetBodyWeight(this.KC);BZ.OnSetTimestamp(this.FV.DateOfBirth);BZ.Ck(A._GetAutoObject(
A.Device.Device).Br);}}this.Apa();},Apa:function(){var B;var F,CM;if(!!(F=this.B$.
Q,F[1].call(F[0]))){(F=this.B$.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LP)(
CM=this.Df.Q,CM[2].call(CM[0],(F=this.B$.Q,F[1].call(F[0]))));}if(!this.LP)(CM=this.
Df.Q,CM[2].call(CM[0],A._GetAutoObject(A.Device.Helper).A_X(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Df.Q,F[1].call(
F[0])),this.Df.Ajv(),this.Df.Ajx())));var IM=null;switch((F=this.Dc.HU.Hj,F[1].call(
F[0]))){case 3:IM=[B=A._GetAutoObject(A.Device.Device),B.AvB,B.Ax2];break;case 2:
IM=[B=A._GetAutoObject(A.Device.Device),B.AvC,B.Ax3];break;case 4:case 5:IM=[B=A.
_GetAutoObject(A.Device.Device),B.Am5,B.Aob];break;default:;}if(!!IM){switch((F=
this.Dc.J9.Vt,F[1].call(F[0]))){case 1:IM[2].call(IM[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dc.Q,F[2].call(F[0],IM[1].call(IM[0])));
}var Xo=100-((this.Y1/this.ARt)*100);A._GetAutoObject(A.Device.Device).A6(24,true
,(((this.ARt.toFixed()+Asv)+(Xo|0).toFixed())+Asv)+(F=this.Dc.Q,F[1].call(F[0])).
toFixed(),0,[this,this.Bzj]);this.AET(this.Y1-1);A.aaS([this,this.BbS],null);},Bzj:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.BbK=true;},Aph:function(G){var F;C.HT.Aph.call(this,G);var Aov=
0;switch((F=this.BW.Q,F[1].call(F[0]))){case 0:case 2:Aov=A._GetAutoObject(A.Device.
Device).Adv;break;case 1:Aov=730;break;default:A.ab5("%s%e",AkP,(F=this.BW.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.QR(A._GetAutoObject(A.Device.
Helper).Dt()-A._GetAutoObject(A.Device.Helper).Amj(Aov));(F=this.C6.Q,F[2].call(
F[0],this.C6.Any));switch(this.BW.AC.Q){case 0:{this.Kc.KL(A.aaR(A.acf.AMz));this.
Kc.Kj(A.aaR(A.acf.AMA));}break;case 1:{this.Kc.KL(A.aaR(A.acf.BgC));this.Kc.Kj(A.
aaR(A.acf.BgD));}break;case 2:{this.Kc.KL(A.aaR(A.acf.Biy));this.Kc.Kj(A.aaR(A.acf.
Biz));}break;default:throw new Error(AkP);}},AeE:function(E){if(this.LP===E)return;
this.LP=E;A.abo([this,this.AvD,this.AeE],0);},Atq:function(G){var F,CM,SX;this.AeE(((
F=this.B$.Q,F[1].call(F[0]))===(CM=this.Df.Q,CM[1].call(CM[0])))&&!!(SX=this.B$.
Q,SX[1].call(SX[0])));A.pe([this,this.Gw],this);},Bea:function(G){A.pe([this,this.
Atq],this);},ARU:function(){return this.Y1;},A7V:function(){return this.Aqw;},AvD:
function(){return this.LP;},_Init:function(aArg){C.HT._Init.call(this,aArg);C.Avm.
_Init.call(this.B$={I:this},0);C.Q0._Init.call(this.Df={I:this},0);C.AFY._Init.call(
this.Dc={I:this},0);C.AT0._Init.call(this.Kc={I:this},0);this.__proto__=C.ARf;var
B;this.Dk(C.ACv);this.B$.H(An0);this.B$.Aj(true);this.B$.U(A.aaR(A.acf.AkG));this.
B$.Arf(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.ArW));this.B$.Arg(A.
aaR(A.acf.Aj2));this.Df.H(AXj);this.Df.Aj(true);this.Df.U(A.aaR(A.acf.YY));this.
Df.Arr(false);this.Dc.H(AXk);this.Dc.Aj(true);this.Dc.U(A.aaR(A.acf.A6g));this.Dc.
Bx(0);this.Kc.H(AXl);this.Kc.Aj(true);this.Kc.U(A.aaR(A.acf.A7o));this.Kc.Gn(1);
this.Kc.E1(500);this.Kc.Kj(A.aaR(A.acf.AMA));this.Kc.KL(A.aaR(A.acf.AMz));this.Kc.
A88(A.aaR(A.acf.Aqw)+A.aaR(A.acf.Colon));this.J(this.B$,0);this.J(this.Df,0);this.
J(this.Dc,0);this.J(this.Kc,0);this.FV=A._NewObject(A.Device.Animal,0);this.B$.AN=[
this,this.Acy];this.B$.LT([this,this.Acy]);this.B$.LV(A.aaL(A.ach.AeP));this.B$.
At([B=A._GetAutoObject(A.Device.Helper).W,B.Aj4,B.NW]);this.B$.PJ([B=A._GetAutoObject(
A.Device.Device),B.AbD,B.Acw]);this.B$.QS([B=A._GetAutoObject(A.Device.Device),B.
AbE,B.Acx]);this.B$.T6([B=A._GetAutoObject(A.Device.Device),B.Am2,B.Aoa]);this.B$.
AeE([this,this.AvD,this.AeE]);this.Df.Gg([this,this.D3,this.GG]);this.Df.LT([this
,this.Acy]);this.Df.LV(A.aaL(A.ach.AeP));this.Df.T8([B=this.Gender.Animal,B.Wb,B.
JI]);this.Df.PJ([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.Df.QS([B=
A._GetAutoObject(A.Device.Device),B.AbE,B.Acx]);this.Df.T6([B=A._GetAutoObject(A.
Device.Device),B.Am2,B.Aoa]);this.Df.At([B=A._GetAutoObject(A.Device.Helper).W,B.
Am6,B.Na]);this.Df.Am9([B=this.AnimalType.Animal,B.PH,B.DT]);this.Dc.Gg([this,this.
D3,this.GG]);this.Dc.LT([B=this.Dc,B.FJ]);this.Dc.LV(A.aaL(A.ach.Edit));this.Dc.
At([B=A._GetAutoObject(A.Device.Helper).W,B.Aq5,B.Ub]);this.Dc.A8P(A._GetAutoObject(
A.Device.Helper).W);this.Kc.At([this,this.ARU,this.AET]);this.Kc.Bk3([this,this.
A7V,this.ASl]);this.Init(aArg);},_Done:function(){this.__proto__=C.HT;this.B$._Done(
);this.Df._Done();this.Dc._Done();this.Kc._Done();C.HT._Done.call(this);},_ReInit:
function(){C.HT._ReInit.call(this);this.B$._ReInit();this.Df._ReInit();this.Dc._ReInit(
);this.Kc._ReInit();this.B$.U(A.aaR(A.acf.AkG));this.B$.Arf(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CL)+A.aaR(A.acf.ArW));this.B$.Arg(A.aaR(A.acf.Aj2));this.Df.U(
A.aaR(A.acf.YY));this.Dc.U(A.aaR(A.acf.A6g));this.Kc.U(A.aaR(A.acf.A7o));this.Kc.
Kj(A.aaR(A.acf.AMA));this.Kc.KL(A.aaR(A.acf.AMz));this.Kc.A88(A.aaR(A.acf.Aqw)+A.
aaR(A.acf.Colon));},_Mark:function(D){var B;C.HT._Mark.call(this,D);if((B=this.FV
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ATs={BX:null,RatingMode:null,KK:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cc=null;this.Bw.Ch=null;this.Bw.Cv=[this,this.Xh];this.Bw.B0(A.jV
);this.Bw.Cn(null);this.Bw.CS(A.aaL(A.ach.VE));}return this.Bw;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ATs;var B;this.
H(Q$);this.BX.H(Asr);this.BX.U(A.aaR(A.acf.A_P));this.J(this.BX,0);this.BX.At([B=
this.RatingMode,B.B9,B.B_]);this.BX.CG(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BX._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit(
);this.RatingMode._ReInit();this.BX.U(A.aaR(A.acf.A_P));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
BeI],[B=A._GetAutoObject(A.Device.Device),B.ARY,B.AZs],0);A.pe([this,this.BeI],this
);},Do:function(){return 2;},F$:function(aIndex){return this.RatingModeToString.
BQ(this.C4(aIndex));},At:function(E){C.CN.At.call(this,E);A._GetAutoObject(A.Device.
Device).Awm(E);},BeI:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CN._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Co.Set(0,0);this.Co.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.CN;this.RatingModeToString._Done();C.CN._Done.call(this
);},_ReInit:function(){C.CN._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.CN._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.AMT={Wr:
function(G){C.Al4.Wr.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aqs()){
A._GetAutoObject(A.Device.Helper).W.Ake(false);A._GetAutoObject(A.Device.Helper).
W.Ck(A._GetAutoObject(A.Device.Device).Ap);}},_Init:function(aArg){C.Al4._Init.call(
this,aArg);this.__proto__=C.AMT;},_className:"Application::ControlMeasureTemperatureScreen"
};C.G_={DE:A.jV,U:function(E){if(this.DE===E)return;this.DE=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.G_;},_className:"Application::BaseItem"
};C.AUW={BX:null,WeightRecordingMode:null,KK:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cc=null;this.Bw.Ch=null;this.Bw.Cv=[this,this.Xh];this.Bw.B0(A.jV
);this.Bw.Cn(null);this.Bw.CS(A.aaL(A.ach.VE));}return this.Bw;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AUW;var B;this.H(Q$);this.BX.H(Asr);this.BX.U(A.aaR(A.acf.Asg));this.BX.E1(1);
this.J(this.BX,0);this.BX.At([B=this.WeightRecordingMode,B.B9,B.B_]);this.BX.CG(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BX.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit();this.WeightRecordingMode.
_ReInit();this.BX.U(A.aaR(A.acf.Asg));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Do:function(){return 2;},F$:function(aIndex){return this.
WeightRecordingModeToString.BQ(this.C4(aIndex));},At:function(E){C.CN.At.call(this
,E);A._GetAutoObject(A.Device.Device).Aww(E);},Init:function(aArg){var B;A.zX([this
,this.BfI],[B=A._GetAutoObject(A.Device.Device),B.A8E,B.BaB],0);A.pe([this,this.
BfI],this);},BfI:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CN._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Co.Set(0,0);this.Co.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.CN;this.WeightRecordingModeToString.
_Done();C.CN._Done.call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.CN._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.AaD={BooleanToAutoOnOff:null,F$:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BQ(aIndex);},_Init:function(aArg){C.FU._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.AaD;},_Done:function(
){this.__proto__=C.FU;this.BooleanToAutoOnOff._Done();C.FU._Done.call(this);},_ReInit:
function(){C.FU._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.FU._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Aw_={A6u:function(){var B;this.
AwP(1);this.Ji(0,3);this.Vi(0,0,(B=this.M)[3]-B[1]);this.A3X(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A3X(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.Vq(0);},_Init:
function(aArg){C.AAR._Init.call(this,aArg);this.__proto__=C.Aw_;},_className:"Application::Triangle"
};C.AS4={Z:null,Init:function(aArg){this.Bwz(this);},Bwy:function(P2){var Aa=A._NewObject(
C.AMZ,0);Aa.H(BC);Aa.U(P2);Aa.Aj(true);Aa.Ar(false);Aa.Bg(true);this.J(Aa,0);this.
AsW(this);},AsW:function(G){var B;var Ak_=1;var A1O=0;var X=this.Z.Ag;var Cs=null;
var K0=null;while(!!X&&!((X.T&0x200)===0x200)){Cs=(C.OQ.isPrototypeOf(X)?X:null);
if(((X.T&0x400)===0x400)&&!!Cs){var AKA=(B=Cs.V.B5.A59(Cs.V.String,0,-1))[2]-B[0
];if(!!(C.Mg.isPrototypeOf(X)?X:null))AKA=AKA+20;if(A1O<AKA)A1O=AKA;Cs.H(A.abL(Cs.
M,120));Cs.H(A.abI(Cs.M,28));Cs.H(A.abM(Cs.M,this.M[0]));Cs.H(A.abO(Cs.M,((B=this.
M)[3]-B[1])-(Ak_*28)));Ak_=Ak_+1;}else{K0=(A.acg.DR.isPrototypeOf(X)?X:null);if(((
X.T&0x400)===0x400)&&!!K0){var Da=((B=this.M)[3]-B[1])-((Ak_-1)*28);K0.DY([this.
M[0],K0.Ek[1]]);K0.DY([K0.Ek[0],Da]);K0.DM([this.M[0]+120,K0.Eu[1]]);K0.DM([K0.Eu[
0],Da]);}}X=X.Ag;}this.Bz1(A1O,28);},Bz1:function(aWidth,BvH){var B;var X=this.Z.
Ag;var Cs=null;var K0=null;aWidth=aWidth+20;if(aWidth>(C.ArX[0]-10))aWidth=C.ArX[
0]-10;while(!!X&&!((X.T&0x200)===0x200)){Cs=(C.OQ.isPrototypeOf(X)?X:null);if(((
X.T&0x400)===0x400)&&!!Cs){Cs.V.Text.A4(0x14);Cs.V.Text.HH(10);Cs.H(A.abL(Cs.M,aWidth
));Cs.H(A.abI(Cs.M,BvH));Cs.H(A.abM(Cs.M,this.M[2]-((B=Cs.M)[2]-B[0])));}else{K0=(
A.acg.DR.isPrototypeOf(X)?X:null);if(((X.T&0x400)===0x400)&&!!K0){K0.DY([this.M[
2]-aWidth,K0.Ek[1]]);K0.DM([this.M[2],K0.Eu[1]]);}}X=X.Ag;}},Bwz:function(G){var
Aa=A._GetAutoObject(C.BL).Aqi;while(!!Aa){if(!!(C.AwD.isPrototypeOf(Aa)?Aa:null)
){var Ex=(C.AwD.isPrototypeOf(Aa)?Aa:null);this.Bwx(Ex.DE,Ex.AN,Ex.Bv,Ex.AQp);}else
if(!!(C.AwF.isPrototypeOf(Aa)?Aa:null)){var Ex=(C.AwF.isPrototypeOf(Aa)?Aa:null);
this.BwE(Ex.DE,Ex.AN,Ex.Bv,Ex.Wa,Ex.Wt);}else if(!!(C.Za.isPrototypeOf(Aa)?Aa:null
)){var Ex=(C.Za.isPrototypeOf(Aa)?Aa:null);this.Bww(Ex.DE,Ex.AN,Ex.Bv);}else if(
!!(C.Akk.isPrototypeOf(Aa)?Aa:null)){var Ex=(C.Akk.isPrototypeOf(Aa)?Aa:null);this.
Bwy(Ex.DE);}else if(!!(C.AFq.isPrototypeOf(Aa)?Aa:null))this.BwF();Aa=Aa.Mn;}A._GetAutoObject(
C.BL).Clear();A.pe([this,this.AsW],this);},Bww:function(P2,AcH,AhK){var Aa=A._NewObject(
C.Mg,0);Aa.H(BC);Aa.U(P2);Aa.AN=AcH;Aa.Aj(true);Aa.Ar(AhK);Aa.Bg(true);this.J(Aa
,0);this.AsW(this);},BwF:function(){var K0=A._NewObject(A.acg.DR,0);K0.L(A.jb.Bj
);K0.Aj(true);K0.NX(3);this.J(K0,0);this.AsW(this);},Bwx:function(P2,AcH,AhK,AZ2
){var Aa=A._NewObject(C.Amh,0);Aa.H(BC);Aa.U(P2);Aa.AN=AcH;Aa.Aj(true);Aa.Ar(AhK
);Aa.Bg(true);Aa.At(AZ2);this.J(Aa,0);this.AsW(this);},BwE:function(P2,AcH,AhK,A13
,Af1){var Aa=A._NewObject(C.AMY,0);Aa.H(BC);Aa.U(P2);Aa.AN=AcH;Aa.Aj(true);Aa.Ar(
AhK);Aa.Bg(true);Aa.Bl0(A13);Aa.AE6(Af1);this.J(Aa,0);this.AsW(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);
this.__proto__=C.AS4;this.H(Q$);this.Z.H(Q$);this.J(this.Z,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Z._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Z._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.AeU={_Init:
function(){A.acl.AeU._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A9Y={Aqi:null,AgY:null,Nw:function(P2){var Ex=A._NewObject(
C.Akk,0);Ex.DE=P2;this.J(Ex);},Clear:function(){this.Aqi=null;this.AgY=null;},Ft:
function(){var K0=A._NewObject(C.AFq,0);this.J(K0);},J:function(Ba$){if(!this.Aqi
){this.Aqi=Ba$;this.AgY=this.Aqi;}else{this.AgY.Mn=Ba$;this.AgY=this.AgY.Mn;}},Qp:
function(P2,AcH){var Ex=A._NewObject(C.Za,0);Ex.DE=P2;Ex.AN=AcH;this.J(Ex);},BfR:
function(P2,AcH,AZ2){var Ex=A._NewObject(C.AwD,0);Ex.DE=P2;Ex.AN=AcH;Ex.AQp=AZ2;
this.J(Ex);},Xu:function(P2){var Ex=A._NewObject(C.Za,0);Ex.DE=P2;Ex.Bv=false;this.
J(Ex);},At3:function(P2,AcH,A13,Af1){var Ex=A._NewObject(C.AwF,0);Ex.DE=P2;Ex.AN=
AcH;Ex.Wa=A13;Ex.Wt=Af1;this.J(Ex);},_Init:function(aArg){this.__proto__=C.A9Y;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Aqi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BL={_Init:function(){C.A9Y._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AwE={Mn:null,_Init:function(aArg){this.__proto__=
C.AwE;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.ANY={Al2:null,Aq9:function(E){if(this.Al2===
E)return;if(!!this.Ab)this.Ab.Zf(this);if(!!this.Al2)this.Aqa(this.Al2,A._GetAutoObject(
C.Ar1),null,null,null,null,false);this.Al2=E;if(!!this.Al2)this.Ako(this.Al2,A._GetAutoObject(
C.Ar1),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);this.__proto__=C.ANY;this.H(BC);},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Al2)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wj={_Init:function(){C.ANY._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
NZ={Init:function(aArg){var CW=A._NewObject(C.AS5,0);CW.H(this.M);this.Ako(CW,A.
_GetAutoObject(C.Anv),null,A._GetAutoObject(C.Anv),A._GetAutoObject(C.Anv),null,
null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.NZ;this.H(Q$);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Ar1={_Init:function(){C.AT2._Init.call(this,0);this.ABS=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AS5={AJ:null,_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.AJ={I:this},0);this.
__proto__=C.AS5;this.H(AHu);this.Dl(0);this.AJ.AY(0x3F);this.AJ.H(AHu);this.AJ.L(
0xAAFFFFFF);this.J(this.AJ,0);},_Done:function(){this.__proto__=A.Core.O;this.AJ.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AJ._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AT1={RY:function(){var B;var Ao=(A.acl.AeM.isPrototypeOf(B=A.acl.Ad0.RY.call(this
))?B:null);if(!Ao)throw new Error(Aso);Ao.Cj.Cr=255;Ao.Cj.B1=0;return Ao;},RX:function(
){var B;var Ao=(A.acl.AwC.isPrototypeOf(B=A.acl.Ad0.RX.call(this))?B:null);if(!Ao
)throw new Error(Aso);Ao.ER.Cr=0;Ao.ER.B1=255;Ao.Dn=true;return Ao;},_Init:function(
aArg){A.acl.Ad0._Init.call(this,aArg);this.__proto__=C.AT1;},_className:"Application::ShadeOverlayTransition"
};C.Anv={_Init:function(){C.AT1._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Akw={Any:0,A1a:false,Init:function(aArg){
},Ai:function(Ae){var F;C.I2.Ai.call(this,Ae);this.BR.L(this.V.AQ);if(!!this.Q){
var BA9=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BR.R((A.
_GetAutoObject(A.Device.Converter).AkL(BA9)+CL)+A._GetAutoObject(A.acj.DN).AfH()
);else this.BR.R(A.aaR(A.acf.Aj2));}},J0:function(G){var B;var BfF=(this.A1a===false
)&&(this.AK<=this.Ge);if(BfF)this.Bx(this.Any);this.A3B(this.AK,4);if(BfF){this.
Bx(this.AK-this.AjI);this.A1a=true;}C.I2.J0.call(this,G);},JV:function(G){this.A3B(
this.AK,5);C.I2.JV.call(this,G);},Bx:function(E){this.A3B(E,4);E=(((E+((this.AjI
/2)|0))/this.AjI)|0)*this.AjI;if(!E)this.A1a=false;C.I2.Bx.call(this,E);},Ag9:function(
E){if(this.Any===E)return;this.Any=E;},A3B:function(Bvq,Gq){this.ASn(A._GetAutoObject(
A.acj.DN).Bcr(Bvq,Gq));},_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=
C.Akw;this.H(JP);this.Any=this.Ge;this.Kn(this.HX,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BCv={None:0,Left:1,BC9:2,Right:3};C.Al7={AhX:
null,Fn:null,Ec:null,Background:null,AmU:null,FT:null,KG:A.jV,ADn:null,Init:function(
aArg){var B;A.zV([this,this.AfM],A._GetAutoObject(A.Device.Device).Ap,0);A.zX([this
,this.A2K],[B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,B.FD],0);A.pe([this,this.
LJ],this);A.pe([this,this.A2K],this);this.A9(this.Ec);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DD(this);},KK:function(){if(!this.Bw)this.Bw=A._NewObject(
C.N,0);return this.Bw;},EV:function(G){C.OverlayMenu.EV.call(this,G);A._GetAutoObject(
A.Device.Device).Ap.Bi(this.AhX);},Cw:function(G){C.OverlayMenu.Cw.call(this,G);
this.AKb();},AlA:function(G){var Aa=(C.ABm.isPrototypeOf(G)?G:null);var Hu;if(!!
Aa)Hu=Aa.Hu;else Hu=this.FT.FA();if(Hu>=A._GetAutoObject(A.Device.Device).Ap.Cb(
))return;A._GetAutoObject(A.Device.Helper).HF(Hu);A.pe([this,this.Xh],this);},AKb:
function(){},AfM:function(G){this.Am();},A2B:function(G){if(this.FT.FA()<(A._GetAutoObject(
A.Device.Device).Ap.Cb()-1))this.FT.GX(this.FT.FA()+1);},A2C:function(G){if(this.
FT.FA()>0)this.FT.GX(this.FT.FA()-1);},DD:function(G){var FX=A._GetAutoObject(A.
Device.Device).Ap.Cb();var MO=this.Bw;if(!MO)return;MO.CS(A.aaL(A.ach.Aeb));MO.Cv=[
this,this.Xh];if(FX<=0){MO.Cn(null);MO.C2(null);MO.Ch=null;MO.Cc=null;MO.Zd=false;
MO.Ze=false;}else if(FX===1){MO.Cn(null);MO.C2(A.aaL(A.ach.Aec));MO.Ch=null;MO.Cc=[
this,this.AlA];MO.Zd=false;MO.Ze=false;}else{MO.Cn(A.aaL(A.ach.Aqz));MO.C2(A.aaL(
A.ach.AqG));MO.Ch=[this,this.A2B];MO.Cc=[this,this.A2C];MO.Zd=true;MO.Ze=true;}}
,LJ:function(G){this.Be7(this);this.AhX=A._GetAutoObject(A.Device.Device).Ap.Filter;
this.AKb();},BlT:function(E){if(this.ADn===E)return;this.ADn=E;A.pe([this,this.By8
],this);},By8:function(G){this.Be7(this);},Be7:function(G){var B;if(!!this.Fn)this.
HI(this.Fn);this.Fn=(C.Et.isPrototypeOf(B=A._NewObject(this.ADn,0))?B:null);if(!
!this.Fn){this.Fn.H(AXm);this.J(this.Fn,0);}},A2K:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ap.Filter&&!!A._GetAutoObject(A.Device.Device).Ap.Filter.DX(1,4
))this.FT.Du(A.aaR(A.acf.ARn));else this.FT.Du(this.KG);},Du:function(E){if(this.
KG===E)return;this.KG=E;A.pe([this,this.A2K],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ec._Init.call(this.Ec={I:this},0);A.acg.AJ._Init.call(this.
Background={I:this},0);A.acg.AJ._Init.call(this.AmU={I:this},0);C.FT._Init.call(
this.FT={I:this},0);this.__proto__=C.Al7;this.H(Q$);this.Ec.H(BC);this.Ec.A8$(A.
jb.C0);this.Ec.A9a(A.jb.Text);this.Background.H(E4);this.Background.L(A.jb.Bnm);
this.AmU.H(AHv);this.AmU.L(A.jb.C0);this.FT.H(AHv);this.FT.NU(C.ABm);this.ADn=C.
AO4;this.KG=A.aaR(A.acf.Avq);this.J(this.Ec,0);this.J(this.Background,0);this.J(
this.AmU,0);this.J(this.FT,0);this.Ec.AN=[this,this.AlA];this.Ec.AbJ(A._NewObject(
C.Ya,0));this.FT.Y6(A._GetAutoObject(A.Device.Device).Ap);this.FT.Y7([this,this.
AlA]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ec._Done(
);this.Background._Done();this.AmU._Done();this.FT._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ec._ReInit();this.
Background._ReInit();this.AmU._ReInit();this.FT._ReInit();this.Du(A.aaR(A.acf.Avq
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.AhX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AmU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FT
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.ABm={AP:null,CY:null,Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.CY.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bc.Ai.call(
this,Ae);this.CY.C8(this.V.AQ);},Init:function(aArg){},Cd:function(Ad){if(!this.
AZ)return;this.Hu=Ad;if(!!this.AZ){this.U(this.AZ.CC(Ad,1).toFixed());this.CY.DT(
this.AZ.Amw(Ad,14));this.CY.AEj(this.AZ.IV(Ad,13));this.CY.AeD(this.AZ.HW(Ad,8));
this.CY.T_(this.AZ.HW(Ad,11));this.CY.AeG(this.AZ.HW(Ad,12));this.CY.AeI(this.AZ.
CC(Ad,5));this.Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.acg.AJ.
_Init.call(this.AP={I:this},0);C.CY._Init.call(this.CY={I:this},0);this.__proto__=
C.ABm;this.H(OX);this.AP.L(A.jb.Bd);this.CY.H(AXn);this.J(this.AP,0);this.J(this.
CY,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Bc;this.AP._Done();this.
CY._Done();C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.
AP._ReInit();this.CY._ReInit();},_Mark:function(D){var B;C.Bc._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Ya={Q:null,Init:function(
aArg){var B;this.A2Z(this);this.At([B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,
B.FD]);},A8N:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).GA();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
QW(FilterCriterion);var AAn=this.Ag0();if(AAn>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,AAn,false);Filter.
CX(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.A1.Aj9(false
);},BuR:function(s){this.A8N(s);},A2Z:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).GA(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?
B:null);if(!!FilterCriterion)Filter.QW(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BEU:function(s){this.A2Z(s);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcA],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcA],
E,0);if(!!E)A.pe([this,this.AcA],this);},De:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.A1.AEw(-1);this.DT(0);return;}var Ayi=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DX(1,4))?B:null);if(!Ayi){this.A1.AEw(
0);this.A1.Aj9(true);}else this.A1.AEw(Ayi.A7);var Ayb=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DX(14,0))?B:null);if(!!Ayb)this.DT(Ayb.
A7);else this.DT(0);},AcA:function(s){this.De(s);},_Init:function(aArg){C.AuW._Init.
call(this,aArg);this.__proto__=C.Ya;this.A1.AEw(0);this.A1.Dj=[this,this.BuR];this.
Init(aArg);},_Mark:function(D){var B;C.AuW._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.Aqd={BirthType:null,EaseOfDelivery:null,B$:null,D9:null,Abl:null,GU:null,Cm:
null,Abj:null,AMh:false,Init:function(aArg){this.AMh=A._GetAutoObject(A.Device.Helper
).W.AqJ();if(this.AMh)this.Aez(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.Aez(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.B$.
LT([this,this.Acy]);this.B$.LV(A.aaL(A.ach.AeP));this.B$.AN=[this,this.Acy];}this.
D9.Arr(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.Gw],this.D9.
Q,0);A.zX([this,this.Gw],this.B$.Q,0);A.pe([this,this.Gw],this);},AfR:function(G
){if(((this.D9.ArL===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQs(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).SK(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ck(
A._GetAutoObject(A.Device.Device).Ap);if(this.KC>0){if(this.AMh){var Ad=A._GetAutoObject(
A.Device.Device).Br.K_(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var BZ=A._NewObject(A.Device.Rating,0);BZ.EC(Ad,A._GetAutoObject(A.Device.
Device).Br);BZ.OnSetBodyWeight(this.KC);BZ.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);BZ.Ck(A._GetAutoObject(A.Device.Device).Br);}else A.ab5("%s%i"
,AXo,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Br.Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);else{var BZ=A._NewObject(A.Device.Rating
,0);BZ.Gf();BZ.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BZ.OnSetBodyWeight(
this.KC);BZ.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);BZ.Ck(
A._GetAutoObject(A.Device.Device).Br);}}A._GetAutoObject(C.AX).Fl();},Eo:function(
G){A._GetAutoObject(A.Device.Helper).W.EC(A._GetAutoObject(A.Device.Helper).W.CH
,A._GetAutoObject(A.Device.Device).Ap);A._GetAutoObject(C.AX).Fl();},AtH:function(
){this.N.B0(A.jV);this.N.C2(A.aaL(A.ach.AmE));this.N.Cc=[this,this.Ax_];},AzM:function(
G){A._GetAutoObject(C.AX).BS(32);},Gw:function(G){var F;var MQ=(F=this.D9.Q,F[1].
call(F[0]));var Af3=(F=this.B$.Q,F[1].call(F[0]));var A3v=true;if(!!MQ&&(Af3===MQ
))A3v=false;A._GetAutoObject(A.Device.Helper).Mw(this.B$,A3v);this.D9.BkV(!A3v);
},_Init:function(aArg){C.HT._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Avm._Init.
call(this.B$={I:this},0);C.Q0._Init.call(this.D9={I:this},0);C.Ab4._Init.call(this.
Abl={I:this},0);C.BX._Init.call(this.GU={I:this},0);C.Sy._Init.call(this.Cm={I:this
},0);C.BX._Init.call(this.Abj={I:this},0);this.__proto__=C.Aqd;var B;this.B$.H(AhE
);this.B$.Aj(true);this.B$.U(A.aaR(A.acf.AkG));this.B$.Arf(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CL)+A.aaR(A.acf.ArW));this.B$.Arg(A.aaR(A.acf.Aj2));this.D9.H(AhE);
this.D9.Aj(true);this.D9.U(A.aaR(A.acf.YY));this.Abl.H(AXp);this.Abl.Aj(true);this.
Abl.U(A.aaR(A.acf.GD));this.GU.H(AhE);this.GU.Aj(true);this.GU.U(A.aaR(A.acf.AqU
));this.Cm.H(AhE);this.Cm.Aj(true);this.Cm.U(A.aaR(A.acf.AdT));this.Cm.AEY(true);
this.Abj.H(AhE);this.Abj.Aj(true);this.Abj.U(A.aaR(A.acf.Agk));this.J(this.B$,0);
this.J(this.D9,0);this.J(this.Abl,0);this.J(this.GU,0);this.J(this.Cm,0);this.J(
this.Abj,0);this.BirthType.LU(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LU(A._GetAutoObject(A.Device.Helper).W);this.B$.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Aj4,B.NW]);this.D9.Gg([this,this.D3,this.GG]);this.D9.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Am6,B.Na]);this.Abl.Gg([this,this.D3,this.GG]);this.Abl.At([
B=A._GetAutoObject(A.Device.Helper).W,B.Aq5,B.Ub]);this.GU.At([B=this.BirthType,
B.B9,B.B_]);this.GU.CG(this.BirthType);this.Cm.Gg([this,this.D3,this.GG]);this.Cm.
LT([B=this.Cm,B.FJ]);this.Cm.LV(A.aaL(A.ach.Edit));this.Cm.AbN([B=A._GetAutoObject(
A.Device.Helper).W,B.Avy,B.QR]);this.Abj.At([B=this.EaseOfDelivery,B.B9,B.B_]);this.
Abj.CG(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HT;this.BirthType._Done();this.EaseOfDelivery._Done();this.B$._Done();this.D9._Done(
);this.Abl._Done();this.GU._Done();this.Cm._Done();this.Abj._Done();C.HT._Done.call(
this);},_ReInit:function(){C.HT._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.B$._ReInit();this.D9._ReInit();this.Abl._ReInit();
this.GU._ReInit();this.Cm._ReInit();this.Abj._ReInit();this.B$.U(A.aaR(A.acf.AkG
));this.B$.Arf(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.ArW));this.
B$.Arg(A.aaR(A.acf.Aj2));this.D9.U(A.aaR(A.acf.YY));this.Abl.U(A.aaR(A.acf.GD));
this.GU.U(A.aaR(A.acf.AqU));this.Cm.U(A.aaR(A.acf.AdT));this.Abj.U(A.aaR(A.acf.Agk
));},_Mark:function(D){var B;C.HT._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Ab4={Fv:null,A1:null,A5:0,IP:function(G){C.Dm.IP.call(this,G);if(!this.A5)this.
FJ(this);else this.G5(this);},Ai:function(Ae){C.Dm.Ai.call(this,Ae);this.Hn.Y(false
);this.HX.Y(false);if(this.A5===1){this.A9(this.A1);if(this.Hb){this.A1.FB(A.jb.
CF);this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.A1.FB(A.jb.C0);this.
Background.L(A.jb.CF);this.V.L(A.jb.Text);}}else{if(this.Hb)this.A1.FB(A.jb.CF);
else this.A1.FB(A.jb.C0);this.A9(null);}},Bx:function(E){var F;var BO=this.AK;C.
Dm.Bx.call(this,E);if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK
));A.abo(this.Q,0);}A.abo([this,this.T5,this.Bad],0);},DD:function(G){var F;if(!
this.N)return;switch(this.A5){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:this.Fv.Aks((F=
this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:function(G){this.Ep(0
);},Ep:function(EF){var F;if(!this.A5)this.Fv.Aje((F=this.N,F[1].call(F[0])));this.
A5=EF;if(this.A5<0)this.A5=0;else if(this.A5>1)this.A5=1;if(this.A5===1)this.A1.
Sv(7);this.DD(this);this.Am();},_Init:function(aArg){C.Dm._Init.call(this,aArg);
C.AQn._Init.call(this.A1={I:this},0);this.__proto__=C.Ab4;this.H(UG);this.E1(999999
);this.V.R(Asw);this.V.L(A.jb.Bj);this.Hn.Y(false);this.HX.Y(false);this.A1.H(AXq
);this.A1.ASv(6);this.J(this.A1,0);this.A1.At([this,this.T5,this.Bad]);this.Fv=A.
_NewObject(C.Ad7,0);},_Done:function(){this.__proto__=C.Dm;this.A1._Done();C.Dm.
_Done.call(this);},_ReInit:function(){C.Dm._ReInit.call(this);this.A1._ReInit();
},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Do:function(){return 4;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.At8={Z:null,QD:null,NP:null,D8:null,Py:null,Pv:null,Pw:null,Aw:null,FU:null,
ReasonOfLeaving:null,Ahf:null,M0:0,Aml:false,ABq:true,ANR:false,ArH:false,Init:function(
aArg){A.zX([this,this.A8L],[this,this.A8b,this.ASy],0);this.Ag5(A._GetAutoObject(
A.Device.Helper).W.Ahy(2));this.ReasonOfLeaving.At(this.ReasonOfLeaving.DK(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A8L],this);},Dw:function(G){
var B;var E7=0;var X=this.AR;switch(this.Cl.CK){case 6:E7=2;break;case 7:E7=7;break;
case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.R5(X,E7,0x414);if(!!X)this.
A9(X);if(!!X&&((X.T&0x400)===0x400))this.Z.Hy(X,true,null,null);},Alz:function(G
){A._GetAutoObject(C.AX).Fl();},Apm:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Br.Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Br.HA().toFixed(),0,null);else{var BZ=A._NewObject(A.Device.Rating
,0);BZ.Gf();BZ.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BZ.OnSetBodyWeight(
this.M0);BZ.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dt());BZ.Ck(A._GetAutoObject(
A.Device.Device).Br);}if(this.Aml){A._GetAutoObject(A.Device.Helper).W.Ag8(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A5$(A._GetAutoObject(A.Device.Helper).Dt(),this.ArH);}A._GetAutoObject(A.Device.
Helper).W.AEX(this.ReasonOfLeaving.C4((F=this.NP.Q,F[1].call(F[0]))));if(this.ABq
)A._GetAutoObject(A.Device.Helper).W.NW(0);if(this.ArH)A._GetAutoObject(A.Device.
Helper).W.Av7(true);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.
Device).Ap);this.A_v();},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[
1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},Ag5:function(E){
if(this.M0===E)return;this.M0=E;},Am3:function(){return this.M0;},Bec:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.AX).Fl();A._GetAutoObject(A.Device.Helper
).ArR();}},A8L:function(G){switch(this.ArH){case false:this.D8.U(A.aaR(A.acf.AUY
));break;case true:this.D8.U(A.aaR(A.acf.Bpq));break;default:;}},ASy:function(E){
if(this.ArH===E)return;this.ArH=E;},A8b:function(){return this.ArH;},A_v:function(
){A._GetAutoObject(A.Device.Device).A6(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Bec]);},Blj:function(E){if(this.ANR===E)return;
this.ANR=E;},BjA:function(){return this.ANR;},BkB:function(E){if(this.ABq===E)return;
this.ABq=E;},Bjp:function(){return this.ABq;},BkT:function(E){if(this.Aml===E)return;
this.Aml=E;},Bjw:function(){return this.Aml;},G8:function(G){A.pe([this,this.E9]
,this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);C.AeZ._Init.call(this.QD={I:this},0);C.Ar0._Init.call(this.NP={I:this
},0);C.Akw._Init.call(this.D8={I:this},0);C.AeZ._Init.call(this.Py={I:this},0);C.
AeZ._Init.call(this.Pv={I:this},0);C.AeZ._Init.call(this.Pw={I:this},0);C.Aw._Init.
call(this.Aw={I:this},0);C.FU._Init.call(this.FU={I:this},0);C.ReasonOfLeaving._Init.
call(this.ReasonOfLeaving={I:this},0);A.Device.Ahf._Init.call(this.Ahf={I:this},
0);this.__proto__=C.At8;var B;this.N.Y(true);this.N.B0(A.aaR(A.acf.Unregister));
this.Dk(C.IA);this.Z.H(E4);this.Z.Kf(1);this.QD.H(ZS);this.QD.Aj(true);this.QD.U(
A.aaR(A.acf.Aml));this.QD.Bg(true);this.QD.Y_(false);this.QD.Gn(-1);this.QD.E1(1
);this.NP.H(WV);this.NP.Aj(true);this.NP.U(A.aaR(A.acf.ReasonOfLeaving));this.NP.
Bg(true);this.NP.Y_(false);this.D8.H(AhD);this.D8.Aj(true);this.D8.U(A.aaR(A.acf.
AUY));this.D8.Bg(false);this.D8.Gn(1000);this.D8.E1(999000);this.Py.H(WV);this.Py.
Aj(true);this.Py.U(A.aaR(A.acf.A38));this.Py.Bg(true);this.Py.Y_(false);this.Py.
Bx(1);this.Py.Gn(-1);this.Py.E1(1);this.Pv.H(ZS);this.Pv.Aj(true);this.Pv.U(A.aaR(
A.acf.A39));this.Pv.Bg(true);this.Pv.Y_(false);this.Pv.Bx(1);this.Pv.Gn(-1);this.
Pv.E1(1);this.Pw.H(WV);this.Pw.Aj(true);this.Pw.U(A.aaR(A.acf.A4U));this.Pw.Bg(true
);this.Pw.Y_(false);this.Pw.Bx(1);this.Pw.Gn(-1);this.Pw.E1(1);this.Aw.H(AxB);this.
FU.At(0);this.J(this.Z,0);this.J(this.QD,0);this.J(this.NP,0);this.J(this.D8,0);
this.J(this.Py,0);this.J(this.Pv,0);this.J(this.Pw,0);this.J(this.Aw,0);this.N.CS(
A.aaL(A.ach.EU));this.Z.Ej=[this,this.G8];this.QD.At([B=this.FU,B.B9,B.B_]);this.
QD.CG(this.FU);this.QD.Akf([this,this.Bjw,this.BkT]);this.NP.Gg([this,this.D3,this.
GG]);this.NP.LT([B=this.NP,B.FJ]);this.NP.LV(A.aaL(A.ach.Edit));this.NP.At([B=this.
ReasonOfLeaving,B.B9,B.B_]);this.NP.CG(this.ReasonOfLeaving);this.NP.Am$(this.Ahf
);this.D8.At([this,this.Am3,this.Ag5]);this.Py.At([B=this.FU,B.B9,B.B_]);this.Py.
CG(this.FU);this.Py.Akf([this,this.BjA,this.Blj]);this.Pv.At([B=this.FU,B.B9,B.B_
]);this.Pv.CG(this.FU);this.Pv.Akf([this,this.A8b,this.ASy]);this.Pw.At([B=this.
FU,B.B9,B.B_]);this.Pw.CG(this.FU);this.Pw.Akf([this,this.Bjp,this.BkB]);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.QD._Done();this.
NP._Done();this.D8._Done();this.Py._Done();this.Pv._Done();this.Pw._Done();this.
Aw._Done();this.FU._Done();this.ReasonOfLeaving._Done();this.Ahf._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit();this.QD.
_ReInit();this.NP._ReInit();this.D8._ReInit();this.Py._ReInit();this.Pv._ReInit(
);this.Pw._ReInit();this.Aw._ReInit();this.FU._ReInit();this.ReasonOfLeaving._ReInit(
);this.Ahf._ReInit();this.N.B0(A.aaR(A.acf.Unregister));this.QD.U(A.aaR(A.acf.Aml
));this.NP.U(A.aaR(A.acf.ReasonOfLeaving));this.D8.U(A.aaR(A.acf.AUY));this.Py.U(
A.aaR(A.acf.A38));this.Pv.U(A.aaR(A.acf.A39));this.Pw.U(A.aaR(A.acf.A4U));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ReasonOfLeaving)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ahf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"
};C.AT0={Ajt:null,Po:null,Aux:AXr,Bh:function(aSize){C.I2.Bh.call(this,aSize);this.
V.H([0,0,aSize[0],40]);this.BR.H([0,40,aSize[0],80]);this.Hn.H([0,this.BR.M[1],40
,this.BR.M[3]]);this.HX.H([aSize[0]-40,this.BR.M[1],aSize[0],this.BR.M[3]]);},Ai:
function(Ae){var F;C.I2.Ai.call(this,Ae);this.Po.L(this.V.AQ);if(!!this.Ajt){if((
F=this.Ajt,F[1].call(F[0]))===-1)this.Po.R(this.Aux+AHw);else this.Po.R((this.Aux+
CL)+(F=this.Ajt,F[1].call(F[0])).toFixed());}else this.Po.R(this.Aux);},A2k:function(
G){this.Am();},Bk3:function(E){if(A.aaZ(this.Ajt,E))return;if(!!this.Ajt)A.z$([this
,this.A2k],this.Ajt,0);this.Ajt=E;if(!!E)A.zX([this,this.A2k],E,0);if(!!E)A.pe([
this,this.A2k],this);},A88:function(E){if(this.Aux===E)return;this.Aux=E;this.Am(
);},_Init:function(aArg){C.I2._Init.call(this,aArg);C.CO._Init.call(this.Po={I:this
},0);this.__proto__=C.AT0;this.H(AXs);this.V.H(AXt);this.V.A4(0x12);this.Po.H(AXu
);this.Po.A4(0x12);this.Po.L(A.jb.Bj);this.J(this.Po,0);this.Po.S(A.aaL(A.fl.Ah)
);this.Po.A8(A.aaL(A.fl.Ak));this.Po.CB(null);},_Done:function(){this.__proto__=
C.I2;this.Po._Done();C.I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(
this);this.Po._ReInit();this.Po.S(A.aaL(A.fl.Ah));this.Po.A8(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.I2._Mark.call(this,D);if((B=this.Ajt)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.ALA={Z:null,JF:null,Sd:null,Aw:null,Ap4:2500,AMP:24,Dw:function(G){var B;var
E7=0;var X=this.AR;switch(this.Cl.CK){case 6:E7=2;break;case 7:E7=7;break;case 4:
E7=4;break;case 5:E7=5;break;default:;}X=this.R5(X,E7,0x414);if(!!X)this.A9(X);if(
!!X&&((X.T&0x400)===0x400))this.Z.Hy(X,true,null,null);},Alz:function(G){A._GetAutoObject(
C.AX).Fl();},Apm:function(G){},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1)
)[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},BkM:function(
E){if(this.Ap4===E)return;this.Ap4=E;},Bjr:function(){return this.Ap4;},BkN:function(
E){if(this.AMP===E)return;this.AMP=E;},Bjs:function(){return this.AMP;},Bjg:function(
G){var F,CM;this.JF.BR.L(this.JF.V.AQ);if(!!this.JF.Q)this.JF.BR.R((((String.fromCharCode(((
F=this.JF.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afg)+String.fromCharCode(((
CM=this.JF.Q,CM[1].call(CM[0]))+10000).toFixed().charCodeAt(2)||0))+CL)+this.JF.
AGp);},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.I2._Init.call(this.JF={
I:this},0);C.I2._Init.call(this.Sd={I:this},0);C.Aw._Init.call(this.Aw={I:this},
0);this.__proto__=C.ALA;this.N.Y(true);this.Dk(C.IA);this.Z.H(E4);this.Z.Kf(1);this.
JF.H(AhD);this.JF.Aj(true);this.JF.U(A.aaR(A.acf.Ap4));this.JF.Bg(false);this.JF.
Gn(0);this.JF.E1(5000);this.JF.Kj(A.aaR(A.acf.AfK));this.JF.KL(A.aaR(A.acf.AfK));
this.JF.ASn(100);this.Sd.H(WV);this.Sd.Aj(true);this.Sd.U(A.aaR(A.acf.A97));this.
Sd.Bg(true);this.Sd.Bx(24);this.Sd.Gn(10);this.Sd.E1(33);this.Sd.Kj(AXv);this.Aw.
H(AxB);this.J(this.Z,0);this.J(this.JF,0);this.J(this.Sd,0);this.J(this.Aw,0);this.
N.CS(A.aaL(A.ach.VE));this.Z.Ej=[this,this.G8];this.JF.At([this,this.Bjr,this.BkM
]);this.JF.A9E([this,this.Bjg]);this.Sd.At([this,this.Bjs,this.BkN]);},_Done:function(
){this.__proto__=C.AB;this.Z._Done();this.JF._Done();this.Sd._Done();this.Aw._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit(
);this.JF._ReInit();this.Sd._ReInit();this.Aw._ReInit();this.JF.U(A.aaR(A.acf.Ap4
));this.JF.Kj(A.aaR(A.acf.AfK));this.JF.KL(A.aaR(A.acf.AfK));this.Sd.U(A.aaR(A.acf.
A97));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.JF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalActionNewbornCareScreen"};C.AqW={EaseOfDelivery:null,BirthType:
null,B$:null,Df:null,Dc:null,Cm:null,D8:null,GU:null,Le:null,M0:0,LP:false,Init:
function(aArg){A.zX([this,this.Gw],this.B$.Q,0);A.zX([this,this.Gw],this.Df.Q,0);
A.zX([this,this.AzR],this.C7.Q,0);A.zX([this,this.BdL],this.Cm.Dd,0);A.zX([this,
this.BdF],this.C6.Q,0);A.zX([this,this.Atq],this.B$.Q,0);A.zX([this,this.Atq],this.
Df.Q,0);A.pe([this,this.AzR],this);A.pe([this,this.Gw],this);A.pe([this,this.BdL
],this);A.pe([this,this.BdF],this);A.pe([this,this.Atq],this);},Eo:function(G){A.
_GetAutoObject(A.Device.Helper).W.Hd();A._GetAutoObject(C.AX).Fl();},AfR:function(
G){var F;A._GetAutoObject(A.Device.Helper).W.DT((F=this.BW.Q,F[1].call(F[0])));if(
!!A._GetAutoObject(A.Device.Helper).Ahi){var Alk=A._GetAutoObject(A.Device.Helper
).Ahi.AOf();A._GetAutoObject(A.Device.Helper).W.AbK(Alk);A._GetAutoObject(A.Device.
Helper).W.Ane(Alk);}var Ak2=A._GetAutoObject(A.Device.Helper).A0G(A._GetAutoObject(
A.Device.Helper).W,(F=this.Dc.HU.Hj,F[1].call(F[0])),A._GetAutoObject(A.Device.Device
).Ap);if(!Ak2){this.AiH();A.pe([this,this.Bvd],this);}else A._GetAutoObject(A.Device.
Helper).AJG(A._GetAutoObject(A.Device.Helper).W,Ak2,(F=this.Dc.HU.Hj,F[1].call(F[
0])),0,[this,this.Apg]);},AtH:function(){this.N.B0(A.jV);this.N.C2(A.aaL(A.ach.AC4
));this.N.Cc=[this,this.Ax_];},AiH:function(){var B;var F;A._GetAutoObject(A.Device.
Helper).W.Ck(A._GetAutoObject(A.Device.Device).Ap);var L1=A._GetAutoObject(A.Device.
Device).Ap.K_(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).Sw(L1);var BcH=false;if(A._GetAutoObject(A.Device.Helper).AmH()){if(A._GetAutoObject(
A.Device.Device).Br.Ld()){BcH=true;A._GetAutoObject(A.Device.Device).A6(50,true,
A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);}else{var BZ=A._NewObject(
A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);BZ.OnSetBodyWeight(this.KC);BZ.OnSetTimestamp(A._GetAutoObject(A.Device.Helper
).W.DateOfBirth);BZ.Ck(A._GetAutoObject(A.Device.Device).Br);}}if(A._GetAutoObject(
A.Device.Helper).A6A()&&(BcH===false)){if(A._GetAutoObject(A.Device.Device).Br.Ld(
))A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).
Br.HA().toFixed(),0,null);else{var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();BZ.
OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BZ.OnSetBodyWeight(this.M0
);BZ.Ck(A._GetAutoObject(A.Device.Device).Br);}}var IM=null;switch((F=this.Dc.HU.
Hj,F[1].call(F[0]))){case 3:IM=[B=A._GetAutoObject(A.Device.Device),B.AvB,B.Ax2];
break;case 2:IM=[B=A._GetAutoObject(A.Device.Device),B.AvC,B.Ax3];break;case 4:case
5:IM=[B=A._GetAutoObject(A.Device.Device),B.Am5,B.Aob];break;default:;}if(!!IM)switch((
F=this.Dc.J9.Vt,F[1].call(F[0]))){case 1:IM[2].call(IM[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}if(!!(F=this.Df.Q,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).A_X(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
Gender.Animal.Gender,(F=this.Df.Q,F[1].call(F[0])),this.Df.Ajv(),this.Df.Ajx());
},ApF:function(G){A._GetAutoObject(C.AX).Fl();},Bvd:function(s){this.ApF(s);},AzM:
function(G){A._GetAutoObject(C.AX).BS(55);},Ag5:function(E){if(this.M0===E)return;
this.M0=E;A.abo([this,this.Am3,this.Ag5],0);},Gw:function(G){if(A._GetAutoObject(
A.Device.Helper).AmH())this.C6.Y(true);else this.C6.Y(false);if(A._GetAutoObject(
A.Device.Helper).A6A())this.D8.Y(true);else this.D8.Y(false);if(this.LP){this.Df.
Y(false);this.B$.U(A.aaR(A.acf.ABU));this.B$.AEh(A.aaL(A.ach.AeP));}else{this.Df.
Y(true);this.B$.U(A.aaR(A.acf.AkG));this.B$.AEh(null);}},AzR:function(G){A._GetAutoObject(
A.Device.Helper).AUH(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LP);},BdL:function(G){A.pe([this,this.Bft],this
);},BdF:function(G){A.pe([this,this.Bft],this);},Bft:function(G){var F,CM,SX;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.D8.Ag9(A._GetAutoObject(
A.Device.Helper).Ahy(A._GetAutoObject(A.Device.Helper).Aa2((F=this.BW.Q,F[1].call(
F[0]))),(CM=this.Cm.Dd,CM[1].call(CM[0])),2,(SX=this.BW.Q,SX[1].call(SX[0]))));break;
case 2:this.D8.Ag9(A._GetAutoObject(A.Device.Helper).Ahy(this.KC,(F=this.Cm.Dd,F[
1].call(F[0])),2,(CM=this.BW.Q,CM[1].call(CM[0]))));break;default:;}},Apg:function(
G){var F;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(
As.Id){case 22:case 21:switch((F=this.Dc.HU.Hj,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.Jx(this.Dc);break;case 0:this.Jx(this.Df);break;case 1:this.Jx(this.
B$);break;default:throw new Error(AxK+(F=this.Dc.HU.Hj,F[1].call(F[0])).toFixed(
));}break;case 43:{this.Jx(this.Dc);this.Jx(this.Df);}break;case 25:case 42:{this.
Jx(this.Dc);this.Jx(this.B$);}break;case 41:break;default:A.ab5("%s%e",Asu,As.Id
);}},Aph:function(G){var F;C.HT.Aph.call(this,G);var Aov=0;switch((F=this.BW.Q,F[
1].call(F[0]))){case 0:case 2:Aov=A._GetAutoObject(A.Device.Device).Adv;break;case
1:Aov=730;break;default:A.ab5("%s%e",AkP,(F=this.BW.Q,F[1].call(F[0])));}(F=this.
Cm.Dd,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dt()-A._GetAutoObject(A.Device.
Helper).Amj(Aov)));(F=this.C6.Q,F[2].call(F[0],this.C6.Any));this.D8.Ag9(A._GetAutoObject(
A.Device.Helper).W.Ahy(1));},AeE:function(E){if(this.LP===E)return;this.LP=E;A.abo([
this,this.AvD,this.AeE],0);},Atq:function(G){var F,CM,SX;this.AeE(((F=this.B$.Q,
F[1].call(F[0]))===(CM=this.Df.Q,CM[1].call(CM[0])))&&!!(SX=this.B$.Q,SX[1].call(
SX[0])));A.pe([this,this.Gw],this);},Am3:function(){return this.M0;},AvD:function(
){return this.LP;},_Init:function(aArg){C.HT._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Avm._Init.call(this.B$={I:this},0);C.Q0._Init.call(this.Df={I:this}
,0);C.AFY._Init.call(this.Dc={I:this},0);C.Sy._Init.call(this.Cm={I:this},0);C.Akw.
_Init.call(this.D8={I:this},0);C.BX._Init.call(this.GU={I:this},0);C.BX._Init.call(
this.Le={I:this},0);this.__proto__=C.AqW;var B;this.Dk(C.ACu);this.CD.H(Acv);this.
B$.H(An0);this.B$.Aj(true);this.B$.U(A.aaR(A.acf.AkG));this.B$.Arf(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.ArW));this.B$.Arg(A.aaR(A.acf.Aj2));this.
Df.H(An0);this.Df.Aj(true);this.Df.U(A.aaR(A.acf.YY));this.Df.Arr(false);this.Dc.
H(AXw);this.Dc.Aj(true);this.Dc.U(A.aaR(A.acf.GD));this.Dc.Bx(0);this.Cm.H(Acv);
this.Cm.Aj(true);this.Cm.U(A.aaR(A.acf.AdT));this.Cm.AEY(true);this.D8.H(Acv);this.
D8.Aj(true);this.D8.U(A.aaR(A.acf.M0));this.D8.Gn(1000);this.D8.E1(999000);this.
GU.H(Acv);this.GU.Aj(true);this.GU.U(A.aaR(A.acf.AqU));this.Le.H(Acv);this.Le.Aj(
true);this.Le.U(A.aaR(A.acf.Agk));this.J(this.B$,-2);this.J(this.Df,-2);this.J(this.
Dc,-2);this.J(this.Cm,-2);this.J(this.D8,-1);this.J(this.GU,0);this.J(this.Le,0);
this.EaseOfDelivery.LU(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LU(A.
_GetAutoObject(A.Device.Helper).W);this.B$.AN=[this,this.Acy];this.B$.LT([this,this.
Acy]);this.B$.LV(A.aaL(A.ach.AeP));this.B$.At([B=A._GetAutoObject(A.Device.Helper
).W,B.Aj4,B.NW]);this.B$.PJ([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.
B$.QS([B=A._GetAutoObject(A.Device.Device),B.AbE,B.Acx]);this.B$.T6([B=A._GetAutoObject(
A.Device.Device),B.Am2,B.Aoa]);this.B$.AeE([this,this.AvD,this.AeE]);this.Df.Gg([
this,this.D3,this.GG]);this.Df.LT([this,this.Acy]);this.Df.LV(A.aaL(A.ach.AeP));
this.Df.T8([B=this.Gender.Animal,B.Wb,B.JI]);this.Df.PJ([B=A._GetAutoObject(A.Device.
Device),B.AbD,B.Acw]);this.Df.QS([B=A._GetAutoObject(A.Device.Device),B.AbE,B.Acx
]);this.Df.T6([B=A._GetAutoObject(A.Device.Device),B.Am2,B.Aoa]);this.Df.At([B=A.
_GetAutoObject(A.Device.Helper).W,B.Am6,B.Na]);this.Df.Am9([B=this.AnimalType.Animal
,B.PH,B.DT]);this.Dc.Gg([this,this.D3,this.GG]);this.Dc.LT([B=this.Dc,B.FJ]);this.
Dc.LV(A.aaL(A.ach.Edit));this.Dc.At([B=A._GetAutoObject(A.Device.Helper).W,B.Aq5
,B.Ub]);this.Dc.A8P(A._GetAutoObject(A.Device.Helper).W);this.Cm.Gg([this,this.D3
,this.GG]);this.Cm.LT([B=this.Cm,B.FJ]);this.Cm.LV(A.aaL(A.ach.Edit));this.Cm.AbN([
B=A._GetAutoObject(A.Device.Helper).W,B.Avy,B.QR]);this.D8.At([this,this.Am3,this.
Ag5]);this.GU.At([B=this.BirthType,B.B9,B.B_]);this.GU.CG(this.BirthType);this.Le.
At([B=this.EaseOfDelivery,B.B9,B.B_]);this.Le.CG(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HT;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.B$._Done();this.Df._Done();this.Dc._Done();this.Cm._Done();this.D8.
_Done();this.GU._Done();this.Le._Done();C.HT._Done.call(this);},_ReInit:function(
){C.HT._ReInit.call(this);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();
this.B$._ReInit();this.Df._ReInit();this.Dc._ReInit();this.Cm._ReInit();this.D8.
_ReInit();this.GU._ReInit();this.Le._ReInit();this.B$.U(A.aaR(A.acf.AkG));this.B$.
Arf(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.ArW));this.B$.Arg(A.aaR(
A.acf.Aj2));this.Df.U(A.aaR(A.acf.YY));this.Dc.U(A.aaR(A.acf.GD));this.Cm.U(A.aaR(
A.acf.AdT));this.D8.U(A.aaR(A.acf.M0));this.GU.U(A.aaR(A.acf.AqU));this.Le.U(A.aaR(
A.acf.Agk));},_Mark:function(D){var B;C.HT._Mark.call(this,D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Le)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalTransponderDataScreen"};C.AGx={H0:null,Ahn:null,Agu:null,
Aho:null,Agv:null,AnimalType:null,Background:null,NR:null,Q8:null,V:null,TF:null
,Yf:null,Abf:null,PG:null,DE:A.jV,AF0:true,CT:function(){this.Am();},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);this.AnI();this.Aw$();},AnI:function(){var F,CM;var
Ly=0;var AlP=0;var Ald=0;var H8=0;if((((!!this.Ahn&&!!this.Aho)&&!!this.Agu)&&!!
this.Agv)&&!!this.AnimalType){AlP=(F=this.Ahn,F[1].call(F[0]));Ald=(F=this.Agu,F[
1].call(F[0]));Ly=A._GetAutoObject(A.Device.Helper).MK((F=this.Aho,F[1].call(F[0
])),(CM=this.Agv,CM[1].call(CM[0])));H8=(F=this.AnimalType,F[1].call(F[0]));}var
K2=A.jb.Text;var Ayq=A.jb.C0;if(!!Ly){var AKS=A._GetAutoObject(A.acj.DN).Ak9(Ly,
AlP,Ald);Ayq=A._GetAutoObject(A.acj.DN).Ay7(AKS,H8);K2=A._GetAutoObject(A.acj.DN
).Ay9(AKS,H8);}this.Background.L(Ayq);this.TF.L(K2);this.Q8.L(K2);this.NR.L(K2);
this.Abf.L(K2);if(K2===A.jb.Bj)this.Yf.L(K2);else this.Yf.L(A.jb.CF);this.V.L(K2
);this.PG.L(K2);},Aw$:function(){var F,CM;var Ly=0;var AlP=0;var Ald=0;if(((!!this.
Ahn&&!!this.Aho)&&!!this.Agu)&&!!this.Agv){AlP=(F=this.Ahn,F[1].call(F[0]));Ald=(
F=this.Agu,F[1].call(F[0]));Ly=A._GetAutoObject(A.Device.Helper).MK((F=this.Aho,
F[1].call(F[0])),(CM=this.Agv,CM[1].call(CM[0])));}if(!!Ly){var AKS=A._GetAutoObject(
A.acj.DN).Ak9(Ly,AlP,Ald);this.Q8.R(A._GetAutoObject(A.Device.Converter).SR(AKS,
2,true));this.NR.Y(true);this.Q8.Y(true);this.PG.Y(false);}else{this.NR.Y(false);
this.Q8.Y(false);this.PG.Y(true);}this.TF.R(this.BxO(Ald-AlP,Ly));this.Abf.Y(this.
AF0);this.Yf.Y(this.AF0);this.NR.R(A._GetAutoObject(A.acj.DN).Z_());},BxO:function(
A0l,AhL){var B;if(AhL<0){A.ab5("%s",AXx);return A.jV;}var Im=(AXy+A._GetAutoObject(
A.acj.DN).AfH())+CL;var FK=A._GetAutoObject(A.Device.Converter).AkL(A0l);if(!A0l
)FK=A.abU(FK,AXz,0);else if(A0l>0)FK=A.abU(FK,AHx,0);Im=this.BeP(Im,AXA,FK);if(AhL===
1)Im=Im+A.aaR(A.acf.Bh7);else{Im=Im+A.aaR(A.acf.Bh8);Im=this.BeP(Im,AXB,AhL.toFixed(
));}return Im;},BeP:function(aString,Bbd,Bwc){if(aString===A.jV){A.ab5("%s",AXC);
return A.jV;}var A11=aString.indexOf(Bbd,0);if(A11>=0){aString=A.ab1(aString,A11
,Bbd.length);aString=A.abU(aString,Bwc,A11);}return aString;},ASO:function(E){if(
A.aaZ(this.Ahn,E))return;if(!!this.Ahn)A.z$([this,this.De],this.Ahn,0);this.Ahn=
E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},Bk0:function(
E){if(A.aaZ(this.Agu,E))return;if(!!this.Agu)A.z$([this,this.De],this.Agu,0);this.
Agu=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},ASP:function(
E){if(A.aaZ(this.Aho,E))return;if(!!this.Aho)A.z$([this,this.De],this.Aho,0);this.
Aho=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},Bk1:function(
E){if(A.aaZ(this.Agv,E))return;if(!!this.Agv)A.z$([this,this.De],this.Agv,0);this.
Agv=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},De:function(
G){this.Am();},U:function(E){if(this.DE===E)return;this.DE=E;this.V.R(E);},A9D:function(
E){if(this.AF0===E)return;this.AF0=E;this.Am();},DT:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.De],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this
},0);C.CO._Init.call(this.NR={I:this},0);A.acg.Text._Init.call(this.Q8={I:this},
0);C.CO._Init.call(this.V={I:this},0);C.CO._Init.call(this.TF={I:this},0);A.acg.
An._Init.call(this.Yf={I:this},0);A.acg.An._Init.call(this.Abf={I:this},0);C.CO.
_Init.call(this.PG={I:this},0);this.__proto__=C.AGx;this.H(Afi);this.Background.
AY(0x3F);this.Background.H(Afi);this.NR.H(AXD);this.NR.R(A._GetAutoObject(A.acj.
DN).Z_());this.NR.A4(0x9);this.NR.L(A.jb.Text);this.Q8.H(AXE);this.Q8.A4(0x14);this.
Q8.R(A.aaR(A.act.Aj0));this.Q8.L(A.jb.Text);this.V.AY(0x1D);this.V.H(AXF);this.V.
R(A.aaR(A.acf.AtX));this.V.A4(0x12);this.V.L(A.jb.Text);this.TF.H(ZR);this.Yf.AY(
0x14);this.Yf.H(AHy);this.Yf.Cu(1);this.Abf.AY(0x14);this.Abf.H(AHy);this.Abf.Cu(
0);this.PG.H(AXG);this.PG.R(A.aaR(A.acf.A3Q));this.J(this.Background,0);this.J(this.
NR,0);this.J(this.Q8,0);this.J(this.V,0);this.J(this.TF,0);this.J(this.Yf,0);this.
J(this.Abf,0);this.J(this.PG,0);this.NR.S(A.aaL(A.fl.EB));this.NR.A8(A.aaL(A.fl.
Ah));this.NR.CB(A.aaL(A.fl.Ie));this.Q8.S(A.aaL(A.fl.Ad6));this.V.S(A.aaL(A.fl.Ah
));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(A.aaL(A.fl.By));this.TF.S(A.aaL(A.fl.Ah));
this.TF.A8(A.aaL(A.fl.Ak));this.TF.CB(A.aaL(A.fl.By));this.Yf.Ax(A.aaL(A.ach.AA1
));this.Abf.Ax(A.aaL(A.ach.AA1));this.H0=A._NewObject(A.Device.Rating,0);this.PG.
S(A.aaL(A.fl.Ah));this.PG.A8(A.aaL(A.fl.Ak));this.PG.CB(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.NR._Done();this.
Q8._Done();this.V._Done();this.TF._Done();this.Yf._Done();this.Abf._Done();this.
PG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.NR._ReInit();this.Q8._ReInit();this.V._ReInit(
);this.TF._ReInit();this.Yf._ReInit();this.Abf._ReInit();this.PG._ReInit();this.
Q8.R(A.aaR(A.act.Aj0));this.V.R(A.aaR(A.acf.AtX));this.PG.R(A.aaR(A.acf.A3Q));this.
NR.S(A.aaL(A.fl.EB));this.NR.A8(A.aaL(A.fl.Ah));this.NR.CB(A.aaL(A.fl.Ie));this.
Q8.S(A.aaL(A.fl.Ad6));this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.
CB(A.aaL(A.fl.By));this.TF.S(A.aaL(A.fl.Ah));this.TF.A8(A.aaL(A.fl.Ak));this.TF.
CB(A.aaL(A.fl.By));this.PG.S(A.aaL(A.fl.Ah));this.PG.A8(A.aaL(A.fl.Ak));this.PG.
CB(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.H0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahn)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Agu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aho)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agv)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AUZ={Animal:null,Rating:null,Cl:null,AD:null,AV:
0,Hc:function(G){var B;if(!this.Animal||!this.Rating)return;var FW=this.AD.GT;var
Cx=(C.AGx.isPrototypeOf(B=this.AD.Ce)?B:null);if(!Cx)return;Cx.DT([B=this.Animal
,B.PH,B.DT]);Cx.Bk0([B=A._GetAutoObject(A.Device.Device),B.AD0,B.AIg]);Cx.Bk1([B=
this.Rating,B.A8s,B.OnSetTimestamp]);switch(FW%this.AV){case 1:{Cx.ASO([B=this.Animal
,B.A73,B.AED]);Cx.ASP([B=this.Animal,B.A8t,B.AE8]);Cx.U(A.aaR(A.acf.AtX));}break;
default:if(this.Animal.AqJ()){Cx.ASO([B=this.Animal,B.ARL,B.Av4]);Cx.ASP([B=this.
Animal,B.AR2,B.Aws]);Cx.U(A.aaR(A.acf.ALe));}else{Cx.ASO([B=this.Animal,B.ARL,B.
Av4]);Cx.ASP([B=this.Animal,B.AR2,B.Aws]);Cx.U(A.aaR(A.acf.BfM));}}if(this.AV>1)
Cx.A9D(true);else Cx.A9D(false);Cx.H(A.abK(Cx.M,[(B=this.AD.M)[2]-B[0],this.AD.GW
]));},Dw:function(G){if(this.AV>0)switch(this.Cl.CK){case 6:this.Cv(this);break;
case 7:this.Cc(this);break;default:this.Cl.NB=true;}},LU:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jn(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jn(1);else{this.Jn(2);this.AD.GX(1);this.
AD.Hy(this.AD.Gi,true,null,null);}if(this.AV>0)this.AD.Abh(0,this.AV-1);},Akg:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AV>0)this.AD.Abh(0,this.AV-1);
},Cv:function(G){if(this.AD.Gi>0)this.AD.GX(this.AD.Gi-1);else this.AD.GX(this.AV-
1);this.AD.Hy(this.AD.Gi,true,null,null);},Cc:function(G){if(this.AD.Gi<(this.AV-
1))this.AD.GX(this.AD.Gi+1);else this.AD.GX(0);this.AD.Hy(this.AD.Gi,true,null,null
);},Jn:function(E){if(this.AV===E)return;this.AV=E;this.AD.Jn(this.AV);A.abo([this
,this.Aq2,this.Jn],0);},Aq2:function(){return this.AV;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BJ._Init.call(this.Cl={I:this},0);A.Core.CI._Init.
call(this.AD={I:this},0);this.__proto__=C.AUZ;this.H(Afi);this.Cl.Filter=147;this.
AD.AY(0x3F);this.AD.H(Afi);this.AD.NU(C.AGx);this.AD.AeH(160);this.AD.GX(0);this.
AD.Jn(2);this.J(this.AD,0);this.Cl.BK=[this,this.Dw];this.Cl.DS=[this,this.Dw];this.
AD.Hc=[this,this.Hc];},_Done:function(){this.__proto__=A.Core.O;this.Cl._Done();
this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Cl._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.D_={Init:function(aArg){},Bh:function(aSize){C.Ci.Bh.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Ci.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((
Ae&0x20)===0x20);var Gt=this.Bl.Bv;var FG=A.jb.CF;var GJ=A.jb.Text;if(this.Hb){FG=
A.jb.C0;GJ=A.jb.Text;}if(!G6){this.Background.L(A.jb.C0);this.V.L(A.jb.CF);}else
if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(Fh){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.L(FG);this.V.L(GJ);}this.LB=G6;
this.Ky=Fh;this.Qg=Gt;},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=
C.D_;this.H(JP);this.V.H(BC);this.Y_(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.Aes={KD:null,Gz:A.jV,Bh:function(aSize){C.D_.Bh.call(this,aSize);this.KD.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.D_.Ai.call(this,Ae);this.KD.
L(this.V.AQ);},Init:function(aArg){},AbJ:function(E){if(this.Gz===E)return;this.
Gz=E;this.KD.R(E);},_Init:function(aArg){C.D_._Init.call(this,aArg);C.CO._Init.call(
this.KD={I:this},0);this.__proto__=C.Aes;this.H(JP);this.Background.H(JP);this.V.
H(Acr);this.V.R(Lr);this.KD.H(JQ);this.KD.R(AXH);this.J(this.KD,0);this.V.S(A.aaL(
A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(null);this.KD.S(A.aaL(A.fl.Ah));this.
KD.A8(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.
KD._Done();C.D_._Done.call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.
KD._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.KD.S(A.aaL(
A.fl.Ah));this.KD.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D_._Mark.call(this
,D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Avm={ABu:null,Q:null,FP:null,Fy:null,Ib:null,LP:null,An:null,ED:null,ANt:A.jV
,ANu:A.jV,Bh:function(aSize){C.Aes.Bh.call(this,aSize);if(!this.ABu)this.KD.H([].
concat(0,this.KD.M.slice(1,4)));else this.KD.H([].concat(this.An.M[2],this.KD.M.
slice(1,4)));},Ai:function(Ae){var F,CM,SX;C.Aes.Ai.call(this,Ae);var BbG=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.AoT)this.AbJ(this.ANt);else
this.AbJ(this.ANu);}else{this.AbJ(A._GetAutoObject(A.Device.Converter).SK((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ib&&!!this.FP)&&!!this.Fy)&&!!this.LP)&&(((F=this.
Ib,F[1].call(F[0]))===1)||(!(CM=this.Ib,CM[1].call(CM[0]))&&(SX=this.LP,SX[1].call(
SX[0])))))BbG=true;}}this.ED.Y(BbG);this.An.L(this.V.AQ);A.pe([this,this.AfN],this
);},De:function(G){this.Am();},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)
A.pe([this,this.De],this);},AEh:function(E){if(this.ABu===E)return;this.ABu=E;this.
An.Ax(E);this.Bid();},PJ:function(E){if(A.aaZ(this.FP,E))return;if(!!this.FP)A.z$([
this,this.Aai],this.FP,0);this.FP=E;if(!!E)A.zX([this,this.Aai],E,0);if(!!E)A.pe([
this,this.Aai],this);},QS:function(E){if(A.aaZ(this.Fy,E))return;if(!!this.Fy)A.
z$([this,this.Aaj],this.Fy,0);this.Fy=E;if(!!E)A.zX([this,this.Aaj],E,0);if(!!E)
A.pe([this,this.Aaj],this);},Aaj:function(G){this.Am();},Aai:function(G){this.Am(
);},T6:function(E){if(A.aaZ(this.Ib,E))return;if(!!this.Ib)A.z$([this,this.Aly],
this.Ib,0);this.Ib=E;if(!!E)A.zX([this,this.Aly],E,0);if(!!E)A.pe([this,this.Aly
],this);},Aly:function(G){this.Am();},AfN:function(G){var F,CM;if((!this.Ib||!this.
FP)||!this.Fy)return;var A1K=this.KD.AeS([(this.KD.String.length-(F=this.Fy,F[1].
call(F[0])))-(CM=this.FP,CM[1].call(CM[0])),0]);var A24=this.KD.AeS([this.KD.String.
length-(F=this.Fy,F[1].call(F[0])),0]);var AAx=this.KD.Db(0x0);this.ED.H([A1K[0]-
1,AAx[1],A24[0]+1,AAx[3]]);},Arf:function(E){if(this.ANt===E)return;this.ANt=E;this.
Am();},Arg:function(E){if(this.ANu===E)return;this.ANu=E;this.Am();},AeE:function(
E){if(A.aaZ(this.LP,E))return;if(!!this.LP)A.z$([this,this.A2r],this.LP,0);this.
LP=E;if(!!E)A.zX([this,this.A2r],E,0);if(!!E)A.pe([this,this.A2r],this);},A2r:function(
G){this.Am();},_Init:function(aArg){C.Aes._Init.call(this,aArg);A.acg.An._Init.call(
this.An={I:this},0);A.acg.Cz._Init.call(this.ED={I:this},0);this.__proto__=C.Avm;
this.An.H(Ahz);this.ED.H(AXI);this.ED.NX(2);this.ED.L(A.jb.ET);this.J(this.An,0);
this.J(this.ED,0);this.KD.QT([this,this.AfN]);},_Done:function(){this.__proto__=
C.Aes;this.An._Done();this.ED._Done();C.Aes._Done.call(this);},_ReInit:function(
){C.Aes._ReInit.call(this);this.An._ReInit();this.ED._ReInit();},_Mark:function(
D){var B;C.Aes._Mark.call(this,D);if((B=this.ABu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ib)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.ED)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Jw:0,Aah:4,BcS:true,BcR:false,BbN:true,BcK:false,AlD:function(
G){C.QZ.AlD.call(this,G);if(A._GetAutoObject(A.Device.Helper).BcJ()){this.Jw=A._GetAutoObject(
A.Device.Helper).Uj.Id;var Aic=A._GetAutoObject(A.Device.Helper).AQu(this.Jw);if(
Aic)A._GetAutoObject(A.Device.Device).A6(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A2v]);else{this.Aah=A._GetAutoObject(A.Device.
Helper).AQv(this.Jw);var Bdc=false;if((this.Aah===3)||(this.Aah===2))Bdc=A._GetAutoObject(
A.Device.Helper).A6B(this.Jw,A._GetAutoObject(A.Device.Helper).W);if(Bdc)A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).SK(this.Jw),0,null
);else switch(this.Aah){case 2:{var BM=A._GetAutoObject(A.Device.Converter).Aw9(
this.Jw);A._GetAutoObject(A.Device.Device).A6(46,true,BM.toFixed(),0,[this,this.
A2v]);}break;case 3:case 1:case 0:case 4:this.A3i();break;default:throw new Error(
AHz+this.Aah.toFixed());}}}},Eo:function(G){A._GetAutoObject(C.AX).Fl();},AIi:function(
s){this.Eo(s);},A3i:function(){if((this.Aah===3)||(this.Aah===2)){if((this.BbN&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Jw)){A._GetAutoObject(A.Device.Device).A6(69,true,A.jV,0,[this
,this.A2v]);return;}else this.BAh();}A._GetAutoObject(A.Device.Helper).W.NW(this.
Jw);this.BcK=true;this.BAj();this.Eo(this);},A2v:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A3i();break;case 107:switch(As.PopupState){case 7:{this.A3i();A._GetAutoObject(A.
Device.Helper).Bm9(this.Jw);}break;case 8:this.Eo(this);break;default:;}break;case
69:if(As.PopupState===4)this.Eo(this);break;default:A.ab5("%s%e",AHA,As.Id);}},BAh:
function(){A._GetAutoObject(A.Device.Helper).W.Na(this.Jw);if(this.BcR&&(A._GetAutoObject(
A.Device.Converter).Acg(this.Jw)===10)){var Bbs=Math.trunc((this.Jw%1000000000000
)/10000000000);if(!Bbs&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.DT(0);else if((Bbs===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.DT(2);}},BAj:function(){if(this.
BcS){A._GetAutoObject(A.Device.Helper).W.Ub(A._GetAutoObject(A.Device.Helper).BfY(
A._GetAutoObject(A.Device.Device).Ahv,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ahv===1)A._GetAutoObject(A.Device.Helper).A_Y();
}},_Init:function(aArg){C.QZ._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Y(true);this.Dk(C.IA);this.Number.R(A.aaR(A.acf.OM));this.I6.H(AXJ);this.
II.H(WH);this.Aki(1);this.N.Cv=[this,this.AIi];this.N.CS(A.aaL(A.ach.EU));},_ReInit:
function(){C.QZ._ReInit.call(this);this.Number.R(A.aaR(A.acf.OM));},_className:"Application::SetTransponderScreen"
};C.ACF={Gc:null,Li:null,Kd:null,CT:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.Et.Ai.call(this,Ae);this.Li.R(A._GetAutoObject(A.acj.DN
).AfH());this.Kd.R(A._GetAutoObject(A.acj.DN).Z_());},_Init:function(aArg){C.Et.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gc={I:this},0);A.acg.Text._Init.
call(this.Li={I:this},0);A.acg.Text._Init.call(this.Kd={I:this},0);this.__proto__=
C.ACF;this.Background.L(A.jb.Text);this.Gc.H(AXK);this.Gc.A4(0x11);this.Gc.R(A.aaR(
A.acf.Date));this.Gc.L(A.jb.Bj);this.Li.H(AXL);this.Li.A4(0x11);this.Li.L(A.jb.Bj
);this.Kd.H(AXM);this.Kd.L(A.jb.Bj);this.J(this.Gc,0);this.J(this.Li,0);this.J(this.
Kd,0);this.Gc.S(A.aaL(A.fl.Ah));this.Li.S(A.aaL(A.fl.Ah));this.Kd.S(A.aaL(A.fl.Ah
));this.Init(aArg);},_Done:function(){this.__proto__=C.Et;this.Gc._Done();this.Li.
_Done();this.Kd._Done();C.Et._Done.call(this);},_ReInit:function(){C.Et._ReInit.
call(this);this.Gc._ReInit();this.Li._ReInit();this.Kd._ReInit();this.Gc.R(A.aaR(
A.acf.Date));this.Gc.S(A.aaL(A.fl.Ah));this.Li.S(A.aaL(A.fl.Ah));this.Kd.S(A.aaL(
A.fl.Ah));this.CT();},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.
Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AGB={Mc:null,Hg:null,H4:null,AP:null,A_:null,FK:0,H8:0,Air:false,Init:function(
aArg){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hg.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hg.M[2]-1,0,this.Hg.M[2]+1,aSize[
1]]);this.Mc.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H4.H(this.Mc.M);
},Ai:function(Ae){C.Bc.Ai.call(this,Ae);if(this.Air){this.H4.R(Ra);this.H4.L(A.jb.
Text);this.Mc.L(this.Background.AQ);}else{this.H4.R(A._GetAutoObject(A.Device.Converter
).SR(this.FK,2,true));this.H4.L(A._GetAutoObject(A.acj.DN).Ay9(this.FK,this.H8));
this.Mc.L(A._GetAutoObject(A.acj.DN).Ay7(this.FK,this.H8));}this.Hg.L(this.V.AQ);
},Cd:function(Ad){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var Ala=this.AZ.Hz(
Ad,6);var AlI=this.AZ.CC(Ad,8);if(this.Hu>0){var Bxm=this.AZ.Hz(this.Hu-1,6);var
BzW=this.AZ.CC(this.Hu-1,8);var Ly=A._GetAutoObject(A.Device.Helper).MK(Bxm,Ala);
if(!!Ly){this.Air=false;this.FK=A._GetAutoObject(A.acj.DN).Ak9(Ly,BzW,AlI);}else{
this.Air=true;this.FK=0;}}else{this.Air=true;this.FK=0;}this.U(A._GetAutoObject(
A.acj.KE).AB9(Ala));this.Hg.R(A._GetAutoObject(A.Device.Converter).AkL(AlI));this.
H8=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.call(this.Mc={I:this},0);A.acg.Text.
_Init.call(this.Hg={I:this},0);A.acg.Text._Init.call(this.H4={I:this},0);A.acg.AJ.
_Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);this.__proto__=
C.AGB;this.V.H(OY);this.Mc.H(Asx);this.Hg.H(AHB);this.Hg.A4(0x12);this.Hg.R(SV);
this.Hg.L(A.jb.Text);this.H4.H(AHC);this.H4.R(SV);this.H4.L(A.jb.Text);this.AP.H(
An4);this.AP.L(A.jb.Bd);this.A_.H(An5);this.A_.L(A.jb.Bd);this.J(this.Mc,0);this.
J(this.Hg,0);this.J(this.H4,0);this.J(this.AP,0);this.J(this.A_,0);this.Hg.S(A.aaL(
A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Bc;this.Mc._Done();this.Hg._Done();this.H4._Done();this.AP._Done();this.A_._Done(
);C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.Mc._ReInit(
);this.Hg._ReInit();this.H4._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hg.
S(A.aaL(A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.
call(this,D);if((B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bf:null,VC:null,Ahu:null,SI:null
,KG:A.jV,CT:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var Ly=
A._GetAutoObject(A.Device.Helper).MK(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!Ly){var FK=A._GetAutoObject(
A.acj.DN).Ak9(Ly,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var Adr=A.aaR(A.acf.Bga);Adr=A._GetAutoObject(
A.Device.Helper).Nd(Adr,P0,A._GetAutoObject(A.Device.Converter).SR(FK,2,true));Adr=
A._GetAutoObject(A.Device.Helper).Nd(Adr,Axs,A._GetAutoObject(A.acj.DN).Z_());this.
SI.R(Adr);this.Ahu.L(A._GetAutoObject(A.acj.DN).Ay7(FK,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SI.L(A._GetAutoObject(A.acj.DN).Ay9(FK,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SI.R(A.aaR(A.acf.AUX));this.Ahu.L(A.jb.
AQh);this.SI.L(A.jb.Text);}},Cw:function(G){var Fj=A._NewObject(A.Device.Filter,
0);var HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fj.CX(HQ);var AcP=A._NewObject(A.Device.Int32FilterCriterion
,0);AcP.Initialize(8,2,0,true);Fj.CX(AcP);A._GetAutoObject(A.Device.Device).Br.Bi(
Fj);this.AwR(this);},EV:function(G){A._GetAutoObject(A.Device.Device).Br.Bi(null
);},AwR:function(G){this.Bf=A._NewObject(C.FT,0);this.Bf.NU(C.AGB);this.Bf.H(AxH
);this.Bf.Y6(A._GetAutoObject(A.Device.Device).Br);this.Bf.Du(this.KG);this.J(this.
Bf,0);this.A9(this.Bf);},Am1:function(G){A._GetAutoObject(C.AX).Fl();},Du:function(
E){if(this.KG===E)return;this.KG=E;if(!!this.Bf)this.Bf.Du(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ACF._Init.call(this.VC={I:this},0);A.acg.AJ._Init.
call(this.Ahu={I:this},0);A.acg.Text._Init.call(this.SI={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Ca);this.N.Y(true);this.Dk(C.IA);this.VC.H(
P1);this.KG=A.aaR(A.acf.Aj1);this.Ahu.AY(0x1D);this.Ahu.H(JQ);this.SI.AY(0x1D);this.
SI.H(JQ);this.SI.A4(0x12);this.SI.R(SV);this.J(this.VC,0);this.J(this.Ahu,0);this.
J(this.SI,0);this.N.Cv=[this,this.Am1];this.N.CS(A.aaL(A.ach.EU));this.SI.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.AB;this.VC._Done();this.Ahu._Done(
);this.SI._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VC._ReInit();this.Ahu._ReInit();this.SI._ReInit();this.Du(A.aaR(A.acf.Aj1
));this.SI.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ahu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SI
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
L_={DI:null,Acb:null,AQU:11,Go:0,A37:true,AA9:false,IP:function(G){if(A._GetAutoObject(
A.Device.Device).Ap.Cb()>0)this.Jo(4);else A._GetAutoObject(A.Device.Device).A6(
30,true,A.jV,0,null);},Cw:function(G){if(this.DI.Azg())this.DI.AcO();else if((this.
Go===2)&&A._GetAutoObject(A.Device.Helper).W.Aqs())this.Jo(5);else this.Jo(1);},
EV:function(G){this.AKs();},Eo:function(G){this.Jo(0);A._GetAutoObject(C.AX).Fl(
);},BAw:function(){A._GetAutoObject(A.Device.Device).Ahm();},AKs:function(){A._GetAutoObject(
A.Device.Device).AnA();},A8S:function(E){if(this.AA9===E)return;this.AA9=E;A.abo([
this,this.Bjk,this.A8S],0);},Jo:function(E){var B;if(this.Go===E)return;this.Go=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).Akr();A.zX([this,this.AJV]
,[B=A._GetAutoObject(A.Device.Helper),B.Aq3,B.Akh],0);A.z$([this,this.AzJ],[B=this.
DI,B.Am8,B.Jo],0);this.BAw();}break;case 3:{A.z$([this,this.AJV],[B=A._GetAutoObject(
A.Device.Helper),B.Aq3,B.Akh],0);this.AKs();this.Byw();}break;case 2:{A._GetAutoObject(
A.Device.Helper).ArR();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A37)this.BAk();else this.BAn();}break;case 4:{A.z$([this,this.AJV],[B=A._GetAutoObject(
A.Device.Helper),B.Aq3,B.Akh],0);this.AKs();A._GetAutoObject(A.Device.Helper).ArR(
);A.zX([this,this.BdW],[B=A._GetAutoObject(A.Device.Device),B.AvI,B.Ax7],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.AQU);}break;case 5:this.Be9();break;case
6:{A.zX([this,this.AzJ],[B=this.DI,B.Am8,B.Jo],0);this.DI.AcO();}break;case 0:{A.
z$([this,this.AJV],[B=A._GetAutoObject(A.Device.Helper),B.Aq3,B.Akh],0);this.AKs(
);}break;default:throw new Error(AxL);}A.abo([this,this.Am8,this.Bu3],0);},Bu3:function(
Aq){this.Jo(Aq);},AJV:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uj){if(
this.Go===1)this.Jo(3);else A.ab5("%s%e",AXN,this.Go);}else A.ab5("%s",AHD);},BAk:
function(){A._GetAutoObject(A.Device.Device).A6(13,true,A._GetAutoObject(A.Device.
Helper).AkH(A._GetAutoObject(A.Device.Helper).Uj.Id).toFixed(),0,[this,this.ByK]
);},ByK:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.BbR(false))A._GetAutoObject(
C.AX).BS(31);else{A._GetAutoObject(A.Device.Helper).Akr();this.Jo(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).Akr();this.Jo(1);}},
BbR:function(AiH){if(A._GetAutoObject(A.Device.Device).Ap.Ld()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).Ap.HA().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(
A.Device.Helper).ApT(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.NW(A._GetAutoObject(A.Device.Helper).Uj.Id);if(!!A._GetAutoObject(A.Device.
Helper).Ahi){var Alk=A._GetAutoObject(A.Device.Helper).Ahi.AOf();A._GetAutoObject(
A.Device.Helper).W.AbK(Alk);A._GetAutoObject(A.Device.Helper).W.Ane(Alk);}if(A._GetAutoObject(
A.Device.Helper).AQv(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Na(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.Ub(A._GetAutoObject(A.Device.Helper).BfX(A._GetAutoObject(A.Device.
Device).Aga,A._GetAutoObject(A.Device.Helper).W));if(AiH){A._GetAutoObject(A.Device.
Helper).W.Ck(A._GetAutoObject(A.Device.Device).Ap);var L1=A._GetAutoObject(A.Device.
Device).Ap.K_(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).Sw(L1);if(A._GetAutoObject(A.Device.Helper).AmH()){if(A._GetAutoObject(A.
Device.Device).Br.Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);else{var BZ=A._NewObject(A.Device.Rating
,0);BZ.Gf();BZ.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BZ.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Aa2(A._GetAutoObject(A.Device.Helper).W.AnimalType
));BZ.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);BZ.Ck(A._GetAutoObject(
A.Device.Device).Br);}}if(!A._GetAutoObject(A.Device.Device).Aga)A._GetAutoObject(
A.Device.Helper).A_Y();}return true;},Byw:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uj){var AIJ=true;if(A._GetAutoObject(A.Device.Helper).Uj.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AIJ=A._GetAutoObject(A.Device.Helper).A6N(A._GetAutoObject(
A.Device.Helper).Uj.Id);if(!AIJ&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BbR(true);AIJ=A._GetAutoObject(A.Device.Helper).A6N(A._GetAutoObject(A.
Device.Helper).Uj.Id);}}if(AIJ)this.Jo(5);else this.Jo(2);}else{A.ab5("%s",AHD);
return;}},BdW:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AQU){A.z$([this,this.BdW],[B=A._GetAutoObject(A.Device.Device),B.AvI,B.Ax7
],0);if(A._GetAutoObject(A.Device.Helper).W.Aqs())this.Jo(5);else this.Jo(1);}},
Be9:function(){if(this.AA9===true)this.Jo(6);else A._GetAutoObject(C.AX).BS(24);
},BAn:function(){A._GetAutoObject(A.Device.Device).A6(36,true,A.jV,0,[this,this.
BzB]);},BzB:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).Akr();this.Jo(1);}},AzJ:function(G){if(!this.DI.Go)this.Jo(1);},A2j:function(G
){},Bvb:function(s){this.A2j(s);},Bjk:function(){return this.AA9;},Am8:function(
){return this.Go;},_Init:function(aArg){C.QZ._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acb={I:this},0);this.__proto__=C.L_;this.N.Y(true);this.Dk(C.Aqt);this.
Number.H(AXO);this.Number.R(A.aaR(A.acf.A_p));this.I6.H(AXP);this.II.H(AXQ);this.
Acb.H(AXR);this.Acb.R(AXS);this.Acb.L(A.jb.Text);this.J(this.Acb,0);this.N.Cv=[this
,this.Eo];this.N.Ch=[this,this.Bvb];this.N.CS(A.aaL(A.ach.EU));this.Number.S(A.aaL(
A.fl.Ah));this.Acb.S(A.aaL(A.fl.Hk));this.DI=A._GetAutoObject(C.DI);},_Done:function(
){this.__proto__=C.QZ;this.Acb._Done();C.QZ._Done.call(this);},_ReInit:function(
){C.QZ._ReInit.call(this);this.Acb._ReInit();this.Number.R(A.aaR(A.acf.A_p));this.
Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.QZ._Mark.call(this,D);if((B=
this.DI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A3U={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,AoO:-1,Go:0,BwA:function(){var BeQ=false;
var Of=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Br.Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Br.HA().toFixed(),0,null);else if(Of){BeQ=true;var BZ=A._NewObject(
A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AwN(BZ,5);BZ.OnSetAppearance(3);BZ.Ck(A._GetAutoObject(
A.Device.Device).Br);}else{var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AwN(BZ
,5);BZ.OnSetAppearance(1);BZ.Ck(A._GetAutoObject(A.Device.Device).Br);}A._GetAutoObject(
A.Device.Helper).W.EC(A._GetAutoObject(A.Device.Helper).W.CH,A._GetAutoObject(A.
Device.Device).Ap);if(BeQ)A._GetAutoObject(A.Device.Helper).W.T_(false);if(Of)A.
_GetAutoObject(A.Device.Helper).W.Anu(false);else A._GetAutoObject(A.Device.Helper
).W.Anu(true);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.Device
).Ap);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A6(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MR]);else A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MR]);},BwC:function(){A._GetAutoObject(
A.Device.Helper).W.AFW(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.Device).Ap);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MR]);else A._GetAutoObject(
A.Device.Device).A6(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MR]);},Qa:function(Ev){switch(Ev){case 4:this.BwA();break;case
128:A._GetAutoObject(C.AX).BS(7);break;case 16:A._GetAutoObject(C.AX).BS(36);break;
case 1:A._GetAutoObject(C.AX).BS(10);break;case 2:A._GetAutoObject(C.AX).BS(11);
break;case 8:this.BwC();break;case 64:A._GetAutoObject(C.AX).BS(29);break;case 32:
A._GetAutoObject(C.AX).BS(54);break;case 256:A._GetAutoObject(C.AX).BS(21);break;
case 512:A._GetAutoObject(C.AX).BS(30);break;case 1024:this.Byt();break;case 262144:
this.BAM();break;case 2048:this.AcO();break;case 4096:this.BbJ(false);break;case
8192:this.BwB();break;case 16384:this.Bys();break;case 32768:this.Bw1();break;case
524288:this.Bw2();break;case 65536:this.Bxp();break;case 131072:this.BAa();break;
case 0:break;default:throw new Error(AXT);}},BbT:function(Ev,Bv7){var EI=A._NewObject(
C.V1,0);EI.AbI(false);EI.Aj(true);EI.AN=Bv7;EI.Bkq(Ev);switch(Ev){case 1:{EI.U(A.
aaR(A.acf.AnC));EI.Dz(A.aaL(A.ach.AK6));}break;case 2:{EI.U(A.aaR(A.acf.A9$));EI.
Dz(A.aaL(A.ach.AK7));}break;case 4:{EI.U(A.aaR(A.acf.Alarm));EI.Dz(A.aaL(A.ach.AK8
));EI.AEV(true);}break;case 8:{EI.U(A.aaR(A.acf.ArD));EI.Dz(A.aaL(A.ach.AK9));EI.
AEV(true);}break;case 16:{EI.U(A.aaR(A.acf.ALH));EI.Dz(A.aaL(A.ach.AK_));}break;
case 32:{EI.U(A.aaR(A.acf.AnimalLoss));EI.Dz(A.aaL(A.ach.AK$));}break;case 64:{EI.
U(A.aaR(A.acf.Unregister));EI.Dz(A.aaL(A.ach.ALa));}break;case 128:{EI.U(A.aaR(A.
acf.Edit));EI.Dz(A.aaL(A.ach.ALb));}break;case 256:{EI.U(A.aaR(A.acf.Weighing));
EI.Dz(A._GetAutoObject(A.acj.DN).Bx4());}break;case 512:{EI.U(A.aaR(A.acf.ARh));
EI.Dz(A.aaL(A.ach.AKY));}break;case 1024:{EI.U(A.aaR(A.acf.LinkTransponder));EI.
Dz(A.aaL(A.ach.AKZ));}break;case 262144:{EI.U(A.aaR(A.acf.UnlinkTransponder));EI.
Dz(A.aaL(A.ach.AK5));}break;case 2048:{EI.U(A.aaR(A.acf.Tj));EI.Dz(A.aaL(A.ach.AK0
));}break;case 4096:{EI.U(A.aaR(A.acf.Calving));EI.Dz(A.aaL(A.ach.AK1));}break;case
8192:{EI.U(A.aaR(A.acf.DryOff));EI.Dz(A.aaL(A.ach.AK2));EI.AEV(true);}break;case
16384:{EI.U(A.aaR(A.acf.Bg$));EI.Dz(A.aaL(A.ach.AK3));}break;case 131072:{EI.U(A.
aaR(A.acf.Bnj));EI.Dz(A.aaL(A.ach.AK4));}break;default:A.ab5("%s",(AXU+Ev.toFixed(
))+AXV);}return EI;},BxC:function(){this.AoO=this.AoO+1;if(this.AoO>=this.AutoActions.
NJ())this.Jo(0);else this.Jo(2);},Bz0:function(){this.AoO=-1;},Azg:function(){return(
this.AoO>-1)&&!this.Bym();},Bym:function(){return this.AoO>=this.AutoActions.NJ(
);},Jo:function(E){if(this.Go===E)return;this.Go=E;switch(E){case 1:this.BxC();break;
case 2:{var Z1=this.AutoActions.Oz(this.AoO);if(this.A3R(A._GetAutoObject(A.Device.
Helper).W,Z1))this.Qa(Z1);else A._GetAutoObject(A.Device.Device).A6(64,true,(this.
ActionToString.Lp(Z1)+Asv)+this.AnimalTypeToString.Lp(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MR]);}break;case 0:this.Bz0();break;default:throw new
Error(AxL);}A.abo([this,this.Am8,this.Jo],0);},MR:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
BbJ(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.AX).BS(50);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Azg())this.
Jo(1);},BbL:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Ap.K_(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Byt:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.AX).BS(
50);else A._GetAutoObject(A.Device.Device).A6(32,true,A.jV,0,[this,this.MR]);},AcO:
function(){this.Jo(1);},BzY:function(){var Of=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Of&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Br.
Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device
).Br.HA().toFixed(),0,null);else{var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();
BZ.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AwN(BZ,5);BZ.Ck(A._GetAutoObject(A.Device.Device).Br);}}A._GetAutoObject(
A.Device.Helper).W.EC(A._GetAutoObject(A.Device.Helper).W.CH,A._GetAutoObject(A.
Device.Device).Ap);A._GetAutoObject(A.Device.Helper).W.T_(false);if(Of)A._GetAutoObject(
A.Device.Helper).W.Anu(false);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MR]);},BzZ:function(){A._GetAutoObject(
A.Device.Helper).W.AFW(false);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A6(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MR]);},BbJ:function(BxG){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BxG===false))A._GetAutoObject(A.Device.
Device).A6(63,true,A.jV,0,[this,this.MR]);else A._GetAutoObject(C.AX).BS(62);},BwB:
function(){A._GetAutoObject(A.Device.Helper).W.Arn(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.Device
).Ap);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A6(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MR]);else A._GetAutoObject(A.Device.Device).A6(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MR]);},Bys:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.AX).BS(92);else A._GetAutoObject(A.
Device.Device).A6(69,true,A.jV,0,[this,this.MR]);},Bw1:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjK(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ag8(false);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.
Device).Ap);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MR
]);}else{A._GetAutoObject(A.Device.Helper).W.AeF(false);A._GetAutoObject(A.Device.
Helper).W.Ck(A._GetAutoObject(A.Device.Device).Ap);A._GetAutoObject(A.Device.Device
).A6(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MR]);}}},Bxp:function(){A._GetAutoObject(A.Device.Helper).W.Ag8(false);A._GetAutoObject(
A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.Device).Ap);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjK(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ag8(false);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.
Device).Ap);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MR
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A6(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MR]);else A._GetAutoObject(A.Device.Device).A6(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MR]);}},A3R:function(EE,Ev
){var Qk=false;switch(Ev){case 32768:Qk=EE.IsRegistrationNoticePending&&!!EE.NaisIdMother;
break;case 524288:Qk=EE.IsRegistrationNoticePending&&!EE.NaisIdMother;break;case
4096:case 8192:switch(EE.AnimalType){case 1:Qk=true;break;default:;}break;case 512:
switch(EE.AnimalType){case 0:Qk=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qk=true;break;default:A.ab5("%s",AXW+
Ev.toFixed());}return Qk;},BAa:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.AX).BS(91);else A._GetAutoObject(A.Device.Device).A6(
69,true,A.jV,0,[this,this.MR]);},BAM:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A6(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MR]);else{A._GetAutoObject(A.
Device.Helper).W.NW(0);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.
Device.Device).Ap);A._GetAutoObject(A.Device.Device).A6(86,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MR]);}},Bw2:function(){if(
A._GetAutoObject(A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(
A.Device.Helper).W.AeF(false);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A6(98,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MR]);}},Am8:function(){return this.
Go;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A3U;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALg={AaC:null,ApU:null,Jo:function(E){if(this.Go===E)return;C.L_.Jo.call(this
,E);switch(E){case 1:this.Dk(C.Aqt);break;case 5:case 6:this.Dk(C.IA);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AxL);}},A2j:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.L_._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaC={I:this},0);C.ALh._Init.call(this.ApU={I:this
},0);this.__proto__=C.ALg;this.A8S(true);this.AaC.H(AXX);this.AaC.R(A.aaR(A.acf.
Tj));this.AaC.L(A.jb.Text);this.ApU.H(AXY);this.J(this.AaC,0);this.J(this.ApU,0);
this.N.Cn(A.aaL(A.ach.Abc));this.AaC.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.L_;this.AaC._Done();this.ApU._Done();C.L_._Done.call(this);},_ReInit:function(
){C.L_._ReInit.call(this);this.AaC._ReInit();this.ApU._ReInit();this.AaC.R(A.aaR(
A.acf.Tj));this.AaC.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L_._Mark.call(
this,D);if((B=this.AaC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H7:null,JO:null,A2j:function(G){if(this.H7.NO(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.L_._Init.call(this,aArg);A.acg.Text._Init.call(this.
JO={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JO.H(AXZ);this.JO.KM(
true);this.JO.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.AAW));this.
JO.L(A.jb.Text);this.J(this.JO,0);this.N.Cn(A.aaL(A.ach.Abc));this.JO.S(A.aaL(A.
fl.Ah));this.H7=A._GetAutoObject(C.Pc);},_Done:function(){this.__proto__=C.L_;this.
JO._Done();C.L_._Done.call(this);},_ReInit:function(){C.L_._ReInit.call(this);this.
JO._ReInit();this.JO.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.AAW
));this.JO.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L_._Mark.call(this,D);if((
B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JO)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALh={Z:null,Init:
function(aArg){var B;A.zV([this,this.AAH],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.AtW],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.AAH],this);
A.pe([this,this.AtW],this);this.H(A.abK(this.M,AX0));this.Z.H(A.abK(this.Z.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AX1)));},Bbz:function(G){var B;var Ak_=0;var AyJ=0;
var BbP;var X=this.Z.Ag;var Cs=null;BbP=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NJ()*58))/2)|0;while(!!X&&!((X.T&0x200)===0x200)){Cs=(C.V1.isPrototypeOf(
X)?X:null);if(((X.T&0x400)===0x400)&&!!Cs){Cs.H(A.abK(Cs.M,AX2));Cs.H(A.abM(Cs.M
,(AyJ*58)+BbP));Cs.H(A.abO(Cs.M,Ak_*58));if(AyJ>=3){Ak_=Ak_+1;AyJ=0;}else AyJ=AyJ+
1;}X=X.Ag;}this.A9(null);},A0L:function(Ev){var EI=A._GetAutoObject(C.DI).BbT(Ev
,null);this.J(EI,0);this.Bbz(this);},AoC:function(){var B;var X=this.Z.Ag;while(
!!X&&!((X.T&0x200)===0x200)){var Adp=X;X=X.Ag;if(((Adp.T&0x400)===0x400))this.HI(
Adp);}},AAH:function(G){this.AoC();var P;var CA=A._GetAutoObject(C.AutoActions).
NJ();for(P=0;P<CA;P=P+1){var Z1=A._GetAutoObject(C.AutoActions).Oz(P);this.A0L(Z1
);}A.pe([this,this.Bbz],this);A.pe([this,this.AtW],this);A.pe([this,this.BAW],this
);},AtW:function(G){var B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var Aa=(C.V1.isPrototypeOf(X)?X:null);Aa.AEV(false);}X=X.Ag;
}},BAW:function(G){var B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var Aa=(C.V1.isPrototypeOf(X)?X:null);var BwR=A._GetAutoObject(
C.AutoActions).NJ();if(!!Aa){var P;Aa.A8O(false);for(P=0;P<BwR;P=P+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).Oz(P)){Aa.A8O(true);Aa.BlF(AX3+(P+1).toFixed());
}}}X=X.Ag;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Z._Init.
call(this.Z={I:this},0);this.__proto__=C.ALh;this.Z.Kf(0);this.J(this.Z,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Z._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DI={_Init:function(
){C.A3U._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AOZ={Lh:null,TS:null,Init:function(aArg){this.Lh.R(A._GetAutoObject(
A.acj.Temperature).Alj());},_Init:function(aArg){C.Dx._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lh={I:this},0);C.CO._Init.call(this.TS={I:this},0);this.__proto__=
C.AOZ;this.Lh.H(AX4);this.Lh.A4(0x12);this.Lh.L(A.jb.Text);this.TS.H(An6);this.TS.
R((A.aaR(A.acf.AgY)+AHE)+A.aaR(A.acf.J8));this.TS.A4(0x12);this.TS.L(A.jb.Text);
this.J(this.Lh,0);this.J(this.TS,0);this.Lh.S(A.aaL(A.fl.Ah));this.TS.S(A.aaL(A.
fl.Ak));this.TS.A8(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dx;this.Lh._Done();this.TS._Done();C.Dx._Done.call(this);},_ReInit:function(){
C.Dx._ReInit.call(this);this.Lh._ReInit();this.TS._ReInit();this.TS.R((A.aaR(A.acf.
AgY)+AHE)+A.aaR(A.acf.J8));this.Lh.S(A.aaL(A.fl.Ah));this.TS.S(A.aaL(A.fl.Ak));this.
TS.A8(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dx._Mark.call(this,D);if((B=this.
Lh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ACE={Jm:null,DQ:null,_Init:
function(aArg){C.Dx._Init.call(this,aArg);A.acg.Text._Init.call(this.Jm={I:this}
,0);A.acg.Text._Init.call(this.DQ={I:this},0);this.__proto__=C.ACE;this.Jm.H(AX5
);this.Jm.KM(true);this.Jm.A4(0x14);this.Jm.R(A.aaR(A.acf.Aht)+AHF);this.Jm.L(A.
jb.Text);this.DQ.H(An6);this.DQ.KM(true);this.DQ.R(A.aaR(A.acf.AFr));this.DQ.L(A.
jb.Text);this.J(this.Jm,0);this.J(this.DQ,0);this.Jm.S(A.aaL(A.fl.Ak));this.DQ.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dx;this.Jm._Done();this.DQ._Done(
);C.Dx._Done.call(this);},_ReInit:function(){C.Dx._ReInit.call(this);this.Jm._ReInit(
);this.DQ._ReInit();this.Jm.R(A.aaR(A.acf.Aht)+AHF);this.DQ.R(A.aaR(A.acf.AFr));
this.Jm.S(A.aaL(A.fl.Ak));this.DQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dx._Mark.call(this,D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TI={IZ:null,_Init:function(aArg){C.Dx._Init.call(this,aArg);C.CO._Init.call(this.
IZ={I:this},0);this.__proto__=C.TI;this.IZ.H(AHG);this.IZ.R((((A.aaR(A.acf.Rz)+ZU
)+AHH)+A.aaR(A.acf.A$a))+O0);this.IZ.A4(0x12);this.IZ.L(A.jb.Text);this.J(this.IZ
,0);this.IZ.S(A.aaL(A.fl.Ah));this.IZ.A8(A.aaL(A.fl.Ak));this.IZ.CB(A.aaL(A.fl.By
));},_Done:function(){this.__proto__=C.Dx;this.IZ._Done();C.Dx._Done.call(this);
},_ReInit:function(){C.Dx._ReInit.call(this);this.IZ._ReInit();this.IZ.R((((A.aaR(
A.acf.Rz)+ZU)+AHH)+A.aaR(A.acf.A$a))+O0);this.IZ.S(A.aaL(A.fl.Ah));this.IZ.A8(A.
aaL(A.fl.Ak));this.IZ.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dx._Mark.call(
this,D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.AO1={Li:null,Kd:null,CT:function(){this.A_r();},Init:function(aArg){this.A_r(
);},A_r:function(){this.Li.R(A._GetAutoObject(A.acj.DN).AfH());this.Kd.R(A._GetAutoObject(
A.acj.DN).Z_());},_Init:function(aArg){C.Dx._Init.call(this,aArg);A.acg.Text._Init.
call(this.Li={I:this},0);C.CO._Init.call(this.Kd={I:this},0);this.__proto__=C.AO1;
this.Li.H(AX6);this.Li.A4(0x12);this.Li.L(A.jb.Text);this.Kd.H(An6);this.Kd.L(A.
jb.Text);this.J(this.Li,0);this.J(this.Kd,0);this.Li.S(A.aaL(A.fl.Ah));this.Kd.S(
A.aaL(A.fl.Ah));this.Kd.A8(A.aaL(A.fl.Ak));this.Kd.CB(A.aaL(A.fl.By));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dx;this.Li._Done();this.Kd._Done();C.Dx.
_Done.call(this);},_ReInit:function(){C.Dx._ReInit.call(this);this.Li._ReInit();
this.Kd._ReInit();this.Li.S(A.aaL(A.fl.Ah));this.Kd.S(A.aaL(A.fl.Ah));this.Kd.A8(
A.aaL(A.fl.Ak));this.Kd.CB(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.
Dx._Mark.call(this,D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kd
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AMx={Mc:null,Hg:null,H4:null,AP:null,A_:null,FK:0,Aae:0,H8:0,Air:false,Init:function(
aArg){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hg.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hg.M[2]-1,0,this.Hg.M[2]+1,aSize[
1]]);this.Mc.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H4.H(this.Mc.M);
},Ai:function(Ae){C.Bc.Ai.call(this,Ae);if(this.Air){this.H4.R(Ra);this.H4.L(A.jb.
Text);this.Mc.L(this.Background.AQ);}else{this.H4.R(A._GetAutoObject(A.Device.Converter
).SR(this.FK,2,true));this.H4.L(A._GetAutoObject(A.acj.DN).Ay9(this.FK,this.H8));
this.Mc.L(A._GetAutoObject(A.acj.DN).Ay7(this.FK,this.H8));}if(this.Aae>0)this.Hg.
R(A._GetAutoObject(A.Device.Converter).AkL(this.Aae));else this.Hg.R(Ra);this.Hg.
L(this.V.AQ);},Cd:function(Ad){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var Op=
this.AZ.CC(Ad,1);var AtR=this.AZ.Hz(Ad,24);var AJt=this.AZ.CC(Ad,23);var AtS=this.
AZ.Hz(Ad,19);this.Aae=this.AZ.CC(Ad,18);if((AtR>0)&&(AtR!==AtS)){var Ly=A._GetAutoObject(
A.Device.Helper).MK(AtR,AtS);if(!!Ly){this.Air=false;this.FK=A._GetAutoObject(A.
acj.DN).Ak9(Ly,AJt,this.Aae);}else{this.Air=true;this.FK=0;}}else{this.Air=true;
this.FK=0;}this.U(Op.toFixed());this.H8=this.AZ.Amw(Ad,14);this.Am();}},_Init:function(
aArg){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.call(this.Mc={I:this},0);A.acg.Text.
_Init.call(this.Hg={I:this},0);A.acg.Text._Init.call(this.H4={I:this},0);A.acg.AJ.
_Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);this.__proto__=
C.AMx;this.V.H(OY);this.Mc.H(Asx);this.Hg.H(AHB);this.Hg.A4(0x12);this.Hg.R(SV);
this.Hg.L(A.jb.Text);this.H4.H(AHC);this.H4.R(SV);this.H4.L(A.jb.Text);this.AP.H(
An4);this.AP.L(A.jb.Bd);this.A_.H(An5);this.A_.L(A.jb.Bd);this.J(this.Mc,0);this.
J(this.Hg,0);this.J(this.H4,0);this.J(this.AP,0);this.J(this.A_,0);this.Hg.S(A.aaL(
A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Bc;this.Mc._Done();this.Hg._Done();this.H4._Done();this.AP._Done();this.A_._Done(
);C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.Mc._ReInit(
);this.Hg._ReInit();this.H4._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hg.
S(A.aaL(A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.
call(this,D);if((B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.MZ={Mb:null,AP:null,A_:null,Gp:null,W5:0,Init:
function(aArg){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.Mb.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mb.M);this.Background.H([].concat(this.Mb.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gp.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gp.M[2]-1,0,this.
Gp.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Bc.Ai.call(this,Ae);this.Gp.L(this.V.AQ
);if(!!this.W5&&(this.W5!==5)){this.Mb.L(A._GetAutoObject(A.acj.Assessment).Qc(this.
W5));this.V.L(A._GetAutoObject(A.acj.Assessment).Xc(this.W5));}else this.Mb.L(this.
Background.AQ);},Cd:function(Ad){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var
Op=this.AZ.CC(Ad,1);var LL=this.AZ.IV(Ad,13);var Ale=this.AZ.IV(Ad,17);var Aln=this.
AZ.HW(Ad,11);var Ayr=this.AZ.Hz(Ad,4);var Afu=A._GetAutoObject(A.Device.Helper).
MK(Ayr,A._GetAutoObject(A.Device.Helper).Dt());this.W5=A._GetAutoObject(A.Device.
Helper).ALE(LL,Aln,Ale);this.U(Op.toFixed());if(Afu<100)this.Gp.R((Afu.toFixed()+
CL)+A.aaR(A.acf.ALf));else this.Gp.R(A._GetAutoObject(A.acj.KE).AB_(Ayr,A._GetAutoObject(
A.Device.Helper).Dt(),AHI));this.Am();}},_Init:function(aArg){C.Bc._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Mb={I:this},0);A.acg.AJ._Init.call(this.AP={I:this
},0);A.acg.AJ._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gp={I:this
},0);this.__proto__=C.MZ;this.Mb.H(Asx);this.Background.H(AX7);this.V.H(OY);this.
AP.H(An4);this.AP.L(A.jb.Bd);this.A_.H(An5);this.A_.L(A.jb.Bd);this.Gp.H(AxM);this.
J(this.Mb,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gp,0);this.Gp.S(A.
aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Bc;this.Mb._Done(
);this.AP._Done();this.A_._Done();this.Gp._Done();C.Bc._Done.call(this);},_ReInit:
function(){C.Bc._ReInit.call(this);this.Mb._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gp._ReInit();this.Gp.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.
call(this,D);if((B=this.Mb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AMv={Ajd:null,N5:null,AP:null,A_:null,Jg:null,AJO:0,A1J:0,Init:function(aArg
){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N5.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajd.H(this.N5.M);this.A_.H([this.N5.M[2]-1,0,this.N5.M[2]+1,aSize[1]]);
this.Jg.H([this.N5.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bc.Ai.call(this
,Ae);this.Jg.C8(this.V.AQ);if(this.AJO>0){this.Ajd.L(A._GetAutoObject(A.acj.Assessment
).Qc(this.A1J));this.N5.L(A._GetAutoObject(A.acj.Assessment).Xc(this.A1J));}else{
this.Ajd.L(this.Background.AQ);this.N5.L(this.V.AQ);}},Cd:function(Ad){if(!this.
AZ)return;this.Hu=Ad;if(!!this.AZ){var KW=this.AZ.CC(Ad,0);var Op=this.AZ.CC(Ad,
1);this.AJO=this.AZ.CC(Ad,5);this.A1J=this.AZ.IV(Ad,17);this.U(Op.toFixed());if(
this.AJO>0)this.N5.R(A._GetAutoObject(A.Device.Converter).AkD(this.AJO));else this.
N5.R(Ra);var W4=A._GetAutoObject(A.Device.Helper).Zq(6);A._GetAutoObject(A.Device.
Device).Sw(Ad);var AZV=A._GetAutoObject(A.Device.Helper).Bhz(A._GetAutoObject(A.
Device.Device).Br,9,KW,W4,0);this.Jg.A81(AZV.Get(3));this.Jg.A83(AZV.Get(2));this.
Jg.A82(AZV.Get(1));this.Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);
A.acg.AJ._Init.call(this.Ajd={I:this},0);A.acg.Text._Init.call(this.N5={I:this},
0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},
0);C.Jg._Init.call(this.Jg={I:this},0);this.__proto__=C.AMv;this.N5.A4(0x12);this.
N5.R(SV);this.N5.L(A.jb.Text);this.AP.H(An4);this.AP.L(A.jb.Bd);this.A_.H(An5);this.
A_.L(A.jb.Bd);this.Jg.H(AX8);this.J(this.Ajd,0);this.J(this.N5,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jg,0);this.N5.S(A.aaL(A.fl.Ah));this.Init(aArg
);},_Done:function(){this.__proto__=C.Bc;this.Ajd._Done();this.N5._Done();this.AP.
_Done();this.A_._Done();this.Jg._Done();C.Bc._Done.call(this);},_ReInit:function(
){C.Bc._ReInit.call(this);this.Ajd._ReInit();this.N5._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jg._ReInit();this.N5.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Bc._Mark.call(this,D);if((B=this.Ajd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jg={Ae4:null,
ColoredCounterAttrSet:null,ABz:0,ABA:0,ABy:0,KN:0,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);var AJF;var AKX;var AJ$;var Alv=0;if(this.ABy>0){AJF=this.ABy.toFixed(
);Alv+=AJF.length;}else{AJF=AX9;Alv++;}if(this.ABA>0){AKX=this.ABA.toFixed();Alv+=
AKX.length;}else{AKX=AxN;Alv++;}if(this.ABz>0){AJ$=this.ABz.toFixed();Alv+=AJ$.length;
}else{AJ$=AHw;Alv++;}if(Alv<=4)this.ColoredCounterAttrSet.Ag6(A.aaL(A.fl.Ah));else
if(Alv<=5)this.ColoredCounterAttrSet.Ag6(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ag6(A.aaL(A.fl.By));this.Ae4.R(((((AX_+AJF)+AX$)+AKX)+AYa)+AJ$);},A82:function(E
){if(this.ABz===E)return;this.ABz=E;this.Am();},A83:function(E){if(this.ABA===E)
return;this.ABA=E;this.Am();},A81:function(E){if(this.ABy===E)return;this.ABy=E;
this.Am();},C8:function(E){if(this.KN===E)return;this.KN=E;this.ColoredCounterAttrSet.
Ag3(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Aud._Init.call(
this.Ae4={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jg;this.H(AHJ);this.Ae4.AY(0x3F);this.Ae4.H(AHJ);this.
Ae4.R(SV);this.ColoredCounterAttrSet.BkC(A.jb.ET);this.ColoredCounterAttrSet.A8X(
A.jb.H1);this.ColoredCounterAttrSet.A8W(A.jb.FZ);this.ColoredCounterAttrSet.Ag3(
A.jb.Text);this.KN=A.jb.Text;this.J(this.Ae4,0);this.Ae4.A8R(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ag6(A.aaL(A.fl.Ah));this.ColoredCounterAttrSet.A8T(
null);},_Done:function(){this.__proto__=A.Core.O;this.Ae4._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Ae4._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ag6(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Ae4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AMu={As3:null
,AbT:null,AbU:null,AbV:null,Jg:null,AP:null,A_:null,D5:null,Lo:null,Acd:null,KO:
null,KP:null,AIQ:0,AIP:0,AIO:0,Init:function(aArg){},Bh:function(aSize){C.Bc.Bh.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.AbT.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acd.H(this.
AbT.M);this.A_.H([this.AbT.M[2]-1,0,this.AbT.M[2]+1,aSize[1]]);this.AbU.H([this.
AbT.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KO.H(this.AbU.M);this.D5.H([this.
AbU.M[2]-1,0,this.AbU.M[2]+1,aSize[1]]);this.AbV.H([this.AbU.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KP.H(this.AbV.M);this.Lo.H([this.AbV.M[2]-1,0,this.AbV.
M[2]+1,aSize[1]]);this.Jg.H([this.AbV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Bc.Ai.call(this,Ae);this.Jg.C8(this.V.AQ);this.AbT.L(A._GetAutoObject(A.acj.
Assessment).Qc(this.AIO));this.AbU.L(A._GetAutoObject(A.acj.Assessment).Qc(this.
AIP));this.AbV.L(A._GetAutoObject(A.acj.Assessment).Qc(this.AIQ));this.Acd.L(A._GetAutoObject(
A.acj.Assessment).Xc(this.AIO));this.KO.L(A._GetAutoObject(A.acj.Assessment).Xc(
this.AIP));this.KP.L(A._GetAutoObject(A.acj.Assessment).Xc(this.AIQ));this.Acd.Y(
!this.AIO);this.KO.Y(!this.AIP);this.KP.Y(!this.AIQ);this.Jg.A81(this.As3.Get(3)
);this.Jg.A83(this.As3.Get(2));this.Jg.A82(this.As3.Get(1));},Cd:function(Ad){if(
!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var KW=this.AZ.CC(Ad,0);var Op=this.AZ.
CC(Ad,1);this.U(Op.toFixed());A._GetAutoObject(A.Device.Device).Sw(Ad);this.AIO=
A._GetAutoObject(A.Device.Helper).A1l(A._GetAutoObject(A.Device.Device).Br,KW,0);
this.AIP=A._GetAutoObject(A.Device.Helper).A1l(A._GetAutoObject(A.Device.Device).
Br,KW,-1);this.AIQ=A._GetAutoObject(A.Device.Helper).A1l(A._GetAutoObject(A.Device.
Device).Br,KW,-2);this.As3=A._GetAutoObject(A.Device.Helper).A5V(A._GetAutoObject(
A.Device.Device).Br,KW,0,0);this.Am();}},_Init:function(aArg){C.Bc._Init.call(this
,aArg);A.acg.AJ._Init.call(this.AbT={I:this},0);A.acg.AJ._Init.call(this.AbU={I:
this},0);A.acg.AJ._Init.call(this.AbV={I:this},0);C.Jg._Init.call(this.Jg={I:this
},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this
},0);A.acg.AJ._Init.call(this.D5={I:this},0);A.acg.AJ._Init.call(this.Lo={I:this
},0);A.acg.Text._Init.call(this.Acd={I:this},0);A.acg.Text._Init.call(this.KO={I:
this},0);A.acg.Text._Init.call(this.KP={I:this},0);this.__proto__=C.AMu;this.AP.
L(A.jb.Bd);this.A_.L(A.jb.Bd);this.D5.L(A.jb.Bd);this.Lo.L(A.jb.Bd);this.Acd.R(An7
);this.KO.R(An7);this.KP.R(An7);this.J(this.AbT,0);this.J(this.AbU,0);this.J(this.
AbV,0);this.J(this.Jg,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.D5,0);this.
J(this.Lo,0);this.J(this.Acd,0);this.J(this.KO,0);this.J(this.KP,0);this.Acd.S(A.
aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah));this.KP.S(A.aaL(A.fl.Ah));this.As3=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Bc;this.AbT._Done();this.AbU._Done();this.AbV._Done();this.Jg._Done();this.AP.
_Done();this.A_._Done();this.D5._Done();this.Lo._Done();this.Acd._Done();this.KO.
_Done();this.KP._Done();C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.
call(this);this.AbT._ReInit();this.AbU._ReInit();this.AbV._ReInit();this.Jg._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.D5._ReInit();this.Lo._ReInit();this.Acd.
_ReInit();this.KO._ReInit();this.KP._ReInit();this.Acd.S(A.aaL(A.fl.Ah));this.KO.
S(A.aaL(A.fl.Ah));this.KP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.
call(this,D);if((B=this.As3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Amz={HZ:null,AfI:false,Bh:function(aSize){var
B;this.HZ.H([(aSize[0]-((B=this.HZ.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.HZ.M[0]-10,40]);C.Tt.Bh.call(this,aSize);},Ai:function(Ae){C.Tt.Ai.call(
this,Ae);if(this.AfI)this.HZ.Cu(1);else this.HZ.Cu(0);},J0:function(G){if(this.AfI
)C.Tt.J0.call(this,G);},JV:function(G){if(this.AfI)C.Tt.JV.call(this,G);},Te:function(
AM){C.Tt.Te.call(this,AM);if(!!AM){this.H(A.abI(this.M,80));this.AfI=true;this.Y_(
true);}else{this.H(A.abI(this.M,40));this.AfI=false;this.Y_(false);}},_Init:function(
aArg){C.Tt._Init.call(this,aArg);A.acg.An._Init.call(this.HZ={I:this},0);this.__proto__=
C.Amz;this.V.A4(0x11);this.HZ.H(AG7);this.HZ.Cu(0);this.J(this.HZ,0);this.V.CB(A.
aaL(A.fl.By));this.HZ.Ax(A.aaL(A.ach.Aqj));},_Done:function(){this.__proto__=C.Tt;
this.HZ._Done();C.Tt._Done.call(this);},_ReInit:function(){C.Tt._ReInit.call(this
);this.HZ._ReInit();this.V.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Tt._Mark.
call(this,D);if((B=this.HZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AFq={_Init:function(aArg){C.AwE._Init.call(this,aArg);this.__proto__=C.AFq;}
,_className:"Application::OptionsOverlaySeparator"};C.Akk={DE:A.jV,Bv:true,_Init:
function(aArg){C.AwE._Init.call(this,aArg);this.__proto__=C.Akk;},_className:"Application::OptionsOverlayNode"
};C.Za={AN:null,_Init:function(aArg){C.Akk._Init.call(this,aArg);this.__proto__=
C.Za;},_Mark:function(D){var B;C.Akk._Mark.call(this,D);if((B=this.AN)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AMZ={Ai:function(Ae){C.OQ.Ai.call(this,Ae);var FG=A.jb.CF;var GJ=A.jb.Text;if(
this.Hb){FG=A.jb.Text;GJ=A.jb.Bj;}this.Background.L(FG);this.V.L(GJ);},_Init:function(
aArg){C.OQ._Init.call(this,aArg);this.__proto__=C.AMZ;},_className:"Application::DarkThemeTextItem"
};C.OQ={Background:null,Cz:null,V:null,Ap3:0,Hb:false,Init:function(aArg){},Bh:function(
aSize){C.G_.Bh.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.Cz.H(A.abK(this.Cz.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.G_.Ai.call(this,Ae);this.Cz.L(this.Ap3);},U:function(E){if(this.DE===E)return;
this.DE=E;this.V.R(E);},Bg:function(E){if(this.Hb===E)return;this.Hb=E;this.Am();
},Are:function(E){if(this.Ap3===E)return;this.Ap3=E;this.Am();},_Init:function(aArg
){C.G_._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);A.acg.
Cz._Init.call(this.Cz={I:this},0);C.CO._Init.call(this.V={I:this},0);this.__proto__=
C.OQ;this.H(BC);this.Background.H(AHK);this.Cz.H(BC);this.Cz.NX(2);this.Cz.L(A.jb.
Acf);this.V.H(AYb);this.Ap3=A.jb.Acf;this.J(this.Background,0);this.J(this.Cz,0);
this.J(this.V,0);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(A.
aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.G_;this.Background.
_Done();this.Cz._Done();this.V._Done();C.G_._Done.call(this);},_ReInit:function(
){C.G_._ReInit.call(this);this.Background._ReInit();this.Cz._ReInit();this.V._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.V.CB(A.aaL(A.fl.By));}
,_Mark:function(D){var B;C.G_._Mark.call(this,D);if((B=this.Background)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.AO4={Es:null
,IE:null,_Init:function(aArg){C.Et._Init.call(this,aArg);A.acg.Text._Init.call(this.
Es={I:this},0);A.acg.Text._Init.call(this.IE={I:this},0);this.__proto__=C.AO4;this.
H(OX);this.Background.H(OX);this.Es.H(AHL);this.Es.R(A.aaR(A.acf.GD));this.Es.A4(
0x11);this.Es.L(A.jb.Text);this.IE.AY(0x3F);this.IE.H(AHM);this.IE.HH(5);this.IE.
A4(0x14);this.IE.R(A.aaR(A.acf.AF9));this.IE.L(A.jb.Text);this.J(this.Es,0);this.
J(this.IE,0);this.Es.S(A.aaL(A.fl.Ah));this.IE.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=C.Et;this.Es._Done();this.IE._Done();C.Et._Done.call(this);},_ReInit:
function(){C.Et._ReInit.call(this);this.Es._ReInit();this.IE._ReInit();this.Es.R(
A.aaR(A.acf.GD));this.IE.R(A.aaR(A.acf.AF9));this.Es.S(A.aaL(A.fl.Ah));this.IE.S(
A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.CY={R$:null,Sa:null,Aee:null,AgG:null,Qy:null
,KN:0,LastTemperature:0,Ap9:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
R$.Ax(A.aaL(A.ach.Au4));this.Sa.Ax(A.aaL(A.ach.Au4));}break;case 2:{this.R$.Ax(A.
aaL(A.ach.Au7));this.Sa.Ax(A.aaL(A.ach.Au7));}break;default:{this.R$.Ax(A.aaL(A.
ach.Aea));this.Sa.Ax(A.aaL(A.ach.Aea));}}this.R$.L(A._GetAutoObject(A.acj.Assessment
).Qc(this.Ap9));var App;if(this.IsWatch)App=A.aaL(A.ach.AP1);else if(this.IsFever
){App=A.aaL(A.ach.AP0);switch(A._GetAutoObject(A.Device.Converter).Ai4(this.LastTemperature
,this.AnimalType)){case 3:this.Qy.L(A.jb.FZ);break;case 2:this.Qy.L(A.jb.H1);break;
case 1:this.Qy.L(A.jb.ET);break;case 0:this.Qy.L(A.jb.Ae9);break;default:;}}else
if(this.IsAlarm){App=A.aaL(A.ach.APZ);if(!this.Ap9||(this.Ap9===5))this.Qy.L(A.jb.
FZ);else this.Qy.L(0xFF000000);}else App=null;this.Aee.Ax(App);this.AgG.Ax(App);
this.Qy.Ax(App);if(A._GetAutoObject(A.acj.Assessment).Qc(this.Ap9)===A.jb.ET)this.
Sa.L(this.KN);},DT:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AEj:function(E){if(this.Ap9===E)return;this.Ap9=E;this.Am();},C8:function(
E){if(this.KN===E)return;this.KN=E;this.Am();},AeG:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},T_:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},AeD:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},AeI:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},Hd:function(){this.DT(0);this.AEj(0);this.AeD(false);this.T_(false
);this.AeG(false);this.AeI(0);this.C8(A.jb.Text);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.An._Init.call(this.R$={I:this},0);A.acg.An._Init.call(
this.Sa={I:this},0);A.acg.An._Init.call(this.Aee={I:this},0);A.acg.An._Init.call(
this.AgG={I:this},0);A.acg.An._Init.call(this.Qy={I:this},0);this.__proto__=C.CY;
this.H(AkT);this.R$.AY(0x3F);this.R$.H(AkT);this.R$.L(A.jb.CF);this.R$.A4(0x12);
this.R$.Cu(0);this.Sa.AY(0x3F);this.Sa.H(AkT);this.Sa.L(0xFF000000);this.Sa.A4(0x12
);this.Sa.Cu(1);this.Aee.AY(0x3F);this.Aee.H(AkT);this.Aee.L(0xFF000000);this.Aee.
Cu(0);this.AgG.AY(0x3F);this.AgG.H(AkT);this.AgG.Cu(1);this.Qy.AY(0x3F);this.Qy.
H(AkT);this.Qy.L(A.jb.C0);this.Qy.Cu(2);this.KN=A.jb.Text;this.J(this.R$,0);this.
J(this.Sa,0);this.J(this.Aee,0);this.J(this.AgG,0);this.J(this.Qy,0);this.R$.Ax(
A.aaL(A.ach.Aea));this.Sa.Ax(A.aaL(A.ach.Aea));},_Done:function(){this.__proto__=
A.Core.O;this.R$._Done();this.Sa._Done();this.Aee._Done();this.AgG._Done();this.
Qy._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.R$._ReInit();this.Sa._ReInit();this.Aee._ReInit();this.AgG._ReInit();
this.Qy._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AMr={Cd:function(Ad){C.Ajh.Cd.call(this,Ad);if(!!this.AZ){var Byq=this.AZ.HW(
Ad,12);var BwJ=this.AZ.R7(Ad,15);this.AaS.R(A._GetAutoObject(A.Device.Helper).MK(
BwJ,A._GetAutoObject(A.Device.Helper).Dt()).toFixed());this.Sb.Y(Byq);this.Am();
}},_Init:function(aArg){C.Ajh._Init.call(this,aArg);this.__proto__=C.AMr;},_className:
"Application::CalfListAlarmItem"};C.ACA={DQ:null,Mk:null,_Init:function(aArg){C.
TJ._Init.call(this,aArg);A.acg.Text._Init.call(this.DQ={I:this},0);A.acg.An._Init.
call(this.Mk={I:this},0);this.__proto__=C.ACA;this.DQ.H(An6);this.DQ.KM(true);this.
DQ.R(A.aaR(A.acf.A48));this.DQ.L(A.jb.Text);this.Mk.H(AYc);this.Mk.I0(false);this.
Mk.L(A.jb.Text);this.Mk.A4(0x12);this.J(this.DQ,-2);this.J(this.Mk,0);this.DQ.S(
A.aaL(A.fl.Ak));this.Mk.Ax(A.aaL(A.ach.AC1));},_Done:function(){this.__proto__=C.
TJ;this.DQ._Done();this.Mk._Done();C.TJ._Done.call(this);},_ReInit:function(){C.
TJ._ReInit.call(this);this.DQ._ReInit();this.Mk._ReInit();this.DQ.R(A.aaR(A.acf.
A48));this.DQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TJ._Mark.call(this,D
);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.J7={Background:null,Cz:
null,AB2:0,ABe:0,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Background.L(this.
AB2);this.Cz.L(this.ABe);},Av3:function(E){if(this.AB2===E)return;this.AB2=E;this.
Am();},AEb:function(E){if(this.ABe===E)return;this.ABe=E;this.Am();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.An._Init.call(this.Background={I:this
},0);A.acg.An._Init.call(this.Cz={I:this},0);this.__proto__=C.J7;this.H(An8);this.
Background.AY(0x3C);this.Background.H(An8);this.Background.Cu(1);this.Cz.AY(0x3C
);this.Cz.H(An8);this.AB2=A.jb.ET;this.ABe=A.jb.Text;this.J(this.Background,0);this.
J(this.Cz,0);this.Background.Ax(A.aaL(A.ach.J7));this.Cz.Ax(A.aaL(A.ach.J7));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.Cz._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background.
_ReInit();this.Cz._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.Amh={Q:null,Pi:
null,A6y:false,Bh:function(aSize){C.Mg.Bh.call(this,aSize);this.V.H([].concat(this.
Pi.M[2]-this.V.Text.I1,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mg.Ai.call(this
,Ae);this.Pi.L(this.V.AQ);},Av6:function(E){if(this.A6y===E)return;this.A6y=E;if(
E)this.Pi.R(AYd);else this.Pi.R(AHN);},J3:function(G){var F;if(!!this.Q)this.Av6((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.J3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.J3],E,0);if(!!E)
A.pe([this,this.J3],this);},_Init:function(aArg){C.Mg._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pi={I:this},0);this.__proto__=C.Amh;this.Pi.AY(0x34);this.Pi.
H(ZL);this.Pi.R(AHN);this.J(this.Pi,0);this.Pi.S(A.aaL(A.fl.ANW));},_Done:function(
){this.__proto__=C.Mg;this.Pi._Done();C.Mg._Done.call(this);},_ReInit:function(){
C.Mg._ReInit.call(this);this.Pi._ReInit();},_Mark:function(D){var B;C.Mg._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pi)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOl={D$:function(G){C.Ka.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.Converter
).AdB(4));},_Init:function(aArg){C.Ka._Init.call(this,aArg);this.__proto__=C.AOl;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Do:function(){return 3;},C4:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BQ(aIndex);},DK:function(A3){return A3;},Hl:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.AO5={Gc:null,Lh:null,Yv:null,Init:function(aArg){this.Lh.R(A._GetAutoObject(
A.acj.Temperature).Alj());},_Init:function(aArg){C.Et._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gc={I:this},0);A.acg.Text._Init.call(this.Lh={I:this},0);A.
acg.Text._Init.call(this.Yv={I:this},0);this.__proto__=C.AO5;this.Background.L(A.
jb.Text);this.Gc.H(AHO);this.Gc.A4(0x11);this.Gc.R(A.aaR(A.acf.Date));this.Gc.L(
A.jb.Bj);this.Lh.H(AYe);this.Lh.A4(0x12);this.Lh.L(A.jb.Bj);this.Yv.H(AYf);this.
Yv.A4(0x12);this.Yv.R(A.aaR(A.acf.Bt));this.Yv.L(A.jb.Bj);this.J(this.Gc,0);this.
J(this.Lh,0);this.J(this.Yv,0);this.Gc.S(A.aaL(A.fl.Ah));this.Lh.S(A.aaL(A.fl.Ah
));this.Yv.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.
Et;this.Gc._Done();this.Lh._Done();this.Yv._Done();C.Et._Done.call(this);},_ReInit:
function(){C.Et._ReInit.call(this);this.Gc._ReInit();this.Lh._ReInit();this.Yv._ReInit(
);this.Gc.R(A.aaR(A.acf.Date));this.Yv.R(A.aaR(A.acf.Bt));this.Gc.S(A.aaL(A.fl.Ah
));this.Lh.S(A.aaL(A.fl.Ah));this.Yv.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;
C.Et._Mark.call(this,D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tn={Lb:null,Ajy:false,Init:function(
aArg){var B;A.zX([this,this.BaF],[B=A._GetAutoObject(A.Device.Device),B.ADO,B.AH8
],0);this.AF2(this);A.pe([this,this.AIh],this);},Dw:function(G){var DW=(A.Core.BJ.
isPrototypeOf(G)?G:null);switch(DW.CK){case 6:this.Oi(this);break;case 7:this.MS(
this);break;default:DW.NB=true;}},Cw:function(G){var B;if(!!this.Lb)this.Lb.Cw(this
);C.AB.Cw.call(this,G);},EV:function(G){var B;if(!!this.Lb)this.Lb.EV(this);C.AB.
EV.call(this,G);},Am1:function(G){A._GetAutoObject(C.AX).Fl();},AF2:function(G){
var B;if(!!this.Lb){this.Lb.EV(this);this.HI(this.Lb);}if(this.Ajy)switch(A._GetAutoObject(
A.Device.Device).D2){case 0:this.Lb=A._NewObject(C.ALL,0);break;case 1:this.Lb=A.
_NewObject(C.ALM,0);break;case 3:this.Lb=A._NewObject(C.ALK,0);break;case 2:this.
Lb=A._NewObject(C.ALN,0);break;default:throw new Error(AHP);}else switch(A._GetAutoObject(
A.Device.Device).D2){case 0:this.Lb=A._NewObject(C.ALO,0);break;case 1:this.Lb=A.
_NewObject(C.ALX,0);break;case 3:this.Lb=A._NewObject(C.ALR,0);break;case 2:this.
Lb=A._NewObject(C.AL2,0);break;default:throw new Error(AHP);}this.HJ(this);this.
J(this.Lb,0);this.Lb.H(E4);this.Lb.Y7([this,this.AZH]);this.Lb.Cw(this);this.A9(
this.Lb);},BaF:function(s){this.AF2(s);},AS0:function(G){A._GetAutoObject(A.Device.
Device).Aey(0);},AS2:function(G){A._GetAutoObject(A.Device.Device).Aey(1);},AS1:
function(G){A._GetAutoObject(A.Device.Device).Aey(3);},AS3:function(G){A._GetAutoObject(
A.Device.Device).Aey(2);},HJ:function(G){this.N.CS(A.aaL(A.ach.EU));this.N.Ho(A.
jV);this.N.Cv=[this,this.Am1];this.N.AEr(A.aaL(A.fl.Ak));},AIh:function(s){this.
HJ(s);},Blo:function(E){if(this.Ajy===E)return;this.Ajy=E;A.pe([this,this.BaF],this
);},A9X:function(G){this.Blo(!this.Ajy);},Bmy:function(G){A._GetAutoObject(A.Device.
Device).A6(31,true,A.jV,0,null);},MS:function(G){},BET:function(s){this.MS(s);},
Oi:function(G){},BES:function(s){this.Oi(s);},BdT:function(G){var FF=A._GetAutoObject(
A.Device.Device).D2;FF=FF+1;if(FF>=4)FF=0;A._GetAutoObject(A.Device.Device).Aey(
FF);},Bzi:function(G){var FF=A._GetAutoObject(A.Device.Device).D2;FF=FF-1;if(FF<
0)FF=3;A._GetAutoObject(A.Device.Device).Aey(FF);},Ais:function(G){},AZH:function(
s){this.Ais(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tn;this.Background.H(Ca);this.N.Y(true);this.N.OJ(true);this.N.OK(true);this.Dk(
C.AOU);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lb)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D2={AN:null,AttrSet:null,Dg:null,Cw:function(G){},AH7:function(s){this.Cw(s);
},EV:function(G){A._GetAutoObject(A.Device.Device).Br.Bi(null);},AxY:function(s){
this.EV(s);},Y7:function(E){if(A.aa0(this.AN,E))return;this.AN=E;this.Dg.BK=E;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BJ._Init.call(this.Dg={I:this},0);this.__proto__=
C.D2;this.H(SW);this.AttrSet.A8X(A.jb.FZ);this.AttrSet.A8W(A.jb.H1);this.AttrSet.
Ag3(A.jb.Text);this.Dg.Filter=1;this.AttrSet.Ag6(A.aaL(A.fl.Ak));this.AttrSet.A8T(
null);},_Done:function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.Dg._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AttrSet._ReInit();this.Dg._ReInit();this.AttrSet.Ag6(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.ALO={RD:
null,Aax:null,Tm:null,Tl:null,RH:null,Qq:null,RI:null,RF:null,RG:null,RE:null,CT:
function(){var B;this.RD.Cd(this);this.Aax.Cd(this);this.Tm.Cd(this);this.Tl.Cd(
this);this.RH.Cd(this);this.Qq.Cd(this);this.RI.Cd(this);this.RF.Cd(this);this.RG.
Cd(this);this.RE.Cd(this);},Gw:function(G){C.RJ.Gw.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RD.Y(true);this.Aax.Y(false);
this.RF.Y(false);this.RG.Y(false);this.RE.Y(false);this.RH.Y(true);this.Qq.Y(true
);this.RI.Y(true);}break;case 1:{this.RD.Y(false);this.Aax.Y(true);this.RF.Y(true
);this.RG.Y(true);this.RE.Y(true);this.RH.Y(false);this.Qq.Y(false);this.RI.Y(false
);}break;default:A.ab5("%s%e",AkP,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.ML],this);},_Init:function(aArg){C.RJ._Init.call(this,aArg);C.
RD._Init.call(this.RD={I:this},0);C.ALJ._Init.call(this.Aax={I:this},0);C.Tm._Init.
call(this.Tm={I:this},0);C.Tl._Init.call(this.Tl={I:this},0);C.RH._Init.call(this.
RH={I:this},0);C.Qq._Init.call(this.Qq={I:this},0);C.RI._Init.call(this.RI={I:this
},0);C.RF._Init.call(this.RF={I:this},0);C.RG._Init.call(this.RG={I:this},0);C.RE.
_Init.call(this.RE={I:this},0);this.__proto__=C.ALO;this.RD.H(BC);this.RD.Aj(true
);this.RD.Bg(false);this.Aax.H(JQ);this.Aax.Aj(true);this.Aax.Bg(false);this.Tm.
H(P1);this.Tm.Aj(true);this.Tm.Bg(true);this.Tl.H(ZR);this.Tl.Aj(true);this.Tl.Bg(
false);this.RH.H(AkR);this.RH.Aj(true);this.RH.Bg(true);this.Qq.H(An1);this.Qq.Aj(
true);this.Qq.Bg(false);this.RI.H(Asq);this.RI.Aj(true);this.RI.Bg(true);this.RF.
H(WU);this.RF.Aj(true);this.RF.Bg(true);this.RG.H(AYg);this.RG.Aj(true);this.RG.
Bg(false);this.RE.H(AHQ);this.RE.Aj(true);this.RE.Bg(true);this.J(this.RD,0);this.
J(this.Aax,0);this.J(this.Tm,0);this.J(this.Tl,0);this.J(this.RH,0);this.J(this.
Qq,0);this.J(this.RI,0);this.J(this.RF,0);this.J(this.RG,0);this.J(this.RE,0);},
_Done:function(){this.__proto__=C.RJ;this.RD._Done();this.Aax._Done();this.Tm._Done(
);this.Tl._Done();this.RH._Done();this.Qq._Done();this.RI._Done();this.RF._Done(
);this.RG._Done();this.RE._Done();C.RJ._Done.call(this);},_ReInit:function(){C.RJ.
_ReInit.call(this);this.RD._ReInit();this.Aax._ReInit();this.Tm._ReInit();this.Tl.
_ReInit();this.RH._ReInit();this.Qq._ReInit();this.RI._ReInit();this.RF._ReInit(
);this.RG._ReInit();this.RE._ReInit();this.CT();},_Mark:function(D){var B;C.RJ._Mark.
call(this,D);if((B=this.RD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aax)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.AL2={Akv:function(LW){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var
HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fj.CX(HQ);var AcP=A._NewObject(A.Device.Int32FilterCriterion
,0);AcP.Initialize(8,2,0,true);Fj.CX(AcP);LW.Bi(Fj);},ADc:function(){if(!A._GetAutoObject(
A.Device.Device).Br)return false;var O$=A._GetAutoObject(A.Device.Device).Br.Cb(
);if(O$<2)return false;var BAG=A._GetAutoObject(A.Device.Device).Br.Hz(0,6);var BAH=
A._GetAutoObject(A.Device.Device).Br.Hz(O$-1,6);var A1b=A._NewObject(A.Core.Bt,0
);A1b.Initialize(BAG);var A3c=A._NewObject(A.Core.Bt,0);A3c.Initialize(BAH);if((
A1b.AbC()!==A3c.AbC())||(A1b.Year!==A3c.Year))return true;else return false;},_Init:
function(aArg){C.Aaz._Init.call(this,aArg);this.__proto__=C.AL2;this.ASt(C.AGB);
this.ASu(C.ACF);this.ASk(C.Qq);this.Arj(A.aaR(A.acf.AUX));this.Du(A.aaR(A.acf.Aj1
));},_ReInit:function(){C.Aaz._ReInit.call(this);this.Arj(A.aaR(A.acf.AUX));this.
Du(A.aaR(A.acf.Aj1));},_className:"Application::AnimalWeights"};C.ALX={Akv:function(
LW){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.
Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fj.CX(HQ);var AAw=A._NewObject(A.Device.Int32FilterCriterion,0);AAw.Initialize(
7,2,0,true);Fj.CX(AAw);LW.Bi(Fj);},ADc:function(){return A._GetAutoObject(A.Device.
Device).Br.Cb()>0;},_Init:function(aArg){C.Aaz._Init.call(this,aArg);this.__proto__=
C.ALX;this.ASt(C.AUk);this.ASu(C.AO5);this.ASk(C.Tm);this.Arj(A.aaR(A.acf.A6V));
this.Du(A.aaR(A.acf.AqX));},_ReInit:function(){C.Aaz._ReInit.call(this);this.Arj(
A.aaR(A.acf.A6V));this.Du(A.aaR(A.acf.AqX));},_className:"Application::AnimalTemperatures"
};C.ATr={Vg:null,Vh:null,XF:null,Agi:null,Kq:null,AP:null,A_:null,D5:null,Lo:null
,Ant:null,KO:null,KP:null,Zn:null,Zo:null,Init:function(aArg){},Bh:function(aSize
){C.Bc.Bh.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kq.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vg.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.D5.H([this.
Vg.M[2]-1,0,this.Vg.M[2]+1,aSize[1]]);this.Vh.H([this.Vg.M[2],0,this.Vg.M[2]+22,
aSize[1]]);this.Lo.H([this.Vh.M[2]-1,0,this.Vh.M[2]+1,aSize[1]]);this.XF.H([this.
Vh.M[2],0,this.Vh.M[2]+22,aSize[1]]);this.Ant.H([this.XF.M[2]-1,0,this.XF.M[2]+1
,aSize[1]]);this.Agi.H([this.XF.M[2],0,aSize[0],aSize[1]]);this.KO.H(this.Vg.M);
this.KP.H(this.Vh.M);this.Zn.H(this.XF.M);this.Zo.H(this.Agi.M);},Ai:function(Ae
){C.Bc.Ai.call(this,Ae);this.Kq.L(this.V.AQ);},Cd:function(Ad){if(!this.AZ)return;
this.Hu=Ad;if(!!this.AZ){var Ala=this.AZ.Hz(Ad,6);var A0t=this.AZ.IV(Ad,3);var A09=
this.AZ.IV(Ad,2);var A08=this.AZ.IV(Ad,5);var A22=this.AZ.IV(Ad,4);this.U(A._GetAutoObject(
A.acj.KE).AB9(Ala));this.Kq.R(A._GetAutoObject(A.acj.KE).A5P(Ala));this.Vg.L(A._GetAutoObject(
A.acj.Assessment).Qc(A0t));this.Vh.L(A._GetAutoObject(A.acj.Assessment).Qc(A09));
this.XF.L(A._GetAutoObject(A.acj.Assessment).Qc(A08));this.Agi.L(A._GetAutoObject(
A.acj.Assessment).Qc(A22));this.KO.L(A._GetAutoObject(A.acj.Assessment).Xc(A0t));
this.KP.L(A._GetAutoObject(A.acj.Assessment).Xc(A09));this.Zn.L(A._GetAutoObject(
A.acj.Assessment).Xc(A08));this.Zo.L(A._GetAutoObject(A.acj.Assessment).Xc(A22));
this.KO.Y(A0t===5);this.KP.Y(A09===5);this.Zn.Y(A08===5);this.Zo.Y(A22===5);this.
Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.call(this.
Vg={I:this},0);A.acg.AJ._Init.call(this.Vh={I:this},0);A.acg.AJ._Init.call(this.
XF={I:this},0);A.acg.AJ._Init.call(this.Agi={I:this},0);A.acg.Text._Init.call(this.
Kq={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.
A_={I:this},0);A.acg.AJ._Init.call(this.D5={I:this},0);A.acg.AJ._Init.call(this.
Lo={I:this},0);A.acg.AJ._Init.call(this.Ant={I:this},0);A.acg.Text._Init.call(this.
KO={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(this.
Zn={I:this},0);A.acg.Text._Init.call(this.Zo={I:this},0);this.__proto__=C.ATr;this.
V.H(OY);this.Vg.H(AYh);this.Vh.H(AHR);this.XF.H(AYi);this.Agi.H(AYj);this.Kq.R(SV
);this.Kq.L(A.jb.Text);this.AP.L(A.jb.Bd);this.A_.L(A.jb.Bd);this.D5.L(A.jb.Bd);
this.Lo.L(A.jb.Bd);this.Ant.L(A.jb.Bd);this.KO.H(AYk);this.KO.R(Ra);this.KP.H(AYl
);this.KP.R(Ra);this.Zn.H(AYm);this.Zn.R(Ra);this.Zo.H(AYn);this.Zo.R(Ra);this.J(
this.Vg,0);this.J(this.Vh,0);this.J(this.XF,0);this.J(this.Agi,0);this.J(this.Kq
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.D5,0);this.J(this.Lo,0);this.
J(this.Ant,0);this.J(this.KO,0);this.J(this.KP,0);this.J(this.Zn,0);this.J(this.
Zo,0);this.Kq.S(A.aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah));this.KP.S(A.aaL(A.fl.Ah
));this.Zn.S(A.aaL(A.fl.Ah));this.Zo.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.Bc;this.Vg._Done();this.Vh._Done();this.XF._Done();this.Agi._Done(
);this.Kq._Done();this.AP._Done();this.A_._Done();this.D5._Done();this.Lo._Done(
);this.Ant._Done();this.KO._Done();this.KP._Done();this.Zn._Done();this.Zo._Done(
);C.Bc._Done.call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.Vg._ReInit(
);this.Vh._ReInit();this.XF._ReInit();this.Agi._ReInit();this.Kq._ReInit();this.
AP._ReInit();this.A_._ReInit();this.D5._ReInit();this.Lo._ReInit();this.Ant._ReInit(
);this.KO._ReInit();this.KP._ReInit();this.Zn._ReInit();this.Zo._ReInit();this.Kq.
S(A.aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah));this.KP.S(A.aaL(A.fl.Ah));this.Zn.S(
A.aaL(A.fl.Ah));this.Zo.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.call(
this,D);if((B=this.Vg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vh)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ant)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.AO3={Gc:null,YB:null,Yx:null,Yy:null,Yz:null,YA:
null,_Init:function(aArg){C.Et._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gc={I:this},0);A.acg.Text._Init.call(this.YB={I:this},0);A.acg.Text._Init.call(this.
Yx={I:this},0);A.acg.Text._Init.call(this.Yy={I:this},0);A.acg.Text._Init.call(this.
Yz={I:this},0);A.acg.Text._Init.call(this.YA={I:this},0);this.__proto__=C.AO3;this.
Background.L(A.jb.Text);this.Gc.H(AHO);this.Gc.A4(0x11);this.Gc.R(A.aaR(A.acf.Date
));this.Gc.L(A.jb.Bj);this.YB.H(AHG);this.YB.A4(0x12);this.YB.R(A.aaR(A.acf.Bt));
this.YB.L(A.jb.Bj);this.Yx.H(AYo);this.Yx.A4(0x12);this.Yx.R(A.aaR(A.acf.ATt));this.
Yx.L(A.jb.Bj);this.Yy.H(AYp);this.Yy.A4(0x12);this.Yy.R(A.aaR(A.acf.ATu));this.Yy.
L(A.jb.Bj);this.Yz.H(AYq);this.Yz.A4(0x12);this.Yz.R(A.aaR(A.acf.ANS));this.Yz.L(
A.jb.Bj);this.YA.H(AYr);this.YA.A4(0x12);this.YA.R(A.aaR(A.acf.AMQ));this.YA.L(A.
jb.Bj);this.J(this.Gc,0);this.J(this.YB,0);this.J(this.Yx,0);this.J(this.Yy,0);this.
J(this.Yz,0);this.J(this.YA,0);this.Gc.S(A.aaL(A.fl.Ah));this.YB.S(A.aaL(A.fl.Ah
));this.Yx.S(A.aaL(A.fl.Ah));this.Yy.S(A.aaL(A.fl.Ah));this.Yz.S(A.aaL(A.fl.Ah));
this.YA.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Et;this.Gc._Done();
this.YB._Done();this.Yx._Done();this.Yy._Done();this.Yz._Done();this.YA._Done();
C.Et._Done.call(this);},_ReInit:function(){C.Et._ReInit.call(this);this.Gc._ReInit(
);this.YB._ReInit();this.Yx._ReInit();this.Yy._ReInit();this.Yz._ReInit();this.YA.
_ReInit();this.Gc.R(A.aaR(A.acf.Date));this.YB.R(A.aaR(A.acf.Bt));this.Yx.R(A.aaR(
A.acf.ATt));this.Yy.R(A.aaR(A.acf.ATu));this.Yz.R(A.aaR(A.acf.ANS));this.YA.R(A.
aaR(A.acf.AMQ));this.Gc.S(A.aaL(A.fl.Ah));this.YB.S(A.aaL(A.fl.Ah));this.Yx.S(A.
aaL(A.fl.Ah));this.Yy.S(A.aaL(A.fl.Ah));this.Yz.S(A.aaL(A.fl.Ah));this.YA.S(A.aaL(
A.fl.Ah));},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.ALR={Akv:function(LW){if(!LW)return;
var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fj.CX(HQ);var
AAd=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAd.Initialize(3,5,0,true
);Fj.CX(AAd);LW.Bi(Fj);},ADc:function(){if(!A._GetAutoObject(A.Device.Device).Br
)return false;return A._GetAutoObject(A.Device.Device).Br.Cb()>0;},_Init:function(
aArg){C.Aaz._Init.call(this,aArg);this.__proto__=C.ALR;this.ASt(C.ATr);this.ASu(
C.AO3);this.ASk(C.Tl);this.Arj(A.aaR(A.acf.AwJ));this.Du(A.aaR(A.acf.Am0));},_ReInit:
function(){C.Aaz._ReInit.call(this);this.Arj(A.aaR(A.acf.AwJ));this.Du(A.aaR(A.acf.
Am0));},_className:"Application::AnimalRatings"};C.Iv={B5:null,Z:null,V:null,Ud:
5,U:function(E){C.IS.U.call(this,E);this.V.R(E);},C8:function(E){C.IS.C8.call(this
,E);this.V.L(E);},S:function(E){if(this.B5===E)return;this.B5=E;this.V.S(this.B5
);},Auh:function(G){var B;var Ns=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Ns)return;
if(((B=Ns.Db(0x1))[2]-B[0])>((B=Ns.M)[2]-B[0]))this.S(A.aaL(A.fl.Ie));},Kg:function(
E){if(this.Ud===E)return;this.Ud=E;this.Z.H([].concat(E,this.Z.M.slice(1,4)));},
Az9:function(G){A.pe([this,this.Auh],this);},_Init:function(aArg){C.IS._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.Iv;this.Z.AY(0x3F);this.Z.H(AHS);this.Z.A9F(5);this.
Z.Kf(3);this.V.AY(0x34);this.V.H(ZV);this.V.I0(true);this.V.A4(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Z,0);this.J(this.V,0);this.Z.Ej=[this,this.
Az9];this.V.S(A.aaL(A.fl.J$));},_Done:function(){this.__proto__=C.IS;this.Z._Done(
);this.V._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(this
);this.Z._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J$));},_Mark:function(D){
var B;C.IS._Mark.call(this,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RD={Afu:0,Ai:function(Ae){C.Fk.
Ai.call(this,Ae);this.U(A.aaR(A.acf.Rz));if(this.Afu>=0)this.Kk((this.Afu.toFixed(
)+CL)+A.aaR(A.acf.J8));else this.Kk(A.aaR(A.acf.Unknown));},Cd:function(G){C.Fk.
Cd.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.Afu=-1;
else this.Afu=A._GetAutoObject(A.Device.Helper).W.Rz();this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RD;},_className:"Application::AnimalInfoItemAge"
};C.RH={A3H:0,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.Ae_));if(
this.A3H>0)this.Kk((A._GetAutoObject(A.Device.Converter).AkL(this.A3H)+CL)+A._GetAutoObject(
A.acj.DN).AfH());else this.Kk(A.aaR(A.acf.Unknown));},Cd:function(G){C.Fk.Cd.call(
this,G);this.A3H=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RH;},_className:
"Application::AnimalInfoItemWeight"};C.Tm={Z:null,Ea:null,Eq:null,E3:null,PN:null
,E2:null,PO:null,AiZ:0,O_:0,CT:function(){this.Am();},Ai:function(Ae){C.JA.Ai.call(
this,Ae);this.U(A.aaR(A.acf.BgM));this.E3.R(this.AiZ.toFixed());this.E2.R(this.O_.
toFixed());if(!!this.AiZ||!!this.O_)this.PO.R(AYs+(this.AiZ+this.O_).toFixed());
else this.PO.R(A.aaR(A.acf.ARs));},Cd:function(G){C.JA.Cd.call(this,G);var AkC;AkC=
A._GetAutoObject(A.Device.Helper).BhA(A._GetAutoObject(A.Device.Device).Br,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.AiZ=AkC.Get(2);this.O_=AkC.Get(1);this.Am();},C8:
function(E){C.JA.C8.call(this,E);this.PN.L(E);this.PO.L(E);},Asc:function(G){if(
!!this.AiZ||!!this.O_){this.E3.Y(true);this.PN.Y(true);this.E2.Y(true);}else{this.
E3.Y(false);this.PN.Y(false);this.E2.Y(false);}this.Ea.H(this.E3.M);this.Ea.Y(this.
E3.Fd());this.Eq.H(this.E2.M);this.Eq.Y(this.E2.Fd());},Auh:function(G){var B;var
Ns=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Ns)return;if(((B=Ns.Db(0x1))[2]-B[0])>((
B=Ns.M)[2]-B[0])){this.E2.S(A.aaL(A.fl.Ak));this.PN.S(A.aaL(A.fl.Ak));this.E3.S(
A.aaL(A.fl.Ak));this.PO.S(A.aaL(A.fl.Ak));}},Az9:function(G){A.pe([this,this.Auh
],this);},_Init:function(aArg){C.JA._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AJ._Init.call(this.Ea={I:this},0);A.acg.AJ._Init.call(this.Eq={
I:this},0);A.acg.Text._Init.call(this.E3={I:this},0);A.acg.Text._Init.call(this.
PN={I:this},0);A.acg.Text._Init.call(this.E2={I:this},0);A.acg.Text._Init.call(this.
PO={I:this},0);this.__proto__=C.Tm;this.Z.H(AxO);this.Z.Bmh(0);this.Z.Kf(3);this.
Ea.H(AYt);this.Ea.L(A.jb.H1);this.Eq.H(AxM);this.Eq.L(A.jb.FZ);this.E3.AY(0x34);
this.E3.H(ZV);this.E3.HH(2);this.E3.I0(true);this.E3.R(ZT);this.E3.L(A.jb.Text);
this.E3.Aj(true);this.PN.AY(0x34);this.PN.H(ZV);this.PN.I0(true);this.PN.R(AHx);
this.PN.L(A.jb.Text);this.PN.Aj(true);this.E2.AY(0x34);this.E2.H(ZV);this.E2.HH(
2);this.E2.I0(true);this.E2.R(ZT);this.E2.L(A.jb.Bj);this.E2.Aj(true);this.PO.AY(
0x34);this.PO.H(ZV);this.PO.I0(true);this.PO.R(SV);this.PO.L(A.jb.Text);this.PO.
Aj(true);this.J(this.Z,0);this.J(this.Ea,0);this.J(this.Eq,0);this.J(this.E3,0);
this.J(this.PN,0);this.J(this.E2,0);this.J(this.PO,0);this.Z.Ej=[this,this.Az9];
this.E3.QT([this,this.Asc]);this.E3.S(A.aaL(A.fl.Ah));this.PN.S(A.aaL(A.fl.Ah));
this.E2.QT([this,this.Asc]);this.E2.S(A.aaL(A.fl.Ah));this.PO.S(A.aaL(A.fl.Ah));
},_Done:function(){this.__proto__=C.JA;this.Z._Done();this.Ea._Done();this.Eq._Done(
);this.E3._Done();this.PN._Done();this.E2._Done();this.PO._Done();C.JA._Done.call(
this);},_ReInit:function(){C.JA._ReInit.call(this);this.Z._ReInit();this.Ea._ReInit(
);this.Eq._ReInit();this.E3._ReInit();this.PN._ReInit();this.E2._ReInit();this.PO.
_ReInit();this.E3.S(A.aaL(A.fl.Ah));this.PN.S(A.aaL(A.fl.Ah));this.E2.S(A.aaL(A.
fl.Ah));this.PO.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(D){var B;C.JA._Mark.
call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PO)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qq={FK:0,H8:0
,A1z:false,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(AYu+A.aaR(A.acf.AGw));if(
this.A1z){this.Kk((A._GetAutoObject(A.Device.Converter).SR(this.FK,2,true)+CL)+A.
_GetAutoObject(A.acj.DN).Z_());this.Background.L(A._GetAutoObject(A.acj.DN).Ay7(
this.FK,this.H8));this.C8(A._GetAutoObject(A.acj.DN).Ay9(this.FK,this.H8));}else{
this.Kk(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CF);this.C8(A.jb.Text);}},Cd:
function(G){C.Fk.Cd.call(this,G);var Ly=A._GetAutoObject(A.Device.Helper).MK(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!Ly){this.A1z=true;this.FK=A._GetAutoObject(A.acj.DN).Ak9(Ly,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A1z=false;this.FK=0;}this.H8=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.Qq;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tl={Z:null,FM:null,Ea:
null,Eq:null,Mz:null,E3:null,E2:null,OR:null,Aaa:0,AiZ:0,O_:0,CT:function(){this.
Am();},Ai:function(Ae){C.JA.Ai.call(this,Ae);this.U(A.aaR(A.acf.AwJ));this.Mz.R(
this.Aaa.toFixed());this.E3.R(this.AiZ.toFixed());this.E2.R(this.O_.toFixed());}
,Cd:function(G){C.JA.Cd.call(this,G);var AkC;AkC=A._GetAutoObject(A.Device.Helper
).A5V(A._GetAutoObject(A.Device.Device).Br,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aaa=AkC.Get(3);this.AiZ=AkC.Get(2);this.O_=AkC.Get(1);this.Am();},Asc:
function(G){if((!!this.Aaa||!!this.AiZ)||!!this.O_){this.Mz.Y(true);this.E3.Y(true
);this.E2.Y(true);this.OR.Y(false);}else{this.Mz.Y(false);this.E3.Y(false);this.
E2.Y(false);this.OR.Y(true);}this.FM.H(this.Mz.M);this.FM.Y(this.Mz.Fd());this.Ea.
H(this.E3.M);this.Ea.Y(this.E3.Fd());this.Eq.H(this.E2.M);this.Eq.Y(this.E2.Fd()
);},Auh:function(G){var B;var Ns=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Ns)return;
if(((B=Ns.Db(0x1))[2]-B[0])>((B=Ns.M)[2]-B[0])){this.E2.S(A.aaL(A.fl.Ak));this.E3.
S(A.aaL(A.fl.Ak));this.Mz.S(A.aaL(A.fl.Ak));}},Az9:function(G){A.pe([this,this.Auh
],this);},_Init:function(aArg){C.JA._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AJ._Init.call(this.FM={I:this},0);A.acg.AJ._Init.call(this.Ea={
I:this},0);A.acg.AJ._Init.call(this.Eq={I:this},0);A.acg.Text._Init.call(this.Mz={
I:this},0);A.acg.Text._Init.call(this.E3={I:this},0);A.acg.Text._Init.call(this.
E2={I:this},0);A.acg.Text._Init.call(this.OR={I:this},0);this.__proto__=C.Tl;this.
Z.AY(0x3F);this.Z.H(AxO);this.Z.A9F(5);this.Z.Kf(3);this.FM.H(AYv);this.FM.L(A.jb.
ET);this.Ea.H(AYw);this.Ea.L(A.jb.H1);this.Eq.H(An9);this.Eq.L(A.jb.FZ);this.Mz.
AY(0x3C);this.Mz.H(ZV);this.Mz.HH(2);this.Mz.I0(true);this.Mz.R(ZT);this.Mz.L(A.
jb.Text);this.Mz.Aj(true);this.E3.AY(0x3C);this.E3.H(ZV);this.E3.HH(2);this.E3.I0(
true);this.E3.R(ZT);this.E3.L(A.jb.Text);this.E3.Aj(true);this.E2.AY(0x3C);this.
E2.H(ZV);this.E2.HH(2);this.E2.I0(true);this.E2.R(ZT);this.E2.L(A.jb.Bj);this.E2.
Aj(true);this.OR.AY(0x34);this.OR.H(ZV);this.OR.I0(true);this.OR.A4(0x11);this.OR.
R(A.aaR(A.acf.ARs));this.OR.L(A.jb.Text);this.OR.Aj(true);this.OR.Y(false);this.
J(this.Z,0);this.J(this.FM,0);this.J(this.Ea,0);this.J(this.Eq,0);this.J(this.Mz
,0);this.J(this.E3,0);this.J(this.E2,0);this.J(this.OR,0);this.Z.Ej=[this,this.Az9
];this.Mz.QT([this,this.Asc]);this.Mz.S(A.aaL(A.fl.Ah));this.E3.QT([this,this.Asc
]);this.E3.S(A.aaL(A.fl.Ah));this.E2.QT([this,this.Asc]);this.E2.S(A.aaL(A.fl.Ah
));this.OR.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.JA;this.Z._Done(
);this.FM._Done();this.Ea._Done();this.Eq._Done();this.Mz._Done();this.E3._Done(
);this.E2._Done();this.OR._Done();C.JA._Done.call(this);},_ReInit:function(){C.JA.
_ReInit.call(this);this.Z._ReInit();this.FM._ReInit();this.Ea._ReInit();this.Eq.
_ReInit();this.Mz._ReInit();this.E3._ReInit();this.E2._ReInit();this.OR._ReInit(
);this.OR.R(A.aaR(A.acf.ARs));this.Mz.S(A.aaL(A.fl.Ah));this.E3.S(A.aaL(A.fl.Ah)
);this.E2.S(A.aaL(A.fl.Ah));this.OR.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(
D){var B;C.JA._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.ALz={_Init:function(aArg){C.Ai1._Init.call(
this,aArg);this.__proto__=C.ALz;this.N.B0(A.aaR(A.acf.A68));this.A3S=1;this.Q7.CB(
A.aaL(A.fl.Ak));},_ReInit:function(){C.Ai1._ReInit.call(this);this.N.B0(A.aaR(A.
acf.A68));this.Q7.CB(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.Gy={_Init:function(aArg){C.Ai1._Init.call(this,aArg);this.__proto__=C.Gy;this.
N.B0(A.aaR(A.acf.A4s));this.N6.R(A.aaR(A.acf.Auk));},_ReInit:function(){C.Ai1._ReInit.
call(this);this.N.B0(A.aaR(A.acf.A4s));this.N6.R(A.aaR(A.acf.Auk));},_className:
"Application::AnimalListActionsScreen"};C.AQi={OE:null,IF:null,HY:null,ID:null,GE:
null,Alz:function(G){A.pe([this,this.ByP],this);},ByP:function(G){A._GetAutoObject(
C.AX).BS(3);},_Init:function(aArg){C.Cq._Init.call(this,aArg);C.OE._Init.call(this.
OE={I:this},0);C.BX._Init.call(this.IF={I:this},0);C.Sy._Init.call(this.HY={I:this
},0);C.AFZ._Init.call(this.ID={I:this},0);C.Q0._Init.call(this.GE={I:this},0);this.
__proto__=C.AQi;var B;this.JJ(A.aaR(A.acf.A_E));this.IF.H(AhF);this.IF.Aj(true);
this.IF.U(A.aaR(A.acf.Language));this.IF.A9o(100);this.HY.H(WV);this.HY.Aj(true);
this.HY.U(A.aaR(A.acf.Date));this.HY.Bg(true);this.ID.H(ZS);this.ID.Aj(true);this.
ID.U(A.aaR(A.acf.Bt));this.GE.H(AhE);this.GE.Aj(true);this.GE.Y(true);this.GE.U(
A.aaR(A.acf.AFw));this.GE.Bg(true);this.GE.Arr(false);this.GE.A9w(true);this.Kn(
this.Z,-1);this.Kn(this.Aw,-1);this.J(this.IF,0);this.J(this.HY,0);this.J(this.ID
,0);this.J(this.GE,0);this.IF.Wf(A.aaL(A.fl.Hk));this.IF.Wg(A.aaL(A.fl.Hk));this.
IF.At([B=this.OE,B.B9,B.B_]);this.IF.CG(this.OE);this.HY.Aex([B=this.HY,B.FJ]);this.
HY.Gg([this,this.D3,this.GG]);this.HY.Akc(A.aaL(A.ach.Edit));this.HY.AbN([B=A._GetAutoObject(
A.Device.Helper),B.UH,B.UI]);this.ID.Aex([B=this.ID,B.FJ]);this.ID.Gg([this,this.
D3,this.GG]);this.ID.Akc(A.aaL(A.ach.Edit));this.ID.AbN([B=A._GetAutoObject(A.Device.
Helper),B.UH,B.UI]);this.GE.Aex([B=this.GE,B.FJ]);this.GE.Gg([this,this.D3,this.
GG]);this.GE.Akc(A.aaL(A.ach.Edit));this.GE.At([B=A._GetAutoObject(A.Device.Device
),B.ARW,B.AZr]);},_Done:function(){this.__proto__=C.Cq;this.OE._Done();this.IF._Done(
);this.HY._Done();this.ID._Done();this.GE._Done();C.Cq._Done.call(this);},_ReInit:
function(){C.Cq._ReInit.call(this);this.OE._ReInit();this.IF._ReInit();this.HY._ReInit(
);this.ID._ReInit();this.GE._ReInit();this.JJ(A.aaR(A.acf.A_E));this.IF.U(A.aaR(
A.acf.Language));this.HY.U(A.aaR(A.acf.Date));this.ID.U(A.aaR(A.acf.Bt));this.GE.
U(A.aaR(A.acf.AFw));},_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.
OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aaz={Bf:null,Fn:null,AmB:null,Amk:null,R0:null,A6d:A.jV,KG:A.jV,AQK:null,AQL:
null,ACz:null,Cw:function(G){var B;C.D2.Cw.call(this,G);A.zX([this,this.A16],[B=
A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId],0);this.A16(this);},EV:function(
G){var B;A.z$([this,this.A16],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId
],0);C.D2.EV.call(this,G);},Y7:function(E){C.D2.Y7.call(this,E);if(A.aa0(this.AN
,E))return;if(!!this.Bf)this.Bf.Y7(E);},ASt:function(E){if(this.AQK===E)return;this.
AQK=E;if(!!this.Bf)this.Bf.NU(E);},ASu:function(E){if(this.AQL===E)return;this.AQL=
E;this.BnH(this);},ASk:function(E){if(this.ACz===E)return;this.ACz=E;A.pe([this,
this.BnG],this);},Arj:function(E){if(this.A6d===E)return;this.A6d=E;this.R0.R(E);
},Du:function(E){if(this.KG===E)return;this.KG=E;if(!!this.Bf)this.Bf.Du(E);},Akv:
function(LW){A.ab5("%s",AYx);},ADc:function(){A.ab5("%s",AkQ);return false;},AwR:
function(G){if(!!this.Bf)this.HI(this.Bf);this.Bf=A._NewObject(C.FT,0);this.Bf.H(
Asy);this.Bf.Y6(A._GetAutoObject(A.Device.Device).Br);this.Bf.Du(this.KG);this.Bf.
NU(this.AQK);this.Bf.Y7(this.AN);this.J(this.Bf,0);this.A9(this.Bf);},BnH:function(
G){var B;if(!!this.Fn)this.HI(this.Fn);this.Fn=(C.Et.isPrototypeOf(B=A._NewObject(
this.AQL,0))?B:null);this.Fn.H(JQ);this.J(this.Fn,0);},BnG:function(G){var B;if(
!!this.AmB)this.HI(this.AmB);if(!!this.ACz&&this.ADc()){this.AmB=(C.IS.isPrototypeOf(
B=A._NewObject(this.ACz,0))?B:null);this.AmB.H(BC);this.AmB.Bg(false);this.J(this.
AmB,0);this.R0.Y(false);}else this.R0.Y(true);},A16:function(G){this.Akv(A._GetAutoObject(
A.Device.Device).Br);this.AwR(this);},_Init:function(aArg){C.D2._Init.call(this,
aArg);A.acg.AJ._Init.call(this.Amk={I:this},0);C.CO._Init.call(this.R0={I:this},
0);this.__proto__=C.Aaz;this.Amk.H(BC);this.Amk.L(A.jb.CF);this.R0.H(AG6);this.R0.
A4(0x11);this.R0.L(A.jb.Text);this.J(this.Amk,0);this.J(this.R0,0);this.R0.S(A.aaL(
A.fl.J$));this.R0.A8(A.aaL(A.fl.Ie));},_Done:function(){this.__proto__=C.D2;this.
Amk._Done();this.R0._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.
call(this);this.Amk._ReInit();this.R0._ReInit();this.R0.S(A.aaL(A.fl.J$));this.R0.
A8(A.aaL(A.fl.Ie));},_Mark:function(D){var B;C.D2._Mark.call(this,D);if((B=this.
Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amk)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.JB={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bbw],[B=A._GetAutoObject(A.Device.Device),B.ADP,B.AH9],0);A.pe([this,this.Bbw],this
);},Do:function(){return 4;},F$:function(aIndex){return this.AnimalListContentToString.
BQ(this.C4(aIndex));},At:function(E){C.CN.At.call(this,E);A._GetAutoObject(A.Device.
Device).AbG(E);},Bbw:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CN._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.JB;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,2
);this.Co.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.CN;this.AnimalListContentToString.
_Done();C.CN._Done.call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.CN._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.AQP={IF:null,YN:null,YW:null,YU:null,YX:null
,YO:null,YS:null,YV:null,YR:null,OE:null,_Init:function(aArg){C.Cq._Init.call(this
,aArg);C.BX._Init.call(this.IF={I:this},0);C.NS._Init.call(this.YN={I:this},0);C.
NS._Init.call(this.YW={I:this},0);C.NS._Init.call(this.YU={I:this},0);C.NS._Init.
call(this.YX={I:this},0);C.NS._Init.call(this.YO={I:this},0);C.NS._Init.call(this.
YS={I:this},0);C.NS._Init.call(this.YV={I:this},0);C.NS._Init.call(this.YR={I:this
},0);C.OE._Init.call(this.OE={I:this},0);this.__proto__=C.AQP;var B;this.JJ(A.aaR(
A.acf.Settings));this.IF.H(AhF);this.IF.Aj(true);this.IF.U(A.aaR(A.acf.Language)
);this.IF.A9o(100);this.YN.H(Asz);this.YN.Aj(true);this.YN.U(A.aaR(A.acf.ABK));this.
YN.NV(16);this.YW.H(AsA);this.YW.Aj(true);this.YW.U(A.aaR(A.acf.AGr));this.YW.NV(
22);this.YU.H(AsB);this.YU.Aj(true);this.YU.U(A.aaR(A.acf.Temperature));this.YU.
NV(17);this.YX.H(AxP);this.YX.Aj(true);this.YX.U(A.aaR(A.acf.ABG));this.YX.NV(46
);this.YO.H(An_);this.YO.Aj(true);this.YO.U(A.aaR(A.acf.Device));this.YO.NV(18);
this.YS.H(An_);this.YS.Aj(true);this.YS.U(A.aaR(A.acf.ArN));this.YS.NV(19);this.
YV.H(AYy);this.YV.Aj(true);this.YV.U(A.aaR(A.acf.LinkTransponder));this.YV.NV(101
);this.YR.H(An3);this.YR.Aj(true);this.YR.U(A.aaR(A.acf.AB0));this.YR.NV(87);this.
J(this.IF,0);this.J(this.YN,0);this.J(this.YW,0);this.J(this.YU,0);this.J(this.YX
,0);this.J(this.YO,0);this.J(this.YS,0);this.J(this.YV,0);this.J(this.YR,0);this.
IF.Wf(A.aaL(A.fl.Hk));this.IF.Wg(A.aaL(A.fl.Hk));this.IF.At([B=this.OE,B.B9,B.B_
]);this.IF.CG(this.OE);this.YN.AN=[B=this.YN,B.NY];this.YW.AN=[B=this.YW,B.NY];this.
YU.AN=[B=this.YU,B.NY];this.YX.AN=[B=this.YX,B.NY];this.YO.AN=[B=this.YO,B.NY];this.
YS.AN=[B=this.YS,B.NY];this.YV.AN=[B=this.YV,B.NY];this.YR.AN=[B=this.YR,B.NY];}
,_Done:function(){this.__proto__=C.Cq;this.IF._Done();this.YN._Done();this.YW._Done(
);this.YU._Done();this.YX._Done();this.YO._Done();this.YS._Done();this.YV._Done(
);this.YR._Done();this.OE._Done();C.Cq._Done.call(this);},_ReInit:function(){C.Cq.
_ReInit.call(this);this.IF._ReInit();this.YN._ReInit();this.YW._ReInit();this.YU.
_ReInit();this.YX._ReInit();this.YO._ReInit();this.YS._ReInit();this.YV._ReInit(
);this.YR._ReInit();this.OE._ReInit();this.JJ(A.aaR(A.acf.Settings));this.IF.U(A.
aaR(A.acf.Language));this.YN.U(A.aaR(A.acf.ABK));this.YW.U(A.aaR(A.acf.AGr));this.
YU.U(A.aaR(A.acf.Temperature));this.YX.U(A.aaR(A.acf.ABG));this.YO.U(A.aaR(A.acf.
Device));this.YS.U(A.aaR(A.acf.ArN));this.YV.U(A.aaR(A.acf.LinkTransponder));this.
YR.U(A.aaR(A.acf.AB0));},_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.
IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OE
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"};
C.ALM={EL:null,Init:function(aArg){this.EL.Ag_(A._NewObject(A.Core.Bt,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dt()).Format(A.aaR(A.acf.Agz)));},ATy:function(
){this.EL.AeA(this.AOg());this.Aac=!this.EL.EP.AV;},AiD:function(G){this.EL.Ag_(
A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dt()).Format(
A.aaR(A.acf.Agz)));this.ATy();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Du(A.aaR(A.acf.A7k));else this.Du(A.aaR(A.acf.AqX));this.Am();},AOg:function(
){var Bz=A._NewObject(C.Ap2,0);var P$=A._GetAutoObject(A.Device.Helper).ANw(A._GetAutoObject(
A.Device.Helper).Dt());var Dq=A._GetAutoObject(A.Device.Helper).ApY(P$-(86400*this.
Mo));Bz.Anb(AHT);Bz.QQ([].concat(0,Bz.F0.slice(1,4)));Bz.QQ(A.abN(Bz.F0,(P$-Dq)|
0));Bz.QQ(A.abP(Bz.F0,3400));Bz.QQ([].concat(Bz.F0.slice(0,3),4200));var FX=A._GetAutoObject(
A.Device.Device).Br.Cb();Bz.Awa(FX);Bz.XZ();if(FX>0){var P=0;while(P<FX){var Apw=
A._GetAutoObject(A.Device.Device).Br.CC(P,7);var Apx=A._GetAutoObject(A.Device.Device
).Br.Hz(P,6)-Dq;if(Apw>0)Bz.ApR(Apx,Apw);P=P+1;}}return Bz;},_Init:function(aArg
){C.K5._Init.call(this,aArg);C.Aqr._Init.call(this.EL={I:this},0);this.__proto__=
C.ALM;this.EL.H(AsC);this.EL.U(A.aaR(A.acf.Temperature));this.EL.AEu(C.AGb);this.
J(this.EL,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K5;this.EL._Done(
);C.K5._Done.call(this);},_ReInit:function(){C.K5._ReInit.call(this);this.EL._ReInit(
);this.EL.U(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K5._Mark.call(
this,D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.ALN={ZD:null,OU:null,Agt:null,Aac:false,Init:function(aArg){this.ZD.Ag_(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dt()).Format(A.aaR(A.acf.
Agz)));},Ai:function(Ae){C.D2.Ai.call(this,Ae);this.Agt.Y(this.Aac);},Cw:function(
G){var B;C.D2.Cw.call(this,G);A.zX([this,this.AiD],[B=A._GetAutoObject(A.Device.
Helper),B.UH,B.UI],0);A.zV([this,this.AiD],A._GetAutoObject(A.Device.Device).Br,
0);A.zX([this,this.AlN],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId],0
);A.pe([this,this.AlN],this);},EV:function(G){var B;A.z$([this,this.AiD],[B=A._GetAutoObject(
A.Device.Helper),B.UH,B.UI],0);A.z9([this,this.AiD],A._GetAutoObject(A.Device.Device
).Br,0);A.z$([this,this.AlN],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId
],0);C.D2.EV.call(this,G);},AlN:function(G){var Fj=A._NewObject(A.Device.Filter,
0);var HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fj.CX(HQ);A._GetAutoObject(A.Device.Device).Br.Bi(Fj
);},AiD:function(G){this.ZD.Ag_(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dt()).Format(A.aaR(A.acf.Agz)));this.Bm3();this.Am();},Bm3:function(
){var B;var FX=A._GetAutoObject(A.Device.Device).Br.Cb();var K3=A._NewObject(C.Ap2
,0);var U6=A._NewObject(C.Ap2,0);var P$=A._GetAutoObject(A.Device.Helper).ANw(A.
_GetAutoObject(A.Device.Helper).Dt());var Dq=A._GetAutoObject(A.Device.Helper).ApY(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K3.QQ([].concat(0,K3.F0.slice(1
,4)));K3.QQ(A.abN(K3.F0,(P$-Dq)|0));K3.QQ(A.abP(K3.F0,0));K3.QQ([].concat(K3.F0.
slice(0,3),150000));K3.Anb(AYz);U6.QQ([].concat(0,U6.F0.slice(1,4)));U6.QQ(A.abN(
U6.F0,(P$-Dq)|0));U6.QQ(A.abP(U6.F0,0));U6.QQ([].concat(U6.F0.slice(0,3),1500));
U6.Anb(AYA);K3.Awa(FX);K3.XZ();U6.Awa(FX);U6.XZ();if(FX>0){var P=0;var Aae=0;var
Azw=0;var AJt=0;var A1c=0;var Bb_=true;while(P<FX){var AlI=A._GetAutoObject(A.Device.
Device).Br.CC(P,8);var Aap=A._GetAutoObject(A.Device.Device).Br.Hz(P,6)-Dq;if(AlI>
0){K3.ApR(Aap,AlI);if(!A1c){A1c=Aap;AJt=AlI;}if(Azw>0){var Ly=A._GetAutoObject(A.
Device.Helper).MK(Azw,Aap);if(!!Ly){var FK=A._GetAutoObject(A.acj.DN).Ak9(Ly,Aae
,AlI);if(Bb_){U6.ApR(Azw,FK);Bb_=false;}U6.ApR(Aap,FK);}}Aae=AlI;Azw=Aap;}P=P+1;
}var Adr=A.aaR(A.acf.BfL);var FK=A._GetAutoObject(A.Device.Helper).BhC(A1c,Azw,AJt
,Aae);Adr=A._GetAutoObject(A.Device.Helper).Nd(Adr,P0,FK.toFixed());Adr=A._GetAutoObject(
A.Device.Helper).Nd(Adr,Axs,A._GetAutoObject(A.acj.DN).Z_());this.OU.Ic.R(Adr);}
this.Aac=!K3.AV;if(this.Aac)this.OU.Ic.R(A.jV);(C.OU.isPrototypeOf(B=this.OU.EL)?
B:null).Am9([B=A._GetAutoObject(A.Device.Helper).W,B.PH,B.DT]);this.ZD.AeA(K3);this.
OU.AeA(U6);},_Init:function(aArg){C.D2._Init.call(this,aArg);C.Aqr._Init.call(this.
ZD={I:this},0);C.Aqr._Init.call(this.OU={I:this},0);C.Akt._Init.call(this.Agt={I:
this},0);this.__proto__=C.ALN;this.ZD.H(AYB);this.ZD.U(A.aaR(A.acf.Ae_));this.ZD.
AEu(C.AMi);this.OU.H(AYC);this.OU.U(A.aaR(A.acf.AGw));this.OU.AEu(C.OU);this.Agt.
H(SW);this.Agt.R(A.aaR(A.acf.Aj1));this.J(this.ZD,0);this.J(this.OU,0);this.J(this.
Agt,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D2;this.ZD._Done();this.
OU._Done();this.Agt._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.
call(this);this.ZD._ReInit();this.OU._ReInit();this.Agt._ReInit();this.ZD.U(A.aaR(
A.acf.Ae_));this.OU.U(A.aaR(A.acf.AGw));this.Agt.R(A.aaR(A.acf.Aj1));},_Mark:function(
D){var B;C.D2._Mark.call(this,D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agt)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoWeightsGraph"};C.ALK={AuH:null,AuG:null,
AwL:null,Aub:null,Vf:null,AaZ:null,AaY:null,Ab2:null,AeT:null,Init:function(aArg
){this.Vf.Ag_(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper
).Dt()).Format(A.aaR(A.acf.Agz)));},A3z:function(G){this.Vf.AbO(this.Aub);this.AaZ.
AbO(this.AuH);this.AaY.AbO(this.AuG);this.Ab2.AbO(this.AwL);},AwK:function(){var
FX=A._GetAutoObject(A.Device.Device).Br.Cb();this.Aub=A._NewObject(C.Ai_,0);this.
AuH=A._NewObject(C.Ai_,0);this.AuG=A._NewObject(C.Ai_,0);this.AwL=A._NewObject(C.
Ai_,0);if(FX>0){var P=FX-1;while(P>=0){var D1=A._GetAutoObject(A.Device.Device).
Br.Hz(P,6);this.AsV(this.Aub,P,3,D1);this.AsV(this.AuH,P,2,D1);this.AsV(this.AuG
,P,5,D1);this.AsV(this.AwL,P,4,D1);P=P-1;}}this.Aac=!(((this.Aub.AV+this.AuG.AV)+
this.AuH.AV)+this.AwL.AV);A.pe([this,this.A3z],this);},AsV:function(A0c,Ad,A0b,P5
){var Ak5=A._GetAutoObject(A.Device.Device).Br.IV(Ad,A0b);if(!!Ak5)A0c.Oq(Ak5,P5
);},AbM:function(E){if(this.Mo===E)return;C.K5.AbM.call(this,E);if(!!this.Vf)this.
Vf.AbM(E);if(!!this.AaZ)this.AaZ.AbM(E);if(!!this.AaY)this.AaY.AbM(E);if(!!this.
Ab2)this.Ab2.AbM(E);this.AeT.AbM(E);},AiD:function(G){this.Vf.Ag_(A._NewObject(A.
Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dt()).Format(A.aaR(A.acf.
Agz)));this.AwK();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Du(A.aaR(A.acf.Bi2));else this.Du(A.aaR(A.acf.Am0));this.Am();},_Init:function(
aArg){C.K5._Init.call(this,aArg);C.Ahe._Init.call(this.Vf={I:this},0);C.Ahe._Init.
call(this.AaZ={I:this},0);C.Ahe._Init.call(this.AaY={I:this},0);C.Ahe._Init.call(
this.Ab2={I:this},0);C.ATv._Init.call(this.AeT={I:this},0);this.__proto__=C.ALK;
this.Du(A.aaR(A.acf.Am0));this.Vf.H(AYD);this.Vf.R(A.aaR(A.acf.AFB));this.AaZ.H(
AYE);this.AaZ.R(A.aaR(A.acf.Feed));this.AaY.H(AYF);this.AaY.R(A.aaR(A.acf.AFD));
this.Ab2.H(AYG);this.Ab2.R(A.aaR(A.acf.AFE));this.AeT.H(AYH);this.J(this.Vf,-1);
this.J(this.AaZ,-1);this.J(this.AaY,-1);this.J(this.Ab2,-1);this.J(this.AeT,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K5;this.Vf._Done();this.AaZ.
_Done();this.AaY._Done();this.Ab2._Done();this.AeT._Done();C.K5._Done.call(this);
},_ReInit:function(){C.K5._ReInit.call(this);this.Vf._ReInit();this.AaZ._ReInit(
);this.AaY._ReInit();this.Ab2._ReInit();this.AeT._ReInit();this.Du(A.aaR(A.acf.Am0
));this.Vf.R(A.aaR(A.acf.AFB));this.AaZ.R(A.aaR(A.acf.Feed));this.AaY.R(A.aaR(A.
acf.AFD));this.Ab2.R(A.aaR(A.acf.AFE));},_Mark:function(D){var B;C.K5._Mark.call(
this,D);if((B=this.AuH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuG)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AwL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.ALL={EL:null,Wk:null,AdX:null,A1x:false,Init:function(aArg){this.Wk.Ag_(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dt()).Format(A.aaR(A.acf.
Agz)));},Bh:function(aSize){C.K5.Bh.call(this,aSize);this.AdX.H(this.EL.M);},Ai:
function(Ae){C.K5.Ai.call(this,Ae);var BAl=!this.Aac&&this.A1x;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.AdX.R(A.aaR(A.acf.A7k));else this.
AdX.R(A.aaR(A.acf.AqX));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Du(A.aaR(
A.acf.Bi3));else this.Du(A.aaR(A.acf.Bi4));this.AdX.Y(BAl);},AiD:function(G){this.
Wk.Ag_(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dt(
)).Format(A.aaR(A.acf.Agz)));this.Aac=true;this.A1x=true;this.AwK();this.ATy();this.
Am();},ATy:function(){this.EL.AeA(this.AOg());if(!!this.EL.EP&&(this.EL.EP.AV>0)
){this.Aac=false;this.A1x=false;}},AOg:function(){var Bz=A._NewObject(C.Ap2,0);var
P$=A._GetAutoObject(A.Device.Helper).ANw(A._GetAutoObject(A.Device.Helper).Dt());
var Dq=A._GetAutoObject(A.Device.Helper).ApY(P$-(86400*this.Mo));Bz.Anb(AYI);Bz.
QQ([].concat(0,Bz.F0.slice(1,4)));Bz.QQ(A.abN(Bz.F0,(P$-Dq)|0));Bz.QQ(A.abP(Bz.F0
,3400));Bz.QQ([].concat(Bz.F0.slice(0,3),4200));var FX=A._GetAutoObject(A.Device.
Device).Br.Cb();Bz.Awa(FX);Bz.XZ();if(FX>0){var P=0;while(P<FX){var Apw=A._GetAutoObject(
A.Device.Device).Br.CC(P,7);var Apx=A._GetAutoObject(A.Device.Device).Br.Hz(P,6)-
Dq;if(Apw>0)Bz.ApR(Apx,Apw);P=P+1;}}return Bz;},BhR:function(){var FX=A._GetAutoObject(
A.Device.Device).Br.Cb();if(FX>0){var BeJ=A._NewObject(C.Ai_,0);var P=FX-1;while(
P>=0){var DU=A._NewObject(A.Device.Rating,0);DU.EC(P,A._GetAutoObject(A.Device.Device
).Br);var LL=A._GetAutoObject(A.Device.Helper).ACn(DU);if(!!LL)BeJ.Oq(LL,DU.Timestamp
);P=P-1;}return BeJ;}else return null;},AwK:function(){this.Wk.AbO(this.BhR());if(
!!this.Wk.N1&&(this.Wk.N1.AV>0))this.Aac=false;},_Init:function(aArg){C.K5._Init.
call(this,aArg);C.Aqr._Init.call(this.EL={I:this},0);C.Ahe._Init.call(this.Wk={I:
this},0);C.Akt._Init.call(this.AdX={I:this},0);this.__proto__=C.ALL;this.EL.H(Asy
);this.EL.U(A.aaR(A.acf.Temperature));this.EL.AEu(C.AGb);this.Wk.H(AYJ);this.Wk.
R(A.aaR(A.acf.Rating));this.AdX.H(Asy);this.J(this.EL,-2);this.J(this.Wk,-2);this.
J(this.AdX,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K5;this.EL._Done(
);this.Wk._Done();this.AdX._Done();C.K5._Done.call(this);},_ReInit:function(){C.
K5._ReInit.call(this);this.EL._ReInit();this.Wk._ReInit();this.AdX._ReInit();this.
EL.U(A.aaR(A.acf.Temperature));this.Wk.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K5._Mark.call(this,D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.Wp={Q:null,Gl:null,Gm:null
,Qz:null,AK:0,Ge:0,FS:100,Fr:0,Init:function(aArg){},IP:function(G){this.Fr=1;C.
D_.IP.call(this,G);},Bh:function(aSize){C.D_.Bh.call(this,aSize);this.Qz.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.D_.Ai.call(this,Ae);this.Qz.Y(this.Ge!==
this.FS);this.Qz.L(this.V.AQ);if((this.Fr===4)||(this.Fr===5))this.Qz.L(A.jb.ET);
},AlB:function(G){this.Fr=5;this.Am();if(this.Bl.Bv){A.pe([this,this.Ax8],this);
this.Bl.Ar(false);}this.Bl.Ar(true);},Qf:function(G){if(this.Fr===5)A.pe([this,this.
Ax8],this);if(this.Fr===4)A.pe([this,this.Ax9],this);if(this.Fr===1)A.pe(this.AN
,this);this.Fr=0;this.Am();},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcA:function(s){this.De(s);},At:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcA],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcA],E,0);if(!!E)A.pe([this,this.AcA],this);},AlC:function(G){this.Fr=4;this.
Am();if(this.Bl.Bv){A.pe([this,this.Ax9],this);this.Bl.Ar(false);}this.Bl.Ar(true
);},J0:function(G){this.Fr=0;},Ax9:function(s){this.J0(s);},JV:function(G){this.
Fr=0;},Ax8:function(s){this.JV(s);},Bx:function(E){if(E<this.Ge)E=this.Ge;if(E>this.
FS)E=this.FS;if(this.AK===E)return;this.AK=E;this.Am();},Gn:function(E){if(this.
Ge===E)return;this.Ge=E;this.Am();},E1:function(E){if(this.FS===E)return;this.FS=
E;this.Am();},_Init:function(aArg){C.D_._Init.call(this,aArg);A.Core.BJ._Init.call(
this.Gl={I:this},0);A.Core.BJ._Init.call(this.Gm={I:this},0);A.acg.An._Init.call(
this.Qz={I:this},0);this.__proto__=C.Wp;this.H(JP);this.Gl.Filter=5;this.Gm.Filter=
4;this.Background.H(JP);this.V.H(Acr);this.V.R(Lr);this.Qz.H(AxQ);this.J(this.Qz
,0);this.Gl.BK=[this,this.AlB];this.Gl.DS=[this,this.AlB];this.Gm.BK=[this,this.
AlC];this.Gm.DS=[this,this.AlC];this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak
));this.V.CB(null);this.Qz.Ax(A.aaL(A.ach.AL8));this.Init(aArg);},_Done:function(
){this.__proto__=C.D_;this.Gl._Done();this.Gm._Done();this.Qz._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.Gl._ReInit();this.Gm.
_ReInit();this.Qz._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.ATV={AC:null,CI:null,HD:
null,Bh:function(aSize){C.Wp.Bh.call(this,aSize);this.CI.H([this.Qz.M[2],this.Qz.
M[1],this.M[2],this.Qz.M[3]]);},Ai:function(Ae){C.Wp.Ai.call(this,Ae);this.CI.Abh(
0,this.CI.AV-1);if(this.Ge!==this.FS)this.Qz.Y(true);},Init:function(aArg){},De:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DK((F=this.Q,F[1].call(
F[0]))));},J0:function(G){var F;var BO=this.AK;C.Wp.J0.call(this,G);this.Bx(this.
AK+1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(
this.AK)));A.abo(this.Q,0);}},JV:function(G){var F;var BO=this.AK;C.Wp.JV.call(this
,G);this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C4(this.AK)));A.abo(this.Q,0);}},Bx:function(E){var Ql=0;if(this.Ge
!==this.FS){if(E<this.Ge){E=this.FS;Ql=-this.CI.GW*this.CI.AV;}if(E>this.FS){E=this.
Ge;Ql=this.CI.GW;}}C.Wp.Bx.call(this,E);if(!!Ql)this.CI.Gh(Ql);this.CI.GX(this.AK
);this.CI.Hy(this.CI.Gi,true,this.HD,null);},Hc:function(G){var B;var FW=this.CI.
GT;var Cx=(C.CO.isPrototypeOf(B=this.CI.Ce)?B:null);if(!Cx)return;Cx.S(this.V.B5
);Cx.A8(A.aaL(A.fl.Ah));Cx.L(this.V.AQ);if(!!this.AC)Cx.R(this.AC.F$(FW));else Cx.
R(WT);Cx.H(A.abK(Cx.M,[(B=this.CI.M)[2]-B[0],this.CI.GW]));},CG:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gn(0);this.E1(this.AC.Do()-1);this.CI.
Jn(this.AC.Do());this.CI.Abh(0,this.CI.AV-1);}},_Init:function(aArg){C.Wp._Init.
call(this,aArg);A.Core.CI._Init.call(this.CI={I:this},0);A.acl.Ga._Init.call(this.
HD={I:this},0);this.__proto__=C.ATV;this.H(JP);this.Qz.H(AYK);this.CI.AeH(40);this.
CI.NU(C.CO);this.HD.Wi(23);this.HD.HG(1);this.HD.Fe(200);this.J(this.CI,0);this.
V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));this.CI.Hc=[this,this.Hc];this.Init(
aArg);},_Done:function(){this.__proto__=C.Wp;this.CI._Done();this.HD._Done();C.Wp.
_Done.call(this);},_ReInit:function(){C.Wp._ReInit.call(this);this.CI._ReInit();
this.HD._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A8(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Wp._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RI={AKR:0
,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.AGw));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kk((A._GetAutoObject(A.Device.Converter).AkL(this.AKR
)+CL)+A._GetAutoObject(A.acj.DN).AfH());else this.Kk(A.aaR(A.acf.Unknown));},Cd:
function(G){C.Fk.Cd.call(this,G);this.AKR=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fk._Init.call(this,aArg);this.__proto__=C.RI;},_className:"Application::AnimalInfoItemWeightGain"
};C.AOU={Bd:null,C_:null,Init:function(aArg){var B;A.zX([this,this.Nf],[B=A._GetAutoObject(
A.Device.Device),B.ADO,B.AH8],0);},D$:function(G){C.IA.D$.call(this,G);this.C_.Ax(
A._GetAutoObject(A.Device.Converter).Bf1(A._GetAutoObject(A.Device.Device).D2));
},_Init:function(aArg){C.IA._Init.call(this,aArg);A.acg.DR._Init.call(this.Bd={I:
this},0);A.acg.An._Init.call(this.C_={I:this},0);this.__proto__=C.AOU;this.Bd.DM(
AxR);this.Bd.DY(AxS);this.Bd.L(A.jb.Bd);this.C_.H(AYL);this.C_.L(A.jb.Text);this.
J(this.Bd,0);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.AjD));this.Init(aArg);},_Done:
function(){this.__proto__=C.IA;this.Bd._Done();this.C_._Done();C.IA._Done.call(this
);},_ReInit:function(){C.IA._ReInit.call(this);this.Bd._ReInit();this.C_._ReInit(
);},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((B=this.Bd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AMU={Zl:null,Kr:null,Md:null,Timer:null,ABx:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.Zl.R(A._GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.Bpm),P0,this.ABx.
toFixed()));},Cw:function(G){this.Timer.Ar(true);},EV:function(G){this.Timer.Ar(
false);},Bzy:function(G){if(this.ABx>1){this.ABx=this.ABx-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AwS();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Zl={I:this},0);A.acg.Text.
_Init.call(this.Kr={I:this},0);A.acg.An._Init.call(this.Md={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AMU;this.Background.L(A.jb.C0
);this.N.Y(true);this.Zl.H(AYM);this.Zl.KM(true);this.Zl.R(A.jV);this.Zl.L(A.jb.
Text);this.Kr.H(AHU);this.Kr.KM(true);this.Kr.R(A.aaR(A.acf.A4A));this.Kr.L(A.jb.
Text);this.Md.H(AHV);this.J(this.Zl,0);this.J(this.Kr,0);this.J(this.Md,0);this.
Zl.S(A.aaL(A.fl.Ah));this.Kr.S(A.aaL(A.fl.Ah));this.Md.Ax(A.aaL(A.ach.AA4));this.
Timer.Ms=[this,this.Bzy];},_Done:function(){this.__proto__=C.AB;this.Zl._Done();
this.Kr._Done();this.Md._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Zl._ReInit();this.Kr._ReInit();this.Md._ReInit(
);this.Timer._ReInit();this.Kr.R(A.aaR(A.acf.A4A));this.Zl.S(A.aaL(A.fl.Ah));this.
Kr.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Zl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Md)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AMB={Kr:null,Ama:null
,Qs:null,CT:function(){this.Am();},Ai:function(Ae){C.AdM.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).AaF<=10)this.Kr.R(A.aaR(A.acf.Bge));else this.Kr.R(A.aaR(A.acf.
A4B));},_Init:function(aArg){C.AdM._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kr={I:this},0);A.acg.An._Init.call(this.Ama={I:this},0);C.CO._Init.call(this.Qs={
I:this},0);this.__proto__=C.AMB;this.Sz.H(AHW);this.Md.H(AYN);this.Kr.H(AYO);this.
Kr.KM(true);this.Kr.L(A.jb.Text);this.Ama.H(AHV);this.Qs.H(AHX);this.Qs.Y(true);
this.Qs.R(A.aaR(A.acf.ATw));this.Qs.L(A.jb.Text);this.J(this.Kr,0);this.J(this.Ama
,0);this.J(this.Qs,0);this.Kr.S(A.aaL(A.fl.Ah));this.Ama.Ax(A.aaL(A.ach.AA4));this.
Qs.S(A.aaL(A.fl.Ah));this.Qs.A8(A.aaL(A.fl.Ak));this.Qs.CB(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=C.AdM;this.Kr._Done();this.Ama._Done();this.Qs._Done();
C.AdM._Done.call(this);},_ReInit:function(){C.AdM._ReInit.call(this);this.Kr._ReInit(
);this.Ama._ReInit();this.Qs._ReInit();this.Qs.R(A.aaR(A.acf.ATw));this.Kr.S(A.aaL(
A.fl.Ah));this.Qs.S(A.aaL(A.fl.Ah));this.Qs.A8(A.aaL(A.fl.Ak));this.Qs.CB(A.aaL(
A.fl.By));this.CT();},_Mark:function(D){var B;C.AdM._Mark.call(this,D);if((B=this.
Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ama)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.ALx={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ALx;this.
RC.Ar(false);this.RC.Aj(false);this.RC.Y(false);},_className:"Application::AlarmListFilterScreen"
};C.AUT={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.AUT;this.
SQ.Ar(false);this.SQ.Aj(false);this.SQ.Y(false);},_className:"Application::WatchListFilterScreen"
};C.AMR={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AMR;this.
N.B0(A.aaR(A.acf.A4p));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.
aaR(A.acf.A4p));},_className:"Application::ControlListActionsScreen"};C.AUS={_Init:
function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AUS;this.N.B0(A.aaR(A.
acf.A4y));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.A4y
));},_className:"Application::WatchListActionsScreen"};C.ALw={_Init:function(aArg
){C.Gy._Init.call(this,aArg);this.__proto__=C.ALw;this.N.B0(A.aaR(A.acf.A4o));},
_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.A4o));},_className:
"Application::AlarmListActionsScreen"};C.AOn={D$:function(G){C.Ka.D$.call(this,G
);this.C_.Ax(A._GetAutoObject(A.Device.Converter).AdB(5));},_Init:function(aArg){
C.Ka._Init.call(this,aArg);this.__proto__=C.AOn;},_className:"Application::HeaderControlListFilter"
};C.AOW={D$:function(G){C.Ka.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.
Converter).AdB(6));},_Init:function(aArg){C.Ka._Init.call(this,aArg);this.__proto__=
C.AOW;},_className:"Application::HeaderWatchListFilter"};C.AO0={DQ:null,M4:null,
_Init:function(aArg){C.TJ._Init.call(this,aArg);C.CO._Init.call(this.DQ={I:this}
,0);A.acg.An._Init.call(this.M4={I:this},0);this.__proto__=C.AO0;this.DQ.H(An6);
this.DQ.R(A.aaR(A.acf.A49));this.DQ.L(A.jb.Text);this.M4.H(AYP);this.M4.L(A.jb.Text
);this.M4.A4(0x12);this.J(this.DQ,-2);this.J(this.M4,0);this.DQ.S(A.aaL(A.fl.Ak)
);this.DQ.A8(A.aaL(A.fl.By));this.M4.Ax(A.aaL(A.ach.ACS));},_Done:function(){this.
__proto__=C.TJ;this.DQ._Done();this.M4._Done();C.TJ._Done.call(this);},_ReInit:function(
){C.TJ._ReInit.call(this);this.DQ._ReInit();this.M4._ReInit();this.DQ.R(A.aaR(A.
acf.A49));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A8(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.TJ._Mark.call(this,D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.M4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"
};C.AMw={Cd:function(Ad){C.Ajh.Cd.call(this,Ad);if(!!this.AZ){var Of=this.AZ.HW(
Ad,8);var BA6=this.AZ.R7(Ad,21);this.AaS.R(A._GetAutoObject(A.Device.Helper).MK(
BA6,A._GetAutoObject(A.Device.Helper).Dt()).toFixed());this.Sb.Y(Of);this.Am();}
},_Init:function(aArg){C.Ajh._Init.call(this,aArg);this.__proto__=C.AMw;},_className:
"Application::CalfListWatchItem"};C.TJ={AgK:null,AgM:null,_Init:function(aArg){C.
Dx._Init.call(this,aArg);A.acg.An._Init.call(this.AgK={I:this},0);A.acg.An._Init.
call(this.AgM={I:this},0);this.__proto__=C.TJ;this.AgK.H(AYQ);this.AgK.L(A.jb.Text
);this.AgK.A4(0x12);this.AgM.H(AYR);this.AgM.L(A.jb.Text);this.AgM.A4(0x12);this.
Kn(this.CY,-1);this.J(this.AgK,0);this.J(this.AgM,0);this.AgK.Ax(A.aaL(A.ach.AmD
));this.AgM.Ax(A.aaL(A.ach.Abd));},_Done:function(){this.__proto__=C.Dx;this.AgK.
_Done();this.AgM._Done();C.Dx._Done.call(this);},_ReInit:function(){C.Dx._ReInit.
call(this);this.AgK._ReInit();this.AgM._ReInit();},_Mark:function(D){var B;C.Dx.
_Mark.call(this,D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgM).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"};C.Ap2={
F0:A.wg,OA:A.wf,QQ:function(E){if(A.aaY(this.F0,E))return;this.F0=E;},Anb:function(
E){if(A.aaX(this.OA,E))return;this.OA=E;},_Init:function(aArg){A.acu.ABw._Init.call(
this,aArg);this.__proto__=C.Ap2;},_className:"Application::BoundCoordList"};C.Ajh={
TP:null,V_:null,TQ:null,V$:null,Sb:null,YZ:null,AaS:null,AP:null,A_:null,D5:null
,Lo:null,Init:function(aArg){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.
Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*
30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TP.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.V_.H(this.TP.M);this.A_.H([this.TP.
M[2]-1,0,this.TP.M[2]+1,aSize[1]]);this.TQ.H([this.TP.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.V$.H(this.TQ.M);this.D5.H([this.TQ.M[2]-1,0,this.TQ.M[2]+1,aSize[
1]]);this.Sb.H([this.TQ.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.YZ.H(this.Sb.
M);this.Lo.H([this.Sb.M[2]-1,0,this.Sb.M[2]+1,aSize[1]]);this.AaS.H([this.Sb.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bc.Ai.call(this,Ae);var K2=this.V.AQ;
this.TP.AEb(K2);this.V_.L(K2);this.TQ.AEb(K2);this.V$.L(K2);this.Sb.AEb(K2);this.
YZ.L(K2);this.AaS.L(K2);this.YZ.Y(!this.Sb.Fd());},Cd:function(Ad){if(!this.AZ)return;
this.Hu=Ad;var Op=this.AZ.CC(Ad,1);var H8=this.AZ.Amw(Ad,14);var AtN=this.AZ.CC(
Ad,5);var LL=this.AZ.IV(Ad,13);this.U(Op.toFixed());if(!!LL){this.TP.Y(true);this.
TP.Av3(A._GetAutoObject(A.acj.Assessment).Bcg(LL));this.V_.Y(false);}else{this.TP.
Y(false);this.V_.Y(true);}if(AtN>0){this.TQ.Y(true);this.TQ.Av3(A._GetAutoObject(
A.acj.Assessment).Bcg(A._GetAutoObject(A.Device.Converter).Ar8(H8,AtN)));this.V$.
Y(false);}else{this.TQ.Y(false);this.V$.Y(true);}this.Am();},_Init:function(aArg
){C.Bc._Init.call(this,aArg);C.J7._Init.call(this.TP={I:this},0);A.acg.Text._Init.
call(this.V_={I:this},0);C.J7._Init.call(this.TQ={I:this},0);A.acg.Text._Init.call(
this.V$={I:this},0);C.J7._Init.call(this.Sb={I:this},0);A.acg.Text._Init.call(this.
YZ={I:this},0);A.acg.Text._Init.call(this.AaS={I:this},0);A.acg.AJ._Init.call(this.
AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);A.acg.AJ._Init.call(this.
D5={I:this},0);A.acg.AJ._Init.call(this.Lo={I:this},0);this.__proto__=C.Ajh;this.
V_.H(AYS);this.V_.R(An7);this.V$.H(An8);this.V$.R(An7);this.Sb.Av3(A.jb.Acf);this.
YZ.H(An8);this.YZ.R(Ra);this.AP.L(A.jb.Bd);this.A_.L(A.jb.Bd);this.D5.L(A.jb.Bd);
this.Lo.L(A.jb.Bd);this.J(this.TP,0);this.J(this.V_,0);this.J(this.TQ,0);this.J(
this.V$,0);this.J(this.Sb,0);this.J(this.YZ,0);this.J(this.AaS,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.D5,0);this.J(this.Lo,0);this.V_.S(A.aaL(A.fl.Ah
));this.V$.S(A.aaL(A.fl.Ah));this.YZ.S(A.aaL(A.fl.Ah));this.AaS.S(A.aaL(A.fl.Ah)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Bc;this.TP._Done();this.V_.
_Done();this.TQ._Done();this.V$._Done();this.Sb._Done();this.YZ._Done();this.AaS.
_Done();this.AP._Done();this.A_._Done();this.D5._Done();this.Lo._Done();C.Bc._Done.
call(this);},_ReInit:function(){C.Bc._ReInit.call(this);this.TP._ReInit();this.V_.
_ReInit();this.TQ._ReInit();this.V$._ReInit();this.Sb._ReInit();this.YZ._ReInit(
);this.AaS._ReInit();this.AP._ReInit();this.A_._ReInit();this.D5._ReInit();this.
Lo._ReInit();this.V_.S(A.aaL(A.fl.Ah));this.V$.S(A.aaL(A.fl.Ah));this.YZ.S(A.aaL(
A.fl.Ah));this.AaS.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.call(this
,D);if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DL={Pm:null,AmT:null
,EP:null,DL:null,AqQ:0,AqR:0,A6C:0,Amn:0,Aqb:0,Init:function(aArg){this.ASe(6);this.
ASf(8);this.ASq(A.jb.AR);this.ASr(3);},Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);this.DL.BkO([this.DL.AaN[0],(B=this.DL.M)[3]-B[1]]);this.Wl(this);},ASd:function(
E){if(this.Pm===E)return;this.Pm=E;this.DL.ASd(E);},ASr:function(E){if(this.AqR===
E)return;this.AqR=E;this.DL.ASr(E);},ASq:function(E){if(this.AqQ===E)return;this.
AqQ=E;this.DL.ASq(E);this.DL.BkU(E);},Wl:function(G){var B;while(!!this.DL.Ag)this.
HI(this.DL.Ag);if(!this.EP)return;this.DL.Anb([((this.EP.OA[0]*((B=this.M)[2]-B[
0]))/(this.EP.F0[2]-this.EP.F0[0]))|0,this.DL.OA[1]]);this.DL.Anb([this.DL.OA[0]
,((this.EP.OA[1]*((B=this.M)[3]-B[1]))/(this.EP.F0[3]-this.EP.F0[1]))|0]);var P;
var Da=this.DL.OA[1];var D1;var A3K=this.EP.F0[1];var Bi1=(((B=this.DL.M)[3]-B[1
])/this.DL.OA[1])|0;for(P=0;P<Bi1;P=P+1){D1=A._NewObject(A.acg.Text,0);D1.H([0,((((
B=this.M)[3]-B[1])-(P*Da))-(this.AmT.Ascent+this.AmT.Descent))+2,((B=this.M)[2]-
B[0])-this.AqR,(((B=this.M)[3]-B[1])-(P*Da))+2]);D1.L(this.A6C);D1.S(this.AmT);D1.
A4(0x24);if(P>0)D1.R(this.AI6(A3K));else D1.R(this.AJE());A3K=A3K+this.EP.OA[1];
this.J(D1,0);}},BEH:function(s){this.Wl(s);},BlI:function(E){if(this.AmT===E)return;
this.AmT=E;this.Am();},AyF:function(AZT){var B;if(!this.EP||(this.EP.F0[3]===this.
EP.F0[1]))return 0;return(((AZT-this.EP.F0[1])*((B=this.M)[3]-B[1]))/(this.EP.F0[
3]-this.EP.F0[1]))|0;},AeA:function(E){if(this.EP===E)return;this.EP=E;if(!E)this.
DL.AeA(null);else{var Bz=A._NewObject(A.acu.ABw,0);Bz.Awa(this.EP.ADs);Bz.XZ();var
Jp=E.Alh;while(!!Jp){Bz.ApR(this.Bw$(Jp.PT),this.Bxa(Jp.PU));Jp=Jp.Ag;}this.DL.AeA(
Bz);this.Am();}},Bw$:function(Bvo){var B;if(!this.EP||(this.EP.F0[2]===this.EP.F0[
0]))return 0;return((Bvo-this.EP.F0[0])*((B=this.M)[2]-B[0]))/(this.EP.F0[2]-this.
EP.F0[0]);},Bxa:function(AZT){var B;if(!this.EP||(this.EP.F0[3]===this.EP.F0[1])
)return 0;return((AZT-this.EP.F0[1])*((B=this.M)[3]-B[1]))/(this.EP.F0[3]-this.EP.
F0[1]);},AI6:function(Aoq){return Aoq.toFixed();},AJE:function(){return A.jV;},ASf:
function(E){if(this.Amn===E)return;this.Amn=E;this.DL.ASf(E);},ASe:function(E){if(
this.Aqb===E)return;this.Aqb=E;this.DL.ASe(E);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acu.DL._Init.call(this.DL={I:this},0);this.__proto__=C.DL;this.
H(AHY);this.A6C=A.jb.Text;this.DL.AY(0x3F);this.DL.H(AHY);this.DL.Bl7(AYT);this.
DL.Bkv(A.jb.Acf);this.DL.Blr(A.jb.Bd);this.DL.Bmq(A.jb.Acf);this.J(this.DL,0);this.
Pm=A.aaL(A.acu.ABR);this.AmT=A.aaL(A.fl.By);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.DL._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.DL._ReInit();this.BlI(A.aaL(A.fl.By));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Pm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AmT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EP)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMi={AI6:function(Aoq){return A._GetAutoObject(
A.Device.Converter).Axh(Aoq,0);},AJE:function(){return A._GetAutoObject(A.acj.DN
).AfH();},_Init:function(aArg){C.DL._Init.call(this,aArg);this.__proto__=C.AMi;}
,_className:"Application::BodyWeightGraph"};C.OU={JC:null,Eq:null,Ea:null,FM:null
,Iw:null,Ix:null,Init:function(aArg){this.ASd(null);},Wl:function(G){var B;var F;
C.DL.Wl.call(this,G);var AJ_=0;var AKW=0;if(!!this.JC){AJ_=this.AyF(A._GetAutoObject(
A.Device.Helper).ACm((F=this.JC,F[1].call(F[0]))));AKW=this.AyF(A._GetAutoObject(
A.Device.Helper).ACl((F=this.JC,F[1].call(F[0]))));}this.FM.H(A.abP(this.FM.M,0)
);this.FM.H([].concat(this.FM.M.slice(0,3),((B=this.M)[3]-B[1])-AKW));this.Iw.H(
A.abO(this.Iw.M,(this.FM.M[3]-((((B=this.Iw.M)[3]-B[1])/2)|0))-2));this.Ea.H(A.abP(
this.Ea.M,this.FM.M[3]));this.Ea.H([].concat(this.Ea.M.slice(0,3),((B=this.M)[3]-
B[1])-AJ_));this.Ix.H(A.abO(this.Ix.M,(this.Ea.M[3]-((((B=this.Ix.M)[3]-B[1])/2)|
0))+2));this.Eq.H(A.abP(this.Eq.M,this.Ea.M[3]));this.Eq.H([].concat(this.Eq.M.slice(
0,3),(B=this.M)[3]-B[1]));},AI6:function(Aoq){return A._GetAutoObject(A.Device.Converter
).SR(Aoq,0,true);},AJE:function(){return A._GetAutoObject(A.acj.DN).Z_();},Am9:function(
E){if(A.aaZ(this.JC,E))return;if(!!this.JC)A.z$([this,this.Ait],this.JC,0);this.
JC=E;if(!!E)A.zX([this,this.Ait],E,0);if(!!E)A.pe([this,this.Ait],this);},Ait:function(
G){this.Am();},_Init:function(aArg){C.DL._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Eq={I:this},0);A.acg.AJ._Init.call(this.Ea={I:this},0);A.acg.AJ._Init.call(
this.FM={I:this},0);A.acg.AJ._Init.call(this.Iw={I:this},0);A.acg.AJ._Init.call(
this.Ix={I:this},0);this.__proto__=C.OU;this.Eq.AY(0xD);this.Eq.H(ZN);this.Eq.L(
A.jb.FZ);this.Ea.AY(0xD);this.Ea.H(UF);this.Ea.L(A.jb.H1);this.FM.AY(0xD);this.FM.
H(Acq);this.FM.L(A.jb.ET);this.Iw.AY(0xD);this.Iw.H(ZP);this.Iw.AvR(A.jb.H1);this.
Iw.AvS(A.jb.H1);this.Iw.AvU(A.jb.ET);this.Iw.AvT(A.jb.ET);this.Ix.AY(0xD);this.Ix.
H(WS);this.Ix.AvR(A.jb.FZ);this.Ix.AvS(A.jb.FZ);this.Ix.AvU(A.jb.H1);this.Ix.AvT(
A.jb.H1);this.J(this.Eq,-1);this.J(this.Ea,-1);this.J(this.FM,-1);this.J(this.Iw
,-1);this.J(this.Ix,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DL;this.
Eq._Done();this.Ea._Done();this.FM._Done();this.Iw._Done();this.Ix._Done();C.DL.
_Done.call(this);},_ReInit:function(){C.DL._ReInit.call(this);this.Eq._ReInit();
this.Ea._ReInit();this.FM._ReInit();this.Iw._ReInit();this.Ix._ReInit();},_Mark:
function(D){var B;C.DL._Mark.call(this,D);if((B=this.JC)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Iw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightGainGraph"};C.Aqr={EL:null,EP:null,RU:null,Ic:null
,Bd:null,Aw1:A.jV,DE:A.jV,AOi:null,Init:function(aArg){},Bh:function(aSize){A.Core.
O.Bh.call(this,aSize);this.Bd.H([].concat([0,aSize[1]-2],aSize));this.RU.H([30,0
,aSize[0]-2,30]);this.Ic.H(this.RU.M);if(!!this.EL)this.EL.H([30,this.RU.M[3],aSize[
0],this.Bd.M[1]]);},Ag_:function(E){if(this.Aw1===E)return;this.Aw1=E;this.Ic.R(
E);},U:function(E){if(this.DE===E)return;this.DE=E;this.RU.R(E);},AEu:function(E
){if(this.AOi===E)return;this.AOi=E;this.BnE(this);},BnE:function(G){var B;if(!!
this.EL)this.HI(this.EL);this.EL=(C.DL.isPrototypeOf(B=A._NewObject(this.AOi,0))?
B:null);if(!!this.EL){this.EL.H(AYU);this.EL.AeA(this.EP);this.J(this.EL,0);}},AeA:
function(E){if(this.EP===E)return;this.EP=E;if(!!this.EL)this.EL.AeA(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.RU={I:this
},0);A.acg.Text._Init.call(this.Ic={I:this},0);A.acg.AJ._Init.call(this.Bd={I:this
},0);this.__proto__=C.Aqr;this.H(Acu);this.Ar(false);this.RU.H(AYV);this.RU.A4(0x11
);this.RU.R(Lr);this.RU.L(A.jb.Text);this.Ic.A4(0x14);this.Ic.R(A.jV);this.Ic.L(
A.jb.Text);this.Bd.H(AYW);this.Bd.L(A.jb.Bd);this.J(this.RU,0);this.J(this.Ic,0);
this.J(this.Bd,0);this.RU.S(A.aaL(A.fl.Ak));this.Ic.S(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=A.Core.O;this.RU._Done();this.Ic._Done();
this.Bd._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.RU._ReInit();this.Ic._ReInit();this.Bd._ReInit();this.RU.S(A.aaL(
A.fl.Ak));this.Ic.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.EL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::GraphItem"};C.ALT={Agd:null,GX:function(E){var F;C.FT.
GX.call(this,E);if(!!this.Agd)(F=this.Agd,F[2].call(F[0],E));},A8Q:function(E){if(
A.aaZ(this.Agd,E))return;if(!!this.Agd)A.z$([this,this.A18],this.Agd,0);this.Agd=
E;if(!!E)A.zX([this,this.A18],E,0);if(!!E)A.pe([this,this.A18],this);},A18:function(
G){var F;if(!this.Agd)return;(F=this.Agd,F[2].call(F[0],this.FA()));},_Init:function(
aArg){C.FT._Init.call(this,aArg);this.__proto__=C.ALT;},_Mark:function(D){var B;
C.FT._Mark.call(this,D);if((B=this.Agd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Application::AnimalScrollList"};C.ATv={Q5:null,PP:null,XD:null,XE:
null,Mo:0,CT:function(){this.Am();},Bh:function(aSize){var B;A.Core.O.Bh.call(this
,aSize);this.Q5.H(A.abI(this.Q5.M,(((B=this.M)[3]-B[1])/2)|0));this.PP.H(A.abI(this.
PP.M,(((B=this.M)[3]-B[1])/2)|0));this.Q5.H(A.abO(this.Q5.M,(((B=this.M)[3]-B[1]
)/2)|0));this.PP.H(A.abO(this.PP.M,(((B=this.M)[3]-B[1])/2)|0));},Ai:function(Ae
){A.Core.O.Ai.call(this,Ae);this.Q5.R(A._GetAutoObject(A.Device.Helper).Nd(A.aaR(
A.acf.BiV),P0,this.Mo.toFixed()));},AbM:function(E){if(this.Mo===E)return;this.Mo=
E;this.Bz_(this);},Bz_:function(G){var B;var AJc=(((B=this.M)[2]-B[0])/this.Mo)|
0;this.XD.H(A.abM(this.XD.M,(((B=this.M)[2]-B[0])-(this.Mo*AJc))+(((AJc/2)-(((B=
this.XD.M)[2]-B[0])/2))|0)));this.XE.H(A.abM(this.XE.M,(((B=this.M)[2]-B[0])-AJc
)+(((AJc/2)-(((B=this.XE.M)[2]-B[0])/2))|0)));this.Am();},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.Q5={I:this},0);A.acg.Text.
_Init.call(this.PP={I:this},0);A.acg.Text._Init.call(this.XD={I:this},0);A.acg.Text.
_Init.call(this.XE={I:this},0);this.__proto__=C.ATv;this.H(BC);this.Q5.H(AYX);this.
Q5.HH(5);this.Q5.A4(0x11);this.Q5.L(A.jb.Text);this.PP.H(AYY);this.PP.HH(5);this.
PP.A4(0x14);this.PP.R(A.aaR(A.acf.Aht));this.PP.L(A.jb.Text);this.XD.H(AYZ);this.
XD.R(AHZ);this.XD.L(A.jb.Text);this.XE.H(AY0);this.XE.R(AHZ);this.XE.L(A.jb.Text
);this.J(this.Q5,0);this.J(this.PP,0);this.J(this.XD,0);this.J(this.XE,0);this.Q5.
S(A.aaL(A.fl.Ak));this.PP.S(A.aaL(A.fl.Ak));this.XD.S(A.aaL(A.fl.Hk));this.XE.S(
A.aaL(A.fl.Hk));},_Done:function(){this.__proto__=A.Core.O;this.Q5._Done();this.
PP._Done();this.XD._Done();this.XE._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Q5._ReInit();this.PP._ReInit();this.XD._ReInit(
);this.XE._ReInit();this.PP.R(A.aaR(A.acf.Aht));this.Q5.S(A.aaL(A.fl.Ak));this.PP.
S(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"};C.K5={VI:null
,Ajp:null,KG:A.jV,Mo:0,Aac:false,Init:function(aArg){var A0R=A._NewObject(C.J8,0
);var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).W.Rz()<A0R.C4(P))
A0R.AmZ=P+1;this.VI.CG(A0R);},Ai:function(Ae){C.D2.Ai.call(this,Ae);this.Ajp.Y(this.
Aac);if(this.Aac)this.A9(null);else this.A9(this.VI);},Cw:function(G){var B;var F;
C.D2.Cw.call(this,G);if(!(F=this.VI.Q,F[1].call(F[0])))(F=this.VI.Q,F[2].call(F[
0],this.VI.AC.C4(0)));A.zX([this,this.AIn],[B=A._GetAutoObject(A.Device.Helper),
B.UH,B.UI],0);A.zV([this,this.AIn],A._GetAutoObject(A.Device.Device).Br,0);A.zX([
this,this.AlN],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId],0);A.pe([this
,this.AlN],this);},EV:function(G){var B;A.z$([this,this.AIn],[B=A._GetAutoObject(
A.Device.Helper),B.UH,B.UI],0);A.z9([this,this.AIn],A._GetAutoObject(A.Device.Device
).Br,0);A.z$([this,this.AlN],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId
],0);C.D2.EV.call(this,G);},Y7:function(E){if(A.aa0(this.AN,E))return;C.D2.Y7.call(
this,E);this.VI.AN=E;},AbM:function(E){if(this.Mo===E)return;this.Mo=E;A.pe([this
,this.AlN],this);},BuZ:function(Aq){this.AbM(Aq);},AiD:function(G){},AIn:function(
s){this.AiD(s);},Du:function(E){if(this.KG===E)return;this.KG=E;this.Ajp.R(E);},
AlN:function(G){var Fj=A._NewObject(A.Device.Filter,0);var AyP=A._NewObject(A.Device.
UInt32FilterCriterion,0);AyP.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).Aht()-((this.Mo-1)*86400))-1,true);Fj.CX(AyP);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fj.CX(HQ);A._GetAutoObject(
A.Device.Device).Br.Bi(Fj);},BjT:function(){return this.Mo;},_Init:function(aArg
){C.D2._Init.call(this,aArg);C.ATV._Init.call(this.VI={I:this},0);C.Akt._Init.call(
this.Ajp={I:this},0);this.__proto__=C.K5;this.VI.H(BC);this.Ajp.H(SW);this.J(this.
VI,0);this.J(this.Ajp,0);this.VI.At([this,this.BjT,this.BuZ]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D2;this.VI._Done();this.Ajp._Done();C.D2._Done.
call(this);},_ReInit:function(){C.D2._ReInit.call(this);this.VI._ReInit();this.Ajp.
_ReInit();},_Mark:function(D){var B;C.D2._Mark.call(this,D);if((B=this.VI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AM0={VP:null,Yr:null,RatingMode:null,Px:null,_Init:
function(aArg){C.Cq._Init.call(this,aArg);C.NS._Init.call(this.VP={I:this},0);C.
BX._Init.call(this.Yr={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.I2._Init.call(this.Px={I:this},0);this.__proto__=C.AM0;var B;this.G$.R(A.
aaR(A.acf.ABG));this.JJ(A.aaR(A.acf.A42));this.VP.H(AsD);this.VP.Aj(true);this.VP.
U(A.aaR(A.acf.Asg));this.VP.Bg(true);this.VP.NV(23);this.Yr.H(AY1);this.Yr.Aj(true
);this.Yr.U(A.aaR(A.acf.A_a));this.Yr.Bg(false);this.Px.H(AY2);this.Px.Aj(true);
this.Px.U(A.aaR(A.acf.A4Z));this.Px.Bg(true);this.Px.Gn(3);this.Px.E1(14);this.Px.
Kj(A.aaR(A.acf.J8)+AsE);this.Px.KL(A.aaR(A.acf.GB)+AsE);this.J(this.VP,0);this.J(
this.Yr,0);this.J(this.Px,0);this.VP.AN=[B=this.VP,B.NY];this.Yr.At([B=this.RatingMode
,B.B9,B.B_]);this.Yr.CG(this.RatingMode);this.Px.At([B=A._GetAutoObject(A.Device.
Device),B.A7T,B.Bai]);},_Done:function(){this.__proto__=C.Cq;this.VP._Done();this.
Yr._Done();this.RatingMode._Done();this.Px._Done();C.Cq._Done.call(this);},_ReInit:
function(){C.Cq._ReInit.call(this);this.VP._ReInit();this.Yr._ReInit();this.RatingMode.
_ReInit();this.Px._ReInit();this.G$.R(A.aaR(A.acf.ABG));this.JJ(A.aaR(A.acf.A42)
);this.VP.U(A.aaR(A.acf.Asg));this.Yr.U(A.aaR(A.acf.A_a));this.Px.U(A.aaR(A.acf.
A4Z));this.Px.Kj(A.aaR(A.acf.J8)+AsE);this.Px.KL(A.aaR(A.acf.GB)+AsE);},_Mark:function(
D){var B;C.Cq._Mark.call(this,D);if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Auv={Init:function(aArg){this.V.Text.A4(0x11);this.V.Text.HH(10);},Ai:function(
Ae){var B;C.Ci.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20
);var Gt=this.Bl.Bv;var FG=A.jb.AdO;var GJ=A.jb.Bj;if(this.Hb){FG=A.jb.Bj;GJ=A.jb.
Text;}if(!G6){this.Background.L(FG);this.V.L(A.jb.CF);}else if(Gt){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bj);}else if(Fh){this.Background.L(A.jb.AR);this.V.L(A.
jb.Bj);}else{this.Background.L(FG);this.V.L(GJ);}this.LB=G6;this.Ky=Fh;this.Qg=Gt;
},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.Auv;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Ci._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ACu={An:null,Init:
function(aArg){var B;A.zX([this,this.D$],[B=A._GetAutoObject(A.Device.Helper).W,
B.PH,B.DT],0);A.pe([this,this.D$],this);},C8:function(E){C.BP.C8.call(this,E);this.
An.L(E);},D$:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.An.Ax(A.aaL(A.ach.ACr));break;case 1:this.An.Ax(A.aaL(A.ach.AOF));break;
case 2:this.An.Ax(A.aaL(A.ach.AOH));break;default:A.ab5("%s%e",AxT,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BP._Init.call(this,aArg
);A.acg.An._Init.call(this.An={I:this},0);this.__proto__=C.ACu;this.An.H(AsF);this.
J(this.An,0);this.An.Ax(A.aaL(A.ach.ACr));this.Init(aArg);},_Done:function(){this.
__proto__=C.BP;this.An._Done();C.BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.
call(this);this.An._ReInit();},_Mark:function(D){var B;C.BP._Mark.call(this,D);if((
B=this.An)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ACv={An:null,Init:function(aArg){var B;A.zX([this,this.D$],[B=A._GetAutoObject(
A.Device.Helper).W,B.PH,B.DT],0);A.pe([this,this.D$],this);},C8:function(E){C.BP.
C8.call(this,E);this.An.L(E);},D$:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.An.Ax(A.aaL(A.ach.ACs));break;case 1:this.An.Ax(A.aaL(
A.ach.AOG));break;case 2:this.An.Ax(A.aaL(A.ach.AOI));break;default:A.ab5("%s%e"
,AxT,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BP.
_Init.call(this,aArg);A.acg.An._Init.call(this.An={I:this},0);this.__proto__=C.ACv;
this.An.H(AsF);this.J(this.An,0);this.An.Ax(A.aaL(A.ach.ACs));this.Init(aArg);},
_Done:function(){this.__proto__=C.BP;this.An._Done();C.BP._Done.call(this);},_ReInit:
function(){C.BP._ReInit.call(this);this.An._ReInit();},_Mark:function(D){var B;C.
BP._Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fk={BR:null,Axc:A.jV,C8:function(E){C.JA.C8.call(
this,E);this.BR.L(E);},Kk:function(E){if(this.Axc===E)return;this.Axc=E;this.BR.
R(E);},_Init:function(aArg){C.JA._Init.call(this,aArg);C.CO._Init.call(this.BR={
I:this},0);this.__proto__=C.Fk;this.BR.AY(0x34);this.BR.H(AxO);this.BR.A4(0x11);
this.BR.L(A.jb.Text);this.J(this.BR,0);this.BR.S(A.aaL(A.fl.Ah));this.BR.A8(A.aaL(
A.fl.Ak));this.BR.CB(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.JA;this.
BR._Done();C.JA._Done.call(this);},_ReInit:function(){C.JA._ReInit.call(this);this.
BR._ReInit();this.BR.S(A.aaL(A.fl.Ah));this.BR.A8(A.aaL(A.fl.Ak));this.BR.CB(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.JA._Mark.call(this,D);if((B=this.BR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AN2={Wd:function(G){var B;this.Af9();this.ALt(A.aaR(A.acf.Bh4),[this,this.BmC],[
B=A._GetAutoObject(A.Device.Device),B.A7U,B.Baj]);A._GetAutoObject(C.BL).Ft();this.
IR(A.aaR(A.acf.AUw),[this,this.ASW],5);this.IR(A.aaR(A.acf.AUu),[this,this.ASV],
7);this.IR(A.aaR(A.acf.AnC),[this,this.Awd],2);this.IR(A.aaR(A.acf.Xv),[this,this.
AD9],1);this.IR(A.aaR(A.acf.At0),[this,this.AD3],0);A._GetAutoObject(C.BL).Ft();
A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.Al0)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dp(6);},Dw:function(G){},Aa4:function(){return C.ABj;},Aa5:function(
){return C.ACC;},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(
A.Device.Helper).A51());},HJ:function(G){C.GN.HJ.call(this,G);if(this.AjW()===false
){this.N.Cn(A.aaL(A.ach.Abd));this.N.Ch=[this,this.A5r];this.N.FC(A.jV);}this.N.
OJ(false);this.N.OK(false);},AfU:function(){A._GetAutoObject(C.AX).BS(48);},AfT:
function(){A._GetAutoObject(C.AX).BS(49);},BmC:function(G){A._GetAutoObject(A.Device.
Device).Av5(!A._GetAutoObject(A.Device.Device).Aqn);this.AnJ(this);},AnJ:function(
G){var Ba=A._GetAutoObject(A.Device.Device).Ap.Filter.GA();var Az=Ba.DX(30,3);if(
!!Az)Ba.QW(Az);if(A._GetAutoObject(A.Device.Device).Aqn){var Azv=A._NewObject(A.
Device.UInt32FilterCriterion,0);var A1H=A._GetAutoObject(A.Device.Helper).Dt()-21600;
Azv.Initialize(30,3,A1H,true);Ba.CX(Azv);}A._GetAutoObject(A.Device.Device).Ap.Bi(
Ba);},_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=C.AN2;var B;
this.Dk(C.AOB);this.Du(A.aaR(A.acf.A7h));this.Av9([B=A._GetAutoObject(A.Device.Device
),B.A7S,B.Bah]);},_ReInit:function(){C.GN._ReInit.call(this);this.Du(A.aaR(A.acf.
A7h));},_className:"Application::FreshCowListScreen"};C.AN1={_Init:function(aArg
){C.IT._Init.call(this,aArg);this.__proto__=C.AN1;this.K$.Ar(false);this.K$.Aj(false
);this.K$.Y(false);this.Jf.Ar(false);this.Jf.Aj(false);this.Jf.Y(false);},_className:
"Application::FreshCowListFilterScreen"};C.AN0={_Init:function(aArg){C.Gy._Init.
call(this,aArg);this.__proto__=C.AN0;this.N.B0(A.aaR(A.acf.A4r));},_ReInit:function(
){C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.A4r));},_className:"Application::FreshCowListActionsScreen"
};C.AOB={D$:function(G){C.Ka.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.
Converter).AdB(7));},_Init:function(aArg){C.Ka._Init.call(this,aArg);this.__proto__=
C.AOB;},_className:"Application::HeaderFreshCowListFilter"};C.ACC={Jm:null,DQ:null
,_Init:function(aArg){C.Dx._Init.call(this,aArg);C.CO._Init.call(this.Jm={I:this
},0);C.CO._Init.call(this.DQ={I:this},0);this.__proto__=C.ACC;this.A85(1);this.Jm.
H(AY3);this.Jm.R((A.aaR(A.acf.Calving)+ZU)+A.aaR(A.acf.A_L));this.Jm.L(A.jb.Text
);this.DQ.H(Bps);this.DQ.R(A.aaR(A.acf.ADk));this.DQ.L(A.jb.Text);this.J(this.Jm
,0);this.J(this.DQ,0);this.Jm.S(A.aaL(A.fl.Ak));this.Jm.A8(A.aaL(A.fl.By));this.
DQ.S(A.aaL(A.fl.Ak));this.DQ.A8(A.aaL(A.fl.By));},_Done:function(){this.__proto__=
C.Dx;this.Jm._Done();this.DQ._Done();C.Dx._Done.call(this);},_ReInit:function(){
C.Dx._ReInit.call(this);this.Jm._ReInit();this.DQ._ReInit();this.Jm.R((A.aaR(A.acf.
Calving)+ZU)+A.aaR(A.acf.A_L));this.DQ.R(A.aaR(A.acf.ADk));this.Jm.S(A.aaL(A.fl.
Ak));this.Jm.A8(A.aaL(A.fl.By));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A8(A.aaL(A.fl.
By));},_Mark:function(D){var B;C.Dx._Mark.call(this,D);if((B=this.Jm)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABj={AGc:null,KI:null,Un:null,AP:null,A_:null,Init:function(aArg){},Bh:function(
aSize){C.Bc.Bh.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.Un.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.Un.M[2]-1,0,this.Un.M[2]+1,aSize[1]]);this.KI.H([this.Un.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Bc.Ai.call(this,Ae);this.KI.L(this.V.AQ);this.
Un.C8(this.V.AQ);},Cd:function(Ad){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var
KW=this.AZ.CC(Ad,0);var Op=this.AZ.CC(Ad,1);var A1G=this.AZ.CC(Ad,29);var Ak$=this.
AZ.Hz(Ad,28);this.U(Op.toFixed());this.KI.R(A1G.toFixed());this.Un.AbM(A._GetAutoObject(
A.Device.Device).Aqm+1);this.Un.Bmi(Ak$);this.Un.R(A._GetAutoObject(A.acj.KE).Aju(
Ak$));A._GetAutoObject(A.Device.Device).Sw(Ad);this.ApG(KW);this.AwK();A._GetAutoObject(
A.Device.Device).Br.Bi(null);this.Am();}},A3z:function(G){this.Un.AbO(this.AGc);
},AwK:function(){var FX=A._GetAutoObject(A.Device.Device).Br.Cb();this.AGc=A._NewObject(
C.Ai_,0);if(FX>0){var P=FX-1;while(P>=0){var D1=A._GetAutoObject(A.Device.Device
).Br.Hz(P,6);this.AsV(this.AGc,P,9,D1);P=P-1;}}A.pe([this,this.A3z],this);},AsV:
function(A0c,Ad,A0b,P5){var Ak5=A._GetAutoObject(A.Device.Device).Br.IV(Ad,A0b);
if(!!Ak5)A0c.Oq(Ak5,P5);},ApG:function(AcL){var Fj=A._NewObject(A.Device.Filter,
0);var AyP=A._NewObject(A.Device.UInt32FilterCriterion,0);AyP.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).Zq(A._GetAutoObject(A.Device.Device).Aqm)-1,true);Fj.CX(AyP);var
HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,AcL,true);Fj.
CX(HQ);A._GetAutoObject(A.Device.Device).Br.Bi(Fj);},_Init:function(aArg){C.Bc._Init.
call(this,aArg);A.acg.Text._Init.call(this.KI={I:this},0);C.ATq._Init.call(this.
Un={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.
A_={I:this},0);this.__proto__=C.ABj;this.AP.L(A.jb.Bd);this.A_.L(A.jb.Bd);this.J(
this.KI,0);this.J(this.Un,0);this.J(this.AP,0);this.J(this.A_,0);this.KI.S(A.aaL(
A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Bc;this.KI._Done();
this.Un._Done();this.AP._Done();this.A_._Done();C.Bc._Done.call(this);},_ReInit:
function(){C.Bc._ReInit.call(this);this.KI._ReInit();this.Un._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KI.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.
call(this,D);if((B=this.AGc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Un)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.ATq={AT9:0,Init:function(aArg
){},AN9:function(){return A._GetAutoObject(A.Device.Helper).ApY(this.AT9);},AN$:
function(){return this.AN9()+(this.Mo*86400);},Bmi:function(E){if(this.AT9===E)return;
this.AT9=E;A.pe([this,this.Wl],this);},_Init:function(aArg){C.Ahe._Init.call(this
,aArg);this.__proto__=C.ATq;this.Bd.H(Bpt);this.Bmf(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Do:function(){if(this.K&&this.K.Do)return this.K.Do.apply(this,arguments);else
return C.FactoryResetScope.BsZ.apply(this,arguments);},BsZ:function(){return 2;}
,F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BQ(this.C4(aIndex));},_Init:function(aArg){C.CN._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Co.Set(0,0);this.Co.Set(1,1);var Ls=this._variants();if(Ls){this.K={};Ls._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.CN;this.FactoryResetScopeToString._Done();C.CN._Done.call(this);},_ReInit:function(
){C.CN._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.CN._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acr.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bfq:false,Init:function(
aArg){this.Bfq=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Eo:function(
G){if(this.BcK){A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.
Device).Ap);if(this.Bfq)A._GetAutoObject(A.Device.Device).A6(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A6(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Eo.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ARr={Wd:function(G){this.Af9();A._GetAutoObject(C.BL).Qp(A.aaR(A.acf.Settings
),[this,this.A2F]);A._GetAutoObject(C.BL).Ft();this.ALr();A._GetAutoObject(C.BL).
Nw(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.
BL).Nw(A.aaR(A.acf.AM4)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dp(
6);},Dw:function(G){},Aa4:function(){return C.Ajg;},Aa5:function(){return C.AjA;
},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(A.Device.
Helper).ACe());},HJ:function(G){C.Rx.HJ.call(this,G);if(this.AjW()===false){this.
N.Cn(A.aaL(A.ach.AuZ));this.N.Ch=[this,this.ANh];this.N.FC(A.jV);}this.N.OJ(false
);this.N.OK(false);},AfU:function(){A._GetAutoObject(C.AX).BS(52);},AfT:function(
){A._GetAutoObject(C.AX).BS(53);},A2F:function(G){A._GetAutoObject(A.Device.Device
).Dp(0);A._GetAutoObject(C.AX).BS(101);},_Init:function(aArg){C.Rx._Init.call(this
,aArg);this.__proto__=C.ARr;this.Dk(C.ACw);this.Du(A.aaR(A.acf.A7d));this.ASs(A.
_GetAutoObject(C.Avs));},_ReInit:function(){C.Rx._ReInit.call(this);this.Du(A.aaR(
A.acf.A7d));},_className:"Application::NoTransponderListScreen"};C.ARq={_Init:function(
aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ARq;this.KQ.Ar(false);this.KQ.
Aj(false);this.KQ.Y(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ARp={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.ARp;this.
N.B0(A.aaR(A.acf.A4x));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.
aaR(A.acf.A4x));},_className:"Application::NoTransponderListActionsScreen"};C.ACw={
D$:function(G){C.Ka.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.Converter
).AdB(8));},_Init:function(aArg){C.Ka._Init.call(this,aArg);this.__proto__=C.ACw;
},_className:"Application::HeaderNoTransponderListFilter"};C.AA2={Aug:null,F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Aug.BQ(aIndex);},_Init:
function(aArg){C.FU._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Aug={I:this},0);this.__proto__=C.AA2;},_Done:function(){this.__proto__=
C.FU;this.Aug._Done();C.FU._Done.call(this);},_ReInit:function(){C.FU._ReInit.call(
this);this.Aug._ReInit();},_Mark:function(D){var B;C.FU._Mark.call(this,D);if((B=
this.Aug)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALm={Ci:null,AdE:null,Init:function(aArg){this.A9(this.Ci);},KK:function(){if(
!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cv=[this,this.Xh];this.Bw.Ch=null;
this.Bw.Cc=[this,this.A2h];this.Bw.B0(A.jV);this.Bw.Cn(null);this.Bw.CS(A.aaL(A.
ach.Aeb));}return this.Bw;},AzL:function(G){var Aa=(C.Ai2.isPrototypeOf(G)?G:null
);if(Aa===this.Ci)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdE)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$d);},_Init:function(aArg){C.Ff._Init.call(this,aArg);C.Ai2._Init.call(this.
Ci={I:this},0);C.Ai2._Init.call(this.AdE={I:this},0);this.__proto__=C.ALm;this.H(
Q$);this.Text.R(A.aaR(A.acf.ActionSettings));this.Ci.H(JQ);this.Ci.U(A.aaR(A.acf.
ADw));this.AdE.H(P1);this.AdE.U(A.aaR(A.acf.Tj));this.J(this.Ci,0);this.J(this.AdE
,0);this.Text.S(A.aaL(A.fl.Ak));this.Ci.AN=[this,this.AzL];this.AdE.AN=[this,this.
AzL];this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.Ci._Done();this.
AdE._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this);this.
Ci._ReInit();this.AdE._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Ci.
U(A.aaR(A.acf.ADw));this.AdE.U(A.aaR(A.acf.Tj));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ff._Mark.call(this,D);if((B=this.Ci)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BD7={Undefined:0,BD5:1,BD6:2,IdScanned:3,BC4:4,BB5:5,BCO:6};C.ALB={A_v:function(
){A._GetAutoObject(A.Device.Device).A6(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Bec]);},_Init:function(aArg){C.At8._Init.call(
this,aArg);this.__proto__=C.ALB;this.FU.At(1);this.ASy(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Ad7={Vx:null,Vy:null,Vz:null,AgD:null,AgE:null,AgF:null,Cv:null,Ch:null,Cc:null
,AnD:A.jV,AnE:A.jV,AnF:A.jV,AqB:0,AqC:0,AqD:0,AgX:0,Ze:false,Zd:false,ArP:false,
Ar3:false,Ar2:false,Aje:function(E5){this.Cv=E5.Cv;this.Ch=E5.Ch;this.Cc=E5.Cc;this.
AnD=E5.AnD;this.AnE=E5.AnE;this.AnF=E5.AnF;this.AgX=E5.AgX;this.Vx=E5.Vx;this.Vy=
E5.Vy;this.Vz=E5.Vz;this.AgD=E5.AgD;this.AgE=E5.AgE;this.AgF=E5.AgF;this.Ar2=E5.
Ar2;this.Ar3=E5.Ar3;this.ArP=E5.ArP;this.Zd=E5.Zd;this.Ze=E5.Ze;this.AqB=E5.AqB;
this.AqC=E5.AqC;this.AqD=E5.AqD;},Aks:function(E5){E5.Cv=this.Cv;E5.Ch=this.Ch;E5.
Cc=this.Cc;E5.Ho(this.AnD);E5.FC(this.AnE);E5.B0(this.AnF);E5.AEB(this.AgX);E5.AEr(
this.Vx);E5.Arh(this.Vy);E5.Ana(this.Vz);E5.CS(this.AgD);E5.Cn(this.AgE);E5.C2(this.
AgF);E5.OJ(this.Ar2);E5.OK(this.Ar3);E5.ArP=this.ArP;E5.Zd=this.Zd;E5.Ze=this.Ze;
E5.Blt(this.AqB);E5.ASm(this.AqC);E5.A9e(this.AqD);},_Init:function(aArg){this.__proto__=
C.Ad7;this.Vx=A.aaL(A.fl.Ak);this.Vy=A.aaL(A.fl.Ak);this.Vz=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.Vx=A.aaL(
A.fl.Ak);this.Vy=A.aaL(A.fl.Ak);this.Vz=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.Vx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vy)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Vz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgE)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cv)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ch)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.ArZ._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dk(C.ACu);},_className:"Application::NewAnimalSetTransponderScreen"};C.C3={AaO:null
,CountryToString:null,Do:function(){return 40;},C4:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lp(aIndex);},DK:function(A3){return A3;
},Hl:function(){return 39;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.
AaO)(F=this.AaO,F[2].call(F[0],E));},A0K:function(G){var F;if(!!this.AaO)this.Q=(
F=this.AaO,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9,this.B_],0);},AEi:
function(E){if(A.aaZ(this.AaO,E))return;if(!!this.AaO)A.z$([this,this.A0K],this.
AaO,0);this.AaO=E;if(!!this.AaO)A.zX([this,this.A0K],this.AaO,0);A.pe([this,this.
A0K],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C3;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AaO)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OT={AC:null,Q:null,Background:null,Ij:null,Ii:null,MX:
0,AK:0,Ge:0,FS:0,AfQ:function(G){this.J0(this);},Bh:function(aSize){A.Core.O.Bh.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(Ir){this.Background.
L(A.jb.AR);this.Dl(256);}else{this.Background.L(this.MX);this.Dl(256);}},AfP:function(
G){this.JV(this);},CG:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A2D],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A2D],E,0);if(!!E)A.pe([this
,this.A2D],this);},C1:function(E){if(this.MX===E)return;this.MX=E;this.Am();},J0:
function(G){var F;var BO=this.AK;this.Bx(this.AK+1);if(this.AK!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AK)));A.abo(this.Q,0);}},JV:function(
G){var F;var BO=this.AK;this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AK)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Ge)E=this.FS;if(E>this.FS)E=this.Ge;if(this.AK===E)return;this.AK=E;
this.Am();},Gn:function(E){if(this.Ge===E)return;this.Ge=E;this.Am();},E1:function(
E){if(this.FS===E)return;this.FS=E;this.Am();},De:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DK((F=this.Q,F[1].call(F[0]))));},At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.De],E,0);if(!!E)A.pe([this,this.De],this);},A2D:function(G){var F;if(!!this.
AC){this.Gn(0);this.E1(this.AC.Hl());if(!!this.Q)this.Bx(this.AC.DK((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AJ._Init.call(this.Background={I:this},0);A.Core.BJ._Init.call(this.Ij={
I:this},0);A.Core.BJ._Init.call(this.Ii={I:this},0);this.__proto__=C.OT;this.H(A$e
);this.Background.H(AsG);this.Ij.Filter=4;this.Ii.Filter=5;this.MX=A.jb.CF;this.
J(this.Background,0);this.Ij.BK=[this,this.AfQ];this.Ij.DS=[this,this.AfQ];this.
Ii.BK=[this,this.AfP];this.Ii.DS=[this,this.AfP];},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Ij._Done();this.Ii._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);this.Ij._ReInit();this.Ii._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RE={A0C:A.jV,Ai:function(
Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.A4L));this.Kk(this.A0C);},Cd:function(
G){C.Fk.Cd.call(this,G);var Ak$=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Ak$)this.A0C=WT;else this.A0C=A._GetAutoObject(A.acj.KE).Aju(Ak$);this.Am();
},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RE;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RF={A1F:0,Ai:function(Ae){C.Fk.Ai.call(
this,Ae);this.U(A.aaR(A.acf.AQG));if(this.A1F>0)this.Kk(this.A1F.toFixed());else
this.Kk(A.aaR(A.acf.Unknown));},Cd:function(G){C.Fk.Cd.call(this,G);this.A1F=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fk._Init.call(
this,aArg);this.__proto__=C.RF;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Do:function(){return 5;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 4;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Aj$(E);},A03:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B9,
this.B_],0);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A03],[B=this.Animal,B.ARK,B.Aj$],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A03],[B=this.Animal,B.ARK,B.Aj$],0);A.pe([this,this.A03],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Do:function(){return 99;},C4:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BQ(aIndex);},DK:function(A3){return A3;
},Hl:function(){return 98;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal
)this.Animal.NT(E);},A0A:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B9,this.B_],0);},LU:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0A],[B=this.Animal,B.Avw,B.NT],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0A],[B=this.Animal,B.Avw,B.NT],0);A.pe([
this,this.A0A],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AQ0={VL:null,Yp:null,Aen:null,Init:function(
aArg){this.A9(this.VL);},Ac$:function(G){var Aa=(C.Ci.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yp)this.BwG();else if(Aa===this.VL)this.Bzn(this);else throw new
Error(Axy);A._GetAutoObject(A.Device.Device).Dp(0);},Bzn:function(G){var B;var F;
var U2=(C.Al4.isPrototypeOf(B=(F=A._GetAutoObject(C.AX).Q,F[1].call(F[0])))?B:null
);if(!U2){A.ab5("%s",Bpu);return;}U2.AJ0(this);},BwG:function(){A._GetAutoObject(
A.Device.Helper).W.AFW(true);A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mg._Init.call(this.VL={I:this},0);C.Mg._Init.call(this.Yp={
I:this},0);C.Vr._Init.call(this.Aen={I:this},0);this.__proto__=C.AQ0;var B;this.
H(Acu);this.VL.H(P1);this.VL.Ar(true);this.VL.U(A.aaR(A.acf.A_c));this.VL.Bg(true
);this.Yp.H(JQ);this.Yp.Ar(true);this.Yp.U(A.aaR(A.acf.A30));this.Yp.Bg(true);this.
Aen.H(BC);this.Aen.U(A.aaR(A.acf.AB5));this.Aen.Bg(true);this.J(this.VL,0);this.
J(this.Yp,0);this.J(this.Aen,0);this.VL.AN=[this,this.Ac$];this.Yp.AN=[this,this.
Ac$];this.Aen.ASc([B=A._GetAutoObject(A.Device.Device),B.Aq1,B.AsI]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.VL._Done();this.Yp._Done(
);this.Aen._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.VL._ReInit();this.Yp._ReInit();this.Aen._ReInit();this.VL.
U(A.aaR(A.acf.A_c));this.Yp.U(A.aaR(A.acf.A30));this.Aen.U(A.aaR(A.acf.AB5));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aen)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.Vr={
Ai:function(Ae){C.TZ.Ai.call(this,Ae);var FG=A.jb.CF;var GJ=A.jb.Text;if(this.Hb
){FG=A.jb.Text;GJ=A.jb.Bj;}if(!this.LB){this.Background.L(FG);this.V.L(A.jb.AmG);
}else if(this.Qg){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else if(this.Ky){
this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.L(FG);this.V.
L(GJ);}if(this.Amc){this.Me.Cu(1);this.Me.L(A.jb.H1);}else{this.Me.Cu(0);this.Me.
L(A.jb.Bj);}},_Init:function(aArg){C.TZ._Init.call(this,aArg);this.__proto__=C.Vr;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.ADv={C5:null,FP:null,Fy:
null,AjX:null,QJ:null,ED:null,ARg:Lr,Bh:function(aSize){C.Ci.Bh.call(this,aSize);
var FG=A.jb.CF;var GJ=A.jb.Text;if(this.Hb){FG=A.jb.Bj;GJ=A.jb.Text;}this.Background.
L(FG);this.V.L(GJ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CM;C.Ci.Ai.call(this
,Ae);this.AjX.L(this.V.AQ);this.QJ.L(this.V.AQ);this.QJ.R(Bpv);this.U(((this.ARg+
A.aaR(A.acf.Colon))+CL)+A._GetAutoObject(A.Device.Helper).AkH(840003123456789).toFixed(
));if(!!this.FP&&!!this.Fy){var A1K=this.QJ.AeS([(this.QJ.String.length-(F=this.
Fy,F[1].call(F[0])))-(CM=this.FP,CM[1].call(CM[0])),0]);var A24=this.QJ.AeS([this.
QJ.String.length-(F=this.Fy,F[1].call(F[0])),0]);var AAx=this.QJ.Db();this.ED.H([
A1K[0]-1,AAx[1],A24[0]+1,AAx[3]]);}else this.ED.H(this.QJ.Db());},Dz:function(E){
if(this.C5===E)return;this.C5=E;this.AjX.Ax(E);},PJ:function(E){if(A.aaZ(this.FP
,E))return;if(!!this.FP)A.z$([this,this.Aai],this.FP,0);this.FP=E;if(!!E)A.zX([this
,this.Aai],E,0);if(!!E)A.pe([this,this.Aai],this);},QS:function(E){if(A.aaZ(this.
Fy,E))return;if(!!this.Fy)A.z$([this,this.Aaj],this.Fy,0);this.Fy=E;if(!!E)A.zX([
this,this.Aaj],E,0);if(!!E)A.pe([this,this.Aaj],this);},Aaj:function(G){this.Am(
);},Aai:function(G){this.Am();},AER:function(E){if(this.ARg===E)return;this.ARg=
E;this.Am();},_Init:function(aArg){C.Ci._Init.call(this,aArg);A.acg.An._Init.call(
this.AjX={I:this},0);A.acg.Text._Init.call(this.QJ={I:this},0);A.acg.Cz._Init.call(
this.ED={I:this},0);this.__proto__=C.ADv;this.H(JP);this.V.A4(0x11);this.AjX.H(Q9
);this.QJ.H(Bpw);this.ED.H(Bpx);this.ED.NX(2);this.ED.L(A.jb.ET);this.J(this.AjX
,0);this.J(this.QJ,0);this.J(this.ED,0);this.QJ.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=C.Ci;this.AjX._Done();this.QJ._Done();this.ED._Done();C.Ci._Done.
call(this);},_ReInit:function(){C.Ci._ReInit.call(this);this.AjX._ReInit();this.
QJ._ReInit();this.ED._ReInit();this.QJ.S(A.aaL(A.fl.Ah));},_Mark:function(D){var
B;C.Ci._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.FP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ED)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATk:0,Init:
function(aArg){var B;A.zX([this,this.Bdy],[B=A._GetAutoObject(A.Device.Device),B.
ADO,B.AH8],0);A.pe([this,this.Bdy],this);},HJ:function(G){C.Tn.HJ.call(this,G);if(
this.Ajy)this.N.Cn(A.aaL(A.ach.AD));else this.N.Cn(A.aaL(A.ach.AMC));this.N.C2(A.
aaL(A.ach.Options));this.N.FC(A.jV);this.N.B0(A.jV);this.N.Ch=[this,this.A9X];this.
N.Cc=[this,this.Wd];this.N.Arh(A.aaL(A.fl.Ak));this.N.Ana(A.aaL(A.fl.Ak));},MS:function(
G){this.BdT(this);},Oi:function(G){this.Bzi(this);},Af8:function(AcM,AcN,BvK){A.
_GetAutoObject(C.BL).At3(AcM,AcN,[this,this.A8c,this.ASB],BvK);},Wd:function(G){
if((A._GetAutoObject(A.Device.Device).D2===3)&&!this.Ajy){A._GetAutoObject(C.BL).
Qp(A.aaR(A.acf.BgP),[this,this.Bmy]);A._GetAutoObject(C.BL).Ft();}this.Af8(A.aaR(
A.acf.Rating),[this,this.AS1],3);this.Af8(A.aaR(A.acf.Ae_),[this,this.AS3],2);this.
Af8(A.aaR(A.acf.Temperature),[this,this.AS2],1);this.Af8(A.aaR(A.acf.Xv),[this,this.
AS0],0);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.A5g));
A._GetAutoObject(A.Device.Device).Dp(6);},ASB:function(E){if(this.ATk===E)return;
this.ATk=E;A.abo([this,this.A8c,this.ASB],0);},Bdy:function(G){this.ASB(A._GetAutoObject(
A.Device.Device).D2);},A8c:function(){return this.ATk;},_Init:function(aArg){C.Tn.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vc:null
,Init:function(aArg){var B;A.zX([this,this.AfM],[B=A._GetAutoObject(A.Device.Device
).Ap,B.Fz,B.FD],0);A.pe([this,this.Bfu],this);A.pe([this,this.QY],this);},Cw:function(
G){C.Tn.Cw.call(this,G);A.pe([this,this.BfA],this);},AF2:function(G){C.Tn.AF2.call(
this,G);if(!!this.Lb)this.Ahh(this.Lb,this.Vc);},HJ:function(G){C.Tn.HJ.call(this
,G);this.N.Cn(A.aaL(A.ach.AQf));this.N.C2(A.aaL(A.ach.AQg));if(this.Ajy)this.N.ASm(
0);else this.N.ASm(1);this.N.A9e(A._GetAutoObject(A.Device.Converter).Bf0(A._GetAutoObject(
A.Device.Device).D2));this.N.FC(A.jV);this.N.B0(A.jV);this.N.Ch=[this,this.Bkl];
this.N.Cc=[this,this.BmA];this.N.Arh(A.aaL(A.fl.Ak));this.N.Ana(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Ap.Qw()){this.N.IX.Dl(100);this.N.Ch=null;
}else this.N.IX.Dl(255);if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){this.N.La.
Dl(100);this.N.Cc=null;}else this.N.La.Dl(255);if(A._GetAutoObject(A.Device.Device
).Ap.Cb()<=1){this.N.TM.Dl(100);this.N.TN.Dl(100);}else{this.N.TM.Dl(255);this.N.
TN.Dl(255);}},MS:function(G){if(A._GetAutoObject(A.Device.Device).Ap.Cb()<=1)return;
var Lx=A._GetAutoObject(A.Device.Helper).W.CH;Lx=Lx+1;if(Lx>=A._GetAutoObject(A.
Device.Device).Ap.Cb())Lx=0;A._GetAutoObject(A.Device.Helper).HF(Lx);},Oi:function(
G){if(A._GetAutoObject(A.Device.Device).Ap.Cb()<=1)return;var Lx=A._GetAutoObject(
A.Device.Helper).W.CH;Lx=Lx-1;if(Lx<0)Lx=A._GetAutoObject(A.Device.Device).Ap.Cb(
)-1;A._GetAutoObject(A.Device.Helper).HF(Lx);},Ais:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.AX).BS(57);},Bkl:function(G){A._GetAutoObject(
A.Device.Device).Dp(10);},BmA:function(G){this.BdT(this);},QY:function(G){A._GetAutoObject(
A.Device.Device).Ap.Bi(A._GetAutoObject(A.Device.Helper).Mj());A.pe([this,this.BfA
],this);},Bfu:function(G){if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){this.Vc.
Y(true);if(!A._GetAutoObject(A.Device.Device).Ap.Qw()||!A._GetAutoObject(A.Device.
Device).Ap.Filter)this.Vc.R(A.aaR(A.acf.ADE));else if(!A._GetAutoObject(A.Device.
Device).Ap.Filter.DX(1,4)){if(A._GetAutoObject(A.Device.Helper).ACf(A._GetAutoObject(
A.Device.Device).Ap.Filter)===1)this.Vc.R(A.aaR(A.acf.ANs));else this.Vc.R(A.aaR(
A.acf.ANr));}else this.Vc.R(A.aaR(A.acf.ARn));}else this.Vc.Y(false);},BfA:function(
G){var BAf=A._GetAutoObject(A.Device.Helper).W.Id;var A27=A._GetAutoObject(A.Device.
Device).Ap.K_(0,BAf);if(!A._GetAutoObject(A.Device.Device).Ap.Cb())A._GetAutoObject(
A.Device.Helper).HF(-1);else if(A27<0)A._GetAutoObject(A.Device.Helper).HF(0);},
AfM:function(G){this.Bfu(this);this.HJ(this);},_Init:function(aArg){C.Tn._Init.call(
this,aArg);C.Akt._Init.call(this.Vc={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dk(C.AOT);this.Vc.H(E4);this.J(this.Vc,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tn;this.Vc._Done();C.Tn._Done.call(this);},_ReInit:function(){
C.Tn._ReInit.call(this);this.Vc._ReInit();},_Mark:function(D){var B;C.Tn._Mark.call(
this,D);if((B=this.Vc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.ALQ={QE:null,VM:null,Abk:null,Ys:null,Init:function(aArg){var B;var F;this.A9(
this.QE);if(!!A._GetAutoObject(C.AX).Q){var U2=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.AX).Q,F[1].call(F[0])))?B:null);if(!U2){A.ab5("%s",AY4);
return;}else{if(U2.Ajy)this.QE.U(A.aaR(A.acf.Bf));else this.QE.U(A.aaR(A.acf.EL)
);var AyK=A._GetAutoObject(A.Device.Device).Ap.Filter;if(!AyK||A._GetAutoObject(
A.Device.Helper).AqI(AyK))this.Ys.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Ap.Cb()){this.VM.Ar(false);this.QE.Ar(false);}}}},Ac$:function(G){var Aa=(C.Ci.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dp(0);if(
Aa===this.Abk)A._GetAutoObject(C.AX).BS(9);else if(Aa===this.VM)A._GetAutoObject(
A.Device.Device).Dp(7);else if(Aa===this.QE)this.BAI();else if(Aa===this.Ys)this.
A0I();else throw new Error(Axy);},BAI:function(){var B;var F;var U2=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.AX).Q,F[1].call(F[0])))?B:null);if(!U2){A.
ab5("%s",AY4);return;}U2.A9X(this);},A0I:function(){var B;var F;var U2=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.AX).Q,F[1].call(F[0])))?B:null);if(!U2){A.
ab5("%s",AY4);return;}U2.QY(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mg._Init.call(this.QE={I:this},0);C.Mg._Init.call(this.VM={I:this},
0);C.Mg._Init.call(this.Abk={I:this},0);C.Mg._Init.call(this.Ys={I:this},0);this.
__proto__=C.ALQ;this.H(Afi);this.QE.H(ZR);this.QE.Ar(true);this.QE.U(A.aaR(A.acf.
EL));this.QE.Bg(true);this.VM.H(P1);this.VM.Ar(true);this.VM.U(A.aaR(A.acf.ATL));
this.VM.Bg(true);this.Abk.H(JQ);this.Abk.U(A.aaR(A.acf.Akv));this.Abk.Bg(true);this.
Ys.H(BC);this.Ys.U(A.aaR(A.acf.ABo));this.Ys.Bg(true);this.J(this.QE,0);this.J(this.
VM,0);this.J(this.Abk,0);this.J(this.Ys,0);this.QE.AN=[this,this.Ac$];this.VM.AN=[
this,this.Ac$];this.Abk.AN=[this,this.Ac$];this.Ys.AN=[this,this.Ac$];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QE._Done();this.VM._Done(
);this.Abk._Done();this.Ys._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QE._ReInit();this.VM._ReInit();this.Abk.
_ReInit();this.Ys._ReInit();this.QE.U(A.aaR(A.acf.EL));this.VM.U(A.aaR(A.acf.ATL
));this.Abk.U(A.aaR(A.acf.Akv));this.Ys.U(A.aaR(A.acf.ABo));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.MultiInfoActionsScreen={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.
__proto__=C.MultiInfoActionsScreen;this.N.B0(A.aaR(A.acf.A4w));},_ReInit:function(
){C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.A4w));},_className:"Application::MultiInfoActionsScreen"
};C.IY={TO:null,Er:null,X4:null,Background:null,An:null,Ij:null,Ii:null,MX:0,AK:
0,Ai:function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10
);var Ir=((Ae&0x40)===0x40);if(Ir){this.Background.L(A.jb.AR);this.An.L(A.jb.Bj);
this.Dl(256);}else if(G6){this.Background.L(this.MX);this.An.L(A.jb.Text);this.Dl(
256);}else{this.Background.L(this.MX);this.An.L(A.jb.Text);this.Dl(128);}if(!this.
AK)this.An.Cu(0);else if(this.AK>0){if(A.aaZ(this.TO,[B=A._GetAutoObject(A.Device.
Device),B.AvF,B.Ax5]))this.An.Cu(2);else if(A.aaZ(this.TO,[B=A._GetAutoObject(A.
Device.Device),B.AvE,B.Ax4]))this.An.Cu(3);else if(!!this.X4&&((F=this.X4,F[1].call(
F[0]))===1))this.An.Cu(1);else this.An.Cu(0);}else if(A.aaZ(this.TO,[B=A._GetAutoObject(
A.Device.Device),B.AvF,B.Ax5]))this.An.Cu(6);else if(A.aaZ(this.TO,[B=A._GetAutoObject(
A.Device.Device),B.AvE,B.Ax4]))this.An.Cu(7);else if(!!this.X4&&((F=this.X4,F[1].
call(F[0]))===1))this.An.Cu(5);else this.An.Cu(4);},AfQ:function(G){this.J0(this
);},AfP:function(G){this.JV(this);},J0:function(G){this.Bx(1);},JV:function(G){this.
Bx(-1);},BlD:function(E){if(A.aaZ(this.TO,E))return;if(!!this.TO)A.z$([this,this.
A2n],this.TO,0);this.TO=E;if(!!E)A.zX([this,this.A2n],this.TO,0);A.pe([this,this.
A2n],this);},T8:function(E){if(A.aaZ(this.Er,E))return;if(!!this.Er)A.z$([this,this.
AfO],this.Er,0);this.Er=E;if(!!E)A.zX([this,this.AfO],this.Er,0);if(!!E)A.pe([this
,this.AfO],this);},A2n:function(G){var F;if(!!this.TO)this.Bx((F=this.TO,F[1].call(
F[0])));},AfO:function(G){A.pe([this,this.BAV],this);},C1:function(E){if(this.MX===
E)return;this.MX=E;this.Am();},Bx:function(E){var F;if(this.AK===E)return;this.AK=
E;if(!!this.TO)(F=this.TO,F[2].call(F[0],E));this.Am();A.abo([this,this.T5,this.
Bx],0);},A86:function(E){if(A.aaZ(this.X4,E))return;if(!!this.X4)A.z$([this,this.
AfO],this.X4,0);this.X4=E;if(!!E)A.zX([this,this.AfO],this.X4,0);if(!!E)A.pe([this
,this.AfO],this);},BAV:function(G){var F,CM;if(!this.X4||!this.Er)return;this.BlD(
A._GetAutoObject(A.Device.Helper).Bcn((F=this.X4,F[1].call(F[0])),(CM=this.Er,CM[
1].call(CM[0]))));this.Am();},T5:function(){return this.AK;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);
A.acg.An._Init.call(this.An={I:this},0);A.Core.BJ._Init.call(this.Ij={I:this},0);
A.Core.BJ._Init.call(this.Ii={I:this},0);this.__proto__=C.IY;this.H(AH0);this.Background.
AY(0x3F);this.Background.H(AH0);this.An.AY(0x3C);this.An.H(AH0);this.Ij.Filter=4;
this.Ii.Filter=5;this.MX=A.jb.CF;this.J(this.Background,0);this.J(this.An,0);this.
An.Ax(A.aaL(A.ach.AT$));this.Ij.BK=[this,this.AfQ];this.Ii.BK=[this,this.AfP];},
_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.An._Done();
this.Ij._Done();this.Ii._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();this.An._ReInit();this.Ij._ReInit(
);this.Ii._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.TO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Er)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.X4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALl={Wd:function(G){var B;var F;this.Af9();if(!!A._GetAutoObject(A.Device.Helper
).AN7((F=this.Fx,F[1].call(F[0])),0,true))this.ALt(A.aaR(A.acf.A6e),[this,this.BmB
],[B=A._GetAutoObject(A.Device.Device),B.A7w,B.A$2]);else A._GetAutoObject(C.BL).
Xu(A.aaR(A.acf.A6e));A._GetAutoObject(C.BL).Ft();this.IR(A.aaR(A.acf.LinkTransponder
),[this,this.BlS],8);this.IR(A.aaR(A.acf.Tj),[this,this.Aj7],9);this.IR(A.aaR(A.
acf.A_4),[this,this.Bmr],10);this.IR(A.aaR(A.acf.AFz),[this,this.ASH],3);this.IR(
A.aaR(A.acf.AnC),[this,this.Awd],2);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(
C.BL).Nw(A.aaR(A.acf.Al0)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dp(6);},Dw:function(G){},Aa4:function(){return C.Ajg;},Aa5:function(){return C.AjA;
},QY:function(G){var F;A._GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(
A.Device.Helper).A5S((F=this.Fx,F[1].call(F[0]))));},HJ:function(G){var F;C.GN.HJ.
call(this,G);if(this.AjW()===false){this.N.Cn(A._GetAutoObject(A.Device.Converter
).Bf2((F=this.Fx,F[1].call(F[0]))));this.N.Ch=[this,this.AIk];this.N.FC(A.jV);}this.
N.OJ(false);this.N.OK(false);},AfU:function(){A._GetAutoObject(C.AX).BS(59);},AfT:
function(){A._GetAutoObject(C.AX).BS(60);},A2s:function(G){C.GN.A2s.call(this,G);
A.pe([this,this.AZB],this);},BmB:function(G){A._GetAutoObject(A.Device.Device).AvL(
!A._GetAutoObject(A.Device.Device).ApQ);this.AnJ(this);},AnJ:function(G){var F;var
Ba=A._GetAutoObject(A.Device.Device).Ap.Filter.GA();A._GetAutoObject(A.Device.Helper
).Bm8(Ba);if(A._GetAutoObject(A.Device.Device).ApQ){var A1o=A._GetAutoObject(A.Device.
Helper).AN7((F=this.Fx,F[1].call(F[0])),21600,true);Ba.CX(A1o);}A._GetAutoObject(
A.Device.Device).Ap.Bi(Ba);},_Init:function(aArg){C.GN._Init.call(this,aArg);this.
__proto__=C.ALl;var B;this.Du(A.aaR(A.acf.Avq));this.Av9([B=A._GetAutoObject(A.Device.
Device),B.A7v,B.A$1]);},_ReInit:function(){C.GN._ReInit.call(this);this.Du(A.aaR(
A.acf.Avq));},_className:"Application::ActionListScreen"};C.ALk={_Init:function(
aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ALk;},_className:"Application::ActionListFilterScreen"
};C.ALj={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.ALj;this.
N.B0(A.aaR(A.acf.A4n));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.
aaR(A.acf.A4n));},_className:"Application::ActionListActionsScreen"};C.AOT={IC:null
,IH:null,Bd:null,Mt:A.jV,Init:function(aArg){var B;A.zX([this,this.Nf],[B=A._GetAutoObject(
A.Device.Helper).W,B.A8h,B.A9z],0);A.zX([this,this.Nf],[B=A._GetAutoObject(A.Device.
Device).Ap,B.Fz,B.FD],0);},C8:function(E){C.IA.C8.call(this,E);this.IH.L(E);},D$:
function(G){C.IA.D$.call(this,G);var AyK=A._GetAutoObject(A.Device.Device).Ap.Filter;
if(!AyK||A._GetAutoObject(A.Device.Helper).AqI(AyK))this.IC.Y(false);else this.IC.
Y(true);if(A._GetAutoObject(A.Device.Helper).W.Aqs())this.Awk(((A._GetAutoObject(
A.Device.Helper).W.CH+1).toFixed()+A$f)+A._GetAutoObject(A.Device.Device).Ap.Cb(
).toFixed());else this.Awk(A$g);},Awk:function(E){if(this.Mt===E)return;this.Mt=
E;this.IH.R(E);},_Init:function(aArg){C.IA._Init.call(this,aArg);A.acg.An._Init.
call(this.IC={I:this},0);A.acg.Text._Init.call(this.IH={I:this},0);A.acg.DR._Init.
call(this.Bd={I:this},0);this.__proto__=C.AOT;this.HK.H(Bpy);this.CY.H(Bpz);this.
IC.H(BpA);this.IC.L(A.jb.Text);this.IH.H(A$h);this.IH.HH(2);this.IH.KM(true);this.
IH.A4(0x12);this.IH.R(A$i);this.Bd.DM(AxR);this.Bd.DY(AxS);this.Bd.L(A.jb.Bd);this.
J(this.IC,0);this.J(this.IH,0);this.J(this.Bd,0);this.IC.Ax(A.aaL(A.ach.Aed));this.
IH.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IA;this.
IC._Done();this.IH._Done();this.Bd._Done();C.IA._Done.call(this);},_ReInit:function(
){C.IA._ReInit.call(this);this.IC._ReInit();this.IH._ReInit();this.Bd._ReInit();
this.IH.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((
B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.Ar9={Text:null,Bh:function(aSize){C.OT.Bh.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OT.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(WT);else this.Text.R(this.AC.F$((F=this.Q,F[1].call(F[0]
))));var Ir=((Ae&0x40)===0x40);if(Ir)this.Text.L(A.jb.Bj);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OT._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.Ar9;this.Text.R(Ra);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.OT;this.Text._Done();C.OT.
_Done.call(this);},_ReInit:function(){C.OT._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.OT._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.AqF={C5:null,Bh:function(aSize){C.OT.Bh.call(this,aSize);this.C5.H(A.abK(this.
C5.M,aSize));},Ai:function(Ae){var B;var F;C.OT.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C5.Ax(null);else{this.C5.Ax(this.AC.ACa(this.AC.DK((F=this.Q,F[1].call(F[
0])))));this.C5.Cu(this.AC.ACc(this.AC.DK((F=this.Q,F[1].call(F[0])))));}var Ir=((
Ae&0x40)===0x40);if(Ir)this.C5.L(A.jb.Bj);else this.C5.L(A.jb.Text);},_Init:function(
aArg){C.OT._Init.call(this,aArg);A.acg.An._Init.call(this.C5={I:this},0);this.__proto__=
C.AqF;this.H(AH0);this.C5.H(A$e);this.J(this.C5,0);},_Done:function(){this.__proto__=
C.OT;this.C5._Done();C.OT._Done.call(this);},_ReInit:function(){C.OT._ReInit.call(
this);this.C5._ReInit();},_Mark:function(D){var B;C.OT._Mark.call(this,D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Aur={Vt:null,DirectionOfCountingToString:null,AdU:null,Do:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return-1;return aIndex;
},F$:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return A.jV;return this.
DirectionOfCountingToString.BQ(aIndex);},DK:function(A3){return A3;},Hl:function(
){return this.Do()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Vt)(F=
this.Vt,F[2].call(F[0],E));},ACa:function(aIndex){if((aIndex<0)||(aIndex>=this.Do(
)))return null;return this.AdU.Ar_(aIndex);},ACc:function(aIndex){if((aIndex<0)||(
aIndex>=this.Do()))return-1;return this.AdU.Ar$(aIndex);},A0W:function(G){var F;
if(!!this.Vt)this.Q=(F=this.Vt,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9
,this.B_],0);},AeB:function(E){if(A.aaZ(this.Vt,E))return;if(!!this.Vt)A.z$([this
,this.A0W],this.Vt,0);this.Vt=E;if(!!this.Vt)A.zX([this,this.A0W],this.Vt,0);A.pe([
this,this.A0W],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.AdU._Init.call(this.AdU={I:this},0);this.__proto__=C.Aur;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.AdU._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.AdU._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Vt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.ALI={Hj:null,Er:null,AnimalIdGenerationMethodToString:
null,AdA:null,Do:function(){return 4;},C4:function(aIndex){var F;var A3=-1;if((aIndex<
0)||(aIndex>=this.Do()))return-1;switch(aIndex){case 0:A3=0;break;case 1:A3=1;break;
case 2:A3=this.BxR((F=this.Er,F[1].call(F[0])));break;case 3:A3=5;break;default:
throw new Error(BpB+aIndex.toFixed());}return A3;},F$:function(aIndex){if((aIndex<
0)||(aIndex>=this.Do()))return A.jV;return this.AnimalIdGenerationMethodToString.
BQ(this.C4(aIndex));},DK:function(A3){var aIndex=-1;switch(A3){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(BpC+A3.toFixed());}return aIndex;},Hl:function(){return this.
Do()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Hj)(F=this.Hj,F[2].
call(F[0],E));},ACa:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return null;
return this.AdA.Ar_(this.C4(aIndex));},ACc:function(aIndex){if((aIndex<0)||(aIndex>=
this.Do()))return-1;return this.AdA.Ar$(this.C4(aIndex));},A0q:function(G){var F;
if(!!this.Hj)this.Q=(F=this.Hj,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9
,this.B_],0);},Bkt:function(E){if(A.aaZ(this.Hj,E))return;if(!!this.Hj)A.z$([this
,this.A0q],this.Hj,0);this.Hj=E;if(!!this.Hj)A.zX([this,this.A0q],this.Hj,0);A.pe([
this,this.A0q],this);},T8:function(E){if(A.aaZ(this.Er,E))return;if(!!this.Er)A.
z$([this,this.AfO],this.Er,0);this.Er=E;if(!!this.Er)A.zX([this,this.AfO],this.Er
,0);A.pe([this,this.AfO],this);},AfO:function(G){A.pe([this,this.BwI],this);},BxR:
function(LY){var Rc=0;switch(LY){case 0:Rc=2;break;case 1:Rc=3;break;case 2:Rc=4;
break;default:throw new Error(BpD+LY.toFixed());}return Rc;},BwI:function(G){var
Bdj=this.C4(this.DK(this.Q));if(this.Q!==Bdj)this.At(Bdj);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdA._Init.call(this.
AdA={I:this},0);this.__proto__=C.ALI;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdA._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdA._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Er)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AFY={Fv:null,AaA:null,Q:null,Fb:null,E0:null,Hx:null,V7:null,A1:null,HU:null
,J9:null,A5:0,AK:0,Ak3:0,Init:function(aArg){var B;A.zX([this,this.Bdx],[B=A._GetAutoObject(
A.Device.Device),B.Am2,B.Aoa],0);},Ai:function(Ae){C.D_.Ai.call(this,Ae);if(this.
A5===1){if(this.Hb){this.A1.FB(A.jb.CF);this.Hx.C1(A.jb.CF);this.V7.C1(A.jb.CF);
this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.A1.FB(A.jb.C0);this.Hx.
C1(A.jb.C0);this.V7.C1(A.jb.C0);this.Background.L(A.jb.CF);this.V.L(A.jb.Text);}
}else{if(this.Hb){this.A1.FB(A.jb.CF);this.Hx.C1(A.jb.CF);this.V7.C1(A.jb.CF);}else{
this.A1.FB(A.jb.C0);this.Hx.C1(A.jb.C0);this.V7.C1(A.jb.C0);}this.A9(null);}},IP:
function(G){C.D_.IP.call(this,G);if(!this.A5)this.FJ(this);else this.G5(this);},
DD:function(G){var F;if(!this.N)return;switch(this.A5){case 1:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(
F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;
default:this.Fv.Aks((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:
function(G){this.Ep(0);},Ep:function(EF){var F;if(!this.A5&&!!this.N)this.Fv.Aje((
F=this.N,F[1].call(F[0])));this.A5=EF;if(this.A5<0)this.A5=0;else if(this.A5>1)this.
A5=1;switch(this.A5){case 0:this.A9(null);break;case 1:{if(this.A1.A7P())this.A9(
this.A1);else this.A9(this.V7);if(!this.AK)this.A1.Sv(2);else this.A1.Sv(7);}break;
default:throw new Error(AsH+this.A5.toFixed());}this.DD(this);this.Am();},At:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},De:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.T5,this.
Bx],0);}},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));},Oi:function(G){this.AAo(2);},MS:function(G){this.AAo(
7);},AAo:function(Gq){var B;var AyL=(A.Core.O.isPrototypeOf(B=this.AR)?B:null);if(
!!AyL){var AzC=(A.Core.O.isPrototypeOf(B=this.R5(AyL,Gq,0x15))?B:null);if(!!AzC){
this.A9(AzC);return true;}}return false;},AoA:function(G){A.pe([this,this.Bdx],this
);},A3g:function(G){var B;var F;if(!this.HU.Hj){this.J9.AeB(null);return;}switch((
F=this.HU.Hj,F[1].call(F[0]))){case 0:case 1:this.J9.AeB(null);break;case 3:this.
J9.AeB([B=A._GetAutoObject(A.Device.Device),B.ARI,B.AZj]);break;case 2:this.J9.AeB([
B=A._GetAutoObject(A.Device.Device),B.ARJ,B.AZk]);break;case 4:case 5:this.J9.AeB([
B=A._GetAutoObject(A.Device.Device),B.ADT,B.AIa]);break;default:throw new Error(
BpE+(F=this.HU.Hj,F[1].call(F[0])).toFixed());}},Bdx:function(G){var F;if(!this.
HU.Hj)return;A.pe([this,this.A3g],this);var Atj=false;switch((F=this.HU.Hj,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{Atj=true;this.A1.A9Q(-1);}break;case 0:
case 1:{Atj=false;this.A1.A9Q(A._GetAutoObject(A.Device.Device).FP);}break;default:
throw new Error(AxK+(F=this.HU.Hj,F[1].call(F[0])).toFixed());}this.A1.Ar(Atj);this.
Hx.Ar(Atj);this.Hx.Y(Atj);if(((F=this.HU.Hj,F[1].call(F[0]))!==this.Ak3)||(Atj===
false)){var BO=this.AK;this.Bx(A._GetAutoObject(A.Device.Helper).ALG((F=this.HU.
Hj,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AK!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Big((F=this.HU.Hj,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.A1.Kg(A._GetAutoObject(A.Device.Device).FP);else this.A1.Kg(0);this.Ak3=(
F=this.HU.Hj,F[1].call(F[0]));},A8P:function(E){var B;if(this.AaA===E)return;if(
!!this.AaA){A.z$([this,this.AoA],[B=this.AaA,B.Wb,B.JI],0);A.z$([this,this.AoA],[
B=this.AaA,B.Am6,B.Na],0);A.z$([this,this.AoA],[B=this.AaA,B.Aj4,B.NW],0);this.HU.
T8(null);}this.AaA=E;if(!!E){A.zX([this,this.AoA],[B=this.AaA,B.Wb,B.JI],0);A.zX([
this,this.AoA],[B=this.AaA,B.Am6,B.Na],0);A.zX([this,this.AoA],[B=this.AaA,B.Aj4
,B.NW],0);this.HU.T8([B=this.AaA,B.Wb,B.JI]);}if(!!E)A.pe([this,this.AoA],this);
},T5:function(){return this.AK;},_Init:function(aArg){C.D_._Init.call(this,aArg);
A.Core.BJ._Init.call(this.Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0
);C.AqF._Init.call(this.Hx={I:this},0);C.AqF._Init.call(this.V7={I:this},0);C.Ave.
_Init.call(this.A1={I:this},0);C.ALI._Init.call(this.HU={I:this},0);C.Aur._Init.
call(this.J9={I:this},0);this.__proto__=C.AFY;var B;this.H(UG);this.V.Ar(false);
this.V.R(Asw);this.V.L(A.jb.Bj);this.Fb.Filter=6;this.E0.Filter=7;this.Hx.H(BpF);
this.Hx.Ar(false);this.V7.H(BpG);this.A1.H(BpH);this.A1.Ar(false);this.J(this.Hx
,0);this.J(this.V7,0);this.J(this.A1,0);this.Fv=A._NewObject(C.Ad7,0);this.Fb.BK=[
this,this.Oi];this.E0.BK=[this,this.MS];this.Hx.CG(this.J9);this.Hx.At([B=this.J9
,B.B9,B.B_]);this.V7.CG(this.HU);this.V7.At([B=this.HU,B.B9,B.B_]);this.A1.At([this
,this.T5,this.Bx]);this.HU.Bkt([B=A._GetAutoObject(A.Device.Device),B.Am2,B.Aoa]
);this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.Fb._Done();this.E0.
_Done();this.Hx._Done();this.V7._Done();this.A1._Done();this.HU._Done();this.J9.
_Done();C.D_._Done.call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.
Fb._ReInit();this.E0._ReInit();this.Hx._ReInit();this.V7._ReInit();this.A1._ReInit(
);this.HU._ReInit();this.J9._ReInit();},_Mark:function(D){var B;C.D_._Mark.call(
this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaA)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.J9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GS={Ay5:null,Fb:null,E0:null,GO:null,
FO:null,ED:null,M2:0,AMk:0,ABf:0,Ud:0,A_1:-1,AMj:false,Init:function(aArg){A.pe([
this,this.AZO],this);},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.ED.Y(this.
AMj);this.ED.H(A.wC(this.X9(this.ABf).M,this.X9((this.ABf+this.AMk)-1).M));},Oi:
function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);var A0F=this.Be0(2);if(A0F===
false)DW.NB=true;},MS:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);var
A0F=this.Be0(7);if(A0F===false)DW.NB=true;},Be0:function(Gq){var B;var Em=(C.DF.
isPrototypeOf(B=this.AR)?B:null);Em=this.Bcp(Em,Gq,true);if(!!Em){this.A9(Em);this.
Ay5=(C.DF.isPrototypeOf(B=this.AR)?B:null);return true;}return false;},Ac_:function(
G){A.ab5("%s",AkQ);},GI:function(s){this.Ac_(s);},FB:function(E){if(this.M2===E)
return;this.M2=E;this.FO.C1(E);this.GO.C1(E);},Sv:function(Gq){var B;switch(Gq){
case 2:this.A9(this.GO);break;case 7:this.A9(this.FO);break;default:A.ab5("%s%e"
,BpI,Gq);}this.Ay5=(C.DF.isPrototypeOf(B=this.AR)?B:null);},LJ:function(G){},AZO:
function(s){this.LJ(s);},AEc:function(E){if(this.AMj===E)return;this.AMj=E;this.
Am();},A8V:function(E){if(this.AMk===E)return;this.AMk=E;this.Am();},A8U:function(
E){if(this.ABf===E)return;this.ABf=E;this.Am();},X9:function(Hq){var B4=null;switch(
Hq){case-1:case 0:B4=this.FO;break;case 1:B4=this.GO;break;default:A.ab5("%s",AhG
);}return B4;},Kg:function(E){if(this.Ud===E)return;this.Ud=E;this.AlW();},AlW:function(
){A.ab5("%s",AkQ);},Bcp:function(AcF,Gq,LB){var B;if(!!AcF){var Ba;if(LB)Ba=0x11;
else Ba=0x0;switch(Gq){case 2:AcF=(C.DF.isPrototypeOf(B=this.Aqh(AcF,Ba))?B:null
);break;case 7:AcF=(C.DF.isPrototypeOf(B=this.Vw(AcF,Ba))?B:null);break;default:
throw new Error(BpJ);}}return AcF;},A9Q:function(E){if(this.A_1===E)return;this.
A_1=E;var Em=this.FO;var A04;while(!!Em){A04=!!E;Em.Ar(A04);Em.Y(A04);if(Em===this.
Ay5)this.A9(Em);Em=this.Bcp(Em,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BJ._Init.call(this.Fb={I:this},0);A.Core.BJ._Init.
call(this.E0={I:this},0);C.DF._Init.call(this.GO={I:this},0);C.DF._Init.call(this.
FO={I:this},0);A.acg.Cz._Init.call(this.ED={I:this},0);this.__proto__=C.GS;this.
H(BpK);this.Fb.Filter=6;this.E0.Filter=7;this.M2=A.jb.CF;this.GO.H(EW);this.FO.H(
A$j);this.ED.H(BpL);this.ED.NX(2);this.ED.L(A.jb.ET);this.J(this.GO,0);this.J(this.
FO,0);this.J(this.ED,0);this.Fb.BK=[this,this.Oi];this.Fb.DS=[this,this.Oi];this.
E0.BK=[this,this.MS];this.E0.DS=[this,this.MS];this.Ay5=this.FO;this.GO.Dj=[this
,this.GI];this.FO.Dj=[this,this.GI];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Fb._Done();this.E0._Done();this.GO._Done();this.FO._Done();this.ED.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Fb._ReInit();this.E0._ReInit();this.GO._ReInit();this.FO._ReInit();this.ED.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ay5)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ED)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQl={Dr:null,CQ:null,Cp:null
,FB:function(E){if(this.M2===E)return;C.HB.FB.call(this,E);this.Cp.C1(E);this.CQ.
C1(E);this.Dr.C1(E);},X9:function(Hq){var B4=null;switch(Hq){case-1:case 0:B4=this.
FO;break;case 1:B4=this.Cp;break;case 2:B4=this.CQ;break;case 3:B4=this.Dr;break;
case 4:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;},_Init:function(aArg
){C.HB._Init.call(this,aArg);C.DF._Init.call(this.Dr={I:this},0);C.DF._Init.call(
this.CQ={I:this},0);C.DF._Init.call(this.Cp={I:this},0);this.__proto__=C.AQl;this.
H(BpM);this.GO.H(AsG);this.Dr.H(A$k);this.CQ.H(A$l);this.Cp.H(A$m);this.FO.H(BpN
);this.J(this.Dr,-2);this.J(this.CQ,-2);this.J(this.Cp,-2);this.Dr.Dj=[this,this.
GI];this.CQ.Dj=[this,this.GI];this.Cp.Dj=[this,this.GI];},_Done:function(){this.
__proto__=C.HB;this.Dr._Done();this.CQ._Done();this.Cp._Done();C.HB._Done.call(this
);},_ReInit:function(){C.HB._ReInit.call(this);this.Dr._ReInit();this.CQ._ReInit(
);this.Cp._ReInit();},_Mark:function(D){var B;C.HB._Mark.call(this,D);if((B=this.
Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AUK={Q1:null,Acl:null,AUJ:0,Cw:function(G){this.Acl.Ar(true);},EV:function(G
){this.Acl.Ar(false);},Bmp:function(E){if(this.AUJ===E)return;this.AUJ=E;this.Q1.
R((((A.aaR(A.acf.AUI)+ZU)+E.toFixed())+BpO)+A.aaR(A.acf.K9));},Bkf:function(){return this.
AUJ;},BzD:function(G){A._GetAutoObject(C.AX).BS(3);A._GetAutoObject(A.Device.Device
).Am_(1);},_Init:function(aArg){C.XH._Init.call(this,aArg);C.CO._Init.call(this.
Q1={I:this},0);A.acl.Ga._Init.call(this.Acl={I:this},0);this.__proto__=C.AUK;this.
Aeo.H(BpP);this.Ul.R(A.jV);this.Q1.H(BpQ);this.Q1.R(A.aaR(A.acf.AUI)+A$n);this.Q1.
L(A.jb.Text);this.Acl.HG(1);this.Acl.Fe(5000);this.Acl.B1=100;this.J(this.Q1,0);
this.Q1.S(A.aaL(A.fl.Ah));this.Q1.A8(A.aaL(A.fl.Ak));this.Q1.CB(A.aaL(A.fl.By));
this.Acl.Sl=[this,this.BzD];this.Acl.Q=[this,this.Bkf,this.Bmp];},_Done:function(
){this.__proto__=C.XH;this.Q1._Done();this.Acl._Done();C.XH._Done.call(this);},_ReInit:
function(){C.XH._ReInit.call(this);this.Q1._ReInit();this.Acl._ReInit();this.Q1.
R(A.aaR(A.acf.AUI)+A$n);this.Q1.S(A.aaL(A.fl.Ah));this.Q1.A8(A.aaL(A.fl.Ak));this.
Q1.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.XH._Mark.call(this,D);if((B=this.
Q1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARb={KZ:null,Lg:null,Bc$:false,Init:
function(aArg){this.A9(this.C7);},Eo:function(G){var B;if(!!this.KZ)this.KZ.Eo(this
);C.V9.Eo.call(this,G);},AfR:function(G){var B;if(!!this.KZ)this.KZ.AfR(this);C.
V9.AfR.call(this,G);},Cw:function(G){var B;if(!this.Bc$){this.Bc$=true;A.pe([this
,this.A2L],this);}else if(!this.KZ){this.KZ=A._NewObject(C.ARd,0);this.KZ.A84([this
,this.AAe]);this.LJ(this);this.KZ.LJ(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Eo(this);else C.V9.Cw.call(this,G);}else C.V9.Cw.call(this,G
);},ApF:function(G){var B;if(!!this.KZ)this.KZ.ApF(this);},AAe:function(G){var B;
var F;this.LJ(this);this.KZ.LJ(this);A.pe([this,this.Acy],this);var BcN=this.LP;
this.Aez(A._GetAutoObject(A.Device.Helper).Aa2(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AUH(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,BcN);if(BcN)A._GetAutoObject(
A.Device.Helper).W.NW(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.Ub(A._GetAutoObject(A.Device.Helper).ALG((F=this.Dc.HU.Hj,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.Jx(this.C7);},A2L:function(
G){A._GetAutoObject(C.AX).BS(90);},_Init:function(aArg){C.V9._Init.call(this,aArg
);C.Q0._Init.call(this.Lg={I:this},0);this.__proto__=C.ARb;var B;this.Lg.H(AhD);
this.Lg.Aj(true);this.Lg.U(A.aaR(A.acf.ABF));this.J(this.Lg,-8);this.Kn(this.Gb,-
1);this.Lg.Gg([this,this.D3,this.GG]);this.Lg.At([B=A._GetAutoObject(A.Device.Helper
).W,B.ARS,B.Ang]);this.Init(aArg);},_Done:function(){this.__proto__=C.V9;this.Lg.
_Done();C.V9._Done.call(this);},_ReInit:function(){C.V9._ReInit.call(this);this.
Lg._ReInit();this.Lg.U(A.aaR(A.acf.ABF));},_Mark:function(D){var B;C.V9._Mark.call(
this,D);if((B=this.KZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AC5={Agp:null,Agq:null,NE:null,ND:null,EQ:null,F_:null,Eh:null,Dr:null,CQ:null,Cp:
null,FB:function(E){if(this.M2===E)return;C.Lc.FB.call(this,E);this.Cp.C1(E);this.
CQ.C1(E);this.Dr.C1(E);this.Eh.C1(E);this.F_.C1(E);this.EQ.C1(E);this.ND.C1(E);this.
NE.C1(E);this.Agq.C1(E);this.Agp.C1(E);},X9:function(Hq){var B4=null;switch(Hq){
case-1:case 0:B4=this.FO;break;case 1:B4=this.Cp;break;case 2:B4=this.CQ;break;case
3:B4=this.Dr;break;case 4:B4=this.Eh;break;case 5:B4=this.F_;break;case 6:B4=this.
EQ;break;case 7:B4=this.ND;break;case 8:B4=this.NE;break;case 9:B4=this.Agq;break;
case 10:B4=this.Agp;break;case 11:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;
},_Init:function(aArg){C.Lc._Init.call(this,aArg);C.DF._Init.call(this.Agp={I:this
},0);C.DF._Init.call(this.Agq={I:this},0);C.DF._Init.call(this.NE={I:this},0);C.
DF._Init.call(this.ND={I:this},0);C.DF._Init.call(this.EQ={I:this},0);C.DF._Init.
call(this.F_={I:this},0);C.DF._Init.call(this.Eh={I:this},0);C.DF._Init.call(this.
Dr={I:this},0);C.DF._Init.call(this.CQ={I:this},0);C.DF._Init.call(this.Cp={I:this
},0);this.__proto__=C.AC5;this.H(BpR);this.GO.H(AH1);this.Agp.H(AxU);this.Agq.H(
AY5);this.NE.H(AY6);this.ND.H(AY7);this.EQ.H(AY8);this.F_.H(AY9);this.Eh.H(AY_);
this.Dr.H(A$o);this.CQ.H(AY$);this.Cp.H(BpS);this.FO.H(BpT);this.J(this.Agp,-2);
this.J(this.Agq,-2);this.J(this.NE,-2);this.J(this.ND,-2);this.J(this.EQ,-2);this.
J(this.F_,-2);this.J(this.Eh,-2);this.J(this.Dr,-2);this.J(this.CQ,-2);this.J(this.
Cp,-2);this.Agp.Dj=[this,this.GI];this.Agq.Dj=[this,this.GI];this.NE.Dj=[this,this.
GI];this.ND.Dj=[this,this.GI];this.EQ.Dj=[this,this.GI];this.F_.Dj=[this,this.GI
];this.Eh.Dj=[this,this.GI];this.Dr.Dj=[this,this.GI];this.CQ.Dj=[this,this.GI];
this.Cp.Dj=[this,this.GI];},_Done:function(){this.__proto__=C.Lc;this.Agp._Done(
);this.Agq._Done();this.NE._Done();this.ND._Done();this.EQ._Done();this.F_._Done(
);this.Eh._Done();this.Dr._Done();this.CQ._Done();this.Cp._Done();C.Lc._Done.call(
this);},_ReInit:function(){C.Lc._ReInit.call(this);this.Agp._ReInit();this.Agq._ReInit(
);this.NE._ReInit();this.ND._ReInit();this.EQ._ReInit();this.F_._ReInit();this.Eh.
_ReInit();this.Dr._ReInit();this.CQ._ReInit();this.Cp._ReInit();},_Mark:function(
D){var B;C.Lc._Mark.call(this,D);if((B=this.Agp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HB={Q:null,AK:0,Ai:function(Ae){C.GS.Ai.call(this
,Ae);this.AlW();},Ac_:function(G){var B;var F;var KW=A.jV;var B4=this.GO;while(!
!B4){if(B4.E$>0)KW=KW+B4.E$.toFixed();else KW=KW+String.fromCharCode(0x30);B4=(C.
DF.isPrototypeOf(B=this.Vw(B4,0x11))?B:null);}var BO=this.AK;this.Bx(A.wz(KW,-1,
10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.
Q,0);}},LJ:function(G){},AlW:function(){var B;var F;if(!!this.Q){var Em=this.FO;
var Adf=this.Ud;var A3=(F=this.Q,F[1].call(F[0]));while(!!Em){if(A3>0){Em.M_(A3%
10);A3=(A3/10)|0;}else if(Adf>0)Em.M_(0);else Em.M_(-1);Em=(C.DF.isPrototypeOf(B=
this.Aqh(Em,0x11))?B:null);Adf=Adf-1;}}},De:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)
A.pe([this,this.De],this);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.
Am();},_Init:function(aArg){C.GS._Init.call(this,aArg);this.__proto__=C.HB;},_Mark:
function(D){var B;C.GS._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lc={AK:0,Q:null
,Ai:function(Ae){C.GS.Ai.call(this,Ae);this.AlW();},Ac_:function(G){var B;var F;
var KW=A.jV;var B4=this.GO;while(!!B4){if(B4.E$>0)KW=KW+B4.E$.toFixed();else KW=
KW+String.fromCharCode(0x30);B4=(C.DF.isPrototypeOf(B=this.Vw(B4,0x11))?B:null);
}var BO=this.AK;this.Bx(A.ab0(KW,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AK));A.abo(this.Q,0);}},LJ:function(G){},AlW:function(){var B;
var F;if(!!this.Q){var Em=this.FO;var Adf=this.Ud;var A3=(F=this.Q,F[1].call(F[0
]));while(!!Em){if(A3>0){Em.M_((A3%10)|0);A3=Math.trunc(A3/10);}else if(Adf>0)Em.
M_(0);else Em.M_(-1);Em=(C.DF.isPrototypeOf(B=this.Aqh(Em,0x11))?B:null);Adf=Adf-
1;}}},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},Bx:function(
E){if(this.AK===E)return;this.AK=E;this.Am();},_Init:function(aArg){C.GS._Init.call(
this,aArg);this.__proto__=C.Lc;},_Mark:function(D){var B;C.GS._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Do:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.Ave={Eh:null,Dr:null,CQ:null,Cp:null,FB:function(E){if(this.M2===E)return;C.
HB.FB.call(this,E);this.Cp.C1(E);this.CQ.C1(E);this.Dr.C1(E);this.Eh.C1(E);},X9:
function(Hq){var B4=null;switch(Hq){case-1:case 0:B4=this.FO;break;case 1:B4=this.
Cp;break;case 2:B4=this.CQ;break;case 3:B4=this.Dr;break;case 4:B4=this.Eh;break;
case 5:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;},_Init:function(aArg
){C.HB._Init.call(this,aArg);C.DF._Init.call(this.Eh={I:this},0);C.DF._Init.call(
this.Dr={I:this},0);C.DF._Init.call(this.CQ={I:this},0);C.DF._Init.call(this.Cp={
I:this},0);this.__proto__=C.Ave;this.H(AxC);this.GO.H(AG9);this.Eh.H(AG_);this.Dr.
H(AG$);this.CQ.H(AHa);this.Cp.H(AHb);this.FO.H(AHc);this.ED.H(A$p);this.J(this.Eh
,-2);this.J(this.Dr,-2);this.J(this.CQ,-2);this.J(this.Cp,-2);this.Eh.Dj=[this,this.
GI];this.Dr.Dj=[this,this.GI];this.CQ.Dj=[this,this.GI];this.Cp.Dj=[this,this.GI
];},_Done:function(){this.__proto__=C.HB;this.Eh._Done();this.Dr._Done();this.CQ.
_Done();this.Cp._Done();C.HB._Done.call(this);},_ReInit:function(){C.HB._ReInit.
call(this);this.Eh._ReInit();this.Dr._ReInit();this.CQ._ReInit();this.Cp._ReInit(
);},_Mark:function(D){var B;C.HB._Mark.call(this,D);if((B=this.Eh)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.ATT={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bnv(0);this.AttributeSet.Bnw(1);this.AttributeSet.Bnx(4);},Ai:function(Ae){var B;
C.BX.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20);var Ir=((
Ae&0x40)===0x40);var Gt=this.Bl.Bv;var FG=A.jb.CF;var GJ=A.jb.Text;if(this.Hb){FG=
A.jb.Bj;GJ=A.jb.Text;}if(!G6){this.Background.L(A.jb.C0);this.V.L(A.jb.CF);this.
AttributeSet.Ag3(A.jb.CF);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.
Bj);this.AttributeSet.Ag3(A.jb.Bj);}else if(Ir){this.Background.L(A.jb.AR);this.
V.L(A.jb.Bj);this.AttributeSet.Ag3(A.jb.Bj);}else if(Fh){this.Background.L(A.jb.
AmG);this.V.L(A.jb.Bj);this.AttributeSet.Ag3(A.jb.Bj);}else{this.Background.L(FG
);this.V.L(GJ);this.AttributeSet.Ag3(GJ);}this.LB=G6;this.Ky=Fh;this.Qg=Gt;this.
AoT=Ir;},Hc:function(G){var B;var FW=this.Ds.GT;var Cx=(A.acg.Aud.isPrototypeOf(
B=this.Ds.Ce)?B:null);Cx.A8R(this.AttributeSet);Cx.A4(0x12);if(!Cx)return;if(!!this.
AC)Cx.R(this.BxK(this.AC.F$(FW)));else Cx.R(WT);Cx.H(A.abK(Cx.M,[this.Ds.VQ,(B=this.
Ds.M)[3]-B[1]]));},BxK:function(Bv9){var AzZ=Bv9;AzZ=A._GetAutoObject(A.Device.Helper
).Nd(AzZ,BpU,BpV);AzZ=A._GetAutoObject(A.Device.Helper).Nd(AzZ,BpW,BpX);return BpY+
AzZ;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.ATT;this.Ds.H(BpZ);this.Ds.Jn(2);
this.Ds.NU(A.acg.Aud);this.AttributeSet.Ag3(this.V.AQ);this.AttributeSet.Bll(A.aaL(
A.fl.ANX));this.AttributeSet.A9b(A.aaL(A.fl.Ak));this.AttributeSet.Ag6(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BX;this.AttributeSet._Done(
);C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9b(A.aaL(A.fl.Ak));this.AttributeSet.Ag6(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.ArZ._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dk(C.ACv);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Do:function(){return 14;},C4:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},F$:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BQ(aIndex
);},DK:function(A3){return A3;},Hl:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.ON={Fv:null,EnumToCodeset:
null,Jl:null,A5:0,Number:0,Ai:function(Ae){C.BX.Ai.call(this,Ae);if(this.A5===1){
if(this.Hb){this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CF);this.V.L(A.jb.Text);}}},Bx:function(E){C.BX.Bx.call(this,E);var ByD=this.
EnumToCodeset.Amf(this.Number);var Bdi=this.AC.C4(this.AK);if(ByD!==Bdi){this.AES(
this.EnumToCodeset.AdY(Bdi));A.abo([this,this.ART,this.AES],0);}},DD:function(G){
var F;if(!this.N)return;switch(this.A5){case 1:{(F=this.N,F[1].call(F[0])).CS(A.
aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[
this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(
A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=
this.N,F[1].call(F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:
this.Fv.Aks((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:function(
G){this.Ep(0);},Ep:function(EF){var F;if(!this.A5)this.Fv.Aje((F=this.N,F[1].call(
F[0])));this.A5=EF;if((this.A5<0)||(this.A5>1))this.A5=0;this.DD(this);if(!this.
A5)this.A9(null);else this.A1f();this.Am();},AES:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aqp()>E)E=this.EnumToCodeset.
Aqp();if(this.EnumToCodeset.Hl()<E)E=this.EnumToCodeset.Hl();}this.Number=E;var BO=
this.AK;if(!!this.EnumToCodeset){var BxA=this.EnumToCodeset.Amf(E);this.Bx(this.
AC.DK(BxA));if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C4(this.AK)));A.abo(this.Q,0);}}},Am$:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},UR:function(G){this.Ep(this.A5+1);},A1f:function(){A.ab5(
"%s",Bp0);},ART:function(){return this.Number;},_Init:function(aArg){C.BX._Init.
call(this,aArg);A.Core.BJ._Init.call(this.Jl={I:this},0);this.__proto__=C.ON;this.
Jl.Filter=1;this.Fv=A._NewObject(C.Ad7,0);this.Jl.BK=[this,this.UR];},_Done:function(
){this.__proto__=C.BX;this.Jl._Done();C.BX._Done.call(this);},_ReInit:function(){
C.BX._ReInit.call(this);this.Jl._ReInit();},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.Aev={Text:null,Ai:function(
Ae){C.Ed.Ai.call(this,Ae);this.Text.L(this.AB8);},Bx:function(E){if(this.AK===E)
return;this.AK=E;this.Text.R(A._GetAutoObject(A.Device.Converter).SK(this.AK));this.
Am();},Aaj:function(G){A.pe([this,this.AfN],this);},Aai:function(G){A.pe([this,this.
AfN],this);},Aly:function(G){A.pe([this,this.AfN],this);},AfN:function(G){if((!this.
Ib||!this.FP)||!this.Fy)return;},_Init:function(aArg){C.Ed._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Aev;this.Text.AY(0x3F
);this.Text.H(Asp);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Ed;this.Text._Done();C.Ed.
_Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;C.Ed._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AQ6={Gx:0,C3:null,A1:null,EZ:null,
IY:null,CountryToString:null,K6:0,L4:false,Init:function(aArg){A.zX([this,this.MC
],[this,this.Sm,this.Lk],0);},Ai:function(Ae){C.Ed.Ai.call(this,Ae);this.IY.Y(this.
Ae1);this.A1.FB(this.LM);this.EZ.C1(this.LM);this.IY.C1(this.LM);},DD:function(G
){var F;if(!this.N)return;switch(this.A5){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(
F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).B0(this.CountryToString.BQ(this.K6));(F=this.N,
F[1].call(F[0])).Cc=null;}break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}},Ep:function(EF){var Ta=this.
A5;this.A5=EF;if(this.A5<0)this.A5=0;else if(this.A5>this.Rs)this.A5=this.Rs;if((
this.A5===1)&&!this.Ae1)this.A5=2;switch(this.A5){case 0:{this.A9(null);if(!this.
Gx)this.Lk(0);}break;case 1:this.A9(this.IY);break;case 2:this.A9(this.EZ);break;
case 3:{this.A9(this.A1);if(!this.Gx||(Ta>0))this.A1.Sv(2);else this.A1.Sv(7);}break;
default:throw new Error(AsH+this.A5.toFixed());}C.Ed.Ep.call(this,this.A5);},Ao0:
function(G){this.IY.T8(this.Er);},Aaj:function(G){var F;this.A1.A8U((F=this.Fy,F[
1].call(F[0])));},Aai:function(G){var F;this.A1.A8V((F=this.FP,F[1].call(F[0])));
},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L4=true;this.Sn(A._GetAutoObject(
A.Device.Helper).TB(E,0,12));this.Lk(A._GetAutoObject(A.Device.Converter).Acg(E)
);this.L4=false;if(!!E)this.A1.Kg(12);else this.A1.Kg(0);this.Am();},Aly:function(
G){A.pe([this,this.AfN],this);},FJ:function(G){var F;if(!this.AK){var BO=this.AK;
this.Bx(A._GetAutoObject(A.Device.Helper).ACk());if(this.AK!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}this.Ep(3);},Ajv:function(){return this.
Gx;},Ajx:function(){return 999999999999;},Lk:function(E){if(this.K6===E)return;this.
K6=E;if(this.L4===false)A.pe([this,this.U4],this);A.abo([this,this.Sm,this.Lk],0
);},Sn:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false)A.pe([this
,this.U4],this);A.abo([this,this.AbB,this.Sn],0);},U4:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Ap7(this.K6),3,10)+A.abm(this.Gx,12,10
);var BO=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},AfN:function(G){var F;if((!this.Ib||
!this.FP)||!this.Fy)return;if(!(F=this.Ib,F[1].call(F[0])))this.A1.AEc(true);else
this.A1.AEc(false);},Sm:function(){return this.K6;},AbB:function(){return this.Gx;
},_Init:function(aArg){C.Ed._Init.call(this,aArg);C.C3._Init.call(this.C3={I:this
},0);C.AC5._Init.call(this.A1={I:this},0);C.Ar9._Init.call(this.EZ={I:this},0);C.
IY._Init.call(this.IY={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AQ6;var B;this.Rs=3;this.A1.H(Bp1);this.EZ.H(A$q);this.
IY.H(A$r);this.J(this.A1,0);this.J(this.EZ,0);this.J(this.IY,0);this.C3.AEi([this
,this.Sm,this.Lk]);this.A1.At([this,this.AbB,this.Sn]);this.EZ.CG(this.C3);this.
EZ.At([B=this.C3,B.B9,B.B_]);this.IY.A86([B=A._GetAutoObject(A.Device.Device),B.
AvA,B.Ax1]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ed;this.C3._Done(
);this.A1._Done();this.EZ._Done();this.IY._Done();this.CountryToString._Done();C.
Ed._Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.C3._ReInit(
);this.A1._ReInit();this.EZ._ReInit();this.IY._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ed._Mark.call(this,D);if((B=this.C3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AQ5={Gx:0,C3:null,A1:null,Yi:null,Kb:null,EZ:null,IY:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pp:0,K6:0,L4:false,Init:function(aArg){A.
zX([this,this.MC],[this,this.PH,this.DT],0);A.zX([this,this.MC],[this,this.Sm,this.
Lk],0);A.zX([this,this.MC],[this,this.Am4,this.Ag7],0);},Ai:function(Ae){C.Ed.Ai.
call(this,Ae);this.IY.Y(this.Ae1);this.A1.FB(this.LM);this.Yi.FB(this.LM);this.Kb.
FB(this.LM);this.EZ.C1(this.LM);this.IY.C1(this.LM);},DD:function(G){var F;if(!this.
N)return;switch(this.A5){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(
A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this
,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV
);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.
N,F[1].call(F[0])).B0(this.CountryToString.BQ(this.K6));(F=this.N,F[1].call(F[0]
)).Cc=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.
N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).B0(((A.aaR(A.acf.AF7)+A.aaR(A.acf.Colon))+ZU)+A.aaR(A.
acf.Bgm));break;case 1:(F=this.N,F[1].call(F[0])).B0(((A.aaR(A.acf.AF7)+A.aaR(A.
acf.Colon))+ZU)+A.aaR(A.acf.BnC));break;case 2:(F=this.N,F[1].call(F[0])).B0(((A.
aaR(A.acf.AF7)+A.aaR(A.acf.Colon))+ZU)+A.aaR(A.acf.Bhb));break;default:(F=this.N
,F[1].call(F[0])).B0(((A.aaR(A.acf.AF7)+A.aaR(A.acf.Colon))+ZU)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cc=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0]
)).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0
])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null
);(F=this.N,F[1].call(F[0])).B0((A.aaR(A.acf.Go)+Axr)+this.GermanStateToString.Lp(
A._GetAutoObject(A.Device.Converter).AB$(this.Pp)));(F=this.N,F[1].call(F[0])).Cc=
null;}break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[
1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[
1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).B0(
A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}},Ep:function(EF){var Ta=this.A5;if(EF<
0)EF=0;else if(EF>this.Rs)EF=this.Rs;if((EF===1)&&!this.Ae1)EF=2;switch(EF){case
0:{this.A9(null);if((!this.Gx&&!this.AnimalType)&&!this.Pp)this.Lk(0);}break;case
1:this.A9(this.IY);break;case 2:this.A9(this.EZ);break;case 3:if(!Ta)A.pe([this,
this.BzR],this);else this.A9(this.Yi);break;case 4:this.A9(this.Kb);break;case 5:
if(((Ta===4)&&!this.Pp)&&!this.Gx)return;else{this.A9(this.A1);if(!this.Gx||(Ta>
0))this.A1.Sv(2);else this.A1.Sv(7);}break;default:throw new Error(AsH+EF.toFixed(
));}this.A5=EF;C.Ed.Ep.call(this,this.A5);},Bx:function(E){if(this.AK===E)return;
this.AK=E;this.L4=true;this.Sn(A._GetAutoObject(A.Device.Helper).TB(E,0,8));this.
Ag7(A._GetAutoObject(A.Device.Helper).TB(E,8,2)|0);this.DT(A._GetAutoObject(A.Device.
Helper).TB(E,10,2)|0);this.Lk(A._GetAutoObject(A.Device.Converter).Acg(E));this.
L4=false;if(!!this.AK){this.Yi.Kg(2);this.Kb.Kg(2);this.A1.Kg(8);}else{this.Yi.Kg(
0);this.Kb.Kg(0);this.A1.Kg(0);}this.Am();},Ao0:function(G){this.IY.T8(this.Er);
},Aaj:function(G){var F;this.A1.A8U((F=this.Fy,F[1].call(F[0])));},Aai:function(
G){var F;this.A1.A8V((F=this.FP,F[1].call(F[0])));},Aly:function(G){A.pe([this,this.
AfN],this);},FJ:function(G){var F;if(!this.AK){var BO=this.AK;this.Bx(A._GetAutoObject(
A.Device.Helper).ACk());if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AK));A.abo(this.Q,0);}this.Ep(3);}else this.Ep(this.Rs);},Ajv:function(){return this.
Gx;},Ajx:function(){return 99999999;},Lk:function(E){if(this.K6===E)return;this.
K6=E;if(this.L4===false)A.pe([this,this.U4],this);A.abo([this,this.Sm,this.Lk],0
);},Sn:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false)A.pe([this
,this.U4],this);A.abo([this,this.AbB,this.Sn],0);},U4:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Ap7(this.K6),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pp,2,10))+A.abm(this.Gx,8,10);var BO=this.AK;this.Bx(A.ab0(aString
,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.
Q,0);}},AfN:function(G){var F;if((!this.Ib||!this.FP)||!this.Fy)return;if(!(F=this.
Ib,F[1].call(F[0])))this.A1.AEc(true);else this.A1.AEc(false);},DT:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L4===false)A.pe([this,this.
U4],this);A.abo([this,this.PH,this.DT],0);},Ag7:function(E){if(this.Pp===E)return;
this.Pp=E;if(this.L4===false)A.pe([this,this.U4],this);A.abo([this,this.Am4,this.
Ag7],0);},BzR:function(G){var F;if(!!this.JC){var H8=(F=this.JC,F[1].call(F[0]));
var A0r=0;switch(H8){case 0:case 1:A0r=0;break;case 2:A0r=1;break;default:A.ab5(
"%s%e",AkP,H8);}this.DT(A0r);}if(!this.Pp)this.Ep(4);else this.Ep(5);},Sm:function(
){return this.K6;},AbB:function(){return this.Gx;},PH:function(){return this.AnimalType;
},Am4:function(){return this.Pp;},_Init:function(aArg){C.Ed._Init.call(this,aArg
);C.C3._Init.call(this.C3={I:this},0);C.AQm._Init.call(this.A1={I:this},0);C.Avd.
_Init.call(this.Yi={I:this},0);C.Avd._Init.call(this.Kb={I:this},0);C.Ar9._Init.
call(this.EZ={I:this},0);C.IY._Init.call(this.IY={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AQ5;var B;this.Rs=5;this.A1.H(
Bp2);this.Yi.H(Bp3);this.Yi.E1(2);this.Kb.H(Bp4);this.Kb.E1(16);this.EZ.H(A$q);this.
IY.H(A$r);this.J(this.A1,0);this.J(this.Yi,0);this.J(this.Kb,0);this.J(this.EZ,0
);this.J(this.IY,0);this.C3.AEi([this,this.Sm,this.Lk]);this.A1.At([this,this.AbB
,this.Sn]);this.Yi.At([this,this.PH,this.DT]);this.Kb.At([this,this.Am4,this.Ag7
]);this.EZ.CG(this.C3);this.EZ.At([B=this.C3,B.B9,B.B_]);this.IY.A86([B=A._GetAutoObject(
A.Device.Device),B.AvA,B.Ax1]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ed;this.C3._Done();this.A1._Done();this.Yi._Done();this.Kb._Done();this.EZ._Done(
);this.IY._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ed._Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.C3._ReInit(
);this.A1._ReInit();this.Yi._ReInit();this.Kb._ReInit();this.EZ._ReInit();this.IY.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ed._Mark.call(this,D);if((B=this.C3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ed={AK:0,AvK:null,OB:null,
Q:null,Er:null,FP:null,Fy:null,Ib:null,N:null,JC:null,Fb:null,E0:null,AB8:0,LM:0
,A5:0,Rs:0,Ae1:true,Init:function(aArg){A.pe([this,this.LJ],this);},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(!this.A5)this.A9(null);},Bln:function(E){if(this.
AB8===E)return;this.AB8=E;this.Am();},AbH:function(E){if(this.LM===E)return;this.
LM=E;this.Am();},DD:function(G){A.ab5("%s",AkQ);},MC:function(s){this.DD(s);},Ep:
function(EF){A.pe([this,this.MC],this);A.pe(this.AvK,this);if(!EF)A.pe(this.OB,this
);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);}
,De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",An$);},Oi:function(G){if(this.A5>1)this.Ep(this.A5-1);},MS:function(
G){if((this.A5>0)&&(this.A5<this.Rs))this.Ep(this.A5+1);},T8:function(E){if(A.aaZ(
this.Er,E))return;if(!!this.Er)A.z$([this,this.AZF],this.Er,0);this.Er=E;if(!!E)
A.zX([this,this.AZF],this.Er,0);A.pe([this,this.AZF],this);},Ao0:function(G){},AZF:
function(s){this.Ao0(s);},PJ:function(E){if(A.aaZ(this.FP,E))return;if(!!this.FP
)A.z$([this,this.AZJ],this.FP,0);this.FP=E;if(!!E)A.zX([this,this.AZJ],E,0);if(!
!E)A.pe([this,this.AZJ],this);},QS:function(E){if(A.aaZ(this.Fy,E))return;if(!!this.
Fy)A.z$([this,this.AZL],this.Fy,0);this.Fy=E;if(!!E)A.zX([this,this.AZL],E,0);if(
!!E)A.pe([this,this.AZL],this);},Aaj:function(G){},AZL:function(s){this.Aaj(s);}
,Aai:function(G){},AZJ:function(s){this.Aai(s);},T6:function(E){if(A.aaZ(this.Ib
,E))return;if(!!this.Ib)A.z$([this,this.AZI],this.Ib,0);this.Ib=E;if(!!E)A.zX([this
,this.AZI],E,0);if(!!E)A.pe([this,this.AZI],this);},Aly:function(G){},AZI:function(
s){this.Aly(s);},FJ:function(G){A.ab5("%s",A$s);},BEV:function(s){this.FJ(s);},G5:
function(G){this.Ep(0);},Ajv:function(){A.ab5("%s",An$);return 0;},Ajx:function(
){A.ab5("%s",An$);return 0;},LJ:function(G){},Am9:function(E){if(A.aaZ(this.JC,E
))return;if(!!this.JC)A.z$([this,this.Aoz],this.JC,0);this.JC=E;if(!!E)A.zX([this
,this.Aoz],this.JC,0);A.pe([this,this.Aoz],this);},Aoz:function(G){},AEx:function(
E){if(A.aa0(this.OB,E))return;this.OB=E;},AE3:function(E){if(this.Ae1===E)return;
this.Ae1=E;this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BJ._Init.call(this.Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0);this.
__proto__=C.Ed;this.H(Asp);this.AB8=A.jb.Text;this.LM=A.jb.C0;this.Fb.Filter=6;this.
E0.Filter=7;this.Fb.BK=[this,this.Oi];this.E0.BK=[this,this.MS];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.Fb._Done();this.E0._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Fb._ReInit(
);this.E0._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AvK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Er)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ib)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JC)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q0={AK:0,Di:null,Fv:
null,OB:null,Er:null,FP:null,Fy:null,Ib:null,Q:null,JC:null,ADC:-1,Ae1:true,ANq:
false,ATc:false,ArL:true,Init:function(aArg){A.pe([this,this.AAI],this);},Ai:function(
Ae){C.D_.Ai.call(this,Ae);if(!this.Di)return;if(this.Di.A5>0){if(this.Hb){this.Di.
AbH(A.jb.CF);this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.Di.AbH(A.
jb.C0);this.Background.L(A.jb.CF);this.V.L(A.jb.Text);}}else{if(this.Hb)this.Di.
AbH(A.jb.CF);else this.Di.AbH(A.jb.C0);this.Di.Bln(this.V.AQ);}},IP:function(G){
C.D_.IP.call(this,G);if(!this.Di)return;if(!this.Di.A5)this.FJ(this);else this.G5(
this);},Gg:function(E){C.D_.Gg.call(this,E);if(!!this.Di)this.Di.N=E;},T8:function(
E){if(A.aaZ(this.Er,E))return;if(!!this.Er)A.z$([this,this.Ao0],this.Er,0);this.
Er=E;if(!!E)A.zX([this,this.Ao0],this.Er,0);A.pe([this,this.Ao0],this);},Ao0:function(
G){if(!!this.Di)this.Di.T8(this.Er);},PJ:function(E){if(A.aaZ(this.FP,E))return;
this.FP=E;if(!!this.Di)this.Di.PJ(E);},QS:function(E){if(A.aaZ(this.Fy,E))return;
this.Fy=E;if(!!this.Di)this.Di.QS(E);},T6:function(E){if(A.aaZ(this.Ib,E))return;
this.Ib=E;if(!!this.Di)this.Di.T6(E);},BAm:function(G){var AzH=0;if(!!this.Di){AzH=
this.Di.A5;this.Di.N=null;this.HI(this.Di);}switch(this.ADC){case 0:this.Di=A._NewObject(
C.Aev,0);break;case 1:this.Di=A._NewObject(C.AQ6,0);break;case 2:this.Di=A._NewObject(
C.AQ5,0);break;case 3:this.Di=A._NewObject(C.ATe,0);break;case 4:this.Di=A._NewObject(
C.ATd,0);break;case 5:this.Di=A._NewObject(C.AQ7,0);break;default:throw new Error(
Bp5+this.ADC.toFixed());}this.J(this.Di,0);this.Di.Am9(this.JC);this.Di.H(Bp6);this.
Di.N=this.N;this.Di.T8(this.Er);this.Di.AvK=[this,this.AvK];this.Di.At([this,this.
T5,this.Bx]);this.Di.T6(this.Ib);this.Di.PJ(this.FP);this.Di.QS(this.Fy);this.Di.
AEx(this.OB);this.Di.AE3(this.Ae1);if(AzH>0)this.Di.Ep(AzH);this.A9(this.Di);this.
Am();},FJ:function(G){var B;var F;if(!!this.Di){if(!!this.N)this.Fv.Aje((F=this.
N,F[1].call(F[0])));else this.Fv=A._NewObject(C.Ad7,0);this.Di.FJ(this);}},G5:function(
G){var B;if(!!this.Di)this.Di.G5(this);},Ajv:function(){if(!this.Di)return 0;return this.
Di.Ajv();},Ajx:function(){if(!this.Di)return 0;return this.Di.Ajx();},De:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.T5,this.
Bx],0);}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],
this);},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);A.pe([this,this.AAI],this);},BlZ:function(
E){if(this.ADC===E)return;this.ADC=E;A.pe([this,this.BAm],this);},Arr:function(E
){if(this.ArL===E)return;this.ArL=E;A.pe([this,this.AAI],this);},AAI:function(G){
var Ao$;if(this.ArL){if(this.ANq)Ao$=5;else Ao$=0;}else if(this.ATc){if(A._GetAutoObject(
A.Device.Converter).Acg(this.AK)===10)Ao$=4;else Ao$=3;}else if(A._GetAutoObject(
A.Device.Converter).Acg(this.AK)===10)Ao$=2;else Ao$=1;this.BlZ(Ao$);},AvK:function(
G){var F;if((!!this.N&&!!this.Di)&&!this.Di.A5)this.Fv.Aks((F=this.N,F[1].call(F[
0])));this.Am();},Am9:function(E){if(A.aaZ(this.JC,E))return;if(!!this.JC)A.z$([
this,this.Aoz],this.JC,0);this.JC=E;if(!!E)A.zX([this,this.Aoz],this.JC,0);A.pe([
this,this.Aoz],this);},Aoz:function(G){if(!!this.Di)this.Di.Am9(this.JC);},A9w:function(
E){if(this.ATc===E)return;this.ATc=E;A.pe([this,this.AAI],this);},BkV:function(E
){if(this.ANq===E)return;this.ANq=E;A.pe([this,this.AAI],this);},AEx:function(E){
if(A.aa0(this.OB,E))return;this.OB=E;if(!!this.Di)this.Di.AEx(E);},AE3:function(
E){if(this.Ae1===E)return;this.Ae1=E;if(!!this.Di)this.Di.AE3(E);},T5:function(){
return this.AK;},_Init:function(aArg){C.D_._Init.call(this,aArg);this.__proto__=
C.Q0;this.H(UG);this.V.R(Asw);this.V.L(A.jb.Bj);this.Fv=A._NewObject(C.Ad7,0);this.
Init(aArg);},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Di)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Er)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ib
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQm={EQ:null,F_:null,Eh:null,Dr:null,CQ:null
,Cp:null,FB:function(E){if(this.M2===E)return;C.Lc.FB.call(this,E);this.Cp.C1(E);
this.CQ.C1(E);this.Dr.C1(E);this.Eh.C1(E);this.F_.C1(E);this.EQ.C1(E);},X9:function(
Hq){var B4=null;switch(Hq){case-1:case 0:B4=this.FO;break;case 1:B4=this.Cp;break;
case 2:B4=this.CQ;break;case 3:B4=this.Dr;break;case 4:B4=this.Eh;break;case 5:B4=
this.F_;break;case 6:B4=this.EQ;break;case 7:B4=this.GO;break;default:A.ab5("%s"
,AhG);}return B4;},_Init:function(aArg){C.Lc._Init.call(this,aArg);C.DF._Init.call(
this.EQ={I:this},0);C.DF._Init.call(this.F_={I:this},0);C.DF._Init.call(this.Eh={
I:this},0);C.DF._Init.call(this.Dr={I:this},0);C.DF._Init.call(this.CQ={I:this},
0);C.DF._Init.call(this.Cp={I:this},0);this.__proto__=C.AQm;this.H(Bp7);this.GO.
H(AH1);this.EQ.H(AxU);this.F_.H(AY5);this.Eh.H(AY6);this.Dr.H(AY7);this.CQ.H(AY8
);this.Cp.H(AY9);this.FO.H(AY_);this.ED.H(A$p);this.J(this.EQ,-2);this.J(this.F_
,-2);this.J(this.Eh,-2);this.J(this.Dr,-2);this.J(this.CQ,-2);this.J(this.Cp,-2);
this.EQ.Dj=[this,this.GI];this.F_.Dj=[this,this.GI];this.Eh.Dj=[this,this.GI];this.
Dr.Dj=[this,this.GI];this.CQ.Dj=[this,this.GI];this.Cp.Dj=[this,this.GI];},_Done:
function(){this.__proto__=C.Lc;this.EQ._Done();this.F_._Done();this.Eh._Done();this.
Dr._Done();this.CQ._Done();this.Cp._Done();C.Lc._Done.call(this);},_ReInit:function(
){C.Lc._ReInit.call(this);this.EQ._ReInit();this.F_._ReInit();this.Eh._ReInit();
this.Dr._ReInit();this.CQ._ReInit();this.Cp._ReInit();},_Mark:function(D){var B;
C.Lc._Mark.call(this,D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.Avd={Q:null,GO:null,FO:null,ED:null,Ij:null,Ii:null,M2:0,Ud:0,AK:0,FS:99,Init:
function(aArg){A.pe([this,this.LJ],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.ED.Y(false);this.ED.H(A.wC(this.X9(0).M,this.X9(-1).M));var Ir=((Ae&
0x40)===0x40);if(Ir){this.Be1(A.jb.AR);this.Be2(A.jb.Bj);}else{this.Be1(this.M2);
this.Be2(A.jb.Text);}this.AlW();},FB:function(E){if(this.M2===E)return;this.M2=E;
this.Am();},LJ:function(G){},X9:function(Hq){var B4=null;switch(Hq){case-1:case 0:
B4=this.FO;break;case 1:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;},Kg:
function(E){if(this.Ud===E)return;this.Ud=E;this.AlW();},AlW:function(){var B;var
F;if(!!this.Q){var Em=this.FO;var Adf=this.Ud;var A3=(F=this.Q,F[1].call(F[0]));
while(!!Em){if(A3>0){Em.M_(A3%10);A3=(A3/10)|0;}else if(Adf>0)Em.M_(0);else Em.M_(-
1);Em=(C.E$.isPrototypeOf(B=this.Aqh(Em,0x11))?B:null);Adf=Adf-1;}}},AfQ:function(
G){var F;var BO=this.AK;this.Bx(this.AK+1);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},AfP:function(G){var F;var BO=this.
AK;this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AK));A.abo(this.Q,0);}},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De
],this);},Bx:function(E){if(E<0)E=0;if(E>this.FS)E=this.FS;if(this.AK===E)return;
this.AK=E;this.Am();},E1:function(E){if(this.FS===E)return;this.FS=E;this.Am();}
,Be1:function(aColor){this.FO.C1(aColor);this.GO.C1(aColor);},Be2:function(aColor
){this.FO.Akb(aColor);this.GO.Akb(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.E$._Init.call(this.GO={I:this},0);C.E$._Init.call(this.FO={I:this
},0);A.acg.Cz._Init.call(this.ED={I:this},0);A.Core.BJ._Init.call(this.Ij={I:this
},0);A.Core.BJ._Init.call(this.Ii={I:this},0);this.__proto__=C.Avd;this.H(Bp8);this.
M2=A.jb.CF;this.GO.H(AH1);this.FO.H(AxU);this.ED.H(AxU);this.ED.NX(2);this.ED.L(
A.jb.ET);this.Ij.Filter=4;this.Ii.Filter=5;this.J(this.GO,0);this.J(this.FO,0);this.
J(this.ED,0);this.Ij.BK=[this,this.AfQ];this.Ij.DS=[this,this.AfQ];this.Ii.BK=[this
,this.AfP];this.Ii.DS=[this,this.AfP];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.GO._Done();this.FO._Done();this.ED._Done();this.Ij._Done();this.Ii.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.GO._ReInit();this.FO._ReInit();this.ED._ReInit();this.Ij._ReInit();this.Ii.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ED)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.E$={Agj:
null,Background:null,Text:null,E$:-1,MX:0,Amq:0,Ap0:false,Ai:function(Ae){A.Core.
O.Ai.call(this,Ae);if(this.E$<0)this.Text.R(Ra);else this.Text.R(this.E$.toFixed(
));this.Background.L(this.MX);this.Text.L(this.Amq);},M_:function(E){if(this.E$===
E)return;var B4=E;if((B4<0)||(B4>9))B4=-1;this.E$=B4;this.Am();},C1:function(E){
if(this.MX===E)return;this.MX=E;this.Am();},Aj9:function(E){if(this.Ap0===E)return;
this.Ap0=E;this.Agj.Ar(E);if(E===false)this.Text.Y(true);},Akb:function(E){if(this.
Amq===E)return;this.Amq=E;this.Am();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acl.Tu._Init.call(this.Agj={I:this},0);A.acg.AJ._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.E$;var B;
this.H(AsG);this.MX=A.jb.CF;this.Agj.Fe(750);this.Agj.T9(750);this.Agj.Akd(750);
this.Amq=A.jb.Text;this.Background.AY(0x3);this.Background.H(AsG);this.Text.AY(0x3
);this.Text.H(AsG);this.Text.R(Ra);this.J(this.Background,0);this.J(this.Text,0);
this.Agj.Q=[B=this.Text,B.Fd,B.Y];this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=A.Core.O;this.Agj._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Agj._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Agj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fm={Z:null,IU:null,ANy:A.jV,ARj:A.jV,S2:0,AI7:0,A07:false,A0D:false,Init:function(
aArg){},Cw:function(G){var B;C.AB.Cw.call(this,G);A.zX([this,this.AAD],[B=A._GetAutoObject(
A.Device.Device).Ap,B.Fz,B.FD],0);A.zX([this,this.MC],[B=A._GetAutoObject(A.Device.
Device).Ap,B.Fz,B.FD],0);A.pe([this,this.AAD],this);A.pe([this,this.MC],this);},
EV:function(G){var B;C.AB.EV.call(this,G);A.z$([this,this.AAD],[B=A._GetAutoObject(
A.Device.Device).Ap,B.Fz,B.FD],0);},Bwv:function(L1){A._GetAutoObject(A.Device.Helper
).HF(L1);this.ApG(A._GetAutoObject(A.Device.Device).Br,A._GetAutoObject(A.Device.
Helper).W.Id);},ApG:function(LW,AcC){A.ab5("%s",AkQ);},UZ:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Bxs],this);else if(!!As&&(As.PopupState===5)){this.A0D=true;this.Eo(this
);}},Bxs:function(G){if(this.S2>0){this.A0D=false;this.Ac5(this);this.A9V(0);}},
Aia:function(G){if((this.AI7+1)<this.S2)this.A9V(this.AI7+1);else A.aaS([this,this.
Bu7],this);},Bu8:function(s){this.Aia(s);},A9V:function(E){this.AI7=E;if(this.A0D===
false){this.Bwv(E);A.aaS([this,this.Bu8],this);var Xo=(this.AI7/this.S2)*100;A._GetAutoObject(
A.Device.Device).A6(49,true,A.abk(Xo,0,0),0,[this,this.UZ]);}},Z5:function(G){A.
_GetAutoObject(A.Device.Device).A6(49,false,Bp9,0,[this,this.UZ]);this.A07=true;
A.pe([this,this.AKH],this);},Bu7:function(s){this.Z5(s);},Ac5:function(G){this.IU.
Y(true);this.A07=false;this.AKH(this);},BEQ:function(s){this.Ac5(s);},AzW:function(
G){var Ba=A._GetAutoObject(A.Device.Helper).A5Y();A._GetAutoObject(A.Device.Device
).Ap.Bi(Ba);},Eo:function(G){A._GetAutoObject(C.AX).Fl();},A2E:function(G){A._GetAutoObject(
C.AX).BS(95);},DD:function(G){this.N.Y(true);this.N.CS(A.aaL(A.ach.EU));this.N.Cv=[
this,this.Eo];this.N.Cn(A.aaL(A.ach.ACV));if(!A._GetAutoObject(A.Device.Device).
Ap.Filter||A._GetAutoObject(A.Device.Helper).AqI(A._GetAutoObject(A.Device.Device
).Ap.Filter)){this.N.Ch=null;this.N.IX.Dl(100);}else{this.N.Ch=[this,this.AzW];this.
N.IX.Dl(255);}this.N.C2(A.aaL(A.ach.Aed));this.N.Cc=[this,this.A2E];},MC:function(
s){this.DD(s);},AAD:function(G){this.S2=A._GetAutoObject(A.Device.Device).Ap.Cb(
);if(this.S2>0)A._GetAutoObject(A.Device.Device).A6(49,true,ZT,0,[this,this.UZ]);
else{this.Ac5(this);this.Z5(this);}},Aka:function(E){if(this.ANy===E)return;this.
ANy=E;A.pe([this,this.AKH],this);},AKH:function(G){var B;if(this.A07===false){this.
IU.R(A.jV);return;}var AoN;if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){var AcZ=
A._GetAutoObject(A.Device.Device).Ap.Filter;A.z$([this,this.AAD],[B=A._GetAutoObject(
A.Device.Device).Ap,B.Fz,B.FD],0);this.AzW(this);if(!A._GetAutoObject(A.Device.Device
).Ap.Qw()||!AcZ)AoN=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACf(A._GetAutoObject(A.Device.Device).Ap.Filter)===1)AoN=A.aaR(
A.acf.ANs);else AoN=A.aaR(A.acf.ANr);A._GetAutoObject(A.Device.Device).Ap.Bi(AcZ
);A.zX([this,this.AAD],[B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,B.FD],0);}else
AoN=this.ARj;AoN=AoN+(AZa+this.ANy);this.IU.R(AoN);},AeJ:function(E){if(this.ARj===
E)return;this.ARj=E;A.pe([this,this.AKH],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Akt._Init.call(this.IU={
I:this},0);this.__proto__=C.Fm;this.Dk(C.Aa6);this.Z.H(E4);this.Z.Kf(1);this.IU.
H(E4);this.J(this.Z,0);this.J(this.IU,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Z._Done();this.IU._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Z._ReInit();this.IU._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A6v={Ag:null,A7:0,_Init:function(aArg){this.__proto__=C.A6v;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.Avf={KU:null,MP:null,AV:0,XZ:function(){this.KU=null;this.MP=null;this.AV=0;
},Oq:function(A3){var G9;G9=A._NewObject(C.A6v,0);G9.A7=A3;if(!this.KU){this.KU=
G9;this.MP=G9;this.AV=1;}else{this.MP.Ag=G9;this.MP=G9;this.AV=this.AV+1;}},Amy:
function(){var B;var Rv=0;var Oc=this.KU;while(!!Oc){Rv+=Oc.A7;Oc=Oc.Ag;}return Rv;
},Ajw:function(){if(!this.AV)return 0;return this.Amy()/this.AV;},Aqq:function(){
var B;if(!this.AV)return 0;var A0x=this.Ajw();var AcW=0;var Oc=this.KU;while(!!Oc
){AcW+=Math.pow(Oc.A7-A0x,2);Oc=Oc.Ag;}AcW/=this.AV;AcW=Math.sqrt(AcW);return AcW;
},_Init:function(aArg){this.__proto__=C.Avf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.ANz={FT:null,Ad$:null,X6:null,DR:null,IU:null,
CT:function(){this.A3D(this);},Init:function(aArg){A.zV([this,this.A3D],A._GetAutoObject(
A.Device.Device).Ph,0);A.pe([this,this.A3D],this);},Eo:function(G){A._GetAutoObject(
C.AX).Fl();},A3D:function(G){this.X6.Cd(-1);this.IU.Y(!this.FT.AZ.Cb());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.FT._Init.call(this.FT={I:this},0);C.
Ad$._Init.call(this.Ad$={I:this},0);C.X6._Init.call(this.X6={I:this},0);A.acg.DR.
_Init.call(this.DR={I:this},0);C.Akt._Init.call(this.IU={I:this},0);this.__proto__=
C.ANz;this.N.Y(true);this.Dk(C.AOx);this.FT.H(Asy);this.FT.NU(C.Amp);this.Ad$.H(
JQ);this.X6.H(Asq);this.DR.DM(Bp_);this.DR.DY(Bp$);this.DR.NX(3);this.DR.L(A.jb.
Text);this.IU.H(AnX);this.IU.R((A.aaR(A.acf.A7f)+AZa)+A.aaR(A.acf.A5A));this.J(this.
FT,0);this.J(this.Ad$,0);this.J(this.X6,0);this.J(this.DR,0);this.J(this.IU,0);this.
N.Cv=[this,this.Eo];this.N.CS(A.aaL(A.ach.EU));this.FT.Y6(A._GetAutoObject(A.Device.
Device).Ph);this.X6.Y6(A._GetAutoObject(A.Device.Device).Ph);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.FT._Done();this.Ad$._Done();this.X6._Done();
this.DR._Done();this.IU._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.FT._ReInit();this.Ad$._ReInit();this.X6._ReInit();this.DR.
_ReInit();this.IU._ReInit();this.IU.R((A.aaR(A.acf.A7f)+AZa)+A.aaR(A.acf.A5A));this.
CT();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FT)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ad$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.ANC={Aty:null,Atx:null,AtA:null,Atz:null,AtC:null,AtB:null,AtE:null,AtD:null
,Aal:null,Yc:null,AaX:null,AaW:null,RatedAttribute:0,Init:function(aArg){this.Sp(
2);},Dw:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);switch(DW.CK){case
6:switch(this.RatedAttribute){case 2:this.Sp(3);break;case 1:this.Sp(2);break;case
4:this.Sp(1);break;case 3:this.Sp(4);break;default:this.Sp(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sp(1);break;case 1:this.Sp(4);break;case 4:this.
Sp(3);break;case 3:this.Sp(2);break;default:this.Sp(0);}break;default:DW.NB=true;
}},ApG:function(LW,AcC){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var
HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,AcC,true);Fj.
CX(HQ);var AAd=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAd.Initialize(
3,5,0,true);Fj.CX(AAd);LW.Bi(Fj);},Aia:function(G){var ApE=0;var A2X=A._GetAutoObject(
A.Device.Device).Br.Cb();var BZ=A._NewObject(A.Device.Rating,0);while(ApE<A2X){BZ.
EC(ApE,A._GetAutoObject(A.Device.Device).Br);this.Bcs(BZ,0);var BAF=A._GetAutoObject(
A.Device.Helper).Zq(2);this.Bcs(BZ,BAF);ApE++;}C.Fm.Aia.call(this,G);},Z5:function(
G){A.pe([this,this.Bb7],this);C.Fm.Z5.call(this,G);},Ac5:function(G){this.Aty=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Atx=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Atz=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtA=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.AtB=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.AtC=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtD=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.AtE=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fm.Ac5.
call(this,G);},DD:function(G){C.Fm.DD.call(this,G);this.N.OJ(true);this.N.OK(true
);},Bcs:function(DU,Ba6){if(!DU||(DU.Timestamp<Ba6))return;if(!Ba6){this.Aty.Set(
DU.Appearance,this.Aty.Get(DU.Appearance)+1);this.AtA.Set(DU.Faeces,this.AtA.Get(
DU.Faeces)+1);this.AtC.Set(DU.Feed,this.AtC.Get(DU.Feed)+1);this.AtE.Set(DU.Respiratory
,this.AtE.Get(DU.Respiratory)+1);}else{this.Atx.Set(DU.Appearance,this.Atx.Get(DU.
Appearance)+1);this.Atz.Set(DU.Faeces,this.Atz.Get(DU.Faeces)+1);this.AtB.Set(DU.
Feed,this.AtB.Get(DU.Feed)+1);this.AtD.Set(DU.Respiratory,this.AtD.Get(DU.Respiratory
)+1);}},Sp:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yc.Kk(this.Aal.Lp(E));A.pe([this,this.Bb7],this);},Bb7:function(G){var Aam=null;
var Aan=null;switch(this.RatedAttribute){case 2:{Aam=this.Atx;Aan=this.Aty;}break;
case 4:{Aam=this.Atz;Aan=this.AtA;}break;case 1:{Aam=this.AtB;Aan=this.AtC;}break;
case 0:{Aam=A._NewObject(A.Device.Int32ArrayWrapper,0);Aan=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{Aam=this.AtD;Aan=this.AtE;}break;default:throw new
Error(Bqa+this.RatedAttribute.toFixed());}var AFG=A._NewObject(A.acu.ATx,0);AFG.
Oq(Aam.Get(3),A.jb.ET);AFG.Oq(Aam.Get(2),A.jb.H1);AFG.Oq(Aam.Get(1),A.jb.FZ);var
AFH=A._NewObject(A.acu.ATx,0);AFH.Oq(Aan.Get(3),A.jb.ET);AFH.Oq(Aan.Get(2),A.jb.
H1);AFH.Oq(Aan.Get(1),A.jb.FZ);this.AaW.AbO(AFG);this.AaX.AbO(AFH);var A3o=Aam.Amy(
)-Aam.Get(5);var Bez=0;var Bex=0;if(A3o>0){Bez=(Aam.Get(2)/A3o)*100;Bex=(Aam.Get(
1)/A3o)*100;}var AKv=Aan.Amy()-Aan.Get(5);this.IU.Y(!AKv);var BeA=0;var Bey=0;if(
AKv>0){BeA=(Aan.Get(2)/AKv)*100;Bey=(Aan.Get(1)/AKv)*100;}this.AaW.A9T(A.abk(Bez
,0,0)+Afk);this.AaW.A9y(A.abk(Bex,0,0)+Afk);this.AaX.A9T(A.abk(BeA,0,0)+Afk);this.
AaX.A9y(A.abk(Bey,0,0)+Afk);},_Init:function(aArg){C.Fm._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.Aal={I:this},0);C.Ny._Init.call(this.
Yc={I:this},0);C.ABY._Init.call(this.AaX={I:this},0);C.ABY._Init.call(this.AaW={
I:this},0);this.__proto__=C.ANC;this.Dk(C.AOy);this.Aka(A.aaR(A.acf.A5B));this.AeJ(
A.aaR(A.acf.Am0));this.Yc.H(JQ);this.Yc.Aj(true);this.Yc.U(A.aaR(A.acf.AwJ)+A.aaR(
A.acf.Colon));this.Yc.Bg(false);this.Yc.BlX(false);this.AaX.H(Bqb);this.AaX.U(A.
aaR(A.acf.AFr));this.AaW.H(Bqc);this.AaW.U(A.aaR(A.acf.A6E));this.IU.H(AnX);this.
J(this.Yc,-1);this.J(this.AaX,-1);this.J(this.AaW,-1);this.Aty=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Atx=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtA=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atz=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.AtC=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtB=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.AtE=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.AtD=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fm;this.Aal._Done();this.Yc._Done();this.AaX._Done();this.AaW.
_Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Aal._ReInit();this.Yc._ReInit();this.AaX._ReInit();this.AaW._ReInit();this.Aka(A.
aaR(A.acf.A5B));this.AeJ(A.aaR(A.acf.Am0));this.Yc.U(A.aaR(A.acf.AwJ)+A.aaR(A.acf.
Colon));this.AaX.U(A.aaR(A.acf.AFr));this.AaW.U(A.aaR(A.acf.A6E));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.Aty)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Atx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtA)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Atz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AtC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtB)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AtE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AtD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AND={Ad_:null,Ux:null,Uy:null,Ad9:null,Uu:null,Uv:null,AI9:0,AI8:0,AIN:0,AIM:
0,AcY:false,CT:function(){this.Z5(this);},ApG:function(LW,AcC){if(!LW)return;var
Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,AcC,true);Fj.CX(HQ);var AAw=A._NewObject(A.Device.Int32FilterCriterion
,0);AAw.Initialize(7,2,0,true);Fj.CX(AAw);LW.Bi(Fj);},Aia:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AI9++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AI8++;var ApE=0;var A2X=A._GetAutoObject(
A.Device.Device).Br.Cb();var Atw;var AAO=0;while(ApE<A2X){this.AcY=true;Atw=A._GetAutoObject(
A.Device.Device).Br.IV(ApE,9);if(Atw===1)AAO=1;else if((Atw===2)&&(AAO!==1))AAO=
2;ApE++;}if(AAO===1)this.AIM++;else if(AAO===2)this.AIN++;C.Fm.Aia.call(this,G);
},Z5:function(G){var Bev=0;var Bew=0;if(this.S2>0){Bev=(this.AI9/this.S2)*100;Bew=(
this.AI8/this.S2)*100;}this.Ux.Kk(((((((A.abk(Bev,0,0)+AH2)+this.AI9.toFixed())+
CL)+A.aaR(A.acf.ADI))+CL)+this.S2.toFixed())+O0);this.Uy.Kk(((((((A.abk(Bew,0,0)+
AH2)+this.AI8.toFixed())+CL)+A.aaR(A.acf.ADI))+CL)+this.S2.toFixed())+O0);var Bet=
0;var Beu=0;if(this.S2>0){Bet=(this.AIN/this.S2)*100;Beu=(this.AIM/this.S2)*100;
}this.Uu.Kk(((((((A.abk(Bet,0,0)+AH2)+this.AIN.toFixed())+CL)+A.aaR(A.acf.ADI))+
CL)+this.S2.toFixed())+O0);this.Uv.Kk(((((((A.abk(Beu,0,0)+AH2)+this.AIM.toFixed(
))+CL)+A.aaR(A.acf.ADI))+CL)+this.S2.toFixed())+O0);this.IU.Y(!this.AcY);C.Fm.Z5.
call(this,G);},Ac5:function(G){this.AIM=0;this.AIN=0;this.AI8=0;this.AI9=0;this.
AcY=false;C.Fm.Ac5.call(this,G);},_Init:function(aArg){C.Fm._Init.call(this,aArg
);C.Af$._Init.call(this.Ad_={I:this},0);C.Ai8._Init.call(this.Ux={I:this},0);C.Ai8.
_Init.call(this.Uy={I:this},0);C.Af$._Init.call(this.Ad9={I:this},0);C.Ai8._Init.
call(this.Uu={I:this},0);C.Ai8._Init.call(this.Uv={I:this},0);this.__proto__=C.AND;
this.Dk(C.AOz);this.Aka(A.aaR(A.acf.A5C));this.AeJ(A.aaR(A.acf.AqX));this.Ad_.H(
JQ);this.Ad_.Aj(true);this.Ad_.U(A.aaR(A.acf.A5G));this.Ad_.Bg(false);this.Ux.H(
P1);this.Ux.Aj(true);this.Ux.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Ux.
Bg(true);this.Ux.Akg(2);this.Uy.H(ZR);this.Uy.Aj(true);this.Uy.U(A.aaR(A.acf.AuX
)+A.aaR(A.acf.Colon));this.Uy.Bg(true);this.Uy.Akg(1);this.Ad9.H(AkR);this.Ad9.Aj(
true);this.Ad9.U(A.aaR(A.acf.A5H));this.Ad9.Bg(false);this.Uu.H(An1);this.Uu.Aj(
true);this.Uu.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uu.Bg(true);this.
Uu.Akg(2);this.Uv.H(Asq);this.Uv.Aj(true);this.Uv.U(A.aaR(A.acf.AuX)+A.aaR(A.acf.
Colon));this.Uv.Bg(true);this.Uv.Akg(1);this.J(this.Ad_,0);this.J(this.Ux,0);this.
J(this.Uy,0);this.J(this.Ad9,0);this.J(this.Uu,0);this.J(this.Uv,0);this.Ux.S(A.
aaL(A.fl.Ak));this.Uy.S(A.aaL(A.fl.Ak));this.Uu.S(A.aaL(A.fl.Ak));this.Uv.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fm;this.Ad_._Done();this.Ux._Done(
);this.Uy._Done();this.Ad9._Done();this.Uu._Done();this.Uv._Done();C.Fm._Done.call(
this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Ad_._ReInit();this.Ux._ReInit(
);this.Uy._ReInit();this.Ad9._ReInit();this.Uu._ReInit();this.Uv._ReInit();this.
Aka(A.aaR(A.acf.A5C));this.AeJ(A.aaR(A.acf.AqX));this.Ad_.U(A.aaR(A.acf.A5G));this.
Ux.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uy.U(A.aaR(A.acf.AuX)+A.aaR(
A.acf.Colon));this.Ad9.U(A.aaR(A.acf.A5H));this.Uu.U(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.Uv.U(A.aaR(A.acf.AuX)+A.aaR(A.acf.Colon));this.Ux.S(A.aaL(A.fl.
Ak));this.Uy.S(A.aaL(A.fl.Ak));this.Uu.S(A.aaL(A.fl.Ak));this.Uv.S(A.aaL(A.fl.Ak
));this.CT();},_Mark:function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Ad_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ux)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Uy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Uu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uv)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.Aqg={K3:null
,AiX:null,AiY:null,AlX:null,Aa_:null,WD:null,Aa7:null,SM:null,Aa8:null,SN:null,Aa$:
null,WE:null,Aw:null,AcT:0,AzI:0,Ao6:0,A1I:0,BcY:0,CT:function(){this.Z5(this);}
,Dw:function(G){switch(this.Cl.CK){case 4:{if(this.IU.Fd())return;var Ql=this.Z.
Bq[1]+80;this.Z.Gh([this.Z.Bq[0],Ql]);this.Z.Vb(null,null);}break;case 5:{if(this.
IU.Fd())return;var Ql=this.Z.Bq[1]-80;this.Z.Gh([this.Z.Bq[0],Ql]);this.Z.Vb(null
,null);}break;default:C.Fm.Dw.call(this,G);}},ApG:function(LW,AcC){if(!LW)return;
var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,AcC,true);Fj.CX(HQ);var AcP=A._NewObject(A.Device.Int32FilterCriterion
,0);AcP.Initialize(8,2,0,true);Fj.CX(AcP);LW.Bi(Fj);},Aia:function(G){if(this.BcO(
)){this.K3.Oq(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.AqJ()){var P9=A._GetAutoObject(A.Device.Helper).MK(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(P9>0){var A1h=A._GetAutoObject(A.acj.DN).Ak9(P9,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.AiX.
Oq(A1h);}}var A10=A._GetAutoObject(A.Device.Device).Br.Cb()-2;if(A10>=0){var Byz=
A._GetAutoObject(A.Device.Device).Br.ACg(A10,8);var Byy=A._GetAutoObject(A.Device.
Device).Br.Hz(A10,6);var P9=A._GetAutoObject(A.Device.Helper).MK(Byy,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(P9>0){var A1h=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-Byz)/P9)|0;this.AiY.Oq(A1h);}}if((A._GetAutoObject(
A.Device.Helper).W.AqJ()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.Rz()<=180)){var AKR=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tb=A._GetAutoObject(A.Device.
Helper).MK(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BzN=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(AKR/Tb);this.AlX.Oq(BzN);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.AcT++;this.Ao6=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).Zq(7)){this.AzI++;this.A1I=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BcY=A._GetAutoObject(A.Device.Helper).MK(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dt());}}C.Fm.Aia.call(
this,G);},Z5:function(G){var A3M=this.AiX.Ajw()|0;var A3O=this.AiY.Ajw()|0;if(this.
AcT>1)A._GetAutoObject(A.Device.Device).A6(56,true,this.AcT.toFixed(),0,null);if(
this.AcT===1)A._GetAutoObject(A.Device.Device).A6(53,true,this.Ao6.toFixed(),0,null
);if(this.AzI>1)A._GetAutoObject(A.Device.Device).A6(52,true,this.AzI.toFixed(),
0,null);if(this.AzI===1)A._GetAutoObject(A.Device.Device).A6(57,true,(this.A1I.toFixed(
)+Asv)+this.BcY.toFixed(),0,null);if(this.K3.AV>0)this.WD.U(((((((A._GetAutoObject(
A.Device.Converter).Axh(this.K3.Ajw()|0,1)+AxV)+A._GetAutoObject(A.Device.Converter
).Axh(this.K3.Aqq()|0,1))+CL)+A._GetAutoObject(A.acj.DN).AfH())+AxW)+this.K3.AV.
toFixed())+O0);else this.WD.U(A.aaR(A.acf.Unknown));if(this.AiX.AV>0)this.SM.U(((((((
A._GetAutoObject(A.Device.Converter).SR(A3M,2,true)+AxV)+A._GetAutoObject(A.Device.
Converter).SR(this.AiX.Aqq()|0,2,true))+CL)+A._GetAutoObject(A.acj.DN).Z_())+AxW
)+this.AiX.AV.toFixed())+O0);else this.SM.U(A.aaR(A.acf.Unknown));if(this.AiY.AV>
0)this.SN.U(((((((A._GetAutoObject(A.Device.Converter).SR(A3O,2,true)+AxV)+A._GetAutoObject(
A.Device.Converter).SR(this.AiY.Aqq()|0,2,true))+CL)+A._GetAutoObject(A.acj.DN).
Z_())+AxW)+this.AiY.AV.toFixed())+O0);else this.SN.U(A.aaR(A.acf.Unknown));if(this.
AlX.AV>0)this.WE.U(((((((A.abk(this.AlX.Ajw(),0,1)+AxV)+A.abk(this.AlX.Aqq(),0,1
))+CL)+A.aaR(A.acf.BgL))+AxW)+this.AlX.AV.toFixed())+O0);else this.WE.U(A.aaR(A.
acf.Unknown));var A3N=0;var A3P=0;var AcY=false;if(this.K3.AV>0)AcY=true;var H8=
0;if(!!A._GetAutoObject(A.Device.Device).Ap.Filter){var AJq=A._GetAutoObject(A.Device.
Device).Ap.Filter.DX(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJq)?AJq:null))H8=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJq)?AJq:null
).A7;}if(this.AiX.AV>0){AcY=true;A3N=A._GetAutoObject(A.Device.Converter).A_9(A3M
,H8);}if(this.AiY.AV>0){AcY=true;A3P=A._GetAutoObject(A.Device.Converter).A_9(A3O
,H8);}this.SM.Akg(A3N);this.SN.Akg(A3P);this.IU.Y(!AcY);C.Fm.Z5.call(this,G);},Ac5:
function(G){this.K3.XZ();this.AiX.XZ();this.AiY.XZ();this.AlX.XZ();this.AcT=0;this.
AzI=0;this.Ao6=0;this.A1I=0;C.Fm.Ac5.call(this,G);},E9:function(G){var B;this.Aw.
Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.
Z.Bq[1]);},BcO:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fm._Init.call(
this,aArg);C.Af$._Init.call(this.Aa_={I:this},0);C.Iv._Init.call(this.WD={I:this
},0);C.Af$._Init.call(this.Aa7={I:this},0);C.Ai8._Init.call(this.SM={I:this},0);
C.Af$._Init.call(this.Aa8={I:this},0);C.Ai8._Init.call(this.SN={I:this},0);C.Af$.
_Init.call(this.Aa$={I:this},0);C.Iv._Init.call(this.WE={I:this},0);C.Aw._Init.call(
this.Aw={I:this},0);this.__proto__=C.Aqg;this.Dk(C.AuV);this.Aka(A.aaR(A.acf.A5D
));this.AeJ(A.aaR(A.acf.Aj1));this.Aa_.H(AsD);this.Aa_.Aj(true);this.Aa_.U(A.aaR(
A.acf.A4k));this.Aa_.Bg(false);this.Aa_.Kg(5);this.WD.H(AZb);this.WD.Aj(true);this.
WD.U(A.jV);this.WD.Bg(true);this.Aa7.H(Asz);this.Aa7.Aj(true);this.Aa7.U(A.aaR(A.
acf.ALe));this.Aa7.Bg(false);this.Aa7.Kg(5);this.SM.H(AsA);this.SM.Aj(true);this.
SM.U(A.jV);this.SM.Bg(true);this.SM.Kk(A.jV);this.Aa8.H(AsB);this.Aa8.Aj(true);this.
Aa8.U(A.aaR(A.acf.AtX));this.Aa8.Bg(false);this.Aa8.Kg(5);this.SN.H(Bqd);this.SN.
Aj(true);this.SN.U(A.jV);this.SN.Bg(true);this.SN.Kk(A.jV);this.Aa$.H(AZc);this.
Aa$.Aj(true);this.Aa$.U(A.aaR(A.acf.A4D));this.Aa$.Bg(false);this.Aa$.Kg(5);this.
WE.H(An_);this.WE.Aj(true);this.WE.U(A.jV);this.WE.Bg(true);this.Aw.H(IK);this.J(
this.Aa_,-1);this.J(this.WD,-1);this.J(this.Aa7,-1);this.J(this.SM,-1);this.J(this.
Aa8,-1);this.J(this.SN,-1);this.J(this.Aa$,-1);this.J(this.WE,-1);this.J(this.Aw
,-1);this.Z.Ej=[this,this.G8];this.K3=A._NewObject(C.Avf,0);this.AiX=A._NewObject(
C.Avf,0);this.AiY=A._NewObject(C.Avf,0);this.WD.S(A.aaL(A.fl.Ah));this.SM.S(A.aaL(
A.fl.Ak));this.SN.S(A.aaL(A.fl.Ak));this.WE.S(A.aaL(A.fl.Ak));this.AlX=A._NewObject(
C.A5N,0);},_Done:function(){this.__proto__=C.Fm;this.Aa_._Done();this.WD._Done();
this.Aa7._Done();this.SM._Done();this.Aa8._Done();this.SN._Done();this.Aa$._Done(
);this.WE._Done();this.Aw._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm.
_ReInit.call(this);this.Aa_._ReInit();this.WD._ReInit();this.Aa7._ReInit();this.
SM._ReInit();this.Aa8._ReInit();this.SN._ReInit();this.Aa$._ReInit();this.WE._ReInit(
);this.Aw._ReInit();this.Aka(A.aaR(A.acf.A5D));this.AeJ(A.aaR(A.acf.Aj1));this.Aa_.
U(A.aaR(A.acf.A4k));this.Aa7.U(A.aaR(A.acf.ALe));this.Aa8.U(A.aaR(A.acf.AtX));this.
Aa$.U(A.aaR(A.acf.A4D));this.WD.S(A.aaL(A.fl.Ah));this.SM.S(A.aaL(A.fl.Ak));this.
SN.S(A.aaL(A.fl.Ak));this.WE.S(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var
B;C.Fm._Mark.call(this,D);if((B=this.K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AiX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiY)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AlX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::EvaluationWeightsScreen"};C.Aa6={_Init:function(aArg){C.Ajz._Init.
call(this,aArg);this.__proto__=C.Aa6;this.C_.Ax(A.aaL(A.ach.ACR));},_className:"Application::HeaderEvaluationFilter"
};C.Ka={CT:function(){this.Text.R(A.aaR(A.acf.None));},D$:function(G){C.Ajz.D$.call(
this,G);this.C_.Ax(A._GetAutoObject(A.Device.Converter).AdB(A._GetAutoObject(A.Device.
Device).JB));},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=C.
Ka;},_ReInit:function(){C.Ajz._ReInit.call(this);this.CT();},_className:"Application::HeaderListFilter"
};C.AuV={Init:function(aArg){this.C_.Ax(A._GetAutoObject(A.acj.DN).Bcl());},_Init:
function(aArg){C.Aa6._Init.call(this,aArg);this.__proto__=C.AuV;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AOz={Init:function(
aArg){this.C_.Ax(A.aaL(A.ach.Abd));},_Init:function(aArg){C.Aa6._Init.call(this,
aArg);this.__proto__=C.AOz;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AOy={Init:function(aArg){this.C_.Ax(A.aaL(A.ach.AmD));},_Init:function(aArg){
C.Aa6._Init.call(this,aArg);this.__proto__=C.AOy;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AOx={R8:null,C_:null,AP:null,CT:function(){this.R8.R(A.aaR(A.acf.AMy));},C8:
function(E){C.BP.C8.call(this,E);this.R8.L(E);this.C_.L(E);},_Init:function(aArg
){C.BP._Init.call(this,aArg);C.CO._Init.call(this.R8={I:this},0);A.acg.An._Init.
call(this.C_={I:this},0);A.acg.DR._Init.call(this.AP={I:this},0);this.__proto__=
C.AOx;this.R8.H(Bqe);this.R8.R(A.aaR(A.acf.AMy));this.R8.A4(0x11);this.C_.H(Bqf);
this.AP.DM(Bqg);this.AP.DY(Bqh);this.AP.L(A.jb.Bd);this.J(this.R8,0);this.J(this.
C_,0);this.J(this.AP,0);this.R8.S(A.aaL(A.fl.Ah));this.R8.A8(A.aaL(A.fl.Ak));this.
C_.Ax(A.aaL(A.ach.APG));},_Done:function(){this.__proto__=C.BP;this.R8._Done();this.
C_._Done();this.AP._Done();C.BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.
call(this);this.R8._ReInit();this.C_._ReInit();this.AP._ReInit();this.R8.R(A.aaR(
A.acf.AMy));this.R8.S(A.aaL(A.fl.Ah));this.R8.A8(A.aaL(A.fl.Ak));this.CT();},_Mark:
function(D){var B;C.BP._Mark.call(this,D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Ad$={TH:null,AjG:
null,AjE:null,AjF:null,_Init:function(aArg){C.Et._Init.call(this,aArg);C.CO._Init.
call(this.TH={I:this},0);A.acg.An._Init.call(this.AjG={I:this},0);A.acg.An._Init.
call(this.AjE={I:this},0);A.acg.An._Init.call(this.AjF={I:this},0);this.__proto__=
C.Ad$;this.TH.H(Bqi);this.TH.R(A.aaR(A.acf.Year));this.TH.A4(0x11);this.TH.L(A.jb.
Text);this.AjG.H(A$t);this.AjG.L(A.jb.Text);this.AjE.H(Bqj);this.AjE.L(A.jb.Text
);this.AjF.H(Bqk);this.AjF.L(A.jb.Text);this.J(this.TH,0);this.J(this.AjG,0);this.
J(this.AjE,0);this.J(this.AjF,0);this.TH.S(A.aaL(A.fl.J$));this.TH.A8(A.aaL(A.fl.
Ie));this.AjG.Ax(A.aaL(A.ach.APR));this.AjE.Ax(A.aaL(A.ach.APQ));this.AjF.Ax(A.aaL(
A.ach.APY));},_Done:function(){this.__proto__=C.Et;this.TH._Done();this.AjG._Done(
);this.AjE._Done();this.AjF._Done();C.Et._Done.call(this);},_ReInit:function(){C.
Et._ReInit.call(this);this.TH._ReInit();this.AjG._ReInit();this.AjE._ReInit();this.
AjF._ReInit();this.TH.R(A.aaR(A.acf.Year));this.TH.S(A.aaL(A.fl.J$));this.TH.A8(
A.aaL(A.fl.Ie));},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.TH).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.Amp={Ajb:null,AP:null
,A_:null,D5:null,Ur:null,SC:null,Gj:null,Xo:0,As7:0,Alb:0,AAP:0,Init:function(aArg
){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SC.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SC.M[2]-1,0,this.SC.M[
2]+1,aSize[1]]);this.Ur.H([this.SC.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
D5.H([this.Ur.M[2]-1,0,this.Ur.M[2]+1,aSize[1]]);this.Gj.H([this.Ur.M[2],0,aSize[
0],aSize[1]]);this.Ajb.H(this.Gj.M);},Ai:function(Ae){C.Bc.Ai.call(this,Ae);this.
U(this.AAP.toFixed());this.SC.L(this.V.AQ);this.SC.R(this.Alb.toFixed());this.Ur.
L(this.V.AQ);this.Ur.R(this.As7.toFixed());var BZ=this.BzM(this.Xo);this.Gj.L(A.
_GetAutoObject(A.acj.Assessment).Xc(BZ));this.Ajb.L(A._GetAutoObject(A.acj.Assessment
).Qc(BZ));this.Gj.R(A.abk(this.Xo,0,0)+Afk);},Cd:function(Ad){if(!this.AZ)return;
this.Hu=Ad;Ad=(this.AZ.Cb()-Ad)-1;if(!!this.AZ){this.Alb=this.AZ.CC(Ad,1);this.As7=
this.AZ.CC(Ad,2);this.AAP=this.AZ.CC(Ad,0);if(this.Alb>0)this.Xo=(this.As7/this.
Alb)*100;else this.Xo=0;this.Am();}},BzM:function(Xo){if(Xo>=8)return 1;else if(
Xo>=4)return 2;else return 3;},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.
acg.AJ._Init.call(this.Ajb={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.
acg.AJ._Init.call(this.A_={I:this},0);A.acg.AJ._Init.call(this.D5={I:this},0);A.
acg.Text._Init.call(this.Ur={I:this},0);A.acg.Text._Init.call(this.SC={I:this},0
);A.acg.Text._Init.call(this.Gj={I:this},0);this.__proto__=C.Amp;this.Ajb.H(AnY);
this.AP.L(A.jb.Bd);this.A_.L(A.jb.Bd);this.D5.H(AnY);this.D5.L(A.jb.Bd);this.Ur.
L(A.jb.Text);this.SC.H(AnY);this.SC.L(A.jb.Text);this.Gj.L(A.jb.Text);this.J(this.
Ajb,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.D5,0);this.J(this.Ur,0);this.
J(this.SC,0);this.J(this.Gj,0);this.Ur.S(A.aaL(A.fl.Ah));this.SC.S(A.aaL(A.fl.Ah
));this.Gj.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.
Bc;this.Ajb._Done();this.AP._Done();this.A_._Done();this.D5._Done();this.Ur._Done(
);this.SC._Done();this.Gj._Done();C.Bc._Done.call(this);},_ReInit:function(){C.Bc.
_ReInit.call(this);this.Ajb._ReInit();this.AP._ReInit();this.A_._ReInit();this.D5.
_ReInit();this.Ur._ReInit();this.SC._ReInit();this.Gj._ReInit();this.Ur.S(A.aaL(
A.fl.Ah));this.SC.S(A.aaL(A.fl.Ah));this.Gj.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Bc._Mark.call(this,D);if((B=this.Ajb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ur)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ai8={
BR:null,Axc:A.jV,Rating:0,Ai:function(Ae){C.Iv.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qc(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xc(this.Rating));}this.BR.L(this.V.AQ);},S:function(
E){C.Iv.S.call(this,E);if((E===A.aaL(A.fl.J$))||(E===A.aaL(A.fl.Ah)))this.BR.S(A.
aaL(A.fl.Ah));else if((E===A.aaL(A.fl.Ie))||(E===A.aaL(A.fl.Ak)))this.BR.S(A.aaL(
A.fl.Ak));else this.BR.S(E);},Kk:function(E){if(this.Axc===E)return;this.Axc=E;this.
BR.R(E);},Akg:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.Iv._Init.call(this,aArg);A.acg.Text._Init.call(this.BR={I:this}
,0);this.__proto__=C.Ai8;this.BR.AY(0x34);this.BR.H(ZV);this.BR.I0(true);this.BR.
A4(0x11);this.BR.L(A.jb.Text);this.BR.Aj(true);this.J(this.BR,0);this.BR.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.Iv;this.BR._Done();C.Iv._Done.call(
this);},_ReInit:function(){C.Iv._ReInit.call(this);this.BR._ReInit();this.BR.S(A.
aaL(A.fl.Ah));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.BR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ABY={
N1:null,Sr:null,V:null,Anq:null,Anp:null,AbX:null,AbW:null,DE:Lr,A$c:A.jV,A_b:A.
jV,AbO:function(E){if(this.N1===E)return;this.N1=E;this.Sr.AbO(this.N1);},U:function(
E){if(this.DE===E)return;this.DE=E;this.V.R(E);},A9T:function(E){if(this.A$c===E
)return;this.A$c=E;this.AbX.R(E);},A9y:function(E){if(this.A_b===E)return;this.A_b=
E;this.AbW.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acu.Sr._Init.
call(this.Sr={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AJ._Init.
call(this.Anq={I:this},0);A.acg.AJ._Init.call(this.Anp={I:this},0);A.acg.Text._Init.
call(this.AbX={I:this},0);A.acg.Text._Init.call(this.AbW={I:this},0);this.__proto__=
C.ABY;this.H(Bql);this.Sr.H(Bqm);this.Sr.Ar(false);this.Sr.Bl6(360);this.Sr.Bmd(
0.5);this.V.AY(0x1D);this.V.H(WN);this.V.KM(true);this.V.R(Lr);this.V.L(A.jb.Text
);this.Anq.H(A$u);this.Anq.L(A.jb.H1);this.Anp.H(A$v);this.Anp.L(A.jb.FZ);this.AbX.
AY(0x1D);this.AbX.H(A$u);this.AbX.L(A.jb.Text);this.AbW.AY(0x1D);this.AbW.H(A$v);
this.AbW.L(A.jb.C0);this.J(this.Sr,0);this.J(this.V,0);this.J(this.Anq,0);this.J(
this.Anp,0);this.J(this.AbX,0);this.J(this.AbW,0);this.Sr.Bme(A.aaL(A.acu.AS7));
this.V.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.O;this.Sr._Done();this.V._Done();this.Anq.
_Done();this.Anp._Done();this.AbX._Done();this.AbW._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Sr._ReInit();this.V._ReInit(
);this.Anq._ReInit();this.Anp._ReInit();this.AbX._ReInit();this.AbW._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.N1)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Anq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.Akt={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.CO._Init.call(this.Text={
I:this},0);this.__proto__=C.Akt;this.H(SW);this.Background.AY(0x3F);this.Background.
H(SW);this.Background.L(A.jb.BiC);this.Text.AY(0x3F);this.Text.H(SW);this.Text.A4(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Ah));this.Text.A8(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));this.Text.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Q3={AkE:null,NL:null,C5:null,Aci:null,JE:null,TemperatureUnit:null,My:null,PL:
null,R4:null,Uf:null,Lm:null,I5:null,ZC:null,ZB:null,R6:null,Hw:null,Ajn:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).Alj());
this.Uf.R(A._GetAutoObject(A.acj.Temperature).Alj());this.R6.Y(!A._GetAutoObject(
A.Device.Device).Amr);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnI();this.Aw$(
);this.Ack();this.Axa();},IP:function(G){this.Wr(this);},Cw:function(G){var B;C.
AB.Cw.call(this,G);A.zX([this,this.AJY],[B=A._GetAutoObject(A.Device.Device),B.ADV
,B.AIc],0);A.zX([this,this.AzX],[B=A._GetAutoObject(A.Device.Device),B.ADY,B.AIe
],0);A.zX([this,this.AzX],[B=A._GetAutoObject(A.Device.Device),B.ARV,B.AZq],0);A.
zX([this,this.A2l],[B=A._GetAutoObject(A.Device.Device),B.Aq1,B.AsI],0);A.zX([this
,this.A2d],[B=A._GetAutoObject(A.Device.Device),B.ADS,B.AH$],0);A._GetAutoObject(
A.Device.Device).Ahp();if(A._GetAutoObject(A.Device.Device).Amr)A._GetAutoObject(
A.Device.Device).AeC(true);A._GetAutoObject(A.Device.Device).AwY();A.pe([this,this.
A2d],this);A.pe([this,this.AzX],this);A.pe([this,this.A2l],this);},EV:function(G
){var B;A._GetAutoObject(A.Device.Device).Ahp();A._GetAutoObject(A.Device.Device
).Ua(false);A._GetAutoObject(A.Device.Device).AeL(false);A._GetAutoObject(A.Device.
Device).AeC(false);A.z$([this,this.AJY],[B=A._GetAutoObject(A.Device.Device),B.ADV
,B.AIc],0);A.z$([this,this.AzX],[B=A._GetAutoObject(A.Device.Device),B.ADY,B.AIe
],0);A.z$([this,this.AzX],[B=A._GetAutoObject(A.Device.Device),B.ARV,B.AZq],0);A.
z$([this,this.A2l],[B=A._GetAutoObject(A.Device.Device),B.Aq1,B.AsI],0);A.z$([this
,this.A2d],[B=A._GetAutoObject(A.Device.Device),B.ADS,B.AH$],0);},AzX:function(G
){this.Am();},AnI:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CF);this.C5.L(A.jb.FZ);this.JE.L(this.C5.AQ);this.
My.L(this.C5.AQ);this.TemperatureUnit.L(this.C5.AQ);}break;default:{this.Background.
L(A.jb.CF);this.C5.L(A.jb.AR);this.JE.L(A.jb.Text);this.My.L(this.JE.AQ);this.TemperatureUnit.
L(this.JE.AQ);this.Hw.L(A.jb.FZ);}}},Aw$:function(){this.AkE.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JE.R(A.aaR(A.acf.AC7));this.C5.Ax(A.aaL(A.ach.Au8));this.C5.Cu(0);
this.NL.Cu(0);}break;case 1:{this.AUL(A._GetAutoObject(A.Device.Device).Ko,false
);this.C5.Ax(A.aaL(A.ach.Au8));this.NL.Cu(0);}break;case 2:{this.R4.R(A._GetAutoObject(
A.Device.Converter).AkD(A._GetAutoObject(A.Device.Device).AFv));this.AUL(A._GetAutoObject(
A.Device.Device).Ko,false);this.C5.Ax(null);this.NL.Cu(1);this.Aci.Y(true);this.
PL.Y(true);this.R4.Y(true);this.Uf.Y(true);}break;case 3:{this.ATR();this.AUL(A.
_GetAutoObject(A.Device.Device).Ko,true);this.Aci.Y(false);this.PL.Y(false);this.
R4.Y(false);this.Uf.Y(false);}break;case 4:{this.JE.R(A.aaR(A.acf.BiP));this.My.
R(A.aaR(A.act.Aj0));this.C5.Ax(A.aaL(A.ach.Au_));this.C5.Cu(2);this.NL.Cu(0);}break;
default:A.ab5("%s%e",AHl,A._GetAutoObject(A.Device.Device).MeasureState);}},Ack:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ko<=3240)||(A._GetAutoObject(A.Device.Device
).Ko>=5460))this.N.C2(null);else this.N.C2(A.aaL(A.ach.Aec));this.N.Cn(null);}break;
default:;}},Ar5:function(G){A._GetAutoObject(C.AX).Fl();},Wr:function(G){},AZD:function(
s){this.Wr(s);},Aky:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.Bzz(this);break;default:;}},AZC:function(s){this.Aky(s);},AUL:
function(Aon,Byo){if(Byo)this.Lm.L(A.jb.Bj);else this.Lm.L(A.jb.FZ);if(Aon<=3240
){this.My.Y(false);this.TemperatureUnit.Y(false);this.Lm.Y(true);this.Lm.R(A.aaR(
A.act.AUx));}else if(Aon>=5460){this.My.Y(false);this.TemperatureUnit.Y(false);this.
Lm.Y(true);this.Lm.R(A.aaR(A.act.Boz));}else{this.My.Y(true);this.TemperatureUnit.
Y(true);this.Lm.Y(false);this.My.R(A._GetAutoObject(A.Device.Converter).AkD(Aon)
);}},Axa:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ko<=3240)||(A._GetAutoObject(A.Device.
Device).Ko>=5460))this.JE.R(A.aaR(A.acf.AC7));else this.JE.R(A.aaR(A.acf.Bo$));break;
default:;}},Axb:function(){},BoU:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZC.Ar(true);break;case 4:this.ZB.Ar(true);break;default:{
this.ZC.Ar(false);this.ZB.Ar(false);A._GetAutoObject(A.Device.Device).AeL(false);
}}},AJY:function(G){this.Am();this.Axb();this.BoU();this.BoS();},A2l:function(G){
if(A._GetAutoObject(A.Device.Device).Ams){this.R6.L(A.jb.H1);this.R6.Cu(1);}else{
this.R6.L(A.jb.Bj);this.R6.Cu(0);}},Bzz:function(G){if(!A._GetAutoObject(A.Device.
Device).Amr)A._GetAutoObject(A.Device.Device).AeC(!A._GetAutoObject(A.Device.Device
).Ams);},BoS:function(){if(A._GetAutoObject(A.Device.Device).Amr){this.R6.Y(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeC(true);else A._GetAutoObject(A.Device.Device).AeC(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.R6.Y(true);else this.R6.Y(false);},AJ0:function(
G){this.Cw(this);},ATR:function(){A.ab5("%s",A$s);},A2d:function(G){if(A._GetAutoObject(
A.Device.Device).Hw){this.JE.H(Bqn);this.My.H(Bqo);this.TemperatureUnit.H(Bqp);}
else{this.JE.H(Bqq);this.My.H(Bqr);this.TemperatureUnit.H(Bqs);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Ga._Init.call(this.AkE={I:this},0);A.acg.
An._Init.call(this.NL={I:this},0);A.acg.An._Init.call(this.C5={I:this},0);A.acg.
An._Init.call(this.Aci={I:this},0);A.acg.Text._Init.call(this.JE={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.My={
I:this},0);A.acg.Text._Init.call(this.PL={I:this},0);A.acg.Text._Init.call(this.
R4={I:this},0);A.acg.Text._Init.call(this.Uf={I:this},0);C.CO._Init.call(this.Lm={
I:this},0);A.Device.Tu._Init.call(this.I5={I:this},0);A.Device.Tu._Init.call(this.
ZC={I:this},0);A.Device.Tu._Init.call(this.ZB={I:this},0);A.acg.An._Init.call(this.
R6={I:this},0);C.CO._Init.call(this.Hw={I:this},0);A.acl.Tu._Init.call(this.Ajn={
I:this},0);this.__proto__=C.Q3;var B;this.N.Y(true);this.AkE.Fe(1000);this.AkE.B1=
2;this.NL.H(Bqt);this.NL.L(A.jb.C0);this.C5.H(Bqu);this.C5.L(A.jb.AR);this.C5.Cu(
0);this.C5.Y(true);this.Aci.H(Bqv);this.Aci.L(A.jb.Text);this.Aci.Y(false);this.
JE.KM(true);this.JE.R(A.aaR(A.acf.AC7));this.JE.L(A.jb.Text);this.TemperatureUnit.
A4(0x9);this.TemperatureUnit.L(A.jb.Text);this.My.A4(0x14);this.My.R(A.aaR(A.act.
Aj0));this.My.L(A.jb.Text);this.PL.H(Bqw);this.PL.R(A.aaR(A.acf.PL));this.PL.L(A.
jb.Text);this.PL.Y(false);this.R4.H(Bqx);this.R4.A4(0x14);this.R4.R(Bqy);this.R4.
L(A.jb.Text);this.R4.Y(false);this.Uf.H(Bqz);this.Uf.R(BqA);this.Uf.L(A.jb.Text);
this.Uf.Y(false);this.Lm.H(BqB);this.Lm.R(A.aaR(A.act.AUx));this.Lm.A4(0x12);this.
Lm.L(A.jb.FZ);this.I5.B1=false;this.I5.Cr=true;this.I5.HG(1);this.I5.Fe(4000);this.
I5.T9(0);this.ZC.B1=false;this.ZC.Cr=true;this.ZC.HG(2);this.ZC.Fe(400);this.ZC.
T9(200);this.ZB.B1=false;this.ZB.Cr=true;this.ZB.HG(3);this.ZB.Fe(500);this.ZB.T9(
250);this.R6.H(BqC);this.Hw.H(BqD);this.Hw.Y(A._GetAutoObject(A.Device.Device).Hw
);this.Hw.R(A.aaR(A.acf.Hw));this.Hw.A4(0x12);this.Hw.L(A.jb.FZ);this.Ajn.Ar(A._GetAutoObject(
A.Device.Device).Hw);this.Ajn.Fe(500);this.Ajn.T9(1000);this.J(this.NL,0);this.J(
this.C5,0);this.J(this.Aci,0);this.J(this.JE,0);this.J(this.TemperatureUnit,0);this.
J(this.My,0);this.J(this.PL,0);this.J(this.R4,0);this.J(this.Uf,0);this.J(this.Lm
,0);this.J(this.R6,0);this.J(this.Hw,0);this.N.Cv=[this,this.Ar5];this.N.Ch=[this
,this.AZC];this.N.Cc=[this,this.AZD];this.N.CS(A.aaL(A.ach.Aeb));this.AkE.Q=[B=this.
C5,B.ARM,B.Cu];this.NL.Ax(A.aaL(A.ach.NL));this.C5.Ax(A.aaL(A.ach.Au8));this.Aci.
Ax(A.aaL(A.ach.AP8));this.JE.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.
Ah));this.My.S(A.aaL(A.fl.Ad6));this.PL.S(A.aaL(A.fl.Ah));this.R4.S(A.aaL(A.fl.EB
));this.Uf.S(A.aaL(A.fl.EB));this.Lm.S(A.aaL(A.fl.Ad6));this.Lm.A8(A.aaL(A.fl.EB
));this.Lm.CB(A.aaL(A.fl.Ah));this.I5.Q=[B=A._GetAutoObject(A.Device.Device),B.AR3
,B.AZw];this.ZC.Q=[B=A._GetAutoObject(A.Device.Device),B.ADZ,B.AIf];this.ZB.Q=[B=
A._GetAutoObject(A.Device.Device),B.ADZ,B.AIf];this.R6.Ax(A.aaL(A.ach.Aqj));this.
Hw.S(A.aaL(A.fl.EB));this.Hw.A8(A.aaL(A.fl.J$));this.Hw.CB(A.aaL(A.fl.Ie));this.
Ajn.Q=[B=this.Hw,B.Fd,B.Y];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkE._Done();this.NL._Done();this.C5._Done();this.Aci._Done();this.JE._Done(
);this.TemperatureUnit._Done();this.My._Done();this.PL._Done();this.R4._Done();this.
Uf._Done();this.Lm._Done();this.I5._Done();this.ZC._Done();this.ZB._Done();this.
R6._Done();this.Hw._Done();this.Ajn._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkE._ReInit();this.NL._ReInit();this.C5._ReInit();
this.Aci._ReInit();this.JE._ReInit();this.TemperatureUnit._ReInit();this.My._ReInit(
);this.PL._ReInit();this.R4._ReInit();this.Uf._ReInit();this.Lm._ReInit();this.I5.
_ReInit();this.ZC._ReInit();this.ZB._ReInit();this.R6._ReInit();this.Hw._ReInit(
);this.Ajn._ReInit();this.JE.R(A.aaR(A.acf.AC7));this.My.R(A.aaR(A.act.Aj0));this.
PL.R(A.aaR(A.acf.PL));this.Lm.R(A.aaR(A.act.AUx));this.Hw.R(A.aaR(A.acf.Hw));this.
JE.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.Ah));this.My.S(A.aaL(A.fl.
Ad6));this.PL.S(A.aaL(A.fl.Ah));this.R4.S(A.aaL(A.fl.EB));this.Uf.S(A.aaL(A.fl.EB
));this.Lm.S(A.aaL(A.fl.Ad6));this.Lm.A8(A.aaL(A.fl.EB));this.Lm.CB(A.aaL(A.fl.Ah
));this.Hw.S(A.aaL(A.fl.EB));this.Hw.A8(A.aaL(A.fl.J$));this.Hw.CB(A.aaL(A.fl.Ie
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkE)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.My)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUl={Ack:
function(){C.Q3.Ack.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cn(null);this.N.C2(A.aaL(A.ach.Au$));}break;default:;}},
Wr:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ko>3240)&&(A._GetAutoObject(A.Device.Device
).Ko<5460)){A._GetAutoObject(A.Device.Device).Ahp();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AJ0(this);break;default:;}},Axa:
function(){C.Q3.Axa.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JE.R(A.aaR(A.acf.BiQ));break;default:;}},Axb:function(){C.Q3.Axb.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).Wh(16711680);this.I5.Ar(true);}break;default:this.I5.Ar(false);
}},ATR:function(){this.C5.Ax(A.aaL(A.ach.Au_));this.C5.Cu(0);this.NL.Cu(0);},_Init:
function(aArg){C.Q3._Init.call(this,aArg);this.__proto__=C.AUl;this.Dk(C.AOv);},
_className:"Application::TemperatureMeasurementScreen"};C.AOA={C_:null,IC:null,NN:
null,AP:null,AgH:null,A_:null,C8:function(E){C.BP.C8.call(this,E);this.C_.L(E);this.
IC.L(E);this.NN.L(E);this.AgH.L(E);},_Init:function(aArg){C.BP._Init.call(this,aArg
);A.acg.An._Init.call(this.C_={I:this},0);A.acg.An._Init.call(this.IC={I:this},0
);A.acg.An._Init.call(this.NN={I:this},0);A.acg.DR._Init.call(this.AP={I:this},0
);A.acg.An._Init.call(this.AgH={I:this},0);A.acg.DR._Init.call(this.A_={I:this},
0);this.__proto__=C.AOA;this.C_.H(AxQ);this.IC.H(AGV);this.NN.H(AGZ);this.AP.DM(
A$w);this.AP.DY(A$x);this.AP.L(A.jb.Bd);this.AgH.H(BqE);this.AgH.L(A.jb.C0);this.
A_.DM(BqF);this.A_.DY(BqG);this.A_.L(A.jb.Bd);this.J(this.C_,0);this.J(this.IC,0
);this.J(this.NN,0);this.J(this.AP,0);this.J(this.AgH,0);this.J(this.A_,0);this.
C_.Ax(A.aaL(A.ach.ACR));this.IC.Ax(A.aaL(A.ach.Aed));this.NN.Ax(A.aaL(A.ach.Au3)
);this.AgH.Ax(A.aaL(A.ach.APF));},_Done:function(){this.__proto__=C.BP;this.C_._Done(
);this.IC._Done();this.NN._Done();this.AP._Done();this.AgH._Done();this.A_._Done(
);C.BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.call(this);this.C_._ReInit(
);this.IC._ReInit();this.NN._ReInit();this.AP._ReInit();this.AgH._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BP._Mark.call(this,D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dx={Es:null,CY:null,AFQ:
0,AM5:0,Init:function(aArg){A.zV([this,this.AKE],A._GetAutoObject(A.Device.Device
).Ap,0);A.pe([this,this.AKE],this);},AKE:function(G){var Ad=this.AFQ;if(Ad<0){this.
CY.Hd();this.CY.DT(this.AM5);return;}this.CY.DT(A._GetAutoObject(A.Device.Device
).Ap.Amw(Ad,14));this.CY.AEj(A._GetAutoObject(A.Device.Device).Ap.IV(Ad,13));this.
CY.AeD(A._GetAutoObject(A.Device.Device).Ap.HW(Ad,8));this.CY.T_(A._GetAutoObject(
A.Device.Device).Ap.HW(Ad,11));this.CY.AeG(A._GetAutoObject(A.Device.Device).Ap.
HW(Ad,12));this.CY.AeI(A._GetAutoObject(A.Device.Device).Ap.CC(Ad,5));},A9A:function(
E){if(this.AFQ===E)return;this.AFQ=E;A.pe([this,this.AKE],this);},A85:function(E
){if(this.AM5===E)return;this.AM5=E;A.pe([this,this.AKE],this);},A8k:function(){
return this.AFQ;},_Init:function(aArg){C.Et._Init.call(this,aArg);C.CO._Init.call(
this.Es={I:this},0);C.CY._Init.call(this.CY={I:this},0);this.__proto__=C.Dx;this.
Es.H(BqH);this.Es.R(A.aaR(A.acf.GD));this.Es.A4(0x11);this.Es.L(A.jb.Text);this.
CY.H(A$y);this.J(this.Es,0);this.J(this.CY,0);this.Es.S(A.aaL(A.fl.Ah));this.Es.
A8(A.aaL(A.fl.Ak));this.Es.CB(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){
this.__proto__=C.Et;this.Es._Done();this.CY._Done();C.Et._Done.call(this);},_ReInit:
function(){C.Et._ReInit.call(this);this.Es._ReInit();this.CY._ReInit();this.Es.R(
A.aaR(A.acf.GD));this.Es.S(A.aaL(A.fl.Ah));this.Es.A8(A.aaL(A.fl.Ak));this.Es.CB(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KH={Ago:null,Text:null,AeW:null,C8:function(E
){C.BP.C8.call(this,E);this.Ago.L(E);this.Text.L(E);this.AeW.L(E);},_Init:function(
aArg){C.BP._Init.call(this,aArg);A.acg.An._Init.call(this.Ago={I:this},0);C.CO._Init.
call(this.Text={I:this},0);A.acg.An._Init.call(this.AeW={I:this},0);this.__proto__=
C.KH;this.Ago.H(BqI);this.Ago.L(A.jb.Text);this.Text.H(AG8);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.AeW.H(BqJ);this.AeW.L(A.jb.Text);this.
J(this.Ago,0);this.J(this.Text,0);this.J(this.AeW,0);this.Ago.Ax(A.aaL(A.ach.AOC
));this.Text.S(A.aaL(A.fl.J$));this.Text.A8(A.aaL(A.fl.Ie));},_Done:function(){this.
__proto__=C.BP;this.Ago._Done();this.Text._Done();this.AeW._Done();C.BP._Done.call(
this);},_ReInit:function(){C.BP._ReInit.call(this);this.Ago._ReInit();this.Text.
_ReInit();this.AeW._ReInit();this.Text.S(A.aaL(A.fl.J$));this.Text.A8(A.aaL(A.fl.
Ie));},_Mark:function(D){var B;C.BP._Mark.call(this,D);if((B=this.Ago)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeW
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AOt={
_Init:function(aArg){C.KH._Init.call(this,aArg);this.__proto__=C.AOt;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KH._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AOv={_Init:function(
aArg){C.KH._Init.call(this,aArg);this.__proto__=C.AOv;this.Kn(this.AeW,-2);this.
AeW.Ax(A.aaL(A.ach.Abd));},_className:"Application::HeaderDeviceTemperature"};C.
X6={Ai:function(Ae){C.Amp.Ai.call(this,Ae);this.U(A.aaR(A.acf.BoA)+A.aaR(A.acf.Colon
));},Cd:function(Ad){var B;if(!this.AZ)return;this.Alb=0;this.As7=0;this.Xo=0;if(
!!this.AZ){var P;for(P=0;P<this.AZ.Cb();P++){this.Alb+=this.AZ.CC(P,1);this.As7+=
this.AZ.CC(P,2);}if(this.Alb>0)this.Xo=(this.As7/this.Alb)*100;this.Am();}},_Init:
function(aArg){C.Amp._Init.call(this,aArg);this.__proto__=C.X6;this.AP.Y(false);
this.A_.Y(false);this.D5.Y(false);this.V.S(A.aaL(A.fl.J$));this.V.A8(A.aaL(A.fl.
Ie));},_ReInit:function(){C.Amp._ReInit.call(this);this.V.S(A.aaL(A.fl.J$));this.
V.A8(A.aaL(A.fl.Ie));},_className:"Application::EvaluationLossesSumItem"};C.A5M={
Ag:null,A7:0,_Init:function(aArg){this.__proto__=C.A5M;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A5N={KU:null,MP:null,AV:0,XZ:function(){this.KU=null;this.MP=null;this.AV=0;
},Oq:function(A3){var G9;G9=A._NewObject(C.A5M,0);G9.A7=A3;if(!this.KU){this.KU=
G9;this.MP=G9;this.AV=1;}else{this.MP.Ag=G9;this.MP=G9;this.AV=this.AV+1;}},Amy:
function(){var B;var Rv=0;var Oc=this.KU;while(!!Oc){Rv+=Oc.A7;Oc=Oc.Ag;}return Rv;
},Ajw:function(){if(!this.AV)return 0;return this.Amy()/this.AV;},Aqq:function(){
var B;if(!this.AV)return 0;var A0x=this.Ajw();var AcW=0;var Oc=this.KU;while(!!Oc
){AcW+=Math.pow(Oc.A7-A0x,2);Oc=Oc.Ag;}AcW/=this.AV;AcW=Math.sqrt(AcW);return AcW;
},_Init:function(aArg){this.__proto__=C.A5N;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Af$={Background:null,V:null,KN:0,Ud:5,Hb:false
,Ai:function(Ae){C.G_.Ai.call(this,Ae);if(this.Hb)this.Background.L(A.jb.Bj);else
this.Background.L(A.jb.CF);},U:function(E){C.G_.U.call(this,E);this.V.R(E);},Bg:
function(E){if(this.Hb===E)return;this.Hb=E;this.Am();},Kg:function(E){if(this.Ud===
E)return;this.Ud=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.G_._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.CO.
_Init.call(this.V={I:this},0);this.__proto__=C.Af$;this.H(BC);this.Background.AY(
0x3F);this.Background.H(BC);this.V.AY(0x3F);this.V.H(AHS);this.V.A4(0x11);this.V.
L(A.jb.Text);this.KN=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.J$));this.V.A8(A.aaL(A.fl.Ie));this.V.CB(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.G_;this.Background._Done();this.V._Done();C.G_._Done.call(this
);},_ReInit:function(){C.G_._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.J$));this.V.A8(A.aaL(A.fl.Ie));this.V.CB(A.aaL(A.fl.
By));},_Mark:function(D){var B;C.G_._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANm={Wd:function(G){this.Af9();this.IR(A.aaR(
A.acf.AUw),[this,this.ASW],5);this.IR(A.aaR(A.acf.AUu),[this,this.ASV],7);this.IR(
A.aaR(A.acf.Calving),[this,this.Bkw],11);this.IR(A.aaR(A.acf.AnC),[this,this.Awd
],2);this.IR(A.aaR(A.acf.Xv),[this,this.AD9],1);this.IR(A.aaR(A.acf.At0),[this,this.
AD3],0);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.Al0)+A.
aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dp(6);},Dw:function(G){},Aa4:
function(){return C.AMt;},Aa5:function(){return C.AOY;},QY:function(G){A._GetAutoObject(
A.Device.Device).Ap.Bi(A._GetAutoObject(A.Device.Helper).ACb());},HJ:function(G){
C.GN.HJ.call(this,G);if(this.AjW()===false){this.N.Cn(A.aaL(A.ach.ACO));this.N.Ch=[
this,this.A5j];this.N.FC(A.jV);}this.N.OJ(false);this.N.OK(false);},AfU:function(
){A._GetAutoObject(C.AX).BS(70);},AfT:function(){A._GetAutoObject(C.AX).BS(71);}
,_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=C.ANm;var B;this.
Dk(C.AOw);this.Du(A.aaR(A.acf.ARi));this.Av9([B=A._GetAutoObject(A.Device.Device
),B.A7O,B.Bae]);},_ReInit:function(){C.GN._ReInit.call(this);this.Du(A.aaR(A.acf.
ARi));},_className:"Application::DryCowListScreen"};C.ANl={_Init:function(aArg){
C.IT._Init.call(this,aArg);this.__proto__=C.ANl;this.K$.Ar(false);this.K$.Aj(false
);this.K$.Y(false);this.Jf.Ar(false);this.Jf.Aj(false);this.Jf.Y(false);},_className:
"Application::DryCowListFilterScreen"};C.ANk={_Init:function(aArg){C.Gy._Init.call(
this,aArg);this.__proto__=C.ANk;this.N.B0(A.aaR(A.acf.A4q));},_ReInit:function(){
C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.A4q));},_className:"Application::DryCowListActionsScreen"
};C.AOw={D$:function(G){C.Ka.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.
Converter).AdB(9));},_Init:function(aArg){C.Ka._Init.call(this,aArg);this.__proto__=
C.AOw;},_className:"Application::HeaderDryCowListFilter"};C.Aa1={Filter:null,LS:
null,AGh:A.jV,Ei:0,AFp:1,Operator:1,Bh:function(aSize){C.Ab4.Bh.call(this,aSize);
this.V.H([15,0,this.A1.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Ab4.Ai.call(this,Ae
);this.LS.L(this.V.AQ);},Bi:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L6],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L6
],E,0);A.pe([this,this.L6],this);},L6:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Te((F=this.Filter,F[1].call(F[0])).DX(this.Ei,this.
Operator));else this.Te(null);},M$:function(E){if(this.Ei===E)return;this.Ei=E;A.
pe([this,this.L6],this);},Te:function(AM){if(!!AM){var A0$;if(this.AFp!==1)A0$=this.
AFp;else A0$=AM.Operator;this.U((this.AGh+CL)+A._GetAutoObject(A.Device.Converter
).A5I(A0$));this.Y_(false);}else{this.U(this.AGh);this.Y_(true);}},OI:function(E
){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.L6],this);},AE$:function(
E){if(this.AGh===E)return;this.AGh=E;A.pe([this,this.L6],this);},A9p:function(E){
if(this.AFp===E)return;this.AFp=E;A.pe([this,this.L6],this);},_Init:function(aArg
){C.Ab4._Init.call(this,aArg);C.LS._Init.call(this.LS={I:this},0);this.__proto__=
C.Aa1;this.H(Asp);this.A1.H(BqK);this.LS.H(AZd);this.Kn(this.V,-1);this.J(this.LS
,0);},_Done:function(){this.__proto__=C.Ab4;this.LS._Done();C.Ab4._Done.call(this
);},_ReInit:function(){C.Ab4._ReInit.call(this);this.LS._ReInit();},_Mark:function(
D){var B;C.Ab4._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Ajq={LS:null,Ai:function(Ae){C.Qr.Ai.call(this,Ae);this.LS.L(this.V.AQ);},Te:
function(AM){if(!!AM){this.HZ.Cu(1);this.Y_(true);this.LS.A9g(false);}else{this.
HZ.Cu(0);this.Y_(false);this.LS.A9g(true);}},_Init:function(aArg){C.Qr._Init.call(
this,aArg);C.LS._Init.call(this.LS={I:this},0);this.__proto__=C.Ajq;this.I1=20;this.
LS.H(AZd);this.J(this.LS,0);},_Done:function(){this.__proto__=C.Qr;this.LS._Done(
);C.Qr._Done.call(this);},_ReInit:function(){C.Qr._ReInit.call(this);this.LS._ReInit(
);},_Mark:function(D){var B;C.Qr._Mark.call(this,D);if((B=this.LS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABd={Q:null,CT:function(
){this.U(A._GetAutoObject(A.Device.Helper).Amx(this.TableId,this.Ei));},Te:function(
AM){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.HZ.Cu(1);else this.HZ.Cu(
0);},J3:function(G){A.pe([this,this.L6],this);},At:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.J3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
J3],E,0);if(!!E)A.pe([this,this.J3],this);},_Init:function(aArg){C.Qr._Init.call(
this,aArg);this.__proto__=C.ABd;},_ReInit:function(){C.Qr._ReInit.call(this);this.
CT();},_Mark:function(D){var B;C.Qr._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.AOY={Yw:null,IZ:null,_Init:function(aArg){C.Dx._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yw={I:this},0);A.acg.Text._Init.call(this.IZ={I:this},0);this.__proto__=
C.AOY;this.A85(1);this.Yw.H(BqL);this.Yw.KM(true);this.Yw.R(A.aaR(A.acf.ADk));this.
Yw.L(A.jb.Text);this.IZ.H(SU);this.IZ.R(((A.aaR(A.acf.Rz)+A$z)+A.aaR(A.acf.A$b))+
O0);this.IZ.L(A.jb.Text);this.J(this.Yw,0);this.J(this.IZ,0);this.Yw.S(A.aaL(A.fl.
Ak));this.IZ.S(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.Dx;this.Yw._Done(
);this.IZ._Done();C.Dx._Done.call(this);},_ReInit:function(){C.Dx._ReInit.call(this
);this.Yw._ReInit();this.IZ._ReInit();this.Yw.R(A.aaR(A.acf.ADk));this.IZ.R(((A.
aaR(A.acf.Rz)+A$z)+A.aaR(A.acf.A$b))+O0);this.Yw.S(A.aaL(A.fl.Ak));this.IZ.S(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.Dx._Mark.call(this,D);if((B=this.Yw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AMt={Mb:null,KI:null,Adw:null,AP:null,A_:null
,W5:0,Init:function(aArg){},Bh:function(aSize){C.Bc.Bh.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mb.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KI.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KI.M[2]-1,0,this.
KI.M[2]+1,aSize[1]]);this.Adw.H([this.KI.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Bc.Ai.call(this,Ae);this.KI.L(this.V.AQ);this.Adw.L(this.V.AQ);if(!!this.W5&&(
this.W5!==5)){this.Mb.L(A._GetAutoObject(A.acj.Assessment).Qc(this.W5));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xc(this.W5));}else this.Mb.L(this.Background.
AQ);},Cd:function(Ad){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var Op=this.AZ.
CC(Ad,1);var A1G=this.AZ.CC(Ad,29);var S5=this.AZ.Hz(Ad,4);var LL=this.AZ.IV(Ad,
13);var Ale=this.AZ.IV(Ad,17);var Aln=this.AZ.HW(Ad,11);this.W5=A._GetAutoObject(
A.Device.Helper).ALE(LL,Aln,Ale);this.U(Op.toFixed());this.KI.R(A1G.toFixed());this.
Adw.R(A._GetAutoObject(A.acj.KE).AB_(S5,A._GetAutoObject(A.Device.Helper).Dt(),BqM
));this.Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Mb={I:this},0);A.acg.Text._Init.call(this.KI={I:this},0);A.acg.Text._Init.call(
this.Adw={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(
this.A_={I:this},0);this.__proto__=C.AMt;this.Mb.H(Asx);this.AP.L(A.jb.Bd);this.
A_.L(A.jb.Bd);this.J(this.Mb,0);this.J(this.KI,0);this.J(this.Adw,0);this.J(this.
AP,0);this.J(this.A_,0);this.KI.S(A.aaL(A.fl.Ah));this.Adw.S(A.aaL(A.fl.Ah));this.
Init(aArg);},_Done:function(){this.__proto__=C.Bc;this.Mb._Done();this.KI._Done(
);this.Adw._Done();this.AP._Done();this.A_._Done();C.Bc._Done.call(this);},_ReInit:
function(){C.Bc._ReInit.call(this);this.Mb._ReInit();this.KI._ReInit();this.Adw.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KI.S(A.aaL(A.fl.Ah));this.Adw.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bc._Mark.call(this,D);if((B=this.Mb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RG={AJa:0,BcL:false,Ai:function(Ae){C.Fk.Ai.call(this,Ae);if(this.BcL){this.
U(A.aaR(A.acf.ANi));this.Kk(A.jV);}else{this.U(A.aaR(A.acf.Biw));if(this.AJa>0)this.
Kk(this.AJa.toFixed());else this.Kk(WT);}},Cd:function(G){C.Fk.Cd.call(this,G);this.
BcL=A._GetAutoObject(A.Device.Helper).W.IsDry;var Ak$=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Ak$>0)this.AJa=A._GetAutoObject(A.Device.Helper).
MK(Ak$,A._GetAutoObject(A.Device.Helper).Dt());else this.AJa=0;this.Am();},_Init:
function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RG;},_className:"Application::AnimalInfoItemLactationPhase"
};C.ALJ={AKN:A.jV,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.Rz));
this.Kk(this.AKN);},Cd:function(G){C.Fk.Cd.call(this,G);var S5=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.AKN=A._GetAutoObject(A.acj.KE).AB_(S5,A._GetAutoObject(
A.Device.Helper).Dt(),((((BqN+A.aaR(A.acf.BfP))+BqO)+A.aaR(A.acf.BfO))+BqP)+A.aaR(
A.acf.ALf));this.Am();},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=
C.ALJ;this.AKN=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fk._ReInit.call(this);
this.AKN=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANc={T2:null,YQ:null,V5:null,V6:null,Sj:null,Init:function(aArg){this.A9(this.
T2);A.pe([this,this.MC],this);},Xi:function(G){A._GetAutoObject(A.Device.Device).
Dp(1);},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.NS._Init.call(this.T2={
I:this},0);C.NS._Init.call(this.YQ={I:this},0);C.NS._Init.call(this.V5={I:this},
0);C.Abw._Init.call(this.V6={I:this},0);C.TZ._Init.call(this.Sj={I:this},0);this.
__proto__=C.ANc;var B;this.Dk(C.AOt);this.T2.H(JQ);this.T2.Aj(true);this.T2.U(A.
aaR(A.acf.ABJ));this.T2.Bg(false);this.T2.NV(94);this.YQ.H(P1);this.YQ.Aj(true);
this.YQ.U(A.acf.Info);this.YQ.Bg(true);this.YQ.NV(93);this.V5.H(ZR);this.V5.Aj(true
);this.V5.U(A.aaR(A.acf.AFT));this.V5.Bg(false);this.V5.NV(73);this.V6.H(AkR);this.
V6.Aj(true);this.V6.U(A.aaR(A.acf.TempMeasurement));this.V6.Bg(true);this.V6.NV(
68);this.Sj.H(An1);this.Sj.Aj(true);this.Sj.U(A.aaR(A.acf.AB5));this.Sj.Bg(false
);this.J(this.T2,0);this.J(this.YQ,0);this.J(this.V5,0);this.J(this.V6,0);this.J(
this.Sj,0);this.N.Ch=[this,this.Xi];this.N.Cn(A.aaL(A.ach.ACW));this.T2.AN=[B=this.
T2,B.NY];this.YQ.AN=[B=this.YQ,B.NY];this.V5.AN=[B=this.V5,B.NY];this.V6.AN=[B=this.
V6,B.NY];this.Sj.AN=null;this.Sj.Aex([B=this.Sj,B.AsK]);this.Sj.Gg([this,this.D3
,this.GG]);this.Sj.ASc([B=A._GetAutoObject(A.Device.Device),B.Aq1,B.AsI]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Eb;this.T2._Done();this.YQ._Done();this.
V5._Done();this.V6._Done();this.Sj._Done();C.Eb._Done.call(this);},_ReInit:function(
){C.Eb._ReInit.call(this);this.T2._ReInit();this.YQ._ReInit();this.V5._ReInit();
this.V6._ReInit();this.Sj._ReInit();this.T2.U(A.aaR(A.acf.ABJ));this.V5.U(A.aaR(
A.acf.AFT));this.V6.U(A.aaR(A.acf.TempMeasurement));this.Sj.U(A.aaR(A.acf.AB5));
},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.T2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.
ANd={T0:null,Abu:null,V3:null,Init:function(aArg){this.A9(this.T0);},BxE:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bi$:function(G){if(A._GetAutoObject(
A.Device.Device).AaF<=20)A._GetAutoObject(A.Device.Device).A6(76,true,BqQ,0,null
);else A._GetAutoObject(A.Device.Device).A6(39,true,A.jV,0,[this,this.BxE]);},_Init:
function(aArg){C.Eb._Init.call(this,aArg);C.NS._Init.call(this.T0={I:this},0);C.
Ci._Init.call(this.Abu={I:this},0);C.Abw._Init.call(this.V3={I:this},0);this.__proto__=
C.ANd;var B;this.Dk(C.AOu);this.T0.H(JQ);this.T0.Aj(true);this.T0.U(A.aaR(A.acf.
A4O));this.T0.Bg(false);this.T0.NV(74);this.Abu.H(P1);this.Abu.Aj(true);this.Abu.
U(A.aaR(A.acf.A5K));this.Abu.Bg(true);this.V3.H(ZR);this.V3.Aj(true);this.V3.U(A.
aaR(A.acf.RangeTest));this.V3.Bg(false);this.V3.NV(15);this.J(this.T0,0);this.J(
this.Abu,0);this.J(this.V3,0);this.T0.AN=[B=this.T0,B.NY];this.Abu.AN=[this,this.
Bi$];this.V3.AN=[B=this.V3,B.NY];this.Init(aArg);},_Done:function(){this.__proto__=
C.Eb;this.T0._Done();this.Abu._Done();this.V3._Done();C.Eb._Done.call(this);},_ReInit:
function(){C.Eb._ReInit.call(this);this.T0._ReInit();this.Abu._ReInit();this.V3.
_ReInit();this.T0.U(A.aaR(A.acf.A4O));this.Abu.U(A.aaR(A.acf.A5K));this.V3.U(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.T0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AOu={_Init:function(aArg){C.KH._Init.call(this,aArg);this.__proto__=C.AOu;this.
Text.R(A.aaR(A.acf.AFT));},_ReInit:function(){C.KH._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AFT));},_className:"Application::HeaderDeviceServiceMenu"};C.NS={AgI:
null,Ai:function(Ae){C.Abw.Ai.call(this,Ae);this.AgI.L(this.V.AQ);},_Init:function(
aArg){C.Abw._Init.call(this,aArg);A.acg.An._Init.call(this.AgI={I:this},0);this.
__proto__=C.NS;this.AgI.AY(0x38);this.AgI.H(BqR);this.J(this.AgI,0);this.V.CB(A.
aaL(A.fl.By));this.AgI.Ax(A.aaL(A.ach.Ai9));},_Done:function(){this.__proto__=C.
Abw;this.AgI._Done();C.Abw._Done.call(this);},_ReInit:function(){C.Abw._ReInit.call(
this);this.AgI._ReInit();this.V.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Abw.
_Mark.call(this,D);if((B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.AM_={AgO:null,AgU:null,AgW:null,AgS:null,AjN:null,AgR:null,AgQ:null,AgP:null
,AjL:null,AgN:null,AjM:null,AgV:null,AjO:null,AgT:null,AjP:null,Init:function(aArg
){this.A9(this.AgO);},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.PF._Init.
call(this.AgO={I:this},0);C.PF._Init.call(this.AgU={I:this},0);C.PF._Init.call(this.
AgW={I:this},0);C.PF._Init.call(this.AgS={I:this},0);C.PF._Init.call(this.AjN={I:
this},0);C.PF._Init.call(this.AgR={I:this},0);C.PF._Init.call(this.AgQ={I:this},
0);C.PF._Init.call(this.AgP={I:this},0);C.PF._Init.call(this.AjL={I:this},0);C.PF.
_Init.call(this.AgN={I:this},0);C.PF._Init.call(this.AjM={I:this},0);C.PF._Init.
call(this.AgV={I:this},0);C.PF._Init.call(this.AjO={I:this},0);C.PF._Init.call(this.
AgT={I:this},0);C.PF._Init.call(this.AjP={I:this},0);this.__proto__=C.AM_;this.Dk(
C.AOp);this.AgO.H(AsD);this.AgO.Aj(true);this.AgO.So(1);this.AgU.H(AZb);this.AgU.
Aj(true);this.AgU.Bg(true);this.AgU.So(2);this.AgW.H(Asz);this.AgW.Aj(true);this.
AgW.Bg(false);this.AgW.So(3);this.AgS.H(AsA);this.AgS.Aj(true);this.AgS.Bg(true);
this.AgS.So(4);this.AjN.H(An3);this.AjN.Aj(true);this.AjN.So(5);this.AgR.H(BqS);
this.AgR.Aj(true);this.AgR.Bg(true);this.AgR.So(6);this.AgQ.H(AsB);this.AgQ.Aj(true
);this.AgQ.Bg(false);this.AgQ.So(7);this.AgP.H(AxP);this.AgP.Aj(true);this.AgP.Bg(
true);this.AgP.So(8);this.AjL.H(AZc);this.AjL.Aj(true);this.AjL.So(9);this.AgN.H(
An_);this.AgN.Aj(true);this.AgN.Bg(true);this.AgN.So(10);this.AjM.H(BqT);this.AjM.
Aj(true);this.AjM.So(11);this.AgV.H(BqU);this.AgV.Aj(true);this.AgV.Bg(true);this.
AgV.So(12);this.AjO.H(BqV);this.AjO.Aj(true);this.AjO.So(13);this.AgT.H(BqW);this.
AgT.Aj(true);this.AgT.Bg(true);this.AgT.So(14);this.AjP.H(BqX);this.AjP.Aj(true);
this.AjP.So(15);this.J(this.AgO,0);this.J(this.AgU,0);this.J(this.AgW,0);this.J(
this.AgS,0);this.J(this.AjN,0);this.J(this.AgR,0);this.J(this.AgQ,0);this.J(this.
AgP,0);this.J(this.AjL,0);this.J(this.AgN,0);this.J(this.AjM,0);this.J(this.AgV,
0);this.J(this.AjO,0);this.J(this.AgT,0);this.J(this.AjP,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.AgO._Done();this.AgU._Done();this.AgW._Done(
);this.AgS._Done();this.AjN._Done();this.AgR._Done();this.AgQ._Done();this.AgP._Done(
);this.AjL._Done();this.AgN._Done();this.AjM._Done();this.AgV._Done();this.AjO._Done(
);this.AgT._Done();this.AjP._Done();C.Eb._Done.call(this);},_ReInit:function(){C.
Eb._ReInit.call(this);this.AgO._ReInit();this.AgU._ReInit();this.AgW._ReInit();this.
AgS._ReInit();this.AjN._ReInit();this.AgR._ReInit();this.AgQ._ReInit();this.AgP.
_ReInit();this.AjL._ReInit();this.AgN._ReInit();this.AjM._ReInit();this.AgV._ReInit(
);this.AjO._ReInit();this.AgT._ReInit();this.AjP._ReInit();},_Mark:function(D){var
B;C.Eb._Mark.call(this,D);if((B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AgR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AjO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOp={_Init:function(aArg){C.KH._Init.call(this
,aArg);this.__proto__=C.AOp;this.Text.R(A.aaR(A.acf.A5d));},_ReInit:function(){C.
KH._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5d));},_className:"Application::HeaderDeviceCheck"
};C.PF={DeviceComponentToString:null,J7:null,Aup:0,Bbo:false,CT:function(){this.
V.R(this.DeviceComponentToString.BQ(this.Aup));},Bh:function(aSize){var B;C.Ci.Bh.
call(this,aSize);this.J7.H(A.abM(this.J7.M,aSize[0]-((B=this.J7.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.J7.M[0]));},Ai:function(Ae){C.Ci.Ai.call(this,Ae);this.J7.
AEb(this.V.AQ);if(this.Bbo)this.J7.Av3(A.jb.ET);else this.J7.Av3(A.jb.FZ);},So:function(
E){if(this.Aup===E)return;this.Aup=E;this.U(this.DeviceComponentToString.BQ(E));
this.D$(this);},D$:function(G){this.Bbo=A._GetAutoObject(A.Device.Device).AI2(this.
Aup);this.Am();},_Init:function(aArg){C.Ci._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.J7._Init.call(this.J7={I:this
},0);this.__proto__=C.PF;this.V.H(BqY);this.V.A4(0x11);this.J7.H(BqZ);this.J(this.
J7,0);},_Done:function(){this.__proto__=C.Ci;this.DeviceComponentToString._Done(
);this.J7._Done();C.Ci._Done.call(this);},_ReInit:function(){C.Ci._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.J7._ReInit();this.CT();},_Mark:function(
D){var B;C.Ci._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.R3={Aw:null,DP:null,Z:null,Init:function(aArg){A.pe([this,this.AzW],this);},
A9:function(E){C.AB.A9.call(this,E);this.AKI(this);this.DD(this);},Cw:function(G
){A.pe([this,this.MC],this);},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[
3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},AzW:function(
G){var Ba=A._GetAutoObject(A.Device.Helper).A5Y();A._GetAutoObject(A.Device.Device
).Ap.Bi(Ba);A.pe([this,this.MC],this);},Eo:function(G){A._GetAutoObject(C.AX).Fl(
);},A2E:function(G){A._GetAutoObject(C.AX).BS(95);},DD:function(G){this.N.CS(A.aaL(
A.ach.EU));this.N.Cv=[this,this.Eo];this.N.Cn(A.aaL(A.ach.ACV));if(!A._GetAutoObject(
A.Device.Device).Ap.Filter||A._GetAutoObject(A.Device.Helper).AqI(A._GetAutoObject(
A.Device.Device).Ap.Filter)){this.N.Ch=null;this.N.IX.Dl(100);}else{this.N.Ch=[this
,this.AzW];this.N.IX.Dl(255);}this.N.C2(A.aaL(A.ach.Aed));this.N.Cc=[this,this.A2E
];},MC:function(s){this.DD(s);},AKI:function(G){A.ab5("%s",Bq0);},BEX:function(s
){this.AKI(s);},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){
C.AB._Init.call(this,aArg);C.Aw._Init.call(this.Aw={I:this},0);A.acg.AJ._Init.call(
this.DP={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);this.__proto__=C.R3;this.
N.Ar(false);this.N.Y(true);this.Dk(C.Aa6);this.Aw.H(IK);this.DP.AY(0x3F);this.DP.
H(E4);this.DP.L(A.jb.CF);this.Z.H(Lq);this.Z.Kf(9);this.J(this.Aw,0);this.J(this.
DP,0);this.J(this.Z,0);this.Z.Ej=[this,this.G8];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Aw._Done();this.DP._Done();this.Z._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aw._ReInit();this.DP.
_ReInit();this.Z._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuScreen"
};C.ANA={XX:null,XW:null,XJ:null,Tv:null,DD:function(G){C.R3.DD.call(this,G);if(
this.AR===this.Tv){this.N.Cn(null);this.N.Ch=null;this.N.C2(null);this.N.Cc=null;
}},AKI:function(G){if(this.AR===this.Tv)this.Dk(C.AOA);else this.Dk(C.Aa6);},BxX:
function(){switch(A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:return A.
aaL(A.ach.APz);case 1:return A.aaL(A.ach.APA);default:A.ab5("%s%s",Bq1,A._GetAutoObject(
A.Device.Device).TemperatureUnit.toFixed());}return null;},BxY:function(){switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.APB);case 1:
return A.aaL(A.ach.APC);default:A.ab5("%s%s",AH3,A._GetAutoObject(A.Device.Device
).MassUnit.toFixed());}return null;},Ia:function(G){var Cs=(C.Fc.isPrototypeOf(G
)?G:null);if(!Cs)return;if(Cs===this.XX)A._GetAutoObject(C.AX).BS(75);else if(Cs===
this.XW)A._GetAutoObject(C.AX).BS(64);else if(Cs===this.XJ)A._GetAutoObject(C.AX
).BS(66);else if(Cs===this.Tv)A._GetAutoObject(C.AX).BS(67);},_Init:function(aArg
){C.R3._Init.call(this,aArg);C.Fc._Init.call(this.XX={I:this},0);C.Fc._Init.call(
this.XW={I:this},0);C.Fc._Init.call(this.XJ={I:this},0);C.Fc._Init.call(this.Tv={
I:this},0);this.__proto__=C.ANA;this.XX.H(PY);this.XX.Aj(true);this.XX.U(A.aaR(A.
acf.Ae_));this.XW.H(Ks);this.XW.Aj(true);this.XW.U(A.aaR(A.acf.Temperature));this.
XJ.H(Bq2);this.XJ.Aj(true);this.XJ.U(A.aaR(A.acf.Rating));this.Tv.H(Bq3);this.Tv.
Aj(true);this.Tv.U(A.aaR(A.acf.A61));this.J(this.XX,0);this.J(this.XW,0);this.J(
this.XJ,0);this.J(this.Tv,0);this.XX.AN=[this,this.Ia];this.XX.Dz(this.BxY());this.
XW.AN=[this,this.Ia];this.XW.Dz(this.BxX());this.XJ.AN=[this,this.Ia];this.XJ.Dz(
A.aaL(A.ach.APx));this.Tv.AN=[this,this.Ia];this.Tv.Dz(A.aaL(A.ach.APy));},_Done:
function(){this.__proto__=C.R3;this.XX._Done();this.XW._Done();this.XJ._Done();this.
Tv._Done();C.R3._Done.call(this);},_ReInit:function(){C.R3._ReInit.call(this);this.
XX._ReInit();this.XW._ReInit();this.XJ._ReInit();this.Tv._ReInit();this.XX.U(A.aaR(
A.acf.Ae_));this.XW.U(A.aaR(A.acf.Temperature));this.XJ.U(A.aaR(A.acf.Rating));this.
Tv.U(A.aaR(A.acf.A61));},_Mark:function(D){var B;C.R3._Mark.call(this,D);if((B=this.
XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuMainScreen"};C.ANB={Vn:null,XL:null,
XY:null,AKI:function(G){this.Dk(C.AuV);},Bx1:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQb);case 1:return A.aaL(A.
ach.AQc);default:A.ab5("%s%s",AH3,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Ia:function(G){var Cs=(C.Fc.isPrototypeOf(G)?G:null);if(!Cs)return;
if(Cs===this.Vn)A._GetAutoObject(C.AX).BS(77);else if(Cs===this.XY)A._GetAutoObject(
C.AX).BS(65);else if(Cs===this.XL)A._GetAutoObject(C.AX).BS(76);},Bx0:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.APm
);case 1:return A.aaL(A.ach.APn);default:A.ab5("%s%s",AH3,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Bx2:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQd);case 1:return A.aaL(A.
ach.AQe);default:A.ab5("%s%s",AH3,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},_Init:function(aArg){C.R3._Init.call(this,aArg);C.Fc._Init.call(
this.Vn={I:this},0);C.Fc._Init.call(this.XL={I:this},0);C.Fc._Init.call(this.XY={
I:this},0);this.__proto__=C.ANB;this.Vn.H(PY);this.Vn.Aj(true);this.Vn.U(A.aaR(A.
acf.A_5));this.XL.H(AZe);this.XL.Aj(true);this.XL.U(A.aaR(A.acf.A4E));this.XY.H(
N8);this.XY.Aj(true);this.XY.U(A.aaR(A.acf.A_8));this.J(this.Vn,0);this.J(this.XL
,0);this.J(this.XY,0);this.Vn.AN=[this,this.Ia];this.Vn.Dz(this.Bx1());this.Vn.AbL(
A.aaL(A.ach.NM));this.XL.AN=[this,this.Ia];this.XL.Dz(this.Bx0());this.XY.AN=[this
,this.Ia];this.XY.Dz(this.Bx2());},_Done:function(){this.__proto__=C.R3;this.Vn.
_Done();this.XL._Done();this.XY._Done();C.R3._Done.call(this);},_ReInit:function(
){C.R3._ReInit.call(this);this.Vn._ReInit();this.XL._ReInit();this.XY._ReInit();
this.Vn.U(A.aaR(A.acf.A_5));this.XL.U(A.aaR(A.acf.A4E));this.XY.U(A.aaR(A.acf.A_8
));},_Mark:function(D){var B;C.R3._Mark.call(this,D);if((B=this.Vn)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"};
C.ANE={BcO:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).Zq(0));},_Init:function(aArg){C.Aqg._Init.call(this,aArg);this.
__proto__=C.ANE;this.AeJ(A.aaR(A.acf.A7l));},_ReInit:function(){C.Aqg._ReInit.call(
this);this.AeJ(A.aaR(A.acf.A7l));},_className:"Application::EvaluationWeightsRecentScreen"
};C.ANx={AhY:null,Aa9:null,Uw:null,Aay:null,Pe:null,Ai6:null,Agb:null,Ai7:null,Agc:
null,Aw:null,Aar:null,AcT:0,Ao6:0,Dw:function(G){switch(this.Cl.CK){case 4:{if(this.
IU.Fd())return;var Ql=this.Z.Bq[1]+80;this.Z.Gh([this.Z.Bq[0],Ql]);this.Z.Vb(null
,null);}break;case 5:{if(this.IU.Fd())return;var Ql=this.Z.Bq[1]-80;this.Z.Gh([this.
Z.Bq[0],Ql]);this.Z.Vb(null,null);}break;default:C.Fm.Dw.call(this,G);}},ApG:function(
LW,AcC){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(
A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,AcC,true);Fj.CX(HQ);var AcP=A.
_NewObject(A.Device.Int32FilterCriterion,0);AcP.Initialize(8,2,0,true);Fj.CX(AcP
);LW.Bi(Fj);},Aia:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqJ()){this.
AhY.Oq(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Ayx=this.BxV(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Aar.Set(Ayx,this.Aar.Get(Ayx)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.AcT++;this.Ao6=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fm.Aia.call(
this,G);},Z5:function(G){if(this.AcT>1)A._GetAutoObject(A.Device.Device).A6(56,true
,this.AcT.toFixed(),0,null);if(this.AcT===1)A._GetAutoObject(A.Device.Device).A6(
53,true,this.Ao6.toFixed(),0,null);if(this.AhY.AV>0)this.Uw.U(((((((A._GetAutoObject(
A.Device.Converter).Axh(this.AhY.Ajw()|0,1)+AxV)+A._GetAutoObject(A.Device.Converter
).Axh(this.AhY.Aqq()|0,1))+CL)+A._GetAutoObject(A.acj.DN).AfH())+AxW)+this.AhY.AV.
toFixed())+O0);else this.Uw.U(A.aaR(A.acf.Unknown));var Rv=this.Aar.Amy();var P;
for(P=0;P<this.Aar.Mx;P++){var Bb=this.Bye(P);if(!!Bb){var CA=this.Aar.Get(P);Bb.
BkP(CA);if(!Rv)Bb.A9v(0);else Bb.A9v(Math.round((CA*100)/Rv)|0);Bb.Bms(this.Byd(
P,A._GetAutoObject(A.Device.Device).MassUnit));}}var AcY=false;if(this.AhY.AV>0)
AcY=true;this.IU.Y(!AcY);C.Fm.Z5.call(this,G);},Ac5:function(G){this.AhY.XZ();this.
Aar.Hd();this.AcT=0;this.Ao6=0;C.Fm.Ac5.call(this,G);},Bye:function(aIndex){var Bb=
null;switch(aIndex){case 0:Bb=this.Pe;break;case 1:Bb=this.Ai6;break;case 2:Bb=this.
Agb;break;case 3:Bb=this.Ai7;break;case 4:Bb=this.Agc;break;default:throw new Error(
AxX+aIndex.toFixed());}return Bb;},Byd:function(aIndex,Aoj){var B;var Tf=A.jV;switch(
Aoj){case 0:{switch(aIndex){case 0:Tf=Bq4;break;case 1:Tf=Bq5;break;case 2:Tf=Bq6;
break;case 3:Tf=Bq7;break;case 4:Tf=Bq8;break;default:throw new Error(AxX+aIndex.
toFixed());}Tf=Tf+(CL+A.aaR(A.acf.Azo));}break;case 1:{switch(aIndex){case 0:Tf=
Bq9;break;case 1:Tf=Bq_;break;case 2:Tf=Bq$;break;case 3:Tf=Bra;break;case 4:Tf=
Brb;break;default:throw new Error(AxX+aIndex.toFixed());}Tf=Tf+(CL+A.aaR(A.acf.A6I
));}break;default:A.ab5("%s%e",A$A,Aoj);}return Tf;},BxW:function(AIo,Aoj){var AcQ=
0;switch(Aoj){case 0:switch(AIo){case 0:AcQ=35000;break;case 1:AcQ=40000;break;case
2:AcQ=45000;break;case 3:AcQ=50000;break;case 4:AcQ=2147483647;break;default:throw new
Error(AxX+AIo.toFixed());}break;case 1:switch(AIo){case 0:AcQ=36287;break;case 1:
AcQ=40823;break;case 2:AcQ=45359;break;case 3:AcQ=49895;break;case 4:AcQ=2147483647;
break;default:throw new Error(AxX+AIo.toFixed());}break;default:A.ab5("%s%e",A$A
,Aoj);}return AcQ;},BxV:function(A3,Aoj){var Ayx=0;var P;for(P=0;P<this.Aar.Mx;P++
)if(A3<this.BxW(P,Aoj)){Ayx=P;break;}return Ayx;},E9:function(G){var B;this.Aw.Mp((
B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[
1]);},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fm._Init.
call(this,aArg);C.Af$._Init.call(this.Aa9={I:this},0);C.Iv._Init.call(this.Uw={I:
this},0);C.Aay._Init.call(this.Aay={I:this},0);C.Pe._Init.call(this.Pe={I:this},
0);C.Pe._Init.call(this.Ai6={I:this},0);C.Pe._Init.call(this.Agb={I:this},0);C.Pe.
_Init.call(this.Ai7={I:this},0);C.Pe._Init.call(this.Agc={I:this},0);C.Aw._Init.
call(this.Aw={I:this},0);A.Device.Int32ArrayWrapper._Init.call(this.Aar={I:this}
,0);this.__proto__=C.ANx;this.Dk(C.AuV);this.Aka(A.aaR(A.acf.A5z));this.AeJ(A.aaR(
A.acf.A7e));this.Aa9.H(AsD);this.Aa9.Aj(true);this.Aa9.U(A.aaR(A.acf.A4i));this.
Aa9.Bg(false);this.Aa9.Kg(5);this.Uw.H(AZb);this.Uw.Aj(true);this.Uw.U(A.jV);this.
Uw.Bg(true);this.Uw.Kg(5);this.Aay.H(Asz);this.Aay.Aj(true);this.Pe.H(AsA);this.
Pe.Aj(true);this.Pe.Bg(true);this.Ai6.H(AsB);this.Ai6.Aj(true);this.Agb.H(AxP);this.
Agb.Aj(true);this.Agb.Bg(true);this.Ai7.H(AZc);this.Ai7.Aj(true);this.Agc.H(An_);
this.Agc.Aj(true);this.Agc.Bg(true);this.Aw.H(IK);this.Aar.Y$(5);this.J(this.Aa9
,-1);this.J(this.Uw,-1);this.J(this.Aay,-1);this.J(this.Pe,-1);this.J(this.Ai6,-
1);this.J(this.Agb,-1);this.J(this.Ai7,-1);this.J(this.Agc,-1);this.J(this.Aw,-1
);this.Z.Ej=[this,this.G8];this.AhY=A._NewObject(C.Avf,0);this.Uw.S(A.aaL(A.fl.Ah
));},_Done:function(){this.__proto__=C.Fm;this.Aa9._Done();this.Uw._Done();this.
Aay._Done();this.Pe._Done();this.Ai6._Done();this.Agb._Done();this.Ai7._Done();this.
Agc._Done();this.Aw._Done();this.Aar._Done();C.Fm._Done.call(this);},_ReInit:function(
){C.Fm._ReInit.call(this);this.Aa9._ReInit();this.Uw._ReInit();this.Aay._ReInit(
);this.Pe._ReInit();this.Ai6._ReInit();this.Agb._ReInit();this.Ai7._ReInit();this.
Agc._ReInit();this.Aw._ReInit();this.Aar._ReInit();this.Aka(A.aaR(A.acf.A5z));this.
AeJ(A.aaR(A.acf.A7e));this.Aa9.U(A.aaR(A.acf.A4i));this.Uw.S(A.aaL(A.fl.Ah));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.AhY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ai6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ai7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Agc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aar)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationBirthWeightsScreen"
};C.Aay={H3:null,Gj:null,Bh:function(aSize){C.Iv.Bh.call(this,aSize);this.H3.H([((
aSize[0]*57)/100)|0,0,((aSize[0]*80)/100)|0,aSize[1]]);this.Gj.H([this.H3.M[2],0
,aSize[0],aSize[1]]);},Ai:function(Ae){C.Iv.Ai.call(this,Ae);this.H3.L(this.V.AQ
);this.Gj.L(this.V.AQ);},_Init:function(aArg){C.Iv._Init.call(this,aArg);A.acg.Text.
_Init.call(this.H3={I:this},0);A.acg.Text._Init.call(this.Gj={I:this},0);this.__proto__=
C.Aay;this.U(A.aaR(A.acf.AGv));this.H3.H(Brc);this.H3.KM(true);this.H3.R(A.aaR(A.
acf.Ap6));this.H3.L(A.jb.Text);this.Gj.H(A$B);this.Gj.R(Afk);this.Gj.L(A.jb.Text
);this.J(this.H3,0);this.J(this.Gj,0);this.V.S(A.aaL(A.fl.Ie));this.H3.S(A.aaL(A.
fl.Ie));this.Gj.S(A.aaL(A.fl.J$));},_Done:function(){this.__proto__=C.Iv;this.H3.
_Done();this.Gj._Done();C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.
call(this);this.H3._ReInit();this.Gj._ReInit();this.U(A.aaR(A.acf.AGv));this.H3.
R(A.aaR(A.acf.Ap6));this.V.S(A.aaL(A.fl.Ie));this.H3.S(A.aaL(A.fl.Ie));this.Gj.S(
A.aaL(A.fl.J$));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.H3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemWeightClassHeading"};C.Pe={AP:null,A_:null,PQ:null,H3:
null,Gj:null,A_7:A.jV,Ap6:0,A91:0,Bh:function(aSize){C.Iv.Bh.call(this,aSize);this.
PQ.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);this.AP.H([this.PQ.M[2]-1,0,this.PQ.M[
2]+1,aSize[1]]);this.H3.H([this.PQ.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
A_.H([this.H3.M[2]-1,0,this.H3.M[2]+1,aSize[1]]);this.Gj.H([this.H3.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Iv.Ai.call(this,Ae);this.PQ.L(this.V.AQ);this.
H3.L(this.V.AQ);this.Gj.L(this.V.AQ);},Bms:function(E){if(this.A_7===E)return;this.
A_7=E;this.PQ.R(E);},BkP:function(E){if(this.Ap6===E)return;this.Ap6=E;this.H3.R(
E.toFixed());},A9v:function(E){if(this.A91===E)return;this.A91=E;this.Gj.R(E.toFixed(
)+Axp);},_Init:function(aArg){C.Iv._Init.call(this,aArg);A.acg.AJ._Init.call(this.
AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.
PQ={I:this},0);A.acg.Text._Init.call(this.H3={I:this},0);A.acg.Text._Init.call(this.
Gj={I:this},0);this.__proto__=C.Pe;this.AP.L(A.jb.Bd);this.A_.L(A.jb.Bd);this.PQ.
H(Brd);this.PQ.R(A.aaR(A.acf.AGv));this.PQ.L(A.jb.Text);this.H3.R(ZT);this.H3.L(
A.jb.Text);this.Gj.R(Bre);this.Gj.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,
0);this.J(this.PQ,0);this.J(this.H3,0);this.J(this.Gj,0);this.PQ.S(A.aaL(A.fl.Ah
));this.H3.S(A.aaL(A.fl.Ah));this.Gj.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Iv;this.AP._Done();this.A_._Done();this.PQ._Done();this.H3._Done();this.Gj._Done(
);C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(this);this.AP._ReInit(
);this.A_._ReInit();this.PQ._ReInit();this.H3._ReInit();this.Gj._ReInit();this.PQ.
R(A.aaR(A.acf.AGv));this.PQ.S(A.aaL(A.fl.Ah));this.H3.S(A.aaL(A.fl.Ah));this.Gj.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"
};C.ALV={AKb:function(){var Ba=A._GetAutoObject(A.Device.Helper).Mj();A._GetAutoObject(
A.Device.Device).Ap.Bi(Ba);},_Init:function(aArg){C.Al7._Init.call(this,aArg);this.
__proto__=C.ALV;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.AQN={
RM:null,RS:null,RL:null,RP:null,Pg:null,RO:null,AKG:function(G){A.pe([this,this.
BA3],this);A.pe([this,this.BAR],this);A.pe([this,this.BAN],this);A.pe([this,this.
A3y],this);A.pe([this,this.BAU],this);A.pe([this,this.BAS],this);},Ia:function(G
){var Cs=(C.QI.isPrototypeOf(G)?G:null);if(!Cs)return;if(Cs===this.RS)A._GetAutoObject(
C.AX).BS(20);else if(Cs===this.Pg)A._GetAutoObject(C.AX).BS(14);else if(Cs===this.
RM)A._GetAutoObject(C.AX).BS(12);else if(Cs===this.RP)A._GetAutoObject(C.AX).BS(
47);else if(Cs===this.RL)A._GetAutoObject(C.AX).BS(58);else if(Cs===this.RO)A._GetAutoObject(
C.AX).BS(69);},BAR:function(G){var Ba=A._GetAutoObject(A.Device.Helper).Mj();var
AyE=A._NewObject(A.Device.BoolFilterCriterion,0);AyE.Initialize(9,0,true,true);Ba.
CX(AyE);A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.Pg.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BA3:function(G){var Ba=A._GetAutoObject(A.
Device.Helper).Mj();var AAM=A._NewObject(A.Device.BoolFilterCriterion,0);AAM.Initialize(
12,0,true,true);Ba.CX(AAM);A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RS.Y9(
A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed());},BAN:function(G){var Ba=A.
_GetAutoObject(A.Device.Helper).Mj();var Ayk=A._NewObject(A.Device.BoolFilterCriterion
,0);Ayk.Initialize(8,0,true,true);Ba.CX(Ayk);A._GetAutoObject(A.Device.Device).Ap.
Bi(Ba);this.RM.Y9(A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed());},A3y:function(
G){var Ba=A._GetAutoObject(A.Device.Helper).A5S(A._GetAutoObject(A.Device.Device
).AAS);A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RL.Y9(A._GetAutoObject(A.
Device.Device).Ap.Cb().toFixed());},BAU:function(G){var Ba=A._GetAutoObject(A.Device.
Helper).A51();A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RP.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BAS:function(G){var Ba=A._GetAutoObject(A.
Device.Helper).ACb();A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RO.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},_Init:function(aArg){C.TU._Init.call(this,
aArg);C.QI._Init.call(this.RM={I:this},0);C.QI._Init.call(this.RS={I:this},0);C.
QI._Init.call(this.RL={I:this},0);C.QI._Init.call(this.RP={I:this},0);C.QI._Init.
call(this.Pg={I:this},0);C.QI._Init.call(this.RO={I:this},0);this.__proto__=C.AQN;
this.RM.H(PY);this.RM.Aj(true);this.RM.U(A.aaR(A.acf.Alarm));this.RM.AbI(true);this.
RS.H(AZe);this.RS.Aj(true);this.RS.U(A.aaR(A.acf.ArD));this.RS.AbI(true);this.RL.
H(N8);this.RL.Aj(true);this.RL.U(A.aaR(A.acf.ActionList));this.RL.AbI(true);this.
RP.H(PZ);this.RP.Aj(true);this.RP.U(A.aaR(A.acf.AN3));this.RP.AbI(true);this.Pg.
H(ST);this.Pg.Ar(false);this.Pg.Aj(false);this.Pg.Y(false);this.Pg.U(A.aaR(A.acf.
ABv));this.Pg.AbI(true);this.RO.H(UC);this.RO.Aj(true);this.RO.U(A.aaR(A.acf.A5v
));this.RO.AbI(true);this.J(this.RM,0);this.J(this.RS,0);this.J(this.RL,0);this.
J(this.RP,0);this.J(this.Pg,0);this.J(this.RO,0);this.RM.AN=[this,this.Acz];this.
RM.Dz(A.aaL(A.ach.ACK));this.RM.AbL(A.aaL(A.ach.NM));this.RS.AN=[this,this.Acz];
this.RS.Dz(A.aaL(A.ach.AQa));this.RS.AbL(A.aaL(A.ach.NM));this.RL.AN=[this,this.
Acz];this.RL.Dz(A.aaL(A.ach.AO9));this.RL.AbL(A.aaL(A.ach.NM));this.RP.AN=[this,
this.Acz];this.RP.Dz(A.aaL(A.ach.APE));this.RP.AbL(A.aaL(A.ach.NM));this.Pg.AN=[
this,this.Acz];this.Pg.Dz(A.aaL(A.ach.ACK));this.Pg.AbL(A.aaL(A.ach.NM));this.RO.
AN=[this,this.Acz];this.RO.Dz(A.aaL(A.ach.APu));this.RO.AbL(A.aaL(A.ach.NM));},_Done:
function(){this.__proto__=C.TU;this.RM._Done();this.RS._Done();this.RL._Done();this.
RP._Done();this.Pg._Done();this.RO._Done();C.TU._Done.call(this);},_ReInit:function(
){C.TU._ReInit.call(this);this.RM._ReInit();this.RS._ReInit();this.RL._ReInit();
this.RP._ReInit();this.Pg._ReInit();this.RO._ReInit();this.RM.U(A.aaR(A.acf.Alarm
));this.RS.U(A.aaR(A.acf.ArD));this.RL.U(A.aaR(A.acf.ActionList));this.RP.U(A.aaR(
A.acf.AN3));this.Pg.U(A.aaR(A.acf.ABv));this.RO.U(A.aaR(A.acf.A5v));},_Mark:function(
D){var B;C.TU._Mark.call(this,D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.AQM={RT:null,Vm:null,RQ:null,RN:null,RR:null,AKG:function(G){A.pe([this,this.
BAO],this);A.pe([this,this.BAY],this);A.pe([this,this.BA0],this);A.pe([this,this.
BA4],this);A.pe([this,this.BA1],this);},Ia:function(G){var Cs=(C.QI.isPrototypeOf(
G)?G:null);if(!Cs)return;if(Cs===this.Vm)A._GetAutoObject(C.AX).BS(102);if(Cs===
this.RN)A._GetAutoObject(C.AX).BS(85);if(Cs===this.RQ)A._GetAutoObject(C.AX).BS(
80);if(Cs===this.RR)A._GetAutoObject(C.AX).BS(51);if(Cs===this.RT)A._GetAutoObject(
C.AX).BS(96);},BA0:function(G){var Ba=A._GetAutoObject(A.Device.Helper).ACe();A.
_GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RR.Y9(A._GetAutoObject(A.Device.Device
).Ap.Cb().toFixed());},BA4:function(G){var Ba=A._GetAutoObject(A.Device.Helper).
A5_();A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RT.Y9(A._GetAutoObject(A.
Device.Device).Ap.Cb().toFixed());},BAY:function(G){var Ba=A._GetAutoObject(A.Device.
Helper).A55();A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RQ.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BAO:function(G){var Ba=A._GetAutoObject(A.
Device.Helper).AN4();A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.RN.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BA1:function(G){var Ba=A._GetAutoObject(A.
Device.Helper).AOd();A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);this.Vm.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},_Init:function(aArg){C.TU._Init.call(this,
aArg);C.QI._Init.call(this.RT={I:this},0);C.QI._Init.call(this.Vm={I:this},0);C.
QI._Init.call(this.RQ={I:this},0);C.QI._Init.call(this.RN={I:this},0);C.QI._Init.
call(this.RR={I:this},0);this.__proto__=C.AQM;this.RT.H(Brf);this.RT.Aj(true);this.
RT.U(A.aaR(A.acf.A67));this.RT.AbI(true);this.Vm.H(Brg);this.Vm.Aj(true);this.Vm.
U(A.aaR(A.acf.AFy));this.RQ.H(Brh);this.RQ.Aj(true);this.RQ.U(A.aaR(A.acf.A6_));
this.RQ.AbI(true);this.RN.H(Bri);this.RN.Aj(true);this.RN.U(A.aaR(A.acf.ABb));this.
RN.AbI(true);this.RR.H(Brj);this.RR.Aj(true);this.RR.U(A.aaR(A.acf.ARo));this.RR.
AbI(true);this.J(this.RT,0);this.J(this.Vm,0);this.J(this.RQ,0);this.J(this.RN,0
);this.J(this.RR,0);this.RT.AN=[this,this.Acz];this.RT.Dz(A.aaL(A.ach.APT));this.
RT.AbL(A.aaL(A.ach.NM));this.Vm.AN=[this,this.Acz];this.Vm.Dz(A.aaL(A.ach.AC3));
this.RQ.AN=[this,this.Acz];this.RQ.Dz(A.aaL(A.ach.APV));this.RQ.AbL(A.aaL(A.ach.
NM));this.RN.AN=[this,this.Acz];this.RN.Dz(A.aaL(A.ach.APp));this.RN.AbL(A.aaL(A.
ach.NM));this.RR.AN=[this,this.Acz];this.RR.Dz(A.aaL(A.ach.APX));this.RR.AbL(A.aaL(
A.ach.NM));},_Done:function(){this.__proto__=C.TU;this.RT._Done();this.Vm._Done(
);this.RQ._Done();this.RN._Done();this.RR._Done();C.TU._Done.call(this);},_ReInit:
function(){C.TU._ReInit.call(this);this.RT._ReInit();this.Vm._ReInit();this.RQ._ReInit(
);this.RN._ReInit();this.RR._ReInit();this.RT.U(A.aaR(A.acf.A67));this.Vm.U(A.aaR(
A.acf.AFy));this.RQ.U(A.aaR(A.acf.A6_));this.RN.U(A.aaR(A.acf.ABb));this.RR.U(A.
aaR(A.acf.ARo));},_Mark:function(D){var B;C.TU._Mark.call(this,D);if((B=this.RT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Vm)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.RQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.ARm={Wd:function(G){this.Af9();this.ALr();this.A3Y(A.aaR(A.acf.A6L),[this,this.
Bl$],131072);this.A3Y(A.aaR(A.acf.A6K),[this,this.Bl_],16384);A._GetAutoObject(C.
BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.AM4)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dp(6);},Dw:function(G){},Aa4:function(){return C.Ajg;},Aa5:function(
){return C.AjA;},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(
A.Device.Helper).A55());},HJ:function(G){var F;C.Rx.HJ.call(this,G);if(this.AjW(
)===false){if(!!this.Fx&&((F=this.Fx,F[1].call(F[0]))===16)){this.N.Cn(A.aaL(A.ach.
AP5));this.N.Ch=[this,this.A5t];}else{this.N.Cn(A.aaL(A.ach.APN));this.N.Ch=[this
,this.A5q];}this.N.FC(A.jV);}this.N.OJ(false);this.N.OK(false);},AfU:function(){
A._GetAutoObject(C.AX).BS(81);},AfT:function(){A._GetAutoObject(C.AX).BS(82);},Bl_:
function(G){this.AFV(16384);},Bl$:function(G){this.AFV(131072);},_Init:function(
aArg){C.Rx._Init.call(this,aArg);this.__proto__=C.ARm;this.Dk(C.AOO);this.Du(A.aaR(
A.acf.A7c));this.ASs(A._GetAutoObject(C.Avr));},_ReInit:function(){C.Rx._ReInit.
call(this);this.Du(A.aaR(A.acf.A7c));},_className:"Application::NoNaisIdListScreen"
};C.ARl={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ARl;this.
Mm.Ar(false);this.Mm.Aj(false);this.Mm.Y(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.ARk={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.ARk;this.
N.B0(A.aaR(A.acf.A4t));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.
aaR(A.acf.A4t));},_className:"Application::NoNaisIdListActionsScreen"};C.AOO={D$:
function(G){C.Ka.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.Converter).
AdB(10));},_Init:function(aArg){C.Ka._Init.call(this,aArg);this.__proto__=C.AOO;
},_className:"Application::HeaderNoNaisIdListFilter"};C.QV={BeD:false,Dw:function(
G){},Cw:function(G){C.GN.Cw.call(this,G);if(this.BeD&&(A._GetAutoObject(A.Device.
Device).Ug>0))A.pe([this,this.AH6],this);},AlA:function(G){this.A5p(this);},AfU:
function(){A._GetAutoObject(C.AX).BS(83);},AfT:function(){A._GetAutoObject(C.AX).
BS(84);},ARu:function(G){throw new Error(An$);},A$X:function(s){this.ARu(s);},ARv:
function(G){throw new Error(An$);},A$Y:function(s){this.ARv(s);},ARA:function(G){
throw new Error(An$);},AH6:function(s){this.ARA(s);},BdU:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.BeD=true;
A._GetAutoObject(C.AX).BS(87);}},AfS:function(G){var B;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.Xj],[B=A._GetAutoObject(
A.Device.Device),B.Wc,B.WW],0);},Xj:function(G){var B;if(A._GetAutoObject(A.Device.
Device).Ahw===3){A._GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.
AfS]);A.z$([this,this.Xj],[B=A._GetAutoObject(A.Device.Device),B.Wc,B.WW],0);A.pe([
this,this.AH6],this);}},AI1:function(){throw new Error(An$);},A7t:function(G){A.
_GetAutoObject(A.Device.Device).Dp(0);this.A5o(this);},BmD:function(G){A._GetAutoObject(
A.Device.Device).Dp(0);this.BgX(this);},_Init:function(aArg){C.GN._Init.call(this
,aArg);this.__proto__=C.QV;this.Du(A.aaR(A.acf.A7j));},_ReInit:function(){C.GN._ReInit.
call(this);this.Du(A.aaR(A.acf.A7j));},_className:"Application::RegistrationsListScreen"
};C.ATD={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ATD;},
_className:"Application::RegistrationsListFilterScreen"};C.ATC={_Init:function(aArg
){C.Gy._Init.call(this,aArg);this.__proto__=C.ATC;this.N.B0(A.aaR(A.acf.A4v));},
_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.A4v));},_className:
"Application::RegistrationsListActionsScreen"};C.Ad8={_Init:function(aArg){C.X$.
_Init.call(this,aArg);this.__proto__=C.Ad8;this.Text.H(Brk);this.Text.R(A.jV);this.
Text.A4(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABi={MQ:0,AP:
null,A_:null,D5:null,IB:null,SF:null,Gp:null,Op:0,K4:0,Init:function(aArg){},Bh:
function(aSize){C.Bc.Bh.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IB.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IB.M[2]-1,0,this.IB.M[2]+1,aSize[1]]);this.
SF.H([this.IB.M[2],0,this.IB.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.D5.H([
this.SF.M[2]-1,0,this.SF.M[2]+1,aSize[1]]);this.Gp.H([this.SF.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Bc.Ai.call(this,Ae);this.IB.L(this.V.AQ);this.Gp.L(this.
V.AQ);this.SF.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).AjK(this.K4)){this.
V.S(A.aaL(A.fl.Hk));this.U(A$C);this.SF.R(Ra);}else{this.V.S(A.aaL(A.fl.Ah));this.
U(this.Op.toFixed());this.SF.R(A._GetAutoObject(A.Device.Helper).TB(this.MQ,0,5).
toFixed());}},Cd:function(Ad){if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){this.Op=
this.AZ.CC(Ad,1);this.K4=this.AZ.AOh(Ad,34);var Atd=this.AZ.AN_(Ad,7);this.MQ=this.
AZ.LN(Ad,26);var Ayr=this.AZ.Hz(Ad,4);var Afu=A._GetAutoObject(A.Device.Helper).
MK(Ayr,A._GetAutoObject(A.Device.Helper).Dt());this.IB.Ax(A._GetAutoObject(A.Device.
Converter).Amv(Atd));if(Afu<100)this.Gp.R((Afu.toFixed()+CL)+A.aaR(A.acf.ALf));else
this.Gp.R(A._GetAutoObject(A.acj.KE).AB_(Ayr,A._GetAutoObject(A.Device.Helper).Dt(
),AHI));this.Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.
call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A_={I:this},0);A.acg.AJ._Init.
call(this.D5={I:this},0);A.acg.An._Init.call(this.IB={I:this},0);A.acg.Text._Init.
call(this.SF={I:this},0);C.CO._Init.call(this.Gp={I:this},0);this.__proto__=C.ABi;
this.AP.H(An4);this.AP.L(A.jb.Bd);this.A_.H(An5);this.A_.L(A.jb.Bd);this.D5.H(A$D
);this.D5.L(A.jb.Bd);this.IB.H(A$E);this.IB.L(A.jb.Text);this.SF.H(AxM);this.Gp.
H(A$F);this.J(this.AP,0);this.J(this.A_,0);this.J(this.D5,0);this.J(this.IB,0);this.
J(this.SF,0);this.J(this.Gp,0);this.SF.S(A.aaL(A.fl.Ah));this.Gp.S(A.aaL(A.fl.Ah
));this.Gp.A8(A.aaL(A.fl.Ak));this.Gp.CB(A.aaL(A.fl.By));this.Init(aArg);},_Done:
function(){this.__proto__=C.Bc;this.AP._Done();this.A_._Done();this.D5._Done();this.
IB._Done();this.SF._Done();this.Gp._Done();C.Bc._Done.call(this);},_ReInit:function(
){C.Bc._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.D5._ReInit();
this.IB._ReInit();this.SF._ReInit();this.Gp._ReInit();this.SF.S(A.aaL(A.fl.Ah));
this.Gp.S(A.aaL(A.fl.Ah));this.Gp.A8(A.aaL(A.fl.Ak));this.Gp.CB(A.aaL(A.fl.By));
},_Mark:function(D){var B;C.Bc._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ACB={AjH:null,Ps:null,IW:null,_Init:
function(aArg){C.Dx._Init.call(this,aArg);A.acg.An._Init.call(this.AjH={I:this},
0);A.acg.An._Init.call(this.Ps={I:this},0);A.acg.An._Init.call(this.IW={I:this},
0);this.__proto__=C.ACB;this.AjH.H(Brl);this.AjH.L(A.jb.Text);this.Ps.H(Brm);this.
Ps.L(A.jb.Text);this.IW.H(A$t);this.IW.L(A.jb.Text);this.J(this.AjH,0);this.J(this.
Ps,0);this.J(this.IW,0);this.AjH.Ax(A.aaL(A.ach.ACZ));this.Ps.Ax(A.aaL(A.ach.Au5
));this.IW.Ax(A.aaL(A.ach.Au0));},_Done:function(){this.__proto__=C.Dx;this.AjH.
_Done();this.Ps._Done();this.IW._Done();C.Dx._Done.call(this);},_ReInit:function(
){C.Dx._ReInit.call(this);this.AjH._ReInit();this.Ps._ReInit();this.IW._ReInit();
},_Mark:function(D){var B;C.Dx._Mark.call(this,D);if((B=this.AjH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IW)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.AOQ={IH:null
,AgB:null,HK:null,Bd:null,Mt:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.D$],[B=A._GetAutoObject(A.Device.Helper).W,B.A8h,B.A9z
],0);A.zX([this,this.D$],[B=A._GetAutoObject(A.Device.Helper).W,B.Wb,B.JI],0);A.
zX([this,this.D$],[B=A._GetAutoObject(A.Device.Helper).W,B.Aq5,B.Ub],0);A.zV([this
,this.D$],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.D$],this);},C8:
function(E){C.BP.C8.call(this,E);this.IH.L(E);this.AgB.L(E);this.HK.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HK.R(A.aaR(A.
acf.AeO));else this.HK.R(((A.aaR(A.acf.GD)+A.aaR(A.acf.Colon))+CL)+E.toFixed());
},D$:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqs()){this.Awk(((A._GetAutoObject(
A.Device.Helper).W.CH+1).toFixed()+A$f)+A._GetAutoObject(A.Device.Device).Ap.Cb(
).toFixed());this.JI(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nb(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.Awk(A$g);this.JI(2);this.OnSetAnimalId(-1);this.
Nb(0);}},JI:function(E){if(this.Gender===E)return;this.Gender=E;this.AgB.Ax(A._GetAutoObject(
A.Device.Converter).Amv(E));},Awk:function(E){if(this.Mt===E)return;this.Mt=E;this.
IH.R(E);},Nb:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).AjK(E))this.HK.Y(false);else this.HK.Y(true);},_Init:
function(aArg){C.BP._Init.call(this,aArg);A.acg.Text._Init.call(this.IH={I:this}
,0);A.acg.An._Init.call(this.AgB={I:this},0);A.acg.Text._Init.call(this.HK={I:this
},0);A.acg.DR._Init.call(this.Bd={I:this},0);this.__proto__=C.AOQ;this.IH.H(A$h);
this.IH.HH(2);this.IH.KM(true);this.IH.A4(0x12);this.IH.R(A$i);this.AgB.H(Brn);this.
HK.H(Bro);this.HK.A4(0x11);this.HK.R(A.aaR(A.acf.AeO));this.Bd.DM(AxR);this.Bd.DY(
AxS);this.Bd.L(A.jb.Bd);this.J(this.IH,0);this.J(this.AgB,0);this.J(this.HK,0);this.
J(this.Bd,0);this.IH.S(A.aaL(A.fl.Ak));this.AgB.Ax(A._GetAutoObject(A.Device.Converter
).Amv(2));this.HK.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.BP;this.IH._Done();this.AgB._Done();this.HK._Done();this.Bd._Done();C.BP._Done.
call(this);},_ReInit:function(){C.BP._ReInit.call(this);this.IH._ReInit();this.AgB.
_ReInit();this.HK._ReInit();this.Bd._ReInit();this.HK.R(A.aaR(A.acf.AeO));this.IH.
S(A.aaL(A.fl.Ak));this.HK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BP._Mark.
call(this,D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.AaB={EaseOfDeliveryToString:null,Ags:null,Cd:function(G){C.Ny.Cd.call(this,G
);var AJj=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Kk(this.EaseOfDeliveryToString.
Lp(AJj));this.GP.R(this.Ags.AdY(AJj).toFixed());},C8:function(E){C.Ny.C8.call(this
,E);this.GP.L(E);},_Init:function(aArg){C.Ny._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.Ags._Init.call(this.
Ags={I:this},0);this.__proto__=C.AaB;this.U(A.aaR(A.acf.Agk));},_Done:function(){
this.__proto__=C.Ny;this.EaseOfDeliveryToString._Done();this.Ags._Done();C.Ny._Done.
call(this);},_ReInit:function(){C.Ny._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.Ags._ReInit();this.U(A.aaR(A.acf.Agk));},_Mark:function(D){var B;
C.Ny._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ags)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XA={WhereAboutsToString:null,KS:null,Cd:function(G){C.Ny.Cd.call(this,G);var
K4=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kk(this.WhereAboutsToString.
Lp(K4));this.GP.R(this.KS.AdY(K4).toFixed());},C8:function(E){C.Ny.C8.call(this,
E);this.GP.L(E);},_Init:function(aArg){C.Ny._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KS._Init.call(this.KS={
I:this},0);this.__proto__=C.XA;this.U(A.aaR(A.acf.I7));},_Done:function(){this.__proto__=
C.Ny;this.WhereAboutsToString._Done();this.KS._Done();C.Ny._Done.call(this);},_ReInit:
function(){C.Ny._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KS._ReInit(
);this.U(A.aaR(A.acf.I7));},_Mark:function(D){var B;C.Ny._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RJ={Cl:null,Z:null,Aw:null,Init:function(aArg){},Cw:function(G){var B;C.D2.Cw.
call(this,G);A.zX([this,this.Afl],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.
OnSetId],0);A.zX([this,this.Afl],[B=A._GetAutoObject(A.Device.Helper),B.UH,B.UI]
,0);A.pe([this,this.Afl],this);},EV:function(G){var B;C.D2.EV.call(this,G);A.z$([
this,this.Afl],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId],0);A.z$([this
,this.Afl],[B=A._GetAutoObject(A.Device.Helper),B.UH,B.UI],0);},E9:function(G){var
B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.
Mq(-this.Z.Bq[1]);},Dw:function(G){switch(this.Cl.CK){case 6:case 7:this.Cl.NB=true;
break;case 4:this.BeY(4);break;case 5:this.BeY(5);break;default:;}},BeY:function(
Gq){var B;switch(Gq){case 5:{var Cy=this.Z.Bq[1]-40;if(Cy<-(((B=this.Z.Db(0x1))[
3]-B[1])-((B=this.Z.M)[3]-B[1])))Cy=-(((B=this.Z.Db(0x1))[3]-B[1])-((B=this.Z.M)[
3]-B[1]));if(Cy>0)Cy=0;this.Z.Gh([this.Z.Bq[0],Cy]);}break;case 4:{var Cy=this.Z.
Bq[1]+40;if(Cy>0)Cy=0;this.Z.Gh([this.Z.Bq[0],Cy]);}break;default:throw new Error(
Brp);}},Gw:function(G){var B;var X=this.Z.Ag;var Aa;while(!!X&&!((X.T&0x200)===0x200
)){if(((X.T&0x400)===0x400)){Aa=(C.IS.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Cd(this
);}X=X.Ag;}},Afl:function(s){this.Gw(s);},ML:function(G){var B;this.Z.Vb(null,null
);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},
G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.D2._Init.call(
this,aArg);A.Core.BJ._Init.call(this.Cl={I:this},0);A.Core.Z._Init.call(this.Z={
I:this},0);C.Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.RJ;this.Cl.Filter=
147;this.Z.H(SW);this.Z.Kf(1);this.Aw.H(Ask);this.J(this.Z,0);this.J(this.Aw,0);
this.Cl.BK=[this,this.Dw];this.Cl.DS=[this,this.Dw];this.Z.Ej=[this,this.G8];this.
Init(aArg);},_Done:function(){this.__proto__=C.D2;this.Cl._Done();this.Z._Done();
this.Aw._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.call(this
);this.Cl._ReInit();this.Z._ReInit();this.Aw._ReInit();},_Mark:function(D){var B;
C.D2._Mark.call(this,D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRowInfos"};C.XB={Aav:null,Xx:null,Aaw:null,Xy:null
,AaB:null,XA:null,_Init:function(aArg){C.RJ._Init.call(this,aArg);C.Aav._Init.call(
this.Aav={I:this},0);C.Xx._Init.call(this.Xx={I:this},0);C.Aaw._Init.call(this.Aaw={
I:this},0);C.Xy._Init.call(this.Xy={I:this},0);C.AaB._Init.call(this.AaB={I:this
},0);C.XA._Init.call(this.XA={I:this},0);this.__proto__=C.XB;this.Aav.H(BC);this.
Aav.Aj(true);this.Xx.H(JQ);this.Xx.Aj(true);this.Xx.Bg(true);this.Aaw.H(P1);this.
Aaw.Aj(true);this.Xy.H(ZR);this.Xy.Aj(true);this.Xy.Bg(true);this.AaB.H(AkR);this.
AaB.Aj(true);this.XA.H(An1);this.XA.Aj(true);this.XA.Bg(true);this.J(this.Aav,0);
this.J(this.Xx,0);this.J(this.Aaw,0);this.J(this.Xy,0);this.J(this.AaB,0);this.J(
this.XA,0);},_Done:function(){this.__proto__=C.RJ;this.Aav._Done();this.Xx._Done(
);this.Aaw._Done();this.Xy._Done();this.AaB._Done();this.XA._Done();C.RJ._Done.call(
this);},_ReInit:function(){C.RJ._ReInit.call(this);this.Aav._ReInit();this.Xx._ReInit(
);this.Aaw._ReInit();this.Xy._ReInit();this.AaB._ReInit();this.XA._ReInit();},_Mark:
function(D){var B;C.RJ._Mark.call(this,D);if((B=this.Aav)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Xx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalRegistrationInfos"};C.Xy={BreedToString:null,GP:null,MY:null
,Cd:function(G){C.Iu.Cd.call(this,G);var Bu=A._GetAutoObject(A.Device.Helper).W.
Breed;this.U(this.BreedToString.BQ(Bu));this.GP.R(this.MY.AdY(Bu).toFixed());},C8:
function(E){C.Iu.C8.call(this,E);this.GP.L(E);},_Init:function(aArg){C.Iu._Init.
call(this,aArg);A.Device.BreedToString._Init.call(this.BreedToString={I:this},0);
A.acg.Text._Init.call(this.GP={I:this},0);A.Device.MY._Init.call(this.MY={I:this
},0);this.__proto__=C.Xy;this.BR.H(Brq);this.GP.H(Brr);this.GP.HH(5);this.GP.A4(
0x14);this.GP.R(Brs);this.GP.L(A.jb.Text);this.J(this.GP,0);this.Hm.Ax(A.aaL(A.ach.
ACQ));this.GP.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Iu;this.BreedToString.
_Done();this.GP._Done();this.MY._Done();C.Iu._Done.call(this);},_ReInit:function(
){C.Iu._ReInit.call(this);this.BreedToString._ReInit();this.GP._ReInit();this.MY.
_ReInit();this.GP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Iu._Mark.call(this
,D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoIconItemBreed"};C.Aaw={Cd:function(G){C.Iu.Cd.call(this,
G);var AzA=A._GetAutoObject(A.Device.Helper).W.NaisIdMother;if(AzA>0)this.U(A._GetAutoObject(
A.Device.Converter).SK(AzA));else this.U(A.aaR(A.acf.Unknown));},_Init:function(
aArg){C.Iu._Init.call(this,aArg);this.__proto__=C.Aaw;this.Hm.Ax(A.aaL(A.ach.APv
));},_className:"Application::AnimalInfoIconItemNaisIdMother"};C.Xx={Ye:null,Cd:
function(G){C.Iu.Cd.call(this,G);var S5=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;
var Afz=A._GetAutoObject(A.Device.Helper).W.BirthType;if(S5>0)this.U(A._GetAutoObject(
A.acj.KE).Aju(S5));else this.U(A.aaR(A.acf.Unknown));var Ayt=A.aaL(A.aci.Tz);switch(
Afz){case 0:Ayt=A.aaL(A.ach.ACN);break;case 1:{Ayt=A.aaL(A.ach.Au1);this.Ye.Cu(0
);}break;case 2:{Ayt=A.aaL(A.ach.Au1);this.Ye.Cu(1);}break;case 3:{Ayt=A.aaL(A.ach.
Au1);this.Ye.Cu(2);}break;default:A.ab5("%s%e",Brt,Afz);}this.Ye.Ax(Ayt);},_Init:
function(aArg){C.Iu._Init.call(this,aArg);A.acg.An._Init.call(this.Ye={I:this},0
);this.__proto__=C.Xx;this.BR.H(Bru);this.Ye.H(AHe);this.Ye.L(A.jb.Text);this.J(
this.Ye,0);this.Hm.Ax(A.aaL(A.ach.Au0));this.Ye.Ax(A.aaL(A.ach.ACN));},_Done:function(
){this.__proto__=C.Iu;this.Ye._Done();C.Iu._Done.call(this);},_ReInit:function(){
C.Iu._ReInit.call(this);this.Ye._ReInit();},_Mark:function(D){var B;C.Iu._Mark.call(
this,D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBirth"
};C.Aav={MQ:0,Xz:null,K4:0,Bh:function(aSize){C.Iu.Bh.call(this,aSize);this.Xz.H(
this.Hm.M);},Ai:function(Ae){C.Iu.Ai.call(this,Ae);this.Xz.L(this.BR.AQ);if(A._GetAutoObject(
A.Device.Helper).AjK(this.K4)){this.U(A.aaR(A.acf.AnimalLoss));this.Hm.Y(false);
this.Xz.Y(true);}else if(this.MQ>0){this.U(A._GetAutoObject(A.Device.Converter).
SK(this.MQ));this.Hm.Y(true);this.Xz.Y(false);}else{this.U(A.aaR(A.acf.Unknown));
this.Hm.Y(true);this.Xz.Y(false);}},Cd:function(G){C.Iu.Cd.call(this,G);this.MQ=
A._GetAutoObject(A.Device.Helper).W.NaisId;this.K4=A._GetAutoObject(A.Device.Helper
).W.WhereAbouts;this.Am();},_Init:function(aArg){C.Iu._Init.call(this,aArg);A.acg.
Text._Init.call(this.Xz={I:this},0);this.__proto__=C.Aav;this.Xz.R(A$C);this.J(this.
Xz,0);this.Hm.Ax(A.aaL(A.ach.Au5));this.Xz.S(A.aaL(A.fl.Hk));},_Done:function(){
this.__proto__=C.Iu;this.Xz._Done();C.Iu._Done.call(this);},_ReInit:function(){C.
Iu._ReInit.call(this);this.Xz._ReInit();},_Mark:function(D){var B;C.Iu._Mark.call(
this,D);if((B=this.Xz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"
};C.ALS={XB:null,Init:function(aArg){var B;A.zX([this,this.AzS],[B=A._GetAutoObject(
A.Device.Device),B.ADQ,B.AH_],0);A.pe([this,this.AzS],this);},Dw:function(G){var
DW=(A.Core.BJ.isPrototypeOf(G)?G:null);switch(DW.CK){case 6:this.Oi(this);break;
case 7:this.MS(this);break;default:DW.NB=true;}},Cw:function(G){var B;this.XB.Cw(
this);C.AB.Cw.call(this,G);},EV:function(G){var B;this.XB.EV(this);C.AB.EV.call(
this,G);},Am1:function(G){A._GetAutoObject(C.AX).Fl();},Xi:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MS:function(G){if(A._GetAutoObject(A.Device.
Device).Ap.Cb()<=1)return;var Lx=A._GetAutoObject(A.Device.Helper).W.CH;Lx=Lx+1;
if(Lx>=A._GetAutoObject(A.Device.Device).Ap.Cb())Lx=0;A._GetAutoObject(A.Device.
Helper).HF(Lx);},Oi:function(G){if(A._GetAutoObject(A.Device.Device).Ap.Cb()<=1)
return;var Lx=A._GetAutoObject(A.Device.Helper).W.CH;Lx=Lx-1;if(Lx<0)Lx=A._GetAutoObject(
A.Device.Device).Ap.Cb()-1;A._GetAutoObject(A.Device.Helper).HF(Lx);},AzS:function(
G){if(!A._GetAutoObject(A.Device.Device).ApZ)A._GetAutoObject(C.AX).Aha(85);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XB._Init.call(this.XB={I:this},0);this.
__proto__=C.ALS;this.Background.H(Ca);this.N.Y(true);this.N.OJ(true);this.N.OK(true
);this.Dk(C.AOQ);this.XB.H(E4);this.J(this.XB,0);this.N.Cv=[this,this.Am1];this.
N.Ch=[this,this.Xi];this.N.CS(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.Abc));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XB._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XB._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XB)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.Iu={Hm:null,BR:null
,U:function(E){C.IS.U.call(this,E);this.BR.R(this.DE);},C8:function(E){C.IS.C8.call(
this,E);this.Hm.L(E);this.BR.L(E);},_Init:function(aArg){C.IS._Init.call(this,aArg
);A.acg.An._Init.call(this.Hm={I:this},0);C.CO._Init.call(this.BR={I:this},0);this.
__proto__=C.Iu;this.Hm.H(Brv);this.Hm.L(A.jb.Text);this.BR.H(Brw);this.BR.A4(0x11
);this.BR.L(A.jb.Text);this.J(this.Hm,0);this.J(this.BR,0);this.Hm.Ax(A.aaL(A.aci.
Tz));this.BR.S(A.aaL(A.fl.Ah));this.BR.A8(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IS;this.Hm._Done();this.BR._Done();C.IS._Done.call(this);},_ReInit:function(
){C.IS._ReInit.call(this);this.Hm._ReInit();this.BR._ReInit();this.BR.S(A.aaL(A.
fl.Ah));this.BR.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IS._Mark.call(this
,D);if((B=this.Hm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BR)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IS={Background:null
,KN:0,Hb:false,CT:function(){this.Cd(this);},Init:function(aArg){var B;A.zX([this
,this.BaG],[B=A._GetAutoObject(A.Device.Helper).W,B.QP,B.OnSetId],0);A.pe([this,
this.BaG],this);},Bh:function(aSize){C.G_.Bh.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.G_.Ai.call(this,Ae);if(this.
Hb)this.Background.L(A.jb.Bj);else this.Background.L(A.jb.CF);},Cd:function(G){}
,BaG:function(s){this.Cd(s);},Bg:function(E){if(this.Hb===E)return;this.Hb=E;this.
Am();},C8:function(E){if(this.KN===E)return;this.KN=E;},_Init:function(aArg){C.G_.
_Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);this.__proto__=
C.IS;this.H(BC);this.Background.H(AHK);this.KN=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.G_;this.Background._Done(
);C.G_._Done.call(this);},_ReInit:function(){C.G_._ReInit.call(this);this.Background.
_ReInit();this.CT();},_Mark:function(D){var B;C.G_._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.Ny={GP:null,BzC:function(G){this.BR.H(A.abN(this.BR.M,this.GP.M[0]));},_Init:
function(aArg){C.Fk._Init.call(this,aArg);A.acg.Text._Init.call(this.GP={I:this}
,0);this.__proto__=C.Ny;this.GP.AY(0xA);this.GP.H(Brx);this.GP.HH(5);this.GP.I0(
true);this.GP.A4(0x14);this.GP.R(A.jV);this.GP.L(A.jb.Text);this.J(this.GP,0);this.
GP.QT([this,this.BzC]);this.GP.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Fk;this.GP._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(
this);this.GP._ReInit();this.GP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fk.
_Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.AwD={AQp:null,_Init:function(aArg){C.Za._Init.call(this,aArg);this.__proto__=
C.AwD;},_Mark:function(D){var B;C.Za._Mark.call(this,D);if((B=this.AQp)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.AMY={Wa:null,Wt:0,Av6:function(E){C.Amh.Av6.call(this,E);if(E)this.Pi.R(Bry);
else this.Pi.R(A$G);},Bl0:function(E){if(A.aaZ(this.Wa,E))return;if(!!this.Wa)A.
z$([this,this.A2t],this.Wa,0);this.Wa=E;if(!!E)A.zX([this,this.A2t],E,0);if(!!E)
A.pe([this,this.A2t],this);},AE6:function(E){var F;if(this.Wt===E)return;this.Wt=
E;this.Av6(!!this.Wa&&((F=this.Wa,F[1].call(F[0]))===E));},A2t:function(G){var F;
this.Av6(!!this.Wa&&((F=this.Wa,F[1].call(F[0]))===this.Wt));},_Init:function(aArg
){C.Amh._Init.call(this,aArg);this.__proto__=C.AMY;this.Pi.R(A$G);this.Pi.S(A.aaL(
A.fl.Hk));},_Mark:function(D){var B;C.Amh._Mark.call(this,D);if((B=this.Wa)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.AwF={Wa:null,Wt:0,_Init:function(aArg){C.Za._Init.call(this,aArg);this.__proto__=
C.AwF;},_Mark:function(D){var B;C.Za._Mark.call(this,D);if((B=this.Wa)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATf={GE:null,_Init:function(aArg){C.Cq._Init.call(this,aArg);C.Q0._Init.call(
this.GE={I:this},0);this.__proto__=C.ATf;var B;this.JJ(A.aaR(A.acf.AB0));this.GE.
H(AhD);this.GE.Aj(true);this.GE.Y(true);this.GE.U(A.aaR(A.acf.AFw));this.GE.Arr(
false);this.GE.A9w(true);this.J(this.GE,0);this.GE.Aex([B=this.GE,B.FJ]);this.GE.
Gg([this,this.D3,this.GG]);this.GE.Akc(A.aaL(A.ach.Edit));this.GE.At([B=A._GetAutoObject(
A.Device.Device),B.ARW,B.AZr]);},_Done:function(){this.__proto__=C.Cq;this.GE._Done(
);C.Cq._Done.call(this);},_ReInit:function(){C.Cq._ReInit.call(this);this.GE._ReInit(
);this.JJ(A.aaR(A.acf.AB0));this.GE.U(A.aaR(A.acf.AFw));},_Mark:function(D){var B;
C.Cq._Mark.call(this,D);if((B=this.GE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATd={Gx:0,C3:null,A1:null,Kb:null,EZ:null
,GermanStateToString:null,CountryToString:null,Pp:0,K6:0,L4:false,Init:function(
aArg){A.zX([this,this.MC],[this,this.Sm,this.Lk],0);A.zX([this,this.MC],[this,this.
Am4,this.Ag7],0);},Ai:function(Ae){C.Ed.Ai.call(this,Ae);this.A1.FB(this.LM);this.
Kb.FB(this.LM);this.EZ.C1(this.LM);},DD:function(G){var F;if(!this.N)return;switch(
this.A5){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=
this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=
this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[
1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[
0])).B0(this.CountryToString.BQ(this.K6));(F=this.N,F[1].call(F[0])).Cc=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])
).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0]
)).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(
F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).B0((A.aaR(A.acf.Go
)+Axr)+this.GermanStateToString.Lp(A._GetAutoObject(A.Device.Converter).AB$(this.
Pp)));(F=this.N,F[1].call(F[0])).Cc=null;}break;default:{(F=this.N,F[1].call(F[0
])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(
F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}}
,Ep:function(EF){var Ta=this.A5;if(EF<0)EF=0;else if(EF>this.Rs)EF=this.Rs;switch(
EF){case 0:{this.A9(null);if(!this.Gx&&!this.Pp)this.Lk(0);}break;case 1:this.A9(
this.EZ);break;case 2:this.A9(this.Kb);break;case 3:if(((Ta===2)&&!this.Pp)&&!this.
Gx)return;else{this.A9(this.A1);if(!this.Gx||(Ta>0))this.A1.Sv(2);else this.A1.Sv(
7);}break;default:throw new Error(AsH+EF.toFixed());}this.A5=EF;C.Ed.Ep.call(this
,EF);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L4=true;this.Sn(A._GetAutoObject(
A.Device.Helper).TB(E,0,10));this.Ag7(A._GetAutoObject(A.Device.Helper).TB(E,10,
2)|0);this.Lk(A._GetAutoObject(A.Device.Converter).Acg(E));this.L4=false;if(!!this.
AK){this.Kb.Kg(2);this.A1.Kg(10);}else{this.Kb.Kg(0);this.A1.Kg(0);}this.Am();},
FJ:function(G){var F;if(!this.AK){var BO=this.AK;this.Bx(A._GetAutoObject(A.Device.
Helper).ACk());if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.
abo(this.Q,0);}this.Ep(2);}else this.Ep(this.Rs);},Ajv:function(){return this.Gx;
},Ajx:function(){return 9999999999;},Lk:function(E){if(this.K6===E)return;this.K6=
E;if(this.L4===false)A.pe([this,this.U4],this);A.abo([this,this.Sm,this.Lk],0);}
,Sn:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false)A.pe([this,this.
U4],this);A.abo([this,this.AbB,this.Sn],0);},U4:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Ap7(this.K6),3,10)+A.abl(this.Pp,2,10))+
A.abm(this.Gx,10,10);var BO=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Ag7:function(
E){if(this.Pp===E)return;this.Pp=E;if(this.L4===false)A.pe([this,this.U4],this);
A.abo([this,this.Am4,this.Ag7],0);},Sm:function(){return this.K6;},AbB:function(
){return this.Gx;},Am4:function(){return this.Pp;},_Init:function(aArg){C.Ed._Init.
call(this,aArg);C.C3._Init.call(this.C3={I:this},0);C.AQj._Init.call(this.A1={I:
this},0);C.Avd._Init.call(this.Kb={I:this},0);C.Ar9._Init.call(this.EZ={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATd;var B;this.Rs=3;this.A1.H(Brz);this.Kb.H(BrA);this.Kb.E1(16);this.EZ.H(A$H
);this.J(this.A1,0);this.J(this.Kb,0);this.J(this.EZ,0);this.C3.AEi([this,this.Sm
,this.Lk]);this.A1.At([this,this.AbB,this.Sn]);this.Kb.At([this,this.Am4,this.Ag7
]);this.EZ.CG(this.C3);this.EZ.At([B=this.C3,B.B9,B.B_]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ed;this.C3._Done();this.A1._Done();this.Kb._Done();this.
EZ._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ed._Done.
call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.C3._ReInit();this.A1.
_ReInit();this.Kb._ReInit();this.EZ._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ed._Mark.call(this,D);
if((B=this.C3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQj={NE:null,ND:null,EQ:null,F_:null,Eh:null,Dr:null,CQ:null,Cp:null,FB:function(
E){if(this.M2===E)return;C.Lc.FB.call(this,E);this.Cp.C1(E);this.CQ.C1(E);this.Dr.
C1(E);this.Eh.C1(E);this.F_.C1(E);this.EQ.C1(E);this.ND.C1(E);this.NE.C1(E);},X9:
function(Hq){var B4=null;switch(Hq){case-1:case 0:B4=this.FO;break;case 1:B4=this.
Cp;break;case 2:B4=this.CQ;break;case 3:B4=this.Dr;break;case 4:B4=this.Eh;break;
case 5:B4=this.F_;break;case 6:B4=this.EQ;break;case 7:B4=this.ND;break;case 8:B4=
this.NE;break;case 9:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;},_Init:
function(aArg){C.Lc._Init.call(this,aArg);C.DF._Init.call(this.NE={I:this},0);C.
DF._Init.call(this.ND={I:this},0);C.DF._Init.call(this.EQ={I:this},0);C.DF._Init.
call(this.F_={I:this},0);C.DF._Init.call(this.Eh={I:this},0);C.DF._Init.call(this.
Dr={I:this},0);C.DF._Init.call(this.CQ={I:this},0);C.DF._Init.call(this.Cp={I:this
},0);this.__proto__=C.AQj;this.H(BrB);this.GO.H(AH1);this.NE.H(AxU);this.ND.H(AY5
);this.EQ.H(AY6);this.F_.H(AY7);this.Eh.H(AY8);this.Dr.H(AY9);this.CQ.H(AY_);this.
Cp.H(A$o);this.FO.H(AY$);this.ED.H(AY$);this.J(this.NE,-2);this.J(this.ND,-2);this.
J(this.EQ,-2);this.J(this.F_,-2);this.J(this.Eh,-2);this.J(this.Dr,-2);this.J(this.
CQ,-2);this.J(this.Cp,-2);this.NE.Dj=[this,this.GI];this.ND.Dj=[this,this.GI];this.
EQ.Dj=[this,this.GI];this.F_.Dj=[this,this.GI];this.Eh.Dj=[this,this.GI];this.Dr.
Dj=[this,this.GI];this.CQ.Dj=[this,this.GI];this.Cp.Dj=[this,this.GI];},_Done:function(
){this.__proto__=C.Lc;this.NE._Done();this.ND._Done();this.EQ._Done();this.F_._Done(
);this.Eh._Done();this.Dr._Done();this.CQ._Done();this.Cp._Done();C.Lc._Done.call(
this);},_ReInit:function(){C.Lc._ReInit.call(this);this.NE._ReInit();this.ND._ReInit(
);this.EQ._ReInit();this.F_._ReInit();this.Eh._ReInit();this.Dr._ReInit();this.CQ.
_ReInit();this.Cp._ReInit();},_Mark:function(D){var B;C.Lc._Mark.call(this,D);if((
B=this.NE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATe={
Gx:0,C3:null,A1:null,EZ:null,CountryToString:null,K6:0,L4:false,Init:function(aArg
){A.zX([this,this.MC],[this,this.Sm,this.Lk],0);},Ai:function(Ae){C.Ed.Ai.call(this
,Ae);this.A1.FB(this.LM);this.EZ.C1(this.LM);},DD:function(G){var F;if(!this.N)return;
switch(this.A5){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU
));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).B0(this.CountryToString.BQ(this.K6));(F=this.N,F[1].call(F[0])).Cc=null;}
break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(
F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(
F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=
null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).B0(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}}},Ep:function(EF){var Ta=this.A5;if(EF<0)EF=0;
else if(EF>this.Rs)EF=this.Rs;switch(EF){case 0:{this.A9(null);if(!this.Gx)this.
Lk(0);}break;case 1:this.A9(this.EZ);break;case 2:{this.A9(this.A1);if(!this.Gx||(
Ta>0))this.A1.Sv(2);else this.A1.Sv(7);}break;default:throw new Error(AsH+EF.toFixed(
));}this.A5=EF;C.Ed.Ep.call(this,EF);},Bx:function(E){if(this.AK===E)return;this.
AK=E;this.L4=true;this.Sn(A._GetAutoObject(A.Device.Helper).TB(E,0,12));this.Lk(
A._GetAutoObject(A.Device.Converter).Acg(E));this.L4=false;if(!!this.AK)this.A1.
Kg(12);else this.A1.Kg(0);this.Am();},FJ:function(G){var F;if(!this.AK){var BO=this.
AK;this.Bx(A._GetAutoObject(A.Device.Helper).ACk());if(this.AK!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}this.Ep(this.Rs);},Ajv:function(
){return this.Gx;},Ajx:function(){return 999999999999;},Lk:function(E){if(this.K6===
E)return;this.K6=E;if(this.L4===false)A.pe([this,this.U4],this);A.abo([this,this.
Sm,this.Lk],0);},Sn:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false
)A.pe([this,this.U4],this);A.abo([this,this.AbB,this.Sn],0);},U4:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Ap7(this.K6),3,10)+A.abm(
this.Gx,12,10);var BO=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Sm:function(){return this.
K6;},AbB:function(){return this.Gx;},_Init:function(aArg){C.Ed._Init.call(this,aArg
);C.C3._Init.call(this.C3={I:this},0);C.AC5._Init.call(this.A1={I:this},0);C.Ar9.
_Init.call(this.EZ={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATe;var B;this.Rs=2;this.A1.H(BrC);this.EZ.H(A$H);this.
J(this.A1,0);this.J(this.EZ,0);this.C3.AEi([this,this.Sm,this.Lk]);this.A1.At([this
,this.AbB,this.Sn]);this.EZ.CG(this.C3);this.EZ.At([B=this.C3,B.B9,B.B_]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ed;this.C3._Done();this.A1._Done();this.
EZ._Done();this.CountryToString._Done();C.Ed._Done.call(this);},_ReInit:function(
){C.Ed._ReInit.call(this);this.C3._ReInit();this.A1._ReInit();this.EZ._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ed._Mark.call(this,D);
if((B=this.C3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DP:null,Z:null,Aw:null,XR:null,XS:null,XQ:null,XO:null,XP:null,Dw:function(
G){var B;C.AB.Dw.call(this,G);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(
this.AR,true,null,null);},Cw:function(G){C.AB.Cw.call(this,G);A._GetAutoObject(A.
Device.Device).Ap.Bi(null);A._GetAutoObject(A.Device.Device).Br.Bi(null);A._GetAutoObject(
A.Device.Helper).Akr();A._GetAutoObject(A.Device.Helper).ArR();},Ia:function(G){
var Cs=(C.Fc.isPrototypeOf(G)?G:null);if(!Cs)return;if(Cs===this.XR)A._GetAutoObject(
C.AX).BS(28);else if(Cs===this.XS)A._GetAutoObject(C.AX).BS(26);else if(Cs===this.
XQ)A._GetAutoObject(C.AX).BS(62);else if(Cs===this.XO)A._GetAutoObject(C.AX).BS(
27);else if(Cs===this.XP)A._GetAutoObject(C.AX).BS(89);},A2x:function(G){A._GetAutoObject(
C.AX).Fl();},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.
Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},G8:function(G){A.pe([this,this.
E9],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ._Init.call(
this.DP={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw._Init.call(this.
Aw={I:this},0);C.Fc._Init.call(this.XR={I:this},0);C.Fc._Init.call(this.XS={I:this
},0);C.Fc._Init.call(this.XQ={I:this},0);C.Fc._Init.call(this.XO={I:this},0);C.Fc.
_Init.call(this.XP={I:this},0);this.__proto__=C.NewMenu;this.Background.L(A.jb.C0
);this.N.Y(true);this.N.B0(A.jV);this.Ec.Ar(false);this.Dk(C.Aqu);this.DP.AY(0x3F
);this.DP.H(E4);this.DP.L(A.jb.CF);this.Z.H(E4);this.Z.Kf(9);this.Aw.H(IK);this.
XR.H(PY);this.XR.Aj(true);this.XR.U(A.aaR(A.acf.A65));this.XS.H(AZe);this.XS.Aj(
true);this.XS.U(A.aaR(A.acf.NewAnimals));this.XQ.H(N8);this.XQ.Aj(true);this.XQ.
U(A.aaR(A.acf.Calving));this.XO.H(PZ);this.XO.Aj(true);this.XO.U(A.aaR(A.acf.ABg
));this.XP.H(MB);this.XP.Aj(true);this.XP.U(A.aaR(A.acf.AnimalLoss));this.J(this.
DP,0);this.J(this.Z,0);this.J(this.Aw,0);this.J(this.XR,0);this.J(this.XS,0);this.
J(this.XQ,0);this.J(this.XO,0);this.J(this.XP,0);this.N.Cv=[this,this.A2x];this.
N.CS(A.aaL(A.ach.EU));this.Z.Ej=[this,this.G8];this.XR.AN=[this,this.Ia];this.XR.
Dz(A.aaL(A.ach.AC0));this.XS.AN=[this,this.Ia];this.XS.Dz(A.aaL(A.ach.Au9));this.
XQ.AN=[this,this.Ia];this.XQ.Dz(A.aaL(A.ach.APo));this.XO.AN=[this,this.Ia];this.
XO.Dz(A.aaL(A.ach.APl));this.XP.AN=[this,this.Ia];this.XP.Dz(A.aaL(A.ach.APe));}
,_Done:function(){this.__proto__=C.AB;this.DP._Done();this.Z._Done();this.Aw._Done(
);this.XR._Done();this.XS._Done();this.XQ._Done();this.XO._Done();this.XP._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DP._ReInit(
);this.Z._ReInit();this.Aw._ReInit();this.XR._ReInit();this.XS._ReInit();this.XQ.
_ReInit();this.XO._ReInit();this.XP._ReInit();this.XR.U(A.aaR(A.acf.A65));this.XS.
U(A.aaR(A.acf.NewAnimals));this.XQ.U(A.aaR(A.acf.Calving));this.XO.U(A.aaR(A.acf.
ABg));this.XP.U(A.aaR(A.acf.AnimalLoss));},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewMenu"};C.
ARc={KZ:null,EaseOfDelivery:null,BirthType:null,Aco:null,Lg:null,Cm:null,GU:null
,Le:null,Ay4:true,Init:function(aArg){this.A9(this.C7);A.pe([this,this.Gw],this);
},Eo:function(G){var B;A._GetAutoObject(A.Device.Helper).W.Hd();A._GetAutoObject(
C.AX).Fl();if(!!this.KZ)this.KZ.Eo(this);},AfR:function(G){var B;var F;A._GetAutoObject(
A.Device.Helper).W.DT((F=this.BW.Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Helper
).W.Av7(true);if(!!this.KZ)this.KZ.AfR(this);if(A._GetAutoObject(A.Device.Device
).Ap.Ld())A._GetAutoObject(A.Device.Helper).AJG(A._GetAutoObject(A.Device.Helper
).W,5,5,0,[this,this.Apg]);else{this.AiH();A.pe([this,this.ApF],this);}},AtH:function(
){this.N.B0(A.jV);this.N.C2(A.aaL(A.ach.AC4));this.N.Cc=[this,this.Ax_];},Cw:function(
G){var B;C.HT.Cw.call(this,G);if(A._GetAutoObject(A.Device.Device).Ap.Ld()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).Ap.HA().toFixed(),
0,null);this.Eo(this);}else if(this.Ay4){this.Ay4=false;A.pe([this,this.A2L],this
);}else if(!this.KZ){this.KZ=A._NewObject(C.ARd,0);this.KZ.A84([this,this.AAe]);
A._GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(A.Device.Helper).ApT(A.
_GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.Helper).W.Nb(this.Ash.
AdY(6));this.KZ.LJ(this);if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.
Eo(this);}},AiH:function(){A._GetAutoObject(A.Device.Helper).W.Ck(A._GetAutoObject(
A.Device.Device).Ap);var L1=A._GetAutoObject(A.Device.Device).Ap.K_(0,A._GetAutoObject(
A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Device).Sw(L1);if(A._GetAutoObject(
A.Device.Helper).AmH()){if(A._GetAutoObject(A.Device.Device).Br.Ld())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),
0,null);else{var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);BZ.OnSetBodyWeight(this.KC);BZ.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);BZ.Ck(A._GetAutoObject(A.Device.Device).Br);}}A.
_GetAutoObject(A.Device.Helper).A5$(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},ApF:function(G){var B;if(!!this.KZ)this.KZ.ApF(this);},Gw:function(G){if(
A._GetAutoObject(A.Device.Helper).AmH())this.C6.Y(true);else this.C6.Y(false);},
Apg:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Asu,As.Id);}},AAe:function(G){this.
LJ(this);this.Aez(A._GetAutoObject(A.Device.Helper).Aa2(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.Jx(this.C7);},Aph:function(G){var F;C.HT.Aph.call(this
,G);(F=this.C6.Q,F[2].call(F[0],this.C6.Any));},A2L:function(G){A._GetAutoObject(
C.AX).BS(90);},_Init:function(aArg){C.HT._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Aco._Init.call(this.Aco={I:this},0);C.Q0._Init.call(this.Lg={I:this
},0);C.Sy._Init.call(this.Cm={I:this},0);C.BX._Init.call(this.GU={I:this},0);C.BX.
_Init.call(this.Le={I:this},0);this.__proto__=C.ARc;var B;this.Dk(C.AON);this.Lg.
H(AhD);this.Lg.Aj(true);this.Lg.U(A.aaR(A.acf.ABF));this.CD.H(Acv);this.Cm.H(Acv
);this.Cm.Aj(true);this.Cm.U(A.aaR(A.acf.AdT));this.Cm.AEY(true);this.GU.H(Acv);
this.GU.Aj(true);this.GU.U(A.aaR(A.acf.AqU));this.Le.H(Acv);this.Le.Aj(true);this.
Le.U(A.aaR(A.acf.Agk));this.J(this.Lg,-4);this.J(this.Cm,-2);this.J(this.GU,0);this.
J(this.Le,0);this.EaseOfDelivery.LU(A._GetAutoObject(A.Device.Helper).W);this.BirthType.
LU(A._GetAutoObject(A.Device.Helper).W);this.Aco.LU(A._GetAutoObject(A.Device.Helper
).W);this.Lg.Gg([this,this.D3,this.GG]);this.Lg.At([B=A._GetAutoObject(A.Device.
Helper).W,B.ARS,B.Ang]);this.Cm.Gg([this,this.D3,this.GG]);this.Cm.LT([B=this.Cm
,B.FJ]);this.Cm.LV(A.aaL(A.ach.Edit));this.Cm.AbN([B=A._GetAutoObject(A.Device.Helper
).W,B.Avy,B.QR]);this.Gb.At([B=this.Aco,B.B9,B.B_]);this.Gb.CG(this.Aco);this.GU.
At([B=this.BirthType,B.B9,B.B_]);this.GU.CG(this.BirthType);this.Le.At([B=this.EaseOfDelivery
,B.B9,B.B_]);this.Le.CG(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HT;this.EaseOfDelivery._Done();this.BirthType._Done();this.Aco.
_Done();this.Lg._Done();this.Cm._Done();this.GU._Done();this.Le._Done();C.HT._Done.
call(this);},_ReInit:function(){C.HT._ReInit.call(this);this.EaseOfDelivery._ReInit(
);this.BirthType._ReInit();this.Aco._ReInit();this.Lg._ReInit();this.Cm._ReInit(
);this.GU._ReInit();this.Le._ReInit();this.Lg.U(A.aaR(A.acf.ABF));this.Cm.U(A.aaR(
A.acf.AdT));this.GU.U(A.aaR(A.acf.AqU));this.Le.U(A.aaR(A.acf.Agk));},_Mark:function(
D){var B;C.HT._Mark.call(this,D);if((B=this.KZ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Lg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Le)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"};C.ALU={Init:function(
aArg){var B;A.zX([this,this.Bfv],[B=A._GetAutoObject(A.Device.Device),B.ADX,B.AId
],0);A.pe([this,this.Bfv],this);},AKb:function(){var Ba=null;switch(A._GetAutoObject(
A.Device.Device).Abx){case 0:Ba=A._GetAutoObject(A.Device.Helper).ACb();break;case
1:Ba=A._GetAutoObject(A.Device.Helper).AN6();break;case 2:Ba=A._GetAutoObject(A.
Device.Helper).Mj();break;default:throw new Error(AZf+A._GetAutoObject(A.Device.
Device).Abx.toFixed());}A._GetAutoObject(A.Device.Device).Ap.Bi(Ba);},Bfv:function(
G){switch(A._GetAutoObject(A.Device.Device).Abx){case 0:this.Du(A.aaR(A.acf.ARi)
);break;case 1:this.Du(A.aaR(A.acf.Bi0));break;case 2:this.Du(A.aaR(A.acf.Avq));
break;default:A.ab5("%s",AZf+A._GetAutoObject(A.Device.Device).Abx.toFixed());}}
,_Init:function(aArg){C.Al7._Init.call(this,aArg);this.__proto__=C.ALU;this.BlT(
C.AO2);this.Ec.AbJ(A._NewObject(C.AOS,0));this.Init(aArg);},_className:"Application::AnimalSearchDriedOffOverlay"
};C.ARd={AzA:0,AcZ:null,Aun:null,Bc_:0,A2Y:0,A1T:0,Init:function(aArg){this.Bc_=
A._GetAutoObject(A.Device.Helper).W.Id;this.AcZ=A._GetAutoObject(A.Device.Device
).Ap.Filter;this.AzA=A._GetAutoObject(A.Device.Helper).W.NaisId;this.A1T=A._GetAutoObject(
A.Device.Helper).W.AnimalType;},LJ:function(G){A._GetAutoObject(A.Device.Helper).
W.Ang(this.AzA);A._GetAutoObject(A.Device.Helper).W.AeF(true);switch(this.A1T){case
0:case 1:A._GetAutoObject(A.Device.Helper).W.DT(0);break;case 2:A._GetAutoObject(
A.Device.Helper).W.DT(2);break;default:A.ab5("%s%e",AxT,this.A1T);}},Eo:function(
G){A._GetAutoObject(A.Device.Device).Ap.Bi(this.AcZ);if(!!this.A2Y)this.Bfx();},
AfR:function(G){A._GetAutoObject(A.Device.Device).Ap.Bi(null);},Bfx:function(){var
Atk=A._NewObject(A.Device.Animal,0);var Ad=A._GetAutoObject(A.Device.Device).Ap.
K_(0,this.Bc_);Atk.EC(Ad,A._GetAutoObject(A.Device.Device).Ap);Atk.AvV(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);Atk.Arn(false);Atk.Av8(Atk.LactationNumber+1);Atk.
Ck(A._GetAutoObject(A.Device.Device).Ap);},ApF:function(G){this.A2Y++;var BwO=A.
_GetAutoObject(A.Device.Converter).Bgj(A._GetAutoObject(A.Device.Helper).W.BirthType
);if((this.A2Y<BwO)&&(A._GetAutoObject(A.Device.Helper).AjK(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts)===false))A._GetAutoObject(A.Device.Device).A6(59,true,A.jV
,0,[this,this.UZ]);else this.Bb9(this);},UZ:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===8))this.Bb9(this);else if(!!As&&(
As.PopupState===7))this.AAe(this);},AAe:function(G){var B;var H8=A._GetAutoObject(
A.Device.Helper).W.AnimalType;var Afz=A._GetAutoObject(A.Device.Helper).W.BirthType;
var Bu=A._GetAutoObject(A.Device.Helper).W.Breed;var S5=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AJj=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;
if(!!this.Aun)(B=this.Aun)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper
).W.DT(H8);A._GetAutoObject(A.Device.Helper).W.Aj8(Afz);A._GetAutoObject(A.Device.
Helper).W.NT(Bu);A._GetAutoObject(A.Device.Helper).W.QR(S5);A._GetAutoObject(A.Device.
Helper).W.Aj$(AJj);},Bb9:function(G){this.Bfx();A._GetAutoObject(C.AX).Fl();A._GetAutoObject(
A.Device.Device).Ap.Bi(this.AcZ);},A84:function(E){if(A.aa0(this.Aun,E))return;this.
Aun=E;},_Init:function(aArg){this.__proto__=C.ARd;this.Init(aArg);A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AcZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aun)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Application::NewAnimalMotherHelper"
};C.AL_={Init:function(aArg){var B;A.zX([this,this.Bdu],[B=A._GetAutoObject(A.Device.
Device),B.ARB,B.AZg],0);this.Bdu(this);},Ck:function(){A.ab5("%s",BrD);},EC:function(
AcB){C.Va.EC.call(this,AcB);var P;for(P=16;P>0;P--)this.H7.Set(P,this.H7.Get(P-1
));this.H7.Set(0,0);if(this.CA<17)this.CA++;else A.ab5("%s",BrE);},AC9:function(
Ev){switch(Ev){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bdu:function(G){this.EC(A._GetAutoObject(A.Device.Device).
At1);A.we(this,0);},_Init:function(aArg){C.Va._Init.call(this,aArg);this.__proto__=
C.AL_;this.Init(aArg);},_className:"Application::AutoActionsSelectableClass"};C.
Aue={_Init:function(){C.AL_._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.JA={DR:null,V:null,A6Y:true,U:function(E){
C.IS.U.call(this,E);this.V.R(E);},C8:function(E){C.IS.C8.call(this,E);this.V.L(E
);},BlX:function(E){if(this.A6Y===E)return;this.A6Y=E;this.DR.Y(E);},_Init:function(
aArg){C.IS._Init.call(this,aArg);A.acg.DR._Init.call(this.DR={I:this},0);C.CO._Init.
call(this.V={I:this},0);this.__proto__=C.JA;this.DR.DM(BrF);this.DR.DY(BrG);this.
DR.L(A.jb.Bd);this.V.AY(0x3F);this.V.H(BrH);this.V.A4(0x11);this.V.L(A.jb.Text);
this.J(this.DR,0);this.J(this.V,0);this.V.S(A.aaL(A.fl.J$));this.V.A8(A.aaL(A.fl.
Ie));this.V.CB(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.IS;this.DR._Done(
);this.V._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(this
);this.DR._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J$));this.V.A8(A.aaL(A.
fl.Ie));this.V.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.IS._Mark.call(this
,D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoTableItem"};C.AOS={Agx:null,Aa0:
null,Fb:null,E0:null,C_:null,Init:function(aArg){var B;A.zX([this,this.A3A],[B=A.
_GetAutoObject(A.Device.Device),B.ADX,B.AId],0);A.pe([this,this.A3A],this);},C8:
function(E){C.Ya.C8.call(this,E);this.C_.L(E);},A8N:function(G){A.pe([this,this.
A3A],this);},A2Z:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.
Q){Filter=(F=this.Q,F[1].call(F[0])).GA();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DX(1,4))?B:null);if(!!FilterCriterion)Filter.QW(FilterCriterion
);A._GetAutoObject(A.Device.Device).Ap.Bi(Filter);}},De:function(G){var B;var F;
C.Ya.De.call(this,G);if(!(F=this.Q,F[1].call(F[0]))){this.C_.Ax(A.aaL(A.ach.AjD)
);return;}var Bxu=(A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(
F[0])).DX(38,0))?B:null);var Ayb=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DX(14,0))?B:null);if(!!Bxu)this.C_.Ax(A.aaL(A.ach.ACq
));else if(!!Ayb&&(Ayb.A7===1))this.C_.Ax(A.aaL(A.ach.APq));else this.C_.Ax(A.aaL(
A.ach.AjD));},A3A:function(G){var F;var Filter=null;var ANT;switch(A._GetAutoObject(
A.Device.Device).Abx){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACb();break;
case 1:Filter=A._GetAutoObject(A.Device.Helper).AN6();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mj();break;default:throw new Error(AZf+A._GetAutoObject(A.Device.
Device).Abx.toFixed());}var AAn=this.Ag0();if(AAn>0){ANT=A._NewObject(A.Device.Int32FilterCriterion
,0);ANT.Initialize(1,4,AAn,false);Filter.CX(ANT);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.A1.Aj9(false);},Oi:function(G){if(!this.Ag0())this.A1.Aj9(true
);this.A9(this.A1);this.Am();},MS:function(G){this.A1.Aj9(false);this.A9(this.Agx
);this.Am();},_Init:function(aArg){C.Ya._Init.call(this,aArg);C.AqF._Init.call(this.
Agx={I:this},0);C.Aa0._Init.call(this.Aa0={I:this},0);A.Core.BJ._Init.call(this.
Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0);A.acg.An._Init.call(this.
C_={I:this},0);this.__proto__=C.AOS;var B;this.H(BrI);this.CY.H(BrJ);this.CY.Y(false
);this.A1.H(BrK);this.Agx.H(BrL);this.Aa0.At(A._GetAutoObject(A.Device.Device).Abx
);this.Fb.Filter=6;this.E0.Filter=7;this.C_.H(BrM);this.J(this.Agx,0);this.J(this.
C_,0);this.Agx.CG(this.Aa0);this.Agx.At([B=this.Aa0,B.B9,B.B_]);this.Fb.BK=[this
,this.Oi];this.E0.BK=[this,this.MS];this.C_.Ax(A.aaL(A.ach.AjD));this.Init(aArg);
},_Done:function(){this.__proto__=C.Ya;this.Agx._Done();this.Aa0._Done();this.Fb.
_Done();this.E0._Done();this.C_._Done();C.Ya._Done.call(this);},_ReInit:function(
){C.Ya._ReInit.call(this);this.Agx._ReInit();this.Aa0._ReInit();this.Fb._ReInit(
);this.E0._ReInit();this.C_._ReInit();},_Mark:function(D){var B;C.Ya._Mark.call(
this,D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimalDriedOff"};C.Aa0={Aeu:null,Init:function(aArg){var
B;A.zX([this,this.Bda],[B=A._GetAutoObject(A.Device.Device),B.ADX,B.AId],0);A.pe([
this,this.Bda],this);},Do:function(){return 3;},At:function(E){C.CN.At.call(this
,E);A._GetAutoObject(A.Device.Device).Awe(E);},ACa:function(aIndex){if((aIndex<0
)||(aIndex>=this.Do()))return null;return this.Aeu.Ar_(aIndex);},ACc:function(aIndex
){if((aIndex<0)||(aIndex>=this.Do()))return-1;return this.Aeu.Ar$(aIndex);},Bda:
function(G){this.Q=A._GetAutoObject(A.Device.Device).Abx;A.abo([this,this.B9,this.
B_],0);},_Init:function(aArg){C.CN._Init.call(this,aArg);A.Device.Aeu._Init.call(
this.Aeu={I:this},0);this.__proto__=C.Aa0;this.Co.Set(0,0);this.Co.Set(1,1);this.
Co.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=C.CN;this.Aeu._Done(
);C.CN._Done.call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.Aeu._ReInit(
);},_Mark:function(D){var B;C.CN._Mark.call(this,D);if((B=this.Aeu)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"};C.AO2={Es:
null,IE:null,_Init:function(aArg){C.Et._Init.call(this,aArg);C.CO._Init.call(this.
Es={I:this},0);A.acg.Text._Init.call(this.IE={I:this},0);this.__proto__=C.AO2;this.
H(OX);this.Background.H(OX);this.Es.H(AHL);this.Es.R(A.aaR(A.acf.A6f));this.Es.A4(
0x12);this.Es.L(A.jb.Text);this.IE.AY(0x3F);this.IE.H(AHM);this.IE.HH(5);this.IE.
A4(0x14);this.IE.R(A.aaR(A.acf.AF9));this.IE.L(A.jb.Text);this.J(this.Es,0);this.
J(this.IE,0);this.Es.S(A.aaL(A.fl.Ah));this.Es.A8(A.aaL(A.fl.Ie));this.Es.CB(A.aaL(
A.fl.By));this.IE.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Et;this.
Es._Done();this.IE._Done();C.Et._Done.call(this);},_ReInit:function(){C.Et._ReInit.
call(this);this.Es._ReInit();this.IE._ReInit();this.Es.R(A.aaR(A.acf.A6f));this.
IE.R(A.aaR(A.acf.AF9));this.Es.S(A.aaL(A.fl.Ah));this.Es.A8(A.aaL(A.fl.Ie));this.
Es.CB(A.aaL(A.fl.By));this.IE.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Et._Mark.
call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"};C.MotherScanScreen={
JO:null,Be9:function(){if(A._GetAutoObject(A.Device.Helper).W.NaisId>0)this.BdV(
this);else A._GetAutoObject(A.Device.Device).A6(63,true,A.jV,0,[this,this.UZ]);}
,BdV:function(G){A._GetAutoObject(C.AX).Fl();},UZ:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63))&&(As.PopupState===7))this.BdV(this
);},_Init:function(aArg){C.L_._Init.call(this,aArg);A.acg.Text._Init.call(this.JO={
I:this},0);this.__proto__=C.MotherScanScreen;this.Dk(C.AOR);this.I6.H(BrN);this.
I6.Aki(2);this.Acb.Y(false);this.AQU=12;this.Number.H(BrO);this.Number.R(A.aaR(A.
acf.A_q));this.A37=false;this.JO.H(BrP);this.JO.HH(5);this.JO.KM(true);this.JO.R(((
A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.acf.AAW));this.JO.L(A.jb.Text);this.
Kn(this.I6,-1);this.Kn(this.II,-1);this.Kn(this.Acb,-1);this.J(this.JO,0);this.JO.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.L_;this.JO._Done();C.L_._Done.
call(this);},_ReInit:function(){C.L_._ReInit.call(this);this.JO._ReInit();this.Number.
R(A.aaR(A.acf.A_q));this.JO.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CL)+A.aaR(A.
acf.AAW));this.JO.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L_._Mark.call(this
,D);if((B=this.JO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MotherScanScreen"
};C.AOR={_Init:function(aArg){C.Aqt._Init.call(this,aArg);this.__proto__=C.AOR;this.
CY.DT(1);},_className:"Application::HeaderScannedCowId"};C.I6={Abo:null,Abn:null
,Abm:null,Qu:null,CountryToString:null,Asb:0,CT:function(){this.Am();},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);this.Qu.R(this.CountryToString.Lp(A._GetAutoObject(
A.Device.Converter).A6D(A._GetAutoObject(A.Device.Device).Language))+BrQ);},Aki:
function(E){if(this.Asb===E)return;this.Asb=E;var bitmap=null;var A01=BrR;var A00=
null;var A02=false;switch(E){case 0:bitmap=A.aaL(A.ach.AqE);break;case 1:{bitmap=
A.aaL(A.ach.AP2);A01=BrS;A00=A.aaL(A.fl.Ak);A02=true;}break;case 2:{bitmap=A.aaL(
A.ach.AP3);A01=BrT;A00=A.aaL(A.fl.By);A02=true;}break;default:throw new Error(BrU+
E.toFixed());}this.Abm.Ax(bitmap);this.Abn.Ax(bitmap);this.Abo.Ax(bitmap);this.Qu.
H(A.abJ(this.Qu.M,A01));this.Qu.S(A00);this.Qu.Y(A02);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.An._Init.
call(this.Abo={I:this},0);A.acg.An._Init.call(this.Abn={I:this},0);A.acg.An._Init.
call(this.Abm={I:this},0);A.acg.Text._Init.call(this.Qu={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.I6;this.H(AH4);this.
Abo.AY(0x3);this.Abo.H(AH4);this.Abo.L(A.jb.H1);this.Abo.Cu(2);this.Abn.AY(0x3);
this.Abn.H(AH4);this.Abn.L(A.jb.AdO);this.Abn.Cu(1);this.Abm.AY(0x3);this.Abm.H(
AH4);this.Abm.L(A.jb.Text);this.Abm.Cu(0);this.Qu.AY(0x14);this.Qu.H(BrV);this.Qu.
L(0xFF020202);this.Qu.Y(false);this.J(this.Abo,0);this.J(this.Abn,0);this.J(this.
Abm,0);this.J(this.Qu,0);this.Abo.Ax(A.aaL(A.ach.AqE));this.Abn.Ax(A.aaL(A.ach.AqE
));this.Abm.Ax(A.aaL(A.ach.AqE));this.Qu.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.O;this.Abo._Done();this.Abn._Done();this.Abm._Done();this.Qu._Done(
);this.CountryToString._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Abo._ReInit();this.Abn._ReInit();this.Abm._ReInit(
);this.Qu._ReInit();this.CountryToString._ReInit();this.Qu.S(A.aaL(A.fl.Ak));this.
CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Abo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Abm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qu)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.Asb={Transponder:0,BEt:1,BEu:2};C.AON={An:null,C8:function(E){C.BP.C8.call(this
,E);this.An.L(E);},_Init:function(aArg){C.BP._Init.call(this,aArg);A.acg.An._Init.
call(this.An={I:this},0);this.__proto__=C.AON;this.An.H(AsF);this.J(this.An,0);this.
An.Ax(A.aaL(A.ach.AOE));},_Done:function(){this.__proto__=C.BP;this.An._Done();C.
BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.call(this);this.An._ReInit(
);},_Mark:function(D){var B;C.BP._Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Jw:0,Aah:4,AlD:function(G){C.QZ.AlD.call(this,G);if(A._GetAutoObject(A.Device.Helper
).BcJ()){this.Jw=A._GetAutoObject(A.Device.Helper).Uj.Id;var Aic=A._GetAutoObject(
A.Device.Helper).A6B(this.Jw,A._GetAutoObject(A.Device.Helper).W);if(Aic){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).SK(this.Jw),0,[
this,this.UZ]);return;}Aic=A._GetAutoObject(A.Device.Helper).Bip(this.Jw,A._GetAutoObject(
A.Device.Helper).W);if(Aic&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Jw)){A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.
Converter).SK(this.Jw),0,[this,this.UZ]);return;}this.Aah=A._GetAutoObject(A.Device.
Helper).AQv(this.Jw);switch(this.Aah){case 0:A._GetAutoObject(A.Device.Device).A6(
45,true,this.Jw.toFixed().length.toFixed(),0,[this,this.UZ]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).Aw9(this.Jw);A._GetAutoObject(A.Device.
Device).A6(46,true,BM.toFixed(),0,[this,this.UZ]);}break;case 3:this.Be3();break;
default:throw new Error(AHz+this.Aah.toFixed());}}},Eo:function(G){A._GetAutoObject(
C.AX).Fl();},UZ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.Aah===2)this.Be3();else A._GetAutoObject(
A.Device.Device).Ahm();break;case 5:this.Eo(this);break;default:;}},Be3:function(
){A._GetAutoObject(A.Device.Helper).W.Na(this.Jw);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.NW(this.Jw);A._GetAutoObject(
A.Device.Helper).W.Ck(A._GetAutoObject(A.Device.Device).Ap);A._GetAutoObject(A.Device.
Device).A6(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Eo(this);},_Init:function(aArg){C.QZ._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Y(true);this.Dk(C.IA);this.Number.R(A.aaR(A.acf.A_j
));this.I6.H(BrW);this.II.H(BrX);this.Aki(1);this.N.Cv=[this,this.Eo];this.N.CS(
A.aaL(A.ach.EU));},_ReInit:function(){C.QZ._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_j));},_className:"Application::SetSaveNaisIdScreen"};C.ANn={LJ:function(
G){C.Aqd.LJ.call(this,G);A.pe([this,this.BAe],this);},BAe:function(G){this.Jx(this.
D9);},_Init:function(aArg){C.Aqd._Init.call(this,aArg);this.__proto__=C.ANn;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.Uz={Animal:null,WhereAboutsToString:
null,F$:function(aIndex){return this.WhereAboutsToString.BQ(this.C4(aIndex));},At:
function(E){C.CN.At.call(this,E);if(!!this.Animal)this.Animal.Nb(E);},A3I:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B9,this.B_],0);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A3I],[B=this.Animal,B.AvJ,B.Nb],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A3I],[B=this.Animal,B.AvJ,B.Nb],0);A.pe([this,this.A3I],this);}
,_Init:function(aArg){C.CN._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.Uz;this.Co.Set(0,1);this.
Co.Set(1,2);this.Co.Set(2,3);this.Co.Set(3,4);this.Co.Set(4,5);},_Done:function(
){this.__proto__=C.CN;this.WhereAboutsToString._Done();C.CN._Done.call(this);},_ReInit:
function(){C.CN._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.CN._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UA={Do:function(){return 6;},_Init:function(aArg){C.Uz._Init.call(this,aArg);
this.__proto__=C.UA;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,2);this.Co.Set(
3,3);this.Co.Set(4,4);this.Co.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.Aco={Do:function(){return 5;},_Init:function(aArg){C.Uz._Init.call(this,aArg
);this.__proto__=C.Aco;this.Co.Set(0,6);this.Co.Set(1,7);this.Co.Set(2,8);this.Co.
Set(3,9);this.Co.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.Adx={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bbu],[B=A._GetAutoObject(A.Device.
Device),B.ARC,B.AZh],0);A.pe([this,this.Bbu],this);},Do:function(){return 2;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 1;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AvM(E);},Bbu:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Aga;A.abo([this,this.B9,this.B_],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.Adx;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AFX={Fv:null
,Er:null,EartagNrAssignmentMode:null,Fb:null,E0:null,Hx:null,A1:null,J9:null,M5:
null,A5:0,AK:0,Init:function(aArg){},Ai:function(Ae){C.D_.Ai.call(this,Ae);if(this.
A5===1){if(this.Hb){this.A1.FB(A.jb.CF);this.Hx.C1(A.jb.CF);this.Background.L(A.
jb.C0);this.V.L(A.jb.Text);}else{this.A1.FB(A.jb.C0);this.Hx.C1(A.jb.C0);this.Background.
L(A.jb.CF);this.V.L(A.jb.Text);}}else{if(this.Hb){this.A1.FB(A.jb.CF);this.Hx.C1(
A.jb.CF);}else{this.A1.FB(A.jb.C0);this.Hx.C1(A.jb.C0);}this.A9(null);}this.M5.L(
this.V.AQ);},IP:function(G){C.D_.IP.call(this,G);if(!this.A5)this.FJ(this);else this.
G5(this);},DD:function(G){var F;if(!this.N)return;switch(this.A5){case 1:{(F=this.
N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.
N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.
N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(
F[0])).C2(null);(F=this.N,F[1].call(F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=
null;}break;default:this.Fv.Aks((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.
Ep(1);},G5:function(G){this.Ep(0);},Ep:function(EF){var F;if(!this.A5&&!!this.N)
this.Fv.Aje((F=this.N,F[1].call(F[0])));this.A5=EF;if(this.A5<0)this.A5=0;else if(
this.A5>1)this.A5=1;switch(this.A5){case 0:this.A9(null);break;case 1:{this.A9(this.
A1);if(!this.AK)this.A1.Sv(2);else this.A1.Sv(7);}break;default:throw new Error(
AsH+this.A5.toFixed());}this.DD(this);this.Am();},Bx:function(E){if(this.AK===E)
return;this.AK=E;},Oi:function(G){this.AAo(2);},MS:function(G){this.AAo(7);},AAo:
function(Gq){var B;var AyL=(A.Core.O.isPrototypeOf(B=this.AR)?B:null);if(!!AyL){
var AzC=(A.Core.O.isPrototypeOf(B=this.R5(AyL,Gq,0x15))?B:null);if(!!AzC){this.A9(
AzC);return true;}}return false;},AfG:function(G){var F;if(!this.Er||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M5.Ax(
A._GetAutoObject(A.Device.Converter).Amv(2));break;case 1:this.M5.Ax(A._GetAutoObject(
A.Device.Converter).Amv((F=this.Er,F[1].call(F[0]))));break;default:throw new Error(
A$I+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3g],this);},A3g:function(G){var B;var F;if(!this.Er||!this.EartagNrAssignmentMode
){this.J9.AeB(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.A1.At([B=A._GetAutoObject(A.Device.Device),B.Am5,B.Aob]);this.J9.
AeB([B=A._GetAutoObject(A.Device.Device),B.ADT,B.AIa]);}break;case 1:switch((F=this.
Er,F[1].call(F[0]))){case 1:{this.A1.At([B=A._GetAutoObject(A.Device.Device),B.AvB
,B.Ax2]);this.J9.AeB([B=A._GetAutoObject(A.Device.Device),B.ARI,B.AZj]);}break;case
0:{this.A1.At([B=A._GetAutoObject(A.Device.Device),B.AvC,B.Ax3]);this.J9.AeB([B=
A._GetAutoObject(A.Device.Device),B.ARJ,B.AZk]);}break;case 2:{this.A1.At([B=A._GetAutoObject(
A.Device.Device),B.Am5,B.Aob]);this.J9.AeB([B=A._GetAutoObject(A.Device.Device),
B.ADT,B.AIa]);}break;default:throw new Error(BrY+(F=this.Er,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A$I+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},T8:function(E){if(A.aaZ(this.Er,E))return;if(!!this.Er)A.z$([
this,this.AfG],this.Er,0);this.Er=E;if(!!E)A.zX([this,this.AfG],this.Er,0);if(!!
E)A.pe([this,this.AfG],this);},Aj_:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfG],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfG],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfG],this);},T5:function(){return this.AK;},_Init:function(
aArg){C.D_._Init.call(this,aArg);A.Core.BJ._Init.call(this.Fb={I:this},0);A.Core.
BJ._Init.call(this.E0={I:this},0);C.AqF._Init.call(this.Hx={I:this},0);C.Ave._Init.
call(this.A1={I:this},0);C.Aur._Init.call(this.J9={I:this},0);A.acg.An._Init.call(
this.M5={I:this},0);this.__proto__=C.AFX;var B;this.H(UG);this.V.Ar(false);this.
V.R(Asw);this.V.L(A.jb.Bj);this.Fb.Filter=6;this.E0.Filter=7;this.Hx.H(BrZ);this.
A1.H(Br0);this.M5.H(Br1);this.J(this.Hx,0);this.J(this.A1,0);this.J(this.M5,0);this.
Fv=A._NewObject(C.Ad7,0);this.Fb.BK=[this,this.Oi];this.E0.BK=[this,this.MS];this.
Hx.CG(this.J9);this.Hx.At([B=this.J9,B.B9,B.B_]);this.A1.At([this,this.T5,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.Fb._Done();this.E0.
_Done();this.Hx._Done();this.A1._Done();this.J9._Done();this.M5._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.Fb._ReInit();this.E0.
_ReInit();this.Hx._ReInit();this.A1._ReInit();this.J9._ReInit();this.M5._ReInit(
);},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Er)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.J9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANb={V4:
null,YT:null,YP:null,TY:null,Init:function(aArg){this.A9(this.V4);},ADL:function(
G){var Bc8=(C.AmV.isPrototypeOf(G)?G:null);if(!!Bc8)A._GetAutoObject(A.Device.Device
).A6(Bc8.Adg,true,A.jV,0,null);},Dw:function(G){if((this.Cl.CK===7)&&(this.AR===
this.TY))A._GetAutoObject(A.Device.Device).A6(10,true,A.jV,0,null);else if((this.
Cl.CK===6)&&(this.AR===this.TY))A._GetAutoObject(C.AX).BS(103);C.Eb.Dw.call(this
,G);},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.AmV._Init.call(this.V4={
I:this},0);C.AmV._Init.call(this.YT={I:this},0);C.AmV._Init.call(this.YP={I:this
},0);C.AmV._Init.call(this.TY={I:this},0);this.__proto__=C.ANb;this.Dk(C.AOs);this.
V4.H(JQ);this.V4.Aj(true);this.V4.U(A.aaR(A.acf.Ahl));this.V4.Bg(false);this.V4.
Adg=79;this.YT.H(P1);this.YT.Aj(true);this.YT.U(A.aaR(A.acf.A_C));this.YT.Bg(true
);this.YT.Adg=77;this.YP.H(ZR);this.YP.Aj(true);this.YP.U(A.aaR(A.acf.A6a));this.
YP.Bg(false);this.YP.Adg=78;this.TY.H(AkR);this.TY.Aj(true);this.TY.U(A.aaR(A.acf.
About));this.TY.Bg(true);this.TY.Adg=3;this.J(this.V4,0);this.J(this.YT,0);this.
J(this.YP,0);this.J(this.TY,0);this.V4.AN=[this,this.ADL];this.YT.AN=[this,this.
ADL];this.YP.AN=[this,this.ADL];this.TY.AN=[this,this.ADL];this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.V4._Done();this.YT._Done();this.YP._Done();this.
TY._Done();C.Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.
V4._ReInit();this.YT._ReInit();this.YP._ReInit();this.TY._ReInit();this.V4.U(A.aaR(
A.acf.Ahl));this.YT.U(A.aaR(A.acf.A_C));this.YP.U(A.aaR(A.acf.A6a));this.TY.U(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.V4
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AOs={_Init:function(aArg){C.KH.
_Init.call(this,aArg);this.__proto__=C.AOs;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.AM$={FactoryResetScope:null,T1:null,V2:null
,T3:null,Init:function(aArg){this.A9(this.T1);A.pe([this,this.MC],this);},Bi_:function(
G){switch(this.FactoryResetScope.C4(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A6(33,true,A.jV,0,[this,this.BeR]);break;case 0:A._GetAutoObject(
A.Device.Device).A6(7,true,A.jV,0,[this,this.BeR]);break;default:A.ab5("%s%i",Br2
,this.FactoryResetScope.Q);}},BeR:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.
Device.Device).Bm$();A._GetAutoObject(A.Device.Device).A6(8,true,A.jV,0,null);A.
_GetAutoObject(C.AX).BS(38);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bm_(
);A._GetAutoObject(A.Device.Device).Ark(0);A._GetAutoObject(A.Device.Device).Arl(
0);A._GetAutoObject(A.Device.Device).Arm(0);A._GetAutoObject(A.Device.Device).Aro(
0);A._GetAutoObject(A.Device.Device).Arp(0);A._GetAutoObject(A.Device.Device).Arq(
0);A._GetAutoObject(A.Device.Device).T6(5);A._GetAutoObject(A.Device.Device).AvY(
0);A._GetAutoObject(A.Device.Device).AvZ(0);A._GetAutoObject(A.Device.Device).Av0(
0);A._GetAutoObject(A.Device.Device).Awf(1);A._GetAutoObject(A.Device.Device).Awg(
1);A._GetAutoObject(A.Device.Device).Awh(1);A._GetAutoObject(A.Device.Device).A6(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AHA,As.Id);}},_Init:function(aArg
){C.Eb._Init.call(this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);C.NS._Init.call(this.T1={I:this},0);C.NS._Init.call(this.V2={I:this},
0);C.BX._Init.call(this.T3={I:this},0);this.__proto__=C.AM$;var B;this.Dk(C.AOq);
this.T1.H(JQ);this.T1.Aj(true);this.T1.U(A.aaR(A.acf.ABH));this.T1.Bg(false);this.
T1.NV(105);this.V2.H(P1);this.V2.Aj(true);this.V2.U(A.aaR(A.acf.Xv));this.V2.Bg(
true);this.V2.NV(104);this.T3.H(A$J);this.T3.Aj(true);this.T3.Bks(true);this.T3.
U(A.aaR(A.acf.A5F));this.T3.Bg(false);this.J(this.T1,-1);this.J(this.V2,-1);this.
J(this.T3,-1);this.T1.AN=[B=this.T1,B.NY];this.V2.AN=[B=this.V2,B.NY];this.T3.AN=[
this,this.Bi_];this.T3.At([B=this.FactoryResetScope,B.B9,B.B_]);this.T3.CG(this.
FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=C.Eb;this.FactoryResetScope.
_Done();this.T1._Done();this.V2._Done();this.T3._Done();C.Eb._Done.call(this);},
_ReInit:function(){C.Eb._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T1._ReInit();this.V2._ReInit();this.T3._ReInit();this.T1.U(A.aaR(A.acf.ABH));this.
V2.U(A.aaR(A.acf.Xv));this.T3.U(A.aaR(A.acf.A5F));},_Mark:function(D){var B;C.Eb.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOq={_Init:function(aArg){C.KH._Init.call(this,aArg);this.__proto__=C.AOq;this.
Text.R(A.aaR(A.acf.ABJ));},_ReInit:function(){C.KH._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ABJ));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AjA={QG:null,VS:null,_Init:function(aArg){C.TI._Init.call(this,aArg);C.CO._Init.
call(this.QG={I:this},0);C.CO._Init.call(this.VS={I:this},0);this.__proto__=C.AjA;
this.QG.H(Br3);this.QG.R(A.aaR(A.acf.A_u));this.QG.A4(0x12);this.QG.L(A.jb.Text);
this.VS.H(A$B);this.VS.R(A.aaR(A.acf.AnH));this.VS.L(A.jb.Text);this.J(this.QG,0
);this.J(this.VS,0);this.QG.S(A.aaL(A.fl.Ah));this.QG.A8(A.aaL(A.fl.Ak));this.QG.
CB(A.aaL(A.fl.By));this.VS.S(A.aaL(A.fl.Ah));this.VS.A8(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TI;this.QG._Done();this.VS._Done();C.TI._Done.call(this
);},_ReInit:function(){C.TI._ReInit.call(this);this.QG._ReInit();this.VS._ReInit(
);this.QG.R(A.aaR(A.acf.A_u));this.VS.R(A.aaR(A.acf.AnH));this.QG.S(A.aaL(A.fl.Ah
));this.QG.A8(A.aaL(A.fl.Ak));this.QG.CB(A.aaL(A.fl.By));this.VS.S(A.aaL(A.fl.Ah
));this.VS.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TI._Mark.call(this,D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.AOX={QH:
null,_Init:function(aArg){C.TI._Init.call(this,aArg);C.CO._Init.call(this.QH={I:
this},0);this.__proto__=C.AOX;this.QH.H(Br4);this.QH.R(A.aaR(A.acf.YY));this.QH.
A4(0x12);this.QH.L(A.jb.Text);this.J(this.QH,0);this.QH.S(A.aaL(A.fl.Ah));this.QH.
A8(A.aaL(A.fl.Ak));this.QH.CB(A.aaL(A.fl.By));},_Done:function(){this.__proto__=
C.TI;this.QH._Done();C.TI._Done.call(this);},_ReInit:function(){C.TI._ReInit.call(
this);this.QH._ReInit();this.QH.R(A.aaR(A.acf.YY));this.QH.S(A.aaL(A.fl.Ah));this.
QH.A8(A.aaL(A.fl.Ak));this.QH.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.TI.
_Mark.call(this,D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Ajg={IB:null,Abb:null,D5:null,Bh:function(aSize){C.MZ.Bh.call(this,aSize);this.
IB.H([this.Gp.M[2],0,this.Gp.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.D5.H([
this.IB.M[2]-1,0,this.IB.M[2]+1,aSize[1]]);this.Abb.H([this.IB.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.MZ.Ai.call(this,Ae);this.Abb.L(this.Gp.AQ);this.IB.L(this.
Gp.AQ);},Cd:function(Ad){C.MZ.Cd.call(this,Ad);if(!this.AZ)return;this.Hu=Ad;if(
!!this.AZ){var H8=this.AZ.Amw(Ad,14);var Atd=this.AZ.AN_(Ad,7);this.IB.Ax(A._GetAutoObject(
A.Device.Converter).Amv(Atd));this.Abb.Ax(A._GetAutoObject(A.Device.Converter).A3_(
H8));this.Am();}},_Init:function(aArg){C.MZ._Init.call(this,aArg);A.acg.An._Init.
call(this.IB={I:this},0);A.acg.An._Init.call(this.Abb={I:this},0);A.acg.AJ._Init.
call(this.D5={I:this},0);this.__proto__=C.Ajg;this.IB.H(A$E);this.IB.L(A.jb.Text
);this.Abb.H(Br5);this.Abb.L(A.jb.Text);this.D5.H(Br6);this.D5.L(A.jb.Bd);this.J(
this.IB,0);this.J(this.Abb,0);this.J(this.D5,0);this.IB.Ax(A.aaL(A.aci.Tz));this.
Abb.Ax(A.aaL(A.aci.Tz));},_Done:function(){this.__proto__=C.MZ;this.IB._Done();this.
Abb._Done();this.D5._Done();C.MZ._Done.call(this);},_ReInit:function(){C.MZ._ReInit.
call(this);this.IB._ReInit();this.Abb._ReInit();this.D5._ReInit();},_Mark:function(
D){var B;C.MZ._Mark.call(this,D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AMs={Zp:null
,Bh:function(aSize){C.MZ.Bh.call(this,aSize);this.Zp.H([this.Gp.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.MZ.Ai.call(this,Ae);this.Zp.L(this.Gp.AQ);},Cd:function(
Ad){C.MZ.Cd.call(this,Ad);if(!this.AZ)return;this.Hu=Ad;if(!!this.AZ){var MQ=this.
AZ.LN(Ad,26);if(MQ>0)this.Zp.R(A.ab2(MQ.toFixed(),5));else this.Zp.R(Ra);this.Am(
);}},_Init:function(aArg){C.MZ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Zp={I:this},0);this.__proto__=C.AMs;this.Zp.H(Br7);this.J(this.Zp,0);this.Zp.S(A.
aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.MZ;this.Zp._Done();C.MZ._Done.
call(this);},_ReInit:function(){C.MZ._ReInit.call(this);this.Zp._ReInit();this.Zp.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.MZ._Mark.call(this,D);if((B=this.Zp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AQ7={An:null,Ai:function(Ae){C.Aev.Ai.call(this,Ae);this.An.L(this.Text.AQ);
},_Init:function(aArg){C.Aev._Init.call(this,aArg);A.acg.An._Init.call(this.An={
I:this},0);this.__proto__=C.AQ7;this.Text.H(Br8);this.An.H(A$y);this.J(this.An,0
);this.An.Ax(A.aaL(A.ach.AeP));},_Done:function(){this.__proto__=C.Aev;this.An._Done(
);C.Aev._Done.call(this);},_ReInit:function(){C.Aev._ReInit.call(this);this.An._ReInit(
);},_Mark:function(D){var B;C.Aev._Mark.call(this,D);if((B=this.An)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.X$={Text:
null,C_:null,AP:null,TK:null,DZ:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nf],[B=A._GetAutoObject(A.Device.Device),B.ADP,B.AH9],0);A.zV([this,this.Nf
],A._GetAutoObject(A.Device.Device).Ap,0);A.pe([this,this.Nf],this);},C8:function(
E){C.BP.C8.call(this,E);this.C_.L(E);this.Text.L(E);this.TK.L(E);this.DZ.Akb(E);
},AbH:function(E){C.BP.AbH.call(this,E);this.DZ.C1(E);},D$:function(G){this.DZ.U(
A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed());},Nf:function(s){this.D$(s);
},_Init:function(aArg){C.BP._Init.call(this,aArg);C.CO._Init.call(this.Text={I:this
},0);A.acg.An._Init.call(this.C_={I:this},0);A.acg.DR._Init.call(this.AP={I:this
},0);A.acg.An._Init.call(this.TK={I:this},0);C.DZ._Init.call(this.DZ={I:this},0);
A.acg.DR._Init.call(this.A_={I:this},0);this.__proto__=C.X$;this.Text.H(Br9);this.
Text.A4(0x11);this.C_.H(AxQ);this.AP.DM(A$w);this.AP.DY(A$x);this.AP.L(A.jb.Bd);
this.TK.H(Br_);this.TK.L(A.jb.C0);this.DZ.AY(0x14);this.DZ.H(Br$);this.DZ.Akb(A.
jb.Bj);this.DZ.C1(A.jb.Acf);this.DZ.HH(2);this.A_.DM(Bsa);this.A_.DY(Bsb);this.A_.
L(A.jb.Bd);this.J(this.Text,0);this.J(this.C_,0);this.J(this.AP,0);this.J(this.TK
,0);this.J(this.DZ,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Ah));this.Text.A8(
A.aaL(A.fl.Ak));this.C_.Ax(A.aaL(A.ach.AjD));this.TK.Ax(A.aaL(A.ach.TK));this.DZ.
S(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BP;this.Text.
_Done();this.C_._Done();this.AP._Done();this.TK._Done();this.DZ._Done();this.A_.
_Done();C.BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.call(this);this.
Text._ReInit();this.C_._ReInit();this.AP._ReInit();this.TK._ReInit();this.DZ._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Ah));this.Text.A8(A.aaL(A.fl.Ak));this.
DZ.S(A.aaL(A.fl.By));},_Mark:function(D){var B;C.BP._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Ab5={Fv:null
,JL:null,JK:null,Akp:null,Akq:null,QU:null,Qt:null,Aba:null,VD:null,PB:null,PC:null
,Si:null,Gl:null,Gm:null,Jl:null,All:0,Alq:0,D0:0,DO:0,A5:0,Bh:function(aSize){var
B;this.Ds.H([this.Hn.M[2]-10,this.Hn.M[1],this.HX.M[0]+10,this.Hn.M[3]]);this.Ds.
AEC((B=this.Ds.M)[2]-B[0]);this.Ds.Hy(this.Ds.Gi,true,null,null);},Ai:function(Ae
){var B;C.BX.Ai.call(this,Ae);var Fh=((Ae&0x20)===0x20);var Gt=this.Bl.Bv;if(!!this.
Q)this.Gw(this);if((this.A5===1)||(this.A5===2)){var A0n=this.A1k(this.A5);if(!!
A0n){this.Aba.Y(true);this.Aba.H(A0n.M);this.Aba.L(this.V.AQ);this.VD.Y(true);this.
VD.H(A0n.M);}else{this.Aba.Y(false);this.VD.Y(false);}this.Hn.Y(false);this.HX.Y(
false);}else{this.Aba.Y(false);this.VD.Y(false);this.Hn.Y(Fh||Gt);this.HX.Y(Fh||
Gt);}},Qf:function(G){if(!!this.Q){if(this.Fr===1)A.pe([this,this.UR],this);else
if(this.Fr===4)A.pe([this,this.AZG],this);else if(this.Fr===5)A.pe([this,this.AZE
],this);}C.BX.Qf.call(this,G);},J0:function(G){switch(this.A5){case 0:C.BX.J0.call(
this,G);break;case 2:break;default:this.Ada(this);}},JV:function(G){switch(this.
A5){case 0:C.BX.JV.call(this,G);break;default:this.Ah6(this);}},A0S:function(G){
var F;if(this.A5===1){var BO=this.D0;this.D0=this.D0-10;if(this.D0<this.Alq)this.
D0=this.Alq;if(this.D0<A._GetAutoObject(A.Device.Device).ZA)this.D0=A._GetAutoObject(
A.Device.Device).ZA;if(this.DO!==BO){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.
D0));A.abo(this.JL,0);}}if(this.A5===2){var BO=this.DO;this.DO=this.DO-10;if(this.
DO<this.D0)this.DO=this.D0;if(this.DO!==BO){if(!!this.JK)(F=this.JK,F[2].call(F[
0],this.DO));A.abo(this.JK,0);}}this.DD(this);this.Am();},AZE:function(s){this.A0S(
s);},AlB:function(G){this.Fr=5;this.Am();if(this.Bl.Bv){A.pe([this,this.AZE],this
);this.Bl.Ar(false);}this.Bl.Ar(true);},A1r:function(G){var F;if(this.A5===1){var
BO=this.D0;this.D0=this.D0+10;if(this.D0>this.DO)this.D0=this.DO;if(this.D0!==BO
){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.D0));A.abo(this.JL,0);}}if(this.A5===
2){var BO=this.DO;this.DO=this.DO+10;if(this.DO>this.All)this.DO=this.All;if(this.
DO!==BO){if(!!this.JK)(F=this.JK,F[2].call(F[0],this.DO));A.abo(this.JK,0);}}this.
DD(this);this.Am();},AZG:function(s){this.A1r(s);},AlC:function(G){this.Fr=4;this.
Am();if(this.Bl.Bv){A.pe([this,this.AZG],this);this.Bl.Ar(false);}this.Bl.Ar(true
);return;},UR:function(G){this.Ep(this.A5+1);},Ada:function(G){this.Fr=1;this.Am(
);if(this.Bl.Bv){A.pe([this,this.UR],this);this.Bl.Ar(false);}this.Bl.Ar(true);}
,Gw:function(G){},Afl:function(s){this.Gw(s);},DD:function(G){var F;if(!this.N)return;
switch(this.A5){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N
,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aec));(F=this.N,F[1].call(
F[0])).B0(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.UR];}break;case 2:{(F=this.
N,F[1].call(F[0])).CS(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.
N,F[1].call(F[0])).Cv=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(A.aaL(A.ach.AmC
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ch=[this,this.
Ah6];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).B0(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.Fv.Aks((F=this.N,F[1].call(F[
0])));}},A9s:function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([this,this.
A2N],this.JL,0);this.JL=E;if(!!this.JL)A.zX([this,this.A2N],this.JL,0);A.pe([this
,this.A2N],this);},A2N:function(G){var F;this.D0=(F=this.JL,F[1].call(F[0]));this.
Am();},A9r:function(E){if(A.aaZ(this.JK,E))return;if(!!this.JK)A.z$([this,this.A2M
],this.JK,0);this.JK=E;if(!!this.JK)A.zX([this,this.A2M],this.JK,0);A.pe([this,this.
A2M],this);},A2M:function(G){var F;this.DO=(F=this.JK,F[1].call(F[0]));this.Am();
},FJ:function(G){this.Ep(1);},G5:function(G){this.Ep(0);},Ep:function(EF){var F;
if(!this.A5)this.Fv.Aje((F=this.N,F[1].call(F[0])));this.A5=EF;if((this.A5<0)||(
this.A5>2))this.A5=0;this.DD(this);this.Gm.Bv=!!this.A5;this.Gl.Bv=!!this.A5;this.
Am();},Ah6:function(G){if(this.A5>1)this.Ep(this.A5-1);},A21:function(G){},Ax$:function(
s){this.A21(s);},A2A:function(G){},BaK:function(s){this.A2A(s);},A1k:function(AsQ
){return null;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Akp={I:this},0);A.acg.AJ._Init.call(this.Akq={I:this},0);A.acg.AJ._Init.call(
this.QU={I:this},0);A.acg.An._Init.call(this.Qt={I:this},0);A.acg.AJ._Init.call(
this.Aba={I:this},0);A.acg.Cz._Init.call(this.VD={I:this},0);A.acg.Text._Init.call(
this.PB={I:this},0);A.acg.Text._Init.call(this.PC={I:this},0);A.acg.Text._Init.call(
this.Si={I:this},0);A.Core.BJ._Init.call(this.Gl={I:this},0);A.Core.BJ._Init.call(
this.Gm={I:this},0);A.Core.BJ._Init.call(this.Jl={I:this},0);this.__proto__=C.Ab5;
this.H(Afi);this.U(A.aaR(A.acf.AqT));this.Background.H(Afi);this.V.H(BC);this.V.
R(A.aaR(A.acf.AGf));this.V.A4(0x12);this.Akp.H(Bsc);this.Akp.L(A.jb.FZ);this.Akq.
H(Bsd);this.Akq.L(A.jb.H1);this.QU.H(Bse);this.QU.L(A.jb.ET);this.Qt.H(Bsf);this.
Aba.H(Bsg);this.VD.H(Bsh);this.VD.NX(3);this.VD.L(A.jb.AR);this.VD.Y(false);this.
PB.H(Bsi);this.PB.HH(8);this.PB.I0(true);this.PB.A4(0x11);this.PB.L(0xFF000000);
this.PC.H(Bsj);this.PC.HH(8);this.PC.I0(true);this.PC.A4(0x11);this.PC.L(0xFF000000
);this.Si.H(Bsk);this.Si.I0(false);this.Si.A4(0x12);this.Si.L(0xFF000000);this.Gl.
Filter=5;this.Gl.Bv=false;this.Gm.Filter=4;this.Gm.Bv=false;this.Jl.Filter=1;this.
Kn(this.V,-1);this.Kn(this.Ds,-2);this.J(this.Akp,-1);this.J(this.Akq,-1);this.J(
this.QU,-1);this.J(this.Qt,-1);this.J(this.Aba,-1);this.J(this.VD,-1);this.J(this.
PB,-1);this.J(this.PC,0);this.J(this.Si,0);this.Qt.Ax(A.aaL(A.ach.ACP));this.PB.
S(A.aaL(A.fl.Ah));this.PC.S(A.aaL(A.fl.Ah));this.Si.S(A.aaL(A.fl.Ak));this.Gl.BK=[
this,this.AlB];this.Gl.DS=[this,this.AZE];this.Gm.BK=[this,this.AlC];this.Gm.DS=[
this,this.AZG];this.Jl.BK=[this,this.Ada];this.Fv=A._NewObject(C.Ad7,0);},_Done:
function(){this.__proto__=C.BX;this.Akp._Done();this.Akq._Done();this.QU._Done();
this.Qt._Done();this.Aba._Done();this.VD._Done();this.PB._Done();this.PC._Done();
this.Si._Done();this.Gl._Done();this.Gm._Done();this.Jl._Done();C.BX._Done.call(
this);},_ReInit:function(){C.BX._ReInit.call(this);this.Akp._ReInit();this.Akq._ReInit(
);this.QU._ReInit();this.Qt._ReInit();this.Aba._ReInit();this.VD._ReInit();this.
PB._ReInit();this.PC._ReInit();this.Si._ReInit();this.Gl._ReInit();this.Gm._ReInit(
);this.Jl._ReInit();this.U(A.aaR(A.acf.AqT));this.V.R(A.aaR(A.acf.AGf));this.PB.
S(A.aaL(A.fl.Ah));this.PC.S(A.aaL(A.fl.Ah));this.Si.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BX._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JK)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.Fu={XC:null,Ab7:
null,AnL:0,AnM:0,Do:function(){if(!this.XC)return 0;return this.XC.Mx;},C4:function(
aIndex){if(!this.XC||(aIndex>=this.XC.Mx))return-1;return this.XC.Get(aIndex);},
F$:function(aIndex){return this.A5X().BQ(this.C4(aIndex));},DK:function(A3){if(!
this.XC)return-1;return this.XC.AuS(A3);},Hl:function(){if(!this.XC)return-1;return this.
XC.Hl();},Ank:function(E){if(this.AnL===E)return;this.AnL=E;A.pe([this,this.AUM]
,this);},AZz:function(Aq){this.Ank(Aq);},Anl:function(E){if(this.AnM===E)return;
this.AnM=E;A.pe([this,this.AUN],this);},AZA:function(Aq){this.Anl(Aq);},AUN:function(
G){A.abo([this,this.AR7,this.AZA],0);},AUM:function(G){A.abo([this,this.AR6,this.
AZz],0);},A5X:function(){return this.Ab7;},AR6:function(){return this.AnL;},AR7:
function(){return this.AnM;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Ab7={I:this},0);this.__proto__=C.Fu;},_Done:function(
){this.__proto__=C.AC;this.Ab7._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Ab7._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab7)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.ALY={Init:
function(aArg){A.zV([this,this.Bd9],A._GetAutoObject(A.Device.Helper).Uq,0);A.zV([
this,this.Bd7],A._GetAutoObject(A.Device.Helper).Uo,0);this.Bd9(this);this.Bd7(this
);},At:function(E){C.Fu.At.call(this,E);this.Anl(A._GetAutoObject(A.Device.Helper
).Uq.Get(this.DK(E)));this.Ank(A._GetAutoObject(A.Device.Helper).Uo.Get(this.DK(
E)));},Ank:function(E){if(this.AnL===E)return;C.Fu.Ank.call(this,E);A._GetAutoObject(
A.Device.Helper).Uo.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Uo.
Ck();},Anl:function(E){if(this.AnM===E)return;C.Fu.Anl.call(this,E);A._GetAutoObject(
A.Device.Helper).Uq.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Uq.
Ck();},Bd9:function(G){this.AnM=A._GetAutoObject(A.Device.Helper).Uq.Get(this.DK(
this.Q));A.pe([this,this.AUN],this);},Bd7:function(G){this.AnL=A._GetAutoObject(
A.Device.Helper).Uo.Get(this.DK(this.Q));A.pe([this,this.AUM],this);},_Init:function(
aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.ALY;this.XC=A._GetAutoObject(A.
Device.Helper).AdC;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.ALZ={Agf:null,ABa:0,AA$:0,Init:function(aArg){A.zV([this,this.Beh],A._GetAutoObject(
A.Device.Helper).Afb,0);A.zV([this,this.Bef],A._GetAutoObject(A.Device.Helper).Afa
,0);A.zV([this,this.Bed],A._GetAutoObject(A.Device.Helper).Ae$,0);A.zV([this,this.
Bej],A._GetAutoObject(A.Device.Helper).Afc,0);this.Beh(this);this.Bef(this);this.
Bed(this);this.Bej(this);},At:function(E){C.Fu.At.call(this,E);this.Anl(A._GetAutoObject(
A.Device.Helper).Afb.Get(this.DK(E)));this.Ank(A._GetAutoObject(A.Device.Helper).
Afa.Get(this.DK(E)));this.AR$(A._GetAutoObject(A.Device.Helper).Ae$.Get(this.DK(
E)));this.ASb(A._GetAutoObject(A.Device.Helper).Afc.Get(this.DK(E)));},Ank:function(
E){if(this.AnL===E)return;C.Fu.Ank.call(this,E);A._GetAutoObject(A.Device.Helper
).Afa.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Afa.Ck();},Anl:function(
E){if(this.AnM===E)return;C.Fu.Anl.call(this,E);A._GetAutoObject(A.Device.Helper
).Afb.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Afb.Ck();},A5X:function(
){return this.Agf;},Beh:function(G){this.AnM=A._GetAutoObject(A.Device.Helper).Afb.
Get(this.DK(this.Q));A.pe([this,this.AUN],this);},Bef:function(G){this.AnL=A._GetAutoObject(
A.Device.Helper).Afa.Get(this.DK(this.Q));A.pe([this,this.AUM],this);},ASb:function(
E){if(this.ABa===E)return;this.ABa=E;A._GetAutoObject(A.Device.Helper).Afc.Set(this.
DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Afc.Ck();A.pe([this,this.A_0],this
);},AR$:function(E){if(this.AA$===E)return;this.AA$=E;A._GetAutoObject(A.Device.
Helper).Ae$.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Ae$.Ck();A.
pe([this,this.A_Z],this);},A_Z:function(G){A.abo([this,this.A7K,this.AR$],0);},A_0:
function(G){A.abo([this,this.A7L,this.ASb],0);},Bed:function(G){this.AA$=A._GetAutoObject(
A.Device.Helper).Ae$.Get(this.DK(this.Q));A.pe([this,this.A_Z],this);},Bej:function(
G){this.ABa=A._GetAutoObject(A.Device.Helper).Afc.Get(this.DK(this.Q));A.pe([this
,this.A_0],this);},A7L:function(){return this.ABa;},A7K:function(){return this.AA$;
},_Init:function(aArg){C.Fu._Init.call(this,aArg);A.Device.Agf._Init.call(this.Agf={
I:this},0);this.__proto__=C.ALZ;this.XC=A._GetAutoObject(A.Device.Helper).Agg;this.
Init(aArg);},_Done:function(){this.__proto__=C.Fu;this.Agf._Done();C.Fu._Done.call(
this);},_ReInit:function(){C.Fu._ReInit.call(this);this.Agf._ReInit();},_Mark:function(
D){var B;C.Fu._Mark.call(this,D);if((B=this.Agf)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.ALF={Ry:null,Init:function(
aArg){var B;A.zX([this,this.Ait],[B=this.AnimalType,B.B9,B.B_],0);A.pe([this,this.
Ait],this);this.A9(this.Ry);},Bi:function(E){C.IT.Bi.call(this,E);this.Ry.Bx(this.
Jf.AK);},Ait:function(G){A._GetAutoObject(A.Device.Device).Av1(this.AnimalType.Q
);},_Init:function(aArg){C.IT._Init.call(this,aArg);C.Tt._Init.call(this.Ry={I:this
},0);this.__proto__=C.ALF;var B;this.Jf.Ar(false);this.Jf.Aj(false);this.Jf.Y(false
);this.Ry.H(AH5);this.Ry.Aj(true);this.Ry.M$(14);this.Ry.Ag$(0);this.Ry.OI(0);this.
J(this.Ry,-6);this.Ry.AN=[this,this.AzK];this.Ry.At([B=this.AnimalType,B.B9,B.B_
]);this.Ry.CG(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.IT;this.Ry._Done();C.IT._Done.call(this);},_ReInit:function(){C.IT._ReInit.call(
this);this.Ry._ReInit();},_Mark:function(D){var B;C.IT._Mark.call(this,D);if((B=
this.Ry)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Tt={Filter:null,Ei:0,TableId:0,Operator:1,CT:function(){var F;this.Te((F=this.
Filter,F[1].call(F[0])).DX(this.Ei,this.Operator));},Bh:function(aSize){var B;C.
BX.Bh.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hn.H(Ahz
);this.HX.H([aSize[0]-40,40,aSize[0],80]);this.Ds.H([this.Hn.M[2]-5,this.Hn.M[1]
,this.HX.M[0]+5,this.Hn.M[3]]);this.Ds.AEC((B=this.Ds.M)[2]-B[0]);this.Ds.Hy(this.
Ds.Gi,true,null,null);},Bi:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L6],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L6
],E,0);A.pe([this,this.L6],this);},L6:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Te((F=this.Filter,F[1].call(F[0])).DX(this.Ei,this.
Operator));else this.Te(null);},Ag$:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L6],this);},M$:function(E){if(this.Ei===E)return;this.
Ei=E;A.pe([this,this.L6],this);},Te:function(AM){this.U(A._GetAutoObject(A.Device.
Helper).Amx(this.TableId,this.Ei));this.Am();},OI:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L6],this);},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.Tt;this.H(JP);this.V.A4(0x11);this.V.CB(A.aaL(A.
fl.By));},_ReInit:function(){C.BX._ReInit.call(this);this.V.CB(A.aaL(A.fl.By));this.
CT();},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARe={FV:null,MM:null,DP:null,Z:null,D9:null,Cm:null,CD:null,C7:null,Gb:null,
D8:null,C6:null,BW:null,Aw:null,Breed:null,I7:null,AnimalType:null,Gender:null,Pf:
null,KS:null,I5:null,Yl:null,AlS:null,KC:0,M0:0,A29:false,Init:function(aArg){var
B;A.zX([this,this.By9],[B=A._GetAutoObject(A.Device.Device),B.ADU,B.AIb],0);A.zV([
this,this.Atp],this.MM,0);A.zX([this,this.Atp],[B=A._GetAutoObject(A.Device.Device
),B.AvI,B.Ax7],0);A.zX([this,this.Gw],[B=A._GetAutoObject(A.Device.Device),B.ADU
,B.AIb],0);A.zV([this,this.Gw],this.MM,0);A.zX([this,this.Ait],this.BW.Q,0);A.pe([
this,this.Ait],this);A.pe([this,this.BdK],this);A.pe([this,this.Atp],this);A.pe([
this,this.Gw],this);A.pe([this,this.Bd6],this);},A9:function(E){C.AB.A9.call(this
,E);A.pe([this,this.AKJ],this);A.pe([this,this.DD],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.D9.Q,F[1].call(F[0])))this.D9.Are(A.jb.ET);else
this.D9.Are(A.jb.FZ);if(A._GetAutoObject(A.Device.Device).Aep){if(!!(F=this.Cm.Dd
,F[1].call(F[0])))this.Cm.Are(A.jb.ET);else this.Cm.Are(A.jb.FZ);}else this.Cm.Are(
A.jb.Acf);A.pe([this,this.DD],this);},Dw:function(G){var B;C.AB.Dw.call(this,G);
if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},LJ:
function(G){if(A._GetAutoObject(A.Device.Device).Ap.Ld())A._GetAutoObject(A.Device.
Device).A6(41,true,A._GetAutoObject(A.Device.Device).Ap.HA().toFixed(),0,null);A.
_GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(A.Device.Helper).ApT(A._GetAutoObject(
A.Device.Helper).W);this.Apa();},Cw:function(G){C.AB.Cw.call(this,G);A._GetAutoObject(
A.Device.Device).AEJ(0);},EV:function(G){C.AB.EV.call(this,G);this.I5.Ar(false);
A._GetAutoObject(A.Device.Device).Ua(false);},Eo:function(G){A._GetAutoObject(A.
Device.Helper).W.Hd();A._GetAutoObject(C.AX).Fl();},E9:function(G){var B;this.Aw.
Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.
Z.Bq[1]);},G8:function(G){A.pe([this,this.E9],this);},Atp:function(G){var F,CM;if(
!!A._GetAutoObject(A.Device.Device).OverlayMenu)return;this.AKJ(this);this.Am();
if((this.AR===this.D9)&&!!(F=this.D9.Q,F[1].call(F[0]))){if(A._GetAutoObject(A.Device.
Device).Ap.AdZ(26,(F=this.D9.Q,F[1].call(F[0])))){A._GetAutoObject(A.Device.Device
).A6(21,true,A._GetAutoObject(A.Device.Converter).SK((F=this.D9.Q,F[1].call(F[0]
))),0,[this,this.A2q]);(F=this.D9.Q,F[2].call(F[0],0));A.pe([this,this.A2p],this
);return;}else if(A._GetAutoObject(A.Device.Device).Aep)this.Jx(this.Cm);}if(this.
MM.AN5()>0)return;if((A._GetAutoObject(A.Device.Device).Aep&&(this.AR===this.Cm)
)&&!!(F=this.Cm.Dd,F[1].call(F[0])))this.Jx(this.D9);if(!!(F=this.D9.Q,F[1].call(
F[0]))&&(!A._GetAutoObject(A.Device.Device).Aep||!!(CM=this.Cm.Dd,CM[1].call(CM[
0]))))this.BbQ(this);},Xi:function(G){A._GetAutoObject(A.Device.Device).Dp(13);}
,AiH:function(){var F;this.FV.Ck(A._GetAutoObject(A.Device.Device).Ap);if(this.MM.
NO(23)){if(A._GetAutoObject(A.Device.Device).Br.Ld())A._GetAutoObject(A.Device.Device
).A6(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);else{var
L1=A._GetAutoObject(A.Device.Device).Ap.K_(0,this.FV.Id);A._GetAutoObject(A.Device.
Device).Sw(L1);var BZ=A._NewObject(A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(this.
FV.Id);BZ.OnSetBodyWeight(this.KC);BZ.OnSetTimestamp(this.FV.DateOfBirth);BZ.Ck(
A._GetAutoObject(A.Device.Device).Br);}}if(this.MM.NO(18)){if(A._GetAutoObject(A.
Device.Device).Br.Ld())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);else{var L1=A._GetAutoObject(A.Device.
Device).Ap.K_(0,this.FV.Id);A._GetAutoObject(A.Device.Device).Sw(L1);var BZ=A._NewObject(
A.Device.Rating,0);BZ.Gf();BZ.OnSetAnimalId(this.FV.Id);BZ.OnSetBodyWeight(this.
M0);BZ.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dt());BZ.Ck(A._GetAutoObject(
A.Device.Device).Br);}}A._GetAutoObject(A.Device.Device).Wh(65280);this.I5.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AEJ(F.Avl+1));this.A29=true;A.pe([this,
this.AKJ],this);this.Apa();},Gw:function(G){this.Cm.ASK(A._GetAutoObject(A.Device.
Device).Aep);A._GetAutoObject(A.Device.Helper).Mw(this.BW,this.MM.NO(14));A._GetAutoObject(
A.Device.Helper).Mw(this.C6,this.MM.NO(23));A._GetAutoObject(A.Device.Helper).Mw(
this.CD,this.MM.NO(32));A._GetAutoObject(A.Device.Helper).Mw(this.D8,this.MM.NO(
18));A._GetAutoObject(A.Device.Helper).Mw(this.C7,this.MM.NO(7));A._GetAutoObject(
A.Device.Helper).Mw(this.Gb,this.MM.NO(34));this.Yl.Y(!this.MM.AN5());var P;var Aa=
null;var AoT=this.AR;for(P=0;P<this.MM.Aft.NJ();P++){Aa=this.Bx3(this.MM.Aft.Oz(
P));if(!!Aa)this.Zf(Aa);}this.Jx(AoT);A._GetAutoObject(A.Device.Helper).AMO(this.
Z);this.Am();},Aez:function(E){if(this.KC===E)return;this.KC=E;A.abo([this,this.
Avv,this.Aez],0);},Ag5:function(E){if(this.M0===E)return;this.M0=E;A.abo([this,this.
Am3,this.Ag5],0);},BbQ:function(G){this.FV.Gf();A._GetAutoObject(A.Device.Helper
).ApT(this.FV);this.FV.QR(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FV.Na(A._GetAutoObject(A.Device.Helper).W.NaisId);this.FV.Ub(A._GetAutoObject(A.
Device.Helper).ALG(0,this.FV));this.FV.AeF(true);if(this.MM.NO(14))this.FV.DT(A.
_GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MM.NO(32))this.FV.NT(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MM.NO(7))this.FV.JI(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MM.NO(34))this.FV.Nb(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Ak2=A._GetAutoObject(A.Device.Helper).A0G(this.FV,0,A._GetAutoObject(
A.Device.Device).Ap);if(!Ak2)this.AiH();else A._GetAutoObject(A.Device.Helper).AJG(
this.FV,Ak2,0,0,[this,this.Apg]);},Apa:function(){A._GetAutoObject(A.Device.Helper
).W.Na(0);if(A._GetAutoObject(A.Device.Device).Aep)A._GetAutoObject(A.Device.Helper
).W.QR(0);this.Aez(0);this.Ag5(0);this.Jx(this.D9);this.Am();},Apg:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.Apa();break;case 43:this.Jx(this.D9);break;case 41:break;
default:A.ab5("%s%e",Asu,As.Id);}},Jx:function(Af){this.A9(Af);this.Z.Hy(Af,true
,null,null);this.Z.Vb(null,null);},BdK:function(G){this.D8.Ag9(A._GetAutoObject(
A.Device.Helper).W.Ahy(1));this.Atp(this);},Ait:function(G){this.C6.Ag9(A._GetAutoObject(
A.Device.Helper).Aa2(this.AnimalType.Q));},Bd6:function(G){var B;var BAc=this.Aw.
Background.Fd();var width=(BAc?((B=this.M)[2]-B[0])-((B=this.Aw.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var W9=this.Z.Vw(null,0x1);while(!!W9&&(((B=W9)?B.__proto__:null
)!==A.Core.Z)){Aa=(C.OQ.isPrototypeOf(W9)?W9:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));W9=this.Z.Vw(W9,0x1);}},Bx3:function(ZW){var Aa=null;switch(ZW){case 14:Aa=this.
BW;break;case 32:Aa=this.CD;break;case 23:Aa=this.C6;break;case 7:Aa=this.C7;break;
case 18:Aa=this.D8;break;case 34:Aa=this.Gb;break;default:A.ab5("%s%e",Bsl,ZW);}
return Aa;},By9:function(G){var F;if(A._GetAutoObject(A.Device.Device).Aep)A._GetAutoObject(
A.Device.Helper).W.QR(0);else if(!(F=this.Cm.Dd,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).W.QR(A._GetAutoObject(A.Device.Helper).Dt()-A._GetAutoObject(A.
Device.Helper).Amj(A._GetAutoObject(A.Device.Device).Adv));this.Atp(this);},AKJ:
function(G){var B;var AJL=A.jV;var Ayq=A.jb.CF;var Bb6=A.jb.AR;this.AlS.Aw0(this
);if(this.A29){this.A29=false;AJL=A._GetAutoObject(A.Device.Helper).Nd(A.aaR(A.acf.
Bn7),P0,A._GetAutoObject(A.Device.Converter).SK(this.FV.NaisId));A.pe([B=this.AlS
,B.StartTimer],this);Ayq=A.jb.ET;Bb6=A.jb.Text;}else if((this.AR===this.D9)&&!A.
_GetAutoObject(A.Device.Helper).W.NaisId)AJL=A.aaR(A.acf.Bnl);else if((this.AR===
this.Cm)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AJL=A.aaR(A.acf.Bnk);
this.Yl.U(AJL);this.Yl.BkF(Ayq);this.Yl.BkG(Bb6);},A2q:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajf();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajf();else if(As.PopupState===7){A._GetAutoObject(C.AX).BS(87);
A._GetAutoObject(A.Device.Device).Ajf();}}}else A._GetAutoObject(A.Device.Device
).Ajf();},A2p:function(G){A._GetAutoObject(A.Device.Device).Auf();},DD:function(
G){var B;if(!this.MM.AN5()){this.N.La.Dl(255);if(this.AR===this.D9){this.N.C2(A.
aaL(A.ach.Edit));this.N.Cc=[B=this.D9,B.FJ];}else if(this.AR===this.Cm){this.N.C2(
A.aaL(A.ach.Edit));this.N.Cc=[B=this.Cm,B.FJ];}else{this.N.C2(null);this.N.Cc=null;
}}else{this.N.C2(A.aaL(A.ach.AmE));if((this.D9.Ap3===A.jb.FZ)||(this.Cm.Ap3===A.
jb.FZ)){this.N.La.Dl(100);this.N.Cc=null;}else{this.N.La.Dl(255);this.N.Cc=[this
,this.BbQ];}}},Avv:function(){return this.KC;},Am3:function(){return this.M0;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ._Init.call(this.DP={I:this},0
);A.Core.Z._Init.call(this.Z={I:this},0);C.ATW._Init.call(this.D9={I:this},0);C.
ATS._Init.call(this.Cm={I:this},0);C.AwQ._Init.call(this.CD={I:this},0);C.BX._Init.
call(this.C7={I:this},0);C.Ar0._Init.call(this.Gb={I:this},0);C.Akw._Init.call(this.
D8={I:this},0);C.Akw._Init.call(this.C6={I:this},0);C.BX._Init.call(this.BW={I:this
},0);C.Aw._Init.call(this.Aw={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UA._Init.call(this.I7={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.MY._Init.call(this.
Pf={I:this},0);A.Device.KS._Init.call(this.KS={I:this},0);A.Device.Tu._Init.call(
this.I5={I:this},0);C.AUq._Init.call(this.Yl={I:this},0);A.Core.Timer._Init.call(
this.AlS={I:this},0);this.__proto__=C.ARe;var B;this.Background.L(A.jb.C0);this.
N.Y(true);this.Ec.Ar(false);this.Dk(C.AOM);this.DP.AY(0x3F);this.DP.H(E4);this.DP.
L(A.jb.CF);this.Z.H(E4);this.Z.Kf(9);this.D9.H(AH5);this.D9.Aj(true);this.D9.U(A.
aaR(A.acf.ABU));this.D9.ASK(true);this.D9.AE3(false);this.Cm.H(A$J);this.Cm.Aj(true
);this.Cm.U(A.aaR(A.acf.AdT));this.Cm.ASK(true);this.Cm.AEY(true);this.CD.H(Ass);
this.CD.Aj(true);this.CD.U(A.aaR(A.acf.Breed));this.C7.H(Ass);this.C7.Aj(true);this.
C7.U(A.aaR(A.acf.Ae0));this.Gb.H(A$K);this.Gb.Aj(true);this.Gb.U(A.aaR(A.acf.I7)
);this.D8.H(Bsm);this.D8.Aj(true);this.D8.U(A.aaR(A.acf.M0));this.D8.Gn(1000);this.
D8.E1(99000);this.D8.Ag9(A._GetAutoObject(A.Device.Helper).Aa2(this.AnimalType.Q
));this.C6.H(A$K);this.C6.Aj(true);this.C6.U(A.aaR(A.acf.KC));this.C6.Gn(1000);this.
C6.E1(99000);this.C6.Ag9(A._GetAutoObject(A.Device.Helper).Aa2(this.AnimalType.Q
));this.BW.H(Asr);this.BW.Aj(true);this.BW.U(A.aaR(A.acf.Ae8));this.Aw.H(IK);this.
I5.B1=false;this.I5.Cr=true;this.I5.HG(1);this.I5.Fe(1000);this.I5.T9(0);this.Yl.
H(ZS);this.Yl.Aj(true);this.Yl.Are(A.jb.Text);this.AlS.PK(3000);this.J(this.DP,0
);this.J(this.Z,0);this.J(this.D9,0);this.J(this.Cm,0);this.J(this.CD,0);this.J(
this.C7,0);this.J(this.Gb,0);this.J(this.D8,0);this.J(this.C6,0);this.J(this.BW,
0);this.J(this.Aw,0);this.J(this.Yl,0);this.N.Cv=[this,this.Eo];this.N.Ch=[this,
this.Xi];this.N.CS(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.Abc));this.Z.Ej=[this,
this.G8];this.D9.Gg([this,this.D3,this.GG]);this.D9.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Am6,B.Na]);this.D9.AEx([this,this.Atp]);this.D9.ASw([this,this.A2p]);
this.D9.ASx([this,this.A2q]);this.Cm.Gg([this,this.D3,this.GG]);this.Cm.AbN([B=A.
_GetAutoObject(A.Device.Helper).W,B.Avy,B.QR]);this.Cm.OB=[this,this.BdK];this.Cm.
ASw([this,this.A2p]);this.Cm.ASx([this,this.A2q]);this.CD.Gg([this,this.D3,this.
GG]);this.CD.LT([B=this.CD,B.FJ]);this.CD.LV(A.aaL(A.ach.Edit));this.CD.At([B=this.
Breed,B.B9,B.B_]);this.CD.CG(this.Breed);this.CD.Am$(this.Pf);this.C7.At([B=this.
Gender,B.B9,B.B_]);this.C7.CG(this.Gender);this.Gb.Gg([this,this.D3,this.GG]);this.
Gb.LT([B=this.Gb,B.FJ]);this.Gb.LV(A.aaL(A.ach.Edit));this.Gb.At([B=this.I7,B.B9
,B.B_]);this.Gb.CG(this.I7);this.Gb.Am$(this.KS);this.D8.At([this,this.Am3,this.
Ag5]);this.C6.At([this,this.Avv,this.Aez]);this.BW.At([B=this.AnimalType,B.B9,B.
B_]);this.BW.CG(this.AnimalType);this.Aw.Bl4([this,this.Bd6]);this.Breed.LU(A._GetAutoObject(
A.Device.Helper).W);this.I7.LU(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LU(A._GetAutoObject(A.Device.Helper).W);this.Gender.LU(A._GetAutoObject(A.Device.
Helper).W);this.FV=A._NewObject(A.Device.Animal,0);this.MM=A._GetAutoObject(C.Al1
);this.I5.Q=[B=A._GetAutoObject(A.Device.Device),B.AR3,B.AZw];this.AlS.Ms=[this,
this.AKJ];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DP._Done();
this.Z._Done();this.D9._Done();this.Cm._Done();this.CD._Done();this.C7._Done();this.
Gb._Done();this.D8._Done();this.C6._Done();this.BW._Done();this.Aw._Done();this.
Breed._Done();this.I7._Done();this.AnimalType._Done();this.Gender._Done();this.Pf.
_Done();this.KS._Done();this.I5._Done();this.Yl._Done();this.AlS._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DP._ReInit();this.Z.
_ReInit();this.D9._ReInit();this.Cm._ReInit();this.CD._ReInit();this.C7._ReInit(
);this.Gb._ReInit();this.D8._ReInit();this.C6._ReInit();this.BW._ReInit();this.Aw.
_ReInit();this.Breed._ReInit();this.I7._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pf._ReInit();this.KS._ReInit();this.I5._ReInit();this.Yl._ReInit(
);this.AlS._ReInit();this.D9.U(A.aaR(A.acf.ABU));this.Cm.U(A.aaR(A.acf.AdT));this.
CD.U(A.aaR(A.acf.Breed));this.C7.U(A.aaR(A.acf.Ae0));this.Gb.U(A.aaR(A.acf.I7));
this.D8.U(A.aaR(A.acf.M0));this.C6.U(A.aaR(A.acf.KC));this.BW.U(A.aaR(A.acf.Ae8)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FV)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.ArZ={Y0:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Y0={
I:this},0);this.__proto__=C.ArZ;this.N.B0(A.acf.Bg9);this.Number.H(Bsn);this.I6.
H(Bso);this.II.H(Bsp);this.Aki(2);this.BbN=false;this.BcR=true;this.BcS=false;this.
Y0.H(Bsq);this.Y0.KM(true);this.Y0.R(A.aaR(A.acf.A_B));this.Y0.L(A.jb.Text);this.
J(this.Y0,0);this.N.Cv=null;this.N.Cc=[this,this.AIi];this.N.CS(null);this.Y0.S(
A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Y0.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Y0._ReInit();this.Y0.R(A.aaR(A.acf.A_B));this.Y0.S(A.aaL(
A.fl.Ah));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.AC6={Cp:null,FB:function(E){if(this.M2===E)return;C.HB.FB.call(this,E);this.
Cp.C1(E);},X9:function(Hq){var B4=null;switch(Hq){case-1:case 0:B4=this.FO;break;
case 1:B4=this.Cp;break;case 2:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;
},_Init:function(aArg){C.HB._Init.call(this,aArg);C.DF._Init.call(this.Cp={I:this
},0);this.__proto__=C.AC6;this.H(Bsr);this.Cp.H(A$j);this.FO.H(Bss);this.J(this.
Cp,-2);this.Cp.Dj=[this,this.GI];},_Done:function(){this.__proto__=C.HB;this.Cp.
_Done();C.HB._Done.call(this);},_ReInit:function(){C.HB._ReInit.call(this);this.
Cp._ReInit();},_Mark:function(D){var B;C.HB._Mark.call(this,D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Ar0={GS:null
,Bh:function(aSize){C.ON.Bh.call(this,aSize);this.V.H(A.abN(this.V.M,this.GS.M[0
]));},Ai:function(Ae){C.ON.Ai.call(this,Ae);if(this.Hb)this.GS.FB(A.jb.CF);else this.
GS.FB(A.jb.C0);},A1f:function(){this.A9(this.GS);},_Init:function(aArg){C.ON._Init.
call(this,aArg);C.HB._Init.call(this.GS={I:this},0);this.__proto__=C.Ar0;this.GS.
H(Bst);this.J(this.GS,0);this.GS.At([this,this.ART,this.AES]);},_Done:function(){
this.__proto__=C.ON;this.GS._Done();C.ON._Done.call(this);},_ReInit:function(){C.
ON._ReInit.call(this);this.GS._ReInit();},_Mark:function(D){var B;C.ON._Mark.call(
this,D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AwQ={GS:null,Bh:function(aSize){C.ON.Bh.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GS.M[0]));},Ai:function(Ae){C.ON.Ai.call(this,Ae);if(this.Hb)this.GS.FB(
A.jb.CF);else this.GS.FB(A.jb.C0);},A1f:function(){this.A9(this.GS);},_Init:function(
aArg){C.ON._Init.call(this,aArg);C.AC6._Init.call(this.GS={I:this},0);this.__proto__=
C.AwQ;this.GS.AY(0x18);this.GS.H(Bsu);this.J(this.GS,0);this.GS.At([this,this.ART
,this.AES]);},_Done:function(){this.__proto__=C.ON;this.GS._Done();C.ON._Done.call(
this);},_ReInit:function(){C.ON._ReInit.call(this);this.GS._ReInit();},_Mark:function(
D){var B;C.ON._Mark.call(this,D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Ab8={ScreenTypeToString:
null,Do:function(){return 4;},F$:function(aIndex){if((aIndex<0)||(aIndex>=106))return A.
jV;return this.ScreenTypeToString.BQ(this.C4(aIndex));},_Init:function(aArg){C.CN.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Ab8;this.Co.Set(0,3);this.Co.Set(1,35);this.Co.Set(2
,34);this.Co.Set(3,47);},_Done:function(){this.__proto__=C.CN;this.ScreenTypeToString.
_Done();C.CN._Done.call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.CN._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AU9={Wd:function(G){this.Af9();A._GetAutoObject(C.BL).Qp(A.aaR(A.acf.Settings
),[this,this.A2F]);A._GetAutoObject(C.BL).Ft();this.ALr();A._GetAutoObject(C.BL).
Nw(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.
BL).Nw(A.aaR(A.acf.AM4)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dp(
6);},Dw:function(G){},Cw:function(G){C.Rx.Cw.call(this,G);A.pe([this,this.AZB],this
);},Aa4:function(){return C.Ajg;},Aa5:function(){return C.AjA;},QY:function(G){A.
_GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(A.Device.Helper).A5_());}
,HJ:function(G){C.Rx.HJ.call(this,G);if(this.AjW()===false){this.N.Cn(A.aaL(A.ach.
AuZ));this.N.Ch=[this,this.ANh];this.N.FC(A.jV);}this.N.OJ(false);this.N.OK(false
);},AfU:function(){A._GetAutoObject(C.AX).BS(97);},AfT:function(){A._GetAutoObject(
C.AX).BS(98);},A2F:function(G){A._GetAutoObject(A.Device.Device).Dp(0);A._GetAutoObject(
C.AX).BS(101);},_Init:function(aArg){C.Rx._Init.call(this,aArg);this.__proto__=C.
AU9;this.Dk(C.ACw);this.Du(A.aaR(A.acf.A7m));this.ASs(A._GetAutoObject(C.Axi));}
,_ReInit:function(){C.Rx._ReInit.call(this);this.Du(A.aaR(A.acf.A7m));},_className:
"Application::YoungNoTransponderListScreen"};C.AU8={_Init:function(aArg){C.IT._Init.
call(this,aArg);this.__proto__=C.AU8;this.KQ.Ar(false);this.KQ.Aj(false);this.KQ.
Y(false);},_className:"Application::YoungNoTransponderListFilterScreen"};C.AU7={
_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AU7;this.N.B0(A.
aaR(A.acf.A4u));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.B0(A.aaR(A.acf.
A4u));},_className:"Application::YoungNoTransponderListActionsScreen"};C.AQn={Sc:
null,Q:null,A7i:0,M2:0,Init:function(aArg){this.ASv(6);},At:function(E){if(A.aaZ(
this.Q,E))return;this.Q=E;if(!!this.Sc)this.Sc.At(E);},ASv:function(E){if(this.A7i===
E)return;this.A7i=E;var X;switch(E){case 2:X=A._NewObject(C.HB,0);break;case 3:X=
A._NewObject(C.AC6,0);break;case 4:X=A._NewObject(C.AQk,0);break;case 5:X=A._NewObject(
C.AQl,0);break;case 6:X=A._NewObject(C.Ave,0);break;default:{X=null;A.ab5("%s%i"
,Bsv,E);}}this.BlG(X);},BlG:function(E){if(this.Sc===E)return;if(!!this.Sc){this.
Sc.At(null);this.HI(this.Sc);}this.Sc=E;if(!!this.Sc){this.Sc.At(this.Q);this.J(
this.Sc,0);}},FB:function(E){if(this.M2===E)return;this.M2=E;if(!!this.Sc)this.Sc.
FB(E);},Sv:function(Gq){if(!!this.Sc)this.Sc.Sv(Gq);},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);this.__proto__=C.AQn;this.H(AxC);this.Init(aArg);},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Sc)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::InputNumberVariable_32"};C.AQk={CQ:null,Cp:null,FB:function(E){if(
this.M2===E)return;C.HB.FB.call(this,E);this.Cp.C1(E);this.CQ.C1(E);},X9:function(
Hq){var B4=null;switch(Hq){case-1:case 0:B4=this.FO;break;case 1:B4=this.Cp;break;
case 2:B4=this.CQ;break;case 3:B4=this.GO;break;default:A.ab5("%s",AhG);}return B4;
},_Init:function(aArg){C.HB._Init.call(this,aArg);C.DF._Init.call(this.CQ={I:this
},0);C.DF._Init.call(this.Cp={I:this},0);this.__proto__=C.AQk;this.H(Bsw);this.GO.
H(AsG);this.CQ.H(A$k);this.Cp.H(A$l);this.FO.H(A$m);this.J(this.CQ,-2);this.J(this.
Cp,-2);this.CQ.Dj=[this,this.GI];this.Cp.Dj=[this,this.GI];},_Done:function(){this.
__proto__=C.HB;this.CQ._Done();this.Cp._Done();C.HB._Done.call(this);},_ReInit:function(
){C.HB._ReInit.call(this);this.CQ._ReInit();this.Cp._ReInit();},_Mark:function(D
){var B;C.HB._Mark.call(this,D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AB3={SL:null,Ai:function(Ae){C.Aa1.Ai.call(this,Ae);this.SL.L(this.V.AQ);},_Init:
function(aArg){C.Aa1._Init.call(this,aArg);C.CO._Init.call(this.SL={I:this},0);this.
__proto__=C.AB3;this.V.Y(false);this.A1.H(Bsx);this.A1.ASv(4);this.SL.H(Bsy);this.
SL.R(A.aaR(A.acf.J8));this.SL.L(A.jb.Bj);this.J(this.SL,0);this.SL.S(A.aaL(A.fl.
Ah));this.SL.A8(A.aaL(A.fl.Ak));this.SL.CB(null);},_Done:function(){this.__proto__=
C.Aa1;this.SL._Done();C.Aa1._Done.call(this);},_ReInit:function(){C.Aa1._ReInit.
call(this);this.SL._ReInit();this.SL.R(A.aaR(A.acf.J8));this.SL.S(A.aaL(A.fl.Ah)
);this.SL.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Aa1._Mark.call(this,D);
if((B=this.SL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LS={YD:null,TT:null,AQ:0,A6z:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YD.L(this.AQ);this.TT.L(this.AQ);},A9g:function(E){var B;if(this.A6z===
E)return;this.A6z=E;if(E){this.YD.Y(true);this.TT.DM([this.TT.Eu[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YD.Y(false);this.TT.DM([this.TT.Eu[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.DR._Init.call(
this.YD={I:this},0);A.acg.DR._Init.call(this.TT={I:this},0);this.__proto__=C.LS;
this.H(AZd);this.YD.AY(0x2D);this.YD.DM(AhC);this.YD.DY(A$L);this.YD.L(A.jb.Text
);this.TT.AY(0x36);this.TT.DM(A$L);this.TT.DY(Bsz);this.TT.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YD,0);this.J(this.TT,0);},_Done:function(){this.__proto__=
A.Core.O;this.YD._Done();this.TT._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.YD._ReInit();this.TT._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.ATA={Sh:null,Pu:null,C7:null,BW:null,CD:null,GF:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pf:null,UA:null,KS:null,Init:function(aArg){A.zX([this
,this.At$],this.BW.Q,0);A.zX([this,this.AMl],this.CD.Q,0);A.zX([this,this.Bpr],this.
Sh.Q,0);A.zX([this,this.AuP],this.C7.Q,0);A.zX([this,this.AU5],this.GF.Q,0);},At$:
function(G){var F;A._GetAutoObject(A.Device.Device).DT((F=this.BW.Q,F[1].call(F[
0])));},Bpr:function(G){var F;A._GetAutoObject(A.Device.Device).Awx((F=this.Sh.Q
,F[1].call(F[0])));},AuP:function(G){var F;A._GetAutoObject(A.Device.Device).JI((
F=this.C7.Q,F[1].call(F[0])));},AU5:function(G){var F;A._GetAutoObject(A.Device.
Device).Nb((F=this.GF.Q,F[1].call(F[0])));},AMl:function(G){var F;A._GetAutoObject(
A.Device.Device).NT((F=this.CD.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cq._Init.
call(this,aArg);C.BX._Init.call(this.Sh={I:this},0);C.I2._Init.call(this.Pu={I:this
},0);C.BX._Init.call(this.C7={I:this},0);C.BX._Init.call(this.BW={I:this},0);C.AwQ.
_Init.call(this.CD={I:this},0);C.Ar0._Init.call(this.GF={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.MY._Init.call(this.Pf={I:this},0);C.UA._Init.call(this.UA={I:
this},0);A.Device.KS._Init.call(this.KS={I:this},0);this.__proto__=C.ATA;var B;this.
JJ((A.aaR(A.acf.ArN)+AxN)+A.aaR(A.acf.Ajm));this.Sh.H(AhF);this.Sh.Aj(true);this.
Sh.U(A.aaR(A.acf.A__));this.Sh.Bg(true);this.Sh.Bx(0);this.Pu.H(AxA);this.Pu.Aj(
true);this.Pu.Y(true);this.Pu.U(A.aaR(A.acf.Adv));this.Pu.Gn(0);this.Pu.E1(99);this.
Pu.Kj(A.aaR(A.acf.J8));this.Pu.KL(A.aaR(A.acf.GB));this.C7.H(ZS);this.C7.Aj(true
);this.C7.U(A.aaR(A.acf.Ae0));this.C7.Bg(true);this.C7.Bx(0);this.BW.H(An2);this.
BW.Aj(true);this.BW.U(A.aaR(A.acf.Ae8));this.BW.Bg(true);this.BW.Bx(0);this.CD.H(
AkS);this.CD.Aj(true);this.CD.U(A.aaR(A.acf.Breed));this.CD.Bg(false);this.GF.H(
AkS);this.GF.Aj(true);this.GF.U(A.aaR(A.acf.I7));this.GF.Bg(true);this.AnimalType.
At(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.At(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.At(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.Device).Breed);
this.UA.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sh,0);this.
J(this.Pu,0);this.J(this.C7,0);this.J(this.BW,0);this.J(this.CD,0);this.J(this.GF
,0);this.Sh.At([B=this.WeightRecordingScope,B.B9,B.B_]);this.Sh.CG(this.WeightRecordingScope
);this.Pu.At([B=A._GetAutoObject(A.Device.Device),B.A7C,B.A$7]);this.C7.At([B=this.
Gender,B.B9,B.B_]);this.C7.CG(this.Gender);this.BW.At([B=this.AnimalType,B.B9,B.
B_]);this.BW.CG(this.AnimalType);this.CD.Gg([this,this.D3,this.GG]);this.CD.LT([
B=this.CD,B.FJ]);this.CD.LV(A.aaL(A.ach.Edit));this.CD.At([B=this.Breed,B.B9,B.B_
]);this.CD.CG(this.Breed);this.CD.Am$(this.Pf);this.GF.Gg([this,this.D3,this.GG]
);this.GF.LT([B=this.GF,B.FJ]);this.GF.LV(A.aaL(A.ach.Edit));this.GF.At([B=this.
UA,B.B9,B.B_]);this.GF.CG(this.UA);this.GF.Am$(this.KS);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cq;this.Sh._Done();this.Pu._Done();this.C7._Done();this.
BW._Done();this.CD._Done();this.GF._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pf._Done();this.UA._Done();this.
KS._Done();C.Cq._Done.call(this);},_ReInit:function(){C.Cq._ReInit.call(this);this.
Sh._ReInit();this.Pu._ReInit();this.C7._ReInit();this.BW._ReInit();this.CD._ReInit(
);this.GF._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pf._ReInit();this.UA._ReInit();
this.KS._ReInit();this.JJ((A.aaR(A.acf.ArN)+AxN)+A.aaR(A.acf.Ajm));this.Sh.U(A.aaR(
A.acf.A__));this.Pu.U(A.aaR(A.acf.Adv));this.Pu.Kj(A.aaR(A.acf.J8));this.Pu.KL(A.
aaR(A.acf.GB));this.C7.U(A.aaR(A.acf.Ae0));this.BW.U(A.aaR(A.acf.Ae8));this.CD.U(
A.aaR(A.acf.Breed));this.GF.U(A.aaR(A.acf.I7));},_Mark:function(D){var B;C.Cq._Mark.
call(this,D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.ATz={QC:null,Jj:null,Ih:null,Fa:null,Fw:null,Ig:null,AutoRegistrationMode:null
,Adx:null,Init:function(aArg){var B;A.zX([this,this.Bf$],this.QC.Q,0);A.zX([this
,this.Bdw],[B=A._GetAutoObject(A.Device.Device),B.ARC,B.AZh],0);A.zX([this,this.
Apl],[B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw],0);A.zX([this,this.Apl],[
B=A._GetAutoObject(A.Device.Device),B.AbE,B.Acx],0);A.pe([this,this.Bdw],this);A.
pe([this,this.Apl],this);},Bf$:function(G){var F;A._GetAutoObject(A.Device.Device
).AvP((F=this.QC.Q,F[1].call(F[0])));},Bdw:function(G){switch(A._GetAutoObject(A.
Device.Device).Aga){case 0:A._GetAutoObject(A.Device.Helper).Mw(this.Ih,true);break;
case 1:A._GetAutoObject(A.Device.Helper).Mw(this.Ih,false);break;default:throw new
Error(BsA+A._GetAutoObject(A.Device.Device).Aga.toFixed());}},Apl:function(G){var
F,CM;if(((F=this.Fa.Q,F[1].call(F[0]))+(CM=this.Fw.Q,CM[1].call(CM[0])))>12)(CM=
this.Fw.Q,CM[2].call(CM[0],12-(F=this.Fa.Q,F[1].call(F[0]))));},_Init:function(aArg
){C.Cq._Init.call(this,aArg);C.BX._Init.call(this.QC={I:this},0);C.BX._Init.call(
this.Jj={I:this},0);C.AFX._Init.call(this.Ih={I:this},0);C.I2._Init.call(this.Fa={
I:this},0);C.I2._Init.call(this.Fw={I:this},0);C.ADv._Init.call(this.Ig={I:this}
,0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.Adx.
_Init.call(this.Adx={I:this},0);this.__proto__=C.ATz;var B;this.JJ(A.aaR(A.acf.ApV
));this.QC.H(AH5);this.QC.Aj(true);this.QC.U(A.aaR(A.acf.ApV));this.QC.Bg(false);
this.QC.Gn(-1);this.QC.E1(1);this.Jj.H(WV);this.Jj.Aj(true);this.Jj.Y(true);this.
Jj.U(A.aaR(A.acf.AA3));this.Jj.Bg(true);this.Ih.H(ZS);this.Ih.Aj(true);this.Ih.Y(
true);this.Ih.U(A.aaR(A.acf.ADD));this.Ih.Bg(true);this.Fa.H(An2);this.Fa.Aj(true
);this.Fa.Y(true);this.Fa.U(A.aaR(A.acf.ABO));this.Fa.Bg(false);this.Fa.Gn(2);this.
Fa.E1(6);this.Fa.Kj(A.aaR(A.acf.Ajo));this.Fa.KL(A.aaR(A.acf.E$));this.Fw.H(AkS);
this.Fw.Aj(true);this.Fw.U(A.aaR(A.acf.ADJ));this.Fw.Bg(true);this.Fw.Gn(0);this.
Fw.E1(12);this.Fw.Kj(A.aaR(A.acf.Ajo));this.Fw.KL(A.aaR(A.acf.E$));this.Ig.H(BsB
);this.Ig.Ar(true);this.Ig.Aj(true);this.Ig.Bg(false);this.Ig.AER(A.aaR(A.acf.AA_
));this.AutoRegistrationMode.At(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.J(this.QC,0);this.J(this.Jj,0);this.J(this.Ih,0);this.J(this.Fa,0);this.J(
this.Fw,0);this.J(this.Ig,0);this.QC.At([B=this.AutoRegistrationMode,B.B9,B.B_]);
this.QC.CG(this.AutoRegistrationMode);this.Jj.At([B=this.Adx,B.B9,B.B_]);this.Jj.
CG(this.Adx);this.Ih.T8([B=A._GetAutoObject(A.Device.Device),B.Wb,B.AZl]);this.Ih.
Aj_([B=A._GetAutoObject(A.Device.Device),B.AvA,B.Ax1]);this.Fa.At([B=A._GetAutoObject(
A.Device.Device),B.AbD,B.Acw]);this.Fw.At([B=A._GetAutoObject(A.Device.Device),B.
AbE,B.Acx]);this.Ig.Dz(A.aaL(A.ach.AmF));this.Ig.PJ([B=A._GetAutoObject(A.Device.
Device),B.AbD,B.Acw]);this.Ig.QS([B=A._GetAutoObject(A.Device.Device),B.AbE,B.Acx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cq;this.QC._Done();this.Jj.
_Done();this.Ih._Done();this.Fa._Done();this.Fw._Done();this.Ig._Done();this.AutoRegistrationMode.
_Done();this.Adx._Done();C.Cq._Done.call(this);},_ReInit:function(){C.Cq._ReInit.
call(this);this.QC._ReInit();this.Jj._ReInit();this.Ih._ReInit();this.Fa._ReInit(
);this.Fw._ReInit();this.Ig._ReInit();this.AutoRegistrationMode._ReInit();this.Adx.
_ReInit();this.JJ(A.aaR(A.acf.ApV));this.QC.U(A.aaR(A.acf.ApV));this.Jj.U(A.aaR(
A.acf.AA3));this.Ih.U(A.aaR(A.acf.ADD));this.Fa.U(A.aaR(A.acf.ABO));this.Fa.Kj(A.
aaR(A.acf.Ajo));this.Fa.KL(A.aaR(A.acf.E$));this.Fw.U(A.aaR(A.acf.ADJ));this.Fw.
Kj(A.aaR(A.acf.Ajo));this.Fw.KL(A.aaR(A.acf.E$));this.Ig.AER(A.aaR(A.acf.AA_));}
,_Mark:function(D){var B;C.Cq._Mark.call(this,D);if((B=this.QC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AutoRegistrationMode)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adx)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AUD={OC:null,Jj:null,Ih:null,Fa:null,Fw:null,Ig:null,Ae6:null,Init:function(
aArg){var B;A.zX([this,this.Bd$],[B=A._GetAutoObject(A.Device.Device),B.AR5,B.AZy
],0);A.zX([this,this.Apl],[B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw],0);A.
zX([this,this.Apl],[B=A._GetAutoObject(A.Device.Device),B.AbE,B.Acx],0);A.pe([this
,this.Bd$],this);A.pe([this,this.Apl],this);},Bd$:function(G){var AKn=false;var AtI=
false;switch(A._GetAutoObject(A.Device.Device).Ahv){case 0:{AKn=false;AtI=false;
}break;case 1:{AKn=true;AtI=false;}break;case 2:{AKn=false;AtI=true;}break;default:
throw new Error(BsC+A._GetAutoObject(A.Device.Device).Ahv.toFixed());}A._GetAutoObject(
A.Device.Helper).Mw(this.Ih,AKn);A._GetAutoObject(A.Device.Helper).Mw(this.Fa,AtI
);A._GetAutoObject(A.Device.Helper).Mw(this.Fw,AtI);A._GetAutoObject(A.Device.Helper
).Mw(this.Ig,AtI);},Apl:function(G){var F,CM;if(((F=this.Fa.Q,F[1].call(F[0]))+(
CM=this.Fw.Q,CM[1].call(CM[0])))>12)(CM=this.Fw.Q,CM[2].call(CM[0],12-(F=this.Fa.
Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cq._Init.call(this,aArg);C.I2._Init.
call(this.OC={I:this},0);C.BX._Init.call(this.Jj={I:this},0);C.AFX._Init.call(this.
Ih={I:this},0);C.I2._Init.call(this.Fa={I:this},0);C.I2._Init.call(this.Fw={I:this
},0);C.ADv._Init.call(this.Ig={I:this},0);C.Ae6._Init.call(this.Ae6={I:this},0);
this.__proto__=C.AUD;var B;this.JJ(A.aaR(A.acf.LinkTransponder));this.OC.H(AH5);
this.OC.Aj(true);this.OC.Y(true);this.OC.U(A.aaR(A.acf.A6S));this.OC.Bg(false);this.
OC.Gn(1);this.OC.E1(365);this.OC.Kj(A.aaR(A.acf.J8));this.OC.KL(A.aaR(A.acf.GB));
this.Jj.H(WV);this.Jj.Aj(true);this.Jj.Y(true);this.Jj.U(A.aaR(A.acf.AA3));this.
Jj.Bg(true);this.Ih.H(ZS);this.Ih.Aj(true);this.Ih.Y(true);this.Ih.U(A.aaR(A.acf.
ADD));this.Ih.Bg(false);this.Fa.H(An2);this.Fa.Aj(true);this.Fa.Y(true);this.Fa.
U(A.aaR(A.acf.ABO));this.Fa.Bg(false);this.Fa.Gn(2);this.Fa.E1(6);this.Fa.Kj(A.aaR(
A.acf.Ajo));this.Fa.KL(A.aaR(A.acf.E$));this.Fw.H(AkS);this.Fw.Aj(true);this.Fw.
U(A.aaR(A.acf.ADJ));this.Fw.Bg(true);this.Fw.Gn(0);this.Fw.E1(12);this.Fw.Kj(A.aaR(
A.acf.Ajo));this.Fw.KL(A.aaR(A.acf.E$));this.Ig.H(AHf);this.Ig.Ar(true);this.Ig.
Aj(true);this.Ig.Bg(false);this.Ig.AER(A.aaR(A.acf.AA_));this.J(this.OC,0);this.
J(this.Jj,0);this.J(this.Ih,0);this.J(this.Fa,0);this.J(this.Fw,0);this.J(this.Ig
,0);this.OC.At([B=A._GetAutoObject(A.Device.Device),B.A78,B.Bam]);this.Jj.At([B=
this.Ae6,B.B9,B.B_]);this.Jj.CG(this.Ae6);this.Ih.T8([B=A._GetAutoObject(A.Device.
Device),B.Wb,B.AZl]);this.Ih.Aj_([B=A._GetAutoObject(A.Device.Device),B.AvA,B.Ax1
]);this.Fa.At([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.Fw.At([B=A.
_GetAutoObject(A.Device.Device),B.AbE,B.Acx]);this.Ig.Dz(A.aaL(A.ach.AmF));this.
Ig.PJ([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.Ig.QS([B=A._GetAutoObject(
A.Device.Device),B.AbE,B.Acx]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cq;this.OC._Done();this.Jj._Done();this.Ih._Done();this.Fa._Done();this.Fw._Done(
);this.Ig._Done();this.Ae6._Done();C.Cq._Done.call(this);},_ReInit:function(){C.
Cq._ReInit.call(this);this.OC._ReInit();this.Jj._ReInit();this.Ih._ReInit();this.
Fa._ReInit();this.Fw._ReInit();this.Ig._ReInit();this.Ae6._ReInit();this.JJ(A.aaR(
A.acf.LinkTransponder));this.OC.U(A.aaR(A.acf.A6S));this.OC.Kj(A.aaR(A.acf.J8));
this.OC.KL(A.aaR(A.acf.GB));this.Jj.U(A.aaR(A.acf.AA3));this.Ih.U(A.aaR(A.acf.ADD
));this.Fa.U(A.aaR(A.acf.ABO));this.Fa.Kj(A.aaR(A.acf.Ajo));this.Fa.KL(A.aaR(A.acf.
E$));this.Fw.U(A.aaR(A.acf.ADJ));this.Fw.Kj(A.aaR(A.acf.Ajo));this.Fw.KL(A.aaR(A.
acf.E$));this.Ig.AER(A.aaR(A.acf.AA_));},_Mark:function(D){var B;C.Cq._Mark.call(
this,D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Fw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae6)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::TransponderAssignmentSettingsScreen"};C.Ae6={TransponderAssignmentIdChangeMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bfn],[B=A._GetAutoObject(A.Device.
Device),B.AR5,B.AZy],0);A.pe([this,this.Bfn],this);},Do:function(){return 3;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=3))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.TransponderAssignmentIdChangeMethodToString.
BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 2;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awu(E);},Bfn:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Ahv;A.abo([this,this.B9,this.B_],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.TransponderAssignmentIdChangeMethodToString.
_Init.call(this.TransponderAssignmentIdChangeMethodToString={I:this},0);this.__proto__=
C.Ae6;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.TransponderAssignmentIdChangeMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
TransponderAssignmentIdChangeMethodToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.TransponderAssignmentIdChangeMethodToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I3={B5:null,IL:null,Cl:null,Al$:null,R1:null,AmX:null,Aji:null,Text:null,CR:
null,Ef:0,MJ:false,Ai:function(Ae){var B;A.acn.I3.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IL.Ar(true);else{this.IL.Ar(false);this.CR.Y(false);}},A3C:function(G
){var B;var A$=this.Text.M;var Nn=0;var Np=0;if(this.CR.Ek[0]<A$[0])Nn=A$[0]-this.
CR.Ek[0];if(this.CR.Ek[0]>A$[2])Nn=A$[2]-this.CR.Ek[0];if(this.CR.Ek[1]<A$[1])Np=
A$[1]-this.CR.Ek[1];if(this.CR.Eu[1]>A$[3])Np=A$[3]-this.CR.Eu[1];if(!!Nn||!!Np)
this.Text.Gh(A.abf(this.Text.Bq,[Nn,Np]));Nn=this.Text.Bq[0];Np=this.Text.Bq[1];
var CZ=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(CZ[0]<=((B=this.Text.M)[2]-B[0]
))Nn=0;if(CZ[1]<=((B=this.Text.M)[3]-B[1]))Np=0;this.Text.Gh([Nn,Np]);},AlV:function(
G){if(!this.B5)return;var A25=this.Text.AF_(this.Ef);var pos=this.Text.AeS(A25);
this.CR.DY(A.abe(pos,[0,this.B5.Ascent]));this.CR.DM(A.abf(pos,[0,this.B5.Descent
]));if(this.IL.Bv){this.IL.Ar(false);this.IL.Ar(true);}if(this.MJ){A.pe([this,this.
A3C],this);this.MJ=false;}},AzO:function(G){if(!this.B5)return;var Ez=this.Text.
AF_(this.Ef);if(this.Cl.CK===6){Ez=[Ez[0]-1,Ez[1]];if(this.Text.Ans(Ez)===this.Ef
){Ez=[Ez[0],Ez[1]-1];Ez=[this.Text.ACh(Ez[1]).length,Ez[1]];}}if(this.Cl.CK===7){
Ez=[Ez[0]+1,Ez[1]];if(this.Text.Ans(Ez)===this.Ef){Ez=[Ez[0],Ez[1]+1];Ez=[0,Ez[1
]];}}if(this.Cl.CK===4){var pos=this.Text.AeS(Ez);var Aao=(this.B5.Ascent+this.B5.
Descent)+this.B5.Leading;Ez=this.Text.ATa(A.abe(pos,[0,Aao]));}if(this.Cl.CK===5
){var pos=this.Text.AeS(Ez);var Aao=(this.B5.Ascent+this.B5.Descent)+this.B5.Leading;
Ez=this.Text.ATa(A.abf(pos,[0,Aao]));}var UX=this.Text.Ans(Ez);var Io=this.Text.
String.charCodeAt(UX)||0;if(((Io===0x5E)||(Io===0x7E))||(Io===0x25))UX=UX-1;if(UX
!==this.Ef){this.Ef=UX;A.pe([this,this.AlV],this);this.MJ=true;}},BdE:function(G
){if(!this.Ef)return;var Io=this.Text.String.charCodeAt(this.Ef-1)||0;var CA=1;if(((
Io===0x5E)||(Io===0x7E))||(Io===0x25))CA=2;this.Text.R(A.ab1(this.Text.String,this.
Ef-CA,CA));this.Ef=this.Ef-CA;this.MJ=true;},AzP:function(G){if(this.Ef>=(this.Text.
String.length-1))return;var Io=this.Text.String.charCodeAt(this.Ef)||0;var CA=1;
if(Io===0x25)CA=2;this.Text.R(A.ab1(this.Text.String,this.Ef,CA));this.MJ=true;}
,BdS:function(G){this.Text.R(A.abU(this.Text.String,BsD,this.Ef));this.Ef=this.Ef+
1;this.MJ=true;},BdG:function(G){var Io=this.Aji.DJ;var AtL=String.fromCharCode(
Io);A.ab5("%c",Io);if((((Io===0x5E)||(Io===0x7E))||(Io===0xAD))||(Io===0x25))AtL=
BsE+String.fromCharCode(Io);this.Text.R(A.abU(this.Text.String,AtL,this.Ef));this.
Ef=this.Ef+AtL.length;this.MJ=true;},_Init:function(aArg){A.acn.I3._Init.call(this
,aArg);A.acl.Tu._Init.call(this.IL={I:this},0);A.Core.BJ._Init.call(this.Cl={I:this
},0);A.Core.BJ._Init.call(this.Al$={I:this},0);A.Core.BJ._Init.call(this.R1={I:this
},0);A.Core.BJ._Init.call(this.AmX={I:this},0);A.Core.BJ._Init.call(this.Aji={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.DR._Init.call(this.CR={
I:this},0);this.__proto__=C.I3;var B;this.H(BsF);this.IL.B1=false;this.IL.Cr=true;
this.IL.Fe(500);this.IL.T9(500);this.Cl.Filter=147;this.Cl.Bv=false;this.Al$.Filter=
151;this.R1.Filter=44;this.AmX.Filter=149;this.Aji.Filter=145;this.Text.AY(0x3F);
this.Text.H(BsG);this.Text.KM(true);this.Text.A4(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CR.DM(BsH);this.CR.DY(BsI);this.CR.A9S(2);this.CR.A9R(2);this.
CR.L(0xFF000000);this.CR.Y(false);this.J(this.Text,0);this.J(this.CR,0);this.IL.
Q=[B=this.CR,B.Fd,B.Y];this.Cl.BK=[this,this.AzO];this.Cl.DS=[this,this.AzO];this.
Al$.BK=[this,this.BdE];this.Al$.DS=[this,this.BdE];this.R1.BK=[this,this.AzP];this.
R1.DS=[this,this.AzP];this.AmX.BK=[this,this.BdS];this.AmX.DS=[this,this.BdS];this.
Aji.BK=[this,this.BdG];this.Aji.DS=[this,this.BdG];this.Text.QT([this,this.AlV]);
this.Text.S(A.aaL(A.aci.AB7));this.B5=A.aaL(A.aci.AB7);},_Done:function(){this.__proto__=
A.acn.I3;this.IL._Done();this.Cl._Done();this.Al$._Done();this.R1._Done();this.AmX.
_Done();this.Aji._Done();this.Text._Done();this.CR._Done();A.acn.I3._Done.call(this
);},_ReInit:function(){A.acn.I3._ReInit.call(this);this.IL._ReInit();this.Cl._ReInit(
);this.Al$._ReInit();this.R1._ReInit();this.AmX._ReInit();this.Aji._ReInit();this.
Text._ReInit();this.CR._ReInit();},_Mark:function(D){var B;A.acn.I3._Mark.call(this
,D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AmX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aji)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AUr={I3:null,Dw:function(G
){switch(this.Cl.CK){case 6:A._GetAutoObject(A.Device.Device).Auf();break;case 7:
A._GetAutoObject(A.Device.Device).ApW();break;case 4:A._GetAutoObject(A.Device.Device
).Ajf();break;case 5:A._GetAutoObject(A.Device.Device).ApX();break;default:;}},Eo:
function(G){A._GetAutoObject(C.AX).Fl();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I3._Init.call(this.I3={I:this},0);this.__proto__=C.AUr;this.H(Ca);this.
N.Y(true);this.Dk(C.Aqu);this.I3.H(E4);this.J(this.I3,0);this.A9(this.I3);this.N.
Cv=[this,this.Eo];this.N.CS(A.aaL(A.ach.EU));},_Done:function(){this.__proto__=C.
AB;this.I3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I3._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATi={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AIh],[B=A._GetAutoObject(A.Device.Device),B.ARH,B.AZi],0);},Wd:function(G){
if((!!this.Bf&&!!this.Bf.AZ)&&(this.Bf.AZ.Cb()>0)){if(this.AI1())A._GetAutoObject(
C.BL).Qp(A.aaR(A.acf.ANH),[this,this.AH6]);else A._GetAutoObject(C.BL).Qp(A.aaR(
A.acf.ANH),null);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Qp(A.aaR(A.acf.
ABp),[this,this.A$Y]);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Qp(A.aaR(
A.acf.AGs),[this,this.A7t]);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Qp(
A.aaR(A.acf.A4S),[this,this.A$X]);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.
BL).Qp(A.aaR(A.acf.UnlinkTransponder),[this,this.BmD]);}else{A._GetAutoObject(C.
BL).Xu(A.aaR(A.acf.ANH));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.
aaR(A.acf.ABp));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.
AGs));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.A4S));A.
_GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.Tk)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.
A5w));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.Al0)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dp(6);},Aa4:function(){return C.
ABl;},Aa5:function(){return C.ACD;},QY:function(G){A._GetAutoObject(A.Device.Device
).Ap.Bi(A._GetAutoObject(A.Device.Helper).AOd());},HJ:function(G){C.QV.HJ.call(this
,G);this.N.Cn(A.aaL(A.ach.Abc));this.N.Ch=[this,this.Xi];this.N.FC(A.jV);this.N.
C2(null);this.N.B0((A.aaR(A.acf.A4K)+ZU)+this.DataExportDestinationToString.BQ(A.
_GetAutoObject(A.Device.Device).Vs));this.N.OJ(false);this.N.OK(false);this.N.IX.
Dl(255);},ARu:function(G){A._GetAutoObject(A.Device.Device).Dp(0);var AiE=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A6(96,true,AiE.toFixed(),0,null);},ARv:function(G){A._GetAutoObject(A.Device.Device
).Dp(0);this.A5m(this);},ARA:function(G){var B;A._GetAutoObject(A.Device.Device).
Dp(0);if(!A._GetAutoObject(A.Device.Device).Vs&&!A._GetAutoObject(A.Device.Device
).Ug){A._GetAutoObject(A.Device.Device).A6(73,true,A.jV,0,[this,this.BdU]);return;
}if(A._GetAutoObject(A.Device.Device).AqK()===false){A.zX([this,this.Xj],[B=A._GetAutoObject(
A.Device.Device),B.Wc,B.WW],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.AfS]);return;}var AfF=null;switch(A._GetAutoObject(A.Device.Device
).Vs){case 0:AfF=A._GetAutoObject(A.Device.Device).Anw(2);break;case 1:AfF=A._GetAutoObject(
A.Device.Device).Anw(3);break;default:throw new Error(BsJ+A._GetAutoObject(A.Device.
Device).Vs.toFixed());}if(AfF.AnB){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Du(A.aaR(A.acf.BmS));A._GetAutoObject(A.Device.Device).Ap_(AfF);}else A._GetAutoObject(
A.Device.Device).A6(97,true,A.jV,0,null);},AI1:function(){var AyO=this.Bf.AZ;if(
!AyO)return false;return true;},Xi:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.QV._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ATi;this.Dk(C.AOP);this.Init(aArg);},_Done:function(){this.
__proto__=C.QV;this.DataExportDestinationToString._Done();C.QV._Done.call(this);
},_ReInit:function(){C.QV._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QV._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.ACD={Ps:null,IW:null,_Init:function(aArg){C.Dx._Init.call(this,aArg);A.acg.An.
_Init.call(this.Ps={I:this},0);A.acg.An._Init.call(this.IW={I:this},0);this.__proto__=
C.ACD;this.Es.Y(false);this.CY.Y(false);this.Ps.H(BsK);this.Ps.L(A.jb.Text);this.
IW.H(BsL);this.IW.L(A.jb.Text);this.J(this.Ps,0);this.J(this.IW,0);this.Ps.Ax(A.
aaL(A.ach.Au5));this.IW.Ax(A.aaL(A.ach.Au0));},_Done:function(){this.__proto__=C.
Dx;this.Ps._Done();this.IW._Done();C.Dx._Done.call(this);},_ReInit:function(){C.
Dx._ReInit.call(this);this.Ps._ReInit();this.IW._ReInit();},_Mark:function(D){var
B;C.Dx._Mark.call(this,D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMg={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AzS],[B=A._GetAutoObject(A.Device.Device),B.ADQ,B.AH_],0);A.pe([this,this.
AzS],this);},Wd:function(G){if((!!this.Bf&&!!this.Bf.AZ)&&(this.Bf.AZ.Cb()>0)){if(
this.AI1())A._GetAutoObject(C.BL).Qp(A.aaR(A.acf.ANG),[this,this.AH6]);else A._GetAutoObject(
C.BL).Xu(A.aaR(A.acf.ANG));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Qp(
A.aaR(A.acf.ABn),[this,this.A$Y]);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.
BL).Qp(A.aaR(A.acf.AGs),[this,this.A7t]);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(
C.BL).Qp(A.aaR(A.acf.A4R),[this,this.A$X]);}else{A._GetAutoObject(C.BL).Xu(A.aaR(
A.acf.ANG));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.ABn
));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.AGs));A._GetAutoObject(
C.BL).Ft();A._GetAutoObject(C.BL).Xu(A.aaR(A.acf.A4R));}A._GetAutoObject(C.BL).Ft(
);A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.A5w));A._GetAutoObject(C.BL).Ft();A._GetAutoObject(
C.BL).Nw(A.aaR(A.acf.Al0)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dp(6);},Aa4:function(){return C.ABi;},Aa5:function(){return C.ACB;},QY:function(
G){A._GetAutoObject(A.Device.Device).Ap.Bi(A._GetAutoObject(A.Device.Helper).AN4(
));},HJ:function(G){C.QV.HJ.call(this,G);this.N.Cn(A.aaL(A.ach.Abc));this.N.Ch=[
this,this.Xi];this.N.FC(A.jV);this.N.C2(null);this.N.B0((A.aaR(A.acf.A4K)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bgh));this.N.OJ(false);this.N.OK(false);this.N.IX.
Dl(255);},ARu:function(G){A._GetAutoObject(A.Device.Device).Dp(0);var AiE=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A6(96,true,AiE.toFixed(),0,null);},ARv:function(G){A._GetAutoObject(A.Device.Device
).Dp(0);this.A5l(this);},ARA:function(G){var B;A._GetAutoObject(A.Device.Device).
Dp(0);if(!A._GetAutoObject(A.Device.Device).Ug){A._GetAutoObject(A.Device.Device
).A6(73,true,A.jV,0,[this,this.BdU]);return;}if(A._GetAutoObject(A.Device.Device
).AqK()===false){A.zX([this,this.Xj],[B=A._GetAutoObject(A.Device.Device),B.Wc,B.
WW],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,this.AfS]);return;
}var AfF=A._GetAutoObject(A.Device.Device).Anw(0);if(AfF.AnB){A._GetAutoObject(A.
Device.Device).BatchResetBirthNoticePending();this.Du(A.aaR(A.acf.Bgi));A._GetAutoObject(
A.Device.Device).Ap_(AfF);}else A._GetAutoObject(A.Device.Device).A6(70,true,A.jV
,0,null);},AI1:function(){var AyO=this.Bf.AZ;if(!AyO)return false;var P;for(P=0;
P<AyO.Cb();P++)if(A._GetAutoObject(A.Device.Helper).AjK(AyO.AOh(P,34))===false)return true;
return false;},Xi:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
17);},AzS:function(G){if(A._GetAutoObject(A.Device.Device).ApZ===1)A.pe([this,this.
A5s],this);},_Init:function(aArg){C.QV._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.AMg;this.
Dk(C.AOm);this.Init(aArg);},_Done:function(){this.__proto__=C.QV;this.DataExportDestinationToString.
_Done();C.QV._Done.call(this);},_ReInit:function(){C.QV._ReInit.call(this);this.
DataExportDestinationToString._ReInit();},_Mark:function(D){var B;C.QV._Mark.call(
this,D);if((B=this.DataExportDestinationToString)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::BirthRegistrationsListScreen"};C.AOm={D$:function(G){
C.Ad8.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.Converter).AdB(11));}
,_Init:function(aArg){C.Ad8._Init.call(this,aArg);this.__proto__=C.AOm;this.Text.
R(A.aaR(A.acf.ABb));},_ReInit:function(){C.Ad8._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ABb));},_className:"Application::HeaderBirthRegistrationsList"};C.AOP={
D$:function(G){C.Ad8.D$.call(this,G);this.C_.Ax(A._GetAutoObject(A.Device.Converter
).AdB(12));},_Init:function(aArg){C.Ad8._Init.call(this,aArg);this.__proto__=C.AOP;
this.Text.R(A.aaR(A.acf.AFy));},_ReInit:function(){C.Ad8._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AFy));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ABl={MQ:0,AP:null,SB:null,S5:0,Init:function(aArg){},Bh:function(aSize){C.Bc.Bh.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SB.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bc.Ai.call(
this,Ae);this.SB.L(this.V.AQ);this.U(A._GetAutoObject(A.Device.Converter).SK(this.
MQ));this.SB.R(A._GetAutoObject(A.acj.KE).AB9(this.S5));},Cd:function(Ad){if(!this.
AZ)return;this.Hu=Ad;if(!!this.AZ){this.MQ=this.AZ.LN(Ad,26);this.S5=this.AZ.Hz(
Ad,4);this.Am();}},_Init:function(aArg){C.Bc._Init.call(this,aArg);A.acg.AJ._Init.
call(this.AP={I:this},0);C.CO._Init.call(this.SB={I:this},0);this.__proto__=C.ABl;
this.AP.H(A$D);this.AP.L(A.jb.Bd);this.SB.H(A$F);this.J(this.AP,0);this.J(this.SB
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A8(A.aaL(A.fl.By));this.SB.S(A.aaL(A.fl.Ak));
this.SB.A8(A.aaL(A.fl.By));this.SB.CB(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(
){this.__proto__=C.Bc;this.AP._Done();this.SB._Done();C.Bc._Done.call(this);},_ReInit:
function(){C.Bc._ReInit.call(this);this.AP._ReInit();this.SB._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A8(A.aaL(A.fl.By));this.SB.S(A.aaL(A.fl.Ak));this.SB.A8(A.
aaL(A.fl.By));this.SB.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Bc._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SB)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.ATS={
Aew:null,AbF:null,TC:null,KF:null,TA:null,NC:null,S7:A.jV,Ai:function(Ae){var F;
C.Sy.Ai.call(this,Ae);this.TC.L(this.V.AQ);var Ao5=false;if((!this.Dd||!(F=this.
Dd,F[1].call(F[0])))&&!this.A5)Ao5=true;this.TC.Y(Ao5);this.Pl.Y(!Ao5);this.Vu.Y(
!Ao5);this.QN.Y(!Ao5);this.X3.Y(!Ao5);this.PV.Y(!Ao5);},Ada:function(G){var B;var
F;if(!this.S7.length){C.Sy.Ada.call(this,G);return;}var BO=this.FN;var GK=A._GetAutoObject(
A.Device.ArE).BzK(this.S7);this.S7=A.jV;if(!GK){A._GetAutoObject(A.Device.Device
).A6(101,true,A.jV,0,this.AbF);A.pe(this.Aew,this);return;}if(this.ArM&&(GK>A._GetAutoObject(
A.Device.Helper).Dt())){A._GetAutoObject(A.Device.Device).A6(102,true,A.jV,0,this.
AbF);A.pe(this.Aew,this);return;}this.T7(((B=(GK|0))<0)?B+0x100000000:B);if(this.
FN!==BO){if(!!this.Dd)(F=this.Dd,F[2].call(F[0],this.FN));A.abo(this.Dd,0);}if(!
!this.OB)A.pe(this.OB,this);},A2e:function(G){if(this.S7.length<8)this.S7=this.S7+
String.fromCharCode(this.KF.DJ);},ARx:function(G){if((this.NC.DJ===0x0D)||(this.
NC.DJ===0x0A))this.Ada(this);else this.NC.NB=true;},ASw:function(E){if(A.aa0(this.
Aew,E))return;this.Aew=E;},ASx:function(E){if(A.aa0(this.AbF,E))return;this.AbF=
E;},_Init:function(aArg){C.Sy._Init.call(this,aArg);A.acg.Text._Init.call(this.TC={
I:this},0);A.Core.BJ._Init.call(this.KF={I:this},0);A.Core.BJ._Init.call(this.TA={
I:this},0);A.Core.BJ._Init.call(this.NC={I:this},0);this.__proto__=C.ATS;this.TC.
H(BsM);this.TC.I0(true);this.TC.A4(0x12);this.TC.R(A.aaR(A.acf.A45));this.KF.Filter=
143;this.TA.Filter=149;this.NC.Filter=145;this.J(this.TC,0);this.TC.S(A.aaL(A.fl.
EB));this.KF.BK=[this,this.A2e];this.TA.BK=[this,this.BaJ];this.NC.BK=[this,this.
ARx];},_Done:function(){this.__proto__=C.Sy;this.TC._Done();this.KF._Done();this.
TA._Done();this.NC._Done();C.Sy._Done.call(this);},_ReInit:function(){C.Sy._ReInit.
call(this);this.TC._ReInit();this.KF._ReInit();this.TA._ReInit();this.NC._ReInit(
);this.TC.R(A.aaR(A.acf.A45));this.TC.S(A.aaL(A.fl.EB));},_Mark:function(D){var B;
C.Sy._Mark.call(this,D);if((B=this.Aew)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.ATW={Aew:null,AbF:null,KF:null
,TA:null,NC:null,S7:A.jV,IP:function(G){var F;if(!this.S7.length){C.Q0.IP.call(this
,G);return;}if(this.ArL)return;if(!this.S7.length)this.TA.NB=true;var BO=this.AK;
var GK=A._GetAutoObject(A.Device.ArE).BzL(this.S7);this.S7=A.jV;if(!GK){if((this.
S7.length<13)&&!A._GetAutoObject(A.Device.Device).Ug)A._GetAutoObject(A.Device.Device
).A6(105,true,A.jV,0,this.AbF);else A._GetAutoObject(A.Device.Device).A6(103,true
,A.jV,0,this.AbF);A.pe(this.Aew,this);return;}this.Bx(GK);if(this.AK!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}if(!!this.OB)A.pe(this.
OB,this);},A2e:function(G){if(this.ArL)return;if(this.S7.length<17)this.S7=this.
S7+String.fromCharCode(this.KF.DJ);},ARx:function(G){if((this.NC.DJ===0x0D)||(this.
NC.DJ===0x0A))this.IP(this);else this.NC.NB=true;},ASw:function(E){if(A.aa0(this.
Aew,E))return;this.Aew=E;},ASx:function(E){if(A.aa0(this.AbF,E))return;this.AbF=
E;},_Init:function(aArg){C.Q0._Init.call(this,aArg);A.Core.BJ._Init.call(this.KF={
I:this},0);A.Core.BJ._Init.call(this.TA={I:this},0);A.Core.BJ._Init.call(this.NC={
I:this},0);this.__proto__=C.ATW;this.Arr(false);this.KF.Filter=143;this.TA.Filter=
149;this.NC.Filter=145;this.KF.BK=[this,this.A2e];this.TA.BK=[this,this.AsK];this.
NC.BK=[this,this.ARx];},_Done:function(){this.__proto__=C.Q0;this.KF._Done();this.
TA._Done();this.NC._Done();C.Q0._Done.call(this);},_ReInit:function(){C.Q0._ReInit.
call(this);this.KF._ReInit();this.TA._ReInit();this.NC._ReInit();},_Mark:function(
D){var B;C.Q0._Mark.call(this,D);if((B=this.Aew)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.AOM={An:null,DZ:null,Init:function(aArg){var B;A.zX([this,this.D$],[B=A._GetAutoObject(
A.Device.Device),B.A76,B.AEJ],0);A.pe([this,this.D$],this);},C8:function(E){C.BP.
C8.call(this,E);this.An.L(E);this.DZ.Akb(E);},AbH:function(E){this.DZ.C1(E);},D$:
function(G){this.DZ.U(A._GetAutoObject(A.Device.Device).Avl.toFixed());},_Init:function(
aArg){C.BP._Init.call(this,aArg);A.acg.An._Init.call(this.An={I:this},0);C.DZ._Init.
call(this.DZ={I:this},0);this.__proto__=C.AOM;this.An.H(AsF);this.DZ.AY(0x14);this.
DZ.H(BsN);this.DZ.Akb(A.jb.Bj);this.DZ.C1(A.jb.Acf);this.DZ.HH(2);this.DZ.Bkx(0x11
);this.J(this.An,0);this.J(this.DZ,0);this.An.Ax(A.aaL(A.ach.APk));this.DZ.S(A.aaL(
A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BP;this.An._Done();
this.DZ._Done();C.BP._Done.call(this);},_ReInit:function(){C.BP._ReInit.call(this
);this.An._ReInit();this.DZ._ReInit();this.DZ.S(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.BP._Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.AQY={AaT:null,Ad2:null,Vr:null,Init:function(aArg){this.A9(this.AaT);},KK:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cv=[this,this.Xh];this.Bw.Ch=
null;this.Bw.Cc=[this,this.A2h];this.Bw.B0(A.jV);this.Bw.Cn(null);this.Bw.CS(A.aaL(
A.ach.VE));}return this.Bw;},AzL:function(G){var Aa=(C.Ai2.isPrototypeOf(G)?G:null
);if(Aa===this.AaT)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Ad2)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$d);},_Init:function(aArg){C.Ff._Init.call(this,aArg);C.Ai2._Init.call(this.
AaT={I:this},0);C.Ai2._Init.call(this.Ad2={I:this},0);C.AQ2._Init.call(this.Vr={
I:this},0);this.__proto__=C.AQY;var B;this.H(Q$);this.Text.R(A.aaR(A.acf.ABg));this.
AaT.H(JQ);this.AaT.U(A.aaR(A.acf.Ajm));this.Ad2.H(P1);this.Ad2.U(A.aaR(A.acf.AFF
));this.Vr.H(ZR);this.Vr.U(A.aaR(A.acf.A4C));this.J(this.AaT,0);this.J(this.Ad2,
0);this.J(this.Vr,0);this.Text.S(A.aaL(A.fl.Ak));this.AaT.AN=[this,this.AzL];this.
Ad2.AN=[this,this.AzL];this.Vr.ASc([B=A._GetAutoObject(A.Device.Device),B.ADU,B.
AIb]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.AaT._Done();this.
Ad2._Done();this.Vr._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.
call(this);this.AaT._ReInit();this.Ad2._ReInit();this.Vr._ReInit();this.Text.R(A.
aaR(A.acf.ABg));this.AaT.U(A.aaR(A.acf.Ajm));this.Ad2.U(A.aaR(A.acf.AFF));this.Vr.
U(A.aaR(A.acf.A4C));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ff._Mark.
call(this,D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.AQX={AnimalTableFields:null,Aw:null,Z:
null,Ke:null,CT:function(){this.Aio(this);},Init:function(aArg){A.zV([this,this.
Aio],this.AnimalTableFields,0);A.pe([this,this.Aio],this);},Dw:function(G){C.Ff.
Dw.call(this,G);this.ML(this);},KK:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cv=[this,this.Eo];this.Bw.Ch=[this,this.A2f];this.Bw.Cc=[this,this.
A2J];this.Bw.C2(A.aaL(A.ach.AqG));this.Bw.Cn(A.aaL(A.ach.Aqz));this.Bw.CS(A.aaL(
A.ach.VE));}return this.Bw;},Eo:function(G){this.AAk();this.Xh(this);},Aio:function(
G){this.AoC();var P;for(P=0;P<this.AnimalTableFields.NJ();P=P+1){var Z2=A._GetAutoObject(
C.Al1).Oz(P);this.A0o(Z2);}this.J(this.Ke,0);A.aaS([this,this.ML],this);},E9:function(
G){var B;this.Aw.Mp((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);
this.Aw.Mq(-this.Z.Bq[1]);},ML:function(G){var B;this.Z.Vb(null,null);if(!!this.
AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},A0o:function(
G1){var Ayn=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.R2,0);Aa.U(Ayn.BQ(G1));Aa.Aj(true);Aa.GT=G1;Aa.A9f(this.AnimalTableFields.NO(G1
));this.J(Aa,0);this.Zf(Aa);},AoC:function(){var B;var X=this.Z.Ag;while(!!X&&!((
X.T&0x200)===0x200)){var Adp=X;X=X.Ag;if(((Adp.T&0x400)===0x400))this.HI(Adp);}}
,AAk:function(){var B;this.AnimalTableFields.Clear();var X=this.Z.Ag;while(!!X&&
!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.Ke)){var Aa=(C.R2.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.GT);if(Aa.ARN())this.AnimalTableFields.
ATO(Aa.GT);}else A.ab5("%s",Ast);}X=X.Ag;}this.AnimalTableFields.Ck();},A2f:function(
G){var B;var Aa=(C.R2.isPrototypeOf(B=this.AR)?B:null);if(!!Aa){var AzD=(C.R2.isPrototypeOf(
B=Aa.Ag)?B:null);if(!!AzD){this.Ahh(AzD,Aa);A.pe([this,this.ML],this);}}},A2J:function(
G){var B;var Aa=(C.R2.isPrototypeOf(B=this.AR)?B:null);if(!!Aa){var Az_=(C.R2.isPrototypeOf(
B=Aa.AH)?B:null);if(!!Az_){this.Ahh(Aa,Az_);A.pe([this,this.ML],this);}}},Aqe:function(
G){var B;A._GetAutoObject(A.Device.Device).ArQ(this);A.pe([this,this.Aio],this);
},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Ff._Init.call(
this,aArg);C.Aw._Init.call(this.Aw={I:this},0);A.Core.Z._Init.call(this.Z={I:this
},0);C.Auv._Init.call(this.Ke={I:this},0);this.__proto__=C.AQX;this.H(Q$);this.Text.
R(A.aaR(A.acf.AFF));this.Aw.H(IK);this.Z.H(A$M);this.Z.Kf(1);this.Ke.H(AHr);this.
Ke.Aj(true);this.Ke.U(BsO);this.J(this.Aw,0);this.J(this.Z,0);this.J(this.Ke,0);
this.Z.Ej=[this,this.G8];this.Ke.AN=[this,this.Aqe];this.AnimalTableFields=A._GetAutoObject(
C.Al1);this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.Aw._Done();this.
Z._Done();this.Ke._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.
call(this);this.Aw._ReInit();this.Z._ReInit();this.Ke._ReInit();this.Text.R(A.aaR(
A.acf.AFF));this.CT();},_Mark:function(D){var B;C.Ff._Mark.call(this,D);if((B=this.
AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ke)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.AQW={Z:null,BW:null,C7:null,CD:null,GF:null,Aw:null,AnimalType:null,Gender:null
,Breed:null,Uz:null,Init:function(aArg){A.zX([this,this.At$],this.BW.Q,0);A.zX([
this,this.AMl],this.CD.Q,0);A.zX([this,this.AU5],this.GF.Q,0);A.zX([this,this.AuP
],this.C7.Q,0);this.A9(this.BW);},Dw:function(G){C.Ff.Dw.call(this,G);this.ML(this
);},KK:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cv=[this,this.
Xh];this.Bw.Ch=null;this.Bw.Cc=null;this.Bw.B0(A.jV);this.Bw.Cn(null);this.Bw.CS(
A.aaL(A.ach.VE));}return this.Bw;},E9:function(G){var B;this.Aw.Mp((B=this.Z.Db(
0x1))[3]-B[1]);this.Aw.Mr((B=this.Z.M)[3]-B[1]);this.Aw.Mq(-this.Z.Bq[1]);},ML:function(
G){var B;this.Z.Vb(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(
this.AR,true,null,null);},G8:function(G){A.pe([this,this.E9],this);},At$:function(
G){var F;A._GetAutoObject(A.Device.Device).DT((F=this.BW.Q,F[1].call(F[0])));},AU5:
function(G){var F;A._GetAutoObject(A.Device.Device).Nb((F=this.GF.Q,F[1].call(F[
0])));},AuP:function(G){var F;A._GetAutoObject(A.Device.Device).JI((F=this.C7.Q,
F[1].call(F[0])));},AMl:function(G){var F;A._GetAutoObject(A.Device.Device).NT((
F=this.CD.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ff._Init.call(this,aArg);
A.Core.Z._Init.call(this.Z={I:this},0);C.Xt._Init.call(this.BW={I:this},0);C.Xt.
_Init.call(this.C7={I:this},0);C.Xt._Init.call(this.CD={I:this},0);C.Xt._Init.call(
this.GF={I:this},0);C.Aw._Init.call(this.Aw={I:this},0);C.AnimalType._Init.call(
this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed.
_Init.call(this.Breed={I:this},0);C.UA._Init.call(this.Uz={I:this},0);this.__proto__=
C.AQW;var B;this.H(Q$);this.Text.R(A.aaR(A.acf.Ajm));this.Z.H(A$M);this.Z.Kf(1);
this.BW.H(AhD);this.BW.Ar(true);this.BW.Aj(true);this.BW.U(A.aaR(A.acf.Ae8));this.
C7.H(AxA);this.C7.Ar(true);this.C7.Aj(true);this.C7.U(A.aaR(A.acf.Ae0));this.CD.
H(An0);this.CD.Ar(true);this.CD.Aj(true);this.CD.U(A.aaR(A.acf.Breed));this.GF.H(
Ass);this.GF.Ar(true);this.GF.Aj(true);this.GF.U(A.aaR(A.acf.I7));this.Aw.H(IK);
this.AnimalType.At(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.At(
A._GetAutoObject(A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.
Device).Breed);this.Uz.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Z,0);this.J(this.BW,0);this.J(this.C7,0);this.J(this.CD,0);this.J(this.GF,0
);this.J(this.Aw,0);this.Z.Ej=[this,this.G8];this.BW.Wf(A.aaL(A.fl.Hk));this.BW.
Wg(A.aaL(A.fl.Hk));this.BW.At([B=this.AnimalType,B.B9,B.B_]);this.BW.CG(this.AnimalType
);this.C7.Wf(A.aaL(A.fl.Hk));this.C7.Wg(A.aaL(A.fl.Hk));this.C7.At([B=this.Gender
,B.B9,B.B_]);this.C7.CG(this.Gender);this.CD.Wf(A.aaL(A.fl.Hk));this.CD.Wg(A.aaL(
A.fl.Hk));this.CD.At([B=this.Breed,B.B9,B.B_]);this.CD.CG(this.Breed);this.GF.Wf(
A.aaL(A.fl.Hk));this.GF.Wg(A.aaL(A.fl.Hk));this.GF.At([B=this.Uz,B.B9,B.B_]);this.
GF.CG(this.Uz);this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.Z._Done(
);this.BW._Done();this.C7._Done();this.CD._Done();this.GF._Done();this.Aw._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.Uz._Done();
C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this);this.Z._ReInit(
);this.BW._ReInit();this.C7._ReInit();this.CD._ReInit();this.GF._ReInit();this.Aw.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
Uz._ReInit();this.Text.R(A.aaR(A.acf.Ajm));this.BW.U(A.aaR(A.acf.Ae8));this.C7.U(
A.aaR(A.acf.Ae0));this.CD.U(A.aaR(A.acf.Breed));this.GF.U(A.aaR(A.acf.I7));},_Mark:
function(D){var B;C.Ff._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Al5={CA:0,Ak4:A.abi(17,0,null),Oz:function(Hq){return this.Ak4.Get(Hq);},NJ:
function(){return this.CA;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.Ak4.Set(
P,0);this.CA=0;},J:function(ZW){if(this.CA>=17)A.ab5("%s",BsP);else{this.Ak4.Set(
this.CA,ZW);this.CA=this.CA+1;}},Ck:function(){},EC:function(AhH){var AJl=AhH.indexOf(
String.fromCharCode(0x2C),0);var A0N=A.jV;var P=0;this.CA=0;while(P<17)if(AhH===
A.jV)P++;else{if(AJl===-1){A0N=AhH;AhH=A.jV;}else{A0N=A.abV(AhH,AJl);AhH=A.ab1(AhH
,0,AJl+1);}var Z2=A.abZ(A0N,0,10)|0;if(this.Bik(Z2)){this.Ak4.Set(this.CA,Z2);this.
CA=this.CA+1;P++;}AJl=AhH.indexOf(String.fromCharCode(0x2C),0);}if(AhH!==A.jV)A.
ab5("%s",BsQ);},toString:function(){var B;var AzB=A.jV;var P;for(P=0;P<this.CA;P=
P+1){if(P>0)AzB=AzB+AHt;AzB=AzB+(((B=this.Ak4.Get(P))<0)?B+0x100000000:B).toFixed(
);}return AzB;},Contains:function(ZW){var P;for(P=0;P<this.CA;P=P+1)if(this.Ak4.
Get(P)===ZW)return true;return false;},Bik:function(ZW){return true;},_Init:function(
aArg){(this.Ak4=[]).__proto__=C.Al5.Ak4;this.__proto__=C.Al5;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.ALq={Aft:null,Init:function(aArg){var B;A.
zX([this,this.Bdz],[B=A._GetAutoObject(A.Device.Device),B.A7y,B.A$4],0);A.zX([this
,this.BdA],[B=A._GetAutoObject(A.Device.Device),B.A7z,B.A$5],0);A.pe([this,this.
Bdz],this);A.pe([this,this.BdA],this);},Clear:function(){C.Al5.Clear.call(this);
this.Aft.Clear();},Ck:function(){A._GetAutoObject(A.Device.Device).Aq_(this.Aft.
toString());A._GetAutoObject(A.Device.Device).Aq$(this.toString());},Bdz:function(
G){this.Aft.EC(A._GetAutoObject(A.Device.Device).AAT);A.we(this,0);},BdA:function(
G){this.EC(A._GetAutoObject(A.Device.Device).AAU);A.we(this,0);},NO:function(ZW){
return this.Aft.Contains(ZW);},ATO:function(ZW){if(!this.NO(ZW))this.Aft.J(ZW);}
,AN5:function(){return this.Aft.NJ();},_Init:function(aArg){C.Al5._Init.call(this
,aArg);this.__proto__=C.ALq;this.Aft=A._NewObject(C.Al5,0);this.Init(aArg);},_Mark:
function(D){var B;C.Al5._Mark.call(this,D);if((B=this.Aft)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.Al1={_Init:
function(){C.ALq._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.AQ2={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.
V.Text.A4(0x11);this.V.Text.HH(10);},Bh:function(aSize){C.TZ.Bh.call(this,aSize);
this.V.H(A.abN(this.V.M,this.Me.M[0]));},Ai:function(Ae){var B;C.TZ.Ai.call(this
,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20);var Gt=this.Bl.Bv;var FG=
A.jb.AdO;var GJ=A.jb.Bj;if(this.Hb){FG=A.jb.Bj;GJ=A.jb.Text;}if(!G6){this.Background.
L(FG);this.V.L(A.jb.CF);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj
);}else if(Fh){this.Background.L(A.jb.AR);this.V.L(A.jb.Bj);}else{this.Background.
L(FG);this.V.L(GJ);}this.LB=G6;this.Ky=Fh;this.Qg=Gt;},_Init:function(aArg){C.TZ.
_Init.call(this,aArg);this.__proto__=C.AQ2;this.Init(aArg);},_className:"Application::MenuItemCheckBoxOverlay"
};C.ATh={Yn:null,Ajs:null,KK:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);
this.Bw.Cv=[this,this.Xh];this.Bw.Ch=null;this.Bw.Cc=null;this.Bw.B0(A.jV);this.
Bw.Cn(null);this.Bw.CS(A.aaL(A.ach.VE));}return this.Bw;},_Init:function(aArg){C.
OverlayMenu._Init.call(this,aArg);C.Xt._Init.call(this.Yn={I:this},0);C.Vs._Init.
call(this.Ajs={I:this},0);this.__proto__=C.ATh;var B;this.H(JP);this.Yn.H(JP);this.
Yn.U(A.aaR(A.acf.A43));this.Ajs.At(A._GetAutoObject(A.Device.Device).Vs);this.J(
this.Yn,0);this.Yn.Wf(A.aaL(A.fl.Hk));this.Yn.Wg(A.aaL(A.fl.Hk));this.Yn.At([B=this.
Ajs,B.B9,B.B_]);this.Yn.CG(this.Ajs);this.Ajs.BkR([B=A._GetAutoObject(A.Device.Device
),B.ARH,B.AZi]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yn._Done();
this.Ajs._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yn._ReInit();this.Ajs._ReInit();this.Yn.U(A.aaR(A.acf.A43
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PurchasedAnimalsListOverlayMenu"};C.Vs={AaP:null,DataExportDestinationToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BQ(aIndex);},DK:function(A3){return A3;},Hl:function(
){return 1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.AaP)(F=this.AaP
,F[2].call(F[0],E));},BkR:function(E){if(A.aaZ(this.AaP,E))return;if(!!this.AaP)
A.z$([this,this.Apo],this.AaP,0);this.AaP=E;if(!!this.AaP)A.zX([this,this.Apo],this.
AaP,0);A.pe([this,this.Apo],this);},Apo:function(G){var F;if(!!this.AaP)this.Q=(
F=this.AaP,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9,this.B_],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.Vs;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AaP)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMf={
Yu:null,AkK:null,KK:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.
Cv=[this,this.Xh];this.Bw.Ch=null;this.Bw.Cc=null;this.Bw.B0(A.jV);this.Bw.Cn(null
);this.Bw.CS(A.aaL(A.ach.VE));}return this.Bw;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Xt._Init.call(this.Yu={I:this},0);C.ADo._Init.call(this.
AkK={I:this},0);this.__proto__=C.AMf;var B;this.H(JP);this.Yu.H(JP);this.Yu.U(A.
aaR(A.acf.Display));this.AkK.At(A._GetAutoObject(A.Device.Device).ApZ);this.J(this.
Yu,0);this.Yu.Wf(A.aaL(A.fl.Hk));this.Yu.Wg(A.aaL(A.fl.Hk));this.Yu.At([B=this.AkK
,B.B9,B.B_]);this.Yu.CG(this.AkK);this.AkK.BlU([B=A._GetAutoObject(A.Device.Device
),B.ADQ,B.AH_]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yu._Done();
this.AkK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yu._ReInit();this.AkK._ReInit();this.Yu.U(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.ADo={Abr:null,ListViewScopeToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BQ(aIndex);},DK:function(A3){return A3;},Hl:function(){return 1;
},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Abr)(F=this.Abr,F[2].call(
F[0],E));},BlU:function(E){if(A.aaZ(this.Abr,E))return;if(!!this.Abr)A.z$([this,
this.Apo],this.Abr,0);this.Abr=E;if(!!this.Abr)A.zX([this,this.Apo],this.Abr,0);
A.pe([this,this.Apo],this);},Apo:function(G){var F;if(!!this.Abr)this.Q=(F=this.
Abr,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9,this.B_],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.ADo;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abr)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AUq={ABs:0,ABr:0,Ai:function(Ae){C.OQ.Ai.call(this
,Ae);this.Background.L(this.ABr);this.V.L(this.ABs);},BkG:function(E){if(this.ABs===
E)return;this.ABs=E;this.Am();},BkF:function(E){if(this.ABr===E)return;this.ABr=
E;this.Am();},_Init:function(aArg){C.OQ._Init.call(this,aArg);this.__proto__=C.AUq;
this.Ar(false);this.ABs=A.jb.Text;this.ABr=A.jb.CF;},_className:"Application::TextCaptionItem"
};C.AGC={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.Bc6],[B=A._GetAutoObject(A.Device.Device),B.A77,B.Bal],0);A.pe([this,this.Bc6
],this);},Do:function(){return 3;},F$:function(aIndex){return this.WeightValuePrecisionToString.
BQ(this.C4(aIndex));},At:function(E){C.CN.At.call(this,E);A._GetAutoObject(A.Device.
Device).Awb(E);},Bc6:function(G){this.Q=A._GetAutoObject(A.Device.Device).OG;A.abo([
this,this.B9,this.B_],0);},_Init:function(aArg){C.CN._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AGC;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.CN;this.WeightValuePrecisionToString.
_Done();C.CN._Done.call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.CN._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.ATU={Um:null,A_G:A.jV,Init:function(
aArg){},Bh:function(aSize){C.BX.Bh.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Um.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BX.Ai.call(this,Ae);this.Um.L(this.V.AQ);},Bmk:function(E){if(this.A_G===E
)return;this.A_G=E;this.Um.R(E);},_Init:function(aArg){C.BX._Init.call(this,aArg
);C.CO._Init.call(this.Um={I:this},0);this.__proto__=C.ATU;this.H(Acu);this.Um.H(
BsR);this.J(this.Um,0);this.Um.S(A.aaL(A.fl.Ah));this.Um.A8(A.aaL(A.fl.Ak));this.
Um.CB(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BX;this.Um._Done(
);C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(this);this.Um._ReInit(
);this.Um.S(A.aaL(A.fl.Ah));this.Um.A8(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BX._Mark.call(this,D);if((B=this.Um)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.YK={MassDeregistrationCriterionToString:
null,Do:function(){return 2;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BQ(this.C4(aIndex));},_Init:function(
aArg){C.CN._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.YK;this.
Co.Set(0,0);this.Co.Set(1,1);},_Done:function(){this.__proto__=C.CN;this.MassDeregistrationCriterionToString.
_Done();C.CN._Done.call(this);},_ReInit:function(){C.CN._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.CN._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.AM9={U0:null
,YK:null,YM:null,Ml:null,Atu:0,Init:function(aArg){this.A9(this.YM);},Ai:function(
Ae){C.Eb.Ai.call(this,Ae);var BAz=((A.aaR(A.acf.Ap6)+A.aaR(A.acf.Colon))+CL)+this.
Atu.toFixed();this.Ml.Bmk(BAz);},Cw:function(G){C.Eb.Cw.call(this,G);A.zX([this,
this.AKL],this.Ml.Q,0);A.pe([this,this.AKL],this);},EV:function(G){C.Eb.EV.call(
this,G);A.z$([this,this.AKL],this.Ml.Q,0);},DD:function(G){C.Eb.DD.call(this,G);
if((this.AR===this.Ml)&&!this.Atu)this.N.HL.Dl(100);else this.N.HL.Dl(255);},BdP:
function(G){if(this.Atu>0)A._GetAutoObject(A.Device.Device).A6(108,true,this.Atu.
toFixed(),0,[this,this.ByQ]);},AKL:function(G){var F;this.Atu=A._GetAutoObject(A.
Device.Helper).BhI((F=this.Ml.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MC],
this);},BdJ:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){A._GetAutoObject(
A.Device.Device).A6(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).AqK()===false){this.U0=[this,this.BdJ];A.zX([this,this.Xj],[B=A._GetAutoObject(
A.Device.Device),B.Wc,B.WW],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.AfS]);return;}var AfF=A._GetAutoObject(A.Device.Device).Anw(1);if(
AfF.AnB)A._GetAutoObject(A.Device.Device).Ap_(AfF);else A._GetAutoObject(A.Device.
Device).A6(88,true,A.jV,0,null);},AfS:function(G){var B;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5)){A.z$([this,this.Xj],[B=A.
_GetAutoObject(A.Device.Device),B.Wc,B.WW],0);this.U0=null;}},Xj:function(G){var
B;if(A._GetAutoObject(A.Device.Device).Ahw===3){A._GetAutoObject(A.Device.Device
).A6(74,false,A.jV,0,[this,this.AfS]);A.z$([this,this.Xj],[B=A._GetAutoObject(A.
Device.Device),B.Wc,B.WW],0);if(!!this.U0)A.pe(this.U0,this);this.U0=null;}},ByQ:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===7))A.pe([this,this.BAu],this);},BAu:function(G){A._GetAutoObject(A.
Device.Helper).BwP(this.YK.Q);A._GetAutoObject(A.Device.Device).A6(109,true,this.
Atu.toFixed(),0,null);A.pe([this,this.MC],this);A.pe([this,this.AKL],this);},_Init:
function(aArg){C.Eb._Init.call(this,aArg);C.YK._Init.call(this.YK={I:this},0);C.
Ci._Init.call(this.YM={I:this},0);C.ATU._Init.call(this.Ml={I:this},0);this.__proto__=
C.AM9;var B;this.Dk(C.AOo);this.YM.H(JQ);this.YM.Aj(true);this.YM.U(A.aaR(A.acf.
A5E));this.YM.Bg(false);this.Ml.H(BsS);this.Ml.Aj(true);this.Ml.U(A.aaR(A.acf.A_W
));this.Ml.Bg(true);this.Ml.A9H(A.aaR(A.acf.Ok));this.J(this.YM,0);this.J(this.Ml
,0);this.YM.AN=[this,this.BdJ];this.Ml.AN=[this,this.BdP];this.Ml.Aex([this,this.
BdP]);this.Ml.At([B=this.YK,B.B9,B.B_]);this.Ml.CG(this.YK);this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.YK._Done();this.YM._Done();this.Ml._Done();C.
Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.YK._ReInit(
);this.YM._ReInit();this.Ml._ReInit();this.YM.U(A.aaR(A.acf.A5E));this.Ml.U(A.aaR(
A.acf.A_W));this.Ml.A9H(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Eb._Mark.call(
this,D);if((B=this.U0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.YK).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOo={_Init:function(aArg){C.KH._Init.call(this,aArg);this.__proto__=C.AOo;this.
Text.R(A.aaR(A.acf.Xv));},_ReInit:function(){C.KH._ReInit.call(this);this.Text.R(
A.aaR(A.acf.Xv));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANa={
U0:null,YL:null,Abv:null,Init:function(aArg){this.A9(this.YL);A.pe([this,this.MC
],this);},BdI:function(G){var B;var Azk=A._GetAutoObject(A.Device.Device).ADa();
switch(Azk){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A6(91,true,ZT,0,[this,this.Bd2]);break;
case 2:{this.U0=[this,this.BdI];A.zX([this,this.Xj],[B=A._GetAutoObject(A.Device.
Device),B.Wc,B.WW],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,
this.AfS]);}break;default:throw new Error(A$N+Azk.toFixed());}},AfS:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.Xj],[B=A._GetAutoObject(A.Device.Device),B.Wc,B.WW],0);this.
U0=null;}},Xj:function(G){var B;if(A._GetAutoObject(A.Device.Device).Ahw===3){A.
_GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.AfS]);A.z$([this,this.
Xj],[B=A._GetAutoObject(A.Device.Device),B.Wc,B.WW],0);if(!!this.U0)A.pe(this.U0
,this);this.U0=null;}},Bd4:function(G){var B;var Azk=A._GetAutoObject(A.Device.Device
).ADb();switch(Azk){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A6(95,true,A.jV,0,[this,this.ByR
]);break;case 2:{this.U0=[this,this.Bd4];A.zX([this,this.Xj],[B=A._GetAutoObject(
A.Device.Device),B.Wc,B.WW],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.AfS]);}break;case 3:A._GetAutoObject(A.Device.Device).A6(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A6(93,true,A.jV,0,null
);break;default:throw new Error(A$N+Azk.toFixed());}},Bd2:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Bxr],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bxt],this);break;default:throw new Error(BsT+As.Id.toFixed());}},Bxr:function(G){
if(A._GetAutoObject(A.Device.Device).ABB()){var A12=A._GetAutoObject(A.Device.Device
).Ap.Qw();A._GetAutoObject(A.Device.Device).A6(80,true,A12.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A6(82,true,A.jV,0,null);A.aaS([this,this.ByM],
this);},Bxt:function(G){if(A._GetAutoObject(A.Device.Device).AFK()){var A12=A._GetAutoObject(
A.Device.Device).Ap.Qw();A._GetAutoObject(A.Device.Device).A6(81,true,A12.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A6(83,true,A.jV,0,null);A.aaS([
this,this.Bzp],this);},ByR:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BAv],this);},BAv:function(
G){A._GetAutoObject(A.Device.Device).A6(92,true,ZT,0,[this,this.Bd2]);},Bzp:function(
G){A._GetAutoObject(A.Device.Device).A6(92,false,A.jV,0,null);},ByM:function(G){
A._GetAutoObject(A.Device.Device).A6(91,false,A.jV,0,null);},_Init:function(aArg
){C.Eb._Init.call(this,aArg);C.Ci._Init.call(this.YL={I:this},0);C.Ci._Init.call(
this.Abv={I:this},0);this.__proto__=C.ANa;this.Dk(C.AOr);this.YL.H(JQ);this.YL.Aj(
true);this.YL.U(A.aaR(A.acf.ABB));this.YL.Bg(false);this.Abv.H(P1);this.Abv.Aj(true
);this.Abv.U(A.aaR(A.acf.AFK));this.Abv.Bg(true);this.J(this.YL,0);this.J(this.Abv
,0);this.YL.AN=[this,this.BdI];this.Abv.AN=[this,this.Bd4];this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.YL._Done();this.Abv._Done();C.Eb._Done.call(
this);},_ReInit:function(){C.Eb._ReInit.call(this);this.YL._ReInit();this.Abv._ReInit(
);this.YL.U(A.aaR(A.acf.ABB));this.Abv.U(A.aaR(A.acf.AFK));},_Mark:function(D){var
B;C.Eb._Mark.call(this,D);if((B=this.U0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOr={_Init:
function(aArg){C.KH._Init.call(this,aArg);this.__proto__=C.AOr;this.Text.R(A.aaR(
A.acf.ABH));},_ReInit:function(){C.KH._ReInit.call(this);this.Text.R(A.aaR(A.acf.
ABH));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Rx={NQ:null,ATo:
0,ADd:false,AC$:false,ADe:false,AlA:function(G){this.A5i(this);},ASs:function(E){
if(this.NQ===E)return;this.NQ=E;if(!this.NQ)return;this.DI.AutoActions=E;A.zV([this
,this.BAg],this.NQ,0);},ALr:function(){this.ALu(A.aaR(A.acf.A_4),[this,this.BAL]
,[this,this.A71,this.AEA]);this.ALu(A.aaR(A.acf.AFz),[this,this.BAJ],[this,this.
A7Y,this.AEy]);this.ALu(A.aaR(A.acf.AnC),[this,this.BAK],[this,this.A7Z,this.AEz
]);A._GetAutoObject(C.BL).Ft();A._GetAutoObject(C.BL).Nw(A.aaR(A.acf.BfT)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BL).Ft();},ALu:function(Bvj,Bws,BvM){if(!this.NQ
)return;this.ALt(Bvj,Bws,BvM);},BAL:function(G){this.AEA(!this.ADe);},BAJ:function(
G){this.AEy(!this.AC$);},BAK:function(G){this.AEz(!this.ADd);},A3f:function(Ev,BvL
){if(!this.NQ)return;if(BvL)this.NQ.BfQ(Ev);else this.NQ.Bm6(Ev);this.NQ.Ck();},
A3Y:function(AcM,AcN,BwK){A._GetAutoObject(C.BL).At3(AcM,AcN,[this,this.A8g,this.
ASF],BwK);},AFV:function(Ev){if(!this.NQ)return;this.NQ.AFV(Ev);this.NQ.Ck();},AEA:
function(E){if(this.ADe===E)return;this.ADe=E;this.A3f(256,E);A.abo([this,this.A71
,this.AEA],0);},AEy:function(E){if(this.AC$===E)return;this.AC$=E;this.A3f(2,E);
A.abo([this,this.A7Y,this.AEy],0);},AEz:function(E){if(this.ADd===E)return;this.
ADd=E;this.A3f(1,E);A.abo([this,this.A7Z,this.AEz],0);},BAg:function(G){this.AEA(
this.NQ.Contains(256));this.AEy(this.NQ.Contains(2));this.AEz(this.NQ.Contains(1
));if(this.NQ.NJ()>0)this.ASF(this.NQ.Oz(this.NQ.NJ()-1));},ASF:function(E){if(this.
ATo===E)return;this.ATo=E;A.abo([this,this.A8g,this.ASF],0);},A71:function(){return this.
ADe;},A7Y:function(){return this.AC$;},A7Z:function(){return this.ADd;},A8g:function(
){return this.ATo;},_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=
C.Rx;},_Mark:function(D){var B;C.GN._Mark.call(this,D);if((B=this.NQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Avk={Q:null,Ck:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AC9:
function(Ev){switch(Ev){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},J3:function(G){var F;if(!!this.Q)this.EC((F=
this.Q,F[1].call(F[0])));A.we(this,0);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.J3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.J3],E,
0);if(!!E)A.pe([this,this.J3],this);},AFV:function(Ev){if(this.NJ()>0)this.AwO(this.
NJ()-1,Ev);},BfQ:function(Ev){if(this.Contains(Ev))return;if(this.CA>=17){A.ab5(
"%s",AHs);return;}var Azd=0;for(;(Azd<=this.NJ())&&(this.Oz(Azd)<Ev);Azd++);var AAq=
this.NJ()-1;this.J(this.Oz(AAq));for(;AAq>Azd;AAq--)this.AwO(AAq,this.Oz(AAq-1));
this.AwO(Azd,Ev);},Bm6:function(Ev){var index=this.DK(Ev);if(index<0)return;for(;
index<(this.NJ()-1);index++)this.AwO(index,this.Oz(index+1));this.AwO(index,0);this.
CA--;},_Init:function(aArg){C.Va._Init.call(this,aArg);this.__proto__=C.Avk;},_Mark:
function(D){var B;C.Va._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Avr={_Init:
function(){C.Avk._Init.call(this,0);var B;this.At([B=A._GetAutoObject(A.Device.Device
),B.A7$,B.Bap]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Avs={_Init:function(){C.Avk._Init.call(this,0);var B;this.At([B=A._GetAutoObject(
A.Device.Device),B.A8a,B.Baq]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Axi={_Init:function(){C.Avk._Init.call(this,0);var B;this.At([B=
A._GetAutoObject(A.Device.Device),B.A8I,B.BaE]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){C.AL4.__proto__=A.Core.Root;C.AB.__proto__=C.AaV;C.Wn.__proto__=
A.Core.O;C.Ou.__proto__=A.Core.O;C.Zb.__proto__=A.acl.Ga;C.Ec.__proto__=A.Core.O;
C.XH.__proto__=C.AB;C.AT7.__proto__=C.AB;C.AuY.__proto__=C.AB;C.QZ.__proto__=C.AB;
C.Fc.__proto__=C.G_;C.Aw.__proto__=A.Core.O;C.Cq.__proto__=C.AB;C.Aqu.__proto__=
C.BP;C.BP.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.ACx.__proto__=C.AmA;C.AGb.
__proto__=C.DL;C.Ci.__proto__=C.OQ;C.Dm.__proto__=C.D_;C.I2.__proto__=C.Dm;C.BX.
__proto__=C.Dm;C.Sy.__proto__=C.Dm;C.OE.__proto__=C.CN;C.Q4.__proto__=C.AC;C.AUk.
__proto__=C.Bc;C.FT.__proto__=A.Core.O;C.Bc.__proto__=C.Ci;C.GN.__proto__=C.AB;C.
ABk.__proto__=C.Bc;C.AdM.__proto__=C.AB;C.Md.__proto__=C.Ou;C.AUf.__proto__=C.AB;
C.Aqt.__proto__=C.ACx;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.ATX.__proto__=C.Ab5;C.Et.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.ArU.__proto__=A.Core.O;C.AFZ.__proto__=C.Dm;C.CO.__proto__=A.Core.O;C.
Ajz.__proto__=C.X$;C.Al4.__proto__=C.Q3;C.Ahe.__proto__=A.Core.O;C.Eb.__proto__=
C.AB;C.AS9.__proto__=C.AB;C.Mg.__proto__=C.Ci;C.AmV.__proto__=C.Ci;C.OverlayMenu.
__proto__=C.AaV;C.AO8.__proto__=C.OverlayMenu;C.Gz.__proto__=A.Core.O;C.AaV.__proto__=
A.Core.O;C.AT2.__proto__=A.acl.Ad0;C.AmA.__proto__=C.BP;C.ACy.__proto__=C.AmA;C.
J8.__proto__=C.AC;C.ATZ.__proto__=C.Dm;C.AFA.__proto__=C.AB;C.HT.__proto__=C.AB;
C.V9.__proto__=C.AqW;C.IA.__proto__=C.ACy;C.IT.__proto__=C.AB;C.ALC.__proto__=C.
AFA;C.ALy.__proto__=C.GN;C.AMS.__proto__=C.GN;C.Ad4.__proto__=C.Ci;C.Qr.__proto__=
C.Ad4;C.AOV.__proto__=C.BP;C.AuW.__proto__=C.BP;C.DF.__proto__=C.E$;C.A1.__proto__=
A.Core.O;C.FU.__proto__=C.AC;C.AeZ.__proto__=C.BX;C.ATp.__proto__=C.AB;C.Abw.__proto__=
C.Ci;C.TZ.__proto__=C.Ci;C.AM2.__proto__=C.Cq;C.AUm.__proto__=C.Cq;C.ANe.__proto__=
C.Cq;C.ATB.__proto__=C.Cq;C.WC.__proto__=A.Core.O;C.QI.__proto__=C.Fc;C.DZ.__proto__=
A.Core.O;C.TU.__proto__=C.AB;C.AUU.__proto__=C.GN;C.ALD.__proto__=C.Axg;C.AUF.__proto__=
C.Cq;C.Aeq.__proto__=C.AC;C.Axg.__proto__=C.AB;C.AU3.__proto__=C.Cq;C.ATY.__proto__=
C.Ab5;C.AAR.__proto__=A.Graphics.Hp;C.Ai1.__proto__=C.AB;C.AQT.__proto__=A.Core.
O;C.Ff.__proto__=C.OverlayMenu;C.Xt.__proto__=C.BX;C.Ai2.__proto__=C.Ci;C.ALi.__proto__=
C.Ff;C.CN.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.ALo.__proto__=C.Va;C.ALp.
__proto__=C.Ff;C.R2.__proto__=C.TZ;C.AL9.__proto__=C.Va;C.V1.__proto__=C.Fc;C.U_.
__proto__=A.Core.O;C.Kl.__proto__=A.Core.O;C.ARf.__proto__=C.HT;C.ATs.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.CN;C.AMT.__proto__=C.Al4;C.G_.__proto__=A.
Core.O;C.AUW.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.CN;C.AaD.
__proto__=C.FU;C.Aw_.__proto__=C.AAR;C.AS4.__proto__=C.OverlayMenu;C.ANY.__proto__=
A.Core.O;C.NZ.__proto__=A.Core.O;C.AS5.__proto__=A.Core.O;C.AT1.__proto__=A.acl.
Ad0;C.Akw.__proto__=C.I2;C.Al7.__proto__=C.OverlayMenu;C.ABm.__proto__=C.Bc;C.Ya.
__proto__=C.AuW;C.Aqd.__proto__=C.HT;C.Ab4.__proto__=C.Dm;C.WeightRecordingScope.
__proto__=C.AC;C.At8.__proto__=C.AB;C.AT0.__proto__=C.I2;C.ALA.__proto__=C.AB;C.
AqW.__proto__=C.HT;C.AGx.__proto__=A.Core.O;C.AUZ.__proto__=A.Core.O;C.D_.__proto__=
C.Ci;C.Aes.__proto__=C.D_;C.Avm.__proto__=C.Aes;C.SetTransponderScreen.__proto__=
C.QZ;C.ACF.__proto__=C.Et;C.AGB.__proto__=C.Bc;C.WeightListScreen.__proto__=C.AB;
C.L_.__proto__=C.QZ;C.ALg.__proto__=C.L_;C.ManualActionScanScreen.__proto__=C.L_;
C.ALh.__proto__=A.Core.O;C.AOZ.__proto__=C.Dx;C.ACE.__proto__=C.Dx;C.TI.__proto__=
C.Dx;C.AO1.__proto__=C.Dx;C.AMx.__proto__=C.Bc;C.MZ.__proto__=C.Bc;C.AMv.__proto__=
C.Bc;C.Jg.__proto__=A.Core.O;C.AMu.__proto__=C.Bc;C.Amz.__proto__=C.Tt;C.AFq.__proto__=
C.AwE;C.Akk.__proto__=C.AwE;C.Za.__proto__=C.Akk;C.AMZ.__proto__=C.OQ;C.OQ.__proto__=
C.G_;C.AO4.__proto__=C.Et;C.CY.__proto__=A.Core.O;C.AMr.__proto__=C.Ajh;C.ACA.__proto__=
C.TJ;C.J7.__proto__=A.Core.O;C.Amh.__proto__=C.Mg;C.AOl.__proto__=C.Ka;C.AutoRegistrationMode.
__proto__=C.AC;C.AO5.__proto__=C.Et;C.Tn.__proto__=C.AB;C.D2.__proto__=A.Core.O;
C.ALO.__proto__=C.RJ;C.AL2.__proto__=C.Aaz;C.ALX.__proto__=C.Aaz;C.ATr.__proto__=
C.Bc;C.AO3.__proto__=C.Et;C.ALR.__proto__=C.Aaz;C.Iv.__proto__=C.IS;C.RD.__proto__=
C.Fk;C.RH.__proto__=C.Fk;C.Tm.__proto__=C.JA;C.Qq.__proto__=C.Fk;C.Tl.__proto__=
C.JA;C.ALz.__proto__=C.Ai1;C.Gy.__proto__=C.Ai1;C.AQi.__proto__=C.Cq;C.Aaz.__proto__=
C.D2;C.JB.__proto__=C.CN;C.AQP.__proto__=C.Cq;C.ALM.__proto__=C.K5;C.ALN.__proto__=
C.D2;C.ALK.__proto__=C.K5;C.ALL.__proto__=C.K5;C.Wp.__proto__=C.D_;C.ATV.__proto__=
C.Wp;C.RI.__proto__=C.Fk;C.AOU.__proto__=C.IA;C.AMU.__proto__=C.AB;C.AMB.__proto__=
C.AdM;C.ALx.__proto__=C.IT;C.AUT.__proto__=C.IT;C.AMR.__proto__=C.Gy;C.AUS.__proto__=
C.Gy;C.ALw.__proto__=C.Gy;C.AOn.__proto__=C.Ka;C.AOW.__proto__=C.Ka;C.AO0.__proto__=
C.TJ;C.AMw.__proto__=C.Ajh;C.TJ.__proto__=C.Dx;C.Ap2.__proto__=A.acu.ABw;C.Ajh.__proto__=
C.Bc;C.DL.__proto__=A.Core.O;C.AMi.__proto__=C.DL;C.OU.__proto__=C.DL;C.Aqr.__proto__=
A.Core.O;C.ALT.__proto__=C.FT;C.ATv.__proto__=A.Core.O;C.K5.__proto__=C.D2;C.AM0.
__proto__=C.Cq;C.Auv.__proto__=C.Ci;C.ACu.__proto__=C.BP;C.ACv.__proto__=C.BP;C.
Fk.__proto__=C.JA;C.AN2.__proto__=C.GN;C.AN1.__proto__=C.IT;C.AN0.__proto__=C.Gy;
C.AOB.__proto__=C.Ka;C.ACC.__proto__=C.Dx;C.ABj.__proto__=C.Bc;C.ATq.__proto__=C.
Ahe;C.FactoryResetScope.__proto__=C.CN;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;
C.ARr.__proto__=C.Rx;C.ARq.__proto__=C.IT;C.ARp.__proto__=C.Gy;C.ACw.__proto__=C.
Ka;C.AA2.__proto__=C.FU;C.ALm.__proto__=C.Ff;C.ALB.__proto__=C.At8;C.NewAnimalSetTransponderScreen.
__proto__=C.ArZ;C.C3.__proto__=C.AC;C.OT.__proto__=A.Core.O;C.RE.__proto__=C.Fk;
C.RF.__proto__=C.Fk;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AQ0.
__proto__=C.OverlayMenu;C.Vr.__proto__=C.TZ;C.ADv.__proto__=C.Ci;C.AnimalSingleInfoScreen.
__proto__=C.Tn;C.AnimalMultiInfoScreen.__proto__=C.Tn;C.ALQ.__proto__=C.OverlayMenu;
C.MultiInfoActionsScreen.__proto__=C.Gy;C.IY.__proto__=A.Core.O;C.ALl.__proto__=
C.GN;C.ALk.__proto__=C.IT;C.ALj.__proto__=C.Gy;C.AOT.__proto__=C.IA;C.Ar9.__proto__=
C.OT;C.AqF.__proto__=C.OT;C.Aur.__proto__=C.AC;C.ALI.__proto__=C.AC;C.AFY.__proto__=
C.D_;C.GS.__proto__=A.Core.O;C.AQl.__proto__=C.HB;C.AUK.__proto__=C.XH;C.ARb.__proto__=
C.V9;C.AC5.__proto__=C.Lc;C.HB.__proto__=C.GS;C.Lc.__proto__=C.GS;C.EartagNrAssignmentMode.
__proto__=C.AC;C.Ave.__proto__=C.HB;C.ATT.__proto__=C.BX;C.NewAnimalsSetTransponderScreen.
__proto__=C.ArZ;C.ReasonOfLeaving.__proto__=C.AC;C.ON.__proto__=C.BX;C.Aev.__proto__=
C.Ed;C.AQ6.__proto__=C.Ed;C.AQ5.__proto__=C.Ed;C.Ed.__proto__=A.Core.O;C.Q0.__proto__=
C.D_;C.AQm.__proto__=C.Lc;C.Avd.__proto__=A.Core.O;C.E$.__proto__=A.Core.O;C.Fm.
__proto__=C.AB;C.ANz.__proto__=C.AB;C.ANC.__proto__=C.Fm;C.AND.__proto__=C.Fm;C.
Aqg.__proto__=C.Fm;C.Aa6.__proto__=C.Ajz;C.Ka.__proto__=C.Ajz;C.AuV.__proto__=C.
Aa6;C.AOz.__proto__=C.Aa6;C.AOy.__proto__=C.Aa6;C.AOx.__proto__=C.BP;C.Ad$.__proto__=
C.Et;C.Amp.__proto__=C.Bc;C.Ai8.__proto__=C.Iv;C.ABY.__proto__=A.Core.O;C.Akt.__proto__=
A.Core.O;C.Q3.__proto__=C.AB;C.AUl.__proto__=C.Q3;C.AOA.__proto__=C.BP;C.Dx.__proto__=
C.Et;C.KH.__proto__=C.BP;C.AOt.__proto__=C.KH;C.AOv.__proto__=C.KH;C.X6.__proto__=
C.Amp;C.Af$.__proto__=C.G_;C.ANm.__proto__=C.GN;C.ANl.__proto__=C.IT;C.ANk.__proto__=
C.Gy;C.AOw.__proto__=C.Ka;C.Aa1.__proto__=C.Ab4;C.Ajq.__proto__=C.Qr;C.ABd.__proto__=
C.Qr;C.AOY.__proto__=C.Dx;C.AMt.__proto__=C.Bc;C.RG.__proto__=C.Fk;C.ALJ.__proto__=
C.Fk;C.ANc.__proto__=C.Eb;C.ANd.__proto__=C.Eb;C.AOu.__proto__=C.KH;C.NS.__proto__=
C.Abw;C.AM_.__proto__=C.Eb;C.AOp.__proto__=C.KH;C.PF.__proto__=C.Ci;C.R3.__proto__=
C.AB;C.ANA.__proto__=C.R3;C.ANB.__proto__=C.R3;C.ANE.__proto__=C.Aqg;C.ANx.__proto__=
C.Fm;C.Aay.__proto__=C.Iv;C.Pe.__proto__=C.Iv;C.ALV.__proto__=C.Al7;C.AQN.__proto__=
C.TU;C.AQM.__proto__=C.TU;C.ARm.__proto__=C.Rx;C.ARl.__proto__=C.IT;C.ARk.__proto__=
C.Gy;C.AOO.__proto__=C.Ka;C.QV.__proto__=C.GN;C.ATD.__proto__=C.IT;C.ATC.__proto__=
C.Gy;C.Ad8.__proto__=C.X$;C.ABi.__proto__=C.Bc;C.ACB.__proto__=C.Dx;C.AOQ.__proto__=
C.BP;C.AaB.__proto__=C.Ny;C.XA.__proto__=C.Ny;C.RJ.__proto__=C.D2;C.XB.__proto__=
C.RJ;C.Xy.__proto__=C.Iu;C.Aaw.__proto__=C.Iu;C.Xx.__proto__=C.Iu;C.Aav.__proto__=
C.Iu;C.ALS.__proto__=C.AB;C.Iu.__proto__=C.IS;C.IS.__proto__=C.G_;C.Ny.__proto__=
C.Fk;C.AwD.__proto__=C.Za;C.AMY.__proto__=C.Amh;C.AwF.__proto__=C.Za;C.ATf.__proto__=
C.Cq;C.ATd.__proto__=C.Ed;C.AQj.__proto__=C.Lc;C.ATe.__proto__=C.Ed;C.NewMenu.__proto__=
C.AB;C.ARc.__proto__=C.HT;C.ALU.__proto__=C.Al7;C.AL_.__proto__=C.Va;C.JA.__proto__=
C.IS;C.AOS.__proto__=C.Ya;C.Aa0.__proto__=C.CN;C.AO2.__proto__=C.Et;C.MotherScanScreen.
__proto__=C.L_;C.AOR.__proto__=C.Aqt;C.I6.__proto__=A.Core.O;C.AON.__proto__=C.BP;
C.SetSaveNaisIdScreen.__proto__=C.QZ;C.ANn.__proto__=C.Aqd;C.Uz.__proto__=C.CN;C.
UA.__proto__=C.Uz;C.Aco.__proto__=C.Uz;C.Adx.__proto__=C.AC;C.AFX.__proto__=C.D_;
C.ANb.__proto__=C.Eb;C.AOs.__proto__=C.KH;C.AM$.__proto__=C.Eb;C.AOq.__proto__=C.
KH;C.AjA.__proto__=C.TI;C.AOX.__proto__=C.TI;C.Ajg.__proto__=C.MZ;C.AMs.__proto__=
C.MZ;C.AQ7.__proto__=C.Aev;C.X$.__proto__=C.BP;C.Ab5.__proto__=C.BX;C.Fu.__proto__=
C.AC;C.ALY.__proto__=C.Fu;C.ALZ.__proto__=C.Fu;C.ALF.__proto__=C.IT;C.Tt.__proto__=
C.BX;C.ARe.__proto__=C.AB;C.ArZ.__proto__=C.SetTransponderScreen;C.AC6.__proto__=
C.HB;C.Ar0.__proto__=C.ON;C.AwQ.__proto__=C.ON;C.Ab8.__proto__=C.CN;C.AU9.__proto__=
C.Rx;C.AU8.__proto__=C.IT;C.AU7.__proto__=C.Gy;C.AQn.__proto__=A.Core.O;C.AQk.__proto__=
C.HB;C.AB3.__proto__=C.Aa1;C.LS.__proto__=A.Core.O;C.ATA.__proto__=C.Cq;C.ATz.__proto__=
C.Cq;C.AUD.__proto__=C.Cq;C.Ae6.__proto__=C.AC;C.I3.__proto__=A.acn.I3;C.AUr.__proto__=
C.AB;C.ATi.__proto__=C.QV;C.ACD.__proto__=C.Dx;C.AMg.__proto__=C.QV;C.AOm.__proto__=
C.Ad8;C.AOP.__proto__=C.Ad8;C.ABl.__proto__=C.Bc;C.ATS.__proto__=C.Sy;C.ATW.__proto__=
C.Q0;C.AOM.__proto__=C.BP;C.AQY.__proto__=C.Ff;C.AQX.__proto__=C.Ff;C.AQW.__proto__=
C.Ff;C.ALq.__proto__=C.Al5;C.AQ2.__proto__=C.TZ;C.ATh.__proto__=C.OverlayMenu;C.
Vs.__proto__=C.AC;C.AMf.__proto__=C.OverlayMenu;C.ADo.__proto__=C.AC;C.AUq.__proto__=
C.OQ;C.AGC.__proto__=C.CN;C.ATU.__proto__=C.BX;C.YK.__proto__=C.CN;C.AM9.__proto__=
C.Eb;C.AOo.__proto__=C.KH;C.ANa.__proto__=C.Eb;C.AOr.__proto__=C.KH;C.Rx.__proto__=
C.GN;C.Avk.__proto__=C.Va;};C._ReInit=function(){var B;if((B=C.AwU._this))B._ReInit(
),C.AwU._ReInit.call(B);if((B=C.AwV._this))B._ReInit(),C.AwV._ReInit.call(B);if((
B=C.AX._this))B._ReInit(),C.AX._ReInit.call(B);if((B=C.Pc._this))B._ReInit(),C.Pc.
_ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(
B);if((B=C.AeU._this))B._ReInit(),C.AeU._ReInit.call(B);if((B=C.BL._this))B._ReInit(
),C.BL._ReInit.call(B);if((B=C.Wj._this))B._ReInit(),C.Wj._ReInit.call(B);if((B=
C.Ar1._this))B._ReInit(),C.Ar1._ReInit.call(B);if((B=C.Anv._this))B._ReInit(),C.
Anv._ReInit.call(B);if((B=C.DI._this))B._ReInit(),C.DI._ReInit.call(B);if((B=C.Aue.
_this))B._ReInit(),C.Aue._ReInit.call(B);if((B=C.Al1._this))B._ReInit(),C.Al1._ReInit.
call(B);if((B=C.Avr._this))B._ReInit(),C.Avr._ReInit.call(B);if((B=C.Avs._this))
B._ReInit(),C.Avs._ReInit.call(B);if((B=C.Axi._this))B._ReInit(),C.Axi._ReInit.call(
B);};C.DB=function(D){var B;if((B=C.AwU._this)&&(B._cycle!=D))B._Done(C.AwU._this=
null);if((B=C.AwV._this)&&(B._cycle!=D))B._Done(C.AwV._this=null);if((B=C.AX._this
)&&(B._cycle!=D))B._Done(C.AX._this=null);if((B=C.Pc._this)&&(B._cycle!=D))B._Done(
C.Pc._this=null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions.
_this=null);if((B=C.AeU._this)&&(B._cycle!=D))B._Done(C.AeU._this=null);if((B=C.
BL._this)&&(B._cycle!=D))B._Done(C.BL._this=null);if((B=C.Wj._this)&&(B._cycle!=
D))B._Done(C.Wj._this=null);if((B=C.Ar1._this)&&(B._cycle!=D))B._Done(C.Ar1._this=
null);if((B=C.Anv._this)&&(B._cycle!=D))B._Done(C.Anv._this=null);if((B=C.DI._this
)&&(B._cycle!=D))B._Done(C.DI._this=null);if((B=C.Aue._this)&&(B._cycle!=D))B._Done(
C.Aue._this=null);if((B=C.Al1._this)&&(B._cycle!=D))B._Done(C.Al1._this=null);if((
B=C.Avr._this)&&(B._cycle!=D))B._Done(C.Avr._this=null);if((B=C.Avs._this)&&(B._cycle
!=D))B._Done(C.Avs._this=null);if((B=C.Axi._this)&&(B._cycle!=D))B._Done(C.Axi._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */