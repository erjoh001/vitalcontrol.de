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
var Cd=[0,0,240,320];var BF=[0,0,240,40];var E4=[0,0,20,30];var Hm=[6,21,14,25];var
IQ=[6,15,14,19];var Ip=[6,9,14,13];var O1=[209,7,229,37];var P1=[0,40,240,320];var
P2=[0,228,240,298];var CQ=" ";var E$=[0,40,240,280];var Lu=[0,40,232,280];var P3=[
0,40,116,160];var JY=[114,40,230,160];var N_=[0,160,116,280];var P4=[116,160,232
,280];var MF=[0,280,116,400];var S5=[116,280,232,400];var UO=[0,400,116,520];var
Z5=[116,400,232,520];var W1=[-1,520,115,640];var Iq=[232,40,240,280];var UP=[5,40
,235,120];var Z6=[120,140,210,230];var W2=[20,140,110,230];var Z7=[0,0,116,120];
var W3=[0,0,120,120];var Z8=[0,0,116,45];var Z9=[0,0,8,200];var UQ=[0,0,8,20];var
W4=[30,0,210,40];var P5=[0,0,40,40];var Z_=[7,8,200,40];var O2=[0,0,200,40];var Ri=[
6,1];var W5="ERROR: Invalid value for ItemHighlighting";var W6=[10,10,40,30];var
W7=[0,0,120,40];var W8=[60,0,180,40];var Z$=[120,0,240,40];var W9=[0,0,100,40];var
W_=[83,0,157,40];var S6=[140,0,240,40];var UR=[0,0,20,40];var US=[220,0,240,40];
var AcL=[0,0,300,30];var S7=[0,30,300,60];var Aaa=[0,60,300,90];var Afv=[0,90,300
,120];var Aab=[0,100,300,110];var W$=[0,50,300,60];var Aac=[0,30,300,40];var Aad=
"*";var AhO=[40,40];var JZ=[0,0,240,80];var Aae=[0,0,240,50];var Lv="Cap";var AhP=[
0,40,40,80];var Aob=[200,40,240,80];var N$=[30,40,210,80];var Xa="--";var Aoc="%d";
var AhQ="%m";var AhR="%Y";var AcM=" (";var UT=[0,0,232,80];var Aod="Date";var Aoe=[
48,40,88,78];var Aof=[39,40,79,80];var Aog=[80,44,87,77];var Afw=".";var Ak$=[88
,44,120,77];var AxW=[120,44,127,77];var AxX=[127,44,191,77];var O3=[0,0,80,40];var
Rj="Text";var AxY=[430,102,430,102];var UU=[0,0,240,240];var AsS=[232,0,240,240];
var AxZ=[0,10,240,240];var Ax0="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax1="Unhandled option";
var Aoh=[0,80,240,280];var Afx="Unhandled animal list action";var Aoi="Animal list content not handled.";
var IR=[0,40,240,80];var Aoj="Set Selected";var Xb=" %%";var Aok=[0,180,240,220];
var AsT=[82,127,167,150];var AsU="Group";var AsV=[77,91,167,124];var Aol=[0,0,90
,33];var Aom=[4,4,18,29];var AsW=[20,4,34,29];var Ax2=[36,4,50,29];var Ax3=[52,4
,66,29];var Ax4=[68,4,82,29];var AsX="ERROR: Unhandled Device::SyncState";var Ax5=
":\n";var P6="{1}";var Ax6="{2}";var AVP=[0,49,240,109];var AVQ=[0,170,240,243];
var AVR=[0,110,240,170];var AVS=[20,243,220,268];var AHe=[30,8];var AHf="\u2265 ";
var Afy=[0,0,240,160];var Aon=[0,0,0,0];var AVT=[0,0,240,66];var AHg=[10,0,76,66
];var Ala=[33,33];var AHh=[87,0,153,66];var AHi=[164,0,230,66];var AVU="No statistics available";
var AHj="in this environment.";var AVV=" fps";var AVW="CPU: - %%";var AcN=[0,0,240
,120];var AVX=[130,0,237,20];var AVY=[20,0,120,20];var AHk=[0,20,240,40];var AsY=[
40,20,100,40];var AHl=[100,20,240,40];var AHm=[0,40,240,60];var Ax7=[40,40,100,60
];var AHn=[100,40,240,60];var Ax8=[0,60,50,80];var AVZ=[100,60,240,80];var AV0=[
0,80,50,100];var AV1=[100,80,240,100];var AV2=[0,100,50,120];var AHo=[100,100,240
,120];var AV3=[5,5,15,15];var O4="%H";var Ax9="%M";var AV4="Time";var AV5=[79,40
,119,78];var AV6=[125,40,164,80];var AV7=[86,40,126,80];var AV8=":";var AV9=[75,
40,115,80];var AHp=[0,0,240,150];var AHq=[60,0,155,40];var Aoo=[30,0,65,40];var Ax_=[
60,0,100,40];var AV_=[88,0,128,40];var AV$=[60,0,71,40];var AWa=[60,0,74,40];var
AHr=[90,0,123,40];var AWb=[120,0,161,40];var AHs=[120,0,165,40];var AHt=[60,0,88
,40];var AHu=[60,0,95,40];var AWc="Did not expect iterator bigger than number of records";
var AHv=[20,0,240,20];var AWd=[0,38,240,40];var AHw=[0,0,8,4];var Rk=[0,0,240,280
];var Xc=[0,280,240,320];var AWe="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWf="]";var AWg="ERROR: Cannot find closing bracket \'}\' in text [";var AWh=
"] opened at index ";var AWi="#";var AWj="ERROR: Invalid parameter: {";var AWk="}";
var AhS=[20,20];var AHx=[0,12];var AWl="ERROR: Not expected Application::FooterFocus, ";
var AWm="%M:%S";var AHy=[30,150,207,170];var AHz=[20,70,217,194];var Ax$="Unhandled item.";
var P7=[0,80,240,120];var AWn="Unhandled Overlay Menu ";var AWo="Invalid bootloader message: ";
var AWp="Unknown USBState: ";var AsZ="Invalid fader";var AWq=[2,4,32,40];var AWr=[
29,4,80,40];var AWs=[120,4,200,40];var AWt=[80,0,114,40];var AWu="-1";var AWv="< ";
var As0=[0,0,232,40];var AWw=[22,40,180,80];var AWx=[2,40,22,80];var AWy=[23,40,
163,80];var AWz=[210,40,230,80];var AWA=[164,40,210,80];var AWB=[169,43,205,77];
var AWC="ERROR: No outlet assigned";var AWD="Unhandled screen";var AWE="ERROR: Cannot cache null screen.";
var AWF="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHA="Untreated Rating Method type!";var Alb="Unhandled animal type";var AWG=[
5,60,235,140];var AWH=[0,130,240,196];var AWI=[49,240,229,280];var Aya="Implement in derived classes!";
var Alc="Implement in derived class";var AhT=[0,40,230,120];var Ayb=[0,120,230,200
];var Aop=[0,200,230,280];var AhU=[0,280,230,360];var AWJ=[0,360,230,440];var Ayc=[
230,40,238,280];var AHB="WARNING: Unhandled filter field: ";var Afz="Should not happen.";
var AHC="Invalid Boolean item";var Aaf=[0,120,240,160];var Ald=[0,160,240,200];var
Aoq=[0,200,240,240];var AWK=[1152,11,1392,51];var AWL=[1152,51,1392,91];var AWM=[
1152,91,1392,131];var AWN=[1152,131,1392,171];var AWO=[1152,171,1392,211];var As1=[
0,240,240,280];var AHD=[10,0,240,40];var AHE=[190,0,230,40];var AWP=[60,3,95,39];
var AWQ=[95,4,200,40];var AWR=[3,3];var AWS=[6,6];var AWT=[59,5,197,35];var AWU=[
59,2,200,38];var AWV=[3,2,43,42];var AWW=[0,17,43,40];var AWX=[50,40];var AWY=[50
,0];var AWZ="Illegal shifting direction";var Ayd=[0,0,160,30];var AHF=[0,0,25,30
];var AHG=[27,0,52,30];var AHH=[54,0,79,30];var AHI=[81,0,106,30];var AHJ=[108,0
,133,30];var AHK=[135,0,160,30];var AW0="Internal queue error";var AW1="ERROR: No corresponding Id ";
var AW2=" found.";var AW3="ERROR: Error in range test";var AW4=[120,67,210,157];
var AW5=[0,40,240,70];var AW6=[20,67,110,157];var Aye=[0,160,240,280];var AHL=[20
,77,90,147];var AW7=[0,0,210,40];var AHM=[195,0,235,40];var AhV=[0,40,232,120];var
UV=[0,120,232,200];var AW8=[0,40,232,200];var Aag=[0,200,232,280];var AW9=[0,320
,240,400];var AW_=[0,120,53,200];var Ale=[0,280,232,360];var AfA="%%";var AcO=[0
,360,232,440];var Aor=[0,440,232,520];var AW$=[0,80,207,120];var O5=")";var AHN=
"/";var AHO=[5,0,88,30];var AXa=[88,0,240,30];var AHP="276000312345678";var AHQ=[
5,30,100,60];var AHR=[100,30,240,60];var AXb="Manufacturer";var AXc="Country";var
AXd=[5,60,240,90];var AXe="Niedersachsen";var AXf=[5,90,145,120];var AXg=[140,90
,240,120];var AXh="Protocol";var AXi=[0,0,120,100];var AHS=[0,40,116,120];var AXj=[
40,80,92,107];var AHT=[0,0,50,23];var AHU="ERROR: Unhandled Device::MeasureState";
var Ayf=[0,120,240,280];var AXk=[178,159,248,203];var AXl=[10,145,170,225];var AXm=[
0,61,240,101];var AXn=[0,0,40,23];var AXo=[101,113,141,136];var AHV=[101,235,141
,258];var AXp=[69,288,101,313];var AXq=[0,40,240,200];var As2=[0,200,240,280];var
As3=[0,280,240,360];var AHW="\u2264 ";var AXr=[0,80,94,160];var AXs=[94,80,184,160
];var AXt=[184,80,240,160];var AXu=[197,105,231,139];var AXv=[105,101,173,127];var
AXw=[7,101,75,127];var AXx=[94,125,184,151];var AXy=[2,125,92,151];var AXz=[0,70
,240,101];var AHX=[0,106,240,280];var AXA=[30,40,240,70];var Ayg=[0,40,30,70];var
AHY="\u278B";var AXB=[0,0,240,175];var AXC=[0,0,232,175];var AXD=[232,0,240,175];
var AXE="Text Here !";var AXF=[200,0,240,40];var AHZ="1";var AH0="2";var AH1="3";
var AH2="4";var Ayh=[0,360,232,400];var Ayi="ERROR: invalid item class.";var AH3=[
10,220,250,260];var AXG=[185,0,225,40];var AH4="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXH="ERROR: Received more actions than expected!";var AH5=", ";var AXI=
"ERROR: Cannot set action at position=";var AXJ=". Current elements:";var AXK=", max elements:";
var AXL="17";var AXM=[0,0,58,58];var AXN=[0,0,60,60];var AXO=[30,0,58,20];var AXP=[
7,6,25,24];var AXQ=[30,60,130,160];var AXR=[0,0,28,20];var AXS=[4,3,40,24];var AXT=[
0,0,42,27];var Ayj=[0,0,17,17];var AXU="Unknown direction of counting enum value: ";
var AXV="Unknown id generation method enum value: ";var Ayk="Invalid animal id generation method: ";
var As4="Unhandled popup id";var UW="0";var As5=";";var AXW=[0,400,230,480];var AXX=[
5,120,235,200];var AXY=[0,640,230,760];var AH6=[0,0,300,200];var AXZ=[20,40,220,
80];var AH7=[20,80,220,280];var AX0=[140,0,188,40];var AX1="ERROR: Row containing birth weight could not be loaded";
var AX2=[0,440,230,520];var As6="ID";var AX3=[40,40,198,70];var AX4="Extra info: ";
var AH8=" -";var AX5=[0,0,230,120];var AX6=[0,0,230,40];var AX7=[0,80,230,120];var
AX8="\xB0Brix";var AcP=[0,320,230,400];var AX9=[0,410,230,490];var AX_="ERROR: aNumberOfDays can not be < 0 ";
var AX$="{WEIGHTGAIN} ";var AYa="\xB1";var AH9="+";var AYb="{WEIGHTGAIN}";var AYc=
"{DAYS}";var AYd="ERROR: aString can not be null";var AYe=[166,70,240,114];var AYf=[
0,60,160,120];var AYg=[30,0,240,60];var AH_=[1,6,29,54];var AYh=[30,60,240,120];
var AYi="Con";var AYj=[70,50,170,70];var AH$="Unhandled Device::NaisIdValidationResult: ";
var AIa="Unhandled PopupId";var AYk=[110,123,230,248];var AYl=[5,0,250,40];var AYm=[
102,0,186,40];var AYn=[153,0,240,40];var Rl="-";var As7=[170,0,240,40];var AIb=[
220,0,320,30];var AIc=[200,20,300,50];var Aos=[180,0,180,40];var Aot=[170,0,170,
40];var Ayl="Untreated state";var AYo="ERROR: Animal id scanned in an unexpected state : ";
var AId="ERROR: Null animal id scanned.";var AYp=[40,40,235,100];var AYq=[120,100
,210,190];var AYr=[20,100,110,190];var AYs=[0,40,40,100];var AYt="\u278A";var AYu=
"Action untreated";var AYv="ERROR: No corresponding ";var AYw=" action found!";var
AYx="Unhandled action: ";var AYy=[0,190,240,220];var AYz=[0,220,232,280];var AYA=[
5,190,235,270];var AYB=[232,60];var AYC=[0,2];var AYD=[58,58];var AYE="A";var AYF=[
56,0,156,40];var Aou=[156,0,240,40];var AIe=" 7 ";var AYG=[40,0,156,40];var AIf=
"/-1/-2";var AIg=[72,0,144,40];var Aah="\n";var AIh="(";var AYH=[72,0,156,40];var
AIi="%y/%m";var AYI=[70,0,240,40];var Aym=[70,0,120,40];var AYJ=[160,0,245,40];var
AYK="- ";var Ayn=" - ";var AYL="{parc}{clr3}";var AYM="{clr0}/^{clr2}";var AYN="{clr0}/^{clr1}";
var AIj=[0,0,85,40];var Aov="?";var AIk=[0,0,120,140];var AYO=[0,0,116,40];var AIl=[
15,0,100,40];var Ayo=[110,0,200,40];var Alf=[0,0,34,34];var AIm=[129,0,157,40];var
Aow=[0,0,25,25];var AYP="\u2611";var AIn="\u2610";var AIo=[5,0,72,40];var AYQ=[150
,0,240,40];var AYR=[72,0,139,40];var AIp="Unvalid content class: ";var AYS=[0,320
,240,360];var AYT=[0,360,240,400];var AYU=[144,0,170,40];var AYV=[187,0,213,40];
var AYW=[207,10,233,50];var AYX=[247,20,273,60];var AYY=[140,0,150,100];var AYZ=[
165,0,175,100];var AY0=[185,0,195,100];var AY1=[205,0,215,100];var AY2=[211,0,233
,40];var AY3=[189,0,211,40];var AY4=[167,0,189,40];var Aox=[145,0,167,40];var AIq=[
5,0,240,40];var Aai=[10,0,10,40];var AY5="= \u2211 ";var Ayp=[125,0,240,40];var AY6=[
130,0,170,40];var AY7="\xD8 ";var AY8=[100,10,116,36];var AY9=[117,10,133,36];var
AIr=[135,10,151,36];var As8="Implement in derieved class";var As9=[0,80,240,240];
var As_=[0,120,232,160];var As$=[0,160,232,200];var Ata=[0,200,232,240];var Ayq=[
0,240,232,280];var Aoy=[0,320,232,360];var AY_=[-61,360,232,400];var AY$=[0,400,
32,440];var AZa=[0,100];var AZb=[0,40,240,240];var AZc=[0,50000];var AZd=[0,500];
var AZe=[0,0,240,105];var AZf=[0,105,240,210];var AZg=[0,40,240,81];var AZh=[0,81
,240,122];var AZi=[0,122,240,163];var AIs=[0,163,240,205];var AZj=[0,205,240,240
];var AIt=[0,200];var AZk=[0,40,240,73];var Ayr=[0,0,30,40];var AIu=[0,40,30,80];
var Ays=[60,40];var Ayt=[60,0];var AZl=[10,0,40,40];var AZm=[0,190,240,260];var AZn=[
0,130,240,190];var AIv=[40,40,200,130];var AZo=[90,230,170,253];var AZp=[80,190,
170,223];var AZq=[0,130,240,180];var AZr=[0,250,240,280];var AZs=[129,0,156,40];
var AZt=[72,0,100,40];var AZu=[100,0,129,40];var AZv=[78,8,103,33];var AIw=[0,0,
300,120];var AZw=[1,-1];var AZx=[20,40,240,120];var AZy=[20,0,240,40];var AZz=[0
,118,240,120];var AZA=[0,20,130,40];var AZB=[130,20,240,40];var Bqg=[0,0,10,20];
var A$N="\u2191";var Bqh=[230,0,240,20];var AIx=[0,40,232,80];var Bqi=[0,80,232,
160];var Bqj=[0,160,230,240];var AIy=" p. p.";var AZC="Unknown animal type";var AZD=[
80,0,140,40];var Bqk=[50,0,172,40];var Bql=[172,0,240,40];var Bqm=[0,90,240,92];
var A$O="Unhandled menu item";var A$P=[0,0,50,30];var Atb=[0,0,30,30];var Bqn="No AnimalActionTemperatureScreen found!";
var Bqo="840003123456789";var Bqp=[40,0,230,40];var Bqq=[50,10,230,30];var AZE="No AnimalMultiInfoScreen found!";
var AIz=[0,0,25,40];var A$Q="/^";var A$R="?/?";var Bqr=[100,4,180,40];var Bqs=[65
,0,99,40];var Bqt=[165,0,200,40];var A$S=[0,0,60,40];var A$T="9999/^9999";var Bqu=
"Invalid index: ";var Bqv="Unknown AnimalIdGenerationMethod: ";var Bqw="Invalid gender: ";
var Atc="Invalid input state: ";var Bqx="Unhandled AnimalIdGenerationMethod";var
Bqy=[42,35,67,75];var Bqz=[5,35,39,75];var BqA=[70,40,228,70];var BqB="Invalid direction for setting focus";
var AhW="Invalid index";var BqC="Unvalid direction";var BqD=[0,0,42,30];var A$U=[
22,0,42,30];var BqE=[20,0,40,30];var BqF=[0,0,158,30];var A$V=[32,0,62,30];var A$W=[
64,0,94,30];var A$X=[96,0,126,30];var BqG=[128,0,158,30];var BqH=" %% ";var BqI=[
0,70,240,220];var BqJ=[0,237,240,307];var A$Y="\n44 %% done";var BqK=[0,0,166,30
];var AIA=[0,0,12,30];var Ayu=[14,0,26,30];var AZF=[28,0,40,30];var AZG=[42,0,54
,30];var AZH=[56,0,68,30];var AZI=[70,0,82,30];var AZJ=[84,0,96,30];var AZK=[98,
0,110,30];var A$Z=[112,0,124,30];var AZL=[126,0,138,30];var BqL=[140,0,152,30];var
BqM=[154,0,166,30];var A$0=[20,0,46,30];var BqN="\u2642";var BqO="{fnt3}\u2642{fnt1}";
var BqP="\u2640";var BqQ="{fnt3}\u2640{fnt1}";var BqR="{parc}";var BqS=[30,30,210
,80];var BqT="Implement in derieved class!";var BqU=[60,4,226,34];var A$1=[30,4,
58,34];var A$2=[4,0,27,40];var BqV=[116,4,228,34];var BqW=[60,4,86,34];var BqX=[
88,4,114,34];var Aoz="Implement in derived class!";var A$3="Implement in derived class.";
var BqY="Invalid nais id view: ";var BqZ=[0,35,240,75];var Bq0=[0,0,110,30];var Bq1=[
0,0,26,30];var Bq2="100";var AZM="\n\n";var Bq3=[240,240];var Bq4=[0,240];var Bq5=
"Unknown rated attribute: ";var Bq6=[120,80,240,280];var Bq7=[0,80,120,280];var AIB=
" %% (";var Ayv=" \xB1 ";var Ayw=" (n = ";var AZN=[0,80,232,120];var Bq8=[0,242,
232,282];var AZO=[0,280,232,320];var Bq9=[35,0,200,40];var Bq_=[1,0,31,40];var Bq$=[
32,40];var Bra=[32,0];var Brb=[3,0,83,40];var A$4=[180,0,240,40];var Brc=[120,0,
180,40];var Brd=[65,0,125,40];var Bre=[0,0,120,200];var Brf=[0,40,120,150];var A$5=[
15,160,60,190];var A$6=[60,160,105,190];var Brg=[0,65,240,135];var Brh=[10,112,170
,192];var Bri=[178,129,248,173];var Brj=[0,40,240,110];var Brk=[10,98,170,178];var
Brl=[178,112,248,156];var Brm=[85,190,160,265];var Brn=[89,194,155,260];var Bro=[
26,190,111,250];var Brp=[125,181,225,211];var Brq=[100,220,183,250];var Brr="38.7";
var Brs=[180,220,225,250];var Brt="\xB0C";var Bru=[0,99,240,178];var Brv=[100,280
,140,320];var Brw=[0,26,240,105];var A$7=[30,40];var A$8=[30,0];var Brx=[149,0,200
,40];var Bry=[145,40];var Brz=[145,0];var BrA=[38,0,88,40];var AZP=[0,0,35,40];var
BrB=[0,0,50,40];var BrC=[40,0,200,40];var BrD=[95,0,145,40];var BrE=[65,5,223,35
];var AZQ=[0,0,15,40];var BrF=[72,0,140,40];var A$9="\n(";var BrG="%y/%m/%d";var
BrH="%y ";var BrI=" %m ";var BrJ=" %d ";var BrK="20";var BrL=[225,0,240,40];var BrM=[
0,400,232,440];var BrN=[0,440,232,480];var BrO=[0,480,232,520];var BrP=[0,520,232
,560];var BrQ=[0,560,232,600];var BrR=[0,598,232,638];var BrS=[5,0,215,40];var BrT=[
215,8,240,33];var BrU="Implement in dervied class.";var BrV="ERROR: Unhandled temperature unit: ";
var AIC="ERROR: Unhandled mass unit: ";var BrW=[-1,160,115,280];var BrX=[114,160
,230,280];var AZR=[116,40,232,160];var Ayx="Unknown weight class index: ";var BrY=
"< 35";var BrZ="35 - 40";var Br0="40 - 45";var Br1="45 - 50";var Br2="\u2265 50";
var Br3="< 80";var Br4="80 - 90";var Br5="90 - 100";var Br6="100 - 110";var Br7=
"\u2265 110";var A$_="Unknown mass unit";var Br8=[143,0,193,40];var A$$=[192,0,240
,40];var Br9=[44,28,44,28];var Br_="0 %%";var Br$=[-1,40,115,160];var Bsa=[117,40
,233,160];var Bsb=[1,160,117,280];var Bsc=[114,158,230,278];var Bsd=[1,280,117,400
];var Bse=[30,0,155,40];var Baa="\u2620";var AZS=[380,150,380,190];var Bab=[105,
0,155,50];var AZT=[190,1,240,41];var Bsf=[72,0,108,40];var Bsg=[108,0,180,40];var
Bsh=[60,0,94,40];var Bsi=[94,0,200,40];var Bsj="Scroll direction not supported.";
var Bsk=[44,0,207,40];var Bsl=[207,0,240,40];var Bsm="99";var Bsn="Unknown birth type";
var Bso=[44,0,189,40];var Bsp=[5,0,44,40];var Bsq=[44,0,240,40];var Bsr=[240,0,240
,40];var Bss="\u25C9";var Bac="\u25CB";var Bst=[75,4,215,34];var Bsu=[47,4,73,34
];var Bad=[17,4,45,34];var Bsv=[0,0,138,30];var Bsw=[47,4,215,34];var AZU="Unhandled MotherSelectionFilterMode: ";
var Bsx="Read only!";var Bsy="actions array too small to hold all actions";var Bsz=[
120,40];var BsA=[120,0];var BsB=[5,0,115,40];var BsC=[0,0,205,40];var BsD=[59,4,
170,34];var BsE=[59,1,173,37];var BsF=[175,1,205,37];var BsG=[0,0,37,40];var BsH=[
115,98,205,188];var BsI=[0,40,235,100];var BsJ=[2,200,240,280];var BsK=" 01234";
var BsL=[0,0];var BsM=[33,63];var BsN=[25,56];var BsO="Unknown transponder image type: ";
var AID=[0,0,82,82];var BsP=[0,0,81,26];var BsQ=[105,120,195,210];var BsR=[10,140
,100,230];var Bae="Unhandled EartagNrAssignmentMode: ";var BsS="Unhandled Gender";
var BsT=[10,35,35,75];var BsU=[44,40,202,70];var BsV=[204,35,232,75];var BsW="Unvalid FatoryResetScope";
var Baf=[0,120,240,200];var BsX=[144,0,192,40];var BsY=[144,0,240,40];var BsZ=[195
,0,245,50];var Bs0=[120,0,120,40];var Bs1=[140,0,240,30];var Bs2=[30,0,232,40];var
Bs3=[60,0,160,40];var Bs4=[160,0,200,40];var Bs5=[150,17,200,40];var Bs6=[155,40
];var Bs7=[155,0];var Bs8=[146,80,240,160];var Bs9=[56,80,146,160];var Bs_=[0,80
,56,160];var Bs$=[13,107,47,141];var Bta=[74,109,104,139];var Btb=[50,100,130,150
];var Btc=[55,112,145,140];var Btd=[146,112,236,140];var Bte=[150,86,223,110];var
AIE=[0,40,240,120];var Btf="Menu item for animal table field not found";var Bag=[
0,360,240,440];var Btg=[0,440,240,520];var Bth=[5,40,235,104];var Bti=[120,108,226
,218];var Btj=[20,120,110,210];var Btk=[5,223,235,280];var Btl=[0,0,64,30];var Btm=[
44,0,64,30];var Btn=[185,5,225,35];var Bto=[170,5,234,35];var Btp="Unhandled number of digits";
var Btq=[0,0,126,30];var Btr=[22,5,149,35];var Bts=[149,0,232,40];var Bah=[5,20];
var Btt=[5,0];var Btu="Unhandled AnimalIdAutoGenerationMethod: ";var Btv=[4,440,
236,520];var Btw="Unhandled TransponderAssignmentIdChangeMethod: ";var Btx="\n";
var Bty="%";var Btz=[0,0,160,120];var BtA=[2,2,157,117];var BtB=[50,70];var BtC=[
50,50];var BtD="Unhandled data export destination ";var BtE=[0,0,168,40];var BtF=[
168,0,240,40];var BtG=[0,47,232,77];var BtH=[65,0,101,40];var BtI=[135,0,175,40];
var BtJ=[85,17,135,40];var BtK=[125,17,175,40];var BtL=[40,0];var Bai=[0,40,230,
280];var BtM="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtN="ERROR: Received more animal table fields than expected!";
var BtO=[0,80,240,130];var BtP=[0,80,240,200];var Baj="Unhandled BackupError: ";
var BtQ="Unhandled PopupId: ";var BtR=[203,0,240,40];var BtS=[168,0,203,40];var BtT=[
35,0,152,40];var BtU=[0,0,84,40];var BtV=[84,0,167,40];var BtW="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMG={Device:null,A5I:null,GG:null,Init:function(aArg){},DriveCursorHitting:function(
S9,BG,Fb){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GG._Init.call(this.
GG={I:this},0);this.__proto__=C.AMG;this.H(Cd);this.J(this.GG,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5I=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lw=
this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GG._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GG.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5I)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GG)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4Q._variants();
},K:null,_className:"Application::Application"};C.Ast=[240,320];C.AB={Background:
null,Ej:null,AC2:null,An4:0,Init:function(aArg){A.pe([this,this.A0r],this);A.pe([
this,this.Ber],this);},LO:function(G){},A0r:function(s){this.LO(s);},CF:function(
G){},AIG:function(s){this.CF(s);},E3:function(G){},Ayy:function(s){this.E3(s);},
Dq:function(E){if(this.AC2===E)return;this.AC2=E;A.pe([this,this.Ber],this);},Ber:
function(G){var B;if(!!this.AC2)this.Ej.Ab3((C.BR.isPrototypeOf(B=A._NewObject(this.
AC2,0))?B:null));else this.Ej.Ab3(null);},_Init:function(aArg){C.Abi._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cd
);this.Background.L(A.jb.CS);this.Ej.H(BF);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abi;this.
Background._Done();this.Ej._Done();C.Abi._Done.call(this);},_ReInit:function(){C.
Abi._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WH={KH:null,Zp:function(E){var B;if(this.KH===E)return;if(!!this.KH)this.AqE(
this.KH,null,null,null,[B=this.KH,B.Ayy],null,false);this.KH=E;if(!!this.KH)this.
AkK(this.KH,null,null,null,null,null,null,[B=this.KH,B.AIG],null,false);},AEm:function(
){return this.KH;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WH;this.H([0,0,C.Ast[0],C.Ast[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KH)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ow={U3:null,Q:null,AnH:null,ZA:null,NO:null,Ou:null,TB:null,TC:null,AF7:255,
Kc:function(G){var F;if(!!this.Q){this.A1X();var Ac8=(F=this.Q,F[1].call(F[0]));
if(Ac8>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gf);this.Ou.L((this.Ou.AQ&0x00FFFFFF
)|(this.AlG(Ac8,0,30)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF)|(this.AlG(Ac8,31,60
)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlG(Ac8,61,100)<<24));}},A0p:function(
s){this.Kc(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0p],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0p],E,0);if(!!E)A.pe([this,
this.A0p],this);},A29:function(G){var F;if(!!this.AnH)this.ZA.Ar((F=this.AnH,F[1
].call(F[0])));else this.ZA.Ar(false);this.A95(255);},A9Y:function(E){if(A.aaZ(this.
AnH,E))return;if(!!this.AnH)A.z$([this,this.A29],this.AnH,0);this.AnH=E;if(!!E)A.
zX([this,this.A29],E,0);if(!!E)A.pe([this,this.A29],this);},A95:function(E){if(this.
AF7===E)return;this.AF7=E;if(!!this.U3)this.U3.L((this.U3.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlG:function(A0v,BbG,Bw2){if(A0v<BbG)return 0;else if((A0v>=BbG)&&(A0v<
Bw2))return this.AF7&0xFF;else return 255;},A1X:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U3=this.TC;else if((F=this.Q,F[1].call(F[0]))>
30)this.U3=this.TB;else this.U3=this.Ou;}else this.U3=null;},BkI:function(){return this.
AF7;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZA._Init.call(this.ZA={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AK._Init.call(this.Ou={
I:this},0);A.acg.AK._Init.call(this.TB={I:this},0);A.acg.AK._Init.call(this.TC={
I:this},0);this.__proto__=C.Ow;this.H(E4);this.ZA.Fl(2000);this.NO.H(E4);this.NO.
L(A.jb.Text);this.Ou.H(Hm);this.Ou.L(A.jb.E1);this.TB.H(IQ);this.TB.L(A.jb.E1);this.
TC.H(Ip);this.TC.L(A.jb.E1);this.J(this.NO,0);this.J(this.Ou,0);this.J(this.TB,0
);this.J(this.TC,0);this.ZA.Q=[this,this.BkI,this.A95];this.NO.Aw(A.aaL(A.ach.AMR
));},_Done:function(){this.__proto__=A.Core.P;this.ZA._Done();this.NO._Done();this.
Ou._Done();this.TB._Done();this.TC._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZA._ReInit();this.NO._ReInit();this.Ou._ReInit(
);this.TB._ReInit();this.TC._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnH)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZA={_Init:function(aArg){A.acl.Gh._Init.call(
this,aArg);this.__proto__=C.ZA;this.AkV=true;this.B2=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GG:null,AR:null,Background:null,Ow:null,Bo:
null,Dl:null,K7:0,Avd:0,Ave:0,Ao1:0,LI:false,KE:false,Qn:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);
var GA=this.Bo.Bw;if(!G$){this.Ao1=A.jb.CS;this.K7=A.jb.Text;}else if(GA){this.Ao1=
this.Avd;this.K7=this.Ave;}else if(Fq){this.Ao1=this.Avd;this.K7=this.Ave;}else{
this.Ao1=A.jb.CS;this.K7=A.jb.Text;}this.Background.L(this.Ao1);if(!!this.GG){this.
GG.Ww(this.Ao1);this.GG.De(this.K7);}this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(
G){this.An();A.pe(this.AR,this);},AiN:function(G){if(this.Dl.Ach)return;this.An(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab3:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.An();},A9H:function(E){if(this.Avd===E)return;this.
Avd=E;this.An();},A9I:function(E){if(this.Ave===E)return;this.Ave=E;this.An();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.Ow._Init.call(this.Ow={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=C.Ej;var B;this.
H(BF);this.Background.AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.CS);
this.Ow.H(O1);this.K7=A.jb.Text;this.Bo.PO(0);this.Bo.Wx(50);this.Dl.Filter=1;this.
Avd=A.jb.AV;this.Ave=A.jb.Bm;this.Ao1=A.jb.Text;this.J(this.Background,0);this.J(
this.Ow,0);this.Ow.As([B=A._GetAutoObject(A.Device.Device),B.Av2,B.Ayz]);this.Ow.
A9Y([B=A._GetAutoObject(A.Device.Device),B.Av5,B.AyA]);this.Bo.Mx=[this,this.Qm];
this.Dl.BN=[this,this.AiN];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ow._Done();this.Bo._Done();this.Dl._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ow._ReInit();this.Bo._ReInit();this.Dl._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X0={AeI:null,Uy:null,CF:function(G){if(this.K&&this.K.CF
)return this.K.CF.apply(this,arguments);else return C.AB.CF.apply(this,arguments
);},E3:function(G){if(this.K&&this.K.E3)return this.K.E3.apply(this,arguments);else
return C.AB.E3.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Text._Init.call(this.Uy={I:
this},0);this.__proto__=C.X0;this.AeI.H(P1);this.Uy.H(P2);this.Uy.R(A.jV);this.Uy.
L(A.jb.Text);this.Uy.Z(false);this.J(this.AeI,0);this.J(this.Uy,0);this.AeI.Aw(null
);this.Uy.S(A.aaL(A.fl.EK));var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeI._Done();this.Uy._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeI._ReInit();this.Uy._ReInit();this.Uy.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uy)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X0._variants();},K:null,_className:"Application::BootScreen"};C.AUK={AAv:function(
G){A._GetAutoObject(C.A$).Ahn(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUK;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avq={DZ:null,Y:null,Ya:null,Yb:null,VD:null,X3:null
,VE:null,X1:null,X6:null,TG:null,X5:null,Yc:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Aru,B.Atd],0);A._GetAutoObject(A.Device.Helper).AkN();this.Bb(this.VD);this.
N.Cs(A.aaL(A.ach.ADx));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2I=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2I)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJW=A._NewObject(A.acl.AF4,0);AJW.Fl(250);AJW.HM(1);AJW.WC(6);this.
Y.HD(this.AV,true,AJW,null);}},CF:function(G){this.A4a(this);A._GetAutoObject(A.
Device.Device).Am.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkN();A._GetAutoObject(A.Device.Helper).Asn();},Fe:function(G){
var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.
Ay.Mv(-this.Y.Br[1]);},Ie:function(G){var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VD)A._GetAutoObject(C.A$).Cg(35);else if(Cx===this.X3)A._GetAutoObject(
C.A$).Cg(34);else if(Cx===this.X6)A._GetAutoObject(C.A$).Cg(69);else if(Cx===this.
VE)A._GetAutoObject(C.A$).Cg(8);else if(Cx===this.X1)A._GetAutoObject(C.A$).Cg(50
);else if(Cx===this.TG)A._GetAutoObject(C.A$).Cg(25);else if(Cx===this.Ya)A._GetAutoObject(
C.A$).Cg(77);else if(Cx===this.Yb)A._GetAutoObject(C.A$).Cg(70);else if(Cx===this.
Yc)A._GetAutoObject(C.A$).Cg(6);else if(Cx===this.X5)A._GetAutoObject(C.A$).Cg(63
);},Bz$:function(G){A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.
Device).AmM);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmM)this.N.Hu((
A.aaR(A.acf.A7d)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hu((A.aaR(A.acf.
A7d)+CQ)+A.aaR(A.acf.A7U).toLowerCase());},XB:function(G){A._GetAutoObject(A.Device.
Device).Ds(1);},A4a:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).Mo());this.VE.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fi._Init.call(this.Ya={I:this
},0);C.Fi._Init.call(this.Yb={I:this},0);C.Fi._Init.call(this.VD={I:this},0);C.Fi.
_Init.call(this.X3={I:this},0);C.QR._Init.call(this.VE={I:this},0);C.Fi._Init.call(
this.X1={I:this},0);C.Fi._Init.call(this.X6={I:this},0);C.Fi._Init.call(this.TG={
I:this},0);C.Fi._Init.call(this.X5={I:this},0);C.Fi._Init.call(this.Yc={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avq;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dq(C.AqZ);this.DZ.AZ(0x3F);this.DZ.H(
E$);this.DZ.L(A.jb.CK);this.Y.H(Lu);this.Y.JO(9);this.Ya.H(P3);this.Ya.Aj(true);
this.Ya.T(A.aaR(A.acf.Gm));this.Yb.H(JY);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.
A7A));this.VD.H(N_);this.VD.Aj(true);this.VD.T(A.aaR(A.acf.Vq));this.X3.H(P4);this.
X3.Aj(true);this.X3.T(A.aaR(A.acf.Tt));this.VE.H(MF);this.VE.Aj(true);this.VE.T(
A.aaR(A.acf.APH));this.X1.H(S5);this.X1.Aj(true);this.X1.T(A.aaR(A.acf.Animal));
this.X6.H(JY);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.A7g));this.TG.H(UO);this.TG.
Ar(true);this.TG.Aj(true);this.TG.Z(true);this.TG.T(A.aaR(A.acf.A53));this.X5.H(
Z5);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.Device));this.Yc.H(W1);this.Yc.Aj(true
);this.Yc.T(A.aaR(A.acf.Settings));this.Ay.H(Iq);this.J(this.DZ,0);this.J(this.Y
,0);this.J(this.Ya,0);this.J(this.Yb,0);this.J(this.VD,0);this.J(this.X3,0);this.
J(this.VE,0);this.J(this.X1,0);this.J(this.X6,0);this.J(this.TG,0);this.J(this.X5
,0);this.J(this.Yc,0);this.J(this.Ay,0);this.N.CB=[this,this.Bz$];this.N.Ck=[this
,this.XB];this.Y.El=[this,this.Fe];this.Ya.AR=[this,this.Ie];this.Ya.DB(A.aaL(A.
ach.ADB));this.Yb.AR=[this,this.Ie];this.Yb.DB(A.aaL(A.ach.ADE));this.VD.AR=[this
,this.Ie];this.VD.DB(A.aaL(A.ach.APL));this.X3.AR=[this,this.Ie];this.X3.DB(A.aaL(
A.ach.APW));this.VE.AR=[this,this.Ie];this.VE.DB(A.aaL(A.ach.AQi));this.X1.AR=[this
,this.Ie];this.X1.DB(A.aaL(A.ach.APO));this.X6.AR=[this,this.Ie];this.X6.DB(A.aaL(
A.ach.AQp));this.TG.AR=[this,this.Ie];this.TG.DB(A.aaL(A.ach.AP9));this.X5.AR=[this
,this.Ie];this.X5.DB(A.aaL(A.ach.AP6));this.Yc.AR=[this,this.Ie];this.Yc.DB(A.aaL(
A.ach.AQH));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done(
);this.Y._Done();this.Ya._Done();this.Yb._Done();this.VD._Done();this.X3._Done();
this.VE._Done();this.X1._Done();this.X6._Done();this.TG._Done();this.X5._Done();
this.Yc._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ya._ReInit();this.Yb.
_ReInit();this.VD._ReInit();this.X3._ReInit();this.VE._ReInit();this.X1._ReInit(
);this.X6._ReInit();this.TG._ReInit();this.X5._ReInit();this.Yc._ReInit();this.Ay.
_ReInit();this.Ya.T(A.aaR(A.acf.Gm));this.Yb.T(A.aaR(A.acf.A7A));this.VD.T(A.aaR(
A.acf.Vq));this.X3.T(A.aaR(A.acf.Tt));this.VE.T(A.aaR(A.acf.APH));this.X1.T(A.aaR(
A.acf.Animal));this.X6.T(A.aaR(A.acf.A7g));this.TG.T(A.aaR(A.acf.A53));this.X5.T(
A.aaR(A.acf.Device));this.Yc.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q8={Number:null,Jc:null,IP:null,Tz:null,AsJ:0,Init:function(aArg){var B;A.zX([
this,this.Bbj],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.AZ8],0);A.pe([this,this.
Bbj],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An5();},CF:function(G){A.
_GetAutoObject(A.Device.Device).AhC();},E3:function(G){A._GetAutoObject(A.Device.
Device).AnW();},Al1:function(G){var F;this.An();this.Tz.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aej.Ar(true);if(!this.Tz.Bw)(F=this.Tz.Q,F[2].call(F[0],this.Tz.
B2));},Bbj:function(s){this.Al1(s);},An5:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gf);break;case 3:this.Background.
L(A.jb.H6);break;default:this.Background.L(A.jb.CK);}},AkE:function(E){if(this.AsJ===
E)return;this.AsJ=E;this.Jc.AkE(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jc._Init.call(this.Jc={I:this}
,0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gh._Init.call(this.Tz={I:this}
,0);this.__proto__=C.Q8;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(UP);this.Number.KS(true);this.Number.L(A.jb.Text);this.Jc.H(Z6);this.Jc.AkE(0);
this.IP.H(W2);this.IP.L(A.jb.AV);this.IP.Zr(true);this.Tz.Fl(1750);this.Tz.Uk(750
);this.Tz.Akz(0);this.Tz.Ar(true);this.Tz.B2=3;this.J(this.Number,0);this.J(this.
Jc,0);this.J(this.IP,0);this.Number.S(A.aaL(A.fl.Af));this.IP.Aw(A.aaL(A.ach.ADD
));this.Tz.Q=[B=this.IP,B.ASp,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jc._Done();this.IP._Done();this.Tz._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jc._ReInit();this.IP._ReInit();this.Tz._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fi={C8:null,ADn:null,AR:null,Bo:null,Dl:null,Background:
null,Mn:null,OB:null,QX:null,G4:null,A5f:true,LI:false,KE:false,Qn:false,Init:function(
aArg){},Bk:function(aSize){var B;C.Hc.Bk.call(this,aSize);this.Mn.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QX.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OB.H(this.QX.M);this.G4.H([].concat(0,this.G4.M.slice(1,4)));this.G4.H(A.abN(
this.G4.M,aSize[0]));this.G4.H(A.abP(this.G4.M,0));this.G4.H([].concat(this.G4.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hc.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!G$){this.QX.L(A.jb.AmZ);this.
G4.L(A.jb.CK);this.OB.Z(true);this.OB.L(A.jb.AQU);this.Mn.Z(false);}else if(GA){
this.QX.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OB.Z(false);this.Mn.Z(true);}else if(
Fq){this.QX.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OB.Z(false);this.Mn.Z(true);}else{
this.QX.L(A.jb.Text);this.G4.L(A.jb.Text);this.OB.Z(true);this.OB.L(A.jb.CS);this.
Mn.Z(false);}this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(G){this.An();A.pe(this.
AR,this);},AiN:function(G){if(this.Dl.Ach)return;this.An();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G4.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QX.
Aw(E);this.OB.Aw(E);},Ab2:function(E){if(this.A5f===E)return;this.A5f=E;this.G4.
Z(E);},Ab5:function(E){if(this.ADn===E)return;this.ADn=E;this.Mn.Aw(E);this.Mn.H(
A.abK(this.Mn.M,E.FrameSize));},_Init:function(aArg){C.Hc._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BM._Init.call(this.Dl={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mn={
I:this},0);A.acg.Ap._Init.call(this.OB={I:this},0);A.acg.Ap._Init.call(this.QX={
I:this},0);C.CH._Init.call(this.G4={I:this},0);this.__proto__=C.Fi;this.H(Z7);this.
Bo.PO(0);this.Bo.Wx(50);this.Dl.Filter=1;this.Background.H(W3);this.Background.Z(
false);this.Mn.AZ(0x14);this.Mn.L(A.jb.AV);this.Mn.Cv(0);this.OB.L(A.jb.CS);this.
OB.Cv(1);this.G4.H(Z8);this.J(this.Background,0);this.J(this.Mn,0);this.J(this.OB
,0);this.J(this.QX,0);this.J(this.G4,0);this.Bo.Mx=[this,this.Qm];this.Dl.BN=[this
,this.AiN];this.Mn.Aw(A.aaL(A.ach.NS));this.OB.Aw(A.aaL(A.ach.AvD));this.QX.Aw(A.
aaL(A.ach.AvD));this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(
A.aaL(A.fl.Bh));this.ADn=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hc;this.Bo._Done();this.Dl._Done();this.Background._Done();this.Mn._Done(
);this.OB._Done();this.QX._Done();this.G4._Done();C.Hc._Done.call(this);},_ReInit:
function(){C.Hc._ReInit.call(this);this.Bo._ReInit();this.Dl._ReInit();this.Background.
_ReInit();this.Mn._ReInit();this.OB._ReInit();this.QX._ReInit();this.G4._ReInit(
);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axa:null,Background:null,OX:null,Asf:0,Ak6:10,AjB:100,AQ:0,AoU:true,Bk:function(
aSize){A.Core.P.Bk.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OX.H([].concat(2,this.OX.M.slice(1,4)));this.OX.H(A.abN(this.OX.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var AfZ=this.Ak6<this.AjB;var AJt=(
B=this.M)[3]-B[1];var A2v=10;var Auj=AJt;var A39=0;if(10>AJt)A2v=AJt;if(this.Ak6<
this.AjB)Auj=((Auj*this.Ak6)/this.AjB)|0;if(Auj<A2v)Auj=A2v;if(this.Ak6<this.AjB
)A39=((this.BkH()*(AJt-Auj))/(this.AjB-this.Ak6))|0;this.OX.H(A.abP(this.OX.M,A39
));this.OX.H([].concat(this.OX.M.slice(0,3),A39+Auj));this.OX.Z(AfZ);this.Background.
Z(AfZ);if(!!this.Axa&&(this.AoU!==AfZ))A.pe(this.Axa,this);this.AoU=AfZ;},BkH:function(
){var E=this.Asf;var Hz=this.AjB-this.Ak6;if((Hz>0)&&(E>Hz))E=Hz;if(Hz<=0)E=0;return E;
},Mv:function(E){if(E<0)E=0;if(this.Asf===E)return;this.Asf=E;this.An();},Mw:function(
E){if(E<0)E=0;if(this.Ak6===E)return;this.Ak6=E;this.An();},Mu:function(E){if(E<
0)E=0;if(this.AjB===E)return;this.AjB=E;this.An();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OX.L(E);},BmO:function(E){if(A.aa0(this.Axa,E))return;this.
Axa=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.OX={I:this},0);this.__proto__=
C.Ay;this.H(Z9);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UQ);this.Background.L(A.jb.CS);this.OX.AZ(0x0);this.OX.H(UQ);this.OX.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OX,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OX._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axa)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ce={Hd:null,Y:null,Ay:null,Ap:null,A6I:A.jV,Init:function(aArg){A.pe([this,this.
AA2],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.An();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);this.AA2(this);},AlX:
function(G){if(!!this.N.CB)A.pe(this.N.CB,this);},ApK:function(G){if(!!this.N.Cl
)A.pe(this.N.Cl,this);},AAv:function(G){if(!!this.N.Ck)A.pe(this.N.Ck,this);},Fe:
function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[
3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);A.pe([this,this.BAv],this);},AA2:function(G){
var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hu(A.jV);this.N.CY(A.
aaL(A.ach.VZ));this.N.CB=[this,this.Ev];if(!!GS&&!!GS.Aml){this.N.FI(A.jV);this.
N.Kw.Dr(255);this.N.ArN(GS.AqP);this.N.Cs(GS.AvA);this.N.Ck=GS.Aml;}else{this.N.
FI(A.jV);this.N.Cs(null);this.N.Ck=null;}if(!!GS&&!!GS.Agm){this.N.CV(GS.AxE);this.
N.HQ.Dr(GS.Axb);this.N.Anv(GS.AmO);this.N.C6(GS.Aq6);this.N.Cl=GS.Agm;}else{this.
N.CV(A.jV);this.N.C6(null);this.N.Cl=null;}},I8:function(E){if(this.A6I===E)return;
this.A6I=E;this.Hd.R(E);},Ev:function(G){A._GetAutoObject(C.A$).Fu();},BAv:function(
G){var B;var Bzu=this.Ay.Background.Fk();var Bdt=(Bzu?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajc=X;
X=X.Ah;if(((Ajc.U&0x400)===0x400)){if(!!(A.Core.Akf.isPrototypeOf(Ajc)?Ajc:null)
){var Bdz=(A.Core.Akf.isPrototypeOf(Ajc)?Ajc:null);Bdz.DC([Bdt,Bdz.EC[1]]);}else
if(!!(A.Core.Es.isPrototypeOf(Ajc)?Ajc:null)){var Bfu=(A.Core.Es.isPrototypeOf(Ajc
)?Ajc:null);Bfu.H(A.abN(Bfu.M,Bdt));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hd={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Ce;this.N.Z(true);this.Hd.H(W4);this.Hd.Ar(false);this.Hd.R(A.aaR(A.
acf.Settings));this.Hd.L(A.jb.Text);this.Y.H(E$);this.Y.JO(1);this.Ay.H(Iq);this.
Ap.H(P5);this.Ap.L(A.jb.Text);this.J(this.Hd,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));this.Y.
El=[this,this.Fe];this.Ap.Aw(A.aaL(A.ach.AC6));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hd._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hd._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hd.R(A.aaR(A.acf.Settings
));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqZ={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgp],[B=
A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},De:function(E){C.BR.De.call(this
,E);this.Text.L(E);},Bgp:function(G){this.Text.R(A._GetAutoObject(A.acj.KK).Bih(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqZ;this.Timer.Wx(1);this.Timer.Ar(true);
this.Text.H(Z_);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mx=[this,this.Bgp
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KT:0xFFFFFFFF,LS:0,De:function(E){if(
this.KT===E)return;this.KT=E;},Ww:function(E){if(this.LS===E)return;this.LS=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(O2
);},_className:"Application::HeaderContent"};C.N={VQ:null,VS:null,VT:null,AgT:null
,AgU:null,AgV:null,CB:null,Ck:null,Cl:null,Background:null,NG:null,Ja:null,Kw:null
,HQ:null,Pv:null,I4:null,Le:null,TW:null,TX:null,AnZ:A.jV,An0:A.jV,An1:A.jV,Aq7:
0,Aq8:0,Aq9:0,Aha:0,ZD:false,ZC:false,Asl:false,Asz:false,Asy:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VQ)this.Ja.S(this.VQ);if(!!this.VS)this.Kw.S(this.
VS);if(!!this.VT)this.HQ.S(this.VT);switch(this.Aha){case 0:{this.NG.Z(false);this.
Ja.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Bm);this.I4.L(
A.jb.Bm);this.Le.L(A.jb.Bm);}break;case 1:{if(!this.AgT)this.NG.H(A.aaT(this.Ja.
ASg(),Ri));else this.NG.H(this.Pv.Db());this.NG.Z(true);this.Ja.L(A.jb.Text);this.
Kw.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Text);this.I4.L(A.jb.Bm);this.Le.
L(A.jb.Bm);}break;case 3:{if(!this.AgV)this.NG.H(A.aaT(this.HQ.ASg(),Ri));else this.
NG.H(this.Le.Db());this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Pv.L(A.jb.Bm);this.I4.L(A.jb.Bm);this.Le.L(A.jb.Text);}break;case
2:{if(!this.AgU)this.NG.H(A.aaT(this.Kw.ASg(),Ri));else this.NG.H(this.I4.Db());
this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kw.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Pv.L(A.jb.Bm);this.I4.L(A.jb.Text);this.Le.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W5);}}if(!!this.Pv.Al){this.Pv.Z(true);this.Ja.Z(false);}else{
this.Pv.Z(false);this.Ja.Z(true);}if(this.An0.length<=0){this.I4.Z(true);this.Kw.
Z(false);}else{this.I4.Z(false);this.Kw.Z(true);}if(!!this.Le.Al){this.Le.Z(true
);this.HQ.Z(false);}else{this.Le.Z(false);this.HQ.Z(true);}},Hu:function(E){if(this.
AnZ===E)return;this.AnZ=E;this.Ja.R(E);this.An();},FI:function(E){if(this.An0===
E)return;this.An0=E;this.Kw.R(E);this.An();},CV:function(E){if(this.An1===E)return;
this.An1=E;this.HQ.R(E);this.An();},AFa:function(E){if(this.Aha===E)return;this.
Aha=E;this.An();},AE3:function(E){if(this.VQ===E)return;this.VQ=E;this.Ja.S(E);this.
An();},ArN:function(E){if(this.VS===E)return;this.VS=E;this.Kw.S(E);this.An();},
Anv:function(E){if(this.VT===E)return;this.VT=E;this.HQ.S(E);this.An();},A3m:function(
G){this.An();},CY:function(E){if(this.AgT===E)return;this.AgT=E;this.Pv.Aw(E);this.
An();},Cs:function(E){if(this.AgU===E)return;this.AgU=E;this.I4.Aw(E);this.An();
},C6:function(E){if(this.AgV===E)return;this.AgV=E;this.Le.Aw(E);this.An();},ON:
function(E){if(this.Asy===E)return;this.Asy=E;this.TW.Z(E);if(E)this.Ja.H([].concat(
this.TW.M[2],this.Ja.M.slice(1,4)));else this.Ja.H([].concat(0,this.Ja.M.slice(1
,4)));this.An();},OO:function(E){if(this.Asz===E)return;this.Asz=E;this.TX.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TX.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.An();},Bma:function(E){if(this.Aq7===E)return;this.Aq7=E;this.Pv.Cv(
E);this.An();},AS4:function(E){if(this.Aq8===E)return;this.Aq8=E;this.I4.Cv(E);this.
An();},A9M:function(E){if(this.Aq9===E)return;this.Aq9=E;this.Le.Cv(E);this.An();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Ja={I:this
},0);C.CH._Init.call(this.Kw={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Pv={I:this},0);A.acg.Ap._Init.call(this.I4={I:this},0);A.acg.
Ap._Init.call(this.Le={I:this},0);A.acg.Ap._Init.call(this.TW={I:this},0);A.acg.
Ap._Init.call(this.TX={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.Ad8);this.NG.H(W6);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Ja.AZ(0x14);this.Ja.H(W7);this.Ja.A6(0x12);this.
Kw.AZ(0x14);this.Kw.H(W8);this.Kw.A6(0x12);this.HQ.H(Z$);this.Pv.H(W9);this.I4.H(
W_);this.Le.H(S6);this.Le.Z(false);this.TW.H(UR);this.TW.Z(false);this.TX.H(US);
this.TX.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Ja,0);this.
J(this.Kw,0);this.J(this.HQ,0);this.J(this.Pv,0);this.J(this.I4,0);this.J(this.Le
,0);this.J(this.TW,0);this.J(this.TX,0);this.Ja.S(A.aaL(A.fl.Ak));this.Ja.A2(A.aaL(
A.fl.Bh));this.Ja.Q1([this,this.A3m]);this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(
A.fl.Bh));this.Kw.Q1([this,this.A3m]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bh));this.HQ.Q1([this,this.A3m]);this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.
Ak);this.VT=A.aaL(A.fl.Ak);this.Pv.Aw(null);this.I4.Aw(null);this.Le.Aw(null);this.
TW.Aw(A.aaL(A.ach.AMJ));this.TX.Aw(A.aaL(A.ach.Ajp));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Ja._Done(
);this.Kw._Done();this.HQ._Done();this.Pv._Done();this.I4._Done();this.Le._Done(
);this.TW._Done();this.TX._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Ja.
_ReInit();this.Kw._ReInit();this.HQ._ReInit();this.Pv._ReInit();this.I4._ReInit(
);this.Le._ReInit();this.TW._ReInit();this.TX._ReInit();this.Ja.S(A.aaL(A.fl.Ak)
);this.Ja.A2(A.aaL(A.fl.Bh));this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(A.fl.Bh)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bh));this.AE3(A.aaL(A.fl.Ak));
this.ArN(A.aaL(A.fl.Ak));this.Anv(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AgV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Le)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.AC_={Init:function(aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.
Helper),B.Arw,B.AkD],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper)
,B.A8L,B.AFy],0);A.pe([this,this.Nl],this);},DY:function(G){if(!!A._GetAutoObject(
A.Device.Helper).Ahy)this.Ab4(A._GetAutoObject(A.Device.Helper).Ahy.AOR());else this.
Ab4(-1);if(!!A._GetAutoObject(A.Device.Helper).Uw)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak4(A._GetAutoObject(A.Device.Helper).Uw.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmU._Init.call(this,aArg);this.__proto__=C.AC_;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGN={Ex:null,Eh:null,
FT:null,XZ:null,TA:null,ID:null,IE:null,Init:function(aArg){},WF:function(G){var
B;C.DR.WF.call(this,G);var AKL=this.Azh(A._GetAutoObject(A.Device.Helper).UB.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALA=this.Azh(A._GetAutoObject(
A.Device.Helper).UC.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzk=
this.Azh(A._GetAutoObject(A.Device.Device).Z1);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKL));this.IE.H(A.abO(this.
IE.M,this.Ex.M[3]-((((B=this.IE.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALA));this.
ID.H(A.abO(this.ID.M,(this.Eh.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))+2));this.FT.
H(A.abP(this.FT.M,this.Eh.M[3]));this.FT.H([].concat(this.FT.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzk));this.TA.H(A.abO(this.TA.M,this.FT.M[3]-((((B=this.TA.M)[3]-B[1
])/2)|0)));this.XZ.H(A.abP(this.XZ.M,this.FT.M[3]));this.XZ.H([].concat(this.XZ.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJG:function(AoQ){return A._GetAutoObject(A.
Device.Converter).AkZ(AoQ);},AKe:function(){return A._GetAutoObject(A.acj.Temperature
).AlH();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.
FT={I:this},0);A.acg.AK._Init.call(this.XZ={I:this},0);A.acg.AK._Init.call(this.
TA={I:this},0);A.acg.AK._Init.call(this.ID={I:this},0);A.acg.AK._Init.call(this.
IE={I:this},0);this.__proto__=C.AGN;this.Ex.AZ(0xD);this.Ex.H(AcL);this.Ex.L(A.jb.
Gf);this.Eh.AZ(0xD);this.Eh.H(S7);this.Eh.L(A.jb.H6);this.FT.AZ(0xD);this.FT.H(Aaa
);this.FT.L(A.jb.E1);this.XZ.AZ(0xD);this.XZ.H(Afv);this.XZ.L(A.jb.Afo);this.TA.
AZ(0xD);this.TA.H(Aab);this.TA.Awo(A.jb.Afo);this.TA.Awp(A.jb.Afo);this.TA.Awr(A.
jb.E1);this.TA.Awq(A.jb.E1);this.ID.AZ(0xD);this.ID.H(W$);this.ID.Awo(A.jb.E1);this.
ID.Awp(A.jb.E1);this.ID.Awr(A.jb.H6);this.ID.Awq(A.jb.H6);this.IE.AZ(0xD);this.IE.
H(Aac);this.IE.Awo(A.jb.H6);this.IE.Awp(A.jb.H6);this.IE.Awr(A.jb.Gf);this.IE.Awq(
A.jb.Gf);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FT,-1);this.J(this.XZ
,-1);this.J(this.TA,-1);this.J(this.ID,-1);this.J(this.IE,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FT._Done(
);this.XZ._Done();this.TA._Done();this.ID._Done();this.IE._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FT._ReInit();this.XZ._ReInit();this.TA._ReInit();this.ID._ReInit();this.IE.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avf:null,AmO:null,AQe:null,Aq6:null,AqP:null,AvA:null,AR:null,Agm:null,Aml:
null,N:null,Bo:null,QN:null,AxE:A.jV,AUG:false,AGB:false,Apg:false,Axb:255,LI:false
,KE:false,Qn:false,Ai:function(Ae){var B;C.OU.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fq=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);var GA=this.Bo.Bw;var FM=
A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FM=A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.
L(A.jb.CS);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.
Background.L(A.jb.AmZ);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.L(GQ
);}this.LI=G$;this.KE=Fq;this.Qn=GA;this.Apg=Iy;},Qm:function(G){this.An();A.pe(
this.AR,this);},Bwe:function(s){this.Qm(s);},IW:function(G){if(this.QN.Ach)return;
this.An();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atf:function(s){this.IW(s);},AeR:function(E){if(A.aa0(this.Agm,E))return;this.
Agm=E;},A_e:function(E){if(this.AxE===E)return;this.AxE=E;},Wy:function(E){if(this.
Avf===E)return;this.Avf=E;},Wz:function(E){if(this.AmO===E)return;this.AmO=E;},A9W:
function(E){if(this.Axb===E)return;this.Axb=E;},Gn:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALi();},A2V:
function(G){},BF1:function(s){this.A2V(s);},Aky:function(E){if(this.Aq6===E)return;
this.Aq6=E;},LX:function(E){if(A.aa0(this.Aml,E))return;this.Aml=E;},Bl5:function(
E){if(this.AqP===E)return;this.AqP=E;},L0:function(E){if(this.AvA===E)return;this.
AvA=E;},Zx:function(E){if(this.AGB===E)return;this.AGB=E;this.ALi();},ALi:function(
){var B;var Qt=this.DK;if(this.AGB)Qt=Qt+A.aaR(A.acf.Colon);if(this.AUG)Qt=Qt+Aad;
this.V.R(Qt);},ATp:function(E){if(this.AUG===E)return;this.AUG=E;this.ALi();},_Init:
function(aArg){C.OU._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BM._Init.call(this.QN={I:this},0);this.__proto__=C.Co;this.Bo.PO(0);
this.Bo.Wx(50);this.Bo.Ar(false);this.QN.Filter=1;this.Bo.Mx=[this,this.Bwe];this.
QN.BN=[this,this.Atf];this.Avf=A.aaL(A.fl.Ak);this.AmO=A.aaL(A.fl.Ak);this.AQe=A.
aaL(A.ach.E2);this.AqP=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OU;this.
Bo._Done();this.QN._Done();C.OU._Done.call(this);},_ReInit:function(){C.OU._ReInit.
call(this);this.Bo._ReInit();this.QN._ReInit();this.Wy(A.aaL(A.fl.Ak));this.Wz(A.
aaL(A.fl.Ak));this.Bl5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.Avf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Aml)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dt={Q:null,Am_:null,Ana:null,Ht:null,H2:null,AM:0,Gl:0,FZ:100,FB:0,Init:function(
aArg){},IW:function(G){this.FB=1;C.Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.
Bk.call(this,aSize);this.Ht.H([0,aSize[1]-40,40,aSize[1]]);this.H2.H([].concat(A.
abe(aSize,AhO),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fq=((Ae&
0x20)===0x20);var GA=this.Bo.Bw;this.Ht.L(this.V.AQ);this.H2.L(this.V.AQ);this.Ht.
Z((Fq||GA)&&(this.AM>this.Gl));this.H2.Z((Fq||GA)&&(this.AM<this.FZ));if(this.FB===
6)this.Ht.L(A.jb.E1);if(this.FB===7)this.H2.L(A.jb.E1);},BeD:function(G){this.FB=
6;this.An();if(this.Bo.Bw){A.pe([this,this.AyJ],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qm:function(G){if(this.FB===6)A.pe([this,this.AyJ],this);if(this.FB===
7)A.pe([this,this.AyK],this);if(this.FB===1)A.pe(this.AR,this);this.FB=0;this.An(
);},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},AcS:function(
s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcS],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcS],E,0);if(!!E)A.pe([this,
this.AcS],this);},BeE:function(G){this.FB=7;this.An();if(this.Bo.Bw){A.pe([this,
this.AyK],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J_:function(G){this.FB=0;}
,AyK:function(s){this.J_(s);},J5:function(G){this.FB=0;},AyJ:function(s){this.J5(
s);},By:function(E){if(E<this.Gl)E=this.Gl;if(E>this.FZ)E=this.FZ;if(this.AM===E
)return;this.AM=E;this.An();},BaL:function(Aq){this.By(Aq);},F0:function(E){if(this.
Gl===E)return;this.Gl=E;this.An();},EV:function(E){if(this.FZ===E)return;this.FZ=
E;this.An();},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BM._Init.call(this.Am_={I:this},0);A.Core.BM._Init.call(this.Ana={
I:this},0);A.acg.Ap._Init.call(this.Ht={I:this},0);A.acg.Ap._Init.call(this.H2={
I:this},0);this.__proto__=C.Dt;this.H(JZ);this.Am_.Filter=6;this.Ana.Filter=7;this.
Background.H(JZ);this.V.H(Aae);this.V.R(Lv);this.Ht.H(AhP);this.H2.H(Aob);this.H2.
Cv(1);this.J(this.Ht,0);this.J(this.H2,0);this.Am_.BN=[this,this.BeD];this.Am_.D1=[
this,this.BeD];this.Ana.BN=[this,this.BeE];this.Ana.D1=[this,this.BeE];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.Ht.Aw(A.aaL(A.ach.
Ajq));this.H2.Aw(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Am_._Done();this.Ana._Done();this.Ht._Done();this.H2._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Am_._ReInit();this.
Ana._ReInit();this.Ht._ReInit();this.H2._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ht)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dn:function(){return-1;},C4:function(aIndex){return-1;},FX:function(
aIndex){return A.jV;},DU:function(A7){return-1;},HH:function(){return-1;},As:function(
E){this.Q=E;},B8:function(Aq){this.As(Aq);},ACN:function(aIndex){return null;},ACP:
function(aIndex){return 0;},B7:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Io={Axw:null
,BT:null,AG0:A.jV,AVj:A.jV,Aj3:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dt.Ai.call(this,Ae);if(!this.Axw){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVj);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG0);}}else(B=
this.Axw)?B[1].call(B[0],this):null;},J_:function(G){var F;var BQ=this.AM;C.Dt.J_.
call(this,G);this.By(this.AM+this.Aj3);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J5:function(G){var F;var BQ=this.AM;C.
Dt.J5.call(this,G);this.By(this.AM-this.Aj3);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IM:function(E){if(this.AG0===E)return;
this.AG0=E;this.An();},I9:function(E){if(this.AVj===E)return;this.AVj=E;this.An(
);},AS5:function(E){if(this.Aj3===E)return;this.Aj3=E;},A_b:function(E){if(A.aa0(
this.Axw,E))return;this.Axw=E;},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Io;this.H(JZ);this.BT.H(N$);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.BT._Done();C.Dt._Done.call(this
);},_ReInit:function(){C.Dt._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dt._Mark.call(this
,D);if((B=this.Axw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dy:null,HK:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bk:function(
aSize){var B;C.Dt.Bk.call(this,aSize);this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.
H2.M[0]+10,this.Ht.M[3]]);this.Dy.AFb((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.
Go,true,null,null);},Ai:function(Ae){var B;C.Dt.Ai.call(this,Ae);var Fq=((Ae&0x20
)===0x20);var GA=this.Bo.Bw;this.Dy.AbG(0,this.Dy.AY-1);this.Ht.Z(Fq||GA);this.H2.
Z(Fq||GA);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.
Q,F[1].call(F[0]))));},J_:function(G){var F;var BQ=this.AM;C.Dt.J_.call(this,G);
this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J5:function(G){var F;var BQ=this.AM;
C.Dt.J5.call(this,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){
var Qs=0;if(E<this.Gl){E=this.FZ;Qs=-this.Dy.V_*this.Dy.AY;}if(E>this.FZ){E=this.
Gl;Qs=this.Dy.V_;}C.Dt.By.call(this,E);if(!!Qs)this.Dy.F_(Qs);this.Dy.G2(this.AM
);if(this.Dy.Bjc())this.Dy.BoD(false,false);this.Dy.HD(this.Dy.Go,true,this.HK,null
);},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(C.CH.isPrototypeOf(B=this.Dy.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.AwX(19);Cz.A2(this.V.AmN);Cz.BmY(19
);Cz.Cu(this.V.AqO);Cz.BmZ(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));
else Cz.R(Xa);Cz.H(A.abK(Cz.M,[this.Dy.V_,(B=this.Dy.M)[3]-B[1]]));},BvS:function(
s){this.Hg(s);},CI:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
F0(0);this.EV(this.AC.Dn()-1);this.Dy.Ju(this.AC.Dn());this.Dy.AbG(0,this.Dy.AY-
1);}},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.Dy._Init.call(this.
Dy={I:this},0);A.acl.Gh._Init.call(this.HK={I:this},0);this.__proto__=C.BW;this.
H(JZ);this.Dy.NZ(C.CH);this.HK.WC(23);this.HK.HM(1);this.HK.Fl(200);this.J(this.
Dy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dy.Hg=[this,this.BvS
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.Dy._Done();this.HK.
_Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.
Dy._ReInit();this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SM={FE:null,OE:null,Dj:null,Au:null,Js:null,HJ:null,Pp:null,VO:null,QW:null,
Yk:null,P0:null,Gt:null,Gs:null,FU:0,A8:0,Asi:false,Bi_:false,Init:function(aArg
){},Ai:function(Ae){C.Dt.Ai.call(this,Ae);this.Ht.Z(false);this.H2.Z(false);var AtO=
A.jV;if(!!this.Dj){this.Pp.R(this.Au.Format(Aoc));this.QW.R(this.Au.Format(AhQ));
this.P0.R(this.Au.Format(AhR));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(this.Pp.
M);this.HJ.L(this.V.AQ);this.Pp.L(this.Background.AQ);this.QW.L(this.V.AQ);this.
P0.L(this.V.AQ);AtO=A.aaR(A.acf.A5z);}else if(this.A8===2){this.HJ.Z(true);this.
HJ.H(this.QW.M);this.HJ.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QW.L(this.Background.
AQ);this.P0.L(this.V.AQ);AtO=A.aaR(A.acf.He);}else if(this.A8===3){this.HJ.Z(true
);this.HJ.H(this.P0.M);this.HJ.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QW.L(this.
V.AQ);this.P0.L(this.Background.AQ);AtO=A.aaR(A.acf.Year);}else{this.HJ.Z(false);
this.Pp.L(this.V.AQ);this.Yk.L(this.V.AQ);this.QW.L(this.V.AQ);this.VO.L(this.V.
AQ);this.P0.L(this.V.AQ);}if(AtO.length>0){if(this.AGB)this.V.R((((this.DK+AcM)+
AtO)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcM)+
AtO)+String.fromCharCode(0x29));}else this.ALi();},Qm:function(G){if(this.FB===1
)A.pe([this,this.U8],this);else if(this.FB===4)A.pe([this,this.AiC],this);else if(
this.FB===5)A.pe([this,this.Ain],this);C.Dt.Qm.call(this,G);},J_:function(G){switch(
this.A8){case 0:C.Dt.J_.call(this,G);break;case 3:break;default:this.Ads(this);}
},J5:function(G){switch(this.A8){case 0:C.Dt.J5.call(this,G);break;default:this.
Aim(this);}},Adu:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0
])));},Ab7:function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adu
],this.Dj,0);this.Dj=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu
],this);},Ui:function(E){if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.
FU);this.An();},Ads:function(G){this.FB=1;this.An();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbh:function(s){this.Ads(s);},U8:
function(G){this.Ew(this.A8+1);},Al0:function(G){this.FB=4;this.An();if(this.Bo.
Bw){A.pe([this,this.AiC],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AlZ:function(
G){this.FB=5;this.An();if(this.Bo.Bw){A.pe([this,this.Ain],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiC:function(G){var B;var F;var BQ=this.FU;switch(this.A8){
case 1:{if(this.Asi){var AA$=A._NewObject(A.Core.An2,0);AA$.Ki=1;if(this.Au.J(AA$
).JN()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Au.GH<this.Au.Zo()
)this.Au.Lp(this.Au.GH+1);}break;case 2:{if(this.Asi){var AA$=A._NewObject(A.Core.
An2,0);AA$.Ki=this.Au.Zo();if(this.Au.J(AA$).JN()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Au.Um(this.Au.He+1);if(this.Au.Zo()<this.Au.GH)this.Au.Lp(this.
Au.Zo());}break;case 3:{if(this.Asi){var A1j=A._NewObject(A.Core.Bs,0);A1j.Initialize(
this.Au.JN());A1j.Year+=1;if(A1j.JN()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Ui(((B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FU!==BQ){if(!!this.Dj)(F=this.
Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},Ain:function(G){var B;var F;var BQ=
this.FU;if(this.A8===1)this.Au.Lp(this.Au.GH-1);if(this.A8===2){this.Au.Um(this.
Au.He-1);if(this.Au.Zo()<this.Au.GH)this.Au.Lp(this.Au.Zo());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Ui(((B=(this.Au.JN()|
0))<0)?B+0x100000000:B);if(this.FU!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],
this.FU));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[
0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 3:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FE.AkO((F=this.N,F[1].call(F[
0])));}},AFv:function(E){if(this.Asi===E)return;this.Asi=E;},FP:function(G){this.
Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;var AAj=this.A8;if(!this.
A8){this.FE.Ajx((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FU){var BQ=this.FU;
this.Ui(A._GetAutoObject(A.Device.Helper).Dv());if(this.FU!==BQ){if(!!this.Dj)(F=
this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}}}this.A8=EO;this.Bi_=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=
!!this.A8;if((!!AAj&&!this.A8)&&!!this.OE)A.pe(this.OE,this);this.An();},Aim:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BM._Init.call(this.Js={I:this}
,0);A.acg.AK._Init.call(this.HJ={I:this},0);A.acg.Text._Init.call(this.Pp={I:this
},0);A.acg.Text._Init.call(this.VO={I:this},0);A.acg.Text._Init.call(this.QW={I:
this},0);A.acg.Text._Init.call(this.Yk={I:this},0);A.acg.Text._Init.call(this.P0={
I:this},0);A.Core.BM._Init.call(this.Gt={I:this},0);A.Core.BM._Init.call(this.Gs={
I:this},0);this.__proto__=C.SM;this.H(UT);this.V.R(Aod);this.Ht.Z(false);this.H2.
Z(false);this.Js.Filter=1;this.HJ.H(Aoe);this.HJ.L(0x55FFFFFF);this.Pp.H(Aof);this.
Pp.I7(true);this.Pp.A6(0x14);this.VO.H(Aog);this.VO.I7(true);this.VO.A6(0x14);this.
VO.R(Afw);this.QW.H(Ak$);this.QW.I7(true);this.Yk.H(AxW);this.Yk.I7(true);this.Yk.
R(Afw);this.P0.H(AxX);this.P0.I7(true);this.P0.A6(0x11);this.Gt.Filter=4;this.Gt.
Bw=false;this.Gs.Filter=5;this.Gs.Bw=false;this.J(this.HJ,0);this.J(this.Pp,0);this.
J(this.VO,0);this.J(this.QW,0);this.J(this.Yk,0);this.J(this.P0,0);this.Js.BN=[this
,this.Bbh];this.Pp.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QW.S(A.aaL(A.
fl.EK));this.Yk.S(A.aaL(A.fl.EK));this.P0.S(A.aaL(A.fl.EK));this.Gt.BN=[this,this.
Al0];this.Gt.D1=[this,this.AiC];this.Gs.BN=[this,this.AlZ];this.Gs.D1=[this,this.
Ain];this.FE=A._NewObject(C.Aep,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dt;this.Au._Done();this.Js._Done();this.HJ._Done();this.Pp._Done();this.VO._Done(
);this.QW._Done();this.Yk._Done();this.P0._Done();this.Gt._Done();this.Gs._Done(
);C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Au._ReInit(
);this.Js._ReInit();this.HJ._ReInit();this.Pp._ReInit();this.VO._ReInit();this.QW.
_ReInit();this.Yk._ReInit();this.P0._ReInit();this.Gt._ReInit();this.Gs._ReInit(
);this.Pp.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QW.S(A.aaL(A.fl.EK));
this.Yk.S(A.aaL(A.fl.EK));this.P0.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Dt._Mark.call(this,D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OH={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bdw],[B=A._GetAutoObject(A.Device.Device),B.A8u,B.BaS],0);
A.pe([this,this.Bdw],this);},Dn:function(){return 16;},FX:function(aIndex){return this.
LanguageToString.BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(
A.Device.Device).Any(E);},Bdw:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OH;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,5);this.Cc.
Set(3,3);this.Cc.Set(4,8);this.Cc.Set(5,9);this.Cc.Set(6,7);this.Cc.Set(7,6);this.
Cc.Set(8,10);this.Cc.Set(9,2);this.Cc.Set(10,11);this.Cc.Set(11,12);this.Cc.Set(
12,13);this.Cc.Set(13,14);this.Cc.Set(14,15);this.Cc.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cm;this.LanguageToString._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rb={TemperatureUnitToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Aw1(E);}
,Init:function(aArg){var B;A.zX([this,this.Bf5],[B=A._GetAutoObject(A.Device.Device
),B.Arx,B.Ate],0);A.pe([this,this.Bf5],this);},Bf5:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rb;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUZ={Ajv:null,AcB:null,Kx:null,AP:null,A_:null,Bk:function(aSize){C.Ba.Bk.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajv.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcB.H(this.Ajv.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kx.L(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.AX
)return;this.Hn=Ad;if(!!this.AX){var Aly=this.AX.HF(Ad,6);var ApV=this.AX.CE(Ad,
7);var At4=this.AX.I2(Ad,9);this.T(A._GetAutoObject(A.acj.KK).ACK(Aly));this.Kx.
R(A._GetAutoObject(A.acj.KK).A6i(Aly));this.AcB.R(A._GetAutoObject(A.Device.Converter
).AkZ(ApV));this.AcB.L(A._GetAutoObject(A.acj.Assessment).Xv(At4));this.Ajv.L(A.
_GetAutoObject(A.acj.Assessment).Qj(At4));this.An();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Ajv={I:this},0);A.acg.Text._Init.
call(this.AcB={I:this},0);A.acg.Text._Init.call(this.Kx={I:this},0);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AUZ;this.V.H(O3);this.AcB.L(A.jb.Text);this.Kx.R(Rj);this.Kx.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A_.H(AxY);this.A_.L(A.jb.Bc);this.J(this.Ajv,0);this.J(this.AcB
,0);this.J(this.Kx,0);this.J(this.AP,0);this.J(this.A_,0);this.AcB.S(A.aaL(A.fl.
Af));this.Kx.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajv._Done();this.AcB._Done();this.Kx._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajv._ReInit(
);this.AcB._ReInit();this.Kx._ReInit();this.AP._ReInit();this.A_._ReInit();this.
AcB.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.F$={AX:null,AR:null,Cr:null,AD:
null,Aff:null,QC:null,KM:A.jV,Lj:null,AVl:true,Hg:function(G){var B;var Gc=this.
AD.G0;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zs(this.
AX);Aa.Cf(Gc);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GK]));
},NZ:function(E){if(E===this.Lj)return;this.Lj=E;this.AD.NZ(E);},Zs:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Cf],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Cf],E,0);A.pe([this,this.Cf],this);},Cf:function(G){if(this.AVl===
false)return;if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbG(0,this.AD.AY-1);
}else this.AD.Ju(0);if((this.AD.AY>0)&&(this.FG()<0))this.G2(0);if(this.FG()>=this.
AD.AY){this.G2(0);this.AD.F_(0);}if(this.AD.AY<=0){this.QC.Z(true);this.G2(-1);}
else{this.QC.Z(false);this.ABy(null,null);}},Fe:function(G){var B;this.Aff.Mu(this.
AD.GK*this.AD.AY);this.Aff.Mw((B=this.AD.M)[3]-B[1]);this.Aff.Mv(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cr.CO){case 4:if(this.FG()>0)this.G2(
this.FG()-1);break;case 5:if(this.FG()<(this.AD.AY-1))this.G2(this.FG()+1);break;
default:this.Cr.NH=true;}this.AD.HD(this.FG(),true,null,null);}else if((this.Cr.
CO!==4)&&(this.Cr.CO!==5))this.Cr.NH=true;},Zu:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbG(0,this.AD.AY);},G2:function(E){this.AD.G2(E);this.AD.HD(E,
true,null,null);},FG:function(){return this.AD.Go;},Dz:function(E){if(this.KM===
E)return;this.KM=E;this.QC.R(E);},ABy:function(AcV,E5){this.AD.ABy(AcV,E5);},ATE:
function(E){if(this.AVl===E)return;this.AVl=E;if(E)A.pe([this,this.Cf],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Aff={I:this},
0);A.acg.Text._Init.call(this.QC={I:this},0);this.__proto__=C.F$;this.H(UU);this.
Lj=C.Ba;this.Cr.Filter=147;this.AD.AZ(0x3F);this.AD.H(UU);this.AD.Ae2(40);this.Aff.
AZ(0x3A);this.Aff.H(AsS);this.QC.AZ(0x3F);this.QC.H(AxZ);this.QC.Hh(10);this.QC.
KS(true);this.QC.A6(0xA);this.QC.L(A.jb.Text);this.J(this.AD,0);this.J(this.Aff,
0);this.J(this.QC,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,this.DE];this.AD.
El=[this,this.Fe];this.AD.Hg=[this,this.Hg];this.QC.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cr._Done();this.AD._Done();this.Aff._Done();this.
QC._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cr._ReInit();this.AD._ReInit();this.Aff._ReInit();this.QC._ReInit();this.
QC.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aff)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hn:-1,CP:function(){this.Cf(this.Hn);},Ai:function(Ae){var B;C.Co.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hn%2)===1)this.Background.L(A.
jb.CK);else this.Background.L(A.jb.CS);}},Zs:function(E){if(this.AX===E)return;this.
AX=E;},Cf:function(Ad){A.ab5("%s",Ax0);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GU={Bj:null,Fx:null
,DO:null,FF:null,VX:null,Kg:null,KM:A.jV,AT1:0,AT2:0,Afg:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Ds(0);A.pe([this,this.Bax],this);}},Init:function(aArg){var B;A.zX([this,this.
Beb],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AII],0);A.zV([this,this.Af5],A.
_GetAutoObject(A.Device.Device).Am,0);A.zV([this,this.AcF],A._GetAutoObject(A.Device.
Device).Am,0);A.zX([this,this.BAA],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0
],0);A.pe([this,this.AcF],this);A.pe([this,this.Bbb],this);A.pe([this,this.Axr],
this);},Wv:function(G){this.Agn();var O;for(O=this.Kg.Dn()-1;O>=0;O=O-1)switch(this.
Kg.C4(O)){case 0:this.AdN(A.aaR(A.acf.A4J),[this,this.Bnk],0);break;case 14:this.
AdN(A.aaR(A.acf.BgK),[this,this.Bnl],14);break;case 1:this.AdN(A.aaR(A.acf.Temperature
),[this,this.ATG],1);break;case 2:this.AdN(A.aaR(A.acf.Rating),[this,this.ATF],2
);break;case 3:this.AdN(A.aaR(A.acf.Afp),[this,this.ATH],3);break;default:A.ab5(
"%s",Ax1);}A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BhH
));A._GetAutoObject(A.Device.Device).Ds(6);},Bax:function(s){this.Wv(s);},DE:function(
G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var AfS=this.Kg.DU(A._GetAutoObject(
A.Device.Device).Kg);if(this.Afg)return;switch(D5.CO){case 6:{AfS=AfS-1;if(AfS<0
)AfS=this.Kg.Dn()-1;A._GetAutoObject(A.Device.Device).Zq(this.Kg.C4(AfS));}break;
case 7:{AfS=AfS+1;if(AfS>=this.Kg.Dn())AfS=0;A._GetAutoObject(A.Device.Device).Zq(
this.Kg.C4(AfS));}break;default:D5.NH=true;}},CF:function(G){if(this.DO.AzU()){this.
DO.Ac4();if(this.DO.AzU()===false)this.Bj.ATE(true);return;}else if(this.Afg)this.
A3D(this);if(!!this.Bj)this.Bj.ATE(true);},E3:function(G){if(!!this.Bj)this.Bj.ATE(
false);},Axr:function(G){var B;if(!!this.Bj)this.HN(this.Bj);this.Bj=A._NewObject(
C.AMv,0);this.Bj.H(Aoh);this.Bj.Zs(A._GetAutoObject(A.Device.Device).Am);this.Bj.
Zu([this,this.AIU]);if(!!this.Fx)this.Bj.A9g([B=this.Fx,B.A8N,B.A99]);this.A3W(this
);this.J(this.Bj,0);if(this.Afg===false)this.Bb(this.Bj);this.Beb(this);this.Boo(
this);},A9d:function(G){A._GetAutoObject(A.Device.Device).Ds(0);this.Dq(this.A6v(
));this.Ej.AR=[this,this.AIU];this.ALn(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afg=true;},Bj5:function(G){var B;A._GetAutoObject(A.Device.Device).Ds(0);if(!this.
Bj)return;var Aa=(C.ABX.isPrototypeOf(B=this.Bj.AD.BiN(this.Bj.AD.Go))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);else A._GetAutoObject(A.Device.
Helper).W.Hi();this.Aga();},AlY:function(G){var F;if(!this.FF)this.A5M(this);else
switch((F=this.FF,F[1].call(F[0]))){case 0:this.A5M(this);break;case 1:this.BhI(
this);break;case 9:this.A5N(this);break;case 4:this.A5P(this);break;case 6:this.
A5S(this);break;case 8:this.ANW(this);break;case 2:this.A5W(this);break;case 3:this.
BhJ(this);break;case 7:this.BhK(this);break;case 5:this.BhL(this);break;case 10:
this.BhN(this);break;case 11:this.A5O(this);break;case 12:this.A5V(this);break;case
13:this.A5X(this);break;case 14:this.A5Q(this);break;case 18:this.A5R(this);break;
case 15:this.A5T(this);break;case 16:this.A5Y(this);break;case 17:this.A5U(this);
break;default:A.ab5("%s%e",Afx,(F=this.FF,F[1].call(F[0])));}},AIU:function(s){this.
AlY(s);},Bld:function(G){this.Dq(C.Km);this.Ej.AR=null;this.Afg=false;this.AcF(this
);this.Bfx();this.N.TW.Dr(255);this.N.TX.Dr(255);this.Bb(this.Bj);this.Ej.Ar(false
);},Ank:function(G){A._GetAutoObject(C.A$).Fu();},Dz:function(E){if(this.KM===E)
return;this.KM=E;this.A3W(this);},Abs:function(){switch(A._GetAutoObject(A.Device.
Device).Kg){case 14:return C.AM6;case 2:return C.AM8;case 1:return C.AM9;case 3:
return C.AM$;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqt;case
7:return C.ABW;case 12:return C.ABZ;case 11:return C.ABV;case 13:return C.ABY;default:
throw new Error(Aoi);}},Abt:function(){switch(A._GetAutoObject(A.Device.Device).
Kg){case 14:return C.APy;case 2:return C.ADf;case 1:return C.APA;case 3:return C.
APC;case 4:return C.ADb;case 0:case 8:case 9:case 10:case 5:case 6:return C.Aq0;
case 7:return C.ADd;case 12:return C.ADe;case 11:return C.ADc;case 13:return C.ADg;
default:throw new Error(Aoi);}},Beb:function(G){this.ATi(A._GetAutoObject(A.Device.
Device).Kg);if(!!this.Bj){this.Bj.NZ(this.Abs());this.Bot(this);}},Bot:function(
G){var B;if(!!this.Fx)this.HN(this.Fx);this.Fx=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abt(),0))?B:null);this.Fx.H(IR);if(!!this.Bj)this.Bj.A9g([B=this.Fx,B.A8N,B.
A99]);this.J(this.Fx,0);},Bj3:function(G){this.Q6(this);A._GetAutoObject(A.Device.
Device).Ds(0);},ATG:function(G){A._GetAutoObject(A.Device.Device).Zq(1);},ATF:function(
G){A._GetAutoObject(A.Device.Device).Zq(2);},ATH:function(G){A._GetAutoObject(A.
Device.Device).Zq(3);},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A.
_GetAutoObject(A.Device.Helper).Mo());},Bbb:function(s){this.Q6(s);},HO:function(
G){if(this.Afg){this.ALn(this);return;}this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(
A.ach.ADz));this.N.C6(A.aaL(A.ach.Options));this.N.CB=[this,this.Ank];this.N.Ck=[
this,this.A9d];this.N.Cl=[this,this.Bax];this.N.Hu(A.jV);this.N.FI(A.jV);this.N.
CV(A.jV);if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.N.I4.Dr(100);this.N.
Ck=null;}else this.N.I4.Dr(255);},AyI:function(s){this.HO(s);},AdN:function(Ah$,
Aia,AJh){A._GetAutoObject(C.BS).ABx(Ah$,Aia,[this,this.A8H,this.ATi],AJh);},Af5:
function(G){this.A3W(this);if(this.Afg)A.pe([this,this.ALn],this);},Aga:function(
){A._GetAutoObject(C.A$).Cg(9);},A3W:function(G){if(!this.Bj)return;if(!A._GetAutoObject(
A.Device.Device).Am.QE()||!A._GetAutoObject(A.Device.Device).Am.Filter)this.Bj.Dz(
A.aaR(A.acf.AEe));else if(A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(
A.Device.Device).Am.Filter))this.Bj.Dz(this.KM);else if(!A._GetAutoObject(A.Device.
Device).Am.Filter.DQ(1,4)){if(A._GetAutoObject(A.Device.Helper).ACS(A._GetAutoObject(
A.Device.Device).Am.Filter)===1)this.Bj.Dz(A.aaR(A.acf.AN6));else this.Bj.Dz(A.aaR(
A.acf.AN5));}else this.Bj.Dz(A.aaR(A.acf.AR2));},AEE:function(G){var F;if(!!this.
FF)(F=this.FF,F[2].call(F[0],0));},AwI:function(E){if(A.aaZ(this.FF,E))return;if(
!!this.FF)A.z$([this,this.A0n],this.FF,0);this.FF=E;if(!!E)A.zX([this,this.A0n],
this.FF,0);if(!!E)A.pe([this,this.A0n],this);},AEK:function(G){var F;if(!!this.FF
)(F=this.FF,F[2].call(F[0],1));},AwN:function(G){var F;if(!!this.FF)(F=this.FF,F[
2].call(F[0],2));},ATm:function(G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0],
3));},ATA:function(G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0],7));},ATB:function(
G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0],5));},A5W:function(G){if(!this.Bj
)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.DO.
Qh(1);}},IY:function(Ah$,Aia,AoX){A._GetAutoObject(C.BS).ABx(Ah$,Aia,[this,this.
A8I,this.ATj],AoX);},Bln:function(G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0
],4));},A5P:function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).HL(this.Bj.FG());this.DO.BA3();}},Blo:function(G){var F;if(!!this.FF)(F=
this.FF,F[2].call(F[0],6));},A5S:function(G){if(!this.Bj)return;if(this.M9()){A.
_GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.DO.BA4();}},ANW:function(G
){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.
FG());this.DO.Qh(1024);}},BmB:function(G){var F;if(!!this.FF)(F=this.FF,F[2].call(
F[0],8));},Akt:function(G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0],9));},BhJ:
function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(
this.Bj.FG());this.DO.Qh(2);}},A5M:function(G){if(!this.Bj)return;if(this.M9()){
A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());if(A._GetAutoObject(A.Device.
Helper).Aj5(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A9(66,true,A.jV,0,null);else this.BAN();}},BhI:function(G){if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.
DO.Qh(16);}},BAN:function(){A._GetAutoObject(C.A$).Cg(94);},BhK:function(G){if(!
this.Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());
this.DO.Qh(4);}},BhL:function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FG());this.DO.Qh(8);}},A5N:function(G){var B;if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());if(this.
Afg){A.zX([this,this.AAl],[B=this.DO,B.Anr,B.Jv],0);this.A3D(this);}this.DO.Ac4(
);}},AL8:function(Ah$,Aia,BxQ){A._GetAutoObject(C.BS).BgF(Ah$,Aia,BxQ);},ALn:function(
G){this.N.Hu(A.jV);this.N.CV(A.jV);this.N.CY(A.aaL(A.ach.Aev));this.N.CB=[this,this.
Bld];this.N.TW.Dr(100);this.N.TX.Dr(100);var Gd=A._GetAutoObject(A.Device.Device
).Am.Ca();if(Gd<=0){this.N.Cs(null);this.N.C6(null);this.N.Ck=null;this.N.Cl=null;
this.N.ZC=false;this.N.ZD=false;}else if(Gd===1){this.N.Cs(null);this.N.C6(A.aaL(
A.ach.Aew));this.N.Ck=null;this.N.Cl=[this,this.AIU];this.N.ZC=false;this.N.ZD=false;
}else{this.N.Cs(A.aaL(A.ach.Aq5));this.N.C6(A.aaL(A.ach.Ara));this.N.Ck=[this,this.
A3f];this.N.Cl=[this,this.A3g];this.N.ZC=true;this.N.ZD=true;}},A3f:function(G){
if(!this.Bj)return;if(this.Bj.FG()<(A._GetAutoObject(A.Device.Device).Am.Ca()-1)
)this.Bj.G2(this.Bj.FG()+1);},A3g:function(G){if(!this.Bj)return;if(this.Bj.FG()>
0)this.Bj.G2(this.Bj.FG()-1);},Boo:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bj.G2(Bf);A.ab5("%s",Aoj);}}},M9:function(){return this.
Bj.FG()>=0;},Akg:function(){return A._GetAutoObject(A.Device.Device).Am.Ca()>5;}
,Agn:function(){this.BgG();A._GetAutoObject(C.BS).Qw(A.aaR(A.acf.AUo),[this,this.
A9d]);A._GetAutoObject(C.BS).FS();},AcF:function(G){if(this.Afg)this.ALn(this);else
this.HO(this);},A3D:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Am.
Filter.Fg();var AyW=aFilter.DQ(1,4);if(!!AyW){aFilter.N3(AyW);A._GetAutoObject(A.
Device.Device).Am.Bl(aFilter);if(!!this.Bj)this.Bj.G2(0);}},AAl:function(G){var B;
if(!this.DO.Gu&&this.Afg){A.z$([this,this.AAl],[B=this.DO,B.Anr,B.Jv],0);this.A3D(
this);}},Bnc:function(G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0],10));},BhN:
function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(
this.Bj.FG());this.DO.Qh(256);}},A27:function(G){var F;this.ATj((F=this.FF,F[1].
call(F[0])));A.pe([this,this.AyI],this);},A0n:function(s){this.A27(s);},Blk:function(
G){var F;if(!!this.FF)(F=this.FF,F[2].call(F[0],11));},A5O:function(G){if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.
DO.Qh(4096);}},A5V:function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FG());this.DO.Qh(16384);}},A5X:function(G){if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.
BAO();}},BAO:function(){A._GetAutoObject(C.A$).Ahn(75);},A5Q:function(G){if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.
DO.Qh(32768);}},A5T:function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FG());this.DO.Qh(65536);}},A5Y:function(G){if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.
DO.Qh(131072);}},BgG:function(){if(!A._GetAutoObject(A.Device.Device).Am.Filter||
A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(A.Device.Device).Am.Filter
))A._GetAutoObject(C.BS).XN(A.aaR(A.acf.AB2));else A._GetAutoObject(C.BS).Qw(A.aaR(
A.acf.AB2),[this,this.Bj3]);A._GetAutoObject(C.BS).Qw(A.aaR(A.acf.AkR),[this,this.
Bj5]);A._GetAutoObject(C.BS).FS();},A5U:function(G){if(!this.Bj)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.DO.Qh(128);}},BAA:function(
G){var B;if(!this.Bj)return;A.pe([B=this.Bj,B.Cf],this);},A5R:function(G){if(!this.
Bj)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FG());this.
DO.Qh(524288);}},BhM:function(G){if(!this.Bj)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FG());this.DO.Qh(262144);}},ATi:function(E){if(this.
AT1===E)return;this.AT1=E;A.abo([this,this.A8H,this.ATi],0);},ATj:function(E){if(
this.AT2===E)return;this.AT2=E;A.abo([this,this.A8I,this.ATj],0);},A6v:function(
){return C.Yt;},Bfx:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).Am.Filter){Filter=A._GetAutoObject(A.Device.Device).Am.Filter.Fg(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?
B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(A.Device.
Device).Am.Bl(Filter);}},Bnk:function(G){A._GetAutoObject(A.Device.Device).Zq(0);
},Bnl:function(G){A._GetAutoObject(A.Device.Device).Zq(14);},A8H:function(){return this.
AT1;},A8I:function(){return this.AT2;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADf._Init.call(this.VX={I:this},0);C.Kg._Init.call(this.Kg={I:this},0);
this.__proto__=C.GU;this.Background.H(Cd);this.N.Z(true);this.N.ON(true);this.N.
OO(true);this.Ej.A9H(A.jb.CS);this.Ej.A9I(A.jb.Text);this.Dq(C.Km);this.VX.H(IR);
this.KM=A.aaR(A.acf.AEe);this.J(this.VX,0);this.DO=A._GetAutoObject(C.DO);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.Kg._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.VX._ReInit();
this.Kg._ReInit();this.Dz(A.aaR(A.acf.AEe));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Fx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DO)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kg)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ABX={AP:null,A_:null,UE:null,Acz:
null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UE.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UE.M[2]-1,0,this.UE.M[2]+1,aSize[1]]);this.Acz.H([this.UE.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UE.L(this.V.AQ);this.Acz.L(this.
V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.UE.R(this.AX.CE(Ad,2).toFixed());this.Acz.R(this.AX.
CE(Ad,3).toFixed());this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UE={I:this},0);A.acg.Text._Init.call(this.Acz={I:this
},0);this.__proto__=C.ABX;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UE.L(A.jb.Text
);this.Acz.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UE,0);this.
J(this.Acz,0);this.UE.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UE.
_Done();this.Acz._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UE._ReInit();this.Acz._ReInit(
);this.UE.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad6={Oy:null,SN:null,Mi:null,Init:function(aArg){var B;A.zX([this,this.A2N],[
B=A._GetAutoObject(A.Device.Device),B.Av5,B.AyA],0);A.zX([this,this.Adt],[B=A._GetAutoObject(
A.Device.Device),B.Av2,B.Ayz],0);A.pe([this,this.Adt],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SN.R(A._GetAutoObject(A.Device.Device).Aa4.toFixed()+Xb
);this.Oy.Z(A._GetAutoObject(A.Device.Device).Amy);},Adt:function(G){this.An();}
,MU:function(G){A._GetAutoObject(C.A$).Fu();},A2N:function(G){if(A._GetAutoObject(
A.Device.Device).Amy===false){this.Oy.Z(false);A._GetAutoObject(C.A$).Fu();}else
this.Oy.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oy={I:this},0);A.acg.Text._Init.call(this.SN={I:this},0);C.Mi._Init.call(
this.Mi={I:this},0);this.__proto__=C.Ad6;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oy.H(Aok);this.Oy.R(A.aaR(A.acf.Oy));this.
Oy.L(A.jb.Text);this.Oy.Z(false);this.SN.H(AsT);this.SN.R(AsU);this.SN.L(A.jb.Text
);this.Mi.H(AsV);this.J(this.Oy,0);this.J(this.SN,0);this.J(this.Mi,0);this.N.Cl=[
this,this.MU];this.Oy.S(A.aaL(A.fl.Af));this.SN.S(A.aaL(A.fl.Af));this.Mi.As([B=
A._GetAutoObject(A.Device.Device),B.Av2,B.Ayz]);this.Mi.A9Y([B=A._GetAutoObject(
A.Device.Device),B.Av5,B.AyA]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oy._Done();this.SN._Done();this.Mi._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oy._ReInit();this.SN._ReInit();this.Mi._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oy.R(A.aaR(A.acf.Oy));this.Oy.S(A.aaL(A.fl.Af)
);this.SN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mi={Ad1:null,Ad2:null,Kc:function(G){var F;if(!!this.Q){this.A1X();var Ac8=(
F=this.Q,F[1].call(F[0]));if(Ac8>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gf);this.
Ou.L((this.Ou.AQ&0x00FFFFFF)|(this.AlG(Ac8,0,20)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF
)|(this.AlG(Ac8,21,40)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlG(Ac8,41,
60)<<24));this.Ad1.L((this.Ad1.AQ&0x00FFFFFF)|(this.AlG(Ac8,61,80)<<24));this.Ad2.
L((this.Ad2.AQ&0x00FFFFFF)|(this.AlG(Ac8,81,100)<<24));}},A1X:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U3=this.Ad2;else if((F=this.Q,F[
1].call(F[0]))>60)this.U3=this.Ad1;else if((F=this.Q,F[1].call(F[0]))>40)this.U3=
this.TC;else if((F=this.Q,F[1].call(F[0]))>20)this.U3=this.TB;else this.U3=this.
Ou;}else this.U3=null;},_Init:function(aArg){C.Ow._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad1={I:this},0);A.acg.AK._Init.call(this.Ad2={I:this},0);this.__proto__=
C.Mi;this.H(Aol);this.NO.H(Aol);this.Ou.H(Aom);this.TB.H(AsW);this.TC.H(Ax2);this.
Ad1.H(Ax3);this.Ad1.L(A.jb.E1);this.Ad2.H(Ax4);this.Ad2.L(A.jb.E1);this.J(this.Ad1
,0);this.J(this.Ad2,0);this.NO.Aw(A.aaL(A.ach.AMQ));},_Done:function(){this.__proto__=
C.Ow;this.Ad1._Done();this.Ad2._Done();C.Ow._Done.call(this);},_ReInit:function(
){C.Ow._ReInit.call(this);this.Ad1._ReInit();this.Ad2._ReInit();},_Mark:function(
D){var B;C.Ow._Mark.call(this,D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUU={N6:null,Lr:null,Ak5:null,ZY:null,ZX:null,CP:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device),B.
ASE,B.AZ_],0);A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.
A0a],0);A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device),B.A8X,B.Ba2],0
);A.pe([this,this.ApL],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GE(this
);this.ABl(this);this.BBX(this);this.DJ(this);},BAe:function(G){A._GetAutoObject(
A.Device.Device).AsC();},ApL:function(G){this.An();},GE:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZY.Z(false);break;case 4:{var A3y;if(!A._GetAutoObject(A.Device.Device).Afl)A3y=
0;else A3y=((A._GetAutoObject(A.Device.Device).AxH*100)/A._GetAutoObject(A.Device.
Device).Afl)|0;this.ZY.By(A3y);this.ZY.Z(true);}break;default:A.ab5("%s%e",AsX,A.
_GetAutoObject(A.Device.Device).SyncState);}},BBX:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lr.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gf);this.Lr.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsX,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CY(null);this.N.CB=null;this.N.CV(A.jV);this.N.Cl=null;}break;
case 7:{this.N.CY(null);this.N.CB=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cl=[this
,this.BAe];}break;default:A.ab5("%s%e",AsX,A._GetAutoObject(A.Device.Device).SyncState
);}},ABl:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lr.R(A.aaR(A.acf.Bpe));break;case 1:this.Lr.R(A.aaR(A.acf.Bpb));break;
case 2:this.Lr.R(A.aaR(A.acf.Bo_));break;case 3:this.Lr.R(A.aaR(A.acf.Bpc));break;
case 4:this.Lr.R((A.aaR(A.acf.Bpa)+Ax5)+A._GetAutoObject(A.Device.Helper).Nj(A._GetAutoObject(
A.Device.Helper).Nj(A.aaR(A.acf.BnR),P6,A._GetAutoObject(A.Device.Device).AxH.toFixed(
)),Ax6,A._GetAutoObject(A.Device.Device).Afl.toFixed()));break;case 5:this.Lr.R(
A.aaR(A.acf.Bpd));break;case 7:this.Lr.R(A.aaR(A.acf.Bo$));break;default:A.ab5("%s%e"
,AsX,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lr={I:this
},0);A.acg.Ap._Init.call(this.Ak5={I:this},0);A.acr.ADi._Init.call(this.ZY={I:this
},0);A.acr.ADj._Init.call(this.ZX={I:this},0);this.__proto__=C.AUU;this.N.Z(true
);this.N6.H(AVP);this.N6.R(A.aaR(A.acf.N6));this.Lr.AZ(0x3F);this.Lr.H(AVQ);this.
Lr.A6(0x12);this.Ak5.H(AVR);this.Ak5.L(A.jb.AV);this.ZY.H(AVS);this.ZY.Ar(false);
this.ZY.By(0);this.ZX.Bm8(0);this.ZX.A_k(0);this.ZX.A_i(A.jb.AV);this.ZX.A_h(0);
this.ZX.AFV(AHe);this.J(this.N6,0);this.J(this.Lr,0);this.J(this.Ak5,0);this.J(this.
ZY,0);this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(A.fl.Af));this.N6.Cu(A.aaL(A.fl.
Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.
Bh));this.Ak5.Aw(A.aaL(A.ach.AQK));this.ZY.OnSetAppearance(this.ZX);this.ZX.A_j(
A.aaL(A.ach.NS));this.ZX.A_g(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lr._Done();this.Ak5._Done();this.ZY._Done(
);this.ZX._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lr._ReInit();this.Ak5._ReInit();this.ZY._ReInit();this.
ZX._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Cu(A.aaL(A.fl.Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(
A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqY={_Init:function(aArg){C.AC_._Init.call(this,aArg
);this.__proto__=C.AqY;this.A9K(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cc:A.abi(3,0,{0:2,2:1}),Dn:function(
){return 3;},C4:function(aIndex){if(aIndex>=3)return-1;return this.Cc.Get(aIndex
);},FX:function(aIndex){return this.GenderToString.BH(this.C4(aIndex));},DU:function(
A7){var O=0;while(O<3){if(this.Cc.Get(O)===A7)return O;O=O+1;}return-1;},HH:function(
){var O=0;var max=-1;while(O<3){if(this.Cc.Get(O)>max)max=this.Cc.Get(O);O=O+1;}
return max;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal)this.Animal.JP(
E);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfX],[B=this.Animal,B.Wt,B.JP],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfX],[B=this.Animal,B.Wt,B.JP],0);A.pe([this,this.AfX],this);},AfX:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B7,
this.B8],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cc=[]).__proto__=C.Gender.Cc;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cc:A.abi(4,0,{1:1,2:2,3:3}),Dn:function(){return 4;},C4:function(aIndex){if(
aIndex>=4)return-1;return this.Cc.Get(aIndex);},FX:function(aIndex){return this.
BirthTypeToString.BH(this.C4(aIndex));},DU:function(A7){var O=0;while(O<4){if(this.
Cc.Get(O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(
O<4){if(this.Cc.Get(O)>max)max=this.Cc.Get(O);O=O+1;}return max;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Aku(E);},A1b:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B7,this.
B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1b],[B=this.Animal,B.ASi,B.Aku],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1b],[B=this.Animal,B.ASi,B.Aku],0);A.pe([this,this.A1b],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cc=[]).__proto__=C.BirthType.Cc;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acq:null,Dn:
function(){return A._GetAutoObject(A.Device.Helper).AdW.MC;},C4:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdW.MC)return-1;return A._GetAutoObject(
A.Device.Helper).AdW.Get(aIndex);},FX:function(aIndex){return this.Acq.BH(this.C4(
aIndex));},DU:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdW.
MC){if(A._GetAutoObject(A.Device.Helper).AdW.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UB.
MC){if(A._GetAutoObject(A.Device.Helper).UB.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UB.Get(O);O=O+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A06:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B7,this.B8],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A06],[B=this.Animal,B.PM,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A06],[B=this.Animal,B.PM,B.EB],0);A.pe([
this,this.A06],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUA={Init:function(aArg){var B;A.pe([this,this.AfB],this);A.zX([this,this.AfB
],[B=A._GetAutoObject(A.Device.Device),B.Arx,B.Ate],0);},A3E:function(G){A._GetAutoObject(
A.Device.Device).A9(38,true,A.jV,0,[this,this.Bbi]);},A3d:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Aso(this);},A1v:function(G){var F;if(this.A8===1){var BQ=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlO)this.D7=this.AlO;if(this.D7<A._GetAutoObject(
A.Device.Device).Z1)this.D7=A._GetAutoObject(A.Device.Device).Z1;if(this.DX!==BQ
){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===
2){var BQ=this.DX;this.DX=this.DX-10;if(this.DX<this.D7)this.DX=this.D7;if(this.
DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.
DJ(this);this.An();},A16:function(G){var F;if(this.A8===1){var BQ=this.D7;this.D7=
this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ){if(!!this.JS)(F=this.
JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.DX;this.
DX=this.DX+10;if(this.DX>this.AlJ)this.DX=this.AlJ;if(this.DX!==BQ){if(!!this.JR
)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.DJ(this);this.An();
},GE:function(G){this.PF.R(AHf+A._GetAutoObject(A.Device.Converter).AkZ(this.D7)
);this.PG.R(AHf+A._GetAutoObject(A.Device.Converter).AkZ(this.DX));this.St.R(A._GetAutoObject(
A.acj.Temperature).AlH());},A1Z:function(Atl){if(Atl===1)return this.PF;else if(
Atl===2)return this.PG;else return null;},_Init:function(aArg){C.Aco._Init.call(
this,aArg);this.__proto__=C.AUA;this.AlJ=5000;this.AlO=3000;this.T(A.aaR(A.acf.Arn
));this.Background.H(Afy);this.V.H(BF);this.V.R(A.aaR(A.acf.AGR));this.V.A6(0x12
);this.Init(aArg);},_ReInit:function(){C.Aco._ReInit.call(this);this.T(A.aaR(A.acf.
Arn));this.V.R(A.aaR(A.acf.AGR));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa7:null,Aa$:null,Aa9:
null,Background:null,Aa6:null,Aa_:null,Aa8:null,AjC:null,Ars:null,VI:null,A4:0,BzX:
function(G){if(this.AjC.CO===6){if(this.A4===1)this.AnE(2);else if(this.A4===2)this.
AnE(3);else this.AnE(1);}else if(this.AjC.CO===7){if(this.A4===3)this.AnE(2);else
if(this.A4===2)this.AnE(1);else this.AnE(3);}},AnE:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa6.M);break;case 2:this.
Background.H(this.Aa_.M);break;case 1:this.Background.H(this.Aa8.M);break;default:
this.Background.H(Aon);}},IW:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hk._Init.
call(this.Aa7={I:this},0);A.acg.Hk._Init.call(this.Aa$={I:this},0);A.acg.Hk._Init.
call(this.Aa9={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Ael._Init.call(this.Aa6={I:this},0);A.acg.Ael._Init.call(this.Aa_={I:this},0);A.
acg.Ael._Init.call(this.Aa8={I:this},0);A.Core.BM._Init.call(this.AjC={I:this},0
);A.Core.BM._Init.call(this.Ars={I:this},0);A.Graphics.AMH._Init.call(this.VI={I:
this},0);this.__proto__=C.Rating;this.H(AVT);this.Aa7.H(AHg);this.Aa7.L(A.jb.Text
);this.Aa7.AnC(Ala);this.Aa7.Ng(3);this.Aa7.Z(true);this.Aa$.H(AHh);this.Aa$.L(A.
jb.Text);this.Aa$.AnC(Ala);this.Aa$.Ng(3);this.Aa$.Z(true);this.Aa9.H(AHi);this.
Aa9.L(A.jb.Text);this.Aa9.AnC(Ala);this.Aa9.Ng(3);this.Aa9.Z(true);this.Background.
H(Aon);this.Background.L(A.jb.AV);this.Aa6.H(AHg);this.Aa6.L(A.jb.E1);this.Aa6.AnC(
Ala);this.Aa6.Z(true);this.Aa_.H(AHh);this.Aa_.L(A.jb.H6);this.Aa_.AnC(Ala);this.
Aa_.Z(true);this.Aa8.H(AHi);this.Aa8.L(A.jb.Gf);this.Aa8.AnC(Ala);this.Aa8.Z(true
);this.AjC.Filter=147;this.Ars.Filter=1;this.VI.BlG(360);this.VI.BmW(22);this.VI.
Bm6(2);this.J(this.Aa7,0);this.J(this.Aa$,0);this.J(this.Aa9,0);this.J(this.Background
,0);this.J(this.Aa6,0);this.J(this.Aa_,0);this.J(this.Aa8,0);this.Aa7.Zv(this.VI
);this.Aa$.Zv(this.VI);this.Aa9.Zv(this.VI);this.Background.Aw(A.aaL(A.ach.NR));
this.Aa6.Zv(this.VI);this.Aa_.Zv(this.VI);this.Aa8.Zv(this.VI);this.AjC.BN=[this
,this.BzX];this.Ars.BN=[this,this.IW];},_Done:function(){this.__proto__=A.Core.P;
this.Aa7._Done();this.Aa$._Done();this.Aa9._Done();this.Background._Done();this.
Aa6._Done();this.Aa_._Done();this.Aa8._Done();this.AjC._Done();this.Ars._Done();
this.VI._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa7._ReInit();this.Aa$._ReInit();this.Aa9._ReInit();this.Background.
_ReInit();this.Aa6._ReInit();this.Aa_._ReInit();this.Aa8._ReInit();this.AjC._ReInit(
);this.Ars._ReInit();this.VI._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ars)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asq={Aki:null,Asb:null,Background:null,TN:null,TI:null,AbY:null,AbX:null,AbW:
null,Acu:null,Act:null,Acs:null,Acj:null,Aci:null,AbR:null,AbQ:null,Ab$:null,Ab_:
null,Aqz:null,Init:function(aArg){},BjF:function(G){this.AbY.R(AVU);this.AbX.R(A.
jV);this.AbW.R(A.jV);this.Acu.R(AHj);this.Act.R(A.jV);this.Acs.R(A.jV);this.Acj.
R(A.jV);this.Aci.R(A.jV);this.AbR.R(A.jV);this.AbQ.R(A.jV);this.Ab$.R(A.jV);this.
Ab_.R(A.jV);},Bny:function(G){this.TI.Z(true);this.TN.Z(true);var IA=this.Ij();if(
!IA)return;this.TN.R(IA.GetFPS().toFixed()+AVV);this.TI.R(AVW);this.TI.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Aki={I:this},0);A.Core.Timer._Init.call(this.Asb={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TN={I:this},0);A.acg.
Text._Init.call(this.TI={I:this},0);A.acg.Text._Init.call(this.AbY={I:this},0);A.
acg.Text._Init.call(this.AbX={I:this},0);A.acg.Text._Init.call(this.AbW={I:this}
,0);A.acg.Text._Init.call(this.Acu={I:this},0);A.acg.Text._Init.call(this.Act={I:
this},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acj={
I:this},0);A.acg.Text._Init.call(this.Aci={I:this},0);A.acg.Text._Init.call(this.
AbR={I:this},0);A.acg.Text._Init.call(this.AbQ={I:this},0);A.acg.Text._Init.call(
this.Ab$={I:this},0);A.acg.Text._Init.call(this.Ab_={I:this},0);A.acg.AK._Init.call(
this.Aqz={I:this},0);this.__proto__=C.Asq;this.H(AcN);this.Ar(false);this.Aki.PO(
2000);this.Aki.Wx(1);this.Aki.Ar(true);this.Asb.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcN);this.Background.L(0x78000000);this.TN.H(AVX);this.TN.A6(
0x14);this.TN.R(A.jV);this.TN.L(0xFFFFFC00);this.TN.Z(false);this.TI.H(AVY);this.
TI.A6(0x11);this.TI.R(A.jV);this.TI.Z(false);this.AbY.H(AHk);this.AbY.A6(0x11);this.
AbY.R(A.jV);this.AbX.H(AsY);this.AbX.A6(0x11);this.AbX.R(A.jV);this.AbW.H(AHl);this.
AbW.A6(0x14);this.AbW.R(A.jV);this.Acu.H(AHm);this.Acu.A6(0x11);this.Acu.R(A.jV);
this.Act.H(Ax7);this.Act.A6(0x11);this.Act.R(A.jV);this.Acs.H(AHn);this.Acs.A6(0x14
);this.Acs.R(A.jV);this.Acj.H(Ax8);this.Acj.A6(0x11);this.Acj.R(A.jV);this.Aci.H(
AVZ);this.Aci.A6(0x14);this.Aci.R(A.jV);this.AbR.H(AV0);this.AbR.A6(0x11);this.AbR.
R(A.jV);this.AbQ.H(AV1);this.AbQ.A6(0x14);this.AbQ.R(A.jV);this.Ab$.H(AV2);this.
Ab$.A6(0x11);this.Ab$.R(A.jV);this.Ab_.H(AHo);this.Ab_.A6(0x14);this.Ab_.R(A.jV);
this.Aqz.H(AV3);this.J(this.Background,0);this.J(this.TN,0);this.J(this.TI,0);this.
J(this.AbY,0);this.J(this.AbX,0);this.J(this.AbW,0);this.J(this.Acu,0);this.J(this.
Act,0);this.J(this.Acs,0);this.J(this.Acj,0);this.J(this.Aci,0);this.J(this.AbR,
0);this.J(this.AbQ,0);this.J(this.Ab$,0);this.J(this.Ab_,0);this.J(this.Aqz,0);this.
Aki.Mx=[this,this.BjF];this.Asb.Mx=[this,this.Bny];this.TN.S(A.aaL(A.fl.Ak));this.
TI.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.
AbW.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.
Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));this.
AbR.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));this.
Ab_.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Aki._Done();this.Asb._Done();this.Background._Done();this.TN._Done();this.TI.
_Done();this.AbY._Done();this.AbX._Done();this.AbW._Done();this.Acu._Done();this.
Act._Done();this.Acs._Done();this.Acj._Done();this.Aci._Done();this.AbR._Done();
this.AbQ._Done();this.Ab$._Done();this.Ab_._Done();this.Aqz._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Aki._ReInit();this.
Asb._ReInit();this.Background._ReInit();this.TN._ReInit();this.TI._ReInit();this.
AbY._ReInit();this.AbX._ReInit();this.AbW._ReInit();this.Acu._ReInit();this.Act.
_ReInit();this.Acs._ReInit();this.Acj._ReInit();this.Aci._ReInit();this.AbR._ReInit(
);this.AbQ._ReInit();this.Ab$._ReInit();this.Ab_._ReInit();this.Aqz._ReInit();this.
TN.S(A.aaL(A.fl.Ak));this.TI.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.
S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.
S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.
S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.Ab$.
S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGz={FE:null,Dj:null,Au:null,Js:null,HJ:null,Uc:null,Bc:null,Si:null,Gt:null
,Gs:null,FU:0,A8:0,Bjd:false,Init:function(aArg){},Ai:function(Ae){C.Dt.Ai.call(
this,Ae);this.Ht.Z(false);this.H2.Z(false);if(!!this.Dj){this.Si.R(this.Au.Format(
O4));this.Uc.R(this.Au.Format(Ax9));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(this.
Si.M);this.HJ.L(A.jb.Bm);this.Si.L(this.Background.AQ);this.Uc.L(A.jb.Bm);}else if(
this.A8===2){this.HJ.Z(true);this.HJ.H(this.Uc.M);this.HJ.L(A.jb.Bm);this.Si.L(A.
jb.Bm);this.Uc.L(this.Background.AQ);}else{this.HJ.Z(false);this.Si.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uc.L(this.V.AQ);}},Qm:function(G){if(this.FB===1)A.pe([
this,this.U8],this);else if(this.FB===4)A.pe([this,this.AiC],this);else if(this.
FB===5)A.pe([this,this.Ain],this);C.Dt.Qm.call(this,G);},J_:function(G){switch(this.
A8){case 0:C.Dt.J_.call(this,G);break;case 2:break;default:this.Ads(this);}},J5:
function(G){switch(this.A8){case 0:C.Dt.J5.call(this,G);break;default:this.Aim(this
);}},Adu:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab7:
function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adu],this.Dj
,0);this.Dj=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);
},Ui:function(E){if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.FU);this.
An();},Ads:function(G){this.FB=1;this.An();if(this.Bo.Bw){A.pe([this,this.U8],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},U8:function(G){this.Ew(this.A8+1);},Al0:
function(G){this.FB=4;this.An();if(this.Bo.Bw){A.pe([this,this.AiC],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},AlZ:function(G){this.FB=5;this.An();if(this.Bo.Bw){
A.pe([this,this.Ain],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiC:function(G){
var B;var F;var BQ=this.FU;if(this.A8===1)this.Au.Anx(this.Au.AjS+1);if(this.A8===
2)this.Au.AnA(this.Au.AvV+1);this.Au.AnD(0);this.Ui(((B=(this.Au.JN()|0))<0)?B+0x100000000:
B);if(this.FU!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.
Dj,0);}},Ain:function(G){var B;var F;var BQ=this.FU;if(this.A8===1)this.Au.Anx(this.
Au.AjS-1);if(this.A8===2)this.Au.AnA(this.Au.AvV-1);this.Au.AnD(0);this.Ui(((B=(
this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FU!==BQ){if(!!this.Dj)(F=this.Dj,F[
2].call(F[0],this.FU));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FE.AkO((F=this.N,F[1].call(F[
0])));}},FP:function(G){this.Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){
var F;if(!this.A8)this.FE.Ajx((F=this.N,F[1].call(F[0])));this.A8=EO;this.Bjd=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.
Bw=!!this.A8;this.An();},Aim:function(G){if(this.A8>1)this.Ew(this.A8-1);},_Init:
function(aArg){C.Dt._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BM._Init.call(this.Js={I:this},0);A.acg.AK._Init.call(this.HJ={I:this}
,0);A.acg.Text._Init.call(this.Uc={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Si={I:this},0);A.Core.BM._Init.call(this.Gt={I:this
},0);A.Core.BM._Init.call(this.Gs={I:this},0);this.__proto__=C.AGz;this.H(UT);this.
V.R(AV4);this.V.L(A.jb.Bm);this.Ht.Z(false);this.H2.Z(false);this.Js.Filter=1;this.
HJ.H(AV5);this.HJ.L(0x55FFFFFF);this.Uc.H(AV6);this.Uc.I7(true);this.Bc.H(AV7);this.
Bc.A6(0x14);this.Bc.R(AV8);this.Si.H(AV9);this.Si.I7(true);this.Si.A6(0x14);this.
Gt.Filter=4;this.Gt.Bw=false;this.Gs.Filter=5;this.Gs.Bw=false;this.J(this.HJ,0);
this.J(this.Uc,0);this.J(this.Bc,0);this.J(this.Si,0);this.Js.BN=[this,this.Ads];
this.Uc.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Si.S(A.aaL(A.fl.EK));this.
Gt.BN=[this,this.Al0];this.Gt.D1=[this,this.AiC];this.Gs.BN=[this,this.AlZ];this.
Gs.D1=[this,this.Ain];this.FE=A._NewObject(C.Aep,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dt;this.Au._Done();this.Js._Done();this.HJ._Done();this.Uc._Done(
);this.Bc._Done();this.Si._Done();this.Gt._Done();this.Gs._Done();C.Dt._Done.call(
this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Au._ReInit();this.Js._ReInit(
);this.HJ._ReInit();this.Uc._ReInit();this.Bc._ReInit();this.Si._ReInit();this.Gt.
_ReInit();this.Gs._ReInit();this.Uc.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Si.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((
B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmN:null,AqO:null,El:null,Text:null,String:A.jV,Bdf:A.jV,Kf:0x12
,AK8:0,AQ:0xFFFFFFFF,N4:0,AUi:0,A_P:0,Bdg:true,GY:function(CN){var LJ=(A.Core.ARj.
isPrototypeOf(CN)?CN:null);if(!!LJ)this.BB8(this);return A.Core.P.GY.call(this,CN
);},Bk:function(aSize){A.Core.P.Bk.call(this,aSize);A.pe([this,this.Aji],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bdg){this.Bdf=E;this.Bdg=false;
}this.AK8=E.length;A.pe([this,this.Aji],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Aji],this);},A2:function(E){if(this.AmN===E)return;this.
AmN=E;A.pe([this,this.Aji],this);},Cu:function(E){if(this.AqO===E)return;this.AqO=
E;A.pe([this,this.Aji],this);},A6:function(E){if(E===this.Kf)return;this.Kf=E;this.
Text.A6(E);},Aji:function(G){var B;var ALc=0;if(!this.AK8){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KS(false);if(!!this.B6){ALc=
this.B6.Yr(this.String,0,this.AK8);if(ALc<(((B=this.M)[2]-B[0])-(2*this.Text.I_)
)){this.Text.S(this.B6);this.Text.AwX(this.N4);return;}}this.Text.KS(true);if(!!
this.AmN){ALc=this.AmN.Yr(this.String,0,this.AK8);this.Text.S(this.AmN);this.Text.
AwX(this.AUi);if((ALc<(((B=this.M)[2]-B[0])-(2*this.Text.I_)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqO){this.Text.S(this.AqO);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.AwX((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BB8:function(G){this.R(this.Bdf);},Q1:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q1(E);},ASg:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Afb:function(AoL){return A.abf(this.M.slice(
0,2),this.Text.Afb(AoL));},AwX:function(E){if(this.N4===E)return;this.N4=E;A.pe([
this,this.Aji],this);},BmY:function(E){if(this.AUi===E)return;this.AUi=E;A.pe([this
,this.Aji],this);},BmZ:function(E){if(this.A_P===E)return;this.A_P=E;A.pe([this,
this.Aji],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHp);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHp);this.Text.R(Rj);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjQ={Y:null,II:null,AeG:null,I3:null,M6:null,AeA:null,AeF:null,AeE:null,AeB:
null,AeD:null,AeC:null,M8:null,NT:null,Mp:null,De:function(E){C.Ys.De.call(this,
E);this.II.L(E);this.AeG.L(E);this.I3.L(E);this.M6.L(E);this.Mp.L(E);this.AeA.L(
E);this.M8.L(E);this.NT.L(E);this.AeF.L(E);this.AeE.L(E);this.AeB.L(E);this.AeD.
L(E);this.AeC.L(E);},DY:function(G){C.Ys.DY.call(this,G);this.XK(8,1,this.M6);this.
XK(12,1,this.Mp);this.XK(11,1,this.AeA);this.XK(7,1,this.M8);this.XK(14,1,this.NT
);this.XK(1,4,this.II);this.XK(1,1,this.AeG);this.XK(4,1,this.I3);this.XK(22,1,this.
AeF);this.XK(26,1,this.AeE);this.XK(30,1,this.AeB);this.XK(19,1,this.AeD);this.XK(
31,1,this.AeC);this.Text.Z(!this.Y.TL(null,0x1));},XK:function(AJi,Eb,AfO){var AA4=
false;if(!!A._GetAutoObject(A.Device.Device).Am.Filter){var Adf=A._GetAutoObject(
A.Device.Device).Am.Filter.DQ(AJi,Eb);if(!!Adf){AA4=true;switch(AJi){case 14:{var
Azj=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adf)?Adf:null);if(!!Azj)AfO.
Aw(A._GetAutoObject(A.Device.Converter).A4N(Azj.A4));}break;case 7:{var Azj=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adf)?Adf:null);if(!!Azj)AfO.Aw(A._GetAutoObject(
A.Device.Converter).AmP(Azj.A4));}break;case 1:if(Eb===4)AfO.Aw(A.aaL(A.ach.ADz)
);else if(Adf.Operator===4)AA4=false;break;case 22:switch(Adf.Operator){case 0:case
3:AfO.Aw(A.aaL(A.ach.AQx));break;default:AfO.Aw(A.aaL(A.ach.AjW));}break;case 26:
switch(Adf.Operator){case 0:case 3:AfO.Aw(A.aaL(A.ach.AQv));break;default:AfO.Aw(
A.aaL(A.ach.Avs));}break;default:;}}else if((AJi===1)&&(Eb===4)){AA4=true;AfO.Aw(
A.aaL(A.ach.Aex));}}else if((AJi===1)&&(Eb===4)){AA4=true;AfO.Aw(A.aaL(A.ach.Aex
));}AfO.Z(AA4);},_Init:function(aArg){C.Ys._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.II={I:this},0);A.acg.Ap._Init.call(
this.AeG={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},0);A.acg.Ap._Init.call(
this.M6={I:this},0);A.acg.Ap._Init.call(this.AeA={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.AeB={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeC={I:this},0);A.acg.Ap._Init.call(this.M8={I:this},0);A.acg.Ap._Init.call(
this.NT={I:this},0);A.acg.Ap._Init.call(this.Mp={I:this},0);this.__proto__=C.AjQ;
this.Y.AZ(0x3F);this.Y.H(AHq);this.Y.JO(3);this.II.H(Aoo);this.AeG.H(Ax_);this.AeG.
Aj(true);this.I3.H(AV_);this.I3.Aj(true);this.M6.H(AV$);this.M6.Aj(true);this.AeA.
H(AWa);this.AeA.Aj(true);this.AeF.H(AHr);this.AeF.Aj(true);this.AeE.H(AHr);this.
AeE.Aj(true);this.AeB.H(AWb);this.AeB.Aj(true);this.AeD.H(AHs);this.AeD.Aj(true);
this.AeC.H(AHs);this.AeC.Aj(true);this.M8.H(AHt);this.M8.Aj(true);this.NT.H(AHu);
this.NT.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mp.H(AHt);this.Mp.Aj(true);
this.JU(this.Gr,-3);this.JU(this.D2,-3);this.JU(this.A_,-3);this.JU(this.AP,-2);
this.J(this.Y,-2);this.J(this.II,-2);this.J(this.AeG,-2);this.J(this.I3,-2);this.
J(this.M6,-2);this.J(this.AeA,-2);this.J(this.AeF,-2);this.J(this.AeE,-2);this.J(
this.AeB,-2);this.J(this.AeD,-2);this.J(this.AeC,-2);this.J(this.M8,-2);this.J(this.
NT,-2);this.J(this.Mp,0);this.II.Aw(A.aaL(A.ach.Aex));this.AeG.Aw(A.aaL(A.ach.AQm
));this.I3.Aw(A.aaL(A.ach.APN));this.M6.Aw(A.aaL(A.ach.ADt));this.AeA.Aw(A.aaL(A.
ach.AbD));this.AeF.Aw(A.aaL(A.ach.AjW));this.AeE.Aw(A.aaL(A.ach.Avs));this.AeB.Aw(
A.aaL(A.ach.AQk));this.AeD.Aw(A.aaL(A.ach.AQl));this.AeC.Aw(A.aaL(A.ach.AQj));this.
M8.Aw(A.aaL(A.ach.ADv));this.NT.Aw(A.aaL(A.ach.Avx));this.Mp.Aw(A.aaL(A.ach.ADC)
);},_Done:function(){this.__proto__=C.Ys;this.Y._Done();this.II._Done();this.AeG.
_Done();this.I3._Done();this.M6._Done();this.AeA._Done();this.AeF._Done();this.AeE.
_Done();this.AeB._Done();this.AeD._Done();this.AeC._Done();this.M8._Done();this.
NT._Done();this.Mp._Done();C.Ys._Done.call(this);},_ReInit:function(){C.Ys._ReInit.
call(this);this.Y._ReInit();this.II._ReInit();this.AeG._ReInit();this.I3._ReInit(
);this.M6._ReInit();this.AeA._ReInit();this.AeF._ReInit();this.AeE._ReInit();this.
AeB._ReInit();this.AeD._ReInit();this.AeC._ReInit();this.M8._ReInit();this.NT._ReInit(
);this.Mp._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Ys.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amp={H5:null,CF:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);this.H5.Gm();this.H5.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Ra.CF.call(this,G);},An5:function(){C.Ra.
An5.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).By_(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.C8.L(A._GetAutoObject(
A.acj.Temperature).Bzb(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Kv));this.JJ.L(A._GetAutoObject(A.acj.Temperature).By$(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.HB.L(A.
_GetAutoObject(A.acj.Temperature).Bza(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Kv));this.MD.L(this.JJ.AQ);this.TemperatureUnit.
L(this.JJ.AQ);}break;default:;}},AcF:function(){C.Ra.AcF.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cs(A.aaL(A.ach.AQF));this.N.C6(A.aaL(
A.ach.AmY));}break;case 4:{this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvF));}break;default:;
}},WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Kv>3240)&&(A._GetAutoObject(A.Device.
Device).Kv<5460)){A._GetAutoObject(A.Device.Device).AhF();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H5.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Kv);var B1=A._GetAutoObject(A.Device.Converter).AsE(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv);this.H5.OnSetRatingTemperature(
B1);this.H5.Cq(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fu();
}break;case 4:this.AKB(this);break;default:;}},AkU:function(G){C.Ra.AkU.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Ds(9);break;case 4:this.AKB(this);break;default:;}},AxN:function(
){C.Ra.AxN.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JJ.R(A._GetAutoObject(A.acj.Temperature).Bzg(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));break;default:;}},AxO:function(
){C.Ra.AxO.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WA(A._GetAutoObject(A.acj.Temperature).Bzc(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Kv));this.Jb.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16711680
);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);}},AUu:function(){this.C8.Aw(
A.aaL(A.ach.AvE));this.C8.Cv(A._GetAutoObject(A.acj.Temperature).Bzh(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.NR.Cv(
0);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.Amp;this.Dq(
C.IG);this.H5=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Ra._Mark.
call(this,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahr={N2:null,DK:null,Ih:null,Bc:null,Auq:null,String:A.jV,AxB:A.jV,Mt:7,Aj$:
2,KT:0,AUH:false,Init:function(aArg){},Bk:function(aSize){A.Core.P.Bk.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aj$,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ih.S(this.DK.B6);this.Ih.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WF],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahl:function(
E){if(this.AxB===E)return;this.AxB=E;this.Ih.R(E);},Ab6:function(E){this.Mt=E;if(
E<10)this.AS6(2);else if(E<40)this.AS6(1);else this.AS6(0);A.pe([this,this.WF],this
);},WF:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mt>1){var
Ada=this.AOM();var A1T=this.AOK();var App=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AzZ;var AK1;var At1;var Al7=null;if(!!this.N2&&(this.N2.AY>0))Al7=this.N2.K0;
while((Ada>=A1T)&&(Ada>0)){var AtC=A._NewObject(C.Ajr,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj$)*(((Ada-A1T)/86400)|0))/this.Mt)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj$)*((((Ada-A1T)/86400)|0)+1))/this.Mt)|0;while(!!Al7&&(Al7.Timestamp>=
Ada)){if(Al7.Timestamp<(Ada+86400))AtC.Or(Al7.A4,Al7.Timestamp);Al7=Al7.Ah;}var Aub=
0;if(AtC.AY>0)Aub=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtC.AY
)|0;else if(this.Mt<10){Aub=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At1=A._NewObject(A.acg.Text,0);At1.H([x1,App,x2,App+Aub]);At1.S(A.aaL(A.fl.Bh));
At1.L(A.jb.Text);At1.R(A.aaR(A.acf.Ae9));this.J(At1,0);}var AJN=AtC.K0;var O=0;while(
!!AJN){if(O>=AtC.AY)throw new Error(AWc);AzZ=A._NewObject(A.acg.AK,0);AzZ.L(A._GetAutoObject(
A.acj.Assessment).Qj(AJN.A4));if(O===(AtC.AY-1))AzZ.H([x1,App+(O*Aub),x2,this.Bc.
M[1]]);else AzZ.H([x1,App+(O*Aub),x2,App+((O+1)*Aub)]);this.J(AzZ,0);AJN=AJN.Ah;
O=O+1;}if(this.AUH){var BxX=A._GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(
A.Device.Helper).Dv());var BxW=A._GetAutoObject(A.Device.Helper).Aqo(Ada);if(BxX===
BxW){var ALt=A._NewObject(A.acg.Ael,0);ALt.L(A.jb.Text);var BdD=(x1+this.Aj$)+(((
x2-x1)/2)|0);ALt.H([BdD-4,this.Bc.M[1]-4,BdD+4,this.Bc.M[1]]);ALt.Zv(this.Auq);this.
J(ALt,0);}}Ada=Ada-86400;if(this.Aj$>0){AK1=A._NewObject(A.acg.AK,0);AK1.H([x1,App
,x1+this.Aj$,App+((((B=this.M)[3]-B[1])/2)|0)]);AK1.L(A.jb.Bc);this.J(AK1,0);}}}
},Ab8:function(E){this.N2=E;A.pe([this,this.WF],this);},AS6:function(E){if(this.
Aj$===E)return;this.Aj$=E;A.pe([this,this.WF],this);},De:function(E){if(this.KT===
E)return;this.KT=E;this.DK.L(E);this.Ih.L(E);},AOK:function(){var B;return this.
AOM()-(((((B=this.Mt)<0)?B+0x100000000:B)-1)*86400);},AOM:function(){return A._GetAutoObject(
A.Device.Converter).AhJ();},Bm2:function(E){if(this.AUH===E)return;this.AUH=E;A.
pe([this,this.WF],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ih={I:this},0
);A.acg.AK._Init.call(this.Bc={I:this},0);C.AxL._Init.call(this.Auq={I:this},0);
this.__proto__=C.Ahr;this.H(BF);this.Ar(false);this.DK.H(AHv);this.DK.Hh(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ih.H(AHv);this.Ih.Hh(5);this.Ih.A6(0x14);this.
Ih.L(A.jb.Text);this.Bc.H(AWd);this.Bc.L(A.jb.Bc);this.KT=A.jb.Text;this.Auq.H(AHw
);this.J(this.DK,0);this.J(this.Ih,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ih.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ih._Done();this.Bc._Done();this.Auq._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ih._ReInit();this.Bc._ReInit();this.Auq._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ih.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Auq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4T={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4T;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajr={K0:null,MS:null,AY:0,Or:
function(A7,Qa){var Hb;Hb=A._NewObject(C.A4T,0);Hb.A4=A7;Hb.Timestamp=Qa;if(!this.
K0){this.K0=Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajr;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MG],this);},DE:function(G){var B;var Fc=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;
default:;}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.DJ(this);},AlX:function(G){A._GetAutoObject(C.A$
).Fu();},ApK:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agm)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agm,this);},Fe:function(G){var B;this.
Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},DJ:function(G){var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GS){this.N.Hu(A.jV);this.N.CV(GS.AxE);this.N.Ja.Dr(255);this.N.HQ.Dr(GS.Axb);this.
N.AE3(GS.Avf);this.N.Anv(GS.AmO);this.N.CY(GS.AQe);this.N.C6(GS.Aq6);GS.A2V(this
);}},MG:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rk);this.Background.L(A.jb.CS);this.N.H(Xc);this.
N.Ar(false);this.N.Z(true);this.Y.H(E$);this.Y.JO(1);this.Ay.H(Iq);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fe];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATN={Nz:null,ASN:null,Ad0:null,VC:null,GO:null,PopupTimeout:null,Aca:null,Agx:
null,PopupIdToString:null,Aty:null,Text:A.jV,AkH:A.jV,AJ7:A.jV,Ak1:0,ALe:-1,Azi:-
1,AKI:0,ATP:0,A12:false,CP:function(){this.A_d(this.PopupIdToString.BH(this.ATP)
);},Init:function(aArg){this.Bor(this);},Bgq:function(G){var B;if(this.Ak1>0){this.
A_r((this.Ak1/1000)|0);this.PopupTimeout.Wx(0);this.PopupTimeout.PO(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxA(this);},Bgm:function(G){var Qt=this.
Text;var AfR=this.AkH;var AKG=A.abi(16,A.jV,null);var index=0;var Azd=0;while(AfR
!==A.jV){Azd=AfR.indexOf(A.Device.PopupParamSeparator,0);if(Azd!==-1){AKG.Set(index
,A.ab1(AfR,Azd,(AfR.length-Azd)+1));AfR=A.ab1(AfR,0,Azd+1);index=index+1;if(index>=
16){A.ab5("%s",(AWe+AfR)+AWf);AfR=A.jV;}}else{AKG.Set(index,AfR);AfR=A.jV;}}index=
0;while(index<Qt.length){if((Qt.charCodeAt(index)||0)===0x7B){var Bde=Qt.indexOf(
String.fromCharCode(0x7D),index);if(Bde===-1){A.ab5("%s",(((AWg+Qt)+AWh)+index.toFixed(
))+Afw);index=Qt.length;}else{var Be9=(Bde-index)-1;var A3u=A.abW(Qt,index+1,Be9
);var AKF=A.wz(A3u,-1,10);Qt=A.ab1(Qt,index,Be9+2);if(A3u===AWi)this.Bnh(index);
else if(((AKF>0)&&(AKF<=16))&&(this.AkH!==A.jV)){Qt=A.abU(Qt,AKG.Get(AKF-1),index
);if(this.A12===true)this.Bng(A.wz(AKG.Get(AKF-1),0,10));}else A.ab5("%s",(AWj+A3u
)+AWk);}}index=index+1;}this.Bnf(Qt);},CF:function(G){A.pe([this,this.Bgq],this);
},Ai:function(Ae){var B;this.Ad0.H(A.aaT(this.GO.Db(),AhS));this.VC.H(A.aaT(this.
GO.Db(),AhS));if(!!this.Nz){this.Nz.H(A.abM(this.Nz.M,this.GO.M[0]));this.Nz.H(A.
abO(this.Nz.M,this.GO.M[3]+10));this.Nz.H(A.abL(this.Nz.M,(B=this.GO.M)[2]-B[0])
);this.Nz.H(A.abI(this.Nz.M,8));this.Ad0.H(A.abh(A.aaT(this.GO.Db(),AhS),AHx));this.
VC.H(A.abh(A.aaT(this.GO.Db(),AhS),AHx));}else{this.Ad0.H(A.aaT(this.GO.Db(),AhS
));this.VC.H(A.aaT(this.GO.Db(),AhS));}},DE:function(G){var Jy=(A.Core.BM.isPrototypeOf(
G)?G:null);if((Jy.CO===4)&&((this.VC.M[1]+this.M[1])<this.M[1])){this.GO.H(A.abO(
this.GO.M,this.GO.M[1]+28));this.An();}else if((Jy.CO===5)&&((this.VC.M[3]+this.
M[1])>this.N.M[1])){this.GO.H(A.abO(this.GO.M,this.GO.M[1]-28));this.An();}if((Jy.
CO===6)&&!!this.D_().CB)this.D_().AFa(1);else if((Jy.CO===7)&&!!this.D_().Cl)this.
D_().AFa(3);},IW:function(G){switch(this.D_().Aha){case 1:this.AlX(this);break;case
3:this.ApK(this);break;case 2:this.AAv(this);break;case 0:break;default:A.ab5("%s%e"
,AWl,this.D_().Aha);}},AlX:function(G){var B;(B=this.D_().CB)?B[1].call(B[0],this
):null;},ApK:function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},AAv:
function(G){var B;(B=this.D_().Ck)?B[1].call(B[0],this):null;},LO:function(G){this.
N.I4.L((this.N.I4.AQ&0x00FFFFFF)|(100<<24));},E3:function(G){var B;this.PopupTimeout.
AxA(this);},A_d:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgm],this);},BAj:function(G){var B;this.A_r(this.Azi-1);if(this.Azi<=0){this.PopupTimeout.
AxA(this);(B=this.ASN)?B[1].call(B[0],this):null;}},A_f:function(E){if(this.Ak1===
E)return;this.Ak1=E;A.pe([this,this.Bgq],this);},A92:function(E){if(this.AkH===E
)return;this.AkH=E;A.pe([this,this.Bgm],this);},Bnf:function(E){if(this.AJ7===E)
return;this.AJ7=E;this.ABl(this);this.Bx4(this);},ABl:function(G){if((this.Azi!==-
1)&&(this.ALe!==-1)){var ByU=this.Aty.Format(AWm);this.GO.R(A.abU(this.AJ7,ByU,this.
ALe));}else this.GO.R(this.AJ7);this.GO.H(AHy);},Bnh:function(E){if(this.ALe===E
)return;this.ALe=E;this.ABl(this);},A_r:function(E){if(this.Azi===E)return;this.
Azi=E;this.Aty.AFF(E);A.pe([this,this.ABl],this);},Bx4:function(G){this.GO.Db();
if(this.GO.M[1]<=this.M[1])this.GO.H(A.abO(this.GO.M,28));this.An();},A_t:function(
E){if(this.A12===E)return;this.A12=E;if(E===true)A.pe([this,this.BAT],this);},BAT:
function(G){if(!this.Nz){this.Nz=A._NewObject(A.acr.ADi,0);this.Nz.F0(0);this.Nz.
EV(100);this.Nz.OnSetAppearance(this.Aca);this.J(this.Nz,0);this.Ahu(this.Nz,this.
GO);}this.Nz.By(this.AKI);},Bng:function(E){if(this.AKI===E)return;this.AKI=E;if(
!!this.Nz)this.Nz.By(this.AKI);},Bor:function(G){var B;this.N.Dr(0);this.Agx.AnT(
this);},BmS:function(E){if(this.ATP===E)return;this.ATP=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad0={I:this},0);A.acg.BU._Init.
call(this.VC={I:this},0);A.acg.Text._Init.call(this.GO={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADj._Init.call(this.Aca={I:this},
0);A.acl.Gh._Init.call(this.Agx={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.Aty={I:this},0);this.
__proto__=C.ATN;var B;this.H(Cd);this.Background.H(E$);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad0.H(AHz);this.
Ad0.L(A.jb.CK);this.VC.H(AHz);this.VC.Ng(2);this.VC.L(A.jb.Text);this.GO.H(AHy);
this.GO.Hh(10);this.GO.I7(true);this.GO.Bne(0);this.GO.KS(true);this.GO.L(A.jb.Text
);this.PopupTimeout.PO(0);this.Aca.A_k(0);this.Aca.A_i(A.jb.AV);this.Aca.A_h(0);
this.Aca.AFV(AHe);this.Agx.HM(1);this.Agx.B2=255;this.Agx.Cw=0;this.JU(this.Ej,-
1);this.J(this.Ad0,0);this.J(this.VC,0);this.J(this.GO,0);this.GO.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mx=[this,this.BAj];this.Aca.A_j(A.aaL(A.ach.NS));this.Aca.A_g(
A.aaL(A.ach.NS));this.Agx.Q=[B=this.N,B.Awe,B.AZ4];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad0._Done();this.VC._Done();this.GO._Done();this.PopupTimeout.
_Done();this.Aca._Done();this.Agx._Done();this.PopupIdToString._Done();this.Aty.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad0._ReInit();this.VC._ReInit();this.GO._ReInit();this.PopupTimeout._ReInit();this.
Aca._ReInit();this.Agx._ReInit();this.PopupIdToString._ReInit();this.Aty._ReInit(
);this.GO.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASN)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aty)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ml={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FM=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FM=A.jb.Text;
GQ=A.jb.Bm;}if(!this.LI){this.Background.L(FM);this.V.L(A.jb.AmZ);}else if(this.
Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.L(GQ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ml;},_className:"Application::DarkThemeMenuItem"
};C.Ane={Ady:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ane;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={XA:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);
this.Bx.Cl=[this,this.A2W];this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(
A.aaR(A.acf.Ok));this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.Aev));}return this.Bx;}
,A2W:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).IW(this);},CF:function(G){},AIG:function(s){this.CF(s);},E3:function(
G){},Ayy:function(s){this.E3(s);},_Init:function(aArg){C.Abi._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APJ={V7:
null,YP:null,YI:null,Init:function(aArg){this.Bb(this.V7);},Adq:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YP)A._GetAutoObject(A.Device.
Device).A9(6,true,A.jV,0,[this,this.BA8]);else if(Aa===this.V7)A._GetAutoObject(
A.Device.Device).A9(9,true,A.jV,0,[this,this.BBt]);else if(Aa===this.YI)A._GetAutoObject(
C.A$).Cg(4);else throw new Error(Ax$);A._GetAutoObject(A.Device.Device).Ds(0);},
BA8:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AGh();},BBt:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Axs();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ml._Init.call(this.V7={I:this},0);C.Ml._Init.call(this.YP={I:this
},0);C.Ml._Init.call(this.YI={I:this},0);this.__proto__=C.APJ;this.H(AcN);this.V7.
H(BF);this.V7.Ar(true);this.V7.T(A.aaR(A.acf.A_7));this.V7.Bg(true);this.YP.H(IR
);this.YP.Ar(true);this.YP.T(A.aaR(A.acf.A_O));this.YP.Bg(true);this.YI.H(P7);this.
YI.Ar(true);this.YI.T(A.aaR(A.acf.SN));this.YI.Bg(true);this.J(this.V7,0);this.J(
this.YP,0);this.J(this.YI,0);this.V7.AR=[this,this.Adq];this.YP.AR=[this,this.Adq
];this.YI.AR=[this,this.Adq];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V7._Done();this.YP._Done();this.YI._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V7._ReInit(
);this.YP._ReInit();this.YI._ReInit();this.V7.T(A.aaR(A.acf.A_7));this.YP.T(A.aaR(
A.acf.A_O));this.YI.T(A.aaR(A.acf.SN));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GG={AaF:null,OverlayMenu:null,WH:null,A3P:null
,La:null,A3t:null,AkI:null,N0:null,Az5:100,Init:function(aArg){var B;A.zX([this,
this.BeA],[B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyH],0);A.zX([this,this.Beu
],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZ2],0);A.zX([this,this.A2N],[B=A.
_GetAutoObject(A.Device.Device),B.Av5,B.AyA],0);A.zX([this,this.BzS],[B=A._GetAutoObject(
A.Device.Device),B.Av2,B.Ayz],0);A.zX([this,this.BzT],[B=A._GetAutoObject(A.Device.
Device),B.A8e,B.BaJ],0);A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device
),B.ASE,B.AZ_],0);A.zX([this,this.BeR],[B=A._GetAutoObject(A.Device.Device),B.Wu
,B.Xd],0);A.pe([this,this.BeA],this);A.pe([this,this.Beu],this);A.pe([this,this.
ApL],this);A.pe([this,this.BeR],this);this.A3P.As([B=this.WH,B.AEm,B.Zp]);this.J(
this.WH,0);this.Bb(this.WH);this.BxH(this);},Ai:function(Ae){},Beu:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AD$){if(!this.AaF){this.AaF=A._NewObject(
C.Asq,0);this.AaF.H(A.abJ(this.AaF.M,this.WH.M.slice(0,2)));this.AaF.H(A.abO(this.
AaF.M,this.WH.M[3]-((B=this.AaF.M)[3]-B[1])));this.J(this.AaF,1);}}else{if(!!this.
AaF)this.HN(this.AaF);this.AaF=null;}},BeA:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Ds(null);break;case 1:this.Ds(A._NewObject(
C.APJ,0));break;case 8:this.Ds(A._NewObject(C.AL1,0));break;case 2:this.Ds(A._NewObject(
C.ALY,0));break;case 3:this.Ds(A._NewObject(C.AL4,0));break;case 4:this.Ds(A._NewObject(
C.AT7,0));break;case 5:this.Ds(A._NewObject(C.AVB,0));break;case 6:this.Ds(A._NewObject(
C.ATI,0));break;case 7:this.Ds(A._NewObject(C.Amr,0));break;case 11:this.Ds(A._NewObject(
C.AMx,0));break;case 12:this.Ds(A._NewObject(C.AMw,0));break;case 9:this.Ds(A._NewObject(
C.ARD,0));break;case 10:this.Ds(A._NewObject(C.AMs,0));break;case 14:this.Ds(A._NewObject(
C.ARz,0));break;case 15:this.Ds(A._NewObject(C.ARA,0));break;case 13:this.Ds(A._NewObject(
C.ARB,0));break;case 16:this.Ds(A._NewObject(C.ATX,0));break;case 17:this.Ds(A._NewObject(
C.AMT,0));break;default:throw new Error(AWn+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Ds:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.WD).ArD(null);this.N0.AqE(this.OverlayMenu,A._GetAutoObject(
C.Axv),null,null,[B=this.OverlayMenu,B.Ayy],null,true);this.Bb(this.WH);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.AkK(this.OverlayMenu,A._GetAutoObject(C.Axu),null
,null,null,null,null,[B=this.OverlayMenu,B.AIG],null,false);this.Bb(this.N0);A._GetAutoObject(
C.WD).ArD(this.OverlayMenu.KR());}else if(!!this.La){this.Bb(this.N0);A._GetAutoObject(
C.WD).ArD(this.La.Akp().KR());}},Ahf:function(E){var B;if(this.La===E)return;if(
!!this.La){A._GetAutoObject(C.WD).ArD(null);this.N0.AqE(this.La.Akp(),A._GetAutoObject(
C.Afd),null,null,[B=this.La.Akp(),B.Ayy],null,false);this.Bb(this.WH);}this.La=E;
if(!!this.La){this.N0.AkK(this.La.Akp(),A._GetAutoObject(C.Afd),null,null,null,null
,null,[this,this.Blb],null,false);this.Bb(this.N0);A._GetAutoObject(C.WD).ArD(this.
La.Akp().KR());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
WD).ArD(this.OverlayMenu.KR());}},BxH:function(G){var B;var F;this.J(this.A3t,0);(
F=A._GetAutoObject(C.WD),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WD).M)[3]-B[1]))));this.ZE(this.N0);},A2N:function(G){if(A._GetAutoObject(A.Device.
Device).Amy)switch(A._GetAutoObject(A.Device.Device).KH){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Ahn(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa4<98)A._GetAutoObject(C.A$).Cg(4);}else{this.Az5=100;this.Bcl();}},BzS:
function(G){this.Bcl();},Bcl:function(){if(!A._GetAutoObject(A.Device.Device).Amy
){if(A._GetAutoObject(A.Device.Device).Aa4<=2){if(this.Az5>2)switch(A._GetAutoObject(
A.Device.Device).KH){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Ahn(38);
break;default:A._GetAutoObject(C.A$).Cg(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa4<=10){if(this.Az5>10)switch(A._GetAutoObject(A.Device.Device).KH){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Ahn(39);break;default:A._GetAutoObject(
C.A$).Cg(39);}}else if(A._GetAutoObject(A.Device.Device).Aa4<=20){if(this.Az5>20
)switch(A._GetAutoObject(A.Device.Device).KH){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Ahn(39);break;default:A._GetAutoObject(C.A$).Cg(39);}}else switch(A._GetAutoObject(
A.Device.Device).KH){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fu();break;default:;
}this.Az5=A._GetAutoObject(A.Device.Device).Aa4;}},BzT:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqr){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A9(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Ant(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A9(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Ant(0
);}break;default:A.ab5("%s",AWo+A._GetAutoObject(A.Device.Device).Aqr.toFixed());
}},ApL:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KH===5)A._GetAutoObject(C.A$).Ahn(3);break;
default:;}},BeR:function(G){switch(A._GetAutoObject(A.Device.Device).AhL){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Un(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WA(65535);A._GetAutoObject(A.Device.Device).Un(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WA(255);A._GetAutoObject(A.Device.Device).Un(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16776960);A._GetAutoObject(
A.Device.Device).Un(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WA(16711935
);A._GetAutoObject(A.Device.Device).Un(true);}break;default:A.ab5("%s",AWp+A._GetAutoObject(
A.Device.Device).AhL.toFixed());}},Blb:function(G){var B;this.La.Akp().CF(this);
this.La.BAh(this);},Bkf:function(){return this.La;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkI._Init.call(this.AkI={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GG;this.H(Cd);this.N0.H(Rk);this.J(this.N0,0);this.
WH=A._NewObject(C.WH,0);this.A3P=A._GetAutoObject(C.A$);this.AkI.ANy=[this,this.
Bkf,this.Ahf];this.A3t=A._GetAutoObject(C.WD);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkI._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkI._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaF)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3P)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3t)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abi={A_D:null,Bx:null,N:null,Cr:null,Am7:null,Am9:null,QN:null,Am8:null,Am5:
null,Am$:null,Am6:null,DE:function(G){var Fc=0;var X=this.AV;switch(this.Cr.CO){
case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;
}X=this.QD(X,Fc,0x14);if(!!X)this.Bb(X);},Bbg:function(s){this.DE(s);},AlX:function(
G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().Asl===false)
)return;A.pe(this.D_().CB,this);},AIT:function(s){this.AlX(s);},ApK:function(G){
var D5=(A.Core.BM.isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().ZD===false))return;
A.pe(this.D_().Cl,this);},AIW:function(s){this.ApK(s);},IW:function(G){if(this.QN.
Ach)return;},Atf:function(s){this.IW(s);},AAv:function(G){var D5=(A.Core.BM.isPrototypeOf(
G)?G:null);if(D5.Ach&&(this.D_().ZC===false))return;A.pe(this.D_().Ck,this);},AIV:
function(s){this.AAv(s);},D_:function(){if(!!this.KR())return this.Bx;else return this.
N;},KR:function(){return this.Bx;},GN:function(E){this.A_D=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BM._Init.
call(this.Cr={I:this},0);A.Core.BM._Init.call(this.Am7={I:this},0);A.Core.BM._Init.
call(this.Am9={I:this},0);A.Core.BM._Init.call(this.QN={I:this},0);A.Core.BM._Init.
call(this.Am8={I:this},0);A.Core.BM._Init.call(this.Am5={I:this},0);A.Core.BM._Init.
call(this.Am$={I:this},0);A.Core.BM._Init.call(this.Am6={I:this},0);this.__proto__=
C.Abi;this.H([0,0,C.Ast[0],C.Ast[1]]);this.N.H(Xc);this.N.Ar(false);this.N.Z(false
);this.Cr.Filter=147;this.Am7.Filter=26;this.Am9.Filter=28;this.QN.Filter=1;this.
Am8.Filter=27;this.Am5.Filter=44;this.Am$.Filter=9;this.Am6.Filter=42;this.J(this.
N,0);this.Cr.BN=[this,this.Bbg];this.Cr.D1=[this,this.Bbg];this.Am7.BN=[this,this.
AIT];this.Am7.D1=[this,this.AIT];this.Am9.BN=[this,this.AIW];this.Am9.D1=[this,this.
AIW];this.QN.BN=[this,this.Atf];this.QN.D1=[this,this.Atf];this.Am8.BN=[this,this.
AIV];this.Am8.D1=[this,this.AIV];this.Am5.BN=[this,this.AIT];this.Am5.D1=[this,this.
AIT];this.Am$.BN=[this,this.AIW];this.Am$.D1=[this,this.AIW];this.Am6.BN=[this,this.
AIV];this.Am6.D1=[this,this.AIV];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.Am7._Done();this.Am9._Done();this.QN._Done();this.
Am8._Done();this.Am5._Done();this.Am$._Done();this.Am6._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.Am7._ReInit();this.Am9._ReInit();this.QN._ReInit();this.Am8._ReInit(
);this.Am5._ReInit();this.Am$._ReInit();this.Am6._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_D)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axu={_Init:function(){A.acl.AGF._Init.call(this,0);this.Kf=0x22;this.Ad4=true;
this.AuU=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axv={_Init:function(){A.acl.AGF._Init.call(this,0);this.Kf=0x22;this.Ad4=true;
this.AuU=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUF={R9:function(){var B;var Ao=(A.acl.Ae7.isPrototypeOf(B=A.acl.Aei.R9.call(this
))?B:null);if(!Ao)throw new Error(AsZ);Ao.Cp.Cw=100;return Ao;},R8:function(){var
B;var Ao=(A.acl.Axc.isPrototypeOf(B=A.acl.Aei.R8.call(this))?B:null);if(!Ao)throw new
Error(AsZ);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aei._Init.call(this
,aArg);this.__proto__=C.AUF;},_className:"Application::ShadeTransition"};C.AmU={
AgY:null,SS:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC1:true,De:function(E){
C.BR.De.call(this,E);this.SS.L(E);this.HP.L(E);this.AgY.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Ae9)
);else this.HP.R(E.toFixed());},Ab4:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SS.R(A.aaR(A.acf.Ae9));else this.SS.R(E.toFixed());},DY:function(
G){},Nl:function(s){this.DY(s);},A9K:function(E){if(this.AC1===E)return;this.AC1=
E;this.SS.Z(this.AC1);this.AgY.Z(this.AC1);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.AgY={I:this},0);A.acg.Text._Init.call(this.SS={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmU;this.AgY.H(AWq);this.SS.H(AWr);this.SS.A6(0x11);this.
SS.R(A.aaR(A.acf.Ae9));this.HP.H(AWs);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae9
));this.DS.H(AWt);this.J(this.AgY,0);this.J(this.SS,0);this.J(this.HP,0);this.J(
this.DS,0);this.AgY.Aw(A.aaL(A.ach.AQq));this.SS.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.AgY._Done();this.SS._Done(
);this.HP._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.AgY._ReInit();this.SS._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SS.R(A.aaR(A.acf.Ae9));this.HP.R(A.aaR(A.acf.Ae9));this.SS.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.AC$={Init:function(
aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SB
],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.A8x,B.Anz],0);
A.zV([this,this.Nl],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nl],[
B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EB],0);A.zX([this,this.Nl],[B=A._GetAutoObject(
A.Device.Helper).W,B.A8_,B.Aw_],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8o,B.AeY],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8p,B.Ul],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8s,B.Ae1],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.A8w,B.
Ae3],0);A.pe([this,this.Nl],this);},De:function(E){C.AmU.De.call(this,E);this.DS.
De(E);},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.Ab4(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab4(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AEW(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.AeY(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Ul(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae1(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae3(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmU._Init.call(this,aArg);this.
__proto__=C.AC$;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ki={AhG:A.abi(3,A.jV,null),Cc:A.abi(3,0,{0:7,1:30,2:90}),Ani:3,Dn:function(){
if(this.Ani<3)return this.Ani;else return 3;},C4:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ani))return-1;return this.Cc.Get(aIndex);},FX:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ani))return AWu;return this.AhG.Get(aIndex);},DU:function(
A7){var O=0;while((O<3)&&(O<=this.Ani)){if(this.Cc.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ani)){if(this.Cc.Get(
O)>max)max=this.Cc.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhG=[]).__proto__=C.Ki.AhG;(this.Cc=[]).__proto__=C.Ki.Cc;this.
__proto__=C.Ki;this.AhG.Set(0,A.aaR(A.acf.A7b));this.AhG.Set(1,A.aaR(A.acf.A6$));
this.AhG.Set(2,A.aaR(A.acf.A7a));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhG.Set(0,A.aaR(A.acf.A7b));this.AhG.Set(1,A.aaR(A.acf.A6$));this.AhG.Set(2,A.aaR(
A.acf.A7a));},_className:"Application::Days"};C.AUC={Amt:null,BT:null,Q3:null,QA:
null,A$r:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAB],[B=A._GetAutoObject(A.Device.Device),B.Arx,B.Ate],0);},Bk:function(
aSize){},Ai:function(Ae){var B;var F;C.Dt.Ai.call(this,Ae);var Fq=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWv+A._GetAutoObject(
A.Device.Converter).AkZ((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlH());this.H2.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6x())&&(
Fq||GA));},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));
},J_:function(G){var F;var BQ=this.AM;C.Dt.J_.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6x()){this.By(this.AM+10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J5:function(G){var F;var BQ=this.
AM;C.Dt.J5.call(this,G);this.By(this.AM-10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_m:function(E){if(this.A$r===E)return;
this.A$r=E;this.An();},BAB:function(G){this.An();},_Init:function(aArg){C.Dt._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amt={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AK._Init.call(this.Q3={I:this},0);A.acg.Ap._Init.call(this.QA={
I:this},0);this.__proto__=C.AUC;this.H(UT);this.Background.H(UT);this.V.H(As0);this.
V.L(A.jb.Bm);this.Amt.H(AWw);this.Amt.L(A.jb.Afo);this.Ht.H(AWx);this.BT.H(AWy);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H2.H(AWz);this.Q3.H(AWA);this.Q3.L(A.
jb.E1);this.QA.H(AWB);this.J(this.Amt,-2);this.J(this.BT,-1);this.J(this.Q3,0);this.
J(this.QA,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QA.Aw(A.aaL(A.ach.ADq));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dt;this.Amt._Done();this.BT._Done();this.Q3.
_Done();this.QA._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.
call(this);this.Amt._ReInit();this.BT._ReInit();this.Q3._ReInit();this.QA._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.
Amt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_V={Q:null
,Ai1:null,Init:function(aArg){var B;A.zX([this,this.Bd9],[B=A._GetAutoObject(A.Device.
Device),B.AEm,B.BaD],0);A.pe([this,this.Bd9],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahn:function(Alk){A._GetAutoObject(A.Device.Device).Zp(Alk
);},Bd9:function(G){var F;if(!this.Q){A.ab5("%s",AWC);return;}var Bz=null;if(this.
Ai1.Contains(A._GetAutoObject(A.Device.Device).KH)){Bz=this.Ai1.A_B();while(!!Bz&&(
Bz.An4!==A._GetAutoObject(A.Device.Device).KH))Bz=this.Ai1.A_B();}if(!Bz)Bz=this.
Bzf(A._GetAutoObject(A.Device.Device).KH);(F=this.Q,F[2].call(F[0],Bz));},Bzf:function(
Alk){var Bz=null;switch(Alk){case 0:case 1:Bz=A._NewObject(C.AUK,0);break;case 2:
Bz=A._NewObject(C.X0,0);break;case 3:Bz=A._NewObject(C.Avq,0);break;case 53:Bz=A.
_NewObject(C.AVp,0);break;case 77:Bz=A._NewObject(C.NewMenu,0);break;case 27:Bz=
A._NewObject(C.ART,0);break;case 6:Bz=A._NewObject(C.ARs,0);break;case 16:Bz=A._NewObject(
C.ANG,0);break;case 22:Bz=A._NewObject(C.AVk,0);break;case 17:Bz=A._NewObject(C.
AU1,0);break;case 42:Bz=A._NewObject(C.AND,0);break;case 87:Bz=A._NewObject(C.AUd
,0);break;case 88:Bz=A._NewObject(C.AUc,0);break;case 89:Bz=A._NewObject(C.AVg,0
);break;case 95:Bz=A._NewObject(C.AVi,0);break;case 23:Bz=A._NewObject(C.AVI,0);
break;case 18:Bz=A._NewObject(C.ANT,0);break;case 19:Bz=A._NewObject(C.AUe,0);break;
case 37:Bz=A._NewObject(C.AQV,0);break;case 76:Bz=A._NewObject(C.ATV,0);break;case
63:Bz=A._NewObject(C.ANR,0);break;case 64:Bz=A._NewObject(C.ANS,0);break;case 82:
Bz=A._NewObject(C.ANQ,0);break;case 83:Bz=A._NewObject(C.ANO,0);break;case 92:Bz=
A._NewObject(C.ANM,0);break;case 93:Bz=A._NewObject(C.ANP,0);break;case 65:Bz=A.
_NewObject(C.ANN,0);break;case 5:Bz=A._NewObject(C.AUU,0);break;case 4:Bz=A._NewObject(
C.Ad6,0);break;case 39:Bz=A._NewObject(C.ANd,0);break;case 38:Bz=A._NewObject(C.
ANw,0);break;case 28:Bz=A._NewObject(C.Wp,0);break;case 7:Bz=A._NewObject(C.AqH,
0);break;case 81:Bz=A._NewObject(C.AN1,0);break;case 31:Bz=A._NewObject(C.Arq,0);
break;case 78:Bz=A._NewObject(C.ARR,0);break;case 34:Bz=A._NewObject(C.ALW,0);break;
case 35:Bz=A._NewObject(C.ManualActionScanScreen,0);break;case 32:Bz=A._NewObject(
C.SetTransponderScreen,0);break;case 45:Bz=A._NewObject(C.SetSaveTransponderScreen
,0);break;case 49:Bz=A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:
Bz=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case 79:Bz=A._NewObject(
C.MotherScanScreen,0);break;case 80:Bz=A._NewObject(C.SetSaveNaisIdScreen,0);break;
case 8:Bz=A._NewObject(C.GU,0);break;case 9:Bz=A._NewObject(C.I0,0);break;case 24:
Bz=A._NewObject(C.AMb,0);break;case 10:Bz=A._NewObject(C.Amp,0);break;case 21:Bz=
A._NewObject(C.AMf,0);break;case 11:Bz=A._NewObject(C.AMe,0);break;case 29:Bz=A.
_NewObject(C.AuB,0);break;case 48:Bz=A._NewObject(C.AMd,0);break;case 30:Bz=A._NewObject(
C.AMc,0);break;case 12:Bz=A._NewObject(C.AMa,0);break;case 40:Bz=A._NewObject(C.
AL$,0);break;case 14:Bz=A._NewObject(C.ANu,0);break;case 13:Bz=A._NewObject(C.ANv
,0);break;case 20:Bz=A._NewObject(C.AVz,0);break;case 41:Bz=A._NewObject(C.AVy,0
);break;case 43:Bz=A._NewObject(C.AOD,0);break;case 44:Bz=A._NewObject(C.AOC,0);
break;case 61:Bz=A._NewObject(C.AN0,0);break;case 62:Bz=A._NewObject(C.ANZ,0);break;
case 46:Bz=A._NewObject(C.AR6,0);break;case 47:Bz=A._NewObject(C.AR5,0);break;case
85:Bz=A._NewObject(C.AVO,0);break;case 86:Bz=A._NewObject(C.AVN,0);break;case 71:
Bz=A._NewObject(C.AR1,0);break;case 72:Bz=A._NewObject(C.AR0,0);break;case 74:Bz=
A._NewObject(C.AMU,0);break;case 90:Bz=A._NewObject(C.ATY,0);break;case 73:Bz=A.
_NewObject(C.AUf,0);break;case 51:Bz=A._NewObject(C.AL0,0);break;case 52:Bz=A._NewObject(
C.ALZ,0);break;case 15:Bz=A._NewObject(C.AT4,0);break;case 60:Bz=A._NewObject(C.
AU0,0);break;case 69:Bz=A._NewObject(C.ARq,0);break;case 70:Bz=A._NewObject(C.ARp
,0);break;case 26:Bz=A._NewObject(C.ARU,0);break;case 54:Bz=A._NewObject(C.ARQ,0
);break;case 25:Bz=A._NewObject(C.AOc,0);break;case 66:Bz=A._NewObject(C.AOd,0);
break;case 59:Bz=A._NewObject(C.AOb,0);break;case 58:Bz=A._NewObject(C.AOe,0);break;
case 56:Bz=A._NewObject(C.AOf,0);break;case 57:Bz=A._NewObject(C.AqK,0);break;case
68:Bz=A._NewObject(C.AOg,0);break;case 67:Bz=A._NewObject(C.AN$,0);break;case 84:
Bz=A._NewObject(C.AMh,0);break;case 33:Bz=A._NewObject(C.WeightListScreen,0);break;
case 36:Bz=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:Bz=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:Bz=A._NewObject(C.AMu,0);break;case 91:
Bz=A._NewObject(C.AU6,0);break;case 94:Bz=A._NewObject(C.Aqe,0);break;default:throw new
Error(AWD);}if(!!Bz)Bz.An4=Alk;return Bz;},Cg:function(Alk){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWE);else this.Ai1.BnI((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zp(Alk);},Fu:function(){var Bfn=3;var Bfm=this.Ai1.
Bnx();if(!!Bfm)Bfn=Bfm.An4;else A.ab5("%s",AWF);A._GetAutoObject(A.Device.Device
).Zp(Bfn);},_Init:function(aArg){C.A_X._Init.call(this.Ai1={I:this},0);this.__proto__=
C.A_V;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.Ai1._Done(
);A.h7--;},_ReInit:function(){this.Ai1._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_V._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AF_={H5:null,Yu:null,Ae$:null,AaK:null,My:null,Azo:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yu.R(this.BcT(this.RatedAttribute));this.AKA(this);},Ai:function(
Ae){this.My.R(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.ARH),P6,this.Azo.
toFixed()));if(this.RatingMode===1)this.My.Z(true);else this.My.Z(false);},CF:function(
G){var B;C.AB.CF.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axn(this.H5,5);A.zX([this,this.AKA],[B=A._GetAutoObject(
A.Device.Device),B.ASB,B.AZ7],0);A.zX([this,this.AKA],[B=A._GetAutoObject(A.Device.
Helper).W,B.PM,B.EB],0);A.pe([this,this.AKA],this);},AsB:function(G){var a=this.
AKd(this.RatedAttribute);this.BfE();this.Azo=this.Azo-1;this.An();if(!a)this.ARO(
);else this.SA(a);},WM:function(G){var a=this.Bc0(this.RatedAttribute);this.BfE(
);this.Azo=this.Azo+1;this.An();if(!a)this.A7y();else this.SA(a);},AKd:function(
Nn){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Nn){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHA);},Bc0:
function(Nn){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Nn){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHA);},SA:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yu.R(this.BcT(E));this.DJ(E);this.Ae$.AnE(this.H5.Bir(E));if(!this.AKd(E)
){if(this.AQ4())this.N.Cs(A.aaL(A.ach.AbC));else this.N.Cs(null);}else this.N.Cs(
A.aaL(A.ach.Aev));},BcT:function(Nn){return this.AaK.BH(Nn);},Bze:function(Nn){if(
!!Nn){var a=this.AKd(Nn);if(!a)return A.jV;else return this.BcU(a);}else return A.
jV;},Bzd:function(Nn){if(!!Nn){var a=this.Bc0(Nn);if(!a)return A.jV;else return this.
BcU(a);}else return A.jV;},ARO:function(){},A7y:function(){},A6y:function(){return null;
},BcU:function(Nn){return this.AaK.Lt(Nn);},BfE:function(){if(!!this.RatedAttribute
)this.H5.Boe(this.RatedAttribute,this.Ae$.A4);},AKA:function(G){if(this.AQ4())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
SA(2);this.DJ(this.RatedAttribute);this.An();},XB:function(G){A._GetAutoObject(A.
Device.Device).UpdateOverlayMenu(4);},AkU:function(G){var a=this.AKd(this.RatedAttribute
);if(!a){if(this.AQ4())this.XB(this);}else this.ARO();},DJ:function(Nn){this.N.Hu(
this.Bze(Nn));if(!!this.N.AnZ){this.N.CY(null);this.N.ON(true);}else{this.N.CY(A.
aaL(A.ach.Aev));this.N.ON(false);}this.N.CV(this.Bzd(Nn));if(!!this.N.An1){this.
N.C6(null);this.N.OO(true);}else{this.N.C6(this.A6y());this.N.OO(false);}},AQ4:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Alb,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yu={I:this},0);C.Rating._Init.call(this.Ae$={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaK={I:this},0);A.acg.Text._Init.call(this.
My={I:this},0);this.__proto__=C.AF_;this.Background.L(A.jb.CK);this.N.Z(true);this.
Dq(C.IG);this.Yu.H(AWG);this.Yu.KS(true);this.Yu.L(A.jb.Text);this.Ae$.H(AWH);this.
My.H(AWI);this.My.A6(0x14);this.My.R(A.aaR(A.acf.ARH));this.My.L(A.jb.Text);this.
J(this.Yu,0);this.J(this.Ae$,0);this.J(this.My,0);this.Bb(this.Ae$);this.N.CB=[this
,this.AsB];this.N.Ck=[this,this.AkU];this.N.Cl=[this,this.WM];this.Yu.S(A.aaL(A.
fl.Af));this.Ae$.AR=[this,this.WM];this.My.S(A.aaL(A.fl.Af));this.H5=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yu._Done();this.Ae$.
_Done();this.AaK._Done();this.My._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yu._ReInit();this.Ae$._ReInit();this.AaK._ReInit(
);this.My._ReInit();this.My.R(A.aaR(A.acf.ARH));this.Yu.S(A.aaL(A.fl.Af));this.My.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yu)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ae$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.My)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jd:
null,Pj:null,AsQ:null,BZ:null,C$:null,C9:null,CG:null,Gi:null,Ay:null,KI:0,Init:
function(aArg){A.zX([this,this.Bbe],this.BZ.Q,0);A.pe([this,this.Bbe],this);A.pe([
this,this.AA2],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANr(this.Y);},DE:function(G){var B;var Fc=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;
default:;}X=this.QD(X,Fc,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.AA2(this);},Fe:function(G){var B;this.Ay.Mu((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},AeT:function(E){if(this.KI===E)return;this.KI=E;A.abo([this,this.Av3,this.
AeT],0);},AA2:function(G){var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.
N.Hu(A.jV);this.N.CY(A.aaL(A.ach.E2));this.N.CB=[this,this.AIS];if(!!GS&&!!GS.Aml
){this.N.FI(A.jV);this.N.Kw.Dr(255);this.N.ArN(GS.AqP);this.N.Cs(GS.AvA);this.N.
Ck=GS.Aml;}else{this.N.FI(A.jV);this.N.Cs(null);this.N.Ck=null;}if(!!GS&&!!GS.Agm
){this.N.CV(GS.AxE);this.N.HQ.Dr(GS.Axb);this.N.Anv(GS.AmO);this.N.C6(GS.Aq6);this.
N.Cl=GS.Agm;}else this.Aud();},Af_:function(G){A.ab5("%s",Aya);},AyL:function(s){
this.Af_(s);},Ev:function(G){A.ab5("%s",Aya);},AIS:function(s){this.Ev(s);},Aud:
function(){A.ab5("%s",Alc);},AAo:function(G){A.ab5("%s",Aya);},AcQ:function(s){this.
AAo(s);},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true,null,null);this.Y.Vt(null
,null);},ApG:function(G){var F;this.C9.Ahk(A._GetAutoObject(A.Device.Helper).Abq((
F=this.BZ.Q,F[1].call(F[0]))));},Bbe:function(s){this.ApG(s);},Av3:function(){return this.
KI;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UM._Init.call(
this.Jd={I:this},0);A.Device.M0._Init.call(this.Pj={I:this},0);A.Device.KY._Init.
call(this.AsQ={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.
C$={I:this},0);C.AkS._Init.call(this.C9={I:this},0);C.Axq._Init.call(this.CG={I:
this},0);C.Asw._Init.call(this.Gi={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.HY;var B;this.N.Z(true);this.Dq(C.IG);this.Y.H(E$);this.Y.JO(
1);this.KI=A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.Q);this.BZ.H(AhT
);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afn));this.C$.H(Ayb);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afi));this.C9.H(Aop);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI)
);this.C9.F0(1000);this.C9.EV(99000);this.C9.Ahk(A._GetAutoObject(A.Device.Helper
).Abq(this.AnimalType.Q));this.CG.H(AhU);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gi.H(AWJ);this.Gi.Aj(true);this.Gi.T(A.aaR(A.acf.Jd));this.Ay.H(Ayc
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.C9,0);this.J(
this.CG,0);this.J(this.Gi,0);this.J(this.Ay,0);this.Y.El=[this,this.Fe];this.Gender.
LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.
Helper).W);this.Breed.LY(A._GetAutoObject(A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(
A.Device.Helper).W);this.BZ.As([B=this.AnimalType,B.B7,B.B8]);this.BZ.CI(this.AnimalType
);this.C$.As([B=this.Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.C9.As([this
,this.Av3,this.AeT]);this.CG.Gn([this,this.D_,this.GN]);this.CG.LX([B=this.CG,B.
FP]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B7,B.B8]);this.CG.
CI(this.Breed);this.CG.Anu(this.Pj);this.Gi.Gn([this,this.D_,this.GN]);this.Gi.LX([
B=this.Gi,B.FP]);this.Gi.L0(A.aaL(A.ach.Edit));this.Gi.As([B=this.Jd,B.B7,B.B8]);
this.Gi.CI(this.Jd);this.Gi.Anu(this.AsQ);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed.
_Done();this.Jd._Done();this.Pj._Done();this.AsQ._Done();this.BZ._Done();this.C$.
_Done();this.C9._Done();this.CG._Done();this.Gi._Done();this.Ay._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jd._ReInit();this.
Pj._ReInit();this.AsQ._ReInit();this.BZ._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gi._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Afn
));this.C$.T(A.aaR(A.acf.Afi));this.C9.T(A.aaR(A.acf.KI));this.CG.T(A.aaR(A.acf.
Breed));this.Gi.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wp={Ay0:false,LO:function(G){if(A._GetAutoObject(A.Device.Device).Am.Lh())A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(A.Device.Helper
).Aqh(A._GetAutoObject(A.Device.Helper).W);},Aud:function(){this.N.CV(A.jV);this.
N.C6(A.aaL(A.ach.ADu));this.N.Cl=[this,this.AyL];},CF:function(G){if(!this.Ay0){
this.Ay0=true;A.pe([this,this.AcQ],this);}else C.Arq.CF.call(this,G);},AAo:function(
G){A._GetAutoObject(C.A$).Cg(49);},_Init:function(aArg){C.Arq._Init.call(this,aArg
);this.__proto__=C.Wp;this.JU(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IG={_Init:function(aArg){C.AC$._Init.call(this,aArg);this.__proto__=C.IG;this.
A9K(false);},_className:"Application::HeaderSelectedAnimalId"};C.I0={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,PX:null,S0:null,N9:
null,S1:null,Nk:null,Os:null,RL:null,Ot:null,RM:null,ND:null,Ld:null,Jn:null,KW:
null,Mr:null,Yo:null,S2:null,RN:null,Ay:null,AxR:0,AxQ:0,Auz:0,Auy:0,Arp:0,AsI:0
,Avb:0,Avc:0,Am0:true,Amo:false,An_:false,Init:function(aArg){A.zX([this,this.Avh
],this.Ld.Q,0);A.zX([this,this.AuE],this.Jn.Q,0);A.zX([this,this.Bpq],this.KW.Q,
0);A.zX([this,this.BjL],this.Mr.Q,0);A.zX([this,this.BpW],this.Nk.Q,0);A.zX([this
,this.BpV],this.N9.Q,0);A.zX([this,this.BgI],this.ND.Q,0);A.zX([this,this.BgH],this.
Ot.Q,0);this.Bb(this.PX);},DE:function(G){var Fc=0;var X=this.AV;switch(this.Cr.
CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;
}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);this.MO(this);},CF:function(G){if(!!A._GetAutoObject(
A.Device.Device).Am.Filter)this.Bl(A._GetAutoObject(A.Device.Device).Am.Filter.Fg(
));else this.Bl(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A$).Fu();},A2J:function(G){var EE=(C.Aem.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DQ(EE.Ep,EE.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this
,this.Fj,this.Fn],0);}else{if(EE.Ep===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Ep===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Ep===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHB+EE.Ep.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fj,this.Fn],0);}}},BzQ:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(this.Filter);A._GetAutoObject(C.A$).Fu();},AAm:function(G){var EE=(
C.AmT.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DQ(EE.Ep,EE.Operator
);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0);}else{if(EE.Ep===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;
}else if(EE.Ep===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Ep;Av.Operator=EE.Operator;}else if((EE.Ep===22)||(EE.Ep===26)){var A0M=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0M.EJ=EE.Ep;A0M.Operator=0;Av=A0M;}else A.ab5(
"%s",AHB+EE.Ep.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fj,this.Fn
],0);}}},A9F:function(E){if(this.Avb===E)return;this.Avb=E;A.abo([this,this.Bkp,
this.A9F],0);},A9G:function(E){if(this.Avc===E)return;this.Avc=E;A.abo([this,this.
Bkq,this.A9G],0);},Avh:function(G){var F;this.A9G((F=this.Ld.Q,F[1].call(F[0])));
var Av=this.Filter.DQ(7,0);if(!!Av){var AzI=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzI)AzI.A4=this.Avc;else A.ab5("%s",Afz);}},AuE:function(G){var
F;this.A9F((F=this.Jn.Q,F[1].call(F[0])));var Av=this.Filter.DQ(14,0);if(!!Av){var
U2=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U2)U2.A4=
this.Avb;else A.ab5("%s",Afz);}},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},A_l:function(
E){if(this.AsI===E)return;this.AsI=E;A.abo([this,this.Bk2,this.A_l],0);},Bpq:function(
G){var F;this.A_l((F=this.KW.Q,F[1].call(F[0])));var Av=this.Filter.DQ(22,1);if(
!!Av){var Ai$=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Ai$
)switch(this.AsI){case 1:Ai$.Operator=5;break;case 0:Ai$.Operator=0;break;default:
A.ab5("%s%e",AHC,this.AsI);}else A.ab5("%s",Afz);}},A9S:function(E){if(this.Arp===
E)return;this.Arp=E;A.abo([this,this.BkF,this.A9S],0);},BjL:function(G){var F;this.
A9S((F=this.Mr.Q,F[1].call(F[0])));var Av=this.Filter.DQ(26,1);if(!!Av){var AtT=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtT)switch(this.Arp
){case 1:AtT.Operator=5;break;case 0:AtT.Operator=0;break;default:A.ab5("%s%e",AHC
,this.Arp);}else A.ab5("%s",Afz);}},Bl:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PX.Bl([this,this.Fj,this.Fn]);this.S0.
Bl([this,this.Fj,this.Fn]);this.N9.Bl([this,this.Fj,this.Fn]);this.S1.Bl([this,this.
Fj,this.Fn]);this.Nk.Bl([this,this.Fj,this.Fn]);this.Os.Bl([this,this.Fj,this.Fn
]);this.RL.Bl([this,this.Fj,this.Fn]);this.Ot.Bl([this,this.Fj,this.Fn]);this.RM.
Bl([this,this.Fj,this.Fn]);this.ND.Bl([this,this.Fj,this.Fn]);this.Ld.Bl([this,this.
Fj,this.Fn]);this.Jn.Bl([this,this.Fj,this.Fn]);this.KW.Bl([this,this.Fj,this.Fn
]);this.Mr.Bl([this,this.Fj,this.Fn]);this.Yo.Bl([this,this.Fj,this.Fn]);this.S2.
Bl([this,this.Fj,this.Fn]);this.RN.Bl([this,this.Fj,this.Fn]);this.Ar7(false);A.
pe([this,this.A4g],this);var BdB=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DQ(1,2))?B:null);if(!!BdB){this.Ar7(true);this.AFR(BdB.A4);}var Bc6=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DQ(1,3))?B:null);if(!!
Bc6){this.Ar7(true);this.AFS(Bc6.A4);}this.ArG(false);A.pe([this,this.ALg],this);
var BdA=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DQ(4,3))?B:null
);if(!!BdA){this.ArG(true);this.AEF(A._GetAutoObject(A.Device.Helper).MN(BdA.A4,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bc5=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DQ(4,2))?B:null);if(!!Bc5){this.ArG(true);this.AEH(A.
_GetAutoObject(A.Device.Helper).MN(Bc5.A4,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzI=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DQ(7,0
))?B:null);if(!!AzI)this.Ld.By(this.Gender.DU(AzI.A4));var U2=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DQ(14,0))?B:null);if(!!U2)this.Jn.By(this.AnimalType.
DU(U2.A4));var Ai$=this.Filter.DQ(22,1);if(!!Ai$){if(!Ai$.Operator)this.KW.By(0);
else this.KW.By(1);}var AtT=this.Filter.DQ(26,1);if(!!AtT){if(!AtT.Operator)this.
Mr.By(0);else this.Mr.By(1);}},Fn:function(Aq){this.Bl(Aq);},AFS:function(E){if(
this.AxR===E)return;this.AxR=E;A.abo([this,this.A82,this.AFS],0);},AFR:function(
E){if(this.AxQ===E)return;this.AxQ=E;A.abo([this,this.A81,this.AFR],0);},BpW:function(
G){var F;this.AFS((F=this.Nk.Q,F[1].call(F[0])));var Av=this.Filter.DQ(1,3);if(!
!Av){var ABn=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABn)
ABn.A4=this.AxR;else A.ab5("%s",Afz);}},BpV:function(G){var F;this.AFR((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DQ(1,2);if(!!Av){var ABn=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABn)ABn.A4=this.AxQ;else A.ab5("%s",Afz);}},Bd6:
function(G){var EE=(C.AjH.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DQ(EE.Ep,EE.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0
);}else{if(EE===this.S0){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Ep;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxQ;this.Bb(this.N9);}else if(EE===this.S1){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxR;this.Bb(this.Nk);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fj,this.Fn],0);}}A.pe([this,this.A4g],this);},A4g:function(
G){var A2s=!!this.Filter.DQ(this.N9.Ep,this.N9.Operator);var A4h=!!this.Filter.DQ(
this.Nk.Ep,this.Nk.Operator);A._GetAutoObject(A.Device.Helper).JV(this.S0,this.An_
);A._GetAutoObject(A.Device.Helper).JV(this.S1,this.An_);A._GetAutoObject(A.Device.
Helper).JV(this.N9,A2s);A._GetAutoObject(A.Device.Helper).JV(this.Nk,A4h);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},BAI:function(G){A.pe([this,this.Fe],this);A.pe([this,this.
MO],this);},BzN:function(G){this.Ar7(!this.An_);if(this.An_===false){var Av=this.
Filter.DQ(this.PX.Ep,this.PX.Operator);while(!!Av){this.Filter.N3(Av);Av=this.Filter.
DQ(this.PX.Ep,this.PX.Operator);}A.abo([this,this.Fj,this.Fn],0);}},Ar7:function(
E){if(this.An_===E)return;this.An_=E;A.abo([this,this.A80,this.Ar7],0);A.pe([this
,this.A4g],this);},AEH:function(E){if(this.Auz===E)return;this.Auz=E;A.abo([this
,this.A78,this.AEH],0);},AEF:function(E){if(this.Auy===E)return;this.Auy=E;A.abo([
this,this.A76,this.AEF],0);},BgI:function(G){var F;this.AEH((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DQ(4,2);if(!!Av){var AfM=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfM){var AaP=A._GetAutoObject(A.Device.Helper).ZQ(
this.Auz-1);AfM.A4=AaP;}else A.ab5("%s",Afz);}},BgH:function(G){var F;this.AEF((
F=this.Ot.Q,F[1].call(F[0])));var Av=this.Filter.DQ(4,3);if(!!Av){var AfM=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfM){var AaP=A._GetAutoObject(
A.Device.Helper).ZQ(this.Auy);AfM.A4=AaP;}else A.ab5("%s",Afz);}},ALg:function(G
){var A2s=this.Am0&&!!this.Filter.DQ(this.Ot.Ep,this.Ot.Operator);var A4h=this.Am0&&
!!this.Filter.DQ(this.ND.Ep,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JV(this.Os,this.Am0);A._GetAutoObject(A.Device.Helper).JV(this.RL,this.Am0&&this.
Amo);A._GetAutoObject(A.Device.Helper).JV(this.RM,this.Am0&&this.Amo);A._GetAutoObject(
A.Device.Helper).JV(this.Ot,A2s);A._GetAutoObject(A.Device.Helper).JV(this.ND,A4h
);},ArG:function(E){if(this.Amo===E)return;this.Amo=E;A.abo([this,this.A75,this.
ArG],0);A.pe([this,this.ALg],this);},Bd5:function(G){var EE=(C.AjH.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DQ(EE.Ep,EE.Operator);if(!!Av){this.
Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0);}else{if(EE===this.RL){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZQ(this.Auy);this.Bb(this.Ot);}else if(EE===this.RM){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZQ(this.Auz-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fj,this.Fn],0);}}A.pe([
this,this.ALg],this);},BzM:function(G){this.ArG(!this.Amo);if(this.Amo===false){
var Av=this.Filter.DQ(this.Os.Ep,this.Os.Operator);while(!!Av){this.Filter.N3(Av
);Av=this.Filter.DQ(this.Os.Ep,this.Os.Operator);}A.abo([this,this.Fj,this.Fn],0
);}},Bmo:function(E){if(this.Am0===E)return;this.Am0=E;A.pe([this,this.ALg],this
);},Fj:function(){return this.Filter;},Bkq:function(){return this.Avc;},Bkp:function(
){return this.Avb;},Bk2:function(){return this.AsI;},BkF:function(){return this.
Arp;},A82:function(){return this.AxR;},A81:function(){return this.AxQ;},A80:function(
){return this.An_;},A78:function(){return this.Auz;},A76:function(){return this.
Auy;},A75:function(){return this.Amo;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABF._Init.call(this.Transponder={I:this},0);C.ABF._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABQ._Init.call(
this.PX={I:this},0);C.AjH._Init.call(this.S0={I:this},0);C.Abp._Init.call(this.N9={
I:this},0);C.AjH._Init.call(this.S1={I:this},0);C.Abp._Init.call(this.Nk={I:this
},0);C.ABQ._Init.call(this.Os={I:this},0);C.AjH._Init.call(this.RL={I:this},0);C.
ACE._Init.call(this.Ot={I:this},0);C.AjH._Init.call(this.RM={I:this},0);C.ACE._Init.
call(this.ND={I:this},0);C.AmT._Init.call(this.Ld={I:this},0);C.AmT._Init.call(this.
Jn={I:this},0);C.AmT._Init.call(this.KW={I:this},0);C.AmT._Init.call(this.Mr={I:
this},0);C.Qy._Init.call(this.Yo={I:this},0);C.Qy._Init.call(this.S2={I:this},0);
C.Qy._Init.call(this.RN={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I0;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A4R));this.Dq(C.APw);this.Gender.
As(this.Avc);this.AnimalType.As(this.Avb);this.Transponder.As(this.AsI);this.Ek.
As(this.Arp);this.Y.H(E$);this.Y.JO(1);this.PX.H(IR);this.PX.Aj(true);this.PX.T(
A._GetAutoObject(A.Device.Helper).AmR(0,1));this.PX.Nc(1);this.S0.H(P7);this.S0.
Aj(true);this.S0.T(A.aaR(A.acf.AD2));this.S0.Nc(1);this.S0.OM(2);this.N9.H(Aaf);
this.N9.Nc(1);this.N9.OM(2);this.N9.AFJ(A.aaR(A.acf.GJ));this.S1.H(Ald);this.S1.
Aj(true);this.S1.T(A.aaR(A.acf.AG4));this.S1.Nc(1);this.S1.OM(3);this.Nk.H(Aoq);
this.Nk.Aj(true);this.Nk.Nc(1);this.Nk.OM(3);this.Nk.AFJ(A.aaR(A.acf.GJ));this.Os.
H(AWK);this.Os.Aj(true);this.Os.T(A.aaR(A.acf.RK));this.Os.Nc(4);this.RL.H(AWL);
this.RL.Aj(true);this.RL.T(A.aaR(A.acf.AD2));this.RL.Nc(4);this.RL.OM(3);this.Ot.
H(AWM);this.Ot.Nc(4);this.Ot.OM(3);this.Ot.A9X(2);this.RM.H(AWN);this.RM.Aj(true
);this.RM.T(A.aaR(A.acf.AG4));this.RM.Nc(4);this.RM.OM(2);this.ND.H(AWO);this.ND.
Aj(true);this.ND.Nc(4);this.ND.OM(2);this.ND.A9X(3);this.Ld.H(As1);this.Ld.Aj(true
);this.Ld.Nc(7);this.Ld.Ahm(0);this.Ld.OM(0);this.Jn.H(Xc);this.Jn.Aj(true);this.
Jn.Nc(14);this.Jn.Ahm(0);this.Jn.OM(0);this.KW.H(Xc);this.KW.Aj(true);this.KW.Nc(
22);this.KW.Ahm(0);this.KW.OM(1);this.Mr.H(Xc);this.Mr.Aj(true);this.Mr.Nc(26);this.
Mr.Ahm(0);this.Mr.OM(1);this.Yo.H(Xc);this.Yo.Aj(true);this.Yo.Nc(11);this.Yo.Ahm(
0);this.Yo.OM(0);this.S2.H(Xc);this.S2.Aj(true);this.S2.Nc(12);this.S2.Ahm(0);this.
S2.OM(0);this.RN.H(Xc);this.RN.Aj(true);this.RN.Nc(8);this.RN.Ahm(0);this.RN.OM(
0);this.Ay.H(Iq);this.J(this.Y,0);this.J(this.PX,0);this.J(this.S0,0);this.J(this.
N9,0);this.J(this.S1,0);this.J(this.Nk,0);this.J(this.Os,0);this.J(this.RL,0);this.
J(this.Ot,0);this.J(this.RM,0);this.J(this.ND,0);this.J(this.Ld,0);this.J(this.Jn
,0);this.J(this.KW,0);this.J(this.Mr,0);this.J(this.Yo,0);this.J(this.S2,0);this.
J(this.RN,0);this.J(this.Ay,0);this.N.CB=[this,this.Ev];this.N.Cl=[this,this.BzQ
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.BAI];this.PX.AR=[this,this.BzN
];this.PX.As([this,this.A80,this.Ar7]);this.S0.AR=[this,this.Bd6];this.N9.Gn([this
,this.D_,this.GN]);this.N9.As([this,this.A81,this.AFR]);this.S1.AR=[this,this.Bd6
];this.Nk.Gn([this,this.D_,this.GN]);this.Nk.As([this,this.A82,this.AFS]);this.Os.
AR=[this,this.BzM];this.Os.As([this,this.A75,this.ArG]);this.RL.AR=[this,this.Bd5
];this.Ot.Gn([this,this.D_,this.GN]);this.Ot.As([this,this.A76,this.AEF]);this.RM.
AR=[this,this.Bd5];this.ND.Gn([this,this.D_,this.GN]);this.ND.As([this,this.A78,
this.AEH]);this.Ld.AR=[this,this.AAm];this.Ld.As([B=this.Gender,B.B7,B.B8]);this.
Ld.CI(this.Gender);this.Jn.AR=[this,this.AAm];this.Jn.As([B=this.AnimalType,B.B7
,B.B8]);this.Jn.CI(this.AnimalType);this.KW.AR=[this,this.AAm];this.KW.As([B=this.
Transponder,B.B7,B.B8]);this.KW.CI(this.Transponder);this.Mr.AR=[this,this.AAm];
this.Mr.As([B=this.Ek,B.B7,B.B8]);this.Mr.CI(this.Ek);this.Yo.AR=[this,this.A2J];
this.S2.AR=[this,this.A2J];this.RN.AR=[this,this.A2J];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Ek._Done();this.Y._Done();this.PX._Done();this.S0._Done();this.N9._Done(
);this.S1._Done();this.Nk._Done();this.Os._Done();this.RL._Done();this.Ot._Done(
);this.RM._Done();this.ND._Done();this.Ld._Done();this.Jn._Done();this.KW._Done(
);this.Mr._Done();this.Yo._Done();this.S2._Done();this.RN._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();
this.Y._ReInit();this.PX._ReInit();this.S0._ReInit();this.N9._ReInit();this.S1._ReInit(
);this.Nk._ReInit();this.Os._ReInit();this.RL._ReInit();this.Ot._ReInit();this.RM.
_ReInit();this.ND._ReInit();this.Ld._ReInit();this.Jn._ReInit();this.KW._ReInit(
);this.Mr._ReInit();this.Yo._ReInit();this.S2._ReInit();this.RN._ReInit();this.Ay.
_ReInit();this.N.CV(A.aaR(A.acf.A4R));this.S0.T(A.aaR(A.acf.AD2));this.N9.AFJ(A.
aaR(A.acf.GJ));this.S1.T(A.aaR(A.acf.AG4));this.Nk.AFJ(A.aaR(A.acf.GJ));this.Os.
T(A.aaR(A.acf.RK));this.RL.T(A.aaR(A.acf.AD2));this.RM.T(A.aaR(A.acf.AG4));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_X={ZR:null,BnI:
function(Bxj){var EF=A._NewObject(C.A_W,0);EF.AB=Bxj;EF.Ms=this.ZR;this.ZR=EF;},
A_B:function(){var Vh=null;if(!!this.ZR){Vh=this.ZR.AB;this.ZR=this.ZR.Ms;}return Vh;
},Contains:function(Alk){var EF=this.ZR;while(!!EF){if(EF.AB.An4===Alk)return true;
EF=EF.Ms;}return false;},Bnx:function(){if(!!this.ZR)return this.ZR.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_X;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_W={AB:null,
Ms:null,_Init:function(aArg){this.__proto__=C.A_W;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMe={ARO:function(){A._GetAutoObject(
A.Device.Helper).Axn(this.H5,0);A._GetAutoObject(C.A$).Fu();},A7y:function(){this.
H5.Cq(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fu();},A6y:function(
){return A.aaL(A.ach.AmY);},_Init:function(aArg){C.AF_._Init.call(this,aArg);this.
__proto__=C.AMe;this.Dq(C.IG);},_className:"Application::AnimalActionRateScreen"
};C.AMa={Wv:function(G){this.Agn();this.IY(A.aaR(A.acf.AU$),[this,this.ATB],5);this.
IY(A.aaR(A.acf.A5i),[this,this.Bln],4);this.IY(A.aaR(A.acf.AF9),[this,this.ATm],
3);this.IY(A.aaR(A.acf.AnY),[this,this.AwN],2);this.IY(A.aaR(A.acf.AdQ),[this,this.
AEK],1);this.IY(A.aaR(A.acf.Auv),[this,this.AEE],0);A._GetAutoObject(C.BS).FS();
A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abs:function(){return C.AM5;},Abt:function(
){return C.ADb;},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
AyY=A._NewObject(A.Device.BoolFilterCriterion,0);AyY.Initialize(8,0,true,true);Be.
CW(AyY);A._GetAutoObject(A.Device.Device).Am.Bl(Be);},HO:function(G){C.GU.HO.call(
this,G);if(this.Akg()===false){this.N.Cs(A.aaL(A.ach.AGg));this.N.Ck=[this,this.
A5P];this.N.FI(A.jV);}this.N.ON(false);this.N.OO(false);},Aga:function(){A._GetAutoObject(
C.A$).Cg(40);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.
AMa;var B;this.Dq(C.AOX);this.Dz(A.aaR(A.acf.A7E));this.AwI([B=A._GetAutoObject(
A.Device.Device),B.A79,B.BaF]);},_ReInit:function(){C.GU._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7E));},_className:"Application::AlarmListScreen"};C.ANu={DE:function(
G){},AlY:function(G){if(!!this.Bj)A.ab5("%i",this.Bj.AD.Go);var Aa=(C.ABX.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);A._GetAutoObject(
C.A$).Cg(13);}},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azg=A._NewObject(A.Device.BoolFilterCriterion,0);Azg.Initialize(9,0,true,true);Be.
CW(Azg);A._GetAutoObject(A.Device.Device).Am.Bl(Be);},HO:function(G){C.GU.HO.call(
this,G);this.N.ON(false);this.N.OO(false);},_Init:function(aArg){C.GU._Init.call(
this,aArg);this.__proto__=C.ANu;this.Dq(C.AOZ);this.Dz(A.aaR(A.acf.A7F));},_ReInit:
function(){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.A7F));},_className:"Application::ControlListScreen"
};C.Aem={Filter:null,Ep:0,I_:10,TableId:0,Operator:1,CP:function(){var F;this.To((
F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));},Bk:function(aSize){C.
Co.Bk.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.I_),aSize[1]]));
},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.pe([this,this.
L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));else this.
To(null);},Ahm:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.L$],this);},Nc:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this,this.
L$],this);},To:function(AH){if(!!AH)this.T(A._GetAutoObject(A.Device.Helper).A6s(
this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper).AmR(this.TableId
,this.Ep));},OM:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.L$],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aem;this.V.H(AHD);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
Qy={H4:null,Bk:function(aSize){var B;C.Aem.Bk.call(this,aSize);this.H4.H([(aSize[
0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I_,0,this.
H4.M[0]-this.I_,aSize[1]]);},To:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmR(this.TableId,this.Ep));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av&&Av.A4)this.H4.Cv(1);else this.H4.Cv(0);},_Init:function(aArg
){C.Aem._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.Qy;this.H4.H(AHE);this.H4.Cv(0);this.J(this.H4,0);this.H4.Aw(A.aaL(A.ach.AqN));
},_Done:function(){this.__proto__=C.Aem;this.H4._Done();C.Aem._Done.call(this);}
,_ReInit:function(){C.Aem._ReInit.call(this);this.H4._ReInit();},_Mark:function(
D){var B;C.Aem._Mark.call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APw={Ap:null,Text:null,De:function(
E){C.BR.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APw;this.Ap.H(AWP);this.Text.H(AWQ);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.Aex));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjR={
AW:null,T1:null,Gr:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DY],A._GetAutoObject(A.Device.Device).Am,0);A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);A.pe([this,this.DY],this);},Bk:function(aSize){
var B;C.BR.Bk.call(this,aSize);this.T1.H(A.abJ(this.T1.M,A.abe(this.AW.M.slice(0
,2),AWR)));this.T1.H(A.abK(this.T1.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWS
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(Iy)this.T1.L(A.jb.AV);else this.T1.L(A.jb.AmZ);},De:function(E){
C.BR.De.call(this,E);this.Gr.L(E);this.D2.Zt(E);},Ww:function(E){C.BR.Ww.call(this
,E);this.D2.CT(E);},Ako:function(){return this.AW.Ako();},Av$:function(){return this.
AW.Av$();},DY:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T1={I:this},0);A.acg.Ap._Init.call(this.Gr={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C5._Init.call(this.A_={I:this
},0);this.__proto__=C.AjR;this.AW.H(AWT);this.T1.H(AWU);this.T1.Ng(2);this.Gr.H(
AWV);this.Gr.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AWW);this.D2.Zt(A.jb.Bm);this.
D2.CT(A.jb.Re);this.D2.Hh(2);this.A_.DC(AWX);this.A_.DL(AWY);this.A_.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T1,0);this.J(this.Gr,0);this.J(this.D2,0);this.J(this.
A_,0);this.Bb(this.AW);this.Gr.Aw(A.aaL(A.ach.Gr));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.T1._Done(
);this.Gr._Done();this.D2._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.T1._ReInit();this.Gr._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Di:null,Im:null,Il:null
,Af9:function(G){if(this.Ey<0)this.LZ(1);else if(this.Ey===9)this.LZ(0);else this.
LZ(this.Ey+1);A.pe(this.Di,this);},Ai:function(Ae){var B;C.Ey.Ai.call(this,Ae);var
G$=((Ae&0x10)===0x10);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.Dr(256);}else if(G$){this.Background.L(this.MZ);this.
Text.L(A.jb.Text);this.Dr(256);}else{this.Background.L(this.MZ);this.Text.L(A.jb.
Text);this.Dr(128);}},Af8:function(G){if(this.Ey<=0)this.LZ(9);else this.LZ(this.
Ey-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ey._Init.call(this,aArg);A.Core.
BM._Init.call(this.Im={I:this},0);A.Core.BM._Init.call(this.Il={I:this},0);this.
__proto__=C.DF;this.Im.Filter=4;this.Il.Filter=5;this.Im.BN=[this,this.Af9];this.
Im.D1=[this,this.Af9];this.Il.BN=[this,this.Af8];this.Il.D1=[this,this.Af8];},_Done:
function(){this.__proto__=C.Ey;this.Im._Done();this.Il._Done();C.Ey._Done.call(this
);},_ReInit:function(){C.Ey._ReInit.call(this);this.Im._ReInit();this.Il._ReInit(
);},_Mark:function(D){var B;C.Ey._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Il)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Di:null,Ct:null,CU:null,Dx:null,Eo:null,FV:null,ET:null,Fh:null,E8:null,M4:0,AQ5:
false,Aqq:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqq)this.ET.AeU(true);else this.ET.AeU(false);},AwE:function(E){var B;
if(E===this.Ako())return;var Af3=E;var DW=this.ET;while(!!DW){if(Af3>0){DW.LZ(Af3
%10);Af3=(Af3/10)|0;}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.QD(DW,2,0x11))?
B:null);}},Ako:function(){return A.wz(this.Av$(),-1,10);},Ol:function(G){if(this.
FV.Ey>=0)this.BfP(7);},MU:function(G){if(((this.Ako()>0)||this.AQ5)&&(this.Ct.Ey<
0))this.BfP(2);else if(this.Ako()<=0)this.E8.NH=true;},Adp:function(G){A.pe(this.
Di,this);},BfP:function(Gw){var B;var ALu=0;var DW=null;switch(Gw){case 2:{DW=this.
Ct;ALu=7;}break;case 7:{DW=this.ET;ALu=2;}break;default:throw new Error(AWZ);}while(
!!DW){var A2C=(C.DF.isPrototypeOf(B=this.QD(DW,ALu,0x11))?B:null);if(!!A2C)DW.LZ(
A2C.Ey);else if(ALu===7)DW.LZ(0);else DW.LZ(-1);DW=A2C;}A.pe([this,this.Adp],this
);},AeU:function(E){if(this.Aqq===E)return;this.Aqq=E;this.An();},Bmp:function(E
){if(this.AQ5===E)return;this.AQ5=E;},AS3:function(E){var B;if(E===this.Av$())return;
var Af3=E;var DW=this.ET;while(!!DW){if(Af3.length>0){DW.LZ(A.wz(A.ab2(Af3,1),-1
,10));Af3=A.abV(Af3,Af3.length-1);}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.
QD(DW,2,0x11))?B:null);}},Av$:function(){var B;var Iw=A.jV;var O=0;var B5=this.Ct;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iw=Iw+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TL(B5,0x11))?B:null);}return Iw;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Ct={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF.
_Init.call(this.FV={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.BM._Init.
call(this.Fh={I:this},0);A.Core.BM._Init.call(this.E8={I:this},0);this.__proto__=
C.AW;this.H(Ayd);this.Ct.AZ(0x3);this.Ct.H(AHF);this.CU.AZ(0x3);this.CU.H(AHG);this.
Dx.AZ(0x3);this.Dx.H(AHH);this.Eo.AZ(0x3);this.Eo.H(AHI);this.FV.AZ(0x3);this.FV.
H(AHJ);this.ET.AZ(0x3);this.ET.H(AHK);this.ET.LZ(0);this.Fh.Filter=6;this.E8.Filter=
7;this.M4=A.jb.CK;this.J(this.Ct,0);this.J(this.CU,0);this.J(this.Dx,0);this.J(this.
Eo,0);this.J(this.FV,0);this.J(this.ET,0);this.Bb(this.ET);this.Ct.Di=[this,this.
Adp];this.CU.Di=[this,this.Adp];this.Dx.Di=[this,this.Adp];this.Eo.Di=[this,this.
Adp];this.FV.Di=[this,this.Adp];this.ET.Di=[this,this.Adp];this.Fh.BN=[this,this.
Ol];this.E8.BN=[this,this.MU];},_Done:function(){this.__proto__=A.Core.P;this.Ct.
_Done();this.CU._Done();this.Dx._Done();this.Eo._Done();this.FV._Done();this.ET.
_Done();this.Fh._Done();this.E8._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Ct._ReInit();this.CU._ReInit();this.Dx._ReInit(
);this.Eo._ReInit();this.FV._ReInit();this.ET._ReInit();this.Fh._ReInit();this.E8.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bhi="15ed31e9";C.BCk={Undefined:0,BDn:1,BCC:2};C.AkI={
Tm:null,AiT:null,La:null,ANy:null,An7:null,push:function(MI){if(!this.Tm){MI.Ahp=
null;MI.Ms=null;this.Tm=MI;this.AiT=this.Tm;}else{MI.Ahp=this.AiT;MI.Ms=null;this.
AiT.Ms=MI;this.AiT=MI;}},BBi:function(MI){var Qd=this.Tm;while(!!Qd){if(Qd.JI.Id===
MI.Id)return Qd;Qd=Qd.Ms;}return Qd;},BA2:function(MI){if(MI===this.Tm)this.pop(
);else if(MI===this.AiT){MI=MI.Ahp;if(!!MI)MI.Ms=null;this.AiT=MI;}else{MI.Ahp.Ms=
MI.Ms;MI.Ms.Ahp=MI.Ahp;}},Ahf:function(E){var F;if(this.La===E)return;this.La=E;
if(!!this.La)this.La.AgC(2);(F=this.ANy,F[2].call(F[0],this.La));},Ve:function(G
){var Qd=(C.ATO.isPrototypeOf(G)?G:null);if(!!Qd){if(!Qd.JI.PopupState){if(!this.
La)this.Ahf(this.top());}else if(Qd.JI.PopupState===4){this.pop();this.Ahf(this.
top());}else if(Qd.JI.PopupState===5){this.pop();this.Ahf(this.top());}else if(Qd.
JI.PopupState===7){this.pop();this.Ahf(this.top());}else if(Qd.JI.PopupState===8
){this.pop();this.Ahf(this.top());}else if(Qd.JI.PopupState===6){if(Qd===this.La
){this.pop();this.Ahf(this.top());}else this.BA2(Qd);}else if(Qd.JI.PopupState===
3){this.pop();this.Ahf(this.top());}}},pop:function(){var AKQ=null;if(!!this.Tm){
AKQ=this.Tm;if(this.Tm===this.AiT){this.Tm=null;this.AiT=null;}else{this.Tm=this.
Tm.Ms;if(!this.Tm)throw new Error(AW0);this.Tm.Ahp=null;}AKQ.Ahp=null;AKQ.Ms=null;
}return AKQ;},top:function(){return this.Tm;},BAJ:function(G){var B;var AtU=(A.Device.
PopupContext.isPrototypeOf(B=this.An7.JI)?B:null);if(!!AtU){var A3Q=this.BBi(AtU
);if(!!A3Q){A3Q.A9v(AtU);if(!AtU.Show)A3Q.AgC(6);}else if(AtU.Show){var AKu=A._NewObject(
C.ATO,0);AKu.A9v(AtU);AKu.ASM=[this,this.Ve];this.push(AKu);AKu.AgC(0);}}},_Init:
function(aArg){A.Core.A$h._Init.call(this.An7={I:this},0);this.__proto__=C.AkI;this.
An7.ASc=[this,this.BAJ];this.An7.BlJ(A._GetAutoObject(A.Device.Device).AnK);A.h7++;
},_Done:function(){this.__proto__=null;this.An7._Done();A.h7--;},_ReInit:function(
){this.An7._ReInit();},_Mark:function(D){var B;if((B=this.Tm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.La)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATO={S4:null,Ms:null,Ahp:null,JI:null,ASM:null,PopupIdToString:null,Aih:function(
Bwp,BwZ,Bxi,Bw_,Bxa,Bw9,BwI){var Vg=A._NewObject(C.ATN,0);Vg.BmS(this.JI.Id);Vg.
A_d(Bwp);Vg.ASN=Bw9;Vg.A_f(this.JI.Ak1);Vg.A92(this.JI.AkH);Vg.Bx=A._NewObject(C.
N,0);Vg.KR().Cl=Bxa;Vg.KR().Ck=null;Vg.KR().CB=Bw_;Vg.KR().CV(Bxi);Vg.KR().Cs(null
);Vg.KR().Hu(BwZ);Vg.KR().AFa(BwI);return Vg;},Akp:function(){if(!this.S4){var AiR=
this.PopupIdToString.BH(this.JI.Id);switch(this.JI.Id){case 46:this.S4=this.Aih(
AiR,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKy],[this,this.AiL],1);break;case 91:case
92:this.S4=this.Aih(AiR,A.jV,A.jV,null,null,[this,this.AiL],0);break;case 39:this.
S4=this.Aih(AiR,A.aaR(A.acf.Amw),A.aaR(A.acf.Ok),[this,this.A2P],[this,this.A2Q]
,[this,this.AiL],3);break;case 13:this.S4=this.Aih(AiR,A.aaR(A.acf.Amw),A.aaR(A.
acf.BnT),[this,this.A2O],[this,this.AKy],[this,this.AiL],3);break;case 25:this.S4=
this.Aih(AiR,A.aaR(A.acf.Amw),A.aaR(A.acf.Ok),[this,this.A2O],[this,this.AKy],[this
,this.AiL],3);break;case 16:case 24:case 49:case 74:this.S4=this.Aih(AiR,A.aaR(A.
acf.Amw),A.jV,[this,this.A2O],null,[this,this.AiL],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.S4=this.Aih(AiR,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2P],[this,this.A2Q],[this,this.AiL],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.S4=this.Aih(AiR,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKy],[this,this.AiL],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.S4=
this.Aih(AiR,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2P],[this,this.A2Q],[this
,this.AiL],3);break;default:A.ab5("%s",(AW1+this.JI.Id.toFixed())+AW2);}}switch(
this.JI.Id){case 16:case 49:this.S4.A_t(true);break;case 91:case 92:this.S4.A_t(
false);break;default:;}return this.S4;},AKy:function(G){this.AgC(4);},A2O:function(
G){this.AgC(5);},A2Q:function(G){this.AgC(7);},A2P:function(G){this.AgC(8);},AiL:
function(G){this.AgC(3);},A9v:function(E){if(this.JI===E)return;this.JI=E;if(!!this.
S4){this.Akp().A_f(this.JI.Ak1);this.Akp().A92(this.JI.AkH);}},AgC:function(Bxd){
var B;this.JI.BmT(Bxd);(B=this.ASM)?B[1].call(B[0],this):null;},BAh:function(G){
this.AgC(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATO;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.S4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahp)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASM)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Ga={BooleanToYesNo:null,Dn:function(
){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Ga;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afh={Uo:null,J_:function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.
AM!==BQ){if(!!this.Uo&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Uo,F[
2].call(F[0],false));break;case 1:(F=this.Uo,F[2].call(F[0],true));break;default:;
}A.abo(this.Uo,0);}},J5:function(G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.
AM!==BQ){if(!!this.Uo&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Uo,F[
2].call(F[0],false));break;case 1:(F=this.Uo,F[2].call(F[0],true));break;default:;
}A.abo(this.Uo,0);}},AkB:function(E){if(A.aaZ(this.Uo,E))return;if(!!this.Q)A.z$([
this,this.A3s],this.Uo,0);this.Uo=E;if(!!E)A.zX([this,this.A3s],E,0);if(!!E)A.pe([
this,this.A3s],this);},A3s:function(G){var F;if(!!this.Uo){if((F=this.Uo,F[1].call(
F[0])))this.By(1);else this.By(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afh;this.JU(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Uo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AT4={Jc:null,OT:null,IP:null,Gh:null,AK:null,Abh:null,AgH:null,TH:null,R7:null
,AcC:null,WX:null,Hd:null,ABm:true,Init:function(aArg){var B;A.zX([this,this.Al1
],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.AZ8],0);A.pe([this,this.Al1],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABm)this.N.C6(A.aaL(A.ach.
AQL));else this.N.C6(A.aaL(A.ach.AQM));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OT.L(A.jb.Bm);this.R7.Z(false);this.TH.Z(false);this.IP.Z(true);this.Gh.
Ar(false);(F=this.Gh.Q,F[2].call(F[0],this.Gh.B2));this.Background.L(A.jb.Gf);}else
if(this.Abh.Bw){this.OT.L(A.jb.Text);this.R7.Z(true);this.TH.Z(true);this.IP.Z(false
);this.Gh.Ar(false);(F=this.Gh.Q,F[2].call(F[0],this.Gh.B2));this.Background.L(A.
jb.E1);}else{this.OT.L(A.jb.Text);this.R7.Z(false);this.TH.Z(false);this.IP.Z(true
);this.Gh.Ar(true);this.Background.L(A.jb.CK);}if(this.AgH.Bw)this.WX.Z(true);else
this.WX.Z(false);},CF:function(G){A._GetAutoObject(A.Device.Device).AhC();},E3:function(
G){A._GetAutoObject(A.Device.Device).AnW();A._GetAutoObject(A.Device.Device).Ae6(
false);A._GetAutoObject(A.Device.Device).Un(false);},Al1:function(G){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BzZ],this);break;case 3:{A.pe([this,this.BeG],this);A.pe([B=this.Abh,B.AxA],this
);A.pe(this.Abh.Mx,this);}break;case 4:A.ab5("%s",AW3);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A$).Fu();},BAK:function(G){this.Bni(!this.ABm);},Bni:function(
E){if(this.ABm===E)return;this.ABm=E;if(!E)A._GetAutoObject(A.Device.Device).Ae6(
false);this.An();},BzZ:function(G){var B;this.BeG(this);if(this.ABm)A._GetAutoObject(
A.Device.Device).Ae6(true);A._GetAutoObject(A.Device.Device).WA(65280);A._GetAutoObject(
A.Device.Device).Un(true);A.pe([B=this.Abh,B.StartTimer],this);A.pe([B=this.AgH,
B.StartTimer],this);this.An();},Bz0:function(G){A._GetAutoObject(A.Device.Device
).Ae6(false);A._GetAutoObject(A.Device.Device).Un(false);this.An();},Bz2:function(
G){this.An();},BeG:function(G){A._GetAutoObject(A.Device.Device).AhC();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jc._Init.call(this.Jc={I:this},0);C.CH._Init.
call(this.OT={I:this},0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gh._Init.
call(this.Gh={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abh={I:this},0);A.Core.Timer._Init.call(this.AgH={I:this},0);A.acg.Ap.
_Init.call(this.TH={I:this},0);A.acg.Ap._Init.call(this.R7={I:this},0);A.acg.Text.
_Init.call(this.AcC={I:this},0);C.WX._Init.call(this.WX={I:this},0);C.CH._Init.call(
this.Hd={I:this},0);this.__proto__=C.AT4;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jc.H(AW4);this.Jc.AkE(0);this.OT.H(AW5);this.OT.R(A.aaR(A.acf.A$m));
this.OT.L(A.jb.Text);this.IP.H(AW6);this.IP.L(A.jb.AV);this.IP.Zr(true);this.Gh.
Fl(1750);this.Gh.Uk(750);this.Gh.Akz(0);this.Gh.Ar(true);this.Gh.B2=3;this.AK.H(
Aye);this.Abh.PO(-1);this.Abh.Wx(1000);this.AgH.PO(-1);this.AgH.Wx(5000);this.TH.
H(AHL);this.R7.H(AHL);this.R7.L(A.jb.E1);this.AcC.H(Aye);this.AcC.R(A.aaR(A.acf.
A_Y));this.AcC.L(A.jb.Text);this.WX.H(Aye);this.Hd.H(AW7);this.Hd.Ar(false);this.
Hd.R(A.aaR(A.acf.RangeTest));this.Hd.L(A.jb.Text);this.J(this.Jc,0);this.J(this.
OT,0);this.J(this.IP,0);this.J(this.AK,0);this.J(this.TH,0);this.J(this.R7,0);this.
J(this.AcC,0);this.J(this.WX,0);this.J(this.Hd,0);this.N.CB=[this,this.Ev];this.
N.Cl=[this,this.BAK];this.N.CY(A.aaL(A.ach.E2));this.OT.S(A.aaL(A.fl.Af));this.OT.
A2(A.aaL(A.fl.Ak));this.OT.Cu(A.aaL(A.fl.Bh));this.IP.Aw(A.aaL(A.ach.ADD));this.
Gh.Q=[B=this.IP,B.ASp,B.Cv];this.Abh.Mx=[this,this.Bz0];this.AgH.Mx=[this,this.Bz2
];this.TH.Aw(A.aaL(A.ach.TH));this.R7.Aw(A.aaL(A.ach.R7));this.AcC.S(A.aaL(A.fl.
Af));this.WX.As([B=A._GetAutoObject(A.Device.Device),B.ASD,B.AZ9]);this.Hd.S(A.aaL(
A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jc._Done();this.OT._Done();this.IP._Done();this.Gh._Done();this.AK._Done(
);this.Abh._Done();this.AgH._Done();this.TH._Done();this.R7._Done();this.AcC._Done(
);this.WX._Done();this.Hd._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jc._ReInit();this.OT._ReInit();this.IP._ReInit();this.Gh.
_ReInit();this.AK._ReInit();this.Abh._ReInit();this.AgH._ReInit();this.TH._ReInit(
);this.R7._ReInit();this.AcC._ReInit();this.WX._ReInit();this.Hd._ReInit();this.
OT.R(A.aaR(A.acf.A$m));this.AcC.R(A.aaR(A.acf.A_Y));this.Hd.R(A.aaR(A.acf.RangeTest
));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(A.aaL(A.fl.Ak));this.OT.Cu(A.aaL(A.fl.Bh
));this.AcC.S(A.aaL(A.fl.Af));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jc)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbU={
ScreenType:0,Ne:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nh:
function(G){A._GetAutoObject(C.A$).Cg(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbU;},_className:"Application::MenuItemScreen"
};C.T9={Ad5:null,Mj:null,Amx:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.Amx){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);
if(this.KE)this.Mj.L(A.jb.Bm);else if(this.Hf)this.Mj.L(A.jb.Text);else this.Mj.
L(A.jb.Bm);}},IW:function(G){var F,CA;if(!!this.Ad5){(CA=this.Ad5,CA[2].call(CA[
0],!(F=this.Ad5,F[1].call(F[0]))));this.AES((F=this.Ad5,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A2V:function(G){this.KE=true;this.DJ(this);},AES:function(
E){if(this.Amx===E)return;this.Amx=E;this.DJ(this);this.An();},A3l:function(G){var
F;this.AES((F=this.Ad5,F[1].call(F[0])));},A0q:function(s){this.A3l(s);},DJ:function(
G){var F;if(!this.N||!this.KE)return;if(this.Amx){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A7U));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},ASS:function(E){if(A.aaZ(this.Ad5,E))
return;if(!!this.Ad5)A.z$([this,this.A0q],this.Ad5,0);this.Ad5=E;if(!!E)A.zX([this
,this.A0q],E,0);if(!!E)A.pe([this,this.A0q],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mj={I:this},0);this.__proto__=C.T9;this.
V.L(A.jb.H6);this.Mj.H(AHM);this.Mj.Cv(0);this.J(this.Mj,0);this.Mj.Aw(A.aaL(A.ach.
AqN));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mj._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mj._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad5)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANG={H3:null,IJ:null,_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.SM._Init.call(this.H3={I:this},0);C.AGz._Init.call(this.
IJ={I:this},0);this.__proto__=C.ANG;var B;this.I8(A.aaR(A.acf.ACm));this.H3.H(AhV
);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.Bg(true);this.IJ.H(UV);this.
IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.J(this.H3,-1);this.J(this.IJ,-1);this.
H3.AeR([B=this.H3,B.FP]);this.H3.Gn([this,this.D_,this.GN]);this.H3.Aky(A.aaL(A.
ach.Edit));this.H3.Ab7([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);this.IJ.
AeR([B=this.IJ,B.FP]);this.IJ.Gn([this,this.D_,this.GN]);this.IJ.Aky(A.aaL(A.ach.
Edit));this.IJ.Ab7([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);},_Done:function(
){this.__proto__=C.Ce;this.H3._Done();this.IJ._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.H3._ReInit();this.IJ._ReInit();this.I8(A.
aaR(A.acf.ACm));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Ce._Mark.call(this,D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AU1={Rb:null,FD:null,BZ:null,OG:null,YK:null,Aa2:null,_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.Rb._Init.call(this.Rb={I:this},0);C.AMA._Init.call(this.
FD={I:this},0);C.AUA._Init.call(this.BZ={I:this},0);C.AUC._Init.call(this.OG={I:
this},0);C.Afh._Init.call(this.YK={I:this},0);C.Aa2._Init.call(this.Aa2={I:this}
,0);this.__proto__=C.AU1;var B;this.I8(A.aaR(A.acf.Temperature));this.FD.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AW8);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arn));this.BZ.Bg(false);this.OG.H(Aag);this.OG.Aj(true);this.OG.T(A.aaR(A.acf.Undertemperature
));this.OG.Bg(true);this.OG.By(3800);this.OG.F0(3000);this.OG.EV(5000);this.OG.A_m(
A.aaR(A.acf.AGM));this.YK.H(AW9);this.YK.Aj(true);this.YK.Z(true);this.YK.T(A.aaR(
A.acf.A4P));this.J(this.BZ,0);this.J(this.OG,0);this.J(this.YK,0);this.BZ.AeR([B=
this.BZ,B.FP]);this.BZ.Gn([this,this.D_,this.GN]);this.BZ.Aky(A.aaL(A.ach.Edit));
this.BZ.LX([B=this.BZ,B.AyM]);this.BZ.L0(A.aaL(A.ach.AnN));this.BZ.As([B=this.FD
,B.B7,B.B8]);this.BZ.CI(this.FD);this.BZ.A90([B=this.FD,B.ASL,B.A0e]);this.BZ.A9Z([
B=this.FD,B.ASK,B.A0d]);this.OG.LX([B=this.BZ,B.AyM]);this.OG.L0(A.aaL(A.ach.AnN
));this.OG.As([B=A._GetAutoObject(A.Device.Device),B.A8Y,B.Ba3]);this.YK.CI(this.
Aa2);this.YK.AkB([B=A._GetAutoObject(A.Device.Device),B.A8i,B.BaN]);},_Done:function(
){this.__proto__=C.Ce;this.Rb._Done();this.FD._Done();this.BZ._Done();this.OG._Done(
);this.YK._Done();this.Aa2._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.Rb._ReInit();this.FD._ReInit();this.BZ._ReInit();this.
OG._ReInit();this.YK._ReInit();this.Aa2._ReInit();this.I8(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arn));this.OG.T(A.aaR(A.acf.Undertemperature));this.OG.
A_m(A.aaR(A.acf.AGM));this.YK.T(A.aaR(A.acf.A4P));},_Mark:function(D){var B;C.Ce.
_Mark.call(this,D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANT={PD:null,PE:null,Sp:null,V1:null,Sr:null,Sq:null,Ga:null,Acr:null,Init:function(
aArg){A.zX([this,this.BoC],this.PE.Q,0);},BoC:function(G){var F;A._GetAutoObject(
A.Device.Device).AwZ((F=this.PE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.Io._Init.call(this.PD={I:this},0);C.BW._Init.call(this.PE={
I:this},0);C.Afh._Init.call(this.Sp={I:this},0);C.Io._Init.call(this.V1={I:this}
,0);C.Afh._Init.call(this.Sr={I:this},0);C.Afh._Init.call(this.Sq={I:this},0);C.
Ga._Init.call(this.Ga={I:this},0);C.Acr._Init.call(this.Acr={I:this},0);this.__proto__=
C.ANT;var B;this.N.H(Xc);this.I8(A.aaR(A.acf.Device));this.PD.H(AhV);this.PD.Aj(
true);this.PD.T(A.aaR(A.acf.A_8));this.PD.Bg(false);this.PD.F0(2);this.PD.EV(60);
this.PD.IM(A.aaR(A.acf.AG1));this.PD.I9(A.aaR(A.acf.AG1));this.PE.H(AW_);this.PE.
Aj(true);this.PE.T(A.aaR(A.acf.A$d));this.PE.Bg(true);this.PE.By(0);this.PE.F0(-
1);this.PE.EV(1);this.Sp.H(Aag);this.Sp.Aj(true);this.Sp.T(A.aaR(A.acf.HB));this.
Sp.Bg(false);this.Sp.By(0);this.Sp.F0(-1);this.Sp.EV(1);this.V1.H(Ale);this.V1.Aj(
true);this.V1.T(A.aaR(A.acf.A5b));this.V1.Bg(true);this.V1.IM(AfA);this.V1.I9(AfA
);this.Sr.H(AcO);this.Sr.Aj(true);this.Sr.T(A.aaR(A.acf.AsM));this.Sr.Bg(false);
this.Sr.By(1);this.Sr.F0(-1);this.Sr.EV(1);this.Sq.H(Aor);this.Sq.Aj(true);this.
Sq.T(A.aaR(A.acf.Asq));this.Sq.Bg(true);this.Sq.By(0);this.Sq.F0(-1);this.Sq.EV(
1);this.Acr.As(A._GetAutoObject(A.Device.Device).Axz);this.J(this.PD,0);this.J(this.
PE,0);this.J(this.Sp,0);this.J(this.V1,0);this.J(this.Sr,0);this.J(this.Sq,0);this.
PD.As([B=A._GetAutoObject(A.Device.Device),B.A8Q,B.BaZ]);this.PE.As([B=this.Acr,
B.B7,B.B8]);this.PE.CI(this.Acr);this.Sp.CI(this.Ga);this.Sp.AkB([B=A._GetAutoObject(
A.Device.Device),B.AEr,B.AIK]);this.V1.As([B=A._GetAutoObject(A.Device.Device),B.
A8f,B.BaK]);this.Sr.CI(this.Ga);this.Sr.AkB([B=A._GetAutoObject(A.Device.Device)
,B.A8Z,B.Ba4]);this.Sq.CI(this.Ga);this.Sq.AkB([B=A._GetAutoObject(A.Device.Device
),B.ASt,B.AZ2]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.PD._Done(
);this.PE._Done();this.Sp._Done();this.V1._Done();this.Sr._Done();this.Sq._Done(
);this.Ga._Done();this.Acr._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.PD._ReInit();this.PE._ReInit();this.Sp._ReInit();this.
V1._ReInit();this.Sr._ReInit();this.Sq._ReInit();this.Ga._ReInit();this.Acr._ReInit(
);this.I8(A.aaR(A.acf.Device));this.PD.T(A.aaR(A.acf.A_8));this.PD.IM(A.aaR(A.acf.
AG1));this.PD.I9(A.aaR(A.acf.AG1));this.PE.T(A.aaR(A.acf.A$d));this.Sp.T(A.aaR(A.
acf.HB));this.V1.T(A.aaR(A.acf.A5b));this.Sr.T(A.aaR(A.acf.AsM));this.Sq.T(A.aaR(
A.acf.Asq));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.PD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUe={V4:null,V3:
null,QJ:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BhZ
],this.QJ.Q,0);},BhZ:function(G){var F;A._GetAutoObject(A.Device.Device).Akv((F=
this.QJ.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
Nb._Init.call(this.V4={I:this},0);C.Nb._Init.call(this.V3={I:this},0);C.AUw._Init.
call(this.QJ={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUe;var B;this.I8(A.aaR(A.acf.Asj));this.V4.H(IR);this.
V4.Aj(true);this.V4.T(A.aaR(A.acf.AjE));this.V4.Bg(false);this.V4.Ne(87);this.V3.
H(AW$);this.V3.Aj(true);this.V3.T(A.aaR(A.acf.Aql));this.V3.Bg(true);this.V3.Ne(
88);this.QJ.H(UV);this.QJ.Aj(true);this.QJ.T(A.aaR(A.acf.A4U));this.QJ.Bg(false);
this.QJ.F0(-1);this.QJ.EV(1);this.EartagNrAssignmentMode.As(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V4,0);this.J(this.V3,0);this.J(this.
QJ,0);this.V4.AR=[B=this.V4,B.Nh];this.V3.AR=[B=this.V3,B.Nh];this.QJ.As([B=this.
EartagNrAssignmentMode,B.B7,B.B8]);this.QJ.CI(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.V4._Done();this.V3._Done(
);this.QJ._Done();this.EartagNrAssignmentMode._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V4._ReInit();this.V3._ReInit();this.QJ._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I8(A.aaR(A.acf.Asj));this.V4.T(A.aaR(
A.acf.AjE));this.V3.T(A.aaR(A.acf.Aql));this.QJ.T(A.aaR(A.acf.A4U));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WX={Q:null,TransponderProtocolToString:
null,Apo:null,Background:null,Y:null,Sj:null,GJ:null,PJ:null,OI:null,Pn:null,C7:
null,Gu:null,SF:null,N1:null,CountryToString:null,As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kc],E,0);if(!!E)A.pe([this,this.Kc],this);},Kc:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GJ.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BO=(F=this.Q,F[1].call(F[0])).Biv();if(BO<900){var J3=A._GetAutoObject(
A.Device.Converter).ANx(BO);if(!!J3)this.C7.R(((this.CountryToString.Lt(J3)+AcM)+
BO.toFixed())+O5);else this.C7.R(BO.toFixed());if(J3===10){var AKa=this.A6N((F=this.
Q,F[1].call(F[0])).Id);this.C7.R(this.C7.String+((((AHN+this.Apo.Bpm(AKa))+AcM)+
A.abl(this.Apo.Bpl(AKa),2,10))+O5));}this.C7.Z(true);this.Pn.Z(true);this.OI.Z(false
);this.PJ.Z(false);}else{this.OI.R(((A._GetAutoObject(A.Device.Converter).Bhl(BO
)+AcM)+BO.toFixed())+O5);this.OI.Z(true);this.PJ.Z(true);this.C7.Z(false);this.Pn.
Z(false);}if(BO===276){this.Gu.R(this.Apo.BH(this.A6N((F=this.Q,F[1].call(F[0])).
Id)));this.Gu.Z(true);}else this.Gu.Z(false);this.N1.R(this.TransponderProtocolToString.
BH((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GJ.R(A.jV);this.OI.
R(A.jV);this.Gu.R(A.jV);this.C7.R(A.jV);this.N1.R(A.jV);}},A6N:function(J1){var Qr=
0;var J3=A._GetAutoObject(A.Device.Converter).ZZ(J1);switch(J3){case 10:{var Ge=
A._GetAutoObject(A.Device.Helper).Se(J1,8,2)|0;Qr=A._GetAutoObject(A.Device.Converter
).ACM(Ge);}break;default:;}return Qr;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apo={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Sj={I:this},0);C.CH._Init.call(this.GJ={I:this},0);C.CH._Init.
call(this.PJ={I:this},0);C.CH._Init.call(this.OI={I:this},0);C.CH._Init.call(this.
Pn={I:this},0);C.CH._Init.call(this.C7={I:this},0);C.CH._Init.call(this.Gu={I:this
},0);C.CH._Init.call(this.SF={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WX;
this.H(AcN);this.Background.AZ(0x3F);this.Background.H(AcN);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcN);this.Y.JO(9);this.Sj.H(AHO);this.Sj.Aj(true
);this.Sj.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.Sj.A6(0x11);this.Sj.L(A.jb.
Text);this.GJ.H(AXa);this.GJ.Aj(true);this.GJ.R(AHP);this.GJ.A6(0x14);this.GJ.L(
A.jb.Text);this.PJ.H(AHQ);this.PJ.Aj(true);this.PJ.R(A.aaR(A.acf.A_C)+A.aaR(A.acf.
Colon));this.PJ.A6(0x11);this.PJ.L(A.jb.Text);this.OI.H(AHR);this.OI.Aj(true);this.
OI.R(AXb);this.OI.A6(0x14);this.OI.L(A.jb.Text);this.Pn.H(AHQ);this.Pn.Aj(true);
this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.Pn.A6(0x11);this.Pn.L(A.jb.Text
);this.C7.H(AHR);this.C7.Aj(true);this.C7.R(AXc);this.C7.A6(0x14);this.C7.L(A.jb.
Text);this.Gu.H(AXd);this.Gu.Aj(true);this.Gu.R(AXe);this.Gu.A6(0x14);this.Gu.L(
A.jb.Text);this.SF.H(AXf);this.SF.Aj(true);this.SF.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SF.A6(0x11);this.SF.L(A.jb.Text);this.N1.H(AXg);this.N1.Aj(true);this.
N1.R(AXh);this.N1.A6(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sj,0);this.J(this.GJ,0);this.J(this.PJ,0);this.J(this.OI,0
);this.J(this.Pn,0);this.J(this.C7,0);this.J(this.Gu,0);this.J(this.SF,0);this.J(
this.N1,0);this.Sj.S(A.aaL(A.fl.Ak));this.Sj.A2(A.aaL(A.fl.Bh));this.GJ.S(A.aaL(
A.fl.Ak));this.GJ.A2(A.aaL(A.fl.Bh));this.PJ.S(A.aaL(A.fl.Ak));this.PJ.A2(A.aaL(
A.fl.Bh));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bh));this.Pn.S(A.aaL(A.
fl.Ak));this.Pn.A2(A.aaL(A.fl.Bh));this.C7.S(A.aaL(A.fl.Ak));this.C7.A2(A.aaL(A.
fl.Bh));this.Gu.S(A.aaL(A.fl.Ak));this.Gu.A2(A.aaL(A.fl.Bh));this.SF.S(A.aaL(A.fl.
Ak));this.SF.A2(A.aaL(A.fl.Bh));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apo._Done();this.Background._Done();this.Y._Done();this.Sj._Done();
this.GJ._Done();this.PJ._Done();this.OI._Done();this.Pn._Done();this.C7._Done();
this.Gu._Done();this.SF._Done();this.N1._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apo._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sj.
_ReInit();this.GJ._ReInit();this.PJ._ReInit();this.OI._ReInit();this.Pn._ReInit(
);this.C7._ReInit();this.Gu._ReInit();this.SF._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Sj.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.PJ.R(A.aaR(A.acf.A_C
)+A.aaR(A.acf.Colon));this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.SF.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Sj.S(A.aaL(A.fl.Ak));this.Sj.A2(A.aaL(A.fl.
Bh));this.GJ.S(A.aaL(A.fl.Ak));this.GJ.A2(A.aaL(A.fl.Bh));this.PJ.S(A.aaL(A.fl.Ak
));this.PJ.A2(A.aaL(A.fl.Bh));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bh
));this.Pn.S(A.aaL(A.fl.Ak));this.Pn.A2(A.aaL(A.fl.Bh));this.C7.S(A.aaL(A.fl.Ak)
);this.C7.A2(A.aaL(A.fl.Bh));this.Gu.S(A.aaL(A.fl.Ak));this.Gu.A2(A.aaL(A.fl.Bh)
);this.SF.S(A.aaL(A.fl.Ak));this.SF.A2(A.aaL(A.fl.Bh));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QR={D2:null,A_Q:A.jV,Ai:function(Ae){C.Fi.Ai.call(
this,Ae);if(this.Mn.Fk())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zt(this.G4.AQ);},Zw:function(E){if(this.A_Q===E)return;this.A_Q=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fi._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QR;this.Background.H(AXi);this.
Mn.H(W3);this.OB.H(AHS);this.QX.H(AHS);this.D2.H(AXj);this.D2.Z(false);this.J(this.
D2,0);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fi;this.D2._Done();C.Fi._Done.call(this
);},_ReInit:function(){C.Fi._ReInit.call(this);this.D2._ReInit();this.G4.S(A.aaL(
A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fi._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,Aez:null,Ap:null,Text:null
,DK:A.jV,AmK:0,MZ:0,I_:0,A5e:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BB0:function(G){this.Ap.H(this.Text.M);this.
Aez.H(this.Text.M);},Zt:function(E){if(this.AmK===E)return;this.AmK=E;this.Aez.L(
E);this.Text.L(E);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hh:function(E){
if(this.I_===E)return;this.I_=E;this.Text.Hh(E);},Bll:function(E){if(this.A5e===
E)return;this.A5e=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.Aez={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHT);
this.Aez.AZ(0x8);this.Aez.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHT);this.Text.Hh(5);this.Text.I7(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.Aez,0);this.J(this.Ap,0);this.J(this.Text,0);this.
Aez.Aw(A.aaL(A.ach.APT));this.Ap.Aw(A.aaL(A.ach.APS));this.Text.Q1([this,this.BB0
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Aez._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Aez._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T5={DZ:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},CF:function(
G){C.AB.CF.call(this,G);this.ALj(this);A._GetAutoObject(A.Device.Device).Am.Bl(null
);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(A.Device.Helper
).AkN();A._GetAutoObject(A.Device.Helper).Asn();},Ie:function(G){},AcR:function(
s){this.Ie(s);},A3a:function(G){A._GetAutoObject(C.A$).Fu();},Fe:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},ALj:function(G){},BF6:function(s){this.ALj(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T5;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dq(C.AqZ);this.
DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.L(A.jb.CK);this.Y.H(E$);this.Y.JO(9);this.Ay.H(
Iq);this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CB=[this,this.A3a
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe];},_Done:function(){this.__proto__=
C.AB;this.DZ._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVz={Wv:function(
G){this.Agn();this.IY(A.aaR(A.acf.AU9),[this,this.ATA],7);this.IY(A.aaR(A.acf.Ask
),[this,this.Blo],6);this.IY(A.aaR(A.acf.AF9),[this,this.ATm],3);this.IY(A.aaR(A.
acf.AnY),[this,this.AwN],2);this.IY(A.aaR(A.acf.AdQ),[this,this.AEK],1);this.IY(
A.aaR(A.acf.Auv),[this,this.AEE],0);A._GetAutoObject(C.BS).FS();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abs:function(){return C.AM_;},Abt:function(){return C.APB;
},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var ABo=A._NewObject(
A.Device.BoolFilterCriterion,0);ABo.Initialize(12,0,true,true);Be.CW(ABo);A._GetAutoObject(
A.Device.Device).Am.Bl(Be);},HO:function(G){C.GU.HO.call(this,G);if(this.Akg()===
false){this.N.Cs(A.aaL(A.ach.Ask));this.N.Ck=[this,this.A5S];this.N.FI(A.jV);}this.
N.ON(false);this.N.OO(false);},Aga:function(){A._GetAutoObject(C.A$).Cg(41);},_Init:
function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.AVz;var B;this.Dq(C.APx
);this.Dz(A.aaR(A.acf.A7G));this.AwI([B=A._GetAutoObject(A.Device.Device),B.A83,
B.Ba5]);},_ReInit:function(){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.A7G));}
,_className:"Application::WatchListScreen"};C.AMf={DE:function(G){var B;var Jy=(
A.Core.BM.isPrototypeOf(G)?G:null);if(((Jy.CO===4)||(Jy.CO===5))===false){C.AxT.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var Bct=A._GetAutoObject(A.Device.Device).KX;var Te;if(Jy.CO===5)Te=5;else Te=4;
var AA5=A._GetAutoObject(A.acj.DV).Bc3(Bct,Te);var GB=(((Bct+((AA5/2)|0))/AA5)|0
)*AA5;if(Jy.CO===4)GB+=AA5;else if(Jy.CO===5)GB-=AA5;if(GB>999900)GB=999900;if(GB<
100)GB=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GB);},AsB:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.
CB],this);else A._GetAutoObject(C.A$).Fu();},WM:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).AsD();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A_6()===false){this.H5.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KX);this.H5.Cq(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A$).Fu();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H5.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KX);this.H5.Cq(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A$).Fu();}},AkU:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.Cl],this);},Bc2:function(){var
ALx=A._GetAutoObject(A.Device.Helper).W.AhN(1);if(ALx>=100000)ALx=(Math.round(ALx
/1000)|0)*1000;return ALx;},_Init:function(aArg){C.AxT._Init.call(this,aArg);this.
__proto__=C.AMf;},_className:"Application::AnimalActionWeighingScreen"};C.AVk={V8:
null,YM:null,Rb:null,AeK:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
BW._Init.call(this.V8={I:this},0);C.BW._Init.call(this.YM={I:this},0);C.Rb._Init.
call(this.Rb={I:this},0);C.AeK._Init.call(this.AeK={I:this},0);this.__proto__=C.
AVk;var B;this.I8(A.aaR(A.acf.AG2));this.V8.H(AhV);this.V8.Aj(true);this.V8.T(A.
aaR(A.acf.A$t));this.V8.Bg(true);this.V8.By(0);this.YM.H(UV);this.YM.Aj(true);this.
YM.T(A.aaR(A.acf.A$s));this.YM.Bg(false);this.J(this.V8,0);this.J(this.YM,0);this.
V8.As([B=this.Rb,B.B7,B.B8]);this.V8.CI(this.Rb);this.YM.As([B=this.AeK,B.B7,B.B8
]);this.YM.CI(this.AeK);},_Done:function(){this.__proto__=C.Ce;this.V8._Done();this.
YM._Done();this.Rb._Done();this.AeK._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.V8._ReInit();this.YM._ReInit();this.Rb._ReInit();
this.AeK._ReInit();this.I8(A.aaR(A.acf.AG2));this.V8.T(A.aaR(A.acf.A$t));this.YM.
T(A.aaR(A.acf.A$s));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.
V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeK={MassUnitToString:null
,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwJ(E);}
,Init:function(aArg){var B;A.zX([this,this.BdF],[B=A._GetAutoObject(A.Device.Device
),B.ASs,B.AZ1],0);A.pe([this,this.BdF],this);},BdF:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeK;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxT={H5:null,Ajt:null,MassUnit:null,
KX:null,Vv:null,AnJ:null,AcE:null,Z0:null,O0:null,YB:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).AfY());A.zX([this,this.AKz],[B=A._GetAutoObject(
A.Device.Device),B.AEu,B.AIN],0);A.zX([this,this.BAL],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.AIR],0);A.zX([this,this.BAM],[B=this.O0,B.Arv,B.Ju],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxM();this.AcF();},IW:function(G){this.WM(this);}
,CF:function(G){C.AB.CF.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGI();else{var BCd=this.Bc2();this.Z0.Z(true);this.AcE.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCd);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E3:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).AhF(
);},AxM:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bgr();break;case 3:{this.Bgr();this.Z0.Z(false);this.AcE.Z(false
);if(this.A_6()){this.Vv.Z(false);this.KX.H(A.abO(this.KX.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O0.Ar(true);this.O0.Z(true);this.Bb(this.O0);}}break;
case 4:this.KX.R(A.aaR(A.acu.Akj));break;default:A.ab5("%s%e",AHU,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcF:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CY(A.aaL(A.ach.Aev));this.N.Cs(null);
this.YB.Z(false);this.N.C6(A.aaL(A.ach.AmY));this.N.CV(A.jV);}break;case 3:{if(this.
O0.AY<=1){this.N.CY(null);this.N.Cs(null);this.YB.Z(false);this.N.C6(null);}else{
this.N.CY(A.aaL(A.ach.AmW));this.N.Cs(A.aaL(A.ach.Aew));this.YB.Z(true);this.N.C6(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C6(A.aaL(A.ach.AvF));this.
N.Cl=[this,this.Blc];this.N.Cs(null);this.YB.Z(false);this.N.CV(A.jV);}break;default:;
}},AsB:function(G){},Bv8:function(s){this.AsB(s);},WM:function(G){},A0g:function(
s){this.WM(s);},Blc:function(G){this.CF(this);},BAL:function(G){this.An();},AKz:
function(G){this.An();},A_6:function(){var Aum=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Aum>0)&&!A._GetAutoObject(A.Device.Helper).Bpj(Aum
,this.H5.Timestamp);},AkU:function(G){},A0f:function(s){this.AkU(s);},BAM:function(
G){this.An();},Bgr:function(){this.KX.R(A._GetAutoObject(A.Device.Converter).Ak8(
A._GetAutoObject(A.Device.Device).KX));},Bc2:function(){return A._GetAutoObject(
A.Device.Helper).W.AhN(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Ajt={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.Vv={I:this
},0);C.AxL._Init.call(this.AnJ={I:this},0);A.acg.Ael._Init.call(this.AcE={I:this
},0);A.acg.Ael._Init.call(this.Z0={I:this},0);C.AVE._Init.call(this.O0={I:this},
0);A.acg.Ap._Init.call(this.YB={I:this},0);this.__proto__=C.AxT;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dq(C.IG);this.Ajt.AZ(0x3F);this.Ajt.H(Ayf);this.Ajt.
L(A.jb.CK);this.MassUnit.H(AXk);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az2));this.MassUnit.L(A.jb.Text);this.KX.H(AXl);this.KX.A6(0x14);this.KX.R(A.aaR(
A.acu.Akj));this.KX.L(A.jb.Text);this.Vv.H(AXm);this.Vv.R(A.aaR(A.acf.A$E));this.
Vv.L(A.jb.Text);this.Vv.Z(true);this.AnJ.H(AXn);this.AcE.H(AXo);this.AcE.L(A.jb.
Ad8);this.AcE.Z(false);this.Z0.H(AHV);this.Z0.L(A.jb.Ad8);this.Z0.Bl3(true);this.
Z0.Z(false);this.O0.AZ(0x3F);this.O0.H(Ayf);this.O0.Ar(false);this.O0.Z(false);this.
YB.H(AXp);this.YB.L(A.jb.Bm);this.J(this.Ajt,0);this.J(this.MassUnit,0);this.J(this.
KX,0);this.J(this.Vv,0);this.J(this.AcE,0);this.J(this.Z0,0);this.J(this.O0,0);this.
J(this.YB,0);this.N.CB=[this,this.Bv8];this.N.Ck=[this,this.A0f];this.N.Cl=[this
,this.A0g];this.MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aeo));this.Vv.S(
A.aaL(A.fl.EK));this.AcE.Zv(this.AnJ);this.Z0.Zv(this.AnJ);this.H5=A._NewObject(
A.Device.Rating,0);this.O0.LY(A._GetAutoObject(A.Device.Helper).W);this.O0.AkC(this.
H5);this.YB.Aw(A.aaL(A.ach.AQI));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajt._Done();this.MassUnit._Done();this.KX._Done();this.Vv._Done();this.
AnJ._Done();this.AcE._Done();this.Z0._Done();this.O0._Done();this.YB._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajt._ReInit();
this.MassUnit._ReInit();this.KX._ReInit();this.Vv._ReInit();this.AnJ._ReInit();this.
AcE._ReInit();this.Z0._ReInit();this.O0._ReInit();this.YB._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az2));this.KX.R(A.aaR(A.acu.Akj));this.Vv.R(A.aaR(A.acf.A$E));this.
MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aeo));this.Vv.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H5)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVI={FD:null
,OJ:null,M_:null,C9:null,LV:null,T2:null,Init:function(aArg){var B;A.zX([this,this.
GE],[B=this.FD,B.B7,B.B8],0);A.pe([this,this.GE],this);},CF:function(G){C.Ce.CF.
call(this,G);A.pe([this,this.GE],this);},Bj1:function(G){var F;this.LV.BT.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BT.R((A._GetAutoObject(A.Device.Converter).S3((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DV).Aax());},GE:function(
G){var AJs=true;if(this.FD.Q===1)AJs=false;this.C9.Aj(AJs);this.C9.Ar(AJs);this.
C9.Z(AJs);A._GetAutoObject(A.Device.Helper).ANr(this.Y);},_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.AMB._Init.call(this.FD={I:this},0);C.AHb._Init.call(this.
OJ={I:this},0);C.AUB._Init.call(this.M_={I:this},0);C.AkS._Init.call(this.C9={I:
this},0);C.Io._Init.call(this.LV={I:this},0);C.BW._Init.call(this.T2={I:this},0);
this.__proto__=C.AVI;var B;this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsP));this.FD.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OJ.As(A._GetAutoObject(
A.Device.Device).OJ);this.M_.H(AXq);this.M_.Aj(true);this.C9.H(As2);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KI));this.C9.Bg(true);this.C9.F0(1000);this.C9.EV(99000);
this.LV.H(As3);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A4Y));this.LV.F0(50);this.
LV.EV(2000);this.LV.AS5(A._GetAutoObject(A.acj.DV).AzK());this.T2.H(AcO);this.T2.
Aj(true);this.T2.T(A.aaR(A.acf.A7o));this.T2.F0(-1);this.T2.EV(1);this.JU(this.Y
,-1);this.JU(this.Ay,-1);this.J(this.M_,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T2,0);this.M_.AeR([B=this.M_,B.FP]);this.M_.Gn([this,this.D_,this.GN]);this.
M_.Aky(A.aaL(A.ach.Edit));this.M_.LX([B=this.M_,B.AyM]);this.M_.L0(A.aaL(A.ach.AnN
));this.M_.As([B=this.FD,B.B7,B.B8]);this.M_.CI(this.FD);this.M_.A90([B=this.FD,
B.ASL,B.A0e]);this.M_.A9Z([B=this.FD,B.ASK,B.A0d]);this.C9.Gn([this,this.D_,this.
GN]);this.C9.LX([B=this.M_,B.AyM]);this.C9.L0(A.aaL(A.ach.AnN));this.C9.As([B=this.
FD,B.A8d,B.ASR]);this.LV.Gn([this,this.D_,this.GN]);this.LV.LX([B=this.M_,B.AyM]
);this.LV.L0(A.aaL(A.ach.AnN));this.LV.As([B=this.FD,B.A8c,B.ASP]);this.LV.A_b([
this,this.Bj1]);this.T2.Gn([this,this.D_,this.GN]);this.T2.As([B=this.OJ,B.B7,B.
B8]);this.T2.CI(this.OJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;
this.FD._Done();this.OJ._Done();this.M_._Done();this.C9._Done();this.LV._Done();
this.T2._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.FD._ReInit();this.OJ._ReInit();this.M_._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T2._ReInit();this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsP));this.C9.T(A.aaR(A.acf.KI));this.LV.T(A.aaR(A.acf.A4Y));this.T2.T(A.aaR(A.acf.
A7o));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.FD)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUB={YY:null,Init:
function(aArg){var B;A.zX([this,this.AfB],[B=A._GetAutoObject(A.Device.Device),B.
ASs,B.AZ1],0);A.pe([this,this.AfB],this);},A3E:function(G){A._GetAutoObject(A.Device.
Device).A9(37,true,A.jV,0,[this,this.Bbi]);},A1v:function(G){var F;if(this.A8===
1){var BQ=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DV).AzK();if(this.D7<this.
AlO)this.D7=this.AlO;if(this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.
D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).AzK();if(this.DX<this.D7)this.DX=this.D7;if(this.DX!==BQ){if(!!this.JR
)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.DJ(this);this.An();
},A16:function(G){var F;if(this.A8===1){var BQ=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DV).AzK();if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).AzK();if(this.DX>this.AlJ)this.DX=
this.AlJ;if(this.DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(
this.JR,0);}}this.DJ(this);this.An();},GE:function(G){this.PG.R(AHW+A._GetAutoObject(
A.Device.Converter).S3(this.D7,2,true));this.PF.R(AHW+A._GetAutoObject(A.Device.
Converter).S3(this.DX,2,true));this.St.R(A._GetAutoObject(A.acj.DV).Aax());this.
YY.R(this.St.String);},A3d:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Asp(this
);},A1Z:function(Atl){if(Atl===1)return this.PG;else if(Atl===2)return this.PF;else
return null;},_Init:function(aArg){C.Aco._Init.call(this,aArg);A.acg.Text._Init.
call(this.YY={I:this},0);this.__proto__=C.AUB;this.T(A.aaR(A.acf.ACg));this.AlJ=
2000;this.AlO=20;this.Background.H(JZ);this.V.H(BF);this.V.R(A.aaR(A.acf.ACg)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkL.H(AXr);this.AkM.H(AXs);this.Q3.H(AXt);
this.QA.H(AXu);this.PF.H(AXv);this.PG.H(AXw);this.St.H(AXx);this.YY.H(AXy);this.
YY.I7(false);this.YY.A6(0x12);this.YY.L(0xFF000000);this.JU(this.H2,-8);this.J(this.
YY,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YY.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Aco;this.YY._Done();C.Aco.
_Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.YY._ReInit();
this.T(A.aaR(A.acf.ACg));this.V.R(A.aaR(A.acf.ACg)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YY.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Aco._Mark.call(this,D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABt={M:P5,A60:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A60();},_Init:function(
aArg){A.Graphics.Hv._Init.call(this,aArg);this.__proto__=C.ABt;},_className:"Application::AbstractPath"
};C.Aqe={DO:null,DZ:null,Rg:null,AdM:null,PW:null,AdL:null,Auu:1,A4u:0,Bcb:false
,AzG:true,CP:function(){this.Bgn(this);},Init:function(aArg){var B;this.Bb(this.
AdM);A.zX([this,this.Bgn],[B=this.AdM,B.A8j,B.BaO],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdL.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhF(this.Auu+this.A4u)));if(this.Auu===1)this.PW.R(A.aaR(A.acf.ANf));else this.
PW.R(A.aaR(A.acf.Bhe));},CF:function(G){if(this.AzG)this.AzG=false;else if(this.
DO.Bck()===false)A.pe([this,this.A2M],this);else if(this.DO.AzU())this.DO.Ac4();
A.zV([this,this.Af5],A._GetAutoObject(A.Device.Device).Am,0);},E3:function(G){A.
z9([this,this.Af5],A._GetAutoObject(A.Device.Device).Am,0);},A2M:function(G){this.
Bcb=true;A._GetAutoObject(C.A$).Fu();},Bgn:function(G){var B;var BcM=(C.Wh.isPrototypeOf(
B=this.AdM.AV)?B:null);if(!!BcM){var Ay1=A._NewObject(A.Device.ActionToString,0);
this.Rg.R(Ay1.Lt(BcM.Action));}},Ie:function(G){var Cx=(C.Wh.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DO.Qh(Cx.Action);this.Blf(this.Auu+1);},BAg:function(G){
if(A._GetAutoObject(C.Ph).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Blf:function(E){
if(this.Auu===E)return;this.Auu=E;this.An();},Af5:function(G){if((this.Bcb===false
)&&(this.DO.Bck()===false))A.pe([this,this.A2M],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);C.CH._Init.call(this.
Rg={I:this},0);C.ARw._Init.call(this.AdM={I:this},0);C.CH._Init.call(this.PW={I:
this},0);A.acg.Text._Init.call(this.AdL={I:this},0);this.__proto__=C.Aqe;this.Background.
L(A.jb.CS);this.N.H(Xc);this.N.Z(true);this.Dq(C.IG);this.DZ.AZ(0x3F);this.DZ.H(
E$);this.DZ.L(A.jb.CK);this.Rg.H(AXz);this.Rg.L(A.jb.Text);this.AdM.H(AHX);this.
PW.H(AXA);this.PW.R(A.aaR(A.acf.ANf));this.PW.L(A.jb.Text);this.AdL.H(Ayg);this.
AdL.R(AHY);this.AdL.L(A.jb.Text);this.J(this.DZ,0);this.J(this.Rg,0);this.J(this.
AdM,0);this.J(this.PW,0);this.J(this.AdL,0);this.N.CB=[this,this.A2M];this.N.Ck=[
this,this.BAg];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbC));this.Rg.S(
A.aaL(A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.AdM.A3b=[
this,this.Ie];this.PW.S(A.aaL(A.fl.EK));this.PW.A2(A.aaL(A.fl.Af));this.PW.Cu(A.
aaL(A.fl.Ak));this.AdL.S(A.aaL(A.fl.Hr));this.DO=A._GetAutoObject(C.DO);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Rg._Done();this.
AdM._Done();this.PW._Done();this.AdL._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DZ._ReInit();this.Rg._ReInit();this.AdM._ReInit();
this.PW._ReInit();this.AdL._ReInit();this.PW.R(A.aaR(A.acf.ANf));this.Rg.S(A.aaL(
A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.PW.S(A.aaL(
A.fl.EK));this.PW.A2(A.aaL(A.fl.Af));this.PW.Cu(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DO)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARw={H_:null,A3b:null,Cr:null,Y:null,Ay:
null,A3S:0,Init:function(aArg){A.zV([this,this.ABj],this.H_,0);A.zV([this,this.Bgk
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Aur],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABj],this);},Bb:function(E){var A2I=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2I)A.abo([this,this.A8j,this.BaO],0);},DE:
function(G){var B;var Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case
7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x415);
if((Fc===5)&&!X){var ALa=this.AV;while(!X){ALa=this.QD(ALa,2,0x415);if(!!ALa)X=this.
QD(ALa,Fc,0x415);else break;}}if(!!X)this.Bb(X);var GS=(C.Wh.isPrototypeOf(B=this.
AV)?B:null);if(!!GS)this.A3S=(C.Wh.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3S=0;A.pe([this,this.MO],this);},A1n:function(ED){var EQ=A._GetAutoObject(C.DO).
Bcs(ED,this.A3b);this.J(EQ,0);},Ao2:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(AdH);
}},ABj:function(G){this.Ao2();var O;var CD=A._GetAutoObject(C.Ph).NP();for(O=0;O<
CD;O=O+1){var Aao=A._GetAutoObject(C.Ph).OC(O);this.A1n(Aao);}A.pe([this,this.Bgk
],this);A.pe([this,this.BpH],this);A.pe([this,this.Aur],this);},BpH:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Aur:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATv(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATv(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATv(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((
B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Bgk:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Ph).NU(Aa.Action)&&A._GetAutoObject(C.
DO).A4t(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3S===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARw;this.H(AXB);this.Cr.Filter=147;this.Y.AZ(0xB);this.Y.H(AXC);this.Y.JO(9);this.
Ay.AZ(0xA);this.Ay.H(AXD);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BN=[this,this.
DE];this.Cr.D1=[this,this.DE];this.Y.El=[this,this.Fe];this.H_=A._GetAutoObject(
C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.H_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3b)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fm={Ej:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fm;this.N.Ar(false);this.Ej.H(BF);this.Ej.Ar(false
);this.AK.H(E$);this.AK.L(A.jb.Ad8);this.Text.H(BF);this.Text.R(AXE);this.Text.L(
0xFF000000);this.Ap.H(P5);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cs(A.aaL(A.ach.AbC));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC6));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.XM={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IW:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FM=A.jb.Ad8;var GQ=A.jb.CS;if(this.Hf){FM=A.jb.Text;GQ=A.jb.
Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.Qn){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.L(GQ);}this.Ht.L(A.
jb.CS);this.H2.L(A.jb.CS);},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(C.CH.
isPrototypeOf(B=this.Dy.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bh));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));else Cz.R(Xa);Cz.H(A.
abK(Cz.M,[this.Dy.V_,(B=this.Dy.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.XM;this.Dy.AFb(170);this.Dy.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajh={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FM=A.jb.Ad8;var GQ=A.jb.CS;if(this.Hf){FM=A.jb.Text;
GQ=A.jb.Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.
Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.L(GQ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Ajh;this.C8.H(AXF);this.C8.Cv(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajq)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C8._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALY={Y:null,RI:null,Tq:null
,Tr:null,Ts:null,AdK:null,XL:null,Vn:null,Vo:null,AaT:null,Ay:null,Init:function(
aArg){this.Bb(this.RI);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this);},IW:
function(G){this.BfD(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N
,0);this.Bx.CB=[this,this.BfD];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);
this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},AAY:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XL.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XL.Q))A._GetAutoObject(C.AutoActions).J(this.XL.Q);if(!!this.Vn.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vn.Q))A._GetAutoObject(C.AutoActions
).J(this.Vn.Q);if(!!this.Vo.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vo.
Q))A._GetAutoObject(C.AutoActions).J(this.Vo.Q);if(!!this.AaT.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaT.Q))A._GetAutoObject(C.AutoActions).J(this.AaT.Q
);A._GetAutoObject(C.AutoActions).Cq();},BfD:function(G){if(this.Bzq()===true){this.
AAY();this.XA(this);}else A._GetAutoObject(A.Device.Device).A9(27,true,A.jV,0,null
);},Bzq:function(){return(!!this.XL.C4(this.XL.Q)||!!this.Vn.C4(this.Vn.Q))||!!this.
Vo.C4(this.Vo.Q);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true
,null,null);},BAs:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XL.Ats(this);this.Vn.Ats(this);this.Vo.Ats(this);this.AaT.Ats(this);}
,_Init:function(aArg){C.Fm._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.XM._Init.call(this.RI={I:this},0);C.XM._Init.call(this.Tq={I:this},0);C.XM.
_Init.call(this.Tr={I:this},0);C.XM._Init.call(this.Ts={I:this},0);C.AuZ._Init.call(
this.AdK={I:this},0);C.AutoAction._Init.call(this.XL={I:this},0);C.AutoAction._Init.
call(this.Vn={I:this},0);C.AutoAction._Init.call(this.Vo={I:this},0);C.AutoAction.
_Init.call(this.AaT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALY;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.Tt));this.Y.H(Lu);this.Y.JO(1);this.
RI.H(AhV);this.RI.Ar(true);this.RI.Aj(true);this.RI.T(A._GetAutoObject(A.Device.
Helper).Nj(A.aaR(A.acf.Ajg),P6,AHZ));this.Tq.H(UV);this.Tq.Ar(true);this.Tq.Aj(true
);this.Tq.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Ajg),P6,AH0));this.
Tr.H(Aag);this.Tr.Ar(true);this.Tr.Aj(true);this.Tr.T(A._GetAutoObject(A.Device.
Helper).Nj(A.aaR(A.acf.Ajg),P6,AH1));this.Ts.H(Ale);this.Ts.Ar(true);this.Ts.Aj(
true);this.Ts.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Ajg),P6,AH2));this.
AdK.H(Ayh);this.AdK.Aj(true);this.AdK.T(A.aaR(A.acf.A_N));this.Vn.Index=1;this.Vo.
Index=2;this.AaT.Index=3;this.Ay.H(Iq);this.J(this.Y,0);this.J(this.RI,0);this.J(
this.Tq,0);this.J(this.Tr,0);this.J(this.Ts,0);this.J(this.AdK,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fe];this.RI.Wy(A.aaL(A.fl.Hr));this.RI.Wz(A.aaL(A.fl.Hr
));this.RI.As([B=this.XL,B.B7,B.B8]);this.RI.CI(this.XL);this.Tq.Wy(A.aaL(A.fl.Hr
));this.Tq.Wz(A.aaL(A.fl.Hr));this.Tq.As([B=this.Vn,B.B7,B.B8]);this.Tq.CI(this.
Vn);this.Tr.Wy(A.aaL(A.fl.Hr));this.Tr.Wz(A.aaL(A.fl.Hr));this.Tr.As([B=this.Vo,
B.B7,B.B8]);this.Tr.CI(this.Vo);this.Ts.Wy(A.aaL(A.fl.Hr));this.Ts.Wz(A.aaL(A.fl.
Hr));this.Ts.As([B=this.AaT,B.B7,B.B8]);this.Ts.CI(this.AaT);this.AdK.AR=[this,this.
BAs];this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Y._Done();this.
RI._Done();this.Tq._Done();this.Tr._Done();this.Ts._Done();this.AdK._Done();this.
XL._Done();this.Vn._Done();this.Vo._Done();this.AaT._Done();this.Ay._Done();C.Fm.
_Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Y._ReInit();this.
RI._ReInit();this.Tq._ReInit();this.Tr._ReInit();this.Ts._ReInit();this.AdK._ReInit(
);this.XL._ReInit();this.Vn._ReInit();this.Vo._ReInit();this.AaT._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tt));this.RI.T(A._GetAutoObject(A.Device.Helper
).Nj(A.aaR(A.acf.Ajg),P6,AHZ));this.Tq.T(A._GetAutoObject(A.Device.Helper).Nj(A.
aaR(A.acf.Ajg),P6,AH0));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.
Ajg),P6,AH1));this.Ts.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Ajg),P6
,AH2));this.AdK.T(A.aaR(A.acf.A_N));},_Mark:function(D){var B;C.Fm._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Cc:
A.abi(16,0,null),Dn:function(){return 16;},C4:function(aIndex){if(aIndex>=16)return-
1;return this.Cc.Get(aIndex);},DU:function(A7){var O=0;while(O<16){if(this.Cc.Get(
O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<16){
if(this.Cc.Get(O)>max)max=this.Cc.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cc=[]).__proto__=C.Cm.Cc;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={H_:null,Ac4:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Ats],this.Ac4,0);A.pe([this,this.
Ats],this);},Dn:function(){return this.H_.NP();},C4:function(aIndex){if(aIndex>=
this.Dn())return-1;return this.H_.OC(aIndex);},FX:function(aIndex){return this.ActionToString.
BH(this.C4(aIndex));},DU:function(A7){var O=0;while(O<this.Dn()){if(this.H_.OC(O
)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<this.
Dn()){if(this.H_.OC(O)>max)max=this.H_.OC(O);O=O+1;}return max;},Ats:function(G){
this.Q=this.Ac4.OC(this.Index);A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.H_=A._GetAutoObject(C.AuJ);this.Ac4=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL3={Atp:0,Init:function(aArg
){var B;A.zX([this,this.Bd7],[B=A._GetAutoObject(A.Device.Device),B.A72,B.BaA],0
);A.zX([this,this.Bd4],[B=A._GetAutoObject(A.Device.Device),B.ASe,B.AZV],0);A.pe([
this,this.Bd7],this);A.pe([this,this.Bd4],this);},Clear:function(){C.Vs.Clear.call(
this);this.Atp=0;},Cq:function(){A._GetAutoObject(A.Device.Device).ArB(this.Atp);
A._GetAutoObject(A.Device.Device).ArC(this.toString());},Bd7:function(G){this.Atp=
A._GetAutoObject(A.Device.Device).Ph;A.we(this,0);},Bd4:function(G){this.EM(A._GetAutoObject(
A.Device.Device).Auw);A.we(this,0);},NU:function(ED){if((this.Atp&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUr:function(
ED){this.Atp=this.Atp|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vs._Init.
call(this,aArg);this.__proto__=C.AL3;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Ph={_Init:function(){C.AL3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL4={Vq:null,Ay:null,Y:null,JL:null,CP:function(
){this.AiG(this);},Init:function(aArg){A.zV([this,this.AiG],this.Vq,0);A.pe([this
,this.AiG],this);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.Ev];this.Bx.Ck=[
this,this.A2U];this.Bx.Cl=[this,this.A3n];this.Bx.C6(A.aaL(A.ach.Ara));this.Bx.Cs(
A.aaL(A.ach.Aq5));this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},Ev:function(G){if(
this.Byg()>0){this.AAY();this.XA(this);}else A._GetAutoObject(A.Device.Device).A9(
28,true,A.jV,0,null);},AiG:function(G){this.Ao2();var O;for(O=0;O<this.Vq.NP();O=
O+1){var Aao=A._GetAutoObject(C.Ph).OC(O);this.A02(Aao);}this.J(this.JL,0);A.aaS([
this,this.MO],this);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]
);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var
B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.
AV,true,null,null);},A02:function(G6){var Ay1=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sb,0);Aa.T(Ay1.BH(G6));Aa.Aj(true);Aa.G0=G6;Aa.A9N(this.
Vq.NU(G6));this.J(Aa,0);this.ZE(Aa);},Ao2:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(
AdH);}},AAY:function(){var B;this.Vq.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JL)){var Aa=(C.Sb.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vq.J(Aa.G0);if(Aa.ASq())this.Vq.AUr(Aa.G0);}else A.ab5(
"%s",Ayi);}X=X.Ah;}this.Vq.Cq();},Byg:function(){var B;var A3T=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JL)){var
Aa=(C.Sb.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASq())A3T=A3T+1;}else A.ab5("%s"
,Ayi);}X=X.Ah;}return A3T;},A2U:function(G){var B;var Aa=(C.Sb.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAf=(C.Sb.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAf){this.
Ahu(AAf,Aa);A.pe([this,this.MO],this);}}},A3n:function(G){var B;var Aa=(C.Sb.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAL=(C.Sb.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAL
){this.Ahu(Aa,AAL);A.pe([this,this.MO],this);}}},AqI:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiG],this);},_Init:function(
aArg){C.Fm._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.AuZ._Init.call(this.JL={I:this},0);this.__proto__=C.AL4;
this.H(Rk);this.Text.R(A.aaR(A.acf.AD8));this.Ay.H(Iq);this.Y.H(Lu);this.Y.JO(1);
this.JL.H(AH3);this.JL.Aj(true);this.JL.T(A.aaR(A.acf.AqI));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JL,0);this.Y.El=[this,this.Fe];this.JL.AR=[this,this.AqI
];this.Vq=A._GetAutoObject(C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fm;this.Ay._Done();this.Y._Done();this.JL._Done();C.Fm._Done.call(this);},_ReInit:
function(){C.Fm._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JL._ReInit(
);this.Text.R(A.aaR(A.acf.AD8));this.JL.T(A.aaR(A.acf.AqI));this.CP();},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.Vq)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sb={G0:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.Ai.call(this,Ae);var G$=((Ae&0x10
)===0x10);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;var FM=A.jb.Ad8;var GQ=A.jb.
Bm;if(this.Hf){FM=A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.L(FM);this.V.L(A.
jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.L(GQ);
}this.LI=G$;this.KE=Fq;this.Qn=GA;},IW:function(G){this.A3l(this);},A3l:function(
G){this.AES(!this.Amx);},A9N:function(E){this.AES(E);},ASq:function(){return this.
Amx;},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.Sb;this.Mj.
H(AXG);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vs={CD:0,
H_:A.abi(17,0,null),OC:function(Hw){return this.H_.Get(Hw);},NP:function(){return this.
CD;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.H_.Set(O,0);this.CD=0;},J:function(
ED){if(this.CD>=17)A.ab5("%s",AH4);else{this.H_.Set(this.CD,ED);this.CD=this.CD+
1;}},Cq:function(){},EM:function(AcT){var AJe=AcT.indexOf(String.fromCharCode(0x2C
),0);var A1o=A.jV;var O=0;this.CD=0;while(O<17)if(AcT===A.jV){this.H_.Set(O,0);O++;
}else{if(AJe===-1){A1o=AcT;AcT=A.jV;}else{A1o=A.abV(AcT,AJe);AcT=A.ab1(AcT,0,AJe+
1);}var Aao=A.abZ(A1o,0,10)|0;if(this.ADK(Aao)){this.H_.Set(this.CD,Aao);this.CD=
this.CD+1;O++;}AJe=AcT.indexOf(String.fromCharCode(0x2C),0);}if(AcT!==A.jV)A.ab5(
"%s",AXH);},toString:function(){var A2z=(((B=this.H_.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CD;O=O+1)A2z=(A2z+AH5)+(((B=this.H_.Get(O))<0)?B+
0x100000000:B).toFixed();return A2z;},Axo:function(Hw,ED){if(Hw>=this.CD){A.ab5(
"%s",((((AXI+Hw.toFixed())+AXJ)+this.CD.toFixed())+AXK)+AXL);return;}this.H_.Set(
Hw,ED);},Contains:function(ED){var O;for(O=0;O<this.CD;O=O+1)if(this.H_.Get(O)===
ED)return true;return false;},ADK:function(ED){return true;},DU:function(ED){var
O;for(O=0;O<this.CD;O=O+1)if(this.H_.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.H_=[]).__proto__=C.Vs.H_;this.__proto__=C.Vs;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AML={Init:function(aArg){var B;A.zX([this,this.Beg
],[B=A._GetAutoObject(A.Device.Device),B.A8b,B.BaI],0);A.pe([this,this.Beg],this
);},Cq:function(){A._GetAutoObject(A.Device.Device).Akt(this.toString());},ADK:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Beg:function(G){this.EM(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.
__proto__=C.AML;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AML._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wh={Vp:null,Kt:null,A6Z:A.jV,Action:0,A4v:
false,A_z:false,A$f:false,Bk:function(aSize){C.Fi.Bk.call(this,aSize);this.QX.H(
this.Mn.M);this.OB.H(this.QX.M);},Ai:function(Ae){C.Fi.Ai.call(this,Ae);if(!this.
LI){this.Kt.TU.L(A.jb.AmZ);this.Kt.QF.Z(true);this.Kt.QF.L(A.jb.AQU);}else if(this.
Qn){this.Kt.TU.L(A.jb.Bm);this.Kt.QF.Z(false);}else if(this.KE){this.Kt.TU.L(A.jb.
Bm);this.Kt.QF.Z(false);}else{this.Kt.TU.L(A.jb.Text);this.Kt.QF.Z(true);this.Kt.
QF.L(A.jb.CS);}},Ble:function(E){if(this.Action===E)return;this.Action=E;},Bmm:function(
E){if(this.A6Z===E)return;this.A6Z=E;this.Vp.Text.R(E);},ATv:function(E){if(this.
A$f===E)return;this.A$f=E;this.Kt.Bm9(!this.Kt.AUQ);},AFs:function(E){if(this.A_z===
E)return;this.A_z=E;this.Kt.Z(!this.Kt.Fk());},A9e:function(E){if(this.A4v===E)return;
this.A4v=E;this.Vp.Z(E);},_Init:function(aArg){C.Fi._Init.call(this,aArg);C.Vp._Init.
call(this.Vp={I:this},0);C.Kt._Init.call(this.Kt={I:this},0);this.__proto__=C.Wh;
this.H(AXM);this.Background.H(AXN);this.G4.Ar(false);this.G4.Z(false);this.Vp.H(
AXO);this.Vp.Z(false);this.Kt.H(AXP);this.Kt.Z(false);this.J(this.Vp,0);this.J(this.
Kt,0);this.Mn.Aw(A.aaL(A.ach.ANg));},_Done:function(){this.__proto__=C.Fi;this.Vp.
_Done();this.Kt._Done();C.Fi._Done.call(this);},_ReInit:function(){C.Fi._ReInit.
call(this);this.Vp._ReInit();this.Kt._ReInit();},_Mark:function(D){var B;C.Fi._Mark.
call(this,D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vp={AK:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AK.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AK={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vp;this.AK.H(AXQ);this.AK.L(A.
jb.Bi1);this.H(AXR);this.Text.H(AXS);this.Text.L(A.jb.Text);this.BU.H(AXT);this.
BU.Ng(1);this.BU.L(A.jb.Text);this.J(this.AK,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AK._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AK._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kt={QF:null,TU:null,AUQ:false,Bm9:function(E){if(this.
AUQ===E)return;this.AUQ=E;if(E){this.TU.Aw(A.aaL(A.ach.ACo));this.QF.Aw(A.aaL(A.
ach.ACo));}else{this.TU.Aw(A.aaL(A.ach.AqC));this.QF.Aw(A.aaL(A.ach.AqC));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QF={I:this
},0);A.acg.Ap._Init.call(this.TU={I:this},0);this.__proto__=C.Kt;this.H(Ayj);this.
QF.H(Ayj);this.QF.Cv(1);this.TU.H(Ayj);this.TU.Cv(0);this.J(this.QF,0);this.J(this.
TU,0);this.QF.Aw(A.aaL(A.ach.AqC));this.TU.Aw(A.aaL(A.ach.AqC));},_Done:function(
){this.__proto__=A.Core.P;this.QF._Done();this.TU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QF._ReInit();this.TU._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QF)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARU={Gb:null,Cb:null,Do:null,Dh:null,Ko:null,Zl:10,Aq2:0,AEg:0,AR8:0,Ay0:false
,LU:false,Bcj:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).Am.Lh())A._GetAutoObject(A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.
Device).Am.HG().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(
A.Device.Helper).Aqh(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAt],this.
C$.Q,0);A.zX([this,this.BAd],this.Do.Q,0);A.zX([this,this.ABh],this.Dh.Q,0);A.zX([
this,this.ABh],this.Dh.HC.Q,0);A.zX([this,this.ABh],[this,this.ASx,this.AFq],0);
A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.A88,B.Ba_],0);A.zX([this
,this.BeQ],this.Cb.Q,0);A.pe([this,this.AAt],this);A.pe([this,this.GE],this);A.pe([
this,this.ABh],this);A.pe([this,this.BeQ],this);},CF:function(G){if(!this.Ay0){this.
Ay0=true;A.pe([this,this.AcQ],this);}else C.HY.CF.call(this,G);},Af_:function(G){
this.AR8=this.Zl;this.Bcr(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.Hi();A._GetAutoObject(C.A$).Fu();},Aud:function(){this.N.CV(A.jV);this.N.C6(
A.aaL(A.ach.ADu));this.N.Cl=[this,this.AyL];},AAo:function(G){A._GetAutoObject(C.
A$).Cg(55);},AFq:function(E){if(this.Zl===E)return;this.Zl=E;A.abo([this,this.ASx
,this.AFq],0);},Bcr:function(G){var F;if(!this.Zl||(this.Bcj===true)){A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);if(this.AEg===1)A._GetAutoObject(A.Device.
Device).A9(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A9(23,
true,this.AEg.toFixed(),2000,null);this.Ev(this);return;}this.Gb.Gm();this.Gb.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gb.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gb.Q0(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gb.JP(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gb.Nd(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gb.Q2(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gb.SB(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alo=A._GetAutoObject(
A.Device.Helper).A1i(this.Gb,(F=this.Dh.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Am);if(!Alo)this.AiY();else{A._GetAutoObject(A.Device.Helper).AKg(
this.Gb,Alo,(F=this.Dh.HZ.Hp,F[1].call(F[0])),this.Zl-1,[this,this.ApF]);A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);}},GE:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am1())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Do.
Z(false);this.Cb.T(A.aaR(A.acf.ACv));this.Cb.AEU(A.aaL(A.ach.Ae_));}else{this.Do.
Z(true);this.Cb.T(A.aaR(A.acf.Ak3));this.Cb.AEU(null);}if((this.Y.BiA(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JD(this.Y.TL(this.AV,0x1));this.An();
},AS2:function(E){if(this.Aq2===E)return;this.Aq2=E;A.abo([this,this.A8n,this.AS2
],0);},ABh:function(G){var F;var AJ3=(F=this.Dh.Q,F[1].call(F[0]));var Az8=-1;switch((
F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 0:Az8=AJ3+((F=A._GetAutoObject(A.Device.Helper
).BcZ(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zl-1));break;case 1:Az8=(AJ3+this.
Zl)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HC.AC.Q){case 0:Az8=(AJ3+
this.Zl)-1;break;case 1:Az8=(AJ3-this.Zl)+1;break;default:throw new Error(AXU+this.
Dh.HC.AC.Q.toFixed());}break;default:throw new Error(AXV+this.Dh.HC.AC.Q.toFixed(
));}this.AS2(Az8);},BAd:function(G){A.pe([this,this.GE],this);A.pe([this,this.AtY
],this);},AAt:function(G){A._GetAutoObject(A.Device.Helper).AVm(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABh],this);},ApF:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.Apz();else switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JD(this.Dh);break;case 0:this.JD(this.Do
);break;case 1:this.JD(this.Cb);break;default:throw new Error(Ayk+(F=this.Dh.HZ.
Hp,F[1].call(F[0])).toFixed());}break;case 25:this.JD(this.Cb);break;case 47:if(
At.PopupState===7)this.Apz();else{this.JD(this.Dh);this.JD(this.Cb);}break;case 43:{
this.JD(this.Dh);this.JD(this.Do);}break;case 42:{this.JD(this.Dh);this.JD(this.
Cb);}break;case 41:break;default:A.ab5("%s%e",As4,At.Id);}},AiY:function(){this.
Gb.Cq(A._GetAutoObject(A.Device.Device).Am);this.AEg=this.AEg+1;if(A._GetAutoObject(
A.Device.Helper).Am1()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){A._GetAutoObject(
A.Device.Device).A9(24,false,UW,0,null);A._GetAutoObject(A.Device.Device).A9(50,
true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);}else{var L6=A.
_GetAutoObject(A.Device.Device).Am.Lc(0,this.Gb.Id);A._GetAutoObject(A.Device.Device
).SK(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(this.Gb.
Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gb.DateOfBirth);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apz();},Apz:function(){var B;var F,CA;if(!!(F=this.Cb.
Q,F[1].call(F[0]))){(F=this.Cb.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Do.Q,CA[2].call(CA[0],(F=this.Cb.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Do.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$v(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Do.Q,F[1].call(
F[0])),this.Do.AjM(),this.Do.AjO())));var IT=null;switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyC];break;case 2:
IT=[B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyD];break;case 4:case 5:IT=[B=A.
_GetAutoObject(A.Device.Device),B.Ano,B.AoB];break;default:;}if(!!IT){switch((F=
this.Dh.Kj.VN,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IT[1].call(IT[0])));
}var XH=100-((this.Zl/this.AR8)*100);A._GetAutoObject(A.Device.Device).A9(24,true
,(((this.AR8.toFixed()+As5)+(XH|0).toFixed())+As5)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAn]);this.AFq(this.Zl-1);A.aaS([this,this.Bcr],null);},BAn:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bcj=true;},ApG:function(G){var F;C.HY.ApG.call(this,G);var AoV=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoV=A._GetAutoObject(A.Device.
Device).AdO;break;case 1:AoV=730;break;default:A.ab5("%s%e",Alb,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q0(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmD(AoV));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnU));switch(this.BZ.AC.Q){case 0:{this.Ko.I9(A.aaR(A.acf.ANb));this.
Ko.IM(A.aaR(A.acf.ANc));}break;case 1:{this.Ko.I9(A.aaR(A.acf.Bho));this.Ko.IM(A.
aaR(A.acf.Bhp));}break;case 2:{this.Ko.I9(A.aaR(A.acf.Bjn));this.Ko.IM(A.aaR(A.acf.
Bjo));}break;default:throw new Error(Alb);}},AeZ:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Awa,this.AeZ],0);},AtY:function(G){var F,CA,S8;this.AeZ(((
F=this.Cb.Q,F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S8=this.Cb.
Q,S8[1].call(S8[0])));A.pe([this,this.GE],this);},BeQ:function(G){A.pe([this,this.
AtY],this);},ASx:function(){return this.Zl;},A8n:function(){return this.Aq2;},Awa:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvU.
_Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Do={I:this},0);C.AGy._Init.call(
this.Dh={I:this},0);C.AUD._Init.call(this.Ko={I:this},0);this.__proto__=C.ARU;var
B;this.Dq(C.AC8);this.Cb.H(Aop);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak3));this.
Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.
aaR(A.acf.Akl));this.Do.H(AXW);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ud));this.
Do.Ar0(false);this.Dh.H(AXX);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6M));this.Dh.
By(0);this.Ko.H(AXY);this.Ko.Aj(true);this.Ko.T(A.aaR(A.acf.A7T));this.Ko.F0(1);
this.Ko.EV(500);this.Ko.IM(A.aaR(A.acf.ANc));this.Ko.I9(A.aaR(A.acf.ANb));this.Ko.
A9E(A.aaR(A.acf.Aq2)+A.aaR(A.acf.Colon));this.J(this.Cb,0);this.J(this.Do,0);this.
J(this.Dh,0);this.J(this.Ko,0);this.Gb=A._NewObject(A.Device.Animal,0);this.Cb.AR=[
this,this.AcQ];this.Cb.LX([this,this.AcQ]);this.Cb.L0(A.aaL(A.ach.Ae_));this.Cb.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.Q2]);this.Cb.OL([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UY]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.UZ]);this.Cb.Uh([B=A._GetAutoObject(A.Device.Device),B.Anl,B.AoA]);this.Cb.AeZ([
this,this.Awa,this.AeZ]);this.Do.Gn([this,this.D_,this.GN]);this.Do.LX([this,this.
AcQ]);this.Do.L0(A.aaL(A.ach.Ae_));this.Do.Uj([B=this.Gender.Animal,B.Wt,B.JP]);
this.Do.OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Do.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Do.Uh([B=A._GetAutoObject(A.Device.Device),B.Anl
,B.AoA]);this.Do.As([B=A._GetAutoObject(A.Device.Helper).W,B.Anp,B.Nd]);this.Do.
Ans([B=this.AnimalType.Animal,B.PM,B.EB]);this.Dh.Gn([this,this.D_,this.GN]);this.
Dh.LX([B=this.Dh,B.FP]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Arz,B.SB]);this.Dh.A9f(A._GetAutoObject(A.Device.Helper).W);
this.Ko.As([this,this.ASx,this.AFq]);this.Ko.BlK([this,this.A8n,this.AS2]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Cb._Done();this.Do._Done(
);this.Dh._Done();this.Ko._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Cb._ReInit();this.Do._ReInit();this.Dh._ReInit();this.Ko.
_ReInit();this.Cb.T(A.aaR(A.acf.Ak3));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akl));this.Do.T(A.aaR(A.acf.
Ud));this.Dh.T(A.aaR(A.acf.A6M));this.Ko.T(A.aaR(A.acf.A7T));this.Ko.IM(A.aaR(A.
acf.ANc));this.Ko.I9(A.aaR(A.acf.ANb));this.Ko.A9E(A.aaR(A.acf.Aq2)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Gb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AT7={BW:null,RatingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cl=null;this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AT7;var B;this.
H(Rk);this.BW.H(As2);this.BW.T(A.aaR(A.acf.A$n));this.J(this.BW,0);this.BW.As([B=
this.RatingMode,B.B7,B.B8]);this.BW.CI(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$n));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfq],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.AZ7],0);A.pe([this,this.Bfq],this
);},Dn:function(){return 2;},FX:function(aIndex){return this.RatingModeToString.
BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwW(E);},Bfq:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANv={WM:
function(G){C.Amp.WM.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqX()){
A._GetAutoObject(A.Device.Helper).W.AkA(false);A._GetAutoObject(A.Device.Helper).
W.Cq(A._GetAutoObject(A.Device.Device).Am);}},_Init:function(aArg){C.Amp._Init.call(
this,aArg);this.__proto__=C.ANv;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hc={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hc;},_className:"Application::BaseItem"
};C.AVB={BW:null,WeightRecordingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cl=null;this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVB;var B;this.H(Rk);this.BW.H(As2);this.BW.T(A.aaR(A.acf.AsP));this.BW.EV(1);
this.J(this.BW,0);this.BW.As([B=this.WeightRecordingMode,B.B7,B.B8]);this.BW.CI(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsP));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dn:function(){return 2;},FX:function(aIndex){return this.
WeightRecordingModeToString.BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this
,E);A._GetAutoObject(A.Device.Device).Aw8(E);},Init:function(aArg){var B;A.zX([this
,this.Bgw],[B=A._GetAutoObject(A.Device.Device),B.A87,B.Ba9],0);A.pe([this,this.
Bgw],this);},Bgw:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cc.Set(0,0);this.Cc.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa2={BooleanToAutoOnOff:null,FX:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BH(aIndex);},_Init:function(aArg){C.Ga._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa2;},_Done:function(
){this.__proto__=C.Ga;this.BooleanToAutoOnOff._Done();C.Ga._Done.call(this);},_ReInit:
function(){C.Ga._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ga._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxL={A60:function(){var B;this.
Axp(1);this.Jq(0,3);this.VB(0,0,(B=this.M)[3]-B[1]);this.A4y(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4y(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VJ(0);},_Init:
function(aArg){C.ABt._Init.call(this,aArg);this.__proto__=C.AxL;},_className:"Application::Triangle"
};C.ATI={Y:null,Init:function(aArg){this.BxD(this);},BxC:function(P8){var Aa=A._NewObject(
C.ANC,0);Aa.H(BF);Aa.T(P8);Aa.Aj(true);Aa.Ar(false);Aa.Bg(true);this.J(Aa,0);this.
Atr(this);},Atr:function(G){var B;var Alw=1;var A2r=0;var X=this.Y.Ah;var Cx=null;
var K5=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var ALd=(B=Cx.V.B6.A6D(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Ml.isPrototypeOf(X)?X:null))ALd=ALd+20;if(A2r<ALd)A2r=ALd;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Alw*28)));Alw=Alw+1;}else{K5=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K5){var Dg=((B=this.M)[3]-B[1])-((Alw-1)*28);K5.DL([this.
M[0],K5.Er[1]]);K5.DL([K5.Er[0],Dg]);K5.DC([this.M[0]+120,K5.EC[1]]);K5.DC([K5.EC[
0],Dg]);}}X=X.Ah;}this.BA6(A2r,28);},BA6:function(aWidth,BwL){var B;var X=this.Y.
Ah;var Cx=null;var K5=null;aWidth=aWidth+20;if(aWidth>(C.Ast[0]-10))aWidth=C.Ast[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A6(0x14);Cx.V.Text.Hh(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwL));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K5=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K5){K5.DL([this.M[
2]-aWidth,K5.Er[1]]);K5.DC([this.M[2],K5.EC[1]]);}}X=X.Ah;}},BxD:function(G){var
Aa=A._GetAutoObject(C.BS).AqM;while(!!Aa){if(!!(C.Axd.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axd.isPrototypeOf(Aa)?Aa:null);this.BxB(EF.DK,EF.AR,EF.Bw,EF.AQ2);}else
if(!!(C.Axf.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axf.isPrototypeOf(Aa)?Aa:null);
this.BxI(EF.DK,EF.AR,EF.Bw,EF.Ws,EF.WO);}else if(!!(C.Zz.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zz.isPrototypeOf(Aa)?Aa:null);this.BxA(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkG.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkG.isPrototypeOf(Aa)?Aa:null);this.
BxC(EF.DK);}else if(!!(C.AF0.isPrototypeOf(Aa)?Aa:null))this.BxJ();Aa=Aa.Ms;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.Atr],this);},BxA:function(P8,AcZ,Ah0){var Aa=A._NewObject(
C.Ml,0);Aa.H(BF);Aa.T(P8);Aa.AR=AcZ;Aa.Aj(true);Aa.Ar(Ah0);Aa.Bg(true);this.J(Aa
,0);this.Atr(this);},BxJ:function(){var K5=A._NewObject(A.acg.C5,0);K5.L(A.jb.Bm
);K5.Aj(true);K5.Ng(3);this.J(K5,0);this.Atr(this);},BxB:function(P8,AcZ,Ah0,A0E
){var Aa=A._NewObject(C.AmB,0);Aa.H(BF);Aa.T(P8);Aa.AR=AcZ;Aa.Aj(true);Aa.Ar(Ah0
);Aa.Bg(true);Aa.As(A0E);this.J(Aa,0);this.Atr(this);},BxI:function(P8,AcZ,Ah0,A2H
,Agh){var Aa=A._NewObject(C.ANB,0);Aa.H(BF);Aa.T(P8);Aa.AR=AcZ;Aa.Aj(true);Aa.Ar(
Ah0);Aa.Bg(true);Aa.BmK(A2H);Aa.AFE(Agh);this.J(Aa,0);this.Atr(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATI;this.H(Rk);this.Y.H(Rk);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afd={_Init:
function(){A.acl.Afd._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_v={AqM:null,Ahb:null,NC:function(P8){var EF=A._NewObject(
C.AkG,0);EF.DK=P8;this.J(EF);},Clear:function(){this.AqM=null;this.Ahb=null;},FS:
function(){var K5=A._NewObject(C.AF0,0);this.J(K5);},J:function(BbL){if(!this.AqM
){this.AqM=BbL;this.Ahb=this.AqM;}else{this.Ahb.Ms=BbL;this.Ahb=this.Ahb.Ms;}},Qw:
function(P8,AcZ){var EF=A._NewObject(C.Zz,0);EF.DK=P8;EF.AR=AcZ;this.J(EF);},BgF:
function(P8,AcZ,A0E){var EF=A._NewObject(C.Axd,0);EF.DK=P8;EF.AR=AcZ;EF.AQ2=A0E;
this.J(EF);},XN:function(P8){var EF=A._NewObject(C.Zz,0);EF.DK=P8;EF.Bw=false;this.
J(EF);},ABx:function(P8,AcZ,A2H,Agh){var EF=A._NewObject(C.Axf,0);EF.DK=P8;EF.AR=
AcZ;EF.Ws=A2H;EF.WO=Agh;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_v;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A_v._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axe={Ms:null,_Init:function(aArg){this.__proto__=
C.Axe;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOA={Amn:null,ArD:function(E){if(this.Amn===
E)return;if(!!this.Ab)this.Ab.ZE(this);if(!!this.Amn)this.AqE(this.Amn,A._GetAutoObject(
C.Asx),null,null,null,null,false);this.Amn=E;if(!!this.Amn)this.AkK(this.Amn,A._GetAutoObject(
C.Asx),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOA;this.H(BF);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amn)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WD={_Init:function(){C.AOA._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C1=A._NewObject(C.ATJ,0);C1.H(this.M);this.AkK(C1,A.
_GetAutoObject(C.AnR),null,A._GetAutoObject(C.AnR),A._GetAutoObject(C.AnR),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rk);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asx={_Init:function(){C.AUF._Init.call(this,0);this.ACt=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATJ={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.ATJ;this.H(AH6);this.Dr(0);this.AK.AZ(0x3F);this.AK.H(AH6);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUE={R9:function(){var B;var Ao=(A.acl.Ae7.isPrototypeOf(B=A.acl.Aei.R9.call(this
))?B:null);if(!Ao)throw new Error(AsZ);Ao.Cp.Cw=255;Ao.Cp.B2=0;return Ao;},R8:function(
){var B;var Ao=(A.acl.Axc.isPrototypeOf(B=A.acl.Aei.R8.call(this))?B:null);if(!Ao
)throw new Error(AsZ);Ao.E0.Cw=0;Ao.E0.B2=255;Ao.Du=true;return Ao;},_Init:function(
aArg){A.acl.Aei._Init.call(this,aArg);this.__proto__=C.AUE;},_className:"Application::ShadeOverlayTransition"
};C.AnR={_Init:function(){C.AUE._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkS={AnU:0,A1P:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Io.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCe=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak8(BCe)+CQ)+A._GetAutoObject(A.acj.DV).AfY()
);else this.BT.R(A.aaR(A.acf.Akl));}},J_:function(G){var B;var Bgt=(this.A1P===false
)&&(this.AM<=this.Gl);if(Bgt)this.By(this.AnU);this.A4d(this.AM,4);if(Bgt){this.
By(this.AM-this.Aj3);this.A1P=true;}C.Io.J_.call(this,G);},J5:function(G){this.A4d(
this.AM,5);C.Io.J5.call(this,G);},By:function(E){this.A4d(E,4);E=(((E+((this.Aj3
/2)|0))/this.Aj3)|0)*this.Aj3;if(!E)this.A1P=false;C.Io.By.call(this,E);},Ahk:function(
E){if(this.AnU===E)return;this.AnU=E;},A4d:function(Bwt,Gw){this.AS5(A._GetAutoObject(
A.acj.DV).Bc3(Bwt,Gw));},_Init:function(aArg){C.Io._Init.call(this,aArg);this.__proto__=
C.AkS;this.H(JZ);this.AnU=this.Gl;this.JU(this.H2,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDD={None:0,Left:1,BEe:2,Right:3};C.Amr={Ac5:
null,Fx:null,Ej:null,Background:null,And:null,F$:null,KM:A.jV,AD0:null,Init:function(
aArg){var B;A.zV([this,this.Af5],A._GetAutoObject(A.Device.Device).Am,0);A.zX([this
,this.A3o],[B=A._GetAutoObject(A.Device.Device).Am,B.Fj,B.Fn],0);A.pe([this,this.
LO],this);A.pe([this,this.A3o],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},KR:function(){if(!this.Bx)this.Bx=A._NewObject(
C.N,0);return this.Bx;},E3:function(G){C.OverlayMenu.E3.call(this,G);A._GetAutoObject(
A.Device.Device).Am.Bl(this.Ac5);},CF:function(G){C.OverlayMenu.CF.call(this,G);
this.AKO();},AlY:function(G){var Aa=(C.AB0.isPrototypeOf(G)?G:null);var Hn;if(!!
Aa)Hn=Aa.Hn;else Hn=this.F$.FG();if(Hn>=A._GetAutoObject(A.Device.Device).Am.Ca(
))return;A._GetAutoObject(A.Device.Helper).HL(Hn);A.pe([this,this.XA],this);},AKO:
function(){},Af5:function(G){this.An();},A3f:function(G){if(this.F$.FG()<(A._GetAutoObject(
A.Device.Device).Am.Ca()-1))this.F$.G2(this.F$.FG()+1);},A3g:function(G){if(this.
F$.FG()>0)this.F$.G2(this.F$.FG()-1);},DJ:function(G){var Gd=A._GetAutoObject(A.
Device.Device).Am.Ca();var MR=this.Bx;if(!MR)return;MR.CY(A.aaL(A.ach.Aev));MR.CB=[
this,this.XA];if(Gd<=0){MR.Cs(null);MR.C6(null);MR.Ck=null;MR.Cl=null;MR.ZC=false;
MR.ZD=false;}else if(Gd===1){MR.Cs(null);MR.C6(A.aaL(A.ach.Aew));MR.Ck=null;MR.Cl=[
this,this.AlY];MR.ZC=false;MR.ZD=false;}else{MR.Cs(A.aaL(A.ach.Aq5));MR.C6(A.aaL(
A.ach.Ara));MR.Ck=[this,this.A3f];MR.Cl=[this,this.A3g];MR.ZC=true;MR.ZD=true;}}
,LO:function(G){this.BfQ(this);this.Ac5=A._GetAutoObject(A.Device.Device).Am.Filter;
this.AKO();},BmC:function(E){if(this.AD0===E)return;this.AD0=E;A.pe([this,this.BAa
],this);},BAa:function(G){this.BfQ(this);},BfQ:function(G){var B;if(!!this.Fx)this.
HN(this.Fx);this.Fx=(C.EA.isPrototypeOf(B=A._NewObject(this.AD0,0))?B:null);if(!
!this.Fx){this.Fx.H(AXZ);this.J(this.Fx,0);}},A3o:function(G){if(!!A._GetAutoObject(
A.Device.Device).Am.Filter&&!!A._GetAutoObject(A.Device.Device).Am.Filter.DQ(1,4
))this.F$.Dz(A.aaR(A.acf.AR2));else this.F$.Dz(this.KM);},Dz:function(E){if(this.
KM===E)return;this.KM=E;A.pe([this,this.A3o],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.And={I:this},0);C.F$._Init.call(
this.F$={I:this},0);this.__proto__=C.Amr;this.H(Rk);this.Ej.H(BF);this.Ej.A9H(A.
jb.CS);this.Ej.A9I(A.jb.Text);this.Background.H(E$);this.Background.L(A.jb.Bob);
this.And.H(AH7);this.And.L(A.jb.CS);this.F$.H(AH7);this.F$.NZ(C.AB0);this.AD0=C.
APF;this.KM=A.aaR(A.acf.AvY);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.And,0);this.J(this.F$,0);this.Ej.AR=[this,this.AlY];this.Ej.Ab3(A._NewObject(
C.Yt,0));this.F$.Zs(A._GetAutoObject(A.Device.Device).Am);this.F$.Zu([this,this.
AlY]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.And._Done();this.F$._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.And._ReInit();this.F$._ReInit();this.Dz(A.aaR(A.acf.AvY
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ac5)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F$
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.AB0={AP:null,DS:null,Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DS.EB(
this.AX.AmQ(Ad,14));this.DS.AEW(this.AX.I2(Ad,13));this.DS.AeY(this.AX.H1(Ad,8));
this.DS.Ul(this.AX.H1(Ad,11));this.DS.Ae1(this.AX.H1(Ad,12));this.DS.Ae3(this.AX.
CE(Ad,5));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.AB0;this.H(O2);this.AP.L(A.jb.Bc);this.DS.H(AX0);this.J(this.AP,0);this.J(this.
DS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.
DS._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AP._ReInit();this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Yt={Q:null,Init:function(
aArg){var B;this.AAT(this);this.As([B=A._GetAutoObject(A.Device.Device).Am,B.Fj,
B.Fn]);},AEC:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var Ai2=this.Ako();if(Ai2>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,Ai2,false);Filter.
CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeU(false
);},BvT:function(s){this.AEC(s);},AAT:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?
B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BF4:function(s){this.AAT(s);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcS],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcS],
E,0);if(!!E)A.pe([this,this.AcS],this);},C2:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.AW.AwE(-1);return;}var AyW=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DQ(1,4))?B:null);if(!AyW){this.AW.AwE(
0);this.AW.AeU(true);}else this.AW.AwE(AyW.A4);},AcS:function(s){this.C2(s);},_Init:
function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.Yt;this.AW.AwE(0);this.
AW.Di=[this,this.BvT];this.Init(aArg);},_Mark:function(D){var B;C.AjR._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqH={BirthType:null,EaseOfDelivery:null,Cb:null,Ef:null,AbJ:null,G1:null,Cn:
null,AbH:null,AMV:false,Init:function(aArg){this.AMV=A._GetAutoObject(A.Device.Helper
).W.Ard();if(this.AMV)this.AeT(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeT(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cb.
LX([this,this.AcQ]);this.Cb.L0(A.aaL(A.ach.Ae_));this.Cb.AR=[this,this.AcQ];}this.
Ef.Ar0(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GE],this.Ef.
Q,0);A.zX([this,this.GE],this.Cb.Q,0);A.pe([this,this.GE],this);},Af_:function(G
){if(((this.Ef.Ash===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQ6(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cq(
A._GetAutoObject(A.Device.Device).Am);if(this.KI>0){if(this.AMV){var Ad=A._GetAutoObject(
A.Device.Device).Bt.Lc(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.EM(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AX1,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fu();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(C.A$).Fu();},Aud:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.AmY));this.N.Cl=[this,this.AyL];},AAo:function(
G){A._GetAutoObject(C.A$).Cg(32);},GE:function(G){var F;var J$=(F=this.Ef.Q,F[1].
call(F[0]));var ABe=(F=this.Cb.Q,F[1].call(F[0]));var A3_=true;if(!!J$&&(ABe===J$
))A3_=false;A._GetAutoObject(A.Device.Helper).JV(this.Cb,A3_);this.Ef.BlC(!A3_);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvU._Init.
call(this.Cb={I:this},0);C.Q9._Init.call(this.Ef={I:this},0);C.Acn._Init.call(this.
AbJ={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.SM._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbH={I:this},0);this.__proto__=C.AqH;var B;this.Cb.H(AhU
);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak3));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akl));this.Ef.H(AhU);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ud));this.AbJ.H(AX2);this.AbJ.Aj(true);this.
AbJ.T(A.aaR(A.acf.GJ));this.G1.H(AhU);this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Aro
));this.Cn.H(AhU);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeb));this.Cn.AFv(true);
this.AbH.H(AhU);this.AbH.Aj(true);this.AbH.T(A.aaR(A.acf.AgA));this.J(this.Cb,-1
);this.J(this.Ef,-1);this.J(this.AbJ,-1);this.J(this.G1,-1);this.J(this.Cn,-1);this.
J(this.AbH,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Ary,B.Q2]);this.Ef.Gn([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anp,B.Nd]);this.AbJ.Gn([this,this.D_,this.GN]);this.AbJ.As([
B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SB]);this.G1.As([B=this.BirthType,
B.B7,B.B8]);this.G1.CI(this.BirthType);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.
LX([B=this.Cn,B.FP]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Av6,B.Q0]);this.AbH.As([B=this.EaseOfDelivery,B.B7,B.B8]);this.
AbH.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cb._Done();this.Ef._Done(
);this.AbJ._Done();this.G1._Done();this.Cn._Done();this.AbH._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cb._ReInit();this.Ef._ReInit();this.AbJ._ReInit();
this.G1._ReInit();this.Cn._ReInit();this.AbH._ReInit();this.Cb.T(A.aaR(A.acf.Ak3
));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.
Cb.ArL(A.aaR(A.acf.Akl));this.Ef.T(A.aaR(A.acf.Ud));this.AbJ.T(A.aaR(A.acf.GJ));
this.G1.T(A.aaR(A.acf.Aro));this.Cn.T(A.aaR(A.acf.Aeb));this.AbH.T(A.aaR(A.acf.AgA
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acn={FE:null,AW:null,A8:0,IW:function(G){C.Dt.IW.call(this,G);if(!this.A8)this.
FP(this);else this.G_(this);},Ai:function(Ae){C.Dt.Ai.call(this,Ae);this.Ht.Z(false
);this.H2.Z(false);if(this.A8===1){this.Bb(this.AW);if(this.Hf){this.AW.FH(A.jb.
CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FH(A.jb.CS);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.AW.FH(A.jb.CK);
else this.AW.FH(A.jb.CS);this.Bb(null);}},By:function(E){var F;var BQ=this.AM;C.
Dt.By.call(this,E);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ue,this.BaL],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.FE.AkO((F=
this.N,F[1].call(F[0])));}},FP:function(G){this.Ew(1);},G_:function(G){this.Ew(0
);},Ew:function(EO){var F;if(!this.A8)this.FE.Ajx((F=this.N,F[1].call(F[0])));this.
A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SJ(7);this.DJ(this);this.An();},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.AQ0._Init.call(this.AW={I:this},0);this.__proto__=C.Acn;this.H(UT);this.EV(999999
);this.V.R(As6);this.V.L(A.jb.Bm);this.Ht.Z(false);this.H2.Z(false);this.AW.H(AX3
);this.AW.ATb(6);this.J(this.AW,0);this.AW.As([this,this.Ue,this.BaL]);this.FE=A.
_NewObject(C.Aep,0);},_Done:function(){this.__proto__=C.Dt;this.AW._Done();C.Dt.
_Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.FE)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dn:function(){return 4;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuB={Y:null,QL:null,NV:null,Ee:null,PC:null,Pz:null,PA:null,Ay:null,Ga:null,
ReasonOfLeaving:null,Ahs:null,M2:0,AmF:false,AB4:true,AOt:false,Asd:false,Init:function(
aArg){A.zX([this,this.A9c],[this,this.A8F,this.ATe],0);this.Ahg(A._GetAutoObject(
A.Device.Helper).W.AhN(2));this.ReasonOfLeaving.As(this.ReasonOfLeaving.DU(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9c],this);},DE:function(G){
var B;var Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;
case 4:Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlX:function(G
){A._GetAutoObject(C.A$).Fu();},ApK:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmF){A._GetAutoObject(A.Device.Helper).W.Ahj(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6F(A._GetAutoObject(A.Device.Helper).Dv(),this.Asd);}A._GetAutoObject(A.Device.
Helper).W.AFu(this.ReasonOfLeaving.C4((F=this.NV.Q,F[1].call(F[0]))));if(this.AB4
)A._GetAutoObject(A.Device.Helper).W.Q2(0);if(this.Asd)A._GetAutoObject(A.Device.
Helper).W.AwG(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);this.A_5();},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Ahg:function(E){
if(this.M2===E)return;this.M2=E;},Anm:function(){return this.M2;},BeS:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A$).Fu();A._GetAutoObject(A.Device.Helper
).Asn();}},A9c:function(G){switch(this.Asd){case false:this.Ee.T(A.aaR(A.acf.AVD
));break;case true:this.Ee.T(A.aaR(A.acf.Bqe));break;default:;}},ATe:function(E){
if(this.Asd===E)return;this.Asd=E;},A8F:function(){return this.Asd;},A_5:function(
){A._GetAutoObject(A.Device.Device).A9(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeS]);},Bl2:function(E){if(this.AOt===E)return;
this.AOt=E;},Bkn:function(){return this.AOt;},Blp:function(E){if(this.AB4===E)return;
this.AB4=E;},Bkb:function(){return this.AB4;},BlA:function(E){if(this.AmF===E)return;
this.AmF=E;},Bkj:function(){return this.AmF;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afh._Init.call(this.QL={I:this
},0);C.Asw._Init.call(this.NV={I:this},0);C.AkS._Init.call(this.Ee={I:this},0);C.
Afh._Init.call(this.PC={I:this},0);C.Afh._Init.call(this.Pz={I:this},0);C.Afh._Init.
call(this.PA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ga._Init.call(this.
Ga={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahs._Init.call(this.Ahs={I:this},0);this.__proto__=C.AuB;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dq(C.IG);this.Y.H(E$);this.Y.JO(1);this.QL.H(
Aag);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.AmF));this.QL.Bg(true);this.QL.Zx(false
);this.QL.F0(-1);this.QL.EV(1);this.NV.H(UV);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bg(true);this.NV.Zx(false);this.Ee.H(AhT);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVD));this.Ee.Bg(false);this.Ee.F0(1000);this.Ee.
EV(999000);this.PC.H(UV);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A4L));this.PC.Bg(
true);this.PC.Zx(false);this.PC.By(1);this.PC.F0(-1);this.PC.EV(1);this.Pz.H(Aag
);this.Pz.Aj(true);this.Pz.T(A.aaR(A.acf.A4M));this.Pz.Bg(true);this.Pz.Zx(false
);this.Pz.By(1);this.Pz.F0(-1);this.Pz.EV(1);this.PA.H(UV);this.PA.Aj(true);this.
PA.T(A.aaR(A.acf.A5m));this.PA.Bg(true);this.PA.Zx(false);this.PA.By(1);this.PA.
F0(-1);this.PA.EV(1);this.Ay.H(Ayc);this.Ga.As(0);this.J(this.Y,0);this.J(this.QL
,0);this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PC,0);this.J(this.Pz,0);this.
J(this.PA,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe
];this.QL.As([B=this.Ga,B.B7,B.B8]);this.QL.CI(this.Ga);this.QL.AkB([this,this.Bkj
,this.BlA]);this.NV.Gn([this,this.D_,this.GN]);this.NV.LX([B=this.NV,B.FP]);this.
NV.L0(A.aaL(A.ach.Edit));this.NV.As([B=this.ReasonOfLeaving,B.B7,B.B8]);this.NV.
CI(this.ReasonOfLeaving);this.NV.Anu(this.Ahs);this.Ee.As([this,this.Anm,this.Ahg
]);this.PC.As([B=this.Ga,B.B7,B.B8]);this.PC.CI(this.Ga);this.PC.AkB([this,this.
Bkn,this.Bl2]);this.Pz.As([B=this.Ga,B.B7,B.B8]);this.Pz.CI(this.Ga);this.Pz.AkB([
this,this.A8F,this.ATe]);this.PA.As([B=this.Ga,B.B7,B.B8]);this.PA.CI(this.Ga);this.
PA.AkB([this,this.Bkb,this.Blp]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QL._Done();this.NV._Done();this.Ee._Done();this.PC._Done(
);this.Pz._Done();this.PA._Done();this.Ay._Done();this.Ga._Done();this.ReasonOfLeaving.
_Done();this.Ahs._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QL._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PC._ReInit();this.Pz._ReInit();this.PA._ReInit();this.Ay._ReInit();this.Ga.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahs._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QL.T(A.aaR(A.acf.AmF));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVD));this.PC.T(A.aaR(A.acf.A4L));this.Pz.T(A.aaR(A.acf.A4M
));this.PA.T(A.aaR(A.acf.A5m));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahs)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUD={AjK:null,Ps:null,Au1:AX4,Bk:function(aSize){C.Io.Bk.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Ht.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H2.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Io.Ai.call(this,Ae);this.Ps.L(this.V.AQ);if(!!this.AjK){if((
F=this.AjK,F[1].call(F[0]))===-1)this.Ps.R(this.Au1+AH8);else this.Ps.R((this.Au1+
CQ)+(F=this.AjK,F[1].call(F[0])).toFixed());}else this.Ps.R(this.Au1);},A2Z:function(
G){this.An();},BlK:function(E){if(A.aaZ(this.AjK,E))return;if(!!this.AjK)A.z$([this
,this.A2Z],this.AjK,0);this.AjK=E;if(!!E)A.zX([this,this.A2Z],E,0);if(!!E)A.pe([
this,this.A2Z],this);},A9E:function(E){if(this.Au1===E)return;this.Au1=E;this.An(
);},_Init:function(aArg){C.Io._Init.call(this,aArg);C.CH._Init.call(this.Ps={I:this
},0);this.__proto__=C.AUD;this.H(AX5);this.V.H(AX6);this.V.A6(0x12);this.Ps.H(AX7
);this.Ps.A6(0x12);this.Ps.L(A.jb.Bm);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.Af)
);this.Ps.A2(A.aaL(A.fl.Ak));this.Ps.Cu(null);},_Done:function(){this.__proto__=
C.Io;this.Ps._Done();C.Io._Done.call(this);},_ReInit:function(){C.Io._ReInit.call(
this);this.Ps._ReInit();this.Ps.S(A.aaL(A.fl.Af));this.Ps.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Io._Mark.call(this,D);if((B=this.AjK)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMc={Y:null,JK:null,So:null,Ay:null,Aqv:2500,ANs:24,DE:function(G){var B;var
Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:
Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlX:function(G){A._GetAutoObject(
C.A$).Fu();},ApK:function(G){},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Blt:function(
E){if(this.Aqv===E)return;this.Aqv=E;},Bkd:function(){return this.Aqv;},Blu:function(
E){if(this.ANs===E)return;this.ANs=E;},Bke:function(){return this.ANs;},Bj4:function(
G){var F,CA;this.JK.BT.L(this.JK.V.AQ);if(!!this.JK.Q)this.JK.BT.R((((String.fromCharCode(((
F=this.JK.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afw)+String.fromCharCode(((
CA=this.JK.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JK.
AG0);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Io._Init.call(this.JK={I:this},0);C.Io._Init.call(this.So={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMc;this.N.Z(true);this.
Dq(C.IG);this.Y.H(E$);this.Y.JO(1);this.JK.H(AhT);this.JK.Aj(true);this.JK.T(A.aaR(
A.acf.Aqv));this.JK.Bg(false);this.JK.F0(0);this.JK.EV(5000);this.JK.IM(A.aaR(A.
acf.Af1));this.JK.I9(A.aaR(A.acf.Af1));this.JK.AS5(100);this.So.H(UV);this.So.Aj(
true);this.So.T(A.aaR(A.acf.A_E));this.So.Bg(true);this.So.By(24);this.So.F0(10);
this.So.EV(33);this.So.IM(AX8);this.Ay.H(Ayc);this.J(this.Y,0);this.J(this.JK,0);
this.J(this.So,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.VZ));this.Y.El=[this,this.
Fe];this.JK.As([this,this.Bkd,this.Blt]);this.JK.A_b([this,this.Bj4]);this.So.As([
this,this.Bke,this.Blu]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JK._Done();this.So._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JK._ReInit();this.So._ReInit();this.
Ay._ReInit();this.JK.T(A.aaR(A.acf.Aqv));this.JK.IM(A.aaR(A.acf.Af1));this.JK.I9(
A.aaR(A.acf.Af1));this.So.T(A.aaR(A.acf.A_E));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arq={EaseOfDelivery:null,BirthType:null,Cb:null,Do:null,Dh:null,Cn:null,Ee:null
,G1:null,Li:null,M2:0,LU:false,Init:function(aArg){A.zX([this,this.GE],this.Cb.Q
,0);A.zX([this,this.GE],this.Do.Q,0);A.zX([this,this.AAt],this.C$.Q,0);A.zX([this
,this.Beo],this.Cn.Dj,0);A.zX([this,this.Bei],this.C9.Q,0);A.zX([this,this.AtY],
this.Cb.Q,0);A.zX([this,this.AtY],this.Do.Q,0);A.pe([this,this.AAt],this);A.pe([
this,this.GE],this);A.pe([this,this.Beo],this);A.pe([this,this.Bei],this);A.pe([
this,this.AtY],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.Hi();A.
_GetAutoObject(C.A$).Fu();},Af_:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).Ahy
){var AlI=A._GetAutoObject(A.Device.Helper).Ahy.AOR();A._GetAutoObject(A.Device.
Helper).W.Ab4(AlI);A._GetAutoObject(A.Device.Helper).W.Anz(AlI);}var Alo=A._GetAutoObject(
A.Device.Helper).A1i(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Hp,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).Am);if(!Alo){this.AiY();A.pe([this,this.
Bwf],this);}else A._GetAutoObject(A.Device.Helper).AKg(A._GetAutoObject(A.Device.
Helper).W,Alo,(F=this.Dh.HZ.Hp,F[1].call(F[0])),0,[this,this.ApF]);},Aud:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.ADF));this.N.Cl=[this,this.AyL];},AiY:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);var L6=A._GetAutoObject(A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SK(L6);var Bdh=false;if(A._GetAutoObject(
A.Device.Helper).Am1()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){Bdh=true;A.
_GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.
HG().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A66()&&(Bdh===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}var IT=null;switch((F=this.
Dh.HZ.Hp,F[1].call(F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Av9,
B.AyC];break;case 2:IT=[B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyD];break;case
4:case 5:IT=[B=A._GetAutoObject(A.Device.Device),B.Ano,B.AoB];break;default:;}if(
!!IT)switch((F=this.Dh.Kj.VN,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$v(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Do.Q,F[1].call(F[0])),this.Do.AjM(),this.Do.AjO());},Ap4:function(G){A.
_GetAutoObject(C.A$).Fu();},Bwf:function(s){this.Ap4(s);},AAo:function(G){A._GetAutoObject(
C.A$).Cg(49);},Ahg:function(E){if(this.M2===E)return;this.M2=E;A.abo([this,this.
Anm,this.Ahg],0);},GE:function(G){if(A._GetAutoObject(A.Device.Helper).Am1())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A66())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Do.Z(false);this.Cb.T(A.aaR(A.
acf.ACv));this.Cb.AEU(A.aaL(A.ach.Ae_));}else{this.Do.Z(true);this.Cb.T(A.aaR(A.
acf.Ak3));this.Cb.AEU(null);}},AAt:function(G){A._GetAutoObject(A.Device.Helper).
AVm(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LU);},Beo:function(G){A.pe([this,this.Bgh],this);},Bei:function(G){A.pe([this
,this.Bgh],this);},Bgh:function(G){var F,CA,S8;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahk(A._GetAutoObject(A.Device.Helper
).AhN(A._GetAutoObject(A.Device.Helper).Abq((F=this.BZ.Q,F[1].call(F[0]))),(CA=this.
Cn.Dj,CA[1].call(CA[0])),2,(S8=this.BZ.Q,S8[1].call(S8[0]))));break;case 2:this.
Ee.Ahk(A._GetAutoObject(A.Device.Helper).AhN(this.KI,(F=this.Cn.Dj,F[1].call(F[0
])),2,(CA=this.BZ.Q,CA[1].call(CA[0]))));break;default:;}},ApF:function(G){var F;
var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id
){case 22:case 21:switch((F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JD(this.Dh);break;case 0:this.JD(this.Do);break;case 1:this.JD(this.
Cb);break;default:throw new Error(Ayk+(F=this.Dh.HZ.Hp,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JD(this.Dh);this.JD(this.Do);}break;case 25:case 42:{this.
JD(this.Dh);this.JD(this.Cb);}break;case 41:break;default:A.ab5("%s%e",As4,At.Id
);}},ApG:function(G){var F;C.HY.ApG.call(this,G);var AoV=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoV=A._GetAutoObject(A.Device.Device).AdO;break;case
1:AoV=730;break;default:A.ab5("%s%e",Alb,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cn.Dj,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmD(AoV)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnU));this.Ee.Ahk(A._GetAutoObject(
A.Device.Helper).W.AhN(1));},AeZ:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Awa,this.AeZ],0);},AtY:function(G){var F,CA,S8;this.AeZ(((F=this.Cb.Q,
F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S8=this.Cb.Q,S8[1].call(
S8[0])));A.pe([this,this.GE],this);},Anm:function(){return this.M2;},Awa:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvU._Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Do={I:this}
,0);C.AGy._Init.call(this.Dh={I:this},0);C.SM._Init.call(this.Cn={I:this},0);C.AkS.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.BW._Init.call(
this.Li={I:this},0);this.__proto__=C.Arq;var B;this.Dq(C.AC7);this.CG.H(AcP);this.
Cb.H(Aop);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak3));this.Cb.ArK(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akl));this.
Do.H(Aop);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ud));this.Do.Ar0(false);this.Dh.
H(AX9);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GJ));this.Dh.By(0);this.Cn.H(AcP);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeb));this.Cn.AFv(true);this.Ee.H(AcP);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.F0(1000);this.Ee.EV(999000);this.
G1.H(AcP);this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Aro));this.Li.H(AcP);this.Li.Aj(
true);this.Li.T(A.aaR(A.acf.AgA));this.J(this.Cb,-3);this.J(this.Do,-3);this.J(this.
Dh,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G1,-1);this.J(this.Li,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Cb.AR=[this,this.AcQ];this.Cb.LX([this
,this.AcQ]);this.Cb.L0(A.aaL(A.ach.Ae_));this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Ary,B.Q2]);this.Cb.OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY
]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.Cb.Uh([B=A._GetAutoObject(
A.Device.Device),B.Anl,B.AoA]);this.Cb.AeZ([this,this.Awa,this.AeZ]);this.Do.Gn([
this,this.D_,this.GN]);this.Do.LX([this,this.AcQ]);this.Do.L0(A.aaL(A.ach.Ae_));
this.Do.Uj([B=this.Gender.Animal,B.Wt,B.JP]);this.Do.OL([B=A._GetAutoObject(A.Device.
Device),B.Uf,B.UY]);this.Do.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);
this.Do.Uh([B=A._GetAutoObject(A.Device.Device),B.Anl,B.AoA]);this.Do.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anp,B.Nd]);this.Do.Ans([B=this.AnimalType.Animal,B.PM,B.EB]
);this.Dh.Gn([this,this.D_,this.GN]);this.Dh.LX([B=this.Dh,B.FP]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.As([B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SB]);this.
Dh.A9f(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gn([this,this.D_,this.GN]);this.
Cn.LX([B=this.Cn,B.FP]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Av6,B.Q0]);this.Ee.As([this,this.Anm,this.Ahg]);this.G1.As([
B=this.BirthType,B.B7,B.B8]);this.G1.CI(this.BirthType);this.Li.As([B=this.EaseOfDelivery
,B.B7,B.B8]);this.Li.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cb._Done(
);this.Do._Done();this.Dh._Done();this.Cn._Done();this.Ee._Done();this.G1._Done(
);this.Li._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cb._ReInit();this.
Do._ReInit();this.Dh._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G1._ReInit(
);this.Li._ReInit();this.Cb.T(A.aaR(A.acf.Ak3));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akl));this.Do.T(
A.aaR(A.acf.Ud));this.Dh.T(A.aaR(A.acf.GJ));this.Cn.T(A.aaR(A.acf.Aeb));this.Ee.
T(A.aaR(A.acf.M2));this.G1.T(A.aaR(A.acf.Aro));this.Li.T(A.aaR(A.acf.AgA));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AG8={H5:null,AhD:null,AgK:null,AhE:null,AgL:null,AnimalType:null,Background:
null,NX:null,Rh:null,V:null,TP:null,YA:null,AbE:null,PL:null,DK:A.jV,AGA:true,CP:
function(){this.An();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An5();this.
AxM();},An5:function(){var F,CA;var LD=0;var Amb=0;var AlB=0;var H$=0;if((((!!this.
AhD&&!!this.AhE)&&!!this.AgK)&&!!this.AgL)&&!!this.AnimalType){Amb=(F=this.AhD,F[
1].call(F[0]));AlB=(F=this.AgK,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper
).MN((F=this.AhE,F[1].call(F[0])),(CA=this.AgL,CA[1].call(CA[0])));H$=(F=this.AnimalType
,F[1].call(F[0]));}var K7=A.jb.Text;var Ay4=A.jb.CS;if(!!LD){var ALw=A._GetAutoObject(
A.acj.DV).Alv(LD,Amb,AlB);Ay4=A._GetAutoObject(A.acj.DV).AzJ(ALw,H$);K7=A._GetAutoObject(
A.acj.DV).AzL(ALw,H$);}this.Background.L(Ay4);this.TP.L(K7);this.Rh.L(K7);this.NX.
L(K7);this.AbE.L(K7);if(K7===A.jb.Bm)this.YA.L(K7);else this.YA.L(A.jb.CK);this.
V.L(K7);this.PL.L(K7);},AxM:function(){var F,CA;var LD=0;var Amb=0;var AlB=0;if(((
!!this.AhD&&!!this.AhE)&&!!this.AgK)&&!!this.AgL){Amb=(F=this.AhD,F[1].call(F[0]
));AlB=(F=this.AgK,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper).MN((F=this.
AhE,F[1].call(F[0])),(CA=this.AgL,CA[1].call(CA[0])));}if(!!LD){var ALw=A._GetAutoObject(
A.acj.DV).Alv(LD,Amb,AlB);this.Rh.R(A._GetAutoObject(A.Device.Converter).S3(ALw,
2,true));this.NX.Z(true);this.Rh.Z(true);this.PL.Z(false);}else{this.NX.Z(false);
this.Rh.Z(false);this.PL.Z(true);}this.TP.R(this.ByT(AlB-Amb,LD));this.AbE.Z(this.
AGA);this.YA.Z(this.AGA);this.NX.R(A._GetAutoObject(A.acj.DV).Aax());},ByT:function(
A0Z,Ah1){var B;if(Ah1<0){A.ab5("%s",AX_);return A.jV;}var Is=(AX$+A._GetAutoObject(
A.acj.DV).AfY())+CQ;var FQ=A._GetAutoObject(A.Device.Converter).Ak8(A0Z);if(!A0Z
)FQ=A.abU(FQ,AYa,0);else if(A0Z>0)FQ=A.abU(FQ,AH9,0);Is=this.Bfy(Is,AYb,FQ);if(Ah1===
1)Is=Is+A.aaR(A.acf.BiX);else{Is=Is+A.aaR(A.acf.BiY);Is=this.Bfy(Is,AYc,Ah1.toFixed(
));}return Is;},Bfy:function(aString,BbP,Bxg){if(aString===A.jV){A.ab5("%s",AYd);
return A.jV;}var A2F=aString.indexOf(BbP,0);if(A2F>=0){aString=A.ab1(aString,A2F
,BbP.length);aString=A.abU(aString,Bxg,A2F);}return aString;},ATt:function(E){if(
A.aaZ(this.AhD,E))return;if(!!this.AhD)A.z$([this,this.C2],this.AhD,0);this.AhD=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlH:function(
E){if(A.aaZ(this.AgK,E))return;if(!!this.AgK)A.z$([this,this.C2],this.AgK,0);this.
AgK=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATu:function(
E){if(A.aaZ(this.AhE,E))return;if(!!this.AhE)A.z$([this,this.C2],this.AhE,0);this.
AhE=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlI:function(
E){if(A.aaZ(this.AgL,E))return;if(!!this.AgL)A.z$([this,this.C2],this.AgL,0);this.
AgL=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.An();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_a:function(
E){if(this.AGA===E)return;this.AGA=E;this.An();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rh={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TP={I:this},0);A.acg.
Ap._Init.call(this.YA={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);C.CH.
_Init.call(this.PL={I:this},0);this.__proto__=C.AG8;this.H(Afy);this.Background.
AZ(0x3F);this.Background.H(Afy);this.NX.H(AYe);this.NX.R(A._GetAutoObject(A.acj.
DV).Aax());this.NX.A6(0x9);this.NX.L(A.jb.Text);this.Rh.H(AYf);this.Rh.A6(0x14);
this.Rh.R(A.aaR(A.acu.Akj));this.Rh.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYg);this.
V.R(A.aaR(A.acf.Aus));this.V.A6(0x12);this.V.L(A.jb.Text);this.TP.H(Aaf);this.YA.
AZ(0x14);this.YA.H(AH_);this.YA.Cv(1);this.AbE.AZ(0x14);this.AbE.H(AH_);this.AbE.
Cv(0);this.PL.H(AYh);this.PL.R(A.aaR(A.acf.A4s));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rh,0);this.J(this.V,0);this.J(this.TP,0);this.J(this.YA
,0);this.J(this.AbE,0);this.J(this.PL,0);this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ii));this.Rh.S(A.aaL(A.fl.Aeo));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));this.TP.S(A.aaL(A.
fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.TP.Cu(A.aaL(A.fl.Bh));this.YA.Aw(A.aaL(A.
ach.ABE));this.AbE.Aw(A.aaL(A.ach.ABE));this.H5=A._NewObject(A.Device.Rating,0);
this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.PL.Cu(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rh._Done();this.V._Done();this.TP._Done();this.YA._Done();this.AbE._Done(
);this.PL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rh._ReInit();this.V.
_ReInit();this.TP._ReInit();this.YA._ReInit();this.AbE._ReInit();this.PL._ReInit(
);this.Rh.R(A.aaR(A.acu.Akj));this.V.R(A.aaR(A.acf.Aus));this.PL.R(A.aaR(A.acf.A4s
));this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ii
));this.Rh.S(A.aaL(A.fl.Aeo));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cu(A.aaL(A.fl.Bh));this.TP.S(A.aaL(A.fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.
TP.Cu(A.aaL(A.fl.Bh));this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.
PL.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhD)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgL)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVE={Animal:null,Rating:null,Cr:null,AD:null,AY:
0,Hg:function(G){var B;if(!this.Animal||!this.Rating)return;var Gc=this.AD.G0;var
Cz=(C.AG8.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PM,B.EB]);Cz.BlH([B=A._GetAutoObject(A.Device.Device),B.AEA,B.AIR]);Cz.BlI([B=
this.Rating,B.A8V,B.OnSetTimestamp]);switch(Gc%this.AY){case 1:{Cz.ATt([B=this.Animal
,B.A8v,B.AFc]);Cz.ATu([B=this.Animal,B.A8W,B.AFG]);Cz.T(A.aaR(A.acf.Aus));}break;
default:if(this.Animal.Ard()){Cz.ATt([B=this.Animal,B.ASo,B.AwB]);Cz.ATu([B=this.
Animal,B.ASF,B.Aw3]);Cz.T(A.aaR(A.acf.ALU));}else{Cz.ATt([B=this.Animal,B.ASo,B.
AwB]);Cz.ATu([B=this.Animal,B.ASF,B.Aw3]);Cz.T(A.aaR(A.acf.BgA));}}if(this.AY>1)
Cz.A_a(true);else Cz.A_a(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GK
]));},DE:function(G){if(this.AY>0)switch(this.Cr.CO){case 6:this.CB(this);break;
case 7:this.Cl(this);break;default:this.Cr.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Ju(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Ju(1);else{this.Ju(2);this.AD.G2(1);this.
AD.HD(this.AD.Go,true,null,null);}if(this.AY>0)this.AD.AbG(0,this.AY-1);},AkC:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbG(0,this.AY-1);
},CB:function(G){if(this.AD.Go>0)this.AD.G2(this.AD.Go-1);else this.AD.G2(this.AY-
1);this.AD.HD(this.AD.Go,true,null,null);},Cl:function(G){if(this.AD.Go<(this.AY-
1))this.AD.G2(this.AD.Go+1);else this.AD.G2(0);this.AD.HD(this.AD.Go,true,null,null
);},Ju:function(E){if(this.AY===E)return;this.AY=E;this.AD.Ju(this.AY);A.abo([this
,this.Arv,this.Ju],0);},Arv:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVE;this.H(Afy);this.Cr.Filter=147;this.
AD.AZ(0x3F);this.AD.H(Afy);this.AD.NZ(C.AG8);this.AD.Ae2(160);this.AD.G2(0);this.
AD.Ju(2);this.J(this.AD,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,this.DE];this.
AD.Hg=[this,this.Hg];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bk:function(aSize){C.Co.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((
Ae&0x20)===0x20);var GA=this.Bo.Bw;var FM=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FM=
A.jb.CS;GQ=A.jb.Text;}if(!G$){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else
if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.L(GQ);}this.LI=G$;
this.KE=Fq;this.Qn=GA;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(JZ);this.V.H(BF);this.Zx(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeM={KJ:null,GG:A.jV,Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.KJ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KJ.
L(this.V.AQ);},Init:function(aArg){},Ab3:function(E){if(this.GG===E)return;this.
GG=E;this.KJ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KJ={I:this},0);this.__proto__=C.AeM;this.H(JZ);this.Background.H(JZ);this.V.
H(Aae);this.V.R(Lv);this.KJ.H(IR);this.KJ.R(AYi);this.J(this.KJ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.KJ.S(A.aaL(A.fl.Af));this.
KJ.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KJ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KJ.S(A.aaL(
A.fl.Af));this.KJ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvU={AB8:null,Q:null,A1:null,AF:null,Ig:null,LU:null,Ap:null,EN:null,AN7:A.jV
,AN8:A.jV,Bk:function(aSize){C.AeM.Bk.call(this,aSize);if(!this.AB8)this.KJ.H([].
concat(0,this.KJ.M.slice(1,4)));else this.KJ.H([].concat(this.Ap.M[2],this.KJ.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S8;C.AeM.Ai.call(this,Ae);var Bcf=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apg)this.Ab3(this.AN7);else
this.Ab3(this.AN8);}else{this.Ab3(A._GetAutoObject(A.Device.Converter).Rf((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ig&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ig,F[1].call(F[0]))===1)||(!(CA=this.Ig,CA[1].call(CA[0]))&&(S8=this.LU,S8[1].call(
S8[0])))))Bcf=true;}}this.EN.Z(Bcf);this.Ap.L(this.V.AQ);A.pe([this,this.Af6],this
);},C2:function(G){this.An();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AEU:function(E){if(this.AB8===E)return;this.AB8=E;this.
Ap.Aw(E);this.Bi4();},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaH],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaH],E,0);if(!!E)A.pe([
this,this.AaH],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaI],E,0);if(!!E)
A.pe([this,this.AaI],this);},AaI:function(G){this.An();},AaH:function(G){this.An(
);},Uh:function(E){if(A.aaZ(this.Ig,E))return;if(!!this.Ig)A.z$([this,this.AlW],
this.Ig,0);this.Ig=E;if(!!E)A.zX([this,this.AlW],E,0);if(!!E)A.pe([this,this.AlW
],this);},AlW:function(G){this.An();},Af6:function(G){var F,CA;if((!this.Ig||!this.
A1)||!this.AF)return;var A2n=this.KJ.Afb([(this.KJ.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3H=this.KJ.Afb([this.KJ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var AA9=this.KJ.Db(0x0);this.EN.H([A2n[0]-
1,AA9[1],A3H[0]+1,AA9[3]]);},ArK:function(E){if(this.AN7===E)return;this.AN7=E;this.
An();},ArL:function(E){if(this.AN8===E)return;this.AN8=E;this.An();},AeZ:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A26],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A26],E,0);if(!!E)A.pe([this,this.A26],this);},A26:function(
G){this.An();},_Init:function(aArg){C.AeM._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.AvU;
this.Ap.H(AhP);this.EN.H(AYj);this.EN.Ng(2);this.EN.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EN,0);this.KJ.Q1([this,this.Af6]);},_Done:function(){this.__proto__=
C.AeM;this.Ap._Done();this.EN._Done();C.AeM._Done.call(this);},_ReInit:function(
){C.AeM._ReInit.call(this);this.Ap._ReInit();this.EN._ReInit();},_Mark:function(
D){var B;C.AeM._Mark.call(this,D);if((B=this.AB8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ig)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={If:0,AaG:4,Bds:true,Bdr:false,Bcm:true,Bdk:false,Al1:function(
G){C.Q8.Al1.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdj()){this.If=A._GetAutoObject(
A.Device.Helper).Uw.Id;var Aiu=A._GetAutoObject(A.Device.Helper).AQ8(this.If);if(
Aiu)A._GetAutoObject(A.Device.Device).A9(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A2_]);else{this.AaG=A._GetAutoObject(A.Device.
Helper).AQ9(this.If);var BdP=false;if((this.AaG===3)||(this.AaG===2))BdP=A._GetAutoObject(
A.Device.Helper).A67(this.If,A._GetAutoObject(A.Device.Helper).W);if(BdP)A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.If),0,null
);else switch(this.AaG){case 2:{var BO=A._GetAutoObject(A.Device.Converter).AxK(
this.If);A._GetAutoObject(A.Device.Device).A9(46,true,BO.toFixed(),0,[this,this.
A2_]);}break;case 3:case 1:case 0:case 4:this.A3X();break;default:throw new Error(
AH$+this.AaG.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A$).Fu();},AIS:function(
s){this.Ev(s);},A3X:function(){if((this.AaG===3)||(this.AaG===2)){if((this.Bcm&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.If)){A._GetAutoObject(A.Device.Device).A9(69,true,A.jV,0,[this
,this.A2_]);return;}else this.BBm();}A._GetAutoObject(A.Device.Helper).W.Q2(this.
If);this.Bdk=true;this.BBo();this.Ev(this);},A2_:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A3X();break;case 107:switch(At.PopupState){case 7:{this.A3X();A._GetAutoObject(A.
Device.Helper).BnY(this.If);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(At.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AIa,At.Id);}},BBm:
function(){A._GetAutoObject(A.Device.Helper).W.Nd(this.If);if(this.Bdr&&(A._GetAutoObject(
A.Device.Converter).ZZ(this.If)===10)){var Bb3=Math.trunc((this.If%1000000000000
)/10000000000);if(!Bb3&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((Bb3===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBo:function(){if(this.
Bds){A._GetAutoObject(A.Device.Helper).W.SB(A._GetAutoObject(A.Device.Helper).A4K(
A._GetAutoObject(A.Device.Device).Ak2,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak2===1)A._GetAutoObject(A.Device.Helper).A$w();
}},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.OQ));this.Jc.H(AYk);this.
IP.H(W2);this.AkE(1);this.N.CB=[this,this.AIS];this.N.CY(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(A.acf.OQ));},_className:"Application::SetTransponderScreen"
};C.ADh={Gj:null,Lm:null,Kp:null,CP:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Lm.R(A._GetAutoObject(A.acj.DV
).AfY());this.Kp.R(A._GetAutoObject(A.acj.DV).Aax());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gj={I:this},0);A.acg.Text._Init.
call(this.Lm={I:this},0);A.acg.Text._Init.call(this.Kp={I:this},0);this.__proto__=
C.ADh;this.Background.L(A.jb.Text);this.Gj.H(AYl);this.Gj.A6(0x11);this.Gj.R(A.aaR(
A.acf.Date));this.Gj.L(A.jb.Bm);this.Lm.H(AYm);this.Lm.A6(0x11);this.Lm.L(A.jb.Bm
);this.Kp.H(AYn);this.Kp.L(A.jb.Bm);this.J(this.Gj,0);this.J(this.Lm,0);this.J(this.
Kp,0);this.Gj.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Gj._Done();this.Lm.
_Done();this.Kp._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Gj._ReInit();this.Lm._ReInit();this.Kp._ReInit();this.Gj.R(A.aaR(
A.acf.Date));this.Gj.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHa={Mh:null,Hl:null,H9:null,AP:null,A_:null,FQ:0,H$:0,AiJ:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiJ){this.H9.R(Rl);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S3(this.FQ,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzL(this.FQ,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzJ(this.FQ,this.H$));}this.Hl.L(this.V.AQ);
},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Aly=this.AX.HF(
Ad,6);var Al6=this.AX.CE(Ad,8);if(this.Hn>0){var Byr=this.AX.HF(this.Hn-1,6);var
BA1=this.AX.CE(this.Hn-1,8);var LD=A._GetAutoObject(A.Device.Helper).MN(Byr,Aly);
if(!!LD){this.AiJ=false;this.FQ=A._GetAutoObject(A.acj.DV).Alv(LD,BA1,Al6);}else{
this.AiJ=true;this.FQ=0;}}else{this.AiJ=true;this.FQ=0;}this.T(A._GetAutoObject(
A.acj.KK).ACK(Aly));this.Hl.R(A._GetAutoObject(A.Device.Converter).Ak8(Al6));this.
H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.An();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AHa;this.V.H(O3);this.Mh.H(As7);this.Hl.H(AIb);this.Hl.A6(0x12);this.Hl.R(Rj);
this.Hl.L(A.jb.Text);this.H9.H(AIc);this.H9.R(Rj);this.H9.L(A.jb.Text);this.AP.H(
Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.J(this.Mh,0);this.
J(this.Hl,0);this.J(this.H9,0);this.J(this.AP,0);this.J(this.A_,0);this.Hl.S(A.aaL(
A.fl.Af));this.H9.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mh._Done();this.Hl._Done();this.H9._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mh._ReInit(
);this.Hl._ReInit();this.H9._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hl.
S(A.aaL(A.fl.Af));this.H9.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bj:null,VX:null,AhK:null,SV:null
,KM:A.jV,CP:function(){this.An();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LD=
A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LD){var FQ=A._GetAutoObject(
A.acj.DV).Alv(LD,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdJ=A.aaR(A.acf.BgX);AdJ=A._GetAutoObject(
A.Device.Helper).Nj(AdJ,P6,A._GetAutoObject(A.Device.Converter).S3(FQ,2,true));AdJ=
A._GetAutoObject(A.Device.Helper).Nj(AdJ,Ax6,A._GetAutoObject(A.acj.DV).Aax());this.
SV.R(AdJ);this.AhK.L(A._GetAutoObject(A.acj.DV).AzJ(FQ,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SV.L(A._GetAutoObject(A.acj.DV).AzL(FQ,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SV.R(A.aaR(A.acf.AVC));this.AhK.L(A.jb.
AQU);this.SV.L(A.jb.Text);}},CF:function(G){var Fs=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);var Ac6=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac6.Initialize(8,2,0,true);Fs.CW(Ac6);A._GetAutoObject(A.Device.Device).Bt.Bl(
Fs);this.Axr(this);},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null
);},Axr:function(G){this.Bj=A._NewObject(C.F$,0);this.Bj.NZ(C.AHa);this.Bj.H(Ayf
);this.Bj.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bj.Dz(this.KM);this.J(this.
Bj,0);this.Bb(this.Bj);},Ank:function(G){A._GetAutoObject(C.A$).Fu();},Dz:function(
E){if(this.KM===E)return;this.KM=E;if(!!this.Bj)this.Bj.Dz(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADh._Init.call(this.VX={I:this},0);A.acg.AK._Init.
call(this.AhK={I:this},0);A.acg.Text._Init.call(this.SV={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cd);this.N.Z(true);this.Dq(C.IG);this.VX.H(
P7);this.KM=A.aaR(A.acf.Akk);this.AhK.AZ(0x1D);this.AhK.H(IR);this.SV.AZ(0x1D);this.
SV.H(IR);this.SV.A6(0x12);this.SV.R(Rj);this.J(this.VX,0);this.J(this.AhK,0);this.
J(this.SV,0);this.N.CB=[this,this.Ank];this.N.CY(A.aaL(A.ach.E2));this.SV.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.AhK._Done(
);this.SV._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VX._ReInit();this.AhK._ReInit();this.SV._ReInit();this.Dz(A.aaR(A.acf.Akk
));this.SV.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Me={DO:null,Acy:null,ARx:11,Gu:0,A4I:true,ABL:false,IW:function(G){if(A._GetAutoObject(
A.Device.Device).Am.Ca()>0)this.Jv(4);else A._GetAutoObject(A.Device.Device).A9(
30,true,A.jV,0,null);},CF:function(G){if(this.DO.AzU())this.DO.Ac4();else if((this.
Gu===2)&&A._GetAutoObject(A.Device.Helper).W.AqX())this.Jv(5);else this.Jv(1);},
E3:function(G){this.AK7();},Ev:function(G){this.Jv(0);A._GetAutoObject(C.A$).Fu(
);},BBD:function(){A._GetAutoObject(A.Device.Device).AhC();},AK7:function(){A._GetAutoObject(
A.Device.Device).AnW();},A9i:function(E){if(this.ABL===E)return;this.ABL=E;A.abo([
this,this.Bj8,this.A9i],0);},Jv:function(E){var B;if(this.Gu===E)return;this.Gu=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkN();A.zX([this,this.AKw]
,[B=A._GetAutoObject(A.Device.Helper),B.Arw,B.AkD],0);A.z$([this,this.AAl],[B=this.
DO,B.Anr,B.Jv],0);this.BBD();}break;case 3:{A.z$([this,this.AKw],[B=A._GetAutoObject(
A.Device.Helper),B.Arw,B.AkD],0);this.AK7();this.BzB();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asn();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4I)this.BBp();else this.BBs();}break;case 4:{A.z$([this,this.AKw],[B=A._GetAutoObject(
A.Device.Helper),B.Arw,B.AkD],0);this.AK7();A._GetAutoObject(A.Device.Helper).Asn(
);A.zX([this,this.Bez],[B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyH],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARx);}break;case 5:this.BfU();break;case
6:{A.zX([this,this.AAl],[B=this.DO,B.Anr,B.Jv],0);this.DO.Ac4();}break;case 0:{A.
z$([this,this.AKw],[B=A._GetAutoObject(A.Device.Helper),B.Arw,B.AkD],0);this.AK7(
);}break;default:throw new Error(Ayl);}A.abo([this,this.Anr,this.Bv5],0);},Bv5:function(
Aq){this.Jv(Aq);},AKw:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uw){if(
this.Gu===1)this.Jv(3);else A.ab5("%s%e",AYo,this.Gu);}else A.ab5("%s",AId);},BBp:
function(){A._GetAutoObject(A.Device.Device).A9(13,true,A._GetAutoObject(A.Device.
Helper).Ak4(A._GetAutoObject(A.Device.Helper).Uw.Id).toFixed(),0,[this,this.BzP]
);},BzP:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.Bcq(false))A._GetAutoObject(
C.A$).Cg(31);else{A._GetAutoObject(A.Device.Helper).AkN();this.Jv(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkN();this.Jv(1);}},
Bcq:function(AiY){if(A._GetAutoObject(A.Device.Device).Am.Lh()){A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(
A.Device.Helper).Aqh(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.Q2(A._GetAutoObject(A.Device.Helper).Uw.Id);if(!!A._GetAutoObject(A.Device.
Helper).Ahy){var AlI=A._GetAutoObject(A.Device.Helper).Ahy.AOR();A._GetAutoObject(
A.Device.Helper).W.Ab4(AlI);A._GetAutoObject(A.Device.Helper).W.Anz(AlI);}if(A._GetAutoObject(
A.Device.Helper).AQ9(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nd(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SB(A._GetAutoObject(A.Device.Helper).BgL(A._GetAutoObject(A.Device.
Device).Agq,A._GetAutoObject(A.Device.Helper).W));if(AiY){A._GetAutoObject(A.Device.
Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);var L6=A._GetAutoObject(A.Device.
Device).Am.Lc(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SK(L6);if(A._GetAutoObject(A.Device.Helper).Am1()){if(A._GetAutoObject(A.
Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agq)A._GetAutoObject(
A.Device.Helper).A$w();}return true;},BzB:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uw){var AJj=true;if(A._GetAutoObject(A.Device.Helper).Uw.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJj=A._GetAutoObject(A.Device.Helper).A7h(A._GetAutoObject(
A.Device.Helper).Uw.Id);if(!AJj&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bcq(true);AJj=A._GetAutoObject(A.Device.Helper).A7h(A._GetAutoObject(A.
Device.Helper).Uw.Id);}}if(AJj)this.Jv(5);else this.Jv(2);}else{A.ab5("%s",AId);
return;}},Bez:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARx){A.z$([this,this.Bez],[B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyH
],0);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.Jv(5);else this.Jv(1);}},
BfU:function(){if(this.ABL===true)this.Jv(6);else A._GetAutoObject(C.A$).Cg(24);
},BBs:function(){A._GetAutoObject(A.Device.Device).A9(36,true,A.jV,0,[this,this.
BAF]);},BAF:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkN();this.Jv(1);}},AAl:function(G){if(!this.DO.Gu)this.Jv(1);},A2Y:function(G
){},Bwd:function(s){this.A2Y(s);},Bj8:function(){return this.ABL;},Anr:function(
){return this.Gu;},_Init:function(aArg){C.Q8._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acy={I:this},0);this.__proto__=C.Me;this.N.Z(true);this.Dq(C.AqY);this.
Number.H(AYp);this.Number.R(A.aaR(A.acf.A_Z));this.Jc.H(AYq);this.IP.H(AYr);this.
Acy.H(AYs);this.Acy.R(AYt);this.Acy.L(A.jb.Text);this.J(this.Acy,0);this.N.CB=[this
,this.Ev];this.N.Ck=[this,this.Bwd];this.N.CY(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acy.S(A.aaL(A.fl.Hr));this.DO=A._GetAutoObject(C.DO);},_Done:function(
){this.__proto__=C.Q8;this.Acy._Done();C.Q8._Done.call(this);},_ReInit:function(
){C.Q8._ReInit.call(this);this.Acy._ReInit();this.Number.R(A.aaR(A.acf.A_Z));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q8._Mark.call(this,D);if((B=
this.DO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4w={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apb:-1,Gu:0,BxE:function(){var Bfz=false;
var Oh=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else if(Oh){Bfz=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axn(B1,5);B1.OnSetAppearance(3);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axn(B1
,5);B1.OnSetAppearance(1);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).Am);if(Bfz)A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oh)A.
_GetAutoObject(A.Device.Helper).W.AnQ(false);else A._GetAutoObject(A.Device.Helper
).W.AnQ(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A9(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BxG:function(){A._GetAutoObject(
A.Device.Helper).W.AGw(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A9(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qh:function(ED){switch(ED){case 4:this.BxE();break;case
128:A._GetAutoObject(C.A$).Cg(7);break;case 16:A._GetAutoObject(C.A$).Cg(36);break;
case 1:A._GetAutoObject(C.A$).Cg(10);break;case 2:A._GetAutoObject(C.A$).Cg(11);
break;case 8:this.BxG();break;case 64:A._GetAutoObject(C.A$).Cg(29);break;case 32:
A._GetAutoObject(C.A$).Cg(48);break;case 256:A._GetAutoObject(C.A$).Cg(21);break;
case 512:A._GetAutoObject(C.A$).Cg(30);break;case 1024:this.Bzy();break;case 262144:
this.BBT();break;case 2048:this.Ac4();break;case 4096:this.Bci(false);break;case
8192:this.BxF();break;case 16384:this.Bzx();break;case 32768:this.Bx5();break;case
524288:this.Bx6();break;case 65536:this.Byu();break;case 131072:this.BBg();break;
case 0:break;default:throw new Error(AYu);}},Bcs:function(ED,Bw$){var EQ=A._NewObject(
C.Wh,0);EQ.Ab2(false);EQ.Aj(true);EQ.AR=Bw$;EQ.Ble(ED);switch(ED){case 1:{EQ.T(A.
aaR(A.acf.AnY));EQ.DB(A.aaL(A.ach.ALK));}break;case 2:{EQ.T(A.aaR(A.acf.A_I));EQ.
DB(A.aaL(A.ach.ALL));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALM
));EQ.AFs(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asa));EQ.DB(A.aaL(A.ach.ALN));EQ.
AFs(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMj));EQ.DB(A.aaL(A.ach.ALO));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALP));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.ALQ));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.ALR));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DV).By9());}break;case 512:{EQ.T(A.aaR(A.acf.ARW));
EQ.DB(A.aaL(A.ach.ALC));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALD));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALJ));}break;case 2048:{EQ.T(A.aaR(A.acf.Tt));EQ.DB(A.aaL(A.ach.ALE
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALF));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALG));EQ.AFs(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bh1));EQ.DB(A.aaL(A.ach.ALH));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bn_));EQ.DB(A.aaL(A.ach.ALI));}break;default:A.ab5("%s",(AYv+ED.toFixed(
))+AYw);}return EQ;},ByH:function(){this.Apb=this.Apb+1;if(this.Apb>=this.AutoActions.
NP())this.Jv(0);else this.Jv(2);},BA5:function(){this.Apb=-1;},AzU:function(){return(
this.Apb>-1)&&!this.Bzr();},Bzr:function(){return this.Apb>=this.AutoActions.NP(
);},Jv:function(E){if(this.Gu===E)return;this.Gu=E;switch(E){case 1:this.ByH();break;
case 2:{var Aao=this.AutoActions.OC(this.Apb);if(this.A4t(A._GetAutoObject(A.Device.
Helper).W,Aao))this.Qh(Aao);else A._GetAutoObject(A.Device.Device).A9(64,true,(this.
ActionToString.Lt(Aao)+As5)+this.AnimalTypeToString.Lt(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BA5();break;default:throw new
Error(Ayl);}A.abo([this,this.Anr,this.Jv],0);},MT:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bci(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A$).Cg(45);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.AzU())this.
Jv(1);},Bck:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bzy:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cg(
45);else A._GetAutoObject(A.Device.Device).A9(32,true,A.jV,0,[this,this.MT]);},Ac4:
function(){this.Jv(1);},BA3:function(){var Oh=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oh&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device
).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axn(B1,5);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).Am);A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oh)A._GetAutoObject(
A.Device.Helper).W.AnQ(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BA4:function(){A._GetAutoObject(
A.Device.Helper).W.AGw(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bci:function(ByL){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByL===false))A._GetAutoObject(A.Device.
Device).A9(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A$).Cg(54);},BxF:
function(){A._GetAutoObject(A.Device.Helper).W.ArT(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A9(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A9(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bzx:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A$).Cg(81);else A._GetAutoObject(A.
Device.Device).A9(69,true,A.jV,0,[this,this.MT]);},Bx5:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj5(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahj(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae0(false);A._GetAutoObject(A.Device.
Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(A.Device.Device
).A9(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},Byu:function(){A._GetAutoObject(A.Device.Helper).W.Ahj(false);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj5(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahj(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A9(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A9(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4t:function(Et,ED
){var Qr=false;switch(ED){case 32768:Qr=Et.IsRegistrationNoticePending&&!!Et.NaisIdMother;
break;case 524288:Qr=Et.IsRegistrationNoticePending&&!Et.NaisIdMother;break;case
4096:case 8192:switch(Et.AnimalType){case 1:Qr=true;break;default:;}break;case 512:
switch(Et.AnimalType){case 0:Qr=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qr=true;break;default:A.ab5("%s",AYx+
ED.toFixed());}return Qr;},BBg:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cg(80);else A._GetAutoObject(A.Device.Device).A9(
69,true,A.jV,0,[this,this.MT]);},BBT:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A9(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.Q2(0);A._GetAutoObject(A.Device.Helper).W.SB(A._GetAutoObject(A.
Device.Helper).A4K(A._GetAutoObject(A.Device.Device).An3,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);A._GetAutoObject(A.Device.Device).A9(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},Bx6:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae0(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Anr:function(){return this.
Gu;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A4w;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALW={Aa1:null,Aqj:null,Jv:function(E){if(this.Gu===E)return;C.Me.Jv.call(this
,E);switch(E){case 1:this.Dq(C.AqY);break;case 5:case 6:this.Dq(C.IG);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayl);}},A2Y:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa1={I:this},0);C.ALX._Init.call(this.Aqj={I:this
},0);this.__proto__=C.ALW;this.A9i(true);this.Aa1.H(AYy);this.Aa1.R(A.aaR(A.acf.
Tt));this.Aa1.L(A.jb.Text);this.Aqj.H(AYz);this.J(this.Aa1,0);this.J(this.Aqj,0);
this.N.Cs(A.aaL(A.ach.AbC));this.Aa1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Me;this.Aa1._Done();this.Aqj._Done();C.Me._Done.call(this);},_ReInit:function(
){C.Me._ReInit.call(this);this.Aa1._ReInit();this.Aqj._ReInit();this.Aa1.R(A.aaR(
A.acf.Tt));this.Aa1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(
this,D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqj)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H_:null,JX:null,A2Y:function(G){if(this.H_.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Me._Init.call(this,aArg);A.acg.Text._Init.call(this.
JX={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JX.H(AYA);this.JX.KS(
true);this.JX.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABz));this.
JX.L(A.jb.Text);this.J(this.JX,0);this.N.Cs(A.aaL(A.ach.AbC));this.JX.S(A.aaL(A.
fl.Af));this.H_=A._GetAutoObject(C.Ph);},_Done:function(){this.__proto__=C.Me;this.
JX._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.call(this);this.
JX._ReInit();this.JX.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABz
));this.JX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(this,D);if((
B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JX)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALX={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABj],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Aur],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABj],this);
A.pe([this,this.Aur],this);this.H(A.abK(this.M,AYB));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYC)));},Bb_:function(G){var B;var Alw=0;var Azl=0;
var Bco;var X=this.Y.Ah;var Cx=null;Bco=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wh.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYD));Cx.H(A.abM(Cx.M
,(Azl*58)+Bco));Cx.H(A.abO(Cx.M,Alw*58));if(Azl>=3){Alw=Alw+1;Azl=0;}else Azl=Azl+
1;}X=X.Ah;}this.Bb(null);},A1n:function(ED){var EQ=A._GetAutoObject(C.DO).Bcs(ED
,null);this.J(EQ,0);this.Bb_(this);},Ao2:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(
AdH);}},ABj:function(G){this.Ao2();var O;var CD=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CD;O=O+1){var Aao=A._GetAutoObject(C.AutoActions).OC(O);this.A1n(
Aao);}A.pe([this,this.Bb_],this);A.pe([this,this.Aur],this);A.pe([this,this.BB3]
,this);},Aur:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);Aa.AFs(false);
}X=X.Ah;}},BB3:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);var BxV=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A9e(false);for(O=0;O<BxV;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OC(O)){Aa.A9e(true);Aa.Bmm(AYE+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALX;this.Y.JO(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DO={_Init:function(
){C.A4w._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APA={Ll:null,T3:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlH());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ll={I:this},0);C.CH._Init.call(this.T3={I:this},0);this.__proto__=
C.APA;this.Ll.H(AYF);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.T3.H(Aou);this.T3.
R((A.aaR(A.acf.Ahb)+AIe)+A.aaR(A.acf.Ki));this.T3.A6(0x12);this.T3.L(A.jb.Text);
this.J(this.Ll,0);this.J(this.T3,0);this.Ll.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.
fl.Ak));this.T3.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Ll._Done();this.T3._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Ll._ReInit();this.T3._ReInit();this.T3.R((A.aaR(A.acf.
Ahb)+AIe)+A.aaR(A.acf.Ki));this.Ll.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.fl.Ak));this.
T3.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADf={Jt:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jt={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADf;this.Jt.H(AYG
);this.Jt.KS(true);this.Jt.A6(0x14);this.Jt.R(A.aaR(A.acf.AhJ)+AIf);this.Jt.L(A.
jb.Text);this.D0.H(Aou);this.D0.KS(true);this.D0.R(A.aaR(A.acf.AF1));this.D0.L(A.
jb.Text);this.J(this.Jt,0);this.J(this.D0,0);this.Jt.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jt._ReInit(
);this.D0._ReInit();this.Jt.R(A.aaR(A.acf.AhJ)+AIf);this.D0.R(A.aaR(A.acf.AF1));
this.Jt.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TS={I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I6={I:this},0);this.__proto__=C.TS;this.I6.H(AIg);this.I6.R((((A.aaR(A.acf.RK)+Aah
)+AIh)+A.aaR(A.acf.A$K))+O5);this.I6.A6(0x12);this.I6.L(A.jb.Text);this.J(this.I6
,0);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dc;this.I6._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I6._ReInit();this.I6.R((((A.aaR(
A.acf.RK)+Aah)+AIh)+A.aaR(A.acf.A$K))+O5);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.
aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APC={Lm:null,Kp:null,CP:function(){this.A_1();},Init:function(aArg){this.A_1(
);},A_1:function(){this.Lm.R(A._GetAutoObject(A.acj.DV).AfY());this.Kp.R(A._GetAutoObject(
A.acj.DV).Aax());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lm={I:this},0);C.CH._Init.call(this.Kp={I:this},0);this.__proto__=C.APC;
this.Lm.H(AYH);this.Lm.A6(0x12);this.Lm.L(A.jb.Text);this.Kp.H(Aou);this.Kp.L(A.
jb.Text);this.J(this.Lm,0);this.J(this.Kp,0);this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(
A.aaL(A.fl.Af));this.Kp.A2(A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Lm._Done();this.Kp._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Lm._ReInit();
this.Kp._ReInit();this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af));this.Kp.A2(
A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM$={Mh:null,Hl:null,H9:null,AP:null,A_:null,FQ:0,AaD:0,H$:0,AiJ:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiJ){this.H9.R(Rl);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S3(this.FQ,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzL(this.FQ,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzJ(this.FQ,this.H$));}if(this.AaD>0)this.Hl.
R(A._GetAutoObject(A.Device.Converter).Ak8(this.AaD));else this.Hl.R(Rl);this.Hl.
L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=
this.AX.CE(Ad,1);var Aum=this.AX.HF(Ad,24);var AJ5=this.AX.CE(Ad,23);var Aun=this.
AX.HF(Ad,19);this.AaD=this.AX.CE(Ad,18);if((Aum>0)&&(Aum!==Aun)){var LD=A._GetAutoObject(
A.Device.Helper).MN(Aum,Aun);if(!!LD){this.AiJ=false;this.FQ=A._GetAutoObject(A.
acj.DV).Alv(LD,AJ5,this.AaD);}else{this.AiJ=true;this.FQ=0;}}else{this.AiJ=true;
this.FQ=0;}this.T(Md.toFixed());this.H$=this.AX.AmQ(Ad,14);this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AM$;this.V.H(O3);this.Mh.H(As7);this.Hl.H(AIb);this.Hl.A6(0x12);this.Hl.R(Rj);
this.Hl.L(A.jb.Text);this.H9.H(AIc);this.H9.R(Rj);this.H9.L(A.jb.Text);this.AP.H(
Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.J(this.Mh,0);this.
J(this.Hl,0);this.J(this.H9,0);this.J(this.AP,0);this.J(this.A_,0);this.Hl.S(A.aaL(
A.fl.Af));this.H9.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mh._Done();this.Hl._Done();this.H9._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mh._ReInit(
);this.Hl._ReInit();this.H9._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hl.
S(A.aaL(A.fl.Af));this.H9.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M1={Mg:null,AP:null,A_:null,Gv:null,Xm:0,Init:
function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Mg.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mg.M);this.Background.H([].concat(this.Mg.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gv.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gv.M[2]-1,0,this.
Gv.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gv.L(this.V.AQ
);if(!!this.Xm&&(this.Xm!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qj(this.
Xm));this.V.L(A._GetAutoObject(A.acj.Assessment).Xv(this.Xm));}else this.Mg.L(this.
Background.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Md=this.AX.CE(Ad,1);var LQ=this.AX.I2(Ad,13);var AlC=this.AX.I2(Ad,17);var AlL=this.
AX.H1(Ad,11);var Ay5=this.AX.HF(Ad,4);var AfL=A._GetAutoObject(A.Device.Helper).
MN(Ay5,A._GetAutoObject(A.Device.Helper).Dv());this.Xm=A._GetAutoObject(A.Device.
Helper).AMg(LQ,AlL,AlC);this.T(Md.toFixed());if(AfL<100)this.Gv.R((AfL.toFixed()+
CQ)+A.aaR(A.acf.ALV));else this.Gv.R(A._GetAutoObject(A.acj.KK).ACL(Ay5,A._GetAutoObject(
A.Device.Helper).Dv(),AIi));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mg={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gv={I:this
},0);this.__proto__=C.M1;this.Mg.H(As7);this.Background.H(AYI);this.V.H(O3);this.
AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.Gv.H(Aym);this.
J(this.Mg,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gv,0);this.Gv.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done(
);this.AP._Done();this.A_._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gv._ReInit();this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM9={Ajw:null,N8:null,AP:null,A_:null,Jo:null,AKo:0,A2m:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajw.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jo.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jo.De(this.V.AQ);if(this.AKo>0){this.Ajw.L(A._GetAutoObject(A.acj.Assessment
).Qj(this.A2m));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xv(this.A2m));}else{
this.Ajw.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Cf:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){var Iw=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,
1);this.AKo=this.AX.CE(Ad,5);this.A2m=this.AX.I2(Ad,17);this.T(Md.toFixed());if(
this.AKo>0)this.N8.R(A._GetAutoObject(A.Device.Converter).AkZ(this.AKo));else this.
N8.R(Rl);var Xl=A._GetAutoObject(A.Device.Helper).ZQ(6);A._GetAutoObject(A.Device.
Device).SK(Ad);var A0y=A._GetAutoObject(A.Device.Helper).Bip(A._GetAutoObject(A.
Device.Device).Bt,9,Iw,Xl,0);this.Jo.A9w(A0y.Get(3));this.Jo.A9y(A0y.Get(2));this.
Jo.A9x(A0y.Get(1));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jo._Init.call(this.Jo={I:this},0);this.__proto__=C.AM9;this.N8.A6(0x12);this.
N8.R(Rj);this.N8.L(A.jb.Text);this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.
A_.L(A.jb.Bc);this.Jo.H(AYJ);this.J(this.Ajw,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jo,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajw._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jo._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajw._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jo._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jo={Afk:null,
ColoredCounterAttrSet:null,ACb:0,ACc:0,ACa:0,KT:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKf;var ALB;var AKM;var AlT=0;if(this.ACa>0){AKf=this.ACa.toFixed(
);AlT+=AKf.length;}else{AKf=AYK;AlT++;}if(this.ACc>0){ALB=this.ACc.toFixed();AlT+=
ALB.length;}else{ALB=Ayn;AlT++;}if(this.ACb>0){AKM=this.ACb.toFixed();AlT+=AKM.length;
}else{AKM=AH8;AlT++;}if(AlT<=4)this.ColoredCounterAttrSet.Ahh(A.aaL(A.fl.Af));else
if(AlT<=5)this.ColoredCounterAttrSet.Ahh(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahh(A.aaL(A.fl.Bh));this.Afk.R(((((AYL+AKf)+AYM)+ALB)+AYN)+AKM);},A9x:function(E
){if(this.ACb===E)return;this.ACb=E;this.An();},A9y:function(E){if(this.ACc===E)
return;this.ACc=E;this.An();},A9w:function(E){if(this.ACa===E)return;this.ACa=E;
this.An();},De:function(E){if(this.KT===E)return;this.KT=E;this.ColoredCounterAttrSet.
Ahe(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuI._Init.call(
this.Afk={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jo;this.H(AIj);this.Afk.AZ(0x3F);this.Afk.H(AIj);this.
Afk.R(Rj);this.ColoredCounterAttrSet.Blq(A.jb.E1);this.ColoredCounterAttrSet.A9n(
A.jb.H6);this.ColoredCounterAttrSet.A9m(A.jb.Gf);this.ColoredCounterAttrSet.Ahe(
A.jb.Text);this.KT=A.jb.Text;this.J(this.Afk,0);this.Afk.A9h(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahh(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9j(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afk._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afk._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahh(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM8={Atz:null
,Acb:null,Acc:null,Acd:null,Jo:null,AP:null,A_:null,Ea:null,Ls:null,AcA:null,KU:
null,KV:null,AJq:0,AJp:0,AJo:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acb.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcA.H(this.
Acb.M);this.A_.H([this.Acb.M[2]-1,0,this.Acb.M[2]+1,aSize[1]]);this.Acc.H([this.
Acb.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KU.H(this.Acc.M);this.Ea.H([this.
Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.Acc.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KV.H(this.Acd.M);this.Ls.H([this.Acd.M[2]-1,0,this.Acd.
M[2]+1,aSize[1]]);this.Jo.H([this.Acd.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jo.De(this.V.AQ);this.Acb.L(A._GetAutoObject(A.acj.
Assessment).Qj(this.AJo));this.Acc.L(A._GetAutoObject(A.acj.Assessment).Qj(this.
AJp));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qj(this.AJq));this.AcA.L(A._GetAutoObject(
A.acj.Assessment).Xv(this.AJo));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(
this.AJp));this.KV.L(A._GetAutoObject(A.acj.Assessment).Xv(this.AJq));this.AcA.Z(
!this.AJo);this.KU.Z(!this.AJp);this.KV.Z(!this.AJq);this.Jo.A9w(this.Atz.Get(3)
);this.Jo.A9y(this.Atz.Get(2));this.Jo.A9x(this.Atz.Get(1));},Cf:function(Ad){if(
!this.AX)return;this.Hn=Ad;if(!!this.AX){var Iw=this.AX.CE(Ad,0);var Md=this.AX.
CE(Ad,1);this.T(Md.toFixed());A._GetAutoObject(A.Device.Device).SK(Ad);this.AJo=
A._GetAutoObject(A.Device.Helper).A10(A._GetAutoObject(A.Device.Device).Bt,Iw,0);
this.AJp=A._GetAutoObject(A.Device.Helper).A10(A._GetAutoObject(A.Device.Device).
Bt,Iw,-1);this.AJq=A._GetAutoObject(A.Device.Helper).A10(A._GetAutoObject(A.Device.
Device).Bt,Iw,-2);this.Atz=A._GetAutoObject(A.Device.Helper).A6o(A._GetAutoObject(
A.Device.Device).Bt,Iw,0,0);this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Acb={I:this},0);A.acg.AK._Init.call(this.Acc={I:
this},0);A.acg.AK._Init.call(this.Acd={I:this},0);C.Jo._Init.call(this.Jo={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.Ls={I:this
},0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.KU={I:
this},0);A.acg.Text._Init.call(this.KV={I:this},0);this.__proto__=C.AM8;this.AP.
L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ls.L(A.jb.Bc);this.AcA.R(Aov
);this.KU.R(Aov);this.KV.R(Aov);this.J(this.Acb,0);this.J(this.Acc,0);this.J(this.
Acd,0);this.J(this.Jo,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Ls,0);this.J(this.AcA,0);this.J(this.KU,0);this.J(this.KV,0);this.AcA.S(A.
aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.Atz=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acb._Done();this.Acc._Done();this.Acd._Done();this.Jo._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Ls._Done();this.AcA._Done();this.KU.
_Done();this.KV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acb._ReInit();this.Acc._ReInit();this.Acd._ReInit();this.Jo._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AcA.
_ReInit();this.KU._ReInit();this.KV._ReInit();this.AcA.S(A.aaL(A.fl.Af));this.KU.
S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Atz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmT={H4:null,AfZ:false,Bk:function(aSize){var
B;this.H4.H([(aSize[0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H4.M[0]-10,40]);C.TD.Bk.call(this,aSize);},Ai:function(Ae){C.TD.Ai.call(
this,Ae);if(this.AfZ)this.H4.Cv(1);else this.H4.Cv(0);},J_:function(G){if(this.AfZ
)C.TD.J_.call(this,G);},J5:function(G){if(this.AfZ)C.TD.J5.call(this,G);},To:function(
AH){C.TD.To.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.AfZ=true;this.Zx(
true);}else{this.H(A.abI(this.M,40));this.AfZ=false;this.Zx(false);}},_Init:function(
aArg){C.TD._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.AmT;this.V.A6(0x11);this.H4.H(AHE);this.H4.Cv(0);this.J(this.H4,0);this.V.Cu(A.
aaL(A.fl.Bh));this.H4.Aw(A.aaL(A.ach.AqN));},_Done:function(){this.__proto__=C.TD;
this.H4._Done();C.TD._Done.call(this);},_ReInit:function(){C.TD._ReInit.call(this
);this.H4._ReInit();this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TD._Mark.
call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF0={_Init:function(aArg){C.Axe._Init.call(this,aArg);this.__proto__=C.AF0;}
,_className:"Application::OptionsOverlaySeparator"};C.AkG={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axe._Init.call(this,aArg);this.__proto__=C.AkG;},_className:"Application::OptionsOverlayNode"
};C.Zz={AR:null,_Init:function(aArg){C.AkG._Init.call(this,aArg);this.__proto__=
C.Zz;},_Mark:function(D){var B;C.AkG._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANC={Ai:function(Ae){C.OU.Ai.call(this,Ae);var FM=A.jb.CK;var GQ=A.jb.Text;if(
this.Hf){FM=A.jb.Text;GQ=A.jb.Bm;}this.Background.L(FM);this.V.L(GQ);},_Init:function(
aArg){C.OU._Init.call(this,aArg);this.__proto__=C.ANC;},_className:"Application::DarkThemeTextItem"
};C.OU={Background:null,BU:null,V:null,Aqu:0,Hf:false,Init:function(aArg){},Bk:function(
aSize){C.Hc.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hc.Ai.call(this,Ae);this.BU.L(this.Aqu);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bg:function(E){if(this.Hf===E)return;this.Hf=E;this.An();
},ArJ:function(E){if(this.Aqu===E)return;this.Aqu=E;this.An();},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OU;this.H(BF);this.Background.H(AIk);this.BU.H(BF);this.BU.Ng(2);this.BU.L(A.jb.
Re);this.V.H(AYO);this.Aqu=A.jb.Re;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hc._Done.call(this);},_ReInit:function(){C.Hc.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APF={Eq:null,IK:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Eq={
I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=C.APF;this.H(
O2);this.Background.H(O2);this.Eq.H(AIl);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11
);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(Ayo);this.IK.Hh(5);this.IK.A6(
0x14);this.IK.R(A.aaR(A.acf.AGJ));this.IK.L(A.jb.Text);this.J(this.Eq,0);this.J(
this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.IK.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Eq._Done();this.IK._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.IK.R(A.aaR(A.acf.AGJ));this.Eq.S(A.aaL(A.fl.Af));this.IK.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sk:null,Sl:null,Aey:null,AgW:null,QG:null
,KT:0,LastTemperature:0,AqA:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sk.Aw(A.aaL(A.ach.Avy));this.Sl.Aw(A.aaL(A.ach.Avy));}break;case 2:{this.Sk.Aw(A.
aaL(A.ach.AvB));this.Sl.Aw(A.aaL(A.ach.AvB));}break;default:{this.Sk.Aw(A.aaL(A.
ach.Aeu));this.Sl.Aw(A.aaL(A.ach.Aeu));}}this.Sk.L(A._GetAutoObject(A.acj.Assessment
).Qj(this.AqA));var ApN;if(this.IsWatch)ApN=A.aaL(A.ach.AQC);else if(this.IsFever
){ApN=A.aaL(A.ach.AQB);switch(A._GetAutoObject(A.Device.Converter).Ajk(this.LastTemperature
,this.AnimalType)){case 3:this.QG.L(A.jb.Gf);break;case 2:this.QG.L(A.jb.H6);break;
case 1:this.QG.L(A.jb.E1);break;case 0:this.QG.L(A.jb.Afo);break;default:;}}else
if(this.IsAlarm){ApN=A.aaL(A.ach.AQA);if(!this.AqA||(this.AqA===5))this.QG.L(A.jb.
Gf);else this.QG.L(0xFF000000);}else ApN=null;this.Aey.Aw(ApN);this.AgW.Aw(ApN);
this.QG.Aw(ApN);if(A._GetAutoObject(A.acj.Assessment).Qj(this.AqA)===A.jb.E1)this.
Sl.L(this.KT);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
An();},AEW:function(E){if(this.AqA===E)return;this.AqA=E;this.An();},De:function(
E){if(this.KT===E)return;this.KT=E;this.An();},Ae1:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.An();},Ul:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.An();},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.An();},Ae3:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},Hi:function(){this.EB(0);this.AEW(0);this.AeY(false);this.Ul(false
);this.Ae1(false);this.Ae3(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sk={I:this},0);A.acg.Ap._Init.call(
this.Sl={I:this},0);A.acg.Ap._Init.call(this.Aey={I:this},0);A.acg.Ap._Init.call(
this.AgW={I:this},0);A.acg.Ap._Init.call(this.QG={I:this},0);this.__proto__=C.DS;
this.H(Alf);this.Sk.AZ(0x3F);this.Sk.H(Alf);this.Sk.L(A.jb.CK);this.Sk.A6(0x12);
this.Sk.Cv(0);this.Sl.AZ(0x3F);this.Sl.H(Alf);this.Sl.L(0xFF000000);this.Sl.A6(0x12
);this.Sl.Cv(1);this.Aey.AZ(0x3F);this.Aey.H(Alf);this.Aey.L(0xFF000000);this.Aey.
Cv(0);this.AgW.AZ(0x3F);this.AgW.H(Alf);this.AgW.Cv(1);this.QG.AZ(0x3F);this.QG.
H(Alf);this.QG.L(A.jb.CS);this.QG.Cv(2);this.KT=A.jb.Text;this.J(this.Sk,0);this.
J(this.Sl,0);this.J(this.Aey,0);this.J(this.AgW,0);this.J(this.QG,0);this.Sk.Aw(
A.aaL(A.ach.Aeu));this.Sl.Aw(A.aaL(A.ach.Aeu));},_Done:function(){this.__proto__=
A.Core.P;this.Sk._Done();this.Sl._Done();this.Aey._Done();this.AgW._Done();this.
QG._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sk._ReInit();this.Sl._ReInit();this.Aey._ReInit();this.AgW._ReInit();
this.QG._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM5={Cf:function(Ad){C.Ajz.Cf.call(this,Ad);if(!!this.AX){var Bzv=this.AX.H1(
Ad,12);var BxN=this.AX.Sg(Ad,15);this.Abf.R(A._GetAutoObject(A.Device.Helper).MN(
BxN,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sm.Z(Bzv);this.An();
}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=C.AM5;},_className:
"Application::CalfListAlarmItem"};C.ADb={D0:null,Mp:null,_Init:function(aArg){C.
TT._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mp={I:this},0);this.__proto__=C.ADb;this.D0.H(Aou);this.D0.KS(true);this.
D0.R(A.aaR(A.acf.A5A));this.D0.L(A.jb.Text);this.Mp.H(AIm);this.Mp.I7(false);this.
Mp.L(A.jb.Text);this.Mp.A6(0x12);this.J(this.D0,-2);this.J(this.Mp,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mp.Aw(A.aaL(A.ach.ADC));},_Done:function(){this.__proto__=C.
TT;this.D0._Done();this.Mp._Done();C.TT._Done.call(this);},_ReInit:function(){C.
TT._ReInit.call(this);this.D0._ReInit();this.Mp._ReInit();this.D0.R(A.aaR(A.acf.
A5A));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TT._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kh={Background:null,BU:
null,ACD:0,ABR:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACD);this.BU.L(this.ABR);},AwA:function(E){if(this.ACD===E)return;this.ACD=E;this.
An();},AEO:function(E){if(this.ABR===E)return;this.ABR=E;this.An();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kh;this.H(Aow);this.
Background.AZ(0x3C);this.Background.H(Aow);this.Background.Cv(1);this.BU.AZ(0x3C
);this.BU.H(Aow);this.ACD=A.jb.E1;this.ABR=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Aw(A.aaL(A.ach.Kh));this.BU.Aw(A.aaL(A.ach.Kh));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmB={Q:null,Pm:
null,A64:false,Bk:function(aSize){C.Ml.Bk.call(this,aSize);this.V.H([].concat(this.
Pm.M[2]-this.V.Text.I_,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ml.Ai.call(this
,Ae);this.Pm.L(this.V.AQ);},AwF:function(E){if(this.A64===E)return;this.A64=E;if(
E)this.Pm.R(AYP);else this.Pm.R(AIn);},Kc:function(G){var F;if(!!this.Q)this.AwF((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kc],E,0);if(!!E)
A.pe([this,this.Kc],this);},_Init:function(aArg){C.Ml._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pm={I:this},0);this.__proto__=C.AmB;this.Pm.AZ(0x34);this.Pm.
H(UR);this.Pm.R(AIn);this.J(this.Pm,0);this.Pm.S(A.aaL(A.fl.AOy));},_Done:function(
){this.__proto__=C.Ml;this.Pm._Done();C.Ml._Done.call(this);},_ReInit:function(){
C.Ml._ReInit.call(this);this.Pm._ReInit();},_Mark:function(D){var B;C.Ml._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOX={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdV(4));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AOX;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dn:function(){return 3;},C4:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APG={Gj:null,Ll:null,YR:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlH());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gj={I:this},0);A.acg.Text._Init.call(this.Ll={I:this},0);A.
acg.Text._Init.call(this.YR={I:this},0);this.__proto__=C.APG;this.Background.L(A.
jb.Text);this.Gj.H(AIo);this.Gj.A6(0x11);this.Gj.R(A.aaR(A.acf.Date));this.Gj.L(
A.jb.Bm);this.Ll.H(AYQ);this.Ll.A6(0x12);this.Ll.L(A.jb.Bm);this.YR.H(AYR);this.
YR.A6(0x12);this.YR.R(A.aaR(A.acf.Bs));this.YR.L(A.jb.Bm);this.J(this.Gj,0);this.
J(this.Ll,0);this.J(this.YR,0);this.Gj.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af
));this.YR.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gj._Done();this.Ll._Done();this.YR._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gj._ReInit();this.Ll._ReInit();this.YR._ReInit(
);this.Gj.R(A.aaR(A.acf.Date));this.YR.R(A.aaR(A.acf.Bs));this.Gj.S(A.aaL(A.fl.Af
));this.Ll.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tx={Lf:null,AjP:false,Init:function(
aArg){var B;A.zX([this,this.Bbc],[B=A._GetAutoObject(A.Device.Device),B.AEn,B.AIH
],0);this.AGC(this);A.pe([this,this.AyI],this);},DE:function(G){var D5=(A.Core.BM.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ol(this);break;case 7:this.MU(
this);break;default:D5.NH=true;}},CF:function(G){var B;if(!!this.Lf)this.Lf.CF(this
);C.AB.CF.call(this,G);},E3:function(G){var B;if(!!this.Lf)this.Lf.E3(this);C.AB.
E3.call(this,G);},Ank:function(G){A._GetAutoObject(C.A$).Fu();},AGC:function(G){
var B;if(!!this.Lf){this.Lf.E3(this);this.HN(this.Lf);}if(this.AjP)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMn,0);break;case 1:this.Lf=A.
_NewObject(C.AMo,0);break;case 3:this.Lf=A._NewObject(C.AMm,0);break;case 2:this.
Lf=A._NewObject(C.AMp,0);break;default:throw new Error(AIp);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMq,0);break;case 1:this.Lf=A.
_NewObject(C.AMz,0);break;case 3:this.Lf=A._NewObject(C.AMt,0);break;case 2:this.
Lf=A._NewObject(C.AME,0);break;default:throw new Error(AIp);}this.HO(this);this.
J(this.Lf,0);this.Lf.H(E$);this.Lf.Zu([this,this.A0k]);this.Lf.CF(this);this.Bb(
this.Lf);},Bbc:function(s){this.AGC(s);},Bnj:function(G){A._GetAutoObject(A.Device.
Device).AeS(0);},ATG:function(G){A._GetAutoObject(A.Device.Device).AeS(1);},ATF:
function(G){A._GetAutoObject(A.Device.Device).AeS(3);},ATH:function(G){A._GetAutoObject(
A.Device.Device).AeS(2);},HO:function(G){this.N.CY(A.aaL(A.ach.E2));this.N.Hu(A.
jV);this.N.CB=[this,this.Ank];this.N.AE3(A.aaL(A.fl.Ak));},AyI:function(s){this.
HO(s);},Bl7:function(E){if(this.AjP===E)return;this.AjP=E;A.pe([this,this.Bbc],this
);},A_u:function(G){this.Bl7(!this.AjP);},Bnm:function(G){A._GetAutoObject(A.Device.
Device).A9(31,true,A.jV,0,null);},MU:function(G){},BF3:function(s){this.MU(s);},
Ol:function(G){},BF2:function(s){this.Ol(s);},Bew:function(G){var FK=A._GetAutoObject(
A.Device.Device).D9;FK=FK+1;if(FK>=4)FK=0;A._GetAutoObject(A.Device.Device).AeS(
FK);},BAm:function(G){var FK=A._GetAutoObject(A.Device.Device).D9;FK=FK-1;if(FK<
0)FK=3;A._GetAutoObject(A.Device.Device).AeS(FK);},Af4:function(G){},A0k:function(
s){this.Af4(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tx;this.Background.H(Cd);this.N.Z(true);this.N.ON(true);this.N.OO(true);this.Dq(
C.APv);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dl:null,CF:function(G){},AIG:function(s){this.CF(s);
},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null);},Ayy:function(s){
this.E3(s);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dl.BN=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=
C.D9;this.H(UU);this.AttrSet.A9n(A.jb.Gf);this.AttrSet.A9m(A.jb.H6);this.AttrSet.
Ahe(A.jb.Text);this.Dl.Filter=1;this.AttrSet.Ahh(A.aaL(A.fl.Ak));this.AttrSet.A9j(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dl._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dl._ReInit();this.AttrSet.Ahh(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMq={RO:
null,AaW:null,Tw:null,Tv:null,RS:null,Qx:null,RT:null,RQ:null,RR:null,RP:null,CP:
function(){var B;this.RO.Cf(this);this.AaW.Cf(this);this.Tw.Cf(this);this.Tv.Cf(
this);this.RS.Cf(this);this.Qx.Cf(this);this.RT.Cf(this);this.RQ.Cf(this);this.RR.
Cf(this);this.RP.Cf(this);},GE:function(G){C.RU.GE.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RO.Z(true);this.AaW.Z(false);
this.RQ.Z(false);this.RR.Z(false);this.RP.Z(false);this.RS.Z(true);this.Qx.Z(true
);this.RT.Z(true);}break;case 1:{this.RO.Z(false);this.AaW.Z(true);this.RQ.Z(true
);this.RR.Z(true);this.RP.Z(true);this.RS.Z(false);this.Qx.Z(false);this.RT.Z(false
);}break;default:A.ab5("%s%e",Alb,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RU._Init.call(this,aArg);C.
RO._Init.call(this.RO={I:this},0);C.AMl._Init.call(this.AaW={I:this},0);C.Tw._Init.
call(this.Tw={I:this},0);C.Tv._Init.call(this.Tv={I:this},0);C.RS._Init.call(this.
RS={I:this},0);C.Qx._Init.call(this.Qx={I:this},0);C.RT._Init.call(this.RT={I:this
},0);C.RQ._Init.call(this.RQ={I:this},0);C.RR._Init.call(this.RR={I:this},0);C.RP.
_Init.call(this.RP={I:this},0);this.__proto__=C.AMq;this.RO.H(BF);this.RO.Aj(true
);this.RO.Bg(false);this.AaW.H(IR);this.AaW.Aj(true);this.AaW.Bg(false);this.Tw.
H(P7);this.Tw.Aj(true);this.Tw.Bg(true);this.Tv.H(Aaf);this.Tv.Aj(true);this.Tv.
Bg(false);this.RS.H(Ald);this.RS.Aj(true);this.RS.Bg(true);this.Qx.H(Aoq);this.Qx.
Aj(true);this.Qx.Bg(false);this.RT.H(As1);this.RT.Aj(true);this.RT.Bg(true);this.
RQ.H(Xc);this.RQ.Aj(true);this.RQ.Bg(true);this.RR.H(AYS);this.RR.Aj(true);this.
RR.Bg(false);this.RP.H(AYT);this.RP.Aj(true);this.RP.Bg(true);this.J(this.RO,0);
this.J(this.AaW,0);this.J(this.Tw,0);this.J(this.Tv,0);this.J(this.RS,0);this.J(
this.Qx,0);this.J(this.RT,0);this.J(this.RQ,0);this.J(this.RR,0);this.J(this.RP,
0);},_Done:function(){this.__proto__=C.RU;this.RO._Done();this.AaW._Done();this.
Tw._Done();this.Tv._Done();this.RS._Done();this.Qx._Done();this.RT._Done();this.
RQ._Done();this.RR._Done();this.RP._Done();C.RU._Done.call(this);},_ReInit:function(
){C.RU._ReInit.call(this);this.RO._ReInit();this.AaW._ReInit();this.Tw._ReInit();
this.Tv._ReInit();this.RS._ReInit();this.Qx._ReInit();this.RT._ReInit();this.RQ.
_ReInit();this.RR._ReInit();this.RP._ReInit();this.CP();},_Mark:function(D){var B;
C.RU._Mark.call(this,D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AME={AkR:function(L1){if(!L1)return;var Fs=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);var Ac6=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac6.Initialize(8,2,0,true);Fs.CW(Ac6);L1.Bl(Fs);
},ADP:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pe=A.
_GetAutoObject(A.Device.Device).Bt.Ca();if(Pe<2)return false;var BBN=A._GetAutoObject(
A.Device.Device).Bt.HF(0,6);var BBO=A._GetAutoObject(A.Device.Device).Bt.HF(Pe-1
,6);var A1Q=A._NewObject(A.Core.Bs,0);A1Q.Initialize(BBN);var A3R=A._NewObject(A.
Core.Bs,0);A3R.Initialize(BBO);if((A1Q.Ab0()!==A3R.Ab0())||(A1Q.Year!==A3R.Year)
)return true;else return false;},_Init:function(aArg){C.AaY._Init.call(this,aArg
);this.__proto__=C.AME;this.AS$(C.AHa);this.ATa(C.ADh);this.AS1(C.Qx);this.ArP(A.
aaR(A.acf.AVC));this.Dz(A.aaR(A.acf.Akk));},_ReInit:function(){C.AaY._ReInit.call(
this);this.ArP(A.aaR(A.acf.AVC));this.Dz(A.aaR(A.acf.Akk));},_className:"Application::AnimalWeights"
};C.AMz={AkR:function(L1){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);var AA8=A._NewObject(A.Device.Int32FilterCriterion
,0);AA8.Initialize(7,2,0,true);Fs.CW(AA8);L1.Bl(Fs);},ADP:function(){return A._GetAutoObject(
A.Device.Device).Bt.Ca()>0;},_Init:function(aArg){C.AaY._Init.call(this,aArg);this.
__proto__=C.AMz;this.AS$(C.AUZ);this.ATa(C.APG);this.AS1(C.Tw);this.ArP(A.aaR(A.
acf.A7p));this.Dz(A.aaR(A.acf.Arr));},_ReInit:function(){C.AaY._ReInit.call(this
);this.ArP(A.aaR(A.acf.A7p));this.Dz(A.aaR(A.acf.Arr));},_className:"Application::AnimalTemperatures"
};C.AT6={Vy:null,Vz:null,XY:null,Agy:null,Kx:null,AP:null,A_:null,Ea:null,Ls:null
,AnP:null,KU:null,KV:null,ZN:null,ZO:null,Init:function(aArg){},Bk:function(aSize
){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vy.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
Vy.M[2]-1,0,this.Vy.M[2]+1,aSize[1]]);this.Vz.H([this.Vy.M[2],0,this.Vy.M[2]+22,
aSize[1]]);this.Ls.H([this.Vz.M[2]-1,0,this.Vz.M[2]+1,aSize[1]]);this.XY.H([this.
Vz.M[2],0,this.Vz.M[2]+22,aSize[1]]);this.AnP.H([this.XY.M[2]-1,0,this.XY.M[2]+1
,aSize[1]]);this.Agy.H([this.XY.M[2],0,aSize[0],aSize[1]]);this.KU.H(this.Vy.M);
this.KV.H(this.Vz.M);this.ZN.H(this.XY.M);this.ZO.H(this.Agy.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kx.L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var Aly=this.AX.HF(Ad,6);var A07=this.AX.I2(Ad,3);var A1M=
this.AX.I2(Ad,2);var A1L=this.AX.I2(Ad,5);var A3F=this.AX.I2(Ad,4);this.T(A._GetAutoObject(
A.acj.KK).ACK(Aly));this.Kx.R(A._GetAutoObject(A.acj.KK).A6i(Aly));this.Vy.L(A._GetAutoObject(
A.acj.Assessment).Qj(A07));this.Vz.L(A._GetAutoObject(A.acj.Assessment).Qj(A1M));
this.XY.L(A._GetAutoObject(A.acj.Assessment).Qj(A1L));this.Agy.L(A._GetAutoObject(
A.acj.Assessment).Qj(A3F));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(A07));
this.KV.L(A._GetAutoObject(A.acj.Assessment).Xv(A1M));this.ZN.L(A._GetAutoObject(
A.acj.Assessment).Xv(A1L));this.ZO.L(A._GetAutoObject(A.acj.Assessment).Xv(A3F));
this.KU.Z(A07===5);this.KV.Z(A1M===5);this.ZN.Z(A1L===5);this.ZO.Z(A3F===5);this.
An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.
Vy={I:this},0);A.acg.AK._Init.call(this.Vz={I:this},0);A.acg.AK._Init.call(this.
XY={I:this},0);A.acg.AK._Init.call(this.Agy={I:this},0);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Ls={I:this},0);A.acg.AK._Init.call(this.AnP={I:this},0);A.acg.Text._Init.call(this.
KU={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.
ZN={I:this},0);A.acg.Text._Init.call(this.ZO={I:this},0);this.__proto__=C.AT6;this.
V.H(O3);this.Vy.H(AYU);this.Vz.H(AYV);this.XY.H(AYW);this.Agy.H(AYX);this.Kx.R(Rj
);this.Kx.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.AnP.L(A.jb.Bc);this.KU.H(AYY);this.KU.R(Rl);this.KV.H(AYZ
);this.KV.R(Rl);this.ZN.H(AY0);this.ZN.R(Rl);this.ZO.H(AY1);this.ZO.R(Rl);this.J(
this.Vy,0);this.J(this.Vz,0);this.J(this.XY,0);this.J(this.Agy,0);this.J(this.Kx
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ls,0);this.
J(this.AnP,0);this.J(this.KU,0);this.J(this.KV,0);this.J(this.ZN,0);this.J(this.
ZO,0);this.Kx.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af
));this.ZN.S(A.aaL(A.fl.Af));this.ZO.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vy._Done();this.Vz._Done();this.XY._Done();this.Agy._Done(
);this.Kx._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ls._Done(
);this.AnP._Done();this.KU._Done();this.KV._Done();this.ZN._Done();this.ZO._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vy._ReInit(
);this.Vz._ReInit();this.XY._ReInit();this.Agy._ReInit();this.Kx._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AnP._ReInit(
);this.KU._ReInit();this.KV._ReInit();this.ZN._ReInit();this.ZO._ReInit();this.Kx.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.ZN.S(
A.aaL(A.fl.Af));this.ZO.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APE={Gj:null,YX:null,YT:null,YU:null,YV:null,YW:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gj={I:this},0);A.acg.Text._Init.call(this.YX={I:this},0);A.acg.Text._Init.call(this.
YT={I:this},0);A.acg.Text._Init.call(this.YU={I:this},0);A.acg.Text._Init.call(this.
YV={I:this},0);A.acg.Text._Init.call(this.YW={I:this},0);this.__proto__=C.APE;this.
Background.L(A.jb.Text);this.Gj.H(AIo);this.Gj.A6(0x11);this.Gj.R(A.aaR(A.acf.Date
));this.Gj.L(A.jb.Bm);this.YX.H(AIg);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.Bs));
this.YX.L(A.jb.Bm);this.YT.H(AY2);this.YT.A6(0x12);this.YT.R(A.aaR(A.acf.AT8));this.
YT.L(A.jb.Bm);this.YU.H(AY3);this.YU.A6(0x12);this.YU.R(A.aaR(A.acf.AT9));this.YU.
L(A.jb.Bm);this.YV.H(AY4);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AOu));this.YV.L(
A.jb.Bm);this.YW.H(Aox);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.ANt));this.YW.L(A.
jb.Bm);this.J(this.Gj,0);this.J(this.YX,0);this.J(this.YT,0);this.J(this.YU,0);this.
J(this.YV,0);this.J(this.YW,0);this.Gj.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af
));this.YT.S(A.aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));
this.YW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gj._Done();
this.YX._Done();this.YT._Done();this.YU._Done();this.YV._Done();this.YW._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gj._ReInit(
);this.YX._ReInit();this.YT._ReInit();this.YU._ReInit();this.YV._ReInit();this.YW.
_ReInit();this.Gj.R(A.aaR(A.acf.Date));this.YX.R(A.aaR(A.acf.Bs));this.YT.R(A.aaR(
A.acf.AT8));this.YU.R(A.aaR(A.acf.AT9));this.YV.R(A.aaR(A.acf.AOu));this.YW.R(A.
aaR(A.acf.ANt));this.Gj.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YT.S(A.
aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMt={AkR:function(L1){if(!L1)return;
var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);var
AAQ=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAQ.Initialize(3,5,0,true
);Fs.CW(AAQ);L1.Bl(Fs);},ADP:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.Ca()>0;},_Init:function(
aArg){C.AaY._Init.call(this,aArg);this.__proto__=C.AMt;this.AS$(C.AT6);this.ATa(
C.APE);this.AS1(C.Tv);this.ArP(A.aaR(A.acf.Axj));this.Dz(A.aaR(A.acf.Anj));},_ReInit:
function(){C.AaY._ReInit.call(this);this.ArP(A.aaR(A.acf.Axj));this.Dz(A.aaR(A.acf.
Anj));},_className:"Application::AnimalRatings"};C.IC={B6:null,Y:null,V:null,Uq:
5,T:function(E){C.IZ.T.call(this,E);this.V.R(E);},De:function(E){C.IZ.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuM:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0]))this.S(A.aaL(A.fl.Ii));},Kq:function(
E){if(this.Uq===E)return;this.Uq=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAK:function(G){A.pe([this,this.AuM],this);},_Init:function(aArg){C.IZ._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IC;this.Y.AZ(0x3F);this.Y.H(AIq);this.Y.A_c(5);this.
Y.JO(3);this.V.AZ(0x34);this.V.H(Aai);this.V.I7(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAK];this.V.S(A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IZ;this.Y._Done(
);this.V._Done();C.IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));},_Mark:function(D){
var B;C.IZ._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RO={AfL:0,Ai:function(Ae){C.Ft.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RK));if(this.AfL>=0)this.Ks((this.AfL.toFixed(
)+CQ)+A.aaR(A.acf.Ki));else this.Ks(A.aaR(A.acf.Unknown));},Cf:function(G){C.Ft.
Cf.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfL=-1;
else this.AfL=A._GetAutoObject(A.Device.Helper).W.RK();this.An();},_Init:function(
aArg){C.Ft._Init.call(this,aArg);this.__proto__=C.RO;},_className:"Application::AnimalInfoItemAge"
};C.RS={A4j:0,Ai:function(Ae){C.Ft.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afp));if(
this.A4j>0)this.Ks((A._GetAutoObject(A.Device.Converter).Ak8(this.A4j)+CQ)+A._GetAutoObject(
A.acj.DV).AfY());else this.Ks(A.aaR(A.acf.Unknown));},Cf:function(G){C.Ft.Cf.call(
this,G);this.A4j=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.An();},
_Init:function(aArg){C.Ft._Init.call(this,aArg);this.__proto__=C.RS;},_className:
"Application::AnimalInfoItemWeight"};C.Tw={Y:null,Eh:null,Ex:null,E_:null,PR:null
,E9:null,PT:null,Ajf:0,Pd:0,CP:function(){this.An();},Ai:function(Ae){C.JG.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bhy));this.E_.R(this.Ajf.toFixed());this.E9.R(this.Pd.
toFixed());if(!!this.Ajf||!!this.Pd)this.PT.R(AY5+(this.Ajf+this.Pd).toFixed());
else this.PT.R(A.aaR(A.acf.AR7));},Cf:function(G){C.JG.Cf.call(this,G);var AkY;AkY=
A._GetAutoObject(A.Device.Helper).Biq(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajf=AkY.Get(2);this.Pd=AkY.Get(1);this.An();},De:
function(E){C.JG.De.call(this,E);this.PR.L(E);this.PT.L(E);},AsL:function(G){if(
!!this.Ajf||!!this.Pd){this.E_.Z(true);this.PR.Z(true);this.E9.Z(true);}else{this.
E_.Z(false);this.PR.Z(false);this.E9.Z(false);}this.Eh.H(this.E_.M);this.Eh.Z(this.
E_.Fk());this.Ex.H(this.E9.M);this.Ex.Z(this.E9.Fk());},AuM:function(G){var B;var
Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;if(((B=Ny.Db(0x1))[2]-B[0])>((
B=Ny.M)[2]-B[0])){this.E9.S(A.aaL(A.fl.Ak));this.PR.S(A.aaL(A.fl.Ak));this.E_.S(
A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));}},AAK:function(G){A.pe([this,this.AuM
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.E_={I:this},0);A.acg.Text._Init.call(this.
PR={I:this},0);A.acg.Text._Init.call(this.E9={I:this},0);A.acg.Text._Init.call(this.
PT={I:this},0);this.__proto__=C.Tw;this.Y.H(Ayp);this.Y.Bm4(0);this.Y.JO(3);this.
Eh.H(AY6);this.Eh.L(A.jb.H6);this.Ex.H(Aym);this.Ex.L(A.jb.Gf);this.E_.AZ(0x34);
this.E_.H(Aai);this.E_.Hh(2);this.E_.I7(true);this.E_.R(UW);this.E_.L(A.jb.Text);
this.E_.Aj(true);this.PR.AZ(0x34);this.PR.H(Aai);this.PR.I7(true);this.PR.R(AH9);
this.PR.L(A.jb.Text);this.PR.Aj(true);this.E9.AZ(0x34);this.E9.H(Aai);this.E9.Hh(
2);this.E9.I7(true);this.E9.R(UW);this.E9.L(A.jb.Bm);this.E9.Aj(true);this.PT.AZ(
0x34);this.PT.H(Aai);this.PT.I7(true);this.PT.R(Rj);this.PT.L(A.jb.Text);this.PT.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.E_,0);
this.J(this.PR,0);this.J(this.E9,0);this.J(this.PT,0);this.Y.El=[this,this.AAK];
this.E_.Q1([this,this.AsL]);this.E_.S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));
this.E9.Q1([this,this.AsL]);this.E9.S(A.aaL(A.fl.Af));this.PT.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JG;this.Y._Done();this.Eh._Done();this.Ex._Done(
);this.E_._Done();this.PR._Done();this.E9._Done();this.PT._Done();C.JG._Done.call(
this);},_ReInit:function(){C.JG._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ex._ReInit();this.E_._ReInit();this.PR._ReInit();this.E9._ReInit();this.PT.
_ReInit();this.E_.S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.E9.S(A.aaL(A.
fl.Af));this.PT.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JG._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qx={FQ:0,H$:0
,A2c:false,Ai:function(Ae){C.Ft.Ai.call(this,Ae);this.T(AY7+A.aaR(A.acf.AG7));if(
this.A2c){this.Ks((A._GetAutoObject(A.Device.Converter).S3(this.FQ,2,true)+CQ)+A.
_GetAutoObject(A.acj.DV).Aax());this.Background.L(A._GetAutoObject(A.acj.DV).AzJ(
this.FQ,this.H$));this.De(A._GetAutoObject(A.acj.DV).AzL(this.FQ,this.H$));}else{
this.Ks(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.De(A.jb.Text);}},Cf:
function(G){C.Ft.Cf.call(this,G);var LD=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LD){this.A2c=true;this.FQ=A._GetAutoObject(A.acj.DV).Alv(LD,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2c=false;this.FQ=0;}this.H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.An();},_Init:function(aArg){C.Ft._Init.call(this,aArg);this.__proto__=C.Qx;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tv={Y:null,FT:null,Eh:
null,Ex:null,ME:null,E_:null,E9:null,OW:null,Aaz:0,Ajf:0,Pd:0,CP:function(){this.
An();},Ai:function(Ae){C.JG.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axj));this.ME.R(
this.Aaz.toFixed());this.E_.R(this.Ajf.toFixed());this.E9.R(this.Pd.toFixed());}
,Cf:function(G){C.JG.Cf.call(this,G);var AkY;AkY=A._GetAutoObject(A.Device.Helper
).A6o(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aaz=AkY.Get(3);this.Ajf=AkY.Get(2);this.Pd=AkY.Get(1);this.An();},AsL:
function(G){if((!!this.Aaz||!!this.Ajf)||!!this.Pd){this.ME.Z(true);this.E_.Z(true
);this.E9.Z(true);this.OW.Z(false);}else{this.ME.Z(false);this.E_.Z(false);this.
E9.Z(false);this.OW.Z(true);}this.FT.H(this.ME.M);this.FT.Z(this.ME.Fk());this.Eh.
H(this.E_.M);this.Eh.Z(this.E_.Fk());this.Ex.H(this.E9.M);this.Ex.Z(this.E9.Fk()
);},AuM:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0])){this.E9.S(A.aaL(A.fl.Ak));this.E_.
S(A.aaL(A.fl.Ak));this.ME.S(A.aaL(A.fl.Ak));}},AAK:function(G){A.pe([this,this.AuM
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FT={I:this},0);A.acg.AK._Init.call(this.Eh={
I:this},0);A.acg.AK._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.E_={I:this},0);A.acg.Text._Init.call(this.
E9={I:this},0);A.acg.Text._Init.call(this.OW={I:this},0);this.__proto__=C.Tv;this.
Y.AZ(0x3F);this.Y.H(Ayp);this.Y.A_c(5);this.Y.JO(3);this.FT.H(AY8);this.FT.L(A.jb.
E1);this.Eh.H(AY9);this.Eh.L(A.jb.H6);this.Ex.H(AIr);this.Ex.L(A.jb.Gf);this.ME.
AZ(0x3C);this.ME.H(Aai);this.ME.Hh(2);this.ME.I7(true);this.ME.R(UW);this.ME.L(A.
jb.Text);this.ME.Aj(true);this.E_.AZ(0x3C);this.E_.H(Aai);this.E_.Hh(2);this.E_.
I7(true);this.E_.R(UW);this.E_.L(A.jb.Text);this.E_.Aj(true);this.E9.AZ(0x3C);this.
E9.H(Aai);this.E9.Hh(2);this.E9.I7(true);this.E9.R(UW);this.E9.L(A.jb.Bm);this.E9.
Aj(true);this.OW.AZ(0x34);this.OW.H(Aai);this.OW.I7(true);this.OW.A6(0x11);this.
OW.R(A.aaR(A.acf.AR7));this.OW.L(A.jb.Text);this.OW.Aj(true);this.OW.Z(false);this.
J(this.Y,0);this.J(this.FT,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.ME
,0);this.J(this.E_,0);this.J(this.E9,0);this.J(this.OW,0);this.Y.El=[this,this.AAK
];this.ME.Q1([this,this.AsL]);this.ME.S(A.aaL(A.fl.Af));this.E_.Q1([this,this.AsL
]);this.E_.S(A.aaL(A.fl.Af));this.E9.Q1([this,this.AsL]);this.E9.S(A.aaL(A.fl.Af
));this.OW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JG;this.Y._Done(
);this.FT._Done();this.Eh._Done();this.Ex._Done();this.ME._Done();this.E_._Done(
);this.E9._Done();this.OW._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG.
_ReInit.call(this);this.Y._ReInit();this.FT._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.ME._ReInit();this.E_._ReInit();this.E9._ReInit();this.OW._ReInit(
);this.OW.R(A.aaR(A.acf.AR7));this.ME.S(A.aaL(A.fl.Af));this.E_.S(A.aaL(A.fl.Af)
);this.E9.S(A.aaL(A.fl.Af));this.OW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JG._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMb={_Init:function(aArg){C.Aqe._Init.call(
this,aArg);this.__proto__=C.AMb;this.A4u=1;this.Rg.Cu(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqe._ReInit.call(this);this.Rg.Cu(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQV={OH:null,IL:null,H3:null,IJ:null,GL:null,AlX:function(G){A.pe([this,this.
BzU],this);},BzU:function(G){A._GetAutoObject(C.A$).Cg(3);},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.OH._Init.call(this.OH={I:this},0);C.BW._Init.call(this.
IL={I:this},0);C.SM._Init.call(this.H3={I:this},0);C.AGz._Init.call(this.IJ={I:this
},0);C.Q9._Init.call(this.GL={I:this},0);this.__proto__=C.AQV;var B;this.I8(A.aaR(
A.acf.A$c));this.IL.H(AhV);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Language));this.
IL.A9W(100);this.H3.H(UV);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.
Bg(true);this.IJ.H(Aag);this.IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.GL.H(AhU
);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF6));this.GL.Bg(true);
this.GL.Ar0(false);this.GL.A94(true);this.JU(this.Y,-1);this.JU(this.Ay,-1);this.
J(this.IL,0);this.J(this.H3,0);this.J(this.IJ,0);this.J(this.GL,0);this.IL.Wy(A.
aaL(A.fl.Hr));this.IL.Wz(A.aaL(A.fl.Hr));this.IL.As([B=this.OH,B.B7,B.B8]);this.
IL.CI(this.OH);this.H3.AeR([B=this.H3,B.FP]);this.H3.Gn([this,this.D_,this.GN]);
this.H3.Aky(A.aaL(A.ach.Edit));this.H3.Ab7([B=A._GetAutoObject(A.Device.Helper),
B.UX,B.U0]);this.IJ.AeR([B=this.IJ,B.FP]);this.IJ.Gn([this,this.D_,this.GN]);this.
IJ.Aky(A.aaL(A.ach.Edit));this.IJ.Ab7([B=A._GetAutoObject(A.Device.Helper),B.UX,
B.U0]);this.GL.AeR([B=this.GL,B.FP]);this.GL.Gn([this,this.D_,this.GN]);this.GL.
Aky(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ6
]);},_Done:function(){this.__proto__=C.Ce;this.OH._Done();this.IL._Done();this.H3.
_Done();this.IJ._Done();this.GL._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.OH._ReInit();this.IL._ReInit();this.H3._ReInit();
this.IJ._ReInit();this.GL._ReInit();this.I8(A.aaR(A.acf.A$c));this.IL.T(A.aaR(A.
acf.Language));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));this.GL.T(
A.aaR(A.acf.AF6));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaY={Bj:null,Fx:null,AmV:null,AmE:null,R$:null,A6J:A.jV,KM:A.jV,ARn:null,ARo:
null,ADa:null,CF:function(G){var B;C.D9.CF.call(this,G);A.zX([this,this.A2K],[B=
A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);this.A2K(this);},E3:function(
G){var B;A.z$([this,this.A2K],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Zu:function(E){C.D9.Zu.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bj)this.Bj.Zu(E);},AS$:function(E){if(this.ARn===E)return;this.
ARn=E;if(!!this.Bj)this.Bj.NZ(E);},ATa:function(E){if(this.ARo===E)return;this.ARo=
E;this.Bov(this);},AS1:function(E){if(this.ADa===E)return;this.ADa=E;A.pe([this,
this.Bou],this);},ArP:function(E){if(this.A6J===E)return;this.A6J=E;this.R$.R(E);
},Dz:function(E){if(this.KM===E)return;this.KM=E;if(!!this.Bj)this.Bj.Dz(E);},AkR:
function(L1){A.ab5("%s",As8);},ADP:function(){A.ab5("%s",Alc);return false;},Axr:
function(G){if(!!this.Bj)this.HN(this.Bj);this.Bj=A._NewObject(C.F$,0);this.Bj.H(
As9);this.Bj.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bj.Dz(this.KM);this.Bj.
NZ(this.ARn);this.Bj.Zu(this.AR);this.J(this.Bj,0);this.Bb(this.Bj);},Bov:function(
G){var B;if(!!this.Fx)this.HN(this.Fx);this.Fx=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARo,0))?B:null);this.Fx.H(IR);this.J(this.Fx,0);},Bou:function(G){var B;if(
!!this.AmV)this.HN(this.AmV);if(!!this.ADa&&this.ADP()){this.AmV=(C.IZ.isPrototypeOf(
B=A._NewObject(this.ADa,0))?B:null);this.AmV.H(BF);this.AmV.Bg(false);this.J(this.
AmV,0);this.R$.Z(false);}else this.R$.Z(true);},A2K:function(G){this.AkR(A._GetAutoObject(
A.Device.Device).Bt);this.Axr(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmE={I:this},0);C.CH._Init.call(this.R$={I:this},
0);this.__proto__=C.AaY;this.AmE.H(BF);this.AmE.L(A.jb.CK);this.R$.H(AHD);this.R$.
A6(0x11);this.R$.L(A.jb.Text);this.J(this.AmE,0);this.J(this.R$,0);this.R$.S(A.aaL(
A.fl.Kl));this.R$.A2(A.aaL(A.fl.Ii));},_Done:function(){this.__proto__=C.D9;this.
AmE._Done();this.R$._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmE._ReInit();this.R$._ReInit();this.R$.S(A.aaL(A.fl.Kl));this.R$.
A2(A.aaL(A.fl.Ii));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmE)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kg={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bb7],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AII],0);A.pe([this,this.Bb7],this
);},Dn:function(){return 5;},FX:function(aIndex){return this.AnimalListContentToString.
BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Zq(E);},Bb7:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kg;this.Cc.Set(0,0);this.Cc.Set(1,14);this.Cc.Set(2,
1);this.Cc.Set(3,2);this.Cc.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARs={IL:null
,Y9:null,Zh:null,Ze:null,Zi:null,Y_:null,Zc:null,Zf:null,Zg:null,Zb:null,OH:null
,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.BW._Init.call(this.IL={I:this
},0);C.Nb._Init.call(this.Y9={I:this},0);C.Nb._Init.call(this.Zh={I:this},0);C.Nb.
_Init.call(this.Ze={I:this},0);C.Nb._Init.call(this.Zi={I:this},0);C.Nb._Init.call(
this.Y_={I:this},0);C.Nb._Init.call(this.Zc={I:this},0);C.Nb._Init.call(this.Zf={
I:this},0);C.Nb._Init.call(this.Zg={I:this},0);C.Nb._Init.call(this.Zb={I:this},
0);C.OH._Init.call(this.OH={I:this},0);this.__proto__=C.ARs;var B;this.I8(A.aaR(
A.acf.Settings));this.IL.H(AhV);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Language)
);this.IL.A9W(100);this.Y9.H(As_);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.ACm));this.
Y9.Ne(16);this.Zh.H(As$);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.AG2));this.Zh.Ne(
22);this.Ze.H(Ata);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.Temperature));this.Ze.
Ne(17);this.Zi.H(Ayq);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.ACi));this.Zi.Ne(42
);this.Y_.H(Aoy);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.Device));this.Y_.Ne(18);
this.Zc.H(Aoy);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.Asj));this.Zc.Ne(19);this.
Zf.H(AY_);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.LinkTransponder));this.Zf.Ne(89
);this.Zg.H(AY$);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.UnlinkTransponder));this.
Zg.Ne(95);this.Zb.H(Ayh);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.ACB));this.Zb.Ne(
76);this.J(this.IL,0);this.J(this.Y9,0);this.J(this.Zh,0);this.J(this.Ze,0);this.
J(this.Zi,0);this.J(this.Y_,0);this.J(this.Zc,0);this.J(this.Zf,0);this.J(this.Zg
,0);this.J(this.Zb,0);this.IL.Wy(A.aaL(A.fl.Hr));this.IL.Wz(A.aaL(A.fl.Hr));this.
IL.As([B=this.OH,B.B7,B.B8]);this.IL.CI(this.OH);this.Y9.AR=[B=this.Y9,B.Nh];this.
Zh.AR=[B=this.Zh,B.Nh];this.Ze.AR=[B=this.Ze,B.Nh];this.Zi.AR=[B=this.Zi,B.Nh];this.
Y_.AR=[B=this.Y_,B.Nh];this.Zc.AR=[B=this.Zc,B.Nh];this.Zf.AR=[B=this.Zf,B.Nh];this.
Zg.AR=[B=this.Zg,B.Nh];this.Zb.AR=[B=this.Zb,B.Nh];},_Done:function(){this.__proto__=
C.Ce;this.IL._Done();this.Y9._Done();this.Zh._Done();this.Ze._Done();this.Zi._Done(
);this.Y_._Done();this.Zc._Done();this.Zf._Done();this.Zg._Done();this.Zb._Done(
);this.OH._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.IL._ReInit();this.Y9._ReInit();this.Zh._ReInit();this.Ze._ReInit();this.Zi.
_ReInit();this.Y_._ReInit();this.Zc._ReInit();this.Zf._ReInit();this.Zg._ReInit(
);this.Zb._ReInit();this.OH._ReInit();this.I8(A.aaR(A.acf.Settings));this.IL.T(A.
aaR(A.acf.Language));this.Y9.T(A.aaR(A.acf.ACm));this.Zh.T(A.aaR(A.acf.AG2));this.
Ze.T(A.aaR(A.acf.Temperature));this.Zi.T(A.aaR(A.acf.ACi));this.Y_.T(A.aaR(A.acf.
Device));this.Zc.T(A.aaR(A.acf.Asj));this.Zf.T(A.aaR(A.acf.LinkTransponder));this.
Zg.T(A.aaR(A.acf.UnlinkTransponder));this.Zb.T(A.aaR(A.acf.ACB));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMo={EU:null,Init:function(aArg){this.EU.Ahl(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgP)));},AUb:function(
){this.EU.AeV(this.AOS());this.AaB=!this.EU.EZ.AY;},AiU:function(G){this.EU.Ahl(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgP)));this.AUb();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dz(A.aaR(A.acf.A7P));else this.Dz(A.aaR(A.acf.Arr));this.An();},AOS:function(
){var BC=A._NewObject(C.Aqs,0);var Qg=A._GetAutoObject(A.Device.Helper).AN_(A._GetAutoObject(
A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqo(Qg-(86400*this.
Mt));BC.Anw(AZa);BC.QZ([].concat(0,BC.Gg.slice(1,4)));BC.QZ(A.abN(BC.Gg,(Qg-Dw)|
0));BC.QZ(A.abP(BC.Gg,3400));BC.QZ([].concat(BC.Gg.slice(0,3),4200));var Gd=A._GetAutoObject(
A.Device.Device).Bt.Ca();BC.AwK(Gd);BC.Yg();if(Gd>0){var O=0;while(O<Gd){var ApV=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var ApW=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6)-Dw;if(ApV>0)BC.Aqf(ApW,ApV);O=O+1;}}return BC;},_Init:function(aArg
){C.K_._Init.call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);this.__proto__=
C.AMo;this.EU.H(AZb);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE6(C.AGN);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.EU._Done(
);C.K_._Done.call(this);},_ReInit:function(){C.K_._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMp={Z4:null,OZ:null,AgJ:null,AaB:false,Init:function(aArg){this.Z4.Ahl(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgP)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgJ.Z(this.AaB);},CF:function(
G){var B;C.D9.CF.call(this,G);A.zX([this,this.AiU],[B=A._GetAutoObject(A.Device.
Helper),B.UX,B.U0],0);A.zV([this,this.AiU],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0
);A.pe([this,this.Al$],this);},E3:function(G){var B;A.z$([this,this.AiU],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AiU],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Al$:function(G){var Fs=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Fs
);},AiU:function(G){this.Z4.Ahl(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgP)));this.BnS();this.An();},BnS:function(
){var B;var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();var K8=A._NewObject(C.Aqs
,0);var Vl=A._NewObject(C.Aqs,0);var Qg=A._GetAutoObject(A.Device.Helper).AN_(A.
_GetAutoObject(A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqo(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K8.QZ([].concat(0,K8.Gg.slice(1
,4)));K8.QZ(A.abN(K8.Gg,(Qg-Dw)|0));K8.QZ(A.abP(K8.Gg,0));K8.QZ([].concat(K8.Gg.
slice(0,3),150000));K8.Anw(AZc);Vl.QZ([].concat(0,Vl.Gg.slice(1,4)));Vl.QZ(A.abN(
Vl.Gg,(Qg-Dw)|0));Vl.QZ(A.abP(Vl.Gg,0));Vl.QZ([].concat(Vl.Gg.slice(0,3),1500));
Vl.Anw(AZd);K8.AwK(Gd);K8.Yg();Vl.AwK(Gd);Vl.Yg();if(Gd>0){var O=0;var AaD=0;var
Az_=0;var AJ5=0;var A1R=0;var BcK=true;while(O<Gd){var Al6=A._GetAutoObject(A.Device.
Device).Bt.CE(O,8);var AaP=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-Dw;if(Al6>
0){K8.Aqf(AaP,Al6);if(!A1R){A1R=AaP;AJ5=Al6;}if(Az_>0){var LD=A._GetAutoObject(A.
Device.Helper).MN(Az_,AaP);if(!!LD){var FQ=A._GetAutoObject(A.acj.DV).Alv(LD,AaD
,Al6);if(BcK){Vl.Aqf(Az_,FQ);BcK=false;}Vl.Aqf(AaP,FQ);}}AaD=Al6;Az_=AaP;}O=O+1;
}var AdJ=A.aaR(A.acf.Bgz);var FQ=A._GetAutoObject(A.Device.Helper).Bis(A1R,Az_,AJ5
,AaD);AdJ=A._GetAutoObject(A.Device.Helper).Nj(AdJ,P6,FQ.toFixed());AdJ=A._GetAutoObject(
A.Device.Helper).Nj(AdJ,Ax6,A._GetAutoObject(A.acj.DV).Aax());this.OZ.Ih.R(AdJ);
}this.AaB=!K8.AY;if(this.AaB)this.OZ.Ih.R(A.jV);(C.OZ.isPrototypeOf(B=this.OZ.EU
)?B:null).Ans([B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EB]);this.Z4.AeV(K8);
this.OZ.AeV(Vl);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqW._Init.call(
this.Z4={I:this},0);C.AqW._Init.call(this.OZ={I:this},0);C.AkP._Init.call(this.AgJ={
I:this},0);this.__proto__=C.AMp;this.Z4.H(AZe);this.Z4.T(A.aaR(A.acf.Afp));this.
Z4.AE6(C.AMW);this.OZ.H(AZf);this.OZ.T(A.aaR(A.acf.AG7));this.OZ.AE6(C.OZ);this.
AgJ.H(UU);this.AgJ.R(A.aaR(A.acf.Akk));this.J(this.Z4,0);this.J(this.OZ,0);this.
J(this.AgJ,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z4._Done(
);this.OZ._Done();this.AgJ._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z4._ReInit();this.OZ._ReInit();this.AgJ._ReInit();this.
Z4.T(A.aaR(A.acf.Afp));this.OZ.T(A.aaR(A.acf.AG7));this.AgJ.R(A.aaR(A.acf.Akk));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMm={
Au$:null,Au_:null,Axl:null,AuG:null,Vx:null,Abn:null,Abm:null,Ack:null,Afc:null,
Init:function(aArg){this.Vx.Ahl(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgP)));},A4b:function(G){this.Vx.Ab8(this.
AuG);this.Abn.Ab8(this.Au$);this.Abm.Ab8(this.Au_);this.Ack.Ab8(this.Axl);},Axk:
function(){var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AuG=A._NewObject(
C.Ajr,0);this.Au$=A._NewObject(C.Ajr,0);this.Au_=A._NewObject(C.Ajr,0);this.Axl=
A._NewObject(C.Ajr,0);if(Gd>0){var O=Gd-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.HF(O,6);this.Atq(this.AuG,O,3,D8);this.Atq(this.Au$,O,2,D8);this.
Atq(this.Au_,O,5,D8);this.Atq(this.Axl,O,4,D8);O=O-1;}}this.AaB=!(((this.AuG.AY+
this.Au_.AY)+this.Au$.AY)+this.Axl.AY);A.pe([this,this.A4b],this);},Atq:function(
A0Q,Ad,A0P,Qa){var Alr=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0P);if(!!Alr)
A0Q.Or(Alr,Qa);},Ab6:function(E){if(this.Mt===E)return;C.K_.Ab6.call(this,E);if(
!!this.Vx)this.Vx.Ab6(E);if(!!this.Abn)this.Abn.Ab6(E);if(!!this.Abm)this.Abm.Ab6(
E);if(!!this.Ack)this.Ack.Ab6(E);this.Afc.Ab6(E);},AiU:function(G){this.Vx.Ahl(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgP)));this.Axk();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dz(A.aaR(A.acf.BjQ));else this.Dz(A.aaR(A.acf.Anj));this.An();},_Init:function(
aArg){C.K_._Init.call(this,aArg);C.Ahr._Init.call(this.Vx={I:this},0);C.Ahr._Init.
call(this.Abn={I:this},0);C.Ahr._Init.call(this.Abm={I:this},0);C.Ahr._Init.call(
this.Ack={I:this},0);C.AT_._Init.call(this.Afc={I:this},0);this.__proto__=C.AMm;
this.Dz(A.aaR(A.acf.Anj));this.Vx.H(AZg);this.Vx.R(A.aaR(A.acf.AF$));this.Abn.H(
AZh);this.Abn.R(A.aaR(A.acf.Feed));this.Abm.H(AZi);this.Abm.R(A.aaR(A.acf.AGb));
this.Ack.H(AIs);this.Ack.R(A.aaR(A.acf.AGc));this.Afc.H(AZj);this.J(this.Vx,-1);
this.J(this.Abn,-1);this.J(this.Abm,-1);this.J(this.Ack,-1);this.J(this.Afc,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.Vx._Done();this.Abn.
_Done();this.Abm._Done();this.Ack._Done();this.Afc._Done();C.K_._Done.call(this);
},_ReInit:function(){C.K_._ReInit.call(this);this.Vx._ReInit();this.Abn._ReInit(
);this.Abm._ReInit();this.Ack._ReInit();this.Afc._ReInit();this.Dz(A.aaR(A.acf.Anj
));this.Vx.R(A.aaR(A.acf.AF$));this.Abn.R(A.aaR(A.acf.Feed));this.Abm.R(A.aaR(A.
acf.AGb));this.Ack.R(A.aaR(A.acf.AGc));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.Au$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMn={EU:null,WE:null,Aef:null,A2a:false,Init:function(aArg){this.WE.Ahl(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgP)));},Bk:function(aSize){C.K_.Bk.call(this,aSize);this.Aef.H(this.EU.M);},Ai:
function(Ae){C.K_.Ai.call(this,Ae);var BBq=!this.AaB&&this.A2a;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aef.R(A.aaR(A.acf.A7P));else this.
Aef.R(A.aaR(A.acf.Arr));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dz(A.aaR(
A.acf.BjR));else this.Dz(A.aaR(A.acf.BjS));this.Aef.Z(BBq);},AiU:function(G){this.
WE.Ahl(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.AgP)));this.AaB=true;this.A2a=true;this.Axk();this.AUb();this.
An();},AUb:function(){this.EU.AeV(this.AOS());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.AaB=false;this.A2a=false;}},AOS:function(){var BC=A._NewObject(C.Aqs,0);var
Qg=A._GetAutoObject(A.Device.Helper).AN_(A._GetAutoObject(A.Device.Helper).Dv());
var Dw=A._GetAutoObject(A.Device.Helper).Aqo(Qg-(86400*this.Mt));BC.Anw(AIt);BC.
QZ([].concat(0,BC.Gg.slice(1,4)));BC.QZ(A.abN(BC.Gg,(Qg-Dw)|0));BC.QZ(A.abP(BC.Gg
,3400));BC.QZ([].concat(BC.Gg.slice(0,3),4200));var Gd=A._GetAutoObject(A.Device.
Device).Bt.Ca();BC.AwK(Gd);BC.Yg();if(Gd>0){var O=0;while(O<Gd){var ApV=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var ApW=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-
Dw;if(ApV>0)BC.Aqf(ApW,ApV);O=O+1;}}return BC;},BiH:function(){var Gd=A._GetAutoObject(
A.Device.Device).Bt.Ca();if(Gd>0){var Bfr=A._NewObject(C.Ajr,0);var O=Gd-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.EM(O,A._GetAutoObject(A.Device.Device
).Bt);var LQ=A._GetAutoObject(A.Device.Helper).AC0(D3);if(!!LQ)Bfr.Or(LQ,D3.Timestamp
);O=O-1;}return Bfr;}else return null;},Axk:function(){this.WE.Ab8(this.BiH());if(
!!this.WE.N2&&(this.WE.N2.AY>0))this.AaB=false;},_Init:function(aArg){C.K_._Init.
call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);C.Ahr._Init.call(this.WE={I:
this},0);C.AkP._Init.call(this.Aef={I:this},0);this.__proto__=C.AMn;this.EU.H(As9
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE6(C.AGN);this.WE.H(AZk);this.WE.
R(A.aaR(A.acf.Rating));this.Aef.H(As9);this.J(this.EU,-2);this.J(this.WE,-2);this.
J(this.Aef,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.EU._Done(
);this.WE._Done();this.Aef._Done();C.K_._Done.call(this);},_ReInit:function(){C.
K_._ReInit.call(this);this.EU._ReInit();this.WE._ReInit();this.Aef._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WE.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K_._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WJ={Q:null,Gs:null,Gt:null
,QH:null,AM:0,Gl:0,FZ:100,FB:0,Init:function(aArg){},IW:function(G){this.FB=1;C.
Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.QH.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QH.Z(this.Gl!==
this.FZ);this.QH.L(this.V.AQ);if((this.FB===4)||(this.FB===5))this.QH.L(A.jb.E1);
},AlZ:function(G){this.FB=5;this.An();if(this.Bo.Bw){A.pe([this,this.AyJ],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qm:function(G){if(this.FB===5)A.pe([this,this.
AyJ],this);if(this.FB===4)A.pe([this,this.AyK],this);if(this.FB===1)A.pe(this.AR
,this);this.FB=0;this.An();},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,
F[1].call(F[0])));},AcS:function(s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcS],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcS],E,0);if(!!E)A.pe([this,this.AcS],this);},Al0:function(G){this.FB=4;this.
An();if(this.Bo.Bw){A.pe([this,this.AyK],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J_:function(G){this.FB=0;},AyK:function(s){this.J_(s);},J5:function(G){this.
FB=0;},AyJ:function(s){this.J5(s);},By:function(E){if(E<this.Gl)E=this.Gl;if(E>this.
FZ)E=this.FZ;if(this.AM===E)return;this.AM=E;this.An();},F0:function(E){if(this.
Gl===E)return;this.Gl=E;this.An();},EV:function(E){if(this.FZ===E)return;this.FZ=
E;this.An();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BM._Init.call(
this.Gs={I:this},0);A.Core.BM._Init.call(this.Gt={I:this},0);A.acg.Ap._Init.call(
this.QH={I:this},0);this.__proto__=C.WJ;this.H(JZ);this.Gs.Filter=5;this.Gt.Filter=
4;this.Background.H(JZ);this.V.H(Aae);this.V.R(Lv);this.QH.H(Ayr);this.J(this.QH
,0);this.Gs.BN=[this,this.AlZ];this.Gs.D1=[this,this.AlZ];this.Gt.BN=[this,this.
Al0];this.Gt.D1=[this,this.Al0];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cu(null);this.QH.Aw(A.aaL(A.ach.AMK));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gs._Done();this.Gt._Done();this.QH._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gs._ReInit();this.Gt.
_ReInit();this.QH._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUy={AC:null,CM:null,HK:
null,Bk:function(aSize){C.WJ.Bk.call(this,aSize);this.CM.H([this.QH.M[2],this.QH.
M[1],this.M[2],this.QH.M[3]]);},Ai:function(Ae){C.WJ.Ai.call(this,Ae);this.CM.AbG(
0,this.CM.AY-1);if(this.Gl!==this.FZ)this.QH.Z(true);},Init:function(aArg){},C2:
function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.Q,F[1].call(
F[0]))));},J_:function(G){var F;var BQ=this.AM;C.WJ.J_.call(this,G);this.By(this.
AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(
this.AM)));A.abo(this.Q,0);}},J5:function(G){var F;var BQ=this.AM;C.WJ.J5.call(this
,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){var Qs=0;if(this.Gl
!==this.FZ){if(E<this.Gl){E=this.FZ;Qs=-this.CM.GK*this.CM.AY;}if(E>this.FZ){E=this.
Gl;Qs=this.CM.GK;}}C.WJ.By.call(this,E);if(!!Qs)this.CM.F_(Qs);this.CM.G2(this.AM
);this.CM.HD(this.CM.Go,true,this.HK,null);},Hg:function(G){var B;var Gc=this.CM.
G0;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));else Cz.
R(Xa);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GK]));},CI:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.F0(0);this.EV(this.AC.Dn()-1);this.CM.
Ju(this.AC.Dn());this.CM.AbG(0,this.CM.AY-1);}},_Init:function(aArg){C.WJ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gh._Init.call(this.
HK={I:this},0);this.__proto__=C.AUy;this.H(JZ);this.QH.H(AIu);this.CM.Ae2(40);this.
CM.NZ(C.CH);this.HK.WC(23);this.HK.HM(1);this.HK.Fl(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hg=[this,this.Hg];this.Init(
aArg);},_Done:function(){this.__proto__=C.WJ;this.CM._Done();this.HK._Done();C.WJ.
_Done.call(this);},_ReInit:function(){C.WJ._ReInit.call(this);this.CM._ReInit();
this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WJ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RT={ALv:0
,Ai:function(Ae){C.Ft.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG7));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Ks((A._GetAutoObject(A.Device.Converter).Ak8(this.ALv
)+CQ)+A._GetAutoObject(A.acj.DV).AfY());else this.Ks(A.aaR(A.acf.Unknown));},Cf:
function(G){C.Ft.Cf.call(this,G);this.ALv=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.An();},_Init:function(aArg
){C.Ft._Init.call(this,aArg);this.__proto__=C.RT;},_className:"Application::AnimalInfoItemWeightGain"
};C.APv={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(
A.Device.Device),B.AEn,B.AIH],0);},DY:function(G){C.IG.DY.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgO(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APv;this.Bc.DC(
Ays);this.Bc.DL(Ayt);this.Bc.L(A.jb.Bc);this.Dd.H(AZl);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjU));this.Init(aArg);},_Done:
function(){this.__proto__=C.IG;this.Bc._Done();this.Dd._Done();C.IG._Done.call(this
);},_ReInit:function(){C.IG._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANw={ZL:null,Ky:null,Mi:null,Timer:null,AB$:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZL.R(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Bqa),P6,this.AB$.
toFixed()));},CF:function(G){this.Timer.Ar(true);},E3:function(G){this.Timer.Ar(
false);},BAC:function(G){if(this.AB$>1){this.AB$=this.AB$-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axs();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZL={I:this},0);A.acg.Text.
_Init.call(this.Ky={I:this},0);A.acg.Ap._Init.call(this.Mi={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANw;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZL.H(AZm);this.ZL.KS(true);this.ZL.R(A.jV);this.ZL.L(A.jb.
Text);this.Ky.H(AZn);this.Ky.KS(true);this.Ky.R(A.aaR(A.acf.A44));this.Ky.L(A.jb.
Text);this.Mi.H(AIv);this.J(this.ZL,0);this.J(this.Ky,0);this.J(this.Mi,0);this.
ZL.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Mi.Aw(A.aaL(A.ach.ABG));this.
Timer.Mx=[this,this.BAC];},_Done:function(){this.__proto__=C.AB;this.ZL._Done();
this.Ky._Done();this.Mi._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZL._ReInit();this.Ky._ReInit();this.Mi._ReInit(
);this.Timer._ReInit();this.Ky.R(A.aaR(A.acf.A44));this.ZL.S(A.aaL(A.fl.Af));this.
Ky.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANd={Ky:null,Amv:null
,Qz:null,CP:function(){this.An();},Ai:function(Ae){C.Ad6.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa4<=10)this.Ky.R(A.aaR(A.acf.Bg1));else this.Ky.R(A.aaR(A.acf.
A45));},_Init:function(aArg){C.Ad6._Init.call(this,aArg);A.acg.Text._Init.call(this.
Ky={I:this},0);A.acg.Ap._Init.call(this.Amv={I:this},0);C.CH._Init.call(this.Qz={
I:this},0);this.__proto__=C.ANd;this.SN.H(AZo);this.Mi.H(AZp);this.Ky.H(AZq);this.
Ky.KS(true);this.Ky.L(A.jb.Text);this.Amv.H(AIv);this.Qz.H(AZr);this.Qz.Z(true);
this.Qz.R(A.aaR(A.acf.AT$));this.Qz.L(A.jb.Text);this.J(this.Ky,0);this.J(this.Amv
,0);this.J(this.Qz,0);this.Ky.S(A.aaL(A.fl.Af));this.Amv.Aw(A.aaL(A.ach.ABG));this.
Qz.S(A.aaL(A.fl.Af));this.Qz.A2(A.aaL(A.fl.Ak));this.Qz.Cu(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad6;this.Ky._Done();this.Amv._Done();this.Qz._Done();
C.Ad6._Done.call(this);},_ReInit:function(){C.Ad6._ReInit.call(this);this.Ky._ReInit(
);this.Amv._ReInit();this.Qz._ReInit();this.Qz.R(A.aaR(A.acf.AT$));this.Ky.S(A.aaL(
A.fl.Af));this.Qz.S(A.aaL(A.fl.Af));this.Qz.A2(A.aaL(A.fl.Ak));this.Qz.Cu(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad6._Mark.call(this,D);if((B=this.
Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amv)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL$={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AL$;this.
RN.Ar(false);this.RN.Aj(false);this.RN.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVy={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVy;this.
S2.Ar(false);this.S2.Aj(false);this.S2.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOZ={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(5));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.AOZ;},_className:"Application::HeaderControlListFilter"};C.APx={DY:function(G){
C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdV(6));},_Init:
function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APx;},_className:"Application::HeaderWatchListFilter"
};C.APB={D0:null,M6:null,_Init:function(aArg){C.TT._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M6={I:this},0);this.__proto__=
C.APB;this.D0.H(Aou);this.D0.R(A.aaR(A.acf.A5B));this.D0.L(A.jb.Text);this.M6.H(
AZs);this.M6.L(A.jb.Text);this.M6.A6(0x12);this.J(this.D0,-2);this.J(this.M6,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));this.M6.Aw(A.aaL(A.ach.ADt)
);},_Done:function(){this.__proto__=C.TT;this.D0._Done();this.M6._Done();C.TT._Done.
call(this);},_ReInit:function(){C.TT._ReInit.call(this);this.D0._ReInit();this.M6.
_ReInit();this.D0.R(A.aaR(A.acf.A5B));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TT._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM_={Cf:function(Ad){C.Ajz.Cf.call(this,Ad);if(
!!this.AX){var Oh=this.AX.H1(Ad,8);var BCb=this.AX.Sg(Ad,21);this.Abf.R(A._GetAutoObject(
A.Device.Helper).MN(BCb,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sm.Z(Oh);this.An();}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=
C.AM_;},_className:"Application::CalfListWatchItem"};C.TT={AgZ:null,Ag1:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgZ={I:this},
0);A.acg.Ap._Init.call(this.Ag1={I:this},0);this.__proto__=C.TT;this.AgZ.H(AZt);
this.AgZ.L(A.jb.Text);this.AgZ.A6(0x12);this.Ag1.H(AZu);this.Ag1.L(A.jb.Text);this.
Ag1.A6(0x12);this.JU(this.DS,-1);this.J(this.AgZ,0);this.J(this.Ag1,0);this.AgZ.
Aw(A.aaL(A.ach.AmX));this.Ag1.Aw(A.aaL(A.ach.AbD));},_Done:function(){this.__proto__=
C.Dc;this.AgZ._Done();this.Ag1._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.AgZ._ReInit();this.Ag1._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.AgZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqs={Gg:A.wg,OD:A.wf,QZ:function(E){if(A.aaY(this.Gg,E))return;this.Gg=E;},Anw:
function(E){if(A.aaX(this.OD,E))return;this.OD=E;},_Init:function(aArg){A.acv.AB_.
_Init.call(this,aArg);this.__proto__=C.Aqs;},_className:"Application::BoundCoordList"
};C.Ajz={TZ:null,Wq:null,T0:null,Wr:null,Sm:null,Zj:null,Abf:null,AP:null,A_:null
,Ea:null,Ls:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TZ.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wq.H(this.TZ.M);this.A_.H([this.TZ.
M[2]-1,0,this.TZ.M[2]+1,aSize[1]]);this.T0.H([this.TZ.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wr.H(this.T0.M);this.Ea.H([this.T0.M[2]-1,0,this.T0.M[2]+1,aSize[
1]]);this.Sm.H([this.T0.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zj.H(this.Sm.
M);this.Ls.H([this.Sm.M[2]-1,0,this.Sm.M[2]+1,aSize[1]]);this.Abf.H([this.Sm.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K7=this.V.AQ;
this.TZ.AEO(K7);this.Wq.L(K7);this.T0.AEO(K7);this.Wr.L(K7);this.Sm.AEO(K7);this.
Zj.L(K7);this.Abf.L(K7);this.Zj.Z(!this.Sm.Fk());},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;var Md=this.AX.CE(Ad,1);var H$=this.AX.AmQ(Ad,14);var Aui=this.AX.CE(
Ad,5);var LQ=this.AX.I2(Ad,13);this.T(Md.toFixed());if(!!LQ){this.TZ.Z(true);this.
TZ.AwA(A._GetAutoObject(A.acj.Assessment).BcS(LQ));this.Wq.Z(false);}else{this.TZ.
Z(false);this.Wq.Z(true);}if(Aui>0){this.T0.Z(true);this.T0.AwA(A._GetAutoObject(
A.acj.Assessment).BcS(A._GetAutoObject(A.Device.Converter).AsE(H$,Aui)));this.Wr.
Z(false);}else{this.T0.Z(false);this.Wr.Z(true);}this.An();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kh._Init.call(this.TZ={I:this},0);A.acg.Text._Init.
call(this.Wq={I:this},0);C.Kh._Init.call(this.T0={I:this},0);A.acg.Text._Init.call(
this.Wr={I:this},0);C.Kh._Init.call(this.Sm={I:this},0);A.acg.Text._Init.call(this.
Zj={I:this},0);A.acg.Text._Init.call(this.Abf={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Ls={I:this},0);this.__proto__=C.Ajz;this.
Wq.H(AZv);this.Wq.R(Aov);this.Wr.H(Aow);this.Wr.R(Aov);this.Sm.AwA(A.jb.Re);this.
Zj.H(Aow);this.Zj.R(Rl);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.J(this.TZ,0);this.J(this.Wq,0);this.J(this.T0,0);this.J(
this.Wr,0);this.J(this.Sm,0);this.J(this.Zj,0);this.J(this.Abf,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ls,0);this.Wq.S(A.aaL(A.fl.Af
));this.Wr.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(A.fl.Af));this.Abf.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TZ._Done();this.Wq.
_Done();this.T0._Done();this.Wr._Done();this.Sm._Done();this.Zj._Done();this.Abf.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ls._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TZ._ReInit();this.Wq.
_ReInit();this.T0._ReInit();this.Wr._ReInit();this.Sm._ReInit();this.Zj._ReInit(
);this.Abf._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Ls._ReInit();this.Wq.S(A.aaL(A.fl.Af));this.Wr.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(
A.fl.Af));this.Abf.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pq:null,Anb:null
,EZ:null,DR:null,Ark:0,Arl:0,A68:0,AmH:0,AqF:0,Init:function(aArg){this.ASW(6);this.
ASX(8);this.AS8(A.jb.AV);this.AS9(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Blv([this.DR.Aba[0],(B=this.DR.M)[3]-B[1]]);this.WF(this);},ASV:function(
E){if(this.Pq===E)return;this.Pq=E;this.DR.ASV(E);},AS9:function(E){if(this.Arl===
E)return;this.Arl=E;this.DR.AS9(E);},AS8:function(E){if(this.Ark===E)return;this.
Ark=E;this.DR.AS8(E);this.DR.BlB(E);},WF:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.Anw([((this.EZ.OD[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gg[2]-this.EZ.Gg[0]))|0,this.DR.OD[1]]);this.DR.Anw([this.DR.OD[0]
,((this.EZ.OD[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gg[3]-this.EZ.Gg[1]))|0]);var O;
var Dg=this.DR.OD[1];var D8;var A4m=this.EZ.Gg[1];var BjP=(((B=this.DR.M)[3]-B[1
])/this.DR.OD[1])|0;for(O=0;O<BjP;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Anb.Ascent+this.Anb.Descent))+2,((B=this.M)[2]-
B[0])-this.Arl,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A68);D8.S(this.Anb);D8.
A6(0x24);if(O>0)D8.R(this.AJG(A4m));else D8.R(this.AKe());A4m=A4m+this.EZ.OD[1];
this.J(D8,0);}},BFR:function(s){this.WF(s);},Bmr:function(E){if(this.Anb===E)return;
this.Anb=E;this.An();},Azh:function(A0w){var B;if(!this.EZ||(this.EZ.Gg[3]===this.
EZ.Gg[1]))return 0;return(((A0w-this.EZ.Gg[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gg[
3]-this.EZ.Gg[1]))|0;},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeV(null);else{var BC=A._NewObject(A.acv.AB_,0);BC.AwK(this.EZ.AD5);BC.Yg();var
Jw=E.AlF;while(!!Jw){BC.Aqf(this.Bye(Jw.PY),this.Byf(Jw.PZ));Jw=Jw.Ah;}this.DR.AeV(
BC);this.An();}},Bye:function(Bwr){var B;if(!this.EZ||(this.EZ.Gg[2]===this.EZ.Gg[
0]))return 0;return((Bwr-this.EZ.Gg[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gg[2]-this.
EZ.Gg[0]);},Byf:function(A0w){var B;if(!this.EZ||(this.EZ.Gg[3]===this.EZ.Gg[1])
)return 0;return((A0w-this.EZ.Gg[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gg[3]-this.EZ.
Gg[1]);},AJG:function(AoQ){return AoQ.toFixed();},AKe:function(){return A.jV;},ASX:
function(E){if(this.AmH===E)return;this.AmH=E;this.DR.ASX(E);},ASW:function(E){if(
this.AqF===E)return;this.AqF=E;this.DR.ASW(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIw);this.A68=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIw);this.DR.BmR(AZw);this.
DR.Blj(A.jb.Re);this.DR.Bl_(A.jb.Bc);this.DR.Bnb(A.jb.Re);this.J(this.DR,0);this.
Pq=A.aaL(A.acv.ACs);this.Anb=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bmr(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMW={AJG:function(AoQ){return A._GetAutoObject(
A.Device.Converter).AxU(AoQ,0);},AKe:function(){return A._GetAutoObject(A.acj.DV
).AfY();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMW;}
,_className:"Application::BodyWeightGraph"};C.OZ={JH:null,Ex:null,Eh:null,FT:null
,ID:null,IE:null,Init:function(aArg){this.ASV(null);},WF:function(G){var B;var F;
C.DR.WF.call(this,G);var AKL=0;var ALA=0;if(!!this.JH){AKL=this.Azh(A._GetAutoObject(
A.Device.Helper).ACZ((F=this.JH,F[1].call(F[0]))));ALA=this.Azh(A._GetAutoObject(
A.Device.Helper).ACY((F=this.JH,F[1].call(F[0]))));}this.FT.H(A.abP(this.FT.M,0)
);this.FT.H([].concat(this.FT.M.slice(0,3),((B=this.M)[3]-B[1])-ALA));this.ID.H(
A.abO(this.ID.M,(this.FT.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FT.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKL));this.IE.H(A.abO(this.IE.M,(this.Eh.M[3]-((((B=this.IE.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJG:function(AoQ){return A._GetAutoObject(A.Device.Converter
).S3(AoQ,0,true);},AKe:function(){return A._GetAutoObject(A.acj.DV).Aax();},Ans:
function(E){if(A.aaZ(this.JH,E))return;if(!!this.JH)A.z$([this,this.AiK],this.JH
,0);this.JH=E;if(!!E)A.zX([this,this.AiK],E,0);if(!!E)A.pe([this,this.AiK],this);
},AiK:function(G){this.An();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.
acg.AK._Init.call(this.FT={I:this},0);A.acg.AK._Init.call(this.ID={I:this},0);A.
acg.AK._Init.call(this.IE={I:this},0);this.__proto__=C.OZ;this.Ex.AZ(0xD);this.Ex.
H(Aaa);this.Ex.L(A.jb.Gf);this.Eh.AZ(0xD);this.Eh.H(S7);this.Eh.L(A.jb.H6);this.
FT.AZ(0xD);this.FT.H(AcL);this.FT.L(A.jb.E1);this.ID.AZ(0xD);this.ID.H(Aac);this.
ID.Awo(A.jb.H6);this.ID.Awp(A.jb.H6);this.ID.Awr(A.jb.E1);this.ID.Awq(A.jb.E1);this.
IE.AZ(0xD);this.IE.H(W$);this.IE.Awo(A.jb.Gf);this.IE.Awp(A.jb.Gf);this.IE.Awr(A.
jb.H6);this.IE.Awq(A.jb.H6);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FT
,-1);this.J(this.ID,-1);this.J(this.IE,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FT._Done();this.ID._Done();this.
IE._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FT._ReInit();this.ID._ReInit();this.IE._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JH)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ID)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqW={EU:null,EZ:null,R6:null,Ih:
null,Bc:null,AxB:A.jV,DK:A.jV,AOU:null,Init:function(aArg){},Bk:function(aSize){
A.Core.P.Bk.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R6.
H([30,0,aSize[0]-2,30]);this.Ih.H(this.R6.M);if(!!this.EU)this.EU.H([30,this.R6.
M[3],aSize[0],this.Bc.M[1]]);},Ahl:function(E){if(this.AxB===E)return;this.AxB=E;
this.Ih.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R6.R(E);},AE6:
function(E){if(this.AOU===E)return;this.AOU=E;this.Bos(this);},Bos:function(G){var
B;if(!!this.EU)this.HN(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOU,0))?B:null);if(!!this.EU){this.EU.H(AZx);this.EU.AeV(this.EZ);this.J(this.EU
,0);}},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.AeV(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R6={I:this},0);A.acg.Text._Init.call(this.Ih={I:this},0);A.acg.AK._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqW;this.H(AcN);this.Ar(false);this.R6.H(AZy);this.
R6.A6(0x11);this.R6.R(Lv);this.R6.L(A.jb.Text);this.Ih.A6(0x14);this.Ih.R(A.jV);
this.Ih.L(A.jb.Text);this.Bc.H(AZz);this.Bc.L(A.jb.Bc);this.J(this.R6,0);this.J(
this.Ih,0);this.J(this.Bc,0);this.R6.S(A.aaL(A.fl.Ak));this.Ih.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R6._Done();this.
Ih._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R6._ReInit();this.Ih._ReInit();this.Bc._ReInit();this.
R6.S(A.aaL(A.fl.Ak));this.Ih.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMv={Agt:null,G2:function(E
){var F;C.F$.G2.call(this,E);if(!!this.Agt)(F=this.Agt,F[2].call(F[0],E));},A9g:
function(E){if(A.aaZ(this.Agt,E))return;if(!!this.Agt)A.z$([this,this.A2L],this.
Agt,0);this.Agt=E;if(!!E)A.zX([this,this.A2L],E,0);if(!!E)A.pe([this,this.A2L],this
);},A2L:function(G){var F;if(!this.Agt)return;(F=this.Agt,F[2].call(F[0],this.FG(
)));},_Init:function(aArg){C.F$._Init.call(this,aArg);this.__proto__=C.AMv;},_Mark:
function(D){var B;C.F$._Mark.call(this,D);if((B=this.Agt)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT_={Rc:null
,PU:null,XW:null,XX:null,Mt:0,CP:function(){this.An();},Bk:function(aSize){var B;
A.Core.P.Bk.call(this,aSize);this.Rc.H(A.abI(this.Rc.M,(((B=this.M)[3]-B[1])/2)|
0));this.PU.H(A.abI(this.PU.M,(((B=this.M)[3]-B[1])/2)|0));this.Rc.H(A.abO(this.
Rc.M,(((B=this.M)[3]-B[1])/2)|0));this.PU.H(A.abO(this.PU.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rc.R(A._GetAutoObject(
A.Device.Helper).Nj(A.aaR(A.acf.BjJ),P6,this.Mt.toFixed()));},Ab6:function(E){if(
this.Mt===E)return;this.Mt=E;this.BBd(this);},BBd:function(G){var B;var AJO=(((B=
this.M)[2]-B[0])/this.Mt)|0;this.XW.H(A.abM(this.XW.M,(((B=this.M)[2]-B[0])-(this.
Mt*AJO))+(((AJO/2)-(((B=this.XW.M)[2]-B[0])/2))|0)));this.XX.H(A.abM(this.XX.M,(((
B=this.M)[2]-B[0])-AJO)+(((AJO/2)-(((B=this.XX.M)[2]-B[0])/2))|0)));this.An();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rc={
I:this},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.
XW={I:this},0);A.acg.Text._Init.call(this.XX={I:this},0);this.__proto__=C.AT_;this.
H(BF);this.Rc.H(AZA);this.Rc.Hh(5);this.Rc.A6(0x11);this.Rc.L(A.jb.Text);this.PU.
H(AZB);this.PU.Hh(5);this.PU.A6(0x14);this.PU.R(A.aaR(A.acf.AhJ));this.PU.L(A.jb.
Text);this.XW.H(Bqg);this.XW.R(A$N);this.XW.L(A.jb.Text);this.XX.H(Bqh);this.XX.
R(A$N);this.XX.L(A.jb.Text);this.J(this.Rc,0);this.J(this.PU,0);this.J(this.XW,0
);this.J(this.XX,0);this.Rc.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.XW.
S(A.aaL(A.fl.Hr));this.XX.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=A.
Core.P;this.Rc._Done();this.PU._Done();this.XW._Done();this.XX._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rc._ReInit(
);this.PU._ReInit();this.XW._ReInit();this.XX._ReInit();this.PU.R(A.aaR(A.acf.AhJ
));this.Rc.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rc)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K_={V2:null,AjG:null,KM:A.jV,Mt:0,AaB:false,Init:function(aArg){var A1u=A._NewObject(
C.Ki,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RK()<A1u.
C4(O))A1u.Ani=O+1;this.V2.CI(A1u);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjG.
Z(this.AaB);if(this.AaB)this.Bb(null);else this.Bb(this.V2);},CF:function(G){var
B;var F;C.D9.CF.call(this,G);if(!(F=this.V2.Q,F[1].call(F[0])))(F=this.V2.Q,F[2].
call(F[0],this.V2.AC.C4(0)));A.zX([this,this.AIX],[B=A._GetAutoObject(A.Device.Helper
),B.UX,B.U0],0);A.zV([this,this.AIX],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.pe([this
,this.Al$],this);},E3:function(G){var B;A.z$([this,this.AIX],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AIX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Zu:function(E){if(A.aa0(this.AR,E))return;C.D9.Zu.call(
this,E);this.V2.AR=E;},Ab6:function(E){if(this.Mt===E)return;this.Mt=E;A.pe([this
,this.Al$],this);},Bv1:function(Aq){this.Ab6(Aq);},AiU:function(G){},AIX:function(
s){this.AiU(s);},Dz:function(E){if(this.KM===E)return;this.KM=E;this.AjG.R(E);},
Al$:function(G){var Fs=A._NewObject(A.Device.Filter,0);var Azr=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azr.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhJ()-((this.Mt-1)*86400))-1,true);Fs.CW(Azr);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bl(Fs);},BkG:function(){return this.Mt;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUy._Init.call(this.V2={I:this},0);C.AkP._Init.call(
this.AjG={I:this},0);this.__proto__=C.K_;this.V2.H(BF);this.AjG.H(UU);this.J(this.
V2,0);this.J(this.AjG,0);this.V2.As([this,this.BkG,this.Bv1]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V2._Done();this.AjG._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V2._ReInit();this.AjG.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AND={V9:null,YN:null,RatingMode:null,PB:null,_Init:
function(aArg){C.Ce._Init.call(this,aArg);C.Nb._Init.call(this.V9={I:this},0);C.
BW._Init.call(this.YN={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Io._Init.call(this.PB={I:this},0);this.__proto__=C.AND;var B;this.Hd.R(A.
aaR(A.acf.ACi));this.I8(A.aaR(A.acf.A5u));this.V9.H(AIx);this.V9.Aj(true);this.V9.
T(A.aaR(A.acf.AsP));this.V9.Bg(true);this.V9.Ne(23);this.YN.H(Bqi);this.YN.Aj(true
);this.YN.T(A.aaR(A.acf.A_J));this.YN.Bg(false);this.PB.H(Bqj);this.PB.Aj(true);
this.PB.T(A.aaR(A.acf.A5r));this.PB.Bg(true);this.PB.F0(3);this.PB.EV(14);this.PB.
IM(A.aaR(A.acf.Ki)+AIy);this.PB.I9(A.aaR(A.acf.GH)+AIy);this.J(this.V9,0);this.J(
this.YN,0);this.J(this.PB,0);this.V9.AR=[B=this.V9,B.Nh];this.YN.As([B=this.RatingMode
,B.B7,B.B8]);this.YN.CI(this.RatingMode);this.PB.As([B=A._GetAutoObject(A.Device.
Device),B.A8l,B.BaQ]);},_Done:function(){this.__proto__=C.Ce;this.V9._Done();this.
YN._Done();this.RatingMode._Done();this.PB._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V9._ReInit();this.YN._ReInit();this.RatingMode.
_ReInit();this.PB._ReInit();this.Hd.R(A.aaR(A.acf.ACi));this.I8(A.aaR(A.acf.A5u)
);this.V9.T(A.aaR(A.acf.AsP));this.YN.T(A.aaR(A.acf.A_J));this.PB.T(A.aaR(A.acf.
A5r));this.PB.IM(A.aaR(A.acf.Ki)+AIy);this.PB.I9(A.aaR(A.acf.GH)+AIy);},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.AuZ={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;var FM=A.jb.Ad8;var GQ=A.jb.Bm;if(this.Hf){FM=A.jb.Bm;GQ=A.jb.
Text;}if(!G$){this.Background.L(FM);this.V.L(A.jb.CK);}else if(GA){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FM);this.V.L(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.AuZ;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC7={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,
B.PM,B.EB],0);A.pe([this,this.DY],this);},De:function(E){C.BR.De.call(this,E);this.
Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC4));break;case 1:this.Ap.Aw(A.aaL(A.ach.APf));break;
case 2:this.Ap.Aw(A.aaL(A.ach.APh));break;default:A.ab5("%s%e",AZC,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC7;this.Ap.H(AZD);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC4));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC8={Ap:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Helper).W,B.PM,B.EB],0);A.pe([this,this.DY],this);},De:function(E){C.BR.
De.call(this,E);this.Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC5));break;case 1:this.Ap.Aw(A.aaL(
A.ach.APg));break;case 2:this.Ap.Aw(A.aaL(A.ach.APi));break;default:A.ab5("%s%e"
,AZC,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC8;
this.Ap.H(AZD);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC5));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Ft={BT:null,AxP:A.jV,De:function(E){C.JG.De.call(
this,E);this.BT.L(E);},Ks:function(E){if(this.AxP===E)return;this.AxP=E;this.BT.
R(E);},_Init:function(aArg){C.JG._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Ft;this.BT.AZ(0x34);this.BT.H(Ayp);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JG;this.
BT._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cu(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JG._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOD={Wv:function(G){var B;this.Agn();this.AL8(A.aaR(A.acf.BiU),[this,this.Bnq],[
B=A._GetAutoObject(A.Device.Device),B.A8m,B.BaR]);A._GetAutoObject(C.BS).FS();this.
IY(A.aaR(A.acf.AU$),[this,this.ATB],5);this.IY(A.aaR(A.acf.AU9),[this,this.ATA],
7);this.IY(A.aaR(A.acf.AnY),[this,this.AwN],2);this.IY(A.aaR(A.acf.AdQ),[this,this.
AEK],1);this.IY(A.aaR(A.acf.Auv),[this,this.AEE],0);A._GetAutoObject(C.BS).FS();
A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abs:function(){return C.ABW;},Abt:function(
){return C.ADd;},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).A6u());},HO:function(G){C.GU.HO.call(this,G);if(this.Akg()===false
){this.N.Cs(A.aaL(A.ach.AbD));this.N.Ck=[this,this.A5W];this.N.FI(A.jV);}this.N.
ON(false);this.N.OO(false);},Aga:function(){A._GetAutoObject(C.A$).Cg(44);},Bnq:
function(G){A._GetAutoObject(A.Device.Device).AwD(!A._GetAutoObject(A.Device.Device
).AqR);this.An6(this);},An6:function(G){var Be=A._GetAutoObject(A.Device.Device).
Am.Filter.Fg();var Av=Be.DQ(30,3);if(!!Av)Be.N3(Av);if(A._GetAutoObject(A.Device.
Device).AqR){var Az9=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2k=A._GetAutoObject(
A.Device.Helper).Dv()-21600;Az9.Initialize(30,3,A2k,true);Be.CW(Az9);}A._GetAutoObject(
A.Device.Device).Am.Bl(Be);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.
__proto__=C.AOD;var B;this.Dq(C.APb);this.Dz(A.aaR(A.acf.A7M));this.AwI([B=A._GetAutoObject(
A.Device.Device),B.A8k,B.BaP]);},_ReInit:function(){C.GU._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7M));},_className:"Application::FreshCowListScreen"};C.AOC={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AOC;this.Ld.Ar(false);
this.Ld.Aj(false);this.Ld.Z(false);this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.APb={DY:function(
G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdV(7));
},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APb;},_className:
"Application::HeaderFreshCowListFilter"};C.ADd={Jt:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jt={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADd;this.A9B(1);this.Jt.H(Bqk);this.Jt.R((A.
aaR(A.acf.Calving)+Aah)+A.aaR(A.acf.A$j));this.Jt.L(A.jb.Text);this.D0.H(Bql);this.
D0.R(A.aaR(A.acf.ADX));this.D0.L(A.jb.Text);this.J(this.Jt,0);this.J(this.D0,0);
this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jt._ReInit();this.D0._ReInit();this.Jt.R((A.aaR(A.acf.Calving)+Aah)+A.aaR(A.acf.
A$j));this.D0.R(A.aaR(A.acf.ADX));this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.
Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABW={AGO:null,KP:null,UA:null,AP:null,A_:null,Init:function(aArg){},Bk:function(
aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UA.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.UA.M[2]-1,0,this.UA.M[2]+1,aSize[1]]);this.KP.H([this.UA.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.
UA.De(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Iw=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,1);var A2j=this.AX.CE(Ad,29);var Alx=this.
AX.HF(Ad,28);this.T(Md.toFixed());this.KP.R(A2j.toFixed());this.UA.Ab6(A._GetAutoObject(
A.Device.Device).AqQ+1);this.UA.Bm5(Alx);this.UA.R(A._GetAutoObject(A.acj.KK).AjL(
Alx));A._GetAutoObject(A.Device.Device).SK(Ad);this.Ap5(Iw);this.Axk();A._GetAutoObject(
A.Device.Device).Bt.Bl(null);this.An();}},A4b:function(G){this.UA.Ab8(this.AGO);
},Axk:function(){var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AGO=A._NewObject(
C.Ajr,0);if(Gd>0){var O=Gd-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6);this.Atq(this.AGO,O,9,D8);O=O-1;}}A.pe([this,this.A4b],this);},Atq:
function(A0Q,Ad,A0P,Qa){var Alr=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0P);
if(!!Alr)A0Q.Or(Alr,Qa);},Ap5:function(Ac3){var Fs=A._NewObject(A.Device.Filter,
0);var Azr=A._NewObject(A.Device.UInt32FilterCriterion,0);Azr.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZQ(A._GetAutoObject(A.Device.Device).AqQ)-1,true);Fs.CW(Azr);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac3,true);Fs.
CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Fs);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KP={I:this},0);C.AT5._Init.call(this.
UA={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);this.__proto__=C.ABW;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KP,0);this.J(this.UA,0);this.J(this.AP,0);this.J(this.A_,0);this.KP.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KP._Done();
this.UA._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KP._ReInit();this.UA._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.AT5={AUM:0,Init:function(aArg
){},AOK:function(){return A._GetAutoObject(A.Device.Helper).Aqo(this.AUM);},AOM:
function(){return this.AOK()+(this.Mt*86400);},Bm5:function(E){if(this.AUM===E)return;
this.AUM=E;A.pe([this,this.WF],this);},_Init:function(aArg){C.Ahr._Init.call(this
,aArg);this.__proto__=C.AT5;this.Bc.H(Bqm);this.Bm2(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dn:function(){if(this.K&&this.K.Dn)return this.K.Dn.apply(this,arguments);else
return C.FactoryResetScope.Bt2.apply(this,arguments);},Bt2:function(){return 2;}
,FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BH(this.C4(aIndex));},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cc.Set(0,0);this.Cc.Set(1,1);var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgd:false,Init:function(
aArg){this.Bgd=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.Bdk){A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);if(this.Bgd)A._GetAutoObject(A.Device.Device).A9(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A9(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.AR6={Wv:function(G){this.Agn();A._GetAutoObject(C.BS).Qw(A.aaR(A.acf.Settings
),[this,this.A3j]);A._GetAutoObject(C.BS).FS();this.AL6();A._GetAutoObject(C.BS).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.
BS).NC(A.aaR(A.acf.ARk)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abs:function(){return C.Aqt;},Abt:function(){return C.Aq0;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).ACR());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akg()===false){this.
N.Cs(A.aaL(A.ach.Avr));this.N.Ck=[this,this.ANW];this.N.FI(A.jV);}this.N.ON(false
);this.N.OO(false);},Aga:function(){A._GetAutoObject(C.A$).Cg(47);},A3j:function(
G){A._GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:
function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR6;this.Dq(C.AC9);this.
Dz(A.aaR(A.acf.A7I));this.AS_(A._GetAutoObject(C.Av0));},_ReInit:function(){C.Tu.
_ReInit.call(this);this.Dz(A.aaR(A.acf.A7I));},_className:"Application::NoTransponderListScreen"
};C.AR5={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR5;this.
KW.Ar(false);this.KW.Aj(false);this.KW.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.AC9={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(8));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.AC9;},_className:"Application::HeaderNoTransponderListFilter"};C.ABF={AuL:null
,FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuL.BH(aIndex
);},_Init:function(aArg){C.Ga._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuL={I:this},0);this.__proto__=C.ABF;},_Done:function(){this.__proto__=
C.Ga;this.AuL._Done();C.Ga._Done.call(this);},_ReInit:function(){C.Ga._ReInit.call(
this);this.AuL._ReInit();},_Mark:function(D){var B;C.Ga._Mark.call(this,D);if((B=
this.AuL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL1={Co:null,AdY:null,Init:function(aArg){this.Bb(this.Co);},KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=null;
this.Bx.Cl=[this,this.A2W];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.
ach.Aev));}return this.Bx;},AAn:function(G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdY)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$O);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Ajh._Init.call(this.
Co={I:this},0);C.Ajh._Init.call(this.AdY={I:this},0);this.__proto__=C.AL1;this.H(
Rk);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IR);this.Co.T(A.aaR(A.acf.
AD8));this.AdY.H(P7);this.AdY.T(A.aaR(A.acf.Tt));this.J(this.Co,0);this.J(this.AdY
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAn];this.AdY.AR=[this,this.
AAn];this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Co._Done();this.
AdY._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Co._ReInit();this.AdY._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AD8));this.AdY.T(A.aaR(A.acf.Tt));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFc={Undefined:0,BFa:1,BFb:2,IdScanned:3,BD$:4,BDb:5,BDV:6};C.AMd={A_5:function(
){A._GetAutoObject(A.Device.Device).A9(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeS]);},_Init:function(aArg){C.AuB._Init.call(
this,aArg);this.__proto__=C.AMd;this.Ga.As(1);this.ATe(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aep={VQ:null,VS:null,VT:null,AgT:null,AgU:null,AgV:null,CB:null,Ck:null,Cl:null
,AnZ:A.jV,An0:A.jV,An1:A.jV,Aq7:0,Aq8:0,Aq9:0,Aha:0,ZD:false,ZC:false,Asl:false,
Asz:false,Asy:false,Ajx:function(Fa){this.CB=Fa.CB;this.Ck=Fa.Ck;this.Cl=Fa.Cl;this.
AnZ=Fa.AnZ;this.An0=Fa.An0;this.An1=Fa.An1;this.Aha=Fa.Aha;this.VQ=Fa.VQ;this.VS=
Fa.VS;this.VT=Fa.VT;this.AgT=Fa.AgT;this.AgU=Fa.AgU;this.AgV=Fa.AgV;this.Asy=Fa.
Asy;this.Asz=Fa.Asz;this.Asl=Fa.Asl;this.ZC=Fa.ZC;this.ZD=Fa.ZD;this.Aq7=Fa.Aq7;
this.Aq8=Fa.Aq8;this.Aq9=Fa.Aq9;},AkO:function(Fa){Fa.CB=this.CB;Fa.Ck=this.Ck;Fa.
Cl=this.Cl;Fa.Hu(this.AnZ);Fa.FI(this.An0);Fa.CV(this.An1);Fa.AFa(this.Aha);Fa.AE3(
this.VQ);Fa.ArN(this.VS);Fa.Anv(this.VT);Fa.CY(this.AgT);Fa.Cs(this.AgU);Fa.C6(this.
AgV);Fa.ON(this.Asy);Fa.OO(this.Asz);Fa.Asl=this.Asl;Fa.ZC=this.ZC;Fa.ZD=this.ZD;
Fa.Bma(this.Aq7);Fa.AS4(this.Aq8);Fa.A9M(this.Aq9);},_Init:function(aArg){this.__proto__=
C.Aep;this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VQ=A.aaL(
A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VS)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgU)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CB)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asv._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dq(C.AC7);},_className:"Application::NewAnimalSetTransponderScreen"};C.C7={Abb:null
,CountryToString:null,Dn:function(){return 40;},C4:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lt(aIndex);},DU:function(A7){return A7;
},HH:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
Abb)(F=this.Abb,F[2].call(F[0],E));},A1m:function(G){var F;if(!!this.Abb)this.Q=(
F=this.Abb,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},AEV:
function(E){if(A.aaZ(this.Abb,E))return;if(!!this.Abb)A.z$([this,this.A1m],this.
Abb,0);this.Abb=E;if(!!this.Abb)A.zX([this,this.A1m],this.Abb,0);A.pe([this,this.
A1m],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C7;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abb)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OY={AC:null,Q:null,Background:null,Im:null,Il:null,MZ:
0,AM:0,Gl:0,FZ:0,Af9:function(G){this.J_(this);},Bk:function(aSize){A.Core.P.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.
L(A.jb.AV);this.Dr(256);}else{this.Background.L(this.MZ);this.Dr(256);}},Af8:function(
G){this.J5(this);},CI:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3h],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3h],E,0);if(!!E)A.pe([this
,this.A3h],this);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.An();},J_:
function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J5:function(
G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(
E){if(E<this.Gl)E=this.FZ;if(E>this.FZ)E=this.Gl;if(this.AM===E)return;this.AM=E;
this.An();},F0:function(E){if(this.Gl===E)return;this.Gl=E;this.An();},EV:function(
E){if(this.FZ===E)return;this.FZ=E;this.An();},C2:function(G){var F;if(!!this.Q)
this.By(this.AC.DU((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A3h:function(G){var F;if(!!this.
AC){this.F0(0);this.EV(this.AC.HH());if(!!this.Q)this.By(this.AC.DU((F=this.Q,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BM._Init.call(this.Im={
I:this},0);A.Core.BM._Init.call(this.Il={I:this},0);this.__proto__=C.OY;this.H(A$P
);this.Background.H(Atb);this.Im.Filter=4;this.Il.Filter=5;this.MZ=A.jb.CK;this.
J(this.Background,0);this.Im.BN=[this,this.Af9];this.Im.D1=[this,this.Af9];this.
Il.BN=[this,this.Af8];this.Il.D1=[this,this.Af8];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Im._Done();this.Il._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Im._ReInit();this.Il._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RP={A1e:A.jV,Ai:function(
Ae){C.Ft.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5d));this.Ks(this.A1e);},Cf:function(
G){C.Ft.Cf.call(this,G);var Alx=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Alx)this.A1e=Xa;else this.A1e=A._GetAutoObject(A.acj.KK).AjL(Alx);this.An();
},_Init:function(aArg){C.Ft._Init.call(this,aArg);this.__proto__=C.RP;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RQ={A2i:0,Ai:function(Ae){C.Ft.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARi));if(this.A2i>0)this.Ks(this.A2i.toFixed());else
this.Ks(A.aaR(A.acf.Unknown));},Cf:function(G){C.Ft.Cf.call(this,G);this.A2i=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.An();},_Init:function(aArg){C.Ft._Init.call(
this,aArg);this.__proto__=C.RQ;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dn:function(){return 5;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A1G:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B7,
this.B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1G],[B=this.Animal,B.ASn,B.Akw],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1G],[B=this.Animal,B.ASn,B.Akw],0);A.pe([this,this.A1G],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dn:function(){return 99;},C4:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BH(aIndex);},DU:function(A7){return A7;
},HH:function(){return 98;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal
)this.Animal.NY(E);},A1c:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B7,this.B8],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1c],[B=this.Animal,B.Av4,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1c],[B=this.Animal,B.Av4,B.NY],0);A.pe([
this,this.A1c],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARD={V5:null,YL:null,AeH:null,Init:function(
aArg){this.Bb(this.V5);},Adq:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YL)this.BxK();else if(Aa===this.V5)this.BAr(this);else throw new
Error(Ax$);A._GetAutoObject(A.Device.Device).Ds(0);},BAr:function(G){var B;var F;
var Vh=(C.Amp.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vh){A.ab5("%s",Bqn);return;}Vh.AKB(this);},BxK:function(){A._GetAutoObject(
A.Device.Helper).W.AGw(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ml._Init.call(this.V5={I:this},0);C.Ml._Init.call(this.YL={
I:this},0);C.VL._Init.call(this.AeH={I:this},0);this.__proto__=C.ARD;var B;this.
H(AcN);this.V5.H(P7);this.V5.Ar(true);this.V5.T(A.aaR(A.acf.A_L));this.V5.Bg(true
);this.YL.H(IR);this.YL.Ar(true);this.YL.T(A.aaR(A.acf.A4B));this.YL.Bg(true);this.
AeH.H(BF);this.AeH.T(A.aaR(A.acf.ACG));this.AeH.Bg(true);this.J(this.V5,0);this.
J(this.YL,0);this.J(this.AeH,0);this.V5.AR=[this,this.Adq];this.YL.AR=[this,this.
Adq];this.AeH.ASS([B=A._GetAutoObject(A.Device.Device),B.Aru,B.Atd]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V5._Done();this.YL._Done(
);this.AeH._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V5._ReInit();this.YL._ReInit();this.AeH._ReInit();this.V5.
T(A.aaR(A.acf.A_L));this.YL.T(A.aaR(A.acf.A4B));this.AeH.T(A.aaR(A.acf.ACG));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VL={
Ai:function(Ae){C.T9.Ai.call(this,Ae);var FM=A.jb.CK;var GQ=A.jb.Text;if(this.Hf
){FM=A.jb.Text;GQ=A.jb.Bm;}if(!this.LI){this.Background.L(FM);this.V.L(A.jb.AmZ);
}else if(this.Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FM);this.V.
L(GQ);}if(this.Amx){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);this.Mj.
L(A.jb.Bm);}},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.VL;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvT={C8:null,A1:null,AF:
null,Akh:null,QS:null,EN:null,ARV:Lv,Bk:function(aSize){C.Co.Bk.call(this,aSize);
var FM=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FM=A.jb.Bm;GQ=A.jb.Text;}this.Background.
L(FM);this.V.L(GQ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Co.Ai.call(this
,Ae);this.Akh.L(this.V.AQ);this.QS.L(this.V.AQ);this.QS.R(Bqo);this.T(((this.ARV+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak4(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2n=this.QS.Afb([(this.QS.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3H=this.QS.Afb([this.
QS.String.length-(F=this.AF,F[1].call(F[0])),0]);var AA9=this.QS.Db();this.EN.H([
A2n[0]-1,AA9[1],A3H[0]+1,AA9[3]]);}else this.EN.H(this.QS.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Akh.Aw(E);},OL:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaH],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaH],E,0);if(!!E)A.pe([this,this.AaH],this);},PN:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaI],E,0);if(!!E)A.pe([this,this.AaI],this);},AaI:function(G){this.An(
);},AaH:function(G){this.An();},ArZ:function(E){if(this.ARV===E)return;this.ARV=
E;this.An();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akh={I:this},0);A.acg.Text._Init.call(this.QS={I:this},0);A.acg.BU._Init.call(
this.EN={I:this},0);this.__proto__=C.AvT;this.H(JZ);this.V.A6(0x11);this.Akh.H(P5
);this.QS.H(Bqp);this.EN.H(Bqq);this.EN.Ng(2);this.EN.L(A.jb.E1);this.J(this.Akh
,0);this.J(this.QS,0);this.J(this.EN,0);this.QS.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akh._Done();this.QS._Done();this.EN._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akh._ReInit();this.
QS._ReInit();this.EN._ReInit();this.QS.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AT0:0,Init:
function(aArg){var B;A.zX([this,this.Bea],[B=A._GetAutoObject(A.Device.Device),B.
AEn,B.AIH],0);A.pe([this,this.Bea],this);},HO:function(G){C.Tx.HO.call(this,G);if(
this.AjP)this.N.Cs(A.aaL(A.ach.AD));else this.N.Cs(A.aaL(A.ach.ANe));this.N.C6(A.
aaL(A.ach.Options));this.N.FI(A.jV);this.N.CV(A.jV);this.N.Ck=[this,this.A_u];this.
N.Cl=[this,this.Wv];this.N.ArN(A.aaL(A.fl.Ak));this.N.Anv(A.aaL(A.fl.Ak));},MU:function(
G){this.Bew(this);},Ol:function(G){this.BAm(this);},AdN:function(Ah$,Aia,BwO){A.
_GetAutoObject(C.BS).ABx(Ah$,Aia,[this,this.A8G,this.ATh],BwO);},Wv:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjP){A._GetAutoObject(C.BS).
Qw(A.aaR(A.acf.BhC),[this,this.Bnm]);A._GetAutoObject(C.BS).FS();}this.AdN(A.aaR(
A.acf.Rating),[this,this.ATF],3);this.AdN(A.aaR(A.acf.Afp),[this,this.ATH],2);this.
AdN(A.aaR(A.acf.Temperature),[this,this.ATG],1);this.AdN(A.aaR(A.acf.AdQ),[this,
this.Bnj],0);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BhG
));A._GetAutoObject(A.Device.Device).Ds(6);},ATh:function(E){if(this.AT0===E)return;
this.AT0=E;A.abo([this,this.A8G,this.ATh],0);},Bea:function(G){this.ATh(A._GetAutoObject(
A.Device.Device).D9);},A8G:function(){return this.AT0;},_Init:function(aArg){C.Tx.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vu:null
,Init:function(aArg){var B;A.zX([this,this.Af5],[B=A._GetAutoObject(A.Device.Device
).Am,B.Fj,B.Fn],0);A.pe([this,this.Bgi],this);A.pe([this,this.Q6],this);},CF:function(
G){C.Tx.CF.call(this,G);A.pe([this,this.Bgo],this);},AGC:function(G){C.Tx.AGC.call(
this,G);if(!!this.Lf)this.Ahu(this.Lf,this.Vu);},HO:function(G){C.Tx.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AQS));this.N.C6(A.aaL(A.ach.AQT));if(this.AjP)this.N.AS4(
0);else this.N.AS4(1);this.N.A9M(A._GetAutoObject(A.Device.Converter).BgN(A._GetAutoObject(
A.Device.Device).D9));this.N.FI(A.jV);this.N.CV(A.jV);this.N.Ck=[this,this.Bk$];
this.N.Cl=[this,this.Bno];this.N.ArN(A.aaL(A.fl.Ak));this.N.Anv(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Am.QE()){this.N.I4.Dr(100);this.N.Ck=null;
}else this.N.I4.Dr(255);if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.N.Le.
Dr(100);this.N.Cl=null;}else this.N.Le.Dr(255);if(A._GetAutoObject(A.Device.Device
).Am.Ca()<=1){this.N.TW.Dr(100);this.N.TX.Dr(100);}else{this.N.TW.Dr(255);this.N.
TX.Dr(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)return;
var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;if(LC>=A._GetAutoObject(A.
Device.Device).Am.Ca())LC=0;A._GetAutoObject(A.Device.Helper).HL(LC);},Ol:function(
G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)return;var LC=A._GetAutoObject(
A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(A.Device.Device).Am.Ca(
)-1;A._GetAutoObject(A.Device.Helper).HL(LC);},Af4:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cg(94);},Bk$:function(G){A._GetAutoObject(
A.Device.Device).Ds(10);},Bno:function(G){this.Bew(this);},Q6:function(G){A._GetAutoObject(
A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.Helper).Mo());A.pe([this,this.Bgo
],this);},Bgi:function(G){if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.Vu.
Z(true);if(!A._GetAutoObject(A.Device.Device).Am.QE()||!A._GetAutoObject(A.Device.
Device).Am.Filter)this.Vu.R(A.aaR(A.acf.AEe));else if(!A._GetAutoObject(A.Device.
Device).Am.Filter.DQ(1,4)){if(A._GetAutoObject(A.Device.Helper).ACS(A._GetAutoObject(
A.Device.Device).Am.Filter)===1)this.Vu.R(A.aaR(A.acf.AN6));else this.Vu.R(A.aaR(
A.acf.AN5));}else this.Vu.R(A.aaR(A.acf.AR2));}else this.Vu.Z(false);},Bgo:function(
G){var BBk=A._GetAutoObject(A.Device.Helper).W.Id;var A3K=A._GetAutoObject(A.Device.
Device).Am.Lc(0,BBk);if(!A._GetAutoObject(A.Device.Device).Am.Ca())A._GetAutoObject(
A.Device.Helper).HL(-1);else if(A3K<0)A._GetAutoObject(A.Device.Helper).HL(0);},
Af5:function(G){this.Bgi(this);this.HO(this);},_Init:function(aArg){C.Tx._Init.call(
this,aArg);C.AkP._Init.call(this.Vu={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APu);this.Vu.H(E$);this.J(this.Vu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tx;this.Vu._Done();C.Tx._Done.call(this);},_ReInit:function(){
C.Tx._ReInit.call(this);this.Vu._ReInit();},_Mark:function(D){var B;C.Tx._Mark.call(
this,D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMs={QM:null,V6:null,AbI:null,YO:null,Init:function(aArg){var B;var F;this.Bb(
this.QM);if(!!A._GetAutoObject(C.A$).Q){var Vh=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.ab5("%s",AZE);
return;}else{if(Vh.AjP)this.QM.T(A.aaR(A.acf.Bj));else this.QM.T(A.aaR(A.acf.EU)
);var Azm=A._GetAutoObject(A.Device.Device).Am.Filter;if(!Azm||A._GetAutoObject(
A.Device.Helper).Arc(Azm))this.YO.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Am.Ca()){this.V6.Ar(false);this.QM.Ar(false);}}}},Adq:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Ds(0);if(
Aa===this.AbI)A._GetAutoObject(C.A$).Cg(9);else if(Aa===this.V6)A._GetAutoObject(
A.Device.Device).Ds(7);else if(Aa===this.QM)this.BBP();else if(Aa===this.YO)this.
A1k();else throw new Error(Ax$);},BBP:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZE);return;}Vh.A_u(this);},A1k:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZE);return;}Vh.Q6(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ml._Init.call(this.QM={I:this},0);C.Ml._Init.call(this.V6={I:this},
0);C.Ml._Init.call(this.AbI={I:this},0);C.Ml._Init.call(this.YO={I:this},0);this.
__proto__=C.AMs;this.H(Afy);this.QM.H(Aaf);this.QM.Ar(true);this.QM.T(A.aaR(A.acf.
EU));this.QM.Bg(true);this.V6.H(P7);this.V6.Ar(true);this.V6.T(A.aaR(A.acf.AUo));
this.V6.Bg(true);this.AbI.H(IR);this.AbI.T(A.aaR(A.acf.AkR));this.AbI.Bg(true);this.
YO.H(BF);this.YO.T(A.aaR(A.acf.AB2));this.YO.Bg(true);this.J(this.QM,0);this.J(this.
V6,0);this.J(this.AbI,0);this.J(this.YO,0);this.QM.AR=[this,this.Adq];this.V6.AR=[
this,this.Adq];this.AbI.AR=[this,this.Adq];this.YO.AR=[this,this.Adq];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QM._Done();this.V6._Done(
);this.AbI._Done();this.YO._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QM._ReInit();this.V6._ReInit();this.AbI.
_ReInit();this.YO._ReInit();this.QM.T(A.aaR(A.acf.EU));this.V6.T(A.aaR(A.acf.AUo
));this.AbI.T(A.aaR(A.acf.AkR));this.YO.T(A.aaR(A.acf.AB2));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I5={TY:null,Ez:null,Yl:null,Background:null,Ap:null,Im:null,Il:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dr(256);}else if(G$){this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dr(
256);}else{this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dr(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.TY,[B=A._GetAutoObject(A.Device.
Device),B.Awc,B.AyF]))this.Ap.Cv(2);else if(A.aaZ(this.TY,[B=A._GetAutoObject(A.
Device.Device),B.Awb,B.AyE]))this.Ap.Cv(3);else if(!!this.Yl&&((F=this.Yl,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awc,B.AyF]))this.Ap.Cv(6);else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awb,B.AyE]))this.Ap.Cv(7);else if(!!this.Yl&&((F=this.Yl,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Af9:function(G){this.J_(this
);},Af8:function(G){this.J5(this);},J_:function(G){this.By(1);},J5:function(G){this.
By(-1);},Bmk:function(E){if(A.aaZ(this.TY,E))return;if(!!this.TY)A.z$([this,this.
A22],this.TY,0);this.TY=E;if(!!E)A.zX([this,this.A22],this.TY,0);A.pe([this,this.
A22],this);},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af7],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af7],this.Ez,0);if(!!E)A.pe([this
,this.Af7],this);},A22:function(G){var F;if(!!this.TY)this.By((F=this.TY,F[1].call(
F[0])));},Af7:function(G){A.pe([this,this.BB2],this);},CT:function(E){if(this.MZ===
E)return;this.MZ=E;this.An();},By:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TY)(F=this.TY,F[2].call(F[0],E));this.An();A.abo([this,this.Ue,this.
By],0);},A9C:function(E){if(A.aaZ(this.Yl,E))return;if(!!this.Yl)A.z$([this,this.
Af7],this.Yl,0);this.Yl=E;if(!!E)A.zX([this,this.Af7],this.Yl,0);if(!!E)A.pe([this
,this.Af7],this);},BB2:function(G){var F,CA;if(!this.Yl||!this.Ez)return;this.Bmk(
A._GetAutoObject(A.Device.Helper).BcZ((F=this.Yl,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.An();},Ue:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BM._Init.call(this.Im={I:this},0);
A.Core.BM._Init.call(this.Il={I:this},0);this.__proto__=C.I5;this.H(AIz);this.Background.
AZ(0x3F);this.Background.H(AIz);this.Ap.AZ(0x3C);this.Ap.H(AIz);this.Im.Filter=4;
this.Il.Filter=5;this.MZ=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUO));this.Im.BN=[this,this.Af9];this.Il.BN=[this,this.Af8];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Im._Done();this.Il._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Im._ReInit(
);this.Il._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.TY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL0={Wv:function(G){var B;var F;this.Agn();if(!!A._GetAutoObject(A.Device.Helper
).AOI((F=this.FF,F[1].call(F[0])),0,true))this.AL8(A.aaR(A.acf.A6K),[this,this.Bnp
],[B=A._GetAutoObject(A.Device.Device),B.A71,B.Baz]);else A._GetAutoObject(C.BS).
XN(A.aaR(A.acf.A6K));A._GetAutoObject(C.BS).FS();this.IY(A.aaR(A.acf.LinkTransponder
),[this,this.BmB],8);this.IY(A.aaR(A.acf.Tt),[this,this.Akt],9);this.IY(A.aaR(A.
acf.A$C),[this,this.Bnc],10);this.IY(A.aaR(A.acf.AF9),[this,this.ATm],3);this.IY(
A.aaR(A.acf.AnY),[this,this.AwN],2);A._GetAutoObject(C.BS).FS();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abs:function(){return C.Aqt;},Abt:function(){return C.Aq0;
},Q6:function(G){var F;A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).A6l((F=this.FF,F[1].call(F[0]))));},HO:function(G){var F;C.GU.HO.
call(this,G);if(this.Akg()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).BgP((F=this.FF,F[1].call(F[0]))));this.N.Ck=[this,this.AIU];this.N.FI(A.jV);}this.
N.ON(false);this.N.OO(false);},Aga:function(){A._GetAutoObject(C.A$).Cg(52);},A27:
function(G){C.GU.A27.call(this,G);A.pe([this,this.Bbb],this);},Bnp:function(G){A.
_GetAutoObject(A.Device.Device).Awi(!A._GetAutoObject(A.Device.Device).Aqd);this.
An6(this);},An6:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).Am.Filter.
Fg();A._GetAutoObject(A.Device.Helper).BnX(Be);if(A._GetAutoObject(A.Device.Device
).Aqd){var A13=A._GetAutoObject(A.Device.Helper).AOI((F=this.FF,F[1].call(F[0]))
,21600,true);Be.CW(A13);}A._GetAutoObject(A.Device.Device).Am.Bl(Be);},_Init:function(
aArg){C.GU._Init.call(this,aArg);this.__proto__=C.AL0;var B;this.Dz(A.aaR(A.acf.
AvY));this.AwI([B=A._GetAutoObject(A.Device.Device),B.A70,B.Bay]);},_ReInit:function(
){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.AvY));},_className:"Application::ActionListScreen"
};C.ALZ={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ALZ;},
_className:"Application::ActionListFilterScreen"};C.APu={II:null,IO:null,Bc:null
,My:A.jV,Init:function(aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8K,B.A97],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Device
).Am,B.Fj,B.Fn],0);},De:function(E){C.IG.De.call(this,E);this.IO.L(E);},DY:function(
G){C.IG.DY.call(this,G);var Azm=A._GetAutoObject(A.Device.Device).Am.Filter;if(!
Azm||A._GetAutoObject(A.Device.Helper).Arc(Azm))this.II.Z(false);else this.II.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.AwU(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$Q)+A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());else this.AwU(A$R);},AwU:function(E){if(this.My===E)return;this.My=E;
this.IO.R(E);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Ap._Init.call(
this.II={I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APu;this.HP.H(Bqr);this.DS.H(Bqs);this.II.H(
Bqt);this.II.L(A.jb.Text);this.IO.H(A$S);this.IO.Hh(2);this.IO.KS(true);this.IO.
A6(0x12);this.IO.R(A$T);this.Bc.DC(Ays);this.Bc.DL(Ayt);this.Bc.L(A.jb.Bc);this.
J(this.II,0);this.J(this.IO,0);this.J(this.Bc,0);this.II.Aw(A.aaL(A.ach.Aex));this.
IO.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IG;this.
II._Done();this.IO._Done();this.Bc._Done();C.IG._Done.call(this);},_ReInit:function(
){C.IG._ReInit.call(this);this.II._ReInit();this.IO._ReInit();this.Bc._ReInit();
this.IO.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsF={Text:null,Bk:function(aSize){C.OY.Bk.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xa);else this.Text.R(this.AC.FX((F=this.Q,F[1].call(F[0]
))));var Iy=((Ae&0x40)===0x40);if(Iy)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OY._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsF;this.Text.R(Rl);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OY;this.Text._Done();C.OY.
_Done.call(this);},_ReInit:function(){C.OY._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OY._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aq$={C8:null,Bk:function(aSize){C.OY.Bk.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACN(this.AC.DU((F=this.Q,F[1].call(F[
0])))));this.C8.Cv(this.AC.ACP(this.AC.DU((F=this.Q,F[1].call(F[0])))));}var Iy=((
Ae&0x40)===0x40);if(Iy)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OY._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq$;this.H(AIz);this.C8.H(A$P);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OY;this.C8._Done();C.OY._Done.call(this);},_ReInit:function(){C.OY._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OY._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuV={VN:null,DirectionOfCountingToString:null,Aed:null,Dn:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return-1;return aIndex;
},FX:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return A.jV;return this.
DirectionOfCountingToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(
){return this.Dn()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VN)(F=
this.VN,F[2].call(F[0],E));},ACN:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn(
)))return null;return this.Aed.AsG(aIndex);},ACP:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dn()))return-1;return this.Aed.AsH(aIndex);},A1z:function(G){var F;
if(!!this.VN)this.Q=(F=this.VN,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},AeW:function(E){if(A.aaZ(this.VN,E))return;if(!!this.VN)A.z$([this
,this.A1z],this.VN,0);this.VN=E;if(!!this.VN)A.zX([this,this.A1z],this.VN,0);A.pe([
this,this.A1z],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aed._Init.call(this.Aed={I:this},0);this.__proto__=C.AuV;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aed._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aed._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aed)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMk={Hp:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdU:null,Dn:function(){return 4;},C4:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Dn()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.ByW((F=this.Ez,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Bqu+aIndex.toFixed());}return A7;},FX:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dn()))return A.jV;return this.AnimalIdGenerationMethodToString.
BH(this.C4(aIndex));},DU:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bqv+A7.toFixed());}return aIndex;},HH:function(){return this.
Dn()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hp)(F=this.Hp,F[2].
call(F[0],E));},ACN:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return null;
return this.AdU.AsG(this.C4(aIndex));},ACP:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dn()))return-1;return this.AdU.AsH(this.C4(aIndex));},A04:function(G){var F;
if(!!this.Hp)this.Q=(F=this.Hp,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},Blh:function(E){if(A.aaZ(this.Hp,E))return;if(!!this.Hp)A.z$([this
,this.A04],this.Hp,0);this.Hp=E;if(!!this.Hp)A.zX([this,this.A04],this.Hp,0);A.pe([
this,this.A04],this);},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af7],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af7],this.Ez
,0);A.pe([this,this.Af7],this);},Af7:function(G){A.pe([this,this.BxM],this);},ByW:
function(L3){var Rn=0;switch(L3){case 0:Rn=2;break;case 1:Rn=3;break;case 2:Rn=4;
break;default:throw new Error(Bqw+L3.toFixed());}return Rn;},BxM:function(G){var
BdX=this.C4(this.DU(this.Q));if(this.Q!==BdX)this.As(BdX);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdU._Init.call(this.
AdU={I:this},0);this.__proto__=C.AMk;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdU._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdU._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGy={FE:null,AaZ:null,Q:null,Fh:null,E8:null,HC:null,Wn:null,AW:null,HZ:null
,Kj:null,A8:0,AM:0,Alp:0,Init:function(aArg){var B;A.zX([this,this.Bd$],[B=A._GetAutoObject(
A.Device.Device),B.Anl,B.AoA],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hf){this.AW.FH(A.jb.CK);this.HC.CT(A.jb.CK);this.Wn.CT(A.jb.CK);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FH(A.jb.CS);this.HC.
CT(A.jb.CS);this.Wn.CT(A.jb.CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hf){this.AW.FH(A.jb.CK);this.HC.CT(A.jb.CK);this.Wn.CT(A.jb.CK);}else{
this.AW.FH(A.jb.CS);this.HC.CT(A.jb.CS);this.Wn.CT(A.jb.CS);}this.Bb(null);}},IW:
function(G){C.Eg.IW.call(this,G);if(!this.A8)this.FP(this);else this.G_(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;
default:this.FE.AkO((F=this.N,F[1].call(F[0])));}},FP:function(G){this.Ew(1);},G_:
function(G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8&&!!this.N)this.FE.Ajx((
F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A8h())this.Bb(
this.AW);else this.Bb(this.Wn);if(!this.AM)this.AW.SJ(2);else this.AW.SJ(7);}break;
default:throw new Error(Atc+this.A8.toFixed());}this.DJ(this);this.An();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ol:function(G){this.AA1(2);},MU:function(G){this.AA1(
7);},AA1:function(Gw){var B;var Azn=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azn){var AAe=(A.Core.P.isPrototypeOf(B=this.QD(Azn,Gw,0x15))?B:null);if(!!AAe){
this.Bb(AAe);return true;}}return false;},Ao0:function(G){A.pe([this,this.Bd$],this
);},A3V:function(G){var B;var F;if(!this.HZ.Hp){this.Kj.AeW(null);return;}switch((
F=this.HZ.Hp,F[1].call(F[0]))){case 0:case 1:this.Kj.AeW(null);break;case 3:this.
Kj.AeW([B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZY]);break;case 2:this.Kj.AeW([
B=A._GetAutoObject(A.Device.Device),B.ASm,B.AZZ]);break;case 4:case 5:this.Kj.AeW([
B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIL]);break;default:throw new Error(
Bqx+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}},Bd$:function(G){var F;if(!this.
HZ.Hp)return;A.pe([this,this.A3V],this);var AtR=false;switch((F=this.HZ.Hp,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtR=true;this.AW.A_n(-1);}break;case 0:
case 1:{AtR=false;this.AW.A_n(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayk+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}this.AW.Ar(AtR);this.
HC.Ar(AtR);this.HC.Z(AtR);if(((F=this.HZ.Hp,F[1].call(F[0]))!==this.Alp)||(AtR===
false)){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.Helper).AMi((F=this.HZ.
Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bi7((F=this.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kq(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kq(0);this.Alp=(
F=this.HZ.Hp,F[1].call(F[0]));},A9f:function(E){var B;if(this.AaZ===E)return;if(
!!this.AaZ){A.z$([this,this.Ao0],[B=this.AaZ,B.Wt,B.JP],0);A.z$([this,this.Ao0],[
B=this.AaZ,B.Anp,B.Nd],0);A.z$([this,this.Ao0],[B=this.AaZ,B.Ary,B.Q2],0);this.HZ.
Uj(null);}this.AaZ=E;if(!!E){A.zX([this,this.Ao0],[B=this.AaZ,B.Wt,B.JP],0);A.zX([
this,this.Ao0],[B=this.AaZ,B.Anp,B.Nd],0);A.zX([this,this.Ao0],[B=this.AaZ,B.Ary
,B.Q2],0);this.HZ.Uj([B=this.AaZ,B.Wt,B.JP]);}if(!!E)A.pe([this,this.Ao0],this);
},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BM._Init.call(this.Fh={I:this},0);A.Core.BM._Init.call(this.E8={I:this},0
);C.Aq$._Init.call(this.HC={I:this},0);C.Aq$._Init.call(this.Wn={I:this},0);C.AvK.
_Init.call(this.AW={I:this},0);C.AMk._Init.call(this.HZ={I:this},0);C.AuV._Init.
call(this.Kj={I:this},0);this.__proto__=C.AGy;var B;this.H(UT);this.V.Ar(false);
this.V.R(As6);this.V.L(A.jb.Bm);this.Fh.Filter=6;this.E8.Filter=7;this.HC.H(Bqy);
this.HC.Ar(false);this.Wn.H(Bqz);this.AW.H(BqA);this.AW.Ar(false);this.J(this.HC
,0);this.J(this.Wn,0);this.J(this.AW,0);this.FE=A._NewObject(C.Aep,0);this.Fh.BN=[
this,this.Ol];this.E8.BN=[this,this.MU];this.HC.CI(this.Kj);this.HC.As([B=this.Kj
,B.B7,B.B8]);this.Wn.CI(this.HZ);this.Wn.As([B=this.HZ,B.B7,B.B8]);this.AW.As([this
,this.Ue,this.By]);this.HZ.Blh([B=A._GetAutoObject(A.Device.Device),B.Anl,B.AoA]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fh._Done();this.E8.
_Done();this.HC._Done();this.Wn._Done();this.AW._Done();this.HZ._Done();this.Kj.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fh._ReInit();this.E8._ReInit();this.HC._ReInit();this.Wn._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Kj._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GZ={AzH:null,Fh:null,E8:null,GW:null,
FW:null,EN:null,M4:0,AMY:0,ABS:0,Uq:0,A$z:-1,AMX:false,Init:function(aArg){A.pe([
this,this.A0r],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EN.Z(this.
AMX);this.EN.H(A.wC(this.Yq(this.ABS).M,this.Yq((this.ABS+this.AMY)-1).M));},Ol:
function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var A1h=this.BfJ(2);if(A1h===
false)D5.NH=true;},MU:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var
A1h=this.BfJ(7);if(A1h===false)D5.NH=true;},BfJ:function(Gw){var B;var DW=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bc1(DW,Gw,true);if(!!DW){this.Bb(DW);this.
AzH=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adp:function(
G){A.ab5("%s",Alc);},GP:function(s){this.Adp(s);},FH:function(E){if(this.M4===E)
return;this.M4=E;this.FW.CT(E);this.GW.CT(E);},SJ:function(Gw){var B;switch(Gw){
case 2:this.Bb(this.GW);break;case 7:this.Bb(this.FW);break;default:A.ab5("%s%e"
,BqB,Gw);}this.AzH=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LO:function(G){},A0r:
function(s){this.LO(s);},AEP:function(E){if(this.AMX===E)return;this.AMX=E;this.
An();},A9l:function(E){if(this.AMY===E)return;this.AMY=E;this.An();},A9k:function(
E){if(this.ABS===E)return;this.ABS=E;this.An();},Yq:function(Hw){var B5=null;switch(
Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.GW;break;default:A.ab5("%s",AhW
);}return B5;},Kq:function(E){if(this.Uq===E)return;this.Uq=E;this.Ami();},Ami:function(
){A.ab5("%s",Alc);},Bc1:function(AcX,Gw,LI){var B;if(!!AcX){var Be;if(LI)Be=0x11;
else Be=0x0;switch(Gw){case 2:AcX=(C.DF.isPrototypeOf(B=this.AqL(AcX,Be))?B:null
);break;case 7:AcX=(C.DF.isPrototypeOf(B=this.TL(AcX,Be))?B:null);break;default:
throw new Error(BqC);}}return AcX;},A_n:function(E){if(this.A$z===E)return;this.
A$z=E;var DW=this.FW;var A1H;while(!!DW){A1H=!!E;DW.Ar(A1H);DW.Z(A1H);if(DW===this.
AzH)this.Bb(DW);DW=this.Bc1(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BM._Init.call(this.Fh={I:this},0);A.Core.BM._Init.
call(this.E8={I:this},0);C.DF._Init.call(this.GW={I:this},0);C.DF._Init.call(this.
FW={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.GZ;this.
H(BqD);this.Fh.Filter=6;this.E8.Filter=7;this.M4=A.jb.CK;this.GW.H(E4);this.FW.H(
A$U);this.EN.H(BqE);this.EN.Ng(2);this.EN.L(A.jb.E1);this.J(this.GW,0);this.J(this.
FW,0);this.J(this.EN,0);this.Fh.BN=[this,this.Ol];this.Fh.D1=[this,this.Ol];this.
E8.BN=[this,this.MU];this.E8.D1=[this,this.MU];this.AzH=this.FW;this.GW.Di=[this
,this.GP];this.FW.Di=[this,this.GP];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fh._Done();this.E8._Done();this.GW._Done();this.FW._Done();this.EN.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fh._ReInit();this.E8._ReInit();this.GW._ReInit();this.FW._ReInit();this.EN.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzH)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQY={Dx:null,CU:null,Ct:null
,FH:function(E){if(this.M4===E)return;C.HI.FH.call(this,E);this.Ct.CT(E);this.CU.
CT(E);this.Dx.CT(E);},Yq:function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.
FW;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;
case 4:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQY;this.
H(BqF);this.GW.H(Atb);this.Dx.H(A$V);this.CU.H(A$W);this.Ct.H(A$X);this.FW.H(BqG
);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Dx.Di=[this,this.
GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(){this.
__proto__=C.HI;this.Dx._Done();this.CU._Done();this.Ct._Done();C.HI._Done.call(this
);},_ReInit:function(){C.HI._ReInit.call(this);this.Dx._ReInit();this.CU._ReInit(
);this.Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVp={Q_:null,AcG:null,AVo:0,CF:function(G){this.AcG.Ar(true);},E3:function(G
){this.AcG.Ar(false);},Bna:function(E){if(this.AVo===E)return;this.AVo=E;this.Q_.
R((((A.aaR(A.acf.AVn)+Aah)+E.toFixed())+BqH)+A.aaR(A.acf.Lb));},Bk5:function(){return this.
AVo;},BAH:function(G){A._GetAutoObject(C.A$).Cg(3);A._GetAutoObject(A.Device.Device
).Ant(1);},_Init:function(aArg){C.X0._Init.call(this,aArg);C.CH._Init.call(this.
Q_={I:this},0);A.acl.Gh._Init.call(this.AcG={I:this},0);this.__proto__=C.AVp;this.
AeI.H(BqI);this.Uy.R(A.jV);this.Q_.H(BqJ);this.Q_.R(A.aaR(A.acf.AVn)+A$Y);this.Q_.
L(A.jb.Text);this.AcG.HM(1);this.AcG.Fl(5000);this.AcG.B2=100;this.J(this.Q_,0);
this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.Q_.Cu(A.aaL(A.fl.Bh));
this.AcG.Sw=[this,this.BAH];this.AcG.Q=[this,this.Bk5,this.Bna];},_Done:function(
){this.__proto__=C.X0;this.Q_._Done();this.AcG._Done();C.X0._Done.call(this);},_ReInit:
function(){C.X0._ReInit.call(this);this.Q_._ReInit();this.AcG._ReInit();this.Q_.
R(A.aaR(A.acf.AVn)+A$Y);this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.
Q_.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X0._Mark.call(this,D);if((B=this.
Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARQ={K4:null,Lk:null,BdM:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K4)this.K4.Ev(this
);C.Wp.Ev.call(this,G);},Af_:function(G){var B;if(!!this.K4)this.K4.Af_(this);C.
Wp.Af_.call(this,G);},CF:function(G){var B;if(!this.BdM){this.BdM=true;A.pe([this
,this.A3p],this);}else if(!this.K4){this.K4=A._NewObject(C.ARS,0);this.K4.A9z([this
,this.AAR]);this.LO(this);this.K4.LO(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wp.CF.call(this,G);}else C.Wp.CF.call(this,G
);},Ap4:function(G){var B;if(!!this.K4)this.K4.Ap4(this);},AAR:function(G){var B;
var F;this.LO(this);this.K4.LO(this);A.pe([this,this.AcQ],this);var Bdn=this.LU;
this.AeT(A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVm(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdn);if(Bdn)A._GetAutoObject(
A.Device.Helper).W.Q2(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SB(A._GetAutoObject(A.Device.Helper).AMi((F=this.Dh.HZ.Hp,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JD(this.C$);},A3p:function(
G){A._GetAutoObject(C.A$).Cg(79);},_Init:function(aArg){C.Wp._Init.call(this,aArg
);C.Q9._Init.call(this.Lk={I:this},0);this.__proto__=C.ARQ;var B;this.Lk.H(AhT);
this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACh));this.J(this.Lk,-9);this.JU(this.Gi,-
1);this.Lk.Gn([this,this.D_,this.GN]);this.Lk.As([B=A._GetAutoObject(A.Device.Helper
).W,B.ASv,B.AnB]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wp;this.Lk.
_Done();C.Wp._Done.call(this);},_ReInit:function(){C.Wp._ReInit.call(this);this.
Lk._ReInit();this.Lk.T(A.aaR(A.acf.ACh));},_Mark:function(D){var B;C.Wp._Mark.call(
this,D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADG={AgF:null,AgG:null,NK:null,NJ:null,ET:null,FV:null,Eo:null,Dx:null,CU:null,Ct:
null,FH:function(E){if(this.M4===E)return;C.Lg.FH.call(this,E);this.Ct.CT(E);this.
CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgG.CT(E);this.AgF.CT(E);},Yq:function(Hw){var B5=null;switch(Hw){
case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case
3:B5=this.Dx;break;case 4:B5=this.Eo;break;case 5:B5=this.FV;break;case 6:B5=this.
ET;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgG;break;
case 10:B5=this.AgF;break;case 11:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;
},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.AgF={I:this
},0);C.DF._Init.call(this.AgG={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FV={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADG;this.H(BqK);this.GW.H(AIA);this.AgF.H(Ayu);this.AgG.H(
AZF);this.NK.H(AZG);this.NJ.H(AZH);this.ET.H(AZI);this.FV.H(AZJ);this.Eo.H(AZK);
this.Dx.H(A$Z);this.CU.H(AZL);this.Ct.H(BqL);this.FW.H(BqM);this.J(this.AgF,-2);
this.J(this.AgG,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ET,-2);this.
J(this.FV,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.
Ct,-2);this.AgF.Di=[this,this.GP];this.AgG.Di=[this,this.GP];this.NK.Di=[this,this.
GP];this.NJ.Di=[this,this.GP];this.ET.Di=[this,this.GP];this.FV.Di=[this,this.GP
];this.Eo.Di=[this,this.GP];this.Dx.Di=[this,this.GP];this.CU.Di=[this,this.GP];
this.Ct.Di=[this,this.GP];},_Done:function(){this.__proto__=C.Lg;this.AgF._Done(
);this.AgG._Done();this.NK._Done();this.NJ._Done();this.ET._Done();this.FV._Done(
);this.Eo._Done();this.Dx._Done();this.CU._Done();this.Ct._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.AgF._ReInit();this.AgG._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ET._ReInit();this.FV._ReInit();this.Eo.
_ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(
D){var B;C.Lg._Mark.call(this,D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HI={Q:null,AM:0,Ai:function(Ae){C.GZ.Ai.call(this
,Ae);this.Ami();},Adp:function(G){var B;var F;var Iw=A.jV;var B5=this.GW;while(!
!B5){if(B5.Ey>0)Iw=Iw+B5.Ey.toFixed();else Iw=Iw+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TL(B5,0x11))?B:null);}var BQ=this.AM;this.By(A.wz(Iw,-1,
10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LO:function(G){},Ami:function(){var B;var F;if(!!this.Q){var DW=this.FW;
var Adx=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A7>0){DW.LZ(A7%
10);A7=(A7/10)|0;}else if(Adx>0)DW.LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=
this.AqL(DW,0x11))?B:null);Adx=Adx-1;}}},C2:function(G){var F;if(!!this.Q)this.By((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},By:function(E){if(this.AM===E)return;this.AM=E;this.
An();},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.HI;},_Mark:
function(D){var B;C.GZ._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lg={AM:0,Q:null
,Ai:function(Ae){C.GZ.Ai.call(this,Ae);this.Ami();},Adp:function(G){var B;var F;
var Iw=A.jV;var B5=this.GW;while(!!B5){if(B5.Ey>0)Iw=Iw+B5.Ey.toFixed();else Iw=
Iw+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TL(B5,0x11))?B:null);
}var BQ=this.AM;this.By(A.ab0(Iw,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LO:function(G){},Ami:function(){var B;
var F;if(!!this.Q){var DW=this.FW;var Adx=this.Uq;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A7>0){DW.LZ((A7%10)|0);A7=Math.trunc(A7/10);}else if(Adx>0)DW.
LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.AqL(DW,0x11))?B:null);Adx=Adx-
1;}}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},By:function(
E){if(this.AM===E)return;this.AM=E;this.An();},_Init:function(aArg){C.GZ._Init.call(
this,aArg);this.__proto__=C.Lg;},_Mark:function(D){var B;C.GZ._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dn:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvK={Eo:null,Dx:null,CU:null,Ct:null,FH:function(E){if(this.M4===E)return;C.
HI.FH.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);},Yq:
function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.
Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;
case 5:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(
this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={
I:this},0);this.__proto__=C.AvK;this.H(Ayd);this.GW.H(AHF);this.Eo.H(AHG);this.Dx.
H(AHH);this.CU.H(AHI);this.Ct.H(AHJ);this.FW.H(AHK);this.EN.H(A$0);this.J(this.Eo
,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Eo.Di=[this,this.
GP];this.Dx.Di=[this,this.GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP
];},_Done:function(){this.__proto__=C.HI;this.Eo._Done();this.Dx._Done();this.CU.
_Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.
call(this);this.Eo._ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit(
);},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Eo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUw={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bok(0);this.AttributeSet.Bol(1);this.AttributeSet.Bom(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);var Iy=((
Ae&0x40)===0x40);var GA=this.Bo.Bw;var FM=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FM=
A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);this.
AttributeSet.Ahe(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahe(A.jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahe(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.
AmZ);this.V.L(A.jb.Bm);this.AttributeSet.Ahe(A.jb.Bm);}else{this.Background.L(FM
);this.V.L(GQ);this.AttributeSet.Ahe(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;this.
Apg=Iy;},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(A.acg.AuI.isPrototypeOf(
B=this.Dy.Ch)?B:null);Cz.A9h(this.AttributeSet);Cz.A6(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByP(this.AC.FX(Gc)));else Cz.R(Xa);Cz.H(A.abK(Cz.M,[this.Dy.V_,(B=this.
Dy.M)[3]-B[1]]));},ByP:function(Bxb){var AAB=Bxb;AAB=A._GetAutoObject(A.Device.Helper
).Nj(AAB,BqN,BqO);AAB=A._GetAutoObject(A.Device.Helper).Nj(AAB,BqP,BqQ);return BqR+
AAB;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUw;this.Dy.H(BqS);this.Dy.Ju(2);
this.Dy.NZ(A.acg.AuI);this.AttributeSet.Ahe(this.V.AQ);this.AttributeSet.Bl4(A.aaL(
A.fl.AOz));this.AttributeSet.A9J(A.aaL(A.fl.Ak));this.AttributeSet.Ahh(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9J(A.aaL(A.fl.Ak));this.AttributeSet.Ahh(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asv._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.AC8);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dn:function(){return 14;},C4:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},FX:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BH(aIndex
);},DU:function(A7){return A7;},HH:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OR={FE:null,EnumToCodeset:
null,Js:null,A8:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A8===1){
if(this.Hf){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}},By:function(E){C.BW.By.call(this,E);var BzI=this.
EnumToCodeset.AmA(this.Number);var BdW=this.AC.C4(this.AM);if(BzI!==BdW){this.AFp(
this.EnumToCodeset.Aeg(BdW));A.abo([this,this.ASw,this.AFp],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[
this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(
A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:
this.FE.AkO((F=this.N,F[1].call(F[0])));}},FP:function(G){this.Ew(1);},G_:function(
G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8)this.FE.Ajx((F=this.N,F[1].call(
F[0])));this.A8=EO;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1U();this.An();},AFp:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqT()>E)E=this.EnumToCodeset.
AqT();if(this.EnumToCodeset.HH()<E)E=this.EnumToCodeset.HH();}this.Number=E;var BQ=
this.AM;if(!!this.EnumToCodeset){var ByF=this.EnumToCodeset.AmA(E);this.By(this.
AC.DU(ByF));if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C4(this.AM)));A.abo(this.Q,0);}}},Anu:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U8:function(G){this.Ew(this.A8+1);},A1U:function(){A.ab5(
"%s",BqT);},ASw:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BM._Init.call(this.Js={I:this},0);this.__proto__=C.OR;this.
Js.Filter=1;this.FE=A._NewObject(C.Aep,0);this.Js.BN=[this,this.U8];},_Done:function(
){this.__proto__=C.BW;this.Js._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Js._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeP={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACJ);},By:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rf(this.AM));this.
An();},AaI:function(G){A.pe([this,this.Af6],this);},AaH:function(G){A.pe([this,this.
Af6],this);},AlW:function(G){A.pe([this,this.Af6],this);},Af6:function(G){if((!this.
Ig||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeP;this.Text.AZ(0x3F
);this.Text.H(As0);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARJ={GF:0,C7:null,AW:null,E7:null,
I5:null,CountryToString:null,K$:0,L9:false,Init:function(aArg){A.zX([this,this.MG
],[this,this.Sx,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I5.Z(this.
Afj);this.AW.FH(this.LS);this.E7.CT(this.LS);this.I5.CT(this.LS);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(this.CountryToString.BH(this.K$));(F=this.N,
F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.
A8;this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>this.RE)this.A8=this.RE;if((
this.A8===1)&&!this.Afj)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GF)this.Lo(0);}break;case 1:this.Bb(this.I5);break;case 2:this.Bb(this.E7);break;
case 3:{this.Bb(this.AW);if(!this.GF||(Tk>0))this.AW.SJ(2);else this.AW.SJ(7);}break;
default:throw new Error(Atc+this.A8.toFixed());}C.Ek.Ew.call(this,this.A8);},Apn:
function(G){this.I5.Uj(this.Ez);},AaI:function(G){var F;this.AW.A9k((F=this.AF,F[
1].call(F[0])));},AaH:function(G){var F;this.AW.A9l((F=this.A1,F[1].call(F[0])));
},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sy(A._GetAutoObject(
A.Device.Helper).Se(E,0,12));this.Lo(A._GetAutoObject(A.Device.Converter).ZZ(E));
this.L9=false;if(!!E)this.AW.Kq(12);else this.AW.Kq(0);this.An();},AlW:function(
G){A.pe([this,this.Af6],this);},FP:function(G){var F;if(!this.AM){var BQ=this.AM;
this.By(A._GetAutoObject(A.Device.Helper).ACX());if(this.AM!==BQ){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjM:function(){return this.
GF;},AjO:function(){return 999999999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sx,this.Lo],0
);},Sy:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbZ,this.Sy],0);},Vj:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abm(this.GF,12,10
);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af6:function(G){var F;if((!this.Ig||
!this.A1)||!this.AF)return;if(!(F=this.Ig,F[1].call(F[0])))this.AW.AEP(true);else
this.AW.AEP(false);},Sx:function(){return this.K$;},AbZ:function(){return this.GF;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C7._Init.call(this.C7={I:this
},0);C.ADG._Init.call(this.AW={I:this},0);C.AsF._Init.call(this.E7={I:this},0);C.
I5._Init.call(this.I5={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARJ;var B;this.RE=3;this.AW.H(BqU);this.E7.H(A$1);this.
I5.H(A$2);this.J(this.AW,0);this.J(this.E7,0);this.J(this.I5,0);this.C7.AEV([this
,this.Sx,this.Lo]);this.AW.As([this,this.AbZ,this.Sy]);this.E7.CI(this.C7);this.
E7.As([B=this.C7,B.B7,B.B8]);this.I5.A9C([B=A._GetAutoObject(A.Device.Device),B.
Av8,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done(
);this.AW._Done();this.E7._Done();this.I5._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.E7._ReInit();this.I5._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARI={GF:0,C7:null,AW:null,YD:null,Kn:null,E7:null,I5:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pt:0,K$:0,L9:false,Init:function(aArg){A.
zX([this,this.MG],[this,this.PM,this.EB],0);A.zX([this,this.MG],[this,this.Sx,this.
Lo],0);A.zX([this,this.MG],[this,this.Ann,this.Ahi],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I5.Z(this.Afj);this.AW.FH(this.LS);this.YD.FH(this.LS);this.Kn.
FH(this.LS);this.E7.CT(this.LS);this.I5.CT(this.LS);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this
,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.
N,F[1].call(F[0])).CV(this.CountryToString.BH(this.K$));(F=this.N,F[1].call(F[0]
)).Cl=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGH)+A.aaR(A.acf.Colon))+Aah)+A.aaR(A.
acf.Bg9));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGH)+A.aaR(A.
acf.Colon))+Aah)+A.aaR(A.acf.Boq));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGH)+A.aaR(A.acf.Colon))+Aah)+A.aaR(A.acf.Bh3));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGH)+A.aaR(A.acf.Colon))+Aah)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cl=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0]
)).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0
])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu)+Ax5)+this.GermanStateToString.Lt(
A._GetAutoObject(A.Device.Converter).ACM(this.Pt)));(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[
1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.A8;if(EO<
0)EO=0;else if(EO>this.RE)EO=this.RE;if((EO===1)&&!this.Afj)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GF&&!this.AnimalType)&&!this.Pt)this.Lo(0);}break;case
1:this.Bb(this.I5);break;case 2:this.Bb(this.E7);break;case 3:if(!Tk)A.pe([this,
this.BAV],this);else this.Bb(this.YD);break;case 4:this.Bb(this.Kn);break;case 5:
if(((Tk===4)&&!this.Pt)&&!this.GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>
0))this.AW.SJ(2);else this.AW.SJ(7);}break;default:throw new Error(Atc+EO.toFixed(
));}this.A8=EO;C.Ek.Ew.call(this,this.A8);},By:function(E){if(this.AM===E)return;
this.AM=E;this.L9=true;this.Sy(A._GetAutoObject(A.Device.Helper).Se(E,0,8));this.
Ahi(A._GetAutoObject(A.Device.Helper).Se(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Se(E,10,2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=
false;if(!!this.AM){this.YD.Kq(2);this.Kn.Kq(2);this.AW.Kq(8);}else{this.YD.Kq(0
);this.Kn.Kq(0);this.AW.Kq(0);}this.An();},Apn:function(G){this.I5.Uj(this.Ez);}
,AaI:function(G){var F;this.AW.A9k((F=this.AF,F[1].call(F[0])));},AaH:function(G
){var F;this.AW.A9l((F=this.A1,F[1].call(F[0])));},AlW:function(G){A.pe([this,this.
Af6],this);},FP:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(
A.Device.Helper).ACX());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RE);},AjM:function(){return this.
GF;},AjO:function(){return 99999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sx,this.Lo],0
);},Sy:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbZ,this.Sy],0);},Vj:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pt,2,10))+A.abm(this.GF,8,10);var BQ=this.AM;this.By(A.ab0(aString
,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af6:function(G){var F;if((!this.Ig||!this.A1)||!this.AF)return;if(!(F=this.
Ig,F[1].call(F[0])))this.AW.AEP(true);else this.AW.AEP(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L9===false)A.pe([this,this.
Vj],this);A.abo([this,this.PM,this.EB],0);},Ahi:function(E){if(this.Pt===E)return;
this.Pt=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Ann,this.
Ahi],0);},BAV:function(G){var F;if(!!this.JH){var H$=(F=this.JH,F[1].call(F[0]));
var A05=0;switch(H$){case 0:case 1:A05=0;break;case 2:A05=1;break;default:A.ab5(
"%s%e",Alb,H$);}this.EB(A05);}if(!this.Pt)this.Ew(4);else this.Ew(5);},Sx:function(
){return this.K$;},AbZ:function(){return this.GF;},PM:function(){return this.AnimalType;
},Ann:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.AQZ._Init.call(this.AW={I:this},0);C.AvJ.
_Init.call(this.YD={I:this},0);C.AvJ._Init.call(this.Kn={I:this},0);C.AsF._Init.
call(this.E7={I:this},0);C.I5._Init.call(this.I5={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARI;var B;this.RE=5;this.AW.H(
BqV);this.YD.H(BqW);this.YD.EV(2);this.Kn.H(BqX);this.Kn.EV(16);this.E7.H(A$1);this.
I5.H(A$2);this.J(this.AW,0);this.J(this.YD,0);this.J(this.Kn,0);this.J(this.E7,0
);this.J(this.I5,0);this.C7.AEV([this,this.Sx,this.Lo]);this.AW.As([this,this.AbZ
,this.Sy]);this.YD.As([this,this.PM,this.EB]);this.Kn.As([this,this.Ann,this.Ahi
]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.I5.A9C([B=A._GetAutoObject(
A.Device.Device),B.Av8,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C7._Done();this.AW._Done();this.YD._Done();this.Kn._Done();this.E7._Done(
);this.I5._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.YD._ReInit();this.Kn._ReInit();this.E7._ReInit();this.I5.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awh:null,OE:null,
Q:null,Ez:null,A1:null,AF:null,Ig:null,N:null,JH:null,Fh:null,E8:null,ACJ:0,LS:0
,A8:0,RE:0,Afj:true,Init:function(aArg){A.pe([this,this.LO],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},Bl6:function(E){if(this.
ACJ===E)return;this.ACJ=E;this.An();},Ww:function(E){if(this.LS===E)return;this.
LS=E;this.An();},DJ:function(G){A.ab5("%s",Alc);},MG:function(s){this.DJ(s);},Ew:
function(EO){A.pe([this,this.MG],this);A.pe(this.Awh,this);if(!EO)A.pe(this.OE,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},By:function(
E){A.ab5("%s",Aoz);},Ol:function(G){if(this.A8>1)this.Ew(this.A8-1);},MU:function(
G){if((this.A8>0)&&(this.A8<this.RE))this.Ew(this.A8+1);},Uj:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.A0i],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.A0i],this.Ez,0);A.pe([this,this.A0i],this);},Apn:function(G){},A0i:
function(s){this.Apn(s);},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0m],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0m],E,0);if(!
!E)A.pe([this,this.A0m],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0o],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0o],E,0);if(
!!E)A.pe([this,this.A0o],this);},AaI:function(G){},A0o:function(s){this.AaI(s);}
,AaH:function(G){},A0m:function(s){this.AaH(s);},Uh:function(E){if(A.aaZ(this.Ig
,E))return;if(!!this.Ig)A.z$([this,this.A0l],this.Ig,0);this.Ig=E;if(!!E)A.zX([this
,this.A0l],E,0);if(!!E)A.pe([this,this.A0l],this);},AlW:function(G){},A0l:function(
s){this.AlW(s);},FP:function(G){A.ab5("%s",A$3);},BF5:function(s){this.FP(s);},G_:
function(G){this.Ew(0);},AjM:function(){A.ab5("%s",Aoz);return 0;},AjO:function(
){A.ab5("%s",Aoz);return 0;},LO:function(G){},Ans:function(E){if(A.aaZ(this.JH,E
))return;if(!!this.JH)A.z$([this,this.AoZ],this.JH,0);this.JH=E;if(!!E)A.zX([this
,this.AoZ],this.JH,0);A.pe([this,this.AoZ],this);},AoZ:function(G){},AE8:function(
E){if(A.aa0(this.OE,E))return;this.OE=E;},AFB:function(E){if(this.Afj===E)return;
this.Afj=E;this.An();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BM._Init.call(this.Fh={I:this},0);A.Core.BM._Init.call(this.E8={I:this},0);this.
__proto__=C.Ek;this.H(As0);this.ACJ=A.jb.Text;this.LS=A.jb.CS;this.Fh.Filter=6;this.
E8.Filter=7;this.Fh.BN=[this,this.Ol];this.E8.BN=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fh._Done();this.E8._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fh._ReInit(
);this.E8._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OE)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ig)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JH)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q9={AM:0,Dp:null,FE:
null,OE:null,Ez:null,A1:null,AF:null,Ig:null,Q:null,JH:null,AEc:-1,Afj:true,AN4:
false,ATS:false,Ash:true,Init:function(aArg){A.pe([this,this.ABk],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hf){this.Dp.
Ww(A.jb.CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.Ww(A.jb.
CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.Dp.Ww(
A.jb.CK);else this.Dp.Ww(A.jb.CS);this.Dp.Bl6(this.V.AQ);}},IW:function(G){C.Eg.
IW.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FP(this);else this.G_(this
);},Gn:function(E){C.Eg.Gn.call(this,E);if(!!this.Dp)this.Dp.N=E;},Uj:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Apn],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Apn],this.Ez,0);A.pe([this,this.Apn],this);},Apn:function(
G){if(!!this.Dp)this.Dp.Uj(this.Ez);},OL:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OL(E);},PN:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PN(E);},Uh:function(E){if(A.aaZ(this.Ig,E))return;
this.Ig=E;if(!!this.Dp)this.Dp.Uh(E);},BBr:function(G){var AAj=0;if(!!this.Dp){AAj=
this.Dp.A8;this.Dp.N=null;this.HN(this.Dp);}switch(this.AEc){case 0:this.Dp=A._NewObject(
C.AeP,0);break;case 1:this.Dp=A._NewObject(C.ARJ,0);break;case 2:this.Dp=A._NewObject(
C.ARI,0);break;case 3:this.Dp=A._NewObject(C.ATU,0);break;case 4:this.Dp=A._NewObject(
C.ATT,0);break;case 5:this.Dp=A._NewObject(C.ARK,0);break;default:throw new Error(
BqY+this.AEc.toFixed());}this.J(this.Dp,0);this.Dp.Ans(this.JH);this.Dp.H(BqZ);this.
Dp.N=this.N;this.Dp.Uj(this.Ez);this.Dp.Awh=[this,this.Awh];this.Dp.As([this,this.
Ue,this.By]);this.Dp.Uh(this.Ig);this.Dp.OL(this.A1);this.Dp.PN(this.AF);this.Dp.
AE8(this.OE);this.Dp.AFB(this.Afj);if(AAj>0)this.Dp.Ew(AAj);this.Bb(this.Dp);this.
An();},FP:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FE.Ajx((F=this.
N,F[1].call(F[0])));else this.FE=A._NewObject(C.Aep,0);this.Dp.FP(this);}},G_:function(
G){var B;if(!!this.Dp)this.Dp.G_(this);},AjM:function(){if(!this.Dp)return 0;return this.
Dp.AjM();},AjO:function(){if(!this.Dp)return 0;return this.Dp.AjO();},C2:function(
G){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABk],this);},BmJ:function(
E){if(this.AEc===E)return;this.AEc=E;A.pe([this,this.BBr],this);},Ar0:function(E
){if(this.Ash===E)return;this.Ash=E;A.pe([this,this.ABk],this);},ABk:function(G){
var Apy;if(this.Ash){if(this.AN4)Apy=5;else Apy=0;}else if(this.ATS){if(A._GetAutoObject(
A.Device.Converter).ZZ(this.AM)===10)Apy=4;else Apy=3;}else if(A._GetAutoObject(
A.Device.Converter).ZZ(this.AM)===10)Apy=2;else Apy=1;this.BmJ(Apy);},Awh:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FE.AkO((F=this.N,F[1].call(F[
0])));this.An();},Ans:function(E){if(A.aaZ(this.JH,E))return;if(!!this.JH)A.z$([
this,this.AoZ],this.JH,0);this.JH=E;if(!!E)A.zX([this,this.AoZ],this.JH,0);A.pe([
this,this.AoZ],this);},AoZ:function(G){if(!!this.Dp)this.Dp.Ans(this.JH);},A94:function(
E){if(this.ATS===E)return;this.ATS=E;A.pe([this,this.ABk],this);},BlC:function(E
){if(this.AN4===E)return;this.AN4=E;A.pe([this,this.ABk],this);},AE8:function(E){
if(A.aa0(this.OE,E))return;this.OE=E;if(!!this.Dp)this.Dp.AE8(E);},AFB:function(
E){if(this.Afj===E)return;this.Afj=E;if(!!this.Dp)this.Dp.AFB(E);},Ue:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q9;this.H(UT);this.V.R(As6);this.V.L(A.jb.Bm);this.FE=A._NewObject(C.Aep,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ig
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQZ={ET:null,FV:null,Eo:null,Dx:null,CU:null
,Ct:null,FH:function(E){if(this.M4===E)return;C.Lg.FH.call(this,E);this.Ct.CT(E);
this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);},Yq:function(
Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;case 5:B5=
this.FV;break;case 6:B5=this.ET;break;case 7:B5=this.GW;break;default:A.ab5("%s"
,AhW);}return B5;},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FV={I:this},0);C.DF._Init.call(this.Eo={
I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQZ;this.H(Bq0);this.GW.
H(AIA);this.ET.H(Ayu);this.FV.H(AZF);this.Eo.H(AZG);this.Dx.H(AZH);this.CU.H(AZI
);this.Ct.H(AZJ);this.FW.H(AZK);this.EN.H(A$0);this.J(this.ET,-2);this.J(this.FV
,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);
this.ET.Di=[this,this.GP];this.FV.Di=[this,this.GP];this.Eo.Di=[this,this.GP];this.
Dx.Di=[this,this.GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:
function(){this.__proto__=C.Lg;this.ET._Done();this.FV._Done();this.Eo._Done();this.
Dx._Done();this.CU._Done();this.Ct._Done();C.Lg._Done.call(this);},_ReInit:function(
){C.Lg._ReInit.call(this);this.ET._ReInit();this.FV._ReInit();this.Eo._ReInit();
this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D){var B;
C.Lg._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvJ={Q:null,GW:null,FW:null,EN:null,Im:null,Il:null,M4:0,Uq:0,AM:0,FZ:99,Init:
function(aArg){A.pe([this,this.LO],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EN.Z(false);this.EN.H(A.wC(this.Yq(0).M,this.Yq(-1).M));var Iy=((Ae&
0x40)===0x40);if(Iy){this.BfK(A.jb.AV);this.BfL(A.jb.Bm);}else{this.BfK(this.M4);
this.BfL(A.jb.Text);}this.Ami();},FH:function(E){if(this.M4===E)return;this.M4=E;
this.An();},LO:function(G){},Yq:function(Hw){var B5=null;switch(Hw){case-1:case 0:
B5=this.FW;break;case 1:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;},Kq:
function(E){if(this.Uq===E)return;this.Uq=E;this.Ami();},Ami:function(){var B;var
F;if(!!this.Q){var DW=this.FW;var Adx=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A7>0){DW.LZ(A7%10);A7=(A7/10)|0;}else if(Adx>0)DW.LZ(0);else DW.LZ(-
1);DW=(C.Ey.isPrototypeOf(B=this.AqL(DW,0x11))?B:null);Adx=Adx-1;}}},Af9:function(
G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af8:function(G){var F;var BQ=this.
AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},By:function(E){if(E<0)E=0;if(E>this.FZ)E=this.FZ;if(this.AM===E)return;
this.AM=E;this.An();},EV:function(E){if(this.FZ===E)return;this.FZ=E;this.An();}
,BfK:function(aColor){this.FW.CT(aColor);this.GW.CT(aColor);},BfL:function(aColor
){this.FW.Zt(aColor);this.GW.Zt(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.GW={I:this},0);C.Ey._Init.call(this.FW={I:this},
0);A.acg.BU._Init.call(this.EN={I:this},0);A.Core.BM._Init.call(this.Im={I:this}
,0);A.Core.BM._Init.call(this.Il={I:this},0);this.__proto__=C.AvJ;this.H(Bq1);this.
M4=A.jb.CK;this.GW.H(AIA);this.FW.H(Ayu);this.EN.H(Ayu);this.EN.Ng(2);this.EN.L(
A.jb.E1);this.Im.Filter=4;this.Il.Filter=5;this.J(this.GW,0);this.J(this.FW,0);this.
J(this.EN,0);this.Im.BN=[this,this.Af9];this.Im.D1=[this,this.Af9];this.Il.BN=[this
,this.Af8];this.Il.D1=[this,this.Af8];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.GW._Done();this.FW._Done();this.EN._Done();this.Im._Done();this.Il.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.GW._ReInit();this.FW._ReInit();this.EN._ReInit();this.Im._ReInit();this.Il.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={Agz:
null,Background:null,Text:null,Ey:-1,MZ:0,AmK:0,Aqq:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Rl);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.AmK);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.An();},CT:function(E){
if(this.MZ===E)return;this.MZ=E;this.An();},AeU:function(E){if(this.Aqq===E)return;
this.Aqq=E;this.Agz.Ar(E);if(E===false)this.Text.Z(true);},Zt:function(E){if(this.
AmK===E)return;this.AmK=E;this.An();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TE._Init.call(this.Agz={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(Atb);this.MZ=A.jb.CK;this.Agz.Fl(750);this.Agz.Uk(750);this.Agz.Akz(750);
this.AmK=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Atb);this.Text.AZ(0x3
);this.Text.H(Atb);this.Text.R(Rl);this.J(this.Background,0);this.J(this.Text,0);
this.Agz.Q=[B=this.Text,B.Fk,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.Agz._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Agz._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Agz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fv={Y:null,I1:null,AOa:A.jV,ARY:A.jV,Ta:0,AJH:0,A1K:false,A1f:false,Init:function(
aArg){},CF:function(G){var B;C.AB.CF.call(this,G);A.zX([this,this.ABf],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);A.zX([this,this.MG],[B=A._GetAutoObject(A.Device.
Device).Am,B.Fj,B.Fn],0);A.pe([this,this.ABf],this);A.pe([this,this.MG],this);},
E3:function(G){var B;C.AB.E3.call(this,G);A.z$([this,this.ABf],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);},Bxz:function(L6){A._GetAutoObject(A.Device.Helper
).HL(L6);this.Ap5(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap5:function(L1,AcU){A.ab5("%s",Alc);},Ve:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.Byx],this);else if(!!At&&(At.PopupState===5)){this.A1f=true;this.Ev(this
);}},Byx:function(G){if(this.Ta>0){this.A1f=false;this.Adk(this);this.A_s(0);}},
Ais:function(G){if((this.AJH+1)<this.Ta)this.A_s(this.AJH+1);else A.aaS([this,this.
Bv9],this);},Bv_:function(s){this.Ais(s);},A_s:function(E){this.AJH=E;if(this.A1f===
false){this.Bxz(E);A.aaS([this,this.Bv_],this);var XH=(this.AJH/this.Ta)*100;A._GetAutoObject(
A.Device.Device).A9(49,true,A.abk(XH,0,0),0,[this,this.Ve]);}},Aas:function(G){A.
_GetAutoObject(A.Device.Device).A9(49,false,Bq2,0,[this,this.Ve]);this.A1K=true;
A.pe([this,this.ALk],this);},Bv9:function(s){this.Aas(s);},Adk:function(G){this.
I1.Z(true);this.A1K=false;this.ALk(this);},BF0:function(s){this.Adk(s);},AAy:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6r();A._GetAutoObject(A.Device.Device
).Am.Bl(Be);},Ev:function(G){A._GetAutoObject(C.A$).Fu();},A3i:function(G){A._GetAutoObject(
C.A$).Cg(84);},DJ:function(G){this.N.Z(true);this.N.CY(A.aaL(A.ach.E2));this.N.CB=[
this,this.Ev];this.N.Cs(A.aaL(A.ach.ADw));if(!A._GetAutoObject(A.Device.Device).
Am.Filter||A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(A.Device.Device
).Am.Filter)){this.N.Ck=null;this.N.I4.Dr(100);}else{this.N.Ck=[this,this.AAy];this.
N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aex));this.N.Cl=[this,this.A3i];},MG:function(
s){this.DJ(s);},ABf:function(G){this.Ta=A._GetAutoObject(A.Device.Device).Am.Ca(
);if(this.Ta>0)A._GetAutoObject(A.Device.Device).A9(49,true,UW,0,[this,this.Ve]);
else{this.Adk(this);this.Aas(this);}},Akx:function(E){if(this.AOa===E)return;this.
AOa=E;A.pe([this,this.ALk],this);},ALk:function(G){var B;if(this.A1K===false){this.
I1.R(A.jV);return;}var Apa;if(!A._GetAutoObject(A.Device.Device).Am.Ca()){var Ade=
A._GetAutoObject(A.Device.Device).Am.Filter;A.z$([this,this.ABf],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);this.AAy(this);if(!A._GetAutoObject(A.Device.Device
).Am.QE()||!Ade)Apa=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACS(A._GetAutoObject(A.Device.Device).Am.Filter)===1)Apa=A.aaR(
A.acf.AN6);else Apa=A.aaR(A.acf.AN5);A._GetAutoObject(A.Device.Device).Am.Bl(Ade
);A.zX([this,this.ABf],[B=A._GetAutoObject(A.Device.Device).Am,B.Fj,B.Fn],0);}else
Apa=this.ARY;Apa=Apa+(AZM+this.AOa);this.I1.R(Apa);},Ae4:function(E){if(this.ARY===
E)return;this.ARY=E;A.pe([this,this.ALk],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkP._Init.call(this.I1={
I:this},0);this.__proto__=C.Fv;this.Dq(C.Abu);this.Y.H(E$);this.Y.JO(1);this.I1.
H(E$);this.J(this.Y,0);this.J(this.I1,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I1._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A61={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A61;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvL={K0:null,MS:null,AY:0,Yg:function(){this.K0=null;this.MS=null;this.AY=0;
},Or:function(A7){var Hb;Hb=A._NewObject(C.A61,0);Hb.A4=A7;if(!this.K0){this.K0=
Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}},AmS:
function(){var B;var RH=0;var Oe=this.K0;while(!!Oe){RH+=Oe.A4;Oe=Oe.Ah;}return RH;
},AjN:function(){if(!this.AY)return 0;return this.AmS()/this.AY;},AqV:function(){
var B;if(!this.AY)return 0;var A0$=this.AjN();var Adb=0;var Oe=this.K0;while(!!Oe
){Adb+=Math.pow(Oe.A4-A0$,2);Oe=Oe.Ah;}Adb/=this.AY;Adb=Math.sqrt(Adb);return Adb;
},_Init:function(aArg){this.__proto__=C.AvL;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOb={F$:null,Aet:null,Yn:null,C5:null,I1:null,
CP:function(){this.A4f(this);},Init:function(aArg){A.zV([this,this.A4f],A._GetAutoObject(
A.Device.Device).Pl,0);A.pe([this,this.A4f],this);},Ev:function(G){A._GetAutoObject(
C.A$).Fu();},A4f:function(G){this.Yn.Cf(-1);this.I1.Z(!this.F$.AX.Ca());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.F$._Init.call(this.F$={I:this},0);C.
Aet._Init.call(this.Aet={I:this},0);C.Yn._Init.call(this.Yn={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkP._Init.call(this.I1={I:this},0);this.__proto__=
C.AOb;this.N.Z(true);this.Dq(C.AO9);this.F$.H(As9);this.F$.NZ(C.AmJ);this.Aet.H(
IR);this.Yn.H(As1);this.C5.DC(Bq3);this.C5.DL(Bq4);this.C5.Ng(3);this.C5.L(A.jb.
Text);this.I1.H(Aoh);this.I1.R((A.aaR(A.acf.A7K)+AZM)+A.aaR(A.acf.A55));this.J(this.
F$,0);this.J(this.Aet,0);this.J(this.Yn,0);this.J(this.C5,0);this.J(this.I1,0);this.
N.CB=[this,this.Ev];this.N.CY(A.aaL(A.ach.E2));this.F$.Zs(A._GetAutoObject(A.Device.
Device).Pl);this.Yn.Zs(A._GetAutoObject(A.Device.Device).Pl);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.F$._Done();this.Aet._Done();this.Yn._Done();
this.C5._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.F$._ReInit();this.Aet._ReInit();this.Yn._ReInit();this.C5.
_ReInit();this.I1._ReInit();this.I1.R((A.aaR(A.acf.A7K)+AZM)+A.aaR(A.acf.A55));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.F$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOe={At6:null,At5:null,At8:null,At7:null,At_:null,At9:null,Aua:null,At$:null
,AaK:null,Yv:null,Abl:null,Abk:null,RatedAttribute:0,Init:function(aArg){this.SA(
2);},DE:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SA(3);break;case 1:this.SA(2);break;case
4:this.SA(1);break;case 3:this.SA(4);break;default:this.SA(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SA(1);break;case 1:this.SA(4);break;case 4:this.
SA(3);break;case 3:this.SA(2);break;default:this.SA(0);}break;default:D5.NH=true;
}},Ap5:function(L1,AcU){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcU,true);Fs.
CW(HV);var AAQ=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAQ.Initialize(
3,5,0,true);Fs.CW(AAQ);L1.Bl(Fs);},Ais:function(G){var Ap3=0;var A3B=A._GetAutoObject(
A.Device.Device).Bt.Ca();var B1=A._NewObject(A.Device.Rating,0);while(Ap3<A3B){B1.
EM(Ap3,A._GetAutoObject(A.Device.Device).Bt);this.Bc4(B1,0);var BBM=A._GetAutoObject(
A.Device.Helper).ZQ(2);this.Bc4(B1,BBM);Ap3++;}C.Fv.Ais.call(this,G);},Aas:function(
G){A.pe([this,this.BcH],this);C.Fv.Aas.call(this,G);},Adk:function(G){this.At6=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At5=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At8=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At_=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fv.Adk.
call(this,G);},DJ:function(G){C.Fv.DJ.call(this,G);this.N.ON(true);this.N.OO(true
);},Bc4:function(D3,BbF){if(!D3||(D3.Timestamp<BbF))return;if(!BbF){this.At6.Set(
D3.Appearance,this.At6.Get(D3.Appearance)+1);this.At8.Set(D3.Faeces,this.At8.Get(
D3.Faeces)+1);this.At_.Set(D3.Feed,this.At_.Get(D3.Feed)+1);this.Aua.Set(D3.Respiratory
,this.Aua.Get(D3.Respiratory)+1);}else{this.At5.Set(D3.Appearance,this.At5.Get(D3.
Appearance)+1);this.At7.Set(D3.Faeces,this.At7.Get(D3.Faeces)+1);this.At9.Set(D3.
Feed,this.At9.Get(D3.Feed)+1);this.At$.Set(D3.Respiratory,this.At$.Get(D3.Respiratory
)+1);}},SA:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yv.Ks(this.AaK.Lt(E));A.pe([this,this.BcH],this);},BcH:function(G){var AaL=null;
var AaM=null;switch(this.RatedAttribute){case 2:{AaL=this.At5;AaM=this.At6;}break;
case 4:{AaL=this.At7;AaM=this.At8;}break;case 1:{AaL=this.At9;AaM=this.At_;}break;
case 0:{AaL=A._NewObject(A.Device.Int32ArrayWrapper,0);AaM=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaL=this.At$;AaM=this.Aua;}break;default:throw new
Error(Bq5+this.RatedAttribute.toFixed());}var AGe=A._NewObject(A.acv.AUa,0);AGe.
Or(AaL.Get(3),A.jb.E1);AGe.Or(AaL.Get(2),A.jb.H6);AGe.Or(AaL.Get(1),A.jb.Gf);var
AGf=A._NewObject(A.acv.AUa,0);AGf.Or(AaM.Get(3),A.jb.E1);AGf.Or(AaM.Get(2),A.jb.
H6);AGf.Or(AaM.Get(1),A.jb.Gf);this.Abk.Ab8(AGe);this.Abl.Ab8(AGf);var A33=AaL.AmS(
)-AaL.Get(5);var Bfg=0;var Bfe=0;if(A33>0){Bfg=(AaL.Get(2)/A33)*100;Bfe=(AaL.Get(
1)/A33)*100;}var AK_=AaM.AmS()-AaM.Get(5);this.I1.Z(!AK_);var Bfh=0;var Bff=0;if(
AK_>0){Bfh=(AaM.Get(2)/AK_)*100;Bff=(AaM.Get(1)/AK_)*100;}this.Abk.A_q(A.abk(Bfg
,0,0)+AfA);this.Abk.A96(A.abk(Bfe,0,0)+AfA);this.Abl.A_q(A.abk(Bfh,0,0)+AfA);this.
Abl.A96(A.abk(Bff,0,0)+AfA);},_Init:function(aArg){C.Fv._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaK={I:this},0);C.NE._Init.call(this.
Yv={I:this},0);C.ACz._Init.call(this.Abl={I:this},0);C.ACz._Init.call(this.Abk={
I:this},0);this.__proto__=C.AOe;this.Dq(C.AO_);this.Akx(A.aaR(A.acf.A56));this.Ae4(
A.aaR(A.acf.Anj));this.Yv.H(IR);this.Yv.Aj(true);this.Yv.T(A.aaR(A.acf.Axj)+A.aaR(
A.acf.Colon));this.Yv.Bg(false);this.Yv.BmH(false);this.Abl.H(Bq6);this.Abl.T(A.
aaR(A.acf.AF1));this.Abk.H(Bq7);this.Abk.T(A.aaR(A.acf.A6_));this.I1.H(Aoh);this.
J(this.Yv,-1);this.J(this.Abl,-1);this.J(this.Abk,-1);this.At6=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At5=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At8=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At_=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At$=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fv;this.AaK._Done();this.Yv._Done();this.Abl._Done();this.Abk.
_Done();C.Fv._Done.call(this);},_ReInit:function(){C.Fv._ReInit.call(this);this.
AaK._ReInit();this.Yv._ReInit();this.Abl._ReInit();this.Abk._ReInit();this.Akx(A.
aaR(A.acf.A56));this.Ae4(A.aaR(A.acf.Anj));this.Yv.T(A.aaR(A.acf.Axj)+A.aaR(A.acf.
Colon));this.Abl.T(A.aaR(A.acf.AF1));this.Abk.T(A.aaR(A.acf.A6_));},_Mark:function(
D){var B;C.Fv._Mark.call(this,D);if((B=this.At6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.At_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aua)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
At$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOf={Aes:null,UJ:null,UK:null,Aer:null,UG:null,UH:null,AJJ:0,AJI:0,AJn:0,AJm:
0,Add:false,CP:function(){this.Aas(this);},Ap5:function(L1,AcU){if(!L1)return;var
Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcU,true);Fs.CW(HV);var AA8=A._NewObject(A.Device.Int32FilterCriterion
,0);AA8.Initialize(7,2,0,true);Fs.CW(AA8);L1.Bl(Fs);},Ais:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJJ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJI++;var Ap3=0;var A3B=A._GetAutoObject(
A.Device.Device).Bt.Ca();var At4;var ABq=0;while(Ap3<A3B){this.Add=true;At4=A._GetAutoObject(
A.Device.Device).Bt.I2(Ap3,9);if(At4===1)ABq=1;else if((At4===2)&&(ABq!==1))ABq=
2;Ap3++;}if(ABq===1)this.AJm++;else if(ABq===2)this.AJn++;C.Fv.Ais.call(this,G);
},Aas:function(G){var Bfc=0;var Bfd=0;if(this.Ta>0){Bfc=(this.AJJ/this.Ta)*100;Bfd=(
this.AJI/this.Ta)*100;}this.UJ.Ks(((((((A.abk(Bfc,0,0)+AIB)+this.AJJ.toFixed())+
CQ)+A.aaR(A.acf.AEi))+CQ)+this.Ta.toFixed())+O5);this.UK.Ks(((((((A.abk(Bfd,0,0)+
AIB)+this.AJI.toFixed())+CQ)+A.aaR(A.acf.AEi))+CQ)+this.Ta.toFixed())+O5);var Bfa=
0;var Bfb=0;if(this.Ta>0){Bfa=(this.AJn/this.Ta)*100;Bfb=(this.AJm/this.Ta)*100;
}this.UG.Ks(((((((A.abk(Bfa,0,0)+AIB)+this.AJn.toFixed())+CQ)+A.aaR(A.acf.AEi))+
CQ)+this.Ta.toFixed())+O5);this.UH.Ks(((((((A.abk(Bfb,0,0)+AIB)+this.AJm.toFixed(
))+CQ)+A.aaR(A.acf.AEi))+CQ)+this.Ta.toFixed())+O5);this.I1.Z(!this.Add);C.Fv.Aas.
call(this,G);},Adk:function(G){this.AJm=0;this.AJn=0;this.AJI=0;this.AJJ=0;this.
Add=false;C.Fv.Adk.call(this,G);},_Init:function(aArg){C.Fv._Init.call(this,aArg
);C.Agp._Init.call(this.Aes={I:this},0);C.Ajo._Init.call(this.UJ={I:this},0);C.Ajo.
_Init.call(this.UK={I:this},0);C.Agp._Init.call(this.Aer={I:this},0);C.Ajo._Init.
call(this.UG={I:this},0);C.Ajo._Init.call(this.UH={I:this},0);this.__proto__=C.AOf;
this.Dq(C.AO$);this.Akx(A.aaR(A.acf.A57));this.Ae4(A.aaR(A.acf.Arr));this.Aes.H(
IR);this.Aes.Aj(true);this.Aes.T(A.aaR(A.acf.A5$));this.Aes.Bg(false);this.UJ.H(
P7);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UJ.
Bg(true);this.UJ.AkC(2);this.UK.H(Aaf);this.UK.Aj(true);this.UK.T(A.aaR(A.acf.Avp
)+A.aaR(A.acf.Colon));this.UK.Bg(true);this.UK.AkC(1);this.Aer.H(Ald);this.Aer.Aj(
true);this.Aer.T(A.aaR(A.acf.A6a));this.Aer.Bg(false);this.UG.H(Aoq);this.UG.Aj(
true);this.UG.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UG.Bg(true);this.
UG.AkC(2);this.UH.H(As1);this.UH.Aj(true);this.UH.T(A.aaR(A.acf.Avp)+A.aaR(A.acf.
Colon));this.UH.Bg(true);this.UH.AkC(1);this.J(this.Aes,0);this.J(this.UJ,0);this.
J(this.UK,0);this.J(this.Aer,0);this.J(this.UG,0);this.J(this.UH,0);this.UJ.S(A.
aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fv;this.Aes._Done();this.UJ._Done(
);this.UK._Done();this.Aer._Done();this.UG._Done();this.UH._Done();C.Fv._Done.call(
this);},_ReInit:function(){C.Fv._ReInit.call(this);this.Aes._ReInit();this.UJ._ReInit(
);this.UK._ReInit();this.Aer._ReInit();this.UG._ReInit();this.UH._ReInit();this.
Akx(A.aaR(A.acf.A57));this.Ae4(A.aaR(A.acf.Arr));this.Aes.T(A.aaR(A.acf.A5$));this.
UJ.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UK.T(A.aaR(A.acf.Avp)+A.aaR(
A.acf.Colon));this.Aer.T(A.aaR(A.acf.A6a));this.UG.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UH.T(A.aaR(A.acf.Avp)+A.aaR(A.acf.Colon));this.UJ.S(A.aaL(A.fl.
Ak));this.UK.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fv._Mark.call(this,D);if((B=this.Aes)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqK={K8:null
,Ajd:null,Aje:null,Amj:null,Aby:null,WY:null,Abv:null,SY:null,Abw:null,SZ:null,Abz:
null,WZ:null,Ay:null,Ac_:0,AAk:0,Apt:0,A2l:0,Bdy:0,CP:function(){this.Aas(this);
},DE:function(G){switch(this.Cr.CO){case 4:{if(this.I1.Fk())return;var Qs=this.Y.
Br[1]+80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null,null);}break;case 5:{if(this.
I1.Fk())return;var Qs=this.Y.Br[1]-80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null
,null);}break;default:C.Fv.DE.call(this,G);}},Ap5:function(L1,AcU){if(!L1)return;
var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcU,true);Fs.CW(HV);var Ac6=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac6.Initialize(8,2,0,true);Fs.CW(Ac6);L1.Bl(Fs);},Ais:function(G){if(this.Bdo(
)){this.K8.Or(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Ard()){var Qe=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qe>0){var A1W=A._GetAutoObject(A.acj.DV).Alv(Qe,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajd.
Or(A1W);}}var A2E=A._GetAutoObject(A.Device.Device).Bt.Ca()-2;if(A2E>=0){var BzE=
A._GetAutoObject(A.Device.Device).Bt.ACU(A2E,8);var BzD=A._GetAutoObject(A.Device.
Device).Bt.HF(A2E,6);var Qe=A._GetAutoObject(A.Device.Helper).MN(BzD,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qe>0){var A1W=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzE)/Qe)|0;this.Aje.Or(A1W);}}if((A._GetAutoObject(
A.Device.Helper).W.Ard()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RK()<=180)){var ALv=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tl=A._GetAutoObject(A.Device.
Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAR=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALv/Tl);this.Amj.Or(BAR);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ac_++;this.Apt=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZQ(7)){this.AAk++;this.A2l=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bdy=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.Fv.Ais.call(
this,G);},Aas:function(G){var A4o=this.Ajd.AjN()|0;var A4q=this.Aje.AjN()|0;if(this.
Ac_>1)A._GetAutoObject(A.Device.Device).A9(56,true,this.Ac_.toFixed(),0,null);if(
this.Ac_===1)A._GetAutoObject(A.Device.Device).A9(53,true,this.Apt.toFixed(),0,null
);if(this.AAk>1)A._GetAutoObject(A.Device.Device).A9(52,true,this.AAk.toFixed(),
0,null);if(this.AAk===1)A._GetAutoObject(A.Device.Device).A9(57,true,(this.A2l.toFixed(
)+As5)+this.Bdy.toFixed(),0,null);if(this.K8.AY>0)this.WY.T(((((((A._GetAutoObject(
A.Device.Converter).AxU(this.K8.AjN()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxU(this.K8.AqV()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfY())+Ayw)+this.K8.AY.
toFixed())+O5);else this.WY.T(A.aaR(A.acf.Unknown));if(this.Ajd.AY>0)this.SY.T(((((((
A._GetAutoObject(A.Device.Converter).S3(A4o,2,true)+Ayv)+A._GetAutoObject(A.Device.
Converter).S3(this.Ajd.AqV()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).Aax())+Ayw
)+this.Ajd.AY.toFixed())+O5);else this.SY.T(A.aaR(A.acf.Unknown));if(this.Aje.AY>
0)this.SZ.T(((((((A._GetAutoObject(A.Device.Converter).S3(A4q,2,true)+Ayv)+A._GetAutoObject(
A.Device.Converter).S3(this.Aje.AqV()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).
Aax())+Ayw)+this.Aje.AY.toFixed())+O5);else this.SZ.T(A.aaR(A.acf.Unknown));if(this.
Amj.AY>0)this.WZ.T(((((((A.abk(this.Amj.AjN(),0,1)+Ayv)+A.abk(this.Amj.AqV(),0,1
))+CQ)+A.aaR(A.acf.Bhx))+Ayw)+this.Amj.AY.toFixed())+O5);else this.WZ.T(A.aaR(A.
acf.Unknown));var A4p=0;var A4r=0;var Add=false;if(this.K8.AY>0)Add=true;var H$=
0;if(!!A._GetAutoObject(A.Device.Device).Am.Filter){var AJ2=A._GetAutoObject(A.Device.
Device).Am.Filter.DQ(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ2)?AJ2:null))H$=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ2)?AJ2:null
).A4;}if(this.Ajd.AY>0){Add=true;A4p=A._GetAutoObject(A.Device.Converter).A$H(A4o
,H$);}if(this.Aje.AY>0){Add=true;A4r=A._GetAutoObject(A.Device.Converter).A$H(A4q
,H$);}this.SY.AkC(A4p);this.SZ.AkC(A4r);this.I1.Z(!Add);C.Fv.Aas.call(this,G);},
Adk:function(G){this.K8.Yg();this.Ajd.Yg();this.Aje.Yg();this.Amj.Yg();this.Ac_=
0;this.AAk=0;this.Apt=0;this.A2l=0;C.Fv.Adk.call(this,G);},Fe:function(G){var B;
this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},Bdo:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fv._Init.call(this,aArg);C.Agp._Init.call(this.Aby={I:
this},0);C.IC._Init.call(this.WY={I:this},0);C.Agp._Init.call(this.Abv={I:this},
0);C.Ajo._Init.call(this.SY={I:this},0);C.Agp._Init.call(this.Abw={I:this},0);C.
Ajo._Init.call(this.SZ={I:this},0);C.Agp._Init.call(this.Abz={I:this},0);C.IC._Init.
call(this.WZ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqK;
this.Dq(C.Avo);this.Akx(A.aaR(A.acf.A58));this.Ae4(A.aaR(A.acf.Akk));this.Aby.H(
AIx);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.A4Z));this.Aby.Bg(false);this.Aby.
Kq(5);this.WY.H(AZN);this.WY.Aj(true);this.WY.T(A.jV);this.WY.Bg(true);this.Abv.
H(As_);this.Abv.Aj(true);this.Abv.T(A.aaR(A.acf.ALU));this.Abv.Bg(false);this.Abv.
Kq(5);this.SY.H(As$);this.SY.Aj(true);this.SY.T(A.jV);this.SY.Bg(true);this.SY.Ks(
A.jV);this.Abw.H(Ata);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.Aus));this.Abw.Bg(
false);this.Abw.Kq(5);this.SZ.H(Bq8);this.SZ.Aj(true);this.SZ.T(A.jV);this.SZ.Bg(
true);this.SZ.Ks(A.jV);this.Abz.H(AZO);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.
A47));this.Abz.Bg(false);this.Abz.Kq(5);this.WZ.H(Aoy);this.WZ.Aj(true);this.WZ.
T(A.jV);this.WZ.Bg(true);this.Ay.H(Iq);this.J(this.Aby,-1);this.J(this.WY,-1);this.
J(this.Abv,-1);this.J(this.SY,-1);this.J(this.Abw,-1);this.J(this.SZ,-1);this.J(
this.Abz,-1);this.J(this.WZ,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fe];this.
K8=A._NewObject(C.AvL,0);this.Ajd=A._NewObject(C.AvL,0);this.Aje=A._NewObject(C.
AvL,0);this.WY.S(A.aaL(A.fl.Af));this.SY.S(A.aaL(A.fl.Ak));this.SZ.S(A.aaL(A.fl.
Ak));this.WZ.S(A.aaL(A.fl.Ak));this.Amj=A._NewObject(C.A6g,0);},_Done:function(){
this.__proto__=C.Fv;this.Aby._Done();this.WY._Done();this.Abv._Done();this.SY._Done(
);this.Abw._Done();this.SZ._Done();this.Abz._Done();this.WZ._Done();this.Ay._Done(
);C.Fv._Done.call(this);},_ReInit:function(){C.Fv._ReInit.call(this);this.Aby._ReInit(
);this.WY._ReInit();this.Abv._ReInit();this.SY._ReInit();this.Abw._ReInit();this.
SZ._ReInit();this.Abz._ReInit();this.WZ._ReInit();this.Ay._ReInit();this.Akx(A.aaR(
A.acf.A58));this.Ae4(A.aaR(A.acf.Akk));this.Aby.T(A.aaR(A.acf.A4Z));this.Abv.T(A.
aaR(A.acf.ALU));this.Abw.T(A.aaR(A.acf.Aus));this.Abz.T(A.aaR(A.acf.A47));this.WY.
S(A.aaL(A.fl.Af));this.SY.S(A.aaL(A.fl.Ak));this.SZ.S(A.aaL(A.fl.Ak));this.WZ.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fv._Mark.call(this,D);if((
B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajd)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amj)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abu={_Init:function(aArg){C.AjQ._Init.call(this,aArg);this.__proto__=C.Abu;this.
Dd.Aw(A.aaL(A.ach.ADs));},_className:"Application::HeaderEvaluationFilter"};C.Km={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DY:function(G){C.AjQ.DY.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdV(A._GetAutoObject(A.Device.
Device).Kg));},_Init:function(aArg){C.AjQ._Init.call(this,aArg);this.__proto__=C.
Km;},_ReInit:function(){C.AjQ._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avo={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DV).BcX());},_Init:
function(aArg){C.Abu._Init.call(this,aArg);this.__proto__=C.Avo;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO$={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.AbD));},_Init:function(aArg){C.Abu._Init.call(this,
aArg);this.__proto__=C.AO$;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO_={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.AmX));},_Init:function(aArg){
C.Abu._Init.call(this,aArg);this.__proto__=C.AO_;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO9={Sh:null,Dd:null,AP:null,CP:function(){this.Sh.R(A.aaR(A.acf.ANa));},De:
function(E){C.BR.De.call(this,E);this.Sh.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CH._Init.call(this.Sh={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO9;this.Sh.H(Bq9);this.Sh.R(A.aaR(A.acf.ANa));this.Sh.A6(0x11);this.Dd.H(Bq_);
this.AP.DC(Bq$);this.AP.DL(Bra);this.AP.L(A.jb.Bc);this.J(this.Sh,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sh.S(A.aaL(A.fl.Af));this.Sh.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AQh));},_Done:function(){this.__proto__=C.BR;this.Sh._Done();this.
Dd._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sh._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sh.R(A.aaR(
A.acf.ANa));this.Sh.S(A.aaL(A.fl.Af));this.Sh.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aet={TR:null,Aj0:
null,AjX:null,AjY:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TR={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);A.acg.Ap._Init.
call(this.AjX={I:this},0);A.acg.Ap._Init.call(this.AjY={I:this},0);this.__proto__=
C.Aet;this.TR.H(Brb);this.TR.R(A.aaR(A.acf.Year));this.TR.A6(0x11);this.TR.L(A.jb.
Text);this.Aj0.H(A$4);this.Aj0.L(A.jb.Text);this.AjX.H(Brc);this.AjX.L(A.jb.Text
);this.AjY.H(Brd);this.AjY.L(A.jb.Text);this.J(this.TR,0);this.J(this.Aj0,0);this.
J(this.AjX,0);this.J(this.AjY,0);this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(A.aaL(A.fl.
Ii));this.Aj0.Aw(A.aaL(A.ach.AQs));this.AjX.Aw(A.aaL(A.ach.AQr));this.AjY.Aw(A.aaL(
A.ach.AQz));},_Done:function(){this.__proto__=C.EA;this.TR._Done();this.Aj0._Done(
);this.AjX._Done();this.AjY._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TR._ReInit();this.Aj0._ReInit();this.AjX._ReInit();this.
AjY._ReInit();this.TR.R(A.aaR(A.acf.Year));this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(
A.aaL(A.fl.Ii));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmJ={Aju:null,AP:null
,A_:null,Ea:null,UD:null,SQ:null,Gp:null,XH:0,AtD:0,Alz:0,ABr:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SQ.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SQ.M[2]-1,0,this.SQ.M[
2]+1,aSize[1]]);this.UD.H([this.SQ.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UD.M[2]-1,0,this.UD.M[2]+1,aSize[1]]);this.Gp.H([this.UD.M[2],0,aSize[
0],aSize[1]]);this.Aju.H(this.Gp.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABr.toFixed());this.SQ.L(this.V.AQ);this.SQ.R(this.Alz.toFixed());this.UD.
L(this.V.AQ);this.UD.R(this.AtD.toFixed());var B1=this.BAQ(this.XH);this.Gp.L(A.
_GetAutoObject(A.acj.Assessment).Xv(B1));this.Aju.L(A._GetAutoObject(A.acj.Assessment
).Qj(B1));this.Gp.R(A.abk(this.XH,0,0)+AfA);},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;Ad=(this.AX.Ca()-Ad)-1;if(!!this.AX){this.Alz=this.AX.CE(Ad,1);this.AtD=
this.AX.CE(Ad,2);this.ABr=this.AX.CE(Ad,0);if(this.Alz>0)this.XH=(this.AtD/this.
Alz)*100;else this.XH=0;this.An();}},BAQ:function(XH){if(XH>=8)return 1;else if(
XH>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AK._Init.call(this.Aju={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UD={I:this},0);A.acg.Text._Init.call(this.SQ={I:this},0
);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.AmJ;this.Aju.H(Aon);
this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.H(Aon);this.Ea.L(A.jb.Bc);this.UD.
L(A.jb.Text);this.SQ.H(Aon);this.SQ.L(A.jb.Text);this.Gp.L(A.jb.Text);this.J(this.
Aju,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UD,0);this.
J(this.SQ,0);this.J(this.Gp,0);this.UD.S(A.aaL(A.fl.Af));this.SQ.S(A.aaL(A.fl.Af
));this.Gp.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Aju._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UD._Done(
);this.SQ._Done();this.Gp._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Aju._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UD._ReInit();this.SQ._ReInit();this.Gp._ReInit();this.UD.S(A.aaL(
A.fl.Af));this.SQ.S(A.aaL(A.fl.Af));this.Gp.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajo={
BT:null,AxP:A.jV,Rating:0,Ai:function(Ae){C.IC.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qj(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IC.S.call(this,E);if((E===A.aaL(A.fl.Kl))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ii))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Ks:function(E){if(this.AxP===E)return;this.AxP=E;this.
BT.R(E);},AkC:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajo;this.BT.AZ(0x34);this.BT.H(Aai);this.BT.I7(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IC;this.BT._Done();C.IC._Done.call(
this);},_ReInit:function(){C.IC._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IC._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACz={
N2:null,SE:null,V:null,AnM:null,AnL:null,Acf:null,Ace:null,DK:Lv,A$M:A.jV,A_K:A.
jV,Ab8:function(E){if(this.N2===E)return;this.N2=E;this.SE.Ab8(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_q:function(E){if(this.A$M===E
)return;this.A$M=E;this.Acf.R(E);},A96:function(E){if(this.A_K===E)return;this.A_K=
E;this.Ace.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SE._Init.
call(this.SE={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnM={I:this},0);A.acg.AK._Init.call(this.AnL={I:this},0);A.acg.Text._Init.
call(this.Acf={I:this},0);A.acg.Text._Init.call(this.Ace={I:this},0);this.__proto__=
C.ACz;this.H(Bre);this.SE.H(Brf);this.SE.Ar(false);this.SE.BmQ(360);this.SE.Bm0(
0.5);this.V.AZ(0x1D);this.V.H(W7);this.V.KS(true);this.V.R(Lv);this.V.L(A.jb.Text
);this.AnM.H(A$5);this.AnM.L(A.jb.H6);this.AnL.H(A$6);this.AnL.L(A.jb.Gf);this.Acf.
AZ(0x1D);this.Acf.H(A$5);this.Acf.L(A.jb.Text);this.Ace.AZ(0x1D);this.Ace.H(A$6);
this.Ace.L(A.jb.CS);this.J(this.SE,0);this.J(this.V,0);this.J(this.AnM,0);this.J(
this.AnL,0);this.J(this.Acf,0);this.J(this.Ace,0);this.SE.Bm1(A.aaL(A.acv.ATL));
this.V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SE._Done();this.V._Done();this.AnM.
_Done();this.AnL._Done();this.Acf._Done();this.Ace._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SE._ReInit();this.V._ReInit(
);this.AnM._ReInit();this.AnL._ReInit();this.Acf._ReInit();this.Ace._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkP={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkP;this.H(UU);this.Background.AZ(0x3F);this.Background.
H(UU);this.Background.L(A.jb.Bjq);this.Text.AZ(0x3F);this.Text.H(UU);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Ra={Ak0:null,NR:null,C8:null,AcD:null,JJ:null,TemperatureUnit:null,MD:null,PP:
null,Sd:null,Us:null,Lq:null,Jb:null,Z3:null,Z2:null,Sf:null,HB:null,AjF:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlH());
this.Us.R(A._GetAutoObject(A.acj.Temperature).AlH());this.Sf.Z(!A._GetAutoObject(
A.Device.Device).AmL);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An5();this.AxM(
);this.AcF();this.AxN();},IW:function(G){this.WM(this);},CF:function(G){var B;C.
AB.CF.call(this,G);A.zX([this,this.AKz],[B=A._GetAutoObject(A.Device.Device),B.AEu
,B.AIN],0);A.zX([this,this.AAz],[B=A._GetAutoObject(A.Device.Device),B.AEy,B.AIP
],0);A.zX([this,this.AAz],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ5],0);A.
zX([this,this.A20],[B=A._GetAutoObject(A.Device.Device),B.Aru,B.Atd],0);A.zX([this
,this.A2S],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIK],0);A._GetAutoObject(
A.Device.Device).AhF();if(A._GetAutoObject(A.Device.Device).AmL)A._GetAutoObject(
A.Device.Device).AeX(true);A._GetAutoObject(A.Device.Device).Axy();A.pe([this,this.
A2S],this);A.pe([this,this.AAz],this);A.pe([this,this.A20],this);},E3:function(G
){var B;A._GetAutoObject(A.Device.Device).AhF();A._GetAutoObject(A.Device.Device
).Un(false);A._GetAutoObject(A.Device.Device).Ae6(false);A._GetAutoObject(A.Device.
Device).AeX(false);A.z$([this,this.AKz],[B=A._GetAutoObject(A.Device.Device),B.AEu
,B.AIN],0);A.z$([this,this.AAz],[B=A._GetAutoObject(A.Device.Device),B.AEy,B.AIP
],0);A.z$([this,this.AAz],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ5],0);A.
z$([this,this.A20],[B=A._GetAutoObject(A.Device.Device),B.Aru,B.Atd],0);A.z$([this
,this.A2S],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIK],0);},AAz:function(G
){this.An();},An5:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C8.L(A.jb.Gf);this.JJ.L(this.C8.AQ);this.
MD.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C8.L(A.jb.AV);this.JJ.L(A.jb.Text);this.MD.L(this.JJ.AQ);this.TemperatureUnit.
L(this.JJ.AQ);this.HB.L(A.jb.Gf);}}},AxM:function(){this.Ak0.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JJ.R(A.aaR(A.acf.ADI));this.C8.Aw(A.aaL(A.ach.AvC));this.C8.Cv(0);
this.NR.Cv(0);}break;case 1:{this.AVq(A._GetAutoObject(A.Device.Device).Kv,false
);this.C8.Aw(A.aaL(A.ach.AvC));this.NR.Cv(0);}break;case 2:{this.Sd.R(A._GetAutoObject(
A.Device.Converter).AkZ(A._GetAutoObject(A.Device.Device).AF5));this.AVq(A._GetAutoObject(
A.Device.Device).Kv,false);this.C8.Aw(null);this.NR.Cv(1);this.AcD.Z(true);this.
PP.Z(true);this.Sd.Z(true);this.Us.Z(true);}break;case 3:{this.AUu();this.AVq(A.
_GetAutoObject(A.Device.Device).Kv,true);this.AcD.Z(false);this.PP.Z(false);this.
Sd.Z(false);this.Us.Z(false);}break;case 4:{this.JJ.R(A.aaR(A.acf.BjD));this.MD.
R(A.aaR(A.acu.Akj));this.C8.Aw(A.aaL(A.ach.AvE));this.C8.Cv(2);this.NR.Cv(0);}break;
default:A.ab5("%s%e",AHU,A._GetAutoObject(A.Device.Device).MeasureState);}},AcF:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Kv<=3240)||(A._GetAutoObject(A.Device.Device
).Kv>=5460))this.N.C6(null);else this.N.C6(A.aaL(A.ach.Aew));this.N.Cs(null);}break;
default:;}},AsB:function(G){A._GetAutoObject(C.A$).Fu();},WM:function(G){},A0g:function(
s){this.WM(s);},AkU:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAD(this);break;default:;}},A0f:function(s){this.AkU(s);},AVq:
function(AoN,Bzt){if(Bzt)this.Lq.L(A.jb.Bm);else this.Lq.L(A.jb.Gf);if(AoN<=3240
){this.MD.Z(false);this.TemperatureUnit.Z(false);this.Lq.Z(true);this.Lq.R(A.aaR(
A.acu.AVa));}else if(AoN>=5460){this.MD.Z(false);this.TemperatureUnit.Z(false);this.
Lq.Z(true);this.Lq.R(A.aaR(A.acu.Bpn));}else{this.MD.Z(true);this.TemperatureUnit.
Z(true);this.Lq.Z(false);this.MD.R(A._GetAutoObject(A.Device.Converter).AkZ(AoN)
);}},AxN:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Kv<=3240)||(A._GetAutoObject(A.Device.
Device).Kv>=5460))this.JJ.R(A.aaR(A.acf.ADI));else this.JJ.R(A.aaR(A.acf.BpZ));break;
default:;}},AxO:function(){},BpI:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z3.Ar(true);break;case 4:this.Z2.Ar(true);break;default:{
this.Z3.Ar(false);this.Z2.Ar(false);A._GetAutoObject(A.Device.Device).Ae6(false);
}}},AKz:function(G){this.An();this.AxO();this.BpI();this.BpG();},A20:function(G){
if(A._GetAutoObject(A.Device.Device).AmM){this.Sf.L(A.jb.H6);this.Sf.Cv(1);}else{
this.Sf.L(A.jb.Bm);this.Sf.Cv(0);}},BAD:function(G){if(!A._GetAutoObject(A.Device.
Device).AmL)A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.Device
).AmM);},BpG:function(){if(A._GetAutoObject(A.Device.Device).AmL){this.Sf.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeX(true);else A._GetAutoObject(A.Device.Device).AeX(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sf.Z(true);else this.Sf.Z(false);},AKB:function(
G){this.CF(this);},AUu:function(){A.ab5("%s",A$3);},A2S:function(G){if(A._GetAutoObject(
A.Device.Device).HB){this.JJ.H(Brg);this.MD.H(Brh);this.TemperatureUnit.H(Bri);}
else{this.JJ.H(Brj);this.MD.H(Brk);this.TemperatureUnit.H(Brl);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gh._Init.call(this.Ak0={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcD={I:this},0);A.acg.Text._Init.call(this.JJ={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MD={
I:this},0);A.acg.Text._Init.call(this.PP={I:this},0);A.acg.Text._Init.call(this.
Sd={I:this},0);A.acg.Text._Init.call(this.Us={I:this},0);C.CH._Init.call(this.Lq={
I:this},0);A.Device.TE._Init.call(this.Jb={I:this},0);A.Device.TE._Init.call(this.
Z3={I:this},0);A.Device.TE._Init.call(this.Z2={I:this},0);A.acg.Ap._Init.call(this.
Sf={I:this},0);C.CH._Init.call(this.HB={I:this},0);A.acl.TE._Init.call(this.AjF={
I:this},0);this.__proto__=C.Ra;var B;this.N.Z(true);this.Ak0.Fl(1000);this.Ak0.B2=
2;this.NR.H(Brm);this.NR.L(A.jb.CS);this.C8.H(Brn);this.C8.L(A.jb.AV);this.C8.Cv(
0);this.C8.Z(true);this.AcD.H(Bro);this.AcD.L(A.jb.Text);this.AcD.Z(false);this.
JJ.KS(true);this.JJ.R(A.aaR(A.acf.ADI));this.JJ.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MD.A6(0x14);this.MD.R(A.aaR(A.acu.
Akj));this.MD.L(A.jb.Text);this.PP.H(Brp);this.PP.R(A.aaR(A.acf.PP));this.PP.L(A.
jb.Text);this.PP.Z(false);this.Sd.H(Brq);this.Sd.A6(0x14);this.Sd.R(Brr);this.Sd.
L(A.jb.Text);this.Sd.Z(false);this.Us.H(Brs);this.Us.R(Brt);this.Us.L(A.jb.Text);
this.Us.Z(false);this.Lq.H(Bru);this.Lq.R(A.aaR(A.acu.AVa));this.Lq.A6(0x12);this.
Lq.L(A.jb.Gf);this.Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fl(4000);this.
Jb.Uk(0);this.Z3.B2=false;this.Z3.Cw=true;this.Z3.HM(2);this.Z3.Fl(400);this.Z3.
Uk(200);this.Z2.B2=false;this.Z2.Cw=true;this.Z2.HM(3);this.Z2.Fl(500);this.Z2.Uk(
250);this.Sf.H(Brv);this.HB.H(Brw);this.HB.Z(A._GetAutoObject(A.Device.Device).HB
);this.HB.R(A.aaR(A.acf.HB));this.HB.A6(0x12);this.HB.L(A.jb.Gf);this.AjF.Ar(A._GetAutoObject(
A.Device.Device).HB);this.AjF.Fl(500);this.AjF.Uk(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.AcD,0);this.J(this.JJ,0);this.J(this.TemperatureUnit,0);this.
J(this.MD,0);this.J(this.PP,0);this.J(this.Sd,0);this.J(this.Us,0);this.J(this.Lq
,0);this.J(this.Sf,0);this.J(this.HB,0);this.N.CB=[this,this.AsB];this.N.Ck=[this
,this.A0f];this.N.Cl=[this,this.A0g];this.N.CY(A.aaL(A.ach.Aev));this.Ak0.Q=[B=this.
C8,B.ASp,B.Cv];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.AvC));this.AcD.
Aw(A.aaL(A.ach.AQJ));this.JJ.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MD.S(A.aaL(A.fl.Aeo));this.PP.S(A.aaL(A.fl.Af));this.Sd.S(A.aaL(A.fl.EK
));this.Us.S(A.aaL(A.fl.EK));this.Lq.S(A.aaL(A.fl.Aeo));this.Lq.A2(A.aaL(A.fl.EK
));this.Lq.Cu(A.aaL(A.fl.Af));this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASG
,B.AZ$];this.Z3.Q=[B=A._GetAutoObject(A.Device.Device),B.AEz,B.AIQ];this.Z2.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEz,B.AIQ];this.Sf.Aw(A.aaL(A.ach.AqN));this.
HB.S(A.aaL(A.fl.EK));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ii));this.
AjF.Q=[B=this.HB,B.Fk,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak0._Done();this.NR._Done();this.C8._Done();this.AcD._Done();this.JJ._Done(
);this.TemperatureUnit._Done();this.MD._Done();this.PP._Done();this.Sd._Done();this.
Us._Done();this.Lq._Done();this.Jb._Done();this.Z3._Done();this.Z2._Done();this.
Sf._Done();this.HB._Done();this.AjF._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak0._ReInit();this.NR._ReInit();this.C8._ReInit();
this.AcD._ReInit();this.JJ._ReInit();this.TemperatureUnit._ReInit();this.MD._ReInit(
);this.PP._ReInit();this.Sd._ReInit();this.Us._ReInit();this.Lq._ReInit();this.Jb.
_ReInit();this.Z3._ReInit();this.Z2._ReInit();this.Sf._ReInit();this.HB._ReInit(
);this.AjF._ReInit();this.JJ.R(A.aaR(A.acf.ADI));this.MD.R(A.aaR(A.acu.Akj));this.
PP.R(A.aaR(A.acf.PP));this.Lq.R(A.aaR(A.acu.AVa));this.HB.R(A.aaR(A.acf.HB));this.
JJ.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MD.S(A.aaL(A.fl.
Aeo));this.PP.S(A.aaL(A.fl.Af));this.Sd.S(A.aaL(A.fl.EK));this.Us.S(A.aaL(A.fl.EK
));this.Lq.S(A.aaL(A.fl.Aeo));this.Lq.A2(A.aaL(A.fl.EK));this.Lq.Cu(A.aaL(A.fl.Af
));this.HB.S(A.aaL(A.fl.EK));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ii
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak0)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AU0={AcF:
function(){C.Ra.AcF.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvF));}break;default:;}},
WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Kv>3240)&&(A._GetAutoObject(A.Device.Device
).Kv<5460)){A._GetAutoObject(A.Device.Device).AhF();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKB(this);break;default:;}},AxN:
function(){C.Ra.AxN.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JJ.R(A.aaR(A.acf.BjE));break;default:;}},AxO:function(){C.Ra.AxO.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WA(16711680);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);
}},AUu:function(){this.C8.Aw(A.aaL(A.ach.AvE));this.C8.Cv(0);this.NR.Cv(0);},_Init:
function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.AU0;this.Dq(C.AO7);},
_className:"Application::TemperatureMeasurementScreen"};C.APa={Dd:null,II:null,NT:
null,AP:null,AgX:null,A_:null,De:function(E){C.BR.De.call(this,E);this.Dd.L(E);this.
II.L(E);this.NT.L(E);this.AgX.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.II={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.AgX={I:this},0);A.acg.C5._Init.call(this.A_={I:this},
0);this.__proto__=C.APa;this.Dd.H(Ayr);this.II.H(Aoo);this.NT.H(AHu);this.AP.DC(
A$7);this.AP.DL(A$8);this.AP.L(A.jb.Bc);this.AgX.H(Brx);this.AgX.L(A.jb.CS);this.
A_.DC(Bry);this.A_.DL(Brz);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.II,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.AgX,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADs));this.II.Aw(A.aaL(A.ach.Aex));this.NT.Aw(A.aaL(A.ach.Avx)
);this.AgX.Aw(A.aaL(A.ach.AQg));},_Done:function(){this.__proto__=C.BR;this.Dd._Done(
);this.II._Done();this.NT._Done();this.AP._Done();this.AgX._Done();this.A_._Done(
);C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Dd._ReInit(
);this.II._ReInit();this.NT._ReInit();this.AP._ReInit();this.AgX._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Eq:null,DS:null,AGq:
0,ANI:0,Init:function(aArg){A.zV([this,this.ALh],A._GetAutoObject(A.Device.Device
).Am,0);A.pe([this,this.ALh],this);},ALh:function(G){var Ad=this.AGq;if(Ad<0){this.
DS.Hi();this.DS.EB(this.ANI);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).Am.AmQ(Ad,14));this.DS.AEW(A._GetAutoObject(A.Device.Device).Am.I2(Ad,13));this.
DS.AeY(A._GetAutoObject(A.Device.Device).Am.H1(Ad,8));this.DS.Ul(A._GetAutoObject(
A.Device.Device).Am.H1(Ad,11));this.DS.Ae1(A._GetAutoObject(A.Device.Device).Am.
H1(Ad,12));this.DS.Ae3(A._GetAutoObject(A.Device.Device).Am.CE(Ad,5));},A99:function(
E){if(this.AGq===E)return;this.AGq=E;A.pe([this,this.ALh],this);},A9B:function(E
){if(this.ANI===E)return;this.ANI=E;A.pe([this,this.ALh],this);},A8N:function(){
return this.AGq;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Eq={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Eq.H(BrA);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11);this.Eq.L(A.jb.Text);this.
DS.H(AZP);this.J(this.Eq,0);this.J(this.DS,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.
A2(A.aaL(A.fl.Ak));this.Eq.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Eq._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Eq._ReInit();this.DS._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ak));this.Eq.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KO={AgE:null,Text:null,Afe:null,De:function(E
){C.BR.De.call(this,E);this.AgE.L(E);this.Text.L(E);this.Afe.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgE={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afe={I:this},0);this.__proto__=
C.KO;this.AgE.H(BrB);this.AgE.L(A.jb.Text);this.Text.H(BrC);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afe.H(BrD);this.Afe.L(A.jb.Text);this.
J(this.AgE,0);this.J(this.Text,0);this.J(this.Afe,0);this.AgE.Aw(A.aaL(A.ach.APc
));this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.Ii));},_Done:function(){this.
__proto__=C.BR;this.AgE._Done();this.Text._Done();this.Afe._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgE._ReInit();this.Text.
_ReInit();this.Afe._ReInit();this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.
Ii));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgE)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afe
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO5={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO5;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO7={_Init:function(
aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO7;this.JU(this.Afe,-2);this.
Afe.Aw(A.aaL(A.ach.AbD));},_className:"Application::HeaderDeviceTemperature"};C.
Yn={Ai:function(Ae){C.AmJ.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpo)+A.aaR(A.acf.Colon
));},Cf:function(Ad){var B;if(!this.AX)return;this.Alz=0;this.AtD=0;this.XH=0;if(
!!this.AX){var O;for(O=0;O<this.AX.Ca();O++){this.Alz+=this.AX.CE(O,1);this.AtD+=
this.AX.CE(O,2);}if(this.Alz>0)this.XH=(this.AtD/this.Alz)*100;this.An();}},_Init:
function(aArg){C.AmJ._Init.call(this,aArg);this.__proto__=C.Yn;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.
Ii));},_ReInit:function(){C.AmJ._ReInit.call(this);this.V.S(A.aaL(A.fl.Kl));this.
V.A2(A.aaL(A.fl.Ii));},_className:"Application::EvaluationLossesSumItem"};C.A6f={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6f;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6g={K0:null,MS:null,AY:0,Yg:function(){this.K0=null;this.MS=null;this.AY=0;
},Or:function(A7){var Hb;Hb=A._NewObject(C.A6f,0);Hb.A4=A7;if(!this.K0){this.K0=
Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}},AmS:
function(){var B;var RH=0;var Oe=this.K0;while(!!Oe){RH+=Oe.A4;Oe=Oe.Ah;}return RH;
},AjN:function(){if(!this.AY)return 0;return this.AmS()/this.AY;},AqV:function(){
var B;if(!this.AY)return 0;var A0$=this.AjN();var Adb=0;var Oe=this.K0;while(!!Oe
){Adb+=Math.pow(Oe.A4-A0$,2);Oe=Oe.Ah;}Adb/=this.AY;Adb=Math.sqrt(Adb);return Adb;
},_Init:function(aArg){this.__proto__=C.A6g;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agp={Background:null,V:null,KT:0,Uq:5,Hf:false
,Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.Hf)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hc.T.call(this,E);this.V.R(E);},Bg:
function(E){if(this.Hf===E)return;this.Hf=E;this.An();},Kq:function(E){if(this.Uq===
E)return;this.Uq=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agp;this.H(BF);this.Background.AZ(
0x3F);this.Background.H(BF);this.V.AZ(0x3F);this.V.H(AIq);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KT=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hc;this.Background._Done();this.V._Done();C.Hc._Done.call(this
);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN0={Wv:function(G){this.Agn();this.IY(A.aaR(
A.acf.AU$),[this,this.ATB],5);this.IY(A.aaR(A.acf.AU9),[this,this.ATA],7);this.IY(
A.aaR(A.acf.Calving),[this,this.Blk],11);this.IY(A.aaR(A.acf.AnY),[this,this.AwN
],2);this.IY(A.aaR(A.acf.AdQ),[this,this.AEK],1);this.IY(A.aaR(A.acf.Auv),[this,
this.AEE],0);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Anc
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},DE:function(G){}
,Abs:function(){return C.AM7;},Abt:function(){return C.APz;},Q6:function(G){A._GetAutoObject(
A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.Helper).ACO());},HO:function(G){
C.GU.HO.call(this,G);if(this.Akg()===false){this.N.Cs(A.aaL(A.ach.ADp));this.N.Ck=[
this,this.A5O];this.N.FI(A.jV);}this.N.ON(false);this.N.OO(false);},Aga:function(
){A._GetAutoObject(C.A$).Cg(62);},_Init:function(aArg){C.GU._Init.call(this,aArg
);this.__proto__=C.AN0;var B;this.Dq(C.AO8);this.Dz(A.aaR(A.acf.ARX));this.AwI([
B=A._GetAutoObject(A.Device.Device),B.A8g,B.BaM]);},_ReInit:function(){C.GU._ReInit.
call(this);this.Dz(A.aaR(A.acf.ARX));},_className:"Application::DryCowListScreen"
};C.ANZ={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ANZ;this.
Ld.Ar(false);this.Ld.Aj(false);this.Ld.Z(false);this.Jn.Ar(false);this.Jn.Aj(false
);this.Jn.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO8={DY:
function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdV(9));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AO8;}
,_className:"Application::HeaderDryCowListFilter"};C.Abp={Filter:null,LW:null,AGT:
A.jV,Ep:0,AFZ:1,Operator:1,Bk:function(aSize){C.Acn.Bk.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Acn.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.
pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator
));else this.To(null);},Nc:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this
,this.L$],this);},To:function(AH){if(!!AH){var A1O;if(this.AFZ!==1)A1O=this.AFZ;
else A1O=AH.Operator;this.T((this.AGT+CQ)+A._GetAutoObject(A.Device.Converter).A6b(
A1O));this.Zx(false);}else{this.T(this.AGT);this.Zx(true);}},OM:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.L$],this);},AFJ:function(E){
if(this.AGT===E)return;this.AGT=E;A.pe([this,this.L$],this);},A9X:function(E){if(
this.AFZ===E)return;this.AFZ=E;A.pe([this,this.L$],this);},_Init:function(aArg){
C.Acn._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abp;this.H(As0);this.AW.H(BrE);this.LW.H(AZQ);this.JU(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Acn;this.LW._Done();C.Acn._Done.call(this
);},_ReInit:function(){C.Acn._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Acn._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjH={LW:null,Ai:function(Ae){C.Qy.Ai.call(this,Ae);this.LW.L(this.V.AQ);},To:
function(AH){if(!!AH){this.H4.Cv(1);this.Zx(true);this.LW.A9O(false);}else{this.
H4.Cv(0);this.Zx(false);this.LW.A9O(true);}},_Init:function(aArg){C.Qy._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjH;this.I_=20;this.
LW.H(AZQ);this.J(this.LW,0);},_Done:function(){this.__proto__=C.Qy;this.LW._Done(
);C.Qy._Done.call(this);},_ReInit:function(){C.Qy._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.Qy._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABQ={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmR(this.TableId,this.Ep));},To:function(
AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H4.Cv(1);else this.H4.Cv(
0);},Kc:function(G){A.pe([this,this.L$],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kc],E,0);if(!!E)A.pe([this,this.Kc],this);},_Init:function(aArg){C.Qy._Init.call(
this,aArg);this.__proto__=C.ABQ;},_ReInit:function(){C.Qy._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.Qy._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APz={YS:null,I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YS={I:this},0);A.acg.Text._Init.call(this.I6={I:this},0);this.__proto__=
C.APz;this.A9B(1);this.YS.H(BrF);this.YS.KS(true);this.YS.R(A.aaR(A.acf.ADX));this.
YS.L(A.jb.Text);this.I6.H(S6);this.I6.R(((A.aaR(A.acf.RK)+A$9)+A.aaR(A.acf.A$L))+
O5);this.I6.L(A.jb.Text);this.J(this.YS,0);this.J(this.I6,0);this.YS.S(A.aaL(A.fl.
Ak));this.I6.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.YS._Done(
);this.I6._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YS._ReInit();this.I6._ReInit();this.YS.R(A.aaR(A.acf.ADX));this.I6.R(((A.
aaR(A.acf.RK)+A$9)+A.aaR(A.acf.A$L))+O5);this.YS.S(A.aaL(A.fl.Ak));this.I6.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM7={Mg:null,KP:null,AdP:null,AP:null,A_:null
,Xm:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mg.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KP.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KP.M[2]-1,0,this.
KP.M[2]+1,aSize[1]]);this.AdP.H([this.KP.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.AdP.L(this.V.AQ);if(!!this.Xm&&(
this.Xm!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qj(this.Xm));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Xm));}else this.Mg.L(this.Background.
AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=this.AX.
CE(Ad,1);var A2j=this.AX.CE(Ad,29);var Td=this.AX.HF(Ad,4);var LQ=this.AX.I2(Ad,
13);var AlC=this.AX.I2(Ad,17);var AlL=this.AX.H1(Ad,11);this.Xm=A._GetAutoObject(
A.Device.Helper).AMg(LQ,AlL,AlC);this.T(Md.toFixed());this.KP.R(A2j.toFixed());this.
AdP.R(A._GetAutoObject(A.acj.KK).ACL(Td,A._GetAutoObject(A.Device.Helper).Dv(),BrG
));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.Mg={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(
this.AdP={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.AM7;this.Mg.H(As7);this.AP.L(A.jb.Bc);this.
A_.L(A.jb.Bc);this.J(this.Mg,0);this.J(this.KP,0);this.J(this.AdP,0);this.J(this.
AP,0);this.J(this.A_,0);this.KP.S(A.aaL(A.fl.Af));this.AdP.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done();this.KP._Done(
);this.AdP._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.KP._ReInit();this.AdP.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));this.AdP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RR={AJM:0,Bdl:false,Ai:function(Ae){C.Ft.Ai.call(this,Ae);if(this.Bdl){this.
T(A.aaR(A.acf.ANX));this.Ks(A.jV);}else{this.T(A.aaR(A.acf.Bjl));if(this.AJM>0)this.
Ks(this.AJM.toFixed());else this.Ks(Xa);}},Cf:function(G){C.Ft.Cf.call(this,G);this.
Bdl=A._GetAutoObject(A.Device.Helper).W.IsDry;var Alx=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Alx>0)this.AJM=A._GetAutoObject(A.Device.Helper).
MN(Alx,A._GetAutoObject(A.Device.Helper).Dv());else this.AJM=0;this.An();},_Init:
function(aArg){C.Ft._Init.call(this,aArg);this.__proto__=C.RR;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMl={ALr:A.jV,Ai:function(Ae){C.Ft.Ai.call(this,Ae);this.T(A.aaR(A.acf.RK));
this.Ks(this.ALr);},Cf:function(G){C.Ft.Cf.call(this,G);var Td=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALr=A._GetAutoObject(A.acj.KK).ACL(Td,A._GetAutoObject(
A.Device.Helper).Dv(),((((BrH+A.aaR(A.acf.BgD))+BrI)+A.aaR(A.acf.BgC))+BrJ)+A.aaR(
A.acf.ALV));this.An();},_Init:function(aArg){C.Ft._Init.call(this,aArg);this.__proto__=
C.AMl;this.ALr=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Ft._ReInit.call(this);
this.ALr=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANR={Ua:null,Za:null,Wl:null,Wm:null,Su:null,Init:function(aArg){this.Bb(this.
Ua);A.pe([this,this.MG],this);},XB:function(G){A._GetAutoObject(A.Device.Device).
Ds(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.Ua={
I:this},0);C.Nb._Init.call(this.Za={I:this},0);C.Nb._Init.call(this.Wl={I:this},
0);C.AbU._Init.call(this.Wm={I:this},0);C.T9._Init.call(this.Su={I:this},0);this.
__proto__=C.ANR;var B;this.Dq(C.AO5);this.Ua.H(IR);this.Ua.Aj(true);this.Ua.T(A.
aaR(A.acf.ACl));this.Ua.Bg(false);this.Ua.Ne(83);this.Za.H(P7);this.Za.Aj(true);
this.Za.T(A.acf.Info);this.Za.Bg(true);this.Za.Ne(82);this.Wl.H(Aaf);this.Wl.Aj(
true);this.Wl.T(A.aaR(A.acf.AGt));this.Wl.Bg(false);this.Wl.Ne(64);this.Wm.H(Ald
);this.Wm.Aj(true);this.Wm.T(A.aaR(A.acf.TempMeasurement));this.Wm.Bg(true);this.
Wm.Ne(60);this.Su.H(Aoq);this.Su.Aj(true);this.Su.T(A.aaR(A.acf.ACG));this.Su.Bg(
false);this.J(this.Ua,-1);this.J(this.Za,-1);this.J(this.Wl,-1);this.J(this.Wm,-
1);this.J(this.Su,-1);this.N.Ck=[this,this.XB];this.N.Cs(A.aaL(A.ach.ADx));this.
Ua.AR=[B=this.Ua,B.Nh];this.Za.AR=[B=this.Za,B.Nh];this.Wl.AR=[B=this.Wl,B.Nh];this.
Wm.AR=[B=this.Wm,B.Nh];this.Su.AR=null;this.Su.AeR([B=this.Su,B.Atf]);this.Su.Gn([
this,this.D_,this.GN]);this.Su.ASS([B=A._GetAutoObject(A.Device.Device),B.Aru,B.
Atd]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ua._Done();this.
Za._Done();this.Wl._Done();this.Wm._Done();this.Su._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Ua._ReInit();this.Za._ReInit();
this.Wl._ReInit();this.Wm._ReInit();this.Su._ReInit();this.Ua.T(A.aaR(A.acf.ACl)
);this.Wl.T(A.aaR(A.acf.AGt));this.Wm.T(A.aaR(A.acf.TempMeasurement));this.Su.T(
A.aaR(A.acf.ACG));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANS={T_:null,AbS:null,Wj:null,Init:function(aArg){this.Bb(this.T_);},ByJ:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BjZ:function(G){if(A._GetAutoObject(
A.Device.Device).Aa4<=20)A._GetAutoObject(A.Device.Device).A9(76,true,BrK,0,null
);else A._GetAutoObject(A.Device.Device).A9(39,true,A.jV,0,[this,this.ByJ]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.T_={I:this},0);C.
Co._Init.call(this.AbS={I:this},0);C.AbU._Init.call(this.Wj={I:this},0);this.__proto__=
C.ANS;var B;this.Dq(C.AO6);this.T_.H(IR);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.
A5g));this.T_.Bg(false);this.T_.Ne(65);this.AbS.H(P7);this.AbS.Aj(true);this.AbS.
T(A.aaR(A.acf.A6d));this.AbS.Bg(true);this.Wj.H(Aaf);this.Wj.Aj(true);this.Wj.T(
A.aaR(A.acf.RangeTest));this.Wj.Bg(false);this.Wj.Ne(15);this.J(this.T_,-1);this.
J(this.AbS,-1);this.J(this.Wj,-1);this.T_.AR=[B=this.T_,B.Nh];this.AbS.AR=[this,
this.BjZ];this.Wj.AR=[B=this.Wj,B.Nh];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.T_._Done();this.AbS._Done();this.Wj._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.T_._ReInit();this.AbS._ReInit();this.Wj.
_ReInit();this.T_.T(A.aaR(A.acf.A5g));this.AbS.T(A.aaR(A.acf.A6d));this.Wj.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO6={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO6;this.
Text.R(A.aaR(A.acf.AGt));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGt));},_className:"Application::HeaderDeviceServiceMenu"};C.Nb={M7:
null,Ai:function(Ae){C.AbU.Ai.call(this,Ae);this.M7.L(this.V.AQ);},_Init:function(
aArg){C.AbU._Init.call(this,aArg);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.Nb;this.M7.AZ(0x38);this.M7.H(BrL);this.J(this.M7,0);this.V.Cu(A.aaL(A.fl.Bh));
this.M7.Aw(A.aaL(A.ach.Ajp));},_Done:function(){this.__proto__=C.AbU;this.M7._Done(
);C.AbU._Done.call(this);},_ReInit:function(){C.AbU._ReInit.call(this);this.M7._ReInit(
);this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbU._Mark.call(this,D);if((
B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANN={Ag3:null,Ag9:null,Ag$:null,Ag7:null,Aj8:null,Ag6:null,Ag5:null,Ag4:null
,Aj6:null,Ag2:null,Aj7:null,Ag_:null,Aj9:null,Ag8:null,Aj_:null,Init:function(aArg
){this.Bb(this.Ag3);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PK._Init.
call(this.Ag3={I:this},0);C.PK._Init.call(this.Ag9={I:this},0);C.PK._Init.call(this.
Ag$={I:this},0);C.PK._Init.call(this.Ag7={I:this},0);C.PK._Init.call(this.Aj8={I:
this},0);C.PK._Init.call(this.Ag6={I:this},0);C.PK._Init.call(this.Ag5={I:this},
0);C.PK._Init.call(this.Ag4={I:this},0);C.PK._Init.call(this.Aj6={I:this},0);C.PK.
_Init.call(this.Ag2={I:this},0);C.PK._Init.call(this.Aj7={I:this},0);C.PK._Init.
call(this.Ag_={I:this},0);C.PK._Init.call(this.Aj9={I:this},0);C.PK._Init.call(this.
Ag8={I:this},0);C.PK._Init.call(this.Aj_={I:this},0);this.__proto__=C.ANN;this.Dq(
C.AO1);this.Ag3.H(AIx);this.Ag3.Aj(true);this.Ag3.Sz(1);this.Ag9.H(AZN);this.Ag9.
Aj(true);this.Ag9.Bg(true);this.Ag9.Sz(2);this.Ag$.H(As_);this.Ag$.Aj(true);this.
Ag$.Bg(false);this.Ag$.Sz(3);this.Ag7.H(As$);this.Ag7.Aj(true);this.Ag7.Bg(true);
this.Ag7.Sz(4);this.Aj8.H(Ayh);this.Aj8.Aj(true);this.Aj8.Sz(5);this.Ag6.H(BrM);
this.Ag6.Aj(true);this.Ag6.Bg(true);this.Ag6.Sz(6);this.Ag5.H(Ata);this.Ag5.Aj(true
);this.Ag5.Bg(false);this.Ag5.Sz(7);this.Ag4.H(Ayq);this.Ag4.Aj(true);this.Ag4.Bg(
true);this.Ag4.Sz(8);this.Aj6.H(AZO);this.Aj6.Aj(true);this.Aj6.Sz(9);this.Ag2.H(
Aoy);this.Ag2.Aj(true);this.Ag2.Bg(true);this.Ag2.Sz(10);this.Aj7.H(BrN);this.Aj7.
Aj(true);this.Aj7.Sz(11);this.Ag_.H(BrO);this.Ag_.Aj(true);this.Ag_.Bg(true);this.
Ag_.Sz(12);this.Aj9.H(BrP);this.Aj9.Aj(true);this.Aj9.Sz(13);this.Ag8.H(BrQ);this.
Ag8.Aj(true);this.Ag8.Bg(true);this.Ag8.Sz(14);this.Aj_.H(BrR);this.Aj_.Aj(true);
this.Aj_.Sz(15);this.J(this.Ag3,-1);this.J(this.Ag9,-1);this.J(this.Ag$,-1);this.
J(this.Ag7,-1);this.J(this.Aj8,-1);this.J(this.Ag6,-1);this.J(this.Ag5,-1);this.
J(this.Ag4,-1);this.J(this.Aj6,-1);this.J(this.Ag2,-1);this.J(this.Aj7,-1);this.
J(this.Ag_,-1);this.J(this.Aj9,-1);this.J(this.Ag8,-1);this.J(this.Aj_,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ag3._Done();this.Ag9._Done(
);this.Ag$._Done();this.Ag7._Done();this.Aj8._Done();this.Ag6._Done();this.Ag5._Done(
);this.Ag4._Done();this.Aj6._Done();this.Ag2._Done();this.Aj7._Done();this.Ag_._Done(
);this.Aj9._Done();this.Ag8._Done();this.Aj_._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ag3._ReInit();this.Ag9._ReInit();this.Ag$.
_ReInit();this.Ag7._ReInit();this.Aj8._ReInit();this.Ag6._ReInit();this.Ag5._ReInit(
);this.Ag4._ReInit();this.Aj6._ReInit();this.Ag2._ReInit();this.Aj7._ReInit();this.
Ag_._ReInit();this.Aj9._ReInit();this.Ag8._ReInit();this.Aj_._ReInit();},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO1={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AO1;this.Text.R(A.aaR(A.acf.A5H));},_ReInit:function(){C.
KO._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5H));},_className:"Application::HeaderDeviceCheck"
};C.PK={DeviceComponentToString:null,Kh:null,AuT:0,BbZ:false,CP:function(){this.
V.R(this.DeviceComponentToString.BH(this.AuT));},Bk:function(aSize){var B;C.Co.Bk.
call(this,aSize);this.Kh.H(A.abM(this.Kh.M,aSize[0]-((B=this.Kh.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kh.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kh.
AEO(this.V.AQ);if(this.BbZ)this.Kh.AwA(A.jb.E1);else this.Kh.AwA(A.jb.Gf);},Sz:function(
E){if(this.AuT===E)return;this.AuT=E;this.T(this.DeviceComponentToString.BH(E));
this.DY(this);},DY:function(G){this.BbZ=A._GetAutoObject(A.Device.Device).AJC(this.
AuT);this.An();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kh._Init.call(this.Kh={I:this
},0);this.__proto__=C.PK;this.V.H(BrS);this.V.A6(0x11);this.Kh.H(BrT);this.J(this.
Kh,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kh._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kh._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sc={Ay:null,DZ:null,Y:null,Init:function(aArg){A.pe([this,this.AAy],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALl(this);this.DJ(this);},CF:function(G
){A.pe([this,this.MG],this);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},AAy:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6r();A._GetAutoObject(A.Device.Device
).Am.Bl(Be);A.pe([this,this.MG],this);},Ev:function(G){A._GetAutoObject(C.A$).Fu(
);},A3i:function(G){A._GetAutoObject(C.A$).Cg(84);},DJ:function(G){this.N.CY(A.aaL(
A.ach.E2));this.N.CB=[this,this.Ev];this.N.Cs(A.aaL(A.ach.ADw));if(!A._GetAutoObject(
A.Device.Device).Am.Filter||A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(
A.Device.Device).Am.Filter)){this.N.Ck=null;this.N.I4.Dr(100);}else{this.N.Ck=[this
,this.AAy];this.N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aex));this.N.Cl=[this,this.A3i
];},MG:function(s){this.DJ(s);},ALl:function(G){A.ab5("%s",BrU);},BF7:function(s
){this.ALl(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sc;this.N.Ar(false);this.N.Z(true);this.Dq(C.
Abu);this.Ay.H(Iq);this.DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.L(A.jb.CK);this.Y.H(Lu
);this.Y.JO(9);this.J(this.Ay,0);this.J(this.DZ,0);this.J(this.Y,0);this.Y.El=[this
,this.Fe];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DZ._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DZ._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOc={Ye:null,Yd:null,X2:null
,TF:null,DJ:function(G){C.Sc.DJ.call(this,G);if(this.AV===this.TF){this.N.Cs(null
);this.N.Ck=null;this.N.C6(null);this.N.Cl=null;}},ALl:function(G){if(this.AV===
this.TF)this.Dq(C.APa);else this.Dq(C.Abu);},By2:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQa);case 1:return A.
aaL(A.ach.AQb);default:A.ab5("%s%s",BrV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},By3:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQc);case 1:return A.aaL(A.ach.AQd);default:
A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ie:function(G){var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
Ye)A._GetAutoObject(C.A$).Cg(66);else if(Cx===this.Yd)A._GetAutoObject(C.A$).Cg(
56);else if(Cx===this.X2)A._GetAutoObject(C.A$).Cg(58);else if(Cx===this.TF)A._GetAutoObject(
C.A$).Cg(59);},_Init:function(aArg){C.Sc._Init.call(this,aArg);C.Fi._Init.call(this.
Ye={I:this},0);C.Fi._Init.call(this.Yd={I:this},0);C.Fi._Init.call(this.X2={I:this
},0);C.Fi._Init.call(this.TF={I:this},0);this.__proto__=C.AOc;this.Ye.H(P3);this.
Ye.Aj(true);this.Ye.T(A.aaR(A.acf.Afp));this.Yd.H(JY);this.Yd.Aj(true);this.Yd.T(
A.aaR(A.acf.Temperature));this.X2.H(BrW);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.
Rating));this.TF.H(BrX);this.TF.Aj(true);this.TF.T(A.aaR(A.acf.A7v));this.J(this.
Ye,0);this.J(this.Yd,0);this.J(this.X2,0);this.J(this.TF,0);this.Ye.AR=[this,this.
Ie];this.Ye.DB(this.By3());this.Yd.AR=[this,this.Ie];this.Yd.DB(this.By2());this.
X2.AR=[this,this.Ie];this.X2.DB(A.aaL(A.ach.AP_));this.TF.AR=[this,this.Ie];this.
TF.DB(A.aaL(A.ach.AP$));},_Done:function(){this.__proto__=C.Sc;this.Ye._Done();this.
Yd._Done();this.X2._Done();this.TF._Done();C.Sc._Done.call(this);},_ReInit:function(
){C.Sc._ReInit.call(this);this.Ye._ReInit();this.Yd._ReInit();this.X2._ReInit();
this.TF._ReInit();this.Ye.T(A.aaR(A.acf.Afp));this.Yd.T(A.aaR(A.acf.Temperature)
);this.X2.T(A.aaR(A.acf.Rating));this.TF.T(A.aaR(A.acf.A7v));},_Mark:function(D){
var B;C.Sc._Mark.call(this,D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOd={VG:null,X4:null,Yf:null,ALl:function(G){this.Dq(C.Avo);},By6:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQO
);case 1:return A.aaL(A.ach.AQP);default:A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ie:function(G){var Cx=(C.Fi.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A$).Cg(68);else if(Cx===
this.Yf)A._GetAutoObject(C.A$).Cg(57);else if(Cx===this.X4)A._GetAutoObject(C.A$
).Cg(67);},By5:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APZ);case 1:return A.aaL(A.ach.AP0);default:A.ab5("%s%s",AIC
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},By7:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQQ
);case 1:return A.aaL(A.ach.AQR);default:A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sc._Init.call(
this,aArg);C.Fi._Init.call(this.VG={I:this},0);C.Fi._Init.call(this.X4={I:this},
0);C.Fi._Init.call(this.Yf={I:this},0);this.__proto__=C.AOd;this.VG.H(P3);this.VG.
Aj(true);this.VG.T(A.aaR(A.acf.A$D));this.X4.H(AZR);this.X4.Aj(true);this.X4.T(A.
aaR(A.acf.A48));this.Yf.H(N_);this.Yf.Aj(true);this.Yf.T(A.aaR(A.acf.A$G));this.
J(this.VG,0);this.J(this.X4,0);this.J(this.Yf,0);this.VG.AR=[this,this.Ie];this.
VG.DB(this.By6());this.VG.Ab5(A.aaL(A.ach.NS));this.X4.AR=[this,this.Ie];this.X4.
DB(this.By5());this.Yf.AR=[this,this.Ie];this.Yf.DB(this.By7());},_Done:function(
){this.__proto__=C.Sc;this.VG._Done();this.X4._Done();this.Yf._Done();C.Sc._Done.
call(this);},_ReInit:function(){C.Sc._ReInit.call(this);this.VG._ReInit();this.X4.
_ReInit();this.Yf._ReInit();this.VG.T(A.aaR(A.acf.A$D));this.X4.T(A.aaR(A.acf.A48
));this.Yf.T(A.aaR(A.acf.A$G));},_Mark:function(D){var B;C.Sc._Mark.call(this,D);
if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOg={Bdo:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZQ(0));},_Init:function(aArg){C.AqK._Init.call(this,aArg);this.
__proto__=C.AOg;this.Ae4(A.aaR(A.acf.A7Q));},_ReInit:function(){C.AqK._ReInit.call(
this);this.Ae4(A.aaR(A.acf.A7Q));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN$={Aid:null,Abx:null,UI:null,AaX:null,Pi:null,Ajm:null,Agr:null,Ajn:null,Ags:
null,Ay:null,AaR:null,Ac_:0,Apt:0,DE:function(G){switch(this.Cr.CO){case 4:{if(this.
I1.Fk())return;var Qs=this.Y.Br[1]+80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null
,null);}break;case 5:{if(this.I1.Fk())return;var Qs=this.Y.Br[1]-80;this.Y.F_([this.
Y.Br[0],Qs]);this.Y.Vt(null,null);}break;default:C.Fv.DE.call(this,G);}},Ap5:function(
L1,AcU){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcU,true);Fs.CW(HV);var Ac6=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac6.Initialize(8,2,0,true);Fs.CW(Ac6
);L1.Bl(Fs);},Ais:function(G){if(A._GetAutoObject(A.Device.Helper).W.Ard()){this.
Aid.Or(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Ay$=this.By0(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaR.Set(Ay$,this.AaR.Get(Ay$)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ac_++;this.Apt=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fv.Ais.call(
this,G);},Aas:function(G){if(this.Ac_>1)A._GetAutoObject(A.Device.Device).A9(56,
true,this.Ac_.toFixed(),0,null);if(this.Ac_===1)A._GetAutoObject(A.Device.Device
).A9(53,true,this.Apt.toFixed(),0,null);if(this.Aid.AY>0)this.UI.T(((((((A._GetAutoObject(
A.Device.Converter).AxU(this.Aid.AjN()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxU(this.Aid.AqV()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfY())+Ayw)+this.Aid.AY.
toFixed())+O5);else this.UI.T(A.aaR(A.acf.Unknown));var RH=this.AaR.AmS();var O;
for(O=0;O<this.AaR.MC;O++){var Bf=this.Bzj(O);if(!!Bf){var CD=this.AaR.Get(O);Bf.
Blw(CD);if(!RH)Bf.A93(0);else Bf.A93(Math.round((CD*100)/RH)|0);Bf.Bnd(this.Bzi(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Add=false;if(this.Aid.AY>0)
Add=true;this.I1.Z(!Add);C.Fv.Aas.call(this,G);},Adk:function(G){this.Aid.Yg();this.
AaR.Hi();this.Ac_=0;this.Apt=0;C.Fv.Adk.call(this,G);},Bzj:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pi;break;case 1:Bf=this.Ajm;break;case 2:Bf=this.
Agr;break;case 3:Bf=this.Ajn;break;case 4:Bf=this.Ags;break;default:throw new Error(
Ayx+aIndex.toFixed());}return Bf;},Bzi:function(aIndex,AoI){var B;var Tp=A.jV;switch(
AoI){case 0:{switch(aIndex){case 0:Tp=BrY;break;case 1:Tp=BrZ;break;case 2:Tp=Br0;
break;case 3:Tp=Br1;break;case 4:Tp=Br2;break;default:throw new Error(Ayx+aIndex.
toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.Az2));}break;case 1:{switch(aIndex){case 0:Tp=
Br3;break;case 1:Tp=Br4;break;case 2:Tp=Br5;break;case 3:Tp=Br6;break;case 4:Tp=
Br7;break;default:throw new Error(Ayx+aIndex.toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.A7c
));}break;default:A.ab5("%s%e",A$_,AoI);}return Tp;},By1:function(AIY,AoI){var Ac7=
0;switch(AoI){case 0:switch(AIY){case 0:Ac7=35000;break;case 1:Ac7=40000;break;case
2:Ac7=45000;break;case 3:Ac7=50000;break;case 4:Ac7=2147483647;break;default:throw new
Error(Ayx+AIY.toFixed());}break;case 1:switch(AIY){case 0:Ac7=36287;break;case 1:
Ac7=40823;break;case 2:Ac7=45359;break;case 3:Ac7=49895;break;case 4:Ac7=2147483647;
break;default:throw new Error(Ayx+AIY.toFixed());}break;default:A.ab5("%s%e",A$_
,AoI);}return Ac7;},By0:function(A7,AoI){var Ay$=0;var O;for(O=0;O<this.AaR.MC;O++
)if(A7<this.By1(O,AoI)){Ay$=O;break;}return Ay$;},Fe:function(G){var B;this.Ay.Mu((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},_Init:function(aArg){C.Fv._Init.call(this,aArg);C.Agp._Init.call(this.Abx={
I:this},0);C.IC._Init.call(this.UI={I:this},0);C.AaX._Init.call(this.AaX={I:this
},0);C.Pi._Init.call(this.Pi={I:this},0);C.Pi._Init.call(this.Ajm={I:this},0);C.
Pi._Init.call(this.Agr={I:this},0);C.Pi._Init.call(this.Ajn={I:this},0);C.Pi._Init.
call(this.Ags={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaR={I:this},0);this.__proto__=C.AN$;this.Dq(C.Avo);this.Akx(A.aaR(
A.acf.A54));this.Ae4(A.aaR(A.acf.A7J));this.Abx.H(AIx);this.Abx.Aj(true);this.Abx.
T(A.aaR(A.acf.A4X));this.Abx.Bg(false);this.Abx.Kq(5);this.UI.H(AZN);this.UI.Aj(
true);this.UI.T(A.jV);this.UI.Bg(true);this.UI.Kq(5);this.AaX.H(As_);this.AaX.Aj(
true);this.Pi.H(As$);this.Pi.Aj(true);this.Pi.Bg(true);this.Ajm.H(Ata);this.Ajm.
Aj(true);this.Agr.H(Ayq);this.Agr.Aj(true);this.Agr.Bg(true);this.Ajn.H(AZO);this.
Ajn.Aj(true);this.Ags.H(Aoy);this.Ags.Aj(true);this.Ags.Bg(true);this.Ay.H(Iq);this.
AaR.Zy(5);this.J(this.Abx,-1);this.J(this.UI,-1);this.J(this.AaX,-1);this.J(this.
Pi,-1);this.J(this.Ajm,-1);this.J(this.Agr,-1);this.J(this.Ajn,-1);this.J(this.Ags
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fe];this.Aid=A._NewObject(C.AvL,0);
this.UI.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fv;this.Abx._Done(
);this.UI._Done();this.AaX._Done();this.Pi._Done();this.Ajm._Done();this.Agr._Done(
);this.Ajn._Done();this.Ags._Done();this.Ay._Done();this.AaR._Done();C.Fv._Done.
call(this);},_ReInit:function(){C.Fv._ReInit.call(this);this.Abx._ReInit();this.
UI._ReInit();this.AaX._ReInit();this.Pi._ReInit();this.Ajm._ReInit();this.Agr._ReInit(
);this.Ajn._ReInit();this.Ags._ReInit();this.Ay._ReInit();this.AaR._ReInit();this.
Akx(A.aaR(A.acf.A54));this.Ae4(A.aaR(A.acf.A7J));this.Abx.T(A.aaR(A.acf.A4X));this.
UI.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fv._Mark.call(this,D);if((B=this.
Aid)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ags)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaX={H8:null,Gp:null
,Bk:function(aSize){C.IC.Bk.call(this,aSize);this.H8.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gp.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IC.Ai.call(this,Ae);this.H8.L(this.V.AQ);this.Gp.L(this.V.AQ);},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.H8={I:this}
,0);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.AaX;this.T(A.aaR(
A.acf.AG6));this.H8.H(Br8);this.H8.KS(true);this.H8.R(A.aaR(A.acf.Aqx));this.H8.
L(A.jb.Text);this.Gp.H(A$$);this.Gp.R(AfA);this.Gp.L(A.jb.Text);this.J(this.H8,0
);this.J(this.Gp,0);this.V.S(A.aaL(A.fl.Ii));this.H8.S(A.aaL(A.fl.Ii));this.Gp.S(
A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IC;this.H8._Done();this.Gp._Done(
);C.IC._Done.call(this);},_ReInit:function(){C.IC._ReInit.call(this);this.H8._ReInit(
);this.Gp._ReInit();this.T(A.aaR(A.acf.AG6));this.H8.R(A.aaR(A.acf.Aqx));this.V.
S(A.aaL(A.fl.Ii));this.H8.S(A.aaL(A.fl.Ii));this.Gp.S(A.aaL(A.fl.Kl));},_Mark:function(
D){var B;C.IC._Mark.call(this,D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pi={AP:null,A_:null,PV:null,H8:null,Gp:null,A$F:A.jV,Aqx:0,A_y:0,Bk:function(
aSize){C.IC.Bk.call(this,aSize);this.PV.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PV.M[2]-1,0,this.PV.M[2]+1,aSize[1]]);this.H8.H([this.PV.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H8.M[2]-1,0,this.H8.M[2]+1,aSize[
1]]);this.Gp.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IC.Ai.call(
this,Ae);this.PV.L(this.V.AQ);this.H8.L(this.V.AQ);this.Gp.L(this.V.AQ);},Bnd:function(
E){if(this.A$F===E)return;this.A$F=E;this.PV.R(E);},Blw:function(E){if(this.Aqx===
E)return;this.Aqx=E;this.H8.R(E.toFixed());},A93:function(E){if(this.A_y===E)return;
this.A_y=E;this.Gp.R(E.toFixed()+Xb);},_Init:function(aArg){C.IC._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PV={I:this},0);A.acg.Text._Init.call(this.H8={I:
this},0);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.Pi;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PV.H(Br9);this.PV.R(A.aaR(A.acf.AG6));this.PV.L(
A.jb.Text);this.H8.R(UW);this.H8.L(A.jb.Text);this.Gp.R(Br_);this.Gp.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.PV,0);this.J(this.H8,0);this.J(
this.Gp,0);this.PV.S(A.aaL(A.fl.Af));this.H8.S(A.aaL(A.fl.Af));this.Gp.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IC;this.AP._Done();this.A_._Done();this.
PV._Done();this.H8._Done();this.Gp._Done();C.IC._Done.call(this);},_ReInit:function(
){C.IC._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.PV._ReInit();
this.H8._ReInit();this.Gp._ReInit();this.PV.R(A.aaR(A.acf.AG6));this.PV.S(A.aaL(
A.fl.Af));this.H8.S(A.aaL(A.fl.Af));this.Gp.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IC._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMx={AKO:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mo();A._GetAutoObject(A.Device.
Device).Am.Bl(Be);},_Init:function(aArg){C.Amr._Init.call(this,aArg);this.__proto__=
C.AMx;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARq={RY:null,
R4:null,RX:null,R1:null,Pk:null,R0:null,ALj:function(G){A.pe([this,this.BB_],this
);A.pe([this,this.BBY],this);A.pe([this,this.BBU],this);A.pe([this,this.A4a],this
);A.pe([this,this.BB1],this);A.pe([this,this.BBZ],this);},Ie:function(G){var Cx=(
C.QR.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R4)A._GetAutoObject(C.A$
).Cg(20);else if(Cx===this.Pk)A._GetAutoObject(C.A$).Cg(14);else if(Cx===this.RY
)A._GetAutoObject(C.A$).Cg(12);else if(Cx===this.R1)A._GetAutoObject(C.A$).Cg(43
);else if(Cx===this.RX)A._GetAutoObject(C.A$).Cg(51);else if(Cx===this.R0)A._GetAutoObject(
C.A$).Cg(61);},BBY:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azg=A._NewObject(A.Device.BoolFilterCriterion,0);Azg.Initialize(9,0,true,true);Be.
CW(Azg);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.Pk.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},BB_:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mo();var ABo=A._NewObject(A.Device.BoolFilterCriterion,0);ABo.Initialize(
12,0,true,true);Be.CW(ABo);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R4.Zw(
A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());},BBU:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mo();var AyY=A._NewObject(A.Device.BoolFilterCriterion
,0);AyY.Initialize(8,0,true,true);Be.CW(AyY);A._GetAutoObject(A.Device.Device).Am.
Bl(Be);this.RY.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());},A4a:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6l(A._GetAutoObject(A.Device.Device
).ABu);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.RX.Zw(A._GetAutoObject(A.
Device.Device).Am.Ca().toFixed());},BB1:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6u();A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R1.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},BBZ:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACO();A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R0.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},_Init:function(aArg){C.T5._Init.call(this,
aArg);C.QR._Init.call(this.RY={I:this},0);C.QR._Init.call(this.R4={I:this},0);C.
QR._Init.call(this.RX={I:this},0);C.QR._Init.call(this.R1={I:this},0);C.QR._Init.
call(this.Pk={I:this},0);C.QR._Init.call(this.R0={I:this},0);this.__proto__=C.ARq;
this.RY.H(P3);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.Alarm));this.RY.Ab2(true);this.
R4.H(AZR);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.Asa));this.R4.Ab2(true);this.RX.
H(N_);this.RX.Aj(true);this.RX.T(A.aaR(A.acf.ActionList));this.RX.Ab2(true);this.
R1.H(P4);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.AOE));this.R1.Ab2(true);this.Pk.
H(S5);this.Pk.Ar(false);this.Pk.Aj(false);this.Pk.Z(false);this.Pk.T(A.aaR(A.acf.
AB9));this.Pk.Ab2(true);this.R0.H(UO);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.A50
));this.R0.Ab2(true);this.J(this.RY,-1);this.J(this.R4,-1);this.J(this.RX,-1);this.
J(this.R1,-1);this.J(this.Pk,-1);this.J(this.R0,-1);this.RY.AR=[this,this.AcR];this.
RY.DB(A.aaL(A.ach.ADm));this.RY.Ab5(A.aaL(A.ach.NS));this.R4.AR=[this,this.AcR];
this.R4.DB(A.aaL(A.ach.AQN));this.R4.Ab5(A.aaL(A.ach.NS));this.RX.AR=[this,this.
AcR];this.RX.DB(A.aaL(A.ach.APK));this.RX.Ab5(A.aaL(A.ach.NS));this.R1.AR=[this,
this.AcR];this.R1.DB(A.aaL(A.ach.AQf));this.R1.Ab5(A.aaL(A.ach.NS));this.Pk.AR=[
this,this.AcR];this.Pk.DB(A.aaL(A.ach.ADm));this.Pk.Ab5(A.aaL(A.ach.NS));this.R0.
AR=[this,this.AcR];this.R0.DB(A.aaL(A.ach.AP7));this.R0.Ab5(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T5;this.RY._Done();this.R4._Done();this.RX._Done();this.
R1._Done();this.Pk._Done();this.R0._Done();C.T5._Done.call(this);},_ReInit:function(
){C.T5._ReInit.call(this);this.RY._ReInit();this.R4._ReInit();this.RX._ReInit();
this.R1._ReInit();this.Pk._ReInit();this.R0._ReInit();this.RY.T(A.aaR(A.acf.Alarm
));this.R4.T(A.aaR(A.acf.Asa));this.RX.T(A.aaR(A.acf.ActionList));this.R1.T(A.aaR(
A.acf.AOE));this.Pk.T(A.aaR(A.acf.AB9));this.R0.T(A.aaR(A.acf.A50));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARp={R5:null,VF:null,R2:null,RZ:null,R3:null,ALj:function(G){A.pe([this,this.
BBV],this);A.pe([this,this.BB5],this);A.pe([this,this.BB6],this);A.pe([this,this.
BB$],this);A.pe([this,this.BB7],this);},Ie:function(G){var Cx=(C.QR.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VF)A._GetAutoObject(C.A$).Cg(90);if(Cx===this.
RZ)A._GetAutoObject(C.A$).Cg(74);if(Cx===this.R2)A._GetAutoObject(C.A$).Cg(71);if(
Cx===this.R3)A._GetAutoObject(C.A$).Cg(46);if(Cx===this.R5)A._GetAutoObject(C.A$
).Cg(85);},BB6:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACR();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R3.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB$:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6E();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R5.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB5:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6z();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R2.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BBV:function(G){var Be=A._GetAutoObject(A.Device.Helper).AOF();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.RZ.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB7:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACT();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.VF.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},_Init:function(aArg){C.T5._Init.call(this,aArg);C.QR._Init.call(this.
R5={I:this},0);C.QR._Init.call(this.VF={I:this},0);C.QR._Init.call(this.R2={I:this
},0);C.QR._Init.call(this.RZ={I:this},0);C.QR._Init.call(this.R3={I:this},0);this.
__proto__=C.ARp;this.R5.H(Br$);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.A7B));this.
R5.Ab2(true);this.VF.H(Bsa);this.VF.Aj(true);this.VF.T(A.aaR(A.acf.AF8));this.R2.
H(Bsb);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.A7D));this.R2.Ab2(true);this.RZ.H(
Bsc);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.ABO));this.RZ.Ab2(true);this.R3.H(Bsd
);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.AR3));this.R3.Ab2(true);this.J(this.R5,-
1);this.J(this.VF,-1);this.J(this.R2,-1);this.J(this.RZ,-1);this.J(this.R3,-1);this.
R5.AR=[this,this.AcR];this.R5.DB(A.aaL(A.ach.AQu));this.R5.Ab5(A.aaL(A.ach.NS));
this.VF.AR=[this,this.AcR];this.VF.DB(A.aaL(A.ach.ADE));this.R2.AR=[this,this.AcR
];this.R2.DB(A.aaL(A.ach.AQw));this.R2.Ab5(A.aaL(A.ach.NS));this.RZ.AR=[this,this.
AcR];this.RZ.DB(A.aaL(A.ach.AP2));this.RZ.Ab5(A.aaL(A.ach.NS));this.R3.AR=[this,
this.AcR];this.R3.DB(A.aaL(A.ach.AQy));this.R3.Ab5(A.aaL(A.ach.NS));},_Done:function(
){this.__proto__=C.T5;this.R5._Done();this.VF._Done();this.R2._Done();this.RZ._Done(
);this.R3._Done();C.T5._Done.call(this);},_ReInit:function(){C.T5._ReInit.call(this
);this.R5._ReInit();this.VF._ReInit();this.R2._ReInit();this.RZ._ReInit();this.R3.
_ReInit();this.R5.T(A.aaR(A.acf.A7B));this.VF.T(A.aaR(A.acf.AF8));this.R2.T(A.aaR(
A.acf.A7D));this.RZ.T(A.aaR(A.acf.ABO));this.R3.T(A.aaR(A.acf.AR3));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ListsIdManagementScreen"};C.AR1={Wv:function(
G){this.Agn();this.AL6();this.A4z(A.aaR(A.acf.A7f),[this,this.BmV],131072);this.
A4z(A.aaR(A.acf.A7e),[this,this.BmU],16384);A._GetAutoObject(C.BS).FS();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.ARk)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abs:function(){return C.Aqt;},Abt:function(){return C.Aq0;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).A6z());},HO:function(G){var F;C.Tu.HO.call(this,G);if(this.Akg()===false
){if(!!this.FF&&((F=this.FF,F[1].call(F[0]))===16)){this.N.Cs(A.aaL(A.ach.AQG));
this.N.Ck=[this,this.A5Y];}else{this.N.Cs(A.aaL(A.ach.AQo));this.N.Ck=[this,this.
A5V];}this.N.FI(A.jV);}this.N.ON(false);this.N.OO(false);},Aga:function(){A._GetAutoObject(
C.A$).Cg(72);},BmU:function(G){this.AGv(16384);},BmV:function(G){this.AGv(131072
);},_Init:function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR1;this.Dq(
C.APo);this.Dz(A.aaR(A.acf.A7H));this.AS_(A._GetAutoObject(C.AvZ));},_ReInit:function(
){C.Tu._ReInit.call(this);this.Dz(A.aaR(A.acf.A7H));},_className:"Application::NoNaisIdListScreen"
};C.AR0={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR0;this.
Mr.Ar(false);this.Mr.Aj(false);this.Mr.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APo={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(10));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.APo;},_className:"Application::HeaderNoNaisIdListFilter"};C.Q4={Bfl:false,CP:function(
){A.pe([this,this.AyI],this);},DE:function(G){},CF:function(G){C.GU.CF.call(this
,G);if(this.Bfl&&(A._GetAutoObject(A.Device.Device).Ut>0))A.pe([this,this.AIF],this
);},AlY:function(G){this.A5U(this);},Aga:function(){A._GetAutoObject(C.A$).Cg(73
);},AR9:function(G){throw new Error(Aoz);},Bat:function(s){this.AR9(s);},AR_:function(
G){throw new Error(Aoz);},Bau:function(s){this.AR_(s);},ASd:function(G){throw new
Error(Aoz);},AIF:function(s){this.ASd(s);},Bex:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7)){this.Bfl=true;A._GetAutoObject(
C.A$).Cg(76);}},Af$:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===5))A.z$([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);},XC:function(G){var B;if(A._GetAutoObject(A.Device.
Device).AhL===3){A._GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.
Af$]);A.z$([this,this.XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);A.pe([
this,this.AIF],this);}},AJB:function(){throw new Error(Aoz);},A7Y:function(G){A.
_GetAutoObject(A.Device.Device).Ds(0);this.A5T(this);},Bnr:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.BhM(this);},_Init:function(aArg){C.GU._Init.call(this
,aArg);this.__proto__=C.Q4;this.Dz(A.aaR(A.acf.A7O));},_ReInit:function(){C.GU._ReInit.
call(this);this.Dz(A.aaR(A.acf.A7O));this.CP();},_className:"Application::RegistrationsListScreen"
};C.AUf={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AUf;},
_className:"Application::RegistrationsListFilterScreen"};C.Aeq={_Init:function(aArg
){C.Ys._Init.call(this,aArg);this.__proto__=C.Aeq;this.Text.H(Bse);this.Text.R(A.
jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABV={
J$:0,AP:null,A_:null,Ea:null,IH:null,ST:null,Gv:null,Md:0,K9:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IH.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.
ST.H([this.IH.M[2],0,this.IH.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.Ea.H([
this.ST.M[2]-1,0,this.ST.M[2]+1,aSize[1]]);this.Gv.H([this.ST.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IH.L(this.V.AQ);this.Gv.L(this.
V.AQ);this.ST.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj5(this.K9)){this.
V.S(A.aaL(A.fl.Hr));this.T(Baa);this.ST.R(Rl);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Md.toFixed());this.ST.R(A._GetAutoObject(A.Device.Helper).Se(this.J$,0,5).
toFixed());}},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.Md=
this.AX.CE(Ad,1);this.K9=this.AX.AOT(Ad,34);var AtL=this.AX.AOL(Ad,7);this.J$=this.
AX.KN(Ad,26);var Ay5=this.AX.HF(Ad,4);var AfL=A._GetAutoObject(A.Device.Helper).
MN(Ay5,A._GetAutoObject(A.Device.Helper).Dv());this.IH.Aw(A._GetAutoObject(A.Device.
Converter).AmP(AtL));if(AfL<100)this.Gv.R((AfL.toFixed()+CQ)+A.aaR(A.acf.ALV));else
this.Gv.R(A._GetAutoObject(A.acj.KK).ACL(Ay5,A._GetAutoObject(A.Device.Helper).Dv(
),AIi));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IH={I:this},0);A.acg.Text._Init.
call(this.ST={I:this},0);C.CH._Init.call(this.Gv={I:this},0);this.__proto__=C.ABV;
this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.Ea.H(AZS
);this.Ea.L(A.jb.Bc);this.IH.H(Bab);this.IH.L(A.jb.Text);this.ST.H(Aym);this.Gv.
H(AZT);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.IH,0);this.
J(this.ST,0);this.J(this.Gv,0);this.ST.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af
));this.Gv.A2(A.aaL(A.fl.Ak));this.Gv.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.Ea._Done();this.
IH._Done();this.ST._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();
this.IH._ReInit();this.ST._ReInit();this.Gv._ReInit();this.ST.S(A.aaL(A.fl.Af));
this.Gv.S(A.aaL(A.fl.Af));this.Gv.A2(A.aaL(A.fl.Ak));this.Gv.Cu(A.aaL(A.fl.Bh));
},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ADc={Aj2:null,Pw:null,I3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj2={I:this},
0);A.acg.Ap._Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},
0);this.__proto__=C.ADc;this.Aj2.H(Bsf);this.Aj2.L(A.jb.Text);this.Pw.H(Bsg);this.
Pw.L(A.jb.Text);this.I3.H(A$4);this.I3.L(A.jb.Text);this.J(this.Aj2,0);this.J(this.
Pw,0);this.J(this.I3,0);this.Aj2.Aw(A.aaL(A.ach.ADA));this.Pw.Aw(A.aaL(A.ach.Avz
));this.I3.Aw(A.aaL(A.ach.Avu));},_Done:function(){this.__proto__=C.Dc;this.Aj2.
_Done();this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Aj2._ReInit();this.Pw._ReInit();this.I3._ReInit();
},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APq={IO:null
,AgR:null,HP:null,Bc:null,My:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.A8K,B.A97
],0);A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.Wt,B.JP],0);A.
zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SB],0);A.zV([this
,this.DY],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.DY],this);},De:
function(E){C.BR.De.call(this,E);this.IO.L(E);this.AgR.L(E);this.HP.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.
acf.Ae9));else this.HP.R(((A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon))+CQ)+E.toFixed());
},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.AwU(((A._GetAutoObject(
A.Device.Helper).W.CL+1).toFixed()+A$Q)+A._GetAutoObject(A.Device.Device).Am.Ca(
).toFixed());this.JP(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nf(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.AwU(A$R);this.JP(2);this.OnSetAnimalId(-1);this.
Nf(0);}},JP:function(E){if(this.Gender===E)return;this.Gender=E;this.AgR.Aw(A._GetAutoObject(
A.Device.Converter).AmP(E));},AwU:function(E){if(this.My===E)return;this.My=E;this.
IO.R(E);},Nf:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj5(E))this.HP.Z(false);else this.HP.Z(true);},_Init:
function(aArg){C.BR._Init.call(this,aArg);A.acg.Text._Init.call(this.IO={I:this}
,0);A.acg.Ap._Init.call(this.AgR={I:this},0);A.acg.Text._Init.call(this.HP={I:this
},0);A.acg.C5._Init.call(this.Bc={I:this},0);this.__proto__=C.APq;this.IO.H(A$S);
this.IO.Hh(2);this.IO.KS(true);this.IO.A6(0x12);this.IO.R(A$T);this.AgR.H(Bsh);this.
HP.H(Bsi);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae9));this.Bc.DC(Ays);this.Bc.DL(
Ayt);this.Bc.L(A.jb.Bc);this.J(this.IO,0);this.J(this.AgR,0);this.J(this.HP,0);this.
J(this.Bc,0);this.IO.S(A.aaL(A.fl.Ak));this.AgR.Aw(A._GetAutoObject(A.Device.Converter
).AmP(2));this.HP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.IO._Done();this.AgR._Done();this.HP._Done();this.Bc._Done();C.BR._Done.
call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.IO._ReInit();this.AgR.
_ReInit();this.HP._ReInit();this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Ae9));this.IO.
S(A.aaL(A.fl.Ak));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.
call(this,D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.Aa0={EaseOfDeliveryToString:null,AgI:null,Cf:function(G){C.NE.Cf.call(this,G
);var AJV=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Ks(this.EaseOfDeliveryToString.
Lt(AJV));this.GX.R(this.AgI.Aeg(AJV).toFixed());},De:function(E){C.NE.De.call(this
,E);this.GX.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgI._Init.call(this.
AgI={I:this},0);this.__proto__=C.Aa0;this.T(A.aaR(A.acf.AgA));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgI._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgI._ReInit();this.T(A.aaR(A.acf.AgA));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XT={WhereAboutsToString:null,KY:null,Cf:function(G){C.NE.Cf.call(this,G);var
K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Ks(this.WhereAboutsToString.
Lt(K9));this.GX.R(this.KY.Aeg(K9).toFixed());},De:function(E){C.NE.De.call(this,
E);this.GX.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KY._Init.call(this.KY={
I:this},0);this.__proto__=C.XT;this.T(A.aaR(A.acf.Jd));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KY._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KY._ReInit(
);this.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RU={Cr:null,Y:null,Ay:null,Init:function(aArg){},CF:function(G){var B;C.D9.CF.
call(this,G);A.zX([this,this.AfB],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.
OnSetId],0);A.zX([this,this.AfB],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]
,0);A.pe([this,this.AfB],this);},E3:function(G){var B;C.D9.E3.call(this,G);A.z$([
this,this.AfB],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.z$([this
,this.AfB],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},Fe:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},DE:function(G){switch(this.Cr.CO){case 6:case 7:this.Cr.NH=true;
break;case 4:this.BfH(4);break;case 5:this.BfH(5);break;default:;}},BfH:function(
Gw){var B;switch(Gw){case 5:{var CC=this.Y.Br[1]-40;if(CC<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CC=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CC>0)CC=0;this.Y.F_([this.Y.Br[0],CC]);}break;case 4:{var CC=this.Y.
Br[1]+40;if(CC>0)CC=0;this.Y.F_([this.Y.Br[0],CC]);}break;default:throw new Error(
Bsj);}},GE:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.IZ.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Cf(this
);}X=X.Ah;}},AfB:function(s){this.GE(s);},MO:function(G){var B;this.Y.Vt(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RU;this.Cr.Filter=147;this.Y.H(UU);this.Y.JO(1);this.Ay.H(AsS
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,
this.DE];this.Y.El=[this,this.Fe];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XU={AaU:null,
XQ:null,AaV:null,XR:null,Aa0:null,XT:null,_Init:function(aArg){C.RU._Init.call(this
,aArg);C.AaU._Init.call(this.AaU={I:this},0);C.XQ._Init.call(this.XQ={I:this},0);
C.AaV._Init.call(this.AaV={I:this},0);C.XR._Init.call(this.XR={I:this},0);C.Aa0.
_Init.call(this.Aa0={I:this},0);C.XT._Init.call(this.XT={I:this},0);this.__proto__=
C.XU;this.AaU.H(BF);this.AaU.Aj(true);this.XQ.H(IR);this.XQ.Aj(true);this.XQ.Bg(
true);this.AaV.H(P7);this.AaV.Aj(true);this.XR.H(Aaf);this.XR.Aj(true);this.XR.Bg(
true);this.Aa0.H(Ald);this.Aa0.Aj(true);this.XT.H(Aoq);this.XT.Aj(true);this.XT.
Bg(true);this.J(this.AaU,0);this.J(this.XQ,0);this.J(this.AaV,0);this.J(this.XR,
0);this.J(this.Aa0,0);this.J(this.XT,0);},_Done:function(){this.__proto__=C.RU;this.
AaU._Done();this.XQ._Done();this.AaV._Done();this.XR._Done();this.Aa0._Done();this.
XT._Done();C.RU._Done.call(this);},_ReInit:function(){C.RU._ReInit.call(this);this.
AaU._ReInit();this.XQ._ReInit();this.AaV._ReInit();this.XR._ReInit();this.Aa0._ReInit(
);this.XT._ReInit();},_Mark:function(D){var B;C.RU._Mark.call(this,D);if((B=this.
AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XR={
BreedToString:null,GX:null,M0:null,Cf:function(G){C.IB.Cf.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BH(Bv));this.GX.
R(this.M0.Aeg(Bv).toFixed());},De:function(E){C.IB.De.call(this,E);this.GX.L(E);
},_Init:function(aArg){C.IB._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.GX={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XR;this.BT.H(Bsk);this.GX.H(Bsl
);this.GX.Hh(5);this.GX.A6(0x14);this.GX.R(Bsm);this.GX.L(A.jb.Text);this.J(this.
GX,0);this.Hs.Aw(A.aaL(A.ach.ADr));this.GX.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IB;this.BreedToString._Done();this.GX._Done();this.M0._Done();C.
IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.BreedToString.
_ReInit();this.GX._ReInit();this.M0._ReInit();this.GX.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaV={
Cf:function(G){C.IB.Cf.call(this,G);var AAc=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAc>0)this.T(A._GetAutoObject(A.Device.Converter).Rf(AAc));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IB._Init.call(this,aArg);this.__proto__=
C.AaV;this.Hs.Aw(A.aaL(A.ach.AP8));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XQ={Yx:null,Cf:function(G){C.IB.Cf.call(this,G);var Td=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfQ=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Td>
0)this.T(A._GetAutoObject(A.acj.KK).AjL(Td));else this.T(A.aaR(A.acf.Unknown));var
Ay7=A.aaL(A.aci.TJ);switch(AfQ){case 0:Ay7=A.aaL(A.ach.ADo);break;case 1:{Ay7=A.
aaL(A.ach.Avv);this.Yx.Cv(0);}break;case 2:{Ay7=A.aaL(A.ach.Avv);this.Yx.Cv(1);}
break;case 3:{Ay7=A.aaL(A.ach.Avv);this.Yx.Cv(2);}break;default:A.ab5("%s%e",Bsn
,AfQ);}this.Yx.Aw(Ay7);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yx={I:this},0);this.__proto__=C.XQ;this.BT.H(Bso);this.Yx.H(AHM);
this.Yx.L(A.jb.Text);this.J(this.Yx,0);this.Hs.Aw(A.aaL(A.ach.Avu));this.Yx.Aw(A.
aaL(A.ach.ADo));},_Done:function(){this.__proto__=C.IB;this.Yx._Done();C.IB._Done.
call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.Yx._ReInit();},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaU={J$:0,XS:null,K9:0
,Bk:function(aSize){C.IB.Bk.call(this,aSize);this.XS.H(this.Hs.M);},Ai:function(
Ae){C.IB.Ai.call(this,Ae);this.XS.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj5(this.K9)){this.T(A.aaR(A.acf.AnimalLoss));this.Hs.Z(false);this.XS.Z(true);
}else if(this.J$>0){this.T(A._GetAutoObject(A.Device.Converter).Rf(this.J$));this.
Hs.Z(true);this.XS.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hs.Z(true);this.
XS.Z(false);}},Cf:function(G){C.IB.Cf.call(this,G);this.J$=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.An(
);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Text._Init.call(this.XS={
I:this},0);this.__proto__=C.AaU;this.XS.R(Baa);this.J(this.XS,0);this.Hs.Aw(A.aaL(
A.ach.Avz));this.XS.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=C.IB;this.
XS._Done();C.IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.
XS._ReInit();},_Mark:function(D){var B;C.IB._Mark.call(this,D);if((B=this.XS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMu={XU:null,Init:function(aArg){var B;A.zX([this,this.AAu],[B=A._GetAutoObject(
A.Device.Device),B.AEp,B.AIJ],0);A.pe([this,this.AAu],this);},DE:function(G){var
D5=(A.Core.BM.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ol(this);break;
case 7:this.MU(this);break;default:D5.NH=true;}},CF:function(G){var B;this.XU.CF(
this);C.AB.CF.call(this,G);},E3:function(G){var B;this.XU.E3(this);C.AB.E3.call(
this,G);},Ank:function(G){A._GetAutoObject(C.A$).Fu();},XB:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).Am.Ca()<=1)return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;
if(LC>=A._GetAutoObject(A.Device.Device).Am.Ca())LC=0;A._GetAutoObject(A.Device.
Helper).HL(LC);},Ol:function(G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)
return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(
A.Device.Device).Am.Ca()-1;A._GetAutoObject(A.Device.Helper).HL(LC);},AAu:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqp)A._GetAutoObject(C.A$).Ahn(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XU._Init.call(this.XU={I:this},0);this.
__proto__=C.AMu;this.Background.H(Cd);this.N.Z(true);this.N.ON(true);this.N.OO(true
);this.Dq(C.APq);this.XU.H(E$);this.J(this.XU,0);this.N.CB=[this,this.Ank];this.
N.Ck=[this,this.XB];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbC));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XU._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XU._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IB={Hs:null,BT:null
,T:function(E){C.IZ.T.call(this,E);this.BT.R(this.DK);},De:function(E){C.IZ.De.call(
this,E);this.Hs.L(E);this.BT.L(E);},_Init:function(aArg){C.IZ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hs={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.IB;this.Hs.H(Bsp);this.Hs.L(A.jb.Text);this.BT.H(Bsq);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hs,0);this.J(this.BT,0);this.Hs.Aw(A.aaL(A.aci.
TJ));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IZ;this.Hs._Done();this.BT._Done();C.IZ._Done.call(this);},_ReInit:function(
){C.IZ._ReInit.call(this);this.Hs._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IZ._Mark.call(this
,D);if((B=this.Hs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IZ={Background:null
,KT:0,Hf:false,CP:function(){this.Cf(this);},Init:function(aArg){var B;A.zX([this
,this.Bbd],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.pe([this,
this.Bbd],this);},Bk:function(aSize){C.Hc.Bk.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.
Hf)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Cf:function(G){}
,Bbd:function(s){this.Cf(s);},Bg:function(E){if(this.Hf===E)return;this.Hf=E;this.
An();},De:function(E){if(this.KT===E)return;this.KT=E;},_Init:function(aArg){C.Hc.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.IZ;this.H(BF);this.Background.H(AIk);this.KT=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);C.Hc._Done.call(this);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={GX:null,BAG:function(G){this.BT.H(A.abN(this.BT.M,this.GX.M[0]));},_Init:
function(aArg){C.Ft._Init.call(this,aArg);A.acg.Text._Init.call(this.GX={I:this}
,0);this.__proto__=C.NE;this.GX.AZ(0xA);this.GX.H(Bsr);this.GX.Hh(5);this.GX.I7(
true);this.GX.A6(0x14);this.GX.R(A.jV);this.GX.L(A.jb.Text);this.J(this.GX,0);this.
GX.Q1([this,this.BAG]);this.GX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Ft;this.GX._Done();C.Ft._Done.call(this);},_ReInit:function(){C.Ft._ReInit.call(
this);this.GX._ReInit();this.GX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ft.
_Mark.call(this,D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axd={AQ2:null,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axd;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.AQ2)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANB={Ws:null,WO:0,AwF:function(E){C.AmB.AwF.call(this,E);if(E)this.Pm.R(Bss);
else this.Pm.R(Bac);},BmK:function(E){if(A.aaZ(this.Ws,E))return;if(!!this.Ws)A.
z$([this,this.A28],this.Ws,0);this.Ws=E;if(!!E)A.zX([this,this.A28],E,0);if(!!E)
A.pe([this,this.A28],this);},AFE:function(E){var F;if(this.WO===E)return;this.WO=
E;this.AwF(!!this.Ws&&((F=this.Ws,F[1].call(F[0]))===E));},A28:function(G){var F;
this.AwF(!!this.Ws&&((F=this.Ws,F[1].call(F[0]))===this.WO));},_Init:function(aArg
){C.AmB._Init.call(this,aArg);this.__proto__=C.ANB;this.Pm.R(Bac);this.Pm.S(A.aaL(
A.fl.Hr));},_Mark:function(D){var B;C.AmB._Mark.call(this,D);if((B=this.Ws)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axf={Ws:null,WO:0,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axf;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.Ws)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATV={GL:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Q9._Init.call(
this.GL={I:this},0);this.__proto__=C.ATV;var B;this.I8(A.aaR(A.acf.ACB));this.GL.
H(AhT);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF6));this.GL.Ar0(
false);this.GL.A94(true);this.J(this.GL,0);this.GL.AeR([B=this.GL,B.FP]);this.GL.
Gn([this,this.D_,this.GN]);this.GL.Aky(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(
A.Device.Device),B.ASz,B.AZ6]);},_Done:function(){this.__proto__=C.Ce;this.GL._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.GL._ReInit(
);this.I8(A.aaR(A.acf.ACB));this.GL.T(A.aaR(A.acf.AF6));},_Mark:function(D){var B;
C.Ce._Mark.call(this,D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATT={GF:0,C7:null,AW:null,Kn:null,E7:null
,GermanStateToString:null,CountryToString:null,Pt:0,K$:0,L9:false,Init:function(
aArg){A.zX([this,this.MG],[this,this.Sx,this.Lo],0);A.zX([this,this.MG],[this,this.
Ann,this.Ahi],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FH(this.LS);this.
Kn.FH(this.LS);this.E7.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=
this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[
1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[
0])).CV(this.CountryToString.BH(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0]
)).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(
F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu
)+Ax5)+this.GermanStateToString.Lt(A._GetAutoObject(A.Device.Converter).ACM(this.
Pt)));(F=this.N,F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0
])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}}
,Ew:function(EO){var Tk=this.A8;if(EO<0)EO=0;else if(EO>this.RE)EO=this.RE;switch(
EO){case 0:{this.Bb(null);if(!this.GF&&!this.Pt)this.Lo(0);}break;case 1:this.Bb(
this.E7);break;case 2:this.Bb(this.Kn);break;case 3:if(((Tk===2)&&!this.Pt)&&!this.
GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>0))this.AW.SJ(2);else this.AW.SJ(
7);}break;default:throw new Error(Atc+EO.toFixed());}this.A8=EO;C.Ek.Ew.call(this
,EO);},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sy(A._GetAutoObject(
A.Device.Helper).Se(E,0,10));this.Ahi(A._GetAutoObject(A.Device.Helper).Se(E,10,
2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=false;if(!!this.
AM){this.Kn.Kq(2);this.AW.Kq(10);}else{this.Kn.Kq(0);this.AW.Kq(0);}this.An();},
FP:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.
Helper).ACX());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RE);},AjM:function(){return this.GF;
},AjO:function(){return 9999999999;},Lo:function(E){if(this.K$===E)return;this.K$=
E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sx,this.Lo],0);}
,Sy:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this,this.
Vj],this);A.abo([this,this.AbZ,this.Sy],0);},Vj:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abl(this.Pt,2,10))+
A.abm(this.GF,10,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahi:function(
E){if(this.Pt===E)return;this.Pt=E;if(this.L9===false)A.pe([this,this.Vj],this);
A.abo([this,this.Ann,this.Ahi],0);},Sx:function(){return this.K$;},AbZ:function(
){return this.GF;},Ann:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C7._Init.call(this.C7={I:this},0);C.AQW._Init.call(this.AW={I:
this},0);C.AvJ._Init.call(this.Kn={I:this},0);C.AsF._Init.call(this.E7={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATT;var B;this.RE=3;this.AW.H(Bst);this.Kn.H(Bsu);this.Kn.EV(16);this.E7.H(Bad
);this.J(this.AW,0);this.J(this.Kn,0);this.J(this.E7,0);this.C7.AEV([this,this.Sx
,this.Lo]);this.AW.As([this,this.AbZ,this.Sy]);this.Kn.As([this,this.Ann,this.Ahi
]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.Kn._Done();this.
E7._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW.
_ReInit();this.Kn._ReInit();this.E7._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQW={NK:null,NJ:null,ET:null,FV:null,Eo:null,Dx:null,CU:null,Ct:null,FH:function(
E){if(this.M4===E)return;C.Lg.FH.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dx.
CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);this.NJ.CT(E);this.NK.CT(E);},Yq:
function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.
Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;
case 5:B5=this.FV;break;case 6:B5=this.ET;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;},_Init:
function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FV={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.AQW;this.H(Bsv);this.GW.H(AIA);this.NK.H(Ayu);this.NJ.H(AZF
);this.ET.H(AZG);this.FV.H(AZH);this.Eo.H(AZI);this.Dx.H(AZJ);this.CU.H(AZK);this.
Ct.H(A$Z);this.FW.H(AZL);this.EN.H(AZL);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ET,-2);this.J(this.FV,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.
CU,-2);this.J(this.Ct,-2);this.NK.Di=[this,this.GP];this.NJ.Di=[this,this.GP];this.
ET.Di=[this,this.GP];this.FV.Di=[this,this.GP];this.Eo.Di=[this,this.GP];this.Dx.
Di=[this,this.GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(
){this.__proto__=C.Lg;this.NK._Done();this.NJ._Done();this.ET._Done();this.FV._Done(
);this.Eo._Done();this.Dx._Done();this.CU._Done();this.Ct._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ET._ReInit();this.FV._ReInit();this.Eo._ReInit();this.Dx._ReInit();this.CU.
_ReInit();this.Ct._ReInit();},_Mark:function(D){var B;C.Lg._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATU={
GF:0,C7:null,AW:null,E7:null,CountryToString:null,K$:0,L9:false,Init:function(aArg
){A.zX([this,this.MG],[this,this.Sx,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FH(this.LS);this.E7.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(this.CountryToString.BH(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}
break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(
F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.A8;if(EO<0)EO=0;
else if(EO>this.RE)EO=this.RE;switch(EO){case 0:{this.Bb(null);if(!this.GF)this.
Lo(0);}break;case 1:this.Bb(this.E7);break;case 2:{this.Bb(this.AW);if(!this.GF||(
Tk>0))this.AW.SJ(2);else this.AW.SJ(7);}break;default:throw new Error(Atc+EO.toFixed(
));}this.A8=EO;C.Ek.Ew.call(this,EO);},By:function(E){if(this.AM===E)return;this.
AM=E;this.L9=true;this.Sy(A._GetAutoObject(A.Device.Helper).Se(E,0,12));this.Lo(
A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=false;if(!!this.AM)this.AW.Kq(
12);else this.AW.Kq(0);this.An();},FP:function(G){var F;if(!this.AM){var BQ=this.
AM;this.By(A._GetAutoObject(A.Device.Helper).ACX());if(this.AM!==BQ){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RE);},AjM:function(
){return this.GF;},AjO:function(){return 999999999999;},Lo:function(E){if(this.K$===
E)return;this.K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.
Sx,this.Lo],0);},Sy:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false
)A.pe([this,this.Vj],this);A.abo([this,this.AbZ,this.Sy],0);},Vj:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abm(
this.GF,12,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sx:function(){return this.
K$;},AbZ:function(){return this.GF;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.ADG._Init.call(this.AW={I:this},0);C.AsF.
_Init.call(this.E7={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATU;var B;this.RE=2;this.AW.H(Bsw);this.E7.H(Bad);this.
J(this.AW,0);this.J(this.E7,0);this.C7.AEV([this,this.Sx,this.Lo]);this.AW.As([this
,this.AbZ,this.Sy]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.
E7._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW._ReInit();this.E7._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DZ:null,Y:null,Ay:null,X_:null,X$:null,X9:null,X7:null,X8:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(A.
Device.Device).Am.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkN();A._GetAutoObject(A.Device.Helper).Asn();},Ie:function(G){
var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X_)A._GetAutoObject(
C.A$).Cg(28);else if(Cx===this.X$)A._GetAutoObject(C.A$).Cg(26);else if(Cx===this.
X9)A._GetAutoObject(C.A$).Cg(54);else if(Cx===this.X7)A._GetAutoObject(C.A$).Cg(
27);else if(Cx===this.X8)A._GetAutoObject(C.A$).Cg(78);},A3a:function(G){A._GetAutoObject(
C.A$).Fu();},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fi._Init.call(this.X_={I:this
},0);C.Fi._Init.call(this.X$={I:this},0);C.Fi._Init.call(this.X9={I:this},0);C.Fi.
_Init.call(this.X7={I:this},0);C.Fi._Init.call(this.X8={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dq(C.AqZ);this.DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.L(A.jb.CK);this.Y.H(E$);
this.Y.JO(9);this.Ay.H(Iq);this.X_.H(P3);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.
A7z));this.X$.H(AZR);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.NewAnimals));this.X9.
H(N_);this.X9.Aj(true);this.X9.T(A.aaR(A.acf.Calving));this.X7.H(P4);this.X7.Aj(
true);this.X7.T(A.aaR(A.acf.ABT));this.X8.H(MF);this.X8.Aj(true);this.X8.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X_,0);this.J(this.X$,0);this.J(this.X9,0);this.J(this.X7,0);this.J(this.X8,0);this.
N.CB=[this,this.A3a];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe];this.X_.
AR=[this,this.Ie];this.X_.DB(A.aaL(A.ach.ADB));this.X$.AR=[this,this.Ie];this.X$.
DB(A.aaL(A.ach.AvD));this.X9.AR=[this,this.Ie];this.X9.DB(A.aaL(A.ach.AP1));this.
X7.AR=[this,this.Ie];this.X7.DB(A.aaL(A.ach.APY));this.X8.AR=[this,this.Ie];this.
X8.DB(A.aaL(A.ach.APR));},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.
Y._Done();this.Ay._Done();this.X_._Done();this.X$._Done();this.X9._Done();this.X7.
_Done();this.X8._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X_._ReInit(
);this.X$._ReInit();this.X9._ReInit();this.X7._ReInit();this.X8._ReInit();this.X_.
T(A.aaR(A.acf.A7z));this.X$.T(A.aaR(A.acf.NewAnimals));this.X9.T(A.aaR(A.acf.Calving
));this.X7.T(A.aaR(A.acf.ABT));this.X8.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARR={K4:null,EaseOfDelivery:null,BirthType:null,AcJ:null
,Lk:null,Cn:null,G1:null,Li:null,AzG:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GE],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.Hi();A._GetAutoObject(C.A$).Fu();if(!!this.K4)this.K4.Ev(this);},Af_:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwG(true);if(!!this.K4)this.K4.Af_(this
);if(A._GetAutoObject(A.Device.Device).Am.Lh())A._GetAutoObject(A.Device.Helper).
AKg(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApF]);else{this.AiY();A.
pe([this,this.Ap4],this);}},Aud:function(){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.
ADF));this.N.Cl=[this,this.AyL];},CF:function(G){var B;C.HY.CF.call(this,G);if(A.
_GetAutoObject(A.Device.Device).Am.Lh()){A._GetAutoObject(A.Device.Device).A9(41
,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),0,null);this.Ev(this);
}else if(this.AzG){this.AzG=false;A.pe([this,this.A3p],this);}else if(!this.K4){
this.K4=A._NewObject(C.ARS,0);this.K4.A9z([this,this.AAR]);A._GetAutoObject(A.Device.
Helper).W.Gm();A._GetAutoObject(A.Device.Helper).Aqh(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nf(this.AsQ.Aeg(6));this.K4.LO(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiY:function(
){A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);var
L6=A._GetAutoObject(A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SK(L6);if(A._GetAutoObject(A.Device.Helper
).Am1()){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.
Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6F(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap4:function(G){var B;if(!!this.K4)this.K4.Ap4(this);},GE:function(G){if(
A._GetAutoObject(A.Device.Helper).Am1())this.C9.Z(true);else this.C9.Z(false);},
ApF:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",As4,At.Id);}},AAR:function(G){this.
LO(this);this.AeT(A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JD(this.C$);},ApG:function(G){var F;C.HY.ApG.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnU));},A3p:function(G){A._GetAutoObject(
C.A$).Cg(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcJ._Init.call(this.AcJ={I:this},0);C.Q9._Init.call(this.Lk={I:this
},0);C.SM._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.BW.
_Init.call(this.Li={I:this},0);this.__proto__=C.ARR;var B;this.Dq(C.APn);this.Lk.
H(AhT);this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACh));this.CG.H(AcP);this.Cn.H(AcP
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeb));this.Cn.AFv(true);this.G1.H(AcP);
this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Aro));this.Li.H(AcP);this.Li.Aj(true);this.
Li.T(A.aaR(A.acf.AgA));this.J(this.Lk,-5);this.J(this.Cn,-3);this.J(this.G1,-1);
this.J(this.Li,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcJ.LY(A._GetAutoObject(A.
Device.Helper).W);this.Lk.Gn([this,this.D_,this.GN]);this.Lk.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ASv,B.AnB]);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.LX([
B=this.Cn,B.FP]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(A.
Device.Helper).W,B.Av6,B.Q0]);this.Gi.As([B=this.AcJ,B.B7,B.B8]);this.Gi.CI(this.
AcJ);this.G1.As([B=this.BirthType,B.B7,B.B8]);this.G1.CI(this.BirthType);this.Li.
As([B=this.EaseOfDelivery,B.B7,B.B8]);this.Li.CI(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcJ._Done();this.Lk._Done();this.Cn._Done();this.G1._Done();this.Li.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcJ._ReInit();this.Lk._ReInit(
);this.Cn._ReInit();this.G1._ReInit();this.Li._ReInit();this.Lk.T(A.aaR(A.acf.ACh
));this.Cn.T(A.aaR(A.acf.Aeb));this.G1.T(A.aaR(A.acf.Aro));this.Li.T(A.aaR(A.acf.
AgA));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcJ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMw={Init:function(aArg){var B;A.zX([this,this.Bgj],[B=A._GetAutoObject(A.Device.
Device),B.AEw,B.AIO],0);A.pe([this,this.Bgj],this);},AKO:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbV){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACO();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOH();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mo();break;default:throw new Error(AZU+A.
_GetAutoObject(A.Device.Device).AbV.toFixed());}A._GetAutoObject(A.Device.Device
).Am.Bl(Be);},Bgj:function(G){switch(A._GetAutoObject(A.Device.Device).AbV){case
0:this.Dz(A.aaR(A.acf.ARX));break;case 1:this.Dz(A.aaR(A.acf.BjO));break;case 2:
this.Dz(A.aaR(A.acf.AvY));break;default:A.ab5("%s",AZU+A._GetAutoObject(A.Device.
Device).AbV.toFixed());}},_Init:function(aArg){C.Amr._Init.call(this,aArg);this.
__proto__=C.AMw;this.BmC(C.APD);this.Ej.Ab3(A._NewObject(C.APs,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARS={AAc:0,Ade:null
,AuR:null,BdL:0,A3C:0,A2w:0,Init:function(aArg){this.BdL=A._GetAutoObject(A.Device.
Helper).W.Id;this.Ade=A._GetAutoObject(A.Device.Device).Am.Filter;this.AAc=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2w=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LO:function(G){A._GetAutoObject(A.Device.Helper).W.AnB(this.AAc);A._GetAutoObject(
A.Device.Helper).W.Ae0(true);switch(this.A2w){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZC,this.A2w);}},Ev:function(G){A._GetAutoObject(A.Device.Device).Am.
Bl(this.Ade);if(!!this.A3C)this.Bgl();},Af_:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(null);},Bgl:function(){var AtS=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).Am.Lc(0,this.BdL);AtS.EM(Ad,A._GetAutoObject(
A.Device.Device).Am);AtS.Aws(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtS.
ArT(false);AtS.AwH(AtS.LactationNumber+1);AtS.Cq(A._GetAutoObject(A.Device.Device
).Am);},Ap4:function(G){this.A3C++;var BxS=A._GetAutoObject(A.Device.Converter).
Bg6(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3C<BxS)&&(A._GetAutoObject(
A.Device.Helper).Aj5(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A9(59,true,A.jV,0,[this,this.Ve]);else this.BcJ(
this);},Ve:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.BcJ(this);else if(!!At&&(At.PopupState===7))this.
AAR(this);},AAR:function(G){var B;var H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfQ=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Td=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJV=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuR)(B=this.AuR
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(H$);A._GetAutoObject(
A.Device.Helper).W.Aku(AfQ);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q0(Td);A._GetAutoObject(A.Device.Helper).W.Akw(AJV);},BcJ:function(
G){this.Bgl();A._GetAutoObject(C.A$).Fu();A._GetAutoObject(A.Device.Device).Am.Bl(
this.Ade);},A9z:function(E){if(A.aa0(this.AuR,E))return;this.AuR=E;},_Init:function(
aArg){this.__proto__=C.ARS;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ade)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMM={Init:function(aArg){
var B;A.zX([this,this.Bd8],[B=A._GetAutoObject(A.Device.Device),B.ASe,B.AZV],0);
this.Bd8(this);},Cq:function(){A.ab5("%s",Bsx);},EM:function(AcT){C.Vs.EM.call(this
,AcT);var O;for(O=16;O>0;O--)this.H_.Set(O,this.H_.Get(O-1));this.H_.Set(0,0);if(
this.CD<17)this.CD++;else A.ab5("%s",Bsy);},ADK:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bd8:
function(G){this.EM(A._GetAutoObject(A.Device.Device).Auw);A.we(this,0);},_Init:
function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AMM;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuJ={_Init:function(){C.
AMM._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JG={C5:null,V:null,A7s:true,T:function(E){C.IZ.T.call(this,E);this.
V.R(E);},De:function(E){C.IZ.De.call(this,E);this.V.L(E);},BmH:function(E){if(this.
A7s===E)return;this.A7s=E;this.C5.Z(E);},_Init:function(aArg){C.IZ._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JG;this.C5.DC(Bsz);this.C5.DL(BsA);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(BsB);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.IZ;this.C5._Done();this.V._Done();C.
IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.IZ._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APs={AgN:null,Dd:null,Abo:null,Fh:null,E8:
null,Init:function(aArg){var B;A.zX([this,this.A4c],[B=A._GetAutoObject(A.Device.
Device),B.AEw,B.AIO],0);A.pe([this,this.A4c],this);},De:function(E){C.Yt.De.call(
this,E);this.Dd.L(E);},AEC:function(G){A.pe([this,this.A4c],this);},AAT:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).Fg();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DQ(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).Am.Bl(Filter);}},C2:function(G){var B;var F;C.Yt.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjU));return;}var Byz=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DQ(38,0)
)?B:null);var Bbm=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DQ(14,0))?B:null);if(!!Byz)this.Dd.Aw(A.aaL(A.ach.AC3));else if(
!!Bbm&&(Bbm.A4===1))this.Dd.Aw(A.aaL(A.ach.AP3));else this.Dd.Aw(A.aaL(A.ach.AjU
));},A4c:function(G){var F;var Filter=null;var AOv;switch(A._GetAutoObject(A.Device.
Device).AbV){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACO();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOH();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mo();break;default:throw new Error(AZU+A._GetAutoObject(A.Device.
Device).AbV.toFixed());}var Ai2=this.Ako();if(Ai2>0){AOv=A._NewObject(A.Device.Int32FilterCriterion
,0);AOv.Initialize(1,4,Ai2,false);Filter.CW(AOv);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},Ol:function(G){if(!this.Ako())this.AW.AeU(true
);this.Bb(this.AW);this.An();},MU:function(G){this.AW.AeU(false);this.Bb(this.AgN
);this.An();},_Init:function(aArg){C.Yt._Init.call(this,aArg);C.Aq$._Init.call(this.
AgN={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abo._Init.call(this.Abo={
I:this},0);A.Core.BM._Init.call(this.Fh={I:this},0);A.Core.BM._Init.call(this.E8={
I:this},0);this.__proto__=C.APs;var B;this.H(BsC);this.AW.H(BsD);this.T1.H(BsE);
this.Gr.Z(false);this.AgN.H(BsF);this.Dd.H(BsG);this.Abo.As(A._GetAutoObject(A.Device.
Device).AbV);this.Fh.Filter=6;this.E8.Filter=7;this.JU(this.A_,-1);this.J(this.AgN
,-1);this.J(this.Dd,-1);this.AgN.CI(this.Abo);this.AgN.As([B=this.Abo,B.B7,B.B8]
);this.Dd.Aw(A.aaL(A.ach.AjU));this.Fh.BN=[this,this.Ol];this.E8.BN=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yt;this.AgN._Done();this.Dd.
_Done();this.Abo._Done();this.Fh._Done();this.E8._Done();C.Yt._Done.call(this);}
,_ReInit:function(){C.Yt._ReInit.call(this);this.AgN._ReInit();this.Dd._ReInit();
this.Abo._ReInit();this.Fh._ReInit();this.E8._ReInit();},_Mark:function(D){var B;
C.Yt._Mark.call(this,D);if((B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abo={AeO:null
,Init:function(aArg){var B;A.zX([this,this.BdN],[B=A._GetAutoObject(A.Device.Device
),B.AEw,B.AIO],0);A.pe([this,this.BdN],this);},Dn:function(){return 3;},As:function(
E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.Device).AwO(E);},ACN:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return null;return this.AeO.AsG(aIndex
);},ACP:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return-1;return this.
AeO.AsH(aIndex);},BdN:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbV;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeO._Init.call(this.AeO={I:this},0);this.__proto__=C.Abo;this.Cc.Set(0,
0);this.Cc.Set(1,1);this.Cc.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeO._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeO._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APD={Eq:null,IK:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Eq={I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=
C.APD;this.H(O2);this.Background.H(O2);this.Eq.H(AIl);this.Eq.R(A.aaR(A.acf.A6L)
);this.Eq.A6(0x12);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(Ayo);this.IK.
Hh(5);this.IK.A6(0x14);this.IK.R(A.aaR(A.acf.AGJ));this.IK.L(A.jb.Text);this.J(this.
Eq,0);this.J(this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ii));this.
Eq.Cu(A.aaL(A.fl.Bh));this.IK.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Eq._Done();this.IK._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(A.aaR(A.acf.
A6L));this.IK.R(A.aaR(A.acf.AGJ));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.
Ii));this.Eq.Cu(A.aaL(A.fl.Bh));this.IK.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JX:null,BfU:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bey(this);else A._GetAutoObject(A.Device.Device).A9(63,true,A.
jV,0,[this,this.Ve]);},Bey:function(G){A._GetAutoObject(C.A$).Fu();},Ve:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.Bey(this);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.JX={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APr);this.Jc.H(BsH);this.Jc.AkE(2);this.Acy.Z(false);this.ARx=12;this.
Number.H(BsI);this.Number.R(A.aaR(A.acf.A_0));this.A4I=false;this.JX.H(BsJ);this.
JX.Hh(5);this.JX.KS(true);this.JX.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABz));this.JX.L(A.jb.Text);this.JU(this.Jc,-1);this.JU(this.IP,-1);this.
JU(this.Acy,-1);this.J(this.JX,0);this.JX.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Me;this.JX._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.
call(this);this.JX._ReInit();this.Number.R(A.aaR(A.acf.A_0));this.JX.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABz));this.JX.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Me._Mark.call(this,D);if((B=this.JX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APr={_Init:function(aArg){C.AqY.
_Init.call(this,aArg);this.__proto__=C.APr;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Jc={AbM:null,AbL:null,AbK:null,QB:null,CountryToString:null,AsJ:0,CP:function(
){this.An();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QB.R(this.CountryToString.
Lt(A._GetAutoObject(A.Device.Converter).A69(A._GetAutoObject(A.Device.Device).Language
))+BsK);},AkE:function(E){if(this.AsJ===E)return;this.AsJ=E;var bitmap=null;var A1E=
BsL;var A1D=null;var A1F=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq_);break;case
1:{bitmap=A.aaL(A.ach.AQD);A1E=BsM;A1D=A.aaL(A.fl.Ak);A1F=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQE);A1E=BsN;A1D=A.aaL(A.fl.Bh);A1F=true;}break;default:throw new Error(
BsO+E.toFixed());}this.AbK.Aw(bitmap);this.AbL.Aw(bitmap);this.AbM.Aw(bitmap);this.
QB.H(A.abJ(this.QB.M,A1E));this.QB.S(A1D);this.QB.Z(A1F);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbM={I:this},0);A.acg.Ap._Init.call(this.AbL={I:this},0);A.acg.Ap._Init.
call(this.AbK={I:this},0);A.acg.Text._Init.call(this.QB={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jc;this.H(AID);this.
AbM.AZ(0x3);this.AbM.H(AID);this.AbM.L(A.jb.H6);this.AbM.Cv(2);this.AbL.AZ(0x3);
this.AbL.H(AID);this.AbL.L(A.jb.Ad8);this.AbL.Cv(1);this.AbK.AZ(0x3);this.AbK.H(
AID);this.AbK.L(A.jb.Text);this.AbK.Cv(0);this.QB.AZ(0x14);this.QB.H(BsP);this.QB.
L(0xFF020202);this.QB.Z(false);this.J(this.AbM,0);this.J(this.AbL,0);this.J(this.
AbK,0);this.J(this.QB,0);this.AbM.Aw(A.aaL(A.ach.Aq_));this.AbL.Aw(A.aaL(A.ach.Aq_
));this.AbK.Aw(A.aaL(A.ach.Aq_));this.QB.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbM._Done();this.AbL._Done();this.AbK._Done();this.QB._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbM._ReInit();this.AbL._ReInit();this.AbK._ReInit(
);this.QB._ReInit();this.CountryToString._ReInit();this.QB.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsJ={Transponder:0,BFA:1,BFB:2};C.APn={Ap:null,De:function(E){C.BR.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APn;this.Ap.H(AZD);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.APe));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
If:0,AaG:4,Al1:function(G){C.Q8.Al1.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdj()){this.If=A._GetAutoObject(A.Device.Helper).Uw.Id;var Aiu=A._GetAutoObject(
A.Device.Helper).A67(this.If,A._GetAutoObject(A.Device.Helper).W);if(Aiu){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.If),0,[
this,this.Ve]);return;}Aiu=A._GetAutoObject(A.Device.Helper).Bje(this.If,A._GetAutoObject(
A.Device.Helper).W);if(Aiu&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.If)){A._GetAutoObject(A.Device.Device).A9(25,true,A._GetAutoObject(A.Device.
Converter).Rf(this.If),0,[this,this.Ve]);return;}this.AaG=A._GetAutoObject(A.Device.
Helper).AQ9(this.If);switch(this.AaG){case 0:A._GetAutoObject(A.Device.Device).A9(
45,true,this.If.toFixed().length.toFixed(),0,[this,this.Ve]);break;case 1:case 2:{
var BO=A._GetAutoObject(A.Device.Converter).AxK(this.If);A._GetAutoObject(A.Device.
Device).A9(46,true,BO.toFixed(),0,[this,this.Ve]);}break;case 3:this.BfM();break;
default:throw new Error(AH$+this.AaG.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A$).Fu();},Ve:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.AaG===2)this.BfM();else A._GetAutoObject(
A.Device.Device).AhC();break;case 5:this.Ev(this);break;default:;}},BfM:function(
){A._GetAutoObject(A.Device.Helper).W.Nd(this.If);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.Q2(this.If);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(A.Device.
Device).A9(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.A_T
));this.Jc.H(BsQ);this.IP.H(BsR);this.AkE(1);this.N.CB=[this,this.Ev];this.N.CY(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_T));},_className:"Application::SetSaveNaisIdScreen"};C.AN1={LO:function(
G){C.AqH.LO.call(this,G);A.pe([this,this.BBj],this);},BBj:function(G){this.JD(this.
Ef);},_Init:function(aArg){C.AqH._Init.call(this,aArg);this.__proto__=C.AN1;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UL={Animal:null,WhereAboutsToString:
null,FX:function(aIndex){return this.WhereAboutsToString.BH(this.C4(aIndex));},As:
function(E){C.Cm.As.call(this,E);if(!!this.Animal)this.Animal.Nf(E);},A4k:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B7,this.B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4k],[B=this.Animal,B.Awg,B.Nf],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4k],[B=this.Animal,B.Awg,B.Nf],0);A.pe([this,this.A4k],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UL;this.Cc.Set(0,1);this.
Cc.Set(1,2);this.Cc.Set(2,3);this.Cc.Set(3,4);this.Cc.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UM={Dn:function(){return 6;},_Init:function(aArg){C.UL._Init.call(this,aArg);
this.__proto__=C.UM;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,2);this.Cc.Set(
3,3);this.Cc.Set(4,4);this.Cc.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcJ={Dn:function(){return 5;},_Init:function(aArg){C.UL._Init.call(this,aArg
);this.__proto__=C.AcJ;this.Cc.Set(0,6);this.Cc.Set(1,7);this.Cc.Set(2,8);this.Cc.
Set(3,9);this.Cc.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdR={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bb5],[B=A._GetAutoObject(A.Device.
Device),B.ASf,B.AZW],0);A.pe([this,this.Bb5],this);},Dn:function(){return 2;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awj(E);},Bb5:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agq;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdR;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGx={FE:null
,Ez:null,EartagNrAssignmentMode:null,Fh:null,E8:null,HC:null,AW:null,Kj:null,M8:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hf){this.AW.FH(A.jb.CK);this.HC.CT(A.jb.CK);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FH(A.jb.CS);this.HC.CT(A.jb.CS);this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf){this.AW.FH(A.jb.CK);this.HC.CT(
A.jb.CK);}else{this.AW.FH(A.jb.CS);this.HC.CT(A.jb.CS);}this.Bb(null);}this.M8.L(
this.V.AQ);},IW:function(G){C.Eg.IW.call(this,G);if(!this.A8)this.FP(this);else this.
G_(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.
N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(
F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:this.FE.AkO((F=this.N,F[1].call(F[0])));}},FP:function(G){this.
Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8&&!!this.N)
this.FE.Ajx((F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SJ(2);else this.AW.SJ(7);}break;default:throw new Error(
Atc+this.A8.toFixed());}this.DJ(this);this.An();},By:function(E){if(this.AM===E)
return;this.AM=E;},Ol:function(G){this.AA1(2);},MU:function(G){this.AA1(7);},AA1:
function(Gw){var B;var Azn=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azn){
var AAe=(A.Core.P.isPrototypeOf(B=this.QD(Azn,Gw,0x15))?B:null);if(!!AAe){this.Bb(
AAe);return true;}}return false;},AfX:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M8.Aw(
A._GetAutoObject(A.Device.Converter).AmP(2));break;case 1:this.M8.Aw(A._GetAutoObject(
A.Device.Converter).AmP((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
Bae+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3V],this);},A3V:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Kj.AeW(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Ano,B.AoB]);this.Kj.
AeW([B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIL]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Av9
,B.AyC]);this.Kj.AeW([B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZY]);}break;case
0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyD]);this.Kj.AeW([B=
A._GetAutoObject(A.Device.Device),B.ASm,B.AZZ]);}break;case 2:{this.AW.As([B=A._GetAutoObject(
A.Device.Device),B.Ano,B.AoB]);this.Kj.AeW([B=A._GetAutoObject(A.Device.Device),
B.AEs,B.AIL]);}break;default:throw new Error(BsS+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bae+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.AfX],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.AfX],this.Ez,0);if(!!
E)A.pe([this,this.AfX],this);},Akv:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfX],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfX],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfX],this);},Ue:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BM._Init.call(this.Fh={I:this},0);A.Core.
BM._Init.call(this.E8={I:this},0);C.Aq$._Init.call(this.HC={I:this},0);C.AvK._Init.
call(this.AW={I:this},0);C.AuV._Init.call(this.Kj={I:this},0);A.acg.Ap._Init.call(
this.M8={I:this},0);this.__proto__=C.AGx;var B;this.H(UT);this.V.Ar(false);this.
V.R(As6);this.V.L(A.jb.Bm);this.Fh.Filter=6;this.E8.Filter=7;this.HC.H(BsT);this.
AW.H(BsU);this.M8.H(BsV);this.J(this.HC,0);this.J(this.AW,0);this.J(this.M8,0);this.
FE=A._NewObject(C.Aep,0);this.Fh.BN=[this,this.Ol];this.E8.BN=[this,this.MU];this.
HC.CI(this.Kj);this.HC.As([B=this.Kj,B.B7,B.B8]);this.AW.As([this,this.Ue,this.By
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fh._Done();this.E8.
_Done();this.HC._Done();this.AW._Done();this.Kj._Done();this.M8._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fh._ReInit();this.E8.
_ReInit();this.HC._ReInit();this.AW._ReInit();this.Kj._ReInit();this.M8._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FE)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANQ={Wk:
null,Zd:null,Y$:null,T8:null,Init:function(aArg){this.Bb(this.Wk);},AEk:function(
G){var BdJ=(C.Ane.isPrototypeOf(G)?G:null);if(!!BdJ)A._GetAutoObject(A.Device.Device
).A9(BdJ.Ady,true,A.jV,0,null);},DE:function(G){if((this.Cr.CO===7)&&(this.AV===
this.T8))A._GetAutoObject(A.Device.Device).A9(10,true,A.jV,0,null);else if((this.
Cr.CO===6)&&(this.AV===this.T8))A._GetAutoObject(C.A$).Cg(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Ane._Init.call(this.Wk={I:
this},0);C.Ane._Init.call(this.Zd={I:this},0);C.Ane._Init.call(this.Y$={I:this},
0);C.Ane._Init.call(this.T8={I:this},0);this.__proto__=C.ANQ;this.Dq(C.AO4);this.
Wk.H(IR);this.Wk.Aj(true);this.Wk.T(A.aaR(A.acf.AhB));this.Wk.Bg(false);this.Wk.
Ady=79;this.Zd.H(P7);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A$a));this.Zd.Bg(true
);this.Zd.Ady=77;this.Y$.H(Aaf);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.A6G));this.
Y$.Bg(false);this.Y$.Ady=78;this.T8.H(Ald);this.T8.Aj(true);this.T8.T(A.aaR(A.acf.
About));this.T8.Bg(true);this.T8.Ady=3;this.J(this.Wk,-1);this.J(this.Zd,-1);this.
J(this.Y$,-1);this.J(this.T8,-1);this.Wk.AR=[this,this.AEk];this.Zd.AR=[this,this.
AEk];this.Y$.AR=[this,this.AEk];this.T8.AR=[this,this.AEk];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wk._Done();this.Zd._Done();this.Y$._Done();this.
T8._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.
Wk._ReInit();this.Zd._ReInit();this.Y$._ReInit();this.T8._ReInit();this.Wk.T(A.aaR(
A.acf.AhB));this.Zd.T(A.aaR(A.acf.A$a));this.Y$.T(A.aaR(A.acf.A6G));this.T8.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AO4={_Init:function(aArg){C.KO.
_Init.call(this,aArg);this.__proto__=C.AO4;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.ANO={FactoryResetScope:null,T$:null,Wi:null
,Ub:null,Init:function(aArg){this.Bb(this.T$);A.pe([this,this.MG],this);},BjY:function(
G){switch(this.FactoryResetScope.C4(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A9(33,true,A.jV,0,[this,this.BfA]);break;case 0:A._GetAutoObject(
A.Device.Device).A9(7,true,A.jV,0,[this,this.BfA]);break;default:A.ab5("%s%i",BsW
,this.FactoryResetScope.Q);}},BfA:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.
Device.Device).Bn0();A._GetAutoObject(A.Device.Device).A9(8,true,A.jV,0,null);A.
_GetAutoObject(C.A$).Cg(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).BnZ(
);A._GetAutoObject(A.Device.Device).ArQ(0);A._GetAutoObject(A.Device.Device).ArR(
0);A._GetAutoObject(A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArW(
0);A._GetAutoObject(A.Device.Device).ArX(0);A._GetAutoObject(A.Device.Device).ArY(
0);A._GetAutoObject(A.Device.Device).Uh(5);A._GetAutoObject(A.Device.Device).Awv(
0);A._GetAutoObject(A.Device.Device).Aww(0);A._GetAutoObject(A.Device.Device).Awx(
0);A._GetAutoObject(A.Device.Device).AwP(1);A._GetAutoObject(A.Device.Device).AwQ(
1);A._GetAutoObject(A.Device.Device).AwR(1);A._GetAutoObject(A.Device.Device).A9(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AIa,At.Id);}},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);C.Nb._Init.call(this.T$={I:this},0);C.Nb._Init.call(this.Wi={I:this},
0);C.BW._Init.call(this.Ub={I:this},0);this.__proto__=C.ANO;var B;this.Dq(C.AO2);
this.T$.H(IR);this.T$.Aj(true);this.T$.T(A.aaR(A.acf.ACj));this.T$.Bg(false);this.
T$.Ne(93);this.Wi.H(P7);this.Wi.Aj(true);this.Wi.T(A.aaR(A.acf.AdQ));this.Wi.Bg(
true);this.Wi.Ne(92);this.Ub.H(Baf);this.Ub.Aj(true);this.Ub.Blg(true);this.Ub.T(
A.aaR(A.acf.A5_));this.Ub.Bg(false);this.J(this.T$,-1);this.J(this.Wi,-1);this.J(
this.Ub,-1);this.T$.AR=[B=this.T$,B.Nh];this.Wi.AR=[B=this.Wi,B.Nh];this.Ub.AR=[
this,this.BjY];this.Ub.As([B=this.FactoryResetScope,B.B7,B.B8]);this.Ub.CI(this.
FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope.
_Done();this.T$._Done();this.Wi._Done();this.Ub._Done();C.Ei._Done.call(this);},
_ReInit:function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T$._ReInit();this.Wi._ReInit();this.Ub._ReInit();this.T$.T(A.aaR(A.acf.ACj));this.
Wi.T(A.aaR(A.acf.AdQ));this.Ub.T(A.aaR(A.acf.A5_));},_Mark:function(D){var B;C.Ei.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AO2={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO2;this.
Text.R(A.aaR(A.acf.ACl));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACl));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.Aq0={QP:null,V$:null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.
call(this.QP={I:this},0);C.CH._Init.call(this.V$={I:this},0);this.__proto__=C.Aq0;
this.QP.H(BsX);this.QP.R(A.aaR(A.acf.A_4));this.QP.A6(0x12);this.QP.L(A.jb.Text);
this.V$.H(A$$);this.V$.R(A.aaR(A.acf.An4));this.V$.L(A.jb.Text);this.J(this.QP,0
);this.J(this.V$,0);this.QP.S(A.aaL(A.fl.Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.
Cu(A.aaL(A.fl.Bh));this.V$.S(A.aaL(A.fl.Af));this.V$.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TS;this.QP._Done();this.V$._Done();C.TS._Done.call(this
);},_ReInit:function(){C.TS._ReInit.call(this);this.QP._ReInit();this.V$._ReInit(
);this.QP.R(A.aaR(A.acf.A_4));this.V$.R(A.aaR(A.acf.An4));this.QP.S(A.aaL(A.fl.Af
));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Cu(A.aaL(A.fl.Bh));this.V$.S(A.aaL(A.fl.Af
));this.V$.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TS._Mark.call(this,D);
if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APy={QQ:
null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.call(this.QQ={I:
this},0);this.__proto__=C.APy;this.QQ.H(BsY);this.QQ.R(A.aaR(A.acf.Ud));this.QQ.
A6(0x12);this.QQ.L(A.jb.Text);this.J(this.QQ,0);this.QQ.S(A.aaL(A.fl.Af));this.QQ.
A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=
C.TS;this.QQ._Done();C.TS._Done.call(this);},_ReInit:function(){C.TS._ReInit.call(
this);this.QQ._ReInit();this.QQ.R(A.aaR(A.acf.Ud));this.QQ.S(A.aaL(A.fl.Af));this.
QQ.A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TS.
_Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqt={IH:null,AbB:null,Ea:null,Bk:function(aSize){C.M1.Bk.call(this,aSize);this.
IH.H([this.Gv.M[2],0,this.Gv.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.AbB.H([this.IH.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.AbB.L(this.Gv.AQ);this.IH.L(this.
Gv.AQ);},Cf:function(Ad){C.M1.Cf.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(
!!this.AX){var H$=this.AX.AmQ(Ad,14);var AtL=this.AX.AOL(Ad,7);this.IH.Aw(A._GetAutoObject(
A.Device.Converter).AmP(AtL));this.AbB.Aw(A._GetAutoObject(A.Device.Converter).A4N(
H$));this.An();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IH={I:this},0);A.acg.Ap._Init.call(this.AbB={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqt;this.IH.H(Bab);this.IH.L(A.jb.Text
);this.AbB.H(BsZ);this.AbB.L(A.jb.Text);this.Ea.H(Bs0);this.Ea.L(A.jb.Bc);this.J(
this.IH,0);this.J(this.AbB,0);this.J(this.Ea,0);this.IH.Aw(A.aaL(A.aci.TJ));this.
AbB.Aw(A.aaL(A.aci.TJ));},_Done:function(){this.__proto__=C.M1;this.IH._Done();this.
AbB._Done();this.Ea._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IH._ReInit();this.AbB._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM6={ZP:null
,Bk:function(aSize){C.M1.Bk.call(this,aSize);this.ZP.H([this.Gv.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.ZP.L(this.Gv.AQ);},Cf:function(
Ad){C.M1.Cf.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var J$=this.
AX.KN(Ad,26);if(J$>0)this.ZP.R(A.ab2(J$.toFixed(),5));else this.ZP.R(Rl);this.An(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZP={I:this},0);this.__proto__=C.AM6;this.ZP.H(Bs1);this.J(this.ZP,0);this.ZP.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.ZP._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.ZP._ReInit();this.ZP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.ZP
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARK={Ap:null,Ai:function(Ae){C.AeP.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARK;this.Text.H(Bs2);this.Ap.H(AZP);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Ae_));},_Done:function(){this.__proto__=C.AeP;this.Ap._Done(
);C.AeP._Done.call(this);},_ReInit:function(){C.AeP._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeP._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Ys={Text:
null,Dd:null,AP:null,Gr:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nl],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AII],0);A.zV([this,this.Nl
],A._GetAutoObject(A.Device.Device).Am,0);A.pe([this,this.Nl],this);},De:function(
E){C.BR.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gr.L(E);this.D2.Zt(E);}
,Ww:function(E){C.BR.Ww.call(this,E);this.D2.CT(E);},DY:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).Am.Ca().toFixed());},Nl:function(s){this.DY(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C5._Init.call(this.A_={I:this},0);this.__proto__=C.Ys;this.Text.H(Bs3);this.
Text.A6(0x11);this.Dd.H(Ayr);this.AP.DC(A$7);this.AP.DL(A$8);this.AP.L(A.jb.Bc);
this.Gr.H(Bs4);this.Gr.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(Bs5);this.D2.Zt(A.jb.
Bm);this.D2.CT(A.jb.Re);this.D2.Hh(2);this.A_.DC(Bs6);this.A_.DL(Bs7);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gr,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjU));this.Gr.Aw(A.aaL(A.ach.Gr));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gr._Done();this.D2._Done();this.A_.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gr._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Aco={FE:null
,JS:null,JR:null,AkL:null,AkM:null,Q3:null,QA:null,AbA:null,VY:null,PF:null,PG:null
,St:null,Gs:null,Gt:null,Js:null,AlJ:0,AlO:0,D7:0,DX:0,A8:0,Bk:function(aSize){var
B;this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.H2.M[0]+10,this.Ht.M[3]]);this.Dy.
AFb((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.Go,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!!this.
Q)this.GE(this);if((this.A8===1)||(this.A8===2)){var A01=this.A1Z(this.A8);if(!!
A01){this.AbA.Z(true);this.AbA.H(A01.M);this.AbA.L(this.V.AQ);this.VY.Z(true);this.
VY.H(A01.M);}else{this.AbA.Z(false);this.VY.Z(false);}this.Ht.Z(false);this.H2.Z(
false);}else{this.AbA.Z(false);this.VY.Z(false);this.Ht.Z(Fq||GA);this.H2.Z(Fq||
GA);}},Qm:function(G){if(!!this.Q){if(this.FB===1)A.pe([this,this.U8],this);else
if(this.FB===4)A.pe([this,this.A0j],this);else if(this.FB===5)A.pe([this,this.A0h
],this);}C.BW.Qm.call(this,G);},J_:function(G){switch(this.A8){case 0:C.BW.J_.call(
this,G);break;case 2:break;default:this.Ads(this);}},J5:function(G){switch(this.
A8){case 0:C.BW.J5.call(this,G);break;default:this.Aim(this);}},A1v:function(G){
var F;if(this.A8===1){var BQ=this.D7;this.D7=this.D7-10;if(this.D7<this.AlO)this.
D7=this.AlO;if(this.D7<A._GetAutoObject(A.Device.Device).Z1)this.D7=A._GetAutoObject(
A.Device.Device).Z1;if(this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.
D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.DX;this.DX=this.DX-10;if(this.
DX<this.D7)this.DX=this.D7;if(this.DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[
0],this.DX));A.abo(this.JR,0);}}this.DJ(this);this.An();},A0h:function(s){this.A1v(
s);},AlZ:function(G){this.FB=5;this.An();if(this.Bo.Bw){A.pe([this,this.A0h],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A16:function(G){var F;if(this.A8===1){var
BQ=this.D7;this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ
){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===
2){var BQ=this.DX;this.DX=this.DX+10;if(this.DX>this.AlJ)this.DX=this.AlJ;if(this.
DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.
DJ(this);this.An();},A0j:function(s){this.A16(s);},Al0:function(G){this.FB=4;this.
An();if(this.Bo.Bw){A.pe([this,this.A0j],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U8:function(G){this.Ew(this.A8+1);},Ads:function(G){this.FB=1;this.An(
);if(this.Bo.Bw){A.pe([this,this.U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GE:function(G){},AfB:function(s){this.GE(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FI(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FE.AkO((F=this.N,F[1].call(F[
0])));}},A90:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.
A3r],this.JS,0);this.JS=E;if(!!this.JS)A.zX([this,this.A3r],this.JS,0);A.pe([this
,this.A3r],this);},A3r:function(G){var F;this.D7=(F=this.JS,F[1].call(F[0]));this.
An();},A9Z:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.A3q
],this.JR,0);this.JR=E;if(!!this.JR)A.zX([this,this.A3q],this.JR,0);A.pe([this,this.
A3q],this);},A3q:function(G){var F;this.DX=(F=this.JR,F[1].call(F[0]));this.An();
},FP:function(G){this.Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;
if(!this.A8)this.FE.Ajx((F=this.N,F[1].call(F[0])));this.A8=EO;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=!!this.A8;this.
An();},Aim:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3E:function(G){},AyM:function(
s){this.A3E(s);},A3d:function(G){},Bbi:function(s){this.A3d(s);},A1Z:function(Atl
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkL={I:this},0);A.acg.AK._Init.call(this.AkM={I:this},0);A.acg.AK._Init.call(
this.Q3={I:this},0);A.acg.Ap._Init.call(this.QA={I:this},0);A.acg.AK._Init.call(
this.AbA={I:this},0);A.acg.BU._Init.call(this.VY={I:this},0);A.acg.Text._Init.call(
this.PF={I:this},0);A.acg.Text._Init.call(this.PG={I:this},0);A.acg.Text._Init.call(
this.St={I:this},0);A.Core.BM._Init.call(this.Gs={I:this},0);A.Core.BM._Init.call(
this.Gt={I:this},0);A.Core.BM._Init.call(this.Js={I:this},0);this.__proto__=C.Aco;
this.H(Afy);this.T(A.aaR(A.acf.Arn));this.Background.H(Afy);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGR));this.V.A6(0x12);this.AkL.H(Bs8);this.AkL.L(A.jb.Gf);this.AkM.
H(Bs9);this.AkM.L(A.jb.H6);this.Q3.H(Bs_);this.Q3.L(A.jb.E1);this.QA.H(Bs$);this.
AbA.H(Bta);this.VY.H(Btb);this.VY.Ng(3);this.VY.L(A.jb.AV);this.VY.Z(false);this.
PF.H(Btc);this.PF.Hh(8);this.PF.I7(true);this.PF.A6(0x11);this.PF.L(0xFF000000);
this.PG.H(Btd);this.PG.Hh(8);this.PG.I7(true);this.PG.A6(0x11);this.PG.L(0xFF000000
);this.St.H(Bte);this.St.I7(false);this.St.A6(0x12);this.St.L(0xFF000000);this.Gs.
Filter=5;this.Gs.Bw=false;this.Gt.Filter=4;this.Gt.Bw=false;this.Js.Filter=1;this.
JU(this.V,-1);this.JU(this.Dy,-2);this.J(this.AkL,-1);this.J(this.AkM,-1);this.J(
this.Q3,-1);this.J(this.QA,-1);this.J(this.AbA,-1);this.J(this.VY,-1);this.J(this.
PF,-1);this.J(this.PG,0);this.J(this.St,0);this.QA.Aw(A.aaL(A.ach.ADq));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.St.S(A.aaL(A.fl.Ak));this.Gs.BN=[
this,this.AlZ];this.Gs.D1=[this,this.A0h];this.Gt.BN=[this,this.Al0];this.Gt.D1=[
this,this.A0j];this.Js.BN=[this,this.Ads];this.FE=A._NewObject(C.Aep,0);},_Done:
function(){this.__proto__=C.BW;this.AkL._Done();this.AkM._Done();this.Q3._Done();
this.QA._Done();this.AbA._Done();this.VY._Done();this.PF._Done();this.PG._Done();
this.St._Done();this.Gs._Done();this.Gt._Done();this.Js._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkL._ReInit();this.AkM._ReInit(
);this.Q3._ReInit();this.QA._ReInit();this.AbA._ReInit();this.VY._ReInit();this.
PF._ReInit();this.PG._ReInit();this.St._ReInit();this.Gs._ReInit();this.Gt._ReInit(
);this.Js._ReInit();this.T(A.aaR(A.acf.Arn));this.V.R(A.aaR(A.acf.AGR));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.St.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JR)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FD={XV:null,Acq:
null,An8:0,An9:0,Dn:function(){if(!this.XV)return 0;return this.XV.MC;},C4:function(
aIndex){if(!this.XV||(aIndex>=this.XV.MC))return-1;return this.XV.Get(aIndex);},
FX:function(aIndex){return this.A6q().BH(this.C4(aIndex));},DU:function(A7){if(!
this.XV)return-1;return this.XV.Avk(A7);},HH:function(){if(!this.XV)return-1;return this.
XV.HH();},AnF:function(E){if(this.An8===E)return;this.An8=E;A.pe([this,this.AVs]
,this);},A0d:function(Aq){this.AnF(Aq);},AnG:function(E){if(this.An9===E)return;
this.An9=E;A.pe([this,this.AVt],this);},A0e:function(Aq){this.AnG(Aq);},AVt:function(
G){A.abo([this,this.ASL,this.A0e],0);},AVs:function(G){A.abo([this,this.ASK,this.
A0d],0);},A6q:function(){return this.Acq;},ASK:function(){return this.An8;},ASL:
function(){return this.An9;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.FD;},_Done:function(
){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acq)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMA={Init:
function(aArg){A.zV([this,this.BeM],A._GetAutoObject(A.Device.Helper).UC,0);A.zV([
this,this.BeK],A._GetAutoObject(A.Device.Helper).UB,0);this.BeM(this);this.BeK(this
);},As:function(E){C.FD.As.call(this,E);this.AnG(A._GetAutoObject(A.Device.Helper
).UC.Get(this.DU(E)));this.AnF(A._GetAutoObject(A.Device.Helper).UB.Get(this.DU(
E)));},AnF:function(E){if(this.An8===E)return;C.FD.AnF.call(this,E);A._GetAutoObject(
A.Device.Helper).UB.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UB.
Cq();},AnG:function(E){if(this.An9===E)return;C.FD.AnG.call(this,E);A._GetAutoObject(
A.Device.Helper).UC.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UC.
Cq();},BeM:function(G){this.An9=A._GetAutoObject(A.Device.Helper).UC.Get(this.DU(
this.Q));A.pe([this,this.AVt],this);},BeK:function(G){this.An8=A._GetAutoObject(
A.Device.Helper).UB.Get(this.DU(this.Q));A.pe([this,this.AVs],this);},_Init:function(
aArg){C.FD._Init.call(this,aArg);this.__proto__=C.AMA;this.XV=A._GetAutoObject(A.
Device.Helper).AdW;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMB={Agv:null,ABN:0,ABM:0,Init:function(aArg){A.zV([this,this.BeZ],A._GetAutoObject(
A.Device.Helper).Afs,0);A.zV([this,this.BeX],A._GetAutoObject(A.Device.Helper).Afr
,0);A.zV([this,this.BeV],A._GetAutoObject(A.Device.Helper).Afq,0);A.zV([this,this.
Be1],A._GetAutoObject(A.Device.Helper).Aft,0);this.BeZ(this);this.BeX(this);this.
BeV(this);this.Be1(this);},As:function(E){C.FD.As.call(this,E);this.AnG(A._GetAutoObject(
A.Device.Helper).Afs.Get(this.DU(E)));this.AnF(A._GetAutoObject(A.Device.Helper).
Afr.Get(this.DU(E)));this.ASP(A._GetAutoObject(A.Device.Helper).Afq.Get(this.DU(
E)));this.ASR(A._GetAutoObject(A.Device.Helper).Aft.Get(this.DU(E)));},AnF:function(
E){if(this.An8===E)return;C.FD.AnF.call(this,E);A._GetAutoObject(A.Device.Helper
).Afr.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afr.Cq();},AnG:function(
E){if(this.An9===E)return;C.FD.AnG.call(this,E);A._GetAutoObject(A.Device.Helper
).Afs.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afs.Cq();},A6q:function(
){return this.Agv;},BeZ:function(G){this.An9=A._GetAutoObject(A.Device.Helper).Afs.
Get(this.DU(this.Q));A.pe([this,this.AVt],this);},BeX:function(G){this.An8=A._GetAutoObject(
A.Device.Helper).Afr.Get(this.DU(this.Q));A.pe([this,this.AVs],this);},ASR:function(
E){if(this.ABN===E)return;this.ABN=E;A._GetAutoObject(A.Device.Helper).Aft.Set(this.
DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Aft.Cq();A.pe([this,this.A$y],this
);},ASP:function(E){if(this.ABM===E)return;this.ABM=E;A._GetAutoObject(A.Device.
Helper).Afq.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afq.Cq();A.
pe([this,this.A$x],this);},A$x:function(G){A.abo([this,this.A8c,this.ASP],0);},A$y:
function(G){A.abo([this,this.A8d,this.ASR],0);},BeV:function(G){this.ABM=A._GetAutoObject(
A.Device.Helper).Afq.Get(this.DU(this.Q));A.pe([this,this.A$x],this);},Be1:function(
G){this.ABN=A._GetAutoObject(A.Device.Helper).Aft.Get(this.DU(this.Q));A.pe([this
,this.A$y],this);},A8d:function(){return this.ABN;},A8c:function(){return this.ABM;
},_Init:function(aArg){C.FD._Init.call(this,aArg);A.Device.Agv._Init.call(this.Agv={
I:this},0);this.__proto__=C.AMB;this.XV=A._GetAutoObject(A.Device.Helper).Agw;this.
Init(aArg);},_Done:function(){this.__proto__=C.FD;this.Agv._Done();C.FD._Done.call(
this);},_ReInit:function(){C.FD._ReInit.call(this);this.Agv._ReInit();},_Mark:function(
D){var B;C.FD._Mark.call(this,D);if((B=this.Agv)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMh={RJ:null,Init:function(
aArg){var B;A.zX([this,this.AiK],[B=this.AnimalType,B.B7,B.B8],0);A.pe([this,this.
AiK],this);this.Bb(this.RJ);},Bl:function(E){C.I0.Bl.call(this,E);this.RJ.By(this.
Jn.AM);},AiK:function(G){A._GetAutoObject(A.Device.Device).Awy(this.AnimalType.Q
);},_Init:function(aArg){C.I0._Init.call(this,aArg);C.TD._Init.call(this.RJ={I:this
},0);this.__proto__=C.AMh;var B;this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(false
);this.RJ.H(AIE);this.RJ.Aj(true);this.RJ.Nc(14);this.RJ.Ahm(0);this.RJ.OM(0);this.
J(this.RJ,-4);this.RJ.AR=[this,this.AAm];this.RJ.As([B=this.AnimalType,B.B7,B.B8
]);this.RJ.CI(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I0;this.RJ._Done();C.I0._Done.call(this);},_ReInit:function(){C.I0._ReInit.call(
this);this.RJ._ReInit();},_Mark:function(D){var B;C.I0._Mark.call(this,D);if((B=
this.RJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TD={Filter:null,Ep:0,TableId:0,Operator:1,CP:function(){var F;this.To((F=this.
Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));},Bk:function(aSize){var B;C.
BW.Bk.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Ht.H(AhP
);this.H2.H([aSize[0]-40,40,aSize[0],80]);this.Dy.H([this.Ht.M[2]-5,this.Ht.M[1]
,this.H2.M[0]+5,this.Ht.M[3]]);this.Dy.AFb((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.
Dy.Go,true,null,null);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$
],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.
Operator));else this.To(null);},Ahm:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L$],this);},Nc:function(E){if(this.Ep===E)return;this.
Ep=E;A.pe([this,this.L$],this);},To:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmR(this.TableId,this.Ep));this.An();},OM:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L$],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TD;this.H(JZ);this.V.A6(0x11);this.V.Cu(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cu(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ART={Gb:null,MP:null,DZ:null,Y:null,Ef:null,Cn:null,CG:null,C$:null,Gi:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jd:null,AnimalType:null,Gender:null,Pj:
null,KY:null,Jb:null,YG:null,Ame:null,KI:0,M2:0,A3M:false,Init:function(aArg){var
B;A.zX([this,this.BAb],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIM],0);A.zV([
this,this.AtX],this.MP,0);A.zX([this,this.AtX],[B=A._GetAutoObject(A.Device.Device
),B.Awf,B.AyH],0);A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.AEt
,B.AIM],0);A.zV([this,this.GE],this.MP,0);A.zX([this,this.AiK],this.BZ.Q,0);A.pe([
this,this.AiK],this);A.pe([this,this.Ben],this);A.pe([this,this.AtX],this);A.pe([
this,this.GE],this);A.pe([this,this.A3e],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALm],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArJ(A.jb.E1);else
this.Ef.ArJ(A.jb.Gf);if(A._GetAutoObject(A.Device.Device).AeJ){if(!!(F=this.Cn.Dj
,F[1].call(F[0])))this.Cn.ArJ(A.jb.E1);else this.Cn.ArJ(A.jb.Gf);}else this.Cn.ArJ(
A.jb.Re);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},LO:function(
G){if(A._GetAutoObject(A.Device.Device).Am.Lh())A._GetAutoObject(A.Device.Device
).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gm();A._GetAutoObject(A.Device.Helper).Aqh(A._GetAutoObject(A.
Device.Helper).W);this.Apz();},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(
A.Device.Device).AFi(0);},E3:function(G){C.AB.E3.call(this,G);this.Jb.Ar(false);
A._GetAutoObject(A.Device.Device).Un(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.Hi();A._GetAutoObject(C.A$).Fu();},Fe:function(G){var B;this.Ay.
Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},AtX:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALm(this);this.An();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).Am.Aeh(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter
).Rf((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A25]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A24],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeJ)this.JD(this.Cn);}var BdC=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeJ||!!(CA=this.Cn.Dj,CA[1].call(CA[0])));if(this.MP.AOG()>0){if((
this.AV===this.Cn)&&BdC)this.Bb(this.Y.TL(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeJ&&(this.AV===this.Cn))&&!!(F=this.Cn.Dj,F[1].call(F[0])))this.
JD(this.Ef);if(BdC)this.Bcp(this);},XB:function(G){A._GetAutoObject(A.Device.Device
).Ds(13);},AiY:function(){var F;this.Gb.Cq(A._GetAutoObject(A.Device.Device).Am);
if(this.MP.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);else{var L6=A._GetAutoObject(A.Device.Device).Am.Lc(0,this.Gb.Id);A._GetAutoObject(
A.Device.Device).SK(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
this.Gb.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gb.DateOfBirth);B1.
Cq(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var L6=A._GetAutoObject(A.Device.
Device).Am.Lc(0,this.Gb.Id);A._GetAutoObject(A.Device.Device).SK(L6);var B1=A._NewObject(
A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(this.Gb.Id);B1.OnSetBodyWeight(this.
M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WA(65280);this.Jb.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFi(F.AvR+1));this.A3M=true;A.pe([this,
this.ALm],this);this.Apz();},GE:function(G){this.Cn.ATp(A._GetAutoObject(A.Device.
Device).AeJ);A._GetAutoObject(A.Device.Helper).JV(this.BZ,this.MP.NU(14));A._GetAutoObject(
A.Device.Helper).JV(this.C9,this.MP.NU(23));A._GetAutoObject(A.Device.Helper).JV(
this.CG,this.MP.NU(32));A._GetAutoObject(A.Device.Helper).JV(this.Ee,this.MP.NU(
18));A._GetAutoObject(A.Device.Helper).JV(this.C$,this.MP.NU(7));A._GetAutoObject(
A.Device.Helper).JV(this.Gi,this.MP.NU(34));this.YG.Z(!this.MP.AOG());var O;var Aa=
null;var Apg=this.AV;for(O=0;O<this.MP.AfK.NP();O++){Aa=this.By8(this.MP.AfK.OC(
O));if(!!Aa)this.ZE(Aa);}this.JD(Apg);A._GetAutoObject(A.Device.Helper).ANr(this.
Y);A.pe([this,this.A3e],this);this.An();},AeT:function(E){if(this.KI===E)return;
this.KI=E;A.abo([this,this.Av3,this.AeT],0);},Ahg:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Anm,this.Ahg],0);},Bcp:function(G){this.Gb.Gm();A._GetAutoObject(
A.Device.Helper).Aqh(this.Gb);this.Gb.Q0(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gb.Nd(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gb.SB(A._GetAutoObject(
A.Device.Helper).AMi(0,this.Gb));this.Gb.Ae0(true);if(this.MP.NU(14))this.Gb.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NU(32))this.Gb.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NU(7))this.Gb.JP(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NU(34))this.Gb.Nf(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alo=A._GetAutoObject(A.Device.Helper).A1i(this.Gb,0,A._GetAutoObject(
A.Device.Device).Am);if(!Alo)this.AiY();else A._GetAutoObject(A.Device.Helper).AKg(
this.Gb,Alo,0,0,[this,this.ApF]);},Apz:function(){A._GetAutoObject(A.Device.Helper
).W.Nd(0);if(A._GetAutoObject(A.Device.Device).AeJ)A._GetAutoObject(A.Device.Helper
).W.Q0(0);this.AeT(0);this.Ahg(0);this.JD(this.Ef);this.An();},ApF:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.Apz();break;case 43:this.JD(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As4,At.Id);}},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true
,null,null);this.Y.Vt(null,null);},Ben:function(G){this.Ee.Ahk(A._GetAutoObject(
A.Device.Helper).W.AhN(1));this.AtX(this);},AiK:function(G){this.C9.Ahk(A._GetAutoObject(
A.Device.Helper).Abq(this.AnimalType.Q));},A3e:function(G){var B;var BBh=this.Ay.
Background.Fk();var width=(BBh?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xq=this.Y.TL(null,0x401);while(!!Xq&&(((B=Xq)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OU.isPrototypeOf(Xq)?Xq:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xq=this.Y.TL(Xq,0x1);}},By8:function(Aaj){var Aa=null;switch(Aaj){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gi;break;default:A.ab5("%s%e",Btf
,Aaj);}return Aa;},BAb:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeJ
)A._GetAutoObject(A.Device.Helper).W.Q0(0);else if(!(F=this.Cn.Dj,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q0(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmD(A._GetAutoObject(A.Device.Device).AdO));this.
AtX(this);},ALm:function(G){var B;var AKl=A.jV;var Ay4=A.jb.CK;var BcG=A.jb.AV;this.
Ame.AxA(this);if(this.A3M){this.A3M=false;AKl=A._GetAutoObject(A.Device.Helper).
Nj(A.aaR(A.acf.BoV),P6,A._GetAutoObject(A.Device.Converter).Rf(this.Gb.NaisId));
A.pe([B=this.Ame,B.StartTimer],this);Ay4=A.jb.E1;BcG=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKl=A.aaR(A.acf.Boa);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKl=A.aaR(A.
acf.Bn$);this.YG.T(AKl);this.YG.Blr(Ay4);this.YG.Bls(BcG);},A25:function(G){var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajy();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajy();else if(At.PopupState===7){A._GetAutoObject(C.A$).Cg(76);
A._GetAutoObject(A.Device.Device).Ajy();}}}else A._GetAutoObject(A.Device.Device
).Ajy();},A24:function(G){A._GetAutoObject(A.Device.Device).AuK();},DJ:function(
G){var B;if(!this.MP.AOG()){this.N.Le.Dr(255);if(this.AV===this.Ef){this.N.C6(A.
aaL(A.ach.Edit));this.N.Cl=[B=this.Ef,B.FP];}else if(this.AV===this.Cn){this.N.C6(
A.aaL(A.ach.Edit));this.N.Cl=[B=this.Cn,B.FP];}else{this.N.C6(null);this.N.Cl=null;
}}else{this.N.C6(A.aaL(A.ach.AmY));if((this.Ef.Aqu===A.jb.Gf)||(this.Cn.Aqu===A.
jb.Gf)){this.N.Le.Dr(100);this.N.Cl=null;}else{this.N.Le.Dr(255);this.N.Cl=[this
,this.Bcp];}}},Av3:function(){return this.KI;},Anm:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUz._Init.call(this.Ef={I:this},0);C.
AUv._Init.call(this.Cn={I:this},0);C.Axq._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.Asw._Init.call(this.Gi={I:this},0);C.AkS._Init.call(this.
Ee={I:this},0);C.AkS._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UM._Init.call(this.Jd={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pj={I:this},0);A.Device.KY._Init.call(this.KY={I:this},0);A.Device.TE._Init.call(
this.Jb={I:this},0);C.AU5._Init.call(this.YG={I:this},0);A.Core.Timer._Init.call(
this.Ame={I:this},0);this.__proto__=C.ART;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dq(C.APm);this.DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.
L(A.jb.CK);this.Y.H(E$);this.Y.JO(9);this.Ef.H(AIE);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACv));this.Ef.ATp(true);this.Ef.AFB(false);this.Cn.H(Baf);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aeb));this.Cn.ATp(true);this.Cn.AFv(true);this.CG.H(As3);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As3);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afi));this.Gi.H(Bag);this.Gi.Aj(true);this.Gi.T(A.aaR(A.acf.Jd)
);this.Ee.H(Btg);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.F0(1000);this.
Ee.EV(999000);this.Ee.Ahk(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.
Q));this.C9.H(Bag);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.F0(1000);
this.C9.EV(99000);this.C9.Ahk(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.
Q));this.BZ.H(As2);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afn));this.Ay.H(Iq);this.
Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fl(1000);this.Jb.Uk(0);this.YG.
H(Aag);this.YG.Aj(true);this.YG.ArJ(A.jb.Text);this.Ame.PO(3000);this.J(this.DZ,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gi,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YG,0);this.N.CB=[this,this.Ev];this.N.Ck=[this,
this.XB];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbC));this.Y.El=[this,
this.Fe];this.Ef.Gn([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Anp,B.Nd]);this.Ef.AE8([this,this.AtX]);this.Ef.ATc([this,this.A24]);
this.Ef.ATd([this,this.A25]);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.Ab7([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av6,B.Q0]);this.Cn.OE=[this,this.Ben];this.Cn.
ATc([this,this.A24]);this.Cn.ATd([this,this.A25]);this.CG.Gn([this,this.D_,this.
GN]);this.CG.LX([B=this.CG,B.FP]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.
Breed,B.B7,B.B8]);this.CG.CI(this.Breed);this.CG.Anu(this.Pj);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.Gi.Gn([this,this.D_,this.GN]);this.
Gi.LX([B=this.Gi,B.FP]);this.Gi.L0(A.aaL(A.ach.Edit));this.Gi.As([B=this.Jd,B.B7
,B.B8]);this.Gi.CI(this.Jd);this.Gi.Anu(this.KY);this.Ee.As([this,this.Anm,this.
Ahg]);this.C9.As([this,this.Av3,this.AeT]);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.Ay.BmO([this,this.A3e]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Gb=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amm
);this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASG,B.AZ$];this.Ame.Mx=[this,
this.ALm];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CG._Done();this.C$._Done();this.
Gi._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jd._Done();this.AnimalType._Done();this.Gender._Done();this.Pj.
_Done();this.KY._Done();this.Jb._Done();this.YG._Done();this.Ame._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gi._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jd._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pj._ReInit();this.KY._ReInit();this.Jb._ReInit();this.YG._ReInit(
);this.Ame._ReInit();this.Ef.T(A.aaR(A.acf.ACv));this.Cn.T(A.aaR(A.acf.Aeb));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afi));this.Gi.T(A.aaR(A.acf.Jd));
this.Ee.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KI));this.BZ.T(A.aaR(A.acf.Afn)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gb)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ame)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asv={Zk:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zk={
I:this},0);this.__proto__=C.Asv;this.N.CV(A.acf.BhY);this.Number.H(Bth);this.Jc.
H(Bti);this.IP.H(Btj);this.AkE(2);this.Bcm=false;this.Bdr=true;this.Bds=false;this.
Zk.H(Btk);this.Zk.KS(true);this.Zk.R(A.aaR(A.acf.A_$));this.Zk.L(A.jb.Text);this.
J(this.Zk,0);this.N.CB=null;this.N.Cl=[this,this.AIS];this.N.CY(null);this.Zk.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zk.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zk._ReInit();this.Zk.R(A.aaR(A.acf.A_$));this.Zk.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADH={Ct:null,FH:function(E){if(this.M4===E)return;C.HI.FH.call(this,E);this.
Ct.CT(E);},Yq:function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;
case 1:B5=this.Ct;break;case 2:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADH;this.H(Btl);this.Ct.H(A$U);this.FW.H(Btm);this.J(this.
Ct,-2);this.Ct.Di=[this,this.GP];},_Done:function(){this.__proto__=C.HI;this.Ct.
_Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.call(this);this.
Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asw={GZ:null
,Bk:function(aSize){C.OR.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,this.GZ.M[0
]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hf)this.GZ.FH(A.jb.CK);else this.
GZ.FH(A.jb.CS);},A1U:function(){this.Bb(this.GZ);},_Init:function(aArg){C.OR._Init.
call(this,aArg);C.HI._Init.call(this.GZ={I:this},0);this.__proto__=C.Asw;this.GZ.
H(Btn);this.J(this.GZ,0);this.GZ.As([this,this.ASw,this.AFp]);},_Done:function(){
this.__proto__=C.OR;this.GZ._Done();C.OR._Done.call(this);},_ReInit:function(){C.
OR._ReInit.call(this);this.GZ._ReInit();},_Mark:function(D){var B;C.OR._Mark.call(
this,D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axq={GZ:null,Bk:function(aSize){C.OR.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GZ.M[0]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hf)this.GZ.FH(
A.jb.CK);else this.GZ.FH(A.jb.CS);},A1U:function(){this.Bb(this.GZ);},_Init:function(
aArg){C.OR._Init.call(this,aArg);C.ADH._Init.call(this.GZ={I:this},0);this.__proto__=
C.Axq;this.GZ.AZ(0x18);this.GZ.H(Bto);this.J(this.GZ,0);this.GZ.As([this,this.ASw
,this.AFp]);},_Done:function(){this.__proto__=C.OR;this.GZ._Done();C.OR._Done.call(
this);},_ReInit:function(){C.OR._ReInit.call(this);this.GZ._ReInit();},_Mark:function(
D){var B;C.OR._Mark.call(this,D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acr={ScreenTypeToString:
null,Dn:function(){return 4;},FX:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BH(this.C4(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acr;this.Cc.Set(0,3);this.Cc.Set(1,35);this.Cc.Set(2
,34);this.Cc.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVO={Wv:function(G){this.Agn();A._GetAutoObject(C.BS).Qw(A.aaR(A.acf.Settings
),[this,this.A3j]);A._GetAutoObject(C.BS).FS();this.AL6();A._GetAutoObject(C.BS).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.
BS).NC(A.aaR(A.acf.ARk)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abs:function(){return C.ABY;},Abt:function(){return C.ADg;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).A6E());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akg()===false){this.
N.Cs(A.aaL(A.ach.Avr));this.N.Ck=[this,this.ANW];this.N.FI(A.jV);}this.N.ON(false
);this.N.OO(false);},Aga:function(){A._GetAutoObject(C.A$).Cg(86);},A6v:function(
){return C.APt;},Bfx:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).Am.Filter){Filter=A._GetAutoObject(A.Device.Device).Am.Filter.Fg(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DQ(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).Am.Bl(Filter);}},A3j:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:function(aArg){C.Tu._Init.call(this
,aArg);this.__proto__=C.AVO;this.Dq(C.AC9);this.Dz(A.aaR(A.acf.A7R));this.AS_(A.
_GetAutoObject(C.AxV));},_ReInit:function(){C.Tu._ReInit.call(this);this.Dz(A.aaR(
A.acf.A7R));},_className:"Application::YoungNoTransponderListScreen"};C.AVN={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVN;this.KW.Ar(false);
this.KW.Aj(false);this.KW.Z(false);this.Bmo(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQ0={Sn:null,Q:null,A7N:0,M4:0,Init:function(aArg){this.ATb(6);},As:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sn)this.Sn.As(E);},ATb:function(
E){if(this.A7N===E)return;this.A7N=E;var X;switch(E){case 2:X=A._NewObject(C.HI,
0);break;case 3:X=A._NewObject(C.ADH,0);break;case 4:X=A._NewObject(C.AQX,0);break;
case 5:X=A._NewObject(C.AQY,0);break;case 6:X=A._NewObject(C.AvK,0);break;default:{
X=null;A.ab5("%s%i",Btp,E);}}this.Bmn(X);},Bmn:function(E){if(this.Sn===E)return;
if(!!this.Sn){this.Sn.As(null);this.HN(this.Sn);}this.Sn=E;if(!!this.Sn){this.Sn.
As(this.Q);this.J(this.Sn,0);}},FH:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.Sn)this.Sn.FH(E);},SJ:function(Gw){if(!!this.Sn)this.Sn.SJ(Gw);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQ0;this.H(Ayd);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sn)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQX={CU:null,Ct:null,FH:function(
E){if(this.M4===E)return;C.HI.FH.call(this,E);this.Ct.CT(E);this.CU.CT(E);},Yq:function(
Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.GW;break;default:A.ab5("%s",AhW);}return B5;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQX;this.H(Btq);this.GW.
H(Atb);this.CU.H(A$V);this.Ct.H(A$W);this.FW.H(A$X);this.J(this.CU,-2);this.J(this.
Ct,-2);this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(){this.
__proto__=C.HI;this.CU._Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(
){C.HI._ReInit.call(this);this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D
){var B;C.HI._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACE={SX:null,Ai:function(Ae){C.Abp.Ai.call(this,Ae);this.SX.L(this.V.AQ);},_Init:
function(aArg){C.Abp._Init.call(this,aArg);C.CH._Init.call(this.SX={I:this},0);this.
__proto__=C.ACE;this.V.Z(false);this.AW.H(Btr);this.AW.ATb(4);this.SX.H(Bts);this.
SX.R(A.aaR(A.acf.Ki));this.SX.L(A.jb.Bm);this.J(this.SX,0);this.SX.S(A.aaL(A.fl.
Af));this.SX.A2(A.aaL(A.fl.Ak));this.SX.Cu(null);},_Done:function(){this.__proto__=
C.Abp;this.SX._Done();C.Abp._Done.call(this);},_ReInit:function(){C.Abp._ReInit.
call(this);this.SX._ReInit();this.SX.R(A.aaR(A.acf.Ki));this.SX.S(A.aaL(A.fl.Af)
);this.SX.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abp._Mark.call(this,D);
if((B=this.SX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={YZ:null,T4:null,AQ:0,A65:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YZ.L(this.AQ);this.T4.L(this.AQ);},A9O:function(E){var B;if(this.A65===
E)return;this.A65=E;if(E){this.YZ.Z(true);this.T4.DC([this.T4.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YZ.Z(false);this.T4.DC([this.T4.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.YZ={I:this},0);A.acg.C5._Init.call(this.T4={I:this},0);this.__proto__=C.LW;
this.H(AZQ);this.YZ.AZ(0x2D);this.YZ.DC(AhS);this.YZ.DL(Bah);this.YZ.L(A.jb.Text
);this.T4.AZ(0x36);this.T4.DC(Bah);this.T4.DL(Btt);this.T4.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YZ,0);this.J(this.T4,0);},_Done:function(){this.__proto__=
A.Core.P;this.YZ._Done();this.T4._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YZ._ReInit();this.T4._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUd={Ss:null,Py:null,C$:null,BZ:null,CG:null,GM:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pj:null,UM:null,KY:null,Init:function(aArg){A.zX([this
,this.AuE],this.BZ.Q,0);A.zX([this,this.AMZ],this.CG.Q,0);A.zX([this,this.Bqf],this.
Ss.Q,0);A.zX([this,this.Avh],this.C$.Q,0);A.zX([this,this.AVK],this.GM.Q,0);},AuE:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BZ.Q,F[1].call(F[
0])));},Bqf:function(G){var F;A._GetAutoObject(A.Device.Device).Aw9((F=this.Ss.Q
,F[1].call(F[0])));},Avh:function(G){var F;A._GetAutoObject(A.Device.Device).JP((
F=this.C$.Q,F[1].call(F[0])));},AVK:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GM.Q,F[1].call(F[0])));},AMZ:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.
call(this,aArg);C.BW._Init.call(this.Ss={I:this},0);C.Io._Init.call(this.Py={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axq.
_Init.call(this.CG={I:this},0);C.Asw._Init.call(this.GM={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pj={I:this},0);C.UM._Init.call(this.UM={I:
this},0);A.Device.KY._Init.call(this.KY={I:this},0);this.__proto__=C.AUd;var B;this.
I8((A.aaR(A.acf.Asj)+Ayn)+A.aaR(A.acf.AjE));this.Ss.H(AhV);this.Ss.Aj(true);this.
Ss.T(A.aaR(A.acf.A$I));this.Ss.Bg(true);this.Ss.By(0);this.Py.H(Ayb);this.Py.Aj(
true);this.Py.Z(true);this.Py.T(A.aaR(A.acf.AdO));this.Py.F0(0);this.Py.EV(99);this.
Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.aaR(A.acf.GH));this.C$.H(Aag);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afi));this.C$.Bg(true);this.C$.By(0);this.BZ.H(Ale);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afn));this.BZ.Bg(true);this.BZ.By(0);this.CG.H(
AcO);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bg(false);this.GM.H(
AcO);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.GM.Bg(true);this.AnimalType.
As(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.As(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.As(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.Device).Breed);
this.UM.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Ss,0);this.
J(this.Py,0);this.J(this.C$,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GM
,0);this.Ss.As([B=this.WeightRecordingScope,B.B7,B.B8]);this.Ss.CI(this.WeightRecordingScope
);this.Py.As([B=A._GetAutoObject(A.Device.Device),B.A77,B.BaE]);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.CG.Gn([this,this.D_,this.GN]);this.CG.LX([
B=this.CG,B.FP]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B7,B.B8
]);this.CG.CI(this.Breed);this.CG.Anu(this.Pj);this.GM.Gn([this,this.D_,this.GN]
);this.GM.LX([B=this.GM,B.FP]);this.GM.L0(A.aaL(A.ach.Edit));this.GM.As([B=this.
UM,B.B7,B.B8]);this.GM.CI(this.UM);this.GM.Anu(this.KY);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ce;this.Ss._Done();this.Py._Done();this.C$._Done();this.
BZ._Done();this.CG._Done();this.GM._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pj._Done();this.UM._Done();this.
KY._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
Ss._ReInit();this.Py._ReInit();this.C$._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GM._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pj._ReInit();this.UM._ReInit();
this.KY._ReInit();this.I8((A.aaR(A.acf.Asj)+Ayn)+A.aaR(A.acf.AjE));this.Ss.T(A.aaR(
A.acf.A$I));this.Py.T(A.aaR(A.acf.AdO));this.Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.
aaR(A.acf.GH));this.C$.T(A.aaR(A.acf.Afi));this.BZ.T(A.aaR(A.acf.Afn));this.CG.T(
A.aaR(A.acf.Breed));this.GM.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.Ce._Mark.
call(this,D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUc={QK:null,Fw:null,Ik:null,C_:null,Dk:null,EL:null,AutoRegistrationMode:null
,AdR:null,Init:function(aArg){var B;A.zX([this,this.BgW],this.QK.Q,0);A.zX([this
,this.Bd_],[B=A._GetAutoObject(A.Device.Device),B.ASf,B.AZW],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.Bd_],this);A.pe([
this,this.Adr],this);},BgW:function(G){var F;A._GetAutoObject(A.Device.Device).Awm((
F=this.QK.Q,F[1].call(F[0])));},Bd_:function(G){switch(A._GetAutoObject(A.Device.
Device).Agq){case 0:A._GetAutoObject(A.Device.Helper).JV(this.Ik,true);break;case
1:A._GetAutoObject(A.Device.Helper).JV(this.Ik,false);break;default:throw new Error(
Btu+A._GetAutoObject(A.Device.Device).Agq.toFixed());}},Adr:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dk.Q,CA[1].call(CA[0])))>12)(CA=this.
Dk.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.BW._Init.call(this.QK={I:this},0);C.BW._Init.call(this.
Fw={I:this},0);C.AGx._Init.call(this.Ik={I:this},0);C.Io._Init.call(this.C_={I:this
},0);C.Io._Init.call(this.Dk={I:this},0);C.AvT._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdR._Init.
call(this.AdR={I:this},0);this.__proto__=C.AUc;var B;this.I8(A.aaR(A.acf.Aql));this.
QK.H(AIE);this.QK.Aj(true);this.QK.T(A.aaR(A.acf.Aql));this.QK.Bg(false);this.QK.
F0(-1);this.QK.EV(1);this.Fw.H(UV);this.Fw.Aj(true);this.Fw.Z(true);this.Fw.T(A.
aaR(A.acf.Aqi));this.Fw.Bg(true);this.Ik.H(Aag);this.Ik.Aj(true);this.Ik.Z(true);
this.Ik.T(A.aaR(A.acf.AEd));this.Ik.Bg(true);this.C_.H(Ale);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqD));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(
6);this.C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.acf.Ey));this.Dk.H(AcO);this.Dk.
Aj(true);this.Dk.T(A.aaR(A.acf.Zm));this.Dk.Bg(true);this.Dk.F0(0);this.Dk.EV(12
);this.Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(A.acf.Ey));this.EL.H(Btv);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bg(false);this.EL.ArZ(A.aaR(A.acf.Aqk));this.AutoRegistrationMode.
As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QK,0);this.
J(this.Fw,0);this.J(this.Ik,0);this.J(this.C_,0);this.J(this.Dk,0);this.J(this.EL
,0);this.QK.As([B=this.AutoRegistrationMode,B.B7,B.B8]);this.QK.CI(this.AutoRegistrationMode
);this.Fw.As([B=this.AdR,B.B7,B.B8]);this.Fw.CI(this.AdR);this.Ik.Uj([B=A._GetAutoObject(
A.Device.Device),B.Wt,B.AZ0]);this.Ik.Akv([B=A._GetAutoObject(A.Device.Device),B.
Av8,B.AyB]);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dk.
As([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjW));
this.EL.OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.QK._Done();this.Fw._Done();this.Ik._Done();this.C_._Done();this.Dk._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdR._Done();C.Ce._Done.
call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.QK._ReInit();this.Fw.
_ReInit();this.Ik._ReInit();this.C_._ReInit();this.Dk._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdR._ReInit();this.I8(A.aaR(A.acf.Aql
));this.QK.T(A.aaR(A.acf.Aql));this.Fw.T(A.aaR(A.acf.Aqi));this.Ik.T(A.aaR(A.acf.
AEd));this.C_.T(A.aaR(A.acf.AqD));this.C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.
acf.Ey));this.Dk.T(A.aaR(A.acf.Zm));this.Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(
A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aqk));},_Mark:function(D){var B;C.Ce._Mark.call(
this,D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fw)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVg={OF:null,Fw:null,Ik:null,C_:null,Dk:null,EL:null,Afm:null,Init:function(
aArg){var B;A.zX([this,this.BeO],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0b
],0);A.zX([this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([
this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.
BeO],this);A.pe([this,this.Adr],this);},BeO:function(G){var AK2=false;var AaO=false;
switch(A._GetAutoObject(A.Device.Device).Ak2){case 0:{AK2=false;AaO=false;}break;
case 1:{AK2=true;AaO=false;}break;case 2:{AK2=false;AaO=true;}break;default:throw new
Error(Btw+A._GetAutoObject(A.Device.Device).Ak2.toFixed());}A._GetAutoObject(A.Device.
Helper).JV(this.Ik,AK2);A._GetAutoObject(A.Device.Helper).JV(this.C_,AaO);A._GetAutoObject(
A.Device.Helper).JV(this.Dk,AaO);A._GetAutoObject(A.Device.Helper).JV(this.EL,AaO
);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dk.Q,CA[
1].call(CA[0])))>12)(CA=this.Dk.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Io._Init.call(this.OF={
I:this},0);C.BW._Init.call(this.Fw={I:this},0);C.AGx._Init.call(this.Ik={I:this}
,0);C.Io._Init.call(this.C_={I:this},0);C.Io._Init.call(this.Dk={I:this},0);C.AvT.
_Init.call(this.EL={I:this},0);C.Afm._Init.call(this.Afm={I:this},0);this.__proto__=
C.AVg;var B;this.I8(A.aaR(A.acf.LinkTransponder));this.OF.H(AIE);this.OF.Aj(true
);this.OF.Z(true);this.OF.T(A.aaR(A.acf.A7m));this.OF.Bg(false);this.OF.F0(1);this.
OF.EV(365);this.OF.IM(A.aaR(A.acf.Ki));this.OF.I9(A.aaR(A.acf.GH));this.Fw.H(UV);
this.Fw.Aj(true);this.Fw.Z(true);this.Fw.T(A.aaR(A.acf.Aqi));this.Fw.Bg(true);this.
Ik.H(Aag);this.Ik.Aj(true);this.Ik.Z(true);this.Ik.T(A.aaR(A.acf.AEd));this.Ik.Bg(
false);this.C_.H(Ale);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqD
));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OA));this.
C_.I9(A.aaR(A.acf.Ey));this.Dk.H(AcO);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Zm)
);this.Dk.Bg(true);this.Dk.F0(0);this.Dk.EV(12);this.Dk.IM(A.aaR(A.acf.OA));this.
Dk.I9(A.aaR(A.acf.Ey));this.EL.H(Aor);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bg(false);this.EL.ArZ(A.aaR(A.acf.Aqk));this.J(this.OF,0);this.J(this.Fw,0);this.
J(this.Ik,0);this.J(this.C_,0);this.J(this.Dk,0);this.J(this.EL,0);this.OF.As([B=
A._GetAutoObject(A.Device.Device),B.A8A,B.BaU]);this.Fw.As([B=this.Afm,B.B7,B.B8
]);this.Fw.CI(this.Afm);this.Ik.Uj([B=A._GetAutoObject(A.Device.Device),B.Wt,B.AZ0
]);this.Ik.Akv([B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyB]);this.C_.As([B=
A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dk.As([B=A._GetAutoObject(A.Device.
Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjW));this.EL.OL([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.OF._Done();this.
Fw._Done();this.Ik._Done();this.C_._Done();this.Dk._Done();this.EL._Done();this.
Afm._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
OF._ReInit();this.Fw._ReInit();this.Ik._ReInit();this.C_._ReInit();this.Dk._ReInit(
);this.EL._ReInit();this.Afm._ReInit();this.I8(A.aaR(A.acf.LinkTransponder));this.
OF.T(A.aaR(A.acf.A7m));this.OF.IM(A.aaR(A.acf.Ki));this.OF.I9(A.aaR(A.acf.GH));this.
Fw.T(A.aaR(A.acf.Aqi));this.Ik.T(A.aaR(A.acf.AEd));this.C_.T(A.aaR(A.acf.AqD));this.
C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.acf.Ey));this.Dk.T(A.aaR(A.acf.Zm));this.
Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aqk));
},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ik)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afm={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bga],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0b],0);A.pe([
this,this.Bga],this);},Dn:function(){return 3;},FX:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw5(E);},Bga:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak2;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afm;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I$={B6:null,IS:null,Cr:null,Amu:null,Sa:null,Ang:null,AjA:null,Text:null,CX:
null,D6:0,LA:false,Ai:function(Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IS.Ar(true);else{this.IS.Ar(false);this.CX.Z(false);}},A4e:function(G
){var B;var Bd=this.Text.M;var Nu=0;var Nv=0;if(this.CX.Er[0]<Bd[0])Nu=Bd[0]-this.
CX.Er[0];if(this.CX.Er[0]>Bd[2])Nu=Bd[2]-this.CX.Er[0];if(this.CX.Er[1]<Bd[1])Nv=
Bd[1]-this.CX.Er[1];if(this.CX.EC[1]>Bd[3])Nv=Bd[3]-this.CX.EC[1];if(!!Nu||!!Nv)
this.Text.F_(A.abf(this.Text.Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];
var C3=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]
))Nu=0;if(C3[1]<=((B=this.Text.M)[3]-B[1]))Nv=0;this.Text.F_([Nu,Nv]);},Amh:function(
G){if(!this.B6)return;var A3I=this.Text.AGK(this.D6);var pos=this.Text.Afb(A3I);
this.CX.DL(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IS.Bw){this.IS.Ar(false);this.IS.Ar(true);}if(this.LA){A.pe([this,this.
A4e],this);this.LA=false;}},AAq:function(G){if(!this.B6)return;var EH=this.Text.
AGK(this.D6);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnO(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ACV(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnO(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cr.CO===4){var pos=this.Text.Afb(EH);var AaN=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATQ(A.abe(pos,[0,AaN]));}if(this.Cr.CO===5
){var pos=this.Text.Afb(EH);var AaN=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATQ(A.abf(pos,[0,AaN]));}var Vc=this.Text.AnO(EH);var Iu=this.Text.
String.charCodeAt(Vc)||0;if(((Iu===0x5E)||(Iu===0x7E))||(Iu===0x25))Vc=Vc-1;if(Vc
!==this.D6){this.D6=Vc;A.pe([this,this.Amh],this);this.LA=true;}},Beh:function(G
){if(!this.D6)return;var Iu=this.Text.String.charCodeAt(this.D6-1)||0;var CD=1;if(((
Iu===0x5E)||(Iu===0x7E))||(Iu===0x25))CD=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CD,CD));this.D6=this.D6-CD;this.LA=true;},AAr:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iu=this.Text.String.charCodeAt(this.D6)||0;var CD=1;
if(Iu===0x25)CD=2;this.Text.R(A.ab1(this.Text.String,this.D6,CD));this.LA=true;}
,Bev:function(G){this.Text.R(A.abU(this.Text.String,Btx,this.D6));this.D6=this.D6+
1;this.LA=true;},Bej:function(G){var Iu=this.AjA.DP;var Aug=String.fromCharCode(
Iu);A.ab5("%c",Iu);if((((Iu===0x5E)||(Iu===0x7E))||(Iu===0xAD))||(Iu===0x25))Aug=
Bty+String.fromCharCode(Iu);this.Text.R(A.abU(this.Text.String,Aug,this.D6));this.
D6=this.D6+Aug.length;this.LA=true;},_Init:function(aArg){A.acn.I$._Init.call(this
,aArg);A.acl.TE._Init.call(this.IS={I:this},0);A.Core.BM._Init.call(this.Cr={I:this
},0);A.Core.BM._Init.call(this.Amu={I:this},0);A.Core.BM._Init.call(this.Sa={I:this
},0);A.Core.BM._Init.call(this.Ang={I:this},0);A.Core.BM._Init.call(this.AjA={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.I$;var B;this.H(Btz);this.IS.B2=false;this.IS.Cw=true;
this.IS.Fl(500);this.IS.Uk(500);this.Cr.Filter=147;this.Cr.Bw=false;this.Amu.Filter=
151;this.Sa.Filter=44;this.Ang.Filter=149;this.AjA.Filter=145;this.Text.AZ(0x3F);
this.Text.H(BtA);this.Text.KS(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(BtB);this.CX.DL(BtC);this.CX.A_p(2);this.CX.A_o(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IS.
Q=[B=this.CX,B.Fk,B.Z];this.Cr.BN=[this,this.AAq];this.Cr.D1=[this,this.AAq];this.
Amu.BN=[this,this.Beh];this.Amu.D1=[this,this.Beh];this.Sa.BN=[this,this.AAr];this.
Sa.D1=[this,this.AAr];this.Ang.BN=[this,this.Bev];this.Ang.D1=[this,this.Bev];this.
AjA.BN=[this,this.Bej];this.AjA.D1=[this,this.Bej];this.Text.Q1([this,this.Amh]);
this.Text.S(A.aaL(A.aci.ACI));this.B6=A.aaL(A.aci.ACI);},_Done:function(){this.__proto__=
A.acn.I$;this.IS._Done();this.Cr._Done();this.Amu._Done();this.Sa._Done();this.Ang.
_Done();this.AjA._Done();this.Text._Done();this.CX._Done();A.acn.I$._Done.call(this
);},_ReInit:function(){A.acn.I$._ReInit.call(this);this.IS._ReInit();this.Cr._ReInit(
);this.Amu._ReInit();this.Sa._ReInit();this.Ang._ReInit();this.AjA._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.I$._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AU6={I$:null,DE:function(G
){switch(this.Cr.CO){case 6:A._GetAutoObject(A.Device.Device).AuK();break;case 7:
A._GetAutoObject(A.Device.Device).Aqm();break;case 4:A._GetAutoObject(A.Device.Device
).Ajy();break;case 5:A._GetAutoObject(A.Device.Device).Aqn();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A$).Fu();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I$._Init.call(this.I$={I:this},0);this.__proto__=C.AU6;this.H(Cd);this.
N.Z(true);this.Dq(C.AqZ);this.I$.H(E$);this.J(this.I$,0);this.Bb(this.I$);this.N.
CB=[this,this.Ev];this.N.CY(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I$._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATY={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AyI],[B=A._GetAutoObject(A.Device.Device),B.ASk,B.AZX],0);},Wv:function(G){
if((!!this.Bj&&!!this.Bj.AX)&&(this.Bj.AX.Ca()>0)){if(this.AJB())A._GetAutoObject(
C.BS).Qw(A.aaR(A.acf.AOj),[this,this.AIF]);else A._GetAutoObject(C.BS).Qw(A.aaR(
A.acf.AOj),null);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).Qw(A.aaR(A.acf.
AB3),[this,this.Bau]);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).Qw(A.aaR(
A.acf.AG3),[this,this.A7Y]);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).Qw(
A.aaR(A.acf.A5k),[this,this.Bat]);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.
BS).Qw(A.aaR(A.acf.UnlinkTransponder),[this,this.Bnr]);}else{A._GetAutoObject(C.
BS).XN(A.aaR(A.acf.AOj));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).XN(A.
aaR(A.acf.AB3));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).XN(A.aaR(A.acf.
AG3));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).XN(A.aaR(A.acf.A5k));A.
_GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).XN(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A5J)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.
A51));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Anc)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},Abs:function(){return C.
ABZ;},Abt:function(){return C.ADe;},Q6:function(G){A._GetAutoObject(A.Device.Device
).Am.Bl(A._GetAutoObject(A.Device.Helper).ACT());},HO:function(G){C.Q4.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AbC));this.N.Ck=[this,this.XB];this.N.FI(A.jV);this.N.
C6(null);this.N.CV((A.aaR(A.acf.A5c)+Aah)+this.DataExportDestinationToString.BH(
A._GetAutoObject(A.Device.Device).VM));this.N.ON(false);this.N.OO(false);this.N.
I4.Dr(255);},AR9:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var AiV=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A9(96,true,AiV.toFixed(),0,null);},AR_:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);this.A5R(this);},ASd:function(G){var B;A._GetAutoObject(A.Device.Device).
Ds(0);if(!A._GetAutoObject(A.Device.Device).VM&&!A._GetAutoObject(A.Device.Device
).Ut){A._GetAutoObject(A.Device.Device).A9(73,true,A.jV,0,[this,this.Bex]);return;
}if(A._GetAutoObject(A.Device.Device).Are()===false){A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Af$]);return;}var AfW=null;switch(A._GetAutoObject(A.Device.Device
).VM){case 0:AfW=A._GetAutoObject(A.Device.Device).AnS(2);break;case 1:AfW=A._GetAutoObject(
A.Device.Device).AnS(3);break;default:throw new Error(BtD+A._GetAutoObject(A.Device.
Device).VM.toFixed());}if(AfW.AnX){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dz(A.aaR(A.acf.BnH));A._GetAutoObject(A.Device.Device).AqB(AfW);}else A._GetAutoObject(
A.Device.Device).A9(97,true,A.jV,0,null);},AJB:function(){var Azq=this.Bj.AX;if(
!Azq)return false;return true;},XB:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.Q4._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ATY;this.Dq(C.APp);this.Init(aArg);},_Done:function(){this.
__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(this);
},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADe={Pw:null,I3:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},0);this.__proto__=
C.ADe;this.Eq.Z(false);this.DS.Z(false);this.Pw.H(BtE);this.Pw.L(A.jb.Text);this.
I3.H(BtF);this.I3.L(A.jb.Text);this.J(this.Pw,0);this.J(this.I3,0);this.Pw.Aw(A.
aaL(A.ach.Avz));this.I3.Aw(A.aaL(A.ach.Avu));},_Done:function(){this.__proto__=C.
Dc;this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Pw._ReInit();this.I3._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMU={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AAu],[B=A._GetAutoObject(A.Device.Device),B.AEp,B.AIJ],0);A.pe([this,this.
AAu],this);},Wv:function(G){if((!!this.Bj&&!!this.Bj.AX)&&(this.Bj.AX.Ca()>0)){if(
this.AJB())A._GetAutoObject(C.BS).Qw(A.aaR(A.acf.AOi),[this,this.AIF]);else A._GetAutoObject(
C.BS).XN(A.aaR(A.acf.AOi));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).Qw(
A.aaR(A.acf.AB1),[this,this.Bau]);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.
BS).Qw(A.aaR(A.acf.AG3),[this,this.A7Y]);A._GetAutoObject(C.BS).FS();A._GetAutoObject(
C.BS).Qw(A.aaR(A.acf.A5j),[this,this.Bat]);}else{A._GetAutoObject(C.BS).XN(A.aaR(
A.acf.AOi));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).XN(A.aaR(A.acf.AB1
));A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).XN(A.aaR(A.acf.AG3));A._GetAutoObject(
C.BS).FS();A._GetAutoObject(C.BS).XN(A.aaR(A.acf.A5j));}A._GetAutoObject(C.BS).FS(
);A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A5J)+A.aaR(A.acf.Colon));A._GetAutoObject(
C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A51));A._GetAutoObject(C.BS).FS(
);A._GetAutoObject(C.BS).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Abs:function(){return C.ABV;},Abt:function(){return C.ADc;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).AOF());},HO:function(G){C.Q4.HO.call(this,G);this.N.Cs(A.aaL(A.ach.AbC));
this.N.Ck=[this,this.XB];this.N.FI(A.jV);this.N.C6(null);this.N.CV((A.aaR(A.acf.
A5c)+String.fromCharCode(0x0A))+A.aaR(A.acf.Bg4));this.N.ON(false);this.N.OO(false
);this.N.I4.Dr(255);},AR9:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var
AiV=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(
A.Device.Device).A9(96,true,AiV.toFixed(),0,null);},AR_:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.A5Q(this);},ASd:function(G){var B;A._GetAutoObject(A.
Device.Device).Ds(0);if(!A._GetAutoObject(A.Device.Device).Ut){A._GetAutoObject(
A.Device.Device).A9(73,true,A.jV,0,[this,this.Bex]);return;}if(A._GetAutoObject(
A.Device.Device).Are()===false){A.zX([this,this.XC],[B=A._GetAutoObject(A.Device.
Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Af$]);return;}var AfW=A._GetAutoObject(A.Device.Device).AnS(0);if(AfW.AnX){
A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dz(A.aaR(A.
acf.Bg5));A._GetAutoObject(A.Device.Device).AqB(AfW);}else A._GetAutoObject(A.Device.
Device).A9(70,true,A.jV,0,null);},AJB:function(){var Azq=this.Bj.AX;if(!Azq)return false;
var O;for(O=0;O<Azq.Ca();O++)if(A._GetAutoObject(A.Device.Helper).Aj5(Azq.AOT(O,
34))===false)return true;return false;},XB:function(G){A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(17);},AAu:function(G){if(A._GetAutoObject(A.Device.Device
).Aqp===1)A.pe([this,this.A5X],this);},_Init:function(aArg){C.Q4._Init.call(this
,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AMU;this.Dq(C.AOY);this.Init(aArg);},_Done:function(
){this.__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(
this);},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AOY={DY:function(G){C.Aeq.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(11));},_Init:function(aArg){C.Aeq._Init.call(this,aArg);this.__proto__=
C.AOY;this.Text.R(A.aaR(A.acf.ABO));},_ReInit:function(){C.Aeq._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABO));},_className:"Application::HeaderBirthRegistrationsList"
};C.APp={DY:function(G){C.Aeq.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(12));},_Init:function(aArg){C.Aeq._Init.call(this,aArg);this.__proto__=
C.APp;this.Text.R(A.aaR(A.acf.AF8));},_ReInit:function(){C.Aeq._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AF8));},_className:"Application::HeaderPurchasedAnimalsList"
};C.ABZ={J$:0,AP:null,SP:null,Td:0,Init:function(aArg){},Bk:function(aSize){C.Ba.
Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SP.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SP.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rf(this.
J$));this.SP.R(A._GetAutoObject(A.acj.KK).ACK(this.Td));},Cf:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.J$=this.AX.KN(Ad,26);this.Td=this.AX.HF(
Ad,4);this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SP={I:this},0);this.__proto__=C.ABZ;
this.AP.H(AZS);this.AP.L(A.jb.Bc);this.SP.H(AZT);this.J(this.AP,0);this.J(this.SP
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.Ak));
this.SP.A2(A.aaL(A.fl.Bh));this.SP.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SP._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SP._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.Ak));this.SP.A2(A.
aaL(A.fl.Bh));this.SP.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUv={
AeQ:null,Ab1:null,TM:null,KL:null,TK:null,NI:null,Tf:A.jV,Ai:function(Ae){var F;
C.SM.Ai.call(this,Ae);this.TM.L(this.V.AQ);var Aps=false;if((!this.Dj||!(F=this.
Dj,F[1].call(F[0])))&&!this.A8)Aps=true;this.TM.Z(Aps);this.Pp.Z(!Aps);this.VO.Z(
!Aps);this.QW.Z(!Aps);this.Yk.Z(!Aps);this.P0.Z(!Aps);},Ads:function(G){var B;var
F;if(!this.Tf.length){C.SM.Ads.call(this,G);return;}var BQ=this.FU;var GB=A._GetAutoObject(
A.Device.AnI).Be_(this.Tf);this.Tf=A.jV;if(!GB){A._GetAutoObject(A.Device.Device
).A9(101,true,A.jV,0,this.Ab1);A.pe(this.AeQ,this);return;}if(this.Asi&&(GB>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A9(102,true,A.jV,0,this.
Ab1);A.pe(this.AeQ,this);return;}this.Ui(((B=(GB|0))<0)?B+0x100000000:B);if(this.
FU!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}if(!
!this.OE)A.pe(this.OE,this);},A2T:function(G){if(this.Tf.length<10)this.Tf=this.
Tf+String.fromCharCode(this.KL.DP);},ASa:function(G){if((this.NI.DP===0x0D)||(this.
NI.DP===0x0A))this.Ads(this);else this.NI.NH=true;},ATc:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},ATd:function(E){if(A.aa0(this.Ab1,E))return;this.Ab1=
E;},_Init:function(aArg){C.SM._Init.call(this,aArg);A.acg.Text._Init.call(this.TM={
I:this},0);A.Core.BM._Init.call(this.KL={I:this},0);A.Core.BM._Init.call(this.TK={
I:this},0);A.Core.BM._Init.call(this.NI={I:this},0);this.__proto__=C.AUv;this.TM.
H(BtG);this.TM.I7(true);this.TM.A6(0x12);this.TM.R(A.aaR(A.acf.A5x));this.KL.Filter=
143;this.TK.Filter=149;this.NI.Filter=145;this.J(this.TM,0);this.TM.S(A.aaL(A.fl.
EK));this.KL.BN=[this,this.A2T];this.TK.BN=[this,this.Bbh];this.NI.BN=[this,this.
ASa];},_Done:function(){this.__proto__=C.SM;this.TM._Done();this.KL._Done();this.
TK._Done();this.NI._Done();C.SM._Done.call(this);},_ReInit:function(){C.SM._ReInit.
call(this);this.TM._ReInit();this.KL._ReInit();this.TK._ReInit();this.NI._ReInit(
);this.TM.R(A.aaR(A.acf.A5x));this.TM.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SM._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUz={AeQ:null,Ab1:null,KL:null
,TK:null,NI:null,Tf:A.jV,IW:function(G){var F;if(!this.Tf.length){C.Q9.IW.call(this
,G);return;}if(this.Ash)return;if(!this.Tf.length)this.TK.NH=true;var BQ=this.AM;
var GB=A._GetAutoObject(A.Device.AnI).BAP(this.Tf);this.Tf=A.jV;if(!GB){if((this.
Tf.length<13)&&!A._GetAutoObject(A.Device.Device).Ut)A._GetAutoObject(A.Device.Device
).A9(105,true,A.jV,0,this.Ab1);else A._GetAutoObject(A.Device.Device).A9(103,true
,A.jV,0,this.Ab1);A.pe(this.AeQ,this);return;}this.By(GB);if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OE)A.pe(this.
OE,this);},A2T:function(G){if(this.Ash)return;if(this.Tf.length<17)this.Tf=this.
Tf+String.fromCharCode(this.KL.DP);},ASa:function(G){if((this.NI.DP===0x0D)||(this.
NI.DP===0x0A))this.IW(this);else this.NI.NH=true;},ATc:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},ATd:function(E){if(A.aa0(this.Ab1,E))return;this.Ab1=
E;},_Init:function(aArg){C.Q9._Init.call(this,aArg);A.Core.BM._Init.call(this.KL={
I:this},0);A.Core.BM._Init.call(this.TK={I:this},0);A.Core.BM._Init.call(this.NI={
I:this},0);this.__proto__=C.AUz;this.Ar0(false);this.KL.Filter=143;this.TK.Filter=
149;this.NI.Filter=145;this.KL.BN=[this,this.A2T];this.TK.BN=[this,this.Atf];this.
NI.BN=[this,this.ASa];},_Done:function(){this.__proto__=C.Q9;this.KL._Done();this.
TK._Done();this.NI._Done();C.Q9._Done.call(this);},_ReInit:function(){C.Q9._ReInit.
call(this);this.KL._ReInit();this.TK._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q9._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APm={Aj1:null,AjZ:null,Gr:null,Q7:null,SI:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Device),B.A8y,B.AFi],0);A.pe([
this,this.DY],this);},De:function(E){C.BR.De.call(this,E);this.Aj1.L(E);this.AjZ.
L(E);this.Q7.Zt(E);this.Gr.L(E);this.SI.Zt(E);},Ww:function(E){this.Q7.CT(E);this.
SI.CT(E);},DY:function(G){this.Q7.T(A._GetAutoObject(A.Device.Device).AvR.toFixed(
));A.pe([this,this.BB9],this);},BB9:function(G){var Ac5=A._GetAutoObject(A.Device.
Device).Am.Filter;A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).ACT());this.SI.T(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());A.
_GetAutoObject(A.Device.Device).Am.Bl(Ac5);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.call(this.AjZ={
I:this},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D2._Init.call(this.Q7={I:this
},0);C.D2._Init.call(this.SI={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APm;this.Aj1.H(P5);this.AjZ.H(BtH);this.Gr.H(BtI);this.Gr.L(A.jb.
CS);this.Q7.AZ(0x14);this.Q7.H(BtJ);this.Q7.Zt(A.jb.Bm);this.Q7.CT(A.jb.Re);this.
Q7.Hh(2);this.Q7.Bll(0x11);this.SI.AZ(0x14);this.SI.H(BtK);this.SI.Zt(A.jb.Bm);this.
SI.CT(A.jb.Re);this.SI.Hh(2);this.C5.DC(AhO);this.C5.DL(BtL);this.C5.L(A.jb.Bc);
this.J(this.Aj1,0);this.J(this.AjZ,0);this.J(this.Gr,0);this.J(this.Q7,0);this.J(
this.SI,0);this.J(this.C5,0);this.Aj1.Aw(A.aaL(A.ach.Avt));this.AjZ.Aw(A.aaL(A.ach.
APU));this.Gr.Aw(A.aaL(A.ach.Gr));this.Q7.S(A.aaL(A.fl.Bh));this.SI.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Aj1._Done();this.
AjZ._Done();this.Gr._Done();this.Q7._Done();this.SI._Done();this.C5._Done();C.BR.
_Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Aj1._ReInit();
this.AjZ._ReInit();this.Gr._ReInit();this.Q7._ReInit();this.SI._ReInit();this.C5.
_ReInit();this.Q7.S(A.aaL(A.fl.Bh));this.SI.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BR._Mark.call(this,D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARB={Abg:null,Aek:null,VL:null,Init:function(aArg){this.Bb(this.Abg);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=
null;this.Bx.Cl=[this,this.A2W];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(
A.ach.VZ));}return this.Bx;},AAn:function(G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null
);if(Aa===this.Abg)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aek)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$O);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Ajh._Init.call(this.
Abg={I:this},0);C.Ajh._Init.call(this.Aek={I:this},0);C.ARF._Init.call(this.VL={
I:this},0);this.__proto__=C.ARB;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.ABT));this.
Abg.H(IR);this.Abg.T(A.aaR(A.acf.AjE));this.Aek.H(P7);this.Aek.T(A.aaR(A.acf.AGd
));this.VL.H(Aaf);this.VL.T(A.aaR(A.acf.A46));this.J(this.Abg,0);this.J(this.Aek
,0);this.J(this.VL,0);this.Text.S(A.aaL(A.fl.Ak));this.Abg.AR=[this,this.AAn];this.
Aek.AR=[this,this.AAn];this.VL.ASS([B=A._GetAutoObject(A.Device.Device),B.AEt,B.
AIM]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Abg._Done();this.
Aek._Done();this.VL._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Abg._ReInit();this.Aek._ReInit();this.VL._ReInit();this.Text.R(A.
aaR(A.acf.ABT));this.Abg.T(A.aaR(A.acf.AjE));this.Aek.T(A.aaR(A.acf.AGd));this.VL.
T(A.aaR(A.acf.A46));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARA={AnimalTableFields:null,Ay:null,Y:
null,JL:null,CP:function(){this.AiG(this);},Init:function(aArg){A.zV([this,this.
AiG],this.AnimalTableFields,0);A.pe([this,this.AiG],this);},DE:function(G){C.Fm.
DE.call(this,G);this.MO(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.CB=[this,this.Ev];this.Bx.Ck=[this,this.A2U];this.Bx.Cl=[this,this.
A3n];this.Bx.C6(A.aaL(A.ach.Ara));this.Bx.Cs(A.aaL(A.ach.Aq5));this.Bx.CY(A.aaL(
A.ach.VZ));}return this.Bx;},Ev:function(G){this.AAY();this.XA(this);},AiG:function(
G){this.Ao2();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aap=A._GetAutoObject(
C.Amm).OC(O);this.A02(Aap);}this.J(this.JL,0);A.aaS([this,this.MO],this);},Fe:function(
G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);
this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},A02:function(
G6){var Ay1=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sb,0);Aa.T(Ay1.BH(G6));Aa.Aj(true);Aa.G0=G6;Aa.A9N(this.AnimalTableFields.NU(G6
));this.J(Aa,0);this.ZE(Aa);},Ao2:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(AdH);}}
,AAY:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JL)){var Aa=(C.Sb.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G0);if(Aa.ASq())this.AnimalTableFields.
AUr(Aa.G0);}else A.ab5("%s",Ayi);}X=X.Ah;}this.AnimalTableFields.Cq();},A2U:function(
G){var B;var Aa=(C.Sb.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAf=(C.Sb.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAf){this.Ahu(AAf,Aa);A.pe([this,this.MO],this);}}},A3n:function(
G){var B;var Aa=(C.Sb.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAL=(C.Sb.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAL){this.Ahu(Aa,AAL);A.pe([this,this.MO],this);}}},AqI:function(
G){var B;A._GetAutoObject(A.Device.Device).Asm(this);A.pe([this,this.AiG],this);
},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AuZ._Init.call(this.JL={I:this},0);
this.__proto__=C.ARA;this.H(Rk);this.Text.R(A.aaR(A.acf.AGd));this.Ay.H(Iq);this.
Y.H(Bai);this.Y.JO(1);this.JL.H(AH3);this.JL.Aj(true);this.JL.T(A.aaR(A.acf.A5K)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JL,0);this.Y.El=[this,this.Fe];
this.JL.AR=[this,this.AqI];this.AnimalTableFields=A._GetAutoObject(C.Amm);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fm;this.Ay._Done();this.Y._Done();this.
JL._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JL._ReInit();this.Text.R(A.aaR(A.acf.AGd));this.
JL.T(A.aaR(A.acf.A5K));this.CP();},_Mark:function(D){var B;C.Fm._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARz={Y:null,BZ:null,C$:null,CG:null,GM:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UL:null,Init:function(aArg){A.zX([this,this.AuE],this.BZ.Q,0);A.zX([
this,this.AMZ],this.CG.Q,0);A.zX([this,this.AVK],this.GM.Q,0);A.zX([this,this.Avh
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this
);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.
XA];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(
A.aaL(A.ach.VZ));}return this.Bx;},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},AuE:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BZ.Q,F[1].call(F[0])));},AVK:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GM.Q,F[1].call(F[0])));},Avh:function(G){var F;A._GetAutoObject(
A.Device.Device).JP((F=this.C$.Q,F[1].call(F[0])));},AMZ:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fm._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.XM._Init.call(this.BZ={
I:this},0);C.XM._Init.call(this.C$={I:this},0);C.XM._Init.call(this.CG={I:this},
0);C.XM._Init.call(this.GM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UM._Init.call(this.UL={I:this},0);
this.__proto__=C.ARz;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.AjE));this.Y.H(Bai
);this.Y.JO(1);this.BZ.H(AhT);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(A.aaR(
A.acf.Afn));this.C$.H(Ayb);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.
Afi));this.CG.H(Aop);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed
));this.GM.H(As3);this.GM.Ar(true);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.
Ay.H(Iq);this.AnimalType.As(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
As(A._GetAutoObject(A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.
Device).Breed);this.UL.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.CG,0);this.J(this.GM,0
);this.J(this.Ay,0);this.Y.El=[this,this.Fe];this.BZ.Wy(A.aaL(A.fl.Hr));this.BZ.
Wz(A.aaL(A.fl.Hr));this.BZ.As([B=this.AnimalType,B.B7,B.B8]);this.BZ.CI(this.AnimalType
);this.C$.Wy(A.aaL(A.fl.Hr));this.C$.Wz(A.aaL(A.fl.Hr));this.C$.As([B=this.Gender
,B.B7,B.B8]);this.C$.CI(this.Gender);this.CG.Wy(A.aaL(A.fl.Hr));this.CG.Wz(A.aaL(
A.fl.Hr));this.CG.As([B=this.Breed,B.B7,B.B8]);this.CG.CI(this.Breed);this.GM.Wy(
A.aaL(A.fl.Hr));this.GM.Wz(A.aaL(A.fl.Hr));this.GM.As([B=this.UL,B.B7,B.B8]);this.
GM.CI(this.UL);this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Y._Done(
);this.BZ._Done();this.C$._Done();this.CG._Done();this.GM._Done();this.Ay._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.UL._Done();
C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Y._ReInit(
);this.BZ._ReInit();this.C$._ReInit();this.CG._ReInit();this.GM._ReInit();this.Ay.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
UL._ReInit();this.Text.R(A.aaR(A.acf.AjE));this.BZ.T(A.aaR(A.acf.Afn));this.C$.T(
A.aaR(A.acf.Afi));this.CG.T(A.aaR(A.acf.Breed));this.GM.T(A.aaR(A.acf.Jd));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amq={CD:0,Alq:A.abi(17,0,null),OC:function(Hw){return this.Alq.Get(Hw);},NP:
function(){return this.CD;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alq.Set(
O,0);this.CD=0;},J:function(Aaj){if(this.CD>=17)A.ab5("%s",BtM);else{this.Alq.Set(
this.CD,Aaj);this.CD=this.CD+1;}},Cq:function(){},EM:function(AhX){var AJX=AhX.indexOf(
String.fromCharCode(0x2C),0);var A1p=A.jV;var O=0;this.CD=0;while(O<17)if(AhX===
A.jV)O++;else{if(AJX===-1){A1p=AhX;AhX=A.jV;}else{A1p=A.abV(AhX,AJX);AhX=A.ab1(AhX
,0,AJX+1);}var Aap=A.abZ(A1p,0,10)|0;if(this.Bi$(Aap)){this.Alq.Set(this.CD,Aap);
this.CD=this.CD+1;O++;}AJX=AhX.indexOf(String.fromCharCode(0x2C),0);}if(AhX!==A.
jV)A.ab5("%s",BtN);},toString:function(){var B;var AAd=A.jV;var O;for(O=0;O<this.
CD;O=O+1){if(O>0)AAd=AAd+AH5;AAd=AAd+(((B=this.Alq.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAd;},Contains:function(Aaj){var O;for(O=0;O<this.CD;O=O+1)if(this.Alq.
Get(O)===Aaj)return true;return false;},Bi$:function(Aaj){return true;},_Init:function(
aArg){(this.Alq=[]).__proto__=C.Amq.Alq;this.__proto__=C.Amq;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL5={AfK:null,Init:function(aArg){var B;A.
zX([this,this.Bec],[B=A._GetAutoObject(A.Device.Device),B.A73,B.BaB],0);A.zX([this
,this.Bed],[B=A._GetAutoObject(A.Device.Device),B.A74,B.BaC],0);A.pe([this,this.
Bec],this);A.pe([this,this.Bed],this);},Clear:function(){C.Amq.Clear.call(this);
this.AfK.Clear();},Cq:function(){A._GetAutoObject(A.Device.Device).ArE(this.AfK.
toString());A._GetAutoObject(A.Device.Device).ArF(this.toString());},Bec:function(
G){this.AfK.EM(A._GetAutoObject(A.Device.Device).ABv);A.we(this,0);},Bed:function(
G){this.EM(A._GetAutoObject(A.Device.Device).ABw);A.we(this,0);},NU:function(Aaj
){return this.AfK.Contains(Aaj);},AUr:function(Aaj){if(!this.NU(Aaj))this.AfK.J(
Aaj);},AOG:function(){return this.AfK.NP();},_Init:function(aArg){C.Amq._Init.call(
this,aArg);this.__proto__=C.AL5;this.AfK=A._NewObject(C.Amq,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amq._Mark.call(this,D);if((B=this.AfK)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amm={_Init:function(){C.AL5._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARF={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.
Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);var GA=this.
Bo.Bw;var FM=A.jb.Ad8;var GQ=A.jb.Bm;if(this.Hf){FM=A.jb.Bm;GQ=A.jb.Text;}if(!G$
){this.Background.L(FM);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FM);this.V.L(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;},_Init:function(
aArg){C.T9._Init.call(this,aArg);this.__proto__=C.ARF;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.ATX={YJ:null,AjJ:null,KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=null;
this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.
Bx;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.XM._Init.call(this.
YJ={I:this},0);C.VM._Init.call(this.AjJ={I:this},0);this.__proto__=C.ATX;var B;this.
H(JZ);this.YJ.H(JZ);this.YJ.T(A.aaR(A.acf.A5v));this.AjJ.As(A._GetAutoObject(A.Device.
Device).VM);this.J(this.YJ,0);this.YJ.Wy(A.aaL(A.fl.Hr));this.YJ.Wz(A.aaL(A.fl.Hr
));this.YJ.As([B=this.AjJ,B.B7,B.B8]);this.YJ.CI(this.AjJ);this.AjJ.Bly([B=A._GetAutoObject(
A.Device.Device),B.ASk,B.AZX]);},_Done:function(){this.__proto__=C.OverlayMenu;this.
YJ._Done();this.AjJ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){
C.OverlayMenu._ReInit.call(this);this.YJ._ReInit();this.AjJ._ReInit();this.YJ.T(
A.aaR(A.acf.A5v));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PurchasedAnimalsListOverlayMenu"};C.VM={Abc:null,DataExportDestinationToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Abc)(F=this.Abc
,F[2].call(F[0],E));},Bly:function(E){if(A.aaZ(this.Abc,E))return;if(!!this.Abc)
A.z$([this,this.ApM],this.Abc,0);this.Abc=E;if(!!this.Abc)A.zX([this,this.ApM],this.
Abc,0);A.pe([this,this.ApM],this);},ApM:function(G){var F;if(!!this.Abc)this.Q=(
F=this.Abc,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.VM;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Abc)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMT={
YQ:null,Ak7:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.
CB=[this,this.XA];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null
);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.XM._Init.call(this.YQ={I:this},0);C.AD1._Init.call(this.
Ak7={I:this},0);this.__proto__=C.AMT;var B;this.H(JZ);this.YQ.H(JZ);this.YQ.T(A.
aaR(A.acf.Display));this.Ak7.As(A._GetAutoObject(A.Device.Device).Aqp);this.J(this.
YQ,0);this.YQ.Wy(A.aaL(A.fl.Hr));this.YQ.Wz(A.aaL(A.fl.Hr));this.YQ.As([B=this.Ak7
,B.B7,B.B8]);this.YQ.CI(this.Ak7);this.Ak7.BmD([B=A._GetAutoObject(A.Device.Device
),B.AEp,B.AIJ]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YQ._Done();
this.Ak7._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YQ._ReInit();this.Ak7._ReInit();this.YQ.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.AD1={AbP:null,ListViewScopeToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AbP)(F=this.AbP,F[2].call(
F[0],E));},BmD:function(E){if(A.aaZ(this.AbP,E))return;if(!!this.AbP)A.z$([this,
this.ApM],this.AbP,0);this.AbP=E;if(!!this.AbP)A.zX([this,this.ApM],this.AbP,0);
A.pe([this,this.ApM],this);},ApM:function(G){var F;if(!!this.AbP)this.Q=(F=this.
AbP,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.AD1;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AbP)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AU5={AB6:0,AB5:0,Ai:function(Ae){C.OU.Ai.call(this
,Ae);this.Background.L(this.AB5);this.V.L(this.AB6);},Bls:function(E){if(this.AB6===
E)return;this.AB6=E;this.An();},Blr:function(E){if(this.AB5===E)return;this.AB5=
E;this.An();},_Init:function(aArg){C.OU._Init.call(this,aArg);this.__proto__=C.AU5;
this.Ar(false);this.AB6=A.jb.Text;this.AB5=A.jb.CK;},_className:"Application::TextCaptionItem"
};C.AHb={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BdH],[B=A._GetAutoObject(A.Device.Device),B.A8z,B.BaT],0);A.pe([this,this.BdH
],this);},Dn:function(){return 3;},FX:function(aIndex){return this.WeightValuePrecisionToString.
BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwL(E);},BdH:function(G){this.Q=A._GetAutoObject(A.Device.Device).OJ;A.abo([
this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AHb;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightValuePrecisionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.AUx={Uz:null,A$e:A.jV,Init:function(
aArg){},Bk:function(aSize){C.BW.Bk.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Uz.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BW.Ai.call(this,Ae);this.Uz.L(this.V.AQ);},Bm7:function(E){if(this.A$e===E
)return;this.A$e=E;this.Uz.R(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);C.CH._Init.call(this.Uz={I:this},0);this.__proto__=C.AUx;this.H(AcN);this.Uz.H(
BtO);this.J(this.Uz,0);this.Uz.S(A.aaL(A.fl.Af));this.Uz.A2(A.aaL(A.fl.Ak));this.
Uz.Cu(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.Uz._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.Uz._ReInit(
);this.Uz.S(A.aaL(A.fl.Af));this.Uz.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BW._Mark.call(this,D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.Y6={MassDeregistrationCriterionToString:
null,Dn:function(){return 2;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BH(this.C4(aIndex));},_Init:function(
aArg){C.Cm._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y6;this.
Cc.Set(0,0);this.Cc.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANM={Vf:null
,Y6:null,Y8:null,Mq:null,At2:0,Init:function(aArg){this.Bb(this.Y8);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBG=((A.aaR(A.acf.Aqx)+A.aaR(A.acf.Colon))+CQ)+this.
At2.toFixed();this.Mq.Bm7(BBG);},CF:function(G){C.Ei.CF.call(this,G);A.zX([this,
this.ALo],this.Mq.Q,0);A.pe([this,this.ALo],this);},E3:function(G){C.Ei.E3.call(
this,G);A.z$([this,this.ALo],this.Mq.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Mq)&&!this.At2)this.N.HQ.Dr(100);else this.N.HQ.Dr(255);},Bes:
function(G){if(this.At2>0)A._GetAutoObject(A.Device.Device).A9(108,true,this.At2.
toFixed(),0,[this,this.BzV]);},ALo:function(G){var F;this.At2=A._GetAutoObject(A.
Device.Helper).Biy((F=this.Mq.Q,F[1].call(F[0])));this.An();A.pe([this,this.MG],
this);},Bem:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Am.Ca()){A._GetAutoObject(
A.Device.Device).A9(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Are()===false){this.Vf=[this,this.Bem];A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Af$]);return;}var AfW=A._GetAutoObject(A.Device.Device).AnS(1);if(
AfW.AnX)A._GetAutoObject(A.Device.Device).AqB(AfW);else A._GetAutoObject(A.Device.
Device).A9(88,true,A.jV,0,null);},Af$:function(G){var B;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===5)){A.z$([this,this.XC],[B=A.
_GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);this.Vf=null;}},XC:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AhL===3){A._GetAutoObject(A.Device.Device
).A9(74,false,A.jV,0,[this,this.Af$]);A.z$([this,this.XC],[B=A._GetAutoObject(A.
Device.Device),B.Wu,B.Xd],0);if(!!this.Vf)A.pe(this.Vf,this);this.Vf=null;}},BzV:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===7))A.pe([this,this.BBB],this);},BBB:function(G){A._GetAutoObject(A.
Device.Helper).BxT(this.Y6.Q);A._GetAutoObject(A.Device.Device).A9(109,true,this.
At2.toFixed(),0,null);A.pe([this,this.MG],this);A.pe([this,this.ALo],this);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Y6._Init.call(this.Y6={I:this},0);C.
Co._Init.call(this.Y8={I:this},0);C.AUx._Init.call(this.Mq={I:this},0);this.__proto__=
C.ANM;var B;this.Dq(C.AO0);this.Y8.H(IR);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.
A59));this.Y8.Bg(false);this.Mq.H(BtP);this.Mq.Aj(true);this.Mq.T(A.aaR(A.acf.A$u
));this.Mq.Bg(true);this.Mq.A_e(A.aaR(A.acf.Ok));this.J(this.Y8,0);this.J(this.Mq
,0);this.Y8.AR=[this,this.Bem];this.Mq.AR=[this,this.Bes];this.Mq.AeR([this,this.
Bes]);this.Mq.As([B=this.Y6,B.B7,B.B8]);this.Mq.CI(this.Y6);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Y6._Done();this.Y8._Done();this.Mq._Done();C.
Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y6._ReInit(
);this.Y8._ReInit();this.Mq._ReInit();this.Y8.T(A.aaR(A.acf.A59));this.Mq.T(A.aaR(
A.acf.A$u));this.Mq.A_e(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO0={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO0;this.
Text.R(A.aaR(A.acf.AdQ));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdQ));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANP={
Vf:null,Y7:null,AbT:null,Init:function(aArg){this.Bb(this.Y7);A.pe([this,this.MG
],this);},Bel:function(G){var B;var AzY=A._GetAutoObject(A.Device.Device).ADN();
switch(AzY){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A9(91,true,UW,0,[this,this.BeF]);break;
case 2:{this.Vf=[this,this.Bel];A.zX([this,this.XC],[B=A._GetAutoObject(A.Device.
Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Af$]);}break;default:throw new Error(Baj+AzY.toFixed());}},Af$:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);this.
Vf=null;}},XC:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhL===3){A.
_GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.Af$]);A.z$([this,this.
XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},BeH:function(G){var B;var AzY=A._GetAutoObject(A.Device.Device
).ADO();switch(AzY){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A9(95,true,A.jV,0,[this,this.BzW
]);break;case 2:{this.Vf=[this,this.BeH];A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Af$]);}break;case 3:A._GetAutoObject(A.Device.Device).A9(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A9(93,true,A.jV,0,null
);break;default:throw new Error(Baj+AzY.toFixed());}},BeF:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.Byw],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
Byy],this);break;default:throw new Error(BtQ+At.Id.toFixed());}},Byw:function(G){
if(A._GetAutoObject(A.Device.Device).ACd()){var A2G=A._GetAutoObject(A.Device.Device
).Am.QE();A._GetAutoObject(A.Device.Device).A9(80,true,A2G.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A9(82,true,A.jV,0,null);A.aaS([this,this.BzR],
this);},Byy:function(G){if(A._GetAutoObject(A.Device.Device).AGi()){var A2G=A._GetAutoObject(
A.Device.Device).Am.QE();A._GetAutoObject(A.Device.Device).A9(81,true,A2G.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A9(83,true,A.jV,0,null);A.aaS([
this,this.BAt],this);},BzW:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBC],this);},BBC:function(
G){A._GetAutoObject(A.Device.Device).A9(92,true,UW,0,[this,this.BeF]);},BAt:function(
G){A._GetAutoObject(A.Device.Device).A9(92,false,A.jV,0,null);},BzR:function(G){
A._GetAutoObject(A.Device.Device).A9(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Co._Init.call(this.Y7={I:this},0);C.Co._Init.call(
this.AbT={I:this},0);this.__proto__=C.ANP;this.Dq(C.AO3);this.Y7.H(IR);this.Y7.Aj(
true);this.Y7.T(A.aaR(A.acf.ACd));this.Y7.Bg(false);this.AbT.H(P7);this.AbT.Aj(true
);this.AbT.T(A.aaR(A.acf.AGi));this.AbT.Bg(true);this.J(this.Y7,-1);this.J(this.
AbT,-1);this.Y7.AR=[this,this.Bel];this.AbT.AR=[this,this.BeH];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y7._Done();this.AbT._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y7._ReInit();this.AbT.
_ReInit();this.Y7.T(A.aaR(A.acf.ACd));this.AbT.T(A.aaR(A.acf.AGi));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO3={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO3;this.Text.R(
A.aaR(A.acf.ACj));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACj));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Tu={NW:null
,AT3:0,ADQ:false,ADM:false,ADR:false,AlY:function(G){this.A5N(this);},AS_:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DO.AutoActions=E;A.zV([
this,this.BBl],this.NW,0);},AL6:function(){this.AL9(A.aaR(A.acf.A$C),[this,this.
BBS],[this,this.A8t,this.AE$]);this.AL9(A.aaR(A.acf.AF9),[this,this.BBQ],[this,this.
A8q,this.AE9]);this.AL9(A.aaR(A.acf.AnY),[this,this.BBR],[this,this.A8r,this.AE_
]);A._GetAutoObject(C.BS).FS();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BnC)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FS();},AL9:function(Bwl,Bxw,BwQ){if(!this.NW
)return;this.AL8(Bwl,Bxw,BwQ);},BBS:function(G){this.AE$(!this.ADR);},BBQ:function(
G){this.AE9(!this.ADM);},BBR:function(G){this.AE_(!this.ADQ);},A3U:function(ED,BwP
){if(!this.NW)return;if(BwP)this.NW.BgE(ED);else this.NW.BnV(ED);this.NW.Cq();},
A4z:function(Ah$,Aia,BxO){A._GetAutoObject(C.BS).ABx(Ah$,Aia,[this,this.A8J,this.
ATk],BxO);},AGv:function(ED){if(!this.NW)return;this.NW.AGv(ED);this.NW.Cq();},AE$:
function(E){if(this.ADR===E)return;this.ADR=E;this.A3U(256,E);A.abo([this,this.A8t
,this.AE$],0);},AE9:function(E){if(this.ADM===E)return;this.ADM=E;this.A3U(2,E);
A.abo([this,this.A8q,this.AE9],0);},AE_:function(E){if(this.ADQ===E)return;this.
ADQ=E;this.A3U(1,E);A.abo([this,this.A8r,this.AE_],0);},BBl:function(G){this.AE$(
this.NW.Contains(256));this.AE9(this.NW.Contains(2));this.AE_(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATk(this.NW.OC(this.NW.NP()-1));},ATk:function(E){if(this.
AT3===E)return;this.AT3=E;A.abo([this,this.A8J,this.ATk],0);},A8t:function(){return this.
ADR;},A8q:function(){return this.ADM;},A8r:function(){return this.ADQ;},A8J:function(
){return this.AT3;},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=
C.Tu;},_Mark:function(D){var B;C.GU._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvQ={Q:null,Cq:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADK:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kc:function(G){var F;if(!!this.Q)this.EM((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kc],E,
0);if(!!E)A.pe([this,this.Kc],this);},AGv:function(ED){if(this.NP()>0)this.Axo(this.
NP()-1,ED);},BgE:function(ED){if(this.Contains(ED))return;if(this.CD>=17){A.ab5(
"%s",AH4);return;}var AzR=0;for(;(AzR<=this.NP())&&(this.OC(AzR)<ED);AzR++);var AA3=
this.NP()-1;this.J(this.OC(AA3));for(;AA3>AzR;AA3--)this.Axo(AA3,this.OC(AA3-1));
this.Axo(AzR,ED);},BnV:function(ED){var index=this.DU(ED);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axo(index,this.OC(index+1));this.Axo(index,0);this.
CD--;},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AvQ;},_Mark:
function(D){var B;C.Vs._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.AvZ={_Init:
function(){C.AvQ._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8D,B.BaX]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av0={_Init:function(){C.AvQ._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8E,B.BaY]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxV={_Init:function(){C.AvQ._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A8$,B.Bba]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADg={QO:null,AjV:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QO={I:this},0);A.acg.Ap._Init.
call(this.AjV={I:this},0);this.__proto__=C.ADg;this.Eq.H(BtR);this.DS.H(BtS);this.
QO.H(BtT);this.QO.R(A.aaR(A.acf.Ud));this.QO.A6(0x11);this.QO.L(A.jb.Text);this.
AjV.H(AZP);this.AjV.L(A.jb.Text);this.J(this.QO,0);this.J(this.AjV,0);this.QO.S(
A.aaL(A.fl.Af));this.QO.A2(A.aaL(A.fl.Ak));this.QO.Cu(A.aaL(A.fl.Bh));this.AjV.Aw(
A.aaL(A.ach.Avs));},_Done:function(){this.__proto__=C.Dc;this.QO._Done();this.AjV.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QO._ReInit();this.AjV._ReInit();this.QO.R(A.aaR(A.acf.Ud));this.QO.S(A.aaL(A.fl.
Af));this.QO.A2(A.aaL(A.fl.Ak));this.QO.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.ABY={AP:null,SR:null,OV:null,AKs:A.jV,BdQ:A.jV,Md:0,Init:function(aArg){},Bk:
function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OV.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OV.M[2]-1,0,this.OV.M[2]+1,
aSize[1]]);this.SR.H([this.OV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OV.L(this.V.AQ);this.SR.L(this.V.AQ);this.T(this.AKs);this.
OV.R(this.BdQ);this.SR.R(this.Md.toFixed());},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var J$=this.AX.KN(Ad,26);var A2y=A._GetAutoObject(A.Device.
Converter).Rf(J$);this.AKs=A.abV(A2y,A2y.length-5);this.BdQ=A.ab2(A2y,5);if((A._GetAutoObject(
A.Device.Converter).ZZ(J$)===10)&&!(Math.trunc(J$/10000000000)%100))this.AKs=A.ab1(
this.AKs,3,2);this.Md=this.AX.CE(Ad,1);this.An();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SR={
I:this},0);C.CH._Init.call(this.OV={I:this},0);this.__proto__=C.ABY;this.V.H(BtU
);this.AP.H(AZS);this.AP.L(A.jb.Bc);this.SR.H(AZT);this.OV.H(BtV);this.J(this.AP
,0);this.J(this.SR,0);this.J(this.OV,0);this.V.S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(
A.fl.Bh));this.SR.S(A.aaL(A.fl.Ak));this.SR.A2(A.aaL(A.fl.Bh));this.SR.Cu(A.aaL(
A.fl.Bh));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(A.aaL(A.fl.Bh));this.OV.Cu(A.aaL(
A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SR._Done();this.OV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SR._ReInit();this.OV._ReInit();this.V.
S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh));this.SR.S(A.aaL(A.fl.Ak));this.SR.A2(
A.aaL(A.fl.Bh));this.SR.Cu(A.aaL(A.fl.Bh));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(
A.aaL(A.fl.Bh));this.OV.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APt={Q:null,Init:function(aArg){var
B;this.AAT(this);this.As([B=A._GetAutoObject(A.Device.Device).Am,B.Fj,B.Fn]);},AEC:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DQ(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var Ai2=this.Av$();if((Ai2.length>0)&&(Ai2!==UW)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai2,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},AAT:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DQ(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.AS3(A.jV);return;}var BbH=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DQ(26,4))?B:null);if(!BbH){this.AW.AS3(UW);this.AW.
AeU(true);}else this.AW.AS3(BbH.A4);},_Init:function(aArg){C.AjR._Init.call(this
,aArg);this.__proto__=C.APt;this.AW.AwE(0);this.AW.Bmp(true);this.AW.Di=[this,this.
AEC];this.Init(aArg);},_Mark:function(D){var B;C.AjR._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVi={Fw:null,C_:null,Dk:null,EL:null,AsK:null,Init:function(aArg){var B;A.zX([
this,this.BeP],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0c],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.BeP],this);A.pe([
this,this.Adr],this);},BeP:function(G){var AaO=false;switch(A._GetAutoObject(A.Device.
Device).An3){case 0:AaO=false;break;case 3:AaO=true;break;default:throw new Error(
BtW+A._GetAutoObject(A.Device.Device).An3.toFixed());}A._GetAutoObject(A.Device.
Helper).JV(this.C_,AaO);A._GetAutoObject(A.Device.Helper).JV(this.Dk,AaO);A._GetAutoObject(
A.Device.Helper).JV(this.EL,AaO);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dk.Q,CA[1].call(CA[0])))>12)(CA=this.Dk.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Ce._Init.call(this
,aArg);C.BW._Init.call(this.Fw={I:this},0);C.Io._Init.call(this.C_={I:this},0);C.
Io._Init.call(this.Dk={I:this},0);C.AvT._Init.call(this.EL={I:this},0);C.AVh._Init.
call(this.AsK={I:this},0);this.__proto__=C.AVi;var B;this.I8(A.aaR(A.acf.UnlinkTransponder
));this.Fw.H(UV);this.Fw.Aj(true);this.Fw.Z(true);this.Fw.T(A.aaR(A.acf.Aqi));this.
Fw.Bg(true);this.C_.H(Ale);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqD));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OA));
this.C_.I9(A.aaR(A.acf.Ey));this.Dk.H(AcO);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.
Zm));this.Dk.Bg(true);this.Dk.F0(0);this.Dk.EV(12);this.Dk.IM(A.aaR(A.acf.OA));this.
Dk.I9(A.aaR(A.acf.Ey));this.EL.H(Aor);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bg(false);this.EL.ArZ(A.aaR(A.acf.Aqk));this.J(this.Fw,0);this.J(this.C_,0);this.
J(this.Dk,0);this.J(this.EL,0);this.Fw.As([B=this.AsK,B.B7,B.B8]);this.Fw.CI(this.
AsK);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dk.As([B=A.
_GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjW));this.EL.
OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.Fw._Done();this.C_._Done();this.Dk._Done();this.EL._Done();this.AsK._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.Fw._ReInit(
);this.C_._ReInit();this.Dk._ReInit();this.EL._ReInit();this.AsK._ReInit();this.
I8(A.aaR(A.acf.UnlinkTransponder));this.Fw.T(A.aaR(A.acf.Aqi));this.C_.T(A.aaR(A.
acf.AqD));this.C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.acf.Ey));this.Dk.T(A.aaR(
A.acf.Zm));this.Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(A.acf.Ey));this.EL.ArZ(A.
aaR(A.acf.Aqk));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.Fw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVh={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgf],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0c],0);A.pe([
this,this.Bgf],this);},Dn:function(){return 2;},FX:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BH(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw6(E);},Bgf:function(G){this.Q=A._GetAutoObject(A.Device.Device).An3;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVh;this.Cc.Set(0,0);this.Cc.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMG.__proto__=A.Core.Root;C.AB.__proto__=C.Abi;C.WH.__proto__=
A.Core.P;C.Ow.__proto__=A.Core.P;C.ZA.__proto__=A.acl.Gh;C.Ej.__proto__=A.Core.P;
C.X0.__proto__=C.AB;C.AUK.__proto__=C.AB;C.Avq.__proto__=C.AB;C.Q8.__proto__=C.AB;
C.Fi.__proto__=C.Hc;C.Ay.__proto__=A.Core.P;C.Ce.__proto__=C.AB;C.AqZ.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.AC_.__proto__=C.AmU;C.AGN.
__proto__=C.DR;C.Co.__proto__=C.OU;C.Dt.__proto__=C.Eg;C.Io.__proto__=C.Dt;C.BW.
__proto__=C.Dt;C.SM.__proto__=C.Dt;C.OH.__proto__=C.Cm;C.Rb.__proto__=C.AC;C.AUZ.
__proto__=C.Ba;C.F$.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GU.__proto__=C.AB;C.
ABX.__proto__=C.Ba;C.Ad6.__proto__=C.AB;C.Mi.__proto__=C.Ow;C.AUU.__proto__=C.AB;
C.AqY.__proto__=C.AC_;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUA.__proto__=C.Aco;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asq.__proto__=A.Core.P;C.AGz.__proto__=C.Dt;C.CH.__proto__=A.Core.P;C.
AjQ.__proto__=C.Ys;C.Amp.__proto__=C.Ra;C.Ahr.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATN.__proto__=C.AB;C.Ml.__proto__=C.Co;C.Ane.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abi;C.APJ.__proto__=C.OverlayMenu;C.GG.__proto__=A.Core.P;C.Abi.__proto__=
A.Core.P;C.AUF.__proto__=A.acl.Aei;C.AmU.__proto__=C.BR;C.AC$.__proto__=C.AmU;C.
Ki.__proto__=C.AC;C.AUC.__proto__=C.Dt;C.AF_.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wp.__proto__=C.Arq;C.IG.__proto__=C.AC$;C.I0.__proto__=C.AB;C.AMe.__proto__=C.
AF_;C.AMa.__proto__=C.GU;C.ANu.__proto__=C.GU;C.Aem.__proto__=C.Co;C.Qy.__proto__=
C.Aem;C.APw.__proto__=C.BR;C.AjR.__proto__=C.BR;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Ga.__proto__=C.AC;C.Afh.__proto__=C.BW;C.AT4.__proto__=C.AB;C.AbU.__proto__=
C.Co;C.T9.__proto__=C.Co;C.ANG.__proto__=C.Ce;C.AU1.__proto__=C.Ce;C.ANT.__proto__=
C.Ce;C.AUe.__proto__=C.Ce;C.WX.__proto__=A.Core.P;C.QR.__proto__=C.Fi;C.D2.__proto__=
A.Core.P;C.T5.__proto__=C.AB;C.AVz.__proto__=C.GU;C.AMf.__proto__=C.AxT;C.AVk.__proto__=
C.Ce;C.AeK.__proto__=C.AC;C.AxT.__proto__=C.AB;C.AVI.__proto__=C.Ce;C.AUB.__proto__=
C.Aco;C.ABt.__proto__=A.Graphics.Hv;C.Aqe.__proto__=C.AB;C.ARw.__proto__=A.Core.
P;C.Fm.__proto__=C.OverlayMenu;C.XM.__proto__=C.BW;C.Ajh.__proto__=C.Co;C.ALY.__proto__=
C.Fm;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL3.__proto__=C.Vs;C.AL4.
__proto__=C.Fm;C.Sb.__proto__=C.T9;C.AML.__proto__=C.Vs;C.Wh.__proto__=C.Fi;C.Vp.
__proto__=A.Core.P;C.Kt.__proto__=A.Core.P;C.ARU.__proto__=C.HY;C.AT7.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANv.__proto__=C.Amp;C.Hc.__proto__=A.
Core.P;C.AVB.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa2.
__proto__=C.Ga;C.AxL.__proto__=C.ABt;C.ATI.__proto__=C.OverlayMenu;C.AOA.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATJ.__proto__=A.Core.P;C.AUE.__proto__=A.acl.
Aei;C.AkS.__proto__=C.Io;C.Amr.__proto__=C.OverlayMenu;C.AB0.__proto__=C.Ba;C.Yt.
__proto__=C.AjR;C.AqH.__proto__=C.HY;C.Acn.__proto__=C.Dt;C.WeightRecordingScope.
__proto__=C.AC;C.AuB.__proto__=C.AB;C.AUD.__proto__=C.Io;C.AMc.__proto__=C.AB;C.
Arq.__proto__=C.HY;C.AG8.__proto__=A.Core.P;C.AVE.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeM.__proto__=C.Eg;C.AvU.__proto__=C.AeM;C.SetTransponderScreen.__proto__=
C.Q8;C.ADh.__proto__=C.EA;C.AHa.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Me.__proto__=C.Q8;C.ALW.__proto__=C.Me;C.ManualActionScanScreen.__proto__=C.Me;
C.ALX.__proto__=A.Core.P;C.APA.__proto__=C.Dc;C.ADf.__proto__=C.Dc;C.TS.__proto__=
C.Dc;C.APC.__proto__=C.Dc;C.AM$.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AM9.__proto__=
C.Ba;C.Jo.__proto__=A.Core.P;C.AM8.__proto__=C.Ba;C.AmT.__proto__=C.TD;C.AF0.__proto__=
C.Axe;C.AkG.__proto__=C.Axe;C.Zz.__proto__=C.AkG;C.ANC.__proto__=C.OU;C.OU.__proto__=
C.Hc;C.APF.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AM5.__proto__=C.Ajz;C.ADb.__proto__=
C.TT;C.Kh.__proto__=A.Core.P;C.AmB.__proto__=C.Ml;C.AOX.__proto__=C.Km;C.AutoRegistrationMode.
__proto__=C.AC;C.APG.__proto__=C.EA;C.Tx.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMq.__proto__=C.RU;C.AME.__proto__=C.AaY;C.AMz.__proto__=C.AaY;C.AT6.__proto__=
C.Ba;C.APE.__proto__=C.EA;C.AMt.__proto__=C.AaY;C.IC.__proto__=C.IZ;C.RO.__proto__=
C.Ft;C.RS.__proto__=C.Ft;C.Tw.__proto__=C.JG;C.Qx.__proto__=C.Ft;C.Tv.__proto__=
C.JG;C.AMb.__proto__=C.Aqe;C.AQV.__proto__=C.Ce;C.AaY.__proto__=C.D9;C.Kg.__proto__=
C.Cm;C.ARs.__proto__=C.Ce;C.AMo.__proto__=C.K_;C.AMp.__proto__=C.D9;C.AMm.__proto__=
C.K_;C.AMn.__proto__=C.K_;C.WJ.__proto__=C.Eg;C.AUy.__proto__=C.WJ;C.RT.__proto__=
C.Ft;C.APv.__proto__=C.IG;C.ANw.__proto__=C.AB;C.ANd.__proto__=C.Ad6;C.AL$.__proto__=
C.I0;C.AVy.__proto__=C.I0;C.AOZ.__proto__=C.Km;C.APx.__proto__=C.Km;C.APB.__proto__=
C.TT;C.AM_.__proto__=C.Ajz;C.TT.__proto__=C.Dc;C.Aqs.__proto__=A.acv.AB_;C.Ajz.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMW.__proto__=C.DR;C.OZ.__proto__=C.DR;C.AqW.__proto__=
A.Core.P;C.AMv.__proto__=C.F$;C.AT_.__proto__=A.Core.P;C.K_.__proto__=C.D9;C.AND.
__proto__=C.Ce;C.AuZ.__proto__=C.Co;C.AC7.__proto__=C.BR;C.AC8.__proto__=C.BR;C.
Ft.__proto__=C.JG;C.AOD.__proto__=C.GU;C.AOC.__proto__=C.I0;C.APb.__proto__=C.Km;
C.ADd.__proto__=C.Dc;C.ABW.__proto__=C.Ba;C.AT5.__proto__=C.Ahr;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.AR6.
__proto__=C.Tu;C.AR5.__proto__=C.I0;C.AC9.__proto__=C.Km;C.ABF.__proto__=C.Ga;C.
AL1.__proto__=C.Fm;C.AMd.__proto__=C.AuB;C.NewAnimalSetTransponderScreen.__proto__=
C.Asv;C.C7.__proto__=C.AC;C.OY.__proto__=A.Core.P;C.RP.__proto__=C.Ft;C.RQ.__proto__=
C.Ft;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARD.__proto__=C.OverlayMenu;
C.VL.__proto__=C.T9;C.AvT.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.Tx;
C.AnimalMultiInfoScreen.__proto__=C.Tx;C.AMs.__proto__=C.OverlayMenu;C.I5.__proto__=
A.Core.P;C.AL0.__proto__=C.GU;C.ALZ.__proto__=C.I0;C.APu.__proto__=C.IG;C.AsF.__proto__=
C.OY;C.Aq$.__proto__=C.OY;C.AuV.__proto__=C.AC;C.AMk.__proto__=C.AC;C.AGy.__proto__=
C.Eg;C.GZ.__proto__=A.Core.P;C.AQY.__proto__=C.HI;C.AVp.__proto__=C.X0;C.ARQ.__proto__=
C.Wp;C.ADG.__proto__=C.Lg;C.HI.__proto__=C.GZ;C.Lg.__proto__=C.GZ;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvK.__proto__=C.HI;C.AUw.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asv;C.ReasonOfLeaving.__proto__=C.AC;C.OR.__proto__=C.BW;C.AeP.__proto__=
C.Ek;C.ARJ.__proto__=C.Ek;C.ARI.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q9.__proto__=
C.Eg;C.AQZ.__proto__=C.Lg;C.AvJ.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fv.
__proto__=C.AB;C.AOb.__proto__=C.AB;C.AOe.__proto__=C.Fv;C.AOf.__proto__=C.Fv;C.
AqK.__proto__=C.Fv;C.Abu.__proto__=C.AjQ;C.Km.__proto__=C.AjQ;C.Avo.__proto__=C.
Abu;C.AO$.__proto__=C.Abu;C.AO_.__proto__=C.Abu;C.AO9.__proto__=C.BR;C.Aet.__proto__=
C.EA;C.AmJ.__proto__=C.Ba;C.Ajo.__proto__=C.IC;C.ACz.__proto__=A.Core.P;C.AkP.__proto__=
A.Core.P;C.Ra.__proto__=C.AB;C.AU0.__proto__=C.Ra;C.APa.__proto__=C.BR;C.Dc.__proto__=
C.EA;C.KO.__proto__=C.BR;C.AO5.__proto__=C.KO;C.AO7.__proto__=C.KO;C.Yn.__proto__=
C.AmJ;C.Agp.__proto__=C.Hc;C.AN0.__proto__=C.GU;C.ANZ.__proto__=C.I0;C.AO8.__proto__=
C.Km;C.Abp.__proto__=C.Acn;C.AjH.__proto__=C.Qy;C.ABQ.__proto__=C.Qy;C.APz.__proto__=
C.Dc;C.AM7.__proto__=C.Ba;C.RR.__proto__=C.Ft;C.AMl.__proto__=C.Ft;C.ANR.__proto__=
C.Ei;C.ANS.__proto__=C.Ei;C.AO6.__proto__=C.KO;C.Nb.__proto__=C.AbU;C.ANN.__proto__=
C.Ei;C.AO1.__proto__=C.KO;C.PK.__proto__=C.Co;C.Sc.__proto__=C.AB;C.AOc.__proto__=
C.Sc;C.AOd.__proto__=C.Sc;C.AOg.__proto__=C.AqK;C.AN$.__proto__=C.Fv;C.AaX.__proto__=
C.IC;C.Pi.__proto__=C.IC;C.AMx.__proto__=C.Amr;C.ARq.__proto__=C.T5;C.ARp.__proto__=
C.T5;C.AR1.__proto__=C.Tu;C.AR0.__proto__=C.I0;C.APo.__proto__=C.Km;C.Q4.__proto__=
C.GU;C.AUf.__proto__=C.I0;C.Aeq.__proto__=C.Ys;C.ABV.__proto__=C.Ba;C.ADc.__proto__=
C.Dc;C.APq.__proto__=C.BR;C.Aa0.__proto__=C.NE;C.XT.__proto__=C.NE;C.RU.__proto__=
C.D9;C.XU.__proto__=C.RU;C.XR.__proto__=C.IB;C.AaV.__proto__=C.IB;C.XQ.__proto__=
C.IB;C.AaU.__proto__=C.IB;C.AMu.__proto__=C.AB;C.IB.__proto__=C.IZ;C.IZ.__proto__=
C.Hc;C.NE.__proto__=C.Ft;C.Axd.__proto__=C.Zz;C.ANB.__proto__=C.AmB;C.Axf.__proto__=
C.Zz;C.ATV.__proto__=C.Ce;C.ATT.__proto__=C.Ek;C.AQW.__proto__=C.Lg;C.ATU.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARR.__proto__=C.HY;C.AMw.__proto__=C.Amr;C.AMM.__proto__=
C.Vs;C.JG.__proto__=C.IZ;C.APs.__proto__=C.Yt;C.Abo.__proto__=C.Cm;C.APD.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Me;C.APr.__proto__=C.AqY;C.Jc.__proto__=A.Core.
P;C.APn.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Q8;C.AN1.__proto__=C.AqH;
C.UL.__proto__=C.Cm;C.UM.__proto__=C.UL;C.AcJ.__proto__=C.UL;C.AdR.__proto__=C.AC;
C.AGx.__proto__=C.Eg;C.ANQ.__proto__=C.Ei;C.AO4.__proto__=C.KO;C.ANO.__proto__=C.
Ei;C.AO2.__proto__=C.KO;C.Aq0.__proto__=C.TS;C.APy.__proto__=C.TS;C.Aqt.__proto__=
C.M1;C.AM6.__proto__=C.M1;C.ARK.__proto__=C.AeP;C.Ys.__proto__=C.BR;C.Aco.__proto__=
C.BW;C.FD.__proto__=C.AC;C.AMA.__proto__=C.FD;C.AMB.__proto__=C.FD;C.AMh.__proto__=
C.I0;C.TD.__proto__=C.BW;C.ART.__proto__=C.AB;C.Asv.__proto__=C.SetTransponderScreen;
C.ADH.__proto__=C.HI;C.Asw.__proto__=C.OR;C.Axq.__proto__=C.OR;C.Acr.__proto__=C.
Cm;C.AVO.__proto__=C.Tu;C.AVN.__proto__=C.I0;C.AQ0.__proto__=A.Core.P;C.AQX.__proto__=
C.HI;C.ACE.__proto__=C.Abp;C.LW.__proto__=A.Core.P;C.AUd.__proto__=C.Ce;C.AUc.__proto__=
C.Ce;C.AVg.__proto__=C.Ce;C.Afm.__proto__=C.Cm;C.I$.__proto__=A.acn.I$;C.AU6.__proto__=
C.AB;C.ATY.__proto__=C.Q4;C.ADe.__proto__=C.Dc;C.AMU.__proto__=C.Q4;C.AOY.__proto__=
C.Aeq;C.APp.__proto__=C.Aeq;C.ABZ.__proto__=C.Ba;C.AUv.__proto__=C.SM;C.AUz.__proto__=
C.Q9;C.APm.__proto__=C.BR;C.ARB.__proto__=C.Fm;C.ARA.__proto__=C.Fm;C.ARz.__proto__=
C.Fm;C.AL5.__proto__=C.Amq;C.ARF.__proto__=C.T9;C.ATX.__proto__=C.OverlayMenu;C.
VM.__proto__=C.AC;C.AMT.__proto__=C.OverlayMenu;C.AD1.__proto__=C.AC;C.AU5.__proto__=
C.OU;C.AHb.__proto__=C.Cm;C.AUx.__proto__=C.BW;C.Y6.__proto__=C.Cm;C.ANM.__proto__=
C.Ei;C.AO0.__proto__=C.KO;C.ANP.__proto__=C.Ei;C.AO3.__proto__=C.KO;C.Tu.__proto__=
C.GU;C.AvQ.__proto__=C.Vs;C.ADg.__proto__=C.Dc;C.ABY.__proto__=C.Ba;C.APt.__proto__=
C.AjR;C.AVi.__proto__=C.Ce;C.AVh.__proto__=C.Cm;};C._ReInit=function(){var B;if((
B=C.Axu._this))B._ReInit(),C.Axu._ReInit.call(B);if((B=C.Axv._this))B._ReInit(),
C.Axv._ReInit.call(B);if((B=C.A$._this))B._ReInit(),C.A$._ReInit.call(B);if((B=C.
Ph._this))B._ReInit(),C.Ph._ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(
),C.AutoActions._ReInit.call(B);if((B=C.Afd._this))B._ReInit(),C.Afd._ReInit.call(
B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(B);if((B=C.WD._this))B._ReInit(
),C.WD._ReInit.call(B);if((B=C.Asx._this))B._ReInit(),C.Asx._ReInit.call(B);if((
B=C.AnR._this))B._ReInit(),C.AnR._ReInit.call(B);if((B=C.DO._this))B._ReInit(),C.
DO._ReInit.call(B);if((B=C.AuJ._this))B._ReInit(),C.AuJ._ReInit.call(B);if((B=C.
Amm._this))B._ReInit(),C.Amm._ReInit.call(B);if((B=C.AvZ._this))B._ReInit(),C.AvZ.
_ReInit.call(B);if((B=C.Av0._this))B._ReInit(),C.Av0._ReInit.call(B);if((B=C.AxV.
_this))B._ReInit(),C.AxV._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Axu._this
)&&(B._cycle!=D))B._Done(C.Axu._this=null);if((B=C.Axv._this)&&(B._cycle!=D))B._Done(
C.Axv._this=null);if((B=C.A$._this)&&(B._cycle!=D))B._Done(C.A$._this=null);if((
B=C.Ph._this)&&(B._cycle!=D))B._Done(C.Ph._this=null);if((B=C.AutoActions._this)&&(
B._cycle!=D))B._Done(C.AutoActions._this=null);if((B=C.Afd._this)&&(B._cycle!=D)
)B._Done(C.Afd._this=null);if((B=C.BS._this)&&(B._cycle!=D))B._Done(C.BS._this=null
);if((B=C.WD._this)&&(B._cycle!=D))B._Done(C.WD._this=null);if((B=C.Asx._this)&&(
B._cycle!=D))B._Done(C.Asx._this=null);if((B=C.AnR._this)&&(B._cycle!=D))B._Done(
C.AnR._this=null);if((B=C.DO._this)&&(B._cycle!=D))B._Done(C.DO._this=null);if((
B=C.AuJ._this)&&(B._cycle!=D))B._Done(C.AuJ._this=null);if((B=C.Amm._this)&&(B._cycle
!=D))B._Done(C.Amm._this=null);if((B=C.AvZ._this)&&(B._cycle!=D))B._Done(C.AvZ._this=
null);if((B=C.Av0._this)&&(B._cycle!=D))B._Done(C.Av0._this=null);if((B=C.AxV._this
)&&(B._cycle!=D))B._Done(C.AxV._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */