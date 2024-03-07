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
);if(index.kR)throw new Error("The unit file 'Application.js' included twice!");
index.kR=(function(){var A=index;var C={};
var Cc=[0,0,240,320];var BF=[0,0,240,40];var EY=[0,0,20,30];var Hi=[6,21,14,25];var
I7=[6,15,14,19];var Ik=[6,9,14,13];var O0=[209,7,229,37];var PZ=[0,40,240,320];var
P0=[0,228,240,298];var CO=" ";var E7=[0,40,240,280];var Ls=[0,40,232,280];var P1=[
0,40,116,160];var Ks=[114,40,230,160];var N$=[0,160,116,280];var P2=[116,160,232
,280];var ME=[0,280,116,400];var SY=[116,280,232,400];var UJ=[0,400,116,520];var
ZM=[116,400,232,520];var WN=[-1,520,115,640];var IJ=[232,40,240,280];var UK=[5,40
,235,120];var ZN=[120,140,210,230];var WO=[20,140,110,230];var ZO=[0,0,116,120];
var WQ=[0,0,120,120];var ZP=[0,0,116,45];var ZQ=[0,0,8,200];var UL=[0,0,8,20];var
WR=[30,0,210,40];var Rd=[0,0,40,40];var ZR=[7,8,200,40];var O1=[0,0,200,40];var Re=[
6,1];var WS="ERROR: Invalid value for ItemHighlighting";var WT=[10,10,40,30];var
WU=[0,0,120,40];var WV=[60,0,180,40];var ZS=[120,0,240,40];var WW=[0,0,100,40];var
WX=[83,0,157,40];var SZ=[140,0,240,40];var ZT=[0,0,20,40];var ZU=[220,0,240,40];
var Acu=[0,0,300,30];var UM=[0,30,300,60];var ZV=[0,60,300,90];var Afk=[0,90,300
,120];var ZW=[0,100,300,110];var WY=[0,50,300,60];var ZX=[0,30,300,40];var ZY="*";
var Afl=[40,40];var JR=[0,0,240,80];var Acv=[0,0,240,50];var Lt="Cap";var AhF=[0
,40,40,80];var AnY=[200,40,240,80];var Oa=[30,40,210,80];var WZ="--";var AnZ="%d";
var AhG="%m";var AhH="%Y";var Acw=" (";var UN=[0,0,232,80];var An0="Date";var An1=[
48,40,88,78];var An2=[39,40,79,80];var An3=[80,44,87,77];var Afm=".";var An4=[88
,44,120,77];var Afn=[120,44,127,77];var Asq=[127,44,191,77];var Ob=[0,0,80,40];var
S0="Text";var Axx=[430,102,430,102];var S1=[0,0,240,240];var Asr=[232,0,240,240];
var Axy=[0,10,240,240];var Axz="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var AxA="Unhandled option";
var An5=[0,80,240,280];var AxB="Unhandled animal list action";var Ass="Animal list content not handled.";
var JS=[0,40,240,80];var AxC="Set Selected";var Acx="Unhandled AnimalListInfoItemMode ";
var AxD=" %%";var AGT=[0,180,240,220];var AGU=[82,127,167,150];var AGV="Group";var
AGW=[77,91,167,124];var Ast=[0,0,90,33];var AVm=[4,4,18,29];var AVn=[20,4,34,29];
var AVo=[36,4,50,29];var AVp=[52,4,66,29];var AVq=[68,4,82,29];var Asu="ERROR: Unhandled Device::SyncState";
var AxE=":\n";var P3="{1}";var AxF="{2}";var AVr=[0,49,240,109];var AVs=[0,170,240
,243];var AVt=[0,110,240,170];var AVu=[20,243,220,268];var AGX=[30,8];var AGY="\u2265 ";
var Afo=[0,0,240,160];var An6=[0,0,0,0];var AVv=[0,0,240,66];var AGZ=[10,0,76,66
];var AkT=[33,33];var AG0=[87,0,153,66];var AG1=[164,0,230,66];var AG2="No statistics available";
var AVw="in this environment.";var AVx=" fps";var AVy="CPU: - %%";var Acy=[0,0,240
,120];var AVz=[130,0,237,20];var AG3=[20,0,120,20];var Asv=[0,20,240,40];var AG4=[
40,20,100,40];var AG5=[100,20,240,40];var AxG=[0,40,240,60];var AG6=[40,40,100,60
];var AxH=[100,40,240,60];var AVA=[0,60,50,80];var AVB=[100,60,240,80];var AVC=[
0,80,50,100];var AVD=[100,80,240,100];var AG7=[0,100,50,120];var AVE=[100,100,240
,120];var O2=[5,5,15,15];var AxI="%H";var AVF="%M";var AVG="Time";var AVH=[79,40
,119,78];var AVI=[125,40,164,80];var AVJ=[86,40,126,80];var AVK=":";var AVL=[75,
40,115,80];var AxJ=[0,0,240,150];var Asw=[60,0,155,40];var Asx=[30,0,65,40];var AVM=[
60,0,100,40];var AVN=[88,0,128,40];var AVO=[60,0,71,40];var AVP=[60,0,74,40];var
AG8=[90,0,123,40];var AVQ=[120,0,161,40];var AG9=[120,0,165,40];var AG_=[60,0,88
,40];var AG$=[60,0,95,40];var AVR="Did not expect iterator bigger than number of records";
var AHa=[20,0,240,20];var AHb=[0,38,240,40];var AVS=[0,0,8,4];var Rf=[0,0,240,280
];var W0=[0,280,240,320];var AVT="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AVU="]";var AVV="ERROR: Cannot find closing bracket \'}\' in text [";var AVW=
"] opened at index ";var AVX="#";var AVY="ERROR: Invalid parameter: {";var AVZ="}";
var AhI=[20,20];var AHc=[0,12];var AV0="ERROR: Not expected Application::FooterFocus, ";
var AV1="%M:%S";var AHd=[30,150,207,170];var AHe=[20,70,217,194];var AxK="Unhandled item.";
var P4=[0,80,240,120];var AV2="Unhandled Overlay Menu ";var AV3="Invalid bootloader message: ";
var AV4="Unknown USBState: ";var Asy="Invalid fader";var AV5=[2,4,32,40];var AV6=[
29,4,80,40];var AV7=[120,4,200,40];var AV8=[80,0,114,40];var AV9="-1";var AV_="< ";
var Asz=[0,0,232,40];var AV$=[22,40,180,80];var AWa=[2,40,22,80];var AWb=[23,40,
163,80];var AWc=[210,40,230,80];var AWd=[164,40,210,80];var AWe=[169,43,205,77];
var AWf="ERROR: No outlet assigned";var AWg="Unhandled screen";var AWh="ERROR: Cannot cache null screen.";
var AWi="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHf="Untreated Rating Method type!";var AkU="Unhandled animal type";var AWj=[
5,60,235,140];var AWk=[0,130,240,196];var AWl=[49,240,229,280];var AxL="Implement in derived classes!";
var AkV="Implement in derived class";var AhJ=[0,40,230,120];var AxM=[0,120,230,200
];var An7=[0,200,230,280];var AhK=[0,280,230,360];var AWm=[0,360,230,440];var AxN=[
230,40,238,280];var AHg="WARNING: Unhandled filter field: ";var Afp="Should not happen.";
var AHh="Invalid Boolean item";var ZZ=[0,120,240,160];var AkW=[0,160,240,200];var
An8=[0,200,240,240];var AWn=[1152,11,1392,51];var AWo=[1152,51,1392,91];var AWp=[
1152,91,1392,131];var AWq=[1152,131,1392,171];var AWr=[1152,171,1392,211];var AsA=[
0,240,240,280];var AHi=[10,0,240,40];var AHj=[190,0,230,40];var AWs=[60,3,95,39];
var AWt=[95,4,200,40];var AWu=[3,3];var AWv=[6,6];var AWw=[59,5,197,35];var AWx=[
59,2,200,38];var AWy=[3,2,43,42];var AWz=[0,17,43,40];var AWA=[50,40];var AWB=[50
,0];var AWC="Illegal shifting direction";var AxO=[0,0,160,30];var AHk=[0,0,25,30
];var AHl=[27,0,52,30];var AHm=[54,0,79,30];var AHn=[81,0,106,30];var AHo=[108,0
,133,30];var AHp=[135,0,160,30];var AWD="Internal queue error";var AWE="ERROR: No corresponding Id ";
var AWF=" found.";var AWG="ERROR: Error in range test";var AWH=[120,67,210,157];
var AWI=[0,40,240,70];var AWJ=[20,67,110,157];var AxP=[0,160,240,280];var AHq=[20
,77,90,147];var AWK=[0,0,210,40];var AHr=[195,0,235,40];var AhL=[0,40,232,120];var
W1=[0,120,232,200];var AWL=[0,40,232,200];var Z0=[0,200,232,280];var AWM=[0,320,
240,400];var AWN=[0,120,53,200];var An9=[0,280,232,360];var Afq="%%";var AkX=[0,
360,232,440];var AHs=[0,440,232,520];var AWO=[0,80,207,120];var O3=")";var AWP="/";
var AWQ=[5,0,88,30];var AWR=[88,0,240,30];var AWS="276000312345678";var AHt=[5,30
,100,60];var AsB=[100,30,240,60];var AxQ="Manufacturer";var AWT="Country";var AWU=[
5,60,240,90];var AHu="Niedersachsen";var AHv=[5,90,145,120];var AWV=[140,90,240,
120];var AHw="Protocol";var AWW=[0,0,120,100];var AHx=[0,40,116,120];var AWX=[40
,80,92,107];var AHy=[0,0,50,23];var AHz="ERROR: Unhandled Device::MeasureState";
var AxR=[0,120,240,280];var AWY=[178,159,248,203];var AWZ=[10,145,170,225];var AW0=[
0,61,240,101];var AW1=[0,0,40,23];var AW2=[101,113,141,136];var AW3=[101,235,141
,258];var AW4=[69,288,101,313];var AW5=[0,40,240,200];var AsC=[0,200,240,280];var
AsD=[0,280,240,360];var AHA="\u2264 ";var AW6=[0,80,94,160];var AW7=[94,80,184,160
];var AW8=[184,80,240,160];var AHB=[197,105,231,139];var AW9=[105,101,173,127];var
AW_=[7,101,75,127];var AW$=[94,125,184,151];var AXa=[2,125,92,151];var AXb=[0,70
,240,101];var AXc=[0,106,240,280];var AXd=[30,40,240,70];var AXe=[0,40,30,70];var
AXf="\u278B";var AXg=[0,0,240,175];var AXh=[0,0,232,175];var AXi=[232,0,240,175];
var AXj="Text Here !";var AXk=[200,0,240,40];var AxS="1";var AHC="2";var AsE="3";
var AxT="4";var AxU=[0,360,232,400];var AxV="ERROR: invalid item class.";var AHD=[
10,220,250,260];var AXl=[185,0,225,40];var AHE="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXm="ERROR: Received more actions than expected!";var AHF=", ";var AXn=
"ERROR: Cannot set action at position=";var AXo=". Current elements:";var AXp=", max elements:";
var AXq="17";var AXr=[0,0,58,58];var AXs=[0,0,60,60];var AXt=[30,0,58,20];var AXu=[
7,6,25,24];var AXv=[30,60,130,160];var AXw=[0,0,28,20];var AXx=[4,3,40,24];var AXy=[
0,0,42,27];var AxW=[0,0,17,17];var AXz="Unknown direction of counting enum value: ";
var AXA="Unknown id generation method enum value: ";var AxX="Invalid animal id generation method: ";
var AsF="Unhandled popup id";var UO="0";var AsG=";";var AXB=[0,400,230,480];var AXC=[
5,120,235,200];var AXD=[0,640,230,760];var AHG=[0,0,300,200];var AXE=[20,40,220,
80];var AHH=[20,80,220,280];var AXF=[140,0,188,40];var AXG="ERROR: Row containing birth weight could not be loaded";
var AXH=[0,440,230,520];var AsH="ID";var AXI=[40,40,198,70];var AXJ="Extra info: ";
var AHI=" -";var AXK=[0,0,230,120];var AXL=[0,0,230,40];var AXM=[0,80,230,120];var
AXN="\xB0Brix";var AXO=[0,410,230,490];var Acz=[0,320,230,400];var AXP="ERROR: aNumberOfDays can not be < 0 ";
var AXQ="{WEIGHTGAIN} ";var AXR="\xB1";var AHJ="+";var AXS="{WEIGHTGAIN}";var AXT=
"{DAYS}";var AXU="ERROR: aString can not be null";var AXV=[166,70,240,114];var AXW=[
0,60,160,120];var AXX=[30,0,240,60];var AHK=[1,6,29,54];var AXY=[30,60,240,120];
var AXZ="Con";var AX0=[70,50,170,70];var AHL="Unhandled Device::NaisIdValidationResult: ";
var AHM="Unhandled PopupId";var AX1=[110,123,230,248];var AX2=[5,0,250,40];var AX3=[
102,0,186,40];var AX4=[153,0,240,40];var Rg="-";var AsI=[170,0,240,40];var AHN=[
220,0,320,30];var AHO=[200,20,300,50];var An_=[180,0,180,40];var An$=[170,0,170,
40];var AxY="Untreated state";var AX5="ERROR: Animal id scanned in an unexpected state : ";
var AHP="ERROR: Null animal id scanned.";var AX6=[40,40,235,100];var AX7=[120,100
,210,190];var AX8=[20,100,110,190];var AX9=[0,40,40,100];var AX_="\u278A";var AX$=
"Action untreated";var AYa="ERROR: No corresponding ";var AYb=" action found!";var
AYc="Unhandled action: ";var AYd=[0,190,240,220];var AYe=[0,220,232,280];var AYf=[
5,190,235,270];var AYg=[232,60];var AYh=[0,2];var AYi=[58,58];var AYj="A";var AYk=[
56,0,156,40];var Aoa=[156,0,240,40];var AHQ=" 7 ";var AYl=[40,0,156,40];var AHR=
"/-1/-2";var AHS=[72,0,144,40];var Z1="\n";var AHT="(";var AYm=[72,0,156,40];var
AHU="%y/%m";var AYn=[70,0,240,40];var AxZ=[70,0,120,40];var AYo=[160,0,245,40];var
AYp="- ";var Ax0=" - ";var AYq="{parc}{clr3}";var AYr="{clr0}/^{clr2}";var AYs="{clr0}/^{clr1}";
var AHV=[0,0,85,40];var Aob="?";var AHW=[0,0,120,140];var AYt=[0,0,116,40];var AHX=[
15,0,100,40];var AHY=[110,0,200,40];var AkY=[0,0,34,34];var AYu=[129,0,157,40];var
Aoc=[0,0,25,25];var AYv="\u2611";var AHZ="\u2610";var AH0=[5,0,72,40];var AYw=[150
,0,240,40];var AYx=[72,0,139,40];var Ax1="Unvalid content class: ";var AYy=[0,320
,240,360];var AH1=[0,360,240,400];var AYz=[144,0,170,40];var AYA=[187,0,213,40];
var AYB=[207,10,233,50];var AYC=[247,20,273,60];var AYD=[140,0,150,100];var AYE=[
165,0,175,100];var AYF=[185,0,195,100];var AYG=[205,0,215,100];var AYH=[211,0,233
,40];var AYI=[189,0,211,40];var AYJ=[167,0,189,40];var AYK=[145,0,167,40];var AH2=[
5,0,240,40];var Z2=[10,0,10,40];var AYL="= \u2211 ";var Ax2=[125,0,240,40];var AYM=[
130,0,170,40];var AYN="\xD8 ";var AYO=[100,10,116,36];var Aod=[117,10,133,36];var
AYP=[135,10,151,36];var AYQ="Implement in derieved class";var AsJ=[0,80,240,240];
var AsK=[0,120,232,160];var AsL=[0,160,232,200];var AsM=[0,200,232,240];var Ax3=[
0,240,232,280];var Aoe=[0,320,232,360];var AH3=[-61,360,232,400];var AsN=[0,100];
var AYR=[0,40,240,240];var AYS=[0,50000];var AYT=[0,500];var AYU=[0,0,240,105];var
AYV=[0,105,240,210];var AYW=[0,40,240,81];var AYX=[0,81,240,122];var AYY=[0,122,
240,163];var AYZ=[0,163,240,205];var AY0=[0,205,240,240];var AY1=[0,200];var AY2=[
0,40,240,73];var Ax4=[0,0,30,40];var AY3=[0,40,30,80];var Ax5=[60,40];var Ax6=[60
,0];var AY4=[10,0,40,40];var AH4=[0,190,240,260];var AY5=[0,130,240,190];var Ax7=[
40,40,200,130];var AY6=[90,230,170,253];var AY7=[80,190,170,223];var AH5=[0,130,
240,180];var AY8=[0,250,240,280];var AY9=[129,0,156,40];var AY_=[72,0,100,40];var
AY$=[100,0,129,40];var AZa=[78,8,103,33];var AH6=[0,0,300,120];var AZb=[1,-1];var
AZc=[20,40,240,120];var AZd=[20,0,240,40];var AZe=[0,118,240,120];var AZf=[0,20,
130,40];var AZg=[130,20,240,40];var AZh=[0,0,10,20];var AH7="\u2191";var AZi=[230
,0,240,20];var AsO=[0,40,232,80];var AZj=[0,80,232,160];var AZk=[0,160,230,240];
var AsP=" p. p.";var Ax8="Unknown animal type";var AsQ=[80,0,140,40];var BpU=[50
,0,172,40];var BpV=[172,0,240,40];var BpW=[0,90,240,92];var A$C="Unhandled menu item";
var A$D=[0,0,50,30];var AsR=[0,0,30,30];var BpX="No AnimalActionTemperatureScreen found!";
var BpY="840003123456789";var BpZ=[40,0,230,40];var Bp0=[50,10,230,30];var AZl="No AnimalMultiInfoScreen found!";
var AH8=[0,0,25,40];var A$E="/^";var A$F="?/?";var Bp1=[100,4,180,40];var Bp2=[65
,0,99,40];var Bp3=[165,0,200,40];var A$G=[0,0,60,40];var A$H="9999/^9999";var Bp4=
"Invalid index: ";var Bp5="Unknown AnimalIdGenerationMethod: ";var Bp6="Invalid gender: ";
var AsS="Invalid input state: ";var Bp7="Unhandled AnimalIdGenerationMethod";var
Bp8=[42,35,67,75];var Bp9=[5,35,39,75];var Bp_=[70,40,228,70];var Bp$="Invalid direction for setting focus";
var AhM="Invalid index";var Bqa="Unvalid direction";var Bqb=[0,0,42,30];var A$I=[
22,0,42,30];var Bqc=[20,0,40,30];var Bqd=[0,0,158,30];var A$J=[32,0,62,30];var A$K=[
64,0,94,30];var A$L=[96,0,126,30];var Bqe=[128,0,158,30];var Bqf=" %% ";var Bqg=[
0,70,240,220];var Bqh=[0,237,240,307];var A$M="\n44 %% done";var Bqi=[0,0,166,30
];var AH9=[0,0,12,30];var Ax9=[14,0,26,30];var AZm=[28,0,40,30];var AZn=[42,0,54
,30];var AZo=[56,0,68,30];var AZp=[70,0,82,30];var AZq=[84,0,96,30];var AZr=[98,
0,110,30];var A$N=[112,0,124,30];var AZs=[126,0,138,30];var Bqj=[140,0,152,30];var
Bqk=[154,0,166,30];var A$O=[20,0,46,30];var Bql="\u2642";var Bqm="{fnt3}\u2642{fnt1}";
var Bqn="\u2640";var Bqo="{fnt3}\u2640{fnt1}";var Bqp="{parc}";var Bqq=[30,30,210
,80];var Bqr="Implement in derieved class!";var Bqs=[60,4,226,34];var A$P=[30,4,
58,34];var A$Q=[4,0,27,40];var Bqt=[116,4,228,34];var Bqu=[60,4,86,34];var Bqv=[
88,4,114,34];var Aof="Implement in derived class!";var A$R="Implement in derived class.";
var Bqw="Invalid nais id view: ";var Bqx=[0,35,240,75];var Bqy=[0,0,110,30];var Bqz=[
0,0,26,30];var BqA="100";var AZt="\n\n";var BqB=[240,240];var BqC=[0,240];var BqD=
"Unknown rated attribute: ";var BqE=[120,80,240,280];var BqF=[0,80,120,280];var AH_=
" %% (";var Ax_=" \xB1 ";var Ax$=" (n = ";var AZu=[0,80,232,120];var BqG=[0,242,
232,282];var AZv=[0,280,232,320];var BqH=[35,0,200,40];var BqI=[1,0,31,40];var BqJ=[
32,40];var BqK=[32,0];var BqL=[3,0,83,40];var A$S=[180,0,240,40];var BqM=[120,0,
180,40];var BqN=[65,0,125,40];var BqO=[0,0,120,200];var BqP=[0,40,120,150];var A$T=[
15,160,60,190];var A$U=[60,160,105,190];var BqQ=[0,65,240,135];var BqR=[10,112,170
,192];var BqS=[178,129,248,173];var BqT=[0,40,240,110];var BqU=[10,98,170,178];var
BqV=[178,112,248,156];var BqW=[85,190,160,265];var BqX=[89,194,155,260];var BqY=[
26,190,111,250];var BqZ=[125,181,225,211];var Bq0=[100,220,183,250];var Bq1="38.7";
var Bq2=[180,220,225,250];var Bq3="\xB0C";var Bq4=[0,99,240,178];var Bq5=[100,280
,140,320];var Bq6=[0,26,240,105];var A$V=[30,40];var A$W=[30,0];var Bq7=[149,0,200
,40];var Bq8=[145,40];var Bq9=[145,0];var Bq_=[38,0,88,40];var AZw=[0,0,35,40];var
Bq$=[0,0,50,40];var Bra=[40,0,200,40];var Brb=[95,0,145,40];var Brc=[65,5,223,35
];var AZx=[0,0,15,40];var Brd=[72,0,140,40];var A$X="\n(";var Bre="%y/%m/%d";var
Brf="%y ";var Brg=" %m ";var Brh=" %d ";var Bri="20";var Brj=[225,0,240,40];var Brk=[
0,400,232,440];var Brl=[0,440,232,480];var Brm=[0,480,232,520];var Brn=[0,520,232
,560];var Bro=[0,560,232,600];var Brp=[0,598,232,638];var Brq=[5,0,215,40];var Brr=[
215,8,240,33];var Brs="Implement in dervied class.";var Brt="ERROR: Unhandled temperature unit: ";
var AH$="ERROR: Unhandled mass unit: ";var Bru=[-1,160,115,280];var Brv=[114,160
,230,280];var AZy=[116,40,232,160];var Aya="Unknown weight class index: ";var Brw=
"< 35";var Brx="35 - 40";var Bry="40 - 45";var Brz="45 - 50";var BrA="\u2265 50";
var BrB="< 80";var BrC="80 - 90";var BrD="90 - 100";var BrE="100 - 110";var BrF=
"\u2265 110";var A$Y="Unknown mass unit";var BrG=[143,0,193,40];var A$Z=[192,0,240
,40];var BrH=[44,28,44,28];var BrI="0 %%";var BrJ=[-1,40,115,160];var BrK=[117,40
,233,160];var BrL=[1,160,117,280];var BrM=[114,158,230,278];var BrN=[1,280,117,400
];var BrO=[30,0,155,40];var A$0="\u2620";var AZz=[380,150,380,190];var A$1=[105,
0,155,50];var AZA=[190,1,240,41];var BrP=[72,0,108,40];var BrQ=[108,0,180,40];var
BrR=[60,0,94,40];var BrS=[94,0,200,40];var BrT="Scroll direction not supported.";
var BrU=[44,0,207,40];var BrV=[207,0,240,40];var BrW="99";var BrX="Unknown birth type";
var BrY=[44,0,189,40];var BrZ=[5,0,44,40];var Br0=[44,0,240,40];var Br1=[240,0,240
,40];var Br2="\u25C9";var A$2="\u25CB";var Br3=[75,4,215,34];var Br4=[47,4,73,34
];var A$3=[17,4,45,34];var Br5=[0,0,138,30];var Br6=[47,4,215,34];var AZB="Unhandled MotherSelectionFilterMode: ";
var Br7="Read only!";var Br8="actions array too small to hold all actions";var Br9=[
120,40];var Br_=[120,0];var Br$=[5,0,115,40];var Bsa=[0,0,205,40];var Bsb=[59,4,
170,34];var Bsc=[59,1,173,37];var Bsd=[175,1,205,37];var Bse=[0,0,37,40];var Bsf=[
115,98,205,188];var Bsg=[0,40,235,100];var Bsh=[2,200,240,280];var Bsi=" 01234";
var Bsj=[0,0];var Bsk=[33,63];var Bsl=[25,56];var Bsm="Unknown transponder image type: ";
var AIa=[0,0,82,82];var Bsn=[0,0,81,26];var Bso=[105,120,195,210];var Bsp=[10,140
,100,230];var A$4="Unhandled EartagNrAssignmentMode: ";var Bsq="Unhandled Gender";
var Bsr=[10,35,35,75];var Bss=[44,40,202,70];var Bst=[204,35,232,75];var Bsu="Unvalid FatoryResetScope";
var A$5=[0,120,240,200];var Bsv=[144,0,192,40];var Bsw=[144,0,240,40];var Bsx=[195
,0,245,50];var Bsy=[120,0,120,40];var Bsz=[140,0,240,30];var BsA=[30,0,232,40];var
BsB=[60,0,160,40];var BsC=[160,0,200,40];var BsD=[150,17,200,40];var BsE=[155,40
];var BsF=[155,0];var BsG=[146,80,240,160];var BsH=[56,80,146,160];var BsI=[0,80
,56,160];var BsJ=[13,107,47,141];var BsK=[74,109,104,139];var BsL=[50,100,130,150
];var BsM=[55,112,145,140];var BsN=[146,112,236,140];var BsO=[150,86,223,110];var
AIb=[0,40,240,120];var BsP="Menu item for animal table field not found";var A$6=[
0,360,240,440];var BsQ=[0,440,240,520];var BsR=[5,40,235,104];var BsS=[120,108,226
,218];var BsT=[20,120,110,210];var BsU=[5,223,235,280];var BsV=[0,0,64,30];var BsW=[
44,0,64,30];var BsX=[185,5,225,35];var BsY=[170,5,234,35];var BsZ="Unhandled number of digits";
var Bs0=[0,0,126,30];var Bs1=[22,5,149,35];var Bs2=[149,0,232,40];var A$7=[5,20];
var Bs3=[5,0];var Bs4="Unhandled AnimalIdAutoGenerationMethod: ";var Bs5=[4,440,
236,520];var Bs6="Unhandled TransponderAssignmentIdChangeMethod: ";var Bs7="\n";
var Bs8="%";var Bs9=[0,0,160,120];var Bs_=[2,2,157,117];var Bs$=[50,70];var Bta=[
50,50];var Btb="Unhandled data export destination ";var Btc=[0,0,168,40];var Btd=[
168,0,240,40];var Bte=[0,47,232,77];var Btf=[121,17,171,40];var A$8=[0,40,230,280
];var Btg="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var Bth="ERROR: Received more animal table fields than expected!";
var Bti=[0,80,240,130];var Btj=[0,80,240,200];var A$9="Unhandled BackupError: ";
var Btk="Unhandled PopupId: ";var Btl=[203,0,240,40];var Btm=[168,0,203,40];var Btn=[
35,0,152,40];var Bto=[0,0,84,40];var Btp=[84,0,167,40];
C.AMc={Device:null,A5B:null,GC:null,Init:function(aArg){},DriveCursorHitting:function(
S3,BG,E9){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GC._Init.call(this.
GC={I:this},0);this.__proto__=C.AMc;this.H(Cc);this.J(this.GC,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5B=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lu=
this._variants();if(Lu){this.K={};Lu._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GC._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GC.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5B)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GC)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.A4y._variants();
},K:null,_className:"Application::Application"};C.Ar4=[240,320];C.AB={Background:
null,Ef:null,ACE:null,AnP:0,Init:function(aArg){A.pe([this,this.AZ_],this);A.pe([
this,this.Bec],this);},LL:function(G){},AZ_:function(s){this.LL(s);},CA:function(
G){},AId:function(s){this.CA(s);},EX:function(G){},Ayb:function(s){this.EX(s);},
Dn:function(E){if(this.ACE===E)return;this.ACE=E;A.pe([this,this.Bec],this);},Bec:
function(G){var B;if(!!this.ACE)this.Ef.AbP((C.BR.isPrototypeOf(B=A._NewObject(this.
ACE,0))?B:null));else this.Ef.AbP(null);},_Init:function(aArg){C.Aa2._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ef._Init.call(this.
Ef={I:this},0);this.__proto__=C.AB;this.Background.A3(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.C2);this.Ef.H(BF);this.Ef.Ar(false);this.J(this.Background
,-1);this.J(this.Ef,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Aa2;this.
Background._Done();this.Ef._Done();C.Aa2._Done.call(this);},_ReInit:function(){C.
Aa2._ReInit.call(this);this.Background._ReInit();this.Ef._ReInit();},_Mark:function(
D){var B;C.Aa2._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.Wt={KD:null,Y_:function(E){var B;if(this.KD===E)return;if(!!this.KD)this.Aqh(
this.KD,null,null,null,[B=this.KD,B.Ayb],null,false);this.KD=E;if(!!this.KD)this.
Aku(this.KD,null,null,null,null,null,null,[B=this.KD,B.AId],null,false);},AD1:function(
){return this.KD;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Wt;this.H([0,0,C.Ar4[0],C.Ar4[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.KD)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ox={UT:null,Q:null,Ant:null,Zh:null,NJ:null,Ov:null,Tw:null,Tx:null,AFL:255,
J5:function(G){var F;if(!!this.Q){this.A1E();var AcV=(F=this.Q,F[1].call(F[0]));
if(AcV>20)this.Ov.L(A.jb.EV);else this.Ov.L(A.jb.F$);this.Ov.L((this.Ov.AQ&0x00FFFFFF
)|(this.Aln(AcV,0,30)<<24));this.Tw.L((this.Tw.AQ&0x00FFFFFF)|(this.Aln(AcV,31,60
)<<24));this.Tx.L((this.Tx.AQ&0x00FFFFFF)|(this.Aln(AcV,61,100)<<24));}},AZ8:function(
s){this.J5(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AZ8],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AZ8],E,0);if(!!E)A.pe([this,
this.AZ8],this);},A2R:function(G){var F;if(!!this.Ant)this.Zh.Ar((F=this.Ant,F[1
].call(F[0])));else this.Zh.Ar(false);this.A9V(255);},A9O:function(E){if(A.aaZ(this.
Ant,E))return;if(!!this.Ant)A.z$([this,this.A2R],this.Ant,0);this.Ant=E;if(!!E)A.
zX([this,this.A2R],E,0);if(!!E)A.pe([this,this.A2R],this);},A9V:function(E){if(this.
AFL===E)return;this.AFL=E;if(!!this.UT)this.UT.L((this.UT.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},Aln:function(A0c,Bbs,Bwv){if(A0c<Bbs)return 0;else if((A0c>=Bbs)&&(A0c<
Bwv))return this.AFL&0xFF;else return 255;},A1E:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.UT=this.Tx;else if((F=this.Q,F[1].call(F[0]))>
30)this.UT=this.Tw;else this.UT=this.Ov;}else this.UT=null;},Bkj:function(){return this.
AFL;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Zh._Init.call(this.Zh={
I:this},0);A.acg.Am._Init.call(this.NJ={I:this},0);A.acg.AL._Init.call(this.Ov={
I:this},0);A.acg.AL._Init.call(this.Tw={I:this},0);A.acg.AL._Init.call(this.Tx={
I:this},0);this.__proto__=C.Ox;this.H(EY);this.Zh.Fi(2000);this.NJ.H(EY);this.NJ.
L(A.jb.Text);this.Ov.H(Hi);this.Ov.L(A.jb.EV);this.Tw.H(I7);this.Tw.L(A.jb.EV);this.
Tx.H(Ik);this.Tx.L(A.jb.EV);this.J(this.NJ,0);this.J(this.Ov,0);this.J(this.Tw,0
);this.J(this.Tx,0);this.Zh.Q=[this,this.Bkj,this.A9V];this.NJ.Ax(A.aaL(A.ach.AMn
));},_Done:function(){this.__proto__=A.Core.O;this.Zh._Done();this.NJ._Done();this.
Ov._Done();this.Tw._Done();this.Tx._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Zh._ReInit();this.NJ._ReInit();this.Ov._ReInit(
);this.Tw._ReInit();this.Tx._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.UT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ant)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zh={_Init:function(aArg){A.acl.Gc._Init.call(
this,aArg);this.__proto__=C.Zh;this.AkF=true;this.B3=0;this.Cu=255;},_className:
"Application::PulseAnimation"};C.Ef={GC:null,AR:null,Background:null,Ox:null,Bo:
null,Dj:null,K4:0,AuW:0,AuX:0,AoH:0,LD:false,KA:false,Qk:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);var Fn=((Ae&0x20)===0x20);
var Gw=this.Bo.By;if(!G8){this.AoH=A.jb.C2;this.K4=A.jb.Text;}else if(Gw){this.AoH=
this.AuW;this.K4=this.AuX;}else if(Fn){this.AoH=this.AuW;this.K4=this.AuX;}else{
this.AoH=A.jb.C2;this.K4=A.jb.Text;}this.Background.L(this.AoH);if(!!this.GC){this.
GC.Wj(this.AoH);this.GC.Dc(this.K4);}this.LD=G8;this.KA=Fn;this.Qk=Gw;},Qj:function(
G){this.An();A.pe(this.AR,this);},AiC:function(G){if(this.Dj.Ab5)return;this.An(
);if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},AbP:function(
E){if(this.GC===E)return;if(!!this.GC)this.HJ(this.GC);this.GC=E;if(!!this.GC)this.
J(this.GC,0);this.Bb(E);this.An();},A9x:function(E){if(this.AuW===E)return;this.
AuW=E;this.An();},A9y:function(E){if(this.AuX===E)return;this.AuX=E;this.An();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Ox._Init.call(this.Ox={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BL._Init.call(this.Dj={I:this},0);this.__proto__=C.Ef;var B;this.
H(BF);this.Background.A3(0x3F);this.Background.H(BF);this.Background.L(A.jb.C2);
this.Ox.H(O0);this.K4=A.jb.Text;this.Bo.PN(0);this.Bo.Wk(50);this.Dj.Filter=1;this.
AuW=A.jb.AW;this.AuX=A.jb.Bm;this.AoH=A.jb.Text;this.J(this.Background,0);this.J(
this.Ox,0);this.Ox.As([B=A._GetAutoObject(A.Device.Device),B.AvF,B.Ayc]);this.Ox.
A9O([B=A._GetAutoObject(A.Device.Device),B.AvI,B.Ayd]);this.Bo.Mv=[this,this.Qj];
this.Dj.BM=[this,this.AiC];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Ox._Done();this.Bo._Done();this.Dj._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
Ox._ReInit();this.Bo._ReInit();this.Dj._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.GC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XN={Aer:null,Ut:null,CA:function(G){if(this.K&&this.K.CA
)return this.K.CA.apply(this,arguments);else return C.AB.CA.apply(this,arguments
);},EX:function(G){if(this.K&&this.K.EX)return this.K.EX.apply(this,arguments);else
return C.AB.EX.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Am._Init.call(this.Aer={I:this},0);A.acg.Text._Init.call(this.Ut={I:
this},0);this.__proto__=C.XN;this.Aer.H(PZ);this.Ut.H(P0);this.Ut.R(A.jV);this.Ut.
L(A.jb.Text);this.Ut.Y(false);this.J(this.Aer,0);this.J(this.Ut,0);this.Aer.Ax(null
);this.Ut.S(A.aaL(A.fl.EF));var Lu=this._variants();if(Lu){this.K={};Lu._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.Aer._Done();this.Ut._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.Aer._ReInit();this.Ut._ReInit();this.Ut.S(A.aaL(A.fl.
EF));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ut)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.
XN._variants();},K:null,_className:"Application::BootScreen"};C.AUj={Az8:function(
G){A._GetAutoObject(C.A1).Ahg(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUj;this.Background.L(0xFF000000);this.Ef.Y(false);},_className:
"Application::SleepScreen"};C.Au8={DV:null,Z:null,XZ:null,X0:null,Vr:null,XQ:null
,Vs:null,XO:null,XT:null,TB:null,XS:null,X1:null,Ay:null,CS:function(){this.DG(this
);},Init:function(aArg){var B;A.zX([this,this.DG],[B=A._GetAutoObject(A.Device.Device
),B.Aq8,B.AsT],0);A._GetAutoObject(A.Device.Helper).Akx();this.Bb(this.Vr);this.
N.Cp(A.aaL(A.ach.AC$));A.pe([this,this.DG],this);},Bb:function(E){var B;var A2p=
this.AW;C.AB.Bb.call(this,E);if((this.AW!==A2p)&&(!!this.AW&&((this.AW.U&0x400)===
0x400))){var AJs=A._NewObject(A.acl.AFI,0);AJs.Fi(250);AJs.HI(1);AJs.Wo(6);this.
Z.HA(this.AW,true,AJs,null);}},CA:function(G){this.A3V(this);A._GetAutoObject(A.
Device.Device).Ao.Bl(null);A._GetAutoObject(A.Device.Device).Bu.Bl(null);A._GetAutoObject(
A.Device.Helper).Akx();A._GetAutoObject(A.Device.Helper).ArY();},Fa:function(G){
var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.
Ay.Mt(-this.Z.Bt[1]);},H$:function(G){var Cv=(C.Ff.isPrototypeOf(G)?G:null);if(!
Cv)return;if(Cv===this.Vr)A._GetAutoObject(C.A1).BU(35);else if(Cv===this.XQ)A._GetAutoObject(
C.A1).BU(34);else if(Cv===this.XT)A._GetAutoObject(C.A1).BU(78);else if(Cv===this.
Vs)A._GetAutoObject(C.A1).BU(8);else if(Cv===this.XO)A._GetAutoObject(C.A1).BU(56
);else if(Cv===this.TB)A._GetAutoObject(C.A1).BU(25);else if(Cv===this.XZ)A._GetAutoObject(
C.A1).BU(88);else if(Cv===this.X0)A._GetAutoObject(C.A1).BU(79);else if(Cv===this.
X1)A._GetAutoObject(C.A1).BU(6);else if(Cv===this.XS)A._GetAutoObject(C.A1).BU(72
);},BzF:function(G){A._GetAutoObject(A.Device.Device).AeI(!A._GetAutoObject(A.Device.
Device).Amy);},DG:function(G){if(A._GetAutoObject(A.Device.Device).Amy)this.N.Hr((
A.aaR(A.acf.A68)+CO)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hr((A.aaR(A.acf.
A68)+CO)+A.aaR(A.acf.A7O).toLowerCase());},Xo:function(G){A._GetAutoObject(A.Device.
Device).Ds(1);},A3V:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).Mm());this.Vs.Zd(A._GetAutoObject(A.Device.Device).Ao.Cd().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DV={
I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Ff._Init.call(this.XZ={I:this
},0);C.Ff._Init.call(this.X0={I:this},0);C.Ff._Init.call(this.Vr={I:this},0);C.Ff.
_Init.call(this.XQ={I:this},0);C.QO._Init.call(this.Vs={I:this},0);C.Ff._Init.call(
this.XO={I:this},0);C.Ff._Init.call(this.XT={I:this},0);C.Ff._Init.call(this.TB={
I:this},0);C.Ff._Init.call(this.XS={I:this},0);C.Ff._Init.call(this.X1={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Au8;this.Background.L(A.
jb.C2);this.N.Ar(false);this.N.Y(true);this.Dn(C.AqB);this.DV.A3(0x3F);this.DV.H(
E7);this.DV.L(A.jb.CI);this.Z.H(Ls);this.Z.Kg(9);this.XZ.H(P1);this.XZ.Aj(true);
this.XZ.T(A.aaR(A.acf.Gh));this.X0.H(Ks);this.X0.Aj(true);this.X0.T(A.aaR(A.acf.
A7t));this.Vr.H(N$);this.Vr.Aj(true);this.Vr.T(A.aaR(A.acf.Tp));this.XQ.H(P2);this.
XQ.Aj(true);this.XQ.T(A.aaR(A.acf.To));this.Vs.H(ME);this.Vs.Aj(true);this.Vs.T(
A.aaR(A.acf.APf));this.XO.H(SY);this.XO.Aj(true);this.XO.T(A.aaR(A.acf.Animal));
this.XT.H(Ks);this.XT.Aj(true);this.XT.T(A.aaR(A.acf.A6$));this.TB.H(UJ);this.TB.
Ar(true);this.TB.Aj(true);this.TB.Y(true);this.TB.T(A.aaR(A.acf.A5W));this.XS.H(
ZM);this.XS.Aj(true);this.XS.T(A.aaR(A.acf.Device));this.X1.H(WN);this.X1.Aj(true
);this.X1.T(A.aaR(A.acf.Settings));this.Ay.H(IJ);this.J(this.DV,0);this.J(this.Z
,0);this.J(this.XZ,0);this.J(this.X0,0);this.J(this.Vr,0);this.J(this.XQ,0);this.
J(this.Vs,0);this.J(this.XO,0);this.J(this.XT,0);this.J(this.TB,0);this.J(this.XS
,0);this.J(this.X1,0);this.J(this.Ay,0);this.N.Cz=[this,this.BzF];this.N.Cj=[this
,this.Xo];this.Z.En=[this,this.Fa];this.XZ.AR=[this,this.H$];this.XZ.DD(A.aaL(A.
ach.ADd));this.X0.AR=[this,this.H$];this.X0.DD(A.aaL(A.ach.ADg));this.Vr.AR=[this
,this.H$];this.Vr.DD(A.aaL(A.ach.APj));this.XQ.AR=[this,this.H$];this.XQ.DD(A.aaL(
A.ach.APt));this.Vs.AR=[this,this.H$];this.Vs.DD(A.aaL(A.ach.APS));this.XO.AR=[this
,this.H$];this.XO.DD(A.aaL(A.ach.APm));this.XT.AR=[this,this.H$];this.XT.DD(A.aaL(
A.ach.APZ));this.TB.AR=[this,this.H$];this.TB.DD(A.aaL(A.ach.APH));this.XS.AR=[this
,this.H$];this.XS.DD(A.aaL(A.ach.APE));this.X1.AR=[this,this.H$];this.X1.DD(A.aaL(
A.ach.AQf));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DV._Done(
);this.Z._Done();this.XZ._Done();this.X0._Done();this.Vr._Done();this.XQ._Done();
this.Vs._Done();this.XO._Done();this.XT._Done();this.TB._Done();this.XS._Done();
this.X1._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DV._ReInit();this.Z._ReInit();this.XZ._ReInit();this.X0.
_ReInit();this.Vr._ReInit();this.XQ._ReInit();this.Vs._ReInit();this.XO._ReInit(
);this.XT._ReInit();this.TB._ReInit();this.XS._ReInit();this.X1._ReInit();this.Ay.
_ReInit();this.XZ.T(A.aaR(A.acf.Gh));this.X0.T(A.aaR(A.acf.A7t));this.Vr.T(A.aaR(
A.acf.Tp));this.XQ.T(A.aaR(A.acf.To));this.Vs.T(A.aaR(A.acf.APf));this.XO.T(A.aaR(
A.acf.Animal));this.XT.T(A.aaR(A.acf.A6$));this.TB.T(A.aaR(A.acf.A5W));this.XS.T(
A.aaR(A.acf.Device));this.X1.T(A.aaR(A.acf.Settings));this.CS();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q4={Number:null,I5:null,II:null,Tu:null,Asi:0,Init:function(aArg){var B;A.zX([
this,this.Ba7],[B=A._GetAutoObject(A.Device.Device),B.AR$,B.AZP],0);A.pe([this,this.
Ba7],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnQ();},CA:function(G){A.
_GetAutoObject(A.Device.Device).Ahs();},EX:function(G){A._GetAutoObject(A.Device.
Device).AnH();},AlI:function(G){var F;this.An();this.Tu.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Ad4.Ar(true);if(!this.Tu.By)(F=this.Tu.Q,F[2].call(F[0],this.Tu.
B3));},Ba7:function(s){this.AlI(s);},AnQ:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.F$);break;case 3:this.Background.
L(A.jb.H2);break;default:this.Background.L(A.jb.CI);}},Ako:function(E){if(this.Asi===
E)return;this.Asi=E;this.I5.Ako(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.I5._Init.call(this.I5={I:this}
,0);A.acg.Am._Init.call(this.II={I:this},0);A.acl.Gc._Init.call(this.Tu={I:this}
,0);this.__proto__=C.Q4;var B;this.Background.L(A.jb.CI);this.N.Y(false);this.Number.
H(UK);this.Number.KP(true);this.Number.L(A.jb.Text);this.I5.H(ZN);this.I5.Ako(0);
this.II.H(WO);this.II.L(A.jb.AW);this.II.Y$(true);this.Tu.Fi(1750);this.Tu.Ue(750
);this.Tu.Akj(0);this.Tu.Ar(true);this.Tu.B3=3;this.J(this.Number,0);this.J(this.
I5,0);this.J(this.II,0);this.Number.S(A.aaL(A.fl.Af));this.II.Ax(A.aaL(A.ach.ADf
));this.Tu.Q=[B=this.II,B.ARY,B.Cx];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.I5._Done();this.II._Done();this.Tu._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
I5._ReInit();this.II._ReInit();this.Tu._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Ff={C8:null,AC1:null,AR:null,Bo:null,Dj:null,Background:
null,Ml:null,OB:null,QU:null,G1:null,A4_:true,LD:false,KA:false,Qk:false,Init:function(
aArg){},Bj:function(aSize){var B;C.G$.Bj.call(this,aSize);this.Ml.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QU.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OB.H(this.QU.M);this.G1.H([].concat(0,this.G1.M.slice(1,4)));this.G1.H(A.abN(
this.G1.M,aSize[0]));this.G1.H(A.abP(this.G1.M,0));this.G1.H([].concat(this.G1.M.
slice(0,3),47));},Ai:function(Ae){var B;C.G$.Ai.call(this,Ae);var G8=((Ae&0x10)===
0x10);var Fn=((Ae&0x20)===0x20);var Gw=this.Bo.By;if(!G8){this.QU.L(A.jb.AmN);this.
G1.L(A.jb.CI);this.OB.Y(true);this.OB.L(A.jb.AQs);this.Ml.Y(false);}else if(Gw){
this.QU.L(A.jb.Bm);this.G1.L(A.jb.Bm);this.OB.Y(false);this.Ml.Y(true);}else if(
Fn){this.QU.L(A.jb.Bm);this.G1.L(A.jb.Bm);this.OB.Y(false);this.Ml.Y(true);}else{
this.QU.L(A.jb.Text);this.G1.L(A.jb.Text);this.OB.Y(true);this.OB.L(A.jb.C2);this.
Ml.Y(false);}this.LD=G8;this.KA=Fn;this.Qk=Gw;},Qj:function(G){this.An();A.pe(this.
AR,this);},AiC:function(G){if(this.Dj.Ab5)return;this.An();if(this.Bo.By){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DH===E)return;
this.DH=E;this.G1.R(E);},DD:function(E){if(this.C8===E)return;this.C8=E;this.QU.
Ax(E);this.OB.Ax(E);},AbO:function(E){if(this.A4_===E)return;this.A4_=E;this.G1.
Y(E);},AbR:function(E){if(this.AC1===E)return;this.AC1=E;this.Ml.Ax(E);this.Ml.H(
A.abK(this.Ml.M,E.FrameSize));},_Init:function(aArg){C.G$._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BL._Init.call(this.Dj={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Am._Init.call(this.Ml={
I:this},0);A.acg.Am._Init.call(this.OB={I:this},0);A.acg.Am._Init.call(this.QU={
I:this},0);C.CG._Init.call(this.G1={I:this},0);this.__proto__=C.Ff;this.H(ZO);this.
Bo.PN(0);this.Bo.Wk(50);this.Dj.Filter=1;this.Background.H(WQ);this.Background.Y(
false);this.Ml.A3(0x14);this.Ml.L(A.jb.AW);this.Ml.Cx(0);this.OB.L(A.jb.C2);this.
OB.Cx(1);this.G1.H(ZP);this.J(this.Background,0);this.J(this.Ml,0);this.J(this.OB
,0);this.J(this.QU,0);this.J(this.G1,0);this.Bo.Mv=[this,this.Qj];this.Dj.BM=[this
,this.AiC];this.Ml.Ax(A.aaL(A.ach.NN));this.OB.Ax(A.aaL(A.ach.Avi));this.QU.Ax(A.
aaL(A.ach.Avi));this.G1.S(A.aaL(A.fl.Af));this.G1.A2(A.aaL(A.fl.Ak));this.G1.Cs(
A.aaL(A.fl.Bk));this.AC1=A.aaL(A.ach.NN);this.Init(aArg);},_Done:function(){this.
__proto__=C.G$;this.Bo._Done();this.Dj._Done();this.Background._Done();this.Ml._Done(
);this.OB._Done();this.QU._Done();this.G1._Done();C.G$._Done.call(this);},_ReInit:
function(){C.G$._ReInit.call(this);this.Bo._ReInit();this.Dj._ReInit();this.Background.
_ReInit();this.Ml._ReInit();this.OB._ReInit();this.QU._ReInit();this.G1._ReInit(
);this.G1.S(A.aaL(A.fl.Af));this.G1.A2(A.aaL(A.fl.Ak));this.G1.Cs(A.aaL(A.fl.Bk)
);},_Mark:function(D){var B;C.G$._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AC1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={AwO:null,Background:null,OW:null,ArQ:0,AkO:10,Ajq:100,AQ:0,AoA:true,Bj:function(
aSize){A.Core.O.Bj.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OW.H([].concat(2,this.OW.M.slice(1,4)));this.OW.H(A.abN(this.OW.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.O.Ai.call(this,Ae);var AfO=this.AkO<this.Ajq;var AI1=(
B=this.M)[3]-B[1];var A2c=10;var At0=AI1;var A3R=0;if(10>AI1)A2c=AI1;if(this.AkO<
this.Ajq)At0=((At0*this.AkO)/this.Ajq)|0;if(At0<A2c)At0=A2c;if(this.AkO<this.Ajq
)A3R=((this.Bki()*(AI1-At0))/(this.Ajq-this.AkO))|0;this.OW.H(A.abP(this.OW.M,A3R
));this.OW.H([].concat(this.OW.M.slice(0,3),A3R+At0));this.OW.Y(AfO);this.Background.
Y(AfO);if(!!this.AwO&&(this.AoA!==AfO))A.pe(this.AwO,this);this.AoA=AfO;},Bki:function(
){var E=this.ArQ;var Hw=this.Ajq-this.AkO;if((Hw>0)&&(E>Hw))E=Hw;if(Hw<=0)E=0;return E;
},Mt:function(E){if(E<0)E=0;if(this.ArQ===E)return;this.ArQ=E;this.An();},Mu:function(
E){if(E<0)E=0;if(this.AkO===E)return;this.AkO=E;this.An();},Ms:function(E){if(E<
0)E=0;if(this.Ajq===E)return;this.Ajq=E;this.An();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OW.L(E);},Bmt:function(E){if(A.aa0(this.AwO,E))return;this.
AwO=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.OW={I:this},0);this.__proto__=
C.Ay;this.H(ZQ);this.Ar(false);this.AQ=A.jb.AW;this.Background.A3(0x0);this.Background.
H(UL);this.Background.L(A.jb.C2);this.OW.A3(0x0);this.OW.H(UL);this.OW.L(A.jb.AW
);this.J(this.Background,0);this.J(this.OW,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.OW._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.OW._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AwO)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ct={Ha:null,Z:null,Ay:null,Am:null,A6B:A.jV,Init:function(aArg){A.pe([this,this.
AAD],this);},Dz:function(G){var B;C.AB.Dz.call(this,G);this.An();if(!!this.AW&&((
this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);this.AAD(this);},AlE:
function(G){if(!!this.N.Cz)A.pe(this.N.Cz,this);},Aps:function(G){if(!!this.N.Cf
)A.pe(this.N.Cf,this);},Az8:function(G){if(!!this.N.Cj)A.pe(this.N.Cj,this);},Fa:
function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[
3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);A.pe([this,this.Bz1],this);},AAD:function(G){
var B;var GN=(C.Cl.isPrototypeOf(B=this.AW)?B:null);this.N.Hr(A.jV);this.N.CY(A.
aaL(A.ach.VK));this.N.Cz=[this,this.Er];if(!!GN&&!!GN.Al4){this.N.FG(A.jV);this.
N.Kp.Do(255);this.N.Aro(GN.Aqs);this.N.Cp(GN.Avf);this.N.Cj=GN.Al4;}else{this.N.
FG(A.jV);this.N.Cp(null);this.N.Cj=null;}if(!!GN&&!!GN.Agc){this.N.B2(GN.Axg);this.
N.HM.Do(GN.AwP);this.N.Anh(GN.AmA);this.N.C5(GN.AqH);this.N.Cf=GN.Agc;}else{this.
N.B2(A.jV);this.N.C5(null);this.N.Cf=null;}},JK:function(E){if(this.A6B===E)return;
this.A6B=E;this.Ha.R(E);},Er:function(G){A._GetAutoObject(C.A1).Fr();},Bz1:function(
G){var B;var ByZ=this.Ay.Background.Fh();var Bdf=(ByZ?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ai3=X;
X=X.Ah;if(((Ai3.U&0x400)===0x400)){if(!!(A.Core.Aj2.isPrototypeOf(Ai3)?Ai3:null)
){var Bdl=(A.Core.Aj2.isPrototypeOf(Ai3)?Ai3:null);Bdl.DI([Bdf,Bdl.Ex[1]]);}else
if(!!(A.Core.Ep.isPrototypeOf(Ai3)?Ai3:null)){var Be$=(A.Core.Ep.isPrototypeOf(Ai3
)?Ai3:null);Be$.H(A.abN(Be$.M,Bdf));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Ha={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);this.
__proto__=C.Ct;this.N.Y(true);this.Ha.H(WR);this.Ha.Ar(false);this.Ha.R(A.aaR(A.
acf.Settings));this.Ha.L(A.jb.Text);this.Z.H(E7);this.Z.Kg(1);this.Ay.H(IJ);this.
Am.H(Rd);this.Am.L(A.jb.Text);this.J(this.Ha,0);this.J(this.Z,0);this.J(this.Ay,
0);this.J(this.Am,0);this.Ha.S(A.aaL(A.fl.Kb));this.Ha.A2(A.aaL(A.fl.Ic));this.Z.
En=[this,this.Fa];this.Am.Ax(A.aaL(A.ach.ACI));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ha._Done();this.Z._Done();this.Ay._Done();this.Am._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ha._ReInit(
);this.Z._ReInit();this.Ay._ReInit();this.Am._ReInit();this.Ha.R(A.aaR(A.acf.Settings
));this.Ha.S(A.aaL(A.fl.Kb));this.Ha.A2(A.aaL(A.fl.Ic));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqB={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bf1],[B=
A._GetAutoObject(A.Device.Helper),B.UP,B.UQ],0);},Dc:function(E){C.BR.Dc.call(this
,E);this.Text.L(E);},Bf1:function(G){this.Text.R(A._GetAutoObject(A.acj.KG).BhR(
A._GetAutoObject(A.Device.Helper).Dw()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqB;this.Timer.Wk(1);this.Timer.Ar(true);
this.Text.H(ZR);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mv=[this,this.Bf1
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KQ:0xFFFFFFFF,LO:0,Dc:function(E){if(
this.KQ===E)return;this.KQ=E;},Wj:function(E){if(this.LO===E)return;this.LO=E;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.BR;this.H(O1
);},_className:"Application::HeaderContent"};C.N={VD:null,VE:null,VF:null,AgK:null
,AgL:null,AgM:null,Cz:null,Cj:null,Cf:null,Background:null,NB:null,I3:null,Kp:null
,HM:null,Pu:null,IW:null,Lc:null,TR:null,TS:null,AnK:A.jV,AnL:A.jV,AnM:A.jV,AqI:
0,AqJ:0,AqK:0,Ag4:0,Zk:false,Zj:false,ArW:false,Ar_:false,Ar9:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VD)this.I3.S(this.VD);if(!!this.VE)this.Kp.S(this.
VE);if(!!this.VF)this.HM.S(this.VF);switch(this.Ag4){case 0:{this.NB.Y(false);this.
I3.L(A.jb.Bm);this.Kp.L(A.jb.Bm);this.HM.L(A.jb.Bm);this.Pu.L(A.jb.Bm);this.IW.L(
A.jb.Bm);this.Lc.L(A.jb.Bm);}break;case 1:{if(!this.AgK)this.NB.H(A.aaT(this.I3.
ARP(),Re));else this.NB.H(this.Pu.Df());this.NB.Y(true);this.I3.L(A.jb.Text);this.
Kp.L(A.jb.Bm);this.HM.L(A.jb.Bm);this.Pu.L(A.jb.Text);this.IW.L(A.jb.Bm);this.Lc.
L(A.jb.Bm);}break;case 3:{if(!this.AgM)this.NB.H(A.aaT(this.HM.ARP(),Re));else this.
NB.H(this.Lc.Df());this.NB.Y(true);this.I3.L(A.jb.Bm);this.Kp.L(A.jb.Bm);this.HM.
L(A.jb.Text);this.Pu.L(A.jb.Bm);this.IW.L(A.jb.Bm);this.Lc.L(A.jb.Text);}break;case
2:{if(!this.AgL)this.NB.H(A.aaT(this.Kp.ARP(),Re));else this.NB.H(this.IW.Df());
this.NB.Y(true);this.I3.L(A.jb.Bm);this.Kp.L(A.jb.Text);this.HM.L(A.jb.Bm);this.
Pu.L(A.jb.Bm);this.IW.L(A.jb.Text);this.Lc.L(A.jb.Bm);}break;default:{this.NB.Y(
false);A.ab5("%s",WS);}}if(!!this.Pu.Al){this.Pu.Y(true);this.I3.Y(false);}else{
this.Pu.Y(false);this.I3.Y(true);}if(this.AnL.length<=0){this.IW.Y(true);this.Kp.
Y(false);}else{this.IW.Y(false);this.Kp.Y(true);}if(!!this.Lc.Al){this.Lc.Y(true
);this.HM.Y(false);}else{this.Lc.Y(false);this.HM.Y(true);}},Hr:function(E){if(this.
AnK===E)return;this.AnK=E;this.I3.R(E);this.An();},FG:function(E){if(this.AnL===
E)return;this.AnL=E;this.Kp.R(E);this.An();},B2:function(E){if(this.AnM===E)return;
this.AnM=E;this.HM.R(E);this.An();},AEP:function(E){if(this.Ag4===E)return;this.
Ag4=E;this.An();},AEG:function(E){if(this.VD===E)return;this.VD=E;this.I3.S(E);this.
An();},Aro:function(E){if(this.VE===E)return;this.VE=E;this.Kp.S(E);this.An();},
Anh:function(E){if(this.VF===E)return;this.VF=E;this.HM.S(E);this.An();},A26:function(
G){this.An();},CY:function(E){if(this.AgK===E)return;this.AgK=E;this.Pu.Ax(E);this.
An();},Cp:function(E){if(this.AgL===E)return;this.AgL=E;this.IW.Ax(E);this.An();
},C5:function(E){if(this.AgM===E)return;this.AgM=E;this.Lc.Ax(E);this.An();},OM:
function(E){if(this.Ar9===E)return;this.Ar9=E;this.TR.Y(E);if(E)this.I3.H([].concat(
this.TR.M[2],this.I3.M.slice(1,4)));else this.I3.H([].concat(0,this.I3.M.slice(1
,4)));this.An();},ON:function(E){if(this.Ar_===E)return;this.Ar_=E;this.TS.Y(E);
if(E)this.HM.H(A.abN(this.HM.M,this.TS.M[0]));else this.HM.H(A.abN(this.HM.M,this.
M[2]));this.An();},BlT:function(E){if(this.AqI===E)return;this.AqI=E;this.Pu.Cx(
E);this.An();},ASz:function(E){if(this.AqJ===E)return;this.AqJ=E;this.IW.Cx(E);this.
An();},A9C:function(E){if(this.AqK===E)return;this.AqK=E;this.Lc.Cx(E);this.An();
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NB={I:this},0);C.CG._Init.call(this.I3={I:this
},0);C.CG._Init.call(this.Kp={I:this},0);C.CG._Init.call(this.HM={I:this},0);A.acg.
Am._Init.call(this.Pu={I:this},0);A.acg.Am._Init.call(this.IW={I:this},0);A.acg.
Am._Init.call(this.Lc={I:this},0);A.acg.Am._Init.call(this.TR={I:this},0);A.acg.
Am._Init.call(this.TS={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
A3(0x3F);this.Background.H(BF);this.Background.L(A.jb.AdS);this.NB.H(WT);this.NB.
L(A.jb.C2);this.NB.Y(false);this.I3.A3(0x14);this.I3.H(WU);this.I3.A7(0x12);this.
Kp.A3(0x14);this.Kp.H(WV);this.Kp.A7(0x12);this.HM.H(ZS);this.Pu.H(WW);this.IW.H(
WX);this.Lc.H(SZ);this.Lc.Y(false);this.TR.H(ZT);this.TR.Y(false);this.TS.H(ZU);
this.TS.Y(false);this.J(this.Background,0);this.J(this.NB,0);this.J(this.I3,0);this.
J(this.Kp,0);this.J(this.HM,0);this.J(this.Pu,0);this.J(this.IW,0);this.J(this.Lc
,0);this.J(this.TR,0);this.J(this.TS,0);this.I3.S(A.aaL(A.fl.Ak));this.I3.A2(A.aaL(
A.fl.Bk));this.I3.QZ([this,this.A26]);this.Kp.S(A.aaL(A.fl.Ak));this.Kp.A2(A.aaL(
A.fl.Bk));this.Kp.QZ([this,this.A26]);this.HM.S(A.aaL(A.fl.Ak));this.HM.A2(A.aaL(
A.fl.Bk));this.HM.QZ([this,this.A26]);this.VD=A.aaL(A.fl.Ak);this.VE=A.aaL(A.fl.
Ak);this.VF=A.aaL(A.fl.Ak);this.Pu.Ax(null);this.IW.Ax(null);this.Lc.Ax(null);this.
TR.Ax(A.aaL(A.ach.AMf));this.TS.Ax(A.aaL(A.ach.Ajf));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Background._Done();this.NB._Done();this.I3._Done(
);this.Kp._Done();this.HM._Done();this.Pu._Done();this.IW._Done();this.Lc._Done(
);this.TR._Done();this.TS._Done();A.Core.O._Done.call(this);},_ReInit:function(){
A.Core.O._ReInit.call(this);this.Background._ReInit();this.NB._ReInit();this.I3.
_ReInit();this.Kp._ReInit();this.HM._ReInit();this.Pu._ReInit();this.IW._ReInit(
);this.Lc._ReInit();this.TR._ReInit();this.TS._ReInit();this.I3.S(A.aaL(A.fl.Ak)
);this.I3.A2(A.aaL(A.fl.Bk));this.Kp.S(A.aaL(A.fl.Ak));this.Kp.A2(A.aaL(A.fl.Bk)
);this.HM.S(A.aaL(A.fl.Ak));this.HM.A2(A.aaL(A.fl.Bk));this.AEG(A.aaL(A.fl.Ak));
this.Aro(A.aaL(A.fl.Ak));this.Anh(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.VD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgL)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AgM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Cz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cj)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NB)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ACM={Init:function(aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.
Helper),B.Aq_,B.Akn],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper)
,B.A8H,B.AFc],0);A.pe([this,this.Ng],this);},D2:function(G){if(!!A._GetAutoObject(
A.Device.Helper).Aho)this.AbQ(A._GetAutoObject(A.Device.Helper).Aho.AOp());else this.
AbQ(-1);if(!!A._GetAutoObject(A.Device.Helper).Ur)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).AnO(A._GetAutoObject(A.Device.Helper).Ur.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmG._Init.call(this,aArg);this.__proto__=C.ACM;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGp={Et:null,Ed:null,
FP:null,XM:null,Tv:null,Iw:null,Ix:null,Init:function(aArg){},Wr:function(G){var
B;C.DP.Wr.call(this,G);var AKg=this.AyU(A._GetAutoObject(A.Device.Helper).Uw.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var AK6=this.AyU(A._GetAutoObject(
A.Device.Helper).Ux.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var ByP=
this.AyU(A._GetAutoObject(A.Device.Device).ZI);this.Et.H(A.abP(this.Et.M,0));this.
Et.H([].concat(this.Et.M.slice(0,3),((B=this.M)[3]-B[1])-AKg));this.Ix.H(A.abO(this.
Ix.M,this.Et.M[3]-((((B=this.Ix.M)[3]-B[1])/2)|0)));this.Ed.H(A.abP(this.Ed.M,this.
Et.M[3]));this.Ed.H([].concat(this.Ed.M.slice(0,3),((B=this.M)[3]-B[1])-AK6));this.
Iw.H(A.abO(this.Iw.M,(this.Ed.M[3]-((((B=this.Iw.M)[3]-B[1])/2)|0))+2));this.FP.
H(A.abP(this.FP.M,this.Ed.M[3]));this.FP.H([].concat(this.FP.M.slice(0,3),((B=this.
M)[3]-B[1])-ByP));this.Tv.H(A.abO(this.Tv.M,this.FP.M[3]-((((B=this.Tv.M)[3]-B[1
])/2)|0)));this.XM.H(A.abP(this.XM.M,this.FP.M[3]));this.XM.H([].concat(this.XM.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJc:function(Aow){return A._GetAutoObject(A.
Device.Converter).AkJ(Aow);},AJM:function(){return A._GetAutoObject(A.acj.Temperature
).Alo();},_Init:function(aArg){C.DP._Init.call(this,aArg);A.acg.AL._Init.call(this.
Et={I:this},0);A.acg.AL._Init.call(this.Ed={I:this},0);A.acg.AL._Init.call(this.
FP={I:this},0);A.acg.AL._Init.call(this.XM={I:this},0);A.acg.AL._Init.call(this.
Tv={I:this},0);A.acg.AL._Init.call(this.Iw={I:this},0);A.acg.AL._Init.call(this.
Ix={I:this},0);this.__proto__=C.AGp;this.Et.A3(0xD);this.Et.H(Acu);this.Et.L(A.jb.
F$);this.Ed.A3(0xD);this.Ed.H(UM);this.Ed.L(A.jb.H2);this.FP.A3(0xD);this.FP.H(ZV
);this.FP.L(A.jb.EV);this.XM.A3(0xD);this.XM.H(Afk);this.XM.L(A.jb.Afd);this.Tv.
A3(0xD);this.Tv.H(ZW);this.Tv.Av3(A.jb.Afd);this.Tv.Av4(A.jb.Afd);this.Tv.Av6(A.
jb.EV);this.Tv.Av5(A.jb.EV);this.Iw.A3(0xD);this.Iw.H(WY);this.Iw.Av3(A.jb.EV);this.
Iw.Av4(A.jb.EV);this.Iw.Av6(A.jb.H2);this.Iw.Av5(A.jb.H2);this.Ix.A3(0xD);this.Ix.
H(ZX);this.Ix.Av3(A.jb.H2);this.Ix.Av4(A.jb.H2);this.Ix.Av6(A.jb.F$);this.Ix.Av5(
A.jb.F$);this.J(this.Et,-1);this.J(this.Ed,-1);this.J(this.FP,-1);this.J(this.XM
,-1);this.J(this.Tv,-1);this.J(this.Iw,-1);this.J(this.Ix,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DP;this.Et._Done();this.Ed._Done();this.FP._Done(
);this.XM._Done();this.Tv._Done();this.Iw._Done();this.Ix._Done();C.DP._Done.call(
this);},_ReInit:function(){C.DP._ReInit.call(this);this.Et._ReInit();this.Ed._ReInit(
);this.FP._ReInit();this.XM._ReInit();this.Tv._ReInit();this.Iw._ReInit();this.Ix.
_ReInit();},_Mark:function(D){var B;C.DP._Mark.call(this,D);if((B=this.Et)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ix)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cl={AuY:null,AmA:null,APO:null,AqH:null,Aqs:null,Avf:null,AR:null,Agc:null,Al4:
null,N:null,Bo:null,QK:null,Axg:A.jV,AUf:false,AGd:false,AoZ:false,AwP:255,LD:false
,KA:false,Qk:false,Ai:function(Ae){var B;C.OT.Ai.call(this,Ae);var G8=((Ae&0x10)===
0x10);var Fn=((Ae&0x20)===0x20);var Ir=((Ae&0x40)===0x40);var Gw=this.Bo.By;var FJ=
A.jb.CI;var GL=A.jb.Text;if(this.Hc){FJ=A.jb.Bm;GL=A.jb.Text;}if(!G8){this.Background.
L(A.jb.C2);this.V.L(A.jb.CI);}else if(Gw){this.Background.L(A.jb.AW);this.V.L(A.
jb.Bm);}else if(Ir){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(Fn){this.
Background.L(A.jb.AmN);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.L(GL
);}this.LD=G8;this.KA=Fn;this.Qk=Gw;this.AoZ=Ir;},Qj:function(G){this.An();A.pe(
this.AR,this);},BvK:function(s){this.Qj(s);},IO:function(G){if(this.QK.Ab5)return;
this.An();if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},AsV:function(s){this.IO(s);},AeB:function(E){if(A.aa0(this.Agc,E))return;this.
Agc=E;},A95:function(E){if(this.Axg===E)return;this.Axg=E;},Wl:function(E){if(this.
AuY===E)return;this.AuY=E;},Wm:function(E){if(this.AmA===E)return;this.AmA=E;},A9M:
function(E){if(this.AwP===E)return;this.AwP=E;},Gi:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DH===E)return;this.DH=E;this.AKO();},A2D:
function(G){},BFq:function(s){this.A2D(s);},Aki:function(E){if(this.AqH===E)return;
this.AqH=E;},LU:function(E){if(A.aa0(this.Al4,E))return;this.Al4=E;},BlM:function(
E){if(this.Aqs===E)return;this.Aqs=E;},LX:function(E){if(this.Avf===E)return;this.
Avf=E;},Ze:function(E){if(this.AGd===E)return;this.AGd=E;this.AKO();},AKO:function(
){var B;var Qq=this.DH;if(this.AGd)Qq=Qq+A.aaR(A.acf.Colon);if(this.AUf)Qq=Qq+ZY;
this.V.R(Qq);},ASX:function(E){if(this.AUf===E)return;this.AUf=E;this.AKO();},_Init:
function(aArg){C.OT._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BL._Init.call(this.QK={I:this},0);this.__proto__=C.Cl;this.Bo.PN(0);
this.Bo.Wk(50);this.Bo.Ar(false);this.QK.Filter=1;this.Bo.Mv=[this,this.BvK];this.
QK.BM=[this,this.AsV];this.AuY=A.aaL(A.fl.Ak);this.AmA=A.aaL(A.fl.Ak);this.APO=A.
aaL(A.ach.EW);this.Aqs=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OT;this.
Bo._Done();this.QK._Done();C.OT._Done.call(this);},_ReInit:function(){C.OT._ReInit.
call(this);this.Bo._ReInit();this.QK._ReInit();this.Wl(A.aaL(A.fl.Ak));this.Wm(A.
aaL(A.fl.Ak));this.BlM(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OT._Mark.call(
this,D);if((B=this.AuY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmA)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.APO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AqH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aqs)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agc)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Al4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dp={Q:null,AmX:null,AmZ:null,Hp:null,HY:null,AM:0,Gg:0,FV:100,Fx:0,Init:function(
aArg){},IO:function(G){this.Fx=1;C.Ec.IO.call(this,G);},Bj:function(aSize){C.Ec.
Bj.call(this,aSize);this.Hp.H([0,aSize[1]-40,40,aSize[1]]);this.HY.H([].concat(A.
abe(aSize,Afl),aSize));},Ai:function(Ae){var B;C.Ec.Ai.call(this,Ae);var Fn=((Ae&
0x20)===0x20);var Gw=this.Bo.By;this.Hp.L(this.V.AQ);this.HY.L(this.V.AQ);this.Hp.
Y((Fn||Gw)&&(this.AM>this.Gg));this.HY.Y((Fn||Gw)&&(this.AM<this.FV));if(this.Fx===
6)this.Hp.L(A.jb.EV);if(this.Fx===7)this.HY.L(A.jb.EV);},Beo:function(G){this.Fx=
6;this.An();if(this.Bo.By){A.pe([this,this.Aym],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qj:function(G){if(this.Fx===6)A.pe([this,this.Aym],this);if(this.Fx===
7)A.pe([this,this.Ayn],this);if(this.Fx===1)A.pe(this.AR,this);this.Fx=0;this.An(
);},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));},AcE:function(
s){this.C3(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcE],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcE],E,0);if(!!E)A.pe([this,
this.AcE],this);},Bep:function(G){this.Fx=7;this.An();if(this.Bo.By){A.pe([this,
this.Ayn],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J2:function(G){this.Fx=0;}
,Ayn:function(s){this.J2(s);},JX:function(G){this.Fx=0;},Aym:function(s){this.JX(
s);},BC:function(E){if(E<this.Gg)E=this.Gg;if(E>this.FV)E=this.FV;if(this.AM===E
)return;this.AM=E;this.An();},Baz:function(Aq){this.BC(Aq);},Gp:function(E){if(this.
Gg===E)return;this.Gg=E;this.An();},E4:function(E){if(this.FV===E)return;this.FV=
E;this.An();},Ua:function(){return this.AM;},_Init:function(aArg){C.Ec._Init.call(
this,aArg);A.Core.BL._Init.call(this.AmX={I:this},0);A.Core.BL._Init.call(this.AmZ={
I:this},0);A.acg.Am._Init.call(this.Hp={I:this},0);A.acg.Am._Init.call(this.HY={
I:this},0);this.__proto__=C.Dp;this.H(JR);this.AmX.Filter=6;this.AmZ.Filter=7;this.
Background.H(JR);this.V.H(Acv);this.V.R(Lt);this.Hp.H(AhF);this.HY.H(AnY);this.HY.
Cx(1);this.J(this.Hp,0);this.J(this.HY,0);this.AmX.BM=[this,this.Beo];this.AmX.DX=[
this,this.Beo];this.AmZ.BM=[this,this.Bep];this.AmZ.DX=[this,this.Bep];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(null);this.Hp.Ax(A.aaL(A.ach.
Amc));this.HY.Ax(A.aaL(A.ach.Amc));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ec;this.AmX._Done();this.AmZ._Done();this.Hp._Done();this.HY._Done();C.Ec._Done.
call(this);},_ReInit:function(){C.Ec._ReInit.call(this);this.AmX._ReInit();this.
AmZ._ReInit();this.Hp._ReInit();this.HY._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ec._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmX)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AmZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.HY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dr:function(){return-1;},C7:function(aIndex){return-1;},Gb:function(
aIndex){return A.jV;},DO:function(A6){return-1;},Hn:function(){return-1;},As:function(
E){this.Q=E;},Ca:function(Aq){this.As(Aq);},ACp:function(aIndex){return null;},ACr:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.I1={Aw_:null
,BT:null,AGD:A.jV,AUS:A.jV,AjP:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dp.Ai.call(this,Ae);if(!this.Aw_){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CO)+this.
AUS);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CO)+this.AGD);}}else(B=
this.Aw_)?B[1].call(B[0],this):null;},J2:function(G){var F;var BQ=this.AM;C.Dp.J2.
call(this,G);this.BC(this.AM+this.AjP);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},JX:function(G){var F;var BQ=this.AM;C.
Dp.JX.call(this,G);this.BC(this.AM-this.AjP);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Kk:function(E){if(this.AGD===E)return;
this.AGD=E;this.An();},KO:function(E){if(this.AUS===E)return;this.AUS=E;this.An(
);},ASA:function(E){if(this.AjP===E)return;this.AjP=E;},A92:function(E){if(A.aa0(
this.Aw_,E))return;this.Aw_=E;},_Init:function(aArg){C.Dp._Init.call(this,aArg);
C.CG._Init.call(this.BT={I:this},0);this.__proto__=C.I1;this.H(JR);this.BT.H(Oa);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dp;this.BT._Done();C.Dp._Done.call(this
);},_ReInit:function(){C.Dp._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dp._Mark.call(this
,D);if((B=this.Aw_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BZ={AC:
null,Dv:null,HG:null,CS:function(){this.Ai(this.U);},Init:function(aArg){},Bj:function(
aSize){var B;C.Dp.Bj.call(this,aSize);this.Dv.H([this.Hp.M[2]-10,this.Hp.M[1],this.
HY.M[0]+10,this.Hp.M[3]]);this.Dv.AEQ((B=this.Dv.M)[2]-B[0]);this.Dv.HA(this.Dv.
Gk,true,null,null);},Ai:function(Ae){var B;C.Dp.Ai.call(this,Ae);var Fn=((Ae&0x20
)===0x20);var Gw=this.Bo.By;this.Dv.Abp(0,this.Dv.AY-1);this.Hp.Y(Fn||Gw);this.HY.
Y(Fn||Gw);},C3:function(G){var F;if(!!this.Q&&!!this.AC)this.BC(this.AC.DO((F=this.
Q,F[1].call(F[0]))));},J2:function(G){var F;var BQ=this.AM;C.Dp.J2.call(this,G);
this.BC(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},JX:function(G){var F;var BQ=this.AM;
C.Dp.JX.call(this,G);this.BC(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},BC:function(E){
var Qp=0;if(E<this.Gg){E=this.FV;Qp=-this.Dv.VX*this.Dv.AY;}if(E>this.FV){E=this.
Gg;Qp=this.Dv.VX;}C.Dp.BC.call(this,E);if(!!Qp)this.Dv.Gj(Qp);this.Dv.GZ(this.AM
);if(this.Dv.BiN())this.Dv.Bof(false,false);this.Dv.HA(this.Dv.Gk,true,this.HG,null
);},Hd:function(G){var B;var FZ=this.Dv.GW;var Cy=(C.CG.isPrototypeOf(B=this.Dv.
Cg)?B:null);if(!Cy)return;Cy.S(this.V.B7);Cy.AwA(19);Cy.A2(this.V.Amz);Cy.BmD(19
);Cy.Cs(this.V.Aqr);Cy.BmE(19);Cy.L(this.V.AQ);if(!!this.AC)Cy.R(this.AC.Gb(FZ));
else Cy.R(WZ);Cy.H(A.abK(Cy.M,[this.Dv.VX,(B=this.Dv.M)[3]-B[1]]));},Bvl:function(
s){this.Hd(s);},CJ:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gp(0);this.E4(this.AC.Dr()-1);this.Dv.Jm(this.AC.Dr());this.Dv.Abp(0,this.Dv.AY-
1);}},_Init:function(aArg){C.Dp._Init.call(this,aArg);A.Core.Dv._Init.call(this.
Dv={I:this},0);A.acl.Gc._Init.call(this.HG={I:this},0);this.__proto__=C.BZ;this.
H(JR);this.Dv.NV(C.CG);this.HG.Wo(23);this.HG.HI(1);this.HG.Fi(200);this.J(this.
Dv,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dv.Hd=[this,this.Bvl
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dp;this.Dv._Done();this.HG.
_Done();C.Dp._Done.call(this);},_ReInit:function(){C.Dp._ReInit.call(this);this.
Dv._ReInit();this.HG._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CS();},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SE={FB:null,OE:null,Dh:null,Av:null,Jk:null,HF:null,Po:null,VB:null,QT:null,
X9:null,PY:null,Go:null,Gn:null,FQ:0,A9:0,ArT:false,BiJ:false,Init:function(aArg
){},Ai:function(Ae){C.Dp.Ai.call(this,Ae);this.Hp.Y(false);this.HY.Y(false);var Ats=
A.jV;if(!!this.Dh){this.Po.R(this.Av.Format(AnZ));this.QT.R(this.Av.Format(AhG));
this.PY.R(this.Av.Format(AhH));}if(this.A9===1){this.HF.Y(true);this.HF.H(this.Po.
M);this.HF.L(this.V.AQ);this.Po.L(this.Background.AQ);this.QT.L(this.V.AQ);this.
PY.L(this.V.AQ);Ats=A.aaR(A.acf.A5s);}else if(this.A9===2){this.HF.Y(true);this.
HF.H(this.QT.M);this.HF.L(this.V.AQ);this.Po.L(this.V.AQ);this.QT.L(this.Background.
AQ);this.PY.L(this.V.AQ);Ats=A.aaR(A.acf.Hb);}else if(this.A9===3){this.HF.Y(true
);this.HF.H(this.PY.M);this.HF.L(this.V.AQ);this.Po.L(this.V.AQ);this.QT.L(this.
V.AQ);this.PY.L(this.Background.AQ);Ats=A.aaR(A.acf.Year);}else{this.HF.Y(false);
this.Po.L(this.V.AQ);this.X9.L(this.V.AQ);this.QT.L(this.V.AQ);this.VB.L(this.V.
AQ);this.PY.L(this.V.AQ);}if(Ats.length>0){if(this.AGd)this.V.R((((this.DH+Acw)+
Ats)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DH+Acw)+
Ats)+String.fromCharCode(0x29));}else this.AKO();},Qj:function(G){if(this.Fx===1
)A.pe([this,this.UY],this);else if(this.Fx===4)A.pe([this,this.Aiq],this);else if(
this.Fx===5)A.pe([this,this.Aib],this);C.Dp.Qj.call(this,G);},J2:function(G){switch(
this.A9){case 0:C.Dp.J2.call(this,G);break;case 3:break;default:this.Ade(this);}
},JX:function(G){switch(this.A9){case 0:C.Dp.JX.call(this,G);break;default:this.
Aia(this);}},Adg:function(G){var F;if(!!this.Dh)this.Uc((F=this.Dh,F[1].call(F[0
])));},AbT:function(E){if(A.aaZ(this.Dh,E))return;if(!!this.Dh)A.z$([this,this.Adg
],this.Dh,0);this.Dh=E;if(!!E)A.zX([this,this.Adg],E,0);if(!!E)A.pe([this,this.Adg
],this);},Uc:function(E){if(this.FQ===E)return;this.FQ=E;this.Av.Initialize(this.
FQ);this.An();},Ade:function(G){this.Fx=1;this.An();if(this.Bo.By){A.pe([this,this.
UY],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ba5:function(s){this.Ade(s);},UY:
function(G){this.Es(this.A9+1);},AlH:function(G){this.Fx=4;this.An();if(this.Bo.
By){A.pe([this,this.Aiq],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AlG:function(
G){this.Fx=5;this.An();if(this.Bo.By){A.pe([this,this.Aib],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},Aiq:function(G){var B;var F;var BQ=this.FQ;switch(this.A9){
case 1:{if(this.ArT){var AAN=A._NewObject(A.Core.AnN,0);AAN.J_=1;if(this.Av.J(AAN
).JI()>A._GetAutoObject(A.Device.Helper).Dw())return;}if(this.Av.GD<this.Av.Y9()
)this.Av.Ln(this.Av.GD+1);}break;case 2:{if(this.ArT){var AAN=A._NewObject(A.Core.
AnN,0);AAN.J_=this.Av.Y9();if(this.Av.J(AAN).JI()>A._GetAutoObject(A.Device.Helper
).Dw())return;}this.Av.Ug(this.Av.Hb+1);if(this.Av.Y9()<this.Av.GD)this.Av.Ln(this.
Av.Y9());}break;case 3:{if(this.ArT){var A03=A._NewObject(A.Core.Bw,0);A03.Initialize(
this.Av.JI());A03.Year+=1;if(A03.JI()>A._GetAutoObject(A.Device.Helper).Dw())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Uc(((B=(this.Av.JI()|0))<0)?B+0x100000000:B);if(this.FQ!==BQ){if(!!this.Dh)(F=this.
Dh,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);}},Aib:function(G){var B;var F;var BQ=
this.FQ;if(this.A9===1)this.Av.Ln(this.Av.GD-1);if(this.A9===2){this.Av.Ug(this.
Av.Hb-1);if(this.Av.Y9()<this.Av.GD)this.Av.Ln(this.Av.Y9());}if(this.A9===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Uc(((B=(this.Av.JI()|
0))<0)?B+0x100000000:B);if(this.FQ!==BQ){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],
this.FQ));A.abo(this.Dh,0);}},DG:function(G){var F;if(!this.N)return;switch(this.
A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[
0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[
0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=
null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aef));(F=this.N,F[1].call(F[0])).
B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.UY];}break;case 2:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N
,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(A.aaL(A.ach.AmJ
));(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=[this,this.
Aia];(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aef));(F=this.N,F[1].call(F[0])).
B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.UY];}break;case 3:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N
,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(A.aaL(A.ach.AmJ
));(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=[this,this.
Aia];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=
this.N,F[1].call(F[0])).Cf=null;}break;default:this.FB.Aky((F=this.N,F[1].call(F[
0])));}},AFa:function(E){if(this.ArT===E)return;this.ArT=E;},FN:function(G){this.
Es(1);},G7:function(G){this.Es(0);},Es:function(EJ){var F;var AzW=this.A9;if(!this.
A9){this.FB.Ajm((F=this.N,F[1].call(F[0])));if((EJ===1)&&!this.FQ){var BQ=this.FQ;
this.Uc(A._GetAutoObject(A.Device.Helper).Dw());if(this.FQ!==BQ){if(!!this.Dh)(F=
this.Dh,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);}}}this.A9=EJ;this.BiJ=true;if((
this.A9<0)||(this.A9>3))this.A9=0;this.DG(this);this.Go.By=!!this.A9;this.Gn.By=
!!this.A9;if((!!AzW&&!this.A9)&&!!this.OE)A.pe(this.OE,this);this.An();},Aia:function(
G){if(this.A9>1)this.Es(this.A9-1);},_Init:function(aArg){C.Dp._Init.call(this,aArg
);A.Core.Bw._Init.call(this.Av={I:this},0);A.Core.BL._Init.call(this.Jk={I:this}
,0);A.acg.AL._Init.call(this.HF={I:this},0);A.acg.Text._Init.call(this.Po={I:this
},0);A.acg.Text._Init.call(this.VB={I:this},0);A.acg.Text._Init.call(this.QT={I:
this},0);A.acg.Text._Init.call(this.X9={I:this},0);A.acg.Text._Init.call(this.PY={
I:this},0);A.Core.BL._Init.call(this.Go={I:this},0);A.Core.BL._Init.call(this.Gn={
I:this},0);this.__proto__=C.SE;this.H(UN);this.V.R(An0);this.Hp.Y(false);this.HY.
Y(false);this.Jk.Filter=1;this.HF.H(An1);this.HF.L(0x55FFFFFF);this.Po.H(An2);this.
Po.IZ(true);this.Po.A7(0x14);this.VB.H(An3);this.VB.IZ(true);this.VB.A7(0x14);this.
VB.R(Afm);this.QT.H(An4);this.QT.IZ(true);this.X9.H(Afn);this.X9.IZ(true);this.X9.
R(Afm);this.PY.H(Asq);this.PY.IZ(true);this.PY.A7(0x11);this.Go.Filter=4;this.Go.
By=false;this.Gn.Filter=5;this.Gn.By=false;this.J(this.HF,0);this.J(this.Po,0);this.
J(this.VB,0);this.J(this.QT,0);this.J(this.X9,0);this.J(this.PY,0);this.Jk.BM=[this
,this.Ba5];this.Po.S(A.aaL(A.fl.EF));this.VB.S(A.aaL(A.fl.EF));this.QT.S(A.aaL(A.
fl.EF));this.X9.S(A.aaL(A.fl.EF));this.PY.S(A.aaL(A.fl.EF));this.Go.BM=[this,this.
AlH];this.Go.DX=[this,this.Aiq];this.Gn.BM=[this,this.AlG];this.Gn.DX=[this,this.
Aib];this.FB=A._NewObject(C.Ad_,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dp;this.Av._Done();this.Jk._Done();this.HF._Done();this.Po._Done();this.VB._Done(
);this.QT._Done();this.X9._Done();this.PY._Done();this.Go._Done();this.Gn._Done(
);C.Dp._Done.call(this);},_ReInit:function(){C.Dp._ReInit.call(this);this.Av._ReInit(
);this.Jk._ReInit();this.HF._ReInit();this.Po._ReInit();this.VB._ReInit();this.QT.
_ReInit();this.X9._ReInit();this.PY._ReInit();this.Go._ReInit();this.Gn._ReInit(
);this.Po.S(A.aaL(A.fl.EF));this.VB.S(A.aaL(A.fl.EF));this.QT.S(A.aaL(A.fl.EF));
this.X9.S(A.aaL(A.fl.EF));this.PY.S(A.aaL(A.fl.EF));},_Mark:function(D){var B;C.
Dp._Mark.call(this,D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dh)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OH={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bdi],[B=A._GetAutoObject(A.Device.Device),B.A8p,B.BaG],0);
A.pe([this,this.Bdi],this);},Dr:function(){return 16;},Gb:function(aIndex){return this.
LanguageToString.BS(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(
A.Device.Device).Ank(E);},Bdi:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OH;this.Cq.Set(0,0);this.Cq.Set(1,1);this.Cq.Set(2,5);this.Cq.
Set(3,3);this.Cq.Set(4,8);this.Cq.Set(5,9);this.Cq.Set(6,7);this.Cq.Set(7,6);this.
Cq.Set(8,10);this.Cq.Set(9,2);this.Cq.Set(10,11);this.Cq.Set(11,12);this.Cq.Set(
12,13);this.Cq.Set(13,14);this.Cq.Set(14,15);this.Cq.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.CQ;this.LanguageToString._Done();C.CQ._Done.
call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Q9={TemperatureUnitToString:
null,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwE(E);}
,Init:function(aArg){var B;A.zX([this,this.BfG],[B=A._GetAutoObject(A.Device.Device
),B.Aq$,B.AsU],0);A.pe([this,this.BfG],this);},BfG:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B$,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Q9;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUy={Ajk:null,Ack:null,Kq:null,AP:null,A$:null,Bj:function(aSize){C.Ba.Bj.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kq.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajk.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Ack.H(this.Ajk.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kq.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hj=Ad;if(!!this.AX){var Alf=this.AX.HB(Ad,6);var ApD=this.AX.CE(Ad,
7);var AtI=this.AX.IU(Ad,9);this.T(A._GetAutoObject(A.acj.KG).ACm(Alf));this.Kq.
R(A._GetAutoObject(A.acj.KG).A6b(Alf));this.Ack.R(A._GetAutoObject(A.Device.Converter
).AkJ(ApD));this.Ack.L(A._GetAutoObject(A.acj.Assessment).Xi(AtI));this.Ajk.L(A.
_GetAutoObject(A.acj.Assessment).Qg(AtI));this.An();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajk={I:this},0);A.acg.Text._Init.
call(this.Ack={I:this},0);A.acg.Text._Init.call(this.Kq={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AUy;this.V.H(Ob);this.Ack.L(A.jb.Text);this.Kq.R(S0);this.Kq.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(Axx);this.A$.L(A.jb.Bc);this.J(this.Ajk,0);this.J(this.Ack
,0);this.J(this.Kq,0);this.J(this.AP,0);this.J(this.A$,0);this.Ack.S(A.aaL(A.fl.
Af));this.Kq.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajk._Done();this.Ack._Done();this.Kq._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajk._ReInit(
);this.Ack._ReInit();this.Kq._ReInit();this.AP._ReInit();this.A$._ReInit();this.
Ack.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.FW={AX:null,AR:null,Co:null,AD:
null,Ae3:null,Qz:null,KI:A.jV,Lh:null,AUU:true,Hd:function(G){var B;var FZ=this.
AD.GW;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cg)?B:null);if(!Aa)return;Aa.Za(this.
AX);Aa.Ce(FZ);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GY]));
},NV:function(E){if(E===this.Lh)return;this.Lh=E;this.AD.NV(E);},Za:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AUU===
false)return;if(!!this.AX){this.AD.Jm(this.AX.Cd());this.AD.Abp(0,this.AD.AY-1);
}else this.AD.Jm(0);if((this.AD.AY>0)&&(this.FE()<0))this.GZ(0);if(this.FE()>=this.
AD.AY){this.GZ(0);this.AD.Gj(0);}if(this.AD.AY<=0){this.Qz.Y(true);this.GZ(-1);}
else{this.Qz.Y(false);this.AA9(null,null);}},Fa:function(G){var B;this.Ae3.Ms(this.
AD.GY*this.AD.AY);this.Ae3.Mu((B=this.AD.M)[3]-B[1]);this.Ae3.Mt(-this.AD.Bt);},
Dz:function(G){if(this.AD.AY>0){switch(this.Co.CN){case 4:if(this.FE()>0)this.GZ(
this.FE()-1);break;case 5:if(this.FE()<(this.AD.AY-1))this.GZ(this.FE()+1);break;
default:this.Co.NC=true;}this.AD.HA(this.FE(),true,null,null);}else if((this.Co.
CN!==4)&&(this.Co.CN!==5))this.Co.NC=true;},Zb:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.Abp(0,this.AD.AY);},GZ:function(E){this.AD.GZ(E);this.AD.HA(E,
true,null,null);},FE:function(){return this.AD.Gk;},Dx:function(E){if(this.KI===
E)return;this.KI=E;this.Qz.R(E);},AA9:function(AcH,EZ){this.AD.AA9(AcH,EZ);},ATa:
function(E){if(this.AUU===E)return;this.AUU=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BL._Init.call(this.Co={I:this
},0);A.Core.CL._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Ae3={I:this},
0);A.acg.Text._Init.call(this.Qz={I:this},0);this.__proto__=C.FW;this.H(S1);this.
Lh=C.Ba;this.Co.Filter=147;this.AD.A3(0x3F);this.AD.H(S1);this.AD.AeN(40);this.Ae3.
A3(0x3A);this.Ae3.H(Asr);this.Qz.A3(0x3F);this.Qz.H(Axy);this.Qz.Hq(10);this.Qz.
KP(true);this.Qz.A7(0xA);this.Qz.L(A.jb.Text);this.J(this.AD,0);this.J(this.Ae3,
0);this.J(this.Qz,0);this.Co.BM=[this,this.Dz];this.Co.DX=[this,this.Dz];this.AD.
En=[this,this.Fa];this.AD.Hd=[this,this.Hd];this.Qz.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.O;this.Co._Done();this.AD._Done();this.Ae3._Done();this.
Qz._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Co._ReInit();this.AD._ReInit();this.Ae3._ReInit();this.Qz._ReInit();this.
Qz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hj:-1,CS:function(){this.Ce(this.Hj);},Ai:function(Ae){var B;C.Cl.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hj%2)===1)this.Background.L(A.
jb.CI);else this.Background.L(A.jb.C2);}},Za:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",Axz);},_Init:function(aArg){C.Cl._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cl._ReInit.call(this);this.CS(
);},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GP={Bh:null,Ft:null
,DL:null,FD:null,VI:null,JA:null,KI:A.jV,ATy:0,ATz:0,ATA:0,Ae4:false,Init:function(
aArg){var B;A.zX([this,this.A2s],[B=A._GetAutoObject(A.Device.Device),B.AD3,B.AIf
],0);A.zX([this,this.A2s],[B=A._GetAutoObject(A.Device.Device),B.A74,B.Bat],0);A.
zV([this,this.AfT],A._GetAutoObject(A.Device.Device).Ao,0);A.zV([this,this.Aco],
A._GetAutoObject(A.Device.Device).Ao,0);A.zX([this,this.Bz6],[B=A._GetAutoObject(
A.Device.Helper),B.UP,B.UQ],0);A.pe([this,this.Aco],this);A.pe([this,this.AZX],this
);A.pe([this,this.Aw5],this);},Wi:function(G){this.Age();if(!A._GetAutoObject(A.
Device.Device).JA){this.A4h(A.aaR(A.acf.Bi0),[this,this.BjB],1);this.A4h(A.aaR(A.
acf.Bn3),[this,this.BjA],0);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(
A.aaR(A.acf.Biz));A._GetAutoObject(C.BN).Fz();}var P;for(P=this.JA.Dr()-1;P>=0;P=
P-1)switch(this.JA.C7(P)){case 0:this.Agd(A.aaR(A.acf.XB),[this,this.ATb],0);break;
case 1:this.Agd(A.aaR(A.acf.Temperature),[this,this.ATd],1);break;case 2:this.Agd(
A.aaR(A.acf.Rating),[this,this.ATc],2);break;case 3:this.Agd(A.aaR(A.acf.Afe),[this
,this.ATe],3);break;default:A.ab5("%s",AxA);}A._GetAutoObject(C.BN).Fz();A._GetAutoObject(
C.BN).Nx(A.aaR(A.acf.A5E));A._GetAutoObject(A.Device.Device).Ds(6);},Bvm:function(
s){this.Wi(s);},Dz:function(G){var D1=(A.Core.BL.isPrototypeOf(G)?G:null);var AfH=
this.JA.DO(A._GetAutoObject(A.Device.Device).JA);if(this.Ae4)return;switch(D1.CN
){case 6:{AfH=AfH-1;if(AfH<0)AfH=this.JA.Dr()-1;A._GetAutoObject(A.Device.Device
).AbN(this.JA.C7(AfH));}break;case 7:{AfH=AfH+1;if(AfH>=this.JA.Dr())AfH=0;A._GetAutoObject(
A.Device.Device).AbN(this.JA.C7(AfH));}break;default:D1.NC=true;}},CA:function(G
){if(this.DL.Azv()){this.DL.AcS();if(this.DL.Azv()===false)this.Bh.ATa(true);return;
}else if(this.Ae4)this.A3l(this);if(!!this.Bh)this.Bh.ATa(true);},EX:function(G){
if(!!this.Bh)this.Bh.ATa(false);},Aw5:function(G){var B;if(!!this.Bh)this.HJ(this.
Bh);this.Bh=A._NewObject(C.AL3,0);this.Bh.H(An5);this.Bh.Za(A._GetAutoObject(A.Device.
Device).Ao);this.Bh.Zb([this,this.AIr]);if(!!this.Ft)this.Bh.A9c([B=this.Ft,B.A8J
,B.A9Y]);this.A3E(this);this.J(this.Bh,0);if(this.Ae4===false)this.Bb(this.Bh);this.
A2s(this);this.Bn1(this);},A8$:function(G){A._GetAutoObject(A.Device.Device).Ds(
0);this.Dn(this.A6o());this.Ef.AR=[this,this.AIr];this.AKT(this);this.Ef.Ar(true
);this.Bb(this.Ef);this.Ae4=true;},BjH:function(G){var B;A._GetAutoObject(A.Device.
Device).Ds(0);if(!this.Bh)return;var Aa=(C.ABy.isPrototypeOf(B=this.Bh.AD.Bil(this.
Bh.AD.Gk))?B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).HH(Aa.Hj);else A._GetAutoObject(
A.Device.Helper).W.He();this.Af1();},AlF:function(G){var F;if(!this.FD)this.A5F(
this);else switch((F=this.FD,F[1].call(F[0]))){case 0:this.A5F(this);break;case 1:
this.Bhh(this);break;case 9:this.A5G(this);break;case 4:this.A5I(this);break;case
6:this.A5L(this);break;case 8:this.ANr(this);break;case 2:this.A5P(this);break;case
3:this.Bhi(this);break;case 7:this.Bhj(this);break;case 5:this.Bhk(this);break;case
10:this.Bhm(this);break;case 11:this.A5H(this);break;case 12:this.A5O(this);break;
case 13:this.A5Q(this);break;case 14:this.A5J(this);break;case 18:this.A5K(this);
break;case 15:this.A5M(this);break;case 16:this.A5R(this);break;case 17:this.A5N(
this);break;default:A.ab5("%s%e",AxB,(F=this.FD,F[1].call(F[0])));}},AIr:function(
s){this.AlF(s);},BkP:function(G){this.Dn(C.Kc);this.Ef.AR=null;this.Ae4=false;this.
Aco(this);this.Bfc();this.N.TR.Do(255);this.N.TS.Do(255);this.Bb(this.Bh);this.Ef.
Ar(false);},Am8:function(G){A._GetAutoObject(C.A1).Fr();},Dx:function(E){if(this.
KI===E)return;this.KI=E;this.A3E(this);},Aba:function(){switch(A._GetAutoObject(
A.Device.Device).JA){case 0:return this.Bgr(A._GetAutoObject(A.Device.Device).Al$
);case 2:return C.AME;case 1:return C.AMF;case 3:return C.AMH;case 8:case 9:case
10:case 4:case 5:case 6:return C.Amg;case 7:return C.ABx;case 12:return C.ABA;case
11:return C.ABw;case 13:return C.ABz;default:throw new Error(Ass);}},Abb:function(
){switch(A._GetAutoObject(A.Device.Device).JA){case 0:return this.Bgs(A._GetAutoObject(
A.Device.Device).Al$);case 2:return C.ACT;case 1:return C.AO_;case 3:return C.APa;
case 4:return C.ACP;case 8:case 9:case 10:case 5:case 6:return C.AmI;case 7:return C.
ACR;case 12:return C.ACS;case 11:return C.ACQ;case 13:return C.ACU;default:throw new
Error(Ass);}},A2s:function(G){this.ASP(A._GetAutoObject(A.Device.Device).JA);this.
ASQ(A._GetAutoObject(A.Device.Device).Al$);if(!!this.Bh){this.Bh.NV(this.Aba());
this.Bn7(this);}},Bn7:function(G){var B;if(!!this.Ft)this.HJ(this.Ft);this.Ft=(C.
Da.isPrototypeOf(B=A._NewObject(this.Abb(),0))?B:null);this.Ft.H(JS);if(!!this.Bh
)this.Bh.A9c([B=this.Ft,B.A8J,B.A9Y]);this.J(this.Ft,0);},BjF:function(G){this.Q3(
this);A._GetAutoObject(A.Device.Device).Ds(0);},ATb:function(G){A._GetAutoObject(
A.Device.Device).AbN(0);},ATd:function(G){A._GetAutoObject(A.Device.Device).AbN(
1);},ATc:function(G){A._GetAutoObject(A.Device.Device).AbN(2);},ATe:function(G){
A._GetAutoObject(A.Device.Device).AbN(3);},Q3:function(G){A._GetAutoObject(A.Device.
Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).Mm());},AZX:function(s){this.Q3(
s);},HK:function(G){if(this.Ae4){this.AKT(this);return;}this.N.CY(A.aaL(A.ach.EW
));this.N.Cp(A.aaL(A.ach.ADb));this.N.C5(A.aaL(A.ach.Options));this.N.Cz=[this,this.
Am8];this.N.Cj=[this,this.A8$];this.N.Cf=[this,this.Bvm];this.N.Hr(A.jV);this.N.
FG(A.jV);this.N.B2(A.jV);if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){this.N.IW.
Do(100);this.N.Cj=null;}else this.N.IW.Do(255);},Ayl:function(s){this.HK(s);},Agd:
function(AcQ,AcR,AIP){A._GetAutoObject(C.BN).Auc(AcQ,AcR,[this,this.A8C,this.ASP
],AIP);},AfT:function(G){this.A3E(this);if(this.Ae4)A.pe([this,this.AKT],this);}
,Af1:function(){A._GetAutoObject(C.A1).BU(9);},A3E:function(G){if(!this.Bh)return;
if(!A._GetAutoObject(A.Device.Device).Ao.QB()||!A._GetAutoObject(A.Device.Device
).Ao.Filter)this.Bh.Dx(A.aaR(A.acf.ADT));else if(A._GetAutoObject(A.Device.Helper
).AqP(A._GetAutoObject(A.Device.Device).Ao.Filter))this.Bh.Dx(this.KI);else if(!
A._GetAutoObject(A.Device.Device).Ao.Filter.DN(1,4)){if(A._GetAutoObject(A.Device.
Helper).ACu(A._GetAutoObject(A.Device.Device).Ao.Filter)===1)this.Bh.Dx(A.aaR(A.
acf.ANC));else this.Bh.Dx(A.aaR(A.acf.ANB));}else this.Bh.Dx(A.aaR(A.acf.ARz));}
,AEg:function(G){var F;if(!!this.FD)(F=this.FD,F[2].call(F[0],0));},Awk:function(
E){if(A.aaZ(this.FD,E))return;if(!!this.FD)A.z$([this,this.AZ6],this.FD,0);this.
FD=E;if(!!E)A.zX([this,this.AZ6],this.FD,0);if(!!E)A.pe([this,this.AZ6],this);},
AEm:function(G){var F;if(!!this.FD)(F=this.FD,F[2].call(F[0],1));},Awq:function(
G){var F;if(!!this.FD)(F=this.FD,F[2].call(F[0],2));},ASU:function(G){var F;if(!
!this.FD)(F=this.FD,F[2].call(F[0],3));},AS8:function(G){var F;if(!!this.FD)(F=this.
FD,F[2].call(F[0],7));},AS9:function(G){var F;if(!!this.FD)(F=this.FD,F[2].call(
F[0],5));},A5P:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(A.Device.
Helper).HH(this.Bh.FE());this.DL.Qe(1);}},IQ:function(AcQ,AcR,AoD){A._GetAutoObject(
C.BN).Auc(AcQ,AcR,[this,this.A8E,this.ASR],AoD);},BkZ:function(G){var F;if(!!this.
FD)(F=this.FD,F[2].call(F[0],4));},A5I:function(G){if(!this.Bh)return;if(this.M8(
)){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.DL.BAw();}},Bk0:function(
G){var F;if(!!this.FD)(F=this.FD,F[2].call(F[0],6));},A5L:function(G){if(!this.Bh
)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.DL.
BAx();}},ANr:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(A.Device.
Helper).HH(this.Bh.FE());this.DL.Qe(1024);}},Bmh:function(G){var F;if(!!this.FD)(
F=this.FD,F[2].call(F[0],8));},Akd:function(G){var F;if(!!this.FD)(F=this.FD,F[2
].call(F[0],9));},Bhi:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HH(this.Bh.FE());this.DL.Qe(2);}},A5F:function(G){if(!this.Bh)return;
if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());if(A._GetAutoObject(
A.Device.Helper).AjR(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).A_(66,true,A.jV,0,null);else this.Af0();}},Bhh:function(G){if(!
this.Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());
this.DL.Qe(16);}},Af0:function(){A._GetAutoObject(C.A1).BU(37);},Bhj:function(G){
if(!this.Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE(
));this.DL.Qe(4);}},Bhk:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HH(this.Bh.FE());this.DL.Qe(8);}},A5G:function(G){var B;if(!this.
Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());if(this.
Ae4){A.zX([this,this.AzY],[B=this.DL,B.And,B.Jn],0);this.A3l(this);}this.DL.AcS(
);}},ALD:function(AcQ,AcR,Bxj){A._GetAutoObject(C.BN).Bgf(AcQ,AcR,Bxj);},AKT:function(
G){this.N.Hr(A.jV);this.N.B2(A.jV);this.N.CY(A.aaL(A.ach.Aee));this.N.Cz=[this,this.
BkP];this.N.TR.Do(100);this.N.TS.Do(100);var F0=A._GetAutoObject(A.Device.Device
).Ao.Cd();if(F0<=0){this.N.Cp(null);this.N.C5(null);this.N.Cj=null;this.N.Cf=null;
this.N.Zj=false;this.N.Zk=false;}else if(F0===1){this.N.Cp(null);this.N.C5(A.aaL(
A.ach.Aef));this.N.Cj=null;this.N.Cf=[this,this.AIr];this.N.Zj=false;this.N.Zk=false;
}else{this.N.Cp(A.aaL(A.ach.AqG));this.N.C5(A.aaL(A.ach.AqN));this.N.Cj=[this,this.
A2Z];this.N.Cf=[this,this.A20];this.N.Zj=true;this.N.Zk=true;}},A2Z:function(G){
if(!this.Bh)return;if(this.Bh.FE()<(A._GetAutoObject(A.Device.Device).Ao.Cd()-1)
)this.Bh.GZ(this.Bh.FE()+1);},A20:function(G){if(!this.Bh)return;if(this.Bh.FE()>
0)this.Bh.GZ(this.Bh.FE()-1);},Bn1:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).Ao.La(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bh.GZ(Bf);A.ab5("%s",AxC);}}},M8:function(){return this.
Bh.FE()>=0;},Aj3:function(){return A._GetAutoObject(A.Device.Device).Ao.Cd()>5;}
,Age:function(){this.Bgg();A._GetAutoObject(C.BN).Qt(A.aaR(A.acf.ATZ),[this,this.
A8$]);A._GetAutoObject(C.BN).Fz();},Aco:function(G){if(this.Ae4)this.AKT(this);else
this.HK(this);},A3l:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Ao.
Filter.Fc();var Ayx=aFilter.DN(1,4);if(!!Ayx){aFilter.N3(Ayx);A._GetAutoObject(A.
Device.Device).Ao.Bl(aFilter);if(!!this.Bh)this.Bh.GZ(0);}},AzY:function(G){var B;
if(!this.DL.Gq&&this.Ae4){A.z$([this,this.AzY],[B=this.DL,B.And,B.Jn],0);this.A3l(
this);}},BmT:function(G){var F;if(!!this.FD)(F=this.FD,F[2].call(F[0],10));},Bhm:
function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(
this.Bh.FE());this.DL.Qe(256);}},A2P:function(G){var F;this.ASR((F=this.FD,F[1].
call(F[0])));A.pe([this,this.Ayl],this);},AZ6:function(s){this.A2P(s);},BkW:function(
G){var F;if(!!this.FD)(F=this.FD,F[2].call(F[0],11));},A5H:function(G){if(!this.
Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.
DL.Qe(4096);}},A5O:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HH(this.Bh.FE());this.DL.Qe(16384);}},A5Q:function(G){if(!this.
Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.
BAh();}},BAh:function(){A._GetAutoObject(C.A1).Ahg(86);},A5J:function(G){if(!this.
Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.
DL.Qe(32768);}},A5M:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HH(this.Bh.FE());this.DL.Qe(65536);}},A5R:function(G){if(!this.
Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.
DL.Qe(131072);}},Bgg:function(){if(!A._GetAutoObject(A.Device.Device).Ao.Filter||
A._GetAutoObject(A.Device.Helper).AqP(A._GetAutoObject(A.Device.Device).Ao.Filter
))A._GetAutoObject(C.BN).XA(A.aaR(A.acf.ABD));else A._GetAutoObject(C.BN).Qt(A.aaR(
A.acf.ABD),[this,this.BjF]);A._GetAutoObject(C.BN).Qt(A.aaR(A.acf.AkB),[this,this.
BjH]);A._GetAutoObject(C.BN).Fz();},Bgs:function(Aoi){switch(Aoi){case 0:return C.
AmI;case 1:return C.AO8;default:throw new Error(Acx+Aoi.toFixed());}},Bgr:function(
Aoi){switch(Aoi){case 0:return C.Amg;case 1:return C.AMC;default:throw new Error(
Acx+Aoi.toFixed());}},BjA:function(G){A._GetAutoObject(A.Device.Device).Ari(0);}
,BjB:function(G){A._GetAutoObject(A.Device.Device).Ari(1);},A4h:function(AcQ,AcR
,Aoi){A._GetAutoObject(C.BN).Auc(AcQ,AcR,[this,this.A8D,this.ASQ],Aoi);},A5N:function(
G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.
FE());this.DL.Qe(128);}},Bz6:function(G){var B;if(!this.Bh)return;A.pe([B=this.Bh
,B.Ce],this);},A5K:function(G){if(!this.Bh)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HH(this.Bh.FE());this.DL.Qe(524288);}},Bhl:function(G){if(!this.
Bh)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HH(this.Bh.FE());this.
DL.Qe(262144);}},ASP:function(E){if(this.ATy===E)return;this.ATy=E;A.abo([this,this.
A8C,this.ASP],0);},ASQ:function(E){if(this.ATz===E)return;this.ATz=E;A.abo([this
,this.A8D,this.ASQ],0);},ASR:function(E){if(this.ATA===E)return;this.ATA=E;A.abo([
this,this.A8E,this.ASR],0);},A6o:function(){return C.Yg;},Bfc:function(){var B;var
Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Ao.Filter){Filter=
A._GetAutoObject(A.Device.Device).Ao.Filter.Fc();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DN(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion
);A._GetAutoObject(A.Device.Device).Ao.Bl(Filter);}},A8C:function(){return this.
ATy;},A8D:function(){return this.ATz;},A8E:function(){return this.ATA;},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.ACT._Init.call(this.VI={I:this},0);C.JA._Init.
call(this.JA={I:this},0);this.__proto__=C.GP;this.Background.H(Cc);this.N.Y(true
);this.N.OM(true);this.N.ON(true);this.Ef.A9x(A.jb.C2);this.Ef.A9y(A.jb.Text);this.
Dn(C.Kc);this.VI.H(JS);this.KI=A.aaR(A.acf.ADT);this.J(this.VI,0);this.DL=A._GetAutoObject(
C.DL);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.VI._Done();this.
JA._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
VI._ReInit();this.JA._ReInit();this.Dx(A.aaR(A.acf.ADT));},_Mark:function(D){var
B;C.AB._Mark.call(this,D);if((B=this.Bh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JA)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ABy={AP:null,A$:null,Uz:null,Aci:
null,Init:function(aArg){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.Uz.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.Uz.M[2]-1,0,this.Uz.M[2]+1,aSize[1]]);this.Aci.H([this.Uz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Uz.L(this.V.AQ);this.Aci.L(this.
V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.Uz.R(this.AX.CE(Ad,2).toFixed());this.Aci.R(this.AX.
CE(Ad,3).toFixed());this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.Uz={I:this},0);A.acg.Text._Init.call(this.Aci={I:this
},0);this.__proto__=C.ABy;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Uz.L(A.jb.Text
);this.Aci.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Uz,0);this.
J(this.Aci,0);this.Uz.S(A.aaL(A.fl.Af));this.Aci.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.Uz.
_Done();this.Aci._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.Uz._ReInit();this.Aci._ReInit(
);this.Uz.S(A.aaL(A.fl.Af));this.Aci.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.AdQ={Oz:null,SF:null,Mg:null,Init:function(aArg){var B;A.zX([this,this.A2v],[
B=A._GetAutoObject(A.Device.Device),B.AvI,B.Ayd],0);A.zX([this,this.Adf],[B=A._GetAutoObject(
A.Device.Device),B.AvF,B.Ayc],0);A.pe([this,this.Adf],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SF.R(A._GetAutoObject(A.Device.Device).AaM.toFixed()+AxD
);this.Oz.Y(A._GetAutoObject(A.Device.Device).Amj);},Adf:function(G){this.An();}
,MU:function(G){A._GetAutoObject(C.A1).Fr();},A2v:function(G){if(A._GetAutoObject(
A.Device.Device).Amj===false){this.Oz.Y(false);A._GetAutoObject(C.A1).Fr();}else
this.Oz.Y(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oz={I:this},0);A.acg.Text._Init.call(this.SF={I:this},0);C.Mg._Init.call(
this.Mg={I:this},0);this.__proto__=C.AdQ;var B;this.Background.L(A.jb.C2);this.N.
Y(true);this.N.B2(A.aaR(A.acf.Ok));this.Oz.H(AGT);this.Oz.R(A.aaR(A.acf.Oz));this.
Oz.L(A.jb.Text);this.Oz.Y(false);this.SF.H(AGU);this.SF.R(AGV);this.SF.L(A.jb.Text
);this.Mg.H(AGW);this.J(this.Oz,0);this.J(this.SF,0);this.J(this.Mg,0);this.N.Cf=[
this,this.MU];this.Oz.S(A.aaL(A.fl.Af));this.SF.S(A.aaL(A.fl.Af));this.Mg.As([B=
A._GetAutoObject(A.Device.Device),B.AvF,B.Ayc]);this.Mg.A9O([B=A._GetAutoObject(
A.Device.Device),B.AvI,B.Ayd]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oz._Done();this.SF._Done();this.Mg._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oz._ReInit();this.SF._ReInit();this.Mg._ReInit(
);this.N.B2(A.aaR(A.acf.Ok));this.Oz.R(A.aaR(A.acf.Oz));this.Oz.S(A.aaL(A.fl.Af)
);this.SF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mg={AdL:null,AdM:null,J5:function(G){var F;if(!!this.Q){this.A1E();var AcV=(
F=this.Q,F[1].call(F[0]));if(AcV>20)this.Ov.L(A.jb.EV);else this.Ov.L(A.jb.F$);this.
Ov.L((this.Ov.AQ&0x00FFFFFF)|(this.Aln(AcV,0,20)<<24));this.Tw.L((this.Tw.AQ&0x00FFFFFF
)|(this.Aln(AcV,21,40)<<24));this.Tx.L((this.Tx.AQ&0x00FFFFFF)|(this.Aln(AcV,41,
60)<<24));this.AdL.L((this.AdL.AQ&0x00FFFFFF)|(this.Aln(AcV,61,80)<<24));this.AdM.
L((this.AdM.AQ&0x00FFFFFF)|(this.Aln(AcV,81,100)<<24));}},A1E:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.UT=this.AdM;else if((F=this.Q,F[
1].call(F[0]))>60)this.UT=this.AdL;else if((F=this.Q,F[1].call(F[0]))>40)this.UT=
this.Tx;else if((F=this.Q,F[1].call(F[0]))>20)this.UT=this.Tw;else this.UT=this.
Ov;}else this.UT=null;},_Init:function(aArg){C.Ox._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AdL={I:this},0);A.acg.AL._Init.call(this.AdM={I:this},0);this.__proto__=
C.Mg;this.H(Ast);this.NJ.H(Ast);this.Ov.H(AVm);this.Tw.H(AVn);this.Tx.H(AVo);this.
AdL.H(AVp);this.AdL.L(A.jb.EV);this.AdM.H(AVq);this.AdM.L(A.jb.EV);this.J(this.AdL
,0);this.J(this.AdM,0);this.NJ.Ax(A.aaL(A.ach.AMm));},_Done:function(){this.__proto__=
C.Ox;this.AdL._Done();this.AdM._Done();C.Ox._Done.call(this);},_ReInit:function(
){C.Ox._ReInit.call(this);this.AdL._ReInit();this.AdM._ReInit();},_Mark:function(
D){var B;C.Ox._Mark.call(this,D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUt={N6:null,Lp:null,AkN:null,ZE:null,ZD:null,CS:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.Apt],[B=A._GetAutoObject(A.Device.Device),B.
ASb,B.AZR],0);A.zX([this,this.Apt],[B=A._GetAutoObject(A.Device.Device),B.ASe,B.
AZT],0);A.zX([this,this.Apt],[B=A._GetAutoObject(A.Device.Device),B.A8T,B.BaQ],0
);A.pe([this,this.Apt],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Gz(this
);this.AAX(this);this.BBp(this);this.DG(this);},BzK:function(G){A._GetAutoObject(
A.Device.Device).Asb();},Apt:function(G){this.An();},Gz:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZE.Y(false);break;case 4:{var A3g;if(!A._GetAutoObject(A.Device.Device).Ae$)A3g=
0;else A3g=((A._GetAutoObject(A.Device.Device).Axj*100)/A._GetAutoObject(A.Device.
Device).Ae$)|0;this.ZE.BC(A3g);this.ZE.Y(true);}break;default:A.ab5("%s%e",Asu,A.
_GetAutoObject(A.Device.Device).SyncState);}},BBp:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CI);this.Lp.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.F$);this.Lp.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",Asu,A._GetAutoObject(A.Device.Device).SyncState);}},DG:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CY(null);this.N.Cz=null;this.N.B2(A.jV);this.N.Cf=null;}break;
case 7:{this.N.CY(null);this.N.Cz=null;this.N.B2(A.aaR(A.acf.Ok));this.N.Cf=[this
,this.BzK];}break;default:A.ab5("%s%e",Asu,A._GetAutoObject(A.Device.Device).SyncState
);}},AAX:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lp.R(A.aaR(A.acf.BoS));break;case 1:this.Lp.R(A.aaR(A.acf.BoP));break;
case 2:this.Lp.R(A.aaR(A.acf.BoM));break;case 3:this.Lp.R(A.aaR(A.acf.BoQ));break;
case 4:this.Lp.R((A.aaR(A.acf.BoO)+AxE)+A._GetAutoObject(A.Device.Helper).Ne(A._GetAutoObject(
A.Device.Helper).Ne(A.aaR(A.acf.Bns),P3,A._GetAutoObject(A.Device.Device).Axj.toFixed(
)),AxF,A._GetAutoObject(A.Device.Device).Ae$.toFixed()));break;case 5:this.Lp.R(
A.aaR(A.acf.BoR));break;case 7:this.Lp.R(A.aaR(A.acf.BoN));break;default:A.ab5("%s%e"
,Asu,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.N6={I:this},0);C.CG._Init.call(this.Lp={I:this
},0);A.acg.Am._Init.call(this.AkN={I:this},0);A.acq.ACW._Init.call(this.ZE={I:this
},0);A.acq.ACX._Init.call(this.ZD={I:this},0);this.__proto__=C.AUt;this.N.Y(true
);this.N6.H(AVr);this.N6.R(A.aaR(A.acf.N6));this.Lp.A3(0x3F);this.Lp.H(AVs);this.
Lp.A7(0x12);this.AkN.H(AVt);this.AkN.L(A.jb.AW);this.ZE.H(AVu);this.ZE.Ar(false);
this.ZE.BC(0);this.ZD.BmN(0);this.ZD.A9$(0);this.ZD.A99(A.jb.AW);this.ZD.A98(0);
this.ZD.AFz(AGX);this.J(this.N6,0);this.J(this.Lp,0);this.J(this.AkN,0);this.J(this.
ZE,0);this.N6.S(A.aaL(A.fl.EF));this.N6.A2(A.aaL(A.fl.Af));this.N6.Cs(A.aaL(A.fl.
Ak));this.Lp.S(A.aaL(A.fl.Af));this.Lp.A2(A.aaL(A.fl.Ak));this.Lp.Cs(A.aaL(A.fl.
Bk));this.AkN.Ax(A.aaL(A.ach.AQi));this.ZE.OnSetAppearance(this.ZD);this.ZD.A9_(
A.aaL(A.ach.NN));this.ZD.A97(A.aaL(A.ach.NN));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lp._Done();this.AkN._Done();this.ZE._Done(
);this.ZD._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lp._ReInit();this.AkN._ReInit();this.ZE._ReInit();this.
ZD._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EF));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Cs(A.aaL(A.fl.Ak));this.Lp.S(A.aaL(A.fl.Af));this.Lp.A2(A.aaL(
A.fl.Ak));this.Lp.Cs(A.aaL(A.fl.Bk));this.CS();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqA={_Init:function(aArg){C.ACM._Init.call(this,aArg
);this.__proto__=C.AqA;this.A9A(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cq:A.abi(3,0,{0:2,2:1}),Dr:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.Cq.Get(aIndex
);},Gb:function(aIndex){return this.GenderToString.BS(this.C7(aIndex));},DO:function(
A6){var P=0;while(P<3){if(this.Cq.Get(P)===A6)return P;P=P+1;}return-1;},Hn:function(
){var P=0;var max=-1;while(P<3){if(this.Cq.Get(P)>max)max=this.Cq.Get(P);P=P+1;}
return max;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal)this.Animal.JJ(
E);},LV:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfM],[B=this.Animal,B.Wg,B.JJ],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfM],[B=this.Animal,B.Wg,B.JJ],0);A.pe([this,this.AfM],this);},AfM:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B$,
this.Ca],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cq=[]).__proto__=C.Gender.Cq;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cq:A.abi(4,0,{1:1,2:2,3:3}),Dr:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.Cq.Get(aIndex);},Gb:function(aIndex){return this.
BirthTypeToString.BS(this.C7(aIndex));},DO:function(A6){var P=0;while(P<4){if(this.
Cq.Get(P)===A6)return P;P=P+1;}return-1;},Hn:function(){var P=0;var max=-1;while(
P<4){if(this.Cq.Get(P)>max)max=this.Cq.Get(P);P=P+1;}return max;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Ake(E);},A0V:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Ca],0);},LV:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A0V],[B=this.Animal,B.ARR,B.Ake],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A0V],[B=this.Animal,B.ARR,B.Ake],0);A.pe([this,this.A0V],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cq=[]).__proto__=C.BirthType.Cq;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acb:null,Dr:
function(){return A._GetAutoObject(A.Device.Helper).AdG.MB;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdG.MB)return-1;return A._GetAutoObject(
A.Device.Helper).AdG.Get(aIndex);},Gb:function(aIndex){return this.Acb.BS(this.C7(
aIndex));},DO:function(A6){var P=0;while(P<A._GetAutoObject(A.Device.Helper).AdG.
MB){if(A._GetAutoObject(A.Device.Helper).AdG.Get(P)===A6)return P;P=P+1;}return-
1;},Hn:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).Uw.
MB){if(A._GetAutoObject(A.Device.Helper).Uw.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).Uw.Get(P);P=P+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.Ew(E);},A0O:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Ca],0);},LV:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0O],[B=this.Animal,B.PL,B.Ew],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0O],[B=this.Animal,B.PL,B.Ew],0);A.pe([
this,this.A0O],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acb={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acb._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acb._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AT$={Init:function(aArg){var B;A.pe([this,this.Afr],this);A.zX([this,this.Afr
],[B=A._GetAutoObject(A.Device.Device),B.Aq$,B.AsU],0);},A3m:function(G){A._GetAutoObject(
A.Device.Device).A_(38,true,A.jV,0,[this,this.Ba6]);},A2X:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).ArZ(this);},A1c:function(G){var F;if(this.A9===1){var BQ=this.D3;
this.D3=this.D3-10;if(this.D3<this.Alv)this.D3=this.Alv;if(this.D3<A._GetAutoObject(
A.Device.Device).ZI)this.D3=A._GetAutoObject(A.Device.Device).ZI;if(this.DU!==BQ
){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.D3));A.abo(this.JM,0);}}if(this.A9===
2){var BQ=this.DU;this.DU=this.DU-10;if(this.DU<this.D3)this.DU=this.D3;if(this.
DU!==BQ){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.DU));A.abo(this.JL,0);}}this.
DG(this);this.An();},A1N:function(G){var F;if(this.A9===1){var BQ=this.D3;this.D3=
this.D3+10;if(this.D3>this.DU)this.D3=this.DU;if(this.D3!==BQ){if(!!this.JM)(F=this.
JM,F[2].call(F[0],this.D3));A.abo(this.JM,0);}}if(this.A9===2){var BQ=this.DU;this.
DU=this.DU+10;if(this.DU>this.Alq)this.DU=this.Alq;if(this.DU!==BQ){if(!!this.JL
)(F=this.JL,F[2].call(F[0],this.DU));A.abo(this.JL,0);}}this.DG(this);this.An();
},Gz:function(G){this.PE.R(AGY+A._GetAutoObject(A.Device.Converter).AkJ(this.D3)
);this.PF.R(AGY+A._GetAutoObject(A.Device.Converter).AkJ(this.DU));this.So.R(A._GetAutoObject(
A.acj.Temperature).Alo());},A1G:function(As1){if(As1===1)return this.PE;else if(
As1===2)return this.PF;else return null;},_Init:function(aArg){C.Ab$._Init.call(
this,aArg);this.__proto__=C.AT$;this.Alq=5000;this.Alv=3000;this.T(A.aaR(A.acf.Aq0
));this.Background.H(Afo);this.V.H(BF);this.V.R(A.aaR(A.acf.AGt));this.V.A7(0x12
);this.Init(aArg);},_ReInit:function(){C.Ab$._ReInit.call(this);this.T(A.aaR(A.acf.
Aq0));this.V.R(A.aaR(A.acf.AGt));},_className:"Application::SettingsItemThresholdsTemp"
};C.Ev={Background:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.Ev;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CI);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,AaP:null,AaT:null,AaR:
null,Background:null,AaO:null,AaS:null,AaQ:null,Ajr:null,Aq6:null,Vw:null,A5:0,Bzq:
function(G){if(this.Ajr.CN===6){if(this.A5===1)this.Anq(2);else if(this.A5===2)this.
Anq(3);else this.Anq(1);}else if(this.Ajr.CN===7){if(this.A5===3)this.Anq(2);else
if(this.A5===2)this.Anq(1);else this.Anq(3);}},Anq:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.AaO.M);break;case 2:this.
Background.H(this.AaS.M);break;case 1:this.Background.H(this.AaQ.M);break;default:
this.Background.H(An6);}},IO:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Hg._Init.
call(this.AaP={I:this},0);A.acg.Hg._Init.call(this.AaT={I:this},0);A.acg.Hg._Init.
call(this.AaR={I:this},0);A.acg.Am._Init.call(this.Background={I:this},0);A.acg.
Ad6._Init.call(this.AaO={I:this},0);A.acg.Ad6._Init.call(this.AaS={I:this},0);A.
acg.Ad6._Init.call(this.AaQ={I:this},0);A.Core.BL._Init.call(this.Ajr={I:this},0
);A.Core.BL._Init.call(this.Aq6={I:this},0);A.Graphics.AMd._Init.call(this.Vw={I:
this},0);this.__proto__=C.Rating;this.H(AVv);this.AaP.H(AGZ);this.AaP.L(A.jb.Text
);this.AaP.Ano(AkT);this.AaP.NY(3);this.AaP.Y(true);this.AaT.H(AG0);this.AaT.L(A.
jb.Text);this.AaT.Ano(AkT);this.AaT.NY(3);this.AaT.Y(true);this.AaR.H(AG1);this.
AaR.L(A.jb.Text);this.AaR.Ano(AkT);this.AaR.NY(3);this.AaR.Y(true);this.Background.
H(An6);this.Background.L(A.jb.AW);this.AaO.H(AGZ);this.AaO.L(A.jb.EV);this.AaO.Ano(
AkT);this.AaO.Y(true);this.AaS.H(AG0);this.AaS.L(A.jb.H2);this.AaS.Ano(AkT);this.
AaS.Y(true);this.AaQ.H(AG1);this.AaQ.L(A.jb.F$);this.AaQ.Ano(AkT);this.AaQ.Y(true
);this.Ajr.Filter=147;this.Aq6.Filter=1;this.Vw.Bln(360);this.Vw.BmB(22);this.Vw.
BmL(2);this.J(this.AaP,0);this.J(this.AaT,0);this.J(this.AaR,0);this.J(this.Background
,0);this.J(this.AaO,0);this.J(this.AaS,0);this.J(this.AaQ,0);this.AaP.Zc(this.Vw
);this.AaT.Zc(this.Vw);this.AaR.Zc(this.Vw);this.Background.Ax(A.aaL(A.ach.NM));
this.AaO.Zc(this.Vw);this.AaS.Zc(this.Vw);this.AaQ.Zc(this.Vw);this.Ajr.BM=[this
,this.Bzq];this.Aq6.BM=[this,this.IO];},_Done:function(){this.__proto__=A.Core.O;
this.AaP._Done();this.AaT._Done();this.AaR._Done();this.Background._Done();this.
AaO._Done();this.AaS._Done();this.AaQ._Done();this.Ajr._Done();this.Aq6._Done();
this.Vw._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AaP._ReInit();this.AaT._ReInit();this.AaR._ReInit();this.Background.
_ReInit();this.AaO._ReInit();this.AaS._ReInit();this.AaQ._ReInit();this.Ajr._ReInit(
);this.Aq6._ReInit();this.Vw._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AaP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AaO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ajr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Ar1={Aj5:null,ArM:null,Background:null,TJ:null,TD:null,AbH:null,AbG:null,AbF:
null,Acf:null,Ace:null,Acd:null,Ab7:null,Ab6:null,AbA:null,Abz:null,AbX:null,AbW:
null,Aqd:null,Init:function(aArg){},Bjf:function(G){this.AbH.R(AG2);this.AbG.R(A.
jV);this.AbF.R(A.jV);this.Acf.R(AVw);this.Ace.R(A.jV);this.Acd.R(A.jV);this.Ab7.
R(A.jV);this.Ab6.R(A.jV);this.AbA.R(A.jV);this.Abz.R(A.jV);this.AbX.R(A.jV);this.
AbW.R(A.jV);},Bna:function(G){this.TD.Y(true);this.TJ.Y(true);var It=this.Ie();if(
!It)return;this.TJ.R(It.GetFPS().toFixed()+AVx);this.TD.R(AVy);this.TD.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Aj5={I:this},0);A.Core.Timer._Init.call(this.ArM={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TJ={I:this},0);A.acg.
Text._Init.call(this.TD={I:this},0);A.acg.Text._Init.call(this.AbH={I:this},0);A.
acg.Text._Init.call(this.AbG={I:this},0);A.acg.Text._Init.call(this.AbF={I:this}
,0);A.acg.Text._Init.call(this.Acf={I:this},0);A.acg.Text._Init.call(this.Ace={I:
this},0);A.acg.Text._Init.call(this.Acd={I:this},0);A.acg.Text._Init.call(this.Ab7={
I:this},0);A.acg.Text._Init.call(this.Ab6={I:this},0);A.acg.Text._Init.call(this.
AbA={I:this},0);A.acg.Text._Init.call(this.Abz={I:this},0);A.acg.Text._Init.call(
this.AbX={I:this},0);A.acg.Text._Init.call(this.AbW={I:this},0);A.acg.AL._Init.call(
this.Aqd={I:this},0);this.__proto__=C.Ar1;this.H(Acy);this.Ar(false);this.Aj5.PN(
2000);this.Aj5.Wk(1);this.Aj5.Ar(true);this.ArM.Ar(true);this.Background.A3(0x3F
);this.Background.H(Acy);this.Background.L(0x78000000);this.TJ.H(AVz);this.TJ.A7(
0x14);this.TJ.R(A.jV);this.TJ.L(0xFFFFFC00);this.TJ.Y(false);this.TD.H(AG3);this.
TD.A7(0x11);this.TD.R(A.jV);this.TD.Y(false);this.AbH.H(Asv);this.AbH.A7(0x11);this.
AbH.R(A.jV);this.AbG.H(AG4);this.AbG.A7(0x11);this.AbG.R(A.jV);this.AbF.H(AG5);this.
AbF.A7(0x14);this.AbF.R(A.jV);this.Acf.H(AxG);this.Acf.A7(0x11);this.Acf.R(A.jV);
this.Ace.H(AG6);this.Ace.A7(0x11);this.Ace.R(A.jV);this.Acd.H(AxH);this.Acd.A7(0x14
);this.Acd.R(A.jV);this.Ab7.H(AVA);this.Ab7.A7(0x11);this.Ab7.R(A.jV);this.Ab6.H(
AVB);this.Ab6.A7(0x14);this.Ab6.R(A.jV);this.AbA.H(AVC);this.AbA.A7(0x11);this.AbA.
R(A.jV);this.Abz.H(AVD);this.Abz.A7(0x14);this.Abz.R(A.jV);this.AbX.H(AG7);this.
AbX.A7(0x11);this.AbX.R(A.jV);this.AbW.H(AVE);this.AbW.A7(0x14);this.AbW.R(A.jV);
this.Aqd.H(O2);this.J(this.Background,0);this.J(this.TJ,0);this.J(this.TD,0);this.
J(this.AbH,0);this.J(this.AbG,0);this.J(this.AbF,0);this.J(this.Acf,0);this.J(this.
Ace,0);this.J(this.Acd,0);this.J(this.Ab7,0);this.J(this.Ab6,0);this.J(this.AbA,
0);this.J(this.Abz,0);this.J(this.AbX,0);this.J(this.AbW,0);this.J(this.Aqd,0);this.
Aj5.Mv=[this,this.Bjf];this.ArM.Mv=[this,this.Bna];this.TJ.S(A.aaL(A.fl.Ak));this.
TD.S(A.aaL(A.fl.Ak));this.AbH.S(A.aaL(A.fl.Ak));this.AbG.S(A.aaL(A.fl.Ak));this.
AbF.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));this.
Acd.S(A.aaL(A.fl.Ak));this.Ab7.S(A.aaL(A.fl.Ak));this.Ab6.S(A.aaL(A.fl.Ak));this.
AbA.S(A.aaL(A.fl.Ak));this.Abz.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.
AbW.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;
this.Aj5._Done();this.ArM._Done();this.Background._Done();this.TJ._Done();this.TD.
_Done();this.AbH._Done();this.AbG._Done();this.AbF._Done();this.Acf._Done();this.
Ace._Done();this.Acd._Done();this.Ab7._Done();this.Ab6._Done();this.AbA._Done();
this.Abz._Done();this.AbX._Done();this.AbW._Done();this.Aqd._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aj5._ReInit();this.
ArM._ReInit();this.Background._ReInit();this.TJ._ReInit();this.TD._ReInit();this.
AbH._ReInit();this.AbG._ReInit();this.AbF._ReInit();this.Acf._ReInit();this.Ace.
_ReInit();this.Acd._ReInit();this.Ab7._ReInit();this.Ab6._ReInit();this.AbA._ReInit(
);this.Abz._ReInit();this.AbX._ReInit();this.AbW._ReInit();this.Aqd._ReInit();this.
TJ.S(A.aaL(A.fl.Ak));this.TD.S(A.aaL(A.fl.Ak));this.AbH.S(A.aaL(A.fl.Ak));this.AbG.
S(A.aaL(A.fl.Ak));this.AbF.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.
S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.Ab7.S(A.aaL(A.fl.Ak));this.Ab6.
S(A.aaL(A.fl.Ak));this.AbA.S(A.aaL(A.fl.Ak));this.Abz.S(A.aaL(A.fl.Ak));this.AbX.
S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArM).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGb={FB:null,Dh:null,Av:null,Jk:null,HF:null,T_:null,Bc:null,Sd:null,Go:null
,Gn:null,FQ:0,A9:0,BiO:false,Init:function(aArg){},Ai:function(Ae){C.Dp.Ai.call(
this,Ae);this.Hp.Y(false);this.HY.Y(false);if(!!this.Dh){this.Sd.R(this.Av.Format(
AxI));this.T_.R(this.Av.Format(AVF));}if(this.A9===1){this.HF.Y(true);this.HF.H(
this.Sd.M);this.HF.L(A.jb.Bm);this.Sd.L(this.Background.AQ);this.T_.L(A.jb.Bm);}
else if(this.A9===2){this.HF.Y(true);this.HF.H(this.T_.M);this.HF.L(A.jb.Bm);this.
Sd.L(A.jb.Bm);this.T_.L(this.Background.AQ);}else{this.HF.Y(false);this.Sd.L(this.
V.AQ);this.Bc.L(this.V.AQ);this.T_.L(this.V.AQ);}},Qj:function(G){if(this.Fx===1
)A.pe([this,this.UY],this);else if(this.Fx===4)A.pe([this,this.Aiq],this);else if(
this.Fx===5)A.pe([this,this.Aib],this);C.Dp.Qj.call(this,G);},J2:function(G){switch(
this.A9){case 0:C.Dp.J2.call(this,G);break;case 2:break;default:this.Ade(this);}
},JX:function(G){switch(this.A9){case 0:C.Dp.JX.call(this,G);break;default:this.
Aia(this);}},Adg:function(G){var F;if(!!this.Dh)this.Uc((F=this.Dh,F[1].call(F[0
])));},AbT:function(E){if(A.aaZ(this.Dh,E))return;if(!!this.Dh)A.z$([this,this.Adg
],this.Dh,0);this.Dh=E;if(!!E)A.zX([this,this.Adg],E,0);if(!!E)A.pe([this,this.Adg
],this);},Uc:function(E){if(this.FQ===E)return;this.FQ=E;this.Av.Initialize(this.
FQ);this.An();},Ade:function(G){this.Fx=1;this.An();if(this.Bo.By){A.pe([this,this.
UY],this);this.Bo.Ar(false);}this.Bo.Ar(true);},UY:function(G){this.Es(this.A9+1
);},AlH:function(G){this.Fx=4;this.An();if(this.Bo.By){A.pe([this,this.Aiq],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},AlG:function(G){this.Fx=5;this.An();if(this.
Bo.By){A.pe([this,this.Aib],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Aiq:function(
G){var B;var F;var BQ=this.FQ;if(this.A9===1)this.Av.Anj(this.Av.AjH+1);if(this.
A9===2)this.Av.Anm(this.Av.Avy+1);this.Av.Anp(0);this.Uc(((B=(this.Av.JI()|0))<0
)?B+0x100000000:B);if(this.FQ!==BQ){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.
FQ));A.abo(this.Dh,0);}},Aib:function(G){var B;var F;var BQ=this.FQ;if(this.A9===
1)this.Av.Anj(this.Av.AjH-1);if(this.A9===2)this.Av.Anm(this.Av.Avy-1);this.Av.Anp(
0);this.Uc(((B=(this.Av.JI()|0))<0)?B+0x100000000:B);if(this.FQ!==BQ){if(!!this.
Dh)(F=this.Dh,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);}},DG:function(G){var F;
if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.
ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this
,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV
);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aef
));(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
UY];}break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].
call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].
call(F[0])).Cp(A.aaL(A.ach.AmJ));(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[
1].call(F[0])).Cj=[this,this.Aia];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,
F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}break;default:this.
FB.Aky((F=this.N,F[1].call(F[0])));}},FN:function(G){this.Es(1);},G7:function(G){
this.Es(0);},Es:function(EJ){var F;if(!this.A9)this.FB.Ajm((F=this.N,F[1].call(F[
0])));this.A9=EJ;this.BiO=true;if((this.A9<0)||(this.A9>2))this.A9=0;this.DG(this
);this.Go.By=!!this.A9;this.Gn.By=!!this.A9;this.An();},Aia:function(G){if(this.
A9>1)this.Es(this.A9-1);},_Init:function(aArg){C.Dp._Init.call(this,aArg);A.Core.
Bw._Init.call(this.Av={I:this},0);A.Core.BL._Init.call(this.Jk={I:this},0);A.acg.
AL._Init.call(this.HF={I:this},0);A.acg.Text._Init.call(this.T_={I:this},0);A.acg.
Text._Init.call(this.Bc={I:this},0);A.acg.Text._Init.call(this.Sd={I:this},0);A.
Core.BL._Init.call(this.Go={I:this},0);A.Core.BL._Init.call(this.Gn={I:this},0);
this.__proto__=C.AGb;this.H(UN);this.V.R(AVG);this.V.L(A.jb.Bm);this.Hp.Y(false);
this.HY.Y(false);this.Jk.Filter=1;this.HF.H(AVH);this.HF.L(0x55FFFFFF);this.T_.H(
AVI);this.T_.IZ(true);this.Bc.H(AVJ);this.Bc.A7(0x14);this.Bc.R(AVK);this.Sd.H(AVL
);this.Sd.IZ(true);this.Sd.A7(0x14);this.Go.Filter=4;this.Go.By=false;this.Gn.Filter=
5;this.Gn.By=false;this.J(this.HF,0);this.J(this.T_,0);this.J(this.Bc,0);this.J(
this.Sd,0);this.Jk.BM=[this,this.Ade];this.T_.S(A.aaL(A.fl.EF));this.Bc.S(A.aaL(
A.fl.EF));this.Sd.S(A.aaL(A.fl.EF));this.Go.BM=[this,this.AlH];this.Go.DX=[this,
this.Aiq];this.Gn.BM=[this,this.AlG];this.Gn.DX=[this,this.Aib];this.FB=A._NewObject(
C.Ad_,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dp;this.Av._Done();
this.Jk._Done();this.HF._Done();this.T_._Done();this.Bc._Done();this.Sd._Done();
this.Go._Done();this.Gn._Done();C.Dp._Done.call(this);},_ReInit:function(){C.Dp.
_ReInit.call(this);this.Av._ReInit();this.Jk._ReInit();this.HF._ReInit();this.T_.
_ReInit();this.Bc._ReInit();this.Sd._ReInit();this.Go._ReInit();this.Gn._ReInit(
);this.T_.S(A.aaL(A.fl.EF));this.Bc.S(A.aaL(A.fl.EF));this.Sd.S(A.aaL(A.fl.EF));
},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.FB)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gn
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CG={B7:null,Amz:null,Aqr:null,En:null,Text:null,String:A.jV,Bc3:A.jV,J8:0x12,AKC:
0,AQ:0xFFFFFFFF,N4:0,ATT:0,A_E:0,Bc4:true,GT:function(CM){var LE=(A.Core.AQT.isPrototypeOf(
CM)?CM:null);if(!!LE)this.BBA(this);return A.Core.O.GT.call(this,CM);},Bj:function(
aSize){A.Core.O.Bj.call(this,aSize);A.pe([this,this.Ai_],this);},Df:function(aFilter
){return A.abh(this.Text.Df(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.Bc4){this.Bc3=E;this.Bc4=false;}this.AKC=E.length;
A.pe([this,this.Ai_],this);},S:function(E){if(this.B7===E)return;this.B7=E;A.pe([
this,this.Ai_],this);},A2:function(E){if(this.Amz===E)return;this.Amz=E;A.pe([this
,this.Ai_],this);},Cs:function(E){if(this.Aqr===E)return;this.Aqr=E;A.pe([this,this.
Ai_],this);},A7:function(E){if(E===this.J8)return;this.J8=E;this.Text.A7(E);},Ai_:
function(G){var B;var AKI=0;if(!this.AKC){this.Text.Y(false);return;}this.Text.Y(
true);this.Text.R(this.String);this.Text.KP(false);if(!!this.B7){AKI=this.B7.Ye(
this.String,0,this.AKC);if(AKI<(((B=this.M)[2]-B[0])-(2*this.Text.I0))){this.Text.
S(this.B7);this.Text.AwA(this.N4);return;}}this.Text.KP(true);if(!!this.Amz){AKI=
this.Amz.Ye(this.String,0,this.AKC);this.Text.S(this.Amz);this.Text.AwA(this.ATT
);if((AKI<(((B=this.M)[2]-B[0])-(2*this.Text.I0)))&&(((B=this.Text.Df())[3]-B[1]
)<=((B=this.M)[3]-B[1])))return;}if(!!this.Aqr){this.Text.S(this.Aqr);if(((B=this.
Text.Df())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.AwA((((this.Text.B7.Ascent+this.
Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;this.AQ=E;this.
Text.L(E);},BBA:function(G){this.R(this.Bc3);},QZ:function(E){if(A.aa0(this.En,E
))return;this.En=E;this.Text.QZ(E);},ARP:function(){return A.abh(this.Text.Df(),
this.M.slice(0,2));},AeY:function(Aor){return A.abf(this.M.slice(0,2),this.Text.
AeY(Aor));},AwA:function(E){if(this.N4===E)return;this.N4=E;A.pe([this,this.Ai_]
,this);},BmD:function(E){if(this.ATT===E)return;this.ATT=E;A.pe([this,this.Ai_],
this);},BmE:function(E){if(this.A_E===E)return;this.A_E=E;A.pe([this,this.Ai_],this
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.CG;this.H(AxJ);this.Ar(false);this.Text.A3(0x3F
);this.Text.H(AxJ);this.Text.R(S0);this.J(this.Text,0);},_Done:function(){this.__proto__=
A.Core.O;this.Text._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Text._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amz)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aqr)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.En)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Text)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"};C.AjF={Z:null,
IC:null,Aep:null,IV:null,M6:null,Aej:null,Aeo:null,Aen:null,Aek:null,Aem:null,Ael:
null,M7:null,NO:null,Mn:null,Dc:function(E){C.Yf.Dc.call(this,E);this.IC.L(E);this.
Aep.L(E);this.IV.L(E);this.M6.L(E);this.Mn.L(E);this.Aej.L(E);this.M7.L(E);this.
NO.L(E);this.Aeo.L(E);this.Aen.L(E);this.Aek.L(E);this.Aem.L(E);this.Ael.L(E);},
D2:function(G){C.Yf.D2.call(this,G);this.Xx(8,1,this.M6);this.Xx(12,1,this.Mn);this.
Xx(11,1,this.Aej);this.Xx(7,1,this.M7);this.Xx(14,1,this.NO);this.Xx(1,4,this.IC
);this.Xx(1,1,this.Aep);this.Xx(4,1,this.IV);this.Xx(22,1,this.Aeo);this.Xx(26,1
,this.Aen);this.Xx(30,1,this.Aek);this.Xx(19,1,this.Aem);this.Xx(31,1,this.Ael);
this.Text.Y(!this.Z.TH(null,0x1));},Xx:function(AIQ,D9,AfD){var AAF=false;if(!!A.
_GetAutoObject(A.Device.Device).Ao.Filter){var Ac4=A._GetAutoObject(A.Device.Device
).Ao.Filter.DN(AIQ,D9);if(!!Ac4){AAF=true;switch(AIQ){case 14:{var AyW=(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(Ac4)?Ac4:null);if(!!AyW)AfD.Ax(A._GetAutoObject(
A.Device.Converter).A4v(AyW.A5));}break;case 7:{var AyW=(A.Device.GenderFilterCriterion.
isPrototypeOf(Ac4)?Ac4:null);if(!!AyW)AfD.Ax(A._GetAutoObject(A.Device.Converter
).AmB(AyW.A5));}break;case 1:if(D9===4)AfD.Ax(A.aaL(A.ach.ADb));else if(Ac4.Operator===
4)AAF=false;break;case 22:switch(Ac4.Operator){case 0:case 3:AfD.Ax(A.aaL(A.ach.
AP7));break;default:AfD.Ax(A.aaL(A.ach.AmM));}break;case 26:switch(Ac4.Operator){
case 0:case 3:AfD.Ax(A.aaL(A.ach.AP5));break;default:AfD.Ax(A.aaL(A.ach.Au_));}break;
default:;}}else if((AIQ===1)&&(D9===4)){AAF=true;AfD.Ax(A.aaL(A.ach.Aeg));}}else
if((AIQ===1)&&(D9===4)){AAF=true;AfD.Ax(A.aaL(A.ach.Aeg));}AfD.Y(AAF);},_Init:function(
aArg){C.Yf._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Am.
_Init.call(this.IC={I:this},0);A.acg.Am._Init.call(this.Aep={I:this},0);A.acg.Am.
_Init.call(this.IV={I:this},0);A.acg.Am._Init.call(this.M6={I:this},0);A.acg.Am.
_Init.call(this.Aej={I:this},0);A.acg.Am._Init.call(this.Aeo={I:this},0);A.acg.Am.
_Init.call(this.Aen={I:this},0);A.acg.Am._Init.call(this.Aek={I:this},0);A.acg.Am.
_Init.call(this.Aem={I:this},0);A.acg.Am._Init.call(this.Ael={I:this},0);A.acg.Am.
_Init.call(this.M7={I:this},0);A.acg.Am._Init.call(this.NO={I:this},0);A.acg.Am.
_Init.call(this.Mn={I:this},0);this.__proto__=C.AjF;this.Z.A3(0x3F);this.Z.H(Asw
);this.Z.Kg(3);this.IC.H(Asx);this.Aep.H(AVM);this.Aep.Aj(true);this.IV.H(AVN);this.
IV.Aj(true);this.M6.H(AVO);this.M6.Aj(true);this.Aej.H(AVP);this.Aej.Aj(true);this.
Aeo.H(AG8);this.Aeo.Aj(true);this.Aen.H(AG8);this.Aen.Aj(true);this.Aek.H(AVQ);this.
Aek.Aj(true);this.Aem.H(AG9);this.Aem.Aj(true);this.Ael.H(AG9);this.Ael.Aj(true);
this.M7.H(AG_);this.M7.Aj(true);this.NO.H(AG$);this.NO.Aj(true);this.Text.R(A.aaR(
A.acf.None));this.Mn.H(AG_);this.Mn.Aj(true);this.JO(this.JE,-3);this.JO(this.CT
,-3);this.JO(this.A$,-3);this.JO(this.AP,-2);this.J(this.Z,-2);this.J(this.IC,-2
);this.J(this.Aep,-2);this.J(this.IV,-2);this.J(this.M6,-2);this.J(this.Aej,-2);
this.J(this.Aeo,-2);this.J(this.Aen,-2);this.J(this.Aek,-2);this.J(this.Aem,-2);
this.J(this.Ael,-2);this.J(this.M7,-2);this.J(this.NO,-2);this.J(this.Mn,0);this.
IC.Ax(A.aaL(A.ach.Aeg));this.Aep.Ax(A.aaL(A.ach.APW));this.IV.Ax(A.aaL(A.ach.APl
));this.M6.Ax(A.aaL(A.ach.AC7));this.Aej.Ax(A.aaL(A.ach.Abl));this.Aeo.Ax(A.aaL(
A.ach.AmM));this.Aen.Ax(A.aaL(A.ach.Au_));this.Aek.Ax(A.aaL(A.ach.APU));this.Aem.
Ax(A.aaL(A.ach.APV));this.Ael.Ax(A.aaL(A.ach.APT));this.M7.Ax(A.aaL(A.ach.AC9));
this.NO.Ax(A.aaL(A.ach.Avc));this.Mn.Ax(A.aaL(A.ach.ADe));},_Done:function(){this.
__proto__=C.Yf;this.Z._Done();this.IC._Done();this.Aep._Done();this.IV._Done();this.
M6._Done();this.Aej._Done();this.Aeo._Done();this.Aen._Done();this.Aek._Done();this.
Aem._Done();this.Ael._Done();this.M7._Done();this.NO._Done();this.Mn._Done();C.Yf.
_Done.call(this);},_ReInit:function(){C.Yf._ReInit.call(this);this.Z._ReInit();this.
IC._ReInit();this.Aep._ReInit();this.IV._ReInit();this.M6._ReInit();this.Aej._ReInit(
);this.Aeo._ReInit();this.Aen._ReInit();this.Aek._ReInit();this.Aem._ReInit();this.
Ael._ReInit();this.M7._ReInit();this.NO._ReInit();this.Mn._ReInit();this.Text.R(
A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yf._Mark.call(this,D);if((B=this.
Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aeo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aen)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aem)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ael)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"
};C.Al9={H1:null,CA:function(G){if(A._GetAutoObject(A.Device.Device).Bu.Lf())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bu.HC().toFixed(),
0,null);this.H1.Gh();this.H1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);C.Q8.CA.call(this,G);},AnQ:function(){C.Q8.AnQ.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.
Temperature).ByD(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ko));this.C8.L(A._GetAutoObject(A.acj.Temperature).ByG(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ko));this.JD.L(A.
_GetAutoObject(A.acj.Temperature).ByE(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Ko));this.Hy.L(A._GetAutoObject(A.acj.Temperature
).ByF(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Ko));this.MC.L(this.JD.AQ);this.TemperatureUnit.L(this.JD.AQ);}break;default:;
}},Aco:function(){C.Q8.Aco.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:{this.N.Cp(A.aaL(A.ach.AQd));this.N.C5(A.aaL(A.ach.AmL));}break;case 4:{
this.N.Cp(null);this.N.C5(A.aaL(A.ach.Avk));}break;default:;}},Wx:function(G){switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(
A.Device.Device).Ko>3240)&&(A._GetAutoObject(A.Device.Device).Ko<5460)){A._GetAutoObject(
A.Device.Device).Ahv();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}
break;case 3:{this.H1.OnSetTemperature(A._GetAutoObject(A.Device.Device).Ko);var
B1=A._GetAutoObject(A.Device.Converter).Asd(A._GetAutoObject(A.Device.Helper).W.
AnimalType,A._GetAutoObject(A.Device.Device).Ko);this.H1.OnSetRatingTemperature(
B1);this.H1.Cn(A._GetAutoObject(A.Device.Device).Bu);A._GetAutoObject(C.A1).Fr();
}break;case 4:this.AJ8(this);break;default:;}},AkE:function(G){C.Q8.AkE.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Ds(9);break;case 4:this.AJ8(this);break;default:;}},Axo:function(
){C.Q8.Axo.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JD.R(A._GetAutoObject(A.acj.Temperature).ByL(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ko));break;default:;}},Axp:function(
){C.Q8.Axp.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).Wn(A._GetAutoObject(A.acj.Temperature).ByH(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ko));this.I4.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wn(16711680
);this.I4.Ar(true);}break;default:this.I4.Ar(false);}},AT5:function(){this.C8.Ax(
A.aaL(A.ach.Avj));this.C8.Cx(A._GetAutoObject(A.acj.Temperature).ByM(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ko));this.NM.Cx(
0);},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.Al9;this.Dn(
C.IA);this.H1=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Q8._Mark.
call(this,D);if((B=this.H1)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahk={N2:null,DH:null,Ib:null,Bc:null,At7:null,String:A.jV,Axd:A.jV,Mr:7,AjX:
2,KQ:0,AUg:false,Init:function(aArg){},Bj:function(aSize){A.Core.O.Bj.call(this,
aSize);this.DH.H([0,0,aSize[0]-this.AjX,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DH.
S(A.aaL(A.fl.Bk));else this.DH.S(A.aaL(A.fl.Ak));this.Ib.S(this.DH.B7);this.Ib.H(
this.DH.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.Wr],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DH.R(E);},Ahe:function(
E){if(this.Axd===E)return;this.Axd=E;this.Ib.R(E);},AbS:function(E){this.Mr=E;if(
E<10)this.ASB(2);else if(E<40)this.ASB(1);else this.ASB(0);A.pe([this,this.Wr],this
);},Wr:function(G){var B;while(!!this.Bc.Ah)this.HJ(this.Bc.Ah);if(this.Mr>1){var
AcZ=this.AOj();var A1A=this.AOh();var Ao8=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AzA;var AKv;var AtF;var AlO=null;if(!!this.N2&&(this.N2.AY>0))AlO=this.N2.KX;
while((AcZ>=A1A)&&(AcZ>0)){var Atg=A._NewObject(C.Ajg,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.AjX)*(((AcZ-A1A)/86400)|0))/this.Mr)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.AjX)*((((AcZ-A1A)/86400)|0)+1))/this.Mr)|0;while(!!AlO&&(AlO.Timestamp>=
AcZ)){if(AlO.Timestamp<(AcZ+86400))Atg.Ot(AlO.A5,AlO.Timestamp);AlO=AlO.Ah;}var AtR=
0;if(Atg.AY>0)AtR=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/Atg.AY
)|0;else if(this.Mr<10){AtR=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
AtF=A._NewObject(A.acg.Text,0);AtF.H([x1,Ao8,x2,Ao8+AtR]);AtF.S(A.aaL(A.fl.Bk));
AtF.L(A.jb.Text);AtF.R(A.aaR(A.acf.AeU));this.J(AtF,0);}var AJj=Atg.KX;var P=0;while(
!!AJj){if(P>=Atg.AY)throw new Error(AVR);AzA=A._NewObject(A.acg.AL,0);AzA.L(A._GetAutoObject(
A.acj.Assessment).Qg(AJj.A5));if(P===(Atg.AY-1))AzA.H([x1,Ao8+(P*AtR),x2,this.Bc.
M[1]]);else AzA.H([x1,Ao8+(P*AtR),x2,Ao8+((P+1)*AtR)]);this.J(AzA,0);AJj=AJj.Ah;
P=P+1;}if(this.AUg){var Bxq=A._GetAutoObject(A.Device.Helper).Ap5(A._GetAutoObject(
A.Device.Helper).Dw());var Bxp=A._GetAutoObject(A.Device.Helper).Ap5(AcZ);if(Bxq===
Bxp){var AKZ=A._NewObject(A.acg.Ad6,0);AKZ.L(A.jb.Text);var Bdp=(x1+this.AjX)+(((
x2-x1)/2)|0);AKZ.H([Bdp-4,this.Bc.M[1]-4,Bdp+4,this.Bc.M[1]]);AKZ.Zc(this.At7);this.
J(AKZ,0);}}AcZ=AcZ-86400;if(this.AjX>0){AKv=A._NewObject(A.acg.AL,0);AKv.H([x1,Ao8
,x1+this.AjX,Ao8+((((B=this.M)[3]-B[1])/2)|0)]);AKv.L(A.jb.Bc);this.J(AKv,0);}}}
},AbU:function(E){this.N2=E;A.pe([this,this.Wr],this);},ASB:function(E){if(this.
AjX===E)return;this.AjX=E;A.pe([this,this.Wr],this);},Dc:function(E){if(this.KQ===
E)return;this.KQ=E;this.DH.L(E);this.Ib.L(E);},AOh:function(){var B;return this.
AOj()-(((((B=this.Mr)<0)?B+0x100000000:B)-1)*86400);},AOj:function(){return A._GetAutoObject(
A.Device.Converter).Ahz();},BmH:function(E){if(this.AUg===E)return;this.AUg=E;A.
pe([this,this.Wr],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
acg.Text._Init.call(this.DH={I:this},0);A.acg.Text._Init.call(this.Ib={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.Axm._Init.call(this.At7={I:this},0);
this.__proto__=C.Ahk;this.H(BF);this.Ar(false);this.DH.H(AHa);this.DH.Hq(5);this.
DH.A7(0x11);this.DH.L(A.jb.Text);this.Ib.H(AHa);this.Ib.Hq(5);this.Ib.A7(0x14);this.
Ib.L(A.jb.Text);this.Bc.H(AHb);this.Bc.L(A.jb.Bc);this.KQ=A.jb.Text;this.At7.H(AVS
);this.J(this.DH,0);this.J(this.Ib,0);this.J(this.Bc,0);this.DH.S(A.aaL(A.fl.Ak)
);this.Ib.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.DH._Done();this.Ib._Done();this.Bc._Done();this.At7._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.DH._ReInit(
);this.Ib._ReInit();this.Bc._ReInit();this.At7._ReInit();this.DH.S(A.aaL(A.fl.Ak
));this.Ib.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DH)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.At7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4B={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A4B;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajg={KX:null,MS:null,AY:0,Ot:
function(A6,P9){var G_;G_=A._NewObject(C.A4B,0);G_.A5=A6;G_.Timestamp=P9;if(!this.
KX){this.KX=G_;this.MS=G_;this.AY=1;}else{this.MS.Ah=G_;this.MS=G_;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajg;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ee={Z:null,Ay:null,Init:function(
aArg){A.pe([this,this.MF],this);},Dz:function(G){var B;var E_=0;var X=this.AW;switch(
this.Co.CN){case 6:E_=2;break;case 7:E_=7;break;case 4:E_=4;break;case 5:E_=5;break;
default:;}X=this.QA(X,E_,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Z.HA(X,true,null,null);this.DG(this);},AlE:function(G){A._GetAutoObject(C.A1
).Fr();},Aps:function(G){var B;if(!!(C.Cl.isPrototypeOf(B=this.AW)?B:null).Agc)A.
pe((C.Cl.isPrototypeOf(B=this.AW)?B:null).Agc,this);},Fa:function(G){var B;this.
Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.
Z.Bt[1]);},DG:function(G){var B;var GN=(C.Cl.isPrototypeOf(B=this.AW)?B:null);if(
!!GN){this.N.Hr(A.jV);this.N.B2(GN.Axg);this.N.I3.Do(255);this.N.HM.Do(GN.AwP);this.
N.AEG(GN.AuY);this.N.Anh(GN.AmA);this.N.CY(GN.APO);this.N.C5(GN.AqH);GN.A2D(this
);}},MF:function(s){this.DG(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Z._Init.call(this.Z={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ee;this.Background.H(Rf);this.Background.L(A.jb.C2);this.N.H(W0);this.
N.Ar(false);this.N.Y(true);this.Z.H(E7);this.Z.Kg(1);this.Ay.H(IJ);this.J(this.Z
,0);this.J(this.Ay,0);this.Z.En=[this,this.Fa];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Z._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Z._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATk={Nu:null,ASj:null,AdK:null,Vq:null,GJ:null,PopupTimeout:null,AbY:null,Ago:
null,PopupIdToString:null,Atc:null,Text:A.jV,Akr:A.jV,AJD:A.jV,AkL:0,AKK:-1,AyV:-
1,AKd:0,ATm:0,A1J:false,CS:function(){this.A94(this.PopupIdToString.BS(this.ATm)
);},Init:function(aArg){this.Bn5(this);},Bf2:function(G){var B;if(this.AkL>0){this.
A_g((this.AkL/1000)|0);this.PopupTimeout.Wk(0);this.PopupTimeout.PN(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.Axc(this);},BfY:function(G){var Qq=this.
Text;var AfG=this.Akr;var AKb=A.abi(16,A.jV,null);var index=0;var AyQ=0;while(AfG
!==A.jV){AyQ=AfG.indexOf(A.Device.PopupParamSeparator,0);if(AyQ!==-1){AKb.Set(index
,A.ab1(AfG,AyQ,(AfG.length-AyQ)+1));AfG=A.ab1(AfG,0,AyQ+1);index=index+1;if(index>=
16){A.ab5("%s",(AVT+AfG)+AVU);AfG=A.jV;}}else{AKb.Set(index,AfG);AfG=A.jV;}}index=
0;while(index<Qq.length){if((Qq.charCodeAt(index)||0)===0x7B){var Bc2=Qq.indexOf(
String.fromCharCode(0x7D),index);if(Bc2===-1){A.ab5("%s",(((AVV+Qq)+AVW)+index.toFixed(
))+Afm);index=Qq.length;}else{var BeQ=(Bc2-index)-1;var A3c=A.abW(Qq,index+1,BeQ
);var AKa=A.wz(A3c,-1,10);Qq=A.ab1(Qq,index,BeQ+2);if(A3c===AVX)this.BmY(index);
else if(((AKa>0)&&(AKa<=16))&&(this.Akr!==A.jV)){Qq=A.abU(Qq,AKb.Get(AKa-1),index
);if(this.A1J===true)this.BmX(A.wz(AKb.Get(AKa-1),0,10));}else A.ab5("%s",(AVY+A3c
)+AVZ);}}index=index+1;}this.BmW(Qq);},CA:function(G){A.pe([this,this.Bf2],this);
},Ai:function(Ae){var B;this.AdK.H(A.aaT(this.GJ.Df(),AhI));this.Vq.H(A.aaT(this.
GJ.Df(),AhI));if(!!this.Nu){this.Nu.H(A.abM(this.Nu.M,this.GJ.M[0]));this.Nu.H(A.
abO(this.Nu.M,this.GJ.M[3]+10));this.Nu.H(A.abL(this.Nu.M,(B=this.GJ.M)[2]-B[0])
);this.Nu.H(A.abI(this.Nu.M,8));this.AdK.H(A.abh(A.aaT(this.GJ.Df(),AhI),AHc));this.
Vq.H(A.abh(A.aaT(this.GJ.Df(),AhI),AHc));}else{this.AdK.H(A.aaT(this.GJ.Df(),AhI
));this.Vq.H(A.aaT(this.GJ.Df(),AhI));}},Dz:function(G){var Jq=(A.Core.BL.isPrototypeOf(
G)?G:null);if((Jq.CN===4)&&((this.Vq.M[1]+this.M[1])<this.M[1])){this.GJ.H(A.abO(
this.GJ.M,this.GJ.M[1]+28));this.An();}else if((Jq.CN===5)&&((this.Vq.M[3]+this.
M[1])>this.N.M[1])){this.GJ.H(A.abO(this.GJ.M,this.GJ.M[1]-28));this.An();}if((Jq.
CN===6)&&!!this.D6().Cz)this.D6().AEP(1);else if((Jq.CN===7)&&!!this.D6().Cf)this.
D6().AEP(3);},IO:function(G){switch(this.D6().Ag4){case 1:this.AlE(this);break;case
3:this.Aps(this);break;case 2:this.Az8(this);break;case 0:break;default:A.ab5("%s%e"
,AV0,this.D6().Ag4);}},AlE:function(G){var B;(B=this.D6().Cz)?B[1].call(B[0],this
):null;},Aps:function(G){var B;(B=this.D6().Cf)?B[1].call(B[0],this):null;},Az8:
function(G){var B;(B=this.D6().Cj)?B[1].call(B[0],this):null;},LL:function(G){this.
N.IW.L((this.N.IW.AQ&0x00FFFFFF)|(100<<24));},EX:function(G){var B;this.PopupTimeout.
Axc(this);},A94:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
BfY],this);},BzP:function(G){var B;this.A_g(this.AyV-1);if(this.AyV<=0){this.PopupTimeout.
Axc(this);(B=this.ASj)?B[1].call(B[0],this):null;}},A96:function(E){if(this.AkL===
E)return;this.AkL=E;A.pe([this,this.Bf2],this);},A9S:function(E){if(this.Akr===E
)return;this.Akr=E;A.pe([this,this.BfY],this);},BmW:function(E){if(this.AJD===E)
return;this.AJD=E;this.AAX(this);this.Bxx(this);},AAX:function(G){if((this.AyV!==-
1)&&(this.AKK!==-1)){var Byn=this.Atc.Format(AV1);this.GJ.R(A.abU(this.AJD,Byn,this.
AKK));}else this.GJ.R(this.AJD);this.GJ.H(AHd);},BmY:function(E){if(this.AKK===E
)return;this.AKK=E;this.AAX(this);},A_g:function(E){if(this.AyV===E)return;this.
AyV=E;this.Atc.AFj(E);A.pe([this,this.AAX],this);},Bxx:function(G){this.GJ.Df();
if(this.GJ.M[1]<=this.M[1])this.GJ.H(A.abO(this.GJ.M,28));this.An();},A_i:function(
E){if(this.A1J===E)return;this.A1J=E;if(E===true)A.pe([this,this.BAn],this);},BAn:
function(G){if(!this.Nu){this.Nu=A._NewObject(A.acq.ACW,0);this.Nu.Gp(0);this.Nu.
E4(100);this.Nu.OnSetAppearance(this.AbY);this.J(this.Nu,0);this.Ahn(this.Nu,this.
GJ);}this.Nu.BC(this.AKd);},BmX:function(E){if(this.AKd===E)return;this.AKd=E;if(
!!this.Nu)this.Nu.BC(this.AKd);},Bn5:function(G){var B;this.N.Do(0);this.Ago.AnE(
this);},Bmx:function(E){if(this.ATm===E)return;this.ATm=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.AdK={I:this},0);A.acg.CC._Init.
call(this.Vq={I:this},0);A.acg.Text._Init.call(this.GJ={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acq.ACX._Init.call(this.AbY={I:this},
0);A.acl.Gc._Init.call(this.Ago={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bw._Init.call(this.Atc={I:this},0);this.
__proto__=C.ATk;var B;this.H(Cc);this.Background.H(E7);this.Background.L(0x88FFFFFF
);this.Background.Y(false);this.Ef.Ar(false);this.Ef.Y(false);this.AdK.H(AHe);this.
AdK.L(A.jb.CI);this.Vq.H(AHe);this.Vq.NY(2);this.Vq.L(A.jb.Text);this.GJ.H(AHd);
this.GJ.Hq(10);this.GJ.IZ(true);this.GJ.BmV(0);this.GJ.KP(true);this.GJ.L(A.jb.Text
);this.PopupTimeout.PN(0);this.AbY.A9$(0);this.AbY.A99(A.jb.AW);this.AbY.A98(0);
this.AbY.AFz(AGX);this.Ago.HI(1);this.Ago.B3=255;this.Ago.Cu=0;this.JO(this.Ef,-
1);this.J(this.AdK,0);this.J(this.Vq,0);this.J(this.GJ,0);this.GJ.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mv=[this,this.BzP];this.AbY.A9_(A.aaL(A.ach.NN));this.AbY.A97(
A.aaL(A.ach.NN));this.Ago.Q=[B=this.N,B.AvT,B.AZL];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.AdK._Done();this.Vq._Done();this.GJ._Done();this.PopupTimeout.
_Done();this.AbY._Done();this.Ago._Done();this.PopupIdToString._Done();this.Atc.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
AdK._ReInit();this.Vq._ReInit();this.GJ._ReInit();this.PopupTimeout._ReInit();this.
AbY._ReInit();this.Ago._ReInit();this.PopupIdToString._ReInit();this.Atc._ReInit(
);this.GJ.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASj)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Vq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ago)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Atc)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mj={Ai:function(Ae
){C.Cl.Ai.call(this,Ae);var FJ=A.jb.CI;var GL=A.jb.Text;if(this.Hc){FJ=A.jb.Text;
GL=A.jb.Bm;}if(!this.LD){this.Background.L(FJ);this.V.L(A.jb.AmN);}else if(this.
Qk){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(this.KA){this.Background.
L(A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.L(GL);}},_Init:function(
aArg){C.Cl._Init.call(this,aArg);this.__proto__=C.Mj;},_className:"Application::DarkThemeMenuItem"
};C.Am2={Adk:0,_Init:function(aArg){C.Cl._Init.call(this,aArg);this.__proto__=C.
Am2;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={Xn:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);},KN:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);
this.Bz.Cf=[this,this.A2E];this.Bz.Cj=null;this.Bz.Cz=[this,this.Xn];this.Bz.B2(
A.aaR(A.acf.Ok));this.Bz.Cp(null);this.Bz.CY(A.aaL(A.ach.Aee));}return this.Bz;}
,A2E:function(G){var B;if(!!(C.Cl.isPrototypeOf(B=this.AW)?B:null))(C.Cl.isPrototypeOf(
B=this.AW)?B:null).IO(this);},CA:function(G){},AId:function(s){this.CA(s);},EX:function(
G){},Ayb:function(s){this.EX(s);},_Init:function(aArg){C.Aa2._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APh={VT:
null,YA:null,Yt:null,Init:function(aArg){this.Bb(this.VT);},Add:function(G){var Aa=(
C.Cl.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YA)A._GetAutoObject(A.Device.
Device).A_(6,true,A.jV,0,[this,this.BAB]);else if(Aa===this.VT)A._GetAutoObject(
A.Device.Device).A_(9,true,A.jV,0,[this,this.BAY]);else if(Aa===this.Yt)A._GetAutoObject(
C.A1).BU(4);else throw new Error(AxK);A._GetAutoObject(A.Device.Device).Ds(0);},
BAB:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AFX();},BAY:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Aw6();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mj._Init.call(this.VT={I:this},0);C.Mj._Init.call(this.YA={I:this
},0);C.Mj._Init.call(this.Yt={I:this},0);this.__proto__=C.APh;this.H(Acy);this.VT.
H(BF);this.VT.Ar(true);this.VT.T(A.aaR(A.acf.A_W));this.VT.Bi(true);this.YA.H(JS
);this.YA.Ar(true);this.YA.T(A.aaR(A.acf.A_D));this.YA.Bi(true);this.Yt.H(P4);this.
Yt.Ar(true);this.Yt.T(A.aaR(A.acf.SF));this.Yt.Bi(true);this.J(this.VT,0);this.J(
this.YA,0);this.J(this.Yt,0);this.VT.AR=[this,this.Add];this.YA.AR=[this,this.Add
];this.Yt.AR=[this,this.Add];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.VT._Done();this.YA._Done();this.Yt._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.VT._ReInit(
);this.YA._ReInit();this.Yt._ReInit();this.VT.T(A.aaR(A.acf.A_W));this.YA.T(A.aaR(
A.acf.A_D));this.Yt.T(A.aaR(A.acf.SF));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.VT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GC={Aan:null,OverlayMenu:null,Wt:null,A3x:null
,K9:null,A3b:null,Aks:null,N0:null,AzG:100,Init:function(aArg){var B;A.zX([this,
this.Bel],[B=A._GetAutoObject(A.Device.Device),B.AvU,B.Ayk],0);A.zX([this,this.Bef
],[B=A._GetAutoObject(A.Device.Device),B.AR2,B.AZJ],0);A.zX([this,this.A2v],[B=A.
_GetAutoObject(A.Device.Device),B.AvI,B.Ayd],0);A.zX([this,this.Bzl],[B=A._GetAutoObject(
A.Device.Device),B.AvF,B.Ayc],0);A.zX([this,this.Bzm],[B=A._GetAutoObject(A.Device.
Device),B.A7$,B.Bax],0);A.zX([this,this.Apt],[B=A._GetAutoObject(A.Device.Device
),B.ASb,B.AZR],0);A.zX([this,this.BeA],[B=A._GetAutoObject(A.Device.Device),B.Wh
,B.W2],0);A.pe([this,this.Bel],this);A.pe([this,this.Bef],this);A.pe([this,this.
Apt],this);A.pe([this,this.BeA],this);this.A3x.As([B=this.Wt,B.AD1,B.Y_]);this.J(
this.Wt,0);this.Bb(this.Wt);this.Bxa(this);},Ai:function(Ae){},Bef:function(G){var
B;if(A._GetAutoObject(A.Device.Device).ADO){if(!this.Aan){this.Aan=A._NewObject(
C.Ar1,0);this.Aan.H(A.abJ(this.Aan.M,this.Wt.M.slice(0,2)));this.Aan.H(A.abO(this.
Aan.M,this.Wt.M[3]-((B=this.Aan.M)[3]-B[1])));this.J(this.Aan,1);}}else{if(!!this.
Aan)this.HJ(this.Aan);this.Aan=null;}},Bel:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Ds(null);break;case 1:this.Ds(A._NewObject(
C.APh,0));break;case 8:this.Ds(A._NewObject(C.ALw,0));break;case 2:this.Ds(A._NewObject(
C.ALs,0));break;case 3:this.Ds(A._NewObject(C.ALz,0));break;case 4:this.Ds(A._NewObject(
C.ATF,0));break;case 5:this.Ds(A._NewObject(C.AU_,0));break;case 6:this.Ds(A._NewObject(
C.ATf,0));break;case 7:this.Ds(A._NewObject(C.Ama,0));break;case 11:this.Ds(A._NewObject(
C.AL5,0));break;case 12:this.Ds(A._NewObject(C.AL4,0));break;case 9:this.Ds(A._NewObject(
C.ARa,0));break;case 10:this.Ds(A._NewObject(C.AL0,0));break;case 14:this.Ds(A._NewObject(
C.AQ8,0));break;case 15:this.Ds(A._NewObject(C.AQ9,0));break;case 13:this.Ds(A._NewObject(
C.AQ_,0));break;case 16:this.Ds(A._NewObject(C.ATu,0));break;case 17:this.Ds(A._NewObject(
C.AMp,0));break;default:throw new Error(AV2+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Ds:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.Wp).Are(null);this.N0.Aqh(this.OverlayMenu,A._GetAutoObject(
C.Aw9),null,null,[B=this.OverlayMenu,B.Ayb],null,true);this.Bb(this.Wt);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.Aku(this.OverlayMenu,A._GetAutoObject(C.Aw8),null
,null,null,null,null,[B=this.OverlayMenu,B.AId],null,false);this.Bb(this.N0);A._GetAutoObject(
C.Wp).Are(this.OverlayMenu.KN());}else if(!!this.K9){this.Bb(this.N0);A._GetAutoObject(
C.Wp).Are(this.K9.Akb().KN());}},Ag_:function(E){var B;if(this.K9===E)return;if(
!!this.K9){A._GetAutoObject(C.Wp).Are(null);this.N0.Aqh(this.K9.Akb(),A._GetAutoObject(
C.Ae0),null,null,[B=this.K9.Akb(),B.Ayb],null,false);this.Bb(this.Wt);}this.K9=E;
if(!!this.K9){this.N0.Aku(this.K9.Akb(),A._GetAutoObject(C.Ae0),null,null,null,null
,null,[this,this.BkN],null,false);this.Bb(this.N0);A._GetAutoObject(C.Wp).Are(this.
K9.Akb().KN());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
Wp).Are(this.OverlayMenu.KN());}},Bxa:function(G){var B;var F;this.J(this.A3b,0);(
F=A._GetAutoObject(C.Wp),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wp).M)[3]-B[1]))));this.Zl(this.N0);},A2v:function(G){if(A._GetAutoObject(A.Device.
Device).Amj)switch(A._GetAutoObject(A.Device.Device).KD){case 4:case 39:case 5:break;
case 40:A._GetAutoObject(C.A1).Ahg(4);break;default:if(A._GetAutoObject(A.Device.
Device).AaM<98)A._GetAutoObject(C.A1).BU(4);}else{this.AzG=100;this.Bb_();}},Bzl:
function(G){this.Bb_();},Bb_:function(){if(!A._GetAutoObject(A.Device.Device).Amj
){if(A._GetAutoObject(A.Device.Device).AaM<=2){if(this.AzG>2)switch(A._GetAutoObject(
A.Device.Device).KD){case 39:break;case 4:case 40:A._GetAutoObject(C.A1).Ahg(39);
break;default:A._GetAutoObject(C.A1).BU(39);}}else if(A._GetAutoObject(A.Device.
Device).AaM<=10){if(this.AzG>10)switch(A._GetAutoObject(A.Device.Device).KD){case
40:break;case 4:case 39:A._GetAutoObject(C.A1).Ahg(40);break;default:A._GetAutoObject(
C.A1).BU(40);}}else if(A._GetAutoObject(A.Device.Device).AaM<=20){if(this.AzG>20
)switch(A._GetAutoObject(A.Device.Device).KD){case 40:break;case 4:case 39:A._GetAutoObject(
C.A1).Ahg(40);break;default:A._GetAutoObject(C.A1).BU(40);}}else switch(A._GetAutoObject(
A.Device.Device).KD){case 39:case 4:case 40:A._GetAutoObject(C.A1).Fr();break;default:;
}this.AzG=A._GetAutoObject(A.Device.Device).AaM;}},Bzm:function(G){switch(A._GetAutoObject(
A.Device.Device).Ap8){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A_(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anf(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A_(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anf(0
);}break;default:A.ab5("%s",AV3+A._GetAutoObject(A.Device.Device).Ap8.toFixed());
}},Apt:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A1).BU(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KD===5)A._GetAutoObject(C.A1).Ahg(3);break;
default:;}},BeA:function(G){switch(A._GetAutoObject(A.Device.Device).AhC){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Uh(false);break;case 5:{A._GetAutoObject(
A.Device.Device).Wn(65535);A._GetAutoObject(A.Device.Device).Uh(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Wn(255);A._GetAutoObject(A.Device.Device).Uh(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wn(16776960);A._GetAutoObject(
A.Device.Device).Uh(true);}break;case 6:{A._GetAutoObject(A.Device.Device).Wn(16711935
);A._GetAutoObject(A.Device.Device).Uh(true);}break;default:A.ab5("%s",AV4+A._GetAutoObject(
A.Device.Device).AhC.toFixed());}},BkN:function(G){var B;this.K9.Akb().CA(this);
this.K9.BzN(this);},BjT:function(){return this.K9;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.Aks._Init.call(this.Aks={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GC;this.H(Cc);this.N0.H(Rf);this.J(this.N0,0);this.
Wt=A._NewObject(C.Wt,0);this.A3x=A._GetAutoObject(C.A1);this.Aks.AM6=[this,this.
BjT,this.Ag_];this.A3b=A._GetAutoObject(C.Wp);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.O;this.Aks._Done();this.N0._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aks._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aan)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Wt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3x)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3b)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aks)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Aa2={A_s:null,Bz:null,N:null,Co:null,AmU:null,AmW:null,QK:null,AmV:null,AmS:
null,AmY:null,AmT:null,Dz:function(G){var E_=0;var X=this.AW;switch(this.Co.CN){
case 6:E_=2;break;case 7:E_=7;break;case 4:E_=4;break;case 5:E_=5;break;default:;
}X=this.QA(X,E_,0x14);if(!!X)this.Bb(X);},Ba4:function(s){this.Dz(s);},AlE:function(
G){var D1=(A.Core.BL.isPrototypeOf(G)?G:null);if(D1.Ab5&&(this.D6().ArW===false)
)return;A.pe(this.D6().Cz,this);},AIq:function(s){this.AlE(s);},Aps:function(G){
var D1=(A.Core.BL.isPrototypeOf(G)?G:null);if(D1.Ab5&&(this.D6().Zk===false))return;
A.pe(this.D6().Cf,this);},AIt:function(s){this.Aps(s);},IO:function(G){if(this.QK.
Ab5)return;},AsV:function(s){this.IO(s);},Az8:function(G){var D1=(A.Core.BL.isPrototypeOf(
G)?G:null);if(D1.Ab5&&(this.D6().Zj===false))return;A.pe(this.D6().Cj,this);},AIs:
function(s){this.Az8(s);},D6:function(){if(!!this.KN())return this.Bz;else return this.
N;},KN:function(){return this.Bz;},GI:function(E){this.A_s=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BL._Init.
call(this.Co={I:this},0);A.Core.BL._Init.call(this.AmU={I:this},0);A.Core.BL._Init.
call(this.AmW={I:this},0);A.Core.BL._Init.call(this.QK={I:this},0);A.Core.BL._Init.
call(this.AmV={I:this},0);A.Core.BL._Init.call(this.AmS={I:this},0);A.Core.BL._Init.
call(this.AmY={I:this},0);A.Core.BL._Init.call(this.AmT={I:this},0);this.__proto__=
C.Aa2;this.H([0,0,C.Ar4[0],C.Ar4[1]]);this.N.H(W0);this.N.Ar(false);this.N.Y(false
);this.Co.Filter=147;this.AmU.Filter=26;this.AmW.Filter=28;this.QK.Filter=1;this.
AmV.Filter=27;this.AmS.Filter=44;this.AmY.Filter=9;this.AmT.Filter=42;this.J(this.
N,0);this.Co.BM=[this,this.Ba4];this.Co.DX=[this,this.Ba4];this.AmU.BM=[this,this.
AIq];this.AmU.DX=[this,this.AIq];this.AmW.BM=[this,this.AIt];this.AmW.DX=[this,this.
AIt];this.QK.BM=[this,this.AsV];this.QK.DX=[this,this.AsV];this.AmV.BM=[this,this.
AIs];this.AmV.DX=[this,this.AIs];this.AmS.BM=[this,this.AIq];this.AmS.DX=[this,this.
AIq];this.AmY.BM=[this,this.AIt];this.AmY.DX=[this,this.AIt];this.AmT.BM=[this,this.
AIs];this.AmT.DX=[this,this.AIs];},_Done:function(){this.__proto__=A.Core.O;this.
N._Done();this.Co._Done();this.AmU._Done();this.AmW._Done();this.QK._Done();this.
AmV._Done();this.AmS._Done();this.AmY._Done();this.AmT._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.N._ReInit();this.Co.
_ReInit();this.AmU._ReInit();this.AmW._ReInit();this.QK._ReInit();this.AmV._ReInit(
);this.AmS._ReInit();this.AmY._ReInit();this.AmT._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.A_s)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AmW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AmT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Aw8={_Init:function(){A.acl.AGh._Init.call(this,0);this.J8=0x22;this.AdO=true;
this.AuB=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Aw9={_Init:function(){A.acl.AGh._Init.call(this,0);this.J8=0x22;this.AdO=true;
this.AuB=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUe={R4:function(){var B;var Ap=(A.acl.AeS.isPrototypeOf(B=A.acl.Ad3.R4.call(this
))?B:null);if(!Ap)throw new Error(Asy);Ap.Cm.Cu=100;return Ap;},R3:function(){var
B;var Ap=(A.acl.AwQ.isPrototypeOf(B=A.acl.Ad3.R3.call(this))?B:null);if(!Ap)throw new
Error(Asy);Ap.EU.B3=100;return Ap;},_Init:function(aArg){A.acl.Ad3._Init.call(this
,aArg);this.__proto__=C.AUe;},_className:"Application::ShadeTransition"};C.AmG={
AgQ:null,SL:null,HL:null,DQ:null,AnimalId:-1,GroupId:-1,ACD:true,Dc:function(E){
C.BR.Dc.call(this,E);this.SL.L(E);this.HL.L(E);this.AgQ.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HL.R(A.aaR(A.acf.AeU)
);else this.HL.R(E.toFixed());},AbQ:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SL.R(A.aaR(A.acf.AeU));else this.SL.R(E.toFixed());},D2:function(
G){},Ng:function(s){this.D2(s);},A9A:function(E){if(this.ACD===E)return;this.ACD=
E;this.SL.Y(this.ACD);this.AgQ.Y(this.ACD);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Am._Init.call(this.AgQ={I:this},0);A.acg.Text._Init.call(this.SL={
I:this},0);A.acg.Text._Init.call(this.HL={I:this},0);C.DQ._Init.call(this.DQ={I:
this},0);this.__proto__=C.AmG;this.AgQ.H(AV5);this.SL.H(AV6);this.SL.A7(0x11);this.
SL.R(A.aaR(A.acf.AeU));this.HL.H(AV7);this.HL.A7(0x11);this.HL.R(A.aaR(A.acf.AeU
));this.DQ.H(AV8);this.J(this.AgQ,0);this.J(this.SL,0);this.J(this.HL,0);this.J(
this.DQ,0);this.AgQ.Ax(A.aaL(A.ach.AP0));this.SL.S(A.aaL(A.fl.Af));this.HL.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.AgQ._Done();this.SL._Done(
);this.HL._Done();this.DQ._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.AgQ._ReInit();this.SL._ReInit();this.HL._ReInit();this.DQ.
_ReInit();this.SL.R(A.aaR(A.acf.AeU));this.HL.R(A.aaR(A.acf.AeU));this.SL.S(A.aaL(
A.fl.Af));this.HL.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ACN={Init:function(
aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.Ara,B.Ui
],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.A8s,B.Anl],0);
A.zV([this,this.Ng],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Ng],[
B=A._GetAutoObject(A.Device.Helper).W,B.PL,B.Ew],0);A.zX([this,this.Ng],[B=A._GetAutoObject(
A.Device.Helper).W,B.A86,B.AwM],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8j,B.AeJ],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8k,B.Uf],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8n,B.AeM],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.A8r,B.
AeO],0);A.pe([this,this.Ng],this);},Dc:function(E){C.AmG.Dc.call(this,E);this.DQ.
Dc(E);},D2:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqz()){this.AbQ(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.AbQ(-1);this.OnSetAnimalId(-1);}this.DQ.
Ew(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DQ.AEy(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DQ.AeJ(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DQ.Uf(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DQ.AeM(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DQ.AeO(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmG._Init.call(this,aArg);this.
__proto__=C.ACN;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.J_={Ahw:A.abi(3,A.jV,null),Cq:A.abi(3,0,{0:7,1:30,2:90}),Am6:3,Dr:function(){
if(this.Am6<3)return this.Am6;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Am6))return-1;return this.Cq.Get(aIndex);},Gb:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Am6))return AV9;return this.Ahw.Get(aIndex);},DO:function(
A6){var P=0;while((P<3)&&(P<=this.Am6)){if(this.Cq.Get(P)===A6)return P;P=P+1;}return-
1;},Hn:function(){var P=0;var max=-1;while((P<3)&&(P<=this.Am6)){if(this.Cq.Get(
P)>max)max=this.Cq.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Ahw=[]).__proto__=C.J_.Ahw;(this.Cq=[]).__proto__=C.J_.Cq;this.
__proto__=C.J_;this.Ahw.Set(0,A.aaR(A.acf.A66));this.Ahw.Set(1,A.aaR(A.acf.A64));
this.Ahw.Set(2,A.aaR(A.acf.A65));},_ReInit:function(){C.AC._ReInit.call(this);this.
Ahw.Set(0,A.aaR(A.acf.A66));this.Ahw.Set(1,A.aaR(A.acf.A64));this.Ahw.Set(2,A.aaR(
A.acf.A65));},_className:"Application::Days"};C.AUb={Amd:null,BT:null,Q0:null,Qx:
null,A$g:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.Bz7],[B=A._GetAutoObject(A.Device.Device),B.Aq$,B.AsU],0);},Bj:function(
aSize){},Ai:function(Ae){var B;var F;C.Dp.Ai.call(this,Ae);var Fn=((Ae&0x20)===0x20
);var Gw=this.Bo.By;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AV_+A._GetAutoObject(
A.Device.Converter).AkJ((F=this.Q,F[1].call(F[0]))))+CO)+A._GetAutoObject(A.acj.
Temperature).Alo());this.HY.Y((this.AM<A._GetAutoObject(A.Device.Helper).A6q())&&(
Fn||Gw));},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));
},J2:function(G){var F;var BQ=this.AM;C.Dp.J2.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6q()){this.BC(this.AM+10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},JX:function(G){var F;var BQ=this.
AM;C.Dp.JX.call(this,G);this.BC(this.AM-10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_b:function(E){if(this.A$g===E)return;
this.A$g=E;this.An();},Bz7:function(G){this.An();},_Init:function(aArg){C.Dp._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amd={I:this},0);C.CG._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q0={I:this},0);A.acg.Am._Init.call(this.Qx={
I:this},0);this.__proto__=C.AUb;this.H(UN);this.Background.H(UN);this.V.H(Asz);this.
V.L(A.jb.Bm);this.Amd.H(AV$);this.Amd.L(A.jb.Afd);this.Hp.H(AWa);this.BT.H(AWb);
this.BT.A7(0x12);this.BT.L(A.jb.Text);this.HY.H(AWc);this.Q0.H(AWd);this.Q0.L(A.
jb.EV);this.Qx.H(AWe);this.J(this.Amd,-2);this.J(this.BT,-1);this.J(this.Q0,0);this.
J(this.Qx,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EF));this.BT.A2(A.aaL(A.fl.Af));this.Qx.Ax(A.aaL(A.ach.AC4));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dp;this.Amd._Done();this.BT._Done();this.Q0.
_Done();this.Qx._Done();C.Dp._Done.call(this);},_ReInit:function(){C.Dp._ReInit.
call(this);this.Amd._ReInit();this.BT._ReInit();this.Q0._ReInit();this.Qx._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EF));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.
Amd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qx)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_K={Q:null
,AiQ:null,Init:function(aArg){var B;A.zX([this,this.BdV],[B=A._GetAutoObject(A.Device.
Device),B.AD1,B.Baq],0);A.pe([this,this.BdV],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahg:function(Ak3){A._GetAutoObject(A.Device.Device).Y_(Ak3
);},BdV:function(G){var F;if(!this.Q){A.ab5("%s",AWf);return;}var Bp=null;if(this.
AiQ.Contains(A._GetAutoObject(A.Device.Device).KD)){Bp=this.AiQ.A_q();while(!!Bp&&(
Bp.AnP!==A._GetAutoObject(A.Device.Device).KD))Bp=this.AiQ.A_q();}if(!Bp)Bp=this.
ByK(A._GetAutoObject(A.Device.Device).KD);(F=this.Q,F[2].call(F[0],Bp));},ByK:function(
Ak3){var Bp=null;switch(Ak3){case 0:case 1:Bp=A._NewObject(C.AUj,0);break;case 2:
Bp=A._NewObject(C.XN,0);break;case 3:Bp=A._NewObject(C.Au8,0);break;case 61:Bp=A.
_NewObject(C.AUY,0);break;case 88:Bp=A._NewObject(C.NewMenu,0);break;case 27:Bp=
A._NewObject(C.ARq,0);break;case 6:Bp=A._NewObject(C.AQ1,0);break;case 16:Bp=A._NewObject(
C.ANa,0);break;case 22:Bp=A._NewObject(C.AUT,0);break;case 17:Bp=A._NewObject(C.
AUA,0);break;case 46:Bp=A._NewObject(C.AM_,0);break;case 99:Bp=A._NewObject(C.ATN
,0);break;case 100:Bp=A._NewObject(C.ATM,0);break;case 101:Bp=A._NewObject(C.AUR
,0);break;case 23:Bp=A._NewObject(C.AVf,0);break;case 18:Bp=A._NewObject(C.ANo,0
);break;case 19:Bp=A._NewObject(C.ATO,0);break;case 38:Bp=A._NewObject(C.AQt,0);
break;case 87:Bp=A._NewObject(C.ATs,0);break;case 72:Bp=A._NewObject(C.ANm,0);break;
case 73:Bp=A._NewObject(C.ANn,0);break;case 93:Bp=A._NewObject(C.ANl,0);break;case
94:Bp=A._NewObject(C.ANj,0);break;case 104:Bp=A._NewObject(C.ANh,0);break;case 105:
Bp=A._NewObject(C.ANk,0);break;case 74:Bp=A._NewObject(C.ANi,0);break;case 5:Bp=
A._NewObject(C.AUt,0);break;case 4:Bp=A._NewObject(C.AdQ,0);break;case 40:Bp=A._NewObject(
C.AML,0);break;case 39:Bp=A._NewObject(C.AM4,0);break;case 28:Bp=A._NewObject(C.
Wc,0);break;case 7:Bp=A._NewObject(C.Aqk,0);break;case 92:Bp=A._NewObject(C.ANx,
0);break;case 31:Bp=A._NewObject(C.Aq3,0);break;case 89:Bp=A._NewObject(C.ARo,0);
break;case 34:Bp=A._NewObject(C.ALq,0);break;case 35:Bp=A._NewObject(C.ManualActionScanScreen
,0);break;case 32:Bp=A._NewObject(C.SetTransponderScreen,0);break;case 50:Bp=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 55:Bp=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bp=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bp=A._NewObject(C.MotherScanScreen,0);break;case 91:Bp=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bp=A._NewObject(C.GP,0);break;case 9:Bp=A._NewObject(C.IS,0);break;
case 24:Bp=A._NewObject(C.ALJ,0);break;case 10:Bp=A._NewObject(C.Al9,0);break;case
21:Bp=A._NewObject(C.ALN,0);break;case 11:Bp=A._NewObject(C.ALM,0);break;case 29:
Bp=A._NewObject(C.Auh,0);break;case 54:Bp=A._NewObject(C.ALL,0);break;case 30:Bp=
A._NewObject(C.ALK,0);break;case 37:Bp=A._NewObject(C.GB,0);break;case 12:Bp=A._NewObject(
C.ALI,0);break;case 41:Bp=A._NewObject(C.ALH,0);break;case 43:Bp=A._NewObject(C.
ALG,0);break;case 14:Bp=A._NewObject(C.AM2,0);break;case 13:Bp=A._NewObject(C.AM3
,0);break;case 44:Bp=A._NewObject(C.AM1,0);break;case 20:Bp=A._NewObject(C.AU8,0
);break;case 42:Bp=A._NewObject(C.AU7,0);break;case 45:Bp=A._NewObject(C.AU6,0);
break;case 47:Bp=A._NewObject(C.AOa,0);break;case 48:Bp=A._NewObject(C.AN$,0);break;
case 49:Bp=A._NewObject(C.AN_,0);break;case 69:Bp=A._NewObject(C.ANw,0);break;case
70:Bp=A._NewObject(C.ANv,0);break;case 71:Bp=A._NewObject(C.ANu,0);break;case 51:
Bp=A._NewObject(C.ARD,0);break;case 52:Bp=A._NewObject(C.ARC,0);break;case 53:Bp=
A._NewObject(C.ARB,0);break;case 96:Bp=A._NewObject(C.AVl,0);break;case 97:Bp=A.
_NewObject(C.AVk,0);break;case 98:Bp=A._NewObject(C.AVj,0);break;case 80:Bp=A._NewObject(
C.ARy,0);break;case 81:Bp=A._NewObject(C.ARx,0);break;case 82:Bp=A._NewObject(C.
ARw,0);break;case 85:Bp=A._NewObject(C.AMq,0);break;case 102:Bp=A._NewObject(C.ATv
,0);break;case 83:Bp=A._NewObject(C.ATQ,0);break;case 84:Bp=A._NewObject(C.ATP,0
);break;case 58:Bp=A._NewObject(C.ALv,0);break;case 59:Bp=A._NewObject(C.ALu,0);
break;case 60:Bp=A._NewObject(C.ALt,0);break;case 15:Bp=A._NewObject(C.ATC,0);break;
case 68:Bp=A._NewObject(C.AUz,0);break;case 78:Bp=A._NewObject(C.AQZ,0);break;case
79:Bp=A._NewObject(C.AQY,0);break;case 26:Bp=A._NewObject(C.ARr,0);break;case 62:
Bp=A._NewObject(C.ARn,0);break;case 25:Bp=A._NewObject(C.ANK,0);break;case 75:Bp=
A._NewObject(C.ANL,0);break;case 67:Bp=A._NewObject(C.ANJ,0);break;case 66:Bp=A.
_NewObject(C.ANM,0);break;case 64:Bp=A._NewObject(C.ANN,0);break;case 65:Bp=A._NewObject(
C.Aqn,0);break;case 77:Bp=A._NewObject(C.ANO,0);break;case 76:Bp=A._NewObject(C.
ANH,0);break;case 95:Bp=A._NewObject(C.ALP,0);break;case 33:Bp=A._NewObject(C.WeightListScreen
,0);break;case 36:Bp=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 56:Bp=A.
_NewObject(C.AnimalMultiInfoScreen,0);break;case 57:Bp=A._NewObject(C.MultiInfoActionsScreen
,0);break;case 86:Bp=A._NewObject(C.AL2,0);break;case 103:Bp=A._NewObject(C.AUF,
0);break;default:throw new Error(AWg);}if(!!Bp)Bp.AnP=Ak3;return Bp;},BU:function(
Ak3){var F;if(!(F=this.Q,F[1].call(F[0])))A.ab5("%s",AWh);else this.AiQ.Bnj((F=this.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).Y_(Ak3);},Fr:function(){var
Be4=3;var Be3=this.AiQ.Bm$();if(!!Be3)Be4=Be3.AnP;else A.ab5("%s",AWi);A._GetAutoObject(
A.Device.Device).Y_(Be4);},_Init:function(aArg){C.A_M._Init.call(this.AiQ={I:this
},0);this.__proto__=C.A_K;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;this.AiQ._Done();A.h7--;},_ReInit:function(){this.AiQ._ReInit();},_Mark:function(
D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiQ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"};C.
A1={_Init:function(){C.A_K._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.AFO={H1:null,Yh:null,AeW:null,Aas:null,Mw:null,Ay1:
1,RatingMode:0,RatedAttribute:0,CS:function(){this.Yh.R(this.BcF(this.RatedAttribute
));this.AJ7(this);},Ai:function(Ae){this.Mw.R(A._GetAutoObject(A.Device.Helper).
Ne(A.aaR(A.acf.ARe),P3,this.Ay1.toFixed()));if(this.RatingMode===1)this.Mw.Y(true
);else this.Mw.Y(false);},CA:function(G){var B;C.AB.CA.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bu.HC().toFixed(),0,null);this.H1.Gh();this.H1.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Aw1(this.
H1,5);A.zX([this,this.AJ7],[B=A._GetAutoObject(A.Device.Device),B.AR_,B.AZO],0);
A.zX([this,this.AJ7],[B=A._GetAutoObject(A.Device.Helper).W,B.PL,B.Ew],0);A.pe([
this,this.AJ7],this);},Asa:function(G){var a=this.AJL(this.RatedAttribute);this.
Bfj();this.Ay1=this.Ay1-1;this.An();if(!a)this.ARl();else this.Sv(a);},Wx:function(
G){var a=this.BcM(this.RatedAttribute);this.Bfj();this.Ay1=this.Ay1+1;this.An();
if(!a)this.A7r();else this.Sv(a);},AJL:function(Ni){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Ni){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHf);},BcM:function(Ni){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Ni){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHf);},Sv:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yh.R(this.BcF(E));this.
DG(E);this.AeW.Anq(this.H1.Bh1(E));if(!this.AJL(E)){if(this.AQC())this.N.Cp(A.aaL(
A.ach.Abk));else this.N.Cp(null);}else this.N.Cp(A.aaL(A.ach.Aee));},BcF:function(
Ni){return this.Aas.BS(Ni);},ByJ:function(Ni){if(!!Ni){var a=this.AJL(Ni);if(!a)
return A.jV;else return this.BcG(a);}else return A.jV;},ByI:function(Ni){if(!!Ni
){var a=this.BcM(Ni);if(!a)return A.jV;else return this.BcG(a);}else return A.jV;
},ARl:function(){},A7r:function(){},A6r:function(){return null;},BcG:function(Ni
){return this.Aas.Lr(Ni);},Bfj:function(){if(!!this.RatedAttribute)this.H1.BnR(this.
RatedAttribute,this.AeW.A5);},AJ7:function(G){if(this.AQC())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.Sv(2);this.DG(this.RatedAttribute
);this.An();},Xo:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkE:function(G){var a=this.AJL(this.RatedAttribute);if(!a){if(this.AQC())this.
Xo(this);}else this.ARl();},DG:function(Ni){this.N.Hr(this.ByJ(Ni));if(!!this.N.
AnK){this.N.CY(null);this.N.OM(true);}else{this.N.CY(A.aaL(A.ach.Aee));this.N.OM(
false);}this.N.B2(this.ByI(Ni));if(!!this.N.AnM){this.N.C5(null);this.N.ON(true);
}else{this.N.C5(this.A6r());this.N.ON(false);}},AQC:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",AkU,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yh={
I:this},0);C.Rating._Init.call(this.AeW={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.Aas={I:this},0);A.acg.Text._Init.call(this.Mw={I:this},0);this.__proto__=
C.AFO;this.Background.L(A.jb.CI);this.N.Y(true);this.Dn(C.IA);this.Yh.H(AWj);this.
Yh.KP(true);this.Yh.L(A.jb.Text);this.AeW.H(AWk);this.Mw.H(AWl);this.Mw.A7(0x14);
this.Mw.R(A.aaR(A.acf.ARe));this.Mw.L(A.jb.Text);this.J(this.Yh,0);this.J(this.AeW
,0);this.J(this.Mw,0);this.Bb(this.AeW);this.N.Cz=[this,this.Asa];this.N.Cj=[this
,this.AkE];this.N.Cf=[this,this.Wx];this.Yh.S(A.aaL(A.fl.Af));this.AeW.AR=[this,
this.Wx];this.Mw.S(A.aaL(A.fl.Af));this.H1=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yh._Done();this.AeW._Done();this.Aas._Done();
this.Mw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yh._ReInit();this.AeW._ReInit();this.Aas._ReInit();this.Mw._ReInit();this.
Mw.R(A.aaR(A.acf.ARe));this.Yh.S(A.aaL(A.fl.Af));this.Mw.S(A.aaL(A.fl.Af));this.
CS();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aas)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HU={Z:null,Gender:null,AnimalType:null,Breed:null,I6:null,Pi:null,Aso:null,BY:
null,C_:null,C9:null,CF:null,Gd:null,Ay:null,KE:0,Init:function(aArg){A.zX([this
,this.Ba3],this.BY.Q,0);A.pe([this,this.Ba3],this);A.pe([this,this.AAD],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).AMY(this.
Z);},Dz:function(G){var B;var E_=0;var X=this.AW;switch(this.Co.CN){case 6:E_=2;
break;case 7:E_=7;break;case 4:E_=4;break;case 5:E_=5;break;default:;}X=this.QA(
X,E_,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Z.HA(X,true,null
,null);this.AAD(this);},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[
1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},AeD:function(E){
if(this.KE===E)return;this.KE=E;A.abo([this,this.AvG,this.AeD],0);},AAD:function(
G){var B;var GN=(C.Cl.isPrototypeOf(B=this.AW)?B:null);this.N.Hr(A.jV);this.N.CY(
A.aaL(A.ach.EW));this.N.Cz=[this,this.AIp];if(!!GN&&!!GN.Al4){this.N.FG(A.jV);this.
N.Kp.Do(255);this.N.Aro(GN.Aqs);this.N.Cp(GN.Avf);this.N.Cj=GN.Al4;}else{this.N.
FG(A.jV);this.N.Cp(null);this.N.Cj=null;}if(!!GN&&!!GN.Agc){this.N.B2(GN.Axg);this.
N.HM.Do(GN.AwP);this.N.Anh(GN.AmA);this.N.C5(GN.AqH);this.N.Cf=GN.Agc;}else this.
AtT();},AfY:function(G){A.ab5("%s",AxL);},Ayo:function(s){this.AfY(s);},Er:function(
G){A.ab5("%s",AxL);},AIp:function(s){this.Er(s);},AtT:function(){A.ab5("%s",AkV);
},Az1:function(G){A.ab5("%s",AxL);},AcC:function(s){this.Az1(s);},Jw:function(Ag
){this.Bb(Ag);this.Z.HA(Ag,true,null,null);this.Z.Vi(null,null);},Apn:function(G
){var F;this.C9.Ahd(A._GetAutoObject(A.Device.Helper).Aa_((F=this.BY.Q,F[1].call(
F[0]))));},Ba3:function(s){this.Apn(s);},AvG:function(){return this.KE;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UH._Init.call(this.I6={I:this},
0);A.Device.M0._Init.call(this.Pi={I:this},0);A.Device.KV._Init.call(this.Aso={I:
this},0);C.BZ._Init.call(this.BY={I:this},0);C.BZ._Init.call(this.C_={I:this},0);
C.AkC._Init.call(this.C9={I:this},0);C.Aw4._Init.call(this.CF={I:this},0);C.Ar7.
_Init.call(this.Gd={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HU;var B;this.N.Y(true);this.Dn(C.IA);this.Z.H(E7);this.Z.Kg(1);this.KE=A._GetAutoObject(
A.Device.Helper).Aa_(this.AnimalType.Q);this.BY.H(AhJ);this.BY.Aj(true);this.BY.
T(A.aaR(A.acf.Afc));this.C_.H(AxM);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.Ae6));
this.C9.H(An7);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KE));this.C9.Gp(1000);this.
C9.E4(99000);this.C9.Ahd(A._GetAutoObject(A.Device.Helper).Aa_(this.AnimalType.Q
));this.CF.H(AhK);this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed));this.Gd.H(AWm);
this.Gd.Aj(true);this.Gd.T(A.aaR(A.acf.I6));this.Ay.H(AxN);this.J(this.Z,0);this.
J(this.BY,0);this.J(this.C_,0);this.J(this.C9,0);this.J(this.CF,0);this.J(this.Gd
,0);this.J(this.Ay,0);this.Z.En=[this,this.Fa];this.Gender.LV(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.LV(A._GetAutoObject(A.Device.Helper).W);this.Breed.
LV(A._GetAutoObject(A.Device.Helper).W);this.I6.LV(A._GetAutoObject(A.Device.Helper
).W);this.BY.As([B=this.AnimalType,B.B$,B.Ca]);this.BY.CJ(this.AnimalType);this.
C_.As([B=this.Gender,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.C9.As([this,this.AvG
,this.AeD]);this.CF.Gi([this,this.D6,this.GI]);this.CF.LU([B=this.CF,B.FN]);this.
CF.LX(A.aaL(A.ach.Edit));this.CF.As([B=this.Breed,B.B$,B.Ca]);this.CF.CJ(this.Breed
);this.CF.Ang(this.Pi);this.Gd.Gi([this,this.D6,this.GI]);this.Gd.LU([B=this.Gd,
B.FN]);this.Gd.LX(A.aaL(A.ach.Edit));this.Gd.As([B=this.I6,B.B$,B.Ca]);this.Gd.CJ(
this.I6);this.Gd.Ang(this.Aso);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Z._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.I6._Done();this.Pi._Done();this.Aso._Done();this.BY._Done();this.C_._Done(
);this.C9._Done();this.CF._Done();this.Gd._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.I6._ReInit();this.
Pi._ReInit();this.Aso._ReInit();this.BY._ReInit();this.C_._ReInit();this.C9._ReInit(
);this.CF._ReInit();this.Gd._ReInit();this.Ay._ReInit();this.BY.T(A.aaR(A.acf.Afc
));this.C_.T(A.aaR(A.acf.Ae6));this.C9.T(A.aaR(A.acf.KE));this.CF.T(A.aaR(A.acf.
Breed));this.Gd.T(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aso)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wc={AyB:false,LL:function(G){if(A._GetAutoObject(A.Device.Device).Ao.Lf())A._GetAutoObject(
A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).Ao.HC().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gh();A._GetAutoObject(A.Device.Helper
).Ap0(A._GetAutoObject(A.Device.Helper).W);},AtT:function(){this.N.B2(A.jV);this.
N.C5(A.aaL(A.ach.AC8));this.N.Cf=[this,this.Ayo];},CA:function(G){if(!this.AyB){
this.AyB=true;A.pe([this,this.AcC],this);}else C.Aq3.CA.call(this,G);},Az1:function(
G){A._GetAutoObject(C.A1).BU(55);},_Init:function(aArg){C.Aq3._Init.call(this,aArg
);this.__proto__=C.Wc;this.JO(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IA={_Init:function(aArg){C.ACN._Init.call(this,aArg);this.__proto__=C.IA;this.
A9A(false);},_className:"Application::HeaderSelectedAnimalId"};C.IS={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Eg:null,Z:null,PV:null,ST:null,N_:
null,SU:null,Nf:null,Pg:null,RG:null,Ou:null,RH:null,Ny:null,Lb:null,Je:null,KT:
null,Mp:null,Yb:null,SV:null,RI:null,Ay:null,Axs:0,Axr:0,Auf:0,Aue:0,Aq2:0,Ash:0
,AuU:0,AuV:0,Al8:false,AnV:false,Init:function(aArg){A.zX([this,this.Au0],this.Lb.
Q,0);A.zX([this,this.Auk],this.Je.Q,0);A.zX([this,this.Bo4],this.KT.Q,0);A.zX([this
,this.Bjl],this.Mp.Q,0);A.zX([this,this.Bpy],this.Nf.Q,0);A.zX([this,this.Bpx],this.
N_.Q,0);A.zX([this,this.Bgj],this.Ny.Q,0);A.zX([this,this.Bgi],this.Ou.Q,0);this.
Bb(this.PV);},Dz:function(G){var E_=0;var X=this.AW;switch(this.Co.CN){case 6:E_=
2;break;case 7:E_=7;break;case 4:E_=4;break;case 5:E_=5;break;default:;}X=this.QA(
X,E_,0x414);if(!!X)this.Bb(X);this.MO(this);},CA:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ao.Filter)this.Bl(A._GetAutoObject(A.Device.Device).Ao.Filter.Fc(
));else this.Bl(A._NewObject(A.Device.Filter,0));},Er:function(G){A._GetAutoObject(
C.A1).Fr();},A2q:function(G){var Ez=(C.Ad7.isPrototypeOf(G)?G:null);if(!Ez)return;
var Au=this.Filter.DN(Ez.El,Ez.Operator);if(!!Au){this.Filter.N3(Au);A.abo([this
,this.Fg,this.Fk],0);}else{if(Ez.El===11){Au=A._NewObject(A.Device.BoolFilterCriterion
,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Au)?Au:null).A5=true;}else if(Ez.El===12){Au=A._NewObject(A.Device.BoolFilterCriterion
,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Au)?Au:null).A5=true;}else if(Ez.El===8){Au=A._NewObject(A.Device.BoolFilterCriterion
,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Au)?Au:null).A5=true;}else A.ab5("%s",AHg+Ez.El.toFixed());if(!!Au){this.Filter.
CV(Au);A.abo([this,this.Fg,this.Fk],0);}}},Bzj:function(G){A._GetAutoObject(A.Device.
Device).Ao.Bl(this.Filter);A._GetAutoObject(C.A1).Fr();},AzZ:function(G){var Ez=(
C.AmF.isPrototypeOf(G)?G:null);if(!Ez)return;var Au=this.Filter.DN(Ez.El,Ez.Operator
);if(!!Au){this.Filter.N3(Au);A.abo([this,this.Fg,this.Fk],0);}else{if(Ez.El===7
){Au=A._NewObject(A.Device.GenderFilterCriterion,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;
}else if(Ez.El===14){Au=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Au.EE=
Ez.El;Au.Operator=Ez.Operator;}else if((Ez.El===22)||(Ez.El===26)){var A0u=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0u.EE=Ez.El;A0u.Operator=0;Au=A0u;}else A.ab5(
"%s",AHg+Ez.El.toFixed());if(!!Au){this.Filter.CV(Au);A.abo([this,this.Fg,this.Fk
],0);}}},A9v:function(E){if(this.AuU===E)return;this.AuU=E;A.abo([this,this.Bj2,
this.A9v],0);},A9w:function(E){if(this.AuV===E)return;this.AuV=E;A.abo([this,this.
Bj3,this.A9w],0);},Au0:function(G){var F;this.A9w((F=this.Lb.Q,F[1].call(F[0])));
var Au=this.Filter.DN(7,0);if(!!Au){var Azj=(A.Device.GenderFilterCriterion.isPrototypeOf(
Au)?Au:null);if(!!Azj)Azj.A5=this.AuV;else A.ab5("%s",Afp);}},Auk:function(G){var
F;this.A9v((F=this.Je.Q,F[1].call(F[0])));var Au=this.Filter.DN(14,0);if(!!Au){var
US=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Au)?Au:null);if(!!US)US.A5=
this.AuU;else A.ab5("%s",Afp);}},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1
))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},A_a:function(
E){if(this.Ash===E)return;this.Ash=E;A.abo([this,this.BkC,this.A_a],0);},Bo4:function(
G){var F;this.A_a((F=this.KT.Q,F[1].call(F[0])));var Au=this.Filter.DN(22,1);if(
!!Au){var Ai0=(A.Device.UInt64FilterCriterion.isPrototypeOf(Au)?Au:null);if(!!Ai0
)switch(this.Ash){case 1:Ai0.Operator=5;break;case 0:Ai0.Operator=0;break;default:
A.ab5("%s%e",AHh,this.Ash);}else A.ab5("%s",Afp);}},A9I:function(E){if(this.Aq2===
E)return;this.Aq2=E;A.abo([this,this.Bkg,this.A9I],0);},Bjl:function(G){var F;this.
A9I((F=this.Mp.Q,F[1].call(F[0])));var Au=this.Filter.DN(26,1);if(!!Au){var Atx=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Au)?Au:null);if(!!Atx)switch(this.Aq2
){case 1:Atx.Operator=5;break;case 0:Atx.Operator=0;break;default:A.ab5("%s%e",AHh
,this.Aq2);}else A.ab5("%s",Afp);}},Bl:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PV.Bl([this,this.Fg,this.Fk]);this.ST.
Bl([this,this.Fg,this.Fk]);this.N_.Bl([this,this.Fg,this.Fk]);this.SU.Bl([this,this.
Fg,this.Fk]);this.Nf.Bl([this,this.Fg,this.Fk]);this.Pg.Bl([this,this.Fg,this.Fk
]);this.RG.Bl([this,this.Fg,this.Fk]);this.Ou.Bl([this,this.Fg,this.Fk]);this.RH.
Bl([this,this.Fg,this.Fk]);this.Ny.Bl([this,this.Fg,this.Fk]);this.Lb.Bl([this,this.
Fg,this.Fk]);this.Je.Bl([this,this.Fg,this.Fk]);this.KT.Bl([this,this.Fg,this.Fk
]);this.Mp.Bl([this,this.Fg,this.Fk]);this.Yb.Bl([this,this.Fg,this.Fk]);this.SV.
Bl([this,this.Fg,this.Fk]);this.RI.Bl([this,this.Fg,this.Fk]);this.ArF(false);A.
pe([this,this.A31],this);var Bdn=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DN(1,2))?B:null);if(!!Bdn){this.ArF(true);this.AFv(Bdn.A5);}var BcS=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DN(1,3))?B:null);if(!!
BcS){this.ArF(true);this.AFw(BcS.A5);}this.Arh(false);A.pe([this,this.A3U],this);
var Bdm=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DN(4,3))?B:null
);if(!!Bdm){this.Arh(true);this.AEh(A._GetAutoObject(A.Device.Helper).MN(Bdm.A5,
A._GetAutoObject(A.Device.Helper).Dw()));}var BcR=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DN(4,2))?B:null);if(!!BcR){this.Arh(true);this.AEj(A.
_GetAutoObject(A.Device.Helper).MN(BcR.A5,A._GetAutoObject(A.Device.Helper).Dw()
)+1);}var Azj=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DN(7,0
))?B:null);if(!!Azj)this.Lb.BC(this.Gender.DO(Azj.A5));var US=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DN(14,0))?B:null);if(!!US)this.Je.BC(this.AnimalType.
DO(US.A5));var Ai0=this.Filter.DN(22,1);if(!!Ai0){if(!Ai0.Operator)this.KT.BC(0);
else this.KT.BC(1);}var Atx=this.Filter.DN(26,1);if(!!Atx){if(!Atx.Operator)this.
Mp.BC(0);else this.Mp.BC(1);}},Fk:function(Aq){this.Bl(Aq);},AFw:function(E){if(
this.Axs===E)return;this.Axs=E;A.abo([this,this.A8Y,this.AFw],0);},AFv:function(
E){if(this.Axr===E)return;this.Axr=E;A.abo([this,this.A8X,this.AFv],0);},Bpy:function(
G){var F;this.AFw((F=this.Nf.Q,F[1].call(F[0])));var Au=this.Filter.DN(1,3);if(!
!Au){var AAZ=(A.Device.Int32FilterCriterion.isPrototypeOf(Au)?Au:null);if(!!AAZ)
AAZ.A5=this.Axs;else A.ab5("%s",Afp);}},Bpx:function(G){var F;this.AFv((F=this.N_.
Q,F[1].call(F[0])));var Au=this.Filter.DN(1,2);if(!!Au){var AAZ=(A.Device.Int32FilterCriterion.
isPrototypeOf(Au)?Au:null);if(!!AAZ)AAZ.A5=this.Axr;else A.ab5("%s",Afp);}},BdS:
function(G){var Ez=(C.Ajw.isPrototypeOf(G)?G:null);if(!Ez)return;var Au=this.Filter.
DN(Ez.El,Ez.Operator);if(!!Au){this.Filter.N3(Au);A.abo([this,this.Fg,this.Fk],0
);}else{if(Ez===this.ST){Au=A._NewObject(A.Device.Int32FilterCriterion,0);Au.EE=
Ez.El;Au.Operator=Ez.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Au)?Au:
null).A5=this.Axr;this.Bb(this.N_);}else if(Ez===this.SU){Au=A._NewObject(A.Device.
Int32FilterCriterion,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Au)?Au:null).A5=this.Axs;this.Bb(this.Nf);}if(!!Au){this.Filter.CV(
Au);A.abo([this,this.Fg,this.Fk],0);}}A.pe([this,this.A31],this);},A31:function(
G){var A1$=!!this.Filter.DN(this.N_.El,this.N_.Operator);var A32=!!this.Filter.DN(
this.Nf.El,this.Nf.Operator);A._GetAutoObject(A.Device.Helper).Mz(this.ST,this.AnV
);A._GetAutoObject(A.Device.Helper).Mz(this.SU,this.AnV);A._GetAutoObject(A.Device.
Helper).Mz(this.N_,A1$);A._GetAutoObject(A.Device.Helper).Mz(this.Nf,A32);},MO:function(
G){var B;this.Z.Vi(null,null);if(!!this.AW&&((this.AW.U&0x400)===0x400))this.Z.HA(
this.AW,true,null,null);},BAc:function(G){A.pe([this,this.Fa],this);A.pe([this,this.
MO],this);},Bzg:function(G){this.ArF(!this.AnV);if(this.AnV===false){var Au=this.
Filter.DN(this.PV.El,this.PV.Operator);while(!!Au){this.Filter.N3(Au);Au=this.Filter.
DN(this.PV.El,this.PV.Operator);}A.abo([this,this.Fg,this.Fk],0);}},ArF:function(
E){if(this.AnV===E)return;this.AnV=E;A.abo([this,this.A8W,this.ArF],0);A.pe([this
,this.A31],this);},AEj:function(E){if(this.Auf===E)return;this.Auf=E;A.abo([this
,this.A72,this.AEj],0);},AEh:function(E){if(this.Aue===E)return;this.Aue=E;A.abo([
this,this.A70,this.AEh],0);},Bgj:function(G){var F;this.AEj((F=this.Ny.Q,F[1].call(
F[0])));var Au=this.Filter.DN(4,2);if(!!Au){var AfB=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Au)?Au:null);if(!!AfB){var Aaw=A._GetAutoObject(A.Device.Helper).Zw(
this.Auf-1);AfB.A5=Aaw;}else A.ab5("%s",Afp);}},Bgi:function(G){var F;this.AEh((
F=this.Ou.Q,F[1].call(F[0])));var Au=this.Filter.DN(4,3);if(!!Au){var AfB=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Au)?Au:null);if(!!AfB){var Aaw=A._GetAutoObject(
A.Device.Helper).Zw(this.Aue);AfB.A5=Aaw;}else A.ab5("%s",Afp);}},A3U:function(G
){var A1$=!!this.Filter.DN(this.Ou.El,this.Ou.Operator);var A32=!!this.Filter.DN(
this.Ny.El,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).Mz(this.RG,this.Al8
);A._GetAutoObject(A.Device.Helper).Mz(this.RH,this.Al8);A._GetAutoObject(A.Device.
Helper).Mz(this.Ou,A1$);A._GetAutoObject(A.Device.Helper).Mz(this.Ny,A32);},Arh:
function(E){if(this.Al8===E)return;this.Al8=E;A.abo([this,this.A7Z,this.Arh],0);
A.pe([this,this.A3U],this);},BdR:function(G){var Ez=(C.Ajw.isPrototypeOf(G)?G:null
);if(!Ez)return;var Au=this.Filter.DN(Ez.El,Ez.Operator);if(!!Au){this.Filter.N3(
Au);A.abo([this,this.Fg,this.Fk],0);}else{if(Ez===this.RG){Au=A._NewObject(A.Device.
UInt32FilterCriterion,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Au)?Au:null).A5=A._GetAutoObject(A.Device.Helper).Zw(this.Aue);this.
Bb(this.Ou);}else if(Ez===this.RH){Au=A._NewObject(A.Device.UInt32FilterCriterion
,0);Au.EE=Ez.El;Au.Operator=Ez.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(
Au)?Au:null).A5=A._GetAutoObject(A.Device.Helper).Zw(this.Auf-1);this.Bb(this.Ny
);}if(!!Au){this.Filter.CV(Au);A.abo([this,this.Fg,this.Fk],0);}}A.pe([this,this.
A3U],this);},Bzf:function(G){this.Arh(!this.Al8);if(this.Al8===false){var Au=this.
Filter.DN(this.Pg.El,this.Pg.Operator);while(!!Au){this.Filter.N3(Au);Au=this.Filter.
DN(this.Pg.El,this.Pg.Operator);}A.abo([this,this.Fg,this.Fk],0);}},Fg:function(
){return this.Filter;},Bj3:function(){return this.AuV;},Bj2:function(){return this.
AuU;},BkC:function(){return this.Ash;},Bkg:function(){return this.Aq2;},A8Y:function(
){return this.Axs;},A8X:function(){return this.Axr;},A8W:function(){return this.
AnV;},A72:function(){return this.Auf;},A70:function(){return this.Aue;},A7Z:function(
){return this.Al8;},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Gender._Init.
call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);
C.ABe._Init.call(this.Transponder={I:this},0);C.ABe._Init.call(this.Eg={I:this},
0);A.Core.Z._Init.call(this.Z={I:this},0);C.ABr._Init.call(this.PV={I:this},0);C.
Ajw._Init.call(this.ST={I:this},0);C.Aa9._Init.call(this.N_={I:this},0);C.Ajw._Init.
call(this.SU={I:this},0);C.Aa9._Init.call(this.Nf={I:this},0);C.ABr._Init.call(this.
Pg={I:this},0);C.Ajw._Init.call(this.RG={I:this},0);C.ACg._Init.call(this.Ou={I:
this},0);C.Ajw._Init.call(this.RH={I:this},0);C.ACg._Init.call(this.Ny={I:this},
0);C.AmF._Init.call(this.Lb={I:this},0);C.AmF._Init.call(this.Je={I:this},0);C.AmF.
_Init.call(this.KT={I:this},0);C.AmF._Init.call(this.Mp={I:this},0);C.Qv._Init.call(
this.Yb={I:this},0);C.Qv._Init.call(this.SV={I:this},0);C.Qv._Init.call(this.RI={
I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.IS;var B;this.N.
Y(true);this.N.B2(A.aaR(A.acf.A4z));this.Dn(C.AO6);this.Gender.As(this.AuV);this.
AnimalType.As(this.AuU);this.Transponder.As(this.Ash);this.Eg.As(this.Aq2);this.
Z.H(E7);this.Z.Kg(1);this.PV.H(JS);this.PV.Aj(true);this.PV.T(A._GetAutoObject(A.
Device.Helper).AmD(0,1));this.PV.Na(1);this.ST.H(P4);this.ST.Aj(true);this.ST.T(
A.aaR(A.acf.ADE));this.ST.Na(1);this.ST.OL(2);this.N_.H(ZZ);this.N_.Na(1);this.N_.
OL(2);this.N_.AFn(A.aaR(A.acf.GF));this.SU.H(AkW);this.SU.Aj(true);this.SU.T(A.aaR(
A.acf.AGH));this.SU.Na(1);this.SU.OL(3);this.Nf.H(An8);this.Nf.Aj(true);this.Nf.
Na(1);this.Nf.OL(3);this.Nf.AFn(A.aaR(A.acf.GF));this.Pg.H(AWn);this.Pg.Aj(true);
this.Pg.T(A.aaR(A.acf.RF));this.Pg.Na(4);this.RG.H(AWo);this.RG.Aj(true);this.RG.
T(A.aaR(A.acf.ADE));this.RG.Na(4);this.RG.OL(3);this.Ou.H(AWp);this.Ou.Na(4);this.
Ou.OL(3);this.Ou.A9N(2);this.RH.H(AWq);this.RH.Aj(true);this.RH.T(A.aaR(A.acf.AGH
));this.RH.Na(4);this.RH.OL(2);this.Ny.H(AWr);this.Ny.Aj(true);this.Ny.Na(4);this.
Ny.OL(2);this.Ny.A9N(3);this.Lb.H(AsA);this.Lb.Aj(true);this.Lb.Na(7);this.Lb.Ahf(
0);this.Lb.OL(0);this.Je.H(W0);this.Je.Aj(true);this.Je.Na(14);this.Je.Ahf(0);this.
Je.OL(0);this.KT.H(W0);this.KT.Aj(true);this.KT.Na(22);this.KT.Ahf(0);this.KT.OL(
1);this.Mp.H(W0);this.Mp.Aj(true);this.Mp.Na(26);this.Mp.Ahf(0);this.Mp.OL(1);this.
Yb.H(W0);this.Yb.Aj(true);this.Yb.Na(11);this.Yb.Ahf(0);this.Yb.OL(0);this.SV.H(
W0);this.SV.Aj(true);this.SV.Na(12);this.SV.Ahf(0);this.SV.OL(0);this.RI.H(W0);this.
RI.Aj(true);this.RI.Na(8);this.RI.Ahf(0);this.RI.OL(0);this.Ay.H(IJ);this.J(this.
Z,0);this.J(this.PV,0);this.J(this.ST,0);this.J(this.N_,0);this.J(this.SU,0);this.
J(this.Nf,0);this.J(this.Pg,0);this.J(this.RG,0);this.J(this.Ou,0);this.J(this.RH
,0);this.J(this.Ny,0);this.J(this.Lb,0);this.J(this.Je,0);this.J(this.KT,0);this.
J(this.Mp,0);this.J(this.Yb,0);this.J(this.SV,0);this.J(this.RI,0);this.J(this.Ay
,0);this.N.Cz=[this,this.Er];this.N.Cf=[this,this.Bzj];this.N.CY(A.aaL(A.ach.EW)
);this.Z.En=[this,this.BAc];this.PV.AR=[this,this.Bzg];this.PV.As([this,this.A8W
,this.ArF]);this.ST.AR=[this,this.BdS];this.N_.Gi([this,this.D6,this.GI]);this.N_.
As([this,this.A8X,this.AFv]);this.SU.AR=[this,this.BdS];this.Nf.Gi([this,this.D6
,this.GI]);this.Nf.As([this,this.A8Y,this.AFw]);this.Pg.AR=[this,this.Bzf];this.
Pg.As([this,this.A7Z,this.Arh]);this.RG.AR=[this,this.BdR];this.Ou.Gi([this,this.
D6,this.GI]);this.Ou.As([this,this.A70,this.AEh]);this.RH.AR=[this,this.BdR];this.
Ny.Gi([this,this.D6,this.GI]);this.Ny.As([this,this.A72,this.AEj]);this.Lb.AR=[this
,this.AzZ];this.Lb.As([B=this.Gender,B.B$,B.Ca]);this.Lb.CJ(this.Gender);this.Je.
AR=[this,this.AzZ];this.Je.As([B=this.AnimalType,B.B$,B.Ca]);this.Je.CJ(this.AnimalType
);this.KT.AR=[this,this.AzZ];this.KT.As([B=this.Transponder,B.B$,B.Ca]);this.KT.
CJ(this.Transponder);this.Mp.AR=[this,this.AzZ];this.Mp.As([B=this.Eg,B.B$,B.Ca]
);this.Mp.CJ(this.Eg);this.Yb.AR=[this,this.A2q];this.SV.AR=[this,this.A2q];this.
RI.AR=[this,this.A2q];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.
Gender._Done();this.AnimalType._Done();this.Transponder._Done();this.Eg._Done();
this.Z._Done();this.PV._Done();this.ST._Done();this.N_._Done();this.SU._Done();this.
Nf._Done();this.Pg._Done();this.RG._Done();this.Ou._Done();this.RH._Done();this.
Ny._Done();this.Lb._Done();this.Je._Done();this.KT._Done();this.Mp._Done();this.
Yb._Done();this.SV._Done();this.RI._Done();this.Ay._Done();C.AB._Done.call(this);
},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit();this.AnimalType.
_ReInit();this.Transponder._ReInit();this.Eg._ReInit();this.Z._ReInit();this.PV.
_ReInit();this.ST._ReInit();this.N_._ReInit();this.SU._ReInit();this.Nf._ReInit(
);this.Pg._ReInit();this.RG._ReInit();this.Ou._ReInit();this.RH._ReInit();this.Ny.
_ReInit();this.Lb._ReInit();this.Je._ReInit();this.KT._ReInit();this.Mp._ReInit(
);this.Yb._ReInit();this.SV._ReInit();this.RI._ReInit();this.Ay._ReInit();this.N.
B2(A.aaR(A.acf.A4z));this.ST.T(A.aaR(A.acf.ADE));this.N_.AFn(A.aaR(A.acf.GF));this.
SU.T(A.aaR(A.acf.AGH));this.Nf.AFn(A.aaR(A.acf.GF));this.Pg.T(A.aaR(A.acf.RF));this.
RG.T(A.aaR(A.acf.ADE));this.RH.T(A.aaR(A.acf.AGH));},_Mark:function(D){var B;C.AB.
_Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Nf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListFilterScreen"};C.A_M={Zx:null,Bnj:function(BwO){var EA=A.
_NewObject(C.A_L,0);EA.AB=BwO;EA.Mq=this.Zx;this.Zx=EA;},A_q:function(){var U9=null;
if(!!this.Zx){U9=this.Zx.AB;this.Zx=this.Zx.Mq;}return U9;},Contains:function(Ak3
){var EA=this.Zx;while(!!EA){if(EA.AB.AnP===Ak3)return true;EA=EA.Mq;}return false;
},Bm$:function(){if(!!this.Zx)return this.Zx.AB;else return null;},_Init:function(
aArg){this.__proto__=C.A_M;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Zx)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenStack"};C.A_L={AB:null,Mq:null,_Init:function(
aArg){this.__proto__=C.A_L;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Mq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.ALM={ARl:function(){A._GetAutoObject(A.Device.Helper).Aw1(this.H1,0);A._GetAutoObject(
C.A1).Fr();},A7r:function(){this.H1.Cn(A._GetAutoObject(A.Device.Device).Bu);A._GetAutoObject(
C.A1).Fr();},A6r:function(){return A.aaL(A.ach.AmL);},_Init:function(aArg){C.AFO.
_Init.call(this,aArg);this.__proto__=C.ALM;this.Dn(C.IA);},_className:"Application::AnimalActionRateScreen"
};C.ALI={Wi:function(G){this.Age();this.IQ(A.aaR(A.acf.AUK),[this,this.AS9],5);this.
IQ(A.aaR(A.acf.A5b),[this,this.BkZ],4);this.IQ(A.aaR(A.acf.AFN),[this,this.ASU],
3);this.IQ(A.aaR(A.acf.AnJ),[this,this.Awq],2);this.IQ(A.aaR(A.acf.XB),[this,this.
AEm],1);this.IQ(A.aaR(A.acf.Aua),[this,this.AEg],0);A._GetAutoObject(C.BN).Fz();
A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.Al5)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Dz:function(G){},Aba:function(){return C.AMB;},Abb:function(
){return C.ACP;},Q3:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mm();var
Ayz=A._NewObject(A.Device.BoolFilterCriterion,0);Ayz.Initialize(8,0,true,true);Be.
CV(Ayz);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);},HK:function(G){C.GP.HK.call(
this,G);if(this.Aj3()===false){this.N.Cp(A.aaL(A.ach.AFW));this.N.Cj=[this,this.
A5I];this.N.FG(A.jV);}this.N.OM(false);this.N.ON(false);},Af1:function(){A._GetAutoObject(
C.A1).BU(41);},Af0:function(){A._GetAutoObject(C.A1).BU(43);},_Init:function(aArg
){C.GP._Init.call(this,aArg);this.__proto__=C.ALI;var B;this.Dn(C.AOv);this.Dx(A.
aaR(A.acf.A7y));this.Awk([B=A._GetAutoObject(A.Device.Device),B.A73,B.Bas]);},_ReInit:
function(){C.GP._ReInit.call(this);this.Dx(A.aaR(A.acf.A7y));},_className:"Application::AlarmListScreen"
};C.AM2={Dz:function(G){},AlF:function(G){if(!!this.Bh)A.ab5("%i",this.Bh.AD.Gk);
var Aa=(C.ABy.isPrototypeOf(G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper
).HH(Aa.Hj);A._GetAutoObject(C.A1).BU(13);}},Q3:function(G){var Be=A._GetAutoObject(
A.Device.Helper).Mm();var AyT=A._NewObject(A.Device.BoolFilterCriterion,0);AyT.Initialize(
9,0,true,true);Be.CV(AyT);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);},HK:function(
G){C.GP.HK.call(this,G);this.N.OM(false);this.N.ON(false);},_Init:function(aArg){
C.GP._Init.call(this,aArg);this.__proto__=C.AM2;this.Dn(C.AOx);this.Dx(A.aaR(A.acf.
A7z));},_ReInit:function(){C.GP._ReInit.call(this);this.Dx(A.aaR(A.acf.A7z));},_className:
"Application::ControlListScreen"};C.Ad7={Filter:null,El:0,I0:10,TableId:0,Operator:
1,CS:function(){var F;this.Tj((F=this.Filter,F[1].call(F[0])).DN(this.El,this.Operator
));},Bj:function(aSize){C.Cl.Bj.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[
0]-(2*this.I0),aSize[1]]));},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!
this.Filter)A.z$([this,this.L8],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.
L8],E,0);A.pe([this,this.L8],this);},L8:function(G){var F;if(!!this.Filter&&!!(F=
this.Filter,F[1].call(F[0])))this.Tj((F=this.Filter,F[1].call(F[0])).DN(this.El,
this.Operator));else this.Tj(null);},Ahf:function(E){if(this.TableId===E)return;
this.TableId=E;A.pe([this,this.L8],this);},Na:function(E){if(this.El===E)return;
this.El=E;A.pe([this,this.L8],this);},Tj:function(AH){if(!!AH)this.T(A._GetAutoObject(
A.Device.Helper).A6l(this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper
).AmD(this.TableId,this.El));},OL:function(E){if(this.Operator===E)return;this.Operator=
E;A.pe([this,this.L8],this);},_Init:function(aArg){C.Cl._Init.call(this,aArg);this.
__proto__=C.Ad7;this.V.H(AHi);this.V.A7(0x11);},_ReInit:function(){C.Cl._ReInit.
call(this);this.CS();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.
Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"
};C.Qv={H0:null,Bj:function(aSize){var B;C.Ad7.Bj.call(this,aSize);this.H0.H([(aSize[
0]-((B=this.H0.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I0,0,this.
H0.M[0]-this.I0,aSize[1]]);},Tj:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmD(this.TableId,this.El));var Au=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Au&&Au.A5)this.H0.Cx(1);else this.H0.Cx(0);},_Init:function(aArg
){C.Ad7._Init.call(this,aArg);A.acg.Am._Init.call(this.H0={I:this},0);this.__proto__=
C.Qv;this.H0.H(AHj);this.H0.Cx(0);this.J(this.H0,0);this.H0.Ax(A.aaL(A.ach.Aqq));
},_Done:function(){this.__proto__=C.Ad7;this.H0._Done();C.Ad7._Done.call(this);}
,_ReInit:function(){C.Ad7._ReInit.call(this);this.H0._ReInit();},_Mark:function(
D){var B;C.Ad7._Mark.call(this,D);if((B=this.H0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.AO6={Am:null,Text:null,Dc:function(
E){C.BR.Dc.call(this,E);this.Text.L(E);this.Am.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AO6;this.Am.H(AWs);this.Text.H(AWt);this.
Text.A7(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Am,0);this.J(this.Text
,0);this.Am.Ax(A.aaL(A.ach.Aeg));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Am._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Am._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjG={
AV:null,TX:null,JE:null,CT:null,A$:null,Init:function(aArg){var B;A.zX([this,this.
D2],[B=A._GetAutoObject(A.Device.Device).Ao,B.Fg,B.Fk],0);A.pe([this,this.D2],this
);},Bj:function(aSize){var B;C.BR.Bj.call(this,aSize);this.TX.H(A.abJ(this.TX.M,
A.abe(this.AV.M.slice(0,2),AWu)));this.TX.H(A.abK(this.TX.M,A.abf([(B=this.AV.M)[
2]-B[0],B[3]-B[1]],AWv)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var Ir=((
Ae&0x40)===0x40)&&(this.AW===this.AV);if(Ir)this.TX.L(A.jb.AW);else this.TX.L(A.
jb.AmN);},Dc:function(E){C.BR.Dc.call(this,E);this.JE.L(E);this.CT.AeH(E);},Wj:function(
E){C.BR.Wj.call(this,E);this.CT.CX(E);},Aj$:function(){return this.AV.Aj$();},AvO:
function(){return this.AV.AvO();},D2:function(G){this.CT.T(A._GetAutoObject(A.Device.
Device).Ao.Cd().toFixed());},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AV.
_Init.call(this.AV={I:this},0);A.acg.CC._Init.call(this.TX={I:this},0);A.acg.Am.
_Init.call(this.JE={I:this},0);C.CT._Init.call(this.CT={I:this},0);A.acg.DR._Init.
call(this.A$={I:this},0);this.__proto__=C.AjG;this.AV.H(AWw);this.TX.H(AWx);this.
TX.NY(2);this.JE.H(AWy);this.JE.L(A.jb.C2);this.CT.A3(0x14);this.CT.H(AWz);this.
CT.AeH(A.jb.Bm);this.CT.CX(A.jb.ZF);this.CT.Hq(2);this.A$.DI(AWA);this.A$.DY(AWB
);this.A$.L(A.jb.Bc);this.J(this.AV,0);this.J(this.TX,0);this.J(this.JE,0);this.
J(this.CT,0);this.J(this.A$,0);this.Bb(this.AV);this.JE.Ax(A.aaL(A.ach.JE));this.
CT.S(A.aaL(A.fl.Bk));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.
AV._Done();this.TX._Done();this.JE._Done();this.CT._Done();this.A$._Done();C.BR.
_Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.AV._ReInit();
this.TX._ReInit();this.JE._ReInit();this.CT._ReInit();this.A$._ReInit();this.CT.
S(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DB={Dk:null,Ii:null,Ih:null,AfX:function(G){if(this.E1<0)this.LW(1);else if(
this.E1===9)this.LW(0);else this.LW(this.E1+1);A.pe(this.Dk,this);},Ai:function(
Ae){var B;C.E1.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);var Ir=((Ae&0x40)===0x40
);if(Ir){this.Background.L(A.jb.AW);this.Text.L(A.jb.Bm);this.Do(256);}else if(G8
){this.Background.L(this.MZ);this.Text.L(A.jb.Text);this.Do(256);}else{this.Background.
L(this.MZ);this.Text.L(A.jb.Text);this.Do(128);}},AfW:function(G){if(this.E1<=0)
this.LW(9);else this.LW(this.E1-1);A.pe(this.Dk,this);},_Init:function(aArg){C.E1.
_Init.call(this,aArg);A.Core.BL._Init.call(this.Ii={I:this},0);A.Core.BL._Init.call(
this.Ih={I:this},0);this.__proto__=C.DB;this.Ii.Filter=4;this.Ih.Filter=5;this.Ii.
BM=[this,this.AfX];this.Ii.DX=[this,this.AfX];this.Ih.BM=[this,this.AfW];this.Ih.
DX=[this,this.AfW];},_Done:function(){this.__proto__=C.E1;this.Ii._Done();this.Ih.
_Done();C.E1._Done.call(this);},_ReInit:function(){C.E1._ReInit.call(this);this.
Ii._ReInit();this.Ih._ReInit();},_Mark:function(D){var B;C.E1._Mark.call(this,D);
if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.AV={Dk:null,Cr:null,CU:null,Du:null,Ek:null,FS:null
,EO:null,Fe:null,E3:null,M4:0,AQD:false,Ap7:false,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);if(((Ae&0x40)===0x40)&&this.Ap7)this.EO.AeE(true);else this.EO.
AeE(false);},Awg:function(E){var B;if(E===this.Aj$())return;var AfS=E;var DT=this.
EO;while(!!DT){if(AfS>0){DT.LW(AfS%10);AfS=(AfS/10)|0;}else DT.LW(-1);DT=(C.DB.isPrototypeOf(
B=this.QA(DT,2,0x11))?B:null);}},Aj$:function(){return A.wz(this.AvO(),-1,10);},
On:function(G){if(this.FS.E1>=0)this.Bfu(7);},MU:function(G){if(((this.Aj$()>0)||
this.AQD)&&(this.Cr.E1<0))this.Bfu(2);else if(this.Aj$()<=0)this.E3.NC=true;},Adc:
function(G){A.pe(this.Dk,this);},Bfu:function(Gs){var B;var AK0=0;var DT=null;switch(
Gs){case 2:{DT=this.Cr;AK0=7;}break;case 7:{DT=this.EO;AK0=2;}break;default:throw new
Error(AWC);}while(!!DT){var A2j=(C.DB.isPrototypeOf(B=this.QA(DT,AK0,0x11))?B:null
);if(!!A2j)DT.LW(A2j.E1);else if(AK0===7)DT.LW(0);else DT.LW(-1);DT=A2j;}A.pe([this
,this.Adc],this);},AeE:function(E){if(this.Ap7===E)return;this.Ap7=E;this.An();}
,Bl7:function(E){if(this.AQD===E)return;this.AQD=E;},ASy:function(E){var B;if(E===
this.AvO())return;var AfS=E;var DT=this.EO;while(!!DT){if(AfS.length>0){DT.LW(A.
wz(A.ab2(AfS,1),-1,10));AfS=A.abV(AfS,AfS.length-1);}else DT.LW(-1);DT=(C.DB.isPrototypeOf(
B=this.QA(DT,2,0x11))?B:null);}},AvO:function(){var B;var Ky=A.jV;var P=0;var B6=
this.Cr;for(;P<6;P=P+1){if(!!B6&&(B6.E1>=0))Ky=Ky+B6.E1.toFixed();B6=(C.DB.isPrototypeOf(
B=this.TH(B6,0x11))?B:null);}A.ab5("%s",Ky);return Ky;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.DB._Init.call(this.Cr={I:this},0);C.DB._Init.call(this.
CU={I:this},0);C.DB._Init.call(this.Du={I:this},0);C.DB._Init.call(this.Ek={I:this
},0);C.DB._Init.call(this.FS={I:this},0);C.DB._Init.call(this.EO={I:this},0);A.Core.
BL._Init.call(this.Fe={I:this},0);A.Core.BL._Init.call(this.E3={I:this},0);this.
__proto__=C.AV;this.H(AxO);this.Cr.A3(0x3);this.Cr.H(AHk);this.CU.A3(0x3);this.CU.
H(AHl);this.Du.A3(0x3);this.Du.H(AHm);this.Ek.A3(0x3);this.Ek.H(AHn);this.FS.A3(
0x3);this.FS.H(AHo);this.EO.A3(0x3);this.EO.H(AHp);this.EO.LW(0);this.Fe.Filter=
6;this.E3.Filter=7;this.M4=A.jb.CI;this.J(this.Cr,0);this.J(this.CU,0);this.J(this.
Du,0);this.J(this.Ek,0);this.J(this.FS,0);this.J(this.EO,0);this.Bb(this.EO);this.
Cr.Dk=[this,this.Adc];this.CU.Dk=[this,this.Adc];this.Du.Dk=[this,this.Adc];this.
Ek.Dk=[this,this.Adc];this.FS.Dk=[this,this.Adc];this.EO.Dk=[this,this.Adc];this.
Fe.BM=[this,this.On];this.E3.BM=[this,this.MU];},_Done:function(){this.__proto__=
A.Core.O;this.Cr._Done();this.CU._Done();this.Du._Done();this.Ek._Done();this.FS.
_Done();this.EO._Done();this.Fe._Done();this.E3._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Cr._ReInit();this.CU._ReInit(
);this.Du._ReInit();this.Ek._ReInit();this.FS._ReInit();this.EO._ReInit();this.Fe.
_ReInit();this.E3._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Du)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputID"};C.BgW="4b39a10d";C.BBN={Undefined:
0,BCP:1,BB4:2};C.Aks={Th:null,AiI:null,K9:null,AM6:null,AnS:null,push:function(MH
){if(!this.Th){MH.Ahi=null;MH.Mq=null;this.Th=MH;this.AiI=this.Th;}else{MH.Ahi=this.
AiI;MH.Mq=null;this.AiI.Mq=MH;this.AiI=MH;}},BAN:function(MH){var Qa=this.Th;while(
!!Qa){if(Qa.JC.Id===MH.Id)return Qa;Qa=Qa.Mq;}return Qa;},BAv:function(MH){if(MH===
this.Th)this.pop();else if(MH===this.AiI){MH=MH.Ahi;if(!!MH)MH.Mq=null;this.AiI=
MH;}else{MH.Ahi.Mq=MH.Mq;MH.Mq.Ahi=MH.Ahi;}},Ag_:function(E){var F;if(this.K9===
E)return;this.K9=E;if(!!this.K9)this.K9.Agt(2);(F=this.AM6,F[2].call(F[0],this.K9
));},U6:function(G){var Qa=(C.ATl.isPrototypeOf(G)?G:null);if(!!Qa){if(!Qa.JC.PopupState
){if(!this.K9)this.Ag_(this.top());}else if(Qa.JC.PopupState===4){this.pop();this.
Ag_(this.top());}else if(Qa.JC.PopupState===5){this.pop();this.Ag_(this.top());}
else if(Qa.JC.PopupState===7){this.pop();this.Ag_(this.top());}else if(Qa.JC.PopupState===
8){this.pop();this.Ag_(this.top());}else if(Qa.JC.PopupState===6){if(Qa===this.K9
){this.pop();this.Ag_(this.top());}else this.BAv(Qa);}else if(Qa.JC.PopupState===
3){this.pop();this.Ag_(this.top());}}},pop:function(){var AKl=null;if(!!this.Th){
AKl=this.Th;if(this.Th===this.AiI){this.Th=null;this.AiI=null;}else{this.Th=this.
Th.Mq;if(!this.Th)throw new Error(AWD);this.Th.Ahi=null;}AKl.Ahi=null;AKl.Mq=null;
}return AKl;},top:function(){return this.Th;},BAd:function(G){var B;var Aty=(A.Device.
PopupContext.isPrototypeOf(B=this.AnS.JC)?B:null);if(!!Aty){var A3y=this.BAN(Aty
);if(!!A3y){A3y.A9m(Aty);if(!Aty.Show)A3y.Agt(6);}else if(Aty.Show){var AJ1=A._NewObject(
C.ATl,0);AJ1.A9m(Aty);AJ1.ASi=[this,this.U6];this.push(AJ1);AJ1.Agt(0);}}},_Init:
function(aArg){A.Core.A_8._Init.call(this.AnS={I:this},0);this.__proto__=C.Aks;this.
AnS.ARL=[this,this.BAd];this.AnS.Blq(A._GetAutoObject(A.Device.Device).Anv);A.h7++;
},_Done:function(){this.__proto__=null;this.AnS._Done();A.h7--;},_ReInit:function(
){this.AnS._ReInit();},_Mark:function(D){var B;if((B=this.Th)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K9)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AM6)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AnS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATl={SX:null,Mq:null,Ahi:null,JC:null,ASi:null,PopupIdToString:null,Ah8:function(
BvU,Bws,BwN,BwD,BwF,BwC,Bwb){var U8=A._NewObject(C.ATk,0);U8.Bmx(this.JC.Id);U8.
A94(BvU);U8.ASj=BwC;U8.A96(this.JC.AkL);U8.A9S(this.JC.Akr);U8.Bz=A._NewObject(C.
N,0);U8.KN().Cf=BwF;U8.KN().Cj=null;U8.KN().Cz=BwD;U8.KN().B2(BwN);U8.KN().Cp(null
);U8.KN().Hr(Bws);U8.KN().AEP(Bwb);return U8;},Akb:function(){if(!this.SX){var AiG=
this.PopupIdToString.BS(this.JC.Id);switch(this.JC.Id){case 46:this.SX=this.Ah8(
AiG,A.jV,A.aaR(A.acf.Ok),null,[this,this.AJ5],[this,this.AiA],1);break;case 91:case
92:this.SX=this.Ah8(AiG,A.jV,A.jV,null,null,[this,this.AiA],0);break;case 39:this.
SX=this.Ah8(AiG,A.aaR(A.acf.Amh),A.aaR(A.acf.Ok),[this,this.A2x],[this,this.A2y]
,[this,this.AiA],3);break;case 13:this.SX=this.Ah8(AiG,A.aaR(A.acf.Amh),A.aaR(A.
acf.Bnu),[this,this.A2w],[this,this.AJ5],[this,this.AiA],3);break;case 25:this.SX=
this.Ah8(AiG,A.aaR(A.acf.Amh),A.aaR(A.acf.Ok),[this,this.A2w],[this,this.AJ5],[this
,this.AiA],3);break;case 16:case 24:case 49:case 74:this.SX=this.Ah8(AiG,A.aaR(A.
acf.Amh),A.jV,[this,this.A2w],null,[this,this.AiA],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.SX=this.Ah8(AiG,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2x],[this,this.A2y],[this,this.AiA],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.SX=this.Ah8(AiG,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AJ5],[this,this.AiA],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.SX=
this.Ah8(AiG,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2x],[this,this.A2y],[this
,this.AiA],3);break;default:A.ab5("%s",(AWE+this.JC.Id.toFixed())+AWF);}}switch(
this.JC.Id){case 16:case 49:this.SX.A_i(true);break;case 91:case 92:this.SX.A_i(
false);break;default:;}return this.SX;},AJ5:function(G){this.Agt(4);},A2w:function(
G){this.Agt(5);},A2y:function(G){this.Agt(7);},A2x:function(G){this.Agt(8);},AiA:
function(G){this.Agt(3);},A9m:function(E){if(this.JC===E)return;this.JC=E;if(!!this.
SX){this.Akb().A96(this.JC.AkL);this.Akb().A9S(this.JC.Akr);}},Agt:function(BwI){
var B;this.JC.Bmy(BwI);(B=this.ASi)?B[1].call(B[0],this):null;},BzN:function(G){
this.Agt(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATl;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.SX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahi)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASi)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.FX={BooleanToYesNo:null,Dr:function(
){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.FX;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Ae5={Uj:null,J2:function(G){var F;var BQ=this.AM;this.BC(this.AM+1);if(this.
AM!==BQ){if(!!this.Uj&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Uj,F[
2].call(F[0],false));break;case 1:(F=this.Uj,F[2].call(F[0],true));break;default:;
}A.abo(this.Uj,0);}},JX:function(G){var F;var BQ=this.AM;this.BC(this.AM-1);if(this.
AM!==BQ){if(!!this.Uj&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Uj,F[
2].call(F[0],false));break;case 1:(F=this.Uj,F[2].call(F[0],true));break;default:;
}A.abo(this.Uj,0);}},Akl:function(E){if(A.aaZ(this.Uj,E))return;if(!!this.Q)A.z$([
this,this.A3a],this.Uj,0);this.Uj=E;if(!!E)A.zX([this,this.A3a],E,0);if(!!E)A.pe([
this,this.A3a],this);},A3a:function(G){var F;if(!!this.Uj){if((F=this.Uj,F[1].call(
F[0])))this.BC(1);else this.BC(0);}},_Init:function(aArg){C.BZ._Init.call(this,aArg
);this.__proto__=C.Ae5;this.JO(this.V,-1);},_Mark:function(D){var B;C.BZ._Mark.call(
this,D);if((B=this.Uj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ATC={I5:null,OS:null,II:null,Gc:null,AL:null,Aa1:null,Agy:null,TC:null,R2:null
,Acl:null,WI:null,Ha:null,AAY:true,Init:function(aArg){var B;A.zX([this,this.AlI
],[B=A._GetAutoObject(A.Device.Device),B.AR$,B.AZP],0);A.pe([this,this.AlI],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.AAY)this.N.C5(A.aaL(A.ach.
AQj));else this.N.C5(A.aaL(A.ach.AQk));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OS.L(A.jb.Bm);this.R2.Y(false);this.TC.Y(false);this.II.Y(true);this.Gc.
Ar(false);(F=this.Gc.Q,F[2].call(F[0],this.Gc.B3));this.Background.L(A.jb.F$);}else
if(this.Aa1.By){this.OS.L(A.jb.Text);this.R2.Y(true);this.TC.Y(true);this.II.Y(false
);this.Gc.Ar(false);(F=this.Gc.Q,F[2].call(F[0],this.Gc.B3));this.Background.L(A.
jb.EV);}else{this.OS.L(A.jb.Text);this.R2.Y(false);this.TC.Y(false);this.II.Y(true
);this.Gc.Ar(true);this.Background.L(A.jb.CI);}if(this.Agy.By)this.WI.Y(true);else
this.WI.Y(false);},CA:function(G){A._GetAutoObject(A.Device.Device).Ahs();},EX:function(
G){A._GetAutoObject(A.Device.Device).AnH();A._GetAutoObject(A.Device.Device).AeR(
false);A._GetAutoObject(A.Device.Device).Uh(false);},AlI:function(G){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
Bzs],this);break;case 3:{A.pe([this,this.Ber],this);A.pe([B=this.Aa1,B.Axc],this
);A.pe(this.Aa1.Mv,this);}break;case 4:A.ab5("%s",AWG);break;default:;}},Er:function(
G){A._GetAutoObject(C.A1).Fr();},BAe:function(G){this.BmZ(!this.AAY);},BmZ:function(
E){if(this.AAY===E)return;this.AAY=E;if(!E)A._GetAutoObject(A.Device.Device).AeR(
false);this.An();},Bzs:function(G){var B;this.Ber(this);if(this.AAY)A._GetAutoObject(
A.Device.Device).AeR(true);A._GetAutoObject(A.Device.Device).Wn(65280);A._GetAutoObject(
A.Device.Device).Uh(true);A.pe([B=this.Aa1,B.StartTimer],this);A.pe([B=this.Agy,
B.StartTimer],this);this.An();},Bzt:function(G){A._GetAutoObject(A.Device.Device
).AeR(false);A._GetAutoObject(A.Device.Device).Uh(false);this.An();},Bzv:function(
G){this.An();},Ber:function(G){A._GetAutoObject(A.Device.Device).Ahs();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.I5._Init.call(this.I5={I:this},0);C.CG._Init.
call(this.OS={I:this},0);A.acg.Am._Init.call(this.II={I:this},0);A.acl.Gc._Init.
call(this.Gc={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Aa1={I:this},0);A.Core.Timer._Init.call(this.Agy={I:this},0);A.acg.Am.
_Init.call(this.TC={I:this},0);A.acg.Am._Init.call(this.R2={I:this},0);A.acg.Text.
_Init.call(this.Acl={I:this},0);C.WI._Init.call(this.WI={I:this},0);C.CG._Init.call(
this.Ha={I:this},0);this.__proto__=C.ATC;var B;this.Background.L(A.jb.CI);this.N.
Y(true);this.I5.H(AWH);this.I5.Ako(0);this.OS.H(AWI);this.OS.R(A.aaR(A.acf.A$b));
this.OS.L(A.jb.Text);this.II.H(AWJ);this.II.L(A.jb.AW);this.II.Y$(true);this.Gc.
Fi(1750);this.Gc.Ue(750);this.Gc.Akj(0);this.Gc.Ar(true);this.Gc.B3=3;this.AL.H(
AxP);this.Aa1.PN(-1);this.Aa1.Wk(1000);this.Agy.PN(-1);this.Agy.Wk(5000);this.TC.
H(AHq);this.R2.H(AHq);this.R2.L(A.jb.EV);this.Acl.H(AxP);this.Acl.R(A.aaR(A.acf.
A_N));this.Acl.L(A.jb.Text);this.WI.H(AxP);this.Ha.H(AWK);this.Ha.Ar(false);this.
Ha.R(A.aaR(A.acf.RangeTest));this.Ha.L(A.jb.Text);this.J(this.I5,0);this.J(this.
OS,0);this.J(this.II,0);this.J(this.AL,0);this.J(this.TC,0);this.J(this.R2,0);this.
J(this.Acl,0);this.J(this.WI,0);this.J(this.Ha,0);this.N.Cz=[this,this.Er];this.
N.Cf=[this,this.BAe];this.N.CY(A.aaL(A.ach.EW));this.OS.S(A.aaL(A.fl.Af));this.OS.
A2(A.aaL(A.fl.Ak));this.OS.Cs(A.aaL(A.fl.Bk));this.II.Ax(A.aaL(A.ach.ADf));this.
Gc.Q=[B=this.II,B.ARY,B.Cx];this.Aa1.Mv=[this,this.Bzt];this.Agy.Mv=[this,this.Bzv
];this.TC.Ax(A.aaL(A.ach.TC));this.R2.Ax(A.aaL(A.ach.R2));this.Acl.S(A.aaL(A.fl.
Af));this.WI.As([B=A._GetAutoObject(A.Device.Device),B.ASa,B.AZQ]);this.Ha.S(A.aaL(
A.fl.Kb));this.Ha.A2(A.aaL(A.fl.Ic));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.I5._Done();this.OS._Done();this.II._Done();this.Gc._Done();this.AL._Done(
);this.Aa1._Done();this.Agy._Done();this.TC._Done();this.R2._Done();this.Acl._Done(
);this.WI._Done();this.Ha._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.I5._ReInit();this.OS._ReInit();this.II._ReInit();this.Gc.
_ReInit();this.AL._ReInit();this.Aa1._ReInit();this.Agy._ReInit();this.TC._ReInit(
);this.R2._ReInit();this.Acl._ReInit();this.WI._ReInit();this.Ha._ReInit();this.
OS.R(A.aaR(A.acf.A$b));this.Acl.R(A.aaR(A.acf.A_N));this.Ha.R(A.aaR(A.acf.RangeTest
));this.OS.S(A.aaL(A.fl.Af));this.OS.A2(A.aaL(A.fl.Ak));this.OS.Cs(A.aaL(A.fl.Bk
));this.Acl.S(A.aaL(A.fl.Af));this.Ha.S(A.aaL(A.fl.Kb));this.Ha.A2(A.aaL(A.fl.Ic
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.I5)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbD={
ScreenType:0,NW:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},NZ:
function(G){A._GetAutoObject(C.A1).BU(this.ScreenType);},_Init:function(aArg){C.
Cl._Init.call(this,aArg);this.__proto__=C.AbD;},_className:"Application::MenuItemScreen"
};C.T5={AdP:null,Mh:null,Ami:false,Init:function(aArg){},Ai:function(Ae){C.Cl.Ai.
call(this,Ae);if(this.Ami){this.Mh.Cx(1);this.Mh.L(A.jb.H2);}else{this.Mh.Cx(0);
if(this.KA)this.Mh.L(A.jb.Bm);else if(this.Hc)this.Mh.L(A.jb.Text);else this.Mh.
L(A.jb.Bm);}},IO:function(G){var F,CP;if(!!this.AdP){(CP=this.AdP,CP[2].call(CP[
0],!(F=this.AdP,F[1].call(F[0]))));this.AEu((F=this.AdP,F[1].call(F[0])));A.pe([
this,this.DG],this);}},A2D:function(G){this.KA=true;this.DG(this);},AEu:function(
E){if(this.Ami===E)return;this.Ami=E;this.DG(this);this.An();},A25:function(G){var
F;this.AEu((F=this.AdP,F[1].call(F[0])));},AZ9:function(s){this.A25(s);},DG:function(
G){var F;if(!this.N||!this.KA)return;if(this.Ami){(F=this.N,F[1].call(F[0])).B2(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HM.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).B2(A.aaR(A.acf.A7O));(F=this.N,F[1].call(F[0])).HM.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},ASo:function(E){if(A.aaZ(this.AdP,E))
return;if(!!this.AdP)A.z$([this,this.AZ9],this.AdP,0);this.AdP=E;if(!!E)A.zX([this
,this.AZ9],E,0);if(!!E)A.pe([this,this.AZ9],this);},_Init:function(aArg){C.Cl._Init.
call(this,aArg);A.acg.Am._Init.call(this.Mh={I:this},0);this.__proto__=C.T5;this.
V.L(A.jb.H2);this.Mh.H(AHr);this.Mh.Cx(0);this.J(this.Mh,0);this.Mh.Ax(A.aaL(A.ach.
Aqq));this.Init(aArg);},_Done:function(){this.__proto__=C.Cl;this.Mh._Done();C.Cl.
_Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.Mh._ReInit();
},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.AdP)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANa={HZ:null,ID:null,_Init:function(aArg){C.Ct.
_Init.call(this,aArg);C.SE._Init.call(this.HZ={I:this},0);C.AGb._Init.call(this.
ID={I:this},0);this.__proto__=C.ANa;var B;this.JK(A.aaR(A.acf.ABZ));this.HZ.H(AhL
);this.HZ.Aj(true);this.HZ.T(A.aaR(A.acf.Date));this.HZ.Bi(true);this.ID.H(W1);this.
ID.Aj(true);this.ID.T(A.aaR(A.acf.Bw));this.J(this.HZ,-1);this.J(this.ID,-1);this.
HZ.AeB([B=this.HZ,B.FN]);this.HZ.Gi([this,this.D6,this.GI]);this.HZ.Aki(A.aaL(A.
ach.Edit));this.HZ.AbT([B=A._GetAutoObject(A.Device.Helper),B.UP,B.UQ]);this.ID.
AeB([B=this.ID,B.FN]);this.ID.Gi([this,this.D6,this.GI]);this.ID.Aki(A.aaL(A.ach.
Edit));this.ID.AbT([B=A._GetAutoObject(A.Device.Helper),B.UP,B.UQ]);},_Done:function(
){this.__proto__=C.Ct;this.HZ._Done();this.ID._Done();C.Ct._Done.call(this);},_ReInit:
function(){C.Ct._ReInit.call(this);this.HZ._ReInit();this.ID._ReInit();this.JK(A.
aaR(A.acf.ABZ));this.HZ.T(A.aaR(A.acf.Date));this.ID.T(A.aaR(A.acf.Bw));},_Mark:
function(D){var B;C.Ct._Mark.call(this,D);if((B=this.HZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUA={Q9:null,FA:null,BY:null,OG:null,Yv:null,AaK:null,_Init:function(aArg){C.
Ct._Init.call(this,aArg);C.Q9._Init.call(this.Q9={I:this},0);C.AL8._Init.call(this.
FA={I:this},0);C.AT$._Init.call(this.BY={I:this},0);C.AUb._Init.call(this.OG={I:
this},0);C.Ae5._Init.call(this.Yv={I:this},0);C.AaK._Init.call(this.AaK={I:this}
,0);this.__proto__=C.AUA;var B;this.JK(A.aaR(A.acf.Temperature));this.FA.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BY.H(AWL);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.
Aq0));this.BY.Bi(false);this.OG.H(Z0);this.OG.Aj(true);this.OG.T(A.aaR(A.acf.Undertemperature
));this.OG.Bi(true);this.OG.BC(3800);this.OG.Gp(3000);this.OG.E4(5000);this.OG.A_b(
A.aaR(A.acf.AGo));this.Yv.H(AWM);this.Yv.Aj(true);this.Yv.Y(true);this.Yv.T(A.aaR(
A.acf.A4x));this.J(this.BY,0);this.J(this.OG,0);this.J(this.Yv,0);this.BY.AeB([B=
this.BY,B.FN]);this.BY.Gi([this,this.D6,this.GI]);this.BY.Aki(A.aaL(A.ach.Edit));
this.BY.LU([B=this.BY,B.Ayp]);this.BY.LX(A.aaL(A.ach.Any));this.BY.As([B=this.FA
,B.B$,B.Ca]);this.BY.CJ(this.FA);this.BY.A9Q([B=this.FA,B.ASh,B.AZW]);this.BY.A9P([
B=this.FA,B.ASg,B.AZV]);this.OG.LU([B=this.BY,B.Ayp]);this.OG.LX(A.aaL(A.ach.Any
));this.OG.As([B=A._GetAutoObject(A.Device.Device),B.A8U,B.BaR]);this.Yv.CJ(this.
AaK);this.Yv.Akl([B=A._GetAutoObject(A.Device.Device),B.A8d,B.BaB]);},_Done:function(
){this.__proto__=C.Ct;this.Q9._Done();this.FA._Done();this.BY._Done();this.OG._Done(
);this.Yv._Done();this.AaK._Done();C.Ct._Done.call(this);},_ReInit:function(){C.
Ct._ReInit.call(this);this.Q9._ReInit();this.FA._ReInit();this.BY._ReInit();this.
OG._ReInit();this.Yv._ReInit();this.AaK._ReInit();this.JK(A.aaR(A.acf.Temperature
));this.BY.T(A.aaR(A.acf.Aq0));this.OG.T(A.aaR(A.acf.Undertemperature));this.OG.
A_b(A.aaR(A.acf.AGo));this.Yv.T(A.aaR(A.acf.A4x));},_Mark:function(D){var B;C.Ct.
_Mark.call(this,D);if((B=this.Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANo={PC:null,PD:null,Sk:null,VM:null,Sm:null,Sl:null,FX:null,Acc:null,Init:function(
aArg){A.zX([this,this.Boe],this.PD.Q,0);},Boe:function(G){var F;A._GetAutoObject(
A.Device.Device).AwC((F=this.PD.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ct.
_Init.call(this,aArg);C.I1._Init.call(this.PC={I:this},0);C.BZ._Init.call(this.PD={
I:this},0);C.Ae5._Init.call(this.Sk={I:this},0);C.I1._Init.call(this.VM={I:this}
,0);C.Ae5._Init.call(this.Sm={I:this},0);C.Ae5._Init.call(this.Sl={I:this},0);C.
FX._Init.call(this.FX={I:this},0);C.Acc._Init.call(this.Acc={I:this},0);this.__proto__=
C.ANo;var B;this.N.H(W0);this.JK(A.aaR(A.acf.Device));this.PC.H(AhL);this.PC.Aj(
true);this.PC.T(A.aaR(A.acf.A_X));this.PC.Bi(false);this.PC.Gp(2);this.PC.E4(60);
this.PC.Kk(A.aaR(A.acf.AGE));this.PC.KO(A.aaR(A.acf.AGE));this.PD.H(AWN);this.PD.
Aj(true);this.PD.T(A.aaR(A.acf.A_4));this.PD.Bi(true);this.PD.BC(0);this.PD.Gp(-
1);this.PD.E4(1);this.Sk.H(Z0);this.Sk.Aj(true);this.Sk.T(A.aaR(A.acf.Hy));this.
Sk.Bi(false);this.Sk.BC(0);this.Sk.Gp(-1);this.Sk.E4(1);this.VM.H(An9);this.VM.Aj(
true);this.VM.T(A.aaR(A.acf.A46));this.VM.Bi(true);this.VM.Kk(Afq);this.VM.KO(Afq
);this.Sm.H(AkX);this.Sm.Aj(true);this.Sm.T(A.aaR(A.acf.Ask));this.Sm.Bi(false);
this.Sm.BC(1);this.Sm.Gp(-1);this.Sm.E4(1);this.Sl.H(AHs);this.Sl.Aj(true);this.
Sl.T(A.aaR(A.acf.Ar1));this.Sl.Bi(true);this.Sl.BC(0);this.Sl.Gp(-1);this.Sl.E4(
1);this.Acc.As(A._GetAutoObject(A.Device.Device).Axb);this.J(this.PC,0);this.J(this.
PD,0);this.J(this.Sk,0);this.J(this.VM,0);this.J(this.Sm,0);this.J(this.Sl,0);this.
PC.As([B=A._GetAutoObject(A.Device.Device),B.A8M,B.BaN]);this.PD.As([B=this.Acc,
B.B$,B.Ca]);this.PD.CJ(this.Acc);this.Sk.CJ(this.FX);this.Sk.Akl([B=A._GetAutoObject(
A.Device.Device),B.AD6,B.AIh]);this.VM.As([B=A._GetAutoObject(A.Device.Device),B.
A8a,B.Bay]);this.Sm.CJ(this.FX);this.Sm.Akl([B=A._GetAutoObject(A.Device.Device)
,B.A8V,B.BaS]);this.Sl.CJ(this.FX);this.Sl.Akl([B=A._GetAutoObject(A.Device.Device
),B.AR2,B.AZJ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ct;this.PC._Done(
);this.PD._Done();this.Sk._Done();this.VM._Done();this.Sm._Done();this.Sl._Done(
);this.FX._Done();this.Acc._Done();C.Ct._Done.call(this);},_ReInit:function(){C.
Ct._ReInit.call(this);this.PC._ReInit();this.PD._ReInit();this.Sk._ReInit();this.
VM._ReInit();this.Sm._ReInit();this.Sl._ReInit();this.FX._ReInit();this.Acc._ReInit(
);this.JK(A.aaR(A.acf.Device));this.PC.T(A.aaR(A.acf.A_X));this.PC.Kk(A.aaR(A.acf.
AGE));this.PC.KO(A.aaR(A.acf.AGE));this.PD.T(A.aaR(A.acf.A_4));this.Sk.T(A.aaR(A.
acf.Hy));this.VM.T(A.aaR(A.acf.A46));this.Sm.T(A.aaR(A.acf.Ask));this.Sl.T(A.aaR(
A.acf.Ar1));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.PC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.ATO={VP:null,VO:
null,QG:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bhy
],this.QG.Q,0);},Bhy:function(G){var F;A._GetAutoObject(A.Device.Device).Akf((F=
this.QG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ct._Init.call(this,aArg);C.
NT._Init.call(this.VP={I:this},0);C.NT._Init.call(this.VO={I:this},0);C.AT7._Init.
call(this.QG={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.ATO;var B;this.JK(A.aaR(A.acf.ArU));this.VP.H(JS);this.
VP.Aj(true);this.VP.T(A.aaR(A.acf.Ajt));this.VP.Bi(false);this.VP.NW(99);this.VO.
H(AWO);this.VO.Aj(true);this.VO.T(A.aaR(A.acf.Ap2));this.VO.Bi(true);this.VO.NW(
100);this.QG.H(W1);this.QG.Aj(true);this.QG.T(A.aaR(A.acf.A4C));this.QG.Bi(false
);this.QG.Gp(-1);this.QG.E4(1);this.EartagNrAssignmentMode.As(A._GetAutoObject(A.
Device.Device).EartagNrAssignmentMode);this.J(this.VP,0);this.J(this.VO,0);this.
J(this.QG,0);this.VP.AR=[B=this.VP,B.NZ];this.VO.AR=[B=this.VO,B.NZ];this.QG.As([
B=this.EartagNrAssignmentMode,B.B$,B.Ca]);this.QG.CJ(this.EartagNrAssignmentMode
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ct;this.VP._Done();this.VO.
_Done();this.QG._Done();this.EartagNrAssignmentMode._Done();C.Ct._Done.call(this
);},_ReInit:function(){C.Ct._ReInit.call(this);this.VP._ReInit();this.VO._ReInit(
);this.QG._ReInit();this.EartagNrAssignmentMode._ReInit();this.JK(A.aaR(A.acf.ArU
));this.VP.T(A.aaR(A.acf.Ajt));this.VO.T(A.aaR(A.acf.Ap2));this.QG.T(A.aaR(A.acf.
A4C));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.VP)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QG).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};C.WI={Q:null
,TransponderProtocolToString:null,Ao7:null,Background:null,Z:null,Se:null,GF:null
,PH:null,OI:null,Pm:null,C6:null,Gq:null,Sy:null,N1:null,CountryToString:null,As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J5],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.J5],E,0);if(!!E)A.pe([this,this.J5],this);},J5:function(
G){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GF.R((F=this.
Q,F[1].call(F[0])).Id.toFixed());var BO=(F=this.Q,F[1].call(F[0])).Bh5();if(BO<900
){var JW=A._GetAutoObject(A.Device.Converter).AM5(BO);if(!!JW)this.C6.R(((this.CountryToString.
Lr(JW)+Acw)+BO.toFixed())+O3);else this.C6.R(BO.toFixed());if(JW===10){var AJI=this.
A6G((F=this.Q,F[1].call(F[0])).Id);this.C6.R(this.C6.String+((((AWP+this.Ao7.Bo0(
AJI))+Acw)+A.abl(this.Ao7.BoZ(AJI),2,10))+O3));}this.C6.Y(true);this.Pm.Y(true);
this.OI.Y(false);this.PH.Y(false);}else{this.OI.R(((A._GetAutoObject(A.Device.Converter
).BgZ(BO)+Acw)+BO.toFixed())+O3);this.OI.Y(true);this.PH.Y(true);this.C6.Y(false
);this.Pm.Y(false);}if(BO===276){this.Gq.R(this.Ao7.BS(this.A6G((F=this.Q,F[1].call(
F[0])).Id)));this.Gq.Y(true);}else this.Gq.Y(false);this.N1.R(this.TransponderProtocolToString.
BS((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GF.R(A.jV);this.OI.
R(A.jV);this.Gq.R(A.jV);this.C6.R(A.jV);this.N1.R(A.jV);}},A6G:function(JU){var Qo=
0;var JW=A._GetAutoObject(A.Device.Converter).ZG(JU);switch(JW){case 10:{var F_=
A._GetAutoObject(A.Device.Helper).R$(JU,8,2)|0;Qo=A._GetAutoObject(A.Device.Converter
).ACo(F_);}break;default:;}return Qo;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Ao7={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.
CG._Init.call(this.Se={I:this},0);C.CG._Init.call(this.GF={I:this},0);C.CG._Init.
call(this.PH={I:this},0);C.CG._Init.call(this.OI={I:this},0);C.CG._Init.call(this.
Pm={I:this},0);C.CG._Init.call(this.C6={I:this},0);C.CG._Init.call(this.Gq={I:this
},0);C.CG._Init.call(this.Sy={I:this},0);C.CG._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WI;
this.H(Acy);this.Background.A3(0x3F);this.Background.H(Acy);this.Background.L(A.
jb.C2);this.Z.A3(0x3F);this.Z.H(Acy);this.Z.Kg(9);this.Se.H(AWQ);this.Se.Aj(true
);this.Se.R(A.aaR(A.acf.GF)+A.aaR(A.acf.Colon));this.Se.A7(0x11);this.Se.L(A.jb.
Text);this.GF.H(AWR);this.GF.Aj(true);this.GF.R(AWS);this.GF.A7(0x14);this.GF.L(
A.jb.Text);this.PH.H(AHt);this.PH.Aj(true);this.PH.R(A.aaR(A.acf.A_r)+A.aaR(A.acf.
Colon));this.PH.A7(0x11);this.PH.L(A.jb.Text);this.OI.H(AsB);this.OI.Aj(true);this.
OI.R(AxQ);this.OI.A7(0x14);this.OI.L(A.jb.Text);this.Pm.H(AHt);this.Pm.Aj(true);
this.Pm.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Pm.A7(0x11);this.Pm.L(A.jb.Text
);this.C6.H(AsB);this.C6.Aj(true);this.C6.R(AWT);this.C6.A7(0x14);this.C6.L(A.jb.
Text);this.Gq.H(AWU);this.Gq.Aj(true);this.Gq.R(AHu);this.Gq.A7(0x14);this.Gq.L(
A.jb.Text);this.Sy.H(AHv);this.Sy.Aj(true);this.Sy.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.Sy.A7(0x11);this.Sy.L(A.jb.Text);this.N1.H(AWV);this.N1.Aj(true);this.
N1.R(AHw);this.N1.A7(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Z,0);this.J(this.Se,0);this.J(this.GF,0);this.J(this.PH,0);this.J(this.OI,0
);this.J(this.Pm,0);this.J(this.C6,0);this.J(this.Gq,0);this.J(this.Sy,0);this.J(
this.N1,0);this.Se.S(A.aaL(A.fl.Ak));this.Se.A2(A.aaL(A.fl.Bk));this.GF.S(A.aaL(
A.fl.Ak));this.GF.A2(A.aaL(A.fl.Bk));this.PH.S(A.aaL(A.fl.Ak));this.PH.A2(A.aaL(
A.fl.Bk));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bk));this.Pm.S(A.aaL(A.
fl.Ak));this.Pm.A2(A.aaL(A.fl.Bk));this.C6.S(A.aaL(A.fl.Ak));this.C6.A2(A.aaL(A.
fl.Bk));this.Gq.S(A.aaL(A.fl.Ak));this.Gq.A2(A.aaL(A.fl.Bk));this.Sy.S(A.aaL(A.fl.
Ak));this.Sy.A2(A.aaL(A.fl.Bk));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bk));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.Ao7._Done();this.Background._Done();this.Z._Done();this.Se._Done();
this.GF._Done();this.PH._Done();this.OI._Done();this.Pm._Done();this.C6._Done();
this.Gq._Done();this.Sy._Done();this.N1._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Ao7._ReInit();this.Background._ReInit();this.Z._ReInit();this.Se.
_ReInit();this.GF._ReInit();this.PH._ReInit();this.OI._ReInit();this.Pm._ReInit(
);this.C6._ReInit();this.Gq._ReInit();this.Sy._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Se.R(A.aaR(A.acf.GF)+A.aaR(A.acf.Colon));this.PH.R(A.aaR(A.acf.A_r
)+A.aaR(A.acf.Colon));this.Pm.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Sy.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Se.S(A.aaL(A.fl.Ak));this.Se.A2(A.aaL(A.fl.
Bk));this.GF.S(A.aaL(A.fl.Ak));this.GF.A2(A.aaL(A.fl.Bk));this.PH.S(A.aaL(A.fl.Ak
));this.PH.A2(A.aaL(A.fl.Bk));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bk
));this.Pm.S(A.aaL(A.fl.Ak));this.Pm.A2(A.aaL(A.fl.Bk));this.C6.S(A.aaL(A.fl.Ak)
);this.C6.A2(A.aaL(A.fl.Bk));this.Gq.S(A.aaL(A.fl.Ak));this.Gq.A2(A.aaL(A.fl.Bk)
);this.Sy.S(A.aaL(A.fl.Ak));this.Sy.A2(A.aaL(A.fl.Bk));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bk));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ao7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QO={CT:null,A_F:A.jV,Ai:function(Ae){C.Ff.Ai.call(
this,Ae);if(this.Ml.Fh())this.CT.CX(A.jb.AW);else this.CT.CX(this.Background.AQ);
this.CT.AeH(this.G1.AQ);},Zd:function(E){if(this.A_F===E)return;this.A_F=E;this.
CT.Text.R(E);this.CT.Y(E!==A.jV);},_Init:function(aArg){C.Ff._Init.call(this,aArg
);C.CT._Init.call(this.CT={I:this},0);this.__proto__=C.QO;this.Background.H(AWW);
this.Ml.H(WQ);this.OB.H(AHx);this.QU.H(AHx);this.CT.H(AWX);this.CT.Y(false);this.
J(this.CT,0);this.G1.S(A.aaL(A.fl.Af));this.G1.A2(A.aaL(A.fl.Ak));this.G1.Cs(A.aaL(
A.fl.Bk));},_Done:function(){this.__proto__=C.Ff;this.CT._Done();C.Ff._Done.call(
this);},_ReInit:function(){C.Ff._ReInit.call(this);this.CT._ReInit();this.G1.S(A.
aaL(A.fl.Af));this.G1.A2(A.aaL(A.fl.Ak));this.G1.Cs(A.aaL(A.fl.Bk));},_Mark:function(
D){var B;C.Ff._Mark.call(this,D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.CT={B7:null,Aei:null,Am:null,Text:null
,DH:A.jV,Amw:0,MZ:0,I0:0,A49:0x14,Init:function(aArg){},T:function(E){if(this.DH===
E)return;this.DH=E;this.Text.R(E);},BBs:function(G){this.Am.H(this.Text.M);this.
Aei.H(this.Text.M);},AeH:function(E){if(this.Amw===E)return;this.Amw=E;this.Aei.
L(E);this.Text.L(E);},CX:function(E){if(this.MZ===E)return;this.MZ=E;this.Am.L(E
);},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hq:function(E
){if(this.I0===E)return;this.I0=E;this.Text.Hq(E);},BkX:function(E){if(this.A49===
E)return;this.A49=E;this.Text.A7(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.NJ._Init.call(this.Aei={I:this},0);A.acg.NJ._Init.call(this.Am={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.CT;this.H(AHy);
this.Aei.A3(0x8);this.Aei.L(A.jb.Text);this.Am.A3(0x8);this.Am.L(A.jb.C2);this.Text.
A3(0xD);this.Text.H(AHy);this.Text.Hq(5);this.Text.IZ(true);this.Text.A7(0x14);this.
Text.L(A.jb.Text);this.J(this.Aei,0);this.J(this.Am,0);this.J(this.Text,0);this.
Aei.Ax(A.aaL(A.ach.APr));this.Am.Ax(A.aaL(A.ach.APq));this.Text.QZ([this,this.BBs
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Aei._Done();this.Am._Done();this.Text._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aei._ReInit();this.Am.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T1={DV:null,Z:null,Ay:null,Dz:function(G){var B;C.AB.Dz.call(this,G);if(!!this.
AW&&((this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);},CA:function(
G){C.AB.CA.call(this,G);this.AKP(this);A._GetAutoObject(A.Device.Device).Ao.Bl(null
);A._GetAutoObject(A.Device.Device).Bu.Bl(null);A._GetAutoObject(A.Device.Helper
).Akx();A._GetAutoObject(A.Device.Helper).ArY();},H$:function(G){},AcD:function(
s){this.H$(s);},A2U:function(G){A._GetAutoObject(C.A1).Fr();},Fa:function(G){var
B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.
Mt(-this.Z.Bt[1]);},AKP:function(G){},BFv:function(s){this.AKP(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DV={I:this},0);A.Core.
Z._Init.call(this.Z={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T1;this.Background.L(A.jb.C2);this.N.Y(true);this.N.B2(A.jV);this.Dn(C.AqB);this.
DV.A3(0x3F);this.DV.H(E7);this.DV.L(A.jb.CI);this.Z.H(E7);this.Z.Kg(9);this.Ay.H(
IJ);this.J(this.DV,0);this.J(this.Z,0);this.J(this.Ay,0);this.N.Cz=[this,this.A2U
];this.N.CY(A.aaL(A.ach.EW));this.Z.En=[this,this.Fa];},_Done:function(){this.__proto__=
C.AB;this.DV._Done();this.Z._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DV._ReInit();this.Z._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AU8={Wi:function(
G){this.Age();this.IQ(A.aaR(A.acf.AUI),[this,this.AS8],7);this.IQ(A.aaR(A.acf.ArV
),[this,this.Bk0],6);this.IQ(A.aaR(A.acf.AFN),[this,this.ASU],3);this.IQ(A.aaR(A.
acf.AnJ),[this,this.Awq],2);this.IQ(A.aaR(A.acf.XB),[this,this.AEm],1);this.IQ(A.
aaR(A.acf.Aua),[this,this.AEg],0);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.
BN).Nx(A.aaR(A.acf.Al5)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},Dz:function(G){},Aba:function(){return C.AMG;},Abb:function(){return C.AO$;
},Q3:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mm();var AA0=A._NewObject(
A.Device.BoolFilterCriterion,0);AA0.Initialize(12,0,true,true);Be.CV(AA0);A._GetAutoObject(
A.Device.Device).Ao.Bl(Be);},HK:function(G){C.GP.HK.call(this,G);if(this.Aj3()===
false){this.N.Cp(A.aaL(A.ach.ArV));this.N.Cj=[this,this.A5L];this.N.FG(A.jV);}this.
N.OM(false);this.N.ON(false);},Af1:function(){A._GetAutoObject(C.A1).BU(42);},Af0:
function(){A._GetAutoObject(C.A1).BU(45);},_Init:function(aArg){C.GP._Init.call(
this,aArg);this.__proto__=C.AU8;var B;this.Dn(C.AO7);this.Dx(A.aaR(A.acf.A7A));this.
Awk([B=A._GetAutoObject(A.Device.Device),B.A8Z,B.BaT]);},_ReInit:function(){C.GP.
_ReInit.call(this);this.Dx(A.aaR(A.acf.A7A));},_className:"Application::WatchListScreen"
};C.ALN={Dz:function(G){var B;var Jq=(A.Core.BL.isPrototypeOf(G)?G:null);if(((Jq.
CN===4)||(Jq.CN===5))===false){C.Axu.Dz.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bcg=A._GetAutoObject(A.Device.Device
).KU;var S$;if(Jq.CN===5)S$=5;else S$=4;var AAH=A._GetAutoObject(A.acj.DS).BcP(Bcg
,S$);var GM=(((Bcg+((AAH/2)|0))/AAH)|0)*AAH;if(Jq.CN===4)GM+=AAH;else if(Jq.CN===
5)GM-=AAH;if(GM>999900)GM=999900;if(GM<100)GM=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(GM);},Asa:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.OZ,B.Cz],this);else A._GetAutoObject(C.A1).Fr();
},Wx:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).Asc();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A_V()===false){this.H1.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KU
);this.H1.Cn(A._GetAutoObject(A.Device.Device).Bu);A._GetAutoObject(C.A1).Fr();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KU);this.H1.Cn(A._GetAutoObject(A.Device.Device
).Bu);A._GetAutoObject(C.A1).Fr();}},AkE:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.OZ,B.Cf],this);},BcO:function(){var
AK3=A._GetAutoObject(A.Device.Helper).W.AhE(1);if(AK3>=100000)AK3=(Math.round(AK3
/1000)|0)*1000;return AK3;},_Init:function(aArg){C.Axu._Init.call(this,aArg);this.
__proto__=C.ALN;},_className:"Application::AnimalActionWeighingScreen"};C.AUT={VU:
null,Yx:null,Q9:null,Aet:null,_Init:function(aArg){C.Ct._Init.call(this,aArg);C.
BZ._Init.call(this.VU={I:this},0);C.BZ._Init.call(this.Yx={I:this},0);C.Q9._Init.
call(this.Q9={I:this},0);C.Aet._Init.call(this.Aet={I:this},0);this.__proto__=C.
AUT;var B;this.JK(A.aaR(A.acf.AGF));this.VU.H(AhL);this.VU.Aj(true);this.VU.T(A.
aaR(A.acf.A$i));this.VU.Bi(true);this.VU.BC(0);this.Yx.H(W1);this.Yx.Aj(true);this.
Yx.T(A.aaR(A.acf.A$h));this.Yx.Bi(false);this.J(this.VU,0);this.J(this.Yx,0);this.
VU.As([B=this.Q9,B.B$,B.Ca]);this.VU.CJ(this.Q9);this.Yx.As([B=this.Aet,B.B$,B.Ca
]);this.Yx.CJ(this.Aet);},_Done:function(){this.__proto__=C.Ct;this.VU._Done();this.
Yx._Done();this.Q9._Done();this.Aet._Done();C.Ct._Done.call(this);},_ReInit:function(
){C.Ct._ReInit.call(this);this.VU._ReInit();this.Yx._ReInit();this.Q9._ReInit();
this.Aet._ReInit();this.JK(A.aaR(A.acf.AGF));this.VU.T(A.aaR(A.acf.A$i));this.Yx.
T(A.aaR(A.acf.A$h));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.
VU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.Aet={MassUnitToString:null
,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awm(E);}
,Init:function(aArg){var B;A.zX([this,this.Bdr],[B=A._GetAutoObject(A.Device.Device
),B.AR1,B.AZI],0);A.pe([this,this.Bdr],this);},Bdr:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.Aet;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Axu={H1:null,Aji:null,MassUnit:null,
KU:null,Vk:null,Anu:null,Acn:null,ZH:null,OZ:null,Ym:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DS).AfN());A.zX([this,this.AJ6],[B=A._GetAutoObject(
A.Device.Device),B.AD9,B.AIk],0);A.zX([this,this.BAf],[B=A._GetAutoObject(A.Device.
Device),B.AEc,B.AIo],0);A.zX([this,this.BAg],[B=this.OZ,B.Aq9,B.Jm],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.Axn();this.Aco();},IO:function(G){this.Wx(this);}
,CA:function(G){C.AB.CA.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).Asc();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bu.Lf())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bu.HC().toFixed(),
0,null);this.H1.Gh();this.H1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGk();else{var BBG=this.BcO();this.ZH.Y(true);this.Acn.Y(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BBG);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},EX:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).Asc();else A._GetAutoObject(A.Device.Device).Ahv(
);},Axn:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bf3();break;case 3:{this.Bf3();this.ZH.Y(false);this.Acn.Y(false
);if(this.A_V()){this.Vk.Y(false);this.KU.H(A.abO(this.KU.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.OZ.Ar(true);this.OZ.Y(true);this.Bb(this.OZ);}}break;
case 4:this.KU.R(A.aaR(A.act.Aj7));break;default:A.ab5("%s%e",AHz,A._GetAutoObject(
A.Device.Device).MeasureState);}},Aco:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CY(A.aaL(A.ach.Aee));this.N.Cp(null);
this.Ym.Y(false);this.N.C5(A.aaL(A.ach.AmL));this.N.B2(A.jV);}break;case 3:{if(this.
OZ.AY<=1){this.N.CY(null);this.N.Cp(null);this.Ym.Y(false);this.N.C5(null);}else{
this.N.CY(A.aaL(A.ach.AmJ));this.N.Cp(A.aaL(A.ach.Aef));this.Ym.Y(true);this.N.C5(
null);}this.N.B2(A.aaR(A.acf.Ok));}break;case 4:{this.N.C5(A.aaL(A.ach.Avk));this.
N.Cf=[this,this.BkO];this.N.Cp(null);this.Ym.Y(false);this.N.B2(A.jV);}break;default:;
}},Asa:function(G){},BvC:function(s){this.Asa(s);},Wx:function(G){},AZZ:function(
s){this.Wx(s);},BkO:function(G){this.CA(this);},BAf:function(G){this.An();},AJ6:
function(G){this.An();},A_V:function(){var At3=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(At3>0)&&!A._GetAutoObject(A.Device.Helper).BoX(At3
,this.H1.Timestamp);},AkE:function(G){},AZY:function(s){this.AkE(s);},BAg:function(
G){this.An();},Bf3:function(){this.KU.R(A._GetAutoObject(A.Device.Converter).AkQ(
A._GetAutoObject(A.Device.Device).KU));},BcO:function(){return A._GetAutoObject(
A.Device.Helper).W.AhE(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Aji={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(this.Vk={I:this
},0);C.Axm._Init.call(this.Anu={I:this},0);A.acg.Ad6._Init.call(this.Acn={I:this
},0);A.acg.Ad6._Init.call(this.ZH={I:this},0);C.AVb._Init.call(this.OZ={I:this},
0);A.acg.Am._Init.call(this.Ym={I:this},0);this.__proto__=C.Axu;this.Background.
L(A.jb.CI);this.N.Y(true);this.Dn(C.IA);this.Aji.A3(0x3F);this.Aji.H(AxR);this.Aji.
L(A.jb.CI);this.MassUnit.H(AWY);this.MassUnit.A7(0x9);this.MassUnit.R(A.aaR(A.acf.
AzD));this.MassUnit.L(A.jb.Text);this.KU.H(AWZ);this.KU.A7(0x14);this.KU.R(A.aaR(
A.act.Aj7));this.KU.L(A.jb.Text);this.Vk.H(AW0);this.Vk.R(A.aaR(A.acf.A$t));this.
Vk.L(A.jb.Text);this.Vk.Y(true);this.Anu.H(AW1);this.Acn.H(AW2);this.Acn.L(A.jb.
AdS);this.Acn.Y(false);this.ZH.H(AW3);this.ZH.L(A.jb.AdS);this.ZH.BlK(true);this.
ZH.Y(false);this.OZ.A3(0x3F);this.OZ.H(AxR);this.OZ.Ar(false);this.OZ.Y(false);this.
Ym.H(AW4);this.Ym.L(A.jb.Bm);this.J(this.Aji,0);this.J(this.MassUnit,0);this.J(this.
KU,0);this.J(this.Vk,0);this.J(this.Acn,0);this.J(this.ZH,0);this.J(this.OZ,0);this.
J(this.Ym,0);this.N.Cz=[this,this.BvC];this.N.Cj=[this,this.AZY];this.N.Cf=[this
,this.AZZ];this.MassUnit.S(A.aaL(A.fl.EF));this.KU.S(A.aaL(A.fl.Ad9));this.Vk.S(
A.aaL(A.fl.EF));this.Acn.Zc(this.Anu);this.ZH.Zc(this.Anu);this.H1=A._NewObject(
A.Device.Rating,0);this.OZ.LV(A._GetAutoObject(A.Device.Helper).W);this.OZ.Akm(this.
H1);this.Ym.Ax(A.aaL(A.ach.AQg));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aji._Done();this.MassUnit._Done();this.KU._Done();this.Vk._Done();this.
Anu._Done();this.Acn._Done();this.ZH._Done();this.OZ._Done();this.Ym._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aji._ReInit();
this.MassUnit._ReInit();this.KU._ReInit();this.Vk._ReInit();this.Anu._ReInit();this.
Acn._ReInit();this.ZH._ReInit();this.OZ._ReInit();this.Ym._ReInit();this.MassUnit.
R(A.aaR(A.acf.AzD));this.KU.R(A.aaR(A.act.Aj7));this.Vk.R(A.aaR(A.acf.A$t));this.
MassUnit.S(A.aaL(A.fl.EF));this.KU.S(A.aaL(A.fl.Ad9));this.Vk.S(A.aaL(A.fl.EF));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H1)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ym)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVf={FA:null
,OJ:null,M9:null,C9:null,LS:null,TY:null,Init:function(aArg){var B;A.zX([this,this.
Gz],[B=this.FA,B.B$,B.Ca],0);A.pe([this,this.Gz],this);},CA:function(G){C.Ct.CA.
call(this,G);A.pe([this,this.Gz],this);},BjD:function(G){var F;this.LS.BT.L(this.
LS.V.AQ);if(!!this.LS.Q)this.LS.BT.R((A._GetAutoObject(A.Device.Converter).SW((F=
this.LS.Q,F[1].call(F[0])),2,true)+CO)+A._GetAutoObject(A.acj.DS).Aaf());},Gz:function(
G){var AI0=true;if(this.FA.Q===1)AI0=false;this.C9.Aj(AI0);this.C9.Ar(AI0);this.
C9.Y(AI0);A._GetAutoObject(A.Device.Helper).AMY(this.Z);},_Init:function(aArg){C.
Ct._Init.call(this,aArg);C.AL9._Init.call(this.FA={I:this},0);C.AGQ._Init.call(this.
OJ={I:this},0);C.AUa._Init.call(this.M9={I:this},0);C.AkC._Init.call(this.C9={I:
this},0);C.I1._Init.call(this.LS={I:this},0);C.BZ._Init.call(this.TY={I:this},0);
this.__proto__=C.AVf;var B;this.JK(A.aaR(A.acf.Settings));this.Ha.R(A.aaR(A.acf.
Asn));this.FA.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OJ.As(A._GetAutoObject(
A.Device.Device).OJ);this.M9.H(AW5);this.M9.Aj(true);this.C9.H(AsC);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KE));this.C9.Bi(true);this.C9.Gp(1000);this.C9.E4(99000);
this.LS.H(AsD);this.LS.Aj(true);this.LS.T(A.aaR(A.acf.A4G));this.LS.Gp(50);this.
LS.E4(2000);this.LS.ASA(A._GetAutoObject(A.acj.DS).Azl());this.TY.H(AkX);this.TY.
Aj(true);this.TY.T(A.aaR(A.acf.A7h));this.TY.Gp(-1);this.TY.E4(1);this.JO(this.Z
,-1);this.JO(this.Ay,-1);this.J(this.M9,0);this.J(this.C9,0);this.J(this.LS,0);this.
J(this.TY,0);this.M9.AeB([B=this.M9,B.FN]);this.M9.Gi([this,this.D6,this.GI]);this.
M9.Aki(A.aaL(A.ach.Edit));this.M9.LU([B=this.M9,B.Ayp]);this.M9.LX(A.aaL(A.ach.Any
));this.M9.As([B=this.FA,B.B$,B.Ca]);this.M9.CJ(this.FA);this.M9.A9Q([B=this.FA,
B.ASh,B.AZW]);this.M9.A9P([B=this.FA,B.ASg,B.AZV]);this.C9.Gi([this,this.D6,this.
GI]);this.C9.LU([B=this.M9,B.Ayp]);this.C9.LX(A.aaL(A.ach.Any));this.C9.As([B=this.
FA,B.A7_,B.ASn]);this.LS.Gi([this,this.D6,this.GI]);this.LS.LU([B=this.M9,B.Ayp]
);this.LS.LX(A.aaL(A.ach.Any));this.LS.As([B=this.FA,B.A79,B.ASl]);this.LS.A92([
this,this.BjD]);this.TY.Gi([this,this.D6,this.GI]);this.TY.As([B=this.OJ,B.B$,B.
Ca]);this.TY.CJ(this.OJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Ct;
this.FA._Done();this.OJ._Done();this.M9._Done();this.C9._Done();this.LS._Done();
this.TY._Done();C.Ct._Done.call(this);},_ReInit:function(){C.Ct._ReInit.call(this
);this.FA._ReInit();this.OJ._ReInit();this.M9._ReInit();this.C9._ReInit();this.LS.
_ReInit();this.TY._ReInit();this.JK(A.aaR(A.acf.Settings));this.Ha.R(A.aaR(A.acf.
Asn));this.C9.T(A.aaR(A.acf.KE));this.LS.T(A.aaR(A.acf.A4G));this.TY.T(A.aaR(A.acf.
A7h));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.FA)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUa={YJ:null,Init:
function(aArg){var B;A.zX([this,this.Afr],[B=A._GetAutoObject(A.Device.Device),B.
AR1,B.AZI],0);A.pe([this,this.Afr],this);},A3m:function(G){A._GetAutoObject(A.Device.
Device).A_(37,true,A.jV,0,[this,this.Ba6]);},A1c:function(G){var F;if(this.A9===
1){var BQ=this.D3;this.D3=this.D3-A._GetAutoObject(A.acj.DS).Azl();if(this.D3<this.
Alv)this.D3=this.Alv;if(this.DU!==BQ){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.
D3));A.abo(this.JM,0);}}if(this.A9===2){var BQ=this.DU;this.DU=this.DU-A._GetAutoObject(
A.acj.DS).Azl();if(this.DU<this.D3)this.DU=this.D3;if(this.DU!==BQ){if(!!this.JL
)(F=this.JL,F[2].call(F[0],this.DU));A.abo(this.JL,0);}}this.DG(this);this.An();
},A1N:function(G){var F;if(this.A9===1){var BQ=this.D3;this.D3=this.D3+A._GetAutoObject(
A.acj.DS).Azl();if(this.D3>this.DU)this.D3=this.DU;if(this.D3!==BQ){if(!!this.JM
)(F=this.JM,F[2].call(F[0],this.D3));A.abo(this.JM,0);}}if(this.A9===2){var BQ=this.
DU;this.DU=this.DU+A._GetAutoObject(A.acj.DS).Azl();if(this.DU>this.Alq)this.DU=
this.Alq;if(this.DU!==BQ){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.DU));A.abo(
this.JL,0);}}this.DG(this);this.An();},Gz:function(G){this.PF.R(AHA+A._GetAutoObject(
A.Device.Converter).SW(this.D3,2,true));this.PE.R(AHA+A._GetAutoObject(A.Device.
Converter).SW(this.DU,2,true));this.So.R(A._GetAutoObject(A.acj.DS).Aaf());this.
YJ.R(this.So.String);},A2X:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Ar0(this
);},A1G:function(As1){if(As1===1)return this.PF;else if(As1===2)return this.PE;else
return null;},_Init:function(aArg){C.Ab$._Init.call(this,aArg);A.acg.Text._Init.
call(this.YJ={I:this},0);this.__proto__=C.AUa;this.T(A.aaR(A.acf.ABT));this.Alq=
2000;this.Alv=20;this.Background.H(JR);this.V.H(BF);this.V.R(A.aaR(A.acf.ABT)+A.
aaR(A.acf.Colon));this.V.A7(0x12);this.Akv.H(AW6);this.Akw.H(AW7);this.Q0.H(AW8);
this.Qx.H(AHB);this.PE.H(AW9);this.PF.H(AW_);this.So.H(AW$);this.YJ.H(AXa);this.
YJ.IZ(false);this.YJ.A7(0x12);this.YJ.L(0xFF000000);this.JO(this.HY,-8);this.J(this.
YJ,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YJ.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Ab$;this.YJ._Done();C.Ab$.
_Done.call(this);},_ReInit:function(){C.Ab$._ReInit.call(this);this.YJ._ReInit();
this.T(A.aaR(A.acf.ABT));this.V.R(A.aaR(A.acf.ABT)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YJ.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Ab$._Mark.call(this,D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.AA5={M:Rd,A6T:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6T();},_Init:function(
aArg){A.Graphics.Hs._Init.call(this,aArg);this.__proto__=C.AA5;},_className:"Application::AbstractPath"
};C.Ai8={DL:null,DV:null,Rb:null,Ady:null,N9:null,Adx:null,At$:1,A4d:0,Bb0:false
,Azh:true,CS:function(){this.BfZ(this);},Init:function(aArg){var B;this.Bb(this.
Ady);A.zX([this,this.BfZ],[B=this.Ady,B.A8e,B.BaC],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.Adx.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bhg(this.At$+this.A4d)));if(this.At$===1)this.N9.R(A.aaR(A.acf.Auv));else this.
N9.R(A.aaR(A.acf.BgT));},CA:function(G){if(this.Azh)this.Azh=false;else if(this.
DL.Bb9()===false)A.pe([this,this.A2u],this);else if(this.DL.Azv())this.DL.AcS();
A.zV([this,this.AfT],A._GetAutoObject(A.Device.Device).Ao,0);},EX:function(G){A.
z9([this,this.AfT],A._GetAutoObject(A.Device.Device).Ao,0);},A2u:function(G){this.
Bb0=true;A._GetAutoObject(C.A1).Fr();},BfZ:function(G){var B;var Bcy=(C.V6.isPrototypeOf(
B=this.Ady.AW)?B:null);if(!!Bcy){var AyC=A._NewObject(A.Device.ActionToString,0);
this.Rb.R(AyC.Lr(Bcy.Action));}},H$:function(G){var Cv=(C.V6.isPrototypeOf(G)?G:
null);if(!Cv)return;this.DL.Qe(Cv.Action);this.BkR(this.At$+1);},BzM:function(G){
if(A._GetAutoObject(C.Pf).NP(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},BzB:function(G){
A._GetAutoObject(C.A1).BU(3);},BkR:function(E){if(this.At$===E)return;this.At$=E;
this.An();},AfT:function(G){if((this.Bb0===false)&&(this.DL.Bb9()===false))A.pe([
this,this.A2u],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL.
_Init.call(this.DV={I:this},0);C.CG._Init.call(this.Rb={I:this},0);C.AQ5._Init.call(
this.Ady={I:this},0);C.CG._Init.call(this.N9={I:this},0);A.acg.Text._Init.call(this.
Adx={I:this},0);this.__proto__=C.Ai8;this.Background.L(A.jb.C2);this.N.H(W0);this.
N.Y(true);this.Dn(C.IA);this.DV.A3(0x3F);this.DV.H(E7);this.DV.L(A.jb.CI);this.Rb.
H(AXb);this.Rb.L(A.jb.Text);this.Ady.H(AXc);this.N9.H(AXd);this.N9.R(A.aaR(A.acf.
Auv));this.N9.L(A.jb.Text);this.Adx.H(AXe);this.Adx.R(AXf);this.Adx.L(A.jb.Text);
this.J(this.DV,0);this.J(this.Rb,0);this.J(this.Ady,0);this.J(this.N9,0);this.J(
this.Adx,0);this.N.Cz=[this,this.BzB];this.N.Cj=[this,this.BzM];this.N.Cf=[this,
this.A2u];this.N.CY(A.aaL(A.ach.EW));this.N.Cp(A.aaL(A.ach.Abk));this.Rb.S(A.aaL(
A.fl.EF));this.Rb.A2(A.aaL(A.fl.Af));this.Rb.Cs(A.aaL(A.fl.Ak));this.Ady.A2V=[this
,this.H$];this.N9.S(A.aaL(A.fl.EF));this.N9.A2(A.aaL(A.fl.Af));this.N9.Cs(A.aaL(
A.fl.Ak));this.Adx.S(A.aaL(A.fl.Hm));this.DL=A._GetAutoObject(C.DL);this.Init(aArg
);},_Done:function(){this.__proto__=C.AB;this.DV._Done();this.Rb._Done();this.Ady.
_Done();this.N9._Done();this.Adx._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DV._ReInit();this.Rb._ReInit();this.Ady._ReInit();
this.N9._ReInit();this.Adx._ReInit();this.N9.R(A.aaR(A.acf.Auv));this.Rb.S(A.aaL(
A.fl.EF));this.Rb.A2(A.aaL(A.fl.Af));this.Rb.Cs(A.aaL(A.fl.Ak));this.N9.S(A.aaL(
A.fl.EF));this.N9.A2(A.aaL(A.fl.Af));this.N9.Cs(A.aaL(A.fl.Ak));this.CS();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DL)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ady)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adx)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AQ5={H6:null,A2V:null,Co:null,Z:null,Ay:
null,A3A:0,Init:function(aArg){A.zV([this,this.AAV],this.H6,0);A.zV([this,this.BfW
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.At8],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.AAV],this);},Bb:function(E){var A2p=this.AW;
A.Core.O.Bb.call(this,E);if(this.AW!==A2p)A.abo([this,this.A8e,this.BaC],0);},Dz:
function(G){var B;var E_=0;var X=this.AW;switch(this.Co.CN){case 6:E_=2;break;case
7:E_=7;break;case 4:E_=4;break;case 5:E_=5;break;default:;}X=this.QA(X,E_,0x415);
if((E_===5)&&!X){var AKG=this.AW;while(!X){AKG=this.QA(AKG,2,0x415);if(!!AKG)X=this.
QA(AKG,E_,0x415);else break;}}if(!!X)this.Bb(X);var GN=(C.V6.isPrototypeOf(B=this.
AW)?B:null);if(!!GN)this.A3A=(C.V6.isPrototypeOf(B=this.AW)?B:null).Action;else this.
A3A=0;A.pe([this,this.MO],this);},A07:function(Ey){var EL=A._GetAutoObject(C.DL).
Bcf(Ey,this.A2V);this.J(EL,0);},AoI:function(){var B;var X=this.Z.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var Adt=X;X=X.Ah;if(((Adt.U&0x400)===0x400))this.HJ(Adt);
}},AAV:function(G){this.AoI();var P;var CD=A._GetAutoObject(C.Pf).NK();for(P=0;P<
CD;P=P+1){var Z8=A._GetAutoObject(C.Pf).OC(P);this.A07(Z8);}A.pe([this,this.BfW]
,this);A.pe([this,this.Bpj],this);A.pe([this,this.At8],this);},Bpj:function(G){var
B;var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.V6.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},At8:function(G){var B;var X=this.Z.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.V6.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.AS3(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.AS3(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.AS3(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((
B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},BfW:function(G){var B;var X=this.
Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.V6.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pf).NP(Aa.Action)&&A._GetAutoObject(C.
DL).A4c(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Y(true);if(
this.A3A===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Y(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Z.Vi(null,null);if(!!this.AW&&((
this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.BL._Init.call(this.Co={I:this},0);A.Core.
Z._Init.call(this.Z={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AQ5;this.H(AXg);this.Co.Filter=147;this.Z.A3(0xB);this.Z.H(AXh);this.Z.Kg(9);this.
Ay.A3(0xA);this.Ay.H(AXi);this.J(this.Z,0);this.J(this.Ay,0);this.Co.BM=[this,this.
Dz];this.Co.DX=[this,this.Dz];this.Z.En=[this,this.Fa];this.H6=A._GetAutoObject(
C.Pf);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Co._Done();
this.Z._Done();this.Ay._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Co._ReInit();this.Z._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.H6)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A2V)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fj={Ef:null,AL:null,Text:null,Am:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ef._Init.call(this.Ef={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Am._Init.call(this.
Am={I:this},0);this.__proto__=C.Fj;this.N.Ar(false);this.Ef.H(BF);this.Ef.Ar(false
);this.AL.H(E7);this.AL.L(A.jb.AdS);this.Text.H(BF);this.Text.R(AXj);this.Text.L(
0xFF000000);this.Am.H(Rd);this.Am.L(A.jb.Text);this.J(this.Ef,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Am,0);this.N.Cp(A.aaL(A.ach.Abk));this.Text.S(
A.aaL(A.fl.Ak));this.Am.Ax(A.aaL(A.ach.ACI));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ef._Done();this.AL._Done();this.Text._Done();this.Am._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ef._ReInit();this.AL._ReInit();this.Text._ReInit();this.Am._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.Xz={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IO:function(G){},Ai:function(Ae){C.BZ.
Ai.call(this,Ae);var FJ=A.jb.AdS;var GL=A.jb.C2;if(this.Hc){FJ=A.jb.Text;GL=A.jb.
Bm;}if(!this.LD){this.Background.L(A.jb.C2);this.V.L(A.jb.CI);}else if(this.Qk){
this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(this.KA){this.Background.L(
A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.L(GL);}this.Hp.L(A.
jb.C2);this.HY.L(A.jb.C2);},Hd:function(G){var B;var FZ=this.Dv.GW;var Cy=(C.CG.
isPrototypeOf(B=this.Dv.Cg)?B:null);if(!Cy)return;Cy.S(A.aaL(A.fl.Ak));Cy.A2(A.aaL(
A.fl.Bk));Cy.L(this.V.AQ);if(!!this.AC)Cy.R(this.AC.Gb(FZ));else Cy.R(WZ);Cy.H(A.
abK(Cy.M,[this.Dv.VX,(B=this.Dv.M)[3]-B[1]]));},_Init:function(aArg){C.BZ._Init.
call(this,aArg);this.__proto__=C.Xz;this.Dv.AEQ(170);this.Dv.NV(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ai9={C8:null,Init:function(
aArg){this.V.Text.A7(0x11);this.V.Text.Hq(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cl.Ai.call(this,Ae);var FJ=A.jb.AdS;var GL=A.jb.C2;if(this.Hc){FJ=A.jb.Text;
GL=A.jb.Bm;}if(!this.LD){this.Background.L(A.jb.C2);this.V.L(A.jb.CI);}else if(this.
Qk){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(this.KA){this.Background.
L(A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.L(GL);}},_Init:function(
aArg){C.Cl._Init.call(this,aArg);A.acg.Am._Init.call(this.C8={I:this},0);this.__proto__=
C.Ai9;this.C8.H(AXk);this.C8.Cx(1);this.J(this.C8,0);this.C8.Ax(A.aaL(A.ach.Amc)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cl;this.C8._Done();C.Cl._Done.
call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Cl._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALs={Z:null,RC:null,Tl:null
,Tm:null,Tn:null,Adw:null,Xy:null,Vd:null,Ve:null,AaA:null,Ay:null,Init:function(
aArg){this.Bb(this.RC);},Dz:function(G){C.Fj.Dz.call(this,G);this.MO(this);},IO:
function(G){this.Bfi(this);},KN:function(){if(!this.Bz){this.Bz=A._NewObject(C.N
,0);this.Bz.Cz=[this,this.Bfi];this.Bz.Cj=null;this.Bz.Cf=null;this.Bz.B2(A.jV);
this.Bz.Cp(null);this.Bz.CY(A.aaL(A.ach.VK));}return this.Bz;},AAz:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.Xy.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.Xy.Q))A._GetAutoObject(C.AutoActions).J(this.Xy.Q);if(!!this.Vd.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vd.Q))A._GetAutoObject(C.AutoActions
).J(this.Vd.Q);if(!!this.Ve.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Ve.
Q))A._GetAutoObject(C.AutoActions).J(this.Ve.Q);if(!!this.AaA.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaA.Q))A._GetAutoObject(C.AutoActions).J(this.AaA.Q
);A._GetAutoObject(C.AutoActions).Cn();},Bfi:function(G){if(this.ByV()===true){this.
AAz();this.Xn(this);}else A._GetAutoObject(A.Device.Device).A_(27,true,A.jV,0,null
);},ByV:function(){return(!!this.Xy.C7(this.Xy.Q)||!!this.Vd.C7(this.Vd.Q))||!!this.
Ve.C7(this.Ve.Q);},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.
Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},MO:function(G){var B;this.
Z.Vi(null,null);if(!!this.AW&&((this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true
,null,null);},BzY:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.Xy.As9(this);this.Vd.As9(this);this.Ve.As9(this);this.AaA.As9(this);}
,_Init:function(aArg){C.Fj._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this
},0);C.Xz._Init.call(this.RC={I:this},0);C.Xz._Init.call(this.Tl={I:this},0);C.Xz.
_Init.call(this.Tm={I:this},0);C.Xz._Init.call(this.Tn={I:this},0);C.AuG._Init.call(
this.Adw={I:this},0);C.AutoAction._Init.call(this.Xy={I:this},0);C.AutoAction._Init.
call(this.Vd={I:this},0);C.AutoAction._Init.call(this.Ve={I:this},0);C.AutoAction.
_Init.call(this.AaA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALs;var B;this.H(Rf);this.Text.R(A.aaR(A.acf.To));this.Z.H(Ls);this.Z.Kg(1);this.
RC.H(AhL);this.RC.Ar(true);this.RC.Aj(true);this.RC.T(A._GetAutoObject(A.Device.
Helper).Ne(A.aaR(A.acf.Ai7),P3,AxS));this.Tl.H(W1);this.Tl.Ar(true);this.Tl.Aj(true
);this.Tl.T(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.Ai7),P3,AHC));this.
Tm.H(Z0);this.Tm.Ar(true);this.Tm.Aj(true);this.Tm.T(A._GetAutoObject(A.Device.Helper
).Ne(A.aaR(A.acf.Ai7),P3,AsE));this.Tn.H(An9);this.Tn.Ar(true);this.Tn.Aj(true);
this.Tn.T(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.Ai7),P3,AxT));this.Adw.
H(AxU);this.Adw.Aj(true);this.Adw.T(A.aaR(A.acf.A_C));this.Vd.Index=1;this.Ve.Index=
2;this.AaA.Index=3;this.Ay.H(IJ);this.J(this.Z,0);this.J(this.RC,0);this.J(this.
Tl,0);this.J(this.Tm,0);this.J(this.Tn,0);this.J(this.Adw,0);this.J(this.Ay,0);this.
Z.En=[this,this.Fa];this.RC.Wl(A.aaL(A.fl.Hm));this.RC.Wm(A.aaL(A.fl.Hm));this.RC.
As([B=this.Xy,B.B$,B.Ca]);this.RC.CJ(this.Xy);this.Tl.Wl(A.aaL(A.fl.Hm));this.Tl.
Wm(A.aaL(A.fl.Hm));this.Tl.As([B=this.Vd,B.B$,B.Ca]);this.Tl.CJ(this.Vd);this.Tm.
Wl(A.aaL(A.fl.Hm));this.Tm.Wm(A.aaL(A.fl.Hm));this.Tm.As([B=this.Ve,B.B$,B.Ca]);
this.Tm.CJ(this.Ve);this.Tn.Wl(A.aaL(A.fl.Hm));this.Tn.Wm(A.aaL(A.fl.Hm));this.Tn.
As([B=this.AaA,B.B$,B.Ca]);this.Tn.CJ(this.AaA);this.Adw.AR=[this,this.BzY];this.
Init(aArg);},_Done:function(){this.__proto__=C.Fj;this.Z._Done();this.RC._Done();
this.Tl._Done();this.Tm._Done();this.Tn._Done();this.Adw._Done();this.Xy._Done();
this.Vd._Done();this.Ve._Done();this.AaA._Done();this.Ay._Done();C.Fj._Done.call(
this);},_ReInit:function(){C.Fj._ReInit.call(this);this.Z._ReInit();this.RC._ReInit(
);this.Tl._ReInit();this.Tm._ReInit();this.Tn._ReInit();this.Adw._ReInit();this.
Xy._ReInit();this.Vd._ReInit();this.Ve._ReInit();this.AaA._ReInit();this.Ay._ReInit(
);this.Text.R(A.aaR(A.acf.To));this.RC.T(A._GetAutoObject(A.Device.Helper).Ne(A.
aaR(A.acf.Ai7),P3,AxS));this.Tl.T(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.
Ai7),P3,AHC));this.Tm.T(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.Ai7),P3
,AsE));this.Tn.T(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.Ai7),P3,AxT));
this.Adw.T(A.aaR(A.acf.A_C));},_Mark:function(D){var B;C.Fj._Mark.call(this,D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Tl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ve)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.CQ={Cq:A.abi(16
,0,null),Dr:function(){return 16;},C7:function(aIndex){if(aIndex>=16)return-1;return this.
Cq.Get(aIndex);},DO:function(A6){var P=0;while(P<16){if(this.Cq.Get(P)===A6)return P;
P=P+1;}return-1;},Hn:function(){var P=0;var max=-1;while(P<16){if(this.Cq.Get(P)>
max)max=this.Cq.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Cq=[]).__proto__=C.CQ.Cq;this.__proto__=C.CQ;},_className:"Application::ArraySelection"
};C.AutoAction={H6:null,AcS:null,ActionToString:null,Index:0,Init:function(aArg){
A.zV([this,this.As9],this.AcS,0);A.pe([this,this.As9],this);},Dr:function(){return this.
H6.NK();},C7:function(aIndex){if(aIndex>=this.Dr())return-1;return this.H6.OC(aIndex
);},Gb:function(aIndex){return this.ActionToString.BS(this.C7(aIndex));},DO:function(
A6){var P=0;while(P<this.Dr()){if(this.H6.OC(P)===A6)return P;P=P+1;}return-1;},
Hn:function(){var P=0;var max=-1;while(P<this.Dr()){if(this.H6.OC(P)>max)max=this.
H6.OC(P);P=P+1;}return max;},As9:function(G){this.Q=this.AcS.OC(this.Index);A.abo([
this,this.B$,this.Ca],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
ActionToString._Init.call(this.ActionToString={I:this},0);this.__proto__=C.AutoAction;
this.H6=A._GetAutoObject(C.Aup);this.AcS=A._GetAutoObject(C.AutoActions);this.Init(
aArg);},_Done:function(){this.__proto__=C.AC;this.ActionToString._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.ActionToString._ReInit(
);},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.H6)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AcS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ActionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAction"
};C.ALy={As6:0,Init:function(aArg){var B;A.zX([this,this.BdT],[B=A._GetAutoObject(
A.Device.Device),B.A7W,B.Ban],0);A.zX([this,this.BdQ],[B=A._GetAutoObject(A.Device.
Device),B.ARN,B.AZC],0);A.pe([this,this.BdT],this);A.pe([this,this.BdQ],this);},
Clear:function(){C.Vh.Clear.call(this);this.As6=0;},Cn:function(){A._GetAutoObject(
A.Device.Device).Arc(this.As6);A._GetAutoObject(A.Device.Device).Ard(this.toString(
));},BdT:function(G){this.As6=A._GetAutoObject(A.Device.Device).Pf;A.we(this,0);
},BdQ:function(G){this.EG(A._GetAutoObject(A.Device.Device).Aub);A.we(this,0);},
NP:function(Ey){if((this.As6&(((B=Ey)<0)?B+0x100000000:B))===(((B=Ey)<0)?B+0x100000000:
B))return true;return false;},AT2:function(Ey){this.As6=this.As6|(((B=Ey)<0)?B+0x100000000:
B);},_Init:function(aArg){C.Vh._Init.call(this,aArg);this.__proto__=C.ALy;this.Init(
aArg);},_className:"Application::ActiveActionsClass"};C.Pf={_Init:function(){C.ALy.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.ALz={Tp:null,Ay:null,Z:null,JG:null,CS:function(){this.Aiu(this);},Init:
function(aArg){A.zV([this,this.Aiu],this.Tp,0);A.pe([this,this.Aiu],this);},Dz:function(
G){C.Fj.Dz.call(this,G);this.MO(this);},KN:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.Cz=[this,this.Er];this.Bz.Cj=[this,this.A2C];this.Bz.Cf=[this,this.
A27];this.Bz.C5(A.aaL(A.ach.AqN));this.Bz.Cp(A.aaL(A.ach.AqG));this.Bz.CY(A.aaL(
A.ach.VK));}return this.Bz;},Er:function(G){if(this.BxL()>0){this.AAz();this.Xn(
this);}else A._GetAutoObject(A.Device.Device).A_(28,true,A.jV,0,null);},Aiu:function(
G){this.AoI();var P;for(P=0;P<this.Tp.NK();P=P+1){var Z8=A._GetAutoObject(C.Pf).
OC(P);this.A0K(Z8);}this.J(this.JG,0);A.aaS([this,this.MO],this);},Fa:function(G
){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);
this.Ay.Mt(-this.Z.Bt[1]);},MO:function(G){var B;this.Z.Vi(null,null);if(!!this.
AW&&((this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);},A0K:function(
G3){var AyC=A._NewObject(A.Device.ActionToString,0);var Aa=A._NewObject(C.R8,0);
Aa.T(AyC.BS(G3));Aa.Aj(true);Aa.GW=G3;Aa.A9D(this.Tp.NP(G3));this.J(Aa,0);this.Zl(
Aa);},AoI:function(){var B;var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){var
Adt=X;X=X.Ah;if(((Adt.U&0x400)===0x400))this.HJ(Adt);}},AAz:function(){var B;this.
Tp.Clear();var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===
0x400)&&!(X===this.JG)){var Aa=(C.R8.isPrototypeOf(X)?X:null);if(!!Aa){this.Tp.J(
Aa.GW);if(Aa.ARZ())this.Tp.AT2(Aa.GW);}else A.ab5("%s",AxV);}X=X.Ah;}this.Tp.Cn(
);},BxL:function(){var B;var A3B=0;var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)&&!(X===this.JG)){var Aa=(C.R8.isPrototypeOf(X)?X:null
);if(!!Aa){if(Aa.ARZ())A3B=A3B+1;}else A.ab5("%s",AxV);}X=X.Ah;}return A3B;},A2C:
function(G){var B;var Aa=(C.R8.isPrototypeOf(B=this.AW)?B:null);if(!!Aa){var AzS=(
C.R8.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AzS){this.Ahn(AzS,Aa);A.pe([this,this.MO
],this);}}},A27:function(G){var B;var Aa=(C.R8.isPrototypeOf(B=this.AW)?B:null);
if(!!Aa){var AAm=(C.R8.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAm){this.Ahn(Aa,AAm);
A.pe([this,this.MO],this);}}},Aql:function(G){var B;A._GetAutoObject(A.Device.Device
).ResetActiveActions(this);A.pe([this,this.Aiu],this);},_Init:function(aArg){C.Fj.
_Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Z._Init.call(this.
Z={I:this},0);C.AuG._Init.call(this.JG={I:this},0);this.__proto__=C.ALz;this.H(Rf
);this.Text.R(A.aaR(A.acf.ADL));this.Ay.H(IJ);this.Z.H(Ls);this.Z.Kg(1);this.JG.
H(AHD);this.JG.Aj(true);this.JG.T(A.aaR(A.acf.Aql));this.J(this.Ay,0);this.J(this.
Z,0);this.J(this.JG,0);this.Z.En=[this,this.Fa];this.JG.AR=[this,this.Aql];this.
Tp=A._GetAutoObject(C.Pf);this.Init(aArg);},_Done:function(){this.__proto__=C.Fj;
this.Ay._Done();this.Z._Done();this.JG._Done();C.Fj._Done.call(this);},_ReInit:function(
){C.Fj._ReInit.call(this);this.Ay._ReInit();this.Z._ReInit();this.JG._ReInit();this.
Text.R(A.aaR(A.acf.ADL));this.JG.T(A.aaR(A.acf.Aql));this.CS();},_Mark:function(
D){var B;C.Fj._Mark.call(this,D);if((B=this.Tp)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.R8={GW:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A7(0x11);this.
V.Text.Hq(10);},Bj:function(aSize){C.T5.Bj.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mh.M[0]));},Ai:function(Ae){var B;C.T5.Ai.call(this,Ae);var G8=((Ae&0x10
)===0x10);var Fn=((Ae&0x20)===0x20);var Gw=this.Bo.By;var FJ=A.jb.AdS;var GL=A.jb.
Bm;if(this.Hc){FJ=A.jb.Bm;GL=A.jb.Text;}if(!G8){this.Background.L(FJ);this.V.L(A.
jb.CI);}else if(Gw){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(Fn){this.
Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.L(GL);
}this.LD=G8;this.KA=Fn;this.Qk=Gw;},IO:function(G){this.A25(this);},A25:function(
G){this.AEu(!this.Ami);},A9D:function(E){this.AEu(E);},ARZ:function(){return this.
Ami;},_Init:function(aArg){C.T5._Init.call(this,aArg);this.__proto__=C.R8;this.Mh.
H(AXl);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vh={CD:0,
H6:A.abi(17,0,null),OC:function(Ht){return this.H6.Get(Ht);},NK:function(){return this.
CD;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.H6.Set(P,0);this.CD=0;},J:function(
Ey){if(this.CD>=17)A.ab5("%s",AHE);else{this.H6.Set(this.CD,Ey);this.CD=this.CD+
1;}},Cn:function(){},EG:function(AcF){var AIM=AcF.indexOf(String.fromCharCode(0x2C
),0);var A08=A.jV;var P=0;this.CD=0;while(P<17)if(AcF===A.jV){this.H6.Set(P,0);P++;
}else{if(AIM===-1){A08=AcF;AcF=A.jV;}else{A08=A.abV(AcF,AIM);AcF=A.ab1(AcF,0,AIM+
1);}var Z8=A.abZ(A08,0,10)|0;if(this.ADm(Z8)){this.H6.Set(this.CD,Z8);this.CD=this.
CD+1;P++;}AIM=AcF.indexOf(String.fromCharCode(0x2C),0);}if(AcF!==A.jV)A.ab5("%s"
,AXm);},toString:function(){var A2g=(((B=this.H6.Get(0))<0)?B+0x100000000:B).toFixed(
);var P;for(P=1;P<this.CD;P=P+1)A2g=(A2g+AHF)+(((B=this.H6.Get(P))<0)?B+0x100000000:
B).toFixed();return A2g;},Aw2:function(Ht,Ey){if(Ht>=this.CD){A.ab5("%s",((((AXn+
Ht.toFixed())+AXo)+this.CD.toFixed())+AXp)+AXq);return;}this.H6.Set(Ht,Ey);},Contains:
function(Ey){var P;for(P=0;P<this.CD;P=P+1)if(this.H6.Get(P)===Ey)return true;return false;
},ADm:function(Ey){return true;},DO:function(Ey){var P;for(P=0;P<this.CD;P=P+1)if(
this.H6.Get(P)===Ey)return P;return-1;},_Init:function(aArg){(this.H6=[]).__proto__=
C.Vh.H6;this.__proto__=C.Vh;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMh={Init:function(aArg){var B;A.zX([this,this.Bd3],[B=A._GetAutoObject(A.Device.
Device),B.A78,B.Baw],0);A.pe([this,this.Bd3],this);},Cn:function(){A._GetAutoObject(
A.Device.Device).Akd(this.toString());},ADm:function(Ey){switch(Ey){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bd3:function(
G){this.EG(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Vh._Init.call(this,aArg);this.__proto__=C.AMh;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMh._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
V6={Vf:null,Km:null,A6S:A.jV,Action:0,A4e:false,A_o:false,A_6:false,Bj:function(
aSize){C.Ff.Bj.call(this,aSize);this.QU.H(this.Ml.M);this.OB.H(this.QU.M);},Ai:function(
Ae){C.Ff.Ai.call(this,Ae);if(!this.LD){this.Km.TQ.L(A.jb.AmN);this.Km.QC.Y(true);
this.Km.QC.L(A.jb.AQs);}else if(this.Qk){this.Km.TQ.L(A.jb.Bm);this.Km.QC.Y(false
);}else if(this.KA){this.Km.TQ.L(A.jb.Bm);this.Km.QC.Y(false);}else{this.Km.TQ.L(
A.jb.Text);this.Km.QC.Y(true);this.Km.QC.L(A.jb.C2);}},BkQ:function(E){if(this.Action===
E)return;this.Action=E;},Bl5:function(E){if(this.A6S===E)return;this.A6S=E;this.
Vf.Text.R(E);},AS3:function(E){if(this.A_6===E)return;this.A_6=E;this.Km.BmO(!this.
Km.AUp);},AE9:function(E){if(this.A_o===E)return;this.A_o=E;this.Km.Y(!this.Km.Fh(
));},A9a:function(E){if(this.A4e===E)return;this.A4e=E;this.Vf.Y(E);},_Init:function(
aArg){C.Ff._Init.call(this,aArg);C.Vf._Init.call(this.Vf={I:this},0);C.Km._Init.
call(this.Km={I:this},0);this.__proto__=C.V6;this.H(AXr);this.Background.H(AXs);
this.G1.Ar(false);this.G1.Y(false);this.Vf.H(AXt);this.Vf.Y(false);this.Km.H(AXu
);this.Km.Y(false);this.J(this.Vf,0);this.J(this.Km,0);this.Ml.Ax(A.aaL(A.ach.AMN
));},_Done:function(){this.__proto__=C.Ff;this.Vf._Done();this.Km._Done();C.Ff._Done.
call(this);},_ReInit:function(){C.Ff._ReInit.call(this);this.Vf._ReInit();this.Km.
_ReInit();},_Mark:function(D){var B;C.Ff._Mark.call(this,D);if((B=this.Vf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.Vf={AL:null,Text:null,CC:null,Init:function(
aArg){this.Text.H(this.M);this.CC.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.CC._Init.call(this.CC={I:this},0);this.__proto__=
C.Vf;this.AL.H(AXv);this.AL.L(A.jb.BiA);this.H(AXw);this.Text.H(AXx);this.Text.L(
A.jb.Text);this.CC.H(AXy);this.CC.NY(1);this.CC.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.CC,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.O;this.AL._Done();this.Text._Done();this.CC._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.CC._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.Km={QC:null
,TQ:null,AUp:false,BmO:function(E){if(this.AUp===E)return;this.AUp=E;if(E){this.
TQ.Ax(A.aaL(A.ach.AB1));this.QC.Ax(A.aaL(A.ach.AB1));}else{this.TQ.Ax(A.aaL(A.ach.
Aqg));this.QC.Ax(A.aaL(A.ach.Aqg));}},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.Am._Init.call(this.QC={I:this},0);A.acg.Am._Init.call(this.TQ={I:this
},0);this.__proto__=C.Km;this.H(AxW);this.QC.H(AxW);this.QC.Cx(1);this.TQ.H(AxW);
this.TQ.Cx(0);this.J(this.QC,0);this.J(this.TQ,0);this.QC.Ax(A.aaL(A.ach.Aqg));this.
TQ.Ax(A.aaL(A.ach.Aqg));},_Done:function(){this.__proto__=A.Core.O;this.QC._Done(
);this.TQ._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.QC._ReInit();this.TQ._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TQ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ARr={
FY:null,Cb:null,Di:null,Dg:null,Ke:null,Y7:10,AqD:0,ADV:0,ARF:0,AyB:false,LQ:false
,Bb8:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).Ao.Lf(
))A._GetAutoObject(A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).
Ao.HC().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gh();A._GetAutoObject(
A.Device.Helper).Ap0(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.Az6],this.
C_.Q,0);A.zX([this,this.BzJ],this.Di.Q,0);A.zX([this,this.AAT],this.Dg.Q,0);A.zX([
this,this.AAT],this.Dg.Hz.Q,0);A.zX([this,this.AAT],[this,this.AR6,this.AE7],0);
A.zX([this,this.Gz],[B=A._GetAutoObject(A.Device.Device),B.A84,B.BaY],0);A.zX([this
,this.Bez],this.Cb.Q,0);A.pe([this,this.Az6],this);A.pe([this,this.Gz],this);A.pe([
this,this.AAT],this);A.pe([this,this.Bez],this);},CA:function(G){if(!this.AyB){this.
AyB=true;A.pe([this,this.AcC],this);}else C.HU.CA.call(this,G);},AfY:function(G){
this.ARF=this.Y7;this.Bce(this);},Er:function(G){A._GetAutoObject(A.Device.Helper
).W.He();A._GetAutoObject(C.A1).Fr();},AtT:function(){this.N.B2(A.jV);this.N.C5(
A.aaL(A.ach.AC8));this.N.Cf=[this,this.Ayo];},Az1:function(G){A._GetAutoObject(C.
A1).BU(63);},AE7:function(E){if(this.Y7===E)return;this.Y7=E;A.abo([this,this.AR6
,this.AE7],0);},Bce:function(G){var F;if(!this.Y7||(this.Bb8===true)){A._GetAutoObject(
A.Device.Device).A_(24,false,CO,0,null);if(this.ADV===1)A._GetAutoObject(A.Device.
Device).A_(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A_(23,
true,this.ADV.toFixed(),2000,null);this.Er(this);return;}this.FY.Gh();this.FY.Ew(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.FY.NU(A._GetAutoObject(A.Device.
Helper).W.Breed);this.FY.QX(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FY.JJ(A._GetAutoObject(A.Device.Helper).W.Gender);this.FY.Nb(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.FY.NX(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.FY.Ui(A._GetAutoObject(A.Device.Helper).W.VisualId);var Ak7=A._GetAutoObject(
A.Device.Helper).A02(this.FY,(F=this.Dg.HV.Hl,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Ao);if(!Ak7)this.AiN();else{A._GetAutoObject(A.Device.Helper).AJO(
this.FY,Ak7,(F=this.Dg.HV.Hl,F[1].call(F[0])),this.Y7-1,[this,this.Apm]);A._GetAutoObject(
A.Device.Device).A_(24,false,CO,0,null);}},Gz:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmO())this.C9.Y(true);else this.C9.Y(false);if(this.LQ){this.Di.
Y(false);this.Cb.T(A.aaR(A.acf.AB9));this.Cb.AEw(A.aaL(A.ach.AeV));}else{this.Di.
Y(true);this.Cb.T(A.aaR(A.acf.AkM));this.Cb.AEw(null);}if((this.Z.Bh_(this.AW)>=
0)&&(((this.AW.U&0x1)===0x1)===false))this.Jw(this.Z.TH(this.AW,0x1));this.An();
},ASx:function(E){if(this.AqD===E)return;this.AqD=E;A.abo([this,this.A8i,this.ASx
],0);},AAT:function(G){var F;var AJz=(F=this.Dg.Q,F[1].call(F[0]));var AzJ=-1;switch((
F=this.Dg.HV.Hl,F[1].call(F[0]))){case 0:AzJ=AJz+((F=A._GetAutoObject(A.Device.Helper
).BcL(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Y7-1));break;case 1:AzJ=(AJz+this.
Y7)-1;break;case 3:case 2:case 5:case 4:switch(this.Dg.Hz.AC.Q){case 0:AzJ=(AJz+
this.Y7)-1;break;case 1:AzJ=(AJz-this.Y7)+1;break;default:throw new Error(AXz+this.
Dg.Hz.AC.Q.toFixed());}break;default:throw new Error(AXA+this.Dg.Hz.AC.Q.toFixed(
));}this.ASx(AzJ);},BzJ:function(G){A.pe([this,this.Gz],this);A.pe([this,this.AtC
],this);},Az6:function(G){A._GetAutoObject(A.Device.Helper).AUV(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LQ);A.pe([this,this.AAT],this);},Apm:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.Apg();else switch((F=this.Dg.HV.Hl,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.Jw(this.Dg);break;case 0:this.Jw(this.Di
);break;case 1:this.Jw(this.Cb);break;default:throw new Error(AxX+(F=this.Dg.HV.
Hl,F[1].call(F[0])).toFixed());}break;case 25:this.Jw(this.Cb);break;case 47:if(
At.PopupState===7)this.Apg();else{this.Jw(this.Dg);this.Jw(this.Cb);}break;case 43:{
this.Jw(this.Dg);this.Jw(this.Di);}break;case 42:{this.Jw(this.Dg);this.Jw(this.
Cb);}break;case 41:break;default:A.ab5("%s%e",AsF,At.Id);}},AiN:function(){this.
FY.Cn(A._GetAutoObject(A.Device.Device).Ao);this.ADV=this.ADV+1;if(A._GetAutoObject(
A.Device.Helper).AmO()){if(A._GetAutoObject(A.Device.Device).Bu.Lf()){A._GetAutoObject(
A.Device.Device).A_(24,false,UO,0,null);A._GetAutoObject(A.Device.Device).A_(50,
true,A._GetAutoObject(A.Device.Device).Bu.HC().toFixed(),0,null);}else{var L3=A.
_GetAutoObject(A.Device.Device).Ao.La(0,this.FY.Id);A._GetAutoObject(A.Device.Device
).SB(L3);var B1=A._NewObject(A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(this.FY.
Id);B1.OnSetBodyWeight(this.KE);B1.OnSetTimestamp(this.FY.DateOfBirth);B1.Cn(A._GetAutoObject(
A.Device.Device).Bu);}}this.Apg();},Apg:function(){var B;var F,CP;if(!!(F=this.Cb.
Q,F[1].call(F[0]))){(F=this.Cb.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LQ)(
CP=this.Di.Q,CP[2].call(CP[0],(F=this.Cb.Q,F[1].call(F[0]))));}if(!this.LQ)(CP=this.
Di.Q,CP[2].call(CP[0],A._GetAutoObject(A.Device.Helper).A$k(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Di.Q,F[1].call(
F[0])),this.Di.AjB(),this.Di.AjD())));var IL=null;switch((F=this.Dg.HV.Hl,F[1].call(
F[0]))){case 3:IL=[B=A._GetAutoObject(A.Device.Device),B.AvM,B.Ayf];break;case 2:
IL=[B=A._GetAutoObject(A.Device.Device),B.AvN,B.Ayg];break;case 4:case 5:IL=[B=A.
_GetAutoObject(A.Device.Device),B.Ana,B.Aoh];break;default:;}if(!!IL){switch((F=
this.Dg.J$.VA,F[1].call(F[0]))){case 1:IL[2].call(IL[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IL[2].call(IL[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dg.Q,F[2].call(F[0],IL[1].call(IL[0])));
}var Xu=100-((this.Y7/this.ARF)*100);A._GetAutoObject(A.Device.Device).A_(24,true
,(((this.ARF.toFixed()+AsG)+(Xu|0).toFixed())+AsG)+(F=this.Dg.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BzT]);this.AE7(this.Y7-1);A.aaS([this,this.Bce],null);},BzT:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bb8=true;},Apn:function(G){var F;C.HU.Apn.call(this,G);var AoB=
0;switch((F=this.BY.Q,F[1].call(F[0]))){case 0:case 2:AoB=A._GetAutoObject(A.Device.
Device).Adz;break;case 1:AoB=730;break;default:A.ab5("%s%e",AkU,(F=this.BY.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.QX(A._GetAutoObject(A.Device.
Helper).Dw()-A._GetAutoObject(A.Device.Helper).Amp(AoB));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnF));switch(this.BY.AC.Q){case 0:{this.Ke.KO(A.aaR(A.acf.AMJ));this.
Ke.Kk(A.aaR(A.acf.AMK));}break;case 1:{this.Ke.KO(A.aaR(A.acf.Bg2));this.Ke.Kk(A.
aaR(A.acf.Bg3));}break;case 2:{this.Ke.KO(A.aaR(A.acf.BiY));this.Ke.Kk(A.aaR(A.acf.
BiZ));}break;default:throw new Error(AkU);}},AeK:function(E){if(this.LQ===E)return;
this.LQ=E;A.abo([this,this.AvP,this.AeK],0);},AtC:function(G){var F,CP,S2;this.AeK(((
F=this.Cb.Q,F[1].call(F[0]))===(CP=this.Di.Q,CP[1].call(CP[0])))&&!!(S2=this.Cb.
Q,S2[1].call(S2[0])));A.pe([this,this.Gz],this);},Bez:function(G){A.pe([this,this.
AtC],this);},AR6:function(){return this.Y7;},A8i:function(){return this.AqD;},AvP:
function(){return this.LQ;},_Init:function(aArg){C.HU._Init.call(this,aArg);C.Avx.
_Init.call(this.Cb={I:this},0);C.Q5._Init.call(this.Di={I:this},0);C.AGa._Init.call(
this.Dg={I:this},0);C.AUc._Init.call(this.Ke={I:this},0);this.__proto__=C.ARr;var
B;this.Dn(C.ACK);this.Cb.H(An7);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.AkM));this.
Cb.Arm(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ar3));this.Cb.Arn(A.
aaR(A.acf.Aj9));this.Di.H(AXB);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.T$));this.
Di.Ary(false);this.Dg.H(AXC);this.Dg.Aj(true);this.Dg.T(A.aaR(A.acf.A6F));this.Dg.
BC(0);this.Ke.H(AXD);this.Ke.Aj(true);this.Ke.T(A.aaR(A.acf.A7N));this.Ke.Gp(1);
this.Ke.E4(500);this.Ke.Kk(A.aaR(A.acf.AMK));this.Ke.KO(A.aaR(A.acf.AMJ));this.Ke.
A9u(A.aaR(A.acf.AqD)+A.aaR(A.acf.Colon));this.J(this.Cb,0);this.J(this.Di,0);this.
J(this.Dg,0);this.J(this.Ke,0);this.FY=A._NewObject(A.Device.Animal,0);this.Cb.AR=[
this,this.AcC];this.Cb.LU([this,this.AcC]);this.Cb.LX(A.aaL(A.ach.AeV));this.Cb.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Aka,B.NX]);this.Cb.PM([B=A._GetAutoObject(
A.Device.Device),B.AbK,B.AcA]);this.Cb.QY([B=A._GetAutoObject(A.Device.Device),B.
AbL,B.AcB]);this.Cb.Ub([B=A._GetAutoObject(A.Device.Device),B.Am9,B.Aog]);this.Cb.
AeK([this,this.AvP,this.AeK]);this.Di.Gi([this,this.D6,this.GI]);this.Di.LU([this
,this.AcC]);this.Di.LX(A.aaL(A.ach.AeV));this.Di.Ud([B=this.Gender.Animal,B.Wg,B.
JJ]);this.Di.PM([B=A._GetAutoObject(A.Device.Device),B.AbK,B.AcA]);this.Di.QY([B=
A._GetAutoObject(A.Device.Device),B.AbL,B.AcB]);this.Di.Ub([B=A._GetAutoObject(A.
Device.Device),B.Am9,B.Aog]);this.Di.As([B=A._GetAutoObject(A.Device.Helper).W,B.
Anb,B.Nb]);this.Di.Ane([B=this.AnimalType.Animal,B.PL,B.Ew]);this.Dg.Gi([this,this.
D6,this.GI]);this.Dg.LU([B=this.Dg,B.FN]);this.Dg.LX(A.aaL(A.ach.Edit));this.Dg.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Ara,B.Ui]);this.Dg.A9b(A._GetAutoObject(
A.Device.Helper).W);this.Ke.As([this,this.AR6,this.AE7]);this.Ke.Blr([this,this.
A8i,this.ASx]);this.Init(aArg);},_Done:function(){this.__proto__=C.HU;this.Cb._Done(
);this.Di._Done();this.Dg._Done();this.Ke._Done();C.HU._Done.call(this);},_ReInit:
function(){C.HU._ReInit.call(this);this.Cb._ReInit();this.Di._ReInit();this.Dg._ReInit(
);this.Ke._ReInit();this.Cb.T(A.aaR(A.acf.AkM));this.Cb.Arm(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ar3));this.Cb.Arn(A.aaR(A.acf.Aj9));this.Di.T(
A.aaR(A.acf.T$));this.Dg.T(A.aaR(A.acf.A6F));this.Ke.T(A.aaR(A.acf.A7N));this.Ke.
Kk(A.aaR(A.acf.AMK));this.Ke.KO(A.aaR(A.acf.AMJ));this.Ke.A9u(A.aaR(A.acf.AqD)+A.
aaR(A.acf.Colon));},_Mark:function(D){var B;C.HU._Mark.call(this,D);if((B=this.FY
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ke)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ATF={BZ:null,RatingMode:null,KN:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.Cf=null;this.Bz.Cj=null;this.Bz.Cz=[this,this.Xn];this.Bz.B2(A.jV
);this.Bz.Cp(null);this.Bz.CY(A.aaL(A.ach.VK));}return this.Bz;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BZ._Init.call(this.BZ={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ATF;var B;this.
H(Rf);this.BZ.H(AsC);this.BZ.T(A.aaR(A.acf.A$c));this.J(this.BZ,0);this.BZ.As([B=
this.RatingMode,B.B$,B.Ca]);this.BZ.CJ(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BZ._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BZ._ReInit(
);this.RatingMode._ReInit();this.BZ.T(A.aaR(A.acf.A$c));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Be7],[B=A._GetAutoObject(A.Device.Device),B.AR_,B.AZO],0);A.pe([this,this.Be7],this
);},Dr:function(){return 2;},Gb:function(aIndex){return this.RatingModeToString.
BS(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.
Device).Awz(E);},Be7:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cq.Set(0,0);this.Cq.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.CQ;this.RatingModeToString._Done();C.CQ._Done.call(this
);},_ReInit:function(){C.CQ._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.AM3={Wx:
function(G){C.Al9.Wx.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aqz()){
A._GetAutoObject(A.Device.Helper).W.Akk(false);A._GetAutoObject(A.Device.Helper).
W.Cn(A._GetAutoObject(A.Device.Device).Ao);}},_Init:function(aArg){C.Al9._Init.call(
this,aArg);this.__proto__=C.AM3;},_className:"Application::ControlMeasureTemperatureScreen"
};C.G$={DH:A.jV,T:function(E){if(this.DH===E)return;this.DH=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.G$;},_className:"Application::BaseItem"
};C.AU_={BZ:null,WeightRecordingMode:null,KN:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.Cf=null;this.Bz.Cj=null;this.Bz.Cz=[this,this.Xn];this.Bz.B2(A.jV
);this.Bz.Cp(null);this.Bz.CY(A.aaL(A.ach.VK));}return this.Bz;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BZ._Init.call(this.BZ={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AU_;var B;this.H(Rf);this.BZ.H(AsC);this.BZ.T(A.aaR(A.acf.Asn));this.BZ.E4(1);
this.J(this.BZ,0);this.BZ.As([B=this.WeightRecordingMode,B.B$,B.Ca]);this.BZ.CJ(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BZ.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BZ._ReInit();this.WeightRecordingMode.
_ReInit();this.BZ.T(A.aaR(A.acf.Asn));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dr:function(){return 2;},Gb:function(aIndex){return this.
WeightRecordingModeToString.BS(this.C7(aIndex));},As:function(E){C.CQ.As.call(this
,E);A._GetAutoObject(A.Device.Device).AwK(E);},Init:function(aArg){var B;A.zX([this
,this.Bf8],[B=A._GetAutoObject(A.Device.Device),B.A83,B.BaX],0);A.pe([this,this.
Bf8],this);},Bf8:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cq.Set(0,0);this.Cq.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.CQ;this.WeightRecordingModeToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.AaK={BooleanToAutoOnOff:null,Gb:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BS(aIndex);},_Init:function(aArg){C.FX._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.AaK;},_Done:function(
){this.__proto__=C.FX;this.BooleanToAutoOnOff._Done();C.FX._Done.call(this);},_ReInit:
function(){C.FX._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.FX._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Axm={A6T:function(){var B;this.
Aw3(1);this.Jh(0,3);this.Vp(0,0,(B=this.M)[3]-B[1]);this.A4i(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4i(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.Vx(0);},_Init:
function(aArg){C.AA5._Init.call(this,aArg);this.__proto__=C.Axm;},_className:"Application::Triangle"
};C.ATf={Z:null,Init:function(aArg){this.Bw8(this);},Bw7:function(P5){var Aa=A._NewObject(
C.AM9,0);Aa.H(BF);Aa.T(P5);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
As8(this);},As8:function(G){var B;var Ald=1;var A1_=0;var X=this.Z.Ah;var Cv=null;
var K2=null;while(!!X&&!((X.U&0x200)===0x200)){Cv=(C.OT.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cv){var AKJ=(B=Cv.V.B7.A6w(Cv.V.String,0,-1))[2]-B[0
];if(!!(C.Mj.isPrototypeOf(X)?X:null))AKJ=AKJ+20;if(A1_<AKJ)A1_=AKJ;Cv.H(A.abL(Cv.
M,120));Cv.H(A.abI(Cv.M,28));Cv.H(A.abM(Cv.M,this.M[0]));Cv.H(A.abO(Cv.M,((B=this.
M)[3]-B[1])-(Ald*28)));Ald=Ald+1;}else{K2=(A.acg.DR.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K2){var De=((B=this.M)[3]-B[1])-((Ald-1)*28);K2.DY([this.
M[0],K2.Eo[1]]);K2.DY([K2.Eo[0],De]);K2.DI([this.M[0]+120,K2.Ex[1]]);K2.DI([K2.Ex[
0],De]);}}X=X.Ah;}this.BAz(A1_,28);},BAz:function(aWidth,Bwe){var B;var X=this.Z.
Ah;var Cv=null;var K2=null;aWidth=aWidth+20;if(aWidth>(C.Ar4[0]-10))aWidth=C.Ar4[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cv=(C.OT.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cv){Cv.V.Text.A7(0x14);Cv.V.Text.Hq(10);Cv.H(A.abL(Cv.M,aWidth
));Cv.H(A.abI(Cv.M,Bwe));Cv.H(A.abM(Cv.M,this.M[2]-((B=Cv.M)[2]-B[0])));}else{K2=(
A.acg.DR.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K2){K2.DY([this.M[
2]-aWidth,K2.Eo[1]]);K2.DI([this.M[2],K2.Ex[1]]);}}X=X.Ah;}},Bw8:function(G){var
Aa=A._GetAutoObject(C.BN).Aqp;while(!!Aa){if(!!(C.AwR.isPrototypeOf(Aa)?Aa:null)
){var EA=(C.AwR.isPrototypeOf(Aa)?Aa:null);this.Bw6(EA.DH,EA.AR,EA.By,EA.AQA);}else
if(!!(C.AwT.isPrototypeOf(Aa)?Aa:null)){var EA=(C.AwT.isPrototypeOf(Aa)?Aa:null);
this.Bxb(EA.DH,EA.AR,EA.By,EA.Wf,EA.Wz);}else if(!!(C.Zg.isPrototypeOf(Aa)?Aa:null
)){var EA=(C.Zg.isPrototypeOf(Aa)?Aa:null);this.Bw5(EA.DH,EA.AR,EA.By);}else if(
!!(C.Akq.isPrototypeOf(Aa)?Aa:null)){var EA=(C.Akq.isPrototypeOf(Aa)?Aa:null);this.
Bw7(EA.DH);}else if(!!(C.AFE.isPrototypeOf(Aa)?Aa:null))this.Bxc();Aa=Aa.Mq;}A._GetAutoObject(
C.BN).Clear();A.pe([this,this.As8],this);},Bw5:function(P5,AcL,AhQ){var Aa=A._NewObject(
C.Mj,0);Aa.H(BF);Aa.T(P5);Aa.AR=AcL;Aa.Aj(true);Aa.Ar(AhQ);Aa.Bi(true);this.J(Aa
,0);this.As8(this);},Bxc:function(){var K2=A._NewObject(A.acg.DR,0);K2.L(A.jb.Bm
);K2.Aj(true);K2.NY(3);this.J(K2,0);this.As8(this);},Bw6:function(P5,AcL,AhQ,A0m
){var Aa=A._NewObject(C.Amn,0);Aa.H(BF);Aa.T(P5);Aa.AR=AcL;Aa.Aj(true);Aa.Ar(AhQ
);Aa.Bi(true);Aa.As(A0m);this.J(Aa,0);this.As8(this);},Bxb:function(P5,AcL,AhQ,A2o
,Af8){var Aa=A._NewObject(C.AM8,0);Aa.H(BF);Aa.T(P5);Aa.AR=AcL;Aa.Aj(true);Aa.Ar(
AhQ);Aa.Bi(true);Aa.Bmp(A2o);Aa.AFi(Af8);this.J(Aa,0);this.As8(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);
this.__proto__=C.ATf;this.H(Rf);this.Z.H(Rf);this.J(this.Z,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Z._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Z._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Ae0={_Init:
function(){A.acl.Ae0._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_k={Aqp:null,Ag5:null,Nx:function(P5){var EA=A._NewObject(
C.Akq,0);EA.DH=P5;this.J(EA);},Clear:function(){this.Aqp=null;this.Ag5=null;},Fz:
function(){var K2=A._NewObject(C.AFE,0);this.J(K2);},J:function(Bbx){if(!this.Aqp
){this.Aqp=Bbx;this.Ag5=this.Aqp;}else{this.Ag5.Mq=Bbx;this.Ag5=this.Ag5.Mq;}},Qt:
function(P5,AcL){var EA=A._NewObject(C.Zg,0);EA.DH=P5;EA.AR=AcL;this.J(EA);},Bgf:
function(P5,AcL,A0m){var EA=A._NewObject(C.AwR,0);EA.DH=P5;EA.AR=AcL;EA.AQA=A0m;
this.J(EA);},XA:function(P5){var EA=A._NewObject(C.Zg,0);EA.DH=P5;EA.By=false;this.
J(EA);},Auc:function(P5,AcL,A2o,Af8){var EA=A._NewObject(C.AwT,0);EA.DH=P5;EA.AR=
AcL;EA.Wf=A2o;EA.Wz=Af8;this.J(EA);},_Init:function(aArg){this.__proto__=C.A_k;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Aqp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BN={_Init:function(){C.A_k._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AwS={Mq:null,_Init:function(aArg){this.__proto__=
C.AwS;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AN8={Al7:null,Are:function(E){if(this.Al7===
E)return;if(!!this.Ab)this.Ab.Zl(this);if(!!this.Al7)this.Aqh(this.Al7,A._GetAutoObject(
C.Ar8),null,null,null,null,false);this.Al7=E;if(!!this.Al7)this.Aku(this.Al7,A._GetAutoObject(
C.Ar8),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);this.__proto__=C.AN8;this.H(BF);},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Al7)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wp={_Init:function(){C.AN8._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C1=A._NewObject(C.ATg,0);C1.H(this.M);this.Aku(C1,A.
_GetAutoObject(C.AnC),null,A._GetAutoObject(C.AnC),A._GetAutoObject(C.AnC),null,
null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rf);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Ar8={_Init:function(){C.AUe._Init.call(this,0);this.AB7=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATg={AL:null,_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.ATg;this.H(AHG);this.Do(0);this.AL.A3(0x3F);this.AL.H(AHG);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.O;this.AL.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUd={R4:function(){var B;var Ap=(A.acl.AeS.isPrototypeOf(B=A.acl.Ad3.R4.call(this
))?B:null);if(!Ap)throw new Error(Asy);Ap.Cm.Cu=255;Ap.Cm.B3=0;return Ap;},R3:function(
){var B;var Ap=(A.acl.AwQ.isPrototypeOf(B=A.acl.Ad3.R3.call(this))?B:null);if(!Ap
)throw new Error(Asy);Ap.EU.Cu=0;Ap.EU.B3=255;Ap.Dq=true;return Ap;},_Init:function(
aArg){A.acl.Ad3._Init.call(this,aArg);this.__proto__=C.AUd;},_className:"Application::ShadeOverlayTransition"
};C.AnC={_Init:function(){C.AUd._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkC={AnF:0,A1w:false,Init:function(aArg){
},Ai:function(Ae){var F;C.I1.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BBH=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).AkQ(BBH)+CO)+A._GetAutoObject(A.acj.DS).AfN()
);else this.BT.R(A.aaR(A.acf.Aj9));}},J2:function(G){var B;var Bf5=(this.A1w===false
)&&(this.AM<=this.Gg);if(Bf5)this.BC(this.AnF);this.A3Y(this.AM,4);if(Bf5){this.
BC(this.AM-this.AjP);this.A1w=true;}C.I1.J2.call(this,G);},JX:function(G){this.A3Y(
this.AM,5);C.I1.JX.call(this,G);},BC:function(E){this.A3Y(E,4);E=(((E+((this.AjP
/2)|0))/this.AjP)|0)*this.AjP;if(!E)this.A1w=false;C.I1.BC.call(this,E);},Ahd:function(
E){if(this.AnF===E)return;this.AnF=E;},A3Y:function(BvY,Gs){this.ASA(A._GetAutoObject(
A.acj.DS).BcP(BvY,Gs));},_Init:function(aArg){C.I1._Init.call(this,aArg);this.__proto__=
C.AkC;this.H(JR);this.AnF=this.Gg;this.JO(this.HY,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BC5={None:0,Left:1,BDH:2,Right:3};C.Ama={Ah3:
null,Ft:null,Ef:null,Background:null,Am1:null,FW:null,KI:A.jV,ADC:null,Init:function(
aArg){var B;A.zV([this,this.AfT],A._GetAutoObject(A.Device.Device).Ao,0);A.zX([this
,this.A28],[B=A._GetAutoObject(A.Device.Device).Ao,B.Fg,B.Fk],0);A.pe([this,this.
LL],this);A.pe([this,this.A28],this);this.Bb(this.Ef);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DG(this);},KN:function(){if(!this.Bz)this.Bz=A._NewObject(
C.N,0);return this.Bz;},EX:function(G){C.OverlayMenu.EX.call(this,G);A._GetAutoObject(
A.Device.Device).Ao.Bl(this.Ah3);},CA:function(G){C.OverlayMenu.CA.call(this,G);
this.AKj();},AlF:function(G){var Aa=(C.ABB.isPrototypeOf(G)?G:null);var Hj;if(!!
Aa)Hj=Aa.Hj;else Hj=this.FW.FE();if(Hj>=A._GetAutoObject(A.Device.Device).Ao.Cd(
))return;A._GetAutoObject(A.Device.Helper).HH(Hj);A.pe([this,this.Xn],this);},AKj:
function(){},AfT:function(G){this.An();},A2Z:function(G){if(this.FW.FE()<(A._GetAutoObject(
A.Device.Device).Ao.Cd()-1))this.FW.GZ(this.FW.FE()+1);},A20:function(G){if(this.
FW.FE()>0)this.FW.GZ(this.FW.FE()-1);},DG:function(G){var F0=A._GetAutoObject(A.
Device.Device).Ao.Cd();var MR=this.Bz;if(!MR)return;MR.CY(A.aaL(A.ach.Aee));MR.Cz=[
this,this.Xn];if(F0<=0){MR.Cp(null);MR.C5(null);MR.Cj=null;MR.Cf=null;MR.Zj=false;
MR.Zk=false;}else if(F0===1){MR.Cp(null);MR.C5(A.aaL(A.ach.Aef));MR.Cj=null;MR.Cf=[
this,this.AlF];MR.Zj=false;MR.Zk=false;}else{MR.Cp(A.aaL(A.ach.AqG));MR.C5(A.aaL(
A.ach.AqN));MR.Cj=[this,this.A2Z];MR.Cf=[this,this.A20];MR.Zj=true;MR.Zk=true;}}
,LL:function(G){this.Bfv(this);this.Ah3=A._GetAutoObject(A.Device.Device).Ao.Filter;
this.AKj();},Bmi:function(E){if(this.ADC===E)return;this.ADC=E;A.pe([this,this.BzG
],this);},BzG:function(G){this.Bfv(this);},Bfv:function(G){var B;if(!!this.Ft)this.
HJ(this.Ft);this.Ft=(C.Ev.isPrototypeOf(B=A._NewObject(this.ADC,0))?B:null);if(!
!this.Ft){this.Ft.H(AXE);this.J(this.Ft,0);}},A28:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ao.Filter&&!!A._GetAutoObject(A.Device.Device).Ao.Filter.DN(1,4
))this.FW.Dx(A.aaR(A.acf.ARz));else this.FW.Dx(this.KI);},Dx:function(E){if(this.
KI===E)return;this.KI=E;A.pe([this,this.A28],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ef._Init.call(this.Ef={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Am1={I:this},0);C.FW._Init.call(
this.FW={I:this},0);this.__proto__=C.Ama;this.H(Rf);this.Ef.H(BF);this.Ef.A9x(A.
jb.C2);this.Ef.A9y(A.jb.Text);this.Background.H(E7);this.Background.L(A.jb.BnO);
this.Am1.H(AHH);this.Am1.L(A.jb.C2);this.FW.H(AHH);this.FW.NV(C.ABB);this.ADC=C.
APd;this.KI=A.aaR(A.acf.AvB);this.J(this.Ef,0);this.J(this.Background,0);this.J(
this.Am1,0);this.J(this.FW,0);this.Ef.AR=[this,this.AlF];this.Ef.AbP(A._NewObject(
C.Yg,0));this.FW.Za(A._GetAutoObject(A.Device.Device).Ao);this.FW.Zb([this,this.
AlF]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ef._Done(
);this.Background._Done();this.Am1._Done();this.FW._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ef._ReInit();this.
Background._ReInit();this.Am1._ReInit();this.FW._ReInit();this.Dx(A.aaR(A.acf.AvB
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ah3)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Am1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.ABB={AP:null,DQ:null,Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.DQ.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.DQ.Dc(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.
AX)return;this.Hj=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DQ.Ew(
this.AX.AmC(Ad,14));this.DQ.AEy(this.AX.IU(Ad,13));this.DQ.AeJ(this.AX.HX(Ad,8));
this.DQ.Uf(this.AX.HX(Ad,11));this.DQ.AeM(this.AX.HX(Ad,12));this.DQ.AeO(this.AX.
CE(Ad,5));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AP={I:this},0);C.DQ._Init.call(this.DQ={I:this},0);this.__proto__=
C.ABB;this.H(O1);this.AP.L(A.jb.Bc);this.DQ.H(AXF);this.J(this.AP,0);this.J(this.
DQ,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.
DQ._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AP._ReInit();this.DQ._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Yg={Q:null,Init:function(
aArg){var B;this.AAu(this);this.As([B=A._GetAutoObject(A.Device.Device).Ao,B.Fg,
B.Fk]);},AEe:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fc();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var AiR=this.Aj$();if(AiR>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,AiR,false);Filter.
CV(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AV.AeE(false
);},Bvn:function(s){this.AEe(s);},AAu:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fc(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?
B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BFt:function(s){this.AAu(s);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcE],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcE],
E,0);if(!!E)A.pe([this,this.AcE],this);},C3:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.AV.Awg(-1);return;}var Ayx=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(1,4))?B:null);if(!Ayx){this.AV.Awg(
0);this.AV.AeE(true);}else this.AV.Awg(Ayx.A5);},AcE:function(s){this.C3(s);},_Init:
function(aArg){C.AjG._Init.call(this,aArg);this.__proto__=C.Yg;this.AV.Awg(0);this.
AV.Dk=[this,this.Bvn];this.Init(aArg);},_Mark:function(D){var B;C.AjG._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.Aqk={BirthType:null,EaseOfDelivery:null,Cb:null,Eb:null,Abs:null,GX:null,Ck:
null,Abq:null,AMr:false,Init:function(aArg){this.AMr=A._GetAutoObject(A.Device.Helper
).W.AqQ();if(this.AMr)this.AeD(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeD(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cb.
LU([this,this.AcC]);this.Cb.LX(A.aaL(A.ach.AeV));this.Cb.AR=[this,this.AcC];}this.
Eb.Ary(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.Gz],this.Eb.
Q,0);A.zX([this,this.Gz],this.Cb.Q,0);A.pe([this,this.Gz],this);},AfY:function(G
){if(((this.Eb.ArS===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQE(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Ra(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cn(
A._GetAutoObject(A.Device.Device).Ao);if(this.KE>0){if(this.AMr){var Ad=A._GetAutoObject(
A.Device.Device).Bu.La(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.EG(Ad,A._GetAutoObject(A.Device.
Device).Bu);B1.OnSetBodyWeight(this.KE);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Cn(A._GetAutoObject(A.Device.Device).Bu);}else A.ab5("%s%i"
,AXG,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bu.HC().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gh();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KE);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cn(
A._GetAutoObject(A.Device.Device).Bu);}}A._GetAutoObject(C.A1).Fr();},Er:function(
G){A._GetAutoObject(A.Device.Helper).W.EG(A._GetAutoObject(A.Device.Helper).W.CK
,A._GetAutoObject(A.Device.Device).Ao);A._GetAutoObject(C.A1).Fr();},AtT:function(
){this.N.B2(A.jV);this.N.C5(A.aaL(A.ach.AmL));this.N.Cf=[this,this.Ayo];},Az1:function(
G){A._GetAutoObject(C.A1).BU(32);},Gz:function(G){var F;var Kz=(F=this.Eb.Q,F[1].
call(F[0]));var Af_=(F=this.Cb.Q,F[1].call(F[0]));var A3S=true;if(!!Kz&&(Af_===Kz
))A3S=false;A._GetAutoObject(A.Device.Helper).Mz(this.Cb,A3S);this.Eb.Blj(!A3S);
},_Init:function(aArg){C.HU._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Avx._Init.
call(this.Cb={I:this},0);C.Q5._Init.call(this.Eb={I:this},0);C.Ab_._Init.call(this.
Abs={I:this},0);C.BZ._Init.call(this.GX={I:this},0);C.SE._Init.call(this.Ck={I:this
},0);C.BZ._Init.call(this.Abq={I:this},0);this.__proto__=C.Aqk;var B;this.Cb.H(AhK
);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.AkM));this.Cb.Arm(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CO)+A.aaR(A.acf.Ar3));this.Cb.Arn(A.aaR(A.acf.Aj9));this.Eb.H(AhK);
this.Eb.Aj(true);this.Eb.T(A.aaR(A.acf.T$));this.Abs.H(AXH);this.Abs.Aj(true);this.
Abs.T(A.aaR(A.acf.GF));this.GX.H(AhK);this.GX.Aj(true);this.GX.T(A.aaR(A.acf.Aq1
));this.Ck.H(AhK);this.Ck.Aj(true);this.Ck.T(A.aaR(A.acf.AdX));this.Ck.AFa(true);
this.Abq.H(AhK);this.Abq.Aj(true);this.Abq.T(A.aaR(A.acf.Agr));this.J(this.Cb,-1
);this.J(this.Eb,-1);this.J(this.Abs,-1);this.J(this.GX,-1);this.J(this.Ck,-1);this.
J(this.Abq,-1);this.BirthType.LV(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LV(A._GetAutoObject(A.Device.Helper).W);this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Aka,B.NX]);this.Eb.Gi([this,this.D6,this.GI]);this.Eb.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anb,B.Nb]);this.Abs.Gi([this,this.D6,this.GI]);this.Abs.As([
B=A._GetAutoObject(A.Device.Helper).W,B.Ara,B.Ui]);this.GX.As([B=this.BirthType,
B.B$,B.Ca]);this.GX.CJ(this.BirthType);this.Ck.Gi([this,this.D6,this.GI]);this.Ck.
LU([B=this.Ck,B.FN]);this.Ck.LX(A.aaL(A.ach.Edit));this.Ck.AbT([B=A._GetAutoObject(
A.Device.Helper).W,B.AvJ,B.QX]);this.Abq.As([B=this.EaseOfDelivery,B.B$,B.Ca]);this.
Abq.CJ(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HU;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cb._Done();this.Eb._Done(
);this.Abs._Done();this.GX._Done();this.Ck._Done();this.Abq._Done();C.HU._Done.call(
this);},_ReInit:function(){C.HU._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cb._ReInit();this.Eb._ReInit();this.Abs._ReInit();
this.GX._ReInit();this.Ck._ReInit();this.Abq._ReInit();this.Cb.T(A.aaR(A.acf.AkM
));this.Cb.Arm(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ar3));this.
Cb.Arn(A.aaR(A.acf.Aj9));this.Eb.T(A.aaR(A.acf.T$));this.Abs.T(A.aaR(A.acf.GF));
this.GX.T(A.aaR(A.acf.Aq1));this.Ck.T(A.aaR(A.acf.AdX));this.Abq.T(A.aaR(A.acf.Agr
));},_Mark:function(D){var B;C.HU._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Abs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ck)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abq
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Ab_={FB:null,AV:null,A9:0,IO:function(G){C.Dp.IO.call(this,G);if(!this.A9)this.
FN(this);else this.G7(this);},Ai:function(Ae){C.Dp.Ai.call(this,Ae);this.Hp.Y(false
);this.HY.Y(false);if(this.A9===1){this.Bb(this.AV);if(this.Hc){this.AV.FF(A.jb.
CI);this.Background.L(A.jb.C2);this.V.L(A.jb.Text);}else{this.AV.FF(A.jb.C2);this.
Background.L(A.jb.CI);this.V.L(A.jb.Text);}}else{if(this.Hc)this.AV.FF(A.jb.CI);
else this.AV.FF(A.jb.C2);this.Bb(null);}},BC:function(E){var F;var BQ=this.AM;C.
Dp.BC.call(this,E);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ua,this.Baz],0);},DG:function(G){var F;if(!
this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.
G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.
N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}break;default:this.FB.Aky((F=
this.N,F[1].call(F[0])));}},FN:function(G){this.Es(1);},G7:function(G){this.Es(0
);},Es:function(EJ){var F;if(!this.A9)this.FB.Ajm((F=this.N,F[1].call(F[0])));this.
A9=EJ;if(this.A9<0)this.A9=0;else if(this.A9>1)this.A9=1;if(this.A9===1)this.AV.
SA(7);this.DG(this);this.An();},_Init:function(aArg){C.Dp._Init.call(this,aArg);
C.AQy._Init.call(this.AV={I:this},0);this.__proto__=C.Ab_;this.H(UN);this.E4(999999
);this.V.R(AsH);this.V.L(A.jb.Bm);this.Hp.Y(false);this.HY.Y(false);this.AV.H(AXI
);this.AV.ASI(6);this.J(this.AV,0);this.AV.As([this,this.Ua,this.Baz]);this.FB=A.
_NewObject(C.Ad_,0);},_Done:function(){this.__proto__=C.Dp;this.AV._Done();C.Dp.
_Done.call(this);},_ReInit:function(){C.Dp._ReInit.call(this);this.AV._ReInit();
},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.FB)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dr:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.Auh={Z:null,QI:null,NQ:null,Ea:null,PB:null,Py:null,Pz:null,Ay:null,FX:null,
ReasonOfLeaving:null,Ahl:null,M2:0,Amr:false,ABF:true,AN1:false,ArO:false,Init:function(
aArg){A.zX([this,this.A8_],[this,this.A8A,this.ASL],0);this.Ag$(A._GetAutoObject(
A.Device.Helper).W.AhE(2));this.ReasonOfLeaving.As(this.ReasonOfLeaving.DO(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A8_],this);},Dz:function(G){
var B;var E_=0;var X=this.AW;switch(this.Co.CN){case 6:E_=2;break;case 7:E_=7;break;
case 4:E_=4;break;case 5:E_=5;break;default:;}X=this.QA(X,E_,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Z.HA(X,true,null,null);},AlE:function(G
){A._GetAutoObject(C.A1).Fr();},Aps:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bu.HC().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gh();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dw());B1.Cn(A._GetAutoObject(
A.Device.Device).Bu);}if(this.Amr){A._GetAutoObject(A.Device.Helper).W.Ahc(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6y(A._GetAutoObject(A.Device.Helper).Dw(),this.ArO);}A._GetAutoObject(A.Device.
Helper).W.AE$(this.ReasonOfLeaving.C7((F=this.NQ.Q,F[1].call(F[0]))));if(this.ABF
)A._GetAutoObject(A.Device.Helper).W.NX(0);if(this.ArO)A._GetAutoObject(A.Device.
Helper).W.Awi(true);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.
Device).Ao);this.A_U();},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[
1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},Ag$:function(E){
if(this.M2===E)return;this.M2=E;},Am_:function(){return this.M2;},BeB:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A1).Fr();A._GetAutoObject(A.Device.Helper
).ArY();}},A8_:function(G){switch(this.ArO){case false:this.Ea.T(A.aaR(A.acf.AVa
));break;case true:this.Ea.T(A.aaR(A.acf.BpS));break;default:;}},ASL:function(E){
if(this.ArO===E)return;this.ArO=E;},A8A:function(){return this.ArO;},A_U:function(
){A._GetAutoObject(A.Device.Device).A_(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeB]);},BlJ:function(E){if(this.AN1===E)return;
this.AN1=E;},Bj0:function(){return this.AN1;},Bk1:function(E){if(this.ABF===E)return;
this.ABF=E;},BjP:function(){return this.ABF;},Blh:function(E){if(this.Amr===E)return;
this.Amr=E;},BjW:function(){return this.Amr;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Ae5._Init.call(this.QI={I:this
},0);C.Ar7._Init.call(this.NQ={I:this},0);C.AkC._Init.call(this.Ea={I:this},0);C.
Ae5._Init.call(this.PB={I:this},0);C.Ae5._Init.call(this.Py={I:this},0);C.Ae5._Init.
call(this.Pz={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.FX._Init.call(this.
FX={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahl._Init.call(this.Ahl={I:this},0);this.__proto__=C.Auh;var B;this.N.Y(true);this.
N.B2(A.aaR(A.acf.Unregister));this.Dn(C.IA);this.Z.H(E7);this.Z.Kg(1);this.QI.H(
Z0);this.QI.Aj(true);this.QI.T(A.aaR(A.acf.Amr));this.QI.Bi(true);this.QI.Ze(false
);this.QI.Gp(-1);this.QI.E4(1);this.NQ.H(W1);this.NQ.Aj(true);this.NQ.T(A.aaR(A.
acf.ReasonOfLeaving));this.NQ.Bi(true);this.NQ.Ze(false);this.Ea.H(AhJ);this.Ea.
Aj(true);this.Ea.T(A.aaR(A.acf.AVa));this.Ea.Bi(false);this.Ea.Gp(1000);this.Ea.
E4(999000);this.PB.H(W1);this.PB.Aj(true);this.PB.T(A.aaR(A.acf.A4t));this.PB.Bi(
true);this.PB.Ze(false);this.PB.BC(1);this.PB.Gp(-1);this.PB.E4(1);this.Py.H(Z0);
this.Py.Aj(true);this.Py.T(A.aaR(A.acf.A4u));this.Py.Bi(true);this.Py.Ze(false);
this.Py.BC(1);this.Py.Gp(-1);this.Py.E4(1);this.Pz.H(W1);this.Pz.Aj(true);this.Pz.
T(A.aaR(A.acf.A5f));this.Pz.Bi(true);this.Pz.Ze(false);this.Pz.BC(1);this.Pz.Gp(-
1);this.Pz.E4(1);this.Ay.H(AxN);this.FX.As(0);this.J(this.Z,0);this.J(this.QI,0);
this.J(this.NQ,0);this.J(this.Ea,0);this.J(this.PB,0);this.J(this.Py,0);this.J(this.
Pz,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.EW));this.Z.En=[this,this.Fa];this.
QI.As([B=this.FX,B.B$,B.Ca]);this.QI.CJ(this.FX);this.QI.Akl([this,this.BjW,this.
Blh]);this.NQ.Gi([this,this.D6,this.GI]);this.NQ.LU([B=this.NQ,B.FN]);this.NQ.LX(
A.aaL(A.ach.Edit));this.NQ.As([B=this.ReasonOfLeaving,B.B$,B.Ca]);this.NQ.CJ(this.
ReasonOfLeaving);this.NQ.Ang(this.Ahl);this.Ea.As([this,this.Am_,this.Ag$]);this.
PB.As([B=this.FX,B.B$,B.Ca]);this.PB.CJ(this.FX);this.PB.Akl([this,this.Bj0,this.
BlJ]);this.Py.As([B=this.FX,B.B$,B.Ca]);this.Py.CJ(this.FX);this.Py.Akl([this,this.
A8A,this.ASL]);this.Pz.As([B=this.FX,B.B$,B.Ca]);this.Pz.CJ(this.FX);this.Pz.Akl([
this,this.BjP,this.Bk1]);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Z._Done();this.QI._Done();this.NQ._Done();this.Ea._Done();this.PB._Done();this.
Py._Done();this.Pz._Done();this.Ay._Done();this.FX._Done();this.ReasonOfLeaving.
_Done();this.Ahl._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Z._ReInit();this.QI._ReInit();this.NQ._ReInit();this.Ea._ReInit(
);this.PB._ReInit();this.Py._ReInit();this.Pz._ReInit();this.Ay._ReInit();this.FX.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahl._ReInit();this.N.B2(A.aaR(A.acf.
Unregister));this.QI.T(A.aaR(A.acf.Amr));this.NQ.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ea.T(A.aaR(A.acf.AVa));this.PB.T(A.aaR(A.acf.A4t));this.Py.T(A.aaR(A.acf.A4u
));this.Pz.T(A.aaR(A.acf.A5f));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahl)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUc={Ajz:null,Pr:null,AuI:AXJ,Bj:function(aSize){C.I1.Bj.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hp.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.HY.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.I1.Ai.call(this,Ae);this.Pr.L(this.V.AQ);if(!!this.Ajz){if((
F=this.Ajz,F[1].call(F[0]))===-1)this.Pr.R(this.AuI+AHI);else this.Pr.R((this.AuI+
CO)+(F=this.Ajz,F[1].call(F[0])).toFixed());}else this.Pr.R(this.AuI);},A2H:function(
G){this.An();},Blr:function(E){if(A.aaZ(this.Ajz,E))return;if(!!this.Ajz)A.z$([this
,this.A2H],this.Ajz,0);this.Ajz=E;if(!!E)A.zX([this,this.A2H],E,0);if(!!E)A.pe([
this,this.A2H],this);},A9u:function(E){if(this.AuI===E)return;this.AuI=E;this.An(
);},_Init:function(aArg){C.I1._Init.call(this,aArg);C.CG._Init.call(this.Pr={I:this
},0);this.__proto__=C.AUc;this.H(AXK);this.V.H(AXL);this.V.A7(0x12);this.Pr.H(AXM
);this.Pr.A7(0x12);this.Pr.L(A.jb.Bm);this.J(this.Pr,0);this.Pr.S(A.aaL(A.fl.Af)
);this.Pr.A2(A.aaL(A.fl.Ak));this.Pr.Cs(null);},_Done:function(){this.__proto__=
C.I1;this.Pr._Done();C.I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(
this);this.Pr._ReInit();this.Pr.S(A.aaL(A.fl.Af));this.Pr.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.I1._Mark.call(this,D);if((B=this.Ajz)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.ALK={Z:null,JF:null,Sj:null,Ay:null,Ap$:2500,AMZ:24,Dz:function(G){var B;var
E_=0;var X=this.AW;switch(this.Co.CN){case 6:E_=2;break;case 7:E_=7;break;case 4:
E_=4;break;case 5:E_=5;break;default:;}X=this.QA(X,E_,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Z.HA(X,true,null,null);},AlE:function(G){A._GetAutoObject(
C.A1).Fr();},Aps:function(G){},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1)
)[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},Bla:function(
E){if(this.Ap$===E)return;this.Ap$=E;},BjR:function(){return this.Ap$;},Blb:function(
E){if(this.AMZ===E)return;this.AMZ=E;},BjS:function(){return this.AMZ;},BjG:function(
G){var F,CP;this.JF.BT.L(this.JF.V.AQ);if(!!this.JF.Q)this.JF.BT.R((((String.fromCharCode(((
F=this.JF.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afm)+String.fromCharCode(((
CP=this.JF.Q,CP[1].call(CP[0]))+10000).toFixed().charCodeAt(2)||0))+CO)+this.JF.
AGD);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);C.I1._Init.call(this.JF={I:this},0);C.I1._Init.call(this.Sj={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.ALK;this.N.Y(true);this.
Dn(C.IA);this.Z.H(E7);this.Z.Kg(1);this.JF.H(AhJ);this.JF.Aj(true);this.JF.T(A.aaR(
A.acf.Ap$));this.JF.Bi(false);this.JF.Gp(0);this.JF.E4(5000);this.JF.Kk(A.aaR(A.
acf.AfQ));this.JF.KO(A.aaR(A.acf.AfQ));this.JF.ASA(100);this.Sj.H(W1);this.Sj.Aj(
true);this.Sj.T(A.aaR(A.acf.A_t));this.Sj.Bi(true);this.Sj.BC(24);this.Sj.Gp(10);
this.Sj.E4(33);this.Sj.Kk(AXN);this.Ay.H(AxN);this.J(this.Z,0);this.J(this.JF,0);
this.J(this.Sj,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.VK));this.Z.En=[this,this.
Fa];this.JF.As([this,this.BjR,this.Bla]);this.JF.A92([this,this.BjG]);this.Sj.As([
this,this.BjS,this.Blb]);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.
JF._Done();this.Sj._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Z._ReInit();this.JF._ReInit();this.Sj._ReInit();this.
Ay._ReInit();this.JF.T(A.aaR(A.acf.Ap$));this.JF.Kk(A.aaR(A.acf.AfQ));this.JF.KO(
A.aaR(A.acf.AfQ));this.Sj.T(A.aaR(A.acf.A_t));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Aq3={EaseOfDelivery:null,BirthType:null,Cb:null,Di:null,Dg:null,Ck:null,Ea:null
,GX:null,Lg:null,M2:0,LQ:false,Init:function(aArg){A.zX([this,this.Gz],this.Cb.Q
,0);A.zX([this,this.Gz],this.Di.Q,0);A.zX([this,this.Az6],this.C_.Q,0);A.zX([this
,this.Bd$],this.Ck.Dh,0);A.zX([this,this.Bd5],this.C9.Q,0);A.zX([this,this.AtC],
this.Cb.Q,0);A.zX([this,this.AtC],this.Di.Q,0);A.pe([this,this.Az6],this);A.pe([
this,this.Gz],this);A.pe([this,this.Bd$],this);A.pe([this,this.Bd5],this);A.pe([
this,this.AtC],this);},Er:function(G){A._GetAutoObject(A.Device.Helper).W.He();A.
_GetAutoObject(C.A1).Fr();},AfY:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.Ew((F=this.BY.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).Aho
){var Alp=A._GetAutoObject(A.Device.Helper).Aho.AOp();A._GetAutoObject(A.Device.
Helper).W.AbQ(Alp);A._GetAutoObject(A.Device.Helper).W.Anl(Alp);}var Ak7=A._GetAutoObject(
A.Device.Helper).A02(A._GetAutoObject(A.Device.Helper).W,(F=this.Dg.HV.Hl,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).Ao);if(!Ak7){this.AiN();A.pe([this,this.
BvL],this);}else A._GetAutoObject(A.Device.Helper).AJO(A._GetAutoObject(A.Device.
Helper).W,Ak7,(F=this.Dg.HV.Hl,F[1].call(F[0])),0,[this,this.Apm]);},AtT:function(
){this.N.B2(A.jV);this.N.C5(A.aaL(A.ach.ADh));this.N.Cf=[this,this.Ayo];},AiN:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device
).Ao);var L3=A._GetAutoObject(A.Device.Device).Ao.La(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SB(L3);var Bc5=false;if(A._GetAutoObject(
A.Device.Helper).AmO()){if(A._GetAutoObject(A.Device.Device).Bu.Lf()){Bc5=true;A.
_GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bu.
HC().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KE);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cn(A._GetAutoObject(A.Device.
Device).Bu);}}if(A._GetAutoObject(A.Device.Helper).A6Z()&&(Bc5===false)){if(A._GetAutoObject(
A.Device.Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bu.HC().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gh();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.Cn(A._GetAutoObject(A.Device.Device).Bu);}}var IL=null;switch((F=this.
Dg.HV.Hl,F[1].call(F[0]))){case 3:IL=[B=A._GetAutoObject(A.Device.Device),B.AvM,
B.Ayf];break;case 2:IL=[B=A._GetAutoObject(A.Device.Device),B.AvN,B.Ayg];break;case
4:case 5:IL=[B=A._GetAutoObject(A.Device.Device),B.Ana,B.Aoh];break;default:;}if(
!!IL)switch((F=this.Dg.J$.VA,F[1].call(F[0]))){case 1:IL[2].call(IL[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IL[2].call(IL[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}if(!!(F=this.Di.Q,F[1].call(F[0])))
A._GetAutoObject(A.Device.Helper).A$k(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.Gender.Animal.Gender,(F=this.Di.Q,F[1].call(F[0])),this.Di.AjB(),this.Di.AjD(
));},ApM:function(G){A._GetAutoObject(C.A1).Fr();},BvL:function(s){this.ApM(s);}
,Az1:function(G){A._GetAutoObject(C.A1).BU(55);},Ag$:function(E){if(this.M2===E)
return;this.M2=E;A.abo([this,this.Am_,this.Ag$],0);},Gz:function(G){if(A._GetAutoObject(
A.Device.Helper).AmO())this.C9.Y(true);else this.C9.Y(false);if(A._GetAutoObject(
A.Device.Helper).A6Z())this.Ea.Y(true);else this.Ea.Y(false);if(this.LQ){this.Di.
Y(false);this.Cb.T(A.aaR(A.acf.AB9));this.Cb.AEw(A.aaL(A.ach.AeV));}else{this.Di.
Y(true);this.Cb.T(A.aaR(A.acf.AkM));this.Cb.AEw(null);}},Az6:function(G){A._GetAutoObject(
A.Device.Helper).AUV(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LQ);},Bd$:function(G){A.pe([this,this.BfT],this
);},Bd5:function(G){A.pe([this,this.BfT],this);},BfT:function(G){var F,CP,S2;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.Ea.Ahd(A._GetAutoObject(
A.Device.Helper).AhE(A._GetAutoObject(A.Device.Helper).Aa_((F=this.BY.Q,F[1].call(
F[0]))),(CP=this.Ck.Dh,CP[1].call(CP[0])),2,(S2=this.BY.Q,S2[1].call(S2[0]))));break;
case 2:this.Ea.Ahd(A._GetAutoObject(A.Device.Helper).AhE(this.KE,(F=this.Ck.Dh,F[
1].call(F[0])),2,(CP=this.BY.Q,CP[1].call(CP[0]))));break;default:;}},Apm:function(
G){var F;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(
At.Id){case 22:case 21:switch((F=this.Dg.HV.Hl,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.Jw(this.Dg);break;case 0:this.Jw(this.Di);break;case 1:this.Jw(this.
Cb);break;default:throw new Error(AxX+(F=this.Dg.HV.Hl,F[1].call(F[0])).toFixed(
));}break;case 43:{this.Jw(this.Dg);this.Jw(this.Di);}break;case 25:case 42:{this.
Jw(this.Dg);this.Jw(this.Cb);}break;case 41:break;default:A.ab5("%s%e",AsF,At.Id
);}},Apn:function(G){var F;C.HU.Apn.call(this,G);var AoB=0;switch((F=this.BY.Q,F[
1].call(F[0]))){case 0:case 2:AoB=A._GetAutoObject(A.Device.Device).Adz;break;case
1:AoB=730;break;default:A.ab5("%s%e",AkU,(F=this.BY.Q,F[1].call(F[0])));}(F=this.
Ck.Dh,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dw()-A._GetAutoObject(A.Device.
Helper).Amp(AoB)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnF));this.Ea.Ahd(A._GetAutoObject(
A.Device.Helper).W.AhE(1));},AeK:function(E){if(this.LQ===E)return;this.LQ=E;A.abo([
this,this.AvP,this.AeK],0);},AtC:function(G){var F,CP,S2;this.AeK(((F=this.Cb.Q,
F[1].call(F[0]))===(CP=this.Di.Q,CP[1].call(CP[0])))&&!!(S2=this.Cb.Q,S2[1].call(
S2[0])));A.pe([this,this.Gz],this);},Am_:function(){return this.M2;},AvP:function(
){return this.LQ;},_Init:function(aArg){C.HU._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Avx._Init.call(this.Cb={I:this},0);C.Q5._Init.call(this.Di={I:this}
,0);C.AGa._Init.call(this.Dg={I:this},0);C.SE._Init.call(this.Ck={I:this},0);C.AkC.
_Init.call(this.Ea={I:this},0);C.BZ._Init.call(this.GX={I:this},0);C.BZ._Init.call(
this.Lg={I:this},0);this.__proto__=C.Aq3;var B;this.Dn(C.ACJ);this.Cb.H(An7);this.
Cb.Aj(true);this.Cb.T(A.aaR(A.acf.AkM));this.Cb.Arm(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CO)+A.aaR(A.acf.Ar3));this.Cb.Arn(A.aaR(A.acf.Aj9));this.Di.H(An7);this.
Di.Aj(true);this.Di.T(A.aaR(A.acf.T$));this.Di.Ary(false);this.Dg.H(AXO);this.Dg.
Aj(true);this.Dg.T(A.aaR(A.acf.GF));this.Dg.BC(0);this.Ck.H(Acz);this.Ck.Aj(true
);this.Ck.T(A.aaR(A.acf.AdX));this.Ck.AFa(true);this.CF.H(Acz);this.Ea.H(Acz);this.
Ea.Aj(true);this.Ea.T(A.aaR(A.acf.M2));this.Ea.Gp(1000);this.Ea.E4(999000);this.
GX.H(Acz);this.GX.Aj(true);this.GX.T(A.aaR(A.acf.Aq1));this.Lg.H(Acz);this.Lg.Aj(
true);this.Lg.T(A.aaR(A.acf.Agr));this.J(this.Cb,-3);this.J(this.Di,-3);this.J(this.
Dg,-3);this.J(this.Ck,-3);this.J(this.Ea,-2);this.J(this.GX,-1);this.J(this.Lg,-
1);this.EaseOfDelivery.LV(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LV(
A._GetAutoObject(A.Device.Helper).W);this.Cb.AR=[this,this.AcC];this.Cb.LU([this
,this.AcC]);this.Cb.LX(A.aaL(A.ach.AeV));this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Aka,B.NX]);this.Cb.PM([B=A._GetAutoObject(A.Device.Device),B.AbK,B.AcA
]);this.Cb.QY([B=A._GetAutoObject(A.Device.Device),B.AbL,B.AcB]);this.Cb.Ub([B=A.
_GetAutoObject(A.Device.Device),B.Am9,B.Aog]);this.Cb.AeK([this,this.AvP,this.AeK
]);this.Di.Gi([this,this.D6,this.GI]);this.Di.LU([this,this.AcC]);this.Di.LX(A.aaL(
A.ach.AeV));this.Di.Ud([B=this.Gender.Animal,B.Wg,B.JJ]);this.Di.PM([B=A._GetAutoObject(
A.Device.Device),B.AbK,B.AcA]);this.Di.QY([B=A._GetAutoObject(A.Device.Device),B.
AbL,B.AcB]);this.Di.Ub([B=A._GetAutoObject(A.Device.Device),B.Am9,B.Aog]);this.Di.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Anb,B.Nb]);this.Di.Ane([B=this.AnimalType.
Animal,B.PL,B.Ew]);this.Dg.Gi([this,this.D6,this.GI]);this.Dg.LU([B=this.Dg,B.FN
]);this.Dg.LX(A.aaL(A.ach.Edit));this.Dg.As([B=A._GetAutoObject(A.Device.Helper).
W,B.Ara,B.Ui]);this.Dg.A9b(A._GetAutoObject(A.Device.Helper).W);this.Ck.Gi([this
,this.D6,this.GI]);this.Ck.LU([B=this.Ck,B.FN]);this.Ck.LX(A.aaL(A.ach.Edit));this.
Ck.AbT([B=A._GetAutoObject(A.Device.Helper).W,B.AvJ,B.QX]);this.Ea.As([this,this.
Am_,this.Ag$]);this.GX.As([B=this.BirthType,B.B$,B.Ca]);this.GX.CJ(this.BirthType
);this.Lg.As([B=this.EaseOfDelivery,B.B$,B.Ca]);this.Lg.CJ(this.EaseOfDelivery);
this.Init(aArg);},_Done:function(){this.__proto__=C.HU;this.EaseOfDelivery._Done(
);this.BirthType._Done();this.Cb._Done();this.Di._Done();this.Dg._Done();this.Ck.
_Done();this.Ea._Done();this.GX._Done();this.Lg._Done();C.HU._Done.call(this);},
_ReInit:function(){C.HU._ReInit.call(this);this.EaseOfDelivery._ReInit();this.BirthType.
_ReInit();this.Cb._ReInit();this.Di._ReInit();this.Dg._ReInit();this.Ck._ReInit(
);this.Ea._ReInit();this.GX._ReInit();this.Lg._ReInit();this.Cb.T(A.aaR(A.acf.AkM
));this.Cb.Arm(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ar3));this.
Cb.Arn(A.aaR(A.acf.Aj9));this.Di.T(A.aaR(A.acf.T$));this.Dg.T(A.aaR(A.acf.GF));this.
Ck.T(A.aaR(A.acf.AdX));this.Ea.T(A.aaR(A.acf.M2));this.GX.T(A.aaR(A.acf.Aq1));this.
Lg.T(A.aaR(A.acf.Agr));},_Mark:function(D){var B;C.HU._Mark.call(this,D);if((B=this.
EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Di)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ck)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalTransponderDataScreen"};C.AGL={H1:null,Aht:
null,AgB:null,Ahu:null,AgC:null,AnimalType:null,Background:null,NS:null,Rc:null,
V:null,TL:null,Yl:null,Abn:null,PK:null,DH:A.jV,AGc:true,CS:function(){this.An();
},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.AnQ();this.Axn();},AnQ:function(
){var F,CP;var LA=0;var AlU=0;var Ali=0;var H7=0;if((((!!this.Aht&&!!this.Ahu)&&
!!this.AgB)&&!!this.AgC)&&!!this.AnimalType){AlU=(F=this.Aht,F[1].call(F[0]));Ali=(
F=this.AgB,F[1].call(F[0]));LA=A._GetAutoObject(A.Device.Helper).MN((F=this.Ahu,
F[1].call(F[0])),(CP=this.AgC,CP[1].call(CP[0])));H7=(F=this.AnimalType,F[1].call(
F[0]));}var K4=A.jb.Text;var AyF=A.jb.C2;if(!!LA){var AK2=A._GetAutoObject(A.acj.
DS).Alc(LA,AlU,Ali);AyF=A._GetAutoObject(A.acj.DS).Azk(AK2,H7);K4=A._GetAutoObject(
A.acj.DS).Azm(AK2,H7);}this.Background.L(AyF);this.TL.L(K4);this.Rc.L(K4);this.NS.
L(K4);this.Abn.L(K4);if(K4===A.jb.Bm)this.Yl.L(K4);else this.Yl.L(A.jb.CI);this.
V.L(K4);this.PK.L(K4);},Axn:function(){var F,CP;var LA=0;var AlU=0;var Ali=0;if(((
!!this.Aht&&!!this.Ahu)&&!!this.AgB)&&!!this.AgC){AlU=(F=this.Aht,F[1].call(F[0]
));Ali=(F=this.AgB,F[1].call(F[0]));LA=A._GetAutoObject(A.Device.Helper).MN((F=this.
Ahu,F[1].call(F[0])),(CP=this.AgC,CP[1].call(CP[0])));}if(!!LA){var AK2=A._GetAutoObject(
A.acj.DS).Alc(LA,AlU,Ali);this.Rc.R(A._GetAutoObject(A.Device.Converter).SW(AK2,
2,true));this.NS.Y(true);this.Rc.Y(true);this.PK.Y(false);}else{this.NS.Y(false);
this.Rc.Y(false);this.PK.Y(true);}this.TL.R(this.Bym(Ali-AlU,LA));this.Abn.Y(this.
AGc);this.Yl.Y(this.AGc);this.NS.R(A._GetAutoObject(A.acj.DS).Aaf());},Bym:function(
A0H,AhR){var B;if(AhR<0){A.ab5("%s",AXP);return A.jV;}var Im=(AXQ+A._GetAutoObject(
A.acj.DS).AfN())+CO;var FO=A._GetAutoObject(A.Device.Converter).AkQ(A0H);if(!A0H
)FO=A.abU(FO,AXR,0);else if(A0H>0)FO=A.abU(FO,AHJ,0);Im=this.Bfd(Im,AXS,FO);if(AhR===
1)Im=Im+A.aaR(A.acf.Biv);else{Im=Im+A.aaR(A.acf.Biw);Im=this.Bfd(Im,AXT,AhR.toFixed(
));}return Im;},Bfd:function(aString,BbB,BwL){if(aString===A.jV){A.ab5("%s",AXU);
return A.jV;}var A2m=aString.indexOf(BbB,0);if(A2m>=0){aString=A.ab1(aString,A2m
,BbB.length);aString=A.abU(aString,BwL,A2m);}return aString;},AS1:function(E){if(
A.aaZ(this.Aht,E))return;if(!!this.Aht)A.z$([this,this.C3],this.Aht,0);this.Aht=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},Blo:function(
E){if(A.aaZ(this.AgB,E))return;if(!!this.AgB)A.z$([this,this.C3],this.AgB,0);this.
AgB=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},AS2:function(
E){if(A.aaZ(this.Ahu,E))return;if(!!this.Ahu)A.z$([this,this.C3],this.Ahu,0);this.
Ahu=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},Blp:function(
E){if(A.aaZ(this.AgC,E))return;if(!!this.AgC)A.z$([this,this.C3],this.AgC,0);this.
AgC=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(
G){this.An();},T:function(E){if(this.DH===E)return;this.DH=E;this.V.R(E);},A91:function(
E){if(this.AGc===E)return;this.AGc=E;this.An();},Ew:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C3],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.NS={I:this},0);A.acg.Text._Init.call(this.Rc={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TL={I:this},0);A.acg.
Am._Init.call(this.Yl={I:this},0);A.acg.Am._Init.call(this.Abn={I:this},0);C.CG.
_Init.call(this.PK={I:this},0);this.__proto__=C.AGL;this.H(Afo);this.Background.
A3(0x3F);this.Background.H(Afo);this.NS.H(AXV);this.NS.R(A._GetAutoObject(A.acj.
DS).Aaf());this.NS.A7(0x9);this.NS.L(A.jb.Text);this.Rc.H(AXW);this.Rc.A7(0x14);
this.Rc.R(A.aaR(A.act.Aj7));this.Rc.L(A.jb.Text);this.V.A3(0x1D);this.V.H(AXX);this.
V.R(A.aaR(A.acf.At9));this.V.A7(0x12);this.V.L(A.jb.Text);this.TL.H(ZZ);this.Yl.
A3(0x14);this.Yl.H(AHK);this.Yl.Cx(1);this.Abn.A3(0x14);this.Abn.H(AHK);this.Abn.
Cx(0);this.PK.H(AXY);this.PK.R(A.aaR(A.acf.A4b));this.J(this.Background,0);this.
J(this.NS,0);this.J(this.Rc,0);this.J(this.V,0);this.J(this.TL,0);this.J(this.Yl
,0);this.J(this.Abn,0);this.J(this.PK,0);this.NS.S(A.aaL(A.fl.EF));this.NS.A2(A.
aaL(A.fl.Af));this.NS.Cs(A.aaL(A.fl.Ic));this.Rc.S(A.aaL(A.fl.Ad9));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(A.aaL(A.fl.Bk));this.TL.S(A.aaL(A.
fl.Af));this.TL.A2(A.aaL(A.fl.Ak));this.TL.Cs(A.aaL(A.fl.Bk));this.Yl.Ax(A.aaL(A.
ach.ABd));this.Abn.Ax(A.aaL(A.ach.ABd));this.H1=A._NewObject(A.Device.Rating,0);
this.PK.S(A.aaL(A.fl.Af));this.PK.A2(A.aaL(A.fl.Ak));this.PK.Cs(A.aaL(A.fl.Bk));
},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.NS._Done(
);this.Rc._Done();this.V._Done();this.TL._Done();this.Yl._Done();this.Abn._Done(
);this.PK._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.NS._ReInit();this.Rc._ReInit();this.V.
_ReInit();this.TL._ReInit();this.Yl._ReInit();this.Abn._ReInit();this.PK._ReInit(
);this.Rc.R(A.aaR(A.act.Aj7));this.V.R(A.aaR(A.acf.At9));this.PK.R(A.aaR(A.acf.A4b
));this.NS.S(A.aaL(A.fl.EF));this.NS.A2(A.aaL(A.fl.Af));this.NS.Cs(A.aaL(A.fl.Ic
));this.Rc.S(A.aaL(A.fl.Ad9));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cs(A.aaL(A.fl.Bk));this.TL.S(A.aaL(A.fl.Af));this.TL.A2(A.aaL(A.fl.Ak));this.
TL.Cs(A.aaL(A.fl.Bk));this.PK.S(A.aaL(A.fl.Af));this.PK.A2(A.aaL(A.fl.Ak));this.
PK.Cs(A.aaL(A.fl.Bk));this.CS();},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.H1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aht)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ahu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgC)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVb={Animal:null,Rating:null,Co:null,AD:null,AY:
0,Hd:function(G){var B;if(!this.Animal||!this.Rating)return;var FZ=this.AD.GW;var
Cy=(C.AGL.isPrototypeOf(B=this.AD.Cg)?B:null);if(!Cy)return;Cy.Ew([B=this.Animal
,B.PL,B.Ew]);Cy.Blo([B=A._GetAutoObject(A.Device.Device),B.AEc,B.AIo]);Cy.Blp([B=
this.Rating,B.A8R,B.OnSetTimestamp]);switch(FZ%this.AY){case 1:{Cy.AS1([B=this.Animal
,B.A8q,B.AER]);Cy.AS2([B=this.Animal,B.A8S,B.AFk]);Cy.T(A.aaR(A.acf.At9));}break;
default:if(this.Animal.AqQ()){Cy.AS1([B=this.Animal,B.ARX,B.Awe]);Cy.AS2([B=this.
Animal,B.ASc,B.AwG]);Cy.T(A.aaR(A.acf.ALo));}else{Cy.AS1([B=this.Animal,B.ARX,B.
Awe]);Cy.AS2([B=this.Animal,B.ASc,B.AwG]);Cy.T(A.aaR(A.acf.Bga));}}if(this.AY>1)
Cy.A91(true);else Cy.A91(false);Cy.H(A.abK(Cy.M,[(B=this.AD.M)[2]-B[0],this.AD.GY
]));},Dz:function(G){if(this.AY>0)switch(this.Co.CN){case 6:this.Cz(this);break;
case 7:this.Cf(this);break;default:this.Co.NC=true;}},LV:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jm(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jm(1);else{this.Jm(2);this.AD.GZ(1);this.
AD.HA(this.AD.Gk,true,null,null);}if(this.AY>0)this.AD.Abp(0,this.AY-1);},Akm:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.Abp(0,this.AY-1);
},Cz:function(G){if(this.AD.Gk>0)this.AD.GZ(this.AD.Gk-1);else this.AD.GZ(this.AY-
1);this.AD.HA(this.AD.Gk,true,null,null);},Cf:function(G){if(this.AD.Gk<(this.AY-
1))this.AD.GZ(this.AD.Gk+1);else this.AD.GZ(0);this.AD.HA(this.AD.Gk,true,null,null
);},Jm:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jm(this.AY);A.abo([this
,this.Aq9,this.Jm],0);},Aq9:function(){return this.AY;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BL._Init.call(this.Co={I:this},0);A.Core.CL._Init.
call(this.AD={I:this},0);this.__proto__=C.AVb;this.H(Afo);this.Co.Filter=147;this.
AD.A3(0x3F);this.AD.H(Afo);this.AD.NV(C.AGL);this.AD.AeN(160);this.AD.GZ(0);this.
AD.Jm(2);this.J(this.AD,0);this.Co.BM=[this,this.Dz];this.Co.DX=[this,this.Dz];this.
AD.Hd=[this,this.Hd];},_Done:function(){this.__proto__=A.Core.O;this.Co._Done();
this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Co._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Ec={Init:function(aArg){},Bj:function(aSize){C.Cl.Bj.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cl.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);var Fn=((
Ae&0x20)===0x20);var Gw=this.Bo.By;var FJ=A.jb.CI;var GL=A.jb.Text;if(this.Hc){FJ=
A.jb.C2;GL=A.jb.Text;}if(!G8){this.Background.L(A.jb.C2);this.V.L(A.jb.CI);}else
if(Gw){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(Fn){this.Background.
L(A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.L(GL);}this.LD=G8;
this.KA=Fn;this.Qk=Gw;},_Init:function(aArg){C.Cl._Init.call(this,aArg);this.__proto__=
C.Ec;this.H(JR);this.V.H(BF);this.Ze(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.Aev={KF:null,GC:A.jV,Bj:function(aSize){C.Ec.Bj.call(this,aSize);this.KF.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ec.Ai.call(this,Ae);this.KF.
L(this.V.AQ);},Init:function(aArg){},AbP:function(E){if(this.GC===E)return;this.
GC=E;this.KF.R(E);},_Init:function(aArg){C.Ec._Init.call(this,aArg);C.CG._Init.call(
this.KF={I:this},0);this.__proto__=C.Aev;this.H(JR);this.Background.H(JR);this.V.
H(Acv);this.V.R(Lt);this.KF.H(JS);this.KF.R(AXZ);this.J(this.KF,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(null);this.KF.S(A.aaL(A.fl.Af));this.
KF.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Ec;this.
KF._Done();C.Ec._Done.call(this);},_ReInit:function(){C.Ec._ReInit.call(this);this.
KF._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KF.S(A.aaL(
A.fl.Af));this.KF.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ec._Mark.call(this
,D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Avx={ABJ:null,Q:null,A0:null,AF:null,Ia:null,LQ:null,Am:null,EH:null,AND:A.jV
,ANE:A.jV,Bj:function(aSize){C.Aev.Bj.call(this,aSize);if(!this.ABJ)this.KF.H([].
concat(0,this.KF.M.slice(1,4)));else this.KF.H([].concat(this.Am.M[2],this.KF.M.
slice(1,4)));},Ai:function(Ae){var F,CP,S2;C.Aev.Ai.call(this,Ae);var Bb4=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.AoZ)this.AbP(this.AND);else
this.AbP(this.ANE);}else{this.AbP(A._GetAutoObject(A.Device.Converter).Ra((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ia&&!!this.A0)&&!!this.AF)&&!!this.LQ)&&(((F=this.
Ia,F[1].call(F[0]))===1)||(!(CP=this.Ia,CP[1].call(CP[0]))&&(S2=this.LQ,S2[1].call(
S2[0])))))Bb4=true;}}this.EH.Y(Bb4);this.Am.L(this.V.AQ);A.pe([this,this.AfU],this
);},C3:function(G){this.An();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},AEw:function(E){if(this.ABJ===E)return;this.ABJ=E;this.
Am.Ax(E);this.BiD();},PM:function(E){if(A.aaZ(this.A0,E))return;if(!!this.A0)A.z$([
this,this.Aap],this.A0,0);this.A0=E;if(!!E)A.zX([this,this.Aap],E,0);if(!!E)A.pe([
this,this.Aap],this);},QY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.Aaq],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.Aaq],E,0);if(!!E)
A.pe([this,this.Aaq],this);},Aaq:function(G){this.An();},Aap:function(G){this.An(
);},Ub:function(E){if(A.aaZ(this.Ia,E))return;if(!!this.Ia)A.z$([this,this.AlD],
this.Ia,0);this.Ia=E;if(!!E)A.zX([this,this.AlD],E,0);if(!!E)A.pe([this,this.AlD
],this);},AlD:function(G){this.An();},AfU:function(G){var F,CP;if((!this.Ia||!this.
A0)||!this.AF)return;var A16=this.KF.AeY([(this.KF.String.length-(F=this.AF,F[1].
call(F[0])))-(CP=this.A0,CP[1].call(CP[0])),0]);var A3p=this.KF.AeY([this.KF.String.
length-(F=this.AF,F[1].call(F[0])),0]);var AAL=this.KF.Df(0x0);this.EH.H([A16[0]-
1,AAL[1],A3p[0]+1,AAL[3]]);},Arm:function(E){if(this.AND===E)return;this.AND=E;this.
An();},Arn:function(E){if(this.ANE===E)return;this.ANE=E;this.An();},AeK:function(
E){if(A.aaZ(this.LQ,E))return;if(!!this.LQ)A.z$([this,this.A2O],this.LQ,0);this.
LQ=E;if(!!E)A.zX([this,this.A2O],E,0);if(!!E)A.pe([this,this.A2O],this);},A2O:function(
G){this.An();},_Init:function(aArg){C.Aev._Init.call(this,aArg);A.acg.Am._Init.call(
this.Am={I:this},0);A.acg.CC._Init.call(this.EH={I:this},0);this.__proto__=C.Avx;
this.Am.H(AhF);this.EH.H(AX0);this.EH.NY(2);this.EH.L(A.jb.EV);this.J(this.Am,0);
this.J(this.EH,0);this.KF.QZ([this,this.AfU]);},_Done:function(){this.__proto__=
C.Aev;this.Am._Done();this.EH._Done();C.Aev._Done.call(this);},_ReInit:function(
){C.Aev._ReInit.call(this);this.Am._ReInit();this.EH._ReInit();},_Mark:function(
D){var B;C.Aev._Mark.call(this,D);if((B=this.ABJ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A0)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ia)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Jv:0,Aao:4,Bde:true,Bdd:false,Bb$:true,Bc8:false,AlI:function(
G){C.Q4.AlI.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bc7()){this.Jv=A._GetAutoObject(
A.Device.Helper).Ur.Id;var Aii=A._GetAutoObject(A.Device.Helper).AQG(this.Jv);if(
Aii)A._GetAutoObject(A.Device.Device).A_(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A2S]);else{this.Aao=A._GetAutoObject(A.Device.
Helper).AQH(this.Jv);var BdB=false;if((this.Aao===3)||(this.Aao===2))BdB=A._GetAutoObject(
A.Device.Helper).A60(this.Jv,A._GetAutoObject(A.Device.Helper).W);if(BdB)A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Ra(this.Jv),0,null
);else switch(this.Aao){case 2:{var BO=A._GetAutoObject(A.Device.Converter).Axl(
this.Jv);A._GetAutoObject(A.Device.Device).A_(46,true,BO.toFixed(),0,[this,this.
A2S]);}break;case 3:case 1:case 0:case 4:this.A3F();break;default:throw new Error(
AHL+this.Aao.toFixed());}}}},Er:function(G){A._GetAutoObject(C.A1).Fr();},AIp:function(
s){this.Er(s);},A3F:function(){if((this.Aao===3)||(this.Aao===2)){if((this.Bb$&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Jv)){A._GetAutoObject(A.Device.Device).A_(69,true,A.jV,0,[this
,this.A2S]);return;}else this.BAR();}A._GetAutoObject(A.Device.Helper).W.NX(this.
Jv);this.Bc8=true;this.BAT();this.Er(this);},A2S:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A3F();break;case 107:switch(At.PopupState){case 7:{this.A3F();A._GetAutoObject(A.
Device.Helper).Bnz(this.Jv);}break;case 8:this.Er(this);break;default:;}break;case
69:if(At.PopupState===4)this.Er(this);break;default:A.ab5("%s%e",AHM,At.Id);}},BAR:
function(){A._GetAutoObject(A.Device.Helper).W.Nb(this.Jv);if(this.Bdd&&(A._GetAutoObject(
A.Device.Converter).ZG(this.Jv)===10)){var BbQ=Math.trunc((this.Jv%1000000000000
)/10000000000);if(!BbQ&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.Ew(0);else if((BbQ===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.Ew(2);}},BAT:function(){if(this.
Bde){A._GetAutoObject(A.Device.Helper).W.Ui(A._GetAutoObject(A.Device.Helper).Bgm(
A._GetAutoObject(A.Device.Device).AhB,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).AhB===1)A._GetAutoObject(A.Device.Helper).A$l();
}},_Init:function(aArg){C.Q4._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Y(true);this.Dn(C.IA);this.Number.R(A.aaR(A.acf.OP));this.I5.H(AX1);this.
II.H(WO);this.Ako(1);this.N.Cz=[this,this.AIp];this.N.CY(A.aaL(A.ach.EW));},_ReInit:
function(){C.Q4._ReInit.call(this);this.Number.R(A.aaR(A.acf.OP));},_className:"Application::SetTransponderScreen"
};C.ACV={Ge:null,Lk:null,Kf:null,CS:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.Ev.Ai.call(this,Ae);this.Lk.R(A._GetAutoObject(A.acj.DS
).AfN());this.Kf.R(A._GetAutoObject(A.acj.DS).Aaf());},_Init:function(aArg){C.Ev.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Ge={I:this},0);A.acg.Text._Init.
call(this.Lk={I:this},0);A.acg.Text._Init.call(this.Kf={I:this},0);this.__proto__=
C.ACV;this.Background.L(A.jb.Text);this.Ge.H(AX2);this.Ge.A7(0x11);this.Ge.R(A.aaR(
A.acf.Date));this.Ge.L(A.jb.Bm);this.Lk.H(AX3);this.Lk.A7(0x11);this.Lk.L(A.jb.Bm
);this.Kf.H(AX4);this.Kf.L(A.jb.Bm);this.J(this.Ge,0);this.J(this.Lk,0);this.J(this.
Kf,0);this.Ge.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kf.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.Ev;this.Ge._Done();this.Lk.
_Done();this.Kf._Done();C.Ev._Done.call(this);},_ReInit:function(){C.Ev._ReInit.
call(this);this.Ge._ReInit();this.Lk._ReInit();this.Kf._ReInit();this.Ge.R(A.aaR(
A.acf.Date));this.Ge.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kf.S(A.aaL(
A.fl.Af));this.CS();},_Mark:function(D){var B;C.Ev._Mark.call(this,D);if((B=this.
Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AGP={Mf:null,Hh:null,H5:null,AP:null,A$:null,FO:0,H7:0,Aix:false,Init:function(
aArg){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hh.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hh.M[2]-1,0,this.Hh.M[2]+1,aSize[
1]]);this.Mf.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H5.H(this.Mf.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.Aix){this.H5.R(Rg);this.H5.L(A.jb.
Text);this.Mf.L(this.Background.AQ);}else{this.H5.R(A._GetAutoObject(A.Device.Converter
).SW(this.FO,2,true));this.H5.L(A._GetAutoObject(A.acj.DS).Azm(this.FO,this.H7));
this.Mf.L(A._GetAutoObject(A.acj.DS).Azk(this.FO,this.H7));}this.Hh.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){var Alf=this.AX.HB(
Ad,6);var AlN=this.AX.CE(Ad,8);if(this.Hj>0){var BxW=this.AX.HB(this.Hj-1,6);var
BAu=this.AX.CE(this.Hj-1,8);var LA=A._GetAutoObject(A.Device.Helper).MN(BxW,Alf);
if(!!LA){this.Aix=false;this.FO=A._GetAutoObject(A.acj.DS).Alc(LA,BAu,AlN);}else{
this.Aix=true;this.FO=0;}}else{this.Aix=true;this.FO=0;}this.T(A._GetAutoObject(
A.acj.KG).ACm(Alf));this.Hh.R(A._GetAutoObject(A.Device.Converter).AkQ(AlN));this.
H7=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.An();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mf={I:this},0);A.acg.Text.
_Init.call(this.Hh={I:this},0);A.acg.Text._Init.call(this.H5={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AGP;this.V.H(Ob);this.Mf.H(AsI);this.Hh.H(AHN);this.Hh.A7(0x12);this.Hh.R(S0);
this.Hh.L(A.jb.Text);this.H5.H(AHO);this.H5.R(S0);this.H5.L(A.jb.Text);this.AP.H(
An_);this.AP.L(A.jb.Bc);this.A$.H(An$);this.A$.L(A.jb.Bc);this.J(this.Mf,0);this.
J(this.Hh,0);this.J(this.H5,0);this.J(this.AP,0);this.J(this.A$,0);this.Hh.S(A.aaL(
A.fl.Af));this.H5.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mf._Done();this.Hh._Done();this.H5._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mf._ReInit(
);this.Hh._ReInit();this.H5._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hh.
S(A.aaL(A.fl.Af));this.H5.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bh:null,VI:null,AhA:null,SO:null
,KI:A.jV,CS:function(){this.An();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LA=
A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LA){var FO=A._GetAutoObject(
A.acj.DS).Alc(LA,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var Adv=A.aaR(A.acf.BgA);Adv=A._GetAutoObject(
A.Device.Helper).Ne(Adv,P3,A._GetAutoObject(A.Device.Converter).SW(FO,2,true));Adv=
A._GetAutoObject(A.Device.Helper).Ne(Adv,AxF,A._GetAutoObject(A.acj.DS).Aaf());this.
SO.R(Adv);this.AhA.L(A._GetAutoObject(A.acj.DS).Azk(FO,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SO.L(A._GetAutoObject(A.acj.DS).Azm(FO,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SO.R(A.aaR(A.acf.AU$));this.AhA.L(A.jb.
AQs);this.SO.L(A.jb.Text);}},CA:function(G){var Fp=A._NewObject(A.Device.Filter,
0);var HR=A._NewObject(A.Device.Int32FilterCriterion,0);HR.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fp.CV(HR);var AcT=A._NewObject(A.Device.Int32FilterCriterion
,0);AcT.Initialize(8,2,0,true);Fp.CV(AcT);A._GetAutoObject(A.Device.Device).Bu.Bl(
Fp);this.Aw5(this);},EX:function(G){A._GetAutoObject(A.Device.Device).Bu.Bl(null
);},Aw5:function(G){this.Bh=A._NewObject(C.FW,0);this.Bh.NV(C.AGP);this.Bh.H(AxR
);this.Bh.Za(A._GetAutoObject(A.Device.Device).Bu);this.Bh.Dx(this.KI);this.J(this.
Bh,0);this.Bb(this.Bh);},Am8:function(G){A._GetAutoObject(C.A1).Fr();},Dx:function(
E){if(this.KI===E)return;this.KI=E;if(!!this.Bh)this.Bh.Dx(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ACV._Init.call(this.VI={I:this},0);A.acg.AL._Init.
call(this.AhA={I:this},0);A.acg.Text._Init.call(this.SO={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Y(true);this.Dn(C.IA);this.VI.H(
P4);this.KI=A.aaR(A.acf.Aj8);this.AhA.A3(0x1D);this.AhA.H(JS);this.SO.A3(0x1D);this.
SO.H(JS);this.SO.A7(0x12);this.SO.R(S0);this.J(this.VI,0);this.J(this.AhA,0);this.
J(this.SO,0);this.N.Cz=[this,this.Am8];this.N.CY(A.aaL(A.ach.EW));this.SO.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VI._Done();this.AhA._Done(
);this.SO._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VI._ReInit();this.AhA._ReInit();this.SO._ReInit();this.Dx(A.aaR(A.acf.Aj8
));this.SO.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mb={DL:null,Ach:null,AQ6:11,Gq:0,A4s:true,ABl:false,IO:function(G){if(A._GetAutoObject(
A.Device.Device).Ao.Cd()>0)this.Jn(4);else A._GetAutoObject(A.Device.Device).A_(
30,true,A.jV,0,null);},CA:function(G){if(this.DL.Azv())this.DL.AcS();else if((this.
Gq===2)&&A._GetAutoObject(A.Device.Helper).W.Aqz())this.Jn(5);else this.Jn(1);},
EX:function(G){this.AKB();},Er:function(G){this.Jn(0);A._GetAutoObject(C.A1).Fr(
);},BA7:function(){A._GetAutoObject(A.Device.Device).Ahs();},AKB:function(){A._GetAutoObject(
A.Device.Device).AnH();},A9e:function(E){if(this.ABl===E)return;this.ABl=E;A.abo([
this,this.BjK,this.A9e],0);},Jn:function(E){var B;if(this.Gq===E)return;this.Gq=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).Akx();A.zX([this,this.AJ3]
,[B=A._GetAutoObject(A.Device.Helper),B.Aq_,B.Akn],0);A.z$([this,this.AzY],[B=this.
DL,B.And,B.Jn],0);this.BA7();}break;case 3:{A.z$([this,this.AJ3],[B=A._GetAutoObject(
A.Device.Helper),B.Aq_,B.Akn],0);this.AKB();this.By6();}break;case 2:{A._GetAutoObject(
A.Device.Helper).ArY();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4s)this.BAU();else this.BAX();}break;case 4:{A.z$([this,this.AJ3],[B=A._GetAutoObject(
A.Device.Helper),B.Aq_,B.Akn],0);this.AKB();A._GetAutoObject(A.Device.Helper).ArY(
);A.zX([this,this.Bek],[B=A._GetAutoObject(A.Device.Device),B.AvU,B.Ayk],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.AQ6);}break;case 5:this.Bfx();break;case
6:{A.zX([this,this.AzY],[B=this.DL,B.And,B.Jn],0);this.DL.AcS();}break;case 0:{A.
z$([this,this.AJ3],[B=A._GetAutoObject(A.Device.Helper),B.Aq_,B.Akn],0);this.AKB(
);}break;default:throw new Error(AxY);}A.abo([this,this.And,this.Bvz],0);},Bvz:function(
Aq){this.Jn(Aq);},AJ3:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ur){if(
this.Gq===1)this.Jn(3);else A.ab5("%s%e",AX5,this.Gq);}else A.ab5("%s",AHP);},BAU:
function(){A._GetAutoObject(A.Device.Device).A_(13,true,A._GetAutoObject(A.Device.
Helper).AnO(A._GetAutoObject(A.Device.Helper).Ur.Id).toFixed(),0,[this,this.Bzi]
);},Bzi:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.Bcd(false))A._GetAutoObject(
C.A1).BU(31);else{A._GetAutoObject(A.Device.Helper).Akx();this.Jn(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).Akx();this.Jn(1);}},
Bcd:function(AiN){if(A._GetAutoObject(A.Device.Device).Ao.Lf()){A._GetAutoObject(
A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).Ao.HC().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gh();A._GetAutoObject(
A.Device.Helper).Ap0(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.NX(A._GetAutoObject(A.Device.Helper).Ur.Id);if(!!A._GetAutoObject(A.Device.
Helper).Aho){var Alp=A._GetAutoObject(A.Device.Helper).Aho.AOp();A._GetAutoObject(
A.Device.Helper).W.AbQ(Alp);A._GetAutoObject(A.Device.Helper).W.Anl(Alp);}if(A._GetAutoObject(
A.Device.Helper).AQH(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nb(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.Ui(A._GetAutoObject(A.Device.Helper).Bgl(A._GetAutoObject(A.Device.
Device).Agh,A._GetAutoObject(A.Device.Helper).W));if(AiN){A._GetAutoObject(A.Device.
Helper).W.Cn(A._GetAutoObject(A.Device.Device).Ao);var L3=A._GetAutoObject(A.Device.
Device).Ao.La(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SB(L3);if(A._GetAutoObject(A.Device.Helper).AmO()){if(A._GetAutoObject(A.
Device.Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bu.HC().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gh();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Aa_(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cn(A._GetAutoObject(
A.Device.Device).Bu);}}if(!A._GetAutoObject(A.Device.Device).Agh)A._GetAutoObject(
A.Device.Helper).A$l();}return true;},By6:function(){if(!!A._GetAutoObject(A.Device.
Helper).Ur){var AIR=true;if(A._GetAutoObject(A.Device.Helper).Ur.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AIR=A._GetAutoObject(A.Device.Helper).A7a(A._GetAutoObject(
A.Device.Helper).Ur.Id);if(!AIR&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bcd(true);AIR=A._GetAutoObject(A.Device.Helper).A7a(A._GetAutoObject(A.
Device.Helper).Ur.Id);}}if(AIR)this.Jn(5);else this.Jn(2);}else{A.ab5("%s",AHP);
return;}},Bek:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AQ6){A.z$([this,this.Bek],[B=A._GetAutoObject(A.Device.Device),B.AvU,B.Ayk
],0);if(A._GetAutoObject(A.Device.Helper).W.Aqz())this.Jn(5);else this.Jn(1);}},
Bfx:function(){if(this.ABl===true)this.Jn(6);else A._GetAutoObject(C.A1).BU(24);
},BAX:function(){A._GetAutoObject(A.Device.Device).A_(36,true,A.jV,0,[this,this.
Bz$]);},Bz$:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).Akx();this.Jn(1);}},AzY:function(G){if(!this.DL.Gq)this.Jn(1);},A2G:function(G
){},BvJ:function(s){this.A2G(s);},BjK:function(){return this.ABl;},And:function(
){return this.Gq;},_Init:function(aArg){C.Q4._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ach={I:this},0);this.__proto__=C.Mb;this.N.Y(true);this.Dn(C.AqA);this.
Number.H(AX6);this.Number.R(A.aaR(A.acf.A_O));this.I5.H(AX7);this.II.H(AX8);this.
Ach.H(AX9);this.Ach.R(AX_);this.Ach.L(A.jb.Text);this.J(this.Ach,0);this.N.Cz=[this
,this.Er];this.N.Cj=[this,this.BvJ];this.N.CY(A.aaL(A.ach.EW));this.Number.S(A.aaL(
A.fl.Af));this.Ach.S(A.aaL(A.fl.Hm));this.DL=A._GetAutoObject(C.DL);},_Done:function(
){this.__proto__=C.Q4;this.Ach._Done();C.Q4._Done.call(this);},_ReInit:function(
){C.Q4._ReInit.call(this);this.Ach._ReInit();this.Number.R(A.aaR(A.acf.A_O));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=
this.DL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4f={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,AoU:-1,Gq:0,Bw9:function(){var Bfe=false;
var Oj=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bu.HC().toFixed(),0,null);else if(Oj){Bfe=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Aw1(B1,5);B1.OnSetAppearance(3);B1.Cn(A._GetAutoObject(
A.Device.Device).Bu);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Aw1(B1
,5);B1.OnSetAppearance(1);B1.Cn(A._GetAutoObject(A.Device.Device).Bu);}A._GetAutoObject(
A.Device.Helper).W.EG(A._GetAutoObject(A.Device.Helper).W.CK,A._GetAutoObject(A.
Device.Device).Ao);if(Bfe)A._GetAutoObject(A.Device.Helper).W.Uf(false);if(Oj)A.
_GetAutoObject(A.Device.Helper).W.AnB(false);else A._GetAutoObject(A.Device.Helper
).W.AnB(true);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device
).Ao);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A_(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A_(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bw$:function(){A._GetAutoObject(
A.Device.Helper).W.AF_(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device).Ao);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A_(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qe:function(Ey){switch(Ey){case 4:this.Bw9();break;case
128:A._GetAutoObject(C.A1).BU(7);break;case 16:A._GetAutoObject(C.A1).BU(36);break;
case 1:A._GetAutoObject(C.A1).BU(10);break;case 2:A._GetAutoObject(C.A1).BU(11);
break;case 8:this.Bw$();break;case 64:A._GetAutoObject(C.A1).BU(29);break;case 32:
A._GetAutoObject(C.A1).BU(54);break;case 256:A._GetAutoObject(C.A1).BU(21);break;
case 512:A._GetAutoObject(C.A1).BU(30);break;case 1024:this.By3();break;case 262144:
this.BBl();break;case 2048:this.AcS();break;case 4096:this.Bb7(false);break;case
8192:this.Bw_();break;case 16384:this.By2();break;case 32768:this.Bxy();break;case
524288:this.Bxz();break;case 65536:this.BxZ();break;case 131072:this.BAK();break;
case 0:break;default:throw new Error(AX$);}},Bcf:function(Ey,BwE){var EL=A._NewObject(
C.V6,0);EL.AbO(false);EL.Aj(true);EL.AR=BwE;EL.BkQ(Ey);switch(Ey){case 1:{EL.T(A.
aaR(A.acf.AnJ));EL.DD(A.aaL(A.ach.ALe));}break;case 2:{EL.T(A.aaR(A.acf.A_x));EL.
DD(A.aaL(A.ach.ALf));}break;case 4:{EL.T(A.aaR(A.acf.Alarm));EL.DD(A.aaL(A.ach.ALg
));EL.AE9(true);}break;case 8:{EL.T(A.aaR(A.acf.ArK));EL.DD(A.aaL(A.ach.ALh));EL.
AE9(true);}break;case 16:{EL.T(A.aaR(A.acf.ALR));EL.DD(A.aaL(A.ach.ALi));}break;
case 32:{EL.T(A.aaR(A.acf.AnimalLoss));EL.DD(A.aaL(A.ach.ALj));}break;case 64:{EL.
T(A.aaR(A.acf.Unregister));EL.DD(A.aaL(A.ach.ALk));}break;case 128:{EL.T(A.aaR(A.
acf.Edit));EL.DD(A.aaL(A.ach.ALl));}break;case 256:{EL.T(A.aaR(A.acf.Weighing));
EL.DD(A._GetAutoObject(A.acj.DS).ByC());}break;case 512:{EL.T(A.aaR(A.acf.ARt));
EL.DD(A.aaL(A.ach.AK8));}break;case 1024:{EL.T(A.aaR(A.acf.LinkTransponder));EL.
DD(A.aaL(A.ach.AK9));}break;case 262144:{EL.T(A.aaR(A.acf.UnlinkTransponder));EL.
DD(A.aaL(A.ach.ALd));}break;case 2048:{EL.T(A.aaR(A.acf.To));EL.DD(A.aaL(A.ach.AK_
));}break;case 4096:{EL.T(A.aaR(A.acf.Calving));EL.DD(A.aaL(A.ach.AK$));}break;case
8192:{EL.T(A.aaR(A.acf.DryOff));EL.DD(A.aaL(A.ach.ALa));EL.AE9(true);}break;case
16384:{EL.T(A.aaR(A.acf.Bhz));EL.DD(A.aaL(A.ach.ALb));}break;case 131072:{EL.T(A.
aaR(A.acf.BnL));EL.DD(A.aaL(A.ach.ALc));}break;default:A.ab5("%s",(AYa+Ey.toFixed(
))+AYb);}return EL;},Bya:function(){this.AoU=this.AoU+1;if(this.AoU>=this.AutoActions.
NK())this.Jn(0);else this.Jn(2);},BAy:function(){this.AoU=-1;},Azv:function(){return(
this.AoU>-1)&&!this.ByW();},ByW:function(){return this.AoU>=this.AutoActions.NK(
);},Jn:function(E){if(this.Gq===E)return;this.Gq=E;switch(E){case 1:this.Bya();break;
case 2:{var Z8=this.AutoActions.OC(this.AoU);if(this.A4c(A._GetAutoObject(A.Device.
Helper).W,Z8))this.Qe(Z8);else A._GetAutoObject(A.Device.Device).A_(64,true,(this.
ActionToString.Lr(Z8)+AsG)+this.AnimalTypeToString.Lr(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BAy();break;default:throw new
Error(AxY);}A.abo([this,this.And,this.Jn],0);},MT:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bb7(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A1).BU(50);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.Azv())this.
Jn(1);},Bb9:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Ao.La(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},By3:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A1).BU(
50);else A._GetAutoObject(A.Device.Device).A_(32,true,A.jV,0,[this,this.MT]);},AcS:
function(){this.Jn(1);},BAw:function(){var Oj=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oj&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bu.
Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device
).Bu.HC().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gh();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Aw1(B1,5);B1.Cn(A._GetAutoObject(A.Device.Device).Bu);}}A._GetAutoObject(
A.Device.Helper).W.EG(A._GetAutoObject(A.Device.Helper).W.CK,A._GetAutoObject(A.
Device.Device).Ao);A._GetAutoObject(A.Device.Helper).W.Uf(false);if(Oj)A._GetAutoObject(
A.Device.Helper).W.AnB(false);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BAx:function(){A._GetAutoObject(
A.Device.Helper).W.AF_(false);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bb7:function(Bye){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(Bye===false))A._GetAutoObject(A.Device.
Device).A_(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A1).BU(62);},Bw_:
function(){A._GetAutoObject(A.Device.Helper).W.Aru(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device
).Ao);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A_(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A_(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},By2:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A1).BU(92);else A._GetAutoObject(A.
Device.Device).A_(69,true,A.jV,0,[this,this.MT]);},Bxy:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjR(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahc(false);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.
Device).Ao);A._GetAutoObject(A.Device.Device).A_(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.AeL(false);A._GetAutoObject(A.Device.
Helper).W.Cn(A._GetAutoObject(A.Device.Device).Ao);A._GetAutoObject(A.Device.Device
).A_(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},BxZ:function(){A._GetAutoObject(A.Device.Helper).W.Ahc(false);A._GetAutoObject(
A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device).Ao);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjR(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahc(false);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.
Device).Ao);A._GetAutoObject(A.Device.Device).A_(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A_(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A_(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4c:function(EI,Ey
){var Qo=false;switch(Ey){case 32768:Qo=EI.IsRegistrationNoticePending&&!!EI.NaisIdMother;
break;case 524288:Qo=EI.IsRegistrationNoticePending&&!EI.NaisIdMother;break;case
4096:case 8192:switch(EI.AnimalType){case 1:Qo=true;break;default:;}break;case 512:
switch(EI.AnimalType){case 0:Qo=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qo=true;break;default:A.ab5("%s",AYc+
Ey.toFixed());}return Qo;},BAK:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A1).BU(91);else A._GetAutoObject(A.Device.Device).A_(
69,true,A.jV,0,[this,this.MT]);},BBl:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A_(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.NX(0);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.
Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(86,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Bxz:function(){if(
A._GetAutoObject(A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(
A.Device.Helper).W.AeL(false);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(98,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},And:function(){return this.
Gq;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A4f;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALq={AaJ:null,Ap1:null,Jn:function(E){if(this.Gq===E)return;C.Mb.Jn.call(this
,E);switch(E){case 1:this.Dn(C.AqA);break;case 5:case 6:this.Dn(C.IA);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AxY);}},A2G:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mb._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaJ={I:this},0);C.ALr._Init.call(this.Ap1={I:this
},0);this.__proto__=C.ALq;this.A9e(true);this.AaJ.H(AYd);this.AaJ.R(A.aaR(A.acf.
To));this.AaJ.L(A.jb.Text);this.Ap1.H(AYe);this.J(this.AaJ,0);this.J(this.Ap1,0);
this.N.Cp(A.aaL(A.ach.Abk));this.AaJ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mb;this.AaJ._Done();this.Ap1._Done();C.Mb._Done.call(this);},_ReInit:function(
){C.Mb._ReInit.call(this);this.AaJ._ReInit();this.Ap1._ReInit();this.AaJ.R(A.aaR(
A.acf.To));this.AaJ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mb._Mark.call(
this,D);if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap1)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H6:null,JQ:null,A2G:function(G){if(this.H6.NP(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mb._Init.call(this,aArg);A.acg.Text._Init.call(this.
JQ={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JQ.H(AYf);this.JQ.KP(
true);this.JQ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.AA_));this.
JQ.L(A.jb.Text);this.J(this.JQ,0);this.N.Cp(A.aaL(A.ach.Abk));this.JQ.S(A.aaL(A.
fl.Af));this.H6=A._GetAutoObject(C.Pf);},_Done:function(){this.__proto__=C.Mb;this.
JQ._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.call(this);this.
JQ._ReInit();this.JQ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.AA_
));this.JQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mb._Mark.call(this,D);if((
B=this.H6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JQ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALr={Z:null,Init:
function(aArg){var B;A.zV([this,this.AAV],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.At8],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.AAV],this);
A.pe([this,this.At8],this);this.H(A.abK(this.M,AYg));this.Z.H(A.abK(this.Z.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYh)));},BbX:function(G){var B;var Ald=0;var AyY=0;
var Bcb;var X=this.Z.Ah;var Cv=null;Bcb=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NK()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cv=(C.V6.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cv){Cv.H(A.abK(Cv.M,AYi));Cv.H(A.abM(Cv.M
,(AyY*58)+Bcb));Cv.H(A.abO(Cv.M,Ald*58));if(AyY>=3){Ald=Ald+1;AyY=0;}else AyY=AyY+
1;}X=X.Ah;}this.Bb(null);},A07:function(Ey){var EL=A._GetAutoObject(C.DL).Bcf(Ey
,null);this.J(EL,0);this.BbX(this);},AoI:function(){var B;var X=this.Z.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var Adt=X;X=X.Ah;if(((Adt.U&0x400)===0x400))this.HJ(
Adt);}},AAV:function(G){this.AoI();var P;var CD=A._GetAutoObject(C.AutoActions).
NK();for(P=0;P<CD;P=P+1){var Z8=A._GetAutoObject(C.AutoActions).OC(P);this.A07(Z8
);}A.pe([this,this.BbX],this);A.pe([this,this.At8],this);A.pe([this,this.BBv],this
);},At8:function(G){var B;var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var Aa=(C.V6.isPrototypeOf(X)?X:null);Aa.AE9(false);}X=X.Ah;
}},BBv:function(G){var B;var X=this.Z.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var Aa=(C.V6.isPrototypeOf(X)?X:null);var Bxo=A._GetAutoObject(
C.AutoActions).NK();if(!!Aa){var P;Aa.A9a(false);for(P=0;P<Bxo;P=P+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OC(P)){Aa.A9a(true);Aa.Bl5(AYj+(P+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Z._Init.
call(this.Z={I:this},0);this.__proto__=C.ALr;this.Z.Kg(0);this.J(this.Z,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Z._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DL={_Init:function(
){C.A4f._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AO_={Lj:null,TZ:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).Alo());},_Init:function(aArg){C.Da._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lj={I:this},0);C.CG._Init.call(this.TZ={I:this},0);this.__proto__=
C.AO_;this.Lj.H(AYk);this.Lj.A7(0x12);this.Lj.L(A.jb.Text);this.TZ.H(Aoa);this.TZ.
R((A.aaR(A.acf.Ag5)+AHQ)+A.aaR(A.acf.J_));this.TZ.A7(0x12);this.TZ.L(A.jb.Text);
this.J(this.Lj,0);this.J(this.TZ,0);this.Lj.S(A.aaL(A.fl.Af));this.TZ.S(A.aaL(A.
fl.Ak));this.TZ.A2(A.aaL(A.fl.Bk));this.Init(aArg);},_Done:function(){this.__proto__=
C.Da;this.Lj._Done();this.TZ._Done();C.Da._Done.call(this);},_ReInit:function(){
C.Da._ReInit.call(this);this.Lj._ReInit();this.TZ._ReInit();this.TZ.R((A.aaR(A.acf.
Ag5)+AHQ)+A.aaR(A.acf.J_));this.Lj.S(A.aaL(A.fl.Af));this.TZ.S(A.aaL(A.fl.Ak));this.
TZ.A2(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ACT={Jl:null,DW:null,_Init:
function(aArg){C.Da._Init.call(this,aArg);A.acg.Text._Init.call(this.Jl={I:this}
,0);A.acg.Text._Init.call(this.DW={I:this},0);this.__proto__=C.ACT;this.Jl.H(AYl
);this.Jl.KP(true);this.Jl.A7(0x14);this.Jl.R(A.aaR(A.acf.Ahz)+AHR);this.Jl.L(A.
jb.Text);this.DW.H(Aoa);this.DW.KP(true);this.DW.R(A.aaR(A.acf.AFF));this.DW.L(A.
jb.Text);this.J(this.Jl,0);this.J(this.DW,0);this.Jl.S(A.aaL(A.fl.Ak));this.DW.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Da;this.Jl._Done();this.DW._Done(
);C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.Jl._ReInit(
);this.DW._ReInit();this.Jl.R(A.aaR(A.acf.Ahz)+AHR);this.DW.R(A.aaR(A.acf.AFF));
this.Jl.S(A.aaL(A.fl.Ak));this.DW.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Da._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DW
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TO={IY:null,_Init:function(aArg){C.Da._Init.call(this,aArg);C.CG._Init.call(this.
IY={I:this},0);this.__proto__=C.TO;this.IY.H(AHS);this.IY.R((((A.aaR(A.acf.RF)+Z1
)+AHT)+A.aaR(A.acf.A$z))+O3);this.IY.A7(0x12);this.IY.L(A.jb.Text);this.J(this.IY
,0);this.IY.S(A.aaL(A.fl.Af));this.IY.A2(A.aaL(A.fl.Ak));this.IY.Cs(A.aaL(A.fl.Bk
));},_Done:function(){this.__proto__=C.Da;this.IY._Done();C.Da._Done.call(this);
},_ReInit:function(){C.Da._ReInit.call(this);this.IY._ReInit();this.IY.R((((A.aaR(
A.acf.RF)+Z1)+AHT)+A.aaR(A.acf.A$z))+O3);this.IY.S(A.aaL(A.fl.Af));this.IY.A2(A.
aaL(A.fl.Ak));this.IY.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.Da._Mark.call(
this,D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APa={Lk:null,Kf:null,CS:function(){this.A_Q();},Init:function(aArg){this.A_Q(
);},A_Q:function(){this.Lk.R(A._GetAutoObject(A.acj.DS).AfN());this.Kf.R(A._GetAutoObject(
A.acj.DS).Aaf());},_Init:function(aArg){C.Da._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lk={I:this},0);C.CG._Init.call(this.Kf={I:this},0);this.__proto__=C.APa;
this.Lk.H(AYm);this.Lk.A7(0x12);this.Lk.L(A.jb.Text);this.Kf.H(Aoa);this.Kf.L(A.
jb.Text);this.J(this.Lk,0);this.J(this.Kf,0);this.Lk.S(A.aaL(A.fl.Af));this.Kf.S(
A.aaL(A.fl.Af));this.Kf.A2(A.aaL(A.fl.Ak));this.Kf.Cs(A.aaL(A.fl.Bk));this.Init(
aArg);},_Done:function(){this.__proto__=C.Da;this.Lk._Done();this.Kf._Done();C.Da.
_Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.Lk._ReInit();
this.Kf._ReInit();this.Lk.S(A.aaL(A.fl.Af));this.Kf.S(A.aaL(A.fl.Af));this.Kf.A2(
A.aaL(A.fl.Ak));this.Kf.Cs(A.aaL(A.fl.Bk));this.CS();},_Mark:function(D){var B;C.
Da._Mark.call(this,D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kf
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AMH={Mf:null,Hh:null,H5:null,AP:null,A$:null,FO:0,Aal:0,H7:0,Aix:false,Init:function(
aArg){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hh.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hh.M[2]-1,0,this.Hh.M[2]+1,aSize[
1]]);this.Mf.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H5.H(this.Mf.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.Aix){this.H5.R(Rg);this.H5.L(A.jb.
Text);this.Mf.L(this.Background.AQ);}else{this.H5.R(A._GetAutoObject(A.Device.Converter
).SW(this.FO,2,true));this.H5.L(A._GetAutoObject(A.acj.DS).Azm(this.FO,this.H7));
this.Mf.L(A._GetAutoObject(A.acj.DS).Azk(this.FO,this.H7));}if(this.Aal>0)this.Hh.
R(A._GetAutoObject(A.Device.Converter).AkQ(this.Aal));else this.Hh.R(Rg);this.Hh.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){var Ma=
this.AX.CE(Ad,1);var At3=this.AX.HB(Ad,24);var AJB=this.AX.CE(Ad,23);var At4=this.
AX.HB(Ad,19);this.Aal=this.AX.CE(Ad,18);if((At3>0)&&(At3!==At4)){var LA=A._GetAutoObject(
A.Device.Helper).MN(At3,At4);if(!!LA){this.Aix=false;this.FO=A._GetAutoObject(A.
acj.DS).Alc(LA,AJB,this.Aal);}else{this.Aix=true;this.FO=0;}}else{this.Aix=true;
this.FO=0;}this.T(Ma.toFixed());this.H7=this.AX.AmC(Ad,14);this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mf={I:this},0);A.acg.Text.
_Init.call(this.Hh={I:this},0);A.acg.Text._Init.call(this.H5={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AMH;this.V.H(Ob);this.Mf.H(AsI);this.Hh.H(AHN);this.Hh.A7(0x12);this.Hh.R(S0);
this.Hh.L(A.jb.Text);this.H5.H(AHO);this.H5.R(S0);this.H5.L(A.jb.Text);this.AP.H(
An_);this.AP.L(A.jb.Bc);this.A$.H(An$);this.A$.L(A.jb.Bc);this.J(this.Mf,0);this.
J(this.Hh,0);this.J(this.H5,0);this.J(this.AP,0);this.J(this.A$,0);this.Hh.S(A.aaL(
A.fl.Af));this.H5.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mf._Done();this.Hh._Done();this.H5._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mf._ReInit(
);this.Hh._ReInit();this.H5._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hh.
S(A.aaL(A.fl.Af));this.H5.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M1={Me:null,AP:null,A$:null,Gr:null,W$:0,Init:
function(aArg){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.Me.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Me.M);this.Background.H([].concat(this.Me.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gr.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gr.M[2]-1,0,this.
Gr.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gr.L(this.V.AQ
);if(!!this.W$&&(this.W$!==5)){this.Me.L(A._GetAutoObject(A.acj.Assessment).Qg(this.
W$));this.V.L(A._GetAutoObject(A.acj.Assessment).Xi(this.W$));}else this.Me.L(this.
Background.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){var
Ma=this.AX.CE(Ad,1);var LN=this.AX.IU(Ad,13);var Alj=this.AX.IU(Ad,17);var Als=this.
AX.HX(Ad,11);var AyG=this.AX.HB(Ad,4);var AfA=A._GetAutoObject(A.Device.Helper).
MN(AyG,A._GetAutoObject(A.Device.Helper).Dw());this.W$=A._GetAutoObject(A.Device.
Helper).ALO(LN,Als,Alj);this.T(Ma.toFixed());if(AfA<100)this.Gr.R((AfA.toFixed()+
CO)+A.aaR(A.acf.ALp));else this.Gr.R(A._GetAutoObject(A.acj.KG).ACn(AyG,A._GetAutoObject(
A.Device.Helper).Dw(),AHU));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Me={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gr={I:this
},0);this.__proto__=C.M1;this.Me.H(AsI);this.Background.H(AYn);this.V.H(Ob);this.
AP.H(An_);this.AP.L(A.jb.Bc);this.A$.H(An$);this.A$.L(A.jb.Bc);this.Gr.H(AxZ);this.
J(this.Me,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gr,0);this.Gr.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Me._Done(
);this.AP._Done();this.A$._Done();this.Gr._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Me._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gr._ReInit();this.Gr.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Me)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AMF={Ajl:null,N8:null,AP:null,A$:null,Jf:null,AJW:0,A15:0,Init:function(aArg
){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajl.H(this.N8.M);this.A$.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jf.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jf.Dc(this.V.AQ);if(this.AJW>0){this.Ajl.L(A._GetAutoObject(A.acj.Assessment
).Qg(this.A15));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xi(this.A15));}else{
this.Ajl.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hj=Ad;if(!!this.AX){var Ky=this.AX.CE(Ad,0);var Ma=this.AX.CE(Ad,
1);this.AJW=this.AX.CE(Ad,5);this.A15=this.AX.IU(Ad,17);this.T(Ma.toFixed());if(
this.AJW>0)this.N8.R(A._GetAutoObject(A.Device.Converter).AkJ(this.AJW));else this.
N8.R(Rg);var W_=A._GetAutoObject(A.Device.Helper).Zw(6);A._GetAutoObject(A.Device.
Device).SB(Ad);var A0f=A._GetAutoObject(A.Device.Helper).BhZ(A._GetAutoObject(A.
Device.Device).Bu,9,Ky,W_,0);this.Jf.A9n(A0f.Get(3));this.Jf.A9p(A0f.Get(2));this.
Jf.A9o(A0f.Get(1));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.Ajl={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Jf._Init.call(this.Jf={I:this},0);this.__proto__=C.AMF;this.N8.A7(0x12);this.
N8.R(S0);this.N8.L(A.jb.Text);this.AP.H(An_);this.AP.L(A.jb.Bc);this.A$.H(An$);this.
A$.L(A.jb.Bc);this.Jf.H(AYo);this.J(this.Ajl,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jf,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajl._Done();this.N8._Done();this.AP.
_Done();this.A$._Done();this.Jf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajl._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jf._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jf={Ae_:null,
ColoredCounterAttrSet:null,ABO:0,ABP:0,ABN:0,KQ:0,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);var AJN;var AK7;var AKh;var AlA=0;if(this.ABN>0){AJN=this.ABN.toFixed(
);AlA+=AJN.length;}else{AJN=AYp;AlA++;}if(this.ABP>0){AK7=this.ABP.toFixed();AlA+=
AK7.length;}else{AK7=Ax0;AlA++;}if(this.ABO>0){AKh=this.ABO.toFixed();AlA+=AKh.length;
}else{AKh=AHI;AlA++;}if(AlA<=4)this.ColoredCounterAttrSet.Aha(A.aaL(A.fl.Af));else
if(AlA<=5)this.ColoredCounterAttrSet.Aha(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Aha(A.aaL(A.fl.Bk));this.Ae_.R(((((AYq+AJN)+AYr)+AK7)+AYs)+AKh);},A9o:function(E
){if(this.ABO===E)return;this.ABO=E;this.An();},A9p:function(E){if(this.ABP===E)
return;this.ABP=E;this.An();},A9n:function(E){if(this.ABN===E)return;this.ABN=E;
this.An();},Dc:function(E){if(this.KQ===E)return;this.KQ=E;this.ColoredCounterAttrSet.
Ag9(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Auo._Init.call(
this.Ae_={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jf;this.H(AHV);this.Ae_.A3(0x3F);this.Ae_.H(AHV);this.
Ae_.R(S0);this.ColoredCounterAttrSet.Bk2(A.jb.EV);this.ColoredCounterAttrSet.A9j(
A.jb.H2);this.ColoredCounterAttrSet.A9i(A.jb.F$);this.ColoredCounterAttrSet.Ag9(
A.jb.Text);this.KQ=A.jb.Text;this.J(this.Ae_,0);this.Ae_.A9d(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Aha(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9f(
null);},_Done:function(){this.__proto__=A.Core.O;this.Ae_._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Ae_._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Aha(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Ae_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AME={Atd:null
,AbZ:null,Ab0:null,Ab1:null,Jf:null,AP:null,A$:null,D8:null,Lq:null,Acj:null,KR:
null,KS:null,AIY:0,AIX:0,AIW:0,Init:function(aArg){},Bj:function(aSize){C.Ba.Bj.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.AbZ.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acj.H(this.
AbZ.M);this.A$.H([this.AbZ.M[2]-1,0,this.AbZ.M[2]+1,aSize[1]]);this.Ab0.H([this.
AbZ.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KR.H(this.Ab0.M);this.D8.H([this.
Ab0.M[2]-1,0,this.Ab0.M[2]+1,aSize[1]]);this.Ab1.H([this.Ab0.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KS.H(this.Ab1.M);this.Lq.H([this.Ab1.M[2]-1,0,this.Ab1.
M[2]+1,aSize[1]]);this.Jf.H([this.Ab1.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jf.Dc(this.V.AQ);this.AbZ.L(A._GetAutoObject(A.acj.
Assessment).Qg(this.AIW));this.Ab0.L(A._GetAutoObject(A.acj.Assessment).Qg(this.
AIX));this.Ab1.L(A._GetAutoObject(A.acj.Assessment).Qg(this.AIY));this.Acj.L(A._GetAutoObject(
A.acj.Assessment).Xi(this.AIW));this.KR.L(A._GetAutoObject(A.acj.Assessment).Xi(
this.AIX));this.KS.L(A._GetAutoObject(A.acj.Assessment).Xi(this.AIY));this.Acj.Y(
!this.AIW);this.KR.Y(!this.AIX);this.KS.Y(!this.AIY);this.Jf.A9n(this.Atd.Get(3)
);this.Jf.A9p(this.Atd.Get(2));this.Jf.A9o(this.Atd.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hj=Ad;if(!!this.AX){var Ky=this.AX.CE(Ad,0);var Ma=this.AX.
CE(Ad,1);this.T(Ma.toFixed());A._GetAutoObject(A.Device.Device).SB(Ad);this.AIW=
A._GetAutoObject(A.Device.Helper).A1H(A._GetAutoObject(A.Device.Device).Bu,Ky,0);
this.AIX=A._GetAutoObject(A.Device.Helper).A1H(A._GetAutoObject(A.Device.Device).
Bu,Ky,-1);this.AIY=A._GetAutoObject(A.Device.Helper).A1H(A._GetAutoObject(A.Device.
Device).Bu,Ky,-2);this.Atd=A._GetAutoObject(A.Device.Helper).A6h(A._GetAutoObject(
A.Device.Device).Bu,Ky,0,0);this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.AbZ={I:this},0);A.acg.AL._Init.call(this.Ab0={I:
this},0);A.acg.AL._Init.call(this.Ab1={I:this},0);C.Jf._Init.call(this.Jf={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.D8={I:this},0);A.acg.AL._Init.call(this.Lq={I:this
},0);A.acg.Text._Init.call(this.Acj={I:this},0);A.acg.Text._Init.call(this.KR={I:
this},0);A.acg.Text._Init.call(this.KS={I:this},0);this.__proto__=C.AME;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D8.L(A.jb.Bc);this.Lq.L(A.jb.Bc);this.Acj.R(Aob
);this.KR.R(Aob);this.KS.R(Aob);this.J(this.AbZ,0);this.J(this.Ab0,0);this.J(this.
Ab1,0);this.J(this.Jf,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D8,0);this.
J(this.Lq,0);this.J(this.Acj,0);this.J(this.KR,0);this.J(this.KS,0);this.Acj.S(A.
aaL(A.fl.Af));this.KR.S(A.aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af));this.Atd=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.AbZ._Done();this.Ab0._Done();this.Ab1._Done();this.Jf._Done();this.AP.
_Done();this.A$._Done();this.D8._Done();this.Lq._Done();this.Acj._Done();this.KR.
_Done();this.KS._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AbZ._ReInit();this.Ab0._ReInit();this.Ab1._ReInit();this.Jf._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.D8._ReInit();this.Lq._ReInit();this.Acj.
_ReInit();this.KR._ReInit();this.KS._ReInit();this.Acj.S(A.aaL(A.fl.Af));this.KR.
S(A.aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Atd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmF={H0:null,AfO:false,Bj:function(aSize){var
B;this.H0.H([(aSize[0]-((B=this.H0.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H0.M[0]-10,40]);C.Ty.Bj.call(this,aSize);},Ai:function(Ae){C.Ty.Ai.call(
this,Ae);if(this.AfO)this.H0.Cx(1);else this.H0.Cx(0);},J2:function(G){if(this.AfO
)C.Ty.J2.call(this,G);},JX:function(G){if(this.AfO)C.Ty.JX.call(this,G);},Tj:function(
AH){C.Ty.Tj.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.AfO=true;this.Ze(
true);}else{this.H(A.abI(this.M,40));this.AfO=false;this.Ze(false);}},_Init:function(
aArg){C.Ty._Init.call(this,aArg);A.acg.Am._Init.call(this.H0={I:this},0);this.__proto__=
C.AmF;this.V.A7(0x11);this.H0.H(AHj);this.H0.Cx(0);this.J(this.H0,0);this.V.Cs(A.
aaL(A.fl.Bk));this.H0.Ax(A.aaL(A.ach.Aqq));},_Done:function(){this.__proto__=C.Ty;
this.H0._Done();C.Ty._Done.call(this);},_ReInit:function(){C.Ty._ReInit.call(this
);this.H0._ReInit();this.V.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.Ty._Mark.
call(this,D);if((B=this.H0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AFE={_Init:function(aArg){C.AwS._Init.call(this,aArg);this.__proto__=C.AFE;}
,_className:"Application::OptionsOverlaySeparator"};C.Akq={DH:A.jV,By:true,_Init:
function(aArg){C.AwS._Init.call(this,aArg);this.__proto__=C.Akq;},_className:"Application::OptionsOverlayNode"
};C.Zg={AR:null,_Init:function(aArg){C.Akq._Init.call(this,aArg);this.__proto__=
C.Zg;},_Mark:function(D){var B;C.Akq._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AM9={Ai:function(Ae){C.OT.Ai.call(this,Ae);var FJ=A.jb.CI;var GL=A.jb.Text;if(
this.Hc){FJ=A.jb.Text;GL=A.jb.Bm;}this.Background.L(FJ);this.V.L(GL);},_Init:function(
aArg){C.OT._Init.call(this,aArg);this.__proto__=C.AM9;},_className:"Application::DarkThemeTextItem"
};C.OT={Background:null,CC:null,V:null,Ap_:0,Hc:false,Init:function(aArg){},Bj:function(
aSize){C.G$.Bj.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.CC.H(A.abK(this.CC.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.G$.Ai.call(this,Ae);this.CC.L(this.Ap_);},T:function(E){if(this.DH===E)return;
this.DH=E;this.V.R(E);},Bi:function(E){if(this.Hc===E)return;this.Hc=E;this.An();
},Arl:function(E){if(this.Ap_===E)return;this.Ap_=E;this.An();},_Init:function(aArg
){C.G$._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
CC._Init.call(this.CC={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.OT;this.H(BF);this.Background.H(AHW);this.CC.H(BF);this.CC.NY(2);this.CC.L(A.jb.
ZF);this.V.H(AYt);this.Ap_=A.jb.ZF;this.J(this.Background,0);this.J(this.CC,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(A.aaL(A.
fl.Bk));this.Init(aArg);},_Done:function(){this.__proto__=C.G$;this.Background._Done(
);this.CC._Done();this.V._Done();C.G$._Done.call(this);},_ReInit:function(){C.G$.
_ReInit.call(this);this.Background._ReInit();this.CC._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cs(A.aaL(A.fl.Bk));},_Mark:
function(D){var B;C.G$._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APd={Em:null,IE:null
,_Init:function(aArg){C.Ev._Init.call(this,aArg);A.acg.Text._Init.call(this.Em={
I:this},0);A.acg.Text._Init.call(this.IE={I:this},0);this.__proto__=C.APd;this.H(
O1);this.Background.H(O1);this.Em.H(AHX);this.Em.R(A.aaR(A.acf.GF));this.Em.A7(0x11
);this.Em.L(A.jb.Text);this.IE.A3(0x3F);this.IE.H(AHY);this.IE.Hq(5);this.IE.A7(
0x14);this.IE.R(A.aaR(A.acf.AGl));this.IE.L(A.jb.Text);this.J(this.Em,0);this.J(
this.IE,0);this.Em.S(A.aaL(A.fl.Af));this.IE.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Ev;this.Em._Done();this.IE._Done();C.Ev._Done.call(this);},_ReInit:
function(){C.Ev._ReInit.call(this);this.Em._ReInit();this.IE._ReInit();this.Em.R(
A.aaR(A.acf.GF));this.IE.R(A.aaR(A.acf.AGl));this.Em.S(A.aaL(A.fl.Af));this.IE.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ev._Mark.call(this,D);if((B=this.Em).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DQ={Sf:null,Sg:null,Aeh:null,AgN:null,QD:null
,KQ:0,LastTemperature:0,Aqe:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sf.Ax(A.aaL(A.ach.Avd));this.Sg.Ax(A.aaL(A.ach.Avd));}break;case 2:{this.Sf.Ax(A.
aaL(A.ach.Avg));this.Sg.Ax(A.aaL(A.ach.Avg));}break;default:{this.Sf.Ax(A.aaL(A.
ach.Aed));this.Sg.Ax(A.aaL(A.ach.Aed));}}this.Sf.L(A._GetAutoObject(A.acj.Assessment
).Qg(this.Aqe));var Apv;if(this.IsWatch)Apv=A.aaL(A.ach.AQa);else if(this.IsFever
){Apv=A.aaL(A.ach.AP$);switch(A._GetAutoObject(A.Device.Converter).Aja(this.LastTemperature
,this.AnimalType)){case 3:this.QD.L(A.jb.F$);break;case 2:this.QD.L(A.jb.H2);break;
case 1:this.QD.L(A.jb.EV);break;case 0:this.QD.L(A.jb.Afd);break;default:;}}else
if(this.IsAlarm){Apv=A.aaL(A.ach.AP_);if(!this.Aqe||(this.Aqe===5))this.QD.L(A.jb.
F$);else this.QD.L(0xFF000000);}else Apv=null;this.Aeh.Ax(Apv);this.AgN.Ax(Apv);
this.QD.Ax(Apv);if(A._GetAutoObject(A.acj.Assessment).Qg(this.Aqe)===A.jb.EV)this.
Sg.L(this.KQ);},Ew:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
An();},AEy:function(E){if(this.Aqe===E)return;this.Aqe=E;this.An();},Dc:function(
E){if(this.KQ===E)return;this.KQ=E;this.An();},AeM:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.An();},Uf:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.An();},AeJ:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.An();},AeO:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},He:function(){this.Ew(0);this.AEy(0);this.AeJ(false);this.Uf(false
);this.AeM(false);this.AeO(0);this.Dc(A.jb.Text);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Sf={I:this},0);A.acg.Am._Init.call(
this.Sg={I:this},0);A.acg.Am._Init.call(this.Aeh={I:this},0);A.acg.Am._Init.call(
this.AgN={I:this},0);A.acg.Am._Init.call(this.QD={I:this},0);this.__proto__=C.DQ;
this.H(AkY);this.Sf.A3(0x3F);this.Sf.H(AkY);this.Sf.L(A.jb.CI);this.Sf.A7(0x12);
this.Sf.Cx(0);this.Sg.A3(0x3F);this.Sg.H(AkY);this.Sg.L(0xFF000000);this.Sg.A7(0x12
);this.Sg.Cx(1);this.Aeh.A3(0x3F);this.Aeh.H(AkY);this.Aeh.L(0xFF000000);this.Aeh.
Cx(0);this.AgN.A3(0x3F);this.AgN.H(AkY);this.AgN.Cx(1);this.QD.A3(0x3F);this.QD.
H(AkY);this.QD.L(A.jb.C2);this.QD.Cx(2);this.KQ=A.jb.Text;this.J(this.Sf,0);this.
J(this.Sg,0);this.J(this.Aeh,0);this.J(this.AgN,0);this.J(this.QD,0);this.Sf.Ax(
A.aaL(A.ach.Aed));this.Sg.Ax(A.aaL(A.ach.Aed));},_Done:function(){this.__proto__=
A.Core.O;this.Sf._Done();this.Sg._Done();this.Aeh._Done();this.AgN._Done();this.
QD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Sf._ReInit();this.Sg._ReInit();this.Aeh._ReInit();this.AgN._ReInit();
this.QD._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
Sf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aeh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AMB={Ce:function(Ad){C.Ajo.Ce.call(this,Ad);if(!!this.AX){var By0=this.AX.HX(
Ad,12);var Bxg=this.AX.Sb(Ad,15);this.AaZ.R(A._GetAutoObject(A.Device.Helper).MN(
Bxg,A._GetAutoObject(A.Device.Helper).Dw()).toFixed());this.Sh.Y(By0);this.An();
}},_Init:function(aArg){C.Ajo._Init.call(this,aArg);this.__proto__=C.AMB;},_className:
"Application::CalfListAlarmItem"};C.ACP={DW:null,Mn:null,_Init:function(aArg){C.
TP._Init.call(this,aArg);A.acg.Text._Init.call(this.DW={I:this},0);A.acg.Am._Init.
call(this.Mn={I:this},0);this.__proto__=C.ACP;this.DW.H(Aoa);this.DW.KP(true);this.
DW.R(A.aaR(A.acf.A5t));this.DW.L(A.jb.Text);this.Mn.H(AYu);this.Mn.IZ(false);this.
Mn.L(A.jb.Text);this.Mn.A7(0x12);this.J(this.DW,-2);this.J(this.Mn,0);this.DW.S(
A.aaL(A.fl.Ak));this.Mn.Ax(A.aaL(A.ach.ADe));},_Done:function(){this.__proto__=C.
TP;this.DW._Done();this.Mn._Done();C.TP._Done.call(this);},_ReInit:function(){C.
TP._ReInit.call(this);this.DW._ReInit();this.Mn._ReInit();this.DW.R(A.aaR(A.acf.
A5t));this.DW.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TP._Mark.call(this,D
);if((B=this.DW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.J9={Background:null,CC:
null,ACf:0,ABs:0,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Background.L(this.
ACf);this.CC.L(this.ABs);},Awd:function(E){if(this.ACf===E)return;this.ACf=E;this.
An();},AEq:function(E){if(this.ABs===E)return;this.ABs=E;this.An();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Background={I:this
},0);A.acg.Am._Init.call(this.CC={I:this},0);this.__proto__=C.J9;this.H(Aoc);this.
Background.A3(0x3C);this.Background.H(Aoc);this.Background.Cx(1);this.CC.A3(0x3C
);this.CC.H(Aoc);this.ACf=A.jb.EV;this.ABs=A.jb.Text;this.J(this.Background,0);this.
J(this.CC,0);this.Background.Ax(A.aaL(A.ach.J9));this.CC.Ax(A.aaL(A.ach.J9));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.CC._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background.
_ReInit();this.CC._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CC)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.Amn={Q:null,Pl:
null,A6X:false,Bj:function(aSize){C.Mj.Bj.call(this,aSize);this.V.H([].concat(this.
Pl.M[2]-this.V.Text.I0,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mj.Ai.call(this
,Ae);this.Pl.L(this.V.AQ);},Awh:function(E){if(this.A6X===E)return;this.A6X=E;if(
E)this.Pl.R(AYv);else this.Pl.R(AHZ);},J5:function(G){var F;if(!!this.Q)this.Awh((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.J5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.J5],E,0);if(!!E)
A.pe([this,this.J5],this);},_Init:function(aArg){C.Mj._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pl={I:this},0);this.__proto__=C.Amn;this.Pl.A3(0x34);this.Pl.
H(ZT);this.Pl.R(AHZ);this.J(this.Pl,0);this.Pl.S(A.aaL(A.fl.AN6));},_Done:function(
){this.__proto__=C.Mj;this.Pl._Done();C.Mj._Done.call(this);},_ReInit:function(){
C.Mj._ReInit.call(this);this.Pl._ReInit();},_Mark:function(D){var B;C.Mj._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pl)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOv={D2:function(G){C.Kc.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter
).AdF(4));},_Init:function(aArg){C.Kc._Init.call(this,aArg);this.__proto__=C.AOv;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dr:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BS(aIndex);},DO:function(A6){return A6;},Hn:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APe={Ge:null,Lj:null,YC:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).Alo());},_Init:function(aArg){C.Ev._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ge={I:this},0);A.acg.Text._Init.call(this.Lj={I:this},0);A.
acg.Text._Init.call(this.YC={I:this},0);this.__proto__=C.APe;this.Background.L(A.
jb.Text);this.Ge.H(AH0);this.Ge.A7(0x11);this.Ge.R(A.aaR(A.acf.Date));this.Ge.L(
A.jb.Bm);this.Lj.H(AYw);this.Lj.A7(0x12);this.Lj.L(A.jb.Bm);this.YC.H(AYx);this.
YC.A7(0x12);this.YC.R(A.aaR(A.acf.Bw));this.YC.L(A.jb.Bm);this.J(this.Ge,0);this.
J(this.Lj,0);this.J(this.YC,0);this.Ge.S(A.aaL(A.fl.Af));this.Lj.S(A.aaL(A.fl.Af
));this.YC.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ev;this.Ge._Done();this.Lj._Done();this.YC._Done();C.Ev._Done.call(this);},_ReInit:
function(){C.Ev._ReInit.call(this);this.Ge._ReInit();this.Lj._ReInit();this.YC._ReInit(
);this.Ge.R(A.aaR(A.acf.Date));this.YC.R(A.aaR(A.acf.Bw));this.Ge.S(A.aaL(A.fl.Af
));this.Lj.S(A.aaL(A.fl.Af));this.YC.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ev._Mark.call(this,D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Ts={Ld:null,AjE:false,Init:function(
aArg){var B;A.zX([this,this.Ba1],[B=A._GetAutoObject(A.Device.Device),B.AD2,B.AIe
],0);this.AGe(this);A.pe([this,this.Ayl],this);},Dz:function(G){var D1=(A.Core.BL.
isPrototypeOf(G)?G:null);switch(D1.CN){case 6:this.On(this);break;case 7:this.MU(
this);break;default:D1.NC=true;}},CA:function(G){var B;if(!!this.Ld)this.Ld.CA(this
);C.AB.CA.call(this,G);},EX:function(G){var B;if(!!this.Ld)this.Ld.EX(this);C.AB.
EX.call(this,G);},Am8:function(G){A._GetAutoObject(C.A1).Fr();},AGe:function(G){
var B;if(!!this.Ld){this.Ld.EX(this);this.HJ(this.Ld);}if(this.AjE)switch(A._GetAutoObject(
A.Device.Device).D5){case 0:this.Ld=A._NewObject(C.ALV,0);break;case 1:this.Ld=A.
_NewObject(C.ALW,0);break;case 3:this.Ld=A._NewObject(C.ALU,0);break;case 2:this.
Ld=A._NewObject(C.ALX,0);break;default:throw new Error(Ax1);}else switch(A._GetAutoObject(
A.Device.Device).D5){case 0:this.Ld=A._NewObject(C.ALY,0);break;case 1:this.Ld=A.
_NewObject(C.AL7,0);break;case 3:this.Ld=A._NewObject(C.AL1,0);break;case 2:this.
Ld=A._NewObject(C.AMa,0);break;default:throw new Error(Ax1);}this.HK(this);this.
J(this.Ld,0);this.Ld.H(E7);this.Ld.Zb([this,this.AZ3]);this.Ld.CA(this);this.Bb(
this.Ld);},Ba1:function(s){this.AGe(s);},ATb:function(G){A._GetAutoObject(A.Device.
Device).AeC(0);},ATd:function(G){A._GetAutoObject(A.Device.Device).AeC(1);},ATc:
function(G){A._GetAutoObject(A.Device.Device).AeC(3);},ATe:function(G){A._GetAutoObject(
A.Device.Device).AeC(2);},HK:function(G){this.N.CY(A.aaL(A.ach.EW));this.N.Hr(A.
jV);this.N.Cz=[this,this.Am8];this.N.AEG(A.aaL(A.fl.Ak));},Ayl:function(s){this.
HK(s);},BlO:function(E){if(this.AjE===E)return;this.AjE=E;A.pe([this,this.Ba1],this
);},A_j:function(G){this.BlO(!this.AjE);},Bm0:function(G){A._GetAutoObject(A.Device.
Device).A_(31,true,A.jV,0,null);},MU:function(G){},BFs:function(s){this.MU(s);},
On:function(G){},BFr:function(s){this.On(s);},Beh:function(G){var FI=A._GetAutoObject(
A.Device.Device).D5;FI=FI+1;if(FI>=4)FI=0;A._GetAutoObject(A.Device.Device).AeC(
FI);},BzS:function(G){var FI=A._GetAutoObject(A.Device.Device).D5;FI=FI-1;if(FI<
0)FI=3;A._GetAutoObject(A.Device.Device).AeC(FI);},Aiy:function(G){},AZ3:function(
s){this.Aiy(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Ts;this.Background.H(Cc);this.N.Y(true);this.N.OM(true);this.N.ON(true);this.Dn(
C.AO5);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Ld)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D5={AR:null,AttrSet:null,Dj:null,CA:function(G){},AId:function(s){this.CA(s);
},EX:function(G){A._GetAutoObject(A.Device.Device).Bu.Bl(null);},Ayb:function(s){
this.EX(s);},Zb:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dj.BM=E;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BL._Init.call(this.Dj={I:this},0);this.__proto__=
C.D5;this.H(S1);this.AttrSet.A9j(A.jb.F$);this.AttrSet.A9i(A.jb.H2);this.AttrSet.
Ag9(A.jb.Text);this.Dj.Filter=1;this.AttrSet.Aha(A.aaL(A.fl.Ak));this.AttrSet.A9f(
null);},_Done:function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.Dj._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AttrSet._ReInit();this.Dj._ReInit();this.AttrSet.Aha(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.ALY={RJ:
null,AaE:null,Tr:null,Tq:null,RN:null,Qu:null,RO:null,RL:null,RM:null,RK:null,CS:
function(){var B;this.RJ.Ce(this);this.AaE.Ce(this);this.Tr.Ce(this);this.Tq.Ce(
this);this.RN.Ce(this);this.Qu.Ce(this);this.RO.Ce(this);this.RL.Ce(this);this.RM.
Ce(this);this.RK.Ce(this);},Gz:function(G){C.RP.Gz.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RJ.Y(true);this.AaE.Y(false);
this.RL.Y(false);this.RM.Y(false);this.RK.Y(false);this.RN.Y(true);this.Qu.Y(true
);this.RO.Y(true);}break;case 1:{this.RJ.Y(false);this.AaE.Y(true);this.RL.Y(true
);this.RM.Y(true);this.RK.Y(true);this.RN.Y(false);this.Qu.Y(false);this.RO.Y(false
);}break;default:A.ab5("%s%e",AkU,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RP._Init.call(this,aArg);C.
RJ._Init.call(this.RJ={I:this},0);C.ALT._Init.call(this.AaE={I:this},0);C.Tr._Init.
call(this.Tr={I:this},0);C.Tq._Init.call(this.Tq={I:this},0);C.RN._Init.call(this.
RN={I:this},0);C.Qu._Init.call(this.Qu={I:this},0);C.RO._Init.call(this.RO={I:this
},0);C.RL._Init.call(this.RL={I:this},0);C.RM._Init.call(this.RM={I:this},0);C.RK.
_Init.call(this.RK={I:this},0);this.__proto__=C.ALY;this.RJ.H(BF);this.RJ.Aj(true
);this.RJ.Bi(false);this.AaE.H(JS);this.AaE.Aj(true);this.AaE.Bi(false);this.Tr.
H(P4);this.Tr.Aj(true);this.Tr.Bi(true);this.Tq.H(ZZ);this.Tq.Aj(true);this.Tq.Bi(
false);this.RN.H(AkW);this.RN.Aj(true);this.RN.Bi(true);this.Qu.H(An8);this.Qu.Aj(
true);this.Qu.Bi(false);this.RO.H(AsA);this.RO.Aj(true);this.RO.Bi(true);this.RL.
H(W0);this.RL.Aj(true);this.RL.Bi(true);this.RM.H(AYy);this.RM.Aj(true);this.RM.
Bi(false);this.RK.H(AH1);this.RK.Aj(true);this.RK.Bi(true);this.J(this.RJ,0);this.
J(this.AaE,0);this.J(this.Tr,0);this.J(this.Tq,0);this.J(this.RN,0);this.J(this.
Qu,0);this.J(this.RO,0);this.J(this.RL,0);this.J(this.RM,0);this.J(this.RK,0);},
_Done:function(){this.__proto__=C.RP;this.RJ._Done();this.AaE._Done();this.Tr._Done(
);this.Tq._Done();this.RN._Done();this.Qu._Done();this.RO._Done();this.RL._Done(
);this.RM._Done();this.RK._Done();C.RP._Done.call(this);},_ReInit:function(){C.RP.
_ReInit.call(this);this.RJ._ReInit();this.AaE._ReInit();this.Tr._ReInit();this.Tq.
_ReInit();this.RN._ReInit();this.Qu._ReInit();this.RO._ReInit();this.RL._ReInit(
);this.RM._ReInit();this.RK._ReInit();this.CS();},_Mark:function(D){var B;C.RP._Mark.
call(this,D);if((B=this.RJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.AMa={AkB:function(LY){if(!LY)return;var Fp=A._NewObject(A.Device.Filter,0);var
HR=A._NewObject(A.Device.Int32FilterCriterion,0);HR.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fp.CV(HR);var AcT=A._NewObject(A.Device.Int32FilterCriterion
,0);AcT.Initialize(8,2,0,true);Fp.CV(AcT);LY.Bl(Fp);},ADr:function(){if(!A._GetAutoObject(
A.Device.Device).Bu)return false;var Pc=A._GetAutoObject(A.Device.Device).Bu.Cd(
);if(Pc<2)return false;var BBf=A._GetAutoObject(A.Device.Device).Bu.HB(0,6);var BBg=
A._GetAutoObject(A.Device.Device).Bu.HB(Pc-1,6);var A1x=A._NewObject(A.Core.Bw,0
);A1x.Initialize(BBf);var A3z=A._NewObject(A.Core.Bw,0);A3z.Initialize(BBg);if((
A1x.AbJ()!==A3z.AbJ())||(A1x.Year!==A3z.Year))return true;else return false;},_Init:
function(aArg){C.AaG._Init.call(this,aArg);this.__proto__=C.AMa;this.ASG(C.AGP);
this.ASH(C.ACV);this.ASw(C.Qu);this.Arq(A.aaR(A.acf.AU$));this.Dx(A.aaR(A.acf.Aj8
));},_ReInit:function(){C.AaG._ReInit.call(this);this.Arq(A.aaR(A.acf.AU$));this.
Dx(A.aaR(A.acf.Aj8));},_className:"Application::AnimalWeights"};C.AL7={AkB:function(
LY){if(!LY)return;var Fp=A._NewObject(A.Device.Filter,0);var HR=A._NewObject(A.Device.
Int32FilterCriterion,0);HR.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fp.CV(HR);var AAK=A._NewObject(A.Device.Int32FilterCriterion,0);AAK.Initialize(
7,2,0,true);Fp.CV(AAK);LY.Bl(Fp);},ADr:function(){return A._GetAutoObject(A.Device.
Device).Bu.Cd()>0;},_Init:function(aArg){C.AaG._Init.call(this,aArg);this.__proto__=
C.AL7;this.ASG(C.AUy);this.ASH(C.APe);this.ASw(C.Tr);this.Arq(A.aaR(A.acf.A7i));
this.Dx(A.aaR(A.acf.Aq4));},_ReInit:function(){C.AaG._ReInit.call(this);this.Arq(
A.aaR(A.acf.A7i));this.Dx(A.aaR(A.acf.Aq4));},_className:"Application::AnimalTemperatures"
};C.ATE={Vn:null,Vo:null,XL:null,Agp:null,Kq:null,AP:null,A$:null,D8:null,Lq:null
,AnA:null,KR:null,KS:null,Zt:null,Zu:null,Init:function(aArg){},Bj:function(aSize
){C.Ba.Bj.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kq.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vn.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.D8.H([this.
Vn.M[2]-1,0,this.Vn.M[2]+1,aSize[1]]);this.Vo.H([this.Vn.M[2],0,this.Vn.M[2]+22,
aSize[1]]);this.Lq.H([this.Vo.M[2]-1,0,this.Vo.M[2]+1,aSize[1]]);this.XL.H([this.
Vo.M[2],0,this.Vo.M[2]+22,aSize[1]]);this.AnA.H([this.XL.M[2]-1,0,this.XL.M[2]+1
,aSize[1]]);this.Agp.H([this.XL.M[2],0,aSize[0],aSize[1]]);this.KR.H(this.Vn.M);
this.KS.H(this.Vo.M);this.Zt.H(this.XL.M);this.Zu.H(this.Agp.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kq.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;
this.Hj=Ad;if(!!this.AX){var Alf=this.AX.HB(Ad,6);var A0P=this.AX.IU(Ad,3);var A1t=
this.AX.IU(Ad,2);var A1s=this.AX.IU(Ad,5);var A3n=this.AX.IU(Ad,4);this.T(A._GetAutoObject(
A.acj.KG).ACm(Alf));this.Kq.R(A._GetAutoObject(A.acj.KG).A6b(Alf));this.Vn.L(A._GetAutoObject(
A.acj.Assessment).Qg(A0P));this.Vo.L(A._GetAutoObject(A.acj.Assessment).Qg(A1t));
this.XL.L(A._GetAutoObject(A.acj.Assessment).Qg(A1s));this.Agp.L(A._GetAutoObject(
A.acj.Assessment).Qg(A3n));this.KR.L(A._GetAutoObject(A.acj.Assessment).Xi(A0P));
this.KS.L(A._GetAutoObject(A.acj.Assessment).Xi(A1t));this.Zt.L(A._GetAutoObject(
A.acj.Assessment).Xi(A1s));this.Zu.L(A._GetAutoObject(A.acj.Assessment).Xi(A3n));
this.KR.Y(A0P===5);this.KS.Y(A1t===5);this.Zt.Y(A1s===5);this.Zu.Y(A3n===5);this.
An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
Vn={I:this},0);A.acg.AL._Init.call(this.Vo={I:this},0);A.acg.AL._Init.call(this.
XL={I:this},0);A.acg.AL._Init.call(this.Agp={I:this},0);A.acg.Text._Init.call(this.
Kq={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.D8={I:this},0);A.acg.AL._Init.call(this.
Lq={I:this},0);A.acg.AL._Init.call(this.AnA={I:this},0);A.acg.Text._Init.call(this.
KR={I:this},0);A.acg.Text._Init.call(this.KS={I:this},0);A.acg.Text._Init.call(this.
Zt={I:this},0);A.acg.Text._Init.call(this.Zu={I:this},0);this.__proto__=C.ATE;this.
V.H(Ob);this.Vn.H(AYz);this.Vo.H(AYA);this.XL.H(AYB);this.Agp.H(AYC);this.Kq.R(S0
);this.Kq.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D8.L(A.jb.Bc);
this.Lq.L(A.jb.Bc);this.AnA.L(A.jb.Bc);this.KR.H(AYD);this.KR.R(Rg);this.KS.H(AYE
);this.KS.R(Rg);this.Zt.H(AYF);this.Zt.R(Rg);this.Zu.H(AYG);this.Zu.R(Rg);this.J(
this.Vn,0);this.J(this.Vo,0);this.J(this.XL,0);this.J(this.Agp,0);this.J(this.Kq
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D8,0);this.J(this.Lq,0);this.
J(this.AnA,0);this.J(this.KR,0);this.J(this.KS,0);this.J(this.Zt,0);this.J(this.
Zu,0);this.Kq.S(A.aaL(A.fl.Af));this.KR.S(A.aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af
));this.Zt.S(A.aaL(A.fl.Af));this.Zu.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vn._Done();this.Vo._Done();this.XL._Done();this.Agp._Done(
);this.Kq._Done();this.AP._Done();this.A$._Done();this.D8._Done();this.Lq._Done(
);this.AnA._Done();this.KR._Done();this.KS._Done();this.Zt._Done();this.Zu._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vn._ReInit(
);this.Vo._ReInit();this.XL._ReInit();this.Agp._ReInit();this.Kq._ReInit();this.
AP._ReInit();this.A$._ReInit();this.D8._ReInit();this.Lq._ReInit();this.AnA._ReInit(
);this.KR._ReInit();this.KS._ReInit();this.Zt._ReInit();this.Zu._ReInit();this.Kq.
S(A.aaL(A.fl.Af));this.KR.S(A.aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af));this.Zt.S(
A.aaL(A.fl.Af));this.Zu.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vo)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APc={Ge:null,YI:null,YE:null,YF:null,YG:null,YH:
null,_Init:function(aArg){C.Ev._Init.call(this,aArg);A.acg.Text._Init.call(this.
Ge={I:this},0);A.acg.Text._Init.call(this.YI={I:this},0);A.acg.Text._Init.call(this.
YE={I:this},0);A.acg.Text._Init.call(this.YF={I:this},0);A.acg.Text._Init.call(this.
YG={I:this},0);A.acg.Text._Init.call(this.YH={I:this},0);this.__proto__=C.APc;this.
Background.L(A.jb.Text);this.Ge.H(AH0);this.Ge.A7(0x11);this.Ge.R(A.aaR(A.acf.Date
));this.Ge.L(A.jb.Bm);this.YI.H(AHS);this.YI.A7(0x12);this.YI.R(A.aaR(A.acf.Bw));
this.YI.L(A.jb.Bm);this.YE.H(AYH);this.YE.A7(0x12);this.YE.R(A.aaR(A.acf.ATG));this.
YE.L(A.jb.Bm);this.YF.H(AYI);this.YF.A7(0x12);this.YF.R(A.aaR(A.acf.ATH));this.YF.
L(A.jb.Bm);this.YG.H(AYJ);this.YG.A7(0x12);this.YG.R(A.aaR(A.acf.AN2));this.YG.L(
A.jb.Bm);this.YH.H(AYK);this.YH.A7(0x12);this.YH.R(A.aaR(A.acf.AM0));this.YH.L(A.
jb.Bm);this.J(this.Ge,0);this.J(this.YI,0);this.J(this.YE,0);this.J(this.YF,0);this.
J(this.YG,0);this.J(this.YH,0);this.Ge.S(A.aaL(A.fl.Af));this.YI.S(A.aaL(A.fl.Af
));this.YE.S(A.aaL(A.fl.Af));this.YF.S(A.aaL(A.fl.Af));this.YG.S(A.aaL(A.fl.Af));
this.YH.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ev;this.Ge._Done();
this.YI._Done();this.YE._Done();this.YF._Done();this.YG._Done();this.YH._Done();
C.Ev._Done.call(this);},_ReInit:function(){C.Ev._ReInit.call(this);this.Ge._ReInit(
);this.YI._ReInit();this.YE._ReInit();this.YF._ReInit();this.YG._ReInit();this.YH.
_ReInit();this.Ge.R(A.aaR(A.acf.Date));this.YI.R(A.aaR(A.acf.Bw));this.YE.R(A.aaR(
A.acf.ATG));this.YF.R(A.aaR(A.acf.ATH));this.YG.R(A.aaR(A.acf.AN2));this.YH.R(A.
aaR(A.acf.AM0));this.Ge.S(A.aaL(A.fl.Af));this.YI.S(A.aaL(A.fl.Af));this.YE.S(A.
aaL(A.fl.Af));this.YF.S(A.aaL(A.fl.Af));this.YG.S(A.aaL(A.fl.Af));this.YH.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.Ev._Mark.call(this,D);if((B=this.Ge)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AL1={AkB:function(LY){if(!LY)return;
var Fp=A._NewObject(A.Device.Filter,0);var HR=A._NewObject(A.Device.Int32FilterCriterion
,0);HR.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fp.CV(HR);var
AAr=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAr.Initialize(3,5,0,true
);Fp.CV(AAr);LY.Bl(Fp);},ADr:function(){if(!A._GetAutoObject(A.Device.Device).Bu
)return false;return A._GetAutoObject(A.Device.Device).Bu.Cd()>0;},_Init:function(
aArg){C.AaG._Init.call(this,aArg);this.__proto__=C.AL1;this.ASG(C.ATE);this.ASH(
C.APc);this.ASw(C.Tq);this.Arq(A.aaR(A.acf.AwX));this.Dx(A.aaR(A.acf.Am7));},_ReInit:
function(){C.AaG._ReInit.call(this);this.Arq(A.aaR(A.acf.AwX));this.Dx(A.aaR(A.acf.
Am7));},_className:"Application::AnimalRatings"};C.Iv={B7:null,Z:null,V:null,Uk:
5,T:function(E){C.IR.T.call(this,E);this.V.R(E);},Dc:function(E){C.IR.Dc.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},Aus:function(G){var B;var Nt=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nt)return;
if(((B=Nt.Df(0x1))[2]-B[0])>((B=Nt.M)[2]-B[0]))this.S(A.aaL(A.fl.Ic));},Kh:function(
E){if(this.Uk===E)return;this.Uk=E;this.Z.H([].concat(E,this.Z.M.slice(1,4)));},
AAl:function(G){A.pe([this,this.Aus],this);},_Init:function(aArg){C.IR._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.Iv;this.Z.A3(0x3F);this.Z.H(AH2);this.Z.A93(5);this.
Z.Kg(3);this.V.A3(0x34);this.V.H(Z2);this.V.IZ(true);this.V.A7(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Z,0);this.J(this.V,0);this.Z.En=[this,this.
AAl];this.V.S(A.aaL(A.fl.Kb));},_Done:function(){this.__proto__=C.IR;this.Z._Done(
);this.V._Done();C.IR._Done.call(this);},_ReInit:function(){C.IR._ReInit.call(this
);this.Z._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kb));},_Mark:function(D){
var B;C.IR._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RJ={AfA:0,Ai:function(Ae){C.Fq.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RF));if(this.AfA>=0)this.Kl((this.AfA.toFixed(
)+CO)+A.aaR(A.acf.J_));else this.Kl(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fq.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfA=-1;
else this.AfA=A._GetAutoObject(A.Device.Helper).W.RF();this.An();},_Init:function(
aArg){C.Fq._Init.call(this,aArg);this.__proto__=C.RJ;},_className:"Application::AnimalInfoItemAge"
};C.RN={A34:0,Ai:function(Ae){C.Fq.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afe));if(
this.A34>0)this.Kl((A._GetAutoObject(A.Device.Converter).AkQ(this.A34)+CO)+A._GetAutoObject(
A.acj.DS).AfN());else this.Kl(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fq.Ce.call(
this,G);this.A34=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.An();},
_Init:function(aArg){C.Fq._Init.call(this,aArg);this.__proto__=C.RN;},_className:
"Application::AnimalInfoItemWeight"};C.Tr={Z:null,Ed:null,Et:null,E6:null,PQ:null
,E5:null,PR:null,Ai6:0,Pb:0,CS:function(){this.An();},Ai:function(Ae){C.Jz.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bha));this.E6.R(this.Ai6.toFixed());this.E5.R(this.Pb.
toFixed());if(!!this.Ai6||!!this.Pb)this.PR.R(AYL+(this.Ai6+this.Pb).toFixed());
else this.PR.R(A.aaR(A.acf.ARE));},Ce:function(G){C.Jz.Ce.call(this,G);var AkI;AkI=
A._GetAutoObject(A.Device.Helper).Bh0(A._GetAutoObject(A.Device.Device).Bu,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ai6=AkI.Get(2);this.Pb=AkI.Get(1);this.An();},Dc:
function(E){C.Jz.Dc.call(this,E);this.PQ.L(E);this.PR.L(E);},Asj:function(G){if(
!!this.Ai6||!!this.Pb){this.E6.Y(true);this.PQ.Y(true);this.E5.Y(true);}else{this.
E6.Y(false);this.PQ.Y(false);this.E5.Y(false);}this.Ed.H(this.E6.M);this.Ed.Y(this.
E6.Fh());this.Et.H(this.E5.M);this.Et.Y(this.E5.Fh());},Aus:function(G){var B;var
Nt=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nt)return;if(((B=Nt.Df(0x1))[2]-B[0])>((
B=Nt.M)[2]-B[0])){this.E5.S(A.aaL(A.fl.Ak));this.PQ.S(A.aaL(A.fl.Ak));this.E6.S(
A.aaL(A.fl.Ak));this.PR.S(A.aaL(A.fl.Ak));}},AAl:function(G){A.pe([this,this.Aus
],this);},_Init:function(aArg){C.Jz._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AL._Init.call(this.Ed={I:this},0);A.acg.AL._Init.call(this.Et={
I:this},0);A.acg.Text._Init.call(this.E6={I:this},0);A.acg.Text._Init.call(this.
PQ={I:this},0);A.acg.Text._Init.call(this.E5={I:this},0);A.acg.Text._Init.call(this.
PR={I:this},0);this.__proto__=C.Tr;this.Z.H(Ax2);this.Z.BmJ(0);this.Z.Kg(3);this.
Ed.H(AYM);this.Ed.L(A.jb.H2);this.Et.H(AxZ);this.Et.L(A.jb.F$);this.E6.A3(0x34);
this.E6.H(Z2);this.E6.Hq(2);this.E6.IZ(true);this.E6.R(UO);this.E6.L(A.jb.Text);
this.E6.Aj(true);this.PQ.A3(0x34);this.PQ.H(Z2);this.PQ.IZ(true);this.PQ.R(AHJ);
this.PQ.L(A.jb.Text);this.PQ.Aj(true);this.E5.A3(0x34);this.E5.H(Z2);this.E5.Hq(
2);this.E5.IZ(true);this.E5.R(UO);this.E5.L(A.jb.Bm);this.E5.Aj(true);this.PR.A3(
0x34);this.PR.H(Z2);this.PR.IZ(true);this.PR.R(S0);this.PR.L(A.jb.Text);this.PR.
Aj(true);this.J(this.Z,0);this.J(this.Ed,0);this.J(this.Et,0);this.J(this.E6,0);
this.J(this.PQ,0);this.J(this.E5,0);this.J(this.PR,0);this.Z.En=[this,this.AAl];
this.E6.QZ([this,this.Asj]);this.E6.S(A.aaL(A.fl.Af));this.PQ.S(A.aaL(A.fl.Af));
this.E5.QZ([this,this.Asj]);this.E5.S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.Jz;this.Z._Done();this.Ed._Done();this.Et._Done(
);this.E6._Done();this.PQ._Done();this.E5._Done();this.PR._Done();C.Jz._Done.call(
this);},_ReInit:function(){C.Jz._ReInit.call(this);this.Z._ReInit();this.Ed._ReInit(
);this.Et._ReInit();this.E6._ReInit();this.PQ._ReInit();this.E5._ReInit();this.PR.
_ReInit();this.E6.S(A.aaL(A.fl.Af));this.PQ.S(A.aaL(A.fl.Af));this.E5.S(A.aaL(A.
fl.Af));this.PR.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(D){var B;C.Jz._Mark.
call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Et)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qu={FO:0,H7:0
,A1V:false,Ai:function(Ae){C.Fq.Ai.call(this,Ae);this.T(AYN+A.aaR(A.acf.AGK));if(
this.A1V){this.Kl((A._GetAutoObject(A.Device.Converter).SW(this.FO,2,true)+CO)+A.
_GetAutoObject(A.acj.DS).Aaf());this.Background.L(A._GetAutoObject(A.acj.DS).Azk(
this.FO,this.H7));this.Dc(A._GetAutoObject(A.acj.DS).Azm(this.FO,this.H7));}else{
this.Kl(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CI);this.Dc(A.jb.Text);}},Ce:
function(G){C.Fq.Ce.call(this,G);var LA=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LA){this.A1V=true;this.FO=A._GetAutoObject(A.acj.DS).Alc(LA,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A1V=false;this.FO=0;}this.H7=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.An();},_Init:function(aArg){C.Fq._Init.call(this,aArg);this.__proto__=C.Qu;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tq={Z:null,FP:null,Ed:
null,Et:null,MD:null,E6:null,E5:null,OV:null,Aah:0,Ai6:0,Pb:0,CS:function(){this.
An();},Ai:function(Ae){C.Jz.Ai.call(this,Ae);this.T(A.aaR(A.acf.AwX));this.MD.R(
this.Aah.toFixed());this.E6.R(this.Ai6.toFixed());this.E5.R(this.Pb.toFixed());}
,Ce:function(G){C.Jz.Ce.call(this,G);var AkI;AkI=A._GetAutoObject(A.Device.Helper
).A6h(A._GetAutoObject(A.Device.Device).Bu,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aah=AkI.Get(3);this.Ai6=AkI.Get(2);this.Pb=AkI.Get(1);this.An();},Asj:
function(G){if((!!this.Aah||!!this.Ai6)||!!this.Pb){this.MD.Y(true);this.E6.Y(true
);this.E5.Y(true);this.OV.Y(false);}else{this.MD.Y(false);this.E6.Y(false);this.
E5.Y(false);this.OV.Y(true);}this.FP.H(this.MD.M);this.FP.Y(this.MD.Fh());this.Ed.
H(this.E6.M);this.Ed.Y(this.E6.Fh());this.Et.H(this.E5.M);this.Et.Y(this.E5.Fh()
);},Aus:function(G){var B;var Nt=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nt)return;
if(((B=Nt.Df(0x1))[2]-B[0])>((B=Nt.M)[2]-B[0])){this.E5.S(A.aaL(A.fl.Ak));this.E6.
S(A.aaL(A.fl.Ak));this.MD.S(A.aaL(A.fl.Ak));}},AAl:function(G){A.pe([this,this.Aus
],this);},_Init:function(aArg){C.Jz._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AL._Init.call(this.FP={I:this},0);A.acg.AL._Init.call(this.Ed={
I:this},0);A.acg.AL._Init.call(this.Et={I:this},0);A.acg.Text._Init.call(this.MD={
I:this},0);A.acg.Text._Init.call(this.E6={I:this},0);A.acg.Text._Init.call(this.
E5={I:this},0);A.acg.Text._Init.call(this.OV={I:this},0);this.__proto__=C.Tq;this.
Z.A3(0x3F);this.Z.H(Ax2);this.Z.A93(5);this.Z.Kg(3);this.FP.H(AYO);this.FP.L(A.jb.
EV);this.Ed.H(Aod);this.Ed.L(A.jb.H2);this.Et.H(AYP);this.Et.L(A.jb.F$);this.MD.
A3(0x3C);this.MD.H(Z2);this.MD.Hq(2);this.MD.IZ(true);this.MD.R(UO);this.MD.L(A.
jb.Text);this.MD.Aj(true);this.E6.A3(0x3C);this.E6.H(Z2);this.E6.Hq(2);this.E6.IZ(
true);this.E6.R(UO);this.E6.L(A.jb.Text);this.E6.Aj(true);this.E5.A3(0x3C);this.
E5.H(Z2);this.E5.Hq(2);this.E5.IZ(true);this.E5.R(UO);this.E5.L(A.jb.Bm);this.E5.
Aj(true);this.OV.A3(0x34);this.OV.H(Z2);this.OV.IZ(true);this.OV.A7(0x11);this.OV.
R(A.aaR(A.acf.ARE));this.OV.L(A.jb.Text);this.OV.Aj(true);this.OV.Y(false);this.
J(this.Z,0);this.J(this.FP,0);this.J(this.Ed,0);this.J(this.Et,0);this.J(this.MD
,0);this.J(this.E6,0);this.J(this.E5,0);this.J(this.OV,0);this.Z.En=[this,this.AAl
];this.MD.QZ([this,this.Asj]);this.MD.S(A.aaL(A.fl.Af));this.E6.QZ([this,this.Asj
]);this.E6.S(A.aaL(A.fl.Af));this.E5.QZ([this,this.Asj]);this.E5.S(A.aaL(A.fl.Af
));this.OV.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Jz;this.Z._Done(
);this.FP._Done();this.Ed._Done();this.Et._Done();this.MD._Done();this.E6._Done(
);this.E5._Done();this.OV._Done();C.Jz._Done.call(this);},_ReInit:function(){C.Jz.
_ReInit.call(this);this.Z._ReInit();this.FP._ReInit();this.Ed._ReInit();this.Et.
_ReInit();this.MD._ReInit();this.E6._ReInit();this.E5._ReInit();this.OV._ReInit(
);this.OV.R(A.aaR(A.acf.ARE));this.MD.S(A.aaL(A.fl.Af));this.E6.S(A.aaL(A.fl.Af)
);this.E5.S(A.aaL(A.fl.Af));this.OV.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(
D){var B;C.Jz._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Et)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.ALJ={_Init:function(aArg){C.Ai8._Init.call(
this,aArg);this.__proto__=C.ALJ;this.N.B2(A.aaR(A.acf.A7v));this.A4d=1;this.Rb.Cs(
A.aaL(A.fl.Ak));},_ReInit:function(){C.Ai8._ReInit.call(this);this.N.B2(A.aaR(A.
acf.A7v));this.Rb.Cs(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.GB={_Init:function(aArg){C.Ai8._Init.call(this,aArg);this.__proto__=C.GB;this.
N.B2(A.aaR(A.acf.A4P));this.N9.R(A.aaR(A.acf.Auv));},_ReInit:function(){C.Ai8._ReInit.
call(this);this.N.B2(A.aaR(A.acf.A4P));this.N9.R(A.aaR(A.acf.Auv));},_className:
"Application::AnimalListActionsScreen"};C.AQt={OH:null,IF:null,HZ:null,ID:null,GG:
null,AlE:function(G){A.pe([this,this.Bzn],this);},Bzn:function(G){A._GetAutoObject(
C.A1).BU(3);},_Init:function(aArg){C.Ct._Init.call(this,aArg);C.OH._Init.call(this.
OH={I:this},0);C.BZ._Init.call(this.IF={I:this},0);C.SE._Init.call(this.HZ={I:this
},0);C.AGb._Init.call(this.ID={I:this},0);C.Q5._Init.call(this.GG={I:this},0);this.
__proto__=C.AQt;var B;this.JK(A.aaR(A.acf.A_3));this.IF.H(AhL);this.IF.Aj(true);
this.IF.T(A.aaR(A.acf.Language));this.IF.A9M(100);this.HZ.H(W1);this.HZ.Aj(true);
this.HZ.T(A.aaR(A.acf.Date));this.HZ.Bi(true);this.ID.H(Z0);this.ID.Aj(true);this.
ID.T(A.aaR(A.acf.Bw));this.GG.H(AhK);this.GG.Aj(true);this.GG.Y(true);this.GG.T(
A.aaR(A.acf.AFK));this.GG.Bi(true);this.GG.Ary(false);this.GG.A9U(true);this.JO(
this.Z,-1);this.JO(this.Ay,-1);this.J(this.IF,0);this.J(this.HZ,0);this.J(this.ID
,0);this.J(this.GG,0);this.IF.Wl(A.aaL(A.fl.Hm));this.IF.Wm(A.aaL(A.fl.Hm));this.
IF.As([B=this.OH,B.B$,B.Ca]);this.IF.CJ(this.OH);this.HZ.AeB([B=this.HZ,B.FN]);this.
HZ.Gi([this,this.D6,this.GI]);this.HZ.Aki(A.aaL(A.ach.Edit));this.HZ.AbT([B=A._GetAutoObject(
A.Device.Helper),B.UP,B.UQ]);this.ID.AeB([B=this.ID,B.FN]);this.ID.Gi([this,this.
D6,this.GI]);this.ID.Aki(A.aaL(A.ach.Edit));this.ID.AbT([B=A._GetAutoObject(A.Device.
Helper),B.UP,B.UQ]);this.GG.AeB([B=this.GG,B.FN]);this.GG.Gi([this,this.D6,this.
GI]);this.GG.Aki(A.aaL(A.ach.Edit));this.GG.As([B=A._GetAutoObject(A.Device.Device
),B.AR8,B.AZN]);},_Done:function(){this.__proto__=C.Ct;this.OH._Done();this.IF._Done(
);this.HZ._Done();this.ID._Done();this.GG._Done();C.Ct._Done.call(this);},_ReInit:
function(){C.Ct._ReInit.call(this);this.OH._ReInit();this.IF._ReInit();this.HZ._ReInit(
);this.ID._ReInit();this.GG._ReInit();this.JK(A.aaR(A.acf.A_3));this.IF.T(A.aaR(
A.acf.Language));this.HZ.T(A.aaR(A.acf.Date));this.ID.T(A.aaR(A.acf.Bw));this.GG.
T(A.aaR(A.acf.AFK));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaG={Bh:null,Ft:null,AmH:null,Amq:null,R6:null,A6C:A.jV,KI:A.jV,AQW:null,AQX:
null,ACO:null,CA:function(G){var B;C.D5.CA.call(this,G);A.zX([this,this.A2r],[B=
A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId],0);this.A2r(this);},EX:function(
G){var B;A.z$([this,this.A2r],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId
],0);C.D5.EX.call(this,G);},Zb:function(E){C.D5.Zb.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bh)this.Bh.Zb(E);},ASG:function(E){if(this.AQW===E)return;this.
AQW=E;if(!!this.Bh)this.Bh.NV(E);},ASH:function(E){if(this.AQX===E)return;this.AQX=
E;this.Bn9(this);},ASw:function(E){if(this.ACO===E)return;this.ACO=E;A.pe([this,
this.Bn8],this);},Arq:function(E){if(this.A6C===E)return;this.A6C=E;this.R6.R(E);
},Dx:function(E){if(this.KI===E)return;this.KI=E;if(!!this.Bh)this.Bh.Dx(E);},AkB:
function(LY){A.ab5("%s",AYQ);},ADr:function(){A.ab5("%s",AkV);return false;},Aw5:
function(G){if(!!this.Bh)this.HJ(this.Bh);this.Bh=A._NewObject(C.FW,0);this.Bh.H(
AsJ);this.Bh.Za(A._GetAutoObject(A.Device.Device).Bu);this.Bh.Dx(this.KI);this.Bh.
NV(this.AQW);this.Bh.Zb(this.AR);this.J(this.Bh,0);this.Bb(this.Bh);},Bn9:function(
G){var B;if(!!this.Ft)this.HJ(this.Ft);this.Ft=(C.Ev.isPrototypeOf(B=A._NewObject(
this.AQX,0))?B:null);this.Ft.H(JS);this.J(this.Ft,0);},Bn8:function(G){var B;if(
!!this.AmH)this.HJ(this.AmH);if(!!this.ACO&&this.ADr()){this.AmH=(C.IR.isPrototypeOf(
B=A._NewObject(this.ACO,0))?B:null);this.AmH.H(BF);this.AmH.Bi(false);this.J(this.
AmH,0);this.R6.Y(false);}else this.R6.Y(true);},A2r:function(G){this.AkB(A._GetAutoObject(
A.Device.Device).Bu);this.Aw5(this);},_Init:function(aArg){C.D5._Init.call(this,
aArg);A.acg.AL._Init.call(this.Amq={I:this},0);C.CG._Init.call(this.R6={I:this},
0);this.__proto__=C.AaG;this.Amq.H(BF);this.Amq.L(A.jb.CI);this.R6.H(AHi);this.R6.
A7(0x11);this.R6.L(A.jb.Text);this.J(this.Amq,0);this.J(this.R6,0);this.R6.S(A.aaL(
A.fl.Kb));this.R6.A2(A.aaL(A.fl.Ic));},_Done:function(){this.__proto__=C.D5;this.
Amq._Done();this.R6._Done();C.D5._Done.call(this);},_ReInit:function(){C.D5._ReInit.
call(this);this.Amq._ReInit();this.R6._ReInit();this.R6.S(A.aaL(A.fl.Kb));this.R6.
A2(A.aaL(A.fl.Ic));},_Mark:function(D){var B;C.D5._Mark.call(this,D);if((B=this.
Bh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amq)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.JA={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BbU],[B=A._GetAutoObject(A.Device.Device),B.AD3,B.AIf],0);A.pe([this,this.BbU],this
);},Dr:function(){return 4;},Gb:function(aIndex){return this.AnimalListContentToString.
BS(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.
Device).AbN(E);},BbU:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.JA;this.Cq.Set(0,0);this.Cq.Set(1,1);this.Cq.Set(2,2
);this.Cq.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.CQ;this.AnimalListContentToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.AQ1={IF:null,YU:null,Y3:null,Y1:null,Y4:null
,YV:null,YZ:null,Y2:null,YY:null,OH:null,_Init:function(aArg){C.Ct._Init.call(this
,aArg);C.BZ._Init.call(this.IF={I:this},0);C.NT._Init.call(this.YU={I:this},0);C.
NT._Init.call(this.Y3={I:this},0);C.NT._Init.call(this.Y1={I:this},0);C.NT._Init.
call(this.Y4={I:this},0);C.NT._Init.call(this.YV={I:this},0);C.NT._Init.call(this.
YZ={I:this},0);C.NT._Init.call(this.Y2={I:this},0);C.NT._Init.call(this.YY={I:this
},0);C.OH._Init.call(this.OH={I:this},0);this.__proto__=C.AQ1;var B;this.JK(A.aaR(
A.acf.Settings));this.IF.H(AhL);this.IF.Aj(true);this.IF.T(A.aaR(A.acf.Language)
);this.IF.A9M(100);this.YU.H(AsK);this.YU.Aj(true);this.YU.T(A.aaR(A.acf.ABZ));this.
YU.NW(16);this.Y3.H(AsL);this.Y3.Aj(true);this.Y3.T(A.aaR(A.acf.AGF));this.Y3.NW(
22);this.Y1.H(AsM);this.Y1.Aj(true);this.Y1.T(A.aaR(A.acf.Temperature));this.Y1.
NW(17);this.Y4.H(Ax3);this.Y4.Aj(true);this.Y4.T(A.aaR(A.acf.ABV));this.Y4.NW(46
);this.YV.H(Aoe);this.YV.Aj(true);this.YV.T(A.aaR(A.acf.Device));this.YV.NW(18);
this.YZ.H(Aoe);this.YZ.Aj(true);this.YZ.T(A.aaR(A.acf.ArU));this.YZ.NW(19);this.
Y2.H(AH3);this.Y2.Aj(true);this.Y2.T(A.aaR(A.acf.LinkTransponder));this.Y2.NW(101
);this.YY.H(AxU);this.YY.Aj(true);this.YY.T(A.aaR(A.acf.ACd));this.YY.NW(87);this.
J(this.IF,0);this.J(this.YU,0);this.J(this.Y3,0);this.J(this.Y1,0);this.J(this.Y4
,0);this.J(this.YV,0);this.J(this.YZ,0);this.J(this.Y2,0);this.J(this.YY,0);this.
IF.Wl(A.aaL(A.fl.Hm));this.IF.Wm(A.aaL(A.fl.Hm));this.IF.As([B=this.OH,B.B$,B.Ca
]);this.IF.CJ(this.OH);this.YU.AR=[B=this.YU,B.NZ];this.Y3.AR=[B=this.Y3,B.NZ];this.
Y1.AR=[B=this.Y1,B.NZ];this.Y4.AR=[B=this.Y4,B.NZ];this.YV.AR=[B=this.YV,B.NZ];this.
YZ.AR=[B=this.YZ,B.NZ];this.Y2.AR=[B=this.Y2,B.NZ];this.YY.AR=[B=this.YY,B.NZ];}
,_Done:function(){this.__proto__=C.Ct;this.IF._Done();this.YU._Done();this.Y3._Done(
);this.Y1._Done();this.Y4._Done();this.YV._Done();this.YZ._Done();this.Y2._Done(
);this.YY._Done();this.OH._Done();C.Ct._Done.call(this);},_ReInit:function(){C.Ct.
_ReInit.call(this);this.IF._ReInit();this.YU._ReInit();this.Y3._ReInit();this.Y1.
_ReInit();this.Y4._ReInit();this.YV._ReInit();this.YZ._ReInit();this.Y2._ReInit(
);this.YY._ReInit();this.OH._ReInit();this.JK(A.aaR(A.acf.Settings));this.IF.T(A.
aaR(A.acf.Language));this.YU.T(A.aaR(A.acf.ABZ));this.Y3.T(A.aaR(A.acf.AGF));this.
Y1.T(A.aaR(A.acf.Temperature));this.Y4.T(A.aaR(A.acf.ABV));this.YV.T(A.aaR(A.acf.
Device));this.YZ.T(A.aaR(A.acf.ArU));this.Y2.T(A.aaR(A.acf.LinkTransponder));this.
YY.T(A.aaR(A.acf.ACd));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.
IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"};
C.ALW={EP:null,Init:function(aArg){this.EP.Ahe(A._NewObject(A.Core.Bw,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dw()).Format(A.aaR(A.acf.AgG)));},ATL:function(
){this.EP.AeF(this.AOq());this.Aaj=!this.EP.ET.AY;},AiJ:function(G){this.EP.Ahe(
A._NewObject(A.Core.Bw,0).Initialize(A._GetAutoObject(A.Device.Helper).Dw()).Format(
A.aaR(A.acf.AgG)));this.ATL();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dx(A.aaR(A.acf.A7J));else this.Dx(A.aaR(A.acf.Aq4));this.An();},AOq:function(
){var BD=A._NewObject(C.Ap9,0);var Qd=A._GetAutoObject(A.Device.Helper).ANG(A._GetAutoObject(
A.Device.Helper).Dw());var Dt=A._GetAutoObject(A.Device.Helper).Ap5(Qd-(86400*this.
Mr));BD.Ani(AsN);BD.QW([].concat(0,BD.Ga.slice(1,4)));BD.QW(A.abN(BD.Ga,(Qd-Dt)|
0));BD.QW(A.abP(BD.Ga,3400));BD.QW([].concat(BD.Ga.slice(0,3),4200));var F0=A._GetAutoObject(
A.Device.Device).Bu.Cd();BD.Awn(F0);BD.X5();if(F0>0){var P=0;while(P<F0){var ApD=
A._GetAutoObject(A.Device.Device).Bu.CE(P,7);var ApE=A._GetAutoObject(A.Device.Device
).Bu.HB(P,6)-Dt;if(ApD>0)BD.ApY(ApE,ApD);P=P+1;}}return BD;},_Init:function(aArg
){C.K7._Init.call(this,aArg);C.Aqy._Init.call(this.EP={I:this},0);this.__proto__=
C.ALW;this.EP.H(AYR);this.EP.T(A.aaR(A.acf.Temperature));this.EP.AEJ(C.AGp);this.
J(this.EP,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K7;this.EP._Done(
);C.K7._Done.call(this);},_ReInit:function(){C.K7._ReInit.call(this);this.EP._ReInit(
);this.EP.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K7._Mark.call(
this,D);if((B=this.EP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.ALX={ZL:null,OY:null,AgA:null,Aaj:false,Init:function(aArg){this.ZL.Ahe(A._NewObject(
A.Core.Bw,0).Initialize(A._GetAutoObject(A.Device.Helper).Dw()).Format(A.aaR(A.acf.
AgG)));},Ai:function(Ae){C.D5.Ai.call(this,Ae);this.AgA.Y(this.Aaj);},CA:function(
G){var B;C.D5.CA.call(this,G);A.zX([this,this.AiJ],[B=A._GetAutoObject(A.Device.
Helper),B.UP,B.UQ],0);A.zV([this,this.AiJ],A._GetAutoObject(A.Device.Device).Bu,
0);A.zX([this,this.AlS],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId],0
);A.pe([this,this.AlS],this);},EX:function(G){var B;A.z$([this,this.AiJ],[B=A._GetAutoObject(
A.Device.Helper),B.UP,B.UQ],0);A.z9([this,this.AiJ],A._GetAutoObject(A.Device.Device
).Bu,0);A.z$([this,this.AlS],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId
],0);C.D5.EX.call(this,G);},AlS:function(G){var Fp=A._NewObject(A.Device.Filter,
0);var HR=A._NewObject(A.Device.Int32FilterCriterion,0);HR.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fp.CV(HR);A._GetAutoObject(A.Device.Device).Bu.Bl(Fp
);},AiJ:function(G){this.ZL.Ahe(A._NewObject(A.Core.Bw,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dw()).Format(A.aaR(A.acf.AgG)));this.Bnt();this.An();},Bnt:function(
){var B;var F0=A._GetAutoObject(A.Device.Device).Bu.Cd();var K5=A._NewObject(C.Ap9
,0);var Vb=A._NewObject(C.Ap9,0);var Qd=A._GetAutoObject(A.Device.Helper).ANG(A.
_GetAutoObject(A.Device.Helper).Dw());var Dt=A._GetAutoObject(A.Device.Helper).Ap5(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K5.QW([].concat(0,K5.Ga.slice(1
,4)));K5.QW(A.abN(K5.Ga,(Qd-Dt)|0));K5.QW(A.abP(K5.Ga,0));K5.QW([].concat(K5.Ga.
slice(0,3),150000));K5.Ani(AYS);Vb.QW([].concat(0,Vb.Ga.slice(1,4)));Vb.QW(A.abN(
Vb.Ga,(Qd-Dt)|0));Vb.QW(A.abP(Vb.Ga,0));Vb.QW([].concat(Vb.Ga.slice(0,3),1500));
Vb.Ani(AYT);K5.Awn(F0);K5.X5();Vb.Awn(F0);Vb.X5();if(F0>0){var P=0;var Aal=0;var
AzL=0;var AJB=0;var A1y=0;var Bcw=true;while(P<F0){var AlN=A._GetAutoObject(A.Device.
Device).Bu.CE(P,8);var Aaw=A._GetAutoObject(A.Device.Device).Bu.HB(P,6)-Dt;if(AlN>
0){K5.ApY(Aaw,AlN);if(!A1y){A1y=Aaw;AJB=AlN;}if(AzL>0){var LA=A._GetAutoObject(A.
Device.Helper).MN(AzL,Aaw);if(!!LA){var FO=A._GetAutoObject(A.acj.DS).Alc(LA,Aal
,AlN);if(Bcw){Vb.ApY(AzL,FO);Bcw=false;}Vb.ApY(Aaw,FO);}}Aal=AlN;AzL=Aaw;}P=P+1;
}var Adv=A.aaR(A.acf.Bf$);var FO=A._GetAutoObject(A.Device.Helper).Bh2(A1y,AzL,AJB
,Aal);Adv=A._GetAutoObject(A.Device.Helper).Ne(Adv,P3,FO.toFixed());Adv=A._GetAutoObject(
A.Device.Helper).Ne(Adv,AxF,A._GetAutoObject(A.acj.DS).Aaf());this.OY.Ib.R(Adv);
}this.Aaj=!K5.AY;if(this.Aaj)this.OY.Ib.R(A.jV);(C.OY.isPrototypeOf(B=this.OY.EP
)?B:null).Ane([B=A._GetAutoObject(A.Device.Helper).W,B.PL,B.Ew]);this.ZL.AeF(K5);
this.OY.AeF(Vb);},_Init:function(aArg){C.D5._Init.call(this,aArg);C.Aqy._Init.call(
this.ZL={I:this},0);C.Aqy._Init.call(this.OY={I:this},0);C.Akz._Init.call(this.AgA={
I:this},0);this.__proto__=C.ALX;this.ZL.H(AYU);this.ZL.T(A.aaR(A.acf.Afe));this.
ZL.AEJ(C.AMs);this.OY.H(AYV);this.OY.T(A.aaR(A.acf.AGK));this.OY.AEJ(C.OY);this.
AgA.H(S1);this.AgA.R(A.aaR(A.acf.Aj8));this.J(this.ZL,0);this.J(this.OY,0);this.
J(this.AgA,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D5;this.ZL._Done(
);this.OY._Done();this.AgA._Done();C.D5._Done.call(this);},_ReInit:function(){C.
D5._ReInit.call(this);this.ZL._ReInit();this.OY._ReInit();this.AgA._ReInit();this.
ZL.T(A.aaR(A.acf.Afe));this.OY.T(A.aaR(A.acf.AGK));this.AgA.R(A.aaR(A.acf.Aj8));
},_Mark:function(D){var B;C.D5._Mark.call(this,D);if((B=this.ZL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.ALU={
AuS:null,AuR:null,AwZ:null,Aum:null,Vm:null,Aa7:null,Aa6:null,Ab8:null,AeZ:null,
Init:function(aArg){this.Vm.Ahe(A._NewObject(A.Core.Bw,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dw()).Format(A.aaR(A.acf.AgG)));},A3W:function(G){this.Vm.AbU(this.
Aum);this.Aa7.AbU(this.AuS);this.Aa6.AbU(this.AuR);this.Ab8.AbU(this.AwZ);},AwY:
function(){var F0=A._GetAutoObject(A.Device.Device).Bu.Cd();this.Aum=A._NewObject(
C.Ajg,0);this.AuS=A._NewObject(C.Ajg,0);this.AuR=A._NewObject(C.Ajg,0);this.AwZ=
A._NewObject(C.Ajg,0);if(F0>0){var P=F0-1;while(P>=0){var D4=A._GetAutoObject(A.
Device.Device).Bu.HB(P,6);this.As7(this.Aum,P,3,D4);this.As7(this.AuS,P,2,D4);this.
As7(this.AuR,P,5,D4);this.As7(this.AwZ,P,4,D4);P=P-1;}}this.Aaj=!(((this.Aum.AY+
this.AuR.AY)+this.AuS.AY)+this.AwZ.AY);A.pe([this,this.A3W],this);},As7:function(
A0y,Ad,A0x,P9){var Ak_=A._GetAutoObject(A.Device.Device).Bu.IU(Ad,A0x);if(!!Ak_)
A0y.Ot(Ak_,P9);},AbS:function(E){if(this.Mr===E)return;C.K7.AbS.call(this,E);if(
!!this.Vm)this.Vm.AbS(E);if(!!this.Aa7)this.Aa7.AbS(E);if(!!this.Aa6)this.Aa6.AbS(
E);if(!!this.Ab8)this.Ab8.AbS(E);this.AeZ.AbS(E);},AiJ:function(G){this.Vm.Ahe(A.
_NewObject(A.Core.Bw,0).Initialize(A._GetAutoObject(A.Device.Helper).Dw()).Format(
A.aaR(A.acf.AgG)));this.AwY();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dx(A.aaR(A.acf.Bjq));else this.Dx(A.aaR(A.acf.Am7));this.An();},_Init:function(
aArg){C.K7._Init.call(this,aArg);C.Ahk._Init.call(this.Vm={I:this},0);C.Ahk._Init.
call(this.Aa7={I:this},0);C.Ahk._Init.call(this.Aa6={I:this},0);C.Ahk._Init.call(
this.Ab8={I:this},0);C.ATI._Init.call(this.AeZ={I:this},0);this.__proto__=C.ALU;
this.Dx(A.aaR(A.acf.Am7));this.Vm.H(AYW);this.Vm.R(A.aaR(A.acf.AFP));this.Aa7.H(
AYX);this.Aa7.R(A.aaR(A.acf.Feed));this.Aa6.H(AYY);this.Aa6.R(A.aaR(A.acf.AFR));
this.Ab8.H(AYZ);this.Ab8.R(A.aaR(A.acf.AFS));this.AeZ.H(AY0);this.J(this.Vm,-1);
this.J(this.Aa7,-1);this.J(this.Aa6,-1);this.J(this.Ab8,-1);this.J(this.AeZ,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K7;this.Vm._Done();this.Aa7.
_Done();this.Aa6._Done();this.Ab8._Done();this.AeZ._Done();C.K7._Done.call(this);
},_ReInit:function(){C.K7._ReInit.call(this);this.Vm._ReInit();this.Aa7._ReInit(
);this.Aa6._ReInit();this.Ab8._ReInit();this.AeZ._ReInit();this.Dx(A.aaR(A.acf.Am7
));this.Vm.R(A.aaR(A.acf.AFP));this.Aa7.R(A.aaR(A.acf.Feed));this.Aa6.R(A.aaR(A.
acf.AFR));this.Ab8.R(A.aaR(A.acf.AFS));},_Mark:function(D){var B;C.K7._Mark.call(
this,D);if((B=this.AuS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AwZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aum)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.ALV={EP:null,Wq:null,Ad0:null,A1T:false,Init:function(aArg){this.Wq.Ahe(A._NewObject(
A.Core.Bw,0).Initialize(A._GetAutoObject(A.Device.Helper).Dw()).Format(A.aaR(A.acf.
AgG)));},Bj:function(aSize){C.K7.Bj.call(this,aSize);this.Ad0.H(this.EP.M);},Ai:
function(Ae){C.K7.Ai.call(this,Ae);var BAV=!this.Aaj&&this.A1T;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Ad0.R(A.aaR(A.acf.A7J));else this.
Ad0.R(A.aaR(A.acf.Aq4));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dx(A.aaR(
A.acf.Bjr));else this.Dx(A.aaR(A.acf.Bjs));this.Ad0.Y(BAV);},AiJ:function(G){this.
Wq.Ahe(A._NewObject(A.Core.Bw,0).Initialize(A._GetAutoObject(A.Device.Helper).Dw(
)).Format(A.aaR(A.acf.AgG)));this.Aaj=true;this.A1T=true;this.AwY();this.ATL();this.
An();},ATL:function(){this.EP.AeF(this.AOq());if(!!this.EP.ET&&(this.EP.ET.AY>0)
){this.Aaj=false;this.A1T=false;}},AOq:function(){var BD=A._NewObject(C.Ap9,0);var
Qd=A._GetAutoObject(A.Device.Helper).ANG(A._GetAutoObject(A.Device.Helper).Dw());
var Dt=A._GetAutoObject(A.Device.Helper).Ap5(Qd-(86400*this.Mr));BD.Ani(AY1);BD.
QW([].concat(0,BD.Ga.slice(1,4)));BD.QW(A.abN(BD.Ga,(Qd-Dt)|0));BD.QW(A.abP(BD.Ga
,3400));BD.QW([].concat(BD.Ga.slice(0,3),4200));var F0=A._GetAutoObject(A.Device.
Device).Bu.Cd();BD.Awn(F0);BD.X5();if(F0>0){var P=0;while(P<F0){var ApD=A._GetAutoObject(
A.Device.Device).Bu.CE(P,7);var ApE=A._GetAutoObject(A.Device.Device).Bu.HB(P,6)-
Dt;if(ApD>0)BD.ApY(ApE,ApD);P=P+1;}}return BD;},Bif:function(){var F0=A._GetAutoObject(
A.Device.Device).Bu.Cd();if(F0>0){var Be8=A._NewObject(C.Ajg,0);var P=F0-1;while(
P>=0){var DZ=A._NewObject(A.Device.Rating,0);DZ.EG(P,A._GetAutoObject(A.Device.Device
).Bu);var LN=A._GetAutoObject(A.Device.Helper).ACC(DZ);if(!!LN)Be8.Ot(LN,DZ.Timestamp
);P=P-1;}return Be8;}else return null;},AwY:function(){this.Wq.AbU(this.Bif());if(
!!this.Wq.N2&&(this.Wq.N2.AY>0))this.Aaj=false;},_Init:function(aArg){C.K7._Init.
call(this,aArg);C.Aqy._Init.call(this.EP={I:this},0);C.Ahk._Init.call(this.Wq={I:
this},0);C.Akz._Init.call(this.Ad0={I:this},0);this.__proto__=C.ALV;this.EP.H(AsJ
);this.EP.T(A.aaR(A.acf.Temperature));this.EP.AEJ(C.AGp);this.Wq.H(AY2);this.Wq.
R(A.aaR(A.acf.Rating));this.Ad0.H(AsJ);this.J(this.EP,-2);this.J(this.Wq,-2);this.
J(this.Ad0,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K7;this.EP._Done(
);this.Wq._Done();this.Ad0._Done();C.K7._Done.call(this);},_ReInit:function(){C.
K7._ReInit.call(this);this.EP._ReInit();this.Wq._ReInit();this.Ad0._ReInit();this.
EP.T(A.aaR(A.acf.Temperature));this.Wq.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K7._Mark.call(this,D);if((B=this.EP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.Wv={Q:null,Gn:null,Go:null
,QE:null,AM:0,Gg:0,FV:100,Fx:0,Init:function(aArg){},IO:function(G){this.Fx=1;C.
Ec.IO.call(this,G);},Bj:function(aSize){C.Ec.Bj.call(this,aSize);this.QE.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Ec.Ai.call(this,Ae);this.QE.Y(this.Gg!==
this.FV);this.QE.L(this.V.AQ);if((this.Fx===4)||(this.Fx===5))this.QE.L(A.jb.EV);
},AlG:function(G){this.Fx=5;this.An();if(this.Bo.By){A.pe([this,this.Aym],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qj:function(G){if(this.Fx===5)A.pe([this,this.
Aym],this);if(this.Fx===4)A.pe([this,this.Ayn],this);if(this.Fx===1)A.pe(this.AR
,this);this.Fx=0;this.An();},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,
F[1].call(F[0])));},AcE:function(s){this.C3(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcE],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcE],E,0);if(!!E)A.pe([this,this.AcE],this);},AlH:function(G){this.Fx=4;this.
An();if(this.Bo.By){A.pe([this,this.Ayn],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J2:function(G){this.Fx=0;},Ayn:function(s){this.J2(s);},JX:function(G){this.
Fx=0;},Aym:function(s){this.JX(s);},BC:function(E){if(E<this.Gg)E=this.Gg;if(E>this.
FV)E=this.FV;if(this.AM===E)return;this.AM=E;this.An();},Gp:function(E){if(this.
Gg===E)return;this.Gg=E;this.An();},E4:function(E){if(this.FV===E)return;this.FV=
E;this.An();},_Init:function(aArg){C.Ec._Init.call(this,aArg);A.Core.BL._Init.call(
this.Gn={I:this},0);A.Core.BL._Init.call(this.Go={I:this},0);A.acg.Am._Init.call(
this.QE={I:this},0);this.__proto__=C.Wv;this.H(JR);this.Gn.Filter=5;this.Go.Filter=
4;this.Background.H(JR);this.V.H(Acv);this.V.R(Lt);this.QE.H(Ax4);this.J(this.QE
,0);this.Gn.BM=[this,this.AlG];this.Gn.DX=[this,this.AlG];this.Go.BM=[this,this.
AlH];this.Go.DX=[this,this.AlH];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cs(null);this.QE.Ax(A.aaL(A.ach.AMg));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ec;this.Gn._Done();this.Go._Done();this.QE._Done();C.Ec._Done.
call(this);},_ReInit:function(){C.Ec._ReInit.call(this);this.Gn._ReInit();this.Go.
_ReInit();this.QE._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Ec._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AT9={AC:null,CL:null,HG:
null,Bj:function(aSize){C.Wv.Bj.call(this,aSize);this.CL.H([this.QE.M[2],this.QE.
M[1],this.M[2],this.QE.M[3]]);},Ai:function(Ae){C.Wv.Ai.call(this,Ae);this.CL.Abp(
0,this.CL.AY-1);if(this.Gg!==this.FV)this.QE.Y(true);},Init:function(aArg){},C3:
function(G){var F;if(!!this.Q&&!!this.AC)this.BC(this.AC.DO((F=this.Q,F[1].call(
F[0]))));},J2:function(G){var F;var BQ=this.AM;C.Wv.J2.call(this,G);this.BC(this.
AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},JX:function(G){var F;var BQ=this.AM;C.Wv.JX.call(this
,G);this.BC(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},BC:function(E){var Qp=0;if(this.Gg
!==this.FV){if(E<this.Gg){E=this.FV;Qp=-this.CL.GY*this.CL.AY;}if(E>this.FV){E=this.
Gg;Qp=this.CL.GY;}}C.Wv.BC.call(this,E);if(!!Qp)this.CL.Gj(Qp);this.CL.GZ(this.AM
);this.CL.HA(this.CL.Gk,true,this.HG,null);},Hd:function(G){var B;var FZ=this.CL.
GW;var Cy=(C.CG.isPrototypeOf(B=this.CL.Cg)?B:null);if(!Cy)return;Cy.S(this.V.B7
);Cy.A2(A.aaL(A.fl.Af));Cy.L(this.V.AQ);if(!!this.AC)Cy.R(this.AC.Gb(FZ));else Cy.
R(WZ);Cy.H(A.abK(Cy.M,[(B=this.CL.M)[2]-B[0],this.CL.GY]));},CJ:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gp(0);this.E4(this.AC.Dr()-1);this.CL.
Jm(this.AC.Dr());this.CL.Abp(0,this.CL.AY-1);}},_Init:function(aArg){C.Wv._Init.
call(this,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.acl.Gc._Init.call(this.
HG={I:this},0);this.__proto__=C.AT9;this.H(JR);this.QE.H(AY3);this.CL.AeN(40);this.
CL.NV(C.CG);this.HG.Wo(23);this.HG.HI(1);this.HG.Fi(200);this.J(this.CL,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CL.Hd=[this,this.Hd];this.Init(
aArg);},_Done:function(){this.__proto__=C.Wv;this.CL._Done();this.HG._Done();C.Wv.
_Done.call(this);},_ReInit:function(){C.Wv._ReInit.call(this);this.CL._ReInit();
this.HG._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Wv._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RO={AK1:0
,Ai:function(Ae){C.Fq.Ai.call(this,Ae);this.T(A.aaR(A.acf.AGK));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kl((A._GetAutoObject(A.Device.Converter).AkQ(this.AK1
)+CO)+A._GetAutoObject(A.acj.DS).AfN());else this.Kl(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fq.Ce.call(this,G);this.AK1=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.An();},_Init:function(aArg
){C.Fq._Init.call(this,aArg);this.__proto__=C.RO;},_className:"Application::AnimalInfoItemWeightGain"
};C.AO5={Bc:null,Db:null,Init:function(aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(
A.Device.Device),B.AD2,B.AIe],0);},D2:function(G){C.IA.D2.call(this,G);this.Db.Ax(
A._GetAutoObject(A.Device.Converter).Bgp(A._GetAutoObject(A.Device.Device).D5));
},_Init:function(aArg){C.IA._Init.call(this,aArg);A.acg.DR._Init.call(this.Bc={I:
this},0);A.acg.Am._Init.call(this.Db={I:this},0);this.__proto__=C.AO5;this.Bc.DI(
Ax5);this.Bc.DY(Ax6);this.Bc.L(A.jb.Bc);this.Db.H(AY4);this.Db.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Db,0);this.Db.Ax(A.aaL(A.ach.AjJ));this.Init(aArg);},_Done:
function(){this.__proto__=C.IA;this.Bc._Done();this.Db._Done();C.IA._Done.call(this
);},_ReInit:function(){C.IA._ReInit.call(this);this.Bc._ReInit();this.Db._ReInit(
);},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AM4={Zr:null,Kr:null,Mg:null,Timer:null,ABM:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.Zr.R(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.BpO),P3,this.ABM.
toFixed()));},CA:function(G){this.Timer.Ar(true);},EX:function(G){this.Timer.Ar(
false);},Bz8:function(G){if(this.ABM>1){this.ABM=this.ABM-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Aw6();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Zr={I:this},0);A.acg.Text.
_Init.call(this.Kr={I:this},0);A.acg.Am._Init.call(this.Mg={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AM4;this.Background.L(A.jb.C2
);this.N.Y(true);this.Zr.H(AH4);this.Zr.KP(true);this.Zr.R(A.jV);this.Zr.L(A.jb.
Text);this.Kr.H(AY5);this.Kr.KP(true);this.Kr.R(A.aaR(A.acf.A4X));this.Kr.L(A.jb.
Text);this.Mg.H(Ax7);this.J(this.Zr,0);this.J(this.Kr,0);this.J(this.Mg,0);this.
Zr.S(A.aaL(A.fl.Af));this.Kr.S(A.aaL(A.fl.Af));this.Mg.Ax(A.aaL(A.ach.ABg));this.
Timer.Mv=[this,this.Bz8];},_Done:function(){this.__proto__=C.AB;this.Zr._Done();
this.Kr._Done();this.Mg._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Zr._ReInit();this.Kr._ReInit();this.Mg._ReInit(
);this.Timer._ReInit();this.Kr.R(A.aaR(A.acf.A4X));this.Zr.S(A.aaL(A.fl.Af));this.
Kr.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Zr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AML={Kr:null,Amf:null
,Qw:null,CS:function(){this.An();},Ai:function(Ae){C.AdQ.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).AaM<=10)this.Kr.R(A.aaR(A.acf.BgE));else this.Kr.R(A.aaR(A.acf.
A4Y));},_Init:function(aArg){C.AdQ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kr={I:this},0);A.acg.Am._Init.call(this.Amf={I:this},0);C.CG._Init.call(this.Qw={
I:this},0);this.__proto__=C.AML;this.SF.H(AY6);this.Mg.H(AY7);this.Kr.H(AH5);this.
Kr.KP(true);this.Kr.L(A.jb.Text);this.Amf.H(Ax7);this.Qw.H(AY8);this.Qw.Y(true);
this.Qw.R(A.aaR(A.acf.ATJ));this.Qw.L(A.jb.Text);this.J(this.Kr,0);this.J(this.Amf
,0);this.J(this.Qw,0);this.Kr.S(A.aaL(A.fl.Af));this.Amf.Ax(A.aaL(A.ach.ABg));this.
Qw.S(A.aaL(A.fl.Af));this.Qw.A2(A.aaL(A.fl.Ak));this.Qw.Cs(A.aaL(A.fl.Bk));},_Done:
function(){this.__proto__=C.AdQ;this.Kr._Done();this.Amf._Done();this.Qw._Done();
C.AdQ._Done.call(this);},_ReInit:function(){C.AdQ._ReInit.call(this);this.Kr._ReInit(
);this.Amf._ReInit();this.Qw._ReInit();this.Qw.R(A.aaR(A.acf.ATJ));this.Kr.S(A.aaL(
A.fl.Af));this.Qw.S(A.aaL(A.fl.Af));this.Qw.A2(A.aaL(A.fl.Ak));this.Qw.Cs(A.aaL(
A.fl.Bk));this.CS();},_Mark:function(D){var B;C.AdQ._Mark.call(this,D);if((B=this.
Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amf)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.ALH={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ALH;this.
RI.Ar(false);this.RI.Aj(false);this.RI.Y(false);},_className:"Application::AlarmListFilterScreen"
};C.AU7={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AU7;this.
SV.Ar(false);this.SV.Aj(false);this.SV.Y(false);},_className:"Application::WatchListFilterScreen"
};C.AM1={_Init:function(aArg){C.GB._Init.call(this,aArg);this.__proto__=C.AM1;this.
N.B2(A.aaR(A.acf.A4M));},_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A4M));},_className:"Application::ControlListActionsScreen"};C.AU6={_Init:
function(aArg){C.GB._Init.call(this,aArg);this.__proto__=C.AU6;this.N.B2(A.aaR(A.
acf.A4V));},_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4V
));},_className:"Application::WatchListActionsScreen"};C.ALG={_Init:function(aArg
){C.GB._Init.call(this,aArg);this.__proto__=C.ALG;this.N.B2(A.aaR(A.acf.A4L));},
_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4L));},_className:
"Application::AlarmListActionsScreen"};C.AOx={D2:function(G){C.Kc.D2.call(this,G
);this.Db.Ax(A._GetAutoObject(A.Device.Converter).AdF(5));},_Init:function(aArg){
C.Kc._Init.call(this,aArg);this.__proto__=C.AOx;},_className:"Application::HeaderControlListFilter"
};C.AO7={D2:function(G){C.Kc.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.
Converter).AdF(6));},_Init:function(aArg){C.Kc._Init.call(this,aArg);this.__proto__=
C.AO7;},_className:"Application::HeaderWatchListFilter"};C.AO$={DW:null,M6:null,
_Init:function(aArg){C.TP._Init.call(this,aArg);C.CG._Init.call(this.DW={I:this}
,0);A.acg.Am._Init.call(this.M6={I:this},0);this.__proto__=C.AO$;this.DW.H(Aoa);
this.DW.R(A.aaR(A.acf.A5u));this.DW.L(A.jb.Text);this.M6.H(AY9);this.M6.L(A.jb.Text
);this.M6.A7(0x12);this.J(this.DW,-2);this.J(this.M6,0);this.DW.S(A.aaL(A.fl.Ak)
);this.DW.A2(A.aaL(A.fl.Bk));this.M6.Ax(A.aaL(A.ach.AC7));},_Done:function(){this.
__proto__=C.TP;this.DW._Done();this.M6._Done();C.TP._Done.call(this);},_ReInit:function(
){C.TP._ReInit.call(this);this.DW._ReInit();this.M6._ReInit();this.DW.R(A.aaR(A.
acf.A5u));this.DW.S(A.aaL(A.fl.Ak));this.DW.A2(A.aaL(A.fl.Bk));},_Mark:function(
D){var B;C.TP._Mark.call(this,D);if((B=this.DW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"
};C.AMG={Ce:function(Ad){C.Ajo.Ce.call(this,Ad);if(!!this.AX){var Oj=this.AX.HX(
Ad,8);var BBE=this.AX.Sb(Ad,21);this.AaZ.R(A._GetAutoObject(A.Device.Helper).MN(
BBE,A._GetAutoObject(A.Device.Helper).Dw()).toFixed());this.Sh.Y(Oj);this.An();}
},_Init:function(aArg){C.Ajo._Init.call(this,aArg);this.__proto__=C.AMG;},_className:
"Application::CalfListWatchItem"};C.TP={AgR:null,AgT:null,_Init:function(aArg){C.
Da._Init.call(this,aArg);A.acg.Am._Init.call(this.AgR={I:this},0);A.acg.Am._Init.
call(this.AgT={I:this},0);this.__proto__=C.TP;this.AgR.H(AY_);this.AgR.L(A.jb.Text
);this.AgR.A7(0x12);this.AgT.H(AY$);this.AgT.L(A.jb.Text);this.AgT.A7(0x12);this.
JO(this.DQ,-1);this.J(this.AgR,0);this.J(this.AgT,0);this.AgR.Ax(A.aaL(A.ach.AmK
));this.AgT.Ax(A.aaL(A.ach.Abl));},_Done:function(){this.__proto__=C.Da;this.AgR.
_Done();this.AgT._Done();C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.
call(this);this.AgR._ReInit();this.AgT._ReInit();},_Mark:function(D){var B;C.Da.
_Mark.call(this,D);if((B=this.AgR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgT).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"};C.Ap9={
Ga:A.wg,OD:A.wf,QW:function(E){if(A.aaY(this.Ga,E))return;this.Ga=E;},Ani:function(
E){if(A.aaX(this.OD,E))return;this.OD=E;},_Init:function(aArg){A.acu.ABL._Init.call(
this,aArg);this.__proto__=C.Ap9;},_className:"Application::BoundCoordList"};C.Ajo={
TU:null,Wd:null,TW:null,We:null,Sh:null,Y5:null,AaZ:null,AP:null,A$:null,D8:null
,Lq:null,Init:function(aArg){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.
Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*
30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TU.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wd.H(this.TU.M);this.A$.H([this.TU.
M[2]-1,0,this.TU.M[2]+1,aSize[1]]);this.TW.H([this.TU.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.We.H(this.TW.M);this.D8.H([this.TW.M[2]-1,0,this.TW.M[2]+1,aSize[
1]]);this.Sh.H([this.TW.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Y5.H(this.Sh.
M);this.Lq.H([this.Sh.M[2]-1,0,this.Sh.M[2]+1,aSize[1]]);this.AaZ.H([this.Sh.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K4=this.V.AQ;
this.TU.AEq(K4);this.Wd.L(K4);this.TW.AEq(K4);this.We.L(K4);this.Sh.AEq(K4);this.
Y5.L(K4);this.AaZ.L(K4);this.Y5.Y(!this.Sh.Fh());},Ce:function(Ad){if(!this.AX)return;
this.Hj=Ad;var Ma=this.AX.CE(Ad,1);var H7=this.AX.AmC(Ad,14);var AtZ=this.AX.CE(
Ad,5);var LN=this.AX.IU(Ad,13);this.T(Ma.toFixed());if(!!LN){this.TU.Y(true);this.
TU.Awd(A._GetAutoObject(A.acj.Assessment).BcE(LN));this.Wd.Y(false);}else{this.TU.
Y(false);this.Wd.Y(true);}if(AtZ>0){this.TW.Y(true);this.TW.Awd(A._GetAutoObject(
A.acj.Assessment).BcE(A._GetAutoObject(A.Device.Converter).Asd(H7,AtZ)));this.We.
Y(false);}else{this.TW.Y(false);this.We.Y(true);}this.An();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.J9._Init.call(this.TU={I:this},0);A.acg.Text._Init.
call(this.Wd={I:this},0);C.J9._Init.call(this.TW={I:this},0);A.acg.Text._Init.call(
this.We={I:this},0);C.J9._Init.call(this.Sh={I:this},0);A.acg.Text._Init.call(this.
Y5={I:this},0);A.acg.Text._Init.call(this.AaZ={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
D8={I:this},0);A.acg.AL._Init.call(this.Lq={I:this},0);this.__proto__=C.Ajo;this.
Wd.H(AZa);this.Wd.R(Aob);this.We.H(Aoc);this.We.R(Aob);this.Sh.Awd(A.jb.ZF);this.
Y5.H(Aoc);this.Y5.R(Rg);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D8.L(A.jb.Bc);
this.Lq.L(A.jb.Bc);this.J(this.TU,0);this.J(this.Wd,0);this.J(this.TW,0);this.J(
this.We,0);this.J(this.Sh,0);this.J(this.Y5,0);this.J(this.AaZ,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.D8,0);this.J(this.Lq,0);this.Wd.S(A.aaL(A.fl.Af
));this.We.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af));this.AaZ.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TU._Done();this.Wd.
_Done();this.TW._Done();this.We._Done();this.Sh._Done();this.Y5._Done();this.AaZ.
_Done();this.AP._Done();this.A$._Done();this.D8._Done();this.Lq._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TU._ReInit();this.Wd.
_ReInit();this.TW._ReInit();this.We._ReInit();this.Sh._ReInit();this.Y5._ReInit(
);this.AaZ._ReInit();this.AP._ReInit();this.A$._ReInit();this.D8._ReInit();this.
Lq._ReInit();this.Wd.S(A.aaL(A.fl.Af));this.We.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(
A.fl.Af));this.AaZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.We)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DP={Pp:null,Am0:null
,ET:null,DP:null,AqX:0,AqY:0,A61:0,Amt:0,Aqi:0,Init:function(aArg){this.ASq(6);this.
ASr(8);this.ASD(A.jb.AW);this.ASE(3);},Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);this.DP.Blc([this.DP.AaU[0],(B=this.DP.M)[3]-B[1]]);this.Wr(this);},ASp:function(
E){if(this.Pp===E)return;this.Pp=E;this.DP.ASp(E);},ASE:function(E){if(this.AqY===
E)return;this.AqY=E;this.DP.ASE(E);},ASD:function(E){if(this.AqX===E)return;this.
AqX=E;this.DP.ASD(E);this.DP.Bli(E);},Wr:function(G){var B;while(!!this.DP.Ah)this.
HJ(this.DP.Ah);if(!this.ET)return;this.DP.Ani([((this.ET.OD[0]*((B=this.M)[2]-B[
0]))/(this.ET.Ga[2]-this.ET.Ga[0]))|0,this.DP.OD[1]]);this.DP.Ani([this.DP.OD[0]
,((this.ET.OD[1]*((B=this.M)[3]-B[1]))/(this.ET.Ga[3]-this.ET.Ga[1]))|0]);var P;
var De=this.DP.OD[1];var D4;var A37=this.ET.Ga[1];var Bjp=(((B=this.DP.M)[3]-B[1
])/this.DP.OD[1])|0;for(P=0;P<Bjp;P=P+1){D4=A._NewObject(A.acg.Text,0);D4.H([0,((((
B=this.M)[3]-B[1])-(P*De))-(this.Am0.Ascent+this.Am0.Descent))+2,((B=this.M)[2]-
B[0])-this.AqY,(((B=this.M)[3]-B[1])-(P*De))+2]);D4.L(this.A61);D4.S(this.Am0);D4.
A7(0x24);if(P>0)D4.R(this.AJc(A37));else D4.R(this.AJM());A37=A37+this.ET.OD[1];
this.J(D4,0);}},BFg:function(s){this.Wr(s);},Bl9:function(E){if(this.Am0===E)return;
this.Am0=E;this.An();},AyU:function(A0d){var B;if(!this.ET||(this.ET.Ga[3]===this.
ET.Ga[1]))return 0;return(((A0d-this.ET.Ga[1])*((B=this.M)[3]-B[1]))/(this.ET.Ga[
3]-this.ET.Ga[1]))|0;},AeF:function(E){if(this.ET===E)return;this.ET=E;if(!E)this.
DP.AeF(null);else{var BD=A._NewObject(A.acu.ABL,0);BD.Awn(this.ET.ADH);BD.X5();var
Jo=E.Alm;while(!!Jo){BD.ApY(this.BxJ(Jo.PW),this.BxK(Jo.PX));Jo=Jo.Ah;}this.DP.AeF(
BD);this.An();}},BxJ:function(BvW){var B;if(!this.ET||(this.ET.Ga[2]===this.ET.Ga[
0]))return 0;return((BvW-this.ET.Ga[0])*((B=this.M)[2]-B[0]))/(this.ET.Ga[2]-this.
ET.Ga[0]);},BxK:function(A0d){var B;if(!this.ET||(this.ET.Ga[3]===this.ET.Ga[1])
)return 0;return((A0d-this.ET.Ga[1])*((B=this.M)[3]-B[1]))/(this.ET.Ga[3]-this.ET.
Ga[1]);},AJc:function(Aow){return Aow.toFixed();},AJM:function(){return A.jV;},ASr:
function(E){if(this.Amt===E)return;this.Amt=E;this.DP.ASr(E);},ASq:function(E){if(
this.Aqi===E)return;this.Aqi=E;this.DP.ASq(E);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acu.DP._Init.call(this.DP={I:this},0);this.__proto__=C.DP;this.
H(AH6);this.A61=A.jb.Text;this.DP.A3(0x3F);this.DP.H(AH6);this.DP.Bmw(AZb);this.
DP.BkV(A.jb.ZF);this.DP.BlR(A.jb.Bc);this.DP.BmS(A.jb.ZF);this.J(this.DP,0);this.
Pp=A.aaL(A.acu.AB6);this.Am0=A.aaL(A.fl.Bk);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.DP._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.DP._ReInit();this.Bl9(A.aaL(A.fl.Bk));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Pp)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Am0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ET)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMs={AJc:function(Aow){return A._GetAutoObject(
A.Device.Converter).Axv(Aow,0);},AJM:function(){return A._GetAutoObject(A.acj.DS
).AfN();},_Init:function(aArg){C.DP._Init.call(this,aArg);this.__proto__=C.AMs;}
,_className:"Application::BodyWeightGraph"};C.OY={JB:null,Et:null,Ed:null,FP:null
,Iw:null,Ix:null,Init:function(aArg){this.ASp(null);},Wr:function(G){var B;var F;
C.DP.Wr.call(this,G);var AKg=0;var AK6=0;if(!!this.JB){AKg=this.AyU(A._GetAutoObject(
A.Device.Helper).ACB((F=this.JB,F[1].call(F[0]))));AK6=this.AyU(A._GetAutoObject(
A.Device.Helper).ACA((F=this.JB,F[1].call(F[0]))));}this.FP.H(A.abP(this.FP.M,0)
);this.FP.H([].concat(this.FP.M.slice(0,3),((B=this.M)[3]-B[1])-AK6));this.Iw.H(
A.abO(this.Iw.M,(this.FP.M[3]-((((B=this.Iw.M)[3]-B[1])/2)|0))-2));this.Ed.H(A.abP(
this.Ed.M,this.FP.M[3]));this.Ed.H([].concat(this.Ed.M.slice(0,3),((B=this.M)[3]-
B[1])-AKg));this.Ix.H(A.abO(this.Ix.M,(this.Ed.M[3]-((((B=this.Ix.M)[3]-B[1])/2)|
0))+2));this.Et.H(A.abP(this.Et.M,this.Ed.M[3]));this.Et.H([].concat(this.Et.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJc:function(Aow){return A._GetAutoObject(A.Device.Converter
).SW(Aow,0,true);},AJM:function(){return A._GetAutoObject(A.acj.DS).Aaf();},Ane:
function(E){if(A.aaZ(this.JB,E))return;if(!!this.JB)A.z$([this,this.Aiz],this.JB
,0);this.JB=E;if(!!E)A.zX([this,this.Aiz],E,0);if(!!E)A.pe([this,this.Aiz],this);
},Aiz:function(G){this.An();},_Init:function(aArg){C.DP._Init.call(this,aArg);A.
acg.AL._Init.call(this.Et={I:this},0);A.acg.AL._Init.call(this.Ed={I:this},0);A.
acg.AL._Init.call(this.FP={I:this},0);A.acg.AL._Init.call(this.Iw={I:this},0);A.
acg.AL._Init.call(this.Ix={I:this},0);this.__proto__=C.OY;this.Et.A3(0xD);this.Et.
H(ZV);this.Et.L(A.jb.F$);this.Ed.A3(0xD);this.Ed.H(UM);this.Ed.L(A.jb.H2);this.FP.
A3(0xD);this.FP.H(Acu);this.FP.L(A.jb.EV);this.Iw.A3(0xD);this.Iw.H(ZX);this.Iw.
Av3(A.jb.H2);this.Iw.Av4(A.jb.H2);this.Iw.Av6(A.jb.EV);this.Iw.Av5(A.jb.EV);this.
Ix.A3(0xD);this.Ix.H(WY);this.Ix.Av3(A.jb.F$);this.Ix.Av4(A.jb.F$);this.Ix.Av6(A.
jb.H2);this.Ix.Av5(A.jb.H2);this.J(this.Et,-1);this.J(this.Ed,-1);this.J(this.FP
,-1);this.J(this.Iw,-1);this.J(this.Ix,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DP;this.Et._Done();this.Ed._Done();this.FP._Done();this.Iw._Done();this.
Ix._Done();C.DP._Done.call(this);},_ReInit:function(){C.DP._ReInit.call(this);this.
Et._ReInit();this.Ed._ReInit();this.FP._ReInit();this.Iw._ReInit();this.Ix._ReInit(
);},_Mark:function(D){var B;C.DP._Mark.call(this,D);if((B=this.JB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Et)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Iw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.Aqy={EP:null,ET:null,R1:null,Ib:
null,Bc:null,Axd:A.jV,DH:A.jV,AOs:null,Init:function(aArg){},Bj:function(aSize){
A.Core.O.Bj.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R1.
H([30,0,aSize[0]-2,30]);this.Ib.H(this.R1.M);if(!!this.EP)this.EP.H([30,this.R1.
M[3],aSize[0],this.Bc.M[1]]);},Ahe:function(E){if(this.Axd===E)return;this.Axd=E;
this.Ib.R(E);},T:function(E){if(this.DH===E)return;this.DH=E;this.R1.R(E);},AEJ:
function(E){if(this.AOs===E)return;this.AOs=E;this.Bn6(this);},Bn6:function(G){var
B;if(!!this.EP)this.HJ(this.EP);this.EP=(C.DP.isPrototypeOf(B=A._NewObject(this.
AOs,0))?B:null);if(!!this.EP){this.EP.H(AZc);this.EP.AeF(this.ET);this.J(this.EP
,0);}},AeF:function(E){if(this.ET===E)return;this.ET=E;if(!!this.EP)this.EP.AeF(
E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.
R1={I:this},0);A.acg.Text._Init.call(this.Ib={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.Aqy;this.H(Acy);this.Ar(false);this.R1.H(AZd);this.
R1.A7(0x11);this.R1.R(Lt);this.R1.L(A.jb.Text);this.Ib.A7(0x14);this.Ib.R(A.jV);
this.Ib.L(A.jb.Text);this.Bc.H(AZe);this.Bc.L(A.jb.Bc);this.J(this.R1,0);this.J(
this.Ib,0);this.J(this.Bc,0);this.R1.S(A.aaL(A.fl.Ak));this.Ib.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.R1._Done();this.
Ib._Done();this.Bc._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.R1._ReInit();this.Ib._ReInit();this.Bc._ReInit();this.
R1.S(A.aaL(A.fl.Ak));this.Ib.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.EP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AL3={Agk:null,GZ:function(E
){var F;C.FW.GZ.call(this,E);if(!!this.Agk)(F=this.Agk,F[2].call(F[0],E));},A9c:
function(E){if(A.aaZ(this.Agk,E))return;if(!!this.Agk)A.z$([this,this.A2t],this.
Agk,0);this.Agk=E;if(!!E)A.zX([this,this.A2t],E,0);if(!!E)A.pe([this,this.A2t],this
);},A2t:function(G){var F;if(!this.Agk)return;(F=this.Agk,F[2].call(F[0],this.FE(
)));},_Init:function(aArg){C.FW._Init.call(this,aArg);this.__proto__=C.AL3;},_Mark:
function(D){var B;C.FW._Mark.call(this,D);if((B=this.Agk)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.ATI={Q_:null
,PT:null,XJ:null,XK:null,Mr:0,CS:function(){this.An();},Bj:function(aSize){var B;
A.Core.O.Bj.call(this,aSize);this.Q_.H(A.abI(this.Q_.M,(((B=this.M)[3]-B[1])/2)|
0));this.PT.H(A.abI(this.PT.M,(((B=this.M)[3]-B[1])/2)|0));this.Q_.H(A.abO(this.
Q_.M,(((B=this.M)[3]-B[1])/2)|0));this.PT.H(A.abO(this.PT.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Q_.R(A._GetAutoObject(
A.Device.Helper).Ne(A.aaR(A.acf.Bjj),P3,this.Mr.toFixed()));},AbS:function(E){if(
this.Mr===E)return;this.Mr=E;this.BAI(this);},BAI:function(G){var B;var AJk=(((B=
this.M)[2]-B[0])/this.Mr)|0;this.XJ.H(A.abM(this.XJ.M,(((B=this.M)[2]-B[0])-(this.
Mr*AJk))+(((AJk/2)-(((B=this.XJ.M)[2]-B[0])/2))|0)));this.XK.H(A.abM(this.XK.M,(((
B=this.M)[2]-B[0])-AJk)+(((AJk/2)-(((B=this.XK.M)[2]-B[0])/2))|0)));this.An();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.Q_={
I:this},0);A.acg.Text._Init.call(this.PT={I:this},0);A.acg.Text._Init.call(this.
XJ={I:this},0);A.acg.Text._Init.call(this.XK={I:this},0);this.__proto__=C.ATI;this.
H(BF);this.Q_.H(AZf);this.Q_.Hq(5);this.Q_.A7(0x11);this.Q_.L(A.jb.Text);this.PT.
H(AZg);this.PT.Hq(5);this.PT.A7(0x14);this.PT.R(A.aaR(A.acf.Ahz));this.PT.L(A.jb.
Text);this.XJ.H(AZh);this.XJ.R(AH7);this.XJ.L(A.jb.Text);this.XK.H(AZi);this.XK.
R(AH7);this.XK.L(A.jb.Text);this.J(this.Q_,0);this.J(this.PT,0);this.J(this.XJ,0
);this.J(this.XK,0);this.Q_.S(A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));this.XJ.
S(A.aaL(A.fl.Hm));this.XK.S(A.aaL(A.fl.Hm));},_Done:function(){this.__proto__=A.
Core.O;this.Q_._Done();this.PT._Done();this.XJ._Done();this.XK._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Q_._ReInit(
);this.PT._ReInit();this.XJ._ReInit();this.XK._ReInit();this.PT.R(A.aaR(A.acf.Ahz
));this.Q_.S(A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));this.CS();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q_)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K7={VN:null,Ajv:null,KI:A.jV,Mr:0,Aaj:false,Init:function(aArg){var A1b=A._NewObject(
C.J_,0);var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).W.RF()<A1b.
C7(P))A1b.Am6=P+1;this.VN.CJ(A1b);},Ai:function(Ae){C.D5.Ai.call(this,Ae);this.Ajv.
Y(this.Aaj);if(this.Aaj)this.Bb(null);else this.Bb(this.VN);},CA:function(G){var
B;var F;C.D5.CA.call(this,G);if(!(F=this.VN.Q,F[1].call(F[0])))(F=this.VN.Q,F[2].
call(F[0],this.VN.AC.C7(0)));A.zX([this,this.AIu],[B=A._GetAutoObject(A.Device.Helper
),B.UP,B.UQ],0);A.zV([this,this.AIu],A._GetAutoObject(A.Device.Device).Bu,0);A.zX([
this,this.AlS],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId],0);A.pe([this
,this.AlS],this);},EX:function(G){var B;A.z$([this,this.AIu],[B=A._GetAutoObject(
A.Device.Helper),B.UP,B.UQ],0);A.z9([this,this.AIu],A._GetAutoObject(A.Device.Device
).Bu,0);A.z$([this,this.AlS],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId
],0);C.D5.EX.call(this,G);},Zb:function(E){if(A.aa0(this.AR,E))return;C.D5.Zb.call(
this,E);this.VN.AR=E;},AbS:function(E){if(this.Mr===E)return;this.Mr=E;A.pe([this
,this.AlS],this);},Bvv:function(Aq){this.AbS(Aq);},AiJ:function(G){},AIu:function(
s){this.AiJ(s);},Dx:function(E){if(this.KI===E)return;this.KI=E;this.Ajv.R(E);},
AlS:function(G){var Fp=A._NewObject(A.Device.Filter,0);var Ay4=A._NewObject(A.Device.
UInt32FilterCriterion,0);Ay4.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).Ahz()-((this.Mr-1)*86400))-1,true);Fp.CV(Ay4);var HR=A._NewObject(A.Device.Int32FilterCriterion
,0);HR.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fp.CV(HR);A._GetAutoObject(
A.Device.Device).Bu.Bl(Fp);},Bkh:function(){return this.Mr;},_Init:function(aArg
){C.D5._Init.call(this,aArg);C.AT9._Init.call(this.VN={I:this},0);C.Akz._Init.call(
this.Ajv={I:this},0);this.__proto__=C.K7;this.VN.H(BF);this.Ajv.H(S1);this.J(this.
VN,0);this.J(this.Ajv,0);this.VN.As([this,this.Bkh,this.Bvv]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D5;this.VN._Done();this.Ajv._Done();C.D5._Done.
call(this);},_ReInit:function(){C.D5._ReInit.call(this);this.VN._ReInit();this.Ajv.
_ReInit();},_Mark:function(D){var B;C.D5._Mark.call(this,D);if((B=this.VN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AM_={VV:null,Yy:null,RatingMode:null,PA:null,_Init:
function(aArg){C.Ct._Init.call(this,aArg);C.NT._Init.call(this.VV={I:this},0);C.
BZ._Init.call(this.Yy={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.I1._Init.call(this.PA={I:this},0);this.__proto__=C.AM_;var B;this.Ha.R(A.
aaR(A.acf.ABV));this.JK(A.aaR(A.acf.A5n));this.VV.H(AsO);this.VV.Aj(true);this.VV.
T(A.aaR(A.acf.Asn));this.VV.Bi(true);this.VV.NW(23);this.Yy.H(AZj);this.Yy.Aj(true
);this.Yy.T(A.aaR(A.acf.A_y));this.Yy.Bi(false);this.PA.H(AZk);this.PA.Aj(true);
this.PA.T(A.aaR(A.acf.A5k));this.PA.Bi(true);this.PA.Gp(3);this.PA.E4(14);this.PA.
Kk(A.aaR(A.acf.J_)+AsP);this.PA.KO(A.aaR(A.acf.GD)+AsP);this.J(this.VV,0);this.J(
this.Yy,0);this.J(this.PA,0);this.VV.AR=[B=this.VV,B.NZ];this.Yy.As([B=this.RatingMode
,B.B$,B.Ca]);this.Yy.CJ(this.RatingMode);this.PA.As([B=A._GetAutoObject(A.Device.
Device),B.A8g,B.BaE]);},_Done:function(){this.__proto__=C.Ct;this.VV._Done();this.
Yy._Done();this.RatingMode._Done();this.PA._Done();C.Ct._Done.call(this);},_ReInit:
function(){C.Ct._ReInit.call(this);this.VV._ReInit();this.Yy._ReInit();this.RatingMode.
_ReInit();this.PA._ReInit();this.Ha.R(A.aaR(A.acf.ABV));this.JK(A.aaR(A.acf.A5n)
);this.VV.T(A.aaR(A.acf.Asn));this.Yy.T(A.aaR(A.acf.A_y));this.PA.T(A.aaR(A.acf.
A5k));this.PA.Kk(A.aaR(A.acf.J_)+AsP);this.PA.KO(A.aaR(A.acf.GD)+AsP);},_Mark:function(
D){var B;C.Ct._Mark.call(this,D);if((B=this.VV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.AuG={Init:function(aArg){this.V.Text.A7(0x11);this.V.Text.Hq(10);},Ai:function(
Ae){var B;C.Cl.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);var Fn=((Ae&0x20)===0x20
);var Gw=this.Bo.By;var FJ=A.jb.AdS;var GL=A.jb.Bm;if(this.Hc){FJ=A.jb.Bm;GL=A.jb.
Text;}if(!G8){this.Background.L(FJ);this.V.L(A.jb.CI);}else if(Gw){this.Background.
L(A.jb.AW);this.V.L(A.jb.Bm);}else if(Fn){this.Background.L(A.jb.AW);this.V.L(A.
jb.Bm);}else{this.Background.L(FJ);this.V.L(GL);}this.LD=G8;this.KA=Fn;this.Qk=Gw;
},_Init:function(aArg){C.Cl._Init.call(this,aArg);this.__proto__=C.AuG;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cl._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ACJ={Am:null,Init:
function(aArg){var B;A.zX([this,this.D2],[B=A._GetAutoObject(A.Device.Helper).W,
B.PL,B.Ew],0);A.pe([this,this.D2],this);},Dc:function(E){C.BR.Dc.call(this,E);this.
Am.L(E);},D2:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Am.Ax(A.aaL(A.ach.ACG));break;case 1:this.Am.Ax(A.aaL(A.ach.AOP));break;
case 2:this.Am.Ax(A.aaL(A.ach.AOR));break;default:A.ab5("%s%e",Ax8,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.ACJ;this.Am.H(AsQ);this.
J(this.Am,0);this.Am.Ax(A.aaL(A.ach.ACG));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Am._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ACK={Am:null,Init:function(aArg){var B;A.zX([this,this.D2],[B=A._GetAutoObject(
A.Device.Helper).W,B.PL,B.Ew],0);A.pe([this,this.D2],this);},Dc:function(E){C.BR.
Dc.call(this,E);this.Am.L(E);},D2:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Am.Ax(A.aaL(A.ach.ACH));break;case 1:this.Am.Ax(A.aaL(
A.ach.AOQ));break;case 2:this.Am.Ax(A.aaL(A.ach.AOS));break;default:A.ab5("%s%e"
,Ax8,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.ACK;
this.Am.H(AsQ);this.J(this.Am,0);this.Am.Ax(A.aaL(A.ach.ACH));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Am._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fq={BT:null,Axq:A.jV,Dc:function(E){C.Jz.Dc.call(
this,E);this.BT.L(E);},Kl:function(E){if(this.Axq===E)return;this.Axq=E;this.BT.
R(E);},_Init:function(aArg){C.Jz._Init.call(this,aArg);C.CG._Init.call(this.BT={
I:this},0);this.__proto__=C.Fq;this.BT.A3(0x34);this.BT.H(Ax2);this.BT.A7(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cs(A.aaL(A.fl.Bk));},_Done:function(){this.__proto__=C.Jz;this.
BT._Done();C.Jz._Done.call(this);},_ReInit:function(){C.Jz._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cs(A.aaL(
A.fl.Bk));},_Mark:function(D){var B;C.Jz._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOa={Wi:function(G){var B;this.Age();this.ALD(A.aaR(A.acf.Bis),[this,this.Bm4],[
B=A._GetAutoObject(A.Device.Device),B.A8h,B.BaF]);A._GetAutoObject(C.BN).Fz();this.
IQ(A.aaR(A.acf.AUK),[this,this.AS9],5);this.IQ(A.aaR(A.acf.AUI),[this,this.AS8],
7);this.IQ(A.aaR(A.acf.AnJ),[this,this.Awq],2);this.IQ(A.aaR(A.acf.XB),[this,this.
AEm],1);this.IQ(A.aaR(A.acf.Aua),[this,this.AEg],0);A._GetAutoObject(C.BN).Fz();
A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.Al5)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Dz:function(G){},Aba:function(){return C.ABx;},Abb:function(
){return C.ACR;},Q3:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).A6n());},HK:function(G){C.GP.HK.call(this,G);if(this.Aj3()===false
){this.N.Cp(A.aaL(A.ach.Abl));this.N.Cj=[this,this.A5P];this.N.FG(A.jV);}this.N.
OM(false);this.N.ON(false);},Af1:function(){A._GetAutoObject(C.A1).BU(48);},Af0:
function(){A._GetAutoObject(C.A1).BU(49);},Bm4:function(G){A._GetAutoObject(A.Device.
Device).Awf(!A._GetAutoObject(A.Device.Device).Aqu);this.AnR(this);},AnR:function(
G){var Be=A._GetAutoObject(A.Device.Device).Ao.Filter.Fc();var Au=Be.DN(30,3);if(
!!Au)Be.N3(Au);if(A._GetAutoObject(A.Device.Device).Aqu){var AzK=A._NewObject(A.
Device.UInt32FilterCriterion,0);var A13=A._GetAutoObject(A.Device.Helper).Dw()-21600;
AzK.Initialize(30,3,A13,true);Be.CV(AzK);}A._GetAutoObject(A.Device.Device).Ao.Bl(
Be);},_Init:function(aArg){C.GP._Init.call(this,aArg);this.__proto__=C.AOa;var B;
this.Dn(C.AOL);this.Dx(A.aaR(A.acf.A7G));this.Awk([B=A._GetAutoObject(A.Device.Device
),B.A8f,B.BaD]);},_ReInit:function(){C.GP._ReInit.call(this);this.Dx(A.aaR(A.acf.
A7G));},_className:"Application::FreshCowListScreen"};C.AN$={_Init:function(aArg
){C.IS._Init.call(this,aArg);this.__proto__=C.AN$;this.Lb.Ar(false);this.Lb.Aj(false
);this.Lb.Y(false);this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false);},_className:
"Application::FreshCowListFilterScreen"};C.AN_={_Init:function(aArg){C.GB._Init.
call(this,aArg);this.__proto__=C.AN_;this.N.B2(A.aaR(A.acf.A4O));},_ReInit:function(
){C.GB._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4O));},_className:"Application::FreshCowListActionsScreen"
};C.AOL={D2:function(G){C.Kc.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.
Converter).AdF(7));},_Init:function(aArg){C.Kc._Init.call(this,aArg);this.__proto__=
C.AOL;},_className:"Application::HeaderFreshCowListFilter"};C.ACR={Jl:null,DW:null
,_Init:function(aArg){C.Da._Init.call(this,aArg);C.CG._Init.call(this.Jl={I:this
},0);C.CG._Init.call(this.DW={I:this},0);this.__proto__=C.ACR;this.A9r(1);this.Jl.
H(BpU);this.Jl.R((A.aaR(A.acf.Calving)+Z1)+A.aaR(A.acf.A__));this.Jl.L(A.jb.Text
);this.DW.H(BpV);this.DW.R(A.aaR(A.acf.ADz));this.DW.L(A.jb.Text);this.J(this.Jl
,0);this.J(this.DW,0);this.Jl.S(A.aaL(A.fl.Ak));this.Jl.A2(A.aaL(A.fl.Bk));this.
DW.S(A.aaL(A.fl.Ak));this.DW.A2(A.aaL(A.fl.Bk));},_Done:function(){this.__proto__=
C.Da;this.Jl._Done();this.DW._Done();C.Da._Done.call(this);},_ReInit:function(){
C.Da._ReInit.call(this);this.Jl._ReInit();this.DW._ReInit();this.Jl.R((A.aaR(A.acf.
Calving)+Z1)+A.aaR(A.acf.A__));this.DW.R(A.aaR(A.acf.ADz));this.Jl.S(A.aaL(A.fl.
Ak));this.Jl.A2(A.aaL(A.fl.Bk));this.DW.S(A.aaL(A.fl.Ak));this.DW.A2(A.aaL(A.fl.
Bk));},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.Jl)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.DW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABx={AGq:null,KL:null,Uv:null,AP:null,A$:null,Init:function(aArg){},Bj:function(
aSize){C.Ba.Bj.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.Uv.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A$.H([this.Uv.M[2]-1,0,this.Uv.M[2]+1,aSize[1]]);this.KL.H([this.Uv.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KL.L(this.V.AQ);this.
Uv.Dc(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){var
Ky=this.AX.CE(Ad,0);var Ma=this.AX.CE(Ad,1);var A12=this.AX.CE(Ad,29);var Ale=this.
AX.HB(Ad,28);this.T(Ma.toFixed());this.KL.R(A12.toFixed());this.Uv.AbS(A._GetAutoObject(
A.Device.Device).Aqt+1);this.Uv.BmK(Ale);this.Uv.R(A._GetAutoObject(A.acj.KG).AjA(
Ale));A._GetAutoObject(A.Device.Device).SB(Ad);this.ApN(Ky);this.AwY();A._GetAutoObject(
A.Device.Device).Bu.Bl(null);this.An();}},A3W:function(G){this.Uv.AbU(this.AGq);
},AwY:function(){var F0=A._GetAutoObject(A.Device.Device).Bu.Cd();this.AGq=A._NewObject(
C.Ajg,0);if(F0>0){var P=F0-1;while(P>=0){var D4=A._GetAutoObject(A.Device.Device
).Bu.HB(P,6);this.As7(this.AGq,P,9,D4);P=P-1;}}A.pe([this,this.A3W],this);},As7:
function(A0y,Ad,A0x,P9){var Ak_=A._GetAutoObject(A.Device.Device).Bu.IU(Ad,A0x);
if(!!Ak_)A0y.Ot(Ak_,P9);},ApN:function(AcP){var Fp=A._NewObject(A.Device.Filter,
0);var Ay4=A._NewObject(A.Device.UInt32FilterCriterion,0);Ay4.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).Zw(A._GetAutoObject(A.Device.Device).Aqt)-1,true);Fp.CV(Ay4);var
HR=A._NewObject(A.Device.Int32FilterCriterion,0);HR.Initialize(1,0,AcP,true);Fp.
CV(HR);A._GetAutoObject(A.Device.Device).Bu.Bl(Fp);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KL={I:this},0);C.ATD._Init.call(this.
Uv={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);this.__proto__=C.ABx;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(
this.KL,0);this.J(this.Uv,0);this.J(this.AP,0);this.J(this.A$,0);this.KL.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KL._Done();
this.Uv._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KL._ReInit();this.Uv._ReInit();this.AP._ReInit(
);this.A$._ReInit();this.KL.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.ATD={AUl:0,Init:function(aArg
){},AOh:function(){return A._GetAutoObject(A.Device.Helper).Ap5(this.AUl);},AOj:
function(){return this.AOh()+(this.Mr*86400);},BmK:function(E){if(this.AUl===E)return;
this.AUl=E;A.pe([this,this.Wr],this);},_Init:function(aArg){C.Ahk._Init.call(this
,aArg);this.__proto__=C.ATD;this.Bc.H(BpW);this.BmH(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dr:function(){if(this.K&&this.K.Dr)return this.K.Dr.apply(this,arguments);else
return C.FactoryResetScope.Btv.apply(this,arguments);},Btv:function(){return 2;}
,Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BS(this.C7(aIndex));},_Init:function(aArg){C.CQ._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cq.Set(0,0);this.Cq.Set(1,1);var Lu=this._variants();if(Lu){this.K={};Lu._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.CQ;this.FactoryResetScopeToString._Done();C.CQ._Done.call(this);},_ReInit:function(
){C.CQ._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acr.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={BfQ:false,Init:function(
aArg){this.BfQ=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Er:function(
G){if(this.Bc8){A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.
Device).Ao);if(this.BfQ)A._GetAutoObject(A.Device.Device).A_(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A_(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Er.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ARD={Wi:function(G){this.Age();A._GetAutoObject(C.BN).Qt(A.aaR(A.acf.Settings
),[this,this.A23]);A._GetAutoObject(C.BN).Fz();this.ALB();A._GetAutoObject(C.BN).
Nx(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.
BN).Nx(A.aaR(A.acf.ANc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},Dz:function(G){},Aba:function(){return C.Amg;},Abb:function(){return C.AmI;
},Q3:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.
Helper).ACt());},HK:function(G){C.RD.HK.call(this,G);if(this.Aj3()===false){this.
N.Cp(A.aaL(A.ach.Au9));this.N.Cj=[this,this.ANr];this.N.FG(A.jV);}this.N.OM(false
);this.N.ON(false);},Af1:function(){A._GetAutoObject(C.A1).BU(52);},Af0:function(
){A._GetAutoObject(C.A1).BU(53);},A23:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);A._GetAutoObject(C.A1).BU(101);},_Init:function(aArg){C.RD._Init.call(this
,aArg);this.__proto__=C.ARD;this.Dn(C.ACL);this.Dx(A.aaR(A.acf.A7C));this.ASF(A.
_GetAutoObject(C.AvD));},_ReInit:function(){C.RD._ReInit.call(this);this.Dx(A.aaR(
A.acf.A7C));},_className:"Application::NoTransponderListScreen"};C.ARC={_Init:function(
aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ARC;this.KT.Ar(false);this.KT.
Aj(false);this.KT.Y(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ARB={_Init:function(aArg){C.GB._Init.call(this,aArg);this.__proto__=C.ARB;this.
N.B2(A.aaR(A.acf.A4U));},_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A4U));},_className:"Application::NoTransponderListActionsScreen"};C.ACL={
D2:function(G){C.Kc.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter
).AdF(8));},_Init:function(aArg){C.Kc._Init.call(this,aArg);this.__proto__=C.ACL;
},_className:"Application::HeaderNoTransponderListFilter"};C.ABe={Aur:null,Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Aur.BS(aIndex);},_Init:
function(aArg){C.FX._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Aur={I:this},0);this.__proto__=C.ABe;},_Done:function(){this.__proto__=
C.FX;this.Aur._Done();C.FX._Done.call(this);},_ReInit:function(){C.FX._ReInit.call(
this);this.Aur._ReInit();},_Mark:function(D){var B;C.FX._Mark.call(this,D);if((B=
this.Aur)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALw={Cl:null,AdI:null,Init:function(aArg){this.Bb(this.Cl);},KN:function(){if(
!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.Cz=[this,this.Xn];this.Bz.Cj=null;
this.Bz.Cf=[this,this.A2E];this.Bz.B2(A.jV);this.Bz.Cp(null);this.Bz.CY(A.aaL(A.
ach.Aee));}return this.Bz;},Az0:function(G){var Aa=(C.Ai9.isPrototypeOf(G)?G:null
);if(Aa===this.Cl)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdI)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$C);},_Init:function(aArg){C.Fj._Init.call(this,aArg);C.Ai9._Init.call(this.
Cl={I:this},0);C.Ai9._Init.call(this.AdI={I:this},0);this.__proto__=C.ALw;this.H(
Rf);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cl.H(JS);this.Cl.T(A.aaR(A.acf.
ADL));this.AdI.H(P4);this.AdI.T(A.aaR(A.acf.To));this.J(this.Cl,0);this.J(this.AdI
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cl.AR=[this,this.Az0];this.AdI.AR=[this,this.
Az0];this.Init(aArg);},_Done:function(){this.__proto__=C.Fj;this.Cl._Done();this.
AdI._Done();C.Fj._Done.call(this);},_ReInit:function(){C.Fj._ReInit.call(this);this.
Cl._ReInit();this.AdI._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cl.
T(A.aaR(A.acf.ADL));this.AdI.T(A.aaR(A.acf.To));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fj._Mark.call(this,D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BEF={Undefined:0,BED:1,BEE:2,IdScanned:3,BDC:4,BCD:5,BDm:6};C.ALL={A_U:function(
){A._GetAutoObject(A.Device.Device).A_(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeB]);},_Init:function(aArg){C.Auh._Init.call(
this,aArg);this.__proto__=C.ALL;this.FX.As(1);this.ASL(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Ad_={VD:null,VE:null,VF:null,AgK:null,AgL:null,AgM:null,Cz:null,Cj:null,Cf:null
,AnK:A.jV,AnL:A.jV,AnM:A.jV,AqI:0,AqJ:0,AqK:0,Ag4:0,Zk:false,Zj:false,ArW:false,
Ar_:false,Ar9:false,Ajm:function(E8){this.Cz=E8.Cz;this.Cj=E8.Cj;this.Cf=E8.Cf;this.
AnK=E8.AnK;this.AnL=E8.AnL;this.AnM=E8.AnM;this.Ag4=E8.Ag4;this.VD=E8.VD;this.VE=
E8.VE;this.VF=E8.VF;this.AgK=E8.AgK;this.AgL=E8.AgL;this.AgM=E8.AgM;this.Ar9=E8.
Ar9;this.Ar_=E8.Ar_;this.ArW=E8.ArW;this.Zj=E8.Zj;this.Zk=E8.Zk;this.AqI=E8.AqI;
this.AqJ=E8.AqJ;this.AqK=E8.AqK;},Aky:function(E8){E8.Cz=this.Cz;E8.Cj=this.Cj;E8.
Cf=this.Cf;E8.Hr(this.AnK);E8.FG(this.AnL);E8.B2(this.AnM);E8.AEP(this.Ag4);E8.AEG(
this.VD);E8.Aro(this.VE);E8.Anh(this.VF);E8.CY(this.AgK);E8.Cp(this.AgL);E8.C5(this.
AgM);E8.OM(this.Ar9);E8.ON(this.Ar_);E8.ArW=this.ArW;E8.Zj=this.Zj;E8.Zk=this.Zk;
E8.BlT(this.AqI);E8.ASz(this.AqJ);E8.A9C(this.AqK);},_Init:function(aArg){this.__proto__=
C.Ad_;this.VD=A.aaL(A.fl.Ak);this.VE=A.aaL(A.fl.Ak);this.VF=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VD=A.aaL(
A.fl.Ak);this.VE=A.aaL(A.fl.Ak);this.VF=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VE)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgL)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cz)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cj)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Ar6._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dn(C.ACJ);},_className:"Application::NewAnimalSetTransponderScreen"};C.C6={AaV:null
,CountryToString:null,Dr:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lr(aIndex);},DO:function(A6){return A6;
},Hn:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
AaV)(F=this.AaV,F[2].call(F[0],E));},A06:function(G){var F;if(!!this.AaV)this.Q=(
F=this.AaV,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Ca],0);},AEx:
function(E){if(A.aaZ(this.AaV,E))return;if(!!this.AaV)A.z$([this,this.A06],this.
AaV,0);this.AaV=E;if(!!this.AaV)A.zX([this,this.A06],this.AaV,0);A.pe([this,this.
A06],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AaV)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OX={AC:null,Q:null,Background:null,Ii:null,Ih:null,MZ:
0,AM:0,Gg:0,FV:0,AfX:function(G){this.J2(this);},Bj:function(aSize){A.Core.O.Bj.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(Ir){this.Background.
L(A.jb.AW);this.Do(256);}else{this.Background.L(this.MZ);this.Do(256);}},AfW:function(
G){this.JX(this);},CJ:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A21],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A21],E,0);if(!!E)A.pe([this
,this.A21],this);},CX:function(E){if(this.MZ===E)return;this.MZ=E;this.An();},J2:
function(G){var F;var BQ=this.AM;this.BC(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},JX:function(
G){var F;var BQ=this.AM;this.BC(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},BC:function(
E){if(E<this.Gg)E=this.FV;if(E>this.FV)E=this.Gg;if(this.AM===E)return;this.AM=E;
this.An();},Gp:function(E){if(this.Gg===E)return;this.Gg=E;this.An();},E4:function(
E){if(this.FV===E)return;this.FV=E;this.An();},C3:function(G){var F;if(!!this.Q)
this.BC(this.AC.DO((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},A21:function(G){var F;if(!!this.
AC){this.Gp(0);this.E4(this.AC.Hn());if(!!this.Q)this.BC(this.AC.DO((F=this.Q,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BL._Init.call(this.Ii={
I:this},0);A.Core.BL._Init.call(this.Ih={I:this},0);this.__proto__=C.OX;this.H(A$D
);this.Background.H(AsR);this.Ii.Filter=4;this.Ih.Filter=5;this.MZ=A.jb.CI;this.
J(this.Background,0);this.Ii.BM=[this,this.AfX];this.Ii.DX=[this,this.AfX];this.
Ih.BM=[this,this.AfW];this.Ih.DX=[this,this.AfW];},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Ii._Done();this.Ih._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);this.Ii._ReInit();this.Ih._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RK={A0Y:A.jV,Ai:function(
Ae){C.Fq.Ai.call(this,Ae);this.T(A.aaR(A.acf.A48));this.Kl(this.A0Y);},Ce:function(
G){C.Fq.Ce.call(this,G);var Ale=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Ale)this.A0Y=WZ;else this.A0Y=A._GetAutoObject(A.acj.KG).AjA(Ale);this.An();
},_Init:function(aArg){C.Fq._Init.call(this,aArg);this.__proto__=C.RK;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RL={A11:0,Ai:function(Ae){C.Fq.Ai.call(
this,Ae);this.T(A.aaR(A.acf.AQS));if(this.A11>0)this.Kl(this.A11.toFixed());else
this.Kl(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fq.Ce.call(this,G);this.A11=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.An();},_Init:function(aArg){C.Fq._Init.call(
this,aArg);this.__proto__=C.RL;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dr:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akg(E);},A1n:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Ca],0);},LV:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1n],[B=this.Animal,B.ARW,B.Akg],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1n],[B=this.Animal,B.ARW,B.Akg],0);A.pe([this,this.A1n],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dr:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BS(aIndex);},DO:function(A6){return A6;
},Hn:function(){return 98;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal
)this.Animal.NU(E);},A0W:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Ca],0);},LV:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0W],[B=this.Animal,B.AvH,B.NU],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0W],[B=this.Animal,B.AvH,B.NU],0);A.pe([
this,this.A0W],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARa={VQ:null,Yw:null,Aeq:null,Init:function(
aArg){this.Bb(this.VQ);},Add:function(G){var Aa=(C.Cl.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yw)this.Bxd();else if(Aa===this.VQ)this.BzX(this);else throw new
Error(AxK);A._GetAutoObject(A.Device.Device).Ds(0);},BzX:function(G){var B;var F;
var U9=(C.Al9.isPrototypeOf(B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null
);if(!U9){A.ab5("%s",BpX);return;}U9.AJ8(this);},Bxd:function(){A._GetAutoObject(
A.Device.Helper).W.AF_(true);A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mj._Init.call(this.VQ={I:this},0);C.Mj._Init.call(this.Yw={
I:this},0);C.Vy._Init.call(this.Aeq={I:this},0);this.__proto__=C.ARa;var B;this.
H(Acy);this.VQ.H(P4);this.VQ.Ar(true);this.VQ.T(A.aaR(A.acf.A_A));this.VQ.Bi(true
);this.Yw.H(JS);this.Yw.Ar(true);this.Yw.T(A.aaR(A.acf.A4l));this.Yw.Bi(true);this.
Aeq.H(BF);this.Aeq.T(A.aaR(A.acf.ACi));this.Aeq.Bi(true);this.J(this.VQ,0);this.
J(this.Yw,0);this.J(this.Aeq,0);this.VQ.AR=[this,this.Add];this.Yw.AR=[this,this.
Add];this.Aeq.ASo([B=A._GetAutoObject(A.Device.Device),B.Aq8,B.AsT]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.VQ._Done();this.Yw._Done(
);this.Aeq._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.VQ._ReInit();this.Yw._ReInit();this.Aeq._ReInit();this.VQ.
T(A.aaR(A.acf.A_A));this.Yw.T(A.aaR(A.acf.A4l));this.Aeq.T(A.aaR(A.acf.ACi));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.Vy={
Ai:function(Ae){C.T5.Ai.call(this,Ae);var FJ=A.jb.CI;var GL=A.jb.Text;if(this.Hc
){FJ=A.jb.Text;GL=A.jb.Bm;}if(!this.LD){this.Background.L(FJ);this.V.L(A.jb.AmN);
}else if(this.Qk){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else if(this.KA){
this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.L(FJ);this.V.
L(GL);}if(this.Ami){this.Mh.Cx(1);this.Mh.L(A.jb.H2);}else{this.Mh.Cx(0);this.Mh.
L(A.jb.Bm);}},_Init:function(aArg){C.T5._Init.call(this,aArg);this.__proto__=C.Vy;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.ADK={C8:null,A0:null,AF:
null,Aj4:null,QP:null,EH:null,ARs:Lt,Bj:function(aSize){C.Cl.Bj.call(this,aSize);
var FJ=A.jb.CI;var GL=A.jb.Text;if(this.Hc){FJ=A.jb.Bm;GL=A.jb.Text;}this.Background.
L(FJ);this.V.L(GL);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CP;C.Cl.Ai.call(this
,Ae);this.Aj4.L(this.V.AQ);this.QP.L(this.V.AQ);this.QP.R(BpY);this.T(((this.ARs+
A.aaR(A.acf.Colon))+CO)+A._GetAutoObject(A.Device.Helper).AnO(840003123456789).toFixed(
));if(!!this.A0&&!!this.AF){var A16=this.QP.AeY([(this.QP.String.length-(F=this.
AF,F[1].call(F[0])))-(CP=this.A0,CP[1].call(CP[0])),0]);var A3p=this.QP.AeY([this.
QP.String.length-(F=this.AF,F[1].call(F[0])),0]);var AAL=this.QP.Df();this.EH.H([
A16[0]-1,AAL[1],A3p[0]+1,AAL[3]]);}else this.EH.H(this.QP.Df());},DD:function(E){
if(this.C8===E)return;this.C8=E;this.Aj4.Ax(E);},PM:function(E){if(A.aaZ(this.A0
,E))return;if(!!this.A0)A.z$([this,this.Aap],this.A0,0);this.A0=E;if(!!E)A.zX([this
,this.Aap],E,0);if(!!E)A.pe([this,this.Aap],this);},QY:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.Aaq],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.Aaq],E,0);if(!!E)A.pe([this,this.Aaq],this);},Aaq:function(G){this.An(
);},Aap:function(G){this.An();},AE5:function(E){if(this.ARs===E)return;this.ARs=
E;this.An();},_Init:function(aArg){C.Cl._Init.call(this,aArg);A.acg.Am._Init.call(
this.Aj4={I:this},0);A.acg.Text._Init.call(this.QP={I:this},0);A.acg.CC._Init.call(
this.EH={I:this},0);this.__proto__=C.ADK;this.H(JR);this.V.A7(0x11);this.Aj4.H(Rd
);this.QP.H(BpZ);this.EH.H(Bp0);this.EH.NY(2);this.EH.L(A.jb.EV);this.J(this.Aj4
,0);this.J(this.QP,0);this.J(this.EH,0);this.QP.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cl;this.Aj4._Done();this.QP._Done();this.EH._Done();C.Cl._Done.
call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.Aj4._ReInit();this.
QP._ReInit();this.EH._ReInit();this.QP.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cl._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EH)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATx:0,Init:
function(aArg){var B;A.zX([this,this.BdY],[B=A._GetAutoObject(A.Device.Device),B.
AD2,B.AIe],0);A.pe([this,this.BdY],this);},HK:function(G){C.Ts.HK.call(this,G);if(
this.AjE)this.N.Cp(A.aaL(A.ach.AD));else this.N.Cp(A.aaL(A.ach.AMM));this.N.C5(A.
aaL(A.ach.Options));this.N.FG(A.jV);this.N.B2(A.jV);this.N.Cj=[this,this.A_j];this.
N.Cf=[this,this.Wi];this.N.Aro(A.aaL(A.fl.Ak));this.N.Anh(A.aaL(A.fl.Ak));},MU:function(
G){this.Beh(this);},On:function(G){this.BzS(this);},Agd:function(AcQ,AcR,Bwh){A.
_GetAutoObject(C.BN).Auc(AcQ,AcR,[this,this.A8B,this.ASO],Bwh);},Wi:function(G){
if((A._GetAutoObject(A.Device.Device).D5===3)&&!this.AjE){A._GetAutoObject(C.BN).
Qt(A.aaR(A.acf.Bhd),[this,this.Bm0]);A._GetAutoObject(C.BN).Fz();}this.Agd(A.aaR(
A.acf.Rating),[this,this.ATc],3);this.Agd(A.aaR(A.acf.Afe),[this,this.ATe],2);this.
Agd(A.aaR(A.acf.Temperature),[this,this.ATd],1);this.Agd(A.aaR(A.acf.XB),[this,this.
ATb],0);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.A5E));
A._GetAutoObject(A.Device.Device).Ds(6);},ASO:function(E){if(this.ATx===E)return;
this.ATx=E;A.abo([this,this.A8B,this.ASO],0);},BdY:function(G){this.ASO(A._GetAutoObject(
A.Device.Device).D5);},A8B:function(){return this.ATx;},_Init:function(aArg){C.Ts.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vj:null
,Init:function(aArg){var B;A.zX([this,this.AfT],[B=A._GetAutoObject(A.Device.Device
).Ao,B.Fg,B.Fk],0);A.pe([this,this.BfU],this);A.pe([this,this.Q3],this);},CA:function(
G){C.Ts.CA.call(this,G);A.pe([this,this.Bf0],this);},AGe:function(G){C.Ts.AGe.call(
this,G);if(!!this.Ld)this.Ahn(this.Ld,this.Vj);},HK:function(G){C.Ts.HK.call(this
,G);this.N.Cp(A.aaL(A.ach.AQq));this.N.C5(A.aaL(A.ach.AQr));if(this.AjE)this.N.ASz(
0);else this.N.ASz(1);this.N.A9C(A._GetAutoObject(A.Device.Converter).Bgo(A._GetAutoObject(
A.Device.Device).D5));this.N.FG(A.jV);this.N.B2(A.jV);this.N.Cj=[this,this.BkL];
this.N.Cf=[this,this.Bm2];this.N.Aro(A.aaL(A.fl.Ak));this.N.Anh(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Ao.QB()){this.N.IW.Do(100);this.N.Cj=null;
}else this.N.IW.Do(255);if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){this.N.Lc.
Do(100);this.N.Cf=null;}else this.N.Lc.Do(255);if(A._GetAutoObject(A.Device.Device
).Ao.Cd()<=1){this.N.TR.Do(100);this.N.TS.Do(100);}else{this.N.TR.Do(255);this.N.
TS.Do(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).Ao.Cd()<=1)return;
var Lz=A._GetAutoObject(A.Device.Helper).W.CK;Lz=Lz+1;if(Lz>=A._GetAutoObject(A.
Device.Device).Ao.Cd())Lz=0;A._GetAutoObject(A.Device.Helper).HH(Lz);},On:function(
G){if(A._GetAutoObject(A.Device.Device).Ao.Cd()<=1)return;var Lz=A._GetAutoObject(
A.Device.Helper).W.CK;Lz=Lz-1;if(Lz<0)Lz=A._GetAutoObject(A.Device.Device).Ao.Cd(
)-1;A._GetAutoObject(A.Device.Helper).HH(Lz);},Aiy:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A1).BU(57);},BkL:function(G){A._GetAutoObject(
A.Device.Device).Ds(10);},Bm2:function(G){this.Beh(this);},Q3:function(G){A._GetAutoObject(
A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).Mm());A.pe([this,this.Bf0
],this);},BfU:function(G){if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){this.Vj.
Y(true);if(!A._GetAutoObject(A.Device.Device).Ao.QB()||!A._GetAutoObject(A.Device.
Device).Ao.Filter)this.Vj.R(A.aaR(A.acf.ADT));else if(!A._GetAutoObject(A.Device.
Device).Ao.Filter.DN(1,4)){if(A._GetAutoObject(A.Device.Helper).ACu(A._GetAutoObject(
A.Device.Device).Ao.Filter)===1)this.Vj.R(A.aaR(A.acf.ANC));else this.Vj.R(A.aaR(
A.acf.ANB));}else this.Vj.R(A.aaR(A.acf.ARz));}else this.Vj.Y(false);},Bf0:function(
G){var BAP=A._GetAutoObject(A.Device.Helper).W.Id;var A3s=A._GetAutoObject(A.Device.
Device).Ao.La(0,BAP);if(!A._GetAutoObject(A.Device.Device).Ao.Cd())A._GetAutoObject(
A.Device.Helper).HH(-1);else if(A3s<0)A._GetAutoObject(A.Device.Helper).HH(0);},
AfT:function(G){this.BfU(this);this.HK(this);},_Init:function(aArg){C.Ts._Init.call(
this,aArg);C.Akz._Init.call(this.Vj={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dn(C.AO4);this.Vj.H(E7);this.J(this.Vj,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ts;this.Vj._Done();C.Ts._Done.call(this);},_ReInit:function(){
C.Ts._ReInit.call(this);this.Vj._ReInit();},_Mark:function(D){var B;C.Ts._Mark.call(
this,D);if((B=this.Vj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AL0={QJ:null,VS:null,Abr:null,Yz:null,Init:function(aArg){var B;var F;this.Bb(
this.QJ);if(!!A._GetAutoObject(C.A1).Q){var U9=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!U9){A.ab5("%s",AZl);
return;}else{if(U9.AjE)this.QJ.T(A.aaR(A.acf.Bh));else this.QJ.T(A.aaR(A.acf.EP)
);var AyZ=A._GetAutoObject(A.Device.Device).Ao.Filter;if(!AyZ||A._GetAutoObject(
A.Device.Helper).AqP(AyZ))this.Yz.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Ao.Cd()){this.VS.Ar(false);this.QJ.Ar(false);}}}},Add:function(G){var Aa=(C.Cl.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Ds(0);if(
Aa===this.Abr)A._GetAutoObject(C.A1).BU(9);else if(Aa===this.VS)A._GetAutoObject(
A.Device.Device).Ds(7);else if(Aa===this.QJ)this.BBh();else if(Aa===this.Yz)this.
A04();else throw new Error(AxK);},BBh:function(){var B;var F;var U9=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!U9){A.
ab5("%s",AZl);return;}U9.A_j(this);},A04:function(){var B;var F;var U9=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!U9){A.
ab5("%s",AZl);return;}U9.Q3(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mj._Init.call(this.QJ={I:this},0);C.Mj._Init.call(this.VS={I:this},
0);C.Mj._Init.call(this.Abr={I:this},0);C.Mj._Init.call(this.Yz={I:this},0);this.
__proto__=C.AL0;this.H(Afo);this.QJ.H(ZZ);this.QJ.Ar(true);this.QJ.T(A.aaR(A.acf.
EP));this.QJ.Bi(true);this.VS.H(P4);this.VS.Ar(true);this.VS.T(A.aaR(A.acf.ATZ));
this.VS.Bi(true);this.Abr.H(JS);this.Abr.T(A.aaR(A.acf.AkB));this.Abr.Bi(true);this.
Yz.H(BF);this.Yz.T(A.aaR(A.acf.ABD));this.Yz.Bi(true);this.J(this.QJ,0);this.J(this.
VS,0);this.J(this.Abr,0);this.J(this.Yz,0);this.QJ.AR=[this,this.Add];this.VS.AR=[
this,this.Add];this.Abr.AR=[this,this.Add];this.Yz.AR=[this,this.Add];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QJ._Done();this.VS._Done(
);this.Abr._Done();this.Yz._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QJ._ReInit();this.VS._ReInit();this.Abr.
_ReInit();this.Yz._ReInit();this.QJ.T(A.aaR(A.acf.EP));this.VS.T(A.aaR(A.acf.ATZ
));this.Abr.T(A.aaR(A.acf.AkB));this.Yz.T(A.aaR(A.acf.ABD));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.MultiInfoActionsScreen={_Init:function(aArg){C.GB._Init.call(this,aArg);this.
__proto__=C.MultiInfoActionsScreen;this.N.B2(A.aaR(A.acf.A4T));},_ReInit:function(
){C.GB._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4T));},_className:"Application::MultiInfoActionsScreen"
};C.IX={TT:null,Eu:null,X_:null,Background:null,Am:null,Ii:null,Ih:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10
);var Ir=((Ae&0x40)===0x40);if(Ir){this.Background.L(A.jb.AW);this.Am.L(A.jb.Bm);
this.Do(256);}else if(G8){this.Background.L(this.MZ);this.Am.L(A.jb.Text);this.Do(
256);}else{this.Background.L(this.MZ);this.Am.L(A.jb.Text);this.Do(128);}if(!this.
AM)this.Am.Cx(0);else if(this.AM>0){if(A.aaZ(this.TT,[B=A._GetAutoObject(A.Device.
Device),B.AvR,B.Ayi]))this.Am.Cx(2);else if(A.aaZ(this.TT,[B=A._GetAutoObject(A.
Device.Device),B.AvQ,B.Ayh]))this.Am.Cx(3);else if(!!this.X_&&((F=this.X_,F[1].call(
F[0]))===1))this.Am.Cx(1);else this.Am.Cx(0);}else if(A.aaZ(this.TT,[B=A._GetAutoObject(
A.Device.Device),B.AvR,B.Ayi]))this.Am.Cx(6);else if(A.aaZ(this.TT,[B=A._GetAutoObject(
A.Device.Device),B.AvQ,B.Ayh]))this.Am.Cx(7);else if(!!this.X_&&((F=this.X_,F[1].
call(F[0]))===1))this.Am.Cx(5);else this.Am.Cx(4);},AfX:function(G){this.J2(this
);},AfW:function(G){this.JX(this);},J2:function(G){this.BC(1);},JX:function(G){this.
BC(-1);},Bl3:function(E){if(A.aaZ(this.TT,E))return;if(!!this.TT)A.z$([this,this.
A2K],this.TT,0);this.TT=E;if(!!E)A.zX([this,this.A2K],this.TT,0);A.pe([this,this.
A2K],this);},Ud:function(E){if(A.aaZ(this.Eu,E))return;if(!!this.Eu)A.z$([this,this.
AfV],this.Eu,0);this.Eu=E;if(!!E)A.zX([this,this.AfV],this.Eu,0);if(!!E)A.pe([this
,this.AfV],this);},A2K:function(G){var F;if(!!this.TT)this.BC((F=this.TT,F[1].call(
F[0])));},AfV:function(G){A.pe([this,this.BBu],this);},CX:function(E){if(this.MZ===
E)return;this.MZ=E;this.An();},BC:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TT)(F=this.TT,F[2].call(F[0],E));this.An();A.abo([this,this.Ua,this.
BC],0);},A9s:function(E){if(A.aaZ(this.X_,E))return;if(!!this.X_)A.z$([this,this.
AfV],this.X_,0);this.X_=E;if(!!E)A.zX([this,this.AfV],this.X_,0);if(!!E)A.pe([this
,this.AfV],this);},BBu:function(G){var F,CP;if(!this.X_||!this.Eu)return;this.Bl3(
A._GetAutoObject(A.Device.Helper).BcL((F=this.X_,F[1].call(F[0])),(CP=this.Eu,CP[
1].call(CP[0]))));this.An();},Ua:function(){return this.AM;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Am._Init.call(this.Am={I:this},0);A.Core.BL._Init.call(this.Ii={I:this},0);
A.Core.BL._Init.call(this.Ih={I:this},0);this.__proto__=C.IX;this.H(AH8);this.Background.
A3(0x3F);this.Background.H(AH8);this.Am.A3(0x3C);this.Am.H(AH8);this.Ii.Filter=4;
this.Ih.Filter=5;this.MZ=A.jb.CI;this.J(this.Background,0);this.J(this.Am,0);this.
Am.Ax(A.aaL(A.ach.AUn));this.Ii.BM=[this,this.AfX];this.Ih.BM=[this,this.AfW];},
_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.Am._Done();
this.Ii._Done();this.Ih._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();this.Am._ReInit();this.Ii._ReInit(
);this.Ih._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.TT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.X_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALv={Wi:function(G){var B;var F;this.Age();if(!!A._GetAutoObject(A.Device.Helper
).AOf((F=this.FD,F[1].call(F[0])),0,true))this.ALD(A.aaR(A.acf.A6D),[this,this.Bm3
],[B=A._GetAutoObject(A.Device.Device),B.A7V,B.Bam]);else A._GetAutoObject(C.BN).
XA(A.aaR(A.acf.A6D));A._GetAutoObject(C.BN).Fz();this.IQ(A.aaR(A.acf.LinkTransponder
),[this,this.Bmh],8);this.IQ(A.aaR(A.acf.To),[this,this.Akd],9);this.IQ(A.aaR(A.
acf.A$r),[this,this.BmT],10);this.IQ(A.aaR(A.acf.AFN),[this,this.ASU],3);this.IQ(
A.aaR(A.acf.AnJ),[this,this.Awq],2);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(
C.BN).Nx(A.aaR(A.acf.Al5)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},Dz:function(G){},Aba:function(){return C.Amg;},Abb:function(){return C.AmI;
},Q3:function(G){var F;A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).A6e((F=this.FD,F[1].call(F[0]))));},HK:function(G){var F;C.GP.HK.
call(this,G);if(this.Aj3()===false){this.N.Cp(A._GetAutoObject(A.Device.Converter
).Bgq((F=this.FD,F[1].call(F[0]))));this.N.Cj=[this,this.AIr];this.N.FG(A.jV);}this.
N.OM(false);this.N.ON(false);},Af1:function(){A._GetAutoObject(C.A1).BU(59);},Af0:
function(){A._GetAutoObject(C.A1).BU(60);},A2P:function(G){C.GP.A2P.call(this,G);
A.pe([this,this.AZX],this);},Bm3:function(G){A._GetAutoObject(A.Device.Device).AvX(
!A._GetAutoObject(A.Device.Device).ApX);this.AnR(this);},AnR:function(G){var F;var
Be=A._GetAutoObject(A.Device.Device).Ao.Filter.Fc();A._GetAutoObject(A.Device.Helper
).Bny(Be);if(A._GetAutoObject(A.Device.Device).ApX){var A1K=A._GetAutoObject(A.Device.
Helper).AOf((F=this.FD,F[1].call(F[0])),21600,true);Be.CV(A1K);}A._GetAutoObject(
A.Device.Device).Ao.Bl(Be);},_Init:function(aArg){C.GP._Init.call(this,aArg);this.
__proto__=C.ALv;var B;this.Dx(A.aaR(A.acf.AvB));this.Awk([B=A._GetAutoObject(A.Device.
Device),B.A7U,B.Bal]);},_ReInit:function(){C.GP._ReInit.call(this);this.Dx(A.aaR(
A.acf.AvB));},_className:"Application::ActionListScreen"};C.ALu={_Init:function(
aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ALu;},_className:"Application::ActionListFilterScreen"
};C.ALt={_Init:function(aArg){C.GB._Init.call(this,aArg);this.__proto__=C.ALt;this.
N.B2(A.aaR(A.acf.A4K));},_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A4K));},_className:"Application::ActionListActionsScreen"};C.AO4={IC:null
,IH:null,Bc:null,Mw:A.jV,Init:function(aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(
A.Device.Helper).W,B.A8G,B.A9X],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.
Device).Ao,B.Fg,B.Fk],0);},Dc:function(E){C.IA.Dc.call(this,E);this.IH.L(E);},D2:
function(G){C.IA.D2.call(this,G);var AyZ=A._GetAutoObject(A.Device.Device).Ao.Filter;
if(!AyZ||A._GetAutoObject(A.Device.Helper).AqP(AyZ))this.IC.Y(false);else this.IC.
Y(true);if(A._GetAutoObject(A.Device.Helper).W.Aqz())this.Awx(((A._GetAutoObject(
A.Device.Helper).W.CK+1).toFixed()+A$E)+A._GetAutoObject(A.Device.Device).Ao.Cd(
).toFixed());else this.Awx(A$F);},Awx:function(E){if(this.Mw===E)return;this.Mw=
E;this.IH.R(E);},_Init:function(aArg){C.IA._Init.call(this,aArg);A.acg.Am._Init.
call(this.IC={I:this},0);A.acg.Text._Init.call(this.IH={I:this},0);A.acg.DR._Init.
call(this.Bc={I:this},0);this.__proto__=C.AO4;this.HL.H(Bp1);this.DQ.H(Bp2);this.
IC.H(Bp3);this.IC.L(A.jb.Text);this.IH.H(A$G);this.IH.Hq(2);this.IH.KP(true);this.
IH.A7(0x12);this.IH.R(A$H);this.Bc.DI(Ax5);this.Bc.DY(Ax6);this.Bc.L(A.jb.Bc);this.
J(this.IC,0);this.J(this.IH,0);this.J(this.Bc,0);this.IC.Ax(A.aaL(A.ach.Aeg));this.
IH.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IA;this.
IC._Done();this.IH._Done();this.Bc._Done();C.IA._Done.call(this);},_ReInit:function(
){C.IA._ReInit.call(this);this.IC._ReInit();this.IH._ReInit();this.Bc._ReInit();
this.IH.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((
B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.Ase={Text:null,Bj:function(aSize){C.OX.Bj.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OX.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(WZ);else this.Text.R(this.AC.Gb((F=this.Q,F[1].call(F[0]
))));var Ir=((Ae&0x40)===0x40);if(Ir)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OX._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.Ase;this.Text.R(Rg);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OX;this.Text._Done();C.OX.
_Done.call(this);},_ReInit:function(){C.OX._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OX._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.AqM={C8:null,Bj:function(aSize){C.OX.Bj.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OX.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Ax(null);else{this.C8.Ax(this.AC.ACp(this.AC.DO((F=this.Q,F[1].call(F[
0])))));this.C8.Cx(this.AC.ACr(this.AC.DO((F=this.Q,F[1].call(F[0])))));}var Ir=((
Ae&0x40)===0x40);if(Ir)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OX._Init.call(this,aArg);A.acg.Am._Init.call(this.C8={I:this},0);this.__proto__=
C.AqM;this.H(AH8);this.C8.H(A$D);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OX;this.C8._Done();C.OX._Done.call(this);},_ReInit:function(){C.OX._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OX._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuC={VA:null,DirectionOfCountingToString:null,AdY:null,Dr:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return-1;return aIndex;
},Gb:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return A.jV;return this.
DirectionOfCountingToString.BS(aIndex);},DO:function(A6){return A6;},Hn:function(
){return this.Dr()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VA)(F=
this.VA,F[2].call(F[0],E));},ACp:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr(
)))return null;return this.AdY.Asf(aIndex);},ACr:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dr()))return-1;return this.AdY.Asg(aIndex);},A1g:function(G){var F;
if(!!this.VA)this.Q=(F=this.VA,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Ca],0);},AeG:function(E){if(A.aaZ(this.VA,E))return;if(!!this.VA)A.z$([this
,this.A1g],this.VA,0);this.VA=E;if(!!this.VA)A.zX([this,this.A1g],this.VA,0);A.pe([
this,this.A1g],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.AdY._Init.call(this.AdY={I:this},0);this.__proto__=C.AuC;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.AdY._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.AdY._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.ALS={Hl:null,Eu:null,AnimalIdGenerationMethodToString:
null,AdE:null,Dr:function(){return 4;},C7:function(aIndex){var F;var A6=-1;if((aIndex<
0)||(aIndex>=this.Dr()))return-1;switch(aIndex){case 0:A6=0;break;case 1:A6=1;break;
case 2:A6=this.Byp((F=this.Eu,F[1].call(F[0])));break;case 3:A6=5;break;default:
throw new Error(Bp4+aIndex.toFixed());}return A6;},Gb:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dr()))return A.jV;return this.AnimalIdGenerationMethodToString.
BS(this.C7(aIndex));},DO:function(A6){var aIndex=-1;switch(A6){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bp5+A6.toFixed());}return aIndex;},Hn:function(){return this.
Dr()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hl)(F=this.Hl,F[2].
call(F[0],E));},ACp:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return null;
return this.AdE.Asf(this.C7(aIndex));},ACr:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dr()))return-1;return this.AdE.Asg(this.C7(aIndex));},A0M:function(G){var F;
if(!!this.Hl)this.Q=(F=this.Hl,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Ca],0);},BkT:function(E){if(A.aaZ(this.Hl,E))return;if(!!this.Hl)A.z$([this
,this.A0M],this.Hl,0);this.Hl=E;if(!!this.Hl)A.zX([this,this.A0M],this.Hl,0);A.pe([
this,this.A0M],this);},Ud:function(E){if(A.aaZ(this.Eu,E))return;if(!!this.Eu)A.
z$([this,this.AfV],this.Eu,0);this.Eu=E;if(!!this.Eu)A.zX([this,this.AfV],this.Eu
,0);A.pe([this,this.AfV],this);},AfV:function(G){A.pe([this,this.Bxf],this);},Byp:
function(L0){var Ri=0;switch(L0){case 0:Ri=2;break;case 1:Ri=3;break;case 2:Ri=4;
break;default:throw new Error(Bp6+L0.toFixed());}return Ri;},Bxf:function(G){var
BdJ=this.C7(this.DO(this.Q));if(this.Q!==BdJ)this.As(BdJ);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdE._Init.call(this.
AdE={I:this},0);this.__proto__=C.ALS;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdE._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdE._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGa={FB:null,AaH:null,Q:null,Fe:null,E3:null,Hz:null,Wa:null,AV:null,HV:null
,J$:null,A9:0,AM:0,Ak8:0,Init:function(aArg){var B;A.zX([this,this.BdX],[B=A._GetAutoObject(
A.Device.Device),B.Am9,B.Aog],0);},Ai:function(Ae){C.Ec.Ai.call(this,Ae);if(this.
A9===1){if(this.Hc){this.AV.FF(A.jb.CI);this.Hz.CX(A.jb.CI);this.Wa.CX(A.jb.CI);
this.Background.L(A.jb.C2);this.V.L(A.jb.Text);}else{this.AV.FF(A.jb.C2);this.Hz.
CX(A.jb.C2);this.Wa.CX(A.jb.C2);this.Background.L(A.jb.CI);this.V.L(A.jb.Text);}
}else{if(this.Hc){this.AV.FF(A.jb.CI);this.Hz.CX(A.jb.CI);this.Wa.CX(A.jb.CI);}else{
this.AV.FF(A.jb.C2);this.Hz.CX(A.jb.C2);this.Wa.CX(A.jb.C2);}this.Bb(null);}},IO:
function(G){C.Ec.IO.call(this,G);if(!this.A9)this.FN(this);else this.G7(this);},
DG:function(G){var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(
F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(
F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}break;
default:this.FB.Aky((F=this.N,F[1].call(F[0])));}},FN:function(G){this.Es(1);},G7:
function(G){this.Es(0);},Es:function(EJ){var F;if(!this.A9&&!!this.N)this.FB.Ajm((
F=this.N,F[1].call(F[0])));this.A9=EJ;if(this.A9<0)this.A9=0;else if(this.A9>1)this.
A9=1;switch(this.A9){case 0:this.Bb(null);break;case 1:{if(this.AV.A8c())this.Bb(
this.AV);else this.Bb(this.Wa);if(!this.AM)this.AV.SA(2);else this.AV.SA(7);}break;
default:throw new Error(AsS+this.A9.toFixed());}this.DG(this);this.An();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(G
){var F;if(!!this.Q){this.BC((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ua,this.
BC],0);}},BC:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},On:function(G){this.AAC(2);},MU:function(G){this.AAC(
7);},AAC:function(Gs){var B;var Ay0=(A.Core.O.isPrototypeOf(B=this.AW)?B:null);if(
!!Ay0){var AzR=(A.Core.O.isPrototypeOf(B=this.QA(Ay0,Gs,0x15))?B:null);if(!!AzR){
this.Bb(AzR);return true;}}return false;},AoG:function(G){A.pe([this,this.BdX],this
);},A3D:function(G){var B;var F;if(!this.HV.Hl){this.J$.AeG(null);return;}switch((
F=this.HV.Hl,F[1].call(F[0]))){case 0:case 1:this.J$.AeG(null);break;case 3:this.
J$.AeG([B=A._GetAutoObject(A.Device.Device),B.ARU,B.AZF]);break;case 2:this.J$.AeG([
B=A._GetAutoObject(A.Device.Device),B.ARV,B.AZG]);break;case 4:case 5:this.J$.AeG([
B=A._GetAutoObject(A.Device.Device),B.AD7,B.AIi]);break;default:throw new Error(
Bp7+(F=this.HV.Hl,F[1].call(F[0])).toFixed());}},BdX:function(G){var F;if(!this.
HV.Hl)return;A.pe([this,this.A3D],this);var Atv=false;switch((F=this.HV.Hl,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{Atv=true;this.AV.A_c(-1);}break;case 0:
case 1:{Atv=false;this.AV.A_c(A._GetAutoObject(A.Device.Device).A0);}break;default:
throw new Error(AxX+(F=this.HV.Hl,F[1].call(F[0])).toFixed());}this.AV.Ar(Atv);this.
Hz.Ar(Atv);this.Hz.Y(Atv);if(((F=this.HV.Hl,F[1].call(F[0]))!==this.Ak8)||(Atv===
false)){var BQ=this.AM;this.BC(A._GetAutoObject(A.Device.Helper).ALQ((F=this.HV.
Hl,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BiG((F=this.HV.Hl,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AV.Kh(A._GetAutoObject(A.Device.Device).A0);else this.AV.Kh(0);this.Ak8=(
F=this.HV.Hl,F[1].call(F[0]));},A9b:function(E){var B;if(this.AaH===E)return;if(
!!this.AaH){A.z$([this,this.AoG],[B=this.AaH,B.Wg,B.JJ],0);A.z$([this,this.AoG],[
B=this.AaH,B.Anb,B.Nb],0);A.z$([this,this.AoG],[B=this.AaH,B.Aka,B.NX],0);this.HV.
Ud(null);}this.AaH=E;if(!!E){A.zX([this,this.AoG],[B=this.AaH,B.Wg,B.JJ],0);A.zX([
this,this.AoG],[B=this.AaH,B.Anb,B.Nb],0);A.zX([this,this.AoG],[B=this.AaH,B.Aka
,B.NX],0);this.HV.Ud([B=this.AaH,B.Wg,B.JJ]);}if(!!E)A.pe([this,this.AoG],this);
},Ua:function(){return this.AM;},_Init:function(aArg){C.Ec._Init.call(this,aArg);
A.Core.BL._Init.call(this.Fe={I:this},0);A.Core.BL._Init.call(this.E3={I:this},0
);C.AqM._Init.call(this.Hz={I:this},0);C.AqM._Init.call(this.Wa={I:this},0);C.Avp.
_Init.call(this.AV={I:this},0);C.ALS._Init.call(this.HV={I:this},0);C.AuC._Init.
call(this.J$={I:this},0);this.__proto__=C.AGa;var B;this.H(UN);this.V.Ar(false);
this.V.R(AsH);this.V.L(A.jb.Bm);this.Fe.Filter=6;this.E3.Filter=7;this.Hz.H(Bp8);
this.Hz.Ar(false);this.Wa.H(Bp9);this.AV.H(Bp_);this.AV.Ar(false);this.J(this.Hz
,0);this.J(this.Wa,0);this.J(this.AV,0);this.FB=A._NewObject(C.Ad_,0);this.Fe.BM=[
this,this.On];this.E3.BM=[this,this.MU];this.Hz.CJ(this.J$);this.Hz.As([B=this.J$
,B.B$,B.Ca]);this.Wa.CJ(this.HV);this.Wa.As([B=this.HV,B.B$,B.Ca]);this.AV.As([this
,this.Ua,this.BC]);this.HV.BkT([B=A._GetAutoObject(A.Device.Device),B.Am9,B.Aog]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ec;this.Fe._Done();this.E3.
_Done();this.Hz._Done();this.Wa._Done();this.AV._Done();this.HV._Done();this.J$.
_Done();C.Ec._Done.call(this);},_ReInit:function(){C.Ec._ReInit.call(this);this.
Fe._ReInit();this.E3._ReInit();this.Hz._ReInit();this.Wa._ReInit();this.AV._ReInit(
);this.HV._ReInit();this.J$._ReInit();},_Mark:function(D){var B;C.Ec._Mark.call(
this,D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaH)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Hz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HV).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.J$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GU={Azi:null,Fe:null,E3:null,GQ:null,
FT:null,EH:null,M4:0,AMu:0,ABt:0,Uk:0,A$o:-1,AMt:false,Init:function(aArg){A.pe([
this,this.AZ_],this);},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.EH.Y(this.
AMt);this.EH.H(A.wC(this.Yd(this.ABt).M,this.Yd((this.ABt+this.AMu)-1).M));},On:
function(G){var D1=(A.Core.BL.isPrototypeOf(G)?G:null);var A01=this.Bfo(2);if(A01===
false)D1.NC=true;},MU:function(G){var D1=(A.Core.BL.isPrototypeOf(G)?G:null);var
A01=this.Bfo(7);if(A01===false)D1.NC=true;},Bfo:function(Gs){var B;var DT=(C.DB.
isPrototypeOf(B=this.AW)?B:null);DT=this.BcN(DT,Gs,true);if(!!DT){this.Bb(DT);this.
Azi=(C.DB.isPrototypeOf(B=this.AW)?B:null);return true;}return false;},Adc:function(
G){A.ab5("%s",AkV);},GK:function(s){this.Adc(s);},FF:function(E){if(this.M4===E)
return;this.M4=E;this.FT.CX(E);this.GQ.CX(E);},SA:function(Gs){var B;switch(Gs){
case 2:this.Bb(this.GQ);break;case 7:this.Bb(this.FT);break;default:A.ab5("%s%e"
,Bp$,Gs);}this.Azi=(C.DB.isPrototypeOf(B=this.AW)?B:null);},LL:function(G){},AZ_:
function(s){this.LL(s);},AEr:function(E){if(this.AMt===E)return;this.AMt=E;this.
An();},A9h:function(E){if(this.AMu===E)return;this.AMu=E;this.An();},A9g:function(
E){if(this.ABt===E)return;this.ABt=E;this.An();},Yd:function(Ht){var B6=null;switch(
Ht){case-1:case 0:B6=this.FT;break;case 1:B6=this.GQ;break;default:A.ab5("%s",AhM
);}return B6;},Kh:function(E){if(this.Uk===E)return;this.Uk=E;this.Al1();},Al1:function(
){A.ab5("%s",AkV);},BcN:function(AcJ,Gs,LD){var B;if(!!AcJ){var Be;if(LD)Be=0x11;
else Be=0x0;switch(Gs){case 2:AcJ=(C.DB.isPrototypeOf(B=this.Aqo(AcJ,Be))?B:null
);break;case 7:AcJ=(C.DB.isPrototypeOf(B=this.TH(AcJ,Be))?B:null);break;default:
throw new Error(Bqa);}}return AcJ;},A_c:function(E){if(this.A$o===E)return;this.
A$o=E;var DT=this.FT;var A1o;while(!!DT){A1o=!!E;DT.Ar(A1o);DT.Y(A1o);if(DT===this.
Azi)this.Bb(DT);DT=this.BcN(DT,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BL._Init.call(this.Fe={I:this},0);A.Core.BL._Init.
call(this.E3={I:this},0);C.DB._Init.call(this.GQ={I:this},0);C.DB._Init.call(this.
FT={I:this},0);A.acg.CC._Init.call(this.EH={I:this},0);this.__proto__=C.GU;this.
H(Bqb);this.Fe.Filter=6;this.E3.Filter=7;this.M4=A.jb.CI;this.GQ.H(EY);this.FT.H(
A$I);this.EH.H(Bqc);this.EH.NY(2);this.EH.L(A.jb.EV);this.J(this.GQ,0);this.J(this.
FT,0);this.J(this.EH,0);this.Fe.BM=[this,this.On];this.Fe.DX=[this,this.On];this.
E3.BM=[this,this.MU];this.E3.DX=[this,this.MU];this.Azi=this.FT;this.GQ.Dk=[this
,this.GK];this.FT.Dk=[this,this.GK];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Fe._Done();this.E3._Done();this.GQ._Done();this.FT._Done();this.EH.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Fe._ReInit();this.E3._ReInit();this.GQ._ReInit();this.FT._ReInit();this.EH.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Azi)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EH)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQw={Du:null,CU:null,Cr:null
,FF:function(E){if(this.M4===E)return;C.HD.FF.call(this,E);this.Cr.CX(E);this.CU.
CX(E);this.Du.CX(E);},Yd:function(Ht){var B6=null;switch(Ht){case-1:case 0:B6=this.
FT;break;case 1:B6=this.Cr;break;case 2:B6=this.CU;break;case 3:B6=this.Du;break;
case 4:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;},_Init:function(aArg
){C.HD._Init.call(this,aArg);C.DB._Init.call(this.Du={I:this},0);C.DB._Init.call(
this.CU={I:this},0);C.DB._Init.call(this.Cr={I:this},0);this.__proto__=C.AQw;this.
H(Bqd);this.GQ.H(AsR);this.Du.H(A$J);this.CU.H(A$K);this.Cr.H(A$L);this.FT.H(Bqe
);this.J(this.Du,-2);this.J(this.CU,-2);this.J(this.Cr,-2);this.Du.Dk=[this,this.
GK];this.CU.Dk=[this,this.GK];this.Cr.Dk=[this,this.GK];},_Done:function(){this.
__proto__=C.HD;this.Du._Done();this.CU._Done();this.Cr._Done();C.HD._Done.call(this
);},_ReInit:function(){C.HD._ReInit.call(this);this.Du._ReInit();this.CU._ReInit(
);this.Cr._ReInit();},_Mark:function(D){var B;C.HD._Mark.call(this,D);if((B=this.
Du)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AUY={Q6:null,Acp:null,AUX:0,CA:function(G){this.Acp.Ar(true);},EX:function(G
){this.Acp.Ar(false);},BmR:function(E){if(this.AUX===E)return;this.AUX=E;this.Q6.
R((((A.aaR(A.acf.AUW)+Z1)+E.toFixed())+Bqf)+A.aaR(A.acf.K$));},BkF:function(){return this.
AUX;},BAb:function(G){A._GetAutoObject(C.A1).BU(3);A._GetAutoObject(A.Device.Device
).Anf(1);},_Init:function(aArg){C.XN._Init.call(this,aArg);C.CG._Init.call(this.
Q6={I:this},0);A.acl.Gc._Init.call(this.Acp={I:this},0);this.__proto__=C.AUY;this.
Aer.H(Bqg);this.Ut.R(A.jV);this.Q6.H(Bqh);this.Q6.R(A.aaR(A.acf.AUW)+A$M);this.Q6.
L(A.jb.Text);this.Acp.HI(1);this.Acp.Fi(5000);this.Acp.B3=100;this.J(this.Q6,0);
this.Q6.S(A.aaL(A.fl.Af));this.Q6.A2(A.aaL(A.fl.Ak));this.Q6.Cs(A.aaL(A.fl.Bk));
this.Acp.Sr=[this,this.BAb];this.Acp.Q=[this,this.BkF,this.BmR];},_Done:function(
){this.__proto__=C.XN;this.Q6._Done();this.Acp._Done();C.XN._Done.call(this);},_ReInit:
function(){C.XN._ReInit.call(this);this.Q6._ReInit();this.Acp._ReInit();this.Q6.
R(A.aaR(A.acf.AUW)+A$M);this.Q6.S(A.aaL(A.fl.Af));this.Q6.A2(A.aaL(A.fl.Ak));this.
Q6.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.XN._Mark.call(this,D);if((B=this.
Q6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARn={K1:null,Li:null,Bdy:false,Init:
function(aArg){this.Bb(this.C_);},Er:function(G){var B;if(!!this.K1)this.K1.Er(this
);C.Wc.Er.call(this,G);},AfY:function(G){var B;if(!!this.K1)this.K1.AfY(this);C.
Wc.AfY.call(this,G);},CA:function(G){var B;if(!this.Bdy){this.Bdy=true;A.pe([this
,this.A29],this);}else if(!this.K1){this.K1=A._NewObject(C.ARp,0);this.K1.A9q([this
,this.AAs]);this.LL(this);this.K1.LL(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Er(this);else C.Wc.CA.call(this,G);}else C.Wc.CA.call(this,G
);},ApM:function(G){var B;if(!!this.K1)this.K1.ApM(this);},AAs:function(G){var B;
var F;this.LL(this);this.K1.LL(this);A.pe([this,this.AcC],this);var Bc$=this.LQ;
this.AeD(A._GetAutoObject(A.Device.Helper).Aa_(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AUV(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bc$);if(Bc$)A._GetAutoObject(
A.Device.Helper).W.NX(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.Ui(A._GetAutoObject(A.Device.Helper).ALQ((F=this.Dg.HV.Hl,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.Jw(this.C_);},A29:function(
G){A._GetAutoObject(C.A1).BU(90);},_Init:function(aArg){C.Wc._Init.call(this,aArg
);C.Q5._Init.call(this.Li={I:this},0);this.__proto__=C.ARn;var B;this.Li.H(AhJ);
this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ABU));this.J(this.Li,-9);this.JO(this.Gd,-
1);this.Li.Gi([this,this.D6,this.GI]);this.Li.As([B=A._GetAutoObject(A.Device.Helper
).W,B.AR4,B.Ann]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wc;this.Li.
_Done();C.Wc._Done.call(this);},_ReInit:function(){C.Wc._ReInit.call(this);this.
Li._ReInit();this.Li.T(A.aaR(A.acf.ABU));},_Mark:function(D){var B;C.Wc._Mark.call(
this,D);if((B=this.K1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADi={Agw:null,Agx:null,NF:null,NE:null,EO:null,FS:null,Ek:null,Du:null,CU:null,Cr:
null,FF:function(E){if(this.M4===E)return;C.Le.FF.call(this,E);this.Cr.CX(E);this.
CU.CX(E);this.Du.CX(E);this.Ek.CX(E);this.FS.CX(E);this.EO.CX(E);this.NE.CX(E);this.
NF.CX(E);this.Agx.CX(E);this.Agw.CX(E);},Yd:function(Ht){var B6=null;switch(Ht){
case-1:case 0:B6=this.FT;break;case 1:B6=this.Cr;break;case 2:B6=this.CU;break;case
3:B6=this.Du;break;case 4:B6=this.Ek;break;case 5:B6=this.FS;break;case 6:B6=this.
EO;break;case 7:B6=this.NE;break;case 8:B6=this.NF;break;case 9:B6=this.Agx;break;
case 10:B6=this.Agw;break;case 11:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;
},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DB._Init.call(this.Agw={I:this
},0);C.DB._Init.call(this.Agx={I:this},0);C.DB._Init.call(this.NF={I:this},0);C.
DB._Init.call(this.NE={I:this},0);C.DB._Init.call(this.EO={I:this},0);C.DB._Init.
call(this.FS={I:this},0);C.DB._Init.call(this.Ek={I:this},0);C.DB._Init.call(this.
Du={I:this},0);C.DB._Init.call(this.CU={I:this},0);C.DB._Init.call(this.Cr={I:this
},0);this.__proto__=C.ADi;this.H(Bqi);this.GQ.H(AH9);this.Agw.H(Ax9);this.Agx.H(
AZm);this.NF.H(AZn);this.NE.H(AZo);this.EO.H(AZp);this.FS.H(AZq);this.Ek.H(AZr);
this.Du.H(A$N);this.CU.H(AZs);this.Cr.H(Bqj);this.FT.H(Bqk);this.J(this.Agw,-2);
this.J(this.Agx,-2);this.J(this.NF,-2);this.J(this.NE,-2);this.J(this.EO,-2);this.
J(this.FS,-2);this.J(this.Ek,-2);this.J(this.Du,-2);this.J(this.CU,-2);this.J(this.
Cr,-2);this.Agw.Dk=[this,this.GK];this.Agx.Dk=[this,this.GK];this.NF.Dk=[this,this.
GK];this.NE.Dk=[this,this.GK];this.EO.Dk=[this,this.GK];this.FS.Dk=[this,this.GK
];this.Ek.Dk=[this,this.GK];this.Du.Dk=[this,this.GK];this.CU.Dk=[this,this.GK];
this.Cr.Dk=[this,this.GK];},_Done:function(){this.__proto__=C.Le;this.Agw._Done(
);this.Agx._Done();this.NF._Done();this.NE._Done();this.EO._Done();this.FS._Done(
);this.Ek._Done();this.Du._Done();this.CU._Done();this.Cr._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.Agw._ReInit();this.Agx._ReInit(
);this.NF._ReInit();this.NE._ReInit();this.EO._ReInit();this.FS._ReInit();this.Ek.
_ReInit();this.Du._ReInit();this.CU._ReInit();this.Cr._ReInit();},_Mark:function(
D){var B;C.Le._Mark.call(this,D);if((B=this.Agw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ek)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Du)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HD={Q:null,AM:0,Ai:function(Ae){C.GU.Ai.call(this
,Ae);this.Al1();},Adc:function(G){var B;var F;var Ky=A.jV;var B6=this.GQ;while(!
!B6){if(B6.E1>0)Ky=Ky+B6.E1.toFixed();else Ky=Ky+String.fromCharCode(0x30);B6=(C.
DB.isPrototypeOf(B=this.TH(B6,0x11))?B:null);}var BQ=this.AM;this.BC(A.wz(Ky,-1,
10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LL:function(G){},Al1:function(){var B;var F;if(!!this.Q){var DT=this.FT;
var Adj=this.Uk;var A6=(F=this.Q,F[1].call(F[0]));while(!!DT){if(A6>0){DT.LW(A6%
10);A6=(A6/10)|0;}else if(Adj>0)DT.LW(0);else DT.LW(-1);DT=(C.DB.isPrototypeOf(B=
this.Aqo(DT,0x11))?B:null);Adj=Adj-1;}}},C3:function(G){var F;if(!!this.Q)this.BC((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},BC:function(E){if(this.AM===E)return;this.AM=E;this.
An();},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.HD;},_Mark:
function(D){var B;C.GU._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Le={AM:0,Q:null
,Ai:function(Ae){C.GU.Ai.call(this,Ae);this.Al1();},Adc:function(G){var B;var F;
var Ky=A.jV;var B6=this.GQ;while(!!B6){if(B6.E1>0)Ky=Ky+B6.E1.toFixed();else Ky=
Ky+String.fromCharCode(0x30);B6=(C.DB.isPrototypeOf(B=this.TH(B6,0x11))?B:null);
}var BQ=this.AM;this.BC(A.ab0(Ky,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LL:function(G){},Al1:function(){var B;
var F;if(!!this.Q){var DT=this.FT;var Adj=this.Uk;var A6=(F=this.Q,F[1].call(F[0
]));while(!!DT){if(A6>0){DT.LW((A6%10)|0);A6=Math.trunc(A6/10);}else if(Adj>0)DT.
LW(0);else DT.LW(-1);DT=(C.DB.isPrototypeOf(B=this.Aqo(DT,0x11))?B:null);Adj=Adj-
1;}}},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},BC:function(
E){if(this.AM===E)return;this.AM=E;this.An();},_Init:function(aArg){C.GU._Init.call(
this,aArg);this.__proto__=C.Le;},_Mark:function(D){var B;C.GU._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dr:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.Avp={Ek:null,Du:null,CU:null,Cr:null,FF:function(E){if(this.M4===E)return;C.
HD.FF.call(this,E);this.Cr.CX(E);this.CU.CX(E);this.Du.CX(E);this.Ek.CX(E);},Yd:
function(Ht){var B6=null;switch(Ht){case-1:case 0:B6=this.FT;break;case 1:B6=this.
Cr;break;case 2:B6=this.CU;break;case 3:B6=this.Du;break;case 4:B6=this.Ek;break;
case 5:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;},_Init:function(aArg
){C.HD._Init.call(this,aArg);C.DB._Init.call(this.Ek={I:this},0);C.DB._Init.call(
this.Du={I:this},0);C.DB._Init.call(this.CU={I:this},0);C.DB._Init.call(this.Cr={
I:this},0);this.__proto__=C.Avp;this.H(AxO);this.GQ.H(AHk);this.Ek.H(AHl);this.Du.
H(AHm);this.CU.H(AHn);this.Cr.H(AHo);this.FT.H(AHp);this.EH.H(A$O);this.J(this.Ek
,-2);this.J(this.Du,-2);this.J(this.CU,-2);this.J(this.Cr,-2);this.Ek.Dk=[this,this.
GK];this.Du.Dk=[this,this.GK];this.CU.Dk=[this,this.GK];this.Cr.Dk=[this,this.GK
];},_Done:function(){this.__proto__=C.HD;this.Ek._Done();this.Du._Done();this.CU.
_Done();this.Cr._Done();C.HD._Done.call(this);},_ReInit:function(){C.HD._ReInit.
call(this);this.Ek._ReInit();this.Du._ReInit();this.CU._ReInit();this.Cr._ReInit(
);},_Mark:function(D){var B;C.HD._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Du)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AT7={AttributeSet:null,Init:function(aArg){this.AttributeSet.
BnX(0);this.AttributeSet.BnY(1);this.AttributeSet.BnZ(4);},Ai:function(Ae){var B;
C.BZ.Ai.call(this,Ae);var G8=((Ae&0x10)===0x10);var Fn=((Ae&0x20)===0x20);var Ir=((
Ae&0x40)===0x40);var Gw=this.Bo.By;var FJ=A.jb.CI;var GL=A.jb.Text;if(this.Hc){FJ=
A.jb.Bm;GL=A.jb.Text;}if(!G8){this.Background.L(A.jb.C2);this.V.L(A.jb.CI);this.
AttributeSet.Ag9(A.jb.CI);}else if(Gw){this.Background.L(A.jb.AW);this.V.L(A.jb.
Bm);this.AttributeSet.Ag9(A.jb.Bm);}else if(Ir){this.Background.L(A.jb.AW);this.
V.L(A.jb.Bm);this.AttributeSet.Ag9(A.jb.Bm);}else if(Fn){this.Background.L(A.jb.
AmN);this.V.L(A.jb.Bm);this.AttributeSet.Ag9(A.jb.Bm);}else{this.Background.L(FJ
);this.V.L(GL);this.AttributeSet.Ag9(GL);}this.LD=G8;this.KA=Fn;this.Qk=Gw;this.
AoZ=Ir;},Hd:function(G){var B;var FZ=this.Dv.GW;var Cy=(A.acg.Auo.isPrototypeOf(
B=this.Dv.Cg)?B:null);Cy.A9d(this.AttributeSet);Cy.A7(0x12);if(!Cy)return;if(!!this.
AC)Cy.R(this.Byi(this.AC.Gb(FZ)));else Cy.R(WZ);Cy.H(A.abK(Cy.M,[this.Dv.VX,(B=this.
Dv.M)[3]-B[1]]));},Byi:function(BwG){var AAc=BwG;AAc=A._GetAutoObject(A.Device.Helper
).Ne(AAc,Bql,Bqm);AAc=A._GetAutoObject(A.Device.Helper).Ne(AAc,Bqn,Bqo);return Bqp+
AAc;},_Init:function(aArg){C.BZ._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AT7;this.Dv.H(Bqq);this.Dv.Jm(2);
this.Dv.NV(A.acg.Auo);this.AttributeSet.Ag9(this.V.AQ);this.AttributeSet.BlL(A.aaL(
A.fl.AN7));this.AttributeSet.A9z(A.aaL(A.fl.Ak));this.AttributeSet.Aha(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BZ;this.AttributeSet._Done(
);C.BZ._Done.call(this);},_ReInit:function(){C.BZ._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9z(A.aaL(A.fl.Ak));this.AttributeSet.Aha(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BZ._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Ar6._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dn(C.ACK);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dr:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gb:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BS(aIndex
);},DO:function(A6){return A6;},Hn:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OQ={FB:null,EnumToCodeset:
null,Jk:null,A9:0,Number:0,Ai:function(Ae){C.BZ.Ai.call(this,Ae);if(this.A9===1){
if(this.Hc){this.Background.L(A.jb.C2);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CI);this.V.L(A.jb.Text);}}},BC:function(E){C.BZ.BC.call(this,E);var Bzb=this.
EnumToCodeset.Aml(this.Number);var BdI=this.AC.C7(this.AM);if(Bzb!==BdI){this.AE6(
this.EnumToCodeset.Ad1(BdI));A.abo([this,this.AR5,this.AE6],0);}},DG:function(G){
var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.
aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[
this,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(
A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=
this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}break;default:
this.FB.Aky((F=this.N,F[1].call(F[0])));}},FN:function(G){this.Es(1);},G7:function(
G){this.Es(0);},Es:function(EJ){var F;if(!this.A9)this.FB.Ajm((F=this.N,F[1].call(
F[0])));this.A9=EJ;if((this.A9<0)||(this.A9>1))this.A9=0;this.DG(this);if(!this.
A9)this.Bb(null);else this.A1B();this.An();},AE6:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aqw()>E)E=this.EnumToCodeset.
Aqw();if(this.EnumToCodeset.Hn()<E)E=this.EnumToCodeset.Hn();}this.Number=E;var BQ=
this.AM;if(!!this.EnumToCodeset){var Bx_=this.EnumToCodeset.Aml(E);this.BC(this.
AC.DO(Bx_));if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Ang:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},UY:function(G){this.Es(this.A9+1);},A1B:function(){A.ab5(
"%s",Bqr);},AR5:function(){return this.Number;},_Init:function(aArg){C.BZ._Init.
call(this,aArg);A.Core.BL._Init.call(this.Jk={I:this},0);this.__proto__=C.OQ;this.
Jk.Filter=1;this.FB=A._NewObject(C.Ad_,0);this.Jk.BM=[this,this.UY];},_Done:function(
){this.__proto__=C.BZ;this.Jk._Done();C.BZ._Done.call(this);},_ReInit:function(){
C.BZ._ReInit.call(this);this.Jk._ReInit();},_Mark:function(D){var B;C.BZ._Mark.call(
this,D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.Aey={Text:null,Ai:function(
Ae){C.Eg.Ai.call(this,Ae);this.Text.L(this.ACl);},BC:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Ra(this.AM));this.
An();},Aaq:function(G){A.pe([this,this.AfU],this);},Aap:function(G){A.pe([this,this.
AfU],this);},AlD:function(G){A.pe([this,this.AfU],this);},AfU:function(G){if((!this.
Ia||!this.A0)||!this.AF)return;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Aey;this.Text.A3(0x3F
);this.Text.H(Asz);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Eg;this.Text._Done();C.Eg.
_Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Eg._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARg={GA:0,C6:null,AV:null,E2:null,
IX:null,CountryToString:null,K8:0,L6:false,Init:function(aArg){A.zX([this,this.MF
],[this,this.Ss,this.Lm],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.IX.Y(this.
Ae7);this.AV.FF(this.LO);this.E2.CX(this.LO);this.IX.CX(this.LO);},DG:function(G
){var F;if(!this.N)return;switch(this.A9){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(
F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(
F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).B2(this.CountryToString.BS(this.K8));(F=this.N,
F[1].call(F[0])).Cf=null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.
G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.
N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}}},Es:function(EJ){var Tf=this.
A9;this.A9=EJ;if(this.A9<0)this.A9=0;else if(this.A9>this.Ry)this.A9=this.Ry;if((
this.A9===1)&&!this.Ae7)this.A9=2;switch(this.A9){case 0:{this.Bb(null);if(!this.
GA)this.Lm(0);}break;case 1:this.Bb(this.IX);break;case 2:this.Bb(this.E2);break;
case 3:{this.Bb(this.AV);if(!this.GA||(Tf>0))this.AV.SA(2);else this.AV.SA(7);}break;
default:throw new Error(AsS+this.A9.toFixed());}C.Eg.Es.call(this,this.A9);},Ao6:
function(G){this.IX.Ud(this.Eu);},Aaq:function(G){var F;this.AV.A9g((F=this.AF,F[
1].call(F[0])));},Aap:function(G){var F;this.AV.A9h((F=this.A0,F[1].call(F[0])));
},BC:function(E){if(this.AM===E)return;this.AM=E;this.L6=true;this.St(A._GetAutoObject(
A.Device.Helper).R$(E,0,12));this.Lm(A._GetAutoObject(A.Device.Converter).ZG(E));
this.L6=false;if(!!E)this.AV.Kh(12);else this.AV.Kh(0);this.An();},AlD:function(
G){A.pe([this,this.AfU],this);},FN:function(G){var F;if(!this.AM){var BQ=this.AM;
this.BC(A._GetAutoObject(A.Device.Helper).ACz());if(this.AM!==BQ){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Es(3);},AjB:function(){return this.
GA;},AjD:function(){return 999999999999;},Lm:function(E){if(this.K8===E)return;this.
K8=E;if(this.L6===false)A.pe([this,this.U$],this);A.abo([this,this.Ss,this.Lm],0
);},St:function(E){if(this.GA===E)return;this.GA=E;if(this.L6===false)A.pe([this
,this.U$],this);A.abo([this,this.AbI,this.St],0);},U$:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqc(this.K8),3,10)+A.abm(this.GA,12,10
);var BQ=this.AM;this.BC(A.ab0(aString,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},AfU:function(G){var F;if((!this.Ia||
!this.A0)||!this.AF)return;if(!(F=this.Ia,F[1].call(F[0])))this.AV.AEr(true);else
this.AV.AEr(false);},Ss:function(){return this.K8;},AbI:function(){return this.GA;
},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.C6._Init.call(this.C6={I:this
},0);C.ADi._Init.call(this.AV={I:this},0);C.Ase._Init.call(this.E2={I:this},0);C.
IX._Init.call(this.IX={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARg;var B;this.Ry=3;this.AV.H(Bqs);this.E2.H(A$P);this.
IX.H(A$Q);this.J(this.AV,0);this.J(this.E2,0);this.J(this.IX,0);this.C6.AEx([this
,this.Ss,this.Lm]);this.AV.As([this,this.AbI,this.St]);this.E2.CJ(this.C6);this.
E2.As([B=this.C6,B.B$,B.Ca]);this.IX.A9s([B=A._GetAutoObject(A.Device.Device),B.
AvL,B.Aye]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.C6._Done(
);this.AV._Done();this.E2._Done();this.IX._Done();this.CountryToString._Done();C.
Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.C6._ReInit(
);this.AV._ReInit();this.E2._ReInit();this.IX._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARf={GA:0,C6:null,AV:null,Yo:null,Kd:null,E2:null,IX:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Ps:0,K8:0,L6:false,Init:function(aArg){A.
zX([this,this.MF],[this,this.PL,this.Ew],0);A.zX([this,this.MF],[this,this.Ss,this.
Lm],0);A.zX([this,this.MF],[this,this.Am$,this.Ahb],0);},Ai:function(Ae){C.Eg.Ai.
call(this,Ae);this.IX.Y(this.Ae7);this.AV.FF(this.LO);this.Yo.FF(this.LO);this.Kd.
FF(this.LO);this.E2.CX(this.LO);this.IX.CX(this.LO);},DG:function(G){var F;if(!this.
N)return;switch(this.A9){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(
A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this
,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV
);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.
N,F[1].call(F[0])).B2(this.CountryToString.BS(this.K8));(F=this.N,F[1].call(F[0]
)).Cf=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.
N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.
N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(
F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).B2(((A.aaR(A.acf.AGj)+A.aaR(A.acf.Colon))+Z1)+A.aaR(A.
acf.BgM));break;case 1:(F=this.N,F[1].call(F[0])).B2(((A.aaR(A.acf.AGj)+A.aaR(A.
acf.Colon))+Z1)+A.aaR(A.acf.Bn4));break;case 2:(F=this.N,F[1].call(F[0])).B2(((A.
aaR(A.acf.AGj)+A.aaR(A.acf.Colon))+Z1)+A.aaR(A.acf.BhB));break;default:(F=this.N
,F[1].call(F[0])).B2(((A.aaR(A.acf.AGj)+A.aaR(A.acf.Colon))+Z1)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cf=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0]
)).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0
])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null
);(F=this.N,F[1].call(F[0])).B2((A.aaR(A.acf.Gq)+AxE)+this.GermanStateToString.Lr(
A._GetAutoObject(A.Device.Converter).ACo(this.Ps)));(F=this.N,F[1].call(F[0])).Cf=
null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[
1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[
1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(
F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}}},Es:function(EJ){var Tf=this.A9;if(EJ<
0)EJ=0;else if(EJ>this.Ry)EJ=this.Ry;if((EJ===1)&&!this.Ae7)EJ=2;switch(EJ){case
0:{this.Bb(null);if((!this.GA&&!this.AnimalType)&&!this.Ps)this.Lm(0);}break;case
1:this.Bb(this.IX);break;case 2:this.Bb(this.E2);break;case 3:if(!Tf)A.pe([this,
this.BAp],this);else this.Bb(this.Yo);break;case 4:this.Bb(this.Kd);break;case 5:
if(((Tf===4)&&!this.Ps)&&!this.GA)return;else{this.Bb(this.AV);if(!this.GA||(Tf>
0))this.AV.SA(2);else this.AV.SA(7);}break;default:throw new Error(AsS+EJ.toFixed(
));}this.A9=EJ;C.Eg.Es.call(this,this.A9);},BC:function(E){if(this.AM===E)return;
this.AM=E;this.L6=true;this.St(A._GetAutoObject(A.Device.Helper).R$(E,0,8));this.
Ahb(A._GetAutoObject(A.Device.Helper).R$(E,8,2)|0);this.Ew(A._GetAutoObject(A.Device.
Helper).R$(E,10,2)|0);this.Lm(A._GetAutoObject(A.Device.Converter).ZG(E));this.L6=
false;if(!!this.AM){this.Yo.Kh(2);this.Kd.Kh(2);this.AV.Kh(8);}else{this.Yo.Kh(0
);this.Kd.Kh(0);this.AV.Kh(0);}this.An();},Ao6:function(G){this.IX.Ud(this.Eu);}
,Aaq:function(G){var F;this.AV.A9g((F=this.AF,F[1].call(F[0])));},Aap:function(G
){var F;this.AV.A9h((F=this.A0,F[1].call(F[0])));},AlD:function(G){A.pe([this,this.
AfU],this);},FN:function(G){var F;if(!this.AM){var BQ=this.AM;this.BC(A._GetAutoObject(
A.Device.Helper).ACz());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Es(3);}else this.Es(this.Ry);},AjB:function(){return this.
GA;},AjD:function(){return 99999999;},Lm:function(E){if(this.K8===E)return;this.
K8=E;if(this.L6===false)A.pe([this,this.U$],this);A.abo([this,this.Ss,this.Lm],0
);},St:function(E){if(this.GA===E)return;this.GA=E;if(this.L6===false)A.pe([this
,this.U$],this);A.abo([this,this.AbI,this.St],0);},U$:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqc(this.K8),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Ps,2,10))+A.abm(this.GA,8,10);var BQ=this.AM;this.BC(A.ab0(aString
,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},AfU:function(G){var F;if((!this.Ia||!this.A0)||!this.AF)return;if(!(F=this.
Ia,F[1].call(F[0])))this.AV.AEr(true);else this.AV.AEr(false);},Ew:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L6===false)A.pe([this,this.
U$],this);A.abo([this,this.PL,this.Ew],0);},Ahb:function(E){if(this.Ps===E)return;
this.Ps=E;if(this.L6===false)A.pe([this,this.U$],this);A.abo([this,this.Am$,this.
Ahb],0);},BAp:function(G){var F;if(!!this.JB){var H7=(F=this.JB,F[1].call(F[0]));
var A0N=0;switch(H7){case 0:case 1:A0N=0;break;case 2:A0N=1;break;default:A.ab5(
"%s%e",AkU,H7);}this.Ew(A0N);}if(!this.Ps)this.Es(4);else this.Es(5);},Ss:function(
){return this.K8;},AbI:function(){return this.GA;},PL:function(){return this.AnimalType;
},Am$:function(){return this.Ps;},_Init:function(aArg){C.Eg._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.AQx._Init.call(this.AV={I:this},0);C.Avo.
_Init.call(this.Yo={I:this},0);C.Avo._Init.call(this.Kd={I:this},0);C.Ase._Init.
call(this.E2={I:this},0);C.IX._Init.call(this.IX={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARf;var B;this.Ry=5;this.AV.H(
Bqt);this.Yo.H(Bqu);this.Yo.E4(2);this.Kd.H(Bqv);this.Kd.E4(16);this.E2.H(A$P);this.
IX.H(A$Q);this.J(this.AV,0);this.J(this.Yo,0);this.J(this.Kd,0);this.J(this.E2,0
);this.J(this.IX,0);this.C6.AEx([this,this.Ss,this.Lm]);this.AV.As([this,this.AbI
,this.St]);this.Yo.As([this,this.PL,this.Ew]);this.Kd.As([this,this.Am$,this.Ahb
]);this.E2.CJ(this.C6);this.E2.As([B=this.C6,B.B$,B.Ca]);this.IX.A9s([B=A._GetAutoObject(
A.Device.Device),B.AvL,B.Aye]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.C6._Done();this.AV._Done();this.Yo._Done();this.Kd._Done();this.E2._Done(
);this.IX._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.C6._ReInit(
);this.AV._ReInit();this.Yo._ReInit();this.Kd._ReInit();this.E2._ReInit();this.IX.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Eg._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Eg={AM:0,AvW:null,OE:null,
Q:null,Eu:null,A0:null,AF:null,Ia:null,N:null,JB:null,Fe:null,E3:null,ACl:0,LO:0
,A9:0,Ry:0,Ae7:true,Init:function(aArg){A.pe([this,this.LL],this);},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(!this.A9)this.Bb(null);},BlN:function(E){if(this.
ACl===E)return;this.ACl=E;this.An();},Wj:function(E){if(this.LO===E)return;this.
LO=E;this.An();},DG:function(G){A.ab5("%s",AkV);},MF:function(s){this.DG(s);},Es:
function(EJ){A.pe([this,this.MF],this);A.pe(this.AvW,this);if(!EJ)A.pe(this.OE,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);}
,C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));},BC:function(
E){A.ab5("%s",Aof);},On:function(G){if(this.A9>1)this.Es(this.A9-1);},MU:function(
G){if((this.A9>0)&&(this.A9<this.Ry))this.Es(this.A9+1);},Ud:function(E){if(A.aaZ(
this.Eu,E))return;if(!!this.Eu)A.z$([this,this.AZ1],this.Eu,0);this.Eu=E;if(!!E)
A.zX([this,this.AZ1],this.Eu,0);A.pe([this,this.AZ1],this);},Ao6:function(G){},AZ1:
function(s){this.Ao6(s);},PM:function(E){if(A.aaZ(this.A0,E))return;if(!!this.A0
)A.z$([this,this.AZ5],this.A0,0);this.A0=E;if(!!E)A.zX([this,this.AZ5],E,0);if(!
!E)A.pe([this,this.AZ5],this);},QY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.AZ7],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AZ7],E,0);if(
!!E)A.pe([this,this.AZ7],this);},Aaq:function(G){},AZ7:function(s){this.Aaq(s);}
,Aap:function(G){},AZ5:function(s){this.Aap(s);},Ub:function(E){if(A.aaZ(this.Ia
,E))return;if(!!this.Ia)A.z$([this,this.AZ4],this.Ia,0);this.Ia=E;if(!!E)A.zX([this
,this.AZ4],E,0);if(!!E)A.pe([this,this.AZ4],this);},AlD:function(G){},AZ4:function(
s){this.AlD(s);},FN:function(G){A.ab5("%s",A$R);},BFu:function(s){this.FN(s);},G7:
function(G){this.Es(0);},AjB:function(){A.ab5("%s",Aof);return 0;},AjD:function(
){A.ab5("%s",Aof);return 0;},LL:function(G){},Ane:function(E){if(A.aaZ(this.JB,E
))return;if(!!this.JB)A.z$([this,this.AoF],this.JB,0);this.JB=E;if(!!E)A.zX([this
,this.AoF],this.JB,0);A.pe([this,this.AoF],this);},AoF:function(G){},AEL:function(
E){if(A.aa0(this.OE,E))return;this.OE=E;},AFf:function(E){if(this.Ae7===E)return;
this.Ae7=E;this.An();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BL._Init.call(this.Fe={I:this},0);A.Core.BL._Init.call(this.E3={I:this},0);this.
__proto__=C.Eg;this.H(Asz);this.ACl=A.jb.Text;this.LO=A.jb.C2;this.Fe.Filter=6;this.
E3.Filter=7;this.Fe.BM=[this,this.On];this.E3.BM=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.Fe._Done();this.E3._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Fe._ReInit(
);this.E3._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AvW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OE)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A0)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ia)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JB)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q5={AM:0,Dm:null,FB:
null,OE:null,Eu:null,A0:null,AF:null,Ia:null,Q:null,JB:null,ADR:-1,Ae7:true,ANA:
false,ATp:false,ArS:true,Init:function(aArg){A.pe([this,this.AAW],this);},Ai:function(
Ae){C.Ec.Ai.call(this,Ae);if(!this.Dm)return;if(this.Dm.A9>0){if(this.Hc){this.Dm.
Wj(A.jb.CI);this.Background.L(A.jb.C2);this.V.L(A.jb.Text);}else{this.Dm.Wj(A.jb.
C2);this.Background.L(A.jb.CI);this.V.L(A.jb.Text);}}else{if(this.Hc)this.Dm.Wj(
A.jb.CI);else this.Dm.Wj(A.jb.C2);this.Dm.BlN(this.V.AQ);}},IO:function(G){C.Ec.
IO.call(this,G);if(!this.Dm)return;if(!this.Dm.A9)this.FN(this);else this.G7(this
);},Gi:function(E){C.Ec.Gi.call(this,E);if(!!this.Dm)this.Dm.N=E;},Ud:function(E
){if(A.aaZ(this.Eu,E))return;if(!!this.Eu)A.z$([this,this.Ao6],this.Eu,0);this.Eu=
E;if(!!E)A.zX([this,this.Ao6],this.Eu,0);A.pe([this,this.Ao6],this);},Ao6:function(
G){if(!!this.Dm)this.Dm.Ud(this.Eu);},PM:function(E){if(A.aaZ(this.A0,E))return;
this.A0=E;if(!!this.Dm)this.Dm.PM(E);},QY:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dm)this.Dm.QY(E);},Ub:function(E){if(A.aaZ(this.Ia,E))return;
this.Ia=E;if(!!this.Dm)this.Dm.Ub(E);},BAW:function(G){var AzW=0;if(!!this.Dm){AzW=
this.Dm.A9;this.Dm.N=null;this.HJ(this.Dm);}switch(this.ADR){case 0:this.Dm=A._NewObject(
C.Aey,0);break;case 1:this.Dm=A._NewObject(C.ARg,0);break;case 2:this.Dm=A._NewObject(
C.ARf,0);break;case 3:this.Dm=A._NewObject(C.ATr,0);break;case 4:this.Dm=A._NewObject(
C.ATq,0);break;case 5:this.Dm=A._NewObject(C.ARh,0);break;default:throw new Error(
Bqw+this.ADR.toFixed());}this.J(this.Dm,0);this.Dm.Ane(this.JB);this.Dm.H(Bqx);this.
Dm.N=this.N;this.Dm.Ud(this.Eu);this.Dm.AvW=[this,this.AvW];this.Dm.As([this,this.
Ua,this.BC]);this.Dm.Ub(this.Ia);this.Dm.PM(this.A0);this.Dm.QY(this.AF);this.Dm.
AEL(this.OE);this.Dm.AFf(this.Ae7);if(AzW>0)this.Dm.Es(AzW);this.Bb(this.Dm);this.
An();},FN:function(G){var B;var F;if(!!this.Dm){if(!!this.N)this.FB.Ajm((F=this.
N,F[1].call(F[0])));else this.FB=A._NewObject(C.Ad_,0);this.Dm.FN(this);}},G7:function(
G){var B;if(!!this.Dm)this.Dm.G7(this);},AjB:function(){if(!this.Dm)return 0;return this.
Dm.AjB();},AjD:function(){if(!this.Dm)return 0;return this.Dm.AjD();},C3:function(
G){var F;if(!!this.Q){this.BC((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ua,this.
BC],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],
this);},BC:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.AAW],this);},Bmo:function(
E){if(this.ADR===E)return;this.ADR=E;A.pe([this,this.BAW],this);},Ary:function(E
){if(this.ArS===E)return;this.ArS=E;A.pe([this,this.AAW],this);},AAW:function(G){
var Apf;if(this.ArS){if(this.ANA)Apf=5;else Apf=0;}else if(this.ATp){if(A._GetAutoObject(
A.Device.Converter).ZG(this.AM)===10)Apf=4;else Apf=3;}else if(A._GetAutoObject(
A.Device.Converter).ZG(this.AM)===10)Apf=2;else Apf=1;this.Bmo(Apf);},AvW:function(
G){var F;if((!!this.N&&!!this.Dm)&&!this.Dm.A9)this.FB.Aky((F=this.N,F[1].call(F[
0])));this.An();},Ane:function(E){if(A.aaZ(this.JB,E))return;if(!!this.JB)A.z$([
this,this.AoF],this.JB,0);this.JB=E;if(!!E)A.zX([this,this.AoF],this.JB,0);A.pe([
this,this.AoF],this);},AoF:function(G){if(!!this.Dm)this.Dm.Ane(this.JB);},A9U:function(
E){if(this.ATp===E)return;this.ATp=E;A.pe([this,this.AAW],this);},Blj:function(E
){if(this.ANA===E)return;this.ANA=E;A.pe([this,this.AAW],this);},AEL:function(E){
if(A.aa0(this.OE,E))return;this.OE=E;if(!!this.Dm)this.Dm.AEL(E);},AFf:function(
E){if(this.Ae7===E)return;this.Ae7=E;if(!!this.Dm)this.Dm.AFf(E);},Ua:function(){
return this.AM;},_Init:function(aArg){C.Ec._Init.call(this,aArg);this.__proto__=
C.Q5;this.H(UN);this.V.R(AsH);this.V.L(A.jb.Bm);this.FB=A._NewObject(C.Ad_,0);this.
Init(aArg);},_Mark:function(D){var B;C.Ec._Mark.call(this,D);if((B=this.Dm)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A0)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ia
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQx={EO:null,FS:null,Ek:null,Du:null,CU:null
,Cr:null,FF:function(E){if(this.M4===E)return;C.Le.FF.call(this,E);this.Cr.CX(E);
this.CU.CX(E);this.Du.CX(E);this.Ek.CX(E);this.FS.CX(E);this.EO.CX(E);},Yd:function(
Ht){var B6=null;switch(Ht){case-1:case 0:B6=this.FT;break;case 1:B6=this.Cr;break;
case 2:B6=this.CU;break;case 3:B6=this.Du;break;case 4:B6=this.Ek;break;case 5:B6=
this.FS;break;case 6:B6=this.EO;break;case 7:B6=this.GQ;break;default:A.ab5("%s"
,AhM);}return B6;},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DB._Init.call(
this.EO={I:this},0);C.DB._Init.call(this.FS={I:this},0);C.DB._Init.call(this.Ek={
I:this},0);C.DB._Init.call(this.Du={I:this},0);C.DB._Init.call(this.CU={I:this},
0);C.DB._Init.call(this.Cr={I:this},0);this.__proto__=C.AQx;this.H(Bqy);this.GQ.
H(AH9);this.EO.H(Ax9);this.FS.H(AZm);this.Ek.H(AZn);this.Du.H(AZo);this.CU.H(AZp
);this.Cr.H(AZq);this.FT.H(AZr);this.EH.H(A$O);this.J(this.EO,-2);this.J(this.FS
,-2);this.J(this.Ek,-2);this.J(this.Du,-2);this.J(this.CU,-2);this.J(this.Cr,-2);
this.EO.Dk=[this,this.GK];this.FS.Dk=[this,this.GK];this.Ek.Dk=[this,this.GK];this.
Du.Dk=[this,this.GK];this.CU.Dk=[this,this.GK];this.Cr.Dk=[this,this.GK];},_Done:
function(){this.__proto__=C.Le;this.EO._Done();this.FS._Done();this.Ek._Done();this.
Du._Done();this.CU._Done();this.Cr._Done();C.Le._Done.call(this);},_ReInit:function(
){C.Le._ReInit.call(this);this.EO._ReInit();this.FS._ReInit();this.Ek._ReInit();
this.Du._ReInit();this.CU._ReInit();this.Cr._ReInit();},_Mark:function(D){var B;
C.Le._Mark.call(this,D);if((B=this.EO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Du)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.Avo={Q:null,GQ:null,FT:null,EH:null,Ii:null,Ih:null,M4:0,Uk:0,AM:0,FV:99,Init:
function(aArg){A.pe([this,this.LL],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.EH.Y(false);this.EH.H(A.wC(this.Yd(0).M,this.Yd(-1).M));var Ir=((Ae&
0x40)===0x40);if(Ir){this.Bfp(A.jb.AW);this.Bfq(A.jb.Bm);}else{this.Bfp(this.M4);
this.Bfq(A.jb.Text);}this.Al1();},FF:function(E){if(this.M4===E)return;this.M4=E;
this.An();},LL:function(G){},Yd:function(Ht){var B6=null;switch(Ht){case-1:case 0:
B6=this.FT;break;case 1:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;},Kh:
function(E){if(this.Uk===E)return;this.Uk=E;this.Al1();},Al1:function(){var B;var
F;if(!!this.Q){var DT=this.FT;var Adj=this.Uk;var A6=(F=this.Q,F[1].call(F[0]));
while(!!DT){if(A6>0){DT.LW(A6%10);A6=(A6/10)|0;}else if(Adj>0)DT.LW(0);else DT.LW(-
1);DT=(C.E1.isPrototypeOf(B=this.Aqo(DT,0x11))?B:null);Adj=Adj-1;}}},AfX:function(
G){var F;var BQ=this.AM;this.BC(this.AM+1);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},AfW:function(G){var F;var BQ=this.
AM;this.BC(this.AM-1);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3
],this);},BC:function(E){if(E<0)E=0;if(E>this.FV)E=this.FV;if(this.AM===E)return;
this.AM=E;this.An();},E4:function(E){if(this.FV===E)return;this.FV=E;this.An();}
,Bfp:function(aColor){this.FT.CX(aColor);this.GQ.CX(aColor);},Bfq:function(aColor
){this.FT.AeH(aColor);this.GQ.AeH(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.E1._Init.call(this.GQ={I:this},0);C.E1._Init.call(this.FT={I:this
},0);A.acg.CC._Init.call(this.EH={I:this},0);A.Core.BL._Init.call(this.Ii={I:this
},0);A.Core.BL._Init.call(this.Ih={I:this},0);this.__proto__=C.Avo;this.H(Bqz);this.
M4=A.jb.CI;this.GQ.H(AH9);this.FT.H(Ax9);this.EH.H(Ax9);this.EH.NY(2);this.EH.L(
A.jb.EV);this.Ii.Filter=4;this.Ih.Filter=5;this.J(this.GQ,0);this.J(this.FT,0);this.
J(this.EH,0);this.Ii.BM=[this,this.AfX];this.Ii.DX=[this,this.AfX];this.Ih.BM=[this
,this.AfW];this.Ih.DX=[this,this.AfW];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.GQ._Done();this.FT._Done();this.EH._Done();this.Ii._Done();this.Ih.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.GQ._ReInit();this.FT._ReInit();this.EH._ReInit();this.Ii._ReInit();this.Ih.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.E1={Agq:
null,Background:null,Text:null,E1:-1,MZ:0,Amw:0,Ap7:false,Ai:function(Ae){A.Core.
O.Ai.call(this,Ae);if(this.E1<0)this.Text.R(Rg);else this.Text.R(this.E1.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.Amw);},LW:function(E){if(this.E1===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.E1=B6;this.An();},CX:function(E){
if(this.MZ===E)return;this.MZ=E;this.An();},AeE:function(E){if(this.Ap7===E)return;
this.Ap7=E;this.Agq.Ar(E);if(E===false)this.Text.Y(true);},AeH:function(E){if(this.
Amw===E)return;this.Amw=E;this.An();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acl.Tz._Init.call(this.Agq={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.E1;var B;
this.H(AsR);this.MZ=A.jb.CI;this.Agq.Fi(750);this.Agq.Ue(750);this.Agq.Akj(750);
this.Amw=A.jb.Text;this.Background.A3(0x3);this.Background.H(AsR);this.Text.A3(0x3
);this.Text.H(AsR);this.Text.R(Rg);this.J(this.Background,0);this.J(this.Text,0);
this.Agq.Q=[B=this.Text,B.Fh,B.Y];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.O;this.Agq._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Agq._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Agq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fs={Z:null,IT:null,ANI:A.jV,ARv:A.jV,S7:0,AJd:0,A1r:false,A0Z:false,Init:function(
aArg){},CA:function(G){var B;C.AB.CA.call(this,G);A.zX([this,this.AAR],[B=A._GetAutoObject(
A.Device.Device).Ao,B.Fg,B.Fk],0);A.zX([this,this.MF],[B=A._GetAutoObject(A.Device.
Device).Ao,B.Fg,B.Fk],0);A.pe([this,this.AAR],this);A.pe([this,this.MF],this);},
EX:function(G){var B;C.AB.EX.call(this,G);A.z$([this,this.AAR],[B=A._GetAutoObject(
A.Device.Device).Ao,B.Fg,B.Fk],0);},Bw4:function(L3){A._GetAutoObject(A.Device.Helper
).HH(L3);this.ApN(A._GetAutoObject(A.Device.Device).Bu,A._GetAutoObject(A.Device.
Helper).W.Id);},ApN:function(LY,AcG){A.ab5("%s",AkV);},U6:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.Bx2],this);else if(!!At&&(At.PopupState===5)){this.A0Z=true;this.Er(this
);}},Bx2:function(G){if(this.S7>0){this.A0Z=false;this.Ac9(this);this.A_h(0);}},
Aig:function(G){if((this.AJd+1)<this.S7)this.A_h(this.AJd+1);else A.aaS([this,this.
BvD],this);},BvE:function(s){this.Aig(s);},A_h:function(E){this.AJd=E;if(this.A0Z===
false){this.Bw4(E);A.aaS([this,this.BvE],this);var Xu=(this.AJd/this.S7)*100;A._GetAutoObject(
A.Device.Device).A_(49,true,A.abk(Xu,0,0),0,[this,this.U6]);}},Aaa:function(G){A.
_GetAutoObject(A.Device.Device).A_(49,false,BqA,0,[this,this.U6]);this.A1r=true;
A.pe([this,this.AKQ],this);},BvD:function(s){this.Aaa(s);},Ac9:function(G){this.
IT.Y(true);this.A1r=false;this.AKQ(this);},BFp:function(s){this.Ac9(s);},Az$:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6k();A._GetAutoObject(A.Device.Device
).Ao.Bl(Be);},Er:function(G){A._GetAutoObject(C.A1).Fr();},A22:function(G){A._GetAutoObject(
C.A1).BU(95);},DG:function(G){this.N.Y(true);this.N.CY(A.aaL(A.ach.EW));this.N.Cz=[
this,this.Er];this.N.Cp(A.aaL(A.ach.AC_));if(!A._GetAutoObject(A.Device.Device).
Ao.Filter||A._GetAutoObject(A.Device.Helper).AqP(A._GetAutoObject(A.Device.Device
).Ao.Filter)){this.N.Cj=null;this.N.IW.Do(100);}else{this.N.Cj=[this,this.Az$];this.
N.IW.Do(255);}this.N.C5(A.aaL(A.ach.Aeg));this.N.Cf=[this,this.A22];},MF:function(
s){this.DG(s);},AAR:function(G){this.S7=A._GetAutoObject(A.Device.Device).Ao.Cd(
);if(this.S7>0)A._GetAutoObject(A.Device.Device).A_(49,true,UO,0,[this,this.U6]);
else{this.Ac9(this);this.Aaa(this);}},Akh:function(E){if(this.ANI===E)return;this.
ANI=E;A.pe([this,this.AKQ],this);},AKQ:function(G){var B;if(this.A1r===false){this.
IT.R(A.jV);return;}var AoT;if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){var Ac3=
A._GetAutoObject(A.Device.Device).Ao.Filter;A.z$([this,this.AAR],[B=A._GetAutoObject(
A.Device.Device).Ao,B.Fg,B.Fk],0);this.Az$(this);if(!A._GetAutoObject(A.Device.Device
).Ao.QB()||!Ac3)AoT=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACu(A._GetAutoObject(A.Device.Device).Ao.Filter)===1)AoT=A.aaR(
A.acf.ANC);else AoT=A.aaR(A.acf.ANB);A._GetAutoObject(A.Device.Device).Ao.Bl(Ac3
);A.zX([this,this.AAR],[B=A._GetAutoObject(A.Device.Device).Ao,B.Fg,B.Fk],0);}else
AoT=this.ARv;AoT=AoT+(AZt+this.ANI);this.IT.R(AoT);},AeP:function(E){if(this.ARv===
E)return;this.ARv=E;A.pe([this,this.AKQ],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Akz._Init.call(this.IT={
I:this},0);this.__proto__=C.Fs;this.Dn(C.Abc);this.Z.H(E7);this.Z.Kg(1);this.IT.
H(E7);this.J(this.Z,0);this.J(this.IT,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Z._Done();this.IT._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Z._ReInit();this.IT._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A6U={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6U;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.Avq={KX:null,MS:null,AY:0,X5:function(){this.KX=null;this.MS=null;this.AY=0;
},Ot:function(A6){var G_;G_=A._NewObject(C.A6U,0);G_.A5=A6;if(!this.KX){this.KX=
G_;this.MS=G_;this.AY=1;}else{this.MS.Ah=G_;this.MS=G_;this.AY=this.AY+1;}},AmE:
function(){var B;var RB=0;var Og=this.KX;while(!!Og){RB+=Og.A5;Og=Og.Ah;}return RB;
},AjC:function(){if(!this.AY)return 0;return this.AmE()/this.AY;},Aqx:function(){
var B;if(!this.AY)return 0;var A0T=this.AjC();var Ac0=0;var Og=this.KX;while(!!Og
){Ac0+=Math.pow(Og.A5-A0T,2);Og=Og.Ah;}Ac0/=this.AY;Ac0=Math.sqrt(Ac0);return Ac0;
},_Init:function(aArg){this.__proto__=C.Avq;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.ANJ={FW:null,Aec:null,Ya:null,DR:null,IT:null,
CS:function(){this.A30(this);},Init:function(aArg){A.zV([this,this.A30],A._GetAutoObject(
A.Device.Device).Pk,0);A.pe([this,this.A30],this);},Er:function(G){A._GetAutoObject(
C.A1).Fr();},A30:function(G){this.Ya.Ce(-1);this.IT.Y(!this.FW.AX.Cd());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.FW._Init.call(this.FW={I:this},0);C.
Aec._Init.call(this.Aec={I:this},0);C.Ya._Init.call(this.Ya={I:this},0);A.acg.DR.
_Init.call(this.DR={I:this},0);C.Akz._Init.call(this.IT={I:this},0);this.__proto__=
C.ANJ;this.N.Y(true);this.Dn(C.AOH);this.FW.H(AsJ);this.FW.NV(C.Amv);this.Aec.H(
JS);this.Ya.H(AsA);this.DR.DI(BqB);this.DR.DY(BqC);this.DR.NY(3);this.DR.L(A.jb.
Text);this.IT.H(An5);this.IT.R((A.aaR(A.acf.A7E)+AZt)+A.aaR(A.acf.A5Y));this.J(this.
FW,0);this.J(this.Aec,0);this.J(this.Ya,0);this.J(this.DR,0);this.J(this.IT,0);this.
N.Cz=[this,this.Er];this.N.CY(A.aaL(A.ach.EW));this.FW.Za(A._GetAutoObject(A.Device.
Device).Pk);this.Ya.Za(A._GetAutoObject(A.Device.Device).Pk);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.FW._Done();this.Aec._Done();this.Ya._Done();
this.DR._Done();this.IT._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.FW._ReInit();this.Aec._ReInit();this.Ya._ReInit();this.DR.
_ReInit();this.IT._ReInit();this.IT.R((A.aaR(A.acf.A7E)+AZt)+A.aaR(A.acf.A5Y));this.
CS();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FW)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.ANM={AtK:null,AtJ:null,AtM:null,AtL:null,AtO:null,AtN:null,AtQ:null,AtP:null
,Aas:null,Yi:null,Aa5:null,Aa4:null,RatedAttribute:0,Init:function(aArg){this.Sv(
2);},Dz:function(G){var D1=(A.Core.BL.isPrototypeOf(G)?G:null);switch(D1.CN){case
6:switch(this.RatedAttribute){case 2:this.Sv(3);break;case 1:this.Sv(2);break;case
4:this.Sv(1);break;case 3:this.Sv(4);break;default:this.Sv(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sv(1);break;case 1:this.Sv(4);break;case 4:this.
Sv(3);break;case 3:this.Sv(2);break;default:this.Sv(0);}break;default:D1.NC=true;
}},ApN:function(LY,AcG){if(!LY)return;var Fp=A._NewObject(A.Device.Filter,0);var
HR=A._NewObject(A.Device.Int32FilterCriterion,0);HR.Initialize(1,0,AcG,true);Fp.
CV(HR);var AAr=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAr.Initialize(
3,5,0,true);Fp.CV(AAr);LY.Bl(Fp);},Aig:function(G){var ApL=0;var A3j=A._GetAutoObject(
A.Device.Device).Bu.Cd();var B1=A._NewObject(A.Device.Rating,0);while(ApL<A3j){B1.
EG(ApL,A._GetAutoObject(A.Device.Device).Bu);this.BcQ(B1,0);var BBe=A._GetAutoObject(
A.Device.Helper).Zw(2);this.BcQ(B1,BBe);ApL++;}C.Fs.Aig.call(this,G);},Aaa:function(
G){A.pe([this,this.Bct],this);C.Fs.Aaa.call(this,G);},Ac9:function(G){this.AtK=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.AtJ=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.AtL=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtM=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.AtN=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.AtO=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtP=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.AtQ=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fs.Ac9.
call(this,G);},DG:function(G){C.Fs.DG.call(this,G);this.N.OM(true);this.N.ON(true
);},BcQ:function(DZ,Bbr){if(!DZ||(DZ.Timestamp<Bbr))return;if(!Bbr){this.AtK.Set(
DZ.Appearance,this.AtK.Get(DZ.Appearance)+1);this.AtM.Set(DZ.Faeces,this.AtM.Get(
DZ.Faeces)+1);this.AtO.Set(DZ.Feed,this.AtO.Get(DZ.Feed)+1);this.AtQ.Set(DZ.Respiratory
,this.AtQ.Get(DZ.Respiratory)+1);}else{this.AtJ.Set(DZ.Appearance,this.AtJ.Get(DZ.
Appearance)+1);this.AtL.Set(DZ.Faeces,this.AtL.Get(DZ.Faeces)+1);this.AtN.Set(DZ.
Feed,this.AtN.Get(DZ.Feed)+1);this.AtP.Set(DZ.Respiratory,this.AtP.Get(DZ.Respiratory
)+1);}},Sv:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yi.Kl(this.Aas.Lr(E));A.pe([this,this.Bct],this);},Bct:function(G){var Aat=null;
var Aau=null;switch(this.RatedAttribute){case 2:{Aat=this.AtJ;Aau=this.AtK;}break;
case 4:{Aat=this.AtL;Aau=this.AtM;}break;case 1:{Aat=this.AtN;Aau=this.AtO;}break;
case 0:{Aat=A._NewObject(A.Device.Int32ArrayWrapper,0);Aau=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{Aat=this.AtP;Aau=this.AtQ;}break;default:throw new
Error(BqD+this.RatedAttribute.toFixed());}var AFU=A._NewObject(A.acu.ATK,0);AFU.
Ot(Aat.Get(3),A.jb.EV);AFU.Ot(Aat.Get(2),A.jb.H2);AFU.Ot(Aat.Get(1),A.jb.F$);var
AFV=A._NewObject(A.acu.ATK,0);AFV.Ot(Aau.Get(3),A.jb.EV);AFV.Ot(Aau.Get(2),A.jb.
H2);AFV.Ot(Aau.Get(1),A.jb.F$);this.Aa4.AbU(AFU);this.Aa5.AbU(AFV);var A3L=Aat.AmE(
)-Aat.Get(5);var BeY=0;var BeW=0;if(A3L>0){BeY=(Aat.Get(2)/A3L)*100;BeW=(Aat.Get(
1)/A3L)*100;}var AKE=Aau.AmE()-Aau.Get(5);this.IT.Y(!AKE);var BeZ=0;var BeX=0;if(
AKE>0){BeZ=(Aau.Get(2)/AKE)*100;BeX=(Aau.Get(1)/AKE)*100;}this.Aa4.A_f(A.abk(BeY
,0,0)+Afq);this.Aa4.A9W(A.abk(BeW,0,0)+Afq);this.Aa5.A_f(A.abk(BeZ,0,0)+Afq);this.
Aa5.A9W(A.abk(BeX,0,0)+Afq);},_Init:function(aArg){C.Fs._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.Aas={I:this},0);C.Nz._Init.call(this.
Yi={I:this},0);C.ACb._Init.call(this.Aa5={I:this},0);C.ACb._Init.call(this.Aa4={
I:this},0);this.__proto__=C.ANM;this.Dn(C.AOI);this.Akh(A.aaR(A.acf.A5Z));this.AeP(
A.aaR(A.acf.Am7));this.Yi.H(JS);this.Yi.Aj(true);this.Yi.T(A.aaR(A.acf.AwX)+A.aaR(
A.acf.Colon));this.Yi.Bi(false);this.Yi.Bmm(false);this.Aa5.H(BqE);this.Aa5.T(A.
aaR(A.acf.AFF));this.Aa4.H(BqF);this.Aa4.T(A.aaR(A.acf.A63));this.IT.H(An5);this.
J(this.Yi,-1);this.J(this.Aa5,-1);this.J(this.Aa4,-1);this.AtK=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.AtJ=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtM=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtL=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.AtO=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtN=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.AtQ=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.AtP=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fs;this.Aas._Done();this.Yi._Done();this.Aa5._Done();this.Aa4.
_Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Aas._ReInit();this.Yi._ReInit();this.Aa5._ReInit();this.Aa4._ReInit();this.Akh(A.
aaR(A.acf.A5Z));this.AeP(A.aaR(A.acf.Am7));this.Yi.T(A.aaR(A.acf.AwX)+A.aaR(A.acf.
Colon));this.Aa5.T(A.aaR(A.acf.AFF));this.Aa4.T(A.aaR(A.acf.A63));},_Mark:function(
D){var B;C.Fs._Mark.call(this,D);if((B=this.AtK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AtJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtM)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AtL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AtO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtN)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AtQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AtP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aas)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.ANN={Aeb:null,UE:null,UF:null,Aea:null,UB:null,UC:null,AJf:0,AJe:0,AIV:0,AIU:
0,Ac2:false,CS:function(){this.Aaa(this);},ApN:function(LY,AcG){if(!LY)return;var
Fp=A._NewObject(A.Device.Filter,0);var HR=A._NewObject(A.Device.Int32FilterCriterion
,0);HR.Initialize(1,0,AcG,true);Fp.CV(HR);var AAK=A._NewObject(A.Device.Int32FilterCriterion
,0);AAK.Initialize(7,2,0,true);Fp.CV(AAK);LY.Bl(Fp);},Aig:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJf++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJe++;var ApL=0;var A3j=A._GetAutoObject(
A.Device.Device).Bu.Cd();var AtI;var AA2=0;while(ApL<A3j){this.Ac2=true;AtI=A._GetAutoObject(
A.Device.Device).Bu.IU(ApL,9);if(AtI===1)AA2=1;else if((AtI===2)&&(AA2!==1))AA2=
2;ApL++;}if(AA2===1)this.AIU++;else if(AA2===2)this.AIV++;C.Fs.Aig.call(this,G);
},Aaa:function(G){var BeU=0;var BeV=0;if(this.S7>0){BeU=(this.AJf/this.S7)*100;BeV=(
this.AJe/this.S7)*100;}this.UE.Kl(((((((A.abk(BeU,0,0)+AH_)+this.AJf.toFixed())+
CO)+A.aaR(A.acf.ADX))+CO)+this.S7.toFixed())+O3);this.UF.Kl(((((((A.abk(BeV,0,0)+
AH_)+this.AJe.toFixed())+CO)+A.aaR(A.acf.ADX))+CO)+this.S7.toFixed())+O3);var BeS=
0;var BeT=0;if(this.S7>0){BeS=(this.AIV/this.S7)*100;BeT=(this.AIU/this.S7)*100;
}this.UB.Kl(((((((A.abk(BeS,0,0)+AH_)+this.AIV.toFixed())+CO)+A.aaR(A.acf.ADX))+
CO)+this.S7.toFixed())+O3);this.UC.Kl(((((((A.abk(BeT,0,0)+AH_)+this.AIU.toFixed(
))+CO)+A.aaR(A.acf.ADX))+CO)+this.S7.toFixed())+O3);this.IT.Y(!this.Ac2);C.Fs.Aaa.
call(this,G);},Ac9:function(G){this.AIU=0;this.AIV=0;this.AJe=0;this.AJf=0;this.
Ac2=false;C.Fs.Ac9.call(this,G);},_Init:function(aArg){C.Fs._Init.call(this,aArg
);C.Agg._Init.call(this.Aeb={I:this},0);C.Aje._Init.call(this.UE={I:this},0);C.Aje.
_Init.call(this.UF={I:this},0);C.Agg._Init.call(this.Aea={I:this},0);C.Aje._Init.
call(this.UB={I:this},0);C.Aje._Init.call(this.UC={I:this},0);this.__proto__=C.ANN;
this.Dn(C.AOJ);this.Akh(A.aaR(A.acf.A50));this.AeP(A.aaR(A.acf.Aq4));this.Aeb.H(
JS);this.Aeb.Aj(true);this.Aeb.T(A.aaR(A.acf.A54));this.Aeb.Bi(false);this.UE.H(
P4);this.UE.Aj(true);this.UE.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UE.
Bi(true);this.UE.Akm(2);this.UF.H(ZZ);this.UF.Aj(true);this.UF.T(A.aaR(A.acf.Au7
)+A.aaR(A.acf.Colon));this.UF.Bi(true);this.UF.Akm(1);this.Aea.H(AkW);this.Aea.Aj(
true);this.Aea.T(A.aaR(A.acf.A55));this.Aea.Bi(false);this.UB.H(An8);this.UB.Aj(
true);this.UB.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UB.Bi(true);this.
UB.Akm(2);this.UC.H(AsA);this.UC.Aj(true);this.UC.T(A.aaR(A.acf.Au7)+A.aaR(A.acf.
Colon));this.UC.Bi(true);this.UC.Akm(1);this.J(this.Aeb,0);this.J(this.UE,0);this.
J(this.UF,0);this.J(this.Aea,0);this.J(this.UB,0);this.J(this.UC,0);this.UE.S(A.
aaL(A.fl.Ak));this.UF.S(A.aaL(A.fl.Ak));this.UB.S(A.aaL(A.fl.Ak));this.UC.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fs;this.Aeb._Done();this.UE._Done(
);this.UF._Done();this.Aea._Done();this.UB._Done();this.UC._Done();C.Fs._Done.call(
this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Aeb._ReInit();this.UE._ReInit(
);this.UF._ReInit();this.Aea._ReInit();this.UB._ReInit();this.UC._ReInit();this.
Akh(A.aaR(A.acf.A50));this.AeP(A.aaR(A.acf.Aq4));this.Aeb.T(A.aaR(A.acf.A54));this.
UE.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UF.T(A.aaR(A.acf.Au7)+A.aaR(
A.acf.Colon));this.Aea.T(A.aaR(A.acf.A55));this.UB.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UC.T(A.aaR(A.acf.Au7)+A.aaR(A.acf.Colon));this.UE.S(A.aaL(A.fl.
Ak));this.UF.S(A.aaL(A.fl.Ak));this.UB.S(A.aaL(A.fl.Ak));this.UC.S(A.aaL(A.fl.Ak
));this.CS();},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Aeb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aea)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.Aqn={K5:null
,Ai4:null,Ai5:null,Al2:null,Abg:null,WJ:null,Abd:null,SR:null,Abe:null,SS:null,Abh:
null,WK:null,Ay:null,AcX:0,AzX:0,Apa:0,A14:0,Bdk:0,CS:function(){this.Aaa(this);
},Dz:function(G){switch(this.Co.CN){case 4:{if(this.IT.Fh())return;var Qp=this.Z.
Bt[1]+80;this.Z.Gj([this.Z.Bt[0],Qp]);this.Z.Vi(null,null);}break;case 5:{if(this.
IT.Fh())return;var Qp=this.Z.Bt[1]-80;this.Z.Gj([this.Z.Bt[0],Qp]);this.Z.Vi(null
,null);}break;default:C.Fs.Dz.call(this,G);}},ApN:function(LY,AcG){if(!LY)return;
var Fp=A._NewObject(A.Device.Filter,0);var HR=A._NewObject(A.Device.Int32FilterCriterion
,0);HR.Initialize(1,0,AcG,true);Fp.CV(HR);var AcT=A._NewObject(A.Device.Int32FilterCriterion
,0);AcT.Initialize(8,2,0,true);Fp.CV(AcT);LY.Bl(Fp);},Aig:function(G){if(this.Bda(
)){this.K5.Ot(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.AqQ()){var Qb=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qb>0){var A1D=A._GetAutoObject(A.acj.DS).Alc(Qb,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ai4.
Ot(A1D);}}var A2l=A._GetAutoObject(A.Device.Device).Bu.Cd()-2;if(A2l>=0){var By9=
A._GetAutoObject(A.Device.Device).Bu.ACv(A2l,8);var By8=A._GetAutoObject(A.Device.
Device).Bu.HB(A2l,6);var Qb=A._GetAutoObject(A.Device.Helper).MN(By8,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qb>0){var A1D=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-By9)/Qb)|0;this.Ai5.Ot(A1D);}}if((A._GetAutoObject(
A.Device.Helper).W.AqQ()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RF()<=180)){var AK1=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tg=A._GetAutoObject(A.Device.
Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAl=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(AK1/Tg);this.Al2.Ot(BAl);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.AcX++;this.Apa=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).Zw(7)){this.AzX++;this.A14=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bdk=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dw());}}C.Fs.Aig.call(
this,G);},Aaa:function(G){var A39=this.Ai4.AjC()|0;var A3$=this.Ai5.AjC()|0;if(this.
AcX>1)A._GetAutoObject(A.Device.Device).A_(56,true,this.AcX.toFixed(),0,null);if(
this.AcX===1)A._GetAutoObject(A.Device.Device).A_(53,true,this.Apa.toFixed(),0,null
);if(this.AzX>1)A._GetAutoObject(A.Device.Device).A_(52,true,this.AzX.toFixed(),
0,null);if(this.AzX===1)A._GetAutoObject(A.Device.Device).A_(57,true,(this.A14.toFixed(
)+AsG)+this.Bdk.toFixed(),0,null);if(this.K5.AY>0)this.WJ.T(((((((A._GetAutoObject(
A.Device.Converter).Axv(this.K5.AjC()|0,1)+Ax_)+A._GetAutoObject(A.Device.Converter
).Axv(this.K5.Aqx()|0,1))+CO)+A._GetAutoObject(A.acj.DS).AfN())+Ax$)+this.K5.AY.
toFixed())+O3);else this.WJ.T(A.aaR(A.acf.Unknown));if(this.Ai4.AY>0)this.SR.T(((((((
A._GetAutoObject(A.Device.Converter).SW(A39,2,true)+Ax_)+A._GetAutoObject(A.Device.
Converter).SW(this.Ai4.Aqx()|0,2,true))+CO)+A._GetAutoObject(A.acj.DS).Aaf())+Ax$
)+this.Ai4.AY.toFixed())+O3);else this.SR.T(A.aaR(A.acf.Unknown));if(this.Ai5.AY>
0)this.SS.T(((((((A._GetAutoObject(A.Device.Converter).SW(A3$,2,true)+Ax_)+A._GetAutoObject(
A.Device.Converter).SW(this.Ai5.Aqx()|0,2,true))+CO)+A._GetAutoObject(A.acj.DS).
Aaf())+Ax$)+this.Ai5.AY.toFixed())+O3);else this.SS.T(A.aaR(A.acf.Unknown));if(this.
Al2.AY>0)this.WK.T(((((((A.abk(this.Al2.AjC(),0,1)+Ax_)+A.abk(this.Al2.Aqx(),0,1
))+CO)+A.aaR(A.acf.Bg$))+Ax$)+this.Al2.AY.toFixed())+O3);else this.WK.T(A.aaR(A.
acf.Unknown));var A3_=0;var A4a=0;var Ac2=false;if(this.K5.AY>0)Ac2=true;var H7=
0;if(!!A._GetAutoObject(A.Device.Device).Ao.Filter){var AJy=A._GetAutoObject(A.Device.
Device).Ao.Filter.DN(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJy)?AJy:null))H7=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJy)?AJy:null
).A5;}if(this.Ai4.AY>0){Ac2=true;A3_=A._GetAutoObject(A.Device.Converter).A$w(A39
,H7);}if(this.Ai5.AY>0){Ac2=true;A4a=A._GetAutoObject(A.Device.Converter).A$w(A3$
,H7);}this.SR.Akm(A3_);this.SS.Akm(A4a);this.IT.Y(!Ac2);C.Fs.Aaa.call(this,G);},
Ac9:function(G){this.K5.X5();this.Ai4.X5();this.Ai5.X5();this.Al2.X5();this.AcX=
0;this.AzX=0;this.Apa=0;this.A14=0;C.Fs.Ac9.call(this,G);},Fa:function(G){var B;
this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.
Mt(-this.Z.Bt[1]);},Bda:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Agg._Init.call(this.Abg={I:
this},0);C.Iv._Init.call(this.WJ={I:this},0);C.Agg._Init.call(this.Abd={I:this},
0);C.Aje._Init.call(this.SR={I:this},0);C.Agg._Init.call(this.Abe={I:this},0);C.
Aje._Init.call(this.SS={I:this},0);C.Agg._Init.call(this.Abh={I:this},0);C.Iv._Init.
call(this.WK={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Aqn;
this.Dn(C.Au6);this.Akh(A.aaR(A.acf.A51));this.AeP(A.aaR(A.acf.Aj8));this.Abg.H(
AsO);this.Abg.Aj(true);this.Abg.T(A.aaR(A.acf.A4H));this.Abg.Bi(false);this.Abg.
Kh(5);this.WJ.H(AZu);this.WJ.Aj(true);this.WJ.T(A.jV);this.WJ.Bi(true);this.Abd.
H(AsK);this.Abd.Aj(true);this.Abd.T(A.aaR(A.acf.ALo));this.Abd.Bi(false);this.Abd.
Kh(5);this.SR.H(AsL);this.SR.Aj(true);this.SR.T(A.jV);this.SR.Bi(true);this.SR.Kl(
A.jV);this.Abe.H(AsM);this.Abe.Aj(true);this.Abe.T(A.aaR(A.acf.At9));this.Abe.Bi(
false);this.Abe.Kh(5);this.SS.H(BqG);this.SS.Aj(true);this.SS.T(A.jV);this.SS.Bi(
true);this.SS.Kl(A.jV);this.Abh.H(AZv);this.Abh.Aj(true);this.Abh.T(A.aaR(A.acf.
A40));this.Abh.Bi(false);this.Abh.Kh(5);this.WK.H(Aoe);this.WK.Aj(true);this.WK.
T(A.jV);this.WK.Bi(true);this.Ay.H(IJ);this.J(this.Abg,-1);this.J(this.WJ,-1);this.
J(this.Abd,-1);this.J(this.SR,-1);this.J(this.Abe,-1);this.J(this.SS,-1);this.J(
this.Abh,-1);this.J(this.WK,-1);this.J(this.Ay,-1);this.Z.En=[this,this.Fa];this.
K5=A._NewObject(C.Avq,0);this.Ai4=A._NewObject(C.Avq,0);this.Ai5=A._NewObject(C.
Avq,0);this.WJ.S(A.aaL(A.fl.Af));this.SR.S(A.aaL(A.fl.Ak));this.SS.S(A.aaL(A.fl.
Ak));this.WK.S(A.aaL(A.fl.Ak));this.Al2=A._NewObject(C.A5$,0);},_Done:function(){
this.__proto__=C.Fs;this.Abg._Done();this.WJ._Done();this.Abd._Done();this.SR._Done(
);this.Abe._Done();this.SS._Done();this.Abh._Done();this.WK._Done();this.Ay._Done(
);C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Abg._ReInit(
);this.WJ._ReInit();this.Abd._ReInit();this.SR._ReInit();this.Abe._ReInit();this.
SS._ReInit();this.Abh._ReInit();this.WK._ReInit();this.Ay._ReInit();this.Akh(A.aaR(
A.acf.A51));this.AeP(A.aaR(A.acf.Aj8));this.Abg.T(A.aaR(A.acf.A4H));this.Abd.T(A.
aaR(A.acf.ALo));this.Abe.T(A.aaR(A.acf.At9));this.Abh.T(A.aaR(A.acf.A40));this.WJ.
S(A.aaL(A.fl.Af));this.SR.S(A.aaL(A.fl.Ak));this.SS.S(A.aaL(A.fl.Ak));this.WK.S(
A.aaL(A.fl.Ak));this.CS();},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((
B=this.K5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al2)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abc={_Init:function(aArg){C.AjF._Init.call(this,aArg);this.__proto__=C.Abc;this.
Db.Ax(A.aaL(A.ach.AC6));},_className:"Application::HeaderEvaluationFilter"};C.Kc={
CS:function(){this.Text.R(A.aaR(A.acf.None));},D2:function(G){C.AjF.D2.call(this
,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter).AdF(A._GetAutoObject(A.Device.
Device).JA));},_Init:function(aArg){C.AjF._Init.call(this,aArg);this.__proto__=C.
Kc;},_ReInit:function(){C.AjF._ReInit.call(this);this.CS();},_className:"Application::HeaderListFilter"
};C.Au6={Init:function(aArg){this.Db.Ax(A._GetAutoObject(A.acj.DS).BcJ());},_Init:
function(aArg){C.Abc._Init.call(this,aArg);this.__proto__=C.Au6;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AOJ={Init:function(
aArg){this.Db.Ax(A.aaL(A.ach.Abl));},_Init:function(aArg){C.Abc._Init.call(this,
aArg);this.__proto__=C.AOJ;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AOI={Init:function(aArg){this.Db.Ax(A.aaL(A.ach.AmK));},_Init:function(aArg){
C.Abc._Init.call(this,aArg);this.__proto__=C.AOI;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AOH={Sc:null,Db:null,AP:null,CS:function(){this.Sc.R(A.aaR(A.acf.AMI));},Dc:
function(E){C.BR.Dc.call(this,E);this.Sc.L(E);this.Db.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sc={I:this},0);A.acg.Am._Init.
call(this.Db={I:this},0);A.acg.DR._Init.call(this.AP={I:this},0);this.__proto__=
C.AOH;this.Sc.H(BqH);this.Sc.R(A.aaR(A.acf.AMI));this.Sc.A7(0x11);this.Db.H(BqI);
this.AP.DI(BqJ);this.AP.DY(BqK);this.AP.L(A.jb.Bc);this.J(this.Sc,0);this.J(this.
Db,0);this.J(this.AP,0);this.Sc.S(A.aaL(A.fl.Af));this.Sc.A2(A.aaL(A.fl.Ak));this.
Db.Ax(A.aaL(A.ach.APR));},_Done:function(){this.__proto__=C.BR;this.Sc._Done();this.
Db._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sc._ReInit();this.Db._ReInit();this.AP._ReInit();this.Sc.R(A.aaR(
A.acf.AMI));this.Sc.S(A.aaL(A.fl.Af));this.Sc.A2(A.aaL(A.fl.Ak));this.CS();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aec={TN:null,AjN:
null,AjL:null,AjM:null,_Init:function(aArg){C.Ev._Init.call(this,aArg);C.CG._Init.
call(this.TN={I:this},0);A.acg.Am._Init.call(this.AjN={I:this},0);A.acg.Am._Init.
call(this.AjL={I:this},0);A.acg.Am._Init.call(this.AjM={I:this},0);this.__proto__=
C.Aec;this.TN.H(BqL);this.TN.R(A.aaR(A.acf.Year));this.TN.A7(0x11);this.TN.L(A.jb.
Text);this.AjN.H(A$S);this.AjN.L(A.jb.Text);this.AjL.H(BqM);this.AjL.L(A.jb.Text
);this.AjM.H(BqN);this.AjM.L(A.jb.Text);this.J(this.TN,0);this.J(this.AjN,0);this.
J(this.AjL,0);this.J(this.AjM,0);this.TN.S(A.aaL(A.fl.Kb));this.TN.A2(A.aaL(A.fl.
Ic));this.AjN.Ax(A.aaL(A.ach.AP2));this.AjL.Ax(A.aaL(A.ach.AP1));this.AjM.Ax(A.aaL(
A.ach.AP9));},_Done:function(){this.__proto__=C.Ev;this.TN._Done();this.AjN._Done(
);this.AjL._Done();this.AjM._Done();C.Ev._Done.call(this);},_ReInit:function(){C.
Ev._ReInit.call(this);this.TN._ReInit();this.AjN._ReInit();this.AjL._ReInit();this.
AjM._ReInit();this.TN.R(A.aaR(A.acf.Year));this.TN.S(A.aaL(A.fl.Kb));this.TN.A2(
A.aaL(A.fl.Ic));},_Mark:function(D){var B;C.Ev._Mark.call(this,D);if((B=this.TN).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.Amv={Ajj:null,AP:null
,A$:null,D8:null,Uy:null,SJ:null,Gl:null,Xu:0,Ath:0,Alg:0,AA3:0,Init:function(aArg
){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SJ.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SJ.M[2]-1,0,this.SJ.M[
2]+1,aSize[1]]);this.Uy.H([this.SJ.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
D8.H([this.Uy.M[2]-1,0,this.Uy.M[2]+1,aSize[1]]);this.Gl.H([this.Uy.M[2],0,aSize[
0],aSize[1]]);this.Ajj.H(this.Gl.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.AA3.toFixed());this.SJ.L(this.V.AQ);this.SJ.R(this.Alg.toFixed());this.Uy.
L(this.V.AQ);this.Uy.R(this.Ath.toFixed());var B1=this.BAk(this.Xu);this.Gl.L(A.
_GetAutoObject(A.acj.Assessment).Xi(B1));this.Ajj.L(A._GetAutoObject(A.acj.Assessment
).Qg(B1));this.Gl.R(A.abk(this.Xu,0,0)+Afq);},Ce:function(Ad){if(!this.AX)return;
this.Hj=Ad;Ad=(this.AX.Cd()-Ad)-1;if(!!this.AX){this.Alg=this.AX.CE(Ad,1);this.Ath=
this.AX.CE(Ad,2);this.AA3=this.AX.CE(Ad,0);if(this.Alg>0)this.Xu=(this.Ath/this.
Alg)*100;else this.Xu=0;this.An();}},BAk:function(Xu){if(Xu>=8)return 1;else if(
Xu>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajj={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.D8={I:this},0);A.
acg.Text._Init.call(this.Uy={I:this},0);A.acg.Text._Init.call(this.SJ={I:this},0
);A.acg.Text._Init.call(this.Gl={I:this},0);this.__proto__=C.Amv;this.Ajj.H(An6);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D8.H(An6);this.D8.L(A.jb.Bc);this.Uy.
L(A.jb.Text);this.SJ.H(An6);this.SJ.L(A.jb.Text);this.Gl.L(A.jb.Text);this.J(this.
Ajj,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D8,0);this.J(this.Uy,0);this.
J(this.SJ,0);this.J(this.Gl,0);this.Uy.S(A.aaL(A.fl.Af));this.SJ.S(A.aaL(A.fl.Af
));this.Gl.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajj._Done();this.AP._Done();this.A$._Done();this.D8._Done();this.Uy._Done(
);this.SJ._Done();this.Gl._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajj._ReInit();this.AP._ReInit();this.A$._ReInit();this.D8.
_ReInit();this.Uy._ReInit();this.SJ._ReInit();this.Gl._ReInit();this.Uy.S(A.aaL(
A.fl.Af));this.SJ.S(A.aaL(A.fl.Af));this.Gl.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Aje={
BT:null,Axq:A.jV,Rating:0,Ai:function(Ae){C.Iv.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qg(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xi(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.Iv.S.call(this,E);if((E===A.aaL(A.fl.Kb))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ic))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kl:function(E){if(this.Axq===E)return;this.Axq=E;this.
BT.R(E);},Akm:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.Iv._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Aje;this.BT.A3(0x34);this.BT.H(Z2);this.BT.IZ(true);this.BT.
A7(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.Iv;this.BT._Done();C.Iv._Done.call(
this);},_ReInit:function(){C.Iv._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACb={
N2:null,Sx:null,V:null,Anx:null,Anw:null,Ab3:null,Ab2:null,DH:Lt,A$B:A.jV,A_z:A.
jV,AbU:function(E){if(this.N2===E)return;this.N2=E;this.Sx.AbU(this.N2);},T:function(
E){if(this.DH===E)return;this.DH=E;this.V.R(E);},A_f:function(E){if(this.A$B===E
)return;this.A$B=E;this.Ab3.R(E);},A9W:function(E){if(this.A_z===E)return;this.A_z=
E;this.Ab2.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acu.Sx._Init.
call(this.Sx={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.Anx={I:this},0);A.acg.AL._Init.call(this.Anw={I:this},0);A.acg.Text._Init.
call(this.Ab3={I:this},0);A.acg.Text._Init.call(this.Ab2={I:this},0);this.__proto__=
C.ACb;this.H(BqO);this.Sx.H(BqP);this.Sx.Ar(false);this.Sx.Bmv(360);this.Sx.BmF(
0.5);this.V.A3(0x1D);this.V.H(WU);this.V.KP(true);this.V.R(Lt);this.V.L(A.jb.Text
);this.Anx.H(A$T);this.Anx.L(A.jb.H2);this.Anw.H(A$U);this.Anw.L(A.jb.F$);this.Ab3.
A3(0x1D);this.Ab3.H(A$T);this.Ab3.L(A.jb.Text);this.Ab2.A3(0x1D);this.Ab2.H(A$U);
this.Ab2.L(A.jb.C2);this.J(this.Sx,0);this.J(this.V,0);this.J(this.Anx,0);this.J(
this.Anw,0);this.J(this.Ab3,0);this.J(this.Ab2,0);this.Sx.BmG(A.aaL(A.acu.ATi));
this.V.S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.O;this.Sx._Done();this.V._Done();this.Anx.
_Done();this.Anw._Done();this.Ab3._Done();this.Ab2._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Sx._ReInit();this.V._ReInit(
);this.Anx._ReInit();this.Anw._ReInit();this.Ab3._ReInit();this.Ab2._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Anx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.Akz={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.Akz;this.H(S1);this.Background.A3(0x3F);this.Background.
H(S1);this.Background.L(A.jb.Bi2);this.Text.A3(0x3F);this.Text.H(S1);this.Text.A7(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Q8={AkK:null,NM:null,C8:null,Acm:null,JD:null,TemperatureUnit:null,MC:null,PO:
null,R_:null,Um:null,Lo:null,I4:null,ZK:null,ZJ:null,Sa:null,Hy:null,Aju:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).Alo());
this.Um.R(A._GetAutoObject(A.acj.Temperature).Alo());this.Sa.Y(!A._GetAutoObject(
A.Device.Device).Amx);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnQ();this.Axn(
);this.Aco();this.Axo();},IO:function(G){this.Wx(this);},CA:function(G){var B;C.
AB.CA.call(this,G);A.zX([this,this.AJ6],[B=A._GetAutoObject(A.Device.Device),B.AD9
,B.AIk],0);A.zX([this,this.AAa],[B=A._GetAutoObject(A.Device.Device),B.AEa,B.AIm
],0);A.zX([this,this.AAa],[B=A._GetAutoObject(A.Device.Device),B.AR7,B.AZM],0);A.
zX([this,this.A2I],[B=A._GetAutoObject(A.Device.Device),B.Aq8,B.AsT],0);A.zX([this
,this.A2A],[B=A._GetAutoObject(A.Device.Device),B.AD6,B.AIh],0);A._GetAutoObject(
A.Device.Device).Ahv();if(A._GetAutoObject(A.Device.Device).Amx)A._GetAutoObject(
A.Device.Device).AeI(true);A._GetAutoObject(A.Device.Device).Axa();A.pe([this,this.
A2A],this);A.pe([this,this.AAa],this);A.pe([this,this.A2I],this);},EX:function(G
){var B;A._GetAutoObject(A.Device.Device).Ahv();A._GetAutoObject(A.Device.Device
).Uh(false);A._GetAutoObject(A.Device.Device).AeR(false);A._GetAutoObject(A.Device.
Device).AeI(false);A.z$([this,this.AJ6],[B=A._GetAutoObject(A.Device.Device),B.AD9
,B.AIk],0);A.z$([this,this.AAa],[B=A._GetAutoObject(A.Device.Device),B.AEa,B.AIm
],0);A.z$([this,this.AAa],[B=A._GetAutoObject(A.Device.Device),B.AR7,B.AZM],0);A.
z$([this,this.A2I],[B=A._GetAutoObject(A.Device.Device),B.Aq8,B.AsT],0);A.z$([this
,this.A2A],[B=A._GetAutoObject(A.Device.Device),B.AD6,B.AIh],0);},AAa:function(G
){this.An();},AnQ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CI);this.C8.L(A.jb.F$);this.JD.L(this.C8.AQ);this.
MC.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CI);this.C8.L(A.jb.AW);this.JD.L(A.jb.Text);this.MC.L(this.JD.AQ);this.TemperatureUnit.
L(this.JD.AQ);this.Hy.L(A.jb.F$);}}},Axn:function(){this.AkK.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JD.R(A.aaR(A.acf.ADk));this.C8.Ax(A.aaL(A.ach.Avh));this.C8.Cx(0);
this.NM.Cx(0);}break;case 1:{this.AUZ(A._GetAutoObject(A.Device.Device).Ko,false
);this.C8.Ax(A.aaL(A.ach.Avh));this.NM.Cx(0);}break;case 2:{this.R_.R(A._GetAutoObject(
A.Device.Converter).AkJ(A._GetAutoObject(A.Device.Device).AFJ));this.AUZ(A._GetAutoObject(
A.Device.Device).Ko,false);this.C8.Ax(null);this.NM.Cx(1);this.Acm.Y(true);this.
PO.Y(true);this.R_.Y(true);this.Um.Y(true);}break;case 3:{this.AT5();this.AUZ(A.
_GetAutoObject(A.Device.Device).Ko,true);this.Acm.Y(false);this.PO.Y(false);this.
R_.Y(false);this.Um.Y(false);}break;case 4:{this.JD.R(A.aaR(A.acf.Bjd));this.MC.
R(A.aaR(A.act.Aj7));this.C8.Ax(A.aaL(A.ach.Avj));this.C8.Cx(2);this.NM.Cx(0);}break;
default:A.ab5("%s%e",AHz,A._GetAutoObject(A.Device.Device).MeasureState);}},Aco:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ko<=3240)||(A._GetAutoObject(A.Device.Device
).Ko>=5460))this.N.C5(null);else this.N.C5(A.aaL(A.ach.Aef));this.N.Cp(null);}break;
default:;}},Asa:function(G){A._GetAutoObject(C.A1).Fr();},Wx:function(G){},AZZ:function(
s){this.Wx(s);},AkE:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.Bz9(this);break;default:;}},AZY:function(s){this.AkE(s);},AUZ:
function(Aot,ByY){if(ByY)this.Lo.L(A.jb.Bm);else this.Lo.L(A.jb.F$);if(Aot<=3240
){this.MC.Y(false);this.TemperatureUnit.Y(false);this.Lo.Y(true);this.Lo.R(A.aaR(
A.act.AUL));}else if(Aot>=5460){this.MC.Y(false);this.TemperatureUnit.Y(false);this.
Lo.Y(true);this.Lo.R(A.aaR(A.act.Bo1));}else{this.MC.Y(true);this.TemperatureUnit.
Y(true);this.Lo.Y(false);this.MC.R(A._GetAutoObject(A.Device.Converter).AkJ(Aot)
);}},Axo:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ko<=3240)||(A._GetAutoObject(A.Device.
Device).Ko>=5460))this.JD.R(A.aaR(A.acf.ADk));else this.JD.R(A.aaR(A.acf.BpB));break;
default:;}},Axp:function(){},Bpk:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZK.Ar(true);break;case 4:this.ZJ.Ar(true);break;default:{
this.ZK.Ar(false);this.ZJ.Ar(false);A._GetAutoObject(A.Device.Device).AeR(false);
}}},AJ6:function(G){this.An();this.Axp();this.Bpk();this.Bpi();},A2I:function(G){
if(A._GetAutoObject(A.Device.Device).Amy){this.Sa.L(A.jb.H2);this.Sa.Cx(1);}else{
this.Sa.L(A.jb.Bm);this.Sa.Cx(0);}},Bz9:function(G){if(!A._GetAutoObject(A.Device.
Device).Amx)A._GetAutoObject(A.Device.Device).AeI(!A._GetAutoObject(A.Device.Device
).Amy);},Bpi:function(){if(A._GetAutoObject(A.Device.Device).Amx){this.Sa.Y(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeI(true);else A._GetAutoObject(A.Device.Device).AeI(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sa.Y(true);else this.Sa.Y(false);},AJ8:function(
G){this.CA(this);},AT5:function(){A.ab5("%s",A$R);},A2A:function(G){if(A._GetAutoObject(
A.Device.Device).Hy){this.JD.H(BqQ);this.MC.H(BqR);this.TemperatureUnit.H(BqS);}
else{this.JD.H(BqT);this.MC.H(BqU);this.TemperatureUnit.H(BqV);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gc._Init.call(this.AkK={I:this},0);A.acg.
Am._Init.call(this.NM={I:this},0);A.acg.Am._Init.call(this.C8={I:this},0);A.acg.
Am._Init.call(this.Acm={I:this},0);A.acg.Text._Init.call(this.JD={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MC={
I:this},0);A.acg.Text._Init.call(this.PO={I:this},0);A.acg.Text._Init.call(this.
R_={I:this},0);A.acg.Text._Init.call(this.Um={I:this},0);C.CG._Init.call(this.Lo={
I:this},0);A.Device.Tz._Init.call(this.I4={I:this},0);A.Device.Tz._Init.call(this.
ZK={I:this},0);A.Device.Tz._Init.call(this.ZJ={I:this},0);A.acg.Am._Init.call(this.
Sa={I:this},0);C.CG._Init.call(this.Hy={I:this},0);A.acl.Tz._Init.call(this.Aju={
I:this},0);this.__proto__=C.Q8;var B;this.N.Y(true);this.AkK.Fi(1000);this.AkK.B3=
2;this.NM.H(BqW);this.NM.L(A.jb.C2);this.C8.H(BqX);this.C8.L(A.jb.AW);this.C8.Cx(
0);this.C8.Y(true);this.Acm.H(BqY);this.Acm.L(A.jb.Text);this.Acm.Y(false);this.
JD.KP(true);this.JD.R(A.aaR(A.acf.ADk));this.JD.L(A.jb.Text);this.TemperatureUnit.
A7(0x9);this.TemperatureUnit.L(A.jb.Text);this.MC.A7(0x14);this.MC.R(A.aaR(A.act.
Aj7));this.MC.L(A.jb.Text);this.PO.H(BqZ);this.PO.R(A.aaR(A.acf.PO));this.PO.L(A.
jb.Text);this.PO.Y(false);this.R_.H(Bq0);this.R_.A7(0x14);this.R_.R(Bq1);this.R_.
L(A.jb.Text);this.R_.Y(false);this.Um.H(Bq2);this.Um.R(Bq3);this.Um.L(A.jb.Text);
this.Um.Y(false);this.Lo.H(Bq4);this.Lo.R(A.aaR(A.act.AUL));this.Lo.A7(0x12);this.
Lo.L(A.jb.F$);this.I4.B3=false;this.I4.Cu=true;this.I4.HI(1);this.I4.Fi(4000);this.
I4.Ue(0);this.ZK.B3=false;this.ZK.Cu=true;this.ZK.HI(2);this.ZK.Fi(400);this.ZK.
Ue(200);this.ZJ.B3=false;this.ZJ.Cu=true;this.ZJ.HI(3);this.ZJ.Fi(500);this.ZJ.Ue(
250);this.Sa.H(Bq5);this.Hy.H(Bq6);this.Hy.Y(A._GetAutoObject(A.Device.Device).Hy
);this.Hy.R(A.aaR(A.acf.Hy));this.Hy.A7(0x12);this.Hy.L(A.jb.F$);this.Aju.Ar(A._GetAutoObject(
A.Device.Device).Hy);this.Aju.Fi(500);this.Aju.Ue(1000);this.J(this.NM,0);this.J(
this.C8,0);this.J(this.Acm,0);this.J(this.JD,0);this.J(this.TemperatureUnit,0);this.
J(this.MC,0);this.J(this.PO,0);this.J(this.R_,0);this.J(this.Um,0);this.J(this.Lo
,0);this.J(this.Sa,0);this.J(this.Hy,0);this.N.Cz=[this,this.Asa];this.N.Cj=[this
,this.AZY];this.N.Cf=[this,this.AZZ];this.N.CY(A.aaL(A.ach.Aee));this.AkK.Q=[B=this.
C8,B.ARY,B.Cx];this.NM.Ax(A.aaL(A.ach.NM));this.C8.Ax(A.aaL(A.ach.Avh));this.Acm.
Ax(A.aaL(A.ach.AQh));this.JD.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MC.S(A.aaL(A.fl.Ad9));this.PO.S(A.aaL(A.fl.Af));this.R_.S(A.aaL(A.fl.EF
));this.Um.S(A.aaL(A.fl.EF));this.Lo.S(A.aaL(A.fl.Ad9));this.Lo.A2(A.aaL(A.fl.EF
));this.Lo.Cs(A.aaL(A.fl.Af));this.I4.Q=[B=A._GetAutoObject(A.Device.Device),B.ASd
,B.AZS];this.ZK.Q=[B=A._GetAutoObject(A.Device.Device),B.AEb,B.AIn];this.ZJ.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEb,B.AIn];this.Sa.Ax(A.aaL(A.ach.Aqq));this.
Hy.S(A.aaL(A.fl.EF));this.Hy.A2(A.aaL(A.fl.Kb));this.Hy.Cs(A.aaL(A.fl.Ic));this.
Aju.Q=[B=this.Hy,B.Fh,B.Y];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkK._Done();this.NM._Done();this.C8._Done();this.Acm._Done();this.JD._Done(
);this.TemperatureUnit._Done();this.MC._Done();this.PO._Done();this.R_._Done();this.
Um._Done();this.Lo._Done();this.I4._Done();this.ZK._Done();this.ZJ._Done();this.
Sa._Done();this.Hy._Done();this.Aju._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkK._ReInit();this.NM._ReInit();this.C8._ReInit();
this.Acm._ReInit();this.JD._ReInit();this.TemperatureUnit._ReInit();this.MC._ReInit(
);this.PO._ReInit();this.R_._ReInit();this.Um._ReInit();this.Lo._ReInit();this.I4.
_ReInit();this.ZK._ReInit();this.ZJ._ReInit();this.Sa._ReInit();this.Hy._ReInit(
);this.Aju._ReInit();this.JD.R(A.aaR(A.acf.ADk));this.MC.R(A.aaR(A.act.Aj7));this.
PO.R(A.aaR(A.acf.PO));this.Lo.R(A.aaR(A.act.AUL));this.Hy.R(A.aaR(A.acf.Hy));this.
JD.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MC.S(A.aaL(A.fl.
Ad9));this.PO.S(A.aaL(A.fl.Af));this.R_.S(A.aaL(A.fl.EF));this.Um.S(A.aaL(A.fl.EF
));this.Lo.S(A.aaL(A.fl.Ad9));this.Lo.A2(A.aaL(A.fl.EF));this.Lo.Cs(A.aaL(A.fl.Af
));this.Hy.S(A.aaL(A.fl.EF));this.Hy.A2(A.aaL(A.fl.Kb));this.Hy.Cs(A.aaL(A.fl.Ic
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Um
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Hy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUz={Aco:
function(){C.Q8.Aco.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cp(null);this.N.C5(A.aaL(A.ach.Avk));}break;default:;}},
Wx:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ko>3240)&&(A._GetAutoObject(A.Device.Device
).Ko<5460)){A._GetAutoObject(A.Device.Device).Ahv();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AJ8(this);break;default:;}},Axo:
function(){C.Q8.Axo.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JD.R(A.aaR(A.acf.Bje));break;default:;}},Axp:function(){C.Q8.Axp.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).Wn(16711680);this.I4.Ar(true);}break;default:this.I4.Ar(false);
}},AT5:function(){this.C8.Ax(A.aaL(A.ach.Avj));this.C8.Cx(0);this.NM.Cx(0);},_Init:
function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.AUz;this.Dn(C.AOF);},
_className:"Application::TemperatureMeasurementScreen"};C.AOK={Db:null,IC:null,NO:
null,AP:null,AgO:null,A$:null,Dc:function(E){C.BR.Dc.call(this,E);this.Db.L(E);this.
IC.L(E);this.NO.L(E);this.AgO.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Am._Init.call(this.Db={I:this},0);A.acg.Am._Init.call(this.IC={I:this},0
);A.acg.Am._Init.call(this.NO={I:this},0);A.acg.DR._Init.call(this.AP={I:this},0
);A.acg.Am._Init.call(this.AgO={I:this},0);A.acg.DR._Init.call(this.A$={I:this},
0);this.__proto__=C.AOK;this.Db.H(Ax4);this.IC.H(Asx);this.NO.H(AG$);this.AP.DI(
A$V);this.AP.DY(A$W);this.AP.L(A.jb.Bc);this.AgO.H(Bq7);this.AgO.L(A.jb.C2);this.
A$.DI(Bq8);this.A$.DY(Bq9);this.A$.L(A.jb.Bc);this.J(this.Db,0);this.J(this.IC,0
);this.J(this.NO,0);this.J(this.AP,0);this.J(this.AgO,0);this.J(this.A$,0);this.
Db.Ax(A.aaL(A.ach.AC6));this.IC.Ax(A.aaL(A.ach.Aeg));this.NO.Ax(A.aaL(A.ach.Avc)
);this.AgO.Ax(A.aaL(A.ach.APQ));},_Done:function(){this.__proto__=C.BR;this.Db._Done(
);this.IC._Done();this.NO._Done();this.AP._Done();this.AgO._Done();this.A$._Done(
);C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Db._ReInit(
);this.IC._ReInit();this.NO._ReInit();this.AP._ReInit();this.AgO._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Db)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Da={Em:null,DQ:null,AF4:
0,ANd:0,Init:function(aArg){A.zV([this,this.AKN],A._GetAutoObject(A.Device.Device
).Ao,0);A.pe([this,this.AKN],this);},AKN:function(G){var Ad=this.AF4;if(Ad<0){this.
DQ.He();this.DQ.Ew(this.ANd);return;}this.DQ.Ew(A._GetAutoObject(A.Device.Device
).Ao.AmC(Ad,14));this.DQ.AEy(A._GetAutoObject(A.Device.Device).Ao.IU(Ad,13));this.
DQ.AeJ(A._GetAutoObject(A.Device.Device).Ao.HX(Ad,8));this.DQ.Uf(A._GetAutoObject(
A.Device.Device).Ao.HX(Ad,11));this.DQ.AeM(A._GetAutoObject(A.Device.Device).Ao.
HX(Ad,12));this.DQ.AeO(A._GetAutoObject(A.Device.Device).Ao.CE(Ad,5));},A9Y:function(
E){if(this.AF4===E)return;this.AF4=E;A.pe([this,this.AKN],this);},A9r:function(E
){if(this.ANd===E)return;this.ANd=E;A.pe([this,this.AKN],this);},A8J:function(){
return this.AF4;},_Init:function(aArg){C.Ev._Init.call(this,aArg);C.CG._Init.call(
this.Em={I:this},0);C.DQ._Init.call(this.DQ={I:this},0);this.__proto__=C.Da;this.
Em.H(Bq_);this.Em.R(A.aaR(A.acf.GF));this.Em.A7(0x11);this.Em.L(A.jb.Text);this.
DQ.H(AZw);this.J(this.Em,0);this.J(this.DQ,0);this.Em.S(A.aaL(A.fl.Af));this.Em.
A2(A.aaL(A.fl.Ak));this.Em.Cs(A.aaL(A.fl.Bk));this.Init(aArg);},_Done:function(){
this.__proto__=C.Ev;this.Em._Done();this.DQ._Done();C.Ev._Done.call(this);},_ReInit:
function(){C.Ev._ReInit.call(this);this.Em._ReInit();this.DQ._ReInit();this.Em.R(
A.aaR(A.acf.GF));this.Em.S(A.aaL(A.fl.Af));this.Em.A2(A.aaL(A.fl.Ak));this.Em.Cs(
A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.Ev._Mark.call(this,D);if((B=this.Em).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KK={Agv:null,Text:null,Ae2:null,Dc:function(E
){C.BR.Dc.call(this,E);this.Agv.L(E);this.Text.L(E);this.Ae2.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Am._Init.call(this.Agv={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Am._Init.call(this.Ae2={I:this},0);this.__proto__=
C.KK;this.Agv.H(Bq$);this.Agv.L(A.jb.Text);this.Text.H(Bra);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Ae2.H(Brb);this.Ae2.L(A.jb.Text);this.
J(this.Agv,0);this.J(this.Text,0);this.J(this.Ae2,0);this.Agv.Ax(A.aaL(A.ach.AOM
));this.Text.S(A.aaL(A.fl.Kb));this.Text.A2(A.aaL(A.fl.Ic));},_Done:function(){this.
__proto__=C.BR;this.Agv._Done();this.Text._Done();this.Ae2._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.Agv._ReInit();this.Text.
_ReInit();this.Ae2._ReInit();this.Text.S(A.aaL(A.fl.Kb));this.Text.A2(A.aaL(A.fl.
Ic));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Agv)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae2
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AOD={
_Init:function(aArg){C.KK._Init.call(this,aArg);this.__proto__=C.AOD;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KK._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AOF={_Init:function(
aArg){C.KK._Init.call(this,aArg);this.__proto__=C.AOF;this.JO(this.Ae2,-2);this.
Ae2.Ax(A.aaL(A.ach.Abl));},_className:"Application::HeaderDeviceTemperature"};C.
Ya={Ai:function(Ae){C.Amv.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bo2)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.Alg=0;this.Ath=0;this.Xu=0;if(
!!this.AX){var P;for(P=0;P<this.AX.Cd();P++){this.Alg+=this.AX.CE(P,1);this.Ath+=
this.AX.CE(P,2);}if(this.Alg>0)this.Xu=(this.Ath/this.Alg)*100;this.An();}},_Init:
function(aArg){C.Amv._Init.call(this,aArg);this.__proto__=C.Ya;this.AP.Y(false);
this.A$.Y(false);this.D8.Y(false);this.V.S(A.aaL(A.fl.Kb));this.V.A2(A.aaL(A.fl.
Ic));},_ReInit:function(){C.Amv._ReInit.call(this);this.V.S(A.aaL(A.fl.Kb));this.
V.A2(A.aaL(A.fl.Ic));},_className:"Application::EvaluationLossesSumItem"};C.A5_={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A5_;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A5$={KX:null,MS:null,AY:0,X5:function(){this.KX=null;this.MS=null;this.AY=0;
},Ot:function(A6){var G_;G_=A._NewObject(C.A5_,0);G_.A5=A6;if(!this.KX){this.KX=
G_;this.MS=G_;this.AY=1;}else{this.MS.Ah=G_;this.MS=G_;this.AY=this.AY+1;}},AmE:
function(){var B;var RB=0;var Og=this.KX;while(!!Og){RB+=Og.A5;Og=Og.Ah;}return RB;
},AjC:function(){if(!this.AY)return 0;return this.AmE()/this.AY;},Aqx:function(){
var B;if(!this.AY)return 0;var A0T=this.AjC();var Ac0=0;var Og=this.KX;while(!!Og
){Ac0+=Math.pow(Og.A5-A0T,2);Og=Og.Ah;}Ac0/=this.AY;Ac0=Math.sqrt(Ac0);return Ac0;
},_Init:function(aArg){this.__proto__=C.A5$;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agg={Background:null,V:null,KQ:0,Uk:5,Hc:false
,Ai:function(Ae){C.G$.Ai.call(this,Ae);if(this.Hc)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CI);},T:function(E){C.G$.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hc===E)return;this.Hc=E;this.An();},Kh:function(E){if(this.Uk===
E)return;this.Uk=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.G$._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.Agg;this.H(BF);this.Background.A3(
0x3F);this.Background.H(BF);this.V.A3(0x3F);this.V.H(AH2);this.V.A7(0x11);this.V.
L(A.jb.Text);this.KQ=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kb));this.V.A2(A.aaL(A.fl.Ic));this.V.Cs(A.aaL(A.fl.Bk));},_Done:function(
){this.__proto__=C.G$;this.Background._Done();this.V._Done();C.G$._Done.call(this
);},_ReInit:function(){C.G$._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kb));this.V.A2(A.aaL(A.fl.Ic));this.V.Cs(A.aaL(A.fl.
Bk));},_Mark:function(D){var B;C.G$._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANw={Wi:function(G){this.Age();this.IQ(A.aaR(
A.acf.AUK),[this,this.AS9],5);this.IQ(A.aaR(A.acf.AUI),[this,this.AS8],7);this.IQ(
A.aaR(A.acf.Calving),[this,this.BkW],11);this.IQ(A.aaR(A.acf.AnJ),[this,this.Awq
],2);this.IQ(A.aaR(A.acf.XB),[this,this.AEm],1);this.IQ(A.aaR(A.acf.Aua),[this,this.
AEg],0);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.Al5)+A.
aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},Dz:function(G){},Aba:
function(){return C.AMD;},Abb:function(){return C.AO9;},Q3:function(G){A._GetAutoObject(
A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).ACq());},HK:function(G){
C.GP.HK.call(this,G);if(this.Aj3()===false){this.N.Cp(A.aaL(A.ach.AC3));this.N.Cj=[
this,this.A5H];this.N.FG(A.jV);}this.N.OM(false);this.N.ON(false);},Af1:function(
){A._GetAutoObject(C.A1).BU(70);},Af0:function(){A._GetAutoObject(C.A1).BU(71);}
,_Init:function(aArg){C.GP._Init.call(this,aArg);this.__proto__=C.ANw;var B;this.
Dn(C.AOG);this.Dx(A.aaR(A.acf.ARu));this.Awk([B=A._GetAutoObject(A.Device.Device
),B.A8b,B.BaA]);},_ReInit:function(){C.GP._ReInit.call(this);this.Dx(A.aaR(A.acf.
ARu));},_className:"Application::DryCowListScreen"};C.ANv={_Init:function(aArg){
C.IS._Init.call(this,aArg);this.__proto__=C.ANv;this.Lb.Ar(false);this.Lb.Aj(false
);this.Lb.Y(false);this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false);},_className:
"Application::DryCowListFilterScreen"};C.ANu={_Init:function(aArg){C.GB._Init.call(
this,aArg);this.__proto__=C.ANu;this.N.B2(A.aaR(A.acf.A4N));},_ReInit:function(){
C.GB._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4N));},_className:"Application::DryCowListActionsScreen"
};C.AOG={D2:function(G){C.Kc.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.
Converter).AdF(9));},_Init:function(aArg){C.Kc._Init.call(this,aArg);this.__proto__=
C.AOG;},_className:"Application::HeaderDryCowListFilter"};C.Aa9={Filter:null,LT:
null,AGv:A.jV,El:0,AFD:1,Operator:1,Bj:function(aSize){C.Ab_.Bj.call(this,aSize);
this.V.H([15,0,this.AV.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Ab_.Ai.call(this,Ae
);this.LT.L(this.V.AQ);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L8],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L8
],E,0);A.pe([this,this.L8],this);},L8:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tj((F=this.Filter,F[1].call(F[0])).DN(this.El,this.
Operator));else this.Tj(null);},Na:function(E){if(this.El===E)return;this.El=E;A.
pe([this,this.L8],this);},Tj:function(AH){if(!!AH){var A1v;if(this.AFD!==1)A1v=this.
AFD;else A1v=AH.Operator;this.T((this.AGv+CO)+A._GetAutoObject(A.Device.Converter
).A56(A1v));this.Ze(false);}else{this.T(this.AGv);this.Ze(true);}},OL:function(E
){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.L8],this);},AFn:function(
E){if(this.AGv===E)return;this.AGv=E;A.pe([this,this.L8],this);},A9N:function(E){
if(this.AFD===E)return;this.AFD=E;A.pe([this,this.L8],this);},_Init:function(aArg
){C.Ab_._Init.call(this,aArg);C.LT._Init.call(this.LT={I:this},0);this.__proto__=
C.Aa9;this.H(Asz);this.AV.H(Brc);this.LT.H(AZx);this.JO(this.V,-1);this.J(this.LT
,0);},_Done:function(){this.__proto__=C.Ab_;this.LT._Done();C.Ab_._Done.call(this
);},_ReInit:function(){C.Ab_._ReInit.call(this);this.LT._ReInit();},_Mark:function(
D){var B;C.Ab_._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Ajw={LT:null,Ai:function(Ae){C.Qv.Ai.call(this,Ae);this.LT.L(this.V.AQ);},Tj:
function(AH){if(!!AH){this.H0.Cx(1);this.Ze(true);this.LT.A9E(false);}else{this.
H0.Cx(0);this.Ze(false);this.LT.A9E(true);}},_Init:function(aArg){C.Qv._Init.call(
this,aArg);C.LT._Init.call(this.LT={I:this},0);this.__proto__=C.Ajw;this.I0=20;this.
LT.H(AZx);this.J(this.LT,0);},_Done:function(){this.__proto__=C.Qv;this.LT._Done(
);C.Qv._Done.call(this);},_ReInit:function(){C.Qv._ReInit.call(this);this.LT._ReInit(
);},_Mark:function(D){var B;C.Qv._Mark.call(this,D);if((B=this.LT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABr={Q:null,CS:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmD(this.TableId,this.El));},Tj:function(
AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H0.Cx(1);else this.H0.Cx(
0);},J5:function(G){A.pe([this,this.L8],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.J5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
J5],E,0);if(!!E)A.pe([this,this.J5],this);},_Init:function(aArg){C.Qv._Init.call(
this,aArg);this.__proto__=C.ABr;},_ReInit:function(){C.Qv._ReInit.call(this);this.
CS();},_Mark:function(D){var B;C.Qv._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.AO9={YD:null,IY:null,_Init:function(aArg){C.Da._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YD={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);this.__proto__=
C.AO9;this.A9r(1);this.YD.H(Brd);this.YD.KP(true);this.YD.R(A.aaR(A.acf.ADz));this.
YD.L(A.jb.Text);this.IY.H(SZ);this.IY.R(((A.aaR(A.acf.RF)+A$X)+A.aaR(A.acf.A$A))+
O3);this.IY.L(A.jb.Text);this.J(this.YD,0);this.J(this.IY,0);this.YD.S(A.aaL(A.fl.
Ak));this.IY.S(A.aaL(A.fl.Bk));},_Done:function(){this.__proto__=C.Da;this.YD._Done(
);this.IY._Done();C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this
);this.YD._ReInit();this.IY._ReInit();this.YD.R(A.aaR(A.acf.ADz));this.IY.R(((A.
aaR(A.acf.RF)+A$X)+A.aaR(A.acf.A$A))+O3);this.YD.S(A.aaL(A.fl.Ak));this.IY.S(A.aaL(
A.fl.Bk));},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.YD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AMD={Me:null,KL:null,AdA:null,AP:null,A$:null
,W$:0,Init:function(aArg){},Bj:function(aSize){C.Ba.Bj.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Me.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KL.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KL.M[2]-1,0,this.
KL.M[2]+1,aSize[1]]);this.AdA.H([this.KL.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KL.L(this.V.AQ);this.AdA.L(this.V.AQ);if(!!this.W$&&(
this.W$!==5)){this.Me.L(A._GetAutoObject(A.acj.Assessment).Qg(this.W$));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xi(this.W$));}else this.Me.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){var Ma=this.AX.
CE(Ad,1);var A12=this.AX.CE(Ad,29);var S_=this.AX.HB(Ad,4);var LN=this.AX.IU(Ad,
13);var Alj=this.AX.IU(Ad,17);var Als=this.AX.HX(Ad,11);this.W$=A._GetAutoObject(
A.Device.Helper).ALO(LN,Als,Alj);this.T(Ma.toFixed());this.KL.R(A12.toFixed());this.
AdA.R(A._GetAutoObject(A.acj.KG).ACn(S_,A._GetAutoObject(A.Device.Helper).Dw(),Bre
));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Me={I:this},0);A.acg.Text._Init.call(this.KL={I:this},0);A.acg.Text._Init.call(
this.AdA={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.AMD;this.Me.H(AsI);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Me,0);this.J(this.KL,0);this.J(this.AdA,0);this.J(this.
AP,0);this.J(this.A$,0);this.KL.S(A.aaL(A.fl.Af));this.AdA.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Me._Done();this.KL._Done(
);this.AdA._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Me._ReInit();this.KL._ReInit();this.AdA.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KL.S(A.aaL(A.fl.Af));this.AdA.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Me
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RM={AJi:0,Bc9:false,Ai:function(Ae){C.Fq.Ai.call(this,Ae);if(this.Bc9){this.
T(A.aaR(A.acf.ANs));this.Kl(A.jV);}else{this.T(A.aaR(A.acf.BiW));if(this.AJi>0)this.
Kl(this.AJi.toFixed());else this.Kl(WZ);}},Ce:function(G){C.Fq.Ce.call(this,G);this.
Bc9=A._GetAutoObject(A.Device.Helper).W.IsDry;var Ale=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Ale>0)this.AJi=A._GetAutoObject(A.Device.Helper).
MN(Ale,A._GetAutoObject(A.Device.Helper).Dw());else this.AJi=0;this.An();},_Init:
function(aArg){C.Fq._Init.call(this,aArg);this.__proto__=C.RM;},_className:"Application::AnimalInfoItemLactationPhase"
};C.ALT={AKX:A.jV,Ai:function(Ae){C.Fq.Ai.call(this,Ae);this.T(A.aaR(A.acf.RF));
this.Kl(this.AKX);},Ce:function(G){C.Fq.Ce.call(this,G);var S_=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.AKX=A._GetAutoObject(A.acj.KG).ACn(S_,A._GetAutoObject(
A.Device.Helper).Dw(),((((Brf+A.aaR(A.acf.Bgd))+Brg)+A.aaR(A.acf.Bgc))+Brh)+A.aaR(
A.acf.ALp));this.An();},_Init:function(aArg){C.Fq._Init.call(this,aArg);this.__proto__=
C.ALT;this.AKX=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fq._ReInit.call(this);
this.AKX=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANm={T8:null,YX:null,V_:null,V$:null,Sp:null,Init:function(aArg){this.Bb(this.
T8);A.pe([this,this.MF],this);},Xo:function(G){A._GetAutoObject(A.Device.Device).
Ds(1);},_Init:function(aArg){C.Ee._Init.call(this,aArg);C.NT._Init.call(this.T8={
I:this},0);C.NT._Init.call(this.YX={I:this},0);C.NT._Init.call(this.V_={I:this},
0);C.AbD._Init.call(this.V$={I:this},0);C.T5._Init.call(this.Sp={I:this},0);this.
__proto__=C.ANm;var B;this.Dn(C.AOD);this.T8.H(JS);this.T8.Aj(true);this.T8.T(A.
aaR(A.acf.ABY));this.T8.Bi(false);this.T8.NW(94);this.YX.H(P4);this.YX.Aj(true);
this.YX.T(A.acf.Info);this.YX.Bi(true);this.YX.NW(93);this.V_.H(ZZ);this.V_.Aj(true
);this.V_.T(A.aaR(A.acf.AF7));this.V_.Bi(false);this.V_.NW(73);this.V$.H(AkW);this.
V$.Aj(true);this.V$.T(A.aaR(A.acf.TempMeasurement));this.V$.Bi(true);this.V$.NW(
68);this.Sp.H(An8);this.Sp.Aj(true);this.Sp.T(A.aaR(A.acf.ACi));this.Sp.Bi(false
);this.J(this.T8,-1);this.J(this.YX,-1);this.J(this.V_,-1);this.J(this.V$,-1);this.
J(this.Sp,-1);this.N.Cj=[this,this.Xo];this.N.Cp(A.aaL(A.ach.AC$));this.T8.AR=[B=
this.T8,B.NZ];this.YX.AR=[B=this.YX,B.NZ];this.V_.AR=[B=this.V_,B.NZ];this.V$.AR=[
B=this.V$,B.NZ];this.Sp.AR=null;this.Sp.AeB([B=this.Sp,B.AsV]);this.Sp.Gi([this,
this.D6,this.GI]);this.Sp.ASo([B=A._GetAutoObject(A.Device.Device),B.Aq8,B.AsT]);
this.Init(aArg);},_Done:function(){this.__proto__=C.Ee;this.T8._Done();this.YX._Done(
);this.V_._Done();this.V$._Done();this.Sp._Done();C.Ee._Done.call(this);},_ReInit:
function(){C.Ee._ReInit.call(this);this.T8._ReInit();this.YX._ReInit();this.V_._ReInit(
);this.V$._ReInit();this.Sp._ReInit();this.T8.T(A.aaR(A.acf.ABY));this.V_.T(A.aaR(
A.acf.AF7));this.V$.T(A.aaR(A.acf.TempMeasurement));this.Sp.T(A.aaR(A.acf.ACi));
},_Mark:function(D){var B;C.Ee._Mark.call(this,D);if((B=this.T8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.
ANn={T6:null,AbB:null,V8:null,Init:function(aArg){this.Bb(this.T6);},Byc:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bjz:function(G){if(A._GetAutoObject(
A.Device.Device).AaM<=20)A._GetAutoObject(A.Device.Device).A_(76,true,Bri,0,null
);else A._GetAutoObject(A.Device.Device).A_(39,true,A.jV,0,[this,this.Byc]);},_Init:
function(aArg){C.Ee._Init.call(this,aArg);C.NT._Init.call(this.T6={I:this},0);C.
Cl._Init.call(this.AbB={I:this},0);C.AbD._Init.call(this.V8={I:this},0);this.__proto__=
C.ANn;var B;this.Dn(C.AOE);this.T6.H(JS);this.T6.Aj(true);this.T6.T(A.aaR(A.acf.
A4$));this.T6.Bi(false);this.T6.NW(74);this.AbB.H(P4);this.AbB.Aj(true);this.AbB.
T(A.aaR(A.acf.A58));this.AbB.Bi(true);this.V8.H(ZZ);this.V8.Aj(true);this.V8.T(A.
aaR(A.acf.RangeTest));this.V8.Bi(false);this.V8.NW(15);this.J(this.T6,-1);this.J(
this.AbB,-1);this.J(this.V8,-1);this.T6.AR=[B=this.T6,B.NZ];this.AbB.AR=[this,this.
Bjz];this.V8.AR=[B=this.V8,B.NZ];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ee;this.T6._Done();this.AbB._Done();this.V8._Done();C.Ee._Done.call(this);},_ReInit:
function(){C.Ee._ReInit.call(this);this.T6._ReInit();this.AbB._ReInit();this.V8.
_ReInit();this.T6.T(A.aaR(A.acf.A4$));this.AbB.T(A.aaR(A.acf.A58));this.V8.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ee._Mark.call(this,D);if((B=this.T6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AOE={_Init:function(aArg){C.KK._Init.call(this,aArg);this.__proto__=C.AOE;this.
Text.R(A.aaR(A.acf.AF7));},_ReInit:function(){C.KK._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AF7));},_className:"Application::HeaderDeviceServiceMenu"};C.NT={AgP:
null,Ai:function(Ae){C.AbD.Ai.call(this,Ae);this.AgP.L(this.V.AQ);},_Init:function(
aArg){C.AbD._Init.call(this,aArg);A.acg.Am._Init.call(this.AgP={I:this},0);this.
__proto__=C.NT;this.AgP.A3(0x38);this.AgP.H(Brj);this.J(this.AgP,0);this.V.Cs(A.
aaL(A.fl.Bk));this.AgP.Ax(A.aaL(A.ach.Ajf));},_Done:function(){this.__proto__=C.
AbD;this.AgP._Done();C.AbD._Done.call(this);},_ReInit:function(){C.AbD._ReInit.call(
this);this.AgP._ReInit();this.V.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.AbD.
_Mark.call(this,D);if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANi={AgV:null,Ag1:null,Ag3:null,AgZ:null,AjU:null,AgY:null,AgX:null,AgW:null
,AjS:null,AgU:null,AjT:null,Ag2:null,AjV:null,Ag0:null,AjW:null,Init:function(aArg
){this.Bb(this.AgV);},_Init:function(aArg){C.Ee._Init.call(this,aArg);C.PJ._Init.
call(this.AgV={I:this},0);C.PJ._Init.call(this.Ag1={I:this},0);C.PJ._Init.call(this.
Ag3={I:this},0);C.PJ._Init.call(this.AgZ={I:this},0);C.PJ._Init.call(this.AjU={I:
this},0);C.PJ._Init.call(this.AgY={I:this},0);C.PJ._Init.call(this.AgX={I:this},
0);C.PJ._Init.call(this.AgW={I:this},0);C.PJ._Init.call(this.AjS={I:this},0);C.PJ.
_Init.call(this.AgU={I:this},0);C.PJ._Init.call(this.AjT={I:this},0);C.PJ._Init.
call(this.Ag2={I:this},0);C.PJ._Init.call(this.AjV={I:this},0);C.PJ._Init.call(this.
Ag0={I:this},0);C.PJ._Init.call(this.AjW={I:this},0);this.__proto__=C.ANi;this.Dn(
C.AOz);this.AgV.H(AsO);this.AgV.Aj(true);this.AgV.Su(1);this.Ag1.H(AZu);this.Ag1.
Aj(true);this.Ag1.Bi(true);this.Ag1.Su(2);this.Ag3.H(AsK);this.Ag3.Aj(true);this.
Ag3.Bi(false);this.Ag3.Su(3);this.AgZ.H(AsL);this.AgZ.Aj(true);this.AgZ.Bi(true);
this.AgZ.Su(4);this.AjU.H(AxU);this.AjU.Aj(true);this.AjU.Su(5);this.AgY.H(Brk);
this.AgY.Aj(true);this.AgY.Bi(true);this.AgY.Su(6);this.AgX.H(AsM);this.AgX.Aj(true
);this.AgX.Bi(false);this.AgX.Su(7);this.AgW.H(Ax3);this.AgW.Aj(true);this.AgW.Bi(
true);this.AgW.Su(8);this.AjS.H(AZv);this.AjS.Aj(true);this.AjS.Su(9);this.AgU.H(
Aoe);this.AgU.Aj(true);this.AgU.Bi(true);this.AgU.Su(10);this.AjT.H(Brl);this.AjT.
Aj(true);this.AjT.Su(11);this.Ag2.H(Brm);this.Ag2.Aj(true);this.Ag2.Bi(true);this.
Ag2.Su(12);this.AjV.H(Brn);this.AjV.Aj(true);this.AjV.Su(13);this.Ag0.H(Bro);this.
Ag0.Aj(true);this.Ag0.Bi(true);this.Ag0.Su(14);this.AjW.H(Brp);this.AjW.Aj(true);
this.AjW.Su(15);this.J(this.AgV,-1);this.J(this.Ag1,-1);this.J(this.Ag3,-1);this.
J(this.AgZ,-1);this.J(this.AjU,-1);this.J(this.AgY,-1);this.J(this.AgX,-1);this.
J(this.AgW,-1);this.J(this.AjS,-1);this.J(this.AgU,-1);this.J(this.AjT,-1);this.
J(this.Ag2,-1);this.J(this.AjV,-1);this.J(this.Ag0,-1);this.J(this.AjW,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ee;this.AgV._Done();this.Ag1._Done(
);this.Ag3._Done();this.AgZ._Done();this.AjU._Done();this.AgY._Done();this.AgX._Done(
);this.AgW._Done();this.AjS._Done();this.AgU._Done();this.AjT._Done();this.Ag2._Done(
);this.AjV._Done();this.Ag0._Done();this.AjW._Done();C.Ee._Done.call(this);},_ReInit:
function(){C.Ee._ReInit.call(this);this.AgV._ReInit();this.Ag1._ReInit();this.Ag3.
_ReInit();this.AgZ._ReInit();this.AjU._ReInit();this.AgY._ReInit();this.AgX._ReInit(
);this.AgW._ReInit();this.AjS._ReInit();this.AgU._ReInit();this.AjT._ReInit();this.
Ag2._ReInit();this.AjV._ReInit();this.Ag0._ReInit();this.AjW._ReInit();},_Mark:function(
D){var B;C.Ee._Mark.call(this,D);if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AjV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOz={_Init:function(aArg){C.KK._Init.call(this
,aArg);this.__proto__=C.AOz;this.Text.R(A.aaR(A.acf.A5A));},_ReInit:function(){C.
KK._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5A));},_className:"Application::HeaderDeviceCheck"
};C.PJ={DeviceComponentToString:null,J9:null,AuA:0,BbM:false,CS:function(){this.
V.R(this.DeviceComponentToString.BS(this.AuA));},Bj:function(aSize){var B;C.Cl.Bj.
call(this,aSize);this.J9.H(A.abM(this.J9.M,aSize[0]-((B=this.J9.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.J9.M[0]));},Ai:function(Ae){C.Cl.Ai.call(this,Ae);this.J9.
AEq(this.V.AQ);if(this.BbM)this.J9.Awd(A.jb.EV);else this.J9.Awd(A.jb.F$);},Su:function(
E){if(this.AuA===E)return;this.AuA=E;this.T(this.DeviceComponentToString.BS(E));
this.D2(this);},D2:function(G){this.BbM=A._GetAutoObject(A.Device.Device).AI_(this.
AuA);this.An();},_Init:function(aArg){C.Cl._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.J9._Init.call(this.J9={I:this
},0);this.__proto__=C.PJ;this.V.H(Brq);this.V.A7(0x11);this.J9.H(Brr);this.J(this.
J9,0);},_Done:function(){this.__proto__=C.Cl;this.DeviceComponentToString._Done(
);this.J9._Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.J9._ReInit();this.CS();},_Mark:function(
D){var B;C.Cl._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.R9={Ay:null,DV:null,Z:null,Init:function(aArg){A.pe([this,this.Az$],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.AKR(this);this.DG(this);},CA:function(G
){A.pe([this,this.MF],this);},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[
3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},Az$:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6k();A._GetAutoObject(A.Device.Device
).Ao.Bl(Be);A.pe([this,this.MF],this);},Er:function(G){A._GetAutoObject(C.A1).Fr(
);},A22:function(G){A._GetAutoObject(C.A1).BU(95);},DG:function(G){this.N.CY(A.aaL(
A.ach.EW));this.N.Cz=[this,this.Er];this.N.Cp(A.aaL(A.ach.AC_));if(!A._GetAutoObject(
A.Device.Device).Ao.Filter||A._GetAutoObject(A.Device.Helper).AqP(A._GetAutoObject(
A.Device.Device).Ao.Filter)){this.N.Cj=null;this.N.IW.Do(100);}else{this.N.Cj=[this
,this.Az$];this.N.IW.Do(255);}this.N.C5(A.aaL(A.ach.Aeg));this.N.Cf=[this,this.A22
];},MF:function(s){this.DG(s);},AKR:function(G){A.ab5("%s",Brs);},BFw:function(s
){this.AKR(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DV={I:this},0);A.Core.Z._Init.call(
this.Z={I:this},0);this.__proto__=C.R9;this.N.Ar(false);this.N.Y(true);this.Dn(C.
Abc);this.Ay.H(IJ);this.DV.A3(0x3F);this.DV.H(E7);this.DV.L(A.jb.CI);this.Z.H(Ls
);this.Z.Kg(9);this.J(this.Ay,0);this.J(this.DV,0);this.J(this.Z,0);this.Z.En=[this
,this.Fa];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DV._Done();this.Z._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DV._ReInit();this.Z._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.ANK={X3:null,X2:null,XP:null
,TA:null,DG:function(G){C.R9.DG.call(this,G);if(this.AW===this.TA){this.N.Cp(null
);this.N.Cj=null;this.N.C5(null);this.N.Cf=null;}},AKR:function(G){if(this.AW===
this.TA)this.Dn(C.AOK);else this.Dn(C.Abc);},Byv:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.APK);case 1:return A.
aaL(A.ach.APL);default:A.ab5("%s%s",Brt,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Byw:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.APM);case 1:return A.aaL(A.ach.APN);default:
A.ab5("%s%s",AH$,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},H$:function(G){var Cv=(C.Ff.isPrototypeOf(G)?G:null);if(!Cv)return;if(Cv===this.
X3)A._GetAutoObject(C.A1).BU(75);else if(Cv===this.X2)A._GetAutoObject(C.A1).BU(
64);else if(Cv===this.XP)A._GetAutoObject(C.A1).BU(66);else if(Cv===this.TA)A._GetAutoObject(
C.A1).BU(67);},_Init:function(aArg){C.R9._Init.call(this,aArg);C.Ff._Init.call(this.
X3={I:this},0);C.Ff._Init.call(this.X2={I:this},0);C.Ff._Init.call(this.XP={I:this
},0);C.Ff._Init.call(this.TA={I:this},0);this.__proto__=C.ANK;this.X3.H(P1);this.
X3.Aj(true);this.X3.T(A.aaR(A.acf.Afe));this.X2.H(Ks);this.X2.Aj(true);this.X2.T(
A.aaR(A.acf.Temperature));this.XP.H(Bru);this.XP.Aj(true);this.XP.T(A.aaR(A.acf.
Rating));this.TA.H(Brv);this.TA.Aj(true);this.TA.T(A.aaR(A.acf.A7o));this.J(this.
X3,0);this.J(this.X2,0);this.J(this.XP,0);this.J(this.TA,0);this.X3.AR=[this,this.
H$];this.X3.DD(this.Byw());this.X2.AR=[this,this.H$];this.X2.DD(this.Byv());this.
XP.AR=[this,this.H$];this.XP.DD(A.aaL(A.ach.API));this.TA.AR=[this,this.H$];this.
TA.DD(A.aaL(A.ach.APJ));},_Done:function(){this.__proto__=C.R9;this.X3._Done();this.
X2._Done();this.XP._Done();this.TA._Done();C.R9._Done.call(this);},_ReInit:function(
){C.R9._ReInit.call(this);this.X3._ReInit();this.X2._ReInit();this.XP._ReInit();
this.TA._ReInit();this.X3.T(A.aaR(A.acf.Afe));this.X2.T(A.aaR(A.acf.Temperature)
);this.XP.T(A.aaR(A.acf.Rating));this.TA.T(A.aaR(A.acf.A7o));},_Mark:function(D){
var B;C.R9._Mark.call(this,D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.ANL={Vu:null,XR:null,X4:null,AKR:function(G){this.Dn(C.Au6);},Byz:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQm
);case 1:return A.aaL(A.ach.AQn);default:A.ab5("%s%s",AH$,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},H$:function(G){var Cv=(C.Ff.isPrototypeOf(
G)?G:null);if(!Cv)return;if(Cv===this.Vu)A._GetAutoObject(C.A1).BU(77);else if(Cv===
this.X4)A._GetAutoObject(C.A1).BU(65);else if(Cv===this.XR)A._GetAutoObject(C.A1
).BU(76);},Byy:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APx);case 1:return A.aaL(A.ach.APy);default:A.ab5("%s%s",AH$
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},ByA:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQo
);case 1:return A.aaL(A.ach.AQp);default:A.ab5("%s%s",AH$,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.R9._Init.call(
this,aArg);C.Ff._Init.call(this.Vu={I:this},0);C.Ff._Init.call(this.XR={I:this},
0);C.Ff._Init.call(this.X4={I:this},0);this.__proto__=C.ANL;this.Vu.H(P1);this.Vu.
Aj(true);this.Vu.T(A.aaR(A.acf.A$s));this.XR.H(AZy);this.XR.Aj(true);this.XR.T(A.
aaR(A.acf.A41));this.X4.H(N$);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.A$v));this.
J(this.Vu,0);this.J(this.XR,0);this.J(this.X4,0);this.Vu.AR=[this,this.H$];this.
Vu.DD(this.Byz());this.Vu.AbR(A.aaL(A.ach.NN));this.XR.AR=[this,this.H$];this.XR.
DD(this.Byy());this.X4.AR=[this,this.H$];this.X4.DD(this.ByA());},_Done:function(
){this.__proto__=C.R9;this.Vu._Done();this.XR._Done();this.X4._Done();C.R9._Done.
call(this);},_ReInit:function(){C.R9._ReInit.call(this);this.Vu._ReInit();this.XR.
_ReInit();this.X4._ReInit();this.Vu.T(A.aaR(A.acf.A$s));this.XR.T(A.aaR(A.acf.A41
));this.X4.T(A.aaR(A.acf.A$v));},_Mark:function(D){var B;C.R9._Mark.call(this,D);
if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.ANO={Bda:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).Zw(0));},_Init:function(aArg){C.Aqn._Init.call(this,aArg);this.
__proto__=C.ANO;this.AeP(A.aaR(A.acf.A7K));},_ReInit:function(){C.Aqn._ReInit.call(
this);this.AeP(A.aaR(A.acf.A7K));},_className:"Application::EvaluationWeightsRecentScreen"
};C.ANH={Ah4:null,Abf:null,UD:null,AaF:null,Ph:null,Ajc:null,Agi:null,Ajd:null,Agj:
null,Ay:null,Aay:null,AcX:0,Apa:0,Dz:function(G){switch(this.Co.CN){case 4:{if(this.
IT.Fh())return;var Qp=this.Z.Bt[1]+80;this.Z.Gj([this.Z.Bt[0],Qp]);this.Z.Vi(null
,null);}break;case 5:{if(this.IT.Fh())return;var Qp=this.Z.Bt[1]-80;this.Z.Gj([this.
Z.Bt[0],Qp]);this.Z.Vi(null,null);}break;default:C.Fs.Dz.call(this,G);}},ApN:function(
LY,AcG){if(!LY)return;var Fp=A._NewObject(A.Device.Filter,0);var HR=A._NewObject(
A.Device.Int32FilterCriterion,0);HR.Initialize(1,0,AcG,true);Fp.CV(HR);var AcT=A.
_NewObject(A.Device.Int32FilterCriterion,0);AcT.Initialize(8,2,0,true);Fp.CV(AcT
);LY.Bl(Fp);},Aig:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqQ()){this.
Ah4.Ot(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var AyM=this.Byt(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Aay.Set(AyM,this.Aay.Get(AyM)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.AcX++;this.Apa=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fs.Aig.call(
this,G);},Aaa:function(G){if(this.AcX>1)A._GetAutoObject(A.Device.Device).A_(56,
true,this.AcX.toFixed(),0,null);if(this.AcX===1)A._GetAutoObject(A.Device.Device
).A_(53,true,this.Apa.toFixed(),0,null);if(this.Ah4.AY>0)this.UD.T(((((((A._GetAutoObject(
A.Device.Converter).Axv(this.Ah4.AjC()|0,1)+Ax_)+A._GetAutoObject(A.Device.Converter
).Axv(this.Ah4.Aqx()|0,1))+CO)+A._GetAutoObject(A.acj.DS).AfN())+Ax$)+this.Ah4.AY.
toFixed())+O3);else this.UD.T(A.aaR(A.acf.Unknown));var RB=this.Aay.AmE();var P;
for(P=0;P<this.Aay.MB;P++){var Bf=this.ByO(P);if(!!Bf){var CD=this.Aay.Get(P);Bf.
Bld(CD);if(!RB)Bf.A9T(0);else Bf.A9T(Math.round((CD*100)/RB)|0);Bf.BmU(this.ByN(
P,A._GetAutoObject(A.Device.Device).MassUnit));}}var Ac2=false;if(this.Ah4.AY>0)
Ac2=true;this.IT.Y(!Ac2);C.Fs.Aaa.call(this,G);},Ac9:function(G){this.Ah4.X5();this.
Aay.He();this.AcX=0;this.Apa=0;C.Fs.Ac9.call(this,G);},ByO:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Ph;break;case 1:Bf=this.Ajc;break;case 2:Bf=this.
Agi;break;case 3:Bf=this.Ajd;break;case 4:Bf=this.Agj;break;default:throw new Error(
Aya+aIndex.toFixed());}return Bf;},ByN:function(aIndex,Aop){var B;var Tk=A.jV;switch(
Aop){case 0:{switch(aIndex){case 0:Tk=Brw;break;case 1:Tk=Brx;break;case 2:Tk=Bry;
break;case 3:Tk=Brz;break;case 4:Tk=BrA;break;default:throw new Error(Aya+aIndex.
toFixed());}Tk=Tk+(CO+A.aaR(A.acf.AzD));}break;case 1:{switch(aIndex){case 0:Tk=
BrB;break;case 1:Tk=BrC;break;case 2:Tk=BrD;break;case 3:Tk=BrE;break;case 4:Tk=
BrF;break;default:throw new Error(Aya+aIndex.toFixed());}Tk=Tk+(CO+A.aaR(A.acf.A67
));}break;default:A.ab5("%s%e",A$Y,Aop);}return Tk;},Byu:function(AIv,Aop){var AcU=
0;switch(Aop){case 0:switch(AIv){case 0:AcU=35000;break;case 1:AcU=40000;break;case
2:AcU=45000;break;case 3:AcU=50000;break;case 4:AcU=2147483647;break;default:throw new
Error(Aya+AIv.toFixed());}break;case 1:switch(AIv){case 0:AcU=36287;break;case 1:
AcU=40823;break;case 2:AcU=45359;break;case 3:AcU=49895;break;case 4:AcU=2147483647;
break;default:throw new Error(Aya+AIv.toFixed());}break;default:A.ab5("%s%e",A$Y
,Aop);}return AcU;},Byt:function(A6,Aop){var AyM=0;var P;for(P=0;P<this.Aay.MB;P++
)if(A6<this.Byu(P,Aop)){AyM=P;break;}return AyM;},Fa:function(G){var B;this.Ay.Ms((
B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[
1]);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Agg._Init.call(this.Abf={
I:this},0);C.Iv._Init.call(this.UD={I:this},0);C.AaF._Init.call(this.AaF={I:this
},0);C.Ph._Init.call(this.Ph={I:this},0);C.Ph._Init.call(this.Ajc={I:this},0);C.
Ph._Init.call(this.Agi={I:this},0);C.Ph._Init.call(this.Ajd={I:this},0);C.Ph._Init.
call(this.Agj={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.Aay={I:this},0);this.__proto__=C.ANH;this.Dn(C.Au6);this.Akh(A.aaR(
A.acf.A5X));this.AeP(A.aaR(A.acf.A7D));this.Abf.H(AsO);this.Abf.Aj(true);this.Abf.
T(A.aaR(A.acf.A4F));this.Abf.Bi(false);this.Abf.Kh(5);this.UD.H(AZu);this.UD.Aj(
true);this.UD.T(A.jV);this.UD.Bi(true);this.UD.Kh(5);this.AaF.H(AsK);this.AaF.Aj(
true);this.Ph.H(AsL);this.Ph.Aj(true);this.Ph.Bi(true);this.Ajc.H(AsM);this.Ajc.
Aj(true);this.Agi.H(Ax3);this.Agi.Aj(true);this.Agi.Bi(true);this.Ajd.H(AZv);this.
Ajd.Aj(true);this.Agj.H(Aoe);this.Agj.Aj(true);this.Agj.Bi(true);this.Ay.H(IJ);this.
Aay.Zf(5);this.J(this.Abf,-1);this.J(this.UD,-1);this.J(this.AaF,-1);this.J(this.
Ph,-1);this.J(this.Ajc,-1);this.J(this.Agi,-1);this.J(this.Ajd,-1);this.J(this.Agj
,-1);this.J(this.Ay,-1);this.Z.En=[this,this.Fa];this.Ah4=A._NewObject(C.Avq,0);
this.UD.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fs;this.Abf._Done(
);this.UD._Done();this.AaF._Done();this.Ph._Done();this.Ajc._Done();this.Agi._Done(
);this.Ajd._Done();this.Agj._Done();this.Ay._Done();this.Aay._Done();C.Fs._Done.
call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Abf._ReInit();this.
UD._ReInit();this.AaF._ReInit();this.Ph._ReInit();this.Ajc._ReInit();this.Agi._ReInit(
);this.Ajd._ReInit();this.Agj._ReInit();this.Ay._ReInit();this.Aay._ReInit();this.
Akh(A.aaR(A.acf.A5X));this.AeP(A.aaR(A.acf.A7D));this.Abf.T(A.aaR(A.acf.A4F));this.
UD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.
Ah4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ph)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aay)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaF={H4:null,Gl:null
,Bj:function(aSize){C.Iv.Bj.call(this,aSize);this.H4.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gl.H([this.H4.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.Iv.Ai.call(this,Ae);this.H4.L(this.V.AQ);this.Gl.L(this.V.AQ);},_Init:
function(aArg){C.Iv._Init.call(this,aArg);A.acg.Text._Init.call(this.H4={I:this}
,0);A.acg.Text._Init.call(this.Gl={I:this},0);this.__proto__=C.AaF;this.T(A.aaR(
A.acf.AGJ));this.H4.H(BrG);this.H4.KP(true);this.H4.R(A.aaR(A.acf.Aqb));this.H4.
L(A.jb.Text);this.Gl.H(A$Z);this.Gl.R(Afq);this.Gl.L(A.jb.Text);this.J(this.H4,0
);this.J(this.Gl,0);this.V.S(A.aaL(A.fl.Ic));this.H4.S(A.aaL(A.fl.Ic));this.Gl.S(
A.aaL(A.fl.Kb));},_Done:function(){this.__proto__=C.Iv;this.H4._Done();this.Gl._Done(
);C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(this);this.H4._ReInit(
);this.Gl._ReInit();this.T(A.aaR(A.acf.AGJ));this.H4.R(A.aaR(A.acf.Aqb));this.V.
S(A.aaL(A.fl.Ic));this.H4.S(A.aaL(A.fl.Ic));this.Gl.S(A.aaL(A.fl.Kb));},_Mark:function(
D){var B;C.Iv._Mark.call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Ph={AP:null,A$:null,PU:null,H4:null,Gl:null,A$u:A.jV,Aqb:0,A_n:0,Bj:function(
aSize){C.Iv.Bj.call(this,aSize);this.PU.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PU.M[2]-1,0,this.PU.M[2]+1,aSize[1]]);this.H4.H([this.PU.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H4.M[2]-1,0,this.H4.M[2]+1,aSize[
1]]);this.Gl.H([this.H4.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Iv.Ai.call(
this,Ae);this.PU.L(this.V.AQ);this.H4.L(this.V.AQ);this.Gl.L(this.V.AQ);},BmU:function(
E){if(this.A$u===E)return;this.A$u=E;this.PU.R(E);},Bld:function(E){if(this.Aqb===
E)return;this.Aqb=E;this.H4.R(E.toFixed());},A9T:function(E){if(this.A_n===E)return;
this.A_n=E;this.Gl.R(E.toFixed()+AxD);},_Init:function(aArg){C.Iv._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.H4={I:
this},0);A.acg.Text._Init.call(this.Gl={I:this},0);this.__proto__=C.Ph;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.PU.H(BrH);this.PU.R(A.aaR(A.acf.AGJ));this.PU.L(
A.jb.Text);this.H4.R(UO);this.H4.L(A.jb.Text);this.Gl.R(BrI);this.Gl.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.PU,0);this.J(this.H4,0);this.J(
this.Gl,0);this.PU.S(A.aaL(A.fl.Af));this.H4.S(A.aaL(A.fl.Af));this.Gl.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Iv;this.AP._Done();this.A$._Done();this.
PU._Done();this.H4._Done();this.Gl._Done();C.Iv._Done.call(this);},_ReInit:function(
){C.Iv._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.PU._ReInit();
this.H4._ReInit();this.Gl._ReInit();this.PU.R(A.aaR(A.acf.AGJ));this.PU.S(A.aaL(
A.fl.Af));this.H4.S(A.aaL(A.fl.Af));this.Gl.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Iv._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AL5={AKj:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mm();A._GetAutoObject(A.Device.
Device).Ao.Bl(Be);},_Init:function(aArg){C.Ama._Init.call(this,aArg);this.__proto__=
C.AL5;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.AQZ={RS:null,
RZ:null,RR:null,RW:null,Pj:null,RU:null,AKP:function(G){A.pe([this,this.BBB],this
);A.pe([this,this.BBq],this);A.pe([this,this.BBm],this);A.pe([this,this.A3V],this
);A.pe([this,this.BBt],this);A.pe([this,this.BBr],this);},H$:function(G){var Cv=(
C.QO.isPrototypeOf(G)?G:null);if(!Cv)return;if(Cv===this.RZ)A._GetAutoObject(C.A1
).BU(20);else if(Cv===this.Pj)A._GetAutoObject(C.A1).BU(14);else if(Cv===this.RS
)A._GetAutoObject(C.A1).BU(12);else if(Cv===this.RW)A._GetAutoObject(C.A1).BU(47
);else if(Cv===this.RR)A._GetAutoObject(C.A1).BU(58);else if(Cv===this.RU)A._GetAutoObject(
C.A1).BU(69);},BBq:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mm();var
AyT=A._NewObject(A.Device.BoolFilterCriterion,0);AyT.Initialize(9,0,true,true);Be.
CV(AyT);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.Pj.Zd(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BBB:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mm();var AA0=A._NewObject(A.Device.BoolFilterCriterion,0);AA0.Initialize(
12,0,true,true);Be.CV(AA0);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RZ.Zd(
A._GetAutoObject(A.Device.Device).Ao.Cd().toFixed());},BBm:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mm();var Ayz=A._NewObject(A.Device.BoolFilterCriterion
,0);Ayz.Initialize(8,0,true,true);Be.CV(Ayz);A._GetAutoObject(A.Device.Device).Ao.
Bl(Be);this.RS.Zd(A._GetAutoObject(A.Device.Device).Ao.Cd().toFixed());},A3V:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6e(A._GetAutoObject(A.Device.Device
).AA6);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RR.Zd(A._GetAutoObject(A.
Device.Device).Ao.Cd().toFixed());},BBt:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6n();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RW.Zd(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BBr:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACq();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RU.Zd(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},_Init:function(aArg){C.T1._Init.call(this,
aArg);C.QO._Init.call(this.RS={I:this},0);C.QO._Init.call(this.RZ={I:this},0);C.
QO._Init.call(this.RR={I:this},0);C.QO._Init.call(this.RW={I:this},0);C.QO._Init.
call(this.Pj={I:this},0);C.QO._Init.call(this.RU={I:this},0);this.__proto__=C.AQZ;
this.RS.H(P1);this.RS.Aj(true);this.RS.T(A.aaR(A.acf.Alarm));this.RS.AbO(true);this.
RZ.H(AZy);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.ArK));this.RZ.AbO(true);this.RR.
H(N$);this.RR.Aj(true);this.RR.T(A.aaR(A.acf.ActionList));this.RR.AbO(true);this.
RW.H(P2);this.RW.Aj(true);this.RW.T(A.aaR(A.acf.AOb));this.RW.AbO(true);this.Pj.
H(SY);this.Pj.Ar(false);this.Pj.Aj(false);this.Pj.Y(false);this.Pj.T(A.aaR(A.acf.
ABK));this.Pj.AbO(true);this.RU.H(UJ);this.RU.Aj(true);this.RU.T(A.aaR(A.acf.A5T
));this.RU.AbO(true);this.J(this.RS,-1);this.J(this.RZ,-1);this.J(this.RR,-1);this.
J(this.RW,-1);this.J(this.Pj,-1);this.J(this.RU,-1);this.RS.AR=[this,this.AcD];this.
RS.DD(A.aaL(A.ach.AC0));this.RS.AbR(A.aaL(A.ach.NN));this.RZ.AR=[this,this.AcD];
this.RZ.DD(A.aaL(A.ach.AQl));this.RZ.AbR(A.aaL(A.ach.NN));this.RR.AR=[this,this.
AcD];this.RR.DD(A.aaL(A.ach.APi));this.RR.AbR(A.aaL(A.ach.NN));this.RW.AR=[this,
this.AcD];this.RW.DD(A.aaL(A.ach.APP));this.RW.AbR(A.aaL(A.ach.NN));this.Pj.AR=[
this,this.AcD];this.Pj.DD(A.aaL(A.ach.AC0));this.Pj.AbR(A.aaL(A.ach.NN));this.RU.
AR=[this,this.AcD];this.RU.DD(A.aaL(A.ach.APF));this.RU.AbR(A.aaL(A.ach.NN));},_Done:
function(){this.__proto__=C.T1;this.RS._Done();this.RZ._Done();this.RR._Done();this.
RW._Done();this.Pj._Done();this.RU._Done();C.T1._Done.call(this);},_ReInit:function(
){C.T1._ReInit.call(this);this.RS._ReInit();this.RZ._ReInit();this.RR._ReInit();
this.RW._ReInit();this.Pj._ReInit();this.RU._ReInit();this.RS.T(A.aaR(A.acf.Alarm
));this.RZ.T(A.aaR(A.acf.ArK));this.RR.T(A.aaR(A.acf.ActionList));this.RW.T(A.aaR(
A.acf.AOb));this.Pj.T(A.aaR(A.acf.ABK));this.RU.T(A.aaR(A.acf.A5T));},_Mark:function(
D){var B;C.T1._Mark.call(this,D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.AQY={R0:null,Vt:null,RX:null,RT:null,RY:null,AKP:function(G){A.pe([this,this.
BBn],this);A.pe([this,this.BBx],this);A.pe([this,this.BBy],this);A.pe([this,this.
BBC],this);A.pe([this,this.BBz],this);},H$:function(G){var Cv=(C.QO.isPrototypeOf(
G)?G:null);if(!Cv)return;if(Cv===this.Vt)A._GetAutoObject(C.A1).BU(102);if(Cv===
this.RT)A._GetAutoObject(C.A1).BU(85);if(Cv===this.RX)A._GetAutoObject(C.A1).BU(
80);if(Cv===this.RY)A._GetAutoObject(C.A1).BU(51);if(Cv===this.R0)A._GetAutoObject(
C.A1).BU(96);},BBy:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACt();A.
_GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RY.Zd(A._GetAutoObject(A.Device.Device
).Ao.Cd().toFixed());},BBC:function(G){var Be=A._GetAutoObject(A.Device.Helper).
A6x();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.R0.Zd(A._GetAutoObject(A.
Device.Device).Ao.Cd().toFixed());},BBx:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6s();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RX.Zd(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BBn:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AOc();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RT.Zd(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BBz:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AOn();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.Vt.Zd(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},_Init:function(aArg){C.T1._Init.call(this,
aArg);C.QO._Init.call(this.R0={I:this},0);C.QO._Init.call(this.Vt={I:this},0);C.
QO._Init.call(this.RX={I:this},0);C.QO._Init.call(this.RT={I:this},0);C.QO._Init.
call(this.RY={I:this},0);this.__proto__=C.AQY;this.R0.H(BrJ);this.R0.Aj(true);this.
R0.T(A.aaR(A.acf.A7u));this.R0.AbO(true);this.Vt.H(BrK);this.Vt.Aj(true);this.Vt.
T(A.aaR(A.acf.AFM));this.RX.H(BrL);this.RX.Aj(true);this.RX.T(A.aaR(A.acf.A7x));
this.RX.AbO(true);this.RT.H(BrM);this.RT.Aj(true);this.RT.T(A.aaR(A.acf.ABp));this.
RT.AbO(true);this.RY.H(BrN);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.ARA));this.RY.
AbO(true);this.J(this.R0,-1);this.J(this.Vt,-1);this.J(this.RX,-1);this.J(this.RT
,-1);this.J(this.RY,-1);this.R0.AR=[this,this.AcD];this.R0.DD(A.aaL(A.ach.AP4));
this.R0.AbR(A.aaL(A.ach.NN));this.Vt.AR=[this,this.AcD];this.Vt.DD(A.aaL(A.ach.ADg
));this.RX.AR=[this,this.AcD];this.RX.DD(A.aaL(A.ach.AP6));this.RX.AbR(A.aaL(A.ach.
NN));this.RT.AR=[this,this.AcD];this.RT.DD(A.aaL(A.ach.APA));this.RT.AbR(A.aaL(A.
ach.NN));this.RY.AR=[this,this.AcD];this.RY.DD(A.aaL(A.ach.AP8));this.RY.AbR(A.aaL(
A.ach.NN));},_Done:function(){this.__proto__=C.T1;this.R0._Done();this.Vt._Done(
);this.RX._Done();this.RT._Done();this.RY._Done();C.T1._Done.call(this);},_ReInit:
function(){C.T1._ReInit.call(this);this.R0._ReInit();this.Vt._ReInit();this.RX._ReInit(
);this.RT._ReInit();this.RY._ReInit();this.R0.T(A.aaR(A.acf.A7u));this.Vt.T(A.aaR(
A.acf.AFM));this.RX.T(A.aaR(A.acf.A7x));this.RT.T(A.aaR(A.acf.ABp));this.RY.T(A.
aaR(A.acf.ARA));},_Mark:function(D){var B;C.T1._Mark.call(this,D);if((B=this.R0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Vt)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.RX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.ARy={Wi:function(G){this.Age();this.ALB();this.A4j(A.aaR(A.acf.A6_),[this,this.
BmA],131072);this.A4j(A.aaR(A.acf.A69),[this,this.Bmz],16384);A._GetAutoObject(C.
BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.ANc)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Dz:function(G){},Aba:function(){return C.Amg;},Abb:function(
){return C.AmI;},Q3:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).A6s());},HK:function(G){var F;C.RD.HK.call(this,G);if(this.Aj3(
)===false){if(!!this.FD&&((F=this.FD,F[1].call(F[0]))===16)){this.N.Cp(A.aaL(A.ach.
AQe));this.N.Cj=[this,this.A5R];}else{this.N.Cp(A.aaL(A.ach.APY));this.N.Cj=[this
,this.A5O];}this.N.FG(A.jV);}this.N.OM(false);this.N.ON(false);},Af1:function(){
A._GetAutoObject(C.A1).BU(81);},Af0:function(){A._GetAutoObject(C.A1).BU(82);},Bmz:
function(G){this.AF9(16384);},BmA:function(G){this.AF9(131072);},_Init:function(
aArg){C.RD._Init.call(this,aArg);this.__proto__=C.ARy;this.Dn(C.AOY);this.Dx(A.aaR(
A.acf.A7B));this.ASF(A._GetAutoObject(C.AvC));},_ReInit:function(){C.RD._ReInit.
call(this);this.Dx(A.aaR(A.acf.A7B));},_className:"Application::NoNaisIdListScreen"
};C.ARx={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ARx;this.
Mp.Ar(false);this.Mp.Aj(false);this.Mp.Y(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.ARw={_Init:function(aArg){C.GB._Init.call(this,aArg);this.__proto__=C.ARw;this.
N.B2(A.aaR(A.acf.A4Q));},_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A4Q));},_className:"Application::NoNaisIdListActionsScreen"};C.AOY={D2:
function(G){C.Kc.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter).
AdF(10));},_Init:function(aArg){C.Kc._Init.call(this,aArg);this.__proto__=C.AOY;
},_className:"Application::HeaderNoNaisIdListFilter"};C.Q1={Be2:false,CS:function(
){A.pe([this,this.Ayl],this);},Dz:function(G){},CA:function(G){C.GP.CA.call(this
,G);if(this.Be2&&(A._GetAutoObject(A.Device.Device).Un>0))A.pe([this,this.AIc],this
);},AlF:function(G){this.A5N(this);},Af1:function(){A._GetAutoObject(C.A1).BU(83
);},Af0:function(){A._GetAutoObject(C.A1).BU(84);},ARG:function(G){throw new Error(
Aof);},Bah:function(s){this.ARG(s);},ARH:function(G){throw new Error(Aof);},Bai:
function(s){this.ARH(s);},ARM:function(G){throw new Error(Aof);},AIc:function(s){
this.ARM(s);},Bei:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At&&(At.PopupState===7)){this.Be2=true;A._GetAutoObject(C.A1).BU(87);}},AfZ:
function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===5))A.z$([this,this.Xp],[B=A._GetAutoObject(A.Device.Device),B.Wh
,B.W2],0);},Xp:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhC===3){A.
_GetAutoObject(A.Device.Device).A_(74,false,A.jV,0,[this,this.AfZ]);A.z$([this,this.
Xp],[B=A._GetAutoObject(A.Device.Device),B.Wh,B.W2],0);A.pe([this,this.AIc],this
);}},AI9:function(){throw new Error(Aof);},A7S:function(G){A._GetAutoObject(A.Device.
Device).Ds(0);this.A5M(this);},Bm5:function(G){A._GetAutoObject(A.Device.Device).
Ds(0);this.Bhl(this);},_Init:function(aArg){C.GP._Init.call(this,aArg);this.__proto__=
C.Q1;this.Dx(A.aaR(A.acf.A7I));},_ReInit:function(){C.GP._ReInit.call(this);this.
Dx(A.aaR(A.acf.A7I));this.CS();},_className:"Application::RegistrationsListScreen"
};C.ATQ={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ATQ;},
_className:"Application::RegistrationsListFilterScreen"};C.ATP={_Init:function(aArg
){C.GB._Init.call(this,aArg);this.__proto__=C.ATP;this.N.B2(A.aaR(A.acf.A4S));},
_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4S));},_className:
"Application::RegistrationsListActionsScreen"};C.Ad$={_Init:function(aArg){C.Yf.
_Init.call(this,aArg);this.__proto__=C.Ad$;this.Text.H(BrO);this.Text.R(A.jV);this.
Text.A7(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABw={Kz:0,AP:
null,A$:null,D8:null,IB:null,SM:null,Gr:null,Ma:0,K6:0,Init:function(aArg){},Bj:
function(aSize){C.Ba.Bj.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IB.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A$.H([this.IB.M[2]-1,0,this.IB.M[2]+1,aSize[1]]);this.
SM.H([this.IB.M[2],0,this.IB.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.D8.H([
this.SM.M[2]-1,0,this.SM.M[2]+1,aSize[1]]);this.Gr.H([this.SM.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IB.L(this.V.AQ);this.Gr.L(this.
V.AQ);this.SM.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).AjR(this.K6)){this.
V.S(A.aaL(A.fl.Hm));this.T(A$0);this.SM.R(Rg);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Ma.toFixed());this.SM.R(A._GetAutoObject(A.Device.Helper).R$(this.Kz,0,5).
toFixed());}},Ce:function(Ad){if(!this.AX)return;this.Hj=Ad;if(!!this.AX){this.Ma=
this.AX.CE(Ad,1);this.K6=this.AX.AOr(Ad,34);var Atp=this.AX.AOi(Ad,7);this.Kz=this.
AX.KJ(Ad,26);var AyG=this.AX.HB(Ad,4);var AfA=A._GetAutoObject(A.Device.Helper).
MN(AyG,A._GetAutoObject(A.Device.Helper).Dw());this.IB.Ax(A._GetAutoObject(A.Device.
Converter).AmB(Atp));if(AfA<100)this.Gr.R((AfA.toFixed()+CO)+A.aaR(A.acf.ALp));else
this.Gr.R(A._GetAutoObject(A.acj.KG).ACn(AyG,A._GetAutoObject(A.Device.Helper).Dw(
),AHU));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.
call(this.D8={I:this},0);A.acg.Am._Init.call(this.IB={I:this},0);A.acg.Text._Init.
call(this.SM={I:this},0);C.CG._Init.call(this.Gr={I:this},0);this.__proto__=C.ABw;
this.AP.H(An_);this.AP.L(A.jb.Bc);this.A$.H(An$);this.A$.L(A.jb.Bc);this.D8.H(AZz
);this.D8.L(A.jb.Bc);this.IB.H(A$1);this.IB.L(A.jb.Text);this.SM.H(AxZ);this.Gr.
H(AZA);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D8,0);this.J(this.IB,0);this.
J(this.SM,0);this.J(this.Gr,0);this.SM.S(A.aaL(A.fl.Af));this.Gr.S(A.aaL(A.fl.Af
));this.Gr.A2(A.aaL(A.fl.Ak));this.Gr.Cs(A.aaL(A.fl.Bk));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.D8._Done();this.
IB._Done();this.SM._Done();this.Gr._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.D8._ReInit();
this.IB._ReInit();this.SM._ReInit();this.Gr._ReInit();this.SM.S(A.aaL(A.fl.Af));
this.Gr.S(A.aaL(A.fl.Af));this.Gr.A2(A.aaL(A.fl.Ak));this.Gr.Cs(A.aaL(A.fl.Bk));
},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ACQ={AjO:null,Pv:null,IV:null,_Init:
function(aArg){C.Da._Init.call(this,aArg);A.acg.Am._Init.call(this.AjO={I:this},
0);A.acg.Am._Init.call(this.Pv={I:this},0);A.acg.Am._Init.call(this.IV={I:this},
0);this.__proto__=C.ACQ;this.AjO.H(BrP);this.AjO.L(A.jb.Text);this.Pv.H(BrQ);this.
Pv.L(A.jb.Text);this.IV.H(A$S);this.IV.L(A.jb.Text);this.J(this.AjO,0);this.J(this.
Pv,0);this.J(this.IV,0);this.AjO.Ax(A.aaL(A.ach.ADc));this.Pv.Ax(A.aaL(A.ach.Ave
));this.IV.Ax(A.aaL(A.ach.Au$));},_Done:function(){this.__proto__=C.Da;this.AjO.
_Done();this.Pv._Done();this.IV._Done();C.Da._Done.call(this);},_ReInit:function(
){C.Da._ReInit.call(this);this.AjO._ReInit();this.Pv._ReInit();this.IV._ReInit();
},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.AjO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.AO0={IH:null
,AgI:null,HL:null,Bc:null,Mw:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.D2],[B=A._GetAutoObject(A.Device.Helper).W,B.A8G,B.A9X
],0);A.zX([this,this.D2],[B=A._GetAutoObject(A.Device.Helper).W,B.Wg,B.JJ],0);A.
zX([this,this.D2],[B=A._GetAutoObject(A.Device.Helper).W,B.Ara,B.Ui],0);A.zV([this
,this.D2],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.D2],this);},Dc:
function(E){C.BR.Dc.call(this,E);this.IH.L(E);this.AgI.L(E);this.HL.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HL.R(A.aaR(A.
acf.AeU));else this.HL.R(((A.aaR(A.acf.GF)+A.aaR(A.acf.Colon))+CO)+E.toFixed());
},D2:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqz()){this.Awx(((A._GetAutoObject(
A.Device.Helper).W.CK+1).toFixed()+A$E)+A._GetAutoObject(A.Device.Device).Ao.Cd(
).toFixed());this.JJ(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nc(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.Awx(A$F);this.JJ(2);this.OnSetAnimalId(-1);this.
Nc(0);}},JJ:function(E){if(this.Gender===E)return;this.Gender=E;this.AgI.Ax(A._GetAutoObject(
A.Device.Converter).AmB(E));},Awx:function(E){if(this.Mw===E)return;this.Mw=E;this.
IH.R(E);},Nc:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).AjR(E))this.HL.Y(false);else this.HL.Y(true);},_Init:
function(aArg){C.BR._Init.call(this,aArg);A.acg.Text._Init.call(this.IH={I:this}
,0);A.acg.Am._Init.call(this.AgI={I:this},0);A.acg.Text._Init.call(this.HL={I:this
},0);A.acg.DR._Init.call(this.Bc={I:this},0);this.__proto__=C.AO0;this.IH.H(A$G);
this.IH.Hq(2);this.IH.KP(true);this.IH.A7(0x12);this.IH.R(A$H);this.AgI.H(BrR);this.
HL.H(BrS);this.HL.A7(0x11);this.HL.R(A.aaR(A.acf.AeU));this.Bc.DI(Ax5);this.Bc.DY(
Ax6);this.Bc.L(A.jb.Bc);this.J(this.IH,0);this.J(this.AgI,0);this.J(this.HL,0);this.
J(this.Bc,0);this.IH.S(A.aaL(A.fl.Ak));this.AgI.Ax(A._GetAutoObject(A.Device.Converter
).AmB(2));this.HL.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.IH._Done();this.AgI._Done();this.HL._Done();this.Bc._Done();C.BR._Done.
call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.IH._ReInit();this.AgI.
_ReInit();this.HL._ReInit();this.Bc._ReInit();this.HL.R(A.aaR(A.acf.AeU));this.IH.
S(A.aaL(A.fl.Ak));this.HL.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.
call(this,D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.AaI={EaseOfDeliveryToString:null,Agz:null,Ce:function(G){C.Nz.Ce.call(this,G
);var AJr=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Kl(this.EaseOfDeliveryToString.
Lr(AJr));this.GS.R(this.Agz.Ad1(AJr).toFixed());},Dc:function(E){C.Nz.Dc.call(this
,E);this.GS.L(E);},_Init:function(aArg){C.Nz._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.Agz._Init.call(this.
Agz={I:this},0);this.__proto__=C.AaI;this.T(A.aaR(A.acf.Agr));},_Done:function(){
this.__proto__=C.Nz;this.EaseOfDeliveryToString._Done();this.Agz._Done();C.Nz._Done.
call(this);},_ReInit:function(){C.Nz._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.Agz._ReInit();this.T(A.aaR(A.acf.Agr));},_Mark:function(D){var B;
C.Nz._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XG={WhereAboutsToString:null,KV:null,Ce:function(G){C.Nz.Ce.call(this,G);var
K6=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kl(this.WhereAboutsToString.
Lr(K6));this.GS.R(this.KV.Ad1(K6).toFixed());},Dc:function(E){C.Nz.Dc.call(this,
E);this.GS.L(E);},_Init:function(aArg){C.Nz._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KV._Init.call(this.KV={
I:this},0);this.__proto__=C.XG;this.T(A.aaR(A.acf.I6));},_Done:function(){this.__proto__=
C.Nz;this.WhereAboutsToString._Done();this.KV._Done();C.Nz._Done.call(this);},_ReInit:
function(){C.Nz._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KV._ReInit(
);this.T(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.Nz._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RP={Co:null,Z:null,Ay:null,Init:function(aArg){},CA:function(G){var B;C.D5.CA.
call(this,G);A.zX([this,this.Afr],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.
OnSetId],0);A.zX([this,this.Afr],[B=A._GetAutoObject(A.Device.Helper),B.UP,B.UQ]
,0);A.pe([this,this.Afr],this);},EX:function(G){var B;C.D5.EX.call(this,G);A.z$([
this,this.Afr],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId],0);A.z$([this
,this.Afr],[B=A._GetAutoObject(A.Device.Helper),B.UP,B.UQ],0);},Fa:function(G){var
B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.
Mt(-this.Z.Bt[1]);},Dz:function(G){switch(this.Co.CN){case 6:case 7:this.Co.NC=true;
break;case 4:this.Bfm(4);break;case 5:this.Bfm(5);break;default:;}},Bfm:function(
Gs){var B;switch(Gs){case 5:{var CB=this.Z.Bt[1]-40;if(CB<-(((B=this.Z.Df(0x1))[
3]-B[1])-((B=this.Z.M)[3]-B[1])))CB=-(((B=this.Z.Df(0x1))[3]-B[1])-((B=this.Z.M)[
3]-B[1]));if(CB>0)CB=0;this.Z.Gj([this.Z.Bt[0],CB]);}break;case 4:{var CB=this.Z.
Bt[1]+40;if(CB>0)CB=0;this.Z.Gj([this.Z.Bt[0],CB]);}break;default:throw new Error(
BrT);}},Gz:function(G){var B;var X=this.Z.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.IR.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},Afr:function(s){this.Gz(s);},MO:function(G){var B;this.Z.Vi(null,null
);if(!!this.AW&&((this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);},
_Init:function(aArg){C.D5._Init.call(this,aArg);A.Core.BL._Init.call(this.Co={I:
this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RP;this.Co.Filter=147;this.Z.H(S1);this.Z.Kg(1);this.Ay.H(Asr
);this.J(this.Z,0);this.J(this.Ay,0);this.Co.BM=[this,this.Dz];this.Co.DX=[this,
this.Dz];this.Z.En=[this,this.Fa];this.Init(aArg);},_Done:function(){this.__proto__=
C.D5;this.Co._Done();this.Z._Done();this.Ay._Done();C.D5._Done.call(this);},_ReInit:
function(){C.D5._ReInit.call(this);this.Co._ReInit();this.Z._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D5._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XH={AaC:null,
XD:null,AaD:null,XE:null,AaI:null,XG:null,_Init:function(aArg){C.RP._Init.call(this
,aArg);C.AaC._Init.call(this.AaC={I:this},0);C.XD._Init.call(this.XD={I:this},0);
C.AaD._Init.call(this.AaD={I:this},0);C.XE._Init.call(this.XE={I:this},0);C.AaI.
_Init.call(this.AaI={I:this},0);C.XG._Init.call(this.XG={I:this},0);this.__proto__=
C.XH;this.AaC.H(BF);this.AaC.Aj(true);this.XD.H(JS);this.XD.Aj(true);this.XD.Bi(
true);this.AaD.H(P4);this.AaD.Aj(true);this.XE.H(ZZ);this.XE.Aj(true);this.XE.Bi(
true);this.AaI.H(AkW);this.AaI.Aj(true);this.XG.H(An8);this.XG.Aj(true);this.XG.
Bi(true);this.J(this.AaC,0);this.J(this.XD,0);this.J(this.AaD,0);this.J(this.XE,
0);this.J(this.AaI,0);this.J(this.XG,0);},_Done:function(){this.__proto__=C.RP;this.
AaC._Done();this.XD._Done();this.AaD._Done();this.XE._Done();this.AaI._Done();this.
XG._Done();C.RP._Done.call(this);},_ReInit:function(){C.RP._ReInit.call(this);this.
AaC._ReInit();this.XD._ReInit();this.AaD._ReInit();this.XE._ReInit();this.AaI._ReInit(
);this.XG._ReInit();},_Mark:function(D){var B;C.RP._Mark.call(this,D);if((B=this.
AaC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XE)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XG)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XE={
BreedToString:null,GS:null,M0:null,Ce:function(G){C.Iu.Ce.call(this,G);var Bx=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BS(Bx));this.GS.
R(this.M0.Ad1(Bx).toFixed());},Dc:function(E){C.Iu.Dc.call(this,E);this.GS.L(E);
},_Init:function(aArg){C.Iu._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.GS={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XE;this.BT.H(BrU);this.GS.H(BrV
);this.GS.Hq(5);this.GS.A7(0x14);this.GS.R(BrW);this.GS.L(A.jb.Text);this.J(this.
GS,0);this.Ho.Ax(A.aaL(A.ach.AC5));this.GS.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.Iu;this.BreedToString._Done();this.GS._Done();this.M0._Done();C.
Iu._Done.call(this);},_ReInit:function(){C.Iu._ReInit.call(this);this.BreedToString.
_ReInit();this.GS._ReInit();this.M0._ReInit();this.GS.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Iu._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaD={
Ce:function(G){C.Iu.Ce.call(this,G);var AzP=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AzP>0)this.T(A._GetAutoObject(A.Device.Converter).Ra(AzP));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.Iu._Init.call(this,aArg);this.__proto__=
C.AaD;this.Ho.Ax(A.aaL(A.ach.APG));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XD={Yk:null,Ce:function(G){C.Iu.Ce.call(this,G);var S_=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfF=A._GetAutoObject(A.Device.Helper).W.BirthType;if(S_>
0)this.T(A._GetAutoObject(A.acj.KG).AjA(S_));else this.T(A.aaR(A.acf.Unknown));var
AyI=A.aaL(A.aci.TE);switch(AfF){case 0:AyI=A.aaL(A.ach.AC2);break;case 1:{AyI=A.
aaL(A.ach.Ava);this.Yk.Cx(0);}break;case 2:{AyI=A.aaL(A.ach.Ava);this.Yk.Cx(1);}
break;case 3:{AyI=A.aaL(A.ach.Ava);this.Yk.Cx(2);}break;default:A.ab5("%s%e",BrX
,AfF);}this.Yk.Ax(AyI);},_Init:function(aArg){C.Iu._Init.call(this,aArg);A.acg.Am.
_Init.call(this.Yk={I:this},0);this.__proto__=C.XD;this.BT.H(BrY);this.Yk.H(AHr);
this.Yk.L(A.jb.Text);this.J(this.Yk,0);this.Ho.Ax(A.aaL(A.ach.Au$));this.Yk.Ax(A.
aaL(A.ach.AC2));},_Done:function(){this.__proto__=C.Iu;this.Yk._Done();C.Iu._Done.
call(this);},_ReInit:function(){C.Iu._ReInit.call(this);this.Yk._ReInit();},_Mark:
function(D){var B;C.Iu._Mark.call(this,D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaC={Kz:0,XF:null,K6:0
,Bj:function(aSize){C.Iu.Bj.call(this,aSize);this.XF.H(this.Ho.M);},Ai:function(
Ae){C.Iu.Ai.call(this,Ae);this.XF.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).AjR(this.K6)){this.T(A.aaR(A.acf.AnimalLoss));this.Ho.Y(false);this.XF.Y(true);
}else if(this.Kz>0){this.T(A._GetAutoObject(A.Device.Converter).Ra(this.Kz));this.
Ho.Y(true);this.XF.Y(false);}else{this.T(A.aaR(A.acf.Unknown));this.Ho.Y(true);this.
XF.Y(false);}},Ce:function(G){C.Iu.Ce.call(this,G);this.Kz=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K6=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.An(
);},_Init:function(aArg){C.Iu._Init.call(this,aArg);A.acg.Text._Init.call(this.XF={
I:this},0);this.__proto__=C.AaC;this.XF.R(A$0);this.J(this.XF,0);this.Ho.Ax(A.aaL(
A.ach.Ave));this.XF.S(A.aaL(A.fl.Hm));},_Done:function(){this.__proto__=C.Iu;this.
XF._Done();C.Iu._Done.call(this);},_ReInit:function(){C.Iu._ReInit.call(this);this.
XF._ReInit();},_Mark:function(D){var B;C.Iu._Mark.call(this,D);if((B=this.XF)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AL2={XH:null,Init:function(aArg){var B;A.zX([this,this.Az7],[B=A._GetAutoObject(
A.Device.Device),B.AD4,B.AIg],0);A.pe([this,this.Az7],this);},Dz:function(G){var
D1=(A.Core.BL.isPrototypeOf(G)?G:null);switch(D1.CN){case 6:this.On(this);break;
case 7:this.MU(this);break;default:D1.NC=true;}},CA:function(G){var B;this.XH.CA(
this);C.AB.CA.call(this,G);},EX:function(G){var B;this.XH.EX(this);C.AB.EX.call(
this,G);},Am8:function(G){A._GetAutoObject(C.A1).Fr();},Xo:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).Ao.Cd()<=1)return;var Lz=A._GetAutoObject(A.Device.Helper).W.CK;Lz=Lz+1;
if(Lz>=A._GetAutoObject(A.Device.Device).Ao.Cd())Lz=0;A._GetAutoObject(A.Device.
Helper).HH(Lz);},On:function(G){if(A._GetAutoObject(A.Device.Device).Ao.Cd()<=1)
return;var Lz=A._GetAutoObject(A.Device.Helper).W.CK;Lz=Lz-1;if(Lz<0)Lz=A._GetAutoObject(
A.Device.Device).Ao.Cd()-1;A._GetAutoObject(A.Device.Helper).HH(Lz);},Az7:function(
G){if(!A._GetAutoObject(A.Device.Device).Ap6)A._GetAutoObject(C.A1).Ahg(85);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XH._Init.call(this.XH={I:this},0);this.
__proto__=C.AL2;this.Background.H(Cc);this.N.Y(true);this.N.OM(true);this.N.ON(true
);this.Dn(C.AO0);this.XH.H(E7);this.J(this.XH,0);this.N.Cz=[this,this.Am8];this.
N.Cj=[this,this.Xo];this.N.CY(A.aaL(A.ach.EW));this.N.Cp(A.aaL(A.ach.Abk));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XH._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XH._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XH)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.Iu={Ho:null,BT:null
,T:function(E){C.IR.T.call(this,E);this.BT.R(this.DH);},Dc:function(E){C.IR.Dc.call(
this,E);this.Ho.L(E);this.BT.L(E);},_Init:function(aArg){C.IR._Init.call(this,aArg
);A.acg.Am._Init.call(this.Ho={I:this},0);C.CG._Init.call(this.BT={I:this},0);this.
__proto__=C.Iu;this.Ho.H(BrZ);this.Ho.L(A.jb.Text);this.BT.H(Br0);this.BT.A7(0x11
);this.BT.L(A.jb.Text);this.J(this.Ho,0);this.J(this.BT,0);this.Ho.Ax(A.aaL(A.aci.
TE));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IR;this.Ho._Done();this.BT._Done();C.IR._Done.call(this);},_ReInit:function(
){C.IR._ReInit.call(this);this.Ho._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IR._Mark.call(this
,D);if((B=this.Ho)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IR={Background:null
,KQ:0,Hc:false,CS:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Ba2],[B=A._GetAutoObject(A.Device.Helper).W,B.QV,B.OnSetId],0);A.pe([this,
this.Ba2],this);},Bj:function(aSize){C.G$.Bj.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.G$.Ai.call(this,Ae);if(this.
Hc)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CI);},Ce:function(G){}
,Ba2:function(s){this.Ce(s);},Bi:function(E){if(this.Hc===E)return;this.Hc=E;this.
An();},Dc:function(E){if(this.KQ===E)return;this.KQ=E;},_Init:function(aArg){C.G$.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.IR;this.H(BF);this.Background.H(AHW);this.KQ=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.G$;this.Background._Done(
);C.G$._Done.call(this);},_ReInit:function(){C.G$._ReInit.call(this);this.Background.
_ReInit();this.CS();},_Mark:function(D){var B;C.G$._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.Nz={GS:null,BAa:function(G){this.BT.H(A.abN(this.BT.M,this.GS.M[0]));},_Init:
function(aArg){C.Fq._Init.call(this,aArg);A.acg.Text._Init.call(this.GS={I:this}
,0);this.__proto__=C.Nz;this.GS.A3(0xA);this.GS.H(Br1);this.GS.Hq(5);this.GS.IZ(
true);this.GS.A7(0x14);this.GS.R(A.jV);this.GS.L(A.jb.Text);this.J(this.GS,0);this.
GS.QZ([this,this.BAa]);this.GS.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fq;this.GS._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(
this);this.GS._ReInit();this.GS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fq.
_Mark.call(this,D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.AwR={AQA:null,_Init:function(aArg){C.Zg._Init.call(this,aArg);this.__proto__=
C.AwR;},_Mark:function(D){var B;C.Zg._Mark.call(this,D);if((B=this.AQA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.AM8={Wf:null,Wz:0,Awh:function(E){C.Amn.Awh.call(this,E);if(E)this.Pl.R(Br2);
else this.Pl.R(A$2);},Bmp:function(E){if(A.aaZ(this.Wf,E))return;if(!!this.Wf)A.
z$([this,this.A2Q],this.Wf,0);this.Wf=E;if(!!E)A.zX([this,this.A2Q],E,0);if(!!E)
A.pe([this,this.A2Q],this);},AFi:function(E){var F;if(this.Wz===E)return;this.Wz=
E;this.Awh(!!this.Wf&&((F=this.Wf,F[1].call(F[0]))===E));},A2Q:function(G){var F;
this.Awh(!!this.Wf&&((F=this.Wf,F[1].call(F[0]))===this.Wz));},_Init:function(aArg
){C.Amn._Init.call(this,aArg);this.__proto__=C.AM8;this.Pl.R(A$2);this.Pl.S(A.aaL(
A.fl.Hm));},_Mark:function(D){var B;C.Amn._Mark.call(this,D);if((B=this.Wf)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.AwT={Wf:null,Wz:0,_Init:function(aArg){C.Zg._Init.call(this,aArg);this.__proto__=
C.AwT;},_Mark:function(D){var B;C.Zg._Mark.call(this,D);if((B=this.Wf)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATs={GG:null,_Init:function(aArg){C.Ct._Init.call(this,aArg);C.Q5._Init.call(
this.GG={I:this},0);this.__proto__=C.ATs;var B;this.JK(A.aaR(A.acf.ACd));this.GG.
H(AhJ);this.GG.Aj(true);this.GG.Y(true);this.GG.T(A.aaR(A.acf.AFK));this.GG.Ary(
false);this.GG.A9U(true);this.J(this.GG,0);this.GG.AeB([B=this.GG,B.FN]);this.GG.
Gi([this,this.D6,this.GI]);this.GG.Aki(A.aaL(A.ach.Edit));this.GG.As([B=A._GetAutoObject(
A.Device.Device),B.AR8,B.AZN]);},_Done:function(){this.__proto__=C.Ct;this.GG._Done(
);C.Ct._Done.call(this);},_ReInit:function(){C.Ct._ReInit.call(this);this.GG._ReInit(
);this.JK(A.aaR(A.acf.ACd));this.GG.T(A.aaR(A.acf.AFK));},_Mark:function(D){var B;
C.Ct._Mark.call(this,D);if((B=this.GG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATq={GA:0,C6:null,AV:null,Kd:null,E2:null
,GermanStateToString:null,CountryToString:null,Ps:0,K8:0,L6:false,Init:function(
aArg){A.zX([this,this.MF],[this,this.Ss,this.Lm],0);A.zX([this,this.MF],[this,this.
Am$,this.Ahb],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.AV.FF(this.LO);this.
Kd.FF(this.LO);this.E2.CX(this.LO);},DG:function(G){var F;if(!this.N)return;switch(
this.A9){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=
this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=
this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[
1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[
0])).B2(this.CountryToString.BS(this.K8));(F=this.N,F[1].call(F[0])).Cf=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])
).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0]
)).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(
F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2((A.aaR(A.acf.Gq
)+AxE)+this.GermanStateToString.Lr(A._GetAutoObject(A.Device.Converter).ACo(this.
Ps)));(F=this.N,F[1].call(F[0])).Cf=null;}break;default:{(F=this.N,F[1].call(F[0
])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(
F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(
F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;}}}
,Es:function(EJ){var Tf=this.A9;if(EJ<0)EJ=0;else if(EJ>this.Ry)EJ=this.Ry;switch(
EJ){case 0:{this.Bb(null);if(!this.GA&&!this.Ps)this.Lm(0);}break;case 1:this.Bb(
this.E2);break;case 2:this.Bb(this.Kd);break;case 3:if(((Tf===2)&&!this.Ps)&&!this.
GA)return;else{this.Bb(this.AV);if(!this.GA||(Tf>0))this.AV.SA(2);else this.AV.SA(
7);}break;default:throw new Error(AsS+EJ.toFixed());}this.A9=EJ;C.Eg.Es.call(this
,EJ);},BC:function(E){if(this.AM===E)return;this.AM=E;this.L6=true;this.St(A._GetAutoObject(
A.Device.Helper).R$(E,0,10));this.Ahb(A._GetAutoObject(A.Device.Helper).R$(E,10,
2)|0);this.Lm(A._GetAutoObject(A.Device.Converter).ZG(E));this.L6=false;if(!!this.
AM){this.Kd.Kh(2);this.AV.Kh(10);}else{this.Kd.Kh(0);this.AV.Kh(0);}this.An();},
FN:function(G){var F;if(!this.AM){var BQ=this.AM;this.BC(A._GetAutoObject(A.Device.
Helper).ACz());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Es(2);}else this.Es(this.Ry);},AjB:function(){return this.GA;
},AjD:function(){return 9999999999;},Lm:function(E){if(this.K8===E)return;this.K8=
E;if(this.L6===false)A.pe([this,this.U$],this);A.abo([this,this.Ss,this.Lm],0);}
,St:function(E){if(this.GA===E)return;this.GA=E;if(this.L6===false)A.pe([this,this.
U$],this);A.abo([this,this.AbI,this.St],0);},U$:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqc(this.K8),3,10)+A.abl(this.Ps,2,10))+
A.abm(this.GA,10,10);var BQ=this.AM;this.BC(A.ab0(aString,0,10));if(this.AM!==BQ
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahb:function(
E){if(this.Ps===E)return;this.Ps=E;if(this.L6===false)A.pe([this,this.U$],this);
A.abo([this,this.Am$,this.Ahb],0);},Ss:function(){return this.K8;},AbI:function(
){return this.GA;},Am$:function(){return this.Ps;},_Init:function(aArg){C.Eg._Init.
call(this,aArg);C.C6._Init.call(this.C6={I:this},0);C.AQu._Init.call(this.AV={I:
this},0);C.Avo._Init.call(this.Kd={I:this},0);C.Ase._Init.call(this.E2={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATq;var B;this.Ry=3;this.AV.H(Br3);this.Kd.H(Br4);this.Kd.E4(16);this.E2.H(A$3
);this.J(this.AV,0);this.J(this.Kd,0);this.J(this.E2,0);this.C6.AEx([this,this.Ss
,this.Lm]);this.AV.As([this,this.AbI,this.St]);this.Kd.As([this,this.Am$,this.Ahb
]);this.E2.CJ(this.C6);this.E2.As([B=this.C6,B.B$,B.Ca]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Eg;this.C6._Done();this.AV._Done();this.Kd._Done();this.
E2._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.C6._ReInit();this.AV.
_ReInit();this.Kd._ReInit();this.E2._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AV)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E2)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQu={NF:null,NE:null,EO:null,FS:null,Ek:null,Du:null,CU:null,Cr:null,FF:function(
E){if(this.M4===E)return;C.Le.FF.call(this,E);this.Cr.CX(E);this.CU.CX(E);this.Du.
CX(E);this.Ek.CX(E);this.FS.CX(E);this.EO.CX(E);this.NE.CX(E);this.NF.CX(E);},Yd:
function(Ht){var B6=null;switch(Ht){case-1:case 0:B6=this.FT;break;case 1:B6=this.
Cr;break;case 2:B6=this.CU;break;case 3:B6=this.Du;break;case 4:B6=this.Ek;break;
case 5:B6=this.FS;break;case 6:B6=this.EO;break;case 7:B6=this.NE;break;case 8:B6=
this.NF;break;case 9:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;},_Init:
function(aArg){C.Le._Init.call(this,aArg);C.DB._Init.call(this.NF={I:this},0);C.
DB._Init.call(this.NE={I:this},0);C.DB._Init.call(this.EO={I:this},0);C.DB._Init.
call(this.FS={I:this},0);C.DB._Init.call(this.Ek={I:this},0);C.DB._Init.call(this.
Du={I:this},0);C.DB._Init.call(this.CU={I:this},0);C.DB._Init.call(this.Cr={I:this
},0);this.__proto__=C.AQu;this.H(Br5);this.GQ.H(AH9);this.NF.H(Ax9);this.NE.H(AZm
);this.EO.H(AZn);this.FS.H(AZo);this.Ek.H(AZp);this.Du.H(AZq);this.CU.H(AZr);this.
Cr.H(A$N);this.FT.H(AZs);this.EH.H(AZs);this.J(this.NF,-2);this.J(this.NE,-2);this.
J(this.EO,-2);this.J(this.FS,-2);this.J(this.Ek,-2);this.J(this.Du,-2);this.J(this.
CU,-2);this.J(this.Cr,-2);this.NF.Dk=[this,this.GK];this.NE.Dk=[this,this.GK];this.
EO.Dk=[this,this.GK];this.FS.Dk=[this,this.GK];this.Ek.Dk=[this,this.GK];this.Du.
Dk=[this,this.GK];this.CU.Dk=[this,this.GK];this.Cr.Dk=[this,this.GK];},_Done:function(
){this.__proto__=C.Le;this.NF._Done();this.NE._Done();this.EO._Done();this.FS._Done(
);this.Ek._Done();this.Du._Done();this.CU._Done();this.Cr._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.NF._ReInit();this.NE._ReInit(
);this.EO._ReInit();this.FS._ReInit();this.Ek._ReInit();this.Du._ReInit();this.CU.
_ReInit();this.Cr._ReInit();},_Mark:function(D){var B;C.Le._Mark.call(this,D);if((
B=this.NF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Du)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cr
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATr={
GA:0,C6:null,AV:null,E2:null,CountryToString:null,K8:0,L6:false,Init:function(aArg
){A.zX([this,this.MF],[this,this.Ss,this.Lm],0);},Ai:function(Ae){C.Eg.Ai.call(this
,Ae);this.AV.FF(this.LO);this.E2.CX(this.LO);},DG:function(G){var F;if(!this.N)return;
switch(this.A9){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW
));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.
G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.
N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).B2(this.CountryToString.BS(this.K8));(F=this.N,F[1].call(F[0])).Cf=null;}
break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(
F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(
F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=
null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=
this.N,F[1].call(F[0])).Cf=null;}}},Es:function(EJ){var Tf=this.A9;if(EJ<0)EJ=0;
else if(EJ>this.Ry)EJ=this.Ry;switch(EJ){case 0:{this.Bb(null);if(!this.GA)this.
Lm(0);}break;case 1:this.Bb(this.E2);break;case 2:{this.Bb(this.AV);if(!this.GA||(
Tf>0))this.AV.SA(2);else this.AV.SA(7);}break;default:throw new Error(AsS+EJ.toFixed(
));}this.A9=EJ;C.Eg.Es.call(this,EJ);},BC:function(E){if(this.AM===E)return;this.
AM=E;this.L6=true;this.St(A._GetAutoObject(A.Device.Helper).R$(E,0,12));this.Lm(
A._GetAutoObject(A.Device.Converter).ZG(E));this.L6=false;if(!!this.AM)this.AV.Kh(
12);else this.AV.Kh(0);this.An();},FN:function(G){var F;if(!this.AM){var BQ=this.
AM;this.BC(A._GetAutoObject(A.Device.Helper).ACz());if(this.AM!==BQ){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Es(this.Ry);},AjB:function(
){return this.GA;},AjD:function(){return 999999999999;},Lm:function(E){if(this.K8===
E)return;this.K8=E;if(this.L6===false)A.pe([this,this.U$],this);A.abo([this,this.
Ss,this.Lm],0);},St:function(E){if(this.GA===E)return;this.GA=E;if(this.L6===false
)A.pe([this,this.U$],this);A.abo([this,this.AbI,this.St],0);},U$:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqc(this.K8),3,10)+A.abm(
this.GA,12,10);var BQ=this.AM;this.BC(A.ab0(aString,0,10));if(this.AM!==BQ){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ss:function(){return this.
K8;},AbI:function(){return this.GA;},_Init:function(aArg){C.Eg._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.ADi._Init.call(this.AV={I:this},0);C.Ase.
_Init.call(this.E2={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATr;var B;this.Ry=2;this.AV.H(Br6);this.E2.H(A$3);this.
J(this.AV,0);this.J(this.E2,0);this.C6.AEx([this,this.Ss,this.Lm]);this.AV.As([this
,this.AbI,this.St]);this.E2.CJ(this.C6);this.E2.As([B=this.C6,B.B$,B.Ca]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Eg;this.C6._Done();this.AV._Done();this.
E2._Done();this.CountryToString._Done();C.Eg._Done.call(this);},_ReInit:function(
){C.Eg._ReInit.call(this);this.C6._ReInit();this.AV._ReInit();this.E2._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AV)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DV:null,Z:null,Ay:null,XX:null,XY:null,XW:null,XU:null,XV:null,Dz:function(
G){var B;C.AB.Dz.call(this,G);if(!!this.AW&&((this.AW.U&0x400)===0x400))this.Z.HA(
this.AW,true,null,null);},CA:function(G){C.AB.CA.call(this,G);A._GetAutoObject(A.
Device.Device).Ao.Bl(null);A._GetAutoObject(A.Device.Device).Bu.Bl(null);A._GetAutoObject(
A.Device.Helper).Akx();A._GetAutoObject(A.Device.Helper).ArY();},H$:function(G){
var Cv=(C.Ff.isPrototypeOf(G)?G:null);if(!Cv)return;if(Cv===this.XX)A._GetAutoObject(
C.A1).BU(28);else if(Cv===this.XY)A._GetAutoObject(C.A1).BU(26);else if(Cv===this.
XW)A._GetAutoObject(C.A1).BU(62);else if(Cv===this.XU)A._GetAutoObject(C.A1).BU(
27);else if(Cv===this.XV)A._GetAutoObject(C.A1).BU(89);},A2U:function(G){A._GetAutoObject(
C.A1).Fr();},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.
Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DV={I:this},0);A.Core.Z._Init.call(this.
Z={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ff._Init.call(this.XX={I:this
},0);C.Ff._Init.call(this.XY={I:this},0);C.Ff._Init.call(this.XW={I:this},0);C.Ff.
_Init.call(this.XU={I:this},0);C.Ff._Init.call(this.XV={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.C2);this.N.Y(true);this.N.B2(A.jV);this.Ef.Ar(false
);this.Dn(C.AqB);this.DV.A3(0x3F);this.DV.H(E7);this.DV.L(A.jb.CI);this.Z.H(E7);
this.Z.Kg(9);this.Ay.H(IJ);this.XX.H(P1);this.XX.Aj(true);this.XX.T(A.aaR(A.acf.
A7s));this.XY.H(AZy);this.XY.Aj(true);this.XY.T(A.aaR(A.acf.NewAnimals));this.XW.
H(N$);this.XW.Aj(true);this.XW.T(A.aaR(A.acf.Calving));this.XU.H(P2);this.XU.Aj(
true);this.XU.T(A.aaR(A.acf.ABu));this.XV.H(ME);this.XV.Aj(true);this.XV.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DV,0);this.J(this.Z,0);this.J(this.Ay,0);this.J(this.
XX,0);this.J(this.XY,0);this.J(this.XW,0);this.J(this.XU,0);this.J(this.XV,0);this.
N.Cz=[this,this.A2U];this.N.CY(A.aaL(A.ach.EW));this.Z.En=[this,this.Fa];this.XX.
AR=[this,this.H$];this.XX.DD(A.aaL(A.ach.ADd));this.XY.AR=[this,this.H$];this.XY.
DD(A.aaL(A.ach.Avi));this.XW.AR=[this,this.H$];this.XW.DD(A.aaL(A.ach.APz));this.
XU.AR=[this,this.H$];this.XU.DD(A.aaL(A.ach.APw));this.XV.AR=[this,this.H$];this.
XV.DD(A.aaL(A.ach.APp));},_Done:function(){this.__proto__=C.AB;this.DV._Done();this.
Z._Done();this.Ay._Done();this.XX._Done();this.XY._Done();this.XW._Done();this.XU.
_Done();this.XV._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DV._ReInit();this.Z._ReInit();this.Ay._ReInit();this.XX._ReInit(
);this.XY._ReInit();this.XW._ReInit();this.XU._ReInit();this.XV._ReInit();this.XX.
T(A.aaR(A.acf.A7s));this.XY.T(A.aaR(A.acf.NewAnimals));this.XW.T(A.aaR(A.acf.Calving
));this.XU.T(A.aaR(A.acf.ABu));this.XV.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARo={K1:null,EaseOfDelivery:null,BirthType:null,Acs:null
,Li:null,Ck:null,GX:null,Lg:null,Azh:true,Init:function(aArg){this.Bb(this.C_);A.
pe([this,this.Gz],this);},Er:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.He();A._GetAutoObject(C.A1).Fr();if(!!this.K1)this.K1.Er(this);},AfY:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ew((F=this.BY.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.Awi(true);if(!!this.K1)this.K1.AfY(this
);if(A._GetAutoObject(A.Device.Device).Ao.Lf())A._GetAutoObject(A.Device.Helper).
AJO(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.Apm]);else{this.AiN();A.
pe([this,this.ApM],this);}},AtT:function(){this.N.B2(A.jV);this.N.C5(A.aaL(A.ach.
ADh));this.N.Cf=[this,this.Ayo];},CA:function(G){var B;C.HU.CA.call(this,G);if(A.
_GetAutoObject(A.Device.Device).Ao.Lf()){A._GetAutoObject(A.Device.Device).A_(41
,true,A._GetAutoObject(A.Device.Device).Ao.HC().toFixed(),0,null);this.Er(this);
}else if(this.Azh){this.Azh=false;A.pe([this,this.A29],this);}else if(!this.K1){
this.K1=A._NewObject(C.ARp,0);this.K1.A9q([this,this.AAs]);A._GetAutoObject(A.Device.
Helper).W.Gh();A._GetAutoObject(A.Device.Helper).Ap0(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nc(this.Aso.Ad1(6));this.K1.LL(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Er(this);}},AiN:function(
){A._GetAutoObject(A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device).Ao);var
L3=A._GetAutoObject(A.Device.Device).Ao.La(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SB(L3);if(A._GetAutoObject(A.Device.Helper
).AmO()){if(A._GetAutoObject(A.Device.Device).Bu.Lf())A._GetAutoObject(A.Device.
Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bu.HC().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KE);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Cn(A._GetAutoObject(A.Device.Device).Bu);}}A.
_GetAutoObject(A.Device.Helper).A6y(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},ApM:function(G){var B;if(!!this.K1)this.K1.ApM(this);},Gz:function(G){if(
A._GetAutoObject(A.Device.Helper).AmO())this.C9.Y(true);else this.C9.Y(false);},
Apm:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",AsF,At.Id);}},AAs:function(G){this.
LL(this);this.AeD(A._GetAutoObject(A.Device.Helper).Aa_(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.Jw(this.C_);},Apn:function(G){var F;C.HU.Apn.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnF));},A29:function(G){A._GetAutoObject(
C.A1).BU(90);},_Init:function(aArg){C.HU._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Acs._Init.call(this.Acs={I:this},0);C.Q5._Init.call(this.Li={I:this
},0);C.SE._Init.call(this.Ck={I:this},0);C.BZ._Init.call(this.GX={I:this},0);C.BZ.
_Init.call(this.Lg={I:this},0);this.__proto__=C.ARo;var B;this.Dn(C.AOX);this.Li.
H(AhJ);this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ABU));this.CF.H(Acz);this.Ck.H(Acz
);this.Ck.Aj(true);this.Ck.T(A.aaR(A.acf.AdX));this.Ck.AFa(true);this.GX.H(Acz);
this.GX.Aj(true);this.GX.T(A.aaR(A.acf.Aq1));this.Lg.H(Acz);this.Lg.Aj(true);this.
Lg.T(A.aaR(A.acf.Agr));this.J(this.Li,-5);this.J(this.Ck,-3);this.J(this.GX,-1);
this.J(this.Lg,-1);this.EaseOfDelivery.LV(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LV(A._GetAutoObject(A.Device.Helper).W);this.Acs.LV(A._GetAutoObject(A.
Device.Helper).W);this.Li.Gi([this,this.D6,this.GI]);this.Li.As([B=A._GetAutoObject(
A.Device.Helper).W,B.AR4,B.Ann]);this.Ck.Gi([this,this.D6,this.GI]);this.Ck.LU([
B=this.Ck,B.FN]);this.Ck.LX(A.aaL(A.ach.Edit));this.Ck.AbT([B=A._GetAutoObject(A.
Device.Helper).W,B.AvJ,B.QX]);this.Gd.As([B=this.Acs,B.B$,B.Ca]);this.Gd.CJ(this.
Acs);this.GX.As([B=this.BirthType,B.B$,B.Ca]);this.GX.CJ(this.BirthType);this.Lg.
As([B=this.EaseOfDelivery,B.B$,B.Ca]);this.Lg.CJ(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HU;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.Acs._Done();this.Li._Done();this.Ck._Done();this.GX._Done();this.Lg.
_Done();C.HU._Done.call(this);},_ReInit:function(){C.HU._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Acs._ReInit();this.Li._ReInit(
);this.Ck._ReInit();this.GX._ReInit();this.Lg._ReInit();this.Li.T(A.aaR(A.acf.ABU
));this.Ck.T(A.aaR(A.acf.AdX));this.GX.T(A.aaR(A.acf.Aq1));this.Lg.T(A.aaR(A.acf.
Agr));},_Mark:function(D){var B;C.HU._Mark.call(this,D);if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ck).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AL4={Init:function(aArg){var B;A.zX([this,this.BfV],[B=A._GetAutoObject(A.Device.
Device),B.AD$,B.AIl],0);A.pe([this,this.BfV],this);},AKj:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbE){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACq();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOe();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mm();break;default:throw new Error(AZB+A.
_GetAutoObject(A.Device.Device).AbE.toFixed());}A._GetAutoObject(A.Device.Device
).Ao.Bl(Be);},BfV:function(G){switch(A._GetAutoObject(A.Device.Device).AbE){case
0:this.Dx(A.aaR(A.acf.ARu));break;case 1:this.Dx(A.aaR(A.acf.Bjo));break;case 2:
this.Dx(A.aaR(A.acf.AvB));break;default:A.ab5("%s",AZB+A._GetAutoObject(A.Device.
Device).AbE.toFixed());}},_Init:function(aArg){C.Ama._Init.call(this,aArg);this.
__proto__=C.AL4;this.Bmi(C.APb);this.Ef.AbP(A._NewObject(C.AO2,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARp={AzP:0,Ac3:null
,Auy:null,Bdx:0,A3k:0,A2d:0,Init:function(aArg){this.Bdx=A._GetAutoObject(A.Device.
Helper).W.Id;this.Ac3=A._GetAutoObject(A.Device.Device).Ao.Filter;this.AzP=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2d=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LL:function(G){A._GetAutoObject(A.Device.Helper).W.Ann(this.AzP);A._GetAutoObject(
A.Device.Helper).W.AeL(true);switch(this.A2d){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.Ew(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.Ew(2);break;default:
A.ab5("%s%e",Ax8,this.A2d);}},Er:function(G){A._GetAutoObject(A.Device.Device).Ao.
Bl(this.Ac3);if(!!this.A3k)this.BfX();},AfY:function(G){A._GetAutoObject(A.Device.
Device).Ao.Bl(null);},BfX:function(){var Atw=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).Ao.La(0,this.Bdx);Atw.EG(Ad,A._GetAutoObject(
A.Device.Device).Ao);Atw.Av7(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);Atw.
Aru(false);Atw.Awj(Atw.LactationNumber+1);Atw.Cn(A._GetAutoObject(A.Device.Device
).Ao);},ApM:function(G){this.A3k++;var Bxl=A._GetAutoObject(A.Device.Converter).
BgJ(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3k<Bxl)&&(A._GetAutoObject(
A.Device.Helper).AjR(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A_(59,true,A.jV,0,[this,this.U6]);else this.Bcv(
this);},U6:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.Bcv(this);else if(!!At&&(At.PopupState===7))this.
AAs(this);},AAs:function(G){var B;var H7=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfF=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bx=A._GetAutoObject(A.
Device.Helper).W.Breed;var S_=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJr=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Auy)(B=this.Auy
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.Ew(H7);A._GetAutoObject(
A.Device.Helper).W.Ake(AfF);A._GetAutoObject(A.Device.Helper).W.NU(Bx);A._GetAutoObject(
A.Device.Helper).W.QX(S_);A._GetAutoObject(A.Device.Helper).W.Akg(AJr);},Bcv:function(
G){this.BfX();A._GetAutoObject(C.A1).Fr();A._GetAutoObject(A.Device.Device).Ao.Bl(
this.Ac3);},A9q:function(E){if(A.aa0(this.Auy,E))return;this.Auy=E;},_Init:function(
aArg){this.__proto__=C.ARp;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ac3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Auy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMi={Init:function(aArg){
var B;A.zX([this,this.BdU],[B=A._GetAutoObject(A.Device.Device),B.ARN,B.AZC],0);
this.BdU(this);},Cn:function(){A.ab5("%s",Br7);},EG:function(AcF){C.Vh.EG.call(this
,AcF);var P;for(P=16;P>0;P--)this.H6.Set(P,this.H6.Get(P-1));this.H6.Set(0,0);if(
this.CD<17)this.CD++;else A.ab5("%s",Br8);},ADm:function(Ey){switch(Ey){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BdU:
function(G){this.EG(A._GetAutoObject(A.Device.Device).Aub);A.we(this,0);},_Init:
function(aArg){C.Vh._Init.call(this,aArg);this.__proto__=C.AMi;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.Aup={_Init:function(){C.
AMi._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.Jz={DR:null,V:null,A7l:true,T:function(E){C.IR.T.call(this,E);this.
V.R(E);},Dc:function(E){C.IR.Dc.call(this,E);this.V.L(E);},Bmm:function(E){if(this.
A7l===E)return;this.A7l=E;this.DR.Y(E);},_Init:function(aArg){C.IR._Init.call(this
,aArg);A.acg.DR._Init.call(this.DR={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.Jz;this.DR.DI(Br9);this.DR.DY(Br_);this.DR.L(A.jb.Bc);this.V.
A3(0x3F);this.V.H(Br$);this.V.A7(0x11);this.V.L(A.jb.Text);this.J(this.DR,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kb));this.V.A2(A.aaL(A.fl.Ic));this.V.Cs(A.aaL(A.
fl.Bk));},_Done:function(){this.__proto__=C.IR;this.DR._Done();this.V._Done();C.
IR._Done.call(this);},_ReInit:function(){C.IR._ReInit.call(this);this.DR._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kb));this.V.A2(A.aaL(A.fl.Ic));this.V.Cs(
A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.IR._Mark.call(this,D);if((B=this.DR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.AO2={AgE:null,Db:null,Aa8:null,Fe:null,E3:
null,Init:function(aArg){var B;A.zX([this,this.A3X],[B=A._GetAutoObject(A.Device.
Device),B.AD$,B.AIl],0);A.pe([this,this.A3X],this);},Dc:function(E){C.Yg.Dc.call(
this,E);this.Db.L(E);},AEe:function(G){A.pe([this,this.A3X],this);},AAu:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).Fc();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DN(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).Ao.Bl(Filter);}},C3:function(G){var B;var F;C.Yg.C3.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Db.Ax(A.aaL(A.ach.AjJ));return;}var Bx4=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(38,0)
)?B:null);var Ba_=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DN(14,0))?B:null);if(!!Bx4)this.Db.Ax(A.aaL(A.ach.ACF));else if(
!!Ba_&&(Ba_.A5===1))this.Db.Ax(A.aaL(A.ach.APB));else this.Db.Ax(A.aaL(A.ach.AjJ
));},A3X:function(G){var F;var Filter=null;var AN3;switch(A._GetAutoObject(A.Device.
Device).AbE){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACq();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOe();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mm();break;default:throw new Error(AZB+A._GetAutoObject(A.Device.
Device).AbE.toFixed());}var AiR=this.Aj$();if(AiR>0){AN3=A._NewObject(A.Device.Int32FilterCriterion
,0);AN3.Initialize(1,4,AiR,false);Filter.CV(AN3);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AV.AeE(false);},On:function(G){if(!this.Aj$())this.AV.AeE(true
);this.Bb(this.AV);this.An();},MU:function(G){this.AV.AeE(false);this.Bb(this.AgE
);this.An();},_Init:function(aArg){C.Yg._Init.call(this,aArg);C.AqM._Init.call(this.
AgE={I:this},0);A.acg.Am._Init.call(this.Db={I:this},0);C.Aa8._Init.call(this.Aa8={
I:this},0);A.Core.BL._Init.call(this.Fe={I:this},0);A.Core.BL._Init.call(this.E3={
I:this},0);this.__proto__=C.AO2;var B;this.H(Bsa);this.AV.H(Bsb);this.TX.H(Bsc);
this.JE.Y(false);this.AgE.H(Bsd);this.Db.H(Bse);this.Aa8.As(A._GetAutoObject(A.Device.
Device).AbE);this.Fe.Filter=6;this.E3.Filter=7;this.JO(this.A$,-1);this.J(this.AgE
,-1);this.J(this.Db,-1);this.AgE.CJ(this.Aa8);this.AgE.As([B=this.Aa8,B.B$,B.Ca]
);this.Db.Ax(A.aaL(A.ach.AjJ));this.Fe.BM=[this,this.On];this.E3.BM=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yg;this.AgE._Done();this.Db.
_Done();this.Aa8._Done();this.Fe._Done();this.E3._Done();C.Yg._Done.call(this);}
,_ReInit:function(){C.Yg._ReInit.call(this);this.AgE._ReInit();this.Db._ReInit();
this.Aa8._ReInit();this.Fe._ReInit();this.E3._ReInit();},_Mark:function(D){var B;
C.Yg._Mark.call(this,D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Aa8={Aex:null
,Init:function(aArg){var B;A.zX([this,this.Bdz],[B=A._GetAutoObject(A.Device.Device
),B.AD$,B.AIl],0);A.pe([this,this.Bdz],this);},Dr:function(){return 3;},As:function(
E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.Device).Awr(E);},ACp:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return null;return this.Aex.Asf(aIndex
);},ACr:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return-1;return this.
Aex.Asg(aIndex);},Bdz:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbE;A.
abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg);
A.Device.Aex._Init.call(this.Aex={I:this},0);this.__proto__=C.Aa8;this.Cq.Set(0,
0);this.Cq.Set(1,1);this.Cq.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.CQ;this.Aex._Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(
this);this.Aex._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=
this.Aex)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APb={Em:null,IE:null,_Init:function(aArg){C.Ev._Init.call(this,aArg);C.CG._Init.
call(this.Em={I:this},0);A.acg.Text._Init.call(this.IE={I:this},0);this.__proto__=
C.APb;this.H(O1);this.Background.H(O1);this.Em.H(AHX);this.Em.R(A.aaR(A.acf.A6E)
);this.Em.A7(0x12);this.Em.L(A.jb.Text);this.IE.A3(0x3F);this.IE.H(AHY);this.IE.
Hq(5);this.IE.A7(0x14);this.IE.R(A.aaR(A.acf.AGl));this.IE.L(A.jb.Text);this.J(this.
Em,0);this.J(this.IE,0);this.Em.S(A.aaL(A.fl.Af));this.Em.A2(A.aaL(A.fl.Ic));this.
Em.Cs(A.aaL(A.fl.Bk));this.IE.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Ev;this.Em._Done();this.IE._Done();C.Ev._Done.call(this);},_ReInit:function(){
C.Ev._ReInit.call(this);this.Em._ReInit();this.IE._ReInit();this.Em.R(A.aaR(A.acf.
A6E));this.IE.R(A.aaR(A.acf.AGl));this.Em.S(A.aaL(A.fl.Af));this.Em.A2(A.aaL(A.fl.
Ic));this.Em.Cs(A.aaL(A.fl.Bk));this.IE.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Ev._Mark.call(this,D);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JQ:null,Bfx:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bej(this);else A._GetAutoObject(A.Device.Device).A_(63,true,A.
jV,0,[this,this.U6]);},Bej:function(G){A._GetAutoObject(C.A1).Fr();},U6:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.Bej(this);},_Init:function(aArg){C.Mb._Init.call(this
,aArg);A.acg.Text._Init.call(this.JQ={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dn(C.AO1);this.I5.H(Bsf);this.I5.Ako(2);this.Ach.Y(false);this.AQ6=12;this.
Number.H(Bsg);this.Number.R(A.aaR(A.acf.A_P));this.A4s=false;this.JQ.H(Bsh);this.
JQ.Hq(5);this.JQ.KP(true);this.JQ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.
aaR(A.acf.AA_));this.JQ.L(A.jb.Text);this.JO(this.I5,-1);this.JO(this.II,-1);this.
JO(this.Ach,-1);this.J(this.JQ,0);this.JQ.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mb;this.JQ._Done();C.Mb._Done.call(this);},_ReInit:function(){C.Mb._ReInit.
call(this);this.JQ._ReInit();this.Number.R(A.aaR(A.acf.A_P));this.JQ.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.AA_));this.JQ.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mb._Mark.call(this,D);if((B=this.JQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.AO1={_Init:function(aArg){C.AqA.
_Init.call(this,aArg);this.__proto__=C.AO1;this.DQ.Ew(1);},_className:"Application::HeaderScannedCowId"
};C.I5={Abv:null,Abu:null,Abt:null,Qy:null,CountryToString:null,Asi:0,CS:function(
){this.An();},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Qy.R(this.CountryToString.
Lr(A._GetAutoObject(A.Device.Converter).A62(A._GetAutoObject(A.Device.Device).Language
))+Bsi);},Ako:function(E){if(this.Asi===E)return;this.Asi=E;var bitmap=null;var A1l=
Bsj;var A1k=null;var A1m=false;switch(E){case 0:bitmap=A.aaL(A.ach.AqL);break;case
1:{bitmap=A.aaL(A.ach.AQb);A1l=Bsk;A1k=A.aaL(A.fl.Ak);A1m=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQc);A1l=Bsl;A1k=A.aaL(A.fl.Bk);A1m=true;}break;default:throw new Error(
Bsm+E.toFixed());}this.Abt.Ax(bitmap);this.Abu.Ax(bitmap);this.Abv.Ax(bitmap);this.
Qy.H(A.abJ(this.Qy.M,A1l));this.Qy.S(A1k);this.Qy.Y(A1m);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.
call(this.Abv={I:this},0);A.acg.Am._Init.call(this.Abu={I:this},0);A.acg.Am._Init.
call(this.Abt={I:this},0);A.acg.Text._Init.call(this.Qy={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.I5;this.H(AIa);this.
Abv.A3(0x3);this.Abv.H(AIa);this.Abv.L(A.jb.H2);this.Abv.Cx(2);this.Abu.A3(0x3);
this.Abu.H(AIa);this.Abu.L(A.jb.AdS);this.Abu.Cx(1);this.Abt.A3(0x3);this.Abt.H(
AIa);this.Abt.L(A.jb.Text);this.Abt.Cx(0);this.Qy.A3(0x14);this.Qy.H(Bsn);this.Qy.
L(0xFF020202);this.Qy.Y(false);this.J(this.Abv,0);this.J(this.Abu,0);this.J(this.
Abt,0);this.J(this.Qy,0);this.Abv.Ax(A.aaL(A.ach.AqL));this.Abu.Ax(A.aaL(A.ach.AqL
));this.Abt.Ax(A.aaL(A.ach.AqL));this.Qy.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.O;this.Abv._Done();this.Abu._Done();this.Abt._Done();this.Qy._Done(
);this.CountryToString._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Abv._ReInit();this.Abu._ReInit();this.Abt._ReInit(
);this.Qy._ReInit();this.CountryToString._ReInit();this.Qy.S(A.aaL(A.fl.Ak));this.
CS();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Abv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Abt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.Asi={Transponder:0,BE3:1,BE4:2};C.AOX={Am:null,Dc:function(E){C.BR.Dc.call(this
,E);this.Am.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Am._Init.
call(this.Am={I:this},0);this.__proto__=C.AOX;this.Am.H(AsQ);this.J(this.Am,0);this.
Am.Ax(A.aaL(A.ach.AOO));},_Done:function(){this.__proto__=C.BR;this.Am._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Jv:0,Aao:4,AlI:function(G){C.Q4.AlI.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bc7()){this.Jv=A._GetAutoObject(A.Device.Helper).Ur.Id;var Aii=A._GetAutoObject(
A.Device.Helper).A60(this.Jv,A._GetAutoObject(A.Device.Helper).W);if(Aii){A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Ra(this.Jv),0,[
this,this.U6]);return;}Aii=A._GetAutoObject(A.Device.Helper).BiP(this.Jv,A._GetAutoObject(
A.Device.Helper).W);if(Aii&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Jv)){A._GetAutoObject(A.Device.Device).A_(25,true,A._GetAutoObject(A.Device.
Converter).Ra(this.Jv),0,[this,this.U6]);return;}this.Aao=A._GetAutoObject(A.Device.
Helper).AQH(this.Jv);switch(this.Aao){case 0:A._GetAutoObject(A.Device.Device).A_(
45,true,this.Jv.toFixed().length.toFixed(),0,[this,this.U6]);break;case 1:case 2:{
var BO=A._GetAutoObject(A.Device.Converter).Axl(this.Jv);A._GetAutoObject(A.Device.
Device).A_(46,true,BO.toFixed(),0,[this,this.U6]);}break;case 3:this.Bfr();break;
default:throw new Error(AHL+this.Aao.toFixed());}}},Er:function(G){A._GetAutoObject(
C.A1).Fr();},U6:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.Aao===2)this.Bfr();else A._GetAutoObject(
A.Device.Device).Ahs();break;case 5:this.Er(this);break;default:;}},Bfr:function(
){A._GetAutoObject(A.Device.Helper).W.Nb(this.Jv);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.NX(this.Jv);A._GetAutoObject(
A.Device.Helper).W.Cn(A._GetAutoObject(A.Device.Device).Ao);A._GetAutoObject(A.Device.
Device).A_(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Er(this);},_Init:function(aArg){C.Q4._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Y(true);this.Dn(C.IA);this.Number.R(A.aaR(A.acf.A_I
));this.I5.H(Bso);this.II.H(Bsp);this.Ako(1);this.N.Cz=[this,this.Er];this.N.CY(
A.aaL(A.ach.EW));},_ReInit:function(){C.Q4._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_I));},_className:"Application::SetSaveNaisIdScreen"};C.ANx={LL:function(
G){C.Aqk.LL.call(this,G);A.pe([this,this.BAO],this);},BAO:function(G){this.Jw(this.
Eb);},_Init:function(aArg){C.Aqk._Init.call(this,aArg);this.__proto__=C.ANx;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UG={Animal:null,WhereAboutsToString:
null,Gb:function(aIndex){return this.WhereAboutsToString.BS(this.C7(aIndex));},As:
function(E){C.CQ.As.call(this,E);if(!!this.Animal)this.Animal.Nc(E);},A35:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Ca],0);},LV:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A35],[B=this.Animal,B.AvV,B.Nc],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A35],[B=this.Animal,B.AvV,B.Nc],0);A.pe([this,this.A35],this);}
,_Init:function(aArg){C.CQ._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UG;this.Cq.Set(0,1);this.
Cq.Set(1,2);this.Cq.Set(2,3);this.Cq.Set(3,4);this.Cq.Set(4,5);},_Done:function(
){this.__proto__=C.CQ;this.WhereAboutsToString._Done();C.CQ._Done.call(this);},_ReInit:
function(){C.CQ._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.CQ._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UH={Dr:function(){return 6;},_Init:function(aArg){C.UG._Init.call(this,aArg);
this.__proto__=C.UH;this.Cq.Set(0,0);this.Cq.Set(1,1);this.Cq.Set(2,2);this.Cq.Set(
3,3);this.Cq.Set(4,4);this.Cq.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.Acs={Dr:function(){return 5;},_Init:function(aArg){C.UG._Init.call(this,aArg
);this.__proto__=C.Acs;this.Cq.Set(0,6);this.Cq.Set(1,7);this.Cq.Set(2,8);this.Cq.
Set(3,9);this.Cq.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdB={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BbS],[B=A._GetAutoObject(A.Device.
Device),B.ARO,B.AZD],0);A.pe([this,this.BbS],this);},Dr:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AvY(E);},BbS:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agh;A.abo([this,this.B$,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdB;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AF$={FB:null
,Eu:null,EartagNrAssignmentMode:null,Fe:null,E3:null,Hz:null,AV:null,J$:null,M7:
null,A9:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Ec.Ai.call(this,Ae);if(this.
A9===1){if(this.Hc){this.AV.FF(A.jb.CI);this.Hz.CX(A.jb.CI);this.Background.L(A.
jb.C2);this.V.L(A.jb.Text);}else{this.AV.FF(A.jb.C2);this.Hz.CX(A.jb.C2);this.Background.
L(A.jb.CI);this.V.L(A.jb.Text);}}else{if(this.Hc){this.AV.FF(A.jb.CI);this.Hz.CX(
A.jb.CI);}else{this.AV.FF(A.jb.C2);this.Hz.CX(A.jb.C2);}this.Bb(null);}this.M7.L(
this.V.AQ);},IO:function(G){C.Ec.IO.call(this,G);if(!this.A9)this.FN(this);else this.
G7(this);},DG:function(G){var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.
N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(null);(F=this.
N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=null;(F=this.N,F[1].call(
F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;}break;default:this.FB.Aky((F=this.N,F[1].call(F[0])));}},FN:function(G){this.
Es(1);},G7:function(G){this.Es(0);},Es:function(EJ){var F;if(!this.A9&&!!this.N)
this.FB.Ajm((F=this.N,F[1].call(F[0])));this.A9=EJ;if(this.A9<0)this.A9=0;else if(
this.A9>1)this.A9=1;switch(this.A9){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AV);if(!this.AM)this.AV.SA(2);else this.AV.SA(7);}break;default:throw new Error(
AsS+this.A9.toFixed());}this.DG(this);this.An();},BC:function(E){if(this.AM===E)
return;this.AM=E;},On:function(G){this.AAC(2);},MU:function(G){this.AAC(7);},AAC:
function(Gs){var B;var Ay0=(A.Core.O.isPrototypeOf(B=this.AW)?B:null);if(!!Ay0){
var AzR=(A.Core.O.isPrototypeOf(B=this.QA(Ay0,Gs,0x15))?B:null);if(!!AzR){this.Bb(
AzR);return true;}}return false;},AfM:function(G){var F;if(!this.Eu||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M7.Ax(
A._GetAutoObject(A.Device.Converter).AmB(2));break;case 1:this.M7.Ax(A._GetAutoObject(
A.Device.Converter).AmB((F=this.Eu,F[1].call(F[0]))));break;default:throw new Error(
A$4+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3D],this);},A3D:function(G){var B;var F;if(!this.Eu||!this.EartagNrAssignmentMode
){this.J$.AeG(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AV.As([B=A._GetAutoObject(A.Device.Device),B.Ana,B.Aoh]);this.J$.
AeG([B=A._GetAutoObject(A.Device.Device),B.AD7,B.AIi]);}break;case 1:switch((F=this.
Eu,F[1].call(F[0]))){case 1:{this.AV.As([B=A._GetAutoObject(A.Device.Device),B.AvM
,B.Ayf]);this.J$.AeG([B=A._GetAutoObject(A.Device.Device),B.ARU,B.AZF]);}break;case
0:{this.AV.As([B=A._GetAutoObject(A.Device.Device),B.AvN,B.Ayg]);this.J$.AeG([B=
A._GetAutoObject(A.Device.Device),B.ARV,B.AZG]);}break;case 2:{this.AV.As([B=A._GetAutoObject(
A.Device.Device),B.Ana,B.Aoh]);this.J$.AeG([B=A._GetAutoObject(A.Device.Device),
B.AD7,B.AIi]);}break;default:throw new Error(Bsq+(F=this.Eu,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A$4+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Ud:function(E){if(A.aaZ(this.Eu,E))return;if(!!this.Eu)A.z$([
this,this.AfM],this.Eu,0);this.Eu=E;if(!!E)A.zX([this,this.AfM],this.Eu,0);if(!!
E)A.pe([this,this.AfM],this);},Akf:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfM],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfM],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfM],this);},Ua:function(){return this.AM;},_Init:function(
aArg){C.Ec._Init.call(this,aArg);A.Core.BL._Init.call(this.Fe={I:this},0);A.Core.
BL._Init.call(this.E3={I:this},0);C.AqM._Init.call(this.Hz={I:this},0);C.Avp._Init.
call(this.AV={I:this},0);C.AuC._Init.call(this.J$={I:this},0);A.acg.Am._Init.call(
this.M7={I:this},0);this.__proto__=C.AF$;var B;this.H(UN);this.V.Ar(false);this.
V.R(AsH);this.V.L(A.jb.Bm);this.Fe.Filter=6;this.E3.Filter=7;this.Hz.H(Bsr);this.
AV.H(Bss);this.M7.H(Bst);this.J(this.Hz,0);this.J(this.AV,0);this.J(this.M7,0);this.
FB=A._NewObject(C.Ad_,0);this.Fe.BM=[this,this.On];this.E3.BM=[this,this.MU];this.
Hz.CJ(this.J$);this.Hz.As([B=this.J$,B.B$,B.Ca]);this.AV.As([this,this.Ua,this.BC
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ec;this.Fe._Done();this.E3.
_Done();this.Hz._Done();this.AV._Done();this.J$._Done();this.M7._Done();C.Ec._Done.
call(this);},_ReInit:function(){C.Ec._ReInit.call(this);this.Fe._ReInit();this.E3.
_ReInit();this.Hz._ReInit();this.AV._ReInit();this.J$._ReInit();this.M7._ReInit(
);},_Mark:function(D){var B;C.Ec._Mark.call(this,D);if((B=this.FB)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.J$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANl={V9:
null,Y0:null,YW:null,T4:null,Init:function(aArg){this.Bb(this.V9);},ADZ:function(
G){var Bdv=(C.Am2.isPrototypeOf(G)?G:null);if(!!Bdv)A._GetAutoObject(A.Device.Device
).A_(Bdv.Adk,true,A.jV,0,null);},Dz:function(G){if((this.Co.CN===7)&&(this.AW===
this.T4))A._GetAutoObject(A.Device.Device).A_(10,true,A.jV,0,null);else if((this.
Co.CN===6)&&(this.AW===this.T4))A._GetAutoObject(C.A1).BU(103);C.Ee.Dz.call(this
,G);},_Init:function(aArg){C.Ee._Init.call(this,aArg);C.Am2._Init.call(this.V9={
I:this},0);C.Am2._Init.call(this.Y0={I:this},0);C.Am2._Init.call(this.YW={I:this
},0);C.Am2._Init.call(this.T4={I:this},0);this.__proto__=C.ANl;this.Dn(C.AOC);this.
V9.H(JS);this.V9.Aj(true);this.V9.T(A.aaR(A.acf.Ahr));this.V9.Bi(false);this.V9.
Adk=79;this.Y0.H(P4);this.Y0.Aj(true);this.Y0.T(A.aaR(A.acf.A_1));this.Y0.Bi(true
);this.Y0.Adk=77;this.YW.H(ZZ);this.YW.Aj(true);this.YW.T(A.aaR(A.acf.A6z));this.
YW.Bi(false);this.YW.Adk=78;this.T4.H(AkW);this.T4.Aj(true);this.T4.T(A.aaR(A.acf.
About));this.T4.Bi(true);this.T4.Adk=3;this.J(this.V9,-1);this.J(this.Y0,-1);this.
J(this.YW,-1);this.J(this.T4,-1);this.V9.AR=[this,this.ADZ];this.Y0.AR=[this,this.
ADZ];this.YW.AR=[this,this.ADZ];this.T4.AR=[this,this.ADZ];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ee;this.V9._Done();this.Y0._Done();this.YW._Done();this.
T4._Done();C.Ee._Done.call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.
V9._ReInit();this.Y0._ReInit();this.YW._ReInit();this.T4._ReInit();this.V9.T(A.aaR(
A.acf.Ahr));this.Y0.T(A.aaR(A.acf.A_1));this.YW.T(A.aaR(A.acf.A6z));this.T4.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ee._Mark.call(this,D);if((B=this.V9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AOC={_Init:function(aArg){C.KK.
_Init.call(this,aArg);this.__proto__=C.AOC;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.ANj={FactoryResetScope:null,T7:null,V7:null
,T9:null,Init:function(aArg){this.Bb(this.T7);A.pe([this,this.MF],this);},Bjy:function(
G){switch(this.FactoryResetScope.C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A_(33,true,A.jV,0,[this,this.Bff]);break;case 0:A._GetAutoObject(
A.Device.Device).A_(7,true,A.jV,0,[this,this.Bff]);break;default:A.ab5("%s%i",Bsu
,this.FactoryResetScope.Q);}},Bff:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.
Device.Device).BnB();A._GetAutoObject(A.Device.Device).A_(8,true,A.jV,0,null);A.
_GetAutoObject(C.A1).BU(38);}break;case 33:{A._GetAutoObject(A.Device.Helper).BnA(
);A._GetAutoObject(A.Device.Device).Arr(0);A._GetAutoObject(A.Device.Device).Ars(
0);A._GetAutoObject(A.Device.Device).Art(0);A._GetAutoObject(A.Device.Device).Arv(
0);A._GetAutoObject(A.Device.Device).Arw(0);A._GetAutoObject(A.Device.Device).Arx(
0);A._GetAutoObject(A.Device.Device).Ub(5);A._GetAutoObject(A.Device.Device).Av_(
0);A._GetAutoObject(A.Device.Device).Av$(0);A._GetAutoObject(A.Device.Device).Awa(
0);A._GetAutoObject(A.Device.Device).Aws(1);A._GetAutoObject(A.Device.Device).Awt(
1);A._GetAutoObject(A.Device.Device).Awu(1);A._GetAutoObject(A.Device.Device).A_(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AHM,At.Id);}},_Init:function(aArg
){C.Ee._Init.call(this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);C.NT._Init.call(this.T7={I:this},0);C.NT._Init.call(this.V7={I:this},
0);C.BZ._Init.call(this.T9={I:this},0);this.__proto__=C.ANj;var B;this.Dn(C.AOA);
this.T7.H(JS);this.T7.Aj(true);this.T7.T(A.aaR(A.acf.ABW));this.T7.Bi(false);this.
T7.NW(105);this.V7.H(P4);this.V7.Aj(true);this.V7.T(A.aaR(A.acf.XB));this.V7.Bi(
true);this.V7.NW(104);this.T9.H(A$5);this.T9.Aj(true);this.T9.BkS(true);this.T9.
T(A.aaR(A.acf.A53));this.T9.Bi(false);this.J(this.T7,-1);this.J(this.V7,-1);this.
J(this.T9,-1);this.T7.AR=[B=this.T7,B.NZ];this.V7.AR=[B=this.V7,B.NZ];this.T9.AR=[
this,this.Bjy];this.T9.As([B=this.FactoryResetScope,B.B$,B.Ca]);this.T9.CJ(this.
FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=C.Ee;this.FactoryResetScope.
_Done();this.T7._Done();this.V7._Done();this.T9._Done();C.Ee._Done.call(this);},
_ReInit:function(){C.Ee._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T7._ReInit();this.V7._ReInit();this.T9._ReInit();this.T7.T(A.aaR(A.acf.ABW));this.
V7.T(A.aaR(A.acf.XB));this.T9.T(A.aaR(A.acf.A53));},_Mark:function(D){var B;C.Ee.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOA={_Init:function(aArg){C.KK._Init.call(this,aArg);this.__proto__=C.AOA;this.
Text.R(A.aaR(A.acf.ABY));},_ReInit:function(){C.KK._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ABY));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AmI={QM:null,VY:null,_Init:function(aArg){C.TO._Init.call(this,aArg);C.CG._Init.
call(this.QM={I:this},0);C.CG._Init.call(this.VY={I:this},0);this.__proto__=C.AmI;
this.QM.H(Bsv);this.QM.R(A.aaR(A.acf.A_T));this.QM.A7(0x12);this.QM.L(A.jb.Text);
this.VY.H(A$Z);this.VY.R(A.aaR(A.acf.AnP));this.VY.L(A.jb.Text);this.J(this.QM,0
);this.J(this.VY,0);this.QM.S(A.aaL(A.fl.Af));this.QM.A2(A.aaL(A.fl.Ak));this.QM.
Cs(A.aaL(A.fl.Bk));this.VY.S(A.aaL(A.fl.Af));this.VY.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TO;this.QM._Done();this.VY._Done();C.TO._Done.call(this
);},_ReInit:function(){C.TO._ReInit.call(this);this.QM._ReInit();this.VY._ReInit(
);this.QM.R(A.aaR(A.acf.A_T));this.VY.R(A.aaR(A.acf.AnP));this.QM.S(A.aaL(A.fl.Af
));this.QM.A2(A.aaL(A.fl.Ak));this.QM.Cs(A.aaL(A.fl.Bk));this.VY.S(A.aaL(A.fl.Af
));this.VY.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TO._Mark.call(this,D);
if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.AO8={QN:
null,_Init:function(aArg){C.TO._Init.call(this,aArg);C.CG._Init.call(this.QN={I:
this},0);this.__proto__=C.AO8;this.QN.H(Bsw);this.QN.R(A.aaR(A.acf.T$));this.QN.
A7(0x12);this.QN.L(A.jb.Text);this.J(this.QN,0);this.QN.S(A.aaL(A.fl.Af));this.QN.
A2(A.aaL(A.fl.Ak));this.QN.Cs(A.aaL(A.fl.Bk));},_Done:function(){this.__proto__=
C.TO;this.QN._Done();C.TO._Done.call(this);},_ReInit:function(){C.TO._ReInit.call(
this);this.QN._ReInit();this.QN.R(A.aaR(A.acf.T$));this.QN.S(A.aaL(A.fl.Af));this.
QN.A2(A.aaL(A.fl.Ak));this.QN.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.TO.
_Mark.call(this,D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Amg={IB:null,Abj:null,D8:null,Bj:function(aSize){C.M1.Bj.call(this,aSize);this.
IB.H([this.Gr.M[2],0,this.Gr.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.D8.H([
this.IB.M[2]-1,0,this.IB.M[2]+1,aSize[1]]);this.Abj.H([this.IB.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.Abj.L(this.Gr.AQ);this.IB.L(this.
Gr.AQ);},Ce:function(Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hj=Ad;if(
!!this.AX){var H7=this.AX.AmC(Ad,14);var Atp=this.AX.AOi(Ad,7);this.IB.Ax(A._GetAutoObject(
A.Device.Converter).AmB(Atp));this.Abj.Ax(A._GetAutoObject(A.Device.Converter).A4v(
H7));this.An();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Am._Init.
call(this.IB={I:this},0);A.acg.Am._Init.call(this.Abj={I:this},0);A.acg.AL._Init.
call(this.D8={I:this},0);this.__proto__=C.Amg;this.IB.H(A$1);this.IB.L(A.jb.Text
);this.Abj.H(Bsx);this.Abj.L(A.jb.Text);this.D8.H(Bsy);this.D8.L(A.jb.Bc);this.J(
this.IB,0);this.J(this.Abj,0);this.J(this.D8,0);this.IB.Ax(A.aaL(A.aci.TE));this.
Abj.Ax(A.aaL(A.aci.TE));},_Done:function(){this.__proto__=C.M1;this.IB._Done();this.
Abj._Done();this.D8._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IB._ReInit();this.Abj._ReInit();this.D8._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AMC={Zv:null
,Bj:function(aSize){C.M1.Bj.call(this,aSize);this.Zv.H([this.Gr.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.Zv.L(this.Gr.AQ);},Ce:function(
Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hj=Ad;if(!!this.AX){var Kz=this.
AX.KJ(Ad,26);if(Kz>0)this.Zv.R(A.ab2(Kz.toFixed(),5));else this.Zv.R(Rg);this.An(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
Zv={I:this},0);this.__proto__=C.AMC;this.Zv.H(Bsz);this.J(this.Zv,0);this.Zv.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.Zv._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.Zv._ReInit();this.Zv.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.Zv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARh={Am:null,Ai:function(Ae){C.Aey.Ai.call(this,Ae);this.Am.L(this.Text.AQ);
},_Init:function(aArg){C.Aey._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={
I:this},0);this.__proto__=C.ARh;this.Text.H(BsA);this.Am.H(AZw);this.J(this.Am,0
);this.Am.Ax(A.aaL(A.ach.AeV));},_Done:function(){this.__proto__=C.Aey;this.Am._Done(
);C.Aey._Done.call(this);},_ReInit:function(){C.Aey._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.Aey._Mark.call(this,D);if((B=this.Am)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yf={Text:
null,Db:null,AP:null,JE:null,CT:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Ng],[B=A._GetAutoObject(A.Device.Device),B.AD3,B.AIf],0);A.zV([this,this.Ng
],A._GetAutoObject(A.Device.Device).Ao,0);A.pe([this,this.Ng],this);},Dc:function(
E){C.BR.Dc.call(this,E);this.Db.L(E);this.Text.L(E);this.JE.L(E);this.CT.AeH(E);
},Wj:function(E){C.BR.Wj.call(this,E);this.CT.CX(E);},D2:function(G){this.CT.T(A.
_GetAutoObject(A.Device.Device).Ao.Cd().toFixed());},Ng:function(s){this.D2(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Am._Init.call(this.Db={I:this},0);A.acg.DR._Init.call(this.AP={I:this
},0);A.acg.Am._Init.call(this.JE={I:this},0);C.CT._Init.call(this.CT={I:this},0);
A.acg.DR._Init.call(this.A$={I:this},0);this.__proto__=C.Yf;this.Text.H(BsB);this.
Text.A7(0x11);this.Db.H(Ax4);this.AP.DI(A$V);this.AP.DY(A$W);this.AP.L(A.jb.Bc);
this.JE.H(BsC);this.JE.L(A.jb.C2);this.CT.A3(0x14);this.CT.H(BsD);this.CT.AeH(A.
jb.Bm);this.CT.CX(A.jb.ZF);this.CT.Hq(2);this.A$.DI(BsE);this.A$.DY(BsF);this.A$.
L(A.jb.Bc);this.J(this.Text,0);this.J(this.Db,0);this.J(this.AP,0);this.J(this.JE
,0);this.J(this.CT,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Db.Ax(A.aaL(A.ach.AjJ));this.JE.Ax(A.aaL(A.ach.JE));this.CT.
S(A.aaL(A.fl.Bk));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Db._Done();this.AP._Done();this.JE._Done();this.CT._Done();this.A$.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Db._ReInit();this.AP._ReInit();this.JE._ReInit();this.CT._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
CT.S(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Ab$={FB:null
,JM:null,JL:null,Akv:null,Akw:null,Q0:null,Qx:null,Abi:null,VJ:null,PE:null,PF:null
,So:null,Gn:null,Go:null,Jk:null,Alq:0,Alv:0,D3:0,DU:0,A9:0,Bj:function(aSize){var
B;this.Dv.H([this.Hp.M[2]-10,this.Hp.M[1],this.HY.M[0]+10,this.Hp.M[3]]);this.Dv.
AEQ((B=this.Dv.M)[2]-B[0]);this.Dv.HA(this.Dv.Gk,true,null,null);},Ai:function(Ae
){var B;C.BZ.Ai.call(this,Ae);var Fn=((Ae&0x20)===0x20);var Gw=this.Bo.By;if(!!this.
Q)this.Gz(this);if((this.A9===1)||(this.A9===2)){var A0J=this.A1G(this.A9);if(!!
A0J){this.Abi.Y(true);this.Abi.H(A0J.M);this.Abi.L(this.V.AQ);this.VJ.Y(true);this.
VJ.H(A0J.M);}else{this.Abi.Y(false);this.VJ.Y(false);}this.Hp.Y(false);this.HY.Y(
false);}else{this.Abi.Y(false);this.VJ.Y(false);this.Hp.Y(Fn||Gw);this.HY.Y(Fn||
Gw);}},Qj:function(G){if(!!this.Q){if(this.Fx===1)A.pe([this,this.UY],this);else
if(this.Fx===4)A.pe([this,this.AZ2],this);else if(this.Fx===5)A.pe([this,this.AZ0
],this);}C.BZ.Qj.call(this,G);},J2:function(G){switch(this.A9){case 0:C.BZ.J2.call(
this,G);break;case 2:break;default:this.Ade(this);}},JX:function(G){switch(this.
A9){case 0:C.BZ.JX.call(this,G);break;default:this.Aia(this);}},A1c:function(G){
var F;if(this.A9===1){var BQ=this.D3;this.D3=this.D3-10;if(this.D3<this.Alv)this.
D3=this.Alv;if(this.D3<A._GetAutoObject(A.Device.Device).ZI)this.D3=A._GetAutoObject(
A.Device.Device).ZI;if(this.DU!==BQ){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.
D3));A.abo(this.JM,0);}}if(this.A9===2){var BQ=this.DU;this.DU=this.DU-10;if(this.
DU<this.D3)this.DU=this.D3;if(this.DU!==BQ){if(!!this.JL)(F=this.JL,F[2].call(F[
0],this.DU));A.abo(this.JL,0);}}this.DG(this);this.An();},AZ0:function(s){this.A1c(
s);},AlG:function(G){this.Fx=5;this.An();if(this.Bo.By){A.pe([this,this.AZ0],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A1N:function(G){var F;if(this.A9===1){var
BQ=this.D3;this.D3=this.D3+10;if(this.D3>this.DU)this.D3=this.DU;if(this.D3!==BQ
){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.D3));A.abo(this.JM,0);}}if(this.A9===
2){var BQ=this.DU;this.DU=this.DU+10;if(this.DU>this.Alq)this.DU=this.Alq;if(this.
DU!==BQ){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.DU));A.abo(this.JL,0);}}this.
DG(this);this.An();},AZ2:function(s){this.A1N(s);},AlH:function(G){this.Fx=4;this.
An();if(this.Bo.By){A.pe([this,this.AZ2],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},UY:function(G){this.Es(this.A9+1);},Ade:function(G){this.Fx=1;this.An(
);if(this.Bo.By){A.pe([this,this.UY],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,Gz:function(G){},Afr:function(s){this.Gz(s);},DG:function(G){var F;if(!this.N)return;
switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N
,F[1].call(F[0])).Hr(A.jV);(F=this.N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.
N,F[1].call(F[0])).Cp(null);(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(
F[0])).Cj=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aef));(F=this.N,F[1].call(
F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.UY];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.EW));(F=this.N,F[1].call(F[0])).Hr(A.jV);(F=this.
N,F[1].call(F[0])).Cz=[this,this.G7];(F=this.N,F[1].call(F[0])).Cp(A.aaL(A.ach.AmJ
));(F=this.N,F[1].call(F[0])).FG(A.jV);(F=this.N,F[1].call(F[0])).Cj=[this,this.
Aia];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=
this.N,F[1].call(F[0])).Cf=null;}break;default:this.FB.Aky((F=this.N,F[1].call(F[
0])));}},A9Q:function(E){if(A.aaZ(this.JM,E))return;if(!!this.JM)A.z$([this,this.
A2$],this.JM,0);this.JM=E;if(!!this.JM)A.zX([this,this.A2$],this.JM,0);A.pe([this
,this.A2$],this);},A2$:function(G){var F;this.D3=(F=this.JM,F[1].call(F[0]));this.
An();},A9P:function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([this,this.A2_
],this.JL,0);this.JL=E;if(!!this.JL)A.zX([this,this.A2_],this.JL,0);A.pe([this,this.
A2_],this);},A2_:function(G){var F;this.DU=(F=this.JL,F[1].call(F[0]));this.An();
},FN:function(G){this.Es(1);},G7:function(G){this.Es(0);},Es:function(EJ){var F;
if(!this.A9)this.FB.Ajm((F=this.N,F[1].call(F[0])));this.A9=EJ;if((this.A9<0)||(
this.A9>2))this.A9=0;this.DG(this);this.Go.By=!!this.A9;this.Gn.By=!!this.A9;this.
An();},Aia:function(G){if(this.A9>1)this.Es(this.A9-1);},A3m:function(G){},Ayp:function(
s){this.A3m(s);},A2X:function(G){},Ba6:function(s){this.A2X(s);},A1G:function(As1
){return null;},_Init:function(aArg){C.BZ._Init.call(this,aArg);A.acg.AL._Init.call(
this.Akv={I:this},0);A.acg.AL._Init.call(this.Akw={I:this},0);A.acg.AL._Init.call(
this.Q0={I:this},0);A.acg.Am._Init.call(this.Qx={I:this},0);A.acg.AL._Init.call(
this.Abi={I:this},0);A.acg.CC._Init.call(this.VJ={I:this},0);A.acg.Text._Init.call(
this.PE={I:this},0);A.acg.Text._Init.call(this.PF={I:this},0);A.acg.Text._Init.call(
this.So={I:this},0);A.Core.BL._Init.call(this.Gn={I:this},0);A.Core.BL._Init.call(
this.Go={I:this},0);A.Core.BL._Init.call(this.Jk={I:this},0);this.__proto__=C.Ab$;
this.H(Afo);this.T(A.aaR(A.acf.Aq0));this.Background.H(Afo);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGt));this.V.A7(0x12);this.Akv.H(BsG);this.Akv.L(A.jb.F$);this.Akw.
H(BsH);this.Akw.L(A.jb.H2);this.Q0.H(BsI);this.Q0.L(A.jb.EV);this.Qx.H(BsJ);this.
Abi.H(BsK);this.VJ.H(BsL);this.VJ.NY(3);this.VJ.L(A.jb.AW);this.VJ.Y(false);this.
PE.H(BsM);this.PE.Hq(8);this.PE.IZ(true);this.PE.A7(0x11);this.PE.L(0xFF000000);
this.PF.H(BsN);this.PF.Hq(8);this.PF.IZ(true);this.PF.A7(0x11);this.PF.L(0xFF000000
);this.So.H(BsO);this.So.IZ(false);this.So.A7(0x12);this.So.L(0xFF000000);this.Gn.
Filter=5;this.Gn.By=false;this.Go.Filter=4;this.Go.By=false;this.Jk.Filter=1;this.
JO(this.V,-1);this.JO(this.Dv,-2);this.J(this.Akv,-1);this.J(this.Akw,-1);this.J(
this.Q0,-1);this.J(this.Qx,-1);this.J(this.Abi,-1);this.J(this.VJ,-1);this.J(this.
PE,-1);this.J(this.PF,0);this.J(this.So,0);this.Qx.Ax(A.aaL(A.ach.AC4));this.PE.
S(A.aaL(A.fl.Af));this.PF.S(A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.Ak));this.Gn.BM=[
this,this.AlG];this.Gn.DX=[this,this.AZ0];this.Go.BM=[this,this.AlH];this.Go.DX=[
this,this.AZ2];this.Jk.BM=[this,this.Ade];this.FB=A._NewObject(C.Ad_,0);},_Done:
function(){this.__proto__=C.BZ;this.Akv._Done();this.Akw._Done();this.Q0._Done();
this.Qx._Done();this.Abi._Done();this.VJ._Done();this.PE._Done();this.PF._Done();
this.So._Done();this.Gn._Done();this.Go._Done();this.Jk._Done();C.BZ._Done.call(
this);},_ReInit:function(){C.BZ._ReInit.call(this);this.Akv._ReInit();this.Akw._ReInit(
);this.Q0._ReInit();this.Qx._ReInit();this.Abi._ReInit();this.VJ._ReInit();this.
PE._ReInit();this.PF._ReInit();this.So._ReInit();this.Gn._ReInit();this.Go._ReInit(
);this.Jk._ReInit();this.T(A.aaR(A.acf.Aq0));this.V.R(A.aaR(A.acf.AGt));this.PE.
S(A.aaL(A.fl.Af));this.PF.S(A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BZ._Mark.call(this,D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JL)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FA={XI:null,Acb:
null,AnT:0,AnU:0,Dr:function(){if(!this.XI)return 0;return this.XI.MB;},C7:function(
aIndex){if(!this.XI||(aIndex>=this.XI.MB))return-1;return this.XI.Get(aIndex);},
Gb:function(aIndex){return this.A6j().BS(this.C7(aIndex));},DO:function(A6){if(!
this.XI)return-1;return this.XI.Au3(A6);},Hn:function(){if(!this.XI)return-1;return this.
XI.Hn();},Anr:function(E){if(this.AnT===E)return;this.AnT=E;A.pe([this,this.AU0]
,this);},AZV:function(Aq){this.Anr(Aq);},Ans:function(E){if(this.AnU===E)return;
this.AnU=E;A.pe([this,this.AU1],this);},AZW:function(Aq){this.Ans(Aq);},AU1:function(
G){A.abo([this,this.ASh,this.AZW],0);},AU0:function(G){A.abo([this,this.ASg,this.
AZV],0);},A6j:function(){return this.Acb;},ASg:function(){return this.AnT;},ASh:
function(){return this.AnU;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acb={I:this},0);this.__proto__=C.FA;},_Done:function(
){this.__proto__=C.AC;this.Acb._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acb._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acb)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AL8={Init:
function(aArg){A.zV([this,this.Bew],A._GetAutoObject(A.Device.Helper).Ux,0);A.zV([
this,this.Beu],A._GetAutoObject(A.Device.Helper).Uw,0);this.Bew(this);this.Beu(this
);},As:function(E){C.FA.As.call(this,E);this.Ans(A._GetAutoObject(A.Device.Helper
).Ux.Get(this.DO(E)));this.Anr(A._GetAutoObject(A.Device.Helper).Uw.Get(this.DO(
E)));},Anr:function(E){if(this.AnT===E)return;C.FA.Anr.call(this,E);A._GetAutoObject(
A.Device.Helper).Uw.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Uw.
Cn();},Ans:function(E){if(this.AnU===E)return;C.FA.Ans.call(this,E);A._GetAutoObject(
A.Device.Helper).Ux.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Ux.
Cn();},Bew:function(G){this.AnU=A._GetAutoObject(A.Device.Helper).Ux.Get(this.DO(
this.Q));A.pe([this,this.AU1],this);},Beu:function(G){this.AnT=A._GetAutoObject(
A.Device.Helper).Uw.Get(this.DO(this.Q));A.pe([this,this.AU0],this);},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.AL8;this.XI=A._GetAutoObject(A.
Device.Helper).AdG;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AL9={Agm:null,ABo:0,ABn:0,Init:function(aArg){A.zV([this,this.BeG],A._GetAutoObject(
A.Device.Helper).Afh,0);A.zV([this,this.BeE],A._GetAutoObject(A.Device.Helper).Afg
,0);A.zV([this,this.BeC],A._GetAutoObject(A.Device.Helper).Aff,0);A.zV([this,this.
BeI],A._GetAutoObject(A.Device.Helper).Afi,0);this.BeG(this);this.BeE(this);this.
BeC(this);this.BeI(this);},As:function(E){C.FA.As.call(this,E);this.Ans(A._GetAutoObject(
A.Device.Helper).Afh.Get(this.DO(E)));this.Anr(A._GetAutoObject(A.Device.Helper).
Afg.Get(this.DO(E)));this.ASl(A._GetAutoObject(A.Device.Helper).Aff.Get(this.DO(
E)));this.ASn(A._GetAutoObject(A.Device.Helper).Afi.Get(this.DO(E)));},Anr:function(
E){if(this.AnT===E)return;C.FA.Anr.call(this,E);A._GetAutoObject(A.Device.Helper
).Afg.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afg.Cn();},Ans:function(
E){if(this.AnU===E)return;C.FA.Ans.call(this,E);A._GetAutoObject(A.Device.Helper
).Afh.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afh.Cn();},A6j:function(
){return this.Agm;},BeG:function(G){this.AnU=A._GetAutoObject(A.Device.Helper).Afh.
Get(this.DO(this.Q));A.pe([this,this.AU1],this);},BeE:function(G){this.AnT=A._GetAutoObject(
A.Device.Helper).Afg.Get(this.DO(this.Q));A.pe([this,this.AU0],this);},ASn:function(
E){if(this.ABo===E)return;this.ABo=E;A._GetAutoObject(A.Device.Helper).Afi.Set(this.
DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afi.Cn();A.pe([this,this.A$n],this
);},ASl:function(E){if(this.ABn===E)return;this.ABn=E;A._GetAutoObject(A.Device.
Helper).Aff.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Aff.Cn();A.
pe([this,this.A$m],this);},A$m:function(G){A.abo([this,this.A79,this.ASl],0);},A$n:
function(G){A.abo([this,this.A7_,this.ASn],0);},BeC:function(G){this.ABn=A._GetAutoObject(
A.Device.Helper).Aff.Get(this.DO(this.Q));A.pe([this,this.A$m],this);},BeI:function(
G){this.ABo=A._GetAutoObject(A.Device.Helper).Afi.Get(this.DO(this.Q));A.pe([this
,this.A$n],this);},A7_:function(){return this.ABo;},A79:function(){return this.ABn;
},_Init:function(aArg){C.FA._Init.call(this,aArg);A.Device.Agm._Init.call(this.Agm={
I:this},0);this.__proto__=C.AL9;this.XI=A._GetAutoObject(A.Device.Helper).Agn;this.
Init(aArg);},_Done:function(){this.__proto__=C.FA;this.Agm._Done();C.FA._Done.call(
this);},_ReInit:function(){C.FA._ReInit.call(this);this.Agm._ReInit();},_Mark:function(
D){var B;C.FA._Mark.call(this,D);if((B=this.Agm)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.ALP={RE:null,Init:function(
aArg){var B;A.zX([this,this.Aiz],[B=this.AnimalType,B.B$,B.Ca],0);A.pe([this,this.
Aiz],this);this.Bb(this.RE);},Bl:function(E){C.IS.Bl.call(this,E);this.RE.BC(this.
Je.AM);},Aiz:function(G){A._GetAutoObject(A.Device.Device).Awb(this.AnimalType.Q
);},_Init:function(aArg){C.IS._Init.call(this,aArg);C.Ty._Init.call(this.RE={I:this
},0);this.__proto__=C.ALP;var B;this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false
);this.RE.H(AIb);this.RE.Aj(true);this.RE.Na(14);this.RE.Ahf(0);this.RE.OL(0);this.
J(this.RE,-6);this.RE.AR=[this,this.AzZ];this.RE.As([B=this.AnimalType,B.B$,B.Ca
]);this.RE.CJ(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.IS;this.RE._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(
this);this.RE._ReInit();},_Mark:function(D){var B;C.IS._Mark.call(this,D);if((B=
this.RE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Ty={Filter:null,El:0,TableId:0,Operator:1,CS:function(){var F;this.Tj((F=this.
Filter,F[1].call(F[0])).DN(this.El,this.Operator));},Bj:function(aSize){var B;C.
BZ.Bj.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hp.H(AhF
);this.HY.H([aSize[0]-40,40,aSize[0],80]);this.Dv.H([this.Hp.M[2]-5,this.Hp.M[1]
,this.HY.M[0]+5,this.Hp.M[3]]);this.Dv.AEQ((B=this.Dv.M)[2]-B[0]);this.Dv.HA(this.
Dv.Gk,true,null,null);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L8],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L8
],E,0);A.pe([this,this.L8],this);},L8:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tj((F=this.Filter,F[1].call(F[0])).DN(this.El,this.
Operator));else this.Tj(null);},Ahf:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L8],this);},Na:function(E){if(this.El===E)return;this.
El=E;A.pe([this,this.L8],this);},Tj:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmD(this.TableId,this.El));this.An();},OL:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L8],this);},_Init:function(aArg){C.BZ._Init.
call(this,aArg);this.__proto__=C.Ty;this.H(JR);this.V.A7(0x11);this.V.Cs(A.aaL(A.
fl.Bk));},_ReInit:function(){C.BZ._ReInit.call(this);this.V.Cs(A.aaL(A.fl.Bk));this.
CS();},_Mark:function(D){var B;C.BZ._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARq={FY:null,MP:null,DV:null,Z:null,Eb:null,Ck:null,CF:null,C_:null,Gd:null,
Ea:null,C9:null,BY:null,Ay:null,Breed:null,I6:null,AnimalType:null,Gender:null,Pi:
null,KV:null,I4:null,Yr:null,AlX:null,KE:0,M2:0,A3u:false,Init:function(aArg){var
B;A.zX([this,this.BzH],[B=A._GetAutoObject(A.Device.Device),B.AD8,B.AIj],0);A.zV([
this,this.AtB],this.MP,0);A.zX([this,this.AtB],[B=A._GetAutoObject(A.Device.Device
),B.AvU,B.Ayk],0);A.zX([this,this.Gz],[B=A._GetAutoObject(A.Device.Device),B.AD8
,B.AIj],0);A.zV([this,this.Gz],this.MP,0);A.zX([this,this.Aiz],this.BY.Q,0);A.pe([
this,this.Aiz],this);A.pe([this,this.Bd_],this);A.pe([this,this.AtB],this);A.pe([
this,this.Gz],this);A.pe([this,this.A2Y],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.AKS],this);A.pe([this,this.DG],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Eb.Q,F[1].call(F[0])))this.Eb.Arl(A.jb.EV);else
this.Eb.Arl(A.jb.F$);if(A._GetAutoObject(A.Device.Device).Aes){if(!!(F=this.Ck.Dh
,F[1].call(F[0])))this.Ck.Arl(A.jb.EV);else this.Ck.Arl(A.jb.F$);}else this.Ck.Arl(
A.jb.ZF);A.pe([this,this.DG],this);},Dz:function(G){var B;C.AB.Dz.call(this,G);if(
!!this.AW&&((this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);},LL:function(
G){if(A._GetAutoObject(A.Device.Device).Ao.Lf())A._GetAutoObject(A.Device.Device
).A_(41,true,A._GetAutoObject(A.Device.Device).Ao.HC().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gh();A._GetAutoObject(A.Device.Helper).Ap0(A._GetAutoObject(A.
Device.Helper).W);this.Apg();},CA:function(G){C.AB.CA.call(this,G);A._GetAutoObject(
A.Device.Device).AEX(0);},EX:function(G){C.AB.EX.call(this,G);this.I4.Ar(false);
A._GetAutoObject(A.Device.Device).Uh(false);},Er:function(G){A._GetAutoObject(A.
Device.Helper).W.He();A._GetAutoObject(C.A1).Fr();},Fa:function(G){var B;this.Ay.
Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.
Z.Bt[1]);},AtB:function(G){var F,CP;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.AKS(this);this.An();if((this.AW===this.Eb)&&!!(F=this.Eb.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).Ao.Ad2(26,(F=this.Eb.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter
).Ra((F=this.Eb.Q,F[1].call(F[0]))),0,[this,this.A2N]);(F=this.Eb.Q,F[2].call(F[
0],0));A.pe([this,this.A2M],this);return;}else if(A._GetAutoObject(A.Device.Device
).Aes)this.Jw(this.Ck);}var Bdo=!!(F=this.Eb.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).Aes||!!(CP=this.Ck.Dh,CP[1].call(CP[0])));if(this.MP.AOd()>0){if((
this.AW===this.Ck)&&Bdo)this.Bb(this.Z.TH(this.Ck,0x415));return;}if((A._GetAutoObject(
A.Device.Device).Aes&&(this.AW===this.Ck))&&!!(F=this.Ck.Dh,F[1].call(F[0])))this.
Jw(this.Eb);if(Bdo)this.Bcc(this);},Xo:function(G){A._GetAutoObject(A.Device.Device
).Ds(13);},AiN:function(){var F;this.FY.Cn(A._GetAutoObject(A.Device.Device).Ao);
if(this.MP.NP(23)){if(A._GetAutoObject(A.Device.Device).Bu.Lf())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bu.HC().toFixed(),
0,null);else{var L3=A._GetAutoObject(A.Device.Device).Ao.La(0,this.FY.Id);A._GetAutoObject(
A.Device.Device).SB(L3);var B1=A._NewObject(A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(
this.FY.Id);B1.OnSetBodyWeight(this.KE);B1.OnSetTimestamp(this.FY.DateOfBirth);B1.
Cn(A._GetAutoObject(A.Device.Device).Bu);}}if(this.MP.NP(18)){if(A._GetAutoObject(
A.Device.Device).Bu.Lf())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bu.HC().toFixed(),0,null);else{var L3=A._GetAutoObject(A.Device.
Device).Ao.La(0,this.FY.Id);A._GetAutoObject(A.Device.Device).SB(L3);var B1=A._NewObject(
A.Device.Rating,0);B1.Gh();B1.OnSetAnimalId(this.FY.Id);B1.OnSetBodyWeight(this.
M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dw());B1.Cn(A._GetAutoObject(
A.Device.Device).Bu);}}A._GetAutoObject(A.Device.Device).Wn(65280);this.I4.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AEX(F.Avw+1));this.A3u=true;A.pe([this,
this.AKS],this);this.Apg();},Gz:function(G){this.Ck.ASX(A._GetAutoObject(A.Device.
Device).Aes);A._GetAutoObject(A.Device.Helper).Mz(this.BY,this.MP.NP(14));A._GetAutoObject(
A.Device.Helper).Mz(this.C9,this.MP.NP(23));A._GetAutoObject(A.Device.Helper).Mz(
this.CF,this.MP.NP(32));A._GetAutoObject(A.Device.Helper).Mz(this.Ea,this.MP.NP(
18));A._GetAutoObject(A.Device.Helper).Mz(this.C_,this.MP.NP(7));A._GetAutoObject(
A.Device.Helper).Mz(this.Gd,this.MP.NP(34));this.Yr.Y(!this.MP.AOd());var P;var Aa=
null;var AoZ=this.AW;for(P=0;P<this.MP.Afz.NK();P++){Aa=this.ByB(this.MP.Afz.OC(
P));if(!!Aa)this.Zl(Aa);}this.Jw(AoZ);A._GetAutoObject(A.Device.Helper).AMY(this.
Z);A.pe([this,this.A2Y],this);this.An();},AeD:function(E){if(this.KE===E)return;
this.KE=E;A.abo([this,this.AvG,this.AeD],0);},Ag$:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Am_,this.Ag$],0);},Bcc:function(G){this.FY.Gh();A._GetAutoObject(
A.Device.Helper).Ap0(this.FY);this.FY.QX(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.FY.Nb(A._GetAutoObject(A.Device.Helper).W.NaisId);this.FY.Ui(A._GetAutoObject(
A.Device.Helper).ALQ(0,this.FY));this.FY.AeL(true);if(this.MP.NP(14))this.FY.Ew(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NP(32))this.FY.NU(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NP(7))this.FY.JJ(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NP(34))this.FY.Nc(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Ak7=A._GetAutoObject(A.Device.Helper).A02(this.FY,0,A._GetAutoObject(
A.Device.Device).Ao);if(!Ak7)this.AiN();else A._GetAutoObject(A.Device.Helper).AJO(
this.FY,Ak7,0,0,[this,this.Apm]);},Apg:function(){A._GetAutoObject(A.Device.Helper
).W.Nb(0);if(A._GetAutoObject(A.Device.Device).Aes)A._GetAutoObject(A.Device.Helper
).W.QX(0);this.AeD(0);this.Ag$(0);this.Jw(this.Eb);this.An();},Apm:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.Apg();break;case 43:this.Jw(this.Eb);break;case 41:break;
default:A.ab5("%s%e",AsF,At.Id);}},Jw:function(Ag){this.Bb(Ag);this.Z.HA(Ag,true
,null,null);this.Z.Vi(null,null);},Bd_:function(G){this.Ea.Ahd(A._GetAutoObject(
A.Device.Helper).W.AhE(1));this.AtB(this);},Aiz:function(G){this.C9.Ahd(A._GetAutoObject(
A.Device.Helper).Aa_(this.AnimalType.Q));},A2Y:function(G){var B;var BAM=this.Ay.
Background.Fh();var width=(BAM?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xd=this.Z.TH(null,0x401);while(!!Xd&&(((B=Xd)?B.__proto__:
null)!==A.Core.Z)){Aa=(C.OT.isPrototypeOf(Xd)?Xd:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xd=this.Z.TH(Xd,0x1);}},ByB:function(Z3){var Aa=null;switch(Z3){case 14:Aa=this.
BY;break;case 32:Aa=this.CF;break;case 23:Aa=this.C9;break;case 7:Aa=this.C_;break;
case 18:Aa=this.Ea;break;case 34:Aa=this.Gd;break;default:A.ab5("%s%e",BsP,Z3);}
return Aa;},BzH:function(G){var F;if(A._GetAutoObject(A.Device.Device).Aes)A._GetAutoObject(
A.Device.Helper).W.QX(0);else if(!(F=this.Ck.Dh,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).W.QX(A._GetAutoObject(A.Device.Helper).Dw()-A._GetAutoObject(A.
Device.Helper).Amp(A._GetAutoObject(A.Device.Device).Adz));this.AtB(this);},AKS:
function(G){var B;var AJT=A.jV;var AyF=A.jb.CI;var Bcs=A.jb.AW;this.AlX.Axc(this
);if(this.A3u){this.A3u=false;AJT=A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.
Box),P3,A._GetAutoObject(A.Device.Converter).Ra(this.FY.NaisId));A.pe([B=this.AlX
,B.StartTimer],this);AyF=A.jb.EV;Bcs=A.jb.Text;}else if((this.AW===this.Eb)&&!A.
_GetAutoObject(A.Device.Helper).W.NaisId)AJT=A.aaR(A.acf.BnN);else if((this.AW===
this.Ck)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AJT=A.aaR(A.acf.BnM);
this.Yr.T(AJT);this.Yr.Bk5(AyF);this.Yr.Bk6(Bcs);},A2N:function(G){var At=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajn();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajn();else if(At.PopupState===7){A._GetAutoObject(C.A1).BU(87);
A._GetAutoObject(A.Device.Device).Ajn();}}}else A._GetAutoObject(A.Device.Device
).Ajn();},A2M:function(G){A._GetAutoObject(A.Device.Device).Auq();},DG:function(
G){var B;if(!this.MP.AOd()){this.N.Lc.Do(255);if(this.AW===this.Eb){this.N.C5(A.
aaL(A.ach.Edit));this.N.Cf=[B=this.Eb,B.FN];}else if(this.AW===this.Ck){this.N.C5(
A.aaL(A.ach.Edit));this.N.Cf=[B=this.Ck,B.FN];}else{this.N.C5(null);this.N.Cf=null;
}}else{this.N.C5(A.aaL(A.ach.AmL));if((this.Eb.Ap_===A.jb.F$)||(this.Ck.Ap_===A.
jb.F$)){this.N.Lc.Do(100);this.N.Cf=null;}else{this.N.Lc.Do(255);this.N.Cf=[this
,this.Bcc];}}},AvG:function(){return this.KE;},Am_:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DV={I:this},0
);A.Core.Z._Init.call(this.Z={I:this},0);C.AT_._Init.call(this.Eb={I:this},0);C.
AT6._Init.call(this.Ck={I:this},0);C.Aw4._Init.call(this.CF={I:this},0);C.BZ._Init.
call(this.C_={I:this},0);C.Ar7._Init.call(this.Gd={I:this},0);C.AkC._Init.call(this.
Ea={I:this},0);C.AkC._Init.call(this.C9={I:this},0);C.BZ._Init.call(this.BY={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UH._Init.call(this.I6={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pi={I:this},0);A.Device.KV._Init.call(this.KV={I:this},0);A.Device.Tz._Init.call(
this.I4={I:this},0);C.AUE._Init.call(this.Yr={I:this},0);A.Core.Timer._Init.call(
this.AlX={I:this},0);this.__proto__=C.ARq;var B;this.Background.L(A.jb.C2);this.
N.Y(true);this.Ef.Ar(false);this.Dn(C.AOW);this.DV.A3(0x3F);this.DV.H(E7);this.DV.
L(A.jb.CI);this.Z.H(E7);this.Z.Kg(9);this.Eb.H(AIb);this.Eb.Aj(true);this.Eb.T(A.
aaR(A.acf.AB9));this.Eb.ASX(true);this.Eb.AFf(false);this.Ck.H(A$5);this.Ck.Aj(true
);this.Ck.T(A.aaR(A.acf.AdX));this.Ck.ASX(true);this.Ck.AFa(true);this.CF.H(AsD);
this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed));this.C_.H(AsD);this.C_.Aj(true);this.
C_.T(A.aaR(A.acf.Ae6));this.Gd.H(A$6);this.Gd.Aj(true);this.Gd.T(A.aaR(A.acf.I6)
);this.Ea.H(BsQ);this.Ea.Aj(true);this.Ea.T(A.aaR(A.acf.M2));this.Ea.Gp(1000);this.
Ea.E4(999000);this.Ea.Ahd(A._GetAutoObject(A.Device.Helper).Aa_(this.AnimalType.
Q));this.C9.H(A$6);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KE));this.C9.Gp(1000);
this.C9.E4(99000);this.C9.Ahd(A._GetAutoObject(A.Device.Helper).Aa_(this.AnimalType.
Q));this.BY.H(AsC);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.Afc));this.Ay.H(IJ);this.
I4.B3=false;this.I4.Cu=true;this.I4.HI(1);this.I4.Fi(1000);this.I4.Ue(0);this.Yr.
H(Z0);this.Yr.Aj(true);this.Yr.Arl(A.jb.Text);this.AlX.PN(3000);this.J(this.DV,0
);this.J(this.Z,0);this.J(this.Eb,0);this.J(this.Ck,0);this.J(this.CF,0);this.J(
this.C_,0);this.J(this.Gd,0);this.J(this.Ea,0);this.J(this.C9,0);this.J(this.BY,
0);this.J(this.Ay,0);this.J(this.Yr,0);this.N.Cz=[this,this.Er];this.N.Cj=[this,
this.Xo];this.N.CY(A.aaL(A.ach.EW));this.N.Cp(A.aaL(A.ach.Abk));this.Z.En=[this,
this.Fa];this.Eb.Gi([this,this.D6,this.GI]);this.Eb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Anb,B.Nb]);this.Eb.AEL([this,this.AtB]);this.Eb.ASJ([this,this.A2M]);
this.Eb.ASK([this,this.A2N]);this.Ck.Gi([this,this.D6,this.GI]);this.Ck.AbT([B=A.
_GetAutoObject(A.Device.Helper).W,B.AvJ,B.QX]);this.Ck.OE=[this,this.Bd_];this.Ck.
ASJ([this,this.A2M]);this.Ck.ASK([this,this.A2N]);this.CF.Gi([this,this.D6,this.
GI]);this.CF.LU([B=this.CF,B.FN]);this.CF.LX(A.aaL(A.ach.Edit));this.CF.As([B=this.
Breed,B.B$,B.Ca]);this.CF.CJ(this.Breed);this.CF.Ang(this.Pi);this.C_.As([B=this.
Gender,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.Gd.Gi([this,this.D6,this.GI]);this.
Gd.LU([B=this.Gd,B.FN]);this.Gd.LX(A.aaL(A.ach.Edit));this.Gd.As([B=this.I6,B.B$
,B.Ca]);this.Gd.CJ(this.I6);this.Gd.Ang(this.KV);this.Ea.As([this,this.Am_,this.
Ag$]);this.C9.As([this,this.AvG,this.AeD]);this.BY.As([B=this.AnimalType,B.B$,B.
Ca]);this.BY.CJ(this.AnimalType);this.Ay.Bmt([this,this.A2Y]);this.Breed.LV(A._GetAutoObject(
A.Device.Helper).W);this.I6.LV(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LV(A._GetAutoObject(A.Device.Helper).W);this.Gender.LV(A._GetAutoObject(A.Device.
Helper).W);this.FY=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Al6
);this.I4.Q=[B=A._GetAutoObject(A.Device.Device),B.ASd,B.AZS];this.AlX.Mv=[this,
this.AKS];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DV._Done();
this.Z._Done();this.Eb._Done();this.Ck._Done();this.CF._Done();this.C_._Done();this.
Gd._Done();this.Ea._Done();this.C9._Done();this.BY._Done();this.Ay._Done();this.
Breed._Done();this.I6._Done();this.AnimalType._Done();this.Gender._Done();this.Pi.
_Done();this.KV._Done();this.I4._Done();this.Yr._Done();this.AlX._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DV._ReInit();this.Z.
_ReInit();this.Eb._ReInit();this.Ck._ReInit();this.CF._ReInit();this.C_._ReInit(
);this.Gd._ReInit();this.Ea._ReInit();this.C9._ReInit();this.BY._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.I6._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pi._ReInit();this.KV._ReInit();this.I4._ReInit();this.Yr._ReInit(
);this.AlX._ReInit();this.Eb.T(A.aaR(A.acf.AB9));this.Ck.T(A.aaR(A.acf.AdX));this.
CF.T(A.aaR(A.acf.Breed));this.C_.T(A.aaR(A.acf.Ae6));this.Gd.T(A.aaR(A.acf.I6));
this.Ea.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KE));this.BY.T(A.aaR(A.acf.Afc)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FY)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ck)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Ar6={Y6:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Y6={
I:this},0);this.__proto__=C.Ar6;this.N.B2(A.acf.Bhx);this.Number.H(BsR);this.I5.
H(BsS);this.II.H(BsT);this.Ako(2);this.Bb$=false;this.Bdd=true;this.Bde=false;this.
Y6.H(BsU);this.Y6.KP(true);this.Y6.R(A.aaR(A.acf.A_0));this.Y6.L(A.jb.Text);this.
J(this.Y6,0);this.N.Cz=null;this.N.Cf=[this,this.AIp];this.N.CY(null);this.Y6.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Y6.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Y6._ReInit();this.Y6.R(A.aaR(A.acf.A_0));this.Y6.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADj={Cr:null,FF:function(E){if(this.M4===E)return;C.HD.FF.call(this,E);this.
Cr.CX(E);},Yd:function(Ht){var B6=null;switch(Ht){case-1:case 0:B6=this.FT;break;
case 1:B6=this.Cr;break;case 2:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;
},_Init:function(aArg){C.HD._Init.call(this,aArg);C.DB._Init.call(this.Cr={I:this
},0);this.__proto__=C.ADj;this.H(BsV);this.Cr.H(A$I);this.FT.H(BsW);this.J(this.
Cr,-2);this.Cr.Dk=[this,this.GK];},_Done:function(){this.__proto__=C.HD;this.Cr.
_Done();C.HD._Done.call(this);},_ReInit:function(){C.HD._ReInit.call(this);this.
Cr._ReInit();},_Mark:function(D){var B;C.HD._Mark.call(this,D);if((B=this.Cr)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Ar7={GU:null
,Bj:function(aSize){C.OQ.Bj.call(this,aSize);this.V.H(A.abN(this.V.M,this.GU.M[0
]));},Ai:function(Ae){C.OQ.Ai.call(this,Ae);if(this.Hc)this.GU.FF(A.jb.CI);else this.
GU.FF(A.jb.C2);},A1B:function(){this.Bb(this.GU);},_Init:function(aArg){C.OQ._Init.
call(this,aArg);C.HD._Init.call(this.GU={I:this},0);this.__proto__=C.Ar7;this.GU.
H(BsX);this.J(this.GU,0);this.GU.As([this,this.AR5,this.AE6]);},_Done:function(){
this.__proto__=C.OQ;this.GU._Done();C.OQ._Done.call(this);},_ReInit:function(){C.
OQ._ReInit.call(this);this.GU._ReInit();},_Mark:function(D){var B;C.OQ._Mark.call(
this,D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Aw4={GU:null,Bj:function(aSize){C.OQ.Bj.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GU.M[0]));},Ai:function(Ae){C.OQ.Ai.call(this,Ae);if(this.Hc)this.GU.FF(
A.jb.CI);else this.GU.FF(A.jb.C2);},A1B:function(){this.Bb(this.GU);},_Init:function(
aArg){C.OQ._Init.call(this,aArg);C.ADj._Init.call(this.GU={I:this},0);this.__proto__=
C.Aw4;this.GU.A3(0x18);this.GU.H(BsY);this.J(this.GU,0);this.GU.As([this,this.AR5
,this.AE6]);},_Done:function(){this.__proto__=C.OQ;this.GU._Done();C.OQ._Done.call(
this);},_ReInit:function(){C.OQ._ReInit.call(this);this.GU._ReInit();},_Mark:function(
D){var B;C.OQ._Mark.call(this,D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acc={ScreenTypeToString:
null,Dr:function(){return 4;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=106))return A.
jV;return this.ScreenTypeToString.BS(this.C7(aIndex));},_Init:function(aArg){C.CQ.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acc;this.Cq.Set(0,3);this.Cq.Set(1,35);this.Cq.Set(2
,34);this.Cq.Set(3,47);},_Done:function(){this.__proto__=C.CQ;this.ScreenTypeToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVl={Wi:function(G){this.Age();A._GetAutoObject(C.BN).Qt(A.aaR(A.acf.Settings
),[this,this.A23]);A._GetAutoObject(C.BN).Fz();this.ALB();A._GetAutoObject(C.BN).
Nx(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.
BN).Nx(A.aaR(A.acf.ANc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},Dz:function(G){},CA:function(G){C.RD.CA.call(this,G);A.pe([this,this.AZX],this
);},Aba:function(){return C.ABz;},Abb:function(){return C.ACU;},Q3:function(G){A.
_GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).A6x());}
,HK:function(G){C.RD.HK.call(this,G);if(this.Aj3()===false){this.N.Cp(A.aaL(A.ach.
Au9));this.N.Cj=[this,this.ANr];this.N.FG(A.jV);}this.N.OM(false);this.N.ON(false
);},Af1:function(){A._GetAutoObject(C.A1).BU(97);},Af0:function(){A._GetAutoObject(
C.A1).BU(98);},A6o:function(){return C.AO3;},Bfc:function(){var B;var Filter;var
FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Ao.Filter){Filter=A._GetAutoObject(
A.Device.Device).Ao.Filter.Fc();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DN(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion
);A._GetAutoObject(A.Device.Device).Ao.Bl(Filter);}},A23:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);A._GetAutoObject(C.A1).BU(101);},_Init:function(aArg){C.RD.
_Init.call(this,aArg);this.__proto__=C.AVl;this.Dn(C.ACL);this.Dx(A.aaR(A.acf.A7L
));this.ASF(A._GetAutoObject(C.Axw));},_ReInit:function(){C.RD._ReInit.call(this
);this.Dx(A.aaR(A.acf.A7L));},_className:"Application::YoungNoTransponderListScreen"
};C.AVk={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AVk;this.
KT.Ar(false);this.KT.Aj(false);this.KT.Y(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AVj={_Init:function(aArg){C.GB._Init.call(this,aArg);this.__proto__=C.AVj;this.
N.B2(A.aaR(A.acf.A4R));},_ReInit:function(){C.GB._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A4R));},_className:"Application::YoungNoTransponderListActionsScreen"};
C.AQy={Si:null,Q:null,A7H:0,M4:0,Init:function(aArg){this.ASI(6);},As:function(E
){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Si)this.Si.As(E);},ASI:function(E
){if(this.A7H===E)return;this.A7H=E;var X;switch(E){case 2:X=A._NewObject(C.HD,0
);break;case 3:X=A._NewObject(C.ADj,0);break;case 4:X=A._NewObject(C.AQv,0);break;
case 5:X=A._NewObject(C.AQw,0);break;case 6:X=A._NewObject(C.Avp,0);break;default:{
X=null;A.ab5("%s%i",BsZ,E);}}this.Bl6(X);},Bl6:function(E){if(this.Si===E)return;
if(!!this.Si){this.Si.As(null);this.HJ(this.Si);}this.Si=E;if(!!this.Si){this.Si.
As(this.Q);this.J(this.Si,0);}},FF:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.Si)this.Si.FF(E);},SA:function(Gs){if(!!this.Si)this.Si.SA(Gs);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.AQy;this.H(AxO);this.Init(
aArg);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Si)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQv={CU:null,Cr:null,FF:function(
E){if(this.M4===E)return;C.HD.FF.call(this,E);this.Cr.CX(E);this.CU.CX(E);},Yd:function(
Ht){var B6=null;switch(Ht){case-1:case 0:B6=this.FT;break;case 1:B6=this.Cr;break;
case 2:B6=this.CU;break;case 3:B6=this.GQ;break;default:A.ab5("%s",AhM);}return B6;
},_Init:function(aArg){C.HD._Init.call(this,aArg);C.DB._Init.call(this.CU={I:this
},0);C.DB._Init.call(this.Cr={I:this},0);this.__proto__=C.AQv;this.H(Bs0);this.GQ.
H(AsR);this.CU.H(A$J);this.Cr.H(A$K);this.FT.H(A$L);this.J(this.CU,-2);this.J(this.
Cr,-2);this.CU.Dk=[this,this.GK];this.Cr.Dk=[this,this.GK];},_Done:function(){this.
__proto__=C.HD;this.CU._Done();this.Cr._Done();C.HD._Done.call(this);},_ReInit:function(
){C.HD._ReInit.call(this);this.CU._ReInit();this.Cr._ReInit();},_Mark:function(D
){var B;C.HD._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACg={SQ:null,Ai:function(Ae){C.Aa9.Ai.call(this,Ae);this.SQ.L(this.V.AQ);},_Init:
function(aArg){C.Aa9._Init.call(this,aArg);C.CG._Init.call(this.SQ={I:this},0);this.
__proto__=C.ACg;this.V.Y(false);this.AV.H(Bs1);this.AV.ASI(4);this.SQ.H(Bs2);this.
SQ.R(A.aaR(A.acf.J_));this.SQ.L(A.jb.Bm);this.J(this.SQ,0);this.SQ.S(A.aaL(A.fl.
Af));this.SQ.A2(A.aaL(A.fl.Ak));this.SQ.Cs(null);},_Done:function(){this.__proto__=
C.Aa9;this.SQ._Done();C.Aa9._Done.call(this);},_ReInit:function(){C.Aa9._ReInit.
call(this);this.SQ._ReInit();this.SQ.R(A.aaR(A.acf.J_));this.SQ.S(A.aaL(A.fl.Af)
);this.SQ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Aa9._Mark.call(this,D);
if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LT={YK:null,T0:null,AQ:0,A6Y:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YK.L(this.AQ);this.T0.L(this.AQ);},A9E:function(E){var B;if(this.A6Y===
E)return;this.A6Y=E;if(E){this.YK.Y(true);this.T0.DI([this.T0.Ex[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YK.Y(false);this.T0.DI([this.T0.Ex[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.DR._Init.call(
this.YK={I:this},0);A.acg.DR._Init.call(this.T0={I:this},0);this.__proto__=C.LT;
this.H(AZx);this.YK.A3(0x2D);this.YK.DI(AhI);this.YK.DY(A$7);this.YK.L(A.jb.Text
);this.T0.A3(0x36);this.T0.DI(A$7);this.T0.DY(Bs3);this.T0.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YK,0);this.J(this.T0,0);},_Done:function(){this.__proto__=
A.Core.O;this.YK._Done();this.T0._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.YK._ReInit();this.T0._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.ATN={Sn:null,Px:null,C_:null,BY:null,CF:null,GH:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pi:null,UH:null,KV:null,Init:function(aArg){A.zX([this
,this.Auk],this.BY.Q,0);A.zX([this,this.AMv],this.CF.Q,0);A.zX([this,this.BpT],this.
Sn.Q,0);A.zX([this,this.Au0],this.C_.Q,0);A.zX([this,this.AVh],this.GH.Q,0);},Auk:
function(G){var F;A._GetAutoObject(A.Device.Device).Ew((F=this.BY.Q,F[1].call(F[
0])));},BpT:function(G){var F;A._GetAutoObject(A.Device.Device).AwL((F=this.Sn.Q
,F[1].call(F[0])));},Au0:function(G){var F;A._GetAutoObject(A.Device.Device).JJ((
F=this.C_.Q,F[1].call(F[0])));},AVh:function(G){var F;A._GetAutoObject(A.Device.
Device).Nc((F=this.GH.Q,F[1].call(F[0])));},AMv:function(G){var F;A._GetAutoObject(
A.Device.Device).NU((F=this.CF.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ct._Init.
call(this,aArg);C.BZ._Init.call(this.Sn={I:this},0);C.I1._Init.call(this.Px={I:this
},0);C.BZ._Init.call(this.C_={I:this},0);C.BZ._Init.call(this.BY={I:this},0);C.Aw4.
_Init.call(this.CF={I:this},0);C.Ar7._Init.call(this.GH={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pi={I:this},0);C.UH._Init.call(this.UH={I:
this},0);A.Device.KV._Init.call(this.KV={I:this},0);this.__proto__=C.ATN;var B;this.
JK((A.aaR(A.acf.ArU)+Ax0)+A.aaR(A.acf.Ajt));this.Sn.H(AhL);this.Sn.Aj(true);this.
Sn.T(A.aaR(A.acf.A$x));this.Sn.Bi(true);this.Sn.BC(0);this.Px.H(AxM);this.Px.Aj(
true);this.Px.Y(true);this.Px.T(A.aaR(A.acf.Adz));this.Px.Gp(0);this.Px.E4(99);this.
Px.Kk(A.aaR(A.acf.J_));this.Px.KO(A.aaR(A.acf.GD));this.C_.H(Z0);this.C_.Aj(true
);this.C_.T(A.aaR(A.acf.Ae6));this.C_.Bi(true);this.C_.BC(0);this.BY.H(An9);this.
BY.Aj(true);this.BY.T(A.aaR(A.acf.Afc));this.BY.Bi(true);this.BY.BC(0);this.CF.H(
AkX);this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed));this.CF.Bi(false);this.GH.H(
AkX);this.GH.Aj(true);this.GH.T(A.aaR(A.acf.I6));this.GH.Bi(true);this.AnimalType.
As(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.As(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.As(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.Device).Breed);
this.UH.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sn,0);this.
J(this.Px,0);this.J(this.C_,0);this.J(this.BY,0);this.J(this.CF,0);this.J(this.GH
,0);this.Sn.As([B=this.WeightRecordingScope,B.B$,B.Ca]);this.Sn.CJ(this.WeightRecordingScope
);this.Px.As([B=A._GetAutoObject(A.Device.Device),B.A71,B.Bar]);this.C_.As([B=this.
Gender,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.BY.As([B=this.AnimalType,B.B$,B.
Ca]);this.BY.CJ(this.AnimalType);this.CF.Gi([this,this.D6,this.GI]);this.CF.LU([
B=this.CF,B.FN]);this.CF.LX(A.aaL(A.ach.Edit));this.CF.As([B=this.Breed,B.B$,B.Ca
]);this.CF.CJ(this.Breed);this.CF.Ang(this.Pi);this.GH.Gi([this,this.D6,this.GI]
);this.GH.LU([B=this.GH,B.FN]);this.GH.LX(A.aaL(A.ach.Edit));this.GH.As([B=this.
UH,B.B$,B.Ca]);this.GH.CJ(this.UH);this.GH.Ang(this.KV);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ct;this.Sn._Done();this.Px._Done();this.C_._Done();this.
BY._Done();this.CF._Done();this.GH._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pi._Done();this.UH._Done();this.
KV._Done();C.Ct._Done.call(this);},_ReInit:function(){C.Ct._ReInit.call(this);this.
Sn._ReInit();this.Px._ReInit();this.C_._ReInit();this.BY._ReInit();this.CF._ReInit(
);this.GH._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pi._ReInit();this.UH._ReInit();
this.KV._ReInit();this.JK((A.aaR(A.acf.ArU)+Ax0)+A.aaR(A.acf.Ajt));this.Sn.T(A.aaR(
A.acf.A$x));this.Px.T(A.aaR(A.acf.Adz));this.Px.Kk(A.aaR(A.acf.J_));this.Px.KO(A.
aaR(A.acf.GD));this.C_.T(A.aaR(A.acf.Ae6));this.BY.T(A.aaR(A.acf.Afc));this.CF.T(
A.aaR(A.acf.Breed));this.GH.T(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.Ct._Mark.
call(this,D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Px)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.ATM={QH:null,Ji:null,Ig:null,Fd:null,FC:null,If:null,AutoRegistrationMode:null
,AdB:null,Init:function(aArg){var B;A.zX([this,this.Bgz],this.QH.Q,0);A.zX([this
,this.BdW],[B=A._GetAutoObject(A.Device.Device),B.ARO,B.AZD],0);A.zX([this,this.
Apr],[B=A._GetAutoObject(A.Device.Device),B.AbK,B.AcA],0);A.zX([this,this.Apr],[
B=A._GetAutoObject(A.Device.Device),B.AbL,B.AcB],0);A.pe([this,this.BdW],this);A.
pe([this,this.Apr],this);},Bgz:function(G){var F;A._GetAutoObject(A.Device.Device
).Av1((F=this.QH.Q,F[1].call(F[0])));},BdW:function(G){switch(A._GetAutoObject(A.
Device.Device).Agh){case 0:A._GetAutoObject(A.Device.Helper).Mz(this.Ig,true);break;
case 1:A._GetAutoObject(A.Device.Helper).Mz(this.Ig,false);break;default:throw new
Error(Bs4+A._GetAutoObject(A.Device.Device).Agh.toFixed());}},Apr:function(G){var
F,CP;if(((F=this.Fd.Q,F[1].call(F[0]))+(CP=this.FC.Q,CP[1].call(CP[0])))>12)(CP=
this.FC.Q,CP[2].call(CP[0],12-(F=this.Fd.Q,F[1].call(F[0]))));},_Init:function(aArg
){C.Ct._Init.call(this,aArg);C.BZ._Init.call(this.QH={I:this},0);C.BZ._Init.call(
this.Ji={I:this},0);C.AF$._Init.call(this.Ig={I:this},0);C.I1._Init.call(this.Fd={
I:this},0);C.I1._Init.call(this.FC={I:this},0);C.ADK._Init.call(this.If={I:this}
,0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdB.
_Init.call(this.AdB={I:this},0);this.__proto__=C.ATM;var B;this.JK(A.aaR(A.acf.Ap2
));this.QH.H(AIb);this.QH.Aj(true);this.QH.T(A.aaR(A.acf.Ap2));this.QH.Bi(false);
this.QH.Gp(-1);this.QH.E4(1);this.Ji.H(W1);this.Ji.Aj(true);this.Ji.Y(true);this.
Ji.T(A.aaR(A.acf.ABf));this.Ji.Bi(true);this.Ig.H(Z0);this.Ig.Aj(true);this.Ig.Y(
true);this.Ig.T(A.aaR(A.acf.ADS));this.Ig.Bi(true);this.Fd.H(An9);this.Fd.Aj(true
);this.Fd.Y(true);this.Fd.T(A.aaR(A.acf.AB3));this.Fd.Bi(false);this.Fd.Gp(2);this.
Fd.E4(6);this.Fd.Kk(A.aaR(A.acf.TF));this.Fd.KO(A.aaR(A.acf.E1));this.FC.H(AkX);
this.FC.Aj(true);this.FC.T(A.aaR(A.acf.Aez));this.FC.Bi(true);this.FC.Gp(0);this.
FC.E4(12);this.FC.Kk(A.aaR(A.acf.TF));this.FC.KO(A.aaR(A.acf.E1));this.If.H(Bs5);
this.If.Ar(true);this.If.Aj(true);this.If.Bi(false);this.If.AE5(A.aaR(A.acf.ABm)
);this.AutoRegistrationMode.As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.J(this.QH,0);this.J(this.Ji,0);this.J(this.Ig,0);this.J(this.Fd,0);this.J(
this.FC,0);this.J(this.If,0);this.QH.As([B=this.AutoRegistrationMode,B.B$,B.Ca]);
this.QH.CJ(this.AutoRegistrationMode);this.Ji.As([B=this.AdB,B.B$,B.Ca]);this.Ji.
CJ(this.AdB);this.Ig.Ud([B=A._GetAutoObject(A.Device.Device),B.Wg,B.AZH]);this.Ig.
Akf([B=A._GetAutoObject(A.Device.Device),B.AvL,B.Aye]);this.Fd.As([B=A._GetAutoObject(
A.Device.Device),B.AbK,B.AcA]);this.FC.As([B=A._GetAutoObject(A.Device.Device),B.
AbL,B.AcB]);this.If.DD(A.aaL(A.ach.AmM));this.If.PM([B=A._GetAutoObject(A.Device.
Device),B.AbK,B.AcA]);this.If.QY([B=A._GetAutoObject(A.Device.Device),B.AbL,B.AcB
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ct;this.QH._Done();this.Ji.
_Done();this.Ig._Done();this.Fd._Done();this.FC._Done();this.If._Done();this.AutoRegistrationMode.
_Done();this.AdB._Done();C.Ct._Done.call(this);},_ReInit:function(){C.Ct._ReInit.
call(this);this.QH._ReInit();this.Ji._ReInit();this.Ig._ReInit();this.Fd._ReInit(
);this.FC._ReInit();this.If._ReInit();this.AutoRegistrationMode._ReInit();this.AdB.
_ReInit();this.JK(A.aaR(A.acf.Ap2));this.QH.T(A.aaR(A.acf.Ap2));this.Ji.T(A.aaR(
A.acf.ABf));this.Ig.T(A.aaR(A.acf.ADS));this.Fd.T(A.aaR(A.acf.AB3));this.Fd.Kk(A.
aaR(A.acf.TF));this.Fd.KO(A.aaR(A.acf.E1));this.FC.T(A.aaR(A.acf.Aez));this.FC.Kk(
A.aaR(A.acf.TF));this.FC.KO(A.aaR(A.acf.E1));this.If.AE5(A.aaR(A.acf.ABm));},_Mark:
function(D){var B;C.Ct._Mark.call(this,D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdB)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::RegistrationAutomaticSettingsScreen"};C.AUR={OF:null,Ji:
null,Ig:null,Fd:null,FC:null,If:null,Afa:null,Init:function(aArg){var B;A.zX([this
,this.Bey],[B=A._GetAutoObject(A.Device.Device),B.ASf,B.AZU],0);A.zX([this,this.
Apr],[B=A._GetAutoObject(A.Device.Device),B.AbK,B.AcA],0);A.zX([this,this.Apr],[
B=A._GetAutoObject(A.Device.Device),B.AbL,B.AcB],0);A.pe([this,this.Bey],this);A.
pe([this,this.Apr],this);},Bey:function(G){var AKw=false;var AtU=false;switch(A.
_GetAutoObject(A.Device.Device).AhB){case 0:{AKw=false;AtU=false;}break;case 1:{
AKw=true;AtU=false;}break;case 2:{AKw=false;AtU=true;}break;default:throw new Error(
Bs6+A._GetAutoObject(A.Device.Device).AhB.toFixed());}A._GetAutoObject(A.Device.
Helper).Mz(this.Ig,AKw);A._GetAutoObject(A.Device.Helper).Mz(this.Fd,AtU);A._GetAutoObject(
A.Device.Helper).Mz(this.FC,AtU);A._GetAutoObject(A.Device.Helper).Mz(this.If,AtU
);},Apr:function(G){var F,CP;if(((F=this.Fd.Q,F[1].call(F[0]))+(CP=this.FC.Q,CP[
1].call(CP[0])))>12)(CP=this.FC.Q,CP[2].call(CP[0],12-(F=this.Fd.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ct._Init.call(this,aArg);C.I1._Init.call(this.OF={
I:this},0);C.BZ._Init.call(this.Ji={I:this},0);C.AF$._Init.call(this.Ig={I:this}
,0);C.I1._Init.call(this.Fd={I:this},0);C.I1._Init.call(this.FC={I:this},0);C.ADK.
_Init.call(this.If={I:this},0);C.Afa._Init.call(this.Afa={I:this},0);this.__proto__=
C.AUR;var B;this.JK(A.aaR(A.acf.LinkTransponder));this.OF.H(AIb);this.OF.Aj(true
);this.OF.Y(true);this.OF.T(A.aaR(A.acf.A7f));this.OF.Bi(false);this.OF.Gp(1);this.
OF.E4(365);this.OF.Kk(A.aaR(A.acf.J_));this.OF.KO(A.aaR(A.acf.GD));this.Ji.H(W1);
this.Ji.Aj(true);this.Ji.Y(true);this.Ji.T(A.aaR(A.acf.ABf));this.Ji.Bi(true);this.
Ig.H(Z0);this.Ig.Aj(true);this.Ig.Y(true);this.Ig.T(A.aaR(A.acf.ADS));this.Ig.Bi(
false);this.Fd.H(An9);this.Fd.Aj(true);this.Fd.Y(true);this.Fd.T(A.aaR(A.acf.AB3
));this.Fd.Bi(false);this.Fd.Gp(2);this.Fd.E4(6);this.Fd.Kk(A.aaR(A.acf.TF));this.
Fd.KO(A.aaR(A.acf.E1));this.FC.H(AkX);this.FC.Aj(true);this.FC.T(A.aaR(A.acf.Aez
));this.FC.Bi(true);this.FC.Gp(0);this.FC.E4(12);this.FC.Kk(A.aaR(A.acf.TF));this.
FC.KO(A.aaR(A.acf.E1));this.If.H(AHs);this.If.Ar(true);this.If.Aj(true);this.If.
Bi(false);this.If.AE5(A.aaR(A.acf.ABm));this.J(this.OF,0);this.J(this.Ji,0);this.
J(this.Ig,0);this.J(this.Fd,0);this.J(this.FC,0);this.J(this.If,0);this.OF.As([B=
A._GetAutoObject(A.Device.Device),B.A8v,B.BaI]);this.Ji.As([B=this.Afa,B.B$,B.Ca
]);this.Ji.CJ(this.Afa);this.Ig.Ud([B=A._GetAutoObject(A.Device.Device),B.Wg,B.AZH
]);this.Ig.Akf([B=A._GetAutoObject(A.Device.Device),B.AvL,B.Aye]);this.Fd.As([B=
A._GetAutoObject(A.Device.Device),B.AbK,B.AcA]);this.FC.As([B=A._GetAutoObject(A.
Device.Device),B.AbL,B.AcB]);this.If.DD(A.aaL(A.ach.AmM));this.If.PM([B=A._GetAutoObject(
A.Device.Device),B.AbK,B.AcA]);this.If.QY([B=A._GetAutoObject(A.Device.Device),B.
AbL,B.AcB]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ct;this.OF._Done(
);this.Ji._Done();this.Ig._Done();this.Fd._Done();this.FC._Done();this.If._Done(
);this.Afa._Done();C.Ct._Done.call(this);},_ReInit:function(){C.Ct._ReInit.call(
this);this.OF._ReInit();this.Ji._ReInit();this.Ig._ReInit();this.Fd._ReInit();this.
FC._ReInit();this.If._ReInit();this.Afa._ReInit();this.JK(A.aaR(A.acf.LinkTransponder
));this.OF.T(A.aaR(A.acf.A7f));this.OF.Kk(A.aaR(A.acf.J_));this.OF.KO(A.aaR(A.acf.
GD));this.Ji.T(A.aaR(A.acf.ABf));this.Ig.T(A.aaR(A.acf.ADS));this.Fd.T(A.aaR(A.acf.
AB3));this.Fd.Kk(A.aaR(A.acf.TF));this.Fd.KO(A.aaR(A.acf.E1));this.FC.T(A.aaR(A.
acf.Aez));this.FC.Kk(A.aaR(A.acf.TF));this.FC.KO(A.aaR(A.acf.E1));this.If.AE5(A.
aaR(A.acf.ABm));},_Mark:function(D){var B;C.Ct._Mark.call(this,D);if((B=this.OF).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afa)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afa={TransponderAssignmentIdChangeMethodToString:null,Init:function(aArg){var
B;A.zX([this,this.BfN],[B=A._GetAutoObject(A.Device.Device),B.ASf,B.AZU],0);A.pe([
this,this.BfN],this);},Dr:function(){return 3;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=3))return-1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=
3))return A.jV;return this.TransponderAssignmentIdChangeMethodToString.BS(aIndex
);},DO:function(A6){return A6;},Hn:function(){return 2;},As:function(E){C.AC.As.
call(this,E);A._GetAutoObject(A.Device.Device).AwI(E);},BfN:function(G){this.Q=A.
_GetAutoObject(A.Device.Device).AhB;A.abo([this,this.B$,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TransponderAssignmentIdChangeMethodToString.
_Init.call(this.TransponderAssignmentIdChangeMethodToString={I:this},0);this.__proto__=
C.Afa;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.TransponderAssignmentIdChangeMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
TransponderAssignmentIdChangeMethodToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.TransponderAssignmentIdChangeMethodToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I2={B7:null,IK:null,Co:null,Ame:null,R7:null,Am4:null,Ajp:null,Text:null,CW:
null,Ei:0,MM:false,Ai:function(Ae){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IK.Ar(true);else{this.IK.Ar(false);this.CW.Y(false);}},A3Z:function(G
){var B;var Bd=this.Text.M;var Np=0;var Nq=0;if(this.CW.Eo[0]<Bd[0])Np=Bd[0]-this.
CW.Eo[0];if(this.CW.Eo[0]>Bd[2])Np=Bd[2]-this.CW.Eo[0];if(this.CW.Eo[1]<Bd[1])Nq=
Bd[1]-this.CW.Eo[1];if(this.CW.Ex[1]>Bd[3])Nq=Bd[3]-this.CW.Ex[1];if(!!Np||!!Nq)
this.Text.Gj(A.abf(this.Text.Bt,[Np,Nq]));Np=this.Text.Bt[0];Nq=this.Text.Bt[1];
var C4=[(B=this.Text.Df())[2]-B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]
))Np=0;if(C4[1]<=((B=this.Text.M)[3]-B[1]))Nq=0;this.Text.Gj([Np,Nq]);},Al0:function(
G){if(!this.B7)return;var A3q=this.Text.AGm(this.Ei);var pos=this.Text.AeY(A3q);
this.CW.DY(A.abe(pos,[0,this.B7.Ascent]));this.CW.DI(A.abf(pos,[0,this.B7.Descent
]));if(this.IK.By){this.IK.Ar(false);this.IK.Ar(true);}if(this.MM){A.pe([this,this.
A3Z],this);this.MM=false;}},Az3:function(G){if(!this.B7)return;var EC=this.Text.
AGm(this.Ei);if(this.Co.CN===6){EC=[EC[0]-1,EC[1]];if(this.Text.Anz(EC)===this.Ei
){EC=[EC[0],EC[1]-1];EC=[this.Text.ACw(EC[1]).length,EC[1]];}}if(this.Co.CN===7){
EC=[EC[0]+1,EC[1]];if(this.Text.Anz(EC)===this.Ei){EC=[EC[0],EC[1]+1];EC=[0,EC[1
]];}}if(this.Co.CN===4){var pos=this.Text.AeY(EC);var Aav=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EC=this.Text.ATn(A.abe(pos,[0,Aav]));}if(this.Co.CN===5
){var pos=this.Text.AeY(EC);var Aav=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EC=this.Text.ATn(A.abf(pos,[0,Aav]));}var U4=this.Text.Anz(EC);var Io=this.Text.
String.charCodeAt(U4)||0;if(((Io===0x5E)||(Io===0x7E))||(Io===0x25))U4=U4-1;if(U4
!==this.Ei){this.Ei=U4;A.pe([this,this.Al0],this);this.MM=true;}},Bd4:function(G
){if(!this.Ei)return;var Io=this.Text.String.charCodeAt(this.Ei-1)||0;var CD=1;if(((
Io===0x5E)||(Io===0x7E))||(Io===0x25))CD=2;this.Text.R(A.ab1(this.Text.String,this.
Ei-CD,CD));this.Ei=this.Ei-CD;this.MM=true;},Az4:function(G){if(this.Ei>=(this.Text.
String.length-1))return;var Io=this.Text.String.charCodeAt(this.Ei)||0;var CD=1;
if(Io===0x25)CD=2;this.Text.R(A.ab1(this.Text.String,this.Ei,CD));this.MM=true;}
,Beg:function(G){this.Text.R(A.abU(this.Text.String,Bs7,this.Ei));this.Ei=this.Ei+
1;this.MM=true;},Bd6:function(G){var Io=this.Ajp.DM;var AtX=String.fromCharCode(
Io);A.ab5("%c",Io);if((((Io===0x5E)||(Io===0x7E))||(Io===0xAD))||(Io===0x25))AtX=
Bs8+String.fromCharCode(Io);this.Text.R(A.abU(this.Text.String,AtX,this.Ei));this.
Ei=this.Ei+AtX.length;this.MM=true;},_Init:function(aArg){A.acn.I2._Init.call(this
,aArg);A.acl.Tz._Init.call(this.IK={I:this},0);A.Core.BL._Init.call(this.Co={I:this
},0);A.Core.BL._Init.call(this.Ame={I:this},0);A.Core.BL._Init.call(this.R7={I:this
},0);A.Core.BL._Init.call(this.Am4={I:this},0);A.Core.BL._Init.call(this.Ajp={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.DR._Init.call(this.CW={
I:this},0);this.__proto__=C.I2;var B;this.H(Bs9);this.IK.B3=false;this.IK.Cu=true;
this.IK.Fi(500);this.IK.Ue(500);this.Co.Filter=147;this.Co.By=false;this.Ame.Filter=
151;this.R7.Filter=44;this.Am4.Filter=149;this.Ajp.Filter=145;this.Text.A3(0x3F);
this.Text.H(Bs_);this.Text.KP(true);this.Text.A7(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CW.DI(Bs$);this.CW.DY(Bta);this.CW.A_e(2);this.CW.A_d(2);this.
CW.L(0xFF000000);this.CW.Y(false);this.J(this.Text,0);this.J(this.CW,0);this.IK.
Q=[B=this.CW,B.Fh,B.Y];this.Co.BM=[this,this.Az3];this.Co.DX=[this,this.Az3];this.
Ame.BM=[this,this.Bd4];this.Ame.DX=[this,this.Bd4];this.R7.BM=[this,this.Az4];this.
R7.DX=[this,this.Az4];this.Am4.BM=[this,this.Beg];this.Am4.DX=[this,this.Beg];this.
Ajp.BM=[this,this.Bd6];this.Ajp.DX=[this,this.Bd6];this.Text.QZ([this,this.Al0]);
this.Text.S(A.aaL(A.aci.ACk));this.B7=A.aaL(A.aci.ACk);},_Done:function(){this.__proto__=
A.acn.I2;this.IK._Done();this.Co._Done();this.Ame._Done();this.R7._Done();this.Am4.
_Done();this.Ajp._Done();this.Text._Done();this.CW._Done();A.acn.I2._Done.call(this
);},_ReInit:function(){A.acn.I2._ReInit.call(this);this.IK._ReInit();this.Co._ReInit(
);this.Ame._ReInit();this.R7._ReInit();this.Am4._ReInit();this.Ajp._ReInit();this.
Text._ReInit();this.CW._ReInit();},_Mark:function(D){var B;A.acn.I2._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ame)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Am4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AUF={I2:null,Dz:function(G
){switch(this.Co.CN){case 6:A._GetAutoObject(A.Device.Device).Auq();break;case 7:
A._GetAutoObject(A.Device.Device).Ap3();break;case 4:A._GetAutoObject(A.Device.Device
).Ajn();break;case 5:A._GetAutoObject(A.Device.Device).Ap4();break;default:;}},Er:
function(G){A._GetAutoObject(C.A1).Fr();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I2._Init.call(this.I2={I:this},0);this.__proto__=C.AUF;this.H(Cc);this.
N.Y(true);this.Dn(C.AqB);this.I2.H(E7);this.J(this.I2,0);this.Bb(this.I2);this.N.
Cz=[this,this.Er];this.N.CY(A.aaL(A.ach.EW));},_Done:function(){this.__proto__=C.
AB;this.I2._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I2._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATv={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.Ayl],[B=A._GetAutoObject(A.Device.Device),B.ART,B.AZE],0);},Wi:function(G){
if((!!this.Bh&&!!this.Bh.AX)&&(this.Bh.AX.Cd()>0)){if(this.AI9())A._GetAutoObject(
C.BN).Qt(A.aaR(A.acf.ANR),[this,this.AIc]);else A._GetAutoObject(C.BN).Qt(A.aaR(
A.acf.ANR),null);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Qt(A.aaR(A.acf.
ABE),[this,this.Bai]);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Qt(A.aaR(
A.acf.AGG),[this,this.A7S]);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Qt(
A.aaR(A.acf.A5d),[this,this.Bah]);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.
BN).Qt(A.aaR(A.acf.UnlinkTransponder),[this,this.Bm5]);}else{A._GetAutoObject(C.
BN).XA(A.aaR(A.acf.ANR));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).XA(A.
aaR(A.acf.ABE));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).XA(A.aaR(A.acf.
AGG));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).XA(A.aaR(A.acf.A5d));A.
_GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).XA(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.Tp)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.
A5U));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.Al5)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},Aba:function(){return C.
ABA;},Abb:function(){return C.ACS;},Q3:function(G){A._GetAutoObject(A.Device.Device
).Ao.Bl(A._GetAutoObject(A.Device.Helper).AOn());},HK:function(G){C.Q1.HK.call(this
,G);this.N.Cp(A.aaL(A.ach.Abk));this.N.Cj=[this,this.Xo];this.N.FG(A.jV);this.N.
C5(null);this.N.B2((A.aaR(A.acf.A47)+Z1)+this.DataExportDestinationToString.BS(A.
_GetAutoObject(A.Device.Device).Vz));this.N.OM(false);this.N.ON(false);this.N.IW.
Do(255);},ARG:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var AiK=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A_(96,true,AiK.toFixed(),0,null);},ARH:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);this.A5K(this);},ARM:function(G){var B;A._GetAutoObject(A.Device.Device).
Ds(0);if(!A._GetAutoObject(A.Device.Device).Vz&&!A._GetAutoObject(A.Device.Device
).Un){A._GetAutoObject(A.Device.Device).A_(73,true,A.jV,0,[this,this.Bei]);return;
}if(A._GetAutoObject(A.Device.Device).AqR()===false){A.zX([this,this.Xp],[B=A._GetAutoObject(
A.Device.Device),B.Wh,B.W2],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV
,0,[this,this.AfZ]);return;}var AfL=null;switch(A._GetAutoObject(A.Device.Device
).Vz){case 0:AfL=A._GetAutoObject(A.Device.Device).AnD(2);break;case 1:AfL=A._GetAutoObject(
A.Device.Device).AnD(3);break;default:throw new Error(Btb+A._GetAutoObject(A.Device.
Device).Vz.toFixed());}if(AfL.AnI){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dx(A.aaR(A.acf.Bni));A._GetAutoObject(A.Device.Device).Aqf(AfL);}else A._GetAutoObject(
A.Device.Device).A_(97,true,A.jV,0,null);},AI9:function(){var Ay3=this.Bh.AX;if(
!Ay3)return false;return true;},Xo:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.Q1._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ATv;this.Dn(C.AOZ);this.Init(aArg);},_Done:function(){this.
__proto__=C.Q1;this.DataExportDestinationToString._Done();C.Q1._Done.call(this);
},_ReInit:function(){C.Q1._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q1._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.ACS={Pv:null,IV:null,_Init:function(aArg){C.Da._Init.call(this,aArg);A.acg.Am.
_Init.call(this.Pv={I:this},0);A.acg.Am._Init.call(this.IV={I:this},0);this.__proto__=
C.ACS;this.Em.Y(false);this.DQ.Y(false);this.Pv.H(Btc);this.Pv.L(A.jb.Text);this.
IV.H(Btd);this.IV.L(A.jb.Text);this.J(this.Pv,0);this.J(this.IV,0);this.Pv.Ax(A.
aaL(A.ach.Ave));this.IV.Ax(A.aaL(A.ach.Au$));},_Done:function(){this.__proto__=C.
Da;this.Pv._Done();this.IV._Done();C.Da._Done.call(this);},_ReInit:function(){C.
Da._ReInit.call(this);this.Pv._ReInit();this.IV._ReInit();},_Mark:function(D){var
B;C.Da._Mark.call(this,D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMq={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.Az7],[B=A._GetAutoObject(A.Device.Device),B.AD4,B.AIg],0);A.pe([this,this.
Az7],this);},Wi:function(G){if((!!this.Bh&&!!this.Bh.AX)&&(this.Bh.AX.Cd()>0)){if(
this.AI9())A._GetAutoObject(C.BN).Qt(A.aaR(A.acf.ANQ),[this,this.AIc]);else A._GetAutoObject(
C.BN).XA(A.aaR(A.acf.ANQ));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Qt(
A.aaR(A.acf.ABC),[this,this.Bai]);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.
BN).Qt(A.aaR(A.acf.AGG),[this,this.A7S]);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(
C.BN).Qt(A.aaR(A.acf.A5c),[this,this.Bah]);}else{A._GetAutoObject(C.BN).XA(A.aaR(
A.acf.ANQ));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).XA(A.aaR(A.acf.ABC
));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).XA(A.aaR(A.acf.AGG));A._GetAutoObject(
C.BN).Fz();A._GetAutoObject(C.BN).XA(A.aaR(A.acf.A5c));}A._GetAutoObject(C.BN).Fz(
);A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.A5U));A._GetAutoObject(C.BN).Fz();A._GetAutoObject(
C.BN).Nx(A.aaR(A.acf.Al5)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},Aba:function(){return C.ABw;},Abb:function(){return C.ACQ;},Q3:function(
G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).AOc(
));},HK:function(G){C.Q1.HK.call(this,G);this.N.Cp(A.aaL(A.ach.Abk));this.N.Cj=[
this,this.Xo];this.N.FG(A.jV);this.N.C5(null);this.N.B2((A.aaR(A.acf.A47)+String.
fromCharCode(0x0A))+A.aaR(A.acf.BgH));this.N.OM(false);this.N.ON(false);this.N.IW.
Do(255);},ARG:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var AiK=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A_(96,true,AiK.toFixed(),0,null);},ARH:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);this.A5J(this);},ARM:function(G){var B;A._GetAutoObject(A.Device.Device).
Ds(0);if(!A._GetAutoObject(A.Device.Device).Un){A._GetAutoObject(A.Device.Device
).A_(73,true,A.jV,0,[this,this.Bei]);return;}if(A._GetAutoObject(A.Device.Device
).AqR()===false){A.zX([this,this.Xp],[B=A._GetAutoObject(A.Device.Device),B.Wh,B.
W2],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV,0,[this,this.AfZ]);return;
}var AfL=A._GetAutoObject(A.Device.Device).AnD(0);if(AfL.AnI){A._GetAutoObject(A.
Device.Device).BatchResetBirthNoticePending();this.Dx(A.aaR(A.acf.BgI));A._GetAutoObject(
A.Device.Device).Aqf(AfL);}else A._GetAutoObject(A.Device.Device).A_(70,true,A.jV
,0,null);},AI9:function(){var Ay3=this.Bh.AX;if(!Ay3)return false;var P;for(P=0;
P<Ay3.Cd();P++)if(A._GetAutoObject(A.Device.Helper).AjR(Ay3.AOr(P,34))===false)return true;
return false;},Xo:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
17);},Az7:function(G){if(A._GetAutoObject(A.Device.Device).Ap6===1)A.pe([this,this.
A5Q],this);},_Init:function(aArg){C.Q1._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.AMq;this.
Dn(C.AOw);this.Init(aArg);},_Done:function(){this.__proto__=C.Q1;this.DataExportDestinationToString.
_Done();C.Q1._Done.call(this);},_ReInit:function(){C.Q1._ReInit.call(this);this.
DataExportDestinationToString._ReInit();},_Mark:function(D){var B;C.Q1._Mark.call(
this,D);if((B=this.DataExportDestinationToString)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::BirthRegistrationsListScreen"};C.AOw={D2:function(G){
C.Ad$.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter).AdF(11));}
,_Init:function(aArg){C.Ad$._Init.call(this,aArg);this.__proto__=C.AOw;this.Text.
R(A.aaR(A.acf.ABp));},_ReInit:function(){C.Ad$._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ABp));},_className:"Application::HeaderBirthRegistrationsList"};C.AOZ={
D2:function(G){C.Ad$.D2.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter
).AdF(12));},_Init:function(aArg){C.Ad$._Init.call(this,aArg);this.__proto__=C.AOZ;
this.Text.R(A.aaR(A.acf.AFM));},_ReInit:function(){C.Ad$._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AFM));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ABA={Kz:0,AP:null,SI:null,S_:0,Init:function(aArg){},Bj:function(aSize){C.Ba.Bj.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SI.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SI.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Ra(this.
Kz));this.SI.R(A._GetAutoObject(A.acj.KG).ACm(this.S_));},Ce:function(Ad){if(!this.
AX)return;this.Hj=Ad;if(!!this.AX){this.Kz=this.AX.KJ(Ad,26);this.S_=this.AX.HB(
Ad,4);this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.SI={I:this},0);this.__proto__=C.ABA;
this.AP.H(AZz);this.AP.L(A.jb.Bc);this.SI.H(AZA);this.J(this.AP,0);this.J(this.SI
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bk));this.SI.S(A.aaL(A.fl.Ak));
this.SI.A2(A.aaL(A.fl.Bk));this.SI.Cs(A.aaL(A.fl.Bk));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SI._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SI._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bk));this.SI.S(A.aaL(A.fl.Ak));this.SI.A2(A.
aaL(A.fl.Bk));this.SI.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SI)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AT6={
AeA:null,AbM:null,TI:null,KH:null,TG:null,ND:null,Ta:A.jV,Ai:function(Ae){var F;
C.SE.Ai.call(this,Ae);this.TI.L(this.V.AQ);var Ao$=false;if((!this.Dh||!(F=this.
Dh,F[1].call(F[0])))&&!this.A9)Ao$=true;this.TI.Y(Ao$);this.Po.Y(!Ao$);this.VB.Y(
!Ao$);this.QT.Y(!Ao$);this.X9.Y(!Ao$);this.PY.Y(!Ao$);},Ade:function(G){var B;var
F;if(!this.Ta.length){C.SE.Ade.call(this,G);return;}var BQ=this.FQ;var GM=A._GetAutoObject(
A.Device.ArL).BAi(this.Ta);this.Ta=A.jV;if(!GM){A._GetAutoObject(A.Device.Device
).A_(101,true,A.jV,0,this.AbM);A.pe(this.AeA,this);return;}if(this.ArT&&(GM>A._GetAutoObject(
A.Device.Helper).Dw())){A._GetAutoObject(A.Device.Device).A_(102,true,A.jV,0,this.
AbM);A.pe(this.AeA,this);return;}this.Uc(((B=(GM|0))<0)?B+0x100000000:B);if(this.
FQ!==BQ){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.FQ));A.abo(this.Dh,0);}if(!
!this.OE)A.pe(this.OE,this);},A2B:function(G){if(this.Ta.length<8)this.Ta=this.Ta+
String.fromCharCode(this.KH.DM);},ARJ:function(G){if((this.ND.DM===0x0D)||(this.
ND.DM===0x0A))this.Ade(this);else this.ND.NC=true;},ASJ:function(E){if(A.aa0(this.
AeA,E))return;this.AeA=E;},ASK:function(E){if(A.aa0(this.AbM,E))return;this.AbM=
E;},_Init:function(aArg){C.SE._Init.call(this,aArg);A.acg.Text._Init.call(this.TI={
I:this},0);A.Core.BL._Init.call(this.KH={I:this},0);A.Core.BL._Init.call(this.TG={
I:this},0);A.Core.BL._Init.call(this.ND={I:this},0);this.__proto__=C.AT6;this.TI.
H(Bte);this.TI.IZ(true);this.TI.A7(0x12);this.TI.R(A.aaR(A.acf.A5q));this.KH.Filter=
143;this.TG.Filter=149;this.ND.Filter=145;this.J(this.TI,0);this.TI.S(A.aaL(A.fl.
EF));this.KH.BM=[this,this.A2B];this.TG.BM=[this,this.Ba5];this.ND.BM=[this,this.
ARJ];},_Done:function(){this.__proto__=C.SE;this.TI._Done();this.KH._Done();this.
TG._Done();this.ND._Done();C.SE._Done.call(this);},_ReInit:function(){C.SE._ReInit.
call(this);this.TI._ReInit();this.KH._ReInit();this.TG._ReInit();this.ND._ReInit(
);this.TI.R(A.aaR(A.acf.A5q));this.TI.S(A.aaL(A.fl.EF));},_Mark:function(D){var B;
C.SE._Mark.call(this,D);if((B=this.AeA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AT_={AeA:null,AbM:null,KH:null
,TG:null,ND:null,Ta:A.jV,IO:function(G){var F;if(!this.Ta.length){C.Q5.IO.call(this
,G);return;}if(this.ArS)return;if(!this.Ta.length)this.TG.NC=true;var BQ=this.AM;
var GM=A._GetAutoObject(A.Device.ArL).BAj(this.Ta);this.Ta=A.jV;if(!GM){if((this.
Ta.length<13)&&!A._GetAutoObject(A.Device.Device).Un)A._GetAutoObject(A.Device.Device
).A_(105,true,A.jV,0,this.AbM);else A._GetAutoObject(A.Device.Device).A_(103,true
,A.jV,0,this.AbM);A.pe(this.AeA,this);return;}this.BC(GM);if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OE)A.pe(this.
OE,this);},A2B:function(G){if(this.ArS)return;if(this.Ta.length<17)this.Ta=this.
Ta+String.fromCharCode(this.KH.DM);},ARJ:function(G){if((this.ND.DM===0x0D)||(this.
ND.DM===0x0A))this.IO(this);else this.ND.NC=true;},ASJ:function(E){if(A.aa0(this.
AeA,E))return;this.AeA=E;},ASK:function(E){if(A.aa0(this.AbM,E))return;this.AbM=
E;},_Init:function(aArg){C.Q5._Init.call(this,aArg);A.Core.BL._Init.call(this.KH={
I:this},0);A.Core.BL._Init.call(this.TG={I:this},0);A.Core.BL._Init.call(this.ND={
I:this},0);this.__proto__=C.AT_;this.Ary(false);this.KH.Filter=143;this.TG.Filter=
149;this.ND.Filter=145;this.KH.BM=[this,this.A2B];this.TG.BM=[this,this.AsV];this.
ND.BM=[this,this.ARJ];},_Done:function(){this.__proto__=C.Q5;this.KH._Done();this.
TG._Done();this.ND._Done();C.Q5._Done.call(this);},_ReInit:function(){C.Q5._ReInit.
call(this);this.KH._ReInit();this.TG._ReInit();this.ND._ReInit();},_Mark:function(
D){var B;C.Q5._Mark.call(this,D);if((B=this.AeA)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ND)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.AOW={Am:null,CT:null,Init:function(aArg){var B;A.zX([this,this.D2],[B=A._GetAutoObject(
A.Device.Device),B.A8t,B.AEX],0);A.pe([this,this.D2],this);},Dc:function(E){C.BR.
Dc.call(this,E);this.Am.L(E);this.CT.AeH(E);},Wj:function(E){this.CT.CX(E);},D2:
function(G){this.CT.T(A._GetAutoObject(A.Device.Device).Avw.toFixed());},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);C.CT._Init.
call(this.CT={I:this},0);this.__proto__=C.AOW;this.Am.H(AsQ);this.CT.A3(0x14);this.
CT.H(Btf);this.CT.AeH(A.jb.Bm);this.CT.CX(A.jb.ZF);this.CT.Hq(2);this.CT.BkX(0x11
);this.J(this.Am,0);this.J(this.CT,0);this.Am.Ax(A.aaL(A.ach.APv));this.CT.S(A.aaL(
A.fl.Bk));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Am._Done();
this.CT._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this
);this.Am._ReInit();this.CT._ReInit();this.CT.S(A.aaL(A.fl.Bk));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.AQ_={Aa0:null,Ad5:null,Vy:null,Init:function(aArg){this.Bb(this.Aa0);},KN:function(
){if(!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.Cz=[this,this.Xn];this.Bz.Cj=
null;this.Bz.Cf=[this,this.A2E];this.Bz.B2(A.jV);this.Bz.Cp(null);this.Bz.CY(A.aaL(
A.ach.VK));}return this.Bz;},Az0:function(G){var Aa=(C.Ai9.isPrototypeOf(G)?G:null
);if(Aa===this.Aa0)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Ad5)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$C);},_Init:function(aArg){C.Fj._Init.call(this,aArg);C.Ai9._Init.call(this.
Aa0={I:this},0);C.Ai9._Init.call(this.Ad5={I:this},0);C.ARc._Init.call(this.Vy={
I:this},0);this.__proto__=C.AQ_;var B;this.H(Rf);this.Text.R(A.aaR(A.acf.ABu));this.
Aa0.H(JS);this.Aa0.T(A.aaR(A.acf.Ajt));this.Ad5.H(P4);this.Ad5.T(A.aaR(A.acf.AFT
));this.Vy.H(ZZ);this.Vy.T(A.aaR(A.acf.A4Z));this.J(this.Aa0,0);this.J(this.Ad5,
0);this.J(this.Vy,0);this.Text.S(A.aaL(A.fl.Ak));this.Aa0.AR=[this,this.Az0];this.
Ad5.AR=[this,this.Az0];this.Vy.ASo([B=A._GetAutoObject(A.Device.Device),B.AD8,B.
AIj]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fj;this.Aa0._Done();this.
Ad5._Done();this.Vy._Done();C.Fj._Done.call(this);},_ReInit:function(){C.Fj._ReInit.
call(this);this.Aa0._ReInit();this.Ad5._ReInit();this.Vy._ReInit();this.Text.R(A.
aaR(A.acf.ABu));this.Aa0.T(A.aaR(A.acf.Ajt));this.Ad5.T(A.aaR(A.acf.AFT));this.Vy.
T(A.aaR(A.acf.A4Z));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fj._Mark.
call(this,D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.AQ9={AnimalTableFields:null,Ay:null,Z:
null,JG:null,CS:function(){this.Aiu(this);},Init:function(aArg){A.zV([this,this.
Aiu],this.AnimalTableFields,0);A.pe([this,this.Aiu],this);},Dz:function(G){C.Fj.
Dz.call(this,G);this.MO(this);},KN:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.Cz=[this,this.Er];this.Bz.Cj=[this,this.A2C];this.Bz.Cf=[this,this.
A27];this.Bz.C5(A.aaL(A.ach.AqN));this.Bz.Cp(A.aaL(A.ach.AqG));this.Bz.CY(A.aaL(
A.ach.VK));}return this.Bz;},Er:function(G){this.AAz();this.Xn(this);},Aiu:function(
G){this.AoI();var P;for(P=0;P<this.AnimalTableFields.NK();P=P+1){var Z9=A._GetAutoObject(
C.Al6).OC(P);this.A0K(Z9);}this.J(this.JG,0);A.aaS([this,this.MO],this);},Fa:function(
G){var B;this.Ay.Ms((B=this.Z.Df(0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);
this.Ay.Mt(-this.Z.Bt[1]);},MO:function(G){var B;this.Z.Vi(null,null);if(!!this.
AW&&((this.AW.U&0x400)===0x400))this.Z.HA(this.AW,true,null,null);},A0K:function(
G3){var AyC=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.R8,0);Aa.T(AyC.BS(G3));Aa.Aj(true);Aa.GW=G3;Aa.A9D(this.AnimalTableFields.NP(G3
));this.J(Aa,0);this.Zl(Aa);},AoI:function(){var B;var X=this.Z.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var Adt=X;X=X.Ah;if(((Adt.U&0x400)===0x400))this.HJ(Adt);}}
,AAz:function(){var B;this.AnimalTableFields.Clear();var X=this.Z.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JG)){var Aa=(C.R8.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.GW);if(Aa.ARZ())this.AnimalTableFields.
AT2(Aa.GW);}else A.ab5("%s",AxV);}X=X.Ah;}this.AnimalTableFields.Cn();},A2C:function(
G){var B;var Aa=(C.R8.isPrototypeOf(B=this.AW)?B:null);if(!!Aa){var AzS=(C.R8.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AzS){this.Ahn(AzS,Aa);A.pe([this,this.MO],this);}}},A27:function(
G){var B;var Aa=(C.R8.isPrototypeOf(B=this.AW)?B:null);if(!!Aa){var AAm=(C.R8.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAm){this.Ahn(Aa,AAm);A.pe([this,this.MO],this);}}},Aql:function(
G){var B;A._GetAutoObject(A.Device.Device).ArX(this);A.pe([this,this.Aiu],this);
},_Init:function(aArg){C.Fj._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Z._Init.call(this.Z={I:this},0);C.AuG._Init.call(this.JG={I:this},0);
this.__proto__=C.AQ9;this.H(Rf);this.Text.R(A.aaR(A.acf.AFT));this.Ay.H(IJ);this.
Z.H(A$8);this.Z.Kg(1);this.JG.H(AHD);this.JG.Aj(true);this.JG.T(A.aaR(A.acf.A5C)
);this.J(this.Ay,0);this.J(this.Z,0);this.J(this.JG,0);this.Z.En=[this,this.Fa];
this.JG.AR=[this,this.Aql];this.AnimalTableFields=A._GetAutoObject(C.Al6);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fj;this.Ay._Done();this.Z._Done();this.
JG._Done();C.Fj._Done.call(this);},_ReInit:function(){C.Fj._ReInit.call(this);this.
Ay._ReInit();this.Z._ReInit();this.JG._ReInit();this.Text.R(A.aaR(A.acf.AFT));this.
JG.T(A.aaR(A.acf.A5C));this.CS();},_Mark:function(D){var B;C.Fj._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.AQ8={Z:null,BY:null,C_:null,CF:null,GH:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UG:null,Init:function(aArg){A.zX([this,this.Auk],this.BY.Q,0);A.zX([
this,this.AMv],this.CF.Q,0);A.zX([this,this.AVh],this.GH.Q,0);A.zX([this,this.Au0
],this.C_.Q,0);this.Bb(this.BY);},Dz:function(G){C.Fj.Dz.call(this,G);this.MO(this
);},KN:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.Cz=[this,this.
Xn];this.Bz.Cj=null;this.Bz.Cf=null;this.Bz.B2(A.jV);this.Bz.Cp(null);this.Bz.CY(
A.aaL(A.ach.VK));}return this.Bz;},Fa:function(G){var B;this.Ay.Ms((B=this.Z.Df(
0x1))[3]-B[1]);this.Ay.Mu((B=this.Z.M)[3]-B[1]);this.Ay.Mt(-this.Z.Bt[1]);},MO:function(
G){var B;this.Z.Vi(null,null);if(!!this.AW&&((this.AW.U&0x400)===0x400))this.Z.HA(
this.AW,true,null,null);},Auk:function(G){var F;A._GetAutoObject(A.Device.Device
).Ew((F=this.BY.Q,F[1].call(F[0])));},AVh:function(G){var F;A._GetAutoObject(A.Device.
Device).Nc((F=this.GH.Q,F[1].call(F[0])));},Au0:function(G){var F;A._GetAutoObject(
A.Device.Device).JJ((F=this.C_.Q,F[1].call(F[0])));},AMv:function(G){var F;A._GetAutoObject(
A.Device.Device).NU((F=this.CF.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fj._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Xz._Init.call(this.BY={
I:this},0);C.Xz._Init.call(this.C_={I:this},0);C.Xz._Init.call(this.CF={I:this},
0);C.Xz._Init.call(this.GH={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UH._Init.call(this.UG={I:this},0);
this.__proto__=C.AQ8;var B;this.H(Rf);this.Text.R(A.aaR(A.acf.Ajt));this.Z.H(A$8
);this.Z.Kg(1);this.BY.H(AhJ);this.BY.Ar(true);this.BY.Aj(true);this.BY.T(A.aaR(
A.acf.Afc));this.C_.H(AxM);this.C_.Ar(true);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.
Ae6));this.CF.H(An7);this.CF.Ar(true);this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed
));this.GH.H(AsD);this.GH.Ar(true);this.GH.Aj(true);this.GH.T(A.aaR(A.acf.I6));this.
Ay.H(IJ);this.AnimalType.As(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
As(A._GetAutoObject(A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.
Device).Breed);this.UG.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Z,0);this.J(this.BY,0);this.J(this.C_,0);this.J(this.CF,0);this.J(this.GH,0
);this.J(this.Ay,0);this.Z.En=[this,this.Fa];this.BY.Wl(A.aaL(A.fl.Hm));this.BY.
Wm(A.aaL(A.fl.Hm));this.BY.As([B=this.AnimalType,B.B$,B.Ca]);this.BY.CJ(this.AnimalType
);this.C_.Wl(A.aaL(A.fl.Hm));this.C_.Wm(A.aaL(A.fl.Hm));this.C_.As([B=this.Gender
,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.CF.Wl(A.aaL(A.fl.Hm));this.CF.Wm(A.aaL(
A.fl.Hm));this.CF.As([B=this.Breed,B.B$,B.Ca]);this.CF.CJ(this.Breed);this.GH.Wl(
A.aaL(A.fl.Hm));this.GH.Wm(A.aaL(A.fl.Hm));this.GH.As([B=this.UG,B.B$,B.Ca]);this.
GH.CJ(this.UG);this.Init(aArg);},_Done:function(){this.__proto__=C.Fj;this.Z._Done(
);this.BY._Done();this.C_._Done();this.CF._Done();this.GH._Done();this.Ay._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.UG._Done();
C.Fj._Done.call(this);},_ReInit:function(){C.Fj._ReInit.call(this);this.Z._ReInit(
);this.BY._ReInit();this.C_._ReInit();this.CF._ReInit();this.GH._ReInit();this.Ay.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
UG._ReInit();this.Text.R(A.aaR(A.acf.Ajt));this.BY.T(A.aaR(A.acf.Afc));this.C_.T(
A.aaR(A.acf.Ae6));this.CF.T(A.aaR(A.acf.Breed));this.GH.T(A.aaR(A.acf.I6));},_Mark:
function(D){var B;C.Fj._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Al_={CD:0,Ak9:A.abi(17,0,null),OC:function(Ht){return this.Ak9.Get(Ht);},NK:
function(){return this.CD;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.Ak9.Set(
P,0);this.CD=0;},J:function(Z3){if(this.CD>=17)A.ab5("%s",Btg);else{this.Ak9.Set(
this.CD,Z3);this.CD=this.CD+1;}},Cn:function(){},EG:function(AhN){var AJt=AhN.indexOf(
String.fromCharCode(0x2C),0);var A09=A.jV;var P=0;this.CD=0;while(P<17)if(AhN===
A.jV)P++;else{if(AJt===-1){A09=AhN;AhN=A.jV;}else{A09=A.abV(AhN,AJt);AhN=A.ab1(AhN
,0,AJt+1);}var Z9=A.abZ(A09,0,10)|0;if(this.BiK(Z9)){this.Ak9.Set(this.CD,Z9);this.
CD=this.CD+1;P++;}AJt=AhN.indexOf(String.fromCharCode(0x2C),0);}if(AhN!==A.jV)A.
ab5("%s",Bth);},toString:function(){var B;var AzQ=A.jV;var P;for(P=0;P<this.CD;P=
P+1){if(P>0)AzQ=AzQ+AHF;AzQ=AzQ+(((B=this.Ak9.Get(P))<0)?B+0x100000000:B).toFixed(
);}return AzQ;},Contains:function(Z3){var P;for(P=0;P<this.CD;P=P+1)if(this.Ak9.
Get(P)===Z3)return true;return false;},BiK:function(Z3){return true;},_Init:function(
aArg){(this.Ak9=[]).__proto__=C.Al_.Ak9;this.__proto__=C.Al_;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.ALA={Afz:null,Init:function(aArg){var B;A.
zX([this,this.BdZ],[B=A._GetAutoObject(A.Device.Device),B.A7X,B.Bao],0);A.zX([this
,this.Bd0],[B=A._GetAutoObject(A.Device.Device),B.A7Y,B.Bap],0);A.pe([this,this.
BdZ],this);A.pe([this,this.Bd0],this);},Clear:function(){C.Al_.Clear.call(this);
this.Afz.Clear();},Cn:function(){A._GetAutoObject(A.Device.Device).Arf(this.Afz.
toString());A._GetAutoObject(A.Device.Device).Arg(this.toString());},BdZ:function(
G){this.Afz.EG(A._GetAutoObject(A.Device.Device).AA7);A.we(this,0);},Bd0:function(
G){this.EG(A._GetAutoObject(A.Device.Device).AA8);A.we(this,0);},NP:function(Z3){
return this.Afz.Contains(Z3);},AT2:function(Z3){if(!this.NP(Z3))this.Afz.J(Z3);}
,AOd:function(){return this.Afz.NK();},_Init:function(aArg){C.Al_._Init.call(this
,aArg);this.__proto__=C.ALA;this.Afz=A._NewObject(C.Al_,0);this.Init(aArg);},_Mark:
function(D){var B;C.Al_._Mark.call(this,D);if((B=this.Afz)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.Al6={_Init:
function(){C.ALA._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.ARc={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.
V.Text.A7(0x11);this.V.Text.Hq(10);},Bj:function(aSize){C.T5.Bj.call(this,aSize);
this.V.H(A.abN(this.V.M,this.Mh.M[0]));},Ai:function(Ae){var B;C.T5.Ai.call(this
,Ae);var G8=((Ae&0x10)===0x10);var Fn=((Ae&0x20)===0x20);var Gw=this.Bo.By;var FJ=
A.jb.AdS;var GL=A.jb.Bm;if(this.Hc){FJ=A.jb.Bm;GL=A.jb.Text;}if(!G8){this.Background.
L(FJ);this.V.L(A.jb.CI);}else if(Gw){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm
);}else if(Fn){this.Background.L(A.jb.AW);this.V.L(A.jb.Bm);}else{this.Background.
L(FJ);this.V.L(GL);}this.LD=G8;this.KA=Fn;this.Qk=Gw;},_Init:function(aArg){C.T5.
_Init.call(this,aArg);this.__proto__=C.ARc;this.Init(aArg);},_className:"Application::MenuItemCheckBoxOverlay"
};C.ATu={Yu:null,Ajy:null,KN:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);
this.Bz.Cz=[this,this.Xn];this.Bz.Cj=null;this.Bz.Cf=null;this.Bz.B2(A.jV);this.
Bz.Cp(null);this.Bz.CY(A.aaL(A.ach.VK));}return this.Bz;},_Init:function(aArg){C.
OverlayMenu._Init.call(this,aArg);C.Xz._Init.call(this.Yu={I:this},0);C.Vz._Init.
call(this.Ajy={I:this},0);this.__proto__=C.ATu;var B;this.H(JR);this.Yu.H(JR);this.
Yu.T(A.aaR(A.acf.A5o));this.Ajy.As(A._GetAutoObject(A.Device.Device).Vz);this.J(
this.Yu,0);this.Yu.Wl(A.aaL(A.fl.Hm));this.Yu.Wm(A.aaL(A.fl.Hm));this.Yu.As([B=this.
Ajy,B.B$,B.Ca]);this.Yu.CJ(this.Ajy);this.Ajy.Blf([B=A._GetAutoObject(A.Device.Device
),B.ART,B.AZE]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yu._Done();
this.Ajy._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yu._ReInit();this.Ajy._ReInit();this.Yu.T(A.aaR(A.acf.A5o
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PurchasedAnimalsListOverlayMenu"};C.Vz={AaW:null,DataExportDestinationToString:
null,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BS(aIndex);},DO:function(A6){return A6;},Hn:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AaW)(F=this.AaW
,F[2].call(F[0],E));},Blf:function(E){if(A.aaZ(this.AaW,E))return;if(!!this.AaW)
A.z$([this,this.Apu],this.AaW,0);this.AaW=E;if(!!this.AaW)A.zX([this,this.Apu],this.
AaW,0);A.pe([this,this.Apu],this);},Apu:function(G){var F;if(!!this.AaW)this.Q=(
F=this.AaW,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.Vz;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AaW)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMp={
YB:null,AkP:null,KN:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.
Cz=[this,this.Xn];this.Bz.Cj=null;this.Bz.Cf=null;this.Bz.B2(A.jV);this.Bz.Cp(null
);this.Bz.CY(A.aaL(A.ach.VK));}return this.Bz;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Xz._Init.call(this.YB={I:this},0);C.ADD._Init.call(this.
AkP={I:this},0);this.__proto__=C.AMp;var B;this.H(JR);this.YB.H(JR);this.YB.T(A.
aaR(A.acf.Display));this.AkP.As(A._GetAutoObject(A.Device.Device).Ap6);this.J(this.
YB,0);this.YB.Wl(A.aaL(A.fl.Hm));this.YB.Wm(A.aaL(A.fl.Hm));this.YB.As([B=this.AkP
,B.B$,B.Ca]);this.YB.CJ(this.AkP);this.AkP.Bmj([B=A._GetAutoObject(A.Device.Device
),B.AD4,B.AIg]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YB._Done();
this.AkP._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YB._ReInit();this.AkP._ReInit();this.YB.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AkP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.ADD={Aby:null,ListViewScopeToString:
null,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BS(aIndex);},DO:function(A6){return A6;},Hn:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Aby)(F=this.Aby,F[2].call(
F[0],E));},Bmj:function(E){if(A.aaZ(this.Aby,E))return;if(!!this.Aby)A.z$([this,
this.Apu],this.Aby,0);this.Aby=E;if(!!this.Aby)A.zX([this,this.Apu],this.Aby,0);
A.pe([this,this.Apu],this);},Apu:function(G){var F;if(!!this.Aby)this.Q=(F=this.
Aby,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.ADD;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aby)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AUE={ABH:0,ABG:0,Ai:function(Ae){C.OT.Ai.call(this
,Ae);this.Background.L(this.ABG);this.V.L(this.ABH);},Bk6:function(E){if(this.ABH===
E)return;this.ABH=E;this.An();},Bk5:function(E){if(this.ABG===E)return;this.ABG=
E;this.An();},_Init:function(aArg){C.OT._Init.call(this,aArg);this.__proto__=C.AUE;
this.Ar(false);this.ABH=A.jb.Text;this.ABG=A.jb.CI;},_className:"Application::TextCaptionItem"
};C.AGQ={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.Bdt],[B=A._GetAutoObject(A.Device.Device),B.A8u,B.BaH],0);A.pe([this,this.Bdt
],this);},Dr:function(){return 3;},Gb:function(aIndex){return this.WeightValuePrecisionToString.
BS(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.
Device).Awo(E);},Bdt:function(G){this.Q=A._GetAutoObject(A.Device.Device).OJ;A.abo([
this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AGQ;this.Cq.Set(0,0);this.Cq.Set(1,1);this.Cq.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.CQ;this.WeightValuePrecisionToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.AT8={Uu:null,A_5:A.jV,Init:function(
aArg){},Bj:function(aSize){C.BZ.Bj.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Uu.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BZ.Ai.call(this,Ae);this.Uu.L(this.V.AQ);},BmM:function(E){if(this.A_5===E
)return;this.A_5=E;this.Uu.R(E);},_Init:function(aArg){C.BZ._Init.call(this,aArg
);C.CG._Init.call(this.Uu={I:this},0);this.__proto__=C.AT8;this.H(Acy);this.Uu.H(
Bti);this.J(this.Uu,0);this.Uu.S(A.aaL(A.fl.Af));this.Uu.A2(A.aaL(A.fl.Ak));this.
Uu.Cs(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BZ;this.Uu._Done(
);C.BZ._Done.call(this);},_ReInit:function(){C.BZ._ReInit.call(this);this.Uu._ReInit(
);this.Uu.S(A.aaL(A.fl.Af));this.Uu.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BZ._Mark.call(this,D);if((B=this.Uu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.YR={MassDeregistrationCriterionToString:
null,Dr:function(){return 2;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BS(this.C7(aIndex));},_Init:function(
aArg){C.CQ._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.YR;this.
Cq.Set(0,0);this.Cq.Set(1,1);},_Done:function(){this.__proto__=C.CQ;this.MassDeregistrationCriterionToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANh={U7:null
,YR:null,YT:null,Mo:null,AtG:0,Init:function(aArg){this.Bb(this.YT);},Ai:function(
Ae){C.Ee.Ai.call(this,Ae);var BA_=((A.aaR(A.acf.Aqb)+A.aaR(A.acf.Colon))+CO)+this.
AtG.toFixed();this.Mo.BmM(BA_);},CA:function(G){C.Ee.CA.call(this,G);A.zX([this,
this.AKU],this.Mo.Q,0);A.pe([this,this.AKU],this);},EX:function(G){C.Ee.EX.call(
this,G);A.z$([this,this.AKU],this.Mo.Q,0);},DG:function(G){C.Ee.DG.call(this,G);
if((this.AW===this.Mo)&&!this.AtG)this.N.HM.Do(100);else this.N.HM.Do(255);},Bed:
function(G){if(this.AtG>0)A._GetAutoObject(A.Device.Device).A_(108,true,this.AtG.
toFixed(),0,[this,this.Bzo]);},AKU:function(G){var F;this.AtG=A._GetAutoObject(A.
Device.Helper).Bh8((F=this.Mo.Q,F[1].call(F[0])));this.An();A.pe([this,this.MF],
this);},Bd9:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){A._GetAutoObject(
A.Device.Device).A_(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).AqR()===false){this.U7=[this,this.Bd9];A.zX([this,this.Xp],[B=A._GetAutoObject(
A.Device.Device),B.Wh,B.W2],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV
,0,[this,this.AfZ]);return;}var AfL=A._GetAutoObject(A.Device.Device).AnD(1);if(
AfL.AnI)A._GetAutoObject(A.Device.Device).Aqf(AfL);else A._GetAutoObject(A.Device.
Device).A_(88,true,A.jV,0,null);},AfZ:function(G){var B;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===5)){A.z$([this,this.Xp],[B=A.
_GetAutoObject(A.Device.Device),B.Wh,B.W2],0);this.U7=null;}},Xp:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AhC===3){A._GetAutoObject(A.Device.Device
).A_(74,false,A.jV,0,[this,this.AfZ]);A.z$([this,this.Xp],[B=A._GetAutoObject(A.
Device.Device),B.Wh,B.W2],0);if(!!this.U7)A.pe(this.U7,this);this.U7=null;}},Bzo:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===7))A.pe([this,this.BA5],this);},BA5:function(G){A._GetAutoObject(A.
Device.Helper).Bxm(this.YR.Q);A._GetAutoObject(A.Device.Device).A_(109,true,this.
AtG.toFixed(),0,null);A.pe([this,this.MF],this);A.pe([this,this.AKU],this);},_Init:
function(aArg){C.Ee._Init.call(this,aArg);C.YR._Init.call(this.YR={I:this},0);C.
Cl._Init.call(this.YT={I:this},0);C.AT8._Init.call(this.Mo={I:this},0);this.__proto__=
C.ANh;var B;this.Dn(C.AOy);this.YT.H(JS);this.YT.Aj(true);this.YT.T(A.aaR(A.acf.
A52));this.YT.Bi(false);this.Mo.H(Btj);this.Mo.Aj(true);this.Mo.T(A.aaR(A.acf.A$j
));this.Mo.Bi(true);this.Mo.A95(A.aaR(A.acf.Ok));this.J(this.YT,0);this.J(this.Mo
,0);this.YT.AR=[this,this.Bd9];this.Mo.AR=[this,this.Bed];this.Mo.AeB([this,this.
Bed]);this.Mo.As([B=this.YR,B.B$,B.Ca]);this.Mo.CJ(this.YR);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ee;this.YR._Done();this.YT._Done();this.Mo._Done();C.
Ee._Done.call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.YR._ReInit(
);this.YT._ReInit();this.Mo._ReInit();this.YT.T(A.aaR(A.acf.A52));this.Mo.T(A.aaR(
A.acf.A$j));this.Mo.A95(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ee._Mark.call(
this,D);if((B=this.U7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.YR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOy={_Init:function(aArg){C.KK._Init.call(this,aArg);this.__proto__=C.AOy;this.
Text.R(A.aaR(A.acf.XB));},_ReInit:function(){C.KK._ReInit.call(this);this.Text.R(
A.aaR(A.acf.XB));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANk={
U7:null,YS:null,AbC:null,Init:function(aArg){this.Bb(this.YS);A.pe([this,this.MF
],this);},Bd8:function(G){var B;var Azz=A._GetAutoObject(A.Device.Device).ADp();
switch(Azz){case 1:A._GetAutoObject(A.Device.Device).A_(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A_(91,true,UO,0,[this,this.Beq]);break;
case 2:{this.U7=[this,this.Bd8];A.zX([this,this.Xp],[B=A._GetAutoObject(A.Device.
Device),B.Wh,B.W2],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV,0,[this,
this.AfZ]);}break;default:throw new Error(A$9+Azz.toFixed());}},AfZ:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.Xp],[B=A._GetAutoObject(A.Device.Device),B.Wh,B.W2],0);this.
U7=null;}},Xp:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhC===3){A.
_GetAutoObject(A.Device.Device).A_(74,false,A.jV,0,[this,this.AfZ]);A.z$([this,this.
Xp],[B=A._GetAutoObject(A.Device.Device),B.Wh,B.W2],0);if(!!this.U7)A.pe(this.U7
,this);this.U7=null;}},Bes:function(G){var B;var Azz=A._GetAutoObject(A.Device.Device
).ADq();switch(Azz){case 1:A._GetAutoObject(A.Device.Device).A_(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A_(95,true,A.jV,0,[this,this.Bzp
]);break;case 2:{this.U7=[this,this.Bes];A.zX([this,this.Xp],[B=A._GetAutoObject(
A.Device.Device),B.Wh,B.W2],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV
,0,[this,this.AfZ]);}break;case 3:A._GetAutoObject(A.Device.Device).A_(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A_(93,true,A.jV,0,null
);break;default:throw new Error(A$9+Azz.toFixed());}},Beq:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.Bx1],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
Bx3],this);break;default:throw new Error(Btk+At.Id.toFixed());}},Bx1:function(G){
if(A._GetAutoObject(A.Device.Device).ABQ()){var A2n=A._GetAutoObject(A.Device.Device
).Ao.QB();A._GetAutoObject(A.Device.Device).A_(80,true,A2n.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A_(82,true,A.jV,0,null);A.aaS([this,this.Bzk],
this);},Bx3:function(G){if(A._GetAutoObject(A.Device.Device).AFY()){var A2n=A._GetAutoObject(
A.Device.Device).Ao.QB();A._GetAutoObject(A.Device.Device).A_(81,true,A2n.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A_(83,true,A.jV,0,null);A.aaS([
this,this.BzZ],this);},Bzp:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BA6],this);},BA6:function(
G){A._GetAutoObject(A.Device.Device).A_(92,true,UO,0,[this,this.Beq]);},BzZ:function(
G){A._GetAutoObject(A.Device.Device).A_(92,false,A.jV,0,null);},Bzk:function(G){
A._GetAutoObject(A.Device.Device).A_(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ee._Init.call(this,aArg);C.Cl._Init.call(this.YS={I:this},0);C.Cl._Init.call(
this.AbC={I:this},0);this.__proto__=C.ANk;this.Dn(C.AOB);this.YS.H(JS);this.YS.Aj(
true);this.YS.T(A.aaR(A.acf.ABQ));this.YS.Bi(false);this.AbC.H(P4);this.AbC.Aj(true
);this.AbC.T(A.aaR(A.acf.AFY));this.AbC.Bi(true);this.J(this.YS,-1);this.J(this.
AbC,-1);this.YS.AR=[this,this.Bd8];this.AbC.AR=[this,this.Bes];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ee;this.YS._Done();this.AbC._Done();C.Ee._Done.
call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.YS._ReInit();this.AbC.
_ReInit();this.YS.T(A.aaR(A.acf.ABQ));this.AbC.T(A.aaR(A.acf.AFY));},_Mark:function(
D){var B;C.Ee._Mark.call(this,D);if((B=this.U7)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOB={
_Init:function(aArg){C.KK._Init.call(this,aArg);this.__proto__=C.AOB;this.Text.R(
A.aaR(A.acf.ABW));},_ReInit:function(){C.KK._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ABW));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.RD={NR:null
,ATB:0,ADs:false,ADo:false,ADt:false,AlF:function(G){this.A5G(this);},ASF:function(
E){if(this.NR===E)return;this.NR=E;if(!this.NR)return;this.DL.AutoActions=E;A.zV([
this,this.BAQ],this.NR,0);},ALB:function(){this.ALE(A.aaR(A.acf.A$r),[this,this.
BBk],[this,this.A8o,this.AEO]);this.ALE(A.aaR(A.acf.AFN),[this,this.BBi],[this,this.
A8l,this.AEM]);this.ALE(A.aaR(A.acf.AnJ),[this,this.BBj],[this,this.A8m,this.AEN
]);A._GetAutoObject(C.BN).Fz();A._GetAutoObject(C.BN).Nx(A.aaR(A.acf.Bgh)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BN).Fz();},ALE:function(BvR,Bw1,Bwj){if(!this.NR
)return;this.ALD(BvR,Bw1,Bwj);},BBk:function(G){this.AEO(!this.ADt);},BBi:function(
G){this.AEM(!this.ADo);},BBj:function(G){this.AEN(!this.ADs);},A3C:function(Ey,Bwi
){if(!this.NR)return;if(Bwi)this.NR.Bge(Ey);else this.NR.Bnw(Ey);this.NR.Cn();},
A4j:function(AcQ,AcR,Bxh){A._GetAutoObject(C.BN).Auc(AcQ,AcR,[this,this.A8F,this.
ASS],Bxh);},AF9:function(Ey){if(!this.NR)return;this.NR.AF9(Ey);this.NR.Cn();},AEO:
function(E){if(this.ADt===E)return;this.ADt=E;this.A3C(256,E);A.abo([this,this.A8o
,this.AEO],0);},AEM:function(E){if(this.ADo===E)return;this.ADo=E;this.A3C(2,E);
A.abo([this,this.A8l,this.AEM],0);},AEN:function(E){if(this.ADs===E)return;this.
ADs=E;this.A3C(1,E);A.abo([this,this.A8m,this.AEN],0);},BAQ:function(G){this.AEO(
this.NR.Contains(256));this.AEM(this.NR.Contains(2));this.AEN(this.NR.Contains(1
));if(this.NR.NK()>0)this.ASS(this.NR.OC(this.NR.NK()-1));},ASS:function(E){if(this.
ATB===E)return;this.ATB=E;A.abo([this,this.A8F,this.ASS],0);},A8o:function(){return this.
ADt;},A8l:function(){return this.ADo;},A8m:function(){return this.ADs;},A8F:function(
){return this.ATB;},_Init:function(aArg){C.GP._Init.call(this,aArg);this.__proto__=
C.RD;},_Mark:function(D){var B;C.GP._Mark.call(this,D);if((B=this.NR)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Avv={Q:null,Cn:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADm:
function(Ey){switch(Ey){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},J5:function(G){var F;if(!!this.Q)this.EG((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.J5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.J5],E,
0);if(!!E)A.pe([this,this.J5],this);},AF9:function(Ey){if(this.NK()>0)this.Aw2(this.
NK()-1,Ey);},Bge:function(Ey){if(this.Contains(Ey))return;if(this.CD>=17){A.ab5(
"%s",AHE);return;}var Azs=0;for(;(Azs<=this.NK())&&(this.OC(Azs)<Ey);Azs++);var AAE=
this.NK()-1;this.J(this.OC(AAE));for(;AAE>Azs;AAE--)this.Aw2(AAE,this.OC(AAE-1));
this.Aw2(Azs,Ey);},Bnw:function(Ey){var index=this.DO(Ey);if(index<0)return;for(;
index<(this.NK()-1);index++)this.Aw2(index,this.OC(index+1));this.Aw2(index,0);this.
CD--;},_Init:function(aArg){C.Vh._Init.call(this,aArg);this.__proto__=C.Avv;},_Mark:
function(D){var B;C.Vh._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.AvC={_Init:
function(){C.Avv._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8y,B.BaL]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.AvD={_Init:function(){C.Avv._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8z,B.BaM]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Axw={_Init:function(){C.Avv._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A87,B.Ba0]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ACU={QL:null,AjK:null,_Init:function(aArg
){C.Da._Init.call(this,aArg);C.CG._Init.call(this.QL={I:this},0);A.acg.Am._Init.
call(this.AjK={I:this},0);this.__proto__=C.ACU;this.Em.H(Btl);this.DQ.H(Btm);this.
QL.H(Btn);this.QL.R(A.aaR(A.acf.T$));this.QL.A7(0x11);this.QL.L(A.jb.Text);this.
AjK.H(AZw);this.AjK.L(A.jb.Text);this.J(this.QL,0);this.J(this.AjK,0);this.QL.S(
A.aaL(A.fl.Af));this.QL.A2(A.aaL(A.fl.Ak));this.QL.Cs(A.aaL(A.fl.Bk));this.AjK.Ax(
A.aaL(A.ach.Au_));},_Done:function(){this.__proto__=C.Da;this.QL._Done();this.AjK.
_Done();C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.
QL._ReInit();this.AjK._ReInit();this.QL.R(A.aaR(A.acf.T$));this.QL.S(A.aaL(A.fl.
Af));this.QL.A2(A.aaL(A.fl.Ak));this.QL.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var
B;C.Da._Mark.call(this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.ABz={AP:null,SK:null,OU:null,AJ0:A.jV,BdC:A.jV,Ma:0,Init:function(aArg){},Bj:
function(aSize){C.Ba.Bj.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OU.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OU.M[2]-1,0,this.OU.M[2]+1,
aSize[1]]);this.SK.H([this.OU.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OU.L(this.V.AQ);this.SK.L(this.V.AQ);this.T(this.AJ0);this.
OU.R(this.BdC);this.SK.R(this.Ma.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hj=Ad;if(!!this.AX){var Kz=this.AX.KJ(Ad,26);var A2f=A._GetAutoObject(A.Device.
Converter).Ra(Kz);this.AJ0=A.abV(A2f,A2f.length-5);this.BdC=A.ab2(A2f,5);if((A._GetAutoObject(
A.Device.Converter).ZG(Kz)===10)&&!(Math.trunc(Kz/10000000000)%100))this.AJ0=A.ab1(
this.AJ0,3,2);this.Ma=this.AX.CE(Ad,1);this.An();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.SK={
I:this},0);C.CG._Init.call(this.OU={I:this},0);this.__proto__=C.ABz;this.V.H(Bto
);this.AP.H(AZz);this.AP.L(A.jb.Bc);this.SK.H(AZA);this.OU.H(Btp);this.J(this.AP
,0);this.J(this.SK,0);this.J(this.OU,0);this.V.S(A.aaL(A.fl.Bk));this.V.A2(A.aaL(
A.fl.Bk));this.SK.S(A.aaL(A.fl.Ak));this.SK.A2(A.aaL(A.fl.Bk));this.SK.Cs(A.aaL(
A.fl.Bk));this.OU.S(A.aaL(A.fl.Af));this.OU.A2(A.aaL(A.fl.Bk));this.OU.Cs(A.aaL(
A.fl.Bk));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SK._Done();this.OU._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SK._ReInit();this.OU._ReInit();this.V.
S(A.aaL(A.fl.Bk));this.V.A2(A.aaL(A.fl.Bk));this.SK.S(A.aaL(A.fl.Ak));this.SK.A2(
A.aaL(A.fl.Bk));this.SK.Cs(A.aaL(A.fl.Bk));this.OU.S(A.aaL(A.fl.Af));this.OU.A2(
A.aaL(A.fl.Bk));this.OU.Cs(A.aaL(A.fl.Bk));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.AO3={Q:null,Init:function(aArg){var
B;this.AAu(this);this.As([B=A._GetAutoObject(A.Device.Device).Ao,B.Fg,B.Fk]);},AEe:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fc();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DN(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var AiR=this.AvO();if((AiR.length>0)&&(AiR!==UO)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,AiR,0,6,false);Filter.CV(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AV.AeE(false);},AAu:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fc(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DN(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this
,this.C3],this);},C3:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AV.ASy(A.jV);return;}var Bbt=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DN(26,4))?B:null);if(!Bbt){this.AV.ASy(UO);this.AV.
AeE(true);}else this.AV.ASy(Bbt.A5);},_Init:function(aArg){C.AjG._Init.call(this
,aArg);this.__proto__=C.AO3;this.AV.Awg(0);this.AV.Bl7(true);this.AV.Dk=[this,this.
AEe];this.Init(aArg);},_Mark:function(D){var B;C.AjG._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};
C._Init=function(){C.AMc.__proto__=A.Core.Root;C.AB.__proto__=C.Aa2;C.Wt.__proto__=
A.Core.O;C.Ox.__proto__=A.Core.O;C.Zh.__proto__=A.acl.Gc;C.Ef.__proto__=A.Core.O;
C.XN.__proto__=C.AB;C.AUj.__proto__=C.AB;C.Au8.__proto__=C.AB;C.Q4.__proto__=C.AB;
C.Ff.__proto__=C.G$;C.Ay.__proto__=A.Core.O;C.Ct.__proto__=C.AB;C.AqB.__proto__=
C.BR;C.BR.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.ACM.__proto__=C.AmG;C.AGp.
__proto__=C.DP;C.Cl.__proto__=C.OT;C.Dp.__proto__=C.Ec;C.I1.__proto__=C.Dp;C.BZ.
__proto__=C.Dp;C.SE.__proto__=C.Dp;C.OH.__proto__=C.CQ;C.Q9.__proto__=C.AC;C.AUy.
__proto__=C.Ba;C.FW.__proto__=A.Core.O;C.Ba.__proto__=C.Cl;C.GP.__proto__=C.AB;C.
ABy.__proto__=C.Ba;C.AdQ.__proto__=C.AB;C.Mg.__proto__=C.Ox;C.AUt.__proto__=C.AB;
C.AqA.__proto__=C.ACM;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AT$.__proto__=C.Ab$;C.Ev.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.Ar1.__proto__=A.Core.O;C.AGb.__proto__=C.Dp;C.CG.__proto__=A.Core.O;C.
AjF.__proto__=C.Yf;C.Al9.__proto__=C.Q8;C.Ahk.__proto__=A.Core.O;C.Ee.__proto__=
C.AB;C.ATk.__proto__=C.AB;C.Mj.__proto__=C.Cl;C.Am2.__proto__=C.Cl;C.OverlayMenu.
__proto__=C.Aa2;C.APh.__proto__=C.OverlayMenu;C.GC.__proto__=A.Core.O;C.Aa2.__proto__=
A.Core.O;C.AUe.__proto__=A.acl.Ad3;C.AmG.__proto__=C.BR;C.ACN.__proto__=C.AmG;C.
J_.__proto__=C.AC;C.AUb.__proto__=C.Dp;C.AFO.__proto__=C.AB;C.HU.__proto__=C.AB;
C.Wc.__proto__=C.Aq3;C.IA.__proto__=C.ACN;C.IS.__proto__=C.AB;C.ALM.__proto__=C.
AFO;C.ALI.__proto__=C.GP;C.AM2.__proto__=C.GP;C.Ad7.__proto__=C.Cl;C.Qv.__proto__=
C.Ad7;C.AO6.__proto__=C.BR;C.AjG.__proto__=C.BR;C.DB.__proto__=C.E1;C.AV.__proto__=
A.Core.O;C.FX.__proto__=C.AC;C.Ae5.__proto__=C.BZ;C.ATC.__proto__=C.AB;C.AbD.__proto__=
C.Cl;C.T5.__proto__=C.Cl;C.ANa.__proto__=C.Ct;C.AUA.__proto__=C.Ct;C.ANo.__proto__=
C.Ct;C.ATO.__proto__=C.Ct;C.WI.__proto__=A.Core.O;C.QO.__proto__=C.Ff;C.CT.__proto__=
A.Core.O;C.T1.__proto__=C.AB;C.AU8.__proto__=C.GP;C.ALN.__proto__=C.Axu;C.AUT.__proto__=
C.Ct;C.Aet.__proto__=C.AC;C.Axu.__proto__=C.AB;C.AVf.__proto__=C.Ct;C.AUa.__proto__=
C.Ab$;C.AA5.__proto__=A.Graphics.Hs;C.Ai8.__proto__=C.AB;C.AQ5.__proto__=A.Core.
O;C.Fj.__proto__=C.OverlayMenu;C.Xz.__proto__=C.BZ;C.Ai9.__proto__=C.Cl;C.ALs.__proto__=
C.Fj;C.CQ.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.ALy.__proto__=C.Vh;C.ALz.
__proto__=C.Fj;C.R8.__proto__=C.T5;C.AMh.__proto__=C.Vh;C.V6.__proto__=C.Ff;C.Vf.
__proto__=A.Core.O;C.Km.__proto__=A.Core.O;C.ARr.__proto__=C.HU;C.ATF.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.CQ;C.AM3.__proto__=C.Al9;C.G$.__proto__=A.
Core.O;C.AU_.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.CQ;C.AaK.
__proto__=C.FX;C.Axm.__proto__=C.AA5;C.ATf.__proto__=C.OverlayMenu;C.AN8.__proto__=
A.Core.O;C.N0.__proto__=A.Core.O;C.ATg.__proto__=A.Core.O;C.AUd.__proto__=A.acl.
Ad3;C.AkC.__proto__=C.I1;C.Ama.__proto__=C.OverlayMenu;C.ABB.__proto__=C.Ba;C.Yg.
__proto__=C.AjG;C.Aqk.__proto__=C.HU;C.Ab_.__proto__=C.Dp;C.WeightRecordingScope.
__proto__=C.AC;C.Auh.__proto__=C.AB;C.AUc.__proto__=C.I1;C.ALK.__proto__=C.AB;C.
Aq3.__proto__=C.HU;C.AGL.__proto__=A.Core.O;C.AVb.__proto__=A.Core.O;C.Ec.__proto__=
C.Cl;C.Aev.__proto__=C.Ec;C.Avx.__proto__=C.Aev;C.SetTransponderScreen.__proto__=
C.Q4;C.ACV.__proto__=C.Ev;C.AGP.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mb.__proto__=C.Q4;C.ALq.__proto__=C.Mb;C.ManualActionScanScreen.__proto__=C.Mb;
C.ALr.__proto__=A.Core.O;C.AO_.__proto__=C.Da;C.ACT.__proto__=C.Da;C.TO.__proto__=
C.Da;C.APa.__proto__=C.Da;C.AMH.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AMF.__proto__=
C.Ba;C.Jf.__proto__=A.Core.O;C.AME.__proto__=C.Ba;C.AmF.__proto__=C.Ty;C.AFE.__proto__=
C.AwS;C.Akq.__proto__=C.AwS;C.Zg.__proto__=C.Akq;C.AM9.__proto__=C.OT;C.OT.__proto__=
C.G$;C.APd.__proto__=C.Ev;C.DQ.__proto__=A.Core.O;C.AMB.__proto__=C.Ajo;C.ACP.__proto__=
C.TP;C.J9.__proto__=A.Core.O;C.Amn.__proto__=C.Mj;C.AOv.__proto__=C.Kc;C.AutoRegistrationMode.
__proto__=C.AC;C.APe.__proto__=C.Ev;C.Ts.__proto__=C.AB;C.D5.__proto__=A.Core.O;
C.ALY.__proto__=C.RP;C.AMa.__proto__=C.AaG;C.AL7.__proto__=C.AaG;C.ATE.__proto__=
C.Ba;C.APc.__proto__=C.Ev;C.AL1.__proto__=C.AaG;C.Iv.__proto__=C.IR;C.RJ.__proto__=
C.Fq;C.RN.__proto__=C.Fq;C.Tr.__proto__=C.Jz;C.Qu.__proto__=C.Fq;C.Tq.__proto__=
C.Jz;C.ALJ.__proto__=C.Ai8;C.GB.__proto__=C.Ai8;C.AQt.__proto__=C.Ct;C.AaG.__proto__=
C.D5;C.JA.__proto__=C.CQ;C.AQ1.__proto__=C.Ct;C.ALW.__proto__=C.K7;C.ALX.__proto__=
C.D5;C.ALU.__proto__=C.K7;C.ALV.__proto__=C.K7;C.Wv.__proto__=C.Ec;C.AT9.__proto__=
C.Wv;C.RO.__proto__=C.Fq;C.AO5.__proto__=C.IA;C.AM4.__proto__=C.AB;C.AML.__proto__=
C.AdQ;C.ALH.__proto__=C.IS;C.AU7.__proto__=C.IS;C.AM1.__proto__=C.GB;C.AU6.__proto__=
C.GB;C.ALG.__proto__=C.GB;C.AOx.__proto__=C.Kc;C.AO7.__proto__=C.Kc;C.AO$.__proto__=
C.TP;C.AMG.__proto__=C.Ajo;C.TP.__proto__=C.Da;C.Ap9.__proto__=A.acu.ABL;C.Ajo.__proto__=
C.Ba;C.DP.__proto__=A.Core.O;C.AMs.__proto__=C.DP;C.OY.__proto__=C.DP;C.Aqy.__proto__=
A.Core.O;C.AL3.__proto__=C.FW;C.ATI.__proto__=A.Core.O;C.K7.__proto__=C.D5;C.AM_.
__proto__=C.Ct;C.AuG.__proto__=C.Cl;C.ACJ.__proto__=C.BR;C.ACK.__proto__=C.BR;C.
Fq.__proto__=C.Jz;C.AOa.__proto__=C.GP;C.AN$.__proto__=C.IS;C.AN_.__proto__=C.GB;
C.AOL.__proto__=C.Kc;C.ACR.__proto__=C.Da;C.ABx.__proto__=C.Ba;C.ATD.__proto__=C.
Ahk;C.FactoryResetScope.__proto__=C.CQ;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;
C.ARD.__proto__=C.RD;C.ARC.__proto__=C.IS;C.ARB.__proto__=C.GB;C.ACL.__proto__=C.
Kc;C.ABe.__proto__=C.FX;C.ALw.__proto__=C.Fj;C.ALL.__proto__=C.Auh;C.NewAnimalSetTransponderScreen.
__proto__=C.Ar6;C.C6.__proto__=C.AC;C.OX.__proto__=A.Core.O;C.RK.__proto__=C.Fq;
C.RL.__proto__=C.Fq;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARa.
__proto__=C.OverlayMenu;C.Vy.__proto__=C.T5;C.ADK.__proto__=C.Cl;C.AnimalSingleInfoScreen.
__proto__=C.Ts;C.AnimalMultiInfoScreen.__proto__=C.Ts;C.AL0.__proto__=C.OverlayMenu;
C.MultiInfoActionsScreen.__proto__=C.GB;C.IX.__proto__=A.Core.O;C.ALv.__proto__=
C.GP;C.ALu.__proto__=C.IS;C.ALt.__proto__=C.GB;C.AO4.__proto__=C.IA;C.Ase.__proto__=
C.OX;C.AqM.__proto__=C.OX;C.AuC.__proto__=C.AC;C.ALS.__proto__=C.AC;C.AGa.__proto__=
C.Ec;C.GU.__proto__=A.Core.O;C.AQw.__proto__=C.HD;C.AUY.__proto__=C.XN;C.ARn.__proto__=
C.Wc;C.ADi.__proto__=C.Le;C.HD.__proto__=C.GU;C.Le.__proto__=C.GU;C.EartagNrAssignmentMode.
__proto__=C.AC;C.Avp.__proto__=C.HD;C.AT7.__proto__=C.BZ;C.NewAnimalsSetTransponderScreen.
__proto__=C.Ar6;C.ReasonOfLeaving.__proto__=C.AC;C.OQ.__proto__=C.BZ;C.Aey.__proto__=
C.Eg;C.ARg.__proto__=C.Eg;C.ARf.__proto__=C.Eg;C.Eg.__proto__=A.Core.O;C.Q5.__proto__=
C.Ec;C.AQx.__proto__=C.Le;C.Avo.__proto__=A.Core.O;C.E1.__proto__=A.Core.O;C.Fs.
__proto__=C.AB;C.ANJ.__proto__=C.AB;C.ANM.__proto__=C.Fs;C.ANN.__proto__=C.Fs;C.
Aqn.__proto__=C.Fs;C.Abc.__proto__=C.AjF;C.Kc.__proto__=C.AjF;C.Au6.__proto__=C.
Abc;C.AOJ.__proto__=C.Abc;C.AOI.__proto__=C.Abc;C.AOH.__proto__=C.BR;C.Aec.__proto__=
C.Ev;C.Amv.__proto__=C.Ba;C.Aje.__proto__=C.Iv;C.ACb.__proto__=A.Core.O;C.Akz.__proto__=
A.Core.O;C.Q8.__proto__=C.AB;C.AUz.__proto__=C.Q8;C.AOK.__proto__=C.BR;C.Da.__proto__=
C.Ev;C.KK.__proto__=C.BR;C.AOD.__proto__=C.KK;C.AOF.__proto__=C.KK;C.Ya.__proto__=
C.Amv;C.Agg.__proto__=C.G$;C.ANw.__proto__=C.GP;C.ANv.__proto__=C.IS;C.ANu.__proto__=
C.GB;C.AOG.__proto__=C.Kc;C.Aa9.__proto__=C.Ab_;C.Ajw.__proto__=C.Qv;C.ABr.__proto__=
C.Qv;C.AO9.__proto__=C.Da;C.AMD.__proto__=C.Ba;C.RM.__proto__=C.Fq;C.ALT.__proto__=
C.Fq;C.ANm.__proto__=C.Ee;C.ANn.__proto__=C.Ee;C.AOE.__proto__=C.KK;C.NT.__proto__=
C.AbD;C.ANi.__proto__=C.Ee;C.AOz.__proto__=C.KK;C.PJ.__proto__=C.Cl;C.R9.__proto__=
C.AB;C.ANK.__proto__=C.R9;C.ANL.__proto__=C.R9;C.ANO.__proto__=C.Aqn;C.ANH.__proto__=
C.Fs;C.AaF.__proto__=C.Iv;C.Ph.__proto__=C.Iv;C.AL5.__proto__=C.Ama;C.AQZ.__proto__=
C.T1;C.AQY.__proto__=C.T1;C.ARy.__proto__=C.RD;C.ARx.__proto__=C.IS;C.ARw.__proto__=
C.GB;C.AOY.__proto__=C.Kc;C.Q1.__proto__=C.GP;C.ATQ.__proto__=C.IS;C.ATP.__proto__=
C.GB;C.Ad$.__proto__=C.Yf;C.ABw.__proto__=C.Ba;C.ACQ.__proto__=C.Da;C.AO0.__proto__=
C.BR;C.AaI.__proto__=C.Nz;C.XG.__proto__=C.Nz;C.RP.__proto__=C.D5;C.XH.__proto__=
C.RP;C.XE.__proto__=C.Iu;C.AaD.__proto__=C.Iu;C.XD.__proto__=C.Iu;C.AaC.__proto__=
C.Iu;C.AL2.__proto__=C.AB;C.Iu.__proto__=C.IR;C.IR.__proto__=C.G$;C.Nz.__proto__=
C.Fq;C.AwR.__proto__=C.Zg;C.AM8.__proto__=C.Amn;C.AwT.__proto__=C.Zg;C.ATs.__proto__=
C.Ct;C.ATq.__proto__=C.Eg;C.AQu.__proto__=C.Le;C.ATr.__proto__=C.Eg;C.NewMenu.__proto__=
C.AB;C.ARo.__proto__=C.HU;C.AL4.__proto__=C.Ama;C.AMi.__proto__=C.Vh;C.Jz.__proto__=
C.IR;C.AO2.__proto__=C.Yg;C.Aa8.__proto__=C.CQ;C.APb.__proto__=C.Ev;C.MotherScanScreen.
__proto__=C.Mb;C.AO1.__proto__=C.AqA;C.I5.__proto__=A.Core.O;C.AOX.__proto__=C.BR;
C.SetSaveNaisIdScreen.__proto__=C.Q4;C.ANx.__proto__=C.Aqk;C.UG.__proto__=C.CQ;C.
UH.__proto__=C.UG;C.Acs.__proto__=C.UG;C.AdB.__proto__=C.AC;C.AF$.__proto__=C.Ec;
C.ANl.__proto__=C.Ee;C.AOC.__proto__=C.KK;C.ANj.__proto__=C.Ee;C.AOA.__proto__=C.
KK;C.AmI.__proto__=C.TO;C.AO8.__proto__=C.TO;C.Amg.__proto__=C.M1;C.AMC.__proto__=
C.M1;C.ARh.__proto__=C.Aey;C.Yf.__proto__=C.BR;C.Ab$.__proto__=C.BZ;C.FA.__proto__=
C.AC;C.AL8.__proto__=C.FA;C.AL9.__proto__=C.FA;C.ALP.__proto__=C.IS;C.Ty.__proto__=
C.BZ;C.ARq.__proto__=C.AB;C.Ar6.__proto__=C.SetTransponderScreen;C.ADj.__proto__=
C.HD;C.Ar7.__proto__=C.OQ;C.Aw4.__proto__=C.OQ;C.Acc.__proto__=C.CQ;C.AVl.__proto__=
C.RD;C.AVk.__proto__=C.IS;C.AVj.__proto__=C.GB;C.AQy.__proto__=A.Core.O;C.AQv.__proto__=
C.HD;C.ACg.__proto__=C.Aa9;C.LT.__proto__=A.Core.O;C.ATN.__proto__=C.Ct;C.ATM.__proto__=
C.Ct;C.AUR.__proto__=C.Ct;C.Afa.__proto__=C.AC;C.I2.__proto__=A.acn.I2;C.AUF.__proto__=
C.AB;C.ATv.__proto__=C.Q1;C.ACS.__proto__=C.Da;C.AMq.__proto__=C.Q1;C.AOw.__proto__=
C.Ad$;C.AOZ.__proto__=C.Ad$;C.ABA.__proto__=C.Ba;C.AT6.__proto__=C.SE;C.AT_.__proto__=
C.Q5;C.AOW.__proto__=C.BR;C.AQ_.__proto__=C.Fj;C.AQ9.__proto__=C.Fj;C.AQ8.__proto__=
C.Fj;C.ALA.__proto__=C.Al_;C.ARc.__proto__=C.T5;C.ATu.__proto__=C.OverlayMenu;C.
Vz.__proto__=C.AC;C.AMp.__proto__=C.OverlayMenu;C.ADD.__proto__=C.AC;C.AUE.__proto__=
C.OT;C.AGQ.__proto__=C.CQ;C.AT8.__proto__=C.BZ;C.YR.__proto__=C.CQ;C.ANh.__proto__=
C.Ee;C.AOy.__proto__=C.KK;C.ANk.__proto__=C.Ee;C.AOB.__proto__=C.KK;C.RD.__proto__=
C.GP;C.Avv.__proto__=C.Vh;C.ACU.__proto__=C.Da;C.ABz.__proto__=C.Ba;C.AO3.__proto__=
C.AjG;};C._ReInit=function(){var B;if((B=C.Aw8._this))B._ReInit(),C.Aw8._ReInit.
call(B);if((B=C.Aw9._this))B._ReInit(),C.Aw9._ReInit.call(B);if((B=C.A1._this))B.
_ReInit(),C.A1._ReInit.call(B);if((B=C.Pf._this))B._ReInit(),C.Pf._ReInit.call(B
);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Ae0.
_this))B._ReInit(),C.Ae0._ReInit.call(B);if((B=C.BN._this))B._ReInit(),C.BN._ReInit.
call(B);if((B=C.Wp._this))B._ReInit(),C.Wp._ReInit.call(B);if((B=C.Ar8._this))B.
_ReInit(),C.Ar8._ReInit.call(B);if((B=C.AnC._this))B._ReInit(),C.AnC._ReInit.call(
B);if((B=C.DL._this))B._ReInit(),C.DL._ReInit.call(B);if((B=C.Aup._this))B._ReInit(
),C.Aup._ReInit.call(B);if((B=C.Al6._this))B._ReInit(),C.Al6._ReInit.call(B);if((
B=C.AvC._this))B._ReInit(),C.AvC._ReInit.call(B);if((B=C.AvD._this))B._ReInit(),
C.AvD._ReInit.call(B);if((B=C.Axw._this))B._ReInit(),C.Axw._ReInit.call(B);};C.DE=
function(D){var B;if((B=C.Aw8._this)&&(B._cycle!=D))B._Done(C.Aw8._this=null);if((
B=C.Aw9._this)&&(B._cycle!=D))B._Done(C.Aw9._this=null);if((B=C.A1._this)&&(B._cycle
!=D))B._Done(C.A1._this=null);if((B=C.Pf._this)&&(B._cycle!=D))B._Done(C.Pf._this=
null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null
);if((B=C.Ae0._this)&&(B._cycle!=D))B._Done(C.Ae0._this=null);if((B=C.BN._this)&&(
B._cycle!=D))B._Done(C.BN._this=null);if((B=C.Wp._this)&&(B._cycle!=D))B._Done(C.
Wp._this=null);if((B=C.Ar8._this)&&(B._cycle!=D))B._Done(C.Ar8._this=null);if((B=
C.AnC._this)&&(B._cycle!=D))B._Done(C.AnC._this=null);if((B=C.DL._this)&&(B._cycle
!=D))B._Done(C.DL._this=null);if((B=C.Aup._this)&&(B._cycle!=D))B._Done(C.Aup._this=
null);if((B=C.Al6._this)&&(B._cycle!=D))B._Done(C.Al6._this=null);if((B=C.AvC._this
)&&(B._cycle!=D))B._Done(C.AvC._this=null);if((B=C.AvD._this)&&(B._cycle!=D))B._Done(
C.AvD._this=null);if((B=C.Axw._this)&&(B._cycle!=D))B._Done(C.Axw._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */