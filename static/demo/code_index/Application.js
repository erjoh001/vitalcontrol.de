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
var Cc=[0,0,240,320];var BD=[0,0,240,40];var E6=[0,0,20,30];var Hp=[6,21,14,25];var
IS=[6,15,14,19];var Ir=[6,9,14,13];var O1=[209,7,229,37];var P3=[0,40,240,320];var
P4=[0,228,240,298];var CQ=" ";var Fe=[0,40,240,280];var L1=[0,40,232,280];var P5=[
0,40,116,160];var J0=[114,40,230,160];var N_=[0,160,116,280];var P6=[116,160,232
,280];var MG=[0,280,116,400];var S6=[116,280,232,400];var UN=[0,400,116,520];var
Z0=[116,400,232,520];var WY=[-1,520,115,640];var Is=[232,40,240,280];var UO=[5,40
,235,120];var Z1=[120,140,210,230];var WZ=[20,140,110,230];var Z2=[0,0,116,120];
var W0=[0,0,120,120];var Z3=[0,0,116,45];var Z4=[0,0,8,200];var UP=[0,0,8,20];var
W1=[30,0,210,40];var P7=[0,0,40,40];var Z5=[7,8,200,40];var O2=[0,0,200,40];var Rj=[
6,1];var W2="ERROR: Invalid value for ItemHighlighting";var W3=[10,10,40,30];var
W4=[0,0,120,40];var W5=[60,0,180,40];var Z6=[120,0,240,40];var W6=[0,0,100,40];var
W7=[83,0,157,40];var S7=[140,0,240,40];var UQ=[0,0,20,40];var UR=[220,0,240,40];
var AcH=[0,0,300,30];var S8=[0,30,300,60];var Z7=[0,60,300,90];var Afw=[0,90,300
,120];var Z8=[0,100,300,110];var W8=[0,50,300,60];var Z9=[0,30,300,40];var Z_="*";
var Afx=[40,40];var KX=[0,0,240,80];var AcI=[0,0,240,50];var Lu="Cap";var AhS=[0
,40,40,80];var An7=[200,40,240,80];var N$=[30,40,210,80];var W9="--";var An8="%d";
var US="%m";var AhT="%Y";var AcJ=" (";var UT=[0,0,232,80];var An9="Date";var An_=[
48,40,88,78];var An$=[39,40,79,80];var Aoa=[80,44,87,77];var Afy=".";var AsN=[88
,44,120,77];var AxV=[120,44,127,77];var AxW=[127,44,191,77];var O3=[0,0,80,40];var
Rk="Text";var AxX=[430,102,430,102];var UU=[0,0,240,240];var AsO=[232,0,240,240];
var AxY=[0,10,240,240];var AxZ="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax0="Unhandled option";
var Aob=[0,80,240,280];var Afz="Unhandled animal list action";var Aoc="Animal list content not handled.";
var IT=[0,40,240,80];var Aod="Set Selected";var W_=" %%";var Aoe=[0,180,240,220];
var AsP=[82,127,167,150];var AsQ="Group";var AsR=[77,91,167,124];var Aof=[0,0,90
,33];var Aog=[4,4,18,29];var AsS=[20,4,34,29];var Ax1=[36,4,50,29];var Ax2=[52,4
,66,29];var Ax3=[68,4,82,29];var AsT="ERROR: Unhandled Device::SyncState";var Ax4=
":\n";var P8="{1}";var Ax5="{2}";var AVG=[0,49,240,109];var AVH=[0,170,240,243];
var AVI=[0,110,240,170];var AVJ=[20,243,220,268];var AHd=[30,8];var AHe="\u2265 ";
var AfA=[0,0,240,160];var Aoh=[0,0,0,0];var AVK=[0,0,240,66];var AHf=[10,0,76,66
];var Ak7=[33,33];var AHg=[87,0,153,66];var AHh=[164,0,230,66];var AVL="No statistics available";
var AHi="in this environment.";var AVM=" fps";var AVN="CPU: - %%";var AcK=[0,0,240
,120];var AVO=[130,0,237,20];var AVP=[20,0,120,20];var AHj=[0,20,240,40];var AsU=[
40,20,100,40];var AHk=[100,20,240,40];var AHl=[0,40,240,60];var Ax6=[40,40,100,60
];var AHm=[100,40,240,60];var Ax7=[0,60,50,80];var AVQ=[100,60,240,80];var AVR=[
0,80,50,100];var AVS=[100,80,240,100];var AVT=[0,100,50,120];var AHn=[100,100,240
,120];var AVU=[5,5,15,15];var O4="%H";var Ax8="%M";var AVV="Time";var AVW=[79,40
,119,78];var AVX=[125,40,164,80];var AVY=[86,40,126,80];var AVZ=":";var AV0=[75,
40,115,80];var AHo=[0,0,240,150];var AHp=[60,0,155,40];var Aoi=[30,0,65,40];var Ax9=[
60,0,100,40];var AV1=[88,0,128,40];var AV2=[60,0,71,40];var AV3=[60,0,74,40];var
AHq=[90,0,123,40];var AV4=[120,0,161,40];var AHr=[120,0,165,40];var AHs=[60,0,88
,40];var AHt=[60,0,95,40];var AV5="Did not expect iterator bigger than number of records";
var AHu=[20,0,240,20];var AV6=[0,38,240,40];var AHv=[0,0,8,4];var Rl=[0,0,240,280
];var W$=[0,280,240,320];var AV7="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AV8="]";var AV9="ERROR: Cannot find closing bracket \'}\' in text [";var AV_=
"] opened at index ";var AV$="#";var AWa="ERROR: Invalid parameter: {";var AWb="}";
var AhU=[20,20];var AHw=[0,12];var AWc="ERROR: Not expected Application::FooterFocus, ";
var AWd="%M:%S";var AHx=[30,150,207,170];var AHy=[20,70,217,194];var Ax_="Unhandled item.";
var P9=[0,80,240,120];var AWe="Unhandled Overlay Menu ";var AWf="Invalid bootloader message: ";
var AWg="Unknown USBState: ";var AsV="Invalid fader";var AWh=[2,4,32,40];var AWi=[
29,4,80,40];var AWj=[120,4,200,40];var AWk=[80,0,114,40];var AWl="-1";var AWm="< ";
var AsW=[0,0,232,40];var AWn=[22,40,180,80];var AWo=[2,40,22,80];var AWp=[23,40,
163,80];var AWq=[210,40,230,80];var AWr=[164,40,210,80];var AWs=[169,43,205,77];
var AWt="ERROR: No outlet assigned";var AWu="Unhandled screen";var AWv="ERROR: Cannot cache null screen.";
var AWw="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHz="Untreated Rating Method type!";var Ak8="Unhandled animal type";var AWx=[
5,60,235,140];var AWy=[0,130,240,196];var AWz=[49,240,229,280];var Ax$="Implement in derived classes!";
var Ak9="Implement in derived class";var AhV=[0,40,230,120];var Aya=[0,120,230,200
];var Aoj=[0,200,230,280];var AhW=[0,280,230,360];var AWA=[0,360,230,440];var Ayb=[
230,40,238,280];var AHA="WARNING: Unhandled filter field: ";var AfB="Should not happen.";
var AHB="Invalid Boolean item";var Z$=[0,120,240,160];var Ak_=[0,160,240,200];var
Aok=[0,200,240,240];var AWB=[1152,11,1392,51];var AWC=[1152,51,1392,91];var AWD=[
1152,91,1392,131];var AWE=[1152,131,1392,171];var AWF=[1152,171,1392,211];var AsX=[
0,240,240,280];var AHC=[10,0,240,40];var AHD=[190,0,230,40];var AWG=[60,3,95,39];
var AWH=[95,4,200,40];var AWI=[3,3];var AWJ=[6,6];var AWK=[59,5,197,35];var AWL=[
59,2,200,38];var AWM=[3,2,43,42];var AWN=[0,17,43,40];var AWO=[50,40];var AWP=[50
,0];var AWQ="Illegal shifting direction";var Ayc=[0,0,160,30];var AHE=[0,0,25,30
];var AHF=[27,0,52,30];var AHG=[54,0,79,30];var AHH=[81,0,106,30];var AHI=[108,0
,133,30];var AHJ=[135,0,160,30];var AWR="Internal queue error";var AWS="ERROR: No corresponding Id ";
var AWT=" found.";var AWU="ERROR: Error in range test";var AWV=[120,67,210,157];
var AWW=[0,40,240,70];var AWX=[20,67,110,157];var Ayd=[0,160,240,280];var AHK=[20
,77,90,147];var AWY=[0,0,210,40];var AHL=[195,0,235,40];var AhX=[0,40,232,120];var
UV=[0,120,232,200];var AWZ=[0,40,232,200];var Aaa=[0,200,232,280];var AW0=[0,320
,240,400];var AW1=[0,120,53,200];var Ak$=[0,280,232,360];var Aab="%%";var AcL=[0
,360,232,440];var Aye=[0,440,232,520];var AW2=[0,80,207,120];var Oa=")";var AHM=
"/";var AW3=[5,0,88,30];var AHN=[88,0,240,30];var AW4="276000312345678";var AHO=[
5,30,100,60];var AHP=[100,30,240,60];var AW5="Manufacturer";var AW6="Country";var
AW7=[5,60,240,90];var AW8="Niedersachsen";var AW9=[5,90,145,120];var AW_=[140,90
,240,120];var AW$="Protocol";var AXa=[0,0,120,100];var AHQ=[0,40,116,120];var AXb=[
40,80,92,107];var AHR=[0,0,50,23];var AHS="ERROR: Unhandled Device::MeasureState";
var Ayf=[0,120,240,280];var AXc=[178,159,248,203];var AXd=[10,145,170,225];var AXe=[
0,61,240,101];var AXf=[0,0,40,23];var AHT=[101,113,141,136];var AXg=[101,235,141
,258];var AXh=[69,288,101,313];var AXi=[0,40,240,200];var AsY=[0,200,240,280];var
AsZ=[0,280,240,360];var AHU="\u2264 ";var AXj=[0,80,94,160];var AXk=[94,80,184,160
];var AXl=[184,80,240,160];var AXm=[197,105,231,139];var AXn=[105,101,173,127];var
AXo=[7,101,75,127];var AXp=[94,125,184,151];var AXq=[2,125,92,151];var AHV=[0,70
,240,101];var AXr=[0,106,240,280];var Ayg=[30,40,240,70];var AHW=[0,40,30,70];var
AXs="\u278B";var AXt=[0,0,240,175];var AXu=[0,0,232,175];var AXv=[232,0,240,175];
var AXw="Text Here !";var AXx=[200,0,240,40];var AHX="1";var AHY="2";var AHZ="3";
var AH0="4";var Ayh=[0,360,232,400];var Ayi="ERROR: invalid item class.";var AH1=[
10,220,250,260];var AXy=[185,0,225,40];var AH2="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXz="ERROR: Received more actions than expected!";var AH3=", ";var AXA=
"ERROR: Cannot set action at position=";var AXB=". Current elements:";var AXC=", max elements:";
var AXD="17";var AXE=[0,0,58,58];var AXF=[0,0,60,60];var AXG=[30,0,58,20];var AXH=[
7,6,25,24];var AXI=[30,60,130,160];var AXJ=[0,0,28,20];var AXK=[4,3,40,24];var AXL=[
0,0,42,27];var Ayj=[0,0,17,17];var AXM="Unknown direction of counting enum value: ";
var AXN="Unknown id generation method enum value: ";var Ayk="Invalid animal id generation method: ";
var As0="Unhandled popup id";var UW="0";var As1=";";var AXO=[0,400,230,480];var AXP=[
5,120,235,200];var AXQ=[0,640,230,760];var AH4=[0,0,300,200];var AXR=[20,40,220,
80];var AH5=[20,80,220,280];var AXS=[140,0,188,40];var AXT="ERROR: Row containing birth weight could not be loaded";
var AXU=[0,440,230,520];var As2="ID";var AXV=[40,40,198,70];var AXW="Extra info: ";
var AH6=" -";var AXX=[0,0,230,120];var AXY=[0,0,230,40];var AXZ=[0,80,230,120];var
AX0="\xB0Brix";var AcM=[0,320,230,400];var AX1=[0,410,230,490];var AX2="ERROR: aNumberOfDays can not be < 0 ";
var AX3="{WEIGHTGAIN} ";var AX4="\xB1";var AH7="+";var AX5="{WEIGHTGAIN}";var AX6=
"{DAYS}";var AX7="ERROR: aString can not be null";var AX8=[166,70,240,114];var AX9=[
0,60,160,120];var AX_=[30,0,240,60];var AH8=[1,6,29,54];var AX$=[30,60,240,120];
var AYa="Con";var AYb=[70,50,170,70];var AH9="Unhandled Device::NaisIdValidationResult: ";
var AH_="Unhandled PopupId";var AYc=[110,123,230,248];var AYd=[5,0,250,40];var AYe=[
102,0,186,40];var AYf=[153,0,240,40];var Rm="-";var As3=[170,0,240,40];var AH$=[
220,0,320,30];var AIa=[200,20,300,50];var Aol=[180,0,180,40];var Aom=[170,0,170,
40];var Ayl="Untreated state";var AYg="ERROR: Animal id scanned in an unexpected state : ";
var AIb="ERROR: Null animal id scanned.";var AYh=[40,40,235,100];var AYi=[120,100
,210,190];var AYj=[20,100,110,190];var AYk=[0,40,40,100];var AYl="\u278A";var AYm=
"Action untreated";var AYn="ERROR: No corresponding ";var AYo=" action found!";var
AYp="Unhandled action: ";var AYq=[0,190,240,220];var AYr=[0,220,232,280];var AYs=[
5,190,235,270];var AYt=[232,60];var AYu=[0,2];var AYv=[58,58];var AYw="A";var AYx=[
56,0,156,40];var Aon=[156,0,240,40];var AIc=" 7 ";var AYy=[40,0,156,40];var AId=
"/-1/-2";var AIe=[72,0,144,40];var AcN="\n";var AIf="(";var AYz=[72,0,156,40];var
AIg="%y/%m";var AYA=[70,0,240,40];var Aym=[70,0,120,40];var AYB=[160,0,245,40];var
AYC="- ";var Ayn=" - ";var AYD="{parc}{clr3}";var AYE="{clr0}/^{clr2}";var AYF="{clr0}/^{clr1}";
var AIh=[0,0,85,40];var Aoo="?";var AIi=[0,0,120,140];var AYG=[0,0,116,40];var AIj=[
15,0,100,40];var Ayo=[110,0,200,40];var Ala=[0,0,34,34];var AIk=[129,0,157,40];var
Aop=[0,0,25,25];var AYH="\u2611";var AIl="\u2610";var AIm=[5,0,72,40];var AYI=[150
,0,240,40];var AYJ=[72,0,139,40];var AIn="Unvalid content class: ";var AYK=[0,320
,240,360];var AYL=[0,360,240,400];var AYM=[144,0,170,40];var AYN=[187,0,213,40];
var AYO=[207,10,233,50];var AYP=[247,20,273,60];var AYQ=[140,0,150,100];var AYR=[
165,0,175,100];var AYS=[185,0,195,100];var AYT=[205,0,215,100];var AYU=[211,0,233
,40];var AYV=[189,0,211,40];var AYW=[167,0,189,40];var Aoq=[145,0,167,40];var AIo=[
5,0,240,40];var Aac=[10,0,10,40];var AYX="= \u2211 ";var Ayp=[125,0,240,40];var AYY=[
130,0,170,40];var AYZ="\xD8 ";var AY0=[100,10,116,36];var AY1=[117,10,133,36];var
AIp=[135,10,151,36];var As4="Implement in derieved class";var As5=[0,80,240,240];
var As6=[0,120,232,160];var As7=[0,160,232,200];var As8=[0,200,232,240];var Ayq=[
0,240,232,280];var Aor=[0,320,232,360];var AY2=[-61,360,232,400];var AY3=[0,400,
32,440];var AY4=[0,100];var AY5=[0,40,240,240];var AY6=[0,50000];var AY7=[0,500];
var AY8=[0,0,240,105];var AY9=[0,105,240,210];var AY_=[0,40,240,81];var AY$=[0,81
,240,122];var AZa=[0,122,240,163];var AIq=[0,163,240,205];var AZb=[0,205,240,240
];var AIr=[0,200];var AZc=[0,40,240,73];var Ayr=[0,0,30,40];var AIs=[0,40,30,80];
var Ays=[60,40];var Ayt=[60,0];var AZd=[10,0,40,40];var AZe=[0,190,240,260];var AZf=[
0,130,240,190];var AIt=[40,40,200,130];var AZg=[90,230,170,253];var AZh=[80,190,
170,223];var AZi=[0,130,240,180];var AZj=[0,250,240,280];var AZk=[129,0,156,40];
var AZl=[72,0,100,40];var AZm=[100,0,129,40];var AZn=[78,8,103,33];var AIu=[0,0,
300,120];var AZo=[1,-1];var AZp=[20,40,240,120];var AZq=[20,0,240,40];var AZr=[0
,118,240,120];var AZs=[0,20,130,40];var Bp8=[130,20,240,40];var Bp9=[0,0,10,20];
var A$F="\u2191";var Bp_=[230,0,240,20];var AIv=[0,40,232,80];var Bp$=[0,80,232,
160];var Bqa=[0,160,230,240];var AIw=" p. p.";var AZt="Unknown animal type";var AZu=[
80,0,140,40];var Bqb=[50,0,172,40];var Bqc=[172,0,240,40];var Bqd=[0,90,240,92];
var A$G="Unhandled menu item";var A$H=[0,0,50,30];var As9=[0,0,30,30];var Bqe="No AnimalActionTemperatureScreen found!";
var Bqf="840003123456789";var Bqg=[40,0,230,40];var Bqh=[50,10,230,30];var AZv="No AnimalMultiInfoScreen found!";
var AIx=[0,0,25,40];var A$I="/^";var A$J="?/?";var Bqi=[100,4,180,40];var Bqj=[65
,0,99,40];var Bqk=[165,0,200,40];var A$K=[0,0,60,40];var A$L="9999/^9999";var Bql=
"Invalid index: ";var Bqm="Unknown AnimalIdGenerationMethod: ";var Bqn="Invalid gender: ";
var As_="Invalid input state: ";var Bqo="Unhandled AnimalIdGenerationMethod";var
Bqp=[42,35,67,75];var Bqq=[5,35,39,75];var Bqr=[70,40,228,70];var Bqs="Invalid direction for setting focus";
var AhY="Invalid index";var Bqt="Unvalid direction";var Bqu=[0,0,42,30];var A$M=[
22,0,42,30];var Bqv=[20,0,40,30];var Bqw=[0,0,158,30];var A$N=[32,0,62,30];var A$O=[
64,0,94,30];var A$P=[96,0,126,30];var Bqx=[128,0,158,30];var Bqy=" %% ";var Bqz=[
0,70,240,220];var BqA=[0,237,240,307];var A$Q="\n44 %% done";var BqB=[0,0,166,30
];var AIy=[0,0,12,30];var Ayu=[14,0,26,30];var AZw=[28,0,40,30];var AZx=[42,0,54
,30];var AZy=[56,0,68,30];var AZz=[70,0,82,30];var AZA=[84,0,96,30];var AZB=[98,
0,110,30];var A$R=[112,0,124,30];var AZC=[126,0,138,30];var BqC=[140,0,152,30];var
BqD=[154,0,166,30];var A$S=[20,0,46,30];var BqE="\u2642";var BqF="{fnt3}\u2642{fnt1}";
var BqG="\u2640";var BqH="{fnt3}\u2640{fnt1}";var BqI="{parc}";var BqJ=[30,30,210
,80];var BqK="Implement in derieved class!";var BqL=[60,4,226,34];var A$T=[30,4,
58,34];var A$U=[4,0,27,40];var BqM=[116,4,228,34];var BqN=[60,4,86,34];var BqO=[
88,4,114,34];var Aos="Implement in derived class!";var A$V="Implement in derived class.";
var BqP="Invalid nais id view: ";var BqQ=[0,35,240,75];var BqR=[0,0,110,30];var BqS=[
0,0,26,30];var BqT="100";var AZD="\n\n";var BqU=[240,240];var BqV=[0,240];var BqW=
"Unknown rated attribute: ";var BqX=[120,80,240,280];var BqY=[0,80,120,280];var AIz=
" %% (";var Ayv=" \xB1 ";var Ayw=" (n = ";var AZE=[0,80,232,120];var BqZ=[0,242,
232,282];var AZF=[0,280,232,320];var Bq0=[35,0,200,40];var Bq1=[1,0,31,40];var Bq2=[
32,40];var Bq3=[32,0];var Bq4=[3,0,83,40];var A$W=[180,0,240,40];var Bq5=[120,0,
180,40];var Bq6=[65,0,125,40];var Bq7=[0,0,120,200];var Bq8=[0,40,120,150];var A$X=[
15,160,60,190];var A$Y=[60,160,105,190];var Bq9=[0,65,240,135];var Bq_=[10,112,170
,192];var Bq$=[178,129,248,173];var Bra=[0,40,240,110];var Brb=[10,98,170,178];var
Brc=[178,112,248,156];var Brd=[85,190,160,265];var Bre=[89,194,155,260];var Brf=[
26,190,111,250];var Brg=[125,181,225,211];var Brh=[100,220,183,250];var Bri="38.7";
var Brj=[180,220,225,250];var Brk="\xB0C";var Brl=[0,99,240,178];var Brm=[100,280
,140,320];var Brn=[0,26,240,105];var A$Z=[30,40];var A$0=[30,0];var Bro=[149,0,200
,40];var Brp=[145,40];var Brq=[145,0];var Brr=[38,0,88,40];var AZG=[0,0,35,40];var
Brs=[0,0,50,40];var Brt=[40,0,200,40];var Bru=[95,0,145,40];var Brv=[65,5,223,35
];var AZH=[0,0,15,40];var Brw=[72,0,140,40];var A$1="\n(";var Brx="%y/%m/%d";var
Bry="%y ";var Brz=" %m ";var BrA=" %d ";var BrB="20";var BrC=[225,0,240,40];var BrD=[
0,400,232,440];var BrE=[0,440,232,480];var BrF=[0,480,232,520];var BrG=[0,520,232
,560];var BrH=[0,560,232,600];var BrI=[0,598,232,638];var BrJ=[5,0,215,40];var BrK=[
215,8,240,33];var BrL="Implement in dervied class.";var BrM="ERROR: Unhandled temperature unit: ";
var AIA="ERROR: Unhandled mass unit: ";var BrN=[-1,160,115,280];var BrO=[114,160
,230,280];var AZI=[116,40,232,160];var Ayx="Unknown weight class index: ";var BrP=
"< 35";var BrQ="35 - 40";var BrR="40 - 45";var BrS="45 - 50";var BrT="\u2265 50";
var BrU="< 80";var BrV="80 - 90";var BrW="90 - 100";var BrX="100 - 110";var BrY=
"\u2265 110";var A$2="Unknown mass unit";var BrZ=[143,0,193,40];var A$3=[192,0,240
,40];var Br0=[44,28,44,28];var Br1="0 %%";var Br2=[-1,40,115,160];var Br3=[117,40
,233,160];var Br4=[1,160,117,280];var Br5=[114,158,230,278];var Br6=[1,280,117,400
];var Br7=[30,0,155,40];var A$4="\u2620";var AZJ=[380,150,380,190];var A$5=[105,
0,155,50];var AZK=[190,1,240,41];var Br8=[72,0,108,40];var Br9=[108,0,180,40];var
Br_=[60,0,94,40];var Br$=[94,0,200,40];var Bsa="Scroll direction not supported.";
var Bsb=[44,0,207,40];var Bsc=[207,0,240,40];var Bsd="99";var Bse="Unknown birth type";
var Bsf=[44,0,189,40];var Bsg=[5,0,44,40];var Bsh=[44,0,240,40];var Bsi=[240,0,240
,40];var Bsj="\u25C9";var A$6="\u25CB";var Bsk=[75,4,215,34];var Bsl=[47,4,73,34
];var A$7=[17,4,45,34];var Bsm=[0,0,138,30];var Bsn=[47,4,215,34];var AZL="Unhandled MotherSelectionFilterMode: ";
var Bso="Read only!";var Bsp="actions array too small to hold all actions";var Bsq=[
120,40];var Bsr=[120,0];var Bss=[5,0,115,40];var Bst=[0,0,205,40];var Bsu=[59,4,
170,34];var Bsv=[59,1,173,37];var Bsw=[175,1,205,37];var Bsx=[0,0,37,40];var Bsy=[
115,98,205,188];var Bsz=[0,40,235,100];var BsA=[2,200,240,280];var BsB=" 01234";
var BsC=[0,0];var BsD=[33,63];var BsE=[25,56];var BsF="Unknown transponder image type: ";
var AIB=[0,0,82,82];var BsG=[0,0,81,26];var BsH=[105,120,195,210];var BsI=[10,140
,100,230];var A$8="Unhandled EartagNrAssignmentMode: ";var BsJ="Unhandled Gender";
var BsK=[10,35,35,75];var BsL=[44,40,202,70];var BsM=[204,35,232,75];var BsN="Unvalid FatoryResetScope";
var A$9=[0,120,240,200];var BsO=[144,0,192,40];var BsP=[144,0,240,40];var BsQ=[195
,0,245,50];var BsR=[120,0,120,40];var BsS=[140,0,240,30];var BsT=[30,0,232,40];var
BsU=[60,0,160,40];var BsV=[160,0,200,40];var BsW=[150,17,200,40];var BsX=[155,40
];var BsY=[155,0];var BsZ=[146,80,240,160];var Bs0=[56,80,146,160];var Bs1=[0,80
,56,160];var Bs2=[13,107,47,141];var Bs3=[74,109,104,139];var Bs4=[50,100,130,150
];var Bs5=[55,112,145,140];var Bs6=[146,112,236,140];var Bs7=[150,86,223,110];var
AIC=[0,40,240,120];var Bs8="Menu item for animal table field not found";var A$_=[
0,360,240,440];var Bs9=[0,440,240,520];var Bs_=[5,40,235,104];var Bs$=[120,108,226
,218];var Bta=[20,120,110,210];var Btb=[5,223,235,280];var Btc=[0,0,64,30];var Btd=[
44,0,64,30];var Bte=[185,5,225,35];var Btf=[170,5,234,35];var Btg="Unhandled number of digits";
var Bth=[0,0,126,30];var Bti=[22,5,149,35];var Btj=[149,0,232,40];var A$$=[5,20];
var Btk=[5,0];var Btl="Unhandled AnimalIdAutoGenerationMethod: ";var Btm=[4,440,
236,520];var Btn="Unhandled TransponderAssignmentIdChangeMethod: ";var Bto="\n";
var Btp="%";var Btq=[0,0,160,120];var Btr=[2,2,157,117];var Bts=[50,70];var Btt=[
50,50];var Btu=[0,0,168,40];var Btv=[168,0,240,40];var Btw=[0,47,232,77];var Btx=[
65,0,101,40];var Bty=[135,0,175,40];var Btz=[85,17,135,40];var BtA=[125,17,175,40
];var BtB=[40,0];var Baa=[0,40,230,280];var BtC="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtD="ERROR: Received more animal table fields than expected!";
var BtE=[0,80,240,130];var BtF=[0,80,240,200];var Bab="Unhandled BackupError: ";
var BtG="Unhandled PopupId: ";var BtH=[203,0,240,40];var BtI=[168,0,203,40];var BtJ=[
35,0,152,40];var BtK=[0,0,84,40];var BtL=[84,0,167,40];var BtM="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMz={Device:null,A5A:null,GJ:null,Init:function(aArg){},DriveCursorHitting:function(
S_,BF,Fg){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GJ._Init.call(this.
GJ={I:this},0);this.__proto__=C.AMz;this.H(Cc);this.J(this.GJ,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5A=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lv=
this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GJ._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GJ.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5A)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4J._variants();
},K:null,_className:"Application::Application"};C.Aso=[240,320];C.AB={Background:
null,Ej:null,AC3:null,AnY:0,Init:function(aArg){A.pe([this,this.A0i],this);A.pe([
this,this.Bei],this);},LN:function(G){},A0i:function(s){this.LN(s);},CC:function(
G){},AID:function(s){this.CC(s);},E4:function(G){},Ayy:function(s){this.E4(s);},
Dq:function(E){if(this.AC3===E)return;this.AC3=E;A.pe([this,this.Bei],this);},Bei:
function(G){var B;if(!!this.AC3)this.Ej.AbY((C.BQ.isPrototypeOf(B=A._NewObject(this.
AC3,0))?B:null));else this.Ej.AbY(null);},_Init:function(aArg){C.Abd._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CS);this.Ej.H(BD);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abd;this.
Background._Done();this.Ej._Done();C.Abd._Done.call(this);},_ReInit:function(){C.
Abd._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abd._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WE={KG:null,Zj:function(E){var B;if(this.KG===E)return;if(!!this.KG)this.Aqy(
this.KG,null,null,null,[B=this.KG,B.Ayy],null,false);this.KG=E;if(!!this.KG)this.
AkF(this.KG,null,null,null,null,null,null,[B=this.KG,B.AID],null,false);},AEm:function(
){return this.KG;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WE;this.H([0,0,C.Aso[0],C.Aso[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KG)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ow={U3:null,Q:null,AnD:null,Zw:null,NO:null,Ou:null,Tz:null,TA:null,AF6:255,
Kd:function(G){var F;if(!!this.Q){this.A1O();var Ac6=(F=this.Q,F[1].call(F[0]));
if(Ac6>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gi);this.Ou.L((this.Ou.AQ&0x00FFFFFF
)|(this.AlB(Ac6,0,30)<<24));this.Tz.L((this.Tz.AQ&0x00FFFFFF)|(this.AlB(Ac6,31,60
)<<24));this.TA.L((this.TA.AQ&0x00FFFFFF)|(this.AlB(Ac6,61,100)<<24));}},A0g:function(
s){this.Kd(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0g],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0g],E,0);if(!!E)A.pe([this,
this.A0g],this);},A22:function(G){var F;if(!!this.AnD)this.Zw.Ar((F=this.AnD,F[1
].call(F[0])));else this.Zw.Ar(false);this.A9X(255);},A9Q:function(E){if(A.aaZ(this.
AnD,E))return;if(!!this.AnD)A.z$([this,this.A22],this.AnD,0);this.AnD=E;if(!!E)A.
zX([this,this.A22],E,0);if(!!E)A.pe([this,this.A22],this);},A9X:function(E){if(this.
AF6===E)return;this.AF6=E;if(!!this.U3)this.U3.L((this.U3.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlB:function(A0m,Bbx,BwS){if(A0m<Bbx)return 0;else if((A0m>=Bbx)&&(A0m<
BwS))return this.AF6&0xFF;else return 255;},A1O:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U3=this.TA;else if((F=this.Q,F[1].call(F[0]))>
30)this.U3=this.Tz;else this.U3=this.Ou;}else this.U3=null;},Bkz:function(){return this.
AF6;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.Zw._Init.call(this.Zw={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AK._Init.call(this.Ou={
I:this},0);A.acg.AK._Init.call(this.Tz={I:this},0);A.acg.AK._Init.call(this.TA={
I:this},0);this.__proto__=C.Ow;this.H(E6);this.Zw.Fp(2000);this.NO.H(E6);this.NO.
L(A.jb.Text);this.Ou.H(Hp);this.Ou.L(A.jb.E1);this.Tz.H(IS);this.Tz.L(A.jb.E1);this.
TA.H(Ir);this.TA.L(A.jb.E1);this.J(this.NO,0);this.J(this.Ou,0);this.J(this.Tz,0
);this.J(this.TA,0);this.Zw.Q=[this,this.Bkz,this.A9X];this.NO.Aw(A.aaL(A.ach.AMK
));},_Done:function(){this.__proto__=A.Core.P;this.Zw._Done();this.NO._Done();this.
Ou._Done();this.Tz._Done();this.TA._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Zw._ReInit();this.NO._ReInit();this.Ou._ReInit(
);this.Tz._ReInit();this.TA._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnD)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zw={_Init:function(aArg){A.acl.Gl._Init.call(
this,aArg);this.__proto__=C.Zw;this.AkR=true;this.B2=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GJ:null,AR:null,Background:null,Ow:null,Bo:
null,Dm:null,K6:0,Ava:0,Avb:0,AoV:0,LF:false,KD:false,Qp:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hd){this.AoV=A.jb.CS;this.K6=A.jb.Text;}else if(GE){this.AoV=
this.Ava;this.K6=this.Avb;}else if(Fu){this.AoV=this.Ava;this.K6=this.Avb;}else{
this.AoV=A.jb.CS;this.K6=A.jb.Text;}this.Background.L(this.AoV);if(!!this.GJ){this.
GJ.Wv(this.AoV);this.GJ.De(this.K6);}this.LF=Hd;this.KD=Fu;this.Qp=GE;},Qo:function(
G){this.Am();A.pe(this.AR,this);},AiL:function(G){if(this.Dm.Acc)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},AbY:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HN(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.Am();},A9z:function(E){if(this.Ava===E)return;this.
Ava=E;this.Am();},A9A:function(E){if(this.Avb===E)return;this.Avb=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.Ow._Init.call(this.Ow={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Dm={I:this},0);this.__proto__=C.Ej;var B;this.
H(BD);this.Background.AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.CS);
this.Ow.H(O1);this.K6=A.jb.Text;this.Bo.PP(0);this.Bo.Ww(50);this.Dm.Filter=1;this.
Ava=A.jb.AV;this.Avb=A.jb.Bm;this.AoV=A.jb.Text;this.J(this.Background,0);this.J(
this.Ow,0);this.Ow.At([B=A._GetAutoObject(A.Device.Device),B.Av0,B.AyA]);this.Ow.
A9Q([B=A._GetAutoObject(A.Device.Device),B.Av3,B.AyB]);this.Bo.Mz=[this,this.Qo];
this.Dm.BL=[this,this.AiL];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ow._Done();this.Bo._Done();this.Dm._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ow._ReInit();this.Bo._ReInit();this.Dm._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XV={AeI:null,Ux:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Text._Init.call(this.Ux={I:
this},0);this.__proto__=C.XV;this.AeI.H(P3);this.Ux.H(P4);this.Ux.R(A.jV);this.Ux.
L(A.jb.Text);this.Ux.Z(false);this.J(this.AeI,0);this.J(this.Ux,0);this.AeI.Aw(null
);this.Ux.S(A.aaL(A.fl.EK));var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeI._Done();this.Ux._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeI._ReInit();this.Ux._ReInit();this.Ux.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ux)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
XV._variants();},K:null,_className:"Application::BootScreen"};C.AUB={AAw:function(
G){A._GetAutoObject(C.A$).Ahr(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUB;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avn={DY:null,Y:null,X7:null,X8:null,VD:null,XY:null
,VE:null,XW:null,X1:null,TE:null,X0:null,X9:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Aro,B.As$],0);A._GetAutoObject(A.Device.Helper).AkJ();this.Bb(this.VD);this.
N.Cv(A.aaL(A.ach.ADy));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2B=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2B)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJR=A._NewObject(A.acl.AF3,0);AJR.Fp(250);AJR.HM(1);AJR.Wy(6);this.
Y.HH(this.AV,true,AJR,null);}},CC:function(G){this.A35(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkJ();A._GetAutoObject(A.Device.Helper).Asi();},Fj:function(G){
var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.
Ay.Mx(-this.Y.Br[1]);},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VD)A._GetAutoObject(C.A$).Cf(35);else if(Cx===this.XY)A._GetAutoObject(
C.A$).Cf(34);else if(Cx===this.X1)A._GetAutoObject(C.A$).Cf(69);else if(Cx===this.
VE)A._GetAutoObject(C.A$).Cf(8);else if(Cx===this.XW)A._GetAutoObject(C.A$).Cf(50
);else if(Cx===this.TE)A._GetAutoObject(C.A$).Cf(25);else if(Cx===this.X7)A._GetAutoObject(
C.A$).Cf(77);else if(Cx===this.X8)A._GetAutoObject(C.A$).Cf(70);else if(Cx===this.
X9)A._GetAutoObject(C.A$).Cf(6);else if(Cx===this.X0)A._GetAutoObject(C.A$).Cf(63
);},Bz1:function(G){A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.
Device).AmJ);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmJ)this.N.Hx((
A.aaR(A.acf.A67)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hx((A.aaR(A.acf.
A67)+CQ)+A.aaR(A.acf.A7M).toLowerCase());},Adq:function(G){A._GetAutoObject(A.Device.
Device).Dv(1);},A35:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mq());this.VE.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fm._Init.call(this.X7={I:this
},0);C.Fm._Init.call(this.X8={I:this},0);C.Fm._Init.call(this.VD={I:this},0);C.Fm.
_Init.call(this.XY={I:this},0);C.QT._Init.call(this.VE={I:this},0);C.Fm._Init.call(
this.XW={I:this},0);C.Fm._Init.call(this.X1={I:this},0);C.Fm._Init.call(this.TE={
I:this},0);C.Fm._Init.call(this.X0={I:this},0);C.Fm._Init.call(this.X9={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avn;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dq(C.AqT);this.DY.AZ(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CJ);this.Y.H(L1);this.Y.JQ(9);this.X7.H(P5);this.X7.Aj(true);
this.X7.T(A.aaR(A.acf.Gq));this.X8.H(J0);this.X8.Aj(true);this.X8.T(A.aaR(A.acf.
A7s));this.VD.H(N_);this.VD.Aj(true);this.VD.T(A.aaR(A.acf.Vq));this.XY.H(P6);this.
XY.Aj(true);this.XY.T(A.aaR(A.acf.Ts));this.VE.H(MG);this.VE.Aj(true);this.VE.T(
A.aaR(A.acf.APA));this.XW.H(S6);this.XW.Aj(true);this.XW.T(A.aaR(A.acf.Animal));
this.X1.H(J0);this.X1.Aj(true);this.X1.T(A.aaR(A.acf.A6_));this.TE.H(UN);this.TE.
Ar(true);this.TE.Aj(true);this.TE.Z(true);this.TE.T(A.aaR(A.acf.A5V));this.X0.H(
Z0);this.X0.Aj(true);this.X0.T(A.aaR(A.acf.Device));this.X9.H(WY);this.X9.Aj(true
);this.X9.T(A.aaR(A.acf.Settings));this.Ay.H(Is);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.X7,0);this.J(this.X8,0);this.J(this.VD,0);this.J(this.XY,0);this.
J(this.VE,0);this.J(this.XW,0);this.J(this.X1,0);this.J(this.TE,0);this.J(this.X0
,0);this.J(this.X9,0);this.J(this.Ay,0);this.N.CE=[this,this.Bz1];this.N.Ck=[this
,this.Adq];this.Y.El=[this,this.Fj];this.X7.AR=[this,this.Ig];this.X7.DB(A.aaL(A.
ach.ADC));this.X8.AR=[this,this.Ig];this.X8.DB(A.aaL(A.ach.ADF));this.VD.AR=[this
,this.Ig];this.VD.DB(A.aaL(A.ach.APE));this.XY.AR=[this,this.Ig];this.XY.DB(A.aaL(
A.ach.APP));this.VE.AR=[this,this.Ig];this.VE.DB(A.aaL(A.ach.AQb));this.XW.AR=[this
,this.Ig];this.XW.DB(A.aaL(A.ach.APH));this.X1.AR=[this,this.Ig];this.X1.DB(A.aaL(
A.ach.AQi));this.TE.AR=[this,this.Ig];this.TE.DB(A.aaL(A.ach.AP2));this.X0.AR=[this
,this.Ig];this.X0.DB(A.aaL(A.ach.APZ));this.X9.AR=[this,this.Ig];this.X9.DB(A.aaL(
A.ach.AQA));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.X7._Done();this.X8._Done();this.VD._Done();this.XY._Done();
this.VE._Done();this.XW._Done();this.X1._Done();this.TE._Done();this.X0._Done();
this.X9._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.X7._ReInit();this.X8.
_ReInit();this.VD._ReInit();this.XY._ReInit();this.VE._ReInit();this.XW._ReInit(
);this.X1._ReInit();this.TE._ReInit();this.X0._ReInit();this.X9._ReInit();this.Ay.
_ReInit();this.X7.T(A.aaR(A.acf.Gq));this.X8.T(A.aaR(A.acf.A7s));this.VD.T(A.aaR(
A.acf.Vq));this.XY.T(A.aaR(A.acf.Ts));this.VE.T(A.aaR(A.acf.APA));this.XW.T(A.aaR(
A.acf.Animal));this.X1.T(A.aaR(A.acf.A6_));this.TE.T(A.aaR(A.acf.A5V));this.X0.T(
A.aaR(A.acf.Device));this.X9.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q8={Number:null,Je:null,IR:null,Tx:null,AsE:0,Init:function(aArg){var B;A.zX([
this,this.Bba],[B=A._GetAutoObject(A.Device.Device),B.ASu,B.AZY],0);A.pe([this,this.
Bba],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnZ();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhG();},E4:function(G){A._GetAutoObject(A.Device.
Device).AnR();},AlX:function(G){var F;this.Am();this.Tx.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aei.Ar(true);if(!this.Tx.Bw)(F=this.Tx.Q,F[2].call(F[0],this.Tx.
B2));},Bba:function(s){this.AlX(s);},AnZ:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gi);break;case 3:this.Background.
L(A.jb.H8);break;default:this.Background.L(A.jb.CJ);}},Akz:function(E){if(this.AsE===
E)return;this.AsE=E;this.Je.Akz(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Je._Init.call(this.Je={I:this}
,0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acl.Gl._Init.call(this.Tx={I:this}
,0);this.__proto__=C.Q8;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UO);this.Number.KQ(true);this.Number.L(A.jb.Text);this.Je.H(Z1);this.Je.Akz(0);
this.IR.H(WZ);this.IR.L(A.jb.AV);this.IR.Zl(true);this.Tx.Fp(1750);this.Tx.Ui(750
);this.Tx.Aku(0);this.Tx.Ar(true);this.Tx.B2=3;this.J(this.Number,0);this.J(this.
Je,0);this.J(this.IR,0);this.Number.S(A.aaL(A.fl.Af));this.IR.Aw(A.aaL(A.ach.ADE
));this.Tx.Q=[B=this.IR,B.ASh,B.Cu];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Je._Done();this.IR._Done();this.Tx._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Je._ReInit();this.IR._ReInit();this.Tx._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fm={C8:null,ADo:null,AR:null,Bo:null,Dm:null,Background:
null,Mp:null,OB:null,QZ:null,G8:null,A4_:true,LF:false,KD:false,Qp:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hg.Bl.call(this,aSize);this.Mp.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QZ.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OB.H(this.QZ.M);this.G8.H([].concat(0,this.G8.M.slice(1,4)));this.G8.H(A.abN(
this.G8.M,aSize[0]));this.G8.H(A.abP(this.G8.M,0));this.G8.H([].concat(this.G8.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hg.Ai.call(this,Ae);var Hd=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hd){this.QZ.L(A.jb.AmW);this.
G8.L(A.jb.CJ);this.OB.Z(true);this.OB.L(A.jb.AQN);this.Mp.Z(false);}else if(GE){
this.QZ.L(A.jb.Bm);this.G8.L(A.jb.Bm);this.OB.Z(false);this.Mp.Z(true);}else if(
Fu){this.QZ.L(A.jb.Bm);this.G8.L(A.jb.Bm);this.OB.Z(false);this.Mp.Z(true);}else{
this.QZ.L(A.jb.Text);this.G8.L(A.jb.Text);this.OB.Z(true);this.OB.L(A.jb.CS);this.
Mp.Z(false);}this.LF=Hd;this.KD=Fu;this.Qp=GE;},Qo:function(G){this.Am();A.pe(this.
AR,this);},AiL:function(G){if(this.Dm.Acc)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G8.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QZ.
Aw(E);this.OB.Aw(E);},AbX:function(E){if(this.A4_===E)return;this.A4_=E;this.G8.
Z(E);},Ab0:function(E){if(this.ADo===E)return;this.ADo=E;this.Mp.Aw(E);this.Mp.H(
A.abK(this.Mp.M,E.FrameSize));},_Init:function(aArg){C.Hg._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dm={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mp={
I:this},0);A.acg.Ap._Init.call(this.OB={I:this},0);A.acg.Ap._Init.call(this.QZ={
I:this},0);C.CH._Init.call(this.G8={I:this},0);this.__proto__=C.Fm;this.H(Z2);this.
Bo.PP(0);this.Bo.Ww(50);this.Dm.Filter=1;this.Background.H(W0);this.Background.Z(
false);this.Mp.AZ(0x14);this.Mp.L(A.jb.AV);this.Mp.Cu(0);this.OB.L(A.jb.CS);this.
OB.Cu(1);this.G8.H(Z3);this.J(this.Background,0);this.J(this.Mp,0);this.J(this.OB
,0);this.J(this.QZ,0);this.J(this.G8,0);this.Bo.Mz=[this,this.Qo];this.Dm.BL=[this
,this.AiL];this.Mp.Aw(A.aaL(A.ach.NS));this.OB.Aw(A.aaL(A.ach.AvA));this.QZ.Aw(A.
aaL(A.ach.AvA));this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(
A.aaL(A.fl.Bi));this.ADo=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hg;this.Bo._Done();this.Dm._Done();this.Background._Done();this.Mp._Done(
);this.OB._Done();this.QZ._Done();this.G8._Done();C.Hg._Done.call(this);},_ReInit:
function(){C.Hg._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit();this.Background.
_ReInit();this.Mp._ReInit();this.OB._ReInit();this.QZ._ReInit();this.G8._ReInit(
);this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(A.aaL(A.fl.Bi)
);},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Aw_:null,Background:null,OX:null,Ar$:0,Ak2:10,Ajy:100,AQ:0,AoO:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OX.H([].concat(2,this.OX.M.slice(1,4)));this.OX.H(A.abN(this.OX.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af1=this.Ak2<this.Ajy;var AJq=(
B=this.M)[3]-B[1];var A2o=10;var Aug=AJq;var A32=0;if(10>AJq)A2o=AJq;if(this.Ak2<
this.Ajy)Aug=((Aug*this.Ak2)/this.Ajy)|0;if(Aug<A2o)Aug=A2o;if(this.Ak2<this.Ajy
)A32=((this.Bky()*(AJq-Aug))/(this.Ajy-this.Ak2))|0;this.OX.H(A.abP(this.OX.M,A32
));this.OX.H([].concat(this.OX.M.slice(0,3),A32+Aug));this.OX.Z(Af1);this.Background.
Z(Af1);if(!!this.Aw_&&(this.AoO!==Af1))A.pe(this.Aw_,this);this.AoO=Af1;},Bky:function(
){var E=this.Ar$;var HC=this.Ajy-this.Ak2;if((HC>0)&&(E>HC))E=HC;if(HC<=0)E=0;return E;
},Mx:function(E){if(E<0)E=0;if(this.Ar$===E)return;this.Ar$=E;this.Am();},My:function(
E){if(E<0)E=0;if(this.Ak2===E)return;this.Ak2=E;this.Am();},Mw:function(E){if(E<
0)E=0;if(this.Ajy===E)return;this.Ajy=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OX.L(E);},BmE:function(E){if(A.aa0(this.Aw_,E))return;this.
Aw_=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.OX={I:this},0);this.__proto__=
C.Ay;this.H(Z4);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UP);this.Background.L(A.jb.CS);this.OX.AZ(0x0);this.OX.H(UP);this.OX.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OX,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OX._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Aw_)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cd={Hh:null,Y:null,Ay:null,Ap:null,A6A:A.jV,Init:function(aArg){A.pe([this,this.
AA4],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);this.AA4(this);},AlT:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApF:function(G){if(!!this.N.Co
)A.pe(this.N.Co,this);},AAw:function(G){if(!!this.N.Ck)A.pe(this.N.Ck,this);},Fj:
function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[
3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);A.pe([this,this.BAl],this);},AA4:function(G){
var B;var GX=(C.Cn.isPrototypeOf(B=this.AV)?B:null);this.N.Hx(A.jV);this.N.C1(A.
aaL(A.ach.Yt));this.N.CE=[this,this.Ev];if(!!GX&&!!GX.Ami){this.N.FN(A.jV);this.
N.Jx.Dj(255);this.N.ArH(GX.AqJ);this.N.Cv(GX.Avx);this.N.Ck=GX.Ami;}else{this.N.
FN(A.jV);this.N.Cv(null);this.N.Ck=null;}if(!!GX&&!!GX.Agq){this.N.CX(GX.AxD);this.
N.HQ.Dj(GX.Aw$);this.N.Anr(GX.AmL);this.N.C5(GX.Aq0);this.N.Co=GX.Agq;}else{this.
N.CX(A.jV);this.N.C5(null);this.N.Co=null;}},I_:function(E){if(this.A6A===E)return;
this.A6A=E;this.Hh.R(E);},Ev:function(G){A._GetAutoObject(C.A$).Fy();},BAl:function(
G){var B;var Bzi=this.Ay.Background.Fo();var Bdk=(Bzi?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ai$=X;
X=X.Ah;if(((Ai$.U&0x400)===0x400)){if(!!(A.Core.Aka.isPrototypeOf(Ai$)?Ai$:null)
){var Bdq=(A.Core.Aka.isPrototypeOf(Ai$)?Ai$:null);Bdq.DC([Bdk,Bdq.EC[1]]);}else
if(!!(A.Core.Et.isPrototypeOf(Ai$)?Ai$:null)){var Bfl=(A.Core.Et.isPrototypeOf(Ai$
)?Ai$:null);Bfl.H(A.abN(Bfl.M,Bdk));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hh={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cd;this.N.Z(true);this.Hh.H(W1);this.Hh.Ar(false);this.Hh.R(A.aaR(A.
acf.Settings));this.Hh.L(A.jb.Text);this.Y.H(Fe);this.Y.JQ(1);this.Ay.H(Is);this.
Ap.H(P7);this.Ap.L(A.jb.Text);this.J(this.Hh,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));this.Y.
El=[this,this.Fj];this.Ap.Aw(A.aaL(A.ach.AC7));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hh._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hh._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hh.R(A.aaR(A.acf.Settings
));this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqT={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgg],[B=
A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},De:function(E){C.BQ.De.call(this
,E);this.Text.L(E);},Bgg:function(G){this.Text.R(A._GetAutoObject(A.acj.KJ).Bh_(
A._GetAutoObject(A.Device.Helper).Du()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqT;this.Timer.Ww(1);this.Timer.Ar(true);
this.Text.H(Z5);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mz=[this,this.Bgg
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BQ;this.Timer._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BQ={KR:0xFFFFFFFF,LQ:0,De:function(E){if(
this.KR===E)return;this.KR=E;},Wv:function(E){if(this.LQ===E)return;this.LQ=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BQ;this.H(O2
);},_className:"Application::HeaderContent"};C.N={VQ:null,VS:null,VT:null,AgY:null
,AgZ:null,Ag0:null,CE:null,Ck:null,Co:null,Background:null,NG:null,Jc:null,Jx:null
,HQ:null,Pw:null,I6:null,Lc:null,TT:null,TU:null,AnT:A.jV,AnU:A.jV,AnV:A.jV,Aq1:
0,Aq2:0,Aq3:0,Ahf:0,Zz:false,Zy:false,Asf:false,Asu:false,Ast:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VQ)this.Jc.S(this.VQ);if(!!this.VS)this.Jx.S(this.
VS);if(!!this.VT)this.HQ.S(this.VT);switch(this.Ahf){case 0:{this.NG.Z(false);this.
Jc.L(A.jb.Bm);this.Jx.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pw.L(A.jb.Bm);this.I6.L(
A.jb.Bm);this.Lc.L(A.jb.Bm);}break;case 1:{if(!this.AgY)this.NG.H(A.aaT(this.Jc.
AR$(),Rj));else this.NG.H(this.Pw.Db());this.NG.Z(true);this.Jc.L(A.jb.Text);this.
Jx.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pw.L(A.jb.Text);this.I6.L(A.jb.Bm);this.Lc.
L(A.jb.Bm);}break;case 3:{if(!this.Ag0)this.NG.H(A.aaT(this.HQ.AR$(),Rj));else this.
NG.H(this.Lc.Db());this.NG.Z(true);this.Jc.L(A.jb.Bm);this.Jx.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Pw.L(A.jb.Bm);this.I6.L(A.jb.Bm);this.Lc.L(A.jb.Text);}break;case
2:{if(!this.AgZ)this.NG.H(A.aaT(this.Jx.AR$(),Rj));else this.NG.H(this.I6.Db());
this.NG.Z(true);this.Jc.L(A.jb.Bm);this.Jx.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Pw.L(A.jb.Bm);this.I6.L(A.jb.Text);this.Lc.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W2);}}if(!!this.Pw.Al){this.Pw.Z(true);this.Jc.Z(false);}else{
this.Pw.Z(false);this.Jc.Z(true);}if(this.AnU.length<=0){this.I6.Z(true);this.Jx.
Z(false);}else{this.I6.Z(false);this.Jx.Z(true);}if(!!this.Lc.Al){this.Lc.Z(true
);this.HQ.Z(false);}else{this.Lc.Z(false);this.HQ.Z(true);}},Hx:function(E){if(this.
AnT===E)return;this.AnT=E;this.Jc.R(E);this.Am();},FN:function(E){if(this.AnU===
E)return;this.AnU=E;this.Jx.R(E);this.Am();},CX:function(E){if(this.AnV===E)return;
this.AnV=E;this.HQ.R(E);this.Am();},AE$:function(E){if(this.Ahf===E)return;this.
Ahf=E;this.Am();},AE2:function(E){if(this.VQ===E)return;this.VQ=E;this.Jc.S(E);this.
Am();},ArH:function(E){if(this.VS===E)return;this.VS=E;this.Jx.S(E);this.Am();},
Anr:function(E){if(this.VT===E)return;this.VT=E;this.HQ.S(E);this.Am();},A3f:function(
G){this.Am();},C1:function(E){if(this.AgY===E)return;this.AgY=E;this.Pw.Aw(E);this.
Am();},Cv:function(E){if(this.AgZ===E)return;this.AgZ=E;this.I6.Aw(E);this.Am();
},C5:function(E){if(this.Ag0===E)return;this.Ag0=E;this.Lc.Aw(E);this.Am();},ON:
function(E){if(this.Ast===E)return;this.Ast=E;this.TT.Z(E);if(E)this.Jc.H([].concat(
this.TT.M[2],this.Jc.M.slice(1,4)));else this.Jc.H([].concat(0,this.Jc.M.slice(1
,4)));this.Am();},OO:function(E){if(this.Asu===E)return;this.Asu=E;this.TU.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TU.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.Am();},Bl2:function(E){if(this.Aq1===E)return;this.Aq1=E;this.Pw.Cu(
E);this.Am();},ASW:function(E){if(this.Aq2===E)return;this.Aq2=E;this.I6.Cu(E);this.
Am();},A9E:function(E){if(this.Aq3===E)return;this.Aq3=E;this.Lc.Cu(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Jc={I:this
},0);C.CH._Init.call(this.Jx={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I6={I:this},0);A.acg.
Ap._Init.call(this.Lc={I:this},0);A.acg.Ap._Init.call(this.TT={I:this},0);A.acg.
Ap._Init.call(this.TU={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.Ad7);this.NG.H(W3);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Jc.AZ(0x14);this.Jc.H(W4);this.Jc.A5(0x12);this.
Jx.AZ(0x14);this.Jx.H(W5);this.Jx.A5(0x12);this.HQ.H(Z6);this.Pw.H(W6);this.I6.H(
W7);this.Lc.H(S7);this.Lc.Z(false);this.TT.H(UQ);this.TT.Z(false);this.TU.H(UR);
this.TU.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Jc,0);this.
J(this.Jx,0);this.J(this.HQ,0);this.J(this.Pw,0);this.J(this.I6,0);this.J(this.Lc
,0);this.J(this.TT,0);this.J(this.TU,0);this.Jc.S(A.aaL(A.fl.Ak));this.Jc.A2(A.aaL(
A.fl.Bi));this.Jc.Q3([this,this.A3f]);this.Jx.S(A.aaL(A.fl.Ak));this.Jx.A2(A.aaL(
A.fl.Bi));this.Jx.Q3([this,this.A3f]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bi));this.HQ.Q3([this,this.A3f]);this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.
Ak);this.VT=A.aaL(A.fl.Ak);this.Pw.Aw(null);this.I6.Aw(null);this.Lc.Aw(null);this.
TT.Aw(A.aaL(A.ach.AMC));this.TU.Aw(A.aaL(A.ach.Ajm));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Jc._Done(
);this.Jx._Done();this.HQ._Done();this.Pw._Done();this.I6._Done();this.Lc._Done(
);this.TT._Done();this.TU._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Jc.
_ReInit();this.Jx._ReInit();this.HQ._ReInit();this.Pw._ReInit();this.I6._ReInit(
);this.Lc._ReInit();this.TT._ReInit();this.TU._ReInit();this.Jc.S(A.aaL(A.fl.Ak)
);this.Jc.A2(A.aaL(A.fl.Bi));this.Jx.S(A.aaL(A.fl.Ak));this.Jx.A2(A.aaL(A.fl.Bi)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bi));this.AE2(A.aaL(A.fl.Ak));
this.ArH(A.aaL(A.fl.Ak));this.Anr(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Co)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.AC$={Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper),B.Arq,B.Aky],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper)
,B.A8D,B.AFx],0);A.pe([this,this.Nm],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhC)this.AbZ(A._GetAutoObject(A.Device.Helper).AhC.AOK());else this.
AbZ(-1);if(!!A._GetAutoObject(A.Device.Helper).Uu)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak0(A._GetAutoObject(A.Device.Helper).Uu.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmR._Init.call(this,aArg);this.__proto__=C.AC$;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGM={Ex:null,Eh:null,
FX:null,XU:null,Ty:null,IF:null,IG:null,Init:function(aArg){},WC:function(G){var
B;C.DR.WC.call(this,G);var AKE=this.Azj(A._GetAutoObject(A.Device.Helper).UA.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALt=this.Azj(A._GetAutoObject(
A.Device.Helper).UB.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var By_=
this.Azj(A._GetAutoObject(A.Device.Device).AcA);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKE));this.IG.H(A.abO(this.
IG.M,this.Ex.M[3]-((((B=this.IG.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALt));this.
IF.H(A.abO(this.IF.M,(this.Eh.M[3]-((((B=this.IF.M)[3]-B[1])/2)|0))+2));this.FX.
H(A.abP(this.FX.M,this.Eh.M[3]));this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.
M)[3]-B[1])-By_));this.Ty.H(A.abO(this.Ty.M,this.FX.M[3]-((((B=this.Ty.M)[3]-B[1
])/2)|0)));this.XU.H(A.abP(this.XU.M,this.FX.M[3]));this.XU.H([].concat(this.XU.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJC:function(AoK){return A._GetAutoObject(A.
Device.Converter).AkV(AoK);},AJ$:function(){return A._GetAutoObject(A.acj.Temperature
).AlC();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.
FX={I:this},0);A.acg.AK._Init.call(this.XU={I:this},0);A.acg.AK._Init.call(this.
Ty={I:this},0);A.acg.AK._Init.call(this.IF={I:this},0);A.acg.AK._Init.call(this.
IG={I:this},0);this.__proto__=C.AGM;this.Ex.AZ(0xD);this.Ex.H(AcH);this.Ex.L(A.jb.
Gi);this.Eh.AZ(0xD);this.Eh.H(S8);this.Eh.L(A.jb.H8);this.FX.AZ(0xD);this.FX.H(Z7
);this.FX.L(A.jb.E1);this.XU.AZ(0xD);this.XU.H(Afw);this.XU.L(A.jb.Afp);this.Ty.
AZ(0xD);this.Ty.H(Z8);this.Ty.Awm(A.jb.Afp);this.Ty.Awn(A.jb.Afp);this.Ty.Awp(A.
jb.E1);this.Ty.Awo(A.jb.E1);this.IF.AZ(0xD);this.IF.H(W8);this.IF.Awm(A.jb.E1);this.
IF.Awn(A.jb.E1);this.IF.Awp(A.jb.H8);this.IF.Awo(A.jb.H8);this.IG.AZ(0xD);this.IG.
H(Z9);this.IG.Awm(A.jb.H8);this.IG.Awn(A.jb.H8);this.IG.Awp(A.jb.Gi);this.IG.Awo(
A.jb.Gi);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FX,-1);this.J(this.XU
,-1);this.J(this.Ty,-1);this.J(this.IF,-1);this.J(this.IG,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FX._Done(
);this.XU._Done();this.Ty._Done();this.IF._Done();this.IG._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FX._ReInit();this.XU._ReInit();this.Ty._ReInit();this.IF._ReInit();this.IG.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cn={Avc:null,AmL:null,AP9:null,Aq0:null,AqJ:null,Avx:null,AR:null,Agq:null,Ami:
null,N:null,Bo:null,QP:null,AxD:A.jV,AUx:false,AGA:false,Apa:false,Aw$:255,LF:false
,KD:false,Qp:false,Ai:function(Ae){var B;C.OU.Ai.call(this,Ae);var Hd=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var IA=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FQ=
A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.
L(A.jb.CS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AmW);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW
);}this.LF=Hd;this.KD=Fu;this.Qp=GE;this.Apa=IA;},Qo:function(G){this.Am();A.pe(
this.AR,this);},Bv6:function(s){this.Qo(s);},IY:function(G){if(this.QP.Acc)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atb:function(s){this.IY(s);},AeR:function(E){if(A.aa0(this.Agq,E))return;this.
Agq=E;},A98:function(E){if(this.AxD===E)return;this.AxD=E;},Zo:function(E){if(this.
Avc===E)return;this.Avc=E;},Zp:function(E){if(this.AmL===E)return;this.AmL=E;},A9O:
function(E){if(this.Aw$===E)return;this.Aw$=E;},Gr:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALb();},A2O:
function(G){},BFS:function(s){this.A2O(s);},Akt:function(E){if(this.Aq0===E)return;
this.Aq0=E;},LX:function(E){if(A.aa0(this.Ami,E))return;this.Ami=E;},BlV:function(
E){if(this.AqJ===E)return;this.AqJ=E;},L0:function(E){if(this.Avx===E)return;this.
Avx=E;},Zt:function(E){if(this.AGA===E)return;this.AGA=E;this.ALb();},ALb:function(
){var B;var Qv=this.DK;if(this.AGA)Qv=Qv+A.aaR(A.acf.Colon);if(this.AUx)Qv=Qv+Z_;
this.V.R(Qv);},ATh:function(E){if(this.AUx===E)return;this.AUx=E;this.ALb();},_Init:
function(aArg){C.OU._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QP={I:this},0);this.__proto__=C.Cn;this.Bo.PP(0);
this.Bo.Ww(50);this.Bo.Ar(false);this.QP.Filter=1;this.Bo.Mz=[this,this.Bv6];this.
QP.BL=[this,this.Atb];this.Avc=A.aaL(A.fl.Ak);this.AmL=A.aaL(A.fl.Ak);this.AP9=A.
aaL(A.ach.E2);this.AqJ=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OU;this.
Bo._Done();this.QP._Done();C.OU._Done.call(this);},_ReInit:function(){C.OU._ReInit.
call(this);this.Bo._ReInit();this.QP._ReInit();this.Zo(A.aaL(A.fl.Ak));this.Zp(A.
aaL(A.fl.Ak));this.BlV(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.Avc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmL)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AP9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqJ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agq)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ami)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dr={Q:null,Am7:null,Am9:null,Hw:null,H4:null,AM:0,Gp:0,F$:100,FF:0,Init:function(
aArg){},IY:function(G){this.FF=1;C.Eg.IY.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hw.H([0,aSize[1]-40,40,aSize[1]]);this.H4.H([].concat(A.
abe(aSize,Afx),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fu=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hw.L(this.V.AQ);this.H4.L(this.V.AQ);this.Hw.
Z((Fu||GE)&&(this.AM>this.Gp));this.H4.Z((Fu||GE)&&(this.AM<this.F$));if(this.FF===
6)this.Hw.L(A.jb.E1);if(this.FF===7)this.H4.L(A.jb.E1);},Beu:function(G){this.FF=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyJ],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qo:function(G){if(this.FF===6)A.pe([this,this.AyJ],this);if(this.FF===
7)A.pe([this,this.AyK],this);if(this.FF===1)A.pe(this.AR,this);this.FF=0;this.Am(
);},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcQ:function(
s){this.C2(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcQ],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcQ],E,0);if(!!E)A.pe([this,
this.AcQ],this);},Bev:function(G){this.FF=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyK],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J$:function(G){this.FF=0;}
,AyK:function(s){this.J$(s);},J6:function(G){this.FF=0;},AyJ:function(s){this.J6(
s);},Bx:function(E){if(E<this.Gp)E=this.Gp;if(E>this.F$)E=this.F$;if(this.AM===E
)return;this.AM=E;this.Am();},BaD:function(Aq){this.Bx(Aq);},Ga:function(E){if(this.
Gp===E)return;this.Gp=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},Uc:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.Am7={I:this},0);A.Core.BK._Init.call(this.Am9={
I:this},0);A.acg.Ap._Init.call(this.Hw={I:this},0);A.acg.Ap._Init.call(this.H4={
I:this},0);this.__proto__=C.Dr;this.H(KX);this.Am7.Filter=6;this.Am9.Filter=7;this.
Background.H(KX);this.V.H(AcI);this.V.R(Lu);this.Hw.H(AhS);this.H4.H(An7);this.H4.
Cu(1);this.J(this.Hw,0);this.J(this.H4,0);this.Am7.BL=[this,this.Beu];this.Am7.D1=[
this,this.Beu];this.Am9.BL=[this,this.Bev];this.Am9.D1=[this,this.Bev];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(null);this.Hw.Aw(A.aaL(A.ach.
Ajn));this.H4.Aw(A.aaL(A.ach.Ajn));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Am7._Done();this.Am9._Done();this.Hw._Done();this.H4._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Am7._ReInit();this.
Am9._ReInit();this.Hw._ReInit();this.H4._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dt:function(){return-1;},C7:function(aIndex){return-1;},Gk:function(
aIndex){return A.jV;},DZ:function(A9){return-1;},H3:function(){return-1;},At:function(
E){this.Q=E;},B$:function(Aq){this.At(Aq);},ACP:function(aIndex){return null;},ACR:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iq={Axu:null
,BT:null,AGZ:A.jV,AVa:A.jV,AjY:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dr.Ai.call(this,Ae);if(!this.Axu){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVa);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AGZ);}}else(B=
this.Axu)?B[1].call(B[0],this):null;},J$:function(G){var F;var BO=this.AM;C.Dr.J$.
call(this,G);this.Bx(this.AM+this.AjY);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J6:function(G){var F;var BO=this.AM;C.
Dr.J6.call(this,G);this.Bx(this.AM-this.AjY);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IO:function(E){if(this.AGZ===E)return;
this.AGZ=E;this.Am();},I$:function(E){if(this.AVa===E)return;this.AVa=E;this.Am(
);},ASX:function(E){if(this.AjY===E)return;this.AjY=E;},A95:function(E){if(A.aa0(
this.Axu,E))return;this.Axu=E;},_Init:function(aArg){C.Dr._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Iq;this.H(KX);this.BT.H(N$);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dr;this.BT._Done();C.Dr._Done.call(this
);},_ReInit:function(){C.Dr._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dr._Mark.call(this
,D);if((B=this.Axu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dy:null,HL:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Dr.Bl.call(this,aSize);this.Dy.H([this.Hw.M[2]-10,this.Hw.M[1],this.
H4.M[0]+10,this.Hw.M[3]]);this.Dy.AFa((B=this.Dy.M)[2]-B[0]);this.Dy.HH(this.Dy.
Gs,true,null,null);},Ai:function(Ae){var B;C.Dr.Ai.call(this,Ae);var Fu=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dy.AbA(0,this.Dy.AY-1);this.Hw.Z(Fu||GE);this.H4.
Z(Fu||GE);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},J$:function(G){var F;var BO=this.AM;C.Dr.J$.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BO=this.AM;
C.Dr.J6.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var Qu=0;if(E<this.Gp){E=this.F$;Qu=-this.Dy.V9*this.Dy.AY;}if(E>this.F$){E=this.
Gp;Qu=this.Dy.V9;}C.Dr.Bx.call(this,E);if(!!Qu)this.Dy.Gb(Qu);this.Dy.GS(this.AM
);if(this.Dy.Bi5())this.Dy.Bot(false,false);this.Dy.HH(this.Dy.Gs,true,this.HL,null
);},Hk:function(G){var B;var Gf=this.Dy.G4;var Cz=(C.CH.isPrototypeOf(B=this.Dy.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.AwV(19);Cz.A2(this.V.AmK);Cz.BmO(19
);Cz.Ct(this.V.AqI);Cz.BmP(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gk(Gf));
else Cz.R(W9);Cz.H(A.abK(Cz.M,[this.Dy.V9,(B=this.Dy.M)[3]-B[1]]));},BvI:function(
s){this.Hk(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ga(0);this.EU(this.AC.Dt()-1);this.Dy.Jw(this.AC.Dt());this.Dy.AbA(0,this.Dy.AY-
1);}},_Init:function(aArg){C.Dr._Init.call(this,aArg);A.Core.Dy._Init.call(this.
Dy={I:this},0);A.acl.Gl._Init.call(this.HL={I:this},0);this.__proto__=C.BW;this.
H(KX);this.Dy.NZ(C.CH);this.HL.Wy(23);this.HL.HM(1);this.HL.Fp(200);this.J(this.
Dy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dy.Hk=[this,this.BvI
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dr;this.Dy._Done();this.HL.
_Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.
Dy._ReInit();this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SO={FI:null,OE:null,Dk:null,Au:null,Ju:null,HK:null,Pq:null,VO:null,QY:null,
Yf:null,P2:null,Gx:null,Gw:null,FY:0,A8:0,Asc:false,Bi1:false,Init:function(aArg
){},Ai:function(Ae){C.Dr.Ai.call(this,Ae);this.Hw.Z(false);this.H4.Z(false);var AtL=
A.jV;if(!!this.Dk){this.Pq.R(this.Au.Format(An8));this.QY.R(this.Au.Format(US));
this.P2.R(this.Au.Format(AhT));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.Pq.
M);this.HK.L(this.V.AQ);this.Pq.L(this.Background.AQ);this.QY.L(this.V.AQ);this.
P2.L(this.V.AQ);AtL=A.aaR(A.acf.A5r);}else if(this.A8===2){this.HK.Z(true);this.
HK.H(this.QY.M);this.HK.L(this.V.AQ);this.Pq.L(this.V.AQ);this.QY.L(this.Background.
AQ);this.P2.L(this.V.AQ);AtL=A.aaR(A.acf.Hi);}else if(this.A8===3){this.HK.Z(true
);this.HK.H(this.P2.M);this.HK.L(this.V.AQ);this.Pq.L(this.V.AQ);this.QY.L(this.
V.AQ);this.P2.L(this.Background.AQ);AtL=A.aaR(A.acf.Year);}else{this.HK.Z(false);
this.Pq.L(this.V.AQ);this.Yf.L(this.V.AQ);this.QY.L(this.V.AQ);this.VO.L(this.V.
AQ);this.P2.L(this.V.AQ);}if(AtL.length>0){if(this.AGA)this.V.R((((this.DK+AcJ)+
AtL)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcJ)+
AtL)+String.fromCharCode(0x29));}else this.ALb();},Qo:function(G){if(this.FF===1
)A.pe([this,this.U8],this);else if(this.FF===4)A.pe([this,this.AiB],this);else if(
this.FF===5)A.pe([this,this.Ain],this);C.Dr.Qo.call(this,G);},J$:function(G){switch(
this.A8){case 0:C.Dr.J$.call(this,G);break;case 3:break;default:this.Ads(this);}
},J6:function(G){switch(this.A8){case 0:C.Dr.J6.call(this,G);break;default:this.
Aim(this);}},Adu:function(G){var F;if(!!this.Dk)this.Ug((F=this.Dk,F[1].call(F[0
])));},Ab2:function(E){if(A.aaZ(this.Dk,E))return;if(!!this.Dk)A.z$([this,this.Adu
],this.Dk,0);this.Dk=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu
],this);},Ug:function(E){if(this.FY===E)return;this.FY=E;this.Au.Initialize(this.
FY);this.Am();},Ads:function(G){this.FF=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ba_:function(s){this.Ads(s);},U8:
function(G){this.Ew(this.A8+1);},AlW:function(G){this.FF=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiB],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AlV:function(
G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ain],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiB:function(G){var B;var F;var BO=this.FY;switch(this.A8){
case 1:{if(this.Asc){var ABb=A._NewObject(A.Core.AnW,0);ABb.Kj=1;if(this.Au.J(ABb
).JP()>A._GetAutoObject(A.Device.Helper).Du())return;}if(this.Au.GK<this.Au.Zi()
)this.Au.Lo(this.Au.GK+1);}break;case 2:{if(this.Asc){var ABb=A._NewObject(A.Core.
AnW,0);ABb.Kj=this.Au.Zi();if(this.Au.J(ABb).JP()>A._GetAutoObject(A.Device.Helper
).Du())return;}this.Au.Uk(this.Au.Hi+1);if(this.Au.Zi()<this.Au.GK)this.Au.Lo(this.
Au.Zi());}break;case 3:{if(this.Asc){var A1a=A._NewObject(A.Core.Bs,0);A1a.Initialize(
this.Au.JP());A1a.Year+=1;if(A1a.JP()>A._GetAutoObject(A.Device.Helper).Du())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Ug(((B=(this.Au.JP()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dk)(F=this.
Dk,F[2].call(F[0],this.FY));A.abo(this.Dk,0);}},Ain:function(G){var B;var F;var BO=
this.FY;if(this.A8===1)this.Au.Lo(this.Au.GK-1);if(this.A8===2){this.Au.Uk(this.
Au.Hi-1);if(this.Au.Zi()<this.Au.GK)this.Au.Lo(this.Au.Zi());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Ug(((B=(this.Au.JP()|
0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],
this.FY));A.abo(this.Dk,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[
0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aev));(F=this.N,F[1].call(F[0])).
CX(A.jV);(F=this.N,F[1].call(F[0])).Co=[this,this.U8];}break;case 2:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(A.aaL(A.ach.AmT
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aev));(F=this.N,F[1].call(F[0])).
CX(A.jV);(F=this.N,F[1].call(F[0])).Co=[this,this.U8];}break;case 3:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(A.aaL(A.ach.AmT
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=
this.N,F[1].call(F[0])).Co=null;}break;default:this.FI.AkK((F=this.N,F[1].call(F[
0])));}},AFu:function(E){if(this.Asc===E)return;this.Asc=E;},FU:function(G){this.
Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;var AAk=this.A8;if(!this.
A8){this.FI.Aju((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.FY){var BO=this.FY;
this.Ug(A._GetAutoObject(A.Device.Helper).Du());if(this.FY!==BO){if(!!this.Dk)(F=
this.Dk,F[2].call(F[0],this.FY));A.abo(this.Dk,0);}}}this.A8=EN;this.Bi1=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=
!!this.A8;if((!!AAk&&!this.A8)&&!!this.OE)A.pe(this.OE,this);this.Am();},Aim:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dr._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BK._Init.call(this.Ju={I:this}
,0);A.acg.AK._Init.call(this.HK={I:this},0);A.acg.Text._Init.call(this.Pq={I:this
},0);A.acg.Text._Init.call(this.VO={I:this},0);A.acg.Text._Init.call(this.QY={I:
this},0);A.acg.Text._Init.call(this.Yf={I:this},0);A.acg.Text._Init.call(this.P2={
I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(this.Gw={
I:this},0);this.__proto__=C.SO;this.H(UT);this.V.R(An9);this.Hw.Z(false);this.H4.
Z(false);this.Ju.Filter=1;this.HK.H(An_);this.HK.L(0x55FFFFFF);this.Pq.H(An$);this.
Pq.I9(true);this.Pq.A5(0x14);this.VO.H(Aoa);this.VO.I9(true);this.VO.A5(0x14);this.
VO.R(Afy);this.QY.H(AsN);this.QY.I9(true);this.Yf.H(AxV);this.Yf.I9(true);this.Yf.
R(Afy);this.P2.H(AxW);this.P2.I9(true);this.P2.A5(0x11);this.Gx.Filter=4;this.Gx.
Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);this.J(this.Pq,0);this.
J(this.VO,0);this.J(this.QY,0);this.J(this.Yf,0);this.J(this.P2,0);this.Ju.BL=[this
,this.Ba_];this.Pq.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QY.S(A.aaL(A.
fl.EK));this.Yf.S(A.aaL(A.fl.EK));this.P2.S(A.aaL(A.fl.EK));this.Gx.BL=[this,this.
AlW];this.Gx.D1=[this,this.AiB];this.Gw.BL=[this,this.AlV];this.Gw.D1=[this,this.
Ain];this.FI=A._NewObject(C.Aeo,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dr;this.Au._Done();this.Ju._Done();this.HK._Done();this.Pq._Done();this.VO._Done(
);this.QY._Done();this.Yf._Done();this.P2._Done();this.Gx._Done();this.Gw._Done(
);C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Au._ReInit(
);this.Ju._ReInit();this.HK._ReInit();this.Pq._ReInit();this.VO._ReInit();this.QY.
_ReInit();this.Yf._ReInit();this.P2._ReInit();this.Gx._ReInit();this.Gw._ReInit(
);this.Pq.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QY.S(A.aaL(A.fl.EK));
this.Yf.S(A.aaL(A.fl.EK));this.P2.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Dr._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OH={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bdn],[B=A._GetAutoObject(A.Device.Device),B.A8m,B.BaK],0);
A.pe([this,this.Bdn],this);},Dt:function(){return 16;},Gk:function(aIndex){return this.
LanguageToString.BS(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(
A.Device.Device).Anu(E);},Bdn:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OH;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,5);this.Cb.
Set(3,3);this.Cb.Set(4,8);this.Cb.Set(5,9);this.Cb.Set(6,7);this.Cb.Set(7,6);this.
Cb.Set(8,10);this.Cb.Set(9,2);this.Cb.Set(10,11);this.Cb.Set(11,12);this.Cb.Set(
12,13);this.Cb.Set(13,14);this.Cb.Set(14,15);this.Cb.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cl;this.LanguageToString._Done();C.Cl._Done.
call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rb={TemperatureUnitToString:
null,Dt:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AwZ(E);}
,Init:function(aArg){var B;A.zX([this,this.BfW],[B=A._GetAutoObject(A.Device.Device
),B.Arr,B.Ata],0);A.pe([this,this.BfW],this);},BfW:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rb;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUQ={Ajs:null,Acw:null,Kw:null,AP:null,A_:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kw.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajs.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Acw.H(this.Ajs.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kw.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hq=Ad;if(!!this.AX){var Alt=this.AX.Hu(Ad,6);var ApP=this.AX.CF(Ad,
7);var At1=this.AX.I4(Ad,9);this.T(A._GetAutoObject(A.acj.KJ).ACL(Alt));this.Kw.
R(A._GetAutoObject(A.acj.KJ).A6a(Alt));this.Acw.R(A._GetAutoObject(A.Device.Converter
).AkV(ApP));this.Acw.L(A._GetAutoObject(A.acj.Assessment).Xt(At1));this.Ajs.L(A.
_GetAutoObject(A.acj.Assessment).Ql(At1));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Ajs={I:this},0);A.acg.Text._Init.
call(this.Acw={I:this},0);A.acg.Text._Init.call(this.Kw={I:this},0);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AUQ;this.V.H(O3);this.Acw.L(A.jb.Text);this.Kw.R(Rk);this.Kw.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A_.H(AxX);this.A_.L(A.jb.Bc);this.J(this.Ajs,0);this.J(this.Acw
,0);this.J(this.Kw,0);this.J(this.AP,0);this.J(this.A_,0);this.Acw.S(A.aaL(A.fl.
Af));this.Kw.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajs._Done();this.Acw._Done();this.Kw._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajs._ReInit(
);this.Acw._ReInit();this.Kw._ReInit();this.AP._ReInit();this.A_._ReInit();this.
Acw.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Gc={AX:null,AR:null,Cq:null,AD:
null,Afg:null,QE:null,KL:A.jV,Lh:null,AVc:true,Hk:function(G){var B;var Gf=this.
AD.G4;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zm(this.
AX);Aa.Ce(Gf);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GN]));
},NZ:function(E){if(E===this.Lh)return;this.Lh=E;this.AD.NZ(E);},Zm:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AVc===
false)return;if(!!this.AX){this.AD.Jw(this.AX.B9());this.AD.AbA(0,this.AD.AY-1);
}else this.AD.Jw(0);if((this.AD.AY>0)&&(this.FK()<0))this.GS(0);if(this.FK()>=this.
AD.AY){this.GS(0);this.AD.Gb(0);}if(this.AD.AY<=0){this.QE.Z(true);this.GS(-1);}
else{this.QE.Z(false);this.ABA(null,null);}},Fj:function(G){var B;this.Afg.Mw(this.
AD.GN*this.AD.AY);this.Afg.My((B=this.AD.M)[3]-B[1]);this.Afg.Mx(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FK()>0)this.GS(
this.FK()-1);break;case 5:if(this.FK()<(this.AD.AY-1))this.GS(this.FK()+1);break;
default:this.Cq.NH=true;}this.AD.HH(this.FK(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NH=true;},Zq:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbA(0,this.AD.AY);},GS:function(E){this.AD.GS(E);this.AD.HH(E,
true,null,null);},FK:function(){return this.AD.Gs;},Dz:function(E){if(this.KL===
E)return;this.KL=E;this.QE.R(E);},ABA:function(AcT,E7){this.AD.ABA(AcT,E7);},ATw:
function(E){if(this.AVc===E)return;this.AVc=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afg={I:this},
0);A.acg.Text._Init.call(this.QE={I:this},0);this.__proto__=C.Gc;this.H(UU);this.
Lh=C.Ba;this.Cq.Filter=147;this.AD.AZ(0x3F);this.AD.H(UU);this.AD.Ae3(40);this.Afg.
AZ(0x3A);this.Afg.H(AsO);this.QE.AZ(0x3F);this.QE.H(AxY);this.QE.Hl(10);this.QE.
KQ(true);this.QE.A5(0xA);this.QE.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afg,
0);this.J(this.QE,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.AD.
El=[this,this.Fj];this.AD.Hk=[this,this.Hk];this.QE.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cq._Done();this.AD._Done();this.Afg._Done();this.
QE._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cq._ReInit();this.AD._ReInit();this.Afg._ReInit();this.QE._ReInit();this.
QE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hq:-1,CP:function(){this.Ce(this.Hq);},Ai:function(Ae){var B;C.Cn.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hq%2)===1)this.Background.L(A.
jb.CJ);else this.Background.L(A.jb.CS);}},Zm:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",AxZ);},_Init:function(aArg){C.Cn._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cn._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GZ={Bg:null,FB:null
,DP:null,FJ:null,VX:null,Kh:null,KL:A.jV,ATS:0,ATT:0,Afh:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dv(0);A.pe([this,this.Bap],this);}},Init:function(aArg){var B;A.zX([this,this.
Bd4],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AIF],0);A.zV([this,this.Af7],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcB],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BAq],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0
],0);A.pe([this,this.AcB],this);A.pe([this,this.AZ7],this);A.pe([this,this.Axp],
this);},Wu:function(G){this.Agr();var O;for(O=this.Kh.Dt()-1;O>=0;O=O-1)switch(this.
Kh.C7(O)){case 0:this.AdM(A.aaR(A.acf.A4C),[this,this.Bna],0);break;case 14:this.
AdM(A.aaR(A.acf.BgB),[this,this.Bnb],14);break;case 1:this.AdM(A.aaR(A.acf.Temperature
),[this,this.ATy],1);break;case 2:this.AdM(A.aaR(A.acf.Rating),[this,this.ATx],2
);break;case 3:this.AdM(A.aaR(A.acf.Afq),[this,this.ATz],3);break;default:A.ab5(
"%s",Ax0);}A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Bhy
));A._GetAutoObject(A.Device.Device).Dv(6);},Bap:function(s){this.Wu(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfU=this.Kh.DZ(A._GetAutoObject(
A.Device.Device).Kh);if(this.Afh)return;switch(D5.CO){case 6:{AfU=AfU-1;if(AfU<0
)AfU=this.Kh.Dt()-1;A._GetAutoObject(A.Device.Device).Zk(this.Kh.C7(AfU));}break;
case 7:{AfU=AfU+1;if(AfU>=this.Kh.Dt())AfU=0;A._GetAutoObject(A.Device.Device).Zk(
this.Kh.C7(AfU));}break;default:D5.NH=true;}},CC:function(G){if(this.DP.AzV()){this.
DP.Ac3();if(this.DP.AzV()===false)this.Bg.ATw(true);return;}else if(this.Afh)this.
AAV(this);if(!!this.Bg)this.Bg.ATw(true);},E4:function(G){if(!!this.Bg)this.Bg.ATw(
false);},Axp:function(G){var B;if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(
C.AMo,0);this.Bg.H(Aob);this.Bg.Zm(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zq([this,this.AIS]);if(!!this.FB)this.Bg.A8_([B=this.FB,B.A8F,B.A91]);this.A3P(this
);this.J(this.Bg,0);if(this.Afh===false)this.Bb(this.Bg);this.Bd4(this);this.Boe(
this);},A87:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.Dq(this.A6n(
));this.Ej.AR=[this,this.AIS];this.ALg(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afh=true;},BjW:function(G){var B;A._GetAutoObject(A.Device.Device).Dv(0);if(!this.
Bg)return;var Aa=(C.ABZ.isPrototypeOf(B=this.Bg.AD.BiE(this.Bg.AD.Gs))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G6(Aa.Hq);else A._GetAutoObject(A.Device.
Helper).W.E5();this.Agd();},AlU:function(G){var F;if(!this.FJ)this.A5E(this);else
switch((F=this.FJ,F[1].call(F[0]))){case 0:this.A5E(this);break;case 1:this.Bhz(
this);break;case 9:this.A5F(this);break;case 4:this.A5H(this);break;case 6:this.
A5K(this);break;case 8:this.ANP(this);break;case 2:this.A5O(this);break;case 3:this.
BhA(this);break;case 7:this.BhB(this);break;case 5:this.BhC(this);break;case 10:
this.BhE(this);break;case 11:this.A5G(this);break;case 12:this.A5N(this);break;case
13:this.A5P(this);break;case 14:this.A5I(this);break;case 18:this.A5J(this);break;
case 15:this.A5L(this);break;case 16:this.A5Q(this);break;case 17:this.A5M(this);
break;default:A.ab5("%s%e",Afz,(F=this.FJ,F[1].call(F[0])));}},AIS:function(s){this.
AlU(s);},Bk6:function(G){this.Dq(C.Kn);this.Ej.AR=null;this.Afh=false;this.AcB(this
);this.Bfo();this.N.TT.Dj(255);this.N.TU.Dj(255);this.Bb(this.Bg);this.Ej.Ar(false
);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},Dz:function(E){if(this.KL===E)
return;this.KL=E;this.A3P(this);},Abn:function(){switch(A._GetAutoObject(A.Device.
Device).Kh){case 14:return C.AMZ;case 2:return C.AM1;case 1:return C.AM2;case 3:
return C.AM4;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqn;case
7:return C.ABY;case 12:return C.AB1;case 11:return C.ABX;case 13:return C.AB0;default:
throw new Error(Aoc);}},Abo:function(){switch(A._GetAutoObject(A.Device.Device).
Kh){case 14:return C.APr;case 2:return C.ADg;case 1:return C.APt;case 3:return C.
APv;case 4:return C.ADc;case 0:case 8:case 9:case 10:case 5:case 6:return C.AqU;
case 7:return C.ADe;case 12:return C.ADf;case 11:return C.ADd;case 13:return C.ADh;
default:throw new Error(Aoc);}},Bd4:function(G){this.ATa(A._GetAutoObject(A.Device.
Device).Kh);if(!!this.Bg){this.Bg.NZ(this.Abn());this.Boj(this);}},Boj:function(
G){var B;if(!!this.FB)this.HN(this.FB);this.FB=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abo(),0))?B:null);this.FB.H(IT);if(!!this.Bg)this.Bg.A8_([B=this.FB,B.A8F,B.
A91]);this.J(this.FB,0);},BjU:function(G){this.Q6(this);A._GetAutoObject(A.Device.
Device).Dv(0);},ATy:function(G){A._GetAutoObject(A.Device.Device).Zk(1);},ATx:function(
G){A._GetAutoObject(A.Device.Device).Zk(2);},ATz:function(G){A._GetAutoObject(A.
Device.Device).Zk(3);},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mq());},AZ7:function(s){this.Q6(s);},HO:function(
G){if(this.Afh){this.ALg(this);return;}this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(
A.ach.ADA));this.N.C5(A.aaL(A.ach.Options));this.N.CE=[this,this.Anh];this.N.Ck=[
this,this.A87];this.N.Co=[this,this.Bap];this.N.Hx(A.jV);this.N.FN(A.jV);this.N.
CX(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I6.Dj(100);this.N.
Ck=null;}else this.N.I6.Dj(255);},AIP:function(s){this.HO(s);},AdM:function(Aia,
Aib,AJf){A._GetAutoObject(C.BR).ABz(Aia,Aib,[this,this.A8z,this.ATa],AJf);},Af7:
function(G){this.A3P(this);if(this.Afh)A.pe([this,this.ALg],this);},Agd:function(
){A._GetAutoObject(C.A$).Cf(9);},A3P:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QG()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dz(
A.aaR(A.acf.AEe));else if(A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dz(this.KL);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACU(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dz(A.aaR(A.acf.ANZ));else this.Bg.Dz(A.aaR(
A.acf.ANY));}else this.Bg.Dz(A.aaR(A.acf.ARV));},AEE:function(G){var F;if(!!this.
FJ)(F=this.FJ,F[2].call(F[0],0));},AwG:function(E){if(A.aaZ(this.FJ,E))return;if(
!!this.FJ)A.z$([this,this.A0e],this.FJ,0);this.FJ=E;if(!!E)A.zX([this,this.A0e],
this.FJ,0);if(!!E)A.pe([this,this.A0e],this);},AEK:function(G){var F;if(!!this.FJ
)(F=this.FJ,F[2].call(F[0],1));},AwL:function(G){var F;if(!!this.FJ)(F=this.FJ,F[
2].call(F[0],2));},ATe:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],
3));},ATs:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],7));},ATt:function(
G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],5));},A5O:function(G){if(!this.Bg
)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.
Qj(1);}},I0:function(Aia,Aib,AoR){A._GetAutoObject(C.BR).ABz(Aia,Aib,[this,this.
A8A,this.ATb],AoR);},Ble:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0
],4));},A5H:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).G6(this.Bg.FK());this.DP.BAS();}},Blf:function(G){var F;if(!!this.FJ)(F=
this.FJ,F[2].call(F[0],6));},A5K:function(G){if(!this.Bg)return;if(this.M9()){A.
_GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.BAT();}},ANP:function(G
){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qj(1024);}},Bmr:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(
F[0],8));},Ako:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],9));},BhA:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(
this.Bg.FK());this.DP.Qj(2);}},A5E:function(G){if(!this.Bg)return;if(this.M9()){
A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());if(A._GetAutoObject(A.Device.
Helper).Aj0(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A6(66,true,A.jV,0,null);else this.BAD();}},Bhz:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qj(16);}},BAD:function(){A._GetAutoObject(C.A$).Cf(94);},BhB:function(G){if(!
this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());
this.DP.Qj(4);}},BhC:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(8);}},A5F:function(G){var B;if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());if(this.
Afh){A.zX([this,this.AAm],[B=this.DP,B.SA,B.Fb],0);this.AAV(this);}this.DP.Ac3();
}},AL1:function(Aia,Aib,BxG){A._GetAutoObject(C.BR).Bgw(Aia,Aib,BxG);},ALg:function(
G){this.N.Hx(A.jV);this.N.CX(A.jV);this.N.C1(A.aaL(A.ach.Aeu));this.N.CE=[this,this.
Bk6];this.N.TT.Dj(100);this.N.TU.Dj(100);var Gg=A._GetAutoObject(A.Device.Device
).An.B9();if(Gg<=0){this.N.Cv(null);this.N.C5(null);this.N.Ck=null;this.N.Co=null;
this.N.Zy=false;this.N.Zz=false;}else if(Gg===1){this.N.Cv(null);this.N.C5(A.aaL(
A.ach.Aev));this.N.Ck=null;this.N.Co=[this,this.AIS];this.N.Zy=false;this.N.Zz=false;
}else{this.N.Cv(A.aaL(A.ach.AqZ));this.N.C5(A.aaL(A.ach.Aq6));this.N.Ck=[this,this.
A2_];this.N.Co=[this,this.A2$];this.N.Zy=true;this.N.Zz=true;}},A2_:function(G){
if(!this.Bg)return;if(this.Bg.FK()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GS(this.Bg.FK()+1);},A2$:function(G){if(!this.Bg)return;if(this.Bg.FK()>
0)this.Bg.GS(this.Bg.FK()-1);},Boe:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GS(Bf);A.ab5("%s",Aod);}}},M9:function(){return this.
Bg.FK()>=0;},Akb:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agr:function(){this.Bgx();A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.AUf),[this,this.
A87]);A._GetAutoObject(C.BR).FW();},AcB:function(G){if(this.Afh)this.ALg(this);else
this.HO(this);},AAV:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E_();var AyX=aFilter.DL(1,4);if(!!AyX){aFilter.Ni(AyX);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},BFW:function(s){this.
AAV(s);},AAm:function(G){var B;if(!this.DP.EV&&this.Afh){A.z$([this,this.AAm],[B=
this.DP,B.SA,B.Fb],0);this.AAV(this);}},Bm4:function(G){var F;if(!!this.FJ)(F=this.
FJ,F[2].call(F[0],10));},BhE:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(256);}},A20:function(G){var F;this.
ATb((F=this.FJ,F[1].call(F[0])));A.pe([this,this.AIP],this);},A0e:function(s){this.
A20(s);},Blb:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],11));},A5G:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(
this.Bg.FK());this.DP.Qj(4096);}},A5N:function(G){if(!this.Bg)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(16384);}},A5P:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.BAE();}},BAE:function(){A._GetAutoObject(C.A$).Ahr(75);},A5I:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qj(32768);}},A5L:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(65536);}},A5Q:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qj(131072);}},Bgx:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BR).XI(A.aaR(A.acf.AB4));else A._GetAutoObject(C.BR).Qy(A.aaR(
A.acf.AB4),[this,this.BjU]);A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.AkN),[this,this.
BjW]);A._GetAutoObject(C.BR).FW();},A5M:function(G){if(!this.Bg)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(128);}},BAq:function(
G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ce],this);},A5J:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qj(524288);}},BhD:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qj(262144);}},ATa:function(E){if(this.
ATS===E)return;this.ATS=E;A.abo([this,this.A8z,this.ATa],0);},ATb:function(E){if(
this.ATT===E)return;this.ATT=E;A.abo([this,this.A8A,this.ATb],0);},A6n:function(
){return C.Yo;},Bfo:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bna:function(G){A._GetAutoObject(A.Device.Device).Zk(0);
},Bnb:function(G){A._GetAutoObject(A.Device.Device).Zk(14);},A8z:function(){return this.
ATS;},A8A:function(){return this.ATT;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADg._Init.call(this.VX={I:this},0);C.Kh._Init.call(this.Kh={I:this},0);
this.__proto__=C.GZ;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.
OO(true);this.Ej.A9z(A.jb.CS);this.Ej.A9A(A.jb.Text);this.Dq(C.Kn);this.VX.H(IT);
this.KL=A.aaR(A.acf.AEe);this.J(this.VX,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.Kh._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.VX._ReInit();
this.Kh._ReInit();this.Dz(A.aaR(A.acf.AEe));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ABZ={AP:null,A_:null,UD:null,Acu:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UD.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UD.M[2]-1,0,this.UD.M[2]+1,aSize[1]]);this.Acu.H([this.UD.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UD.L(this.V.AQ);this.Acu.L(this.
V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UD.R(this.AX.CF(Ad,2).toFixed());this.Acu.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UD={I:this},0);A.acg.Text._Init.call(this.Acu={I:this
},0);this.__proto__=C.ABZ;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UD.L(A.jb.Text
);this.Acu.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UD,0);this.
J(this.Acu,0);this.UD.S(A.aaL(A.fl.Af));this.Acu.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UD.
_Done();this.Acu._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UD._ReInit();this.Acu._ReInit(
);this.UD.S(A.aaL(A.fl.Af));this.Acu.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad5={Oy:null,SP:null,Mk:null,Init:function(aArg){var B;A.zX([this,this.A2G],[
B=A._GetAutoObject(A.Device.Device),B.Av3,B.AyB],0);A.zX([this,this.Adt],[B=A._GetAutoObject(
A.Device.Device),B.Av0,B.AyA],0);A.pe([this,this.Adt],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SP.R(A._GetAutoObject(A.Device.Device).Aa0.toFixed()+W_
);this.Oy.Z(A._GetAutoObject(A.Device.Device).Amv);},Adt:function(G){this.Am();}
,MU:function(G){A._GetAutoObject(C.A$).Fy();},A2G:function(G){if(A._GetAutoObject(
A.Device.Device).Amv===false){this.Oy.Z(false);A._GetAutoObject(C.A$).Fy();}else
this.Oy.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oy={I:this},0);A.acg.Text._Init.call(this.SP={I:this},0);C.Mk._Init.call(
this.Mk={I:this},0);this.__proto__=C.Ad5;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CX(A.aaR(A.acf.Ok));this.Oy.H(Aoe);this.Oy.R(A.aaR(A.acf.Oy));this.
Oy.L(A.jb.Text);this.Oy.Z(false);this.SP.H(AsP);this.SP.R(AsQ);this.SP.L(A.jb.Text
);this.Mk.H(AsR);this.J(this.Oy,0);this.J(this.SP,0);this.J(this.Mk,0);this.N.Co=[
this,this.MU];this.Oy.S(A.aaL(A.fl.Af));this.SP.S(A.aaL(A.fl.Af));this.Mk.At([B=
A._GetAutoObject(A.Device.Device),B.Av0,B.AyA]);this.Mk.A9Q([B=A._GetAutoObject(
A.Device.Device),B.Av3,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oy._Done();this.SP._Done();this.Mk._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oy._ReInit();this.SP._ReInit();this.Mk._ReInit(
);this.N.CX(A.aaR(A.acf.Ok));this.Oy.R(A.aaR(A.acf.Oy));this.Oy.S(A.aaL(A.fl.Af)
);this.SP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mk={Ad0:null,Ad1:null,Kd:function(G){var F;if(!!this.Q){this.A1O();var Ac6=(
F=this.Q,F[1].call(F[0]));if(Ac6>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gi);this.
Ou.L((this.Ou.AQ&0x00FFFFFF)|(this.AlB(Ac6,0,20)<<24));this.Tz.L((this.Tz.AQ&0x00FFFFFF
)|(this.AlB(Ac6,21,40)<<24));this.TA.L((this.TA.AQ&0x00FFFFFF)|(this.AlB(Ac6,41,
60)<<24));this.Ad0.L((this.Ad0.AQ&0x00FFFFFF)|(this.AlB(Ac6,61,80)<<24));this.Ad1.
L((this.Ad1.AQ&0x00FFFFFF)|(this.AlB(Ac6,81,100)<<24));}},A1O:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U3=this.Ad1;else if((F=this.Q,F[
1].call(F[0]))>60)this.U3=this.Ad0;else if((F=this.Q,F[1].call(F[0]))>40)this.U3=
this.TA;else if((F=this.Q,F[1].call(F[0]))>20)this.U3=this.Tz;else this.U3=this.
Ou;}else this.U3=null;},_Init:function(aArg){C.Ow._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad0={I:this},0);A.acg.AK._Init.call(this.Ad1={I:this},0);this.__proto__=
C.Mk;this.H(Aof);this.NO.H(Aof);this.Ou.H(Aog);this.Tz.H(AsS);this.TA.H(Ax1);this.
Ad0.H(Ax2);this.Ad0.L(A.jb.E1);this.Ad1.H(Ax3);this.Ad1.L(A.jb.E1);this.J(this.Ad0
,0);this.J(this.Ad1,0);this.NO.Aw(A.aaL(A.ach.AMJ));},_Done:function(){this.__proto__=
C.Ow;this.Ad0._Done();this.Ad1._Done();C.Ow._Done.call(this);},_ReInit:function(
){C.Ow._ReInit.call(this);this.Ad0._ReInit();this.Ad1._ReInit();},_Mark:function(
D){var B;C.Ow._Mark.call(this,D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUL={N6:null,Lq:null,Ak1:null,ZU:null,ZT:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device),B.
ASw,B.AZ0],0);A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.
AZ2],0);A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device),B.A8P,B.BaU],0
);A.pe([this,this.ApG],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABn(this);this.BBN(this);this.DJ(this);},Bz6:function(G){A._GetAutoObject(
A.Device.Device).Asx();},ApG:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZU.Z(false);break;case 4:{var A3s;if(!A._GetAutoObject(A.Device.Device).Afm)A3s=
0;else A3s=((A._GetAutoObject(A.Device.Device).AxG*100)/A._GetAutoObject(A.Device.
Device).Afm)|0;this.ZU.Bx(A3s);this.ZU.Z(true);}break;default:A.ab5("%s%e",AsT,A.
_GetAutoObject(A.Device.Device).SyncState);}},BBN:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lq.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gi);this.Lq.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsT,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C1(null);this.N.CE=null;this.N.CX(A.jV);this.N.Co=null;}break;
case 7:{this.N.C1(null);this.N.CE=null;this.N.CX(A.aaR(A.acf.Ok));this.N.Co=[this
,this.Bz6];}break;default:A.ab5("%s%e",AsT,A._GetAutoObject(A.Device.Device).SyncState
);}},ABn:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lq.R(A.aaR(A.acf.Bo6));break;case 1:this.Lq.R(A.aaR(A.acf.Bo3));break;
case 2:this.Lq.R(A.aaR(A.acf.Bo0));break;case 3:this.Lq.R(A.aaR(A.acf.Bo4));break;
case 4:this.Lq.R((A.aaR(A.acf.Bo2)+Ax4)+A._GetAutoObject(A.Device.Helper).Nk(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BnH),P8,A._GetAutoObject(A.Device.Device).AxG.toFixed(
)),Ax5,A._GetAutoObject(A.Device.Device).Afm.toFixed()));break;case 5:this.Lq.R(
A.aaR(A.acf.Bo5));break;case 7:this.Lq.R(A.aaR(A.acf.Bo1));break;default:A.ab5("%s%e"
,AsT,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lq={I:this
},0);A.acg.Ap._Init.call(this.Ak1={I:this},0);A.acr.ADj._Init.call(this.ZU={I:this
},0);A.acr.ADk._Init.call(this.ZT={I:this},0);this.__proto__=C.AUL;this.N.Z(true
);this.N6.H(AVG);this.N6.R(A.aaR(A.acf.N6));this.Lq.AZ(0x3F);this.Lq.H(AVH);this.
Lq.A5(0x12);this.Ak1.H(AVI);this.Ak1.L(A.jb.AV);this.ZU.H(AVJ);this.ZU.Ar(false);
this.ZU.Bx(0);this.ZT.BmY(0);this.ZT.A_c(0);this.ZT.A_a(A.jb.AV);this.ZT.A9$(0);
this.ZT.AFU(AHd);this.J(this.N6,0);this.J(this.Lq,0);this.J(this.Ak1,0);this.J(this.
ZU,0);this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(A.fl.Af));this.N6.Ct(A.aaL(A.fl.
Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(A.fl.Ak));this.Lq.Ct(A.aaL(A.fl.
Bi));this.Ak1.Aw(A.aaL(A.ach.AQD));this.ZU.OnSetAppearance(this.ZT);this.ZT.A_b(
A.aaL(A.ach.NS));this.ZT.A9_(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lq._Done();this.Ak1._Done();this.ZU._Done(
);this.ZT._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lq._ReInit();this.Ak1._ReInit();this.ZU._ReInit();this.
ZT._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Ct(A.aaL(A.fl.Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(
A.fl.Ak));this.Lq.Ct(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqS={_Init:function(aArg){C.AC$._Init.call(this,aArg
);this.__proto__=C.AqS;this.A9C(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cb:A.abi(3,0,{0:2,2:1}),Dt:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.Cb.Get(aIndex
);},Gk:function(aIndex){return this.GenderToString.BS(this.C7(aIndex));},DZ:function(
A9){var O=0;while(O<3){if(this.Cb.Get(O)===A9)return O;O=O+1;}return-1;},H3:function(
){var O=0;var max=-1;while(O<3){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}
return max;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal)this.Animal.JR(
E);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfY],[B=this.Animal,B.Ws,B.JR],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfY],[B=this.Animal,B.Ws,B.JR],0);A.pe([this,this.AfY],this);},AfY:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B_,
this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cb=[]).__proto__=C.Gender.Cb;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cb:A.abi(4,0,{1:1,2:2,3:3}),Dt:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.Cb.Get(aIndex);},Gk:function(aIndex){return this.
BirthTypeToString.BS(this.C7(aIndex));},DZ:function(A9){var O=0;while(O<4){if(this.
Cb.Get(O)===A9)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(
O<4){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Akp(E);},A04:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A04],[B=this.Animal,B.ASb,B.Akp],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A04],[B=this.Animal,B.ASb,B.Akp],0);A.pe([this,this.A04],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cb=[]).__proto__=C.BirthType.Cb;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acl:null,Dt:
function(){return A._GetAutoObject(A.Device.Helper).AdV.MD;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdV.MD)return-1;return A._GetAutoObject(
A.Device.Helper).AdV.Get(aIndex);},Gk:function(aIndex){return this.Acl.BS(this.C7(
aIndex));},DZ:function(A9){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdV.
MD){if(A._GetAutoObject(A.Device.Helper).AdV.Get(O)===A9)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UA.
MD){if(A._GetAutoObject(A.Device.Helper).UA.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UA.Get(O);O=O+1;}return max;},At:function(E){C.AC.At.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A0X:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0X],[B=this.Animal,B.PN,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0X],[B=this.Animal,B.PN,B.EB],0);A.pe([
this,this.A0X],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acl={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acl._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acl._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUr={Init:function(aArg){var B;A.pe([this,this.AfC],this);A.zX([this,this.AfC
],[B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ata],0);},A3x:function(G){A._GetAutoObject(
A.Device.Device).A6(38,true,A.jV,0,[this,this.Ba$]);},A28:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Asj(this);},A1l:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlJ)this.D7=this.AlJ;if(this.D7<A._GetAutoObject(
A.Device.Device).AcA)this.D7=A._GetAutoObject(A.Device.Device).AcA;if(this.DW!==
BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.
A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);
}}this.DJ(this);this.Am();},A1X:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
JU)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlE)this.DW=this.AlE;if(this.DW!==BO){
if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PG.R(AHe+A._GetAutoObject(A.Device.Converter).
AkV(this.D7));this.PH.R(AHe+A._GetAutoObject(A.Device.Converter).AkV(this.DW));this.
Sv.R(A._GetAutoObject(A.acj.Temperature).AlC());},A1Q:function(Ath){if(Ath===1)return this.
PG;else if(Ath===2)return this.PH;else return null;},_Init:function(aArg){C.Acj.
_Init.call(this,aArg);this.__proto__=C.AUr;this.AlE=5000;this.AlJ=3000;this.T(A.
aaR(A.acf.Arh));this.Background.H(AfA);this.V.H(BD);this.V.R(A.aaR(A.acf.AGQ));this.
V.A5(0x12);this.Init(aArg);},_ReInit:function(){C.Acj._ReInit.call(this);this.T(
A.aaR(A.acf.Arh));this.V.R(A.aaR(A.acf.AGQ));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa3:null,Aa7:null,Aa5:
null,Background:null,Aa2:null,Aa6:null,Aa4:null,Ajz:null,Arm:null,VI:null,A4:0,BzM:
function(G){if(this.Ajz.CO===6){if(this.A4===1)this.AnA(2);else if(this.A4===2)this.
AnA(3);else this.AnA(1);}else if(this.Ajz.CO===7){if(this.A4===3)this.AnA(2);else
if(this.A4===2)this.AnA(1);else this.AnA(3);}},AnA:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa2.M);break;case 2:this.
Background.H(this.Aa6.M);break;case 1:this.Background.H(this.Aa4.M);break;default:
this.Background.H(Aoh);}},IY:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hn._Init.
call(this.Aa3={I:this},0);A.acg.Hn._Init.call(this.Aa7={I:this},0);A.acg.Hn._Init.
call(this.Aa5={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aek._Init.call(this.Aa2={I:this},0);A.acg.Aek._Init.call(this.Aa6={I:this},0);A.
acg.Aek._Init.call(this.Aa4={I:this},0);A.Core.BK._Init.call(this.Ajz={I:this},0
);A.Core.BK._Init.call(this.Arm={I:this},0);A.Graphics.AMA._Init.call(this.VI={I:
this},0);this.__proto__=C.Rating;this.H(AVK);this.Aa3.H(AHf);this.Aa3.L(A.jb.Text
);this.Aa3.Any(Ak7);this.Aa3.Ng(3);this.Aa3.Z(true);this.Aa7.H(AHg);this.Aa7.L(A.
jb.Text);this.Aa7.Any(Ak7);this.Aa7.Ng(3);this.Aa7.Z(true);this.Aa5.H(AHh);this.
Aa5.L(A.jb.Text);this.Aa5.Any(Ak7);this.Aa5.Ng(3);this.Aa5.Z(true);this.Background.
H(Aoh);this.Background.L(A.jb.AV);this.Aa2.H(AHf);this.Aa2.L(A.jb.E1);this.Aa2.Any(
Ak7);this.Aa2.Z(true);this.Aa6.H(AHg);this.Aa6.L(A.jb.H8);this.Aa6.Any(Ak7);this.
Aa6.Z(true);this.Aa4.H(AHh);this.Aa4.L(A.jb.Gi);this.Aa4.Any(Ak7);this.Aa4.Z(true
);this.Ajz.Filter=147;this.Arm.Filter=1;this.VI.Blw(360);this.VI.BmM(22);this.VI.
BmW(2);this.J(this.Aa3,0);this.J(this.Aa7,0);this.J(this.Aa5,0);this.J(this.Background
,0);this.J(this.Aa2,0);this.J(this.Aa6,0);this.J(this.Aa4,0);this.Aa3.Zr(this.VI
);this.Aa7.Zr(this.VI);this.Aa5.Zr(this.VI);this.Background.Aw(A.aaL(A.ach.NR));
this.Aa2.Zr(this.VI);this.Aa6.Zr(this.VI);this.Aa4.Zr(this.VI);this.Ajz.BL=[this
,this.BzM];this.Arm.BL=[this,this.IY];},_Done:function(){this.__proto__=A.Core.P;
this.Aa3._Done();this.Aa7._Done();this.Aa5._Done();this.Background._Done();this.
Aa2._Done();this.Aa6._Done();this.Aa4._Done();this.Ajz._Done();this.Arm._Done();
this.VI._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa3._ReInit();this.Aa7._ReInit();this.Aa5._ReInit();this.Background.
_ReInit();this.Aa2._ReInit();this.Aa6._ReInit();this.Aa4._ReInit();this.Ajz._ReInit(
);this.Arm._ReInit();this.VI._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asl={Akd:null,Ar7:null,Background:null,TL:null,TG:null,AbT:null,AbS:null,AbR:
null,Acp:null,Aco:null,Acn:null,Ace:null,Acd:null,AbL:null,AbK:null,Ab6:null,Ab5:
null,Aqt:null,Init:function(aArg){},Bjw:function(G){this.AbT.R(AVL);this.AbS.R(A.
jV);this.AbR.R(A.jV);this.Acp.R(AHi);this.Aco.R(A.jV);this.Acn.R(A.jV);this.Ace.
R(A.jV);this.Acd.R(A.jV);this.AbL.R(A.jV);this.AbK.R(A.jV);this.Ab6.R(A.jV);this.
Ab5.R(A.jV);},Bno:function(G){this.TG.Z(true);this.TL.Z(true);var IC=this.Il();if(
!IC)return;this.TL.R(IC.GetFPS().toFixed()+AVM);this.TG.R(AVN);this.TG.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akd={I:this},0);A.Core.Timer._Init.call(this.Ar7={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TL={I:this},0);A.acg.
Text._Init.call(this.TG={I:this},0);A.acg.Text._Init.call(this.AbT={I:this},0);A.
acg.Text._Init.call(this.AbS={I:this},0);A.acg.Text._Init.call(this.AbR={I:this}
,0);A.acg.Text._Init.call(this.Acp={I:this},0);A.acg.Text._Init.call(this.Aco={I:
this},0);A.acg.Text._Init.call(this.Acn={I:this},0);A.acg.Text._Init.call(this.Ace={
I:this},0);A.acg.Text._Init.call(this.Acd={I:this},0);A.acg.Text._Init.call(this.
AbL={I:this},0);A.acg.Text._Init.call(this.AbK={I:this},0);A.acg.Text._Init.call(
this.Ab6={I:this},0);A.acg.Text._Init.call(this.Ab5={I:this},0);A.acg.AK._Init.call(
this.Aqt={I:this},0);this.__proto__=C.Asl;this.H(AcK);this.Ar(false);this.Akd.PP(
2000);this.Akd.Ww(1);this.Akd.Ar(true);this.Ar7.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcK);this.Background.L(0x78000000);this.TL.H(AVO);this.TL.A5(
0x14);this.TL.R(A.jV);this.TL.L(0xFFFFFC00);this.TL.Z(false);this.TG.H(AVP);this.
TG.A5(0x11);this.TG.R(A.jV);this.TG.Z(false);this.AbT.H(AHj);this.AbT.A5(0x11);this.
AbT.R(A.jV);this.AbS.H(AsU);this.AbS.A5(0x11);this.AbS.R(A.jV);this.AbR.H(AHk);this.
AbR.A5(0x14);this.AbR.R(A.jV);this.Acp.H(AHl);this.Acp.A5(0x11);this.Acp.R(A.jV);
this.Aco.H(Ax6);this.Aco.A5(0x11);this.Aco.R(A.jV);this.Acn.H(AHm);this.Acn.A5(0x14
);this.Acn.R(A.jV);this.Ace.H(Ax7);this.Ace.A5(0x11);this.Ace.R(A.jV);this.Acd.H(
AVQ);this.Acd.A5(0x14);this.Acd.R(A.jV);this.AbL.H(AVR);this.AbL.A5(0x11);this.AbL.
R(A.jV);this.AbK.H(AVS);this.AbK.A5(0x14);this.AbK.R(A.jV);this.Ab6.H(AVT);this.
Ab6.A5(0x11);this.Ab6.R(A.jV);this.Ab5.H(AHn);this.Ab5.A5(0x14);this.Ab5.R(A.jV);
this.Aqt.H(AVU);this.J(this.Background,0);this.J(this.TL,0);this.J(this.TG,0);this.
J(this.AbT,0);this.J(this.AbS,0);this.J(this.AbR,0);this.J(this.Acp,0);this.J(this.
Aco,0);this.J(this.Acn,0);this.J(this.Ace,0);this.J(this.Acd,0);this.J(this.AbL,
0);this.J(this.AbK,0);this.J(this.Ab6,0);this.J(this.Ab5,0);this.J(this.Aqt,0);this.
Akd.Mz=[this,this.Bjw];this.Ar7.Mz=[this,this.Bno];this.TL.S(A.aaL(A.fl.Ak));this.
TG.S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.AbS.S(A.aaL(A.fl.Ak));this.
AbR.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.S(A.aaL(A.fl.Ak));this.
Acn.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.
AbL.S(A.aaL(A.fl.Ak));this.AbK.S(A.aaL(A.fl.Ak));this.Ab6.S(A.aaL(A.fl.Ak));this.
Ab5.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akd._Done();this.Ar7._Done();this.Background._Done();this.TL._Done();this.TG.
_Done();this.AbT._Done();this.AbS._Done();this.AbR._Done();this.Acp._Done();this.
Aco._Done();this.Acn._Done();this.Ace._Done();this.Acd._Done();this.AbL._Done();
this.AbK._Done();this.Ab6._Done();this.Ab5._Done();this.Aqt._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akd._ReInit();this.
Ar7._ReInit();this.Background._ReInit();this.TL._ReInit();this.TG._ReInit();this.
AbT._ReInit();this.AbS._ReInit();this.AbR._ReInit();this.Acp._ReInit();this.Aco.
_ReInit();this.Acn._ReInit();this.Ace._ReInit();this.Acd._ReInit();this.AbL._ReInit(
);this.AbK._ReInit();this.Ab6._ReInit();this.Ab5._ReInit();this.Aqt._ReInit();this.
TL.S(A.aaL(A.fl.Ak));this.TG.S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.AbS.
S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.
S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));this.Acd.
S(A.aaL(A.fl.Ak));this.AbL.S(A.aaL(A.fl.Ak));this.AbK.S(A.aaL(A.fl.Ak));this.Ab6.
S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ar7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGy={FI:null,Dk:null,Au:null,Ju:null,HK:null,Ua:null,Bc:null,Sk:null,Gx:null
,Gw:null,FY:0,A8:0,Bi6:false,Init:function(aArg){},Ai:function(Ae){C.Dr.Ai.call(
this,Ae);this.Hw.Z(false);this.H4.Z(false);if(!!this.Dk){this.Sk.R(this.Au.Format(
O4));this.Ua.R(this.Au.Format(Ax8));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.
Sk.M);this.HK.L(A.jb.Bm);this.Sk.L(this.Background.AQ);this.Ua.L(A.jb.Bm);}else if(
this.A8===2){this.HK.Z(true);this.HK.H(this.Ua.M);this.HK.L(A.jb.Bm);this.Sk.L(A.
jb.Bm);this.Ua.L(this.Background.AQ);}else{this.HK.Z(false);this.Sk.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Ua.L(this.V.AQ);}},Qo:function(G){if(this.FF===1)A.pe([
this,this.U8],this);else if(this.FF===4)A.pe([this,this.AiB],this);else if(this.
FF===5)A.pe([this,this.Ain],this);C.Dr.Qo.call(this,G);},J$:function(G){switch(this.
A8){case 0:C.Dr.J$.call(this,G);break;case 2:break;default:this.Ads(this);}},J6:
function(G){switch(this.A8){case 0:C.Dr.J6.call(this,G);break;default:this.Aim(this
);}},Adu:function(G){var F;if(!!this.Dk)this.Ug((F=this.Dk,F[1].call(F[0])));},Ab2:
function(E){if(A.aaZ(this.Dk,E))return;if(!!this.Dk)A.z$([this,this.Adu],this.Dk
,0);this.Dk=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);
},Ug:function(E){if(this.FY===E)return;this.FY=E;this.Au.Initialize(this.FY);this.
Am();},Ads:function(G){this.FF=1;this.Am();if(this.Bo.Bw){A.pe([this,this.U8],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},U8:function(G){this.Ew(this.A8+1);},AlW:
function(G){this.FF=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiB],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},AlV:function(G){this.FF=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ain],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiB:function(G){
var B;var F;var BO=this.FY;if(this.A8===1)this.Au.Ant(this.Au.AjN+1);if(this.A8===
2)this.Au.Anw(this.Au.AvT+1);this.Au.Anz(0);this.Ug(((B=(this.Au.JP()|0))<0)?B+0x100000000:
B);if(this.FY!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],this.FY));A.abo(this.
Dk,0);}},Ain:function(G){var B;var F;var BO=this.FY;if(this.A8===1)this.Au.Ant(this.
Au.AjN-1);if(this.A8===2)this.Au.Anw(this.Au.AvT-1);this.Au.Anz(0);this.Ug(((B=(
this.Au.JP()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dk)(F=this.Dk,F[
2].call(F[0],this.FY));A.abo(this.Dk,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aev));(F=this.N,F[1].call(
F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=[this,this.U8];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(A.aaL(A.ach.AmT
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=
this.N,F[1].call(F[0])).Co=null;}break;default:this.FI.AkK((F=this.N,F[1].call(F[
0])));}},FU:function(G){this.Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){
var F;if(!this.A8)this.FI.Aju((F=this.N,F[1].call(F[0])));this.A8=EN;this.Bi6=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.
Bw=!!this.A8;this.Am();},Aim:function(G){if(this.A8>1)this.Ew(this.A8-1);},_Init:
function(aArg){C.Dr._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BK._Init.call(this.Ju={I:this},0);A.acg.AK._Init.call(this.HK={I:this}
,0);A.acg.Text._Init.call(this.Ua={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sk={I:this},0);A.Core.BK._Init.call(this.Gx={I:this
},0);A.Core.BK._Init.call(this.Gw={I:this},0);this.__proto__=C.AGy;this.H(UT);this.
V.R(AVV);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.Ju.Filter=1;this.
HK.H(AVW);this.HK.L(0x55FFFFFF);this.Ua.H(AVX);this.Ua.I9(true);this.Bc.H(AVY);this.
Bc.A5(0x14);this.Bc.R(AVZ);this.Sk.H(AV0);this.Sk.I9(true);this.Sk.A5(0x14);this.
Gx.Filter=4;this.Gx.Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);
this.J(this.Ua,0);this.J(this.Bc,0);this.J(this.Sk,0);this.Ju.BL=[this,this.Ads];
this.Ua.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sk.S(A.aaL(A.fl.EK));this.
Gx.BL=[this,this.AlW];this.Gx.D1=[this,this.AiB];this.Gw.BL=[this,this.AlV];this.
Gw.D1=[this,this.Ain];this.FI=A._NewObject(C.Aeo,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dr;this.Au._Done();this.Ju._Done();this.HK._Done();this.Ua._Done(
);this.Bc._Done();this.Sk._Done();this.Gx._Done();this.Gw._Done();C.Dr._Done.call(
this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Au._ReInit();this.Ju._ReInit(
);this.HK._ReInit();this.Ua._ReInit();this.Bc._ReInit();this.Sk._ReInit();this.Gx.
_ReInit();this.Gw._ReInit();this.Ua.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Sk.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((
B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmK:null,AqI:null,El:null,Text:null,String:A.jV,Bc8:A.jV,Kg:0x12
,AK1:0,AQ:0xFFFFFFFF,N3:0,AT$:0,A_H:0,Bc9:true,G2:function(CN){var LI=(A.Core.ARc.
isPrototypeOf(CN)?CN:null);if(!!LI)this.BBY(this);return A.Core.P.G2.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajf],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bc9){this.Bc8=E;this.Bc9=false;
}this.AK1=E.length;A.pe([this,this.Ajf],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajf],this);},A2:function(E){if(this.AmK===E)return;this.
AmK=E;A.pe([this,this.Ajf],this);},Ct:function(E){if(this.AqI===E)return;this.AqI=
E;A.pe([this,this.Ajf],this);},A5:function(E){if(E===this.Kg)return;this.Kg=E;this.
Text.A5(E);},Ajf:function(G){var B;var AK7=0;if(!this.AK1){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KQ(false);if(!!this.B6){AK7=
this.B6.Ym(this.String,0,this.AK1);if(AK7<(((B=this.M)[2]-B[0])-(2*this.Text.Ja)
)){this.Text.S(this.B6);this.Text.AwV(this.N3);return;}}this.Text.KQ(true);if(!!
this.AmK){AK7=this.AmK.Ym(this.String,0,this.AK1);this.Text.S(this.AmK);this.Text.
AwV(this.AT$);if((AK7<(((B=this.M)[2]-B[0])-(2*this.Text.Ja)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqI){this.Text.S(this.AqI);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.AwV((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BBY:function(G){this.R(this.Bc8);},Q3:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q3(E);},AR$:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Afc:function(AoF){return A.abf(this.M.slice(
0,2),this.Text.Afc(AoF));},AwV:function(E){if(this.N3===E)return;this.N3=E;A.pe([
this,this.Ajf],this);},BmO:function(E){if(this.AT$===E)return;this.AT$=E;A.pe([this
,this.Ajf],this);},BmP:function(E){if(this.A_H===E)return;this.A_H=E;A.pe([this,
this.Ajf],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHo);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHo);this.Text.R(Rk);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjL={Y:null,IK:null,AeG:null,I5:null,M6:null,AeA:null,AeF:null,AeE:null,AeB:
null,AeD:null,AeC:null,M8:null,NT:null,Mr:null,De:function(E){C.Yn.De.call(this,
E);this.IK.L(E);this.AeG.L(E);this.I5.L(E);this.M6.L(E);this.Mr.L(E);this.AeA.L(
E);this.M8.L(E);this.NT.L(E);this.AeF.L(E);this.AeE.L(E);this.AeB.L(E);this.AeD.
L(E);this.AeC.L(E);},DX:function(G){C.Yn.DX.call(this,G);this.XG(8,1,this.M6);this.
XG(12,1,this.Mr);this.XG(11,1,this.AeA);this.XG(7,1,this.M8);this.XG(14,1,this.NT
);this.XG(1,4,this.IK);this.XG(1,1,this.AeG);this.XG(4,1,this.I5);this.XG(22,1,this.
AeF);this.XG(26,1,this.AeE);this.XG(30,1,this.AeB);this.XG(19,1,this.AeD);this.XG(
31,1,this.AeC);this.Text.Z(!this.Y.TJ(null,0x1));},XG:function(AJg,Eb,AfP){var AA6=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Ade=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJg,Eb);if(!!Ade){AA6=true;switch(AJg){case 14:{var
Azl=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Ade)?Ade:null);if(!!Azl)AfP.
Aw(A._GetAutoObject(A.Device.Converter).A4G(Azl.A4));}break;case 7:{var Azl=(A.Device.
GenderFilterCriterion.isPrototypeOf(Ade)?Ade:null);if(!!Azl)AfP.Aw(A._GetAutoObject(
A.Device.Converter).AmM(Azl.A4));}break;case 1:if(Eb===4)AfP.Aw(A.aaL(A.ach.ADA)
);else if(Ade.Operator===4)AA6=false;break;case 22:switch(Ade.Operator){case 0:case
3:AfP.Aw(A.aaL(A.ach.AQq));break;default:AfP.Aw(A.aaL(A.ach.AjR));}break;case 26:
switch(Ade.Operator){case 0:case 3:AfP.Aw(A.aaL(A.ach.AQo));break;default:AfP.Aw(
A.aaL(A.ach.Avp));}break;default:;}}else if((AJg===1)&&(Eb===4)){AA6=true;AfP.Aw(
A.aaL(A.ach.Aew));}}else if((AJg===1)&&(Eb===4)){AA6=true;AfP.Aw(A.aaL(A.ach.Aew
));}AfP.Z(AA6);},_Init:function(aArg){C.Yn._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0);A.acg.Ap._Init.call(
this.AeG={I:this},0);A.acg.Ap._Init.call(this.I5={I:this},0);A.acg.Ap._Init.call(
this.M6={I:this},0);A.acg.Ap._Init.call(this.AeA={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.AeB={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeC={I:this},0);A.acg.Ap._Init.call(this.M8={I:this},0);A.acg.Ap._Init.call(
this.NT={I:this},0);A.acg.Ap._Init.call(this.Mr={I:this},0);this.__proto__=C.AjL;
this.Y.AZ(0x3F);this.Y.H(AHp);this.Y.JQ(3);this.IK.H(Aoi);this.AeG.H(Ax9);this.AeG.
Aj(true);this.I5.H(AV1);this.I5.Aj(true);this.M6.H(AV2);this.M6.Aj(true);this.AeA.
H(AV3);this.AeA.Aj(true);this.AeF.H(AHq);this.AeF.Aj(true);this.AeE.H(AHq);this.
AeE.Aj(true);this.AeB.H(AV4);this.AeB.Aj(true);this.AeD.H(AHr);this.AeD.Aj(true);
this.AeC.H(AHr);this.AeC.Aj(true);this.M8.H(AHs);this.M8.Aj(true);this.NT.H(AHt);
this.NT.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mr.H(AHs);this.Mr.Aj(true);
this.JW(this.Gv,-3);this.JW(this.D2,-3);this.JW(this.A_,-3);this.JW(this.AP,-2);
this.J(this.Y,-2);this.J(this.IK,-2);this.J(this.AeG,-2);this.J(this.I5,-2);this.
J(this.M6,-2);this.J(this.AeA,-2);this.J(this.AeF,-2);this.J(this.AeE,-2);this.J(
this.AeB,-2);this.J(this.AeD,-2);this.J(this.AeC,-2);this.J(this.M8,-2);this.J(this.
NT,-2);this.J(this.Mr,0);this.IK.Aw(A.aaL(A.ach.Aew));this.AeG.Aw(A.aaL(A.ach.AQf
));this.I5.Aw(A.aaL(A.ach.APG));this.M6.Aw(A.aaL(A.ach.ADu));this.AeA.Aw(A.aaL(A.
ach.Abx));this.AeF.Aw(A.aaL(A.ach.AjR));this.AeE.Aw(A.aaL(A.ach.Avp));this.AeB.Aw(
A.aaL(A.ach.AQd));this.AeD.Aw(A.aaL(A.ach.AQe));this.AeC.Aw(A.aaL(A.ach.AQc));this.
M8.Aw(A.aaL(A.ach.ADw));this.NT.Aw(A.aaL(A.ach.Avu));this.Mr.Aw(A.aaL(A.ach.ADD)
);},_Done:function(){this.__proto__=C.Yn;this.Y._Done();this.IK._Done();this.AeG.
_Done();this.I5._Done();this.M6._Done();this.AeA._Done();this.AeF._Done();this.AeE.
_Done();this.AeB._Done();this.AeD._Done();this.AeC._Done();this.M8._Done();this.
NT._Done();this.Mr._Done();C.Yn._Done.call(this);},_ReInit:function(){C.Yn._ReInit.
call(this);this.Y._ReInit();this.IK._ReInit();this.AeG._ReInit();this.I5._ReInit(
);this.M6._ReInit();this.AeA._ReInit();this.AeF._ReInit();this.AeE._ReInit();this.
AeB._ReInit();this.AeD._ReInit();this.AeC._ReInit();this.M8._ReInit();this.NT._ReInit(
);this.Mr._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yn.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amm={H7:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);this.H7.Gq();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Ra.CC.call(this,G);},AnZ:function(){C.Ra.
AnZ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).ByY(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.C8.L(A._GetAutoObject(
A.acj.Temperature).By1(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ls));this.JL.L(A._GetAutoObject(A.acj.Temperature).ByZ(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.HF.L(A.
_GetAutoObject(A.acj.Temperature).By0(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Ls));this.ME.L(this.JL.AQ);this.TemperatureUnit.
L(this.JL.AQ);}break;default:;}},AcB:function(){C.Ra.AcB.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cv(A.aaL(A.ach.AQy));this.N.C5(A.aaL(
A.ach.AmV));}break;case 4:{this.N.Cv(null);this.N.C5(A.aaL(A.ach.AvC));}break;default:;
}},WI:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ls>3240)&&(A._GetAutoObject(A.Device.
Device).Ls<5460)){A._GetAutoObject(A.Device.Device).AhJ();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H7.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Ls);var B1=A._GetAutoObject(A.Device.Converter).Asz(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls);this.H7.OnSetRatingTemperature(
B1);this.H7.Cg(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();
}break;case 4:this.AKu(this);break;default:;}},AkQ:function(G){C.Ra.AkQ.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dv(9);break;case 4:this.AKu(this);break;default:;}},AxM:function(
){C.Ra.AxM.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JL.R(A._GetAutoObject(A.acj.Temperature).By6(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));break;default:;}},AxN:function(
){C.Ra.AxN.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).Wx(A._GetAutoObject(A.acj.Temperature).By2(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ls));this.Jd.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wx(16711680
);this.Jd.Ar(true);}break;default:this.Jd.Ar(false);}},AUl:function(){this.C8.Aw(
A.aaL(A.ach.AvB));this.C8.Cu(A._GetAutoObject(A.acj.Temperature).By7(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.NR.Cu(
0);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.Amm;this.Dq(
C.II);this.H7=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Ra._Mark.
call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahv={N2:null,DK:null,Ij:null,Bc:null,Aun:null,String:A.jV,AxA:A.jV,Mv:7,Aj6:
2,KR:0,AUy:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aj6,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bi));else this.DK.S(A.aaL(A.fl.Ak));this.Ij.S(this.DK.B6);this.Ij.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WC],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahp:function(
E){if(this.AxA===E)return;this.AxA=E;this.Ij.R(E);},Ab1:function(E){this.Mv=E;if(
E<10)this.ASY(2);else if(E<40)this.ASY(1);else this.ASY(0);A.pe([this,this.WC],this
);},WC:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mv>1){var
Ac$=this.AOF();var A1J=this.AOD();var Apk=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az0;var AKU;var AtY;var Al3=null;if(!!this.N2&&(this.N2.AY>0))Al3=this.N2.KZ;
while((Ac$>=A1J)&&(Ac$>0)){var Atz=A._NewObject(C.Ajo,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj6)*(((Ac$-A1J)/86400)|0))/this.Mv)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj6)*((((Ac$-A1J)/86400)|0)+1))/this.Mv)|0;while(!!Al3&&(Al3.Timestamp>=
Ac$)){if(Al3.Timestamp<(Ac$+86400))Atz.Or(Al3.A4,Al3.Timestamp);Al3=Al3.Ah;}var At_=
0;if(Atz.AY>0)At_=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/Atz.AY
)|0;else if(this.Mv<10){At_=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
AtY=A._NewObject(A.acg.Text,0);AtY.H([x1,Apk,x2,Apk+At_]);AtY.S(A.aaL(A.fl.Bi));
AtY.L(A.jb.Text);AtY.R(A.aaR(A.acf.Ae_));this.J(AtY,0);}var AJI=Atz.KZ;var O=0;while(
!!AJI){if(O>=Atz.AY)throw new Error(AV5);Az0=A._NewObject(A.acg.AK,0);Az0.L(A._GetAutoObject(
A.acj.Assessment).Ql(AJI.A4));if(O===(Atz.AY-1))Az0.H([x1,Apk+(O*At_),x2,this.Bc.
M[1]]);else Az0.H([x1,Apk+(O*At_),x2,Apk+((O+1)*At_)]);this.J(Az0,0);AJI=AJI.Ah;
O=O+1;}if(this.AUy){var BxN=A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(
A.Device.Helper).Du());var BxM=A._GetAutoObject(A.Device.Helper).Aqi(Ac$);if(BxN===
BxM){var ALm=A._NewObject(A.acg.Aek,0);ALm.L(A.jb.Text);var Bdu=(x1+this.Aj6)+(((
x2-x1)/2)|0);ALm.H([Bdu-4,this.Bc.M[1]-4,Bdu+4,this.Bc.M[1]]);ALm.Zr(this.Aun);this.
J(ALm,0);}}Ac$=Ac$-86400;if(this.Aj6>0){AKU=A._NewObject(A.acg.AK,0);AKU.H([x1,Apk
,x1+this.Aj6,Apk+((((B=this.M)[3]-B[1])/2)|0)]);AKU.L(A.jb.Bc);this.J(AKU,0);}}}
},Ab3:function(E){this.N2=E;A.pe([this,this.WC],this);},ASY:function(E){if(this.
Aj6===E)return;this.Aj6=E;A.pe([this,this.WC],this);},De:function(E){if(this.KR===
E)return;this.KR=E;this.DK.L(E);this.Ij.L(E);},AOD:function(){var B;return this.
AOF()-(((((B=this.Mv)<0)?B+0x100000000:B)-1)*86400);},AOF:function(){return A._GetAutoObject(
A.Device.Converter).AhN();},BmS:function(E){if(this.AUy===E)return;this.AUy=E;A.
pe([this,this.WC],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ij={I:this},0
);A.acg.AK._Init.call(this.Bc={I:this},0);C.AxK._Init.call(this.Aun={I:this},0);
this.__proto__=C.Ahv;this.H(BD);this.Ar(false);this.DK.H(AHu);this.DK.Hl(5);this.
DK.A5(0x11);this.DK.L(A.jb.Text);this.Ij.H(AHu);this.Ij.Hl(5);this.Ij.A5(0x14);this.
Ij.L(A.jb.Text);this.Bc.H(AV6);this.Bc.L(A.jb.Bc);this.KR=A.jb.Text;this.Aun.H(AHv
);this.J(this.DK,0);this.J(this.Ij,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ij.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ij._Done();this.Bc._Done();this.Aun._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ij._ReInit();this.Bc._ReInit();this.Aun._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ij.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aun)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4M={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4M;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajo={KZ:null,MS:null,AY:0,Or:
function(A9,Qc){var Hf;Hf=A._NewObject(C.A4M,0);Hf.A4=A9;Hf.Timestamp=Qc;if(!this.
KZ){this.KZ=Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajo;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MH],this);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QF(X,Fh,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HH(X,true,null,null);this.DJ(this);},AlT:function(G){A._GetAutoObject(C.A$
).Fy();},ApF:function(G){var B;if(!!(C.Cn.isPrototypeOf(B=this.AV)?B:null).Agq)A.
pe((C.Cn.isPrototypeOf(B=this.AV)?B:null).Agq,this);},Fj:function(G){var B;this.
Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},DJ:function(G){var B;var GX=(C.Cn.isPrototypeOf(B=this.AV)?B:null);if(
!!GX){this.N.Hx(A.jV);this.N.CX(GX.AxD);this.N.Jc.Dj(255);this.N.HQ.Dj(GX.Aw$);this.
N.AE2(GX.Avc);this.N.Anr(GX.AmL);this.N.C1(GX.AP9);this.N.C5(GX.Aq0);GX.A2O(this
);}},MH:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rl);this.Background.L(A.jb.CS);this.N.H(W$);this.
N.Ar(false);this.N.Z(true);this.Y.H(Fe);this.Y.JQ(1);this.Ay.H(Is);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATF={Nz:null,ASF:null,AdZ:null,VC:null,GT:null,PopupTimeout:null,Ab7:null,AgB:
null,PopupIdToString:null,Atu:null,Text:A.jV,AkC:A.jV,AJ2:A.jV,AkX:0,AK9:-1,Azk:-
1,AKB:0,ATH:0,A1T:false,CP:function(){this.A97(this.PopupIdToString.BS(this.ATH)
);},Init:function(aArg){this.Boh(this);},Bgh:function(G){var B;if(this.AkX>0){this.
A_j((this.AkX/1000)|0);this.PopupTimeout.Ww(0);this.PopupTimeout.PP(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.Axz(this);},Bgd:function(G){var Qv=this.
Text;var AfS=this.AkC;var AKz=A.abi(16,A.jV,null);var index=0;var Azf=0;while(AfS
!==A.jV){Azf=AfS.indexOf(A.Device.PopupParamSeparator,0);if(Azf!==-1){AKz.Set(index
,A.ab1(AfS,Azf,(AfS.length-Azf)+1));AfS=A.ab1(AfS,0,Azf+1);index=index+1;if(index>=
16){A.ab5("%s",(AV7+AfS)+AV8);AfS=A.jV;}}else{AKz.Set(index,AfS);AfS=A.jV;}}index=
0;while(index<Qv.length){if((Qv.charCodeAt(index)||0)===0x7B){var Bc7=Qv.indexOf(
String.fromCharCode(0x7D),index);if(Bc7===-1){A.ab5("%s",(((AV9+Qv)+AV_)+index.toFixed(
))+Afy);index=Qv.length;}else{var Be0=(Bc7-index)-1;var A3o=A.abW(Qv,index+1,Be0
);var AKy=A.wz(A3o,-1,10);Qv=A.ab1(Qv,index,Be0+2);if(A3o===AV$)this.Bm9(index);
else if(((AKy>0)&&(AKy<=16))&&(this.AkC!==A.jV)){Qv=A.abU(Qv,AKz.Get(AKy-1),index
);if(this.A1T===true)this.Bm8(A.wz(AKz.Get(AKy-1),0,10));}else A.ab5("%s",(AWa+A3o
)+AWb);}}index=index+1;}this.Bm7(Qv);},CC:function(G){A.pe([this,this.Bgh],this);
},Ai:function(Ae){var B;this.AdZ.H(A.aaT(this.GT.Db(),AhU));this.VC.H(A.aaT(this.
GT.Db(),AhU));if(!!this.Nz){this.Nz.H(A.abM(this.Nz.M,this.GT.M[0]));this.Nz.H(A.
abO(this.Nz.M,this.GT.M[3]+10));this.Nz.H(A.abL(this.Nz.M,(B=this.GT.M)[2]-B[0])
);this.Nz.H(A.abI(this.Nz.M,8));this.AdZ.H(A.abh(A.aaT(this.GT.Db(),AhU),AHw));this.
VC.H(A.abh(A.aaT(this.GT.Db(),AhU),AHw));}else{this.AdZ.H(A.aaT(this.GT.Db(),AhU
));this.VC.H(A.aaT(this.GT.Db(),AhU));}},DE:function(G){var JA=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JA.CO===4)&&((this.VC.M[1]+this.M[1])<this.M[1])){this.GT.H(A.abO(
this.GT.M,this.GT.M[1]+28));this.Am();}else if((JA.CO===5)&&((this.VC.M[3]+this.
M[1])>this.N.M[1])){this.GT.H(A.abO(this.GT.M,this.GT.M[1]-28));this.Am();}if((JA.
CO===6)&&!!this.D_().CE)this.D_().AE$(1);else if((JA.CO===7)&&!!this.D_().Co)this.
D_().AE$(3);},IY:function(G){switch(this.D_().Ahf){case 1:this.AlT(this);break;case
3:this.ApF(this);break;case 2:this.AAw(this);break;case 0:break;default:A.ab5("%s%e"
,AWc,this.D_().Ahf);}},AlT:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApF:function(G){var B;(B=this.D_().Co)?B[1].call(B[0],this):null;},AAw:
function(G){var B;(B=this.D_().Ck)?B[1].call(B[0],this):null;},LN:function(G){this.
N.I6.L((this.N.I6.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
Axz(this);},A97:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgd],this);},Bz$:function(G){var B;this.A_j(this.Azk-1);if(this.Azk<=0){this.PopupTimeout.
Axz(this);(B=this.ASF)?B[1].call(B[0],this):null;}},A99:function(E){if(this.AkX===
E)return;this.AkX=E;A.pe([this,this.Bgh],this);},A9U:function(E){if(this.AkC===E
)return;this.AkC=E;A.pe([this,this.Bgd],this);},Bm7:function(E){if(this.AJ2===E)
return;this.AJ2=E;this.ABn(this);this.BxU(this);},ABn:function(G){if((this.Azk!==-
1)&&(this.AK9!==-1)){var ByI=this.Atu.Format(AWd);this.GT.R(A.abU(this.AJ2,ByI,this.
AK9));}else this.GT.R(this.AJ2);this.GT.H(AHx);},Bm9:function(E){if(this.AK9===E
)return;this.AK9=E;this.ABn(this);},A_j:function(E){if(this.Azk===E)return;this.
Azk=E;this.Atu.AFE(E);A.pe([this,this.ABn],this);},BxU:function(G){this.GT.Db();
if(this.GT.M[1]<=this.M[1])this.GT.H(A.abO(this.GT.M,28));this.Am();},A_l:function(
E){if(this.A1T===E)return;this.A1T=E;if(E===true)A.pe([this,this.BAJ],this);},BAJ:
function(G){if(!this.Nz){this.Nz=A._NewObject(A.acr.ADj,0);this.Nz.Ga(0);this.Nz.
EU(100);this.Nz.OnSetAppearance(this.Ab7);this.J(this.Nz,0);this.Ahy(this.Nz,this.
GT);}this.Nz.Bx(this.AKB);},Bm8:function(E){if(this.AKB===E)return;this.AKB=E;if(
!!this.Nz)this.Nz.Bx(this.AKB);},Boh:function(G){var B;this.N.Dj(0);this.AgB.AnO(
this);},BmI:function(E){if(this.ATH===E)return;this.ATH=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.AdZ={I:this},0);A.acg.BU._Init.
call(this.VC={I:this},0);A.acg.Text._Init.call(this.GT={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADk._Init.call(this.Ab7={I:this},
0);A.acl.Gl._Init.call(this.AgB={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.Atu={I:this},0);this.
__proto__=C.ATF;var B;this.H(Cc);this.Background.H(Fe);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.AdZ.H(AHy);this.
AdZ.L(A.jb.CJ);this.VC.H(AHy);this.VC.Ng(2);this.VC.L(A.jb.Text);this.GT.H(AHx);
this.GT.Hl(10);this.GT.I9(true);this.GT.Bm6(0);this.GT.KQ(true);this.GT.L(A.jb.Text
);this.PopupTimeout.PP(0);this.Ab7.A_c(0);this.Ab7.A_a(A.jb.AV);this.Ab7.A9$(0);
this.Ab7.AFU(AHd);this.AgB.HM(1);this.AgB.B2=255;this.AgB.Cw=0;this.JW(this.Ej,-
1);this.J(this.AdZ,0);this.J(this.VC,0);this.J(this.GT,0);this.GT.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mz=[this,this.Bz$];this.Ab7.A_b(A.aaL(A.ach.NS));this.Ab7.A9_(
A.aaL(A.ach.NS));this.AgB.Q=[B=this.N,B.Awc,B.AZU];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.AdZ._Done();this.VC._Done();this.GT._Done();this.PopupTimeout.
_Done();this.Ab7._Done();this.AgB._Done();this.PopupIdToString._Done();this.Atu.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
AdZ._ReInit();this.VC._ReInit();this.GT._ReInit();this.PopupTimeout._ReInit();this.
Ab7._ReInit();this.AgB._ReInit();this.PopupIdToString._ReInit();this.Atu._ReInit(
);this.GT.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASF)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Atu)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mn={Ai:function(Ae
){C.Cn.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=A.jb.Text;
GW=A.jb.Bm;}if(!this.LF){this.Background.L(FQ);this.V.L(A.jb.AmW);}else if(this.
Qp){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}},_Init:function(
aArg){C.Cn._Init.call(this,aArg);this.__proto__=C.Mn;},_className:"Application::DarkThemeMenuItem"
};C.Anb={Ady:0,_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=C.
Anb;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaC:function(G){A.
_GetAutoObject(A.Device.Device).Dv(0);},Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Co=[this,this.A2P];this.BP.Ck=null;this.BP.CE=[this,this.AaC];this.
BP.CX(A.aaR(A.acf.Ok));this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Aeu));}return this.
BP;},A2P:function(G){var B;if(!!(C.Cn.isPrototypeOf(B=this.AV)?B:null))(C.Cn.isPrototypeOf(
B=this.AV)?B:null).IY(this);},CC:function(G){},AID:function(s){this.CC(s);},E4:function(
G){},Ayy:function(s){this.E4(s);},_Init:function(aArg){C.Abd._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APC={V6:
null,YK:null,YE:null,Init:function(aArg){this.Bb(this.V6);},Adp:function(G){var Aa=(
C.Cn.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YK)A._GetAutoObject(A.Device.
Device).A6(6,true,A.jV,0,[this,this.BAX]);else if(Aa===this.V6)A._GetAutoObject(
A.Device.Device).A6(9,true,A.jV,0,[this,this.BBi]);else if(Aa===this.YE)A._GetAutoObject(
C.A$).Cf(4);else throw new Error(Ax_);A._GetAutoObject(A.Device.Device).Dv(0);},
BAX:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGg();},BBi:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).Axq();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mn._Init.call(this.V6={I:this},0);C.Mn._Init.call(this.YK={I:this
},0);C.Mn._Init.call(this.YE={I:this},0);this.__proto__=C.APC;this.H(AcK);this.V6.
H(BD);this.V6.Ar(true);this.V6.T(A.aaR(A.acf.A_Z));this.V6.Bh(true);this.YK.H(IT
);this.YK.Ar(true);this.YK.T(A.aaR(A.acf.A_G));this.YK.Bh(true);this.YE.H(P9);this.
YE.Ar(true);this.YE.T(A.aaR(A.acf.SP));this.YE.Bh(true);this.J(this.V6,0);this.J(
this.YK,0);this.J(this.YE,0);this.V6.AR=[this,this.Adp];this.YK.AR=[this,this.Adp
];this.YE.AR=[this,this.Adp];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V6._Done();this.YK._Done();this.YE._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V6._ReInit(
);this.YK._ReInit();this.YE._ReInit();this.V6.T(A.aaR(A.acf.A_Z));this.YK.T(A.aaR(
A.acf.A_G));this.YE.T(A.aaR(A.acf.SP));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GJ={Aaz:null,OverlayMenu:null,WE:null,A3I:null
,K$:null,A3n:null,AkD:null,N0:null,Az6:100,Init:function(aArg){var B;A.zX([this,
this.Ber],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyI],0);A.zX([this,this.Bel
],[B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZS],0);A.zX([this,this.A2G],[B=A.
_GetAutoObject(A.Device.Device),B.Av3,B.AyB],0);A.zX([this,this.BzH],[B=A._GetAutoObject(
A.Device.Device),B.Av0,B.AyA],0);A.zX([this,this.BzI],[B=A._GetAutoObject(A.Device.
Device),B.A78,B.BaB],0);A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device
),B.ASw,B.AZ0],0);A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Wt
,B.Xa],0);A.pe([this,this.Ber],this);A.pe([this,this.Bel],this);A.pe([this,this.
ApG],this);A.pe([this,this.BeI],this);this.A3I.At([B=this.WE,B.AEm,B.Zj]);this.J(
this.WE,0);this.Bb(this.WE);this.Bxx(this);},Ai:function(Ae){},Bel:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AD$){if(!this.Aaz){this.Aaz=A._NewObject(
C.Asl,0);this.Aaz.H(A.abJ(this.Aaz.M,this.WE.M.slice(0,2)));this.Aaz.H(A.abO(this.
Aaz.M,this.WE.M[3]-((B=this.Aaz.M)[3]-B[1])));this.J(this.Aaz,1);}}else{if(!!this.
Aaz)this.HN(this.Aaz);this.Aaz=null;}},Ber:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dv(null);break;case 1:this.Dv(A._NewObject(
C.APC,0));break;case 8:this.Dv(A._NewObject(C.ALU,0));break;case 2:this.Dv(A._NewObject(
C.ALR,0));break;case 3:this.Dv(A._NewObject(C.ALX,0));break;case 4:this.Dv(A._NewObject(
C.ATY,0));break;case 5:this.Dv(A._NewObject(C.AVs,0));break;case 6:this.Dv(A._NewObject(
C.ATA,0));break;case 7:this.Dv(A._NewObject(C.Amo,0));break;case 11:this.Dv(A._NewObject(
C.AMq,0));break;case 12:this.Dv(A._NewObject(C.AMp,0));break;case 9:this.Dv(A._NewObject(
C.ARw,0));break;case 10:this.Dv(A._NewObject(C.AMl,0));break;case 14:this.Dv(A._NewObject(
C.ARs,0));break;case 15:this.Dv(A._NewObject(C.ARt,0));break;case 13:this.Dv(A._NewObject(
C.ARu,0));break;case 16:this.Dv(A._NewObject(C.AMM,0));break;default:throw new Error(
AWe+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dv:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.Wz).Arx(
null);this.N0.Aqy(this.OverlayMenu,A._GetAutoObject(C.Axt),null,null,[B=this.OverlayMenu
,B.Ayy],null,true);this.Bb(this.WE);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N0.AkF(this.OverlayMenu,A._GetAutoObject(C.Axs),null,null,null,null,null,[B=this.
OverlayMenu,B.AID],null,false);this.Bb(this.N0);A._GetAutoObject(C.Wz).Arx(this.
OverlayMenu.Ll());}else if(!!this.K$){this.Bb(this.N0);A._GetAutoObject(C.Wz).Arx(
this.K$.Akk().Ll());}},Ahk:function(E){var B;if(this.K$===E)return;if(!!this.K$){
A._GetAutoObject(C.Wz).Arx(null);this.N0.Aqy(this.K$.Akk(),A._GetAutoObject(C.Afe
),null,null,[B=this.K$.Akk(),B.Ayy],null,false);this.Bb(this.WE);}this.K$=E;if(!
!this.K$){this.N0.AkF(this.K$.Akk(),A._GetAutoObject(C.Afe),null,null,null,null,
null,[this,this.Bk4],null,false);this.Bb(this.N0);A._GetAutoObject(C.Wz).Arx(this.
K$.Akk().Ll());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
Wz).Arx(this.OverlayMenu.Ll());}},Bxx:function(G){var B;var F;this.J(this.A3n,0);(
F=A._GetAutoObject(C.Wz),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wz).M)[3]-B[1]))));this.ZA(this.N0);},A2G:function(G){if(A._GetAutoObject(A.Device.
Device).Amv)switch(A._GetAutoObject(A.Device.Device).KG){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Ahr(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa0<98)A._GetAutoObject(C.A$).Cf(4);}else{this.Az6=100;this.Bcc();}},BzH:
function(G){this.Bcc();},Bcc:function(){if(!A._GetAutoObject(A.Device.Device).Amv
){if(A._GetAutoObject(A.Device.Device).Aa0<=2){if(this.Az6>2)switch(A._GetAutoObject(
A.Device.Device).KG){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Ahr(38);
break;default:A._GetAutoObject(C.A$).Cf(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa0<=10){if(this.Az6>10)switch(A._GetAutoObject(A.Device.Device).KG){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Ahr(39);break;default:A._GetAutoObject(
C.A$).Cf(39);}}else if(A._GetAutoObject(A.Device.Device).Aa0<=20){if(this.Az6>20
)switch(A._GetAutoObject(A.Device.Device).KG){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Ahr(39);break;default:A._GetAutoObject(C.A$).Cf(39);}}else switch(A._GetAutoObject(
A.Device.Device).KG){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fy();break;default:;
}this.Az6=A._GetAutoObject(A.Device.Device).Aa0;}},BzI:function(G){switch(A._GetAutoObject(
A.Device.Device).Aql){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A6(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anp(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A6(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anp(0
);}break;default:A.ab5("%s",AWf+A._GetAutoObject(A.Device.Device).Aql.toFixed());
}},ApG:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dv(0);A._GetAutoObject(C.A$).Cf(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KG===5)A._GetAutoObject(C.A$).Ahr(3);break;
default:;}},BeI:function(G){switch(A._GetAutoObject(A.Device.Device).AhP){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Ul(false);break;case 5:{A._GetAutoObject(
A.Device.Device).Wx(65535);A._GetAutoObject(A.Device.Device).Ul(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Wx(255);A._GetAutoObject(A.Device.Device).Ul(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wx(16776960);A._GetAutoObject(
A.Device.Device).Ul(true);}break;case 6:{A._GetAutoObject(A.Device.Device).Wx(16711935
);A._GetAutoObject(A.Device.Device).Ul(true);}break;default:A.ab5("%s",AWg+A._GetAutoObject(
A.Device.Device).AhP.toFixed());}},Bk4:function(G){var B;this.K$.Akk().CC(this);
this.K$.Bz9(this);},Bj8:function(){return this.K$;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkD._Init.call(this.AkD={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GJ;this.H(Cc);this.N0.H(Rl);this.J(this.N0,0);this.
WE=A._NewObject(C.WE,0);this.A3I=A._GetAutoObject(C.A$);this.AkD.ANr=[this,this.
Bj8,this.Ahk];this.A3n=A._GetAutoObject(C.Wz);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkD._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkD._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Aaz)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3I)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3n)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abd={A_v:null,BP:null,N:null,Cq:null,Am4:null,Am6:null,QP:null,Am5:null,Am2:
null,Am8:null,Am3:null,DE:function(G){var Fh=0;var X=this.AV;switch(this.Cq.CO){
case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QF(X,Fh,0x14);if(!!X)this.Bb(X);},Ba9:function(s){this.DE(s);},AlT:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);if(D5.Acc&&(this.D_().Asf===false)
)return;A.pe(this.D_().CE,this);},AIR:function(s){this.AlT(s);},ApF:function(G){
var D5=(A.Core.BK.isPrototypeOf(G)?G:null);if(D5.Acc&&(this.D_().Zz===false))return;
A.pe(this.D_().Co,this);},AIU:function(s){this.ApF(s);},IY:function(G){if(this.QP.
Acc)return;},Atb:function(s){this.IY(s);},AAw:function(G){var D5=(A.Core.BK.isPrototypeOf(
G)?G:null);if(D5.Acc&&(this.D_().Zy===false))return;A.pe(this.D_().Ck,this);},AIT:
function(s){this.AAw(s);},D_:function(){if(!!this.Ll())return this.BP;else return this.
N;},Ll:function(){return this.BP;},GQ:function(E){this.A_v=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Am4={I:this},0);A.Core.BK._Init.
call(this.Am6={I:this},0);A.Core.BK._Init.call(this.QP={I:this},0);A.Core.BK._Init.
call(this.Am5={I:this},0);A.Core.BK._Init.call(this.Am2={I:this},0);A.Core.BK._Init.
call(this.Am8={I:this},0);A.Core.BK._Init.call(this.Am3={I:this},0);this.__proto__=
C.Abd;this.H([0,0,C.Aso[0],C.Aso[1]]);this.N.H(W$);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Am4.Filter=26;this.Am6.Filter=28;this.QP.Filter=1;this.
Am5.Filter=27;this.Am2.Filter=44;this.Am8.Filter=9;this.Am3.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.Ba9];this.Cq.D1=[this,this.Ba9];this.Am4.BL=[this,this.
AIR];this.Am4.D1=[this,this.AIR];this.Am6.BL=[this,this.AIU];this.Am6.D1=[this,this.
AIU];this.QP.BL=[this,this.Atb];this.QP.D1=[this,this.Atb];this.Am5.BL=[this,this.
AIT];this.Am5.D1=[this,this.AIT];this.Am2.BL=[this,this.AIR];this.Am2.D1=[this,this.
AIR];this.Am8.BL=[this,this.AIU];this.Am8.D1=[this,this.AIU];this.Am3.BL=[this,this.
AIT];this.Am3.D1=[this,this.AIT];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Am4._Done();this.Am6._Done();this.QP._Done();this.
Am5._Done();this.Am2._Done();this.Am8._Done();this.Am3._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Am4._ReInit();this.Am6._ReInit();this.QP._ReInit();this.Am5._ReInit(
);this.Am2._ReInit();this.Am8._ReInit();this.Am3._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_v)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axs={_Init:function(){A.acl.AGE._Init.call(this,0);this.Kg=0x22;this.Ad3=true;
this.AuR=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axt={_Init:function(){A.acl.AGE._Init.call(this,0);this.Kg=0x22;this.Ad3=true;
this.AuR=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUw={R$:function(){var B;var Ao=(A.acl.Ae8.isPrototypeOf(B=A.acl.Aeh.R$.call(this
))?B:null);if(!Ao)throw new Error(AsV);Ao.Cp.Cw=100;return Ao;},R_:function(){var
B;var Ao=(A.acl.Axa.isPrototypeOf(B=A.acl.Aeh.R_.call(this))?B:null);if(!Ao)throw new
Error(AsV);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aeh._Init.call(this
,aArg);this.__proto__=C.AUw;},_className:"Application::ShadeTransition"};C.AmR={
Ag3:null,SU:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC2:true,De:function(E){
C.BQ.De.call(this,E);this.SU.L(E);this.HP.L(E);this.Ag3.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Ae_)
);else this.HP.R(E.toFixed());},AbZ:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SU.R(A.aaR(A.acf.Ae_));else this.SU.R(E.toFixed());},DX:function(
G){},Nm:function(s){this.DX(s);},A9C:function(E){if(this.AC2===E)return;this.AC2=
E;this.SU.Z(this.AC2);this.Ag3.Z(this.AC2);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag3={I:this},0);A.acg.Text._Init.call(this.SU={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmR;this.Ag3.H(AWh);this.SU.H(AWi);this.SU.A5(0x11);this.
SU.R(A.aaR(A.acf.Ae_));this.HP.H(AWj);this.HP.A5(0x11);this.HP.R(A.aaR(A.acf.Ae_
));this.DS.H(AWk);this.J(this.Ag3,0);this.J(this.SU,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag3.Aw(A.aaL(A.ach.AQj));this.SU.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag3._Done();this.SU._Done(
);this.HP._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag3._ReInit();this.SU._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SU.R(A.aaR(A.acf.Ae_));this.HP.R(A.aaR(A.acf.Ae_));this.SU.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADa={Init:function(
aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SF
],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8p,B.Anv],0);
A.zV([this,this.Nm],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nm],[
B=A._GetAutoObject(A.Device.Helper).W,B.PN,B.EB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Helper).W,B.A82,B.Aw8],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8g,B.AeY],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8h,B.Uj],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8k,B.Ae2],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8o,B.
Ae4],0);A.pe([this,this.Nm],this);},De:function(E){C.AmR.De.call(this,E);this.DS.
De(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqR()){this.AbZ(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.AbZ(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AEW(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.AeY(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uj(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae2(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae4(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmR._Init.call(this,aArg);this.
__proto__=C.ADa;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kj={AhK:A.abi(3,A.jV,null),Cb:A.abi(3,0,{0:7,1:30,2:90}),Anf:3,Dt:function(){
if(this.Anf<3)return this.Anf;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Anf))return-1;return this.Cb.Get(aIndex);},Gk:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Anf))return AWl;return this.AhK.Get(aIndex);},DZ:function(
A9){var O=0;while((O<3)&&(O<=this.Anf)){if(this.Cb.Get(O)===A9)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Anf)){if(this.Cb.Get(
O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhK=[]).__proto__=C.Kj.AhK;(this.Cb=[]).__proto__=C.Kj.Cb;this.
__proto__=C.Kj;this.AhK.Set(0,A.aaR(A.acf.A65));this.AhK.Set(1,A.aaR(A.acf.A63));
this.AhK.Set(2,A.aaR(A.acf.A64));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhK.Set(0,A.aaR(A.acf.A65));this.AhK.Set(1,A.aaR(A.acf.A63));this.AhK.Set(2,A.aaR(
A.acf.A64));},_className:"Application::Days"};C.AUt={Amq:null,BT:null,Q4:null,QC:
null,A$j:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAr],[B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ata],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Dr.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWm+A._GetAutoObject(
A.Device.Converter).AkV((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlC());this.H4.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6q())&&(
Fu||GE));},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},J$:function(G){var F;var BO=this.AM;C.Dr.J$.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6q()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J6:function(G){var F;var BO=this.
AM;C.Dr.J6.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_e:function(E){if(this.A$j===E)return;
this.A$j=E;this.Am();},BAr:function(G){this.Am();},_Init:function(aArg){C.Dr._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amq={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AK._Init.call(this.Q4={I:this},0);A.acg.Ap._Init.call(this.QC={
I:this},0);this.__proto__=C.AUt;this.H(UT);this.Background.H(UT);this.V.H(AsW);this.
V.L(A.jb.Bm);this.Amq.H(AWn);this.Amq.L(A.jb.Afp);this.Hw.H(AWo);this.BT.H(AWp);
this.BT.A5(0x12);this.BT.L(A.jb.Text);this.H4.H(AWq);this.Q4.H(AWr);this.Q4.L(A.
jb.E1);this.QC.H(AWs);this.J(this.Amq,-2);this.J(this.BT,-1);this.J(this.Q4,0);this.
J(this.QC,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QC.Aw(A.aaL(A.ach.ADr));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dr;this.Amq._Done();this.BT._Done();this.Q4.
_Done();this.QC._Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.
call(this);this.Amq._ReInit();this.BT._ReInit();this.Q4._ReInit();this.QC._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.
Amq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_N={Q:null
,AiY:null,Init:function(aArg){var B;A.zX([this,this.Bd0],[B=A._GetAutoObject(A.Device.
Device),B.AEm,B.Bav],0);A.pe([this,this.Bd0],this);},At:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahr:function(Alf){A._GetAutoObject(A.Device.Device).Zj(Alf
);},Bd0:function(G){var F;if(!this.Q){A.ab5("%s",AWt);return;}var By=null;if(this.
AiY.Contains(A._GetAutoObject(A.Device.Device).KG)){By=this.AiY.A_t();while(!!By&&(
By.AnY!==A._GetAutoObject(A.Device.Device).KG))By=this.AiY.A_t();}if(!By)By=this.
By5(A._GetAutoObject(A.Device.Device).KG);(F=this.Q,F[2].call(F[0],By));},By5:function(
Alf){var By=null;switch(Alf){case 0:case 1:By=A._NewObject(C.AUB,0);break;case 2:
By=A._NewObject(C.XV,0);break;case 3:By=A._NewObject(C.Avn,0);break;case 53:By=A.
_NewObject(C.AVg,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=
A._NewObject(C.ARM,0);break;case 6:By=A._NewObject(C.ARl,0);break;case 16:By=A._NewObject(
C.ANz,0);break;case 22:By=A._NewObject(C.AVb,0);break;case 17:By=A._NewObject(C.
AUS,0);break;case 42:By=A._NewObject(C.ANw,0);break;case 87:By=A._NewObject(C.AT6
,0);break;case 88:By=A._NewObject(C.AT5,0);break;case 89:By=A._NewObject(C.AU9,0
);break;case 95:By=A._NewObject(C.AU$,0);break;case 23:By=A._NewObject(C.AVz,0);
break;case 18:By=A._NewObject(C.ANM,0);break;case 19:By=A._NewObject(C.AT7,0);break;
case 37:By=A._NewObject(C.AQO,0);break;case 76:By=A._NewObject(C.ATN,0);break;case
63:By=A._NewObject(C.ANK,0);break;case 64:By=A._NewObject(C.ANL,0);break;case 82:
By=A._NewObject(C.ANJ,0);break;case 83:By=A._NewObject(C.ANH,0);break;case 92:By=
A._NewObject(C.ANF,0);break;case 93:By=A._NewObject(C.ANI,0);break;case 65:By=A.
_NewObject(C.ANG,0);break;case 5:By=A._NewObject(C.AUL,0);break;case 4:By=A._NewObject(
C.Ad5,0);break;case 39:By=A._NewObject(C.AM8,0);break;case 38:By=A._NewObject(C.
ANp,0);break;case 28:By=A._NewObject(C.Wo,0);break;case 7:By=A._NewObject(C.AqB,
0);break;case 81:By=A._NewObject(C.ANU,0);break;case 31:By=A._NewObject(C.Ark,0);
break;case 78:By=A._NewObject(C.ARK,0);break;case 34:By=A._NewObject(C.ALP,0);break;
case 35:By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(
C.SetTransponderScreen,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen
,0);break;case 49:By=A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:
By=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(
C.MotherScanScreen,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;
case 8:By=A._NewObject(C.GZ,0);break;case 9:By=A._NewObject(C.I2,0);break;case 24:
By=A._NewObject(C.AL6,0);break;case 10:By=A._NewObject(C.Amm,0);break;case 21:By=
A._NewObject(C.AL_,0);break;case 11:By=A._NewObject(C.AL9,0);break;case 29:By=A.
_NewObject(C.Auy,0);break;case 48:By=A._NewObject(C.AL8,0);break;case 30:By=A._NewObject(
C.AL7,0);break;case 12:By=A._NewObject(C.AL5,0);break;case 40:By=A._NewObject(C.
AL4,0);break;case 14:By=A._NewObject(C.ANn,0);break;case 13:By=A._NewObject(C.ANo
,0);break;case 20:By=A._NewObject(C.AVq,0);break;case 41:By=A._NewObject(C.AVp,0
);break;case 43:By=A._NewObject(C.AOw,0);break;case 44:By=A._NewObject(C.AOv,0);
break;case 61:By=A._NewObject(C.ANT,0);break;case 62:By=A._NewObject(C.ANS,0);break;
case 46:By=A._NewObject(C.ARZ,0);break;case 47:By=A._NewObject(C.ARY,0);break;case
85:By=A._NewObject(C.AVF,0);break;case 86:By=A._NewObject(C.AVE,0);break;case 71:
By=A._NewObject(C.ARU,0);break;case 72:By=A._NewObject(C.ART,0);break;case 74:By=
A._NewObject(C.AMN,0);break;case 90:By=A._NewObject(C.ATP,0);break;case 73:By=A.
_NewObject(C.AT8,0);break;case 51:By=A._NewObject(C.ALT,0);break;case 52:By=A._NewObject(
C.ALS,0);break;case 15:By=A._NewObject(C.ATV,0);break;case 60:By=A._NewObject(C.
AUR,0);break;case 69:By=A._NewObject(C.ARj,0);break;case 70:By=A._NewObject(C.ARi
,0);break;case 26:By=A._NewObject(C.ARN,0);break;case 54:By=A._NewObject(C.ARJ,0
);break;case 25:By=A._NewObject(C.AN7,0);break;case 66:By=A._NewObject(C.AN8,0);
break;case 59:By=A._NewObject(C.AN6,0);break;case 58:By=A._NewObject(C.AN9,0);break;
case 56:By=A._NewObject(C.AN_,0);break;case 57:By=A._NewObject(C.AqE,0);break;case
68:By=A._NewObject(C.AN$,0);break;case 67:By=A._NewObject(C.AN4,0);break;case 84:
By=A._NewObject(C.AMa,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;
case 36:By=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:By=A._NewObject(C.AMn,0);break;case 91:
By=A._NewObject(C.AUX,0);break;case 94:By=A._NewObject(C.Ap_,0);break;default:throw new
Error(AWu);}if(!!By)By.AnY=Alf;return By;},Cf:function(Alf){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWv);else this.AiY.Bny((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zj(Alf);},Fy:function(){var Bfe=3;var Bfd=this.AiY.
Bnn();if(!!Bfd)Bfe=Bfd.AnY;else A.ab5("%s",AWw);A._GetAutoObject(A.Device.Device
).Zj(Bfe);},_Init:function(aArg){C.A_P._Init.call(this.AiY={I:this},0);this.__proto__=
C.A_N;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.AiY._Done(
);A.h7--;},_ReInit:function(){this.AiY._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_N._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AF9={H7:null,Yp:null,Afa:null,AaF:null,MB:null,Azq:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yp.R(this.BcK(this.RatedAttribute));this.AKt(this);},Ai:function(
Ae){this.MB.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.ARA),P8,this.Azq.
toFixed()));if(this.RatingMode===1)this.MB.Z(true);else this.MB.Z(false);},CC:function(
G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);this.H7.Gq();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axl(this.H7,5);A.zX([this,this.AKt],[B=A._GetAutoObject(
A.Device.Device),B.ASt,B.AZX],0);A.zX([this,this.AKt],[B=A._GetAutoObject(A.Device.
Helper).W,B.PN,B.EB],0);A.pe([this,this.AKt],this);},Asw:function(G){var a=this.
AJ_(this.RatedAttribute);this.Bfv();this.Azq=this.Azq-1;this.Am();if(!a)this.ARH(
);else this.SE(a);},WI:function(G){var a=this.BcR(this.RatedAttribute);this.Bfv(
);this.Azq=this.Azq+1;this.Am();if(!a)this.A7q();else this.SE(a);},AJ_:function(
Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHz);},BcR:
function(Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHz);},SE:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yp.R(this.BcK(E));this.DJ(E);this.Afa.AnA(this.H7.Bii(E));if(!this.AJ_(E)
){if(this.AQX())this.N.Cv(A.aaL(A.ach.Aex));else this.N.Cv(null);}else this.N.Cv(
A.aaL(A.ach.Aeu));},BcK:function(Np){return this.AaF.BS(Np);},By4:function(Np){if(
!!Np){var a=this.AJ_(Np);if(!a)return A.jV;else return this.BcL(a);}else return A.
jV;},By3:function(Np){if(!!Np){var a=this.BcR(Np);if(!a)return A.jV;else return this.
BcL(a);}else return A.jV;},ARH:function(){},A7q:function(){},A6r:function(){return null;
},BcL:function(Np){return this.AaF.Lt(Np);},Bfv:function(){if(!!this.RatedAttribute
)this.H7.Bn6(this.RatedAttribute,this.Afa.A4);},AKt:function(G){if(this.AQX())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
SE(2);this.DJ(this.RatedAttribute);this.Am();},Adq:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(4);},AkQ:function(G){var a=this.AJ_(this.RatedAttribute
);if(!a){if(this.AQX())this.Adq(this);}else this.ARH();},DJ:function(Np){this.N.
Hx(this.By4(Np));if(!!this.N.AnT){this.N.C1(null);this.N.ON(true);}else{this.N.C1(
A.aaL(A.ach.Aeu));this.N.ON(false);}this.N.CX(this.By3(Np));if(!!this.N.AnV){this.
N.C5(null);this.N.OO(true);}else{this.N.C5(this.A6r());this.N.OO(false);}},AQX:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Ak8,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yp={I:this},0);C.Rating._Init.call(this.Afa={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaF={I:this},0);A.acg.Text._Init.call(this.
MB={I:this},0);this.__proto__=C.AF9;this.Background.L(A.jb.CJ);this.N.Z(true);this.
Dq(C.II);this.Yp.H(AWx);this.Yp.KQ(true);this.Yp.L(A.jb.Text);this.Afa.H(AWy);this.
MB.H(AWz);this.MB.A5(0x14);this.MB.R(A.aaR(A.acf.ARA));this.MB.L(A.jb.Text);this.
J(this.Yp,0);this.J(this.Afa,0);this.J(this.MB,0);this.Bb(this.Afa);this.N.CE=[this
,this.Asw];this.N.Ck=[this,this.AkQ];this.N.Co=[this,this.WI];this.Yp.S(A.aaL(A.
fl.Af));this.Afa.AR=[this,this.WI];this.MB.S(A.aaL(A.fl.Af));this.H7=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yp._Done();this.Afa.
_Done();this.AaF._Done();this.MB._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yp._ReInit();this.Afa._ReInit();this.AaF._ReInit(
);this.MB._ReInit();this.MB.R(A.aaR(A.acf.ARA));this.Yp.S(A.aaL(A.fl.Af));this.MB.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jf:
null,Pk:null,AsL:null,BZ:null,C$:null,C9:null,CG:null,Gm:null,Ay:null,KH:0,Init:
function(aArg){A.zX([this,this.Ba7],this.BZ.Q,0);A.pe([this,this.Ba7],this);A.pe([
this,this.AA4],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANk(this.Y);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QF(X,Fh,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HH(X,true,null,null);this.AA4(this);},Fj:function(G){var B;this.Ay.Mw((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},AeT:function(E){if(this.KH===E)return;this.KH=E;A.abo([this,this.Av1,this.
AeT],0);},AA4:function(G){var B;var GX=(C.Cn.isPrototypeOf(B=this.AV)?B:null);this.
N.Hx(A.jV);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[this,this.AIQ];if(!!GX&&!!GX.Ami
){this.N.FN(A.jV);this.N.Jx.Dj(255);this.N.ArH(GX.AqJ);this.N.Cv(GX.Avx);this.N.
Ck=GX.Ami;}else{this.N.FN(A.jV);this.N.Cv(null);this.N.Ck=null;}if(!!GX&&!!GX.Agq
){this.N.CX(GX.AxD);this.N.HQ.Dj(GX.Aw$);this.N.Anr(GX.AmL);this.N.C5(GX.Aq0);this.
N.Co=GX.Agq;}else this.Aua();},Agb:function(G){A.ab5("%s",Ax$);},AyL:function(s){
this.Agb(s);},Ev:function(G){A.ab5("%s",Ax$);},AIQ:function(s){this.Ev(s);},Aua:
function(){A.ab5("%s",Ak9);},AAp:function(G){A.ab5("%s",Ax$);},AcO:function(s){this.
AAp(s);},JF:function(Ag){this.Bb(Ag);this.Y.HH(Ag,true,null,null);this.Y.Vt(null
,null);},ApB:function(G){var F;this.C9.Aho(A._GetAutoObject(A.Device.Helper).Abl((
F=this.BZ.Q,F[1].call(F[0]))));},Ba7:function(s){this.ApB(s);},Av1:function(){return this.
KH;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UL._Init.call(
this.Jf={I:this},0);A.Device.M0._Init.call(this.Pk={I:this},0);A.Device.KW._Init.
call(this.AsL={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.
C$={I:this},0);C.AkO._Init.call(this.C9={I:this},0);C.Axo._Init.call(this.CG={I:
this},0);C.Asr._Init.call(this.Gm={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.HY;var B;this.N.Z(true);this.Dq(C.II);this.Y.H(Fe);this.Y.JQ(
1);this.KH=A._GetAutoObject(A.Device.Helper).Abl(this.AnimalType.Q);this.BZ.H(AhV
);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afo));this.C$.H(Aya);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afj));this.C9.H(Aoj);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KH)
);this.C9.Ga(1000);this.C9.EU(99000);this.C9.Aho(A._GetAutoObject(A.Device.Helper
).Abl(this.AnimalType.Q));this.CG.H(AhW);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gm.H(AWA);this.Gm.Aj(true);this.Gm.T(A.aaR(A.acf.Jf));this.Ay.H(Ayb
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.C9,0);this.J(
this.CG,0);this.J(this.Gm,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Gender.
LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.
Helper).W);this.Breed.LY(A._GetAutoObject(A.Device.Helper).W);this.Jf.LY(A._GetAutoObject(
A.Device.Helper).W);this.BZ.At([B=this.AnimalType,B.B_,B.B$]);this.BZ.CK(this.AnimalType
);this.C$.At([B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.C9.At([this
,this.Av1,this.AeT]);this.CG.Gr([this,this.D_,this.GQ]);this.CG.LX([B=this.CG,B.
FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.
CK(this.Breed);this.CG.Anq(this.Pk);this.Gm.Gr([this,this.D_,this.GQ]);this.Gm.LX([
B=this.Gm,B.FU]);this.Gm.L0(A.aaL(A.ach.Edit));this.Gm.At([B=this.Jf,B.B_,B.B$]);
this.Gm.CK(this.Jf);this.Gm.Anq(this.AsL);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed.
_Done();this.Jf._Done();this.Pk._Done();this.AsL._Done();this.BZ._Done();this.C$.
_Done();this.C9._Done();this.CG._Done();this.Gm._Done();this.Ay._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jf._ReInit();this.
Pk._ReInit();this.AsL._ReInit();this.BZ._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gm._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Afo
));this.C$.T(A.aaR(A.acf.Afj));this.C9.T(A.aaR(A.acf.KH));this.CG.T(A.aaR(A.acf.
Breed));this.Gm.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wo={Ay1:false,LN:function(G){if(A._GetAutoObject(A.Device.Device).An.Lf())A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gq();A._GetAutoObject(A.Device.Helper
).Aqb(A._GetAutoObject(A.Device.Helper).W);},Aua:function(){this.N.CX(A.jV);this.
N.C5(A.aaL(A.ach.ADv));this.N.Co=[this,this.AyL];},CC:function(G){if(!this.Ay1){
this.Ay1=true;A.pe([this,this.AcO],this);}else C.Ark.CC.call(this,G);},AAp:function(
G){A._GetAutoObject(C.A$).Cf(49);},_Init:function(aArg){C.Ark._Init.call(this,aArg
);this.__proto__=C.Wo;this.JW(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.II={_Init:function(aArg){C.ADa._Init.call(this,aArg);this.__proto__=C.II;this.
A9C(false);},_className:"Application::HeaderSelectedAnimalId"};C.I2={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,PZ:null,S2:null,N9:
null,S3:null,Nl:null,Os:null,RN:null,Ot:null,RO:null,ND:null,Lb:null,Jp:null,KU:
null,Mt:null,Yj:null,S4:null,RP:null,Ay:null,AxQ:0,AxP:0,Auw:0,Auv:0,Arj:0,AsD:0
,Au_:0,Au$:0,AmX:true,Aml:false,An4:false,Init:function(aArg){A.zX([this,this.Ave
],this.Lb.Q,0);A.zX([this,this.AuB],this.Jp.Q,0);A.zX([this,this.Bpg],this.KU.Q,
0);A.zX([this,this.BjC],this.Mt.Q,0);A.zX([this,this.BpM],this.Nl.Q,0);A.zX([this
,this.BpL],this.N9.Q,0);A.zX([this,this.Bgz],this.ND.Q,0);A.zX([this,this.Bgy],this.
Ot.Q,0);this.Bb(this.PZ);},DE:function(G){var Fh=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QF(X,Fh,0x414);if(!!X)this.Bb(X);this.MO(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E_(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},A2C:function(G){var EE=(C.Ael.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this
,this.Fn,this.Fr],0);}else{if(EE.Eq===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHA+EE.Eq.toFixed());if(!!Av){this.Filter.
CV(Av);A.abo([this,this.Fn,this.Fr],0);}}},BzF:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A$).Fy();},AAn:function(G){var EE=(
C.AmQ.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator
);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE.Eq===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;
}else if(EE.Eq===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;}else if((EE.Eq===22)||(EE.Eq===26)){var A0D=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0D.EJ=EE.Eq;A0D.Operator=0;Av=A0D;}else A.ab5(
"%s",AHA+EE.Eq.toFixed());if(!!Av){this.Filter.CV(Av);A.abo([this,this.Fn,this.Fr
],0);}}},A9x:function(E){if(this.Au_===E)return;this.Au_=E;A.abo([this,this.Bkg,
this.A9x],0);},A9y:function(E){if(this.Au$===E)return;this.Au$=E;A.abo([this,this.
Bkh,this.A9y],0);},Ave:function(G){var F;this.A9y((F=this.Lb.Q,F[1].call(F[0])));
var Av=this.Filter.DL(7,0);if(!!Av){var AzI=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzI)AzI.A4=this.Au$;else A.ab5("%s",AfB);}},AuB:function(G){var
F;this.A9x((F=this.Jp.Q,F[1].call(F[0])));var Av=this.Filter.DL(14,0);if(!!Av){var
U2=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U2)U2.A4=
this.Au_;else A.ab5("%s",AfB);}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},A_d:function(
E){if(this.AsD===E)return;this.AsD=E;A.abo([this,this.BkT,this.A_d],0);},Bpg:function(
G){var F;this.A_d((F=this.KU.Q,F[1].call(F[0])));var Av=this.Filter.DL(22,1);if(
!!Av){var Ai8=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Ai8
)switch(this.AsD){case 1:Ai8.Operator=5;break;case 0:Ai8.Operator=0;break;default:
A.ab5("%s%e",AHB,this.AsD);}else A.ab5("%s",AfB);}},A9K:function(E){if(this.Arj===
E)return;this.Arj=E;A.abo([this,this.Bkw,this.A9K],0);},BjC:function(G){var F;this.
A9K((F=this.Mt.Q,F[1].call(F[0])));var Av=this.Filter.DL(26,1);if(!!Av){var AtQ=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtQ)switch(this.Arj
){case 1:AtQ.Operator=5;break;case 0:AtQ.Operator=0;break;default:A.ab5("%s%e",AHB
,this.Arj);}else A.ab5("%s",AfB);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PZ.Bk([this,this.Fn,this.Fr]);this.S2.
Bk([this,this.Fn,this.Fr]);this.N9.Bk([this,this.Fn,this.Fr]);this.S3.Bk([this,this.
Fn,this.Fr]);this.Nl.Bk([this,this.Fn,this.Fr]);this.Os.Bk([this,this.Fn,this.Fr
]);this.RN.Bk([this,this.Fn,this.Fr]);this.Ot.Bk([this,this.Fn,this.Fr]);this.RO.
Bk([this,this.Fn,this.Fr]);this.ND.Bk([this,this.Fn,this.Fr]);this.Lb.Bk([this,this.
Fn,this.Fr]);this.Jp.Bk([this,this.Fn,this.Fr]);this.KU.Bk([this,this.Fn,this.Fr
]);this.Mt.Bk([this,this.Fn,this.Fr]);this.Yj.Bk([this,this.Fn,this.Fr]);this.S4.
Bk([this,this.Fn,this.Fr]);this.RP.Bk([this,this.Fn,this.Fr]);this.Ar1(false);A.
pe([this,this.A3$],this);var Bds=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!Bds){this.Ar1(true);this.AFQ(Bds.A4);}var BcX=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
BcX){this.Ar1(true);this.AFR(BcX.A4);}this.ArA(false);A.pe([this,this.AK$],this);
var Bdr=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Bdr){this.ArA(true);this.AEF(A._GetAutoObject(A.Device.Helper).L9(Bdr.A4,
A._GetAutoObject(A.Device.Helper).Du()));}var BcW=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!BcW){this.ArA(true);this.AEH(A.
_GetAutoObject(A.Device.Helper).L9(BcW.A4,A._GetAutoObject(A.Device.Helper).Du()
)+1);}var AzI=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzI)this.Lb.Bx(this.Gender.DZ(AzI.A4));var U2=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U2)this.Jp.Bx(this.AnimalType.
DZ(U2.A4));var Ai8=this.Filter.DL(22,1);if(!!Ai8){if(!Ai8.Operator)this.KU.Bx(0);
else this.KU.Bx(1);}var AtQ=this.Filter.DL(26,1);if(!!AtQ){if(!AtQ.Operator)this.
Mt.Bx(0);else this.Mt.Bx(1);}},Fr:function(Aq){this.Bk(Aq);},AFR:function(E){if(
this.AxQ===E)return;this.AxQ=E;A.abo([this,this.A8U,this.AFR],0);},AFQ:function(
E){if(this.AxP===E)return;this.AxP=E;A.abo([this,this.A8T,this.AFQ],0);},BpM:function(
G){var F;this.AFR((F=this.Nl.Q,F[1].call(F[0])));var Av=this.Filter.DL(1,3);if(!
!Av){var ABp=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABp)
ABp.A4=this.AxQ;else A.ab5("%s",AfB);}},BpL:function(G){var F;this.AFQ((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DL(1,2);if(!!Av){var ABp=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABp)ABp.A4=this.AxP;else A.ab5("%s",AfB);}},BdX:
function(G){var EE=(C.AjD.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0
);}else{if(EE===this.S2){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxP;this.Bb(this.N9);}else if(EE===this.S3){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxQ;this.Bb(this.Nl);}if(!!Av){this.Filter.CV(
Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([this,this.A3$],this);},A3$:function(
G){var A2k=!!this.Filter.DL(this.N9.Eq,this.N9.Operator);var A4a=!!this.Filter.DL(
this.Nl.Eq,this.Nl.Operator);A._GetAutoObject(A.Device.Helper).JX(this.S2,this.An4
);A._GetAutoObject(A.Device.Helper).JX(this.S3,this.An4);A._GetAutoObject(A.Device.
Helper).JX(this.N9,A2k);A._GetAutoObject(A.Device.Helper).JX(this.Nl,A4a);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},BAy:function(G){A.pe([this,this.Fj],this);A.pe([this,this.
MO],this);},BzC:function(G){this.Ar1(!this.An4);if(this.An4===false){var Av=this.
Filter.DL(this.PZ.Eq,this.PZ.Operator);while(!!Av){this.Filter.Ni(Av);Av=this.Filter.
DL(this.PZ.Eq,this.PZ.Operator);}A.abo([this,this.Fn,this.Fr],0);}},Ar1:function(
E){if(this.An4===E)return;this.An4=E;A.abo([this,this.A8S,this.Ar1],0);A.pe([this
,this.A3$],this);},AEH:function(E){if(this.Auw===E)return;this.Auw=E;A.abo([this
,this.A70,this.AEH],0);},AEF:function(E){if(this.Auv===E)return;this.Auv=E;A.abo([
this,this.A7Y,this.AEF],0);},Bgz:function(G){var F;this.AEH((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DL(4,2);if(!!Av){var AfN=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfN){var AaK=A._GetAutoObject(A.Device.Helper).ZM(
this.Auw-1);AfN.A4=AaK;}else A.ab5("%s",AfB);}},Bgy:function(G){var F;this.AEF((
F=this.Ot.Q,F[1].call(F[0])));var Av=this.Filter.DL(4,3);if(!!Av){var AfN=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfN){var AaK=A._GetAutoObject(
A.Device.Helper).ZM(this.Auv);AfN.A4=AaK;}else A.ab5("%s",AfB);}},AK$:function(G
){var A2k=this.AmX&&!!this.Filter.DL(this.Ot.Eq,this.Ot.Operator);var A4a=this.AmX&&
!!this.Filter.DL(this.ND.Eq,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JX(this.Os,this.AmX);A._GetAutoObject(A.Device.Helper).JX(this.RN,this.AmX&&this.
Aml);A._GetAutoObject(A.Device.Helper).JX(this.RO,this.AmX&&this.Aml);A._GetAutoObject(
A.Device.Helper).JX(this.Ot,A2k);A._GetAutoObject(A.Device.Helper).JX(this.ND,A4a
);},ArA:function(E){if(this.Aml===E)return;this.Aml=E;A.abo([this,this.A7X,this.
ArA],0);A.pe([this,this.AK$],this);},BdW:function(G){var EE=(C.AjD.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.
Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE===this.RN){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZM(this.Auv);this.Bb(this.Ot);}else if(EE===this.RO){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZM(this.Auw-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CV(Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([
this,this.AK$],this);},BzB:function(G){this.ArA(!this.Aml);if(this.Aml===false){
var Av=this.Filter.DL(this.Os.Eq,this.Os.Operator);while(!!Av){this.Filter.Ni(Av
);Av=this.Filter.DL(this.Os.Eq,this.Os.Operator);}A.abo([this,this.Fn,this.Fr],0
);}},Bme:function(E){if(this.AmX===E)return;this.AmX=E;A.pe([this,this.AK$],this
);},Fn:function(){return this.Filter;},Bkh:function(){return this.Au$;},Bkg:function(
){return this.Au_;},BkT:function(){return this.AsD;},Bkw:function(){return this.
Arj;},A8U:function(){return this.AxQ;},A8T:function(){return this.AxP;},A8S:function(
){return this.An4;},A70:function(){return this.Auw;},A7Y:function(){return this.
Auv;},A7X:function(){return this.Aml;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABH._Init.call(this.Transponder={I:this},0);C.ABH._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABS._Init.call(
this.PZ={I:this},0);C.AjD._Init.call(this.S2={I:this},0);C.Abk._Init.call(this.N9={
I:this},0);C.AjD._Init.call(this.S3={I:this},0);C.Abk._Init.call(this.Nl={I:this
},0);C.ABS._Init.call(this.Os={I:this},0);C.AjD._Init.call(this.RN={I:this},0);C.
ACF._Init.call(this.Ot={I:this},0);C.AjD._Init.call(this.RO={I:this},0);C.ACF._Init.
call(this.ND={I:this},0);C.AmQ._Init.call(this.Lb={I:this},0);C.AmQ._Init.call(this.
Jp={I:this},0);C.AmQ._Init.call(this.KU={I:this},0);C.AmQ._Init.call(this.Mt={I:
this},0);C.QA._Init.call(this.Yj={I:this},0);C.QA._Init.call(this.S4={I:this},0);
C.QA._Init.call(this.RP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I2;var B;this.N.Z(true);this.N.CX(A.aaR(A.acf.A4K));this.Dq(C.APp);this.Gender.
At(this.Au$);this.AnimalType.At(this.Au_);this.Transponder.At(this.AsD);this.Ek.
At(this.Arj);this.Y.H(Fe);this.Y.JQ(1);this.PZ.H(IT);this.PZ.Aj(true);this.PZ.T(
A._GetAutoObject(A.Device.Helper).AmO(0,1));this.PZ.Nc(1);this.S2.H(P9);this.S2.
Aj(true);this.S2.T(A.aaR(A.acf.AD3));this.S2.Nc(1);this.S2.OM(2);this.N9.H(Z$);this.
N9.Nc(1);this.N9.OM(2);this.N9.AFI(A.aaR(A.acf.GM));this.S3.H(Ak_);this.S3.Aj(true
);this.S3.T(A.aaR(A.acf.AG3));this.S3.Nc(1);this.S3.OM(3);this.Nl.H(Aok);this.Nl.
Aj(true);this.Nl.Nc(1);this.Nl.OM(3);this.Nl.AFI(A.aaR(A.acf.GM));this.Os.H(AWB);
this.Os.Aj(true);this.Os.T(A.aaR(A.acf.RM));this.Os.Nc(4);this.RN.H(AWC);this.RN.
Aj(true);this.RN.T(A.aaR(A.acf.AD3));this.RN.Nc(4);this.RN.OM(3);this.Ot.H(AWD);
this.Ot.Nc(4);this.Ot.OM(3);this.Ot.A9P(2);this.RO.H(AWE);this.RO.Aj(true);this.
RO.T(A.aaR(A.acf.AG3));this.RO.Nc(4);this.RO.OM(2);this.ND.H(AWF);this.ND.Aj(true
);this.ND.Nc(4);this.ND.OM(2);this.ND.A9P(3);this.Lb.H(AsX);this.Lb.Aj(true);this.
Lb.Nc(7);this.Lb.Ahq(0);this.Lb.OM(0);this.Jp.H(W$);this.Jp.Aj(true);this.Jp.Nc(
14);this.Jp.Ahq(0);this.Jp.OM(0);this.KU.H(W$);this.KU.Aj(true);this.KU.Nc(22);this.
KU.Ahq(0);this.KU.OM(1);this.Mt.H(W$);this.Mt.Aj(true);this.Mt.Nc(26);this.Mt.Ahq(
0);this.Mt.OM(1);this.Yj.H(W$);this.Yj.Aj(true);this.Yj.Nc(11);this.Yj.Ahq(0);this.
Yj.OM(0);this.S4.H(W$);this.S4.Aj(true);this.S4.Nc(12);this.S4.Ahq(0);this.S4.OM(
0);this.RP.H(W$);this.RP.Aj(true);this.RP.Nc(8);this.RP.Ahq(0);this.RP.OM(0);this.
Ay.H(Is);this.J(this.Y,0);this.J(this.PZ,0);this.J(this.S2,0);this.J(this.N9,0);
this.J(this.S3,0);this.J(this.Nl,0);this.J(this.Os,0);this.J(this.RN,0);this.J(this.
Ot,0);this.J(this.RO,0);this.J(this.ND,0);this.J(this.Lb,0);this.J(this.Jp,0);this.
J(this.KU,0);this.J(this.Mt,0);this.J(this.Yj,0);this.J(this.S4,0);this.J(this.RP
,0);this.J(this.Ay,0);this.N.CE=[this,this.Ev];this.N.Co=[this,this.BzF];this.N.
C1(A.aaL(A.ach.E2));this.Y.El=[this,this.BAy];this.PZ.AR=[this,this.BzC];this.PZ.
At([this,this.A8S,this.Ar1]);this.S2.AR=[this,this.BdX];this.N9.Gr([this,this.D_
,this.GQ]);this.N9.At([this,this.A8T,this.AFQ]);this.S3.AR=[this,this.BdX];this.
Nl.Gr([this,this.D_,this.GQ]);this.Nl.At([this,this.A8U,this.AFR]);this.Os.AR=[this
,this.BzB];this.Os.At([this,this.A7X,this.ArA]);this.RN.AR=[this,this.BdW];this.
Ot.Gr([this,this.D_,this.GQ]);this.Ot.At([this,this.A7Y,this.AEF]);this.RO.AR=[this
,this.BdW];this.ND.Gr([this,this.D_,this.GQ]);this.ND.At([this,this.A70,this.AEH
]);this.Lb.AR=[this,this.AAn];this.Lb.At([B=this.Gender,B.B_,B.B$]);this.Lb.CK(this.
Gender);this.Jp.AR=[this,this.AAn];this.Jp.At([B=this.AnimalType,B.B_,B.B$]);this.
Jp.CK(this.AnimalType);this.KU.AR=[this,this.AAn];this.KU.At([B=this.Transponder
,B.B_,B.B$]);this.KU.CK(this.Transponder);this.Mt.AR=[this,this.AAn];this.Mt.At([
B=this.Ek,B.B_,B.B$]);this.Mt.CK(this.Ek);this.Yj.AR=[this,this.A2C];this.S4.AR=[
this,this.A2C];this.RP.AR=[this,this.A2C];this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder._Done(
);this.Ek._Done();this.Y._Done();this.PZ._Done();this.S2._Done();this.N9._Done();
this.S3._Done();this.Nl._Done();this.Os._Done();this.RN._Done();this.Ot._Done();
this.RO._Done();this.ND._Done();this.Lb._Done();this.Jp._Done();this.KU._Done();
this.Mt._Done();this.Yj._Done();this.S4._Done();this.RP._Done();this.Ay._Done();
C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit(
);this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();this.Y.
_ReInit();this.PZ._ReInit();this.S2._ReInit();this.N9._ReInit();this.S3._ReInit(
);this.Nl._ReInit();this.Os._ReInit();this.RN._ReInit();this.Ot._ReInit();this.RO.
_ReInit();this.ND._ReInit();this.Lb._ReInit();this.Jp._ReInit();this.KU._ReInit(
);this.Mt._ReInit();this.Yj._ReInit();this.S4._ReInit();this.RP._ReInit();this.Ay.
_ReInit();this.N.CX(A.aaR(A.acf.A4K));this.S2.T(A.aaR(A.acf.AD3));this.N9.AFI(A.
aaR(A.acf.GM));this.S3.T(A.aaR(A.acf.AG3));this.Nl.AFI(A.aaR(A.acf.GM));this.Os.
T(A.aaR(A.acf.RM));this.RN.T(A.aaR(A.acf.AD3));this.RO.T(A.aaR(A.acf.AG3));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_P={ZN:null,Bny:
function(Bw$){var EF=A._NewObject(C.A_O,0);EF.AB=Bw$;EF.Mu=this.ZN;this.ZN=EF;},
A_t:function(){var Vh=null;if(!!this.ZN){Vh=this.ZN.AB;this.ZN=this.ZN.Mu;}return Vh;
},Contains:function(Alf){var EF=this.ZN;while(!!EF){if(EF.AB.AnY===Alf)return true;
EF=EF.Mu;}return false;},Bnn:function(){if(!!this.ZN)return this.ZN.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_P;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_O={AB:null,
Mu:null,_Init:function(aArg){this.__proto__=C.A_O;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AL9={ARH:function(){A._GetAutoObject(
A.Device.Helper).Axl(this.H7,0);A._GetAutoObject(C.A$).Fy();},A7q:function(){this.
H7.Cg(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();},A6r:function(
){return A.aaL(A.ach.AmV);},_Init:function(aArg){C.AF9._Init.call(this,aArg);this.
__proto__=C.AL9;this.Dq(C.II);},_className:"Application::AnimalActionRateScreen"
};C.AL5={Wu:function(G){this.Agr();this.I0(A.aaR(A.acf.AU2),[this,this.ATt],5);this.
I0(A.aaR(A.acf.A5b),[this,this.Ble],4);this.I0(A.aaR(A.acf.AF8),[this,this.ATe],
3);this.I0(A.aaR(A.acf.AnS),[this,this.AwL],2);this.I0(A.aaR(A.acf.AdP),[this,this.
AEK],1);this.I0(A.aaR(A.acf.Aus),[this,this.AEE],0);A._GetAutoObject(C.BR).FW();
A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dv(6);},DE:function(G){},Abn:function(){return C.AMY;},Abo:function(
){return C.ADc;},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
AyZ=A._NewObject(A.Device.BoolFilterCriterion,0);AyZ.Initialize(8,0,true,true);Be.
CV(AyZ);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(
this,G);if(this.Akb()===false){this.N.Cv(A.aaL(A.ach.AGf));this.N.Ck=[this,this.
A5H];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(
C.A$).Cf(40);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.
AL5;var B;this.Dq(C.AOQ);this.Dz(A.aaR(A.acf.A7w));this.AwG([B=A._GetAutoObject(
A.Device.Device),B.A71,B.Bax]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7w));},_className:"Application::AlarmListScreen"};C.ANn={DE:function(
G){},AlU:function(G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gs);var Aa=(C.ABZ.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).G6(Aa.Hq);A._GetAutoObject(
C.A$).Cf(13);}},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azi=A._NewObject(A.Device.BoolFilterCriterion,0);Azi.Initialize(9,0,true,true);Be.
CV(Azi);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(
this,G);this.N.ON(false);this.N.OO(false);},_Init:function(aArg){C.GZ._Init.call(
this,aArg);this.__proto__=C.ANn;this.Dq(C.AOS);this.Dz(A.aaR(A.acf.A7x));},_ReInit:
function(){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.A7x));},_className:"Application::ControlListScreen"
};C.Ael={Filter:null,Eq:0,Ja:10,TableId:0,Operator:1,CP:function(){var F;this.Tn((
F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){C.
Cn.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Ja),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.pe([this,this.
Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tn((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));else this.
Tn(null);},Ahq:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this,this.
Mb],this);},Tn:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6k(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmO(this.TableId
,this.Eq));},OM:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mb],this);},_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=
C.Ael;this.V.H(AHC);this.V.A5(0x11);},_ReInit:function(){C.Cn._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QA={H6:null,Bl:function(aSize){var B;C.Ael.Bl.call(this,aSize);this.H6.H([(aSize[
0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Ja,0,this.
H6.M[0]-this.Ja,aSize[1]]);},Tn:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmO(this.TableId,this.Eq));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av&&Av.A4)this.H6.Cu(1);else this.H6.Cu(0);},_Init:function(aArg
){C.Ael._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.QA;this.H6.H(AHD);this.H6.Cu(0);this.J(this.H6,0);this.H6.Aw(A.aaL(A.ach.AqH));
},_Done:function(){this.__proto__=C.Ael;this.H6._Done();C.Ael._Done.call(this);}
,_ReInit:function(){C.Ael._ReInit.call(this);this.H6._ReInit();},_Mark:function(
D){var B;C.Ael._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APp={Ap:null,Text:null,De:function(
E){C.BQ.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APp;this.Ap.H(AWG);this.Text.H(AWH);this.
Text.A5(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.Aew));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjM={
AW:null,TZ:null,Gv:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.TZ.H(A.abJ(this.TZ.M,A.abe(this.AW.M.slice(0
,2),AWI)));this.TZ.H(A.abK(this.TZ.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWJ
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IA)this.TZ.L(A.jb.AV);else this.TZ.L(A.jb.AmW);},De:function(E){
C.BQ.De.call(this,E);this.Gv.L(E);this.D2.Zn(E);},Wv:function(E){C.BQ.Wv.call(this
,E);this.D2.CT(E);},Akj:function(){return this.AW.Akj();},Av9:function(){return this.
AW.Av9();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.TZ={I:this},0);A.acg.Ap._Init.call(this.Gv={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C4._Init.call(this.A_={I:this
},0);this.__proto__=C.AjM;this.AW.H(AWK);this.TZ.H(AWL);this.TZ.Ng(2);this.Gv.H(
AWM);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AWN);this.D2.Zn(A.jb.Bm);this.
D2.CT(A.jb.Re);this.D2.Hl(2);this.A_.DC(AWO);this.A_.DM(AWP);this.A_.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.TZ,0);this.J(this.Gv,0);this.J(this.D2,0);this.J(this.
A_,0);this.Bb(this.AW);this.Gv.Aw(A.aaL(A.ach.Gv));this.D2.S(A.aaL(A.fl.Bi));this.
Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AW._Done();this.TZ._Done(
);this.Gv._Done();this.D2._Done();this.A_._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.AW._ReInit();this.TZ._ReInit();this.Gv._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Di:null,Io:null,In:null
,Aga:function(G){if(this.Ey<0)this.LZ(1);else if(this.Ey===9)this.LZ(0);else this.
LZ(this.Ey+1);A.pe(this.Di,this);},Ai:function(Ae){var B;C.Ey.Ai.call(this,Ae);var
Hd=((Ae&0x10)===0x10);var IA=((Ae&0x40)===0x40);if(IA){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.Dj(256);}else if(Hd){this.Background.L(this.MZ);this.
Text.L(A.jb.Text);this.Dj(256);}else{this.Background.L(this.MZ);this.Text.L(A.jb.
Text);this.Dj(128);}},Af$:function(G){if(this.Ey<=0)this.LZ(9);else this.LZ(this.
Ey-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ey._Init.call(this,aArg);A.Core.
BK._Init.call(this.Io={I:this},0);A.Core.BK._Init.call(this.In={I:this},0);this.
__proto__=C.DF;this.Io.Filter=4;this.In.Filter=5;this.Io.BL=[this,this.Aga];this.
Io.D1=[this,this.Aga];this.In.BL=[this,this.Af$];this.In.D1=[this,this.Af$];},_Done:
function(){this.__proto__=C.Ey;this.Io._Done();this.In._Done();C.Ey._Done.call(this
);},_ReInit:function(){C.Ey._ReInit.call(this);this.Io._ReInit();this.In._ReInit(
);},_Mark:function(D){var B;C.Ey._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
In)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Di:null,Cs:null,CU:null,Dx:null,Ep:null,FZ:null,ES:null,Fl:null,Fa:null,M4:0,AQY:
false,Aqk:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqk)this.ES.AeU(true);else this.ES.AeU(false);},AwC:function(E){var B;
if(E===this.Akj())return;var Af5=E;var DV=this.ES;while(!!DV){if(Af5>0){DV.LZ(Af5
%10);Af5=(Af5/10)|0;}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.QF(DV,2,0x11))?
B:null);}},Akj:function(){return A.wz(this.Av9(),-1,10);},Om:function(G){if(this.
FZ.Ey>=0)this.BfG(7);},MU:function(G){if(((this.Akj()>0)||this.AQY)&&(this.Cs.Ey<
0))this.BfG(2);else if(this.Akj()<=0)this.Fa.NH=true;},Ado:function(G){A.pe(this.
Di,this);},BfG:function(Gz){var B;var ALn=0;var DV=null;switch(Gz){case 2:{DV=this.
Cs;ALn=7;}break;case 7:{DV=this.ES;ALn=2;}break;default:throw new Error(AWQ);}while(
!!DV){var A2v=(C.DF.isPrototypeOf(B=this.QF(DV,ALn,0x11))?B:null);if(!!A2v)DV.LZ(
A2v.Ey);else if(ALn===7)DV.LZ(0);else DV.LZ(-1);DV=A2v;}A.pe([this,this.Ado],this
);},AeU:function(E){if(this.Aqk===E)return;this.Aqk=E;this.Am();},Bmf:function(E
){if(this.AQY===E)return;this.AQY=E;},ASV:function(E){var B;if(E===this.Av9())return;
var Af5=E;var DV=this.ES;while(!!DV){if(Af5.length>0){DV.LZ(A.wz(A.ab2(Af5,1),-1
,10));Af5=A.abV(Af5,Af5.length-1);}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.
QF(DV,2,0x11))?B:null);}},Av9:function(){var B;var Iy=A.jV;var O=0;var B5=this.Cs;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iy=Iy+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TJ(B5,0x11))?B:null);}return Iy;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cs={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF.
_Init.call(this.FZ={I:this},0);C.DF._Init.call(this.ES={I:this},0);A.Core.BK._Init.
call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.__proto__=
C.AW;this.H(Ayc);this.Cs.AZ(0x3);this.Cs.H(AHE);this.CU.AZ(0x3);this.CU.H(AHF);this.
Dx.AZ(0x3);this.Dx.H(AHG);this.Ep.AZ(0x3);this.Ep.H(AHH);this.FZ.AZ(0x3);this.FZ.
H(AHI);this.ES.AZ(0x3);this.ES.H(AHJ);this.ES.LZ(0);this.Fl.Filter=6;this.Fa.Filter=
7;this.M4=A.jb.CJ;this.J(this.Cs,0);this.J(this.CU,0);this.J(this.Dx,0);this.J(this.
Ep,0);this.J(this.FZ,0);this.J(this.ES,0);this.Bb(this.ES);this.Cs.Di=[this,this.
Ado];this.CU.Di=[this,this.Ado];this.Dx.Di=[this,this.Ado];this.Ep.Di=[this,this.
Ado];this.FZ.Di=[this,this.Ado];this.ES.Di=[this,this.Ado];this.Fl.BL=[this,this.
Om];this.Fa.BL=[this,this.MU];},_Done:function(){this.__proto__=A.Core.P;this.Cs.
_Done();this.CU._Done();this.Dx._Done();this.Ep._Done();this.FZ._Done();this.ES.
_Done();this.Fl._Done();this.Fa._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cs._ReInit();this.CU._ReInit();this.Dx._ReInit(
);this.Ep._ReInit();this.FZ._ReInit();this.ES._ReInit();this.Fl._ReInit();this.Fa.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bha="00558be9";C.BCa={Undefined:0,BDe:1,BCs:2};C.AkD={
Tl:null,AiQ:null,K$:null,ANr:null,An1:null,push:function(MJ){if(!this.Tl){MJ.Aht=
null;MJ.Mu=null;this.Tl=MJ;this.AiQ=this.Tl;}else{MJ.Aht=this.AiQ;MJ.Mu=null;this.
AiQ.Mu=MJ;this.AiQ=MJ;}},BA9:function(MJ){var Qf=this.Tl;while(!!Qf){if(Qf.JK.Id===
MJ.Id)return Qf;Qf=Qf.Mu;}return Qf;},BAR:function(MJ){if(MJ===this.Tl)this.pop(
);else if(MJ===this.AiQ){MJ=MJ.Aht;if(!!MJ)MJ.Mu=null;this.AiQ=MJ;}else{MJ.Aht.Mu=
MJ.Mu;MJ.Mu.Aht=MJ.Aht;}},Ahk:function(E){var F;if(this.K$===E)return;this.K$=E;
if(!!this.K$)this.K$.AgG(2);(F=this.ANr,F[2].call(F[0],this.K$));},Ve:function(G
){var Qf=(C.ATG.isPrototypeOf(G)?G:null);if(!!Qf){if(!Qf.JK.PopupState){if(!this.
K$)this.Ahk(this.top());}else if(Qf.JK.PopupState===4){this.pop();this.Ahk(this.
top());}else if(Qf.JK.PopupState===5){this.pop();this.Ahk(this.top());}else if(Qf.
JK.PopupState===7){this.pop();this.Ahk(this.top());}else if(Qf.JK.PopupState===8
){this.pop();this.Ahk(this.top());}else if(Qf.JK.PopupState===6){if(Qf===this.K$
){this.pop();this.Ahk(this.top());}else this.BAR(Qf);}else if(Qf.JK.PopupState===
3){this.pop();this.Ahk(this.top());}}},pop:function(){var AKJ=null;if(!!this.Tl){
AKJ=this.Tl;if(this.Tl===this.AiQ){this.Tl=null;this.AiQ=null;}else{this.Tl=this.
Tl.Mu;if(!this.Tl)throw new Error(AWR);this.Tl.Aht=null;}AKJ.Aht=null;AKJ.Mu=null;
}return AKJ;},top:function(){return this.Tl;},BAz:function(G){var B;var AtR=(A.Device.
PopupContext.isPrototypeOf(B=this.An1.JK)?B:null);if(!!AtR){var A3J=this.BA9(AtR
);if(!!A3J){A3J.A9n(AtR);if(!AtR.Show)A3J.AgG(6);}else if(AtR.Show){var AKn=A._NewObject(
C.ATG,0);AKn.A9n(AtR);AKn.ASE=[this,this.Ve];this.push(AKn);AKn.AgG(0);}}},_Init:
function(aArg){A.Core.A_$._Init.call(this.An1={I:this},0);this.__proto__=C.AkD;this.
An1.AR7=[this,this.BAz];this.An1.Blz(A._GetAutoObject(A.Device.Device).AnG);A.h7++;
},_Done:function(){this.__proto__=null;this.An1._Done();A.h7--;},_ReInit:function(
){this.An1._ReInit();},_Mark:function(D){var B;if((B=this.Tl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANr)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATG={Ri:null,Mu:null,Aht:null,JK:null,ASE:null,PopupIdToString:null,AfT:function(
Bwf,BwP,Bw_,Bw0,Bw2,BwZ,Bwy){var Vg=A._NewObject(C.ATF,0);Vg.BmI(this.JK.Id);Vg.
A97(Bwf);Vg.ASF=BwZ;Vg.A99(this.JK.AkX);Vg.A9U(this.JK.AkC);Vg.BP=A._NewObject(C.
N,0);Vg.Ll().Co=Bw2;Vg.Ll().Ck=null;Vg.Ll().CE=Bw0;Vg.Ll().CX(Bw_);Vg.Ll().Cv(null
);Vg.Ll().Hx(BwP);Vg.Ll().AE$(Bwy);return Vg;},Akk:function(){if(!this.Ri){var Agk=
this.PopupIdToString.BS(this.JK.Id);switch(this.JK.Id){case 46:this.Ri=this.AfT(
Agk,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKr],[this,this.Af8],1);break;case 91:case
92:this.Ri=this.AfT(Agk,A.jV,A.jV,null,null,[this,this.Af8],0);break;case 39:this.
Ri=this.AfT(Agk,A.aaR(A.acf.Amt),A.aaR(A.acf.Ok),[this,this.A2I],[this,this.A2J]
,[this,this.Af8],3);break;case 13:this.Ri=this.AfT(Agk,A.aaR(A.acf.Amt),A.aaR(A.
acf.BnJ),[this,this.A2H],[this,this.AKr],[this,this.Af8],3);break;case 25:this.Ri=
this.AfT(Agk,A.aaR(A.acf.Amt),A.aaR(A.acf.Ok),[this,this.A2H],[this,this.AKr],[this
,this.Af8],3);break;case 16:case 24:case 49:case 74:this.Ri=this.AfT(Agk,A.aaR(A.
acf.Amt),A.jV,[this,this.A2H],null,[this,this.Af8],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.Ri=this.AfT(Agk,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2I],[this,this.A2J],[this,this.Af8],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.Ri=this.AfT(Agk,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKr],[this,this.Af8],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Ri=
this.AfT(Agk,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2I],[this,this.A2J],[this
,this.Af8],3);break;case 110:this.Ri=this.AfT(Agk,A.jV,A.jV,null,null,[this,this.
Af8],1);break;default:A.ab5("%s",(AWS+this.JK.Id.toFixed())+AWT);}}switch(this.JK.
Id){case 16:case 49:this.Ri.A_l(true);break;case 91:case 92:this.Ri.A_l(false);break;
default:;}return this.Ri;},AKr:function(G){this.AgG(4);},A2H:function(G){this.AgG(
5);},A2J:function(G){this.AgG(7);},A2I:function(G){this.AgG(8);},Af8:function(G){
this.AgG(3);},A9n:function(E){if(this.JK===E)return;this.JK=E;if(!!this.Ri){this.
Akk().A99(this.JK.AkX);this.Akk().A9U(this.JK.AkC);}},AgG:function(Bw5){var B;this.
JK.BmJ(Bw5);(B=this.ASE)?B[1].call(B[0],this):null;},Bz9:function(G){this.AgG(9);
},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATG;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.Ri)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aht)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASE)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Gd={BooleanToYesNo:null,Dt:function(
){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gd;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afi={Um:null,J$:function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.
AM!==BO){if(!!this.Um&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Um,F[
2].call(F[0],false));break;case 1:(F=this.Um,F[2].call(F[0],true));break;default:;
}A.abo(this.Um,0);}},J6:function(G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.
AM!==BO){if(!!this.Um&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Um,F[
2].call(F[0],false));break;case 1:(F=this.Um,F[2].call(F[0],true));break;default:;
}A.abo(this.Um,0);}},Akw:function(E){if(A.aaZ(this.Um,E))return;if(!!this.Q)A.z$([
this,this.A3l],this.Um,0);this.Um=E;if(!!E)A.zX([this,this.A3l],E,0);if(!!E)A.pe([
this,this.A3l],this);},A3l:function(G){var F;if(!!this.Um){if((F=this.Um,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afi;this.JW(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Um)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ATV={Je:null,OT:null,IR:null,Gl:null,AK:null,Abc:null,AgM:null,TF:null,R9:null
,Acx:null,WU:null,Hh:null,ABo:true,Init:function(aArg){var B;A.zX([this,this.AlX
],[B=A._GetAutoObject(A.Device.Device),B.ASu,B.AZY],0);A.pe([this,this.AlX],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABo)this.N.C5(A.aaL(A.ach.
AQE));else this.N.C5(A.aaL(A.ach.AQF));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OT.L(A.jb.Bm);this.R9.Z(false);this.TF.Z(false);this.IR.Z(true);this.Gl.
Ar(false);(F=this.Gl.Q,F[2].call(F[0],this.Gl.B2));this.Background.L(A.jb.Gi);}else
if(this.Abc.Bw){this.OT.L(A.jb.Text);this.R9.Z(true);this.TF.Z(true);this.IR.Z(false
);this.Gl.Ar(false);(F=this.Gl.Q,F[2].call(F[0],this.Gl.B2));this.Background.L(A.
jb.E1);}else{this.OT.L(A.jb.Text);this.R9.Z(false);this.TF.Z(false);this.IR.Z(true
);this.Gl.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgM.Bw)this.WU.Z(true);else
this.WU.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhG();},E4:function(
G){A._GetAutoObject(A.Device.Device).AnR();A._GetAutoObject(A.Device.Device).Ae7(
false);A._GetAutoObject(A.Device.Device).Ul(false);},AlX:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BzP],this);break;case 3:{A.pe([this,this.Bex],this);A.pe([B=this.Abc,B.Axz],this
);A.pe(this.Abc.Mz,this);}break;case 4:A.ab5("%s",AWU);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A$).Fy();},BAA:function(G){this.Bm_(!this.ABo);},Bm_:function(
E){if(this.ABo===E)return;this.ABo=E;if(!E)A._GetAutoObject(A.Device.Device).Ae7(
false);this.Am();},BzP:function(G){var B;this.Bex(this);if(this.ABo)A._GetAutoObject(
A.Device.Device).Ae7(true);A._GetAutoObject(A.Device.Device).Wx(65280);A._GetAutoObject(
A.Device.Device).Ul(true);A.pe([B=this.Abc,B.StartTimer],this);A.pe([B=this.AgM,
B.StartTimer],this);this.Am();},BzQ:function(G){A._GetAutoObject(A.Device.Device
).Ae7(false);A._GetAutoObject(A.Device.Device).Ul(false);this.Am();},BzS:function(
G){this.Am();},Bex:function(G){A._GetAutoObject(A.Device.Device).AhG();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Je._Init.call(this.Je={I:this},0);C.CH._Init.
call(this.OT={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acl.Gl._Init.
call(this.Gl={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abc={I:this},0);A.Core.Timer._Init.call(this.AgM={I:this},0);A.acg.Ap.
_Init.call(this.TF={I:this},0);A.acg.Ap._Init.call(this.R9={I:this},0);A.acg.Text.
_Init.call(this.Acx={I:this},0);C.WU._Init.call(this.WU={I:this},0);C.CH._Init.call(
this.Hh={I:this},0);this.__proto__=C.ATV;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Je.H(AWV);this.Je.Akz(0);this.OT.H(AWW);this.OT.R(A.aaR(A.acf.A$e));
this.OT.L(A.jb.Text);this.IR.H(AWX);this.IR.L(A.jb.AV);this.IR.Zl(true);this.Gl.
Fp(1750);this.Gl.Ui(750);this.Gl.Aku(0);this.Gl.Ar(true);this.Gl.B2=3;this.AK.H(
Ayd);this.Abc.PP(-1);this.Abc.Ww(1000);this.AgM.PP(-1);this.AgM.Ww(5000);this.TF.
H(AHK);this.R9.H(AHK);this.R9.L(A.jb.E1);this.Acx.H(Ayd);this.Acx.R(A.aaR(A.acf.
A_Q));this.Acx.L(A.jb.Text);this.WU.H(Ayd);this.Hh.H(AWY);this.Hh.Ar(false);this.
Hh.R(A.aaR(A.acf.RangeTest));this.Hh.L(A.jb.Text);this.J(this.Je,0);this.J(this.
OT,0);this.J(this.IR,0);this.J(this.AK,0);this.J(this.TF,0);this.J(this.R9,0);this.
J(this.Acx,0);this.J(this.WU,0);this.J(this.Hh,0);this.N.CE=[this,this.Ev];this.
N.Co=[this,this.BAA];this.N.C1(A.aaL(A.ach.E2));this.OT.S(A.aaL(A.fl.Af));this.OT.
A2(A.aaL(A.fl.Ak));this.OT.Ct(A.aaL(A.fl.Bi));this.IR.Aw(A.aaL(A.ach.ADE));this.
Gl.Q=[B=this.IR,B.ASh,B.Cu];this.Abc.Mz=[this,this.BzQ];this.AgM.Mz=[this,this.BzS
];this.TF.Aw(A.aaL(A.ach.TF));this.R9.Aw(A.aaL(A.ach.R9));this.Acx.S(A.aaL(A.fl.
Af));this.WU.At([B=A._GetAutoObject(A.Device.Device),B.ASv,B.AZZ]);this.Hh.S(A.aaL(
A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Je._Done();this.OT._Done();this.IR._Done();this.Gl._Done();this.AK._Done(
);this.Abc._Done();this.AgM._Done();this.TF._Done();this.R9._Done();this.Acx._Done(
);this.WU._Done();this.Hh._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Je._ReInit();this.OT._ReInit();this.IR._ReInit();this.Gl.
_ReInit();this.AK._ReInit();this.Abc._ReInit();this.AgM._ReInit();this.TF._ReInit(
);this.R9._ReInit();this.Acx._ReInit();this.WU._ReInit();this.Hh._ReInit();this.
OT.R(A.aaR(A.acf.A$e));this.Acx.R(A.aaR(A.acf.A_Q));this.Hh.R(A.aaR(A.acf.RangeTest
));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(A.aaL(A.fl.Ak));this.OT.Ct(A.aaL(A.fl.Bi
));this.Acx.S(A.aaL(A.fl.Af));this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Je)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbP={
ScreenType:0,Ne:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nh:
function(G){A._GetAutoObject(C.A$).Cf(this.ScreenType);},_Init:function(aArg){C.
Cn._Init.call(this,aArg);this.__proto__=C.AbP;},_className:"Application::MenuItemScreen"
};C.T7={Ad4:null,Ml:null,Amu:false,Init:function(aArg){},Ai:function(Ae){C.Cn.Ai.
call(this,Ae);if(this.Amu){this.Ml.Cu(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cu(0);
if(this.KD)this.Ml.L(A.jb.Bm);else if(this.Hj)this.Ml.L(A.jb.Text);else this.Ml.
L(A.jb.Bm);}},IY:function(G){var F,CA;if(!!this.Ad4){(CA=this.Ad4,CA[2].call(CA[
0],!(F=this.Ad4,F[1].call(F[0]))));this.AES((F=this.Ad4,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A2O:function(G){this.KD=true;this.DJ(this);},AES:function(
E){if(this.Amu===E)return;this.Amu=E;this.DJ(this);this.Am();},A3e:function(G){var
F;this.AES((F=this.Ad4,F[1].call(F[0])));},A0h:function(s){this.A3e(s);},DJ:function(
G){var F;if(!this.N||!this.KD)return;if(this.Amu){(F=this.N,F[1].call(F[0])).CX(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CX(A.aaR(A.acf.A7M));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASK:function(E){if(A.aaZ(this.Ad4,E))
return;if(!!this.Ad4)A.z$([this,this.A0h],this.Ad4,0);this.Ad4=E;if(!!E)A.zX([this
,this.A0h],E,0);if(!!E)A.pe([this,this.A0h],this);},_Init:function(aArg){C.Cn._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Ml={I:this},0);this.__proto__=C.T7;this.
V.L(A.jb.H8);this.Ml.H(AHL);this.Ml.Cu(0);this.J(this.Ml,0);this.Ml.Aw(A.aaL(A.ach.
AqH));this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.Ml._Done();C.Cn.
_Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.Ml._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.Ad4)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANz={H5:null,IL:null,_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.SO._Init.call(this.H5={I:this},0);C.AGy._Init.call(this.
IL={I:this},0);this.__proto__=C.ANz;var B;this.I_(A.aaR(A.acf.ACn));this.H5.H(AhX
);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.Bh(true);this.IL.H(UV);this.
IL.Aj(true);this.IL.T(A.aaR(A.acf.Bs));this.J(this.H5,-1);this.J(this.IL,-1);this.
H5.AeR([B=this.H5,B.FU]);this.H5.Gr([this,this.D_,this.GQ]);this.H5.Akt(A.aaL(A.
ach.Edit));this.H5.Ab2([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);this.IL.
AeR([B=this.IL,B.FU]);this.IL.Gr([this,this.D_,this.GQ]);this.IL.Akt(A.aaL(A.ach.
Edit));this.IL.Ab2([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);},_Done:function(
){this.__proto__=C.Cd;this.H5._Done();this.IL._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.H5._ReInit();this.IL._ReInit();this.I_(A.
aaR(A.acf.ACn));this.H5.T(A.aaR(A.acf.Date));this.IL.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cd._Mark.call(this,D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUS={Rb:null,FH:null,BZ:null,OG:null,YF:null,AaY:null,_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.Rb._Init.call(this.Rb={I:this},0);C.AMt._Init.call(this.
FH={I:this},0);C.AUr._Init.call(this.BZ={I:this},0);C.AUt._Init.call(this.OG={I:
this},0);C.Afi._Init.call(this.YF={I:this},0);C.AaY._Init.call(this.AaY={I:this}
,0);this.__proto__=C.AUS;var B;this.I_(A.aaR(A.acf.Temperature));this.FH.At(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AWZ);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arh));this.BZ.Bh(false);this.OG.H(Aaa);this.OG.Aj(true);this.OG.T(A.aaR(A.acf.Undertemperature
));this.OG.Bh(true);this.OG.Bx(3800);this.OG.Ga(3000);this.OG.EU(5000);this.OG.A_e(
A.aaR(A.acf.AGL));this.YF.H(AW0);this.YF.Aj(true);this.YF.Z(true);this.YF.T(A.aaR(
A.acf.A4I));this.J(this.BZ,0);this.J(this.OG,0);this.J(this.YF,0);this.BZ.AeR([B=
this.BZ,B.FU]);this.BZ.Gr([this,this.D_,this.GQ]);this.BZ.Akt(A.aaL(A.ach.Edit));
this.BZ.LX([B=this.BZ,B.AyM]);this.BZ.L0(A.aaL(A.ach.AnJ));this.BZ.At([B=this.FH
,B.B_,B.B$]);this.BZ.CK(this.FH);this.BZ.A9S([B=this.FH,B.ASD,B.AZ6]);this.BZ.A9R([
B=this.FH,B.ASC,B.AZ5]);this.OG.LX([B=this.BZ,B.AyM]);this.OG.L0(A.aaL(A.ach.AnJ
));this.OG.At([B=A._GetAutoObject(A.Device.Device),B.A8Q,B.BaV]);this.YF.CK(this.
AaY);this.YF.Akw([B=A._GetAutoObject(A.Device.Device),B.A8a,B.BaF]);},_Done:function(
){this.__proto__=C.Cd;this.Rb._Done();this.FH._Done();this.BZ._Done();this.OG._Done(
);this.YF._Done();this.AaY._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.Rb._ReInit();this.FH._ReInit();this.BZ._ReInit();this.
OG._ReInit();this.YF._ReInit();this.AaY._ReInit();this.I_(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arh));this.OG.T(A.aaR(A.acf.Undertemperature));this.OG.
A_e(A.aaR(A.acf.AGL));this.YF.T(A.aaR(A.acf.A4I));},_Mark:function(D){var B;C.Cd.
_Mark.call(this,D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FH)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANM={PE:null,PF:null,Sr:null,V0:null,St:null,Ss:null,Gd:null,Acm:null,Init:function(
aArg){A.zX([this,this.Bos],this.PF.Q,0);},Bos:function(G){var F;A._GetAutoObject(
A.Device.Device).AwX((F=this.PF.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.Iq._Init.call(this.PE={I:this},0);C.BW._Init.call(this.PF={
I:this},0);C.Afi._Init.call(this.Sr={I:this},0);C.Iq._Init.call(this.V0={I:this}
,0);C.Afi._Init.call(this.St={I:this},0);C.Afi._Init.call(this.Ss={I:this},0);C.
Gd._Init.call(this.Gd={I:this},0);C.Acm._Init.call(this.Acm={I:this},0);this.__proto__=
C.ANM;var B;this.N.H(W$);this.I_(A.aaR(A.acf.Device));this.PE.H(AhX);this.PE.Aj(
true);this.PE.T(A.aaR(A.acf.A_0));this.PE.Bh(false);this.PE.Ga(2);this.PE.EU(60);
this.PE.IO(A.aaR(A.acf.AG0));this.PE.I$(A.aaR(A.acf.AG0));this.PF.H(AW1);this.PF.
Aj(true);this.PF.T(A.aaR(A.acf.A_7));this.PF.Bh(true);this.PF.Bx(0);this.PF.Ga(-
1);this.PF.EU(1);this.Sr.H(Aaa);this.Sr.Aj(true);this.Sr.T(A.aaR(A.acf.HF));this.
Sr.Bh(false);this.Sr.Bx(0);this.Sr.Ga(-1);this.Sr.EU(1);this.V0.H(Ak$);this.V0.Aj(
true);this.V0.T(A.aaR(A.acf.A46));this.V0.Bh(true);this.V0.IO(Aab);this.V0.I$(Aab
);this.St.H(AcL);this.St.Aj(true);this.St.T(A.aaR(A.acf.AsH));this.St.Bh(false);
this.St.Bx(1);this.St.Ga(-1);this.St.EU(1);this.Ss.H(Aye);this.Ss.Aj(true);this.
Ss.T(A.aaR(A.acf.Asl));this.Ss.Bh(true);this.Ss.Bx(0);this.Ss.Ga(-1);this.Ss.EU(
1);this.Acm.At(A._GetAutoObject(A.Device.Device).Axy);this.J(this.PE,0);this.J(this.
PF,0);this.J(this.Sr,0);this.J(this.V0,0);this.J(this.St,0);this.J(this.Ss,0);this.
PE.At([B=A._GetAutoObject(A.Device.Device),B.A8I,B.BaR]);this.PF.At([B=this.Acm,
B.B_,B.B$]);this.PF.CK(this.Acm);this.Sr.CK(this.Gd);this.Sr.Akw([B=A._GetAutoObject(
A.Device.Device),B.AEr,B.AIH]);this.V0.At([B=A._GetAutoObject(A.Device.Device),B.
A79,B.BaC]);this.St.CK(this.Gd);this.St.Akw([B=A._GetAutoObject(A.Device.Device)
,B.A8R,B.BaW]);this.Ss.CK(this.Gd);this.Ss.Akw([B=A._GetAutoObject(A.Device.Device
),B.ASl,B.AZS]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.PE._Done(
);this.PF._Done();this.Sr._Done();this.V0._Done();this.St._Done();this.Ss._Done(
);this.Gd._Done();this.Acm._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.PE._ReInit();this.PF._ReInit();this.Sr._ReInit();this.
V0._ReInit();this.St._ReInit();this.Ss._ReInit();this.Gd._ReInit();this.Acm._ReInit(
);this.I_(A.aaR(A.acf.Device));this.PE.T(A.aaR(A.acf.A_0));this.PE.IO(A.aaR(A.acf.
AG0));this.PE.I$(A.aaR(A.acf.AG0));this.PF.T(A.aaR(A.acf.A_7));this.Sr.T(A.aaR(A.
acf.HF));this.V0.T(A.aaR(A.acf.A46));this.St.T(A.aaR(A.acf.AsH));this.Ss.T(A.aaR(
A.acf.Asl));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.PE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AT7={V3:null,V2:
null,QL:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BhQ
],this.QL.Q,0);},BhQ:function(G){var F;A._GetAutoObject(A.Device.Device).Akq((F=
this.QL.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
Nb._Init.call(this.V3={I:this},0);C.Nb._Init.call(this.V2={I:this},0);C.AUn._Init.
call(this.QL={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AT7;var B;this.I_(A.aaR(A.acf.Asd));this.V3.H(IT);this.
V3.Aj(true);this.V3.T(A.aaR(A.acf.AjA));this.V3.Bh(false);this.V3.Ne(87);this.V2.
H(AW2);this.V2.Aj(true);this.V2.T(A.aaR(A.acf.Aqf));this.V2.Bh(true);this.V2.Ne(
88);this.QL.H(UV);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.A4N));this.QL.Bh(false);
this.QL.Ga(-1);this.QL.EU(1);this.EartagNrAssignmentMode.At(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V3,0);this.J(this.V2,0);this.J(this.
QL,0);this.V3.AR=[B=this.V3,B.Nh];this.V2.AR=[B=this.V2,B.Nh];this.QL.At([B=this.
EartagNrAssignmentMode,B.B_,B.B$]);this.QL.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.V3._Done();this.V2._Done(
);this.QL._Done();this.EartagNrAssignmentMode._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V3._ReInit();this.V2._ReInit();this.QL._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I_(A.aaR(A.acf.Asd));this.V3.T(A.aaR(
A.acf.AjA));this.V2.T(A.aaR(A.acf.Aqf));this.QL.T(A.aaR(A.acf.A4N));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WU={Q:null,TransponderProtocolToString:
null,Apj:null,Background:null,Y:null,Sl:null,GM:null,PK:null,OI:null,Po:null,C6:
null,EV:null,SJ:null,N1:null,CountryToString:null,At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},Kd:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GM.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).Bim();if(BM<900){var J4=A._GetAutoObject(
A.Device.Converter).ANq(BM);if(!!J4)this.C6.R(((this.CountryToString.Lt(J4)+AcJ)+
BM.toFixed())+Oa);else this.C6.R(BM.toFixed());if(J4===10){var AJ7=this.A6F((F=this.
Q,F[1].call(F[0])).Id);this.C6.R(this.C6.String+((((AHM+this.Apj.Bpc(AJ7))+AcJ)+
A.abl(this.Apj.Bpb(AJ7),2,10))+Oa));}this.C6.Z(true);this.Po.Z(true);this.OI.Z(false
);this.PK.Z(false);}else{this.OI.R(((A._GetAutoObject(A.Device.Converter).Bhd(BM
)+AcJ)+BM.toFixed())+Oa);this.OI.Z(true);this.PK.Z(true);this.C6.Z(false);this.Po.
Z(false);}if(BM===276){this.EV.R(this.Apj.BS(this.A6F((F=this.Q,F[1].call(F[0])).
Id)));this.EV.Z(true);}else this.EV.Z(false);this.N1.R(this.TransponderProtocolToString.
BS((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GM.R(A.jV);this.OI.
R(A.jV);this.EV.R(A.jV);this.C6.R(A.jV);this.N1.R(A.jV);}},A6F:function(J2){var Qt=
0;var J4=A._GetAutoObject(A.Device.Converter).ZV(J2);switch(J4){case 10:{var Gh=
A._GetAutoObject(A.Device.Helper).Sg(J2,8,2)|0;Qt=A._GetAutoObject(A.Device.Converter
).ACN(Gh);}break;default:;}return Qt;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apj={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Sl={I:this},0);C.CH._Init.call(this.GM={I:this},0);C.CH._Init.
call(this.PK={I:this},0);C.CH._Init.call(this.OI={I:this},0);C.CH._Init.call(this.
Po={I:this},0);C.CH._Init.call(this.C6={I:this},0);C.CH._Init.call(this.EV={I:this
},0);C.CH._Init.call(this.SJ={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WU;
this.H(AcK);this.Background.AZ(0x3F);this.Background.H(AcK);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcK);this.Y.JQ(9);this.Sl.H(AW3);this.Sl.Aj(true
);this.Sl.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.Sl.A5(0x11);this.Sl.L(A.jb.
Text);this.GM.H(AHN);this.GM.Aj(true);this.GM.R(AW4);this.GM.A5(0x14);this.GM.L(
A.jb.Text);this.PK.H(AHO);this.PK.Aj(true);this.PK.R(A.aaR(A.acf.A_u)+A.aaR(A.acf.
Colon));this.PK.A5(0x11);this.PK.L(A.jb.Text);this.OI.H(AHP);this.OI.Aj(true);this.
OI.R(AW5);this.OI.A5(0x14);this.OI.L(A.jb.Text);this.Po.H(AHO);this.Po.Aj(true);
this.Po.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Po.A5(0x11);this.Po.L(A.jb.Text
);this.C6.H(AHP);this.C6.Aj(true);this.C6.R(AW6);this.C6.A5(0x14);this.C6.L(A.jb.
Text);this.EV.H(AW7);this.EV.Aj(true);this.EV.R(AW8);this.EV.A5(0x14);this.EV.L(
A.jb.Text);this.SJ.H(AW9);this.SJ.Aj(true);this.SJ.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SJ.A5(0x11);this.SJ.L(A.jb.Text);this.N1.H(AW_);this.N1.Aj(true);this.
N1.R(AW$);this.N1.A5(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sl,0);this.J(this.GM,0);this.J(this.PK,0);this.J(this.OI,0
);this.J(this.Po,0);this.J(this.C6,0);this.J(this.EV,0);this.J(this.SJ,0);this.J(
this.N1,0);this.Sl.S(A.aaL(A.fl.Ak));this.Sl.A2(A.aaL(A.fl.Bi));this.GM.S(A.aaL(
A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bi));this.PK.S(A.aaL(A.fl.Ak));this.PK.A2(A.aaL(
A.fl.Bi));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bi));this.Po.S(A.aaL(A.
fl.Ak));this.Po.A2(A.aaL(A.fl.Bi));this.C6.S(A.aaL(A.fl.Ak));this.C6.A2(A.aaL(A.
fl.Bi));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bi));this.SJ.S(A.aaL(A.fl.
Ak));this.SJ.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apj._Done();this.Background._Done();this.Y._Done();this.Sl._Done();
this.GM._Done();this.PK._Done();this.OI._Done();this.Po._Done();this.C6._Done();
this.EV._Done();this.SJ._Done();this.N1._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apj._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sl.
_ReInit();this.GM._ReInit();this.PK._ReInit();this.OI._ReInit();this.Po._ReInit(
);this.C6._ReInit();this.EV._ReInit();this.SJ._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Sl.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.PK.R(A.aaR(A.acf.A_u
)+A.aaR(A.acf.Colon));this.Po.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.SJ.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Sl.S(A.aaL(A.fl.Ak));this.Sl.A2(A.aaL(A.fl.
Bi));this.GM.S(A.aaL(A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bi));this.PK.S(A.aaL(A.fl.Ak
));this.PK.A2(A.aaL(A.fl.Bi));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bi
));this.Po.S(A.aaL(A.fl.Ak));this.Po.A2(A.aaL(A.fl.Bi));this.C6.S(A.aaL(A.fl.Ak)
);this.C6.A2(A.aaL(A.fl.Bi));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bi)
);this.SJ.S(A.aaL(A.fl.Ak));this.SJ.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QT={D2:null,A_I:A.jV,Ai:function(Ae){C.Fm.Ai.call(
this,Ae);if(this.Mp.Fo())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zn(this.G8.AQ);},Zs:function(E){if(this.A_I===E)return;this.A_I=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fm._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QT;this.Background.H(AXa);this.
Mp.H(W0);this.OB.H(AHQ);this.QZ.H(AHQ);this.D2.H(AXb);this.D2.Z(false);this.J(this.
D2,0);this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=C.Fm;this.D2._Done();C.Fm._Done.call(this
);},_ReInit:function(){C.Fm._ReInit.call(this);this.D2._ReInit();this.G8.S(A.aaL(
A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,Aez:null,Ap:null,Text:null
,DK:A.jV,AmH:0,MZ:0,Ja:0,A49:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BBQ:function(G){this.Ap.H(this.Text.M);this.
Aez.H(this.Text.M);},Zn:function(E){if(this.AmH===E)return;this.AmH=E;this.Aez.L(
E);this.Text.L(E);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hl:function(E){
if(this.Ja===E)return;this.Ja=E;this.Text.Hl(E);},Blc:function(E){if(this.A49===
E)return;this.A49=E;this.Text.A5(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.Aez={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHR);
this.Aez.AZ(0x8);this.Aez.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHR);this.Text.Hl(5);this.Text.I9(true);this.Text.A5(0x14);this.
Text.L(A.jb.Text);this.J(this.Aez,0);this.J(this.Ap,0);this.J(this.Text,0);this.
Aez.Aw(A.aaL(A.ach.APM));this.Ap.Aw(A.aaL(A.ach.APL));this.Text.Q3([this,this.BBQ
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Aez._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Aez._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T3={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALc(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkJ();A._GetAutoObject(A.Device.Helper).Asi();},Ig:function(G){},AcP:function(
s){this.Ig(s);},A25:function(G){A._GetAutoObject(C.A$).Fy();},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},ALc:function(G){},BFY:function(s){this.ALc(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T3;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CX(A.jV);this.Dq(C.AqT);this.
DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(Fe);this.Y.JQ(9);this.Ay.H(
Is);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A25
];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVq={Wu:function(
G){this.Agr();this.I0(A.aaR(A.acf.AU0),[this,this.ATs],7);this.I0(A.aaR(A.acf.Ase
),[this,this.Blf],6);this.I0(A.aaR(A.acf.AF8),[this,this.ATe],3);this.I0(A.aaR(A.
acf.AnS),[this,this.AwL],2);this.I0(A.aaR(A.acf.AdP),[this,this.AEK],1);this.I0(
A.aaR(A.acf.Aus),[this,this.AEE],0);A._GetAutoObject(C.BR).FW();A._GetAutoObject(
C.BR).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dv(6);},DE:function(G){},Abn:function(){return C.AM3;},Abo:function(){return C.APu;
},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var ABq=A._NewObject(
A.Device.BoolFilterCriterion,0);ABq.Initialize(12,0,true,true);Be.CV(ABq);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(this,G);if(this.Akb()===
false){this.N.Cv(A.aaL(A.ach.Ase));this.N.Ck=[this,this.A5K];this.N.FN(A.jV);}this.
N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(41);},_Init:
function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AVq;var B;this.Dq(C.APq
);this.Dz(A.aaR(A.acf.A7y));this.AwG([B=A._GetAutoObject(A.Device.Device),B.A8V,
B.BaX]);},_ReInit:function(){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.A7y));}
,_className:"Application::WatchListScreen"};C.AL_={DE:function(G){var B;var JA=(
A.Core.BK.isPrototypeOf(G)?G:null);if(((JA.CO===4)||(JA.CO===5))===false){C.AxS.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var Bck=A._GetAutoObject(A.Device.Device).KV;var Td;if(JA.CO===5)Td=5;else Td=4;
var AA7=A._GetAutoObject(A.acj.DU).BcU(Bck,Td);var Gu=(((Bck+((AA7/2)|0))/AA7)|0
)*AA7;if(JA.CO===4)Gu+=AA7;else if(JA.CO===5)Gu-=AA7;if(Gu>999900)Gu=999900;if(Gu<
100)Gu=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(Gu);},Asw:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.
CE],this);else A._GetAutoObject(C.A$).Fy();},WI:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).Asy();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A_Y()===false){this.H7.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KV);this.H7.Cg(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A$).Fy();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H7.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KV);this.H7.Cg(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();}},AkQ:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.Co],this);},BcT:function(){var
ALq=A._GetAutoObject(A.Device.Helper).W.AhR(1);if(ALq>=100000)ALq=(Math.round(ALq
/1000)|0)*1000;return ALq;},_Init:function(aArg){C.AxS._Init.call(this,aArg);this.
__proto__=C.AL_;},_className:"Application::AnimalActionWeighingScreen"};C.AVb={V7:
null,YH:null,Rb:null,AeK:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
BW._Init.call(this.V7={I:this},0);C.BW._Init.call(this.YH={I:this},0);C.Rb._Init.
call(this.Rb={I:this},0);C.AeK._Init.call(this.AeK={I:this},0);this.__proto__=C.
AVb;var B;this.I_(A.aaR(A.acf.AG1));this.V7.H(AhX);this.V7.Aj(true);this.V7.T(A.
aaR(A.acf.A$l));this.V7.Bh(true);this.V7.Bx(0);this.YH.H(UV);this.YH.Aj(true);this.
YH.T(A.aaR(A.acf.A$k));this.YH.Bh(false);this.J(this.V7,0);this.J(this.YH,0);this.
V7.At([B=this.Rb,B.B_,B.B$]);this.V7.CK(this.Rb);this.YH.At([B=this.AeK,B.B_,B.B$
]);this.YH.CK(this.AeK);},_Done:function(){this.__proto__=C.Cd;this.V7._Done();this.
YH._Done();this.Rb._Done();this.AeK._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.V7._ReInit();this.YH._ReInit();this.Rb._ReInit();
this.AeK._ReInit();this.I_(A.aaR(A.acf.AG1));this.V7.T(A.aaR(A.acf.A$l));this.YH.
T(A.aaR(A.acf.A$k));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.
V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeK={MassUnitToString:null
,Dt:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AwH(E);}
,Init:function(aArg){var B;A.zX([this,this.Bdw],[B=A._GetAutoObject(A.Device.Device
),B.ASk,B.AZR],0);A.pe([this,this.Bdw],this);},Bdw:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeK;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxS={H7:null,Ajq:null,MassUnit:null,
KV:null,Vv:null,AnF:null,Acz:null,ZW:null,O0:null,Yx:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).AfZ());A.zX([this,this.AKs],[B=A._GetAutoObject(
A.Device.Device),B.AEu,B.AIK],0);A.zX([this,this.BAB],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.AIO],0);A.zX([this,this.BAC],[B=this.O0,B.Arp,B.Jw],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxL();this.AcB();},IY:function(G){this.WI(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).Asy();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);this.H7.Gq();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGH();else{var BB5=this.BcT();this.ZW.Z(true);this.Acz.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BB5);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).Asy();else A._GetAutoObject(A.Device.Device).AhJ(
);},AxL:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bgi();break;case 3:{this.Bgi();this.ZW.Z(false);this.Acz.Z(false
);if(this.A_Y()){this.Vv.Z(false);this.KV.H(A.abO(this.KV.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O0.Ar(true);this.O0.Z(true);this.Bb(this.O0);}}break;
case 4:this.KV.R(A.aaR(A.acu.Ake));break;default:A.ab5("%s%e",AHS,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcB:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C1(A.aaL(A.ach.Aeu));this.N.Cv(null);
this.Yx.Z(false);this.N.C5(A.aaL(A.ach.AmV));this.N.CX(A.jV);}break;case 3:{if(this.
O0.AY<=1){this.N.C1(null);this.N.Cv(null);this.Yx.Z(false);this.N.C5(null);}else{
this.N.C1(A.aaL(A.ach.AmT));this.N.Cv(A.aaL(A.ach.Aev));this.Yx.Z(true);this.N.C5(
null);}this.N.CX(A.aaR(A.acf.Ok));}break;case 4:{this.N.C5(A.aaL(A.ach.AvC));this.
N.Co=[this,this.Bk5];this.N.Cv(null);this.Yx.Z(false);this.N.CX(A.jV);}break;default:;
}},Asw:function(G){},BvY:function(s){this.Asw(s);},WI:function(G){},AZ9:function(
s){this.WI(s);},Bk5:function(G){this.CC(this);},BAB:function(G){this.Am();},AKs:
function(G){this.Am();},A_Y:function(){var Auj=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auj>0)&&!A._GetAutoObject(A.Device.Helper).Bo$(Auj
,this.H7.Timestamp);},AkQ:function(G){},AZ8:function(s){this.AkQ(s);},BAC:function(
G){this.Am();},Bgi:function(){this.KV.R(A._GetAutoObject(A.Device.Converter).Ak4(
A._GetAutoObject(A.Device.Device).KV));},BcT:function(){return A._GetAutoObject(
A.Device.Helper).W.AhR(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Ajq={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.Vv={I:this
},0);C.AxK._Init.call(this.AnF={I:this},0);A.acg.Aek._Init.call(this.Acz={I:this
},0);A.acg.Aek._Init.call(this.ZW={I:this},0);C.AVv._Init.call(this.O0={I:this},
0);A.acg.Ap._Init.call(this.Yx={I:this},0);this.__proto__=C.AxS;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dq(C.II);this.Ajq.AZ(0x3F);this.Ajq.H(Ayf);this.Ajq.
L(A.jb.CJ);this.MassUnit.H(AXc);this.MassUnit.A5(0x9);this.MassUnit.R(A.aaR(A.acf.
Az3));this.MassUnit.L(A.jb.Text);this.KV.H(AXd);this.KV.A5(0x14);this.KV.R(A.aaR(
A.acu.Ake));this.KV.L(A.jb.Text);this.Vv.H(AXe);this.Vv.R(A.aaR(A.acf.A$w));this.
Vv.L(A.jb.Text);this.Vv.Z(true);this.AnF.H(AXf);this.Acz.H(AHT);this.Acz.L(A.jb.
Ad7);this.Acz.Z(false);this.ZW.H(AXg);this.ZW.L(A.jb.Ad7);this.ZW.BlT(true);this.
ZW.Z(false);this.O0.AZ(0x3F);this.O0.H(Ayf);this.O0.Ar(false);this.O0.Z(false);this.
Yx.H(AXh);this.Yx.L(A.jb.Bm);this.J(this.Ajq,0);this.J(this.MassUnit,0);this.J(this.
KV,0);this.J(this.Vv,0);this.J(this.Acz,0);this.J(this.ZW,0);this.J(this.O0,0);this.
J(this.Yx,0);this.N.CE=[this,this.BvY];this.N.Ck=[this,this.AZ8];this.N.Co=[this
,this.AZ9];this.MassUnit.S(A.aaL(A.fl.EK));this.KV.S(A.aaL(A.fl.Aen));this.Vv.S(
A.aaL(A.fl.EK));this.Acz.Zr(this.AnF);this.ZW.Zr(this.AnF);this.H7=A._NewObject(
A.Device.Rating,0);this.O0.LY(A._GetAutoObject(A.Device.Helper).W);this.O0.Akx(this.
H7);this.Yx.Aw(A.aaL(A.ach.AQB));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajq._Done();this.MassUnit._Done();this.KV._Done();this.Vv._Done();this.
AnF._Done();this.Acz._Done();this.ZW._Done();this.O0._Done();this.Yx._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajq._ReInit();
this.MassUnit._ReInit();this.KV._ReInit();this.Vv._ReInit();this.AnF._ReInit();this.
Acz._ReInit();this.ZW._ReInit();this.O0._ReInit();this.Yx._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az3));this.KV.R(A.aaR(A.acu.Ake));this.Vv.R(A.aaR(A.acf.A$w));this.
MassUnit.S(A.aaL(A.fl.EK));this.KV.S(A.aaL(A.fl.Aen));this.Vv.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVz={FH:null
,OJ:null,M_:null,C9:null,LV:null,T0:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FH,B.B_,B.B$],0);A.pe([this,this.GH],this);},CC:function(G){C.Cd.CC.
call(this,G);A.pe([this,this.GH],this);},BjS:function(G){var F;this.LV.BT.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BT.R((A._GetAutoObject(A.Device.Converter).S5((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aar());},GH:function(
G){var AJp=true;if(this.FH.Q===1)AJp=false;this.C9.Aj(AJp);this.C9.Ar(AJp);this.
C9.Z(AJp);A._GetAutoObject(A.Device.Helper).ANk(this.Y);},_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.AMu._Init.call(this.FH={I:this},0);C.AHa._Init.call(this.
OJ={I:this},0);C.AUs._Init.call(this.M_={I:this},0);C.AkO._Init.call(this.C9={I:
this},0);C.Iq._Init.call(this.LV={I:this},0);C.BW._Init.call(this.T0={I:this},0);
this.__proto__=C.AVz;var B;this.I_(A.aaR(A.acf.Settings));this.Hh.R(A.aaR(A.acf.
AsK));this.FH.At(A._GetAutoObject(A.Device.Device).AnimalType);this.OJ.At(A._GetAutoObject(
A.Device.Device).OJ);this.M_.H(AXi);this.M_.Aj(true);this.C9.H(AsY);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KH));this.C9.Bh(true);this.C9.Ga(1000);this.C9.EU(99000);
this.LV.H(AsZ);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A4R));this.LV.Ga(50);this.
LV.EU(2000);this.LV.ASX(A._GetAutoObject(A.acj.DU).AzK());this.T0.H(AcL);this.T0.
Aj(true);this.T0.T(A.aaR(A.acf.A7g));this.T0.Ga(-1);this.T0.EU(1);this.JW(this.Y
,-1);this.JW(this.Ay,-1);this.J(this.M_,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T0,0);this.M_.AeR([B=this.M_,B.FU]);this.M_.Gr([this,this.D_,this.GQ]);this.
M_.Akt(A.aaL(A.ach.Edit));this.M_.LX([B=this.M_,B.AyM]);this.M_.L0(A.aaL(A.ach.AnJ
));this.M_.At([B=this.FH,B.B_,B.B$]);this.M_.CK(this.FH);this.M_.A9S([B=this.FH,
B.ASD,B.AZ6]);this.M_.A9R([B=this.FH,B.ASC,B.AZ5]);this.C9.Gr([this,this.D_,this.
GQ]);this.C9.LX([B=this.M_,B.AyM]);this.C9.L0(A.aaL(A.ach.AnJ));this.C9.At([B=this.
FH,B.A77,B.ASJ]);this.LV.Gr([this,this.D_,this.GQ]);this.LV.LX([B=this.M_,B.AyM]
);this.LV.L0(A.aaL(A.ach.AnJ));this.LV.At([B=this.FH,B.A76,B.ASH]);this.LV.A95([
this,this.BjS]);this.T0.Gr([this,this.D_,this.GQ]);this.T0.At([B=this.OJ,B.B_,B.
B$]);this.T0.CK(this.OJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;
this.FH._Done();this.OJ._Done();this.M_._Done();this.C9._Done();this.LV._Done();
this.T0._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.FH._ReInit();this.OJ._ReInit();this.M_._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T0._ReInit();this.I_(A.aaR(A.acf.Settings));this.Hh.R(A.aaR(A.acf.
AsK));this.C9.T(A.aaR(A.acf.KH));this.LV.T(A.aaR(A.acf.A4R));this.T0.T(A.aaR(A.acf.
A7g));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.FH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUs={YT:null,Init:
function(aArg){var B;A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Device),B.
ASk,B.AZR],0);A.pe([this,this.AfC],this);},A3x:function(G){A._GetAutoObject(A.Device.
Device).A6(37,true,A.jV,0,[this,this.Ba$]);},A1l:function(G){var F;if(this.A8===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzK();if(this.D7<this.
AlJ)this.D7=this.AlJ;if(this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.
D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzK();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JT
)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);}}this.DJ(this);this.Am();
},A1X:function(G){var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzK();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.JU
)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzK();if(this.DW>this.AlE)this.DW=
this.AlE;if(this.DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(
this.JT,0);}}this.DJ(this);this.Am();},GH:function(G){this.PH.R(AHU+A._GetAutoObject(
A.Device.Converter).S5(this.D7,2,true));this.PG.R(AHU+A._GetAutoObject(A.Device.
Converter).S5(this.DW,2,true));this.Sv.R(A._GetAutoObject(A.acj.DU).Aar());this.
YT.R(this.Sv.String);},A28:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Ask(this
);},A1Q:function(Ath){if(Ath===1)return this.PH;else if(Ath===2)return this.PG;else
return null;},_Init:function(aArg){C.Acj._Init.call(this,aArg);A.acg.Text._Init.
call(this.YT={I:this},0);this.__proto__=C.AUs;this.T(A.aaR(A.acf.ACi));this.AlE=
2000;this.AlJ=20;this.Background.H(KX);this.V.H(BD);this.V.R(A.aaR(A.acf.ACi)+A.
aaR(A.acf.Colon));this.V.A5(0x12);this.AkG.H(AXj);this.AkH.H(AXk);this.Q4.H(AXl);
this.QC.H(AXm);this.PG.H(AXn);this.PH.H(AXo);this.Sv.H(AXp);this.YT.H(AXq);this.
YT.I9(false);this.YT.A5(0x12);this.YT.L(0xFF000000);this.JW(this.H4,-8);this.J(this.
YT,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YT.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acj;this.YT._Done();C.Acj.
_Done.call(this);},_ReInit:function(){C.Acj._ReInit.call(this);this.YT._ReInit();
this.T(A.aaR(A.acf.ACi));this.V.R(A.aaR(A.acf.ACi)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YT.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acj._Mark.call(this,D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABv={M:P7,A6S:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6S();},_Init:function(
aArg){A.Graphics.Hy._Init.call(this,aArg);this.__proto__=C.ABv;},_className:"Application::AbstractPath"
};C.Ap_={DP:null,DY:null,Rg:null,AdL:null,PY:null,AdK:null,Aur:1,A4n:0,Bb4:false
,AzG:true,CP:function(){this.Bge(this);},Init:function(aArg){var B;this.Bb(this.
AdL);A.zX([this,this.Bge],[B=this.AdL,B.A8b,B.BaG],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdK.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bhw(this.Aur+this.A4n)));if(this.Aur===1)this.PY.R(A.aaR(A.acf.AM_));else this.
PY.R(A.aaR(A.acf.Bg8));},CC:function(G){if(this.AzG)this.AzG=false;else if(this.
DP.Bcb()===false)A.pe([this,this.A2F],this);else if(this.DP.AzV())this.DP.Ac3();
A.zV([this,this.Af7],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Af7],A._GetAutoObject(A.Device.Device).An,0);},A2F:function(G){this.
Bb4=true;A._GetAutoObject(C.A$).Fy();},Bge:function(G){var B;var BcD=(C.Wg.isPrototypeOf(
B=this.AdL.AV)?B:null);if(!!BcD){var Ay2=A._NewObject(A.Device.ActionToString,0);
this.Rg.R(Ay2.Lt(BcD.Action));}},Ig:function(G){var Cx=(C.Wg.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DP.Qj(Cx.Action);this.Bk8(this.Aur+1);},Bz8:function(G){
if(A._GetAutoObject(C.Pi).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bk8:function(E){
if(this.Aur===E)return;this.Aur=E;this.Am();},Af7:function(G){if((this.Bb4===false
)&&(this.DP.Bcb()===false))A.pe([this,this.A2F],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);C.CH._Init.call(this.
Rg={I:this},0);C.ARp._Init.call(this.AdL={I:this},0);C.CH._Init.call(this.PY={I:
this},0);A.acg.Text._Init.call(this.AdK={I:this},0);this.__proto__=C.Ap_;this.Background.
L(A.jb.CS);this.N.H(W$);this.N.Z(true);this.Dq(C.II);this.DY.AZ(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CJ);this.Rg.H(AHV);this.Rg.L(A.jb.Text);this.AdL.H(AXr);this.
PY.H(Ayg);this.PY.R(A.aaR(A.acf.AM_));this.PY.L(A.jb.Text);this.AdK.H(AHW);this.
AdK.R(AXs);this.AdK.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rg,0);this.J(this.
AdL,0);this.J(this.PY,0);this.J(this.AdK,0);this.N.CE=[this,this.A2F];this.N.Ck=[
this,this.Bz8];this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(A.ach.Aex));this.Rg.S(
A.aaL(A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Ct(A.aaL(A.fl.Ak));this.AdL.A26=[
this,this.Ig];this.PY.S(A.aaL(A.fl.EK));this.PY.A2(A.aaL(A.fl.Af));this.PY.Ct(A.
aaL(A.fl.Ak));this.AdK.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rg._Done();this.
AdL._Done();this.PY._Done();this.AdK._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rg._ReInit();this.AdL._ReInit();
this.PY._ReInit();this.AdK._ReInit();this.PY.R(A.aaR(A.acf.AM_));this.Rg.S(A.aaL(
A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Ct(A.aaL(A.fl.Ak));this.PY.S(A.aaL(
A.fl.EK));this.PY.A2(A.aaL(A.fl.Af));this.PY.Ct(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdK)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARp={Ia:null,A26:null,Cq:null,Y:null,Ay:
null,A3L:0,Init:function(aArg){A.zV([this,this.ABl],this.Ia,0);A.zV([this,this.Bgb
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Auo],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABl],this);},Bb:function(E){var A2B=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2B)A.abo([this,this.A8b,this.BaG],0);},DE:
function(G){var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case
7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QF(X,Fh,0x415);
if((Fh===5)&&!X){var AK5=this.AV;while(!X){AK5=this.QF(AK5,2,0x415);if(!!AK5)X=this.
QF(AK5,Fh,0x415);else break;}}if(!!X)this.Bb(X);var GX=(C.Wg.isPrototypeOf(B=this.
AV)?B:null);if(!!GX)this.A3L=(C.Wg.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3L=0;A.pe([this,this.MO],this);},A1e:function(ED){var EP=A._GetAutoObject(C.DP).
Bcj(ED,this.A26);this.J(EP,0);},AoW:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(AdG);
}},ABl:function(G){this.AoW();var O;var CB=A._GetAutoObject(C.Pi).NP();for(O=0;O<
CB;O=O+1){var Aai=A._GetAutoObject(C.Pi).OC(O);this.A1e(Aai);}A.pe([this,this.Bgb
],this);A.pe([this,this.Bpx],this);A.pe([this,this.Auo],this);},Bpx:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wg.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Auo:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATn(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATn(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATn(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((
B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Bgb:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pi).NU(Aa.Action)&&A._GetAutoObject(C.
DP).A4m(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3L===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARp;this.H(AXt);this.Cq.Filter=147;this.Y.AZ(0xB);this.Y.H(AXu);this.Y.JQ(9);this.
Ay.AZ(0xA);this.Ay.H(AXv);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.El=[this,this.Fj];this.Ia=A._GetAutoObject(
C.Pi);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A26)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fq={Ej:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fq;this.N.Ar(false);this.Ej.H(BD);this.Ej.Ar(false
);this.AK.H(Fe);this.AK.L(A.jb.Ad7);this.Text.H(BD);this.Text.R(AXw);this.Text.L(
0xFF000000);this.Ap.H(P7);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cv(A.aaL(A.ach.Aex));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC7));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaP={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IY:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FQ=A.jb.Ad7;var GW=A.jb.CS;if(this.Hj){FQ=A.jb.Text;GW=A.jb.
Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.Qp){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.Hw.L(A.
jb.CS);this.H4.L(A.jb.CS);},Hk:function(G){var B;var Gf=this.Dy.G4;var Cz=(C.CH.
isPrototypeOf(B=this.Dy.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bi));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gk(Gf));else Cz.R(W9);Cz.H(A.
abK(Cz.M,[this.Dy.V9,(B=this.Dy.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.AaP;this.Dy.AFa(170);this.Dy.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Aje={C8:null,Init:function(
aArg){this.V.Text.A5(0x11);this.V.Text.Hl(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cn.Ai.call(this,Ae);var FQ=A.jb.Ad7;var GW=A.jb.CS;if(this.Hj){FQ=A.jb.Text;
GW=A.jb.Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.
Qp){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}},_Init:function(
aArg){C.Cn._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aje;this.C8.H(AXx);this.C8.Cu(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajn)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.C8._Done();C.Cn._Done.
call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Cn._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALR={Y:null,RJ:null,Tp:null
,Tq:null,Tr:null,AdJ:null,XH:null,Vn:null,Vo:null,AaO:null,Ay:null,Init:function(
aArg){this.Bb(this.RJ);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},IY:
function(G){this.Bfu(this);},Ll:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.Bfu];this.BP.Ck=null;this.BP.Co=null;this.BP.CX(A.jV);
this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},AA0:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XH.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XH.Q))A._GetAutoObject(C.AutoActions).J(this.XH.Q);if(!!this.Vn.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vn.Q))A._GetAutoObject(C.AutoActions
).J(this.Vn.Q);if(!!this.Vo.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vo.
Q))A._GetAutoObject(C.AutoActions).J(this.Vo.Q);if(!!this.AaO.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaO.Q))A._GetAutoObject(C.AutoActions).J(this.AaO.Q
);A._GetAutoObject(C.AutoActions).Cg();},Bfu:function(G){if(this.Bze()===true){this.
AA0();this.AaC(this);}else A._GetAutoObject(A.Device.Device).A6(27,true,A.jV,0,null
);},Bze:function(){return(!!this.XH.C7(this.XH.Q)||!!this.Vn.C7(this.Vn.Q))||!!this.
Vo.C7(this.Vo.Q);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true
,null,null);},BAi:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XH.Ato(this);this.Vn.Ato(this);this.Vo.Ato(this);this.AaO.Ato(this);}
,_Init:function(aArg){C.Fq._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaP._Init.call(this.RJ={I:this},0);C.AaP._Init.call(this.Tp={I:this},0);C.
AaP._Init.call(this.Tq={I:this},0);C.AaP._Init.call(this.Tr={I:this},0);C.AuW._Init.
call(this.AdJ={I:this},0);C.AutoAction._Init.call(this.XH={I:this},0);C.AutoAction.
_Init.call(this.Vn={I:this},0);C.AutoAction._Init.call(this.Vo={I:this},0);C.AutoAction.
_Init.call(this.AaO={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALR;var B;this.H(Rl);this.Text.R(A.aaR(A.acf.Ts));this.Y.H(L1);this.Y.JQ(1);this.
RJ.H(AhX);this.RJ.Ar(true);this.RJ.Aj(true);this.RJ.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajd),P8,AHX));this.Tp.H(UV);this.Tp.Ar(true);this.Tp.Aj(true
);this.Tp.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P8,AHY));this.
Tq.H(Aaa);this.Tq.Ar(true);this.Tq.Aj(true);this.Tq.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajd),P8,AHZ));this.Tr.H(Ak$);this.Tr.Ar(true);this.Tr.Aj(
true);this.Tr.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P8,AH0));this.
AdJ.H(Ayh);this.AdJ.Aj(true);this.AdJ.T(A.aaR(A.acf.A_F));this.Vn.Index=1;this.Vo.
Index=2;this.AaO.Index=3;this.Ay.H(Is);this.J(this.Y,0);this.J(this.RJ,0);this.J(
this.Tp,0);this.J(this.Tq,0);this.J(this.Tr,0);this.J(this.AdJ,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fj];this.RJ.Zo(A.aaL(A.fl.H1));this.RJ.Zp(A.aaL(A.fl.H1
));this.RJ.At([B=this.XH,B.B_,B.B$]);this.RJ.CK(this.XH);this.Tp.Zo(A.aaL(A.fl.H1
));this.Tp.Zp(A.aaL(A.fl.H1));this.Tp.At([B=this.Vn,B.B_,B.B$]);this.Tp.CK(this.
Vn);this.Tq.Zo(A.aaL(A.fl.H1));this.Tq.Zp(A.aaL(A.fl.H1));this.Tq.At([B=this.Vo,
B.B_,B.B$]);this.Tq.CK(this.Vo);this.Tr.Zo(A.aaL(A.fl.H1));this.Tr.Zp(A.aaL(A.fl.
H1));this.Tr.At([B=this.AaO,B.B_,B.B$]);this.Tr.CK(this.AaO);this.AdJ.AR=[this,this.
BAi];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done();this.
RJ._Done();this.Tp._Done();this.Tq._Done();this.Tr._Done();this.AdJ._Done();this.
XH._Done();this.Vn._Done();this.Vo._Done();this.AaO._Done();this.Ay._Done();C.Fq.
_Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit();this.
RJ._ReInit();this.Tp._ReInit();this.Tq._ReInit();this.Tr._ReInit();this.AdJ._ReInit(
);this.XH._ReInit();this.Vn._ReInit();this.Vo._ReInit();this.AaO._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Ts));this.RJ.T(A._GetAutoObject(A.Device.Helper
).Nk(A.aaR(A.acf.Ajd),P8,AHX));this.Tp.T(A._GetAutoObject(A.Device.Helper).Nk(A.
aaR(A.acf.Ajd),P8,AHY));this.Tq.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.
Ajd),P8,AHZ));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P8
,AH0));this.AdJ.T(A.aaR(A.acf.A_F));},_Mark:function(D){var B;C.Fq._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cl={Cb:
A.abi(16,0,null),Dt:function(){return 16;},C7:function(aIndex){if(aIndex>=16)return-
1;return this.Cb.Get(aIndex);},DZ:function(A9){var O=0;while(O<16){if(this.Cb.Get(
O)===A9)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<16){
if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cb=[]).__proto__=C.Cl.Cb;this.__proto__=C.Cl;
},_className:"Application::ArraySelection"};C.AutoAction={Ia:null,Ac3:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Ato],this.Ac3,0);A.pe([this,this.
Ato],this);},Dt:function(){return this.Ia.NP();},C7:function(aIndex){if(aIndex>=
this.Dt())return-1;return this.Ia.OC(aIndex);},Gk:function(aIndex){return this.ActionToString.
BS(this.C7(aIndex));},DZ:function(A9){var O=0;while(O<this.Dt()){if(this.Ia.OC(O
)===A9)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<this.
Dt()){if(this.Ia.OC(O)>max)max=this.Ia.OC(O);O=O+1;}return max;},Ato:function(G){
this.Q=this.Ac3.OC(this.Index);A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ia=A._GetAutoObject(C.AuG);this.Ac3=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.ALW={Atl:0,Init:function(aArg
){var B;A.zX([this,this.BdY],[B=A._GetAutoObject(A.Device.Device),B.A7U,B.Bas],0
);A.zX([this,this.BdV],[B=A._GetAutoObject(A.Device.Device),B.AR9,B.AZM],0);A.pe([
this,this.BdY],this);A.pe([this,this.BdV],this);},Clear:function(){C.Vs.Clear.call(
this);this.Atl=0;},Cg:function(){A._GetAutoObject(A.Device.Device).Arv(this.Atl);
A._GetAutoObject(A.Device.Device).Arw(this.toString());},BdY:function(G){this.Atl=
A._GetAutoObject(A.Device.Device).Pi;A.we(this,0);},BdV:function(G){this.E3(A._GetAutoObject(
A.Device.Device).Aut);A.we(this,0);},NU:function(ED){if((this.Atl&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUi:function(
ED){this.Atl=this.Atl|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vs._Init.
call(this,aArg);this.__proto__=C.ALW;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pi={_Init:function(){C.ALW._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ALX={Vq:null,Ay:null,Y:null,JN:null,CP:function(
){this.AiF(this);},Init:function(aArg){A.zV([this,this.AiF],this.Vq,0);A.pe([this
,this.AiF],this);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},Ll:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.Ev];this.BP.Ck=[
this,this.A2N];this.BP.Co=[this,this.A3g];this.BP.C5(A.aaL(A.ach.Aq6));this.BP.Cv(
A.aaL(A.ach.AqZ));this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},Ev:function(G){if(
this.Bx8()>0){this.AA0();this.AaC(this);}else A._GetAutoObject(A.Device.Device).
A6(28,true,A.jV,0,null);},AiF:function(G){this.AoW();var O;for(O=0;O<this.Vq.NP(
);O=O+1){var Aai=A._GetAutoObject(C.Pi).OC(O);this.A0T(Aai);}this.J(this.JN,0);A.
aaS([this,this.MO],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-
B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G
){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},A0T:function(G_){var Ay2=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sd,0);Aa.T(Ay2.BS(G_));Aa.Aj(true);Aa.G4=G_;Aa.A9F(this.
Vq.NU(G_));this.J(Aa,0);this.ZA(Aa);},AoW:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(
AdG);}},AA0:function(){var B;this.Vq.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JN)){var Aa=(C.Sd.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vq.J(Aa.G4);if(Aa.ASi())this.Vq.AUi(Aa.G4);}else A.ab5(
"%s",Ayi);}X=X.Ah;}this.Vq.Cg();},Bx8:function(){var B;var A3M=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JN)){var
Aa=(C.Sd.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASi())A3M=A3M+1;}else A.ab5("%s"
,Ayi);}X=X.Ah;}return A3M;},A2N:function(G){var B;var Aa=(C.Sd.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAg=(C.Sd.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAg){this.
Ahy(AAg,Aa);A.pe([this,this.MO],this);}}},A3g:function(G){var B;var Aa=(C.Sd.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAM=(C.Sd.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAM
){this.Ahy(Aa,AAM);A.pe([this,this.MO],this);}}},AqC:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiF],this);},_Init:function(
aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.AuW._Init.call(this.JN={I:this},0);this.__proto__=C.ALX;
this.H(Rl);this.Text.R(A.aaR(A.acf.AD8));this.Ay.H(Is);this.Y.H(L1);this.Y.JQ(1);
this.JN.H(AH1);this.JN.Aj(true);this.JN.T(A.aaR(A.acf.AqC));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JN,0);this.Y.El=[this,this.Fj];this.JN.AR=[this,this.AqC
];this.Vq=A._GetAutoObject(C.Pi);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Ay._Done();this.Y._Done();this.JN._Done();C.Fq._Done.call(this);},_ReInit:
function(){C.Fq._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JN._ReInit(
);this.Text.R(A.aaR(A.acf.AD8));this.JN.T(A.aaR(A.acf.AqC));this.CP();},_Mark:function(
D){var B;C.Fq._Mark.call(this,D);if((B=this.Vq)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sd={G4:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A5(0x11);this.
V.Text.Hl(10);},Bl:function(aSize){C.T7.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.T7.Ai.call(this,Ae);var Hd=((Ae&0x10
)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FQ=A.jb.Ad7;var GW=A.jb.
Bm;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.L(FQ);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);
}this.LF=Hd;this.KD=Fu;this.Qp=GE;},IY:function(G){this.A3e(this);},A3e:function(
G){this.AES(!this.Amu);},A9F:function(E){this.AES(E);},ASi:function(){return this.
Amu;},_Init:function(aArg){C.T7._Init.call(this,aArg);this.__proto__=C.Sd;this.Ml.
H(AXy);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vs={CB:0,
Ia:A.abi(17,0,null),OC:function(Hz){return this.Ia.Get(Hz);},NP:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ia.Set(O,0);this.CB=0;},J:function(
ED){if(this.CB>=17)A.ab5("%s",AH2);else{this.Ia.Set(this.CB,ED);this.CB=this.CB+
1;}},Cg:function(){},E3:function(AcR){var AJc=AcR.indexOf(String.fromCharCode(0x2C
),0);var A1f=A.jV;var O=0;this.CB=0;while(O<17)if(AcR===A.jV){this.Ia.Set(O,0);O++;
}else{if(AJc===-1){A1f=AcR;AcR=A.jV;}else{A1f=A.abV(AcR,AJc);AcR=A.ab1(AcR,0,AJc+
1);}var Aai=A.abZ(A1f,0,10)|0;if(this.ADL(Aai)){this.Ia.Set(this.CB,Aai);this.CB=
this.CB+1;O++;}AJc=AcR.indexOf(String.fromCharCode(0x2C),0);}if(AcR!==A.jV)A.ab5(
"%s",AXz);},toString:function(){var A2s=(((B=this.Ia.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CB;O=O+1)A2s=(A2s+AH3)+(((B=this.Ia.Get(O))<0)?B+
0x100000000:B).toFixed();return A2s;},Axm:function(Hz,ED){if(Hz>=this.CB){A.ab5(
"%s",((((AXA+Hz.toFixed())+AXB)+this.CB.toFixed())+AXC)+AXD);return;}this.Ia.Set(
Hz,ED);},Contains:function(ED){var O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===
ED)return true;return false;},ADL:function(ED){return true;},DZ:function(ED){var
O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.Ia=[]).__proto__=C.Vs.Ia;this.__proto__=C.Vs;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AME={Init:function(aArg){var B;A.zX([this,this.Bd9
],[B=A._GetAutoObject(A.Device.Device),B.A75,B.BaA],0);A.pe([this,this.Bd9],this
);},Cg:function(){A._GetAutoObject(A.Device.Device).Ako(this.toString());},ADL:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bd9:function(G){this.E3(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.
__proto__=C.AME;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AME._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wg={Vp:null,Ku:null,A6R:A.jV,Action:0,A4o:
false,A_r:false,A_9:false,Bl:function(aSize){C.Fm.Bl.call(this,aSize);this.QZ.H(
this.Mp.M);this.OB.H(this.QZ.M);},Ai:function(Ae){C.Fm.Ai.call(this,Ae);if(!this.
LF){this.Ku.TS.L(A.jb.AmW);this.Ku.QH.Z(true);this.Ku.QH.L(A.jb.AQN);}else if(this.
Qp){this.Ku.TS.L(A.jb.Bm);this.Ku.QH.Z(false);}else if(this.KD){this.Ku.TS.L(A.jb.
Bm);this.Ku.QH.Z(false);}else{this.Ku.TS.L(A.jb.Text);this.Ku.QH.Z(true);this.Ku.
QH.L(A.jb.CS);}},Bk7:function(E){if(this.Action===E)return;this.Action=E;},Bmc:function(
E){if(this.A6R===E)return;this.A6R=E;this.Vp.Text.R(E);},ATn:function(E){if(this.
A_9===E)return;this.A_9=E;this.Ku.BmZ(!this.Ku.AUH);},AFr:function(E){if(this.A_r===
E)return;this.A_r=E;this.Ku.Z(!this.Ku.Fo());},A88:function(E){if(this.A4o===E)return;
this.A4o=E;this.Vp.Z(E);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Vp._Init.
call(this.Vp={I:this},0);C.Ku._Init.call(this.Ku={I:this},0);this.__proto__=C.Wg;
this.H(AXE);this.Background.H(AXF);this.G8.Ar(false);this.G8.Z(false);this.Vp.H(
AXG);this.Vp.Z(false);this.Ku.H(AXH);this.Ku.Z(false);this.J(this.Vp,0);this.J(this.
Ku,0);this.Mp.Aw(A.aaL(A.ach.AM$));},_Done:function(){this.__proto__=C.Fm;this.Vp.
_Done();this.Ku._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Vp._ReInit();this.Ku._ReInit();},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ku)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vp={AK:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AK.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AK={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vp;this.AK.H(AXI);this.AK.L(A.
jb.BiS);this.H(AXJ);this.Text.H(AXK);this.Text.L(A.jb.Text);this.BU.H(AXL);this.
BU.Ng(1);this.BU.L(A.jb.Text);this.J(this.AK,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AK._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AK._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Ku={QH:null,TS:null,AUH:false,BmZ:function(E){if(this.
AUH===E)return;this.AUH=E;if(E){this.TS.Aw(A.aaL(A.ach.ACp));this.QH.Aw(A.aaL(A.
ach.ACp));}else{this.TS.Aw(A.aaL(A.ach.Aqw));this.QH.Aw(A.aaL(A.ach.Aqw));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QH={I:this
},0);A.acg.Ap._Init.call(this.TS={I:this},0);this.__proto__=C.Ku;this.H(Ayj);this.
QH.H(Ayj);this.QH.Cu(1);this.TS.H(Ayj);this.TS.Cu(0);this.J(this.QH,0);this.J(this.
TS,0);this.QH.Aw(A.aaL(A.ach.Aqw));this.TS.Aw(A.aaL(A.ach.Aqw));},_Done:function(
){this.__proto__=A.Core.P;this.QH._Done();this.TS._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QH._ReInit();this.TS._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARN={Ge:null,Ca:null,Do:null,Dh:null,Kp:null,Zf:10,AqW:0,AEg:0,AR1:0,Ay1:false
,LU:false,Bca:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).An.Lf())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.
Device).An.HI().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gq();A._GetAutoObject(
A.Device.Helper).Aqb(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAu],this.
C$.Q,0);A.zX([this,this.Bz5],this.Do.Q,0);A.zX([this,this.ABj],this.Dh.Q,0);A.zX([
this,this.ABj],this.Dh.HG.Q,0);A.zX([this,this.ABj],[this,this.ASp,this.AFp],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A80,B.Ba2],0);A.zX([this
,this.BeH],this.Ca.Q,0);A.pe([this,this.AAu],this);A.pe([this,this.GH],this);A.pe([
this,this.ABj],this);A.pe([this,this.BeH],this);},CC:function(G){if(!this.Ay1){this.
Ay1=true;A.pe([this,this.AcO],this);}else C.HY.CC.call(this,G);},Agb:function(G){
this.AR1=this.Zf;this.Bci(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.E5();A._GetAutoObject(C.A$).Fy();},Aua:function(){this.N.CX(A.jV);this.N.C5(
A.aaL(A.ach.ADv));this.N.Co=[this,this.AyL];},AAp:function(G){A._GetAutoObject(C.
A$).Cf(55);},AFp:function(E){if(this.Zf===E)return;this.Zf=E;A.abo([this,this.ASp
,this.AFp],0);},Bci:function(G){var F;if(!this.Zf||(this.Bca===true)){A._GetAutoObject(
A.Device.Device).A6(24,false,CQ,0,null);if(this.AEg===1)A._GetAutoObject(A.Device.
Device).A6(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A6(23,
true,this.AEg.toFixed(),2000,null);this.Ev(this);return;}this.Ge.Gq();this.Ge.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Ge.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Ge.Q2(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Ge.JR(A._GetAutoObject(A.Device.Helper).W.Gender);this.Ge.Nd(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Ge.PQ(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Ge.SF(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alj=A._GetAutoObject(
A.Device.Helper).A0$(this.Ge,(F=this.Dh.HZ.Hs,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alj)this.AiV();else{A._GetAutoObject(A.Device.Helper).AKb(
this.Ge,Alj,(F=this.Dh.HZ.Hs,F[1].call(F[0])),this.Zf-1,[this,this.ApA]);A._GetAutoObject(
A.Device.Device).A6(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmY())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Do.
Z(false);this.Ca.T(A.aaR(A.acf.ACw));this.Ca.AEU(A.aaL(A.ach.Ae$));}else{this.Do.
Z(true);this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.AEU(null);}if((this.Y.Bir(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JF(this.Y.TJ(this.AV,0x1));this.Am();
},ASU:function(E){if(this.AqW===E)return;this.AqW=E;A.abo([this,this.A8f,this.ASU
],0);},ABj:function(G){var F;var AJZ=(F=this.Dh.Q,F[1].call(F[0]));var Az9=-1;switch((
F=this.Dh.HZ.Hs,F[1].call(F[0]))){case 0:Az9=AJZ+((F=A._GetAutoObject(A.Device.Helper
).BcQ(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zf-1));break;case 1:Az9=(AJZ+this.
Zf)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HG.AC.Q){case 0:Az9=(AJZ+
this.Zf)-1;break;case 1:Az9=(AJZ-this.Zf)+1;break;default:throw new Error(AXM+this.
Dh.HG.AC.Q.toFixed());}break;default:throw new Error(AXN+this.Dh.HG.AC.Q.toFixed(
));}this.ASU(Az9);},Bz5:function(G){A.pe([this,this.GH],this);A.pe([this,this.AtV
],this);},AAu:function(G){A._GetAutoObject(A.Device.Helper).AVd(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABj],this);},ApA:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.Apu();else switch((F=this.Dh.HZ.Hs,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JF(this.Dh);break;case 0:this.JF(this.Do
);break;case 1:this.JF(this.Ca);break;default:throw new Error(Ayk+(F=this.Dh.HZ.
Hs,F[1].call(F[0])).toFixed());}break;case 25:this.JF(this.Ca);break;case 47:if(
As.PopupState===7)this.Apu();else{this.JF(this.Dh);this.JF(this.Ca);}break;case 43:{
this.JF(this.Dh);this.JF(this.Do);}break;case 42:{this.JF(this.Dh);this.JF(this.
Ca);}break;case 41:break;default:A.ab5("%s%e",As0,As.Id);}},AiV:function(){this.
Ge.Cg(A._GetAutoObject(A.Device.Device).An);this.AEg=this.AEg+1;if(A._GetAutoObject(
A.Device.Helper).AmY()){if(A._GetAutoObject(A.Device.Device).Bt.Lf()){A._GetAutoObject(
A.Device.Device).A6(24,false,UW,0,null);A._GetAutoObject(A.Device.Device).A6(50,
true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);}else{var L7=A.
_GetAutoObject(A.Device.Device).An.LS(0,this.Ge.Id);A._GetAutoObject(A.Device.Device
).SN(L7);var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(this.Ge.
Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apu();},Apu:function(){var B;var F,CA;if(!!(F=this.Ca.
Q,F[1].call(F[0]))){(F=this.Ca.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Do.Q,CA[2].call(CA[0],(F=this.Ca.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Do.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$n(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Do.Q,F[1].call(
F[0])),this.Do.AjH(),this.Do.AjJ())));var IV=null;switch((F=this.Dh.HZ.Hs,F[1].call(
F[0]))){case 3:IV=[B=A._GetAutoObject(A.Device.Device),B.Av7,B.AyD];break;case 2:
IV=[B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyE];break;case 4:case 5:IV=[B=A.
_GetAutoObject(A.Device.Device),B.Anl,B.Aou];break;default:;}if(!!IV){switch((F=
this.Dh.Kk.VN,F[1].call(F[0]))){case 1:IV[2].call(IV[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IV[1].call(IV[0])));
}var XD=100-((this.Zf/this.AR1)*100);A._GetAutoObject(A.Device.Device).A6(24,true
,(((this.AR1.toFixed()+As1)+(XD|0).toFixed())+As1)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAd]);this.AFp(this.Zf-1);A.aaS([this,this.Bci],null);},BAd:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bca=true;},ApB:function(G){var F;C.HY.ApB.call(this,G);var AoP=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoP=A._GetAutoObject(A.Device.
Device).AdN;break;case 1:AoP=730;break;default:A.ab5("%s%e",Ak8,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q2(A._GetAutoObject(A.Device.
Helper).Du()-A._GetAutoObject(A.Device.Helper).AmA(AoP));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnP));switch(this.BZ.AC.Q){case 0:{this.Kp.I$(A.aaR(A.acf.AM6));this.
Kp.IO(A.aaR(A.acf.AM7));}break;case 1:{this.Kp.I$(A.aaR(A.acf.Bhg));this.Kp.IO(A.
aaR(A.acf.Bhh));}break;case 2:{this.Kp.I$(A.aaR(A.acf.Bje));this.Kp.IO(A.aaR(A.acf.
Bjf));}break;default:throw new Error(Ak8);}},AeZ:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Av_,this.AeZ],0);},AtV:function(G){var F,CA,S9;this.AeZ(((
F=this.Ca.Q,F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S9=this.Ca.
Q,S9[1].call(S9[0])));A.pe([this,this.GH],this);},BeH:function(G){A.pe([this,this.
AtV],this);},ASp:function(){return this.Zf;},A8f:function(){return this.AqW;},Av_:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvS.
_Init.call(this.Ca={I:this},0);C.Q9._Init.call(this.Do={I:this},0);C.AGx._Init.call(
this.Dh={I:this},0);C.AUu._Init.call(this.Kp={I:this},0);this.__proto__=C.ARN;var
B;this.Dq(C.AC9);this.Ca.H(Aoj);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.AkZ));this.
Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.
aaR(A.acf.Akg));this.Do.H(AXO);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ub));this.
Do.ArU(false);this.Dh.H(AXP);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6E));this.Dh.
Bx(0);this.Kp.H(AXQ);this.Kp.Aj(true);this.Kp.T(A.aaR(A.acf.A7L));this.Kp.Ga(1);
this.Kp.EU(500);this.Kp.IO(A.aaR(A.acf.AM7));this.Kp.I$(A.aaR(A.acf.AM6));this.Kp.
A9w(A.aaR(A.acf.AqW)+A.aaR(A.acf.Colon));this.J(this.Ca,0);this.J(this.Do,0);this.
J(this.Dh,0);this.J(this.Kp,0);this.Ge=A._NewObject(A.Device.Animal,0);this.Ca.AR=[
this,this.AcO];this.Ca.LX([this,this.AcO]);this.Ca.L0(A.aaL(A.ach.Ae$));this.Ca.
At([B=A._GetAutoObject(A.Device.Helper).W,B.Ars,B.PQ]);this.Ca.OL([B=A._GetAutoObject(
A.Device.Device),B.Ud,B.UY]);this.Ca.PO([B=A._GetAutoObject(A.Device.Device),B.Ue
,B.UZ]);this.Ca.Uf([B=A._GetAutoObject(A.Device.Device),B.Ani,B.Aot]);this.Ca.AeZ([
this,this.Av_,this.AeZ]);this.Do.Gr([this,this.D_,this.GQ]);this.Do.LX([this,this.
AcO]);this.Do.L0(A.aaL(A.ach.Ae$));this.Do.Uh([B=this.Gender.Animal,B.Ws,B.JR]);
this.Do.OL([B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY]);this.Do.PO([B=A._GetAutoObject(
A.Device.Device),B.Ue,B.UZ]);this.Do.Uf([B=A._GetAutoObject(A.Device.Device),B.Ani
,B.Aot]);this.Do.At([B=A._GetAutoObject(A.Device.Helper).W,B.Anm,B.Nd]);this.Do.
Ano([B=this.AnimalType.Animal,B.PN,B.EB]);this.Dh.Gr([this,this.D_,this.GQ]);this.
Dh.LX([B=this.Dh,B.FU]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Art,B.SF]);this.Dh.A89(A._GetAutoObject(A.Device.Helper).W);
this.Kp.At([this,this.ASp,this.AFp]);this.Kp.BlA([this,this.A8f,this.ASU]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Ca._Done();this.Do._Done(
);this.Dh._Done();this.Kp._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Ca._ReInit();this.Do._ReInit();this.Dh._ReInit();this.Kp.
_ReInit();this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.Do.T(A.aaR(A.acf.
Ub));this.Dh.T(A.aaR(A.acf.A6E));this.Kp.T(A.aaR(A.acf.A7L));this.Kp.IO(A.aaR(A.
acf.AM7));this.Kp.I$(A.aaR(A.acf.AM6));this.Kp.A9w(A.aaR(A.acf.AqW)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Ge)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ATY={BW:null,RatingMode:null,Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Co=null;this.BP.Ck=null;this.BP.CE=[this,this.AaC];this.BP.CX(A.jV
);this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ATY;var B;this.
H(Rl);this.BW.H(AsY);this.BW.T(A.aaR(A.acf.A$f));this.J(this.BW,0);this.BW.At([B=
this.RatingMode,B.B_,B.B$]);this.BW.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$f));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfh],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZX],0);A.pe([this,this.Bfh],this
);},Dt:function(){return 2;},Gk:function(aIndex){return this.RatingModeToString.
BS(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).AwU(E);},Bfh:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cl;this.RatingModeToString._Done();C.Cl._Done.call(this
);},_ReInit:function(){C.Cl._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANo={WI:
function(G){C.Amm.WI.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqR()){
A._GetAutoObject(A.Device.Helper).W.Akv(false);A._GetAutoObject(A.Device.Helper).
W.Cg(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amm._Init.call(
this,aArg);this.__proto__=C.ANo;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hg={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hg;},_className:"Application::BaseItem"
};C.AVs={BW:null,WeightRecordingMode:null,Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Co=null;this.BP.Ck=null;this.BP.CE=[this,this.AaC];this.BP.CX(A.jV
);this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVs;var B;this.H(Rl);this.BW.H(AsY);this.BW.T(A.aaR(A.acf.AsK));this.BW.EU(1);
this.J(this.BW,0);this.BW.At([B=this.WeightRecordingMode,B.B_,B.B$]);this.BW.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsK));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dt:function(){return 2;},Gk:function(aIndex){return this.
WeightRecordingModeToString.BS(this.C7(aIndex));},At:function(E){C.Cl.At.call(this
,E);A._GetAutoObject(A.Device.Device).Aw6(E);},Init:function(aArg){var B;A.zX([this
,this.Bgn],[B=A._GetAutoObject(A.Device.Device),B.A8Z,B.Ba1],0);A.pe([this,this.
Bgn],this);},Bgn:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cb.Set(0,0);this.Cb.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cl;this.WeightRecordingModeToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.AaY={BooleanToAutoOnOff:null,Gk:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BS(aIndex);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.AaY;},_Done:function(
){this.__proto__=C.Gd;this.BooleanToAutoOnOff._Done();C.Gd._Done.call(this);},_ReInit:
function(){C.Gd._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gd._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxK={A6S:function(){var B;this.
Axn(1);this.Js(0,3);this.VB(0,0,(B=this.M)[3]-B[1]);this.A4r(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4r(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VJ(0);},_Init:
function(aArg){C.ABv._Init.call(this,aArg);this.__proto__=C.AxK;},_className:"Application::Triangle"
};C.ATA={Y:null,Init:function(aArg){this.Bxt(this);},Bxs:function(P_){var Aa=A._NewObject(
C.ANv,0);Aa.H(BD);Aa.T(P_);Aa.Aj(true);Aa.Ar(false);Aa.Bh(true);this.J(Aa,0);this.
Atn(this);},Atn:function(G){var B;var Alr=1;var A2j=0;var X=this.Y.Ah;var Cx=null;
var K4=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var AK8=(B=Cx.V.B6.A6w(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Mn.isPrototypeOf(X)?X:null))AK8=AK8+20;if(A2j<AK8)A2j=AK8;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Alr*28)));Alr=Alr+1;}else{K4=(A.acg.C4.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K4){var Dg=((B=this.M)[3]-B[1])-((Alr-1)*28);K4.DM([this.
M[0],K4.Es[1]]);K4.DM([K4.Es[0],Dg]);K4.DC([this.M[0]+120,K4.EC[1]]);K4.DC([K4.EC[
0],Dg]);}}X=X.Ah;}this.BAV(A2j,28);},BAV:function(aWidth,BwB){var B;var X=this.Y.
Ah;var Cx=null;var K4=null;aWidth=aWidth+20;if(aWidth>(C.Aso[0]-10))aWidth=C.Aso[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A5(0x14);Cx.V.Text.Hl(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwB));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K4=(
A.acg.C4.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K4){K4.DM([this.M[
2]-aWidth,K4.Es[1]]);K4.DC([this.M[2],K4.EC[1]]);}}X=X.Ah;}},Bxt:function(G){var
Aa=A._GetAutoObject(C.BR).AqG;while(!!Aa){if(!!(C.Axb.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axb.isPrototypeOf(Aa)?Aa:null);this.Bxr(EF.DK,EF.AR,EF.Bw,EF.AQV);}else
if(!!(C.Axd.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axd.isPrototypeOf(Aa)?Aa:null);
this.Bxy(EF.DK,EF.AR,EF.Bw,EF.Wr,EF.WK);}else if(!!(C.Zv.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zv.isPrototypeOf(Aa)?Aa:null);this.Bxq(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkB.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkB.isPrototypeOf(Aa)?Aa:null);this.
Bxs(EF.DK);}else if(!!(C.AFZ.isPrototypeOf(Aa)?Aa:null))this.Bxz();Aa=Aa.Mu;}A._GetAutoObject(
C.BR).Clear();A.pe([this,this.Atn],this);},Bxq:function(P_,AcY,Ah1){var Aa=A._NewObject(
C.Mn,0);Aa.H(BD);Aa.T(P_);Aa.AR=AcY;Aa.Aj(true);Aa.Ar(Ah1);Aa.Bh(true);this.J(Aa
,0);this.Atn(this);},Bxz:function(){var K4=A._NewObject(A.acg.C4,0);K4.L(A.jb.Bm
);K4.Aj(true);K4.Ng(3);this.J(K4,0);this.Atn(this);},Bxr:function(P_,AcY,Ah1,A0v
){var Aa=A._NewObject(C.Amy,0);Aa.H(BD);Aa.T(P_);Aa.AR=AcY;Aa.Aj(true);Aa.Ar(Ah1
);Aa.Bh(true);Aa.At(A0v);this.J(Aa,0);this.Atn(this);},Bxy:function(P_,AcY,Ah1,A2A
,Agl){var Aa=A._NewObject(C.ANu,0);Aa.H(BD);Aa.T(P_);Aa.AR=AcY;Aa.Aj(true);Aa.Ar(
Ah1);Aa.Bh(true);Aa.BmA(A2A);Aa.AFD(Agl);this.J(Aa,0);this.Atn(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATA;this.H(Rl);this.Y.H(Rl);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afe={_Init:
function(){A.acl.Afe._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_n={AqG:null,Ahg:null,NC:function(P_){var EF=A._NewObject(
C.AkB,0);EF.DK=P_;this.J(EF);},Clear:function(){this.AqG=null;this.Ahg=null;},FW:
function(){var K4=A._NewObject(C.AFZ,0);this.J(K4);},J:function(BbB){if(!this.AqG
){this.AqG=BbB;this.Ahg=this.AqG;}else{this.Ahg.Mu=BbB;this.Ahg=this.Ahg.Mu;}},Qy:
function(P_,AcY){var EF=A._NewObject(C.Zv,0);EF.DK=P_;EF.AR=AcY;this.J(EF);},Bgw:
function(P_,AcY,A0v){var EF=A._NewObject(C.Axb,0);EF.DK=P_;EF.AR=AcY;EF.AQV=A0v;
this.J(EF);},XI:function(P_){var EF=A._NewObject(C.Zv,0);EF.DK=P_;EF.Bw=false;this.
J(EF);},ABz:function(P_,AcY,A2A,Agl){var EF=A._NewObject(C.Axd,0);EF.DK=P_;EF.AR=
AcY;EF.Wr=A2A;EF.WK=Agl;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_n;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BR={_Init:function(){C.A_n._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axc={Mu:null,_Init:function(aArg){this.__proto__=
C.Axc;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOt={Amk:null,Arx:function(E){if(this.Amk===
E)return;if(!!this.Ab)this.Ab.ZA(this);if(!!this.Amk)this.Aqy(this.Amk,A._GetAutoObject(
C.Ass),null,null,null,null,false);this.Amk=E;if(!!this.Amk)this.AkF(this.Amk,A._GetAutoObject(
C.Ass),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOt;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amk)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wz={_Init:function(){C.AOt._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C0=A._NewObject(C.ATB,0);C0.H(this.M);this.AkF(C0,A.
_GetAutoObject(C.AnN),null,A._GetAutoObject(C.AnN),A._GetAutoObject(C.AnN),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rl);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Ass={_Init:function(){C.AUw._Init.call(this,0);this.ACu=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATB={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.ATB;this.H(AH4);this.Dj(0);this.AK.AZ(0x3F);this.AK.H(AH4);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUv={R$:function(){var B;var Ao=(A.acl.Ae8.isPrototypeOf(B=A.acl.Aeh.R$.call(this
))?B:null);if(!Ao)throw new Error(AsV);Ao.Cp.Cw=255;Ao.Cp.B2=0;return Ao;},R_:function(
){var B;var Ao=(A.acl.Axa.isPrototypeOf(B=A.acl.Aeh.R_.call(this))?B:null);if(!Ao
)throw new Error(AsV);Ao.E0.Cw=0;Ao.E0.B2=255;Ao.Ds=true;return Ao;},_Init:function(
aArg){A.acl.Aeh._Init.call(this,aArg);this.__proto__=C.AUv;},_className:"Application::ShadeOverlayTransition"
};C.AnN={_Init:function(){C.AUv._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkO={AnP:0,A1F:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iq.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BB6=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak4(BB6)+CQ)+A._GetAutoObject(A.acj.DU).AfZ()
);else this.BT.R(A.aaR(A.acf.Akg));}},J$:function(G){var B;var Bgk=(this.A1F===false
)&&(this.AM<=this.Gp);if(Bgk)this.Bx(this.AnP);this.A38(this.AM,4);if(Bgk){this.
Bx(this.AM-this.AjY);this.A1F=true;}C.Iq.J$.call(this,G);},J6:function(G){this.A38(
this.AM,5);C.Iq.J6.call(this,G);},Bx:function(E){this.A38(E,4);E=(((E+((this.AjY
/2)|0))/this.AjY)|0)*this.AjY;if(!E)this.A1F=false;C.Iq.Bx.call(this,E);},Aho:function(
E){if(this.AnP===E)return;this.AnP=E;},A38:function(Bwj,Gz){this.ASX(A._GetAutoObject(
A.acj.DU).BcU(Bwj,Gz));},_Init:function(aArg){C.Iq._Init.call(this,aArg);this.__proto__=
C.AkO;this.H(KX);this.AnP=this.Gp;this.JW(this.H4,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDu={None:0,Left:1,BD3:2,Right:3};C.Amo={Xk:
null,FB:null,Ej:null,Background:null,Ana:null,Gc:null,KL:A.jV,AD1:null,Init:function(
aArg){var B;A.zV([this,this.Af7],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3h],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.
LN],this);A.pe([this,this.A3h],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Ll:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xk);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKH();},AlU:function(G){var Aa=(C.AB2.isPrototypeOf(G)?G:null);var Hq;if(!!Aa)Hq=
Aa.Hq;else Hq=this.Gc.FK();if(Hq>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G6(Hq);A.pe([this,this.AaC],this);},AKH:function(
){},Af7:function(G){this.Am();},A2_:function(G){if(this.Gc.FK()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gc.GS(this.Gc.FK()+1);},A2$:function(G){if(this.
Gc.FK()>0)this.Gc.GS(this.Gc.FK()-1);},DJ:function(G){var Gg=A._GetAutoObject(A.
Device.Device).An.B9();var MR=this.BP;if(!MR)return;MR.C1(A.aaL(A.ach.Aeu));MR.CE=[
this,this.AaC];if(Gg<=0){MR.Cv(null);MR.C5(null);MR.Ck=null;MR.Co=null;MR.Zy=false;
MR.Zz=false;}else if(Gg===1){MR.Cv(null);MR.C5(A.aaL(A.ach.Aev));MR.Ck=null;MR.Co=[
this,this.AlU];MR.Zy=false;MR.Zz=false;}else{MR.Cv(A.aaL(A.ach.AqZ));MR.C5(A.aaL(
A.ach.Aq6));MR.Ck=[this,this.A2_];MR.Co=[this,this.A2$];MR.Zy=true;MR.Zz=true;}}
,LN:function(G){this.BfH(this);this.Xk=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKH();},Bms:function(E){if(this.AD1===E)return;this.AD1=E;A.pe([this,this.Bz2
],this);},Bz2:function(G){this.BfH(this);},BfH:function(G){var B;if(!!this.FB)this.
HN(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(this.AD1,0))?B:null);if(!
!this.FB){this.FB.H(AXR);this.J(this.FB,0);}},A3h:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gc.Dz(A.aaR(A.acf.ARV));else this.Gc.Dz(this.KL);},Dz:function(E){if(this.
KL===E)return;this.KL=E;A.pe([this,this.A3h],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Ana={I:this},0);C.Gc._Init.call(
this.Gc={I:this},0);this.__proto__=C.Amo;this.H(Rl);this.Ej.H(BD);this.Ej.A9z(A.
jb.CS);this.Ej.A9A(A.jb.Text);this.Background.H(Fe);this.Background.L(A.jb.Bn3);
this.Ana.H(AH5);this.Ana.L(A.jb.CS);this.Gc.H(AH5);this.Gc.NZ(C.AB2);this.AD1=C.
APy;this.KL=A.aaR(A.acf.AvW);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Ana,0);this.J(this.Gc,0);this.Ej.AR=[this,this.AlU];this.Ej.AbY(A._NewObject(
C.Yo,0));this.Gc.Zm(A._GetAutoObject(A.Device.Device).An);this.Gc.Zq([this,this.
AlU]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Ana._Done();this.Gc._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Ana._ReInit();this.Gc._ReInit();this.Dz(A.aaR(A.acf.AvW
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xk)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.AB2={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EB(this.AX.AmN(
Ad,14));this.DS.AEW(this.AX.I4(Ad,13));this.DS.AeY(this.AX.H2(Ad,8));this.DS.Uj(
this.AX.H2(Ad,11));this.DS.Ae2(this.AX.H2(Ad,12));this.DS.Ae4(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.AB2;this.
H(O2);this.AP.L(A.jb.Bc);this.DS.H(AXS);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yo={Q:null,Init:function(aArg){var
B;this.AAU(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEC:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Ni(FilterCriterion
);var AiZ=this.Akj();if(AiZ>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,AiZ,false);Filter.CV(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeU(false);},BvJ:function(s){this.AEC(
s);},AAU:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Ni(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BFV:function(s){
this.AAU(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcQ],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcQ],E,0);if(!!E)A.pe([this,this.
AcQ],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwC(-1);return;}var AyX=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!AyX){this.AW.AwC(0);this.AW.AeU(true);}else
this.AW.AwC(AyX.A4);},AcQ:function(s){this.C2(s);},_Init:function(aArg){C.AjM._Init.
call(this,aArg);this.__proto__=C.Yo;this.AW.AwC(0);this.AW.Di=[this,this.BvJ];this.
Init(aArg);},_Mark:function(D){var B;C.AjM._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqB={BirthType:null,EaseOfDelivery:null,Ca:null,Ef:null,AbD:null,G5:null,Cm:
null,AbB:null,AMO:false,Init:function(aArg){this.AMO=A._GetAutoObject(A.Device.Helper
).W.Aq9();if(this.AMO)this.AeT(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeT(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Ca.
LX([this,this.AcO]);this.Ca.L0(A.aaL(A.ach.Ae$));this.Ca.AR=[this,this.AcO];}this.
Ef.ArU(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Ca.Q,0);A.pe([this,this.GH],this);},Agb:function(G
){if(((this.Ef.Asb===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQZ(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Rf(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cg(
A._GetAutoObject(A.Device.Device).An);if(this.KH>0){if(this.AMO){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LS(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AXT,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KH);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cg(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fy();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A$).Fy();},Aua:function(
){this.N.CX(A.jV);this.N.C5(A.aaL(A.ach.AmV));this.N.Co=[this,this.AyL];},AAp:function(
G){A._GetAutoObject(C.A$).Cf(32);},GH:function(G){var F;var Ka=(F=this.Ef.Q,F[1].
call(F[0]));var ABg=(F=this.Ca.Q,F[1].call(F[0]));var A33=true;if(!!Ka&&(ABg===Ka
))A33=false;A._GetAutoObject(A.Device.Helper).JX(this.Ca,A33);this.Ef.Bls(!A33);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvS._Init.
call(this.Ca={I:this},0);C.Q9._Init.call(this.Ef={I:this},0);C.Aci._Init.call(this.
AbD={I:this},0);C.BW._Init.call(this.G5={I:this},0);C.SO._Init.call(this.Cm={I:this
},0);C.BW._Init.call(this.AbB={I:this},0);this.__proto__=C.AqB;var B;this.Ca.H(AhW
);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.Ef.H(AhW);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ub));this.AbD.H(AXU);this.AbD.Aj(true);this.
AbD.T(A.aaR(A.acf.GM));this.G5.H(AhW);this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Ari
));this.Cm.H(AhW);this.Cm.Aj(true);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.AFu(true);
this.AbB.H(AhW);this.AbB.Aj(true);this.AbB.T(A.aaR(A.acf.AgE));this.J(this.Ca,-1
);this.J(this.Ef,-1);this.J(this.AbD,-1);this.J(this.G5,-1);this.J(this.Cm,-1);this.
J(this.AbB,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Ars,B.PQ]);this.Ef.Gr([this,this.D_,this.GQ]);this.Ef.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anm,B.Nd]);this.AbD.Gr([this,this.D_,this.GQ]);this.AbD.At([
B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SF]);this.G5.At([B=this.BirthType,
B.B_,B.B$]);this.G5.CK(this.BirthType);this.Cm.Gr([this,this.D_,this.GQ]);this.Cm.
LX([B=this.Cm,B.FU]);this.Cm.L0(A.aaL(A.ach.Edit));this.Cm.Ab2([B=A._GetAutoObject(
A.Device.Helper).W,B.Av4,B.Q2]);this.AbB.At([B=this.EaseOfDelivery,B.B_,B.B$]);this.
AbB.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Ca._Done();this.Ef._Done(
);this.AbD._Done();this.G5._Done();this.Cm._Done();this.AbB._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Ca._ReInit();this.Ef._ReInit();this.AbD._ReInit();
this.G5._ReInit();this.Cm._ReInit();this.AbB._ReInit();this.Ca.T(A.aaR(A.acf.AkZ
));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.
Ca.ArF(A.aaR(A.acf.Akg));this.Ef.T(A.aaR(A.acf.Ub));this.AbD.T(A.aaR(A.acf.GM));
this.G5.T(A.aaR(A.acf.Ari));this.Cm.T(A.aaR(A.acf.Aea));this.AbB.T(A.aaR(A.acf.AgE
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Aci={FI:null,AW:null,A8:0,IY:function(G){C.Dr.IY.call(this,G);if(!this.A8)this.
FU(this);else this.Hc(this);},Ai:function(Ae){C.Dr.Ai.call(this,Ae);this.Hw.Z(false
);this.H4.Z(false);if(this.A8===1){this.Bb(this.AW);if(this.Hj){this.AW.FM(A.jb.
CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FM(A.jb.CS);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hj)this.AW.FM(A.jb.CJ);
else this.AW.FM(A.jb.CS);this.Bb(null);}},Bx:function(E){var F;var BO=this.AM;C.
Dr.Bx.call(this,E);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uc,this.BaD],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}break;default:this.FI.AkK((F=
this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hc:function(G){this.Ew(0
);},Ew:function(EN){var F;if(!this.A8)this.FI.Aju((F=this.N,F[1].call(F[0])));this.
A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SM(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Dr._Init.call(this,aArg);
C.AQT._Init.call(this.AW={I:this},0);this.__proto__=C.Aci;this.H(UT);this.EU(999999
);this.V.R(As2);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.AW.H(AXV
);this.AW.AS5(6);this.J(this.AW,0);this.AW.At([this,this.Uc,this.BaD]);this.FI=A.
_NewObject(C.Aeo,0);},_Done:function(){this.__proto__=C.Dr;this.AW._Done();C.Dr.
_Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dt:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.Auy={Y:null,QN:null,NV:null,Ee:null,PD:null,PA:null,PB:null,Ay:null,Gd:null,
ReasonOfLeaving:null,Ahw:null,M2:0,AmC:false,AB6:true,AOm:false,Ar9:false,Init:function(
aArg){A.zX([this,this.A86],[this,this.A8x,this.AS8],0);this.Ahl(A._GetAutoObject(
A.Device.Helper).W.AhR(2));this.ReasonOfLeaving.At(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A86],this);},DE:function(G){
var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;
case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QF(X,Fh,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},AlT:function(G
){A._GetAutoObject(C.A$).Fy();},ApF:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Du());B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmC){A._GetAutoObject(A.Device.Helper).W.Ae0(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6y(A._GetAutoObject(A.Device.Helper).Du(),this.Ar9);}A._GetAutoObject(A.Device.
Helper).W.AFt(this.ReasonOfLeaving.C7((F=this.NV.Q,F[1].call(F[0]))));if(this.AB6
)A._GetAutoObject(A.Device.Helper).W.PQ(0);if(this.Ar9)A._GetAutoObject(A.Device.
Helper).W.AwE(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);this.A_X();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Ahl:function(E){
if(this.M2===E)return;this.M2=E;},Anj:function(){return this.M2;},BeJ:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A$).Fy();A._GetAutoObject(A.Device.Helper
).Asi();}},A86:function(G){switch(this.Ar9){case false:this.Ee.T(A.aaR(A.acf.AVu
));break;case true:this.Ee.T(A.aaR(A.acf.Bp6));break;default:;}},AS8:function(E){
if(this.Ar9===E)return;this.Ar9=E;},A8x:function(){return this.Ar9;},A_X:function(
){A._GetAutoObject(A.Device.Device).A6(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeJ]);},BlS:function(E){if(this.AOm===E)return;
this.AOm=E;},Bke:function(){return this.AOm;},Blg:function(E){if(this.AB6===E)return;
this.AB6=E;},Bj4:function(){return this.AB6;},Blq:function(E){if(this.AmC===E)return;
this.AmC=E;},Bka:function(){return this.AmC;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afi._Init.call(this.QN={I:this
},0);C.Asr._Init.call(this.NV={I:this},0);C.AkO._Init.call(this.Ee={I:this},0);C.
Afi._Init.call(this.PD={I:this},0);C.Afi._Init.call(this.PA={I:this},0);C.Afi._Init.
call(this.PB={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gd._Init.call(this.
Gd={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahw._Init.call(this.Ahw={I:this},0);this.__proto__=C.Auy;var B;this.N.Z(true);this.
N.CX(A.aaR(A.acf.Unregister));this.Dq(C.II);this.Y.H(Fe);this.Y.JQ(1);this.QN.H(
Aaa);this.QN.Aj(true);this.QN.T(A.aaR(A.acf.AmC));this.QN.Bh(true);this.QN.Zt(false
);this.QN.Ga(-1);this.QN.EU(1);this.NV.H(UV);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bh(true);this.NV.Zt(false);this.Ee.H(AhV);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVu));this.Ee.Bh(false);this.Ee.Ga(1000);this.Ee.
EU(999000);this.PD.H(UV);this.PD.Aj(true);this.PD.T(A.aaR(A.acf.A4E));this.PD.Bh(
true);this.PD.Zt(false);this.PD.Bx(1);this.PD.Ga(-1);this.PD.EU(1);this.PA.H(Aaa
);this.PA.Aj(true);this.PA.T(A.aaR(A.acf.A4F));this.PA.Bh(true);this.PA.Zt(false
);this.PA.Bx(1);this.PA.Ga(-1);this.PA.EU(1);this.PB.H(UV);this.PB.Aj(true);this.
PB.T(A.aaR(A.acf.A5f));this.PB.Bh(true);this.PB.Zt(false);this.PB.Bx(1);this.PB.
Ga(-1);this.PB.EU(1);this.Ay.H(Ayb);this.Gd.At(0);this.J(this.Y,0);this.J(this.QN
,0);this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PD,0);this.J(this.PA,0);this.
J(this.PB,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj
];this.QN.At([B=this.Gd,B.B_,B.B$]);this.QN.CK(this.Gd);this.QN.Akw([this,this.Bka
,this.Blq]);this.NV.Gr([this,this.D_,this.GQ]);this.NV.LX([B=this.NV,B.FU]);this.
NV.L0(A.aaL(A.ach.Edit));this.NV.At([B=this.ReasonOfLeaving,B.B_,B.B$]);this.NV.
CK(this.ReasonOfLeaving);this.NV.Anq(this.Ahw);this.Ee.At([this,this.Anj,this.Ahl
]);this.PD.At([B=this.Gd,B.B_,B.B$]);this.PD.CK(this.Gd);this.PD.Akw([this,this.
Bke,this.BlS]);this.PA.At([B=this.Gd,B.B_,B.B$]);this.PA.CK(this.Gd);this.PA.Akw([
this,this.A8x,this.AS8]);this.PB.At([B=this.Gd,B.B_,B.B$]);this.PB.CK(this.Gd);this.
PB.Akw([this,this.Bj4,this.Blg]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QN._Done();this.NV._Done();this.Ee._Done();this.PD._Done(
);this.PA._Done();this.PB._Done();this.Ay._Done();this.Gd._Done();this.ReasonOfLeaving.
_Done();this.Ahw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QN._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PD._ReInit();this.PA._ReInit();this.PB._ReInit();this.Ay._ReInit();this.Gd.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahw._ReInit();this.N.CX(A.aaR(A.acf.
Unregister));this.QN.T(A.aaR(A.acf.AmC));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVu));this.PD.T(A.aaR(A.acf.A4E));this.PA.T(A.aaR(A.acf.A4F
));this.PB.T(A.aaR(A.acf.A5f));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahw)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUu={AjF:null,Pt:null,AuY:AXW,Bl:function(aSize){C.Iq.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hw.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H4.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Iq.Ai.call(this,Ae);this.Pt.L(this.V.AQ);if(!!this.AjF){if((
F=this.AjF,F[1].call(F[0]))===-1)this.Pt.R(this.AuY+AH6);else this.Pt.R((this.AuY+
CQ)+(F=this.AjF,F[1].call(F[0])).toFixed());}else this.Pt.R(this.AuY);},A2S:function(
G){this.Am();},BlA:function(E){if(A.aaZ(this.AjF,E))return;if(!!this.AjF)A.z$([this
,this.A2S],this.AjF,0);this.AjF=E;if(!!E)A.zX([this,this.A2S],E,0);if(!!E)A.pe([
this,this.A2S],this);},A9w:function(E){if(this.AuY===E)return;this.AuY=E;this.Am(
);},_Init:function(aArg){C.Iq._Init.call(this,aArg);C.CH._Init.call(this.Pt={I:this
},0);this.__proto__=C.AUu;this.H(AXX);this.V.H(AXY);this.V.A5(0x12);this.Pt.H(AXZ
);this.Pt.A5(0x12);this.Pt.L(A.jb.Bm);this.J(this.Pt,0);this.Pt.S(A.aaL(A.fl.Af)
);this.Pt.A2(A.aaL(A.fl.Ak));this.Pt.Ct(null);},_Done:function(){this.__proto__=
C.Iq;this.Pt._Done();C.Iq._Done.call(this);},_ReInit:function(){C.Iq._ReInit.call(
this);this.Pt._ReInit();this.Pt.S(A.aaL(A.fl.Af));this.Pt.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iq._Mark.call(this,D);if((B=this.AjF)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AL7={Y:null,JM:null,Sq:null,Ay:null,Aqp:2500,ANl:24,DE:function(G){var B;var
Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:
Fh=4;break;case 5:Fh=5;break;default:;}X=this.QF(X,Fh,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},AlT:function(G){A._GetAutoObject(
C.A$).Fy();},ApF:function(G){},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Blk:function(
E){if(this.Aqp===E)return;this.Aqp=E;},Bj6:function(){return this.Aqp;},Bll:function(
E){if(this.ANl===E)return;this.ANl=E;},Bj7:function(){return this.ANl;},BjV:function(
G){var F,CA;this.JM.BT.L(this.JM.V.AQ);if(!!this.JM.Q)this.JM.BT.R((((String.fromCharCode(((
F=this.JM.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afy)+String.fromCharCode(((
CA=this.JM.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JM.
AGZ);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iq._Init.call(this.JM={I:this},0);C.Iq._Init.call(this.Sq={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AL7;this.N.Z(true);this.
Dq(C.II);this.Y.H(Fe);this.Y.JQ(1);this.JM.H(AhV);this.JM.Aj(true);this.JM.T(A.aaR(
A.acf.Aqp));this.JM.Bh(false);this.JM.Ga(0);this.JM.EU(5000);this.JM.IO(A.aaR(A.
acf.Af3));this.JM.I$(A.aaR(A.acf.Af3));this.JM.ASX(100);this.Sq.H(UV);this.Sq.Aj(
true);this.Sq.T(A.aaR(A.acf.A_w));this.Sq.Bh(true);this.Sq.Bx(24);this.Sq.Ga(10);
this.Sq.EU(33);this.Sq.IO(AX0);this.Ay.H(Ayb);this.J(this.Y,0);this.J(this.JM,0);
this.J(this.Sq,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.Yt));this.Y.El=[this,this.
Fj];this.JM.At([this,this.Bj6,this.Blk]);this.JM.A95([this,this.BjV]);this.Sq.At([
this,this.Bj7,this.Bll]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JM._Done();this.Sq._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JM._ReInit();this.Sq._ReInit();this.
Ay._ReInit();this.JM.T(A.aaR(A.acf.Aqp));this.JM.IO(A.aaR(A.acf.Af3));this.JM.I$(
A.aaR(A.acf.Af3));this.Sq.T(A.aaR(A.acf.A_w));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Ark={EaseOfDelivery:null,BirthType:null,Ca:null,Do:null,Dh:null,Cm:null,Ee:null
,G5:null,Lg:null,M2:0,LU:false,Init:function(aArg){A.zX([this,this.GH],this.Ca.Q
,0);A.zX([this,this.GH],this.Do.Q,0);A.zX([this,this.AAu],this.C$.Q,0);A.zX([this
,this.Bef],this.Cm.Dk,0);A.zX([this,this.Bd$],this.C9.Q,0);A.zX([this,this.AtV],
this.Ca.Q,0);A.zX([this,this.AtV],this.Do.Q,0);A.pe([this,this.AAu],this);A.pe([
this,this.GH],this);A.pe([this,this.Bef],this);A.pe([this,this.Bd$],this);A.pe([
this,this.AtV],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.E5();A.
_GetAutoObject(C.A$).Fy();},Agb:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhC
){var AlD=A._GetAutoObject(A.Device.Helper).AhC.AOK();A._GetAutoObject(A.Device.
Helper).W.AbZ(AlD);A._GetAutoObject(A.Device.Helper).W.Anv(AlD);}var Alj=A._GetAutoObject(
A.Device.Helper).A0$(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Hs,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alj){this.AiV();A.pe([this,this.
Bv7],this);}else A._GetAutoObject(A.Device.Helper).AKb(A._GetAutoObject(A.Device.
Helper).W,Alj,(F=this.Dh.HZ.Hs,F[1].call(F[0])),0,[this,this.ApA]);},Aua:function(
){this.N.CX(A.jV);this.N.C5(A.aaL(A.ach.ADG));this.N.Co=[this,this.AyL];},AiV:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);var L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SN(L7);var Bc_=false;if(A._GetAutoObject(
A.Device.Helper).AmY()){if(A._GetAutoObject(A.Device.Device).Bt.Lf()){Bc_=true;A.
_GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.
HI().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A6Y()&&(Bc_===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}}var IV=null;switch((F=this.
Dh.HZ.Hs,F[1].call(F[0]))){case 3:IV=[B=A._GetAutoObject(A.Device.Device),B.Av7,
B.AyD];break;case 2:IV=[B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyE];break;case
4:case 5:IV=[B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aou];break;default:;}if(
!!IV)switch((F=this.Dh.Kk.VN,F[1].call(F[0]))){case 1:IV[2].call(IV[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$n(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Do.Q,F[1].call(F[0])),this.Do.AjH(),this.Do.AjJ());},ApY:function(G){A.
_GetAutoObject(C.A$).Fy();},Bv7:function(s){this.ApY(s);},AAp:function(G){A._GetAutoObject(
C.A$).Cf(49);},Ahl:function(E){if(this.M2===E)return;this.M2=E;A.abo([this,this.
Anj,this.Ahl],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).AmY())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A6Y())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Do.Z(false);this.Ca.T(A.aaR(A.
acf.ACw));this.Ca.AEU(A.aaL(A.ach.Ae$));}else{this.Do.Z(true);this.Ca.T(A.aaR(A.
acf.AkZ));this.Ca.AEU(null);}},AAu:function(G){A._GetAutoObject(A.Device.Helper).
AVd(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LU);},Bef:function(G){A.pe([this,this.Bf_],this);},Bd$:function(G){A.pe([this
,this.Bf_],this);},Bf_:function(G){var F,CA,S9;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Aho(A._GetAutoObject(A.Device.Helper
).AhR(A._GetAutoObject(A.Device.Helper).Abl((F=this.BZ.Q,F[1].call(F[0]))),(CA=this.
Cm.Dk,CA[1].call(CA[0])),2,(S9=this.BZ.Q,S9[1].call(S9[0]))));break;case 2:this.
Ee.Aho(A._GetAutoObject(A.Device.Helper).AhR(this.KH,(F=this.Cm.Dk,F[1].call(F[0
])),2,(CA=this.BZ.Q,CA[1].call(CA[0]))));break;default:;}},ApA:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Dh.HZ.Hs,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JF(this.Dh);break;case 0:this.JF(this.Do);break;case 1:this.JF(this.
Ca);break;default:throw new Error(Ayk+(F=this.Dh.HZ.Hs,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JF(this.Dh);this.JF(this.Do);}break;case 25:case 42:{this.
JF(this.Dh);this.JF(this.Ca);}break;case 41:break;default:A.ab5("%s%e",As0,As.Id
);}},ApB:function(G){var F;C.HY.ApB.call(this,G);var AoP=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoP=A._GetAutoObject(A.Device.Device).AdN;break;case
1:AoP=730;break;default:A.ab5("%s%e",Ak8,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cm.Dk,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Du()-A._GetAutoObject(A.Device.
Helper).AmA(AoP)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnP));this.Ee.Aho(A._GetAutoObject(
A.Device.Helper).W.AhR(1));},AeZ:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Av_,this.AeZ],0);},AtV:function(G){var F,CA,S9;this.AeZ(((F=this.Ca.Q,
F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S9=this.Ca.Q,S9[1].call(
S9[0])));A.pe([this,this.GH],this);},Anj:function(){return this.M2;},Av_:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvS._Init.call(this.Ca={I:this},0);C.Q9._Init.call(this.Do={I:this}
,0);C.AGx._Init.call(this.Dh={I:this},0);C.SO._Init.call(this.Cm={I:this},0);C.AkO.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G5={I:this},0);C.BW._Init.call(
this.Lg={I:this},0);this.__proto__=C.Ark;var B;this.Dq(C.AC8);this.CG.H(AcM);this.
Ca.H(Aoj);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.
Do.H(Aoj);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ub));this.Do.ArU(false);this.Dh.
H(AX1);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GM));this.Dh.Bx(0);this.Cm.H(AcM);
this.Cm.Aj(true);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.AFu(true);this.Ee.H(AcM);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.Ga(1000);this.Ee.EU(999000);this.
G5.H(AcM);this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Ari));this.Lg.H(AcM);this.Lg.Aj(
true);this.Lg.T(A.aaR(A.acf.AgE));this.J(this.Ca,-3);this.J(this.Do,-3);this.J(this.
Dh,-3);this.J(this.Cm,-3);this.J(this.Ee,-2);this.J(this.G5,-1);this.J(this.Lg,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Ca.AR=[this,this.AcO];this.Ca.LX([this
,this.AcO]);this.Ca.L0(A.aaL(A.ach.Ae$));this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Ars,B.PQ]);this.Ca.OL([B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY
]);this.Ca.PO([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UZ]);this.Ca.Uf([B=A._GetAutoObject(
A.Device.Device),B.Ani,B.Aot]);this.Ca.AeZ([this,this.Av_,this.AeZ]);this.Do.Gr([
this,this.D_,this.GQ]);this.Do.LX([this,this.AcO]);this.Do.L0(A.aaL(A.ach.Ae$));
this.Do.Uh([B=this.Gender.Animal,B.Ws,B.JR]);this.Do.OL([B=A._GetAutoObject(A.Device.
Device),B.Ud,B.UY]);this.Do.PO([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UZ]);
this.Do.Uf([B=A._GetAutoObject(A.Device.Device),B.Ani,B.Aot]);this.Do.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anm,B.Nd]);this.Do.Ano([B=this.AnimalType.Animal,B.PN,B.EB]
);this.Dh.Gr([this,this.D_,this.GQ]);this.Dh.LX([B=this.Dh,B.FU]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.At([B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SF]);this.
Dh.A89(A._GetAutoObject(A.Device.Helper).W);this.Cm.Gr([this,this.D_,this.GQ]);this.
Cm.LX([B=this.Cm,B.FU]);this.Cm.L0(A.aaL(A.ach.Edit));this.Cm.Ab2([B=A._GetAutoObject(
A.Device.Helper).W,B.Av4,B.Q2]);this.Ee.At([this,this.Anj,this.Ahl]);this.G5.At([
B=this.BirthType,B.B_,B.B$]);this.G5.CK(this.BirthType);this.Lg.At([B=this.EaseOfDelivery
,B.B_,B.B$]);this.Lg.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ca._Done(
);this.Do._Done();this.Dh._Done();this.Cm._Done();this.Ee._Done();this.G5._Done(
);this.Lg._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Ca._ReInit();this.
Do._ReInit();this.Dh._ReInit();this.Cm._ReInit();this.Ee._ReInit();this.G5._ReInit(
);this.Lg._ReInit();this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.Do.T(
A.aaR(A.acf.Ub));this.Dh.T(A.aaR(A.acf.GM));this.Cm.T(A.aaR(A.acf.Aea));this.Ee.
T(A.aaR(A.acf.M2));this.G5.T(A.aaR(A.acf.Ari));this.Lg.T(A.aaR(A.acf.AgE));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AG7={H7:null,AhH:null,AgP:null,AhI:null,AgQ:null,AnimalType:null,Background:
null,NX:null,Rh:null,V:null,TN:null,Yw:null,Aby:null,PM:null,DK:A.jV,AGz:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.AnZ();this.
AxL();},AnZ:function(){var F,CA;var LC=0;var Al_=0;var Alw=0;var Ib=0;if((((!!this.
AhH&&!!this.AhI)&&!!this.AgP)&&!!this.AgQ)&&!!this.AnimalType){Al_=(F=this.AhH,F[
1].call(F[0]));Alw=(F=this.AgP,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper
).L9((F=this.AhI,F[1].call(F[0])),(CA=this.AgQ,CA[1].call(CA[0])));Ib=(F=this.AnimalType
,F[1].call(F[0]));}var K6=A.jb.Text;var Ay5=A.jb.CS;if(!!LC){var ALp=A._GetAutoObject(
A.acj.DU).Alq(LC,Al_,Alw);Ay5=A._GetAutoObject(A.acj.DU).AzJ(ALp,Ib);K6=A._GetAutoObject(
A.acj.DU).AzL(ALp,Ib);}this.Background.L(Ay5);this.TN.L(K6);this.Rh.L(K6);this.NX.
L(K6);this.Aby.L(K6);if(K6===A.jb.Bm)this.Yw.L(K6);else this.Yw.L(A.jb.CJ);this.
V.L(K6);this.PM.L(K6);},AxL:function(){var F,CA;var LC=0;var Al_=0;var Alw=0;if(((
!!this.AhH&&!!this.AhI)&&!!this.AgP)&&!!this.AgQ){Al_=(F=this.AhH,F[1].call(F[0]
));Alw=(F=this.AgP,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).L9((F=this.
AhI,F[1].call(F[0])),(CA=this.AgQ,CA[1].call(CA[0])));}if(!!LC){var ALp=A._GetAutoObject(
A.acj.DU).Alq(LC,Al_,Alw);this.Rh.R(A._GetAutoObject(A.Device.Converter).S5(ALp,
2,true));this.NX.Z(true);this.Rh.Z(true);this.PM.Z(false);}else{this.NX.Z(false);
this.Rh.Z(false);this.PM.Z(true);}this.TN.R(this.ByH(Alw-Al_,LC));this.Aby.Z(this.
AGz);this.Yw.Z(this.AGz);this.NX.R(A._GetAutoObject(A.acj.DU).Aar());},ByH:function(
A0Q,Ah2){var B;if(Ah2<0){A.ab5("%s",AX2);return A.jV;}var Iu=(AX3+A._GetAutoObject(
A.acj.DU).AfZ())+CQ;var FV=A._GetAutoObject(A.Device.Converter).Ak4(A0Q);if(!A0Q
)FV=A.abU(FV,AX4,0);else if(A0Q>0)FV=A.abU(FV,AH7,0);Iu=this.Bfp(Iu,AX5,FV);if(Ah2===
1)Iu=Iu+A.aaR(A.acf.BiO);else{Iu=Iu+A.aaR(A.acf.BiP);Iu=this.Bfp(Iu,AX6,Ah2.toFixed(
));}return Iu;},Bfp:function(aString,BbF,Bw8){if(aString===A.jV){A.ab5("%s",AX7);
return A.jV;}var A2y=aString.indexOf(BbF,0);if(A2y>=0){aString=A.ab1(aString,A2y
,BbF.length);aString=A.abU(aString,Bw8,A2y);}return aString;},ATl:function(E){if(
A.aaZ(this.AhH,E))return;if(!!this.AhH)A.z$([this,this.C2],this.AhH,0);this.AhH=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},Blx:function(
E){if(A.aaZ(this.AgP,E))return;if(!!this.AgP)A.z$([this,this.C2],this.AgP,0);this.
AgP=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATm:function(
E){if(A.aaZ(this.AhI,E))return;if(!!this.AhI)A.z$([this,this.C2],this.AhI,0);this.
AhI=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},Bly:function(
E){if(A.aaZ(this.AgQ,E))return;if(!!this.AgQ)A.z$([this,this.C2],this.AgQ,0);this.
AgQ=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A94:function(
E){if(this.AGz===E)return;this.AGz=E;this.Am();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rh={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TN={I:this},0);A.acg.
Ap._Init.call(this.Yw={I:this},0);A.acg.Ap._Init.call(this.Aby={I:this},0);C.CH.
_Init.call(this.PM={I:this},0);this.__proto__=C.AG7;this.H(AfA);this.Background.
AZ(0x3F);this.Background.H(AfA);this.NX.H(AX8);this.NX.R(A._GetAutoObject(A.acj.
DU).Aar());this.NX.A5(0x9);this.NX.L(A.jb.Text);this.Rh.H(AX9);this.Rh.A5(0x14);
this.Rh.R(A.aaR(A.acu.Ake));this.Rh.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AX_);this.
V.R(A.aaR(A.acf.Aup));this.V.A5(0x12);this.V.L(A.jb.Text);this.TN.H(Z$);this.Yw.
AZ(0x14);this.Yw.H(AH8);this.Yw.Cu(1);this.Aby.AZ(0x14);this.Aby.H(AH8);this.Aby.
Cu(0);this.PM.H(AX$);this.PM.R(A.aaR(A.acf.A4l));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rh,0);this.J(this.V,0);this.J(this.TN,0);this.J(this.Yw
,0);this.J(this.Aby,0);this.J(this.PM,0);this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Ct(A.aaL(A.fl.Ik));this.Rh.S(A.aaL(A.fl.Aen));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.fl.Bi));this.TN.S(A.aaL(A.
fl.Af));this.TN.A2(A.aaL(A.fl.Ak));this.TN.Ct(A.aaL(A.fl.Bi));this.Yw.Aw(A.aaL(A.
ach.ABG));this.Aby.Aw(A.aaL(A.ach.ABG));this.H7=A._NewObject(A.Device.Rating,0);
this.PM.S(A.aaL(A.fl.Af));this.PM.A2(A.aaL(A.fl.Ak));this.PM.Ct(A.aaL(A.fl.Bi));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rh._Done();this.V._Done();this.TN._Done();this.Yw._Done();this.Aby._Done(
);this.PM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rh._ReInit();this.V.
_ReInit();this.TN._ReInit();this.Yw._ReInit();this.Aby._ReInit();this.PM._ReInit(
);this.Rh.R(A.aaR(A.acu.Ake));this.V.R(A.aaR(A.acf.Aup));this.PM.R(A.aaR(A.acf.A4l
));this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.aaL(A.fl.Af));this.NX.Ct(A.aaL(A.fl.Ik
));this.Rh.S(A.aaL(A.fl.Aen));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Ct(A.aaL(A.fl.Bi));this.TN.S(A.aaL(A.fl.Af));this.TN.A2(A.aaL(A.fl.Ak));this.
TN.Ct(A.aaL(A.fl.Bi));this.PM.S(A.aaL(A.fl.Af));this.PM.A2(A.aaL(A.fl.Ak));this.
PM.Ct(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhH)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgQ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVv={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hk:function(G){var B;if(!this.Animal||!this.Rating)return;var Gf=this.AD.G4;var
Cz=(C.AG7.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PN,B.EB]);Cz.Blx([B=A._GetAutoObject(A.Device.Device),B.AEA,B.AIO]);Cz.Bly([B=
this.Rating,B.A8N,B.OnSetTimestamp]);switch(Gf%this.AY){case 1:{Cz.ATl([B=this.Animal
,B.A8n,B.AFb]);Cz.ATm([B=this.Animal,B.A8O,B.AFF]);Cz.T(A.aaR(A.acf.Aup));}break;
default:if(this.Animal.Aq9()){Cz.ATl([B=this.Animal,B.ASg,B.Awz]);Cz.ATm([B=this.
Animal,B.ASx,B.Aw1]);Cz.T(A.aaR(A.acf.ALN));}else{Cz.ATl([B=this.Animal,B.ASg,B.
Awz]);Cz.ATm([B=this.Animal,B.ASx,B.Aw1]);Cz.T(A.aaR(A.acf.Bgr));}}if(this.AY>1)
Cz.A94(true);else Cz.A94(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GN
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.Co(this);break;default:this.Cq.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jw(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jw(1);else{this.Jw(2);this.AD.GS(1);this.
AD.HH(this.AD.Gs,true,null,null);}if(this.AY>0)this.AD.AbA(0,this.AY-1);},Akx:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbA(0,this.AY-1);
},CE:function(G){if(this.AD.Gs>0)this.AD.GS(this.AD.Gs-1);else this.AD.GS(this.AY-
1);this.AD.HH(this.AD.Gs,true,null,null);},Co:function(G){if(this.AD.Gs<(this.AY-
1))this.AD.GS(this.AD.Gs+1);else this.AD.GS(0);this.AD.HH(this.AD.Gs,true,null,null
);},Jw:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jw(this.AY);A.abo([this
,this.Arp,this.Jw],0);},Arp:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVv;this.H(AfA);this.Cq.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfA);this.AD.NZ(C.AG7);this.AD.Ae3(160);this.AD.GS(0);this.
AD.Jw(2);this.J(this.AD,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.
AD.Hk=[this,this.Hk];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Cn.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cn.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=
A.jb.CS;GW=A.jb.Text;}if(!Hd){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.LF=Hd;
this.KD=Fu;this.Qp=GE;},_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(KX);this.V.H(BD);this.Zt(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeM={KI:null,GJ:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KI.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KI.
L(this.V.AQ);},Init:function(aArg){},AbY:function(E){if(this.GJ===E)return;this.
GJ=E;this.KI.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KI={I:this},0);this.__proto__=C.AeM;this.H(KX);this.Background.H(KX);this.V.
H(AcI);this.V.R(Lu);this.KI.H(IT);this.KI.R(AYa);this.J(this.KI,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(null);this.KI.S(A.aaL(A.fl.Af));this.
KI.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KI._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KI.S(A.aaL(
A.fl.Af));this.KI.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvS={AB_:null,Q:null,A1:null,AF:null,Ii:null,LU:null,Ap:null,EM:null,AN0:A.jV
,AN1:A.jV,Bl:function(aSize){C.AeM.Bl.call(this,aSize);if(!this.AB_)this.KI.H([].
concat(0,this.KI.M.slice(1,4)));else this.KI.H([].concat(this.Ap.M[2],this.KI.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S9;C.AeM.Ai.call(this,Ae);var Bb8=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apa)this.AbY(this.AN0);else
this.AbY(this.AN1);}else{this.AbY(A._GetAutoObject(A.Device.Converter).Rf((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ii&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ii,F[1].call(F[0]))===1)||(!(CA=this.Ii,CA[1].call(CA[0]))&&(S9=this.LU,S9[1].call(
S9[0])))))Bb8=true;}}this.EM.Z(Bb8);this.Ap.L(this.V.AQ);A.pe([this,this.Af9],this
);},C2:function(G){this.Am();},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AEU:function(E){if(this.AB_===E)return;this.AB_=E;this.
Ap.Aw(E);this.BiV();},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaB],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaB],E,0);if(!!E)A.pe([
this,this.AaB],this);},PO:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaD],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaD],E,0);if(!!E)
A.pe([this,this.AaD],this);},AaD:function(G){this.Am();},AaB:function(G){this.Am(
);},Uf:function(E){if(A.aaZ(this.Ii,E))return;if(!!this.Ii)A.z$([this,this.AlR],
this.Ii,0);this.Ii=E;if(!!E)A.zX([this,this.AlR],E,0);if(!!E)A.pe([this,this.AlR
],this);},AlR:function(G){this.Am();},Af9:function(G){var F,CA;if((!this.Ii||!this.
A1)||!this.AF)return;var A2f=this.KI.Afc([(this.KI.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3A=this.KI.Afc([this.KI.String.
length-(F=this.AF,F[1].call(F[0])),0]);var AA$=this.KI.Db(0x0);this.EM.H([A2f[0]-
1,AA$[1],A3A[0]+1,AA$[3]]);},ArE:function(E){if(this.AN0===E)return;this.AN0=E;this.
Am();},ArF:function(E){if(this.AN1===E)return;this.AN1=E;this.Am();},AeZ:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A2Z],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A2Z],E,0);if(!!E)A.pe([this,this.A2Z],this);},A2Z:function(
G){this.Am();},_Init:function(aArg){C.AeM._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.AvS;
this.Ap.H(AhS);this.EM.H(AYb);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KI.Q3([this,this.Af9]);},_Done:function(){this.__proto__=
C.AeM;this.Ap._Done();this.EM._Done();C.AeM._Done.call(this);},_ReInit:function(
){C.AeM._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeM._Mark.call(this,D);if((B=this.AB_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ii)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ih:0,AaA:4,Bdj:true,Bdi:false,Bcd:true,Bdb:false,AlX:function(
G){C.Q8.AlX.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bda()){this.Ih=A._GetAutoObject(
A.Device.Helper).Uu.Id;var Aiu=A._GetAutoObject(A.Device.Helper).AQ1(this.Ih);if(
Aiu)A._GetAutoObject(A.Device.Device).A6(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A23]);else{this.AaA=A._GetAutoObject(A.Device.
Helper).AQ2(this.Ih);var BdG=false;if((this.AaA===3)||(this.AaA===2))BdG=A._GetAutoObject(
A.Device.Helper).A6Z(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(BdG)A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.Ih),0,null
);else switch(this.AaA){case 2:{var BM=A._GetAutoObject(A.Device.Converter).AxJ(
this.Ih);A._GetAutoObject(A.Device.Device).A6(46,true,BM.toFixed(),0,[this,this.
A23]);}break;case 3:case 1:case 0:case 4:this.A3Q();break;default:throw new Error(
AH9+this.AaA.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A$).Fy();},AIQ:function(
s){this.Ev(s);},A3Q:function(){if((this.AaA===3)||(this.AaA===2)){if((this.Bcd&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ih)){A._GetAutoObject(A.Device.Device).A6(69,true,A.jV,0,[this
,this.A23]);return;}else this.BBb();}A._GetAutoObject(A.Device.Helper).W.PQ(this.
Ih);this.Bdb=true;this.BBd();this.Ev(this);},A23:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A3Q();break;case 107:switch(As.PopupState){case 7:{this.A3Q();A._GetAutoObject(A.
Device.Helper).BnO(this.Ih);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(As.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AH_,As.Id);}},BBb:
function(){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(this.Bdi&&(A._GetAutoObject(
A.Device.Converter).ZV(this.Ih)===10)){var BbT=Math.trunc((this.Ih%1000000000000
)/10000000000);if(!BbT&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((BbT===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBd:function(){if(this.
Bdj){A._GetAutoObject(A.Device.Helper).W.SF(A._GetAutoObject(A.Device.Helper).A4D(
A._GetAutoObject(A.Device.Device).AkY,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).AkY===1)A._GetAutoObject(A.Device.Helper).A$o();
}},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dq(C.II);this.Number.R(A.aaR(A.acf.OQ));this.Je.H(AYc);this.
IR.H(WZ);this.Akz(1);this.N.CE=[this,this.AIQ];this.N.C1(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(A.acf.OQ));},_className:"Application::SetTransponderScreen"
};C.ADi={Gn:null,Lk:null,Kq:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Lk.R(A._GetAutoObject(A.acj.DU
).AfZ());this.Kq.R(A._GetAutoObject(A.acj.DU).Aar());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gn={I:this},0);A.acg.Text._Init.
call(this.Lk={I:this},0);A.acg.Text._Init.call(this.Kq={I:this},0);this.__proto__=
C.ADi;this.Background.L(A.jb.Text);this.Gn.H(AYd);this.Gn.A5(0x11);this.Gn.R(A.aaR(
A.acf.Date));this.Gn.L(A.jb.Bm);this.Lk.H(AYe);this.Lk.A5(0x11);this.Lk.L(A.jb.Bm
);this.Kq.H(AYf);this.Kq.L(A.jb.Bm);this.J(this.Gn,0);this.J(this.Lk,0);this.J(this.
Kq,0);this.Gn.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Gn._Done();this.Lk.
_Done();this.Kq._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Gn._ReInit();this.Lk._ReInit();this.Kq._ReInit();this.Gn.R(A.aaR(
A.acf.Date));this.Gn.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AG$={Mj:null,Ho:null,H$:null,AP:null,A_:null,FV:0,Ib:0,AiI:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ho.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Ho.M[2]-1,0,this.Ho.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiI){this.H$.R(Rm);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S5(this.FV,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzL(this.FV,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DU).AzJ(this.FV,this.Ib));}this.Ho.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Alt=this.AX.Hu(
Ad,6);var Al2=this.AX.CF(Ad,8);if(this.Hq>0){var Byf=this.AX.Hu(this.Hq-1,6);var
BAQ=this.AX.CF(this.Hq-1,8);var LC=A._GetAutoObject(A.Device.Helper).L9(Byf,Alt);
if(!!LC){this.AiI=false;this.FV=A._GetAutoObject(A.acj.DU).Alq(LC,BAQ,Al2);}else{
this.AiI=true;this.FV=0;}}else{this.AiI=true;this.FV=0;}this.T(A._GetAutoObject(
A.acj.KJ).ACL(Alt));this.Ho.R(A._GetAutoObject(A.Device.Converter).Ak4(Al2));this.
Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Ho={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AG$;this.V.H(O3);this.Mj.H(As3);this.Ho.H(AH$);this.Ho.A5(0x12);this.Ho.R(Rk);
this.Ho.L(A.jb.Text);this.H$.H(AIa);this.H$.R(Rk);this.H$.L(A.jb.Text);this.AP.H(
Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.A_.L(A.jb.Bc);this.J(this.Mj,0);this.
J(this.Ho,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A_,0);this.Ho.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mj._Done();this.Ho._Done();this.H$._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mj._ReInit(
);this.Ho._ReInit();this.H$._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ho.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,VX:null,AhO:null,SX:null
,KL:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LC=
A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LC){var FV=A._GetAutoObject(
A.acj.DU).Alq(LC,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdI=A.aaR(A.acf.BgO);AdI=A._GetAutoObject(
A.Device.Helper).Nk(AdI,P8,A._GetAutoObject(A.Device.Converter).S5(FV,2,true));AdI=
A._GetAutoObject(A.Device.Helper).Nk(AdI,Ax5,A._GetAutoObject(A.acj.DU).Aar());this.
SX.R(AdI);this.AhO.L(A._GetAutoObject(A.acj.DU).AzJ(FV,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SX.L(A._GetAutoObject(A.acj.DU).AzL(FV,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SX.R(A.aaR(A.acf.AVt));this.AhO.L(A.jb.
AQN);this.SX.L(A.jb.Text);}},CC:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CV(HV);var Ac4=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);this.Axp(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},Axp:function(G){this.Bg=A._NewObject(C.Gc,0);this.Bg.NZ(C.AG$);this.Bg.H(Ayf
);this.Bg.Zm(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dz(this.KL);this.J(this.
Bg,0);this.Bb(this.Bg);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},Dz:function(
E){if(this.KL===E)return;this.KL=E;if(!!this.Bg)this.Bg.Dz(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADi._Init.call(this.VX={I:this},0);A.acg.AK._Init.
call(this.AhO={I:this},0);A.acg.Text._Init.call(this.SX={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dq(C.II);this.VX.H(
P9);this.KL=A.aaR(A.acf.Akf);this.AhO.AZ(0x1D);this.AhO.H(IT);this.SX.AZ(0x1D);this.
SX.H(IT);this.SX.A5(0x12);this.SX.R(Rk);this.J(this.VX,0);this.J(this.AhO,0);this.
J(this.SX,0);this.N.CE=[this,this.Anh];this.N.C1(A.aaL(A.ach.E2));this.SX.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.AhO._Done(
);this.SX._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VX._ReInit();this.AhO._ReInit();this.SX._ReInit();this.Dz(A.aaR(A.acf.Akf
));this.SX.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mg={DP:null,Act:null,ARq:11,EV:0,A4B:true,ABN:false,IY:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.Fb(4);else A._GetAutoObject(A.Device.Device).A6(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.AzV())this.DP.Ac3();else if((this.
EV===2)&&A._GetAutoObject(A.Device.Helper).W.AqR())this.Fb(5);else this.Fb(1);},
E4:function(G){this.AK0();},Ev:function(G){this.Fb(0);A._GetAutoObject(C.A$).Fy(
);},BBt:function(){A._GetAutoObject(A.Device.Device).AhG();},AK0:function(){A._GetAutoObject(
A.Device.Device).AnR();},A9a:function(E){if(this.ABN===E)return;this.ABN=E;A.abo([
this,this.BjZ,this.A9a],0);},Fb:function(E){var B;if(this.EV===E)return;this.EV=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkJ();A.zX([this,this.AKp]
,[B=A._GetAutoObject(A.Device.Helper),B.Arq,B.Aky],0);A.z$([this,this.AAm],[B=this.
DP,B.SA,B.Fb],0);this.BBt();}break;case 3:{A.z$([this,this.AKp],[B=A._GetAutoObject(
A.Device.Helper),B.Arq,B.Aky],0);this.AK0();this.Bzp();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asi();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4B)this.BBe();else this.BBh();}break;case 4:{A.z$([this,this.AKp],[B=A._GetAutoObject(
A.Device.Helper),B.Arq,B.Aky],0);this.AK0();A._GetAutoObject(A.Device.Helper).Asi(
);A.zX([this,this.Beq],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyI],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARq);}break;case 5:this.BfL();break;case
6:{A.zX([this,this.AAm],[B=this.DP,B.SA,B.Fb],0);this.DP.Ac3();}break;case 0:{A.
z$([this,this.AKp],[B=A._GetAutoObject(A.Device.Helper),B.Arq,B.Aky],0);this.AK0(
);}break;default:throw new Error(Ayl);}A.abo([this,this.SA,this.BvV],0);},BvV:function(
Aq){this.Fb(Aq);},AKp:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uu){if(
this.EV===1)this.Fb(3);else A.ab5("%s%e",AYg,this.EV);}else A.ab5("%s",AIb);},BBe:
function(){A._GetAutoObject(A.Device.Device).A6(13,true,A._GetAutoObject(A.Device.
Helper).Ak0(A._GetAutoObject(A.Device.Helper).Uu.Id).toFixed(),0,[this,this.BzE]
);},BzE:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bch(false))A._GetAutoObject(
C.A$).Cf(31);else{A._GetAutoObject(A.Device.Helper).AkJ();this.Fb(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkJ();this.Fb(1);}},
Bch:function(AiV){if(A._GetAutoObject(A.Device.Device).An.Lf()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gq();A._GetAutoObject(
A.Device.Helper).Aqb(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PQ(A._GetAutoObject(A.Device.Helper).Uu.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhC){var AlD=A._GetAutoObject(A.Device.Helper).AhC.AOK();A._GetAutoObject(
A.Device.Helper).W.AbZ(AlD);A._GetAutoObject(A.Device.Helper).W.Anv(AlD);}if(A._GetAutoObject(
A.Device.Helper).AQ2(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nd(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SF(A._GetAutoObject(A.Device.Helper).BgC(A._GetAutoObject(A.Device.
Device).Agu,A._GetAutoObject(A.Device.Helper).W));if(AiV){A._GetAutoObject(A.Device.
Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SN(L7);if(A._GetAutoObject(A.Device.Helper).AmY()){if(A._GetAutoObject(A.
Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abl(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agu)A._GetAutoObject(
A.Device.Helper).A$o();}return true;},Bzp:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uu){var AJh=true;if(A._GetAutoObject(A.Device.Helper).Uu.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJh=A._GetAutoObject(A.Device.Helper).A6$(A._GetAutoObject(
A.Device.Helper).Uu.Id);if(!AJh&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bch(true);AJh=A._GetAutoObject(A.Device.Helper).A6$(A._GetAutoObject(A.
Device.Helper).Uu.Id);}}if(AJh)this.Fb(5);else this.Fb(2);}else{A.ab5("%s",AIb);
return;}},Beq:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARq){A.z$([this,this.Beq],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyI
],0);if(A._GetAutoObject(A.Device.Helper).W.AqR())this.Fb(5);else this.Fb(1);}},
BfL:function(){if(this.ABN===true)this.Fb(6);else A._GetAutoObject(C.A$).Cf(24);
},BBh:function(){A._GetAutoObject(A.Device.Device).A6(36,true,A.jV,0,[this,this.
BAv]);},BAv:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkJ();this.Fb(1);}},AAm:function(G){if(!this.DP.EV)this.Fb(1);},A2R:function(G
){},Bv5:function(s){this.A2R(s);},BjZ:function(){return this.ABN;},SA:function(){
return this.EV;},_Init:function(aArg){C.Q8._Init.call(this,aArg);A.acg.Text._Init.
call(this.Act={I:this},0);this.__proto__=C.Mg;this.N.Z(true);this.Dq(C.AqS);this.
Number.H(AYh);this.Number.R(A.aaR(A.acf.A_R));this.Je.H(AYi);this.IR.H(AYj);this.
Act.H(AYk);this.Act.R(AYl);this.Act.L(A.jb.Text);this.J(this.Act,0);this.N.CE=[this
,this.Ev];this.N.Ck=[this,this.Bv5];this.N.C1(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Act.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Q8;this.Act._Done();C.Q8._Done.call(this);},_ReInit:function(
){C.Q8._ReInit.call(this);this.Act._ReInit();this.Number.R(A.aaR(A.acf.A_R));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q8._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4p={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ao7:-1,EV:0,Bxu:function(){var Bfq=false;
var Oi=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else if(Oi){Bfq=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axl(B1,5);B1.OnSetAppearance(3);B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axl(B1
,5);B1.OnSetAppearance(1);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(Bfq)A._GetAutoObject(A.Device.Helper).W.Uj(false);if(Oi)A.
_GetAutoObject(A.Device.Helper).W.AnM(false);else A._GetAutoObject(A.Device.Helper
).W.AnM(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A6(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bxw:function(){A._GetAutoObject(
A.Device.Helper).W.AGv(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A6(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qj:function(ED){switch(ED){case 4:this.Bxu();break;case
128:A._GetAutoObject(C.A$).Cf(7);break;case 16:A._GetAutoObject(C.A$).Cf(36);break;
case 1:A._GetAutoObject(C.A$).Cf(10);break;case 2:A._GetAutoObject(C.A$).Cf(11);
break;case 8:this.Bxw();break;case 64:A._GetAutoObject(C.A$).Cf(29);break;case 32:
A._GetAutoObject(C.A$).Cf(48);break;case 256:A._GetAutoObject(C.A$).Cf(21);break;
case 512:A._GetAutoObject(C.A$).Cf(30);break;case 1024:this.Bzm();break;case 262144:
this.BBJ();break;case 2048:this.Ac3();break;case 4096:this.Bb$(false);break;case
8192:this.Bxv();break;case 16384:this.Bzl();break;case 32768:this.BxV();break;case
524288:this.BxW();break;case 65536:this.Byi();break;case 131072:this.BA7();break;
case 0:break;default:throw new Error(AYm);}},Bcj:function(ED,Bw1){var EP=A._NewObject(
C.Wg,0);EP.AbX(false);EP.Aj(true);EP.AR=Bw1;EP.Bk7(ED);switch(ED){case 1:{EP.T(A.
aaR(A.acf.AnS));EP.DB(A.aaL(A.ach.ALD));}break;case 2:{EP.T(A.aaR(A.acf.A_A));EP.
DB(A.aaL(A.ach.ALE));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DB(A.aaL(A.ach.ALF
));EP.AFr(true);}break;case 8:{EP.T(A.aaR(A.acf.Ar6));EP.DB(A.aaL(A.ach.ALG));EP.
AFr(true);}break;case 16:{EP.T(A.aaR(A.acf.AMc));EP.DB(A.aaL(A.ach.ALH));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DB(A.aaL(A.ach.ALI));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DB(A.aaL(A.ach.ALJ));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DB(A.aaL(A.ach.ALK));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DB(A._GetAutoObject(A.acj.DU).ByX());}break;case 512:{EP.T(A.aaR(A.acf.ARP));
EP.DB(A.aaL(A.ach.ALv));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DB(A.aaL(A.ach.ALw));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DB(A.aaL(A.ach.ALC));}break;case 2048:{EP.T(A.aaR(A.acf.Ts));EP.DB(A.aaL(A.ach.ALx
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DB(A.aaL(A.ach.ALy));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DB(A.aaL(A.ach.ALz));EP.AFr(true);}break;case
16384:{EP.T(A.aaR(A.acf.BhS));EP.DB(A.aaL(A.ach.ALA));}break;case 131072:{EP.T(A.
aaR(A.acf.Bn0));EP.DB(A.aaL(A.ach.ALB));}break;default:A.ab5("%s",(AYn+ED.toFixed(
))+AYo);}return EP;},Byv:function(){this.Ao7=this.Ao7+1;if(this.Ao7>=this.AutoActions.
NP())this.Fb(0);else this.Fb(2);},BAU:function(){this.Ao7=-1;},AzV:function(){return(
this.Ao7>-1)&&!this.Bzf();},Bzf:function(){return this.Ao7>=this.AutoActions.NP(
);},Fb:function(E){if(this.EV===E)return;this.EV=E;switch(E){case 1:this.Byv();break;
case 2:{var Aai=this.AutoActions.OC(this.Ao7);if(this.A4m(A._GetAutoObject(A.Device.
Helper).W,Aai))this.Qj(Aai);else A._GetAutoObject(A.Device.Device).A6(64,true,(this.
ActionToString.Lt(Aai)+As1)+this.AnimalTypeToString.Lt(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BAU();break;default:throw new
Error(Ayl);}A.abo([this,this.SA,this.Fb],0);},MT:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bb$(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A$).Cf(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.AzV())this.
Fb(1);},Bcb:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bzm:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cf(
45);else A._GetAutoObject(A.Device.Device).A6(32,true,A.jV,0,[this,this.MT]);},Ac3:
function(){this.Fb(1);},BAS:function(){var Oi=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oi&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device
).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gq();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axl(B1,5);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uj(false);if(Oi)A._GetAutoObject(
A.Device.Helper).W.AnM(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BAT:function(){A._GetAutoObject(
A.Device.Helper).W.AGv(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A6(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bb$:function(Byz){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(Byz===false))A._GetAutoObject(A.Device.
Device).A6(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A$).Cf(54);},Bxv:
function(){A._GetAutoObject(A.Device.Helper).W.ArN(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A6(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A6(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bzl:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A$).Cf(81);else A._GetAutoObject(A.
Device.Device).A6(69,true,A.jV,0,[this,this.MT]);},BxV:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj0(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae0(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae1(false);A._GetAutoObject(A.Device.
Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A6(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},Byi:function(){A._GetAutoObject(A.Device.Helper).W.Ae0(false);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj0(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae0(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A6(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A6(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4m:function(Em,ED
){var Qt=false;switch(ED){case 32768:Qt=Em.IsRegistrationNoticePending&&!!Em.NaisIdMother;
break;case 524288:Qt=Em.IsRegistrationNoticePending&&!Em.NaisIdMother;break;case
4096:case 8192:switch(Em.AnimalType){case 1:Qt=true;break;default:;}break;case 512:
switch(Em.AnimalType){case 0:Qt=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qt=true;break;default:A.ab5("%s",AYp+
ED.toFixed());}return Qt;},BA7:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cf(80);else A._GetAutoObject(A.Device.Device).A6(
69,true,A.jV,0,[this,this.MT]);},BBJ:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A6(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.PQ(0);A._GetAutoObject(A.Device.Helper).W.SF(A._GetAutoObject(A.
Device.Helper).A4D(A._GetAutoObject(A.Device.Device).AnX,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A6(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},BxW:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae1(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A6(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},SA:function(){return this.EV;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A4p;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALP={AaX:null,Aqd:null,Fb:function(E){if(this.EV===E)return;C.Mg.Fb.call(this
,E);switch(E){case 1:this.Dq(C.AqS);break;case 5:case 6:this.Dq(C.II);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayl);}},A2R:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaX={I:this},0);C.ALQ._Init.call(this.Aqd={I:this
},0);this.__proto__=C.ALP;this.A9a(true);this.AaX.H(AYq);this.AaX.R(A.aaR(A.acf.
Ts));this.AaX.L(A.jb.Text);this.Aqd.H(AYr);this.J(this.AaX,0);this.J(this.Aqd,0);
this.N.Cv(A.aaL(A.ach.Aex));this.AaX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mg;this.AaX._Done();this.Aqd._Done();C.Mg._Done.call(this);},_ReInit:function(
){C.Mg._ReInit.call(this);this.AaX._ReInit();this.Aqd._ReInit();this.AaX.R(A.aaR(
A.acf.Ts));this.AaX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(
this,D);if((B=this.AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqd)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ia:null,JZ:null,A2R:function(G){if(this.Ia.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mg._Init.call(this,aArg);A.acg.Text._Init.call(this.
JZ={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JZ.H(AYs);this.JZ.KQ(
true);this.JZ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABB));this.
JZ.L(A.jb.Text);this.J(this.JZ,0);this.N.Cv(A.aaL(A.ach.Aex));this.JZ.S(A.aaL(A.
fl.Af));this.Ia=A._GetAutoObject(C.Pi);},_Done:function(){this.__proto__=C.Mg;this.
JZ._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.
JZ._ReInit();this.JZ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABB
));this.JZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(this,D);if((
B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JZ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALQ={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABl],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Auo],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABl],this);
A.pe([this,this.Auo],this);this.H(A.abK(this.M,AYt));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYu)));},Bb1:function(G){var B;var Alr=0;var Azn=0;
var Bcf;var X=this.Y.Ah;var Cx=null;Bcf=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wg.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYv));Cx.H(A.abM(Cx.M
,(Azn*58)+Bcf));Cx.H(A.abO(Cx.M,Alr*58));if(Azn>=3){Alr=Alr+1;Azn=0;}else Azn=Azn+
1;}X=X.Ah;}this.Bb(null);},A1e:function(ED){var EP=A._GetAutoObject(C.DP).Bcj(ED
,null);this.J(EP,0);this.Bb1(this);},AoW:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(
AdG);}},ABl:function(G){this.AoW();var O;var CB=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CB;O=O+1){var Aai=A._GetAutoObject(C.AutoActions).OC(O);this.A1e(
Aai);}A.pe([this,this.Bb1],this);A.pe([this,this.Auo],this);A.pe([this,this.BBT]
,this);},Auo:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(X)?X:null);Aa.AFr(false);
}X=X.Ah;}},BBT:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(X)?X:null);var BxL=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A88(false);for(O=0;O<BxL;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OC(O)){Aa.A88(true);Aa.Bmc(AYw+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALQ;this.Y.JQ(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A4p._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APt={Lj:null,T1:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).AlC());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lj={I:this},0);C.CH._Init.call(this.T1={I:this},0);this.__proto__=
C.APt;this.Lj.H(AYx);this.Lj.A5(0x12);this.Lj.L(A.jb.Text);this.T1.H(Aon);this.T1.
R((A.aaR(A.acf.Ahg)+AIc)+A.aaR(A.acf.Kj));this.T1.A5(0x12);this.T1.L(A.jb.Text);
this.J(this.Lj,0);this.J(this.T1,0);this.Lj.S(A.aaL(A.fl.Af));this.T1.S(A.aaL(A.
fl.Ak));this.T1.A2(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Lj._Done();this.T1._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Lj._ReInit();this.T1._ReInit();this.T1.R((A.aaR(A.acf.
Ahg)+AIc)+A.aaR(A.acf.Kj));this.Lj.S(A.aaL(A.fl.Af));this.T1.S(A.aaL(A.fl.Ak));this.
T1.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADg={Jv:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jv={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADg;this.Jv.H(AYy
);this.Jv.KQ(true);this.Jv.A5(0x14);this.Jv.R(A.aaR(A.acf.AhN)+AId);this.Jv.L(A.
jb.Text);this.D0.H(Aon);this.D0.KQ(true);this.D0.R(A.aaR(A.acf.AF0));this.D0.L(A.
jb.Text);this.J(this.Jv,0);this.J(this.D0,0);this.Jv.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jv._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jv._ReInit(
);this.D0._ReInit();this.Jv.R(A.aaR(A.acf.AhN)+AId);this.D0.R(A.aaR(A.acf.AF0));
this.Jv.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TQ={I8:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I8={I:this},0);this.__proto__=C.TQ;this.I8.H(AIe);this.I8.R((((A.aaR(A.acf.RM)+AcN
)+AIf)+A.aaR(A.acf.A$C))+Oa);this.I8.A5(0x12);this.I8.L(A.jb.Text);this.J(this.I8
,0);this.I8.S(A.aaL(A.fl.Af));this.I8.A2(A.aaL(A.fl.Ak));this.I8.Ct(A.aaL(A.fl.Bi
));},_Done:function(){this.__proto__=C.Dc;this.I8._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I8._ReInit();this.I8.R((((A.aaR(
A.acf.RM)+AcN)+AIf)+A.aaR(A.acf.A$C))+Oa);this.I8.S(A.aaL(A.fl.Af));this.I8.A2(A.
aaL(A.fl.Ak));this.I8.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APv={Lk:null,Kq:null,CP:function(){this.A_T();},Init:function(aArg){this.A_T(
);},A_T:function(){this.Lk.R(A._GetAutoObject(A.acj.DU).AfZ());this.Kq.R(A._GetAutoObject(
A.acj.DU).Aar());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lk={I:this},0);C.CH._Init.call(this.Kq={I:this},0);this.__proto__=C.APv;
this.Lk.H(AYz);this.Lk.A5(0x12);this.Lk.L(A.jb.Text);this.Kq.H(Aon);this.Kq.L(A.
jb.Text);this.J(this.Lk,0);this.J(this.Kq,0);this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(
A.aaL(A.fl.Af));this.Kq.A2(A.aaL(A.fl.Ak));this.Kq.Ct(A.aaL(A.fl.Bi));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Lk._Done();this.Kq._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Lk._ReInit();
this.Kq._ReInit();this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af));this.Kq.A2(
A.aaL(A.fl.Ak));this.Kq.Ct(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM4={Mj:null,Ho:null,H$:null,AP:null,A_:null,FV:0,Aax:0,Ib:0,AiI:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ho.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Ho.M[2]-1,0,this.Ho.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiI){this.H$.R(Rm);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S5(this.FV,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzL(this.FV,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DU).AzJ(this.FV,this.Ib));}if(this.Aax>0)this.Ho.
R(A._GetAutoObject(A.Device.Converter).Ak4(this.Aax));else this.Ho.R(Rm);this.Ho.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Mf=
this.AX.CF(Ad,1);var Auj=this.AX.Hu(Ad,24);var AJ1=this.AX.CF(Ad,23);var Auk=this.
AX.Hu(Ad,19);this.Aax=this.AX.CF(Ad,18);if((Auj>0)&&(Auj!==Auk)){var LC=A._GetAutoObject(
A.Device.Helper).L9(Auj,Auk);if(!!LC){this.AiI=false;this.FV=A._GetAutoObject(A.
acj.DU).Alq(LC,AJ1,this.Aax);}else{this.AiI=true;this.FV=0;}}else{this.AiI=true;
this.FV=0;}this.T(Mf.toFixed());this.Ib=this.AX.AmN(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Ho={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AM4;this.V.H(O3);this.Mj.H(As3);this.Ho.H(AH$);this.Ho.A5(0x12);this.Ho.R(Rk);
this.Ho.L(A.jb.Text);this.H$.H(AIa);this.H$.R(Rk);this.H$.L(A.jb.Text);this.AP.H(
Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.A_.L(A.jb.Bc);this.J(this.Mj,0);this.
J(this.Ho,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A_,0);this.Ho.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mj._Done();this.Ho._Done();this.H$._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mj._ReInit(
);this.Ho._ReInit();this.H$._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ho.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ho)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M1={Mi:null,AP:null,A_:null,Gy:null,Xj:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mi.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mi.M);this.Background.H([].concat(this.Mi.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gy.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gy.M[2]-1,0,this.
Gy.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gy.L(this.V.AQ
);if(!!this.Xj&&(this.Xj!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Ql(this.
Xj));this.V.L(A._GetAutoObject(A.acj.Assessment).Xt(this.Xj));}else this.Mi.L(this.
Background.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var
Mf=this.AX.CF(Ad,1);var LP=this.AX.I4(Ad,13);var Alx=this.AX.I4(Ad,17);var AlG=this.
AX.H2(Ad,11);var Ay6=this.AX.Hu(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
L9(Ay6,A._GetAutoObject(A.Device.Helper).Du());this.Xj=A._GetAutoObject(A.Device.
Helper).AL$(LP,AlG,Alx);this.T(Mf.toFixed());if(AfM<100)this.Gy.R((AfM.toFixed()+
CQ)+A.aaR(A.acf.ALO));else this.Gy.R(A._GetAutoObject(A.acj.KJ).ACM(Ay6,A._GetAutoObject(
A.Device.Helper).Du(),AIg));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mi={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gy={I:this
},0);this.__proto__=C.M1;this.Mi.H(As3);this.Background.H(AYA);this.V.H(O3);this.
AP.H(Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.A_.L(A.jb.Bc);this.Gy.H(Aym);this.
J(this.Mi,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gy,0);this.Gy.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done(
);this.AP._Done();this.A_._Done();this.Gy._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gy._ReInit();this.Gy.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM2={Ajt:null,N8:null,AP:null,A_:null,Jq:null,AKh:0,A2e:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajt.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jq.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jq.De(this.V.AQ);if(this.AKh>0){this.Ajt.L(A._GetAutoObject(A.acj.Assessment
).Ql(this.A2e));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xt(this.A2e));}else{
this.Ajt.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hq=Ad;if(!!this.AX){var Iy=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,
1);this.AKh=this.AX.CF(Ad,5);this.A2e=this.AX.I4(Ad,17);this.T(Mf.toFixed());if(
this.AKh>0)this.N8.R(A._GetAutoObject(A.Device.Converter).AkV(this.AKh));else this.
N8.R(Rm);var Xi=A._GetAutoObject(A.Device.Helper).ZM(6);A._GetAutoObject(A.Device.
Device).SN(Ad);var A0p=A._GetAutoObject(A.Device.Helper).Big(A._GetAutoObject(A.
Device.Device).Bt,9,Iy,Xi,0);this.Jq.A9o(A0p.Get(3));this.Jq.A9q(A0p.Get(2));this.
Jq.A9p(A0p.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajt={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jq._Init.call(this.Jq={I:this},0);this.__proto__=C.AM2;this.N8.A5(0x12);this.
N8.R(Rk);this.N8.L(A.jb.Text);this.AP.H(Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.
A_.L(A.jb.Bc);this.Jq.H(AYB);this.J(this.Ajt,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jq,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajt._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jq._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajt._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jq._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jq={Afl:null,
ColoredCounterAttrSet:null,ACd:0,ACe:0,ACc:0,KR:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKa;var ALu;var AKF;var AlO=0;if(this.ACc>0){AKa=this.ACc.toFixed(
);AlO+=AKa.length;}else{AKa=AYC;AlO++;}if(this.ACe>0){ALu=this.ACe.toFixed();AlO+=
ALu.length;}else{ALu=Ayn;AlO++;}if(this.ACd>0){AKF=this.ACd.toFixed();AlO+=AKF.length;
}else{AKF=AH6;AlO++;}if(AlO<=4)this.ColoredCounterAttrSet.Ahm(A.aaL(A.fl.Af));else
if(AlO<=5)this.ColoredCounterAttrSet.Ahm(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahm(A.aaL(A.fl.Bi));this.Afl.R(((((AYD+AKa)+AYE)+ALu)+AYF)+AKF);},A9p:function(E
){if(this.ACd===E)return;this.ACd=E;this.Am();},A9q:function(E){if(this.ACe===E)
return;this.ACe=E;this.Am();},A9o:function(E){if(this.ACc===E)return;this.ACc=E;
this.Am();},De:function(E){if(this.KR===E)return;this.KR=E;this.ColoredCounterAttrSet.
Ahj(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuF._Init.call(
this.Afl={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jq;this.H(AIh);this.Afl.AZ(0x3F);this.Afl.H(AIh);this.
Afl.R(Rk);this.ColoredCounterAttrSet.Blh(A.jb.E1);this.ColoredCounterAttrSet.A9f(
A.jb.H8);this.ColoredCounterAttrSet.A9e(A.jb.Gi);this.ColoredCounterAttrSet.Ahj(
A.jb.Text);this.KR=A.jb.Text;this.J(this.Afl,0);this.Afl.A8$(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahm(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9b(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afl._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afl._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahm(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM1={Atv:null
,Ab8:null,Ab9:null,Ab_:null,Jq:null,AP:null,A_:null,Ea:null,Lr:null,Acv:null,KS:
null,KT:null,AJn:0,AJm:0,AJl:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Ab8.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acv.H(this.
Ab8.M);this.A_.H([this.Ab8.M[2]-1,0,this.Ab8.M[2]+1,aSize[1]]);this.Ab9.H([this.
Ab8.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KS.H(this.Ab9.M);this.Ea.H([this.
Ab9.M[2]-1,0,this.Ab9.M[2]+1,aSize[1]]);this.Ab_.H([this.Ab9.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KT.H(this.Ab_.M);this.Lr.H([this.Ab_.M[2]-1,0,this.Ab_.
M[2]+1,aSize[1]]);this.Jq.H([this.Ab_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jq.De(this.V.AQ);this.Ab8.L(A._GetAutoObject(A.acj.
Assessment).Ql(this.AJl));this.Ab9.L(A._GetAutoObject(A.acj.Assessment).Ql(this.
AJm));this.Ab_.L(A._GetAutoObject(A.acj.Assessment).Ql(this.AJn));this.Acv.L(A._GetAutoObject(
A.acj.Assessment).Xt(this.AJl));this.KS.L(A._GetAutoObject(A.acj.Assessment).Xt(
this.AJm));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xt(this.AJn));this.Acv.Z(
!this.AJl);this.KS.Z(!this.AJm);this.KT.Z(!this.AJn);this.Jq.A9o(this.Atv.Get(3)
);this.Jq.A9q(this.Atv.Get(2));this.Jq.A9p(this.Atv.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hq=Ad;if(!!this.AX){var Iy=this.AX.CF(Ad,0);var Mf=this.AX.
CF(Ad,1);this.T(Mf.toFixed());A._GetAutoObject(A.Device.Device).SN(Ad);this.AJl=
A._GetAutoObject(A.Device.Helper).A1R(A._GetAutoObject(A.Device.Device).Bt,Iy,0);
this.AJm=A._GetAutoObject(A.Device.Helper).A1R(A._GetAutoObject(A.Device.Device).
Bt,Iy,-1);this.AJn=A._GetAutoObject(A.Device.Helper).A1R(A._GetAutoObject(A.Device.
Device).Bt,Iy,-2);this.Atv=A._GetAutoObject(A.Device.Helper).A6g(A._GetAutoObject(
A.Device.Device).Bt,Iy,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Ab8={I:this},0);A.acg.AK._Init.call(this.Ab9={I:
this},0);A.acg.AK._Init.call(this.Ab_={I:this},0);C.Jq._Init.call(this.Jq={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.Lr={I:this
},0);A.acg.Text._Init.call(this.Acv={I:this},0);A.acg.Text._Init.call(this.KS={I:
this},0);A.acg.Text._Init.call(this.KT={I:this},0);this.__proto__=C.AM1;this.AP.
L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lr.L(A.jb.Bc);this.Acv.R(Aoo
);this.KS.R(Aoo);this.KT.R(Aoo);this.J(this.Ab8,0);this.J(this.Ab9,0);this.J(this.
Ab_,0);this.J(this.Jq,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Lr,0);this.J(this.Acv,0);this.J(this.KS,0);this.J(this.KT,0);this.Acv.S(A.
aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.Atv=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ab8._Done();this.Ab9._Done();this.Ab_._Done();this.Jq._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Lr._Done();this.Acv._Done();this.KS.
_Done();this.KT._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Ab8._ReInit();this.Ab9._ReInit();this.Ab_._ReInit();this.Jq._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Lr._ReInit();this.Acv.
_ReInit();this.KS._ReInit();this.KT._ReInit();this.Acv.S(A.aaL(A.fl.Af));this.KS.
S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Atv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmQ={H6:null,Af1:false,Bl:function(aSize){var
B;this.H6.H([(aSize[0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H6.M[0]-10,40]);C.TB.Bl.call(this,aSize);},Ai:function(Ae){C.TB.Ai.call(
this,Ae);if(this.Af1)this.H6.Cu(1);else this.H6.Cu(0);},J$:function(G){if(this.Af1
)C.TB.J$.call(this,G);},J6:function(G){if(this.Af1)C.TB.J6.call(this,G);},Tn:function(
AI){C.TB.Tn.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af1=true;this.Zt(
true);}else{this.H(A.abI(this.M,40));this.Af1=false;this.Zt(false);}},_Init:function(
aArg){C.TB._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.AmQ;this.V.A5(0x11);this.H6.H(AHD);this.H6.Cu(0);this.J(this.H6,0);this.V.Ct(A.
aaL(A.fl.Bi));this.H6.Aw(A.aaL(A.ach.AqH));},_Done:function(){this.__proto__=C.TB;
this.H6._Done();C.TB._Done.call(this);},_ReInit:function(){C.TB._ReInit.call(this
);this.H6._ReInit();this.V.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TB._Mark.
call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AFZ={_Init:function(aArg){C.Axc._Init.call(this,aArg);this.__proto__=C.AFZ;}
,_className:"Application::OptionsOverlaySeparator"};C.AkB={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axc._Init.call(this,aArg);this.__proto__=C.AkB;},_className:"Application::OptionsOverlayNode"
};C.Zv={AR:null,_Init:function(aArg){C.AkB._Init.call(this,aArg);this.__proto__=
C.Zv;},_Mark:function(D){var B;C.AkB._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANv={Ai:function(Ae){C.OU.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(
this.Hj){FQ=A.jb.Text;GW=A.jb.Bm;}this.Background.L(FQ);this.V.L(GW);},_Init:function(
aArg){C.OU._Init.call(this,aArg);this.__proto__=C.ANv;},_className:"Application::DarkThemeTextItem"
};C.OU={Background:null,BU:null,V:null,Aqo:0,Hj:false,Init:function(aArg){},Bl:function(
aSize){C.Hg.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hg.Ai.call(this,Ae);this.BU.L(this.Aqo);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bh:function(E){if(this.Hj===E)return;this.Hj=E;this.Am();
},ArD:function(E){if(this.Aqo===E)return;this.Aqo=E;this.Am();},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OU;this.H(BD);this.Background.H(AIi);this.BU.H(BD);this.BU.Ng(2);this.BU.L(A.jb.
Re);this.V.H(AYG);this.Aqo=A.jb.Re;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.
fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hg._Done.call(this);},_ReInit:function(){C.Hg.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APy={Er:null,IM:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Er={
I:this},0);A.acg.Text._Init.call(this.IM={I:this},0);this.__proto__=C.APy;this.H(
O2);this.Background.H(O2);this.Er.H(AIj);this.Er.R(A.aaR(A.acf.GM));this.Er.A5(0x11
);this.Er.L(A.jb.Text);this.IM.AZ(0x3F);this.IM.H(Ayo);this.IM.Hl(5);this.IM.A5(
0x14);this.IM.R(A.aaR(A.acf.AGI));this.IM.L(A.jb.Text);this.J(this.Er,0);this.J(
this.IM,0);this.Er.S(A.aaL(A.fl.Af));this.IM.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Er._Done();this.IM._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.IM._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.IM.R(A.aaR(A.acf.AGI));this.Er.S(A.aaL(A.fl.Af));this.IM.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sm:null,Sn:null,Aey:null,Ag1:null,QI:null
,KR:0,LastTemperature:0,Aqu:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sm.Aw(A.aaL(A.ach.Avv));this.Sn.Aw(A.aaL(A.ach.Avv));}break;case 2:{this.Sm.Aw(A.
aaL(A.ach.Avy));this.Sn.Aw(A.aaL(A.ach.Avy));}break;default:{this.Sm.Aw(A.aaL(A.
ach.Aet));this.Sn.Aw(A.aaL(A.ach.Aet));}}this.Sm.L(A._GetAutoObject(A.acj.Assessment
).Ql(this.Aqu));var ApH;if(this.IsWatch)ApH=A.aaL(A.ach.AQv);else if(this.IsFever
){ApH=A.aaL(A.ach.AQu);switch(A._GetAutoObject(A.Device.Converter).Ajh(this.LastTemperature
,this.AnimalType)){case 3:this.QI.L(A.jb.Gi);break;case 2:this.QI.L(A.jb.H8);break;
case 1:this.QI.L(A.jb.E1);break;case 0:this.QI.L(A.jb.Afp);break;default:;}}else
if(this.IsAlarm){ApH=A.aaL(A.ach.AQt);if(!this.Aqu||(this.Aqu===5))this.QI.L(A.jb.
Gi);else this.QI.L(0xFF000000);}else ApH=null;this.Aey.Aw(ApH);this.Ag1.Aw(ApH);
this.QI.Aw(ApH);if(A._GetAutoObject(A.acj.Assessment).Ql(this.Aqu)===A.jb.E1)this.
Sn.L(this.KR);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AEW:function(E){if(this.Aqu===E)return;this.Aqu=E;this.Am();},De:function(
E){if(this.KR===E)return;this.KR=E;this.Am();},Ae2:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uj:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae4:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E5:function(){this.EB(0);this.AEW(0);this.AeY(false);this.Uj(false
);this.Ae2(false);this.Ae4(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sm={I:this},0);A.acg.Ap._Init.call(
this.Sn={I:this},0);A.acg.Ap._Init.call(this.Aey={I:this},0);A.acg.Ap._Init.call(
this.Ag1={I:this},0);A.acg.Ap._Init.call(this.QI={I:this},0);this.__proto__=C.DS;
this.H(Ala);this.Sm.AZ(0x3F);this.Sm.H(Ala);this.Sm.L(A.jb.CJ);this.Sm.A5(0x12);
this.Sm.Cu(0);this.Sn.AZ(0x3F);this.Sn.H(Ala);this.Sn.L(0xFF000000);this.Sn.A5(0x12
);this.Sn.Cu(1);this.Aey.AZ(0x3F);this.Aey.H(Ala);this.Aey.L(0xFF000000);this.Aey.
Cu(0);this.Ag1.AZ(0x3F);this.Ag1.H(Ala);this.Ag1.Cu(1);this.QI.AZ(0x3F);this.QI.
H(Ala);this.QI.L(A.jb.CS);this.QI.Cu(2);this.KR=A.jb.Text;this.J(this.Sm,0);this.
J(this.Sn,0);this.J(this.Aey,0);this.J(this.Ag1,0);this.J(this.QI,0);this.Sm.Aw(
A.aaL(A.ach.Aet));this.Sn.Aw(A.aaL(A.ach.Aet));},_Done:function(){this.__proto__=
A.Core.P;this.Sm._Done();this.Sn._Done();this.Aey._Done();this.Ag1._Done();this.
QI._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sm._ReInit();this.Sn._ReInit();this.Aey._ReInit();this.Ag1._ReInit();
this.QI._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AMY={Ce:function(Ad){C.Ajw.Ce.call(this,Ad);if(!!this.AX){var Bzj=this.AX.H2(
Ad,12);var BxD=this.AX.Si(Ad,15);this.Aba.R(A._GetAutoObject(A.Device.Helper).L9(
BxD,A._GetAutoObject(A.Device.Helper).Du()).toFixed());this.So.Z(Bzj);this.Am();
}},_Init:function(aArg){C.Ajw._Init.call(this,aArg);this.__proto__=C.AMY;},_className:
"Application::CalfListAlarmItem"};C.ADc={D0:null,Mr:null,_Init:function(aArg){C.
TR._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mr={I:this},0);this.__proto__=C.ADc;this.D0.H(Aon);this.D0.KQ(true);this.
D0.R(A.aaR(A.acf.A5s));this.D0.L(A.jb.Text);this.Mr.H(AIk);this.Mr.I9(false);this.
Mr.L(A.jb.Text);this.Mr.A5(0x12);this.J(this.D0,-2);this.J(this.Mr,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mr.Aw(A.aaL(A.ach.ADD));},_Done:function(){this.__proto__=C.
TR;this.D0._Done();this.Mr._Done();C.TR._Done.call(this);},_ReInit:function(){C.
TR._ReInit.call(this);this.D0._ReInit();this.Mr._ReInit();this.D0.R(A.aaR(A.acf.
A5s));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TR._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Ki={Background:null,BU:
null,ACE:0,ABT:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACE);this.BU.L(this.ABT);},Awy:function(E){if(this.ACE===E)return;this.ACE=E;this.
Am();},AEO:function(E){if(this.ABT===E)return;this.ABT=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Ki;this.H(Aop);this.
Background.AZ(0x3C);this.Background.H(Aop);this.Background.Cu(1);this.BU.AZ(0x3C
);this.BU.H(Aop);this.ACE=A.jb.E1;this.ABT=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Aw(A.aaL(A.ach.Ki));this.BU.Aw(A.aaL(A.ach.Ki));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.Amy={Q:null,Pn:
null,A6W:false,Bl:function(aSize){C.Mn.Bl.call(this,aSize);this.V.H([].concat(this.
Pn.M[2]-this.V.Text.Ja,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mn.Ai.call(this
,Ae);this.Pn.L(this.V.AQ);},AwD:function(E){if(this.A6W===E)return;this.A6W=E;if(
E)this.Pn.R(AYH);else this.Pn.R(AIl);},Kd:function(G){var F;if(!!this.Q)this.AwD((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)
A.pe([this,this.Kd],this);},_Init:function(aArg){C.Mn._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pn={I:this},0);this.__proto__=C.Amy;this.Pn.AZ(0x34);this.Pn.
H(UQ);this.Pn.R(AIl);this.J(this.Pn,0);this.Pn.S(A.aaL(A.fl.AOr));},_Done:function(
){this.__proto__=C.Mn;this.Pn._Done();C.Mn._Done.call(this);},_ReInit:function(){
C.Mn._ReInit.call(this);this.Pn._ReInit();},_Mark:function(D){var B;C.Mn._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOQ={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdU(4));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AOQ;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dt:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BS(aIndex);},DZ:function(A9){return A9;},H3:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APz={Gn:null,Lj:null,YM:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).AlC());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gn={I:this},0);A.acg.Text._Init.call(this.Lj={I:this},0);A.
acg.Text._Init.call(this.YM={I:this},0);this.__proto__=C.APz;this.Background.L(A.
jb.Text);this.Gn.H(AIm);this.Gn.A5(0x11);this.Gn.R(A.aaR(A.acf.Date));this.Gn.L(
A.jb.Bm);this.Lj.H(AYI);this.Lj.A5(0x12);this.Lj.L(A.jb.Bm);this.YM.H(AYJ);this.
YM.A5(0x12);this.YM.R(A.aaR(A.acf.Bs));this.YM.L(A.jb.Bm);this.J(this.Gn,0);this.
J(this.Lj,0);this.J(this.YM,0);this.Gn.S(A.aaL(A.fl.Af));this.Lj.S(A.aaL(A.fl.Af
));this.YM.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gn._Done();this.Lj._Done();this.YM._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gn._ReInit();this.Lj._ReInit();this.YM._ReInit(
);this.Gn.R(A.aaR(A.acf.Date));this.YM.R(A.aaR(A.acf.Bs));this.Gn.S(A.aaL(A.fl.Af
));this.Lj.S(A.aaL(A.fl.Af));this.YM.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tv={Ld:null,AjK:false,Init:function(
aArg){var B;A.zX([this,this.Ba5],[B=A._GetAutoObject(A.Device.Device),B.AEn,B.AIE
],0);this.AGB(this);A.pe([this,this.AIP],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Om(this);break;case 7:this.MU(
this);break;default:D5.NH=true;}},CC:function(G){var B;if(!!this.Ld)this.Ld.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Ld)this.Ld.E4(this);C.AB.
E4.call(this,G);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},AGB:function(G){
var B;if(!!this.Ld){this.Ld.E4(this);this.HN(this.Ld);}if(this.AjK)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Ld=A._NewObject(C.AMg,0);break;case 1:this.Ld=A.
_NewObject(C.AMh,0);break;case 3:this.Ld=A._NewObject(C.AMf,0);break;case 2:this.
Ld=A._NewObject(C.AMi,0);break;default:throw new Error(AIn);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Ld=A._NewObject(C.AMj,0);break;case 1:this.Ld=A.
_NewObject(C.AMs,0);break;case 3:this.Ld=A._NewObject(C.AMm,0);break;case 2:this.
Ld=A._NewObject(C.AMx,0);break;default:throw new Error(AIn);}this.HO(this);this.
J(this.Ld,0);this.Ld.H(Fe);this.Ld.Zq([this,this.A0b]);this.Ld.CC(this);this.Bb(
this.Ld);},Ba5:function(s){this.AGB(s);},Bm$:function(G){A._GetAutoObject(A.Device.
Device).AeS(0);},ATy:function(G){A._GetAutoObject(A.Device.Device).AeS(1);},ATx:
function(G){A._GetAutoObject(A.Device.Device).AeS(3);},ATz:function(G){A._GetAutoObject(
A.Device.Device).AeS(2);},HO:function(G){this.N.C1(A.aaL(A.ach.E2));this.N.Hx(A.
jV);this.N.CE=[this,this.Anh];this.N.AE2(A.aaL(A.fl.Ak));},AIP:function(s){this.
HO(s);},BlX:function(E){if(this.AjK===E)return;this.AjK=E;A.pe([this,this.Ba5],this
);},A_m:function(G){this.BlX(!this.AjK);},Bnc:function(G){A._GetAutoObject(A.Device.
Device).A6(31,true,A.jV,0,null);},MU:function(G){},BFU:function(s){this.MU(s);},
Om:function(G){},BFT:function(s){this.Om(s);},Ben:function(G){var FP=A._GetAutoObject(
A.Device.Device).D9;FP=FP+1;if(FP>=4)FP=0;A._GetAutoObject(A.Device.Device).AeS(
FP);},BAc:function(G){var FP=A._GetAutoObject(A.Device.Device).D9;FP=FP-1;if(FP<
0)FP=3;A._GetAutoObject(A.Device.Device).AeS(FP);},Af6:function(G){},A0b:function(
s){this.Af6(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tv;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.OO(true);this.Dq(
C.APo);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Ld)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dm:null,CC:function(G){},AID:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},Ayy:function(s){
this.E4(s);},Zq:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dm.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Dm={I:this},0);this.__proto__=
C.D9;this.H(UU);this.AttrSet.A9f(A.jb.Gi);this.AttrSet.A9e(A.jb.H8);this.AttrSet.
Ahj(A.jb.Text);this.Dm.Filter=1;this.AttrSet.Ahm(A.aaL(A.fl.Ak));this.AttrSet.A9b(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dm._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dm._ReInit();this.AttrSet.Ahm(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMj={RQ:
null,AaS:null,Tu:null,Tt:null,RU:null,Qz:null,RW:null,RS:null,RT:null,RR:null,CP:
function(){var B;this.RQ.Ce(this);this.AaS.Ce(this);this.Tu.Ce(this);this.Tt.Ce(
this);this.RU.Ce(this);this.Qz.Ce(this);this.RW.Ce(this);this.RS.Ce(this);this.RT.
Ce(this);this.RR.Ce(this);},GH:function(G){C.RX.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RQ.Z(true);this.AaS.Z(false);
this.RS.Z(false);this.RT.Z(false);this.RR.Z(false);this.RU.Z(true);this.Qz.Z(true
);this.RW.Z(true);}break;case 1:{this.RQ.Z(false);this.AaS.Z(true);this.RS.Z(true
);this.RT.Z(true);this.RR.Z(true);this.RU.Z(false);this.Qz.Z(false);this.RW.Z(false
);}break;default:A.ab5("%s%e",Ak8,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RX._Init.call(this,aArg);C.
RQ._Init.call(this.RQ={I:this},0);C.AMe._Init.call(this.AaS={I:this},0);C.Tu._Init.
call(this.Tu={I:this},0);C.Tt._Init.call(this.Tt={I:this},0);C.RU._Init.call(this.
RU={I:this},0);C.Qz._Init.call(this.Qz={I:this},0);C.RW._Init.call(this.RW={I:this
},0);C.RS._Init.call(this.RS={I:this},0);C.RT._Init.call(this.RT={I:this},0);C.RR.
_Init.call(this.RR={I:this},0);this.__proto__=C.AMj;this.RQ.H(BD);this.RQ.Aj(true
);this.RQ.Bh(false);this.AaS.H(IT);this.AaS.Aj(true);this.AaS.Bh(false);this.Tu.
H(P9);this.Tu.Aj(true);this.Tu.Bh(true);this.Tt.H(Z$);this.Tt.Aj(true);this.Tt.Bh(
false);this.RU.H(Ak_);this.RU.Aj(true);this.RU.Bh(true);this.Qz.H(Aok);this.Qz.Aj(
true);this.Qz.Bh(false);this.RW.H(AsX);this.RW.Aj(true);this.RW.Bh(true);this.RS.
H(W$);this.RS.Aj(true);this.RS.Bh(true);this.RT.H(AYK);this.RT.Aj(true);this.RT.
Bh(false);this.RR.H(AYL);this.RR.Aj(true);this.RR.Bh(true);this.J(this.RQ,0);this.
J(this.AaS,0);this.J(this.Tu,0);this.J(this.Tt,0);this.J(this.RU,0);this.J(this.
Qz,0);this.J(this.RW,0);this.J(this.RS,0);this.J(this.RT,0);this.J(this.RR,0);},
_Done:function(){this.__proto__=C.RX;this.RQ._Done();this.AaS._Done();this.Tu._Done(
);this.Tt._Done();this.RU._Done();this.Qz._Done();this.RW._Done();this.RS._Done(
);this.RT._Done();this.RR._Done();C.RX._Done.call(this);},_ReInit:function(){C.RX.
_ReInit.call(this);this.RQ._ReInit();this.AaS._ReInit();this.Tu._ReInit();this.Tt.
_ReInit();this.RU._ReInit();this.Qz._ReInit();this.RW._ReInit();this.RS._ReInit(
);this.RT._ReInit();this.RR._ReInit();this.CP();},_Mark:function(D){var B;C.RX._Mark.
call(this,D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.AMx={AkN:function(L2){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CV(HV);var Ac4=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4);L2.Bk(Fw);},ADQ:function(){if(!A._GetAutoObject(
A.Device.Device).Bt)return false;var Pf=A._GetAutoObject(A.Device.Device).Bt.B9(
);if(Pf<2)return false;var BBD=A._GetAutoObject(A.Device.Device).Bt.Hu(0,6);var BBE=
A._GetAutoObject(A.Device.Device).Bt.Hu(Pf-1,6);var A1G=A._NewObject(A.Core.Bs,0
);A1G.Initialize(BBD);var A3K=A._NewObject(A.Core.Bs,0);A3K.Initialize(BBE);if((
A1G.AbV()!==A3K.AbV())||(A1G.Year!==A3K.Year))return true;else return false;},_Init:
function(aArg){C.AaU._Init.call(this,aArg);this.__proto__=C.AMx;this.AS3(C.AG$);
this.AS4(C.ADi);this.AST(C.Qz);this.ArJ(A.aaR(A.acf.AVt));this.Dz(A.aaR(A.acf.Akf
));},_ReInit:function(){C.AaU._ReInit.call(this);this.ArJ(A.aaR(A.acf.AVt));this.
Dz(A.aaR(A.acf.Akf));},_className:"Application::AnimalWeights"};C.AMs={AkN:function(
L2){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.
Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fw.CV(HV);var AA_=A._NewObject(A.Device.Int32FilterCriterion,0);AA_.Initialize(
7,2,0,true);Fw.CV(AA_);L2.Bk(Fw);},ADQ:function(){return A._GetAutoObject(A.Device.
Device).Bt.B9()>0;},_Init:function(aArg){C.AaU._Init.call(this,aArg);this.__proto__=
C.AMs;this.AS3(C.AUQ);this.AS4(C.APz);this.AST(C.Tu);this.ArJ(A.aaR(A.acf.A7h));
this.Dz(A.aaR(A.acf.Arl));},_ReInit:function(){C.AaU._ReInit.call(this);this.ArJ(
A.aaR(A.acf.A7h));this.Dz(A.aaR(A.acf.Arl));},_className:"Application::AnimalTemperatures"
};C.ATX={Vy:null,Vz:null,XT:null,AgC:null,Kw:null,AP:null,A_:null,Ea:null,Lr:null
,AnL:null,KS:null,KT:null,ZJ:null,ZK:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kw.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vy.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
Vy.M[2]-1,0,this.Vy.M[2]+1,aSize[1]]);this.Vz.H([this.Vy.M[2],0,this.Vy.M[2]+22,
aSize[1]]);this.Lr.H([this.Vz.M[2]-1,0,this.Vz.M[2]+1,aSize[1]]);this.XT.H([this.
Vz.M[2],0,this.Vz.M[2]+22,aSize[1]]);this.AnL.H([this.XT.M[2]-1,0,this.XT.M[2]+1
,aSize[1]]);this.AgC.H([this.XT.M[2],0,aSize[0],aSize[1]]);this.KS.H(this.Vy.M);
this.KT.H(this.Vz.M);this.ZJ.H(this.XT.M);this.ZK.H(this.AgC.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kw.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){var Alt=this.AX.Hu(Ad,6);var A0Y=this.AX.I4(Ad,3);var A1C=
this.AX.I4(Ad,2);var A1B=this.AX.I4(Ad,5);var A3y=this.AX.I4(Ad,4);this.T(A._GetAutoObject(
A.acj.KJ).ACL(Alt));this.Kw.R(A._GetAutoObject(A.acj.KJ).A6a(Alt));this.Vy.L(A._GetAutoObject(
A.acj.Assessment).Ql(A0Y));this.Vz.L(A._GetAutoObject(A.acj.Assessment).Ql(A1C));
this.XT.L(A._GetAutoObject(A.acj.Assessment).Ql(A1B));this.AgC.L(A._GetAutoObject(
A.acj.Assessment).Ql(A3y));this.KS.L(A._GetAutoObject(A.acj.Assessment).Xt(A0Y));
this.KT.L(A._GetAutoObject(A.acj.Assessment).Xt(A1C));this.ZJ.L(A._GetAutoObject(
A.acj.Assessment).Xt(A1B));this.ZK.L(A._GetAutoObject(A.acj.Assessment).Xt(A3y));
this.KS.Z(A0Y===5);this.KT.Z(A1C===5);this.ZJ.Z(A1B===5);this.ZK.Z(A3y===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.
Vy={I:this},0);A.acg.AK._Init.call(this.Vz={I:this},0);A.acg.AK._Init.call(this.
XT={I:this},0);A.acg.AK._Init.call(this.AgC={I:this},0);A.acg.Text._Init.call(this.
Kw={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Lr={I:this},0);A.acg.AK._Init.call(this.AnL={I:this},0);A.acg.Text._Init.call(this.
KS={I:this},0);A.acg.Text._Init.call(this.KT={I:this},0);A.acg.Text._Init.call(this.
ZJ={I:this},0);A.acg.Text._Init.call(this.ZK={I:this},0);this.__proto__=C.ATX;this.
V.H(O3);this.Vy.H(AYM);this.Vz.H(AYN);this.XT.H(AYO);this.AgC.H(AYP);this.Kw.R(Rk
);this.Kw.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.AnL.L(A.jb.Bc);this.KS.H(AYQ);this.KS.R(Rm);this.KT.H(AYR
);this.KT.R(Rm);this.ZJ.H(AYS);this.ZJ.R(Rm);this.ZK.H(AYT);this.ZK.R(Rm);this.J(
this.Vy,0);this.J(this.Vz,0);this.J(this.XT,0);this.J(this.AgC,0);this.J(this.Kw
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lr,0);this.
J(this.AnL,0);this.J(this.KS,0);this.J(this.KT,0);this.J(this.ZJ,0);this.J(this.
ZK,0);this.Kw.S(A.aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af
));this.ZJ.S(A.aaL(A.fl.Af));this.ZK.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vy._Done();this.Vz._Done();this.XT._Done();this.AgC._Done(
);this.Kw._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lr._Done(
);this.AnL._Done();this.KS._Done();this.KT._Done();this.ZJ._Done();this.ZK._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vy._ReInit(
);this.Vz._ReInit();this.XT._ReInit();this.AgC._ReInit();this.Kw._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Lr._ReInit();this.AnL._ReInit(
);this.KS._ReInit();this.KT._ReInit();this.ZJ._ReInit();this.ZK._ReInit();this.Kw.
S(A.aaL(A.fl.Af));this.KS.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.ZJ.S(
A.aaL(A.fl.Af));this.ZK.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APx={Gn:null,YS:null,YO:null,YP:null,YQ:null,YR:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gn={I:this},0);A.acg.Text._Init.call(this.YS={I:this},0);A.acg.Text._Init.call(this.
YO={I:this},0);A.acg.Text._Init.call(this.YP={I:this},0);A.acg.Text._Init.call(this.
YQ={I:this},0);A.acg.Text._Init.call(this.YR={I:this},0);this.__proto__=C.APx;this.
Background.L(A.jb.Text);this.Gn.H(AIm);this.Gn.A5(0x11);this.Gn.R(A.aaR(A.acf.Date
));this.Gn.L(A.jb.Bm);this.YS.H(AIe);this.YS.A5(0x12);this.YS.R(A.aaR(A.acf.Bs));
this.YS.L(A.jb.Bm);this.YO.H(AYU);this.YO.A5(0x12);this.YO.R(A.aaR(A.acf.ATZ));this.
YO.L(A.jb.Bm);this.YP.H(AYV);this.YP.A5(0x12);this.YP.R(A.aaR(A.acf.AT0));this.YP.
L(A.jb.Bm);this.YQ.H(AYW);this.YQ.A5(0x12);this.YQ.R(A.aaR(A.acf.AOn));this.YQ.L(
A.jb.Bm);this.YR.H(Aoq);this.YR.A5(0x12);this.YR.R(A.aaR(A.acf.ANm));this.YR.L(A.
jb.Bm);this.J(this.Gn,0);this.J(this.YS,0);this.J(this.YO,0);this.J(this.YP,0);this.
J(this.YQ,0);this.J(this.YR,0);this.Gn.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(A.fl.Af
));this.YO.S(A.aaL(A.fl.Af));this.YP.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));
this.YR.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gn._Done();
this.YS._Done();this.YO._Done();this.YP._Done();this.YQ._Done();this.YR._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gn._ReInit(
);this.YS._ReInit();this.YO._ReInit();this.YP._ReInit();this.YQ._ReInit();this.YR.
_ReInit();this.Gn.R(A.aaR(A.acf.Date));this.YS.R(A.aaR(A.acf.Bs));this.YO.R(A.aaR(
A.acf.ATZ));this.YP.R(A.aaR(A.acf.AT0));this.YQ.R(A.aaR(A.acf.AOn));this.YR.R(A.
aaR(A.acf.ANm));this.Gn.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(A.fl.Af));this.YO.S(A.
aaL(A.fl.Af));this.YP.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMm={AkN:function(L2){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CV(HV);var
AAR=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAR.Initialize(3,5,0,true
);Fw.CV(AAR);L2.Bk(Fw);},ADQ:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.AaU._Init.call(this,aArg);this.__proto__=C.AMm;this.AS3(C.ATX);this.AS4(
C.APx);this.AST(C.Tt);this.ArJ(A.aaR(A.acf.Axh));this.Dz(A.aaR(A.acf.Ang));},_ReInit:
function(){C.AaU._ReInit.call(this);this.ArJ(A.aaR(A.acf.Axh));this.Dz(A.aaR(A.acf.
Ang));},_className:"Application::AnimalRatings"};C.IE={B6:null,Y:null,V:null,Un:
5,T:function(E){C.I1.T.call(this,E);this.V.R(E);},De:function(E){C.I1.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuJ:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0]))this.S(A.aaL(A.fl.Ik));},Kr:function(
E){if(this.Un===E)return;this.Un=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAL:function(G){A.pe([this,this.AuJ],this);},_Init:function(aArg){C.I1._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IE;this.Y.AZ(0x3F);this.Y.H(AIo);this.Y.A96(5);this.
Y.JQ(3);this.V.AZ(0x34);this.V.H(Aac);this.V.I9(true);this.V.A5(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAL];this.V.S(A.aaL(A.fl.Km));},_Done:function(){this.__proto__=C.I1;this.Y._Done(
);this.V._Done();C.I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Km));},_Mark:function(D){
var B;C.I1._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RQ={AfM:0,Ai:function(Ae){C.Fx.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RM));if(this.AfM>=0)this.Kt((this.AfM.toFixed(
)+CQ)+A.aaR(A.acf.Kj));else this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfM=-1;
else this.AfM=A._GetAutoObject(A.Device.Helper).W.RM();this.Am();},_Init:function(
aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RQ;},_className:"Application::AnimalInfoItemAge"
};C.RU={A4c:0,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afq));if(
this.A4c>0)this.Kt((A._GetAutoObject(A.Device.Converter).Ak4(this.A4c)+CQ)+A._GetAutoObject(
A.acj.DU).AfZ());else this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.Ce.call(
this,G);this.A4c=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RU;},_className:
"Application::AnimalInfoItemWeight"};C.Tu={Y:null,Eh:null,Ex:null,Fd:null,PU:null
,Fc:null,PV:null,Ajc:0,Pe:0,CP:function(){this.Am();},Ai:function(Ae){C.JI.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bhp));this.Fd.R(this.Ajc.toFixed());this.Fc.R(this.Pe.
toFixed());if(!!this.Ajc||!!this.Pe)this.PV.R(AYX+(this.Ajc+this.Pe).toFixed());
else this.PV.R(A.aaR(A.acf.AR0));},Ce:function(G){C.JI.Ce.call(this,G);var AkU;AkU=
A._GetAutoObject(A.Device.Helper).Bih(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajc=AkU.Get(2);this.Pe=AkU.Get(1);this.Am();},De:
function(E){C.JI.De.call(this,E);this.PU.L(E);this.PV.L(E);},AsG:function(G){if(
!!this.Ajc||!!this.Pe){this.Fd.Z(true);this.PU.Z(true);this.Fc.Z(true);}else{this.
Fd.Z(false);this.PU.Z(false);this.Fc.Z(false);}this.Eh.H(this.Fd.M);this.Eh.Z(this.
Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo());},AuJ:function(G){var B;var
Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;if(((B=Ny.Db(0x1))[2]-B[0])>((
B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.Fd.S(
A.aaL(A.fl.Ak));this.PV.S(A.aaL(A.fl.Ak));}},AAL:function(G){A.pe([this,this.AuJ
],this);},_Init:function(aArg){C.JI._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
PU={I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
PV={I:this},0);this.__proto__=C.Tu;this.Y.H(Ayp);this.Y.BmU(0);this.Y.JQ(3);this.
Eh.H(AYY);this.Eh.L(A.jb.H8);this.Ex.H(Aym);this.Ex.L(A.jb.Gi);this.Fd.AZ(0x34);
this.Fd.H(Aac);this.Fd.Hl(2);this.Fd.I9(true);this.Fd.R(UW);this.Fd.L(A.jb.Text);
this.Fd.Aj(true);this.PU.AZ(0x34);this.PU.H(Aac);this.PU.I9(true);this.PU.R(AH7);
this.PU.L(A.jb.Text);this.PU.Aj(true);this.Fc.AZ(0x34);this.Fc.H(Aac);this.Fc.Hl(
2);this.Fc.I9(true);this.Fc.R(UW);this.Fc.L(A.jb.Bm);this.Fc.Aj(true);this.PV.AZ(
0x34);this.PV.H(Aac);this.PV.I9(true);this.PV.R(Rk);this.PV.L(A.jb.Text);this.PV.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.Fd,0);
this.J(this.PU,0);this.J(this.Fc,0);this.J(this.PV,0);this.Y.El=[this,this.AAL];
this.Fd.Q3([this,this.AsG]);this.Fd.S(A.aaL(A.fl.Af));this.PU.S(A.aaL(A.fl.Af));
this.Fc.Q3([this,this.AsG]);this.Fc.S(A.aaL(A.fl.Af));this.PV.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JI;this.Y._Done();this.Eh._Done();this.Ex._Done(
);this.Fd._Done();this.PU._Done();this.Fc._Done();this.PV._Done();C.JI._Done.call(
this);},_ReInit:function(){C.JI._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ex._ReInit();this.Fd._ReInit();this.PU._ReInit();this.Fc._ReInit();this.PV.
_ReInit();this.Fd.S(A.aaL(A.fl.Af));this.PU.S(A.aaL(A.fl.Af));this.Fc.S(A.aaL(A.
fl.Af));this.PV.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JI._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qz={FV:0,Ib:0
,A16:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(AYZ+A.aaR(A.acf.AG6));if(
this.A16){this.Kt((A._GetAutoObject(A.Device.Converter).S5(this.FV,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aar());this.Background.L(A._GetAutoObject(A.acj.DU).AzJ(
this.FV,this.Ib));this.De(A._GetAutoObject(A.acj.DU).AzL(this.FV,this.Ib));}else{
this.Kt(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.De(A.jb.Text);}},Ce:
function(G){C.Fx.Ce.call(this,G);var LC=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LC){this.A16=true;this.FV=A._GetAutoObject(A.acj.DU).Alq(LC,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A16=false;this.FV=0;}this.Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.Qz;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tt={Y:null,FX:null,Eh:
null,Ex:null,MF:null,Fd:null,Fc:null,OW:null,Aat:0,Ajc:0,Pe:0,CP:function(){this.
Am();},Ai:function(Ae){C.JI.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axh));this.MF.R(
this.Aat.toFixed());this.Fd.R(this.Ajc.toFixed());this.Fc.R(this.Pe.toFixed());}
,Ce:function(G){C.JI.Ce.call(this,G);var AkU;AkU=A._GetAutoObject(A.Device.Helper
).A6g(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aat=AkU.Get(3);this.Ajc=AkU.Get(2);this.Pe=AkU.Get(1);this.Am();},AsG:
function(G){if((!!this.Aat||!!this.Ajc)||!!this.Pe){this.MF.Z(true);this.Fd.Z(true
);this.Fc.Z(true);this.OW.Z(false);}else{this.MF.Z(false);this.Fd.Z(false);this.
Fc.Z(false);this.OW.Z(true);}this.FX.H(this.MF.M);this.FX.Z(this.MF.Fo());this.Eh.
H(this.Fd.M);this.Eh.Z(this.Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo()
);},AuJ:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.Fd.
S(A.aaL(A.fl.Ak));this.MF.S(A.aaL(A.fl.Ak));}},AAL:function(G){A.pe([this,this.AuJ
],this);},_Init:function(aArg){C.JI._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FX={I:this},0);A.acg.AK._Init.call(this.Eh={
I:this},0);A.acg.AK._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.MF={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
Fc={I:this},0);A.acg.Text._Init.call(this.OW={I:this},0);this.__proto__=C.Tt;this.
Y.AZ(0x3F);this.Y.H(Ayp);this.Y.A96(5);this.Y.JQ(3);this.FX.H(AY0);this.FX.L(A.jb.
E1);this.Eh.H(AY1);this.Eh.L(A.jb.H8);this.Ex.H(AIp);this.Ex.L(A.jb.Gi);this.MF.
AZ(0x3C);this.MF.H(Aac);this.MF.Hl(2);this.MF.I9(true);this.MF.R(UW);this.MF.L(A.
jb.Text);this.MF.Aj(true);this.Fd.AZ(0x3C);this.Fd.H(Aac);this.Fd.Hl(2);this.Fd.
I9(true);this.Fd.R(UW);this.Fd.L(A.jb.Text);this.Fd.Aj(true);this.Fc.AZ(0x3C);this.
Fc.H(Aac);this.Fc.Hl(2);this.Fc.I9(true);this.Fc.R(UW);this.Fc.L(A.jb.Bm);this.Fc.
Aj(true);this.OW.AZ(0x34);this.OW.H(Aac);this.OW.I9(true);this.OW.A5(0x11);this.
OW.R(A.aaR(A.acf.AR0));this.OW.L(A.jb.Text);this.OW.Aj(true);this.OW.Z(false);this.
J(this.Y,0);this.J(this.FX,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.MF
,0);this.J(this.Fd,0);this.J(this.Fc,0);this.J(this.OW,0);this.Y.El=[this,this.AAL
];this.MF.Q3([this,this.AsG]);this.MF.S(A.aaL(A.fl.Af));this.Fd.Q3([this,this.AsG
]);this.Fd.S(A.aaL(A.fl.Af));this.Fc.Q3([this,this.AsG]);this.Fc.S(A.aaL(A.fl.Af
));this.OW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JI;this.Y._Done(
);this.FX._Done();this.Eh._Done();this.Ex._Done();this.MF._Done();this.Fd._Done(
);this.Fc._Done();this.OW._Done();C.JI._Done.call(this);},_ReInit:function(){C.JI.
_ReInit.call(this);this.Y._ReInit();this.FX._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.MF._ReInit();this.Fd._ReInit();this.Fc._ReInit();this.OW._ReInit(
);this.OW.R(A.aaR(A.acf.AR0));this.MF.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.fl.Af)
);this.Fc.S(A.aaL(A.fl.Af));this.OW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JI._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AL6={_Init:function(aArg){C.Ap_._Init.call(
this,aArg);this.__proto__=C.AL6;this.A4n=1;this.Rg.Ct(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Ap_._ReInit.call(this);this.Rg.Ct(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQO={OH:null,IN:null,H5:null,IL:null,GO:null,AlT:function(G){A.pe([this,this.
BzJ],this);},BzJ:function(G){A._GetAutoObject(C.A$).Cf(3);},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.OH._Init.call(this.OH={I:this},0);C.BW._Init.call(this.
IN={I:this},0);C.SO._Init.call(this.H5={I:this},0);C.AGy._Init.call(this.IL={I:this
},0);C.Q9._Init.call(this.GO={I:this},0);this.__proto__=C.AQO;var B;this.I_(A.aaR(
A.acf.A_6));this.IN.H(AhX);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Language));this.
IN.A9O(100);this.H5.H(UV);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.
Bh(true);this.IL.H(Aaa);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Bs));this.GO.H(AhW
);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF5));this.GO.Bh(true);
this.GO.ArU(false);this.GO.A9W(true);this.JW(this.Y,-1);this.JW(this.Ay,-1);this.
J(this.IN,0);this.J(this.H5,0);this.J(this.IL,0);this.J(this.GO,0);this.IN.Zo(A.
aaL(A.fl.H1));this.IN.Zp(A.aaL(A.fl.H1));this.IN.At([B=this.OH,B.B_,B.B$]);this.
IN.CK(this.OH);this.H5.AeR([B=this.H5,B.FU]);this.H5.Gr([this,this.D_,this.GQ]);
this.H5.Akt(A.aaL(A.ach.Edit));this.H5.Ab2([B=A._GetAutoObject(A.Device.Helper),
B.UX,B.U0]);this.IL.AeR([B=this.IL,B.FU]);this.IL.Gr([this,this.D_,this.GQ]);this.
IL.Akt(A.aaL(A.ach.Edit));this.IL.Ab2([B=A._GetAutoObject(A.Device.Helper),B.UX,
B.U0]);this.GO.AeR([B=this.GO,B.FU]);this.GO.Gr([this,this.D_,this.GQ]);this.GO.
Akt(A.aaL(A.ach.Edit));this.GO.At([B=A._GetAutoObject(A.Device.Device),B.ASr,B.AZW
]);},_Done:function(){this.__proto__=C.Cd;this.OH._Done();this.IN._Done();this.H5.
_Done();this.IL._Done();this.GO._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.OH._ReInit();this.IN._ReInit();this.H5._ReInit();
this.IL._ReInit();this.GO._ReInit();this.I_(A.aaR(A.acf.A_6));this.IN.T(A.aaR(A.
acf.Language));this.H5.T(A.aaR(A.acf.Date));this.IL.T(A.aaR(A.acf.Bs));this.GO.T(
A.aaR(A.acf.AF5));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaU={Bg:null,FB:null,AmS:null,AmB:null,Sb:null,A6B:A.jV,KL:A.jV,ARg:null,ARh:
null,ADb:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A2D],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);this.A2D(this);},E4:function(
G){var B;A.z$([this,this.A2D],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId
],0);C.D9.E4.call(this,G);},Zq:function(E){C.D9.Zq.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zq(E);},AS3:function(E){if(this.ARg===E)return;this.
ARg=E;if(!!this.Bg)this.Bg.NZ(E);},AS4:function(E){if(this.ARh===E)return;this.ARh=
E;this.Bol(this);},AST:function(E){if(this.ADb===E)return;this.ADb=E;A.pe([this,
this.Bok],this);},ArJ:function(E){if(this.A6B===E)return;this.A6B=E;this.Sb.R(E);
},Dz:function(E){if(this.KL===E)return;this.KL=E;if(!!this.Bg)this.Bg.Dz(E);},AkN:
function(L2){A.ab5("%s",As4);},ADQ:function(){A.ab5("%s",Ak9);return false;},Axp:
function(G){if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(C.Gc,0);this.Bg.H(
As5);this.Bg.Zm(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dz(this.KL);this.Bg.
NZ(this.ARg);this.Bg.Zq(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bol:function(
G){var B;if(!!this.FB)this.HN(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARh,0))?B:null);this.FB.H(IT);this.J(this.FB,0);},Bok:function(G){var B;if(
!!this.AmS)this.HN(this.AmS);if(!!this.ADb&&this.ADQ()){this.AmS=(C.I1.isPrototypeOf(
B=A._NewObject(this.ADb,0))?B:null);this.AmS.H(BD);this.AmS.Bh(false);this.J(this.
AmS,0);this.Sb.Z(false);}else this.Sb.Z(true);},A2D:function(G){this.AkN(A._GetAutoObject(
A.Device.Device).Bt);this.Axp(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmB={I:this},0);C.CH._Init.call(this.Sb={I:this},
0);this.__proto__=C.AaU;this.AmB.H(BD);this.AmB.L(A.jb.CJ);this.Sb.H(AHC);this.Sb.
A5(0x11);this.Sb.L(A.jb.Text);this.J(this.AmB,0);this.J(this.Sb,0);this.Sb.S(A.aaL(
A.fl.Km));this.Sb.A2(A.aaL(A.fl.Ik));},_Done:function(){this.__proto__=C.D9;this.
AmB._Done();this.Sb._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmB._ReInit();this.Sb._ReInit();this.Sb.S(A.aaL(A.fl.Km));this.Sb.
A2(A.aaL(A.fl.Ik));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmB)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kh={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BbY],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AIF],0);A.pe([this,this.BbY],this
);},Dt:function(){return 5;},Gk:function(aIndex){return this.AnimalListContentToString.
BS(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).Zk(E);},BbY:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kh;this.Cb.Set(0,0);this.Cb.Set(1,14);this.Cb.Set(2,
1);this.Cb.Set(3,2);this.Cb.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cl;this.AnimalListContentToString._Done();C.Cl._Done.call(this);},_ReInit:function(
){C.Cl._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cl._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARl={IN:null
,Y4:null,Zb:null,Y_:null,Zc:null,Y5:null,Y8:null,Y$:null,Za:null,Y7:null,OH:null
,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.BW._Init.call(this.IN={I:this
},0);C.Nb._Init.call(this.Y4={I:this},0);C.Nb._Init.call(this.Zb={I:this},0);C.Nb.
_Init.call(this.Y_={I:this},0);C.Nb._Init.call(this.Zc={I:this},0);C.Nb._Init.call(
this.Y5={I:this},0);C.Nb._Init.call(this.Y8={I:this},0);C.Nb._Init.call(this.Y$={
I:this},0);C.Nb._Init.call(this.Za={I:this},0);C.Nb._Init.call(this.Y7={I:this},
0);C.OH._Init.call(this.OH={I:this},0);this.__proto__=C.ARl;var B;this.I_(A.aaR(
A.acf.Settings));this.IN.H(AhX);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Language)
);this.IN.A9O(100);this.Y4.H(As6);this.Y4.Aj(true);this.Y4.T(A.aaR(A.acf.ACn));this.
Y4.Ne(16);this.Zb.H(As7);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.AG1));this.Zb.Ne(
22);this.Y_.H(As8);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.Temperature));this.Y_.
Ne(17);this.Zc.H(Ayq);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.ACk));this.Zc.Ne(42
);this.Y5.H(Aor);this.Y5.Aj(true);this.Y5.T(A.aaR(A.acf.Device));this.Y5.Ne(18);
this.Y8.H(Aor);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.Asd));this.Y8.Ne(19);this.
Y$.H(AY2);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.LinkTransponder));this.Y$.Ne(89
);this.Za.H(AY3);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.UnlinkTransponder));this.
Za.Ne(95);this.Y7.H(Ayh);this.Y7.Aj(true);this.Y7.T(A.aaR(A.acf.ACC));this.Y7.Ne(
76);this.J(this.IN,0);this.J(this.Y4,0);this.J(this.Zb,0);this.J(this.Y_,0);this.
J(this.Zc,0);this.J(this.Y5,0);this.J(this.Y8,0);this.J(this.Y$,0);this.J(this.Za
,0);this.J(this.Y7,0);this.IN.Zo(A.aaL(A.fl.H1));this.IN.Zp(A.aaL(A.fl.H1));this.
IN.At([B=this.OH,B.B_,B.B$]);this.IN.CK(this.OH);this.Y4.AR=[B=this.Y4,B.Nh];this.
Zb.AR=[B=this.Zb,B.Nh];this.Y_.AR=[B=this.Y_,B.Nh];this.Zc.AR=[B=this.Zc,B.Nh];this.
Y5.AR=[B=this.Y5,B.Nh];this.Y8.AR=[B=this.Y8,B.Nh];this.Y$.AR=[B=this.Y$,B.Nh];this.
Za.AR=[B=this.Za,B.Nh];this.Y7.AR=[B=this.Y7,B.Nh];},_Done:function(){this.__proto__=
C.Cd;this.IN._Done();this.Y4._Done();this.Zb._Done();this.Y_._Done();this.Zc._Done(
);this.Y5._Done();this.Y8._Done();this.Y$._Done();this.Za._Done();this.Y7._Done(
);this.OH._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.IN._ReInit();this.Y4._ReInit();this.Zb._ReInit();this.Y_._ReInit();this.Zc.
_ReInit();this.Y5._ReInit();this.Y8._ReInit();this.Y$._ReInit();this.Za._ReInit(
);this.Y7._ReInit();this.OH._ReInit();this.I_(A.aaR(A.acf.Settings));this.IN.T(A.
aaR(A.acf.Language));this.Y4.T(A.aaR(A.acf.ACn));this.Zb.T(A.aaR(A.acf.AG1));this.
Y_.T(A.aaR(A.acf.Temperature));this.Zc.T(A.aaR(A.acf.ACk));this.Y5.T(A.aaR(A.acf.
Device));this.Y8.T(A.aaR(A.acf.Asd));this.Y$.T(A.aaR(A.acf.LinkTransponder));this.
Za.T(A.aaR(A.acf.UnlinkTransponder));this.Y7.T(A.aaR(A.acf.ACC));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Za
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMh={ET:null,Init:function(aArg){this.ET.Ahp(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.AgU)));},AT4:function(
){this.ET.AeV(this.AOL());this.Aav=!this.ET.EZ.AY;},AiR:function(G){this.ET.Ahp(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(
A.aaR(A.acf.AgU)));this.AT4();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dz(A.aaR(A.acf.A7H));else this.Dz(A.aaR(A.acf.Arl));this.Am();},AOL:function(
){var Bz=A._NewObject(C.Aqm,0);var Qi=A._GetAutoObject(A.Device.Helper).AN3(A._GetAutoObject(
A.Device.Helper).Du());var Dw=A._GetAutoObject(A.Device.Helper).Aqi(Qi-(86400*this.
Mv));Bz.Ans(AY4);Bz.Q1([].concat(0,Bz.Gj.slice(1,4)));Bz.Q1(A.abN(Bz.Gj,(Qi-Dw)|
0));Bz.Q1(A.abP(Bz.Gj,3400));Bz.Q1([].concat(Bz.Gj.slice(0,3),4200));var Gg=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwI(Gg);Bz.Yb();if(Gg>0){var O=0;while(O<Gg){var ApP=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApQ=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6)-Dw;if(ApP>0)Bz.Ap$(ApQ,ApP);O=O+1;}}return Bz;},_Init:function(aArg
){C.K9._Init.call(this,aArg);C.AqQ._Init.call(this.ET={I:this},0);this.__proto__=
C.AMh;this.ET.H(AY5);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE5(C.AGM);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.ET._Done(
);C.K9._Done.call(this);},_ReInit:function(){C.K9._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMi={ZZ:null,OZ:null,AgO:null,Aav:false,Init:function(aArg){this.ZZ.Ahp(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.
AgU)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgO.Z(this.Aav);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiR],[B=A._GetAutoObject(A.Device.
Helper),B.UX,B.U0],0);A.zV([this,this.AiR],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0
);A.pe([this,this.Al8],this);},E4:function(G){var B;A.z$([this,this.AiR],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AiR],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId
],0);C.D9.E4.call(this,G);},Al8:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CV(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw
);},AiR:function(G){this.ZZ.Ahp(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Du()).Format(A.aaR(A.acf.AgU)));this.BnI();this.Am();},BnI:function(
){var B;var Gg=A._GetAutoObject(A.Device.Device).Bt.B9();var K7=A._NewObject(C.Aqm
,0);var Vl=A._NewObject(C.Aqm,0);var Qi=A._GetAutoObject(A.Device.Helper).AN3(A.
_GetAutoObject(A.Device.Helper).Du());var Dw=A._GetAutoObject(A.Device.Helper).Aqi(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K7.Q1([].concat(0,K7.Gj.slice(1
,4)));K7.Q1(A.abN(K7.Gj,(Qi-Dw)|0));K7.Q1(A.abP(K7.Gj,0));K7.Q1([].concat(K7.Gj.
slice(0,3),150000));K7.Ans(AY6);Vl.Q1([].concat(0,Vl.Gj.slice(1,4)));Vl.Q1(A.abN(
Vl.Gj,(Qi-Dw)|0));Vl.Q1(A.abP(Vl.Gj,0));Vl.Q1([].concat(Vl.Gj.slice(0,3),1500));
Vl.Ans(AY7);K7.AwI(Gg);K7.Yb();Vl.AwI(Gg);Vl.Yb();if(Gg>0){var O=0;var Aax=0;var
Az$=0;var AJ1=0;var A1H=0;var BcB=true;while(O<Gg){var Al2=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaK=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-Dw;if(Al2>
0){K7.Ap$(AaK,Al2);if(!A1H){A1H=AaK;AJ1=Al2;}if(Az$>0){var LC=A._GetAutoObject(A.
Device.Helper).L9(Az$,AaK);if(!!LC){var FV=A._GetAutoObject(A.acj.DU).Alq(LC,Aax
,Al2);if(BcB){Vl.Ap$(Az$,FV);BcB=false;}Vl.Ap$(AaK,FV);}}Aax=Al2;Az$=AaK;}O=O+1;
}var AdI=A.aaR(A.acf.Bgq);var FV=A._GetAutoObject(A.Device.Helper).Bij(A1H,Az$,AJ1
,Aax);AdI=A._GetAutoObject(A.Device.Helper).Nk(AdI,P8,FV.toFixed());AdI=A._GetAutoObject(
A.Device.Helper).Nk(AdI,Ax5,A._GetAutoObject(A.acj.DU).Aar());this.OZ.Ij.R(AdI);
}this.Aav=!K7.AY;if(this.Aav)this.OZ.Ij.R(A.jV);(C.OZ.isPrototypeOf(B=this.OZ.ET
)?B:null).Ano([B=A._GetAutoObject(A.Device.Helper).W,B.PN,B.EB]);this.ZZ.AeV(K7);
this.OZ.AeV(Vl);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqQ._Init.call(
this.ZZ={I:this},0);C.AqQ._Init.call(this.OZ={I:this},0);C.AkL._Init.call(this.AgO={
I:this},0);this.__proto__=C.AMi;this.ZZ.H(AY8);this.ZZ.T(A.aaR(A.acf.Afq));this.
ZZ.AE5(C.AMP);this.OZ.H(AY9);this.OZ.T(A.aaR(A.acf.AG6));this.OZ.AE5(C.OZ);this.
AgO.H(UU);this.AgO.R(A.aaR(A.acf.Akf));this.J(this.ZZ,0);this.J(this.OZ,0);this.
J(this.AgO,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.ZZ._Done(
);this.OZ._Done();this.AgO._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.ZZ._ReInit();this.OZ._ReInit();this.AgO._ReInit();this.
ZZ.T(A.aaR(A.acf.Afq));this.OZ.T(A.aaR(A.acf.AG6));this.AgO.R(A.aaR(A.acf.Akf));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.ZZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgO)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMf={
Au8:null,Au7:null,Axj:null,AuD:null,Vx:null,Abi:null,Abh:null,Acf:null,Afd:null,
Init:function(aArg){this.Vx.Ahp(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Du()).Format(A.aaR(A.acf.AgU)));},A36:function(G){this.Vx.Ab3(this.
AuD);this.Abi.Ab3(this.Au8);this.Abh.Ab3(this.Au7);this.Acf.Ab3(this.Axj);},Axi:
function(){var Gg=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuD=A._NewObject(
C.Ajo,0);this.Au8=A._NewObject(C.Ajo,0);this.Au7=A._NewObject(C.Ajo,0);this.Axj=
A._NewObject(C.Ajo,0);if(Gg>0){var O=Gg-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hu(O,6);this.Atm(this.AuD,O,3,D8);this.Atm(this.Au8,O,2,D8);this.
Atm(this.Au7,O,5,D8);this.Atm(this.Axj,O,4,D8);O=O-1;}}this.Aav=!(((this.AuD.AY+
this.Au7.AY)+this.Au8.AY)+this.Axj.AY);A.pe([this,this.A36],this);},Atm:function(
A0H,Ad,A0G,Qc){var Alm=A._GetAutoObject(A.Device.Device).Bt.I4(Ad,A0G);if(!!Alm)
A0H.Or(Alm,Qc);},Ab1:function(E){if(this.Mv===E)return;C.K9.Ab1.call(this,E);if(
!!this.Vx)this.Vx.Ab1(E);if(!!this.Abi)this.Abi.Ab1(E);if(!!this.Abh)this.Abh.Ab1(
E);if(!!this.Acf)this.Acf.Ab1(E);this.Afd.Ab1(E);},AiR:function(G){this.Vx.Ahp(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(
A.aaR(A.acf.AgU)));this.Axi();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dz(A.aaR(A.acf.BjH));else this.Dz(A.aaR(A.acf.Ang));this.Am();},_Init:function(
aArg){C.K9._Init.call(this,aArg);C.Ahv._Init.call(this.Vx={I:this},0);C.Ahv._Init.
call(this.Abi={I:this},0);C.Ahv._Init.call(this.Abh={I:this},0);C.Ahv._Init.call(
this.Acf={I:this},0);C.AT1._Init.call(this.Afd={I:this},0);this.__proto__=C.AMf;
this.Dz(A.aaR(A.acf.Ang));this.Vx.H(AY_);this.Vx.R(A.aaR(A.acf.AF_));this.Abi.H(
AY$);this.Abi.R(A.aaR(A.acf.Feed));this.Abh.H(AZa);this.Abh.R(A.aaR(A.acf.AGa));
this.Acf.H(AIq);this.Acf.R(A.aaR(A.acf.AGb));this.Afd.H(AZb);this.J(this.Vx,-1);
this.J(this.Abi,-1);this.J(this.Abh,-1);this.J(this.Acf,-1);this.J(this.Afd,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.Vx._Done();this.Abi.
_Done();this.Abh._Done();this.Acf._Done();this.Afd._Done();C.K9._Done.call(this);
},_ReInit:function(){C.K9._ReInit.call(this);this.Vx._ReInit();this.Abi._ReInit(
);this.Abh._ReInit();this.Acf._ReInit();this.Afd._ReInit();this.Dz(A.aaR(A.acf.Ang
));this.Vx.R(A.aaR(A.acf.AF_));this.Abi.R(A.aaR(A.acf.Feed));this.Abh.R(A.aaR(A.
acf.AGa));this.Acf.R(A.aaR(A.acf.AGb));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMg={ET:null,WA:null,Aee:null,A14:false,Init:function(aArg){this.WA.Ahp(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.
AgU)));},Bl:function(aSize){C.K9.Bl.call(this,aSize);this.Aee.H(this.ET.M);},Ai:
function(Ae){C.K9.Ai.call(this,Ae);var BBf=!this.Aav&&this.A14;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aee.R(A.aaR(A.acf.A7H));else this.
Aee.R(A.aaR(A.acf.Arl));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dz(A.aaR(
A.acf.BjI));else this.Dz(A.aaR(A.acf.BjJ));this.Aee.Z(BBf);},AiR:function(G){this.
WA.Ahp(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du(
)).Format(A.aaR(A.acf.AgU)));this.Aav=true;this.A14=true;this.Axi();this.AT4();this.
Am();},AT4:function(){this.ET.AeV(this.AOL());if(!!this.ET.EZ&&(this.ET.EZ.AY>0)
){this.Aav=false;this.A14=false;}},AOL:function(){var Bz=A._NewObject(C.Aqm,0);var
Qi=A._GetAutoObject(A.Device.Helper).AN3(A._GetAutoObject(A.Device.Helper).Du());
var Dw=A._GetAutoObject(A.Device.Helper).Aqi(Qi-(86400*this.Mv));Bz.Ans(AIr);Bz.
Q1([].concat(0,Bz.Gj.slice(1,4)));Bz.Q1(A.abN(Bz.Gj,(Qi-Dw)|0));Bz.Q1(A.abP(Bz.Gj
,3400));Bz.Q1([].concat(Bz.Gj.slice(0,3),4200));var Gg=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwI(Gg);Bz.Yb();if(Gg>0){var O=0;while(O<Gg){var ApP=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApQ=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-
Dw;if(ApP>0)Bz.Ap$(ApQ,ApP);O=O+1;}}return Bz;},Biy:function(){var Gg=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gg>0){var Bfi=A._NewObject(C.Ajo,0);var O=Gg-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LP=A._GetAutoObject(A.Device.Helper).AC1(D3);if(!!LP)Bfi.Or(LP,D3.Timestamp
);O=O-1;}return Bfi;}else return null;},Axi:function(){this.WA.Ab3(this.Biy());if(
!!this.WA.N2&&(this.WA.N2.AY>0))this.Aav=false;},_Init:function(aArg){C.K9._Init.
call(this,aArg);C.AqQ._Init.call(this.ET={I:this},0);C.Ahv._Init.call(this.WA={I:
this},0);C.AkL._Init.call(this.Aee={I:this},0);this.__proto__=C.AMg;this.ET.H(As5
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE5(C.AGM);this.WA.H(AZc);this.WA.
R(A.aaR(A.acf.Rating));this.Aee.H(As5);this.J(this.ET,-2);this.J(this.WA,-2);this.
J(this.Aee,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.ET._Done(
);this.WA._Done();this.Aee._Done();C.K9._Done.call(this);},_ReInit:function(){C.
K9._ReInit.call(this);this.ET._ReInit();this.WA._ReInit();this.Aee._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WA.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K9._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WG={Q:null,Gw:null,Gx:null
,QJ:null,AM:0,Gp:0,F$:100,FF:0,Init:function(aArg){},IY:function(G){this.FF=1;C.
Eg.IY.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QJ.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QJ.Z(this.Gp!==
this.F$);this.QJ.L(this.V.AQ);if((this.FF===4)||(this.FF===5))this.QJ.L(A.jb.E1);
},AlV:function(G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyJ],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qo:function(G){if(this.FF===5)A.pe([this,this.
AyJ],this);if(this.FF===4)A.pe([this,this.AyK],this);if(this.FF===1)A.pe(this.AR
,this);this.FF=0;this.Am();},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcQ:function(s){this.C2(s);},At:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcQ],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcQ],E,0);if(!!E)A.pe([this,this.AcQ],this);},AlW:function(G){this.FF=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyK],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J$:function(G){this.FF=0;},AyK:function(s){this.J$(s);},J6:function(G){this.
FF=0;},AyJ:function(s){this.J6(s);},Bx:function(E){if(E<this.Gp)E=this.Gp;if(E>this.
F$)E=this.F$;if(this.AM===E)return;this.AM=E;this.Am();},Ga:function(E){if(this.
Gp===E)return;this.Gp=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gw={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.acg.Ap._Init.call(
this.QJ={I:this},0);this.__proto__=C.WG;this.H(KX);this.Gw.Filter=5;this.Gx.Filter=
4;this.Background.H(KX);this.V.H(AcI);this.V.R(Lu);this.QJ.H(Ayr);this.J(this.QJ
,0);this.Gw.BL=[this,this.AlV];this.Gw.D1=[this,this.AlV];this.Gx.BL=[this,this.
AlW];this.Gx.D1=[this,this.AlW];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Ct(null);this.QJ.Aw(A.aaL(A.ach.AMD));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gw._Done();this.Gx._Done();this.QJ._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gw._ReInit();this.Gx.
_ReInit();this.QJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUp={AC:null,CM:null,HL:
null,Bl:function(aSize){C.WG.Bl.call(this,aSize);this.CM.H([this.QJ.M[2],this.QJ.
M[1],this.M[2],this.QJ.M[3]]);},Ai:function(Ae){C.WG.Ai.call(this,Ae);this.CM.AbA(
0,this.CM.AY-1);if(this.Gp!==this.F$)this.QJ.Z(true);},Init:function(aArg){},C2:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},J$:function(G){var F;var BO=this.AM;C.WG.J$.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BO=this.AM;C.WG.J6.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var Qu=0;if(this.Gp
!==this.F$){if(E<this.Gp){E=this.F$;Qu=-this.CM.GN*this.CM.AY;}if(E>this.F$){E=this.
Gp;Qu=this.CM.GN;}}C.WG.Bx.call(this,E);if(!!Qu)this.CM.Gb(Qu);this.CM.GS(this.AM
);this.CM.HH(this.CM.Gs,true,this.HL,null);},Hk:function(G){var B;var Gf=this.CM.
G4;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gk(Gf));else Cz.
R(W9);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GN]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ga(0);this.EU(this.AC.Dt()-1);this.CM.
Jw(this.AC.Dt());this.CM.AbA(0,this.CM.AY-1);}},_Init:function(aArg){C.WG._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gl._Init.call(this.
HL={I:this},0);this.__proto__=C.AUp;this.H(KX);this.QJ.H(AIs);this.CM.Ae3(40);this.
CM.NZ(C.CH);this.HL.Wy(23);this.HL.HM(1);this.HL.Fp(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hk=[this,this.Hk];this.Init(
aArg);},_Done:function(){this.__proto__=C.WG;this.CM._Done();this.HL._Done();C.WG.
_Done.call(this);},_ReInit:function(){C.WG._ReInit.call(this);this.CM._ReInit();
this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WG._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RW={ALo:0
,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG6));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kt((A._GetAutoObject(A.Device.Converter).Ak4(this.ALo
)+CQ)+A._GetAutoObject(A.acj.DU).AfZ());else this.Kt(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fx.Ce.call(this,G);this.ALo=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fx._Init.call(this,aArg);this.__proto__=C.RW;},_className:"Application::AnimalInfoItemWeightGain"
};C.APo={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Device),B.AEn,B.AIE],0);},DX:function(G){C.II.DX.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgF(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.II._Init.call(this,aArg);A.acg.C4._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APo;this.Bc.DC(
Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.Dd.H(AZd);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjP));this.Init(aArg);},_Done:
function(){this.__proto__=C.II;this.Bc._Done();this.Dd._Done();C.II._Done.call(this
);},_ReInit:function(){C.II._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.II._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANp={ZH:null,Kx:null,Mk:null,Timer:null,ACb:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZH.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Bp2),P8,this.ACb.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BAs:function(G){if(this.ACb>1){this.ACb=this.ACb-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axq();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZH={I:this},0);A.acg.Text.
_Init.call(this.Kx={I:this},0);A.acg.Ap._Init.call(this.Mk={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANp;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZH.H(AZe);this.ZH.KQ(true);this.ZH.R(A.jV);this.ZH.L(A.jb.
Text);this.Kx.H(AZf);this.Kx.KQ(true);this.Kx.R(A.aaR(A.acf.A4X));this.Kx.L(A.jb.
Text);this.Mk.H(AIt);this.J(this.ZH,0);this.J(this.Kx,0);this.J(this.Mk,0);this.
ZH.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));this.Mk.Aw(A.aaL(A.ach.ABI));this.
Timer.Mz=[this,this.BAs];},_Done:function(){this.__proto__=C.AB;this.ZH._Done();
this.Kx._Done();this.Mk._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZH._ReInit();this.Kx._ReInit();this.Mk._ReInit(
);this.Timer._ReInit();this.Kx.R(A.aaR(A.acf.A4X));this.ZH.S(A.aaL(A.fl.Af));this.
Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AM8={Kx:null,Ams:null
,QB:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad5.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa0<=10)this.Kx.R(A.aaR(A.acf.BgS));else this.Kx.R(A.aaR(A.acf.
A4Y));},_Init:function(aArg){C.Ad5._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.Ap._Init.call(this.Ams={I:this},0);C.CH._Init.call(this.QB={
I:this},0);this.__proto__=C.AM8;this.SP.H(AZg);this.Mk.H(AZh);this.Kx.H(AZi);this.
Kx.KQ(true);this.Kx.L(A.jb.Text);this.Ams.H(AIt);this.QB.H(AZj);this.QB.Z(true);
this.QB.R(A.aaR(A.acf.AT2));this.QB.L(A.jb.Text);this.J(this.Kx,0);this.J(this.Ams
,0);this.J(this.QB,0);this.Kx.S(A.aaL(A.fl.Af));this.Ams.Aw(A.aaL(A.ach.ABI));this.
QB.S(A.aaL(A.fl.Af));this.QB.A2(A.aaL(A.fl.Ak));this.QB.Ct(A.aaL(A.fl.Bi));},_Done:
function(){this.__proto__=C.Ad5;this.Kx._Done();this.Ams._Done();this.QB._Done();
C.Ad5._Done.call(this);},_ReInit:function(){C.Ad5._ReInit.call(this);this.Kx._ReInit(
);this.Ams._ReInit();this.QB._ReInit();this.QB.R(A.aaR(A.acf.AT2));this.Kx.S(A.aaL(
A.fl.Af));this.QB.S(A.aaL(A.fl.Af));this.QB.A2(A.aaL(A.fl.Ak));this.QB.Ct(A.aaL(
A.fl.Bi));this.CP();},_Mark:function(D){var B;C.Ad5._Mark.call(this,D);if((B=this.
Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ams)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL4={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AL4;this.
RP.Ar(false);this.RP.Aj(false);this.RP.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVp={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AVp;this.
S4.Ar(false);this.S4.Aj(false);this.S4.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOS={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(5));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.AOS;},_className:"Application::HeaderControlListFilter"};C.APq={DX:function(G){
C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(6));},_Init:
function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.APq;},_className:"Application::HeaderWatchListFilter"
};C.APu={D0:null,M6:null,_Init:function(aArg){C.TR._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M6={I:this},0);this.__proto__=
C.APu;this.D0.H(Aon);this.D0.R(A.aaR(A.acf.A5t));this.D0.L(A.jb.Text);this.M6.H(
AZk);this.M6.L(A.jb.Text);this.M6.A5(0x12);this.J(this.D0,-2);this.J(this.M6,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bi));this.M6.Aw(A.aaL(A.ach.ADu)
);},_Done:function(){this.__proto__=C.TR;this.D0._Done();this.M6._Done();C.TR._Done.
call(this);},_ReInit:function(){C.TR._ReInit.call(this);this.D0._ReInit();this.M6.
_ReInit();this.D0.R(A.aaR(A.acf.A5t));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.TR._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM3={Ce:function(Ad){C.Ajw.Ce.call(this,Ad);if(
!!this.AX){var Oi=this.AX.H2(Ad,8);var BB3=this.AX.Si(Ad,21);this.Aba.R(A._GetAutoObject(
A.Device.Helper).L9(BB3,A._GetAutoObject(A.Device.Helper).Du()).toFixed());this.
So.Z(Oi);this.Am();}},_Init:function(aArg){C.Ajw._Init.call(this,aArg);this.__proto__=
C.AM3;},_className:"Application::CalfListWatchItem"};C.TR={Ag4:null,Ag6:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag4={I:this},
0);A.acg.Ap._Init.call(this.Ag6={I:this},0);this.__proto__=C.TR;this.Ag4.H(AZl);
this.Ag4.L(A.jb.Text);this.Ag4.A5(0x12);this.Ag6.H(AZm);this.Ag6.L(A.jb.Text);this.
Ag6.A5(0x12);this.JW(this.DS,-1);this.J(this.Ag4,0);this.J(this.Ag6,0);this.Ag4.
Aw(A.aaL(A.ach.AmU));this.Ag6.Aw(A.aaL(A.ach.Abx));},_Done:function(){this.__proto__=
C.Dc;this.Ag4._Done();this.Ag6._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag4._ReInit();this.Ag6._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqm={Gj:A.wg,OD:A.wf,Q1:function(E){if(A.aaY(this.Gj,E))return;this.Gj=E;},Ans:
function(E){if(A.aaX(this.OD,E))return;this.OD=E;},_Init:function(aArg){A.acv.ACa.
_Init.call(this,aArg);this.__proto__=C.Aqm;},_className:"Application::BoundCoordList"
};C.Ajw={TX:null,Wp:null,TY:null,Wq:null,So:null,Zd:null,Aba:null,AP:null,A_:null
,Ea:null,Lr:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TX.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wp.H(this.TX.M);this.A_.H([this.TX.
M[2]-1,0,this.TX.M[2]+1,aSize[1]]);this.TY.H([this.TX.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wq.H(this.TY.M);this.Ea.H([this.TY.M[2]-1,0,this.TY.M[2]+1,aSize[
1]]);this.So.H([this.TY.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zd.H(this.So.
M);this.Lr.H([this.So.M[2]-1,0,this.So.M[2]+1,aSize[1]]);this.Aba.H([this.So.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K6=this.V.AQ;
this.TX.AEO(K6);this.Wp.L(K6);this.TY.AEO(K6);this.Wq.L(K6);this.So.AEO(K6);this.
Zd.L(K6);this.Aba.L(K6);this.Zd.Z(!this.So.Fo());},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;var Mf=this.AX.CF(Ad,1);var Ib=this.AX.AmN(Ad,14);var Auf=this.AX.CF(
Ad,5);var LP=this.AX.I4(Ad,13);this.T(Mf.toFixed());if(!!LP){this.TX.Z(true);this.
TX.Awy(A._GetAutoObject(A.acj.Assessment).BcJ(LP));this.Wp.Z(false);}else{this.TX.
Z(false);this.Wp.Z(true);}if(Auf>0){this.TY.Z(true);this.TY.Awy(A._GetAutoObject(
A.acj.Assessment).BcJ(A._GetAutoObject(A.Device.Converter).Asz(Ib,Auf)));this.Wq.
Z(false);}else{this.TY.Z(false);this.Wq.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Ki._Init.call(this.TX={I:this},0);A.acg.Text._Init.
call(this.Wp={I:this},0);C.Ki._Init.call(this.TY={I:this},0);A.acg.Text._Init.call(
this.Wq={I:this},0);C.Ki._Init.call(this.So={I:this},0);A.acg.Text._Init.call(this.
Zd={I:this},0);A.acg.Text._Init.call(this.Aba={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Lr={I:this},0);this.__proto__=C.Ajw;this.
Wp.H(AZn);this.Wp.R(Aoo);this.Wq.H(Aop);this.Wq.R(Aoo);this.So.Awy(A.jb.Re);this.
Zd.H(Aop);this.Zd.R(Rm);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.J(this.TX,0);this.J(this.Wp,0);this.J(this.TY,0);this.J(
this.Wq,0);this.J(this.So,0);this.J(this.Zd,0);this.J(this.Aba,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lr,0);this.Wp.S(A.aaL(A.fl.Af
));this.Wq.S(A.aaL(A.fl.Af));this.Zd.S(A.aaL(A.fl.Af));this.Aba.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TX._Done();this.Wp.
_Done();this.TY._Done();this.Wq._Done();this.So._Done();this.Zd._Done();this.Aba.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lr._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TX._ReInit();this.Wp.
_ReInit();this.TY._ReInit();this.Wq._ReInit();this.So._ReInit();this.Zd._ReInit(
);this.Aba._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Lr._ReInit();this.Wp.S(A.aaL(A.fl.Af));this.Wq.S(A.aaL(A.fl.Af));this.Zd.S(A.aaL(
A.fl.Af));this.Aba.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pr:null,Am_:null
,EZ:null,DR:null,Are:0,Arf:0,A60:0,AmE:0,Aqz:0,Init:function(aArg){this.ASO(6);this.
ASP(8);this.AS0(A.jb.AV);this.AS1(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Blm([this.DR.Aa8[0],(B=this.DR.M)[3]-B[1]]);this.WC(this);},ASN:function(
E){if(this.Pr===E)return;this.Pr=E;this.DR.ASN(E);},AS1:function(E){if(this.Arf===
E)return;this.Arf=E;this.DR.AS1(E);},AS0:function(E){if(this.Are===E)return;this.
Are=E;this.DR.AS0(E);this.DR.Blr(E);},WC:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.Ans([((this.EZ.OD[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gj[2]-this.EZ.Gj[0]))|0,this.DR.OD[1]]);this.DR.Ans([this.DR.OD[0]
,((this.EZ.OD[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gj[3]-this.EZ.Gj[1]))|0]);var O;
var Dg=this.DR.OD[1];var D8;var A4f=this.EZ.Gj[1];var BjG=(((B=this.DR.M)[3]-B[1
])/this.DR.OD[1])|0;for(O=0;O<BjG;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Am_.Ascent+this.Am_.Descent))+2,((B=this.M)[2]-
B[0])-this.Arf,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A60);D8.S(this.Am_);D8.
A5(0x24);if(O>0)D8.R(this.AJC(A4f));else D8.R(this.AJ$());A4f=A4f+this.EZ.OD[1];
this.J(D8,0);}},BFI:function(s){this.WC(s);},Bmh:function(E){if(this.Am_===E)return;
this.Am_=E;this.Am();},Azj:function(A0n){var B;if(!this.EZ||(this.EZ.Gj[3]===this.
EZ.Gj[1]))return 0;return(((A0n-this.EZ.Gj[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gj[
3]-this.EZ.Gj[1]))|0;},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeV(null);else{var Bz=A._NewObject(A.acv.ACa,0);Bz.AwI(this.EZ.AD6);Bz.Yb();var
Jy=E.AlA;while(!!Jy){Bz.Ap$(this.Bx6(Jy.P0),this.Bx7(Jy.P1));Jy=Jy.Ah;}this.DR.AeV(
Bz);this.Am();}},Bx6:function(Bwh){var B;if(!this.EZ||(this.EZ.Gj[2]===this.EZ.Gj[
0]))return 0;return((Bwh-this.EZ.Gj[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gj[2]-this.
EZ.Gj[0]);},Bx7:function(A0n){var B;if(!this.EZ||(this.EZ.Gj[3]===this.EZ.Gj[1])
)return 0;return((A0n-this.EZ.Gj[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gj[3]-this.EZ.
Gj[1]);},AJC:function(AoK){return AoK.toFixed();},AJ$:function(){return A.jV;},ASP:
function(E){if(this.AmE===E)return;this.AmE=E;this.DR.ASP(E);},ASO:function(E){if(
this.Aqz===E)return;this.Aqz=E;this.DR.ASO(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIu);this.A60=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIu);this.DR.BmH(AZo);this.
DR.Bla(A.jb.Re);this.DR.Bl0(A.jb.Bc);this.DR.Bm3(A.jb.Re);this.J(this.DR,0);this.
Pr=A.aaL(A.acv.ACt);this.Am_=A.aaL(A.fl.Bi);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bmh(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Am_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMP={AJC:function(AoK){return A._GetAutoObject(
A.Device.Converter).AxT(AoK,0);},AJ$:function(){return A._GetAutoObject(A.acj.DU
).AfZ();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMP;}
,_className:"Application::BodyWeightGraph"};C.OZ={JJ:null,Ex:null,Eh:null,FX:null
,IF:null,IG:null,Init:function(aArg){this.ASN(null);},WC:function(G){var B;var F;
C.DR.WC.call(this,G);var AKE=0;var ALt=0;if(!!this.JJ){AKE=this.Azj(A._GetAutoObject(
A.Device.Helper).AC0((F=this.JJ,F[1].call(F[0]))));ALt=this.Azj(A._GetAutoObject(
A.Device.Helper).ACZ((F=this.JJ,F[1].call(F[0]))));}this.FX.H(A.abP(this.FX.M,0)
);this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.M)[3]-B[1])-ALt));this.IF.H(
A.abO(this.IF.M,(this.FX.M[3]-((((B=this.IF.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FX.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKE));this.IG.H(A.abO(this.IG.M,(this.Eh.M[3]-((((B=this.IG.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJC:function(AoK){return A._GetAutoObject(A.Device.Converter
).S5(AoK,0,true);},AJ$:function(){return A._GetAutoObject(A.acj.DU).Aar();},Ano:
function(E){if(A.aaZ(this.JJ,E))return;if(!!this.JJ)A.z$([this,this.AiJ],this.JJ
,0);this.JJ=E;if(!!E)A.zX([this,this.AiJ],E,0);if(!!E)A.pe([this,this.AiJ],this);
},AiJ:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.
acg.AK._Init.call(this.FX={I:this},0);A.acg.AK._Init.call(this.IF={I:this},0);A.
acg.AK._Init.call(this.IG={I:this},0);this.__proto__=C.OZ;this.Ex.AZ(0xD);this.Ex.
H(Z7);this.Ex.L(A.jb.Gi);this.Eh.AZ(0xD);this.Eh.H(S8);this.Eh.L(A.jb.H8);this.FX.
AZ(0xD);this.FX.H(AcH);this.FX.L(A.jb.E1);this.IF.AZ(0xD);this.IF.H(Z9);this.IF.
Awm(A.jb.H8);this.IF.Awn(A.jb.H8);this.IF.Awp(A.jb.E1);this.IF.Awo(A.jb.E1);this.
IG.AZ(0xD);this.IG.H(W8);this.IG.Awm(A.jb.Gi);this.IG.Awn(A.jb.Gi);this.IG.Awp(A.
jb.H8);this.IG.Awo(A.jb.H8);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FX
,-1);this.J(this.IF,-1);this.J(this.IG,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FX._Done();this.IF._Done();this.
IG._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FX._ReInit();this.IF._ReInit();this.IG._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JJ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqQ={ET:null,EZ:null,R8:null,Ij:
null,Bc:null,AxA:A.jV,DK:A.jV,AON:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R8.
H([30,0,aSize[0]-2,30]);this.Ij.H(this.R8.M);if(!!this.ET)this.ET.H([30,this.R8.
M[3],aSize[0],this.Bc.M[1]]);},Ahp:function(E){if(this.AxA===E)return;this.AxA=E;
this.Ij.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R8.R(E);},AE5:
function(E){if(this.AON===E)return;this.AON=E;this.Boi(this);},Boi:function(G){var
B;if(!!this.ET)this.HN(this.ET);this.ET=(C.DR.isPrototypeOf(B=A._NewObject(this.
AON,0))?B:null);if(!!this.ET){this.ET.H(AZp);this.ET.AeV(this.EZ);this.J(this.ET
,0);}},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.ET)this.ET.AeV(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R8={I:this},0);A.acg.Text._Init.call(this.Ij={I:this},0);A.acg.AK._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqQ;this.H(AcK);this.Ar(false);this.R8.H(AZq);this.
R8.A5(0x11);this.R8.R(Lu);this.R8.L(A.jb.Text);this.Ij.A5(0x14);this.Ij.R(A.jV);
this.Ij.L(A.jb.Text);this.Bc.H(AZr);this.Bc.L(A.jb.Bc);this.J(this.R8,0);this.J(
this.Ij,0);this.J(this.Bc,0);this.R8.S(A.aaL(A.fl.Ak));this.Ij.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R8._Done();this.
Ij._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R8._ReInit();this.Ij._ReInit();this.Bc._ReInit();this.
R8.S(A.aaL(A.fl.Ak));this.Ij.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMo={Agx:null,GS:function(E
){var F;C.Gc.GS.call(this,E);if(!!this.Agx)(F=this.Agx,F[2].call(F[0],E));},A8_:
function(E){if(A.aaZ(this.Agx,E))return;if(!!this.Agx)A.z$([this,this.A2E],this.
Agx,0);this.Agx=E;if(!!E)A.zX([this,this.A2E],E,0);if(!!E)A.pe([this,this.A2E],this
);},A2E:function(G){var F;if(!this.Agx)return;(F=this.Agx,F[2].call(F[0],this.FK(
)));},_Init:function(aArg){C.Gc._Init.call(this,aArg);this.__proto__=C.AMo;},_Mark:
function(D){var B;C.Gc._Mark.call(this,D);if((B=this.Agx)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT1={Rc:null
,PW:null,XR:null,XS:null,Mv:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rc.H(A.abI(this.Rc.M,(((B=this.M)[3]-B[1])/2)|
0));this.PW.H(A.abI(this.PW.M,(((B=this.M)[3]-B[1])/2)|0));this.Rc.H(A.abO(this.
Rc.M,(((B=this.M)[3]-B[1])/2)|0));this.PW.H(A.abO(this.PW.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rc.R(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BjA),P8,this.Mv.toFixed()));},Ab1:function(E){if(
this.Mv===E)return;this.Mv=E;this.BA4(this);},BA4:function(G){var B;var AJJ=(((B=
this.M)[2]-B[0])/this.Mv)|0;this.XR.H(A.abM(this.XR.M,(((B=this.M)[2]-B[0])-(this.
Mv*AJJ))+(((AJJ/2)-(((B=this.XR.M)[2]-B[0])/2))|0)));this.XS.H(A.abM(this.XS.M,(((
B=this.M)[2]-B[0])-AJJ)+(((AJJ/2)-(((B=this.XS.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rc={
I:this},0);A.acg.Text._Init.call(this.PW={I:this},0);A.acg.Text._Init.call(this.
XR={I:this},0);A.acg.Text._Init.call(this.XS={I:this},0);this.__proto__=C.AT1;this.
H(BD);this.Rc.H(AZs);this.Rc.Hl(5);this.Rc.A5(0x11);this.Rc.L(A.jb.Text);this.PW.
H(Bp8);this.PW.Hl(5);this.PW.A5(0x14);this.PW.R(A.aaR(A.acf.AhN));this.PW.L(A.jb.
Text);this.XR.H(Bp9);this.XR.R(A$F);this.XR.L(A.jb.Text);this.XS.H(Bp_);this.XS.
R(A$F);this.XS.L(A.jb.Text);this.J(this.Rc,0);this.J(this.PW,0);this.J(this.XR,0
);this.J(this.XS,0);this.Rc.S(A.aaL(A.fl.Ak));this.PW.S(A.aaL(A.fl.Ak));this.XR.
S(A.aaL(A.fl.H1));this.XS.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=A.
Core.P;this.Rc._Done();this.PW._Done();this.XR._Done();this.XS._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rc._ReInit(
);this.PW._ReInit();this.XR._ReInit();this.XS._ReInit();this.PW.R(A.aaR(A.acf.AhN
));this.Rc.S(A.aaL(A.fl.Ak));this.PW.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rc)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K9={V1:null,AjC:null,KL:A.jV,Mv:0,Aav:false,Init:function(aArg){var A1k=A._NewObject(
C.Kj,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RM()<A1k.
C7(O))A1k.Anf=O+1;this.V1.CK(A1k);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjC.
Z(this.Aav);if(this.Aav)this.Bb(null);else this.Bb(this.V1);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V1.Q,F[1].call(F[0])))(F=this.V1.Q,F[2].
call(F[0],this.V1.AC.C7(0)));A.zX([this,this.AIV],[B=A._GetAutoObject(A.Device.Helper
),B.UX,B.U0],0);A.zV([this,this.AIV],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);A.pe([this
,this.Al8],this);},E4:function(G){var B;A.z$([this,this.AIV],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AIV],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId
],0);C.D9.E4.call(this,G);},Zq:function(E){if(A.aa0(this.AR,E))return;C.D9.Zq.call(
this,E);this.V1.AR=E;},Ab1:function(E){if(this.Mv===E)return;this.Mv=E;A.pe([this
,this.Al8],this);},BvR:function(Aq){this.Ab1(Aq);},AiR:function(G){},AIV:function(
s){this.AiR(s);},Dz:function(E){if(this.KL===E)return;this.KL=E;this.AjC.R(E);},
Al8:function(G){var Fw=A._NewObject(A.Device.Filter,0);var Azs=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azs.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhN()-((this.Mv-1)*86400))-1,true);Fw.CV(Azs);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CV(HV);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fw);},Bkx:function(){return this.Mv;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUp._Init.call(this.V1={I:this},0);C.AkL._Init.call(
this.AjC={I:this},0);this.__proto__=C.K9;this.V1.H(BD);this.AjC.H(UU);this.J(this.
V1,0);this.J(this.AjC,0);this.V1.At([this,this.Bkx,this.BvR]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V1._Done();this.AjC._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V1._ReInit();this.AjC.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANw={V8:null,YI:null,RatingMode:null,PC:null,_Init:
function(aArg){C.Cd._Init.call(this,aArg);C.Nb._Init.call(this.V8={I:this},0);C.
BW._Init.call(this.YI={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iq._Init.call(this.PC={I:this},0);this.__proto__=C.ANw;var B;this.Hh.R(A.
aaR(A.acf.ACk));this.I_(A.aaR(A.acf.A5n));this.V8.H(AIv);this.V8.Aj(true);this.V8.
T(A.aaR(A.acf.AsK));this.V8.Bh(true);this.V8.Ne(23);this.YI.H(Bp$);this.YI.Aj(true
);this.YI.T(A.aaR(A.acf.A_B));this.YI.Bh(false);this.PC.H(Bqa);this.PC.Aj(true);
this.PC.T(A.aaR(A.acf.A5k));this.PC.Bh(true);this.PC.Ga(3);this.PC.EU(14);this.PC.
IO(A.aaR(A.acf.Kj)+AIw);this.PC.I$(A.aaR(A.acf.GK)+AIw);this.J(this.V8,0);this.J(
this.YI,0);this.J(this.PC,0);this.V8.AR=[B=this.V8,B.Nh];this.YI.At([B=this.RatingMode
,B.B_,B.B$]);this.YI.CK(this.RatingMode);this.PC.At([B=A._GetAutoObject(A.Device.
Device),B.A8d,B.BaI]);},_Done:function(){this.__proto__=C.Cd;this.V8._Done();this.
YI._Done();this.RatingMode._Done();this.PC._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V8._ReInit();this.YI._ReInit();this.RatingMode.
_ReInit();this.PC._ReInit();this.Hh.R(A.aaR(A.acf.ACk));this.I_(A.aaR(A.acf.A5n)
);this.V8.T(A.aaR(A.acf.AsK));this.YI.T(A.aaR(A.acf.A_B));this.PC.T(A.aaR(A.acf.
A5k));this.PC.IO(A.aaR(A.acf.Kj)+AIw);this.PC.I$(A.aaR(A.acf.GK)+AIw);},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.AuW={Init:function(aArg){this.V.Text.A5(0x11);this.V.Text.Hl(10);},Ai:function(
Ae){var B;C.Cn.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FQ=A.jb.Ad7;var GW=A.jb.Bm;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.
Text;}if(!Hd){this.Background.L(FQ);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.LF=Hd;this.KD=Fu;this.Qp=GE;
},_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=C.AuW;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cn._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC8={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PN,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC5));break;case 1:this.Ap.Aw(A.aaL(A.ach.AO_));break;
case 2:this.Ap.Aw(A.aaL(A.ach.APa));break;default:A.ab5("%s%e",AZt,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC8;this.Ap.H(AZu);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC5));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC9={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PN,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.
De.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC6));break;case 1:this.Ap.Aw(A.aaL(
A.ach.AO$));break;case 2:this.Ap.Aw(A.aaL(A.ach.APb));break;default:A.ab5("%s%e"
,AZt,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC9;
this.Ap.H(AZu);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC6));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fx={BT:null,AxO:A.jV,De:function(E){C.JI.De.call(
this,E);this.BT.L(E);},Kt:function(E){if(this.AxO===E)return;this.AxO=E;this.BT.
R(E);},_Init:function(aArg){C.JI._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Fx;this.BT.AZ(0x34);this.BT.H(Ayp);this.BT.A5(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Ct(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.JI;this.
BT._Done();C.JI._Done.call(this);},_ReInit:function(){C.JI._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Ct(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.JI._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOw={Wu:function(G){var B;this.Agr();this.AL1(A.aaR(A.acf.BiL),[this,this.Bng],[
B=A._GetAutoObject(A.Device.Device),B.A8e,B.BaJ]);A._GetAutoObject(C.BR).FW();this.
I0(A.aaR(A.acf.AU2),[this,this.ATt],5);this.I0(A.aaR(A.acf.AU0),[this,this.ATs],
7);this.I0(A.aaR(A.acf.AnS),[this,this.AwL],2);this.I0(A.aaR(A.acf.AdP),[this,this.
AEK],1);this.I0(A.aaR(A.acf.Aus),[this,this.AEE],0);A._GetAutoObject(C.BR).FW();
A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dv(6);},DE:function(G){},Abn:function(){return C.ABY;},Abo:function(
){return C.ADe;},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6m());},HO:function(G){C.GZ.HO.call(this,G);if(this.Akb()===false
){this.N.Cv(A.aaL(A.ach.Abx));this.N.Ck=[this,this.A5O];this.N.FN(A.jV);}this.N.
ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(44);},Bng:
function(G){A._GetAutoObject(A.Device.Device).AwB(!A._GetAutoObject(A.Device.Device
).AqL);this.An0(this);},An0:function(G){var Be=A._GetAutoObject(A.Device.Device).
An.Filter.E_();var Av=Be.DL(30,3);if(!!Av)Be.Ni(Av);if(A._GetAutoObject(A.Device.
Device).AqL){var Az_=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2c=A._GetAutoObject(
A.Device.Helper).Du()-21600;Az_.Initialize(30,3,A2c,true);Be.CV(Az_);}A._GetAutoObject(
A.Device.Device).An.Bk(Be);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.
__proto__=C.AOw;var B;this.Dq(C.AO6);this.Dz(A.aaR(A.acf.A7E));this.AwG([B=A._GetAutoObject(
A.Device.Device),B.A8c,B.BaH]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7E));},_className:"Application::FreshCowListScreen"};C.AOv={_Init:
function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AOv;this.Lb.Ar(false);
this.Lb.Aj(false);this.Lb.Z(false);this.Jp.Ar(false);this.Jp.Aj(false);this.Jp.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.AO6={DX:function(
G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(7));
},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AO6;},_className:
"Application::HeaderFreshCowListFilter"};C.ADe={Jv:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jv={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADe;this.A9t(1);this.Jv.H(Bqb);this.Jv.R((A.
aaR(A.acf.Calving)+AcN)+A.aaR(A.acf.A$b));this.Jv.L(A.jb.Text);this.D0.H(Bqc);this.
D0.R(A.aaR(A.acf.ADY));this.D0.L(A.jb.Text);this.J(this.Jv,0);this.J(this.D0,0);
this.Jv.S(A.aaL(A.fl.Ak));this.Jv.A2(A.aaL(A.fl.Bi));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Dc;this.Jv._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jv._ReInit();this.D0._ReInit();this.Jv.R((A.aaR(A.acf.Calving)+AcN)+A.aaR(A.acf.
A$b));this.D0.R(A.aaR(A.acf.ADY));this.Jv.S(A.aaL(A.fl.Ak));this.Jv.A2(A.aaL(A.fl.
Bi));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABY={AGN:null,KO:null,Uz:null,AP:null,A_:null,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.Uz.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.Uz.M[2]-1,0,this.Uz.M[2]+1,aSize[1]]);this.KO.H([this.Uz.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KO.L(this.V.AQ);this.
Uz.De(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var
Iy=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,1);var A2b=this.AX.CF(Ad,29);var Als=this.
AX.Hu(Ad,28);this.T(Mf.toFixed());this.KO.R(A2b.toFixed());this.Uz.Ab1(A._GetAutoObject(
A.Device.Device).AqK+1);this.Uz.BmV(Als);this.Uz.R(A._GetAutoObject(A.acj.KJ).AjG(
Als));A._GetAutoObject(A.Device.Device).SN(Ad);this.ApZ(Iy);this.Axi();A._GetAutoObject(
A.Device.Device).Bt.Bk(null);this.Am();}},A36:function(G){this.Uz.Ab3(this.AGN);
},Axi:function(){var Gg=A._GetAutoObject(A.Device.Device).Bt.B9();this.AGN=A._NewObject(
C.Ajo,0);if(Gg>0){var O=Gg-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6);this.Atm(this.AGN,O,9,D8);O=O-1;}}A.pe([this,this.A36],this);},Atm:
function(A0H,Ad,A0G,Qc){var Alm=A._GetAutoObject(A.Device.Device).Bt.I4(Ad,A0G);
if(!!Alm)A0H.Or(Alm,Qc);},ApZ:function(Ac2){var Fw=A._NewObject(A.Device.Filter,
0);var Azs=A._NewObject(A.Device.UInt32FilterCriterion,0);Azs.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZM(A._GetAutoObject(A.Device.Device).AqK)-1,true);Fw.CV(Azs);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac2,true);Fw.
CV(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KO={I:this},0);C.ATW._Init.call(this.
Uz={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);this.__proto__=C.ABY;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KO,0);this.J(this.Uz,0);this.J(this.AP,0);this.J(this.A_,0);this.KO.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KO._Done();
this.Uz._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KO._ReInit();this.Uz._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KO.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.ATW={AUD:0,Init:function(aArg
){},AOD:function(){return A._GetAutoObject(A.Device.Helper).Aqi(this.AUD);},AOF:
function(){return this.AOD()+(this.Mv*86400);},BmV:function(E){if(this.AUD===E)return;
this.AUD=E;A.pe([this,this.WC],this);},_Init:function(aArg){C.Ahv._Init.call(this
,aArg);this.__proto__=C.ATW;this.Bc.H(Bqd);this.BmS(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dt:function(){if(this.K&&this.K.Dt)return this.K.Dt.apply(this,arguments);else
return C.FactoryResetScope.BtS.apply(this,arguments);},BtS:function(){return 2;}
,Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BS(this.C7(aIndex));},_Init:function(aArg){C.Cl._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cb.Set(0,0);this.Cb.Set(1,1);var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cl;this.FactoryResetScopeToString._Done();C.Cl._Done.call(this);},_ReInit:function(
){C.Cl._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bf6:false,Init:function(
aArg){this.Bf6=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.Bdb){A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);if(this.Bf6)A._GetAutoObject(A.Device.Device).A6(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A6(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ARZ={Wu:function(G){this.Agr();A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.Settings
),[this,this.A3c]);A._GetAutoObject(C.BR).FW();this.ALZ();A._GetAutoObject(C.BR).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.
BR).NC(A.aaR(A.acf.ARd)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(
6);},DE:function(G){},Abn:function(){return C.Aqn;},Abo:function(){return C.AqU;
},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).ACT());},HO:function(G){C.RK.HO.call(this,G);if(this.Akb()===false){this.
N.Cv(A.aaL(A.ach.Avo));this.N.Ck=[this,this.ANP];this.N.FN(A.jV);}this.N.ON(false
);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(47);},A3c:function(
G){A._GetAutoObject(A.Device.Device).Dv(0);A._GetAutoObject(C.A$).Cf(89);},_Init:
function(aArg){C.RK._Init.call(this,aArg);this.__proto__=C.ARZ;this.Dq(C.AC_);this.
Dz(A.aaR(A.acf.A7A));this.AS2(A._GetAutoObject(C.AvY));},_ReInit:function(){C.RK.
_ReInit.call(this);this.Dz(A.aaR(A.acf.A7A));},_className:"Application::NoTransponderListScreen"
};C.ARY={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ARY;this.
KU.Ar(false);this.KU.Aj(false);this.KU.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.AC_={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(8));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.AC_;},_className:"Application::HeaderNoTransponderListFilter"};C.ABH={AuI:null
,Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuI.BS(aIndex
);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuI={I:this},0);this.__proto__=C.ABH;},_Done:function(){this.__proto__=
C.Gd;this.AuI._Done();C.Gd._Done.call(this);},_ReInit:function(){C.Gd._ReInit.call(
this);this.AuI._ReInit();},_Mark:function(D){var B;C.Gd._Mark.call(this,D);if((B=
this.AuI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALU={Cn:null,AdX:null,Init:function(aArg){this.Bb(this.Cn);},Ll:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaC];this.BP.Ck=null;
this.BP.Co=[this,this.A2P];this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(A.aaL(A.
ach.Aeu));}return this.BP;},AAo:function(G){var Aa=(C.Aje.isPrototypeOf(G)?G:null
);if(Aa===this.Cn)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdX)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$G);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Aje._Init.call(this.
Cn={I:this},0);C.Aje._Init.call(this.AdX={I:this},0);this.__proto__=C.ALU;this.H(
Rl);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cn.H(IT);this.Cn.T(A.aaR(A.acf.
AD8));this.AdX.H(P9);this.AdX.T(A.aaR(A.acf.Ts));this.J(this.Cn,0);this.J(this.AdX
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cn.AR=[this,this.AAo];this.AdX.AR=[this,this.
AAo];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Cn._Done();this.
AdX._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Cn._ReInit();this.AdX._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cn.
T(A.aaR(A.acf.AD8));this.AdX.T(A.aaR(A.acf.Ts));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BE4={Undefined:0,BE2:1,BE3:2,IdScanned:3,BDY:4,BC4:5,BDI:6};C.AL8={A_X:function(
){A._GetAutoObject(A.Device.Device).A6(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeJ]);},_Init:function(aArg){C.Auy._Init.call(
this,aArg);this.__proto__=C.AL8;this.Gd.At(1);this.AS8(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeo={VQ:null,VS:null,VT:null,AgY:null,AgZ:null,Ag0:null,CE:null,Ck:null,Co:null
,AnT:A.jV,AnU:A.jV,AnV:A.jV,Aq1:0,Aq2:0,Aq3:0,Ahf:0,Zz:false,Zy:false,Asf:false,
Asu:false,Ast:false,Aju:function(Ff){this.CE=Ff.CE;this.Ck=Ff.Ck;this.Co=Ff.Co;this.
AnT=Ff.AnT;this.AnU=Ff.AnU;this.AnV=Ff.AnV;this.Ahf=Ff.Ahf;this.VQ=Ff.VQ;this.VS=
Ff.VS;this.VT=Ff.VT;this.AgY=Ff.AgY;this.AgZ=Ff.AgZ;this.Ag0=Ff.Ag0;this.Ast=Ff.
Ast;this.Asu=Ff.Asu;this.Asf=Ff.Asf;this.Zy=Ff.Zy;this.Zz=Ff.Zz;this.Aq1=Ff.Aq1;
this.Aq2=Ff.Aq2;this.Aq3=Ff.Aq3;},AkK:function(Ff){Ff.CE=this.CE;Ff.Ck=this.Ck;Ff.
Co=this.Co;Ff.Hx(this.AnT);Ff.FN(this.AnU);Ff.CX(this.AnV);Ff.AE$(this.Ahf);Ff.AE2(
this.VQ);Ff.ArH(this.VS);Ff.Anr(this.VT);Ff.C1(this.AgY);Ff.Cv(this.AgZ);Ff.C5(this.
Ag0);Ff.ON(this.Ast);Ff.OO(this.Asu);Ff.Asf=this.Asf;Ff.Zy=this.Zy;Ff.Zz=this.Zz;
Ff.Bl2(this.Aq1);Ff.ASW(this.Aq2);Ff.A9E(this.Aq3);},_Init:function(aArg){this.__proto__=
C.Aeo;this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VQ=A.aaL(
A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VS)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgZ)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Co)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asq._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dq(C.AC8);},_className:"Application::NewAnimalSetTransponderScreen"};C.C6={Aa9:null
,CountryToString:null,Dt:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lt(aIndex);},DZ:function(A9){return A9;
},H3:function(){return 39;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.
Aa9)(F=this.Aa9,F[2].call(F[0],E));},A1d:function(G){var F;if(!!this.Aa9)this.Q=(
F=this.Aa9,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.B$],0);},AEV:
function(E){if(A.aaZ(this.Aa9,E))return;if(!!this.Aa9)A.z$([this,this.A1d],this.
Aa9,0);this.Aa9=E;if(!!this.Aa9)A.zX([this,this.A1d],this.Aa9,0);A.pe([this,this.
A1d],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aa9)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OY={AC:null,Q:null,Background:null,Io:null,In:null,MZ:
0,AM:0,Gp:0,F$:0,Aga:function(G){this.J$(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(IA){this.Background.
L(A.jb.AV);this.Dj(256);}else{this.Background.L(this.MZ);this.Dj(256);}},Af$:function(
G){this.J6(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3a],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3a],E,0);if(!!E)A.pe([this
,this.A3a],this);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Am();},J$:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J6:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gp)E=this.F$;if(E>this.F$)E=this.Gp;if(this.AM===E)return;this.AM=E;
this.Am();},Ga:function(E){if(this.Gp===E)return;this.Gp=E;this.Am();},EU:function(
E){if(this.F$===E)return;this.F$=E;this.Am();},C2:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A3a:function(G){var F;if(!!this.
AC){this.Ga(0);this.EU(this.AC.H3());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Io={
I:this},0);A.Core.BK._Init.call(this.In={I:this},0);this.__proto__=C.OY;this.H(A$H
);this.Background.H(As9);this.Io.Filter=4;this.In.Filter=5;this.MZ=A.jb.CJ;this.
J(this.Background,0);this.Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];this.
In.BL=[this,this.Af$];this.In.D1=[this,this.Af$];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Io._Done();this.In._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Io._ReInit();this.In._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RR={A07:A.jV,Ai:function(
Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.A48));this.Kt(this.A07);},Ce:function(
G){C.Fx.Ce.call(this,G);var Als=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Als)this.A07=W9;else this.A07=A._GetAutoObject(A.acj.KJ).AjG(Als);this.Am();
},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RR;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RS={A2a:0,Ai:function(Ae){C.Fx.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARb));if(this.A2a>0)this.Kt(this.A2a.toFixed());else
this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.Ce.call(this,G);this.A2a=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fx._Init.call(
this,aArg);this.__proto__=C.RS;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dt:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 4;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Akr(E);},A1w:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1w],[B=this.Animal,B.ASf,B.Akr],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1w],[B=this.Animal,B.ASf,B.Akr],0);A.pe([this,this.A1w],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dt:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BS(aIndex);},DZ:function(A9){return A9;
},H3:function(){return 98;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal
)this.Animal.NY(E);},A05:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A05],[B=this.Animal,B.Av2,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A05],[B=this.Animal,B.Av2,B.NY],0);A.pe([
this,this.A05],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARw={V4:null,YG:null,AeH:null,Init:function(
aArg){this.Bb(this.V4);},Adp:function(G){var Aa=(C.Cn.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YG)this.BxA();else if(Aa===this.V4)this.BAh(this);else throw new
Error(Ax_);A._GetAutoObject(A.Device.Device).Dv(0);},BAh:function(G){var B;var F;
var Vh=(C.Amm.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vh){A.ab5("%s",Bqe);return;}Vh.AKu(this);},BxA:function(){A._GetAutoObject(
A.Device.Helper).W.AGv(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mn._Init.call(this.V4={I:this},0);C.Mn._Init.call(this.YG={
I:this},0);C.VL._Init.call(this.AeH={I:this},0);this.__proto__=C.ARw;var B;this.
H(AcK);this.V4.H(P9);this.V4.Ar(true);this.V4.T(A.aaR(A.acf.A_D));this.V4.Bh(true
);this.YG.H(IT);this.YG.Ar(true);this.YG.T(A.aaR(A.acf.A4u));this.YG.Bh(true);this.
AeH.H(BD);this.AeH.T(A.aaR(A.acf.ACH));this.AeH.Bh(true);this.J(this.V4,0);this.
J(this.YG,0);this.J(this.AeH,0);this.V4.AR=[this,this.Adp];this.YG.AR=[this,this.
Adp];this.AeH.ASK([B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V4._Done();this.YG._Done(
);this.AeH._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V4._ReInit();this.YG._ReInit();this.AeH._ReInit();this.V4.
T(A.aaR(A.acf.A_D));this.YG.T(A.aaR(A.acf.A4u));this.AeH.T(A.aaR(A.acf.ACH));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VL={
Ai:function(Ae){C.T7.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj
){FQ=A.jb.Text;GW=A.jb.Bm;}if(!this.LF){this.Background.L(FQ);this.V.L(A.jb.AmW);
}else if(this.Qp){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.
L(GW);}if(this.Amu){this.Ml.Cu(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cu(0);this.Ml.
L(A.jb.Bm);}},_Init:function(aArg){C.T7._Init.call(this,aArg);this.__proto__=C.VL;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvR={C8:null,A1:null,AF:
null,Akc:null,QU:null,EM:null,ARO:Lu,Bl:function(aSize){C.Cn.Bl.call(this,aSize);
var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}this.Background.
L(FQ);this.V.L(GW);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Cn.Ai.call(this
,Ae);this.Akc.L(this.V.AQ);this.QU.L(this.V.AQ);this.QU.R(Bqf);this.T(((this.ARO+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak0(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2f=this.QU.Afc([(this.QU.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3A=this.QU.Afc([this.
QU.String.length-(F=this.AF,F[1].call(F[0])),0]);var AA$=this.QU.Db();this.EM.H([
A2f[0]-1,AA$[1],A3A[0]+1,AA$[3]]);}else this.EM.H(this.QU.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Akc.Aw(E);},OL:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaB],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaB],E,0);if(!!E)A.pe([this,this.AaB],this);},PO:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaD],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaD],E,0);if(!!E)A.pe([this,this.AaD],this);},AaD:function(G){this.Am(
);},AaB:function(G){this.Am();},ArT:function(E){if(this.ARO===E)return;this.ARO=
E;this.Am();},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akc={I:this},0);A.acg.Text._Init.call(this.QU={I:this},0);A.acg.BU._Init.call(
this.EM={I:this},0);this.__proto__=C.AvR;this.H(KX);this.V.A5(0x11);this.Akc.H(P7
);this.QU.H(Bqg);this.EM.H(Bqh);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.Akc
,0);this.J(this.QU,0);this.J(this.EM,0);this.QU.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cn;this.Akc._Done();this.QU._Done();this.EM._Done();C.Cn._Done.
call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.Akc._ReInit();this.
QU._ReInit();this.EM._ReInit();this.QU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cn._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATR:0,Init:
function(aArg){var B;A.zX([this,this.Bd3],[B=A._GetAutoObject(A.Device.Device),B.
AEn,B.AIE],0);A.pe([this,this.Bd3],this);},HO:function(G){C.Tv.HO.call(this,G);if(
this.AjK)this.N.Cv(A.aaL(A.ach.AD));else this.N.Cv(A.aaL(A.ach.AM9));this.N.C5(A.
aaL(A.ach.Options));this.N.FN(A.jV);this.N.CX(A.jV);this.N.Ck=[this,this.A_m];this.
N.Co=[this,this.Wu];this.N.ArH(A.aaL(A.fl.Ak));this.N.Anr(A.aaL(A.fl.Ak));},MU:function(
G){this.Ben(this);},Om:function(G){this.BAc(this);},AdM:function(Aia,Aib,BwE){A.
_GetAutoObject(C.BR).ABz(Aia,Aib,[this,this.A8y,this.AS$],BwE);},Wu:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjK){A._GetAutoObject(C.BR).
Qy(A.aaR(A.acf.Bht),[this,this.Bnc]);A._GetAutoObject(C.BR).FW();}this.AdM(A.aaR(
A.acf.Rating),[this,this.ATx],3);this.AdM(A.aaR(A.acf.Afq),[this,this.ATz],2);this.
AdM(A.aaR(A.acf.Temperature),[this,this.ATy],1);this.AdM(A.aaR(A.acf.AdP),[this,
this.Bm$],0);A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Bhx
));A._GetAutoObject(A.Device.Device).Dv(6);},AS$:function(E){if(this.ATR===E)return;
this.ATR=E;A.abo([this,this.A8y,this.AS$],0);},Bd3:function(G){this.AS$(A._GetAutoObject(
A.Device.Device).D9);},A8y:function(){return this.ATR;},_Init:function(aArg){C.Tv.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vu:null
,Init:function(aArg){var B;A.zX([this,this.Af7],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);A.pe([this,this.Bf$],this);A.pe([this,this.Q6],this);},CC:function(
G){C.Tv.CC.call(this,G);A.pe([this,this.Bgf],this);},AGB:function(G){C.Tv.AGB.call(
this,G);if(!!this.Ld)this.Ahy(this.Ld,this.Vu);},HO:function(G){C.Tv.HO.call(this
,G);this.N.Cv(A.aaL(A.ach.AQL));this.N.C5(A.aaL(A.ach.AQM));if(this.AjK)this.N.ASW(
0);else this.N.ASW(1);this.N.A9E(A._GetAutoObject(A.Device.Converter).BgE(A._GetAutoObject(
A.Device.Device).D9));this.N.FN(A.jV);this.N.CX(A.jV);this.N.Ck=[this,this.Bk2];
this.N.Co=[this,this.Bne];this.N.ArH(A.aaL(A.fl.Ak));this.N.Anr(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QG()){this.N.I6.Dj(100);this.N.Ck=null;
}else this.N.I6.Dj(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Lc.
Dj(100);this.N.Co=null;}else this.N.Lc.Dj(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.TT.Dj(100);this.N.TU.Dj(100);}else{this.N.TT.Dj(255);this.N.
TU.Dj(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;if(LB>=A._GetAutoObject(A.
Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.Helper).G6(LB);},Om:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LB=A._GetAutoObject(
A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G6(LB);},Af6:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cf(94);},Bk2:function(G){A._GetAutoObject(
A.Device.Device).Dv(10);},Bne:function(G){this.Ben(this);},Q6:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mq());A.pe([this,this.Bgf
],this);},Bf$:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.Vu.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QG()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vu.R(A.aaR(A.acf.AEe));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACU(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vu.R(A.aaR(A.acf.ANZ));else this.Vu.R(A.aaR(
A.acf.ANY));}else this.Vu.R(A.aaR(A.acf.ARV));}else this.Vu.Z(false);},Bgf:function(
G){var BA$=A._GetAutoObject(A.Device.Helper).W.Id;var A3D=A._GetAutoObject(A.Device.
Device).An.LS(0,BA$);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G6(-1);else if(A3D<0)A._GetAutoObject(A.Device.Helper).G6(0);},
Af7:function(G){this.Bf$(this);this.HO(this);},_Init:function(aArg){C.Tv._Init.call(
this,aArg);C.AkL._Init.call(this.Vu={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APn);this.Vu.H(Fe);this.J(this.Vu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tv;this.Vu._Done();C.Tv._Done.call(this);},_ReInit:function(){
C.Tv._ReInit.call(this);this.Vu._ReInit();},_Mark:function(D){var B;C.Tv._Mark.call(
this,D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMl={QO:null,V5:null,AbC:null,YJ:null,Init:function(aArg){var B;var F;this.Bb(
this.QO);if(!!A._GetAutoObject(C.A$).Q){var Vh=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.ab5("%s",AZv);
return;}else{if(Vh.AjK)this.QO.T(A.aaR(A.acf.Bg));else this.QO.T(A.aaR(A.acf.ET)
);var Azo=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azo||A._GetAutoObject(
A.Device.Helper).Aq8(Azo))this.YJ.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.V5.Ar(false);this.QO.Ar(false);}}}},Adp:function(G){var Aa=(C.Cn.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dv(0);if(
Aa===this.AbC)A._GetAutoObject(C.A$).Cf(9);else if(Aa===this.V5)A._GetAutoObject(
A.Device.Device).Dv(7);else if(Aa===this.QO)this.BBF();else if(Aa===this.YJ)this.
A1b();else throw new Error(Ax_);},BBF:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZv);return;}Vh.A_m(this);},A1b:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZv);return;}Vh.Q6(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mn._Init.call(this.QO={I:this},0);C.Mn._Init.call(this.V5={I:this},
0);C.Mn._Init.call(this.AbC={I:this},0);C.Mn._Init.call(this.YJ={I:this},0);this.
__proto__=C.AMl;this.H(AfA);this.QO.H(Z$);this.QO.Ar(true);this.QO.T(A.aaR(A.acf.
ET));this.QO.Bh(true);this.V5.H(P9);this.V5.Ar(true);this.V5.T(A.aaR(A.acf.AUf));
this.V5.Bh(true);this.AbC.H(IT);this.AbC.T(A.aaR(A.acf.AkN));this.AbC.Bh(true);this.
YJ.H(BD);this.YJ.T(A.aaR(A.acf.AB4));this.YJ.Bh(true);this.J(this.QO,0);this.J(this.
V5,0);this.J(this.AbC,0);this.J(this.YJ,0);this.QO.AR=[this,this.Adp];this.V5.AR=[
this,this.Adp];this.AbC.AR=[this,this.Adp];this.YJ.AR=[this,this.Adp];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QO._Done();this.V5._Done(
);this.AbC._Done();this.YJ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QO._ReInit();this.V5._ReInit();this.AbC.
_ReInit();this.YJ._ReInit();this.QO.T(A.aaR(A.acf.ET));this.V5.T(A.aaR(A.acf.AUf
));this.AbC.T(A.aaR(A.acf.AkN));this.YJ.T(A.aaR(A.acf.AB4));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I7={TW:null,Ez:null,Yg:null,Background:null,Ap:null,Io:null,In:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10
);var IA=((Ae&0x40)===0x40);if(IA){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dj(256);}else if(Hd){this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dj(
256);}else{this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dj(128);}if(!this.
AM)this.Ap.Cu(0);else if(this.AM>0){if(A.aaZ(this.TW,[B=A._GetAutoObject(A.Device.
Device),B.Awa,B.AyG]))this.Ap.Cu(2);else if(A.aaZ(this.TW,[B=A._GetAutoObject(A.
Device.Device),B.Av$,B.AyF]))this.Ap.Cu(3);else if(!!this.Yg&&((F=this.Yg,F[1].call(
F[0]))===1))this.Ap.Cu(1);else this.Ap.Cu(0);}else if(A.aaZ(this.TW,[B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyG]))this.Ap.Cu(6);else if(A.aaZ(this.TW,[B=A._GetAutoObject(
A.Device.Device),B.Av$,B.AyF]))this.Ap.Cu(7);else if(!!this.Yg&&((F=this.Yg,F[1].
call(F[0]))===1))this.Ap.Cu(5);else this.Ap.Cu(4);},Aga:function(G){this.J$(this
);},Af$:function(G){this.J6(this);},J$:function(G){this.Bx(1);},J6:function(G){this.
Bx(-1);},Bma:function(E){if(A.aaZ(this.TW,E))return;if(!!this.TW)A.z$([this,this.
A2V],this.TW,0);this.TW=E;if(!!E)A.zX([this,this.A2V],this.TW,0);A.pe([this,this.
A2V],this);},Uh:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af_],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af_],this.Ez,0);if(!!E)A.pe([this
,this.Af_],this);},A2V:function(G){var F;if(!!this.TW)this.Bx((F=this.TW,F[1].call(
F[0])));},Af_:function(G){A.pe([this,this.BBS],this);},CT:function(E){if(this.MZ===
E)return;this.MZ=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TW)(F=this.TW,F[2].call(F[0],E));this.Am();A.abo([this,this.Uc,this.
Bx],0);},A9u:function(E){if(A.aaZ(this.Yg,E))return;if(!!this.Yg)A.z$([this,this.
Af_],this.Yg,0);this.Yg=E;if(!!E)A.zX([this,this.Af_],this.Yg,0);if(!!E)A.pe([this
,this.Af_],this);},BBS:function(G){var F,CA;if(!this.Yg||!this.Ez)return;this.Bma(
A._GetAutoObject(A.Device.Helper).BcQ((F=this.Yg,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.Am();},Uc:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);
A.Core.BK._Init.call(this.In={I:this},0);this.__proto__=C.I7;this.H(AIx);this.Background.
AZ(0x3F);this.Background.H(AIx);this.Ap.AZ(0x3C);this.Ap.H(AIx);this.Io.Filter=4;
this.In.Filter=5;this.MZ=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUF));this.Io.BL=[this,this.Aga];this.In.BL=[this,this.Af$];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Io._Done();this.In._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Io._ReInit(
);this.In._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.TW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALT={Wu:function(G){var B;var F;this.Agr();if(!!A._GetAutoObject(A.Device.Helper
).AOB((F=this.FJ,F[1].call(F[0])),0,true))this.AL1(A.aaR(A.acf.A6C),[this,this.Bnf
],[B=A._GetAutoObject(A.Device.Device),B.A7T,B.Bar]);else A._GetAutoObject(C.BR).
XI(A.aaR(A.acf.A6C));A._GetAutoObject(C.BR).FW();this.I0(A.aaR(A.acf.LinkTransponder
),[this,this.Bmr],8);this.I0(A.aaR(A.acf.Ts),[this,this.Ako],9);this.I0(A.aaR(A.
acf.A$u),[this,this.Bm4],10);this.I0(A.aaR(A.acf.AF8),[this,this.ATe],3);this.I0(
A.aaR(A.acf.AnS),[this,this.AwL],2);A._GetAutoObject(C.BR).FW();A._GetAutoObject(
C.BR).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dv(6);},DE:function(G){},Abn:function(){return C.Aqn;},Abo:function(){return C.AqU;
},Q6:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6d((F=this.FJ,F[1].call(F[0]))));},HO:function(G){var F;C.GZ.HO.
call(this,G);if(this.Akb()===false){this.N.Cv(A._GetAutoObject(A.Device.Converter
).BgG((F=this.FJ,F[1].call(F[0]))));this.N.Ck=[this,this.AIS];this.N.FN(A.jV);}this.
N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(52);},A20:
function(G){C.GZ.A20.call(this,G);A.pe([this,this.AZ7],this);},Bnf:function(G){A.
_GetAutoObject(A.Device.Device).Awg(!A._GetAutoObject(A.Device.Device).Ap9);this.
An0(this);},An0:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E_();A._GetAutoObject(A.Device.Helper).BnN(Be);if(A._GetAutoObject(A.Device.Device
).Ap9){var A1U=A._GetAutoObject(A.Device.Helper).AOB((F=this.FJ,F[1].call(F[0]))
,21600,true);Be.CV(A1U);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.ALT;var B;this.Dz(A.aaR(A.acf.
AvW));this.AwG([B=A._GetAutoObject(A.Device.Device),B.A7S,B.Baq]);},_ReInit:function(
){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.AvW));},_className:"Application::ActionListScreen"
};C.ALS={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ALS;},
_className:"Application::ActionListFilterScreen"};C.APn={IK:null,IQ:null,Bc:null
,MB:A.jV,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8C,B.A9Z],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);},De:function(E){C.II.De.call(this,E);this.IQ.L(E);},DX:function(
G){C.II.DX.call(this,G);var Azo=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azo||A._GetAutoObject(A.Device.Helper).Aq8(Azo))this.IK.Z(false);else this.IK.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqR())this.AwS(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$I)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.AwS(A$J);},AwS:function(E){if(this.MB===E)return;this.MB=E;
this.IQ.R(E);},_Init:function(aArg){C.II._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IK={I:this},0);A.acg.Text._Init.call(this.IQ={I:this},0);A.acg.C4._Init.call(
this.Bc={I:this},0);this.__proto__=C.APn;this.HP.H(Bqi);this.DS.H(Bqj);this.IK.H(
Bqk);this.IK.L(A.jb.Text);this.IQ.H(A$K);this.IQ.Hl(2);this.IQ.KQ(true);this.IQ.
A5(0x12);this.IQ.R(A$L);this.Bc.DC(Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.
J(this.IK,0);this.J(this.IQ,0);this.J(this.Bc,0);this.IK.Aw(A.aaL(A.ach.Aew));this.
IQ.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.II;this.
IK._Done();this.IQ._Done();this.Bc._Done();C.II._Done.call(this);},_ReInit:function(
){C.II._ReInit.call(this);this.IK._ReInit();this.IQ._ReInit();this.Bc._ReInit();
this.IQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.II._Mark.call(this,D);if((
B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsA={Text:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(W9);else this.Text.R(this.AC.Gk((F=this.Q,F[1].call(F[0]
))));var IA=((Ae&0x40)===0x40);if(IA)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OY._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsA;this.Text.R(Rm);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OY;this.Text._Done();C.OY.
_Done.call(this);},_ReInit:function(){C.OY._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OY._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aq5={C8:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACP(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C8.Cu(this.AC.ACR(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IA=((
Ae&0x40)===0x40);if(IA)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OY._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq5;this.H(AIx);this.C8.H(A$H);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OY;this.C8._Done();C.OY._Done.call(this);},_ReInit:function(){C.OY._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OY._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuS={VN:null,DirectionOfCountingToString:null,Aec:null,Dt:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return aIndex;
},Gk:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return A.jV;return this.
DirectionOfCountingToString.BS(aIndex);},DZ:function(A9){return A9;},H3:function(
){return this.Dt()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.VN)(F=
this.VN,F[2].call(F[0],E));},ACP:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt(
)))return null;return this.Aec.AsB(aIndex);},ACR:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dt()))return-1;return this.Aec.AsC(aIndex);},A1p:function(G){var F;
if(!!this.VN)this.Q=(F=this.VN,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},AeW:function(E){if(A.aaZ(this.VN,E))return;if(!!this.VN)A.z$([this
,this.A1p],this.VN,0);this.VN=E;if(!!this.VN)A.zX([this,this.A1p],this.VN,0);A.pe([
this,this.A1p],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aec._Init.call(this.Aec={I:this},0);this.__proto__=C.AuS;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aec._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aec._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aec)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMd={Hs:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdT:null,Dt:function(){return 4;},C7:function(aIndex){var F;var A9=-1;if((aIndex<
0)||(aIndex>=this.Dt()))return-1;switch(aIndex){case 0:A9=0;break;case 1:A9=1;break;
case 2:A9=this.ByK((F=this.Ez,F[1].call(F[0])));break;case 3:A9=5;break;default:
throw new Error(Bql+aIndex.toFixed());}return A9;},Gk:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dt()))return A.jV;return this.AnimalIdGenerationMethodToString.
BS(this.C7(aIndex));},DZ:function(A9){var aIndex=-1;switch(A9){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bqm+A9.toFixed());}return aIndex;},H3:function(){return this.
Dt()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Hs)(F=this.Hs,F[2].
call(F[0],E));},ACP:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;
return this.AdT.AsB(this.C7(aIndex));},ACR:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dt()))return-1;return this.AdT.AsC(this.C7(aIndex));},A0V:function(G){var F;
if(!!this.Hs)this.Q=(F=this.Hs,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},Bk_:function(E){if(A.aaZ(this.Hs,E))return;if(!!this.Hs)A.z$([this
,this.A0V],this.Hs,0);this.Hs=E;if(!!this.Hs)A.zX([this,this.A0V],this.Hs,0);A.pe([
this,this.A0V],this);},Uh:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af_],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af_],this.Ez
,0);A.pe([this,this.Af_],this);},Af_:function(G){A.pe([this,this.BxC],this);},ByK:
function(L4){var Ro=0;switch(L4){case 0:Ro=2;break;case 1:Ro=3;break;case 2:Ro=4;
break;default:throw new Error(Bqn+L4.toFixed());}return Ro;},BxC:function(G){var
BdO=this.C7(this.DZ(this.Q));if(this.Q!==BdO)this.At(BdO);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdT._Init.call(this.
AdT={I:this},0);this.__proto__=C.AMd;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdT._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdT._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGx={FI:null,AaV:null,Q:null,Fl:null,Fa:null,HG:null,Wm:null,AW:null,HZ:null
,Kk:null,A8:0,AM:0,Alk:0,Init:function(aArg){var B;A.zX([this,this.Bd2],[B=A._GetAutoObject(
A.Device.Device),B.Ani,B.Aot],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hj){this.AW.FM(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Wm.CT(A.jb.CJ);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FM(A.jb.CS);this.HG.
CT(A.jb.CS);this.Wm.CT(A.jb.CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hj){this.AW.FM(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Wm.CT(A.jb.CJ);}else{
this.AW.FM(A.jb.CS);this.HG.CT(A.jb.CS);this.Wm.CT(A.jb.CS);}this.Bb(null);}},IY:
function(G){C.Eg.IY.call(this,G);if(!this.A8)this.FU(this);else this.Hc(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}break;
default:this.FI.AkK((F=this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hc:
function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8&&!!this.N)this.FI.Aju((
F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A7$())this.Bb(
this.AW);else this.Bb(this.Wm);if(!this.AM)this.AW.SM(2);else this.AW.SM(7);}break;
default:throw new Error(As_+this.A8.toFixed());}this.DJ(this);this.Am();},At:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uc,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Om:function(G){this.AA3(2);},MU:function(G){this.AA3(
7);},AA3:function(Gz){var B;var Azp=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azp){var AAf=(A.Core.P.isPrototypeOf(B=this.QF(Azp,Gz,0x15))?B:null);if(!!AAf){
this.Bb(AAf);return true;}}return false;},AoU:function(G){A.pe([this,this.Bd2],this
);},A3O:function(G){var B;var F;if(!this.HZ.Hs){this.Kk.AeW(null);return;}switch((
F=this.HZ.Hs,F[1].call(F[0]))){case 0:case 1:this.Kk.AeW(null);break;case 3:this.
Kk.AeW([B=A._GetAutoObject(A.Device.Device),B.ASd,B.AZO]);break;case 2:this.Kk.AeW([
B=A._GetAutoObject(A.Device.Device),B.ASe,B.AZP]);break;case 4:case 5:this.Kk.AeW([
B=A._GetAutoObject(A.Device.Device),B.AEs,B.AII]);break;default:throw new Error(
Bqo+(F=this.HZ.Hs,F[1].call(F[0])).toFixed());}},Bd2:function(G){var F;if(!this.
HZ.Hs)return;A.pe([this,this.A3O],this);var AtO=false;switch((F=this.HZ.Hs,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtO=true;this.AW.A_f(-1);}break;case 0:
case 1:{AtO=false;this.AW.A_f(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayk+(F=this.HZ.Hs,F[1].call(F[0])).toFixed());}this.AW.Ar(AtO);this.
HG.Ar(AtO);this.HG.Z(AtO);if(((F=this.HZ.Hs,F[1].call(F[0]))!==this.Alk)||(AtO===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMb((F=this.HZ.
Hs,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BiY((F=this.HZ.Hs,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kr(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kr(0);this.Alk=(
F=this.HZ.Hs,F[1].call(F[0]));},A89:function(E){var B;if(this.AaV===E)return;if(
!!this.AaV){A.z$([this,this.AoU],[B=this.AaV,B.Ws,B.JR],0);A.z$([this,this.AoU],[
B=this.AaV,B.Anm,B.Nd],0);A.z$([this,this.AoU],[B=this.AaV,B.Ars,B.PQ],0);this.HZ.
Uh(null);}this.AaV=E;if(!!E){A.zX([this,this.AoU],[B=this.AaV,B.Ws,B.JR],0);A.zX([
this,this.AoU],[B=this.AaV,B.Anm,B.Nd],0);A.zX([this,this.AoU],[B=this.AaV,B.Ars
,B.PQ],0);this.HZ.Uh([B=this.AaV,B.Ws,B.JR]);}if(!!E)A.pe([this,this.AoU],this);
},Uc:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0
);C.Aq5._Init.call(this.HG={I:this},0);C.Aq5._Init.call(this.Wm={I:this},0);C.AvH.
_Init.call(this.AW={I:this},0);C.AMd._Init.call(this.HZ={I:this},0);C.AuS._Init.
call(this.Kk={I:this},0);this.__proto__=C.AGx;var B;this.H(UT);this.V.Ar(false);
this.V.R(As2);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fa.Filter=7;this.HG.H(Bqp);
this.HG.Ar(false);this.Wm.H(Bqq);this.AW.H(Bqr);this.AW.Ar(false);this.J(this.HG
,0);this.J(this.Wm,0);this.J(this.AW,0);this.FI=A._NewObject(C.Aeo,0);this.Fl.BL=[
this,this.Om];this.Fa.BL=[this,this.MU];this.HG.CK(this.Kk);this.HG.At([B=this.Kk
,B.B_,B.B$]);this.Wm.CK(this.HZ);this.Wm.At([B=this.HZ,B.B_,B.B$]);this.AW.At([this
,this.Uc,this.Bx]);this.HZ.Bk_([B=A._GetAutoObject(A.Device.Device),B.Ani,B.Aot]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fa.
_Done();this.HG._Done();this.Wm._Done();this.AW._Done();this.HZ._Done();this.Kk.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fl._ReInit();this.Fa._ReInit();this.HG._ReInit();this.Wm._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Kk._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G3={AzH:null,Fl:null,Fa:null,G0:null,
F0:null,EM:null,M4:0,AMR:0,ABU:0,Un:0,A$r:-1,AMQ:false,Init:function(aArg){A.pe([
this,this.A0i],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AMQ);this.EM.H(A.wC(this.Yl(this.ABU).M,this.Yl((this.ABU+this.AMR)-1).M));},Om:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A0_=this.BfA(2);if(A0_===
false)D5.NH=true;},MU:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A0_=this.BfA(7);if(A0_===false)D5.NH=true;},BfA:function(Gz){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.BcS(DV,Gz,true);if(!!DV){this.Bb(DV);this.
AzH=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Ado:function(
G){A.ab5("%s",Ak9);},GU:function(s){this.Ado(s);},FM:function(E){if(this.M4===E)
return;this.M4=E;this.F0.CT(E);this.G0.CT(E);},SM:function(Gz){var B;switch(Gz){
case 2:this.Bb(this.G0);break;case 7:this.Bb(this.F0);break;default:A.ab5("%s%e"
,Bqs,Gz);}this.AzH=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LN:function(G){},A0i:
function(s){this.LN(s);},AEP:function(E){if(this.AMQ===E)return;this.AMQ=E;this.
Am();},A9d:function(E){if(this.AMR===E)return;this.AMR=E;this.Am();},A9c:function(
E){if(this.ABU===E)return;this.ABU=E;this.Am();},Yl:function(Hz){var B5=null;switch(
Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.G0;break;default:A.ab5("%s",AhY
);}return B5;},Kr:function(E){if(this.Un===E)return;this.Un=E;this.Amf();},Amf:function(
){A.ab5("%s",Ak9);},BcS:function(AcW,Gz,LF){var B;if(!!AcW){var Be;if(LF)Be=0x11;
else Be=0x0;switch(Gz){case 2:AcW=(C.DF.isPrototypeOf(B=this.AqF(AcW,Be))?B:null
);break;case 7:AcW=(C.DF.isPrototypeOf(B=this.TJ(AcW,Be))?B:null);break;default:
throw new Error(Bqt);}}return AcW;},A_f:function(E){if(this.A$r===E)return;this.
A$r=E;var DV=this.F0;var A1x;while(!!DV){A1x=!!E;DV.Ar(A1x);DV.Z(A1x);if(DV===this.
AzH)this.Bb(DV);DV=this.BcS(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.
call(this.Fa={I:this},0);C.DF._Init.call(this.G0={I:this},0);C.DF._Init.call(this.
F0={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.G3;this.
H(Bqu);this.Fl.Filter=6;this.Fa.Filter=7;this.M4=A.jb.CJ;this.G0.H(E6);this.F0.H(
A$M);this.EM.H(Bqv);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.G0,0);this.J(this.
F0,0);this.J(this.EM,0);this.Fl.BL=[this,this.Om];this.Fl.D1=[this,this.Om];this.
Fa.BL=[this,this.MU];this.Fa.D1=[this,this.MU];this.AzH=this.F0;this.G0.Di=[this
,this.GU];this.F0.Di=[this,this.GU];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fl._Done();this.Fa._Done();this.G0._Done();this.F0._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fl._ReInit();this.Fa._ReInit();this.G0._ReInit();this.F0._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzH)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQR={Dx:null,CU:null,Cs:null
,FM:function(E){if(this.M4===E)return;C.HJ.FM.call(this,E);this.Cs.CT(E);this.CU.
CT(E);this.Dx.CT(E);},Yl:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.
F0;break;case 1:B5=this.Cs;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;
case 4:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Cs={I:this},0);this.__proto__=C.AQR;this.
H(Bqw);this.G0.H(As9);this.Dx.H(A$N);this.CU.H(A$O);this.Cs.H(A$P);this.F0.H(Bqx
);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Cs,-2);this.Dx.Di=[this,this.
GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HJ;this.Dx._Done();this.CU._Done();this.Cs._Done();C.HJ._Done.call(this
);},_ReInit:function(){C.HJ._ReInit.call(this);this.Dx._ReInit();this.CU._ReInit(
);this.Cs._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVg={Q_:null,AcC:null,AVf:0,CC:function(G){this.AcC.Ar(true);},E4:function(G
){this.AcC.Ar(false);},Bm2:function(E){if(this.AVf===E)return;this.AVf=E;this.Q_.
R((((A.aaR(A.acf.AVe)+AcN)+E.toFixed())+Bqy)+A.aaR(A.acf.La));},BkW:function(){return this.
AVf;},BAx:function(G){A._GetAutoObject(C.A$).Cf(3);A._GetAutoObject(A.Device.Device
).Anp(1);},_Init:function(aArg){C.XV._Init.call(this,aArg);C.CH._Init.call(this.
Q_={I:this},0);A.acl.Gl._Init.call(this.AcC={I:this},0);this.__proto__=C.AVg;this.
AeI.H(Bqz);this.Ux.R(A.jV);this.Q_.H(BqA);this.Q_.R(A.aaR(A.acf.AVe)+A$Q);this.Q_.
L(A.jb.Text);this.AcC.HM(1);this.AcC.Fp(5000);this.AcC.B2=100;this.J(this.Q_,0);
this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.Q_.Ct(A.aaL(A.fl.Bi));
this.AcC.Sy=[this,this.BAx];this.AcC.Q=[this,this.BkW,this.Bm2];},_Done:function(
){this.__proto__=C.XV;this.Q_._Done();this.AcC._Done();C.XV._Done.call(this);},_ReInit:
function(){C.XV._ReInit.call(this);this.Q_._ReInit();this.AcC._ReInit();this.Q_.
R(A.aaR(A.acf.AVe)+A$Q);this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.
Q_.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.XV._Mark.call(this,D);if((B=this.
Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARJ={K3:null,Li:null,BdD:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K3)this.K3.Ev(this
);C.Wo.Ev.call(this,G);},Agb:function(G){var B;if(!!this.K3)this.K3.Agb(this);C.
Wo.Agb.call(this,G);},CC:function(G){var B;if(!this.BdD){this.BdD=true;A.pe([this
,this.A3i],this);}else if(!this.K3){this.K3=A._NewObject(C.ARL,0);this.K3.A9r([this
,this.AAS]);this.LN(this);this.K3.LN(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wo.CC.call(this,G);}else C.Wo.CC.call(this,G
);},ApY:function(G){var B;if(!!this.K3)this.K3.ApY(this);},AAS:function(G){var B;
var F;this.LN(this);this.K3.LN(this);A.pe([this,this.AcO],this);var Bde=this.LU;
this.AeT(A._GetAutoObject(A.Device.Helper).Abl(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVd(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bde);if(Bde)A._GetAutoObject(
A.Device.Helper).W.PQ(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SF(A._GetAutoObject(A.Device.Helper).AMb((F=this.Dh.HZ.Hs,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JF(this.C$);},A3i:function(
G){A._GetAutoObject(C.A$).Cf(79);},_Init:function(aArg){C.Wo._Init.call(this,aArg
);C.Q9._Init.call(this.Li={I:this},0);this.__proto__=C.ARJ;var B;this.Li.H(AhV);
this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ACj));this.J(this.Li,-9);this.JW(this.Gm,-
1);this.Li.Gr([this,this.D_,this.GQ]);this.Li.At([B=A._GetAutoObject(A.Device.Helper
).W,B.ASn,B.Anx]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wo;this.Li.
_Done();C.Wo._Done.call(this);},_ReInit:function(){C.Wo._ReInit.call(this);this.
Li._ReInit();this.Li.T(A.aaR(A.acf.ACj));},_Mark:function(D){var B;C.Wo._Mark.call(
this,D);if((B=this.K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADH={AgK:null,AgL:null,NK:null,NJ:null,ES:null,FZ:null,Ep:null,Dx:null,CU:null,Cs:
null,FM:function(E){if(this.M4===E)return;C.Le.FM.call(this,E);this.Cs.CT(E);this.
CU.CT(E);this.Dx.CT(E);this.Ep.CT(E);this.FZ.CT(E);this.ES.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgL.CT(E);this.AgK.CT(E);},Yl:function(Hz){var B5=null;switch(Hz){
case-1:case 0:B5=this.F0;break;case 1:B5=this.Cs;break;case 2:B5=this.CU;break;case
3:B5=this.Dx;break;case 4:B5=this.Ep;break;case 5:B5=this.FZ;break;case 6:B5=this.
ES;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgL;break;
case 10:B5=this.AgK;break;case 11:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;
},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(this.AgK={I:this
},0);C.DF._Init.call(this.AgL={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cs={I:this
},0);this.__proto__=C.ADH;this.H(BqB);this.G0.H(AIy);this.AgK.H(Ayu);this.AgL.H(
AZw);this.NK.H(AZx);this.NJ.H(AZy);this.ES.H(AZz);this.FZ.H(AZA);this.Ep.H(AZB);
this.Dx.H(A$R);this.CU.H(AZC);this.Cs.H(BqC);this.F0.H(BqD);this.J(this.AgK,-2);
this.J(this.AgL,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ES,-2);this.
J(this.FZ,-2);this.J(this.Ep,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.
Cs,-2);this.AgK.Di=[this,this.GU];this.AgL.Di=[this,this.GU];this.NK.Di=[this,this.
GU];this.NJ.Di=[this,this.GU];this.ES.Di=[this,this.GU];this.FZ.Di=[this,this.GU
];this.Ep.Di=[this,this.GU];this.Dx.Di=[this,this.GU];this.CU.Di=[this,this.GU];
this.Cs.Di=[this,this.GU];},_Done:function(){this.__proto__=C.Le;this.AgK._Done(
);this.AgL._Done();this.NK._Done();this.NJ._Done();this.ES._Done();this.FZ._Done(
);this.Ep._Done();this.Dx._Done();this.CU._Done();this.Cs._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.AgK._ReInit();this.AgL._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ES._ReInit();this.FZ._ReInit();this.Ep.
_ReInit();this.Dx._ReInit();this.CU._ReInit();this.Cs._ReInit();},_Mark:function(
D){var B;C.Le._Mark.call(this,D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HJ={Q:null,AM:0,Ai:function(Ae){C.G3.Ai.call(this
,Ae);this.Amf();},Ado:function(G){var B;var F;var Iy=A.jV;var B5=this.G0;while(!
!B5){if(B5.Ey>0)Iy=Iy+B5.Ey.toFixed();else Iy=Iy+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TJ(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(Iy,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LN:function(G){},Amf:function(){var B;var F;if(!!this.Q){var DV=this.F0;
var Adx=this.Un;var A9=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A9>0){DV.LZ(A9%
10);A9=(A9/10)|0;}else if(Adx>0)DV.LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=
this.AqF(DV,0x11))?B:null);Adx=Adx-1;}}},C2:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G3._Init.call(this,aArg);this.__proto__=C.HJ;},_Mark:
function(D){var B;C.G3._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Le={AM:0,Q:null
,Ai:function(Ae){C.G3.Ai.call(this,Ae);this.Amf();},Ado:function(G){var B;var F;
var Iy=A.jV;var B5=this.G0;while(!!B5){if(B5.Ey>0)Iy=Iy+B5.Ey.toFixed();else Iy=
Iy+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TJ(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(Iy,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LN:function(G){},Amf:function(){var B;
var F;if(!!this.Q){var DV=this.F0;var Adx=this.Un;var A9=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A9>0){DV.LZ((A9%10)|0);A9=Math.trunc(A9/10);}else if(Adx>0)DV.
LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.AqF(DV,0x11))?B:null);Adx=Adx-
1;}}},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G3._Init.call(
this,aArg);this.__proto__=C.Le;},_Mark:function(D){var B;C.G3._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dt:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvH={Ep:null,Dx:null,CU:null,Cs:null,FM:function(E){if(this.M4===E)return;C.
HJ.FM.call(this,E);this.Cs.CT(E);this.CU.CT(E);this.Dx.CT(E);this.Ep.CT(E);},Yl:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cs;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Ep;break;
case 5:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(
this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cs={
I:this},0);this.__proto__=C.AvH;this.H(Ayc);this.G0.H(AHE);this.Ep.H(AHF);this.Dx.
H(AHG);this.CU.H(AHH);this.Cs.H(AHI);this.F0.H(AHJ);this.EM.H(A$S);this.J(this.Ep
,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Cs,-2);this.Ep.Di=[this,this.
GU];this.Dx.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU
];},_Done:function(){this.__proto__=C.HJ;this.Ep._Done();this.Dx._Done();this.CU.
_Done();this.Cs._Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.
call(this);this.Ep._ReInit();this.Dx._ReInit();this.CU._ReInit();this.Cs._ReInit(
);},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Ep)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUn={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Boa(0);this.AttributeSet.Bob(1);this.AttributeSet.Boc(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var IA=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=
A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);this.
AttributeSet.Ahj(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahj(A.jb.Bm);}else if(IA){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahj(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.
AmW);this.V.L(A.jb.Bm);this.AttributeSet.Ahj(A.jb.Bm);}else{this.Background.L(FQ
);this.V.L(GW);this.AttributeSet.Ahj(GW);}this.LF=Hd;this.KD=Fu;this.Qp=GE;this.
Apa=IA;},Hk:function(G){var B;var Gf=this.Dy.G4;var Cz=(A.acg.AuF.isPrototypeOf(
B=this.Dy.Ch)?B:null);Cz.A8$(this.AttributeSet);Cz.A5(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByD(this.AC.Gk(Gf)));else Cz.R(W9);Cz.H(A.abK(Cz.M,[this.Dy.V9,(B=this.
Dy.M)[3]-B[1]]));},ByD:function(Bw3){var AAC=Bw3;AAC=A._GetAutoObject(A.Device.Helper
).Nk(AAC,BqE,BqF);AAC=A._GetAutoObject(A.Device.Helper).Nk(AAC,BqG,BqH);return BqI+
AAC;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUn;this.Dy.H(BqJ);this.Dy.Jw(2);
this.Dy.NZ(A.acg.AuF);this.AttributeSet.Ahj(this.V.AQ);this.AttributeSet.BlU(A.aaL(
A.fl.AOs));this.AttributeSet.A9B(A.aaL(A.fl.Ak));this.AttributeSet.Ahm(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9B(A.aaL(A.fl.Ak));this.AttributeSet.Ahm(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asq._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.AC9);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dt:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gk:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BS(aIndex
);},DZ:function(A9){return A9;},H3:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OR={FI:null,EnumToCodeset:
null,Ju:null,A8:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A8===1){
if(this.Hj){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BW.Bx.call(this,E);var Bzx=this.
EnumToCodeset.Amx(this.Number);var BdN=this.AC.C7(this.AM);if(Bzx!==BdN){this.AFo(
this.EnumToCodeset.Aef(BdN));A.abo([this,this.ASo,this.AFo],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(
A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=
this.N,F[1].call(F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}break;default:
this.FI.AkK((F=this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hc:function(
G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8)this.FI.Aju((F=this.N,F[1].call(
F[0])));this.A8=EN;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1K();this.Am();},AFo:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqN()>E)E=this.EnumToCodeset.
AqN();if(this.EnumToCodeset.H3()<E)E=this.EnumToCodeset.H3();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var Byt=this.EnumToCodeset.Amx(E);this.Bx(this.
AC.DZ(Byt));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Anq:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U8:function(G){this.Ew(this.A8+1);},A1K:function(){A.ab5(
"%s",BqK);},ASo:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BK._Init.call(this.Ju={I:this},0);this.__proto__=C.OR;this.
Ju.Filter=1;this.FI=A._NewObject(C.Aeo,0);this.Ju.BL=[this,this.U8];},_Done:function(
){this.__proto__=C.BW;this.Ju._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Ju._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeP={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACK);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rf(this.AM));this.
Am();},AaD:function(G){A.pe([this,this.Af9],this);},AaB:function(G){A.pe([this,this.
Af9],this);},AlR:function(G){A.pe([this,this.Af9],this);},Af9:function(G){if((!this.
Ii||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeP;this.Text.AZ(0x3F
);this.Text.H(AsW);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARC={GI:0,C6:null,AW:null,E$:null,
I7:null,CountryToString:null,K_:0,L$:false,Init:function(aArg){A.zX([this,this.MH
],[this,this.Sz,this.Ln],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I7.Z(this.
Afk);this.AW.FM(this.LQ);this.E$.CT(this.LQ);this.I7.CT(this.LQ);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CX(this.CountryToString.BS(this.K_));(F=this.N,
F[1].call(F[0])).Co=null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}}},Ew:function(EN){var Tj=this.
A8;this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>this.RF)this.A8=this.RF;if((
this.A8===1)&&!this.Afk)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GI)this.Ln(0);}break;case 1:this.Bb(this.I7);break;case 2:this.Bb(this.E$);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tj>0))this.AW.SM(2);else this.AW.SM(7);}break;
default:throw new Error(As_+this.A8.toFixed());}C.Ek.Ew.call(this,this.A8);},Api:
function(G){this.I7.Uh(this.Ez);},AaD:function(G){var F;this.AW.A9c((F=this.AF,F[
1].call(F[0])));},AaB:function(G){var F;this.AW.A9d((F=this.A1,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SB(A._GetAutoObject(
A.Device.Helper).Sg(E,0,12));this.Ln(A._GetAutoObject(A.Device.Converter).ZV(E));
this.L$=false;if(!!E)this.AW.Kr(12);else this.AW.Kr(0);this.Am();},AlR:function(
G){A.pe([this,this.Af9],this);},FU:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ACY());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjH:function(){return this.
GI;},AjJ:function(){return 999999999999;},Ln:function(E){if(this.K_===E)return;this.
K_=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Sz,this.Ln],0
);},SB:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbU,this.SB],0);},Vj:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af9:function(G){var F;if((!this.Ii||
!this.A1)||!this.AF)return;if(!(F=this.Ii,F[1].call(F[0])))this.AW.AEP(true);else
this.AW.AEP(false);},Sz:function(){return this.K_;},AbU:function(){return this.GI;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C6._Init.call(this.C6={I:this
},0);C.ADH._Init.call(this.AW={I:this},0);C.AsA._Init.call(this.E$={I:this},0);C.
I7._Init.call(this.I7={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARC;var B;this.RF=3;this.AW.H(BqL);this.E$.H(A$T);this.
I7.H(A$U);this.J(this.AW,0);this.J(this.E$,0);this.J(this.I7,0);this.C6.AEV([this
,this.Sz,this.Ln]);this.AW.At([this,this.AbU,this.SB]);this.E$.CK(this.C6);this.
E$.At([B=this.C6,B.B_,B.B$]);this.I7.A9u([B=A._GetAutoObject(A.Device.Device),B.
Av6,B.AyC]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done(
);this.AW._Done();this.E$._Done();this.I7._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.E$._ReInit();this.I7._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARB={GI:0,C6:null,AW:null,Yz:null,Ko:null,E$:null,I7:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pu:0,K_:0,L$:false,Init:function(aArg){A.
zX([this,this.MH],[this,this.PN,this.EB],0);A.zX([this,this.MH],[this,this.Sz,this.
Ln],0);A.zX([this,this.MH],[this,this.Ank,this.Ahn],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I7.Z(this.Afk);this.AW.FM(this.LQ);this.Yz.FM(this.LQ);this.Ko.
FM(this.LQ);this.E$.CT(this.LQ);this.I7.CT(this.LQ);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.
N,F[1].call(F[0])).CX(this.CountryToString.BS(this.K_));(F=this.N,F[1].call(F[0]
)).Co=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CX(((A.aaR(A.acf.AGG)+A.aaR(A.acf.Colon))+AcN)+A.aaR(A.
acf.Bg0));break;case 1:(F=this.N,F[1].call(F[0])).CX(((A.aaR(A.acf.AGG)+A.aaR(A.
acf.Colon))+AcN)+A.aaR(A.acf.Bog));break;case 2:(F=this.N,F[1].call(F[0])).CX(((
A.aaR(A.acf.AGG)+A.aaR(A.acf.Colon))+AcN)+A.aaR(A.acf.BhU));break;default:(F=this.
N,F[1].call(F[0])).CX(((A.aaR(A.acf.AGG)+A.aaR(A.acf.Colon))+AcN)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Co=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0
])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null
);(F=this.N,F[1].call(F[0])).CX((A.aaR(A.acf.EV)+Ax4)+this.GermanStateToString.Lt(
A._GetAutoObject(A.Device.Converter).ACN(this.Pu)));(F=this.N,F[1].call(F[0])).Co=
null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[
1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(
A.jV);(F=this.N,F[1].call(F[0])).Co=null;}}},Ew:function(EN){var Tj=this.A8;if(EN<
0)EN=0;else if(EN>this.RF)EN=this.RF;if((EN===1)&&!this.Afk)EN=2;switch(EN){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pu)this.Ln(0);}break;case
1:this.Bb(this.I7);break;case 2:this.Bb(this.E$);break;case 3:if(!Tj)A.pe([this,
this.BAL],this);else this.Bb(this.Yz);break;case 4:this.Bb(this.Ko);break;case 5:
if(((Tj===4)&&!this.Pu)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tj>
0))this.AW.SM(2);else this.AW.SM(7);}break;default:throw new Error(As_+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,this.A8);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.L$=true;this.SB(A._GetAutoObject(A.Device.Helper).Sg(E,0,8));this.
Ahn(A._GetAutoObject(A.Device.Helper).Sg(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Sg(E,10,2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).ZV(E));this.L$=
false;if(!!this.AM){this.Yz.Kr(2);this.Ko.Kr(2);this.AW.Kr(8);}else{this.Yz.Kr(0
);this.Ko.Kr(0);this.AW.Kr(0);}this.Am();},Api:function(G){this.I7.Uh(this.Ez);}
,AaD:function(G){var F;this.AW.A9c((F=this.AF,F[1].call(F[0])));},AaB:function(G
){var F;this.AW.A9d((F=this.A1,F[1].call(F[0])));},AlR:function(G){A.pe([this,this.
Af9],this);},FU:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(
A.Device.Helper).ACY());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RF);},AjH:function(){return this.
GI;},AjJ:function(){return 99999999;},Ln:function(E){if(this.K_===E)return;this.
K_=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Sz,this.Ln],0
);},SB:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbU,this.SB],0);},Vj:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pu,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af9:function(G){var F;if((!this.Ii||!this.A1)||!this.AF)return;if(!(F=this.
Ii,F[1].call(F[0])))this.AW.AEP(true);else this.AW.AEP(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L$===false)A.pe([this,this.
Vj],this);A.abo([this,this.PN,this.EB],0);},Ahn:function(E){if(this.Pu===E)return;
this.Pu=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Ank,this.
Ahn],0);},BAL:function(G){var F;if(!!this.JJ){var Ib=(F=this.JJ,F[1].call(F[0]));
var A0W=0;switch(Ib){case 0:case 1:A0W=0;break;case 2:A0W=1;break;default:A.ab5(
"%s%e",Ak8,Ib);}this.EB(A0W);}if(!this.Pu)this.Ew(4);else this.Ew(5);},Sz:function(
){return this.K_;},AbU:function(){return this.GI;},PN:function(){return this.AnimalType;
},Ank:function(){return this.Pu;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.AQS._Init.call(this.AW={I:this},0);C.AvG.
_Init.call(this.Yz={I:this},0);C.AvG._Init.call(this.Ko={I:this},0);C.AsA._Init.
call(this.E$={I:this},0);C.I7._Init.call(this.I7={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARB;var B;this.RF=5;this.AW.H(
BqM);this.Yz.H(BqN);this.Yz.EU(2);this.Ko.H(BqO);this.Ko.EU(16);this.E$.H(A$T);this.
I7.H(A$U);this.J(this.AW,0);this.J(this.Yz,0);this.J(this.Ko,0);this.J(this.E$,0
);this.J(this.I7,0);this.C6.AEV([this,this.Sz,this.Ln]);this.AW.At([this,this.AbU
,this.SB]);this.Yz.At([this,this.PN,this.EB]);this.Ko.At([this,this.Ank,this.Ahn
]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.I7.A9u([B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyC]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C6._Done();this.AW._Done();this.Yz._Done();this.Ko._Done();this.E$._Done(
);this.I7._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.Yz._ReInit();this.Ko._ReInit();this.E$._ReInit();this.I7.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awf:null,OE:null,
Q:null,Ez:null,A1:null,AF:null,Ii:null,N:null,JJ:null,Fl:null,Fa:null,ACK:0,LQ:0
,A8:0,RF:0,Afk:true,Init:function(aArg){A.pe([this,this.LN],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},BlW:function(E){if(this.
ACK===E)return;this.ACK=E;this.Am();},Wv:function(E){if(this.LQ===E)return;this.
LQ=E;this.Am();},DJ:function(G){A.ab5("%s",Ak9);},MH:function(s){this.DJ(s);},Ew:
function(EN){A.pe([this,this.MH],this);A.pe(this.Awf,this);if(!EN)A.pe(this.OE,this
);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aos);},Om:function(G){if(this.A8>1)this.Ew(this.A8-1);},MU:function(
G){if((this.A8>0)&&(this.A8<this.RF))this.Ew(this.A8+1);},Uh:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.AZ$],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.AZ$],this.Ez,0);A.pe([this,this.AZ$],this);},Api:function(G){},AZ$:
function(s){this.Api(s);},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0d],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0d],E,0);if(!
!E)A.pe([this,this.A0d],this);},PO:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0f],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0f],E,0);if(
!!E)A.pe([this,this.A0f],this);},AaD:function(G){},A0f:function(s){this.AaD(s);}
,AaB:function(G){},A0d:function(s){this.AaB(s);},Uf:function(E){if(A.aaZ(this.Ii
,E))return;if(!!this.Ii)A.z$([this,this.A0c],this.Ii,0);this.Ii=E;if(!!E)A.zX([this
,this.A0c],E,0);if(!!E)A.pe([this,this.A0c],this);},AlR:function(G){},A0c:function(
s){this.AlR(s);},FU:function(G){A.ab5("%s",A$V);},BFX:function(s){this.FU(s);},Hc:
function(G){this.Ew(0);},AjH:function(){A.ab5("%s",Aos);return 0;},AjJ:function(
){A.ab5("%s",Aos);return 0;},LN:function(G){},Ano:function(E){if(A.aaZ(this.JJ,E
))return;if(!!this.JJ)A.z$([this,this.AoT],this.JJ,0);this.JJ=E;if(!!E)A.zX([this
,this.AoT],this.JJ,0);A.pe([this,this.AoT],this);},AoT:function(G){},AE7:function(
E){if(A.aa0(this.OE,E))return;this.OE=E;},AFA:function(E){if(this.Afk===E)return;
this.Afk=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.
__proto__=C.Ek;this.H(AsW);this.ACK=A.jb.Text;this.LQ=A.jb.CS;this.Fl.Filter=6;this.
Fa.Filter=7;this.Fl.BL=[this,this.Om];this.Fa.BL=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fl._Done();this.Fa._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fl._ReInit(
);this.Fa._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OE)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ii)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JJ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q9={AM:0,Dp:null,FI:
null,OE:null,Ez:null,A1:null,AF:null,Ii:null,Q:null,JJ:null,AEc:-1,Afk:true,ANX:
false,ATK:false,Asb:true,Init:function(aArg){A.pe([this,this.ABm],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hj){this.Dp.
Wv(A.jb.CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.Wv(A.jb.
CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hj)this.Dp.Wv(
A.jb.CJ);else this.Dp.Wv(A.jb.CS);this.Dp.BlW(this.V.AQ);}},IY:function(G){C.Eg.
IY.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FU(this);else this.Hc(this
);},Gr:function(E){C.Eg.Gr.call(this,E);if(!!this.Dp)this.Dp.N=E;},Uh:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Api],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Api],this.Ez,0);A.pe([this,this.Api],this);},Api:function(
G){if(!!this.Dp)this.Dp.Uh(this.Ez);},OL:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OL(E);},PO:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PO(E);},Uf:function(E){if(A.aaZ(this.Ii,E))return;
this.Ii=E;if(!!this.Dp)this.Dp.Uf(E);},BBg:function(G){var AAk=0;if(!!this.Dp){AAk=
this.Dp.A8;this.Dp.N=null;this.HN(this.Dp);}switch(this.AEc){case 0:this.Dp=A._NewObject(
C.AeP,0);break;case 1:this.Dp=A._NewObject(C.ARC,0);break;case 2:this.Dp=A._NewObject(
C.ARB,0);break;case 3:this.Dp=A._NewObject(C.ATM,0);break;case 4:this.Dp=A._NewObject(
C.ATL,0);break;case 5:this.Dp=A._NewObject(C.ARD,0);break;default:throw new Error(
BqP+this.AEc.toFixed());}this.J(this.Dp,0);this.Dp.Ano(this.JJ);this.Dp.H(BqQ);this.
Dp.N=this.N;this.Dp.Uh(this.Ez);this.Dp.Awf=[this,this.Awf];this.Dp.At([this,this.
Uc,this.Bx]);this.Dp.Uf(this.Ii);this.Dp.OL(this.A1);this.Dp.PO(this.AF);this.Dp.
AE7(this.OE);this.Dp.AFA(this.Afk);if(AAk>0)this.Dp.Ew(AAk);this.Bb(this.Dp);this.
Am();},FU:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FI.Aju((F=this.
N,F[1].call(F[0])));else this.FI=A._NewObject(C.Aeo,0);this.Dp.FU(this);}},Hc:function(
G){var B;if(!!this.Dp)this.Dp.Hc(this);},AjH:function(){if(!this.Dp)return 0;return this.
Dp.AjH();},AjJ:function(){if(!this.Dp)return 0;return this.Dp.AjJ();},C2:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uc,this.
Bx],0);}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABm],this);},Bmz:function(
E){if(this.AEc===E)return;this.AEc=E;A.pe([this,this.BBg],this);},ArU:function(E
){if(this.Asb===E)return;this.Asb=E;A.pe([this,this.ABm],this);},ABm:function(G){
var Apt;if(this.Asb){if(this.ANX)Apt=5;else Apt=0;}else if(this.ATK){if(A._GetAutoObject(
A.Device.Converter).ZV(this.AM)===10)Apt=4;else Apt=3;}else if(A._GetAutoObject(
A.Device.Converter).ZV(this.AM)===10)Apt=2;else Apt=1;this.Bmz(Apt);},Awf:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FI.AkK((F=this.N,F[1].call(F[
0])));this.Am();},Ano:function(E){if(A.aaZ(this.JJ,E))return;if(!!this.JJ)A.z$([
this,this.AoT],this.JJ,0);this.JJ=E;if(!!E)A.zX([this,this.AoT],this.JJ,0);A.pe([
this,this.AoT],this);},AoT:function(G){if(!!this.Dp)this.Dp.Ano(this.JJ);},A9W:function(
E){if(this.ATK===E)return;this.ATK=E;A.pe([this,this.ABm],this);},Bls:function(E
){if(this.ANX===E)return;this.ANX=E;A.pe([this,this.ABm],this);},AE7:function(E){
if(A.aa0(this.OE,E))return;this.OE=E;if(!!this.Dp)this.Dp.AE7(E);},AFA:function(
E){if(this.Afk===E)return;this.Afk=E;if(!!this.Dp)this.Dp.AFA(E);},Uc:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q9;this.H(UT);this.V.R(As2);this.V.L(A.jb.Bm);this.FI=A._NewObject(C.Aeo,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ii
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQS={ES:null,FZ:null,Ep:null,Dx:null,CU:null
,Cs:null,FM:function(E){if(this.M4===E)return;C.Le.FM.call(this,E);this.Cs.CT(E);
this.CU.CT(E);this.Dx.CT(E);this.Ep.CT(E);this.FZ.CT(E);this.ES.CT(E);},Yl:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cs;break;
case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Ep;break;case 5:B5=
this.FZ;break;case 6:B5=this.ES;break;case 7:B5=this.G0;break;default:A.ab5("%s"
,AhY);}return B5;},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(
this.ES={I:this},0);C.DF._Init.call(this.FZ={I:this},0);C.DF._Init.call(this.Ep={
I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Cs={I:this},0);this.__proto__=C.AQS;this.H(BqR);this.G0.
H(AIy);this.ES.H(Ayu);this.FZ.H(AZw);this.Ep.H(AZx);this.Dx.H(AZy);this.CU.H(AZz
);this.Cs.H(AZA);this.F0.H(AZB);this.EM.H(A$S);this.J(this.ES,-2);this.J(this.FZ
,-2);this.J(this.Ep,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Cs,-2);
this.ES.Di=[this,this.GU];this.FZ.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.
Dx.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:
function(){this.__proto__=C.Le;this.ES._Done();this.FZ._Done();this.Ep._Done();this.
Dx._Done();this.CU._Done();this.Cs._Done();C.Le._Done.call(this);},_ReInit:function(
){C.Le._ReInit.call(this);this.ES._ReInit();this.FZ._ReInit();this.Ep._ReInit();
this.Dx._ReInit();this.CU._ReInit();this.Cs._ReInit();},_Mark:function(D){var B;
C.Le._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvG={Q:null,G0:null,F0:null,EM:null,Io:null,In:null,M4:0,Un:0,AM:0,F$:99,Init:
function(aArg){A.pe([this,this.LN],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yl(0).M,this.Yl(-1).M));var IA=((Ae&
0x40)===0x40);if(IA){this.BfB(A.jb.AV);this.BfC(A.jb.Bm);}else{this.BfB(this.M4);
this.BfC(A.jb.Text);}this.Amf();},FM:function(E){if(this.M4===E)return;this.M4=E;
this.Am();},LN:function(G){},Yl:function(Hz){var B5=null;switch(Hz){case-1:case 0:
B5=this.F0;break;case 1:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},Kr:
function(E){if(this.Un===E)return;this.Un=E;this.Amf();},Amf:function(){var B;var
F;if(!!this.Q){var DV=this.F0;var Adx=this.Un;var A9=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A9>0){DV.LZ(A9%10);A9=(A9/10)|0;}else if(Adx>0)DV.LZ(0);else DV.LZ(-
1);DV=(C.Ey.isPrototypeOf(B=this.AqF(DV,0x11))?B:null);Adx=Adx-1;}}},Aga:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af$:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F$)E=this.F$;if(this.AM===E)return;
this.AM=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=E;this.Am();}
,BfB:function(aColor){this.F0.CT(aColor);this.G0.CT(aColor);},BfC:function(aColor
){this.F0.Zn(aColor);this.G0.Zn(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.G0={I:this},0);C.Ey._Init.call(this.F0={I:this},
0);A.acg.BU._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Io={I:this}
,0);A.Core.BK._Init.call(this.In={I:this},0);this.__proto__=C.AvG;this.H(BqS);this.
M4=A.jb.CJ;this.G0.H(AIy);this.F0.H(Ayu);this.EM.H(Ayu);this.EM.Ng(2);this.EM.L(
A.jb.E1);this.Io.Filter=4;this.In.Filter=5;this.J(this.G0,0);this.J(this.F0,0);this.
J(this.EM,0);this.Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];this.In.BL=[this
,this.Af$];this.In.D1=[this,this.Af$];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G0._Done();this.F0._Done();this.EM._Done();this.Io._Done();this.In.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G0._ReInit();this.F0._ReInit();this.EM._ReInit();this.Io._ReInit();this.In.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgD:
null,Background:null,Text:null,Ey:-1,MZ:0,AmH:0,Aqk:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Rm);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.AmH);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.Am();},CT:function(E){
if(this.MZ===E)return;this.MZ=E;this.Am();},AeU:function(E){if(this.Aqk===E)return;
this.Aqk=E;this.AgD.Ar(E);if(E===false)this.Text.Z(true);},Zn:function(E){if(this.
AmH===E)return;this.AmH=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TC._Init.call(this.AgD={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(As9);this.MZ=A.jb.CJ;this.AgD.Fp(750);this.AgD.Ui(750);this.AgD.Aku(750);
this.AmH=A.jb.Text;this.Background.AZ(0x3);this.Background.H(As9);this.Text.AZ(0x3
);this.Text.H(As9);this.Text.R(Rm);this.J(this.Background,0);this.J(this.Text,0);
this.AgD.Q=[B=this.Text,B.Fo,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgD._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgD._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fz={Y:null,I3:null,AN5:A.jV,ARR:A.jV,Tb:0,AJD:0,A1A:false,A08:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABh],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.zX([this,this.MH],[B=A._GetAutoObject(A.Device.
Device).An,B.Fn,B.Fr],0);A.pe([this,this.ABh],this);A.pe([this,this.MH],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABh],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);},Bxp:function(L7){A._GetAutoObject(A.Device.Helper
).G6(L7);this.ApZ(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},ApZ:function(L2,AcS){A.ab5("%s",Ak9);},Ve:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Byl],this);else if(!!As&&(As.PopupState===5)){this.A08=true;this.Ev(this
);}},Byl:function(G){if(this.Tb>0){this.A08=false;this.Adj(this);this.A_k(0);}},
Ais:function(G){if((this.AJD+1)<this.Tb)this.A_k(this.AJD+1);else A.aaS([this,this.
BvZ],this);},Bv0:function(s){this.Ais(s);},A_k:function(E){this.AJD=E;if(this.A08===
false){this.Bxp(E);A.aaS([this,this.Bv0],this);var XD=(this.AJD/this.Tb)*100;A._GetAutoObject(
A.Device.Device).A6(49,true,A.abk(XD,0,0),0,[this,this.Ve]);}},Aam:function(G){A.
_GetAutoObject(A.Device.Device).A6(49,false,BqT,0,[this,this.Ve]);this.A1A=true;
A.pe([this,this.ALd],this);},BvZ:function(s){this.Aam(s);},Adj:function(G){this.
I3.Z(true);this.A1A=false;this.ALd(this);},BFR:function(s){this.Adj(s);},AAz:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6j();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ev:function(G){A._GetAutoObject(C.A$).Fy();},A3b:function(G){A._GetAutoObject(
C.A$).Cf(84);},DJ:function(G){this.N.Z(true);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ev];this.N.Cv(A.aaL(A.ach.ADx));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ck=null;this.N.I6.Dj(100);}else{this.N.Ck=[this,this.AAz];this.
N.I6.Dj(255);}this.N.C5(A.aaL(A.ach.Aew));this.N.Co=[this,this.A3b];},MH:function(
s){this.DJ(s);},ABh:function(G){this.Tb=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Tb>0)A._GetAutoObject(A.Device.Device).A6(49,true,UW,0,[this,this.Ve]);
else{this.Adj(this);this.Aam(this);}},Aks:function(E){if(this.AN5===E)return;this.
AN5=E;A.pe([this,this.ALd],this);},ALd:function(G){var B;if(this.A1A===false){this.
I3.R(A.jV);return;}var Ao6;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Add=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABh],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);this.AAz(this);if(!A._GetAutoObject(A.Device.Device
).An.QG()||!Add)Ao6=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACU(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ao6=A.aaR(
A.acf.ANZ);else Ao6=A.aaR(A.acf.ANY);A._GetAutoObject(A.Device.Device).An.Bk(Add
);A.zX([this,this.ABh],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);}else
Ao6=this.ARR;Ao6=Ao6+(AZD+this.AN5);this.I3.R(Ao6);},Ae5:function(E){if(this.ARR===
E)return;this.ARR=E;A.pe([this,this.ALd],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkL._Init.call(this.I3={
I:this},0);this.__proto__=C.Fz;this.Dq(C.Abp);this.Y.H(Fe);this.Y.JQ(1);this.I3.
H(Fe);this.J(this.Y,0);this.J(this.I3,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I3._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I3._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A6T={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6T;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvI={KZ:null,MS:null,AY:0,Yb:function(){this.KZ=null;this.MS=null;this.AY=0;
},Or:function(A9){var Hf;Hf=A._NewObject(C.A6T,0);Hf.A4=A9;if(!this.KZ){this.KZ=
Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}},AmP:
function(){var B;var RI=0;var Of=this.KZ;while(!!Of){RI+=Of.A4;Of=Of.Ah;}return RI;
},AjI:function(){if(!this.AY)return 0;return this.AmP()/this.AY;},AqP:function(){
var B;if(!this.AY)return 0;var A02=this.AjI();var Ada=0;var Of=this.KZ;while(!!Of
){Ada+=Math.pow(Of.A4-A02,2);Of=Of.Ah;}Ada/=this.AY;Ada=Math.sqrt(Ada);return Ada;
},_Init:function(aArg){this.__proto__=C.AvI;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AN6={Gc:null,Aes:null,Yi:null,C4:null,I3:null,
CP:function(){this.A3_(this);},Init:function(aArg){A.zV([this,this.A3_],A._GetAutoObject(
A.Device.Device).Pm,0);A.pe([this,this.A3_],this);},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},A3_:function(G){this.Yi.Ce(-1);this.I3.Z(!this.Gc.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gc._Init.call(this.Gc={I:this},0);C.
Aes._Init.call(this.Aes={I:this},0);C.Yi._Init.call(this.Yi={I:this},0);A.acg.C4.
_Init.call(this.C4={I:this},0);C.AkL._Init.call(this.I3={I:this},0);this.__proto__=
C.AN6;this.N.Z(true);this.Dq(C.AO2);this.Gc.H(As5);this.Gc.NZ(C.AmG);this.Aes.H(
IT);this.Yi.H(AsX);this.C4.DC(BqU);this.C4.DM(BqV);this.C4.Ng(3);this.C4.L(A.jb.
Text);this.I3.H(Aob);this.I3.R((A.aaR(A.acf.A7C)+AZD)+A.aaR(A.acf.A5X));this.J(this.
Gc,0);this.J(this.Aes,0);this.J(this.Yi,0);this.J(this.C4,0);this.J(this.I3,0);this.
N.CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));this.Gc.Zm(A._GetAutoObject(A.Device.
Device).Pm);this.Yi.Zm(A._GetAutoObject(A.Device.Device).Pm);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gc._Done();this.Aes._Done();this.Yi._Done();
this.C4._Done();this.I3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gc._ReInit();this.Aes._ReInit();this.Yi._ReInit();this.C4.
_ReInit();this.I3._ReInit();this.I3.R((A.aaR(A.acf.A7C)+AZD)+A.aaR(A.acf.A5X));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AN9={At3:null,At2:null,At5:null,At4:null,At7:null,At6:null,At9:null,At8:null
,AaF:null,Yq:null,Abg:null,Abf:null,RatedAttribute:0,Init:function(aArg){this.SE(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SE(3);break;case 1:this.SE(2);break;case
4:this.SE(1);break;case 3:this.SE(4);break;default:this.SE(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SE(1);break;case 1:this.SE(4);break;case 4:this.
SE(3);break;case 3:this.SE(2);break;default:this.SE(0);}break;default:D5.NH=true;
}},ApZ:function(L2,AcS){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcS,true);Fw.
CV(HV);var AAR=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAR.Initialize(
3,5,0,true);Fw.CV(AAR);L2.Bk(Fw);},Ais:function(G){var ApX=0;var A3v=A._GetAutoObject(
A.Device.Device).Bt.B9();var B1=A._NewObject(A.Device.Rating,0);while(ApX<A3v){B1.
E3(ApX,A._GetAutoObject(A.Device.Device).Bt);this.BcV(B1,0);var BBC=A._GetAutoObject(
A.Device.Helper).ZM(2);this.BcV(B1,BBC);ApX++;}C.Fz.Ais.call(this,G);},Aam:function(
G){A.pe([this,this.Bcy],this);C.Fz.Aam.call(this,G);},Adj:function(G){this.At3=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At2=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At4=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At5=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At6=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At8=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fz.Adj.
call(this,G);},DJ:function(G){C.Fz.DJ.call(this,G);this.N.ON(true);this.N.OO(true
);},BcV:function(D3,Bbw){if(!D3||(D3.Timestamp<Bbw))return;if(!Bbw){this.At3.Set(
D3.Appearance,this.At3.Get(D3.Appearance)+1);this.At5.Set(D3.Faeces,this.At5.Get(
D3.Faeces)+1);this.At7.Set(D3.Feed,this.At7.Get(D3.Feed)+1);this.At9.Set(D3.Respiratory
,this.At9.Get(D3.Respiratory)+1);}else{this.At2.Set(D3.Appearance,this.At2.Get(D3.
Appearance)+1);this.At4.Set(D3.Faeces,this.At4.Get(D3.Faeces)+1);this.At6.Set(D3.
Feed,this.At6.Get(D3.Feed)+1);this.At8.Set(D3.Respiratory,this.At8.Get(D3.Respiratory
)+1);}},SE:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yq.Kt(this.AaF.Lt(E));A.pe([this,this.Bcy],this);},Bcy:function(G){var AaG=null;
var AaH=null;switch(this.RatedAttribute){case 2:{AaG=this.At2;AaH=this.At3;}break;
case 4:{AaG=this.At4;AaH=this.At5;}break;case 1:{AaG=this.At6;AaH=this.At7;}break;
case 0:{AaG=A._NewObject(A.Device.Int32ArrayWrapper,0);AaH=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaG=this.At8;AaH=this.At9;}break;default:throw new
Error(BqW+this.RatedAttribute.toFixed());}var AGd=A._NewObject(A.acv.AT3,0);AGd.
Or(AaG.Get(3),A.jb.E1);AGd.Or(AaG.Get(2),A.jb.H8);AGd.Or(AaG.Get(1),A.jb.Gi);var
AGe=A._NewObject(A.acv.AT3,0);AGe.Or(AaH.Get(3),A.jb.E1);AGe.Or(AaH.Get(2),A.jb.
H8);AGe.Or(AaH.Get(1),A.jb.Gi);this.Abf.Ab3(AGd);this.Abg.Ab3(AGe);var A3W=AaG.AmP(
)-AaG.Get(5);var Be9=0;var Be7=0;if(A3W>0){Be9=(AaG.Get(2)/A3W)*100;Be7=(AaG.Get(
1)/A3W)*100;}var AK3=AaH.AmP()-AaH.Get(5);this.I3.Z(!AK3);var Be_=0;var Be8=0;if(
AK3>0){Be_=(AaH.Get(2)/AK3)*100;Be8=(AaH.Get(1)/AK3)*100;}this.Abf.A_i(A.abk(Be9
,0,0)+Aab);this.Abf.A9Y(A.abk(Be7,0,0)+Aab);this.Abg.A_i(A.abk(Be_,0,0)+Aab);this.
Abg.A9Y(A.abk(Be8,0,0)+Aab);},_Init:function(aArg){C.Fz._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaF={I:this},0);C.NE._Init.call(this.
Yq={I:this},0);C.ACA._Init.call(this.Abg={I:this},0);C.ACA._Init.call(this.Abf={
I:this},0);this.__proto__=C.AN9;this.Dq(C.AO3);this.Aks(A.aaR(A.acf.A5Y));this.Ae5(
A.aaR(A.acf.Ang));this.Yq.H(IT);this.Yq.Aj(true);this.Yq.T(A.aaR(A.acf.Axh)+A.aaR(
A.acf.Colon));this.Yq.Bh(false);this.Yq.Bmx(false);this.Abg.H(BqX);this.Abg.T(A.
aaR(A.acf.AF0));this.Abf.H(BqY);this.Abf.T(A.aaR(A.acf.A62));this.I3.H(Aob);this.
J(this.Yq,-1);this.J(this.Abg,-1);this.J(this.Abf,-1);this.At3=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At2=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At5=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At4=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At6=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At8=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fz;this.AaF._Done();this.Yq._Done();this.Abg._Done();this.Abf.
_Done();C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.
AaF._ReInit();this.Yq._ReInit();this.Abg._ReInit();this.Abf._ReInit();this.Aks(A.
aaR(A.acf.A5Y));this.Ae5(A.aaR(A.acf.Ang));this.Yq.T(A.aaR(A.acf.Axh)+A.aaR(A.acf.
Colon));this.Abg.T(A.aaR(A.acf.AF0));this.Abf.T(A.aaR(A.acf.A62));},_Mark:function(
D){var B;C.Fz._Mark.call(this,D);if((B=this.At3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.At7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At6)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
At8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AN_={Aer:null,UI:null,UJ:null,Aeq:null,UF:null,UG:null,AJF:0,AJE:0,AJk:0,AJj:
0,Adc:false,CP:function(){this.Aam(this);},ApZ:function(L2,AcS){if(!L2)return;var
Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcS,true);Fw.CV(HV);var AA_=A._NewObject(A.Device.Int32FilterCriterion
,0);AA_.Initialize(7,2,0,true);Fw.CV(AA_);L2.Bk(Fw);},Ais:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJF++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJE++;var ApX=0;var A3v=A._GetAutoObject(
A.Device.Device).Bt.B9();var At1;var ABs=0;while(ApX<A3v){this.Adc=true;At1=A._GetAutoObject(
A.Device.Device).Bt.I4(ApX,9);if(At1===1)ABs=1;else if((At1===2)&&(ABs!==1))ABs=
2;ApX++;}if(ABs===1)this.AJj++;else if(ABs===2)this.AJk++;C.Fz.Ais.call(this,G);
},Aam:function(G){var Be5=0;var Be6=0;if(this.Tb>0){Be5=(this.AJF/this.Tb)*100;Be6=(
this.AJE/this.Tb)*100;}this.UI.Kt(((((((A.abk(Be5,0,0)+AIz)+this.AJF.toFixed())+
CQ)+A.aaR(A.acf.AEi))+CQ)+this.Tb.toFixed())+Oa);this.UJ.Kt(((((((A.abk(Be6,0,0)+
AIz)+this.AJE.toFixed())+CQ)+A.aaR(A.acf.AEi))+CQ)+this.Tb.toFixed())+Oa);var Be3=
0;var Be4=0;if(this.Tb>0){Be3=(this.AJk/this.Tb)*100;Be4=(this.AJj/this.Tb)*100;
}this.UF.Kt(((((((A.abk(Be3,0,0)+AIz)+this.AJk.toFixed())+CQ)+A.aaR(A.acf.AEi))+
CQ)+this.Tb.toFixed())+Oa);this.UG.Kt(((((((A.abk(Be4,0,0)+AIz)+this.AJj.toFixed(
))+CQ)+A.aaR(A.acf.AEi))+CQ)+this.Tb.toFixed())+Oa);this.I3.Z(!this.Adc);C.Fz.Aam.
call(this,G);},Adj:function(G){this.AJj=0;this.AJk=0;this.AJE=0;this.AJF=0;this.
Adc=false;C.Fz.Adj.call(this,G);},_Init:function(aArg){C.Fz._Init.call(this,aArg
);C.Agt._Init.call(this.Aer={I:this},0);C.Ajl._Init.call(this.UI={I:this},0);C.Ajl.
_Init.call(this.UJ={I:this},0);C.Agt._Init.call(this.Aeq={I:this},0);C.Ajl._Init.
call(this.UF={I:this},0);C.Ajl._Init.call(this.UG={I:this},0);this.__proto__=C.AN_;
this.Dq(C.AO4);this.Aks(A.aaR(A.acf.A5Z));this.Ae5(A.aaR(A.acf.Arl));this.Aer.H(
IT);this.Aer.Aj(true);this.Aer.T(A.aaR(A.acf.A53));this.Aer.Bh(false);this.UI.H(
P9);this.UI.Aj(true);this.UI.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UI.
Bh(true);this.UI.Akx(2);this.UJ.H(Z$);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Avm
)+A.aaR(A.acf.Colon));this.UJ.Bh(true);this.UJ.Akx(1);this.Aeq.H(Ak_);this.Aeq.Aj(
true);this.Aeq.T(A.aaR(A.acf.A54));this.Aeq.Bh(false);this.UF.H(Aok);this.UF.Aj(
true);this.UF.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UF.Bh(true);this.
UF.Akx(2);this.UG.H(AsX);this.UG.Aj(true);this.UG.T(A.aaR(A.acf.Avm)+A.aaR(A.acf.
Colon));this.UG.Bh(true);this.UG.Akx(1);this.J(this.Aer,0);this.J(this.UI,0);this.
J(this.UJ,0);this.J(this.Aeq,0);this.J(this.UF,0);this.J(this.UG,0);this.UI.S(A.
aaL(A.fl.Ak));this.UJ.S(A.aaL(A.fl.Ak));this.UF.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fz;this.Aer._Done();this.UI._Done(
);this.UJ._Done();this.Aeq._Done();this.UF._Done();this.UG._Done();C.Fz._Done.call(
this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Aer._ReInit();this.UI._ReInit(
);this.UJ._ReInit();this.Aeq._ReInit();this.UF._ReInit();this.UG._ReInit();this.
Aks(A.aaR(A.acf.A5Z));this.Ae5(A.aaR(A.acf.Arl));this.Aer.T(A.aaR(A.acf.A53));this.
UI.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UJ.T(A.aaR(A.acf.Avm)+A.aaR(
A.acf.Colon));this.Aeq.T(A.aaR(A.acf.A54));this.UF.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UG.T(A.aaR(A.acf.Avm)+A.aaR(A.acf.Colon));this.UI.S(A.aaL(A.fl.
Ak));this.UJ.S(A.aaL(A.fl.Ak));this.UF.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.Aer)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqE={K7:null
,Aja:null,Ajb:null,Amg:null,Abt:null,WV:null,Abq:null,S0:null,Abr:null,S1:null,Abu:
null,WW:null,Ay:null,Ac9:0,AAl:0,Apo:0,A2d:0,Bdp:0,CP:function(){this.Aam(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I3.Fo())return;var Qu=this.Y.
Br[1]+80;this.Y.Gb([this.Y.Br[0],Qu]);this.Y.Vt(null,null);}break;case 5:{if(this.
I3.Fo())return;var Qu=this.Y.Br[1]-80;this.Y.Gb([this.Y.Br[0],Qu]);this.Y.Vt(null
,null);}break;default:C.Fz.DE.call(this,G);}},ApZ:function(L2,AcS){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcS,true);Fw.CV(HV);var Ac4=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4);L2.Bk(Fw);},Ais:function(G){if(this.Bdf(
)){this.K7.Or(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Aq9()){var Qg=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qg>0){var A1N=A._GetAutoObject(A.acj.DU).Alq(Qg,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aja.
Or(A1N);}}var A2x=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A2x>=0){var Bzt=
A._GetAutoObject(A.Device.Device).Bt.ACV(A2x,8);var Bzs=A._GetAutoObject(A.Device.
Device).Bt.Hu(A2x,6);var Qg=A._GetAutoObject(A.Device.Helper).L9(Bzs,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qg>0){var A1N=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-Bzt)/Qg)|0;this.Ajb.Or(A1N);}}if((A._GetAutoObject(
A.Device.Helper).W.Aq9()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RM()<=180)){var ALo=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tk=A._GetAutoObject(A.Device.
Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAH=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALo/Tk);this.Amg.Or(BAH);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ac9++;this.Apo=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZM(7)){this.AAl++;this.A2d=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bdp=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Du());}}C.Fz.Ais.call(
this,G);},Aam:function(G){var A4h=this.Aja.AjI()|0;var A4j=this.Ajb.AjI()|0;if(this.
Ac9>1)A._GetAutoObject(A.Device.Device).A6(56,true,this.Ac9.toFixed(),0,null);if(
this.Ac9===1)A._GetAutoObject(A.Device.Device).A6(53,true,this.Apo.toFixed(),0,null
);if(this.AAl>1)A._GetAutoObject(A.Device.Device).A6(52,true,this.AAl.toFixed(),
0,null);if(this.AAl===1)A._GetAutoObject(A.Device.Device).A6(57,true,(this.A2d.toFixed(
)+As1)+this.Bdp.toFixed(),0,null);if(this.K7.AY>0)this.WV.T(((((((A._GetAutoObject(
A.Device.Converter).AxT(this.K7.AjI()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxT(this.K7.AqP()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).AfZ())+Ayw)+this.K7.AY.
toFixed())+Oa);else this.WV.T(A.aaR(A.acf.Unknown));if(this.Aja.AY>0)this.S0.T(((((((
A._GetAutoObject(A.Device.Converter).S5(A4h,2,true)+Ayv)+A._GetAutoObject(A.Device.
Converter).S5(this.Aja.AqP()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aar())+Ayw
)+this.Aja.AY.toFixed())+Oa);else this.S0.T(A.aaR(A.acf.Unknown));if(this.Ajb.AY>
0)this.S1.T(((((((A._GetAutoObject(A.Device.Converter).S5(A4j,2,true)+Ayv)+A._GetAutoObject(
A.Device.Converter).S5(this.Ajb.AqP()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aar())+Ayw)+this.Ajb.AY.toFixed())+Oa);else this.S1.T(A.aaR(A.acf.Unknown));if(this.
Amg.AY>0)this.WW.T(((((((A.abk(this.Amg.AjI(),0,1)+Ayv)+A.abk(this.Amg.AqP(),0,1
))+CQ)+A.aaR(A.acf.Bho))+Ayw)+this.Amg.AY.toFixed())+Oa);else this.WW.T(A.aaR(A.
acf.Unknown));var A4i=0;var A4k=0;var Adc=false;if(this.K7.AY>0)Adc=true;var Ib=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJY=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJY)?AJY:null))Ib=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJY)?AJY:null
).A4;}if(this.Aja.AY>0){Adc=true;A4i=A._GetAutoObject(A.Device.Converter).A$z(A4h
,Ib);}if(this.Ajb.AY>0){Adc=true;A4k=A._GetAutoObject(A.Device.Converter).A$z(A4j
,Ib);}this.S0.Akx(A4i);this.S1.Akx(A4k);this.I3.Z(!Adc);C.Fz.Aam.call(this,G);},
Adj:function(G){this.K7.Yb();this.Aja.Yb();this.Ajb.Yb();this.Amg.Yb();this.Ac9=
0;this.AAl=0;this.Apo=0;this.A2d=0;C.Fz.Adj.call(this,G);},Fj:function(G){var B;
this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},Bdf:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agt._Init.call(this.Abt={I:
this},0);C.IE._Init.call(this.WV={I:this},0);C.Agt._Init.call(this.Abq={I:this},
0);C.Ajl._Init.call(this.S0={I:this},0);C.Agt._Init.call(this.Abr={I:this},0);C.
Ajl._Init.call(this.S1={I:this},0);C.Agt._Init.call(this.Abu={I:this},0);C.IE._Init.
call(this.WW={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqE;
this.Dq(C.Avl);this.Aks(A.aaR(A.acf.A50));this.Ae5(A.aaR(A.acf.Akf));this.Abt.H(
AIv);this.Abt.Aj(true);this.Abt.T(A.aaR(A.acf.A4S));this.Abt.Bh(false);this.Abt.
Kr(5);this.WV.H(AZE);this.WV.Aj(true);this.WV.T(A.jV);this.WV.Bh(true);this.Abq.
H(As6);this.Abq.Aj(true);this.Abq.T(A.aaR(A.acf.ALN));this.Abq.Bh(false);this.Abq.
Kr(5);this.S0.H(As7);this.S0.Aj(true);this.S0.T(A.jV);this.S0.Bh(true);this.S0.Kt(
A.jV);this.Abr.H(As8);this.Abr.Aj(true);this.Abr.T(A.aaR(A.acf.Aup));this.Abr.Bh(
false);this.Abr.Kr(5);this.S1.H(BqZ);this.S1.Aj(true);this.S1.T(A.jV);this.S1.Bh(
true);this.S1.Kt(A.jV);this.Abu.H(AZF);this.Abu.Aj(true);this.Abu.T(A.aaR(A.acf.
A40));this.Abu.Bh(false);this.Abu.Kr(5);this.WW.H(Aor);this.WW.Aj(true);this.WW.
T(A.jV);this.WW.Bh(true);this.Ay.H(Is);this.J(this.Abt,-1);this.J(this.WV,-1);this.
J(this.Abq,-1);this.J(this.S0,-1);this.J(this.Abr,-1);this.J(this.S1,-1);this.J(
this.Abu,-1);this.J(this.WW,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.
K7=A._NewObject(C.AvI,0);this.Aja=A._NewObject(C.AvI,0);this.Ajb=A._NewObject(C.
AvI,0);this.WV.S(A.aaL(A.fl.Af));this.S0.S(A.aaL(A.fl.Ak));this.S1.S(A.aaL(A.fl.
Ak));this.WW.S(A.aaL(A.fl.Ak));this.Amg=A._NewObject(C.A5_,0);},_Done:function(){
this.__proto__=C.Fz;this.Abt._Done();this.WV._Done();this.Abq._Done();this.S0._Done(
);this.Abr._Done();this.S1._Done();this.Abu._Done();this.WW._Done();this.Ay._Done(
);C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Abt._ReInit(
);this.WV._ReInit();this.Abq._ReInit();this.S0._ReInit();this.Abr._ReInit();this.
S1._ReInit();this.Abu._ReInit();this.WW._ReInit();this.Ay._ReInit();this.Aks(A.aaR(
A.acf.A50));this.Ae5(A.aaR(A.acf.Akf));this.Abt.T(A.aaR(A.acf.A4S));this.Abq.T(A.
aaR(A.acf.ALN));this.Abr.T(A.aaR(A.acf.Aup));this.Abu.T(A.aaR(A.acf.A40));this.WV.
S(A.aaL(A.fl.Af));this.S0.S(A.aaL(A.fl.Ak));this.S1.S(A.aaL(A.fl.Ak));this.WW.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((
B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aja)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amg)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abp={_Init:function(aArg){C.AjL._Init.call(this,aArg);this.__proto__=C.Abp;this.
Dd.Aw(A.aaL(A.ach.ADt));},_className:"Application::HeaderEvaluationFilter"};C.Kn={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjL.DX.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(A._GetAutoObject(A.Device.
Device).Kh));},_Init:function(aArg){C.AjL._Init.call(this,aArg);this.__proto__=C.
Kn;},_ReInit:function(){C.AjL._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avl={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DU).BcO());},_Init:
function(aArg){C.Abp._Init.call(this,aArg);this.__proto__=C.Avl;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO4={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.Abx));},_Init:function(aArg){C.Abp._Init.call(this,
aArg);this.__proto__=C.AO4;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO3={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.AmU));},_Init:function(aArg){
C.Abp._Init.call(this,aArg);this.__proto__=C.AO3;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO2={Sj:null,Dd:null,AP:null,CP:function(){this.Sj.R(A.aaR(A.acf.AM5));},De:
function(E){C.BQ.De.call(this,E);this.Sj.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Sj={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C4._Init.call(this.AP={I:this},0);this.__proto__=
C.AO2;this.Sj.H(Bq0);this.Sj.R(A.aaR(A.acf.AM5));this.Sj.A5(0x11);this.Dd.H(Bq1);
this.AP.DC(Bq2);this.AP.DM(Bq3);this.AP.L(A.jb.Bc);this.J(this.Sj,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sj.S(A.aaL(A.fl.Af));this.Sj.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AQa));},_Done:function(){this.__proto__=C.BQ;this.Sj._Done();this.
Dd._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Sj._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sj.R(A.aaR(
A.acf.AM5));this.Sj.S(A.aaL(A.fl.Af));this.Sj.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aes={TP:null,AjV:
null,AjS:null,AjT:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TP={I:this},0);A.acg.Ap._Init.call(this.AjV={I:this},0);A.acg.Ap._Init.
call(this.AjS={I:this},0);A.acg.Ap._Init.call(this.AjT={I:this},0);this.__proto__=
C.Aes;this.TP.H(Bq4);this.TP.R(A.aaR(A.acf.Year));this.TP.A5(0x11);this.TP.L(A.jb.
Text);this.AjV.H(A$W);this.AjV.L(A.jb.Text);this.AjS.H(Bq5);this.AjS.L(A.jb.Text
);this.AjT.H(Bq6);this.AjT.L(A.jb.Text);this.J(this.TP,0);this.J(this.AjV,0);this.
J(this.AjS,0);this.J(this.AjT,0);this.TP.S(A.aaL(A.fl.Km));this.TP.A2(A.aaL(A.fl.
Ik));this.AjV.Aw(A.aaL(A.ach.AQl));this.AjS.Aw(A.aaL(A.ach.AQk));this.AjT.Aw(A.aaL(
A.ach.AQs));},_Done:function(){this.__proto__=C.EA;this.TP._Done();this.AjV._Done(
);this.AjS._Done();this.AjT._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TP._ReInit();this.AjV._ReInit();this.AjS._ReInit();this.
AjT._ReInit();this.TP.R(A.aaR(A.acf.Year));this.TP.S(A.aaL(A.fl.Km));this.TP.A2(
A.aaL(A.fl.Ik));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmG={Ajr:null,AP:null
,A_:null,Ea:null,UC:null,SS:null,Gt:null,XD:0,AtA:0,Alu:0,ABt:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SS.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SS.M[2]-1,0,this.SS.M[
2]+1,aSize[1]]);this.UC.H([this.SS.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UC.M[2]-1,0,this.UC.M[2]+1,aSize[1]]);this.Gt.H([this.UC.M[2],0,aSize[
0],aSize[1]]);this.Ajr.H(this.Gt.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABt.toFixed());this.SS.L(this.V.AQ);this.SS.R(this.Alu.toFixed());this.UC.
L(this.V.AQ);this.UC.R(this.AtA.toFixed());var B1=this.BAG(this.XD);this.Gt.L(A.
_GetAutoObject(A.acj.Assessment).Xt(B1));this.Ajr.L(A._GetAutoObject(A.acj.Assessment
).Ql(B1));this.Gt.R(A.abk(this.XD,0,0)+Aab);},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.Alu=this.AX.CF(Ad,1);this.AtA=
this.AX.CF(Ad,2);this.ABt=this.AX.CF(Ad,0);if(this.Alu>0)this.XD=(this.AtA/this.
Alu)*100;else this.XD=0;this.Am();}},BAG:function(XD){if(XD>=8)return 1;else if(
XD>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ajr={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UC={I:this},0);A.acg.Text._Init.call(this.SS={I:this},0
);A.acg.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.AmG;this.Ajr.H(Aoh);
this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.H(Aoh);this.Ea.L(A.jb.Bc);this.UC.
L(A.jb.Text);this.SS.H(Aoh);this.SS.L(A.jb.Text);this.Gt.L(A.jb.Text);this.J(this.
Ajr,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UC,0);this.
J(this.SS,0);this.J(this.Gt,0);this.UC.S(A.aaL(A.fl.Af));this.SS.S(A.aaL(A.fl.Af
));this.Gt.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajr._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UC._Done(
);this.SS._Done();this.Gt._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajr._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UC._ReInit();this.SS._ReInit();this.Gt._ReInit();this.UC.S(A.aaL(
A.fl.Af));this.SS.S(A.aaL(A.fl.Af));this.Gt.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajl={
BT:null,AxO:A.jV,Rating:0,Ai:function(Ae){C.IE.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Ql(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xt(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IE.S.call(this,E);if((E===A.aaL(A.fl.Km))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ik))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kt:function(E){if(this.AxO===E)return;this.AxO=E;this.
BT.R(E);},Akx:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajl;this.BT.AZ(0x34);this.BT.H(Aac);this.BT.I9(true);this.BT.
A5(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IE;this.BT._Done();C.IE._Done.call(
this);},_ReInit:function(){C.IE._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IE._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACA={
N2:null,SI:null,V:null,AnI:null,AnH:null,Aca:null,Ab$:null,DK:Lu,A$E:A.jV,A_C:A.
jV,Ab3:function(E){if(this.N2===E)return;this.N2=E;this.SI.Ab3(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_i:function(E){if(this.A$E===E
)return;this.A$E=E;this.Aca.R(E);},A9Y:function(E){if(this.A_C===E)return;this.A_C=
E;this.Ab$.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SI._Init.
call(this.SI={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnI={I:this},0);A.acg.AK._Init.call(this.AnH={I:this},0);A.acg.Text._Init.
call(this.Aca={I:this},0);A.acg.Text._Init.call(this.Ab$={I:this},0);this.__proto__=
C.ACA;this.H(Bq7);this.SI.H(Bq8);this.SI.Ar(false);this.SI.BmG(360);this.SI.BmQ(
0.5);this.V.AZ(0x1D);this.V.H(W4);this.V.KQ(true);this.V.R(Lu);this.V.L(A.jb.Text
);this.AnI.H(A$X);this.AnI.L(A.jb.H8);this.AnH.H(A$Y);this.AnH.L(A.jb.Gi);this.Aca.
AZ(0x1D);this.Aca.H(A$X);this.Aca.L(A.jb.Text);this.Ab$.AZ(0x1D);this.Ab$.H(A$Y);
this.Ab$.L(A.jb.CS);this.J(this.SI,0);this.J(this.V,0);this.J(this.AnI,0);this.J(
this.AnH,0);this.J(this.Aca,0);this.J(this.Ab$,0);this.SI.BmR(A.aaL(A.acv.ATD));
this.V.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SI._Done();this.V._Done();this.AnI.
_Done();this.AnH._Done();this.Aca._Done();this.Ab$._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SI._ReInit();this.V._ReInit(
);this.AnI._ReInit();this.AnH._ReInit();this.Aca._ReInit();this.Ab$._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkL={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkL;this.H(UU);this.Background.AZ(0x3F);this.Background.
H(UU);this.Background.L(A.jb.Bjh);this.Text.AZ(0x3F);this.Text.H(UU);this.Text.A5(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Ra={AkW:null,NR:null,C8:null,Acy:null,JL:null,TemperatureUnit:null,ME:null,PR:
null,Sf:null,Uq:null,Lp:null,Jd:null,ZY:null,ZX:null,Sh:null,HF:null,AjB:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlC());
this.Uq.R(A._GetAutoObject(A.acj.Temperature).AlC());this.Sh.Z(!A._GetAutoObject(
A.Device.Device).AmI);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnZ();this.AxL(
);this.AcB();this.AxM();},IY:function(G){this.WI(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKs],[B=A._GetAutoObject(A.Device.Device),B.AEu
,B.AIK],0);A.zX([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.AEy,B.AIM
],0);A.zX([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZV],0);A.
zX([this,this.A2T],[B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$],0);A.zX([this
,this.A2L],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIH],0);A._GetAutoObject(
A.Device.Device).AhJ();if(A._GetAutoObject(A.Device.Device).AmI)A._GetAutoObject(
A.Device.Device).AeX(true);A._GetAutoObject(A.Device.Device).Axx();A.pe([this,this.
A2L],this);A.pe([this,this.AAA],this);A.pe([this,this.A2T],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhJ();A._GetAutoObject(A.Device.Device
).Ul(false);A._GetAutoObject(A.Device.Device).Ae7(false);A._GetAutoObject(A.Device.
Device).AeX(false);A.z$([this,this.AKs],[B=A._GetAutoObject(A.Device.Device),B.AEu
,B.AIK],0);A.z$([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.AEy,B.AIM
],0);A.z$([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZV],0);A.
z$([this,this.A2T],[B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$],0);A.z$([this
,this.A2L],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIH],0);},AAA:function(G
){this.Am();},AnZ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C8.L(A.jb.Gi);this.JL.L(this.C8.AQ);this.
ME.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C8.L(A.jb.AV);this.JL.L(A.jb.Text);this.ME.L(this.JL.AQ);this.TemperatureUnit.
L(this.JL.AQ);this.HF.L(A.jb.Gi);}}},AxL:function(){this.AkW.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JL.R(A.aaR(A.acf.ADJ));this.C8.Aw(A.aaL(A.ach.Avz));this.C8.Cu(0);
this.NR.Cu(0);}break;case 1:{this.AVh(A._GetAutoObject(A.Device.Device).Ls,false
);this.C8.Aw(A.aaL(A.ach.Avz));this.NR.Cu(0);}break;case 2:{this.Sf.R(A._GetAutoObject(
A.Device.Converter).AkV(A._GetAutoObject(A.Device.Device).AF4));this.AVh(A._GetAutoObject(
A.Device.Device).Ls,false);this.C8.Aw(null);this.NR.Cu(1);this.Acy.Z(true);this.
PR.Z(true);this.Sf.Z(true);this.Uq.Z(true);}break;case 3:{this.AUl();this.AVh(A.
_GetAutoObject(A.Device.Device).Ls,true);this.Acy.Z(false);this.PR.Z(false);this.
Sf.Z(false);this.Uq.Z(false);}break;case 4:{this.JL.R(A.aaR(A.acf.Bju));this.ME.
R(A.aaR(A.acu.Ake));this.C8.Aw(A.aaL(A.ach.AvB));this.C8.Cu(2);this.NR.Cu(0);}break;
default:A.ab5("%s%e",AHS,A._GetAutoObject(A.Device.Device).MeasureState);}},AcB:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ls<=3240)||(A._GetAutoObject(A.Device.Device
).Ls>=5460))this.N.C5(null);else this.N.C5(A.aaL(A.ach.Aev));this.N.Cv(null);}break;
default:;}},Asw:function(G){A._GetAutoObject(C.A$).Fy();},WI:function(G){},AZ9:function(
s){this.WI(s);},AkQ:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAt(this);break;default:;}},AZ8:function(s){this.AkQ(s);},AVh:
function(AoH,Bzh){if(Bzh)this.Lp.L(A.jb.Bm);else this.Lp.L(A.jb.Gi);if(AoH<=3240
){this.ME.Z(false);this.TemperatureUnit.Z(false);this.Lp.Z(true);this.Lp.R(A.aaR(
A.acu.AU3));}else if(AoH>=5460){this.ME.Z(false);this.TemperatureUnit.Z(false);this.
Lp.Z(true);this.Lp.R(A.aaR(A.acu.Bpd));}else{this.ME.Z(true);this.TemperatureUnit.
Z(true);this.Lp.Z(false);this.ME.R(A._GetAutoObject(A.Device.Converter).AkV(AoH)
);}},AxM:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ls<=3240)||(A._GetAutoObject(A.Device.
Device).Ls>=5460))this.JL.R(A.aaR(A.acf.ADJ));else this.JL.R(A.aaR(A.acf.BpP));break;
default:;}},AxN:function(){},Bpy:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZY.Ar(true);break;case 4:this.ZX.Ar(true);break;default:{
this.ZY.Ar(false);this.ZX.Ar(false);A._GetAutoObject(A.Device.Device).Ae7(false);
}}},AKs:function(G){this.Am();this.AxN();this.Bpy();this.Bpw();},A2T:function(G){
if(A._GetAutoObject(A.Device.Device).AmJ){this.Sh.L(A.jb.H8);this.Sh.Cu(1);}else{
this.Sh.L(A.jb.Bm);this.Sh.Cu(0);}},BAt:function(G){if(!A._GetAutoObject(A.Device.
Device).AmI)A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.Device
).AmJ);},Bpw:function(){if(A._GetAutoObject(A.Device.Device).AmI){this.Sh.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeX(true);else A._GetAutoObject(A.Device.Device).AeX(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sh.Z(true);else this.Sh.Z(false);},AKu:function(
G){this.CC(this);},AUl:function(){A.ab5("%s",A$V);},A2L:function(G){if(A._GetAutoObject(
A.Device.Device).HF){this.JL.H(Bq9);this.ME.H(Bq_);this.TemperatureUnit.H(Bq$);}
else{this.JL.H(Bra);this.ME.H(Brb);this.TemperatureUnit.H(Brc);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gl._Init.call(this.AkW={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.JL={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.PR={I:this},0);A.acg.Text._Init.call(this.
Sf={I:this},0);A.acg.Text._Init.call(this.Uq={I:this},0);C.CH._Init.call(this.Lp={
I:this},0);A.Device.TC._Init.call(this.Jd={I:this},0);A.Device.TC._Init.call(this.
ZY={I:this},0);A.Device.TC._Init.call(this.ZX={I:this},0);A.acg.Ap._Init.call(this.
Sh={I:this},0);C.CH._Init.call(this.HF={I:this},0);A.acl.TC._Init.call(this.AjB={
I:this},0);this.__proto__=C.Ra;var B;this.N.Z(true);this.AkW.Fp(1000);this.AkW.B2=
2;this.NR.H(Brd);this.NR.L(A.jb.CS);this.C8.H(Bre);this.C8.L(A.jb.AV);this.C8.Cu(
0);this.C8.Z(true);this.Acy.H(Brf);this.Acy.L(A.jb.Text);this.Acy.Z(false);this.
JL.KQ(true);this.JL.R(A.aaR(A.acf.ADJ));this.JL.L(A.jb.Text);this.TemperatureUnit.
A5(0x9);this.TemperatureUnit.L(A.jb.Text);this.ME.A5(0x14);this.ME.R(A.aaR(A.acu.
Ake));this.ME.L(A.jb.Text);this.PR.H(Brg);this.PR.R(A.aaR(A.acf.PR));this.PR.L(A.
jb.Text);this.PR.Z(false);this.Sf.H(Brh);this.Sf.A5(0x14);this.Sf.R(Bri);this.Sf.
L(A.jb.Text);this.Sf.Z(false);this.Uq.H(Brj);this.Uq.R(Brk);this.Uq.L(A.jb.Text);
this.Uq.Z(false);this.Lp.H(Brl);this.Lp.R(A.aaR(A.acu.AU3));this.Lp.A5(0x12);this.
Lp.L(A.jb.Gi);this.Jd.B2=false;this.Jd.Cw=true;this.Jd.HM(1);this.Jd.Fp(4000);this.
Jd.Ui(0);this.ZY.B2=false;this.ZY.Cw=true;this.ZY.HM(2);this.ZY.Fp(400);this.ZY.
Ui(200);this.ZX.B2=false;this.ZX.Cw=true;this.ZX.HM(3);this.ZX.Fp(500);this.ZX.Ui(
250);this.Sh.H(Brm);this.HF.H(Brn);this.HF.Z(A._GetAutoObject(A.Device.Device).HF
);this.HF.R(A.aaR(A.acf.HF));this.HF.A5(0x12);this.HF.L(A.jb.Gi);this.AjB.Ar(A._GetAutoObject(
A.Device.Device).HF);this.AjB.Fp(500);this.AjB.Ui(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.Acy,0);this.J(this.JL,0);this.J(this.TemperatureUnit,0);this.
J(this.ME,0);this.J(this.PR,0);this.J(this.Sf,0);this.J(this.Uq,0);this.J(this.Lp
,0);this.J(this.Sh,0);this.J(this.HF,0);this.N.CE=[this,this.Asw];this.N.Ck=[this
,this.AZ8];this.N.Co=[this,this.AZ9];this.N.C1(A.aaL(A.ach.Aeu));this.AkW.Q=[B=this.
C8,B.ASh,B.Cu];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.Avz));this.Acy.
Aw(A.aaL(A.ach.AQC));this.JL.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.ME.S(A.aaL(A.fl.Aen));this.PR.S(A.aaL(A.fl.Af));this.Sf.S(A.aaL(A.fl.EK
));this.Uq.S(A.aaL(A.fl.EK));this.Lp.S(A.aaL(A.fl.Aen));this.Lp.A2(A.aaL(A.fl.EK
));this.Lp.Ct(A.aaL(A.fl.Af));this.Jd.Q=[B=A._GetAutoObject(A.Device.Device),B.ASy
,B.AZ1];this.ZY.Q=[B=A._GetAutoObject(A.Device.Device),B.AEz,B.AIN];this.ZX.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEz,B.AIN];this.Sh.Aw(A.aaL(A.ach.AqH));this.
HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Km));this.HF.Ct(A.aaL(A.fl.Ik));this.
AjB.Q=[B=this.HF,B.Fo,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkW._Done();this.NR._Done();this.C8._Done();this.Acy._Done();this.JL._Done(
);this.TemperatureUnit._Done();this.ME._Done();this.PR._Done();this.Sf._Done();this.
Uq._Done();this.Lp._Done();this.Jd._Done();this.ZY._Done();this.ZX._Done();this.
Sh._Done();this.HF._Done();this.AjB._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkW._ReInit();this.NR._ReInit();this.C8._ReInit();
this.Acy._ReInit();this.JL._ReInit();this.TemperatureUnit._ReInit();this.ME._ReInit(
);this.PR._ReInit();this.Sf._ReInit();this.Uq._ReInit();this.Lp._ReInit();this.Jd.
_ReInit();this.ZY._ReInit();this.ZX._ReInit();this.Sh._ReInit();this.HF._ReInit(
);this.AjB._ReInit();this.JL.R(A.aaR(A.acf.ADJ));this.ME.R(A.aaR(A.acu.Ake));this.
PR.R(A.aaR(A.acf.PR));this.Lp.R(A.aaR(A.acu.AU3));this.HF.R(A.aaR(A.acf.HF));this.
JL.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.ME.S(A.aaL(A.fl.
Aen));this.PR.S(A.aaL(A.fl.Af));this.Sf.S(A.aaL(A.fl.EK));this.Uq.S(A.aaL(A.fl.EK
));this.Lp.S(A.aaL(A.fl.Aen));this.Lp.A2(A.aaL(A.fl.EK));this.Lp.Ct(A.aaL(A.fl.Af
));this.HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Km));this.HF.Ct(A.aaL(A.fl.Ik
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkW)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUR={AcB:
function(){C.Ra.AcB.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cv(null);this.N.C5(A.aaL(A.ach.AvC));}break;default:;}},
WI:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ls>3240)&&(A._GetAutoObject(A.Device.Device
).Ls<5460)){A._GetAutoObject(A.Device.Device).AhJ();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKu(this);break;default:;}},AxM:
function(){C.Ra.AxM.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JL.R(A.aaR(A.acf.Bjv));break;default:;}},AxN:function(){C.Ra.AxN.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).Wx(16711680);this.Jd.Ar(true);}break;default:this.Jd.Ar(false);
}},AUl:function(){this.C8.Aw(A.aaL(A.ach.AvB));this.C8.Cu(0);this.NR.Cu(0);},_Init:
function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.AUR;this.Dq(C.AO0);},
_className:"Application::TemperatureMeasurementScreen"};C.AO5={Dd:null,IK:null,NT:
null,AP:null,Ag2:null,A_:null,De:function(E){C.BQ.De.call(this,E);this.Dd.L(E);this.
IK.L(E);this.NT.L(E);this.Ag2.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C4._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag2={I:this},0);A.acg.C4._Init.call(this.A_={I:this},
0);this.__proto__=C.AO5;this.Dd.H(Ayr);this.IK.H(Aoi);this.NT.H(AHt);this.AP.DC(
A$Z);this.AP.DM(A$0);this.AP.L(A.jb.Bc);this.Ag2.H(Bro);this.Ag2.L(A.jb.CS);this.
A_.DC(Brp);this.A_.DM(Brq);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.IK,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.Ag2,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADt));this.IK.Aw(A.aaL(A.ach.Aew));this.NT.Aw(A.aaL(A.ach.Avu)
);this.Ag2.Aw(A.aaL(A.ach.AP$));},_Done:function(){this.__proto__=C.BQ;this.Dd._Done(
);this.IK._Done();this.NT._Done();this.AP._Done();this.Ag2._Done();this.A_._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Dd._ReInit(
);this.IK._ReInit();this.NT._ReInit();this.AP._ReInit();this.Ag2._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Er:null,DS:null,AGp:
0,ANB:0,Init:function(aArg){A.zV([this,this.ALa],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALa],this);},ALa:function(G){var Ad=this.AGp;if(Ad<0){this.
DS.E5();this.DS.EB(this.ANB);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).An.AmN(Ad,14));this.DS.AEW(A._GetAutoObject(A.Device.Device).An.I4(Ad,13));this.
DS.AeY(A._GetAutoObject(A.Device.Device).An.H2(Ad,8));this.DS.Uj(A._GetAutoObject(
A.Device.Device).An.H2(Ad,11));this.DS.Ae2(A._GetAutoObject(A.Device.Device).An.
H2(Ad,12));this.DS.Ae4(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A91:function(
E){if(this.AGp===E)return;this.AGp=E;A.pe([this,this.ALa],this);},A9t:function(E
){if(this.ANB===E)return;this.ANB=E;A.pe([this,this.ALa],this);},A8F:function(){
return this.AGp;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Er={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Er.H(Brr);this.Er.R(A.aaR(A.acf.GM));this.Er.A5(0x11);this.Er.L(A.jb.Text);this.
DS.H(AZG);this.J(this.Er,0);this.J(this.DS,0);this.Er.S(A.aaL(A.fl.Af));this.Er.
A2(A.aaL(A.fl.Ak));this.Er.Ct(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Er._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.DS._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ak));this.Er.Ct(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KN={AgJ:null,Text:null,Aff:null,De:function(E
){C.BQ.De.call(this,E);this.AgJ.L(E);this.Text.L(E);this.Aff.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgJ={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Aff={I:this},0);this.__proto__=
C.KN;this.AgJ.H(Brs);this.AgJ.L(A.jb.Text);this.Text.H(Brt);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Aff.H(Bru);this.Aff.L(A.jb.Text);this.
J(this.AgJ,0);this.J(this.Text,0);this.J(this.Aff,0);this.AgJ.Aw(A.aaL(A.ach.AO7
));this.Text.S(A.aaL(A.fl.Km));this.Text.A2(A.aaL(A.fl.Ik));},_Done:function(){this.
__proto__=C.BQ;this.AgJ._Done();this.Text._Done();this.Aff._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgJ._ReInit();this.Text.
_ReInit();this.Aff._ReInit();this.Text.S(A.aaL(A.fl.Km));this.Text.A2(A.aaL(A.fl.
Ik));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgJ)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aff
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AOY={
_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOY;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO0={_Init:function(
aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO0;this.JW(this.Aff,-2);this.
Aff.Aw(A.aaL(A.ach.Abx));},_className:"Application::HeaderDeviceTemperature"};C.
Yi={Ai:function(Ae){C.AmG.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpe)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.Alu=0;this.AtA=0;this.XD=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.Alu+=this.AX.CF(O,1);this.AtA+=
this.AX.CF(O,2);}if(this.Alu>0)this.XD=(this.AtA/this.Alu)*100;this.Am();}},_Init:
function(aArg){C.AmG._Init.call(this,aArg);this.__proto__=C.Yi;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.
Ik));},_ReInit:function(){C.AmG._ReInit.call(this);this.V.S(A.aaL(A.fl.Km));this.
V.A2(A.aaL(A.fl.Ik));},_className:"Application::EvaluationLossesSumItem"};C.A59={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A59;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A5_={KZ:null,MS:null,AY:0,Yb:function(){this.KZ=null;this.MS=null;this.AY=0;
},Or:function(A9){var Hf;Hf=A._NewObject(C.A59,0);Hf.A4=A9;if(!this.KZ){this.KZ=
Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}},AmP:
function(){var B;var RI=0;var Of=this.KZ;while(!!Of){RI+=Of.A4;Of=Of.Ah;}return RI;
},AjI:function(){if(!this.AY)return 0;return this.AmP()/this.AY;},AqP:function(){
var B;if(!this.AY)return 0;var A02=this.AjI();var Ada=0;var Of=this.KZ;while(!!Of
){Ada+=Math.pow(Of.A4-A02,2);Of=Of.Ah;}Ada/=this.AY;Ada=Math.sqrt(Ada);return Ada;
},_Init:function(aArg){this.__proto__=C.A5_;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agt={Background:null,V:null,KR:0,Un:5,Hj:false
,Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.Hj)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hg.T.call(this,E);this.V.R(E);},Bh:
function(E){if(this.Hj===E)return;this.Hj=E;this.Am();},Kr:function(E){if(this.Un===
E)return;this.Un=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agt;this.H(BD);this.Background.AZ(
0x3F);this.Background.H(BD);this.V.AZ(0x3F);this.V.H(AIo);this.V.A5(0x11);this.V.
L(A.jb.Text);this.KR=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(A.aaL(A.fl.Bi));},_Done:function(
){this.__proto__=C.Hg;this.Background._Done();this.V._Done();C.Hg._Done.call(this
);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(A.aaL(A.fl.
Bi));},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANT={Wu:function(G){this.Agr();this.I0(A.aaR(
A.acf.AU2),[this,this.ATt],5);this.I0(A.aaR(A.acf.AU0),[this,this.ATs],7);this.I0(
A.aaR(A.acf.Calving),[this,this.Blb],11);this.I0(A.aaR(A.acf.AnS),[this,this.AwL
],2);this.I0(A.aaR(A.acf.AdP),[this,this.AEK],1);this.I0(A.aaR(A.acf.Aus),[this,
this.AEE],0);A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Am$
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6);},DE:function(G){}
,Abn:function(){return C.AM0;},Abo:function(){return C.APs;},Q6:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ACQ());},HO:function(G){
C.GZ.HO.call(this,G);if(this.Akb()===false){this.N.Cv(A.aaL(A.ach.ADq));this.N.Ck=[
this,this.A5G];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(
){A._GetAutoObject(C.A$).Cf(62);},_Init:function(aArg){C.GZ._Init.call(this,aArg
);this.__proto__=C.ANT;var B;this.Dq(C.AO1);this.Dz(A.aaR(A.acf.ARQ));this.AwG([
B=A._GetAutoObject(A.Device.Device),B.A7_,B.BaE]);},_ReInit:function(){C.GZ._ReInit.
call(this);this.Dz(A.aaR(A.acf.ARQ));},_className:"Application::DryCowListScreen"
};C.ANS={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ANS;this.
Lb.Ar(false);this.Lb.Aj(false);this.Lb.Z(false);this.Jp.Ar(false);this.Jp.Aj(false
);this.Jp.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO1={DX:
function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdU(9));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AO1;}
,_className:"Application::HeaderDryCowListFilter"};C.Abk={Filter:null,LW:null,AGS:
A.jV,Eq:0,AFY:1,Operator:1,Bl:function(aSize){C.Aci.Bl.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Aci.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.
pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.Tn((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator
));else this.Tn(null);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this
,this.Mb],this);},Tn:function(AI){if(!!AI){var A1E;if(this.AFY!==1)A1E=this.AFY;
else A1E=AI.Operator;this.T((this.AGS+CQ)+A._GetAutoObject(A.Device.Converter).A55(
A1E));this.Zt(false);}else{this.T(this.AGS);this.Zt(true);}},OM:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.Mb],this);},AFI:function(E){
if(this.AGS===E)return;this.AGS=E;A.pe([this,this.Mb],this);},A9P:function(E){if(
this.AFY===E)return;this.AFY=E;A.pe([this,this.Mb],this);},_Init:function(aArg){
C.Aci._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abk;this.H(AsW);this.AW.H(Brv);this.LW.H(AZH);this.JW(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Aci;this.LW._Done();C.Aci._Done.call(this
);},_ReInit:function(){C.Aci._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Aci._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjD={LW:null,Ai:function(Ae){C.QA.Ai.call(this,Ae);this.LW.L(this.V.AQ);},Tn:
function(AI){if(!!AI){this.H6.Cu(1);this.Zt(true);this.LW.A9G(false);}else{this.
H6.Cu(0);this.Zt(false);this.LW.A9G(true);}},_Init:function(aArg){C.QA._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjD;this.Ja=20;this.
LW.H(AZH);this.J(this.LW,0);},_Done:function(){this.__proto__=C.QA;this.LW._Done(
);C.QA._Done.call(this);},_ReInit:function(){C.QA._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.QA._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABS={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmO(this.TableId,this.Eq));},Tn:function(
AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H6.Cu(1);else this.H6.Cu(
0);},Kd:function(G){A.pe([this,this.Mb],this);},At:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},_Init:function(aArg){C.QA._Init.call(
this,aArg);this.__proto__=C.ABS;},_ReInit:function(){C.QA._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.QA._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APs={YN:null,I8:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YN={I:this},0);A.acg.Text._Init.call(this.I8={I:this},0);this.__proto__=
C.APs;this.A9t(1);this.YN.H(Brw);this.YN.KQ(true);this.YN.R(A.aaR(A.acf.ADY));this.
YN.L(A.jb.Text);this.I8.H(S7);this.I8.R(((A.aaR(A.acf.RM)+A$1)+A.aaR(A.acf.A$D))+
Oa);this.I8.L(A.jb.Text);this.J(this.YN,0);this.J(this.I8,0);this.YN.S(A.aaL(A.fl.
Ak));this.I8.S(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Dc;this.YN._Done(
);this.I8._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YN._ReInit();this.I8._ReInit();this.YN.R(A.aaR(A.acf.ADY));this.I8.R(((A.
aaR(A.acf.RM)+A$1)+A.aaR(A.acf.A$D))+Oa);this.YN.S(A.aaL(A.fl.Ak));this.I8.S(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM0={Mi:null,KO:null,AdO:null,AP:null,A_:null
,Xj:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mi.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KO.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KO.M[2]-1,0,this.
KO.M[2]+1,aSize[1]]);this.AdO.H([this.KO.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KO.L(this.V.AQ);this.AdO.L(this.V.AQ);if(!!this.Xj&&(
this.Xj!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Ql(this.Xj));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xt(this.Xj));}else this.Mi.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Mf=this.AX.
CF(Ad,1);var A2b=this.AX.CF(Ad,29);var O8=this.AX.Hu(Ad,4);var LP=this.AX.I4(Ad,
13);var Alx=this.AX.I4(Ad,17);var AlG=this.AX.H2(Ad,11);this.Xj=A._GetAutoObject(
A.Device.Helper).AL$(LP,AlG,Alx);this.T(Mf.toFixed());this.KO.R(A2b.toFixed());this.
AdO.R(A._GetAutoObject(A.acj.KJ).ACM(O8,A._GetAutoObject(A.Device.Helper).Du(),Brx
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.Mi={I:this},0);A.acg.Text._Init.call(this.KO={I:this},0);A.acg.Text._Init.call(
this.AdO={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.AM0;this.Mi.H(As3);this.AP.L(A.jb.Bc);this.
A_.L(A.jb.Bc);this.J(this.Mi,0);this.J(this.KO,0);this.J(this.AdO,0);this.J(this.
AP,0);this.J(this.A_,0);this.KO.S(A.aaL(A.fl.Af));this.AdO.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done();this.KO._Done(
);this.AdO._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.KO._ReInit();this.AdO.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KO.S(A.aaL(A.fl.Af));this.AdO.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RT={AJH:0,Bdc:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);if(this.Bdc){this.
T(A.aaR(A.acf.ANQ));this.Kt(A.jV);}else{this.T(A.aaR(A.acf.Bjc));if(this.AJH>0)this.
Kt(this.AJH.toFixed());else this.Kt(W9);}},Ce:function(G){C.Fx.Ce.call(this,G);this.
Bdc=A._GetAutoObject(A.Device.Helper).W.IsDry;var Als=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Als>0)this.AJH=A._GetAutoObject(A.Device.Helper).
L9(Als,A._GetAutoObject(A.Device.Helper).Du());else this.AJH=0;this.Am();},_Init:
function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RT;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMe={ALk:A.jV,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.RM));
this.Kt(this.ALk);},Ce:function(G){C.Fx.Ce.call(this,G);var O8=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALk=A._GetAutoObject(A.acj.KJ).ACM(O8,A._GetAutoObject(
A.Device.Helper).Du(),((((Bry+A.aaR(A.acf.Bgu))+Brz)+A.aaR(A.acf.Bgt))+BrA)+A.aaR(
A.acf.ALO));this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=
C.AMe;this.ALk=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fx._ReInit.call(this);
this.ALk=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANK={T_:null,Y6:null,Wk:null,Wl:null,Sw:null,Init:function(aArg){this.Bb(this.
T_);A.pe([this,this.MH],this);},Adq:function(G){A._GetAutoObject(A.Device.Device
).Dv(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.T_={
I:this},0);C.Nb._Init.call(this.Y6={I:this},0);C.Nb._Init.call(this.Wk={I:this},
0);C.AbP._Init.call(this.Wl={I:this},0);C.T7._Init.call(this.Sw={I:this},0);this.
__proto__=C.ANK;var B;this.Dq(C.AOY);this.T_.H(IT);this.T_.Aj(true);this.T_.T(A.
aaR(A.acf.ACm));this.T_.Bh(false);this.T_.Ne(83);this.Y6.H(P9);this.Y6.Aj(true);
this.Y6.T(A.acf.Info);this.Y6.Bh(true);this.Y6.Ne(82);this.Wk.H(Z$);this.Wk.Aj(true
);this.Wk.T(A.aaR(A.acf.AGs));this.Wk.Bh(false);this.Wk.Ne(64);this.Wl.H(Ak_);this.
Wl.Aj(true);this.Wl.T(A.aaR(A.acf.TempMeasurement));this.Wl.Bh(true);this.Wl.Ne(
60);this.Sw.H(Aok);this.Sw.Aj(true);this.Sw.T(A.aaR(A.acf.ACH));this.Sw.Bh(false
);this.J(this.T_,-1);this.J(this.Y6,-1);this.J(this.Wk,-1);this.J(this.Wl,-1);this.
J(this.Sw,-1);this.N.Ck=[this,this.Adq];this.N.Cv(A.aaL(A.ach.ADy));this.T_.AR=[
B=this.T_,B.Nh];this.Y6.AR=[B=this.Y6,B.Nh];this.Wk.AR=[B=this.Wk,B.Nh];this.Wl.
AR=[B=this.Wl,B.Nh];this.Sw.AR=null;this.Sw.AeR([B=this.Sw,B.Atb]);this.Sw.Gr([this
,this.D_,this.GQ]);this.Sw.ASK([B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.T_._Done();this.Y6.
_Done();this.Wk._Done();this.Wl._Done();this.Sw._Done();C.Ei._Done.call(this);},
_ReInit:function(){C.Ei._ReInit.call(this);this.T_._ReInit();this.Y6._ReInit();this.
Wk._ReInit();this.Wl._ReInit();this.Sw._ReInit();this.T_.T(A.aaR(A.acf.ACm));this.
Wk.T(A.aaR(A.acf.AGs));this.Wl.T(A.aaR(A.acf.TempMeasurement));this.Sw.T(A.aaR(A.
acf.ACH));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANL={T8:null,AbM:null,Wi:null,Init:function(aArg){this.Bb(this.T8);},Byx:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BjQ:function(G){if(A._GetAutoObject(
A.Device.Device).Aa0<=20)A._GetAutoObject(A.Device.Device).A6(76,true,BrB,0,null
);else A._GetAutoObject(A.Device.Device).A6(39,true,A.jV,0,[this,this.Byx]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.T8={I:this},0);C.
Cn._Init.call(this.AbM={I:this},0);C.AbP._Init.call(this.Wi={I:this},0);this.__proto__=
C.ANL;var B;this.Dq(C.AOZ);this.T8.H(IT);this.T8.Aj(true);this.T8.T(A.aaR(A.acf.
A4$));this.T8.Bh(false);this.T8.Ne(65);this.AbM.H(P9);this.AbM.Aj(true);this.AbM.
T(A.aaR(A.acf.A57));this.AbM.Bh(true);this.Wi.H(Z$);this.Wi.Aj(true);this.Wi.T(A.
aaR(A.acf.RangeTest));this.Wi.Bh(false);this.Wi.Ne(15);this.J(this.T8,-1);this.J(
this.AbM,-1);this.J(this.Wi,-1);this.T8.AR=[B=this.T8,B.Nh];this.AbM.AR=[this,this.
BjQ];this.Wi.AR=[B=this.Wi,B.Nh];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.T8._Done();this.AbM._Done();this.Wi._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.T8._ReInit();this.AbM._ReInit();this.Wi.
_ReInit();this.T8.T(A.aaR(A.acf.A4$));this.AbM.T(A.aaR(A.acf.A57));this.Wi.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AOZ={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOZ;this.
Text.R(A.aaR(A.acf.AGs));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGs));},_className:"Application::HeaderDeviceServiceMenu"};C.Nb={M7:
null,Ai:function(Ae){C.AbP.Ai.call(this,Ae);this.M7.L(this.V.AQ);},_Init:function(
aArg){C.AbP._Init.call(this,aArg);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.Nb;this.M7.AZ(0x38);this.M7.H(BrC);this.J(this.M7,0);this.V.Ct(A.aaL(A.fl.Bi));
this.M7.Aw(A.aaL(A.ach.Ajm));},_Done:function(){this.__proto__=C.AbP;this.M7._Done(
);C.AbP._Done.call(this);},_ReInit:function(){C.AbP._ReInit.call(this);this.M7._ReInit(
);this.V.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.AbP._Mark.call(this,D);if((
B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANG={Ag8:null,Ahc:null,Ahe:null,Aha:null,Aj3:null,Ag$:null,Ag_:null,Ag9:null
,Aj1:null,Ag7:null,Aj2:null,Ahd:null,Aj4:null,Ahb:null,Aj5:null,Init:function(aArg
){this.Bb(this.Ag8);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PL._Init.
call(this.Ag8={I:this},0);C.PL._Init.call(this.Ahc={I:this},0);C.PL._Init.call(this.
Ahe={I:this},0);C.PL._Init.call(this.Aha={I:this},0);C.PL._Init.call(this.Aj3={I:
this},0);C.PL._Init.call(this.Ag$={I:this},0);C.PL._Init.call(this.Ag_={I:this},
0);C.PL._Init.call(this.Ag9={I:this},0);C.PL._Init.call(this.Aj1={I:this},0);C.PL.
_Init.call(this.Ag7={I:this},0);C.PL._Init.call(this.Aj2={I:this},0);C.PL._Init.
call(this.Ahd={I:this},0);C.PL._Init.call(this.Aj4={I:this},0);C.PL._Init.call(this.
Ahb={I:this},0);C.PL._Init.call(this.Aj5={I:this},0);this.__proto__=C.ANG;this.Dq(
C.AOU);this.Ag8.H(AIv);this.Ag8.Aj(true);this.Ag8.SC(1);this.Ahc.H(AZE);this.Ahc.
Aj(true);this.Ahc.Bh(true);this.Ahc.SC(2);this.Ahe.H(As6);this.Ahe.Aj(true);this.
Ahe.Bh(false);this.Ahe.SC(3);this.Aha.H(As7);this.Aha.Aj(true);this.Aha.Bh(true);
this.Aha.SC(4);this.Aj3.H(Ayh);this.Aj3.Aj(true);this.Aj3.SC(5);this.Ag$.H(BrD);
this.Ag$.Aj(true);this.Ag$.Bh(true);this.Ag$.SC(6);this.Ag_.H(As8);this.Ag_.Aj(true
);this.Ag_.Bh(false);this.Ag_.SC(7);this.Ag9.H(Ayq);this.Ag9.Aj(true);this.Ag9.Bh(
true);this.Ag9.SC(8);this.Aj1.H(AZF);this.Aj1.Aj(true);this.Aj1.SC(9);this.Ag7.H(
Aor);this.Ag7.Aj(true);this.Ag7.Bh(true);this.Ag7.SC(10);this.Aj2.H(BrE);this.Aj2.
Aj(true);this.Aj2.SC(11);this.Ahd.H(BrF);this.Ahd.Aj(true);this.Ahd.Bh(true);this.
Ahd.SC(12);this.Aj4.H(BrG);this.Aj4.Aj(true);this.Aj4.SC(13);this.Ahb.H(BrH);this.
Ahb.Aj(true);this.Ahb.Bh(true);this.Ahb.SC(14);this.Aj5.H(BrI);this.Aj5.Aj(true);
this.Aj5.SC(15);this.J(this.Ag8,-1);this.J(this.Ahc,-1);this.J(this.Ahe,-1);this.
J(this.Aha,-1);this.J(this.Aj3,-1);this.J(this.Ag$,-1);this.J(this.Ag_,-1);this.
J(this.Ag9,-1);this.J(this.Aj1,-1);this.J(this.Ag7,-1);this.J(this.Aj2,-1);this.
J(this.Ahd,-1);this.J(this.Aj4,-1);this.J(this.Ahb,-1);this.J(this.Aj5,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ag8._Done();this.Ahc._Done(
);this.Ahe._Done();this.Aha._Done();this.Aj3._Done();this.Ag$._Done();this.Ag_._Done(
);this.Ag9._Done();this.Aj1._Done();this.Ag7._Done();this.Aj2._Done();this.Ahd._Done(
);this.Aj4._Done();this.Ahb._Done();this.Aj5._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ag8._ReInit();this.Ahc._ReInit();this.Ahe.
_ReInit();this.Aha._ReInit();this.Aj3._ReInit();this.Ag$._ReInit();this.Ag_._ReInit(
);this.Ag9._ReInit();this.Aj1._ReInit();this.Ag7._ReInit();this.Aj2._ReInit();this.
Ahd._ReInit();this.Aj4._ReInit();this.Ahb._ReInit();this.Aj5._ReInit();},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOU={_Init:function(aArg){C.KN._Init.call(this
,aArg);this.__proto__=C.AOU;this.Text.R(A.aaR(A.acf.A5z));},_ReInit:function(){C.
KN._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5z));},_className:"Application::HeaderDeviceCheck"
};C.PL={DeviceComponentToString:null,Ki:null,AuQ:0,BbP:false,CP:function(){this.
V.R(this.DeviceComponentToString.BS(this.AuQ));},Bl:function(aSize){var B;C.Cn.Bl.
call(this,aSize);this.Ki.H(A.abM(this.Ki.M,aSize[0]-((B=this.Ki.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Ki.M[0]));},Ai:function(Ae){C.Cn.Ai.call(this,Ae);this.Ki.
AEO(this.V.AQ);if(this.BbP)this.Ki.Awy(A.jb.E1);else this.Ki.Awy(A.jb.Gi);},SC:function(
E){if(this.AuQ===E)return;this.AuQ=E;this.T(this.DeviceComponentToString.BS(E));
this.DX(this);},DX:function(G){this.BbP=A._GetAutoObject(A.Device.Device).AJy(this.
AuQ);this.Am();},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Ki._Init.call(this.Ki={I:this
},0);this.__proto__=C.PL;this.V.H(BrJ);this.V.A5(0x11);this.Ki.H(BrK);this.J(this.
Ki,0);},_Done:function(){this.__proto__=C.Cn;this.DeviceComponentToString._Done(
);this.Ki._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Ki._ReInit();this.CP();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ki)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Se={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAz],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALe(this);this.DJ(this);},CC:function(G
){A.pe([this,this.MH],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},AAz:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6j();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MH],this);},Ev:function(G){A._GetAutoObject(C.A$).Fy(
);},A3b:function(G){A._GetAutoObject(C.A$).Cf(84);},DJ:function(G){this.N.C1(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ev];this.N.Cv(A.aaL(A.ach.ADx));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ck=null;this.N.I6.Dj(100);}else{this.N.Ck=[this
,this.AAz];this.N.I6.Dj(255);}this.N.C5(A.aaL(A.ach.Aew));this.N.Co=[this,this.A3b
];},MH:function(s){this.DJ(s);},ALe:function(G){A.ab5("%s",BrL);},BFZ:function(s
){this.ALe(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Se;this.N.Ar(false);this.N.Z(true);this.Dq(C.
Abp);this.Ay.H(Is);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(L1
);this.Y.JQ(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.El=[this
,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AN7={X$:null,X_:null,XX:null
,TD:null,DJ:function(G){C.Se.DJ.call(this,G);if(this.AV===this.TD){this.N.Cv(null
);this.N.Ck=null;this.N.C5(null);this.N.Co=null;}},ALe:function(G){if(this.AV===
this.TD)this.Dq(C.AO5);else this.Dq(C.Abp);},ByQ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AP5);case 1:return A.
aaL(A.ach.AP6);default:A.ab5("%s%s",BrM,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},ByR:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AP7);case 1:return A.aaL(A.ach.AP8);default:
A.ab5("%s%s",AIA,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
X$)A._GetAutoObject(C.A$).Cf(66);else if(Cx===this.X_)A._GetAutoObject(C.A$).Cf(
56);else if(Cx===this.XX)A._GetAutoObject(C.A$).Cf(58);else if(Cx===this.TD)A._GetAutoObject(
C.A$).Cf(59);},_Init:function(aArg){C.Se._Init.call(this,aArg);C.Fm._Init.call(this.
X$={I:this},0);C.Fm._Init.call(this.X_={I:this},0);C.Fm._Init.call(this.XX={I:this
},0);C.Fm._Init.call(this.TD={I:this},0);this.__proto__=C.AN7;this.X$.H(P5);this.
X$.Aj(true);this.X$.T(A.aaR(A.acf.Afq));this.X_.H(J0);this.X_.Aj(true);this.X_.T(
A.aaR(A.acf.Temperature));this.XX.H(BrN);this.XX.Aj(true);this.XX.T(A.aaR(A.acf.
Rating));this.TD.H(BrO);this.TD.Aj(true);this.TD.T(A.aaR(A.acf.A7n));this.J(this.
X$,0);this.J(this.X_,0);this.J(this.XX,0);this.J(this.TD,0);this.X$.AR=[this,this.
Ig];this.X$.DB(this.ByR());this.X_.AR=[this,this.Ig];this.X_.DB(this.ByQ());this.
XX.AR=[this,this.Ig];this.XX.DB(A.aaL(A.ach.AP3));this.TD.AR=[this,this.Ig];this.
TD.DB(A.aaL(A.ach.AP4));},_Done:function(){this.__proto__=C.Se;this.X$._Done();this.
X_._Done();this.XX._Done();this.TD._Done();C.Se._Done.call(this);},_ReInit:function(
){C.Se._ReInit.call(this);this.X$._ReInit();this.X_._ReInit();this.XX._ReInit();
this.TD._ReInit();this.X$.T(A.aaR(A.acf.Afq));this.X_.T(A.aaR(A.acf.Temperature)
);this.XX.T(A.aaR(A.acf.Rating));this.TD.T(A.aaR(A.acf.A7n));},_Mark:function(D){
var B;C.Se._Mark.call(this,D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AN8={VG:null,XZ:null,Ya:null,ALe:function(G){this.Dq(C.Avl);},ByU:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQH
);case 1:return A.aaL(A.ach.AQI);default:A.ab5("%s%s",AIA,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A$).Cf(68);else if(Cx===
this.Ya)A._GetAutoObject(C.A$).Cf(57);else if(Cx===this.XZ)A._GetAutoObject(C.A$
).Cf(67);},ByT:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APS);case 1:return A.aaL(A.ach.APT);default:A.ab5("%s%s",AIA
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},ByV:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQJ
);case 1:return A.aaL(A.ach.AQK);default:A.ab5("%s%s",AIA,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Se._Init.call(
this,aArg);C.Fm._Init.call(this.VG={I:this},0);C.Fm._Init.call(this.XZ={I:this},
0);C.Fm._Init.call(this.Ya={I:this},0);this.__proto__=C.AN8;this.VG.H(P5);this.VG.
Aj(true);this.VG.T(A.aaR(A.acf.A$v));this.XZ.H(AZI);this.XZ.Aj(true);this.XZ.T(A.
aaR(A.acf.A41));this.Ya.H(N_);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.A$y));this.
J(this.VG,0);this.J(this.XZ,0);this.J(this.Ya,0);this.VG.AR=[this,this.Ig];this.
VG.DB(this.ByU());this.VG.Ab0(A.aaL(A.ach.NS));this.XZ.AR=[this,this.Ig];this.XZ.
DB(this.ByT());this.Ya.AR=[this,this.Ig];this.Ya.DB(this.ByV());},_Done:function(
){this.__proto__=C.Se;this.VG._Done();this.XZ._Done();this.Ya._Done();C.Se._Done.
call(this);},_ReInit:function(){C.Se._ReInit.call(this);this.VG._ReInit();this.XZ.
_ReInit();this.Ya._ReInit();this.VG.T(A.aaR(A.acf.A$v));this.XZ.T(A.aaR(A.acf.A41
));this.Ya.T(A.aaR(A.acf.A$y));},_Mark:function(D){var B;C.Se._Mark.call(this,D);
if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AN$={Bdf:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZM(0));},_Init:function(aArg){C.AqE._Init.call(this,aArg);this.
__proto__=C.AN$;this.Ae5(A.aaR(A.acf.A7I));},_ReInit:function(){C.AqE._ReInit.call(
this);this.Ae5(A.aaR(A.acf.A7I));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN4={Aie:null,Abs:null,UH:null,AaT:null,Pj:null,Ajj:null,Agv:null,Ajk:null,Agw:
null,Ay:null,AaM:null,Ac9:0,Apo:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I3.Fo())return;var Qu=this.Y.Br[1]+80;this.Y.Gb([this.Y.Br[0],Qu]);this.Y.Vt(null
,null);}break;case 5:{if(this.I3.Fo())return;var Qu=this.Y.Br[1]-80;this.Y.Gb([this.
Y.Br[0],Qu]);this.Y.Vt(null,null);}break;default:C.Fz.DE.call(this,G);}},ApZ:function(
L2,AcS){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcS,true);Fw.CV(HV);var Ac4=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4
);L2.Bk(Fw);},Ais:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq9()){this.
Aie.Or(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Aza=this.ByO(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaM.Set(Aza,this.AaM.Get(Aza)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ac9++;this.Apo=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fz.Ais.call(
this,G);},Aam:function(G){if(this.Ac9>1)A._GetAutoObject(A.Device.Device).A6(56,
true,this.Ac9.toFixed(),0,null);if(this.Ac9===1)A._GetAutoObject(A.Device.Device
).A6(53,true,this.Apo.toFixed(),0,null);if(this.Aie.AY>0)this.UH.T(((((((A._GetAutoObject(
A.Device.Converter).AxT(this.Aie.AjI()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxT(this.Aie.AqP()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).AfZ())+Ayw)+this.Aie.AY.
toFixed())+Oa);else this.UH.T(A.aaR(A.acf.Unknown));var RI=this.AaM.AmP();var O;
for(O=0;O<this.AaM.MD;O++){var Bf=this.By9(O);if(!!Bf){var CB=this.AaM.Get(O);Bf.
Bln(CB);if(!RI)Bf.A9V(0);else Bf.A9V(Math.round((CB*100)/RI)|0);Bf.Bm5(this.By8(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adc=false;if(this.Aie.AY>0)
Adc=true;this.I3.Z(!Adc);C.Fz.Aam.call(this,G);},Adj:function(G){this.Aie.Yb();this.
AaM.E5();this.Ac9=0;this.Apo=0;C.Fz.Adj.call(this,G);},By9:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pj;break;case 1:Bf=this.Ajj;break;case 2:Bf=this.
Agv;break;case 3:Bf=this.Ajk;break;case 4:Bf=this.Agw;break;default:throw new Error(
Ayx+aIndex.toFixed());}return Bf;},By8:function(aIndex,AoC){var B;var To=A.jV;switch(
AoC){case 0:{switch(aIndex){case 0:To=BrP;break;case 1:To=BrQ;break;case 2:To=BrR;
break;case 3:To=BrS;break;case 4:To=BrT;break;default:throw new Error(Ayx+aIndex.
toFixed());}To=To+(CQ+A.aaR(A.acf.Az3));}break;case 1:{switch(aIndex){case 0:To=
BrU;break;case 1:To=BrV;break;case 2:To=BrW;break;case 3:To=BrX;break;case 4:To=
BrY;break;default:throw new Error(Ayx+aIndex.toFixed());}To=To+(CQ+A.aaR(A.acf.A66
));}break;default:A.ab5("%s%e",A$2,AoC);}return To;},ByP:function(AIW,AoC){var Ac5=
0;switch(AoC){case 0:switch(AIW){case 0:Ac5=35000;break;case 1:Ac5=40000;break;case
2:Ac5=45000;break;case 3:Ac5=50000;break;case 4:Ac5=2147483647;break;default:throw new
Error(Ayx+AIW.toFixed());}break;case 1:switch(AIW){case 0:Ac5=36287;break;case 1:
Ac5=40823;break;case 2:Ac5=45359;break;case 3:Ac5=49895;break;case 4:Ac5=2147483647;
break;default:throw new Error(Ayx+AIW.toFixed());}break;default:A.ab5("%s%e",A$2
,AoC);}return Ac5;},ByO:function(A9,AoC){var Aza=0;var O;for(O=0;O<this.AaM.MD;O++
)if(A9<this.ByP(O,AoC)){Aza=O;break;}return Aza;},Fj:function(G){var B;this.Ay.Mw((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agt._Init.call(this.Abs={
I:this},0);C.IE._Init.call(this.UH={I:this},0);C.AaT._Init.call(this.AaT={I:this
},0);C.Pj._Init.call(this.Pj={I:this},0);C.Pj._Init.call(this.Ajj={I:this},0);C.
Pj._Init.call(this.Agv={I:this},0);C.Pj._Init.call(this.Ajk={I:this},0);C.Pj._Init.
call(this.Agw={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaM={I:this},0);this.__proto__=C.AN4;this.Dq(C.Avl);this.Aks(A.aaR(
A.acf.A5W));this.Ae5(A.aaR(A.acf.A7B));this.Abs.H(AIv);this.Abs.Aj(true);this.Abs.
T(A.aaR(A.acf.A4Q));this.Abs.Bh(false);this.Abs.Kr(5);this.UH.H(AZE);this.UH.Aj(
true);this.UH.T(A.jV);this.UH.Bh(true);this.UH.Kr(5);this.AaT.H(As6);this.AaT.Aj(
true);this.Pj.H(As7);this.Pj.Aj(true);this.Pj.Bh(true);this.Ajj.H(As8);this.Ajj.
Aj(true);this.Agv.H(Ayq);this.Agv.Aj(true);this.Agv.Bh(true);this.Ajk.H(AZF);this.
Ajk.Aj(true);this.Agw.H(Aor);this.Agw.Aj(true);this.Agw.Bh(true);this.Ay.H(Is);this.
AaM.Zu(5);this.J(this.Abs,-1);this.J(this.UH,-1);this.J(this.AaT,-1);this.J(this.
Pj,-1);this.J(this.Ajj,-1);this.J(this.Agv,-1);this.J(this.Ajk,-1);this.J(this.Agw
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.Aie=A._NewObject(C.AvI,0);
this.UH.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fz;this.Abs._Done(
);this.UH._Done();this.AaT._Done();this.Pj._Done();this.Ajj._Done();this.Agv._Done(
);this.Ajk._Done();this.Agw._Done();this.Ay._Done();this.AaM._Done();C.Fz._Done.
call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Abs._ReInit();this.
UH._ReInit();this.AaT._ReInit();this.Pj._ReInit();this.Ajj._ReInit();this.Agv._ReInit(
);this.Ajk._ReInit();this.Agw._ReInit();this.Ay._ReInit();this.AaM._ReInit();this.
Aks(A.aaR(A.acf.A5W));this.Ae5(A.aaR(A.acf.A7B));this.Abs.T(A.aaR(A.acf.A4Q));this.
UH.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.
Aie)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaT={H_:null,Gt:null
,Bl:function(aSize){C.IE.Bl.call(this,aSize);this.H_.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gt.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IE.Ai.call(this,Ae);this.H_.L(this.V.AQ);this.Gt.L(this.V.AQ);},_Init:
function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.H_={I:this}
,0);A.acg.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.AaT;this.T(A.aaR(
A.acf.AG5));this.H_.H(BrZ);this.H_.KQ(true);this.H_.R(A.aaR(A.acf.Aqr));this.H_.
L(A.jb.Text);this.Gt.H(A$3);this.Gt.R(Aab);this.Gt.L(A.jb.Text);this.J(this.H_,0
);this.J(this.Gt,0);this.V.S(A.aaL(A.fl.Ik));this.H_.S(A.aaL(A.fl.Ik));this.Gt.S(
A.aaL(A.fl.Km));},_Done:function(){this.__proto__=C.IE;this.H_._Done();this.Gt._Done(
);C.IE._Done.call(this);},_ReInit:function(){C.IE._ReInit.call(this);this.H_._ReInit(
);this.Gt._ReInit();this.T(A.aaR(A.acf.AG5));this.H_.R(A.aaR(A.acf.Aqr));this.V.
S(A.aaL(A.fl.Ik));this.H_.S(A.aaL(A.fl.Ik));this.Gt.S(A.aaL(A.fl.Km));},_Mark:function(
D){var B;C.IE._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pj={AP:null,A_:null,PX:null,H_:null,Gt:null,A$x:A.jV,Aqr:0,A_q:0,Bl:function(
aSize){C.IE.Bl.call(this,aSize);this.PX.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PX.M[2]-1,0,this.PX.M[2]+1,aSize[1]]);this.H_.H([this.PX.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H_.M[2]-1,0,this.H_.M[2]+1,aSize[
1]]);this.Gt.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IE.Ai.call(
this,Ae);this.PX.L(this.V.AQ);this.H_.L(this.V.AQ);this.Gt.L(this.V.AQ);},Bm5:function(
E){if(this.A$x===E)return;this.A$x=E;this.PX.R(E);},Bln:function(E){if(this.Aqr===
E)return;this.Aqr=E;this.H_.R(E.toFixed());},A9V:function(E){if(this.A_q===E)return;
this.A_q=E;this.Gt.R(E.toFixed()+W_);},_Init:function(aArg){C.IE._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.H_={I:
this},0);A.acg.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.Pj;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PX.H(Br0);this.PX.R(A.aaR(A.acf.AG5));this.PX.L(
A.jb.Text);this.H_.R(UW);this.H_.L(A.jb.Text);this.Gt.R(Br1);this.Gt.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.PX,0);this.J(this.H_,0);this.J(
this.Gt,0);this.PX.S(A.aaL(A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gt.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IE;this.AP._Done();this.A_._Done();this.
PX._Done();this.H_._Done();this.Gt._Done();C.IE._Done.call(this);},_ReInit:function(
){C.IE._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.PX._ReInit();
this.H_._ReInit();this.Gt._ReInit();this.PX.R(A.aaR(A.acf.AG5));this.PX.S(A.aaL(
A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gt.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IE._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMq={AKH:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mq();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amo._Init.call(this,aArg);this.__proto__=
C.AMq;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARj={R0:null,
R6:null,RZ:null,R3:null,Pl:null,R2:null,ALc:function(G){A.pe([this,this.BB0],this
);A.pe([this,this.BBO],this);A.pe([this,this.BBK],this);A.pe([this,this.A35],this
);A.pe([this,this.BBR],this);A.pe([this,this.BBP],this);},Ig:function(G){var Cx=(
C.QT.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R6)A._GetAutoObject(C.A$
).Cf(20);else if(Cx===this.Pl)A._GetAutoObject(C.A$).Cf(14);else if(Cx===this.R0
)A._GetAutoObject(C.A$).Cf(12);else if(Cx===this.R3)A._GetAutoObject(C.A$).Cf(43
);else if(Cx===this.RZ)A._GetAutoObject(C.A$).Cf(51);else if(Cx===this.R2)A._GetAutoObject(
C.A$).Cf(61);},BBO:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azi=A._NewObject(A.Device.BoolFilterCriterion,0);Azi.Initialize(9,0,true,true);Be.
CV(Azi);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pl.Zs(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BB0:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mq();var ABq=A._NewObject(A.Device.BoolFilterCriterion,0);ABq.Initialize(
12,0,true,true);Be.CV(ABq);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R6.Zs(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBK:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mq();var AyZ=A._NewObject(A.Device.BoolFilterCriterion
,0);AyZ.Initialize(8,0,true,true);Be.CV(AyZ);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R0.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A35:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6d(A._GetAutoObject(A.Device.Device
).ABw);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.RZ.Zs(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BBR:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6m();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R3.Zs(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BBP:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACQ();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R2.Zs(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.T3._Init.call(this,
aArg);C.QT._Init.call(this.R0={I:this},0);C.QT._Init.call(this.R6={I:this},0);C.
QT._Init.call(this.RZ={I:this},0);C.QT._Init.call(this.R3={I:this},0);C.QT._Init.
call(this.Pl={I:this},0);C.QT._Init.call(this.R2={I:this},0);this.__proto__=C.ARj;
this.R0.H(P5);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.Alarm));this.R0.AbX(true);this.
R6.H(AZI);this.R6.Aj(true);this.R6.T(A.aaR(A.acf.Ar6));this.R6.AbX(true);this.RZ.
H(N_);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.ActionList));this.RZ.AbX(true);this.
R3.H(P6);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.AOx));this.R3.AbX(true);this.Pl.
H(S6);this.Pl.Ar(false);this.Pl.Aj(false);this.Pl.Z(false);this.Pl.T(A.aaR(A.acf.
AB$));this.Pl.AbX(true);this.R2.H(UN);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.A5S
));this.R2.AbX(true);this.J(this.R0,-1);this.J(this.R6,-1);this.J(this.RZ,-1);this.
J(this.R3,-1);this.J(this.Pl,-1);this.J(this.R2,-1);this.R0.AR=[this,this.AcP];this.
R0.DB(A.aaL(A.ach.ADn));this.R0.Ab0(A.aaL(A.ach.NS));this.R6.AR=[this,this.AcP];
this.R6.DB(A.aaL(A.ach.AQG));this.R6.Ab0(A.aaL(A.ach.NS));this.RZ.AR=[this,this.
AcP];this.RZ.DB(A.aaL(A.ach.APD));this.RZ.Ab0(A.aaL(A.ach.NS));this.R3.AR=[this,
this.AcP];this.R3.DB(A.aaL(A.ach.AP_));this.R3.Ab0(A.aaL(A.ach.NS));this.Pl.AR=[
this,this.AcP];this.Pl.DB(A.aaL(A.ach.ADn));this.Pl.Ab0(A.aaL(A.ach.NS));this.R2.
AR=[this,this.AcP];this.R2.DB(A.aaL(A.ach.AP0));this.R2.Ab0(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T3;this.R0._Done();this.R6._Done();this.RZ._Done();this.
R3._Done();this.Pl._Done();this.R2._Done();C.T3._Done.call(this);},_ReInit:function(
){C.T3._ReInit.call(this);this.R0._ReInit();this.R6._ReInit();this.RZ._ReInit();
this.R3._ReInit();this.Pl._ReInit();this.R2._ReInit();this.R0.T(A.aaR(A.acf.Alarm
));this.R6.T(A.aaR(A.acf.Ar6));this.RZ.T(A.aaR(A.acf.ActionList));this.R3.T(A.aaR(
A.acf.AOx));this.Pl.T(A.aaR(A.acf.AB$));this.R2.T(A.aaR(A.acf.A5S));},_Mark:function(
D){var B;C.T3._Mark.call(this,D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARi={R7:null,VF:null,R4:null,R1:null,R5:null,ALc:function(G){A.pe([this,this.
BBL],this);A.pe([this,this.BBV],this);A.pe([this,this.BBW],this);A.pe([this,this.
BB1],this);A.pe([this,this.BBX],this);},Ig:function(G){var Cx=(C.QT.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VF)A._GetAutoObject(C.A$).Cf(90);if(Cx===this.
R1)A._GetAutoObject(C.A$).Cf(74);if(Cx===this.R4)A._GetAutoObject(C.A$).Cf(71);if(
Cx===this.R5)A._GetAutoObject(C.A$).Cf(46);if(Cx===this.R7)A._GetAutoObject(C.A$
).Cf(85);},BBW:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACT();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R5.Zs(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BB1:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6x(Math.max(
A._GetAutoObject(A.Device.Device).AvQ,A._GetAutoObject(A.Device.Helper).A6p(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R7.Zs(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBV:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A6s();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R4.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBL:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOy();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R1.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBX:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avh();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VF.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.T3._Init.call(this,aArg);C.QT._Init.call(this.R7={I:this
},0);C.QT._Init.call(this.VF={I:this},0);C.QT._Init.call(this.R4={I:this},0);C.QT.
_Init.call(this.R1={I:this},0);C.QT._Init.call(this.R5={I:this},0);this.__proto__=
C.ARi;this.R7.H(Br2);this.R7.Aj(true);this.R7.T(A.aaR(A.acf.A7t));this.R7.AbX(true
);this.VF.H(Br3);this.VF.Aj(true);this.VF.T(A.aaR(A.acf.AF7));this.R4.H(Br4);this.
R4.Aj(true);this.R4.T(A.aaR(A.acf.A7v));this.R4.AbX(true);this.R1.H(Br5);this.R1.
Aj(true);this.R1.T(A.aaR(A.acf.ABQ));this.R1.AbX(true);this.R5.H(Br6);this.R5.Aj(
true);this.R5.T(A.aaR(A.acf.ARW));this.R5.AbX(true);this.J(this.R7,-1);this.J(this.
VF,-1);this.J(this.R4,-1);this.J(this.R1,-1);this.J(this.R5,-1);this.R7.AR=[this
,this.AcP];this.R7.DB(A.aaL(A.ach.AQn));this.R7.Ab0(A.aaL(A.ach.NS));this.VF.AR=[
this,this.AcP];this.VF.DB(A.aaL(A.ach.ADF));this.R4.AR=[this,this.AcP];this.R4.DB(
A.aaL(A.ach.AQp));this.R4.Ab0(A.aaL(A.ach.NS));this.R1.AR=[this,this.AcP];this.R1.
DB(A.aaL(A.ach.APV));this.R1.Ab0(A.aaL(A.ach.NS));this.R5.AR=[this,this.AcP];this.
R5.DB(A.aaL(A.ach.AQr));this.R5.Ab0(A.aaL(A.ach.NS));},_Done:function(){this.__proto__=
C.T3;this.R7._Done();this.VF._Done();this.R4._Done();this.R1._Done();this.R5._Done(
);C.T3._Done.call(this);},_ReInit:function(){C.T3._ReInit.call(this);this.R7._ReInit(
);this.VF._ReInit();this.R4._ReInit();this.R1._ReInit();this.R5._ReInit();this.R7.
T(A.aaR(A.acf.A7t));this.VF.T(A.aaR(A.acf.AF7));this.R4.T(A.aaR(A.acf.A7v));this.
R1.T(A.aaR(A.acf.ABQ));this.R5.T(A.aaR(A.acf.ARW));},_Mark:function(D){var B;C.T3.
_Mark.call(this,D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ARU={Wu:function(G){this.Agr(
);this.ALZ();this.A4s(A.aaR(A.acf.A69),[this,this.BmL],131072);this.A4s(A.aaR(A.
acf.A68),[this,this.BmK],16384);A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR
).NC(A.aaR(A.acf.ARd)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6
);},DE:function(G){},Abn:function(){return C.Aqn;},Abo:function(){return C.AqU;}
,Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A6s());},HO:function(G){var F;C.RK.HO.call(this,G);if(this.Akb()===false
){if(!!this.FJ&&((F=this.FJ,F[1].call(F[0]))===16)){this.N.Cv(A.aaL(A.ach.AQz));
this.N.Ck=[this,this.A5Q];}else{this.N.Cv(A.aaL(A.ach.AQh));this.N.Ck=[this,this.
A5N];}this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(
C.A$).Cf(72);},BmK:function(G){this.AGu(16384);},BmL:function(G){this.AGu(131072
);},_Init:function(aArg){C.RK._Init.call(this,aArg);this.__proto__=C.ARU;this.Dq(
C.APh);this.Dz(A.aaR(A.acf.A7z));this.AS2(A._GetAutoObject(C.AvX));},_ReInit:function(
){C.RK._ReInit.call(this);this.Dz(A.aaR(A.acf.A7z));},_className:"Application::NoNaisIdListScreen"
};C.ART={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ART;this.
Mt.Ar(false);this.Mt.Aj(false);this.Mt.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APh={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(10));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.APh;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkI={Bfc:false,CP:
function(){A.pe([this,this.AIP],this);},DE:function(G){},CC:function(G){C.GZ.CC.
call(this,G);if(this.Bfc&&(A._GetAutoObject(A.Device.Device).Ur>0))A.pe([this,this.
Ayz],this);},AlU:function(G){this.A5M(this);},Agd:function(){A._GetAutoObject(C.
A$).Cf(73);},AR2:function(G){throw new Error(Aos);},Bal:function(s){this.AR2(s);
},AR3:function(G){throw new Error(Aos);},Bam:function(s){this.AR3(s);},AR8:function(
G){throw new Error(Aos);},Ayz:function(s){this.AR8(s);},Beo:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bfc=true;A._GetAutoObject(C.A$).Cf(76);}},Agc:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
Xy],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xa],0);},Xy:function(G){var B;if(
A._GetAutoObject(A.Device.Device).AhP===3){A._GetAutoObject(A.Device.Device).A6(
74,false,A.jV,0,[this,this.Agc]);A.z$([this,this.Xy],[B=A._GetAutoObject(A.Device.
Device),B.Wt,B.Xa],0);A.pe([this,this.Ayz],this);}},Azb:function(){throw new Error(
Aos);},A7Q:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.A5L(this);},
Bnh:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.BhD(this);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AkI;this.Dz(A.aaR(A.acf.A7G));
},_ReInit:function(){C.GZ._ReInit.call(this);this.Dz(A.aaR(A.acf.A7G));this.CP();
},_className:"Application::RegistrationsListScreen"};C.AT8={_Init:function(aArg){
C.I2._Init.call(this,aArg);this.__proto__=C.AT8;},_className:"Application::RegistrationsListFilterScreen"
};C.Aep={_Init:function(aArg){C.Yn._Init.call(this,aArg);this.__proto__=C.Aep;this.
Text.H(Br7);this.Text.R(A.jV);this.Text.A5(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ABX={Ka:0,AP:null,A_:null,Ea:null,IJ:null,SV:null,Gy:null,Mf:0,K8:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IJ.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A_.H([this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[
1]]);this.SV.H([this.IJ.M[2],0,this.IJ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SV.M[2]-1,0,this.SV.M[2]+1,aSize[1]]);this.Gy.H([this.SV.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IJ.L(this.V.AQ);this.
Gy.L(this.V.AQ);this.SV.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj0(this.
K8)){this.V.S(A.aaL(A.fl.H1));this.T(A$4);this.SV.R(Rm);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mf.toFixed());this.SV.R(A._GetAutoObject(A.Device.Helper).Sg(this.
Ka,0,5).toFixed());}},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX
){this.Mf=this.AX.CF(Ad,1);this.K8=this.AX.AOM(Ad,34);var AtI=this.AX.AOE(Ad,7);
this.Ka=this.AX.KM(Ad,26);var Ay6=this.AX.Hu(Ad,4);var AfM=A._GetAutoObject(A.Device.
Helper).L9(Ay6,A._GetAutoObject(A.Device.Helper).Du());this.IJ.Aw(A._GetAutoObject(
A.Device.Converter).AmM(AtI));if(AfM<100)this.Gy.R((AfM.toFixed()+CQ)+A.aaR(A.acf.
ALO));else this.Gy.R(A._GetAutoObject(A.acj.KJ).ACM(Ay6,A._GetAutoObject(A.Device.
Helper).Du(),AIg));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IJ={I:this},0);
A.acg.Text._Init.call(this.SV={I:this},0);C.CH._Init.call(this.Gy={I:this},0);this.
__proto__=C.ABX;this.AP.H(Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.A_.L(A.jb.
Bc);this.Ea.H(AZJ);this.Ea.L(A.jb.Bc);this.IJ.H(A$5);this.IJ.L(A.jb.Text);this.SV.
H(Aym);this.Gy.H(AZK);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.IJ,0);this.J(this.SV,0);this.J(this.Gy,0);this.SV.S(A.aaL(A.fl.Af));this.
Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Ct(A.aaL(A.fl.Bi));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done(
);this.Ea._Done();this.IJ._Done();this.SV._Done();this.Gy._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A_._ReInit(
);this.Ea._ReInit();this.IJ._ReInit();this.SV._ReInit();this.Gy._ReInit();this.SV.
S(A.aaL(A.fl.Af));this.Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Ct(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADd={AjX:
null,Px:null,I5:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AjX={I:this},0);A.acg.Ap._Init.call(this.Px={I:this},0);A.acg.Ap._Init.
call(this.I5={I:this},0);this.__proto__=C.ADd;this.AjX.H(Br8);this.AjX.L(A.jb.Text
);this.Px.H(Br9);this.Px.L(A.jb.Text);this.I5.H(A$W);this.I5.L(A.jb.Text);this.J(
this.AjX,0);this.J(this.Px,0);this.J(this.I5,0);this.AjX.Aw(A.aaL(A.ach.ADB));this.
Px.Aw(A.aaL(A.ach.Avw));this.I5.Aw(A.aaL(A.ach.Avr));},_Done:function(){this.__proto__=
C.Dc;this.AjX._Done();this.Px._Done();this.I5._Done();C.Dc._Done.call(this);},_ReInit:
function(){C.Dc._ReInit.call(this);this.AjX._ReInit();this.Px._ReInit();this.I5.
_ReInit();},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APj={IQ:null,AgW:null,HP:null,Bc:null,MB:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8C,B.A9Z],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
Ws,B.JR],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SF
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},De:function(E){C.BQ.De.call(this,E);this.IQ.L(E);this.AgW.L(E);this.
HP.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HP.R(A.aaR(A.acf.Ae_));else this.HP.R(((A.aaR(A.acf.GM)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqR()){this.AwS(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+A$I)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JR(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nf(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.AwS(A$J);this.JR(2);
this.OnSetAnimalId(-1);this.Nf(0);}},JR:function(E){if(this.Gender===E)return;this.
Gender=E;this.AgW.Aw(A._GetAutoObject(A.Device.Converter).AmM(E));},AwS:function(
E){if(this.MB===E)return;this.MB=E;this.IQ.R(E);},Nf:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj0(E))this.HP.
Z(false);else this.HP.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IQ={I:this},0);A.acg.Ap._Init.call(this.AgW={I:this},
0);A.acg.Text._Init.call(this.HP={I:this},0);A.acg.C4._Init.call(this.Bc={I:this
},0);this.__proto__=C.APj;this.IQ.H(A$K);this.IQ.Hl(2);this.IQ.KQ(true);this.IQ.
A5(0x12);this.IQ.R(A$L);this.AgW.H(Br_);this.HP.H(Br$);this.HP.A5(0x11);this.HP.
R(A.aaR(A.acf.Ae_));this.Bc.DC(Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.J(this.
IQ,0);this.J(this.AgW,0);this.J(this.HP,0);this.J(this.Bc,0);this.IQ.S(A.aaL(A.fl.
Ak));this.AgW.Aw(A._GetAutoObject(A.Device.Converter).AmM(2));this.HP.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IQ._Done();this.
AgW._Done();this.HP._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IQ._ReInit();this.AgW._ReInit();this.HP._ReInit();
this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Ae_));this.IQ.S(A.aaL(A.fl.Ak));this.HP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.AaW={EaseOfDeliveryToString:
null,AgN:null,Ce:function(G){C.NE.Ce.call(this,G);var AJQ=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kt(this.EaseOfDeliveryToString.Lt(AJQ));this.G1.R(
this.AgN.Aef(AJQ).toFixed());},De:function(E){C.NE.De.call(this,E);this.G1.L(E);
},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgN._Init.call(this.
AgN={I:this},0);this.__proto__=C.AaW;this.T(A.aaR(A.acf.AgE));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgN._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgN._ReInit();this.T(A.aaR(A.acf.AgE));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XO={WhereAboutsToString:null,KW:null,Ce:function(G){C.NE.Ce.call(this,G);var
K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kt(this.WhereAboutsToString.
Lt(K8));this.G1.R(this.KW.Aef(K8).toFixed());},De:function(E){C.NE.De.call(this,
E);this.G1.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KW._Init.call(this.KW={
I:this},0);this.__proto__=C.XO;this.T(A.aaR(A.acf.Jf));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KW._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KW._ReInit(
);this.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RX={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.
OnSetId],0);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]
,0);A.pe([this,this.AfC],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);A.z$([this
,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NH=true;
break;case 4:this.Bfy(4);break;case 5:this.Bfy(5);break;default:;}},Bfy:function(
Gz){var B;switch(Gz){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;default:throw new Error(
Bsa);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I1.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},AfC:function(s){this.GH(s);},MO:function(G){var B;this.Y.Vt(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RX;this.Cq.Filter=147;this.Y.H(UU);this.Y.JQ(1);this.Ay.H(AsO
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XP={AaQ:null,
XL:null,AaR:null,XM:null,AaW:null,XO:null,_Init:function(aArg){C.RX._Init.call(this
,aArg);C.AaQ._Init.call(this.AaQ={I:this},0);C.XL._Init.call(this.XL={I:this},0);
C.AaR._Init.call(this.AaR={I:this},0);C.XM._Init.call(this.XM={I:this},0);C.AaW.
_Init.call(this.AaW={I:this},0);C.XO._Init.call(this.XO={I:this},0);this.__proto__=
C.XP;this.AaQ.H(BD);this.AaQ.Aj(true);this.XL.H(IT);this.XL.Aj(true);this.XL.Bh(
true);this.AaR.H(P9);this.AaR.Aj(true);this.XM.H(Z$);this.XM.Aj(true);this.XM.Bh(
true);this.AaW.H(Ak_);this.AaW.Aj(true);this.XO.H(Aok);this.XO.Aj(true);this.XO.
Bh(true);this.J(this.AaQ,0);this.J(this.XL,0);this.J(this.AaR,0);this.J(this.XM,
0);this.J(this.AaW,0);this.J(this.XO,0);},_Done:function(){this.__proto__=C.RX;this.
AaQ._Done();this.XL._Done();this.AaR._Done();this.XM._Done();this.AaW._Done();this.
XO._Done();C.RX._Done.call(this);},_ReInit:function(){C.RX._ReInit.call(this);this.
AaQ._ReInit();this.XL._ReInit();this.AaR._ReInit();this.XM._ReInit();this.AaW._ReInit(
);this.XO._ReInit();},_Mark:function(D){var B;C.RX._Mark.call(this,D);if((B=this.
AaQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XM={
BreedToString:null,G1:null,M0:null,Ce:function(G){C.ID.Ce.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BS(Bv));this.G1.
R(this.M0.Aef(Bv).toFixed());},De:function(E){C.ID.De.call(this,E);this.G1.L(E);
},_Init:function(aArg){C.ID._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G1={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XM;this.BT.H(Bsb);this.G1.H(Bsc
);this.G1.Hl(5);this.G1.A5(0x14);this.G1.R(Bsd);this.G1.L(A.jb.Text);this.J(this.
G1,0);this.Hv.Aw(A.aaL(A.ach.ADs));this.G1.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.ID;this.BreedToString._Done();this.G1._Done();this.M0._Done();C.
ID._Done.call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.BreedToString.
_ReInit();this.G1._ReInit();this.M0._ReInit();this.G1.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.ID._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaR={
Ce:function(G){C.ID.Ce.call(this,G);var AAd=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAd>0)this.T(A._GetAutoObject(A.Device.Converter).Rf(AAd));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.ID._Init.call(this,aArg);this.__proto__=
C.AaR;this.Hv.Aw(A.aaL(A.ach.AP1));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XL={Ys:null,Ce:function(G){C.ID.Ce.call(this,G);var O8=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;if(O8>
0)this.T(A._GetAutoObject(A.acj.KJ).AjG(O8));else this.T(A.aaR(A.acf.Unknown));var
Ay8=A.aaL(A.aci.TH);switch(AfR){case 0:Ay8=A.aaL(A.ach.ADp);break;case 1:{Ay8=A.
aaL(A.ach.Avs);this.Ys.Cu(0);}break;case 2:{Ay8=A.aaL(A.ach.Avs);this.Ys.Cu(1);}
break;case 3:{Ay8=A.aaL(A.ach.Avs);this.Ys.Cu(2);}break;default:A.ab5("%s%e",Bse
,AfR);}this.Ys.Aw(Ay8);},_Init:function(aArg){C.ID._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Ys={I:this},0);this.__proto__=C.XL;this.BT.H(Bsf);this.Ys.H(AHL);
this.Ys.L(A.jb.Text);this.J(this.Ys,0);this.Hv.Aw(A.aaL(A.ach.Avr));this.Ys.Aw(A.
aaL(A.ach.ADp));},_Done:function(){this.__proto__=C.ID;this.Ys._Done();C.ID._Done.
call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.Ys._ReInit();},_Mark:
function(D){var B;C.ID._Mark.call(this,D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaQ={Ka:0,XN:null,K8:0
,Bl:function(aSize){C.ID.Bl.call(this,aSize);this.XN.H(this.Hv.M);},Ai:function(
Ae){C.ID.Ai.call(this,Ae);this.XN.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj0(this.K8)){this.T(A.aaR(A.acf.AnimalLoss));this.Hv.Z(false);this.XN.Z(true);
}else if(this.Ka>0){this.T(A._GetAutoObject(A.Device.Converter).Rf(this.Ka));this.
Hv.Z(true);this.XN.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hv.Z(true);this.
XN.Z(false);}},Ce:function(G){C.ID.Ce.call(this,G);this.Ka=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.ID._Init.call(this,aArg);A.acg.Text._Init.call(this.XN={
I:this},0);this.__proto__=C.AaQ;this.XN.R(A$4);this.J(this.XN,0);this.Hv.Aw(A.aaL(
A.ach.Avw));this.XN.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=C.ID;this.
XN._Done();C.ID._Done.call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.
XN._ReInit();},_Mark:function(D){var B;C.ID._Mark.call(this,D);if((B=this.XN)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMn={XP:null,Init:function(aArg){var B;A.zX([this,this.AAv],[B=A._GetAutoObject(
A.Device.Device),B.AEp,B.AIG],0);A.pe([this,this.AAv],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Om(this);break;
case 7:this.MU(this);break;default:D5.NH=true;}},CC:function(G){var B;this.XP.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XP.E4(this);C.AB.E4.call(
this,G);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},Adq:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;
if(LB>=A._GetAutoObject(A.Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.
Helper).G6(LB);},Om:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G6(LB);},AAv:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqj)A._GetAutoObject(C.A$).Ahr(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XP._Init.call(this.XP={I:this},0);this.
__proto__=C.AMn;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.OO(true
);this.Dq(C.APj);this.XP.H(Fe);this.J(this.XP,0);this.N.CE=[this,this.Anh];this.
N.Ck=[this,this.Adq];this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(A.ach.Aex));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XP._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XP._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.ID={Hv:null,BT:null
,T:function(E){C.I1.T.call(this,E);this.BT.R(this.DK);},De:function(E){C.I1.De.call(
this,E);this.Hv.L(E);this.BT.L(E);},_Init:function(aArg){C.I1._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hv={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.ID;this.Hv.H(Bsg);this.Hv.L(A.jb.Text);this.BT.H(Bsh);this.BT.A5(0x11
);this.BT.L(A.jb.Text);this.J(this.Hv,0);this.J(this.BT,0);this.Hv.Aw(A.aaL(A.aci.
TH));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I1;this.Hv._Done();this.BT._Done();C.I1._Done.call(this);},_ReInit:function(
){C.I1._ReInit.call(this);this.Hv._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I1._Mark.call(this
,D);if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I1={Background:null
,KR:0,Hj:false,CP:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Ba6],[B=A._GetAutoObject(A.Device.Helper).W,B.Q0,B.OnSetId],0);A.pe([this,
this.Ba6],this);},Bl:function(aSize){C.Hg.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.
Hj)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ce:function(G){}
,Ba6:function(s){this.Ce(s);},Bh:function(E){if(this.Hj===E)return;this.Hj=E;this.
Am();},De:function(E){if(this.KR===E)return;this.KR=E;},_Init:function(aArg){C.Hg.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I1;this.H(BD);this.Background.H(AIi);this.KR=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);C.Hg._Done.call(this);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={G1:null,BAw:function(G){this.BT.H(A.abN(this.BT.M,this.G1.M[0]));},_Init:
function(aArg){C.Fx._Init.call(this,aArg);A.acg.Text._Init.call(this.G1={I:this}
,0);this.__proto__=C.NE;this.G1.AZ(0xA);this.G1.H(Bsi);this.G1.Hl(5);this.G1.I9(
true);this.G1.A5(0x14);this.G1.R(A.jV);this.G1.L(A.jb.Text);this.J(this.G1,0);this.
G1.Q3([this,this.BAw]);this.G1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fx;this.G1._Done();C.Fx._Done.call(this);},_ReInit:function(){C.Fx._ReInit.call(
this);this.G1._ReInit();this.G1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fx.
_Mark.call(this,D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axb={AQV:null,_Init:function(aArg){C.Zv._Init.call(this,aArg);this.__proto__=
C.Axb;},_Mark:function(D){var B;C.Zv._Mark.call(this,D);if((B=this.AQV)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANu={Wr:null,WK:0,AwD:function(E){C.Amy.AwD.call(this,E);if(E)this.Pn.R(Bsj);
else this.Pn.R(A$6);},BmA:function(E){if(A.aaZ(this.Wr,E))return;if(!!this.Wr)A.
z$([this,this.A21],this.Wr,0);this.Wr=E;if(!!E)A.zX([this,this.A21],E,0);if(!!E)
A.pe([this,this.A21],this);},AFD:function(E){var F;if(this.WK===E)return;this.WK=
E;this.AwD(!!this.Wr&&((F=this.Wr,F[1].call(F[0]))===E));},A21:function(G){var F;
this.AwD(!!this.Wr&&((F=this.Wr,F[1].call(F[0]))===this.WK));},_Init:function(aArg
){C.Amy._Init.call(this,aArg);this.__proto__=C.ANu;this.Pn.R(A$6);this.Pn.S(A.aaL(
A.fl.H1));},_Mark:function(D){var B;C.Amy._Mark.call(this,D);if((B=this.Wr)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axd={Wr:null,WK:0,_Init:function(aArg){C.Zv._Init.call(this,aArg);this.__proto__=
C.Axd;},_Mark:function(D){var B;C.Zv._Mark.call(this,D);if((B=this.Wr)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATN={GO:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Q9._Init.call(
this.GO={I:this},0);this.__proto__=C.ATN;var B;this.I_(A.aaR(A.acf.ACC));this.GO.
H(AhV);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF5));this.GO.ArU(
false);this.GO.A9W(true);this.J(this.GO,0);this.GO.AeR([B=this.GO,B.FU]);this.GO.
Gr([this,this.D_,this.GQ]);this.GO.Akt(A.aaL(A.ach.Edit));this.GO.At([B=A._GetAutoObject(
A.Device.Device),B.ASr,B.AZW]);},_Done:function(){this.__proto__=C.Cd;this.GO._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.GO._ReInit(
);this.I_(A.aaR(A.acf.ACC));this.GO.T(A.aaR(A.acf.AF5));},_Mark:function(D){var B;
C.Cd._Mark.call(this,D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATL={GI:0,C6:null,AW:null,Ko:null,E$:null
,GermanStateToString:null,CountryToString:null,Pu:0,K_:0,L$:false,Init:function(
aArg){A.zX([this,this.MH],[this,this.Sz,this.Ln],0);A.zX([this,this.MH],[this,this.
Ank,this.Ahn],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FM(this.LQ);this.
Ko.FM(this.LQ);this.E$.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=
this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[
1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[
0])).CX(this.CountryToString.BS(this.K_));(F=this.N,F[1].call(F[0])).Co=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0]
)).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(
F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX((A.aaR(A.acf.EV
)+Ax4)+this.GermanStateToString.Lt(A._GetAutoObject(A.Device.Converter).ACN(this.
Pu)));(F=this.N,F[1].call(F[0])).Co=null;}break;default:{(F=this.N,F[1].call(F[0
])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}}}
,Ew:function(EN){var Tj=this.A8;if(EN<0)EN=0;else if(EN>this.RF)EN=this.RF;switch(
EN){case 0:{this.Bb(null);if(!this.GI&&!this.Pu)this.Ln(0);}break;case 1:this.Bb(
this.E$);break;case 2:this.Bb(this.Ko);break;case 3:if(((Tj===2)&&!this.Pu)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tj>0))this.AW.SM(2);else this.AW.SM(
7);}break;default:throw new Error(As_+EN.toFixed());}this.A8=EN;C.Ek.Ew.call(this
,EN);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SB(A._GetAutoObject(
A.Device.Helper).Sg(E,0,10));this.Ahn(A._GetAutoObject(A.Device.Helper).Sg(E,10,
2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).ZV(E));this.L$=false;if(!!this.
AM){this.Ko.Kr(2);this.AW.Kr(10);}else{this.Ko.Kr(0);this.AW.Kr(0);}this.Am();},
FU:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ACY());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RF);},AjH:function(){return this.GI;
},AjJ:function(){return 9999999999;},Ln:function(E){if(this.K_===E)return;this.K_=
E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Sz,this.Ln],0);}
,SB:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this,this.
Vj],this);A.abo([this,this.AbU,this.SB],0);},Vj:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abl(this.Pu,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahn:function(
E){if(this.Pu===E)return;this.Pu=E;if(this.L$===false)A.pe([this,this.Vj],this);
A.abo([this,this.Ank,this.Ahn],0);},Sz:function(){return this.K_;},AbU:function(
){return this.GI;},Ank:function(){return this.Pu;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C6._Init.call(this.C6={I:this},0);C.AQP._Init.call(this.AW={I:
this},0);C.AvG._Init.call(this.Ko={I:this},0);C.AsA._Init.call(this.E$={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATL;var B;this.RF=3;this.AW.H(Bsk);this.Ko.H(Bsl);this.Ko.EU(16);this.E$.H(A$7
);this.J(this.AW,0);this.J(this.Ko,0);this.J(this.E$,0);this.C6.AEV([this,this.Sz
,this.Ln]);this.AW.At([this,this.AbU,this.SB]);this.Ko.At([this,this.Ank,this.Ahn
]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.C6._Done();this.AW._Done();this.Ko._Done();this.
E$._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit();this.AW.
_ReInit();this.Ko._ReInit();this.E$._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQP={NK:null,NJ:null,ES:null,FZ:null,Ep:null,Dx:null,CU:null,Cs:null,FM:function(
E){if(this.M4===E)return;C.Le.FM.call(this,E);this.Cs.CT(E);this.CU.CT(E);this.Dx.
CT(E);this.Ep.CT(E);this.FZ.CT(E);this.ES.CT(E);this.NJ.CT(E);this.NK.CT(E);},Yl:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cs;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Ep;break;
case 5:B5=this.FZ;break;case 6:B5=this.ES;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},_Init:
function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cs={I:this
},0);this.__proto__=C.AQP;this.H(Bsm);this.G0.H(AIy);this.NK.H(Ayu);this.NJ.H(AZw
);this.ES.H(AZx);this.FZ.H(AZy);this.Ep.H(AZz);this.Dx.H(AZA);this.CU.H(AZB);this.
Cs.H(A$R);this.F0.H(AZC);this.EM.H(AZC);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ES,-2);this.J(this.FZ,-2);this.J(this.Ep,-2);this.J(this.Dx,-2);this.J(this.
CU,-2);this.J(this.Cs,-2);this.NK.Di=[this,this.GU];this.NJ.Di=[this,this.GU];this.
ES.Di=[this,this.GU];this.FZ.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.Dx.
Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:function(
){this.__proto__=C.Le;this.NK._Done();this.NJ._Done();this.ES._Done();this.FZ._Done(
);this.Ep._Done();this.Dx._Done();this.CU._Done();this.Cs._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ES._ReInit();this.FZ._ReInit();this.Ep._ReInit();this.Dx._ReInit();this.CU.
_ReInit();this.Cs._ReInit();},_Mark:function(D){var B;C.Le._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cs
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATM={
GI:0,C6:null,AW:null,E$:null,CountryToString:null,K_:0,L$:false,Init:function(aArg
){A.zX([this,this.MH],[this,this.Sz,this.Ln],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FM(this.LQ);this.E$.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CX(this.CountryToString.BS(this.K_));(F=this.N,F[1].call(F[0])).Co=null;}
break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(
F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=
this.N,F[1].call(F[0])).Co=null;}}},Ew:function(EN){var Tj=this.A8;if(EN<0)EN=0;
else if(EN>this.RF)EN=this.RF;switch(EN){case 0:{this.Bb(null);if(!this.GI)this.
Ln(0);}break;case 1:this.Bb(this.E$);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tj>0))this.AW.SM(2);else this.AW.SM(7);}break;default:throw new Error(As_+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.L$=true;this.SB(A._GetAutoObject(A.Device.Helper).Sg(E,0,12));this.Ln(
A._GetAutoObject(A.Device.Converter).ZV(E));this.L$=false;if(!!this.AM)this.AW.Kr(
12);else this.AW.Kr(0);this.Am();},FU:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ACY());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RF);},AjH:function(
){return this.GI;},AjJ:function(){return 999999999999;},Ln:function(E){if(this.K_===
E)return;this.K_=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.
Sz,this.Ln],0);},SB:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false
)A.pe([this,this.Vj],this);A.abo([this,this.AbU,this.SB],0);},Vj:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sz:function(){return this.
K_;},AbU:function(){return this.GI;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.ADH._Init.call(this.AW={I:this},0);C.AsA.
_Init.call(this.E$={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATM;var B;this.RF=2;this.AW.H(Bsn);this.E$.H(A$7);this.
J(this.AW,0);this.J(this.E$,0);this.C6.AEV([this,this.Sz,this.Ln]);this.AW.At([this
,this.AbU,this.SB]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done();this.AW._Done();this.
E$._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C6._ReInit();this.AW._ReInit();this.E$._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,X5:null,X6:null,X4:null,X2:null,X3:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkJ();A._GetAutoObject(A.Device.Helper).Asi();},Ig:function(G){
var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X5)A._GetAutoObject(
C.A$).Cf(28);else if(Cx===this.X6)A._GetAutoObject(C.A$).Cf(26);else if(Cx===this.
X4)A._GetAutoObject(C.A$).Cf(54);else if(Cx===this.X2)A._GetAutoObject(C.A$).Cf(
27);else if(Cx===this.X3)A._GetAutoObject(C.A$).Cf(78);},A25:function(G){A._GetAutoObject(
C.A$).Fy();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fm._Init.call(this.X5={I:this
},0);C.Fm._Init.call(this.X6={I:this},0);C.Fm._Init.call(this.X4={I:this},0);C.Fm.
_Init.call(this.X2={I:this},0);C.Fm._Init.call(this.X3={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CX(A.jV);this.Ej.Ar(false
);this.Dq(C.AqT);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(Fe);
this.Y.JQ(9);this.Ay.H(Is);this.X5.H(P5);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.
A7r));this.X6.H(AZI);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.NewAnimals));this.X4.
H(N_);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.Calving));this.X2.H(P6);this.X2.Aj(
true);this.X2.T(A.aaR(A.acf.ABV));this.X3.H(MG);this.X3.Aj(true);this.X3.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X5,0);this.J(this.X6,0);this.J(this.X4,0);this.J(this.X2,0);this.J(this.X3,0);this.
N.CE=[this,this.A25];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];this.X5.
AR=[this,this.Ig];this.X5.DB(A.aaL(A.ach.ADC));this.X6.AR=[this,this.Ig];this.X6.
DB(A.aaL(A.ach.AvA));this.X4.AR=[this,this.Ig];this.X4.DB(A.aaL(A.ach.APU));this.
X2.AR=[this,this.Ig];this.X2.DB(A.aaL(A.ach.APR));this.X3.AR=[this,this.Ig];this.
X3.DB(A.aaL(A.ach.APK));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.X5._Done();this.X6._Done();this.X4._Done();this.X2.
_Done();this.X3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X5._ReInit(
);this.X6._ReInit();this.X4._ReInit();this.X2._ReInit();this.X3._ReInit();this.X5.
T(A.aaR(A.acf.A7r));this.X6.T(A.aaR(A.acf.NewAnimals));this.X4.T(A.aaR(A.acf.Calving
));this.X2.T(A.aaR(A.acf.ABV));this.X3.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARK={K3:null,EaseOfDelivery:null,BirthType:null,AcF:null
,Li:null,Cm:null,G5:null,Lg:null,AzG:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GH],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E5();A._GetAutoObject(C.A$).Fy();if(!!this.K3)this.K3.Ev(this);},Agb:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwE(true);if(!!this.K3)this.K3.Agb(this
);if(A._GetAutoObject(A.Device.Device).An.Lf())A._GetAutoObject(A.Device.Helper).
AKb(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApA]);else{this.AiV();A.
pe([this,this.ApY],this);}},Aua:function(){this.N.CX(A.jV);this.N.C5(A.aaL(A.ach.
ADG));this.N.Co=[this,this.AyL];},CC:function(G){var B;C.HY.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lf()){A._GetAutoObject(A.Device.Device).A6(41
,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);this.Ev(this);
}else if(this.AzG){this.AzG=false;A.pe([this,this.A3i],this);}else if(!this.K3){
this.K3=A._NewObject(C.ARL,0);this.K3.A9r([this,this.AAS]);A._GetAutoObject(A.Device.
Helper).W.Gq();A._GetAutoObject(A.Device.Helper).Aqb(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nf(this.AsL.Aef(6));this.K3.LN(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiV:function(
){A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);var
L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SN(L7);if(A._GetAutoObject(A.Device.Helper
).AmY()){if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.
Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Cg(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6y(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},ApY:function(G){var B;if(!!this.K3)this.K3.ApY(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).AmY())this.C9.Z(true);else this.C9.Z(false);},
ApA:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",As0,As.Id);}},AAS:function(G){this.
LN(this);this.AeT(A._GetAutoObject(A.Device.Helper).Abl(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JF(this.C$);},ApB:function(G){var F;C.HY.ApB.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnP));},A3i:function(G){A._GetAutoObject(
C.A$).Cf(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcF._Init.call(this.AcF={I:this},0);C.Q9._Init.call(this.Li={I:this
},0);C.SO._Init.call(this.Cm={I:this},0);C.BW._Init.call(this.G5={I:this},0);C.BW.
_Init.call(this.Lg={I:this},0);this.__proto__=C.ARK;var B;this.Dq(C.APg);this.Li.
H(AhV);this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ACj));this.CG.H(AcM);this.Cm.H(AcM
);this.Cm.Aj(true);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.AFu(true);this.G5.H(AcM);
this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Ari));this.Lg.H(AcM);this.Lg.Aj(true);this.
Lg.T(A.aaR(A.acf.AgE));this.J(this.Li,-5);this.J(this.Cm,-3);this.J(this.G5,-1);
this.J(this.Lg,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcF.LY(A._GetAutoObject(A.
Device.Helper).W);this.Li.Gr([this,this.D_,this.GQ]);this.Li.At([B=A._GetAutoObject(
A.Device.Helper).W,B.ASn,B.Anx]);this.Cm.Gr([this,this.D_,this.GQ]);this.Cm.LX([
B=this.Cm,B.FU]);this.Cm.L0(A.aaL(A.ach.Edit));this.Cm.Ab2([B=A._GetAutoObject(A.
Device.Helper).W,B.Av4,B.Q2]);this.Gm.At([B=this.AcF,B.B_,B.B$]);this.Gm.CK(this.
AcF);this.G5.At([B=this.BirthType,B.B_,B.B$]);this.G5.CK(this.BirthType);this.Lg.
At([B=this.EaseOfDelivery,B.B_,B.B$]);this.Lg.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcF._Done();this.Li._Done();this.Cm._Done();this.G5._Done();this.Lg.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcF._ReInit();this.Li._ReInit(
);this.Cm._ReInit();this.G5._ReInit();this.Lg._ReInit();this.Li.T(A.aaR(A.acf.ACj
));this.Cm.T(A.aaR(A.acf.Aea));this.G5.T(A.aaR(A.acf.Ari));this.Lg.T(A.aaR(A.acf.
AgE));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMp={Init:function(aArg){var B;A.zX([this,this.Bga],[B=A._GetAutoObject(A.Device.
Device),B.AEw,B.AIL],0);A.pe([this,this.Bga],this);},AKH:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbQ){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACQ();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOA();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mq();break;default:throw new Error(AZL+A.
_GetAutoObject(A.Device.Device).AbQ.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Bga:function(G){switch(A._GetAutoObject(A.Device.Device).AbQ){case
0:this.Dz(A.aaR(A.acf.ARQ));break;case 1:this.Dz(A.aaR(A.acf.BjF));break;case 2:
this.Dz(A.aaR(A.acf.AvW));break;default:A.ab5("%s",AZL+A._GetAutoObject(A.Device.
Device).AbQ.toFixed());}},_Init:function(aArg){C.Amo._Init.call(this,aArg);this.
__proto__=C.AMp;this.Bms(C.APw);this.Ej.AbY(A._NewObject(C.APl,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARL={AAd:0,Add:null
,AuO:null,BdC:0,A3w:0,A2p:0,Init:function(aArg){this.BdC=A._GetAutoObject(A.Device.
Helper).W.Id;this.Add=A._GetAutoObject(A.Device.Device).An.Filter;this.AAd=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2p=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LN:function(G){A._GetAutoObject(A.Device.Helper).W.Anx(this.AAd);A._GetAutoObject(
A.Device.Helper).W.Ae1(true);switch(this.A2p){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZt,this.A2p);}},Ev:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Add);if(!!this.A3w)this.Bgc();},Agb:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bgc:function(){var AtP=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.BdC);AtP.E3(Ad,A._GetAutoObject(
A.Device.Device).An);AtP.Awq(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtP.
ArN(false);AtP.AwF(AtP.LactationNumber+1);AtP.Cg(A._GetAutoObject(A.Device.Device
).An);},ApY:function(G){this.A3w++;var BxI=A._GetAutoObject(A.Device.Converter).
BgX(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3w<BxI)&&(A._GetAutoObject(
A.Device.Helper).Aj0(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A6(59,true,A.jV,0,[this,this.Ve]);else this.BcA(
this);},Ve:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.BcA(this);else if(!!As&&(As.PopupState===7))this.
AAS(this);},AAS:function(G){var B;var Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var O8=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJQ=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuO)(B=this.AuO
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(Ib);A._GetAutoObject(
A.Device.Helper).W.Akp(AfR);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q2(O8);A._GetAutoObject(A.Device.Helper).W.Akr(AJQ);},BcA:function(
G){this.Bgc();A._GetAutoObject(C.A$).Fy();A._GetAutoObject(A.Device.Device).An.Bk(
this.Add);},A9r:function(E){if(A.aa0(this.AuO,E))return;this.AuO=E;},_Init:function(
aArg){this.__proto__=C.ARL;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Add)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMF={Init:function(aArg){
var B;A.zX([this,this.BdZ],[B=A._GetAutoObject(A.Device.Device),B.AR9,B.AZM],0);
this.BdZ(this);},Cg:function(){A.ab5("%s",Bso);},E3:function(AcR){C.Vs.E3.call(this
,AcR);var O;for(O=16;O>0;O--)this.Ia.Set(O,this.Ia.Get(O-1));this.Ia.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Bsp);},ADL:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BdZ:
function(G){this.E3(A._GetAutoObject(A.Device.Device).Aut);A.we(this,0);},_Init:
function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AMF;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuG={_Init:function(){C.
AMF._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JI={C4:null,V:null,A7k:true,T:function(E){C.I1.T.call(this,E);this.
V.R(E);},De:function(E){C.I1.De.call(this,E);this.V.L(E);},Bmx:function(E){if(this.
A7k===E)return;this.A7k=E;this.C4.Z(E);},_Init:function(aArg){C.I1._Init.call(this
,aArg);A.acg.C4._Init.call(this.C4={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JI;this.C4.DC(Bsq);this.C4.DM(Bsr);this.C4.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(Bss);this.V.A5(0x11);this.V.L(A.jb.Text);this.J(this.C4,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(A.aaL(A.
fl.Bi));},_Done:function(){this.__proto__=C.I1;this.C4._Done();this.V._Done();C.
I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(this);this.C4._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.I1._Mark.call(this,D);if((B=this.C4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APl={AgS:null,Dd:null,Abj:null,Fl:null,Fa:
null,Init:function(aArg){var B;A.zX([this,this.A37],[B=A._GetAutoObject(A.Device.
Device),B.AEw,B.AIL],0);A.pe([this,this.A37],this);},De:function(E){C.Yo.De.call(
this,E);this.Dd.L(E);},AEC:function(G){A.pe([this,this.A37],this);},AAU:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E_();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C2:function(G){var B;var F;C.Yo.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjP));return;}var Byn=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bbd=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Byn)this.Dd.Aw(A.aaL(A.ach.AC4));else if(
!!Bbd&&(Bbd.A4===1))this.Dd.Aw(A.aaL(A.ach.APW));else this.Dd.Aw(A.aaL(A.ach.AjP
));},A37:function(G){var F;var Filter=null;var AOo;switch(A._GetAutoObject(A.Device.
Device).AbQ){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACQ();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOA();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mq();break;default:throw new Error(AZL+A._GetAutoObject(A.Device.
Device).AbQ.toFixed());}var AiZ=this.Akj();if(AiZ>0){AOo=A._NewObject(A.Device.Int32FilterCriterion
,0);AOo.Initialize(1,4,AiZ,false);Filter.CV(AOo);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},Om:function(G){if(!this.Akj())this.AW.AeU(true
);this.Bb(this.AW);this.Am();},MU:function(G){this.AW.AeU(false);this.Bb(this.AgS
);this.Am();},_Init:function(aArg){C.Yo._Init.call(this,aArg);C.Aq5._Init.call(this.
AgS={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abj._Init.call(this.Abj={
I:this},0);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={
I:this},0);this.__proto__=C.APl;var B;this.H(Bst);this.AW.H(Bsu);this.TZ.H(Bsv);
this.Gv.Z(false);this.AgS.H(Bsw);this.Dd.H(Bsx);this.Abj.At(A._GetAutoObject(A.Device.
Device).AbQ);this.Fl.Filter=6;this.Fa.Filter=7;this.JW(this.A_,-1);this.J(this.AgS
,-1);this.J(this.Dd,-1);this.AgS.CK(this.Abj);this.AgS.At([B=this.Abj,B.B_,B.B$]
);this.Dd.Aw(A.aaL(A.ach.AjP));this.Fl.BL=[this,this.Om];this.Fa.BL=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yo;this.AgS._Done();this.Dd.
_Done();this.Abj._Done();this.Fl._Done();this.Fa._Done();C.Yo._Done.call(this);}
,_ReInit:function(){C.Yo._ReInit.call(this);this.AgS._ReInit();this.Dd._ReInit();
this.Abj._ReInit();this.Fl._ReInit();this.Fa._ReInit();},_Mark:function(D){var B;
C.Yo._Mark.call(this,D);if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abj={AeO:null
,Init:function(aArg){var B;A.zX([this,this.BdE],[B=A._GetAutoObject(A.Device.Device
),B.AEw,B.AIL],0);A.pe([this,this.BdE],this);},Dt:function(){return 3;},At:function(
E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.Device).AwM(E);},ACP:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;return this.AeO.AsB(aIndex
);},ACR:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return this.
AeO.AsC(aIndex);},BdE:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbQ;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);
A.Device.AeO._Init.call(this.AeO={I:this},0);this.__proto__=C.Abj;this.Cb.Set(0,
0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cl;this.AeO._Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(
this);this.AeO._ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=
this.AeO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APw={Er:null,IM:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Er={I:this},0);A.acg.Text._Init.call(this.IM={I:this},0);this.__proto__=
C.APw;this.H(O2);this.Background.H(O2);this.Er.H(AIj);this.Er.R(A.aaR(A.acf.A6D)
);this.Er.A5(0x12);this.Er.L(A.jb.Text);this.IM.AZ(0x3F);this.IM.H(Ayo);this.IM.
Hl(5);this.IM.A5(0x14);this.IM.R(A.aaR(A.acf.AGI));this.IM.L(A.jb.Text);this.J(this.
Er,0);this.J(this.IM,0);this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ik));this.
Er.Ct(A.aaL(A.fl.Bi));this.IM.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Er._Done();this.IM._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Er._ReInit();this.IM._ReInit();this.Er.R(A.aaR(A.acf.
A6D));this.IM.R(A.aaR(A.acf.AGI));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.
Ik));this.Er.Ct(A.aaL(A.fl.Bi));this.IM.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JZ:null,BfL:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bep(this);else A._GetAutoObject(A.Device.Device).A6(63,true,A.
jV,0,[this,this.Ve]);},Bep:function(G){A._GetAutoObject(C.A$).Fy();},Ve:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.Bep(this);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.JZ={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APk);this.Je.H(Bsy);this.Je.Akz(2);this.Act.Z(false);this.ARq=12;this.
Number.H(Bsz);this.Number.R(A.aaR(A.acf.A_S));this.A4B=false;this.JZ.H(BsA);this.
JZ.Hl(5);this.JZ.KQ(true);this.JZ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABB));this.JZ.L(A.jb.Text);this.JW(this.Je,-1);this.JW(this.IR,-1);this.
JW(this.Act,-1);this.J(this.JZ,0);this.JZ.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mg;this.JZ._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.
call(this);this.JZ._ReInit();this.Number.R(A.aaR(A.acf.A_S));this.JZ.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABB));this.JZ.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mg._Mark.call(this,D);if((B=this.JZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APk={_Init:function(aArg){C.AqS.
_Init.call(this,aArg);this.__proto__=C.APk;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Je={AbG:null,AbF:null,AbE:null,QD:null,CountryToString:null,AsE:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QD.R(this.CountryToString.
Lt(A._GetAutoObject(A.Device.Converter).A61(A._GetAutoObject(A.Device.Device).Language
))+BsB);},Akz:function(E){if(this.AsE===E)return;this.AsE=E;var bitmap=null;var A1u=
BsC;var A1t=null;var A1v=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq4);break;case
1:{bitmap=A.aaL(A.ach.AQw);A1u=BsD;A1t=A.aaL(A.fl.Ak);A1v=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQx);A1u=BsE;A1t=A.aaL(A.fl.Bi);A1v=true;}break;default:throw new Error(
BsF+E.toFixed());}this.AbE.Aw(bitmap);this.AbF.Aw(bitmap);this.AbG.Aw(bitmap);this.
QD.H(A.abJ(this.QD.M,A1u));this.QD.S(A1t);this.QD.Z(A1v);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbG={I:this},0);A.acg.Ap._Init.call(this.AbF={I:this},0);A.acg.Ap._Init.
call(this.AbE={I:this},0);A.acg.Text._Init.call(this.QD={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Je;this.H(AIB);this.
AbG.AZ(0x3);this.AbG.H(AIB);this.AbG.L(A.jb.H8);this.AbG.Cu(2);this.AbF.AZ(0x3);
this.AbF.H(AIB);this.AbF.L(A.jb.Ad7);this.AbF.Cu(1);this.AbE.AZ(0x3);this.AbE.H(
AIB);this.AbE.L(A.jb.Text);this.AbE.Cu(0);this.QD.AZ(0x14);this.QD.H(BsG);this.QD.
L(0xFF020202);this.QD.Z(false);this.J(this.AbG,0);this.J(this.AbF,0);this.J(this.
AbE,0);this.J(this.QD,0);this.AbG.Aw(A.aaL(A.ach.Aq4));this.AbF.Aw(A.aaL(A.ach.Aq4
));this.AbE.Aw(A.aaL(A.ach.Aq4));this.QD.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbG._Done();this.AbF._Done();this.AbE._Done();this.QD._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbG._ReInit();this.AbF._ReInit();this.AbE._ReInit(
);this.QD._ReInit();this.CountryToString._ReInit();this.QD.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsE={Transponder:0,BFr:1,BFs:2};C.APg={Ap:null,De:function(E){C.BQ.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APg;this.Ap.H(AZu);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AO9));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ih:0,AaA:4,AlX:function(G){C.Q8.AlX.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bda()){this.Ih=A._GetAutoObject(A.Device.Helper).Uu.Id;var Aiu=A._GetAutoObject(
A.Device.Helper).A6Z(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(Aiu){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.Ih),0,[
this,this.Ve]);return;}Aiu=A._GetAutoObject(A.Device.Helper).Bi7(this.Ih,A._GetAutoObject(
A.Device.Helper).W);if(Aiu&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ih)){A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.
Converter).Rf(this.Ih),0,[this,this.Ve]);return;}this.AaA=A._GetAutoObject(A.Device.
Helper).AQ2(this.Ih);switch(this.AaA){case 0:A._GetAutoObject(A.Device.Device).A6(
45,true,this.Ih.toFixed().length.toFixed(),0,[this,this.Ve]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxJ(this.Ih);A._GetAutoObject(A.Device.
Device).A6(46,true,BM.toFixed(),0,[this,this.Ve]);}break;case 3:this.BfD();break;
default:throw new Error(AH9+this.AaA.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},Ve:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaA===2)this.BfD();else A._GetAutoObject(
A.Device.Device).AhG();break;case 5:this.Ev(this);break;default:;}},BfD:function(
){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PQ(this.Ih);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A6(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.II);this.Number.R(A.aaR(A.acf.A_L
));this.Je.H(BsH);this.IR.H(BsI);this.Akz(1);this.N.CE=[this,this.Ev];this.N.C1(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_L));},_className:"Application::SetSaveNaisIdScreen"};C.ANU={LN:function(
G){C.AqB.LN.call(this,G);A.pe([this,this.BA_],this);},BA_:function(G){this.JF(this.
Ef);},_Init:function(aArg){C.AqB._Init.call(this,aArg);this.__proto__=C.ANU;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UK={Animal:null,WhereAboutsToString:
null,Gk:function(aIndex){return this.WhereAboutsToString.BS(this.C7(aIndex));},At:
function(E){C.Cl.At.call(this,E);if(!!this.Animal)this.Animal.Nf(E);},A4d:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4d],[B=this.Animal,B.Awe,B.Nf],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4d],[B=this.Animal,B.Awe,B.Nf],0);A.pe([this,this.A4d],this);}
,_Init:function(aArg){C.Cl._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UK;this.Cb.Set(0,1);this.
Cb.Set(1,2);this.Cb.Set(2,3);this.Cb.Set(3,4);this.Cb.Set(4,5);},_Done:function(
){this.__proto__=C.Cl;this.WhereAboutsToString._Done();C.Cl._Done.call(this);},_ReInit:
function(){C.Cl._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cl._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UL={Dt:function(){return 6;},_Init:function(aArg){C.UK._Init.call(this,aArg);
this.__proto__=C.UL;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Cb.Set(
3,3);this.Cb.Set(4,4);this.Cb.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcF={Dt:function(){return 5;},_Init:function(aArg){C.UK._Init.call(this,aArg
);this.__proto__=C.AcF;this.Cb.Set(0,6);this.Cb.Set(1,7);this.Cb.Set(2,8);this.Cb.
Set(3,9);this.Cb.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdQ={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BbW],[B=A._GetAutoObject(A.Device.
Device),B.AR_,B.AZN],0);A.pe([this,this.BbW],this);},Dt:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BS(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awh(E);},BbW:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agu;A.abo([this,this.B_,this.B$],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdQ;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGw={FI:null
,Ez:null,EartagNrAssignmentMode:null,Fl:null,Fa:null,HG:null,AW:null,Kk:null,M8:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hj){this.AW.FM(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FM(A.jb.CS);this.HG.CT(A.jb.CS);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hj){this.AW.FM(A.jb.CJ);this.HG.CT(
A.jb.CJ);}else{this.AW.FM(A.jb.CS);this.HG.CT(A.jb.CS);}this.Bb(null);}this.M8.L(
this.V.AQ);},IY:function(G){C.Eg.IY.call(this,G);if(!this.A8)this.FU(this);else this.
Hc(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.
N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(
F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=
null;}break;default:this.FI.AkK((F=this.N,F[1].call(F[0])));}},FU:function(G){this.
Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8&&!!this.N)
this.FI.Aju((F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SM(2);else this.AW.SM(7);}break;default:throw new Error(
As_+this.A8.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Om:function(G){this.AA3(2);},MU:function(G){this.AA3(7);},AA3:
function(Gz){var B;var Azp=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azp){
var AAf=(A.Core.P.isPrototypeOf(B=this.QF(Azp,Gz,0x15))?B:null);if(!!AAf){this.Bb(
AAf);return true;}}return false;},AfY:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M8.Aw(
A._GetAutoObject(A.Device.Converter).AmM(2));break;case 1:this.M8.Aw(A._GetAutoObject(
A.Device.Converter).AmM((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
A$8+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3O],this);},A3O:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Kk.AeW(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aou]);this.Kk.
AeW([B=A._GetAutoObject(A.Device.Device),B.AEs,B.AII]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Av7
,B.AyD]);this.Kk.AeW([B=A._GetAutoObject(A.Device.Device),B.ASd,B.AZO]);}break;case
0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyE]);this.Kk.AeW([B=
A._GetAutoObject(A.Device.Device),B.ASe,B.AZP]);}break;case 2:{this.AW.At([B=A._GetAutoObject(
A.Device.Device),B.Anl,B.Aou]);this.Kk.AeW([B=A._GetAutoObject(A.Device.Device),
B.AEs,B.AII]);}break;default:throw new Error(BsJ+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A$8+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uh:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.AfY],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.AfY],this.Ez,0);if(!!
E)A.pe([this,this.AfY],this);},Akq:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfY],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfY],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfY],this);},Uc:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.
BK._Init.call(this.Fa={I:this},0);C.Aq5._Init.call(this.HG={I:this},0);C.AvH._Init.
call(this.AW={I:this},0);C.AuS._Init.call(this.Kk={I:this},0);A.acg.Ap._Init.call(
this.M8={I:this},0);this.__proto__=C.AGw;var B;this.H(UT);this.V.Ar(false);this.
V.R(As2);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fa.Filter=7;this.HG.H(BsK);this.
AW.H(BsL);this.M8.H(BsM);this.J(this.HG,0);this.J(this.AW,0);this.J(this.M8,0);this.
FI=A._NewObject(C.Aeo,0);this.Fl.BL=[this,this.Om];this.Fa.BL=[this,this.MU];this.
HG.CK(this.Kk);this.HG.At([B=this.Kk,B.B_,B.B$]);this.AW.At([this,this.Uc,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fa.
_Done();this.HG._Done();this.AW._Done();this.Kk._Done();this.M8._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fl._ReInit();this.Fa.
_ReInit();this.HG._ReInit();this.AW._ReInit();this.Kk._ReInit();this.M8._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANJ={Wj:
null,Y9:null,AbN:null,T6:null,Init:function(aArg){this.Bb(this.Wj);},AEk:function(
G){var BdA=(C.Anb.isPrototypeOf(G)?G:null);if(!!BdA)A._GetAutoObject(A.Device.Device
).A6(BdA.Ady,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.T6))A._GetAutoObject(A.Device.Device).A6(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.T6))A._GetAutoObject(C.A$).Cf(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Anb._Init.call(this.Wj={I:
this},0);C.Anb._Init.call(this.Y9={I:this},0);C.Anb._Init.call(this.AbN={I:this}
,0);C.Anb._Init.call(this.T6={I:this},0);this.__proto__=C.ANJ;this.Dq(C.AOX);this.
Wj.H(IT);this.Wj.Aj(true);this.Wj.T(A.aaR(A.acf.AhF));this.Wj.Bh(false);this.Wj.
Ady=79;this.Y9.H(P9);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.A_4));this.Y9.Bh(true
);this.Y9.Ady=77;this.AbN.H(Z$);this.AbN.Aj(true);this.AbN.T(A.acf.BiI);this.AbN.
Bh(false);this.AbN.Ady=78;this.T6.H(Ak_);this.T6.Aj(true);this.T6.T(A.aaR(A.acf.
About));this.T6.Bh(true);this.T6.Ady=3;this.J(this.Wj,-1);this.J(this.Y9,-1);this.
J(this.AbN,-1);this.J(this.T6,-1);this.Wj.AR=[this,this.AEk];this.Y9.AR=[this,this.
AEk];this.AbN.AR=[this,this.AEk];this.T6.AR=[this,this.AEk];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wj._Done();this.Y9._Done();this.AbN._Done();
this.T6._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this
);this.Wj._ReInit();this.Y9._ReInit();this.AbN._ReInit();this.T6._ReInit();this.
Wj.T(A.aaR(A.acf.AhF));this.Y9.T(A.aaR(A.acf.A_4));this.T6.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AOX={_Init:function(aArg){C.KN._Init.call(this
,aArg);this.__proto__=C.AOX;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANH={FactoryResetScope:null,T9:null,Wh:null,T$:null,Init:function(aArg){this.
Bb(this.T9);A.pe([this,this.MH],this);},BjP:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A6(33,true
,A.jV,0,[this,this.Bfr]);break;case 0:A._GetAutoObject(A.Device.Device).A6(7,true
,A.jV,0,[this,this.Bfr]);break;default:A.ab5("%s%i",BsN,this.FactoryResetScope.Q
);}},Bfr:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
BnQ();A._GetAutoObject(A.Device.Device).A6(8,true,A.jV,0,null);A._GetAutoObject(
C.A$).Cf(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).BnP();A._GetAutoObject(
A.Device.Device).ArK(0);A._GetAutoObject(A.Device.Device).ArL(0);A._GetAutoObject(
A.Device.Device).ArM(0);A._GetAutoObject(A.Device.Device).ArQ(0);A._GetAutoObject(
A.Device.Device).ArR(0);A._GetAutoObject(A.Device.Device).ArS(0);A._GetAutoObject(
A.Device.Device).Uf(5);A._GetAutoObject(A.Device.Device).Awt(0);A._GetAutoObject(
A.Device.Device).Awu(0);A._GetAutoObject(A.Device.Device).Awv(0);A._GetAutoObject(
A.Device.Device).AwN(1);A._GetAutoObject(A.Device.Device).AwO(1);A._GetAutoObject(
A.Device.Device).AwP(1);A._GetAutoObject(A.Device.Device).A6(34,true,A.jV,0,null
);}break;default:A.ab5("%s%e",AH_,As.Id);}},_Init:function(aArg){C.Ei._Init.call(
this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={I:this},0);C.Nb.
_Init.call(this.T9={I:this},0);C.Nb._Init.call(this.Wh={I:this},0);C.BW._Init.call(
this.T$={I:this},0);this.__proto__=C.ANH;var B;this.Dq(C.AOV);this.T9.H(IT);this.
T9.Aj(true);this.T9.T(A.aaR(A.acf.ACl));this.T9.Bh(false);this.T9.Ne(93);this.Wh.
H(P9);this.Wh.Aj(true);this.Wh.T(A.aaR(A.acf.AdP));this.Wh.Bh(true);this.Wh.Ne(92
);this.T$.H(A$9);this.T$.Aj(true);this.T$.Bk9(true);this.T$.T(A.aaR(A.acf.A52));
this.T$.Bh(false);this.J(this.T9,-1);this.J(this.Wh,-1);this.J(this.T$,-1);this.
T9.AR=[B=this.T9,B.Nh];this.Wh.AR=[B=this.Wh,B.Nh];this.T$.AR=[this,this.BjP];this.
T$.At([B=this.FactoryResetScope,B.B_,B.B$]);this.T$.CK(this.FactoryResetScope);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope._Done();
this.T9._Done();this.Wh._Done();this.T$._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.T9._ReInit(
);this.Wh._ReInit();this.T$._ReInit();this.T9.T(A.aaR(A.acf.ACl));this.Wh.T(A.aaR(
A.acf.AdP));this.T$.T(A.aaR(A.acf.A52));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOV={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOV;this.
Text.R(A.aaR(A.acf.ACm));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACm));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AqU={QR:null,V_:null,_Init:function(aArg){C.TQ._Init.call(this,aArg);C.CH._Init.
call(this.QR={I:this},0);C.CH._Init.call(this.V_={I:this},0);this.__proto__=C.AqU;
this.QR.H(BsO);this.QR.R(A.aaR(A.acf.A_W));this.QR.A5(0x12);this.QR.L(A.jb.Text);
this.V_.H(A$3);this.V_.R(A.aaR(A.acf.AnY));this.V_.L(A.jb.Text);this.J(this.QR,0
);this.J(this.V_,0);this.QR.S(A.aaL(A.fl.Af));this.QR.A2(A.aaL(A.fl.Ak));this.QR.
Ct(A.aaL(A.fl.Bi));this.V_.S(A.aaL(A.fl.Af));this.V_.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TQ;this.QR._Done();this.V_._Done();C.TQ._Done.call(this
);},_ReInit:function(){C.TQ._ReInit.call(this);this.QR._ReInit();this.V_._ReInit(
);this.QR.R(A.aaR(A.acf.A_W));this.V_.R(A.aaR(A.acf.AnY));this.QR.S(A.aaL(A.fl.Af
));this.QR.A2(A.aaL(A.fl.Ak));this.QR.Ct(A.aaL(A.fl.Bi));this.V_.S(A.aaL(A.fl.Af
));this.V_.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TQ._Mark.call(this,D);
if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V_)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APr={QS:
null,_Init:function(aArg){C.TQ._Init.call(this,aArg);C.CH._Init.call(this.QS={I:
this},0);this.__proto__=C.APr;this.QS.H(BsP);this.QS.R(A.aaR(A.acf.Ub));this.QS.
A5(0x12);this.QS.L(A.jb.Text);this.J(this.QS,0);this.QS.S(A.aaL(A.fl.Af));this.QS.
A2(A.aaL(A.fl.Ak));this.QS.Ct(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=
C.TQ;this.QS._Done();C.TQ._Done.call(this);},_ReInit:function(){C.TQ._ReInit.call(
this);this.QS._ReInit();this.QS.R(A.aaR(A.acf.Ub));this.QS.S(A.aaL(A.fl.Af));this.
QS.A2(A.aaL(A.fl.Ak));this.QS.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TQ.
_Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqn={IJ:null,Abw:null,Ea:null,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.
IJ.H([this.Gy.M[2],0,this.Gy.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[1]]);this.Abw.H([this.IJ.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.Abw.L(this.Gy.AQ);this.IJ.L(this.
Gy.AQ);},Ce:function(Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hq=Ad;if(
!!this.AX){var Ib=this.AX.AmN(Ad,14);var AtI=this.AX.AOE(Ad,7);this.IJ.Aw(A._GetAutoObject(
A.Device.Converter).AmM(AtI));this.Abw.Aw(A._GetAutoObject(A.Device.Converter).A4G(
Ib));this.Am();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IJ={I:this},0);A.acg.Ap._Init.call(this.Abw={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqn;this.IJ.H(A$5);this.IJ.L(A.jb.Text
);this.Abw.H(BsQ);this.Abw.L(A.jb.Text);this.Ea.H(BsR);this.Ea.L(A.jb.Bc);this.J(
this.IJ,0);this.J(this.Abw,0);this.J(this.Ea,0);this.IJ.Aw(A.aaL(A.aci.TH));this.
Abw.Aw(A.aaL(A.aci.TH));},_Done:function(){this.__proto__=C.M1;this.IJ._Done();this.
Abw._Done();this.Ea._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IJ._ReInit();this.Abw._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AMZ={ZL:null
,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.ZL.H([this.Gy.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.ZL.L(this.Gy.AQ);},Ce:function(
Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Ka=this.
AX.KM(Ad,26);if(Ka>0)this.ZL.R(A.ab2(Ka.toFixed(),5));else this.ZL.R(Rm);this.Am(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZL={I:this},0);this.__proto__=C.AMZ;this.ZL.H(BsS);this.J(this.ZL,0);this.ZL.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.ZL._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.ZL._ReInit();this.ZL.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.ZL
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARD={Ap:null,Ai:function(Ae){C.AeP.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARD;this.Text.H(BsT);this.Ap.H(AZG);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Ae$));},_Done:function(){this.__proto__=C.AeP;this.Ap._Done(
);C.AeP._Done.call(this);},_ReInit:function(){C.AeP._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeP._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yn={Text:
null,Dd:null,AP:null,Gv:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nm],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AIF],0);A.zV([this,this.Nm
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nm],this);},De:function(
E){C.BQ.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gv.L(E);this.D2.Zn(E);}
,Wv:function(E){C.BQ.Wv.call(this,E);this.D2.CT(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Nm:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C4._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C4._Init.call(this.A_={I:this},0);this.__proto__=C.Yn;this.Text.H(BsU);this.
Text.A5(0x11);this.Dd.H(Ayr);this.AP.DC(A$Z);this.AP.DM(A$0);this.AP.L(A.jb.Bc);
this.Gv.H(BsV);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(BsW);this.D2.Zn(A.jb.
Bm);this.D2.CT(A.jb.Re);this.D2.Hl(2);this.A_.DC(BsX);this.A_.DM(BsY);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gv,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjP));this.Gv.Aw(A.aaL(A.ach.Gv));this.D2.
S(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gv._Done();this.D2._Done();this.A_.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gv._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acj={FI:null
,JU:null,JT:null,AkG:null,AkH:null,Q4:null,QC:null,Abv:null,VY:null,PG:null,PH:null
,Sv:null,Gw:null,Gx:null,Ju:null,AlE:0,AlJ:0,D7:0,DW:0,A8:0,Bl:function(aSize){var
B;this.Dy.H([this.Hw.M[2]-10,this.Hw.M[1],this.H4.M[0]+10,this.Hw.M[3]]);this.Dy.
AFa((B=this.Dy.M)[2]-B[0]);this.Dy.HH(this.Dy.Gs,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A8===1)||(this.A8===2)){var A0S=this.A1Q(this.A8);if(!!
A0S){this.Abv.Z(true);this.Abv.H(A0S.M);this.Abv.L(this.V.AQ);this.VY.Z(true);this.
VY.H(A0S.M);}else{this.Abv.Z(false);this.VY.Z(false);}this.Hw.Z(false);this.H4.Z(
false);}else{this.Abv.Z(false);this.VY.Z(false);this.Hw.Z(Fu||GE);this.H4.Z(Fu||
GE);}},Qo:function(G){if(!!this.Q){if(this.FF===1)A.pe([this,this.U8],this);else
if(this.FF===4)A.pe([this,this.A0a],this);else if(this.FF===5)A.pe([this,this.AZ_
],this);}C.BW.Qo.call(this,G);},J$:function(G){switch(this.A8){case 0:C.BW.J$.call(
this,G);break;case 2:break;default:this.Ads(this);}},J6:function(G){switch(this.
A8){case 0:C.BW.J6.call(this,G);break;default:this.Aim(this);}},A1l:function(G){
var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlJ)this.
D7=this.AlJ;if(this.D7<A._GetAutoObject(A.Device.Device).AcA)this.D7=A._GetAutoObject(
A.Device.Device).AcA;if(this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.
D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[
0],this.DW));A.abo(this.JT,0);}}this.DJ(this);this.Am();},AZ_:function(s){this.A1l(
s);},AlV:function(G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AZ_],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A1X:function(G){var F;if(this.A8===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.A8===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlE)this.DW=this.AlE;if(this.
DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);}}this.
DJ(this);this.Am();},A0a:function(s){this.A1X(s);},AlW:function(G){this.FF=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0a],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U8:function(G){this.Ew(this.A8+1);},Ads:function(G){this.FF=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfC:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aev));(F=this.N,F[1].call(
F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=[this,this.U8];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(A.aaL(A.ach.AmT
));(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aim];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=
this.N,F[1].call(F[0])).Co=null;}break;default:this.FI.AkK((F=this.N,F[1].call(F[
0])));}},A9S:function(E){if(A.aaZ(this.JU,E))return;if(!!this.JU)A.z$([this,this.
A3k],this.JU,0);this.JU=E;if(!!this.JU)A.zX([this,this.A3k],this.JU,0);A.pe([this
,this.A3k],this);},A3k:function(G){var F;this.D7=(F=this.JU,F[1].call(F[0]));this.
Am();},A9R:function(E){if(A.aaZ(this.JT,E))return;if(!!this.JT)A.z$([this,this.A3j
],this.JT,0);this.JT=E;if(!!this.JT)A.zX([this,this.A3j],this.JT,0);A.pe([this,this.
A3j],this);},A3j:function(G){var F;this.DW=(F=this.JT,F[1].call(F[0]));this.Am();
},FU:function(G){this.Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;
if(!this.A8)this.FI.Aju((F=this.N,F[1].call(F[0])));this.A8=EN;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=!!this.A8;this.
Am();},Aim:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3x:function(G){},AyM:function(
s){this.A3x(s);},A28:function(G){},Ba$:function(s){this.A28(s);},A1Q:function(Ath
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkG={I:this},0);A.acg.AK._Init.call(this.AkH={I:this},0);A.acg.AK._Init.call(
this.Q4={I:this},0);A.acg.Ap._Init.call(this.QC={I:this},0);A.acg.AK._Init.call(
this.Abv={I:this},0);A.acg.BU._Init.call(this.VY={I:this},0);A.acg.Text._Init.call(
this.PG={I:this},0);A.acg.Text._Init.call(this.PH={I:this},0);A.acg.Text._Init.call(
this.Sv={I:this},0);A.Core.BK._Init.call(this.Gw={I:this},0);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Ju={I:this},0);this.__proto__=C.Acj;
this.H(AfA);this.T(A.aaR(A.acf.Arh));this.Background.H(AfA);this.V.H(BD);this.V.
R(A.aaR(A.acf.AGQ));this.V.A5(0x12);this.AkG.H(BsZ);this.AkG.L(A.jb.Gi);this.AkH.
H(Bs0);this.AkH.L(A.jb.H8);this.Q4.H(Bs1);this.Q4.L(A.jb.E1);this.QC.H(Bs2);this.
Abv.H(Bs3);this.VY.H(Bs4);this.VY.Ng(3);this.VY.L(A.jb.AV);this.VY.Z(false);this.
PG.H(Bs5);this.PG.Hl(8);this.PG.I9(true);this.PG.A5(0x11);this.PG.L(0xFF000000);
this.PH.H(Bs6);this.PH.Hl(8);this.PH.I9(true);this.PH.A5(0x11);this.PH.L(0xFF000000
);this.Sv.H(Bs7);this.Sv.I9(false);this.Sv.A5(0x12);this.Sv.L(0xFF000000);this.Gw.
Filter=5;this.Gw.Bw=false;this.Gx.Filter=4;this.Gx.Bw=false;this.Ju.Filter=1;this.
JW(this.V,-1);this.JW(this.Dy,-2);this.J(this.AkG,-1);this.J(this.AkH,-1);this.J(
this.Q4,-1);this.J(this.QC,-1);this.J(this.Abv,-1);this.J(this.VY,-1);this.J(this.
PG,-1);this.J(this.PH,0);this.J(this.Sv,0);this.QC.Aw(A.aaL(A.ach.ADr));this.PG.
S(A.aaL(A.fl.Af));this.PH.S(A.aaL(A.fl.Af));this.Sv.S(A.aaL(A.fl.Ak));this.Gw.BL=[
this,this.AlV];this.Gw.D1=[this,this.AZ_];this.Gx.BL=[this,this.AlW];this.Gx.D1=[
this,this.A0a];this.Ju.BL=[this,this.Ads];this.FI=A._NewObject(C.Aeo,0);},_Done:
function(){this.__proto__=C.BW;this.AkG._Done();this.AkH._Done();this.Q4._Done();
this.QC._Done();this.Abv._Done();this.VY._Done();this.PG._Done();this.PH._Done();
this.Sv._Done();this.Gw._Done();this.Gx._Done();this.Ju._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkG._ReInit();this.AkH._ReInit(
);this.Q4._ReInit();this.QC._ReInit();this.Abv._ReInit();this.VY._ReInit();this.
PG._ReInit();this.PH._ReInit();this.Sv._ReInit();this.Gw._ReInit();this.Gx._ReInit(
);this.Ju._ReInit();this.T(A.aaR(A.acf.Arh));this.V.R(A.aaR(A.acf.AGQ));this.PG.
S(A.aaL(A.fl.Af));this.PH.S(A.aaL(A.fl.Af));this.Sv.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JT)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FH={XQ:null,Acl:
null,An2:0,An3:0,Dt:function(){if(!this.XQ)return 0;return this.XQ.MD;},C7:function(
aIndex){if(!this.XQ||(aIndex>=this.XQ.MD))return-1;return this.XQ.Get(aIndex);},
Gk:function(aIndex){return this.A6i().BS(this.C7(aIndex));},DZ:function(A9){if(!
this.XQ)return-1;return this.XQ.Avg(A9);},H3:function(){if(!this.XQ)return-1;return this.
XQ.H3();},AnB:function(E){if(this.An2===E)return;this.An2=E;A.pe([this,this.AVj]
,this);},AZ5:function(Aq){this.AnB(Aq);},AnC:function(E){if(this.An3===E)return;
this.An3=E;A.pe([this,this.AVk],this);},AZ6:function(Aq){this.AnC(Aq);},AVk:function(
G){A.abo([this,this.ASD,this.AZ6],0);},AVj:function(G){A.abo([this,this.ASC,this.
AZ5],0);},A6i:function(){return this.Acl;},ASC:function(){return this.An2;},ASD:
function(){return this.An3;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acl={I:this},0);this.__proto__=C.FH;},_Done:function(
){this.__proto__=C.AC;this.Acl._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acl._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acl)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMt={Init:
function(aArg){A.zV([this,this.BeD],A._GetAutoObject(A.Device.Helper).UB,0);A.zV([
this,this.BeB],A._GetAutoObject(A.Device.Helper).UA,0);this.BeD(this);this.BeB(this
);},At:function(E){C.FH.At.call(this,E);this.AnC(A._GetAutoObject(A.Device.Helper
).UB.Get(this.DZ(E)));this.AnB(A._GetAutoObject(A.Device.Helper).UA.Get(this.DZ(
E)));},AnB:function(E){if(this.An2===E)return;C.FH.AnB.call(this,E);A._GetAutoObject(
A.Device.Helper).UA.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UA.
Cg();},AnC:function(E){if(this.An3===E)return;C.FH.AnC.call(this,E);A._GetAutoObject(
A.Device.Helper).UB.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UB.
Cg();},BeD:function(G){this.An3=A._GetAutoObject(A.Device.Helper).UB.Get(this.DZ(
this.Q));A.pe([this,this.AVk],this);},BeB:function(G){this.An2=A._GetAutoObject(
A.Device.Helper).UA.Get(this.DZ(this.Q));A.pe([this,this.AVj],this);},_Init:function(
aArg){C.FH._Init.call(this,aArg);this.__proto__=C.AMt;this.XQ=A._GetAutoObject(A.
Device.Helper).AdV;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMu={Agz:null,ABP:0,ABO:0,Init:function(aArg){A.zV([this,this.BeQ],A._GetAutoObject(
A.Device.Helper).Aft,0);A.zV([this,this.BeO],A._GetAutoObject(A.Device.Helper).Afs
,0);A.zV([this,this.BeM],A._GetAutoObject(A.Device.Helper).Afr,0);A.zV([this,this.
BeS],A._GetAutoObject(A.Device.Helper).Afu,0);this.BeQ(this);this.BeO(this);this.
BeM(this);this.BeS(this);},At:function(E){C.FH.At.call(this,E);this.AnC(A._GetAutoObject(
A.Device.Helper).Aft.Get(this.DZ(E)));this.AnB(A._GetAutoObject(A.Device.Helper).
Afs.Get(this.DZ(E)));this.ASH(A._GetAutoObject(A.Device.Helper).Afr.Get(this.DZ(
E)));this.ASJ(A._GetAutoObject(A.Device.Helper).Afu.Get(this.DZ(E)));},AnB:function(
E){if(this.An2===E)return;C.FH.AnB.call(this,E);A._GetAutoObject(A.Device.Helper
).Afs.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afs.Cg();},AnC:function(
E){if(this.An3===E)return;C.FH.AnC.call(this,E);A._GetAutoObject(A.Device.Helper
).Aft.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Aft.Cg();},A6i:function(
){return this.Agz;},BeQ:function(G){this.An3=A._GetAutoObject(A.Device.Helper).Aft.
Get(this.DZ(this.Q));A.pe([this,this.AVk],this);},BeO:function(G){this.An2=A._GetAutoObject(
A.Device.Helper).Afs.Get(this.DZ(this.Q));A.pe([this,this.AVj],this);},ASJ:function(
E){if(this.ABP===E)return;this.ABP=E;A._GetAutoObject(A.Device.Helper).Afu.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Cg();A.pe([this,this.A$q],this
);},ASH:function(E){if(this.ABO===E)return;this.ABO=E;A._GetAutoObject(A.Device.
Helper).Afr.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afr.Cg();A.
pe([this,this.A$p],this);},A$p:function(G){A.abo([this,this.A76,this.ASH],0);},A$q:
function(G){A.abo([this,this.A77,this.ASJ],0);},BeM:function(G){this.ABO=A._GetAutoObject(
A.Device.Helper).Afr.Get(this.DZ(this.Q));A.pe([this,this.A$p],this);},BeS:function(
G){this.ABP=A._GetAutoObject(A.Device.Helper).Afu.Get(this.DZ(this.Q));A.pe([this
,this.A$q],this);},A77:function(){return this.ABP;},A76:function(){return this.ABO;
},_Init:function(aArg){C.FH._Init.call(this,aArg);A.Device.Agz._Init.call(this.Agz={
I:this},0);this.__proto__=C.AMu;this.XQ=A._GetAutoObject(A.Device.Helper).AgA;this.
Init(aArg);},_Done:function(){this.__proto__=C.FH;this.Agz._Done();C.FH._Done.call(
this);},_ReInit:function(){C.FH._ReInit.call(this);this.Agz._ReInit();},_Mark:function(
D){var B;C.FH._Mark.call(this,D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMa={RL:null,Init:function(
aArg){var B;A.zX([this,this.AiJ],[B=this.AnimalType,B.B_,B.B$],0);A.pe([this,this.
AiJ],this);this.Bb(this.RL);},Bk:function(E){C.I2.Bk.call(this,E);this.RL.Bx(this.
Jp.AM);},AiJ:function(G){A._GetAutoObject(A.Device.Device).Aww(this.AnimalType.Q
);},_Init:function(aArg){C.I2._Init.call(this,aArg);C.TB._Init.call(this.RL={I:this
},0);this.__proto__=C.AMa;var B;this.Jp.Ar(false);this.Jp.Aj(false);this.Jp.Z(false
);this.RL.H(AIC);this.RL.Aj(true);this.RL.Nc(14);this.RL.Ahq(0);this.RL.OM(0);this.
J(this.RL,-4);this.RL.AR=[this,this.AAn];this.RL.At([B=this.AnimalType,B.B_,B.B$
]);this.RL.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I2;this.RL._Done();C.I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(
this);this.RL._ReInit();},_Mark:function(D){var B;C.I2._Mark.call(this,D);if((B=
this.RL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TB={Filter:null,Eq:0,TableId:0,Operator:1,CP:function(){var F;this.Tn((F=this.
Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hw.H(AhS
);this.H4.H([aSize[0]-40,40,aSize[0],80]);this.Dy.H([this.Hw.M[2]-5,this.Hw.M[1]
,this.H4.M[0]+5,this.Hw.M[3]]);this.Dy.AFa((B=this.Dy.M)[2]-B[0]);this.Dy.HH(this.
Dy.Gs,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb
],E,0);A.pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tn((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.
Operator));else this.Tn(null);},Ahq:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.
Eq=E;A.pe([this,this.Mb],this);},Tn:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmO(this.TableId,this.Eq));this.Am();},OM:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mb],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TB;this.H(KX);this.V.A5(0x11);this.V.Ct(A.aaL(A.
fl.Bi));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Ct(A.aaL(A.fl.Bi));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARM={Ge:null,MP:null,DY:null,Y:null,Ef:null,Cm:null,CG:null,C$:null,Gm:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jf:null,AnimalType:null,Gender:null,Pk:
null,KW:null,Jd:null,YC:null,Amb:null,KH:0,M2:0,A3F:false,Init:function(aArg){var
B;A.zX([this,this.Bz3],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIJ],0);A.zV([
this,this.AtU],this.MP,0);A.zX([this,this.AtU],[B=A._GetAutoObject(A.Device.Device
),B.Awd,B.AyI],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEt
,B.AIJ],0);A.zV([this,this.GH],this.MP,0);A.zX([this,this.AiJ],this.BZ.Q,0);A.pe([
this,this.AiJ],this);A.pe([this,this.Bee],this);A.pe([this,this.AtU],this);A.pe([
this,this.GH],this);A.pe([this,this.A29],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALf],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArD(A.jb.E1);else
this.Ef.ArD(A.jb.Gi);if(A._GetAutoObject(A.Device.Device).AeJ){if(!!(F=this.Cm.Dk
,F[1].call(F[0])))this.Cm.ArD(A.jb.E1);else this.Cm.ArD(A.jb.Gi);}else this.Cm.ArD(
A.jb.Re);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},LN:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lf())A._GetAutoObject(A.Device.Device
).A6(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gq();A._GetAutoObject(A.Device.Helper).Aqb(A._GetAutoObject(A.
Device.Helper).W);this.Apu();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFh(0);},E4:function(G){C.AB.E4.call(this,G);this.Jd.Ar(false);
A._GetAutoObject(A.Device.Device).Ul(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.E5();A._GetAutoObject(C.A$).Fy();},Fj:function(G){var B;this.Ay.
Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},AtU:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALf(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aeg(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter
).Rf((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A2Y]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A2X],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeJ)this.JF(this.Cm);}var Bdt=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeJ||!!(CA=this.Cm.Dk,CA[1].call(CA[0])));if(this.MP.AOz()>0){if((
this.AV===this.Cm)&&Bdt)this.Bb(this.Y.TJ(this.Cm,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeJ&&(this.AV===this.Cm))&&!!(F=this.Cm.Dk,F[1].call(F[0])))this.
JF(this.Ef);if(Bdt)this.Bcg(this);},Adq:function(G){A._GetAutoObject(A.Device.Device
).Dv(13);},AiV:function(){var F;this.Ge.Cg(A._GetAutoObject(A.Device.Device).An);
if(this.MP.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);else{var L7=A._GetAutoObject(A.Device.Device).An.LS(0,this.Ge.Id);A._GetAutoObject(
A.Device.Device).SN(L7);var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(
this.Ge.Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.
Cg(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,this.Ge.Id);A._GetAutoObject(A.Device.Device).SN(L7);var B1=A._NewObject(
A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(this.Ge.Id);B1.OnSetBodyWeight(this.
M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Du());B1.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).Wx(65280);this.Jd.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFh(F.AvO+1));this.A3F=true;A.pe([this,
this.ALf],this);this.Apu();},GH:function(G){this.Cm.ATh(A._GetAutoObject(A.Device.
Device).AeJ);A._GetAutoObject(A.Device.Helper).JX(this.BZ,this.MP.NU(14));A._GetAutoObject(
A.Device.Helper).JX(this.C9,this.MP.NU(23));A._GetAutoObject(A.Device.Helper).JX(
this.CG,this.MP.NU(32));A._GetAutoObject(A.Device.Helper).JX(this.Ee,this.MP.NU(
18));A._GetAutoObject(A.Device.Helper).JX(this.C$,this.MP.NU(7));A._GetAutoObject(
A.Device.Helper).JX(this.Gm,this.MP.NU(34));this.YC.Z(!this.MP.AOz());var O;var Aa=
null;var Apa=this.AV;for(O=0;O<this.MP.AfL.NP();O++){Aa=this.ByW(this.MP.AfL.OC(
O));if(!!Aa)this.ZA(Aa);}this.JF(Apa);A._GetAutoObject(A.Device.Helper).ANk(this.
Y);A.pe([this,this.A29],this);this.Am();},AeT:function(E){if(this.KH===E)return;
this.KH=E;A.abo([this,this.Av1,this.AeT],0);},Ahl:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Anj,this.Ahl],0);},Bcg:function(G){this.Ge.Gq();A._GetAutoObject(
A.Device.Helper).Aqb(this.Ge);this.Ge.Q2(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Ge.Nd(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Ge.SF(A._GetAutoObject(
A.Device.Helper).AMb(0,this.Ge));this.Ge.Ae1(true);if(this.MP.NU(14))this.Ge.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NU(32))this.Ge.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NU(7))this.Ge.JR(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NU(34))this.Ge.Nf(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alj=A._GetAutoObject(A.Device.Helper).A0$(this.Ge,0,A._GetAutoObject(
A.Device.Device).An);if(!Alj)this.AiV();else A._GetAutoObject(A.Device.Helper).AKb(
this.Ge,Alj,0,0,[this,this.ApA]);},Apu:function(){A._GetAutoObject(A.Device.Helper
).W.Nd(0);if(A._GetAutoObject(A.Device.Device).AeJ)A._GetAutoObject(A.Device.Helper
).W.Q2(0);this.AeT(0);this.Ahl(0);this.JF(this.Ef);this.Am();},ApA:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.Apu();break;case 43:this.JF(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As0,As.Id);}},JF:function(Ag){this.Bb(Ag);this.Y.HH(Ag,true
,null,null);this.Y.Vt(null,null);},Bee:function(G){this.Ee.Aho(A._GetAutoObject(
A.Device.Helper).W.AhR(1));this.AtU(this);},AiJ:function(G){this.C9.Aho(A._GetAutoObject(
A.Device.Helper).Abl(this.AnimalType.Q));},A29:function(G){var B;var BA8=this.Ay.
Background.Fo();var width=(BA8?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xo=this.Y.TJ(null,0x401);while(!!Xo&&(((B=Xo)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OU.isPrototypeOf(Xo)?Xo:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xo=this.Y.TJ(Xo,0x1);}},ByW:function(Aad){var Aa=null;switch(Aad){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gm;break;default:A.ab5("%s%e",Bs8
,Aad);}return Aa;},Bz3:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeJ
)A._GetAutoObject(A.Device.Helper).W.Q2(0);else if(!(F=this.Cm.Dk,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q2(A._GetAutoObject(A.Device.Helper).Du()-
A._GetAutoObject(A.Device.Helper).AmA(A._GetAutoObject(A.Device.Device).AdN));this.
AtU(this);},ALf:function(G){var B;var AKe=A.jV;var Ay5=A.jb.CJ;var Bcx=A.jb.AV;this.
Amb.Axz(this);if(this.A3F){this.A3F=false;AKe=A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.BoL),P8,A._GetAutoObject(A.Device.Converter).Rf(this.Ge.NaisId));
A.pe([B=this.Amb,B.StartTimer],this);Ay5=A.jb.E1;Bcx=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKe=A.aaR(A.acf.Bn2);else if((
this.AV===this.Cm)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKe=A.aaR(A.
acf.Bn1);this.YC.T(AKe);this.YC.Bli(Ay5);this.YC.Blj(Bcx);},A2Y:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajv();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajv();else if(As.PopupState===7){A._GetAutoObject(C.A$).Cf(76);
A._GetAutoObject(A.Device.Device).Ajv();}}}else A._GetAutoObject(A.Device.Device
).Ajv();},A2X:function(G){A._GetAutoObject(A.Device.Device).AuH();},DJ:function(
G){var B;if(!this.MP.AOz()){this.N.Lc.Dj(255);if(this.AV===this.Ef){this.N.C5(A.
aaL(A.ach.Edit));this.N.Co=[B=this.Ef,B.FU];}else if(this.AV===this.Cm){this.N.C5(
A.aaL(A.ach.Edit));this.N.Co=[B=this.Cm,B.FU];}else{this.N.C5(null);this.N.Co=null;
}}else{this.N.C5(A.aaL(A.ach.AmV));if((this.Ef.Aqo===A.jb.Gi)||(this.Cm.Aqo===A.
jb.Gi)){this.N.Lc.Dj(100);this.N.Co=null;}else{this.N.Lc.Dj(255);this.N.Co=[this
,this.Bcg];}}},Av1:function(){return this.KH;},Anj:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUq._Init.call(this.Ef={I:this},0);C.
AUm._Init.call(this.Cm={I:this},0);C.Axo._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.Asr._Init.call(this.Gm={I:this},0);C.AkO._Init.call(this.
Ee={I:this},0);C.AkO._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UL._Init.call(this.Jf={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pk={I:this},0);A.Device.KW._Init.call(this.KW={I:this},0);A.Device.TC._Init.call(
this.Jd={I:this},0);C.AUW._Init.call(this.YC={I:this},0);A.Core.Timer._Init.call(
this.Amb={I:this},0);this.__proto__=C.ARM;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dq(C.APf);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.
L(A.jb.CJ);this.Y.H(Fe);this.Y.JQ(9);this.Ef.H(AIC);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACw));this.Ef.ATh(true);this.Ef.AFA(false);this.Cm.H(A$9);this.Cm.Aj(true
);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.ATh(true);this.Cm.AFu(true);this.CG.H(AsZ);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(AsZ);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afj));this.Gm.H(A$_);this.Gm.Aj(true);this.Gm.T(A.aaR(A.acf.Jf)
);this.Ee.H(Bs9);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.Ga(1000);this.
Ee.EU(999000);this.Ee.Aho(A._GetAutoObject(A.Device.Helper).Abl(this.AnimalType.
Q));this.C9.H(A$_);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KH));this.C9.Ga(1000);
this.C9.EU(99000);this.C9.Aho(A._GetAutoObject(A.Device.Helper).Abl(this.AnimalType.
Q));this.BZ.H(AsY);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afo));this.Ay.H(Is);this.
Jd.B2=false;this.Jd.Cw=true;this.Jd.HM(1);this.Jd.Fp(1000);this.Jd.Ui(0);this.YC.
H(Aaa);this.YC.Aj(true);this.YC.ArD(A.jb.Text);this.Amb.PP(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cm,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gm,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YC,0);this.N.CE=[this,this.Ev];this.N.Ck=[this,
this.Adq];this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(A.ach.Aex));this.Y.El=[this
,this.Fj];this.Ef.Gr([this,this.D_,this.GQ]);this.Ef.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Anm,B.Nd]);this.Ef.AE7([this,this.AtU]);this.Ef.AS6([this,this.A2X]);
this.Ef.AS7([this,this.A2Y]);this.Cm.Gr([this,this.D_,this.GQ]);this.Cm.Ab2([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av4,B.Q2]);this.Cm.OE=[this,this.Bee];this.Cm.
AS6([this,this.A2X]);this.Cm.AS7([this,this.A2Y]);this.CG.Gr([this,this.D_,this.
GQ]);this.CG.LX([B=this.CG,B.FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.
Breed,B.B_,B.B$]);this.CG.CK(this.Breed);this.CG.Anq(this.Pk);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.Gm.Gr([this,this.D_,this.GQ]);this.
Gm.LX([B=this.Gm,B.FU]);this.Gm.L0(A.aaL(A.ach.Edit));this.Gm.At([B=this.Jf,B.B_
,B.B$]);this.Gm.CK(this.Jf);this.Gm.Anq(this.KW);this.Ee.At([this,this.Anj,this.
Ahl]);this.C9.At([this,this.Av1,this.AeT]);this.BZ.At([B=this.AnimalType,B.B_,B.
B$]);this.BZ.CK(this.AnimalType);this.Ay.BmE([this,this.A29]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jf.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Ge=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amj
);this.Jd.Q=[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ1];this.Amb.Mz=[this,
this.ALf];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cm._Done();this.CG._Done();this.C$._Done();this.
Gm._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jf._Done();this.AnimalType._Done();this.Gender._Done();this.Pk.
_Done();this.KW._Done();this.Jd._Done();this.YC._Done();this.Amb._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cm._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gm._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jf._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pk._ReInit();this.KW._ReInit();this.Jd._ReInit();this.YC._ReInit(
);this.Amb._ReInit();this.Ef.T(A.aaR(A.acf.ACw));this.Cm.T(A.aaR(A.acf.Aea));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afj));this.Gm.T(A.aaR(A.acf.Jf));
this.Ee.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KH));this.BZ.T(A.aaR(A.acf.Afo)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asq={Ze:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Ze={
I:this},0);this.__proto__=C.Asq;this.N.CX(A.acf.BhP);this.Number.H(Bs_);this.Je.
H(Bs$);this.IR.H(Bta);this.Akz(2);this.Bcd=false;this.Bdi=true;this.Bdj=false;this.
Ze.H(Btb);this.Ze.KQ(true);this.Ze.R(A.aaR(A.acf.A_3));this.Ze.L(A.jb.Text);this.
J(this.Ze,0);this.N.CE=null;this.N.Co=[this,this.AIQ];this.N.C1(null);this.Ze.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Ze.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Ze._ReInit();this.Ze.R(A.aaR(A.acf.A_3));this.Ze.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADI={Cs:null,FM:function(E){if(this.M4===E)return;C.HJ.FM.call(this,E);this.
Cs.CT(E);},Yl:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;
case 1:B5=this.Cs;break;case 2:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Cs={I:this
},0);this.__proto__=C.ADI;this.H(Btc);this.Cs.H(A$M);this.F0.H(Btd);this.J(this.
Cs,-2);this.Cs.Di=[this,this.GU];},_Done:function(){this.__proto__=C.HJ;this.Cs.
_Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.call(this);this.
Cs._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Cs)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asr={G3:null
,Bl:function(aSize){C.OR.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G3.M[0
]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hj)this.G3.FM(A.jb.CJ);else this.
G3.FM(A.jb.CS);},A1K:function(){this.Bb(this.G3);},_Init:function(aArg){C.OR._Init.
call(this,aArg);C.HJ._Init.call(this.G3={I:this},0);this.__proto__=C.Asr;this.G3.
H(Bte);this.J(this.G3,0);this.G3.At([this,this.ASo,this.AFo]);},_Done:function(){
this.__proto__=C.OR;this.G3._Done();C.OR._Done.call(this);},_ReInit:function(){C.
OR._ReInit.call(this);this.G3._ReInit();},_Mark:function(D){var B;C.OR._Mark.call(
this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axo={G3:null,Bl:function(aSize){C.OR.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G3.M[0]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hj)this.G3.FM(
A.jb.CJ);else this.G3.FM(A.jb.CS);},A1K:function(){this.Bb(this.G3);},_Init:function(
aArg){C.OR._Init.call(this,aArg);C.ADI._Init.call(this.G3={I:this},0);this.__proto__=
C.Axo;this.G3.AZ(0x18);this.G3.H(Btf);this.J(this.G3,0);this.G3.At([this,this.ASo
,this.AFo]);},_Done:function(){this.__proto__=C.OR;this.G3._Done();C.OR._Done.call(
this);},_ReInit:function(){C.OR._ReInit.call(this);this.G3._ReInit();},_Mark:function(
D){var B;C.OR._Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acm={ScreenTypeToString:
null,Dt:function(){return 4;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BS(this.C7(aIndex));},_Init:function(aArg){C.Cl.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acm;this.Cb.Set(0,3);this.Cb.Set(1,35);this.Cb.Set(2
,34);this.Cb.Set(3,43);},_Done:function(){this.__proto__=C.Cl;this.ScreenTypeToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVF={A13:false,Wu:function(G){this.Agr();A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.
Settings),[this,this.A3c]);A._GetAutoObject(C.BR).FW();this.ALZ();A._GetAutoObject(
C.BR).NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).FW();A._GetAutoObject(
C.BR).NC(A.aaR(A.acf.ARd)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dv(6);},DE:function(G){},CC:function(G){C.RK.CC.call(this,G);if(this.A13){this.A13=
false;A.pe([this,this.AZ7],this);}},Abn:function(){return C.AB0;},Abo:function(){
return C.ADh;},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6x(Math.max(A._GetAutoObject(A.Device.Device).AvQ,A._GetAutoObject(
A.Device.Helper).A6p(A._GetAutoObject(A.Device.Device).An))+1));},HO:function(G){
C.RK.HO.call(this,G);if(this.Akb()===false){this.N.Cv(A.aaL(A.ach.Avo));this.N.Ck=[
this,this.ANP];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(
){A._GetAutoObject(C.A$).Cf(86);},AAV:function(G){var aFilter=A._GetAutoObject(A.
Device.Device).An.Filter.E_();var AyT=aFilter.DL(26,4);if(!!AyT){aFilter.Ni(AyT);
A._GetAutoObject(A.Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},A6n:
function(){return C.APm;},Bfo:function(){var B;var Filter;var FilterCriterion;if(
!!A._GetAutoObject(A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.
Device).An.Filter.E_();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},A3c:function(G){A._GetAutoObject(A.Device.Device
).Dv(0);this.A13=true;A._GetAutoObject(C.A$).Cf(89);},_Init:function(aArg){C.RK.
_Init.call(this,aArg);this.__proto__=C.AVF;this.Dq(C.AC_);this.Dz(A.aaR(A.acf.A7J
));this.AS2(A._GetAutoObject(C.AxU));},_ReInit:function(){C.RK._ReInit.call(this
);this.Dz(A.aaR(A.acf.A7J));},_className:"Application::YoungNoTransponderListScreen"
};C.AVE={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AVE;this.
KU.Ar(false);this.KU.Aj(false);this.KU.Z(false);this.Bme(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQT={Sp:null,Q:null,A7F:0,M4:0,Init:function(aArg){this.AS5(6);},At:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sp)this.Sp.At(E);},AS5:function(
E){if(this.A7F===E)return;this.A7F=E;var X;switch(E){case 2:X=A._NewObject(C.HJ,
0);break;case 3:X=A._NewObject(C.ADI,0);break;case 4:X=A._NewObject(C.AQQ,0);break;
case 5:X=A._NewObject(C.AQR,0);break;case 6:X=A._NewObject(C.AvH,0);break;default:{
X=null;A.ab5("%s%i",Btg,E);}}this.Bmd(X);},Bmd:function(E){if(this.Sp===E)return;
if(!!this.Sp){this.Sp.At(null);this.HN(this.Sp);}this.Sp=E;if(!!this.Sp){this.Sp.
At(this.Q);this.J(this.Sp,0);}},FM:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.Sp)this.Sp.FM(E);},SM:function(Gz){if(!!this.Sp)this.Sp.SM(Gz);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQT;this.H(Ayc);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sp)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQQ={CU:null,Cs:null,FM:function(
E){if(this.M4===E)return;C.HJ.FM.call(this,E);this.Cs.CT(E);this.CU.CT(E);},Yl:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cs;break;
case 2:B5=this.CU;break;case 3:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Cs={I:this},0);this.__proto__=C.AQQ;this.H(Bth);this.G0.
H(As9);this.CU.H(A$N);this.Cs.H(A$O);this.F0.H(A$P);this.J(this.CU,-2);this.J(this.
Cs,-2);this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HJ;this.CU._Done();this.Cs._Done();C.HJ._Done.call(this);},_ReInit:function(
){C.HJ._ReInit.call(this);this.CU._ReInit();this.Cs._ReInit();},_Mark:function(D
){var B;C.HJ._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACF={SZ:null,Ai:function(Ae){C.Abk.Ai.call(this,Ae);this.SZ.L(this.V.AQ);},_Init:
function(aArg){C.Abk._Init.call(this,aArg);C.CH._Init.call(this.SZ={I:this},0);this.
__proto__=C.ACF;this.V.Z(false);this.AW.H(Bti);this.AW.AS5(4);this.SZ.H(Btj);this.
SZ.R(A.aaR(A.acf.Kj));this.SZ.L(A.jb.Bm);this.J(this.SZ,0);this.SZ.S(A.aaL(A.fl.
Af));this.SZ.A2(A.aaL(A.fl.Ak));this.SZ.Ct(null);},_Done:function(){this.__proto__=
C.Abk;this.SZ._Done();C.Abk._Done.call(this);},_ReInit:function(){C.Abk._ReInit.
call(this);this.SZ._ReInit();this.SZ.R(A.aaR(A.acf.Kj));this.SZ.S(A.aaL(A.fl.Af)
);this.SZ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abk._Mark.call(this,D);
if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={YU:null,T2:null,AQ:0,A6X:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YU.L(this.AQ);this.T2.L(this.AQ);},A9G:function(E){var B;if(this.A6X===
E)return;this.A6X=E;if(E){this.YU.Z(true);this.T2.DC([this.T2.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YU.Z(false);this.T2.DC([this.T2.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C4._Init.call(
this.YU={I:this},0);A.acg.C4._Init.call(this.T2={I:this},0);this.__proto__=C.LW;
this.H(AZH);this.YU.AZ(0x2D);this.YU.DC(AhU);this.YU.DM(A$$);this.YU.L(A.jb.Text
);this.T2.AZ(0x36);this.T2.DC(A$$);this.T2.DM(Btk);this.T2.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YU,0);this.J(this.T2,0);},_Done:function(){this.__proto__=
A.Core.P;this.YU._Done();this.T2._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YU._ReInit();this.T2._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AT6={Su:null,Pz:null,C$:null,BZ:null,CG:null,GP:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pk:null,UL:null,KW:null,Init:function(aArg){A.zX([this
,this.AuB],this.BZ.Q,0);A.zX([this,this.AMS],this.CG.Q,0);A.zX([this,this.Bp7],this.
Su.Q,0);A.zX([this,this.Ave],this.C$.Q,0);A.zX([this,this.AVB],this.GP.Q,0);},AuB:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BZ.Q,F[1].call(F[
0])));},Bp7:function(G){var F;A._GetAutoObject(A.Device.Device).Aw7((F=this.Su.Q
,F[1].call(F[0])));},Ave:function(G){var F;A._GetAutoObject(A.Device.Device).JR((
F=this.C$.Q,F[1].call(F[0])));},AVB:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},AMS:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BW._Init.call(this.Su={I:this},0);C.Iq._Init.call(this.Pz={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axo.
_Init.call(this.CG={I:this},0);C.Asr._Init.call(this.GP={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pk={I:this},0);C.UL._Init.call(this.UL={I:
this},0);A.Device.KW._Init.call(this.KW={I:this},0);this.__proto__=C.AT6;var B;this.
I_((A.aaR(A.acf.Asd)+Ayn)+A.aaR(A.acf.AjA));this.Su.H(AhX);this.Su.Aj(true);this.
Su.T(A.aaR(A.acf.A$A));this.Su.Bh(true);this.Su.Bx(0);this.Pz.H(Aya);this.Pz.Aj(
true);this.Pz.Z(true);this.Pz.T(A.aaR(A.acf.AdN));this.Pz.Ga(0);this.Pz.EU(99);this.
Pz.IO(A.aaR(A.acf.Kj));this.Pz.I$(A.aaR(A.acf.GK));this.C$.H(Aaa);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afj));this.C$.Bh(true);this.C$.Bx(0);this.BZ.H(Ak$);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afo));this.BZ.Bh(true);this.BZ.Bx(0);this.CG.H(
AcL);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bh(false);this.GP.H(
AcL);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jf));this.GP.Bh(true);this.AnimalType.
At(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.At(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.At(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.Device).Breed);
this.UL.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Su,0);this.
J(this.Pz,0);this.J(this.C$,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GP
,0);this.Su.At([B=this.WeightRecordingScope,B.B_,B.B$]);this.Su.CK(this.WeightRecordingScope
);this.Pz.At([B=A._GetAutoObject(A.Device.Device),B.A7Z,B.Baw]);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.BZ.At([B=this.AnimalType,B.B_,B.
B$]);this.BZ.CK(this.AnimalType);this.CG.Gr([this,this.D_,this.GQ]);this.CG.LX([
B=this.CG,B.FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$
]);this.CG.CK(this.Breed);this.CG.Anq(this.Pk);this.GP.Gr([this,this.D_,this.GQ]
);this.GP.LX([B=this.GP,B.FU]);this.GP.L0(A.aaL(A.ach.Edit));this.GP.At([B=this.
UL,B.B_,B.B$]);this.GP.CK(this.UL);this.GP.Anq(this.KW);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cd;this.Su._Done();this.Pz._Done();this.C$._Done();this.
BZ._Done();this.CG._Done();this.GP._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pk._Done();this.UL._Done();this.
KW._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
Su._ReInit();this.Pz._ReInit();this.C$._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GP._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pk._ReInit();this.UL._ReInit();
this.KW._ReInit();this.I_((A.aaR(A.acf.Asd)+Ayn)+A.aaR(A.acf.AjA));this.Su.T(A.aaR(
A.acf.A$A));this.Pz.T(A.aaR(A.acf.AdN));this.Pz.IO(A.aaR(A.acf.Kj));this.Pz.I$(A.
aaR(A.acf.GK));this.C$.T(A.aaR(A.acf.Afj));this.BZ.T(A.aaR(A.acf.Afo));this.CG.T(
A.aaR(A.acf.Breed));this.GP.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.Cd._Mark.
call(this,D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AT5={QM:null,FA:null,Im:null,C_:null,Dl:null,EL:null,AutoRegistrationMode:null
,AdQ:null,Init:function(aArg){var B;A.zX([this,this.BgN],this.QM.Q,0);A.zX([this
,this.Bd1],[B=A._GetAutoObject(A.Device.Device),B.AR_,B.AZN],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Ue,B.UZ],0);A.pe([this,this.Bd1],this);A.pe([
this,this.Adr],this);},BgN:function(G){var F;A._GetAutoObject(A.Device.Device).Awk((
F=this.QM.Q,F[1].call(F[0])));},Bd1:function(G){switch(A._GetAutoObject(A.Device.
Device).Agu){case 0:A._GetAutoObject(A.Device.Helper).JX(this.Im,true);break;case
1:A._GetAutoObject(A.Device.Helper).JX(this.Im,false);break;default:throw new Error(
Btl+A._GetAutoObject(A.Device.Device).Agu.toFixed());}},Adr:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.
Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.BW._Init.call(this.QM={I:this},0);C.BW._Init.call(this.
FA={I:this},0);C.AGw._Init.call(this.Im={I:this},0);C.Iq._Init.call(this.C_={I:this
},0);C.Iq._Init.call(this.Dl={I:this},0);C.AvR._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdQ._Init.
call(this.AdQ={I:this},0);this.__proto__=C.AT5;var B;this.I_(A.aaR(A.acf.Aqf));this.
QM.H(AIC);this.QM.Aj(true);this.QM.T(A.aaR(A.acf.Aqf));this.QM.Bh(false);this.QM.
Ga(-1);this.QM.EU(1);this.FA.H(UV);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.
aaR(A.acf.Aqc));this.FA.Bh(true);this.Im.H(Aaa);this.Im.Aj(true);this.Im.Z(true);
this.Im.T(A.aaR(A.acf.AEd));this.Im.Bh(true);this.C_.H(Ak$);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.Aqx));this.C_.Bh(false);this.C_.Ga(2);this.C_.EU(
6);this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dl.H(AcL);this.Dl.
Aj(true);this.Dl.T(A.aaR(A.acf.Zg));this.Dl.Bh(true);this.Dl.Ga(0);this.Dl.EU(12
);this.Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(A.acf.Ey));this.EL.H(Btm);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bh(false);this.EL.ArT(A.aaR(A.acf.Aqe));this.AutoRegistrationMode.
At(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QM,0);this.
J(this.FA,0);this.J(this.Im,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL
,0);this.QM.At([B=this.AutoRegistrationMode,B.B_,B.B$]);this.QM.CK(this.AutoRegistrationMode
);this.FA.At([B=this.AdQ,B.B_,B.B$]);this.FA.CK(this.AdQ);this.Im.Uh([B=A._GetAutoObject(
A.Device.Device),B.Ws,B.AZQ]);this.Im.Akq([B=A._GetAutoObject(A.Device.Device),B.
Av6,B.AyC]);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY]);this.Dl.
At([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UZ]);this.EL.DB(A.aaL(A.ach.AjR));
this.EL.OL([B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY]);this.EL.PO([B=A._GetAutoObject(
A.Device.Device),B.Ue,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.QM._Done();this.FA._Done();this.Im._Done();this.C_._Done();this.Dl._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdQ._Done();C.Cd._Done.
call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.QM._ReInit();this.FA.
_ReInit();this.Im._ReInit();this.C_._ReInit();this.Dl._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdQ._ReInit();this.I_(A.aaR(A.acf.Aqf
));this.QM.T(A.aaR(A.acf.Aqf));this.FA.T(A.aaR(A.acf.Aqc));this.Im.T(A.aaR(A.acf.
AEd));this.C_.T(A.aaR(A.acf.Aqx));this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.
acf.Ey));this.Dl.T(A.aaR(A.acf.Zg));this.Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(
A.acf.Ey));this.EL.ArT(A.aaR(A.acf.Aqe));},_Mark:function(D){var B;C.Cd._Mark.call(
this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FA)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AU9={OF:null,FA:null,Im:null,C_:null,Dl:null,EL:null,Afn:null,Init:function(
aArg){var B;A.zX([this,this.BeF],[B=A._GetAutoObject(A.Device.Device),B.ASA,B.AZ3
],0);A.zX([this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY],0);A.zX([
this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Ue,B.UZ],0);A.pe([this,this.
BeF],this);A.pe([this,this.Adr],this);},BeF:function(G){var AKV=false;var AaJ=false;
switch(A._GetAutoObject(A.Device.Device).AkY){case 0:{AKV=false;AaJ=false;}break;
case 1:{AKV=true;AaJ=false;}break;case 2:{AKV=false;AaJ=true;}break;default:throw new
Error(Btn+A._GetAutoObject(A.Device.Device).AkY.toFixed());}A._GetAutoObject(A.Device.
Helper).JX(this.Im,AKV);A._GetAutoObject(A.Device.Helper).JX(this.C_,AaJ);A._GetAutoObject(
A.Device.Helper).JX(this.Dl,AaJ);A._GetAutoObject(A.Device.Helper).JX(this.EL,AaJ
);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[
1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Iq._Init.call(this.OF={
I:this},0);C.BW._Init.call(this.FA={I:this},0);C.AGw._Init.call(this.Im={I:this}
,0);C.Iq._Init.call(this.C_={I:this},0);C.Iq._Init.call(this.Dl={I:this},0);C.AvR.
_Init.call(this.EL={I:this},0);C.Afn._Init.call(this.Afn={I:this},0);this.__proto__=
C.AU9;var B;this.I_(A.aaR(A.acf.LinkTransponder));this.OF.H(AIC);this.OF.Aj(true
);this.OF.Z(true);this.OF.T(A.aaR(A.acf.A7e));this.OF.Bh(false);this.OF.Ga(1);this.
OF.EU(365);this.OF.IO(A.aaR(A.acf.Kj));this.OF.I$(A.aaR(A.acf.GK));this.FA.H(UV);
this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqc));this.FA.Bh(true);this.
Im.H(Aaa);this.Im.Aj(true);this.Im.Z(true);this.Im.T(A.aaR(A.acf.AEd));this.Im.Bh(
false);this.C_.H(Ak$);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.Aqx
));this.C_.Bh(false);this.C_.Ga(2);this.C_.EU(6);this.C_.IO(A.aaR(A.acf.OA));this.
C_.I$(A.aaR(A.acf.Ey));this.Dl.H(AcL);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.Zg)
);this.Dl.Bh(true);this.Dl.Ga(0);this.Dl.EU(12);this.Dl.IO(A.aaR(A.acf.OA));this.
Dl.I$(A.aaR(A.acf.Ey));this.EL.H(Aye);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bh(false);this.EL.ArT(A.aaR(A.acf.Aqe));this.J(this.OF,0);this.J(this.FA,0);this.
J(this.Im,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL,0);this.OF.At([B=
A._GetAutoObject(A.Device.Device),B.A8s,B.BaM]);this.FA.At([B=this.Afn,B.B_,B.B$
]);this.FA.CK(this.Afn);this.Im.Uh([B=A._GetAutoObject(A.Device.Device),B.Ws,B.AZQ
]);this.Im.Akq([B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyC]);this.C_.At([B=
A._GetAutoObject(A.Device.Device),B.Ud,B.UY]);this.Dl.At([B=A._GetAutoObject(A.Device.
Device),B.Ue,B.UZ]);this.EL.DB(A.aaL(A.ach.AjR));this.EL.OL([B=A._GetAutoObject(
A.Device.Device),B.Ud,B.UY]);this.EL.PO([B=A._GetAutoObject(A.Device.Device),B.Ue
,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.OF._Done();this.
FA._Done();this.Im._Done();this.C_._Done();this.Dl._Done();this.EL._Done();this.
Afn._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
OF._ReInit();this.FA._ReInit();this.Im._ReInit();this.C_._ReInit();this.Dl._ReInit(
);this.EL._ReInit();this.Afn._ReInit();this.I_(A.aaR(A.acf.LinkTransponder));this.
OF.T(A.aaR(A.acf.A7e));this.OF.IO(A.aaR(A.acf.Kj));this.OF.I$(A.aaR(A.acf.GK));this.
FA.T(A.aaR(A.acf.Aqc));this.Im.T(A.aaR(A.acf.AEd));this.C_.T(A.aaR(A.acf.Aqx));this.
C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dl.T(A.aaR(A.acf.Zg));this.
Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(A.acf.Ey));this.EL.ArT(A.aaR(A.acf.Aqe));
},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Im)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afn={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bf3],[B=A._GetAutoObject(A.Device.Device),B.ASA,B.AZ3],0);A.pe([
this,this.Bf3],this);},Dt:function(){return 3;},Gk:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw3(E);},Bf3:function(G){this.Q=A._GetAutoObject(A.Device.Device).AkY;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afn;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cl;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cl.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jb={B6:null,IU:null,Cq:null,Amr:null,Sc:null,And:null,Ajx:null,Text:null,CW:
null,D6:0,Lz:false,Ai:function(Ae){var B;A.acn.Jb.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IU.Ar(true);else{this.IU.Ar(false);this.CW.Z(false);}},A39:function(G
){var B;var Bd=this.Text.M;var Nu=0;var Nv=0;if(this.CW.Es[0]<Bd[0])Nu=Bd[0]-this.
CW.Es[0];if(this.CW.Es[0]>Bd[2])Nu=Bd[2]-this.CW.Es[0];if(this.CW.Es[1]<Bd[1])Nv=
Bd[1]-this.CW.Es[1];if(this.CW.EC[1]>Bd[3])Nv=Bd[3]-this.CW.EC[1];if(!!Nu||!!Nv)
this.Text.Gb(A.abf(this.Text.Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];
var C3=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]
))Nu=0;if(C3[1]<=((B=this.Text.M)[3]-B[1]))Nv=0;this.Text.Gb([Nu,Nv]);},Ame:function(
G){if(!this.B6)return;var A3B=this.Text.AGJ(this.D6);var pos=this.Text.Afc(A3B);
this.CW.DM(A.abe(pos,[0,this.B6.Ascent]));this.CW.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IU.Bw){this.IU.Ar(false);this.IU.Ar(true);}if(this.Lz){A.pe([this,this.
A39],this);this.Lz=false;}},AAr:function(G){if(!this.B6)return;var EH=this.Text.
AGJ(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnK(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ACW(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnK(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Afc(EH);var AaI=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATI(A.abe(pos,[0,AaI]));}if(this.Cq.CO===5
){var pos=this.Text.Afc(EH);var AaI=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATI(A.abf(pos,[0,AaI]));}var Vc=this.Text.AnK(EH);var Iw=this.Text.
String.charCodeAt(Vc)||0;if(((Iw===0x5E)||(Iw===0x7E))||(Iw===0x25))Vc=Vc-1;if(Vc
!==this.D6){this.D6=Vc;A.pe([this,this.Ame],this);this.Lz=true;}},Bd_:function(G
){if(!this.D6)return;var Iw=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iw===0x5E)||(Iw===0x7E))||(Iw===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.Lz=true;},AAs:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iw=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iw===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.Lz=true;}
,Bem:function(G){this.Text.R(A.abU(this.Text.String,Bto,this.D6));this.D6=this.D6+
1;this.Lz=true;},Bea:function(G){var Iw=this.Ajx.DQ;var Aud=String.fromCharCode(
Iw);A.ab5("%c",Iw);if((((Iw===0x5E)||(Iw===0x7E))||(Iw===0xAD))||(Iw===0x25))Aud=
Btp+String.fromCharCode(Iw);this.Text.R(A.abU(this.Text.String,Aud,this.D6));this.
D6=this.D6+Aud.length;this.Lz=true;},_Init:function(aArg){A.acn.Jb._Init.call(this
,aArg);A.acl.TC._Init.call(this.IU={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.Amr={I:this},0);A.Core.BK._Init.call(this.Sc={I:this
},0);A.Core.BK._Init.call(this.And={I:this},0);A.Core.BK._Init.call(this.Ajx={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C4._Init.call(this.CW={
I:this},0);this.__proto__=C.Jb;var B;this.H(Btq);this.IU.B2=false;this.IU.Cw=true;
this.IU.Fp(500);this.IU.Ui(500);this.Cq.Filter=147;this.Cq.Bw=false;this.Amr.Filter=
151;this.Sc.Filter=44;this.And.Filter=149;this.Ajx.Filter=145;this.Text.AZ(0x3F);
this.Text.H(Btr);this.Text.KQ(true);this.Text.A5(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CW.DC(Bts);this.CW.DM(Btt);this.CW.A_h(2);this.CW.A_g(2);this.
CW.L(0xFF000000);this.CW.Z(false);this.J(this.Text,0);this.J(this.CW,0);this.IU.
Q=[B=this.CW,B.Fo,B.Z];this.Cq.BL=[this,this.AAr];this.Cq.D1=[this,this.AAr];this.
Amr.BL=[this,this.Bd_];this.Amr.D1=[this,this.Bd_];this.Sc.BL=[this,this.AAs];this.
Sc.D1=[this,this.AAs];this.And.BL=[this,this.Bem];this.And.D1=[this,this.Bem];this.
Ajx.BL=[this,this.Bea];this.Ajx.D1=[this,this.Bea];this.Text.Q3([this,this.Ame]);
this.Text.S(A.aaL(A.aci.ACJ));this.B6=A.aaL(A.aci.ACJ);},_Done:function(){this.__proto__=
A.acn.Jb;this.IU._Done();this.Cq._Done();this.Amr._Done();this.Sc._Done();this.And.
_Done();this.Ajx._Done();this.Text._Done();this.CW._Done();A.acn.Jb._Done.call(this
);},_ReInit:function(){A.acn.Jb._ReInit.call(this);this.IU._ReInit();this.Cq._ReInit(
);this.Amr._ReInit();this.Sc._ReInit();this.And._ReInit();this.Ajx._ReInit();this.
Text._ReInit();this.CW._ReInit();},_Mark:function(D){var B;A.acn.Jb._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amr)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AUX={Jb:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuH();break;case 7:
A._GetAutoObject(A.Device.Device).Aqg();break;case 4:A._GetAutoObject(A.Device.Device
).Ajv();break;case 5:A._GetAutoObject(A.Device.Device).Aqh();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A$).Fy();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jb._Init.call(this.Jb={I:this},0);this.__proto__=C.AUX;this.H(Cc);this.
N.Z(true);this.Dq(C.AqT);this.Jb.H(Fe);this.J(this.Jb,0);this.Bb(this.Jb);this.N.
CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jb._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jb._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATP={Wu:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.
Azb())A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.AOc),[this,this.Ayz]);else A._GetAutoObject(
C.BR).Qy(A.aaR(A.acf.AOc),null);A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR
).Qy(A.aaR(A.acf.AB5),[this,this.Bam]);A._GetAutoObject(C.BR).FW();A._GetAutoObject(
C.BR).Qy(A.aaR(A.acf.AG2),[this,this.A7Q]);A._GetAutoObject(C.BR).FW();A._GetAutoObject(
C.BR).Qy(A.aaR(A.acf.A5d),[this,this.Bal]);A._GetAutoObject(C.BR).FW();A._GetAutoObject(
C.BR).Qy(A.aaR(A.acf.UnlinkTransponder),[this,this.Bnh]);}else{A._GetAutoObject(
C.BR).XI(A.aaR(A.acf.AOc));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(
A.aaR(A.acf.AB5));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(A.aaR(A.
acf.AG2));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(A.aaR(A.acf.A5d)
);A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.A5B)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.
A5T));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Am$)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6);},Abn:function(){return C.
AB1;},Abo:function(){return C.ADf;},Q6:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avh());},HO:function(G){C.AkI.HO.call(
this,G);this.N.Cv(null);this.N.FN(A.aaR(A.acf.A47));if(this.Azb()){this.N.Ck=[this
,this.Ayz];this.N.Jx.Dj(255);}else{this.N.Ck=null;this.N.Jx.Dj(100);}this.N.C5(A.
aaL(A.ach.Options));this.N.CX(A.jV);this.N.ON(false);this.N.OO(false);this.N.I6.
Dj(255);},AR2:function(G){A._GetAutoObject(A.Device.Device).Dv(0);var AiS=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A6(96,true,AiS.toFixed(),0,null);},AR3:function(G){A._GetAutoObject(A.Device.Device
).Dv(0);this.A5J(this);},AR8:function(G){var B;A._GetAutoObject(A.Device.Device).
Dv(0);if(!A._GetAutoObject(A.Device.Device).Ur){A._GetAutoObject(A.Device.Device
).A6(73,true,A.jV,0,[this,this.Beo]);return;}if(A._GetAutoObject(A.Device.Device
).Aq_()===false){A.zX([this,this.Xy],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.
Xa],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,this.Agc]);return;
}A.zX([this,this.AlS],[B=A._GetAutoObject(A.Device.Device).GC,B.SA,B.Fb],0);A._GetAutoObject(
A.Device.Device).Asg(2);},Azb:function(){if(!this.Bg)return false;var Aty=this.Bg.
AX;if(!Aty)return false;if(!Aty.B9())return false;return true;},AlS:function(G){
var B;switch(A._GetAutoObject(A.Device.Device).GC.EV){case 0:A.z$([this,this.AlS
],[B=A._GetAutoObject(A.Device.Device).GC,B.SA,B.Fb],0);break;case 3:{A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();this.Dz(A.aaR(A.acf.Bnx));A.
_GetAutoObject(A.Device.Device).Aqv();}break;case 4:{A._GetAutoObject(A.Device.Device
).A6(97,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E5();}break;default:;
}A.ab5("%e",A._GetAutoObject(A.Device.Device).GC.EV);},_Init:function(aArg){C.AkI.
_Init.call(this,aArg);this.__proto__=C.ATP;this.Dq(C.APi);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADf={Px:null,I5:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Px={I:this},0);A.acg.Ap._Init.call(this.I5={I:this},0);this.__proto__=
C.ADf;this.Er.Z(false);this.DS.Z(false);this.Px.H(Btu);this.Px.L(A.jb.Text);this.
I5.H(Btv);this.I5.L(A.jb.Text);this.J(this.Px,0);this.J(this.I5,0);this.Px.Aw(A.
aaL(A.ach.Avw));this.I5.Aw(A.aaL(A.ach.Avr));},_Done:function(){this.__proto__=C.
Dc;this.Px._Done();this.I5._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Px._ReInit();this.I5._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMN={Init:function(aArg){var B;A.zX([this,this.AAv],[B=A._GetAutoObject(A.Device.
Device),B.AEp,B.AIG],0);A.pe([this,this.AAv],this);},Wu:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.Azb())A._GetAutoObject(C.BR).Qy(A.aaR(
A.acf.AOb),[this,this.Ayz]);else A._GetAutoObject(C.BR).XI(A.aaR(A.acf.AOb));A._GetAutoObject(
C.BR).FW();A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.AB3),[this,this.Bam]);A._GetAutoObject(
C.BR).FW();A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.AG2),[this,this.A7Q]);A._GetAutoObject(
C.BR).FW();A._GetAutoObject(C.BR).Qy(A.aaR(A.acf.A5c),[this,this.Bal]);}else{A._GetAutoObject(
C.BR).XI(A.aaR(A.acf.AOb));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(
A.aaR(A.acf.AB3));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(A.aaR(A.
acf.AG2));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).XI(A.aaR(A.acf.A5c)
);}A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.A5B)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.
A5T));A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Am$)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6);},Abn:function(){return C.
ABX;},Abo:function(){return C.ADd;},Q6:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).AOy());},HO:function(G){C.AkI.HO.call(
this,G);this.N.Cv(A.aaL(A.ach.Aex));this.N.Ck=[this,this.Adq];this.N.FN(A.jV);this.
N.C5(null);this.N.CX((A.aaR(A.acf.A47)+String.fromCharCode(0x0A))+A.aaR(A.acf.BgV
));this.N.ON(false);this.N.OO(false);this.N.I6.Dj(255);},AR2:function(G){A._GetAutoObject(
A.Device.Device).Dv(0);var AiS=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending(
);A._GetAutoObject(A.Device.Device).A6(96,true,AiS.toFixed(),0,null);},AR3:function(
G){A._GetAutoObject(A.Device.Device).Dv(0);this.A5I(this);},AR8:function(G){var B;
A._GetAutoObject(A.Device.Device).Dv(0);if(!A._GetAutoObject(A.Device.Device).Ur
){A._GetAutoObject(A.Device.Device).A6(73,true,A.jV,0,[this,this.Beo]);return;}if(
A._GetAutoObject(A.Device.Device).Aq_()===false){A.zX([this,this.Xy],[B=A._GetAutoObject(
A.Device.Device),B.Wt,B.Xa],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.Agc]);return;}A.zX([this,this.AlS],[B=A._GetAutoObject(A.Device.Device
).GC,B.SA,B.Fb],0);A._GetAutoObject(A.Device.Device).Asg(0);},Azb:function(){var
Aty=this.Bg.AX;if(!Aty)return false;var O;for(O=0;O<Aty.B9();O++)if(A._GetAutoObject(
A.Device.Helper).Aj0(Aty.AOM(O,34))===false)return true;return false;},Adq:function(
G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(16);},AAv:function(G){if(
A._GetAutoObject(A.Device.Device).Aqj===1)A.pe([this,this.A5P],this);},AlS:function(
G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV){case 0:A.z$([this,this.
AlS],[B=A._GetAutoObject(A.Device.Device).GC,B.SA,B.Fb],0);break;case 3:{A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dz(A.aaR(A.acf.BgW));A._GetAutoObject(
A.Device.Device).Aqv();}break;case 4:{A._GetAutoObject(A.Device.Device).A6(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E5();}break;default:;}},_Init:
function(aArg){C.AkI._Init.call(this,aArg);this.__proto__=C.AMN;this.Dq(C.AOR);this.
Init(aArg);},_className:"Application::BirthRegistrationsListScreen"};C.AOR={DX:function(
G){C.Aep.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(11)
);},_Init:function(aArg){C.Aep._Init.call(this,aArg);this.__proto__=C.AOR;this.Text.
R(A.aaR(A.acf.ABQ));},_ReInit:function(){C.Aep._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ABQ));},_className:"Application::HeaderBirthRegistrationsList"};C.APi={
DX:function(G){C.Aep.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdU(12));},_Init:function(aArg){C.Aep._Init.call(this,aArg);this.__proto__=C.APi;
this.Text.R(A.aaR(A.acf.AF7));},_ReInit:function(){C.Aep._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AF7));},_className:"Application::HeaderPurchasedAnimalsList"};
C.AB1={Ka:0,AP:null,SR:null,O8:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SR.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SR.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rf(this.
Ka));this.SR.R(A._GetAutoObject(A.acj.KJ).ACL(this.O8));},Ce:function(Ad){if(!this.
AX)return;this.Hq=Ad;if(!!this.AX){this.Ka=this.AX.KM(Ad,26);this.O8=this.AX.Hu(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SR={I:this},0);this.__proto__=C.AB1;
this.AP.H(AZJ);this.AP.L(A.jb.Bc);this.SR.H(AZK);this.J(this.AP,0);this.J(this.SR
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.SR.S(A.aaL(A.fl.Ak));
this.SR.A2(A.aaL(A.fl.Bi));this.SR.Ct(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SR._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SR._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.SR.S(A.aaL(A.fl.Ak));this.SR.A2(A.
aaL(A.fl.Bi));this.SR.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUm={
AeQ:null,AbW:null,TK:null,KK:null,TI:null,NI:null,Te:A.jV,Ai:function(Ae){var F;
C.SO.Ai.call(this,Ae);this.TK.L(this.V.AQ);var Apn=false;if((!this.Dk||!(F=this.
Dk,F[1].call(F[0])))&&!this.A8)Apn=true;this.TK.Z(Apn);this.Pq.Z(!Apn);this.VO.Z(
!Apn);this.QY.Z(!Apn);this.Yf.Z(!Apn);this.P2.Z(!Apn);},Ads:function(G){var B;var
F;if(!this.Te.length){C.SO.Ads.call(this,G);return;}var BO=this.FY;var Gu=A._GetAutoObject(
A.Device.AnE).Be1(this.Te);this.Te=A.jV;if(!Gu){A._GetAutoObject(A.Device.Device
).A6(101,true,A.jV,0,this.AbW);A.pe(this.AeQ,this);return;}if(this.Asc&&(Gu>A._GetAutoObject(
A.Device.Helper).Du())){A._GetAutoObject(A.Device.Device).A6(102,true,A.jV,0,this.
AbW);A.pe(this.AeQ,this);return;}this.Ug(((B=(Gu|0))<0)?B+0x100000000:B);if(this.
FY!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],this.FY));A.abo(this.Dk,0);}if(!
!this.OE)A.pe(this.OE,this);},A2M:function(G){if(this.Te.length<10)this.Te=this.
Te+String.fromCharCode(this.KK.DQ);},AR5:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.Ads(this);else this.NI.NH=true;},AS6:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},AS7:function(E){if(A.aa0(this.AbW,E))return;this.AbW=
E;},_Init:function(aArg){C.SO._Init.call(this,aArg);A.acg.Text._Init.call(this.TK={
I:this},0);A.Core.BK._Init.call(this.KK={I:this},0);A.Core.BK._Init.call(this.TI={
I:this},0);A.Core.BK._Init.call(this.NI={I:this},0);this.__proto__=C.AUm;this.TK.
H(Btw);this.TK.I9(true);this.TK.A5(0x12);this.TK.R(A.aaR(A.acf.A5p));this.KK.Filter=
143;this.TI.Filter=149;this.NI.Filter=145;this.J(this.TK,0);this.TK.S(A.aaL(A.fl.
EK));this.KK.BL=[this,this.A2M];this.TI.BL=[this,this.Ba_];this.NI.BL=[this,this.
AR5];},_Done:function(){this.__proto__=C.SO;this.TK._Done();this.KK._Done();this.
TI._Done();this.NI._Done();C.SO._Done.call(this);},_ReInit:function(){C.SO._ReInit.
call(this);this.TK._ReInit();this.KK._ReInit();this.TI._ReInit();this.NI._ReInit(
);this.TK.R(A.aaR(A.acf.A5p));this.TK.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SO._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUq={AeQ:null,AbW:null,KK:null
,TI:null,NI:null,Te:A.jV,IY:function(G){var F;if(!this.Te.length){C.Q9.IY.call(this
,G);return;}if(this.Asb)return;if(!this.Te.length)this.TI.NH=true;var BO=this.AM;
var Gu=A._GetAutoObject(A.Device.AnE).BAF(this.Te);this.Te=A.jV;if(!Gu){if((this.
Te.length<13)&&!A._GetAutoObject(A.Device.Device).Ur)A._GetAutoObject(A.Device.Device
).A6(105,true,A.jV,0,this.AbW);else A._GetAutoObject(A.Device.Device).A6(103,true
,A.jV,0,this.AbW);A.pe(this.AeQ,this);return;}this.Bx(Gu);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OE)A.pe(this.
OE,this);},A2M:function(G){if(this.Asb)return;if(this.Te.length<17)this.Te=this.
Te+String.fromCharCode(this.KK.DQ);},AR5:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.IY(this);else this.NI.NH=true;},AS6:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},AS7:function(E){if(A.aa0(this.AbW,E))return;this.AbW=
E;},_Init:function(aArg){C.Q9._Init.call(this,aArg);A.Core.BK._Init.call(this.KK={
I:this},0);A.Core.BK._Init.call(this.TI={I:this},0);A.Core.BK._Init.call(this.NI={
I:this},0);this.__proto__=C.AUq;this.ArU(false);this.KK.Filter=143;this.TI.Filter=
149;this.NI.Filter=145;this.KK.BL=[this,this.A2M];this.TI.BL=[this,this.Atb];this.
NI.BL=[this,this.AR5];},_Done:function(){this.__proto__=C.Q9;this.KK._Done();this.
TI._Done();this.NI._Done();C.Q9._Done.call(this);},_ReInit:function(){C.Q9._ReInit.
call(this);this.KK._ReInit();this.TI._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q9._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APf={AjW:null,AjU:null,Gv:null,Q7:null,SL:null,C4:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A8q,B.AFh],0);A.pe([
this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.AjW.L(E);this.AjU.
L(E);this.Q7.Zn(E);this.Gv.L(E);this.SL.Zn(E);},Wv:function(E){this.Q7.CT(E);this.
SL.CT(E);},DX:function(G){this.Q7.T(A._GetAutoObject(A.Device.Device).AvO.toFixed(
));A.pe([this,this.BBZ],this);},BBZ:function(G){var Xk=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avh());this.SL.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xk);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.AjW={I:this},0);A.acg.Ap._Init.call(this.AjU={
I:this},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.Q7={I:this
},0);C.D2._Init.call(this.SL={I:this},0);A.acg.C4._Init.call(this.C4={I:this},0);
this.__proto__=C.APf;this.AjW.H(P7);this.AjU.H(Btx);this.Gv.H(Bty);this.Gv.L(A.jb.
CS);this.Q7.AZ(0x14);this.Q7.H(Btz);this.Q7.Zn(A.jb.Bm);this.Q7.CT(A.jb.Re);this.
Q7.Hl(2);this.Q7.Blc(0x11);this.SL.AZ(0x14);this.SL.H(BtA);this.SL.Zn(A.jb.Bm);this.
SL.CT(A.jb.Re);this.SL.Hl(2);this.C4.DC(Afx);this.C4.DM(BtB);this.C4.L(A.jb.Bc);
this.J(this.AjW,0);this.J(this.AjU,0);this.J(this.Gv,0);this.J(this.Q7,0);this.J(
this.SL,0);this.J(this.C4,0);this.AjW.Aw(A.aaL(A.ach.Avq));this.AjU.Aw(A.aaL(A.ach.
APN));this.Gv.Aw(A.aaL(A.ach.Gv));this.Q7.S(A.aaL(A.fl.Bi));this.SL.S(A.aaL(A.fl.
Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AjW._Done();this.
AjU._Done();this.Gv._Done();this.Q7._Done();this.SL._Done();this.C4._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AjW._ReInit();
this.AjU._ReInit();this.Gv._ReInit();this.Q7._ReInit();this.SL._ReInit();this.C4.
_ReInit();this.Q7.S(A.aaL(A.fl.Bi));this.SL.S(A.aaL(A.fl.Bi));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARu={Abb:null,Aej:null,VL:null,Init:function(aArg){this.Bb(this.Abb);},Ll:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaC];this.BP.Ck=
null;this.BP.Co=[this,this.A2P];this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(A.aaL(
A.ach.Yt));}return this.BP;},AAo:function(G){var Aa=(C.Aje.isPrototypeOf(G)?G:null
);if(Aa===this.Abb)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aej)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$G);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Aje._Init.call(this.
Abb={I:this},0);C.Aje._Init.call(this.Aej={I:this},0);C.ARy._Init.call(this.VL={
I:this},0);this.__proto__=C.ARu;var B;this.H(Rl);this.Text.R(A.aaR(A.acf.ABV));this.
Abb.H(IT);this.Abb.T(A.aaR(A.acf.AjA));this.Aej.H(P9);this.Aej.T(A.aaR(A.acf.AGc
));this.VL.H(Z$);this.VL.T(A.aaR(A.acf.A4Z));this.J(this.Abb,0);this.J(this.Aej,
0);this.J(this.VL,0);this.Text.S(A.aaL(A.fl.Ak));this.Abb.AR=[this,this.AAo];this.
Aej.AR=[this,this.AAo];this.VL.ASK([B=A._GetAutoObject(A.Device.Device),B.AEt,B.
AIJ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Abb._Done();this.
Aej._Done();this.VL._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.
call(this);this.Abb._ReInit();this.Aej._ReInit();this.VL._ReInit();this.Text.R(A.
aaR(A.acf.ABV));this.Abb.T(A.aaR(A.acf.AjA));this.Aej.T(A.aaR(A.acf.AGc));this.VL.
T(A.aaR(A.acf.A4Z));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fq._Mark.
call(this,D);if((B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARt={AnimalTableFields:null,Ay:null,Y:
null,JN:null,CP:function(){this.AiF(this);},Init:function(aArg){A.zV([this,this.
AiF],this.AnimalTableFields,0);A.pe([this,this.AiF],this);},DE:function(G){C.Fq.
DE.call(this,G);this.MO(this);},Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ev];this.BP.Ck=[this,this.A2N];this.BP.Co=[this,this.
A3g];this.BP.C5(A.aaL(A.ach.Aq6));this.BP.Cv(A.aaL(A.ach.AqZ));this.BP.C1(A.aaL(
A.ach.Yt));}return this.BP;},Ev:function(G){this.AA0();this.AaC(this);},AiF:function(
G){this.AoW();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aaj=A._GetAutoObject(
C.Amj).OC(O);this.A0T(Aaj);}this.J(this.JN,0);A.aaS([this,this.MO],this);},Fj:function(
G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);
this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},A0T:function(
G_){var Ay2=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sd,0);Aa.T(Ay2.BS(G_));Aa.Aj(true);Aa.G4=G_;Aa.A9F(this.AnimalTableFields.NU(G_
));this.J(Aa,0);this.ZA(Aa);},AoW:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(AdG);}}
,AA0:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JN)){var Aa=(C.Sd.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G4);if(Aa.ASi())this.AnimalTableFields.
AUi(Aa.G4);}else A.ab5("%s",Ayi);}X=X.Ah;}this.AnimalTableFields.Cg();},A2N:function(
G){var B;var Aa=(C.Sd.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAg=(C.Sd.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAg){this.Ahy(AAg,Aa);A.pe([this,this.MO],this);}}},A3g:function(
G){var B;var Aa=(C.Sd.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAM=(C.Sd.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAM){this.Ahy(Aa,AAM);A.pe([this,this.MO],this);}}},AqC:function(
G){var B;A._GetAutoObject(A.Device.Device).Ash(this);A.pe([this,this.AiF],this);
},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AuW._Init.call(this.JN={I:this},0);
this.__proto__=C.ARt;this.H(Rl);this.Text.R(A.aaR(A.acf.AGc));this.Ay.H(Is);this.
Y.H(Baa);this.Y.JQ(1);this.JN.H(AH1);this.JN.Aj(true);this.JN.T(A.aaR(A.acf.A5C)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JN,0);this.Y.El=[this,this.Fj];
this.JN.AR=[this,this.AqC];this.AnimalTableFields=A._GetAutoObject(C.Amj);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fq;this.Ay._Done();this.Y._Done();this.
JN._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JN._ReInit();this.Text.R(A.aaR(A.acf.AGc));this.
JN.T(A.aaR(A.acf.A5C));this.CP();},_Mark:function(D){var B;C.Fq._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARs={Y:null,BZ:null,C$:null,CG:null,GP:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UK:null,Init:function(aArg){A.zX([this,this.AuB],this.BZ.Q,0);A.zX([
this,this.AMS],this.CG.Q,0);A.zX([this,this.AVB],this.GP.Q,0);A.zX([this,this.Ave
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this
);},Ll:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaC];this.BP.Ck=null;this.BP.Co=null;this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(
A.aaL(A.ach.Yt));}return this.BP;},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},AuB:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BZ.Q,F[1].call(F[0])));},AVB:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},Ave:function(G){var F;A._GetAutoObject(
A.Device.Device).JR((F=this.C$.Q,F[1].call(F[0])));},AMS:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fq._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaP._Init.call(this.BZ={
I:this},0);C.AaP._Init.call(this.C$={I:this},0);C.AaP._Init.call(this.CG={I:this
},0);C.AaP._Init.call(this.GP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UL._Init.call(this.UK={I:
this},0);this.__proto__=C.ARs;var B;this.H(Rl);this.Text.R(A.aaR(A.acf.AjA));this.
Y.H(Baa);this.Y.JQ(1);this.BZ.H(AhV);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(
A.aaR(A.acf.Afo));this.C$.H(Aya);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(
A.acf.Afj));this.CG.H(Aoj);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.GP.H(AsZ);this.GP.Ar(true);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jf
));this.Ay.H(Is);this.AnimalType.At(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.At(A._GetAutoObject(A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(
A.Device.Device).Breed);this.UK.At(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.CG,0);this.J(
this.GP,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.BZ.Zo(A.aaL(A.fl.H1));
this.BZ.Zp(A.aaL(A.fl.H1));this.BZ.At([B=this.AnimalType,B.B_,B.B$]);this.BZ.CK(
this.AnimalType);this.C$.Zo(A.aaL(A.fl.H1));this.C$.Zp(A.aaL(A.fl.H1));this.C$.At([
B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.CG.Zo(A.aaL(A.fl.H1));this.
CG.Zp(A.aaL(A.fl.H1));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.CK(this.Breed
);this.GP.Zo(A.aaL(A.fl.H1));this.GP.Zp(A.aaL(A.fl.H1));this.GP.At([B=this.UK,B.
B_,B.B$]);this.GP.CK(this.UK);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Y._Done();this.BZ._Done();this.C$._Done();this.CG._Done();this.GP._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UK._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this
);this.Y._ReInit();this.BZ._ReInit();this.C$._ReInit();this.CG._ReInit();this.GP.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UK._ReInit();this.Text.R(A.aaR(A.acf.AjA));this.BZ.T(A.aaR(
A.acf.Afo));this.C$.T(A.aaR(A.acf.Afj));this.CG.T(A.aaR(A.acf.Breed));this.GP.T(
A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amn={CB:0,All:A.abi(17,0,null),OC:function(Hz){return this.All.Get(Hz);},NP:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.All.Set(
O,0);this.CB=0;},J:function(Aad){if(this.CB>=17)A.ab5("%s",BtC);else{this.All.Set(
this.CB,Aad);this.CB=this.CB+1;}},Cg:function(){},E3:function(AhZ){var AJS=AhZ.indexOf(
String.fromCharCode(0x2C),0);var A1g=A.jV;var O=0;this.CB=0;while(O<17)if(AhZ===
A.jV)O++;else{if(AJS===-1){A1g=AhZ;AhZ=A.jV;}else{A1g=A.abV(AhZ,AJS);AhZ=A.ab1(AhZ
,0,AJS+1);}var Aaj=A.abZ(A1g,0,10)|0;if(this.Bi2(Aaj)){this.All.Set(this.CB,Aaj);
this.CB=this.CB+1;O++;}AJS=AhZ.indexOf(String.fromCharCode(0x2C),0);}if(AhZ!==A.
jV)A.ab5("%s",BtD);},toString:function(){var B;var AAe=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAe=AAe+AH3;AAe=AAe+(((B=this.All.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAe;},Contains:function(Aad){var O;for(O=0;O<this.CB;O=O+1)if(this.All.
Get(O)===Aad)return true;return false;},Bi2:function(Aad){return true;},_Init:function(
aArg){(this.All=[]).__proto__=C.Amn.All;this.__proto__=C.Amn;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.ALY={AfL:null,Init:function(aArg){var B;A.
zX([this,this.Bd5],[B=A._GetAutoObject(A.Device.Device),B.A7V,B.Bat],0);A.zX([this
,this.Bd6],[B=A._GetAutoObject(A.Device.Device),B.A7W,B.Bau],0);A.pe([this,this.
Bd5],this);A.pe([this,this.Bd6],this);},Clear:function(){C.Amn.Clear.call(this);
this.AfL.Clear();},Cg:function(){A._GetAutoObject(A.Device.Device).Ary(this.AfL.
toString());A._GetAutoObject(A.Device.Device).Arz(this.toString());},Bd5:function(
G){this.AfL.E3(A._GetAutoObject(A.Device.Device).ABx);A.we(this,0);},Bd6:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABy);A.we(this,0);},NU:function(Aad
){return this.AfL.Contains(Aad);},AUi:function(Aad){if(!this.NU(Aad))this.AfL.J(
Aad);},AOz:function(){return this.AfL.NP();},_Init:function(aArg){C.Amn._Init.call(
this,aArg);this.__proto__=C.ALY;this.AfL=A._NewObject(C.Amn,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amn._Mark.call(this,D);if((B=this.AfL)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amj={_Init:function(){C.ALY._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARy={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A5(0x11);this.V.Text.Hl(10);},Bl:function(aSize){C.T7.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.T7.
Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FQ=A.jb.Ad7;var GW=A.jb.Bm;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}if(!Hd
){this.Background.L(FQ);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FQ);this.V.L(GW);}this.LF=Hd;this.KD=Fu;this.Qp=GE;},_Init:function(
aArg){C.T7._Init.call(this,aArg);this.__proto__=C.ARy;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMM={YL:null,Ak3:null,Ll:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaC];this.BP.Ck=null;
this.BP.Co=null;this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaP._Init.call(this.
YL={I:this},0);C.AD2._Init.call(this.Ak3={I:this},0);this.__proto__=C.AMM;var B;
this.H(KX);this.YL.H(KX);this.YL.T(A.aaR(A.acf.Display));this.Ak3.At(A._GetAutoObject(
A.Device.Device).Aqj);this.J(this.YL,0);this.YL.Zo(A.aaL(A.fl.H1));this.YL.Zp(A.
aaL(A.fl.H1));this.YL.At([B=this.Ak3,B.B_,B.B$]);this.YL.CK(this.Ak3);this.Ak3.Bmt([
B=A._GetAutoObject(A.Device.Device),B.AEp,B.AIG]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YL._Done();this.Ak3._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YL._ReInit();this.Ak3._ReInit(
);this.YL.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak3)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AD2={AbJ:null,ListViewScopeToString:null,Dt:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gk:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BS(aIndex
);},DZ:function(A9){return A9;},H3:function(){return 1;},At:function(E){var F;C.
AC.At.call(this,E);if(!!this.AbJ)(F=this.AbJ,F[2].call(F[0],E));},Bmt:function(E
){if(A.aaZ(this.AbJ,E))return;if(!!this.AbJ)A.z$([this,this.A3m],this.AbJ,0);this.
AbJ=E;if(!!this.AbJ)A.zX([this,this.A3m],this.AbJ,0);A.pe([this,this.A3m],this);
},A3m:function(G){var F;if(!!this.AbJ)this.Q=(F=this.AbJ,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AD2;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AUW={
AB8:0,AB7:0,Ai:function(Ae){C.OU.Ai.call(this,Ae);this.Background.L(this.AB7);this.
V.L(this.AB8);},Blj:function(E){if(this.AB8===E)return;this.AB8=E;this.Am();},Bli:
function(E){if(this.AB7===E)return;this.AB7=E;this.Am();},_Init:function(aArg){C.
OU._Init.call(this,aArg);this.__proto__=C.AUW;this.Ar(false);this.AB8=A.jb.Text;
this.AB7=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHa={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Bdy],[B=A._GetAutoObject(A.Device.
Device),B.A8r,B.BaL],0);A.pe([this,this.Bdy],this);},Dt:function(){return 3;},Gk:
function(aIndex){return this.WeightValuePrecisionToString.BS(this.C7(aIndex));},
At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.Device).AwJ(E);},Bdy:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OJ;A.abo([this,this.B_,this.
B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHa;this.
Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cl;this.WeightValuePrecisionToString._Done();C.Cl._Done.call(this
);},_ReInit:function(){C.Cl._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUo={Uy:null,A_8:A.jV,Init:function(aArg){},Bl:function(aSize){C.BW.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.Uy.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BW.Ai.call(this,Ae);this.Uy.L(this.
V.AQ);},BmX:function(E){if(this.A_8===E)return;this.A_8=E;this.Uy.R(E);},_Init:function(
aArg){C.BW._Init.call(this,aArg);C.CH._Init.call(this.Uy={I:this},0);this.__proto__=
C.AUo;this.H(AcK);this.Uy.H(BtE);this.J(this.Uy,0);this.Uy.S(A.aaL(A.fl.Af));this.
Uy.A2(A.aaL(A.fl.Ak));this.Uy.Ct(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BW;this.Uy._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(
this);this.Uy._ReInit();this.Uy.S(A.aaL(A.fl.Af));this.Uy.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BW._Mark.call(this,D);if((B=this.Uy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Y1={MassDeregistrationCriterionToString:
null,Dt:function(){return 2;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BS(this.C7(aIndex));},_Init:function(
aArg){C.Cl._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y1;this.
Cb.Set(0,0);this.Cb.Set(1,1);},_Done:function(){this.__proto__=C.Cl;this.MassDeregistrationCriterionToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cl._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANF={Vf:null
,Y1:null,Y3:null,Ms:null,AtZ:0,Init:function(aArg){this.Bb(this.Y3);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBw=((A.aaR(A.acf.Aqr)+A.aaR(A.acf.Colon))+CQ)+this.
AtZ.toFixed();this.Ms.BmX(BBw);},CC:function(G){C.Ei.CC.call(this,G);A.zX([this,
this.ALh],this.Ms.Q,0);A.pe([this,this.ALh],this);},E4:function(G){C.Ei.E4.call(
this,G);A.z$([this,this.ALh],this.Ms.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Ms)&&!this.AtZ)this.N.HQ.Dj(100);else this.N.HQ.Dj(255);},Bej:
function(G){if(this.AtZ>0)A._GetAutoObject(A.Device.Device).A6(108,true,this.AtZ.
toFixed(),0,[this,this.BzK]);},ALh:function(G){var F;this.AtZ=A._GetAutoObject(A.
Device.Helper).Bip((F=this.Ms.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MH],
this);},Bed:function(G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(
A.Device.Device).A6(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Aq_()===false){this.Vf=[this,this.Bed];A.zX([this,this.Xy],[B=A._GetAutoObject(
A.Device.Device),B.Wt,B.Xa],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.Agc]);return;}A.zX([this,this.AlS],[B=A._GetAutoObject(A.Device.Device
).GC,B.SA,B.Fb],0);A._GetAutoObject(A.Device.Device).Asg(1);},Agc:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.Xy],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xa],0);this.
Vf=null;}},Xy:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhP===3){A.
_GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.Agc]);A.z$([this,this.
Xy],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xa],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},BzK:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BBr],this);},BBr:function(
G){A._GetAutoObject(A.Device.Helper).BxJ(this.Y1.Q);A._GetAutoObject(A.Device.Device
).A6(109,true,this.AtZ.toFixed(),0,null);A.pe([this,this.MH],this);A.pe([this,this.
ALh],this);},AlS:function(G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV
){case 0:A.z$([this,this.AlS],[B=A._GetAutoObject(A.Device.Device).GC,B.SA,B.Fb]
,0);break;case 3:A._GetAutoObject(A.Device.Device).Aqv();break;case 4:{A._GetAutoObject(
A.Device.Device).A6(88,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E5(
);}break;default:;}},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Y1._Init.
call(this.Y1={I:this},0);C.Cn._Init.call(this.Y3={I:this},0);C.AUo._Init.call(this.
Ms={I:this},0);this.__proto__=C.ANF;var B;this.Dq(C.AOT);this.Y3.H(IT);this.Y3.Aj(
true);this.Y3.T(A.aaR(A.acf.A51));this.Y3.Bh(false);this.Ms.H(BtF);this.Ms.Aj(true
);this.Ms.T(A.aaR(A.acf.A$m));this.Ms.Bh(true);this.Ms.A98(A.aaR(A.acf.Ok));this.
J(this.Y3,0);this.J(this.Ms,0);this.Y3.AR=[this,this.Bed];this.Ms.AR=[this,this.
Bej];this.Ms.AeR([this,this.Bej]);this.Ms.At([B=this.Y1,B.B_,B.B$]);this.Ms.CK(this.
Y1);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Y1._Done();this.
Y3._Done();this.Ms._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.
call(this);this.Y1._ReInit();this.Y3._ReInit();this.Ms._ReInit();this.Y3.T(A.aaR(
A.acf.A51));this.Ms.T(A.aaR(A.acf.A$m));this.Ms.A98(A.aaR(A.acf.Ok));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOT={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOT;this.
Text.R(A.aaR(A.acf.AdP));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdP));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANI={
Vf:null,Y2:null,AbO:null,Init:function(aArg){this.Bb(this.Y2);A.pe([this,this.MH
],this);},Bec:function(G){var B;var AzZ=A._GetAutoObject(A.Device.Device).ADO();
switch(AzZ){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A6(91,true,UW,0,[this,this.Bew]);break;
case 2:{this.Vf=[this,this.Bec];A.zX([this,this.Xy],[B=A._GetAutoObject(A.Device.
Device),B.Wt,B.Xa],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,
this.Agc]);}break;default:throw new Error(Bab+AzZ.toFixed());}},Agc:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.Xy],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xa],0);this.
Vf=null;}},Xy:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhP===3){A.
_GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.Agc]);A.z$([this,this.
Xy],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xa],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},Bey:function(G){var B;var AzZ=A._GetAutoObject(A.Device.Device
).ADP();switch(AzZ){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A6(95,true,A.jV,0,[this,this.BzL
]);break;case 2:{this.Vf=[this,this.Bey];A.zX([this,this.Xy],[B=A._GetAutoObject(
A.Device.Device),B.Wt,B.Xa],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.Agc]);}break;case 3:A._GetAutoObject(A.Device.Device).A6(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A6(93,true,A.jV,0,null
);break;default:throw new Error(Bab+AzZ.toFixed());}},Bew:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Byk],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bym],this);break;default:throw new Error(BtG+As.Id.toFixed());}},Byk:function(G){
if(A._GetAutoObject(A.Device.Device).ACf()){var A2z=A._GetAutoObject(A.Device.Device
).An.QG();A._GetAutoObject(A.Device.Device).A6(80,true,A2z.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A6(82,true,A.jV,0,null);A.aaS([this,this.BzG],
this);},Bym:function(G){if(A._GetAutoObject(A.Device.Device).AGh()){var A2z=A._GetAutoObject(
A.Device.Device).An.QG();A._GetAutoObject(A.Device.Device).A6(81,true,A2z.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A6(83,true,A.jV,0,null);A.aaS([
this,this.BAj],this);},BzL:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BBs],this);},BBs:function(
G){A._GetAutoObject(A.Device.Device).A6(92,true,UW,0,[this,this.Bew]);},BAj:function(
G){A._GetAutoObject(A.Device.Device).A6(92,false,A.jV,0,null);},BzG:function(G){
A._GetAutoObject(A.Device.Device).A6(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Cn._Init.call(this.Y2={I:this},0);C.Cn._Init.call(
this.AbO={I:this},0);this.__proto__=C.ANI;this.Dq(C.AOW);this.Y2.H(IT);this.Y2.Aj(
true);this.Y2.T(A.aaR(A.acf.ACf));this.Y2.Bh(false);this.AbO.H(P9);this.AbO.Aj(true
);this.AbO.T(A.aaR(A.acf.AGh));this.AbO.Bh(true);this.J(this.Y2,-1);this.J(this.
AbO,-1);this.Y2.AR=[this,this.Bec];this.AbO.AR=[this,this.Bey];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y2._Done();this.AbO._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y2._ReInit();this.AbO.
_ReInit();this.Y2.T(A.aaR(A.acf.ACf));this.AbO.T(A.aaR(A.acf.AGh));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOW={
_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOW;this.Text.R(
A.aaR(A.acf.ACl));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACl));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.RK={NW:null
,ATU:0,ADR:false,ADN:false,ADS:false,AlU:function(G){this.A5F(this);},AS2:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DP.AutoActions=E;A.zV([
this,this.BBa],this.NW,0);},ALZ:function(){this.AL2(A.aaR(A.acf.A$u),[this,this.
BBI],[this,this.A8l,this.AE_]);this.AL2(A.aaR(A.acf.AF8),[this,this.BBG],[this,this.
A8i,this.AE8]);this.AL2(A.aaR(A.acf.AnS),[this,this.BBH],[this,this.A8j,this.AE9
]);A._GetAutoObject(C.BR).FW();A._GetAutoObject(C.BR).NC(A.aaR(A.acf.Bns)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).FW();},AL2:function(Bwb,Bxm,BwG){if(!this.NW
)return;this.AL1(Bwb,Bxm,BwG);},BBI:function(G){this.AE_(!this.ADS);},BBG:function(
G){this.AE8(!this.ADN);},BBH:function(G){this.AE9(!this.ADR);},A3N:function(ED,BwF
){if(!this.NW)return;if(BwF)this.NW.Bgv(ED);else this.NW.BnL(ED);this.NW.Cg();},
A4s:function(Aia,Aib,BxE){A._GetAutoObject(C.BR).ABz(Aia,Aib,[this,this.A8B,this.
ATc],BxE);},AGu:function(ED){if(!this.NW)return;this.NW.AGu(ED);this.NW.Cg();},AE_:
function(E){if(this.ADS===E)return;this.ADS=E;this.A3N(256,E);A.abo([this,this.A8l
,this.AE_],0);},AE8:function(E){if(this.ADN===E)return;this.ADN=E;this.A3N(2,E);
A.abo([this,this.A8i,this.AE8],0);},AE9:function(E){if(this.ADR===E)return;this.
ADR=E;this.A3N(1,E);A.abo([this,this.A8j,this.AE9],0);},BBa:function(G){this.AE_(
this.NW.Contains(256));this.AE8(this.NW.Contains(2));this.AE9(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATc(this.NW.OC(this.NW.NP()-1));},ATc:function(E){if(this.
ATU===E)return;this.ATU=E;A.abo([this,this.A8B,this.ATc],0);},A8l:function(){return this.
ADS;},A8i:function(){return this.ADN;},A8j:function(){return this.ADR;},A8B:function(
){return this.ATU;},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=
C.RK;},_Mark:function(D){var B;C.GZ._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvN={Q:null,Cg:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADL:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kd:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,
0);if(!!E)A.pe([this,this.Kd],this);},AGu:function(ED){if(this.NP()>0)this.Axm(this.
NP()-1,ED);},Bgv:function(ED){if(this.Contains(ED))return;if(this.CB>=17){A.ab5(
"%s",AH2);return;}var AzS=0;for(;(AzS<=this.NP())&&(this.OC(AzS)<ED);AzS++);var AA5=
this.NP()-1;this.J(this.OC(AA5));for(;AA5>AzS;AA5--)this.Axm(AA5,this.OC(AA5-1));
this.Axm(AzS,ED);},BnL:function(ED){var index=this.DZ(ED);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axm(index,this.OC(index+1));this.Axm(index,0);this.
CB--;},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AvN;},_Mark:
function(D){var B;C.Vs._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.AvX={_Init:
function(){C.AvN._Init.call(this,0);var B;this.At([B=A._GetAutoObject(A.Device.Device
),B.A8v,B.BaP]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.AvY={_Init:function(){C.AvN._Init.call(this,0);var B;this.At([B=A._GetAutoObject(
A.Device.Device),B.A8w,B.BaQ]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxU={_Init:function(){C.AvN._Init.call(this,0);var B;this.At([B=
A._GetAutoObject(A.Device.Device),B.A83,B.Ba4]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADh={QQ:null,AjQ:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QQ={I:this},0);A.acg.Ap._Init.
call(this.AjQ={I:this},0);this.__proto__=C.ADh;this.Er.H(BtH);this.DS.H(BtI);this.
QQ.H(BtJ);this.QQ.R(A.aaR(A.acf.Ub));this.QQ.A5(0x11);this.QQ.L(A.jb.Text);this.
AjQ.H(AZG);this.AjQ.L(A.jb.Text);this.J(this.QQ,0);this.J(this.AjQ,0);this.QQ.S(
A.aaL(A.fl.Af));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.Ct(A.aaL(A.fl.Bi));this.AjQ.Aw(
A.aaL(A.ach.Avp));},_Done:function(){this.__proto__=C.Dc;this.QQ._Done();this.AjQ.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QQ._ReInit();this.AjQ._ReInit();this.QQ.R(A.aaR(A.acf.Ub));this.QQ.S(A.aaL(A.fl.
Af));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB0={AP:null,ST:null,OV:null,AKl:A.jV,BdH:A.jV,Mf:0,Init:function(aArg){},Bl:
function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OV.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OV.M[2]-1,0,this.OV.M[2]+1,
aSize[1]]);this.ST.H([this.OV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OV.L(this.V.AQ);this.ST.L(this.V.AQ);this.T(this.AKl);this.
OV.R(this.BdH);this.ST.R(this.Mf.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){var Ka=this.AX.KM(Ad,26);var A2r=A._GetAutoObject(A.Device.
Converter).Rf(Ka);this.AKl=A.abV(A2r,A2r.length-5);this.BdH=A.ab2(A2r,5);if((A._GetAutoObject(
A.Device.Converter).ZV(Ka)===10)&&!(Math.trunc(Ka/10000000000)%100))this.AKl=A.ab1(
this.AKl,3,2);this.Mf=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CH._Init.call(this.ST={
I:this},0);C.CH._Init.call(this.OV={I:this},0);this.__proto__=C.AB0;this.V.H(BtK
);this.AP.H(AZJ);this.AP.L(A.jb.Bc);this.ST.H(AZK);this.OV.H(BtL);this.J(this.AP
,0);this.J(this.ST,0);this.J(this.OV,0);this.V.S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(
A.fl.Bi));this.ST.S(A.aaL(A.fl.Ak));this.ST.A2(A.aaL(A.fl.Bi));this.ST.Ct(A.aaL(
A.fl.Bi));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(A.aaL(A.fl.Bi));this.OV.Ct(A.aaL(
A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.ST._Done();this.OV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.ST._ReInit();this.OV._ReInit();this.V.
S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(A.fl.Bi));this.ST.S(A.aaL(A.fl.Ak));this.ST.A2(
A.aaL(A.fl.Bi));this.ST.Ct(A.aaL(A.fl.Bi));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(
A.aaL(A.fl.Bi));this.OV.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APm={Q:null,Init:function(aArg){var
B;this.AAU(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEC:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Ni(FilterCriterion);var AiZ=this.Av9();if((AiZ.length>0)&&(AiZ!==UW)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,AiZ,0,6,false);Filter.CV(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},AAU:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.ASV(A.jV);return;}var AyT=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!AyT){this.AW.ASV(UW);this.AW.
AeU(true);}else this.AW.ASV(AyT.A4);},_Init:function(aArg){C.AjM._Init.call(this
,aArg);this.__proto__=C.APm;this.AW.AwC(0);this.AW.Bmf(true);this.AW.Di=[this,this.
AEC];this.Init(aArg);},_Mark:function(D){var B;C.AjM._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AU$={FA:null,C_:null,Dl:null,EL:null,AsF:null,Init:function(aArg){var B;A.zX([
this,this.BeG],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.AZ4],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Ue,B.UZ],0);A.pe([this,this.BeG],this);A.pe([
this,this.Adr],this);},BeG:function(G){var AaJ=false;switch(A._GetAutoObject(A.Device.
Device).AnX){case 0:AaJ=false;break;case 3:AaJ=true;break;default:throw new Error(
BtM+A._GetAutoObject(A.Device.Device).AnX.toFixed());}A._GetAutoObject(A.Device.
Helper).JX(this.C_,AaJ);A._GetAutoObject(A.Device.Helper).JX(this.Dl,AaJ);A._GetAutoObject(
A.Device.Helper).JX(this.EL,AaJ);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cd._Init.call(this
,aArg);C.BW._Init.call(this.FA={I:this},0);C.Iq._Init.call(this.C_={I:this},0);C.
Iq._Init.call(this.Dl={I:this},0);C.AvR._Init.call(this.EL={I:this},0);C.AU_._Init.
call(this.AsF={I:this},0);this.__proto__=C.AU$;var B;this.I_(A.aaR(A.acf.UnlinkTransponder
));this.FA.H(UV);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqc));this.
FA.Bh(true);this.C_.H(Ak$);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
Aqx));this.C_.Bh(false);this.C_.Ga(2);this.C_.EU(6);this.C_.IO(A.aaR(A.acf.OA));
this.C_.I$(A.aaR(A.acf.Ey));this.Dl.H(AcL);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.
Zg));this.Dl.Bh(true);this.Dl.Ga(0);this.Dl.EU(12);this.Dl.IO(A.aaR(A.acf.OA));this.
Dl.I$(A.aaR(A.acf.Ey));this.EL.H(Aye);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bh(false);this.EL.ArT(A.aaR(A.acf.Aqe));this.J(this.FA,0);this.J(this.C_,0);this.
J(this.Dl,0);this.J(this.EL,0);this.FA.At([B=this.AsF,B.B_,B.B$]);this.FA.CK(this.
AsF);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY]);this.Dl.At([B=A.
_GetAutoObject(A.Device.Device),B.Ue,B.UZ]);this.EL.DB(A.aaL(A.ach.AjR));this.EL.
OL([B=A._GetAutoObject(A.Device.Device),B.Ud,B.UY]);this.EL.PO([B=A._GetAutoObject(
A.Device.Device),B.Ue,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.FA._Done();this.C_._Done();this.Dl._Done();this.EL._Done();this.AsF._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.FA._ReInit(
);this.C_._ReInit();this.Dl._ReInit();this.EL._ReInit();this.AsF._ReInit();this.
I_(A.aaR(A.acf.UnlinkTransponder));this.FA.T(A.aaR(A.acf.Aqc));this.C_.T(A.aaR(A.
acf.Aqx));this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dl.T(A.aaR(
A.acf.Zg));this.Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(A.acf.Ey));this.EL.ArT(A.
aaR(A.acf.Aqe));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.FA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AU_={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bf8],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.AZ4],0);A.pe([
this,this.Bf8],this);},Dt:function(){return 2;},Gk:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw4(E);},Bf8:function(G){this.Q=A._GetAutoObject(A.Device.Device).AnX;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AU_;this.Cb.Set(0,0);this.Cb.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cl;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cl.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMz.__proto__=A.Core.Root;C.AB.__proto__=C.Abd;C.WE.__proto__=
A.Core.P;C.Ow.__proto__=A.Core.P;C.Zw.__proto__=A.acl.Gl;C.Ej.__proto__=A.Core.P;
C.XV.__proto__=C.AB;C.AUB.__proto__=C.AB;C.Avn.__proto__=C.AB;C.Q8.__proto__=C.AB;
C.Fm.__proto__=C.Hg;C.Ay.__proto__=A.Core.P;C.Cd.__proto__=C.AB;C.AqT.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.AC$.__proto__=C.AmR;C.AGM.
__proto__=C.DR;C.Cn.__proto__=C.OU;C.Dr.__proto__=C.Eg;C.Iq.__proto__=C.Dr;C.BW.
__proto__=C.Dr;C.SO.__proto__=C.Dr;C.OH.__proto__=C.Cl;C.Rb.__proto__=C.AC;C.AUQ.
__proto__=C.Ba;C.Gc.__proto__=A.Core.P;C.Ba.__proto__=C.Cn;C.GZ.__proto__=C.AB;C.
ABZ.__proto__=C.Ba;C.Ad5.__proto__=C.AB;C.Mk.__proto__=C.Ow;C.AUL.__proto__=C.AB;
C.AqS.__proto__=C.AC$;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUr.__proto__=C.Acj;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asl.__proto__=A.Core.P;C.AGy.__proto__=C.Dr;C.CH.__proto__=A.Core.P;C.
AjL.__proto__=C.Yn;C.Amm.__proto__=C.Ra;C.Ahv.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATF.__proto__=C.AB;C.Mn.__proto__=C.Cn;C.Anb.__proto__=C.Cn;C.OverlayMenu.
__proto__=C.Abd;C.APC.__proto__=C.OverlayMenu;C.GJ.__proto__=A.Core.P;C.Abd.__proto__=
A.Core.P;C.AUw.__proto__=A.acl.Aeh;C.AmR.__proto__=C.BQ;C.ADa.__proto__=C.AmR;C.
Kj.__proto__=C.AC;C.AUt.__proto__=C.Dr;C.AF9.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wo.__proto__=C.Ark;C.II.__proto__=C.ADa;C.I2.__proto__=C.AB;C.AL9.__proto__=C.
AF9;C.AL5.__proto__=C.GZ;C.ANn.__proto__=C.GZ;C.Ael.__proto__=C.Cn;C.QA.__proto__=
C.Ael;C.APp.__proto__=C.BQ;C.AjM.__proto__=C.BQ;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Gd.__proto__=C.AC;C.Afi.__proto__=C.BW;C.ATV.__proto__=C.AB;C.AbP.__proto__=
C.Cn;C.T7.__proto__=C.Cn;C.ANz.__proto__=C.Cd;C.AUS.__proto__=C.Cd;C.ANM.__proto__=
C.Cd;C.AT7.__proto__=C.Cd;C.WU.__proto__=A.Core.P;C.QT.__proto__=C.Fm;C.D2.__proto__=
A.Core.P;C.T3.__proto__=C.AB;C.AVq.__proto__=C.GZ;C.AL_.__proto__=C.AxS;C.AVb.__proto__=
C.Cd;C.AeK.__proto__=C.AC;C.AxS.__proto__=C.AB;C.AVz.__proto__=C.Cd;C.AUs.__proto__=
C.Acj;C.ABv.__proto__=A.Graphics.Hy;C.Ap_.__proto__=C.AB;C.ARp.__proto__=A.Core.
P;C.Fq.__proto__=C.OverlayMenu;C.AaP.__proto__=C.BW;C.Aje.__proto__=C.Cn;C.ALR.__proto__=
C.Fq;C.Cl.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.ALW.__proto__=C.Vs;C.ALX.
__proto__=C.Fq;C.Sd.__proto__=C.T7;C.AME.__proto__=C.Vs;C.Wg.__proto__=C.Fm;C.Vp.
__proto__=A.Core.P;C.Ku.__proto__=A.Core.P;C.ARN.__proto__=C.HY;C.ATY.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cl;C.ANo.__proto__=C.Amm;C.Hg.__proto__=A.
Core.P;C.AVs.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cl;C.AaY.
__proto__=C.Gd;C.AxK.__proto__=C.ABv;C.ATA.__proto__=C.OverlayMenu;C.AOt.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATB.__proto__=A.Core.P;C.AUv.__proto__=A.acl.
Aeh;C.AkO.__proto__=C.Iq;C.Amo.__proto__=C.OverlayMenu;C.AB2.__proto__=C.Ba;C.Yo.
__proto__=C.AjM;C.AqB.__proto__=C.HY;C.Aci.__proto__=C.Dr;C.WeightRecordingScope.
__proto__=C.AC;C.Auy.__proto__=C.AB;C.AUu.__proto__=C.Iq;C.AL7.__proto__=C.AB;C.
Ark.__proto__=C.HY;C.AG7.__proto__=A.Core.P;C.AVv.__proto__=A.Core.P;C.Eg.__proto__=
C.Cn;C.AeM.__proto__=C.Eg;C.AvS.__proto__=C.AeM;C.SetTransponderScreen.__proto__=
C.Q8;C.ADi.__proto__=C.EA;C.AG$.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mg.__proto__=C.Q8;C.ALP.__proto__=C.Mg;C.ManualActionScanScreen.__proto__=C.Mg;
C.ALQ.__proto__=A.Core.P;C.APt.__proto__=C.Dc;C.ADg.__proto__=C.Dc;C.TQ.__proto__=
C.Dc;C.APv.__proto__=C.Dc;C.AM4.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AM2.__proto__=
C.Ba;C.Jq.__proto__=A.Core.P;C.AM1.__proto__=C.Ba;C.AmQ.__proto__=C.TB;C.AFZ.__proto__=
C.Axc;C.AkB.__proto__=C.Axc;C.Zv.__proto__=C.AkB;C.ANv.__proto__=C.OU;C.OU.__proto__=
C.Hg;C.APy.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AMY.__proto__=C.Ajw;C.ADc.__proto__=
C.TR;C.Ki.__proto__=A.Core.P;C.Amy.__proto__=C.Mn;C.AOQ.__proto__=C.Kn;C.AutoRegistrationMode.
__proto__=C.AC;C.APz.__proto__=C.EA;C.Tv.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMj.__proto__=C.RX;C.AMx.__proto__=C.AaU;C.AMs.__proto__=C.AaU;C.ATX.__proto__=
C.Ba;C.APx.__proto__=C.EA;C.AMm.__proto__=C.AaU;C.IE.__proto__=C.I1;C.RQ.__proto__=
C.Fx;C.RU.__proto__=C.Fx;C.Tu.__proto__=C.JI;C.Qz.__proto__=C.Fx;C.Tt.__proto__=
C.JI;C.AL6.__proto__=C.Ap_;C.AQO.__proto__=C.Cd;C.AaU.__proto__=C.D9;C.Kh.__proto__=
C.Cl;C.ARl.__proto__=C.Cd;C.AMh.__proto__=C.K9;C.AMi.__proto__=C.D9;C.AMf.__proto__=
C.K9;C.AMg.__proto__=C.K9;C.WG.__proto__=C.Eg;C.AUp.__proto__=C.WG;C.RW.__proto__=
C.Fx;C.APo.__proto__=C.II;C.ANp.__proto__=C.AB;C.AM8.__proto__=C.Ad5;C.AL4.__proto__=
C.I2;C.AVp.__proto__=C.I2;C.AOS.__proto__=C.Kn;C.APq.__proto__=C.Kn;C.APu.__proto__=
C.TR;C.AM3.__proto__=C.Ajw;C.TR.__proto__=C.Dc;C.Aqm.__proto__=A.acv.ACa;C.Ajw.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMP.__proto__=C.DR;C.OZ.__proto__=C.DR;C.AqQ.__proto__=
A.Core.P;C.AMo.__proto__=C.Gc;C.AT1.__proto__=A.Core.P;C.K9.__proto__=C.D9;C.ANw.
__proto__=C.Cd;C.AuW.__proto__=C.Cn;C.AC8.__proto__=C.BQ;C.AC9.__proto__=C.BQ;C.
Fx.__proto__=C.JI;C.AOw.__proto__=C.GZ;C.AOv.__proto__=C.I2;C.AO6.__proto__=C.Kn;
C.ADe.__proto__=C.Dc;C.ABY.__proto__=C.Ba;C.ATW.__proto__=C.Ahv;C.FactoryResetScope.
__proto__=C.Cl;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ARZ.
__proto__=C.RK;C.ARY.__proto__=C.I2;C.AC_.__proto__=C.Kn;C.ABH.__proto__=C.Gd;C.
ALU.__proto__=C.Fq;C.AL8.__proto__=C.Auy;C.NewAnimalSetTransponderScreen.__proto__=
C.Asq;C.C6.__proto__=C.AC;C.OY.__proto__=A.Core.P;C.RR.__proto__=C.Fx;C.RS.__proto__=
C.Fx;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARw.__proto__=C.OverlayMenu;
C.VL.__proto__=C.T7;C.AvR.__proto__=C.Cn;C.AnimalSingleInfoScreen.__proto__=C.Tv;
C.AnimalMultiInfoScreen.__proto__=C.Tv;C.AMl.__proto__=C.OverlayMenu;C.I7.__proto__=
A.Core.P;C.ALT.__proto__=C.GZ;C.ALS.__proto__=C.I2;C.APn.__proto__=C.II;C.AsA.__proto__=
C.OY;C.Aq5.__proto__=C.OY;C.AuS.__proto__=C.AC;C.AMd.__proto__=C.AC;C.AGx.__proto__=
C.Eg;C.G3.__proto__=A.Core.P;C.AQR.__proto__=C.HJ;C.AVg.__proto__=C.XV;C.ARJ.__proto__=
C.Wo;C.ADH.__proto__=C.Le;C.HJ.__proto__=C.G3;C.Le.__proto__=C.G3;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvH.__proto__=C.HJ;C.AUn.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asq;C.ReasonOfLeaving.__proto__=C.AC;C.OR.__proto__=C.BW;C.AeP.__proto__=
C.Ek;C.ARC.__proto__=C.Ek;C.ARB.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q9.__proto__=
C.Eg;C.AQS.__proto__=C.Le;C.AvG.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fz.
__proto__=C.AB;C.AN6.__proto__=C.AB;C.AN9.__proto__=C.Fz;C.AN_.__proto__=C.Fz;C.
AqE.__proto__=C.Fz;C.Abp.__proto__=C.AjL;C.Kn.__proto__=C.AjL;C.Avl.__proto__=C.
Abp;C.AO4.__proto__=C.Abp;C.AO3.__proto__=C.Abp;C.AO2.__proto__=C.BQ;C.Aes.__proto__=
C.EA;C.AmG.__proto__=C.Ba;C.Ajl.__proto__=C.IE;C.ACA.__proto__=A.Core.P;C.AkL.__proto__=
A.Core.P;C.Ra.__proto__=C.AB;C.AUR.__proto__=C.Ra;C.AO5.__proto__=C.BQ;C.Dc.__proto__=
C.EA;C.KN.__proto__=C.BQ;C.AOY.__proto__=C.KN;C.AO0.__proto__=C.KN;C.Yi.__proto__=
C.AmG;C.Agt.__proto__=C.Hg;C.ANT.__proto__=C.GZ;C.ANS.__proto__=C.I2;C.AO1.__proto__=
C.Kn;C.Abk.__proto__=C.Aci;C.AjD.__proto__=C.QA;C.ABS.__proto__=C.QA;C.APs.__proto__=
C.Dc;C.AM0.__proto__=C.Ba;C.RT.__proto__=C.Fx;C.AMe.__proto__=C.Fx;C.ANK.__proto__=
C.Ei;C.ANL.__proto__=C.Ei;C.AOZ.__proto__=C.KN;C.Nb.__proto__=C.AbP;C.ANG.__proto__=
C.Ei;C.AOU.__proto__=C.KN;C.PL.__proto__=C.Cn;C.Se.__proto__=C.AB;C.AN7.__proto__=
C.Se;C.AN8.__proto__=C.Se;C.AN$.__proto__=C.AqE;C.AN4.__proto__=C.Fz;C.AaT.__proto__=
C.IE;C.Pj.__proto__=C.IE;C.AMq.__proto__=C.Amo;C.ARj.__proto__=C.T3;C.ARi.__proto__=
C.T3;C.ARU.__proto__=C.RK;C.ART.__proto__=C.I2;C.APh.__proto__=C.Kn;C.AkI.__proto__=
C.GZ;C.AT8.__proto__=C.I2;C.Aep.__proto__=C.Yn;C.ABX.__proto__=C.Ba;C.ADd.__proto__=
C.Dc;C.APj.__proto__=C.BQ;C.AaW.__proto__=C.NE;C.XO.__proto__=C.NE;C.RX.__proto__=
C.D9;C.XP.__proto__=C.RX;C.XM.__proto__=C.ID;C.AaR.__proto__=C.ID;C.XL.__proto__=
C.ID;C.AaQ.__proto__=C.ID;C.AMn.__proto__=C.AB;C.ID.__proto__=C.I1;C.I1.__proto__=
C.Hg;C.NE.__proto__=C.Fx;C.Axb.__proto__=C.Zv;C.ANu.__proto__=C.Amy;C.Axd.__proto__=
C.Zv;C.ATN.__proto__=C.Cd;C.ATL.__proto__=C.Ek;C.AQP.__proto__=C.Le;C.ATM.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARK.__proto__=C.HY;C.AMp.__proto__=C.Amo;C.AMF.__proto__=
C.Vs;C.JI.__proto__=C.I1;C.APl.__proto__=C.Yo;C.Abj.__proto__=C.Cl;C.APw.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Mg;C.APk.__proto__=C.AqS;C.Je.__proto__=A.Core.
P;C.APg.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Q8;C.ANU.__proto__=C.AqB;
C.UK.__proto__=C.Cl;C.UL.__proto__=C.UK;C.AcF.__proto__=C.UK;C.AdQ.__proto__=C.AC;
C.AGw.__proto__=C.Eg;C.ANJ.__proto__=C.Ei;C.AOX.__proto__=C.KN;C.ANH.__proto__=C.
Ei;C.AOV.__proto__=C.KN;C.AqU.__proto__=C.TQ;C.APr.__proto__=C.TQ;C.Aqn.__proto__=
C.M1;C.AMZ.__proto__=C.M1;C.ARD.__proto__=C.AeP;C.Yn.__proto__=C.BQ;C.Acj.__proto__=
C.BW;C.FH.__proto__=C.AC;C.AMt.__proto__=C.FH;C.AMu.__proto__=C.FH;C.AMa.__proto__=
C.I2;C.TB.__proto__=C.BW;C.ARM.__proto__=C.AB;C.Asq.__proto__=C.SetTransponderScreen;
C.ADI.__proto__=C.HJ;C.Asr.__proto__=C.OR;C.Axo.__proto__=C.OR;C.Acm.__proto__=C.
Cl;C.AVF.__proto__=C.RK;C.AVE.__proto__=C.I2;C.AQT.__proto__=A.Core.P;C.AQQ.__proto__=
C.HJ;C.ACF.__proto__=C.Abk;C.LW.__proto__=A.Core.P;C.AT6.__proto__=C.Cd;C.AT5.__proto__=
C.Cd;C.AU9.__proto__=C.Cd;C.Afn.__proto__=C.Cl;C.Jb.__proto__=A.acn.Jb;C.AUX.__proto__=
C.AB;C.ATP.__proto__=C.AkI;C.ADf.__proto__=C.Dc;C.AMN.__proto__=C.AkI;C.AOR.__proto__=
C.Aep;C.APi.__proto__=C.Aep;C.AB1.__proto__=C.Ba;C.AUm.__proto__=C.SO;C.AUq.__proto__=
C.Q9;C.APf.__proto__=C.BQ;C.ARu.__proto__=C.Fq;C.ARt.__proto__=C.Fq;C.ARs.__proto__=
C.Fq;C.ALY.__proto__=C.Amn;C.ARy.__proto__=C.T7;C.AMM.__proto__=C.OverlayMenu;C.
AD2.__proto__=C.AC;C.AUW.__proto__=C.OU;C.AHa.__proto__=C.Cl;C.AUo.__proto__=C.BW;
C.Y1.__proto__=C.Cl;C.ANF.__proto__=C.Ei;C.AOT.__proto__=C.KN;C.ANI.__proto__=C.
Ei;C.AOW.__proto__=C.KN;C.RK.__proto__=C.GZ;C.AvN.__proto__=C.Vs;C.ADh.__proto__=
C.Dc;C.AB0.__proto__=C.Ba;C.APm.__proto__=C.AjM;C.AU$.__proto__=C.Cd;C.AU_.__proto__=
C.Cl;};C._ReInit=function(){var B;if((B=C.Axs._this))B._ReInit(),C.Axs._ReInit.call(
B);if((B=C.Axt._this))B._ReInit(),C.Axt._ReInit.call(B);if((B=C.A$._this))B._ReInit(
),C.A$._ReInit.call(B);if((B=C.Pi._this))B._ReInit(),C.Pi._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afe._this
))B._ReInit(),C.Afe._ReInit.call(B);if((B=C.BR._this))B._ReInit(),C.BR._ReInit.call(
B);if((B=C.Wz._this))B._ReInit(),C.Wz._ReInit.call(B);if((B=C.Ass._this))B._ReInit(
),C.Ass._ReInit.call(B);if((B=C.AnN._this))B._ReInit(),C.AnN._ReInit.call(B);if((
B=C.DP._this))B._ReInit(),C.DP._ReInit.call(B);if((B=C.AuG._this))B._ReInit(),C.
AuG._ReInit.call(B);if((B=C.Amj._this))B._ReInit(),C.Amj._ReInit.call(B);if((B=C.
AvX._this))B._ReInit(),C.AvX._ReInit.call(B);if((B=C.AvY._this))B._ReInit(),C.AvY.
_ReInit.call(B);if((B=C.AxU._this))B._ReInit(),C.AxU._ReInit.call(B);};C.DH=function(
D){var B;if((B=C.Axs._this)&&(B._cycle!=D))B._Done(C.Axs._this=null);if((B=C.Axt.
_this)&&(B._cycle!=D))B._Done(C.Axt._this=null);if((B=C.A$._this)&&(B._cycle!=D)
)B._Done(C.A$._this=null);if((B=C.Pi._this)&&(B._cycle!=D))B._Done(C.Pi._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afe._this)&&(B._cycle!=D))B._Done(C.Afe._this=null);if((B=C.BR._this)&&(B._cycle
!=D))B._Done(C.BR._this=null);if((B=C.Wz._this)&&(B._cycle!=D))B._Done(C.Wz._this=
null);if((B=C.Ass._this)&&(B._cycle!=D))B._Done(C.Ass._this=null);if((B=C.AnN._this
)&&(B._cycle!=D))B._Done(C.AnN._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuG._this)&&(B._cycle!=D))B._Done(C.AuG._this=null);if((
B=C.Amj._this)&&(B._cycle!=D))B._Done(C.Amj._this=null);if((B=C.AvX._this)&&(B._cycle
!=D))B._Done(C.AvX._this=null);if((B=C.AvY._this)&&(B._cycle!=D))B._Done(C.AvY._this=
null);if((B=C.AxU._this)&&(B._cycle!=D))B._Done(C.AxU._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */