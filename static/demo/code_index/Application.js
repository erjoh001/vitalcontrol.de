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
var Cc=[0,0,240,320];var BF=[0,0,240,40];var E7=[0,0,20,30];var Hp=[6,21,14,25];var
IS=[6,15,14,19];var Ir=[6,9,14,13];var O1=[209,7,229,37];var P3=[0,40,240,320];var
P4=[0,228,240,298];var CQ=" ";var Fe=[0,40,240,280];var Lu=[0,40,232,280];var P5=[
0,40,116,160];var JZ=[114,40,230,160];var N_=[0,160,116,280];var P6=[116,160,232
,280];var MG=[0,280,116,400];var S8=[116,280,232,400];var US=[0,400,116,520];var
Z8=[116,400,232,520];var W5=[-1,520,115,640];var Is=[232,40,240,280];var UT=[5,40
,235,120];var Z9=[120,140,210,230];var W6=[20,140,110,230];var Z_=[0,0,116,120];
var W7=[0,0,120,120];var Z$=[0,0,116,45];var Aaa=[0,0,8,200];var UU=[0,0,8,20];var
W8=[30,0,210,40];var P7=[0,0,40,40];var Aab=[7,8,200,40];var O2=[0,0,200,40];var
Rl=[6,1];var W9="ERROR: Invalid value for ItemHighlighting";var W_=[10,10,40,30];
var W$=[0,0,120,40];var Xa=[60,0,180,40];var Aac=[120,0,240,40];var Xb=[0,0,100,
40];var Xc=[83,0,157,40];var S9=[140,0,240,40];var UV=[0,0,20,40];var UW=[220,0,
240,40];var AcQ=[0,0,300,30];var S_=[0,30,300,60];var Aad=[0,60,300,90];var Afz=[
0,90,300,120];var Aae=[0,100,300,110];var Xd=[0,50,300,60];var Aaf=[0,30,300,40];
var Aag="*";var AhV=[40,40];var J0=[0,0,240,80];var Aah=[0,0,240,50];var Lv="Cap";
var AhW=[0,40,40,80];var Aof=[200,40,240,80];var N$=[30,40,210,80];var Xe="--";var
Aog="%d";var AhX="%m";var AhY="%Y";var Rm=" (";var UX=[0,0,232,80];var Aoh="Date";
var Aoi=[48,40,88,78];var Aoj=[39,40,79,80];var Aok=[80,44,87,77];var AfA=".";var
Ale=[88,44,120,77];var Aol=[120,44,127,77];var Ax2=[127,44,191,77];var O3=[0,0,80
,40];var Rn="Text";var Ax3=[430,102,430,102];var UY=[0,0,240,240];var AsX=[232,0
,240,240];var Ax4=[0,10,240,240];var Ax5="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax6="Unhandled option";
var Aom=[0,80,240,280];var AfB="Unhandled animal list action";var Aon="Animal list content not handled.";
var IT=[0,40,240,80];var Aoo="Set Selected";var Xf=" %%";var Aop=[0,180,240,220];
var AsY=[82,127,167,150];var AsZ="Group";var As0=[77,91,167,124];var Aoq=[0,0,90
,33];var Aor=[4,4,18,29];var As1=[20,4,34,29];var Ax7=[36,4,50,29];var Ax8=[52,4
,66,29];var Ax9=[68,4,82,29];var As2="ERROR: Unhandled Device::SyncState";var Ax_=
":\n";var P8="{1}";var Ax$="{2}";var AVM=[0,49,240,109];var AVN=[0,170,240,243];
var AVO=[0,110,240,170];var AVP=[20,243,220,268];var AHh=[30,8];var AHi="\u2265 ";
var AfC=[0,0,240,160];var Aos=[0,0,0,0];var AVQ=[0,0,240,66];var AHj=[10,0,76,66
];var Alf=[33,33];var AHk=[87,0,153,66];var AHl=[164,0,230,66];var AVR="No statistics available";
var AHm="in this environment.";var AVS=" fps";var AVT="CPU: - %%";var AcR=[0,0,240
,120];var AVU=[130,0,237,20];var AVV=[20,0,120,20];var AHn=[0,20,240,40];var As3=[
40,20,100,40];var AHo=[100,20,240,40];var AHp=[0,40,240,60];var Aya=[40,40,100,60
];var AHq=[100,40,240,60];var Ayb=[0,60,50,80];var AVW=[100,60,240,80];var AVX=[
0,80,50,100];var AVY=[100,80,240,100];var AVZ=[0,100,50,120];var AHr=[100,100,240
,120];var AV0=[5,5,15,15];var O4="%H";var Ayc="%M";var AV1="Time";var AV2=[79,40
,119,78];var AV3=[125,40,164,80];var AV4=[86,40,126,80];var AV5=":";var AV6=[75,
40,115,80];var AHs=[0,0,240,150];var AHt=[60,0,155,40];var Aot=[30,0,65,40];var Ayd=[
60,0,100,40];var AV7=[88,0,128,40];var AV8=[60,0,71,40];var AV9=[60,0,74,40];var
AHu=[90,0,123,40];var AV_=[120,0,161,40];var AHv=[120,0,165,40];var AHw=[60,0,88
,40];var AHx=[60,0,95,40];var AV$="Did not expect iterator bigger than number of records";
var AHy=[20,0,240,20];var AWa=[0,38,240,40];var AHz=[0,0,8,4];var Ro=[0,0,240,280
];var Xg=[0,280,240,320];var AWb="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWc="]";var AWd="ERROR: Cannot find closing bracket \'}\' in text [";var AWe=
"] opened at index ";var AWf="#";var AWg="ERROR: Invalid parameter: {";var AWh="}";
var AhZ=[20,20];var AHA=[0,12];var AWi="ERROR: Not expected Application::FooterFocus, ";
var AWj="%M:%S";var AHB=[30,150,207,170];var AHC=[20,70,217,194];var Aye="Unhandled item.";
var P9=[0,80,240,120];var AWk="Unhandled Overlay Menu ";var AWl="Invalid bootloader message: ";
var AWm="Unknown USBState: ";var As4="Invalid fader";var AWn=[2,4,32,40];var AWo=[
29,4,80,40];var AWp=[120,4,200,40];var AWq=[80,0,114,40];var AWr="-1";var AWs="< ";
var As5=[0,0,232,40];var AWt=[22,40,180,80];var AWu=[2,40,22,80];var AWv=[23,40,
163,80];var AWw=[210,40,230,80];var AWx=[164,40,210,80];var AWy=[169,43,205,77];
var AWz="ERROR: No outlet assigned";var AWA="Unhandled screen";var AWB="ERROR: Cannot cache null screen.";
var AWC="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHD="Untreated Rating Method type!";var Alg="Unhandled animal type";var AWD=[
5,60,235,140];var AWE=[0,130,240,196];var AWF=[49,240,229,280];var Ayf="Implement in derived classes!";
var Alh="Implement in derived class";var Ah0=[0,40,230,120];var Ayg=[0,120,230,200
];var Aou=[0,200,230,280];var Ah1=[0,280,230,360];var AWG=[0,360,230,440];var Ayh=[
230,40,238,280];var AHE="WARNING: Unhandled filter field: ";var AfD="Should not happen.";
var AHF="Invalid Boolean item";var Aai=[0,120,240,160];var Ali=[0,160,240,200];var
Aov=[0,200,240,240];var AWH=[1152,11,1392,51];var AWI=[1152,51,1392,91];var AWJ=[
1152,91,1392,131];var AWK=[1152,131,1392,171];var AWL=[1152,171,1392,211];var As6=[
0,240,240,280];var AHG=[10,0,240,40];var AHH=[190,0,230,40];var AWM=[60,3,95,39];
var AWN=[95,4,200,40];var AWO=[3,3];var AWP=[6,6];var AWQ=[59,5,197,35];var AWR=[
59,2,200,38];var AWS=[3,2,43,42];var AWT=[0,17,43,40];var AWU=[50,40];var AWV=[50
,0];var AWW="Illegal shifting direction";var Ayi=[0,0,160,30];var AHI=[0,0,25,30
];var AHJ=[27,0,52,30];var AHK=[54,0,79,30];var AHL=[81,0,106,30];var AHM=[108,0
,133,30];var AHN=[135,0,160,30];var AWX="Internal queue error";var AWY="ERROR: No corresponding Id ";
var AWZ=" found.";var AW0="ERROR: Error in range test";var AW1=[120,67,210,157];
var AW2=[0,40,240,70];var AW3=[20,67,110,157];var Ayj=[0,160,240,280];var AHO=[20
,77,90,147];var AW4=[0,0,210,40];var AHP=[195,0,235,40];var Ah2=[0,40,232,120];var
UZ=[0,120,232,200];var AW5=[0,40,232,200];var Aaj=[0,200,232,280];var AW6=[0,320
,240,400];var AW7=[0,120,53,200];var Alj=[0,280,232,360];var AfE="%%";var AcS=[0
,360,232,440];var Aow=[0,440,232,520];var AW8=[0,80,207,120];var O5=")";var AHQ=
"/";var AHR=[5,0,88,30];var AW9=[88,0,240,30];var AHS="276000312345678";var AHT=[
5,30,100,60];var AHU=[100,30,240,60];var AW_="Manufacturer";var AW$="Country";var
AXa=[5,60,240,90];var AXb="Niedersachsen";var AXc=[5,90,145,120];var AXd=[140,90
,240,120];var AXe="Protocol";var AXf=[0,0,120,100];var AHV=[0,40,116,120];var AXg=[
40,80,92,107];var AHW=[0,0,50,23];var AHX="ERROR: Unhandled Device::MeasureState";
var Ayk=[0,120,240,280];var AXh=[178,159,248,203];var AXi=[10,145,170,225];var AXj=[
0,61,240,101];var AXk=[0,0,40,23];var AXl=[101,113,141,136];var AHY=[101,235,141
,258];var AXm=[69,288,101,313];var AXn=[0,40,240,200];var As7=[0,200,240,280];var
As8=[0,280,240,360];var AHZ="\u2264 ";var AXo=[0,80,94,160];var AXp=[94,80,184,160
];var AXq=[184,80,240,160];var AXr=[197,105,231,139];var AXs=[105,101,173,127];var
AXt=[7,101,75,127];var AXu=[94,125,184,151];var AXv=[2,125,92,151];var AXw=[0,70
,240,101];var AH0=[0,106,240,280];var AXx=[30,40,240,70];var Ayl=[0,40,30,70];var
AH1="\u278B";var AXy=[0,0,240,175];var AXz=[0,0,232,175];var AXA=[232,0,240,175];
var AXB="Text Here !";var AXC=[200,0,240,40];var AH2="1";var AH3="2";var AH4="3";
var AH5="4";var Aym=[0,360,232,400];var Ayn="ERROR: invalid item class.";var AH6=[
10,220,250,260];var AXD=[185,0,225,40];var AH7="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXE="ERROR: Received more actions than expected!";var AH8=", ";var AXF=
"ERROR: Cannot set action at position=";var AXG=". Current elements:";var AXH=", max elements:";
var AXI="17";var AXJ=[0,0,58,58];var AXK=[0,0,60,60];var AXL=[30,0,58,20];var AXM=[
7,6,25,24];var AXN=[30,60,130,160];var AXO=[0,0,28,20];var AXP=[4,3,40,24];var AXQ=[
0,0,42,27];var Ayo=[0,0,17,17];var AXR="Unknown direction of counting enum value: ";
var AXS="Unknown id generation method enum value: ";var Ayp="Invalid animal id generation method: ";
var As9="Unhandled popup id";var U0="0";var As_=";";var AXT=[0,400,230,480];var AXU=[
5,120,235,200];var AXV=[0,640,230,760];var AH9=[0,0,300,200];var AXW=[20,40,220,
80];var AH_=[20,80,220,280];var AXX=[140,0,188,40];var AXY="ERROR: Row containing birth weight could not be loaded";
var AXZ=[0,440,230,520];var As$="ID";var AX0=[40,40,198,70];var AX1="Extra info: ";
var AH$=" -";var AX2=[0,0,230,120];var AX3=[0,0,230,40];var AX4=[0,80,230,120];var
AX5="\xB0Brix";var AcT=[0,320,230,400];var AX6=[0,410,230,490];var AX7="ERROR: aNumberOfDays can not be < 0 ";
var AX8="{WEIGHTGAIN} ";var AX9="\xB1";var AIa="+";var AX_="{WEIGHTGAIN}";var AX$=
"{DAYS}";var AYa="ERROR: aString can not be null";var AYb=[166,70,240,114];var AYc=[
0,60,160,120];var AYd=[30,0,240,60];var AIb=[1,6,29,54];var AYe=[30,60,240,120];
var AYf="Con";var AYg=[70,50,170,70];var AIc="Unhandled Device::NaisIdValidationResult: ";
var AId="Unhandled PopupId";var AYh=[110,123,230,248];var AYi=[5,0,250,40];var AYj=[
102,0,186,40];var AYk=[153,0,240,40];var Rp="-";var Ata=[170,0,240,40];var AIe=[
220,0,320,30];var AIf=[200,20,300,50];var Aox=[180,0,180,40];var Aoy=[170,0,170,
40];var Ayq="Untreated state";var AYl="ERROR: Animal id scanned in an unexpected state : ";
var AIg="ERROR: Null animal id scanned.";var AYm=[40,40,235,100];var AYn=[120,100
,210,190];var AYo=[20,100,110,190];var AYp=[0,40,40,100];var AYq="\u278A";var AYr=
"Action untreated";var AYs="ERROR: No corresponding ";var AYt=" action found!";var
AYu="Unhandled action: ";var AYv=[0,190,240,220];var AYw=[0,220,232,280];var AYx=[
5,190,235,270];var AYy=[232,60];var AYz=[0,2];var AYA=[58,58];var AYB="A";var AYC=[
56,0,156,40];var Aoz=[156,0,240,40];var AIh=" 7 ";var AYD=[40,0,156,40];var AIi=
"/-1/-2";var AIj=[72,0,144,40];var Aak="\n";var AIk="(";var AYE=[72,0,156,40];var
AIl="%y/%m";var AYF=[70,0,240,40];var Ayr=[70,0,120,40];var AYG=[160,0,245,40];var
AYH="- ";var Ays=" - ";var AYI="{parc}{clr3}";var AYJ="{clr0}/^{clr2}";var AYK="{clr0}/^{clr1}";
var AIm=[0,0,85,40];var AoA="?";var AIn=[0,0,120,140];var AYL=[0,0,116,40];var AIo=[
15,0,100,40];var AIp=[110,0,200,40];var Ah3=[0,0,34,34];var AYM=[129,0,157,40];var
Alk=[0,0,25,25];var AYN="\u2611";var AIq="\u2610";var AIr=[5,0,72,40];var AYO=[150
,0,240,40];var AYP=[72,0,139,40];var AIs="Unvalid content class: ";var AYQ=[0,320
,240,360];var AYR=[0,360,240,400];var AYS=[144,0,170,40];var AYT=[187,0,213,40];
var AYU=[207,10,233,50];var AYV=[247,20,273,60];var AYW=[140,0,150,100];var AYX=[
165,0,175,100];var AYY=[185,0,195,100];var AYZ=[205,0,215,100];var AY0=[211,0,233
,40];var AY1=[189,0,211,40];var AY2=[167,0,189,40];var AY3=[145,0,167,40];var All=[
5,0,240,40];var Aal=[10,0,10,40];var AY4="= \u2211 ";var Ayt=[125,0,240,40];var AY5=[
130,0,170,40];var AY6="\xD8 ";var AY7=[100,10,116,36];var AY8=[117,10,133,36];var
AY9=[135,10,151,36];var AIt="Implement in derieved class";var Ah4=[0,80,240,240];
var Atb=[0,120,232,160];var Atc=[0,160,232,200];var Atd=[0,200,232,240];var Ayu=[
0,240,232,280];var AoB=[0,320,232,360];var AY_=[-61,360,232,400];var AY$=[0,400,
32,440];var AZa=[0,100];var AZb=[0,40,240,240];var AZc=[0,50000];var AZd=[0,500];
var AZe=[0,0,240,105];var AZf=[0,105,240,210];var AZg=[0,40,240,81];var AZh=[0,81
,240,122];var AZi=[0,122,240,163];var AZj=[0,163,240,205];var AIu=[0,205,240,240
];var AZk=[0,200];var AIv=[0,40,240,73];var Ayv=[0,0,30,40];var AZl=[0,40,30,80];
var Ate=[60,40];var Ayw=[60,0];var AZm=[10,0,40,40];var AZn=[0,190,240,260];var AZo=[
0,130,240,190];var AIw=[40,40,200,130];var AZp=[90,230,170,253];var AZq=[80,190,
170,223];var AZr=[0,130,240,180];var AZs=[0,250,240,280];var AZt=[129,0,156,40];
var AZu=[72,0,100,40];var AZv=[100,0,129,40];var AZw=[78,8,103,33];var AIx=[0,0,
300,120];var AZx=[1,-1];var AZy=[20,40,240,120];var AZz=[20,0,240,40];var AZA=[0
,118,240,120];var AZB=[0,20,130,40];var AZC=[130,20,240,40];var AZD=[0,0,10,20];
var A$R="\u2191";var Bql=[230,0,240,20];var AIy=[0,40,232,80];var Bqm=[0,80,232,
160];var Bqn=[0,160,230,240];var AIz=" p. p.";var AZE="Unknown animal type";var AZF=[
80,0,140,40];var Bqo=[50,0,172,40];var Bqp=[172,0,240,40];var Bqq=[0,90,240,92];
var A$S="Unhandled menu item";var A$T=[0,0,50,30];var Atf=[0,0,30,30];var Bqr="No AnimalActionTemperatureScreen found!";
var Bqs="840003123456789";var Bqt=[40,0,230,40];var Bqu=[50,10,230,30];var AZG="No AnimalMultiInfoScreen found!";
var AIA=[0,0,25,40];var A$U="/^";var A$V="?/?";var Bqv=[100,4,180,40];var Bqw=[65
,0,99,40];var Bqx=[165,0,200,40];var A$W=[0,0,60,40];var A$X="9999/^9999";var Bqy=
"Invalid index: ";var Bqz="Unknown AnimalIdGenerationMethod: ";var BqA="Invalid gender: ";
var Atg="Invalid input state: ";var BqB="Unhandled AnimalIdGenerationMethod";var
BqC=[42,35,67,75];var BqD=[5,35,39,75];var BqE=[70,40,228,70];var BqF="Invalid direction for setting focus";
var Ah5="Invalid index";var BqG="Unvalid direction";var BqH=[0,0,42,30];var A$Y=[
22,0,42,30];var BqI=[20,0,40,30];var BqJ=[0,0,158,30];var A$Z=[32,0,62,30];var A$0=[
64,0,94,30];var A$1=[96,0,126,30];var BqK=[128,0,158,30];var BqL=" %% ";var BqM=[
0,70,240,220];var BqN=[0,237,240,307];var A$2="\n44 %% done";var BqO=[0,0,166,30
];var AIB=[0,0,12,30];var Ayx=[14,0,26,30];var AZH=[28,0,40,30];var AZI=[42,0,54
,30];var AZJ=[56,0,68,30];var AZK=[70,0,82,30];var AZL=[84,0,96,30];var AZM=[98,
0,110,30];var A$3=[112,0,124,30];var AZN=[126,0,138,30];var BqP=[140,0,152,30];var
BqQ=[154,0,166,30];var A$4=[20,0,46,30];var BqR="\u2642";var BqS="{fnt3}\u2642{fnt1}";
var BqT="\u2640";var BqU="{fnt3}\u2640{fnt1}";var BqV="{parc}";var BqW=[30,30,210
,80];var BqX="Implement in derieved class!";var BqY=[60,4,226,34];var A$5=[30,4,
58,34];var A$6=[4,0,27,40];var BqZ=[116,4,228,34];var Bq0=[60,4,86,34];var Bq1=[
88,4,114,34];var AoC="Implement in derived class!";var A$7="Implement in derived class.";
var Bq2="Invalid nais id view: ";var Bq3=[0,35,240,75];var Bq4=[0,0,110,30];var Bq5=[
0,0,26,30];var Bq6="100";var AZO="\n\n";var Bq7=[240,240];var Bq8=[0,240];var Bq9=
"Unknown rated attribute: ";var Bq_=[120,80,240,280];var Bq$=[0,80,120,280];var AIC=
" %% (";var Ayy=" \xB1 ";var Ayz=" (n = ";var AZP=[0,80,232,120];var Bra=[0,242,
232,282];var AZQ=[0,280,232,320];var Brb=[35,0,200,40];var Brc=[1,0,31,40];var Brd=[
32,40];var Bre=[32,0];var Brf=[3,0,83,40];var A$8=[180,0,240,40];var Brg=[120,0,
180,40];var Brh=[65,0,125,40];var Bri=[0,0,120,200];var Brj=[0,40,120,150];var A$9=[
15,160,60,190];var A$_=[60,160,105,190];var Brk=[0,65,240,135];var Brl=[10,112,170
,192];var Brm=[178,129,248,173];var Brn=[0,40,240,110];var Bro=[10,98,170,178];var
Brp=[178,112,248,156];var Brq=[85,190,160,265];var Brr=[89,194,155,260];var Brs=[
26,190,111,250];var Brt=[125,181,225,211];var Bru=[100,220,183,250];var Brv="38.7";
var Brw=[180,220,225,250];var Brx="\xB0C";var Bry=[0,99,240,178];var Brz=[100,280
,140,320];var BrA=[0,26,240,105];var A$$=[30,40];var Baa=[30,0];var BrB=[149,0,200
,40];var BrC=[145,40];var BrD=[145,0];var BrE=[38,0,88,40];var AZR=[0,0,35,40];var
BrF=[0,0,50,40];var BrG=[40,0,200,40];var BrH=[95,0,145,40];var BrI=[65,5,223,35
];var AZS=[0,0,15,40];var BrJ=[72,0,140,40];var Bab="\n(";var BrK="%y/%m/%d";var
BrL="%y ";var BrM=" %m ";var BrN=" %d ";var BrO="20";var BrP=[225,0,240,40];var BrQ=[
0,400,232,440];var BrR=[0,440,232,480];var BrS=[0,480,232,520];var BrT=[0,520,232
,560];var BrU=[0,560,232,600];var BrV=[0,598,232,638];var BrW=[5,0,215,40];var BrX=[
215,8,240,33];var BrY="Implement in dervied class.";var BrZ="ERROR: Unhandled temperature unit: ";
var AID="ERROR: Unhandled mass unit: ";var Br0=[-1,160,115,280];var Br1=[114,160
,230,280];var AZT=[116,40,232,160];var AyA="Unknown weight class index: ";var Br2=
"< 35";var Br3="35 - 40";var Br4="40 - 45";var Br5="45 - 50";var Br6="\u2265 50";
var Br7="< 80";var Br8="80 - 90";var Br9="90 - 100";var Br_="100 - 110";var Br$=
"\u2265 110";var Bac="Unknown mass unit";var Bsa=[143,0,193,40];var Bad=[192,0,240
,40];var Bsb=[44,28,44,28];var Bsc="0 %%";var Bsd=[-1,40,115,160];var Bse=[117,40
,233,160];var Bsf=[1,160,117,280];var Bsg=[114,158,230,278];var Bsh=[1,280,117,400
];var Bsi=[30,0,155,40];var Bae="\u2620";var AZU=[380,150,380,190];var Baf=[105,
0,155,50];var AZV=[190,1,240,41];var Bsj=[72,0,108,40];var Bsk=[108,0,180,40];var
Bsl=[60,0,94,40];var Bsm=[94,0,200,40];var Bsn="Scroll direction not supported.";
var Bso=[44,0,207,40];var Bsp=[207,0,240,40];var Bsq="99";var Bsr="Unknown birth type";
var Bss=[44,0,189,40];var Bst=[5,0,44,40];var Bsu=[44,0,240,40];var Bsv=[240,0,240
,40];var Bsw="\u25C9";var Bag="\u25CB";var Bsx=[75,4,215,34];var Bsy=[47,4,73,34
];var Bah=[17,4,45,34];var Bsz=[0,0,138,30];var BsA=[47,4,215,34];var AZW="Unhandled MotherSelectionFilterMode: ";
var BsB="Read only!";var BsC="actions array too small to hold all actions";var BsD=[
120,40];var BsE=[120,0];var BsF=[5,0,115,40];var BsG=[0,0,205,40];var BsH=[59,4,
170,34];var BsI=[59,1,173,37];var BsJ=[175,1,205,37];var BsK=[0,0,37,40];var BsL=[
115,98,205,188];var BsM=[0,40,235,100];var BsN=[2,200,240,280];var BsO=" 01234";
var BsP=[0,0];var BsQ=[33,63];var BsR=[25,56];var BsS="Unknown transponder image type: ";
var AIE=[0,0,82,82];var BsT=[0,0,81,26];var BsU=[105,120,195,210];var BsV=[10,140
,100,230];var Bai="Unhandled EartagNrAssignmentMode: ";var BsW="Unhandled Gender";
var BsX=[10,35,35,75];var BsY=[44,40,202,70];var BsZ=[204,35,232,75];var Bs0="Unvalid FatoryResetScope";
var Baj=[0,120,240,200];var Bs1=[144,0,192,40];var Bs2=[144,0,240,40];var Bs3=[195
,0,245,50];var Bs4=[120,0,120,40];var Bs5=[140,0,240,30];var Bs6=[30,0,232,40];var
Bs7=[60,0,160,40];var Bs8=[160,0,200,40];var Bs9=[150,17,200,40];var Bs_=[155,40
];var Bs$=[155,0];var Bta=[146,80,240,160];var Btb=[56,80,146,160];var Btc=[0,80
,56,160];var Btd=[13,107,47,141];var Bte=[74,109,104,139];var Btf=[50,100,130,150
];var Btg=[55,112,145,140];var Bth=[146,112,236,140];var Bti=[150,86,223,110];var
AIF=[0,40,240,120];var Btj="Menu item for animal table field not found";var Bak=[
0,360,240,440];var Btk=[0,440,240,520];var Btl=[5,40,235,104];var Btm=[120,108,226
,218];var Btn=[20,120,110,210];var Bto=[5,223,235,280];var Btp=[0,0,64,30];var Btq=[
44,0,64,30];var Btr=[185,5,225,35];var Bts=[170,5,234,35];var Btt="Unhandled number of digits";
var Btu=[0,0,126,30];var Btv=[22,5,149,35];var Btw=[149,0,232,40];var Bal=[5,20];
var Btx=[5,0];var Bty="Unhandled AnimalIdAutoGenerationMethod: ";var Btz=[4,440,
236,520];var BtA="Unhandled TransponderAssignmentIdChangeMethod: ";var BtB="\n";
var BtC="%";var BtD=[0,0,160,120];var BtE=[2,2,157,117];var BtF=[50,70];var BtG=[
50,50];var BtH="Unhandled data export destination ";var BtI=[0,0,168,40];var BtJ=[
168,0,240,40];var BtK=[0,47,232,77];var BtL=[65,0,101,40];var BtM=[135,0,175,40];
var BtN=[85,17,135,40];var BtO=[125,17,175,40];var BtP=[40,0];var Bam=[0,40,230,
280];var BtQ="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtR="ERROR: Received more animal table fields than expected!";
var BtS=[0,80,240,130];var BtT=[0,80,240,200];var Ban="Unhandled BackupError: ";
var BtU="Unhandled PopupId: ";var BtV=[203,0,240,40];var BtW=[168,0,203,40];var BtX=[
35,0,152,40];var BtY=[0,0,84,40];var BtZ=[84,0,167,40];var Bt0="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMD={Device:null,A5M:null,GJ:null,Init:function(aArg){},DriveCursorHitting:function(
Tb,BG,Fg){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GJ._Init.call(this.
GJ={I:this},0);this.__proto__=C.AMD;this.H(Cc);this.J(this.GJ,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5M=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lw=
this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GJ._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GJ.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5M)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4U._variants();
},K:null,_className:"Application::Application"};C.Asy=[240,320];C.AB={Background:
null,Ej:null,AC7:null,An8:0,Init:function(aArg){A.pe([this,this.A0u],this);A.pe([
this,this.Beu],this);},LO:function(G){},A0u:function(s){this.LO(s);},CD:function(
G){},AIH:function(s){this.CD(s);},E6:function(G){},AyB:function(s){this.E6(s);},
Dr:function(E){if(this.AC7===E)return;this.AC7=E;A.pe([this,this.Beu],this);},Beu:
function(G){var B;if(!!this.AC7)this.Ej.Ab7((C.BR.isPrototypeOf(B=A._NewObject(this.
AC7,0))?B:null));else this.Ej.Ab7(null);},_Init:function(aArg){C.Abl._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CS);this.Ej.H(BF);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abl;this.
Background._Done();this.Ej._Done();C.Abl._Done.call(this);},_ReInit:function(){C.
Abl._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abl._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WM={KH:null,Zt:function(E){var B;if(this.KH===E)return;if(!!this.KH)this.AqI(
this.KH,null,null,null,[B=this.KH,B.AyB],null,false);this.KH=E;if(!!this.KH)this.
AkP(this.KH,null,null,null,null,null,null,[B=this.KH,B.AIH],null,false);},AEq:function(
){return this.KH;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WM;this.H([0,0,C.Asy[0],C.Asy[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KH)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ow={U7:null,Q:null,AnM:null,ZE:null,NO:null,Ou:null,TD:null,TE:null,AF$:255,
Kd:function(G){var F;if(!!this.Q){this.A10();var Ac$=(F=this.Q,F[1].call(F[0]));
if(Ac$>20)this.Ou.L(A.jb.E4);else this.Ou.L(A.jb.Gk);this.Ou.L((this.Ou.AQ&0x00FFFFFF
)|(this.AlM(Ac$,0,30)<<24));this.TD.L((this.TD.AQ&0x00FFFFFF)|(this.AlM(Ac$,31,60
)<<24));this.TE.L((this.TE.AQ&0x00FFFFFF)|(this.AlM(Ac$,61,100)<<24));}},A0s:function(
s){this.Kd(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0s],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0s],E,0);if(!!E)A.pe([this,
this.A0s],this);},A3c:function(G){var F;if(!!this.AnM)this.ZE.Ar((F=this.AnM,F[1
].call(F[0])));else this.ZE.Ar(false);this.A99(255);},A92:function(E){if(A.aaZ(this.
AnM,E))return;if(!!this.AnM)A.z$([this,this.A3c],this.AnM,0);this.AnM=E;if(!!E)A.
zX([this,this.A3c],E,0);if(!!E)A.pe([this,this.A3c],this);},A99:function(E){if(this.
AF$===E)return;this.AF$=E;if(!!this.U7)this.U7.L((this.U7.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlM:function(A0y,BbJ,Bw7){if(A0y<BbJ)return 0;else if((A0y>=BbJ)&&(A0y<
Bw7))return this.AF$&0xFF;else return 255;},A10:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U7=this.TE;else if((F=this.Q,F[1].call(F[0]))>
30)this.U7=this.TD;else this.U7=this.Ou;}else this.U7=null;},BkN:function(){return this.
AF$;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZE._Init.call(this.ZE={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AK._Init.call(this.Ou={
I:this},0);A.acg.AK._Init.call(this.TD={I:this},0);A.acg.AK._Init.call(this.TE={
I:this},0);this.__proto__=C.Ow;this.H(E7);this.ZE.Fp(2000);this.NO.H(E7);this.NO.
L(A.jb.Text);this.Ou.H(Hp);this.Ou.L(A.jb.E4);this.TD.H(IS);this.TD.L(A.jb.E4);this.
TE.H(Ir);this.TE.L(A.jb.E4);this.J(this.NO,0);this.J(this.Ou,0);this.J(this.TD,0
);this.J(this.TE,0);this.ZE.Q=[this,this.BkN,this.A99];this.NO.Aw(A.aaL(A.ach.AMO
));},_Done:function(){this.__proto__=A.Core.P;this.ZE._Done();this.NO._Done();this.
Ou._Done();this.TD._Done();this.TE._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZE._ReInit();this.NO._ReInit();this.Ou._ReInit(
);this.TD._ReInit();this.TE._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZE={_Init:function(aArg){A.acl.Gm._Init.call(
this,aArg);this.__proto__=C.ZE;this.Ak0=true;this.B2=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ej={GJ:null,AR:null,Background:null,Ow:null,Bo:
null,Dl:null,K7:0,Avg:0,Avh:0,Ao5:0,LI:false,KE:false,Qp:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hd){this.Ao5=A.jb.CS;this.K7=A.jb.Text;}else if(GE){this.Ao5=
this.Avg;this.K7=this.Avh;}else if(Fu){this.Ao5=this.Avg;this.K7=this.Avh;}else{
this.Ao5=A.jb.CS;this.K7=A.jb.Text;}this.Background.L(this.Ao5);if(!!this.GJ){this.
GJ.WA(this.Ao5);this.GJ.De(this.K7);}this.LI=Hd;this.KE=Fu;this.Qp=GE;},Qo:function(
G){this.Am();A.pe(this.AR,this);},AiU:function(G){if(this.Dl.Acl)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab7:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HP(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.Am();},A9L:function(E){if(this.Avg===E)return;this.
Avg=E;this.Am();},A9M:function(E){if(this.Avh===E)return;this.Avh=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.Ow._Init.call(this.Ow={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=C.Ej;var B;this.
H(BF);this.Background.AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.CS);
this.Ow.H(O1);this.K7=A.jb.Text;this.Bo.PP(0);this.Bo.WC(50);this.Dl.Filter=1;this.
Avg=A.jb.AV;this.Avh=A.jb.Bm;this.Ao5=A.jb.Text;this.J(this.Background,0);this.J(
this.Ow,0);this.Ow.As([B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyC]);this.Ow.
A92([B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyD]);this.Bo.Mz=[this,this.Qo];
this.Dl.BN=[this,this.AiU];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ow._Done();this.Bo._Done();this.Dl._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ow._ReInit();this.Bo._ReInit();this.Dl._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X5={AeL:null,UC:null,CD:function(G){if(this.K&&this.K.CD
)return this.K.CD.apply(this,arguments);else return C.AB.CD.apply(this,arguments
);},E6:function(G){if(this.K&&this.K.E6)return this.K.E6.apply(this,arguments);else
return C.AB.E6.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeL={I:this},0);A.acg.Text._Init.call(this.UC={I:
this},0);this.__proto__=C.X5;this.AeL.H(P3);this.UC.H(P4);this.UC.R(A.jV);this.UC.
L(A.jb.Text);this.UC.Z(false);this.J(this.AeL,0);this.J(this.UC,0);this.AeL.Aw(null
);this.UC.S(A.aaL(A.fl.EK));var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeL._Done();this.UC._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeL._ReInit();this.UC._ReInit();this.UC.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X5._variants();},K:null,_className:"Application::BootScreen"};C.AUH={AAA:function(
G){A._GetAutoObject(C.A$).Ahu(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUH;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avt={DZ:null,Y:null,Yf:null,Yg:null,VH:null,X8:null
,VI:null,X6:null,X$:null,TI:null,X_:null,Yh:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Arz,B.Ath],0);A._GetAutoObject(A.Device.Helper).AkS();this.Bb(this.VH);this.
N.Ct(A.aaL(A.ach.ADC));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2N=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2N)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJV=A._NewObject(A.acl.AF8,0);AJV.Fp(250);AJV.HO(1);AJV.WG(6);this.
Y.HI(this.AV,true,AJV,null);}},CD:function(G){this.A4e(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkS();A._GetAutoObject(A.Device.Helper).Ass();},Fj:function(G){
var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.
Ay.Mx(-this.Y.Br[1]);},Ig:function(G){var Cy=(C.Fm.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VH)A._GetAutoObject(C.A$).Cf(35);else if(Cy===this.X8)A._GetAutoObject(
C.A$).Cf(34);else if(Cy===this.X$)A._GetAutoObject(C.A$).Cf(69);else if(Cy===this.
VI)A._GetAutoObject(C.A$).Cf(8);else if(Cy===this.X6)A._GetAutoObject(C.A$).Cf(50
);else if(Cy===this.TI)A._GetAutoObject(C.A$).Cf(25);else if(Cy===this.Yf)A._GetAutoObject(
C.A$).Cf(77);else if(Cy===this.Yg)A._GetAutoObject(C.A$).Cf(70);else if(Cy===this.
Yh)A._GetAutoObject(C.A$).Cf(6);else if(Cy===this.X_)A._GetAutoObject(C.A$).Cf(63
);},BAg:function(G){A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.
Device).AmS);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmS)this.N.Hy((
A.aaR(A.acf.A7h)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hy((A.aaR(A.acf.
A7h)+CQ)+A.aaR(A.acf.A7Y).toLowerCase());},XG:function(G){A._GetAutoObject(A.Device.
Device).Dt(1);},A4e:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mq());this.VI.ZA(A._GetAutoObject(A.Device.Device).An.B$().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fm._Init.call(this.Yf={I:this
},0);C.Fm._Init.call(this.Yg={I:this},0);C.Fm._Init.call(this.VH={I:this},0);C.Fm.
_Init.call(this.X8={I:this},0);C.QT._Init.call(this.VI={I:this},0);C.Fm._Init.call(
this.X6={I:this},0);C.Fm._Init.call(this.X$={I:this},0);C.Fm._Init.call(this.TI={
I:this},0);C.Fm._Init.call(this.X_={I:this},0);C.Fm._Init.call(this.Yh={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avt;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dr(C.Aq4);this.DZ.AZ(0x3F);this.DZ.H(
Fe);this.DZ.L(A.jb.CK);this.Y.H(Lu);this.Y.JP(9);this.Yf.H(P5);this.Yf.Aj(true);
this.Yf.T(A.aaR(A.acf.Gr));this.Yg.H(JZ);this.Yg.Aj(true);this.Yg.T(A.aaR(A.acf.
A7E));this.VH.H(N_);this.VH.Aj(true);this.VH.T(A.aaR(A.acf.Vu));this.X8.H(P6);this.
X8.Aj(true);this.X8.T(A.aaR(A.acf.Tw));this.VI.H(MG);this.VI.Aj(true);this.VI.T(
A.aaR(A.acf.APE));this.X6.H(S8);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.Animal));
this.X$.H(JZ);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.A7k));this.TI.H(US);this.TI.
Ar(true);this.TI.Aj(true);this.TI.Z(true);this.TI.T(A.aaR(A.acf.A57));this.X_.H(
Z8);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.Device));this.Yh.H(W5);this.Yh.Aj(true
);this.Yh.T(A.aaR(A.acf.Settings));this.Ay.H(Is);this.J(this.DZ,0);this.J(this.Y
,0);this.J(this.Yf,0);this.J(this.Yg,0);this.J(this.VH,0);this.J(this.X8,0);this.
J(this.VI,0);this.J(this.X6,0);this.J(this.X$,0);this.J(this.TI,0);this.J(this.X_
,0);this.J(this.Yh,0);this.J(this.Ay,0);this.N.CC=[this,this.BAg];this.N.Cl=[this
,this.XG];this.Y.El=[this,this.Fj];this.Yf.AR=[this,this.Ig];this.Yf.DB(A.aaL(A.
ach.ADG));this.Yg.AR=[this,this.Ig];this.Yg.DB(A.aaL(A.ach.ADJ));this.VH.AR=[this
,this.Ig];this.VH.DB(A.aaL(A.ach.API));this.X8.AR=[this,this.Ig];this.X8.DB(A.aaL(
A.ach.APT));this.VI.AR=[this,this.Ig];this.VI.DB(A.aaL(A.ach.AQf));this.X6.AR=[this
,this.Ig];this.X6.DB(A.aaL(A.ach.APL));this.X$.AR=[this,this.Ig];this.X$.DB(A.aaL(
A.ach.AQm));this.TI.AR=[this,this.Ig];this.TI.DB(A.aaL(A.ach.AP6));this.X_.AR=[this
,this.Ig];this.X_.DB(A.aaL(A.ach.AP3));this.Yh.AR=[this,this.Ig];this.Yh.DB(A.aaL(
A.ach.AQE));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done(
);this.Y._Done();this.Yf._Done();this.Yg._Done();this.VH._Done();this.X8._Done();
this.VI._Done();this.X6._Done();this.X$._Done();this.TI._Done();this.X_._Done();
this.Yh._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Yf._ReInit();this.Yg.
_ReInit();this.VH._ReInit();this.X8._ReInit();this.VI._ReInit();this.X6._ReInit(
);this.X$._ReInit();this.TI._ReInit();this.X_._ReInit();this.Yh._ReInit();this.Ay.
_ReInit();this.Yf.T(A.aaR(A.acf.Gr));this.Yg.T(A.aaR(A.acf.A7E));this.VH.T(A.aaR(
A.acf.Vu));this.X8.T(A.aaR(A.acf.Tw));this.VI.T(A.aaR(A.acf.APE));this.X6.T(A.aaR(
A.acf.Animal));this.X$.T(A.aaR(A.acf.A7k));this.TI.T(A.aaR(A.acf.A57));this.X_.T(
A.aaR(A.acf.Device));this.Yh.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q_={Number:null,Je:null,IR:null,TB:null,AsO:0,Init:function(aArg){var B;A.zX([
this,this.Bbm],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ_],0);A.pe([this,this.
Bbm],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An9();},CD:function(G){A.
_GetAutoObject(A.Device.Device).AhJ();},E6:function(G){A._GetAutoObject(A.Device.
Device).An1();},Al7:function(G){var F;this.Am();this.TB.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aem.Ar(true);if(!this.TB.Bw)(F=this.TB.Q,F[2].call(F[0],this.TB.
B2));},Bbm:function(s){this.Al7(s);},An9:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gk);break;case 3:this.Background.
L(A.jb.H8);break;default:this.Background.L(A.jb.CK);}},AkJ:function(E){if(this.AsO===
E)return;this.AsO=E;this.Je.AkJ(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Je._Init.call(this.Je={I:this}
,0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acl.Gm._Init.call(this.TB={I:this}
,0);this.__proto__=C.Q_;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(UT);this.Number.KS(true);this.Number.L(A.jb.Text);this.Je.H(Z9);this.Je.AkJ(0);
this.IR.H(W6);this.IR.L(A.jb.AV);this.IR.Zv(true);this.TB.Fp(1750);this.TB.Un(750
);this.TB.AkE(0);this.TB.Ar(true);this.TB.B2=3;this.J(this.Number,0);this.J(this.
Je,0);this.J(this.IR,0);this.Number.S(A.aaL(A.fl.Af));this.IR.Aw(A.aaL(A.ach.ADI
));this.TB.Q=[B=this.IR,B.ASm,B.Cw];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Je._Done();this.IR._Done();this.TB._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Je._ReInit();this.IR._ReInit();this.TB._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fm={C8:null,ADs:null,AR:null,Bo:null,Dl:null,Background:
null,Mp:null,OB:null,QZ:null,G8:null,A5j:true,LI:false,KE:false,Qp:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hg.Bl.call(this,aSize);this.Mp.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QZ.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OB.H(this.QZ.M);this.G8.H([].concat(0,this.G8.M.slice(1,4)));this.G8.H(A.abN(
this.G8.M,aSize[0]));this.G8.H(A.abP(this.G8.M,0));this.G8.H([].concat(this.G8.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hg.Ai.call(this,Ae);var Hd=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hd){this.QZ.L(A.jb.Am5);this.
G8.L(A.jb.CK);this.OB.Z(true);this.OB.L(A.jb.AQR);this.Mp.Z(false);}else if(GE){
this.QZ.L(A.jb.Bm);this.G8.L(A.jb.Bm);this.OB.Z(false);this.Mp.Z(true);}else if(
Fu){this.QZ.L(A.jb.Bm);this.G8.L(A.jb.Bm);this.OB.Z(false);this.Mp.Z(true);}else{
this.QZ.L(A.jb.Text);this.G8.L(A.jb.Text);this.OB.Z(true);this.OB.L(A.jb.CS);this.
Mp.Z(false);}this.LI=Hd;this.KE=Fu;this.Qp=GE;},Qo:function(G){this.Am();A.pe(this.
AR,this);},AiU:function(G){if(this.Dl.Acl)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G8.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QZ.
Aw(E);this.OB.Aw(E);},Ab6:function(E){if(this.A5j===E)return;this.A5j=E;this.G8.
Z(E);},Ab9:function(E){if(this.ADs===E)return;this.ADs=E;this.Mp.Aw(E);this.Mp.H(
A.abK(this.Mp.M,E.FrameSize));},_Init:function(aArg){C.Hg._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BM._Init.call(this.Dl={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mp={
I:this},0);A.acg.Ap._Init.call(this.OB={I:this},0);A.acg.Ap._Init.call(this.QZ={
I:this},0);C.CH._Init.call(this.G8={I:this},0);this.__proto__=C.Fm;this.H(Z_);this.
Bo.PP(0);this.Bo.WC(50);this.Dl.Filter=1;this.Background.H(W7);this.Background.Z(
false);this.Mp.AZ(0x14);this.Mp.L(A.jb.AV);this.Mp.Cw(0);this.OB.L(A.jb.CS);this.
OB.Cw(1);this.G8.H(Z$);this.J(this.Background,0);this.J(this.Mp,0);this.J(this.OB
,0);this.J(this.QZ,0);this.J(this.G8,0);this.Bo.Mz=[this,this.Qo];this.Dl.BN=[this
,this.AiU];this.Mp.Aw(A.aaL(A.ach.NS));this.OB.Aw(A.aaL(A.ach.AvG));this.QZ.Aw(A.
aaL(A.ach.AvG));this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Cv(
A.aaL(A.fl.Bi));this.ADs=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hg;this.Bo._Done();this.Dl._Done();this.Background._Done();this.Mp._Done(
);this.OB._Done();this.QZ._Done();this.G8._Done();C.Hg._Done.call(this);},_ReInit:
function(){C.Hg._ReInit.call(this);this.Bo._ReInit();this.Dl._ReInit();this.Background.
_ReInit();this.Mp._ReInit();this.OB._ReInit();this.QZ._ReInit();this.G8._ReInit(
);this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Cv(A.aaL(A.fl.Bi)
);},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axe:null,Background:null,OX:null,Ask:0,Ak$:10,AjH:100,AQ:0,AoY:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OX.H([].concat(2,this.OX.M.slice(1,4)));this.OX.H(A.abN(this.OX.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af4=this.Ak$<this.AjH;var AJt=(
B=this.M)[3]-B[1];var A2A=10;var Aun=AJt;var A4b=0;if(10>AJt)A2A=AJt;if(this.Ak$<
this.AjH)Aun=((Aun*this.Ak$)/this.AjH)|0;if(Aun<A2A)Aun=A2A;if(this.Ak$<this.AjH
)A4b=((this.BkM()*(AJt-Aun))/(this.AjH-this.Ak$))|0;this.OX.H(A.abP(this.OX.M,A4b
));this.OX.H([].concat(this.OX.M.slice(0,3),A4b+Aun));this.OX.Z(Af4);this.Background.
Z(Af4);if(!!this.Axe&&(this.AoY!==Af4))A.pe(this.Axe,this);this.AoY=Af4;},BkM:function(
){var E=this.Ask;var HD=this.AjH-this.Ak$;if((HD>0)&&(E>HD))E=HD;if(HD<=0)E=0;return E;
},Mx:function(E){if(E<0)E=0;if(this.Ask===E)return;this.Ask=E;this.Am();},My:function(
E){if(E<0)E=0;if(this.Ak$===E)return;this.Ak$=E;this.Am();},Mw:function(E){if(E<
0)E=0;if(this.AjH===E)return;this.AjH=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OX.L(E);},BmT:function(E){if(A.aa0(this.Axe,E))return;this.
Axe=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.OX={I:this},0);this.__proto__=
C.Ay;this.H(Aaa);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UU);this.Background.L(A.jb.CS);this.OX.AZ(0x0);this.OX.H(UU);this.OX.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OX,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OX._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axe)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cd={Hh:null,Y:null,Ay:null,Ap:null,A6M:A.jV,Init:function(aArg){A.pe([this,this.
AA8],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);this.AA8(this);},Al3:
function(G){if(!!this.N.CC)A.pe(this.N.CC,this);},ApO:function(G){if(!!this.N.Cm
)A.pe(this.N.Cm,this);},AAA:function(G){if(!!this.N.Cl)A.pe(this.N.Cl,this);},Fj:
function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[
3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);A.pe([this,this.BAC],this);},AA8:function(G){
var B;var GX=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.CY(A.
aaL(A.ach.V3));this.N.CC=[this,this.Ev];if(!!GX&&!!GX.Amr){this.N.FN(A.jV);this.
N.Kw.Ds(255);this.N.ArS(GX.AqU);this.N.Ct(GX.AvD);this.N.Cl=GX.Amr;}else{this.N.
FN(A.jV);this.N.Ct(null);this.N.Cl=null;}if(!!GX&&!!GX.Agt){this.N.CV(GX.AxK);this.
N.HS.Ds(GX.Axf);this.N.AnA(GX.AmU);this.N.C6(GX.Aq$);this.N.Cm=GX.Agt;}else{this.
N.CV(A.jV);this.N.C6(null);this.N.Cm=null;}},I_:function(E){if(this.A6M===E)return;
this.A6M=E;this.Hh.R(E);},Ev:function(G){A._GetAutoObject(C.A$).Fy();},BAC:function(
G){var B;var Bzz=this.Ay.Background.Fo();var Bdw=(Bzz?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Aji=X;
X=X.Ah;if(((Aji.U&0x400)===0x400)){if(!!(A.Core.Akk.isPrototypeOf(Aji)?Aji:null)
){var BdC=(A.Core.Akk.isPrototypeOf(Aji)?Aji:null);BdC.DC([Bdw,BdC.EC[1]]);}else
if(!!(A.Core.Et.isPrototypeOf(Aji)?Aji:null)){var Bfx=(A.Core.Et.isPrototypeOf(Aji
)?Aji:null);Bfx.H(A.abN(Bfx.M,Bdw));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hh={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cd;this.N.Z(true);this.Hh.H(W8);this.Hh.Ar(false);this.Hh.R(A.aaR(A.
acf.Settings));this.Hh.L(A.jb.Text);this.Y.H(Fe);this.Y.JP(1);this.Ay.H(Is);this.
Ap.H(P7);this.Ap.L(A.jb.Text);this.J(this.Hh,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));this.Y.
El=[this,this.Fj];this.Ap.Aw(A.aaL(A.ach.AC$));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hh._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hh._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hh.R(A.aaR(A.acf.Settings
));this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq4={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgs],[B=
A._GetAutoObject(A.Device.Helper),B.U1,B.U4],0);},De:function(E){C.BR.De.call(this
,E);this.Text.L(E);},Bgs:function(G){this.Text.R(A._GetAutoObject(A.acj.KK).Bil(
A._GetAutoObject(A.Device.Helper).Dq()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq4;this.Timer.WC(1);this.Timer.Ar(true);
this.Text.H(Aab);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mz=[this,this.
Bgs];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KT:0xFFFFFFFF,LS:0,De:function(E){if(
this.KT===E)return;this.KT=E;},WA:function(E){if(this.LS===E)return;this.LS=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(O2
);},_className:"Application::HeaderContent"};C.N={VV:null,VX:null,VY:null,Ag1:null
,Ag2:null,Ag3:null,CC:null,Cl:null,Cm:null,Background:null,NG:null,Jc:null,Kw:null
,HS:null,Pw:null,I6:null,Ld:null,TZ:null,T0:null,An3:A.jV,An4:A.jV,An5:A.jV,Ara:
0,Arb:0,Arc:0,Ahi:0,ZH:false,ZG:false,Asq:false,AsE:false,AsD:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VV)this.Jc.S(this.VV);if(!!this.VX)this.Kw.S(this.
VX);if(!!this.VY)this.HS.S(this.VY);switch(this.Ahi){case 0:{this.NG.Z(false);this.
Jc.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HS.L(A.jb.Bm);this.Pw.L(A.jb.Bm);this.I6.L(
A.jb.Bm);this.Ld.L(A.jb.Bm);}break;case 1:{if(!this.Ag1)this.NG.H(A.aaT(this.Jc.
ASd(),Rl));else this.NG.H(this.Pw.Db());this.NG.Z(true);this.Jc.L(A.jb.Text);this.
Kw.L(A.jb.Bm);this.HS.L(A.jb.Bm);this.Pw.L(A.jb.Text);this.I6.L(A.jb.Bm);this.Ld.
L(A.jb.Bm);}break;case 3:{if(!this.Ag3)this.NG.H(A.aaT(this.HS.ASd(),Rl));else this.
NG.H(this.Ld.Db());this.NG.Z(true);this.Jc.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HS.
L(A.jb.Text);this.Pw.L(A.jb.Bm);this.I6.L(A.jb.Bm);this.Ld.L(A.jb.Text);}break;case
2:{if(!this.Ag2)this.NG.H(A.aaT(this.Kw.ASd(),Rl));else this.NG.H(this.I6.Db());
this.NG.Z(true);this.Jc.L(A.jb.Bm);this.Kw.L(A.jb.Text);this.HS.L(A.jb.Bm);this.
Pw.L(A.jb.Bm);this.I6.L(A.jb.Text);this.Ld.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W9);}}if(!!this.Pw.Al){this.Pw.Z(true);this.Jc.Z(false);}else{
this.Pw.Z(false);this.Jc.Z(true);}if(this.An4.length<=0){this.I6.Z(true);this.Kw.
Z(false);}else{this.I6.Z(false);this.Kw.Z(true);}if(!!this.Ld.Al){this.Ld.Z(true
);this.HS.Z(false);}else{this.Ld.Z(false);this.HS.Z(true);}},Hy:function(E){if(this.
An3===E)return;this.An3=E;this.Jc.R(E);this.Am();},FN:function(E){if(this.An4===
E)return;this.An4=E;this.Kw.R(E);this.Am();},CV:function(E){if(this.An5===E)return;
this.An5=E;this.HS.R(E);this.Am();},AFe:function(E){if(this.Ahi===E)return;this.
Ahi=E;this.Am();},AE7:function(E){if(this.VV===E)return;this.VV=E;this.Jc.S(E);this.
Am();},ArS:function(E){if(this.VX===E)return;this.VX=E;this.Kw.S(E);this.Am();},
AnA:function(E){if(this.VY===E)return;this.VY=E;this.HS.S(E);this.Am();},A3r:function(
G){this.Am();},CY:function(E){if(this.Ag1===E)return;this.Ag1=E;this.Pw.Aw(E);this.
Am();},Ct:function(E){if(this.Ag2===E)return;this.Ag2=E;this.I6.Aw(E);this.Am();
},C6:function(E){if(this.Ag3===E)return;this.Ag3=E;this.Ld.Aw(E);this.Am();},ON:
function(E){if(this.AsD===E)return;this.AsD=E;this.TZ.Z(E);if(E)this.Jc.H([].concat(
this.TZ.M[2],this.Jc.M.slice(1,4)));else this.Jc.H([].concat(0,this.Jc.M.slice(1
,4)));this.Am();},OO:function(E){if(this.AsE===E)return;this.AsE=E;this.T0.Z(E);
if(E)this.HS.H(A.abN(this.HS.M,this.T0.M[0]));else this.HS.H(A.abN(this.HS.M,this.
M[2]));this.Am();},Bmf:function(E){if(this.Ara===E)return;this.Ara=E;this.Pw.Cw(
E);this.Am();},AS1:function(E){if(this.Arb===E)return;this.Arb=E;this.I6.Cw(E);this.
Am();},A9Q:function(E){if(this.Arc===E)return;this.Arc=E;this.Ld.Cw(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Jc={I:this
},0);C.CH._Init.call(this.Kw={I:this},0);C.CH._Init.call(this.HS={I:this},0);A.acg.
Ap._Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I6={I:this},0);A.acg.
Ap._Init.call(this.Ld={I:this},0);A.acg.Ap._Init.call(this.TZ={I:this},0);A.acg.
Ap._Init.call(this.T0={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.Ad$);this.NG.H(W_);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Jc.AZ(0x14);this.Jc.H(W$);this.Jc.A6(0x12);this.
Kw.AZ(0x14);this.Kw.H(Xa);this.Kw.A6(0x12);this.HS.H(Aac);this.Pw.H(Xb);this.I6.
H(Xc);this.Ld.H(S9);this.Ld.Z(false);this.TZ.H(UV);this.TZ.Z(false);this.T0.H(UW
);this.T0.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Jc,0);
this.J(this.Kw,0);this.J(this.HS,0);this.J(this.Pw,0);this.J(this.I6,0);this.J(this.
Ld,0);this.J(this.TZ,0);this.J(this.T0,0);this.Jc.S(A.aaL(A.fl.Ak));this.Jc.A2(A.
aaL(A.fl.Bi));this.Jc.Q4([this,this.A3r]);this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.
aaL(A.fl.Bi));this.Kw.Q4([this,this.A3r]);this.HS.S(A.aaL(A.fl.Ak));this.HS.A2(A.
aaL(A.fl.Bi));this.HS.Q4([this,this.A3r]);this.VV=A.aaL(A.fl.Ak);this.VX=A.aaL(A.
fl.Ak);this.VY=A.aaL(A.fl.Ak);this.Pw.Aw(null);this.I6.Aw(null);this.Ld.Aw(null);
this.TZ.Aw(A.aaL(A.ach.AMG));this.T0.Aw(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.
Jc._Done();this.Kw._Done();this.HS._Done();this.Pw._Done();this.I6._Done();this.
Ld._Done();this.TZ._Done();this.T0._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Jc.
_ReInit();this.Kw._ReInit();this.HS._ReInit();this.Pw._ReInit();this.I6._ReInit(
);this.Ld._ReInit();this.TZ._ReInit();this.T0._ReInit();this.Jc.S(A.aaL(A.fl.Ak)
);this.Jc.A2(A.aaL(A.fl.Bi));this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(A.fl.Bi)
);this.HS.S(A.aaL(A.fl.Ak));this.HS.A2(A.aaL(A.fl.Bi));this.AE7(A.aaL(A.fl.Ak));
this.ArS(A.aaL(A.fl.Ak));this.AnA(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HS)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADd={Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper),B.ArB,B.AkI],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper)
,B.A8P,B.AFC],0);A.pe([this,this.Nm],this);},DY:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhF)this.Ab8(A._GetAutoObject(A.Device.Helper).AhF.AOO());else this.
Ab8(-1);if(!!A._GetAutoObject(A.Device.Helper).Uz)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak9(A._GetAutoObject(A.Device.Helper).Uz.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.__proto__=C.ADd;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGQ={Ex:null,Eh:null,
FY:null,X4:null,TC:null,IF:null,IG:null,Init:function(aArg){},WJ:function(G){var
B;C.DR.WJ.call(this,G);var AKI=this.Azl(A._GetAutoObject(A.Device.Helper).UF.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALx=this.Azl(A._GetAutoObject(
A.Device.Helper).UG.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzp=
this.Azl(A._GetAutoObject(A.Device.Device).AcJ);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKI));this.IG.H(A.abO(this.
IG.M,this.Ex.M[3]-((((B=this.IG.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALx));this.
IF.H(A.abO(this.IF.M,(this.Eh.M[3]-((((B=this.IF.M)[3]-B[1])/2)|0))+2));this.FY.
H(A.abP(this.FY.M,this.Eh.M[3]));this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzp));this.TC.H(A.abO(this.TC.M,this.FY.M[3]-((((B=this.TC.M)[3]-B[1
])/2)|0)));this.X4.H(A.abP(this.X4.M,this.FY.M[3]));this.X4.H([].concat(this.X4.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJG:function(AoU){return A._GetAutoObject(A.
Device.Converter).Ak4(AoU);},AKd:function(){return A._GetAutoObject(A.acj.Temperature
).AlN();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.
FY={I:this},0);A.acg.AK._Init.call(this.X4={I:this},0);A.acg.AK._Init.call(this.
TC={I:this},0);A.acg.AK._Init.call(this.IF={I:this},0);A.acg.AK._Init.call(this.
IG={I:this},0);this.__proto__=C.AGQ;this.Ex.AZ(0xD);this.Ex.H(AcQ);this.Ex.L(A.jb.
Gk);this.Eh.AZ(0xD);this.Eh.H(S_);this.Eh.L(A.jb.H8);this.FY.AZ(0xD);this.FY.H(Aad
);this.FY.L(A.jb.E4);this.X4.AZ(0xD);this.X4.H(Afz);this.X4.L(A.jb.Afs);this.TC.
AZ(0xD);this.TC.H(Aae);this.TC.Aws(A.jb.Afs);this.TC.Awt(A.jb.Afs);this.TC.Awv(A.
jb.E4);this.TC.Awu(A.jb.E4);this.IF.AZ(0xD);this.IF.H(Xd);this.IF.Aws(A.jb.E4);this.
IF.Awt(A.jb.E4);this.IF.Awv(A.jb.H8);this.IF.Awu(A.jb.H8);this.IG.AZ(0xD);this.IG.
H(Aaf);this.IG.Aws(A.jb.H8);this.IG.Awt(A.jb.H8);this.IG.Awv(A.jb.Gk);this.IG.Awu(
A.jb.Gk);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FY,-1);this.J(this.X4
,-1);this.J(this.TC,-1);this.J(this.IF,-1);this.J(this.IG,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FY._Done(
);this.X4._Done();this.TC._Done();this.IF._Done();this.IG._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FY._ReInit();this.X4._ReInit();this.TC._ReInit();this.IF._ReInit();this.IG.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cp={Avi:null,AmU:null,AQb:null,Aq$:null,AqU:null,AvD:null,AR:null,Agt:null,Amr:
null,N:null,Bo:null,QP:null,AxK:A.jV,AUD:false,AGE:false,Apk:false,Axf:255,LI:false
,KE:false,Qp:false,Ai:function(Ae){var B;C.OU.Ai.call(this,Ae);var Hd=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var IA=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=
A.jb.CK;var GW=A.jb.Text;if(this.Hj){FS=A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.
L(A.jb.CS);this.V.L(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.Am5);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GW
);}this.LI=Hd;this.KE=Fu;this.Qp=GE;this.Apk=IA;},Qo:function(G){this.Am();A.pe(
this.AR,this);},Bwj:function(s){this.Qo(s);},IY:function(G){if(this.QP.Acl)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atj:function(s){this.IY(s);},AeU:function(E){if(A.aa0(this.Agt,E))return;this.
Agt=E;},A_i:function(E){if(this.AxK===E)return;this.AxK=E;},WD:function(E){if(this.
Avi===E)return;this.Avi=E;},WE:function(E){if(this.AmU===E)return;this.AmU=E;},A90:
function(E){if(this.Axf===E)return;this.Axf=E;},Gs:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALf();},A20:
function(G){},BGa:function(s){this.A20(s);},AkD:function(E){if(this.Aq$===E)return;
this.Aq$=E;},LY:function(E){if(A.aa0(this.Amr,E))return;this.Amr=E;},Bl_:function(
E){if(this.AqU===E)return;this.AqU=E;},L1:function(E){if(this.AvD===E)return;this.
AvD=E;},ZB:function(E){if(this.AGE===E)return;this.AGE=E;this.ALf();},ALf:function(
){var B;var Qv=this.DK;if(this.AGE)Qv=Qv+A.aaR(A.acf.Colon);if(this.AUD)Qv=Qv+Aag;
this.V.R(Qv);},ATm:function(E){if(this.AUD===E)return;this.AUD=E;this.ALf();},_Init:
function(aArg){C.OU._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BM._Init.call(this.QP={I:this},0);this.__proto__=C.Cp;this.Bo.PP(0);
this.Bo.WC(50);this.Bo.Ar(false);this.QP.Filter=1;this.Bo.Mz=[this,this.Bwj];this.
QP.BN=[this,this.Atj];this.Avi=A.aaL(A.fl.Ak);this.AmU=A.aaL(A.fl.Ak);this.AQb=A.
aaL(A.ach.E5);this.AqU=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OU;this.
Bo._Done();this.QP._Done();C.OU._Done.call(this);},_ReInit:function(){C.OU._ReInit.
call(this);this.Bo._ReInit();this.QP._ReInit();this.WD(A.aaL(A.fl.Ak));this.WE(A.
aaL(A.fl.Ak));this.Bl_(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqU)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agt)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Du={Q:null,Ane:null,Ang:null,Hx:null,H4:null,AM:0,Gq:0,Gb:100,FF:0,Init:function(
aArg){},IY:function(G){this.FF=1;C.Eg.IY.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hx.H([0,aSize[1]-40,40,aSize[1]]);this.H4.H([].concat(A.
abe(aSize,AhV),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fu=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hx.L(this.V.AQ);this.H4.L(this.V.AQ);this.Hx.
Z((Fu||GE)&&(this.AM>this.Gq));this.H4.Z((Fu||GE)&&(this.AM<this.Gb));if(this.FF===
6)this.Hx.L(A.jb.E4);if(this.FF===7)this.H4.L(A.jb.E4);},BeG:function(G){this.FF=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyM],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qo:function(G){if(this.FF===6)A.pe([this,this.AyM],this);if(this.FF===
7)A.pe([this,this.AyN],this);if(this.FF===1)A.pe(this.AR,this);this.FF=0;this.Am(
);},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},AcW:function(
s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,
this.AcW],this);},BeH:function(G){this.FF=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyN],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J$:function(G){this.FF=0;}
,AyN:function(s){this.J$(s);},J6:function(G){this.FF=0;},AyM:function(s){this.J6(
s);},By:function(E){if(E<this.Gq)E=this.Gq;if(E>this.Gb)E=this.Gb;if(this.AM===E
)return;this.AM=E;this.Am();},BaP:function(Aq){this.By(Aq);},Gc:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.Gb===E)return;this.Gb=
E;this.Am();},Uh:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BM._Init.call(this.Ane={I:this},0);A.Core.BM._Init.call(this.Ang={
I:this},0);A.acg.Ap._Init.call(this.Hx={I:this},0);A.acg.Ap._Init.call(this.H4={
I:this},0);this.__proto__=C.Du;this.H(J0);this.Ane.Filter=6;this.Ang.Filter=7;this.
Background.H(J0);this.V.H(Aah);this.V.R(Lv);this.Hx.H(AhW);this.H4.H(Aof);this.H4.
Cw(1);this.J(this.Hx,0);this.J(this.H4,0);this.Ane.BN=[this,this.BeG];this.Ane.D1=[
this,this.BeG];this.Ang.BN=[this,this.BeH];this.Ang.D1=[this,this.BeH];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(null);this.Hx.Aw(A.aaL(A.ach.
Ajw));this.H4.Aw(A.aaL(A.ach.Ajw));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Ane._Done();this.Ang._Done();this.Hx._Done();this.H4._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Ane._ReInit();this.
Ang._ReInit();this.Hx._ReInit();this.H4._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dn:function(){return-1;},C4:function(aIndex){return-1;},F$:function(
aIndex){return A.jV;},DU:function(A8){return-1;},HK:function(){return-1;},As:function(
E){this.Q=E;},B8:function(Aq){this.As(Aq);},ACT:function(aIndex){return null;},ACV:
function(aIndex){return 0;},B7:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iq={AxB:null
,BT:null,AG3:A.jV,AVg:A.jV,Aj8:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Du.Ai.call(this,Ae);if(!this.AxB){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVg);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG3);}}else(B=
this.AxB)?B[1].call(B[0],this):null;},J$:function(G){var F;var BQ=this.AM;C.Du.J$.
call(this,G);this.By(this.AM+this.Aj8);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J6:function(G){var F;var BQ=this.AM;C.
Du.J6.call(this,G);this.By(this.AM-this.Aj8);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IO:function(E){if(this.AG3===E)return;
this.AG3=E;this.Am();},I$:function(E){if(this.AVg===E)return;this.AVg=E;this.Am(
);},AS2:function(E){if(this.Aj8===E)return;this.Aj8=E;},A_f:function(E){if(A.aa0(
this.AxB,E))return;this.AxB=E;},_Init:function(aArg){C.Du._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Iq;this.H(J0);this.BT.H(N$);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Du;this.BT._Done();C.Du._Done.call(this
);},_ReInit:function(){C.Du._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Du._Mark.call(this
,D);if((B=this.AxB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dy:null,HN:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Du.Bl.call(this,aSize);this.Dy.H([this.Hx.M[2]-10,this.Hx.M[1],this.
H4.M[0]+10,this.Hx.M[3]]);this.Dy.AFf((B=this.Dy.M)[2]-B[0]);this.Dy.HI(this.Dy.
Gt,true,null,null);},Ai:function(Ae){var B;C.Du.Ai.call(this,Ae);var Fu=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dy.AbJ(0,this.Dy.AY-1);this.Hx.Z(Fu||GE);this.H4.
Z(Fu||GE);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.
Q,F[1].call(F[0]))));},J$:function(G){var F;var BQ=this.AM;C.Du.J$.call(this,G);
this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BQ=this.AM;
C.Du.J6.call(this,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){
var Qu=0;if(E<this.Gq){E=this.Gb;Qu=-this.Dy.Wc*this.Dy.AY;}if(E>this.Gb){E=this.
Gq;Qu=this.Dy.Wc;}C.Du.By.call(this,E);if(!!Qu)this.Dy.Gd(Qu);this.Dy.GS(this.AM
);if(this.Dy.Bjh())this.Dy.BoI(false,false);this.Dy.HI(this.Dy.Gt,true,this.HN,null
);},Hk:function(G){var B;var Gh=this.Dy.G4;var Cz=(C.CH.isPrototypeOf(B=this.Dy.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.Aw1(19);Cz.A2(this.V.AmT);Cz.Bm3(19
);Cz.Cv(this.V.AqT);Cz.Bm4(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.F$(Gh));
else Cz.R(Xe);Cz.H(A.abK(Cz.M,[this.Dy.Wc,(B=this.Dy.M)[3]-B[1]]));},BvX:function(
s){this.Hk(s);},CI:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gc(0);this.EV(this.AC.Dn()-1);this.Dy.Jw(this.AC.Dn());this.Dy.AbJ(0,this.Dy.AY-
1);}},_Init:function(aArg){C.Du._Init.call(this,aArg);A.Core.Dy._Init.call(this.
Dy={I:this},0);A.acl.Gm._Init.call(this.HN={I:this},0);this.__proto__=C.BW;this.
H(J0);this.Dy.NZ(C.CH);this.HN.WG(23);this.HN.HO(1);this.HN.Fp(200);this.J(this.
Dy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dy.Hk=[this,this.BvX
];this.Init(aArg);},_Done:function(){this.__proto__=C.Du;this.Dy._Done();this.HN.
_Done();C.Du._Done.call(this);},_ReInit:function(){C.Du._ReInit.call(this);this.
Dy._ReInit();this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SQ={FI:null,OE:null,Dj:null,Au:null,Ju:null,HM:null,Pq:null,VT:null,QY:null,
Yp:null,P2:null,Gy:null,Gx:null,FZ:0,A9:0,Asn:false,Bjd:false,Init:function(aArg
){},Ai:function(Ae){C.Du.Ai.call(this,Ae);this.Hx.Z(false);this.H4.Z(false);var AtS=
A.jV;if(!!this.Dj){this.Pq.R(this.Au.Format(Aog));this.QY.R(this.Au.Format(AhX));
this.P2.R(this.Au.Format(AhY));}if(this.A9===1){this.HM.Z(true);this.HM.H(this.Pq.
M);this.HM.L(this.V.AQ);this.Pq.L(this.Background.AQ);this.QY.L(this.V.AQ);this.
P2.L(this.V.AQ);AtS=A.aaR(A.acf.A5D);}else if(this.A9===2){this.HM.Z(true);this.
HM.H(this.QY.M);this.HM.L(this.V.AQ);this.Pq.L(this.V.AQ);this.QY.L(this.Background.
AQ);this.P2.L(this.V.AQ);AtS=A.aaR(A.acf.Hi);}else if(this.A9===3){this.HM.Z(true
);this.HM.H(this.P2.M);this.HM.L(this.V.AQ);this.Pq.L(this.V.AQ);this.QY.L(this.
V.AQ);this.P2.L(this.Background.AQ);AtS=A.aaR(A.acf.Year);}else{this.HM.Z(false);
this.Pq.L(this.V.AQ);this.Yp.L(this.V.AQ);this.QY.L(this.V.AQ);this.VT.L(this.V.
AQ);this.P2.L(this.V.AQ);}if(AtS.length>0){if(this.AGE)this.V.R((((this.DK+Rm)+AtS
)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+Rm)+AtS
)+String.fromCharCode(0x29));}else this.ALf();},Qo:function(G){if(this.FF===1)A.
pe([this,this.Va],this);else if(this.FF===4)A.pe([this,this.AiJ],this);else if(this.
FF===5)A.pe([this,this.Aiu],this);C.Du.Qo.call(this,G);},J$:function(G){switch(this.
A9){case 0:C.Du.J$.call(this,G);break;case 3:break;default:this.Adv(this);}},J6:
function(G){switch(this.A9){case 0:C.Du.J6.call(this,G);break;default:this.Ait(this
);}},Adx:function(G){var F;if(!!this.Dj)this.Ul((F=this.Dj,F[1].call(F[0])));},Ab$:
function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adx],this.Dj
,0);this.Dj=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);
},Ul:function(E){if(this.FZ===E)return;this.FZ=E;this.Au.Initialize(this.FZ);this.
Am();},Adv:function(G){this.FF=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Va],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbk:function(s){this.Adv(s);},Va:function(
G){this.Ew(this.A9+1);},Al6:function(G){this.FF=4;this.Am();if(this.Bo.Bw){A.pe([
this,this.AiJ],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al5:function(G){this.
FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aiu],this);this.Bo.Ar(false);}this.
Bo.Ar(true);},AiJ:function(G){var B;var F;var BQ=this.FZ;switch(this.A9){case 1:{
if(this.Asn){var ABf=A._NewObject(A.Core.An6,0);ABf.Kj=1;if(this.Au.J(ABf).JO()>
A._GetAutoObject(A.Device.Helper).Dq())return;}if(this.Au.GK<this.Au.Zs())this.Au.
Lo(this.Au.GK+1);}break;case 2:{if(this.Asn){var ABf=A._NewObject(A.Core.An6,0);
ABf.Kj=this.Au.Zs();if(this.Au.J(ABf).JO()>A._GetAutoObject(A.Device.Helper).Dq(
))return;}this.Au.Uq(this.Au.Hi+1);if(this.Au.Zs()<this.Au.GK)this.Au.Lo(this.Au.
Zs());}break;case 3:{if(this.Asn){var A1m=A._NewObject(A.Core.Bs,0);A1m.Initialize(
this.Au.JO());A1m.Year+=1;if(A1m.JO()>A._GetAutoObject(A.Device.Helper).Dq())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Ul(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FZ!==BQ){if(!!this.Dj)(F=this.
Dj,F[2].call(F[0],this.FZ));A.abo(this.Dj,0);}},Aiu:function(G){var B;var F;var BQ=
this.FZ;if(this.A9===1)this.Au.Lo(this.Au.GK-1);if(this.A9===2){this.Au.Uq(this.
Au.Hi-1);if(this.Au.Zs()<this.Au.GK)this.Au.Lo(this.Au.Zs());}if(this.A9===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Ul(((B=(this.Au.JO()|
0))<0)?B+0x100000000:B);if(this.FZ!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],
this.FZ));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[
0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[
0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aez));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.Va];}break;case 2:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aez));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.Va];}break;case 3:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.FI.AkT((F=this.N,F[1].call(F[
0])));}},AFz:function(E){if(this.Asn===E)return;this.Asn=E;},FV:function(G){this.
Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;var AAo=this.A9;if(!this.
A9){this.FI.AjD((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.FZ){var BQ=this.FZ;
this.Ul(A._GetAutoObject(A.Device.Helper).Dq());if(this.FZ!==BQ){if(!!this.Dj)(F=
this.Dj,F[2].call(F[0],this.FZ));A.abo(this.Dj,0);}}}this.A9=EN;this.Bjd=true;if((
this.A9<0)||(this.A9>3))this.A9=0;this.DJ(this);this.Gy.Bw=!!this.A9;this.Gx.Bw=
!!this.A9;if((!!AAo&&!this.A9)&&!!this.OE)A.pe(this.OE,this);this.Am();},Ait:function(
G){if(this.A9>1)this.Ew(this.A9-1);},_Init:function(aArg){C.Du._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BM._Init.call(this.Ju={I:this}
,0);A.acg.AK._Init.call(this.HM={I:this},0);A.acg.Text._Init.call(this.Pq={I:this
},0);A.acg.Text._Init.call(this.VT={I:this},0);A.acg.Text._Init.call(this.QY={I:
this},0);A.acg.Text._Init.call(this.Yp={I:this},0);A.acg.Text._Init.call(this.P2={
I:this},0);A.Core.BM._Init.call(this.Gy={I:this},0);A.Core.BM._Init.call(this.Gx={
I:this},0);this.__proto__=C.SQ;this.H(UX);this.V.R(Aoh);this.Hx.Z(false);this.H4.
Z(false);this.Ju.Filter=1;this.HM.H(Aoi);this.HM.L(0x55FFFFFF);this.Pq.H(Aoj);this.
Pq.I9(true);this.Pq.A6(0x14);this.VT.H(Aok);this.VT.I9(true);this.VT.A6(0x14);this.
VT.R(AfA);this.QY.H(Ale);this.QY.I9(true);this.Yp.H(Aol);this.Yp.I9(true);this.Yp.
R(AfA);this.P2.H(Ax2);this.P2.I9(true);this.P2.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);this.J(this.Pq,0);this.
J(this.VT,0);this.J(this.QY,0);this.J(this.Yp,0);this.J(this.P2,0);this.Ju.BN=[this
,this.Bbk];this.Pq.S(A.aaL(A.fl.EK));this.VT.S(A.aaL(A.fl.EK));this.QY.S(A.aaL(A.
fl.EK));this.Yp.S(A.aaL(A.fl.EK));this.P2.S(A.aaL(A.fl.EK));this.Gy.BN=[this,this.
Al6];this.Gy.D1=[this,this.AiJ];this.Gx.BN=[this,this.Al5];this.Gx.D1=[this,this.
Aiu];this.FI=A._NewObject(C.Aes,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Du;this.Au._Done();this.Ju._Done();this.HM._Done();this.Pq._Done();this.VT._Done(
);this.QY._Done();this.Yp._Done();this.P2._Done();this.Gy._Done();this.Gx._Done(
);C.Du._Done.call(this);},_ReInit:function(){C.Du._ReInit.call(this);this.Au._ReInit(
);this.Ju._ReInit();this.HM._ReInit();this.Pq._ReInit();this.VT._ReInit();this.QY.
_ReInit();this.Yp._ReInit();this.P2._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pq.S(A.aaL(A.fl.EK));this.VT.S(A.aaL(A.fl.EK));this.QY.S(A.aaL(A.fl.EK));
this.Yp.S(A.aaL(A.fl.EK));this.P2.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Du._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OH={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bdz],[B=A._GetAutoObject(A.Device.Device),B.A8y,B.BaW],0);
A.pe([this,this.Bdz],this);},Dn:function(){return 16;},F$:function(aIndex){return this.
LanguageToString.BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(
A.Device.Device).AnD(E);},Bdz:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OH;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,5);this.Cb.
Set(3,3);this.Cb.Set(4,8);this.Cb.Set(5,9);this.Cb.Set(6,7);this.Cb.Set(7,6);this.
Cb.Set(8,10);this.Cb.Set(9,2);this.Cb.Set(10,11);this.Cb.Set(11,12);this.Cb.Set(
12,13);this.Cb.Set(13,14);this.Cb.Set(14,15);this.Cb.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cn;this.LanguageToString._Done();C.Cn._Done.
call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rd={TemperatureUnitToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Aw5(E);}
,Init:function(aArg){var B;A.zX([this,this.Bf8],[B=A._GetAutoObject(A.Device.Device
),B.ArC,B.Ati],0);A.pe([this,this.Bf8],this);},Bf8:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rd;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUW={AjB:null,AcF:null,Kx:null,AP:null,A_:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.AjB.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcF.H(this.AjB.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kx.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hq=Ad;if(!!this.AX){var AlE=this.AX.Hv(Ad,6);var ApZ=this.AX.CF(Ad,
7);var At8=this.AX.I4(Ad,9);this.T(A._GetAutoObject(A.acj.KK).ACP(AlE));this.Kx.
R(A._GetAutoObject(A.acj.KK).A6m(AlE));this.AcF.R(A._GetAutoObject(A.Device.Converter
).Ak4(ApZ));this.AcF.L(A._GetAutoObject(A.acj.Assessment).XA(At8));this.AjB.L(A.
_GetAutoObject(A.acj.Assessment).Ql(At8));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AK._Init.call(this.AjB={I:this},0);A.acg.Text._Init.
call(this.AcF={I:this},0);A.acg.Text._Init.call(this.Kx={I:this},0);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AUW;this.V.H(O3);this.AcF.L(A.jb.Text);this.Kx.R(Rn);this.Kx.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A_.H(Ax3);this.A_.L(A.jb.Bc);this.J(this.AjB,0);this.J(this.AcF
,0);this.J(this.Kx,0);this.J(this.AP,0);this.J(this.A_,0);this.AcF.S(A.aaL(A.fl.
Af));this.Kx.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.AjB._Done();this.AcF._Done();this.Kx._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AjB._ReInit(
);this.AcF._ReInit();this.Kx._ReInit();this.AP._ReInit();this.A_._ReInit();this.
AcF.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Ge={AX:null,AR:null,Cr:null,AD:
null,Afj:null,QE:null,KM:A.jV,Li:null,AVi:true,Hk:function(G){var B;var Gh=this.
AD.G4;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zw(this.
AX);Aa.Ce(Gh);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GN]));
},NZ:function(E){if(E===this.Li)return;this.Li=E;this.AD.NZ(E);},Zw:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AVi===
false)return;if(!!this.AX){this.AD.Jw(this.AX.B$());this.AD.AbJ(0,this.AD.AY-1);
}else this.AD.Jw(0);if((this.AD.AY>0)&&(this.FK()<0))this.GS(0);if(this.FK()>=this.
AD.AY){this.GS(0);this.AD.Gd(0);}if(this.AD.AY<=0){this.QE.Z(true);this.GS(-1);}
else{this.QE.Z(false);this.ABE(null,null);}},Fj:function(G){var B;this.Afj.Mw(this.
AD.GN*this.AD.AY);this.Afj.My((B=this.AD.M)[3]-B[1]);this.Afj.Mx(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cr.CO){case 4:if(this.FK()>0)this.GS(
this.FK()-1);break;case 5:if(this.FK()<(this.AD.AY-1))this.GS(this.FK()+1);break;
default:this.Cr.NH=true;}this.AD.HI(this.FK(),true,null,null);}else if((this.Cr.
CO!==4)&&(this.Cr.CO!==5))this.Cr.NH=true;},Zy:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbJ(0,this.AD.AY);},GS:function(E){this.AD.GS(E);this.AD.HI(E,
true,null,null);},FK:function(){return this.AD.Gt;},Dz:function(E){if(this.KM===
E)return;this.KM=E;this.QE.R(E);},ABE:function(AcZ,E8){this.AD.ABE(AcZ,E8);},ATB:
function(E){if(this.AVi===E)return;this.AVi=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afj={I:this},
0);A.acg.Text._Init.call(this.QE={I:this},0);this.__proto__=C.Ge;this.H(UY);this.
Li=C.Ba;this.Cr.Filter=147;this.AD.AZ(0x3F);this.AD.H(UY);this.AD.Ae6(40);this.Afj.
AZ(0x3A);this.Afj.H(AsX);this.QE.AZ(0x3F);this.QE.H(Ax4);this.QE.Hl(10);this.QE.
KS(true);this.QE.A6(0xA);this.QE.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afj,
0);this.J(this.QE,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,this.DE];this.AD.
El=[this,this.Fj];this.AD.Hk=[this,this.Hk];this.QE.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cr._Done();this.AD._Done();this.Afj._Done();this.
QE._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cr._ReInit();this.AD._ReInit();this.Afj._ReInit();this.QE._ReInit();this.
QE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hq:-1,CP:function(){this.Ce(this.Hq);},Ai:function(Ae){var B;C.Cp.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hq%2)===1)this.Background.L(A.
jb.CK);else this.Background.L(A.jb.CS);}},Zw:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",Ax5);},_Init:function(aArg){C.Cp._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cp._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GZ={Bg:null,FB:null
,DP:null,FJ:null,V1:null,Kh:null,KM:A.jV,ATY:0,ATZ:0,Afk:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dt(0);A.pe([this,this.BaB],this);}},Init:function(aArg){var B;A.zX([this,this.
Bee],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIJ],0);A.zV([this,this.Af_],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcK],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BAH],[B=A._GetAutoObject(A.Device.Helper),B.U1,B.U4
],0);A.pe([this,this.AcK],this);A.pe([this,this.A0h],this);A.pe([this,this.Axw],
this);},Wz:function(G){this.Agu();var O;for(O=this.Kh.Dn()-1;O>=0;O=O-1)switch(this.
Kh.C4(O)){case 0:this.AdQ(A.aaR(A.acf.A4N),[this,this.Bnp],0);break;case 14:this.
AdQ(A.aaR(A.acf.BgN),[this,this.Bnq],14);break;case 1:this.AdQ(A.aaR(A.acf.Temperature
),[this,this.ATD],1);break;case 2:this.AdQ(A.aaR(A.acf.Rating),[this,this.ATC],2
);break;case 3:this.AdQ(A.aaR(A.acf.Aft),[this,this.ATE],3);break;default:A.ab5(
"%s",Ax6);}A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BhL
));A._GetAutoObject(A.Device.Device).Dt(6);},BaB:function(s){this.Wz(s);},DE:function(
G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var AfX=this.Kh.DU(A._GetAutoObject(
A.Device.Device).Kh);if(this.Afk)return;switch(D5.CO){case 6:{AfX=AfX-1;if(AfX<0
)AfX=this.Kh.Dn()-1;A._GetAutoObject(A.Device.Device).Zu(this.Kh.C4(AfX));}break;
case 7:{AfX=AfX+1;if(AfX>=this.Kh.Dn())AfX=0;A._GetAutoObject(A.Device.Device).Zu(
this.Kh.C4(AfX));}break;default:D5.NH=true;}},CD:function(G){if(this.DP.AzZ()){this.
DP.Ac8();if(this.DP.AzZ()===false)this.Bg.ATB(true);return;}else if(this.Afk)this.
AAZ(this);if(!!this.Bg)this.Bg.ATB(true);},E6:function(G){if(!!this.Bg)this.Bg.ATB(
false);},Axw:function(G){var B;if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(
C.AMs,0);this.Bg.H(Aom);this.Bg.Zw(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zy([this,this.AIV]);if(!!this.FB)this.Bg.A9k([B=this.FB,B.A8R,B.A_b]);this.A30(this
);this.J(this.Bg,0);if(this.Afk===false)this.Bb(this.Bg);this.Bee(this);this.Bot(
this);},A9h:function(G){A._GetAutoObject(A.Device.Device).Dt(0);this.Dr(this.A6z(
));this.Ej.AR=[this,this.AIV];this.ALk(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afk=true;},Bj_:function(G){var B;A._GetAutoObject(A.Device.Device).Dt(0);if(!this.
Bg)return;var Aa=(C.AB3.isPrototypeOf(B=this.Bg.AD.BiR(this.Bg.AD.Gt))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G6(Aa.Hq);else A._GetAutoObject(A.Device.
Helper).W.EX();this.Agg();},Al4:function(G){var F;if(!this.FJ)this.A5Q(this);else
switch((F=this.FJ,F[1].call(F[0]))){case 0:this.A5Q(this);break;case 1:this.BhM(
this);break;case 9:this.A5R(this);break;case 4:this.A5T(this);break;case 6:this.
A5W(this);break;case 8:this.ANT(this);break;case 2:this.A50(this);break;case 3:this.
BhN(this);break;case 7:this.BhO(this);break;case 5:this.BhP(this);break;case 10:
this.BhR(this);break;case 11:this.A5S(this);break;case 12:this.A5Z(this);break;case
13:this.A51(this);break;case 14:this.A5U(this);break;case 18:this.A5V(this);break;
case 15:this.A5X(this);break;case 16:this.A52(this);break;case 17:this.A5Y(this);
break;default:A.ab5("%s%e",AfB,(F=this.FJ,F[1].call(F[0])));}},AIV:function(s){this.
Al4(s);},Bli:function(G){this.Dr(C.Kn);this.Ej.AR=null;this.Afk=false;this.AcK(this
);this.BfA();this.N.TZ.Ds(255);this.N.T0.Ds(255);this.Bb(this.Bg);this.Ej.Ar(false
);},Anq:function(G){A._GetAutoObject(C.A$).Fy();},Dz:function(E){if(this.KM===E)
return;this.KM=E;this.A30(this);},Abv:function(){switch(A._GetAutoObject(A.Device.
Device).Kh){case 14:return C.AM3;case 2:return C.AM5;case 1:return C.AM6;case 3:
return C.AM8;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqx;case
7:return C.AB2;case 12:return C.AB5;case 11:return C.AB1;case 13:return C.AB4;default:
throw new Error(Aon);}},Abw:function(){switch(A._GetAutoObject(A.Device.Device).
Kh){case 14:return C.APv;case 2:return C.ADk;case 1:return C.APx;case 3:return C.
APz;case 4:return C.ADg;case 0:case 8:case 9:case 10:case 5:case 6:return C.Aq5;
case 7:return C.ADi;case 12:return C.ADj;case 11:return C.ADh;case 13:return C.ADl;
default:throw new Error(Aon);}},Bee:function(G){this.ATf(A._GetAutoObject(A.Device.
Device).Kh);if(!!this.Bg){this.Bg.NZ(this.Abv());this.Boy(this);}},Boy:function(
G){var B;if(!!this.FB)this.HP(this.FB);this.FB=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abw(),0))?B:null);this.FB.H(IT);if(!!this.Bg)this.Bg.A9k([B=this.FB,B.A8R,B.
A_b]);this.J(this.FB,0);},Bj8:function(G){this.Q8(this);A._GetAutoObject(A.Device.
Device).Dt(0);},ATD:function(G){A._GetAutoObject(A.Device.Device).Zu(1);},ATC:function(
G){A._GetAutoObject(A.Device.Device).Zu(2);},ATE:function(G){A._GetAutoObject(A.
Device.Device).Zu(3);},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mq());},A0h:function(s){this.Q8(s);},HQ:function(
G){if(this.Afk){this.ALk(this);return;}this.N.CY(A.aaL(A.ach.E5));this.N.Ct(A.aaL(
A.ach.ADE));this.N.C6(A.aaL(A.ach.Options));this.N.CC=[this,this.Anq];this.N.Cl=[
this,this.A9h];this.N.Cm=[this,this.BaB];this.N.Hy(A.jV);this.N.FN(A.jV);this.N.
CV(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B$()){this.N.I6.Ds(100);this.N.
Cl=null;}else this.N.I6.Ds(255);},AyL:function(s){this.HQ(s);},AdQ:function(Aih,
Aii,AJi){A._GetAutoObject(C.BS).ABD(Aih,Aii,[this,this.A8L,this.ATf],AJi);},Af_:
function(G){this.A30(this);if(this.Afk)A.pe([this,this.ALk],this);},Agg:function(
){A._GetAutoObject(C.A$).Cf(9);},A30:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QG()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dz(
A.aaR(A.acf.AEi));else if(A._GetAutoObject(A.Device.Helper).Arh(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dz(this.KM);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACY(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dz(A.aaR(A.acf.AN3));else this.Bg.Dz(A.aaR(
A.acf.AN2));}else this.Bg.Dz(A.aaR(A.acf.ARZ));},AEI:function(G){var F;if(!!this.
FJ)(F=this.FJ,F[2].call(F[0],0));},AwM:function(E){if(A.aaZ(this.FJ,E))return;if(
!!this.FJ)A.z$([this,this.A0q],this.FJ,0);this.FJ=E;if(!!E)A.zX([this,this.A0q],
this.FJ,0);if(!!E)A.pe([this,this.A0q],this);},AEO:function(G){var F;if(!!this.FJ
)(F=this.FJ,F[2].call(F[0],1));},AwR:function(G){var F;if(!!this.FJ)(F=this.FJ,F[
2].call(F[0],2));},ATj:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],
3));},ATx:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],7));},ATy:function(
G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],5));},A50:function(G){if(!this.Bg
)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.
Qj(1);}},I0:function(Aih,Aii,Ao1){A._GetAutoObject(C.BS).ABD(Aih,Aii,[this,this.
A8M,this.ATg],Ao1);},Bls:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0
],4));},A5T:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).G6(this.Bg.FK());this.DP.BA_();}},Blt:function(G){var F;if(!!this.FJ)(F=
this.FJ,F[2].call(F[0],6));},A5W:function(G){if(!this.Bg)return;if(this.M9()){A.
_GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.BA$();}},ANT:function(G
){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qj(1024);}},BmG:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(
F[0],8));},Aky:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],9));},BhN:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(
this.Bg.FK());this.DP.Qj(2);}},A5Q:function(G){if(!this.Bg)return;if(this.M9()){
A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());if(A._GetAutoObject(A.Device.
Helper).Aj_(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A7(66,true,A.jV,0,null);else this.BAU();}},BhM:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qj(16);}},BAU:function(){A._GetAutoObject(C.A$).Cf(94);},BhO:function(G){if(!
this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());
this.DP.Qj(4);}},BhP:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(8);}},A5R:function(G){var B;if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());if(this.
Afk){A.zX([this,this.AAq],[B=this.DP,B.Q1,B.EW],0);this.AAZ(this);}this.DP.Ac8();
}},AL5:function(Aih,Aii,BxV){A._GetAutoObject(C.BS).BgI(Aih,Aii,BxV);},ALk:function(
G){this.N.Hy(A.jV);this.N.CV(A.jV);this.N.CY(A.aaL(A.ach.Aey));this.N.CC=[this,this.
Bli];this.N.TZ.Ds(100);this.N.T0.Ds(100);var Gi=A._GetAutoObject(A.Device.Device
).An.B$();if(Gi<=0){this.N.Ct(null);this.N.C6(null);this.N.Cl=null;this.N.Cm=null;
this.N.ZG=false;this.N.ZH=false;}else if(Gi===1){this.N.Ct(null);this.N.C6(A.aaL(
A.ach.Aez));this.N.Cl=null;this.N.Cm=[this,this.AIV];this.N.ZG=false;this.N.ZH=false;
}else{this.N.Ct(A.aaL(A.ach.Aq_));this.N.C6(A.aaL(A.ach.Arf));this.N.Cl=[this,this.
A3k];this.N.Cm=[this,this.A3l];this.N.ZG=true;this.N.ZH=true;}},A3k:function(G){
if(!this.Bg)return;if(this.Bg.FK()<(A._GetAutoObject(A.Device.Device).An.B$()-1)
)this.Bg.GS(this.Bg.FK()+1);},A3l:function(G){if(!this.Bg)return;if(this.Bg.FK()>
0)this.Bg.GS(this.Bg.FK()-1);},Bot:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GS(Bf);A.ab5("%s",Aoo);}}},M9:function(){return this.
Bg.FK()>=0;},Akl:function(){return A._GetAutoObject(A.Device.Device).An.B$()>5;}
,Agu:function(){this.BgJ();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.AUl),[this,this.
A9h]);A._GetAutoObject(C.BS).FX();},AcK:function(G){if(this.Afk)this.ALk(this);else
this.HQ(this);},AAZ:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Ay0=aFilter.DL(1,4);if(!!Ay0){aFilter.Ni(Ay0);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},BGe:function(s){this.
AAZ(s);},AAq:function(G){var B;if(!this.DP.EY&&this.Afk){A.z$([this,this.AAq],[B=
this.DP,B.Q1,B.EW],0);this.AAZ(this);}},Bnh:function(G){var F;if(!!this.FJ)(F=this.
FJ,F[2].call(F[0],10));},BhR:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(256);}},A3a:function(G){var F;this.
ATg((F=this.FJ,F[1].call(F[0])));A.pe([this,this.AyL],this);},A0q:function(s){this.
A3a(s);},Blp:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],11));},A5S:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(
this.Bg.FK());this.DP.Qj(4096);}},A5Z:function(G){if(!this.Bg)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(16384);}},A51:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.BAV();}},BAV:function(){A._GetAutoObject(C.A$).Ahu(75);},A5U:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qj(32768);}},A5X:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(65536);}},A52:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qj(131072);}},BgJ:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arh(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).XS(A.aaR(A.acf.AB8));else A._GetAutoObject(C.BS).Qy(A.aaR(
A.acf.AB8),[this,this.Bj8]);A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.AkW),[this,this.
Bj_]);A._GetAutoObject(C.BS).FX();},A5Y:function(G){if(!this.Bg)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(128);}},BAH:function(
G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ce],this);},A5V:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qj(524288);}},BhQ:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(262144);}},ATf:function(E){if(this.
ATY===E)return;this.ATY=E;A.abo([this,this.A8L,this.ATf],0);},ATg:function(E){if(
this.ATZ===E)return;this.ATZ=E;A.abo([this,this.A8M,this.ATg],0);},A6z:function(
){return C.Yy;},BfA:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bnp:function(G){A._GetAutoObject(A.Device.Device).Zu(0);
},Bnq:function(G){A._GetAutoObject(A.Device.Device).Zu(14);},A8L:function(){return this.
ATY;},A8M:function(){return this.ATZ;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADk._Init.call(this.V1={I:this},0);C.Kh._Init.call(this.Kh={I:this},0);
this.__proto__=C.GZ;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.
OO(true);this.Ej.A9L(A.jb.CS);this.Ej.A9M(A.jb.Text);this.Dr(C.Kn);this.V1.H(IT);
this.KM=A.aaR(A.acf.AEi);this.J(this.V1,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V1._Done();this.Kh._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V1._ReInit();
this.Kh._ReInit();this.Dz(A.aaR(A.acf.AEi));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.AB3={AP:null,A_:null,UI:null,AcD:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UI.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UI.M[2]-1,0,this.UI.M[2]+1,aSize[1]]);this.AcD.H([this.UI.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UI.L(this.V.AQ);this.AcD.L(this.
V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UI.R(this.AX.CF(Ad,2).toFixed());this.AcD.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UI={I:this},0);A.acg.Text._Init.call(this.AcD={I:this
},0);this.__proto__=C.AB3;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UI.L(A.jb.Text
);this.AcD.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UI,0);this.
J(this.AcD,0);this.UI.S(A.aaL(A.fl.Af));this.AcD.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UI.
_Done();this.AcD._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UI._ReInit();this.AcD._ReInit(
);this.UI.S(A.aaL(A.fl.Af));this.AcD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad9={Oy:null,SR:null,Mk:null,Init:function(aArg){var B;A.zX([this,this.A2S],[
B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyD],0);A.zX([this,this.Adw],[B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyC],0);A.pe([this,this.Adw],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SR.R(A._GetAutoObject(A.Device.Device).Aa7.toFixed()+Xf
);this.Oy.Z(A._GetAutoObject(A.Device.Device).AmE);},Adw:function(G){this.Am();}
,MU:function(G){A._GetAutoObject(C.A$).Fy();},A2S:function(G){if(A._GetAutoObject(
A.Device.Device).AmE===false){this.Oy.Z(false);A._GetAutoObject(C.A$).Fy();}else
this.Oy.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oy={I:this},0);A.acg.Text._Init.call(this.SR={I:this},0);C.Mk._Init.call(
this.Mk={I:this},0);this.__proto__=C.Ad9;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oy.H(Aop);this.Oy.R(A.aaR(A.acf.Oy));this.
Oy.L(A.jb.Text);this.Oy.Z(false);this.SR.H(AsY);this.SR.R(AsZ);this.SR.L(A.jb.Text
);this.Mk.H(As0);this.J(this.Oy,0);this.J(this.SR,0);this.J(this.Mk,0);this.N.Cm=[
this,this.MU];this.Oy.S(A.aaL(A.fl.Af));this.SR.S(A.aaL(A.fl.Af));this.Mk.As([B=
A._GetAutoObject(A.Device.Device),B.Av6,B.AyC]);this.Mk.A92([B=A._GetAutoObject(
A.Device.Device),B.Av9,B.AyD]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oy._Done();this.SR._Done();this.Mk._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oy._ReInit();this.SR._ReInit();this.Mk._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oy.R(A.aaR(A.acf.Oy));this.Oy.S(A.aaL(A.fl.Af)
);this.SR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mk={Ad4:null,Ad5:null,Kd:function(G){var F;if(!!this.Q){this.A10();var Ac$=(
F=this.Q,F[1].call(F[0]));if(Ac$>20)this.Ou.L(A.jb.E4);else this.Ou.L(A.jb.Gk);this.
Ou.L((this.Ou.AQ&0x00FFFFFF)|(this.AlM(Ac$,0,20)<<24));this.TD.L((this.TD.AQ&0x00FFFFFF
)|(this.AlM(Ac$,21,40)<<24));this.TE.L((this.TE.AQ&0x00FFFFFF)|(this.AlM(Ac$,41,
60)<<24));this.Ad4.L((this.Ad4.AQ&0x00FFFFFF)|(this.AlM(Ac$,61,80)<<24));this.Ad5.
L((this.Ad5.AQ&0x00FFFFFF)|(this.AlM(Ac$,81,100)<<24));}},A10:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U7=this.Ad5;else if((F=this.Q,F[
1].call(F[0]))>60)this.U7=this.Ad4;else if((F=this.Q,F[1].call(F[0]))>40)this.U7=
this.TE;else if((F=this.Q,F[1].call(F[0]))>20)this.U7=this.TD;else this.U7=this.
Ou;}else this.U7=null;},_Init:function(aArg){C.Ow._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad4={I:this},0);A.acg.AK._Init.call(this.Ad5={I:this},0);this.__proto__=
C.Mk;this.H(Aoq);this.NO.H(Aoq);this.Ou.H(Aor);this.TD.H(As1);this.TE.H(Ax7);this.
Ad4.H(Ax8);this.Ad4.L(A.jb.E4);this.Ad5.H(Ax9);this.Ad5.L(A.jb.E4);this.J(this.Ad4
,0);this.J(this.Ad5,0);this.NO.Aw(A.aaL(A.ach.AMN));},_Done:function(){this.__proto__=
C.Ow;this.Ad4._Done();this.Ad5._Done();C.Ow._Done.call(this);},_ReInit:function(
){C.Ow._ReInit.call(this);this.Ad4._ReInit();this.Ad5._ReInit();},_Mark:function(
D){var B;C.Ow._Mark.call(this,D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUR={N6:null,Lq:null,Ak_:null,Z2:null,Z1:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.
ASB,B.A0a],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.ASE,B.
A0c],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.A81,B.Ba6],0
);A.pe([this,this.ApP],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABr(this);this.BB4(this);this.DJ(this);},BAl:function(G){A._GetAutoObject(
A.Device.Device).AsH();},ApP:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z2.Z(false);break;case 4:{var A3D;if(!A._GetAutoObject(A.Device.Device).Afp)A3D=
0;else A3D=((A._GetAutoObject(A.Device.Device).AxN*100)/A._GetAutoObject(A.Device.
Device).Afp)|0;this.Z2.By(A3D);this.Z2.Z(true);}break;default:A.ab5("%s%e",As2,A.
_GetAutoObject(A.Device.Device).SyncState);}},BB4:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lq.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gk);this.Lq.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As2,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CY(null);this.N.CC=null;this.N.CV(A.jV);this.N.Cm=null;}break;
case 7:{this.N.CY(null);this.N.CC=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cm=[this
,this.BAl];}break;default:A.ab5("%s%e",As2,A._GetAutoObject(A.Device.Device).SyncState
);}},ABr:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lq.R(A.aaR(A.acf.Bpj));break;case 1:this.Lq.R(A.aaR(A.acf.Bpg));break;
case 2:this.Lq.R(A.aaR(A.acf.Bpd));break;case 3:this.Lq.R(A.aaR(A.acf.Bph));break;
case 4:this.Lq.R((A.aaR(A.acf.Bpf)+Ax_)+A._GetAutoObject(A.Device.Helper).Nk(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BnW),P8,A._GetAutoObject(A.Device.Device).AxN.toFixed(
)),Ax$,A._GetAutoObject(A.Device.Device).Afp.toFixed()));break;case 5:this.Lq.R(
A.aaR(A.acf.Bpi));break;case 7:this.Lq.R(A.aaR(A.acf.Bpe));break;default:A.ab5("%s%e"
,As2,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lq={I:this
},0);A.acg.Ap._Init.call(this.Ak_={I:this},0);A.acr.ADn._Init.call(this.Z2={I:this
},0);A.acr.ADo._Init.call(this.Z1={I:this},0);this.__proto__=C.AUR;this.N.Z(true
);this.N6.H(AVM);this.N6.R(A.aaR(A.acf.N6));this.Lq.AZ(0x3F);this.Lq.H(AVN);this.
Lq.A6(0x12);this.Ak_.H(AVO);this.Ak_.L(A.jb.AV);this.Z2.H(AVP);this.Z2.Ar(false);
this.Z2.By(0);this.Z1.Bnb(0);this.Z1.A_o(0);this.Z1.A_m(A.jb.AV);this.Z1.A_l(0);
this.Z1.AFZ(AHh);this.J(this.N6,0);this.J(this.Lq,0);this.J(this.Ak_,0);this.J(this.
Z2,0);this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(A.fl.Af));this.N6.Cv(A.aaL(A.fl.
Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(A.fl.Ak));this.Lq.Cv(A.aaL(A.fl.
Bi));this.Ak_.Aw(A.aaL(A.ach.AQH));this.Z2.OnSetAppearance(this.Z1);this.Z1.A_n(
A.aaL(A.ach.NS));this.Z1.A_k(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lq._Done();this.Ak_._Done();this.Z2._Done(
);this.Z1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lq._ReInit();this.Ak_._ReInit();this.Z2._ReInit();this.
Z1._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Cv(A.aaL(A.fl.Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(
A.fl.Ak));this.Lq.Cv(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq3={_Init:function(aArg){C.ADd._Init.call(this,aArg
);this.__proto__=C.Aq3;this.A9O(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cb:A.abi(3,0,{0:2,2:1}),Dn:function(
){return 3;},C4:function(aIndex){if(aIndex>=3)return-1;return this.Cb.Get(aIndex
);},F$:function(aIndex){return this.GenderToString.BH(this.C4(aIndex));},DU:function(
A8){var O=0;while(O<3){if(this.Cb.Get(O)===A8)return O;O=O+1;}return-1;},HK:function(
){var O=0;var max=-1;while(O<3){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}
return max;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal)this.Animal.JQ(
E);},LZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af1],[B=this.Animal,B.Wx,B.JQ],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af1],[B=this.Animal,B.Wx,B.JQ],0);A.pe([this,this.Af1],this);},Af1:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B7,
this.B8],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cb=[]).__proto__=C.Gender.Cb;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cb:A.abi(4,0,{1:1,2:2,3:3}),Dn:function(){return 4;},C4:function(aIndex){if(
aIndex>=4)return-1;return this.Cb.Get(aIndex);},F$:function(aIndex){return this.
BirthTypeToString.BH(this.C4(aIndex));},DU:function(A8){var O=0;while(O<4){if(this.
Cb.Get(O)===A8)return O;O=O+1;}return-1;},HK:function(){var O=0;var max=-1;while(
O<4){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akz(E);},A1e:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B7,this.
B8],0);},LZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1e],[B=this.Animal,B.ASf,B.Akz],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1e],[B=this.Animal,B.ASf,B.Akz],0);A.pe([this,this.A1e],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cb=[]).__proto__=C.BirthType.Cb;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acu:null,Dn:
function(){return A._GetAutoObject(A.Device.Helper).AdZ.MD;},C4:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdZ.MD)return-1;return A._GetAutoObject(
A.Device.Helper).AdZ.Get(aIndex);},F$:function(aIndex){return this.Acu.BH(this.C4(
aIndex));},DU:function(A8){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdZ.
MD){if(A._GetAutoObject(A.Device.Helper).AdZ.Get(O)===A8)return O;O=O+1;}return-
1;},HK:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UF.
MD){if(A._GetAutoObject(A.Device.Helper).UF.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UF.Get(O);O=O+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A09:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B7,this.B8],0);},LZ:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A09],[B=this.Animal,B.PN,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A09],[B=this.Animal,B.PN,B.EB],0);A.pe([
this,this.A09],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acu={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acu._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acu._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUx={Init:function(aArg){var B;A.pe([this,this.AfF],this);A.zX([this,this.AfF
],[B=A._GetAutoObject(A.Device.Device),B.ArC,B.Ati],0);},A3I:function(G){A._GetAutoObject(
A.Device.Device).A7(38,true,A.jV,0,[this,this.Bbl]);},A3i:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Ast(this);},A1y:function(G){var F;if(this.A9===1){var BQ=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlU)this.D7=this.AlU;if(this.D7<A._GetAutoObject(
A.Device.Device).AcJ)this.D7=A._GetAutoObject(A.Device.Device).AcJ;if(this.DX!==
BQ){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.
A9===2){var BQ=this.DX;this.DX=this.DX-10;if(this.DX<this.D7)this.DX=this.D7;if(
this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);
}}this.DJ(this);this.Am();},A19:function(G){var F;if(this.A9===1){var BQ=this.D7;
this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ){if(!!this.
JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A9===2){var BQ=
this.DX;this.DX=this.DX+10;if(this.DX>this.AlP)this.DX=this.AlP;if(this.DX!==BQ){
if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PG.R(AHi+A._GetAutoObject(A.Device.Converter).
Ak4(this.D7));this.PH.R(AHi+A._GetAutoObject(A.Device.Converter).Ak4(this.DX));this.
Sy.R(A._GetAutoObject(A.acj.Temperature).AlN());},A12:function(Atp){if(Atp===1)return this.
PG;else if(Atp===2)return this.PH;else return null;},_Init:function(aArg){C.Acs.
_Init.call(this,aArg);this.__proto__=C.AUx;this.AlP=5000;this.AlU=3000;this.T(A.
aaR(A.acf.Ars));this.Background.H(AfC);this.V.H(BF);this.V.R(A.aaR(A.acf.AGU));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acs._ReInit.call(this);this.T(
A.aaR(A.acf.Ars));this.V.R(A.aaR(A.acf.AGU));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa_:null,Abc:null,Aba:
null,Background:null,Aa9:null,Abb:null,Aa$:null,AjI:null,Arx:null,VM:null,A4:0,Bz3:
function(G){if(this.AjI.CO===6){if(this.A4===1)this.AnJ(2);else if(this.A4===2)this.
AnJ(3);else this.AnJ(1);}else if(this.AjI.CO===7){if(this.A4===3)this.AnJ(2);else
if(this.A4===2)this.AnJ(1);else this.AnJ(3);}},AnJ:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa9.M);break;case 2:this.
Background.H(this.Abb.M);break;case 1:this.Background.H(this.Aa$.M);break;default:
this.Background.H(Aos);}},IY:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hn._Init.
call(this.Aa_={I:this},0);A.acg.Hn._Init.call(this.Abc={I:this},0);A.acg.Hn._Init.
call(this.Aba={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aeo._Init.call(this.Aa9={I:this},0);A.acg.Aeo._Init.call(this.Abb={I:this},0);A.
acg.Aeo._Init.call(this.Aa$={I:this},0);A.Core.BM._Init.call(this.AjI={I:this},0
);A.Core.BM._Init.call(this.Arx={I:this},0);A.Graphics.AME._Init.call(this.VM={I:
this},0);this.__proto__=C.Rating;this.H(AVQ);this.Aa_.H(AHj);this.Aa_.L(A.jb.Text
);this.Aa_.AnH(Alf);this.Aa_.Ng(3);this.Aa_.Z(true);this.Abc.H(AHk);this.Abc.L(A.
jb.Text);this.Abc.AnH(Alf);this.Abc.Ng(3);this.Abc.Z(true);this.Aba.H(AHl);this.
Aba.L(A.jb.Text);this.Aba.AnH(Alf);this.Aba.Ng(3);this.Aba.Z(true);this.Background.
H(Aos);this.Background.L(A.jb.AV);this.Aa9.H(AHj);this.Aa9.L(A.jb.E4);this.Aa9.AnH(
Alf);this.Aa9.Z(true);this.Abb.H(AHk);this.Abb.L(A.jb.H8);this.Abb.AnH(Alf);this.
Abb.Z(true);this.Aa$.H(AHl);this.Aa$.L(A.jb.Gk);this.Aa$.AnH(Alf);this.Aa$.Z(true
);this.AjI.Filter=147;this.Arx.Filter=1;this.VM.BlL(360);this.VM.Bm1(22);this.VM.
Bm$(2);this.J(this.Aa_,0);this.J(this.Abc,0);this.J(this.Aba,0);this.J(this.Background
,0);this.J(this.Aa9,0);this.J(this.Abb,0);this.J(this.Aa$,0);this.Aa_.Zz(this.VM
);this.Abc.Zz(this.VM);this.Aba.Zz(this.VM);this.Background.Aw(A.aaL(A.ach.NR));
this.Aa9.Zz(this.VM);this.Abb.Zz(this.VM);this.Aa$.Zz(this.VM);this.AjI.BN=[this
,this.Bz3];this.Arx.BN=[this,this.IY];},_Done:function(){this.__proto__=A.Core.P;
this.Aa_._Done();this.Abc._Done();this.Aba._Done();this.Background._Done();this.
Aa9._Done();this.Abb._Done();this.Aa$._Done();this.AjI._Done();this.Arx._Done();
this.VM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa_._ReInit();this.Abc._ReInit();this.Aba._ReInit();this.Background.
_ReInit();this.Aa9._ReInit();this.Abb._ReInit();this.Aa$._ReInit();this.AjI._ReInit(
);this.Arx._ReInit();this.VM._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asv={Akn:null,Asg:null,Background:null,TQ:null,TK:null,Ab2:null,Ab1:null,Ab0:
null,Acy:null,Acx:null,Acw:null,Acn:null,Acm:null,AbU:null,AbT:null,Acd:null,Acc:
null,AqD:null,Init:function(aArg){},BjK:function(G){this.Ab2.R(AVR);this.Ab1.R(A.
jV);this.Ab0.R(A.jV);this.Acy.R(AHm);this.Acx.R(A.jV);this.Acw.R(A.jV);this.Acn.
R(A.jV);this.Acm.R(A.jV);this.AbU.R(A.jV);this.AbT.R(A.jV);this.Acd.R(A.jV);this.
Acc.R(A.jV);},BnD:function(G){this.TK.Z(true);this.TQ.Z(true);var IC=this.Il();if(
!IC)return;this.TQ.R(IC.GetFPS().toFixed()+AVS);this.TK.R(AVT);this.TK.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akn={I:this},0);A.Core.Timer._Init.call(this.Asg={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TQ={I:this},0);A.acg.
Text._Init.call(this.TK={I:this},0);A.acg.Text._Init.call(this.Ab2={I:this},0);A.
acg.Text._Init.call(this.Ab1={I:this},0);A.acg.Text._Init.call(this.Ab0={I:this}
,0);A.acg.Text._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.Acx={I:
this},0);A.acg.Text._Init.call(this.Acw={I:this},0);A.acg.Text._Init.call(this.Acn={
I:this},0);A.acg.Text._Init.call(this.Acm={I:this},0);A.acg.Text._Init.call(this.
AbU={I:this},0);A.acg.Text._Init.call(this.AbT={I:this},0);A.acg.Text._Init.call(
this.Acd={I:this},0);A.acg.Text._Init.call(this.Acc={I:this},0);A.acg.AK._Init.call(
this.AqD={I:this},0);this.__proto__=C.Asv;this.H(AcR);this.Ar(false);this.Akn.PP(
2000);this.Akn.WC(1);this.Akn.Ar(true);this.Asg.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcR);this.Background.L(0x78000000);this.TQ.H(AVU);this.TQ.A6(
0x14);this.TQ.R(A.jV);this.TQ.L(0xFFFFFC00);this.TQ.Z(false);this.TK.H(AVV);this.
TK.A6(0x11);this.TK.R(A.jV);this.TK.Z(false);this.Ab2.H(AHn);this.Ab2.A6(0x11);this.
Ab2.R(A.jV);this.Ab1.H(As3);this.Ab1.A6(0x11);this.Ab1.R(A.jV);this.Ab0.H(AHo);this.
Ab0.A6(0x14);this.Ab0.R(A.jV);this.Acy.H(AHp);this.Acy.A6(0x11);this.Acy.R(A.jV);
this.Acx.H(Aya);this.Acx.A6(0x11);this.Acx.R(A.jV);this.Acw.H(AHq);this.Acw.A6(0x14
);this.Acw.R(A.jV);this.Acn.H(Ayb);this.Acn.A6(0x11);this.Acn.R(A.jV);this.Acm.H(
AVW);this.Acm.A6(0x14);this.Acm.R(A.jV);this.AbU.H(AVX);this.AbU.A6(0x11);this.AbU.
R(A.jV);this.AbT.H(AVY);this.AbT.A6(0x14);this.AbT.R(A.jV);this.Acd.H(AVZ);this.
Acd.A6(0x11);this.Acd.R(A.jV);this.Acc.H(AHr);this.Acc.A6(0x14);this.Acc.R(A.jV);
this.AqD.H(AV0);this.J(this.Background,0);this.J(this.TQ,0);this.J(this.TK,0);this.
J(this.Ab2,0);this.J(this.Ab1,0);this.J(this.Ab0,0);this.J(this.Acy,0);this.J(this.
Acx,0);this.J(this.Acw,0);this.J(this.Acn,0);this.J(this.Acm,0);this.J(this.AbU,
0);this.J(this.AbT,0);this.J(this.Acd,0);this.J(this.Acc,0);this.J(this.AqD,0);this.
Akn.Mz=[this,this.BjK];this.Asg.Mz=[this,this.BnD];this.TQ.S(A.aaL(A.fl.Ak));this.
TK.S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));this.Ab1.S(A.aaL(A.fl.Ak));this.
Ab0.S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.Acx.S(A.aaL(A.fl.Ak));this.
Acw.S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));this.
AbU.S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.
Acc.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akn._Done();this.Asg._Done();this.Background._Done();this.TQ._Done();this.TK.
_Done();this.Ab2._Done();this.Ab1._Done();this.Ab0._Done();this.Acy._Done();this.
Acx._Done();this.Acw._Done();this.Acn._Done();this.Acm._Done();this.AbU._Done();
this.AbT._Done();this.Acd._Done();this.Acc._Done();this.AqD._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akn._ReInit();this.
Asg._ReInit();this.Background._ReInit();this.TQ._ReInit();this.TK._ReInit();this.
Ab2._ReInit();this.Ab1._ReInit();this.Ab0._ReInit();this.Acy._ReInit();this.Acx.
_ReInit();this.Acw._ReInit();this.Acn._ReInit();this.Acm._ReInit();this.AbU._ReInit(
);this.AbT._ReInit();this.Acd._ReInit();this.Acc._ReInit();this.AqD._ReInit();this.
TQ.S(A.aaL(A.fl.Ak));this.TK.S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));this.Ab1.
S(A.aaL(A.fl.Ak));this.Ab0.S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.Acx.
S(A.aaL(A.fl.Ak));this.Acw.S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Acm.
S(A.aaL(A.fl.Ak));this.AbU.S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.Acd.
S(A.aaL(A.fl.Ak));this.Acc.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asg).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGC={FI:null,Dj:null,Au:null,Ju:null,HM:null,Uf:null,Bc:null,Sn:null,Gy:null
,Gx:null,FZ:0,A9:0,Bji:false,Init:function(aArg){},Ai:function(Ae){C.Du.Ai.call(
this,Ae);this.Hx.Z(false);this.H4.Z(false);if(!!this.Dj){this.Sn.R(this.Au.Format(
O4));this.Uf.R(this.Au.Format(Ayc));}if(this.A9===1){this.HM.Z(true);this.HM.H(this.
Sn.M);this.HM.L(A.jb.Bm);this.Sn.L(this.Background.AQ);this.Uf.L(A.jb.Bm);}else if(
this.A9===2){this.HM.Z(true);this.HM.H(this.Uf.M);this.HM.L(A.jb.Bm);this.Sn.L(A.
jb.Bm);this.Uf.L(this.Background.AQ);}else{this.HM.Z(false);this.Sn.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uf.L(this.V.AQ);}},Qo:function(G){if(this.FF===1)A.pe([
this,this.Va],this);else if(this.FF===4)A.pe([this,this.AiJ],this);else if(this.
FF===5)A.pe([this,this.Aiu],this);C.Du.Qo.call(this,G);},J$:function(G){switch(this.
A9){case 0:C.Du.J$.call(this,G);break;case 2:break;default:this.Adv(this);}},J6:
function(G){switch(this.A9){case 0:C.Du.J6.call(this,G);break;default:this.Ait(this
);}},Adx:function(G){var F;if(!!this.Dj)this.Ul((F=this.Dj,F[1].call(F[0])));},Ab$:
function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adx],this.Dj
,0);this.Dj=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);
},Ul:function(E){if(this.FZ===E)return;this.FZ=E;this.Au.Initialize(this.FZ);this.
Am();},Adv:function(G){this.FF=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Va],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Va:function(G){this.Ew(this.A9+1);},Al6:
function(G){this.FF=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiJ],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al5:function(G){this.FF=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aiu],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiJ:function(G){
var B;var F;var BQ=this.FZ;if(this.A9===1)this.Au.AnC(this.Au.AjX+1);if(this.A9===
2)this.Au.AnF(this.Au.AvZ+1);this.Au.AnI(0);this.Ul(((B=(this.Au.JO()|0))<0)?B+0x100000000:
B);if(this.FZ!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FZ));A.abo(this.
Dj,0);}},Aiu:function(G){var B;var F;var BQ=this.FZ;if(this.A9===1)this.Au.AnC(this.
Au.AjX-1);if(this.A9===2)this.Au.AnF(this.Au.AvZ-1);this.Au.AnI(0);this.Ul(((B=(
this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FZ!==BQ){if(!!this.Dj)(F=this.Dj,F[
2].call(F[0],this.FZ));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aez));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.Va];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.FI.AkT((F=this.N,F[1].call(F[
0])));}},FV:function(G){this.Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){
var F;if(!this.A9)this.FI.AjD((F=this.N,F[1].call(F[0])));this.A9=EN;this.Bji=true;
if((this.A9<0)||(this.A9>2))this.A9=0;this.DJ(this);this.Gy.Bw=!!this.A9;this.Gx.
Bw=!!this.A9;this.Am();},Ait:function(G){if(this.A9>1)this.Ew(this.A9-1);},_Init:
function(aArg){C.Du._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BM._Init.call(this.Ju={I:this},0);A.acg.AK._Init.call(this.HM={I:this}
,0);A.acg.Text._Init.call(this.Uf={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sn={I:this},0);A.Core.BM._Init.call(this.Gy={I:this
},0);A.Core.BM._Init.call(this.Gx={I:this},0);this.__proto__=C.AGC;this.H(UX);this.
V.R(AV1);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H4.Z(false);this.Ju.Filter=1;this.
HM.H(AV2);this.HM.L(0x55FFFFFF);this.Uf.H(AV3);this.Uf.I9(true);this.Bc.H(AV4);this.
Bc.A6(0x14);this.Bc.R(AV5);this.Sn.H(AV6);this.Sn.I9(true);this.Sn.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);
this.J(this.Uf,0);this.J(this.Bc,0);this.J(this.Sn,0);this.Ju.BN=[this,this.Adv];
this.Uf.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sn.S(A.aaL(A.fl.EK));this.
Gy.BN=[this,this.Al6];this.Gy.D1=[this,this.AiJ];this.Gx.BN=[this,this.Al5];this.
Gx.D1=[this,this.Aiu];this.FI=A._NewObject(C.Aes,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Du;this.Au._Done();this.Ju._Done();this.HM._Done();this.Uf._Done(
);this.Bc._Done();this.Sn._Done();this.Gy._Done();this.Gx._Done();C.Du._Done.call(
this);},_ReInit:function(){C.Du._ReInit.call(this);this.Au._ReInit();this.Ju._ReInit(
);this.HM._ReInit();this.Uf._ReInit();this.Bc._ReInit();this.Sn._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Uf.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Sn.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((
B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmT:null,AqT:null,El:null,Text:null,String:A.jV,Bdi:A.jV,Kg:0x12
,AK5:0,AQ:0xFFFFFFFF,N3:0,AUf:0,A_T:0,Bdj:true,G2:function(CN){var LJ=(A.Core.ARg.
isPrototypeOf(CN)?CN:null);if(!!LJ)this.BCd(this);return A.Core.P.G2.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajo],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bdj){this.Bdi=E;this.Bdj=false;
}this.AK5=E.length;A.pe([this,this.Ajo],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajo],this);},A2:function(E){if(this.AmT===E)return;this.
AmT=E;A.pe([this,this.Ajo],this);},Cv:function(E){if(this.AqT===E)return;this.AqT=
E;A.pe([this,this.Ajo],this);},A6:function(E){if(E===this.Kg)return;this.Kg=E;this.
Text.A6(E);},Ajo:function(G){var B;var AK$=0;if(!this.AK5){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KS(false);if(!!this.B6){AK$=
this.B6.Yw(this.String,0,this.AK5);if(AK$<(((B=this.M)[2]-B[0])-(2*this.Text.Ja)
)){this.Text.S(this.B6);this.Text.Aw1(this.N3);return;}}this.Text.KS(true);if(!!
this.AmT){AK$=this.AmT.Yw(this.String,0,this.AK5);this.Text.S(this.AmT);this.Text.
Aw1(this.AUf);if((AK$<(((B=this.M)[2]-B[0])-(2*this.Text.Ja)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqT){this.Text.S(this.AqT);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw1((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BCd:function(G){this.R(this.Bdi);},Q4:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q4(E);},ASd:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Aff:function(AoP){return A.abf(this.M.slice(
0,2),this.Text.Aff(AoP));},Aw1:function(E){if(this.N3===E)return;this.N3=E;A.pe([
this,this.Ajo],this);},Bm3:function(E){if(this.AUf===E)return;this.AUf=E;A.pe([this
,this.Ajo],this);},Bm4:function(E){if(this.A_T===E)return;this.A_T=E;A.pe([this,
this.Ajo],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHs);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHs);this.Text.R(Rn);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjV={Y:null,IK:null,AeJ:null,I5:null,M6:null,AeD:null,AeI:null,AeH:null,AeE:
null,AeG:null,AeF:null,M8:null,NT:null,Mr:null,De:function(E){C.Yx.De.call(this,
E);this.IK.L(E);this.AeJ.L(E);this.I5.L(E);this.M6.L(E);this.Mr.L(E);this.AeD.L(
E);this.M8.L(E);this.NT.L(E);this.AeI.L(E);this.AeH.L(E);this.AeE.L(E);this.AeG.
L(E);this.AeF.L(E);},DY:function(G){C.Yx.DY.call(this,G);this.XP(8,1,this.M6);this.
XP(12,1,this.Mr);this.XP(11,1,this.AeD);this.XP(7,1,this.M8);this.XP(14,1,this.NT
);this.XP(1,4,this.IK);this.XP(1,1,this.AeJ);this.XP(4,1,this.I5);this.XP(22,1,this.
AeI);this.XP(26,1,this.AeH);this.XP(30,1,this.AeE);this.XP(19,1,this.AeG);this.XP(
31,1,this.AeF);this.Text.Z(!this.Y.TO(null,0x1));},XP:function(AJj,Eb,AfS){var AA_=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adi=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJj,Eb);if(!!Adi){AA_=true;switch(AJj){case 14:{var
Azn=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adi)?Adi:null);if(!!Azn)AfS.
Aw(A._GetAutoObject(A.Device.Converter).A4R(Azn.A4));}break;case 7:{var Azn=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adi)?Adi:null);if(!!Azn)AfS.Aw(A._GetAutoObject(
A.Device.Converter).AmV(Azn.A4));}break;case 1:if(Eb===4)AfS.Aw(A.aaL(A.ach.ADE)
);else if(Adi.Operator===4)AA_=false;break;case 22:switch(Adi.Operator){case 0:case
3:AfS.Aw(A.aaL(A.ach.AQu));break;default:AfS.Aw(A.aaL(A.ach.Aj1));}break;case 26:
switch(Adi.Operator){case 0:case 3:AfS.Aw(A.aaL(A.ach.AQs));break;default:AfS.Aw(
A.aaL(A.ach.Avv));}break;default:;}}else if((AJj===1)&&(Eb===4)){AA_=true;AfS.Aw(
A.aaL(A.ach.AeA));}}else if((AJj===1)&&(Eb===4)){AA_=true;AfS.Aw(A.aaL(A.ach.AeA
));}AfS.Z(AA_);},_Init:function(aArg){C.Yx._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0);A.acg.Ap._Init.call(
this.AeJ={I:this},0);A.acg.Ap._Init.call(this.I5={I:this},0);A.acg.Ap._Init.call(
this.M6={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap._Init.call(
this.AeE={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.M8={I:this},0);A.acg.Ap._Init.call(
this.NT={I:this},0);A.acg.Ap._Init.call(this.Mr={I:this},0);this.__proto__=C.AjV;
this.Y.AZ(0x3F);this.Y.H(AHt);this.Y.JP(3);this.IK.H(Aot);this.AeJ.H(Ayd);this.AeJ.
Aj(true);this.I5.H(AV7);this.I5.Aj(true);this.M6.H(AV8);this.M6.Aj(true);this.AeD.
H(AV9);this.AeD.Aj(true);this.AeI.H(AHu);this.AeI.Aj(true);this.AeH.H(AHu);this.
AeH.Aj(true);this.AeE.H(AV_);this.AeE.Aj(true);this.AeG.H(AHv);this.AeG.Aj(true);
this.AeF.H(AHv);this.AeF.Aj(true);this.M8.H(AHw);this.M8.Aj(true);this.NT.H(AHx);
this.NT.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mr.H(AHw);this.Mr.Aj(true);
this.JV(this.Gw,-3);this.JV(this.D2,-3);this.JV(this.A_,-3);this.JV(this.AP,-2);
this.J(this.Y,-2);this.J(this.IK,-2);this.J(this.AeJ,-2);this.J(this.I5,-2);this.
J(this.M6,-2);this.J(this.AeD,-2);this.J(this.AeI,-2);this.J(this.AeH,-2);this.J(
this.AeE,-2);this.J(this.AeG,-2);this.J(this.AeF,-2);this.J(this.M8,-2);this.J(this.
NT,-2);this.J(this.Mr,0);this.IK.Aw(A.aaL(A.ach.AeA));this.AeJ.Aw(A.aaL(A.ach.AQj
));this.I5.Aw(A.aaL(A.ach.APK));this.M6.Aw(A.aaL(A.ach.ADy));this.AeD.Aw(A.aaL(A.
ach.AbG));this.AeI.Aw(A.aaL(A.ach.Aj1));this.AeH.Aw(A.aaL(A.ach.Avv));this.AeE.Aw(
A.aaL(A.ach.AQh));this.AeG.Aw(A.aaL(A.ach.AQi));this.AeF.Aw(A.aaL(A.ach.AQg));this.
M8.Aw(A.aaL(A.ach.ADA));this.NT.Aw(A.aaL(A.ach.AvA));this.Mr.Aw(A.aaL(A.ach.ADH)
);},_Done:function(){this.__proto__=C.Yx;this.Y._Done();this.IK._Done();this.AeJ.
_Done();this.I5._Done();this.M6._Done();this.AeD._Done();this.AeI._Done();this.AeH.
_Done();this.AeE._Done();this.AeG._Done();this.AeF._Done();this.M8._Done();this.
NT._Done();this.Mr._Done();C.Yx._Done.call(this);},_ReInit:function(){C.Yx._ReInit.
call(this);this.Y._ReInit();this.IK._ReInit();this.AeJ._ReInit();this.I5._ReInit(
);this.M6._ReInit();this.AeD._ReInit();this.AeI._ReInit();this.AeH._ReInit();this.
AeE._ReInit();this.AeG._ReInit();this.AeF._ReInit();this.M8._ReInit();this.NT._ReInit(
);this.Mr._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yx.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amv={H7:null,CD:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);this.H7.Gr();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rc.CD.call(this,G);},An9:function(){C.Rc.
An9.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bzd(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.C8.L(A._GetAutoObject(
A.acj.Temperature).Bzg(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ls));this.JK.L(A._GetAutoObject(A.acj.Temperature).Bze(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).Bzf(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Ls));this.ME.L(this.JK.AQ);this.TemperatureUnit.
L(this.JK.AQ);}break;default:;}},AcK:function(){C.Rc.AcK.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Ct(A.aaL(A.ach.AQC));this.N.C6(A.aaL(
A.ach.Am4));}break;case 4:{this.N.Ct(null);this.N.C6(A.aaL(A.ach.AvI));}break;default:;
}},WR:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ls>3240)&&(A._GetAutoObject(A.Device.
Device).Ls<5460)){A._GetAutoObject(A.Device.Device).AhM();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H7.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Ls);var B1=A._GetAutoObject(A.Device.Converter).AsJ(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls);this.H7.OnSetRatingTemperature(
B1);this.H7.Cg(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();
}break;case 4:this.AKy(this);break;default:;}},AkZ:function(G){C.Rc.AkZ.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dt(9);break;case 4:this.AKy(this);break;default:;}},AxT:function(
){C.Rc.AxT.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JK.R(A._GetAutoObject(A.acj.Temperature).Bzl(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));break;default:;}},AxU:function(
){C.Rc.AxU.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WF(A._GetAutoObject(A.acj.Temperature).Bzh(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ls));this.Jd.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WF(16711680
);this.Jd.Ar(true);}break;default:this.Jd.Ar(false);}},AUr:function(){this.C8.Aw(
A.aaL(A.ach.AvH));this.C8.Cw(A._GetAutoObject(A.acj.Temperature).Bzm(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.NR.Cw(
0);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.Amv;this.Dr(
C.II);this.H7=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rc._Mark.
call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahy={N2:null,DK:null,Ij:null,Bc:null,Auu:null,String:A.jV,AxH:A.jV,Mv:7,Ake:
2,KT:0,AUE:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Ake,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bi));else this.DK.S(A.aaL(A.fl.Ak));this.Ij.S(this.DK.B6);this.Ij.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WJ],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahs:function(
E){if(this.AxH===E)return;this.AxH=E;this.Ij.R(E);},Ab_:function(E){this.Mv=E;if(
E<10)this.AS3(2);else if(E<40)this.AS3(1);else this.AS3(0);A.pe([this,this.WJ],this
);},WJ:function(G){var B;while(!!this.Bc.Ah)this.HP(this.Bc.Ah);if(this.Mv>1){var
Add=this.AOJ();var A1W=this.AOH();var Apt=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az4;var AKY;var At5;var Amb=null;if(!!this.N2&&(this.N2.AY>0))Amb=this.N2.K0;
while((Add>=A1W)&&(Add>0)){var AtG=A._NewObject(C.Ajx,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Ake)*(((Add-A1W)/86400)|0))/this.Mv)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Ake)*((((Add-A1W)/86400)|0)+1))/this.Mv)|0;while(!!Amb&&(Amb.Timestamp>=
Add)){if(Amb.Timestamp<(Add+86400))AtG.Or(Amb.A4,Amb.Timestamp);Amb=Amb.Ah;}var Auf=
0;if(AtG.AY>0)Auf=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtG.AY
)|0;else if(this.Mv<10){Auf=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At5=A._NewObject(A.acg.Text,0);At5.H([x1,Apt,x2,Apt+Auf]);At5.S(A.aaL(A.fl.Bi));
At5.L(A.jb.Text);At5.R(A.aaR(A.acf.Afb));this.J(At5,0);}var AJM=AtG.K0;var O=0;while(
!!AJM){if(O>=AtG.AY)throw new Error(AV$);Az4=A._NewObject(A.acg.AK,0);Az4.L(A._GetAutoObject(
A.acj.Assessment).Ql(AJM.A4));if(O===(AtG.AY-1))Az4.H([x1,Apt+(O*Auf),x2,this.Bc.
M[1]]);else Az4.H([x1,Apt+(O*Auf),x2,Apt+((O+1)*Auf)]);this.J(Az4,0);AJM=AJM.Ah;
O=O+1;}if(this.AUE){var Bx2=A._GetAutoObject(A.Device.Helper).Aqs(A._GetAutoObject(
A.Device.Helper).Dq());var Bx1=A._GetAutoObject(A.Device.Helper).Aqs(Add);if(Bx2===
Bx1){var ALq=A._NewObject(A.acg.Aeo,0);ALq.L(A.jb.Text);var BdG=(x1+this.Ake)+(((
x2-x1)/2)|0);ALq.H([BdG-4,this.Bc.M[1]-4,BdG+4,this.Bc.M[1]]);ALq.Zz(this.Auu);this.
J(ALq,0);}}Add=Add-86400;if(this.Ake>0){AKY=A._NewObject(A.acg.AK,0);AKY.H([x1,Apt
,x1+this.Ake,Apt+((((B=this.M)[3]-B[1])/2)|0)]);AKY.L(A.jb.Bc);this.J(AKY,0);}}}
},Aca:function(E){this.N2=E;A.pe([this,this.WJ],this);},AS3:function(E){if(this.
Ake===E)return;this.Ake=E;A.pe([this,this.WJ],this);},De:function(E){if(this.KT===
E)return;this.KT=E;this.DK.L(E);this.Ij.L(E);},AOH:function(){var B;return this.
AOJ()-(((((B=this.Mv)<0)?B+0x100000000:B)-1)*86400);},AOJ:function(){return A._GetAutoObject(
A.Device.Converter).AhQ();},Bm7:function(E){if(this.AUE===E)return;this.AUE=E;A.
pe([this,this.WJ],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ij={I:this},0
);A.acg.AK._Init.call(this.Bc={I:this},0);C.AxR._Init.call(this.Auu={I:this},0);
this.__proto__=C.Ahy;this.H(BF);this.Ar(false);this.DK.H(AHy);this.DK.Hl(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ij.H(AHy);this.Ij.Hl(5);this.Ij.A6(0x14);this.
Ij.L(A.jb.Text);this.Bc.H(AWa);this.Bc.L(A.jb.Bc);this.KT=A.jb.Text;this.Auu.H(AHz
);this.J(this.DK,0);this.J(this.Ij,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ij.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ij._Done();this.Bc._Done();this.Auu._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ij._ReInit();this.Bc._ReInit();this.Auu._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ij.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Auu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4X={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4X;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajx={K0:null,MS:null,AY:0,Or:
function(A8,Qc){var Hf;Hf=A._NewObject(C.A4X,0);Hf.A4=A8;Hf.Timestamp=Qc;if(!this.
K0){this.K0=Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajx;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MH],this);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QF(X,Fh,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HI(X,true,null,null);this.DJ(this);},Al3:function(G){A._GetAutoObject(C.A$
).Fy();},ApO:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null).Agt)A.
pe((C.Cp.isPrototypeOf(B=this.AV)?B:null).Agt,this);},Fj:function(G){var B;this.
Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},DJ:function(G){var B;var GX=(C.Cp.isPrototypeOf(B=this.AV)?B:null);if(
!!GX){this.N.Hy(A.jV);this.N.CV(GX.AxK);this.N.Jc.Ds(255);this.N.HS.Ds(GX.Axf);this.
N.AE7(GX.Avi);this.N.AnA(GX.AmU);this.N.CY(GX.AQb);this.N.C6(GX.Aq$);GX.A20(this
);}},MH:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Ro);this.Background.L(A.jb.CS);this.N.H(Xg);this.
N.Ar(false);this.N.Z(true);this.Y.H(Fe);this.Y.JP(1);this.Ay.H(Is);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATK={Nz:null,ASK:null,Ad3:null,VG:null,GT:null,PopupTimeout:null,Ace:null,AgE:
null,PopupIdToString:null,AtC:null,Text:A.jV,AkM:A.jV,AJ6:A.jV,Ak6:0,ALb:-1,Azm:-
1,AKF:0,ATM:0,A15:false,CP:function(){this.A_h(this.PopupIdToString.BH(this.ATM)
);},Init:function(aArg){this.Bow(this);},Bgt:function(G){var B;if(this.Ak6>0){this.
A_v((this.Ak6/1000)|0);this.PopupTimeout.WC(0);this.PopupTimeout.PP(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxG(this);},Bgp:function(G){var Qv=this.
Text;var AfV=this.AkM;var AKD=A.abi(16,A.jV,null);var index=0;var Azh=0;while(AfV
!==A.jV){Azh=AfV.indexOf(A.Device.PopupParamSeparator,0);if(Azh!==-1){AKD.Set(index
,A.ab1(AfV,Azh,(AfV.length-Azh)+1));AfV=A.ab1(AfV,0,Azh+1);index=index+1;if(index>=
16){A.ab5("%s",(AWb+AfV)+AWc);AfV=A.jV;}}else{AKD.Set(index,AfV);AfV=A.jV;}}index=
0;while(index<Qv.length){if((Qv.charCodeAt(index)||0)===0x7B){var Bdh=Qv.indexOf(
String.fromCharCode(0x7D),index);if(Bdh===-1){A.ab5("%s",(((AWd+Qv)+AWe)+index.toFixed(
))+AfA);index=Qv.length;}else{var Bfa=(Bdh-index)-1;var A3z=A.abW(Qv,index+1,Bfa
);var AKC=A.wz(A3z,-1,10);Qv=A.ab1(Qv,index,Bfa+2);if(A3z===AWf)this.Bnm(index);
else if(((AKC>0)&&(AKC<=16))&&(this.AkM!==A.jV)){Qv=A.abU(Qv,AKD.Get(AKC-1),index
);if(this.A15===true)this.Bnl(A.wz(AKD.Get(AKC-1),0,10));}else A.ab5("%s",(AWg+A3z
)+AWh);}}index=index+1;}this.Bnk(Qv);},CD:function(G){A.pe([this,this.Bgt],this);
},Ai:function(Ae){var B;this.Ad3.H(A.aaT(this.GT.Db(),AhZ));this.VG.H(A.aaT(this.
GT.Db(),AhZ));if(!!this.Nz){this.Nz.H(A.abM(this.Nz.M,this.GT.M[0]));this.Nz.H(A.
abO(this.Nz.M,this.GT.M[3]+10));this.Nz.H(A.abL(this.Nz.M,(B=this.GT.M)[2]-B[0])
);this.Nz.H(A.abI(this.Nz.M,8));this.Ad3.H(A.abh(A.aaT(this.GT.Db(),AhZ),AHA));this.
VG.H(A.abh(A.aaT(this.GT.Db(),AhZ),AHA));}else{this.Ad3.H(A.aaT(this.GT.Db(),AhZ
));this.VG.H(A.aaT(this.GT.Db(),AhZ));}},DE:function(G){var Jz=(A.Core.BM.isPrototypeOf(
G)?G:null);if((Jz.CO===4)&&((this.VG.M[1]+this.M[1])<this.M[1])){this.GT.H(A.abO(
this.GT.M,this.GT.M[1]+28));this.Am();}else if((Jz.CO===5)&&((this.VG.M[3]+this.
M[1])>this.N.M[1])){this.GT.H(A.abO(this.GT.M,this.GT.M[1]-28));this.Am();}if((Jz.
CO===6)&&!!this.D_().CC)this.D_().AFe(1);else if((Jz.CO===7)&&!!this.D_().Cm)this.
D_().AFe(3);},IY:function(G){switch(this.D_().Ahi){case 1:this.Al3(this);break;case
3:this.ApO(this);break;case 2:this.AAA(this);break;case 0:break;default:A.ab5("%s%e"
,AWi,this.D_().Ahi);}},Al3:function(G){var B;(B=this.D_().CC)?B[1].call(B[0],this
):null;},ApO:function(G){var B;(B=this.D_().Cm)?B[1].call(B[0],this):null;},AAA:
function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},LO:function(G){this.
N.I6.L((this.N.I6.AQ&0x00FFFFFF)|(100<<24));},E6:function(G){var B;this.PopupTimeout.
AxG(this);},A_h:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgp],this);},BAq:function(G){var B;this.A_v(this.Azm-1);if(this.Azm<=0){this.PopupTimeout.
AxG(this);(B=this.ASK)?B[1].call(B[0],this):null;}},A_j:function(E){if(this.Ak6===
E)return;this.Ak6=E;A.pe([this,this.Bgt],this);},A96:function(E){if(this.AkM===E
)return;this.AkM=E;A.pe([this,this.Bgp],this);},Bnk:function(E){if(this.AJ6===E)
return;this.AJ6=E;this.ABr(this);this.Bx9(this);},ABr:function(G){if((this.Azm!==-
1)&&(this.ALb!==-1)){var ByZ=this.AtC.Format(AWj);this.GT.R(A.abU(this.AJ6,ByZ,this.
ALb));}else this.GT.R(this.AJ6);this.GT.H(AHB);},Bnm:function(E){if(this.ALb===E
)return;this.ALb=E;this.ABr(this);},A_v:function(E){if(this.Azm===E)return;this.
Azm=E;this.AtC.AFJ(E);A.pe([this,this.ABr],this);},Bx9:function(G){this.GT.Db();
if(this.GT.M[1]<=this.M[1])this.GT.H(A.abO(this.GT.M,28));this.Am();},A_x:function(
E){if(this.A15===E)return;this.A15=E;if(E===true)A.pe([this,this.BA1],this);},BA1:
function(G){if(!this.Nz){this.Nz=A._NewObject(A.acr.ADn,0);this.Nz.Gc(0);this.Nz.
EV(100);this.Nz.OnSetAppearance(this.Ace);this.J(this.Nz,0);this.AhB(this.Nz,this.
GT);}this.Nz.By(this.AKF);},Bnl:function(E){if(this.AKF===E)return;this.AKF=E;if(
!!this.Nz)this.Nz.By(this.AKF);},Bow:function(G){var B;this.N.Ds(0);this.AgE.AnY(
this);},BmX:function(E){if(this.ATM===E)return;this.ATM=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad3={I:this},0);A.acg.BU._Init.
call(this.VG={I:this},0);A.acg.Text._Init.call(this.GT={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADo._Init.call(this.Ace={I:this},
0);A.acl.Gm._Init.call(this.AgE={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtC={I:this},0);this.
__proto__=C.ATK;var B;this.H(Cc);this.Background.H(Fe);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad3.H(AHC);this.
Ad3.L(A.jb.CK);this.VG.H(AHC);this.VG.Ng(2);this.VG.L(A.jb.Text);this.GT.H(AHB);
this.GT.Hl(10);this.GT.I9(true);this.GT.Bnj(0);this.GT.KS(true);this.GT.L(A.jb.Text
);this.PopupTimeout.PP(0);this.Ace.A_o(0);this.Ace.A_m(A.jb.AV);this.Ace.A_l(0);
this.Ace.AFZ(AHh);this.AgE.HO(1);this.AgE.B2=255;this.AgE.Cx=0;this.JV(this.Ej,-
1);this.J(this.Ad3,0);this.J(this.VG,0);this.J(this.GT,0);this.GT.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mz=[this,this.BAq];this.Ace.A_n(A.aaL(A.ach.NS));this.Ace.A_k(
A.aaL(A.ach.NS));this.AgE.Q=[B=this.N,B.Awi,B.AZ6];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad3._Done();this.VG._Done();this.GT._Done();this.PopupTimeout.
_Done();this.Ace._Done();this.AgE._Done();this.PopupIdToString._Done();this.AtC.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad3._ReInit();this.VG._ReInit();this.GT._ReInit();this.PopupTimeout._ReInit();this.
Ace._ReInit();this.AgE._ReInit();this.PopupIdToString._ReInit();this.AtC._ReInit(
);this.GT.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASK)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtC)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mn={Ai:function(Ae
){C.Cp.Ai.call(this,Ae);var FS=A.jb.CK;var GW=A.jb.Text;if(this.Hj){FS=A.jb.Text;
GW=A.jb.Bm;}if(!this.LI){this.Background.L(FS);this.V.L(A.jb.Am5);}else if(this.
Qp){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GW);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Mn;},_className:"Application::DarkThemeMenuItem"
};C.Ank={AdB:0,_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.
Ank;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={XF:function(G){A._GetAutoObject(
A.Device.Device).Dt(0);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);
this.Bx.Cm=[this,this.A21];this.Bx.Cl=null;this.Bx.CC=[this,this.XF];this.Bx.CV(
A.aaR(A.acf.Ok));this.Bx.Ct(null);this.Bx.CY(A.aaL(A.ach.Aey));}return this.Bx;}
,A21:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null))(C.Cp.isPrototypeOf(
B=this.AV)?B:null).IY(this);},CD:function(G){},AIH:function(s){this.CD(s);},E6:function(
G){},AyB:function(s){this.E6(s);},_Init:function(aArg){C.Abl._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APG={V$:
null,YU:null,YN:null,Init:function(aArg){this.Bb(this.V$);},Adt:function(G){var Aa=(
C.Cp.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YU)A._GetAutoObject(A.Device.
Device).A7(6,true,A.jV,0,[this,this.BBd]);else if(Aa===this.V$)A._GetAutoObject(
A.Device.Device).A7(9,true,A.jV,0,[this,this.BBz]);else if(Aa===this.YN)A._GetAutoObject(
C.A$).Cf(4);else throw new Error(Aye);A._GetAutoObject(A.Device.Device).Dt(0);},
BBd:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AGl();},BBz:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Axx();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mn._Init.call(this.V$={I:this},0);C.Mn._Init.call(this.YU={I:this
},0);C.Mn._Init.call(this.YN={I:this},0);this.__proto__=C.APG;this.H(AcR);this.V$.
H(BF);this.V$.Ar(true);this.V$.T(A.aaR(A.acf.A_$));this.V$.Bh(true);this.YU.H(IT
);this.YU.Ar(true);this.YU.T(A.aaR(A.acf.A_S));this.YU.Bh(true);this.YN.H(P9);this.
YN.Ar(true);this.YN.T(A.aaR(A.acf.SR));this.YN.Bh(true);this.J(this.V$,0);this.J(
this.YU,0);this.J(this.YN,0);this.V$.AR=[this,this.Adt];this.YU.AR=[this,this.Adt
];this.YN.AR=[this,this.Adt];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V$._Done();this.YU._Done();this.YN._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V$._ReInit(
);this.YU._ReInit();this.YN._ReInit();this.V$.T(A.aaR(A.acf.A_$));this.YU.T(A.aaR(
A.acf.A_S));this.YN.T(A.aaR(A.acf.SR));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GJ={AaI:null,OverlayMenu:null,WM:null,A3T:null
,La:null,A3y:null,AkN:null,N0:null,Az_:100,Init:function(aArg){var B;A.zX([this,
this.BeD],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyK],0);A.zX([this,this.Bex
],[B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZ4],0);A.zX([this,this.A2S],[B=A.
_GetAutoObject(A.Device.Device),B.Av9,B.AyD],0);A.zX([this,this.BzY],[B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyC],0);A.zX([this,this.BzZ],[B=A._GetAutoObject(A.Device.
Device),B.A8i,B.BaN],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device
),B.ASB,B.A0a],0);A.zX([this,this.BeU],[B=A._GetAutoObject(A.Device.Device),B.Wy
,B.Xh],0);A.pe([this,this.BeD],this);A.pe([this,this.Bex],this);A.pe([this,this.
ApP],this);A.pe([this,this.BeU],this);this.A3T.As([B=this.WM,B.AEq,B.Zt]);this.J(
this.WM,0);this.Bb(this.WM);this.BxM(this);},Ai:function(Ae){},Bex:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AEd){if(!this.AaI){this.AaI=A._NewObject(
C.Asv,0);this.AaI.H(A.abJ(this.AaI.M,this.WM.M.slice(0,2)));this.AaI.H(A.abO(this.
AaI.M,this.WM.M[3]-((B=this.AaI.M)[3]-B[1])));this.J(this.AaI,1);}}else{if(!!this.
AaI)this.HP(this.AaI);this.AaI=null;}},BeD:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dt(null);break;case 1:this.Dt(A._NewObject(
C.APG,0));break;case 8:this.Dt(A._NewObject(C.ALY,0));break;case 2:this.Dt(A._NewObject(
C.ALV,0));break;case 3:this.Dt(A._NewObject(C.AL1,0));break;case 4:this.Dt(A._NewObject(
C.AT4,0));break;case 5:this.Dt(A._NewObject(C.AVy,0));break;case 6:this.Dt(A._NewObject(
C.ATF,0));break;case 7:this.Dt(A._NewObject(C.Amx,0));break;case 11:this.Dt(A._NewObject(
C.AMu,0));break;case 12:this.Dt(A._NewObject(C.AMt,0));break;case 9:this.Dt(A._NewObject(
C.ARA,0));break;case 10:this.Dt(A._NewObject(C.AMp,0));break;case 14:this.Dt(A._NewObject(
C.ARw,0));break;case 15:this.Dt(A._NewObject(C.ARx,0));break;case 13:this.Dt(A._NewObject(
C.ARy,0));break;case 16:this.Dt(A._NewObject(C.ATU,0));break;case 17:this.Dt(A._NewObject(
C.AMQ,0));break;default:throw new Error(AWk+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Dt:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.WH).ArI(null);this.N0.AqI(this.OverlayMenu,A._GetAutoObject(
C.AxA),null,null,[B=this.OverlayMenu,B.AyB],null,true);this.Bb(this.WM);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.AkP(this.OverlayMenu,A._GetAutoObject(C.Axz),null
,null,null,null,null,[B=this.OverlayMenu,B.AIH],null,false);this.Bb(this.N0);A._GetAutoObject(
C.WH).ArI(this.OverlayMenu.KR());}else if(!!this.La){this.Bb(this.N0);A._GetAutoObject(
C.WH).ArI(this.La.Aku().KR());}},Ahn:function(E){var B;if(this.La===E)return;if(
!!this.La){A._GetAutoObject(C.WH).ArI(null);this.N0.AqI(this.La.Aku(),A._GetAutoObject(
C.Afh),null,null,[B=this.La.Aku(),B.AyB],null,false);this.Bb(this.WM);}this.La=E;
if(!!this.La){this.N0.AkP(this.La.Aku(),A._GetAutoObject(C.Afh),null,null,null,null
,null,[this,this.Blg],null,false);this.Bb(this.N0);A._GetAutoObject(C.WH).ArI(this.
La.Aku().KR());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
WH).ArI(this.OverlayMenu.KR());}},BxM:function(G){var B;var F;this.J(this.A3y,0);(
F=A._GetAutoObject(C.WH),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WH).M)[3]-B[1]))));this.ZI(this.N0);},A2S:function(G){if(A._GetAutoObject(A.Device.
Device).AmE)switch(A._GetAutoObject(A.Device.Device).KH){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Ahu(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa7<98)A._GetAutoObject(C.A$).Cf(4);}else{this.Az_=100;this.Bco();}},BzY:
function(G){this.Bco();},Bco:function(){if(!A._GetAutoObject(A.Device.Device).AmE
){if(A._GetAutoObject(A.Device.Device).Aa7<=2){if(this.Az_>2)switch(A._GetAutoObject(
A.Device.Device).KH){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Ahu(38);
break;default:A._GetAutoObject(C.A$).Cf(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa7<=10){if(this.Az_>10)switch(A._GetAutoObject(A.Device.Device).KH){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Ahu(39);break;default:A._GetAutoObject(
C.A$).Cf(39);}}else if(A._GetAutoObject(A.Device.Device).Aa7<=20){if(this.Az_>20
)switch(A._GetAutoObject(A.Device.Device).KH){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Ahu(39);break;default:A._GetAutoObject(C.A$).Cf(39);}}else switch(A._GetAutoObject(
A.Device.Device).KH){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fy();break;default:;
}this.Az_=A._GetAutoObject(A.Device.Device).Aa7;}},BzZ:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqv){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A7(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A7(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0
);}break;default:A.ab5("%s",AWl+A._GetAutoObject(A.Device.Device).Aqv.toFixed());
}},ApP:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dt(0);A._GetAutoObject(C.A$).Cf(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KH===5)A._GetAutoObject(C.A$).Ahu(3);break;
default:;}},BeU:function(G){switch(A._GetAutoObject(A.Device.Device).AhS){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Ur(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WF(65535);A._GetAutoObject(A.Device.Device).Ur(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WF(255);A._GetAutoObject(A.Device.Device).Ur(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WF(16776960);A._GetAutoObject(
A.Device.Device).Ur(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WF(16711935
);A._GetAutoObject(A.Device.Device).Ur(true);}break;default:A.ab5("%s",AWm+A._GetAutoObject(
A.Device.Device).AhS.toFixed());}},Blg:function(G){var B;this.La.Aku().CD(this);
this.La.BAo(this);},Bkk:function(){return this.La;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkN._Init.call(this.AkN={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GJ;this.H(Cc);this.N0.H(Ro);this.J(this.N0,0);this.
WM=A._NewObject(C.WM,0);this.A3T=A._GetAutoObject(C.A$);this.AkN.ANv=[this,this.
Bkk,this.Ahn];this.A3y=A._GetAutoObject(C.WH);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkN._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkN._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3T)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3y)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abl={A_H:null,Bx:null,N:null,Cr:null,Anb:null,And:null,QP:null,Anc:null,Am$:
null,Anf:null,Ana:null,DE:function(G){var Fh=0;var X=this.AV;switch(this.Cr.CO){
case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QF(X,Fh,0x14);if(!!X)this.Bb(X);},Bbj:function(s){this.DE(s);},Al3:function(
G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);if(D5.Acl&&(this.D_().Asq===false)
)return;A.pe(this.D_().CC,this);},AIU:function(s){this.Al3(s);},ApO:function(G){
var D5=(A.Core.BM.isPrototypeOf(G)?G:null);if(D5.Acl&&(this.D_().ZH===false))return;
A.pe(this.D_().Cm,this);},AIX:function(s){this.ApO(s);},IY:function(G){if(this.QP.
Acl)return;},Atj:function(s){this.IY(s);},AAA:function(G){var D5=(A.Core.BM.isPrototypeOf(
G)?G:null);if(D5.Acl&&(this.D_().ZG===false))return;A.pe(this.D_().Cl,this);},AIW:
function(s){this.AAA(s);},D_:function(){if(!!this.KR())return this.Bx;else return this.
N;},KR:function(){return this.Bx;},GQ:function(E){this.A_H=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BM._Init.
call(this.Cr={I:this},0);A.Core.BM._Init.call(this.Anb={I:this},0);A.Core.BM._Init.
call(this.And={I:this},0);A.Core.BM._Init.call(this.QP={I:this},0);A.Core.BM._Init.
call(this.Anc={I:this},0);A.Core.BM._Init.call(this.Am$={I:this},0);A.Core.BM._Init.
call(this.Anf={I:this},0);A.Core.BM._Init.call(this.Ana={I:this},0);this.__proto__=
C.Abl;this.H([0,0,C.Asy[0],C.Asy[1]]);this.N.H(Xg);this.N.Ar(false);this.N.Z(false
);this.Cr.Filter=147;this.Anb.Filter=26;this.And.Filter=28;this.QP.Filter=1;this.
Anc.Filter=27;this.Am$.Filter=44;this.Anf.Filter=9;this.Ana.Filter=42;this.J(this.
N,0);this.Cr.BN=[this,this.Bbj];this.Cr.D1=[this,this.Bbj];this.Anb.BN=[this,this.
AIU];this.Anb.D1=[this,this.AIU];this.And.BN=[this,this.AIX];this.And.D1=[this,this.
AIX];this.QP.BN=[this,this.Atj];this.QP.D1=[this,this.Atj];this.Anc.BN=[this,this.
AIW];this.Anc.D1=[this,this.AIW];this.Am$.BN=[this,this.AIU];this.Am$.D1=[this,this.
AIU];this.Anf.BN=[this,this.AIX];this.Anf.D1=[this,this.AIX];this.Ana.BN=[this,this.
AIW];this.Ana.D1=[this,this.AIW];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.Anb._Done();this.And._Done();this.QP._Done();this.
Anc._Done();this.Am$._Done();this.Anf._Done();this.Ana._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.Anb._ReInit();this.And._ReInit();this.QP._ReInit();this.Anc._ReInit(
);this.Am$._ReInit();this.Anf._ReInit();this.Ana._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_H)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axz={_Init:function(){A.acl.AGI._Init.call(this,0);this.Kg=0x22;this.Ad7=true;
this.AuY=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxA={_Init:function(){A.acl.AGI._Init.call(this,0);this.Kg=0x22;this.Ad7=true;
this.AuY=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUC={Sc:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Ael.Sc.call(this
))?B:null);if(!Ao)throw new Error(As4);Ao.Cq.Cx=100;return Ao;},Sb:function(){var
B;var Ao=(A.acl.Axg.isPrototypeOf(B=A.acl.Ael.Sb.call(this))?B:null);if(!Ao)throw new
Error(As4);Ao.E3.B2=100;return Ao;},_Init:function(aArg){A.acl.Ael._Init.call(this
,aArg);this.__proto__=C.AUC;},_className:"Application::ShadeTransition"};C.Am0={
Ag6:null,SW:null,HR:null,DS:null,AnimalId:-1,GroupId:-1,AC6:true,De:function(E){
C.BR.De.call(this,E);this.SW.L(E);this.HR.L(E);this.Ag6.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HR.R(A.aaR(A.acf.Afb)
);else this.HR.R(E.toFixed());},Ab8:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SW.R(A.aaR(A.acf.Afb));else this.SW.R(E.toFixed());},DY:function(
G){},Nm:function(s){this.DY(s);},A9O:function(E){if(this.AC6===E)return;this.AC6=
E;this.SW.Z(this.AC6);this.Ag6.Z(this.AC6);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag6={I:this},0);A.acg.Text._Init.call(this.SW={
I:this},0);A.acg.Text._Init.call(this.HR={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am0;this.Ag6.H(AWn);this.SW.H(AWo);this.SW.A6(0x11);this.
SW.R(A.aaR(A.acf.Afb));this.HR.H(AWp);this.HR.A6(0x11);this.HR.R(A.aaR(A.acf.Afb
));this.DS.H(AWq);this.J(this.Ag6,0);this.J(this.SW,0);this.J(this.HR,0);this.J(
this.DS,0);this.Ag6.Aw(A.aaL(A.ach.AQn));this.SW.S(A.aaL(A.fl.Af));this.HR.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag6._Done();this.SW._Done(
);this.HR._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag6._ReInit();this.SW._ReInit();this.HR._ReInit();this.DS.
_ReInit();this.SW.R(A.aaR(A.acf.Afb));this.HR.R(A.aaR(A.acf.Afb));this.SW.S(A.aaL(
A.fl.Af));this.HR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADe={Init:function(
aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.ArE,B.SI
],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8B,B.AnE],0);
A.zV([this,this.Nm],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nm],[
B=A._GetAutoObject(A.Device.Helper).W,B.PN,B.EB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9c,B.Axc],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8s,B.Ae1],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8t,B.Uo],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8w,B.Ae5],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8A,B.
Ae7],0);A.pe([this,this.Nm],this);},De:function(E){C.Am0.De.call(this,E);this.DS.
De(E);},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq2()){this.Ab8(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab8(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AE0(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae1(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uo(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae5(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae7(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.
__proto__=C.ADe;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kj={AhN:A.abi(3,A.jV,null),Cb:A.abi(3,0,{0:7,1:30,2:90}),Ano:3,Dn:function(){
if(this.Ano<3)return this.Ano;else return 3;},C4:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ano))return-1;return this.Cb.Get(aIndex);},F$:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ano))return AWr;return this.AhN.Get(aIndex);},DU:function(
A8){var O=0;while((O<3)&&(O<=this.Ano)){if(this.Cb.Get(O)===A8)return O;O=O+1;}return-
1;},HK:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ano)){if(this.Cb.Get(
O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhN=[]).__proto__=C.Kj.AhN;(this.Cb=[]).__proto__=C.Kj.Cb;this.
__proto__=C.Kj;this.AhN.Set(0,A.aaR(A.acf.A7f));this.AhN.Set(1,A.aaR(A.acf.A7d));
this.AhN.Set(2,A.aaR(A.acf.A7e));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhN.Set(0,A.aaR(A.acf.A7f));this.AhN.Set(1,A.aaR(A.acf.A7d));this.AhN.Set(2,A.aaR(
A.acf.A7e));},_className:"Application::Days"};C.AUz={Amz:null,BT:null,Q5:null,QC:
null,A$v:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAI],[B=A._GetAutoObject(A.Device.Device),B.ArC,B.Ati],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Du.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWs+A._GetAutoObject(
A.Device.Converter).Ak4((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlN());this.H4.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6C())&&(
Fu||GE));},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));
},J$:function(G){var F;var BQ=this.AM;C.Du.J$.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6C()){this.By(this.AM+10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J6:function(G){var F;var BQ=this.
AM;C.Du.J6.call(this,G);this.By(this.AM-10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_q:function(E){if(this.A$v===E)return;
this.A$v=E;this.Am();},BAI:function(G){this.Am();},_Init:function(aArg){C.Du._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amz={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AK._Init.call(this.Q5={I:this},0);A.acg.Ap._Init.call(this.QC={
I:this},0);this.__proto__=C.AUz;this.H(UX);this.Background.H(UX);this.V.H(As5);this.
V.L(A.jb.Bm);this.Amz.H(AWt);this.Amz.L(A.jb.Afs);this.Hx.H(AWu);this.BT.H(AWv);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H4.H(AWw);this.Q5.H(AWx);this.Q5.L(A.
jb.E4);this.QC.H(AWy);this.J(this.Amz,-2);this.J(this.BT,-1);this.J(this.Q5,0);this.
J(this.QC,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QC.Aw(A.aaL(A.ach.ADv));this.Init(aArg
);},_Done:function(){this.__proto__=C.Du;this.Amz._Done();this.BT._Done();this.Q5.
_Done();this.QC._Done();C.Du._Done.call(this);},_ReInit:function(){C.Du._ReInit.
call(this);this.Amz._ReInit();this.BT._ReInit();this.Q5._ReInit();this.QC._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.
Amz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_Z={Q:null
,Ai7:null,Init:function(aArg){var B;A.zX([this,this.Bea],[B=A._GetAutoObject(A.Device.
Device),B.AEq,B.BaH],0);A.pe([this,this.Bea],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahu:function(Alq){A._GetAutoObject(A.Device.Device).Zt(Alq
);},Bea:function(G){var F;if(!this.Q){A.ab5("%s",AWz);return;}var Bz=null;if(this.
Ai7.Contains(A._GetAutoObject(A.Device.Device).KH)){Bz=this.Ai7.A_F();while(!!Bz&&(
Bz.An8!==A._GetAutoObject(A.Device.Device).KH))Bz=this.Ai7.A_F();}if(!Bz)Bz=this.
Bzk(A._GetAutoObject(A.Device.Device).KH);(F=this.Q,F[2].call(F[0],Bz));},Bzk:function(
Alq){var Bz=null;switch(Alq){case 0:case 1:Bz=A._NewObject(C.AUH,0);break;case 2:
Bz=A._NewObject(C.X5,0);break;case 3:Bz=A._NewObject(C.Avt,0);break;case 53:Bz=A.
_NewObject(C.AVm,0);break;case 77:Bz=A._NewObject(C.NewMenu,0);break;case 27:Bz=
A._NewObject(C.ARQ,0);break;case 6:Bz=A._NewObject(C.ARp,0);break;case 16:Bz=A._NewObject(
C.AND,0);break;case 22:Bz=A._NewObject(C.AVh,0);break;case 17:Bz=A._NewObject(C.
AUY,0);break;case 42:Bz=A._NewObject(C.ANA,0);break;case 87:Bz=A._NewObject(C.AUa
,0);break;case 88:Bz=A._NewObject(C.AT$,0);break;case 89:Bz=A._NewObject(C.AVd,0
);break;case 95:Bz=A._NewObject(C.AVf,0);break;case 23:Bz=A._NewObject(C.AVF,0);
break;case 18:Bz=A._NewObject(C.ANQ,0);break;case 19:Bz=A._NewObject(C.AUb,0);break;
case 37:Bz=A._NewObject(C.AQS,0);break;case 76:Bz=A._NewObject(C.ATS,0);break;case
63:Bz=A._NewObject(C.ANO,0);break;case 64:Bz=A._NewObject(C.ANP,0);break;case 82:
Bz=A._NewObject(C.ANN,0);break;case 83:Bz=A._NewObject(C.ANL,0);break;case 92:Bz=
A._NewObject(C.ANJ,0);break;case 93:Bz=A._NewObject(C.ANM,0);break;case 65:Bz=A.
_NewObject(C.ANK,0);break;case 5:Bz=A._NewObject(C.AUR,0);break;case 4:Bz=A._NewObject(
C.Ad9,0);break;case 39:Bz=A._NewObject(C.ANa,0);break;case 38:Bz=A._NewObject(C.
ANt,0);break;case 28:Bz=A._NewObject(C.Wt,0);break;case 7:Bz=A._NewObject(C.AqL,
0);break;case 81:Bz=A._NewObject(C.ANY,0);break;case 31:Bz=A._NewObject(C.Arv,0);
break;case 78:Bz=A._NewObject(C.ARO,0);break;case 34:Bz=A._NewObject(C.ALT,0);break;
case 35:Bz=A._NewObject(C.ManualActionScanScreen,0);break;case 32:Bz=A._NewObject(
C.SetTransponderScreen,0);break;case 45:Bz=A._NewObject(C.SetSaveTransponderScreen
,0);break;case 49:Bz=A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:
Bz=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case 79:Bz=A._NewObject(
C.MotherScanScreen,0);break;case 80:Bz=A._NewObject(C.SetSaveNaisIdScreen,0);break;
case 8:Bz=A._NewObject(C.GZ,0);break;case 9:Bz=A._NewObject(C.I2,0);break;case 24:
Bz=A._NewObject(C.AL_,0);break;case 10:Bz=A._NewObject(C.Amv,0);break;case 21:Bz=
A._NewObject(C.AMc,0);break;case 11:Bz=A._NewObject(C.AMb,0);break;case 29:Bz=A.
_NewObject(C.AuF,0);break;case 48:Bz=A._NewObject(C.AMa,0);break;case 30:Bz=A._NewObject(
C.AL$,0);break;case 12:Bz=A._NewObject(C.AL9,0);break;case 40:Bz=A._NewObject(C.
AL8,0);break;case 14:Bz=A._NewObject(C.ANr,0);break;case 13:Bz=A._NewObject(C.ANs
,0);break;case 20:Bz=A._NewObject(C.AVw,0);break;case 41:Bz=A._NewObject(C.AVv,0
);break;case 43:Bz=A._NewObject(C.AOA,0);break;case 44:Bz=A._NewObject(C.AOz,0);
break;case 61:Bz=A._NewObject(C.ANX,0);break;case 62:Bz=A._NewObject(C.ANW,0);break;
case 46:Bz=A._NewObject(C.AR3,0);break;case 47:Bz=A._NewObject(C.AR2,0);break;case
85:Bz=A._NewObject(C.AVL,0);break;case 86:Bz=A._NewObject(C.AVK,0);break;case 71:
Bz=A._NewObject(C.ARY,0);break;case 72:Bz=A._NewObject(C.ARX,0);break;case 74:Bz=
A._NewObject(C.AMR,0);break;case 90:Bz=A._NewObject(C.ATV,0);break;case 73:Bz=A.
_NewObject(C.AUc,0);break;case 51:Bz=A._NewObject(C.ALX,0);break;case 52:Bz=A._NewObject(
C.ALW,0);break;case 15:Bz=A._NewObject(C.AT1,0);break;case 60:Bz=A._NewObject(C.
AUX,0);break;case 69:Bz=A._NewObject(C.ARn,0);break;case 70:Bz=A._NewObject(C.ARm
,0);break;case 26:Bz=A._NewObject(C.ARR,0);break;case 54:Bz=A._NewObject(C.ARN,0
);break;case 25:Bz=A._NewObject(C.AN$,0);break;case 66:Bz=A._NewObject(C.AOa,0);
break;case 59:Bz=A._NewObject(C.AN_,0);break;case 58:Bz=A._NewObject(C.AOb,0);break;
case 56:Bz=A._NewObject(C.AOc,0);break;case 57:Bz=A._NewObject(C.AqO,0);break;case
68:Bz=A._NewObject(C.AOd,0);break;case 67:Bz=A._NewObject(C.AN8,0);break;case 84:
Bz=A._NewObject(C.AMe,0);break;case 33:Bz=A._NewObject(C.WeightListScreen,0);break;
case 36:Bz=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:Bz=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:Bz=A._NewObject(C.AMr,0);break;case 91:
Bz=A._NewObject(C.AU3,0);break;case 94:Bz=A._NewObject(C.Aqi,0);break;default:throw new
Error(AWA);}if(!!Bz)Bz.An8=Alq;return Bz;},Cf:function(Alq){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWB);else this.Ai7.BnN((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zt(Alq);},Fy:function(){var Bfq=3;var Bfp=this.Ai7.
BnC();if(!!Bfp)Bfq=Bfp.An8;else A.ab5("%s",AWC);A._GetAutoObject(A.Device.Device
).Zt(Bfq);},_Init:function(aArg){C.A_1._Init.call(this.Ai7={I:this},0);this.__proto__=
C.A_Z;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.Ai7._Done(
);A.h7--;},_ReInit:function(){this.Ai7._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_Z._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AGc={H7:null,Yz:null,Afd:null,AaN:null,MB:null,Azs:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yz.R(this.BcW(this.RatedAttribute));this.AKx(this);},Ai:function(
Ae){this.MB.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.ARE),P8,this.Azs.
toFixed()));if(this.RatingMode===1)this.MB.Z(true);else this.MB.Z(false);},CD:function(
G){var B;C.AB.CD.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A7(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),
0,null);this.H7.Gr();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axs(this.H7,5);A.zX([this,this.AKx],[B=A._GetAutoObject(
A.Device.Device),B.ASy,B.AZ9],0);A.zX([this,this.AKx],[B=A._GetAutoObject(A.Device.
Helper).W,B.PN,B.EB],0);A.pe([this,this.AKx],this);},AsG:function(G){var a=this.
AKc(this.RatedAttribute);this.BfH();this.Azs=this.Azs-1;this.Am();if(!a)this.ARL(
);else this.SG(a);},WR:function(G){var a=this.Bc3(this.RatedAttribute);this.BfH(
);this.Azs=this.Azs+1;this.Am();if(!a)this.A7C();else this.SG(a);},AKc:function(
Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHD);},Bc3:
function(Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHD);},SG:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yz.R(this.BcW(E));this.DJ(E);this.Afd.AnJ(this.H7.Biv(E));if(!this.AKc(E)
){if(this.AQ1())this.N.Ct(A.aaL(A.ach.AbF));else this.N.Ct(null);}else this.N.Ct(
A.aaL(A.ach.Aey));},BcW:function(Np){return this.AaN.BH(Np);},Bzj:function(Np){if(
!!Np){var a=this.AKc(Np);if(!a)return A.jV;else return this.BcX(a);}else return A.
jV;},Bzi:function(Np){if(!!Np){var a=this.Bc3(Np);if(!a)return A.jV;else return this.
BcX(a);}else return A.jV;},ARL:function(){},A7C:function(){},A6D:function(){return null;
},BcX:function(Np){return this.AaN.Lt(Np);},BfH:function(){if(!!this.RatedAttribute
)this.H7.Boj(this.RatedAttribute,this.Afd.A4);},AKx:function(G){if(this.AQ1())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
SG(2);this.DJ(this.RatedAttribute);this.Am();},XG:function(G){A._GetAutoObject(A.
Device.Device).UpdateOverlayMenu(4);},AkZ:function(G){var a=this.AKc(this.RatedAttribute
);if(!a){if(this.AQ1())this.XG(this);}else this.ARL();},DJ:function(Np){this.N.Hy(
this.Bzj(Np));if(!!this.N.An3){this.N.CY(null);this.N.ON(true);}else{this.N.CY(A.
aaL(A.ach.Aey));this.N.ON(false);}this.N.CV(this.Bzi(Np));if(!!this.N.An5){this.
N.C6(null);this.N.OO(true);}else{this.N.C6(this.A6D());this.N.OO(false);}},AQ1:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Alg,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yz={I:this},0);C.Rating._Init.call(this.Afd={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaN={I:this},0);A.acg.Text._Init.call(this.
MB={I:this},0);this.__proto__=C.AGc;this.Background.L(A.jb.CK);this.N.Z(true);this.
Dr(C.II);this.Yz.H(AWD);this.Yz.KS(true);this.Yz.L(A.jb.Text);this.Afd.H(AWE);this.
MB.H(AWF);this.MB.A6(0x14);this.MB.R(A.aaR(A.acf.ARE));this.MB.L(A.jb.Text);this.
J(this.Yz,0);this.J(this.Afd,0);this.J(this.MB,0);this.Bb(this.Afd);this.N.CC=[this
,this.AsG];this.N.Cl=[this,this.AkZ];this.N.Cm=[this,this.WR];this.Yz.S(A.aaL(A.
fl.Af));this.Afd.AR=[this,this.WR];this.MB.S(A.aaL(A.fl.Af));this.H7=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yz._Done();this.Afd.
_Done();this.AaN._Done();this.MB._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yz._ReInit();this.Afd._ReInit();this.AaN._ReInit(
);this.MB._ReInit();this.MB.R(A.aaR(A.acf.ARE));this.Yz.S(A.aaL(A.fl.Af));this.MB.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.H0={Y:null,Gender:null,AnimalType:null,Breed:null,Jf:
null,Pk:null,AsV:null,BZ:null,C$:null,C9:null,CG:null,Gn:null,Ay:null,KI:0,Init:
function(aArg){A.zX([this,this.Bbh],this.BZ.Q,0);A.pe([this,this.Bbh],this);A.pe([
this,this.AA8],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANo(this.Y);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QF(X,Fh,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HI(X,true,null,null);this.AA8(this);},Fj:function(G){var B;this.Ay.Mw((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},AeW:function(E){if(this.KI===E)return;this.KI=E;A.abo([this,this.Av7,this.
AeW],0);},AA8:function(G){var B;var GX=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.
N.Hy(A.jV);this.N.CY(A.aaL(A.ach.E5));this.N.CC=[this,this.AIT];if(!!GX&&!!GX.Amr
){this.N.FN(A.jV);this.N.Kw.Ds(255);this.N.ArS(GX.AqU);this.N.Ct(GX.AvD);this.N.
Cl=GX.Amr;}else{this.N.FN(A.jV);this.N.Ct(null);this.N.Cl=null;}if(!!GX&&!!GX.Agt
){this.N.CV(GX.AxK);this.N.HS.Ds(GX.Axf);this.N.AnA(GX.AmU);this.N.C6(GX.Aq$);this.
N.Cm=GX.Agt;}else this.Auh();},Age:function(G){A.ab5("%s",Ayf);},AyO:function(s){
this.Age(s);},Ev:function(G){A.ab5("%s",Ayf);},AIT:function(s){this.Ev(s);},Auh:
function(){A.ab5("%s",Alh);},AAt:function(G){A.ab5("%s",Ayf);},AcU:function(s){this.
AAt(s);},JE:function(Ag){this.Bb(Ag);this.Y.HI(Ag,true,null,null);this.Y.Vx(null
,null);},ApK:function(G){var F;this.C9.Ahr(A._GetAutoObject(A.Device.Helper).Abt((
F=this.BZ.Q,F[1].call(F[0]))));},Bbh:function(s){this.ApK(s);},Av7:function(){return this.
KI;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UQ._Init.call(
this.Jf={I:this},0);A.Device.M0._Init.call(this.Pk={I:this},0);A.Device.KY._Init.
call(this.AsV={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.
C$={I:this},0);C.AkX._Init.call(this.C9={I:this},0);C.Axv._Init.call(this.CG={I:
this},0);C.AsB._Init.call(this.Gn={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.H0;var B;this.N.Z(true);this.Dr(C.II);this.Y.H(Fe);this.Y.JP(
1);this.KI=A._GetAutoObject(A.Device.Helper).Abt(this.AnimalType.Q);this.BZ.H(Ah0
);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afr));this.C$.H(Ayg);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afm));this.C9.H(Aou);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI)
);this.C9.Gc(1000);this.C9.EV(99000);this.C9.Ahr(A._GetAutoObject(A.Device.Helper
).Abt(this.AnimalType.Q));this.CG.H(Ah1);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gn.H(AWG);this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jf));this.Ay.H(Ayh
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.C9,0);this.J(
this.CG,0);this.J(this.Gn,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Gender.
LZ(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LZ(A._GetAutoObject(A.Device.
Helper).W);this.Breed.LZ(A._GetAutoObject(A.Device.Helper).W);this.Jf.LZ(A._GetAutoObject(
A.Device.Helper).W);this.BZ.As([B=this.AnimalType,B.B7,B.B8]);this.BZ.CI(this.AnimalType
);this.C$.As([B=this.Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.C9.As([this
,this.Av7,this.AeW]);this.CG.Gs([this,this.D_,this.GQ]);this.CG.LY([B=this.CG,B.
FV]);this.CG.L1(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B7,B.B8]);this.CG.
CI(this.Breed);this.CG.Anz(this.Pk);this.Gn.Gs([this,this.D_,this.GQ]);this.Gn.LY([
B=this.Gn,B.FV]);this.Gn.L1(A.aaL(A.ach.Edit));this.Gn.As([B=this.Jf,B.B7,B.B8]);
this.Gn.CI(this.Jf);this.Gn.Anz(this.AsV);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed.
_Done();this.Jf._Done();this.Pk._Done();this.AsV._Done();this.BZ._Done();this.C$.
_Done();this.C9._Done();this.CG._Done();this.Gn._Done();this.Ay._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jf._ReInit();this.
Pk._ReInit();this.AsV._ReInit();this.BZ._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gn._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Afr
));this.C$.T(A.aaR(A.acf.Afm));this.C9.T(A.aaR(A.acf.KI));this.CG.T(A.aaR(A.acf.
Breed));this.Gn.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wt={Ay4:false,LO:function(G){if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(
A.Device.Device).A7(41,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper
).Aql(A._GetAutoObject(A.Device.Helper).W);},Auh:function(){this.N.CV(A.jV);this.
N.C6(A.aaL(A.ach.ADz));this.N.Cm=[this,this.AyO];},CD:function(G){if(!this.Ay4){
this.Ay4=true;A.pe([this,this.AcU],this);}else C.Arv.CD.call(this,G);},AAt:function(
G){A._GetAutoObject(C.A$).Cf(49);},_Init:function(aArg){C.Arv._Init.call(this,aArg
);this.__proto__=C.Wt;this.JV(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.II={_Init:function(aArg){C.ADe._Init.call(this,aArg);this.__proto__=C.II;this.
A9O(false);},_className:"Application::HeaderSelectedAnimalId"};C.I2={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,PZ:null,S4:null,N9:
null,S5:null,Nl:null,Os:null,RQ:null,Ot:null,RR:null,ND:null,Lc:null,Jp:null,KW:
null,Mt:null,Yt:null,S6:null,RS:null,Ay:null,AxX:0,AxW:0,AuD:0,AuC:0,Aru:0,AsN:0
,Ave:0,Avf:0,Am6:true,Amu:false,Aoc:false,Init:function(aArg){A.zX([this,this.Avk
],this.Lc.Q,0);A.zX([this,this.AuI],this.Jp.Q,0);A.zX([this,this.Bpv],this.KW.Q,
0);A.zX([this,this.BjQ],this.Mt.Q,0);A.zX([this,this.Bp1],this.Nl.Q,0);A.zX([this
,this.Bp0],this.N9.Q,0);A.zX([this,this.BgL],this.ND.Q,0);A.zX([this,this.BgK],this.
Ot.Q,0);this.Bb(this.PZ);},DE:function(G){var Fh=0;var X=this.AV;switch(this.Cr.
CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QF(X,Fh,0x414);if(!!X)this.Bb(X);this.MO(this);},CD:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},A2O:function(G){var EE=(C.Aep.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this
,this.Fn,this.Fr],0);}else{if(EE.Eq===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHE+EE.Eq.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fn,this.Fr],0);}}},BzW:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A$).Fy();},AAr:function(G){var EE=(
C.AmZ.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator
);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE.Eq===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;
}else if(EE.Eq===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;}else if((EE.Eq===22)||(EE.Eq===26)){var A0P=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0P.EJ=EE.Eq;A0P.Operator=0;Av=A0P;}else A.ab5(
"%s",AHE+EE.Eq.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fn,this.Fr
],0);}}},A9J:function(E){if(this.Ave===E)return;this.Ave=E;A.abo([this,this.Bku,
this.A9J],0);},A9K:function(E){if(this.Avf===E)return;this.Avf=E;A.abo([this,this.
Bkv,this.A9K],0);},Avk:function(G){var F;this.A9K((F=this.Lc.Q,F[1].call(F[0])));
var Av=this.Filter.DL(7,0);if(!!Av){var AzM=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzM)AzM.A4=this.Avf;else A.ab5("%s",AfD);}},AuI:function(G){var
F;this.A9J((F=this.Jp.Q,F[1].call(F[0])));var Av=this.Filter.DL(14,0);if(!!Av){var
U6=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U6)U6.A4=
this.Ave;else A.ab5("%s",AfD);}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},A_p:function(
E){if(this.AsN===E)return;this.AsN=E;A.abo([this,this.Bk7,this.A_p],0);},Bpv:function(
G){var F;this.A_p((F=this.KW.Q,F[1].call(F[0])));var Av=this.Filter.DL(22,1);if(
!!Av){var Ajf=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Ajf
)switch(this.AsN){case 1:Ajf.Operator=5;break;case 0:Ajf.Operator=0;break;default:
A.ab5("%s%e",AHF,this.AsN);}else A.ab5("%s",AfD);}},A9W:function(E){if(this.Aru===
E)return;this.Aru=E;A.abo([this,this.BkK,this.A9W],0);},BjQ:function(G){var F;this.
A9W((F=this.Mt.Q,F[1].call(F[0])));var Av=this.Filter.DL(26,1);if(!!Av){var AtX=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtX)switch(this.Aru
){case 1:AtX.Operator=5;break;case 0:AtX.Operator=0;break;default:A.ab5("%s%e",AHF
,this.Aru);}else A.ab5("%s",AfD);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PZ.Bk([this,this.Fn,this.Fr]);this.S4.
Bk([this,this.Fn,this.Fr]);this.N9.Bk([this,this.Fn,this.Fr]);this.S5.Bk([this,this.
Fn,this.Fr]);this.Nl.Bk([this,this.Fn,this.Fr]);this.Os.Bk([this,this.Fn,this.Fr
]);this.RQ.Bk([this,this.Fn,this.Fr]);this.Ot.Bk([this,this.Fn,this.Fr]);this.RR.
Bk([this,this.Fn,this.Fr]);this.ND.Bk([this,this.Fn,this.Fr]);this.Lc.Bk([this,this.
Fn,this.Fr]);this.Jp.Bk([this,this.Fn,this.Fr]);this.KW.Bk([this,this.Fn,this.Fr
]);this.Mt.Bk([this,this.Fn,this.Fr]);this.Yt.Bk([this,this.Fn,this.Fr]);this.S6.
Bk([this,this.Fn,this.Fr]);this.RS.Bk([this,this.Fn,this.Fr]);this.Asa(false);A.
pe([this,this.A4k],this);var BdE=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!BdE){this.Asa(true);this.AFV(BdE.A4);}var Bc9=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
Bc9){this.Asa(true);this.AFW(Bc9.A4);}this.ArL(false);A.pe([this,this.ALd],this);
var BdD=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!BdD){this.ArL(true);this.AEJ(A._GetAutoObject(A.Device.Helper).L9(BdD.A4,
A._GetAutoObject(A.Device.Helper).Dq()));}var Bc8=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!Bc8){this.ArL(true);this.AEL(A.
_GetAutoObject(A.Device.Helper).L9(Bc8.A4,A._GetAutoObject(A.Device.Helper).Dq()
)+1);}var AzM=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzM)this.Lc.By(this.Gender.DU(AzM.A4));var U6=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U6)this.Jp.By(this.AnimalType.
DU(U6.A4));var Ajf=this.Filter.DL(22,1);if(!!Ajf){if(!Ajf.Operator)this.KW.By(0);
else this.KW.By(1);}var AtX=this.Filter.DL(26,1);if(!!AtX){if(!AtX.Operator)this.
Mt.By(0);else this.Mt.By(1);}},Fr:function(Aq){this.Bk(Aq);},AFW:function(E){if(
this.AxX===E)return;this.AxX=E;A.abo([this,this.A86,this.AFW],0);},AFV:function(
E){if(this.AxW===E)return;this.AxW=E;A.abo([this,this.A85,this.AFV],0);},Bp1:function(
G){var F;this.AFW((F=this.Nl.Q,F[1].call(F[0])));var Av=this.Filter.DL(1,3);if(!
!Av){var ABt=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABt)
ABt.A4=this.AxX;else A.ab5("%s",AfD);}},Bp0:function(G){var F;this.AFV((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DL(1,2);if(!!Av){var ABt=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABt)ABt.A4=this.AxW;else A.ab5("%s",AfD);}},Bd9:
function(G){var EE=(C.AjM.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0
);}else{if(EE===this.S4){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxW;this.Bb(this.N9);}else if(EE===this.S5){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxX;this.Bb(this.Nl);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([this,this.A4k],this);},A4k:function(
G){var A2w=!!this.Filter.DL(this.N9.Eq,this.N9.Operator);var A4l=!!this.Filter.DL(
this.Nl.Eq,this.Nl.Operator);A._GetAutoObject(A.Device.Helper).JW(this.S4,this.Aoc
);A._GetAutoObject(A.Device.Helper).JW(this.S5,this.Aoc);A._GetAutoObject(A.Device.
Helper).JW(this.N9,A2w);A._GetAutoObject(A.Device.Helper).JW(this.Nl,A4l);},MO:function(
G){var B;this.Y.Vx(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},BAP:function(G){A.pe([this,this.Fj],this);A.pe([this,this.
MO],this);},BzT:function(G){this.Asa(!this.Aoc);if(this.Aoc===false){var Av=this.
Filter.DL(this.PZ.Eq,this.PZ.Operator);while(!!Av){this.Filter.Ni(Av);Av=this.Filter.
DL(this.PZ.Eq,this.PZ.Operator);}A.abo([this,this.Fn,this.Fr],0);}},Asa:function(
E){if(this.Aoc===E)return;this.Aoc=E;A.abo([this,this.A84,this.Asa],0);A.pe([this
,this.A4k],this);},AEL:function(E){if(this.AuD===E)return;this.AuD=E;A.abo([this
,this.A8a,this.AEL],0);},AEJ:function(E){if(this.AuC===E)return;this.AuC=E;A.abo([
this,this.A7_,this.AEJ],0);},BgL:function(G){var F;this.AEL((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DL(4,2);if(!!Av){var AfQ=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfQ){var AaS=A._GetAutoObject(A.Device.Helper).ZU(
this.AuD-1);AfQ.A4=AaS;}else A.ab5("%s",AfD);}},BgK:function(G){var F;this.AEJ((
F=this.Ot.Q,F[1].call(F[0])));var Av=this.Filter.DL(4,3);if(!!Av){var AfQ=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfQ){var AaS=A._GetAutoObject(
A.Device.Helper).ZU(this.AuC);AfQ.A4=AaS;}else A.ab5("%s",AfD);}},ALd:function(G
){var A2w=this.Am6&&!!this.Filter.DL(this.Ot.Eq,this.Ot.Operator);var A4l=this.Am6&&
!!this.Filter.DL(this.ND.Eq,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JW(this.Os,this.Am6);A._GetAutoObject(A.Device.Helper).JW(this.RQ,this.Am6&&this.
Amu);A._GetAutoObject(A.Device.Helper).JW(this.RR,this.Am6&&this.Amu);A._GetAutoObject(
A.Device.Helper).JW(this.Ot,A2w);A._GetAutoObject(A.Device.Helper).JW(this.ND,A4l
);},ArL:function(E){if(this.Amu===E)return;this.Amu=E;A.abo([this,this.A79,this.
ArL],0);A.pe([this,this.ALd],this);},Bd8:function(G){var EE=(C.AjM.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.
Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE===this.RQ){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZU(this.AuC);this.Bb(this.Ot);}else if(EE===this.RR){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZU(this.AuD-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([
this,this.ALd],this);},BzS:function(G){this.ArL(!this.Amu);if(this.Amu===false){
var Av=this.Filter.DL(this.Os.Eq,this.Os.Operator);while(!!Av){this.Filter.Ni(Av
);Av=this.Filter.DL(this.Os.Eq,this.Os.Operator);}A.abo([this,this.Fn,this.Fr],0
);}},Bmt:function(E){if(this.Am6===E)return;this.Am6=E;A.pe([this,this.ALd],this
);},Fn:function(){return this.Filter;},Bkv:function(){return this.Avf;},Bku:function(
){return this.Ave;},Bk7:function(){return this.AsN;},BkK:function(){return this.
Aru;},A86:function(){return this.AxX;},A85:function(){return this.AxW;},A84:function(
){return this.Aoc;},A8a:function(){return this.AuD;},A7_:function(){return this.
AuC;},A79:function(){return this.Amu;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABL._Init.call(this.Transponder={I:this},0);C.ABL._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABW._Init.call(
this.PZ={I:this},0);C.AjM._Init.call(this.S4={I:this},0);C.Abs._Init.call(this.N9={
I:this},0);C.AjM._Init.call(this.S5={I:this},0);C.Abs._Init.call(this.Nl={I:this
},0);C.ABW._Init.call(this.Os={I:this},0);C.AjM._Init.call(this.RQ={I:this},0);C.
ACJ._Init.call(this.Ot={I:this},0);C.AjM._Init.call(this.RR={I:this},0);C.ACJ._Init.
call(this.ND={I:this},0);C.AmZ._Init.call(this.Lc={I:this},0);C.AmZ._Init.call(this.
Jp={I:this},0);C.AmZ._Init.call(this.KW={I:this},0);C.AmZ._Init.call(this.Mt={I:
this},0);C.QA._Init.call(this.Yt={I:this},0);C.QA._Init.call(this.S6={I:this},0);
C.QA._Init.call(this.RS={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I2;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A4V));this.Dr(C.APt);this.Gender.
As(this.Avf);this.AnimalType.As(this.Ave);this.Transponder.As(this.AsN);this.Ek.
As(this.Aru);this.Y.H(Fe);this.Y.JP(1);this.PZ.H(IT);this.PZ.Aj(true);this.PZ.T(
A._GetAutoObject(A.Device.Helper).AmX(0,1));this.PZ.Nc(1);this.S4.H(P9);this.S4.
Aj(true);this.S4.T(A.aaR(A.acf.AD7));this.S4.Nc(1);this.S4.OM(2);this.N9.H(Aai);
this.N9.Nc(1);this.N9.OM(2);this.N9.AFN(A.aaR(A.acf.GM));this.S5.H(Ali);this.S5.
Aj(true);this.S5.T(A.aaR(A.acf.AG7));this.S5.Nc(1);this.S5.OM(3);this.Nl.H(Aov);
this.Nl.Aj(true);this.Nl.Nc(1);this.Nl.OM(3);this.Nl.AFN(A.aaR(A.acf.GM));this.Os.
H(AWH);this.Os.Aj(true);this.Os.T(A.aaR(A.acf.RP));this.Os.Nc(4);this.RQ.H(AWI);
this.RQ.Aj(true);this.RQ.T(A.aaR(A.acf.AD7));this.RQ.Nc(4);this.RQ.OM(3);this.Ot.
H(AWJ);this.Ot.Nc(4);this.Ot.OM(3);this.Ot.A91(2);this.RR.H(AWK);this.RR.Aj(true
);this.RR.T(A.aaR(A.acf.AG7));this.RR.Nc(4);this.RR.OM(2);this.ND.H(AWL);this.ND.
Aj(true);this.ND.Nc(4);this.ND.OM(2);this.ND.A91(3);this.Lc.H(As6);this.Lc.Aj(true
);this.Lc.Nc(7);this.Lc.Aht(0);this.Lc.OM(0);this.Jp.H(Xg);this.Jp.Aj(true);this.
Jp.Nc(14);this.Jp.Aht(0);this.Jp.OM(0);this.KW.H(Xg);this.KW.Aj(true);this.KW.Nc(
22);this.KW.Aht(0);this.KW.OM(1);this.Mt.H(Xg);this.Mt.Aj(true);this.Mt.Nc(26);this.
Mt.Aht(0);this.Mt.OM(1);this.Yt.H(Xg);this.Yt.Aj(true);this.Yt.Nc(11);this.Yt.Aht(
0);this.Yt.OM(0);this.S6.H(Xg);this.S6.Aj(true);this.S6.Nc(12);this.S6.Aht(0);this.
S6.OM(0);this.RS.H(Xg);this.RS.Aj(true);this.RS.Nc(8);this.RS.Aht(0);this.RS.OM(
0);this.Ay.H(Is);this.J(this.Y,0);this.J(this.PZ,0);this.J(this.S4,0);this.J(this.
N9,0);this.J(this.S5,0);this.J(this.Nl,0);this.J(this.Os,0);this.J(this.RQ,0);this.
J(this.Ot,0);this.J(this.RR,0);this.J(this.ND,0);this.J(this.Lc,0);this.J(this.Jp
,0);this.J(this.KW,0);this.J(this.Mt,0);this.J(this.Yt,0);this.J(this.S6,0);this.
J(this.RS,0);this.J(this.Ay,0);this.N.CC=[this,this.Ev];this.N.Cm=[this,this.BzW
];this.N.CY(A.aaL(A.ach.E5));this.Y.El=[this,this.BAP];this.PZ.AR=[this,this.BzT
];this.PZ.As([this,this.A84,this.Asa]);this.S4.AR=[this,this.Bd9];this.N9.Gs([this
,this.D_,this.GQ]);this.N9.As([this,this.A85,this.AFV]);this.S5.AR=[this,this.Bd9
];this.Nl.Gs([this,this.D_,this.GQ]);this.Nl.As([this,this.A86,this.AFW]);this.Os.
AR=[this,this.BzS];this.Os.As([this,this.A79,this.ArL]);this.RQ.AR=[this,this.Bd8
];this.Ot.Gs([this,this.D_,this.GQ]);this.Ot.As([this,this.A7_,this.AEJ]);this.RR.
AR=[this,this.Bd8];this.ND.Gs([this,this.D_,this.GQ]);this.ND.As([this,this.A8a,
this.AEL]);this.Lc.AR=[this,this.AAr];this.Lc.As([B=this.Gender,B.B7,B.B8]);this.
Lc.CI(this.Gender);this.Jp.AR=[this,this.AAr];this.Jp.As([B=this.AnimalType,B.B7
,B.B8]);this.Jp.CI(this.AnimalType);this.KW.AR=[this,this.AAr];this.KW.As([B=this.
Transponder,B.B7,B.B8]);this.KW.CI(this.Transponder);this.Mt.AR=[this,this.AAr];
this.Mt.As([B=this.Ek,B.B7,B.B8]);this.Mt.CI(this.Ek);this.Yt.AR=[this,this.A2O];
this.S6.AR=[this,this.A2O];this.RS.AR=[this,this.A2O];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Ek._Done();this.Y._Done();this.PZ._Done();this.S4._Done();this.N9._Done(
);this.S5._Done();this.Nl._Done();this.Os._Done();this.RQ._Done();this.Ot._Done(
);this.RR._Done();this.ND._Done();this.Lc._Done();this.Jp._Done();this.KW._Done(
);this.Mt._Done();this.Yt._Done();this.S6._Done();this.RS._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();
this.Y._ReInit();this.PZ._ReInit();this.S4._ReInit();this.N9._ReInit();this.S5._ReInit(
);this.Nl._ReInit();this.Os._ReInit();this.RQ._ReInit();this.Ot._ReInit();this.RR.
_ReInit();this.ND._ReInit();this.Lc._ReInit();this.Jp._ReInit();this.KW._ReInit(
);this.Mt._ReInit();this.Yt._ReInit();this.S6._ReInit();this.RS._ReInit();this.Ay.
_ReInit();this.N.CV(A.aaR(A.acf.A4V));this.S4.T(A.aaR(A.acf.AD7));this.N9.AFN(A.
aaR(A.acf.GM));this.S5.T(A.aaR(A.acf.AG7));this.Nl.AFN(A.aaR(A.acf.GM));this.Os.
T(A.aaR(A.acf.RP));this.RQ.T(A.aaR(A.acf.AD7));this.RR.T(A.aaR(A.acf.AG7));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_1={ZV:null,BnN:
function(Bxo){var EF=A._NewObject(C.A_0,0);EF.AB=Bxo;EF.Mu=this.ZV;this.ZV=EF;},
A_F:function(){var Vl=null;if(!!this.ZV){Vl=this.ZV.AB;this.ZV=this.ZV.Mu;}return Vl;
},Contains:function(Alq){var EF=this.ZV;while(!!EF){if(EF.AB.An8===Alq)return true;
EF=EF.Mu;}return false;},BnC:function(){if(!!this.ZV)return this.ZV.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_1;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_0={AB:null,
Mu:null,_Init:function(aArg){this.__proto__=C.A_0;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMb={ARL:function(){A._GetAutoObject(
A.Device.Helper).Axs(this.H7,0);A._GetAutoObject(C.A$).Fy();},A7C:function(){this.
H7.Cg(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();},A6D:function(
){return A.aaL(A.ach.Am4);},_Init:function(aArg){C.AGc._Init.call(this,aArg);this.
__proto__=C.AMb;this.Dr(C.II);},_className:"Application::AnimalActionRateScreen"
};C.AL9={Wz:function(G){this.Agu();this.I0(A.aaR(A.acf.AU8),[this,this.ATy],5);this.
I0(A.aaR(A.acf.A5m),[this,this.Bls],4);this.I0(A.aaR(A.acf.AGb),[this,this.ATj],
3);this.I0(A.aaR(A.acf.An2),[this,this.AwR],2);this.I0(A.aaR(A.acf.AdT),[this,this.
AEO],1);this.I0(A.aaR(A.acf.Auz),[this,this.AEI],0);A._GetAutoObject(C.BS).FX();
A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dt(6);},DE:function(G){},Abv:function(){return C.AM2;},Abw:function(
){return C.ADg;},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Ay2=A._NewObject(A.Device.BoolFilterCriterion,0);Ay2.Initialize(8,0,true,true);Be.
CW(Ay2);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HQ:function(G){C.GZ.HQ.call(
this,G);if(this.Akl()===false){this.N.Ct(A.aaL(A.ach.AGk));this.N.Cl=[this,this.
A5T];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agg:function(){A._GetAutoObject(
C.A$).Cf(40);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.
AL9;var B;this.Dr(C.AOU);this.Dz(A.aaR(A.acf.A7I));this.AwM([B=A._GetAutoObject(
A.Device.Device),B.A8b,B.BaJ]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7I));},_className:"Application::AlarmListScreen"};C.ANr={DE:function(
G){},Al4:function(G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gt);var Aa=(C.AB3.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).G6(Aa.Hq);A._GetAutoObject(
C.A$).Cf(13);}},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azk=A._NewObject(A.Device.BoolFilterCriterion,0);Azk.Initialize(9,0,true,true);Be.
CW(Azk);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HQ:function(G){C.GZ.HQ.call(
this,G);this.N.ON(false);this.N.OO(false);},_Init:function(aArg){C.GZ._Init.call(
this,aArg);this.__proto__=C.ANr;this.Dr(C.AOW);this.Dz(A.aaR(A.acf.A7J));},_ReInit:
function(){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.A7J));},_className:"Application::ControlListScreen"
};C.Aep={Filter:null,Eq:0,Ja:10,TableId:0,Operator:1,CP:function(){var F;this.Tr((
F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){C.
Cp.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Ja),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.pe([this,this.
Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tr((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));else this.
Tr(null);},Aht:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this,this.
Mb],this);},Tr:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6w(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmX(this.TableId
,this.Eq));},OM:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mb],this);},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Aep;this.V.H(AHG);this.V.A6(0x11);},_ReInit:function(){C.Cp._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QA={H6:null,Bl:function(aSize){var B;C.Aep.Bl.call(this,aSize);this.H6.H([(aSize[
0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Ja,0,this.
H6.M[0]-this.Ja,aSize[1]]);},Tr:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmX(this.TableId,this.Eq));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av&&Av.A4)this.H6.Cw(1);else this.H6.Cw(0);},_Init:function(aArg
){C.Aep._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.QA;this.H6.H(AHH);this.H6.Cw(0);this.J(this.H6,0);this.H6.Aw(A.aaL(A.ach.AqS));
},_Done:function(){this.__proto__=C.Aep;this.H6._Done();C.Aep._Done.call(this);}
,_ReInit:function(){C.Aep._ReInit.call(this);this.H6._ReInit();},_Mark:function(
D){var B;C.Aep._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APt={Ap:null,Text:null,De:function(
E){C.BR.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APt;this.Ap.H(AWM);this.Text.H(AWN);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.AeA));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjW={
AW:null,T4:null,Gw:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DY],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.DY],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.T4.H(A.abJ(this.T4.M,A.abe(this.AW.M.slice(0
,2),AWO)));this.T4.H(A.abK(this.T4.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWP
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IA)this.T4.L(A.jb.AV);else this.T4.L(A.jb.Am5);},De:function(E){
C.BR.De.call(this,E);this.Gw.L(E);this.D2.Zx(E);},WA:function(E){C.BR.WA.call(this
,E);this.D2.CT(E);},Akt:function(){return this.AW.Akt();},Awd:function(){return this.
AW.Awd();},DY:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B$().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T4={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C5._Init.call(this.A_={I:this
},0);this.__proto__=C.AjW;this.AW.H(AWQ);this.T4.H(AWR);this.T4.Ng(2);this.Gw.H(
AWS);this.Gw.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AWT);this.D2.Zx(A.jb.Bm);this.
D2.CT(A.jb.Rg);this.D2.Hl(2);this.A_.DC(AWU);this.A_.DM(AWV);this.A_.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T4,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A_,0);this.Bb(this.AW);this.Gw.Aw(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bi));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.T4._Done(
);this.Gw._Done();this.D2._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.T4._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Di:null,Io:null,In:null
,Agd:function(G){if(this.Ey<0)this.L0(1);else if(this.Ey===9)this.L0(0);else this.
L0(this.Ey+1);A.pe(this.Di,this);},Ai:function(Ae){var B;C.Ey.Ai.call(this,Ae);var
Hd=((Ae&0x10)===0x10);var IA=((Ae&0x40)===0x40);if(IA){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.Ds(256);}else if(Hd){this.Background.L(this.MZ);this.
Text.L(A.jb.Text);this.Ds(256);}else{this.Background.L(this.MZ);this.Text.L(A.jb.
Text);this.Ds(128);}},Agc:function(G){if(this.Ey<=0)this.L0(9);else this.L0(this.
Ey-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ey._Init.call(this,aArg);A.Core.
BM._Init.call(this.Io={I:this},0);A.Core.BM._Init.call(this.In={I:this},0);this.
__proto__=C.DF;this.Io.Filter=4;this.In.Filter=5;this.Io.BN=[this,this.Agd];this.
Io.D1=[this,this.Agd];this.In.BN=[this,this.Agc];this.In.D1=[this,this.Agc];},_Done:
function(){this.__proto__=C.Ey;this.Io._Done();this.In._Done();C.Ey._Done.call(this
);},_ReInit:function(){C.Ey._ReInit.call(this);this.Io._ReInit();this.In._ReInit(
);},_Mark:function(D){var B;C.Ey._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
In)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Di:null,Cu:null,CU:null,Dx:null,Ep:null,F0:null,ES:null,Fl:null,Fb:null,M4:0,AQ2:
false,Aqu:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqu)this.ES.AeX(true);else this.ES.AeX(false);},AwI:function(E){var B;
if(E===this.Akt())return;var Af8=E;var DW=this.ES;while(!!DW){if(Af8>0){DW.L0(Af8
%10);Af8=(Af8/10)|0;}else DW.L0(-1);DW=(C.DF.isPrototypeOf(B=this.QF(DW,2,0x11))?
B:null);}},Akt:function(){return A.wz(this.Awd(),-1,10);},Ol:function(G){if(this.
F0.Ey>=0)this.BfS(7);},MU:function(G){if(((this.Akt()>0)||this.AQ2)&&(this.Cu.Ey<
0))this.BfS(2);else if(this.Akt()<=0)this.Fb.NH=true;},Ads:function(G){A.pe(this.
Di,this);},BfS:function(GA){var B;var ALr=0;var DW=null;switch(GA){case 2:{DW=this.
Cu;ALr=7;}break;case 7:{DW=this.ES;ALr=2;}break;default:throw new Error(AWW);}while(
!!DW){var A2H=(C.DF.isPrototypeOf(B=this.QF(DW,ALr,0x11))?B:null);if(!!A2H)DW.L0(
A2H.Ey);else if(ALr===7)DW.L0(0);else DW.L0(-1);DW=A2H;}A.pe([this,this.Ads],this
);},AeX:function(E){if(this.Aqu===E)return;this.Aqu=E;this.Am();},Bmu:function(E
){if(this.AQ2===E)return;this.AQ2=E;},AS0:function(E){var B;if(E===this.Awd())return;
var Af8=E;var DW=this.ES;while(!!DW){if(Af8.length>0){DW.L0(A.wz(A.ab2(Af8,1),-1
,10));Af8=A.abV(Af8,Af8.length-1);}else DW.L0(-1);DW=(C.DF.isPrototypeOf(B=this.
QF(DW,2,0x11))?B:null);}},Awd:function(){var B;var Iy=A.jV;var O=0;var B5=this.Cu;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iy=Iy+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TO(B5,0x11))?B:null);}return Iy;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cu={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF.
_Init.call(this.F0={I:this},0);C.DF._Init.call(this.ES={I:this},0);A.Core.BM._Init.
call(this.Fl={I:this},0);A.Core.BM._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayi);this.Cu.AZ(0x3);this.Cu.H(AHI);this.CU.AZ(0x3);this.CU.H(AHJ);this.
Dx.AZ(0x3);this.Dx.H(AHK);this.Ep.AZ(0x3);this.Ep.H(AHL);this.F0.AZ(0x3);this.F0.
H(AHM);this.ES.AZ(0x3);this.ES.H(AHN);this.ES.L0(0);this.Fl.Filter=6;this.Fb.Filter=
7;this.M4=A.jb.CK;this.J(this.Cu,0);this.J(this.CU,0);this.J(this.Dx,0);this.J(this.
Ep,0);this.J(this.F0,0);this.J(this.ES,0);this.Bb(this.ES);this.Cu.Di=[this,this.
Ads];this.CU.Di=[this,this.Ads];this.Dx.Di=[this,this.Ads];this.Ep.Di=[this,this.
Ads];this.F0.Di=[this,this.Ads];this.ES.Di=[this,this.Ads];this.Fl.BN=[this,this.
Ol];this.Fb.BN=[this,this.MU];},_Done:function(){this.__proto__=A.Core.P;this.Cu.
_Done();this.CU._Done();this.Dx._Done();this.Ep._Done();this.F0._Done();this.ES.
_Done();this.Fl._Done();this.Fb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cu._ReInit();this.CU._ReInit();this.Dx._ReInit(
);this.Ep._ReInit();this.F0._ReInit();this.ES._ReInit();this.Fl._ReInit();this.Fb.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bhm="15ed31e9";C.BCr={Undefined:0,BDv:1,BCJ:2};C.AkN={
Tp:null,AiZ:null,La:null,ANv:null,An$:null,push:function(MJ){if(!this.Tp){MJ.Ahw=
null;MJ.Mu=null;this.Tp=MJ;this.AiZ=this.Tp;}else{MJ.Ahw=this.AiZ;MJ.Mu=null;this.
AiZ.Mu=MJ;this.AiZ=MJ;}},BBo:function(MJ){var Qf=this.Tp;while(!!Qf){if(Qf.JJ.Id===
MJ.Id)return Qf;Qf=Qf.Mu;}return Qf;},BA9:function(MJ){if(MJ===this.Tp)this.pop(
);else if(MJ===this.AiZ){MJ=MJ.Ahw;if(!!MJ)MJ.Mu=null;this.AiZ=MJ;}else{MJ.Ahw.Mu=
MJ.Mu;MJ.Mu.Ahw=MJ.Ahw;}},Ahn:function(E){var F;if(this.La===E)return;this.La=E;
if(!!this.La)this.La.AgJ(2);(F=this.ANv,F[2].call(F[0],this.La));},Vi:function(G
){var Qf=(C.ATL.isPrototypeOf(G)?G:null);if(!!Qf){if(!Qf.JJ.PopupState){if(!this.
La)this.Ahn(this.top());}else if(Qf.JJ.PopupState===4){this.pop();this.Ahn(this.
top());}else if(Qf.JJ.PopupState===5){this.pop();this.Ahn(this.top());}else if(Qf.
JJ.PopupState===7){this.pop();this.Ahn(this.top());}else if(Qf.JJ.PopupState===8
){this.pop();this.Ahn(this.top());}else if(Qf.JJ.PopupState===6){if(Qf===this.La
){this.pop();this.Ahn(this.top());}else this.BA9(Qf);}else if(Qf.JJ.PopupState===
3){this.pop();this.Ahn(this.top());}}},pop:function(){var AKN=null;if(!!this.Tp){
AKN=this.Tp;if(this.Tp===this.AiZ){this.Tp=null;this.AiZ=null;}else{this.Tp=this.
Tp.Mu;if(!this.Tp)throw new Error(AWX);this.Tp.Ahw=null;}AKN.Ahw=null;AKN.Mu=null;
}return AKN;},top:function(){return this.Tp;},BAQ:function(G){var B;var AtY=(A.Device.
PopupContext.isPrototypeOf(B=this.An$.JJ)?B:null);if(!!AtY){var A3U=this.BBo(AtY
);if(!!A3U){A3U.A9z(AtY);if(!AtY.Show)A3U.AgJ(6);}else if(AtY.Show){var AKr=A._NewObject(
C.ATL,0);AKr.A9z(AtY);AKr.ASJ=[this,this.Vi];this.push(AKr);AKr.AgJ(0);}}},_Init:
function(aArg){A.Core.A$l._Init.call(this.An$={I:this},0);this.__proto__=C.AkN;this.
An$.AR$=[this,this.BAQ];this.An$.BlO(A._GetAutoObject(A.Device.Device).AnP);A.h7++;
},_Done:function(){this.__proto__=null;this.An$._Done();A.h7--;},_ReInit:function(
){this.An$._ReInit();},_Mark:function(D){var B;if((B=this.Tp)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.La)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANv)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATL={Rk:null,Mu:null,Ahw:null,JJ:null,ASJ:null,PopupIdToString:null,AfW:function(
Bwu,Bw4,Bxn,Bxd,Bxf,Bxc,BwN){var Vk=A._NewObject(C.ATK,0);Vk.BmX(this.JJ.Id);Vk.
A_h(Bwu);Vk.ASK=Bxc;Vk.A_j(this.JJ.Ak6);Vk.A96(this.JJ.AkM);Vk.Bx=A._NewObject(C.
N,0);Vk.KR().Cm=Bxf;Vk.KR().Cl=null;Vk.KR().CC=Bxd;Vk.KR().CV(Bxn);Vk.KR().Ct(null
);Vk.KR().Hy(Bw4);Vk.KR().AFe(BwN);return Vk;},Aku:function(){if(!this.Rk){var Agn=
this.PopupIdToString.BH(this.JJ.Id);switch(this.JJ.Id){case 46:this.Rk=this.AfW(
Agn,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKv],[this,this.Af$],1);break;case 91:case
92:this.Rk=this.AfW(Agn,A.jV,A.jV,null,null,[this,this.Af$],0);break;case 39:this.
Rk=this.AfW(Agn,A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A2U],[this,this.A2V]
,[this,this.Af$],3);break;case 13:this.Rk=this.AfW(Agn,A.aaR(A.acf.AmC),A.aaR(A.
acf.BnY),[this,this.A2T],[this,this.AKv],[this,this.Af$],3);break;case 25:this.Rk=
this.AfW(Agn,A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A2T],[this,this.AKv],[this
,this.Af$],3);break;case 16:case 24:case 49:case 74:this.Rk=this.AfW(Agn,A.aaR(A.
acf.AmC),A.jV,[this,this.A2T],null,[this,this.Af$],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.Rk=this.AfW(Agn,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2U],[this,this.A2V],[this,this.Af$],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.Rk=this.AfW(Agn,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKv],[this,this.Af$],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Rk=
this.AfW(Agn,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2U],[this,this.A2V],[this
,this.Af$],3);break;case 110:this.Rk=this.AfW(Agn,A.jV,A.jV,null,null,[this,this.
Af$],1);break;default:A.ab5("%s",(AWY+this.JJ.Id.toFixed())+AWZ);}}switch(this.JJ.
Id){case 16:case 49:this.Rk.A_x(true);break;case 91:case 92:this.Rk.A_x(false);break;
default:;}return this.Rk;},AKv:function(G){this.AgJ(4);},A2T:function(G){this.AgJ(
5);},A2V:function(G){this.AgJ(7);},A2U:function(G){this.AgJ(8);},Af$:function(G){
this.AgJ(3);},A9z:function(E){if(this.JJ===E)return;this.JJ=E;if(!!this.Rk){this.
Aku().A_j(this.JJ.Ak6);this.Aku().A96(this.JJ.AkM);}},AgJ:function(Bxi){var B;this.
JJ.BmY(Bxi);(B=this.ASJ)?B[1].call(B[0],this):null;},BAo:function(G){this.AgJ(9);
},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATL;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.Rk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASJ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Gf={BooleanToYesNo:null,Dn:function(
){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gf;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afl={Us:null,J$:function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.
AM!==BQ){if(!!this.Us&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Us,F[
2].call(F[0],false));break;case 1:(F=this.Us,F[2].call(F[0],true));break;default:;
}A.abo(this.Us,0);}},J6:function(G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.
AM!==BQ){if(!!this.Us&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Us,F[
2].call(F[0],false));break;case 1:(F=this.Us,F[2].call(F[0],true));break;default:;
}A.abo(this.Us,0);}},AkG:function(E){if(A.aaZ(this.Us,E))return;if(!!this.Q)A.z$([
this,this.A3x],this.Us,0);this.Us=E;if(!!E)A.zX([this,this.A3x],E,0);if(!!E)A.pe([
this,this.A3x],this);},A3x:function(G){var F;if(!!this.Us){if((F=this.Us,F[1].call(
F[0])))this.By(1);else this.By(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afl;this.JV(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Us)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AT1={Je:null,OT:null,IR:null,Gm:null,AK:null,Abk:null,AgP:null,TJ:null,Sa:null
,AcG:null,W1:null,Hh:null,ABs:true,Init:function(aArg){var B;A.zX([this,this.Al7
],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ_],0);A.pe([this,this.Al7],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABs)this.N.C6(A.aaL(A.ach.
AQI));else this.N.C6(A.aaL(A.ach.AQJ));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OT.L(A.jb.Bm);this.Sa.Z(false);this.TJ.Z(false);this.IR.Z(true);this.Gm.
Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.jb.Gk);}else
if(this.Abk.Bw){this.OT.L(A.jb.Text);this.Sa.Z(true);this.TJ.Z(true);this.IR.Z(false
);this.Gm.Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.
jb.E4);}else{this.OT.L(A.jb.Text);this.Sa.Z(false);this.TJ.Z(false);this.IR.Z(true
);this.Gm.Ar(true);this.Background.L(A.jb.CK);}if(this.AgP.Bw)this.W1.Z(true);else
this.W1.Z(false);},CD:function(G){A._GetAutoObject(A.Device.Device).AhJ();},E6:function(
G){A._GetAutoObject(A.Device.Device).An1();A._GetAutoObject(A.Device.Device).Ae_(
false);A._GetAutoObject(A.Device.Device).Ur(false);},Al7:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
Bz6],this);break;case 3:{A.pe([this,this.BeJ],this);A.pe([B=this.Abk,B.AxG],this
);A.pe(this.Abk.Mz,this);}break;case 4:A.ab5("%s",AW0);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A$).Fy();},BAR:function(G){this.Bnn(!this.ABs);},Bnn:function(
E){if(this.ABs===E)return;this.ABs=E;if(!E)A._GetAutoObject(A.Device.Device).Ae_(
false);this.Am();},Bz6:function(G){var B;this.BeJ(this);if(this.ABs)A._GetAutoObject(
A.Device.Device).Ae_(true);A._GetAutoObject(A.Device.Device).WF(65280);A._GetAutoObject(
A.Device.Device).Ur(true);A.pe([B=this.Abk,B.StartTimer],this);A.pe([B=this.AgP,
B.StartTimer],this);this.Am();},Bz7:function(G){A._GetAutoObject(A.Device.Device
).Ae_(false);A._GetAutoObject(A.Device.Device).Ur(false);this.Am();},Bz9:function(
G){this.Am();},BeJ:function(G){A._GetAutoObject(A.Device.Device).AhJ();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Je._Init.call(this.Je={I:this},0);C.CH._Init.
call(this.OT={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acl.Gm._Init.
call(this.Gm={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abk={I:this},0);A.Core.Timer._Init.call(this.AgP={I:this},0);A.acg.Ap.
_Init.call(this.TJ={I:this},0);A.acg.Ap._Init.call(this.Sa={I:this},0);A.acg.Text.
_Init.call(this.AcG={I:this},0);C.W1._Init.call(this.W1={I:this},0);C.CH._Init.call(
this.Hh={I:this},0);this.__proto__=C.AT1;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Je.H(AW1);this.Je.AkJ(0);this.OT.H(AW2);this.OT.R(A.aaR(A.acf.A$q));
this.OT.L(A.jb.Text);this.IR.H(AW3);this.IR.L(A.jb.AV);this.IR.Zv(true);this.Gm.
Fp(1750);this.Gm.Un(750);this.Gm.AkE(0);this.Gm.Ar(true);this.Gm.B2=3;this.AK.H(
Ayj);this.Abk.PP(-1);this.Abk.WC(1000);this.AgP.PP(-1);this.AgP.WC(5000);this.TJ.
H(AHO);this.Sa.H(AHO);this.Sa.L(A.jb.E4);this.AcG.H(Ayj);this.AcG.R(A.aaR(A.acf.
A_2));this.AcG.L(A.jb.Text);this.W1.H(Ayj);this.Hh.H(AW4);this.Hh.Ar(false);this.
Hh.R(A.aaR(A.acf.RangeTest));this.Hh.L(A.jb.Text);this.J(this.Je,0);this.J(this.
OT,0);this.J(this.IR,0);this.J(this.AK,0);this.J(this.TJ,0);this.J(this.Sa,0);this.
J(this.AcG,0);this.J(this.W1,0);this.J(this.Hh,0);this.N.CC=[this,this.Ev];this.
N.Cm=[this,this.BAR];this.N.CY(A.aaL(A.ach.E5));this.OT.S(A.aaL(A.fl.Af));this.OT.
A2(A.aaL(A.fl.Ak));this.OT.Cv(A.aaL(A.fl.Bi));this.IR.Aw(A.aaL(A.ach.ADI));this.
Gm.Q=[B=this.IR,B.ASm,B.Cw];this.Abk.Mz=[this,this.Bz7];this.AgP.Mz=[this,this.Bz9
];this.TJ.Aw(A.aaL(A.ach.TJ));this.Sa.Aw(A.aaL(A.ach.Sa));this.AcG.S(A.aaL(A.fl.
Af));this.W1.As([B=A._GetAutoObject(A.Device.Device),B.ASA,B.AZ$]);this.Hh.S(A.aaL(
A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Je._Done();this.OT._Done();this.IR._Done();this.Gm._Done();this.AK._Done(
);this.Abk._Done();this.AgP._Done();this.TJ._Done();this.Sa._Done();this.AcG._Done(
);this.W1._Done();this.Hh._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Je._ReInit();this.OT._ReInit();this.IR._ReInit();this.Gm.
_ReInit();this.AK._ReInit();this.Abk._ReInit();this.AgP._ReInit();this.TJ._ReInit(
);this.Sa._ReInit();this.AcG._ReInit();this.W1._ReInit();this.Hh._ReInit();this.
OT.R(A.aaR(A.acf.A$q));this.AcG.R(A.aaR(A.acf.A_2));this.Hh.R(A.aaR(A.acf.RangeTest
));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(A.aaL(A.fl.Ak));this.OT.Cv(A.aaL(A.fl.Bi
));this.AcG.S(A.aaL(A.fl.Af));this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Je)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbY={
ScreenType:0,Ne:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nh:
function(G){A._GetAutoObject(C.A$).Cf(this.ScreenType);},_Init:function(aArg){C.
Cp._Init.call(this,aArg);this.__proto__=C.AbY;},_className:"Application::MenuItemScreen"
};C.Ua={Ad8:null,Ml:null,AmD:false,Init:function(aArg){},Ai:function(Ae){C.Cp.Ai.
call(this,Ae);if(this.AmD){this.Ml.Cw(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cw(0);
if(this.KE)this.Ml.L(A.jb.Bm);else if(this.Hj)this.Ml.L(A.jb.Text);else this.Ml.
L(A.jb.Bm);}},IY:function(G){var F,CA;if(!!this.Ad8){(CA=this.Ad8,CA[2].call(CA[
0],!(F=this.Ad8,F[1].call(F[0]))));this.AEW((F=this.Ad8,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A20:function(G){this.KE=true;this.DJ(this);},AEW:function(
E){if(this.AmD===E)return;this.AmD=E;this.DJ(this);this.Am();},A3q:function(G){var
F;this.AEW((F=this.Ad8,F[1].call(F[0])));},A0t:function(s){this.A3q(s);},DJ:function(
G){var F;if(!this.N||!this.KE)return;if(this.AmD){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HS.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A7Y));(F=this.N,F[1].call(F[0])).HS.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASP:function(E){if(A.aaZ(this.Ad8,E))
return;if(!!this.Ad8)A.z$([this,this.A0t],this.Ad8,0);this.Ad8=E;if(!!E)A.zX([this
,this.A0t],E,0);if(!!E)A.pe([this,this.A0t],this);},_Init:function(aArg){C.Cp._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Ml={I:this},0);this.__proto__=C.Ua;this.
V.L(A.jb.H8);this.Ml.H(AHP);this.Ml.Cw(0);this.J(this.Ml,0);this.Ml.Aw(A.aaL(A.ach.
AqS));this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.Ml._Done();C.Cp.
_Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Ml._ReInit();
},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Ad8)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.AND={H5:null,IL:null,_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.SQ._Init.call(this.H5={I:this},0);C.AGC._Init.call(this.
IL={I:this},0);this.__proto__=C.AND;var B;this.I_(A.aaR(A.acf.ACr));this.H5.H(Ah2
);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.Bh(true);this.IL.H(UZ);this.
IL.Aj(true);this.IL.T(A.aaR(A.acf.Bs));this.J(this.H5,-1);this.J(this.IL,-1);this.
H5.AeU([B=this.H5,B.FV]);this.H5.Gs([this,this.D_,this.GQ]);this.H5.AkD(A.aaL(A.
ach.Edit));this.H5.Ab$([B=A._GetAutoObject(A.Device.Helper),B.U1,B.U4]);this.IL.
AeU([B=this.IL,B.FV]);this.IL.Gs([this,this.D_,this.GQ]);this.IL.AkD(A.aaL(A.ach.
Edit));this.IL.Ab$([B=A._GetAutoObject(A.Device.Helper),B.U1,B.U4]);},_Done:function(
){this.__proto__=C.Cd;this.H5._Done();this.IL._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.H5._ReInit();this.IL._ReInit();this.I_(A.
aaR(A.acf.ACr));this.H5.T(A.aaR(A.acf.Date));this.IL.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cd._Mark.call(this,D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUY={Rd:null,FH:null,BZ:null,OG:null,YP:null,Aa5:null,_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.Rd._Init.call(this.Rd={I:this},0);C.AMx._Init.call(this.
FH={I:this},0);C.AUx._Init.call(this.BZ={I:this},0);C.AUz._Init.call(this.OG={I:
this},0);C.Afl._Init.call(this.YP={I:this},0);C.Aa5._Init.call(this.Aa5={I:this}
,0);this.__proto__=C.AUY;var B;this.I_(A.aaR(A.acf.Temperature));this.FH.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AW5);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Ars));this.BZ.Bh(false);this.OG.H(Aaj);this.OG.Aj(true);this.OG.T(A.aaR(A.acf.Undertemperature
));this.OG.Bh(true);this.OG.By(3800);this.OG.Gc(3000);this.OG.EV(5000);this.OG.A_q(
A.aaR(A.acf.AGP));this.YP.H(AW6);this.YP.Aj(true);this.YP.Z(true);this.YP.T(A.aaR(
A.acf.A4T));this.J(this.BZ,0);this.J(this.OG,0);this.J(this.YP,0);this.BZ.AeU([B=
this.BZ,B.FV]);this.BZ.Gs([this,this.D_,this.GQ]);this.BZ.AkD(A.aaL(A.ach.Edit));
this.BZ.LY([B=this.BZ,B.AyP]);this.BZ.L1(A.aaL(A.ach.AnT));this.BZ.As([B=this.FH
,B.B7,B.B8]);this.BZ.CI(this.FH);this.BZ.A94([B=this.FH,B.ASI,B.A0g]);this.BZ.A93([
B=this.FH,B.ASH,B.A0f]);this.OG.LY([B=this.BZ,B.AyP]);this.OG.L1(A.aaL(A.ach.AnT
));this.OG.As([B=A._GetAutoObject(A.Device.Device),B.A82,B.Ba7]);this.YP.CI(this.
Aa5);this.YP.AkG([B=A._GetAutoObject(A.Device.Device),B.A8m,B.BaR]);},_Done:function(
){this.__proto__=C.Cd;this.Rd._Done();this.FH._Done();this.BZ._Done();this.OG._Done(
);this.YP._Done();this.Aa5._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.Rd._ReInit();this.FH._ReInit();this.BZ._ReInit();this.
OG._ReInit();this.YP._ReInit();this.Aa5._ReInit();this.I_(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Ars));this.OG.T(A.aaR(A.acf.Undertemperature));this.OG.
A_q(A.aaR(A.acf.AGP));this.YP.T(A.aaR(A.acf.A4T));},_Mark:function(D){var B;C.Cd.
_Mark.call(this,D);if((B=this.Rd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FH)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANQ={PE:null,PF:null,Su:null,V5:null,Sw:null,Sv:null,Gf:null,Acv:null,Init:function(
aArg){A.zX([this,this.BoH],this.PF.Q,0);},BoH:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw3((F=this.PF.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.Iq._Init.call(this.PE={I:this},0);C.BW._Init.call(this.PF={
I:this},0);C.Afl._Init.call(this.Su={I:this},0);C.Iq._Init.call(this.V5={I:this}
,0);C.Afl._Init.call(this.Sw={I:this},0);C.Afl._Init.call(this.Sv={I:this},0);C.
Gf._Init.call(this.Gf={I:this},0);C.Acv._Init.call(this.Acv={I:this},0);this.__proto__=
C.ANQ;var B;this.N.H(Xg);this.I_(A.aaR(A.acf.Device));this.PE.H(Ah2);this.PE.Aj(
true);this.PE.T(A.aaR(A.acf.A$a));this.PE.Bh(false);this.PE.Gc(2);this.PE.EV(60);
this.PE.IO(A.aaR(A.acf.AG4));this.PE.I$(A.aaR(A.acf.AG4));this.PF.H(AW7);this.PF.
Aj(true);this.PF.T(A.aaR(A.acf.A$h));this.PF.Bh(true);this.PF.By(0);this.PF.Gc(-
1);this.PF.EV(1);this.Su.H(Aaj);this.Su.Aj(true);this.Su.T(A.aaR(A.acf.HG));this.
Su.Bh(false);this.Su.By(0);this.Su.Gc(-1);this.Su.EV(1);this.V5.H(Alj);this.V5.Aj(
true);this.V5.T(A.aaR(A.acf.A5f));this.V5.Bh(true);this.V5.IO(AfE);this.V5.I$(AfE
);this.Sw.H(AcS);this.Sw.Aj(true);this.Sw.T(A.aaR(A.acf.AsR));this.Sw.Bh(false);
this.Sw.By(1);this.Sw.Gc(-1);this.Sw.EV(1);this.Sv.H(Aow);this.Sv.Aj(true);this.
Sv.T(A.aaR(A.acf.Asv));this.Sv.Bh(true);this.Sv.By(0);this.Sv.Gc(-1);this.Sv.EV(
1);this.Acv.As(A._GetAutoObject(A.Device.Device).AxF);this.J(this.PE,0);this.J(this.
PF,0);this.J(this.Su,0);this.J(this.V5,0);this.J(this.Sw,0);this.J(this.Sv,0);this.
PE.As([B=A._GetAutoObject(A.Device.Device),B.A8U,B.Ba3]);this.PF.As([B=this.Acv,
B.B7,B.B8]);this.PF.CI(this.Acv);this.Su.CI(this.Gf);this.Su.AkG([B=A._GetAutoObject(
A.Device.Device),B.AEv,B.AIL]);this.V5.As([B=A._GetAutoObject(A.Device.Device),B.
A8j,B.BaO]);this.Sw.CI(this.Gf);this.Sw.AkG([B=A._GetAutoObject(A.Device.Device)
,B.A83,B.Ba8]);this.Sv.CI(this.Gf);this.Sv.AkG([B=A._GetAutoObject(A.Device.Device
),B.ASq,B.AZ4]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.PE._Done(
);this.PF._Done();this.Su._Done();this.V5._Done();this.Sw._Done();this.Sv._Done(
);this.Gf._Done();this.Acv._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.PE._ReInit();this.PF._ReInit();this.Su._ReInit();this.
V5._ReInit();this.Sw._ReInit();this.Sv._ReInit();this.Gf._ReInit();this.Acv._ReInit(
);this.I_(A.aaR(A.acf.Device));this.PE.T(A.aaR(A.acf.A$a));this.PE.IO(A.aaR(A.acf.
AG4));this.PE.I$(A.aaR(A.acf.AG4));this.PF.T(A.aaR(A.acf.A$h));this.Su.T(A.aaR(A.
acf.HG));this.V5.T(A.aaR(A.acf.A5f));this.Sw.T(A.aaR(A.acf.AsR));this.Sv.T(A.aaR(
A.acf.Asv));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.PE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUb={V8:null,V7:
null,QL:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bh3
],this.QL.Q,0);},Bh3:function(G){var F;A._GetAutoObject(A.Device.Device).AkA((F=
this.QL.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
Nb._Init.call(this.V8={I:this},0);C.Nb._Init.call(this.V7={I:this},0);C.AUt._Init.
call(this.QL={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUb;var B;this.I_(A.aaR(A.acf.Aso));this.V8.H(IT);this.
V8.Aj(true);this.V8.T(A.aaR(A.acf.AjJ));this.V8.Bh(false);this.V8.Ne(87);this.V7.
H(AW8);this.V7.Aj(true);this.V7.T(A.aaR(A.acf.Aqp));this.V7.Bh(true);this.V7.Ne(
88);this.QL.H(UZ);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.A4Y));this.QL.Bh(false);
this.QL.Gc(-1);this.QL.EV(1);this.EartagNrAssignmentMode.As(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V8,0);this.J(this.V7,0);this.J(this.
QL,0);this.V8.AR=[B=this.V8,B.Nh];this.V7.AR=[B=this.V7,B.Nh];this.QL.As([B=this.
EartagNrAssignmentMode,B.B7,B.B8]);this.QL.CI(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.V8._Done();this.V7._Done(
);this.QL._Done();this.EartagNrAssignmentMode._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V8._ReInit();this.V7._ReInit();this.QL._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I_(A.aaR(A.acf.Aso));this.V8.T(A.aaR(
A.acf.AjJ));this.V7.T(A.aaR(A.acf.Aqp));this.QL.T(A.aaR(A.acf.A4Y));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W1={Q:null,TransponderProtocolToString:
null,Aps:null,Background:null,Y:null,So:null,GM:null,PK:null,OI:null,Po:null,C7:
null,EY:null,SL:null,N1:null,CountryToString:null,As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},Kd:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GM.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BO=(F=this.Q,F[1].call(F[0])).Biz();if(BO<900){var J4=A._GetAutoObject(
A.Device.Converter).ANu(BO);if(!!J4)this.C7.R(((this.CountryToString.Lt(J4)+Rm)+
BO.toFixed())+O5);else this.C7.R(BO.toFixed());if(J4===10){var AJ$=this.A6R((F=this.
Q,F[1].call(F[0])).Id);this.C7.R(this.C7.String+((((AHQ+this.Aps.Bpr(AJ$))+Rm)+A.
abl(this.Aps.Bpq(AJ$),2,10))+O5));}this.C7.Z(true);this.Po.Z(true);this.OI.Z(false
);this.PK.Z(false);}else{this.OI.R(((A._GetAutoObject(A.Device.Converter).Bhp(BO
)+Rm)+BO.toFixed())+O5);this.OI.Z(true);this.PK.Z(true);this.C7.Z(false);this.Po.
Z(false);}if(BO===276){this.EY.R(this.Aps.BH(this.A6R((F=this.Q,F[1].call(F[0])).
Id)));this.EY.Z(true);}else this.EY.Z(false);this.N1.R(this.TransponderProtocolToString.
BH((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GM.R(A.jV);this.OI.
R(A.jV);this.EY.R(A.jV);this.C7.R(A.jV);this.N1.R(A.jV);}},A6R:function(J2){var Qt=
0;var J4=A._GetAutoObject(A.Device.Converter).Z3(J2);switch(J4){case 10:{var Gj=
A._GetAutoObject(A.Device.Helper).Sj(J2,8,2)|0;Qt=A._GetAutoObject(A.Device.Converter
).ACR(Gj);}break;default:;}return Qt;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Aps={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.So={I:this},0);C.CH._Init.call(this.GM={I:this},0);C.CH._Init.
call(this.PK={I:this},0);C.CH._Init.call(this.OI={I:this},0);C.CH._Init.call(this.
Po={I:this},0);C.CH._Init.call(this.C7={I:this},0);C.CH._Init.call(this.EY={I:this
},0);C.CH._Init.call(this.SL={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W1;
this.H(AcR);this.Background.AZ(0x3F);this.Background.H(AcR);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcR);this.Y.JP(9);this.So.H(AHR);this.So.Aj(true
);this.So.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.So.A6(0x11);this.So.L(A.jb.
Text);this.GM.H(AW9);this.GM.Aj(true);this.GM.R(AHS);this.GM.A6(0x14);this.GM.L(
A.jb.Text);this.PK.H(AHT);this.PK.Aj(true);this.PK.R(A.aaR(A.acf.A_G)+A.aaR(A.acf.
Colon));this.PK.A6(0x11);this.PK.L(A.jb.Text);this.OI.H(AHU);this.OI.Aj(true);this.
OI.R(AW_);this.OI.A6(0x14);this.OI.L(A.jb.Text);this.Po.H(AHT);this.Po.Aj(true);
this.Po.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.Po.A6(0x11);this.Po.L(A.jb.Text
);this.C7.H(AHU);this.C7.Aj(true);this.C7.R(AW$);this.C7.A6(0x14);this.C7.L(A.jb.
Text);this.EY.H(AXa);this.EY.Aj(true);this.EY.R(AXb);this.EY.A6(0x14);this.EY.L(
A.jb.Text);this.SL.H(AXc);this.SL.Aj(true);this.SL.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SL.A6(0x11);this.SL.L(A.jb.Text);this.N1.H(AXd);this.N1.Aj(true);this.
N1.R(AXe);this.N1.A6(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.So,0);this.J(this.GM,0);this.J(this.PK,0);this.J(this.OI,0
);this.J(this.Po,0);this.J(this.C7,0);this.J(this.EY,0);this.J(this.SL,0);this.J(
this.N1,0);this.So.S(A.aaL(A.fl.Ak));this.So.A2(A.aaL(A.fl.Bi));this.GM.S(A.aaL(
A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bi));this.PK.S(A.aaL(A.fl.Ak));this.PK.A2(A.aaL(
A.fl.Bi));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bi));this.Po.S(A.aaL(A.
fl.Ak));this.Po.A2(A.aaL(A.fl.Bi));this.C7.S(A.aaL(A.fl.Ak));this.C7.A2(A.aaL(A.
fl.Bi));this.EY.S(A.aaL(A.fl.Ak));this.EY.A2(A.aaL(A.fl.Bi));this.SL.S(A.aaL(A.fl.
Ak));this.SL.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Aps._Done();this.Background._Done();this.Y._Done();this.So._Done();
this.GM._Done();this.PK._Done();this.OI._Done();this.Po._Done();this.C7._Done();
this.EY._Done();this.SL._Done();this.N1._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Aps._ReInit();this.Background._ReInit();this.Y._ReInit();this.So.
_ReInit();this.GM._ReInit();this.PK._ReInit();this.OI._ReInit();this.Po._ReInit(
);this.C7._ReInit();this.EY._ReInit();this.SL._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.So.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.PK.R(A.aaR(A.acf.A_G
)+A.aaR(A.acf.Colon));this.Po.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.SL.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.So.S(A.aaL(A.fl.Ak));this.So.A2(A.aaL(A.fl.
Bi));this.GM.S(A.aaL(A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bi));this.PK.S(A.aaL(A.fl.Ak
));this.PK.A2(A.aaL(A.fl.Bi));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bi
));this.Po.S(A.aaL(A.fl.Ak));this.Po.A2(A.aaL(A.fl.Bi));this.C7.S(A.aaL(A.fl.Ak)
);this.C7.A2(A.aaL(A.fl.Bi));this.EY.S(A.aaL(A.fl.Ak));this.EY.A2(A.aaL(A.fl.Bi)
);this.SL.S(A.aaL(A.fl.Ak));this.SL.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aps)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QT={D2:null,A_U:A.jV,Ai:function(Ae){C.Fm.Ai.call(
this,Ae);if(this.Mp.Fo())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zx(this.G8.AQ);},ZA:function(E){if(this.A_U===E)return;this.A_U=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fm._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QT;this.Background.H(AXf);this.
Mp.H(W7);this.OB.H(AHV);this.QZ.H(AHV);this.D2.H(AXg);this.D2.Z(false);this.J(this.
D2,0);this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Cv(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=C.Fm;this.D2._Done();C.Fm._Done.call(this
);},_ReInit:function(){C.Fm._ReInit.call(this);this.D2._ReInit();this.G8.S(A.aaL(
A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Cv(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeC:null,Ap:null,Text:null
,DK:A.jV,AmQ:0,MZ:0,Ja:0,A5i:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BB7:function(G){this.Ap.H(this.Text.M);this.
AeC.H(this.Text.M);},Zx:function(E){if(this.AmQ===E)return;this.AmQ=E;this.AeC.L(
E);this.Text.L(E);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hl:function(E){
if(this.Ja===E)return;this.Ja=E;this.Text.Hl(E);},Blq:function(E){if(this.A5i===
E)return;this.A5i=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.AeC={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHW);
this.AeC.AZ(0x8);this.AeC.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHW);this.Text.Hl(5);this.Text.I9(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeC,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeC.Aw(A.aaL(A.ach.APQ));this.Ap.Aw(A.aaL(A.ach.APP));this.Text.Q4([this,this.BB7
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeC._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeC._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T8={DZ:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},CD:function(
G){C.AB.CD.call(this,G);this.ALg(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkS();A._GetAutoObject(A.Device.Helper).Ass();},Ig:function(G){},AcV:function(
s){this.Ig(s);},A3f:function(G){A._GetAutoObject(C.A$).Fy();},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},ALg:function(G){},BGg:function(s){this.ALg(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T8;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dr(C.Aq4);this.
DZ.AZ(0x3F);this.DZ.H(Fe);this.DZ.L(A.jb.CK);this.Y.H(Fe);this.Y.JP(9);this.Ay.H(
Is);this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CC=[this,this.A3f
];this.N.CY(A.aaL(A.ach.E5));this.Y.El=[this,this.Fj];},_Done:function(){this.__proto__=
C.AB;this.DZ._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVw={Wz:function(
G){this.Agu();this.I0(A.aaR(A.acf.AU6),[this,this.ATx],7);this.I0(A.aaR(A.acf.Asp
),[this,this.Blt],6);this.I0(A.aaR(A.acf.AGb),[this,this.ATj],3);this.I0(A.aaR(A.
acf.An2),[this,this.AwR],2);this.I0(A.aaR(A.acf.AdT),[this,this.AEO],1);this.I0(
A.aaR(A.acf.Auz),[this,this.AEI],0);A._GetAutoObject(C.BS).FX();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dt(6);},DE:function(G){},Abv:function(){return C.AM7;},Abw:function(){return C.APy;
},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var ABu=A._NewObject(
A.Device.BoolFilterCriterion,0);ABu.Initialize(12,0,true,true);Be.CW(ABu);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){C.GZ.HQ.call(this,G);if(this.Akl()===
false){this.N.Ct(A.aaL(A.ach.Asp));this.N.Cl=[this,this.A5W];this.N.FN(A.jV);}this.
N.ON(false);this.N.OO(false);},Agg:function(){A._GetAutoObject(C.A$).Cf(41);},_Init:
function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AVw;var B;this.Dr(C.APu
);this.Dz(A.aaR(A.acf.A7K));this.AwM([B=A._GetAutoObject(A.Device.Device),B.A87,
B.Ba9]);},_ReInit:function(){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.A7K));}
,_className:"Application::WatchListScreen"};C.AMc={DE:function(G){var B;var Jz=(
A.Core.BM.isPrototypeOf(G)?G:null);if(((Jz.CO===4)||(Jz.CO===5))===false){C.AxZ.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var Bcw=A._GetAutoObject(A.Device.Device).KX;var Th;if(Jz.CO===5)Th=5;else Th=4;
var AA$=A._GetAutoObject(A.acj.DV).Bc6(Bcw,Th);var Gv=(((Bcw+((AA$/2)|0))/AA$)|0
)*AA$;if(Jz.CO===4)Gv+=AA$;else if(Jz.CO===5)Gv-=AA$;if(Gv>999900)Gv=999900;if(Gv<
100)Gv=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(Gv);},AsG:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.
CC],this);else A._GetAutoObject(C.A$).Fy();},WR:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).AsI();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A__()===false){this.H7.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KX);this.H7.Cg(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A$).Fy();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H7.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KX);this.H7.Cg(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();}},AkZ:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.Cm],this);},Bc5:function(){var
ALu=A._GetAutoObject(A.Device.Helper).W.AhU(1);if(ALu>=100000)ALu=(Math.round(ALu
/1000)|0)*1000;return ALu;},_Init:function(aArg){C.AxZ._Init.call(this,aArg);this.
__proto__=C.AMc;},_className:"Application::AnimalActionWeighingScreen"};C.AVh={Wa:
null,YR:null,Rd:null,AeN:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
BW._Init.call(this.Wa={I:this},0);C.BW._Init.call(this.YR={I:this},0);C.Rd._Init.
call(this.Rd={I:this},0);C.AeN._Init.call(this.AeN={I:this},0);this.__proto__=C.
AVh;var B;this.I_(A.aaR(A.acf.AG5));this.Wa.H(Ah2);this.Wa.Aj(true);this.Wa.T(A.
aaR(A.acf.A$x));this.Wa.Bh(true);this.Wa.By(0);this.YR.H(UZ);this.YR.Aj(true);this.
YR.T(A.aaR(A.acf.A$w));this.YR.Bh(false);this.J(this.Wa,0);this.J(this.YR,0);this.
Wa.As([B=this.Rd,B.B7,B.B8]);this.Wa.CI(this.Rd);this.YR.As([B=this.AeN,B.B7,B.B8
]);this.YR.CI(this.AeN);},_Done:function(){this.__proto__=C.Cd;this.Wa._Done();this.
YR._Done();this.Rd._Done();this.AeN._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.Wa._ReInit();this.YR._ReInit();this.Rd._ReInit();
this.AeN._ReInit();this.I_(A.aaR(A.acf.AG5));this.Wa.T(A.aaR(A.acf.A$x));this.YR.
T(A.aaR(A.acf.A$w));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.
Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeN={MassUnitToString:null
,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwN(E);}
,Init:function(aArg){var B;A.zX([this,this.BdI],[B=A._GetAutoObject(A.Device.Device
),B.ASp,B.AZ3],0);A.pe([this,this.BdI],this);},BdI:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeN;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxZ={H7:null,Ajz:null,MassUnit:null,
KX:null,Vz:null,AnO:null,AcI:null,Z4:null,O0:null,YG:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).Af2());A.zX([this,this.AKw],[B=A._GetAutoObject(
A.Device.Device),B.AEy,B.AIO],0);A.zX([this,this.BAS],[B=A._GetAutoObject(A.Device.
Device),B.AEE,B.AIS],0);A.zX([this,this.BAT],[B=this.O0,B.ArA,B.Jw],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxS();this.AcK();},IY:function(G){this.WR(this);}
,CD:function(G){C.AB.CD.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsI();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A7(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),
0,null);this.H7.Gr();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGL();else{var BCk=this.Bc5();this.Z4.Z(true);this.AcI.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCk);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E6:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsI();else A._GetAutoObject(A.Device.Device).AhM(
);},AxS:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bgu();break;case 3:{this.Bgu();this.Z4.Z(false);this.AcI.Z(false
);if(this.A__()){this.Vz.Z(false);this.KX.H(A.abO(this.KX.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O0.Ar(true);this.O0.Z(true);this.Bb(this.O0);}}break;
case 4:this.KX.R(A.aaR(A.acu.Ako));break;default:A.ab5("%s%e",AHX,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcK:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CY(A.aaL(A.ach.Aey));this.N.Ct(null);
this.YG.Z(false);this.N.C6(A.aaL(A.ach.Am4));this.N.CV(A.jV);}break;case 3:{if(this.
O0.AY<=1){this.N.CY(null);this.N.Ct(null);this.YG.Z(false);this.N.C6(null);}else{
this.N.CY(A.aaL(A.ach.Am2));this.N.Ct(A.aaL(A.ach.Aez));this.YG.Z(true);this.N.C6(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C6(A.aaL(A.ach.AvI));this.
N.Cm=[this,this.Blh];this.N.Ct(null);this.YG.Z(false);this.N.CV(A.jV);}break;default:;
}},AsG:function(G){},Bwb:function(s){this.AsG(s);},WR:function(G){},A0j:function(
s){this.WR(s);},Blh:function(G){this.CD(this);},BAS:function(G){this.Am();},AKw:
function(G){this.Am();},A__:function(){var Auq=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auq>0)&&!A._GetAutoObject(A.Device.Helper).Bpo(Auq
,this.H7.Timestamp);},AkZ:function(G){},A0i:function(s){this.AkZ(s);},BAT:function(
G){this.Am();},Bgu:function(){this.KX.R(A._GetAutoObject(A.Device.Converter).Alb(
A._GetAutoObject(A.Device.Device).KX));},Bc5:function(){return A._GetAutoObject(
A.Device.Helper).W.AhU(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Ajz={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.Vz={I:this
},0);C.AxR._Init.call(this.AnO={I:this},0);A.acg.Aeo._Init.call(this.AcI={I:this
},0);A.acg.Aeo._Init.call(this.Z4={I:this},0);C.AVB._Init.call(this.O0={I:this},
0);A.acg.Ap._Init.call(this.YG={I:this},0);this.__proto__=C.AxZ;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dr(C.II);this.Ajz.AZ(0x3F);this.Ajz.H(Ayk);this.Ajz.
L(A.jb.CK);this.MassUnit.H(AXh);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az7));this.MassUnit.L(A.jb.Text);this.KX.H(AXi);this.KX.A6(0x14);this.KX.R(A.aaR(
A.acu.Ako));this.KX.L(A.jb.Text);this.Vz.H(AXj);this.Vz.R(A.aaR(A.acf.A$I));this.
Vz.L(A.jb.Text);this.Vz.Z(true);this.AnO.H(AXk);this.AcI.H(AXl);this.AcI.L(A.jb.
Ad$);this.AcI.Z(false);this.Z4.H(AHY);this.Z4.L(A.jb.Ad$);this.Z4.Bl8(true);this.
Z4.Z(false);this.O0.AZ(0x3F);this.O0.H(Ayk);this.O0.Ar(false);this.O0.Z(false);this.
YG.H(AXm);this.YG.L(A.jb.Bm);this.J(this.Ajz,0);this.J(this.MassUnit,0);this.J(this.
KX,0);this.J(this.Vz,0);this.J(this.AcI,0);this.J(this.Z4,0);this.J(this.O0,0);this.
J(this.YG,0);this.N.CC=[this,this.Bwb];this.N.Cl=[this,this.A0i];this.N.Cm=[this
,this.A0j];this.MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aer));this.Vz.S(
A.aaL(A.fl.EK));this.AcI.Zz(this.AnO);this.Z4.Zz(this.AnO);this.H7=A._NewObject(
A.Device.Rating,0);this.O0.LZ(A._GetAutoObject(A.Device.Helper).W);this.O0.AkH(this.
H7);this.YG.Aw(A.aaL(A.ach.AQF));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajz._Done();this.MassUnit._Done();this.KX._Done();this.Vz._Done();this.
AnO._Done();this.AcI._Done();this.Z4._Done();this.O0._Done();this.YG._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajz._ReInit();
this.MassUnit._ReInit();this.KX._ReInit();this.Vz._ReInit();this.AnO._ReInit();this.
AcI._ReInit();this.Z4._ReInit();this.O0._ReInit();this.YG._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az7));this.KX.R(A.aaR(A.acu.Ako));this.Vz.R(A.aaR(A.acf.A$I));this.
MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aer));this.Vz.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVF={FH:null
,OJ:null,M_:null,C9:null,LW:null,T5:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FH,B.B7,B.B8],0);A.pe([this,this.GH],this);},CD:function(G){C.Cd.CD.
call(this,G);A.pe([this,this.GH],this);},Bj6:function(G){var F;this.LW.BT.L(this.
LW.V.AQ);if(!!this.LW.Q)this.LW.BT.R((A._GetAutoObject(A.Device.Converter).S7((F=
this.LW.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DV).AaA());},GH:function(
G){var AJs=true;if(this.FH.Q===1)AJs=false;this.C9.Aj(AJs);this.C9.Ar(AJs);this.
C9.Z(AJs);A._GetAutoObject(A.Device.Helper).ANo(this.Y);},_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.AMy._Init.call(this.FH={I:this},0);C.AHe._Init.call(this.
OJ={I:this},0);C.AUy._Init.call(this.M_={I:this},0);C.AkX._Init.call(this.C9={I:
this},0);C.Iq._Init.call(this.LW={I:this},0);C.BW._Init.call(this.T5={I:this},0);
this.__proto__=C.AVF;var B;this.I_(A.aaR(A.acf.Settings));this.Hh.R(A.aaR(A.acf.
AsU));this.FH.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OJ.As(A._GetAutoObject(
A.Device.Device).OJ);this.M_.H(AXn);this.M_.Aj(true);this.C9.H(As7);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KI));this.C9.Bh(true);this.C9.Gc(1000);this.C9.EV(99000);
this.LW.H(As8);this.LW.Aj(true);this.LW.T(A.aaR(A.acf.A42));this.LW.Gc(50);this.
LW.EV(2000);this.LW.AS2(A._GetAutoObject(A.acj.DV).AzO());this.T5.H(AcS);this.T5.
Aj(true);this.T5.T(A.aaR(A.acf.A7s));this.T5.Gc(-1);this.T5.EV(1);this.JV(this.Y
,-1);this.JV(this.Ay,-1);this.J(this.M_,0);this.J(this.C9,0);this.J(this.LW,0);this.
J(this.T5,0);this.M_.AeU([B=this.M_,B.FV]);this.M_.Gs([this,this.D_,this.GQ]);this.
M_.AkD(A.aaL(A.ach.Edit));this.M_.LY([B=this.M_,B.AyP]);this.M_.L1(A.aaL(A.ach.AnT
));this.M_.As([B=this.FH,B.B7,B.B8]);this.M_.CI(this.FH);this.M_.A94([B=this.FH,
B.ASI,B.A0g]);this.M_.A93([B=this.FH,B.ASH,B.A0f]);this.C9.Gs([this,this.D_,this.
GQ]);this.C9.LY([B=this.M_,B.AyP]);this.C9.L1(A.aaL(A.ach.AnT));this.C9.As([B=this.
FH,B.A8h,B.ASO]);this.LW.Gs([this,this.D_,this.GQ]);this.LW.LY([B=this.M_,B.AyP]
);this.LW.L1(A.aaL(A.ach.AnT));this.LW.As([B=this.FH,B.A8g,B.ASM]);this.LW.A_f([
this,this.Bj6]);this.T5.Gs([this,this.D_,this.GQ]);this.T5.As([B=this.OJ,B.B7,B.
B8]);this.T5.CI(this.OJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;
this.FH._Done();this.OJ._Done();this.M_._Done();this.C9._Done();this.LW._Done();
this.T5._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.FH._ReInit();this.OJ._ReInit();this.M_._ReInit();this.C9._ReInit();this.LW.
_ReInit();this.T5._ReInit();this.I_(A.aaR(A.acf.Settings));this.Hh.R(A.aaR(A.acf.
AsU));this.C9.T(A.aaR(A.acf.KI));this.LW.T(A.aaR(A.acf.A42));this.T5.T(A.aaR(A.acf.
A7s));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.FH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUy={Y3:null,Init:
function(aArg){var B;A.zX([this,this.AfF],[B=A._GetAutoObject(A.Device.Device),B.
ASp,B.AZ3],0);A.pe([this,this.AfF],this);},A3I:function(G){A._GetAutoObject(A.Device.
Device).A7(37,true,A.jV,0,[this,this.Bbl]);},A1y:function(G){var F;if(this.A9===
1){var BQ=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DV).AzO();if(this.D7<this.
AlU)this.D7=this.AlU;if(this.DX!==BQ){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.
D7));A.abo(this.JT,0);}}if(this.A9===2){var BQ=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).AzO();if(this.DX<this.D7)this.DX=this.D7;if(this.DX!==BQ){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.Am();
},A19:function(G){var F;if(this.A9===1){var BQ=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DV).AzO();if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ){if(!!this.JT
)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A9===2){var BQ=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).AzO();if(this.DX>this.AlP)this.DX=
this.AlP;if(this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(
this.JS,0);}}this.DJ(this);this.Am();},GH:function(G){this.PH.R(AHZ+A._GetAutoObject(
A.Device.Converter).S7(this.D7,2,true));this.PG.R(AHZ+A._GetAutoObject(A.Device.
Converter).S7(this.DX,2,true));this.Sy.R(A._GetAutoObject(A.acj.DV).AaA());this.
Y3.R(this.Sy.String);},A3i:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Asu(this
);},A12:function(Atp){if(Atp===1)return this.PH;else if(Atp===2)return this.PG;else
return null;},_Init:function(aArg){C.Acs._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y3={I:this},0);this.__proto__=C.AUy;this.T(A.aaR(A.acf.ACm));this.AlP=
2000;this.AlU=20;this.Background.H(J0);this.V.H(BF);this.V.R(A.aaR(A.acf.ACm)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkQ.H(AXo);this.AkR.H(AXp);this.Q5.H(AXq);
this.QC.H(AXr);this.PG.H(AXs);this.PH.H(AXt);this.Sy.H(AXu);this.Y3.H(AXv);this.
Y3.I9(false);this.Y3.A6(0x12);this.Y3.L(0xFF000000);this.JV(this.H4,-8);this.J(this.
Y3,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Y3.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acs;this.Y3._Done();C.Acs.
_Done.call(this);},_ReInit:function(){C.Acs._ReInit.call(this);this.Y3._ReInit();
this.T(A.aaR(A.acf.ACm));this.V.R(A.aaR(A.acf.ACm)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Y3.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acs._Mark.call(this,D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABz={M:P7,A64:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A64();},_Init:function(
aArg){A.Graphics.Hz._Init.call(this,aArg);this.__proto__=C.ABz;},_className:"Application::AbstractPath"
};C.Aqi={DP:null,DZ:null,Ri:null,AdP:null,PY:null,AdO:null,Auy:1,A4y:0,Bce:false
,AzK:true,CP:function(){this.Bgq(this);},Init:function(aArg){var B;this.Bb(this.
AdP);A.zX([this,this.Bgq],[B=this.AdP,B.A8n,B.BaS],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdO.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhJ(this.Auy+this.A4y)));if(this.Auy===1)this.PY.R(A.aaR(A.acf.ANc));else this.
PY.R(A.aaR(A.acf.Bhi));},CD:function(G){if(this.AzK)this.AzK=false;else if(this.
DP.Bcn()===false)A.pe([this,this.A2R],this);else if(this.DP.AzZ())this.DP.Ac8();
A.zV([this,this.Af_],A._GetAutoObject(A.Device.Device).An,0);},E6:function(G){A.
z9([this,this.Af_],A._GetAutoObject(A.Device.Device).An,0);},A2R:function(G){this.
Bce=true;A._GetAutoObject(C.A$).Fy();},Bgq:function(G){var B;var BcP=(C.Wl.isPrototypeOf(
B=this.AdP.AV)?B:null);if(!!BcP){var Ay5=A._NewObject(A.Device.ActionToString,0);
this.Ri.R(Ay5.Lt(BcP.Action));}},Ig:function(G){var Cy=(C.Wl.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DP.Qj(Cy.Action);this.Blk(this.Auy+1);},BAn:function(G){
if(A._GetAutoObject(C.Pi).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Blk:function(E){
if(this.Auy===E)return;this.Auy=E;this.Am();},Af_:function(G){if((this.Bce===false
)&&(this.DP.Bcn()===false))A.pe([this,this.A2R],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);C.CH._Init.call(this.
Ri={I:this},0);C.ARt._Init.call(this.AdP={I:this},0);C.CH._Init.call(this.PY={I:
this},0);A.acg.Text._Init.call(this.AdO={I:this},0);this.__proto__=C.Aqi;this.Background.
L(A.jb.CS);this.N.H(Xg);this.N.Z(true);this.Dr(C.II);this.DZ.AZ(0x3F);this.DZ.H(
Fe);this.DZ.L(A.jb.CK);this.Ri.H(AXw);this.Ri.L(A.jb.Text);this.AdP.H(AH0);this.
PY.H(AXx);this.PY.R(A.aaR(A.acf.ANc));this.PY.L(A.jb.Text);this.AdO.H(Ayl);this.
AdO.R(AH1);this.AdO.L(A.jb.Text);this.J(this.DZ,0);this.J(this.Ri,0);this.J(this.
AdP,0);this.J(this.PY,0);this.J(this.AdO,0);this.N.CC=[this,this.A2R];this.N.Cl=[
this,this.BAn];this.N.CY(A.aaL(A.ach.E5));this.N.Ct(A.aaL(A.ach.AbF));this.Ri.S(
A.aaL(A.fl.EK));this.Ri.A2(A.aaL(A.fl.Af));this.Ri.Cv(A.aaL(A.fl.Ak));this.AdP.A3g=[
this,this.Ig];this.PY.S(A.aaL(A.fl.EK));this.PY.A2(A.aaL(A.fl.Af));this.PY.Cv(A.
aaL(A.fl.Ak));this.AdO.S(A.aaL(A.fl.Hu));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Ri._Done();this.
AdP._Done();this.PY._Done();this.AdO._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DZ._ReInit();this.Ri._ReInit();this.AdP._ReInit();
this.PY._ReInit();this.AdO._ReInit();this.PY.R(A.aaR(A.acf.ANc));this.Ri.S(A.aaL(
A.fl.EK));this.Ri.A2(A.aaL(A.fl.Af));this.Ri.Cv(A.aaL(A.fl.Ak));this.PY.S(A.aaL(
A.fl.EK));this.PY.A2(A.aaL(A.fl.Af));this.PY.Cv(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ri)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARt={Ia:null,A3g:null,Cr:null,Y:null,Ay:
null,A3W:0,Init:function(aArg){A.zV([this,this.ABp],this.Ia,0);A.zV([this,this.Bgn
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Auv],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABp],this);},Bb:function(E){var A2N=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2N)A.abo([this,this.A8n,this.BaS],0);},DE:
function(G){var B;var Fh=0;var X=this.AV;switch(this.Cr.CO){case 6:Fh=2;break;case
7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QF(X,Fh,0x415);
if((Fh===5)&&!X){var AK9=this.AV;while(!X){AK9=this.QF(AK9,2,0x415);if(!!AK9)X=this.
QF(AK9,Fh,0x415);else break;}}if(!!X)this.Bb(X);var GX=(C.Wl.isPrototypeOf(B=this.
AV)?B:null);if(!!GX)this.A3W=(C.Wl.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3W=0;A.pe([this,this.MO],this);},A1q:function(ED){var EP=A._GetAutoObject(C.DP).
Bcv(ED,this.A3g);this.J(EP,0);},Ao6:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HP(AdK);
}},ABp:function(G){this.Ao6();var O;var CB=A._GetAutoObject(C.Pi).NP();for(O=0;O<
CB;O=O+1){var Aar=A._GetAutoObject(C.Pi).OC(O);this.A1q(Aar);}A.pe([this,this.Bgn
],this);A.pe([this,this.BpM],this);A.pe([this,this.Auv],this);},BpM:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wl.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Auv:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wl.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATs(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATs(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATs(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((
B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Bgn:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wl.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pi).NU(Aa.Action)&&A._GetAutoObject(C.
DP).A4x(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3W===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vx(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARt;this.H(AXy);this.Cr.Filter=147;this.Y.AZ(0xB);this.Y.H(AXz);this.Y.JP(9);this.
Ay.AZ(0xA);this.Ay.H(AXA);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BN=[this,this.
DE];this.Cr.D1=[this,this.DE];this.Y.El=[this,this.Fj];this.Ia=A._GetAutoObject(
C.Pi);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3g)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fq={Ej:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fq;this.N.Ar(false);this.Ej.H(BF);this.Ej.Ar(false
);this.AK.H(Fe);this.AK.L(A.jb.Ad$);this.Text.H(BF);this.Text.R(AXB);this.Text.L(
0xFF000000);this.Ap.H(P7);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Ct(A.aaL(A.ach.AbF));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC$));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.XR={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IY:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FS=A.jb.Ad$;var GW=A.jb.CS;if(this.Hj){FS=A.jb.Text;GW=A.jb.
Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.Qp){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GW);}this.Hx.L(A.
jb.CS);this.H4.L(A.jb.CS);},Hk:function(G){var B;var Gh=this.Dy.G4;var Cz=(C.CH.
isPrototypeOf(B=this.Dy.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bi));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.F$(Gh));else Cz.R(Xe);Cz.H(A.
abK(Cz.M,[this.Dy.Wc,(B=this.Dy.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.XR;this.Dy.AFf(170);this.Dy.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajn={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hl(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cp.Ai.call(this,Ae);var FS=A.jb.Ad$;var GW=A.jb.CS;if(this.Hj){FS=A.jb.Text;
GW=A.jb.Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.
Qp){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GW);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Ajn;this.C8.H(AXC);this.C8.Cw(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajw)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.C8._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Cp._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALV={Y:null,RM:null,Tt:null
,Tu:null,Tv:null,AdN:null,XQ:null,Vr:null,Vs:null,AaW:null,Ay:null,Init:function(
aArg){this.Bb(this.RM);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},IY:
function(G){this.BfG(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N
,0);this.Bx.CC=[this,this.BfG];this.Bx.Cl=null;this.Bx.Cm=null;this.Bx.CV(A.jV);
this.Bx.Ct(null);this.Bx.CY(A.aaL(A.ach.V3));}return this.Bx;},AA4:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XQ.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XQ.Q))A._GetAutoObject(C.AutoActions).J(this.XQ.Q);if(!!this.Vr.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vr.Q))A._GetAutoObject(C.AutoActions
).J(this.Vr.Q);if(!!this.Vs.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vs.
Q))A._GetAutoObject(C.AutoActions).J(this.Vs.Q);if(!!this.AaW.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaW.Q))A._GetAutoObject(C.AutoActions).J(this.AaW.Q
);A._GetAutoObject(C.AutoActions).Cg();},BfG:function(G){if(this.Bzv()===true){this.
AA4();this.XF(this);}else A._GetAutoObject(A.Device.Device).A7(27,true,A.jV,0,null
);},Bzv:function(){return(!!this.XQ.C4(this.XQ.Q)||!!this.Vr.C4(this.Vr.Q))||!!this.
Vs.C4(this.Vs.Q);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vx(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true
,null,null);},BAz:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XQ.Atw(this);this.Vr.Atw(this);this.Vs.Atw(this);this.AaW.Atw(this);}
,_Init:function(aArg){C.Fq._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.XR._Init.call(this.RM={I:this},0);C.XR._Init.call(this.Tt={I:this},0);C.XR.
_Init.call(this.Tu={I:this},0);C.XR._Init.call(this.Tv={I:this},0);C.Au3._Init.call(
this.AdN={I:this},0);C.AutoAction._Init.call(this.XQ={I:this},0);C.AutoAction._Init.
call(this.Vr={I:this},0);C.AutoAction._Init.call(this.Vs={I:this},0);C.AutoAction.
_Init.call(this.AaW={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALV;var B;this.H(Ro);this.Text.R(A.aaR(A.acf.Tw));this.Y.H(Lu);this.Y.JP(1);this.
RM.H(Ah2);this.RM.Ar(true);this.RM.Aj(true);this.RM.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajm),P8,AH2));this.Tt.H(UZ);this.Tt.Ar(true);this.Tt.Aj(true
);this.Tt.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajm),P8,AH3));this.
Tu.H(Aaj);this.Tu.Ar(true);this.Tu.Aj(true);this.Tu.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajm),P8,AH4));this.Tv.H(Alj);this.Tv.Ar(true);this.Tv.Aj(
true);this.Tv.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajm),P8,AH5));this.
AdN.H(Aym);this.AdN.Aj(true);this.AdN.T(A.aaR(A.acf.A_R));this.Vr.Index=1;this.Vs.
Index=2;this.AaW.Index=3;this.Ay.H(Is);this.J(this.Y,0);this.J(this.RM,0);this.J(
this.Tt,0);this.J(this.Tu,0);this.J(this.Tv,0);this.J(this.AdN,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fj];this.RM.WD(A.aaL(A.fl.Hu));this.RM.WE(A.aaL(A.fl.Hu
));this.RM.As([B=this.XQ,B.B7,B.B8]);this.RM.CI(this.XQ);this.Tt.WD(A.aaL(A.fl.Hu
));this.Tt.WE(A.aaL(A.fl.Hu));this.Tt.As([B=this.Vr,B.B7,B.B8]);this.Tt.CI(this.
Vr);this.Tu.WD(A.aaL(A.fl.Hu));this.Tu.WE(A.aaL(A.fl.Hu));this.Tu.As([B=this.Vs,
B.B7,B.B8]);this.Tu.CI(this.Vs);this.Tv.WD(A.aaL(A.fl.Hu));this.Tv.WE(A.aaL(A.fl.
Hu));this.Tv.As([B=this.AaW,B.B7,B.B8]);this.Tv.CI(this.AaW);this.AdN.AR=[this,this.
BAz];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done();this.
RM._Done();this.Tt._Done();this.Tu._Done();this.Tv._Done();this.AdN._Done();this.
XQ._Done();this.Vr._Done();this.Vs._Done();this.AaW._Done();this.Ay._Done();C.Fq.
_Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit();this.
RM._ReInit();this.Tt._ReInit();this.Tu._ReInit();this.Tv._ReInit();this.AdN._ReInit(
);this.XQ._ReInit();this.Vr._ReInit();this.Vs._ReInit();this.AaW._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tw));this.RM.T(A._GetAutoObject(A.Device.Helper
).Nk(A.aaR(A.acf.Ajm),P8,AH2));this.Tt.T(A._GetAutoObject(A.Device.Helper).Nk(A.
aaR(A.acf.Ajm),P8,AH3));this.Tu.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.
Ajm),P8,AH4));this.Tv.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajm),P8
,AH5));this.AdN.T(A.aaR(A.acf.A_R));},_Mark:function(D){var B;C.Fq._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cn={Cb:
A.abi(16,0,null),Dn:function(){return 16;},C4:function(aIndex){if(aIndex>=16)return-
1;return this.Cb.Get(aIndex);},DU:function(A8){var O=0;while(O<16){if(this.Cb.Get(
O)===A8)return O;O=O+1;}return-1;},HK:function(){var O=0;var max=-1;while(O<16){
if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cb=[]).__proto__=C.Cn.Cb;this.__proto__=C.Cn;
},_className:"Application::ArraySelection"};C.AutoAction={Ia:null,Ac8:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Atw],this.Ac8,0);A.pe([this,this.
Atw],this);},Dn:function(){return this.Ia.NP();},C4:function(aIndex){if(aIndex>=
this.Dn())return-1;return this.Ia.OC(aIndex);},F$:function(aIndex){return this.ActionToString.
BH(this.C4(aIndex));},DU:function(A8){var O=0;while(O<this.Dn()){if(this.Ia.OC(O
)===A8)return O;O=O+1;}return-1;},HK:function(){var O=0;var max=-1;while(O<this.
Dn()){if(this.Ia.OC(O)>max)max=this.Ia.OC(O);O=O+1;}return max;},Atw:function(G){
this.Q=this.Ac8.OC(this.Index);A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ia=A._GetAutoObject(C.AuN);this.Ac8=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL0={Att:0,Init:function(aArg
){var B;A.zX([this,this.Bd_],[B=A._GetAutoObject(A.Device.Device),B.A76,B.BaE],0
);A.zX([this,this.Bd7],[B=A._GetAutoObject(A.Device.Device),B.ASb,B.AZX],0);A.pe([
this,this.Bd_],this);A.pe([this,this.Bd7],this);},Clear:function(){C.Vw.Clear.call(
this);this.Att=0;},Cg:function(){A._GetAutoObject(A.Device.Device).ArG(this.Att);
A._GetAutoObject(A.Device.Device).ArH(this.toString());},Bd_:function(G){this.Att=
A._GetAutoObject(A.Device.Device).Pi;A.we(this,0);},Bd7:function(G){this.EU(A._GetAutoObject(
A.Device.Device).AuA);A.we(this,0);},NU:function(ED){if((this.Att&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUo:function(
ED){this.Att=this.Att|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vw._Init.
call(this,aArg);this.__proto__=C.AL0;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pi={_Init:function(){C.AL0._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL1={Vu:null,Ay:null,Y:null,JM:null,CP:function(
){this.AiN(this);},Init:function(aArg){A.zV([this,this.AiN],this.Vu,0);A.pe([this
,this.AiN],this);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.Ev];this.Bx.Cl=[
this,this.A2Z];this.Bx.Cm=[this,this.A3s];this.Bx.C6(A.aaL(A.ach.Arf));this.Bx.Ct(
A.aaL(A.ach.Aq_));this.Bx.CY(A.aaL(A.ach.V3));}return this.Bx;},Ev:function(G){if(
this.Byl()>0){this.AA4();this.XF(this);}else A._GetAutoObject(A.Device.Device).A7(
28,true,A.jV,0,null);},AiN:function(G){this.Ao6();var O;for(O=0;O<this.Vu.NP();O=
O+1){var Aar=A._GetAutoObject(C.Pi).OC(O);this.A05(Aar);}this.J(this.JM,0);A.aaS([
this,this.MO],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]
);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var
B;this.Y.Vx(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.
AV,true,null,null);},A05:function(G_){var Ay5=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sg,0);Aa.T(Ay5.BH(G_));Aa.Aj(true);Aa.G4=G_;Aa.A9R(this.
Vu.NU(G_));this.J(Aa,0);this.ZI(Aa);},Ao6:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HP(
AdK);}},AA4:function(){var B;this.Vu.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var Aa=(C.Sg.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vu.J(Aa.G4);if(Aa.ASn())this.Vu.AUo(Aa.G4);}else A.ab5(
"%s",Ayn);}X=X.Ah;}this.Vu.Cg();},Byl:function(){var B;var A3X=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var
Aa=(C.Sg.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASn())A3X=A3X+1;}else A.ab5("%s"
,Ayn);}X=X.Ah;}return A3X;},A2Z:function(G){var B;var Aa=(C.Sg.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAk=(C.Sg.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAk){this.
AhB(AAk,Aa);A.pe([this,this.MO],this);}}},A3s:function(G){var B;var Aa=(C.Sg.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAQ=(C.Sg.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAQ
){this.AhB(Aa,AAQ);A.pe([this,this.MO],this);}}},AqM:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiN],this);},_Init:function(
aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au3._Init.call(this.JM={I:this},0);this.__proto__=C.AL1;
this.H(Ro);this.Text.R(A.aaR(A.acf.AEa));this.Ay.H(Is);this.Y.H(Lu);this.Y.JP(1);
this.JM.H(AH6);this.JM.Aj(true);this.JM.T(A.aaR(A.acf.AqM));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JM,0);this.Y.El=[this,this.Fj];this.JM.AR=[this,this.AqM
];this.Vu=A._GetAutoObject(C.Pi);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Ay._Done();this.Y._Done();this.JM._Done();C.Fq._Done.call(this);},_ReInit:
function(){C.Fq._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JM._ReInit(
);this.Text.R(A.aaR(A.acf.AEa));this.JM.T(A.aaR(A.acf.AqM));this.CP();},_Mark:function(
D){var B;C.Fq._Mark.call(this,D);if((B=this.Vu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sg={G4:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hl(10);},Bl:function(aSize){C.Ua.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.Ua.Ai.call(this,Ae);var Hd=((Ae&0x10
)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.Ad$;var GW=A.jb.
Bm;if(this.Hj){FS=A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.L(FS);this.V.L(A.
jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GW);
}this.LI=Hd;this.KE=Fu;this.Qp=GE;},IY:function(G){this.A3q(this);},A3q:function(
G){this.AEW(!this.AmD);},A9R:function(E){this.AEW(E);},ASn:function(){return this.
AmD;},_Init:function(aArg){C.Ua._Init.call(this,aArg);this.__proto__=C.Sg;this.Ml.
H(AXD);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vw={CB:0,
Ia:A.abi(17,0,null),OC:function(HA){return this.Ia.Get(HA);},NP:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ia.Set(O,0);this.CB=0;},J:function(
ED){if(this.CB>=17)A.ab5("%s",AH7);else{this.Ia.Set(this.CB,ED);this.CB=this.CB+
1;}},Cg:function(){},EU:function(AcX){var AJf=AcX.indexOf(String.fromCharCode(0x2C
),0);var A1r=A.jV;var O=0;this.CB=0;while(O<17)if(AcX===A.jV){this.Ia.Set(O,0);O++;
}else{if(AJf===-1){A1r=AcX;AcX=A.jV;}else{A1r=A.abV(AcX,AJf);AcX=A.ab1(AcX,0,AJf+
1);}var Aar=A.abZ(A1r,0,10)|0;if(this.ADP(Aar)){this.Ia.Set(this.CB,Aar);this.CB=
this.CB+1;O++;}AJf=AcX.indexOf(String.fromCharCode(0x2C),0);}if(AcX!==A.jV)A.ab5(
"%s",AXE);},toString:function(){var A2E=(((B=this.Ia.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CB;O=O+1)A2E=(A2E+AH8)+(((B=this.Ia.Get(O))<0)?B+
0x100000000:B).toFixed();return A2E;},Axt:function(HA,ED){if(HA>=this.CB){A.ab5(
"%s",((((AXF+HA.toFixed())+AXG)+this.CB.toFixed())+AXH)+AXI);return;}this.Ia.Set(
HA,ED);},Contains:function(ED){var O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===
ED)return true;return false;},ADP:function(ED){return true;},DU:function(ED){var
O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.Ia=[]).__proto__=C.Vw.Ia;this.__proto__=C.Vw;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AMI={Init:function(aArg){var B;A.zX([this,this.Bej
],[B=A._GetAutoObject(A.Device.Device),B.A8f,B.BaM],0);A.pe([this,this.Bej],this
);},Cg:function(){A._GetAutoObject(A.Device.Device).Aky(this.toString());},ADP:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bej:function(G){this.EU(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vw._Init.call(this,aArg);this.
__proto__=C.AMI;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AMI._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wl={Vt:null,Ku:null,A63:A.jV,Action:0,A4z:
false,A_D:false,A$j:false,Bl:function(aSize){C.Fm.Bl.call(this,aSize);this.QZ.H(
this.Mp.M);this.OB.H(this.QZ.M);},Ai:function(Ae){C.Fm.Ai.call(this,Ae);if(!this.
LI){this.Ku.TY.L(A.jb.Am5);this.Ku.QH.Z(true);this.Ku.QH.L(A.jb.AQR);}else if(this.
Qp){this.Ku.TY.L(A.jb.Bm);this.Ku.QH.Z(false);}else if(this.KE){this.Ku.TY.L(A.jb.
Bm);this.Ku.QH.Z(false);}else{this.Ku.TY.L(A.jb.Text);this.Ku.QH.Z(true);this.Ku.
QH.L(A.jb.CS);}},Blj:function(E){if(this.Action===E)return;this.Action=E;},Bmr:function(
E){if(this.A63===E)return;this.A63=E;this.Vt.Text.R(E);},ATs:function(E){if(this.
A$j===E)return;this.A$j=E;this.Ku.Bnc(!this.Ku.AUN);},AFw:function(E){if(this.A_D===
E)return;this.A_D=E;this.Ku.Z(!this.Ku.Fo());},A9i:function(E){if(this.A4z===E)return;
this.A4z=E;this.Vt.Z(E);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Vt._Init.
call(this.Vt={I:this},0);C.Ku._Init.call(this.Ku={I:this},0);this.__proto__=C.Wl;
this.H(AXJ);this.Background.H(AXK);this.G8.Ar(false);this.G8.Z(false);this.Vt.H(
AXL);this.Vt.Z(false);this.Ku.H(AXM);this.Ku.Z(false);this.J(this.Vt,0);this.J(this.
Ku,0);this.Mp.Aw(A.aaL(A.ach.ANd));},_Done:function(){this.__proto__=C.Fm;this.Vt.
_Done();this.Ku._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Vt._ReInit();this.Ku._ReInit();},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Vt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ku)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vt={AK:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AK.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AK={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vt;this.AK.H(AXN);this.AK.L(A.
jb.Bi6);this.H(AXO);this.Text.H(AXP);this.Text.L(A.jb.Text);this.BU.H(AXQ);this.
BU.Ng(1);this.BU.L(A.jb.Text);this.J(this.AK,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AK._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AK._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Ku={QH:null,TY:null,AUN:false,Bnc:function(E){if(this.
AUN===E)return;this.AUN=E;if(E){this.TY.Aw(A.aaL(A.ach.ACt));this.QH.Aw(A.aaL(A.
ach.ACt));}else{this.TY.Aw(A.aaL(A.ach.AqG));this.QH.Aw(A.aaL(A.ach.AqG));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QH={I:this
},0);A.acg.Ap._Init.call(this.TY={I:this},0);this.__proto__=C.Ku;this.H(Ayo);this.
QH.H(Ayo);this.QH.Cw(1);this.TY.H(Ayo);this.TY.Cw(0);this.J(this.QH,0);this.J(this.
TY,0);this.QH.Aw(A.aaL(A.ach.AqG));this.TY.Aw(A.aaL(A.ach.AqG));},_Done:function(
){this.__proto__=A.Core.P;this.QH._Done();this.TY._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QH._ReInit();this.TY._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARR={Gg:null,Ca:null,Do:null,Dh:null,Kp:null,Zp:10,Aq7:0,AEk:0,AR5:0,Ay4:false
,LV:false,Bcm:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).An.Lg())A._GetAutoObject(A.Device.Device).A7(41,true,A._GetAutoObject(A.Device.
Device).An.HJ().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aql(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAy],this.
C$.Q,0);A.zX([this,this.BAk],this.Do.Q,0);A.zX([this,this.ABn],this.Dh.Q,0);A.zX([
this,this.ABn],this.Dh.HH.Q,0);A.zX([this,this.ABn],[this,this.ASu,this.AFu],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9a,B.Bbc],0);A.zX([this
,this.BeT],this.Ca.Q,0);A.pe([this,this.AAy],this);A.pe([this,this.GH],this);A.pe([
this,this.ABn],this);A.pe([this,this.BeT],this);},CD:function(G){if(!this.Ay4){this.
Ay4=true;A.pe([this,this.AcU],this);}else C.H0.CD.call(this,G);},Age:function(G){
this.AR5=this.Zp;this.Bcu(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.EX();A._GetAutoObject(C.A$).Fy();},Auh:function(){this.N.CV(A.jV);this.N.C6(
A.aaL(A.ach.ADz));this.N.Cm=[this,this.AyO];},AAt:function(G){A._GetAutoObject(C.
A$).Cf(55);},AFu:function(E){if(this.Zp===E)return;this.Zp=E;A.abo([this,this.ASu
,this.AFu],0);},Bcu:function(G){var F;if(!this.Zp||(this.Bcm===true)){A._GetAutoObject(
A.Device.Device).A7(24,false,CQ,0,null);if(this.AEk===1)A._GetAutoObject(A.Device.
Device).A7(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A7(23,
true,this.AEk.toFixed(),2000,null);this.Ev(this);return;}this.Gg.Gr();this.Gg.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gg.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gg.Q3(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gg.JQ(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gg.Nd(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gg.PQ(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gg.SI(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alu=A._GetAutoObject(
A.Device.Helper).A1l(this.Gg,(F=this.Dh.H1.Hs,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alu)this.Ai4();else{A._GetAutoObject(A.Device.Helper).AKf(
this.Gg,Alu,(F=this.Dh.H1.Hs,F[1].call(F[0])),this.Zp-1,[this,this.ApJ]);A._GetAutoObject(
A.Device.Device).A7(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am7())this.C9.Z(true);else this.C9.Z(false);if(this.LV){this.Do.
Z(false);this.Ca.T(A.aaR(A.acf.ACA));this.Ca.AEY(A.aaL(A.ach.Afc));}else{this.Do.
Z(true);this.Ca.T(A.aaR(A.acf.Ak8));this.Ca.AEY(null);}if((this.Y.BiE(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JE(this.Y.TO(this.AV,0x1));this.Am();
},ASZ:function(E){if(this.Aq7===E)return;this.Aq7=E;A.abo([this,this.A8r,this.ASZ
],0);},ABn:function(G){var F;var AJ2=(F=this.Dh.Q,F[1].call(F[0]));var AAb=-1;switch((
F=this.Dh.H1.Hs,F[1].call(F[0]))){case 0:AAb=AJ2+((F=A._GetAutoObject(A.Device.Helper
).Bc2(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zp-1));break;case 1:AAb=(AJ2+this.
Zp)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HH.AC.Q){case 0:AAb=(AJ2+
this.Zp)-1;break;case 1:AAb=(AJ2-this.Zp)+1;break;default:throw new Error(AXR+this.
Dh.HH.AC.Q.toFixed());}break;default:throw new Error(AXS+this.Dh.HH.AC.Q.toFixed(
));}this.ASZ(AAb);},BAk:function(G){A.pe([this,this.GH],this);A.pe([this,this.At2
],this);},AAy:function(G){A._GetAutoObject(A.Device.Helper).AVj(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LV);A.pe([this,this.ABn],this);},ApJ:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.ApD();else switch((F=this.Dh.H1.Hs,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JE(this.Dh);break;case 0:this.JE(this.Do
);break;case 1:this.JE(this.Ca);break;default:throw new Error(Ayp+(F=this.Dh.H1.
Hs,F[1].call(F[0])).toFixed());}break;case 25:this.JE(this.Ca);break;case 47:if(
At.PopupState===7)this.ApD();else{this.JE(this.Dh);this.JE(this.Ca);}break;case 43:{
this.JE(this.Dh);this.JE(this.Do);}break;case 42:{this.JE(this.Dh);this.JE(this.
Ca);}break;case 41:break;default:A.ab5("%s%e",As9,At.Id);}},Ai4:function(){this.
Gg.Cg(A._GetAutoObject(A.Device.Device).An);this.AEk=this.AEk+1;if(A._GetAutoObject(
A.Device.Helper).Am7()){if(A._GetAutoObject(A.Device.Device).Bt.Lg()){A._GetAutoObject(
A.Device.Device).A7(24,false,U0,0,null);A._GetAutoObject(A.Device.Device).A7(50,
true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),0,null);}else{var L7=A.
_GetAutoObject(A.Device.Device).An.LT(0,this.Gg.Id);A._GetAutoObject(A.Device.Device
).SP(L7);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Gg.
Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gg.DateOfBirth);B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApD();},ApD:function(){var B;var F,CA;if(!!(F=this.Ca.
Q,F[1].call(F[0]))){(F=this.Ca.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LV)(
CA=this.Do.Q,CA[2].call(CA[0],(F=this.Ca.Q,F[1].call(F[0]))));}if(!this.LV)(CA=this.
Do.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$z(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Do.Q,F[1].call(
F[0])),this.Do.AjR(),this.Do.AjT())));var IV=null;switch((F=this.Dh.H1.Hs,F[1].call(
F[0]))){case 3:IV=[B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyF];break;case 2:
IV=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyG];break;case 4:case 5:IV=[B=A.
_GetAutoObject(A.Device.Device),B.Anu,B.AoE];break;default:;}if(!!IV){switch((F=
this.Dh.Kk.VS,F[1].call(F[0]))){case 1:IV[2].call(IV[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IV[1].call(IV[0])));
}var XM=100-((this.Zp/this.AR5)*100);A._GetAutoObject(A.Device.Device).A7(24,true
,(((this.AR5.toFixed()+As_)+(XM|0).toFixed())+As_)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAu]);this.AFu(this.Zp-1);A.aaS([this,this.Bcu],null);},BAu:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bcm=true;},ApK:function(G){var F;C.H0.ApK.call(this,G);var AoZ=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoZ=A._GetAutoObject(A.Device.
Device).AdR;break;case 1:AoZ=730;break;default:A.ab5("%s%e",Alg,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q3(A._GetAutoObject(A.Device.
Helper).Dq()-A._GetAutoObject(A.Device.Helper).AmJ(AoZ));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnZ));switch(this.BZ.AC.Q){case 0:{this.Kp.I$(A.aaR(A.acf.AM_));this.
Kp.IO(A.aaR(A.acf.AM$));}break;case 1:{this.Kp.I$(A.aaR(A.acf.Bhs));this.Kp.IO(A.
aaR(A.acf.Bht));}break;case 2:{this.Kp.I$(A.aaR(A.acf.Bjs));this.Kp.IO(A.aaR(A.acf.
Bjt));}break;default:throw new Error(Alg);}},Ae2:function(E){if(this.LV===E)return;
this.LV=E;A.abo([this,this.Awe,this.Ae2],0);},At2:function(G){var F,CA,S$;this.Ae2(((
F=this.Ca.Q,F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S$=this.Ca.
Q,S$[1].call(S$[0])));A.pe([this,this.GH],this);},BeT:function(G){A.pe([this,this.
At2],this);},ASu:function(){return this.Zp;},A8r:function(){return this.Aq7;},Awe:
function(){return this.LV;},_Init:function(aArg){C.H0._Init.call(this,aArg);C.AvY.
_Init.call(this.Ca={I:this},0);C.Q$._Init.call(this.Do={I:this},0);C.AGB._Init.call(
this.Dh={I:this},0);C.AUA._Init.call(this.Kp={I:this},0);this.__proto__=C.ARR;var
B;this.Dr(C.ADb);this.Ca.H(Aou);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak8));this.
Ca.ArP(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asx));this.Ca.ArQ(A.
aaR(A.acf.Akq));this.Do.H(AXT);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ug));this.
Do.Ar5(false);this.Dh.H(AXU);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6Q));this.Dh.
By(0);this.Kp.H(AXV);this.Kp.Aj(true);this.Kp.T(A.aaR(A.acf.A7X));this.Kp.Gc(1);
this.Kp.EV(500);this.Kp.IO(A.aaR(A.acf.AM$));this.Kp.I$(A.aaR(A.acf.AM_));this.Kp.
A9I(A.aaR(A.acf.Aq7)+A.aaR(A.acf.Colon));this.J(this.Ca,0);this.J(this.Do,0);this.
J(this.Dh,0);this.J(this.Kp,0);this.Gg=A._NewObject(A.Device.Animal,0);this.Ca.AR=[
this,this.AcU];this.Ca.LY([this,this.AcU]);this.Ca.L1(A.aaL(A.ach.Afc));this.Ca.
As([B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.PQ]);this.Ca.OL([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Ca.PO([B=A._GetAutoObject(A.Device.Device),B.Uj
,B.U3]);this.Ca.Uk([B=A._GetAutoObject(A.Device.Device),B.Anr,B.AoD]);this.Ca.Ae2([
this,this.Awe,this.Ae2]);this.Do.Gs([this,this.D_,this.GQ]);this.Do.LY([this,this.
AcU]);this.Do.L1(A.aaL(A.ach.Afc));this.Do.Um([B=this.Gender.Animal,B.Wx,B.JQ]);
this.Do.OL([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.Do.PO([B=A._GetAutoObject(
A.Device.Device),B.Uj,B.U3]);this.Do.Uk([B=A._GetAutoObject(A.Device.Device),B.Anr
,B.AoD]);this.Do.As([B=A._GetAutoObject(A.Device.Helper).W,B.Anv,B.Nd]);this.Do.
Anx([B=this.AnimalType.Animal,B.PN,B.EB]);this.Dh.Gs([this,this.D_,this.GQ]);this.
Dh.LY([B=this.Dh,B.FV]);this.Dh.L1(A.aaL(A.ach.Edit));this.Dh.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ArE,B.SI]);this.Dh.A9j(A._GetAutoObject(A.Device.Helper).W);
this.Kp.As([this,this.ASu,this.AFu]);this.Kp.BlP([this,this.A8r,this.ASZ]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H0;this.Ca._Done();this.Do._Done(
);this.Dh._Done();this.Kp._Done();C.H0._Done.call(this);},_ReInit:function(){C.H0.
_ReInit.call(this);this.Ca._ReInit();this.Do._ReInit();this.Dh._ReInit();this.Kp.
_ReInit();this.Ca.T(A.aaR(A.acf.Ak8));this.Ca.ArP(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asx));this.Ca.ArQ(A.aaR(A.acf.Akq));this.Do.T(A.aaR(A.acf.
Ug));this.Dh.T(A.aaR(A.acf.A6Q));this.Kp.T(A.aaR(A.acf.A7X));this.Kp.IO(A.aaR(A.
acf.AM$));this.Kp.I$(A.aaR(A.acf.AM_));this.Kp.A9I(A.aaR(A.acf.Aq7)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H0._Mark.call(this,D);if((B=this.Gg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AT4={BW:null,RatingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cm=null;this.Bx.Cl=null;this.Bx.CC=[this,this.XF];this.Bx.CV(A.jV
);this.Bx.Ct(null);this.Bx.CY(A.aaL(A.ach.V3));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AT4;var B;this.
H(Ro);this.BW.H(As7);this.BW.T(A.aaR(A.acf.A$r));this.J(this.BW,0);this.BW.As([B=
this.RatingMode,B.B7,B.B8]);this.BW.CI(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$r));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bft],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ9],0);A.pe([this,this.Bft],this
);},Dn:function(){return 2;},F$:function(aIndex){return this.RatingModeToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw0(E);},Bft:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cn;this.RatingModeToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANs={WR:
function(G){C.Amv.WR.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq2()){
A._GetAutoObject(A.Device.Helper).W.AkF(false);A._GetAutoObject(A.Device.Helper).
W.Cg(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amv._Init.call(
this,aArg);this.__proto__=C.ANs;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hg={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hg;},_className:"Application::BaseItem"
};C.AVy={BW:null,WeightRecordingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cm=null;this.Bx.Cl=null;this.Bx.CC=[this,this.XF];this.Bx.CV(A.jV
);this.Bx.Ct(null);this.Bx.CY(A.aaL(A.ach.V3));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVy;var B;this.H(Ro);this.BW.H(As7);this.BW.T(A.aaR(A.acf.AsU));this.BW.EV(1);
this.J(this.BW,0);this.BW.As([B=this.WeightRecordingMode,B.B7,B.B8]);this.BW.CI(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsU));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dn:function(){return 2;},F$:function(aIndex){return this.
WeightRecordingModeToString.BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this
,E);A._GetAutoObject(A.Device.Device).Axa(E);},Init:function(aArg){var B;A.zX([this
,this.Bgz],[B=A._GetAutoObject(A.Device.Device),B.A8$,B.Bbb],0);A.pe([this,this.
Bgz],this);},Bgz:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cb.Set(0,0);this.Cb.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightRecordingModeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa5={BooleanToAutoOnOff:null,F$:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BH(aIndex);},_Init:function(aArg){C.Gf._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa5;},_Done:function(
){this.__proto__=C.Gf;this.BooleanToAutoOnOff._Done();C.Gf._Done.call(this);},_ReInit:
function(){C.Gf._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gf._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxR={A64:function(){var B;this.
Axu(1);this.Js(0,3);this.VF(0,0,(B=this.M)[3]-B[1]);this.A4C(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4C(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VN(0);},_Init:
function(aArg){C.ABz._Init.call(this,aArg);this.__proto__=C.AxR;},_className:"Application::Triangle"
};C.ATF={Y:null,Init:function(aArg){this.BxI(this);},BxH:function(P_){var Aa=A._NewObject(
C.ANz,0);Aa.H(BF);Aa.T(P_);Aa.Aj(true);Aa.Ar(false);Aa.Bh(true);this.J(Aa,0);this.
Atv(this);},Atv:function(G){var B;var AlC=1;var A2v=0;var X=this.Y.Ah;var Cy=null;
var K5=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OU.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALa=(B=Cy.V.B6.A6I(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Mn.isPrototypeOf(X)?X:null))ALa=ALa+20;if(A2v<ALa)A2v=ALa;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlC*28)));AlC=AlC+1;}else{K5=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K5){var Dg=((B=this.M)[3]-B[1])-((AlC-1)*28);K5.DM([this.
M[0],K5.Es[1]]);K5.DM([K5.Es[0],Dg]);K5.DC([this.M[0]+120,K5.EC[1]]);K5.DC([K5.EC[
0],Dg]);}}X=X.Ah;}this.BBb(A2v,28);},BBb:function(aWidth,BwQ){var B;var X=this.Y.
Ah;var Cy=null;var K5=null;aWidth=aWidth+20;if(aWidth>(C.Asy[0]-10))aWidth=C.Asy[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OU.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hl(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BwQ));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K5=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K5){K5.DM([this.M[
2]-aWidth,K5.Es[1]]);K5.DC([this.M[2],K5.EC[1]]);}}X=X.Ah;}},BxI:function(G){var
Aa=A._GetAutoObject(C.BS).AqR;while(!!Aa){if(!!(C.Axh.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axh.isPrototypeOf(Aa)?Aa:null);this.BxG(EF.DK,EF.AR,EF.Bw,EF.AQZ);}else
if(!!(C.Axj.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axj.isPrototypeOf(Aa)?Aa:null);
this.BxN(EF.DK,EF.AR,EF.Bw,EF.Ww,EF.WT);}else if(!!(C.ZD.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZD.isPrototypeOf(Aa)?Aa:null);this.BxF(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkL.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkL.isPrototypeOf(Aa)?Aa:null);this.
BxH(EF.DK);}else if(!!(C.AF4.isPrototypeOf(Aa)?Aa:null))this.BxO();Aa=Aa.Mu;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.Atv],this);},BxF:function(P_,Ac3,Ah8){var Aa=A._NewObject(
C.Mn,0);Aa.H(BF);Aa.T(P_);Aa.AR=Ac3;Aa.Aj(true);Aa.Ar(Ah8);Aa.Bh(true);this.J(Aa
,0);this.Atv(this);},BxO:function(){var K5=A._NewObject(A.acg.C5,0);K5.L(A.jb.Bm
);K5.Aj(true);K5.Ng(3);this.J(K5,0);this.Atv(this);},BxG:function(P_,Ac3,Ah8,A0H
){var Aa=A._NewObject(C.AmH,0);Aa.H(BF);Aa.T(P_);Aa.AR=Ac3;Aa.Aj(true);Aa.Ar(Ah8
);Aa.Bh(true);Aa.As(A0H);this.J(Aa,0);this.Atv(this);},BxN:function(P_,Ac3,Ah8,A2M
,Ago){var Aa=A._NewObject(C.ANy,0);Aa.H(BF);Aa.T(P_);Aa.AR=Ac3;Aa.Aj(true);Aa.Ar(
Ah8);Aa.Bh(true);Aa.BmP(A2M);Aa.AFI(Ago);this.J(Aa,0);this.Atv(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATF;this.H(Ro);this.Y.H(Ro);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afh={_Init:
function(){A.acl.Afh._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_z={AqR:null,Ahj:null,NC:function(P_){var EF=A._NewObject(
C.AkL,0);EF.DK=P_;this.J(EF);},Clear:function(){this.AqR=null;this.Ahj=null;},FX:
function(){var K5=A._NewObject(C.AF4,0);this.J(K5);},J:function(BbN){if(!this.AqR
){this.AqR=BbN;this.Ahj=this.AqR;}else{this.Ahj.Mu=BbN;this.Ahj=this.Ahj.Mu;}},Qy:
function(P_,Ac3){var EF=A._NewObject(C.ZD,0);EF.DK=P_;EF.AR=Ac3;this.J(EF);},BgI:
function(P_,Ac3,A0H){var EF=A._NewObject(C.Axh,0);EF.DK=P_;EF.AR=Ac3;EF.AQZ=A0H;
this.J(EF);},XS:function(P_){var EF=A._NewObject(C.ZD,0);EF.DK=P_;EF.Bw=false;this.
J(EF);},ABD:function(P_,Ac3,A2M,Ago){var EF=A._NewObject(C.Axj,0);EF.DK=P_;EF.AR=
Ac3;EF.Ww=A2M;EF.WT=Ago;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_z;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A_z._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axi={Mu:null,_Init:function(aArg){this.__proto__=
C.Axi;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOx={Amt:null,ArI:function(E){if(this.Amt===
E)return;if(!!this.Ab)this.Ab.ZI(this);if(!!this.Amt)this.AqI(this.Amt,A._GetAutoObject(
C.AsC),null,null,null,null,false);this.Amt=E;if(!!this.Amt)this.AkP(this.Amt,A._GetAutoObject(
C.AsC),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOx;this.H(BF);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amt)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WH={_Init:function(){C.AOx._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C1=A._NewObject(C.ATG,0);C1.H(this.M);this.AkP(C1,A.
_GetAutoObject(C.AnX),null,A._GetAutoObject(C.AnX),A._GetAutoObject(C.AnX),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Ro);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsC={_Init:function(){C.AUC._Init.call(this,0);this.ACy=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATG={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.ATG;this.H(AH9);this.Ds(0);this.AK.AZ(0x3F);this.AK.H(AH9);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUB={Sc:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Ael.Sc.call(this
))?B:null);if(!Ao)throw new Error(As4);Ao.Cq.Cx=255;Ao.Cq.B2=0;return Ao;},Sb:function(
){var B;var Ao=(A.acl.Axg.isPrototypeOf(B=A.acl.Ael.Sb.call(this))?B:null);if(!Ao
)throw new Error(As4);Ao.E3.Cx=0;Ao.E3.B2=255;Ao.Dv=true;return Ao;},_Init:function(
aArg){A.acl.Ael._Init.call(this,aArg);this.__proto__=C.AUB;},_className:"Application::ShadeOverlayTransition"
};C.AnX={_Init:function(){C.AUB._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkX={AnZ:0,A1S:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iq.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCl=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Alb(BCl)+CQ)+A._GetAutoObject(A.acj.DV).Af2()
);else this.BT.R(A.aaR(A.acf.Akq));}},J$:function(G){var B;var Bgw=(this.A1S===false
)&&(this.AM<=this.Gq);if(Bgw)this.By(this.AnZ);this.A4h(this.AM,4);if(Bgw){this.
By(this.AM-this.Aj8);this.A1S=true;}C.Iq.J$.call(this,G);},J6:function(G){this.A4h(
this.AM,5);C.Iq.J6.call(this,G);},By:function(E){this.A4h(E,4);E=(((E+((this.Aj8
/2)|0))/this.Aj8)|0)*this.Aj8;if(!E)this.A1S=false;C.Iq.By.call(this,E);},Ahr:function(
E){if(this.AnZ===E)return;this.AnZ=E;},A4h:function(Bwy,GA){this.AS2(A._GetAutoObject(
A.acj.DV).Bc6(Bwy,GA));},_Init:function(aArg){C.Iq._Init.call(this,aArg);this.__proto__=
C.AkX;this.H(J0);this.AnZ=this.Gq;this.JV(this.H4,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDL={None:0,Left:1,BEm:2,Right:3};C.Amx={Xr:
null,FB:null,Ej:null,Background:null,Anj:null,Ge:null,KM:A.jV,AD5:null,Init:function(
aArg){var B;A.zV([this,this.Af_],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3t],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.
LO],this);A.pe([this,this.A3t],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},KR:function(){if(!this.Bx)this.Bx=A._NewObject(
C.N,0);return this.Bx;},E6:function(G){C.OverlayMenu.E6.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xr);},CD:function(G){C.OverlayMenu.CD.call(this,G);this.
AKL();},Al4:function(G){var Aa=(C.AB6.isPrototypeOf(G)?G:null);var Hq;if(!!Aa)Hq=
Aa.Hq;else Hq=this.Ge.FK();if(Hq>=A._GetAutoObject(A.Device.Device).An.B$())return;
A._GetAutoObject(A.Device.Helper).G6(Hq);A.pe([this,this.XF],this);},AKL:function(
){},Af_:function(G){this.Am();},A3k:function(G){if(this.Ge.FK()<(A._GetAutoObject(
A.Device.Device).An.B$()-1))this.Ge.GS(this.Ge.FK()+1);},A3l:function(G){if(this.
Ge.FK()>0)this.Ge.GS(this.Ge.FK()-1);},DJ:function(G){var Gi=A._GetAutoObject(A.
Device.Device).An.B$();var MR=this.Bx;if(!MR)return;MR.CY(A.aaL(A.ach.Aey));MR.CC=[
this,this.XF];if(Gi<=0){MR.Ct(null);MR.C6(null);MR.Cl=null;MR.Cm=null;MR.ZG=false;
MR.ZH=false;}else if(Gi===1){MR.Ct(null);MR.C6(A.aaL(A.ach.Aez));MR.Cl=null;MR.Cm=[
this,this.Al4];MR.ZG=false;MR.ZH=false;}else{MR.Ct(A.aaL(A.ach.Aq_));MR.C6(A.aaL(
A.ach.Arf));MR.Cl=[this,this.A3k];MR.Cm=[this,this.A3l];MR.ZG=true;MR.ZH=true;}}
,LO:function(G){this.BfT(this);this.Xr=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKL();},BmH:function(E){if(this.AD5===E)return;this.AD5=E;A.pe([this,this.BAh
],this);},BAh:function(G){this.BfT(this);},BfT:function(G){var B;if(!!this.FB)this.
HP(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(this.AD5,0))?B:null);if(!
!this.FB){this.FB.H(AXW);this.J(this.FB,0);}},A3t:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Ge.Dz(A.aaR(A.acf.ARZ));else this.Ge.Dz(this.KM);},Dz:function(E){if(this.
KM===E)return;this.KM=E;A.pe([this,this.A3t],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Anj={I:this},0);C.Ge._Init.call(
this.Ge={I:this},0);this.__proto__=C.Amx;this.H(Ro);this.Ej.H(BF);this.Ej.A9L(A.
jb.CS);this.Ej.A9M(A.jb.Text);this.Background.H(Fe);this.Background.L(A.jb.Bog);
this.Anj.H(AH_);this.Anj.L(A.jb.CS);this.Ge.H(AH_);this.Ge.NZ(C.AB6);this.AD5=C.
APC;this.KM=A.aaR(A.acf.Av2);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Anj,0);this.J(this.Ge,0);this.Ej.AR=[this,this.Al4];this.Ej.Ab7(A._NewObject(
C.Yy,0));this.Ge.Zw(A._GetAutoObject(A.Device.Device).An);this.Ge.Zy([this,this.
Al4]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Anj._Done();this.Ge._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Anj._ReInit();this.Ge._ReInit();this.Dz(A.aaR(A.acf.Av2
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xr)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.AB6={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EB(this.AX.AmW(
Ad,14));this.DS.AE0(this.AX.I4(Ad,13));this.DS.Ae1(this.AX.H3(Ad,8));this.DS.Uo(
this.AX.H3(Ad,11));this.DS.Ae5(this.AX.H3(Ad,12));this.DS.Ae7(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.AB6;this.
H(O2);this.AP.L(A.jb.Bc);this.DS.H(AXX);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yy={Q:null,Init:function(aArg){var
B;this.AAY(this);this.As([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEG:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Ni(FilterCriterion
);var Ai8=this.Akt();if(Ai8>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai8,false);Filter.CW(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeX(false);},BvY:function(s){this.AEG(
s);},AAY:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Ni(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BGd:function(s){
this.AAY(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,this.
AcW],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwI(-1);return;}var Ay0=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!Ay0){this.AW.AwI(0);this.AW.AeX(true);}else
this.AW.AwI(Ay0.A4);},AcW:function(s){this.C2(s);},_Init:function(aArg){C.AjW._Init.
call(this,aArg);this.__proto__=C.Yy;this.AW.AwI(0);this.AW.Di=[this,this.BvY];this.
Init(aArg);},_Mark:function(D){var B;C.AjW._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqL={BirthType:null,EaseOfDelivery:null,Ca:null,Ef:null,AbM:null,G5:null,Co:
null,AbK:null,AMS:false,Init:function(aArg){this.AMS=A._GetAutoObject(A.Device.Helper
).W.Ari();if(this.AMS)this.AeW(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeW(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Ca.
LY([this,this.AcU]);this.Ca.L1(A.aaL(A.ach.Afc));this.Ca.AR=[this,this.AcU];}this.
Ef.Ar5(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Ca.Q,0);A.pe([this,this.GH],this);},Age:function(G
){if(((this.Ef.Asm===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQ3(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A7(21,true,A._GetAutoObject(A.Device.Converter).Rh(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cg(
A._GetAutoObject(A.Device.Device).An);if(this.KI>0){if(this.AMS){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LT(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.EU(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AXY,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cg(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fy();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.EU(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A$).Fy();},Auh:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.Am4));this.N.Cm=[this,this.AyO];},AAt:function(
G){A._GetAutoObject(C.A$).Cf(32);},GH:function(G){var F;var Ka=(F=this.Ef.Q,F[1].
call(F[0]));var ABk=(F=this.Ca.Q,F[1].call(F[0]));var A4c=true;if(!!Ka&&(ABk===Ka
))A4c=false;A._GetAutoObject(A.Device.Helper).JW(this.Ca,A4c);this.Ef.BlH(!A4c);
},_Init:function(aArg){C.H0._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvY._Init.
call(this.Ca={I:this},0);C.Q$._Init.call(this.Ef={I:this},0);C.Acr._Init.call(this.
AbM={I:this},0);C.BW._Init.call(this.G5={I:this},0);C.SQ._Init.call(this.Co={I:this
},0);C.BW._Init.call(this.AbK={I:this},0);this.__proto__=C.AqL;var B;this.Ca.H(Ah1
);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak8));this.Ca.ArP(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asx));this.Ca.ArQ(A.aaR(A.acf.Akq));this.Ef.H(Ah1);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ug));this.AbM.H(AXZ);this.AbM.Aj(true);this.
AbM.T(A.aaR(A.acf.GM));this.G5.H(Ah1);this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Art
));this.Co.H(Ah1);this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aee));this.Co.AFz(true);
this.AbK.H(Ah1);this.AbK.Aj(true);this.AbK.T(A.aaR(A.acf.AgH));this.J(this.Ca,-1
);this.J(this.Ef,-1);this.J(this.AbM,-1);this.J(this.G5,-1);this.J(this.Co,-1);this.
J(this.AbK,-1);this.BirthType.LZ(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LZ(A._GetAutoObject(A.Device.Helper).W);this.Ca.As([B=A._GetAutoObject(A.Device.
Helper).W,B.ArD,B.PQ]);this.Ef.Gs([this,this.D_,this.GQ]);this.Ef.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anv,B.Nd]);this.AbM.Gs([this,this.D_,this.GQ]);this.AbM.As([
B=A._GetAutoObject(A.Device.Helper).W,B.ArE,B.SI]);this.G5.As([B=this.BirthType,
B.B7,B.B8]);this.G5.CI(this.BirthType);this.Co.Gs([this,this.D_,this.GQ]);this.Co.
LY([B=this.Co,B.FV]);this.Co.L1(A.aaL(A.ach.Edit));this.Co.Ab$([B=A._GetAutoObject(
A.Device.Helper).W,B.Av_,B.Q3]);this.AbK.As([B=this.EaseOfDelivery,B.B7,B.B8]);this.
AbK.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H0;this.BirthType._Done();this.EaseOfDelivery._Done();this.Ca._Done();this.Ef._Done(
);this.AbM._Done();this.G5._Done();this.Co._Done();this.AbK._Done();C.H0._Done.call(
this);},_ReInit:function(){C.H0._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Ca._ReInit();this.Ef._ReInit();this.AbM._ReInit();
this.G5._ReInit();this.Co._ReInit();this.AbK._ReInit();this.Ca.T(A.aaR(A.acf.Ak8
));this.Ca.ArP(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asx));this.
Ca.ArQ(A.aaR(A.acf.Akq));this.Ef.T(A.aaR(A.acf.Ug));this.AbM.T(A.aaR(A.acf.GM));
this.G5.T(A.aaR(A.acf.Art));this.Co.T(A.aaR(A.acf.Aee));this.AbK.T(A.aaR(A.acf.AgH
));},_Mark:function(D){var B;C.H0._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbK
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acr={FI:null,AW:null,A9:0,IY:function(G){C.Du.IY.call(this,G);if(!this.A9)this.
FV(this);else this.Hc(this);},Ai:function(Ae){C.Du.Ai.call(this,Ae);this.Hx.Z(false
);this.H4.Z(false);if(this.A9===1){this.Bb(this.AW);if(this.Hj){this.AW.FM(A.jb.
CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FM(A.jb.CS);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hj)this.AW.FM(A.jb.CK);
else this.AW.FM(A.jb.CS);this.Bb(null);}},By:function(E){var F;var BQ=this.AM;C.
Du.By.call(this,E);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uh,this.BaP],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:this.FI.AkT((F=
this.N,F[1].call(F[0])));}},FV:function(G){this.Ew(1);},Hc:function(G){this.Ew(0
);},Ew:function(EN){var F;if(!this.A9)this.FI.AjD((F=this.N,F[1].call(F[0])));this.
A9=EN;if(this.A9<0)this.A9=0;else if(this.A9>1)this.A9=1;if(this.A9===1)this.AW.
SO(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Du._Init.call(this,aArg);
C.AQX._Init.call(this.AW={I:this},0);this.__proto__=C.Acr;this.H(UX);this.EV(999999
);this.V.R(As$);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H4.Z(false);this.AW.H(AX0
);this.AW.AS_(6);this.J(this.AW,0);this.AW.As([this,this.Uh,this.BaP]);this.FI=A.
_NewObject(C.Aes,0);},_Done:function(){this.__proto__=C.Du;this.AW._Done();C.Du.
_Done.call(this);},_ReInit:function(){C.Du._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dn:function(){return 4;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuF={Y:null,QN:null,NV:null,Ee:null,PD:null,PA:null,PB:null,Ay:null,Gf:null,
ReasonOfLeaving:null,Ahz:null,M2:0,AmL:false,AB_:true,AOq:false,Asi:false,Init:function(
aArg){A.zX([this,this.A9g],[this,this.A8J,this.ATb],0);this.Aho(A._GetAutoObject(
A.Device.Helper).W.AhU(2));this.ReasonOfLeaving.As(this.ReasonOfLeaving.DU(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9g],this);},DE:function(G){
var B;var Fh=0;var X=this.AV;switch(this.Cr.CO){case 6:Fh=2;break;case 7:Fh=7;break;
case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QF(X,Fh,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G
){A._GetAutoObject(C.A$).Fy();},ApO:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(A.
Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dq());B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmL){A._GetAutoObject(A.Device.Helper).W.Ae3(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6K(A._GetAutoObject(A.Device.Helper).Dq(),this.Asi);}A._GetAutoObject(A.Device.
Helper).W.AFy(this.ReasonOfLeaving.C4((F=this.NV.Q,F[1].call(F[0]))));if(this.AB_
)A._GetAutoObject(A.Device.Helper).W.PQ(0);if(this.Asi)A._GetAutoObject(A.Device.
Helper).W.AwK(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);this.A_9();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Aho:function(E){
if(this.M2===E)return;this.M2=E;},Ans:function(){return this.M2;},BeV:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A$).Fy();A._GetAutoObject(A.Device.Helper
).Ass();}},A9g:function(G){switch(this.Asi){case false:this.Ee.T(A.aaR(A.acf.AVA
));break;case true:this.Ee.T(A.aaR(A.acf.Bqj));break;default:;}},ATb:function(E){
if(this.Asi===E)return;this.Asi=E;},A8J:function(){return this.Asi;},A_9:function(
){A._GetAutoObject(A.Device.Device).A7(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeV]);},Bl7:function(E){if(this.AOq===E)return;
this.AOq=E;},Bks:function(){return this.AOq;},Blu:function(E){if(this.AB_===E)return;
this.AB_=E;},Bkg:function(){return this.AB_;},BlF:function(E){if(this.AmL===E)return;
this.AmL=E;},Bko:function(){return this.AmL;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afl._Init.call(this.QN={I:this
},0);C.AsB._Init.call(this.NV={I:this},0);C.AkX._Init.call(this.Ee={I:this},0);C.
Afl._Init.call(this.PD={I:this},0);C.Afl._Init.call(this.PA={I:this},0);C.Afl._Init.
call(this.PB={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gf._Init.call(this.
Gf={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahz._Init.call(this.Ahz={I:this},0);this.__proto__=C.AuF;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dr(C.II);this.Y.H(Fe);this.Y.JP(1);this.QN.H(
Aaj);this.QN.Aj(true);this.QN.T(A.aaR(A.acf.AmL));this.QN.Bh(true);this.QN.ZB(false
);this.QN.Gc(-1);this.QN.EV(1);this.NV.H(UZ);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bh(true);this.NV.ZB(false);this.Ee.H(Ah0);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVA));this.Ee.Bh(false);this.Ee.Gc(1000);this.Ee.
EV(999000);this.PD.H(UZ);this.PD.Aj(true);this.PD.T(A.aaR(A.acf.A4P));this.PD.Bh(
true);this.PD.ZB(false);this.PD.By(1);this.PD.Gc(-1);this.PD.EV(1);this.PA.H(Aaj
);this.PA.Aj(true);this.PA.T(A.aaR(A.acf.A4Q));this.PA.Bh(true);this.PA.ZB(false
);this.PA.By(1);this.PA.Gc(-1);this.PA.EV(1);this.PB.H(UZ);this.PB.Aj(true);this.
PB.T(A.aaR(A.acf.A5q));this.PB.Bh(true);this.PB.ZB(false);this.PB.By(1);this.PB.
Gc(-1);this.PB.EV(1);this.Ay.H(Ayh);this.Gf.As(0);this.J(this.Y,0);this.J(this.QN
,0);this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PD,0);this.J(this.PA,0);this.
J(this.PB,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.E5));this.Y.El=[this,this.Fj
];this.QN.As([B=this.Gf,B.B7,B.B8]);this.QN.CI(this.Gf);this.QN.AkG([this,this.Bko
,this.BlF]);this.NV.Gs([this,this.D_,this.GQ]);this.NV.LY([B=this.NV,B.FV]);this.
NV.L1(A.aaL(A.ach.Edit));this.NV.As([B=this.ReasonOfLeaving,B.B7,B.B8]);this.NV.
CI(this.ReasonOfLeaving);this.NV.Anz(this.Ahz);this.Ee.As([this,this.Ans,this.Aho
]);this.PD.As([B=this.Gf,B.B7,B.B8]);this.PD.CI(this.Gf);this.PD.AkG([this,this.
Bks,this.Bl7]);this.PA.As([B=this.Gf,B.B7,B.B8]);this.PA.CI(this.Gf);this.PA.AkG([
this,this.A8J,this.ATb]);this.PB.As([B=this.Gf,B.B7,B.B8]);this.PB.CI(this.Gf);this.
PB.AkG([this,this.Bkg,this.Blu]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QN._Done();this.NV._Done();this.Ee._Done();this.PD._Done(
);this.PA._Done();this.PB._Done();this.Ay._Done();this.Gf._Done();this.ReasonOfLeaving.
_Done();this.Ahz._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QN._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PD._ReInit();this.PA._ReInit();this.PB._ReInit();this.Ay._ReInit();this.Gf.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahz._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QN.T(A.aaR(A.acf.AmL));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVA));this.PD.T(A.aaR(A.acf.A4P));this.PA.T(A.aaR(A.acf.A4Q
));this.PB.T(A.aaR(A.acf.A5q));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahz)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUA={AjP:null,Pt:null,Au4:AX1,Bl:function(aSize){C.Iq.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hx.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H4.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Iq.Ai.call(this,Ae);this.Pt.L(this.V.AQ);if(!!this.AjP){if((
F=this.AjP,F[1].call(F[0]))===-1)this.Pt.R(this.Au4+AH$);else this.Pt.R((this.Au4+
CQ)+(F=this.AjP,F[1].call(F[0])).toFixed());}else this.Pt.R(this.Au4);},A24:function(
G){this.Am();},BlP:function(E){if(A.aaZ(this.AjP,E))return;if(!!this.AjP)A.z$([this
,this.A24],this.AjP,0);this.AjP=E;if(!!E)A.zX([this,this.A24],E,0);if(!!E)A.pe([
this,this.A24],this);},A9I:function(E){if(this.Au4===E)return;this.Au4=E;this.Am(
);},_Init:function(aArg){C.Iq._Init.call(this,aArg);C.CH._Init.call(this.Pt={I:this
},0);this.__proto__=C.AUA;this.H(AX2);this.V.H(AX3);this.V.A6(0x12);this.Pt.H(AX4
);this.Pt.A6(0x12);this.Pt.L(A.jb.Bm);this.J(this.Pt,0);this.Pt.S(A.aaL(A.fl.Af)
);this.Pt.A2(A.aaL(A.fl.Ak));this.Pt.Cv(null);},_Done:function(){this.__proto__=
C.Iq;this.Pt._Done();C.Iq._Done.call(this);},_ReInit:function(){C.Iq._ReInit.call(
this);this.Pt._ReInit();this.Pt.S(A.aaL(A.fl.Af));this.Pt.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iq._Mark.call(this,D);if((B=this.AjP)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AL$={Y:null,JL:null,St:null,Ay:null,Aqz:2500,ANp:24,DE:function(G){var B;var
Fh=0;var X=this.AV;switch(this.Cr.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:
Fh=4;break;case 5:Fh=5;break;default:;}X=this.QF(X,Fh,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G){A._GetAutoObject(
C.A$).Fy();},ApO:function(G){},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Bly:function(
E){if(this.Aqz===E)return;this.Aqz=E;},Bki:function(){return this.Aqz;},Blz:function(
E){if(this.ANp===E)return;this.ANp=E;},Bkj:function(){return this.ANp;},Bj9:function(
G){var F,CA;this.JL.BT.L(this.JL.V.AQ);if(!!this.JL.Q)this.JL.BT.R((((String.fromCharCode(((
F=this.JL.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+AfA)+String.fromCharCode(((
CA=this.JL.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JL.
AG3);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iq._Init.call(this.JL={I:this},0);C.Iq._Init.call(this.St={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AL$;this.N.Z(true);this.
Dr(C.II);this.Y.H(Fe);this.Y.JP(1);this.JL.H(Ah0);this.JL.Aj(true);this.JL.T(A.aaR(
A.acf.Aqz));this.JL.Bh(false);this.JL.Gc(0);this.JL.EV(5000);this.JL.IO(A.aaR(A.
acf.Af6));this.JL.I$(A.aaR(A.acf.Af6));this.JL.AS2(100);this.St.H(UZ);this.St.Aj(
true);this.St.T(A.aaR(A.acf.A_I));this.St.Bh(true);this.St.By(24);this.St.Gc(10);
this.St.EV(33);this.St.IO(AX5);this.Ay.H(Ayh);this.J(this.Y,0);this.J(this.JL,0);
this.J(this.St,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.V3));this.Y.El=[this,this.
Fj];this.JL.As([this,this.Bki,this.Bly]);this.JL.A_f([this,this.Bj9]);this.St.As([
this,this.Bkj,this.Blz]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JL._Done();this.St._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JL._ReInit();this.St._ReInit();this.
Ay._ReInit();this.JL.T(A.aaR(A.acf.Aqz));this.JL.IO(A.aaR(A.acf.Af6));this.JL.I$(
A.aaR(A.acf.Af6));this.St.T(A.aaR(A.acf.A_I));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arv={EaseOfDelivery:null,BirthType:null,Ca:null,Do:null,Dh:null,Co:null,Ee:null
,G5:null,Lh:null,M2:0,LV:false,Init:function(aArg){A.zX([this,this.GH],this.Ca.Q
,0);A.zX([this,this.GH],this.Do.Q,0);A.zX([this,this.AAy],this.C$.Q,0);A.zX([this
,this.Ber],this.Co.Dj,0);A.zX([this,this.Bel],this.C9.Q,0);A.zX([this,this.At2],
this.Ca.Q,0);A.zX([this,this.At2],this.Do.Q,0);A.pe([this,this.AAy],this);A.pe([
this,this.GH],this);A.pe([this,this.Ber],this);A.pe([this,this.Bel],this);A.pe([
this,this.At2],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.EX();A.
_GetAutoObject(C.A$).Fy();},Age:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhF
){var AlO=A._GetAutoObject(A.Device.Helper).AhF.AOO();A._GetAutoObject(A.Device.
Helper).W.Ab8(AlO);A._GetAutoObject(A.Device.Helper).W.AnE(AlO);}var Alu=A._GetAutoObject(
A.Device.Helper).A1l(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.H1.Hs,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alu){this.Ai4();A.pe([this,this.
Bwk],this);}else A._GetAutoObject(A.Device.Helper).AKf(A._GetAutoObject(A.Device.
Helper).W,Alu,(F=this.Dh.H1.Hs,F[1].call(F[0])),0,[this,this.ApJ]);},Auh:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.ADK));this.N.Cm=[this,this.AyO];},Ai4:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);var L7=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SP(L7);var Bdk=false;if(A._GetAutoObject(
A.Device.Helper).Am7()){if(A._GetAutoObject(A.Device.Device).Bt.Lg()){Bdk=true;A.
_GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(A.Device.Device).Bt.
HJ().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A6_()&&(Bdk===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}}var IV=null;switch((F=this.
Dh.H1.Hs,F[1].call(F[0]))){case 3:IV=[B=A._GetAutoObject(A.Device.Device),B.Awb,
B.AyF];break;case 2:IV=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyG];break;case
4:case 5:IV=[B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoE];break;default:;}if(
!!IV)switch((F=this.Dh.Kk.VS,F[1].call(F[0]))){case 1:IV[2].call(IV[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$z(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Do.Q,F[1].call(F[0])),this.Do.AjR(),this.Do.AjT());},Ap8:function(G){A.
_GetAutoObject(C.A$).Fy();},Bwk:function(s){this.Ap8(s);},AAt:function(G){A._GetAutoObject(
C.A$).Cf(49);},Aho:function(E){if(this.M2===E)return;this.M2=E;A.abo([this,this.
Ans,this.Aho],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am7())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A6_())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LV){this.Do.Z(false);this.Ca.T(A.aaR(A.
acf.ACA));this.Ca.AEY(A.aaL(A.ach.Afc));}else{this.Do.Z(true);this.Ca.T(A.aaR(A.
acf.Ak8));this.Ca.AEY(null);}},AAy:function(G){A._GetAutoObject(A.Device.Helper).
AVj(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LV);},Ber:function(G){A.pe([this,this.Bgk],this);},Bel:function(G){A.pe([this
,this.Bgk],this);},Bgk:function(G){var F,CA,S$;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahr(A._GetAutoObject(A.Device.Helper
).AhU(A._GetAutoObject(A.Device.Helper).Abt((F=this.BZ.Q,F[1].call(F[0]))),(CA=this.
Co.Dj,CA[1].call(CA[0])),2,(S$=this.BZ.Q,S$[1].call(S$[0]))));break;case 2:this.
Ee.Ahr(A._GetAutoObject(A.Device.Helper).AhU(this.KI,(F=this.Co.Dj,F[1].call(F[0
])),2,(CA=this.BZ.Q,CA[1].call(CA[0]))));break;default:;}},ApJ:function(G){var F;
var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id
){case 22:case 21:switch((F=this.Dh.H1.Hs,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JE(this.Dh);break;case 0:this.JE(this.Do);break;case 1:this.JE(this.
Ca);break;default:throw new Error(Ayp+(F=this.Dh.H1.Hs,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JE(this.Dh);this.JE(this.Do);}break;case 25:case 42:{this.
JE(this.Dh);this.JE(this.Ca);}break;case 41:break;default:A.ab5("%s%e",As9,At.Id
);}},ApK:function(G){var F;C.H0.ApK.call(this,G);var AoZ=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoZ=A._GetAutoObject(A.Device.Device).AdR;break;case
1:AoZ=730;break;default:A.ab5("%s%e",Alg,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Co.Dj,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dq()-A._GetAutoObject(A.Device.
Helper).AmJ(AoZ)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnZ));this.Ee.Ahr(A._GetAutoObject(
A.Device.Helper).W.AhU(1));},Ae2:function(E){if(this.LV===E)return;this.LV=E;A.abo([
this,this.Awe,this.Ae2],0);},At2:function(G){var F,CA,S$;this.Ae2(((F=this.Ca.Q,
F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S$=this.Ca.Q,S$[1].call(
S$[0])));A.pe([this,this.GH],this);},Ans:function(){return this.M2;},Awe:function(
){return this.LV;},_Init:function(aArg){C.H0._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvY._Init.call(this.Ca={I:this},0);C.Q$._Init.call(this.Do={I:this}
,0);C.AGB._Init.call(this.Dh={I:this},0);C.SQ._Init.call(this.Co={I:this},0);C.AkX.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G5={I:this},0);C.BW._Init.call(
this.Lh={I:this},0);this.__proto__=C.Arv;var B;this.Dr(C.ADa);this.CG.H(AcT);this.
Ca.H(Aou);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak8));this.Ca.ArP(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asx));this.Ca.ArQ(A.aaR(A.acf.Akq));this.
Do.H(Aou);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ug));this.Do.Ar5(false);this.Dh.
H(AX6);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GM));this.Dh.By(0);this.Co.H(AcT);
this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aee));this.Co.AFz(true);this.Ee.H(AcT);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.Gc(1000);this.Ee.EV(999000);this.
G5.H(AcT);this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Art));this.Lh.H(AcT);this.Lh.Aj(
true);this.Lh.T(A.aaR(A.acf.AgH));this.J(this.Ca,-3);this.J(this.Do,-3);this.J(this.
Dh,-3);this.J(this.Co,-3);this.J(this.Ee,-2);this.J(this.G5,-1);this.J(this.Lh,-
1);this.EaseOfDelivery.LZ(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LZ(
A._GetAutoObject(A.Device.Helper).W);this.Ca.AR=[this,this.AcU];this.Ca.LY([this
,this.AcU]);this.Ca.L1(A.aaL(A.ach.Afc));this.Ca.As([B=A._GetAutoObject(A.Device.
Helper).W,B.ArD,B.PQ]);this.Ca.OL([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2
]);this.Ca.PO([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.Ca.Uk([B=A._GetAutoObject(
A.Device.Device),B.Anr,B.AoD]);this.Ca.Ae2([this,this.Awe,this.Ae2]);this.Do.Gs([
this,this.D_,this.GQ]);this.Do.LY([this,this.AcU]);this.Do.L1(A.aaL(A.ach.Afc));
this.Do.Um([B=this.Gender.Animal,B.Wx,B.JQ]);this.Do.OL([B=A._GetAutoObject(A.Device.
Device),B.Ui,B.U2]);this.Do.PO([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);
this.Do.Uk([B=A._GetAutoObject(A.Device.Device),B.Anr,B.AoD]);this.Do.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anv,B.Nd]);this.Do.Anx([B=this.AnimalType.Animal,B.PN,B.EB]
);this.Dh.Gs([this,this.D_,this.GQ]);this.Dh.LY([B=this.Dh,B.FV]);this.Dh.L1(A.aaL(
A.ach.Edit));this.Dh.As([B=A._GetAutoObject(A.Device.Helper).W,B.ArE,B.SI]);this.
Dh.A9j(A._GetAutoObject(A.Device.Helper).W);this.Co.Gs([this,this.D_,this.GQ]);this.
Co.LY([B=this.Co,B.FV]);this.Co.L1(A.aaL(A.ach.Edit));this.Co.Ab$([B=A._GetAutoObject(
A.Device.Helper).W,B.Av_,B.Q3]);this.Ee.As([this,this.Ans,this.Aho]);this.G5.As([
B=this.BirthType,B.B7,B.B8]);this.G5.CI(this.BirthType);this.Lh.As([B=this.EaseOfDelivery
,B.B7,B.B8]);this.Lh.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H0;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ca._Done(
);this.Do._Done();this.Dh._Done();this.Co._Done();this.Ee._Done();this.G5._Done(
);this.Lh._Done();C.H0._Done.call(this);},_ReInit:function(){C.H0._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Ca._ReInit();this.
Do._ReInit();this.Dh._ReInit();this.Co._ReInit();this.Ee._ReInit();this.G5._ReInit(
);this.Lh._ReInit();this.Ca.T(A.aaR(A.acf.Ak8));this.Ca.ArP(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asx));this.Ca.ArQ(A.aaR(A.acf.Akq));this.Do.T(
A.aaR(A.acf.Ug));this.Dh.T(A.aaR(A.acf.GM));this.Co.T(A.aaR(A.acf.Aee));this.Ee.
T(A.aaR(A.acf.M2));this.G5.T(A.aaR(A.acf.Art));this.Lh.T(A.aaR(A.acf.AgH));},_Mark:
function(D){var B;C.H0._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AG$={H7:null,AhK:null,AgS:null,AhL:null,AgT:null,AnimalType:null,Background:
null,NX:null,Rj:null,V:null,TS:null,YF:null,AbH:null,PM:null,DK:A.jV,AGD:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An9();this.
AxS();},An9:function(){var F,CA;var LD=0;var Amh=0;var AlH=0;var Ib=0;if((((!!this.
AhK&&!!this.AhL)&&!!this.AgS)&&!!this.AgT)&&!!this.AnimalType){Amh=(F=this.AhK,F[
1].call(F[0]));AlH=(F=this.AgS,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper
).L9((F=this.AhL,F[1].call(F[0])),(CA=this.AgT,CA[1].call(CA[0])));Ib=(F=this.AnimalType
,F[1].call(F[0]));}var K7=A.jb.Text;var Ay8=A.jb.CS;if(!!LD){var ALt=A._GetAutoObject(
A.acj.DV).AlB(LD,Amh,AlH);Ay8=A._GetAutoObject(A.acj.DV).AzN(ALt,Ib);K7=A._GetAutoObject(
A.acj.DV).AzP(ALt,Ib);}this.Background.L(Ay8);this.TS.L(K7);this.Rj.L(K7);this.NX.
L(K7);this.AbH.L(K7);if(K7===A.jb.Bm)this.YF.L(K7);else this.YF.L(A.jb.CK);this.
V.L(K7);this.PM.L(K7);},AxS:function(){var F,CA;var LD=0;var Amh=0;var AlH=0;if(((
!!this.AhK&&!!this.AhL)&&!!this.AgS)&&!!this.AgT){Amh=(F=this.AhK,F[1].call(F[0]
));AlH=(F=this.AgS,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper).L9((F=this.
AhL,F[1].call(F[0])),(CA=this.AgT,CA[1].call(CA[0])));}if(!!LD){var ALt=A._GetAutoObject(
A.acj.DV).AlB(LD,Amh,AlH);this.Rj.R(A._GetAutoObject(A.Device.Converter).S7(ALt,
2,true));this.NX.Z(true);this.Rj.Z(true);this.PM.Z(false);}else{this.NX.Z(false);
this.Rj.Z(false);this.PM.Z(true);}this.TS.R(this.ByY(AlH-Amh,LD));this.AbH.Z(this.
AGD);this.YF.Z(this.AGD);this.NX.R(A._GetAutoObject(A.acj.DV).AaA());},ByY:function(
A02,Ah9){var B;if(Ah9<0){A.ab5("%s",AX7);return A.jV;}var Iu=(AX8+A._GetAutoObject(
A.acj.DV).Af2())+CQ;var FW=A._GetAutoObject(A.Device.Converter).Alb(A02);if(!A02
)FW=A.abU(FW,AX9,0);else if(A02>0)FW=A.abU(FW,AIa,0);Iu=this.BfB(Iu,AX_,FW);if(Ah9===
1)Iu=Iu+A.aaR(A.acf.Bi2);else{Iu=Iu+A.aaR(A.acf.Bi3);Iu=this.BfB(Iu,AX$,Ah9.toFixed(
));}return Iu;},BfB:function(aString,BbR,Bxl){if(aString===A.jV){A.ab5("%s",AYa);
return A.jV;}var A2K=aString.indexOf(BbR,0);if(A2K>=0){aString=A.ab1(aString,A2K
,BbR.length);aString=A.abU(aString,Bxl,A2K);}return aString;},ATq:function(E){if(
A.aaZ(this.AhK,E))return;if(!!this.AhK)A.z$([this,this.C2],this.AhK,0);this.AhK=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlM:function(
E){if(A.aaZ(this.AgS,E))return;if(!!this.AgS)A.z$([this,this.C2],this.AgS,0);this.
AgS=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATr:function(
E){if(A.aaZ(this.AhL,E))return;if(!!this.AhL)A.z$([this,this.C2],this.AhL,0);this.
AhL=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlN:function(
E){if(A.aaZ(this.AgT,E))return;if(!!this.AgT)A.z$([this,this.C2],this.AgT,0);this.
AgT=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_e:function(
E){if(this.AGD===E)return;this.AGD=E;this.Am();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rj={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TS={I:this},0);A.acg.
Ap._Init.call(this.YF={I:this},0);A.acg.Ap._Init.call(this.AbH={I:this},0);C.CH.
_Init.call(this.PM={I:this},0);this.__proto__=C.AG$;this.H(AfC);this.Background.
AZ(0x3F);this.Background.H(AfC);this.NX.H(AYb);this.NX.R(A._GetAutoObject(A.acj.
DV).AaA());this.NX.A6(0x9);this.NX.L(A.jb.Text);this.Rj.H(AYc);this.Rj.A6(0x14);
this.Rj.R(A.aaR(A.acu.Ako));this.Rj.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYd);this.
V.R(A.aaR(A.acf.Auw));this.V.A6(0x12);this.V.L(A.jb.Text);this.TS.H(Aai);this.YF.
AZ(0x14);this.YF.H(AIb);this.YF.Cw(1);this.AbH.AZ(0x14);this.AbH.H(AIb);this.AbH.
Cw(0);this.PM.H(AYe);this.PM.R(A.aaR(A.acf.A4w));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rj,0);this.J(this.V,0);this.J(this.TS,0);this.J(this.YF
,0);this.J(this.AbH,0);this.J(this.PM,0);this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Cv(A.aaL(A.fl.Ik));this.Rj.S(A.aaL(A.fl.Aer));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.aaL(A.fl.Bi));this.TS.S(A.aaL(A.
fl.Af));this.TS.A2(A.aaL(A.fl.Ak));this.TS.Cv(A.aaL(A.fl.Bi));this.YF.Aw(A.aaL(A.
ach.ABK));this.AbH.Aw(A.aaL(A.ach.ABK));this.H7=A._NewObject(A.Device.Rating,0);
this.PM.S(A.aaL(A.fl.Af));this.PM.A2(A.aaL(A.fl.Ak));this.PM.Cv(A.aaL(A.fl.Bi));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rj._Done();this.V._Done();this.TS._Done();this.YF._Done();this.AbH._Done(
);this.PM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rj._ReInit();this.V.
_ReInit();this.TS._ReInit();this.YF._ReInit();this.AbH._ReInit();this.PM._ReInit(
);this.Rj.R(A.aaR(A.acu.Ako));this.V.R(A.aaR(A.acf.Auw));this.PM.R(A.aaR(A.acf.A4w
));this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.aaL(A.fl.Af));this.NX.Cv(A.aaL(A.fl.Ik
));this.Rj.S(A.aaL(A.fl.Aer));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cv(A.aaL(A.fl.Bi));this.TS.S(A.aaL(A.fl.Af));this.TS.A2(A.aaL(A.fl.Ak));this.
TS.Cv(A.aaL(A.fl.Bi));this.PM.S(A.aaL(A.fl.Af));this.PM.A2(A.aaL(A.fl.Ak));this.
PM.Cv(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhK)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgT)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVB={Animal:null,Rating:null,Cr:null,AD:null,AY:
0,Hk:function(G){var B;if(!this.Animal||!this.Rating)return;var Gh=this.AD.G4;var
Cz=(C.AG$.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PN,B.EB]);Cz.BlM([B=A._GetAutoObject(A.Device.Device),B.AEE,B.AIS]);Cz.BlN([B=
this.Rating,B.A8Z,B.OnSetTimestamp]);switch(Gh%this.AY){case 1:{Cz.ATq([B=this.Animal
,B.A8z,B.AFg]);Cz.ATr([B=this.Animal,B.A80,B.AFK]);Cz.T(A.aaR(A.acf.Auw));}break;
default:if(this.Animal.Ari()){Cz.ATq([B=this.Animal,B.ASl,B.AwF]);Cz.ATr([B=this.
Animal,B.ASC,B.Aw7]);Cz.T(A.aaR(A.acf.ALR));}else{Cz.ATq([B=this.Animal,B.ASl,B.
AwF]);Cz.ATr([B=this.Animal,B.ASC,B.Aw7]);Cz.T(A.aaR(A.acf.BgD));}}if(this.AY>1)
Cz.A_e(true);else Cz.A_e(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GN
]));},DE:function(G){if(this.AY>0)switch(this.Cr.CO){case 6:this.CC(this);break;
case 7:this.Cm(this);break;default:this.Cr.NH=true;}},LZ:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jw(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jw(1);else{this.Jw(2);this.AD.GS(1);this.
AD.HI(this.AD.Gt,true,null,null);}if(this.AY>0)this.AD.AbJ(0,this.AY-1);},AkH:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbJ(0,this.AY-1);
},CC:function(G){if(this.AD.Gt>0)this.AD.GS(this.AD.Gt-1);else this.AD.GS(this.AY-
1);this.AD.HI(this.AD.Gt,true,null,null);},Cm:function(G){if(this.AD.Gt<(this.AY-
1))this.AD.GS(this.AD.Gt+1);else this.AD.GS(0);this.AD.HI(this.AD.Gt,true,null,null
);},Jw:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jw(this.AY);A.abo([this
,this.ArA,this.Jw],0);},ArA:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVB;this.H(AfC);this.Cr.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfC);this.AD.NZ(C.AG$);this.AD.Ae6(160);this.AD.GS(0);this.
AD.Jw(2);this.J(this.AD,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,this.DE];this.
AD.Hk=[this,this.Hk];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Cp.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cp.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.CK;var GW=A.jb.Text;if(this.Hj){FS=
A.jb.CS;GW=A.jb.Text;}if(!Hd){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GW);}this.LI=Hd;
this.KE=Fu;this.Qp=GE;},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(J0);this.V.H(BF);this.ZB(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeP={KJ:null,GJ:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KJ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KJ.
L(this.V.AQ);},Init:function(aArg){},Ab7:function(E){if(this.GJ===E)return;this.
GJ=E;this.KJ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KJ={I:this},0);this.__proto__=C.AeP;this.H(J0);this.Background.H(J0);this.V.
H(Aah);this.V.R(Lv);this.KJ.H(IT);this.KJ.R(AYf);this.J(this.KJ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(null);this.KJ.S(A.aaL(A.fl.Af));this.
KJ.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KJ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KJ.S(A.aaL(
A.fl.Af));this.KJ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvY={ACc:null,Q:null,A1:null,AF:null,Ii:null,LV:null,Ap:null,EM:null,AN4:A.jV
,AN5:A.jV,Bl:function(aSize){C.AeP.Bl.call(this,aSize);if(!this.ACc)this.KJ.H([].
concat(0,this.KJ.M.slice(1,4)));else this.KJ.H([].concat(this.Ap.M[2],this.KJ.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S$;C.AeP.Ai.call(this,Ae);var Bci=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apk)this.Ab7(this.AN4);else
this.Ab7(this.AN5);}else{this.Ab7(A._GetAutoObject(A.Device.Converter).Rh((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ii&&!!this.A1)&&!!this.AF)&&!!this.LV)&&(((F=this.
Ii,F[1].call(F[0]))===1)||(!(CA=this.Ii,CA[1].call(CA[0]))&&(S$=this.LV,S$[1].call(
S$[0])))))Bci=true;}}this.EM.Z(Bci);this.Ap.L(this.V.AQ);A.pe([this,this.Aga],this
);},C2:function(G){this.Am();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AEY:function(E){if(this.ACc===E)return;this.ACc=E;this.
Ap.Aw(E);this.Bi9();},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaK],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaK],E,0);if(!!E)A.pe([
this,this.AaK],this);},PO:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaL],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaL],E,0);if(!!E)
A.pe([this,this.AaL],this);},AaL:function(G){this.Am();},AaK:function(G){this.Am(
);},Uk:function(E){if(A.aaZ(this.Ii,E))return;if(!!this.Ii)A.z$([this,this.Al2],
this.Ii,0);this.Ii=E;if(!!E)A.zX([this,this.Al2],E,0);if(!!E)A.pe([this,this.Al2
],this);},Al2:function(G){this.Am();},Aga:function(G){var F,CA;if((!this.Ii||!this.
A1)||!this.AF)return;var A2r=this.KJ.Aff([(this.KJ.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3L=this.KJ.Aff([this.KJ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABd=this.KJ.Db(0x0);this.EM.H([A2r[0]-
1,ABd[1],A3L[0]+1,ABd[3]]);},ArP:function(E){if(this.AN4===E)return;this.AN4=E;this.
Am();},ArQ:function(E){if(this.AN5===E)return;this.AN5=E;this.Am();},Ae2:function(
E){if(A.aaZ(this.LV,E))return;if(!!this.LV)A.z$([this,this.A2$],this.LV,0);this.
LV=E;if(!!E)A.zX([this,this.A2$],E,0);if(!!E)A.pe([this,this.A2$],this);},A2$:function(
G){this.Am();},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.AvY;
this.Ap.H(AhW);this.EM.H(AYg);this.EM.Ng(2);this.EM.L(A.jb.E4);this.J(this.Ap,0);
this.J(this.EM,0);this.KJ.Q4([this,this.Aga]);},_Done:function(){this.__proto__=
C.AeP;this.Ap._Done();this.EM._Done();C.AeP._Done.call(this);},_ReInit:function(
){C.AeP._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeP._Mark.call(this,D);if((B=this.ACc)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ii)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ih:0,AaJ:4,Bdv:true,Bdu:false,Bcp:true,Bdn:false,Al7:function(
G){C.Q_.Al7.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdm()){this.Ih=A._GetAutoObject(
A.Device.Helper).Uz.Id;var AiB=A._GetAutoObject(A.Device.Helper).AQ5(this.Ih);if(
AiB)A._GetAutoObject(A.Device.Device).A7(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A3d]);else{this.AaJ=A._GetAutoObject(A.Device.
Helper).AQ6(this.Ih);var BdS=false;if((this.AaJ===3)||(this.AaJ===2))BdS=A._GetAutoObject(
A.Device.Helper).A6$(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(BdS)A._GetAutoObject(
A.Device.Device).A7(21,true,A._GetAutoObject(A.Device.Converter).Rh(this.Ih),0,null
);else switch(this.AaJ){case 2:{var BO=A._GetAutoObject(A.Device.Converter).AxQ(
this.Ih);A._GetAutoObject(A.Device.Device).A7(46,true,BO.toFixed(),0,[this,this.
A3d]);}break;case 3:case 1:case 0:case 4:this.A31();break;default:throw new Error(
AIc+this.AaJ.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A$).Fy();},AIT:function(
s){this.Ev(s);},A31:function(){if((this.AaJ===3)||(this.AaJ===2)){if((this.Bcp&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ih)){A._GetAutoObject(A.Device.Device).A7(69,true,A.jV,0,[this
,this.A3d]);return;}else this.BBs();}A._GetAutoObject(A.Device.Helper).W.PQ(this.
Ih);this.Bdn=true;this.BBu();this.Ev(this);},A3d:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A31();break;case 107:switch(At.PopupState){case 7:{this.A31();A._GetAutoObject(A.
Device.Helper).Bn3(this.Ih);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(At.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AId,At.Id);}},BBs:
function(){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(this.Bdu&&(A._GetAutoObject(
A.Device.Converter).Z3(this.Ih)===10)){var Bb5=Math.trunc((this.Ih%1000000000000
)/10000000000);if(!Bb5&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((Bb5===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBu:function(){if(this.
Bdv){A._GetAutoObject(A.Device.Helper).W.SI(A._GetAutoObject(A.Device.Helper).A4O(
A._GetAutoObject(A.Device.Device).Ak7,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak7===1)A._GetAutoObject(A.Device.Helper).A$A();
}},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dr(C.II);this.Number.R(A.aaR(A.acf.OQ));this.Je.H(AYh);this.
IR.H(W6);this.AkJ(1);this.N.CC=[this,this.AIT];this.N.CY(A.aaL(A.ach.E5));},_ReInit:
function(){C.Q_._ReInit.call(this);this.Number.R(A.aaR(A.acf.OQ));},_className:"Application::SetTransponderScreen"
};C.ADm={Go:null,Ll:null,Kq:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Ll.R(A._GetAutoObject(A.acj.DV
).Af2());this.Kq.R(A._GetAutoObject(A.acj.DV).AaA());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.
call(this.Ll={I:this},0);A.acg.Text._Init.call(this.Kq={I:this},0);this.__proto__=
C.ADm;this.Background.L(A.jb.Text);this.Go.H(AYi);this.Go.A6(0x11);this.Go.R(A.aaR(
A.acf.Date));this.Go.L(A.jb.Bm);this.Ll.H(AYj);this.Ll.A6(0x11);this.Ll.L(A.jb.Bm
);this.Kq.H(AYk);this.Kq.L(A.jb.Bm);this.J(this.Go,0);this.J(this.Ll,0);this.J(this.
Kq,0);this.Go.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Go._Done();this.Ll.
_Done();this.Kq._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Go._ReInit();this.Ll._ReInit();this.Kq._ReInit();this.Go.R(A.aaR(
A.acf.Date));this.Go.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHd={Mj:null,Ho:null,H$:null,AP:null,A_:null,FW:0,Ib:0,AiQ:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ho.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Ho.M[2]-1,0,this.Ho.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiQ){this.H$.R(Rp);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S7(this.FW,2,true));this.H$.L(A._GetAutoObject(A.acj.DV).AzP(this.FW,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DV).AzN(this.FW,this.Ib));}this.Ho.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var AlE=this.AX.Hv(
Ad,6);var Ama=this.AX.CF(Ad,8);if(this.Hq>0){var Byw=this.AX.Hv(this.Hq-1,6);var
BA8=this.AX.CF(this.Hq-1,8);var LD=A._GetAutoObject(A.Device.Helper).L9(Byw,AlE);
if(!!LD){this.AiQ=false;this.FW=A._GetAutoObject(A.acj.DV).AlB(LD,BA8,Ama);}else{
this.AiQ=true;this.FW=0;}}else{this.AiQ=true;this.FW=0;}this.T(A._GetAutoObject(
A.acj.KK).ACP(AlE));this.Ho.R(A._GetAutoObject(A.Device.Converter).Alb(Ama));this.
Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Ho={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AHd;this.V.H(O3);this.Mj.H(Ata);this.Ho.H(AIe);this.Ho.A6(0x12);this.Ho.R(Rn);
this.Ho.L(A.jb.Text);this.H$.H(AIf);this.H$.R(Rn);this.H$.L(A.jb.Text);this.AP.H(
Aox);this.AP.L(A.jb.Bc);this.A_.H(Aoy);this.A_.L(A.jb.Bc);this.J(this.Mj,0);this.
J(this.Ho,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A_,0);this.Ho.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mj._Done();this.Ho._Done();this.H$._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mj._ReInit(
);this.Ho._ReInit();this.H$._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ho.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V1:null,AhR:null,SZ:null
,KM:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LD=
A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LD){var FW=A._GetAutoObject(
A.acj.DV).AlB(LD,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdM=A.aaR(A.acf.Bg0);AdM=A._GetAutoObject(
A.Device.Helper).Nk(AdM,P8,A._GetAutoObject(A.Device.Converter).S7(FW,2,true));AdM=
A._GetAutoObject(A.Device.Helper).Nk(AdM,Ax$,A._GetAutoObject(A.acj.DV).AaA());this.
SZ.R(AdM);this.AhR.L(A._GetAutoObject(A.acj.DV).AzN(FW,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SZ.L(A._GetAutoObject(A.acj.DV).AzP(FW,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SZ.R(A.aaR(A.acf.AVz));this.AhR.L(A.jb.
AQR);this.SZ.L(A.jb.Text);}},CD:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CW(HX);var Ac9=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac9.Initialize(8,2,0,true);Fw.CW(Ac9);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);this.Axw(this);},E6:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},Axw:function(G){this.Bg=A._NewObject(C.Ge,0);this.Bg.NZ(C.AHd);this.Bg.H(Ayk
);this.Bg.Zw(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dz(this.KM);this.J(this.
Bg,0);this.Bb(this.Bg);},Anq:function(G){A._GetAutoObject(C.A$).Fy();},Dz:function(
E){if(this.KM===E)return;this.KM=E;if(!!this.Bg)this.Bg.Dz(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADm._Init.call(this.V1={I:this},0);A.acg.AK._Init.
call(this.AhR={I:this},0);A.acg.Text._Init.call(this.SZ={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dr(C.II);this.V1.H(
P9);this.KM=A.aaR(A.acf.Akp);this.AhR.AZ(0x1D);this.AhR.H(IT);this.SZ.AZ(0x1D);this.
SZ.H(IT);this.SZ.A6(0x12);this.SZ.R(Rn);this.J(this.V1,0);this.J(this.AhR,0);this.
J(this.SZ,0);this.N.CC=[this,this.Anq];this.N.CY(A.aaL(A.ach.E5));this.SZ.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V1._Done();this.AhR._Done(
);this.SZ._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V1._ReInit();this.AhR._ReInit();this.SZ._ReInit();this.Dz(A.aaR(A.acf.Akp
));this.SZ.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SZ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mg={DP:null,AcC:null,ARu:11,EY:0,A4M:true,ABR:false,IY:function(G){if(A._GetAutoObject(
A.Device.Device).An.B$()>0)this.EW(4);else A._GetAutoObject(A.Device.Device).A7(
30,true,A.jV,0,null);},CD:function(G){if(this.DP.AzZ())this.DP.Ac8();else if((this.
EY===2)&&A._GetAutoObject(A.Device.Helper).W.Aq2())this.EW(5);else this.EW(1);},
E6:function(G){this.AK4();},Ev:function(G){this.EW(0);A._GetAutoObject(C.A$).Fy(
);},BBK:function(){A._GetAutoObject(A.Device.Device).AhJ();},AK4:function(){A._GetAutoObject(
A.Device.Device).An1();},A9m:function(E){if(this.ABR===E)return;this.ABR=E;A.abo([
this,this.Bkb,this.A9m],0);},EW:function(E){var B;if(this.EY===E)return;this.EY=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkS();A.zX([this,this.AKt]
,[B=A._GetAutoObject(A.Device.Helper),B.ArB,B.AkI],0);A.z$([this,this.AAq],[B=this.
DP,B.Q1,B.EW],0);this.BBK();}break;case 3:{A.z$([this,this.AKt],[B=A._GetAutoObject(
A.Device.Helper),B.ArB,B.AkI],0);this.AK4();this.BzG();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Ass();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4M)this.BBv();else this.BBy();}break;case 4:{A.z$([this,this.AKt],[B=A._GetAutoObject(
A.Device.Helper),B.ArB,B.AkI],0);this.AK4();A._GetAutoObject(A.Device.Helper).Ass(
);A.zX([this,this.BeC],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyK],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARu);}break;case 5:this.BfX();break;case
6:{A.zX([this,this.AAq],[B=this.DP,B.Q1,B.EW],0);this.DP.Ac8();}break;case 0:{A.
z$([this,this.AKt],[B=A._GetAutoObject(A.Device.Helper),B.ArB,B.AkI],0);this.AK4(
);}break;default:throw new Error(Ayq);}A.abo([this,this.Q1,this.Bv_],0);},Bv_:function(
Aq){this.EW(Aq);},AKt:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uz){if(
this.EY===1)this.EW(3);else A.ab5("%s%e",AYl,this.EY);}else A.ab5("%s",AIg);},BBv:
function(){A._GetAutoObject(A.Device.Device).A7(13,true,A._GetAutoObject(A.Device.
Helper).Ak9(A._GetAutoObject(A.Device.Helper).Uz.Id).toFixed(),0,[this,this.BzV]
);},BzV:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.Bct(false))A._GetAutoObject(
C.A$).Cf(31);else{A._GetAutoObject(A.Device.Helper).AkS();this.EW(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkS();this.EW(1);}},
Bct:function(Ai4){if(A._GetAutoObject(A.Device.Device).An.Lg()){A._GetAutoObject(
A.Device.Device).A7(41,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aql(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PQ(A._GetAutoObject(A.Device.Helper).Uz.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhF){var AlO=A._GetAutoObject(A.Device.Helper).AhF.AOO();A._GetAutoObject(
A.Device.Helper).W.Ab8(AlO);A._GetAutoObject(A.Device.Helper).W.AnE(AlO);}if(A._GetAutoObject(
A.Device.Helper).AQ6(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nd(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SI(A._GetAutoObject(A.Device.Helper).BgO(A._GetAutoObject(A.Device.
Device).Agx,A._GetAutoObject(A.Device.Helper).W));if(Ai4){A._GetAutoObject(A.Device.
Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);var L7=A._GetAutoObject(A.Device.
Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SP(L7);if(A._GetAutoObject(A.Device.Helper).Am7()){if(A._GetAutoObject(A.
Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abt(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agx)A._GetAutoObject(
A.Device.Helper).A$A();}return true;},BzG:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uz){var AJk=true;if(A._GetAutoObject(A.Device.Helper).Uz.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJk=A._GetAutoObject(A.Device.Helper).A7l(A._GetAutoObject(
A.Device.Helper).Uz.Id);if(!AJk&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bct(true);AJk=A._GetAutoObject(A.Device.Helper).A7l(A._GetAutoObject(A.
Device.Helper).Uz.Id);}}if(AJk)this.EW(5);else this.EW(2);}else{A.ab5("%s",AIg);
return;}},BeC:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARu){A.z$([this,this.BeC],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyK
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq2())this.EW(5);else this.EW(1);}},
BfX:function(){if(this.ABR===true)this.EW(6);else A._GetAutoObject(C.A$).Cf(24);
},BBy:function(){A._GetAutoObject(A.Device.Device).A7(36,true,A.jV,0,[this,this.
BAM]);},BAM:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkS();this.EW(1);}},AAq:function(G){if(!this.DP.EY)this.EW(1);},A23:function(G
){},Bwi:function(s){this.A23(s);},Bkb:function(){return this.ABR;},Q1:function(){
return this.EY;},_Init:function(aArg){C.Q_._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcC={I:this},0);this.__proto__=C.Mg;this.N.Z(true);this.Dr(C.Aq3);this.
Number.H(AYm);this.Number.R(A.aaR(A.acf.A_3));this.Je.H(AYn);this.IR.H(AYo);this.
AcC.H(AYp);this.AcC.R(AYq);this.AcC.L(A.jb.Text);this.J(this.AcC,0);this.N.CC=[this
,this.Ev];this.N.Cl=[this,this.Bwi];this.N.CY(A.aaL(A.ach.E5));this.Number.S(A.aaL(
A.fl.Af));this.AcC.S(A.aaL(A.fl.Hu));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Q_;this.AcC._Done();C.Q_._Done.call(this);},_ReInit:function(
){C.Q_._ReInit.call(this);this.AcC._ReInit();this.Number.R(A.aaR(A.acf.A_3));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q_._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4A={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apf:-1,EY:0,BxJ:function(){var BfC=false;
var Oh=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(A.
Device.Device).Bt.HJ().toFixed(),0,null);else if(Oh){BfC=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axs(B1,5);B1.OnSetAppearance(3);B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axs(B1
,5);B1.OnSetAppearance(1);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.EU(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(BfC)A._GetAutoObject(A.Device.Helper).W.Uo(false);if(Oh)A.
_GetAutoObject(A.Device.Helper).W.AnW(false);else A._GetAutoObject(A.Device.Helper
).W.AnW(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A7(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A7(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BxL:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A7(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A7(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qj:function(ED){switch(ED){case 4:this.BxJ();break;case
128:A._GetAutoObject(C.A$).Cf(7);break;case 16:A._GetAutoObject(C.A$).Cf(36);break;
case 1:A._GetAutoObject(C.A$).Cf(10);break;case 2:A._GetAutoObject(C.A$).Cf(11);
break;case 8:this.BxL();break;case 64:A._GetAutoObject(C.A$).Cf(29);break;case 32:
A._GetAutoObject(C.A$).Cf(48);break;case 256:A._GetAutoObject(C.A$).Cf(21);break;
case 512:A._GetAutoObject(C.A$).Cf(30);break;case 1024:this.BzD();break;case 262144:
this.BB0();break;case 2048:this.Ac8();break;case 4096:this.Bcl(false);break;case
8192:this.BxK();break;case 16384:this.BzC();break;case 32768:this.Bx_();break;case
524288:this.Bx$();break;case 65536:this.Byz();break;case 131072:this.BBm();break;
case 0:break;default:throw new Error(AYr);}},Bcv:function(ED,Bxe){var EP=A._NewObject(
C.Wl,0);EP.Ab6(false);EP.Aj(true);EP.AR=Bxe;EP.Blj(ED);switch(ED){case 1:{EP.T(A.
aaR(A.acf.An2));EP.DB(A.aaL(A.ach.ALH));}break;case 2:{EP.T(A.aaR(A.acf.A_M));EP.
DB(A.aaL(A.ach.ALI));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DB(A.aaL(A.ach.ALJ
));EP.AFw(true);}break;case 8:{EP.T(A.aaR(A.acf.Asf));EP.DB(A.aaL(A.ach.ALK));EP.
AFw(true);}break;case 16:{EP.T(A.aaR(A.acf.AMg));EP.DB(A.aaL(A.ach.ALL));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DB(A.aaL(A.ach.ALM));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DB(A.aaL(A.ach.ALN));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DB(A.aaL(A.ach.ALO));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DB(A._GetAutoObject(A.acj.DV).Bzc());}break;case 512:{EP.T(A.aaR(A.acf.ART));
EP.DB(A.aaL(A.ach.ALz));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DB(A.aaL(A.ach.ALA));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DB(A.aaL(A.ach.ALG));}break;case 2048:{EP.T(A.aaR(A.acf.Tw));EP.DB(A.aaL(A.ach.ALB
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DB(A.aaL(A.ach.ALC));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DB(A.aaL(A.ach.ALD));EP.AFw(true);}break;case
16384:{EP.T(A.aaR(A.acf.Bh5));EP.DB(A.aaL(A.ach.ALE));}break;case 131072:{EP.T(A.
aaR(A.acf.Bod));EP.DB(A.aaL(A.ach.ALF));}break;default:A.ab5("%s",(AYs+ED.toFixed(
))+AYt);}return EP;},ByM:function(){this.Apf=this.Apf+1;if(this.Apf>=this.AutoActions.
NP())this.EW(0);else this.EW(2);},BBa:function(){this.Apf=-1;},AzZ:function(){return(
this.Apf>-1)&&!this.Bzw();},Bzw:function(){return this.Apf>=this.AutoActions.NP(
);},EW:function(E){if(this.EY===E)return;this.EY=E;switch(E){case 1:this.ByM();break;
case 2:{var Aar=this.AutoActions.OC(this.Apf);if(this.A4x(A._GetAutoObject(A.Device.
Helper).W,Aar))this.Qj(Aar);else A._GetAutoObject(A.Device.Device).A7(64,true,(this.
ActionToString.Lt(Aar)+As_)+this.AnimalTypeToString.Lt(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BBa();break;default:throw new
Error(Ayq);}A.abo([this,this.Q1,this.EW],0);},MT:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bcl(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A$).Cf(45);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.AzZ())this.
EW(1);},Bcn:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BzD:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cf(
45);else A._GetAutoObject(A.Device.Device).A7(32,true,A.jV,0,[this,this.MT]);},Ac8:
function(){this.EW(1);},BA_:function(){var Oh=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oh&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(A.Device.Device
).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axs(B1,5);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.EU(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uo(false);if(Oh)A._GetAutoObject(
A.Device.Helper).W.AnW(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A7(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BA$:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A7(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bcl:function(ByQ){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByQ===false))A._GetAutoObject(A.Device.
Device).A7(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A$).Cf(54);},BxK:
function(){A._GetAutoObject(A.Device.Helper).W.ArY(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A7(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A7(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BzC:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A$).Cf(81);else A._GetAutoObject(A.
Device.Device).A7(69,true,A.jV,0,[this,this.MT]);},Bx_:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj_(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A7(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae4(false);A._GetAutoObject(A.Device.
Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A7(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},Byz:function(){A._GetAutoObject(A.Device.Helper).W.Ae3(false);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj_(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A7(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A7(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A7(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4x:function(Em,ED
){var Qt=false;switch(ED){case 32768:Qt=Em.IsRegistrationNoticePending&&!!Em.NaisIdMother;
break;case 524288:Qt=Em.IsRegistrationNoticePending&&!Em.NaisIdMother;break;case
4096:case 8192:switch(Em.AnimalType){case 1:Qt=true;break;default:;}break;case 512:
switch(Em.AnimalType){case 0:Qt=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qt=true;break;default:A.ab5("%s",AYu+
ED.toFixed());}return Qt;},BBm:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cf(80);else A._GetAutoObject(A.Device.Device).A7(
69,true,A.jV,0,[this,this.MT]);},BB0:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A7(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.PQ(0);A._GetAutoObject(A.Device.Helper).W.SI(A._GetAutoObject(A.
Device.Helper).A4O(A._GetAutoObject(A.Device.Device).An7,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A7(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},Bx$:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae4(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A7(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Q1:function(){return this.EY;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A4A;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALT={Aa4:null,Aqn:null,EW:function(E){if(this.EY===E)return;C.Mg.EW.call(this
,E);switch(E){case 1:this.Dr(C.Aq3);break;case 5:case 6:this.Dr(C.II);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayq);}},A23:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa4={I:this},0);C.ALU._Init.call(this.Aqn={I:this
},0);this.__proto__=C.ALT;this.A9m(true);this.Aa4.H(AYv);this.Aa4.R(A.aaR(A.acf.
Tw));this.Aa4.L(A.jb.Text);this.Aqn.H(AYw);this.J(this.Aa4,0);this.J(this.Aqn,0);
this.N.Ct(A.aaL(A.ach.AbF));this.Aa4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mg;this.Aa4._Done();this.Aqn._Done();C.Mg._Done.call(this);},_ReInit:function(
){C.Mg._ReInit.call(this);this.Aa4._ReInit();this.Aqn._ReInit();this.Aa4.R(A.aaR(
A.acf.Tw));this.Aa4.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(
this,D);if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqn)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ia:null,JY:null,A23:function(G){if(this.Ia.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mg._Init.call(this,aArg);A.acg.Text._Init.call(this.
JY={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JY.H(AYx);this.JY.KS(
true);this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABF));this.
JY.L(A.jb.Text);this.J(this.JY,0);this.N.Ct(A.aaL(A.ach.AbF));this.JY.S(A.aaL(A.
fl.Af));this.Ia=A._GetAutoObject(C.Pi);},_Done:function(){this.__proto__=C.Mg;this.
JY._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.
JY._ReInit();this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABF
));this.JY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(this,D);if((
B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JY)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALU={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABp],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Auv],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABp],this);
A.pe([this,this.Auv],this);this.H(A.abK(this.M,AYy));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYz)));},Bcb:function(G){var B;var AlC=0;var Azp=0;
var Bcr;var X=this.Y.Ah;var Cy=null;Bcr=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.Wl.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.H(A.abK(Cy.M,AYA));Cy.H(A.abM(Cy.M
,(Azp*58)+Bcr));Cy.H(A.abO(Cy.M,AlC*58));if(Azp>=3){AlC=AlC+1;Azp=0;}else Azp=Azp+
1;}X=X.Ah;}this.Bb(null);},A1q:function(ED){var EP=A._GetAutoObject(C.DP).Bcv(ED
,null);this.J(EP,0);this.Bcb(this);},Ao6:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HP(
AdK);}},ABp:function(G){this.Ao6();var O;var CB=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CB;O=O+1){var Aar=A._GetAutoObject(C.AutoActions).OC(O);this.A1q(
Aar);}A.pe([this,this.Bcb],this);A.pe([this,this.Auv],this);A.pe([this,this.BB_]
,this);},Auv:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wl.isPrototypeOf(X)?X:null);Aa.AFw(false);
}X=X.Ah;}},BB_:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wl.isPrototypeOf(X)?X:null);var Bx0=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A9i(false);for(O=0;O<Bx0;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OC(O)){Aa.A9i(true);Aa.Bmr(AYB+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALU;this.Y.JP(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A4A._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APx={Lk:null,T6:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).AlN());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lk={I:this},0);C.CH._Init.call(this.T6={I:this},0);this.__proto__=
C.APx;this.Lk.H(AYC);this.Lk.A6(0x12);this.Lk.L(A.jb.Text);this.T6.H(Aoz);this.T6.
R((A.aaR(A.acf.Ahj)+AIh)+A.aaR(A.acf.Kj));this.T6.A6(0x12);this.T6.L(A.jb.Text);
this.J(this.Lk,0);this.J(this.T6,0);this.Lk.S(A.aaL(A.fl.Af));this.T6.S(A.aaL(A.
fl.Ak));this.T6.A2(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Lk._Done();this.T6._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Lk._ReInit();this.T6._ReInit();this.T6.R((A.aaR(A.acf.
Ahj)+AIh)+A.aaR(A.acf.Kj));this.Lk.S(A.aaL(A.fl.Af));this.T6.S(A.aaL(A.fl.Ak));this.
T6.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADk={Jv:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jv={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADk;this.Jv.H(AYD
);this.Jv.KS(true);this.Jv.A6(0x14);this.Jv.R(A.aaR(A.acf.AhQ)+AIi);this.Jv.L(A.
jb.Text);this.D0.H(Aoz);this.D0.KS(true);this.D0.R(A.aaR(A.acf.AF5));this.D0.L(A.
jb.Text);this.J(this.Jv,0);this.J(this.D0,0);this.Jv.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jv._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jv._ReInit(
);this.D0._ReInit();this.Jv.R(A.aaR(A.acf.AhQ)+AIi);this.D0.R(A.aaR(A.acf.AF5));
this.Jv.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TW={I8:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I8={I:this},0);this.__proto__=C.TW;this.I8.H(AIj);this.I8.R((((A.aaR(A.acf.RP)+Aak
)+AIk)+A.aaR(A.acf.A$O))+O5);this.I8.A6(0x12);this.I8.L(A.jb.Text);this.J(this.I8
,0);this.I8.S(A.aaL(A.fl.Af));this.I8.A2(A.aaL(A.fl.Ak));this.I8.Cv(A.aaL(A.fl.Bi
));},_Done:function(){this.__proto__=C.Dc;this.I8._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I8._ReInit();this.I8.R((((A.aaR(
A.acf.RP)+Aak)+AIk)+A.aaR(A.acf.A$O))+O5);this.I8.S(A.aaL(A.fl.Af));this.I8.A2(A.
aaL(A.fl.Ak));this.I8.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APz={Ll:null,Kq:null,CP:function(){this.A_5();},Init:function(aArg){this.A_5(
);},A_5:function(){this.Ll.R(A._GetAutoObject(A.acj.DV).Af2());this.Kq.R(A._GetAutoObject(
A.acj.DV).AaA());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ll={I:this},0);C.CH._Init.call(this.Kq={I:this},0);this.__proto__=C.APz;
this.Ll.H(AYE);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.Kq.H(Aoz);this.Kq.L(A.
jb.Text);this.J(this.Ll,0);this.J(this.Kq,0);this.Ll.S(A.aaL(A.fl.Af));this.Kq.S(
A.aaL(A.fl.Af));this.Kq.A2(A.aaL(A.fl.Ak));this.Kq.Cv(A.aaL(A.fl.Bi));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Ll._Done();this.Kq._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Ll._ReInit();
this.Kq._ReInit();this.Ll.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af));this.Kq.A2(
A.aaL(A.fl.Ak));this.Kq.Cv(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM8={Mj:null,Ho:null,H$:null,AP:null,A_:null,FW:0,AaG:0,Ib:0,AiQ:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ho.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Ho.M[2]-1,0,this.Ho.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiQ){this.H$.R(Rp);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S7(this.FW,2,true));this.H$.L(A._GetAutoObject(A.acj.DV).AzP(this.FW,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DV).AzN(this.FW,this.Ib));}if(this.AaG>0)this.Ho.
R(A._GetAutoObject(A.Device.Converter).Alb(this.AaG));else this.Ho.R(Rp);this.Ho.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Mf=
this.AX.CF(Ad,1);var Auq=this.AX.Hv(Ad,24);var AJ4=this.AX.CF(Ad,23);var Aur=this.
AX.Hv(Ad,19);this.AaG=this.AX.CF(Ad,18);if((Auq>0)&&(Auq!==Aur)){var LD=A._GetAutoObject(
A.Device.Helper).L9(Auq,Aur);if(!!LD){this.AiQ=false;this.FW=A._GetAutoObject(A.
acj.DV).AlB(LD,AJ4,this.AaG);}else{this.AiQ=true;this.FW=0;}}else{this.AiQ=true;
this.FW=0;}this.T(Mf.toFixed());this.Ib=this.AX.AmW(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Ho={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AM8;this.V.H(O3);this.Mj.H(Ata);this.Ho.H(AIe);this.Ho.A6(0x12);this.Ho.R(Rn);
this.Ho.L(A.jb.Text);this.H$.H(AIf);this.H$.R(Rn);this.H$.L(A.jb.Text);this.AP.H(
Aox);this.AP.L(A.jb.Bc);this.A_.H(Aoy);this.A_.L(A.jb.Bc);this.J(this.Mj,0);this.
J(this.Ho,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A_,0);this.Ho.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mj._Done();this.Ho._Done();this.H$._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mj._ReInit(
);this.Ho._ReInit();this.H$._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ho.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M1={Mi:null,AP:null,A_:null,Gz:null,Xq:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mi.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mi.M);this.Background.H([].concat(this.Mi.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xq&&(this.Xq!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Ql(this.
Xq));this.V.L(A._GetAutoObject(A.acj.Assessment).XA(this.Xq));}else this.Mi.L(this.
Background.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var
Mf=this.AX.CF(Ad,1);var LQ=this.AX.I4(Ad,13);var AlI=this.AX.I4(Ad,17);var AlR=this.
AX.H3(Ad,11);var Ay9=this.AX.Hv(Ad,4);var AfP=A._GetAutoObject(A.Device.Helper).
L9(Ay9,A._GetAutoObject(A.Device.Helper).Dq());this.Xq=A._GetAutoObject(A.Device.
Helper).AMd(LQ,AlR,AlI);this.T(Mf.toFixed());if(AfP<100)this.Gz.R((AfP.toFixed()+
CQ)+A.aaR(A.acf.ALS));else this.Gz.R(A._GetAutoObject(A.acj.KK).ACQ(Ay9,A._GetAutoObject(
A.Device.Helper).Dq(),AIl));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mi={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.M1;this.Mi.H(Ata);this.Background.H(AYF);this.V.H(O3);this.
AP.H(Aox);this.AP.L(A.jb.Bc);this.A_.H(Aoy);this.A_.L(A.jb.Bc);this.Gz.H(Ayr);this.
J(this.Mi,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done(
);this.AP._Done();this.A_._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM6={AjC:null,N8:null,AP:null,A_:null,Jq:null,AKl:0,A2q:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjC.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jq.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jq.De(this.V.AQ);if(this.AKl>0){this.AjC.L(A._GetAutoObject(A.acj.Assessment
).Ql(this.A2q));this.N8.L(A._GetAutoObject(A.acj.Assessment).XA(this.A2q));}else{
this.AjC.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hq=Ad;if(!!this.AX){var Iy=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,
1);this.AKl=this.AX.CF(Ad,5);this.A2q=this.AX.I4(Ad,17);this.T(Mf.toFixed());if(
this.AKl>0)this.N8.R(A._GetAutoObject(A.Device.Converter).Ak4(this.AKl));else this.
N8.R(Rp);var Xp=A._GetAutoObject(A.Device.Helper).ZU(6);A._GetAutoObject(A.Device.
Device).SP(Ad);var A0B=A._GetAutoObject(A.Device.Helper).Bit(A._GetAutoObject(A.
Device.Device).Bt,9,Iy,Xp,0);this.Jq.A9A(A0B.Get(3));this.Jq.A9C(A0B.Get(2));this.
Jq.A9B(A0B.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AjC={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jq._Init.call(this.Jq={I:this},0);this.__proto__=C.AM6;this.N8.A6(0x12);this.
N8.R(Rn);this.N8.L(A.jb.Text);this.AP.H(Aox);this.AP.L(A.jb.Bc);this.A_.H(Aoy);this.
A_.L(A.jb.Bc);this.Jq.H(AYG);this.J(this.AjC,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jq,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjC._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jq._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjC._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jq._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jq={Afo:null,
ColoredCounterAttrSet:null,ACh:0,ACi:0,ACg:0,KT:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKe;var ALy;var AKJ;var AlZ=0;if(this.ACg>0){AKe=this.ACg.toFixed(
);AlZ+=AKe.length;}else{AKe=AYH;AlZ++;}if(this.ACi>0){ALy=this.ACi.toFixed();AlZ+=
ALy.length;}else{ALy=Ays;AlZ++;}if(this.ACh>0){AKJ=this.ACh.toFixed();AlZ+=AKJ.length;
}else{AKJ=AH$;AlZ++;}if(AlZ<=4)this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Af));else
if(AlZ<=5)this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahp(A.aaL(A.fl.Bi));this.Afo.R(((((AYI+AKe)+AYJ)+ALy)+AYK)+AKJ);},A9B:function(E
){if(this.ACh===E)return;this.ACh=E;this.Am();},A9C:function(E){if(this.ACi===E)
return;this.ACi=E;this.Am();},A9A:function(E){if(this.ACg===E)return;this.ACg=E;
this.Am();},De:function(E){if(this.KT===E)return;this.KT=E;this.ColoredCounterAttrSet.
Ahm(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuM._Init.call(
this.Afo={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jq;this.H(AIm);this.Afo.AZ(0x3F);this.Afo.H(AIm);this.
Afo.R(Rn);this.ColoredCounterAttrSet.Blv(A.jb.E4);this.ColoredCounterAttrSet.A9r(
A.jb.H8);this.ColoredCounterAttrSet.A9q(A.jb.Gk);this.ColoredCounterAttrSet.Ahm(
A.jb.Text);this.KT=A.jb.Text;this.J(this.Afo,0);this.Afo.A9l(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9n(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afo._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afo._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahp(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM5={AtD:null
,Acf:null,Acg:null,Ach:null,Jq:null,AP:null,A_:null,Ea:null,Lr:null,AcE:null,KU:
null,KV:null,AJq:0,AJp:0,AJo:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acf.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcE.H(this.
Acf.M);this.A_.H([this.Acf.M[2]-1,0,this.Acf.M[2]+1,aSize[1]]);this.Acg.H([this.
Acf.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KU.H(this.Acg.M);this.Ea.H([this.
Acg.M[2]-1,0,this.Acg.M[2]+1,aSize[1]]);this.Ach.H([this.Acg.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KV.H(this.Ach.M);this.Lr.H([this.Ach.M[2]-1,0,this.Ach.
M[2]+1,aSize[1]]);this.Jq.H([this.Ach.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jq.De(this.V.AQ);this.Acf.L(A._GetAutoObject(A.acj.
Assessment).Ql(this.AJo));this.Acg.L(A._GetAutoObject(A.acj.Assessment).Ql(this.
AJp));this.Ach.L(A._GetAutoObject(A.acj.Assessment).Ql(this.AJq));this.AcE.L(A._GetAutoObject(
A.acj.Assessment).XA(this.AJo));this.KU.L(A._GetAutoObject(A.acj.Assessment).XA(
this.AJp));this.KV.L(A._GetAutoObject(A.acj.Assessment).XA(this.AJq));this.AcE.Z(
!this.AJo);this.KU.Z(!this.AJp);this.KV.Z(!this.AJq);this.Jq.A9A(this.AtD.Get(3)
);this.Jq.A9C(this.AtD.Get(2));this.Jq.A9B(this.AtD.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hq=Ad;if(!!this.AX){var Iy=this.AX.CF(Ad,0);var Mf=this.AX.
CF(Ad,1);this.T(Mf.toFixed());A._GetAutoObject(A.Device.Device).SP(Ad);this.AJo=
A._GetAutoObject(A.Device.Helper).A13(A._GetAutoObject(A.Device.Device).Bt,Iy,0);
this.AJp=A._GetAutoObject(A.Device.Helper).A13(A._GetAutoObject(A.Device.Device).
Bt,Iy,-1);this.AJq=A._GetAutoObject(A.Device.Helper).A13(A._GetAutoObject(A.Device.
Device).Bt,Iy,-2);this.AtD=A._GetAutoObject(A.Device.Helper).A6s(A._GetAutoObject(
A.Device.Device).Bt,Iy,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Acf={I:this},0);A.acg.AK._Init.call(this.Acg={I:
this},0);A.acg.AK._Init.call(this.Ach={I:this},0);C.Jq._Init.call(this.Jq={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.Lr={I:this
},0);A.acg.Text._Init.call(this.AcE={I:this},0);A.acg.Text._Init.call(this.KU={I:
this},0);A.acg.Text._Init.call(this.KV={I:this},0);this.__proto__=C.AM5;this.AP.
L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lr.L(A.jb.Bc);this.AcE.R(AoA
);this.KU.R(AoA);this.KV.R(AoA);this.J(this.Acf,0);this.J(this.Acg,0);this.J(this.
Ach,0);this.J(this.Jq,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Lr,0);this.J(this.AcE,0);this.J(this.KU,0);this.J(this.KV,0);this.AcE.S(A.
aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.AtD=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acf._Done();this.Acg._Done();this.Ach._Done();this.Jq._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Lr._Done();this.AcE._Done();this.KU.
_Done();this.KV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acf._ReInit();this.Acg._ReInit();this.Ach._ReInit();this.Jq._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Lr._ReInit();this.AcE.
_ReInit();this.KU._ReInit();this.KV._ReInit();this.AcE.S(A.aaL(A.fl.Af));this.KU.
S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acf).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmZ={H6:null,Af4:false,Bl:function(aSize){var
B;this.H6.H([(aSize[0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H6.M[0]-10,40]);C.TF.Bl.call(this,aSize);},Ai:function(Ae){C.TF.Ai.call(
this,Ae);if(this.Af4)this.H6.Cw(1);else this.H6.Cw(0);},J$:function(G){if(this.Af4
)C.TF.J$.call(this,G);},J6:function(G){if(this.Af4)C.TF.J6.call(this,G);},Tr:function(
AI){C.TF.Tr.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af4=true;this.ZB(
true);}else{this.H(A.abI(this.M,40));this.Af4=false;this.ZB(false);}},_Init:function(
aArg){C.TF._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.AmZ;this.V.A6(0x11);this.H6.H(AHH);this.H6.Cw(0);this.J(this.H6,0);this.V.Cv(A.
aaL(A.fl.Bi));this.H6.Aw(A.aaL(A.ach.AqS));},_Done:function(){this.__proto__=C.TF;
this.H6._Done();C.TF._Done.call(this);},_ReInit:function(){C.TF._ReInit.call(this
);this.H6._ReInit();this.V.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TF._Mark.
call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF4={_Init:function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.AF4;}
,_className:"Application::OptionsOverlaySeparator"};C.AkL={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.AkL;},_className:"Application::OptionsOverlayNode"
};C.ZD={AR:null,_Init:function(aArg){C.AkL._Init.call(this,aArg);this.__proto__=
C.ZD;},_Mark:function(D){var B;C.AkL._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANz={Ai:function(Ae){C.OU.Ai.call(this,Ae);var FS=A.jb.CK;var GW=A.jb.Text;if(
this.Hj){FS=A.jb.Text;GW=A.jb.Bm;}this.Background.L(FS);this.V.L(GW);},_Init:function(
aArg){C.OU._Init.call(this,aArg);this.__proto__=C.ANz;},_className:"Application::DarkThemeTextItem"
};C.OU={Background:null,BU:null,V:null,Aqy:0,Hj:false,Init:function(aArg){},Bl:function(
aSize){C.Hg.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hg.Ai.call(this,Ae);this.BU.L(this.Aqy);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bh:function(E){if(this.Hj===E)return;this.Hj=E;this.Am();
},ArO:function(E){if(this.Aqy===E)return;this.Aqy=E;this.Am();},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OU;this.H(BF);this.Background.H(AIn);this.BU.H(BF);this.BU.Ng(2);this.BU.L(A.jb.
Rg);this.V.H(AYL);this.Aqy=A.jb.Rg;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.aaL(A.
fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hg._Done.call(this);},_ReInit:function(){C.Hg.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APC={Er:null,IM:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Er={
I:this},0);A.acg.Text._Init.call(this.IM={I:this},0);this.__proto__=C.APC;this.H(
O2);this.Background.H(O2);this.Er.H(AIo);this.Er.R(A.aaR(A.acf.GM));this.Er.A6(0x11
);this.Er.L(A.jb.Text);this.IM.AZ(0x3F);this.IM.H(AIp);this.IM.Hl(5);this.IM.A6(
0x14);this.IM.R(A.aaR(A.acf.AGM));this.IM.L(A.jb.Text);this.J(this.Er,0);this.J(
this.IM,0);this.Er.S(A.aaL(A.fl.Af));this.IM.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Er._Done();this.IM._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.IM._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.IM.R(A.aaR(A.acf.AGM));this.Er.S(A.aaL(A.fl.Af));this.IM.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sp:null,Sq:null,AeB:null,Ag4:null,QI:null
,KT:0,LastTemperature:0,AqE:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sp.Aw(A.aaL(A.ach.AvB));this.Sq.Aw(A.aaL(A.ach.AvB));}break;case 2:{this.Sp.Aw(A.
aaL(A.ach.AvE));this.Sq.Aw(A.aaL(A.ach.AvE));}break;default:{this.Sp.Aw(A.aaL(A.
ach.Aex));this.Sq.Aw(A.aaL(A.ach.Aex));}}this.Sp.L(A._GetAutoObject(A.acj.Assessment
).Ql(this.AqE));var ApR;if(this.IsWatch)ApR=A.aaL(A.ach.AQz);else if(this.IsFever
){ApR=A.aaL(A.ach.AQy);switch(A._GetAutoObject(A.Device.Converter).Ajq(this.LastTemperature
,this.AnimalType)){case 3:this.QI.L(A.jb.Gk);break;case 2:this.QI.L(A.jb.H8);break;
case 1:this.QI.L(A.jb.E4);break;case 0:this.QI.L(A.jb.Afs);break;default:;}}else
if(this.IsAlarm){ApR=A.aaL(A.ach.AQx);if(!this.AqE||(this.AqE===5))this.QI.L(A.jb.
Gk);else this.QI.L(0xFF000000);}else ApR=null;this.AeB.Aw(ApR);this.Ag4.Aw(ApR);
this.QI.Aw(ApR);if(A._GetAutoObject(A.acj.Assessment).Ql(this.AqE)===A.jb.E4)this.
Sq.L(this.KT);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AE0:function(E){if(this.AqE===E)return;this.AqE=E;this.Am();},De:function(
E){if(this.KT===E)return;this.KT=E;this.Am();},Ae5:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uo:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},EX:function(){this.EB(0);this.AE0(0);this.Ae1(false);this.Uo(false
);this.Ae5(false);this.Ae7(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sp={I:this},0);A.acg.Ap._Init.call(
this.Sq={I:this},0);A.acg.Ap._Init.call(this.AeB={I:this},0);A.acg.Ap._Init.call(
this.Ag4={I:this},0);A.acg.Ap._Init.call(this.QI={I:this},0);this.__proto__=C.DS;
this.H(Ah3);this.Sp.AZ(0x3F);this.Sp.H(Ah3);this.Sp.L(A.jb.CK);this.Sp.A6(0x12);
this.Sp.Cw(0);this.Sq.AZ(0x3F);this.Sq.H(Ah3);this.Sq.L(0xFF000000);this.Sq.A6(0x12
);this.Sq.Cw(1);this.AeB.AZ(0x3F);this.AeB.H(Ah3);this.AeB.L(0xFF000000);this.AeB.
Cw(0);this.Ag4.AZ(0x3F);this.Ag4.H(Ah3);this.Ag4.Cw(1);this.QI.AZ(0x3F);this.QI.
H(Ah3);this.QI.L(A.jb.CS);this.QI.Cw(2);this.KT=A.jb.Text;this.J(this.Sp,0);this.
J(this.Sq,0);this.J(this.AeB,0);this.J(this.Ag4,0);this.J(this.QI,0);this.Sp.Aw(
A.aaL(A.ach.Aex));this.Sq.Aw(A.aaL(A.ach.Aex));},_Done:function(){this.__proto__=
A.Core.P;this.Sp._Done();this.Sq._Done();this.AeB._Done();this.Ag4._Done();this.
QI._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sp._ReInit();this.Sq._ReInit();this.AeB._ReInit();this.Ag4._ReInit();
this.QI._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM2={Ce:function(Ad){C.AjF.Ce.call(this,Ad);if(!!this.AX){var BzA=this.AX.H3(
Ad,12);var BxS=this.AX.Sl(Ad,15);this.Abi.R(A._GetAutoObject(A.Device.Helper).L9(
BxS,A._GetAutoObject(A.Device.Helper).Dq()).toFixed());this.Sr.Z(BzA);this.Am();
}},_Init:function(aArg){C.AjF._Init.call(this,aArg);this.__proto__=C.AM2;},_className:
"Application::CalfListAlarmItem"};C.ADg={D0:null,Mr:null,_Init:function(aArg){C.
TX._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mr={I:this},0);this.__proto__=C.ADg;this.D0.H(Aoz);this.D0.KS(true);this.
D0.R(A.aaR(A.acf.A5E));this.D0.L(A.jb.Text);this.Mr.H(AYM);this.Mr.I9(false);this.
Mr.L(A.jb.Text);this.Mr.A6(0x12);this.J(this.D0,-2);this.J(this.Mr,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mr.Aw(A.aaL(A.ach.ADH));},_Done:function(){this.__proto__=C.
TX;this.D0._Done();this.Mr._Done();C.TX._Done.call(this);},_ReInit:function(){C.
TX._ReInit.call(this);this.D0._ReInit();this.Mr._ReInit();this.D0.R(A.aaR(A.acf.
A5E));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TX._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Ki={Background:null,BU:
null,ACI:0,ABX:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACI);this.BU.L(this.ABX);},AwE:function(E){if(this.ACI===E)return;this.ACI=E;this.
Am();},AES:function(E){if(this.ABX===E)return;this.ABX=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Ki;this.H(Alk);this.
Background.AZ(0x3C);this.Background.H(Alk);this.Background.Cw(1);this.BU.AZ(0x3C
);this.BU.H(Alk);this.ACI=A.jb.E4;this.ABX=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Aw(A.aaL(A.ach.Ki));this.BU.Aw(A.aaL(A.ach.Ki));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmH={Q:null,Pn:
null,A68:false,Bl:function(aSize){C.Mn.Bl.call(this,aSize);this.V.H([].concat(this.
Pn.M[2]-this.V.Text.Ja,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mn.Ai.call(this
,Ae);this.Pn.L(this.V.AQ);},AwJ:function(E){if(this.A68===E)return;this.A68=E;if(
E)this.Pn.R(AYN);else this.Pn.R(AIq);},Kd:function(G){var F;if(!!this.Q)this.AwJ((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)
A.pe([this,this.Kd],this);},_Init:function(aArg){C.Mn._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pn={I:this},0);this.__proto__=C.AmH;this.Pn.AZ(0x34);this.Pn.
H(UV);this.Pn.R(AIq);this.J(this.Pn,0);this.Pn.S(A.aaL(A.fl.AOv));},_Done:function(
){this.__proto__=C.Mn;this.Pn._Done();C.Mn._Done.call(this);},_ReInit:function(){
C.Mn._ReInit.call(this);this.Pn._ReInit();},_Mark:function(D){var B;C.Mn._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOU={DY:function(G){C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdY(4));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AOU;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dn:function(){return 3;},C4:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BH(aIndex);},DU:function(A8){return A8;},HK:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APD={Go:null,Lk:null,YW:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).AlN());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.call(this.Lk={I:this},0);A.
acg.Text._Init.call(this.YW={I:this},0);this.__proto__=C.APD;this.Background.L(A.
jb.Text);this.Go.H(AIr);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date));this.Go.L(
A.jb.Bm);this.Lk.H(AYO);this.Lk.A6(0x12);this.Lk.L(A.jb.Bm);this.YW.H(AYP);this.
YW.A6(0x12);this.YW.R(A.aaR(A.acf.Bs));this.YW.L(A.jb.Bm);this.J(this.Go,0);this.
J(this.Lk,0);this.J(this.YW,0);this.Go.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af
));this.YW.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Go._Done();this.Lk._Done();this.YW._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Go._ReInit();this.Lk._ReInit();this.YW._ReInit(
);this.Go.R(A.aaR(A.acf.Date));this.YW.R(A.aaR(A.acf.Bs));this.Go.S(A.aaL(A.fl.Af
));this.Lk.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tz={Le:null,AjU:false,Init:function(
aArg){var B;A.zX([this,this.Bbf],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AII
],0);this.AGF(this);A.pe([this,this.AyL],this);},DE:function(G){var D5=(A.Core.BM.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ol(this);break;case 7:this.MU(
this);break;default:D5.NH=true;}},CD:function(G){var B;if(!!this.Le)this.Le.CD(this
);C.AB.CD.call(this,G);},E6:function(G){var B;if(!!this.Le)this.Le.E6(this);C.AB.
E6.call(this,G);},Anq:function(G){A._GetAutoObject(C.A$).Fy();},AGF:function(G){
var B;if(!!this.Le){this.Le.E6(this);this.HP(this.Le);}if(this.AjU)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Le=A._NewObject(C.AMk,0);break;case 1:this.Le=A.
_NewObject(C.AMl,0);break;case 3:this.Le=A._NewObject(C.AMj,0);break;case 2:this.
Le=A._NewObject(C.AMm,0);break;default:throw new Error(AIs);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Le=A._NewObject(C.AMn,0);break;case 1:this.Le=A.
_NewObject(C.AMw,0);break;case 3:this.Le=A._NewObject(C.AMq,0);break;case 2:this.
Le=A._NewObject(C.AMB,0);break;default:throw new Error(AIs);}this.HQ(this);this.
J(this.Le,0);this.Le.H(Fe);this.Le.Zy([this,this.A0n]);this.Le.CD(this);this.Bb(
this.Le);},Bbf:function(s){this.AGF(s);},Bno:function(G){A._GetAutoObject(A.Device.
Device).AeV(0);},ATD:function(G){A._GetAutoObject(A.Device.Device).AeV(1);},ATC:
function(G){A._GetAutoObject(A.Device.Device).AeV(3);},ATE:function(G){A._GetAutoObject(
A.Device.Device).AeV(2);},HQ:function(G){this.N.CY(A.aaL(A.ach.E5));this.N.Hy(A.
jV);this.N.CC=[this,this.Anq];this.N.AE7(A.aaL(A.fl.Ak));},AyL:function(s){this.
HQ(s);},Bma:function(E){if(this.AjU===E)return;this.AjU=E;A.pe([this,this.Bbf],this
);},A_y:function(G){this.Bma(!this.AjU);},Bnr:function(G){A._GetAutoObject(A.Device.
Device).A7(31,true,A.jV,0,null);},MU:function(G){},BGc:function(s){this.MU(s);},
Ol:function(G){},BGb:function(s){this.Ol(s);},Bez:function(G){var FP=A._GetAutoObject(
A.Device.Device).D9;FP=FP+1;if(FP>=4)FP=0;A._GetAutoObject(A.Device.Device).AeV(
FP);},BAt:function(G){var FP=A._GetAutoObject(A.Device.Device).D9;FP=FP-1;if(FP<
0)FP=3;A._GetAutoObject(A.Device.Device).AeV(FP);},Af9:function(G){},A0n:function(
s){this.Af9(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tz;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.OO(true);this.Dr(
C.APs);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Le)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dl:null,CD:function(G){},AIH:function(s){this.CD(s);
},E6:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyB:function(s){
this.E6(s);},Zy:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dl.BN=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=
C.D9;this.H(UY);this.AttrSet.A9r(A.jb.Gk);this.AttrSet.A9q(A.jb.H8);this.AttrSet.
Ahm(A.jb.Text);this.Dl.Filter=1;this.AttrSet.Ahp(A.aaL(A.fl.Ak));this.AttrSet.A9n(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dl._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dl._ReInit();this.AttrSet.Ahp(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMn={RT:
null,AaZ:null,Ty:null,Tx:null,RY:null,Qz:null,RZ:null,RW:null,RX:null,RU:null,CP:
function(){var B;this.RT.Ce(this);this.AaZ.Ce(this);this.Ty.Ce(this);this.Tx.Ce(
this);this.RY.Ce(this);this.Qz.Ce(this);this.RZ.Ce(this);this.RW.Ce(this);this.RX.
Ce(this);this.RU.Ce(this);},GH:function(G){C.R0.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RT.Z(true);this.AaZ.Z(false);
this.RW.Z(false);this.RX.Z(false);this.RU.Z(false);this.RY.Z(true);this.Qz.Z(true
);this.RZ.Z(true);}break;case 1:{this.RT.Z(false);this.AaZ.Z(true);this.RW.Z(true
);this.RX.Z(true);this.RU.Z(true);this.RY.Z(false);this.Qz.Z(false);this.RZ.Z(false
);}break;default:A.ab5("%s%e",Alg,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.R0._Init.call(this,aArg);C.
RT._Init.call(this.RT={I:this},0);C.AMi._Init.call(this.AaZ={I:this},0);C.Ty._Init.
call(this.Ty={I:this},0);C.Tx._Init.call(this.Tx={I:this},0);C.RY._Init.call(this.
RY={I:this},0);C.Qz._Init.call(this.Qz={I:this},0);C.RZ._Init.call(this.RZ={I:this
},0);C.RW._Init.call(this.RW={I:this},0);C.RX._Init.call(this.RX={I:this},0);C.RU.
_Init.call(this.RU={I:this},0);this.__proto__=C.AMn;this.RT.H(BF);this.RT.Aj(true
);this.RT.Bh(false);this.AaZ.H(IT);this.AaZ.Aj(true);this.AaZ.Bh(false);this.Ty.
H(P9);this.Ty.Aj(true);this.Ty.Bh(true);this.Tx.H(Aai);this.Tx.Aj(true);this.Tx.
Bh(false);this.RY.H(Ali);this.RY.Aj(true);this.RY.Bh(true);this.Qz.H(Aov);this.Qz.
Aj(true);this.Qz.Bh(false);this.RZ.H(As6);this.RZ.Aj(true);this.RZ.Bh(true);this.
RW.H(Xg);this.RW.Aj(true);this.RW.Bh(true);this.RX.H(AYQ);this.RX.Aj(true);this.
RX.Bh(false);this.RU.H(AYR);this.RU.Aj(true);this.RU.Bh(true);this.J(this.RT,0);
this.J(this.AaZ,0);this.J(this.Ty,0);this.J(this.Tx,0);this.J(this.RY,0);this.J(
this.Qz,0);this.J(this.RZ,0);this.J(this.RW,0);this.J(this.RX,0);this.J(this.RU,
0);},_Done:function(){this.__proto__=C.R0;this.RT._Done();this.AaZ._Done();this.
Ty._Done();this.Tx._Done();this.RY._Done();this.Qz._Done();this.RZ._Done();this.
RW._Done();this.RX._Done();this.RU._Done();C.R0._Done.call(this);},_ReInit:function(
){C.R0._ReInit.call(this);this.RT._ReInit();this.AaZ._ReInit();this.Ty._ReInit();
this.Tx._ReInit();this.RY._ReInit();this.Qz._ReInit();this.RZ._ReInit();this.RW.
_ReInit();this.RX._ReInit();this.RU._ReInit();this.CP();},_Mark:function(D){var B;
C.R0._Mark.call(this,D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMB={AkW:function(L2){if(!L2)return;var Fw=A._NewObject(
A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CW(HX);var Ac9=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac9.Initialize(8,2,0,true);Fw.CW(Ac9);L2.Bk(Fw);
},ADU:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pf=A.
_GetAutoObject(A.Device.Device).Bt.B$();if(Pf<2)return false;var BBU=A._GetAutoObject(
A.Device.Device).Bt.Hv(0,6);var BBV=A._GetAutoObject(A.Device.Device).Bt.Hv(Pf-1
,6);var A1T=A._NewObject(A.Core.Bs,0);A1T.Initialize(BBU);var A3V=A._NewObject(A.
Core.Bs,0);A3V.Initialize(BBV);if((A1T.Ab4()!==A3V.Ab4())||(A1T.Year!==A3V.Year)
)return true;else return false;},_Init:function(aArg){C.Aa1._Init.call(this,aArg
);this.__proto__=C.AMB;this.AS8(C.AHd);this.AS9(C.ADm);this.ASY(C.Qz);this.ArU(A.
aaR(A.acf.AVz));this.Dz(A.aaR(A.acf.Akp));},_ReInit:function(){C.Aa1._ReInit.call(
this);this.ArU(A.aaR(A.acf.AVz));this.Dz(A.aaR(A.acf.Akp));},_className:"Application::AnimalWeights"
};C.AMw={AkW:function(L2){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CW(HX);var ABc=A._NewObject(A.Device.Int32FilterCriterion
,0);ABc.Initialize(7,2,0,true);Fw.CW(ABc);L2.Bk(Fw);},ADU:function(){return A._GetAutoObject(
A.Device.Device).Bt.B$()>0;},_Init:function(aArg){C.Aa1._Init.call(this,aArg);this.
__proto__=C.AMw;this.AS8(C.AUW);this.AS9(C.APD);this.ASY(C.Ty);this.ArU(A.aaR(A.
acf.A7t));this.Dz(A.aaR(A.acf.Arw));},_ReInit:function(){C.Aa1._ReInit.call(this
);this.ArU(A.aaR(A.acf.A7t));this.Dz(A.aaR(A.acf.Arw));},_className:"Application::AnimalTemperatures"
};C.AT3={VC:null,VD:null,X3:null,AgF:null,Kx:null,AP:null,A_:null,Ea:null,Lr:null
,AnV:null,KU:null,KV:null,ZR:null,ZS:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VC.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VC.M[2]-1,0,this.VC.M[2]+1,aSize[1]]);this.VD.H([this.VC.M[2],0,this.VC.M[2]+22,
aSize[1]]);this.Lr.H([this.VD.M[2]-1,0,this.VD.M[2]+1,aSize[1]]);this.X3.H([this.
VD.M[2],0,this.VD.M[2]+22,aSize[1]]);this.AnV.H([this.X3.M[2]-1,0,this.X3.M[2]+1
,aSize[1]]);this.AgF.H([this.X3.M[2],0,aSize[0],aSize[1]]);this.KU.H(this.VC.M);
this.KV.H(this.VD.M);this.ZR.H(this.X3.M);this.ZS.H(this.AgF.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kx.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){var AlE=this.AX.Hv(Ad,6);var A0_=this.AX.I4(Ad,3);var A1P=
this.AX.I4(Ad,2);var A1O=this.AX.I4(Ad,5);var A3J=this.AX.I4(Ad,4);this.T(A._GetAutoObject(
A.acj.KK).ACP(AlE));this.Kx.R(A._GetAutoObject(A.acj.KK).A6m(AlE));this.VC.L(A._GetAutoObject(
A.acj.Assessment).Ql(A0_));this.VD.L(A._GetAutoObject(A.acj.Assessment).Ql(A1P));
this.X3.L(A._GetAutoObject(A.acj.Assessment).Ql(A1O));this.AgF.L(A._GetAutoObject(
A.acj.Assessment).Ql(A3J));this.KU.L(A._GetAutoObject(A.acj.Assessment).XA(A0_));
this.KV.L(A._GetAutoObject(A.acj.Assessment).XA(A1P));this.ZR.L(A._GetAutoObject(
A.acj.Assessment).XA(A1O));this.ZS.L(A._GetAutoObject(A.acj.Assessment).XA(A3J));
this.KU.Z(A0_===5);this.KV.Z(A1P===5);this.ZR.Z(A1O===5);this.ZS.Z(A3J===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.
VC={I:this},0);A.acg.AK._Init.call(this.VD={I:this},0);A.acg.AK._Init.call(this.
X3={I:this},0);A.acg.AK._Init.call(this.AgF={I:this},0);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Lr={I:this},0);A.acg.AK._Init.call(this.AnV={I:this},0);A.acg.Text._Init.call(this.
KU={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.
ZR={I:this},0);A.acg.Text._Init.call(this.ZS={I:this},0);this.__proto__=C.AT3;this.
V.H(O3);this.VC.H(AYS);this.VD.H(AYT);this.X3.H(AYU);this.AgF.H(AYV);this.Kx.R(Rn
);this.Kx.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.AnV.L(A.jb.Bc);this.KU.H(AYW);this.KU.R(Rp);this.KV.H(AYX
);this.KV.R(Rp);this.ZR.H(AYY);this.ZR.R(Rp);this.ZS.H(AYZ);this.ZS.R(Rp);this.J(
this.VC,0);this.J(this.VD,0);this.J(this.X3,0);this.J(this.AgF,0);this.J(this.Kx
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lr,0);this.
J(this.AnV,0);this.J(this.KU,0);this.J(this.KV,0);this.J(this.ZR,0);this.J(this.
ZS,0);this.Kx.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af
));this.ZR.S(A.aaL(A.fl.Af));this.ZS.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VC._Done();this.VD._Done();this.X3._Done();this.AgF._Done(
);this.Kx._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lr._Done(
);this.AnV._Done();this.KU._Done();this.KV._Done();this.ZR._Done();this.ZS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VC._ReInit(
);this.VD._ReInit();this.X3._ReInit();this.AgF._ReInit();this.Kx._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Lr._ReInit();this.AnV._ReInit(
);this.KU._ReInit();this.KV._ReInit();this.ZR._ReInit();this.ZS._ReInit();this.Kx.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.ZR.S(
A.aaL(A.fl.Af));this.ZS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APB={Go:null,Y2:null,YY:null,YZ:null,Y0:null,Y1:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Go={I:this},0);A.acg.Text._Init.call(this.Y2={I:this},0);A.acg.Text._Init.call(this.
YY={I:this},0);A.acg.Text._Init.call(this.YZ={I:this},0);A.acg.Text._Init.call(this.
Y0={I:this},0);A.acg.Text._Init.call(this.Y1={I:this},0);this.__proto__=C.APB;this.
Background.L(A.jb.Text);this.Go.H(AIr);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date
));this.Go.L(A.jb.Bm);this.Y2.H(AIj);this.Y2.A6(0x12);this.Y2.R(A.aaR(A.acf.Bs));
this.Y2.L(A.jb.Bm);this.YY.H(AY0);this.YY.A6(0x12);this.YY.R(A.aaR(A.acf.AT5));this.
YY.L(A.jb.Bm);this.YZ.H(AY1);this.YZ.A6(0x12);this.YZ.R(A.aaR(A.acf.AT6));this.YZ.
L(A.jb.Bm);this.Y0.H(AY2);this.Y0.A6(0x12);this.Y0.R(A.aaR(A.acf.AOr));this.Y0.L(
A.jb.Bm);this.Y1.H(AY3);this.Y1.A6(0x12);this.Y1.R(A.aaR(A.acf.ANq));this.Y1.L(A.
jb.Bm);this.J(this.Go,0);this.J(this.Y2,0);this.J(this.YY,0);this.J(this.YZ,0);this.
J(this.Y0,0);this.J(this.Y1,0);this.Go.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af
));this.YY.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));
this.Y1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Go._Done();
this.Y2._Done();this.YY._Done();this.YZ._Done();this.Y0._Done();this.Y1._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Go._ReInit(
);this.Y2._ReInit();this.YY._ReInit();this.YZ._ReInit();this.Y0._ReInit();this.Y1.
_ReInit();this.Go.R(A.aaR(A.acf.Date));this.Y2.R(A.aaR(A.acf.Bs));this.YY.R(A.aaR(
A.acf.AT5));this.YZ.R(A.aaR(A.acf.AT6));this.Y0.R(A.aaR(A.acf.AOr));this.Y1.R(A.
aaR(A.acf.ANq));this.Go.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));this.YY.S(A.
aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));this.Y1.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Go)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMq={AkW:function(L2){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CW(HX);var
AAV=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAV.Initialize(3,5,0,true
);Fw.CW(AAV);L2.Bk(Fw);},ADU:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B$()>0;},_Init:function(
aArg){C.Aa1._Init.call(this,aArg);this.__proto__=C.AMq;this.AS8(C.AT3);this.AS9(
C.APB);this.ASY(C.Tx);this.ArU(A.aaR(A.acf.Axn));this.Dz(A.aaR(A.acf.Anp));},_ReInit:
function(){C.Aa1._ReInit.call(this);this.ArU(A.aaR(A.acf.Axn));this.Dz(A.aaR(A.acf.
Anp));},_className:"Application::AnimalRatings"};C.IE={B6:null,Y:null,V:null,Ut:
5,T:function(E){C.I1.T.call(this,E);this.V.R(E);},De:function(E){C.I1.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuQ:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0]))this.S(A.aaL(A.fl.Ik));},Kr:function(
E){if(this.Ut===E)return;this.Ut=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAP:function(G){A.pe([this,this.AuQ],this);},_Init:function(aArg){C.I1._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IE;this.Y.AZ(0x3F);this.Y.H(All);this.Y.A_g(5);this.
Y.JP(3);this.V.AZ(0x34);this.V.H(Aal);this.V.I9(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAP];this.V.S(A.aaL(A.fl.Km));},_Done:function(){this.__proto__=C.I1;this.Y._Done(
);this.V._Done();C.I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Km));},_Mark:function(D){
var B;C.I1._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RT={AfP:0,Ai:function(Ae){C.Fx.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RP));if(this.AfP>=0)this.Kt((this.AfP.toFixed(
)+CQ)+A.aaR(A.acf.Kj));else this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfP=-1;
else this.AfP=A._GetAutoObject(A.Device.Helper).W.RP();this.Am();},_Init:function(
aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RT;},_className:"Application::AnimalInfoItemAge"
};C.RY={A4n:0,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.Aft));if(
this.A4n>0)this.Kt((A._GetAutoObject(A.Device.Converter).Alb(this.A4n)+CQ)+A._GetAutoObject(
A.acj.DV).Af2());else this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.Ce.call(
this,G);this.A4n=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RY;},_className:
"Application::AnimalInfoItemWeight"};C.Ty={Y:null,Eh:null,Ex:null,Fd:null,PU:null
,Fc:null,PV:null,Ajl:0,Pe:0,CP:function(){this.Am();},Ai:function(Ae){C.JH.Ai.call(
this,Ae);this.T(A.aaR(A.acf.BhC));this.Fd.R(this.Ajl.toFixed());this.Fc.R(this.Pe.
toFixed());if(!!this.Ajl||!!this.Pe)this.PV.R(AY4+(this.Ajl+this.Pe).toFixed());
else this.PV.R(A.aaR(A.acf.AR4));},Ce:function(G){C.JH.Ce.call(this,G);var Ak3;Ak3=
A._GetAutoObject(A.Device.Helper).Biu(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajl=Ak3.Get(2);this.Pe=Ak3.Get(1);this.Am();},De:
function(E){C.JH.De.call(this,E);this.PU.L(E);this.PV.L(E);},AsQ:function(G){if(
!!this.Ajl||!!this.Pe){this.Fd.Z(true);this.PU.Z(true);this.Fc.Z(true);}else{this.
Fd.Z(false);this.PU.Z(false);this.Fc.Z(false);}this.Eh.H(this.Fd.M);this.Eh.Z(this.
Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo());},AuQ:function(G){var B;var
Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;if(((B=Ny.Db(0x1))[2]-B[0])>((
B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.Fd.S(
A.aaL(A.fl.Ak));this.PV.S(A.aaL(A.fl.Ak));}},AAP:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JH._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
PU={I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
PV={I:this},0);this.__proto__=C.Ty;this.Y.H(Ayt);this.Y.Bm9(0);this.Y.JP(3);this.
Eh.H(AY5);this.Eh.L(A.jb.H8);this.Ex.H(Ayr);this.Ex.L(A.jb.Gk);this.Fd.AZ(0x34);
this.Fd.H(Aal);this.Fd.Hl(2);this.Fd.I9(true);this.Fd.R(U0);this.Fd.L(A.jb.Text);
this.Fd.Aj(true);this.PU.AZ(0x34);this.PU.H(Aal);this.PU.I9(true);this.PU.R(AIa);
this.PU.L(A.jb.Text);this.PU.Aj(true);this.Fc.AZ(0x34);this.Fc.H(Aal);this.Fc.Hl(
2);this.Fc.I9(true);this.Fc.R(U0);this.Fc.L(A.jb.Bm);this.Fc.Aj(true);this.PV.AZ(
0x34);this.PV.H(Aal);this.PV.I9(true);this.PV.R(Rn);this.PV.L(A.jb.Text);this.PV.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.Fd,0);
this.J(this.PU,0);this.J(this.Fc,0);this.J(this.PV,0);this.Y.El=[this,this.AAP];
this.Fd.Q4([this,this.AsQ]);this.Fd.S(A.aaL(A.fl.Af));this.PU.S(A.aaL(A.fl.Af));
this.Fc.Q4([this,this.AsQ]);this.Fc.S(A.aaL(A.fl.Af));this.PV.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JH;this.Y._Done();this.Eh._Done();this.Ex._Done(
);this.Fd._Done();this.PU._Done();this.Fc._Done();this.PV._Done();C.JH._Done.call(
this);},_ReInit:function(){C.JH._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ex._ReInit();this.Fd._ReInit();this.PU._ReInit();this.Fc._ReInit();this.PV.
_ReInit();this.Fd.S(A.aaL(A.fl.Af));this.PU.S(A.aaL(A.fl.Af));this.Fc.S(A.aaL(A.
fl.Af));this.PV.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JH._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qz={FW:0,Ib:0
,A2g:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(AY6+A.aaR(A.acf.AG_));if(
this.A2g){this.Kt((A._GetAutoObject(A.Device.Converter).S7(this.FW,2,true)+CQ)+A.
_GetAutoObject(A.acj.DV).AaA());this.Background.L(A._GetAutoObject(A.acj.DV).AzN(
this.FW,this.Ib));this.De(A._GetAutoObject(A.acj.DV).AzP(this.FW,this.Ib));}else{
this.Kt(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.De(A.jb.Text);}},Ce:
function(G){C.Fx.Ce.call(this,G);var LD=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LD){this.A2g=true;this.FW=A._GetAutoObject(A.acj.DV).AlB(LD,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2g=false;this.FW=0;}this.Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.Qz;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tx={Y:null,FY:null,Eh:
null,Ex:null,MF:null,Fd:null,Fc:null,OW:null,AaC:0,Ajl:0,Pe:0,CP:function(){this.
Am();},Ai:function(Ae){C.JH.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axn));this.MF.R(
this.AaC.toFixed());this.Fd.R(this.Ajl.toFixed());this.Fc.R(this.Pe.toFixed());}
,Ce:function(G){C.JH.Ce.call(this,G);var Ak3;Ak3=A._GetAutoObject(A.Device.Helper
).A6s(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaC=Ak3.Get(3);this.Ajl=Ak3.Get(2);this.Pe=Ak3.Get(1);this.Am();},AsQ:
function(G){if((!!this.AaC||!!this.Ajl)||!!this.Pe){this.MF.Z(true);this.Fd.Z(true
);this.Fc.Z(true);this.OW.Z(false);}else{this.MF.Z(false);this.Fd.Z(false);this.
Fc.Z(false);this.OW.Z(true);}this.FY.H(this.MF.M);this.FY.Z(this.MF.Fo());this.Eh.
H(this.Fd.M);this.Eh.Z(this.Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo()
);},AuQ:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.Fd.
S(A.aaL(A.fl.Ak));this.MF.S(A.aaL(A.fl.Ak));}},AAP:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JH._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FY={I:this},0);A.acg.AK._Init.call(this.Eh={
I:this},0);A.acg.AK._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.MF={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
Fc={I:this},0);A.acg.Text._Init.call(this.OW={I:this},0);this.__proto__=C.Tx;this.
Y.AZ(0x3F);this.Y.H(Ayt);this.Y.A_g(5);this.Y.JP(3);this.FY.H(AY7);this.FY.L(A.jb.
E4);this.Eh.H(AY8);this.Eh.L(A.jb.H8);this.Ex.H(AY9);this.Ex.L(A.jb.Gk);this.MF.
AZ(0x3C);this.MF.H(Aal);this.MF.Hl(2);this.MF.I9(true);this.MF.R(U0);this.MF.L(A.
jb.Text);this.MF.Aj(true);this.Fd.AZ(0x3C);this.Fd.H(Aal);this.Fd.Hl(2);this.Fd.
I9(true);this.Fd.R(U0);this.Fd.L(A.jb.Text);this.Fd.Aj(true);this.Fc.AZ(0x3C);this.
Fc.H(Aal);this.Fc.Hl(2);this.Fc.I9(true);this.Fc.R(U0);this.Fc.L(A.jb.Bm);this.Fc.
Aj(true);this.OW.AZ(0x34);this.OW.H(Aal);this.OW.I9(true);this.OW.A6(0x11);this.
OW.R(A.aaR(A.acf.AR4));this.OW.L(A.jb.Text);this.OW.Aj(true);this.OW.Z(false);this.
J(this.Y,0);this.J(this.FY,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.MF
,0);this.J(this.Fd,0);this.J(this.Fc,0);this.J(this.OW,0);this.Y.El=[this,this.AAP
];this.MF.Q4([this,this.AsQ]);this.MF.S(A.aaL(A.fl.Af));this.Fd.Q4([this,this.AsQ
]);this.Fd.S(A.aaL(A.fl.Af));this.Fc.Q4([this,this.AsQ]);this.Fc.S(A.aaL(A.fl.Af
));this.OW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JH;this.Y._Done(
);this.FY._Done();this.Eh._Done();this.Ex._Done();this.MF._Done();this.Fd._Done(
);this.Fc._Done();this.OW._Done();C.JH._Done.call(this);},_ReInit:function(){C.JH.
_ReInit.call(this);this.Y._ReInit();this.FY._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.MF._ReInit();this.Fd._ReInit();this.Fc._ReInit();this.OW._ReInit(
);this.OW.R(A.aaR(A.acf.AR4));this.MF.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.fl.Af)
);this.Fc.S(A.aaL(A.fl.Af));this.OW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JH._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AL_={_Init:function(aArg){C.Aqi._Init.call(
this,aArg);this.__proto__=C.AL_;this.A4y=1;this.Ri.Cv(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqi._ReInit.call(this);this.Ri.Cv(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQS={OH:null,IN:null,H5:null,IL:null,GO:null,Al3:function(G){A.pe([this,this.
Bz0],this);},Bz0:function(G){A._GetAutoObject(C.A$).Cf(3);},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.OH._Init.call(this.OH={I:this},0);C.BW._Init.call(this.
IN={I:this},0);C.SQ._Init.call(this.H5={I:this},0);C.AGC._Init.call(this.IL={I:this
},0);C.Q$._Init.call(this.GO={I:this},0);this.__proto__=C.AQS;var B;this.I_(A.aaR(
A.acf.A$g));this.IN.H(Ah2);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Language));this.
IN.A90(100);this.H5.H(UZ);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.
Bh(true);this.IL.H(Aaj);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Bs));this.GO.H(Ah1
);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF_));this.GO.Bh(true);
this.GO.Ar5(false);this.GO.A98(true);this.JV(this.Y,-1);this.JV(this.Ay,-1);this.
J(this.IN,0);this.J(this.H5,0);this.J(this.IL,0);this.J(this.GO,0);this.IN.WD(A.
aaL(A.fl.Hu));this.IN.WE(A.aaL(A.fl.Hu));this.IN.As([B=this.OH,B.B7,B.B8]);this.
IN.CI(this.OH);this.H5.AeU([B=this.H5,B.FV]);this.H5.Gs([this,this.D_,this.GQ]);
this.H5.AkD(A.aaL(A.ach.Edit));this.H5.Ab$([B=A._GetAutoObject(A.Device.Helper),
B.U1,B.U4]);this.IL.AeU([B=this.IL,B.FV]);this.IL.Gs([this,this.D_,this.GQ]);this.
IL.AkD(A.aaL(A.ach.Edit));this.IL.Ab$([B=A._GetAutoObject(A.Device.Helper),B.U1,
B.U4]);this.GO.AeU([B=this.GO,B.FV]);this.GO.Gs([this,this.D_,this.GQ]);this.GO.
AkD(A.aaL(A.ach.Edit));this.GO.As([B=A._GetAutoObject(A.Device.Device),B.ASw,B.AZ8
]);},_Done:function(){this.__proto__=C.Cd;this.OH._Done();this.IN._Done();this.H5.
_Done();this.IL._Done();this.GO._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.OH._ReInit();this.IN._ReInit();this.H5._ReInit();
this.IL._ReInit();this.GO._ReInit();this.I_(A.aaR(A.acf.A$g));this.IN.T(A.aaR(A.
acf.Language));this.H5.T(A.aaR(A.acf.Date));this.IL.T(A.aaR(A.acf.Bs));this.GO.T(
A.aaR(A.acf.AF_));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa1={Bg:null,FB:null,Am1:null,AmK:null,Se:null,A6N:A.jV,KM:A.jV,ARk:null,ARl:
null,ADf:null,CD:function(G){var B;C.D9.CD.call(this,G);A.zX([this,this.A2P],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);this.A2P(this);},E6:function(
G){var B;A.z$([this,this.A2P],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId
],0);C.D9.E6.call(this,G);},Zy:function(E){C.D9.Zy.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zy(E);},AS8:function(E){if(this.ARk===E)return;this.
ARk=E;if(!!this.Bg)this.Bg.NZ(E);},AS9:function(E){if(this.ARl===E)return;this.ARl=
E;this.BoA(this);},ASY:function(E){if(this.ADf===E)return;this.ADf=E;A.pe([this,
this.Boz],this);},ArU:function(E){if(this.A6N===E)return;this.A6N=E;this.Se.R(E);
},Dz:function(E){if(this.KM===E)return;this.KM=E;if(!!this.Bg)this.Bg.Dz(E);},AkW:
function(L2){A.ab5("%s",AIt);},ADU:function(){A.ab5("%s",Alh);return false;},Axw:
function(G){if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(C.Ge,0);this.Bg.H(
Ah4);this.Bg.Zw(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dz(this.KM);this.Bg.
NZ(this.ARk);this.Bg.Zy(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},BoA:function(
G){var B;if(!!this.FB)this.HP(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARl,0))?B:null);this.FB.H(IT);this.J(this.FB,0);},Boz:function(G){var B;if(
!!this.Am1)this.HP(this.Am1);if(!!this.ADf&&this.ADU()){this.Am1=(C.I1.isPrototypeOf(
B=A._NewObject(this.ADf,0))?B:null);this.Am1.H(BF);this.Am1.Bh(false);this.J(this.
Am1,0);this.Se.Z(false);}else this.Se.Z(true);},A2P:function(G){this.AkW(A._GetAutoObject(
A.Device.Device).Bt);this.Axw(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmK={I:this},0);C.CH._Init.call(this.Se={I:this},
0);this.__proto__=C.Aa1;this.AmK.H(BF);this.AmK.L(A.jb.CK);this.Se.H(AHG);this.Se.
A6(0x11);this.Se.L(A.jb.Text);this.J(this.AmK,0);this.J(this.Se,0);this.Se.S(A.aaL(
A.fl.Km));this.Se.A2(A.aaL(A.fl.Ik));},_Done:function(){this.__proto__=C.D9;this.
AmK._Done();this.Se._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmK._ReInit();this.Se._ReInit();this.Se.S(A.aaL(A.fl.Km));this.Se.
A2(A.aaL(A.fl.Ik));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kh={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bb_],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIJ],0);A.pe([this,this.Bb_],this
);},Dn:function(){return 5;},F$:function(aIndex){return this.AnimalListContentToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Zu(E);},Bb_:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kh;this.Cb.Set(0,0);this.Cb.Set(1,14);this.Cb.Set(2,
1);this.Cb.Set(3,2);this.Cb.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AnimalListContentToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARp={IN:null
,Zc:null,Zl:null,Zi:null,Zm:null,Zd:null,Zg:null,Zj:null,Zk:null,Zf:null,OH:null
,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.BW._Init.call(this.IN={I:this
},0);C.Nb._Init.call(this.Zc={I:this},0);C.Nb._Init.call(this.Zl={I:this},0);C.Nb.
_Init.call(this.Zi={I:this},0);C.Nb._Init.call(this.Zm={I:this},0);C.Nb._Init.call(
this.Zd={I:this},0);C.Nb._Init.call(this.Zg={I:this},0);C.Nb._Init.call(this.Zj={
I:this},0);C.Nb._Init.call(this.Zk={I:this},0);C.Nb._Init.call(this.Zf={I:this},
0);C.OH._Init.call(this.OH={I:this},0);this.__proto__=C.ARp;var B;this.I_(A.aaR(
A.acf.Settings));this.IN.H(Ah2);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Language)
);this.IN.A90(100);this.Zc.H(Atb);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.ACr));this.
Zc.Ne(16);this.Zl.H(Atc);this.Zl.Aj(true);this.Zl.T(A.aaR(A.acf.AG5));this.Zl.Ne(
22);this.Zi.H(Atd);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.Temperature));this.Zi.
Ne(17);this.Zm.H(Ayu);this.Zm.Aj(true);this.Zm.T(A.aaR(A.acf.ACo));this.Zm.Ne(42
);this.Zd.H(AoB);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.Device));this.Zd.Ne(18);
this.Zg.H(AoB);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.Aso));this.Zg.Ne(19);this.
Zj.H(AY_);this.Zj.Aj(true);this.Zj.T(A.aaR(A.acf.LinkTransponder));this.Zj.Ne(89
);this.Zk.H(AY$);this.Zk.Aj(true);this.Zk.T(A.aaR(A.acf.UnlinkTransponder));this.
Zk.Ne(95);this.Zf.H(Aym);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.ACG));this.Zf.Ne(
76);this.J(this.IN,0);this.J(this.Zc,0);this.J(this.Zl,0);this.J(this.Zi,0);this.
J(this.Zm,0);this.J(this.Zd,0);this.J(this.Zg,0);this.J(this.Zj,0);this.J(this.Zk
,0);this.J(this.Zf,0);this.IN.WD(A.aaL(A.fl.Hu));this.IN.WE(A.aaL(A.fl.Hu));this.
IN.As([B=this.OH,B.B7,B.B8]);this.IN.CI(this.OH);this.Zc.AR=[B=this.Zc,B.Nh];this.
Zl.AR=[B=this.Zl,B.Nh];this.Zi.AR=[B=this.Zi,B.Nh];this.Zm.AR=[B=this.Zm,B.Nh];this.
Zd.AR=[B=this.Zd,B.Nh];this.Zg.AR=[B=this.Zg,B.Nh];this.Zj.AR=[B=this.Zj,B.Nh];this.
Zk.AR=[B=this.Zk,B.Nh];this.Zf.AR=[B=this.Zf,B.Nh];},_Done:function(){this.__proto__=
C.Cd;this.IN._Done();this.Zc._Done();this.Zl._Done();this.Zi._Done();this.Zm._Done(
);this.Zd._Done();this.Zg._Done();this.Zj._Done();this.Zk._Done();this.Zf._Done(
);this.OH._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.IN._ReInit();this.Zc._ReInit();this.Zl._ReInit();this.Zi._ReInit();this.Zm.
_ReInit();this.Zd._ReInit();this.Zg._ReInit();this.Zj._ReInit();this.Zk._ReInit(
);this.Zf._ReInit();this.OH._ReInit();this.I_(A.aaR(A.acf.Settings));this.IN.T(A.
aaR(A.acf.Language));this.Zc.T(A.aaR(A.acf.ACr));this.Zl.T(A.aaR(A.acf.AG5));this.
Zi.T(A.aaR(A.acf.Temperature));this.Zm.T(A.aaR(A.acf.ACo));this.Zd.T(A.aaR(A.acf.
Device));this.Zg.T(A.aaR(A.acf.Aso));this.Zj.T(A.aaR(A.acf.LinkTransponder));this.
Zk.T(A.aaR(A.acf.UnlinkTransponder));this.Zf.T(A.aaR(A.acf.ACG));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMl={ET:null,Init:function(aArg){this.ET.Ahs(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dq()).Format(A.aaR(A.acf.AgX)));},AT_:function(
){this.ET.AeY(this.AOP());this.AaE=!this.ET.E2.AY;},Ai0:function(G){this.ET.Ahs(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dq()).Format(
A.aaR(A.acf.AgX)));this.AT_();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dz(A.aaR(A.acf.A7T));else this.Dz(A.aaR(A.acf.Arw));this.Am();},AOP:function(
){var BC=A._NewObject(C.Aqw,0);var Qi=A._GetAutoObject(A.Device.Helper).AN7(A._GetAutoObject(
A.Device.Helper).Dq());var Dw=A._GetAutoObject(A.Device.Helper).Aqs(Qi-(86400*this.
Mv));BC.AnB(AZa);BC.Q2([].concat(0,BC.Gl.slice(1,4)));BC.Q2(A.abN(BC.Gl,(Qi-Dw)|
0));BC.Q2(A.abP(BC.Gl,3400));BC.Q2([].concat(BC.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(
A.Device.Device).Bt.B$();BC.AwO(Gi);BC.Yl();if(Gi>0){var O=0;while(O<Gi){var ApZ=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var Ap0=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6)-Dw;if(ApZ>0)BC.Aqj(Ap0,ApZ);O=O+1;}}return BC;},_Init:function(aArg
){C.K_._Init.call(this,aArg);C.Aq1._Init.call(this.ET={I:this},0);this.__proto__=
C.AMl;this.ET.H(AZb);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE_(C.AGQ);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.ET._Done(
);C.K_._Done.call(this);},_ReInit:function(){C.K_._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMm={Z7:null,OZ:null,AgR:null,AaE:false,Init:function(aArg){this.Z7.Ahs(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dq()).Format(A.aaR(A.acf.
AgX)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgR.Z(this.AaE);},CD:function(
G){var B;C.D9.CD.call(this,G);A.zX([this,this.Ai0],[B=A._GetAutoObject(A.Device.
Helper),B.U1,B.U4],0);A.zV([this,this.Ai0],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0
);A.pe([this,this.Amf],this);},E6:function(G){var B;A.z$([this,this.Ai0],[B=A._GetAutoObject(
A.Device.Helper),B.U1,B.U4],0);A.z9([this,this.Ai0],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId
],0);C.D9.E6.call(this,G);},Amf:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CW(HX);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw
);},Ai0:function(G){this.Z7.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dq()).Format(A.aaR(A.acf.AgX)));this.BnX();this.Am();},BnX:function(
){var B;var Gi=A._GetAutoObject(A.Device.Device).Bt.B$();var K8=A._NewObject(C.Aqw
,0);var Vp=A._NewObject(C.Aqw,0);var Qi=A._GetAutoObject(A.Device.Helper).AN7(A.
_GetAutoObject(A.Device.Helper).Dq());var Dw=A._GetAutoObject(A.Device.Helper).Aqs(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K8.Q2([].concat(0,K8.Gl.slice(1
,4)));K8.Q2(A.abN(K8.Gl,(Qi-Dw)|0));K8.Q2(A.abP(K8.Gl,0));K8.Q2([].concat(K8.Gl.
slice(0,3),150000));K8.AnB(AZc);Vp.Q2([].concat(0,Vp.Gl.slice(1,4)));Vp.Q2(A.abN(
Vp.Gl,(Qi-Dw)|0));Vp.Q2(A.abP(Vp.Gl,0));Vp.Q2([].concat(Vp.Gl.slice(0,3),1500));
Vp.AnB(AZd);K8.AwO(Gi);K8.Yl();Vp.AwO(Gi);Vp.Yl();if(Gi>0){var O=0;var AaG=0;var
AAd=0;var AJ4=0;var A1U=0;var BcN=true;while(O<Gi){var Ama=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaS=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-Dw;if(Ama>
0){K8.Aqj(AaS,Ama);if(!A1U){A1U=AaS;AJ4=Ama;}if(AAd>0){var LD=A._GetAutoObject(A.
Device.Helper).L9(AAd,AaS);if(!!LD){var FW=A._GetAutoObject(A.acj.DV).AlB(LD,AaG
,Ama);if(BcN){Vp.Aqj(AAd,FW);BcN=false;}Vp.Aqj(AaS,FW);}}AaG=Ama;AAd=AaS;}O=O+1;
}var AdM=A.aaR(A.acf.BgC);var FW=A._GetAutoObject(A.Device.Helper).Biw(A1U,AAd,AJ4
,AaG);AdM=A._GetAutoObject(A.Device.Helper).Nk(AdM,P8,FW.toFixed());AdM=A._GetAutoObject(
A.Device.Helper).Nk(AdM,Ax$,A._GetAutoObject(A.acj.DV).AaA());this.OZ.Ij.R(AdM);
}this.AaE=!K8.AY;if(this.AaE)this.OZ.Ij.R(A.jV);(C.OZ.isPrototypeOf(B=this.OZ.ET
)?B:null).Anx([B=A._GetAutoObject(A.Device.Helper).W,B.PN,B.EB]);this.Z7.AeY(K8);
this.OZ.AeY(Vp);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.Aq1._Init.call(
this.Z7={I:this},0);C.Aq1._Init.call(this.OZ={I:this},0);C.AkU._Init.call(this.AgR={
I:this},0);this.__proto__=C.AMm;this.Z7.H(AZe);this.Z7.T(A.aaR(A.acf.Aft));this.
Z7.AE_(C.AMT);this.OZ.H(AZf);this.OZ.T(A.aaR(A.acf.AG_));this.OZ.AE_(C.OZ);this.
AgR.H(UY);this.AgR.R(A.aaR(A.acf.Akp));this.J(this.Z7,0);this.J(this.OZ,0);this.
J(this.AgR,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z7._Done(
);this.OZ._Done();this.AgR._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z7._ReInit();this.OZ._ReInit();this.AgR._ReInit();this.
Z7.T(A.aaR(A.acf.Aft));this.OZ.T(A.aaR(A.acf.AG_));this.AgR.R(A.aaR(A.acf.Akp));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgR)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMj={
Avc:null,Avb:null,Axp:null,AuK:null,VB:null,Abq:null,Abp:null,Aco:null,Afg:null,
Init:function(aArg){this.VB.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dq()).Format(A.aaR(A.acf.AgX)));},A4f:function(G){this.VB.Aca(this.
AuK);this.Abq.Aca(this.Avc);this.Abp.Aca(this.Avb);this.Aco.Aca(this.Axp);},Axo:
function(){var Gi=A._GetAutoObject(A.Device.Device).Bt.B$();this.AuK=A._NewObject(
C.Ajx,0);this.Avc=A._NewObject(C.Ajx,0);this.Avb=A._NewObject(C.Ajx,0);this.Axp=
A._NewObject(C.Ajx,0);if(Gi>0){var O=Gi-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hv(O,6);this.Atu(this.AuK,O,3,D8);this.Atu(this.Avc,O,2,D8);this.
Atu(this.Avb,O,5,D8);this.Atu(this.Axp,O,4,D8);O=O-1;}}this.AaE=!(((this.AuK.AY+
this.Avb.AY)+this.Avc.AY)+this.Axp.AY);A.pe([this,this.A4f],this);},Atu:function(
A0T,Ad,A0S,Qc){var Alx=A._GetAutoObject(A.Device.Device).Bt.I4(Ad,A0S);if(!!Alx)
A0T.Or(Alx,Qc);},Ab_:function(E){if(this.Mv===E)return;C.K_.Ab_.call(this,E);if(
!!this.VB)this.VB.Ab_(E);if(!!this.Abq)this.Abq.Ab_(E);if(!!this.Abp)this.Abp.Ab_(
E);if(!!this.Aco)this.Aco.Ab_(E);this.Afg.Ab_(E);},Ai0:function(G){this.VB.Ahs(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dq()).Format(
A.aaR(A.acf.AgX)));this.Axo();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dz(A.aaR(A.acf.BjV));else this.Dz(A.aaR(A.acf.Anp));this.Am();},_Init:function(
aArg){C.K_._Init.call(this,aArg);C.Ahy._Init.call(this.VB={I:this},0);C.Ahy._Init.
call(this.Abq={I:this},0);C.Ahy._Init.call(this.Abp={I:this},0);C.Ahy._Init.call(
this.Aco={I:this},0);C.AT7._Init.call(this.Afg={I:this},0);this.__proto__=C.AMj;
this.Dz(A.aaR(A.acf.Anp));this.VB.H(AZg);this.VB.R(A.aaR(A.acf.AGd));this.Abq.H(
AZh);this.Abq.R(A.aaR(A.acf.Feed));this.Abp.H(AZi);this.Abp.R(A.aaR(A.acf.AGf));
this.Aco.H(AZj);this.Aco.R(A.aaR(A.acf.AGg));this.Afg.H(AIu);this.J(this.VB,-1);
this.J(this.Abq,-1);this.J(this.Abp,-1);this.J(this.Aco,-1);this.J(this.Afg,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.VB._Done();this.Abq.
_Done();this.Abp._Done();this.Aco._Done();this.Afg._Done();C.K_._Done.call(this);
},_ReInit:function(){C.K_._ReInit.call(this);this.VB._ReInit();this.Abq._ReInit(
);this.Abp._ReInit();this.Aco._ReInit();this.Afg._ReInit();this.Dz(A.aaR(A.acf.Anp
));this.VB.R(A.aaR(A.acf.AGd));this.Abq.R(A.aaR(A.acf.Feed));this.Abp.R(A.aaR(A.
acf.AGf));this.Aco.R(A.aaR(A.acf.AGg));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.Avc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMk={ET:null,WI:null,Aei:null,A2e:false,Init:function(aArg){this.WI.Ahs(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dq()).Format(A.aaR(A.acf.
AgX)));},Bl:function(aSize){C.K_.Bl.call(this,aSize);this.Aei.H(this.ET.M);},Ai:
function(Ae){C.K_.Ai.call(this,Ae);var BBw=!this.AaE&&this.A2e;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aei.R(A.aaR(A.acf.A7T));else this.
Aei.R(A.aaR(A.acf.Arw));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dz(A.aaR(
A.acf.BjW));else this.Dz(A.aaR(A.acf.BjX));this.Aei.Z(BBw);},Ai0:function(G){this.
WI.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dq(
)).Format(A.aaR(A.acf.AgX)));this.AaE=true;this.A2e=true;this.Axo();this.AT_();this.
Am();},AT_:function(){this.ET.AeY(this.AOP());if(!!this.ET.E2&&(this.ET.E2.AY>0)
){this.AaE=false;this.A2e=false;}},AOP:function(){var BC=A._NewObject(C.Aqw,0);var
Qi=A._GetAutoObject(A.Device.Helper).AN7(A._GetAutoObject(A.Device.Helper).Dq());
var Dw=A._GetAutoObject(A.Device.Helper).Aqs(Qi-(86400*this.Mv));BC.AnB(AZk);BC.
Q2([].concat(0,BC.Gl.slice(1,4)));BC.Q2(A.abN(BC.Gl,(Qi-Dw)|0));BC.Q2(A.abP(BC.Gl
,3400));BC.Q2([].concat(BC.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(A.Device.
Device).Bt.B$();BC.AwO(Gi);BC.Yl();if(Gi>0){var O=0;while(O<Gi){var ApZ=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var Ap0=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-
Dw;if(ApZ>0)BC.Aqj(Ap0,ApZ);O=O+1;}}return BC;},BiL:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B$();if(Gi>0){var Bfu=A._NewObject(C.Ajx,0);var O=Gi-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.EU(O,A._GetAutoObject(A.Device.Device
).Bt);var LQ=A._GetAutoObject(A.Device.Helper).AC5(D3);if(!!LQ)Bfu.Or(LQ,D3.Timestamp
);O=O-1;}return Bfu;}else return null;},Axo:function(){this.WI.Aca(this.BiL());if(
!!this.WI.N2&&(this.WI.N2.AY>0))this.AaE=false;},_Init:function(aArg){C.K_._Init.
call(this,aArg);C.Aq1._Init.call(this.ET={I:this},0);C.Ahy._Init.call(this.WI={I:
this},0);C.AkU._Init.call(this.Aei={I:this},0);this.__proto__=C.AMk;this.ET.H(Ah4
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE_(C.AGQ);this.WI.H(AIv);this.WI.
R(A.aaR(A.acf.Rating));this.Aei.H(Ah4);this.J(this.ET,-2);this.J(this.WI,-2);this.
J(this.Aei,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.ET._Done(
);this.WI._Done();this.Aei._Done();C.K_._Done.call(this);},_ReInit:function(){C.
K_._ReInit.call(this);this.ET._ReInit();this.WI._ReInit();this.Aei._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WI.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K_._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WO={Q:null,Gx:null,Gy:null
,QJ:null,AM:0,Gq:0,Gb:100,FF:0,Init:function(aArg){},IY:function(G){this.FF=1;C.
Eg.IY.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QJ.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QJ.Z(this.Gq!==
this.Gb);this.QJ.L(this.V.AQ);if((this.FF===4)||(this.FF===5))this.QJ.L(A.jb.E4);
},Al5:function(G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyM],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qo:function(G){if(this.FF===5)A.pe([this,this.
AyM],this);if(this.FF===4)A.pe([this,this.AyN],this);if(this.FF===1)A.pe(this.AR
,this);this.FF=0;this.Am();},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,
F[1].call(F[0])));},AcW:function(s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcW],E,0);if(!!E)A.pe([this,this.AcW],this);},Al6:function(G){this.FF=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyN],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J$:function(G){this.FF=0;},AyN:function(s){this.J$(s);},J6:function(G){this.
FF=0;},AyM:function(s){this.J6(s);},By:function(E){if(E<this.Gq)E=this.Gq;if(E>this.
Gb)E=this.Gb;if(this.AM===E)return;this.AM=E;this.Am();},Gc:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.Gb===E)return;this.Gb=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BM._Init.call(
this.Gx={I:this},0);A.Core.BM._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QJ={I:this},0);this.__proto__=C.WO;this.H(J0);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(J0);this.V.H(Aah);this.V.R(Lv);this.QJ.H(Ayv);this.J(this.QJ
,0);this.Gx.BN=[this,this.Al5];this.Gx.D1=[this,this.Al5];this.Gy.BN=[this,this.
Al6];this.Gy.D1=[this,this.Al6];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cv(null);this.QJ.Aw(A.aaL(A.ach.AMH));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QJ._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUv={AC:null,CM:null,HN:
null,Bl:function(aSize){C.WO.Bl.call(this,aSize);this.CM.H([this.QJ.M[2],this.QJ.
M[1],this.M[2],this.QJ.M[3]]);},Ai:function(Ae){C.WO.Ai.call(this,Ae);this.CM.AbJ(
0,this.CM.AY-1);if(this.Gq!==this.Gb)this.QJ.Z(true);},Init:function(aArg){},C2:
function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.Q,F[1].call(
F[0]))));},J$:function(G){var F;var BQ=this.AM;C.WO.J$.call(this,G);this.By(this.
AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(
this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BQ=this.AM;C.WO.J6.call(this
,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){var Qu=0;if(this.Gq
!==this.Gb){if(E<this.Gq){E=this.Gb;Qu=-this.CM.GN*this.CM.AY;}if(E>this.Gb){E=this.
Gq;Qu=this.CM.GN;}}C.WO.By.call(this,E);if(!!Qu)this.CM.Gd(Qu);this.CM.GS(this.AM
);this.CM.HI(this.CM.Gt,true,this.HN,null);},Hk:function(G){var B;var Gh=this.CM.
G4;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.F$(Gh));else Cz.
R(Xe);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GN]));},CI:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gc(0);this.EV(this.AC.Dn()-1);this.CM.
Jw(this.AC.Dn());this.CM.AbJ(0,this.CM.AY-1);}},_Init:function(aArg){C.WO._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);this.__proto__=C.AUv;this.H(J0);this.QJ.H(AZl);this.CM.Ae6(40);this.
CM.NZ(C.CH);this.HN.WG(23);this.HN.HO(1);this.HN.Fp(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hk=[this,this.Hk];this.Init(
aArg);},_Done:function(){this.__proto__=C.WO;this.CM._Done();this.HN._Done();C.WO.
_Done.call(this);},_ReInit:function(){C.WO._ReInit.call(this);this.CM._ReInit();
this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WO._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RZ={ALs:0
,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG_));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kt((A._GetAutoObject(A.Device.Converter).Alb(this.ALs
)+CQ)+A._GetAutoObject(A.acj.DV).Af2());else this.Kt(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fx.Ce.call(this,G);this.ALs=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fx._Init.call(this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemWeightGain"
};C.APs={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Device),B.AEr,B.AII],0);},DY:function(G){C.II.DY.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgR(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.II._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APs;this.Bc.DC(
Ate);this.Bc.DM(Ayw);this.Bc.L(A.jb.Bc);this.Dd.H(AZm);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjZ));this.Init(aArg);},_Done:
function(){this.__proto__=C.II;this.Bc._Done();this.Dd._Done();C.II._Done.call(this
);},_ReInit:function(){C.II._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.II._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANt={ZP:null,Ky:null,Mk:null,Timer:null,ACf:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZP.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Bqf),P8,this.ACf.
toFixed()));},CD:function(G){this.Timer.Ar(true);},E6:function(G){this.Timer.Ar(
false);},BAJ:function(G){if(this.ACf>1){this.ACf=this.ACf-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axx();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZP={I:this},0);A.acg.Text.
_Init.call(this.Ky={I:this},0);A.acg.Ap._Init.call(this.Mk={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANt;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZP.H(AZn);this.ZP.KS(true);this.ZP.R(A.jV);this.ZP.L(A.jb.
Text);this.Ky.H(AZo);this.Ky.KS(true);this.Ky.R(A.aaR(A.acf.A48));this.Ky.L(A.jb.
Text);this.Mk.H(AIw);this.J(this.ZP,0);this.J(this.Ky,0);this.J(this.Mk,0);this.
ZP.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Mk.Aw(A.aaL(A.ach.ABM));this.
Timer.Mz=[this,this.BAJ];},_Done:function(){this.__proto__=C.AB;this.ZP._Done();
this.Ky._Done();this.Mk._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZP._ReInit();this.Ky._ReInit();this.Mk._ReInit(
);this.Timer._ReInit();this.Ky.R(A.aaR(A.acf.A48));this.ZP.S(A.aaL(A.fl.Af));this.
Ky.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANa={Ky:null,AmB:null
,QB:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad9.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa7<=10)this.Ky.R(A.aaR(A.acf.Bg4));else this.Ky.R(A.aaR(A.acf.
A49));},_Init:function(aArg){C.Ad9._Init.call(this,aArg);A.acg.Text._Init.call(this.
Ky={I:this},0);A.acg.Ap._Init.call(this.AmB={I:this},0);C.CH._Init.call(this.QB={
I:this},0);this.__proto__=C.ANa;this.SR.H(AZp);this.Mk.H(AZq);this.Ky.H(AZr);this.
Ky.KS(true);this.Ky.L(A.jb.Text);this.AmB.H(AIw);this.QB.H(AZs);this.QB.Z(true);
this.QB.R(A.aaR(A.acf.AT8));this.QB.L(A.jb.Text);this.J(this.Ky,0);this.J(this.AmB
,0);this.J(this.QB,0);this.Ky.S(A.aaL(A.fl.Af));this.AmB.Aw(A.aaL(A.ach.ABM));this.
QB.S(A.aaL(A.fl.Af));this.QB.A2(A.aaL(A.fl.Ak));this.QB.Cv(A.aaL(A.fl.Bi));},_Done:
function(){this.__proto__=C.Ad9;this.Ky._Done();this.AmB._Done();this.QB._Done();
C.Ad9._Done.call(this);},_ReInit:function(){C.Ad9._ReInit.call(this);this.Ky._ReInit(
);this.AmB._ReInit();this.QB._ReInit();this.QB.R(A.aaR(A.acf.AT8));this.Ky.S(A.aaL(
A.fl.Af));this.QB.S(A.aaL(A.fl.Af));this.QB.A2(A.aaL(A.fl.Ak));this.QB.Cv(A.aaL(
A.fl.Bi));this.CP();},_Mark:function(D){var B;C.Ad9._Mark.call(this,D);if((B=this.
Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL8={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AL8;this.
RS.Ar(false);this.RS.Aj(false);this.RS.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVv={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AVv;this.
S6.Ar(false);this.S6.Aj(false);this.S6.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOW={DY:function(G){C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdY(5));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.AOW;},_className:"Application::HeaderControlListFilter"};C.APu={DY:function(G){
C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdY(6));},_Init:
function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.APu;},_className:"Application::HeaderWatchListFilter"
};C.APy={D0:null,M6:null,_Init:function(aArg){C.TX._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M6={I:this},0);this.__proto__=
C.APy;this.D0.H(Aoz);this.D0.R(A.aaR(A.acf.A5F));this.D0.L(A.jb.Text);this.M6.H(
AZt);this.M6.L(A.jb.Text);this.M6.A6(0x12);this.J(this.D0,-2);this.J(this.M6,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bi));this.M6.Aw(A.aaL(A.ach.ADy)
);},_Done:function(){this.__proto__=C.TX;this.D0._Done();this.M6._Done();C.TX._Done.
call(this);},_ReInit:function(){C.TX._ReInit.call(this);this.D0._ReInit();this.M6.
_ReInit();this.D0.R(A.aaR(A.acf.A5F));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.TX._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM7={Ce:function(Ad){C.AjF.Ce.call(this,Ad);if(
!!this.AX){var Oh=this.AX.H3(Ad,8);var BCi=this.AX.Sl(Ad,21);this.Abi.R(A._GetAutoObject(
A.Device.Helper).L9(BCi,A._GetAutoObject(A.Device.Helper).Dq()).toFixed());this.
Sr.Z(Oh);this.Am();}},_Init:function(aArg){C.AjF._Init.call(this,aArg);this.__proto__=
C.AM7;},_className:"Application::CalfListWatchItem"};C.TX={Ag7:null,Ag9:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag7={I:this},
0);A.acg.Ap._Init.call(this.Ag9={I:this},0);this.__proto__=C.TX;this.Ag7.H(AZu);
this.Ag7.L(A.jb.Text);this.Ag7.A6(0x12);this.Ag9.H(AZv);this.Ag9.L(A.jb.Text);this.
Ag9.A6(0x12);this.JV(this.DS,-1);this.J(this.Ag7,0);this.J(this.Ag9,0);this.Ag7.
Aw(A.aaL(A.ach.Am3));this.Ag9.Aw(A.aaL(A.ach.AbG));},_Done:function(){this.__proto__=
C.Dc;this.Ag7._Done();this.Ag9._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag7._ReInit();this.Ag9._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqw={Gl:A.wg,OD:A.wf,Q2:function(E){if(A.aaY(this.Gl,E))return;this.Gl=E;},AnB:
function(E){if(A.aaX(this.OD,E))return;this.OD=E;},_Init:function(aArg){A.acv.ACe.
_Init.call(this,aArg);this.__proto__=C.Aqw;},_className:"Application::BoundCoordList"
};C.AjF={T2:null,Wu:null,T3:null,Wv:null,Sr:null,Zn:null,Abi:null,AP:null,A_:null
,Ea:null,Lr:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T2.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wu.H(this.T2.M);this.A_.H([this.T2.
M[2]-1,0,this.T2.M[2]+1,aSize[1]]);this.T3.H([this.T2.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wv.H(this.T3.M);this.Ea.H([this.T3.M[2]-1,0,this.T3.M[2]+1,aSize[
1]]);this.Sr.H([this.T3.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zn.H(this.Sr.
M);this.Lr.H([this.Sr.M[2]-1,0,this.Sr.M[2]+1,aSize[1]]);this.Abi.H([this.Sr.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K7=this.V.AQ;
this.T2.AES(K7);this.Wu.L(K7);this.T3.AES(K7);this.Wv.L(K7);this.Sr.AES(K7);this.
Zn.L(K7);this.Abi.L(K7);this.Zn.Z(!this.Sr.Fo());},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;var Mf=this.AX.CF(Ad,1);var Ib=this.AX.AmW(Ad,14);var Aum=this.AX.CF(
Ad,5);var LQ=this.AX.I4(Ad,13);this.T(Mf.toFixed());if(!!LQ){this.T2.Z(true);this.
T2.AwE(A._GetAutoObject(A.acj.Assessment).BcV(LQ));this.Wu.Z(false);}else{this.T2.
Z(false);this.Wu.Z(true);}if(Aum>0){this.T3.Z(true);this.T3.AwE(A._GetAutoObject(
A.acj.Assessment).BcV(A._GetAutoObject(A.Device.Converter).AsJ(Ib,Aum)));this.Wv.
Z(false);}else{this.T3.Z(false);this.Wv.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Ki._Init.call(this.T2={I:this},0);A.acg.Text._Init.
call(this.Wu={I:this},0);C.Ki._Init.call(this.T3={I:this},0);A.acg.Text._Init.call(
this.Wv={I:this},0);C.Ki._Init.call(this.Sr={I:this},0);A.acg.Text._Init.call(this.
Zn={I:this},0);A.acg.Text._Init.call(this.Abi={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Lr={I:this},0);this.__proto__=C.AjF;this.
Wu.H(AZw);this.Wu.R(AoA);this.Wv.H(Alk);this.Wv.R(AoA);this.Sr.AwE(A.jb.Rg);this.
Zn.H(Alk);this.Zn.R(Rp);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.J(this.T2,0);this.J(this.Wu,0);this.J(this.T3,0);this.J(
this.Wv,0);this.J(this.Sr,0);this.J(this.Zn,0);this.J(this.Abi,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lr,0);this.Wu.S(A.aaL(A.fl.Af
));this.Wv.S(A.aaL(A.fl.Af));this.Zn.S(A.aaL(A.fl.Af));this.Abi.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T2._Done();this.Wu.
_Done();this.T3._Done();this.Wv._Done();this.Sr._Done();this.Zn._Done();this.Abi.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lr._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T2._ReInit();this.Wu.
_ReInit();this.T3._ReInit();this.Wv._ReInit();this.Sr._ReInit();this.Zn._ReInit(
);this.Abi._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Lr._ReInit();this.Wu.S(A.aaL(A.fl.Af));this.Wv.S(A.aaL(A.fl.Af));this.Zn.S(A.aaL(
A.fl.Af));this.Abi.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pr:null,Anh:null
,E2:null,DR:null,Arp:0,Arq:0,A7a:0,AmN:0,AqJ:0,Init:function(aArg){this.AST(6);this.
ASU(8);this.AS5(A.jb.AV);this.AS6(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BlA([this.DR.Abd[0],(B=this.DR.M)[3]-B[1]]);this.WJ(this);},ASS:function(
E){if(this.Pr===E)return;this.Pr=E;this.DR.ASS(E);},AS6:function(E){if(this.Arq===
E)return;this.Arq=E;this.DR.AS6(E);},AS5:function(E){if(this.Arp===E)return;this.
Arp=E;this.DR.AS5(E);this.DR.BlG(E);},WJ:function(G){var B;while(!!this.DR.Ah)this.
HP(this.DR.Ah);if(!this.E2)return;this.DR.AnB([((this.E2.OD[0]*((B=this.M)[2]-B[
0]))/(this.E2.Gl[2]-this.E2.Gl[0]))|0,this.DR.OD[1]]);this.DR.AnB([this.DR.OD[0]
,((this.E2.OD[1]*((B=this.M)[3]-B[1]))/(this.E2.Gl[3]-this.E2.Gl[1]))|0]);var O;
var Dg=this.DR.OD[1];var D8;var A4q=this.E2.Gl[1];var BjU=(((B=this.DR.M)[3]-B[1
])/this.DR.OD[1])|0;for(O=0;O<BjU;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Anh.Ascent+this.Anh.Descent))+2,((B=this.M)[2]-
B[0])-this.Arq,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A7a);D8.S(this.Anh);D8.
A6(0x24);if(O>0)D8.R(this.AJG(A4q));else D8.R(this.AKd());A4q=A4q+this.E2.OD[1];
this.J(D8,0);}},BF2:function(s){this.WJ(s);},Bmw:function(E){if(this.Anh===E)return;
this.Anh=E;this.Am();},Azl:function(A0z){var B;if(!this.E2||(this.E2.Gl[3]===this.
E2.Gl[1]))return 0;return(((A0z-this.E2.Gl[1])*((B=this.M)[3]-B[1]))/(this.E2.Gl[
3]-this.E2.Gl[1]))|0;},AeY:function(E){if(this.E2===E)return;this.E2=E;if(!E)this.
DR.AeY(null);else{var BC=A._NewObject(A.acv.ACe,0);BC.AwO(this.E2.AD_);BC.Yl();var
Jx=E.AlL;while(!!Jx){BC.Aqj(this.Byj(Jx.P0),this.Byk(Jx.P1));Jx=Jx.Ah;}this.DR.AeY(
BC);this.Am();}},Byj:function(Bww){var B;if(!this.E2||(this.E2.Gl[2]===this.E2.Gl[
0]))return 0;return((Bww-this.E2.Gl[0])*((B=this.M)[2]-B[0]))/(this.E2.Gl[2]-this.
E2.Gl[0]);},Byk:function(A0z){var B;if(!this.E2||(this.E2.Gl[3]===this.E2.Gl[1])
)return 0;return((A0z-this.E2.Gl[1])*((B=this.M)[3]-B[1]))/(this.E2.Gl[3]-this.E2.
Gl[1]);},AJG:function(AoU){return AoU.toFixed();},AKd:function(){return A.jV;},ASU:
function(E){if(this.AmN===E)return;this.AmN=E;this.DR.ASU(E);},AST:function(E){if(
this.AqJ===E)return;this.AqJ=E;this.DR.AST(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIx);this.A7a=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIx);this.DR.BmW(AZx);this.
DR.Blo(A.jb.Rg);this.DR.Bmd(A.jb.Bc);this.DR.Bng(A.jb.Rg);this.J(this.DR,0);this.
Pr=A.aaL(A.acv.ACx);this.Anh=A.aaL(A.fl.Bi);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bmw(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E2)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMT={AJG:function(AoU){return A._GetAutoObject(
A.Device.Converter).Ax0(AoU,0);},AKd:function(){return A._GetAutoObject(A.acj.DV
).Af2();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMT;}
,_className:"Application::BodyWeightGraph"};C.OZ={JI:null,Ex:null,Eh:null,FY:null
,IF:null,IG:null,Init:function(aArg){this.ASS(null);},WJ:function(G){var B;var F;
C.DR.WJ.call(this,G);var AKI=0;var ALx=0;if(!!this.JI){AKI=this.Azl(A._GetAutoObject(
A.Device.Helper).AC4((F=this.JI,F[1].call(F[0]))));ALx=this.Azl(A._GetAutoObject(
A.Device.Helper).AC3((F=this.JI,F[1].call(F[0]))));}this.FY.H(A.abP(this.FY.M,0)
);this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.M)[3]-B[1])-ALx));this.IF.H(
A.abO(this.IF.M,(this.FY.M[3]-((((B=this.IF.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FY.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKI));this.IG.H(A.abO(this.IG.M,(this.Eh.M[3]-((((B=this.IG.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJG:function(AoU){return A._GetAutoObject(A.Device.Converter
).S7(AoU,0,true);},AKd:function(){return A._GetAutoObject(A.acj.DV).AaA();},Anx:
function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([this,this.AiR],this.JI
,0);this.JI=E;if(!!E)A.zX([this,this.AiR],E,0);if(!!E)A.pe([this,this.AiR],this);
},AiR:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.
acg.AK._Init.call(this.FY={I:this},0);A.acg.AK._Init.call(this.IF={I:this},0);A.
acg.AK._Init.call(this.IG={I:this},0);this.__proto__=C.OZ;this.Ex.AZ(0xD);this.Ex.
H(Aad);this.Ex.L(A.jb.Gk);this.Eh.AZ(0xD);this.Eh.H(S_);this.Eh.L(A.jb.H8);this.
FY.AZ(0xD);this.FY.H(AcQ);this.FY.L(A.jb.E4);this.IF.AZ(0xD);this.IF.H(Aaf);this.
IF.Aws(A.jb.H8);this.IF.Awt(A.jb.H8);this.IF.Awv(A.jb.E4);this.IF.Awu(A.jb.E4);this.
IG.AZ(0xD);this.IG.H(Xd);this.IG.Aws(A.jb.Gk);this.IG.Awt(A.jb.Gk);this.IG.Awv(A.
jb.H8);this.IG.Awu(A.jb.H8);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FY
,-1);this.J(this.IF,-1);this.J(this.IG,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FY._Done();this.IF._Done();this.
IG._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FY._ReInit();this.IF._ReInit();this.IG._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.Aq1={ET:null,E2:null,R$:null,Ij:
null,Bc:null,AxH:A.jV,DK:A.jV,AOR:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R$.
H([30,0,aSize[0]-2,30]);this.Ij.H(this.R$.M);if(!!this.ET)this.ET.H([30,this.R$.
M[3],aSize[0],this.Bc.M[1]]);},Ahs:function(E){if(this.AxH===E)return;this.AxH=E;
this.Ij.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R$.R(E);},AE_:
function(E){if(this.AOR===E)return;this.AOR=E;this.Box(this);},Box:function(G){var
B;if(!!this.ET)this.HP(this.ET);this.ET=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOR,0))?B:null);if(!!this.ET){this.ET.H(AZy);this.ET.AeY(this.E2);this.J(this.ET
,0);}},AeY:function(E){if(this.E2===E)return;this.E2=E;if(!!this.ET)this.ET.AeY(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R$={I:this},0);A.acg.Text._Init.call(this.Ij={I:this},0);A.acg.AK._Init.call(this.
Bc={I:this},0);this.__proto__=C.Aq1;this.H(AcR);this.Ar(false);this.R$.H(AZz);this.
R$.A6(0x11);this.R$.R(Lv);this.R$.L(A.jb.Text);this.Ij.A6(0x14);this.Ij.R(A.jV);
this.Ij.L(A.jb.Text);this.Bc.H(AZA);this.Bc.L(A.jb.Bc);this.J(this.R$,0);this.J(
this.Ij,0);this.J(this.Bc,0);this.R$.S(A.aaL(A.fl.Ak));this.Ij.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R$._Done();this.
Ij._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R$._ReInit();this.Ij._ReInit();this.Bc._ReInit();this.
R$.S(A.aaL(A.fl.Ak));this.Ij.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
E2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMs={AgA:null,GS:function(E
){var F;C.Ge.GS.call(this,E);if(!!this.AgA)(F=this.AgA,F[2].call(F[0],E));},A9k:
function(E){if(A.aaZ(this.AgA,E))return;if(!!this.AgA)A.z$([this,this.A2Q],this.
AgA,0);this.AgA=E;if(!!E)A.zX([this,this.A2Q],E,0);if(!!E)A.pe([this,this.A2Q],this
);},A2Q:function(G){var F;if(!this.AgA)return;(F=this.AgA,F[2].call(F[0],this.FK(
)));},_Init:function(aArg){C.Ge._Init.call(this,aArg);this.__proto__=C.AMs;},_Mark:
function(D){var B;C.Ge._Mark.call(this,D);if((B=this.AgA)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT7={Re:null
,PW:null,X1:null,X2:null,Mv:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Re.H(A.abI(this.Re.M,(((B=this.M)[3]-B[1])/2)|
0));this.PW.H(A.abI(this.PW.M,(((B=this.M)[3]-B[1])/2)|0));this.Re.H(A.abO(this.
Re.M,(((B=this.M)[3]-B[1])/2)|0));this.PW.H(A.abO(this.PW.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Re.R(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BjO),P8,this.Mv.toFixed()));},Ab_:function(E){if(
this.Mv===E)return;this.Mv=E;this.BBj(this);},BBj:function(G){var B;var AJN=(((B=
this.M)[2]-B[0])/this.Mv)|0;this.X1.H(A.abM(this.X1.M,(((B=this.M)[2]-B[0])-(this.
Mv*AJN))+(((AJN/2)-(((B=this.X1.M)[2]-B[0])/2))|0)));this.X2.H(A.abM(this.X2.M,(((
B=this.M)[2]-B[0])-AJN)+(((AJN/2)-(((B=this.X2.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Re={
I:this},0);A.acg.Text._Init.call(this.PW={I:this},0);A.acg.Text._Init.call(this.
X1={I:this},0);A.acg.Text._Init.call(this.X2={I:this},0);this.__proto__=C.AT7;this.
H(BF);this.Re.H(AZB);this.Re.Hl(5);this.Re.A6(0x11);this.Re.L(A.jb.Text);this.PW.
H(AZC);this.PW.Hl(5);this.PW.A6(0x14);this.PW.R(A.aaR(A.acf.AhQ));this.PW.L(A.jb.
Text);this.X1.H(AZD);this.X1.R(A$R);this.X1.L(A.jb.Text);this.X2.H(Bql);this.X2.
R(A$R);this.X2.L(A.jb.Text);this.J(this.Re,0);this.J(this.PW,0);this.J(this.X1,0
);this.J(this.X2,0);this.Re.S(A.aaL(A.fl.Ak));this.PW.S(A.aaL(A.fl.Ak));this.X1.
S(A.aaL(A.fl.Hu));this.X2.S(A.aaL(A.fl.Hu));},_Done:function(){this.__proto__=A.
Core.P;this.Re._Done();this.PW._Done();this.X1._Done();this.X2._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Re._ReInit(
);this.PW._ReInit();this.X1._ReInit();this.X2._ReInit();this.PW.R(A.aaR(A.acf.AhQ
));this.Re.S(A.aaL(A.fl.Ak));this.PW.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Re)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K_={V6:null,AjL:null,KM:A.jV,Mv:0,AaE:false,Init:function(aArg){var A1x=A._NewObject(
C.Kj,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RP()<A1x.
C4(O))A1x.Ano=O+1;this.V6.CI(A1x);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjL.
Z(this.AaE);if(this.AaE)this.Bb(null);else this.Bb(this.V6);},CD:function(G){var
B;var F;C.D9.CD.call(this,G);if(!(F=this.V6.Q,F[1].call(F[0])))(F=this.V6.Q,F[2].
call(F[0],this.V6.AC.C4(0)));A.zX([this,this.AIY],[B=A._GetAutoObject(A.Device.Helper
),B.U1,B.U4],0);A.zV([this,this.AIY],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);A.pe([this
,this.Amf],this);},E6:function(G){var B;A.z$([this,this.AIY],[B=A._GetAutoObject(
A.Device.Helper),B.U1,B.U4],0);A.z9([this,this.AIY],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId
],0);C.D9.E6.call(this,G);},Zy:function(E){if(A.aa0(this.AR,E))return;C.D9.Zy.call(
this,E);this.V6.AR=E;},Ab_:function(E){if(this.Mv===E)return;this.Mv=E;A.pe([this
,this.Amf],this);},Bv6:function(Aq){this.Ab_(Aq);},Ai0:function(G){},AIY:function(
s){this.Ai0(s);},Dz:function(E){if(this.KM===E)return;this.KM=E;this.AjL.R(E);},
Amf:function(G){var Fw=A._NewObject(A.Device.Filter,0);var Azv=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azv.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhQ()-((this.Mv-1)*86400))-1,true);Fw.CW(Azv);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CW(HX);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fw);},BkL:function(){return this.Mv;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUv._Init.call(this.V6={I:this},0);C.AkU._Init.call(
this.AjL={I:this},0);this.__proto__=C.K_;this.V6.H(BF);this.AjL.H(UY);this.J(this.
V6,0);this.J(this.AjL,0);this.V6.As([this,this.BkL,this.Bv6]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V6._Done();this.AjL._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V6._ReInit();this.AjL.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANA={Wb:null,YS:null,RatingMode:null,PC:null,_Init:
function(aArg){C.Cd._Init.call(this,aArg);C.Nb._Init.call(this.Wb={I:this},0);C.
BW._Init.call(this.YS={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iq._Init.call(this.PC={I:this},0);this.__proto__=C.ANA;var B;this.Hh.R(A.
aaR(A.acf.ACo));this.I_(A.aaR(A.acf.A5y));this.Wb.H(AIy);this.Wb.Aj(true);this.Wb.
T(A.aaR(A.acf.AsU));this.Wb.Bh(true);this.Wb.Ne(23);this.YS.H(Bqm);this.YS.Aj(true
);this.YS.T(A.aaR(A.acf.A_N));this.YS.Bh(false);this.PC.H(Bqn);this.PC.Aj(true);
this.PC.T(A.aaR(A.acf.A5v));this.PC.Bh(true);this.PC.Gc(3);this.PC.EV(14);this.PC.
IO(A.aaR(A.acf.Kj)+AIz);this.PC.I$(A.aaR(A.acf.GK)+AIz);this.J(this.Wb,0);this.J(
this.YS,0);this.J(this.PC,0);this.Wb.AR=[B=this.Wb,B.Nh];this.YS.As([B=this.RatingMode
,B.B7,B.B8]);this.YS.CI(this.RatingMode);this.PC.As([B=A._GetAutoObject(A.Device.
Device),B.A8p,B.BaU]);},_Done:function(){this.__proto__=C.Cd;this.Wb._Done();this.
YS._Done();this.RatingMode._Done();this.PC._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.Wb._ReInit();this.YS._ReInit();this.RatingMode.
_ReInit();this.PC._ReInit();this.Hh.R(A.aaR(A.acf.ACo));this.I_(A.aaR(A.acf.A5y)
);this.Wb.T(A.aaR(A.acf.AsU));this.YS.T(A.aaR(A.acf.A_N));this.PC.T(A.aaR(A.acf.
A5v));this.PC.IO(A.aaR(A.acf.Kj)+AIz);this.PC.I$(A.aaR(A.acf.GK)+AIz);},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au3={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hl(10);},Ai:function(
Ae){var B;C.Cp.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FS=A.jb.Ad$;var GW=A.jb.Bm;if(this.Hj){FS=A.jb.Bm;GW=A.jb.
Text;}if(!Hd){this.Background.L(FS);this.V.L(A.jb.CK);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FS);this.V.L(GW);}this.LI=Hd;this.KE=Fu;this.Qp=GE;
},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Au3;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cp._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADa={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,
B.PN,B.EB],0);A.pe([this,this.DY],this);},De:function(E){C.BR.De.call(this,E);this.
Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC9));break;case 1:this.Ap.Aw(A.aaL(A.ach.APc));break;
case 2:this.Ap.Aw(A.aaL(A.ach.APe));break;default:A.ab5("%s%e",AZE,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADa;this.Ap.H(AZF);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC9));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADb={Ap:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Helper).W,B.PN,B.EB],0);A.pe([this,this.DY],this);},De:function(E){C.BR.
De.call(this,E);this.Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC_));break;case 1:this.Ap.Aw(A.aaL(
A.ach.APd));break;case 2:this.Ap.Aw(A.aaL(A.ach.APf));break;default:A.ab5("%s%e"
,AZE,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADb;
this.Ap.H(AZF);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC_));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fx={BT:null,AxV:A.jV,De:function(E){C.JH.De.call(
this,E);this.BT.L(E);},Kt:function(E){if(this.AxV===E)return;this.AxV=E;this.BT.
R(E);},_Init:function(aArg){C.JH._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Fx;this.BT.AZ(0x34);this.BT.H(Ayt);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cv(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.JH;this.
BT._Done();C.JH._Done.call(this);},_ReInit:function(){C.JH._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cv(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.JH._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOA={Wz:function(G){var B;this.Agu();this.AL5(A.aaR(A.acf.BiZ),[this,this.Bnv],[
B=A._GetAutoObject(A.Device.Device),B.A8q,B.BaV]);A._GetAutoObject(C.BS).FX();this.
I0(A.aaR(A.acf.AU8),[this,this.ATy],5);this.I0(A.aaR(A.acf.AU6),[this,this.ATx],
7);this.I0(A.aaR(A.acf.An2),[this,this.AwR],2);this.I0(A.aaR(A.acf.AdT),[this,this.
AEO],1);this.I0(A.aaR(A.acf.Auz),[this,this.AEI],0);A._GetAutoObject(C.BS).FX();
A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dt(6);},DE:function(G){},Abv:function(){return C.AB2;},Abw:function(
){return C.ADi;},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6y());},HQ:function(G){C.GZ.HQ.call(this,G);if(this.Akl()===false
){this.N.Ct(A.aaL(A.ach.AbG));this.N.Cl=[this,this.A50];this.N.FN(A.jV);}this.N.
ON(false);this.N.OO(false);},Agg:function(){A._GetAutoObject(C.A$).Cf(44);},Bnv:
function(G){A._GetAutoObject(A.Device.Device).AwH(!A._GetAutoObject(A.Device.Device
).AqW);this.An_(this);},An_:function(G){var Be=A._GetAutoObject(A.Device.Device).
An.Filter.E$();var Av=Be.DL(30,3);if(!!Av)Be.Ni(Av);if(A._GetAutoObject(A.Device.
Device).AqW){var AAc=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2o=A._GetAutoObject(
A.Device.Helper).Dq()-21600;AAc.Initialize(30,3,A2o,true);Be.CW(AAc);}A._GetAutoObject(
A.Device.Device).An.Bk(Be);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.
__proto__=C.AOA;var B;this.Dr(C.AO_);this.Dz(A.aaR(A.acf.A7Q));this.AwM([B=A._GetAutoObject(
A.Device.Device),B.A8o,B.BaT]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7Q));},_className:"Application::FreshCowListScreen"};C.AOz={_Init:
function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AOz;this.Lc.Ar(false);
this.Lc.Aj(false);this.Lc.Z(false);this.Jp.Ar(false);this.Jp.Aj(false);this.Jp.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.AO_={DY:function(
G){C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdY(7));
},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AO_;},_className:
"Application::HeaderFreshCowListFilter"};C.ADi={Jv:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jv={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADi;this.A9F(1);this.Jv.H(Bqo);this.Jv.R((A.
aaR(A.acf.Calving)+Aak)+A.aaR(A.acf.A$n));this.Jv.L(A.jb.Text);this.D0.H(Bqp);this.
D0.R(A.aaR(A.acf.AD2));this.D0.L(A.jb.Text);this.J(this.Jv,0);this.J(this.D0,0);
this.Jv.S(A.aaL(A.fl.Ak));this.Jv.A2(A.aaL(A.fl.Bi));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Dc;this.Jv._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jv._ReInit();this.D0._ReInit();this.Jv.R((A.aaR(A.acf.Calving)+Aak)+A.aaR(A.acf.
A$n));this.D0.R(A.aaR(A.acf.AD2));this.Jv.S(A.aaL(A.fl.Ak));this.Jv.A2(A.aaL(A.fl.
Bi));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.AB2={AGR:null,KP:null,UE:null,AP:null,A_:null,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UE.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.UE.M[2]-1,0,this.UE.M[2]+1,aSize[1]]);this.KP.H([this.UE.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.
UE.De(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var
Iy=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,1);var A2n=this.AX.CF(Ad,29);var AlD=this.
AX.Hv(Ad,28);this.T(Mf.toFixed());this.KP.R(A2n.toFixed());this.UE.Ab_(A._GetAutoObject(
A.Device.Device).AqV+1);this.UE.Bm_(AlD);this.UE.R(A._GetAutoObject(A.acj.KK).AjQ(
AlD));A._GetAutoObject(A.Device.Device).SP(Ad);this.Ap9(Iy);this.Axo();A._GetAutoObject(
A.Device.Device).Bt.Bk(null);this.Am();}},A4f:function(G){this.UE.Aca(this.AGR);
},Axo:function(){var Gi=A._GetAutoObject(A.Device.Device).Bt.B$();this.AGR=A._NewObject(
C.Ajx,0);if(Gi>0){var O=Gi-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6);this.Atu(this.AGR,O,9,D8);O=O-1;}}A.pe([this,this.A4f],this);},Atu:
function(A0T,Ad,A0S,Qc){var Alx=A._GetAutoObject(A.Device.Device).Bt.I4(Ad,A0S);
if(!!Alx)A0T.Or(Alx,Qc);},Ap9:function(Ac7){var Fw=A._NewObject(A.Device.Filter,
0);var Azv=A._NewObject(A.Device.UInt32FilterCriterion,0);Azv.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZU(A._GetAutoObject(A.Device.Device).AqV)-1,true);Fw.CW(Azv);var
HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,Ac7,true);Fw.
CW(HX);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KP={I:this},0);C.AT2._Init.call(this.
UE={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);this.__proto__=C.AB2;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KP,0);this.J(this.UE,0);this.J(this.AP,0);this.J(this.A_,0);this.KP.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KP._Done();
this.UE._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KP._ReInit();this.UE._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.AT2={AUJ:0,Init:function(aArg
){},AOH:function(){return A._GetAutoObject(A.Device.Helper).Aqs(this.AUJ);},AOJ:
function(){return this.AOH()+(this.Mv*86400);},Bm_:function(E){if(this.AUJ===E)return;
this.AUJ=E;A.pe([this,this.WJ],this);},_Init:function(aArg){C.Ahy._Init.call(this
,aArg);this.__proto__=C.AT2;this.Bc.H(Bqq);this.Bm7(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dn:function(){if(this.K&&this.K.Dn)return this.K.Dn.apply(this,arguments);else
return C.FactoryResetScope.Bt6.apply(this,arguments);},Bt6:function(){return 2;}
,F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BH(this.C4(aIndex));},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cb.Set(0,0);this.Cb.Set(1,1);var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cn;this.FactoryResetScopeToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgg:false,Init:function(
aArg){this.Bgg=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.Bdn){A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);if(this.Bgg)A._GetAutoObject(A.Device.Device).A7(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A7(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.AR3={Wz:function(G){this.Agu();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.Settings
),[this,this.A3o]);A._GetAutoObject(C.BS).FX();this.AL3();A._GetAutoObject(C.BS).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.
BS).NC(A.aaR(A.acf.ARh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(
6);},DE:function(G){},Abv:function(){return C.Aqx;},Abw:function(){return C.Aq5;
},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).ACX());},HQ:function(G){C.RN.HQ.call(this,G);if(this.Akl()===false){this.
N.Ct(A.aaL(A.ach.Avu));this.N.Cl=[this,this.ANT];this.N.FN(A.jV);}this.N.ON(false
);this.N.OO(false);},Agg:function(){A._GetAutoObject(C.A$).Cf(47);},A3o:function(
G){A._GetAutoObject(A.Device.Device).Dt(0);A._GetAutoObject(C.A$).Cf(89);},_Init:
function(aArg){C.RN._Init.call(this,aArg);this.__proto__=C.AR3;this.Dr(C.ADc);this.
Dz(A.aaR(A.acf.A7M));this.AS7(A._GetAutoObject(C.Av4));},_ReInit:function(){C.RN.
_ReInit.call(this);this.Dz(A.aaR(A.acf.A7M));},_className:"Application::NoTransponderListScreen"
};C.AR2={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AR2;this.
KW.Ar(false);this.KW.Aj(false);this.KW.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ADc={DY:function(G){C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdY(8));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.ADc;},_className:"Application::HeaderNoTransponderListFilter"};C.ABL={AuP:null
,F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuP.BH(aIndex
);},_Init:function(aArg){C.Gf._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuP={I:this},0);this.__proto__=C.ABL;},_Done:function(){this.__proto__=
C.Gf;this.AuP._Done();C.Gf._Done.call(this);},_ReInit:function(){C.Gf._ReInit.call(
this);this.AuP._ReInit();},_Mark:function(D){var B;C.Gf._Mark.call(this,D);if((B=
this.AuP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALY={Cp:null,Ad1:null,Init:function(aArg){this.Bb(this.Cp);},KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.XF];this.Bx.Cl=null;
this.Bx.Cm=[this,this.A21];this.Bx.CV(A.jV);this.Bx.Ct(null);this.Bx.CY(A.aaL(A.
ach.Aey));}return this.Bx;},AAs:function(G){var Aa=(C.Ajn.isPrototypeOf(G)?G:null
);if(Aa===this.Cp)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad1)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$S);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ajn._Init.call(this.
Cp={I:this},0);C.Ajn._Init.call(this.Ad1={I:this},0);this.__proto__=C.ALY;this.H(
Ro);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.H(IT);this.Cp.T(A.aaR(A.acf.
AEa));this.Ad1.H(P9);this.Ad1.T(A.aaR(A.acf.Tw));this.J(this.Cp,0);this.J(this.Ad1
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cp.AR=[this,this.AAs];this.Ad1.AR=[this,this.
AAs];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Cp._Done();this.
Ad1._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Cp._ReInit();this.Ad1._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.
T(A.aaR(A.acf.AEa));this.Ad1.T(A.aaR(A.acf.Tw));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFm={Undefined:0,BFk:1,BFl:2,IdScanned:3,BEh:4,BDj:5,BD3:6};C.AMa={A_9:function(
){A._GetAutoObject(A.Device.Device).A7(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeV]);},_Init:function(aArg){C.AuF._Init.call(
this,aArg);this.__proto__=C.AMa;this.Gf.As(1);this.ATb(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aes={VV:null,VX:null,VY:null,Ag1:null,Ag2:null,Ag3:null,CC:null,Cl:null,Cm:null
,An3:A.jV,An4:A.jV,An5:A.jV,Ara:0,Arb:0,Arc:0,Ahi:0,ZH:false,ZG:false,Asq:false,
AsE:false,AsD:false,AjD:function(Ff){this.CC=Ff.CC;this.Cl=Ff.Cl;this.Cm=Ff.Cm;this.
An3=Ff.An3;this.An4=Ff.An4;this.An5=Ff.An5;this.Ahi=Ff.Ahi;this.VV=Ff.VV;this.VX=
Ff.VX;this.VY=Ff.VY;this.Ag1=Ff.Ag1;this.Ag2=Ff.Ag2;this.Ag3=Ff.Ag3;this.AsD=Ff.
AsD;this.AsE=Ff.AsE;this.Asq=Ff.Asq;this.ZG=Ff.ZG;this.ZH=Ff.ZH;this.Ara=Ff.Ara;
this.Arb=Ff.Arb;this.Arc=Ff.Arc;},AkT:function(Ff){Ff.CC=this.CC;Ff.Cl=this.Cl;Ff.
Cm=this.Cm;Ff.Hy(this.An3);Ff.FN(this.An4);Ff.CV(this.An5);Ff.AFe(this.Ahi);Ff.AE7(
this.VV);Ff.ArS(this.VX);Ff.AnA(this.VY);Ff.CY(this.Ag1);Ff.Ct(this.Ag2);Ff.C6(this.
Ag3);Ff.ON(this.AsD);Ff.OO(this.AsE);Ff.Asq=this.Asq;Ff.ZG=this.ZG;Ff.ZH=this.ZH;
Ff.Bmf(this.Ara);Ff.AS1(this.Arb);Ff.A9Q(this.Arc);},_Init:function(aArg){this.__proto__=
C.Aes;this.VV=A.aaL(A.fl.Ak);this.VX=A.aaL(A.fl.Ak);this.VY=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VV=A.aaL(
A.fl.Ak);this.VX=A.aaL(A.fl.Ak);this.VY=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsA._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADa);},_className:"Application::NewAnimalSetTransponderScreen"};C.C7={Abe:null
,CountryToString:null,Dn:function(){return 40;},C4:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lt(aIndex);},DU:function(A8){return A8;
},HK:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
Abe)(F=this.Abe,F[2].call(F[0],E));},A1p:function(G){var F;if(!!this.Abe)this.Q=(
F=this.Abe,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},AEZ:
function(E){if(A.aaZ(this.Abe,E))return;if(!!this.Abe)A.z$([this,this.A1p],this.
Abe,0);this.Abe=E;if(!!this.Abe)A.zX([this,this.A1p],this.Abe,0);A.pe([this,this.
A1p],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C7;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abe)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OY={AC:null,Q:null,Background:null,Io:null,In:null,MZ:
0,AM:0,Gq:0,Gb:0,Agd:function(G){this.J$(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(IA){this.Background.
L(A.jb.AV);this.Ds(256);}else{this.Background.L(this.MZ);this.Ds(256);}},Agc:function(
G){this.J6(this);},CI:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3m],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3m],E,0);if(!!E)A.pe([this
,this.A3m],this);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Am();},J$:
function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J6:function(
G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(
E){if(E<this.Gq)E=this.Gb;if(E>this.Gb)E=this.Gq;if(this.AM===E)return;this.AM=E;
this.Am();},Gc:function(E){if(this.Gq===E)return;this.Gq=E;this.Am();},EV:function(
E){if(this.Gb===E)return;this.Gb=E;this.Am();},C2:function(G){var F;if(!!this.Q)
this.By(this.AC.DU((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A3m:function(G){var F;if(!!this.
AC){this.Gc(0);this.EV(this.AC.HK());if(!!this.Q)this.By(this.AC.DU((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BM._Init.call(this.Io={
I:this},0);A.Core.BM._Init.call(this.In={I:this},0);this.__proto__=C.OY;this.H(A$T
);this.Background.H(Atf);this.Io.Filter=4;this.In.Filter=5;this.MZ=A.jb.CK;this.
J(this.Background,0);this.Io.BN=[this,this.Agd];this.Io.D1=[this,this.Agd];this.
In.BN=[this,this.Agc];this.In.D1=[this,this.Agc];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Io._Done();this.In._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Io._ReInit();this.In._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RU={A1h:A.jV,Ai:function(
Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5h));this.Kt(this.A1h);},Ce:function(
G){C.Fx.Ce.call(this,G);var AlD=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlD)this.A1h=Xe;else this.A1h=A._GetAutoObject(A.acj.KK).AjQ(AlD);this.Am();
},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RU;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RW={A2m:0,Ai:function(Ae){C.Fx.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARf));if(this.A2m>0)this.Kt(this.A2m.toFixed());else
this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.Ce.call(this,G);this.A2m=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fx._Init.call(
this,aArg);this.__proto__=C.RW;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dn:function(){return 5;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.AkB(E);},A1J:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B7,
this.B8],0);},LZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1J],[B=this.Animal,B.ASk,B.AkB],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1J],[B=this.Animal,B.ASk,B.AkB],0);A.pe([this,this.A1J],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dn:function(){return 99;},C4:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BH(aIndex);},DU:function(A8){return A8;
},HK:function(){return 98;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal
)this.Animal.NY(E);},A1f:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B7,this.B8],0);},LZ:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1f],[B=this.Animal,B.Av8,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1f],[B=this.Animal,B.Av8,B.NY],0);A.pe([
this,this.A1f],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARA={V9:null,YQ:null,AeK:null,Init:function(
aArg){this.Bb(this.V9);},Adt:function(G){var Aa=(C.Cp.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YQ)this.BxP();else if(Aa===this.V9)this.BAy(this);else throw new
Error(Aye);A._GetAutoObject(A.Device.Device).Dt(0);},BAy:function(G){var B;var F;
var Vl=(C.Amv.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vl){A.ab5("%s",Bqr);return;}Vl.AKy(this);},BxP:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A7(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mn._Init.call(this.V9={I:this},0);C.Mn._Init.call(this.YQ={
I:this},0);C.VP._Init.call(this.AeK={I:this},0);this.__proto__=C.ARA;var B;this.
H(AcR);this.V9.H(P9);this.V9.Ar(true);this.V9.T(A.aaR(A.acf.A_P));this.V9.Bh(true
);this.YQ.H(IT);this.YQ.Ar(true);this.YQ.T(A.aaR(A.acf.A4F));this.YQ.Bh(true);this.
AeK.H(BF);this.AeK.T(A.aaR(A.acf.ACL));this.AeK.Bh(true);this.J(this.V9,0);this.
J(this.YQ,0);this.J(this.AeK,0);this.V9.AR=[this,this.Adt];this.YQ.AR=[this,this.
Adt];this.AeK.ASP([B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ath]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V9._Done();this.YQ._Done(
);this.AeK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V9._ReInit();this.YQ._ReInit();this.AeK._ReInit();this.V9.
T(A.aaR(A.acf.A_P));this.YQ.T(A.aaR(A.acf.A4F));this.AeK.T(A.aaR(A.acf.ACL));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VP={
Ai:function(Ae){C.Ua.Ai.call(this,Ae);var FS=A.jb.CK;var GW=A.jb.Text;if(this.Hj
){FS=A.jb.Text;GW=A.jb.Bm;}if(!this.LI){this.Background.L(FS);this.V.L(A.jb.Am5);
}else if(this.Qp){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.
L(GW);}if(this.AmD){this.Ml.Cw(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cw(0);this.Ml.
L(A.jb.Bm);}},_Init:function(aArg){C.Ua._Init.call(this,aArg);this.__proto__=C.VP;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvX={C8:null,A1:null,AF:
null,Akm:null,QU:null,EM:null,ARS:Lv,Bl:function(aSize){C.Cp.Bl.call(this,aSize);
var FS=A.jb.CK;var GW=A.jb.Text;if(this.Hj){FS=A.jb.Bm;GW=A.jb.Text;}this.Background.
L(FS);this.V.L(GW);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Cp.Ai.call(this
,Ae);this.Akm.L(this.V.AQ);this.QU.L(this.V.AQ);this.QU.R(Bqs);this.T(((this.ARS+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak9(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2r=this.QU.Aff([(this.QU.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3L=this.QU.Aff([this.
QU.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABd=this.QU.Db();this.EM.H([
A2r[0]-1,ABd[1],A3L[0]+1,ABd[3]]);}else this.EM.H(this.QU.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Akm.Aw(E);},OL:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaK],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaK],E,0);if(!!E)A.pe([this,this.AaK],this);},PO:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaL],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaL],E,0);if(!!E)A.pe([this,this.AaL],this);},AaL:function(G){this.Am(
);},AaK:function(G){this.Am();},Ar4:function(E){if(this.ARS===E)return;this.ARS=
E;this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akm={I:this},0);A.acg.Text._Init.call(this.QU={I:this},0);A.acg.BU._Init.call(
this.EM={I:this},0);this.__proto__=C.AvX;this.H(J0);this.V.A6(0x11);this.Akm.H(P7
);this.QU.H(Bqt);this.EM.H(Bqu);this.EM.Ng(2);this.EM.L(A.jb.E4);this.J(this.Akm
,0);this.J(this.QU,0);this.J(this.EM,0);this.QU.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cp;this.Akm._Done();this.QU._Done();this.EM._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Akm._ReInit();this.
QU._ReInit();this.EM._ReInit();this.QU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cp._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATX:0,Init:
function(aArg){var B;A.zX([this,this.Bed],[B=A._GetAutoObject(A.Device.Device),B.
AEr,B.AII],0);A.pe([this,this.Bed],this);},HQ:function(G){C.Tz.HQ.call(this,G);if(
this.AjU)this.N.Ct(A.aaL(A.ach.AD));else this.N.Ct(A.aaL(A.ach.ANb));this.N.C6(A.
aaL(A.ach.Options));this.N.FN(A.jV);this.N.CV(A.jV);this.N.Cl=[this,this.A_y];this.
N.Cm=[this,this.Wz];this.N.ArS(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));},MU:function(
G){this.Bez(this);},Ol:function(G){this.BAt(this);},AdQ:function(Aih,Aii,BwT){A.
_GetAutoObject(C.BS).ABD(Aih,Aii,[this,this.A8K,this.ATe],BwT);},Wz:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjU){A._GetAutoObject(C.BS).
Qy(A.aaR(A.acf.BhG),[this,this.Bnr]);A._GetAutoObject(C.BS).FX();}this.AdQ(A.aaR(
A.acf.Rating),[this,this.ATC],3);this.AdQ(A.aaR(A.acf.Aft),[this,this.ATE],2);this.
AdQ(A.aaR(A.acf.Temperature),[this,this.ATD],1);this.AdQ(A.aaR(A.acf.AdT),[this,
this.Bno],0);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BhK
));A._GetAutoObject(A.Device.Device).Dt(6);},ATe:function(E){if(this.ATX===E)return;
this.ATX=E;A.abo([this,this.A8K,this.ATe],0);},Bed:function(G){this.ATe(A._GetAutoObject(
A.Device.Device).D9);},A8K:function(){return this.ATX;},_Init:function(aArg){C.Tz.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vy:null
,Init:function(aArg){var B;A.zX([this,this.Af_],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);A.pe([this,this.Bgl],this);A.pe([this,this.Q8],this);},CD:function(
G){C.Tz.CD.call(this,G);A.pe([this,this.Bgr],this);},AGF:function(G){C.Tz.AGF.call(
this,G);if(!!this.Le)this.AhB(this.Le,this.Vy);},HQ:function(G){C.Tz.HQ.call(this
,G);this.N.Ct(A.aaL(A.ach.AQP));this.N.C6(A.aaL(A.ach.AQQ));if(this.AjU)this.N.AS1(
0);else this.N.AS1(1);this.N.A9Q(A._GetAutoObject(A.Device.Converter).BgQ(A._GetAutoObject(
A.Device.Device).D9));this.N.FN(A.jV);this.N.CV(A.jV);this.N.Cl=[this,this.Ble];
this.N.Cm=[this,this.Bnt];this.N.ArS(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QG()){this.N.I6.Ds(100);this.N.Cl=null;
}else this.N.I6.Ds(255);if(!A._GetAutoObject(A.Device.Device).An.B$()){this.N.Ld.
Ds(100);this.N.Cm=null;}else this.N.Ld.Ds(255);if(A._GetAutoObject(A.Device.Device
).An.B$()<=1){this.N.TZ.Ds(100);this.N.T0.Ds(100);}else{this.N.TZ.Ds(255);this.N.
T0.Ds(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).An.B$()<=1)return;
var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;if(LC>=A._GetAutoObject(A.
Device.Device).An.B$())LC=0;A._GetAutoObject(A.Device.Helper).G6(LC);},Ol:function(
G){if(A._GetAutoObject(A.Device.Device).An.B$()<=1)return;var LC=A._GetAutoObject(
A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(A.Device.Device).An.B$(
)-1;A._GetAutoObject(A.Device.Helper).G6(LC);},Af9:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cf(94);},Ble:function(G){A._GetAutoObject(
A.Device.Device).Dt(10);},Bnt:function(G){this.Bez(this);},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mq());A.pe([this,this.Bgr
],this);},Bgl:function(G){if(!A._GetAutoObject(A.Device.Device).An.B$()){this.Vy.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QG()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vy.R(A.aaR(A.acf.AEi));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACY(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vy.R(A.aaR(A.acf.AN3));else this.Vy.R(A.aaR(
A.acf.AN2));}else this.Vy.R(A.aaR(A.acf.ARZ));}else this.Vy.Z(false);},Bgr:function(
G){var BBq=A._GetAutoObject(A.Device.Helper).W.Id;var A3O=A._GetAutoObject(A.Device.
Device).An.LT(0,BBq);if(!A._GetAutoObject(A.Device.Device).An.B$())A._GetAutoObject(
A.Device.Helper).G6(-1);else if(A3O<0)A._GetAutoObject(A.Device.Helper).G6(0);},
Af_:function(G){this.Bgl(this);this.HQ(this);},_Init:function(aArg){C.Tz._Init.call(
this,aArg);C.AkU._Init.call(this.Vy={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APr);this.Vy.H(Fe);this.J(this.Vy,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tz;this.Vy._Done();C.Tz._Done.call(this);},_ReInit:function(){
C.Tz._ReInit.call(this);this.Vy._ReInit();},_Mark:function(D){var B;C.Tz._Mark.call(
this,D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMp={QO:null,V_:null,AbL:null,YT:null,Init:function(aArg){var B;var F;this.Bb(
this.QO);if(!!A._GetAutoObject(C.A$).Q){var Vl=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vl){A.ab5("%s",AZG);
return;}else{if(Vl.AjU)this.QO.T(A.aaR(A.acf.Bg));else this.QO.T(A.aaR(A.acf.ET)
);var Azq=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azq||A._GetAutoObject(
A.Device.Helper).Arh(Azq))this.YT.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B$()){this.V_.Ar(false);this.QO.Ar(false);}}}},Adt:function(G){var Aa=(C.Cp.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dt(0);if(
Aa===this.AbL)A._GetAutoObject(C.A$).Cf(9);else if(Aa===this.V_)A._GetAutoObject(
A.Device.Device).Dt(7);else if(Aa===this.QO)this.BBW();else if(Aa===this.YT)this.
A1n();else throw new Error(Aye);},BBW:function(){var B;var F;var Vl=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vl){A.
ab5("%s",AZG);return;}Vl.A_y(this);},A1n:function(){var B;var F;var Vl=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vl){A.
ab5("%s",AZG);return;}Vl.Q8(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mn._Init.call(this.QO={I:this},0);C.Mn._Init.call(this.V_={I:this},
0);C.Mn._Init.call(this.AbL={I:this},0);C.Mn._Init.call(this.YT={I:this},0);this.
__proto__=C.AMp;this.H(AfC);this.QO.H(Aai);this.QO.Ar(true);this.QO.T(A.aaR(A.acf.
ET));this.QO.Bh(true);this.V_.H(P9);this.V_.Ar(true);this.V_.T(A.aaR(A.acf.AUl));
this.V_.Bh(true);this.AbL.H(IT);this.AbL.T(A.aaR(A.acf.AkW));this.AbL.Bh(true);this.
YT.H(BF);this.YT.T(A.aaR(A.acf.AB8));this.YT.Bh(true);this.J(this.QO,0);this.J(this.
V_,0);this.J(this.AbL,0);this.J(this.YT,0);this.QO.AR=[this,this.Adt];this.V_.AR=[
this,this.Adt];this.AbL.AR=[this,this.Adt];this.YT.AR=[this,this.Adt];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QO._Done();this.V_._Done(
);this.AbL._Done();this.YT._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QO._ReInit();this.V_._ReInit();this.AbL.
_ReInit();this.YT._ReInit();this.QO.T(A.aaR(A.acf.ET));this.V_.T(A.aaR(A.acf.AUl
));this.AbL.T(A.aaR(A.acf.AkW));this.YT.T(A.aaR(A.acf.AB8));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I7={T1:null,Ez:null,Yq:null,Background:null,Ap:null,Io:null,In:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10
);var IA=((Ae&0x40)===0x40);if(IA){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Ds(256);}else if(Hd){this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Ds(
256);}else{this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Ds(128);}if(!this.
AM)this.Ap.Cw(0);else if(this.AM>0){if(A.aaZ(this.T1,[B=A._GetAutoObject(A.Device.
Device),B.Awg,B.AyI]))this.Ap.Cw(2);else if(A.aaZ(this.T1,[B=A._GetAutoObject(A.
Device.Device),B.Awf,B.AyH]))this.Ap.Cw(3);else if(!!this.Yq&&((F=this.Yq,F[1].call(
F[0]))===1))this.Ap.Cw(1);else this.Ap.Cw(0);}else if(A.aaZ(this.T1,[B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyI]))this.Ap.Cw(6);else if(A.aaZ(this.T1,[B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyH]))this.Ap.Cw(7);else if(!!this.Yq&&((F=this.Yq,F[1].
call(F[0]))===1))this.Ap.Cw(5);else this.Ap.Cw(4);},Agd:function(G){this.J$(this
);},Agc:function(G){this.J6(this);},J$:function(G){this.By(1);},J6:function(G){this.
By(-1);},Bmp:function(E){if(A.aaZ(this.T1,E))return;if(!!this.T1)A.z$([this,this.
A27],this.T1,0);this.T1=E;if(!!E)A.zX([this,this.A27],this.T1,0);A.pe([this,this.
A27],this);},Um:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Agb],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Agb],this.Ez,0);if(!!E)A.pe([this
,this.Agb],this);},A27:function(G){var F;if(!!this.T1)this.By((F=this.T1,F[1].call(
F[0])));},Agb:function(G){A.pe([this,this.BB9],this);},CT:function(E){if(this.MZ===
E)return;this.MZ=E;this.Am();},By:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T1)(F=this.T1,F[2].call(F[0],E));this.Am();A.abo([this,this.Uh,this.
By],0);},A9G:function(E){if(A.aaZ(this.Yq,E))return;if(!!this.Yq)A.z$([this,this.
Agb],this.Yq,0);this.Yq=E;if(!!E)A.zX([this,this.Agb],this.Yq,0);if(!!E)A.pe([this
,this.Agb],this);},BB9:function(G){var F,CA;if(!this.Yq||!this.Ez)return;this.Bmp(
A._GetAutoObject(A.Device.Helper).Bc2((F=this.Yq,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.Am();},Uh:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BM._Init.call(this.Io={I:this},0);
A.Core.BM._Init.call(this.In={I:this},0);this.__proto__=C.I7;this.H(AIA);this.Background.
AZ(0x3F);this.Background.H(AIA);this.Ap.AZ(0x3C);this.Ap.H(AIA);this.Io.Filter=4;
this.In.Filter=5;this.MZ=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUL));this.Io.BN=[this,this.Agd];this.In.BN=[this,this.Agc];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Io._Done();this.In._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Io._ReInit(
);this.In._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALX={Wz:function(G){var B;var F;this.Agu();if(!!A._GetAutoObject(A.Device.Helper
).AOF((F=this.FJ,F[1].call(F[0])),0,true))this.AL5(A.aaR(A.acf.A6O),[this,this.Bnu
],[B=A._GetAutoObject(A.Device.Device),B.A75,B.BaD]);else A._GetAutoObject(C.BS).
XS(A.aaR(A.acf.A6O));A._GetAutoObject(C.BS).FX();this.I0(A.aaR(A.acf.LinkTransponder
),[this,this.BmG],8);this.I0(A.aaR(A.acf.Tw),[this,this.Aky],9);this.I0(A.aaR(A.
acf.A$G),[this,this.Bnh],10);this.I0(A.aaR(A.acf.AGb),[this,this.ATj],3);this.I0(
A.aaR(A.acf.An2),[this,this.AwR],2);A._GetAutoObject(C.BS).FX();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dt(6);},DE:function(G){},Abv:function(){return C.Aqx;},Abw:function(){return C.Aq5;
},Q8:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6p((F=this.FJ,F[1].call(F[0]))));},HQ:function(G){var F;C.GZ.HQ.
call(this,G);if(this.Akl()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).BgS((F=this.FJ,F[1].call(F[0]))));this.N.Cl=[this,this.AIV];this.N.FN(A.jV);}this.
N.ON(false);this.N.OO(false);},Agg:function(){A._GetAutoObject(C.A$).Cf(52);},A3a:
function(G){C.GZ.A3a.call(this,G);A.pe([this,this.A0h],this);},Bnu:function(G){A.
_GetAutoObject(A.Device.Device).Awm(!A._GetAutoObject(A.Device.Device).Aqh);this.
An_(this);},An_:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).Bn2(Be);if(A._GetAutoObject(A.Device.Device
).Aqh){var A16=A._GetAutoObject(A.Device.Helper).AOF((F=this.FJ,F[1].call(F[0]))
,21600,true);Be.CW(A16);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.ALX;var B;this.Dz(A.aaR(A.acf.
Av2));this.AwM([B=A._GetAutoObject(A.Device.Device),B.A74,B.BaC]);},_ReInit:function(
){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.Av2));},_className:"Application::ActionListScreen"
};C.ALW={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ALW;},
_className:"Application::ActionListFilterScreen"};C.APr={IK:null,IQ:null,Bc:null
,MB:A.jV,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8O,B.A9$],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);},De:function(E){C.II.De.call(this,E);this.IQ.L(E);},DY:function(
G){C.II.DY.call(this,G);var Azq=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azq||A._GetAutoObject(A.Device.Helper).Arh(Azq))this.IK.Z(false);else this.IK.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq2())this.AwY(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$U)+A._GetAutoObject(A.Device.Device).An.B$().
toFixed());else this.AwY(A$V);},AwY:function(E){if(this.MB===E)return;this.MB=E;
this.IQ.R(E);},_Init:function(aArg){C.II._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IK={I:this},0);A.acg.Text._Init.call(this.IQ={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APr;this.HR.H(Bqv);this.DS.H(Bqw);this.IK.H(
Bqx);this.IK.L(A.jb.Text);this.IQ.H(A$W);this.IQ.Hl(2);this.IQ.KS(true);this.IQ.
A6(0x12);this.IQ.R(A$X);this.Bc.DC(Ate);this.Bc.DM(Ayw);this.Bc.L(A.jb.Bc);this.
J(this.IK,0);this.J(this.IQ,0);this.J(this.Bc,0);this.IK.Aw(A.aaL(A.ach.AeA));this.
IQ.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.II;this.
IK._Done();this.IQ._Done();this.Bc._Done();C.II._Done.call(this);},_ReInit:function(
){C.II._ReInit.call(this);this.IK._ReInit();this.IQ._ReInit();this.Bc._ReInit();
this.IQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.II._Mark.call(this,D);if((
B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsK={Text:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xe);else this.Text.R(this.AC.F$((F=this.Q,F[1].call(F[0]
))));var IA=((Ae&0x40)===0x40);if(IA)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OY._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsK;this.Text.R(Rp);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OY;this.Text._Done();C.OY.
_Done.call(this);},_ReInit:function(){C.OY._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OY._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Are={C8:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACT(this.AC.DU((F=this.Q,F[1].call(F[
0])))));this.C8.Cw(this.AC.ACV(this.AC.DU((F=this.Q,F[1].call(F[0])))));}var IA=((
Ae&0x40)===0x40);if(IA)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OY._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Are;this.H(AIA);this.C8.H(A$T);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OY;this.C8._Done();C.OY._Done.call(this);},_ReInit:function(){C.OY._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OY._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuZ={VS:null,DirectionOfCountingToString:null,Aeg:null,Dn:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return-1;return aIndex;
},F$:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return A.jV;return this.
DirectionOfCountingToString.BH(aIndex);},DU:function(A8){return A8;},HK:function(
){return this.Dn()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VS)(F=
this.VS,F[2].call(F[0],E));},ACT:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn(
)))return null;return this.Aeg.AsL(aIndex);},ACV:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dn()))return-1;return this.Aeg.AsM(aIndex);},A1C:function(G){var F;
if(!!this.VS)this.Q=(F=this.VS,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},AeZ:function(E){if(A.aaZ(this.VS,E))return;if(!!this.VS)A.z$([this
,this.A1C],this.VS,0);this.VS=E;if(!!this.VS)A.zX([this,this.A1C],this.VS,0);A.pe([
this,this.A1C],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aeg._Init.call(this.Aeg={I:this},0);this.__proto__=C.AuZ;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aeg._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aeg._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeg)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMh={Hs:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdX:null,Dn:function(){return 4;},C4:function(aIndex){var F;var A8=-1;if((aIndex<
0)||(aIndex>=this.Dn()))return-1;switch(aIndex){case 0:A8=0;break;case 1:A8=1;break;
case 2:A8=this.By1((F=this.Ez,F[1].call(F[0])));break;case 3:A8=5;break;default:
throw new Error(Bqy+aIndex.toFixed());}return A8;},F$:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dn()))return A.jV;return this.AnimalIdGenerationMethodToString.
BH(this.C4(aIndex));},DU:function(A8){var aIndex=-1;switch(A8){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bqz+A8.toFixed());}return aIndex;},HK:function(){return this.
Dn()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hs)(F=this.Hs,F[2].
call(F[0],E));},ACT:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return null;
return this.AdX.AsL(this.C4(aIndex));},ACV:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dn()))return-1;return this.AdX.AsM(this.C4(aIndex));},A07:function(G){var F;
if(!!this.Hs)this.Q=(F=this.Hs,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},Blm:function(E){if(A.aaZ(this.Hs,E))return;if(!!this.Hs)A.z$([this
,this.A07],this.Hs,0);this.Hs=E;if(!!this.Hs)A.zX([this,this.A07],this.Hs,0);A.pe([
this,this.A07],this);},Um:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Agb],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Agb],this.Ez
,0);A.pe([this,this.Agb],this);},Agb:function(G){A.pe([this,this.BxR],this);},By1:
function(L4){var Rr=0;switch(L4){case 0:Rr=2;break;case 1:Rr=3;break;case 2:Rr=4;
break;default:throw new Error(BqA+L4.toFixed());}return Rr;},BxR:function(G){var
Bd0=this.C4(this.DU(this.Q));if(this.Q!==Bd0)this.As(Bd0);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdX._Init.call(this.
AdX={I:this},0);this.__proto__=C.AMh;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdX._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdX._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGB={FI:null,Aa2:null,Q:null,Fl:null,Fb:null,HH:null,Wr:null,AW:null,H1:null
,Kk:null,A9:0,AM:0,Alv:0,Init:function(aArg){var B;A.zX([this,this.Bec],[B=A._GetAutoObject(
A.Device.Device),B.Anr,B.AoD],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A9===1){if(this.Hj){this.AW.FM(A.jb.CK);this.HH.CT(A.jb.CK);this.Wr.CT(A.jb.CK);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FM(A.jb.CS);this.HH.
CT(A.jb.CS);this.Wr.CT(A.jb.CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hj){this.AW.FM(A.jb.CK);this.HH.CT(A.jb.CK);this.Wr.CT(A.jb.CK);}else{
this.AW.FM(A.jb.CS);this.HH.CT(A.jb.CS);this.Wr.CT(A.jb.CS);}this.Bb(null);}},IY:
function(G){C.Eg.IY.call(this,G);if(!this.A9)this.FV(this);else this.Hc(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}break;
default:this.FI.AkT((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ew(1);},Hc:
function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A9&&!!this.N)this.FI.AjD((
F=this.N,F[1].call(F[0])));this.A9=EN;if(this.A9<0)this.A9=0;else if(this.A9>1)this.
A9=1;switch(this.A9){case 0:this.Bb(null);break;case 1:{if(this.AW.A8l())this.Bb(
this.AW);else this.Bb(this.Wr);if(!this.AM)this.AW.SO(2);else this.AW.SO(7);}break;
default:throw new Error(Atg+this.A9.toFixed());}this.DJ(this);this.Am();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uh,this.
By],0);}},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ol:function(G){this.AA7(2);},MU:function(G){this.AA7(
7);},AA7:function(GA){var B;var Azr=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azr){var AAj=(A.Core.P.isPrototypeOf(B=this.QF(Azr,GA,0x15))?B:null);if(!!AAj){
this.Bb(AAj);return true;}}return false;},Ao4:function(G){A.pe([this,this.Bec],this
);},A3Z:function(G){var B;var F;if(!this.H1.Hs){this.Kk.AeZ(null);return;}switch((
F=this.H1.Hs,F[1].call(F[0]))){case 0:case 1:this.Kk.AeZ(null);break;case 3:this.
Kk.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASi,B.AZ0]);break;case 2:this.Kk.AeZ([
B=A._GetAutoObject(A.Device.Device),B.ASj,B.AZ1]);break;case 4:case 5:this.Kk.AeZ([
B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIM]);break;default:throw new Error(
BqB+(F=this.H1.Hs,F[1].call(F[0])).toFixed());}},Bec:function(G){var F;if(!this.
H1.Hs)return;A.pe([this,this.A3Z],this);var AtV=false;switch((F=this.H1.Hs,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtV=true;this.AW.A_r(-1);}break;case 0:
case 1:{AtV=false;this.AW.A_r(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayp+(F=this.H1.Hs,F[1].call(F[0])).toFixed());}this.AW.Ar(AtV);this.
HH.Ar(AtV);this.HH.Z(AtV);if(((F=this.H1.Hs,F[1].call(F[0]))!==this.Alv)||(AtV===
false)){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.Helper).AMf((F=this.H1.
Hs,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bja((F=this.H1.Hs,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kr(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kr(0);this.Alv=(
F=this.H1.Hs,F[1].call(F[0]));},A9j:function(E){var B;if(this.Aa2===E)return;if(
!!this.Aa2){A.z$([this,this.Ao4],[B=this.Aa2,B.Wx,B.JQ],0);A.z$([this,this.Ao4],[
B=this.Aa2,B.Anv,B.Nd],0);A.z$([this,this.Ao4],[B=this.Aa2,B.ArD,B.PQ],0);this.H1.
Um(null);}this.Aa2=E;if(!!E){A.zX([this,this.Ao4],[B=this.Aa2,B.Wx,B.JQ],0);A.zX([
this,this.Ao4],[B=this.Aa2,B.Anv,B.Nd],0);A.zX([this,this.Ao4],[B=this.Aa2,B.ArD
,B.PQ],0);this.H1.Um([B=this.Aa2,B.Wx,B.JQ]);}if(!!E)A.pe([this,this.Ao4],this);
},Uh:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BM._Init.call(this.Fl={I:this},0);A.Core.BM._Init.call(this.Fb={I:this},0
);C.Are._Init.call(this.HH={I:this},0);C.Are._Init.call(this.Wr={I:this},0);C.AvN.
_Init.call(this.AW={I:this},0);C.AMh._Init.call(this.H1={I:this},0);C.AuZ._Init.
call(this.Kk={I:this},0);this.__proto__=C.AGB;var B;this.H(UX);this.V.Ar(false);
this.V.R(As$);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fb.Filter=7;this.HH.H(BqC);
this.HH.Ar(false);this.Wr.H(BqD);this.AW.H(BqE);this.AW.Ar(false);this.J(this.HH
,0);this.J(this.Wr,0);this.J(this.AW,0);this.FI=A._NewObject(C.Aes,0);this.Fl.BN=[
this,this.Ol];this.Fb.BN=[this,this.MU];this.HH.CI(this.Kk);this.HH.As([B=this.Kk
,B.B7,B.B8]);this.Wr.CI(this.H1);this.Wr.As([B=this.H1,B.B7,B.B8]);this.AW.As([this
,this.Uh,this.By]);this.H1.Blm([B=A._GetAutoObject(A.Device.Device),B.Anr,B.AoD]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fb.
_Done();this.HH._Done();this.Wr._Done();this.AW._Done();this.H1._Done();this.Kk.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fl._ReInit();this.Fb._ReInit();this.HH._ReInit();this.Wr._ReInit();this.AW._ReInit(
);this.H1._ReInit();this.Kk._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H1).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G3={AzL:null,Fl:null,Fb:null,G0:null,
F_:null,EM:null,M4:0,AMV:0,ABY:0,Ut:0,A$D:-1,AMU:false,Init:function(aArg){A.pe([
this,this.A0u],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AMU);this.EM.H(A.wC(this.Yv(this.ABY).M,this.Yv((this.ABY+this.AMV)-1).M));},Ol:
function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var A1k=this.BfM(2);if(A1k===
false)D5.NH=true;},MU:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var
A1k=this.BfM(7);if(A1k===false)D5.NH=true;},BfM:function(GA){var B;var DW=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bc4(DW,GA,true);if(!!DW){this.Bb(DW);this.
AzL=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Ads:function(
G){A.ab5("%s",Alh);},GU:function(s){this.Ads(s);},FM:function(E){if(this.M4===E)
return;this.M4=E;this.F_.CT(E);this.G0.CT(E);},SO:function(GA){var B;switch(GA){
case 2:this.Bb(this.G0);break;case 7:this.Bb(this.F_);break;default:A.ab5("%s%e"
,BqF,GA);}this.AzL=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LO:function(G){},A0u:
function(s){this.LO(s);},AET:function(E){if(this.AMU===E)return;this.AMU=E;this.
Am();},A9p:function(E){if(this.AMV===E)return;this.AMV=E;this.Am();},A9o:function(
E){if(this.ABY===E)return;this.ABY=E;this.Am();},Yv:function(HA){var B5=null;switch(
HA){case-1:case 0:B5=this.F_;break;case 1:B5=this.G0;break;default:A.ab5("%s",Ah5
);}return B5;},Kr:function(E){if(this.Ut===E)return;this.Ut=E;this.Amo();},Amo:function(
){A.ab5("%s",Alh);},Bc4:function(Ac1,GA,LI){var B;if(!!Ac1){var Be;if(LI)Be=0x11;
else Be=0x0;switch(GA){case 2:Ac1=(C.DF.isPrototypeOf(B=this.AqQ(Ac1,Be))?B:null
);break;case 7:Ac1=(C.DF.isPrototypeOf(B=this.TO(Ac1,Be))?B:null);break;default:
throw new Error(BqG);}}return Ac1;},A_r:function(E){if(this.A$D===E)return;this.
A$D=E;var DW=this.F_;var A1K;while(!!DW){A1K=!!E;DW.Ar(A1K);DW.Z(A1K);if(DW===this.
AzL)this.Bb(DW);DW=this.Bc4(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BM._Init.call(this.Fl={I:this},0);A.Core.BM._Init.
call(this.Fb={I:this},0);C.DF._Init.call(this.G0={I:this},0);C.DF._Init.call(this.
F_={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.G3;this.
H(BqH);this.Fl.Filter=6;this.Fb.Filter=7;this.M4=A.jb.CK;this.G0.H(E7);this.F_.H(
A$Y);this.EM.H(BqI);this.EM.Ng(2);this.EM.L(A.jb.E4);this.J(this.G0,0);this.J(this.
F_,0);this.J(this.EM,0);this.Fl.BN=[this,this.Ol];this.Fl.D1=[this,this.Ol];this.
Fb.BN=[this,this.MU];this.Fb.D1=[this,this.MU];this.AzL=this.F_;this.G0.Di=[this
,this.GU];this.F_.Di=[this,this.GU];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fl._Done();this.Fb._Done();this.G0._Done();this.F_._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fl._ReInit();this.Fb._ReInit();this.G0._ReInit();this.F_._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQV={Dx:null,CU:null,Cu:null
,FM:function(E){if(this.M4===E)return;C.HL.FM.call(this,E);this.Cu.CT(E);this.CU.
CT(E);this.Dx.CT(E);},Yv:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.
F_;break;case 1:B5=this.Cu;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;
case 4:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.AQV;this.
H(BqJ);this.G0.H(Atf);this.Dx.H(A$Z);this.CU.H(A$0);this.Cu.H(A$1);this.F_.H(BqK
);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Cu,-2);this.Dx.Di=[this,this.
GU];this.CU.Di=[this,this.GU];this.Cu.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HL;this.Dx._Done();this.CU._Done();this.Cu._Done();C.HL._Done.call(this
);},_ReInit:function(){C.HL._ReInit.call(this);this.Dx._ReInit();this.CU._ReInit(
);this.Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVm={Ra:null,AcL:null,AVl:0,CD:function(G){this.AcL.Ar(true);},E6:function(G
){this.AcL.Ar(false);},Bnf:function(E){if(this.AVl===E)return;this.AVl=E;this.Ra.
R((((A.aaR(A.acf.AVk)+Aak)+E.toFixed())+BqL)+A.aaR(A.acf.Lb));},Bk_:function(){return this.
AVl;},BAO:function(G){A._GetAutoObject(C.A$).Cf(3);A._GetAutoObject(A.Device.Device
).Any(1);},_Init:function(aArg){C.X5._Init.call(this,aArg);C.CH._Init.call(this.
Ra={I:this},0);A.acl.Gm._Init.call(this.AcL={I:this},0);this.__proto__=C.AVm;this.
AeL.H(BqM);this.UC.R(A.jV);this.Ra.H(BqN);this.Ra.R(A.aaR(A.acf.AVk)+A$2);this.Ra.
L(A.jb.Text);this.AcL.HO(1);this.AcL.Fp(5000);this.AcL.B2=100;this.J(this.Ra,0);
this.Ra.S(A.aaL(A.fl.Af));this.Ra.A2(A.aaL(A.fl.Ak));this.Ra.Cv(A.aaL(A.fl.Bi));
this.AcL.SB=[this,this.BAO];this.AcL.Q=[this,this.Bk_,this.Bnf];},_Done:function(
){this.__proto__=C.X5;this.Ra._Done();this.AcL._Done();C.X5._Done.call(this);},_ReInit:
function(){C.X5._ReInit.call(this);this.Ra._ReInit();this.AcL._ReInit();this.Ra.
R(A.aaR(A.acf.AVk)+A$2);this.Ra.S(A.aaL(A.fl.Af));this.Ra.A2(A.aaL(A.fl.Ak));this.
Ra.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.X5._Mark.call(this,D);if((B=this.
Ra)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcL)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARN={K4:null,Lj:null,BdP:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K4)this.K4.Ev(this
);C.Wt.Ev.call(this,G);},Age:function(G){var B;if(!!this.K4)this.K4.Age(this);C.
Wt.Age.call(this,G);},CD:function(G){var B;if(!this.BdP){this.BdP=true;A.pe([this
,this.A3u],this);}else if(!this.K4){this.K4=A._NewObject(C.ARP,0);this.K4.A9D([this
,this.AAW]);this.LO(this);this.K4.LO(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wt.CD.call(this,G);}else C.Wt.CD.call(this,G
);},Ap8:function(G){var B;if(!!this.K4)this.K4.Ap8(this);},AAW:function(G){var B;
var F;this.LO(this);this.K4.LO(this);A.pe([this,this.AcU],this);var Bdq=this.LV;
this.AeW(A._GetAutoObject(A.Device.Helper).Abt(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVj(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdq);if(Bdq)A._GetAutoObject(
A.Device.Helper).W.PQ(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SI(A._GetAutoObject(A.Device.Helper).AMf((F=this.Dh.H1.Hs,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JE(this.C$);},A3u:function(
G){A._GetAutoObject(C.A$).Cf(79);},_Init:function(aArg){C.Wt._Init.call(this,aArg
);C.Q$._Init.call(this.Lj={I:this},0);this.__proto__=C.ARN;var B;this.Lj.H(Ah0);
this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACn));this.J(this.Lj,-9);this.JV(this.Gn,-
1);this.Lj.Gs([this,this.D_,this.GQ]);this.Lj.As([B=A._GetAutoObject(A.Device.Helper
).W,B.ASs,B.AnG]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wt;this.Lj.
_Done();C.Wt._Done.call(this);},_ReInit:function(){C.Wt._ReInit.call(this);this.
Lj._ReInit();this.Lj.T(A.aaR(A.acf.ACn));},_Mark:function(D){var B;C.Wt._Mark.call(
this,D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADL={AgN:null,AgO:null,NK:null,NJ:null,ES:null,F0:null,Ep:null,Dx:null,CU:null,Cu:
null,FM:function(E){if(this.M4===E)return;C.Lf.FM.call(this,E);this.Cu.CT(E);this.
CU.CT(E);this.Dx.CT(E);this.Ep.CT(E);this.F0.CT(E);this.ES.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgO.CT(E);this.AgN.CT(E);},Yv:function(HA){var B5=null;switch(HA){
case-1:case 0:B5=this.F_;break;case 1:B5=this.Cu;break;case 2:B5=this.CU;break;case
3:B5=this.Dx;break;case 4:B5=this.Ep;break;case 5:B5=this.F0;break;case 6:B5=this.
ES;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgO;break;
case 10:B5=this.AgN;break;case 11:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;
},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(this.AgN={I:this
},0);C.DF._Init.call(this.AgO={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.F0={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADL;this.H(BqO);this.G0.H(AIB);this.AgN.H(Ayx);this.AgO.H(
AZH);this.NK.H(AZI);this.NJ.H(AZJ);this.ES.H(AZK);this.F0.H(AZL);this.Ep.H(AZM);
this.Dx.H(A$3);this.CU.H(AZN);this.Cu.H(BqP);this.F_.H(BqQ);this.J(this.AgN,-2);
this.J(this.AgO,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ES,-2);this.
J(this.F0,-2);this.J(this.Ep,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.
Cu,-2);this.AgN.Di=[this,this.GU];this.AgO.Di=[this,this.GU];this.NK.Di=[this,this.
GU];this.NJ.Di=[this,this.GU];this.ES.Di=[this,this.GU];this.F0.Di=[this,this.GU
];this.Ep.Di=[this,this.GU];this.Dx.Di=[this,this.GU];this.CU.Di=[this,this.GU];
this.Cu.Di=[this,this.GU];},_Done:function(){this.__proto__=C.Lf;this.AgN._Done(
);this.AgO._Done();this.NK._Done();this.NJ._Done();this.ES._Done();this.F0._Done(
);this.Ep._Done();this.Dx._Done();this.CU._Done();this.Cu._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.AgN._ReInit();this.AgO._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ES._ReInit();this.F0._ReInit();this.Ep.
_ReInit();this.Dx._ReInit();this.CU._ReInit();this.Cu._ReInit();},_Mark:function(
D){var B;C.Lf._Mark.call(this,D);if((B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HL={Q:null,AM:0,Ai:function(Ae){C.G3.Ai.call(this
,Ae);this.Amo();},Ads:function(G){var B;var F;var Iy=A.jV;var B5=this.G0;while(!
!B5){if(B5.Ey>0)Iy=Iy+B5.Ey.toFixed();else Iy=Iy+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TO(B5,0x11))?B:null);}var BQ=this.AM;this.By(A.wz(Iy,-1,
10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LO:function(G){},Amo:function(){var B;var F;if(!!this.Q){var DW=this.F_;
var AdA=this.Ut;var A8=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A8>0){DW.L0(A8%
10);A8=(A8/10)|0;}else if(AdA>0)DW.L0(0);else DW.L0(-1);DW=(C.DF.isPrototypeOf(B=
this.AqQ(DW,0x11))?B:null);AdA=AdA-1;}}},C2:function(G){var F;if(!!this.Q)this.By((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},By:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G3._Init.call(this,aArg);this.__proto__=C.HL;},_Mark:
function(D){var B;C.G3._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lf={AM:0,Q:null
,Ai:function(Ae){C.G3.Ai.call(this,Ae);this.Amo();},Ads:function(G){var B;var F;
var Iy=A.jV;var B5=this.G0;while(!!B5){if(B5.Ey>0)Iy=Iy+B5.Ey.toFixed();else Iy=
Iy+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TO(B5,0x11))?B:null);
}var BQ=this.AM;this.By(A.ab0(Iy,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LO:function(G){},Amo:function(){var B;
var F;if(!!this.Q){var DW=this.F_;var AdA=this.Ut;var A8=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A8>0){DW.L0((A8%10)|0);A8=Math.trunc(A8/10);}else if(AdA>0)DW.
L0(0);else DW.L0(-1);DW=(C.DF.isPrototypeOf(B=this.AqQ(DW,0x11))?B:null);AdA=AdA-
1;}}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},By:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G3._Init.call(
this,aArg);this.__proto__=C.Lf;},_Mark:function(D){var B;C.G3._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dn:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvN={Ep:null,Dx:null,CU:null,Cu:null,FM:function(E){if(this.M4===E)return;C.
HL.FM.call(this,E);this.Cu.CT(E);this.CU.CT(E);this.Dx.CT(E);this.Ep.CT(E);},Yv:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F_;break;case 1:B5=this.
Cu;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Ep;break;
case 5:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(
this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cu={
I:this},0);this.__proto__=C.AvN;this.H(Ayi);this.G0.H(AHI);this.Ep.H(AHJ);this.Dx.
H(AHK);this.CU.H(AHL);this.Cu.H(AHM);this.F_.H(AHN);this.EM.H(A$4);this.J(this.Ep
,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Cu,-2);this.Ep.Di=[this,this.
GU];this.Dx.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cu.Di=[this,this.GU
];},_Done:function(){this.__proto__=C.HL;this.Ep._Done();this.Dx._Done();this.CU.
_Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.
call(this);this.Ep._ReInit();this.Dx._ReInit();this.CU._ReInit();this.Cu._ReInit(
);},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Ep)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUt={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bop(0);this.AttributeSet.Boq(1);this.AttributeSet.Bor(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var IA=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=A.jb.CK;var GW=A.jb.Text;if(this.Hj){FS=
A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);this.
AttributeSet.Ahm(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahm(A.jb.Bm);}else if(IA){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahm(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.
Am5);this.V.L(A.jb.Bm);this.AttributeSet.Ahm(A.jb.Bm);}else{this.Background.L(FS
);this.V.L(GW);this.AttributeSet.Ahm(GW);}this.LI=Hd;this.KE=Fu;this.Qp=GE;this.
Apk=IA;},Hk:function(G){var B;var Gh=this.Dy.G4;var Cz=(A.acg.AuM.isPrototypeOf(
B=this.Dy.Ch)?B:null);Cz.A9l(this.AttributeSet);Cz.A6(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByU(this.AC.F$(Gh)));else Cz.R(Xe);Cz.H(A.abK(Cz.M,[this.Dy.Wc,(B=this.
Dy.M)[3]-B[1]]));},ByU:function(Bxg){var AAG=Bxg;AAG=A._GetAutoObject(A.Device.Helper
).Nk(AAG,BqR,BqS);AAG=A._GetAutoObject(A.Device.Helper).Nk(AAG,BqT,BqU);return BqV+
AAG;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUt;this.Dy.H(BqW);this.Dy.Jw(2);
this.Dy.NZ(A.acg.AuM);this.AttributeSet.Ahm(this.V.AQ);this.AttributeSet.Bl9(A.aaL(
A.fl.AOw));this.AttributeSet.A9N(A.aaL(A.fl.Ak));this.AttributeSet.Ahp(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9N(A.aaL(A.fl.Ak));this.AttributeSet.Ahp(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsA._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADb);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dn:function(){return 14;},C4:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},F$:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BH(aIndex
);},DU:function(A8){return A8;},HK:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OR={FI:null,EnumToCodeset:
null,Ju:null,A9:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A9===1){
if(this.Hj){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}},By:function(E){C.BW.By.call(this,E);var BzO=this.
EnumToCodeset.AmG(this.Number);var BdZ=this.AC.C4(this.AM);if(BzO!==BdZ){this.AFt(
this.EnumToCodeset.Aej(BdZ));A.abo([this,this.ASt,this.AFt],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.
aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[
this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:
this.FI.AkT((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ew(1);},Hc:function(
G){this.Ew(0);},Ew:function(EN){var F;if(!this.A9)this.FI.AjD((F=this.N,F[1].call(
F[0])));this.A9=EN;if((this.A9<0)||(this.A9>1))this.A9=0;this.DJ(this);if(!this.
A9)this.Bb(null);else this.A1X();this.Am();},AFt:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqY()>E)E=this.EnumToCodeset.
AqY();if(this.EnumToCodeset.HK()<E)E=this.EnumToCodeset.HK();}this.Number=E;var BQ=
this.AM;if(!!this.EnumToCodeset){var ByK=this.EnumToCodeset.AmG(E);this.By(this.
AC.DU(ByK));if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C4(this.AM)));A.abo(this.Q,0);}}},Anz:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Va:function(G){this.Ew(this.A9+1);},A1X:function(){A.ab5(
"%s",BqX);},ASt:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BM._Init.call(this.Ju={I:this},0);this.__proto__=C.OR;this.
Ju.Filter=1;this.FI=A._NewObject(C.Aes,0);this.Ju.BN=[this,this.Va];},_Done:function(
){this.__proto__=C.BW;this.Ju._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Ju._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeS={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACO);},By:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rh(this.AM));this.
Am();},AaL:function(G){A.pe([this,this.Aga],this);},AaK:function(G){A.pe([this,this.
Aga],this);},Al2:function(G){A.pe([this,this.Aga],this);},Aga:function(G){if((!this.
Ii||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeS;this.Text.AZ(0x3F
);this.Text.H(As5);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARG={GI:0,C7:null,AW:null,Fa:null,
I7:null,CountryToString:null,K$:0,L$:false,Init:function(aArg){A.zX([this,this.MH
],[this,this.SC,this.Ln],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I7.Z(this.
Afn);this.AW.FM(this.LS);this.Fa.CT(this.LS);this.I7.CT(this.LS);},DJ:function(G
){var F;if(!this.N)return;switch(this.A9){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(this.CountryToString.BH(this.K$));(F=this.N,
F[1].call(F[0])).Cm=null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}}},Ew:function(EN){var Tn=this.
A9;this.A9=EN;if(this.A9<0)this.A9=0;else if(this.A9>this.RI)this.A9=this.RI;if((
this.A9===1)&&!this.Afn)this.A9=2;switch(this.A9){case 0:{this.Bb(null);if(!this.
GI)this.Ln(0);}break;case 1:this.Bb(this.I7);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tn>0))this.AW.SO(2);else this.AW.SO(7);}break;
default:throw new Error(Atg+this.A9.toFixed());}C.Ek.Ew.call(this,this.A9);},Apr:
function(G){this.I7.Um(this.Ez);},AaL:function(G){var F;this.AW.A9o((F=this.AF,F[
1].call(F[0])));},AaK:function(G){var F;this.AW.A9p((F=this.A1,F[1].call(F[0])));
},By:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SE(A._GetAutoObject(
A.Device.Helper).Sj(E,0,12));this.Ln(A._GetAutoObject(A.Device.Converter).Z3(E));
this.L$=false;if(!!E)this.AW.Kr(12);else this.AW.Kr(0);this.Am();},Al2:function(
G){A.pe([this,this.Aga],this);},FV:function(G){var F;if(!this.AM){var BQ=this.AM;
this.By(A._GetAutoObject(A.Device.Helper).AC2());if(this.AM!==BQ){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjR:function(){return this.
GI;},AjT:function(){return 999999999999;},Ln:function(E){if(this.K$===E)return;this.
K$=E;if(this.L$===false)A.pe([this,this.Vn],this);A.abo([this,this.SC,this.Ln],0
);},SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vn],this);A.abo([this,this.Ab3,this.SE],0);},Vn:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqC(this.K$),3,10)+A.abm(this.GI,12,10
);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Aga:function(G){var F;if((!this.Ii||
!this.A1)||!this.AF)return;if(!(F=this.Ii,F[1].call(F[0])))this.AW.AET(true);else
this.AW.AET(false);},SC:function(){return this.K$;},Ab3:function(){return this.GI;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C7._Init.call(this.C7={I:this
},0);C.ADL._Init.call(this.AW={I:this},0);C.AsK._Init.call(this.Fa={I:this},0);C.
I7._Init.call(this.I7={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARG;var B;this.RI=3;this.AW.H(BqY);this.Fa.H(A$5);this.
I7.H(A$6);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.I7,0);this.C7.AEZ([this
,this.SC,this.Ln]);this.AW.As([this,this.Ab3,this.SE]);this.Fa.CI(this.C7);this.
Fa.As([B=this.C7,B.B7,B.B8]);this.I7.A9G([B=A._GetAutoObject(A.Device.Device),B.
Awa,B.AyE]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done(
);this.AW._Done();this.Fa._Done();this.I7._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.I7._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARF={GI:0,C7:null,AW:null,YI:null,Ko:null,Fa:null,I7:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pu:0,K$:0,L$:false,Init:function(aArg){A.
zX([this,this.MH],[this,this.PN,this.EB],0);A.zX([this,this.MH],[this,this.SC,this.
Ln],0);A.zX([this,this.MH],[this,this.Ant,this.Ahq],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I7.Z(this.Afn);this.AW.FM(this.LS);this.YI.FM(this.LS);this.Ko.
FM(this.LS);this.Fa.CT(this.LS);this.I7.CT(this.LS);},DJ:function(G){var F;if(!this.
N)return;switch(this.A9){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(
A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this
,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV
);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.
N,F[1].call(F[0])).CV(this.CountryToString.BH(this.K$));(F=this.N,F[1].call(F[0]
)).Cm=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.
N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aak)+A.aaR(A.
acf.Bha));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.
acf.Colon))+Aak)+A.aaR(A.acf.Bov));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aak)+A.aaR(A.acf.Bh7));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aak)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cm=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0]
)).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0
])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.EY)+Ax_)+this.GermanStateToString.Lt(
A._GetAutoObject(A.Device.Converter).ACR(this.Pu)));(F=this.N,F[1].call(F[0])).Cm=
null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[
1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[
1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}}},Ew:function(EN){var Tn=this.A9;if(EN<
0)EN=0;else if(EN>this.RI)EN=this.RI;if((EN===1)&&!this.Afn)EN=2;switch(EN){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pu)this.Ln(0);}break;case
1:this.Bb(this.I7);break;case 2:this.Bb(this.Fa);break;case 3:if(!Tn)A.pe([this,
this.BA3],this);else this.Bb(this.YI);break;case 4:this.Bb(this.Ko);break;case 5:
if(((Tn===4)&&!this.Pu)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tn>
0))this.AW.SO(2);else this.AW.SO(7);}break;default:throw new Error(Atg+EN.toFixed(
));}this.A9=EN;C.Ek.Ew.call(this,this.A9);},By:function(E){if(this.AM===E)return;
this.AM=E;this.L$=true;this.SE(A._GetAutoObject(A.Device.Helper).Sj(E,0,8));this.
Ahq(A._GetAutoObject(A.Device.Helper).Sj(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Sj(E,10,2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).Z3(E));this.L$=
false;if(!!this.AM){this.YI.Kr(2);this.Ko.Kr(2);this.AW.Kr(8);}else{this.YI.Kr(0
);this.Ko.Kr(0);this.AW.Kr(0);}this.Am();},Apr:function(G){this.I7.Um(this.Ez);}
,AaL:function(G){var F;this.AW.A9o((F=this.AF,F[1].call(F[0])));},AaK:function(G
){var F;this.AW.A9p((F=this.A1,F[1].call(F[0])));},Al2:function(G){A.pe([this,this.
Aga],this);},FV:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(
A.Device.Helper).AC2());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RI);},AjR:function(){return this.
GI;},AjT:function(){return 99999999;},Ln:function(E){if(this.K$===E)return;this.
K$=E;if(this.L$===false)A.pe([this,this.Vn],this);A.abo([this,this.SC,this.Ln],0
);},SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vn],this);A.abo([this,this.Ab3,this.SE],0);},Vn:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqC(this.K$),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pu,2,10))+A.abm(this.GI,8,10);var BQ=this.AM;this.By(A.ab0(aString
,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Aga:function(G){var F;if((!this.Ii||!this.A1)||!this.AF)return;if(!(F=this.
Ii,F[1].call(F[0])))this.AW.AET(true);else this.AW.AET(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L$===false)A.pe([this,this.
Vn],this);A.abo([this,this.PN,this.EB],0);},Ahq:function(E){if(this.Pu===E)return;
this.Pu=E;if(this.L$===false)A.pe([this,this.Vn],this);A.abo([this,this.Ant,this.
Ahq],0);},BA3:function(G){var F;if(!!this.JI){var Ib=(F=this.JI,F[1].call(F[0]));
var A08=0;switch(Ib){case 0:case 1:A08=0;break;case 2:A08=1;break;default:A.ab5(
"%s%e",Alg,Ib);}this.EB(A08);}if(!this.Pu)this.Ew(4);else this.Ew(5);},SC:function(
){return this.K$;},Ab3:function(){return this.GI;},PN:function(){return this.AnimalType;
},Ant:function(){return this.Pu;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.AQW._Init.call(this.AW={I:this},0);C.AvM.
_Init.call(this.YI={I:this},0);C.AvM._Init.call(this.Ko={I:this},0);C.AsK._Init.
call(this.Fa={I:this},0);C.I7._Init.call(this.I7={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARF;var B;this.RI=5;this.AW.H(
BqZ);this.YI.H(Bq0);this.YI.EV(2);this.Ko.H(Bq1);this.Ko.EV(16);this.Fa.H(A$5);this.
I7.H(A$6);this.J(this.AW,0);this.J(this.YI,0);this.J(this.Ko,0);this.J(this.Fa,0
);this.J(this.I7,0);this.C7.AEZ([this,this.SC,this.Ln]);this.AW.As([this,this.Ab3
,this.SE]);this.YI.As([this,this.PN,this.EB]);this.Ko.As([this,this.Ant,this.Ahq
]);this.Fa.CI(this.C7);this.Fa.As([B=this.C7,B.B7,B.B8]);this.I7.A9G([B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyE]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C7._Done();this.AW._Done();this.YI._Done();this.Ko._Done();this.Fa._Done(
);this.I7._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.YI._ReInit();this.Ko._ReInit();this.Fa._ReInit();this.I7.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awl:null,OE:null,
Q:null,Ez:null,A1:null,AF:null,Ii:null,N:null,JI:null,Fl:null,Fb:null,ACO:0,LS:0
,A9:0,RI:0,Afn:true,Init:function(aArg){A.pe([this,this.LO],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A9)this.Bb(null);},Bl$:function(E){if(this.
ACO===E)return;this.ACO=E;this.Am();},WA:function(E){if(this.LS===E)return;this.
LS=E;this.Am();},DJ:function(G){A.ab5("%s",Alh);},MH:function(s){this.DJ(s);},Ew:
function(EN){A.pe([this,this.MH],this);A.pe(this.Awl,this);if(!EN)A.pe(this.OE,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},By:function(
E){A.ab5("%s",AoC);},Ol:function(G){if(this.A9>1)this.Ew(this.A9-1);},MU:function(
G){if((this.A9>0)&&(this.A9<this.RI))this.Ew(this.A9+1);},Um:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.A0l],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.A0l],this.Ez,0);A.pe([this,this.A0l],this);},Apr:function(G){},A0l:
function(s){this.Apr(s);},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0p],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0p],E,0);if(!
!E)A.pe([this,this.A0p],this);},PO:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0r],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0r],E,0);if(
!!E)A.pe([this,this.A0r],this);},AaL:function(G){},A0r:function(s){this.AaL(s);}
,AaK:function(G){},A0p:function(s){this.AaK(s);},Uk:function(E){if(A.aaZ(this.Ii
,E))return;if(!!this.Ii)A.z$([this,this.A0o],this.Ii,0);this.Ii=E;if(!!E)A.zX([this
,this.A0o],E,0);if(!!E)A.pe([this,this.A0o],this);},Al2:function(G){},A0o:function(
s){this.Al2(s);},FV:function(G){A.ab5("%s",A$7);},BGf:function(s){this.FV(s);},Hc:
function(G){this.Ew(0);},AjR:function(){A.ab5("%s",AoC);return 0;},AjT:function(
){A.ab5("%s",AoC);return 0;},LO:function(G){},Anx:function(E){if(A.aaZ(this.JI,E
))return;if(!!this.JI)A.z$([this,this.Ao3],this.JI,0);this.JI=E;if(!!E)A.zX([this
,this.Ao3],this.JI,0);A.pe([this,this.Ao3],this);},Ao3:function(G){},AFa:function(
E){if(A.aa0(this.OE,E))return;this.OE=E;},AFF:function(E){if(this.Afn===E)return;
this.Afn=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BM._Init.call(this.Fl={I:this},0);A.Core.BM._Init.call(this.Fb={I:this},0);this.
__proto__=C.Ek;this.H(As5);this.ACO=A.jb.Text;this.LS=A.jb.CS;this.Fl.Filter=6;this.
Fb.Filter=7;this.Fl.BN=[this,this.Ol];this.Fb.BN=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fl._Done();this.Fb._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fl._ReInit(
);this.Fb._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OE)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ii)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JI)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q$={AM:0,Dp:null,FI:
null,OE:null,Ez:null,A1:null,AF:null,Ii:null,Q:null,JI:null,AEg:-1,Afn:true,AN1:
false,ATP:false,Asm:true,Init:function(aArg){A.pe([this,this.ABq],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A9>0){if(this.Hj){this.Dp.
WA(A.jb.CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.WA(A.jb.
CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hj)this.Dp.WA(
A.jb.CK);else this.Dp.WA(A.jb.CS);this.Dp.Bl$(this.V.AQ);}},IY:function(G){C.Eg.
IY.call(this,G);if(!this.Dp)return;if(!this.Dp.A9)this.FV(this);else this.Hc(this
);},Gs:function(E){C.Eg.Gs.call(this,E);if(!!this.Dp)this.Dp.N=E;},Um:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Apr],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Apr],this.Ez,0);A.pe([this,this.Apr],this);},Apr:function(
G){if(!!this.Dp)this.Dp.Um(this.Ez);},OL:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OL(E);},PO:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PO(E);},Uk:function(E){if(A.aaZ(this.Ii,E))return;
this.Ii=E;if(!!this.Dp)this.Dp.Uk(E);},BBx:function(G){var AAo=0;if(!!this.Dp){AAo=
this.Dp.A9;this.Dp.N=null;this.HP(this.Dp);}switch(this.AEg){case 0:this.Dp=A._NewObject(
C.AeS,0);break;case 1:this.Dp=A._NewObject(C.ARG,0);break;case 2:this.Dp=A._NewObject(
C.ARF,0);break;case 3:this.Dp=A._NewObject(C.ATR,0);break;case 4:this.Dp=A._NewObject(
C.ATQ,0);break;case 5:this.Dp=A._NewObject(C.ARH,0);break;default:throw new Error(
Bq2+this.AEg.toFixed());}this.J(this.Dp,0);this.Dp.Anx(this.JI);this.Dp.H(Bq3);this.
Dp.N=this.N;this.Dp.Um(this.Ez);this.Dp.Awl=[this,this.Awl];this.Dp.As([this,this.
Uh,this.By]);this.Dp.Uk(this.Ii);this.Dp.OL(this.A1);this.Dp.PO(this.AF);this.Dp.
AFa(this.OE);this.Dp.AFF(this.Afn);if(AAo>0)this.Dp.Ew(AAo);this.Bb(this.Dp);this.
Am();},FV:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FI.AjD((F=this.
N,F[1].call(F[0])));else this.FI=A._NewObject(C.Aes,0);this.Dp.FV(this);}},Hc:function(
G){var B;if(!!this.Dp)this.Dp.Hc(this);},AjR:function(){if(!this.Dp)return 0;return this.
Dp.AjR();},AjT:function(){if(!this.Dp)return 0;return this.Dp.AjT();},C2:function(
G){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uh,this.
By],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABq],this);},BmO:function(
E){if(this.AEg===E)return;this.AEg=E;A.pe([this,this.BBx],this);},Ar5:function(E
){if(this.Asm===E)return;this.Asm=E;A.pe([this,this.ABq],this);},ABq:function(G){
var ApC;if(this.Asm){if(this.AN1)ApC=5;else ApC=0;}else if(this.ATP){if(A._GetAutoObject(
A.Device.Converter).Z3(this.AM)===10)ApC=4;else ApC=3;}else if(A._GetAutoObject(
A.Device.Converter).Z3(this.AM)===10)ApC=2;else ApC=1;this.BmO(ApC);},Awl:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A9)this.FI.AkT((F=this.N,F[1].call(F[
0])));this.Am();},Anx:function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([
this,this.Ao3],this.JI,0);this.JI=E;if(!!E)A.zX([this,this.Ao3],this.JI,0);A.pe([
this,this.Ao3],this);},Ao3:function(G){if(!!this.Dp)this.Dp.Anx(this.JI);},A98:function(
E){if(this.ATP===E)return;this.ATP=E;A.pe([this,this.ABq],this);},BlH:function(E
){if(this.AN1===E)return;this.AN1=E;A.pe([this,this.ABq],this);},AFa:function(E){
if(A.aa0(this.OE,E))return;this.OE=E;if(!!this.Dp)this.Dp.AFa(E);},AFF:function(
E){if(this.Afn===E)return;this.Afn=E;if(!!this.Dp)this.Dp.AFF(E);},Uh:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q$;this.H(UX);this.V.R(As$);this.V.L(A.jb.Bm);this.FI=A._NewObject(C.Aes,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ii
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQW={ES:null,F0:null,Ep:null,Dx:null,CU:null
,Cu:null,FM:function(E){if(this.M4===E)return;C.Lf.FM.call(this,E);this.Cu.CT(E);
this.CU.CT(E);this.Dx.CT(E);this.Ep.CT(E);this.F0.CT(E);this.ES.CT(E);},Yv:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F_;break;case 1:B5=this.Cu;break;
case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Ep;break;case 5:B5=
this.F0;break;case 6:B5=this.ES;break;case 7:B5=this.G0;break;default:A.ab5("%s"
,Ah5);}return B5;},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(
this.ES={I:this},0);C.DF._Init.call(this.F0={I:this},0);C.DF._Init.call(this.Ep={
I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.AQW;this.H(Bq4);this.G0.
H(AIB);this.ES.H(Ayx);this.F0.H(AZH);this.Ep.H(AZI);this.Dx.H(AZJ);this.CU.H(AZK
);this.Cu.H(AZL);this.F_.H(AZM);this.EM.H(A$4);this.J(this.ES,-2);this.J(this.F0
,-2);this.J(this.Ep,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Cu,-2);
this.ES.Di=[this,this.GU];this.F0.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.
Dx.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cu.Di=[this,this.GU];},_Done:
function(){this.__proto__=C.Lf;this.ES._Done();this.F0._Done();this.Ep._Done();this.
Dx._Done();this.CU._Done();this.Cu._Done();C.Lf._Done.call(this);},_ReInit:function(
){C.Lf._ReInit.call(this);this.ES._ReInit();this.F0._ReInit();this.Ep._ReInit();
this.Dx._ReInit();this.CU._ReInit();this.Cu._ReInit();},_Mark:function(D){var B;
C.Lf._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvM={Q:null,G0:null,F_:null,EM:null,Io:null,In:null,M4:0,Ut:0,AM:0,Gb:99,Init:
function(aArg){A.pe([this,this.LO],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yv(0).M,this.Yv(-1).M));var IA=((Ae&
0x40)===0x40);if(IA){this.BfN(A.jb.AV);this.BfO(A.jb.Bm);}else{this.BfN(this.M4);
this.BfO(A.jb.Text);}this.Amo();},FM:function(E){if(this.M4===E)return;this.M4=E;
this.Am();},LO:function(G){},Yv:function(HA){var B5=null;switch(HA){case-1:case 0:
B5=this.F_;break;case 1:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;},Kr:
function(E){if(this.Ut===E)return;this.Ut=E;this.Amo();},Amo:function(){var B;var
F;if(!!this.Q){var DW=this.F_;var AdA=this.Ut;var A8=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A8>0){DW.L0(A8%10);A8=(A8/10)|0;}else if(AdA>0)DW.L0(0);else DW.L0(-
1);DW=(C.Ey.isPrototypeOf(B=this.AqQ(DW,0x11))?B:null);AdA=AdA-1;}}},Agd:function(
G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agc:function(G){var F;var BQ=this.
AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},By:function(E){if(E<0)E=0;if(E>this.Gb)E=this.Gb;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.Gb===E)return;this.Gb=E;this.Am();}
,BfN:function(aColor){this.F_.CT(aColor);this.G0.CT(aColor);},BfO:function(aColor
){this.F_.Zx(aColor);this.G0.Zx(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.G0={I:this},0);C.Ey._Init.call(this.F_={I:this},
0);A.acg.BU._Init.call(this.EM={I:this},0);A.Core.BM._Init.call(this.Io={I:this}
,0);A.Core.BM._Init.call(this.In={I:this},0);this.__proto__=C.AvM;this.H(Bq5);this.
M4=A.jb.CK;this.G0.H(AIB);this.F_.H(Ayx);this.EM.H(Ayx);this.EM.Ng(2);this.EM.L(
A.jb.E4);this.Io.Filter=4;this.In.Filter=5;this.J(this.G0,0);this.J(this.F_,0);this.
J(this.EM,0);this.Io.BN=[this,this.Agd];this.Io.D1=[this,this.Agd];this.In.BN=[this
,this.Agc];this.In.D1=[this,this.Agc];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G0._Done();this.F_._Done();this.EM._Done();this.Io._Done();this.In.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G0._ReInit();this.F_._ReInit();this.EM._ReInit();this.Io._ReInit();this.In.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgG:
null,Background:null,Text:null,Ey:-1,MZ:0,AmQ:0,Aqu:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Rp);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.AmQ);},L0:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.Am();},CT:function(E){
if(this.MZ===E)return;this.MZ=E;this.Am();},AeX:function(E){if(this.Aqu===E)return;
this.Aqu=E;this.AgG.Ar(E);if(E===false)this.Text.Z(true);},Zx:function(E){if(this.
AmQ===E)return;this.AmQ=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TG._Init.call(this.AgG={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(Atf);this.MZ=A.jb.CK;this.AgG.Fp(750);this.AgG.Un(750);this.AgG.AkE(750);
this.AmQ=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Atf);this.Text.AZ(0x3
);this.Text.H(Atf);this.Text.R(Rp);this.J(this.Background,0);this.J(this.Text,0);
this.AgG.Q=[B=this.Text,B.Fo,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgG._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgG._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fz={Y:null,I3:null,AN9:A.jV,ARV:A.jV,Te:0,AJH:0,A1N:false,A1i:false,Init:function(
aArg){},CD:function(G){var B;C.AB.CD.call(this,G);A.zX([this,this.ABl],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.zX([this,this.MH],[B=A._GetAutoObject(A.Device.
Device).An,B.Fn,B.Fr],0);A.pe([this,this.ABl],this);A.pe([this,this.MH],this);},
E6:function(G){var B;C.AB.E6.call(this,G);A.z$([this,this.ABl],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);},BxE:function(L7){A._GetAutoObject(A.Device.Helper
).G6(L7);this.Ap9(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap9:function(L2,AcY){A.ab5("%s",Alh);},Vi:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.ByC],this);else if(!!At&&(At.PopupState===5)){this.A1i=true;this.Ev(this
);}},ByC:function(G){if(this.Te>0){this.A1i=false;this.Adn(this);this.A_w(0);}},
Aiz:function(G){if((this.AJH+1)<this.Te)this.A_w(this.AJH+1);else A.aaS([this,this.
Bwc],this);},Bwd:function(s){this.Aiz(s);},A_w:function(E){this.AJH=E;if(this.A1i===
false){this.BxE(E);A.aaS([this,this.Bwd],this);var XM=(this.AJH/this.Te)*100;A._GetAutoObject(
A.Device.Device).A7(49,true,A.abk(XM,0,0),0,[this,this.Vi]);}},Aav:function(G){A.
_GetAutoObject(A.Device.Device).A7(49,false,Bq6,0,[this,this.Vi]);this.A1N=true;
A.pe([this,this.ALh],this);},Bwc:function(s){this.Aav(s);},Adn:function(G){this.
I3.Z(true);this.A1N=false;this.ALh(this);},BF$:function(s){this.Adn(s);},AAD:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6v();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ev:function(G){A._GetAutoObject(C.A$).Fy();},A3n:function(G){A._GetAutoObject(
C.A$).Cf(84);},DJ:function(G){this.N.Z(true);this.N.CY(A.aaL(A.ach.E5));this.N.CC=[
this,this.Ev];this.N.Ct(A.aaL(A.ach.ADB));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arh(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cl=null;this.N.I6.Ds(100);}else{this.N.Cl=[this,this.AAD];this.
N.I6.Ds(255);}this.N.C6(A.aaL(A.ach.AeA));this.N.Cm=[this,this.A3n];},MH:function(
s){this.DJ(s);},ABl:function(G){this.Te=A._GetAutoObject(A.Device.Device).An.B$(
);if(this.Te>0)A._GetAutoObject(A.Device.Device).A7(49,true,U0,0,[this,this.Vi]);
else{this.Adn(this);this.Aav(this);}},AkC:function(E){if(this.AN9===E)return;this.
AN9=E;A.pe([this,this.ALh],this);},ALh:function(G){var B;if(this.A1N===false){this.
I3.R(A.jV);return;}var Ape;if(!A._GetAutoObject(A.Device.Device).An.B$()){var Adh=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABl],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);this.AAD(this);if(!A._GetAutoObject(A.Device.Device
).An.QG()||!Adh)Ape=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACY(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ape=A.aaR(
A.acf.AN3);else Ape=A.aaR(A.acf.AN2);A._GetAutoObject(A.Device.Device).An.Bk(Adh
);A.zX([this,this.ABl],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);}else
Ape=this.ARV;Ape=Ape+(AZO+this.AN9);this.I3.R(Ape);},Ae8:function(E){if(this.ARV===
E)return;this.ARV=E;A.pe([this,this.ALh],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkU._Init.call(this.I3={
I:this},0);this.__proto__=C.Fz;this.Dr(C.Abx);this.Y.H(Fe);this.Y.JP(1);this.I3.
H(Fe);this.J(this.Y,0);this.J(this.I3,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I3._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I3._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A65={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A65;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvO={K0:null,MS:null,AY:0,Yl:function(){this.K0=null;this.MS=null;this.AY=0;
},Or:function(A8){var Hf;Hf=A._NewObject(C.A65,0);Hf.A4=A8;if(!this.K0){this.K0=
Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}},AmY:
function(){var B;var RL=0;var Oe=this.K0;while(!!Oe){RL+=Oe.A4;Oe=Oe.Ah;}return RL;
},AjS:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},Aq0:function(){
var B;if(!this.AY)return 0;var A1c=this.AjS();var Ade=0;var Oe=this.K0;while(!!Oe
){Ade+=Math.pow(Oe.A4-A1c,2);Oe=Oe.Ah;}Ade/=this.AY;Ade=Math.sqrt(Ade);return Ade;
},_Init:function(aArg){this.__proto__=C.AvO;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AN_={Ge:null,Aew:null,Ys:null,C5:null,I3:null,
CP:function(){this.A4j(this);},Init:function(aArg){A.zV([this,this.A4j],A._GetAutoObject(
A.Device.Device).Pm,0);A.pe([this,this.A4j],this);},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},A4j:function(G){this.Ys.Ce(-1);this.I3.Z(!this.Ge.AX.B$());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Ge._Init.call(this.Ge={I:this},0);C.
Aew._Init.call(this.Aew={I:this},0);C.Ys._Init.call(this.Ys={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkU._Init.call(this.I3={I:this},0);this.__proto__=
C.AN_;this.N.Z(true);this.Dr(C.AO6);this.Ge.H(Ah4);this.Ge.NZ(C.AmP);this.Aew.H(
IT);this.Ys.H(As6);this.C5.DC(Bq7);this.C5.DM(Bq8);this.C5.Ng(3);this.C5.L(A.jb.
Text);this.I3.H(Aom);this.I3.R((A.aaR(A.acf.A7O)+AZO)+A.aaR(A.acf.A59));this.J(this.
Ge,0);this.J(this.Aew,0);this.J(this.Ys,0);this.J(this.C5,0);this.J(this.I3,0);this.
N.CC=[this,this.Ev];this.N.CY(A.aaL(A.ach.E5));this.Ge.Zw(A._GetAutoObject(A.Device.
Device).Pm);this.Ys.Zw(A._GetAutoObject(A.Device.Device).Pm);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Ge._Done();this.Aew._Done();this.Ys._Done();
this.C5._Done();this.I3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Ge._ReInit();this.Aew._ReInit();this.Ys._ReInit();this.C5.
_ReInit();this.I3._ReInit();this.I3.R((A.aaR(A.acf.A7O)+AZO)+A.aaR(A.acf.A59));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ys).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOb={At_:null,At9:null,Aua:null,At$:null,Auc:null,Aub:null,Aue:null,Aud:null
,AaN:null,YA:null,Abo:null,Abn:null,RatedAttribute:0,Init:function(aArg){this.SG(
2);},DE:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SG(3);break;case 1:this.SG(2);break;case
4:this.SG(1);break;case 3:this.SG(4);break;default:this.SG(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SG(1);break;case 1:this.SG(4);break;case 4:this.
SG(3);break;case 3:this.SG(2);break;default:this.SG(0);}break;default:D5.NH=true;
}},Ap9:function(L2,AcY){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,AcY,true);Fw.
CW(HX);var AAV=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAV.Initialize(
3,5,0,true);Fw.CW(AAV);L2.Bk(Fw);},Aiz:function(G){var Ap7=0;var A3G=A._GetAutoObject(
A.Device.Device).Bt.B$();var B1=A._NewObject(A.Device.Rating,0);while(Ap7<A3G){B1.
EU(Ap7,A._GetAutoObject(A.Device.Device).Bt);this.Bc7(B1,0);var BBT=A._GetAutoObject(
A.Device.Helper).ZU(2);this.Bc7(B1,BBT);Ap7++;}C.Fz.Aiz.call(this,G);},Aav:function(
G){A.pe([this,this.BcK],this);C.Fz.Aav.call(this,G);},Adn:function(G){this.At_=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At$=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aua=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aud=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aue=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fz.Adn.
call(this,G);},DJ:function(G){C.Fz.DJ.call(this,G);this.N.ON(true);this.N.OO(true
);},Bc7:function(D3,BbI){if(!D3||(D3.Timestamp<BbI))return;if(!BbI){this.At_.Set(
D3.Appearance,this.At_.Get(D3.Appearance)+1);this.Aua.Set(D3.Faeces,this.Aua.Get(
D3.Faeces)+1);this.Auc.Set(D3.Feed,this.Auc.Get(D3.Feed)+1);this.Aue.Set(D3.Respiratory
,this.Aue.Get(D3.Respiratory)+1);}else{this.At9.Set(D3.Appearance,this.At9.Get(D3.
Appearance)+1);this.At$.Set(D3.Faeces,this.At$.Get(D3.Faeces)+1);this.Aub.Set(D3.
Feed,this.Aub.Get(D3.Feed)+1);this.Aud.Set(D3.Respiratory,this.Aud.Get(D3.Respiratory
)+1);}},SG:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YA.Kt(this.AaN.Lt(E));A.pe([this,this.BcK],this);},BcK:function(G){var AaO=null;
var AaP=null;switch(this.RatedAttribute){case 2:{AaO=this.At9;AaP=this.At_;}break;
case 4:{AaO=this.At$;AaP=this.Aua;}break;case 1:{AaO=this.Aub;AaP=this.Auc;}break;
case 0:{AaO=A._NewObject(A.Device.Int32ArrayWrapper,0);AaP=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaO=this.Aud;AaP=this.Aue;}break;default:throw new
Error(Bq9+this.RatedAttribute.toFixed());}var AGi=A._NewObject(A.acv.AT9,0);AGi.
Or(AaO.Get(3),A.jb.E4);AGi.Or(AaO.Get(2),A.jb.H8);AGi.Or(AaO.Get(1),A.jb.Gk);var
AGj=A._NewObject(A.acv.AT9,0);AGj.Or(AaP.Get(3),A.jb.E4);AGj.Or(AaP.Get(2),A.jb.
H8);AGj.Or(AaP.Get(1),A.jb.Gk);this.Abn.Aca(AGi);this.Abo.Aca(AGj);var A37=AaO.AmY(
)-AaO.Get(5);var Bfj=0;var Bfh=0;if(A37>0){Bfj=(AaO.Get(2)/A37)*100;Bfh=(AaO.Get(
1)/A37)*100;}var AK7=AaP.AmY()-AaP.Get(5);this.I3.Z(!AK7);var Bfk=0;var Bfi=0;if(
AK7>0){Bfk=(AaP.Get(2)/AK7)*100;Bfi=(AaP.Get(1)/AK7)*100;}this.Abn.A_u(A.abk(Bfj
,0,0)+AfE);this.Abn.A9_(A.abk(Bfh,0,0)+AfE);this.Abo.A_u(A.abk(Bfk,0,0)+AfE);this.
Abo.A9_(A.abk(Bfi,0,0)+AfE);},_Init:function(aArg){C.Fz._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaN={I:this},0);C.NE._Init.call(this.
YA={I:this},0);C.ACE._Init.call(this.Abo={I:this},0);C.ACE._Init.call(this.Abn={
I:this},0);this.__proto__=C.AOb;this.Dr(C.AO7);this.AkC(A.aaR(A.acf.A5_));this.Ae8(
A.aaR(A.acf.Anp));this.YA.H(IT);this.YA.Aj(true);this.YA.T(A.aaR(A.acf.Axn)+A.aaR(
A.acf.Colon));this.YA.Bh(false);this.YA.BmM(false);this.Abo.H(Bq_);this.Abo.T(A.
aaR(A.acf.AF5));this.Abn.H(Bq$);this.Abn.T(A.aaR(A.acf.A7c));this.I3.H(Aom);this.
J(this.YA,-1);this.J(this.Abo,-1);this.J(this.Abn,-1);this.At_=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aua=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aub=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aue=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aud=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fz;this.AaN._Done();this.YA._Done();this.Abo._Done();this.Abn.
_Done();C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.
AaN._ReInit();this.YA._ReInit();this.Abo._ReInit();this.Abn._ReInit();this.AkC(A.
aaR(A.acf.A5_));this.Ae8(A.aaR(A.acf.Anp));this.YA.T(A.aaR(A.acf.Axn)+A.aaR(A.acf.
Colon));this.Abo.T(A.aaR(A.acf.AF5));this.Abn.T(A.aaR(A.acf.A7c));},_Mark:function(
D){var B;C.Fz._Mark.call(this,D);if((B=this.At_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aua)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aub)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aue)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aud)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOc={Aev:null,UN:null,UO:null,Aeu:null,UK:null,UL:null,AJJ:0,AJI:0,AJn:0,AJm:
0,Adg:false,CP:function(){this.Aav(this);},Ap9:function(L2,AcY){if(!L2)return;var
Fw=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,AcY,true);Fw.CW(HX);var ABc=A._NewObject(A.Device.Int32FilterCriterion
,0);ABc.Initialize(7,2,0,true);Fw.CW(ABc);L2.Bk(Fw);},Aiz:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJJ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJI++;var Ap7=0;var A3G=A._GetAutoObject(
A.Device.Device).Bt.B$();var At8;var ABw=0;while(Ap7<A3G){this.Adg=true;At8=A._GetAutoObject(
A.Device.Device).Bt.I4(Ap7,9);if(At8===1)ABw=1;else if((At8===2)&&(ABw!==1))ABw=
2;Ap7++;}if(ABw===1)this.AJm++;else if(ABw===2)this.AJn++;C.Fz.Aiz.call(this,G);
},Aav:function(G){var Bff=0;var Bfg=0;if(this.Te>0){Bff=(this.AJJ/this.Te)*100;Bfg=(
this.AJI/this.Te)*100;}this.UN.Kt(((((((A.abk(Bff,0,0)+AIC)+this.AJJ.toFixed())+
CQ)+A.aaR(A.acf.AEm))+CQ)+this.Te.toFixed())+O5);this.UO.Kt(((((((A.abk(Bfg,0,0)+
AIC)+this.AJI.toFixed())+CQ)+A.aaR(A.acf.AEm))+CQ)+this.Te.toFixed())+O5);var Bfd=
0;var Bfe=0;if(this.Te>0){Bfd=(this.AJn/this.Te)*100;Bfe=(this.AJm/this.Te)*100;
}this.UK.Kt(((((((A.abk(Bfd,0,0)+AIC)+this.AJn.toFixed())+CQ)+A.aaR(A.acf.AEm))+
CQ)+this.Te.toFixed())+O5);this.UL.Kt(((((((A.abk(Bfe,0,0)+AIC)+this.AJm.toFixed(
))+CQ)+A.aaR(A.acf.AEm))+CQ)+this.Te.toFixed())+O5);this.I3.Z(!this.Adg);C.Fz.Aav.
call(this,G);},Adn:function(G){this.AJm=0;this.AJn=0;this.AJI=0;this.AJJ=0;this.
Adg=false;C.Fz.Adn.call(this,G);},_Init:function(aArg){C.Fz._Init.call(this,aArg
);C.Agw._Init.call(this.Aev={I:this},0);C.Aju._Init.call(this.UN={I:this},0);C.Aju.
_Init.call(this.UO={I:this},0);C.Agw._Init.call(this.Aeu={I:this},0);C.Aju._Init.
call(this.UK={I:this},0);C.Aju._Init.call(this.UL={I:this},0);this.__proto__=C.AOc;
this.Dr(C.AO8);this.AkC(A.aaR(A.acf.A5$));this.Ae8(A.aaR(A.acf.Arw));this.Aev.H(
IT);this.Aev.Aj(true);this.Aev.T(A.aaR(A.acf.A6d));this.Aev.Bh(false);this.UN.H(
P9);this.UN.Aj(true);this.UN.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UN.
Bh(true);this.UN.AkH(2);this.UO.H(Aai);this.UO.Aj(true);this.UO.T(A.aaR(A.acf.Avs
)+A.aaR(A.acf.Colon));this.UO.Bh(true);this.UO.AkH(1);this.Aeu.H(Ali);this.Aeu.Aj(
true);this.Aeu.T(A.aaR(A.acf.A6e));this.Aeu.Bh(false);this.UK.H(Aov);this.UK.Aj(
true);this.UK.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UK.Bh(true);this.
UK.AkH(2);this.UL.H(As6);this.UL.Aj(true);this.UL.T(A.aaR(A.acf.Avs)+A.aaR(A.acf.
Colon));this.UL.Bh(true);this.UL.AkH(1);this.J(this.Aev,0);this.J(this.UN,0);this.
J(this.UO,0);this.J(this.Aeu,0);this.J(this.UK,0);this.J(this.UL,0);this.UN.S(A.
aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UL.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fz;this.Aev._Done();this.UN._Done(
);this.UO._Done();this.Aeu._Done();this.UK._Done();this.UL._Done();C.Fz._Done.call(
this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Aev._ReInit();this.UN._ReInit(
);this.UO._ReInit();this.Aeu._ReInit();this.UK._ReInit();this.UL._ReInit();this.
AkC(A.aaR(A.acf.A5$));this.Ae8(A.aaR(A.acf.Arw));this.Aev.T(A.aaR(A.acf.A6d));this.
UN.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UO.T(A.aaR(A.acf.Avs)+A.aaR(
A.acf.Colon));this.Aeu.T(A.aaR(A.acf.A6e));this.UK.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UL.T(A.aaR(A.acf.Avs)+A.aaR(A.acf.Colon));this.UN.S(A.aaL(A.fl.
Ak));this.UO.S(A.aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UL.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.Aev)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeu)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqO={K8:null
,Ajj:null,Ajk:null,Amp:null,AbB:null,W2:null,Aby:null,S2:null,Abz:null,S3:null,AbC:
null,W3:null,Ay:null,Adb:0,AAp:0,Apx:0,A2p:0,BdB:0,CP:function(){this.Aav(this);
},DE:function(G){switch(this.Cr.CO){case 4:{if(this.I3.Fo())return;var Qu=this.Y.
Br[1]+80;this.Y.Gd([this.Y.Br[0],Qu]);this.Y.Vx(null,null);}break;case 5:{if(this.
I3.Fo())return;var Qu=this.Y.Br[1]-80;this.Y.Gd([this.Y.Br[0],Qu]);this.Y.Vx(null
,null);}break;default:C.Fz.DE.call(this,G);}},Ap9:function(L2,AcY){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,AcY,true);Fw.CW(HX);var Ac9=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac9.Initialize(8,2,0,true);Fw.CW(Ac9);L2.Bk(Fw);},Aiz:function(G){if(this.Bdr(
)){this.K8.Or(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Ari()){var Qg=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qg>0){var A1Z=A._GetAutoObject(A.acj.DV).AlB(Qg,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajj.
Or(A1Z);}}var A2J=A._GetAutoObject(A.Device.Device).Bt.B$()-2;if(A2J>=0){var BzK=
A._GetAutoObject(A.Device.Device).Bt.ACZ(A2J,8);var BzJ=A._GetAutoObject(A.Device.
Device).Bt.Hv(A2J,6);var Qg=A._GetAutoObject(A.Device.Helper).L9(BzJ,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qg>0){var A1Z=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzK)/Qg)|0;this.Ajk.Or(A1Z);}}if((A._GetAutoObject(
A.Device.Helper).W.Ari()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RP()<=180)){var ALs=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var To=A._GetAutoObject(A.Device.
Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAY=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALs/To);this.Amp.Or(BAY);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adb++;this.Apx=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZU(7)){this.AAp++;this.A2p=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BdB=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dq());}}C.Fz.Aiz.call(
this,G);},Aav:function(G){var A4s=this.Ajj.AjS()|0;var A4u=this.Ajk.AjS()|0;if(this.
Adb>1)A._GetAutoObject(A.Device.Device).A7(56,true,this.Adb.toFixed(),0,null);if(
this.Adb===1)A._GetAutoObject(A.Device.Device).A7(53,true,this.Apx.toFixed(),0,null
);if(this.AAp>1)A._GetAutoObject(A.Device.Device).A7(52,true,this.AAp.toFixed(),
0,null);if(this.AAp===1)A._GetAutoObject(A.Device.Device).A7(57,true,(this.A2p.toFixed(
)+As_)+this.BdB.toFixed(),0,null);if(this.K8.AY>0)this.W2.T(((((((A._GetAutoObject(
A.Device.Converter).Ax0(this.K8.AjS()|0,1)+Ayy)+A._GetAutoObject(A.Device.Converter
).Ax0(this.K8.Aq0()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).Af2())+Ayz)+this.K8.AY.
toFixed())+O5);else this.W2.T(A.aaR(A.acf.Unknown));if(this.Ajj.AY>0)this.S2.T(((((((
A._GetAutoObject(A.Device.Converter).S7(A4s,2,true)+Ayy)+A._GetAutoObject(A.Device.
Converter).S7(this.Ajj.Aq0()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).AaA())+Ayz
)+this.Ajj.AY.toFixed())+O5);else this.S2.T(A.aaR(A.acf.Unknown));if(this.Ajk.AY>
0)this.S3.T(((((((A._GetAutoObject(A.Device.Converter).S7(A4u,2,true)+Ayy)+A._GetAutoObject(
A.Device.Converter).S7(this.Ajk.Aq0()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).
AaA())+Ayz)+this.Ajk.AY.toFixed())+O5);else this.S3.T(A.aaR(A.acf.Unknown));if(this.
Amp.AY>0)this.W3.T(((((((A.abk(this.Amp.AjS(),0,1)+Ayy)+A.abk(this.Amp.Aq0(),0,1
))+CQ)+A.aaR(A.acf.BhB))+Ayz)+this.Amp.AY.toFixed())+O5);else this.W3.T(A.aaR(A.
acf.Unknown));var A4t=0;var A4v=0;var Adg=false;if(this.K8.AY>0)Adg=true;var Ib=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJ1=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ1)?AJ1:null))Ib=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ1)?AJ1:null
).A4;}if(this.Ajj.AY>0){Adg=true;A4t=A._GetAutoObject(A.Device.Converter).A$L(A4s
,Ib);}if(this.Ajk.AY>0){Adg=true;A4v=A._GetAutoObject(A.Device.Converter).A$L(A4u
,Ib);}this.S2.AkH(A4t);this.S3.AkH(A4v);this.I3.Z(!Adg);C.Fz.Aav.call(this,G);},
Adn:function(G){this.K8.Yl();this.Ajj.Yl();this.Ajk.Yl();this.Amp.Yl();this.Adb=
0;this.AAp=0;this.Apx=0;this.A2p=0;C.Fz.Adn.call(this,G);},Fj:function(G){var B;
this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},Bdr:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agw._Init.call(this.AbB={I:
this},0);C.IE._Init.call(this.W2={I:this},0);C.Agw._Init.call(this.Aby={I:this},
0);C.Aju._Init.call(this.S2={I:this},0);C.Agw._Init.call(this.Abz={I:this},0);C.
Aju._Init.call(this.S3={I:this},0);C.Agw._Init.call(this.AbC={I:this},0);C.IE._Init.
call(this.W3={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqO;
this.Dr(C.Avr);this.AkC(A.aaR(A.acf.A6a));this.Ae8(A.aaR(A.acf.Akp));this.AbB.H(
AIy);this.AbB.Aj(true);this.AbB.T(A.aaR(A.acf.A43));this.AbB.Bh(false);this.AbB.
Kr(5);this.W2.H(AZP);this.W2.Aj(true);this.W2.T(A.jV);this.W2.Bh(true);this.Aby.
H(Atb);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.ALR));this.Aby.Bh(false);this.Aby.
Kr(5);this.S2.H(Atc);this.S2.Aj(true);this.S2.T(A.jV);this.S2.Bh(true);this.S2.Kt(
A.jV);this.Abz.H(Atd);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.Auw));this.Abz.Bh(
false);this.Abz.Kr(5);this.S3.H(Bra);this.S3.Aj(true);this.S3.T(A.jV);this.S3.Bh(
true);this.S3.Kt(A.jV);this.AbC.H(AZQ);this.AbC.Aj(true);this.AbC.T(A.aaR(A.acf.
A4$));this.AbC.Bh(false);this.AbC.Kr(5);this.W3.H(AoB);this.W3.Aj(true);this.W3.
T(A.jV);this.W3.Bh(true);this.Ay.H(Is);this.J(this.AbB,-1);this.J(this.W2,-1);this.
J(this.Aby,-1);this.J(this.S2,-1);this.J(this.Abz,-1);this.J(this.S3,-1);this.J(
this.AbC,-1);this.J(this.W3,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.
K8=A._NewObject(C.AvO,0);this.Ajj=A._NewObject(C.AvO,0);this.Ajk=A._NewObject(C.
AvO,0);this.W2.S(A.aaL(A.fl.Af));this.S2.S(A.aaL(A.fl.Ak));this.S3.S(A.aaL(A.fl.
Ak));this.W3.S(A.aaL(A.fl.Ak));this.Amp=A._NewObject(C.A6k,0);},_Done:function(){
this.__proto__=C.Fz;this.AbB._Done();this.W2._Done();this.Aby._Done();this.S2._Done(
);this.Abz._Done();this.S3._Done();this.AbC._Done();this.W3._Done();this.Ay._Done(
);C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.AbB._ReInit(
);this.W2._ReInit();this.Aby._ReInit();this.S2._ReInit();this.Abz._ReInit();this.
S3._ReInit();this.AbC._ReInit();this.W3._ReInit();this.Ay._ReInit();this.AkC(A.aaR(
A.acf.A6a));this.Ae8(A.aaR(A.acf.Akp));this.AbB.T(A.aaR(A.acf.A43));this.Aby.T(A.
aaR(A.acf.ALR));this.Abz.T(A.aaR(A.acf.Auw));this.AbC.T(A.aaR(A.acf.A4$));this.W2.
S(A.aaL(A.fl.Af));this.S2.S(A.aaL(A.fl.Ak));this.S3.S(A.aaL(A.fl.Ak));this.W3.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((
B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amp)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abx={_Init:function(aArg){C.AjV._Init.call(this,aArg);this.__proto__=C.Abx;this.
Dd.Aw(A.aaL(A.ach.ADx));},_className:"Application::HeaderEvaluationFilter"};C.Kn={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DY:function(G){C.AjV.DY.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdY(A._GetAutoObject(A.Device.
Device).Kh));},_Init:function(aArg){C.AjV._Init.call(this,aArg);this.__proto__=C.
Kn;},_ReInit:function(){C.AjV._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avr={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DV).Bc0());},_Init:
function(aArg){C.Abx._Init.call(this,aArg);this.__proto__=C.Avr;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO8={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.AbG));},_Init:function(aArg){C.Abx._Init.call(this,
aArg);this.__proto__=C.AO8;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO7={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.Am3));},_Init:function(aArg){
C.Abx._Init.call(this,aArg);this.__proto__=C.AO7;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO6={Sm:null,Dd:null,AP:null,CP:function(){this.Sm.R(A.aaR(A.acf.AM9));},De:
function(E){C.BR.De.call(this,E);this.Sm.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CH._Init.call(this.Sm={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO6;this.Sm.H(Brb);this.Sm.R(A.aaR(A.acf.AM9));this.Sm.A6(0x11);this.Dd.H(Brc);
this.AP.DC(Brd);this.AP.DM(Bre);this.AP.L(A.jb.Bc);this.J(this.Sm,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sm.S(A.aaL(A.fl.Af));this.Sm.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AQe));},_Done:function(){this.__proto__=C.BR;this.Sm._Done();this.
Dd._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sm._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sm.R(A.aaR(
A.acf.AM9));this.Sm.S(A.aaL(A.fl.Af));this.Sm.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aew={TU:null,Aj5:
null,Aj2:null,Aj3:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TU={I:this},0);A.acg.Ap._Init.call(this.Aj5={I:this},0);A.acg.Ap._Init.
call(this.Aj2={I:this},0);A.acg.Ap._Init.call(this.Aj3={I:this},0);this.__proto__=
C.Aew;this.TU.H(Brf);this.TU.R(A.aaR(A.acf.Year));this.TU.A6(0x11);this.TU.L(A.jb.
Text);this.Aj5.H(A$8);this.Aj5.L(A.jb.Text);this.Aj2.H(Brg);this.Aj2.L(A.jb.Text
);this.Aj3.H(Brh);this.Aj3.L(A.jb.Text);this.J(this.TU,0);this.J(this.Aj5,0);this.
J(this.Aj2,0);this.J(this.Aj3,0);this.TU.S(A.aaL(A.fl.Km));this.TU.A2(A.aaL(A.fl.
Ik));this.Aj5.Aw(A.aaL(A.ach.AQp));this.Aj2.Aw(A.aaL(A.ach.AQo));this.Aj3.Aw(A.aaL(
A.ach.AQw));},_Done:function(){this.__proto__=C.EA;this.TU._Done();this.Aj5._Done(
);this.Aj2._Done();this.Aj3._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TU._ReInit();this.Aj5._ReInit();this.Aj2._ReInit();this.
Aj3._ReInit();this.TU.R(A.aaR(A.acf.Year));this.TU.S(A.aaL(A.fl.Km));this.TU.A2(
A.aaL(A.fl.Ik));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj3)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmP={AjA:null,AP:null
,A_:null,Ea:null,UH:null,SU:null,Gu:null,XM:0,AtH:0,AlF:0,ABx:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SU.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SU.M[2]-1,0,this.SU.M[
2]+1,aSize[1]]);this.UH.H([this.SU.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UH.M[2]-1,0,this.UH.M[2]+1,aSize[1]]);this.Gu.H([this.UH.M[2],0,aSize[
0],aSize[1]]);this.AjA.H(this.Gu.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABx.toFixed());this.SU.L(this.V.AQ);this.SU.R(this.AlF.toFixed());this.UH.
L(this.V.AQ);this.UH.R(this.AtH.toFixed());var B1=this.BAX(this.XM);this.Gu.L(A.
_GetAutoObject(A.acj.Assessment).XA(B1));this.AjA.L(A._GetAutoObject(A.acj.Assessment
).Ql(B1));this.Gu.R(A.abk(this.XM,0,0)+AfE);},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;Ad=(this.AX.B$()-Ad)-1;if(!!this.AX){this.AlF=this.AX.CF(Ad,1);this.AtH=
this.AX.CF(Ad,2);this.ABx=this.AX.CF(Ad,0);if(this.AlF>0)this.XM=(this.AtH/this.
AlF)*100;else this.XM=0;this.Am();}},BAX:function(XM){if(XM>=8)return 1;else if(
XM>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AK._Init.call(this.AjA={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UH={I:this},0);A.acg.Text._Init.call(this.SU={I:this},0
);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AmP;this.AjA.H(Aos);
this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.H(Aos);this.Ea.L(A.jb.Bc);this.UH.
L(A.jb.Text);this.SU.H(Aos);this.SU.L(A.jb.Text);this.Gu.L(A.jb.Text);this.J(this.
AjA,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UH,0);this.
J(this.SU,0);this.J(this.Gu,0);this.UH.S(A.aaL(A.fl.Af));this.SU.S(A.aaL(A.fl.Af
));this.Gu.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.AjA._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UH._Done(
);this.SU._Done();this.Gu._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AjA._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UH._ReInit();this.SU._ReInit();this.Gu._ReInit();this.UH.S(A.aaL(
A.fl.Af));this.SU.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Aju={
BT:null,AxV:A.jV,Rating:0,Ai:function(Ae){C.IE.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Ql(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XA(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IE.S.call(this,E);if((E===A.aaL(A.fl.Km))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ik))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kt:function(E){if(this.AxV===E)return;this.AxV=E;this.
BT.R(E);},AkH:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Aju;this.BT.AZ(0x34);this.BT.H(Aal);this.BT.I9(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IE;this.BT._Done();C.IE._Done.call(
this);},_ReInit:function(){C.IE._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IE._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACE={
N2:null,SK:null,V:null,AnR:null,AnQ:null,Acj:null,Aci:null,DK:Lv,A$Q:A.jV,A_O:A.
jV,Aca:function(E){if(this.N2===E)return;this.N2=E;this.SK.Aca(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_u:function(E){if(this.A$Q===E
)return;this.A$Q=E;this.Acj.R(E);},A9_:function(E){if(this.A_O===E)return;this.A_O=
E;this.Aci.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SK._Init.
call(this.SK={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnR={I:this},0);A.acg.AK._Init.call(this.AnQ={I:this},0);A.acg.Text._Init.
call(this.Acj={I:this},0);A.acg.Text._Init.call(this.Aci={I:this},0);this.__proto__=
C.ACE;this.H(Bri);this.SK.H(Brj);this.SK.Ar(false);this.SK.BmV(360);this.SK.Bm5(
0.5);this.V.AZ(0x1D);this.V.H(W$);this.V.KS(true);this.V.R(Lv);this.V.L(A.jb.Text
);this.AnR.H(A$9);this.AnR.L(A.jb.H8);this.AnQ.H(A$_);this.AnQ.L(A.jb.Gk);this.Acj.
AZ(0x1D);this.Acj.H(A$9);this.Acj.L(A.jb.Text);this.Aci.AZ(0x1D);this.Aci.H(A$_);
this.Aci.L(A.jb.CS);this.J(this.SK,0);this.J(this.V,0);this.J(this.AnR,0);this.J(
this.AnQ,0);this.J(this.Acj,0);this.J(this.Aci,0);this.SK.Bm6(A.aaL(A.acv.ATI));
this.V.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SK._Done();this.V._Done();this.AnR.
_Done();this.AnQ._Done();this.Acj._Done();this.Aci._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SK._ReInit();this.V._ReInit(
);this.AnR._ReInit();this.AnQ._ReInit();this.Acj._ReInit();this.Aci._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkU={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkU;this.H(UY);this.Background.AZ(0x3F);this.Background.
H(UY);this.Background.L(A.jb.Bjv);this.Text.AZ(0x3F);this.Text.H(UY);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rc={Ak5:null,NR:null,C8:null,AcH:null,JK:null,TemperatureUnit:null,ME:null,PR:
null,Si:null,Uv:null,Lp:null,Jd:null,Z6:null,Z5:null,Sk:null,HG:null,AjK:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlN());
this.Uv.R(A._GetAutoObject(A.acj.Temperature).AlN());this.Sk.Z(!A._GetAutoObject(
A.Device.Device).AmR);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An9();this.AxS(
);this.AcK();this.AxT();},IY:function(G){this.WR(this);},CD:function(G){var B;C.
AB.CD.call(this,G);A.zX([this,this.AKw],[B=A._GetAutoObject(A.Device.Device),B.AEy
,B.AIO],0);A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIQ
],0);A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.ASv,B.AZ7],0);A.
zX([this,this.A25],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ath],0);A.zX([this
,this.A2X],[B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIL],0);A._GetAutoObject(
A.Device.Device).AhM();if(A._GetAutoObject(A.Device.Device).AmR)A._GetAutoObject(
A.Device.Device).Ae0(true);A._GetAutoObject(A.Device.Device).AxE();A.pe([this,this.
A2X],this);A.pe([this,this.AAE],this);A.pe([this,this.A25],this);},E6:function(G
){var B;A._GetAutoObject(A.Device.Device).AhM();A._GetAutoObject(A.Device.Device
).Ur(false);A._GetAutoObject(A.Device.Device).Ae_(false);A._GetAutoObject(A.Device.
Device).Ae0(false);A.z$([this,this.AKw],[B=A._GetAutoObject(A.Device.Device),B.AEy
,B.AIO],0);A.z$([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIQ
],0);A.z$([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.ASv,B.AZ7],0);A.
z$([this,this.A25],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ath],0);A.z$([this
,this.A2X],[B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIL],0);},AAE:function(G
){this.Am();},An9:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C8.L(A.jb.Gk);this.JK.L(this.C8.AQ);this.
ME.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C8.L(A.jb.AV);this.JK.L(A.jb.Text);this.ME.L(this.JK.AQ);this.TemperatureUnit.
L(this.JK.AQ);this.HG.L(A.jb.Gk);}}},AxS:function(){this.Ak5.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JK.R(A.aaR(A.acf.ADN));this.C8.Aw(A.aaL(A.ach.AvF));this.C8.Cw(0);
this.NR.Cw(0);}break;case 1:{this.AVn(A._GetAutoObject(A.Device.Device).Ls,false
);this.C8.Aw(A.aaL(A.ach.AvF));this.NR.Cw(0);}break;case 2:{this.Si.R(A._GetAutoObject(
A.Device.Converter).Ak4(A._GetAutoObject(A.Device.Device).AF9));this.AVn(A._GetAutoObject(
A.Device.Device).Ls,false);this.C8.Aw(null);this.NR.Cw(1);this.AcH.Z(true);this.
PR.Z(true);this.Si.Z(true);this.Uv.Z(true);}break;case 3:{this.AUr();this.AVn(A.
_GetAutoObject(A.Device.Device).Ls,true);this.AcH.Z(false);this.PR.Z(false);this.
Si.Z(false);this.Uv.Z(false);}break;case 4:{this.JK.R(A.aaR(A.acf.BjI));this.ME.
R(A.aaR(A.acu.Ako));this.C8.Aw(A.aaL(A.ach.AvH));this.C8.Cw(2);this.NR.Cw(0);}break;
default:A.ab5("%s%e",AHX,A._GetAutoObject(A.Device.Device).MeasureState);}},AcK:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ls<=3240)||(A._GetAutoObject(A.Device.Device
).Ls>=5460))this.N.C6(null);else this.N.C6(A.aaL(A.ach.Aez));this.N.Ct(null);}break;
default:;}},AsG:function(G){A._GetAutoObject(C.A$).Fy();},WR:function(G){},A0j:function(
s){this.WR(s);},AkZ:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAK(this);break;default:;}},A0i:function(s){this.AkZ(s);},AVn:
function(AoR,Bzy){if(Bzy)this.Lp.L(A.jb.Bm);else this.Lp.L(A.jb.Gk);if(AoR<=3240
){this.ME.Z(false);this.TemperatureUnit.Z(false);this.Lp.Z(true);this.Lp.R(A.aaR(
A.acu.AU9));}else if(AoR>=5460){this.ME.Z(false);this.TemperatureUnit.Z(false);this.
Lp.Z(true);this.Lp.R(A.aaR(A.acu.Bps));}else{this.ME.Z(true);this.TemperatureUnit.
Z(true);this.Lp.Z(false);this.ME.R(A._GetAutoObject(A.Device.Converter).Ak4(AoR)
);}},AxT:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ls<=3240)||(A._GetAutoObject(A.Device.
Device).Ls>=5460))this.JK.R(A.aaR(A.acf.ADN));else this.JK.R(A.aaR(A.acf.Bp4));break;
default:;}},AxU:function(){},BpN:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z6.Ar(true);break;case 4:this.Z5.Ar(true);break;default:{
this.Z6.Ar(false);this.Z5.Ar(false);A._GetAutoObject(A.Device.Device).Ae_(false);
}}},AKw:function(G){this.Am();this.AxU();this.BpN();this.BpL();},A25:function(G){
if(A._GetAutoObject(A.Device.Device).AmS){this.Sk.L(A.jb.H8);this.Sk.Cw(1);}else{
this.Sk.L(A.jb.Bm);this.Sk.Cw(0);}},BAK:function(G){if(!A._GetAutoObject(A.Device.
Device).AmR)A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.Device
).AmS);},BpL:function(){if(A._GetAutoObject(A.Device.Device).AmR){this.Sk.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae0(true);else A._GetAutoObject(A.Device.Device).Ae0(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sk.Z(true);else this.Sk.Z(false);},AKy:function(
G){this.CD(this);},AUr:function(){A.ab5("%s",A$7);},A2X:function(G){if(A._GetAutoObject(
A.Device.Device).HG){this.JK.H(Brk);this.ME.H(Brl);this.TemperatureUnit.H(Brm);}
else{this.JK.H(Brn);this.ME.H(Bro);this.TemperatureUnit.H(Brp);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gm._Init.call(this.Ak5={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcH={I:this},0);A.acg.Text._Init.call(this.JK={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.PR={I:this},0);A.acg.Text._Init.call(this.
Si={I:this},0);A.acg.Text._Init.call(this.Uv={I:this},0);C.CH._Init.call(this.Lp={
I:this},0);A.Device.TG._Init.call(this.Jd={I:this},0);A.Device.TG._Init.call(this.
Z6={I:this},0);A.Device.TG._Init.call(this.Z5={I:this},0);A.acg.Ap._Init.call(this.
Sk={I:this},0);C.CH._Init.call(this.HG={I:this},0);A.acl.TG._Init.call(this.AjK={
I:this},0);this.__proto__=C.Rc;var B;this.N.Z(true);this.Ak5.Fp(1000);this.Ak5.B2=
2;this.NR.H(Brq);this.NR.L(A.jb.CS);this.C8.H(Brr);this.C8.L(A.jb.AV);this.C8.Cw(
0);this.C8.Z(true);this.AcH.H(Brs);this.AcH.L(A.jb.Text);this.AcH.Z(false);this.
JK.KS(true);this.JK.R(A.aaR(A.acf.ADN));this.JK.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.ME.A6(0x14);this.ME.R(A.aaR(A.acu.
Ako));this.ME.L(A.jb.Text);this.PR.H(Brt);this.PR.R(A.aaR(A.acf.PR));this.PR.L(A.
jb.Text);this.PR.Z(false);this.Si.H(Bru);this.Si.A6(0x14);this.Si.R(Brv);this.Si.
L(A.jb.Text);this.Si.Z(false);this.Uv.H(Brw);this.Uv.R(Brx);this.Uv.L(A.jb.Text);
this.Uv.Z(false);this.Lp.H(Bry);this.Lp.R(A.aaR(A.acu.AU9));this.Lp.A6(0x12);this.
Lp.L(A.jb.Gk);this.Jd.B2=false;this.Jd.Cx=true;this.Jd.HO(1);this.Jd.Fp(4000);this.
Jd.Un(0);this.Z6.B2=false;this.Z6.Cx=true;this.Z6.HO(2);this.Z6.Fp(400);this.Z6.
Un(200);this.Z5.B2=false;this.Z5.Cx=true;this.Z5.HO(3);this.Z5.Fp(500);this.Z5.Un(
250);this.Sk.H(Brz);this.HG.H(BrA);this.HG.Z(A._GetAutoObject(A.Device.Device).HG
);this.HG.R(A.aaR(A.acf.HG));this.HG.A6(0x12);this.HG.L(A.jb.Gk);this.AjK.Ar(A._GetAutoObject(
A.Device.Device).HG);this.AjK.Fp(500);this.AjK.Un(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.AcH,0);this.J(this.JK,0);this.J(this.TemperatureUnit,0);this.
J(this.ME,0);this.J(this.PR,0);this.J(this.Si,0);this.J(this.Uv,0);this.J(this.Lp
,0);this.J(this.Sk,0);this.J(this.HG,0);this.N.CC=[this,this.AsG];this.N.Cl=[this
,this.A0i];this.N.Cm=[this,this.A0j];this.N.CY(A.aaL(A.ach.Aey));this.Ak5.Q=[B=this.
C8,B.ASm,B.Cw];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.AvF));this.AcH.
Aw(A.aaL(A.ach.AQG));this.JK.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.ME.S(A.aaL(A.fl.Aer));this.PR.S(A.aaL(A.fl.Af));this.Si.S(A.aaL(A.fl.EK
));this.Uv.S(A.aaL(A.fl.EK));this.Lp.S(A.aaL(A.fl.Aer));this.Lp.A2(A.aaL(A.fl.EK
));this.Lp.Cv(A.aaL(A.fl.Af));this.Jd.Q=[B=A._GetAutoObject(A.Device.Device),B.ASD
,B.A0b];this.Z6.Q=[B=A._GetAutoObject(A.Device.Device),B.AED,B.AIR];this.Z5.Q=[B=
A._GetAutoObject(A.Device.Device),B.AED,B.AIR];this.Sk.Aw(A.aaL(A.ach.AqS));this.
HG.S(A.aaL(A.fl.EK));this.HG.A2(A.aaL(A.fl.Km));this.HG.Cv(A.aaL(A.fl.Ik));this.
AjK.Q=[B=this.HG,B.Fo,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak5._Done();this.NR._Done();this.C8._Done();this.AcH._Done();this.JK._Done(
);this.TemperatureUnit._Done();this.ME._Done();this.PR._Done();this.Si._Done();this.
Uv._Done();this.Lp._Done();this.Jd._Done();this.Z6._Done();this.Z5._Done();this.
Sk._Done();this.HG._Done();this.AjK._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak5._ReInit();this.NR._ReInit();this.C8._ReInit();
this.AcH._ReInit();this.JK._ReInit();this.TemperatureUnit._ReInit();this.ME._ReInit(
);this.PR._ReInit();this.Si._ReInit();this.Uv._ReInit();this.Lp._ReInit();this.Jd.
_ReInit();this.Z6._ReInit();this.Z5._ReInit();this.Sk._ReInit();this.HG._ReInit(
);this.AjK._ReInit();this.JK.R(A.aaR(A.acf.ADN));this.ME.R(A.aaR(A.acu.Ako));this.
PR.R(A.aaR(A.acf.PR));this.Lp.R(A.aaR(A.acu.AU9));this.HG.R(A.aaR(A.acf.HG));this.
JK.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.ME.S(A.aaL(A.fl.
Aer));this.PR.S(A.aaL(A.fl.Af));this.Si.S(A.aaL(A.fl.EK));this.Uv.S(A.aaL(A.fl.EK
));this.Lp.S(A.aaL(A.fl.Aer));this.Lp.A2(A.aaL(A.fl.EK));this.Lp.Cv(A.aaL(A.fl.Af
));this.HG.S(A.aaL(A.fl.EK));this.HG.A2(A.aaL(A.fl.Km));this.HG.Cv(A.aaL(A.fl.Ik
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak5)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUX={AcK:
function(){C.Rc.AcK.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Ct(null);this.N.C6(A.aaL(A.ach.AvI));}break;default:;}},
WR:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ls>3240)&&(A._GetAutoObject(A.Device.Device
).Ls<5460)){A._GetAutoObject(A.Device.Device).AhM();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKy(this);break;default:;}},AxT:
function(){C.Rc.AxT.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JK.R(A.aaR(A.acf.BjJ));break;default:;}},AxU:function(){C.Rc.AxU.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WF(16711680);this.Jd.Ar(true);}break;default:this.Jd.Ar(false);
}},AUr:function(){this.C8.Aw(A.aaL(A.ach.AvH));this.C8.Cw(0);this.NR.Cw(0);},_Init:
function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.AUX;this.Dr(C.AO4);},
_className:"Application::TemperatureMeasurementScreen"};C.AO9={Dd:null,IK:null,NT:
null,AP:null,Ag5:null,A_:null,De:function(E){C.BR.De.call(this,E);this.Dd.L(E);this.
IK.L(E);this.NT.L(E);this.Ag5.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag5={I:this},0);A.acg.C5._Init.call(this.A_={I:this},
0);this.__proto__=C.AO9;this.Dd.H(Ayv);this.IK.H(Aot);this.NT.H(AHx);this.AP.DC(
A$$);this.AP.DM(Baa);this.AP.L(A.jb.Bc);this.Ag5.H(BrB);this.Ag5.L(A.jb.CS);this.
A_.DC(BrC);this.A_.DM(BrD);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.IK,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.Ag5,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADx));this.IK.Aw(A.aaL(A.ach.AeA));this.NT.Aw(A.aaL(A.ach.AvA)
);this.Ag5.Aw(A.aaL(A.ach.AQd));},_Done:function(){this.__proto__=C.BR;this.Dd._Done(
);this.IK._Done();this.NT._Done();this.AP._Done();this.Ag5._Done();this.A_._Done(
);C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Dd._ReInit(
);this.IK._ReInit();this.NT._ReInit();this.AP._ReInit();this.Ag5._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Er:null,DS:null,AGt:
0,ANF:0,Init:function(aArg){A.zV([this,this.ALe],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALe],this);},ALe:function(G){var Ad=this.AGt;if(Ad<0){this.
DS.EX();this.DS.EB(this.ANF);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).An.AmW(Ad,14));this.DS.AE0(A._GetAutoObject(A.Device.Device).An.I4(Ad,13));this.
DS.Ae1(A._GetAutoObject(A.Device.Device).An.H3(Ad,8));this.DS.Uo(A._GetAutoObject(
A.Device.Device).An.H3(Ad,11));this.DS.Ae5(A._GetAutoObject(A.Device.Device).An.
H3(Ad,12));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_b:function(
E){if(this.AGt===E)return;this.AGt=E;A.pe([this,this.ALe],this);},A9F:function(E
){if(this.ANF===E)return;this.ANF=E;A.pe([this,this.ALe],this);},A8R:function(){
return this.AGt;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Er={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Er.H(BrE);this.Er.R(A.aaR(A.acf.GM));this.Er.A6(0x11);this.Er.L(A.jb.Text);this.
DS.H(AZR);this.J(this.Er,0);this.J(this.DS,0);this.Er.S(A.aaL(A.fl.Af));this.Er.
A2(A.aaL(A.fl.Ak));this.Er.Cv(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Er._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.DS._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ak));this.Er.Cv(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KO={AgM:null,Text:null,Afi:null,De:function(E
){C.BR.De.call(this,E);this.AgM.L(E);this.Text.L(E);this.Afi.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgM={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afi={I:this},0);this.__proto__=
C.KO;this.AgM.H(BrF);this.AgM.L(A.jb.Text);this.Text.H(BrG);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afi.H(BrH);this.Afi.L(A.jb.Text);this.
J(this.AgM,0);this.J(this.Text,0);this.J(this.Afi,0);this.AgM.Aw(A.aaL(A.ach.AO$
));this.Text.S(A.aaL(A.fl.Km));this.Text.A2(A.aaL(A.fl.Ik));},_Done:function(){this.
__proto__=C.BR;this.AgM._Done();this.Text._Done();this.Afi._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgM._ReInit();this.Text.
_ReInit();this.Afi._ReInit();this.Text.S(A.aaL(A.fl.Km));this.Text.A2(A.aaL(A.fl.
Ik));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afi
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO2={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO2;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO4={_Init:function(
aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO4;this.JV(this.Afi,-2);this.
Afi.Aw(A.aaL(A.ach.AbG));},_className:"Application::HeaderDeviceTemperature"};C.
Ys={Ai:function(Ae){C.AmP.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpt)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.AlF=0;this.AtH=0;this.XM=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B$();O++){this.AlF+=this.AX.CF(O,1);this.AtH+=
this.AX.CF(O,2);}if(this.AlF>0)this.XM=(this.AtH/this.AlF)*100;this.Am();}},_Init:
function(aArg){C.AmP._Init.call(this,aArg);this.__proto__=C.Ys;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.
Ik));},_ReInit:function(){C.AmP._ReInit.call(this);this.V.S(A.aaL(A.fl.Km));this.
V.A2(A.aaL(A.fl.Ik));},_className:"Application::EvaluationLossesSumItem"};C.A6j={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6j;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6k={K0:null,MS:null,AY:0,Yl:function(){this.K0=null;this.MS=null;this.AY=0;
},Or:function(A8){var Hf;Hf=A._NewObject(C.A6j,0);Hf.A4=A8;if(!this.K0){this.K0=
Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}},AmY:
function(){var B;var RL=0;var Oe=this.K0;while(!!Oe){RL+=Oe.A4;Oe=Oe.Ah;}return RL;
},AjS:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},Aq0:function(){
var B;if(!this.AY)return 0;var A1c=this.AjS();var Ade=0;var Oe=this.K0;while(!!Oe
){Ade+=Math.pow(Oe.A4-A1c,2);Oe=Oe.Ah;}Ade/=this.AY;Ade=Math.sqrt(Ade);return Ade;
},_Init:function(aArg){this.__proto__=C.A6k;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agw={Background:null,V:null,KT:0,Ut:5,Hj:false
,Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.Hj)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hg.T.call(this,E);this.V.R(E);},Bh:
function(E){if(this.Hj===E)return;this.Hj=E;this.Am();},Kr:function(E){if(this.Ut===
E)return;this.Ut=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agw;this.H(BF);this.Background.AZ(
0x3F);this.Background.H(BF);this.V.AZ(0x3F);this.V.H(All);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KT=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Cv(A.aaL(A.fl.Bi));},_Done:function(
){this.__proto__=C.Hg;this.Background._Done();this.V._Done();C.Hg._Done.call(this
);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Cv(A.aaL(A.fl.
Bi));},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANX={Wz:function(G){this.Agu();this.I0(A.aaR(
A.acf.AU8),[this,this.ATy],5);this.I0(A.aaR(A.acf.AU6),[this,this.ATx],7);this.I0(
A.aaR(A.acf.Calving),[this,this.Blp],11);this.I0(A.aaR(A.acf.An2),[this,this.AwR
],2);this.I0(A.aaR(A.acf.AdT),[this,this.AEO],1);this.I0(A.aaR(A.acf.Auz),[this,
this.AEI],0);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Ani
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(6);},DE:function(G){}
,Abv:function(){return C.AM4;},Abw:function(){return C.APw;},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ACU());},HQ:function(G){
C.GZ.HQ.call(this,G);if(this.Akl()===false){this.N.Ct(A.aaL(A.ach.ADu));this.N.Cl=[
this,this.A5S];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agg:function(
){A._GetAutoObject(C.A$).Cf(62);},_Init:function(aArg){C.GZ._Init.call(this,aArg
);this.__proto__=C.ANX;var B;this.Dr(C.AO5);this.Dz(A.aaR(A.acf.ARU));this.AwM([
B=A._GetAutoObject(A.Device.Device),B.A8k,B.BaQ]);},_ReInit:function(){C.GZ._ReInit.
call(this);this.Dz(A.aaR(A.acf.ARU));},_className:"Application::DryCowListScreen"
};C.ANW={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ANW;this.
Lc.Ar(false);this.Lc.Aj(false);this.Lc.Z(false);this.Jp.Ar(false);this.Jp.Aj(false
);this.Jp.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO5={DY:
function(G){C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdY(9));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AO5;}
,_className:"Application::HeaderDryCowListFilter"};C.Abs={Filter:null,LX:null,AGW:
A.jV,Eq:0,AF3:1,Operator:1,Bl:function(aSize){C.Acr.Bl.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Acr.Ai.call(this,Ae);this.LX.
L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.
pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.Tr((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator
));else this.Tr(null);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this
,this.Mb],this);},Tr:function(AI){if(!!AI){var A1R;if(this.AF3!==1)A1R=this.AF3;
else A1R=AI.Operator;this.T((this.AGW+CQ)+A._GetAutoObject(A.Device.Converter).A6f(
A1R));this.ZB(false);}else{this.T(this.AGW);this.ZB(true);}},OM:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.Mb],this);},AFN:function(E){
if(this.AGW===E)return;this.AGW=E;A.pe([this,this.Mb],this);},A91:function(E){if(
this.AF3===E)return;this.AF3=E;A.pe([this,this.Mb],this);},_Init:function(aArg){
C.Acr._Init.call(this,aArg);C.LX._Init.call(this.LX={I:this},0);this.__proto__=C.
Abs;this.H(As5);this.AW.H(BrI);this.LX.H(AZS);this.JV(this.V,-1);this.J(this.LX,
0);},_Done:function(){this.__proto__=C.Acr;this.LX._Done();C.Acr._Done.call(this
);},_ReInit:function(){C.Acr._ReInit.call(this);this.LX._ReInit();},_Mark:function(
D){var B;C.Acr._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjM={LX:null,Ai:function(Ae){C.QA.Ai.call(this,Ae);this.LX.L(this.V.AQ);},Tr:
function(AI){if(!!AI){this.H6.Cw(1);this.ZB(true);this.LX.A9S(false);}else{this.
H6.Cw(0);this.ZB(false);this.LX.A9S(true);}},_Init:function(aArg){C.QA._Init.call(
this,aArg);C.LX._Init.call(this.LX={I:this},0);this.__proto__=C.AjM;this.Ja=20;this.
LX.H(AZS);this.J(this.LX,0);},_Done:function(){this.__proto__=C.QA;this.LX._Done(
);C.QA._Done.call(this);},_ReInit:function(){C.QA._ReInit.call(this);this.LX._ReInit(
);},_Mark:function(D){var B;C.QA._Mark.call(this,D);if((B=this.LX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABW={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmX(this.TableId,this.Eq));},Tr:function(
AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H6.Cw(1);else this.H6.Cw(
0);},Kd:function(G){A.pe([this,this.Mb],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},_Init:function(aArg){C.QA._Init.call(
this,aArg);this.__proto__=C.ABW;},_ReInit:function(){C.QA._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.QA._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APw={YX:null,I8:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YX={I:this},0);A.acg.Text._Init.call(this.I8={I:this},0);this.__proto__=
C.APw;this.A9F(1);this.YX.H(BrJ);this.YX.KS(true);this.YX.R(A.aaR(A.acf.AD2));this.
YX.L(A.jb.Text);this.I8.H(S9);this.I8.R(((A.aaR(A.acf.RP)+Bab)+A.aaR(A.acf.A$P))+
O5);this.I8.L(A.jb.Text);this.J(this.YX,0);this.J(this.I8,0);this.YX.S(A.aaL(A.fl.
Ak));this.I8.S(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Dc;this.YX._Done(
);this.I8._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YX._ReInit();this.I8._ReInit();this.YX.R(A.aaR(A.acf.AD2));this.I8.R(((A.
aaR(A.acf.RP)+Bab)+A.aaR(A.acf.A$P))+O5);this.YX.S(A.aaL(A.fl.Ak));this.I8.S(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM4={Mi:null,KP:null,AdS:null,AP:null,A_:null
,Xq:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mi.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KP.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KP.M[2]-1,0,this.
KP.M[2]+1,aSize[1]]);this.AdS.H([this.KP.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.AdS.L(this.V.AQ);if(!!this.Xq&&(
this.Xq!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Ql(this.Xq));this.V.L(
A._GetAutoObject(A.acj.Assessment).XA(this.Xq));}else this.Mi.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Mf=this.AX.
CF(Ad,1);var A2n=this.AX.CF(Ad,29);var O9=this.AX.Hv(Ad,4);var LQ=this.AX.I4(Ad,
13);var AlI=this.AX.I4(Ad,17);var AlR=this.AX.H3(Ad,11);this.Xq=A._GetAutoObject(
A.Device.Helper).AMd(LQ,AlR,AlI);this.T(Mf.toFixed());this.KP.R(A2n.toFixed());this.
AdS.R(A._GetAutoObject(A.acj.KK).ACQ(O9,A._GetAutoObject(A.Device.Helper).Dq(),BrK
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.Mi={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(
this.AdS={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.AM4;this.Mi.H(Ata);this.AP.L(A.jb.Bc);this.
A_.L(A.jb.Bc);this.J(this.Mi,0);this.J(this.KP,0);this.J(this.AdS,0);this.J(this.
AP,0);this.J(this.A_,0);this.KP.S(A.aaL(A.fl.Af));this.AdS.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done();this.KP._Done(
);this.AdS._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.KP._ReInit();this.AdS.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));this.AdS.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RX={AJL:0,Bdo:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);if(this.Bdo){this.
T(A.aaR(A.acf.ANU));this.Kt(A.jV);}else{this.T(A.aaR(A.acf.Bjq));if(this.AJL>0)this.
Kt(this.AJL.toFixed());else this.Kt(Xe);}},Ce:function(G){C.Fx.Ce.call(this,G);this.
Bdo=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlD=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlD>0)this.AJL=A._GetAutoObject(A.Device.Helper).
L9(AlD,A._GetAutoObject(A.Device.Helper).Dq());else this.AJL=0;this.Am();},_Init:
function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMi={ALo:A.jV,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.RP));
this.Kt(this.ALo);},Ce:function(G){C.Fx.Ce.call(this,G);var O9=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALo=A._GetAutoObject(A.acj.KK).ACQ(O9,A._GetAutoObject(
A.Device.Helper).Dq(),((((BrL+A.aaR(A.acf.BgG))+BrM)+A.aaR(A.acf.BgF))+BrN)+A.aaR(
A.acf.ALS));this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=
C.AMi;this.ALo=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fx._ReInit.call(this);
this.ALo=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANO={Ud:null,Ze:null,Wp:null,Wq:null,Sz:null,Init:function(aArg){this.Bb(this.
Ud);A.pe([this,this.MH],this);},XG:function(G){A._GetAutoObject(A.Device.Device).
Dt(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.Ud={
I:this},0);C.Nb._Init.call(this.Ze={I:this},0);C.Nb._Init.call(this.Wp={I:this},
0);C.AbY._Init.call(this.Wq={I:this},0);C.Ua._Init.call(this.Sz={I:this},0);this.
__proto__=C.ANO;var B;this.Dr(C.AO2);this.Ud.H(IT);this.Ud.Aj(true);this.Ud.T(A.
aaR(A.acf.ACq));this.Ud.Bh(false);this.Ud.Ne(83);this.Ze.H(P9);this.Ze.Aj(true);
this.Ze.T(A.acf.Info);this.Ze.Bh(true);this.Ze.Ne(82);this.Wp.H(Aai);this.Wp.Aj(
true);this.Wp.T(A.aaR(A.acf.AGw));this.Wp.Bh(false);this.Wp.Ne(64);this.Wq.H(Ali
);this.Wq.Aj(true);this.Wq.T(A.aaR(A.acf.TempMeasurement));this.Wq.Bh(true);this.
Wq.Ne(60);this.Sz.H(Aov);this.Sz.Aj(true);this.Sz.T(A.aaR(A.acf.ACL));this.Sz.Bh(
false);this.J(this.Ud,-1);this.J(this.Ze,-1);this.J(this.Wp,-1);this.J(this.Wq,-
1);this.J(this.Sz,-1);this.N.Cl=[this,this.XG];this.N.Ct(A.aaL(A.ach.ADC));this.
Ud.AR=[B=this.Ud,B.Nh];this.Ze.AR=[B=this.Ze,B.Nh];this.Wp.AR=[B=this.Wp,B.Nh];this.
Wq.AR=[B=this.Wq,B.Nh];this.Sz.AR=null;this.Sz.AeU([B=this.Sz,B.Atj]);this.Sz.Gs([
this,this.D_,this.GQ]);this.Sz.ASP([B=A._GetAutoObject(A.Device.Device),B.Arz,B.
Ath]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ud._Done();this.
Ze._Done();this.Wp._Done();this.Wq._Done();this.Sz._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Ud._ReInit();this.Ze._ReInit();
this.Wp._ReInit();this.Wq._ReInit();this.Sz._ReInit();this.Ud.T(A.aaR(A.acf.ACq)
);this.Wp.T(A.aaR(A.acf.AGw));this.Wq.T(A.aaR(A.acf.TempMeasurement));this.Sz.T(
A.aaR(A.acf.ACL));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ud
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANP={Ub:null,AbV:null,Wn:null,Init:function(aArg){this.Bb(this.Ub);},ByO:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bj4:function(G){if(A._GetAutoObject(
A.Device.Device).Aa7<=20)A._GetAutoObject(A.Device.Device).A7(76,true,BrO,0,null
);else A._GetAutoObject(A.Device.Device).A7(39,true,A.jV,0,[this,this.ByO]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.Ub={I:this},0);C.
Cp._Init.call(this.AbV={I:this},0);C.AbY._Init.call(this.Wn={I:this},0);this.__proto__=
C.ANP;var B;this.Dr(C.AO3);this.Ub.H(IT);this.Ub.Aj(true);this.Ub.T(A.aaR(A.acf.
A5k));this.Ub.Bh(false);this.Ub.Ne(65);this.AbV.H(P9);this.AbV.Aj(true);this.AbV.
T(A.aaR(A.acf.A6h));this.AbV.Bh(true);this.Wn.H(Aai);this.Wn.Aj(true);this.Wn.T(
A.aaR(A.acf.RangeTest));this.Wn.Bh(false);this.Wn.Ne(15);this.J(this.Ub,-1);this.
J(this.AbV,-1);this.J(this.Wn,-1);this.Ub.AR=[B=this.Ub,B.Nh];this.AbV.AR=[this,
this.Bj4];this.Wn.AR=[B=this.Wn,B.Nh];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.Ub._Done();this.AbV._Done();this.Wn._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ub._ReInit();this.AbV._ReInit();this.Wn.
_ReInit();this.Ub.T(A.aaR(A.acf.A5k));this.AbV.T(A.aaR(A.acf.A6h));this.Wn.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ub
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO3={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO3;this.
Text.R(A.aaR(A.acf.AGw));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGw));},_className:"Application::HeaderDeviceServiceMenu"};C.Nb={M7:
null,Ai:function(Ae){C.AbY.Ai.call(this,Ae);this.M7.L(this.V.AQ);},_Init:function(
aArg){C.AbY._Init.call(this,aArg);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.Nb;this.M7.AZ(0x38);this.M7.H(BrP);this.J(this.M7,0);this.V.Cv(A.aaL(A.fl.Bi));
this.M7.Aw(A.aaL(A.ach.Ajv));},_Done:function(){this.__proto__=C.AbY;this.M7._Done(
);C.AbY._Done.call(this);},_ReInit:function(){C.AbY._ReInit.call(this);this.M7._ReInit(
);this.V.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.AbY._Mark.call(this,D);if((
B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANK={Ag$:null,Ahf:null,Ahh:null,Ahd:null,Akb:null,Ahc:null,Ahb:null,Aha:null
,Aj$:null,Ag_:null,Aka:null,Ahg:null,Akc:null,Ahe:null,Akd:null,Init:function(aArg
){this.Bb(this.Ag$);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PL._Init.
call(this.Ag$={I:this},0);C.PL._Init.call(this.Ahf={I:this},0);C.PL._Init.call(this.
Ahh={I:this},0);C.PL._Init.call(this.Ahd={I:this},0);C.PL._Init.call(this.Akb={I:
this},0);C.PL._Init.call(this.Ahc={I:this},0);C.PL._Init.call(this.Ahb={I:this},
0);C.PL._Init.call(this.Aha={I:this},0);C.PL._Init.call(this.Aj$={I:this},0);C.PL.
_Init.call(this.Ag_={I:this},0);C.PL._Init.call(this.Aka={I:this},0);C.PL._Init.
call(this.Ahg={I:this},0);C.PL._Init.call(this.Akc={I:this},0);C.PL._Init.call(this.
Ahe={I:this},0);C.PL._Init.call(this.Akd={I:this},0);this.__proto__=C.ANK;this.Dr(
C.AOY);this.Ag$.H(AIy);this.Ag$.Aj(true);this.Ag$.SF(1);this.Ahf.H(AZP);this.Ahf.
Aj(true);this.Ahf.Bh(true);this.Ahf.SF(2);this.Ahh.H(Atb);this.Ahh.Aj(true);this.
Ahh.Bh(false);this.Ahh.SF(3);this.Ahd.H(Atc);this.Ahd.Aj(true);this.Ahd.Bh(true);
this.Ahd.SF(4);this.Akb.H(Aym);this.Akb.Aj(true);this.Akb.SF(5);this.Ahc.H(BrQ);
this.Ahc.Aj(true);this.Ahc.Bh(true);this.Ahc.SF(6);this.Ahb.H(Atd);this.Ahb.Aj(true
);this.Ahb.Bh(false);this.Ahb.SF(7);this.Aha.H(Ayu);this.Aha.Aj(true);this.Aha.Bh(
true);this.Aha.SF(8);this.Aj$.H(AZQ);this.Aj$.Aj(true);this.Aj$.SF(9);this.Ag_.H(
AoB);this.Ag_.Aj(true);this.Ag_.Bh(true);this.Ag_.SF(10);this.Aka.H(BrR);this.Aka.
Aj(true);this.Aka.SF(11);this.Ahg.H(BrS);this.Ahg.Aj(true);this.Ahg.Bh(true);this.
Ahg.SF(12);this.Akc.H(BrT);this.Akc.Aj(true);this.Akc.SF(13);this.Ahe.H(BrU);this.
Ahe.Aj(true);this.Ahe.Bh(true);this.Ahe.SF(14);this.Akd.H(BrV);this.Akd.Aj(true);
this.Akd.SF(15);this.J(this.Ag$,-1);this.J(this.Ahf,-1);this.J(this.Ahh,-1);this.
J(this.Ahd,-1);this.J(this.Akb,-1);this.J(this.Ahc,-1);this.J(this.Ahb,-1);this.
J(this.Aha,-1);this.J(this.Aj$,-1);this.J(this.Ag_,-1);this.J(this.Aka,-1);this.
J(this.Ahg,-1);this.J(this.Akc,-1);this.J(this.Ahe,-1);this.J(this.Akd,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ag$._Done();this.Ahf._Done(
);this.Ahh._Done();this.Ahd._Done();this.Akb._Done();this.Ahc._Done();this.Ahb._Done(
);this.Aha._Done();this.Aj$._Done();this.Ag_._Done();this.Aka._Done();this.Ahg._Done(
);this.Akc._Done();this.Ahe._Done();this.Akd._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ag$._ReInit();this.Ahf._ReInit();this.Ahh.
_ReInit();this.Ahd._ReInit();this.Akb._ReInit();this.Ahc._ReInit();this.Ahb._ReInit(
);this.Aha._ReInit();this.Aj$._ReInit();this.Ag_._ReInit();this.Aka._ReInit();this.
Ahg._ReInit();this.Akc._ReInit();this.Ahe._ReInit();this.Akd._ReInit();},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOY={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AOY;this.Text.R(A.aaR(A.acf.A5L));},_ReInit:function(){C.
KO._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5L));},_className:"Application::HeaderDeviceCheck"
};C.PL={DeviceComponentToString:null,Ki:null,AuX:0,Bb1:false,CP:function(){this.
V.R(this.DeviceComponentToString.BH(this.AuX));},Bl:function(aSize){var B;C.Cp.Bl.
call(this,aSize);this.Ki.H(A.abM(this.Ki.M,aSize[0]-((B=this.Ki.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Ki.M[0]));},Ai:function(Ae){C.Cp.Ai.call(this,Ae);this.Ki.
AES(this.V.AQ);if(this.Bb1)this.Ki.AwE(A.jb.E4);else this.Ki.AwE(A.jb.Gk);},SF:function(
E){if(this.AuX===E)return;this.AuX=E;this.T(this.DeviceComponentToString.BH(E));
this.DY(this);},DY:function(G){this.Bb1=A._GetAutoObject(A.Device.Device).AJC(this.
AuX);this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Ki._Init.call(this.Ki={I:this
},0);this.__proto__=C.PL;this.V.H(BrW);this.V.A6(0x11);this.Ki.H(BrX);this.J(this.
Ki,0);},_Done:function(){this.__proto__=C.Cp;this.DeviceComponentToString._Done(
);this.Ki._Done();C.Cp._Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Ki._ReInit();this.CP();},_Mark:function(
D){var B;C.Cp._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ki)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sh={Ay:null,DZ:null,Y:null,Init:function(aArg){A.pe([this,this.AAD],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALi(this);this.DJ(this);},CD:function(G
){A.pe([this,this.MH],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},AAD:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6v();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MH],this);},Ev:function(G){A._GetAutoObject(C.A$).Fy(
);},A3n:function(G){A._GetAutoObject(C.A$).Cf(84);},DJ:function(G){this.N.CY(A.aaL(
A.ach.E5));this.N.CC=[this,this.Ev];this.N.Ct(A.aaL(A.ach.ADB));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arh(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cl=null;this.N.I6.Ds(100);}else{this.N.Cl=[this
,this.AAD];this.N.I6.Ds(255);}this.N.C6(A.aaL(A.ach.AeA));this.N.Cm=[this,this.A3n
];},MH:function(s){this.DJ(s);},ALi:function(G){A.ab5("%s",BrY);},BGh:function(s
){this.ALi(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sh;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abx);this.Ay.H(Is);this.DZ.AZ(0x3F);this.DZ.H(Fe);this.DZ.L(A.jb.CK);this.Y.H(Lu
);this.Y.JP(9);this.J(this.Ay,0);this.J(this.DZ,0);this.J(this.Y,0);this.Y.El=[this
,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DZ._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DZ._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AN$={Yj:null,Yi:null,X7:null
,TH:null,DJ:function(G){C.Sh.DJ.call(this,G);if(this.AV===this.TH){this.N.Ct(null
);this.N.Cl=null;this.N.C6(null);this.N.Cm=null;}},ALi:function(G){if(this.AV===
this.TH)this.Dr(C.AO9);else this.Dr(C.Abx);},By7:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AP9);case 1:return A.
aaL(A.ach.AP_);default:A.ab5("%s%s",BrZ,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},By8:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AP$);case 1:return A.aaL(A.ach.AQa);default:
A.ab5("%s%s",AID,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ig:function(G){var Cy=(C.Fm.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yj)A._GetAutoObject(C.A$).Cf(66);else if(Cy===this.Yi)A._GetAutoObject(C.A$).Cf(
56);else if(Cy===this.X7)A._GetAutoObject(C.A$).Cf(58);else if(Cy===this.TH)A._GetAutoObject(
C.A$).Cf(59);},_Init:function(aArg){C.Sh._Init.call(this,aArg);C.Fm._Init.call(this.
Yj={I:this},0);C.Fm._Init.call(this.Yi={I:this},0);C.Fm._Init.call(this.X7={I:this
},0);C.Fm._Init.call(this.TH={I:this},0);this.__proto__=C.AN$;this.Yj.H(P5);this.
Yj.Aj(true);this.Yj.T(A.aaR(A.acf.Aft));this.Yi.H(JZ);this.Yi.Aj(true);this.Yi.T(
A.aaR(A.acf.Temperature));this.X7.H(Br0);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.
Rating));this.TH.H(Br1);this.TH.Aj(true);this.TH.T(A.aaR(A.acf.A7z));this.J(this.
Yj,0);this.J(this.Yi,0);this.J(this.X7,0);this.J(this.TH,0);this.Yj.AR=[this,this.
Ig];this.Yj.DB(this.By8());this.Yi.AR=[this,this.Ig];this.Yi.DB(this.By7());this.
X7.AR=[this,this.Ig];this.X7.DB(A.aaL(A.ach.AP7));this.TH.AR=[this,this.Ig];this.
TH.DB(A.aaL(A.ach.AP8));},_Done:function(){this.__proto__=C.Sh;this.Yj._Done();this.
Yi._Done();this.X7._Done();this.TH._Done();C.Sh._Done.call(this);},_ReInit:function(
){C.Sh._ReInit.call(this);this.Yj._ReInit();this.Yi._ReInit();this.X7._ReInit();
this.TH._ReInit();this.Yj.T(A.aaR(A.acf.Aft));this.Yi.T(A.aaR(A.acf.Temperature)
);this.X7.T(A.aaR(A.acf.Rating));this.TH.T(A.aaR(A.acf.A7z));},_Mark:function(D){
var B;C.Sh._Mark.call(this,D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOa={VK:null,X9:null,Yk:null,ALi:function(G){this.Dr(C.Avr);},By$:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQL
);case 1:return A.aaL(A.ach.AQM);default:A.ab5("%s%s",AID,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ig:function(G){var Cy=(C.Fm.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VK)A._GetAutoObject(C.A$).Cf(68);else if(Cy===
this.Yk)A._GetAutoObject(C.A$).Cf(57);else if(Cy===this.X9)A._GetAutoObject(C.A$
).Cf(67);},By_:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APW);case 1:return A.aaL(A.ach.APX);default:A.ab5("%s%s",AID
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bza:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQN
);case 1:return A.aaL(A.ach.AQO);default:A.ab5("%s%s",AID,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sh._Init.call(
this,aArg);C.Fm._Init.call(this.VK={I:this},0);C.Fm._Init.call(this.X9={I:this},
0);C.Fm._Init.call(this.Yk={I:this},0);this.__proto__=C.AOa;this.VK.H(P5);this.VK.
Aj(true);this.VK.T(A.aaR(A.acf.A$H));this.X9.H(AZT);this.X9.Aj(true);this.X9.T(A.
aaR(A.acf.A5a));this.Yk.H(N_);this.Yk.Aj(true);this.Yk.T(A.aaR(A.acf.A$K));this.
J(this.VK,0);this.J(this.X9,0);this.J(this.Yk,0);this.VK.AR=[this,this.Ig];this.
VK.DB(this.By$());this.VK.Ab9(A.aaL(A.ach.NS));this.X9.AR=[this,this.Ig];this.X9.
DB(this.By_());this.Yk.AR=[this,this.Ig];this.Yk.DB(this.Bza());},_Done:function(
){this.__proto__=C.Sh;this.VK._Done();this.X9._Done();this.Yk._Done();C.Sh._Done.
call(this);},_ReInit:function(){C.Sh._ReInit.call(this);this.VK._ReInit();this.X9.
_ReInit();this.Yk._ReInit();this.VK.T(A.aaR(A.acf.A$H));this.X9.T(A.aaR(A.acf.A5a
));this.Yk.T(A.aaR(A.acf.A$K));},_Mark:function(D){var B;C.Sh._Mark.call(this,D);
if((B=this.VK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOd={Bdr:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZU(0));},_Init:function(aArg){C.AqO._Init.call(this,aArg);this.
__proto__=C.AOd;this.Ae8(A.aaR(A.acf.A7U));},_ReInit:function(){C.AqO._ReInit.call(
this);this.Ae8(A.aaR(A.acf.A7U));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN8={Ail:null,AbA:null,UM:null,Aa0:null,Pj:null,Ajs:null,Agy:null,Ajt:null,Agz:
null,Ay:null,AaU:null,Adb:0,Apx:0,DE:function(G){switch(this.Cr.CO){case 4:{if(this.
I3.Fo())return;var Qu=this.Y.Br[1]+80;this.Y.Gd([this.Y.Br[0],Qu]);this.Y.Vx(null
,null);}break;case 5:{if(this.I3.Fo())return;var Qu=this.Y.Br[1]-80;this.Y.Gd([this.
Y.Br[0],Qu]);this.Y.Vx(null,null);}break;default:C.Fz.DE.call(this,G);}},Ap9:function(
L2,AcY){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(
A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,AcY,true);Fw.CW(HX);var Ac9=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac9.Initialize(8,2,0,true);Fw.CW(Ac9
);L2.Bk(Fw);},Aiz:function(G){if(A._GetAutoObject(A.Device.Helper).W.Ari()){this.
Ail.Or(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azd=this.By5(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaU.Set(Azd,this.AaU.Get(Azd)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adb++;this.Apx=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fz.Aiz.call(
this,G);},Aav:function(G){if(this.Adb>1)A._GetAutoObject(A.Device.Device).A7(56,
true,this.Adb.toFixed(),0,null);if(this.Adb===1)A._GetAutoObject(A.Device.Device
).A7(53,true,this.Apx.toFixed(),0,null);if(this.Ail.AY>0)this.UM.T(((((((A._GetAutoObject(
A.Device.Converter).Ax0(this.Ail.AjS()|0,1)+Ayy)+A._GetAutoObject(A.Device.Converter
).Ax0(this.Ail.Aq0()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).Af2())+Ayz)+this.Ail.AY.
toFixed())+O5);else this.UM.T(A.aaR(A.acf.Unknown));var RL=this.AaU.AmY();var O;
for(O=0;O<this.AaU.MD;O++){var Bf=this.Bzo(O);if(!!Bf){var CB=this.AaU.Get(O);Bf.
BlB(CB);if(!RL)Bf.A97(0);else Bf.A97(Math.round((CB*100)/RL)|0);Bf.Bni(this.Bzn(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adg=false;if(this.Ail.AY>0)
Adg=true;this.I3.Z(!Adg);C.Fz.Aav.call(this,G);},Adn:function(G){this.Ail.Yl();this.
AaU.EX();this.Adb=0;this.Apx=0;C.Fz.Adn.call(this,G);},Bzo:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pj;break;case 1:Bf=this.Ajs;break;case 2:Bf=this.
Agy;break;case 3:Bf=this.Ajt;break;case 4:Bf=this.Agz;break;default:throw new Error(
AyA+aIndex.toFixed());}return Bf;},Bzn:function(aIndex,AoM){var B;var Ts=A.jV;switch(
AoM){case 0:{switch(aIndex){case 0:Ts=Br2;break;case 1:Ts=Br3;break;case 2:Ts=Br4;
break;case 3:Ts=Br5;break;case 4:Ts=Br6;break;default:throw new Error(AyA+aIndex.
toFixed());}Ts=Ts+(CQ+A.aaR(A.acf.Az7));}break;case 1:{switch(aIndex){case 0:Ts=
Br7;break;case 1:Ts=Br8;break;case 2:Ts=Br9;break;case 3:Ts=Br_;break;case 4:Ts=
Br$;break;default:throw new Error(AyA+aIndex.toFixed());}Ts=Ts+(CQ+A.aaR(A.acf.A7g
));}break;default:A.ab5("%s%e",Bac,AoM);}return Ts;},By6:function(AIZ,AoM){var Ac_=
0;switch(AoM){case 0:switch(AIZ){case 0:Ac_=35000;break;case 1:Ac_=40000;break;case
2:Ac_=45000;break;case 3:Ac_=50000;break;case 4:Ac_=2147483647;break;default:throw new
Error(AyA+AIZ.toFixed());}break;case 1:switch(AIZ){case 0:Ac_=36287;break;case 1:
Ac_=40823;break;case 2:Ac_=45359;break;case 3:Ac_=49895;break;case 4:Ac_=2147483647;
break;default:throw new Error(AyA+AIZ.toFixed());}break;default:A.ab5("%s%e",Bac
,AoM);}return Ac_;},By5:function(A8,AoM){var Azd=0;var O;for(O=0;O<this.AaU.MD;O++
)if(A8<this.By6(O,AoM)){Azd=O;break;}return Azd;},Fj:function(G){var B;this.Ay.Mw((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agw._Init.call(this.AbA={
I:this},0);C.IE._Init.call(this.UM={I:this},0);C.Aa0._Init.call(this.Aa0={I:this
},0);C.Pj._Init.call(this.Pj={I:this},0);C.Pj._Init.call(this.Ajs={I:this},0);C.
Pj._Init.call(this.Agy={I:this},0);C.Pj._Init.call(this.Ajt={I:this},0);C.Pj._Init.
call(this.Agz={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaU={I:this},0);this.__proto__=C.AN8;this.Dr(C.Avr);this.AkC(A.aaR(
A.acf.A58));this.Ae8(A.aaR(A.acf.A7N));this.AbA.H(AIy);this.AbA.Aj(true);this.AbA.
T(A.aaR(A.acf.A41));this.AbA.Bh(false);this.AbA.Kr(5);this.UM.H(AZP);this.UM.Aj(
true);this.UM.T(A.jV);this.UM.Bh(true);this.UM.Kr(5);this.Aa0.H(Atb);this.Aa0.Aj(
true);this.Pj.H(Atc);this.Pj.Aj(true);this.Pj.Bh(true);this.Ajs.H(Atd);this.Ajs.
Aj(true);this.Agy.H(Ayu);this.Agy.Aj(true);this.Agy.Bh(true);this.Ajt.H(AZQ);this.
Ajt.Aj(true);this.Agz.H(AoB);this.Agz.Aj(true);this.Agz.Bh(true);this.Ay.H(Is);this.
AaU.ZC(5);this.J(this.AbA,-1);this.J(this.UM,-1);this.J(this.Aa0,-1);this.J(this.
Pj,-1);this.J(this.Ajs,-1);this.J(this.Agy,-1);this.J(this.Ajt,-1);this.J(this.Agz
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.Ail=A._NewObject(C.AvO,0);
this.UM.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fz;this.AbA._Done(
);this.UM._Done();this.Aa0._Done();this.Pj._Done();this.Ajs._Done();this.Agy._Done(
);this.Ajt._Done();this.Agz._Done();this.Ay._Done();this.AaU._Done();C.Fz._Done.
call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.AbA._ReInit();this.
UM._ReInit();this.Aa0._ReInit();this.Pj._ReInit();this.Ajs._ReInit();this.Agy._ReInit(
);this.Ajt._ReInit();this.Agz._ReInit();this.Ay._ReInit();this.AaU._ReInit();this.
AkC(A.aaR(A.acf.A58));this.Ae8(A.aaR(A.acf.A7N));this.AbA.T(A.aaR(A.acf.A41));this.
UM.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.
Ail)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa0={H_:null,Gu:null
,Bl:function(aSize){C.IE.Bl.call(this,aSize);this.H_.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gu.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IE.Ai.call(this,Ae);this.H_.L(this.V.AQ);this.Gu.L(this.V.AQ);},_Init:
function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.H_={I:this}
,0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Aa0;this.T(A.aaR(
A.acf.AG9));this.H_.H(Bsa);this.H_.KS(true);this.H_.R(A.aaR(A.acf.AqB));this.H_.
L(A.jb.Text);this.Gu.H(Bad);this.Gu.R(AfE);this.Gu.L(A.jb.Text);this.J(this.H_,0
);this.J(this.Gu,0);this.V.S(A.aaL(A.fl.Ik));this.H_.S(A.aaL(A.fl.Ik));this.Gu.S(
A.aaL(A.fl.Km));},_Done:function(){this.__proto__=C.IE;this.H_._Done();this.Gu._Done(
);C.IE._Done.call(this);},_ReInit:function(){C.IE._ReInit.call(this);this.H_._ReInit(
);this.Gu._ReInit();this.T(A.aaR(A.acf.AG9));this.H_.R(A.aaR(A.acf.AqB));this.V.
S(A.aaL(A.fl.Ik));this.H_.S(A.aaL(A.fl.Ik));this.Gu.S(A.aaL(A.fl.Km));},_Mark:function(
D){var B;C.IE._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pj={AP:null,A_:null,PX:null,H_:null,Gu:null,A$J:A.jV,AqB:0,A_C:0,Bl:function(
aSize){C.IE.Bl.call(this,aSize);this.PX.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PX.M[2]-1,0,this.PX.M[2]+1,aSize[1]]);this.H_.H([this.PX.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H_.M[2]-1,0,this.H_.M[2]+1,aSize[
1]]);this.Gu.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IE.Ai.call(
this,Ae);this.PX.L(this.V.AQ);this.H_.L(this.V.AQ);this.Gu.L(this.V.AQ);},Bni:function(
E){if(this.A$J===E)return;this.A$J=E;this.PX.R(E);},BlB:function(E){if(this.AqB===
E)return;this.AqB=E;this.H_.R(E.toFixed());},A97:function(E){if(this.A_C===E)return;
this.A_C=E;this.Gu.R(E.toFixed()+Xf);},_Init:function(aArg){C.IE._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.H_={I:
this},0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Pj;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PX.H(Bsb);this.PX.R(A.aaR(A.acf.AG9));this.PX.L(
A.jb.Text);this.H_.R(U0);this.H_.L(A.jb.Text);this.Gu.R(Bsc);this.Gu.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.PX,0);this.J(this.H_,0);this.J(
this.Gu,0);this.PX.S(A.aaL(A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IE;this.AP._Done();this.A_._Done();this.
PX._Done();this.H_._Done();this.Gu._Done();C.IE._Done.call(this);},_ReInit:function(
){C.IE._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.PX._ReInit();
this.H_._ReInit();this.Gu._ReInit();this.PX.R(A.aaR(A.acf.AG9));this.PX.S(A.aaL(
A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IE._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMu={AKL:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mq();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.__proto__=
C.AMu;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARn={R3:null,
R9:null,R2:null,R6:null,Pl:null,R5:null,ALg:function(G){A.pe([this,this.BCf],this
);A.pe([this,this.BB5],this);A.pe([this,this.BB1],this);A.pe([this,this.A4e],this
);A.pe([this,this.BB8],this);A.pe([this,this.BB6],this);},Ig:function(G){var Cy=(
C.QT.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.R9)A._GetAutoObject(C.A$
).Cf(20);else if(Cy===this.Pl)A._GetAutoObject(C.A$).Cf(14);else if(Cy===this.R3
)A._GetAutoObject(C.A$).Cf(12);else if(Cy===this.R6)A._GetAutoObject(C.A$).Cf(43
);else if(Cy===this.R2)A._GetAutoObject(C.A$).Cf(51);else if(Cy===this.R5)A._GetAutoObject(
C.A$).Cf(61);},BB5:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azk=A._NewObject(A.Device.BoolFilterCriterion,0);Azk.Initialize(9,0,true,true);Be.
CW(Azk);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pl.ZA(A._GetAutoObject(
A.Device.Device).An.B$().toFixed());},BCf:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mq();var ABu=A._NewObject(A.Device.BoolFilterCriterion,0);ABu.Initialize(
12,0,true,true);Be.CW(ABu);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R9.ZA(
A._GetAutoObject(A.Device.Device).An.B$().toFixed());},BB1:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mq();var Ay2=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay2.Initialize(8,0,true,true);Be.CW(Ay2);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R3.ZA(A._GetAutoObject(A.Device.Device).An.B$().toFixed());},A4e:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6p(A._GetAutoObject(A.Device.Device
).ABA);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R2.ZA(A._GetAutoObject(A.
Device.Device).An.B$().toFixed());},BB8:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6y();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R6.ZA(A._GetAutoObject(
A.Device.Device).An.B$().toFixed());},BB6:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACU();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R5.ZA(A._GetAutoObject(
A.Device.Device).An.B$().toFixed());},_Init:function(aArg){C.T8._Init.call(this,
aArg);C.QT._Init.call(this.R3={I:this},0);C.QT._Init.call(this.R9={I:this},0);C.
QT._Init.call(this.R2={I:this},0);C.QT._Init.call(this.R6={I:this},0);C.QT._Init.
call(this.Pl={I:this},0);C.QT._Init.call(this.R5={I:this},0);this.__proto__=C.ARn;
this.R3.H(P5);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.Alarm));this.R3.Ab6(true);this.
R9.H(AZT);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.Asf));this.R9.Ab6(true);this.R2.
H(N_);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.ActionList));this.R2.Ab6(true);this.
R6.H(P6);this.R6.Aj(true);this.R6.T(A.aaR(A.acf.AOB));this.R6.Ab6(true);this.Pl.
H(S8);this.Pl.Ar(false);this.Pl.Aj(false);this.Pl.Z(false);this.Pl.T(A.aaR(A.acf.
ACd));this.Pl.Ab6(true);this.R5.H(US);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.A54
));this.R5.Ab6(true);this.J(this.R3,-1);this.J(this.R9,-1);this.J(this.R2,-1);this.
J(this.R6,-1);this.J(this.Pl,-1);this.J(this.R5,-1);this.R3.AR=[this,this.AcV];this.
R3.DB(A.aaL(A.ach.ADr));this.R3.Ab9(A.aaL(A.ach.NS));this.R9.AR=[this,this.AcV];
this.R9.DB(A.aaL(A.ach.AQK));this.R9.Ab9(A.aaL(A.ach.NS));this.R2.AR=[this,this.
AcV];this.R2.DB(A.aaL(A.ach.APH));this.R2.Ab9(A.aaL(A.ach.NS));this.R6.AR=[this,
this.AcV];this.R6.DB(A.aaL(A.ach.AQc));this.R6.Ab9(A.aaL(A.ach.NS));this.Pl.AR=[
this,this.AcV];this.Pl.DB(A.aaL(A.ach.ADr));this.Pl.Ab9(A.aaL(A.ach.NS));this.R5.
AR=[this,this.AcV];this.R5.DB(A.aaL(A.ach.AP4));this.R5.Ab9(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T8;this.R3._Done();this.R9._Done();this.R2._Done();this.
R6._Done();this.Pl._Done();this.R5._Done();C.T8._Done.call(this);},_ReInit:function(
){C.T8._ReInit.call(this);this.R3._ReInit();this.R9._ReInit();this.R2._ReInit();
this.R6._ReInit();this.Pl._ReInit();this.R5._ReInit();this.R3.T(A.aaR(A.acf.Alarm
));this.R9.T(A.aaR(A.acf.Asf));this.R2.T(A.aaR(A.acf.ActionList));this.R6.T(A.aaR(
A.acf.AOB));this.Pl.T(A.aaR(A.acf.ACd));this.R5.T(A.aaR(A.acf.A54));},_Mark:function(
D){var B;C.T8._Mark.call(this,D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARm={R_:null,VJ:null,R7:null,R4:null,R8:null,ALg:function(G){A.pe([this,this.
BB2],this);A.pe([this,this.BCa],this);A.pe([this,this.BCb],this);A.pe([this,this.
BCg],this);A.pe([this,this.BCc],this);},Ig:function(G){var Cy=(C.QT.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VJ)A._GetAutoObject(C.A$).Cf(90);if(Cy===this.
R4)A._GetAutoObject(C.A$).Cf(74);if(Cy===this.R7)A._GetAutoObject(C.A$).Cf(71);if(
Cy===this.R8)A._GetAutoObject(C.A$).Cf(46);if(Cy===this.R_)A._GetAutoObject(C.A$
).Cf(85);},BCb:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACX();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R8.ZA(A._GetAutoObject(A.Device.Device).An.B$().
toFixed());},BCg:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6J(Math.max(
A._GetAutoObject(A.Device.Device).AvW,A._GetAutoObject(A.Device.Helper).A6B(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R_.ZA(
A._GetAutoObject(A.Device.Device).An.B$().toFixed());},BCa:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A6E();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R7.ZA(A._GetAutoObject(A.Device.Device).An.B$().toFixed());},BB2:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOC();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R4.ZA(A._GetAutoObject(A.Device.Device).An.B$().toFixed());},BCc:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avn();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VJ.ZA(A._GetAutoObject(A.Device.Device).An.B$().toFixed()
);},_Init:function(aArg){C.T8._Init.call(this,aArg);C.QT._Init.call(this.R_={I:this
},0);C.QT._Init.call(this.VJ={I:this},0);C.QT._Init.call(this.R7={I:this},0);C.QT.
_Init.call(this.R4={I:this},0);C.QT._Init.call(this.R8={I:this},0);this.__proto__=
C.ARm;this.R_.H(Bsd);this.R_.Aj(true);this.R_.T(A.aaR(A.acf.A7F));this.R_.Ab6(true
);this.VJ.H(Bse);this.VJ.Aj(true);this.VJ.T(A.aaR(A.acf.AGa));this.R7.H(Bsf);this.
R7.Aj(true);this.R7.T(A.aaR(A.acf.A7H));this.R7.Ab6(true);this.R4.H(Bsg);this.R4.
Aj(true);this.R4.T(A.aaR(A.acf.ABU));this.R4.Ab6(true);this.R8.H(Bsh);this.R8.Aj(
true);this.R8.T(A.aaR(A.acf.AR0));this.R8.Ab6(true);this.J(this.R_,-1);this.J(this.
VJ,-1);this.J(this.R7,-1);this.J(this.R4,-1);this.J(this.R8,-1);this.R_.AR=[this
,this.AcV];this.R_.DB(A.aaL(A.ach.AQr));this.R_.Ab9(A.aaL(A.ach.NS));this.VJ.AR=[
this,this.AcV];this.VJ.DB(A.aaL(A.ach.ADJ));this.R7.AR=[this,this.AcV];this.R7.DB(
A.aaL(A.ach.AQt));this.R7.Ab9(A.aaL(A.ach.NS));this.R4.AR=[this,this.AcV];this.R4.
DB(A.aaL(A.ach.APZ));this.R4.Ab9(A.aaL(A.ach.NS));this.R8.AR=[this,this.AcV];this.
R8.DB(A.aaL(A.ach.AQv));this.R8.Ab9(A.aaL(A.ach.NS));},_Done:function(){this.__proto__=
C.T8;this.R_._Done();this.VJ._Done();this.R7._Done();this.R4._Done();this.R8._Done(
);C.T8._Done.call(this);},_ReInit:function(){C.T8._ReInit.call(this);this.R_._ReInit(
);this.VJ._ReInit();this.R7._ReInit();this.R4._ReInit();this.R8._ReInit();this.R_.
T(A.aaR(A.acf.A7F));this.VJ.T(A.aaR(A.acf.AGa));this.R7.T(A.aaR(A.acf.A7H));this.
R4.T(A.aaR(A.acf.ABU));this.R8.T(A.aaR(A.acf.AR0));},_Mark:function(D){var B;C.T8.
_Mark.call(this,D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ARY={Wz:function(G){this.Agu(
);this.AL3();this.A4D(A.aaR(A.acf.A7j),[this,this.Bm0],131072);this.A4D(A.aaR(A.
acf.A7i),[this,this.BmZ],16384);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS
).NC(A.aaR(A.acf.ARh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(6
);},DE:function(G){},Abv:function(){return C.Aqx;},Abw:function(){return C.Aq5;}
,Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A6E());},HQ:function(G){var F;C.RN.HQ.call(this,G);if(this.Akl()===false
){if(!!this.FJ&&((F=this.FJ,F[1].call(F[0]))===16)){this.N.Ct(A.aaL(A.ach.AQD));
this.N.Cl=[this,this.A52];}else{this.N.Ct(A.aaL(A.ach.AQl));this.N.Cl=[this,this.
A5Z];}this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agg:function(){A._GetAutoObject(
C.A$).Cf(72);},BmZ:function(G){this.AGy(16384);},Bm0:function(G){this.AGy(131072
);},_Init:function(aArg){C.RN._Init.call(this,aArg);this.__proto__=C.ARY;this.Dr(
C.APl);this.Dz(A.aaR(A.acf.A7L));this.AS7(A._GetAutoObject(C.Av3));},_ReInit:function(
){C.RN._ReInit.call(this);this.Dz(A.aaR(A.acf.A7L));},_className:"Application::NoNaisIdListScreen"
};C.ARX={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ARX;this.
Mt.Ar(false);this.Mt.Aj(false);this.Mt.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APl={DY:function(G){C.Kn.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdY(10));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.APl;},_className:"Application::HeaderNoNaisIdListFilter"};C.Q6={Bfo:false,CP:function(
){A.pe([this,this.AyL],this);},DE:function(G){},CD:function(G){C.GZ.CD.call(this
,G);if(this.Bfo&&(A._GetAutoObject(A.Device.Device).Uw>0))A.pe([this,this.AIG],this
);},Al4:function(G){this.A5Y(this);},Agg:function(){A._GetAutoObject(C.A$).Cf(73
);},AR6:function(G){throw new Error(AoC);},Bax:function(s){this.AR6(s);},AR7:function(
G){throw new Error(AoC);},Bay:function(s){this.AR7(s);},ASa:function(G){throw new
Error(AoC);},AIG:function(s){this.ASa(s);},BeA:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7)){this.Bfo=true;A._GetAutoObject(
C.A$).Cf(76);}},Agf:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===5))A.z$([this,this.XH],[B=A._GetAutoObject(
A.Device.Device),B.Wy,B.Xh],0);},XH:function(G){var B;if(A._GetAutoObject(A.Device.
Device).AhS===3){A._GetAutoObject(A.Device.Device).A7(74,false,A.jV,0,[this,this.
Agf]);A.z$([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.Wy,B.Xh],0);A.pe([
this,this.AIG],this);}},AJB:function(){throw new Error(AoC);},A72:function(G){A.
_GetAutoObject(A.Device.Device).Dt(0);this.A5X(this);},Bnw:function(G){A._GetAutoObject(
A.Device.Device).Dt(0);this.BhQ(this);},_Init:function(aArg){C.GZ._Init.call(this
,aArg);this.__proto__=C.Q6;this.Dz(A.aaR(A.acf.A7S));},_ReInit:function(){C.GZ._ReInit.
call(this);this.Dz(A.aaR(A.acf.A7S));this.CP();},_className:"Application::RegistrationsListScreen"
};C.AUc={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AUc;},
_className:"Application::RegistrationsListFilterScreen"};C.Aet={_Init:function(aArg
){C.Yx._Init.call(this,aArg);this.__proto__=C.Aet;this.Text.H(Bsi);this.Text.R(A.
jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"};C.AB1={
Ka:0,AP:null,A_:null,Ea:null,IJ:null,SX:null,Gz:null,Mf:0,K9:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IJ.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[1]]);this.
SX.H([this.IJ.M[2],0,this.IJ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.Ea.H([
this.SX.M[2]-1,0,this.SX.M[2]+1,aSize[1]]);this.Gz.H([this.SX.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IJ.L(this.V.AQ);this.Gz.L(this.
V.AQ);this.SX.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj_(this.K9)){this.
V.S(A.aaL(A.fl.Hu));this.T(Bae);this.SX.R(Rp);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Mf.toFixed());this.SX.R(A._GetAutoObject(A.Device.Helper).Sj(this.Ka,0,5).
toFixed());}},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){this.Mf=
this.AX.CF(Ad,1);this.K9=this.AX.AOQ(Ad,34);var AtP=this.AX.AOI(Ad,7);this.Ka=this.
AX.KN(Ad,26);var Ay9=this.AX.Hv(Ad,4);var AfP=A._GetAutoObject(A.Device.Helper).
L9(Ay9,A._GetAutoObject(A.Device.Helper).Dq());this.IJ.Aw(A._GetAutoObject(A.Device.
Converter).AmV(AtP));if(AfP<100)this.Gz.R((AfP.toFixed()+CQ)+A.aaR(A.acf.ALS));else
this.Gz.R(A._GetAutoObject(A.acj.KK).ACQ(Ay9,A._GetAutoObject(A.Device.Helper).Dq(
),AIl));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IJ={I:this},0);A.acg.Text._Init.
call(this.SX={I:this},0);C.CH._Init.call(this.Gz={I:this},0);this.__proto__=C.AB1;
this.AP.H(Aox);this.AP.L(A.jb.Bc);this.A_.H(Aoy);this.A_.L(A.jb.Bc);this.Ea.H(AZU
);this.Ea.L(A.jb.Bc);this.IJ.H(Baf);this.IJ.L(A.jb.Text);this.SX.H(Ayr);this.Gz.
H(AZV);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.IJ,0);this.
J(this.SX,0);this.J(this.Gz,0);this.SX.S(A.aaL(A.fl.Af));this.Gz.S(A.aaL(A.fl.Af
));this.Gz.A2(A.aaL(A.fl.Ak));this.Gz.Cv(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.Ea._Done();this.
IJ._Done();this.SX._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();
this.IJ._ReInit();this.SX._ReInit();this.Gz._ReInit();this.SX.S(A.aaL(A.fl.Af));
this.Gz.S(A.aaL(A.fl.Af));this.Gz.A2(A.aaL(A.fl.Ak));this.Gz.Cv(A.aaL(A.fl.Bi));
},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ADh={Aj7:null,Px:null,I5:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj7={I:this},
0);A.acg.Ap._Init.call(this.Px={I:this},0);A.acg.Ap._Init.call(this.I5={I:this},
0);this.__proto__=C.ADh;this.Aj7.H(Bsj);this.Aj7.L(A.jb.Text);this.Px.H(Bsk);this.
Px.L(A.jb.Text);this.I5.H(A$8);this.I5.L(A.jb.Text);this.J(this.Aj7,0);this.J(this.
Px,0);this.J(this.I5,0);this.Aj7.Aw(A.aaL(A.ach.ADF));this.Px.Aw(A.aaL(A.ach.AvC
));this.I5.Aw(A.aaL(A.ach.Avx));},_Done:function(){this.__proto__=C.Dc;this.Aj7.
_Done();this.Px._Done();this.I5._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Aj7._ReInit();this.Px._ReInit();this.I5._ReInit();
},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APn={IQ:null
,AgZ:null,HR:null,Bc:null,MB:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.A8O,B.A9$
],0);A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.Wx,B.JQ],0);A.
zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.ArE,B.SI],0);A.zV([this
,this.DY],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.DY],this);},De:
function(E){C.BR.De.call(this,E);this.IQ.L(E);this.AgZ.L(E);this.HR.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HR.R(A.aaR(A.
acf.Afb));else this.HR.R(((A.aaR(A.acf.GM)+A.aaR(A.acf.Colon))+CQ)+E.toFixed());
},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq2()){this.AwY(((A._GetAutoObject(
A.Device.Helper).W.CL+1).toFixed()+A$U)+A._GetAutoObject(A.Device.Device).An.B$(
).toFixed());this.JQ(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nf(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.AwY(A$V);this.JQ(2);this.OnSetAnimalId(-1);this.
Nf(0);}},JQ:function(E){if(this.Gender===E)return;this.Gender=E;this.AgZ.Aw(A._GetAutoObject(
A.Device.Converter).AmV(E));},AwY:function(E){if(this.MB===E)return;this.MB=E;this.
IQ.R(E);},Nf:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj_(E))this.HR.Z(false);else this.HR.Z(true);},_Init:
function(aArg){C.BR._Init.call(this,aArg);A.acg.Text._Init.call(this.IQ={I:this}
,0);A.acg.Ap._Init.call(this.AgZ={I:this},0);A.acg.Text._Init.call(this.HR={I:this
},0);A.acg.C5._Init.call(this.Bc={I:this},0);this.__proto__=C.APn;this.IQ.H(A$W);
this.IQ.Hl(2);this.IQ.KS(true);this.IQ.A6(0x12);this.IQ.R(A$X);this.AgZ.H(Bsl);this.
HR.H(Bsm);this.HR.A6(0x11);this.HR.R(A.aaR(A.acf.Afb));this.Bc.DC(Ate);this.Bc.DM(
Ayw);this.Bc.L(A.jb.Bc);this.J(this.IQ,0);this.J(this.AgZ,0);this.J(this.HR,0);this.
J(this.Bc,0);this.IQ.S(A.aaL(A.fl.Ak));this.AgZ.Aw(A._GetAutoObject(A.Device.Converter
).AmV(2));this.HR.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.IQ._Done();this.AgZ._Done();this.HR._Done();this.Bc._Done();C.BR._Done.
call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.IQ._ReInit();this.AgZ.
_ReInit();this.HR._ReInit();this.Bc._ReInit();this.HR.R(A.aaR(A.acf.Afb));this.IQ.
S(A.aaL(A.fl.Ak));this.HR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.
call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.Aa3={EaseOfDeliveryToString:null,AgQ:null,Ce:function(G){C.NE.Ce.call(this,G
);var AJU=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Kt(this.EaseOfDeliveryToString.
Lt(AJU));this.G1.R(this.AgQ.Aej(AJU).toFixed());},De:function(E){C.NE.De.call(this
,E);this.G1.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgQ._Init.call(this.
AgQ={I:this},0);this.__proto__=C.Aa3;this.T(A.aaR(A.acf.AgH));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgQ._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgQ._ReInit();this.T(A.aaR(A.acf.AgH));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XY={WhereAboutsToString:null,KY:null,Ce:function(G){C.NE.Ce.call(this,G);var
K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kt(this.WhereAboutsToString.
Lt(K9));this.G1.R(this.KY.Aej(K9).toFixed());},De:function(E){C.NE.De.call(this,
E);this.G1.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KY._Init.call(this.KY={
I:this},0);this.__proto__=C.XY;this.T(A.aaR(A.acf.Jf));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KY._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KY._ReInit(
);this.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R0={Cr:null,Y:null,Ay:null,Init:function(aArg){},CD:function(G){var B;C.D9.CD.
call(this,G);A.zX([this,this.AfF],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.
OnSetId],0);A.zX([this,this.AfF],[B=A._GetAutoObject(A.Device.Helper),B.U1,B.U4]
,0);A.pe([this,this.AfF],this);},E6:function(G){var B;C.D9.E6.call(this,G);A.z$([
this,this.AfF],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);A.z$([this
,this.AfF],[B=A._GetAutoObject(A.Device.Helper),B.U1,B.U4],0);},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},DE:function(G){switch(this.Cr.CO){case 6:case 7:this.Cr.NH=true;
break;case 4:this.BfK(4);break;case 5:this.BfK(5);break;default:;}},BfK:function(
GA){var B;switch(GA){case 5:{var CE=this.Y.Br[1]-40;if(CE<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CE=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CE>0)CE=0;this.Y.Gd([this.Y.Br[0],CE]);}break;case 4:{var CE=this.Y.
Br[1]+40;if(CE>0)CE=0;this.Y.Gd([this.Y.Br[0],CE]);}break;default:throw new Error(
Bsn);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I1.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},AfF:function(s){this.GH(s);},MO:function(G){var B;this.Y.Vx(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R0;this.Cr.Filter=147;this.Y.H(UY);this.Y.JP(1);this.Ay.H(AsX
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,
this.DE];this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XZ={AaX:null,
XV:null,AaY:null,XW:null,Aa3:null,XY:null,_Init:function(aArg){C.R0._Init.call(this
,aArg);C.AaX._Init.call(this.AaX={I:this},0);C.XV._Init.call(this.XV={I:this},0);
C.AaY._Init.call(this.AaY={I:this},0);C.XW._Init.call(this.XW={I:this},0);C.Aa3.
_Init.call(this.Aa3={I:this},0);C.XY._Init.call(this.XY={I:this},0);this.__proto__=
C.XZ;this.AaX.H(BF);this.AaX.Aj(true);this.XV.H(IT);this.XV.Aj(true);this.XV.Bh(
true);this.AaY.H(P9);this.AaY.Aj(true);this.XW.H(Aai);this.XW.Aj(true);this.XW.Bh(
true);this.Aa3.H(Ali);this.Aa3.Aj(true);this.XY.H(Aov);this.XY.Aj(true);this.XY.
Bh(true);this.J(this.AaX,0);this.J(this.XV,0);this.J(this.AaY,0);this.J(this.XW,
0);this.J(this.Aa3,0);this.J(this.XY,0);},_Done:function(){this.__proto__=C.R0;this.
AaX._Done();this.XV._Done();this.AaY._Done();this.XW._Done();this.Aa3._Done();this.
XY._Done();C.R0._Done.call(this);},_ReInit:function(){C.R0._ReInit.call(this);this.
AaX._ReInit();this.XV._ReInit();this.AaY._ReInit();this.XW._ReInit();this.Aa3._ReInit(
);this.XY._ReInit();},_Mark:function(D){var B;C.R0._Mark.call(this,D);if((B=this.
AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XW={
BreedToString:null,G1:null,M0:null,Ce:function(G){C.ID.Ce.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BH(Bv));this.G1.
R(this.M0.Aej(Bv).toFixed());},De:function(E){C.ID.De.call(this,E);this.G1.L(E);
},_Init:function(aArg){C.ID._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G1={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XW;this.BT.H(Bso);this.G1.H(Bsp
);this.G1.Hl(5);this.G1.A6(0x14);this.G1.R(Bsq);this.G1.L(A.jb.Text);this.J(this.
G1,0);this.Hw.Aw(A.aaL(A.ach.ADw));this.G1.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.ID;this.BreedToString._Done();this.G1._Done();this.M0._Done();C.
ID._Done.call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.BreedToString.
_ReInit();this.G1._ReInit();this.M0._ReInit();this.G1.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.ID._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaY={
Ce:function(G){C.ID.Ce.call(this,G);var AAh=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAh>0)this.T(A._GetAutoObject(A.Device.Converter).Rh(AAh));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.ID._Init.call(this,aArg);this.__proto__=
C.AaY;this.Hw.Aw(A.aaL(A.ach.AP5));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XV={YC:null,Ce:function(G){C.ID.Ce.call(this,G);var O9=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfU=A._GetAutoObject(A.Device.Helper).W.BirthType;if(O9>
0)this.T(A._GetAutoObject(A.acj.KK).AjQ(O9));else this.T(A.aaR(A.acf.Unknown));var
Ay$=A.aaL(A.aci.TM);switch(AfU){case 0:Ay$=A.aaL(A.ach.ADt);break;case 1:{Ay$=A.
aaL(A.ach.Avy);this.YC.Cw(0);}break;case 2:{Ay$=A.aaL(A.ach.Avy);this.YC.Cw(1);}
break;case 3:{Ay$=A.aaL(A.ach.Avy);this.YC.Cw(2);}break;default:A.ab5("%s%e",Bsr
,AfU);}this.YC.Aw(Ay$);},_Init:function(aArg){C.ID._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YC={I:this},0);this.__proto__=C.XV;this.BT.H(Bss);this.YC.H(AHP);
this.YC.L(A.jb.Text);this.J(this.YC,0);this.Hw.Aw(A.aaL(A.ach.Avx));this.YC.Aw(A.
aaL(A.ach.ADt));},_Done:function(){this.__proto__=C.ID;this.YC._Done();C.ID._Done.
call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.YC._ReInit();},_Mark:
function(D){var B;C.ID._Mark.call(this,D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaX={Ka:0,XX:null,K9:0
,Bl:function(aSize){C.ID.Bl.call(this,aSize);this.XX.H(this.Hw.M);},Ai:function(
Ae){C.ID.Ai.call(this,Ae);this.XX.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj_(this.K9)){this.T(A.aaR(A.acf.AnimalLoss));this.Hw.Z(false);this.XX.Z(true);
}else if(this.Ka>0){this.T(A._GetAutoObject(A.Device.Converter).Rh(this.Ka));this.
Hw.Z(true);this.XX.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hw.Z(true);this.
XX.Z(false);}},Ce:function(G){C.ID.Ce.call(this,G);this.Ka=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.ID._Init.call(this,aArg);A.acg.Text._Init.call(this.XX={
I:this},0);this.__proto__=C.AaX;this.XX.R(Bae);this.J(this.XX,0);this.Hw.Aw(A.aaL(
A.ach.AvC));this.XX.S(A.aaL(A.fl.Hu));},_Done:function(){this.__proto__=C.ID;this.
XX._Done();C.ID._Done.call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.
XX._ReInit();},_Mark:function(D){var B;C.ID._Mark.call(this,D);if((B=this.XX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMr={XZ:null,Init:function(aArg){var B;A.zX([this,this.AAz],[B=A._GetAutoObject(
A.Device.Device),B.AEt,B.AIK],0);A.pe([this,this.AAz],this);},DE:function(G){var
D5=(A.Core.BM.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ol(this);break;
case 7:this.MU(this);break;default:D5.NH=true;}},CD:function(G){var B;this.XZ.CD(
this);C.AB.CD.call(this,G);},E6:function(G){var B;this.XZ.E6(this);C.AB.E6.call(
this,G);},Anq:function(G){A._GetAutoObject(C.A$).Fy();},XG:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).An.B$()<=1)return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;
if(LC>=A._GetAutoObject(A.Device.Device).An.B$())LC=0;A._GetAutoObject(A.Device.
Helper).G6(LC);},Ol:function(G){if(A._GetAutoObject(A.Device.Device).An.B$()<=1)
return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(
A.Device.Device).An.B$()-1;A._GetAutoObject(A.Device.Helper).G6(LC);},AAz:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqt)A._GetAutoObject(C.A$).Ahu(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XZ._Init.call(this.XZ={I:this},0);this.
__proto__=C.AMr;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.OO(true
);this.Dr(C.APn);this.XZ.H(Fe);this.J(this.XZ,0);this.N.CC=[this,this.Anq];this.
N.Cl=[this,this.XG];this.N.CY(A.aaL(A.ach.E5));this.N.Ct(A.aaL(A.ach.AbF));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XZ._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XZ._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.ID={Hw:null,BT:null
,T:function(E){C.I1.T.call(this,E);this.BT.R(this.DK);},De:function(E){C.I1.De.call(
this,E);this.Hw.L(E);this.BT.L(E);},_Init:function(aArg){C.I1._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hw={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.ID;this.Hw.H(Bst);this.Hw.L(A.jb.Text);this.BT.H(Bsu);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hw,0);this.J(this.BT,0);this.Hw.Aw(A.aaL(A.aci.
TM));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I1;this.Hw._Done();this.BT._Done();C.I1._Done.call(this);},_ReInit:function(
){C.I1._ReInit.call(this);this.Hw._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I1._Mark.call(this
,D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I1={Background:null
,KT:0,Hj:false,CP:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Bbg],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);A.pe([this,
this.Bbg],this);},Bl:function(aSize){C.Hg.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.
Hj)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Ce:function(G){}
,Bbg:function(s){this.Ce(s);},Bh:function(E){if(this.Hj===E)return;this.Hj=E;this.
Am();},De:function(E){if(this.KT===E)return;this.KT=E;},_Init:function(aArg){C.Hg.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I1;this.H(BF);this.Background.H(AIn);this.KT=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);C.Hg._Done.call(this);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={G1:null,BAN:function(G){this.BT.H(A.abN(this.BT.M,this.G1.M[0]));},_Init:
function(aArg){C.Fx._Init.call(this,aArg);A.acg.Text._Init.call(this.G1={I:this}
,0);this.__proto__=C.NE;this.G1.AZ(0xA);this.G1.H(Bsv);this.G1.Hl(5);this.G1.I9(
true);this.G1.A6(0x14);this.G1.R(A.jV);this.G1.L(A.jb.Text);this.J(this.G1,0);this.
G1.Q4([this,this.BAN]);this.G1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fx;this.G1._Done();C.Fx._Done.call(this);},_ReInit:function(){C.Fx._ReInit.call(
this);this.G1._ReInit();this.G1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fx.
_Mark.call(this,D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axh={AQZ:null,_Init:function(aArg){C.ZD._Init.call(this,aArg);this.__proto__=
C.Axh;},_Mark:function(D){var B;C.ZD._Mark.call(this,D);if((B=this.AQZ)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANy={Ww:null,WT:0,AwJ:function(E){C.AmH.AwJ.call(this,E);if(E)this.Pn.R(Bsw);
else this.Pn.R(Bag);},BmP:function(E){if(A.aaZ(this.Ww,E))return;if(!!this.Ww)A.
z$([this,this.A3b],this.Ww,0);this.Ww=E;if(!!E)A.zX([this,this.A3b],E,0);if(!!E)
A.pe([this,this.A3b],this);},AFI:function(E){var F;if(this.WT===E)return;this.WT=
E;this.AwJ(!!this.Ww&&((F=this.Ww,F[1].call(F[0]))===E));},A3b:function(G){var F;
this.AwJ(!!this.Ww&&((F=this.Ww,F[1].call(F[0]))===this.WT));},_Init:function(aArg
){C.AmH._Init.call(this,aArg);this.__proto__=C.ANy;this.Pn.R(Bag);this.Pn.S(A.aaL(
A.fl.Hu));},_Mark:function(D){var B;C.AmH._Mark.call(this,D);if((B=this.Ww)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axj={Ww:null,WT:0,_Init:function(aArg){C.ZD._Init.call(this,aArg);this.__proto__=
C.Axj;},_Mark:function(D){var B;C.ZD._Mark.call(this,D);if((B=this.Ww)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATS={GO:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Q$._Init.call(
this.GO={I:this},0);this.__proto__=C.ATS;var B;this.I_(A.aaR(A.acf.ACG));this.GO.
H(Ah0);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF_));this.GO.Ar5(
false);this.GO.A98(true);this.J(this.GO,0);this.GO.AeU([B=this.GO,B.FV]);this.GO.
Gs([this,this.D_,this.GQ]);this.GO.AkD(A.aaL(A.ach.Edit));this.GO.As([B=A._GetAutoObject(
A.Device.Device),B.ASw,B.AZ8]);},_Done:function(){this.__proto__=C.Cd;this.GO._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.GO._ReInit(
);this.I_(A.aaR(A.acf.ACG));this.GO.T(A.aaR(A.acf.AF_));},_Mark:function(D){var B;
C.Cd._Mark.call(this,D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATQ={GI:0,C7:null,AW:null,Ko:null,Fa:null
,GermanStateToString:null,CountryToString:null,Pu:0,K$:0,L$:false,Init:function(
aArg){A.zX([this,this.MH],[this,this.SC,this.Ln],0);A.zX([this,this.MH],[this,this.
Ant,this.Ahq],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FM(this.LS);this.
Ko.FM(this.LS);this.Fa.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;switch(
this.A9){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=
this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=
this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[
1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[
0])).CV(this.CountryToString.BH(this.K$));(F=this.N,F[1].call(F[0])).Cm=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])
).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0]
)).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(
F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.EY
)+Ax_)+this.GermanStateToString.Lt(A._GetAutoObject(A.Device.Converter).ACR(this.
Pu)));(F=this.N,F[1].call(F[0])).Cm=null;}break;default:{(F=this.N,F[1].call(F[0
])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}}}
,Ew:function(EN){var Tn=this.A9;if(EN<0)EN=0;else if(EN>this.RI)EN=this.RI;switch(
EN){case 0:{this.Bb(null);if(!this.GI&&!this.Pu)this.Ln(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Ko);break;case 3:if(((Tn===2)&&!this.Pu)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tn>0))this.AW.SO(2);else this.AW.SO(
7);}break;default:throw new Error(Atg+EN.toFixed());}this.A9=EN;C.Ek.Ew.call(this
,EN);},By:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SE(A._GetAutoObject(
A.Device.Helper).Sj(E,0,10));this.Ahq(A._GetAutoObject(A.Device.Helper).Sj(E,10,
2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).Z3(E));this.L$=false;if(!!this.
AM){this.Ko.Kr(2);this.AW.Kr(10);}else{this.Ko.Kr(0);this.AW.Kr(0);}this.Am();},
FV:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.
Helper).AC2());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RI);},AjR:function(){return this.GI;
},AjT:function(){return 9999999999;},Ln:function(E){if(this.K$===E)return;this.K$=
E;if(this.L$===false)A.pe([this,this.Vn],this);A.abo([this,this.SC,this.Ln],0);}
,SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this,this.
Vn],this);A.abo([this,this.Ab3,this.SE],0);},Vn:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqC(this.K$),3,10)+A.abl(this.Pu,2,10))+
A.abm(this.GI,10,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahq:function(
E){if(this.Pu===E)return;this.Pu=E;if(this.L$===false)A.pe([this,this.Vn],this);
A.abo([this,this.Ant,this.Ahq],0);},SC:function(){return this.K$;},Ab3:function(
){return this.GI;},Ant:function(){return this.Pu;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C7._Init.call(this.C7={I:this},0);C.AQT._Init.call(this.AW={I:
this},0);C.AvM._Init.call(this.Ko={I:this},0);C.AsK._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATQ;var B;this.RI=3;this.AW.H(Bsx);this.Ko.H(Bsy);this.Ko.EV(16);this.Fa.H(Bah
);this.J(this.AW,0);this.J(this.Ko,0);this.J(this.Fa,0);this.C7.AEZ([this,this.SC
,this.Ln]);this.AW.As([this,this.Ab3,this.SE]);this.Ko.As([this,this.Ant,this.Ahq
]);this.Fa.CI(this.C7);this.Fa.As([B=this.C7,B.B7,B.B8]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.Ko._Done();this.
Fa._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW.
_ReInit();this.Ko._ReInit();this.Fa._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQT={NK:null,NJ:null,ES:null,F0:null,Ep:null,Dx:null,CU:null,Cu:null,FM:function(
E){if(this.M4===E)return;C.Lf.FM.call(this,E);this.Cu.CT(E);this.CU.CT(E);this.Dx.
CT(E);this.Ep.CT(E);this.F0.CT(E);this.ES.CT(E);this.NJ.CT(E);this.NK.CT(E);},Yv:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F_;break;case 1:B5=this.
Cu;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Ep;break;
case 5:B5=this.F0;break;case 6:B5=this.ES;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;},_Init:
function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.F0={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.AQT;this.H(Bsz);this.G0.H(AIB);this.NK.H(Ayx);this.NJ.H(AZH
);this.ES.H(AZI);this.F0.H(AZJ);this.Ep.H(AZK);this.Dx.H(AZL);this.CU.H(AZM);this.
Cu.H(A$3);this.F_.H(AZN);this.EM.H(AZN);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ES,-2);this.J(this.F0,-2);this.J(this.Ep,-2);this.J(this.Dx,-2);this.J(this.
CU,-2);this.J(this.Cu,-2);this.NK.Di=[this,this.GU];this.NJ.Di=[this,this.GU];this.
ES.Di=[this,this.GU];this.F0.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.Dx.
Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cu.Di=[this,this.GU];},_Done:function(
){this.__proto__=C.Lf;this.NK._Done();this.NJ._Done();this.ES._Done();this.F0._Done(
);this.Ep._Done();this.Dx._Done();this.CU._Done();this.Cu._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ES._ReInit();this.F0._ReInit();this.Ep._ReInit();this.Dx._ReInit();this.CU.
_ReInit();this.Cu._ReInit();},_Mark:function(D){var B;C.Lf._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATR={
GI:0,C7:null,AW:null,Fa:null,CountryToString:null,K$:0,L$:false,Init:function(aArg
){A.zX([this,this.MH],[this,this.SC,this.Ln],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FM(this.LS);this.Fa.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;
switch(this.A9){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5
));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(this.CountryToString.BH(this.K$));(F=this.N,F[1].call(F[0])).Cm=null;}
break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(
F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(
F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}}},Ew:function(EN){var Tn=this.A9;if(EN<0)EN=0;
else if(EN>this.RI)EN=this.RI;switch(EN){case 0:{this.Bb(null);if(!this.GI)this.
Ln(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tn>0))this.AW.SO(2);else this.AW.SO(7);}break;default:throw new Error(Atg+EN.toFixed(
));}this.A9=EN;C.Ek.Ew.call(this,EN);},By:function(E){if(this.AM===E)return;this.
AM=E;this.L$=true;this.SE(A._GetAutoObject(A.Device.Helper).Sj(E,0,12));this.Ln(
A._GetAutoObject(A.Device.Converter).Z3(E));this.L$=false;if(!!this.AM)this.AW.Kr(
12);else this.AW.Kr(0);this.Am();},FV:function(G){var F;if(!this.AM){var BQ=this.
AM;this.By(A._GetAutoObject(A.Device.Helper).AC2());if(this.AM!==BQ){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RI);},AjR:function(
){return this.GI;},AjT:function(){return 999999999999;},Ln:function(E){if(this.K$===
E)return;this.K$=E;if(this.L$===false)A.pe([this,this.Vn],this);A.abo([this,this.
SC,this.Ln],0);},SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false
)A.pe([this,this.Vn],this);A.abo([this,this.Ab3,this.SE],0);},Vn:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqC(this.K$),3,10)+A.abm(
this.GI,12,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SC:function(){return this.
K$;},Ab3:function(){return this.GI;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.ADL._Init.call(this.AW={I:this},0);C.AsK.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATR;var B;this.RI=2;this.AW.H(BsA);this.Fa.H(Bah);this.
J(this.AW,0);this.J(this.Fa,0);this.C7.AEZ([this,this.SC,this.Ln]);this.AW.As([this
,this.Ab3,this.SE]);this.Fa.CI(this.C7);this.Fa.As([B=this.C7,B.B7,B.B8]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DZ:null,Y:null,Ay:null,Yd:null,Ye:null,Yc:null,Ya:null,Yb:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},CD:function(G){C.AB.CD.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkS();A._GetAutoObject(A.Device.Helper).Ass();},Ig:function(G){
var Cy=(C.Fm.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Yd)A._GetAutoObject(
C.A$).Cf(28);else if(Cy===this.Ye)A._GetAutoObject(C.A$).Cf(26);else if(Cy===this.
Yc)A._GetAutoObject(C.A$).Cf(54);else if(Cy===this.Ya)A._GetAutoObject(C.A$).Cf(
27);else if(Cy===this.Yb)A._GetAutoObject(C.A$).Cf(78);},A3f:function(G){A._GetAutoObject(
C.A$).Fy();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fm._Init.call(this.Yd={I:this
},0);C.Fm._Init.call(this.Ye={I:this},0);C.Fm._Init.call(this.Yc={I:this},0);C.Fm.
_Init.call(this.Ya={I:this},0);C.Fm._Init.call(this.Yb={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dr(C.Aq4);this.DZ.AZ(0x3F);this.DZ.H(Fe);this.DZ.L(A.jb.CK);this.Y.H(Fe);
this.Y.JP(9);this.Ay.H(Is);this.Yd.H(P5);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.
A7D));this.Ye.H(AZT);this.Ye.Aj(true);this.Ye.T(A.aaR(A.acf.NewAnimals));this.Yc.
H(N_);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.Calving));this.Ya.H(P6);this.Ya.Aj(
true);this.Ya.T(A.aaR(A.acf.ABZ));this.Yb.H(MG);this.Yb.Aj(true);this.Yb.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yd,0);this.J(this.Ye,0);this.J(this.Yc,0);this.J(this.Ya,0);this.J(this.Yb,0);this.
N.CC=[this,this.A3f];this.N.CY(A.aaL(A.ach.E5));this.Y.El=[this,this.Fj];this.Yd.
AR=[this,this.Ig];this.Yd.DB(A.aaL(A.ach.ADG));this.Ye.AR=[this,this.Ig];this.Ye.
DB(A.aaL(A.ach.AvG));this.Yc.AR=[this,this.Ig];this.Yc.DB(A.aaL(A.ach.APY));this.
Ya.AR=[this,this.Ig];this.Ya.DB(A.aaL(A.ach.APV));this.Yb.AR=[this,this.Ig];this.
Yb.DB(A.aaL(A.ach.APO));},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.
Y._Done();this.Ay._Done();this.Yd._Done();this.Ye._Done();this.Yc._Done();this.Ya.
_Done();this.Yb._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yd._ReInit(
);this.Ye._ReInit();this.Yc._ReInit();this.Ya._ReInit();this.Yb._ReInit();this.Yd.
T(A.aaR(A.acf.A7D));this.Ye.T(A.aaR(A.acf.NewAnimals));this.Yc.T(A.aaR(A.acf.Calving
));this.Ya.T(A.aaR(A.acf.ABZ));this.Yb.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARO={K4:null,EaseOfDelivery:null,BirthType:null,AcO:null
,Lj:null,Co:null,G5:null,Lh:null,AzK:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GH],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.EX();A._GetAutoObject(C.A$).Fy();if(!!this.K4)this.K4.Ev(this);},Age:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwK(true);if(!!this.K4)this.K4.Age(this
);if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(A.Device.Helper).
AKf(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApJ]);else{this.Ai4();A.
pe([this,this.Ap8],this);}},Auh:function(){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.
ADK));this.N.Cm=[this,this.AyO];},CD:function(G){var B;C.H0.CD.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lg()){A._GetAutoObject(A.Device.Device).A7(41
,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),0,null);this.Ev(this);
}else if(this.AzK){this.AzK=false;A.pe([this,this.A3u],this);}else if(!this.K4){
this.K4=A._NewObject(C.ARP,0);this.K4.A9D([this,this.AAW]);A._GetAutoObject(A.Device.
Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aql(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nf(this.AsV.Aej(6));this.K4.LO(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},Ai4:function(
){A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);var
L7=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SP(L7);if(A._GetAutoObject(A.Device.Helper
).Am7()){if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.
Device).A7(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6K(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap8:function(G){var B;if(!!this.K4)this.K4.Ap8(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am7())this.C9.Z(true);else this.C9.Z(false);},
ApJ:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",As9,At.Id);}},AAW:function(G){this.
LO(this);this.AeW(A._GetAutoObject(A.Device.Helper).Abt(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JE(this.C$);},ApK:function(G){var F;C.H0.ApK.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnZ));},A3u:function(G){A._GetAutoObject(
C.A$).Cf(79);},_Init:function(aArg){C.H0._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcO._Init.call(this.AcO={I:this},0);C.Q$._Init.call(this.Lj={I:this
},0);C.SQ._Init.call(this.Co={I:this},0);C.BW._Init.call(this.G5={I:this},0);C.BW.
_Init.call(this.Lh={I:this},0);this.__proto__=C.ARO;var B;this.Dr(C.APk);this.Lj.
H(Ah0);this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACn));this.CG.H(AcT);this.Co.H(AcT
);this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aee));this.Co.AFz(true);this.G5.H(AcT);
this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Art));this.Lh.H(AcT);this.Lh.Aj(true);this.
Lh.T(A.aaR(A.acf.AgH));this.J(this.Lj,-5);this.J(this.Co,-3);this.J(this.G5,-1);
this.J(this.Lh,-1);this.EaseOfDelivery.LZ(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LZ(A._GetAutoObject(A.Device.Helper).W);this.AcO.LZ(A._GetAutoObject(A.
Device.Helper).W);this.Lj.Gs([this,this.D_,this.GQ]);this.Lj.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ASs,B.AnG]);this.Co.Gs([this,this.D_,this.GQ]);this.Co.LY([
B=this.Co,B.FV]);this.Co.L1(A.aaL(A.ach.Edit));this.Co.Ab$([B=A._GetAutoObject(A.
Device.Helper).W,B.Av_,B.Q3]);this.Gn.As([B=this.AcO,B.B7,B.B8]);this.Gn.CI(this.
AcO);this.G5.As([B=this.BirthType,B.B7,B.B8]);this.G5.CI(this.BirthType);this.Lh.
As([B=this.EaseOfDelivery,B.B7,B.B8]);this.Lh.CI(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H0;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcO._Done();this.Lj._Done();this.Co._Done();this.G5._Done();this.Lh.
_Done();C.H0._Done.call(this);},_ReInit:function(){C.H0._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcO._ReInit();this.Lj._ReInit(
);this.Co._ReInit();this.G5._ReInit();this.Lh._ReInit();this.Lj.T(A.aaR(A.acf.ACn
));this.Co.T(A.aaR(A.acf.Aee));this.G5.T(A.aaR(A.acf.Art));this.Lh.T(A.aaR(A.acf.
AgH));},_Mark:function(D){var B;C.H0._Mark.call(this,D);if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMt={Init:function(aArg){var B;A.zX([this,this.Bgm],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.AIP],0);A.pe([this,this.Bgm],this);},AKL:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbZ){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACU();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOE();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mq();break;default:throw new Error(AZW+A.
_GetAutoObject(A.Device.Device).AbZ.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Bgm:function(G){switch(A._GetAutoObject(A.Device.Device).AbZ){case
0:this.Dz(A.aaR(A.acf.ARU));break;case 1:this.Dz(A.aaR(A.acf.BjT));break;case 2:
this.Dz(A.aaR(A.acf.Av2));break;default:A.ab5("%s",AZW+A._GetAutoObject(A.Device.
Device).AbZ.toFixed());}},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.
__proto__=C.AMt;this.BmH(C.APA);this.Ej.Ab7(A._NewObject(C.APp,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARP={AAh:0,Adh:null
,AuV:null,BdO:0,A3H:0,A2B:0,Init:function(aArg){this.BdO=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adh=A._GetAutoObject(A.Device.Device).An.Filter;this.AAh=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2B=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LO:function(G){A._GetAutoObject(A.Device.Helper).W.AnG(this.AAh);A._GetAutoObject(
A.Device.Helper).W.Ae4(true);switch(this.A2B){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZE,this.A2B);}},Ev:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adh);if(!!this.A3H)this.Bgo();},Age:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bgo:function(){var AtW=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LT(0,this.BdO);AtW.EU(Ad,A._GetAutoObject(
A.Device.Device).An);AtW.Aww(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtW.
ArY(false);AtW.AwL(AtW.LactationNumber+1);AtW.Cg(A._GetAutoObject(A.Device.Device
).An);},Ap8:function(G){this.A3H++;var BxX=A._GetAutoObject(A.Device.Converter).
Bg9(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3H<BxX)&&(A._GetAutoObject(
A.Device.Helper).Aj_(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A7(59,true,A.jV,0,[this,this.Vi]);else this.BcM(
this);},Vi:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.BcM(this);else if(!!At&&(At.PopupState===7))this.
AAW(this);},AAW:function(G){var B;var Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfU=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var O9=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJU=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuV)(B=this.AuV
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(Ib);A._GetAutoObject(
A.Device.Helper).W.Akz(AfU);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q3(O9);A._GetAutoObject(A.Device.Helper).W.AkB(AJU);},BcM:function(
G){this.Bgo();A._GetAutoObject(C.A$).Fy();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adh);},A9D:function(E){if(A.aa0(this.AuV,E))return;this.AuV=E;},_Init:function(
aArg){this.__proto__=C.ARP;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adh)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMJ={Init:function(aArg){
var B;A.zX([this,this.Bd$],[B=A._GetAutoObject(A.Device.Device),B.ASb,B.AZX],0);
this.Bd$(this);},Cg:function(){A.ab5("%s",BsB);},EU:function(AcX){C.Vw.EU.call(this
,AcX);var O;for(O=16;O>0;O--)this.Ia.Set(O,this.Ia.Get(O-1));this.Ia.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",BsC);},ADP:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bd$:
function(G){this.EU(A._GetAutoObject(A.Device.Device).AuA);A.we(this,0);},_Init:
function(aArg){C.Vw._Init.call(this,aArg);this.__proto__=C.AMJ;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuN={_Init:function(){C.
AMJ._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JH={C5:null,V:null,A7w:true,T:function(E){C.I1.T.call(this,E);this.
V.R(E);},De:function(E){C.I1.De.call(this,E);this.V.L(E);},BmM:function(E){if(this.
A7w===E)return;this.A7w=E;this.C5.Z(E);},_Init:function(aArg){C.I1._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JH;this.C5.DC(BsD);this.C5.DM(BsE);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(BsF);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Cv(A.aaL(A.
fl.Bi));},_Done:function(){this.__proto__=C.I1;this.C5._Done();this.V._Done();C.
I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Cv(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.I1._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APp={AgV:null,Dd:null,Abr:null,Fl:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A4g],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.AIP],0);A.pe([this,this.A4g],this);},De:function(E){C.Yy.De.call(
this,E);this.Dd.L(E);},AEG:function(G){A.pe([this,this.A4g],this);},AAY:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C2:function(G){var B;var F;C.Yy.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjZ));return;}var ByE=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bbp=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!ByE)this.Dd.Aw(A.aaL(A.ach.AC8));else if(
!!Bbp&&(Bbp.A4===1))this.Dd.Aw(A.aaL(A.ach.AP0));else this.Dd.Aw(A.aaL(A.ach.AjZ
));},A4g:function(G){var F;var Filter=null;var AOs;switch(A._GetAutoObject(A.Device.
Device).AbZ){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACU();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOE();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mq();break;default:throw new Error(AZW+A._GetAutoObject(A.Device.
Device).AbZ.toFixed());}var Ai8=this.Akt();if(Ai8>0){AOs=A._NewObject(A.Device.Int32FilterCriterion
,0);AOs.Initialize(1,4,Ai8,false);Filter.CW(AOs);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},Ol:function(G){if(!this.Akt())this.AW.AeX(true
);this.Bb(this.AW);this.Am();},MU:function(G){this.AW.AeX(false);this.Bb(this.AgV
);this.Am();},_Init:function(aArg){C.Yy._Init.call(this,aArg);C.Are._Init.call(this.
AgV={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abr._Init.call(this.Abr={
I:this},0);A.Core.BM._Init.call(this.Fl={I:this},0);A.Core.BM._Init.call(this.Fb={
I:this},0);this.__proto__=C.APp;var B;this.H(BsG);this.AW.H(BsH);this.T4.H(BsI);
this.Gw.Z(false);this.AgV.H(BsJ);this.Dd.H(BsK);this.Abr.As(A._GetAutoObject(A.Device.
Device).AbZ);this.Fl.Filter=6;this.Fb.Filter=7;this.JV(this.A_,-1);this.J(this.AgV
,-1);this.J(this.Dd,-1);this.AgV.CI(this.Abr);this.AgV.As([B=this.Abr,B.B7,B.B8]
);this.Dd.Aw(A.aaL(A.ach.AjZ));this.Fl.BN=[this,this.Ol];this.Fb.BN=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yy;this.AgV._Done();this.Dd.
_Done();this.Abr._Done();this.Fl._Done();this.Fb._Done();C.Yy._Done.call(this);}
,_ReInit:function(){C.Yy._ReInit.call(this);this.AgV._ReInit();this.Dd._ReInit();
this.Abr._ReInit();this.Fl._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.Yy._Mark.call(this,D);if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abr={AeR:null
,Init:function(aArg){var B;A.zX([this,this.BdQ],[B=A._GetAutoObject(A.Device.Device
),B.AEA,B.AIP],0);A.pe([this,this.BdQ],this);},Dn:function(){return 3;},As:function(
E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.Device).AwS(E);},ACT:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return null;return this.AeR.AsL(aIndex
);},ACV:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return-1;return this.
AeR.AsM(aIndex);},BdQ:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbZ;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.AeR._Init.call(this.AeR={I:this},0);this.__proto__=C.Abr;this.Cb.Set(0,
0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AeR._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(
this);this.AeR._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=
this.AeR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APA={Er:null,IM:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Er={I:this},0);A.acg.Text._Init.call(this.IM={I:this},0);this.__proto__=
C.APA;this.H(O2);this.Background.H(O2);this.Er.H(AIo);this.Er.R(A.aaR(A.acf.A6P)
);this.Er.A6(0x12);this.Er.L(A.jb.Text);this.IM.AZ(0x3F);this.IM.H(AIp);this.IM.
Hl(5);this.IM.A6(0x14);this.IM.R(A.aaR(A.acf.AGM));this.IM.L(A.jb.Text);this.J(this.
Er,0);this.J(this.IM,0);this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ik));this.
Er.Cv(A.aaL(A.fl.Bi));this.IM.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Er._Done();this.IM._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Er._ReInit();this.IM._ReInit();this.Er.R(A.aaR(A.acf.
A6P));this.IM.R(A.aaR(A.acf.AGM));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.
Ik));this.Er.Cv(A.aaL(A.fl.Bi));this.IM.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JY:null,BfX:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BeB(this);else A._GetAutoObject(A.Device.Device).A7(63,true,A.
jV,0,[this,this.Vi]);},BeB:function(G){A._GetAutoObject(C.A$).Fy();},Vi:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.BeB(this);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.JY={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APo);this.Je.H(BsL);this.Je.AkJ(2);this.AcC.Z(false);this.ARu=12;this.
Number.H(BsM);this.Number.R(A.aaR(A.acf.A_4));this.A4M=false;this.JY.H(BsN);this.
JY.Hl(5);this.JY.KS(true);this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABF));this.JY.L(A.jb.Text);this.JV(this.Je,-1);this.JV(this.IR,-1);this.
JV(this.AcC,-1);this.J(this.JY,0);this.JY.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mg;this.JY._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.
call(this);this.JY._ReInit();this.Number.R(A.aaR(A.acf.A_4));this.JY.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABF));this.JY.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mg._Mark.call(this,D);if((B=this.JY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APo={_Init:function(aArg){C.Aq3.
_Init.call(this,aArg);this.__proto__=C.APo;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Je={AbP:null,AbO:null,AbN:null,QD:null,CountryToString:null,AsO:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QD.R(this.CountryToString.
Lt(A._GetAutoObject(A.Device.Converter).A7b(A._GetAutoObject(A.Device.Device).Language
))+BsO);},AkJ:function(E){if(this.AsO===E)return;this.AsO=E;var bitmap=null;var A1H=
BsP;var A1G=null;var A1I=false;switch(E){case 0:bitmap=A.aaL(A.ach.Ard);break;case
1:{bitmap=A.aaL(A.ach.AQA);A1H=BsQ;A1G=A.aaL(A.fl.Ak);A1I=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQB);A1H=BsR;A1G=A.aaL(A.fl.Bi);A1I=true;}break;default:throw new Error(
BsS+E.toFixed());}this.AbN.Aw(bitmap);this.AbO.Aw(bitmap);this.AbP.Aw(bitmap);this.
QD.H(A.abJ(this.QD.M,A1H));this.QD.S(A1G);this.QD.Z(A1I);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbP={I:this},0);A.acg.Ap._Init.call(this.AbO={I:this},0);A.acg.Ap._Init.
call(this.AbN={I:this},0);A.acg.Text._Init.call(this.QD={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Je;this.H(AIE);this.
AbP.AZ(0x3);this.AbP.H(AIE);this.AbP.L(A.jb.H8);this.AbP.Cw(2);this.AbO.AZ(0x3);
this.AbO.H(AIE);this.AbO.L(A.jb.Ad$);this.AbO.Cw(1);this.AbN.AZ(0x3);this.AbN.H(
AIE);this.AbN.L(A.jb.Text);this.AbN.Cw(0);this.QD.AZ(0x14);this.QD.H(BsT);this.QD.
L(0xFF020202);this.QD.Z(false);this.J(this.AbP,0);this.J(this.AbO,0);this.J(this.
AbN,0);this.J(this.QD,0);this.AbP.Aw(A.aaL(A.ach.Ard));this.AbO.Aw(A.aaL(A.ach.Ard
));this.AbN.Aw(A.aaL(A.ach.Ard));this.QD.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbP._Done();this.AbO._Done();this.AbN._Done();this.QD._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbP._ReInit();this.AbO._ReInit();this.AbN._ReInit(
);this.QD._ReInit();this.CountryToString._ReInit();this.QD.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsO={Transponder:0,BFL:1,BFM:2};C.APk={Ap:null,De:function(E){C.BR.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APk;this.Ap.H(AZF);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.APb));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ih:0,AaJ:4,Al7:function(G){C.Q_.Al7.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdm()){this.Ih=A._GetAutoObject(A.Device.Helper).Uz.Id;var AiB=A._GetAutoObject(
A.Device.Helper).A6$(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(AiB){A._GetAutoObject(
A.Device.Device).A7(21,true,A._GetAutoObject(A.Device.Converter).Rh(this.Ih),0,[
this,this.Vi]);return;}AiB=A._GetAutoObject(A.Device.Helper).Bjj(this.Ih,A._GetAutoObject(
A.Device.Helper).W);if(AiB&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ih)){A._GetAutoObject(A.Device.Device).A7(25,true,A._GetAutoObject(A.Device.
Converter).Rh(this.Ih),0,[this,this.Vi]);return;}this.AaJ=A._GetAutoObject(A.Device.
Helper).AQ6(this.Ih);switch(this.AaJ){case 0:A._GetAutoObject(A.Device.Device).A7(
45,true,this.Ih.toFixed().length.toFixed(),0,[this,this.Vi]);break;case 1:case 2:{
var BO=A._GetAutoObject(A.Device.Converter).AxQ(this.Ih);A._GetAutoObject(A.Device.
Device).A7(46,true,BO.toFixed(),0,[this,this.Vi]);}break;case 3:this.BfP();break;
default:throw new Error(AIc+this.AaJ.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},Vi:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.AaJ===2)this.BfP();else A._GetAutoObject(
A.Device.Device).AhJ();break;case 5:this.Ev(this);break;default:;}},BfP:function(
){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PQ(this.Ih);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A7(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.II);this.Number.R(A.aaR(A.acf.A_X
));this.Je.H(BsU);this.IR.H(BsV);this.AkJ(1);this.N.CC=[this,this.Ev];this.N.CY(
A.aaL(A.ach.E5));},_ReInit:function(){C.Q_._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_X));},_className:"Application::SetSaveNaisIdScreen"};C.ANY={LO:function(
G){C.AqL.LO.call(this,G);A.pe([this,this.BBp],this);},BBp:function(G){this.JE(this.
Ef);},_Init:function(aArg){C.AqL._Init.call(this,aArg);this.__proto__=C.ANY;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UP={Animal:null,WhereAboutsToString:
null,F$:function(aIndex){return this.WhereAboutsToString.BH(this.C4(aIndex));},As:
function(E){C.Cn.As.call(this,E);if(!!this.Animal)this.Animal.Nf(E);},A4o:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B7,this.B8],0);},LZ:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4o],[B=this.Animal,B.Awk,B.Nf],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4o],[B=this.Animal,B.Awk,B.Nf],0);A.pe([this,this.A4o],this);}
,_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UP;this.Cb.Set(0,1);this.
Cb.Set(1,2);this.Cb.Set(2,3);this.Cb.Set(3,4);this.Cb.Set(4,5);},_Done:function(
){this.__proto__=C.Cn;this.WhereAboutsToString._Done();C.Cn._Done.call(this);},_ReInit:
function(){C.Cn._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UQ={Dn:function(){return 6;},_Init:function(aArg){C.UP._Init.call(this,aArg);
this.__proto__=C.UQ;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Cb.Set(
3,3);this.Cb.Set(4,4);this.Cb.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcO={Dn:function(){return 5;},_Init:function(aArg){C.UP._Init.call(this,aArg
);this.__proto__=C.AcO;this.Cb.Set(0,6);this.Cb.Set(1,7);this.Cb.Set(2,8);this.Cb.
Set(3,9);this.Cb.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdU={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bb8],[B=A._GetAutoObject(A.Device.
Device),B.ASc,B.AZY],0);A.pe([this,this.Bb8],this);},Dn:function(){return 2;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awn(E);},Bb8:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agx;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdU;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGA={FI:null
,Ez:null,EartagNrAssignmentMode:null,Fl:null,Fb:null,HH:null,AW:null,Kk:null,M8:
null,A9:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A9===1){if(this.Hj){this.AW.FM(A.jb.CK);this.HH.CT(A.jb.CK);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FM(A.jb.CS);this.HH.CT(A.jb.CS);this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hj){this.AW.FM(A.jb.CK);this.HH.CT(
A.jb.CK);}else{this.AW.FM(A.jb.CS);this.HH.CT(A.jb.CS);}this.Bb(null);}this.M8.L(
this.V.AQ);},IY:function(G){C.Eg.IY.call(this,G);if(!this.A9)this.FV(this);else this.
Hc(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.
N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(
F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=
null;}break;default:this.FI.AkT((F=this.N,F[1].call(F[0])));}},FV:function(G){this.
Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A9&&!!this.N)
this.FI.AjD((F=this.N,F[1].call(F[0])));this.A9=EN;if(this.A9<0)this.A9=0;else if(
this.A9>1)this.A9=1;switch(this.A9){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SO(2);else this.AW.SO(7);}break;default:throw new Error(
Atg+this.A9.toFixed());}this.DJ(this);this.Am();},By:function(E){if(this.AM===E)
return;this.AM=E;},Ol:function(G){this.AA7(2);},MU:function(G){this.AA7(7);},AA7:
function(GA){var B;var Azr=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azr){
var AAj=(A.Core.P.isPrototypeOf(B=this.QF(Azr,GA,0x15))?B:null);if(!!AAj){this.Bb(
AAj);return true;}}return false;},Af1:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M8.Aw(
A._GetAutoObject(A.Device.Converter).AmV(2));break;case 1:this.M8.Aw(A._GetAutoObject(
A.Device.Converter).AmV((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
Bai+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3Z],this);},A3Z:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Kk.AeZ(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoE]);this.Kk.
AeZ([B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIM]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Awb
,B.AyF]);this.Kk.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASi,B.AZ0]);}break;case
0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyG]);this.Kk.AeZ([B=
A._GetAutoObject(A.Device.Device),B.ASj,B.AZ1]);}break;case 2:{this.AW.As([B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoE]);this.Kk.AeZ([B=A._GetAutoObject(A.Device.Device),
B.AEw,B.AIM]);}break;default:throw new Error(BsW+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bai+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Um:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.Af1],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af1],this.Ez,0);if(!!
E)A.pe([this,this.Af1],this);},AkA:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af1],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af1],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af1],this);},Uh:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BM._Init.call(this.Fl={I:this},0);A.Core.
BM._Init.call(this.Fb={I:this},0);C.Are._Init.call(this.HH={I:this},0);C.AvN._Init.
call(this.AW={I:this},0);C.AuZ._Init.call(this.Kk={I:this},0);A.acg.Ap._Init.call(
this.M8={I:this},0);this.__proto__=C.AGA;var B;this.H(UX);this.V.Ar(false);this.
V.R(As$);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fb.Filter=7;this.HH.H(BsX);this.
AW.H(BsY);this.M8.H(BsZ);this.J(this.HH,0);this.J(this.AW,0);this.J(this.M8,0);this.
FI=A._NewObject(C.Aes,0);this.Fl.BN=[this,this.Ol];this.Fb.BN=[this,this.MU];this.
HH.CI(this.Kk);this.HH.As([B=this.Kk,B.B7,B.B8]);this.AW.As([this,this.Uh,this.By
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fb.
_Done();this.HH._Done();this.AW._Done();this.Kk._Done();this.M8._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fl._ReInit();this.Fb.
_ReInit();this.HH._ReInit();this.AW._ReInit();this.Kk._ReInit();this.M8._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANN={Wo:
null,Zh:null,AbW:null,T$:null,Init:function(aArg){this.Bb(this.Wo);},AEo:function(
G){var BdM=(C.Ank.isPrototypeOf(G)?G:null);if(!!BdM)A._GetAutoObject(A.Device.Device
).A7(BdM.AdB,true,A.jV,0,null);},DE:function(G){if((this.Cr.CO===7)&&(this.AV===
this.T$))A._GetAutoObject(A.Device.Device).A7(10,true,A.jV,0,null);else if((this.
Cr.CO===6)&&(this.AV===this.T$))A._GetAutoObject(C.A$).Cf(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Ank._Init.call(this.Wo={I:
this},0);C.Ank._Init.call(this.Zh={I:this},0);C.Ank._Init.call(this.AbW={I:this}
,0);C.Ank._Init.call(this.T$={I:this},0);this.__proto__=C.ANN;this.Dr(C.AO1);this.
Wo.H(IT);this.Wo.Aj(true);this.Wo.T(A.aaR(A.acf.AhI));this.Wo.Bh(false);this.Wo.
AdB=79;this.Zh.H(P9);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.A$e));this.Zh.Bh(true
);this.Zh.AdB=77;this.AbW.H(Aai);this.AbW.Aj(true);this.AbW.T(A.acf.BiW);this.AbW.
Bh(false);this.AbW.AdB=78;this.T$.H(Ali);this.T$.Aj(true);this.T$.T(A.aaR(A.acf.
About));this.T$.Bh(true);this.T$.AdB=3;this.J(this.Wo,-1);this.J(this.Zh,-1);this.
J(this.AbW,-1);this.J(this.T$,-1);this.Wo.AR=[this,this.AEo];this.Zh.AR=[this,this.
AEo];this.AbW.AR=[this,this.AEo];this.T$.AR=[this,this.AEo];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wo._Done();this.Zh._Done();this.AbW._Done();
this.T$._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this
);this.Wo._ReInit();this.Zh._ReInit();this.AbW._ReInit();this.T$._ReInit();this.
Wo.T(A.aaR(A.acf.AhI));this.Zh.T(A.aaR(A.acf.A$e));this.T$.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AO1={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AO1;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANL={FactoryResetScope:null,Uc:null,Wm:null,Ue:null,Init:function(aArg){this.
Bb(this.Uc);A.pe([this,this.MH],this);},Bj3:function(G){switch(this.FactoryResetScope.
C4(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A7(33,true
,A.jV,0,[this,this.BfD]);break;case 0:A._GetAutoObject(A.Device.Device).A7(7,true
,A.jV,0,[this,this.BfD]);break;default:A.ab5("%s%i",Bs0,this.FactoryResetScope.Q
);}},BfD:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bn5();A._GetAutoObject(A.Device.Device).A7(8,true,A.jV,0,null);A._GetAutoObject(
C.A$).Cf(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bn4();A._GetAutoObject(
A.Device.Device).ArV(0);A._GetAutoObject(A.Device.Device).ArW(0);A._GetAutoObject(
A.Device.Device).ArX(0);A._GetAutoObject(A.Device.Device).Ar1(0);A._GetAutoObject(
A.Device.Device).Ar2(0);A._GetAutoObject(A.Device.Device).Ar3(0);A._GetAutoObject(
A.Device.Device).Uk(5);A._GetAutoObject(A.Device.Device).Awz(0);A._GetAutoObject(
A.Device.Device).AwA(0);A._GetAutoObject(A.Device.Device).AwB(0);A._GetAutoObject(
A.Device.Device).AwT(1);A._GetAutoObject(A.Device.Device).AwU(1);A._GetAutoObject(
A.Device.Device).AwV(1);A._GetAutoObject(A.Device.Device).A7(34,true,A.jV,0,null
);}break;default:A.ab5("%s%e",AId,At.Id);}},_Init:function(aArg){C.Ei._Init.call(
this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={I:this},0);C.Nb.
_Init.call(this.Uc={I:this},0);C.Nb._Init.call(this.Wm={I:this},0);C.BW._Init.call(
this.Ue={I:this},0);this.__proto__=C.ANL;var B;this.Dr(C.AOZ);this.Uc.H(IT);this.
Uc.Aj(true);this.Uc.T(A.aaR(A.acf.ACp));this.Uc.Bh(false);this.Uc.Ne(93);this.Wm.
H(P9);this.Wm.Aj(true);this.Wm.T(A.aaR(A.acf.AdT));this.Wm.Bh(true);this.Wm.Ne(92
);this.Ue.H(Baj);this.Ue.Aj(true);this.Ue.Bll(true);this.Ue.T(A.aaR(A.acf.A6c));
this.Ue.Bh(false);this.J(this.Uc,-1);this.J(this.Wm,-1);this.J(this.Ue,-1);this.
Uc.AR=[B=this.Uc,B.Nh];this.Wm.AR=[B=this.Wm,B.Nh];this.Ue.AR=[this,this.Bj3];this.
Ue.As([B=this.FactoryResetScope,B.B7,B.B8]);this.Ue.CI(this.FactoryResetScope);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope._Done();
this.Uc._Done();this.Wm._Done();this.Ue._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.Uc._ReInit(
);this.Wm._ReInit();this.Ue._ReInit();this.Uc.T(A.aaR(A.acf.ACp));this.Wm.T(A.aaR(
A.acf.AdT));this.Ue.T(A.aaR(A.acf.A6c));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOZ={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOZ;this.
Text.R(A.aaR(A.acf.ACq));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACq));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.Aq5={QR:null,Wd:null,_Init:function(aArg){C.TW._Init.call(this,aArg);C.CH._Init.
call(this.QR={I:this},0);C.CH._Init.call(this.Wd={I:this},0);this.__proto__=C.Aq5;
this.QR.H(Bs1);this.QR.R(A.aaR(A.acf.A_8));this.QR.A6(0x12);this.QR.L(A.jb.Text);
this.Wd.H(Bad);this.Wd.R(A.aaR(A.acf.An8));this.Wd.L(A.jb.Text);this.J(this.QR,0
);this.J(this.Wd,0);this.QR.S(A.aaL(A.fl.Af));this.QR.A2(A.aaL(A.fl.Ak));this.QR.
Cv(A.aaL(A.fl.Bi));this.Wd.S(A.aaL(A.fl.Af));this.Wd.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TW;this.QR._Done();this.Wd._Done();C.TW._Done.call(this
);},_ReInit:function(){C.TW._ReInit.call(this);this.QR._ReInit();this.Wd._ReInit(
);this.QR.R(A.aaR(A.acf.A_8));this.Wd.R(A.aaR(A.acf.An8));this.QR.S(A.aaL(A.fl.Af
));this.QR.A2(A.aaL(A.fl.Ak));this.QR.Cv(A.aaL(A.fl.Bi));this.Wd.S(A.aaL(A.fl.Af
));this.Wd.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TW._Mark.call(this,D);
if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wd)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APv={QS:
null,_Init:function(aArg){C.TW._Init.call(this,aArg);C.CH._Init.call(this.QS={I:
this},0);this.__proto__=C.APv;this.QS.H(Bs2);this.QS.R(A.aaR(A.acf.Ug));this.QS.
A6(0x12);this.QS.L(A.jb.Text);this.J(this.QS,0);this.QS.S(A.aaL(A.fl.Af));this.QS.
A2(A.aaL(A.fl.Ak));this.QS.Cv(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=
C.TW;this.QS._Done();C.TW._Done.call(this);},_ReInit:function(){C.TW._ReInit.call(
this);this.QS._ReInit();this.QS.R(A.aaR(A.acf.Ug));this.QS.S(A.aaL(A.fl.Af));this.
QS.A2(A.aaL(A.fl.Ak));this.QS.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TW.
_Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqx={IJ:null,AbE:null,Ea:null,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.
IJ.H([this.Gz.M[2],0,this.Gz.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[1]]);this.AbE.H([this.IJ.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.AbE.L(this.Gz.AQ);this.IJ.L(this.
Gz.AQ);},Ce:function(Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hq=Ad;if(
!!this.AX){var Ib=this.AX.AmW(Ad,14);var AtP=this.AX.AOI(Ad,7);this.IJ.Aw(A._GetAutoObject(
A.Device.Converter).AmV(AtP));this.AbE.Aw(A._GetAutoObject(A.Device.Converter).A4R(
Ib));this.Am();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IJ={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqx;this.IJ.H(Baf);this.IJ.L(A.jb.Text
);this.AbE.H(Bs3);this.AbE.L(A.jb.Text);this.Ea.H(Bs4);this.Ea.L(A.jb.Bc);this.J(
this.IJ,0);this.J(this.AbE,0);this.J(this.Ea,0);this.IJ.Aw(A.aaL(A.aci.TM));this.
AbE.Aw(A.aaL(A.aci.TM));},_Done:function(){this.__proto__=C.M1;this.IJ._Done();this.
AbE._Done();this.Ea._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IJ._ReInit();this.AbE._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM3={ZT:null
,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.ZT.H([this.Gz.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.ZT.L(this.Gz.AQ);},Ce:function(
Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Ka=this.
AX.KN(Ad,26);if(Ka>0)this.ZT.R(A.ab2(Ka.toFixed(),5));else this.ZT.R(Rp);this.Am(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZT={I:this},0);this.__proto__=C.AM3;this.ZT.H(Bs5);this.J(this.ZT,0);this.ZT.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.ZT._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.ZT._ReInit();this.ZT.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.ZT
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARH={Ap:null,Ai:function(Ae){C.AeS.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARH;this.Text.H(Bs6);this.Ap.H(AZR);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Afc));},_Done:function(){this.__proto__=C.AeS;this.Ap._Done(
);C.AeS._Done.call(this);},_ReInit:function(){C.AeS._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yx={Text:
null,Dd:null,AP:null,Gw:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nm],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIJ],0);A.zV([this,this.Nm
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nm],this);},De:function(
E){C.BR.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zx(E);}
,WA:function(E){C.BR.WA.call(this,E);this.D2.CT(E);},DY:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B$().toFixed());},Nm:function(s){this.DY(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C5._Init.call(this.A_={I:this},0);this.__proto__=C.Yx;this.Text.H(Bs7);this.
Text.A6(0x11);this.Dd.H(Ayv);this.AP.DC(A$$);this.AP.DM(Baa);this.AP.L(A.jb.Bc);
this.Gw.H(Bs8);this.Gw.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(Bs9);this.D2.Zx(A.jb.
Bm);this.D2.CT(A.jb.Rg);this.D2.Hl(2);this.A_.DC(Bs_);this.A_.DM(Bs$);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjZ));this.Gw.Aw(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A_.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acs={FI:null
,JT:null,JS:null,AkQ:null,AkR:null,Q5:null,QC:null,AbD:null,V2:null,PG:null,PH:null
,Sy:null,Gx:null,Gy:null,Ju:null,AlP:0,AlU:0,D7:0,DX:0,A9:0,Bl:function(aSize){var
B;this.Dy.H([this.Hx.M[2]-10,this.Hx.M[1],this.H4.M[0]+10,this.Hx.M[3]]);this.Dy.
AFf((B=this.Dy.M)[2]-B[0]);this.Dy.HI(this.Dy.Gt,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A9===1)||(this.A9===2)){var A04=this.A12(this.A9);if(!!
A04){this.AbD.Z(true);this.AbD.H(A04.M);this.AbD.L(this.V.AQ);this.V2.Z(true);this.
V2.H(A04.M);}else{this.AbD.Z(false);this.V2.Z(false);}this.Hx.Z(false);this.H4.Z(
false);}else{this.AbD.Z(false);this.V2.Z(false);this.Hx.Z(Fu||GE);this.H4.Z(Fu||
GE);}},Qo:function(G){if(!!this.Q){if(this.FF===1)A.pe([this,this.Va],this);else
if(this.FF===4)A.pe([this,this.A0m],this);else if(this.FF===5)A.pe([this,this.A0k
],this);}C.BW.Qo.call(this,G);},J$:function(G){switch(this.A9){case 0:C.BW.J$.call(
this,G);break;case 2:break;default:this.Adv(this);}},J6:function(G){switch(this.
A9){case 0:C.BW.J6.call(this,G);break;default:this.Ait(this);}},A1y:function(G){
var F;if(this.A9===1){var BQ=this.D7;this.D7=this.D7-10;if(this.D7<this.AlU)this.
D7=this.AlU;if(this.D7<A._GetAutoObject(A.Device.Device).AcJ)this.D7=A._GetAutoObject(
A.Device.Device).AcJ;if(this.DX!==BQ){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.
D7));A.abo(this.JT,0);}}if(this.A9===2){var BQ=this.DX;this.DX=this.DX-10;if(this.
DX<this.D7)this.DX=this.D7;if(this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[
0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.Am();},A0k:function(s){this.A1y(
s);},Al5:function(G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0k],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A19:function(G){var F;if(this.A9===1){var
BQ=this.D7;this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ
){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A9===
2){var BQ=this.DX;this.DX=this.DX+10;if(this.DX>this.AlP)this.DX=this.AlP;if(this.
DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.
DJ(this);this.Am();},A0m:function(s){this.A19(s);},Al6:function(G){this.FF=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0m],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},Va:function(G){this.Ew(this.A9+1);},Adv:function(G){this.FF=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Va],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfF:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aez));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.Va];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E5));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CC=[this,this.Hc];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.FI.AkT((F=this.N,F[1].call(F[
0])));}},A94:function(E){if(A.aaZ(this.JT,E))return;if(!!this.JT)A.z$([this,this.
A3w],this.JT,0);this.JT=E;if(!!this.JT)A.zX([this,this.A3w],this.JT,0);A.pe([this
,this.A3w],this);},A3w:function(G){var F;this.D7=(F=this.JT,F[1].call(F[0]));this.
Am();},A93:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.A3v
],this.JS,0);this.JS=E;if(!!this.JS)A.zX([this,this.A3v],this.JS,0);A.pe([this,this.
A3v],this);},A3v:function(G){var F;this.DX=(F=this.JS,F[1].call(F[0]));this.Am();
},FV:function(G){this.Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;
if(!this.A9)this.FI.AjD((F=this.N,F[1].call(F[0])));this.A9=EN;if((this.A9<0)||(
this.A9>2))this.A9=0;this.DJ(this);this.Gy.Bw=!!this.A9;this.Gx.Bw=!!this.A9;this.
Am();},Ait:function(G){if(this.A9>1)this.Ew(this.A9-1);},A3I:function(G){},AyP:function(
s){this.A3I(s);},A3i:function(G){},Bbl:function(s){this.A3i(s);},A12:function(Atp
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkQ={I:this},0);A.acg.AK._Init.call(this.AkR={I:this},0);A.acg.AK._Init.call(
this.Q5={I:this},0);A.acg.Ap._Init.call(this.QC={I:this},0);A.acg.AK._Init.call(
this.AbD={I:this},0);A.acg.BU._Init.call(this.V2={I:this},0);A.acg.Text._Init.call(
this.PG={I:this},0);A.acg.Text._Init.call(this.PH={I:this},0);A.acg.Text._Init.call(
this.Sy={I:this},0);A.Core.BM._Init.call(this.Gx={I:this},0);A.Core.BM._Init.call(
this.Gy={I:this},0);A.Core.BM._Init.call(this.Ju={I:this},0);this.__proto__=C.Acs;
this.H(AfC);this.T(A.aaR(A.acf.Ars));this.Background.H(AfC);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGU));this.V.A6(0x12);this.AkQ.H(Bta);this.AkQ.L(A.jb.Gk);this.AkR.
H(Btb);this.AkR.L(A.jb.H8);this.Q5.H(Btc);this.Q5.L(A.jb.E4);this.QC.H(Btd);this.
AbD.H(Bte);this.V2.H(Btf);this.V2.Ng(3);this.V2.L(A.jb.AV);this.V2.Z(false);this.
PG.H(Btg);this.PG.Hl(8);this.PG.I9(true);this.PG.A6(0x11);this.PG.L(0xFF000000);
this.PH.H(Bth);this.PH.Hl(8);this.PH.I9(true);this.PH.A6(0x11);this.PH.L(0xFF000000
);this.Sy.H(Bti);this.Sy.I9(false);this.Sy.A6(0x12);this.Sy.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.Ju.Filter=1;this.
JV(this.V,-1);this.JV(this.Dy,-2);this.J(this.AkQ,-1);this.J(this.AkR,-1);this.J(
this.Q5,-1);this.J(this.QC,-1);this.J(this.AbD,-1);this.J(this.V2,-1);this.J(this.
PG,-1);this.J(this.PH,0);this.J(this.Sy,0);this.QC.Aw(A.aaL(A.ach.ADv));this.PG.
S(A.aaL(A.fl.Af));this.PH.S(A.aaL(A.fl.Af));this.Sy.S(A.aaL(A.fl.Ak));this.Gx.BN=[
this,this.Al5];this.Gx.D1=[this,this.A0k];this.Gy.BN=[this,this.Al6];this.Gy.D1=[
this,this.A0m];this.Ju.BN=[this,this.Adv];this.FI=A._NewObject(C.Aes,0);},_Done:
function(){this.__proto__=C.BW;this.AkQ._Done();this.AkR._Done();this.Q5._Done();
this.QC._Done();this.AbD._Done();this.V2._Done();this.PG._Done();this.PH._Done();
this.Sy._Done();this.Gx._Done();this.Gy._Done();this.Ju._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkQ._ReInit();this.AkR._ReInit(
);this.Q5._ReInit();this.QC._ReInit();this.AbD._ReInit();this.V2._ReInit();this.
PG._ReInit();this.PH._ReInit();this.Sy._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.Ju._ReInit();this.T(A.aaR(A.acf.Ars));this.V.R(A.aaR(A.acf.AGU));this.PG.
S(A.aaL(A.fl.Af));this.PH.S(A.aaL(A.fl.Af));this.Sy.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JS)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FH={X0:null,Acu:
null,Aoa:0,Aob:0,Dn:function(){if(!this.X0)return 0;return this.X0.MD;},C4:function(
aIndex){if(!this.X0||(aIndex>=this.X0.MD))return-1;return this.X0.Get(aIndex);},
F$:function(aIndex){return this.A6u().BH(this.C4(aIndex));},DU:function(A8){if(!
this.X0)return-1;return this.X0.Avm(A8);},HK:function(){if(!this.X0)return-1;return this.
X0.HK();},AnK:function(E){if(this.Aoa===E)return;this.Aoa=E;A.pe([this,this.AVp]
,this);},A0f:function(Aq){this.AnK(Aq);},AnL:function(E){if(this.Aob===E)return;
this.Aob=E;A.pe([this,this.AVq],this);},A0g:function(Aq){this.AnL(Aq);},AVq:function(
G){A.abo([this,this.ASI,this.A0g],0);},AVp:function(G){A.abo([this,this.ASH,this.
A0f],0);},A6u:function(){return this.Acu;},ASH:function(){return this.Aoa;},ASI:
function(){return this.Aob;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acu={I:this},0);this.__proto__=C.FH;},_Done:function(
){this.__proto__=C.AC;this.Acu._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acu._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMx={Init:
function(aArg){A.zV([this,this.BeP],A._GetAutoObject(A.Device.Helper).UG,0);A.zV([
this,this.BeN],A._GetAutoObject(A.Device.Helper).UF,0);this.BeP(this);this.BeN(this
);},As:function(E){C.FH.As.call(this,E);this.AnL(A._GetAutoObject(A.Device.Helper
).UG.Get(this.DU(E)));this.AnK(A._GetAutoObject(A.Device.Helper).UF.Get(this.DU(
E)));},AnK:function(E){if(this.Aoa===E)return;C.FH.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UF.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UF.
Cg();},AnL:function(E){if(this.Aob===E)return;C.FH.AnL.call(this,E);A._GetAutoObject(
A.Device.Helper).UG.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UG.
Cg();},BeP:function(G){this.Aob=A._GetAutoObject(A.Device.Helper).UG.Get(this.DU(
this.Q));A.pe([this,this.AVq],this);},BeN:function(G){this.Aoa=A._GetAutoObject(
A.Device.Helper).UF.Get(this.DU(this.Q));A.pe([this,this.AVp],this);},_Init:function(
aArg){C.FH._Init.call(this,aArg);this.__proto__=C.AMx;this.X0=A._GetAutoObject(A.
Device.Helper).AdZ;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMy={AgC:null,ABT:0,ABS:0,Init:function(aArg){A.zV([this,this.Be2],A._GetAutoObject(
A.Device.Helper).Afw,0);A.zV([this,this.Be0],A._GetAutoObject(A.Device.Helper).Afv
,0);A.zV([this,this.BeY],A._GetAutoObject(A.Device.Helper).Afu,0);A.zV([this,this.
Be4],A._GetAutoObject(A.Device.Helper).Afx,0);this.Be2(this);this.Be0(this);this.
BeY(this);this.Be4(this);},As:function(E){C.FH.As.call(this,E);this.AnL(A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DU(E)));this.AnK(A._GetAutoObject(A.Device.Helper).
Afv.Get(this.DU(E)));this.ASM(A._GetAutoObject(A.Device.Helper).Afu.Get(this.DU(
E)));this.ASO(A._GetAutoObject(A.Device.Helper).Afx.Get(this.DU(E)));},AnK:function(
E){if(this.Aoa===E)return;C.FH.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Afv.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afv.Cg();},AnL:function(
E){if(this.Aob===E)return;C.FH.AnL.call(this,E);A._GetAutoObject(A.Device.Helper
).Afw.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Cg();},A6u:function(
){return this.AgC;},Be2:function(G){this.Aob=A._GetAutoObject(A.Device.Helper).Afw.
Get(this.DU(this.Q));A.pe([this,this.AVq],this);},Be0:function(G){this.Aoa=A._GetAutoObject(
A.Device.Helper).Afv.Get(this.DU(this.Q));A.pe([this,this.AVp],this);},ASO:function(
E){if(this.ABT===E)return;this.ABT=E;A._GetAutoObject(A.Device.Helper).Afx.Set(this.
DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Cg();A.pe([this,this.A$C],this
);},ASM:function(E){if(this.ABS===E)return;this.ABS=E;A._GetAutoObject(A.Device.
Helper).Afu.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Cg();A.
pe([this,this.A$B],this);},A$B:function(G){A.abo([this,this.A8g,this.ASM],0);},A$C:
function(G){A.abo([this,this.A8h,this.ASO],0);},BeY:function(G){this.ABS=A._GetAutoObject(
A.Device.Helper).Afu.Get(this.DU(this.Q));A.pe([this,this.A$B],this);},Be4:function(
G){this.ABT=A._GetAutoObject(A.Device.Helper).Afx.Get(this.DU(this.Q));A.pe([this
,this.A$C],this);},A8h:function(){return this.ABT;},A8g:function(){return this.ABS;
},_Init:function(aArg){C.FH._Init.call(this,aArg);A.Device.AgC._Init.call(this.AgC={
I:this},0);this.__proto__=C.AMy;this.X0=A._GetAutoObject(A.Device.Helper).AgD;this.
Init(aArg);},_Done:function(){this.__proto__=C.FH;this.AgC._Done();C.FH._Done.call(
this);},_ReInit:function(){C.FH._ReInit.call(this);this.AgC._ReInit();},_Mark:function(
D){var B;C.FH._Mark.call(this,D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMe={RO:null,Init:function(
aArg){var B;A.zX([this,this.AiR],[B=this.AnimalType,B.B7,B.B8],0);A.pe([this,this.
AiR],this);this.Bb(this.RO);},Bk:function(E){C.I2.Bk.call(this,E);this.RO.By(this.
Jp.AM);},AiR:function(G){A._GetAutoObject(A.Device.Device).AwC(this.AnimalType.Q
);},_Init:function(aArg){C.I2._Init.call(this,aArg);C.TF._Init.call(this.RO={I:this
},0);this.__proto__=C.AMe;var B;this.Jp.Ar(false);this.Jp.Aj(false);this.Jp.Z(false
);this.RO.H(AIF);this.RO.Aj(true);this.RO.Nc(14);this.RO.Aht(0);this.RO.OM(0);this.
J(this.RO,-4);this.RO.AR=[this,this.AAr];this.RO.As([B=this.AnimalType,B.B7,B.B8
]);this.RO.CI(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I2;this.RO._Done();C.I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(
this);this.RO._ReInit();},_Mark:function(D){var B;C.I2._Mark.call(this,D);if((B=
this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TF={Filter:null,Eq:0,TableId:0,Operator:1,CP:function(){var F;this.Tr((F=this.
Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hx.H(AhW
);this.H4.H([aSize[0]-40,40,aSize[0],80]);this.Dy.H([this.Hx.M[2]-5,this.Hx.M[1]
,this.H4.M[0]+5,this.Hx.M[3]]);this.Dy.AFf((B=this.Dy.M)[2]-B[0]);this.Dy.HI(this.
Dy.Gt,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb
],E,0);A.pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tr((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.
Operator));else this.Tr(null);},Aht:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.
Eq=E;A.pe([this,this.Mb],this);},Tr:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmX(this.TableId,this.Eq));this.Am();},OM:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mb],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TF;this.H(J0);this.V.A6(0x11);this.V.Cv(A.aaL(A.
fl.Bi));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cv(A.aaL(A.fl.Bi));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARQ={Gg:null,MP:null,DZ:null,Y:null,Ef:null,Co:null,CG:null,C$:null,Gn:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jf:null,AnimalType:null,Gender:null,Pk:
null,KY:null,Jd:null,YL:null,Amk:null,KI:0,M2:0,A3Q:false,Init:function(aArg){var
B;A.zX([this,this.BAi],[B=A._GetAutoObject(A.Device.Device),B.AEx,B.AIN],0);A.zV([
this,this.At1],this.MP,0);A.zX([this,this.At1],[B=A._GetAutoObject(A.Device.Device
),B.Awj,B.AyK],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEx
,B.AIN],0);A.zV([this,this.GH],this.MP,0);A.zX([this,this.AiR],this.BZ.Q,0);A.pe([
this,this.AiR],this);A.pe([this,this.Beq],this);A.pe([this,this.At1],this);A.pe([
this,this.GH],this);A.pe([this,this.A3j],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALj],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArO(A.jb.E4);else
this.Ef.ArO(A.jb.Gk);if(A._GetAutoObject(A.Device.Device).AeM){if(!!(F=this.Co.Dj
,F[1].call(F[0])))this.Co.ArO(A.jb.E4);else this.Co.ArO(A.jb.Gk);}else this.Co.ArO(
A.jb.Rg);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},LO:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(A.Device.Device
).A7(41,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aql(A._GetAutoObject(A.
Device.Helper).W);this.ApD();},CD:function(G){C.AB.CD.call(this,G);A._GetAutoObject(
A.Device.Device).AFm(0);},E6:function(G){C.AB.E6.call(this,G);this.Jd.Ar(false);
A._GetAutoObject(A.Device.Device).Ur(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.EX();A._GetAutoObject(C.A$).Fy();},Fj:function(G){var B;this.Ay.
Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},At1:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALj(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aek(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A7(21,true,A._GetAutoObject(A.Device.Converter
).Rh((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A2_]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A29],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeM)this.JE(this.Co);}var BdF=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeM||!!(CA=this.Co.Dj,CA[1].call(CA[0])));if(this.MP.AOD()>0){if((
this.AV===this.Co)&&BdF)this.Bb(this.Y.TO(this.Co,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeM&&(this.AV===this.Co))&&!!(F=this.Co.Dj,F[1].call(F[0])))this.
JE(this.Ef);if(BdF)this.Bcs(this);},XG:function(G){A._GetAutoObject(A.Device.Device
).Dt(13);},Ai4:function(){var F;this.Gg.Cg(A._GetAutoObject(A.Device.Device).An);
if(this.MP.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A7(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),
0,null);else{var L7=A._GetAutoObject(A.Device.Device).An.LT(0,this.Gg.Id);A._GetAutoObject(
A.Device.Device).SP(L7);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
this.Gg.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gg.DateOfBirth);B1.
Cg(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A7(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var L7=A._GetAutoObject(A.Device.
Device).An.LT(0,this.Gg.Id);A._GetAutoObject(A.Device.Device).SP(L7);var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Gg.Id);B1.OnSetBodyWeight(this.
M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dq());B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WF(65280);this.Jd.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFm(F.AvU+1));this.A3Q=true;A.pe([this,
this.ALj],this);this.ApD();},GH:function(G){this.Co.ATm(A._GetAutoObject(A.Device.
Device).AeM);A._GetAutoObject(A.Device.Helper).JW(this.BZ,this.MP.NU(14));A._GetAutoObject(
A.Device.Helper).JW(this.C9,this.MP.NU(23));A._GetAutoObject(A.Device.Helper).JW(
this.CG,this.MP.NU(32));A._GetAutoObject(A.Device.Helper).JW(this.Ee,this.MP.NU(
18));A._GetAutoObject(A.Device.Helper).JW(this.C$,this.MP.NU(7));A._GetAutoObject(
A.Device.Helper).JW(this.Gn,this.MP.NU(34));this.YL.Z(!this.MP.AOD());var O;var Aa=
null;var Apk=this.AV;for(O=0;O<this.MP.AfO.NP();O++){Aa=this.Bzb(this.MP.AfO.OC(
O));if(!!Aa)this.ZI(Aa);}this.JE(Apk);A._GetAutoObject(A.Device.Helper).ANo(this.
Y);A.pe([this,this.A3j],this);this.Am();},AeW:function(E){if(this.KI===E)return;
this.KI=E;A.abo([this,this.Av7,this.AeW],0);},Aho:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Ans,this.Aho],0);},Bcs:function(G){this.Gg.Gr();A._GetAutoObject(
A.Device.Helper).Aql(this.Gg);this.Gg.Q3(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gg.Nd(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gg.SI(A._GetAutoObject(
A.Device.Helper).AMf(0,this.Gg));this.Gg.Ae4(true);if(this.MP.NU(14))this.Gg.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NU(32))this.Gg.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NU(7))this.Gg.JQ(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NU(34))this.Gg.Nf(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alu=A._GetAutoObject(A.Device.Helper).A1l(this.Gg,0,A._GetAutoObject(
A.Device.Device).An);if(!Alu)this.Ai4();else A._GetAutoObject(A.Device.Helper).AKf(
this.Gg,Alu,0,0,[this,this.ApJ]);},ApD:function(){A._GetAutoObject(A.Device.Helper
).W.Nd(0);if(A._GetAutoObject(A.Device.Device).AeM)A._GetAutoObject(A.Device.Helper
).W.Q3(0);this.AeW(0);this.Aho(0);this.JE(this.Ef);this.Am();},ApJ:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.ApD();break;case 43:this.JE(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As9,At.Id);}},JE:function(Ag){this.Bb(Ag);this.Y.HI(Ag,true
,null,null);this.Y.Vx(null,null);},Beq:function(G){this.Ee.Ahr(A._GetAutoObject(
A.Device.Helper).W.AhU(1));this.At1(this);},AiR:function(G){this.C9.Ahr(A._GetAutoObject(
A.Device.Helper).Abt(this.AnimalType.Q));},A3j:function(G){var B;var BBn=this.Ay.
Background.Fo();var width=(BBn?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xv=this.Y.TO(null,0x401);while(!!Xv&&(((B=Xv)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OU.isPrototypeOf(Xv)?Xv:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xv=this.Y.TO(Xv,0x1);}},Bzb:function(Aam){var Aa=null;switch(Aam){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gn;break;default:A.ab5("%s%e",Btj
,Aam);}return Aa;},BAi:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeM
)A._GetAutoObject(A.Device.Helper).W.Q3(0);else if(!(F=this.Co.Dj,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q3(A._GetAutoObject(A.Device.Helper).Dq()-
A._GetAutoObject(A.Device.Helper).AmJ(A._GetAutoObject(A.Device.Device).AdR));this.
At1(this);},ALj:function(G){var B;var AKi=A.jV;var Ay8=A.jb.CK;var BcJ=A.jb.AV;this.
Amk.AxG(this);if(this.A3Q){this.A3Q=false;AKi=A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.Bo0),P8,A._GetAutoObject(A.Device.Converter).Rh(this.Gg.NaisId));
A.pe([B=this.Amk,B.StartTimer],this);Ay8=A.jb.E4;BcJ=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKi=A.aaR(A.acf.Bof);else if((
this.AV===this.Co)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKi=A.aaR(A.
acf.Boe);this.YL.T(AKi);this.YL.Blw(Ay8);this.YL.Blx(BcJ);},A2_:function(G){var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).AjE();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).AjE();else if(At.PopupState===7){A._GetAutoObject(C.A$).Cf(76);
A._GetAutoObject(A.Device.Device).AjE();}}}else A._GetAutoObject(A.Device.Device
).AjE();},A29:function(G){A._GetAutoObject(A.Device.Device).AuO();},DJ:function(
G){var B;if(!this.MP.AOD()){this.N.Ld.Ds(255);if(this.AV===this.Ef){this.N.C6(A.
aaL(A.ach.Edit));this.N.Cm=[B=this.Ef,B.FV];}else if(this.AV===this.Co){this.N.C6(
A.aaL(A.ach.Edit));this.N.Cm=[B=this.Co,B.FV];}else{this.N.C6(null);this.N.Cm=null;
}}else{this.N.C6(A.aaL(A.ach.Am4));if((this.Ef.Aqy===A.jb.Gk)||(this.Co.Aqy===A.
jb.Gk)){this.N.Ld.Ds(100);this.N.Cm=null;}else{this.N.Ld.Ds(255);this.N.Cm=[this
,this.Bcs];}}},Av7:function(){return this.KI;},Ans:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUw._Init.call(this.Ef={I:this},0);C.
AUs._Init.call(this.Co={I:this},0);C.Axv._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.AsB._Init.call(this.Gn={I:this},0);C.AkX._Init.call(this.
Ee={I:this},0);C.AkX._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UQ._Init.call(this.Jf={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pk={I:this},0);A.Device.KY._Init.call(this.KY={I:this},0);A.Device.TG._Init.call(
this.Jd={I:this},0);C.AU2._Init.call(this.YL={I:this},0);A.Core.Timer._Init.call(
this.Amk={I:this},0);this.__proto__=C.ARQ;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dr(C.APj);this.DZ.AZ(0x3F);this.DZ.H(Fe);this.DZ.
L(A.jb.CK);this.Y.H(Fe);this.Y.JP(9);this.Ef.H(AIF);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACA));this.Ef.ATm(true);this.Ef.AFF(false);this.Co.H(Baj);this.Co.Aj(true
);this.Co.T(A.aaR(A.acf.Aee));this.Co.ATm(true);this.Co.AFz(true);this.CG.H(As8);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As8);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afm));this.Gn.H(Bak);this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jf)
);this.Ee.H(Btk);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.Gc(1000);this.
Ee.EV(999000);this.Ee.Ahr(A._GetAutoObject(A.Device.Helper).Abt(this.AnimalType.
Q));this.C9.H(Bak);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.Gc(1000);
this.C9.EV(99000);this.C9.Ahr(A._GetAutoObject(A.Device.Helper).Abt(this.AnimalType.
Q));this.BZ.H(As7);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afr));this.Ay.H(Is);this.
Jd.B2=false;this.Jd.Cx=true;this.Jd.HO(1);this.Jd.Fp(1000);this.Jd.Un(0);this.YL.
H(Aaj);this.YL.Aj(true);this.YL.ArO(A.jb.Text);this.Amk.PP(3000);this.J(this.DZ,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Co,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gn,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YL,0);this.N.CC=[this,this.Ev];this.N.Cl=[this,
this.XG];this.N.CY(A.aaL(A.ach.E5));this.N.Ct(A.aaL(A.ach.AbF));this.Y.El=[this,
this.Fj];this.Ef.Gs([this,this.D_,this.GQ]);this.Ef.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Anv,B.Nd]);this.Ef.AFa([this,this.At1]);this.Ef.AS$([this,this.A29]);
this.Ef.ATa([this,this.A2_]);this.Co.Gs([this,this.D_,this.GQ]);this.Co.Ab$([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av_,B.Q3]);this.Co.OE=[this,this.Beq];this.Co.
AS$([this,this.A29]);this.Co.ATa([this,this.A2_]);this.CG.Gs([this,this.D_,this.
GQ]);this.CG.LY([B=this.CG,B.FV]);this.CG.L1(A.aaL(A.ach.Edit));this.CG.As([B=this.
Breed,B.B7,B.B8]);this.CG.CI(this.Breed);this.CG.Anz(this.Pk);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.Gn.Gs([this,this.D_,this.GQ]);this.
Gn.LY([B=this.Gn,B.FV]);this.Gn.L1(A.aaL(A.ach.Edit));this.Gn.As([B=this.Jf,B.B7
,B.B8]);this.Gn.CI(this.Jf);this.Gn.Anz(this.KY);this.Ee.As([this,this.Ans,this.
Aho]);this.C9.As([this,this.Av7,this.AeW]);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.Ay.BmT([this,this.A3j]);this.Breed.LZ(A._GetAutoObject(
A.Device.Helper).W);this.Jf.LZ(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LZ(A._GetAutoObject(A.Device.Helper).W);this.Gender.LZ(A._GetAutoObject(A.Device.
Helper).W);this.Gg=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Ams
);this.Jd.Q=[B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0b];this.Amk.Mz=[this,
this.ALj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();
this.Y._Done();this.Ef._Done();this.Co._Done();this.CG._Done();this.C$._Done();this.
Gn._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jf._Done();this.AnimalType._Done();this.Gender._Done();this.Pk.
_Done();this.KY._Done();this.Jd._Done();this.YL._Done();this.Amk._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Co._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gn._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jf._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pk._ReInit();this.KY._ReInit();this.Jd._ReInit();this.YL._ReInit(
);this.Amk._ReInit();this.Ef.T(A.aaR(A.acf.ACA));this.Co.T(A.aaR(A.acf.Aee));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afm));this.Gn.T(A.aaR(A.acf.Jf));
this.Ee.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KI));this.BZ.T(A.aaR(A.acf.Afr)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gg)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amk)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.AsA={Zo:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zo={
I:this},0);this.__proto__=C.AsA;this.N.CV(A.acf.Bh2);this.Number.H(Btl);this.Je.
H(Btm);this.IR.H(Btn);this.AkJ(2);this.Bcp=false;this.Bdu=true;this.Bdv=false;this.
Zo.H(Bto);this.Zo.KS(true);this.Zo.R(A.aaR(A.acf.A$d));this.Zo.L(A.jb.Text);this.
J(this.Zo,0);this.N.CC=null;this.N.Cm=[this,this.AIT];this.N.CY(null);this.Zo.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zo.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zo._ReInit();this.Zo.R(A.aaR(A.acf.A$d));this.Zo.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADM={Cu:null,FM:function(E){if(this.M4===E)return;C.HL.FM.call(this,E);this.
Cu.CT(E);},Yv:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F_;break;
case 1:B5=this.Cu;break;case 2:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADM;this.H(Btp);this.Cu.H(A$Y);this.F_.H(Btq);this.J(this.
Cu,-2);this.Cu.Di=[this,this.GU];},_Done:function(){this.__proto__=C.HL;this.Cu.
_Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.call(this);this.
Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Cu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsB={G3:null
,Bl:function(aSize){C.OR.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G3.M[0
]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hj)this.G3.FM(A.jb.CK);else this.
G3.FM(A.jb.CS);},A1X:function(){this.Bb(this.G3);},_Init:function(aArg){C.OR._Init.
call(this,aArg);C.HL._Init.call(this.G3={I:this},0);this.__proto__=C.AsB;this.G3.
H(Btr);this.J(this.G3,0);this.G3.As([this,this.ASt,this.AFt]);},_Done:function(){
this.__proto__=C.OR;this.G3._Done();C.OR._Done.call(this);},_ReInit:function(){C.
OR._ReInit.call(this);this.G3._ReInit();},_Mark:function(D){var B;C.OR._Mark.call(
this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axv={G3:null,Bl:function(aSize){C.OR.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G3.M[0]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hj)this.G3.FM(
A.jb.CK);else this.G3.FM(A.jb.CS);},A1X:function(){this.Bb(this.G3);},_Init:function(
aArg){C.OR._Init.call(this,aArg);C.ADM._Init.call(this.G3={I:this},0);this.__proto__=
C.Axv;this.G3.AZ(0x18);this.G3.H(Bts);this.J(this.G3,0);this.G3.As([this,this.ASt
,this.AFt]);},_Done:function(){this.__proto__=C.OR;this.G3._Done();C.OR._Done.call(
this);},_ReInit:function(){C.OR._ReInit.call(this);this.G3._ReInit();},_Mark:function(
D){var B;C.OR._Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acv={ScreenTypeToString:
null,Dn:function(){return 4;},F$:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BH(this.C4(aIndex));},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acv;this.Cb.Set(0,3);this.Cb.Set(1,35);this.Cb.Set(2
,34);this.Cb.Set(3,43);},_Done:function(){this.__proto__=C.Cn;this.ScreenTypeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVL={A2d:false,Wz:function(G){this.Agu();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.
Settings),[this,this.A3o]);A._GetAutoObject(C.BS).FX();this.AL3();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).FX();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.ARh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dt(6);},DE:function(G){},CD:function(G){C.RN.CD.call(this,G);if(this.A2d){this.A2d=
false;A.pe([this,this.A0h],this);}},Abv:function(){return C.AB4;},Abw:function(){
return C.ADl;},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6J(Math.max(A._GetAutoObject(A.Device.Device).AvW,A._GetAutoObject(
A.Device.Helper).A6B(A._GetAutoObject(A.Device.Device).An))+1));},HQ:function(G){
C.RN.HQ.call(this,G);if(this.Akl()===false){this.N.Ct(A.aaL(A.ach.Avu));this.N.Cl=[
this,this.ANT];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agg:function(
){A._GetAutoObject(C.A$).Cf(86);},AAZ:function(G){var aFilter=A._GetAutoObject(A.
Device.Device).An.Filter.E$();var AyW=aFilter.DL(26,4);if(!!AyW){aFilter.Ni(AyW);
A._GetAutoObject(A.Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},A6z:
function(){return C.APq;},BfA:function(){var B;var Filter;var FilterCriterion;if(
!!A._GetAutoObject(A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.
Device).An.Filter.E$();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},A3o:function(G){A._GetAutoObject(A.Device.Device
).Dt(0);this.A2d=true;A._GetAutoObject(C.A$).Cf(89);},_Init:function(aArg){C.RN.
_Init.call(this,aArg);this.__proto__=C.AVL;this.Dr(C.ADc);this.Dz(A.aaR(A.acf.A7V
));this.AS7(A._GetAutoObject(C.Ax1));},_ReInit:function(){C.RN._ReInit.call(this
);this.Dz(A.aaR(A.acf.A7V));},_className:"Application::YoungNoTransponderListScreen"
};C.AVK={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AVK;this.
KW.Ar(false);this.KW.Aj(false);this.KW.Z(false);this.Bmt(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQX={Ss:null,Q:null,A7R:0,M4:0,Init:function(aArg){this.AS_(6);},As:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Ss)this.Ss.As(E);},AS_:function(
E){if(this.A7R===E)return;this.A7R=E;var X;switch(E){case 2:X=A._NewObject(C.HL,
0);break;case 3:X=A._NewObject(C.ADM,0);break;case 4:X=A._NewObject(C.AQU,0);break;
case 5:X=A._NewObject(C.AQV,0);break;case 6:X=A._NewObject(C.AvN,0);break;default:{
X=null;A.ab5("%s%i",Btt,E);}}this.Bms(X);},Bms:function(E){if(this.Ss===E)return;
if(!!this.Ss){this.Ss.As(null);this.HP(this.Ss);}this.Ss=E;if(!!this.Ss){this.Ss.
As(this.Q);this.J(this.Ss,0);}},FM:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.Ss)this.Ss.FM(E);},SO:function(GA){if(!!this.Ss)this.Ss.SO(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQX;this.H(Ayi);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ss)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQU={CU:null,Cu:null,FM:function(
E){if(this.M4===E)return;C.HL.FM.call(this,E);this.Cu.CT(E);this.CU.CT(E);},Yv:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F_;break;case 1:B5=this.Cu;break;
case 2:B5=this.CU;break;case 3:B5=this.G0;break;default:A.ab5("%s",Ah5);}return B5;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.AQU;this.H(Btu);this.G0.
H(Atf);this.CU.H(A$Z);this.Cu.H(A$0);this.F_.H(A$1);this.J(this.CU,-2);this.J(this.
Cu,-2);this.CU.Di=[this,this.GU];this.Cu.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HL;this.CU._Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(
){C.HL._ReInit.call(this);this.CU._ReInit();this.Cu._ReInit();},_Mark:function(D
){var B;C.HL._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACJ={S1:null,Ai:function(Ae){C.Abs.Ai.call(this,Ae);this.S1.L(this.V.AQ);},_Init:
function(aArg){C.Abs._Init.call(this,aArg);C.CH._Init.call(this.S1={I:this},0);this.
__proto__=C.ACJ;this.V.Z(false);this.AW.H(Btv);this.AW.AS_(4);this.S1.H(Btw);this.
S1.R(A.aaR(A.acf.Kj));this.S1.L(A.jb.Bm);this.J(this.S1,0);this.S1.S(A.aaL(A.fl.
Af));this.S1.A2(A.aaL(A.fl.Ak));this.S1.Cv(null);},_Done:function(){this.__proto__=
C.Abs;this.S1._Done();C.Abs._Done.call(this);},_ReInit:function(){C.Abs._ReInit.
call(this);this.S1._ReInit();this.S1.R(A.aaR(A.acf.Kj));this.S1.S(A.aaL(A.fl.Af)
);this.S1.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abs._Mark.call(this,D);
if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LX={Y4:null,T7:null,AQ:0,A69:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y4.L(this.AQ);this.T7.L(this.AQ);},A9S:function(E){var B;if(this.A69===
E)return;this.A69=E;if(E){this.Y4.Z(true);this.T7.DC([this.T7.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y4.Z(false);this.T7.DC([this.T7.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.Y4={I:this},0);A.acg.C5._Init.call(this.T7={I:this},0);this.__proto__=C.LX;
this.H(AZS);this.Y4.AZ(0x2D);this.Y4.DC(AhZ);this.Y4.DM(Bal);this.Y4.L(A.jb.Text
);this.T7.AZ(0x36);this.T7.DC(Bal);this.T7.DM(Btx);this.T7.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y4,0);this.J(this.T7,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y4._Done();this.T7._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y4._ReInit();this.T7._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUa={Sx:null,Pz:null,C$:null,BZ:null,CG:null,GP:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pk:null,UQ:null,KY:null,Init:function(aArg){A.zX([this
,this.AuI],this.BZ.Q,0);A.zX([this,this.AMW],this.CG.Q,0);A.zX([this,this.Bqk],this.
Sx.Q,0);A.zX([this,this.Avk],this.C$.Q,0);A.zX([this,this.AVH],this.GP.Q,0);},AuI:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BZ.Q,F[1].call(F[
0])));},Bqk:function(G){var F;A._GetAutoObject(A.Device.Device).Axb((F=this.Sx.Q
,F[1].call(F[0])));},Avk:function(G){var F;A._GetAutoObject(A.Device.Device).JQ((
F=this.C$.Q,F[1].call(F[0])));},AVH:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},AMW:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BW._Init.call(this.Sx={I:this},0);C.Iq._Init.call(this.Pz={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axv.
_Init.call(this.CG={I:this},0);C.AsB._Init.call(this.GP={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pk={I:this},0);C.UQ._Init.call(this.UQ={I:
this},0);A.Device.KY._Init.call(this.KY={I:this},0);this.__proto__=C.AUa;var B;this.
I_((A.aaR(A.acf.Aso)+Ays)+A.aaR(A.acf.AjJ));this.Sx.H(Ah2);this.Sx.Aj(true);this.
Sx.T(A.aaR(A.acf.A$M));this.Sx.Bh(true);this.Sx.By(0);this.Pz.H(Ayg);this.Pz.Aj(
true);this.Pz.Z(true);this.Pz.T(A.aaR(A.acf.AdR));this.Pz.Gc(0);this.Pz.EV(99);this.
Pz.IO(A.aaR(A.acf.Kj));this.Pz.I$(A.aaR(A.acf.GK));this.C$.H(Aaj);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afm));this.C$.Bh(true);this.C$.By(0);this.BZ.H(Alj);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afr));this.BZ.Bh(true);this.BZ.By(0);this.CG.H(
AcS);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bh(false);this.GP.H(
AcS);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jf));this.GP.Bh(true);this.AnimalType.
As(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.As(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.As(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.Device).Breed);
this.UQ.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sx,0);this.
J(this.Pz,0);this.J(this.C$,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GP
,0);this.Sx.As([B=this.WeightRecordingScope,B.B7,B.B8]);this.Sx.CI(this.WeightRecordingScope
);this.Pz.As([B=A._GetAutoObject(A.Device.Device),B.A7$,B.BaI]);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.CG.Gs([this,this.D_,this.GQ]);this.CG.LY([
B=this.CG,B.FV]);this.CG.L1(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B7,B.B8
]);this.CG.CI(this.Breed);this.CG.Anz(this.Pk);this.GP.Gs([this,this.D_,this.GQ]
);this.GP.LY([B=this.GP,B.FV]);this.GP.L1(A.aaL(A.ach.Edit));this.GP.As([B=this.
UQ,B.B7,B.B8]);this.GP.CI(this.UQ);this.GP.Anz(this.KY);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cd;this.Sx._Done();this.Pz._Done();this.C$._Done();this.
BZ._Done();this.CG._Done();this.GP._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pk._Done();this.UQ._Done();this.
KY._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
Sx._ReInit();this.Pz._ReInit();this.C$._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GP._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pk._ReInit();this.UQ._ReInit();
this.KY._ReInit();this.I_((A.aaR(A.acf.Aso)+Ays)+A.aaR(A.acf.AjJ));this.Sx.T(A.aaR(
A.acf.A$M));this.Pz.T(A.aaR(A.acf.AdR));this.Pz.IO(A.aaR(A.acf.Kj));this.Pz.I$(A.
aaR(A.acf.GK));this.C$.T(A.aaR(A.acf.Afm));this.BZ.T(A.aaR(A.acf.Afr));this.CG.T(
A.aaR(A.acf.Breed));this.GP.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.Cd._Mark.
call(this,D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UQ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AT$={QM:null,FA:null,Im:null,C_:null,Dk:null,EL:null,AutoRegistrationMode:null
,AdU:null,Init:function(aArg){var B;A.zX([this,this.BgZ],this.QM.Q,0);A.zX([this
,this.Beb],[B=A._GetAutoObject(A.Device.Device),B.ASc,B.AZY],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Uj,B.U3],0);A.pe([this,this.Beb],this);A.pe([
this,this.Adu],this);},BgZ:function(G){var F;A._GetAutoObject(A.Device.Device).Awq((
F=this.QM.Q,F[1].call(F[0])));},Beb:function(G){switch(A._GetAutoObject(A.Device.
Device).Agx){case 0:A._GetAutoObject(A.Device.Helper).JW(this.Im,true);break;case
1:A._GetAutoObject(A.Device.Helper).JW(this.Im,false);break;default:throw new Error(
Bty+A._GetAutoObject(A.Device.Device).Agx.toFixed());}},Adu:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dk.Q,CA[1].call(CA[0])))>12)(CA=this.
Dk.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.BW._Init.call(this.QM={I:this},0);C.BW._Init.call(this.
FA={I:this},0);C.AGA._Init.call(this.Im={I:this},0);C.Iq._Init.call(this.C_={I:this
},0);C.Iq._Init.call(this.Dk={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdU._Init.
call(this.AdU={I:this},0);this.__proto__=C.AT$;var B;this.I_(A.aaR(A.acf.Aqp));this.
QM.H(AIF);this.QM.Aj(true);this.QM.T(A.aaR(A.acf.Aqp));this.QM.Bh(false);this.QM.
Gc(-1);this.QM.EV(1);this.FA.H(UZ);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.
aaR(A.acf.Aqm));this.FA.Bh(true);this.Im.H(Aaj);this.Im.Aj(true);this.Im.Z(true);
this.Im.T(A.aaR(A.acf.AEh));this.Im.Bh(true);this.C_.H(Alj);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqH));this.C_.Bh(false);this.C_.Gc(2);this.C_.EV(
6);this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dk.H(AcS);this.Dk.
Aj(true);this.Dk.T(A.aaR(A.acf.Zq));this.Dk.Bh(true);this.Dk.Gc(0);this.Dk.EV(12
);this.Dk.IO(A.aaR(A.acf.OA));this.Dk.I$(A.aaR(A.acf.Ey));this.EL.H(Btz);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bh(false);this.EL.Ar4(A.aaR(A.acf.Aqo));this.AutoRegistrationMode.
As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QM,0);this.
J(this.FA,0);this.J(this.Im,0);this.J(this.C_,0);this.J(this.Dk,0);this.J(this.EL
,0);this.QM.As([B=this.AutoRegistrationMode,B.B7,B.B8]);this.QM.CI(this.AutoRegistrationMode
);this.FA.As([B=this.AdU,B.B7,B.B8]);this.FA.CI(this.AdU);this.Im.Um([B=A._GetAutoObject(
A.Device.Device),B.Wx,B.AZ2]);this.Im.AkA([B=A._GetAutoObject(A.Device.Device),B.
Awa,B.AyE]);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.Dk.
As([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.EL.DB(A.aaL(A.ach.Aj1));
this.EL.OL([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.EL.PO([B=A._GetAutoObject(
A.Device.Device),B.Uj,B.U3]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.QM._Done();this.FA._Done();this.Im._Done();this.C_._Done();this.Dk._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdU._Done();C.Cd._Done.
call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.QM._ReInit();this.FA.
_ReInit();this.Im._ReInit();this.C_._ReInit();this.Dk._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdU._ReInit();this.I_(A.aaR(A.acf.Aqp
));this.QM.T(A.aaR(A.acf.Aqp));this.FA.T(A.aaR(A.acf.Aqm));this.Im.T(A.aaR(A.acf.
AEh));this.C_.T(A.aaR(A.acf.AqH));this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.
acf.Ey));this.Dk.T(A.aaR(A.acf.Zq));this.Dk.IO(A.aaR(A.acf.OA));this.Dk.I$(A.aaR(
A.acf.Ey));this.EL.Ar4(A.aaR(A.acf.Aqo));},_Mark:function(D){var B;C.Cd._Mark.call(
this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FA)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVd={OF:null,FA:null,Im:null,C_:null,Dk:null,EL:null,Afq:null,Init:function(
aArg){var B;A.zX([this,this.BeR],[B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0d
],0);A.zX([this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.zX([
this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3],0);A.pe([this,this.
BeR],this);A.pe([this,this.Adu],this);},BeR:function(G){var AKZ=false;var AaR=false;
switch(A._GetAutoObject(A.Device.Device).Ak7){case 0:{AKZ=false;AaR=false;}break;
case 1:{AKZ=true;AaR=false;}break;case 2:{AKZ=false;AaR=true;}break;default:throw new
Error(BtA+A._GetAutoObject(A.Device.Device).Ak7.toFixed());}A._GetAutoObject(A.Device.
Helper).JW(this.Im,AKZ);A._GetAutoObject(A.Device.Helper).JW(this.C_,AaR);A._GetAutoObject(
A.Device.Helper).JW(this.Dk,AaR);A._GetAutoObject(A.Device.Helper).JW(this.EL,AaR
);},Adu:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dk.Q,CA[
1].call(CA[0])))>12)(CA=this.Dk.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Iq._Init.call(this.OF={
I:this},0);C.BW._Init.call(this.FA={I:this},0);C.AGA._Init.call(this.Im={I:this}
,0);C.Iq._Init.call(this.C_={I:this},0);C.Iq._Init.call(this.Dk={I:this},0);C.AvX.
_Init.call(this.EL={I:this},0);C.Afq._Init.call(this.Afq={I:this},0);this.__proto__=
C.AVd;var B;this.I_(A.aaR(A.acf.LinkTransponder));this.OF.H(AIF);this.OF.Aj(true
);this.OF.Z(true);this.OF.T(A.aaR(A.acf.A7q));this.OF.Bh(false);this.OF.Gc(1);this.
OF.EV(365);this.OF.IO(A.aaR(A.acf.Kj));this.OF.I$(A.aaR(A.acf.GK));this.FA.H(UZ);
this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqm));this.FA.Bh(true);this.
Im.H(Aaj);this.Im.Aj(true);this.Im.Z(true);this.Im.T(A.aaR(A.acf.AEh));this.Im.Bh(
false);this.C_.H(Alj);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqH
));this.C_.Bh(false);this.C_.Gc(2);this.C_.EV(6);this.C_.IO(A.aaR(A.acf.OA));this.
C_.I$(A.aaR(A.acf.Ey));this.Dk.H(AcS);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Zq)
);this.Dk.Bh(true);this.Dk.Gc(0);this.Dk.EV(12);this.Dk.IO(A.aaR(A.acf.OA));this.
Dk.I$(A.aaR(A.acf.Ey));this.EL.H(Aow);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bh(false);this.EL.Ar4(A.aaR(A.acf.Aqo));this.J(this.OF,0);this.J(this.FA,0);this.
J(this.Im,0);this.J(this.C_,0);this.J(this.Dk,0);this.J(this.EL,0);this.OF.As([B=
A._GetAutoObject(A.Device.Device),B.A8E,B.BaY]);this.FA.As([B=this.Afq,B.B7,B.B8
]);this.FA.CI(this.Afq);this.Im.Um([B=A._GetAutoObject(A.Device.Device),B.Wx,B.AZ2
]);this.Im.AkA([B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyE]);this.C_.As([B=
A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.Dk.As([B=A._GetAutoObject(A.Device.
Device),B.Uj,B.U3]);this.EL.DB(A.aaL(A.ach.Aj1));this.EL.OL([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.EL.PO([B=A._GetAutoObject(A.Device.Device),B.Uj
,B.U3]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.OF._Done();this.
FA._Done();this.Im._Done();this.C_._Done();this.Dk._Done();this.EL._Done();this.
Afq._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
OF._ReInit();this.FA._ReInit();this.Im._ReInit();this.C_._ReInit();this.Dk._ReInit(
);this.EL._ReInit();this.Afq._ReInit();this.I_(A.aaR(A.acf.LinkTransponder));this.
OF.T(A.aaR(A.acf.A7q));this.OF.IO(A.aaR(A.acf.Kj));this.OF.I$(A.aaR(A.acf.GK));this.
FA.T(A.aaR(A.acf.Aqm));this.Im.T(A.aaR(A.acf.AEh));this.C_.T(A.aaR(A.acf.AqH));this.
C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dk.T(A.aaR(A.acf.Zq));this.
Dk.IO(A.aaR(A.acf.OA));this.Dk.I$(A.aaR(A.acf.Ey));this.EL.Ar4(A.aaR(A.acf.Aqo));
},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Im)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afq={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgd],[B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0d],0);A.pe([
this,this.Bgd],this);},Dn:function(){return 3;},F$:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw9(E);},Bgd:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak7;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afq;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jb={B6:null,IU:null,Cr:null,AmA:null,Sf:null,Anm:null,AjG:null,Text:null,CX:
null,D6:0,LA:false,Ai:function(Ae){var B;A.acn.Jb.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IU.Ar(true);else{this.IU.Ar(false);this.CX.Z(false);}},A4i:function(G
){var B;var Bd=this.Text.M;var Nu=0;var Nv=0;if(this.CX.Es[0]<Bd[0])Nu=Bd[0]-this.
CX.Es[0];if(this.CX.Es[0]>Bd[2])Nu=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nv=
Bd[1]-this.CX.Es[1];if(this.CX.EC[1]>Bd[3])Nv=Bd[3]-this.CX.EC[1];if(!!Nu||!!Nv)
this.Text.Gd(A.abf(this.Text.Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];
var C3=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]
))Nu=0;if(C3[1]<=((B=this.Text.M)[3]-B[1]))Nv=0;this.Text.Gd([Nu,Nv]);},Amn:function(
G){if(!this.B6)return;var A3M=this.Text.AGN(this.D6);var pos=this.Text.Aff(A3M);
this.CX.DM(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IU.Bw){this.IU.Ar(false);this.IU.Ar(true);}if(this.LA){A.pe([this,this.
A4i],this);this.LA=false;}},AAv:function(G){if(!this.B6)return;var EH=this.Text.
AGN(this.D6);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnU(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.AC0(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnU(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cr.CO===4){var pos=this.Text.Aff(EH);var AaQ=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATN(A.abe(pos,[0,AaQ]));}if(this.Cr.CO===5
){var pos=this.Text.Aff(EH);var AaQ=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATN(A.abf(pos,[0,AaQ]));}var Vg=this.Text.AnU(EH);var Iw=this.Text.
String.charCodeAt(Vg)||0;if(((Iw===0x5E)||(Iw===0x7E))||(Iw===0x25))Vg=Vg-1;if(Vg
!==this.D6){this.D6=Vg;A.pe([this,this.Amn],this);this.LA=true;}},Bek:function(G
){if(!this.D6)return;var Iw=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iw===0x5E)||(Iw===0x7E))||(Iw===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LA=true;},AAw:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iw=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iw===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LA=true;}
,Bey:function(G){this.Text.R(A.abU(this.Text.String,BtB,this.D6));this.D6=this.D6+
1;this.LA=true;},Bem:function(G){var Iw=this.AjG.DQ;var Auk=String.fromCharCode(
Iw);A.ab5("%c",Iw);if((((Iw===0x5E)||(Iw===0x7E))||(Iw===0xAD))||(Iw===0x25))Auk=
BtC+String.fromCharCode(Iw);this.Text.R(A.abU(this.Text.String,Auk,this.D6));this.
D6=this.D6+Auk.length;this.LA=true;},_Init:function(aArg){A.acn.Jb._Init.call(this
,aArg);A.acl.TG._Init.call(this.IU={I:this},0);A.Core.BM._Init.call(this.Cr={I:this
},0);A.Core.BM._Init.call(this.AmA={I:this},0);A.Core.BM._Init.call(this.Sf={I:this
},0);A.Core.BM._Init.call(this.Anm={I:this},0);A.Core.BM._Init.call(this.AjG={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.Jb;var B;this.H(BtD);this.IU.B2=false;this.IU.Cx=true;
this.IU.Fp(500);this.IU.Un(500);this.Cr.Filter=147;this.Cr.Bw=false;this.AmA.Filter=
151;this.Sf.Filter=44;this.Anm.Filter=149;this.AjG.Filter=145;this.Text.AZ(0x3F);
this.Text.H(BtE);this.Text.KS(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(BtF);this.CX.DM(BtG);this.CX.A_t(2);this.CX.A_s(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IU.
Q=[B=this.CX,B.Fo,B.Z];this.Cr.BN=[this,this.AAv];this.Cr.D1=[this,this.AAv];this.
AmA.BN=[this,this.Bek];this.AmA.D1=[this,this.Bek];this.Sf.BN=[this,this.AAw];this.
Sf.D1=[this,this.AAw];this.Anm.BN=[this,this.Bey];this.Anm.D1=[this,this.Bey];this.
AjG.BN=[this,this.Bem];this.AjG.D1=[this,this.Bem];this.Text.Q4([this,this.Amn]);
this.Text.S(A.aaL(A.aci.ACN));this.B6=A.aaL(A.aci.ACN);},_Done:function(){this.__proto__=
A.acn.Jb;this.IU._Done();this.Cr._Done();this.AmA._Done();this.Sf._Done();this.Anm.
_Done();this.AjG._Done();this.Text._Done();this.CX._Done();A.acn.Jb._Done.call(this
);},_ReInit:function(){A.acn.Jb._ReInit.call(this);this.IU._ReInit();this.Cr._ReInit(
);this.AmA._ReInit();this.Sf._ReInit();this.Anm._ReInit();this.AjG._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.Jb._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AU3={Jb:null,DE:function(G
){switch(this.Cr.CO){case 6:A._GetAutoObject(A.Device.Device).AuO();break;case 7:
A._GetAutoObject(A.Device.Device).Aqq();break;case 4:A._GetAutoObject(A.Device.Device
).AjE();break;case 5:A._GetAutoObject(A.Device.Device).Aqr();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A$).Fy();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jb._Init.call(this.Jb={I:this},0);this.__proto__=C.AU3;this.H(Cc);this.
N.Z(true);this.Dr(C.Aq4);this.Jb.H(Fe);this.J(this.Jb,0);this.Bb(this.Jb);this.N.
CC=[this,this.Ev];this.N.CY(A.aaL(A.ach.E5));},_Done:function(){this.__proto__=C.
AB;this.Jb._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jb._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATV={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AyL],[B=A._GetAutoObject(A.Device.Device),B.ASh,B.AZZ],0);},Wz:function(G){
if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B$()>0)){if(this.AJB())A._GetAutoObject(
C.BS).Qy(A.aaR(A.acf.AOg),[this,this.AIG]);else A._GetAutoObject(C.BS).Qy(A.aaR(
A.acf.AOg),null);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.
AB9),[this,this.Bay]);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).Qy(A.aaR(
A.acf.AG6),[this,this.A72]);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).Qy(
A.aaR(A.acf.A5o),[this,this.Bax]);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.
BS).Qy(A.aaR(A.acf.UnlinkTransponder),[this,this.Bnw]);}else{A._GetAutoObject(C.
BS).XS(A.aaR(A.acf.AOg));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(A.
aaR(A.acf.AB9));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(A.aaR(A.acf.
AG6));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(A.aaR(A.acf.A5o));A.
_GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A5N)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.
A55));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Ani)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(6);},Abv:function(){return C.
AB5;},Abw:function(){return C.ADj;},Q8:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avn());},HQ:function(G){C.Q6.HQ.call(this
,G);this.N.Ct(A.aaL(A.ach.AbF));this.N.Cl=[this,this.XG];this.N.FN(A.jV);this.N.
C6(null);this.N.CV((A.aaR(A.acf.A5g)+Aak)+this.DataExportDestinationToString.BH(
A._GetAutoObject(A.Device.Device).VQ));this.N.ON(false);this.N.OO(false);this.N.
I6.Ds(255);},AR6:function(G){A._GetAutoObject(A.Device.Device).Dt(0);var Ai1=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A7(96,true,Ai1.toFixed(),0,null);},AR7:function(G){A._GetAutoObject(A.Device.Device
).Dt(0);this.A5V(this);},ASa:function(G){var B;A._GetAutoObject(A.Device.Device).
Dt(0);if(!A._GetAutoObject(A.Device.Device).VQ&&!A._GetAutoObject(A.Device.Device
).Uw){A._GetAutoObject(A.Device.Device).A7(73,true,A.jV,0,[this,this.BeA]);return;
}if(A._GetAutoObject(A.Device.Device).Arj()===false){A.zX([this,this.XH],[B=A._GetAutoObject(
A.Device.Device),B.Wy,B.Xh],0);A._GetAutoObject(A.Device.Device).A7(74,true,A.jV
,0,[this,this.Agf]);return;}A.zX([this,this.AiS],[B=A._GetAutoObject(A.Device.Device
).FQ,B.Q1,B.EW],0);switch(A._GetAutoObject(A.Device.Device).VQ){case 0:A._GetAutoObject(
A.Device.Device).AnS(2);break;case 1:A._GetAutoObject(A.Device.Device).AnS(3);break;
default:{A.z$([this,this.AiS],[B=A._GetAutoObject(A.Device.Device).FQ,B.Q1,B.EW]
,0);throw new Error(BtH+A._GetAutoObject(A.Device.Device).VQ.toFixed());}}},AJB:
function(){var Azu=this.Bg.AX;if(!Azu)return false;return true;},XG:function(G){
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(16);},AiS:function(G){var B;
switch(A._GetAutoObject(A.Device.Device).FQ.EY){case 0:A.z$([this,this.AiS],[B=A.
_GetAutoObject(A.Device.Device).FQ,B.Q1,B.EW],0);break;case 3:{A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();this.Dz(A.aaR(A.acf.BnM));A.
_GetAutoObject(A.Device.Device).AqF();A._GetAutoObject(A.Device.Device).FQ.EX();
}break;case 4:{A._GetAutoObject(A.Device.Device).A7(97,true,A.jV,0,null);A._GetAutoObject(
A.Device.Device).FQ.EX();}break;default:;}A.ab5("%e",A._GetAutoObject(A.Device.Device
).FQ.EY);},_Init:function(aArg){C.Q6._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.ATV;this.
Dr(C.APm);this.Init(aArg);},_Done:function(){this.__proto__=C.Q6;this.DataExportDestinationToString.
_Done();C.Q6._Done.call(this);},_ReInit:function(){C.Q6._ReInit.call(this);this.
DataExportDestinationToString._ReInit();},_Mark:function(D){var B;C.Q6._Mark.call(
this,D);if((B=this.DataExportDestinationToString)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::PurchasedAnimalsListScreen"};C.ADj={Px:null,I5:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Px={I:this},0
);A.acg.Ap._Init.call(this.I5={I:this},0);this.__proto__=C.ADj;this.Er.Z(false);
this.DS.Z(false);this.Px.H(BtI);this.Px.L(A.jb.Text);this.I5.H(BtJ);this.I5.L(A.
jb.Text);this.J(this.Px,0);this.J(this.I5,0);this.Px.Aw(A.aaL(A.ach.AvC));this.I5.
Aw(A.aaL(A.ach.Avx));},_Done:function(){this.__proto__=C.Dc;this.Px._Done();this.
I5._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Px._ReInit();this.I5._ReInit();},_Mark:function(D){var B;C.Dc._Mark.call(this,D);
if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"};C.AMR={DataExportDestinationToString:
null,Init:function(aArg){var B;A.zX([this,this.AAz],[B=A._GetAutoObject(A.Device.
Device),B.AEt,B.AIK],0);A.pe([this,this.AAz],this);},Wz:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B$()>0)){if(this.AJB())A._GetAutoObject(C.BS).Qy(A.aaR(
A.acf.AOf),[this,this.AIG]);else A._GetAutoObject(C.BS).XS(A.aaR(A.acf.AOf));A._GetAutoObject(
C.BS).FX();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.AB7),[this,this.Bay]);A._GetAutoObject(
C.BS).FX();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.AG6),[this,this.A72]);A._GetAutoObject(
C.BS).FX();A._GetAutoObject(C.BS).Qy(A.aaR(A.acf.A5n),[this,this.Bax]);}else{A._GetAutoObject(
C.BS).XS(A.aaR(A.acf.AOf));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(
A.aaR(A.acf.AB7));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(A.aaR(A.
acf.AG6));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).XS(A.aaR(A.acf.A5n)
);}A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A5N)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.
A55));A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Ani)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(6);},Abv:function(){return C.
AB1;},Abw:function(){return C.ADh;},Q8:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).AOC());},HQ:function(G){C.Q6.HQ.call(this
,G);this.N.Ct(A.aaL(A.ach.AbF));this.N.Cl=[this,this.XG];this.N.FN(A.jV);this.N.
C6(null);this.N.CV((A.aaR(A.acf.A5g)+String.fromCharCode(0x0A))+A.aaR(A.acf.Bg7)
);this.N.ON(false);this.N.OO(false);this.N.I6.Ds(255);},AR6:function(G){A._GetAutoObject(
A.Device.Device).Dt(0);var Ai1=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending(
);A._GetAutoObject(A.Device.Device).A7(96,true,Ai1.toFixed(),0,null);},AR7:function(
G){A._GetAutoObject(A.Device.Device).Dt(0);this.A5U(this);},ASa:function(G){var B;
A._GetAutoObject(A.Device.Device).Dt(0);if(!A._GetAutoObject(A.Device.Device).Uw
){A._GetAutoObject(A.Device.Device).A7(73,true,A.jV,0,[this,this.BeA]);return;}if(
A._GetAutoObject(A.Device.Device).Arj()===false){A.zX([this,this.XH],[B=A._GetAutoObject(
A.Device.Device),B.Wy,B.Xh],0);A._GetAutoObject(A.Device.Device).A7(74,true,A.jV
,0,[this,this.Agf]);return;}A.zX([this,this.AiS],[B=A._GetAutoObject(A.Device.Device
).FQ,B.Q1,B.EW],0);A._GetAutoObject(A.Device.Device).AnS(0);},AJB:function(){var
Azu=this.Bg.AX;if(!Azu)return false;var O;for(O=0;O<Azu.B$();O++)if(A._GetAutoObject(
A.Device.Helper).Aj_(Azu.AOQ(O,34))===false)return true;return false;},XG:function(
G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(17);},AAz:function(G){if(
A._GetAutoObject(A.Device.Device).Aqt===1)A.pe([this,this.A51],this);},AiS:function(
G){var B;switch(A._GetAutoObject(A.Device.Device).FQ.EY){case 0:A.z$([this,this.
AiS],[B=A._GetAutoObject(A.Device.Device).FQ,B.Q1,B.EW],0);break;case 3:{A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dz(A.aaR(A.acf.Bg8));A._GetAutoObject(
A.Device.Device).AqF();A._GetAutoObject(A.Device.Device).FQ.EX();}break;case 4:{
A._GetAutoObject(A.Device.Device).A7(70,true,A.jV,0,null);A._GetAutoObject(A.Device.
Device).FQ.EX();}break;default:;}},_Init:function(aArg){C.Q6._Init.call(this,aArg
);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AMR;this.Dr(C.AOV);this.Init(aArg);},_Done:function(
){this.__proto__=C.Q6;this.DataExportDestinationToString._Done();C.Q6._Done.call(
this);},_ReInit:function(){C.Q6._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q6._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AOV={DY:function(G){C.Aet.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdY(11));},_Init:function(aArg){C.Aet._Init.call(this,aArg);this.__proto__=
C.AOV;this.Text.R(A.aaR(A.acf.ABU));},_ReInit:function(){C.Aet._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABU));},_className:"Application::HeaderBirthRegistrationsList"
};C.APm={DY:function(G){C.Aet.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdY(12));},_Init:function(aArg){C.Aet._Init.call(this,aArg);this.__proto__=
C.APm;this.Text.R(A.aaR(A.acf.AGa));},_ReInit:function(){C.Aet._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AGa));},_className:"Application::HeaderPurchasedAnimalsList"
};C.AB5={Ka:0,AP:null,ST:null,O9:0,Init:function(aArg){},Bl:function(aSize){C.Ba.
Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.ST.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.ST.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rh(this.
Ka));this.ST.R(A._GetAutoObject(A.acj.KK).ACP(this.O9));},Ce:function(Ad){if(!this.
AX)return;this.Hq=Ad;if(!!this.AX){this.Ka=this.AX.KN(Ad,26);this.O9=this.AX.Hv(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.ST={I:this},0);this.__proto__=C.AB5;
this.AP.H(AZU);this.AP.L(A.jb.Bc);this.ST.H(AZV);this.J(this.AP,0);this.J(this.ST
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.ST.S(A.aaL(A.fl.Ak));
this.ST.A2(A.aaL(A.fl.Bi));this.ST.Cv(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.ST._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.ST._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.ST.S(A.aaL(A.fl.Ak));this.ST.A2(A.
aaL(A.fl.Bi));this.ST.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUs={
AeT:null,Ab5:null,TP:null,KL:null,TN:null,NI:null,Ti:A.jV,Ai:function(Ae){var F;
C.SQ.Ai.call(this,Ae);this.TP.L(this.V.AQ);var Apw=false;if((!this.Dj||!(F=this.
Dj,F[1].call(F[0])))&&!this.A9)Apw=true;this.TP.Z(Apw);this.Pq.Z(!Apw);this.VT.Z(
!Apw);this.QY.Z(!Apw);this.Yp.Z(!Apw);this.P2.Z(!Apw);},Adv:function(G){var B;var
F;if(!this.Ti.length){C.SQ.Adv.call(this,G);return;}var BQ=this.FZ;var Gv=A._GetAutoObject(
A.Device.AnN).Bfb(this.Ti);this.Ti=A.jV;if(!Gv){A._GetAutoObject(A.Device.Device
).A7(101,true,A.jV,0,this.Ab5);A.pe(this.AeT,this);return;}if(this.Asn&&(Gv>A._GetAutoObject(
A.Device.Helper).Dq())){A._GetAutoObject(A.Device.Device).A7(102,true,A.jV,0,this.
Ab5);A.pe(this.AeT,this);return;}this.Ul(((B=(Gv|0))<0)?B+0x100000000:B);if(this.
FZ!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FZ));A.abo(this.Dj,0);}if(!
!this.OE)A.pe(this.OE,this);},A2Y:function(G){if(this.Ti.length<10)this.Ti=this.
Ti+String.fromCharCode(this.KL.DQ);},AR9:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.Adv(this);else this.NI.NH=true;},AS$:function(E){if(A.aa0(this.
AeT,E))return;this.AeT=E;},ATa:function(E){if(A.aa0(this.Ab5,E))return;this.Ab5=
E;},_Init:function(aArg){C.SQ._Init.call(this,aArg);A.acg.Text._Init.call(this.TP={
I:this},0);A.Core.BM._Init.call(this.KL={I:this},0);A.Core.BM._Init.call(this.TN={
I:this},0);A.Core.BM._Init.call(this.NI={I:this},0);this.__proto__=C.AUs;this.TP.
H(BtK);this.TP.I9(true);this.TP.A6(0x12);this.TP.R(A.aaR(A.acf.A5B));this.KL.Filter=
143;this.TN.Filter=149;this.NI.Filter=145;this.J(this.TP,0);this.TP.S(A.aaL(A.fl.
EK));this.KL.BN=[this,this.A2Y];this.TN.BN=[this,this.Bbk];this.NI.BN=[this,this.
AR9];},_Done:function(){this.__proto__=C.SQ;this.TP._Done();this.KL._Done();this.
TN._Done();this.NI._Done();C.SQ._Done.call(this);},_ReInit:function(){C.SQ._ReInit.
call(this);this.TP._ReInit();this.KL._ReInit();this.TN._ReInit();this.NI._ReInit(
);this.TP.R(A.aaR(A.acf.A5B));this.TP.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SQ._Mark.call(this,D);if((B=this.AeT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUw={AeT:null,Ab5:null,KL:null
,TN:null,NI:null,Ti:A.jV,IY:function(G){var F;if(!this.Ti.length){C.Q$.IY.call(this
,G);return;}if(this.Asm)return;if(!this.Ti.length)this.TN.NH=true;var BQ=this.AM;
var Gv=A._GetAutoObject(A.Device.AnN).BAW(this.Ti);this.Ti=A.jV;if(!Gv){if((this.
Ti.length<13)&&!A._GetAutoObject(A.Device.Device).Uw)A._GetAutoObject(A.Device.Device
).A7(105,true,A.jV,0,this.Ab5);else A._GetAutoObject(A.Device.Device).A7(103,true
,A.jV,0,this.Ab5);A.pe(this.AeT,this);return;}this.By(Gv);if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OE)A.pe(this.
OE,this);},A2Y:function(G){if(this.Asm)return;if(this.Ti.length<17)this.Ti=this.
Ti+String.fromCharCode(this.KL.DQ);},AR9:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.IY(this);else this.NI.NH=true;},AS$:function(E){if(A.aa0(this.
AeT,E))return;this.AeT=E;},ATa:function(E){if(A.aa0(this.Ab5,E))return;this.Ab5=
E;},_Init:function(aArg){C.Q$._Init.call(this,aArg);A.Core.BM._Init.call(this.KL={
I:this},0);A.Core.BM._Init.call(this.TN={I:this},0);A.Core.BM._Init.call(this.NI={
I:this},0);this.__proto__=C.AUw;this.Ar5(false);this.KL.Filter=143;this.TN.Filter=
149;this.NI.Filter=145;this.KL.BN=[this,this.A2Y];this.TN.BN=[this,this.Atj];this.
NI.BN=[this,this.AR9];},_Done:function(){this.__proto__=C.Q$;this.KL._Done();this.
TN._Done();this.NI._Done();C.Q$._Done.call(this);},_ReInit:function(){C.Q$._ReInit.
call(this);this.KL._ReInit();this.TN._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q$._Mark.call(this,D);if((B=this.AeT)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APj={Aj6:null,Aj4:null,Gw:null,Q9:null,SN:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Device),B.A8C,B.AFm],0);A.pe([
this,this.DY],this);},De:function(E){C.BR.De.call(this,E);this.Aj6.L(E);this.Aj4.
L(E);this.Q9.Zx(E);this.Gw.L(E);this.SN.Zx(E);},WA:function(E){this.Q9.CT(E);this.
SN.CT(E);},DY:function(G){this.Q9.T(A._GetAutoObject(A.Device.Device).AvU.toFixed(
));A.pe([this,this.BCe],this);},BCe:function(G){var Xr=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avn());this.SN.T(A._GetAutoObject(A.Device.Device).An.B$().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xr);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj6={I:this},0);A.acg.Ap._Init.call(this.Aj4={
I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.Q9={I:this
},0);C.D2._Init.call(this.SN={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APj;this.Aj6.H(P7);this.Aj4.H(BtL);this.Gw.H(BtM);this.Gw.L(A.jb.
CS);this.Q9.AZ(0x14);this.Q9.H(BtN);this.Q9.Zx(A.jb.Bm);this.Q9.CT(A.jb.Rg);this.
Q9.Hl(2);this.Q9.Blq(0x11);this.SN.AZ(0x14);this.SN.H(BtO);this.SN.Zx(A.jb.Bm);this.
SN.CT(A.jb.Rg);this.SN.Hl(2);this.C5.DC(AhV);this.C5.DM(BtP);this.C5.L(A.jb.Bc);
this.J(this.Aj6,0);this.J(this.Aj4,0);this.J(this.Gw,0);this.J(this.Q9,0);this.J(
this.SN,0);this.J(this.C5,0);this.Aj6.Aw(A.aaL(A.ach.Avw));this.Aj4.Aw(A.aaL(A.ach.
APR));this.Gw.Aw(A.aaL(A.ach.Gw));this.Q9.S(A.aaL(A.fl.Bi));this.SN.S(A.aaL(A.fl.
Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Aj6._Done();this.
Aj4._Done();this.Gw._Done();this.Q9._Done();this.SN._Done();this.C5._Done();C.BR.
_Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Aj6._ReInit();
this.Aj4._ReInit();this.Gw._ReInit();this.Q9._ReInit();this.SN._ReInit();this.C5.
_ReInit();this.Q9.S(A.aaL(A.fl.Bi));this.SN.S(A.aaL(A.fl.Bi));},_Mark:function(D
){var B;C.BR._Mark.call(this,D);if((B=this.Aj6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARy={Abj:null,Aen:null,VP:null,Init:function(aArg){this.Bb(this.Abj);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.XF];this.Bx.Cl=
null;this.Bx.Cm=[this,this.A21];this.Bx.CV(A.jV);this.Bx.Ct(null);this.Bx.CY(A.aaL(
A.ach.V3));}return this.Bx;},AAs:function(G){var Aa=(C.Ajn.isPrototypeOf(G)?G:null
);if(Aa===this.Abj)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aen)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$S);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ajn._Init.call(this.
Abj={I:this},0);C.Ajn._Init.call(this.Aen={I:this},0);C.ARC._Init.call(this.VP={
I:this},0);this.__proto__=C.ARy;var B;this.H(Ro);this.Text.R(A.aaR(A.acf.ABZ));this.
Abj.H(IT);this.Abj.T(A.aaR(A.acf.AjJ));this.Aen.H(P9);this.Aen.T(A.aaR(A.acf.AGh
));this.VP.H(Aai);this.VP.T(A.aaR(A.acf.A4_));this.J(this.Abj,0);this.J(this.Aen
,0);this.J(this.VP,0);this.Text.S(A.aaL(A.fl.Ak));this.Abj.AR=[this,this.AAs];this.
Aen.AR=[this,this.AAs];this.VP.ASP([B=A._GetAutoObject(A.Device.Device),B.AEx,B.
AIN]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Abj._Done();this.
Aen._Done();this.VP._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.
call(this);this.Abj._ReInit();this.Aen._ReInit();this.VP._ReInit();this.Text.R(A.
aaR(A.acf.ABZ));this.Abj.T(A.aaR(A.acf.AjJ));this.Aen.T(A.aaR(A.acf.AGh));this.VP.
T(A.aaR(A.acf.A4_));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fq._Mark.
call(this,D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aen)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARx={AnimalTableFields:null,Ay:null,Y:
null,JM:null,CP:function(){this.AiN(this);},Init:function(aArg){A.zV([this,this.
AiN],this.AnimalTableFields,0);A.pe([this,this.AiN],this);},DE:function(G){C.Fq.
DE.call(this,G);this.MO(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.CC=[this,this.Ev];this.Bx.Cl=[this,this.A2Z];this.Bx.Cm=[this,this.
A3s];this.Bx.C6(A.aaL(A.ach.Arf));this.Bx.Ct(A.aaL(A.ach.Aq_));this.Bx.CY(A.aaL(
A.ach.V3));}return this.Bx;},Ev:function(G){this.AA4();this.XF(this);},AiN:function(
G){this.Ao6();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aas=A._GetAutoObject(
C.Ams).OC(O);this.A05(Aas);}this.J(this.JM,0);A.aaS([this,this.MO],this);},Fj:function(
G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);
this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vx(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},A05:function(
G_){var Ay5=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sg,0);Aa.T(Ay5.BH(G_));Aa.Aj(true);Aa.G4=G_;Aa.A9R(this.AnimalTableFields.NU(G_
));this.J(Aa,0);this.ZI(Aa);},Ao6:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HP(AdK);}}
,AA4:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var Aa=(C.Sg.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G4);if(Aa.ASn())this.AnimalTableFields.
AUo(Aa.G4);}else A.ab5("%s",Ayn);}X=X.Ah;}this.AnimalTableFields.Cg();},A2Z:function(
G){var B;var Aa=(C.Sg.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAk=(C.Sg.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAk){this.AhB(AAk,Aa);A.pe([this,this.MO],this);}}},A3s:function(
G){var B;var Aa=(C.Sg.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAQ=(C.Sg.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAQ){this.AhB(Aa,AAQ);A.pe([this,this.MO],this);}}},AqM:function(
G){var B;A._GetAutoObject(A.Device.Device).Asr(this);A.pe([this,this.AiN],this);
},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au3._Init.call(this.JM={I:this},0);
this.__proto__=C.ARx;this.H(Ro);this.Text.R(A.aaR(A.acf.AGh));this.Ay.H(Is);this.
Y.H(Bam);this.Y.JP(1);this.JM.H(AH6);this.JM.Aj(true);this.JM.T(A.aaR(A.acf.A5O)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JM,0);this.Y.El=[this,this.Fj];
this.JM.AR=[this,this.AqM];this.AnimalTableFields=A._GetAutoObject(C.Ams);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fq;this.Ay._Done();this.Y._Done();this.
JM._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JM._ReInit();this.Text.R(A.aaR(A.acf.AGh));this.
JM.T(A.aaR(A.acf.A5O));this.CP();},_Mark:function(D){var B;C.Fq._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARw={Y:null,BZ:null,C$:null,CG:null,GP:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UP:null,Init:function(aArg){A.zX([this,this.AuI],this.BZ.Q,0);A.zX([
this,this.AMW],this.CG.Q,0);A.zX([this,this.AVH],this.GP.Q,0);A.zX([this,this.Avk
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this
);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.
XF];this.Bx.Cl=null;this.Bx.Cm=null;this.Bx.CV(A.jV);this.Bx.Ct(null);this.Bx.CY(
A.aaL(A.ach.V3));}return this.Bx;},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vx(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},AuI:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BZ.Q,F[1].call(F[0])));},AVH:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},Avk:function(G){var F;A._GetAutoObject(
A.Device.Device).JQ((F=this.C$.Q,F[1].call(F[0])));},AMW:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fq._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.XR._Init.call(this.BZ={
I:this},0);C.XR._Init.call(this.C$={I:this},0);C.XR._Init.call(this.CG={I:this},
0);C.XR._Init.call(this.GP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UQ._Init.call(this.UP={I:this},0);
this.__proto__=C.ARw;var B;this.H(Ro);this.Text.R(A.aaR(A.acf.AjJ));this.Y.H(Bam
);this.Y.JP(1);this.BZ.H(Ah0);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(A.aaR(
A.acf.Afr));this.C$.H(Ayg);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.
Afm));this.CG.H(Aou);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed
));this.GP.H(As8);this.GP.Ar(true);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jf));this.
Ay.H(Is);this.AnimalType.As(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
As(A._GetAutoObject(A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.
Device).Breed);this.UP.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.CG,0);this.J(this.GP,0
);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.BZ.WD(A.aaL(A.fl.Hu));this.BZ.
WE(A.aaL(A.fl.Hu));this.BZ.As([B=this.AnimalType,B.B7,B.B8]);this.BZ.CI(this.AnimalType
);this.C$.WD(A.aaL(A.fl.Hu));this.C$.WE(A.aaL(A.fl.Hu));this.C$.As([B=this.Gender
,B.B7,B.B8]);this.C$.CI(this.Gender);this.CG.WD(A.aaL(A.fl.Hu));this.CG.WE(A.aaL(
A.fl.Hu));this.CG.As([B=this.Breed,B.B7,B.B8]);this.CG.CI(this.Breed);this.GP.WD(
A.aaL(A.fl.Hu));this.GP.WE(A.aaL(A.fl.Hu));this.GP.As([B=this.UP,B.B7,B.B8]);this.
GP.CI(this.UP);this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done(
);this.BZ._Done();this.C$._Done();this.CG._Done();this.GP._Done();this.Ay._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.UP._Done();
C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit(
);this.BZ._ReInit();this.C$._ReInit();this.CG._ReInit();this.GP._ReInit();this.Ay.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
UP._ReInit();this.Text.R(A.aaR(A.acf.AjJ));this.BZ.T(A.aaR(A.acf.Afr));this.C$.T(
A.aaR(A.acf.Afm));this.CG.T(A.aaR(A.acf.Breed));this.GP.T(A.aaR(A.acf.Jf));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amw={CB:0,Alw:A.abi(17,0,null),OC:function(HA){return this.Alw.Get(HA);},NP:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alw.Set(
O,0);this.CB=0;},J:function(Aam){if(this.CB>=17)A.ab5("%s",BtQ);else{this.Alw.Set(
this.CB,Aam);this.CB=this.CB+1;}},Cg:function(){},EU:function(Ah6){var AJW=Ah6.indexOf(
String.fromCharCode(0x2C),0);var A1s=A.jV;var O=0;this.CB=0;while(O<17)if(Ah6===
A.jV)O++;else{if(AJW===-1){A1s=Ah6;Ah6=A.jV;}else{A1s=A.abV(Ah6,AJW);Ah6=A.ab1(Ah6
,0,AJW+1);}var Aas=A.abZ(A1s,0,10)|0;if(this.Bje(Aas)){this.Alw.Set(this.CB,Aas);
this.CB=this.CB+1;O++;}AJW=Ah6.indexOf(String.fromCharCode(0x2C),0);}if(Ah6!==A.
jV)A.ab5("%s",BtR);},toString:function(){var B;var AAi=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAi=AAi+AH8;AAi=AAi+(((B=this.Alw.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAi;},Contains:function(Aam){var O;for(O=0;O<this.CB;O=O+1)if(this.Alw.
Get(O)===Aam)return true;return false;},Bje:function(Aam){return true;},_Init:function(
aArg){(this.Alw=[]).__proto__=C.Amw.Alw;this.__proto__=C.Amw;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL2={AfO:null,Init:function(aArg){var B;A.
zX([this,this.Bef],[B=A._GetAutoObject(A.Device.Device),B.A77,B.BaF],0);A.zX([this
,this.Beg],[B=A._GetAutoObject(A.Device.Device),B.A78,B.BaG],0);A.pe([this,this.
Bef],this);A.pe([this,this.Beg],this);},Clear:function(){C.Amw.Clear.call(this);
this.AfO.Clear();},Cg:function(){A._GetAutoObject(A.Device.Device).ArJ(this.AfO.
toString());A._GetAutoObject(A.Device.Device).ArK(this.toString());},Bef:function(
G){this.AfO.EU(A._GetAutoObject(A.Device.Device).ABB);A.we(this,0);},Beg:function(
G){this.EU(A._GetAutoObject(A.Device.Device).ABC);A.we(this,0);},NU:function(Aam
){return this.AfO.Contains(Aam);},AUo:function(Aam){if(!this.NU(Aam))this.AfO.J(
Aam);},AOD:function(){return this.AfO.NP();},_Init:function(aArg){C.Amw._Init.call(
this,aArg);this.__proto__=C.AL2;this.AfO=A._NewObject(C.Amw,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amw._Mark.call(this,D);if((B=this.AfO)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Ams={_Init:function(){C.AL2._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARC={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hl(10);},Bl:function(aSize){C.Ua.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.Ua.
Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FS=A.jb.Ad$;var GW=A.jb.Bm;if(this.Hj){FS=A.jb.Bm;GW=A.jb.Text;}if(!Hd
){this.Background.L(FS);this.V.L(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FS);this.V.L(GW);}this.LI=Hd;this.KE=Fu;this.Qp=GE;},_Init:function(
aArg){C.Ua._Init.call(this,aArg);this.__proto__=C.ARC;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.ATU={YO:null,AjO:null,KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.XF];this.Bx.Cl=null;
this.Bx.Cm=null;this.Bx.CV(A.jV);this.Bx.Ct(null);this.Bx.CY(A.aaL(A.ach.V3));}return this.
Bx;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.XR._Init.call(this.
YO={I:this},0);C.VQ._Init.call(this.AjO={I:this},0);this.__proto__=C.ATU;var B;this.
H(J0);this.YO.H(J0);this.YO.T(A.aaR(A.acf.A5z));this.AjO.As(A._GetAutoObject(A.Device.
Device).VQ);this.J(this.YO,0);this.YO.WD(A.aaL(A.fl.Hu));this.YO.WE(A.aaL(A.fl.Hu
));this.YO.As([B=this.AjO,B.B7,B.B8]);this.YO.CI(this.AjO);this.AjO.BlD([B=A._GetAutoObject(
A.Device.Device),B.ASh,B.AZZ]);},_Done:function(){this.__proto__=C.OverlayMenu;this.
YO._Done();this.AjO._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){
C.OverlayMenu._ReInit.call(this);this.YO._ReInit();this.AjO._ReInit();this.YO.T(
A.aaR(A.acf.A5z));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjO)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PurchasedAnimalsListOverlayMenu"};C.VQ={Abf:null,DataExportDestinationToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BH(aIndex);},DU:function(A8){return A8;},HK:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Abf)(F=this.Abf
,F[2].call(F[0],E));},BlD:function(E){if(A.aaZ(this.Abf,E))return;if(!!this.Abf)
A.z$([this,this.ApQ],this.Abf,0);this.Abf=E;if(!!this.Abf)A.zX([this,this.ApQ],this.
Abf,0);A.pe([this,this.ApQ],this);},ApQ:function(G){var F;if(!!this.Abf)this.Q=(
F=this.Abf,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.VQ;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Abf)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMQ={
YV:null,Ala:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.
CC=[this,this.XF];this.Bx.Cl=null;this.Bx.Cm=null;this.Bx.CV(A.jV);this.Bx.Ct(null
);this.Bx.CY(A.aaL(A.ach.V3));}return this.Bx;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.XR._Init.call(this.YV={I:this},0);C.AD6._Init.call(this.
Ala={I:this},0);this.__proto__=C.AMQ;var B;this.H(J0);this.YV.H(J0);this.YV.T(A.
aaR(A.acf.Display));this.Ala.As(A._GetAutoObject(A.Device.Device).Aqt);this.J(this.
YV,0);this.YV.WD(A.aaL(A.fl.Hu));this.YV.WE(A.aaL(A.fl.Hu));this.YV.As([B=this.Ala
,B.B7,B.B8]);this.YV.CI(this.Ala);this.Ala.BmI([B=A._GetAutoObject(A.Device.Device
),B.AEt,B.AIK]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YV._Done();
this.Ala._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YV._ReInit();this.Ala._ReInit();this.YV.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ala)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.AD6={AbS:null,ListViewScopeToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BH(aIndex);},DU:function(A8){return A8;},HK:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AbS)(F=this.AbS,F[2].call(
F[0],E));},BmI:function(E){if(A.aaZ(this.AbS,E))return;if(!!this.AbS)A.z$([this,
this.ApQ],this.AbS,0);this.AbS=E;if(!!this.AbS)A.zX([this,this.ApQ],this.AbS,0);
A.pe([this,this.ApQ],this);},ApQ:function(G){var F;if(!!this.AbS)this.Q=(F=this.
AbS,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.AD6;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AbS)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AU2={ACa:0,AB$:0,Ai:function(Ae){C.OU.Ai.call(this
,Ae);this.Background.L(this.AB$);this.V.L(this.ACa);},Blx:function(E){if(this.ACa===
E)return;this.ACa=E;this.Am();},Blw:function(E){if(this.AB$===E)return;this.AB$=
E;this.Am();},_Init:function(aArg){C.OU._Init.call(this,aArg);this.__proto__=C.AU2;
this.Ar(false);this.ACa=A.jb.Text;this.AB$=A.jb.CK;},_className:"Application::TextCaptionItem"
};C.AHe={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BdK],[B=A._GetAutoObject(A.Device.Device),B.A8D,B.BaX],0);A.pe([this,this.BdK
],this);},Dn:function(){return 3;},F$:function(aIndex){return this.WeightValuePrecisionToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwP(E);},BdK:function(G){this.Q=A._GetAutoObject(A.Device.Device).OJ;A.abo([
this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AHe;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightValuePrecisionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.AUu={UD:null,A$i:A.jV,Init:function(
aArg){},Bl:function(aSize){C.BW.Bl.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.UD.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BW.Ai.call(this,Ae);this.UD.L(this.V.AQ);},Bna:function(E){if(this.A$i===E
)return;this.A$i=E;this.UD.R(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);C.CH._Init.call(this.UD={I:this},0);this.__proto__=C.AUu;this.H(AcR);this.UD.H(
BtS);this.J(this.UD,0);this.UD.S(A.aaL(A.fl.Af));this.UD.A2(A.aaL(A.fl.Ak));this.
UD.Cv(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.UD._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.UD._ReInit(
);this.UD.S(A.aaL(A.fl.Af));this.UD.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BW._Mark.call(this,D);if((B=this.UD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.Y$={MassDeregistrationCriterionToString:
null,Dn:function(){return 2;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BH(this.C4(aIndex));},_Init:function(
aArg){C.Cn._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y$;this.
Cb.Set(0,0);this.Cb.Set(1,1);},_Done:function(){this.__proto__=C.Cn;this.MassDeregistrationCriterionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANJ={Vj:null
,Y$:null,Zb:null,Ms:null,At6:0,Init:function(aArg){this.Bb(this.Zb);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBN=((A.aaR(A.acf.AqB)+A.aaR(A.acf.Colon))+CQ)+this.
At6.toFixed();this.Ms.Bna(BBN);},CD:function(G){C.Ei.CD.call(this,G);A.zX([this,
this.ALl],this.Ms.Q,0);A.pe([this,this.ALl],this);},E6:function(G){C.Ei.E6.call(
this,G);A.z$([this,this.ALl],this.Ms.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Ms)&&!this.At6)this.N.HS.Ds(100);else this.N.HS.Ds(255);},Bev:
function(G){if(this.At6>0)A._GetAutoObject(A.Device.Device).A7(108,true,this.At6.
toFixed(),0,[this,this.Bz1]);},ALl:function(G){var F;this.At6=A._GetAutoObject(A.
Device.Helper).BiC((F=this.Ms.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MH],
this);},Bep:function(G){var B;if(!A._GetAutoObject(A.Device.Device).An.B$()){A._GetAutoObject(
A.Device.Device).A7(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Arj()===false){this.Vj=[this,this.Bep];A.zX([this,this.XH],[B=A._GetAutoObject(
A.Device.Device),B.Wy,B.Xh],0);A._GetAutoObject(A.Device.Device).A7(74,true,A.jV
,0,[this,this.Agf]);return;}A.zX([this,this.AiS],[B=A._GetAutoObject(A.Device.Device
).FQ,B.Q1,B.EW],0);A._GetAutoObject(A.Device.Device).AnS(1);},Agf:function(G){var
B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.Wy,B.Xh],0);this.
Vj=null;}},XH:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhS===3){A.
_GetAutoObject(A.Device.Device).A7(74,false,A.jV,0,[this,this.Agf]);A.z$([this,this.
XH],[B=A._GetAutoObject(A.Device.Device),B.Wy,B.Xh],0);if(!!this.Vj)A.pe(this.Vj
,this);this.Vj=null;}},Bz1:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBI],this);},BBI:function(
G){A._GetAutoObject(A.Device.Helper).BxY(this.Y$.Q);A._GetAutoObject(A.Device.Device
).A7(109,true,this.At6.toFixed(),0,null);A.pe([this,this.MH],this);A.pe([this,this.
ALl],this);},AiS:function(G){var B;switch(A._GetAutoObject(A.Device.Device).FQ.EY
){case 0:A.z$([this,this.AiS],[B=A._GetAutoObject(A.Device.Device).FQ,B.Q1,B.EW]
,0);break;case 3:{A._GetAutoObject(A.Device.Device).AqF();A._GetAutoObject(A.Device.
Device).FQ.EX();}break;case 4:{A._GetAutoObject(A.Device.Device).A7(88,true,A.jV
,0,null);A._GetAutoObject(A.Device.Device).FQ.EX();}break;default:;}},_Init:function(
aArg){C.Ei._Init.call(this,aArg);C.Y$._Init.call(this.Y$={I:this},0);C.Cp._Init.
call(this.Zb={I:this},0);C.AUu._Init.call(this.Ms={I:this},0);this.__proto__=C.ANJ;
var B;this.Dr(C.AOX);this.Zb.H(IT);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.A6b));
this.Zb.Bh(false);this.Ms.H(BtT);this.Ms.Aj(true);this.Ms.T(A.aaR(A.acf.A$y));this.
Ms.Bh(true);this.Ms.A_i(A.aaR(A.acf.Ok));this.J(this.Zb,0);this.J(this.Ms,0);this.
Zb.AR=[this,this.Bep];this.Ms.AR=[this,this.Bev];this.Ms.AeU([this,this.Bev]);this.
Ms.As([B=this.Y$,B.B7,B.B8]);this.Ms.CI(this.Y$);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ei;this.Y$._Done();this.Zb._Done();this.Ms._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y$._ReInit();this.Zb.
_ReInit();this.Ms._ReInit();this.Zb.T(A.aaR(A.acf.A6b));this.Ms.T(A.aaR(A.acf.A$y
));this.Ms.A_i(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ei._Mark.call(this,D
);if((B=this.Vj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ms)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOX={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOX;this.
Text.R(A.aaR(A.acf.AdT));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdT));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANM={
Vj:null,Za:null,AbX:null,Init:function(aArg){this.Bb(this.Za);A.pe([this,this.MH
],this);},Beo:function(G){var B;var Az3=A._GetAutoObject(A.Device.Device).ADS();
switch(Az3){case 1:A._GetAutoObject(A.Device.Device).A7(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A7(91,true,U0,0,[this,this.BeI]);break;
case 2:{this.Vj=[this,this.Beo];A.zX([this,this.XH],[B=A._GetAutoObject(A.Device.
Device),B.Wy,B.Xh],0);A._GetAutoObject(A.Device.Device).A7(74,true,A.jV,0,[this,
this.Agf]);}break;default:throw new Error(Ban+Az3.toFixed());}},Agf:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.Wy,B.Xh],0);this.
Vj=null;}},XH:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhS===3){A.
_GetAutoObject(A.Device.Device).A7(74,false,A.jV,0,[this,this.Agf]);A.z$([this,this.
XH],[B=A._GetAutoObject(A.Device.Device),B.Wy,B.Xh],0);if(!!this.Vj)A.pe(this.Vj
,this);this.Vj=null;}},BeK:function(G){var B;var Az3=A._GetAutoObject(A.Device.Device
).ADT();switch(Az3){case 1:A._GetAutoObject(A.Device.Device).A7(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A7(95,true,A.jV,0,[this,this.Bz2
]);break;case 2:{this.Vj=[this,this.BeK];A.zX([this,this.XH],[B=A._GetAutoObject(
A.Device.Device),B.Wy,B.Xh],0);A._GetAutoObject(A.Device.Device).A7(74,true,A.jV
,0,[this,this.Agf]);}break;case 3:A._GetAutoObject(A.Device.Device).A7(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A7(93,true,A.jV,0,null
);break;default:throw new Error(Ban+Az3.toFixed());}},BeI:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.ByB],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
ByD],this);break;default:throw new Error(BtU+At.Id.toFixed());}},ByB:function(G){
if(A._GetAutoObject(A.Device.Device).ACj()){var A2L=A._GetAutoObject(A.Device.Device
).An.QG();A._GetAutoObject(A.Device.Device).A7(80,true,A2L.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A7(82,true,A.jV,0,null);A.aaS([this,this.BzX],
this);},ByD:function(G){if(A._GetAutoObject(A.Device.Device).AGm()){var A2L=A._GetAutoObject(
A.Device.Device).An.QG();A._GetAutoObject(A.Device.Device).A7(81,true,A2L.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A7(83,true,A.jV,0,null);A.aaS([
this,this.BAA],this);},Bz2:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBJ],this);},BBJ:function(
G){A._GetAutoObject(A.Device.Device).A7(92,true,U0,0,[this,this.BeI]);},BAA:function(
G){A._GetAutoObject(A.Device.Device).A7(92,false,A.jV,0,null);},BzX:function(G){
A._GetAutoObject(A.Device.Device).A7(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Cp._Init.call(this.Za={I:this},0);C.Cp._Init.call(
this.AbX={I:this},0);this.__proto__=C.ANM;this.Dr(C.AO0);this.Za.H(IT);this.Za.Aj(
true);this.Za.T(A.aaR(A.acf.ACj));this.Za.Bh(false);this.AbX.H(P9);this.AbX.Aj(true
);this.AbX.T(A.aaR(A.acf.AGm));this.AbX.Bh(true);this.J(this.Za,-1);this.J(this.
AbX,-1);this.Za.AR=[this,this.Beo];this.AbX.AR=[this,this.BeK];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Za._Done();this.AbX._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Za._ReInit();this.AbX.
_ReInit();this.Za.T(A.aaR(A.acf.ACj));this.AbX.T(A.aaR(A.acf.AGm));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vj)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO0={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO0;this.Text.R(
A.aaR(A.acf.ACp));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACp));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.RN={NW:null
,AT0:0,ADV:false,ADR:false,ADW:false,Al4:function(G){this.A5R(this);},AS7:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DP.AutoActions=E;A.zV([
this,this.BBr],this.NW,0);},AL3:function(){this.AL6(A.aaR(A.acf.A$G),[this,this.
BBZ],[this,this.A8x,this.AFd]);this.AL6(A.aaR(A.acf.AGb),[this,this.BBX],[this,this.
A8u,this.AFb]);this.AL6(A.aaR(A.acf.An2),[this,this.BBY],[this,this.A8v,this.AFc
]);A._GetAutoObject(C.BS).FX();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BnH)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FX();},AL6:function(Bwq,BxB,BwV){if(!this.NW
)return;this.AL5(Bwq,BxB,BwV);},BBZ:function(G){this.AFd(!this.ADW);},BBX:function(
G){this.AFb(!this.ADR);},BBY:function(G){this.AFc(!this.ADV);},A3Y:function(ED,BwU
){if(!this.NW)return;if(BwU)this.NW.BgH(ED);else this.NW.Bn0(ED);this.NW.Cg();},
A4D:function(Aih,Aii,BxT){A._GetAutoObject(C.BS).ABD(Aih,Aii,[this,this.A8N,this.
ATh],BxT);},AGy:function(ED){if(!this.NW)return;this.NW.AGy(ED);this.NW.Cg();},AFd:
function(E){if(this.ADW===E)return;this.ADW=E;this.A3Y(256,E);A.abo([this,this.A8x
,this.AFd],0);},AFb:function(E){if(this.ADR===E)return;this.ADR=E;this.A3Y(2,E);
A.abo([this,this.A8u,this.AFb],0);},AFc:function(E){if(this.ADV===E)return;this.
ADV=E;this.A3Y(1,E);A.abo([this,this.A8v,this.AFc],0);},BBr:function(G){this.AFd(
this.NW.Contains(256));this.AFb(this.NW.Contains(2));this.AFc(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATh(this.NW.OC(this.NW.NP()-1));},ATh:function(E){if(this.
AT0===E)return;this.AT0=E;A.abo([this,this.A8N,this.ATh],0);},A8x:function(){return this.
ADW;},A8u:function(){return this.ADR;},A8v:function(){return this.ADV;},A8N:function(
){return this.AT0;},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=
C.RN;},_Mark:function(D){var B;C.GZ._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvT={Q:null,Cg:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADP:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kd:function(G){var F;if(!!this.Q)this.EU((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,
0);if(!!E)A.pe([this,this.Kd],this);},AGy:function(ED){if(this.NP()>0)this.Axt(this.
NP()-1,ED);},BgH:function(ED){if(this.Contains(ED))return;if(this.CB>=17){A.ab5(
"%s",AH7);return;}var AzW=0;for(;(AzW<=this.NP())&&(this.OC(AzW)<ED);AzW++);var AA9=
this.NP()-1;this.J(this.OC(AA9));for(;AA9>AzW;AA9--)this.Axt(AA9,this.OC(AA9-1));
this.Axt(AzW,ED);},Bn0:function(ED){var index=this.DU(ED);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axt(index,this.OC(index+1));this.Axt(index,0);this.
CB--;},_Init:function(aArg){C.Vw._Init.call(this,aArg);this.__proto__=C.AvT;},_Mark:
function(D){var B;C.Vw._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Av3={_Init:
function(){C.AvT._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8H,B.Ba1]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av4={_Init:function(){C.AvT._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8I,B.Ba2]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Ax1={_Init:function(){C.AvT._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A9d,B.Bbe]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADl={QQ:null,Aj0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QQ={I:this},0);A.acg.Ap._Init.
call(this.Aj0={I:this},0);this.__proto__=C.ADl;this.Er.H(BtV);this.DS.H(BtW);this.
QQ.H(BtX);this.QQ.R(A.aaR(A.acf.Ug));this.QQ.A6(0x11);this.QQ.L(A.jb.Text);this.
Aj0.H(AZR);this.Aj0.L(A.jb.Text);this.J(this.QQ,0);this.J(this.Aj0,0);this.QQ.S(
A.aaL(A.fl.Af));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.Cv(A.aaL(A.fl.Bi));this.Aj0.Aw(
A.aaL(A.ach.Avv));},_Done:function(){this.__proto__=C.Dc;this.QQ._Done();this.Aj0.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QQ._ReInit();this.Aj0._ReInit();this.QQ.R(A.aaR(A.acf.Ug));this.QQ.S(A.aaL(A.fl.
Af));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB4={AP:null,SV:null,OV:null,AKp:A.jV,BdT:A.jV,Mf:0,Init:function(aArg){},Bl:
function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OV.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OV.M[2]-1,0,this.OV.M[2]+1,
aSize[1]]);this.SV.H([this.OV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OV.L(this.V.AQ);this.SV.L(this.V.AQ);this.T(this.AKp);this.
OV.R(this.BdT);this.SV.R(this.Mf.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){var Ka=this.AX.KN(Ad,26);var A2D=A._GetAutoObject(A.Device.
Converter).Rh(Ka);this.AKp=A.abV(A2D,A2D.length-5);this.BdT=A.ab2(A2D,5);if((A._GetAutoObject(
A.Device.Converter).Z3(Ka)===10)&&!(Math.trunc(Ka/10000000000)%100))this.AKp=A.ab1(
this.AKp,3,2);this.Mf=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SV={
I:this},0);C.CH._Init.call(this.OV={I:this},0);this.__proto__=C.AB4;this.V.H(BtY
);this.AP.H(AZU);this.AP.L(A.jb.Bc);this.SV.H(AZV);this.OV.H(BtZ);this.J(this.AP
,0);this.J(this.SV,0);this.J(this.OV,0);this.V.S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(
A.fl.Bi));this.SV.S(A.aaL(A.fl.Ak));this.SV.A2(A.aaL(A.fl.Bi));this.SV.Cv(A.aaL(
A.fl.Bi));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(A.aaL(A.fl.Bi));this.OV.Cv(A.aaL(
A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SV._Done();this.OV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SV._ReInit();this.OV._ReInit();this.V.
S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(A.fl.Bi));this.SV.S(A.aaL(A.fl.Ak));this.SV.A2(
A.aaL(A.fl.Bi));this.SV.Cv(A.aaL(A.fl.Bi));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(
A.aaL(A.fl.Bi));this.OV.Cv(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APq={Q:null,Init:function(aArg){var
B;this.AAY(this);this.As([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEG:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Ni(FilterCriterion);var Ai8=this.Awd();if((Ai8.length>0)&&(Ai8!==U0)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai8,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},AAY:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.AS0(A.jV);return;}var AyW=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!AyW){this.AW.AS0(U0);this.AW.
AeX(true);}else this.AW.AS0(AyW.A4);},_Init:function(aArg){C.AjW._Init.call(this
,aArg);this.__proto__=C.APq;this.AW.AwI(0);this.AW.Bmu(true);this.AW.Di=[this,this.
AEG];this.Init(aArg);},_Mark:function(D){var B;C.AjW._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVf={FA:null,C_:null,Dk:null,EL:null,AsP:null,Init:function(aArg){var B;A.zX([
this,this.BeS],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0e],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Uj,B.U3],0);A.pe([this,this.BeS],this);A.pe([
this,this.Adu],this);},BeS:function(G){var AaR=false;switch(A._GetAutoObject(A.Device.
Device).An7){case 0:AaR=false;break;case 3:AaR=true;break;default:throw new Error(
Bt0+A._GetAutoObject(A.Device.Device).An7.toFixed());}A._GetAutoObject(A.Device.
Helper).JW(this.C_,AaR);A._GetAutoObject(A.Device.Helper).JW(this.Dk,AaR);A._GetAutoObject(
A.Device.Helper).JW(this.EL,AaR);},Adu:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dk.Q,CA[1].call(CA[0])))>12)(CA=this.Dk.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cd._Init.call(this
,aArg);C.BW._Init.call(this.FA={I:this},0);C.Iq._Init.call(this.C_={I:this},0);C.
Iq._Init.call(this.Dk={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.AVe._Init.
call(this.AsP={I:this},0);this.__proto__=C.AVf;var B;this.I_(A.aaR(A.acf.UnlinkTransponder
));this.FA.H(UZ);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqm));this.
FA.Bh(true);this.C_.H(Alj);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqH));this.C_.Bh(false);this.C_.Gc(2);this.C_.EV(6);this.C_.IO(A.aaR(A.acf.OA));
this.C_.I$(A.aaR(A.acf.Ey));this.Dk.H(AcS);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.
Zq));this.Dk.Bh(true);this.Dk.Gc(0);this.Dk.EV(12);this.Dk.IO(A.aaR(A.acf.OA));this.
Dk.I$(A.aaR(A.acf.Ey));this.EL.H(Aow);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bh(false);this.EL.Ar4(A.aaR(A.acf.Aqo));this.J(this.FA,0);this.J(this.C_,0);this.
J(this.Dk,0);this.J(this.EL,0);this.FA.As([B=this.AsP,B.B7,B.B8]);this.FA.CI(this.
AsP);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.Dk.As([B=A.
_GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.EL.DB(A.aaL(A.ach.Aj1));this.EL.
OL([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.EL.PO([B=A._GetAutoObject(
A.Device.Device),B.Uj,B.U3]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.FA._Done();this.C_._Done();this.Dk._Done();this.EL._Done();this.AsP._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.FA._ReInit(
);this.C_._ReInit();this.Dk._ReInit();this.EL._ReInit();this.AsP._ReInit();this.
I_(A.aaR(A.acf.UnlinkTransponder));this.FA.T(A.aaR(A.acf.Aqm));this.C_.T(A.aaR(A.
acf.AqH));this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dk.T(A.aaR(
A.acf.Zq));this.Dk.IO(A.aaR(A.acf.OA));this.Dk.I$(A.aaR(A.acf.Ey));this.EL.Ar4(A.
aaR(A.acf.Aqo));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.FA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVe={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgi],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0e],0);A.pe([
this,this.Bgi],this);},Dn:function(){return 2;},F$:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw_(E);},Bgi:function(G){this.Q=A._GetAutoObject(A.Device.Device).An7;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVe;this.Cb.Set(0,0);this.Cb.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMD.__proto__=A.Core.Root;C.AB.__proto__=C.Abl;C.WM.__proto__=
A.Core.P;C.Ow.__proto__=A.Core.P;C.ZE.__proto__=A.acl.Gm;C.Ej.__proto__=A.Core.P;
C.X5.__proto__=C.AB;C.AUH.__proto__=C.AB;C.Avt.__proto__=C.AB;C.Q_.__proto__=C.AB;
C.Fm.__proto__=C.Hg;C.Ay.__proto__=A.Core.P;C.Cd.__proto__=C.AB;C.Aq4.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADd.__proto__=C.Am0;C.AGQ.
__proto__=C.DR;C.Cp.__proto__=C.OU;C.Du.__proto__=C.Eg;C.Iq.__proto__=C.Du;C.BW.
__proto__=C.Du;C.SQ.__proto__=C.Du;C.OH.__proto__=C.Cn;C.Rd.__proto__=C.AC;C.AUW.
__proto__=C.Ba;C.Ge.__proto__=A.Core.P;C.Ba.__proto__=C.Cp;C.GZ.__proto__=C.AB;C.
AB3.__proto__=C.Ba;C.Ad9.__proto__=C.AB;C.Mk.__proto__=C.Ow;C.AUR.__proto__=C.AB;
C.Aq3.__proto__=C.ADd;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUx.__proto__=C.Acs;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asv.__proto__=A.Core.P;C.AGC.__proto__=C.Du;C.CH.__proto__=A.Core.P;C.
AjV.__proto__=C.Yx;C.Amv.__proto__=C.Rc;C.Ahy.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATK.__proto__=C.AB;C.Mn.__proto__=C.Cp;C.Ank.__proto__=C.Cp;C.OverlayMenu.
__proto__=C.Abl;C.APG.__proto__=C.OverlayMenu;C.GJ.__proto__=A.Core.P;C.Abl.__proto__=
A.Core.P;C.AUC.__proto__=A.acl.Ael;C.Am0.__proto__=C.BR;C.ADe.__proto__=C.Am0;C.
Kj.__proto__=C.AC;C.AUz.__proto__=C.Du;C.AGc.__proto__=C.AB;C.H0.__proto__=C.AB;
C.Wt.__proto__=C.Arv;C.II.__proto__=C.ADe;C.I2.__proto__=C.AB;C.AMb.__proto__=C.
AGc;C.AL9.__proto__=C.GZ;C.ANr.__proto__=C.GZ;C.Aep.__proto__=C.Cp;C.QA.__proto__=
C.Aep;C.APt.__proto__=C.BR;C.AjW.__proto__=C.BR;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Gf.__proto__=C.AC;C.Afl.__proto__=C.BW;C.AT1.__proto__=C.AB;C.AbY.__proto__=
C.Cp;C.Ua.__proto__=C.Cp;C.AND.__proto__=C.Cd;C.AUY.__proto__=C.Cd;C.ANQ.__proto__=
C.Cd;C.AUb.__proto__=C.Cd;C.W1.__proto__=A.Core.P;C.QT.__proto__=C.Fm;C.D2.__proto__=
A.Core.P;C.T8.__proto__=C.AB;C.AVw.__proto__=C.GZ;C.AMc.__proto__=C.AxZ;C.AVh.__proto__=
C.Cd;C.AeN.__proto__=C.AC;C.AxZ.__proto__=C.AB;C.AVF.__proto__=C.Cd;C.AUy.__proto__=
C.Acs;C.ABz.__proto__=A.Graphics.Hz;C.Aqi.__proto__=C.AB;C.ARt.__proto__=A.Core.
P;C.Fq.__proto__=C.OverlayMenu;C.XR.__proto__=C.BW;C.Ajn.__proto__=C.Cp;C.ALV.__proto__=
C.Fq;C.Cn.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL0.__proto__=C.Vw;C.AL1.
__proto__=C.Fq;C.Sg.__proto__=C.Ua;C.AMI.__proto__=C.Vw;C.Wl.__proto__=C.Fm;C.Vt.
__proto__=A.Core.P;C.Ku.__proto__=A.Core.P;C.ARR.__proto__=C.H0;C.AT4.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cn;C.ANs.__proto__=C.Amv;C.Hg.__proto__=A.
Core.P;C.AVy.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cn;C.Aa5.
__proto__=C.Gf;C.AxR.__proto__=C.ABz;C.ATF.__proto__=C.OverlayMenu;C.AOx.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATG.__proto__=A.Core.P;C.AUB.__proto__=A.acl.
Ael;C.AkX.__proto__=C.Iq;C.Amx.__proto__=C.OverlayMenu;C.AB6.__proto__=C.Ba;C.Yy.
__proto__=C.AjW;C.AqL.__proto__=C.H0;C.Acr.__proto__=C.Du;C.WeightRecordingScope.
__proto__=C.AC;C.AuF.__proto__=C.AB;C.AUA.__proto__=C.Iq;C.AL$.__proto__=C.AB;C.
Arv.__proto__=C.H0;C.AG$.__proto__=A.Core.P;C.AVB.__proto__=A.Core.P;C.Eg.__proto__=
C.Cp;C.AeP.__proto__=C.Eg;C.AvY.__proto__=C.AeP;C.SetTransponderScreen.__proto__=
C.Q_;C.ADm.__proto__=C.EA;C.AHd.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mg.__proto__=C.Q_;C.ALT.__proto__=C.Mg;C.ManualActionScanScreen.__proto__=C.Mg;
C.ALU.__proto__=A.Core.P;C.APx.__proto__=C.Dc;C.ADk.__proto__=C.Dc;C.TW.__proto__=
C.Dc;C.APz.__proto__=C.Dc;C.AM8.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AM6.__proto__=
C.Ba;C.Jq.__proto__=A.Core.P;C.AM5.__proto__=C.Ba;C.AmZ.__proto__=C.TF;C.AF4.__proto__=
C.Axi;C.AkL.__proto__=C.Axi;C.ZD.__proto__=C.AkL;C.ANz.__proto__=C.OU;C.OU.__proto__=
C.Hg;C.APC.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AM2.__proto__=C.AjF;C.ADg.__proto__=
C.TX;C.Ki.__proto__=A.Core.P;C.AmH.__proto__=C.Mn;C.AOU.__proto__=C.Kn;C.AutoRegistrationMode.
__proto__=C.AC;C.APD.__proto__=C.EA;C.Tz.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMn.__proto__=C.R0;C.AMB.__proto__=C.Aa1;C.AMw.__proto__=C.Aa1;C.AT3.__proto__=
C.Ba;C.APB.__proto__=C.EA;C.AMq.__proto__=C.Aa1;C.IE.__proto__=C.I1;C.RT.__proto__=
C.Fx;C.RY.__proto__=C.Fx;C.Ty.__proto__=C.JH;C.Qz.__proto__=C.Fx;C.Tx.__proto__=
C.JH;C.AL_.__proto__=C.Aqi;C.AQS.__proto__=C.Cd;C.Aa1.__proto__=C.D9;C.Kh.__proto__=
C.Cn;C.ARp.__proto__=C.Cd;C.AMl.__proto__=C.K_;C.AMm.__proto__=C.D9;C.AMj.__proto__=
C.K_;C.AMk.__proto__=C.K_;C.WO.__proto__=C.Eg;C.AUv.__proto__=C.WO;C.RZ.__proto__=
C.Fx;C.APs.__proto__=C.II;C.ANt.__proto__=C.AB;C.ANa.__proto__=C.Ad9;C.AL8.__proto__=
C.I2;C.AVv.__proto__=C.I2;C.AOW.__proto__=C.Kn;C.APu.__proto__=C.Kn;C.APy.__proto__=
C.TX;C.AM7.__proto__=C.AjF;C.TX.__proto__=C.Dc;C.Aqw.__proto__=A.acv.ACe;C.AjF.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMT.__proto__=C.DR;C.OZ.__proto__=C.DR;C.Aq1.__proto__=
A.Core.P;C.AMs.__proto__=C.Ge;C.AT7.__proto__=A.Core.P;C.K_.__proto__=C.D9;C.ANA.
__proto__=C.Cd;C.Au3.__proto__=C.Cp;C.ADa.__proto__=C.BR;C.ADb.__proto__=C.BR;C.
Fx.__proto__=C.JH;C.AOA.__proto__=C.GZ;C.AOz.__proto__=C.I2;C.AO_.__proto__=C.Kn;
C.ADi.__proto__=C.Dc;C.AB2.__proto__=C.Ba;C.AT2.__proto__=C.Ahy;C.FactoryResetScope.
__proto__=C.Cn;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.AR3.
__proto__=C.RN;C.AR2.__proto__=C.I2;C.ADc.__proto__=C.Kn;C.ABL.__proto__=C.Gf;C.
ALY.__proto__=C.Fq;C.AMa.__proto__=C.AuF;C.NewAnimalSetTransponderScreen.__proto__=
C.AsA;C.C7.__proto__=C.AC;C.OY.__proto__=A.Core.P;C.RU.__proto__=C.Fx;C.RW.__proto__=
C.Fx;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARA.__proto__=C.OverlayMenu;
C.VP.__proto__=C.Ua;C.AvX.__proto__=C.Cp;C.AnimalSingleInfoScreen.__proto__=C.Tz;
C.AnimalMultiInfoScreen.__proto__=C.Tz;C.AMp.__proto__=C.OverlayMenu;C.I7.__proto__=
A.Core.P;C.ALX.__proto__=C.GZ;C.ALW.__proto__=C.I2;C.APr.__proto__=C.II;C.AsK.__proto__=
C.OY;C.Are.__proto__=C.OY;C.AuZ.__proto__=C.AC;C.AMh.__proto__=C.AC;C.AGB.__proto__=
C.Eg;C.G3.__proto__=A.Core.P;C.AQV.__proto__=C.HL;C.AVm.__proto__=C.X5;C.ARN.__proto__=
C.Wt;C.ADL.__proto__=C.Lf;C.HL.__proto__=C.G3;C.Lf.__proto__=C.G3;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvN.__proto__=C.HL;C.AUt.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsA;C.ReasonOfLeaving.__proto__=C.AC;C.OR.__proto__=C.BW;C.AeS.__proto__=
C.Ek;C.ARG.__proto__=C.Ek;C.ARF.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q$.__proto__=
C.Eg;C.AQW.__proto__=C.Lf;C.AvM.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fz.
__proto__=C.AB;C.AN_.__proto__=C.AB;C.AOb.__proto__=C.Fz;C.AOc.__proto__=C.Fz;C.
AqO.__proto__=C.Fz;C.Abx.__proto__=C.AjV;C.Kn.__proto__=C.AjV;C.Avr.__proto__=C.
Abx;C.AO8.__proto__=C.Abx;C.AO7.__proto__=C.Abx;C.AO6.__proto__=C.BR;C.Aew.__proto__=
C.EA;C.AmP.__proto__=C.Ba;C.Aju.__proto__=C.IE;C.ACE.__proto__=A.Core.P;C.AkU.__proto__=
A.Core.P;C.Rc.__proto__=C.AB;C.AUX.__proto__=C.Rc;C.AO9.__proto__=C.BR;C.Dc.__proto__=
C.EA;C.KO.__proto__=C.BR;C.AO2.__proto__=C.KO;C.AO4.__proto__=C.KO;C.Ys.__proto__=
C.AmP;C.Agw.__proto__=C.Hg;C.ANX.__proto__=C.GZ;C.ANW.__proto__=C.I2;C.AO5.__proto__=
C.Kn;C.Abs.__proto__=C.Acr;C.AjM.__proto__=C.QA;C.ABW.__proto__=C.QA;C.APw.__proto__=
C.Dc;C.AM4.__proto__=C.Ba;C.RX.__proto__=C.Fx;C.AMi.__proto__=C.Fx;C.ANO.__proto__=
C.Ei;C.ANP.__proto__=C.Ei;C.AO3.__proto__=C.KO;C.Nb.__proto__=C.AbY;C.ANK.__proto__=
C.Ei;C.AOY.__proto__=C.KO;C.PL.__proto__=C.Cp;C.Sh.__proto__=C.AB;C.AN$.__proto__=
C.Sh;C.AOa.__proto__=C.Sh;C.AOd.__proto__=C.AqO;C.AN8.__proto__=C.Fz;C.Aa0.__proto__=
C.IE;C.Pj.__proto__=C.IE;C.AMu.__proto__=C.Amx;C.ARn.__proto__=C.T8;C.ARm.__proto__=
C.T8;C.ARY.__proto__=C.RN;C.ARX.__proto__=C.I2;C.APl.__proto__=C.Kn;C.Q6.__proto__=
C.GZ;C.AUc.__proto__=C.I2;C.Aet.__proto__=C.Yx;C.AB1.__proto__=C.Ba;C.ADh.__proto__=
C.Dc;C.APn.__proto__=C.BR;C.Aa3.__proto__=C.NE;C.XY.__proto__=C.NE;C.R0.__proto__=
C.D9;C.XZ.__proto__=C.R0;C.XW.__proto__=C.ID;C.AaY.__proto__=C.ID;C.XV.__proto__=
C.ID;C.AaX.__proto__=C.ID;C.AMr.__proto__=C.AB;C.ID.__proto__=C.I1;C.I1.__proto__=
C.Hg;C.NE.__proto__=C.Fx;C.Axh.__proto__=C.ZD;C.ANy.__proto__=C.AmH;C.Axj.__proto__=
C.ZD;C.ATS.__proto__=C.Cd;C.ATQ.__proto__=C.Ek;C.AQT.__proto__=C.Lf;C.ATR.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARO.__proto__=C.H0;C.AMt.__proto__=C.Amx;C.AMJ.__proto__=
C.Vw;C.JH.__proto__=C.I1;C.APp.__proto__=C.Yy;C.Abr.__proto__=C.Cn;C.APA.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Mg;C.APo.__proto__=C.Aq3;C.Je.__proto__=A.Core.
P;C.APk.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Q_;C.ANY.__proto__=C.AqL;
C.UP.__proto__=C.Cn;C.UQ.__proto__=C.UP;C.AcO.__proto__=C.UP;C.AdU.__proto__=C.AC;
C.AGA.__proto__=C.Eg;C.ANN.__proto__=C.Ei;C.AO1.__proto__=C.KO;C.ANL.__proto__=C.
Ei;C.AOZ.__proto__=C.KO;C.Aq5.__proto__=C.TW;C.APv.__proto__=C.TW;C.Aqx.__proto__=
C.M1;C.AM3.__proto__=C.M1;C.ARH.__proto__=C.AeS;C.Yx.__proto__=C.BR;C.Acs.__proto__=
C.BW;C.FH.__proto__=C.AC;C.AMx.__proto__=C.FH;C.AMy.__proto__=C.FH;C.AMe.__proto__=
C.I2;C.TF.__proto__=C.BW;C.ARQ.__proto__=C.AB;C.AsA.__proto__=C.SetTransponderScreen;
C.ADM.__proto__=C.HL;C.AsB.__proto__=C.OR;C.Axv.__proto__=C.OR;C.Acv.__proto__=C.
Cn;C.AVL.__proto__=C.RN;C.AVK.__proto__=C.I2;C.AQX.__proto__=A.Core.P;C.AQU.__proto__=
C.HL;C.ACJ.__proto__=C.Abs;C.LX.__proto__=A.Core.P;C.AUa.__proto__=C.Cd;C.AT$.__proto__=
C.Cd;C.AVd.__proto__=C.Cd;C.Afq.__proto__=C.Cn;C.Jb.__proto__=A.acn.Jb;C.AU3.__proto__=
C.AB;C.ATV.__proto__=C.Q6;C.ADj.__proto__=C.Dc;C.AMR.__proto__=C.Q6;C.AOV.__proto__=
C.Aet;C.APm.__proto__=C.Aet;C.AB5.__proto__=C.Ba;C.AUs.__proto__=C.SQ;C.AUw.__proto__=
C.Q$;C.APj.__proto__=C.BR;C.ARy.__proto__=C.Fq;C.ARx.__proto__=C.Fq;C.ARw.__proto__=
C.Fq;C.AL2.__proto__=C.Amw;C.ARC.__proto__=C.Ua;C.ATU.__proto__=C.OverlayMenu;C.
VQ.__proto__=C.AC;C.AMQ.__proto__=C.OverlayMenu;C.AD6.__proto__=C.AC;C.AU2.__proto__=
C.OU;C.AHe.__proto__=C.Cn;C.AUu.__proto__=C.BW;C.Y$.__proto__=C.Cn;C.ANJ.__proto__=
C.Ei;C.AOX.__proto__=C.KO;C.ANM.__proto__=C.Ei;C.AO0.__proto__=C.KO;C.RN.__proto__=
C.GZ;C.AvT.__proto__=C.Vw;C.ADl.__proto__=C.Dc;C.AB4.__proto__=C.Ba;C.APq.__proto__=
C.AjW;C.AVf.__proto__=C.Cd;C.AVe.__proto__=C.Cn;};C._ReInit=function(){var B;if((
B=C.Axz._this))B._ReInit(),C.Axz._ReInit.call(B);if((B=C.AxA._this))B._ReInit(),
C.AxA._ReInit.call(B);if((B=C.A$._this))B._ReInit(),C.A$._ReInit.call(B);if((B=C.
Pi._this))B._ReInit(),C.Pi._ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(
),C.AutoActions._ReInit.call(B);if((B=C.Afh._this))B._ReInit(),C.Afh._ReInit.call(
B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(B);if((B=C.WH._this))B._ReInit(
),C.WH._ReInit.call(B);if((B=C.AsC._this))B._ReInit(),C.AsC._ReInit.call(B);if((
B=C.AnX._this))B._ReInit(),C.AnX._ReInit.call(B);if((B=C.DP._this))B._ReInit(),C.
DP._ReInit.call(B);if((B=C.AuN._this))B._ReInit(),C.AuN._ReInit.call(B);if((B=C.
Ams._this))B._ReInit(),C.Ams._ReInit.call(B);if((B=C.Av3._this))B._ReInit(),C.Av3.
_ReInit.call(B);if((B=C.Av4._this))B._ReInit(),C.Av4._ReInit.call(B);if((B=C.Ax1.
_this))B._ReInit(),C.Ax1._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Axz._this
)&&(B._cycle!=D))B._Done(C.Axz._this=null);if((B=C.AxA._this)&&(B._cycle!=D))B._Done(
C.AxA._this=null);if((B=C.A$._this)&&(B._cycle!=D))B._Done(C.A$._this=null);if((
B=C.Pi._this)&&(B._cycle!=D))B._Done(C.Pi._this=null);if((B=C.AutoActions._this)&&(
B._cycle!=D))B._Done(C.AutoActions._this=null);if((B=C.Afh._this)&&(B._cycle!=D)
)B._Done(C.Afh._this=null);if((B=C.BS._this)&&(B._cycle!=D))B._Done(C.BS._this=null
);if((B=C.WH._this)&&(B._cycle!=D))B._Done(C.WH._this=null);if((B=C.AsC._this)&&(
B._cycle!=D))B._Done(C.AsC._this=null);if((B=C.AnX._this)&&(B._cycle!=D))B._Done(
C.AnX._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(C.DP._this=null);if((
B=C.AuN._this)&&(B._cycle!=D))B._Done(C.AuN._this=null);if((B=C.Ams._this)&&(B._cycle
!=D))B._Done(C.Ams._this=null);if((B=C.Av3._this)&&(B._cycle!=D))B._Done(C.Av3._this=
null);if((B=C.Av4._this)&&(B._cycle!=D))B._Done(C.Av4._this=null);if((B=C.Ax1._this
)&&(B._cycle!=D))B._Done(C.Ax1._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */