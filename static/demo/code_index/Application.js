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
IS=[6,15,14,19];var Ir=[6,9,14,13];var O1=[209,7,229,37];var P4=[0,40,240,320];var
P5=[0,228,240,298];var CQ=" ";var Fe=[0,40,240,280];var L1=[0,40,232,280];var P6=[
0,40,116,160];var J0=[114,40,230,160];var N_=[0,160,116,280];var P7=[116,160,232
,280];var MG=[0,280,116,400];var S6=[116,280,232,400];var UN=[0,400,116,520];var
ZZ=[116,400,232,520];var WZ=[-1,520,115,640];var Is=[232,40,240,280];var UO=[5,40
,235,120];var Z0=[120,140,210,230];var W0=[20,140,110,230];var Z1=[0,0,116,120];
var W1=[0,0,120,120];var Z2=[0,0,116,45];var Z3=[0,0,8,200];var UP=[0,0,8,20];var
W2=[30,0,210,40];var P8=[0,0,40,40];var Z4=[7,8,200,40];var O2=[0,0,200,40];var Ri=[
6,1];var W3="ERROR: Invalid value for ItemHighlighting";var W4=[10,10,40,30];var
W5=[0,0,120,40];var W6=[60,0,180,40];var Z5=[120,0,240,40];var W7=[0,0,100,40];var
W8=[83,0,157,40];var S7=[140,0,240,40];var UQ=[0,0,20,40];var UR=[220,0,240,40];
var AcH=[0,0,300,30];var S8=[0,30,300,60];var Z6=[0,60,300,90];var Afw=[0,90,300
,120];var Z7=[0,100,300,110];var W9=[0,50,300,60];var Z8=[0,30,300,40];var Z9="*";
var Afx=[40,40];var KX=[0,0,240,80];var AcI=[0,0,240,50];var Lu="Cap";var AhS=[0
,40,40,80];var An7=[200,40,240,80];var N$=[30,40,210,80];var W_="--";var An8="%d";
var US="%m";var AhT="%Y";var AcJ=" (";var UT=[0,0,232,80];var An9="Date";var An_=[
48,40,88,78];var An$=[39,40,79,80];var Aoa=[80,44,87,77];var Afy=".";var AsN=[88
,44,120,77];var AxV=[120,44,127,77];var AxW=[127,44,191,77];var O3=[0,0,80,40];var
Rj="Text";var AxX=[430,102,430,102];var UU=[0,0,240,240];var AsO=[232,0,240,240];
var AxY=[0,10,240,240];var AxZ="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax0="Unhandled option";
var Aob=[0,80,240,280];var Afz="Unhandled animal list action";var Aoc="Animal list content not handled.";
var IT=[0,40,240,80];var Aod="Set Selected";var W$=" %%";var Aoe=[0,180,240,220];
var AsP=[82,127,167,150];var AsQ="Group";var AsR=[77,91,167,124];var Aof=[0,0,90
,33];var Aog=[4,4,18,29];var AsS=[20,4,34,29];var Ax1=[36,4,50,29];var Ax2=[52,4
,66,29];var Ax3=[68,4,82,29];var AsT="ERROR: Unhandled Device::SyncState";var Ax4=
":\n";var P9="{1}";var Ax5="{2}";var AVF=[0,49,240,109];var AVG=[0,170,240,243];
var AVH=[0,110,240,170];var AVI=[20,243,220,268];var AHb=[30,8];var AHc="\u2265 ";
var AfA=[0,0,240,160];var Aoh=[0,0,0,0];var AVJ=[0,0,240,66];var AHd=[10,0,76,66
];var Ak7=[33,33];var AHe=[87,0,153,66];var AHf=[164,0,230,66];var AVK="No statistics available";
var AHg="in this environment.";var AVL=" fps";var AVM="CPU: - %%";var AcK=[0,0,240
,120];var AVN=[130,0,237,20];var AVO=[20,0,120,20];var AHh=[0,20,240,40];var AsU=[
40,20,100,40];var AHi=[100,20,240,40];var AHj=[0,40,240,60];var Ax6=[40,40,100,60
];var AHk=[100,40,240,60];var Ax7=[0,60,50,80];var AVP=[100,60,240,80];var AVQ=[
0,80,50,100];var AVR=[100,80,240,100];var AVS=[0,100,50,120];var AHl=[100,100,240
,120];var AVT=[5,5,15,15];var O4="%H";var Ax8="%M";var AVU="Time";var AVV=[79,40
,119,78];var AVW=[125,40,164,80];var AVX=[86,40,126,80];var AVY=":";var AVZ=[75,
40,115,80];var AHm=[0,0,240,150];var AHn=[60,0,155,40];var Aoi=[30,0,65,40];var Ax9=[
60,0,100,40];var AV0=[88,0,128,40];var AV1=[60,0,71,40];var AV2=[60,0,74,40];var
AHo=[90,0,123,40];var AV3=[120,0,161,40];var AHp=[120,0,165,40];var AHq=[60,0,88
,40];var AHr=[60,0,95,40];var AV4="Did not expect iterator bigger than number of records";
var AHs=[20,0,240,20];var AV5=[0,38,240,40];var AHt=[0,0,8,4];var Rk=[0,0,240,280
];var Xa=[0,280,240,320];var AV6="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AV7="]";var AV8="ERROR: Cannot find closing bracket \'}\' in text [";var AV9=
"] opened at index ";var AV_="#";var AV$="ERROR: Invalid parameter: {";var AWa="}";
var AhU=[20,20];var AHu=[0,12];var AWb="ERROR: Not expected Application::FooterFocus, ";
var AWc="%M:%S";var AHv=[30,150,207,170];var AHw=[20,70,217,194];var Ax_="Unhandled item.";
var P_=[0,80,240,120];var AWd="Unhandled Overlay Menu ";var AWe="Invalid bootloader message: ";
var AWf="Unknown USBState: ";var AsV="Invalid fader";var AWg=[2,4,32,40];var AWh=[
29,4,80,40];var AWi=[120,4,200,40];var AWj=[80,0,114,40];var AWk="-1";var AWl="< ";
var AsW=[0,0,232,40];var AWm=[22,40,180,80];var AWn=[2,40,22,80];var AWo=[23,40,
163,80];var AWp=[210,40,230,80];var AWq=[164,40,210,80];var AWr=[169,43,205,77];
var AWs="ERROR: No outlet assigned";var AWt="Unhandled screen";var AWu="ERROR: Cannot cache null screen.";
var AWv="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHx="Untreated Rating Method type!";var Ak8="Unhandled animal type";var AWw=[
5,60,235,140];var AWx=[0,130,240,196];var AWy=[49,240,229,280];var Ax$="Implement in derived classes!";
var Ak9="Implement in derived class";var AhV=[0,40,230,120];var Aya=[0,120,230,200
];var Aoj=[0,200,230,280];var AhW=[0,280,230,360];var AWz=[0,360,230,440];var Ayb=[
230,40,238,280];var AHy="WARNING: Unhandled filter field: ";var AfB="Should not happen.";
var AHz="Invalid Boolean item";var Z_=[0,120,240,160];var Ak_=[0,160,240,200];var
Aok=[0,200,240,240];var AWA=[1152,11,1392,51];var AWB=[1152,51,1392,91];var AWC=[
1152,91,1392,131];var AWD=[1152,131,1392,171];var AWE=[1152,171,1392,211];var AsX=[
0,240,240,280];var AHA=[10,0,240,40];var AHB=[190,0,230,40];var AWF=[60,3,95,39];
var AWG=[95,4,200,40];var AWH=[3,3];var AWI=[6,6];var AWJ=[59,5,197,35];var AWK=[
59,2,200,38];var AWL=[3,2,43,42];var AWM=[0,17,43,40];var AWN=[50,40];var AWO=[50
,0];var AWP="Illegal shifting direction";var Ayc=[0,0,160,30];var AHC=[0,0,25,30
];var AHD=[27,0,52,30];var AHE=[54,0,79,30];var AHF=[81,0,106,30];var AHG=[108,0
,133,30];var AHH=[135,0,160,30];var AWQ="Internal queue error";var AWR="ERROR: No corresponding Id ";
var AWS=" found.";var AWT="ERROR: Error in range test";var AWU=[120,67,210,157];
var AWV=[0,40,240,70];var AWW=[20,67,110,157];var Ayd=[0,160,240,280];var AHI=[20
,77,90,147];var AWX=[0,0,210,40];var AHJ=[195,0,235,40];var AhX=[0,40,232,120];var
UV=[0,120,232,200];var AWY=[0,40,232,200];var Z$=[0,200,232,280];var AWZ=[0,320,
240,400];var AW0=[0,120,53,200];var Ak$=[0,280,232,360];var Aaa="%%";var AcL=[0,
360,232,440];var Aye=[0,440,232,520];var AW1=[0,80,207,120];var Oa=")";var AHK="/";
var AW2=[5,0,88,30];var AHL=[88,0,240,30];var AW3="276000312345678";var AHM=[5,30
,100,60];var AHN=[100,30,240,60];var AW4="Manufacturer";var AW5="Country";var AW6=[
5,60,240,90];var AW7="Niedersachsen";var AW8=[5,90,145,120];var AW9=[140,90,240,
120];var AW_="Protocol";var AW$=[0,0,120,100];var AHO=[0,40,116,120];var AXa=[40
,80,92,107];var AHP=[0,0,50,23];var AHQ="ERROR: Unhandled Device::MeasureState";
var Ayf=[0,120,240,280];var AXb=[178,159,248,203];var AXc=[10,145,170,225];var AXd=[
0,61,240,101];var AXe=[0,0,40,23];var AHR=[101,113,141,136];var AXf=[101,235,141
,258];var AXg=[69,288,101,313];var AXh=[0,40,240,200];var AsY=[0,200,240,280];var
AsZ=[0,280,240,360];var AHS="\u2264 ";var AXi=[0,80,94,160];var AXj=[94,80,184,160
];var AXk=[184,80,240,160];var AXl=[197,105,231,139];var AXm=[105,101,173,127];var
AXn=[7,101,75,127];var AXo=[94,125,184,151];var AXp=[2,125,92,151];var AHT=[0,70
,240,101];var AXq=[0,106,240,280];var Ayg=[30,40,240,70];var AHU=[0,40,30,70];var
AXr="\u278B";var AXs=[0,0,240,175];var AXt=[0,0,232,175];var AXu=[232,0,240,175];
var AXv="Text Here !";var AXw=[200,0,240,40];var AHV="1";var AHW="2";var AHX="3";
var AHY="4";var Ayh=[0,360,232,400];var Ayi="ERROR: invalid item class.";var AHZ=[
10,220,250,260];var AXx=[185,0,225,40];var AH0="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXy="ERROR: Received more actions than expected!";var AH1=", ";var AXz=
"ERROR: Cannot set action at position=";var AXA=". Current elements:";var AXB=", max elements:";
var AXC="17";var AXD=[0,0,58,58];var AXE=[0,0,60,60];var AXF=[30,0,58,20];var AXG=[
7,6,25,24];var AXH=[30,60,130,160];var AXI=[0,0,28,20];var AXJ=[4,3,40,24];var AXK=[
0,0,42,27];var Ayj=[0,0,17,17];var AXL="Unknown direction of counting enum value: ";
var AXM="Unknown id generation method enum value: ";var Ayk="Invalid animal id generation method: ";
var As0="Unhandled popup id";var UW="0";var As1=";";var AXN=[0,400,230,480];var AXO=[
5,120,235,200];var AXP=[0,640,230,760];var AH2=[0,0,300,200];var AXQ=[20,40,220,
80];var AH3=[20,80,220,280];var AXR=[140,0,188,40];var AXS="ERROR: Row containing birth weight could not be loaded";
var AXT=[0,440,230,520];var As2="ID";var AXU=[40,40,198,70];var AXV="Extra info: ";
var AH4=" -";var AXW=[0,0,230,120];var AXX=[0,0,230,40];var AXY=[0,80,230,120];var
AXZ="\xB0Brix";var AcM=[0,320,230,400];var AX0=[0,410,230,490];var AX1="ERROR: aNumberOfDays can not be < 0 ";
var AX2="{WEIGHTGAIN} ";var AX3="\xB1";var AH5="+";var AX4="{WEIGHTGAIN}";var AX5=
"{DAYS}";var AX6="ERROR: aString can not be null";var AX7=[166,70,240,114];var AX8=[
0,60,160,120];var AX9=[30,0,240,60];var AH6=[1,6,29,54];var AX_=[30,60,240,120];
var AX$="Con";var AYa=[70,50,170,70];var AH7="Unhandled Device::NaisIdValidationResult: ";
var AH8="Unhandled PopupId";var AYb=[110,123,230,248];var AYc=[5,0,250,40];var AYd=[
102,0,186,40];var AYe=[153,0,240,40];var Rl="-";var As3=[170,0,240,40];var AH9=[
220,0,320,30];var AH_=[200,20,300,50];var Aol=[180,0,180,40];var Aom=[170,0,170,
40];var Ayl="Untreated state";var AYf="ERROR: Animal id scanned in an unexpected state : ";
var AH$="ERROR: Null animal id scanned.";var AYg=[40,40,235,100];var AYh=[120,100
,210,190];var AYi=[20,100,110,190];var AYj=[0,40,40,100];var AYk="\u278A";var AYl=
"Action untreated";var AYm="ERROR: No corresponding ";var AYn=" action found!";var
AYo="Unhandled action: ";var AYp=[0,190,240,220];var AYq=[0,220,232,280];var AYr=[
5,190,235,270];var AYs=[232,60];var AYt=[0,2];var AYu=[58,58];var AYv="A";var AYw=[
56,0,156,40];var Aon=[156,0,240,40];var AIa=" 7 ";var AYx=[40,0,156,40];var AIb=
"/-1/-2";var AIc=[72,0,144,40];var AcN="\n";var AId="(";var AYy=[72,0,156,40];var
AIe="%y/%m";var AYz=[70,0,240,40];var Aym=[70,0,120,40];var AYA=[160,0,245,40];var
AYB="- ";var Ayn=" - ";var AYC="{parc}{clr3}";var AYD="{clr0}/^{clr2}";var AYE="{clr0}/^{clr1}";
var AIf=[0,0,85,40];var Aoo="?";var AIg=[0,0,120,140];var AYF=[0,0,116,40];var AIh=[
15,0,100,40];var Ayo=[110,0,200,40];var Ala=[0,0,34,34];var AIi=[129,0,157,40];var
Aop=[0,0,25,25];var AYG="\u2611";var AIj="\u2610";var AIk=[5,0,72,40];var AYH=[150
,0,240,40];var AYI=[72,0,139,40];var AIl="Unvalid content class: ";var AYJ=[0,320
,240,360];var AYK=[0,360,240,400];var AYL=[144,0,170,40];var AYM=[187,0,213,40];
var AYN=[207,10,233,50];var AYO=[247,20,273,60];var AYP=[140,0,150,100];var AYQ=[
165,0,175,100];var AYR=[185,0,195,100];var AYS=[205,0,215,100];var AYT=[211,0,233
,40];var AYU=[189,0,211,40];var AYV=[167,0,189,40];var Aoq=[145,0,167,40];var AIm=[
5,0,240,40];var Aab=[10,0,10,40];var AYW="= \u2211 ";var Ayp=[125,0,240,40];var AYX=[
130,0,170,40];var AYY="\xD8 ";var AYZ=[100,10,116,36];var AY0=[117,10,133,36];var
AIn=[135,10,151,36];var As4="Implement in derieved class";var As5=[0,80,240,240];
var As6=[0,120,232,160];var As7=[0,160,232,200];var As8=[0,200,232,240];var Ayq=[
0,240,232,280];var Aor=[0,320,232,360];var AY1=[-61,360,232,400];var AY2=[0,400,
32,440];var AY3=[0,100];var AY4=[0,40,240,240];var AY5=[0,50000];var AY6=[0,500];
var AY7=[0,0,240,105];var AY8=[0,105,240,210];var AY9=[0,40,240,81];var AY_=[0,81
,240,122];var AY$=[0,122,240,163];var AIo=[0,163,240,205];var AZa=[0,205,240,240
];var AIp=[0,200];var AZb=[0,40,240,73];var Ayr=[0,0,30,40];var AIq=[0,40,30,80];
var Ays=[60,40];var Ayt=[60,0];var AZc=[10,0,40,40];var AZd=[0,190,240,260];var AZe=[
0,130,240,190];var AIr=[40,40,200,130];var AZf=[90,230,170,253];var AZg=[80,190,
170,223];var AZh=[0,130,240,180];var AZi=[0,250,240,280];var AZj=[129,0,156,40];
var AZk=[72,0,100,40];var AZl=[100,0,129,40];var AZm=[78,8,103,33];var AIs=[0,0,
300,120];var AZn=[1,-1];var AZo=[20,40,240,120];var AZp=[20,0,240,40];var AZq=[0
,118,240,120];var AZr=[0,20,130,40];var Bp7=[130,20,240,40];var Bp8=[0,0,10,20];
var A$E="\u2191";var Bp9=[230,0,240,20];var AIt=[0,40,232,80];var Bp_=[0,80,232,
160];var Bp$=[0,160,230,240];var AIu=" p. p.";var AZs="Unknown animal type";var AZt=[
80,0,140,40];var Bqa=[50,0,172,40];var Bqb=[172,0,240,40];var Bqc=[0,90,240,92];
var A$F="Unhandled menu item";var A$G=[0,0,50,30];var As9=[0,0,30,30];var Bqd="No AnimalActionTemperatureScreen found!";
var Bqe="840003123456789";var Bqf=[40,0,230,40];var Bqg=[50,10,230,30];var AZu="No AnimalMultiInfoScreen found!";
var AIv=[0,0,25,40];var A$H="/^";var A$I="?/?";var Bqh=[100,4,180,40];var Bqi=[65
,0,99,40];var Bqj=[165,0,200,40];var A$J=[0,0,60,40];var A$K="9999/^9999";var Bqk=
"Invalid index: ";var Bql="Unknown AnimalIdGenerationMethod: ";var Bqm="Invalid gender: ";
var As_="Invalid input state: ";var Bqn="Unhandled AnimalIdGenerationMethod";var
Bqo=[42,35,67,75];var Bqp=[5,35,39,75];var Bqq=[70,40,228,70];var Bqr="Invalid direction for setting focus";
var AhY="Invalid index";var Bqs="Unvalid direction";var Bqt=[0,0,42,30];var A$L=[
22,0,42,30];var Bqu=[20,0,40,30];var Bqv=[0,0,158,30];var A$M=[32,0,62,30];var A$N=[
64,0,94,30];var A$O=[96,0,126,30];var Bqw=[128,0,158,30];var Bqx=" %% ";var Bqy=[
0,70,240,220];var Bqz=[0,237,240,307];var A$P="\n44 %% done";var BqA=[0,0,166,30
];var AIw=[0,0,12,30];var Ayu=[14,0,26,30];var AZv=[28,0,40,30];var AZw=[42,0,54
,30];var AZx=[56,0,68,30];var AZy=[70,0,82,30];var AZz=[84,0,96,30];var AZA=[98,
0,110,30];var A$Q=[112,0,124,30];var AZB=[126,0,138,30];var BqB=[140,0,152,30];var
BqC=[154,0,166,30];var A$R=[20,0,46,30];var BqD="\u2642";var BqE="{fnt3}\u2642{fnt1}";
var BqF="\u2640";var BqG="{fnt3}\u2640{fnt1}";var BqH="{parc}";var BqI=[30,30,210
,80];var BqJ="Implement in derieved class!";var BqK=[60,4,226,34];var A$S=[30,4,
58,34];var A$T=[4,0,27,40];var BqL=[116,4,228,34];var BqM=[60,4,86,34];var BqN=[
88,4,114,34];var Aos="Implement in derived class!";var A$U="Implement in derived class.";
var BqO="Invalid nais id view: ";var BqP=[0,35,240,75];var BqQ=[0,0,110,30];var BqR=[
0,0,26,30];var BqS="100";var AZC="\n\n";var BqT=[240,240];var BqU=[0,240];var BqV=
"Unknown rated attribute: ";var BqW=[120,80,240,280];var BqX=[0,80,120,280];var AIx=
" %% (";var Ayv=" \xB1 ";var Ayw=" (n = ";var AZD=[0,80,232,120];var BqY=[0,242,
232,282];var AZE=[0,280,232,320];var BqZ=[35,0,200,40];var Bq0=[1,0,31,40];var Bq1=[
32,40];var Bq2=[32,0];var Bq3=[3,0,83,40];var A$V=[180,0,240,40];var Bq4=[120,0,
180,40];var Bq5=[65,0,125,40];var Bq6=[0,0,120,200];var Bq7=[0,40,120,150];var A$W=[
15,160,60,190];var A$X=[60,160,105,190];var Bq8=[0,65,240,135];var Bq9=[10,112,170
,192];var Bq_=[178,129,248,173];var Bq$=[0,40,240,110];var Bra=[10,98,170,178];var
Brb=[178,112,248,156];var Brc=[85,190,160,265];var Brd=[89,194,155,260];var Bre=[
26,190,111,250];var Brf=[125,181,225,211];var Brg=[100,220,183,250];var Brh="38.7";
var Bri=[180,220,225,250];var Brj="\xB0C";var Brk=[0,99,240,178];var Brl=[100,280
,140,320];var Brm=[0,26,240,105];var A$Y=[30,40];var A$Z=[30,0];var Brn=[149,0,200
,40];var Bro=[145,40];var Brp=[145,0];var Brq=[38,0,88,40];var AZF=[0,0,35,40];var
Brr=[0,0,50,40];var Brs=[40,0,200,40];var Brt=[95,0,145,40];var Bru=[65,5,223,35
];var AZG=[0,0,15,40];var Brv=[72,0,140,40];var A$0="\n(";var Brw="%y/%m/%d";var
Brx="%y ";var Bry=" %m ";var Brz=" %d ";var BrA="20";var BrB=[225,0,240,40];var BrC=[
0,400,232,440];var BrD=[0,440,232,480];var BrE=[0,480,232,520];var BrF=[0,520,232
,560];var BrG=[0,560,232,600];var BrH=[0,598,232,638];var BrI=[5,0,215,40];var BrJ=[
215,8,240,33];var BrK="Implement in dervied class.";var BrL="ERROR: Unhandled temperature unit: ";
var AIy="ERROR: Unhandled mass unit: ";var BrM=[-1,160,115,280];var BrN=[114,160
,230,280];var AZH=[116,40,232,160];var Ayx="Unknown weight class index: ";var BrO=
"< 35";var BrP="35 - 40";var BrQ="40 - 45";var BrR="45 - 50";var BrS="\u2265 50";
var BrT="< 80";var BrU="80 - 90";var BrV="90 - 100";var BrW="100 - 110";var BrX=
"\u2265 110";var A$1="Unknown mass unit";var BrY=[143,0,193,40];var A$2=[192,0,240
,40];var BrZ=[44,28,44,28];var Br0="0 %%";var Br1=[-1,40,115,160];var Br2=[117,40
,233,160];var Br3=[1,160,117,280];var Br4=[114,158,230,278];var Br5=[1,280,117,400
];var Br6=[30,0,155,40];var A$3="\u2620";var AZI=[380,150,380,190];var A$4=[105,
0,155,50];var AZJ=[190,1,240,41];var Br7=[72,0,108,40];var Br8=[108,0,180,40];var
Br9=[60,0,94,40];var Br_=[94,0,200,40];var Br$="Scroll direction not supported.";
var Bsa=[44,0,207,40];var Bsb=[207,0,240,40];var Bsc="99";var Bsd="Unknown birth type";
var Bse=[44,0,189,40];var Bsf=[5,0,44,40];var Bsg=[44,0,240,40];var Bsh=[240,0,240
,40];var Bsi="\u25C9";var A$5="\u25CB";var Bsj=[75,4,215,34];var Bsk=[47,4,73,34
];var A$6=[17,4,45,34];var Bsl=[0,0,138,30];var Bsm=[47,4,215,34];var AZK="Unhandled MotherSelectionFilterMode: ";
var Bsn="Read only!";var Bso="actions array too small to hold all actions";var Bsp=[
120,40];var Bsq=[120,0];var Bsr=[5,0,115,40];var Bss=[0,0,205,40];var Bst=[59,4,
170,34];var Bsu=[59,1,173,37];var Bsv=[175,1,205,37];var Bsw=[0,0,37,40];var Bsx=[
115,98,205,188];var Bsy=[0,40,235,100];var Bsz=[2,200,240,280];var BsA=" 01234";
var BsB=[0,0];var BsC=[33,63];var BsD=[25,56];var BsE="Unknown transponder image type: ";
var AIz=[0,0,82,82];var BsF=[0,0,81,26];var BsG=[105,120,195,210];var BsH=[10,140
,100,230];var A$7="Unhandled EartagNrAssignmentMode: ";var BsI="Unhandled Gender";
var BsJ=[10,35,35,75];var BsK=[44,40,202,70];var BsL=[204,35,232,75];var BsM="Unvalid FatoryResetScope";
var A$8=[0,120,240,200];var BsN=[144,0,192,40];var BsO=[144,0,240,40];var BsP=[195
,0,245,50];var BsQ=[120,0,120,40];var BsR=[140,0,240,30];var BsS=[30,0,232,40];var
BsT=[60,0,160,40];var BsU=[160,0,200,40];var BsV=[150,17,200,40];var BsW=[155,40
];var BsX=[155,0];var BsY=[146,80,240,160];var BsZ=[56,80,146,160];var Bs0=[0,80
,56,160];var Bs1=[13,107,47,141];var Bs2=[74,109,104,139];var Bs3=[50,100,130,150
];var Bs4=[55,112,145,140];var Bs5=[146,112,236,140];var Bs6=[150,86,223,110];var
AIA=[0,40,240,120];var Bs7="Menu item for animal table field not found";var A$9=[
0,360,240,440];var Bs8=[0,440,240,520];var Bs9=[5,40,235,104];var Bs_=[120,108,226
,218];var Bs$=[20,120,110,210];var Bta=[5,223,235,280];var Btb=[0,0,64,30];var Btc=[
44,0,64,30];var Btd=[185,5,225,35];var Bte=[170,5,234,35];var Btf="Unhandled number of digits";
var Btg=[0,0,126,30];var Bth=[22,5,149,35];var Bti=[149,0,232,40];var A$_=[5,20];
var Btj=[5,0];var Btk="Unhandled AnimalIdAutoGenerationMethod: ";var Btl=[4,440,
236,520];var Btm="Unhandled TransponderAssignmentIdChangeMethod: ";var Btn="\n";
var Bto="%";var Btp=[0,0,160,120];var Btq=[2,2,157,117];var Btr=[50,70];var Bts=[
50,50];var Btt="##Das weitere Vorgehen entnehmen Sie bitte unserer Dokumentation:\nZugangsmeldung "+
"HI Tier\nhttps://hit.vitalcontrol.de\nTierimport in HERDEplus Mast:\nhttps://herde.vitalcontrol.de";
var Btu=[0,0,168,40];var Btv=[168,0,240,40];var Btw=[0,47,232,77];var Btx=[65,0,
101,40];var Bty=[135,0,175,40];var Btz=[85,17,135,40];var BtA=[125,17,175,40];var
BtB=[40,0];var A$$=[0,40,230,280];var BtC="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtD="ERROR: Received more animal table fields than expected!";
var BtE=[0,80,240,130];var BtF=[0,80,240,200];var Baa="Unhandled BackupError: ";
var BtG="Unhandled PopupId: ";var BtH=[203,0,240,40];var BtI=[168,0,203,40];var BtJ=[
35,0,152,40];var BtK=[0,0,84,40];var BtL=[84,0,167,40];var BtM="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMz={Device:null,A5z:null,GJ:null,Init:function(aArg){},DriveCursorHitting:function(
S_,BF,Fg){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GJ._Init.call(this.
GJ={I:this},0);this.__proto__=C.AMz;this.H(Cc);this.J(this.GJ,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5z=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lv=
this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GJ._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GJ.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5z)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4I._variants();
},K:null,_className:"Application::Application"};C.Aso=[240,320];C.AB={Background:
null,Ej:null,AC1:null,AnY:0,Init:function(aArg){A.pe([this,this.A0h],this);A.pe([
this,this.Beh],this);},LN:function(G){},A0h:function(s){this.LN(s);},CC:function(
G){},AIC:function(s){this.CC(s);},E4:function(G){},Ayy:function(s){this.E4(s);},
Dq:function(E){if(this.AC1===E)return;this.AC1=E;A.pe([this,this.Beh],this);},Beh:
function(G){var B;if(!!this.AC1)this.Ej.AbY((C.BQ.isPrototypeOf(B=A._NewObject(this.
AC1,0))?B:null));else this.Ej.AbY(null);},_Init:function(aArg){C.Abd._Init.call(
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
AkF(this.KG,null,null,null,null,null,null,[B=this.KG,B.AIC],null,false);},AEk:function(
){return this.KG;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WE;this.H([0,0,C.Aso[0],C.Aso[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KG)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ow={U3:null,Q:null,AnD:null,Zw:null,NO:null,Ou:null,TA:null,TB:null,AF4:255,
Kd:function(G){var F;if(!!this.Q){this.A1N();var Ac6=(F=this.Q,F[1].call(F[0]));
if(Ac6>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gh);this.Ou.L((this.Ou.AQ&0x00FFFFFF
)|(this.AlB(Ac6,0,30)<<24));this.TA.L((this.TA.AQ&0x00FFFFFF)|(this.AlB(Ac6,31,60
)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF)|(this.AlB(Ac6,61,100)<<24));}},A0f:function(
s){this.Kd(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0f],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0f],E,0);if(!!E)A.pe([this,
this.A0f],this);},A21:function(G){var F;if(!!this.AnD)this.Zw.Ar((F=this.AnD,F[1
].call(F[0])));else this.Zw.Ar(false);this.A9W(255);},A9P:function(E){if(A.aaZ(this.
AnD,E))return;if(!!this.AnD)A.z$([this,this.A21],this.AnD,0);this.AnD=E;if(!!E)A.
zX([this,this.A21],E,0);if(!!E)A.pe([this,this.A21],this);},A9W:function(E){if(this.
AF4===E)return;this.AF4=E;if(!!this.U3)this.U3.L((this.U3.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlB:function(A0l,Bbw,BwS){if(A0l<Bbw)return 0;else if((A0l>=Bbw)&&(A0l<
BwS))return this.AF4&0xFF;else return 255;},A1N:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U3=this.TB;else if((F=this.Q,F[1].call(F[0]))>
30)this.U3=this.TA;else this.U3=this.Ou;}else this.U3=null;},Bky:function(){return this.
AF4;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.Zw._Init.call(this.Zw={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AK._Init.call(this.Ou={
I:this},0);A.acg.AK._Init.call(this.TA={I:this},0);A.acg.AK._Init.call(this.TB={
I:this},0);this.__proto__=C.Ow;this.H(E6);this.Zw.Fp(2000);this.NO.H(E6);this.NO.
L(A.jb.Text);this.Ou.H(Hp);this.Ou.L(A.jb.E1);this.TA.H(IS);this.TA.L(A.jb.E1);this.
TB.H(Ir);this.TB.L(A.jb.E1);this.J(this.NO,0);this.J(this.Ou,0);this.J(this.TA,0
);this.J(this.TB,0);this.Zw.Q=[this,this.Bky,this.A9W];this.NO.Aw(A.aaL(A.ach.AMK
));},_Done:function(){this.__proto__=A.Core.P;this.Zw._Done();this.NO._Done();this.
Ou._Done();this.TA._Done();this.TB._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Zw._ReInit();this.NO._ReInit();this.Ou._ReInit(
);this.TA._ReInit();this.TB._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnD)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zw={_Init:function(aArg){A.acl.Gk._Init.call(
this,aArg);this.__proto__=C.Zw;this.AkR=true;this.B1=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GJ:null,AR:null,Background:null,Ow:null,Bo:
null,Dm:null,K6:0,Ava:0,Avb:0,AoV:0,LF:false,KD:false,Qq:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hd){this.AoV=A.jb.CS;this.K6=A.jb.Text;}else if(GE){this.AoV=
this.Ava;this.K6=this.Avb;}else if(Fu){this.AoV=this.Ava;this.K6=this.Avb;}else{
this.AoV=A.jb.CS;this.K6=A.jb.Text;}this.Background.L(this.AoV);if(!!this.GJ){this.
GJ.Wv(this.AoV);this.GJ.De(this.K6);}this.LF=Hd;this.KD=Fu;this.Qq=GE;},Qp:function(
G){this.Am();A.pe(this.AR,this);},AiL:function(G){if(this.Dm.Acc)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},AbY:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HN(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.Am();},A9y:function(E){if(this.Ava===E)return;this.
Ava=E;this.Am();},A9z:function(E){if(this.Avb===E)return;this.Avb=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.Ow._Init.call(this.Ow={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Dm={I:this},0);this.__proto__=C.Ej;var B;this.
H(BD);this.Background.AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.CS);
this.Ow.H(O1);this.K6=A.jb.Text;this.Bo.PQ(0);this.Bo.Ww(50);this.Dm.Filter=1;this.
Ava=A.jb.AV;this.Avb=A.jb.Bm;this.AoV=A.jb.Text;this.J(this.Background,0);this.J(
this.Ow,0);this.Ow.At([B=A._GetAutoObject(A.Device.Device),B.Av0,B.Ayz]);this.Ow.
A9P([B=A._GetAutoObject(A.Device.Device),B.Av3,B.AyA]);this.Bo.Mz=[this,this.Qp];
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
this},0);this.__proto__=C.XV;this.AeI.H(P4);this.Ux.H(P5);this.Ux.R(A.jV);this.Ux.
L(A.jb.Text);this.Ux.Z(false);this.J(this.AeI,0);this.J(this.Ux,0);this.AeI.Aw(null
);this.Ux.S(A.aaL(A.fl.EK));var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeI._Done();this.Ux._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeI._ReInit();this.Ux._ReInit();this.Ux.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ux)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
XV._variants();},K:null,_className:"Application::BootScreen"};C.AUA={AAu:function(
G){A._GetAutoObject(C.A$).Ahr(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUA;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avn={DY:null,Y:null,X7:null,X8:null,VD:null,XY:null
,VE:null,XW:null,X1:null,TF:null,X0:null,X9:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Aro,B.As$],0);A._GetAutoObject(A.Device.Helper).AkJ();this.Bb(this.VD);this.
N.Cv(A.aaL(A.ach.ADw));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2A=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2A)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJR=A._NewObject(A.acl.AF1,0);AJR.Fp(250);AJR.HM(1);AJR.Wy(6);this.
Y.HH(this.AV,true,AJR,null);}},CC:function(G){this.A34(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkJ();A._GetAutoObject(A.Device.Helper).Asi();},Fj:function(G){
var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.
Ay.Mx(-this.Y.Br[1]);},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VD)A._GetAutoObject(C.A$).Cf(35);else if(Cx===this.XY)A._GetAutoObject(
C.A$).Cf(34);else if(Cx===this.X1)A._GetAutoObject(C.A$).Cf(69);else if(Cx===this.
VE)A._GetAutoObject(C.A$).Cf(8);else if(Cx===this.XW)A._GetAutoObject(C.A$).Cf(50
);else if(Cx===this.TF)A._GetAutoObject(C.A$).Cf(25);else if(Cx===this.X7)A._GetAutoObject(
C.A$).Cf(77);else if(Cx===this.X8)A._GetAutoObject(C.A$).Cf(70);else if(Cx===this.
X9)A._GetAutoObject(C.A$).Cf(6);else if(Cx===this.X0)A._GetAutoObject(C.A$).Cf(63
);},Bz1:function(G){A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.
Device).AmJ);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmJ)this.N.Hx((
A.aaR(A.acf.A66)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hx((A.aaR(A.acf.
A66)+CQ)+A.aaR(A.acf.A7L).toLowerCase());},Adq:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A34:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mq());this.VE.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fm._Init.call(this.X7={I:this
},0);C.Fm._Init.call(this.X8={I:this},0);C.Fm._Init.call(this.VD={I:this},0);C.Fm.
_Init.call(this.XY={I:this},0);C.QS._Init.call(this.VE={I:this},0);C.Fm._Init.call(
this.XW={I:this},0);C.Fm._Init.call(this.X1={I:this},0);C.Fm._Init.call(this.TF={
I:this},0);C.Fm._Init.call(this.X0={I:this},0);C.Fm._Init.call(this.X9={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avn;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dq(C.AqT);this.DY.AZ(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CJ);this.Y.H(L1);this.Y.JQ(9);this.X7.H(P6);this.X7.Aj(true);
this.X7.T(A.aaR(A.acf.Gp));this.X8.H(J0);this.X8.Aj(true);this.X8.T(A.aaR(A.acf.
A7r));this.VD.H(N_);this.VD.Aj(true);this.VD.T(A.aaR(A.acf.Vq));this.XY.H(P7);this.
XY.Aj(true);this.XY.T(A.aaR(A.acf.Ts));this.VE.H(MG);this.VE.Aj(true);this.VE.T(
A.aaR(A.acf.APz));this.XW.H(S6);this.XW.Aj(true);this.XW.T(A.aaR(A.acf.Animal));
this.X1.H(J0);this.X1.Aj(true);this.X1.T(A.aaR(A.acf.A69));this.TF.H(UN);this.TF.
Ar(true);this.TF.Aj(true);this.TF.Z(true);this.TF.T(A.aaR(A.acf.A5U));this.X0.H(
ZZ);this.X0.Aj(true);this.X0.T(A.aaR(A.acf.Device));this.X9.H(WZ);this.X9.Aj(true
);this.X9.T(A.aaR(A.acf.Settings));this.Ay.H(Is);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.X7,0);this.J(this.X8,0);this.J(this.VD,0);this.J(this.XY,0);this.
J(this.VE,0);this.J(this.XW,0);this.J(this.X1,0);this.J(this.TF,0);this.J(this.X0
,0);this.J(this.X9,0);this.J(this.Ay,0);this.N.CE=[this,this.Bz1];this.N.Ck=[this
,this.Adq];this.Y.El=[this,this.Fj];this.X7.AR=[this,this.Ig];this.X7.DB(A.aaL(A.
ach.ADA));this.X8.AR=[this,this.Ig];this.X8.DB(A.aaL(A.ach.ADD));this.VD.AR=[this
,this.Ig];this.VD.DB(A.aaL(A.ach.APD));this.XY.AR=[this,this.Ig];this.XY.DB(A.aaL(
A.ach.APO));this.VE.AR=[this,this.Ig];this.VE.DB(A.aaL(A.ach.AQa));this.XW.AR=[this
,this.Ig];this.XW.DB(A.aaL(A.ach.APG));this.X1.AR=[this,this.Ig];this.X1.DB(A.aaL(
A.ach.AQh));this.TF.AR=[this,this.Ig];this.TF.DB(A.aaL(A.ach.AP1));this.X0.AR=[this
,this.Ig];this.X0.DB(A.aaL(A.ach.APY));this.X9.AR=[this,this.Ig];this.X9.DB(A.aaL(
A.ach.AQz));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.X7._Done();this.X8._Done();this.VD._Done();this.XY._Done();
this.VE._Done();this.XW._Done();this.X1._Done();this.TF._Done();this.X0._Done();
this.X9._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.X7._ReInit();this.X8.
_ReInit();this.VD._ReInit();this.XY._ReInit();this.VE._ReInit();this.XW._ReInit(
);this.X1._ReInit();this.TF._ReInit();this.X0._ReInit();this.X9._ReInit();this.Ay.
_ReInit();this.X7.T(A.aaR(A.acf.Gp));this.X8.T(A.aaR(A.acf.A7r));this.VD.T(A.aaR(
A.acf.Vq));this.XY.T(A.aaR(A.acf.Ts));this.VE.T(A.aaR(A.acf.APz));this.XW.T(A.aaR(
A.acf.Animal));this.X1.T(A.aaR(A.acf.A69));this.TF.T(A.aaR(A.acf.A5U));this.X0.T(
A.aaR(A.acf.Device));this.X9.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q7={Number:null,Je:null,IR:null,Ty:null,AsE:0,Init:function(aArg){var B;A.zX([
this,this.Ba$],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZX],0);A.pe([this,this.
Ba$],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnZ();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhG();},E4:function(G){A._GetAutoObject(A.Device.
Device).AnR();},AlX:function(G){var F;this.Am();this.Ty.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aei.Ar(true);if(!this.Ty.Bw)(F=this.Ty.Q,F[2].call(F[0],this.Ty.
B1));},Ba$:function(s){this.AlX(s);},AnZ:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gh);break;case 3:this.Background.
L(A.jb.H8);break;default:this.Background.L(A.jb.CJ);}},Akz:function(E){if(this.AsE===
E)return;this.AsE=E;this.Je.Akz(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Je._Init.call(this.Je={I:this}
,0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acl.Gk._Init.call(this.Ty={I:this}
,0);this.__proto__=C.Q7;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UO);this.Number.KQ(true);this.Number.L(A.jb.Text);this.Je.H(Z0);this.Je.Akz(0);
this.IR.H(W0);this.IR.L(A.jb.AV);this.IR.Zl(true);this.Ty.Fp(1750);this.Ty.Uj(750
);this.Ty.Aku(0);this.Ty.Ar(true);this.Ty.B1=3;this.J(this.Number,0);this.J(this.
Je,0);this.J(this.IR,0);this.Number.S(A.aaL(A.fl.Af));this.IR.Aw(A.aaL(A.ach.ADC
));this.Ty.Q=[B=this.IR,B.ASg,B.Cu];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Je._Done();this.IR._Done();this.Ty._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Je._ReInit();this.IR._ReInit();this.Ty._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fm={C8:null,ADm:null,AR:null,Bo:null,Dm:null,Background:
null,Mp:null,OB:null,QY:null,G8:null,A49:true,LF:false,KD:false,Qq:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hg.Bl.call(this,aSize);this.Mp.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QY.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OB.H(this.QY.M);this.G8.H([].concat(0,this.G8.M.slice(1,4)));this.G8.H(A.abN(
this.G8.M,aSize[0]));this.G8.H(A.abP(this.G8.M,0));this.G8.H([].concat(this.G8.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hg.Ai.call(this,Ae);var Hd=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hd){this.QY.L(A.jb.AmW);this.
G8.L(A.jb.CJ);this.OB.Z(true);this.OB.L(A.jb.AQM);this.Mp.Z(false);}else if(GE){
this.QY.L(A.jb.Bm);this.G8.L(A.jb.Bm);this.OB.Z(false);this.Mp.Z(true);}else if(
Fu){this.QY.L(A.jb.Bm);this.G8.L(A.jb.Bm);this.OB.Z(false);this.Mp.Z(true);}else{
this.QY.L(A.jb.Text);this.G8.L(A.jb.Text);this.OB.Z(true);this.OB.L(A.jb.CS);this.
Mp.Z(false);}this.LF=Hd;this.KD=Fu;this.Qq=GE;},Qp:function(G){this.Am();A.pe(this.
AR,this);},AiL:function(G){if(this.Dm.Acc)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G8.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QY.
Aw(E);this.OB.Aw(E);},AbX:function(E){if(this.A49===E)return;this.A49=E;this.G8.
Z(E);},Ab0:function(E){if(this.ADm===E)return;this.ADm=E;this.Mp.Aw(E);this.Mp.H(
A.abK(this.Mp.M,E.FrameSize));},_Init:function(aArg){C.Hg._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dm={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mp={
I:this},0);A.acg.Ap._Init.call(this.OB={I:this},0);A.acg.Ap._Init.call(this.QY={
I:this},0);C.CH._Init.call(this.G8={I:this},0);this.__proto__=C.Fm;this.H(Z1);this.
Bo.PQ(0);this.Bo.Ww(50);this.Dm.Filter=1;this.Background.H(W1);this.Background.Z(
false);this.Mp.AZ(0x14);this.Mp.L(A.jb.AV);this.Mp.Cu(0);this.OB.L(A.jb.CS);this.
OB.Cu(1);this.G8.H(Z2);this.J(this.Background,0);this.J(this.Mp,0);this.J(this.OB
,0);this.J(this.QY,0);this.J(this.G8,0);this.Bo.Mz=[this,this.Qp];this.Dm.BL=[this
,this.AiL];this.Mp.Aw(A.aaL(A.ach.NS));this.OB.Aw(A.aaL(A.ach.AvA));this.QY.Aw(A.
aaL(A.ach.AvA));this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(
A.aaL(A.fl.Bh));this.ADm=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hg;this.Bo._Done();this.Dm._Done();this.Background._Done();this.Mp._Done(
);this.OB._Done();this.QY._Done();this.G8._Done();C.Hg._Done.call(this);},_ReInit:
function(){C.Hg._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit();this.Background.
_ReInit();this.Mp._ReInit();this.OB._ReInit();this.QY._ReInit();this.G8._ReInit(
);this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Aw_:null,Background:null,OX:null,Ar$:0,Ak2:10,Ajy:100,AQ:0,AoO:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OX.H([].concat(2,this.OX.M.slice(1,4)));this.OX.H(A.abN(this.OX.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af1=this.Ak2<this.Ajy;var AJp=(
B=this.M)[3]-B[1];var A2n=10;var Aug=AJp;var A31=0;if(10>AJp)A2n=AJp;if(this.Ak2<
this.Ajy)Aug=((Aug*this.Ak2)/this.Ajy)|0;if(Aug<A2n)Aug=A2n;if(this.Ak2<this.Ajy
)A31=((this.Bkx()*(AJp-Aug))/(this.Ajy-this.Ak2))|0;this.OX.H(A.abP(this.OX.M,A31
));this.OX.H([].concat(this.OX.M.slice(0,3),A31+Aug));this.OX.Z(Af1);this.Background.
Z(Af1);if(!!this.Aw_&&(this.AoO!==Af1))A.pe(this.Aw_,this);this.AoO=Af1;},Bkx:function(
){var E=this.Ar$;var HC=this.Ajy-this.Ak2;if((HC>0)&&(E>HC))E=HC;if(HC<=0)E=0;return E;
},Mx:function(E){if(E<0)E=0;if(this.Ar$===E)return;this.Ar$=E;this.Am();},My:function(
E){if(E<0)E=0;if(this.Ak2===E)return;this.Ak2=E;this.Am();},Mw:function(E){if(E<
0)E=0;if(this.Ajy===E)return;this.Ajy=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OX.L(E);},BmD:function(E){if(A.aa0(this.Aw_,E))return;this.
Aw_=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.OX={I:this},0);this.__proto__=
C.Ay;this.H(Z3);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UP);this.Background.L(A.jb.CS);this.OX.AZ(0x0);this.OX.H(UP);this.OX.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OX,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OX._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Aw_)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cd={Hh:null,Y:null,Ay:null,Ap:null,A6z:A.jV,Init:function(aArg){A.pe([this,this.
AA2],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);this.AA2(this);},AlT:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApF:function(G){if(!!this.N.Co
)A.pe(this.N.Co,this);},AAu:function(G){if(!!this.N.Ck)A.pe(this.N.Ck,this);},Fj:
function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[
3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);A.pe([this,this.BAl],this);},AA2:function(G){
var B;var GX=(C.Cn.isPrototypeOf(B=this.AV)?B:null);this.N.Hx(A.jV);this.N.C1(A.
aaL(A.ach.Yt));this.N.CE=[this,this.Ev];if(!!GX&&!!GX.Ami){this.N.FN(A.jV);this.
N.Jx.Dj(255);this.N.ArH(GX.AqJ);this.N.Cv(GX.Avx);this.N.Ck=GX.Ami;}else{this.N.
FN(A.jV);this.N.Cv(null);this.N.Ck=null;}if(!!GX&&!!GX.Agq){this.N.CX(GX.AxD);this.
N.HQ.Dj(GX.Aw$);this.N.Anr(GX.AmL);this.N.C5(GX.Aq0);this.N.Co=GX.Agq;}else{this.
N.CX(A.jV);this.N.C5(null);this.N.Co=null;}},I_:function(E){if(this.A6z===E)return;
this.A6z=E;this.Hh.R(E);},Ev:function(G){A._GetAutoObject(C.A$).Fy();},BAl:function(
G){var B;var Bzi=this.Ay.Background.Fo();var Bdj=(Bzi?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ai$=X;
X=X.Ah;if(((Ai$.U&0x400)===0x400)){if(!!(A.Core.Aka.isPrototypeOf(Ai$)?Ai$:null)
){var Bdp=(A.Core.Aka.isPrototypeOf(Ai$)?Ai$:null);Bdp.DC([Bdj,Bdp.EC[1]]);}else
if(!!(A.Core.Et.isPrototypeOf(Ai$)?Ai$:null)){var Bfk=(A.Core.Et.isPrototypeOf(Ai$
)?Ai$:null);Bfk.H(A.abN(Bfk.M,Bdj));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hh={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cd;this.N.Z(true);this.Hh.H(W2);this.Hh.Ar(false);this.Hh.R(A.aaR(A.
acf.Settings));this.Hh.L(A.jb.Text);this.Y.H(Fe);this.Y.JQ(1);this.Ay.H(Is);this.
Ap.H(P8);this.Ap.L(A.jb.Text);this.J(this.Hh,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));this.Y.
El=[this,this.Fj];this.Ap.Aw(A.aaL(A.ach.AC5));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hh._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hh._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hh.R(A.aaR(A.acf.Settings
));this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqT={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgf],[B=
A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},De:function(E){C.BQ.De.call(this
,E);this.Text.L(E);},Bgf:function(G){this.Text.R(A._GetAutoObject(A.acj.KJ).Bh9(
A._GetAutoObject(A.Device.Helper).Du()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqT;this.Timer.Ww(1);this.Timer.Ar(true);
this.Text.H(Z4);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mz=[this,this.Bgf
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
,HQ:null,Px:null,I6:null,Lc:null,TU:null,TW:null,AnT:A.jV,AnU:A.jV,AnV:A.jV,Aq1:
0,Aq2:0,Aq3:0,Ahf:0,Zz:false,Zy:false,Asf:false,Asu:false,Ast:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VQ)this.Jc.S(this.VQ);if(!!this.VS)this.Jx.S(this.
VS);if(!!this.VT)this.HQ.S(this.VT);switch(this.Ahf){case 0:{this.NG.Z(false);this.
Jc.L(A.jb.Bm);this.Jx.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Px.L(A.jb.Bm);this.I6.L(
A.jb.Bm);this.Lc.L(A.jb.Bm);}break;case 1:{if(!this.AgY)this.NG.H(A.aaT(this.Jc.
AR_(),Ri));else this.NG.H(this.Px.Db());this.NG.Z(true);this.Jc.L(A.jb.Text);this.
Jx.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Px.L(A.jb.Text);this.I6.L(A.jb.Bm);this.Lc.
L(A.jb.Bm);}break;case 3:{if(!this.Ag0)this.NG.H(A.aaT(this.HQ.AR_(),Ri));else this.
NG.H(this.Lc.Db());this.NG.Z(true);this.Jc.L(A.jb.Bm);this.Jx.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Px.L(A.jb.Bm);this.I6.L(A.jb.Bm);this.Lc.L(A.jb.Text);}break;case
2:{if(!this.AgZ)this.NG.H(A.aaT(this.Jx.AR_(),Ri));else this.NG.H(this.I6.Db());
this.NG.Z(true);this.Jc.L(A.jb.Bm);this.Jx.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Px.L(A.jb.Bm);this.I6.L(A.jb.Text);this.Lc.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W3);}}if(!!this.Px.Al){this.Px.Z(true);this.Jc.Z(false);}else{
this.Px.Z(false);this.Jc.Z(true);}if(this.AnU.length<=0){this.I6.Z(true);this.Jx.
Z(false);}else{this.I6.Z(false);this.Jx.Z(true);}if(!!this.Lc.Al){this.Lc.Z(true
);this.HQ.Z(false);}else{this.Lc.Z(false);this.HQ.Z(true);}},Hx:function(E){if(this.
AnT===E)return;this.AnT=E;this.Jc.R(E);this.Am();},FN:function(E){if(this.AnU===
E)return;this.AnU=E;this.Jx.R(E);this.Am();},CX:function(E){if(this.AnV===E)return;
this.AnV=E;this.HQ.R(E);this.Am();},AE9:function(E){if(this.Ahf===E)return;this.
Ahf=E;this.Am();},AE0:function(E){if(this.VQ===E)return;this.VQ=E;this.Jc.S(E);this.
Am();},ArH:function(E){if(this.VS===E)return;this.VS=E;this.Jx.S(E);this.Am();},
Anr:function(E){if(this.VT===E)return;this.VT=E;this.HQ.S(E);this.Am();},A3e:function(
G){this.Am();},C1:function(E){if(this.AgY===E)return;this.AgY=E;this.Px.Aw(E);this.
Am();},Cv:function(E){if(this.AgZ===E)return;this.AgZ=E;this.I6.Aw(E);this.Am();
},C5:function(E){if(this.Ag0===E)return;this.Ag0=E;this.Lc.Aw(E);this.Am();},ON:
function(E){if(this.Ast===E)return;this.Ast=E;this.TU.Z(E);if(E)this.Jc.H([].concat(
this.TU.M[2],this.Jc.M.slice(1,4)));else this.Jc.H([].concat(0,this.Jc.M.slice(1
,4)));this.Am();},OO:function(E){if(this.Asu===E)return;this.Asu=E;this.TW.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TW.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.Am();},Bl1:function(E){if(this.Aq1===E)return;this.Aq1=E;this.Px.Cu(
E);this.Am();},ASV:function(E){if(this.Aq2===E)return;this.Aq2=E;this.I6.Cu(E);this.
Am();},A9D:function(E){if(this.Aq3===E)return;this.Aq3=E;this.Lc.Cu(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Jc={I:this
},0);C.CH._Init.call(this.Jx={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Px={I:this},0);A.acg.Ap._Init.call(this.I6={I:this},0);A.acg.
Ap._Init.call(this.Lc={I:this},0);A.acg.Ap._Init.call(this.TU={I:this},0);A.acg.
Ap._Init.call(this.TW={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.Ad7);this.NG.H(W4);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Jc.AZ(0x14);this.Jc.H(W5);this.Jc.A5(0x12);this.
Jx.AZ(0x14);this.Jx.H(W6);this.Jx.A5(0x12);this.HQ.H(Z5);this.Px.H(W7);this.I6.H(
W8);this.Lc.H(S7);this.Lc.Z(false);this.TU.H(UQ);this.TU.Z(false);this.TW.H(UR);
this.TW.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Jc,0);this.
J(this.Jx,0);this.J(this.HQ,0);this.J(this.Px,0);this.J(this.I6,0);this.J(this.Lc
,0);this.J(this.TU,0);this.J(this.TW,0);this.Jc.S(A.aaL(A.fl.Ak));this.Jc.A2(A.aaL(
A.fl.Bh));this.Jc.Q2([this,this.A3e]);this.Jx.S(A.aaL(A.fl.Ak));this.Jx.A2(A.aaL(
A.fl.Bh));this.Jx.Q2([this,this.A3e]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bh));this.HQ.Q2([this,this.A3e]);this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.
Ak);this.VT=A.aaL(A.fl.Ak);this.Px.Aw(null);this.I6.Aw(null);this.Lc.Aw(null);this.
TU.Aw(A.aaL(A.ach.AMC));this.TW.Aw(A.aaL(A.ach.Ajm));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Jc._Done(
);this.Jx._Done();this.HQ._Done();this.Px._Done();this.I6._Done();this.Lc._Done(
);this.TU._Done();this.TW._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Jc.
_ReInit();this.Jx._ReInit();this.HQ._ReInit();this.Px._ReInit();this.I6._ReInit(
);this.Lc._ReInit();this.TU._ReInit();this.TW._ReInit();this.Jc.S(A.aaL(A.fl.Ak)
);this.Jc.A2(A.aaL(A.fl.Bh));this.Jx.S(A.aaL(A.fl.Ak));this.Jx.A2(A.aaL(A.fl.Bh)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bh));this.AE0(A.aaL(A.fl.Ak));
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
this.Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.AC9={Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper),B.Arq,B.Aky],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper)
,B.A8C,B.AFv],0);A.pe([this,this.Nm],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhC)this.AbZ(A._GetAutoObject(A.Device.Helper).AhC.AOJ());else this.
AbZ(-1);if(!!A._GetAutoObject(A.Device.Helper).Uu)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak0(A._GetAutoObject(A.Device.Helper).Uu.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmR._Init.call(this,aArg);this.__proto__=C.AC9;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGK={Ex:null,Eh:null,
FW:null,XU:null,Tz:null,IF:null,IG:null,Init:function(aArg){},WC:function(G){var
B;C.DR.WC.call(this,G);var AKE=this.Azh(A._GetAutoObject(A.Device.Helper).UA.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALt=this.Azh(A._GetAutoObject(
A.Device.Helper).UB.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var By_=
this.Azh(A._GetAutoObject(A.Device.Device).AcA);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKE));this.IG.H(A.abO(this.
IG.M,this.Ex.M[3]-((((B=this.IG.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALt));this.
IF.H(A.abO(this.IF.M,(this.Eh.M[3]-((((B=this.IF.M)[3]-B[1])/2)|0))+2));this.FW.
H(A.abP(this.FW.M,this.Eh.M[3]));this.FW.H([].concat(this.FW.M.slice(0,3),((B=this.
M)[3]-B[1])-By_));this.Tz.H(A.abO(this.Tz.M,this.FW.M[3]-((((B=this.Tz.M)[3]-B[1
])/2)|0)));this.XU.H(A.abP(this.XU.M,this.FW.M[3]));this.XU.H([].concat(this.XU.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJC:function(AoK){return A._GetAutoObject(A.
Device.Converter).AkV(AoK);},AJ$:function(){return A._GetAutoObject(A.acj.Temperature
).AlC();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.
FW={I:this},0);A.acg.AK._Init.call(this.XU={I:this},0);A.acg.AK._Init.call(this.
Tz={I:this},0);A.acg.AK._Init.call(this.IF={I:this},0);A.acg.AK._Init.call(this.
IG={I:this},0);this.__proto__=C.AGK;this.Ex.AZ(0xD);this.Ex.H(AcH);this.Ex.L(A.jb.
Gh);this.Eh.AZ(0xD);this.Eh.H(S8);this.Eh.L(A.jb.H8);this.FW.AZ(0xD);this.FW.H(Z6
);this.FW.L(A.jb.E1);this.XU.AZ(0xD);this.XU.H(Afw);this.XU.L(A.jb.Afp);this.Tz.
AZ(0xD);this.Tz.H(Z7);this.Tz.Awm(A.jb.Afp);this.Tz.Awn(A.jb.Afp);this.Tz.Awp(A.
jb.E1);this.Tz.Awo(A.jb.E1);this.IF.AZ(0xD);this.IF.H(W9);this.IF.Awm(A.jb.E1);this.
IF.Awn(A.jb.E1);this.IF.Awp(A.jb.H8);this.IF.Awo(A.jb.H8);this.IG.AZ(0xD);this.IG.
H(Z8);this.IG.Awm(A.jb.H8);this.IG.Awn(A.jb.H8);this.IG.Awp(A.jb.Gh);this.IG.Awo(
A.jb.Gh);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FW,-1);this.J(this.XU
,-1);this.J(this.Tz,-1);this.J(this.IF,-1);this.J(this.IG,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FW._Done(
);this.XU._Done();this.Tz._Done();this.IF._Done();this.IG._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FW._ReInit();this.XU._ReInit();this.Tz._ReInit();this.IF._ReInit();this.IG.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cn={Avc:null,AmL:null,AP8:null,Aq0:null,AqJ:null,Avx:null,AR:null,Agq:null,Ami:
null,N:null,Bo:null,QO:null,AxD:A.jV,AUw:false,AGy:false,Apa:false,Aw$:255,LF:false
,KD:false,Qq:false,Ai:function(Ae){var B;C.OU.Ai.call(this,Ae);var Hd=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var IA=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FQ=
A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.
L(A.jb.CS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AmW);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW
);}this.LF=Hd;this.KD=Fu;this.Qq=GE;this.Apa=IA;},Qp:function(G){this.Am();A.pe(
this.AR,this);},Bv6:function(s){this.Qp(s);},IY:function(G){if(this.QO.Acc)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atb:function(s){this.IY(s);},AeR:function(E){if(A.aa0(this.Agq,E))return;this.
Agq=E;},A97:function(E){if(this.AxD===E)return;this.AxD=E;},Zo:function(E){if(this.
Avc===E)return;this.Avc=E;},Zp:function(E){if(this.AmL===E)return;this.AmL=E;},A9N:
function(E){if(this.Aw$===E)return;this.Aw$=E;},Gq:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALb();},A2N:
function(G){},BFS:function(s){this.A2N(s);},Akt:function(E){if(this.Aq0===E)return;
this.Aq0=E;},LX:function(E){if(A.aa0(this.Ami,E))return;this.Ami=E;},BlU:function(
E){if(this.AqJ===E)return;this.AqJ=E;},L0:function(E){if(this.Avx===E)return;this.
Avx=E;},Zt:function(E){if(this.AGy===E)return;this.AGy=E;this.ALb();},ALb:function(
){var B;var Qw=this.DK;if(this.AGy)Qw=Qw+A.aaR(A.acf.Colon);if(this.AUw)Qw=Qw+Z9;
this.V.R(Qw);},ATg:function(E){if(this.AUw===E)return;this.AUw=E;this.ALb();},_Init:
function(aArg){C.OU._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QO={I:this},0);this.__proto__=C.Cn;this.Bo.PQ(0);
this.Bo.Ww(50);this.Bo.Ar(false);this.QO.Filter=1;this.Bo.Mz=[this,this.Bv6];this.
QO.BL=[this,this.Atb];this.Avc=A.aaL(A.fl.Ak);this.AmL=A.aaL(A.fl.Ak);this.AP8=A.
aaL(A.ach.E2);this.AqJ=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OU;this.
Bo._Done();this.QO._Done();C.OU._Done.call(this);},_ReInit:function(){C.OU._ReInit.
call(this);this.Bo._ReInit();this.QO._ReInit();this.Zo(A.aaL(A.fl.Ak));this.Zp(A.
aaL(A.fl.Ak));this.BlU(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.Avc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmL)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AP8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqJ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agq)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ami)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dr={Q:null,Am7:null,Am9:null,Hw:null,H4:null,AM:0,Go:0,F_:100,FF:0,Init:function(
aArg){},IY:function(G){this.FF=1;C.Eg.IY.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hw.H([0,aSize[1]-40,40,aSize[1]]);this.H4.H([].concat(A.
abe(aSize,Afx),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fu=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hw.L(this.V.AQ);this.H4.L(this.V.AQ);this.Hw.
Z((Fu||GE)&&(this.AM>this.Go));this.H4.Z((Fu||GE)&&(this.AM<this.F_));if(this.FF===
6)this.Hw.L(A.jb.E1);if(this.FF===7)this.H4.L(A.jb.E1);},Bet:function(G){this.FF=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyI],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qp:function(G){if(this.FF===6)A.pe([this,this.AyI],this);if(this.FF===
7)A.pe([this,this.AyJ],this);if(this.FF===1)A.pe(this.AR,this);this.FF=0;this.Am(
);},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcQ:function(
s){this.C2(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcQ],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcQ],E,0);if(!!E)A.pe([this,
this.AcQ],this);},Beu:function(G){this.FF=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyJ],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J$:function(G){this.FF=0;}
,AyJ:function(s){this.J$(s);},J6:function(G){this.FF=0;},AyI:function(s){this.J6(
s);},Bx:function(E){if(E<this.Go)E=this.Go;if(E>this.F_)E=this.F_;if(this.AM===E
)return;this.AM=E;this.Am();},BaC:function(Aq){this.Bx(Aq);},F$:function(E){if(this.
Go===E)return;this.Go=E;this.Am();},EU:function(E){if(this.F_===E)return;this.F_=
E;this.Am();},Ud:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.Am7={I:this},0);A.Core.BK._Init.call(this.Am9={
I:this},0);A.acg.Ap._Init.call(this.Hw={I:this},0);A.acg.Ap._Init.call(this.H4={
I:this},0);this.__proto__=C.Dr;this.H(KX);this.Am7.Filter=6;this.Am9.Filter=7;this.
Background.H(KX);this.V.H(AcI);this.V.R(Lu);this.Hw.H(AhS);this.H4.H(An7);this.H4.
Cu(1);this.J(this.Hw,0);this.J(this.H4,0);this.Am7.BL=[this,this.Bet];this.Am7.D1=[
this,this.Bet];this.Am9.BL=[this,this.Beu];this.Am9.D1=[this,this.Beu];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(null);this.Hw.Aw(A.aaL(A.ach.
Ajn));this.H4.Aw(A.aaL(A.ach.Ajn));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Am7._Done();this.Am9._Done();this.Hw._Done();this.H4._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Am7._ReInit();this.
Am9._ReInit();this.Hw._ReInit();this.H4._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dt:function(){return-1;},C7:function(aIndex){return-1;},Gj:function(
aIndex){return A.jV;},DZ:function(A9){return-1;},H3:function(){return-1;},At:function(
E){this.Q=E;},B$:function(Aq){this.At(Aq);},ACN:function(aIndex){return null;},ACP:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iq={Axu:null
,BS:null,AGX:A.jV,AU$:A.jV,AjY:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dr.Ai.call(this,Ae);if(!this.Axu){this.BS.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BS.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AU$);else this.BS.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AGX);}}else(B=
this.Axu)?B[1].call(B[0],this):null;},J$:function(G){var F;var BO=this.AM;C.Dr.J$.
call(this,G);this.Bx(this.AM+this.AjY);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J6:function(G){var F;var BO=this.AM;C.
Dr.J6.call(this,G);this.Bx(this.AM-this.AjY);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IO:function(E){if(this.AGX===E)return;
this.AGX=E;this.Am();},I$:function(E){if(this.AU$===E)return;this.AU$=E;this.Am(
);},ASW:function(E){if(this.AjY===E)return;this.AjY=E;},A94:function(E){if(A.aa0(
this.Axu,E))return;this.Axu=E;},_Init:function(aArg){C.Dr._Init.call(this,aArg);
C.CH._Init.call(this.BS={I:this},0);this.__proto__=C.Iq;this.H(KX);this.BS.H(N$);
this.J(this.BS,-1);this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dr;this.BS._Done();C.Dr._Done.call(this
);},_ReInit:function(){C.Dr._ReInit.call(this);this.BS._ReInit();this.BS.S(A.aaL(
A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dr._Mark.call(this
,D);if((B=this.Axu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BU={AC:
null,Dz:null,HL:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Dr.Bl.call(this,aSize);this.Dz.H([this.Hw.M[2]-10,this.Hw.M[1],this.
H4.M[0]+10,this.Hw.M[3]]);this.Dz.AE_((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.Dz.
Gr,true,null,null);},Ai:function(Ae){var B;C.Dr.Ai.call(this,Ae);var Fu=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbA(0,this.Dz.AY-1);this.Hw.Z(Fu||GE);this.H4.
Z(Fu||GE);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},J$:function(G){var F;var BO=this.AM;C.Dr.J$.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BO=this.AM;
C.Dr.J6.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var Qv=0;if(E<this.Go){E=this.F_;Qv=-this.Dz.V9*this.Dz.AY;}if(E>this.F_){E=this.
Go;Qv=this.Dz.V9;}C.Dr.Bx.call(this,E);if(!!Qv)this.Dz.Ga(Qv);this.Dz.GS(this.AM
);if(this.Dz.Bi4())this.Dz.Bos(false,false);this.Dz.HH(this.Dz.Gr,true,this.HL,null
);},Hk:function(G){var B;var Ge=this.Dz.G4;var Cz=(C.CH.isPrototypeOf(B=this.Dz.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.AwV(19);Cz.A2(this.V.AmK);Cz.BmN(19
);Cz.Ct(this.V.AqI);Cz.BmO(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gj(Ge));
else Cz.R(W_);Cz.H(A.abK(Cz.M,[this.Dz.V9,(B=this.Dz.M)[3]-B[1]]));},BvI:function(
s){this.Hk(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
F$(0);this.EU(this.AC.Dt()-1);this.Dz.Jw(this.AC.Dt());this.Dz.AbA(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Dr._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gk._Init.call(this.HL={I:this},0);this.__proto__=C.BU;this.
H(KX);this.Dz.NZ(C.CH);this.HL.Wy(23);this.HL.HM(1);this.HL.Fp(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dz.Hk=[this,this.BvI
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dr;this.Dz._Done();this.HL.
_Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.
Dz._ReInit();this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SO={FI:null,OE:null,Dk:null,Au:null,Ju:null,HK:null,Pq:null,VO:null,QX:null,
Yf:null,P3:null,Gx:null,Gw:null,FX:0,A8:0,Asc:false,Bi0:false,Init:function(aArg
){},Ai:function(Ae){C.Dr.Ai.call(this,Ae);this.Hw.Z(false);this.H4.Z(false);var AtL=
A.jV;if(!!this.Dk){this.Pq.R(this.Au.Format(An8));this.QX.R(this.Au.Format(US));
this.P3.R(this.Au.Format(AhT));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.Pq.
M);this.HK.L(this.V.AQ);this.Pq.L(this.Background.AQ);this.QX.L(this.V.AQ);this.
P3.L(this.V.AQ);AtL=A.aaR(A.acf.A5q);}else if(this.A8===2){this.HK.Z(true);this.
HK.H(this.QX.M);this.HK.L(this.V.AQ);this.Pq.L(this.V.AQ);this.QX.L(this.Background.
AQ);this.P3.L(this.V.AQ);AtL=A.aaR(A.acf.Hi);}else if(this.A8===3){this.HK.Z(true
);this.HK.H(this.P3.M);this.HK.L(this.V.AQ);this.Pq.L(this.V.AQ);this.QX.L(this.
V.AQ);this.P3.L(this.Background.AQ);AtL=A.aaR(A.acf.Year);}else{this.HK.Z(false);
this.Pq.L(this.V.AQ);this.Yf.L(this.V.AQ);this.QX.L(this.V.AQ);this.VO.L(this.V.
AQ);this.P3.L(this.V.AQ);}if(AtL.length>0){if(this.AGy)this.V.R((((this.DK+AcJ)+
AtL)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcJ)+
AtL)+String.fromCharCode(0x29));}else this.ALb();},Qp:function(G){if(this.FF===1
)A.pe([this,this.U8],this);else if(this.FF===4)A.pe([this,this.AiB],this);else if(
this.FF===5)A.pe([this,this.Ain],this);C.Dr.Qp.call(this,G);},J$:function(G){switch(
this.A8){case 0:C.Dr.J$.call(this,G);break;case 3:break;default:this.Ads(this);}
},J6:function(G){switch(this.A8){case 0:C.Dr.J6.call(this,G);break;default:this.
Aim(this);}},Adu:function(G){var F;if(!!this.Dk)this.Uh((F=this.Dk,F[1].call(F[0
])));},Ab2:function(E){if(A.aaZ(this.Dk,E))return;if(!!this.Dk)A.z$([this,this.Adu
],this.Dk,0);this.Dk=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu
],this);},Uh:function(E){if(this.FX===E)return;this.FX=E;this.Au.Initialize(this.
FX);this.Am();},Ads:function(G){this.FF=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ba9:function(s){this.Ads(s);},U8:
function(G){this.Ew(this.A8+1);},AlW:function(G){this.FF=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiB],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AlV:function(
G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ain],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiB:function(G){var B;var F;var BO=this.FX;switch(this.A8){
case 1:{if(this.Asc){var AA$=A._NewObject(A.Core.AnW,0);AA$.Kj=1;if(this.Au.J(AA$
).JP()>A._GetAutoObject(A.Device.Helper).Du())return;}if(this.Au.GK<this.Au.Zi()
)this.Au.Lo(this.Au.GK+1);}break;case 2:{if(this.Asc){var AA$=A._NewObject(A.Core.
AnW,0);AA$.Kj=this.Au.Zi();if(this.Au.J(AA$).JP()>A._GetAutoObject(A.Device.Helper
).Du())return;}this.Au.Ul(this.Au.Hi+1);if(this.Au.Zi()<this.Au.GK)this.Au.Lo(this.
Au.Zi());}break;case 3:{if(this.Asc){var A0$=A._NewObject(A.Core.Bs,0);A0$.Initialize(
this.Au.JP());A0$.Year+=1;if(A0$.JP()>A._GetAutoObject(A.Device.Helper).Du())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Uh(((B=(this.Au.JP()|0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dk)(F=this.
Dk,F[2].call(F[0],this.FX));A.abo(this.Dk,0);}},Ain:function(G){var B;var F;var BO=
this.FX;if(this.A8===1)this.Au.Lo(this.Au.GK-1);if(this.A8===2){this.Au.Ul(this.
Au.Hi-1);if(this.Au.Zi()<this.Au.GK)this.Au.Lo(this.Au.Zi());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Uh(((B=(this.Au.JP()|
0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],
this.FX));A.abo(this.Dk,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
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
0])));}},AFs:function(E){if(this.Asc===E)return;this.Asc=E;},FU:function(G){this.
Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;var AAi=this.A8;if(!this.
A8){this.FI.Aju((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.FX){var BO=this.FX;
this.Uh(A._GetAutoObject(A.Device.Helper).Du());if(this.FX!==BO){if(!!this.Dk)(F=
this.Dk,F[2].call(F[0],this.FX));A.abo(this.Dk,0);}}}this.A8=EN;this.Bi0=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=
!!this.A8;if((!!AAi&&!this.A8)&&!!this.OE)A.pe(this.OE,this);this.Am();},Aim:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dr._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BK._Init.call(this.Ju={I:this}
,0);A.acg.AK._Init.call(this.HK={I:this},0);A.acg.Text._Init.call(this.Pq={I:this
},0);A.acg.Text._Init.call(this.VO={I:this},0);A.acg.Text._Init.call(this.QX={I:
this},0);A.acg.Text._Init.call(this.Yf={I:this},0);A.acg.Text._Init.call(this.P3={
I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(this.Gw={
I:this},0);this.__proto__=C.SO;this.H(UT);this.V.R(An9);this.Hw.Z(false);this.H4.
Z(false);this.Ju.Filter=1;this.HK.H(An_);this.HK.L(0x55FFFFFF);this.Pq.H(An$);this.
Pq.I9(true);this.Pq.A5(0x14);this.VO.H(Aoa);this.VO.I9(true);this.VO.A5(0x14);this.
VO.R(Afy);this.QX.H(AsN);this.QX.I9(true);this.Yf.H(AxV);this.Yf.I9(true);this.Yf.
R(Afy);this.P3.H(AxW);this.P3.I9(true);this.P3.A5(0x11);this.Gx.Filter=4;this.Gx.
Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);this.J(this.Pq,0);this.
J(this.VO,0);this.J(this.QX,0);this.J(this.Yf,0);this.J(this.P3,0);this.Ju.BL=[this
,this.Ba9];this.Pq.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QX.S(A.aaL(A.
fl.EK));this.Yf.S(A.aaL(A.fl.EK));this.P3.S(A.aaL(A.fl.EK));this.Gx.BL=[this,this.
AlW];this.Gx.D1=[this,this.AiB];this.Gw.BL=[this,this.AlV];this.Gw.D1=[this,this.
Ain];this.FI=A._NewObject(C.Aeo,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dr;this.Au._Done();this.Ju._Done();this.HK._Done();this.Pq._Done();this.VO._Done(
);this.QX._Done();this.Yf._Done();this.P3._Done();this.Gx._Done();this.Gw._Done(
);C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Au._ReInit(
);this.Ju._ReInit();this.HK._ReInit();this.Pq._ReInit();this.VO._ReInit();this.QX.
_ReInit();this.Yf._ReInit();this.P3._ReInit();this.Gx._ReInit();this.Gw._ReInit(
);this.Pq.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QX.S(A.aaL(A.fl.EK));
this.Yf.S(A.aaL(A.fl.EK));this.P3.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Dr._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OH={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bdm],[B=A._GetAutoObject(A.Device.Device),B.A8l,B.BaJ],0);
A.pe([this,this.Bdm],this);},Dt:function(){return 16;},Gj:function(aIndex){return this.
LanguageToString.BR(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(
A.Device.Device).Anu(E);},Bdm:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OH;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,5);this.Cb.
Set(3,3);this.Cb.Set(4,8);this.Cb.Set(5,9);this.Cb.Set(6,7);this.Cb.Set(7,6);this.
Cb.Set(8,10);this.Cb.Set(9,2);this.Cb.Set(10,11);this.Cb.Set(11,12);this.Cb.Set(
12,13);this.Cb.Set(13,14);this.Cb.Set(14,15);this.Cb.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cl;this.LanguageToString._Done();C.Cl._Done.
call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Ra={TemperatureUnitToString:
null,Dt:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AwZ(E);}
,Init:function(aArg){var B;A.zX([this,this.BfV],[B=A._GetAutoObject(A.Device.Device
),B.Arr,B.Ata],0);A.pe([this,this.BfV],this);},BfV:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Ra;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUP={Ajs:null,Acw:null,Kw:null,AP:null,A_:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kw.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajs.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Acw.H(this.Ajs.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kw.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hq=Ad;if(!!this.AX){var Alt=this.AX.Hu(Ad,6);var ApP=this.AX.CF(Ad,
7);var At1=this.AX.I4(Ad,9);this.T(A._GetAutoObject(A.acj.KJ).ACJ(Alt));this.Kw.
R(A._GetAutoObject(A.acj.KJ).A5$(Alt));this.Acw.R(A._GetAutoObject(A.Device.Converter
).AkV(ApP));this.Acw.L(A._GetAutoObject(A.acj.Assessment).Xu(At1));this.Ajs.L(A.
_GetAutoObject(A.acj.Assessment).Qm(At1));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Ajs={I:this},0);A.acg.Text._Init.
call(this.Acw={I:this},0);A.acg.Text._Init.call(this.Kw={I:this},0);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AUP;this.V.H(O3);this.Acw.L(A.jb.Text);this.Kw.R(Rj);this.Kw.L(A.jb.Text);this.
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
,_className:"Application::TemperatureListItem"};C.Gb={AX:null,AR:null,Cq:null,AD:
null,Afg:null,Pt:null,KL:A.jV,Lh:null,AVb:true,Hk:function(G){var B;var Ge=this.
AD.G4;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zm(this.
AX);Aa.Ce(Ge);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GN]));
},NZ:function(E){if(E===this.Lh)return;this.Lh=E;this.AD.NZ(E);},Zm:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AVb===
false)return;if(!!this.AX){this.AD.Jw(this.AX.B9());this.AD.AbA(0,this.AD.AY-1);
}else this.AD.Jw(0);if((this.AD.AY>0)&&(this.FK()<0))this.GS(0);if(this.FK()>=this.
AD.AY){this.GS(0);this.AD.Ga(0);}if(this.AD.AY<=0){this.Pt.Z(true);this.GS(-1);}
else{this.Pt.Z(false);this.ABy(null,null);}},Fj:function(G){var B;this.Afg.Mw(this.
AD.GN*this.AD.AY);this.Afg.My((B=this.AD.M)[3]-B[1]);this.Afg.Mx(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FK()>0)this.GS(
this.FK()-1);break;case 5:if(this.FK()<(this.AD.AY-1))this.GS(this.FK()+1);break;
default:this.Cq.NH=true;}this.AD.HH(this.FK(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NH=true;},Zq:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbA(0,this.AD.AY);},GS:function(E){this.AD.GS(E);this.AD.HH(E,
true,null,null);},FK:function(){return this.AD.Gr;},Dv:function(E){if(this.KL===
E)return;this.KL=E;this.Pt.R(E);},ABy:function(AcT,E7){this.AD.ABy(AcT,E7);},ATv:
function(E){if(this.AVb===E)return;this.AVb=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afg={I:this},
0);A.acg.Text._Init.call(this.Pt={I:this},0);this.__proto__=C.Gb;this.H(UU);this.
Lh=C.Ba;this.Cq.Filter=147;this.AD.AZ(0x3F);this.AD.H(UU);this.AD.Ae3(40);this.Afg.
AZ(0x3A);this.Afg.H(AsO);this.Pt.AZ(0x3F);this.Pt.H(AxY);this.Pt.Hl(10);this.Pt.
KQ(true);this.Pt.A5(0xA);this.Pt.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afg,
0);this.J(this.Pt,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.AD.
El=[this,this.Fj];this.AD.Hk=[this,this.Hk];this.Pt.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cq._Done();this.AD._Done();this.Afg._Done();this.
Pt._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cq._ReInit();this.AD._ReInit();this.Afg._ReInit();this.Pt._ReInit();this.
Pt.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hq:-1,CP:function(){this.Ce(this.Hq);},Ai:function(Ae){var B;C.Cn.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hq%2)===1)this.Background.L(A.
jb.CJ);else this.Background.L(A.jb.CS);}},Zm:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",AxZ);},_Init:function(aArg){C.Cn._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cn._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GZ={Bg:null,FB:null
,DP:null,FJ:null,VX:null,Kh:null,KL:A.jV,ATR:0,ATS:0,Afh:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dw(0);A.pe([this,this.Bao],this);}},Init:function(aArg){var B;A.zX([this,this.
Bd3],[B=A._GetAutoObject(A.Device.Device),B.AEm,B.AIE],0);A.zV([this,this.Af7],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcB],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BAq],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0
],0);A.pe([this,this.AcB],this);A.pe([this,this.AZ6],this);A.pe([this,this.Axp],
this);},Wu:function(G){this.Agr();var O;for(O=this.Kh.Dt()-1;O>=0;O=O-1)switch(this.
Kh.C7(O)){case 0:this.AdM(A.aaR(A.acf.A4B),[this,this.Bm$],0);break;case 14:this.
AdM(A.aaR(A.acf.BgA),[this,this.Bna],14);break;case 1:this.AdM(A.aaR(A.acf.Temperature
),[this,this.ATx],1);break;case 2:this.AdM(A.aaR(A.acf.Rating),[this,this.ATw],2
);break;case 3:this.AdM(A.aaR(A.acf.Afq),[this,this.ATy],3);break;default:A.ab5(
"%s",Ax0);}A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Bhx
));A._GetAutoObject(A.Device.Device).Dw(6);},Bao:function(s){this.Wu(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfU=this.Kh.DZ(A._GetAutoObject(
A.Device.Device).Kh);if(this.Afh)return;switch(D5.CO){case 6:{AfU=AfU-1;if(AfU<0
)AfU=this.Kh.Dt()-1;A._GetAutoObject(A.Device.Device).Zk(this.Kh.C7(AfU));}break;
case 7:{AfU=AfU+1;if(AfU>=this.Kh.Dt())AfU=0;A._GetAutoObject(A.Device.Device).Zk(
this.Kh.C7(AfU));}break;default:D5.NH=true;}},CC:function(G){if(this.DP.AzT()){this.
DP.Ac3();if(this.DP.AzT()===false)this.Bg.ATv(true);return;}else if(this.Afh)this.
AAT(this);if(!!this.Bg)this.Bg.ATv(true);},E4:function(G){if(!!this.Bg)this.Bg.ATv(
false);},Axp:function(G){var B;if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(
C.AMo,0);this.Bg.H(Aob);this.Bg.Zm(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zq([this,this.AIR]);if(!!this.FB)this.Bg.A89([B=this.FB,B.A8E,B.A90]);this.A3O(this
);this.J(this.Bg,0);if(this.Afh===false)this.Bb(this.Bg);this.Bd3(this);this.Bod(
this);},A86:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dq(this.A6m(
));this.Ej.AR=[this,this.AIR];this.ALg(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afh=true;},BjV:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!this.
Bg)return;var Aa=(C.ABX.isPrototypeOf(B=this.Bg.AD.BiD(this.Bg.AD.Gr))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G6(Aa.Hq);else A._GetAutoObject(A.Device.
Helper).W.E5();this.Agd();},AlU:function(G){var F;if(!this.FJ)this.A5D(this);else
switch((F=this.FJ,F[1].call(F[0]))){case 0:this.A5D(this);break;case 1:this.Bhy(
this);break;case 9:this.A5E(this);break;case 4:this.A5G(this);break;case 6:this.
A5J(this);break;case 8:this.ANP(this);break;case 2:this.A5N(this);break;case 3:this.
Bhz(this);break;case 7:this.BhA(this);break;case 5:this.BhB(this);break;case 10:
this.BhD(this);break;case 11:this.A5F(this);break;case 12:this.A5M(this);break;case
13:this.A5O(this);break;case 14:this.A5H(this);break;case 18:this.A5I(this);break;
case 15:this.A5K(this);break;case 16:this.A5P(this);break;case 17:this.A5L(this);
break;default:A.ab5("%s%e",Afz,(F=this.FJ,F[1].call(F[0])));}},AIR:function(s){this.
AlU(s);},Bk5:function(G){this.Dq(C.Kn);this.Ej.AR=null;this.Afh=false;this.AcB(this
);this.Bfn();this.N.TU.Dj(255);this.N.TW.Dj(255);this.Bb(this.Bg);this.Ej.Ar(false
);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},Dv:function(E){if(this.KL===E)
return;this.KL=E;this.A3O(this);},Abn:function(){switch(A._GetAutoObject(A.Device.
Device).Kh){case 14:return C.AMZ;case 2:return C.AM1;case 1:return C.AM2;case 3:
return C.AM4;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqn;case
7:return C.ABW;case 12:return C.ABZ;case 11:return C.ABV;case 13:return C.ABY;default:
throw new Error(Aoc);}},Abo:function(){switch(A._GetAutoObject(A.Device.Device).
Kh){case 14:return C.APq;case 2:return C.ADe;case 1:return C.APs;case 3:return C.
APu;case 4:return C.ADa;case 0:case 8:case 9:case 10:case 5:case 6:return C.AqU;
case 7:return C.ADc;case 12:return C.ADd;case 11:return C.ADb;case 13:return C.ADf;
default:throw new Error(Aoc);}},Bd3:function(G){this.AS$(A._GetAutoObject(A.Device.
Device).Kh);if(!!this.Bg){this.Bg.NZ(this.Abn());this.Boi(this);}},Boi:function(
G){var B;if(!!this.FB)this.HN(this.FB);this.FB=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abo(),0))?B:null);this.FB.H(IT);if(!!this.Bg)this.Bg.A89([B=this.FB,B.A8E,B.
A90]);this.J(this.FB,0);},BjT:function(G){this.Q5(this);A._GetAutoObject(A.Device.
Device).Dw(0);},ATx:function(G){A._GetAutoObject(A.Device.Device).Zk(1);},ATw:function(
G){A._GetAutoObject(A.Device.Device).Zk(2);},ATy:function(G){A._GetAutoObject(A.
Device.Device).Zk(3);},Q5:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mq());},AZ6:function(s){this.Q5(s);},HO:function(
G){if(this.Afh){this.ALg(this);return;}this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(
A.ach.ADy));this.N.C5(A.aaL(A.ach.Options));this.N.CE=[this,this.Anh];this.N.Ck=[
this,this.A86];this.N.Co=[this,this.Bao];this.N.Hx(A.jV);this.N.FN(A.jV);this.N.
CX(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I6.Dj(100);this.N.
Ck=null;}else this.N.I6.Dj(255);},AIO:function(s){this.HO(s);},AdM:function(Aia,
Aib,AJe){A._GetAutoObject(C.B4).ABx(Aia,Aib,[this,this.A8y,this.AS$],AJe);},Af7:
function(G){this.A3O(this);if(this.Afh)A.pe([this,this.ALg],this);},Agd:function(
){A._GetAutoObject(C.A$).Cf(9);},A3O:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QF()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dv(
A.aaR(A.acf.AEc));else if(A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dv(this.KL);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACS(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dv(A.aaR(A.acf.ANZ));else this.Bg.Dv(A.aaR(
A.acf.ANY));}else this.Bg.Dv(A.aaR(A.acf.ARU));},AEC:function(G){var F;if(!!this.
FJ)(F=this.FJ,F[2].call(F[0],0));},AwG:function(E){if(A.aaZ(this.FJ,E))return;if(
!!this.FJ)A.z$([this,this.A0d],this.FJ,0);this.FJ=E;if(!!E)A.zX([this,this.A0d],
this.FJ,0);if(!!E)A.pe([this,this.A0d],this);},AEI:function(G){var F;if(!!this.FJ
)(F=this.FJ,F[2].call(F[0],1));},AwL:function(G){var F;if(!!this.FJ)(F=this.FJ,F[
2].call(F[0],2));},ATd:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],
3));},ATr:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],7));},ATs:function(
G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],5));},A5N:function(G){if(!this.Bg
)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.
Qk(1);}},I0:function(Aia,Aib,AoR){A._GetAutoObject(C.B4).ABx(Aia,Aib,[this,this.
A8z,this.ATa],AoR);},Bld:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0
],4));},A5G:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).G6(this.Bg.FK());this.DP.BAS();}},Ble:function(G){var F;if(!!this.FJ)(F=
this.FJ,F[2].call(F[0],6));},A5J:function(G){if(!this.Bg)return;if(this.M9()){A.
_GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.BAT();}},ANP:function(G
){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qk(1024);}},Bmq:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(
F[0],8));},Ako:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],9));},Bhz:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(
this.Bg.FK());this.DP.Qk(2);}},A5D:function(G){if(!this.Bg)return;if(this.M9()){
A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());if(A._GetAutoObject(A.Device.
Helper).Aj0(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A6(66,true,A.jV,0,null);else this.BAD();}},Bhy:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qk(16);}},BAD:function(){A._GetAutoObject(C.A$).Cf(94);},BhA:function(G){if(!
this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());
this.DP.Qk(4);}},BhB:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qk(8);}},A5E:function(G){var B;if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());if(this.
Afh){A.zX([this,this.AAk],[B=this.DP,B.Sz,B.Fb],0);this.AAT(this);}this.DP.Ac3();
}},AL1:function(Aia,Aib,BxG){A._GetAutoObject(C.B4).Bgv(Aia,Aib,BxG);},ALg:function(
G){this.N.Hx(A.jV);this.N.CX(A.jV);this.N.C1(A.aaL(A.ach.Aeu));this.N.CE=[this,this.
Bk5];this.N.TU.Dj(100);this.N.TW.Dj(100);var Gf=A._GetAutoObject(A.Device.Device
).An.B9();if(Gf<=0){this.N.Cv(null);this.N.C5(null);this.N.Ck=null;this.N.Co=null;
this.N.Zy=false;this.N.Zz=false;}else if(Gf===1){this.N.Cv(null);this.N.C5(A.aaL(
A.ach.Aev));this.N.Ck=null;this.N.Co=[this,this.AIR];this.N.Zy=false;this.N.Zz=false;
}else{this.N.Cv(A.aaL(A.ach.AqZ));this.N.C5(A.aaL(A.ach.Aq6));this.N.Ck=[this,this.
A29];this.N.Co=[this,this.A2_];this.N.Zy=true;this.N.Zz=true;}},A29:function(G){
if(!this.Bg)return;if(this.Bg.FK()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GS(this.Bg.FK()+1);},A2_:function(G){if(!this.Bg)return;if(this.Bg.FK()>
0)this.Bg.GS(this.Bg.FK()-1);},Bod:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GS(Bf);A.ab5("%s",Aod);}}},M9:function(){return this.
Bg.FK()>=0;},Akb:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agr:function(){this.Bgw();A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.AUe),[this,this.
A86]);A._GetAutoObject(C.B4).Gu();},AcB:function(G){if(this.Afh)this.ALg(this);else
this.HO(this);},AAT:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E_();var AyW=aFilter.DL(1,4);if(!!AyW){aFilter.Ni(AyW);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},BFW:function(s){this.
AAT(s);},AAk:function(G){var B;if(!this.DP.EV&&this.Afh){A.z$([this,this.AAk],[B=
this.DP,B.Sz,B.Fb],0);this.AAT(this);}},Bm3:function(G){var F;if(!!this.FJ)(F=this.
FJ,F[2].call(F[0],10));},BhD:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qk(256);}},A2Z:function(G){var F;this.
ATa((F=this.FJ,F[1].call(F[0])));A.pe([this,this.AIO],this);},A0d:function(s){this.
A2Z(s);},Bla:function(G){var F;if(!!this.FJ)(F=this.FJ,F[2].call(F[0],11));},A5F:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(
this.Bg.FK());this.DP.Qk(4096);}},A5M:function(G){if(!this.Bg)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.Qk(16384);}},A5O:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.BAE();}},BAE:function(){A._GetAutoObject(C.A$).Ahr(75);},A5H:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qk(32768);}},A5K:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qk(65536);}},A5P:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.
DP.Qk(131072);}},Bgw:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.B4).AaP(A.aaR(A.acf.AB2));else A._GetAutoObject(C.B4).Tt(A.
aaR(A.acf.AB2),[this,this.BjT]);A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.AkN),[this
,this.BjV]);A._GetAutoObject(C.B4).Gu();},A5L:function(G){if(!this.Bg)return;if(
this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.FK());this.DP.Qk(128);}}
,BAq:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ce],this);},A5I:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G6(this.Bg.
FK());this.DP.Qk(524288);}},BhC:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G6(this.Bg.FK());this.DP.Qk(262144);}},AS$:function(E){if(this.
ATR===E)return;this.ATR=E;A.abo([this,this.A8y,this.AS$],0);},ATa:function(E){if(
this.ATS===E)return;this.ATS=E;A.abo([this,this.A8z,this.ATa],0);},A6m:function(
){return C.Yo;},Bfn:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bm$:function(G){A._GetAutoObject(A.Device.Device).Zk(0);
},Bna:function(G){A._GetAutoObject(A.Device.Device).Zk(14);},A8y:function(){return this.
ATR;},A8z:function(){return this.ATS;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADe._Init.call(this.VX={I:this},0);C.Kh._Init.call(this.Kh={I:this},0);
this.__proto__=C.GZ;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.
OO(true);this.Ej.A9y(A.jb.CS);this.Ej.A9z(A.jb.Text);this.Dq(C.Kn);this.VX.H(IT);
this.KL=A.aaR(A.acf.AEc);this.J(this.VX,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.Kh._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.VX._ReInit();
this.Kh._ReInit();this.Dv(A.aaR(A.acf.AEc));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ABX={AP:null,A_:null,UD:null,Acu:
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
},0);this.__proto__=C.ABX;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UD.L(A.jb.Text
);this.Acu.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UD,0);this.
J(this.Acu,0);this.UD.S(A.aaL(A.fl.Af));this.Acu.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UD.
_Done();this.Acu._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UD._ReInit();this.Acu._ReInit(
);this.UD.S(A.aaL(A.fl.Af));this.Acu.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad5={Oy:null,SP:null,Mk:null,Init:function(aArg){var B;A.zX([this,this.A2F],[
B=A._GetAutoObject(A.Device.Device),B.Av3,B.AyA],0);A.zX([this,this.Adt],[B=A._GetAutoObject(
A.Device.Device),B.Av0,B.Ayz],0);A.pe([this,this.Adt],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SP.R(A._GetAutoObject(A.Device.Device).Aa0.toFixed()+W$
);this.Oy.Z(A._GetAutoObject(A.Device.Device).Amv);},Adt:function(G){this.Am();}
,MU:function(G){A._GetAutoObject(C.A$).Fy();},A2F:function(G){if(A._GetAutoObject(
A.Device.Device).Amv===false){this.Oy.Z(false);A._GetAutoObject(C.A$).Fy();}else
this.Oy.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oy={I:this},0);A.acg.Text._Init.call(this.SP={I:this},0);C.Mk._Init.call(
this.Mk={I:this},0);this.__proto__=C.Ad5;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CX(A.aaR(A.acf.Ok));this.Oy.H(Aoe);this.Oy.R(A.aaR(A.acf.Oy));this.
Oy.L(A.jb.Text);this.Oy.Z(false);this.SP.H(AsP);this.SP.R(AsQ);this.SP.L(A.jb.Text
);this.Mk.H(AsR);this.J(this.Oy,0);this.J(this.SP,0);this.J(this.Mk,0);this.N.Co=[
this,this.MU];this.Oy.S(A.aaL(A.fl.Af));this.SP.S(A.aaL(A.fl.Af));this.Mk.At([B=
A._GetAutoObject(A.Device.Device),B.Av0,B.Ayz]);this.Mk.A9P([B=A._GetAutoObject(
A.Device.Device),B.Av3,B.AyA]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oy._Done();this.SP._Done();this.Mk._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oy._ReInit();this.SP._ReInit();this.Mk._ReInit(
);this.N.CX(A.aaR(A.acf.Ok));this.Oy.R(A.aaR(A.acf.Oy));this.Oy.S(A.aaL(A.fl.Af)
);this.SP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mk={Ad0:null,Ad1:null,Kd:function(G){var F;if(!!this.Q){this.A1N();var Ac6=(
F=this.Q,F[1].call(F[0]));if(Ac6>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gh);this.
Ou.L((this.Ou.AQ&0x00FFFFFF)|(this.AlB(Ac6,0,20)<<24));this.TA.L((this.TA.AQ&0x00FFFFFF
)|(this.AlB(Ac6,21,40)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF)|(this.AlB(Ac6,41,
60)<<24));this.Ad0.L((this.Ad0.AQ&0x00FFFFFF)|(this.AlB(Ac6,61,80)<<24));this.Ad1.
L((this.Ad1.AQ&0x00FFFFFF)|(this.AlB(Ac6,81,100)<<24));}},A1N:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U3=this.Ad1;else if((F=this.Q,F[
1].call(F[0]))>60)this.U3=this.Ad0;else if((F=this.Q,F[1].call(F[0]))>40)this.U3=
this.TB;else if((F=this.Q,F[1].call(F[0]))>20)this.U3=this.TA;else this.U3=this.
Ou;}else this.U3=null;},_Init:function(aArg){C.Ow._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad0={I:this},0);A.acg.AK._Init.call(this.Ad1={I:this},0);this.__proto__=
C.Mk;this.H(Aof);this.NO.H(Aof);this.Ou.H(Aog);this.TA.H(AsS);this.TB.H(Ax1);this.
Ad0.H(Ax2);this.Ad0.L(A.jb.E1);this.Ad1.H(Ax3);this.Ad1.L(A.jb.E1);this.J(this.Ad0
,0);this.J(this.Ad1,0);this.NO.Aw(A.aaL(A.ach.AMJ));},_Done:function(){this.__proto__=
C.Ow;this.Ad0._Done();this.Ad1._Done();C.Ow._Done.call(this);},_ReInit:function(
){C.Ow._ReInit.call(this);this.Ad0._ReInit();this.Ad1._ReInit();},_Mark:function(
D){var B;C.Ow._Mark.call(this,D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUK={N6:null,Lq:null,Ak1:null,ZU:null,ZT:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device),B.
ASv,B.AZZ],0);A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.
AZ1],0);A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device),B.A8O,B.BaT],0
);A.pe([this,this.ApG],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABl(this);this.BBN(this);this.DJ(this);},Bz6:function(G){A._GetAutoObject(
A.Device.Device).Asx();},ApG:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZU.Z(false);break;case 4:{var A3r;if(!A._GetAutoObject(A.Device.Device).Afm)A3r=
0;else A3r=((A._GetAutoObject(A.Device.Device).AxG*100)/A._GetAutoObject(A.Device.
Device).Afm)|0;this.ZU.Bx(A3r);this.ZU.Z(true);}break;default:A.ab5("%s%e",AsT,A.
_GetAutoObject(A.Device.Device).SyncState);}},BBN:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lq.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gh);this.Lq.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsT,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C1(null);this.N.CE=null;this.N.CX(A.jV);this.N.Co=null;}break;
case 7:{this.N.C1(null);this.N.CE=null;this.N.CX(A.aaR(A.acf.Ok));this.N.Co=[this
,this.Bz6];}break;default:A.ab5("%s%e",AsT,A._GetAutoObject(A.Device.Device).SyncState
);}},ABl:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lq.R(A.aaR(A.acf.Bo5));break;case 1:this.Lq.R(A.aaR(A.acf.Bo2));break;
case 2:this.Lq.R(A.aaR(A.acf.BoZ));break;case 3:this.Lq.R(A.aaR(A.acf.Bo3));break;
case 4:this.Lq.R((A.aaR(A.acf.Bo1)+Ax4)+A._GetAutoObject(A.Device.Helper).Nk(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BnG),P9,A._GetAutoObject(A.Device.Device).AxG.toFixed(
)),Ax5,A._GetAutoObject(A.Device.Device).Afm.toFixed()));break;case 5:this.Lq.R(
A.aaR(A.acf.Bo4));break;case 7:this.Lq.R(A.aaR(A.acf.Bo0));break;default:A.ab5("%s%e"
,AsT,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lq={I:this
},0);A.acg.Ap._Init.call(this.Ak1={I:this},0);A.acr.ADh._Init.call(this.ZU={I:this
},0);A.acr.ADi._Init.call(this.ZT={I:this},0);this.__proto__=C.AUK;this.N.Z(true
);this.N6.H(AVF);this.N6.R(A.aaR(A.acf.N6));this.Lq.AZ(0x3F);this.Lq.H(AVG);this.
Lq.A5(0x12);this.Ak1.H(AVH);this.Ak1.L(A.jb.AV);this.ZU.H(AVI);this.ZU.Ar(false);
this.ZU.Bx(0);this.ZT.BmX(0);this.ZT.A_b(0);this.ZT.A9$(A.jb.AV);this.ZT.A9_(0);
this.ZT.AFS(AHb);this.J(this.N6,0);this.J(this.Lq,0);this.J(this.Ak1,0);this.J(this.
ZU,0);this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(A.fl.Af));this.N6.Ct(A.aaL(A.fl.
Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(A.fl.Ak));this.Lq.Ct(A.aaL(A.fl.
Bh));this.Ak1.Aw(A.aaL(A.ach.AQC));this.ZU.OnSetAppearance(this.ZT);this.ZT.A_a(
A.aaL(A.ach.NS));this.ZT.A99(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lq._Done();this.Ak1._Done();this.ZU._Done(
);this.ZT._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lq._ReInit();this.Ak1._ReInit();this.ZU._ReInit();this.
ZT._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Ct(A.aaL(A.fl.Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(
A.fl.Ak));this.Lq.Ct(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqS={_Init:function(aArg){C.AC9._Init.call(this,aArg
);this.__proto__=C.AqS;this.A9B(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cb:A.abi(3,0,{0:2,2:1}),Dt:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.Cb.Get(aIndex
);},Gj:function(aIndex){return this.GenderToString.BR(this.C7(aIndex));},DZ:function(
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
aIndex>=4)return-1;return this.Cb.Get(aIndex);},Gj:function(aIndex){return this.
BirthTypeToString.BR(this.C7(aIndex));},DZ:function(A9){var O=0;while(O<4){if(this.
Cb.Get(O)===A9)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(
O<4){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Akp(E);},A03:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A03],[B=this.Animal,B.ASa,B.Akp],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A03],[B=this.Animal,B.ASa,B.Akp],0);A.pe([this,this.A03],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cb=[]).__proto__=C.BirthType.Cb;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acl:null,Dt:
function(){return A._GetAutoObject(A.Device.Helper).AdV.MD;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdV.MD)return-1;return A._GetAutoObject(
A.Device.Helper).AdV.Get(aIndex);},Gj:function(aIndex){return this.Acl.BR(this.C7(
aIndex));},DZ:function(A9){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdV.
MD){if(A._GetAutoObject(A.Device.Helper).AdV.Get(O)===A9)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UA.
MD){if(A._GetAutoObject(A.Device.Helper).UA.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UA.Get(O);O=O+1;}return max;},At:function(E){C.AC.At.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A0W:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0W],[B=this.Animal,B.PO,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0W],[B=this.Animal,B.PO,B.EB],0);A.pe([
this,this.A0W],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acl={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acl._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acl._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUq={Init:function(aArg){var B;A.pe([this,this.AfC],this);A.zX([this,this.AfC
],[B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ata],0);},A3w:function(G){A._GetAutoObject(
A.Device.Device).A6(38,true,A.jV,0,[this,this.Ba_]);},A27:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Asj(this);},A1k:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlJ)this.D7=this.AlJ;if(this.D7<A._GetAutoObject(
A.Device.Device).AcA)this.D7=A._GetAutoObject(A.Device.Device).AcA;if(this.DW!==
BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.
A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);
}}this.DJ(this);this.Am();},A1W:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
JU)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlE)this.DW=this.AlE;if(this.DW!==BO){
if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PH.R(AHc+A._GetAutoObject(A.Device.Converter).
AkV(this.D7));this.PJ.R(AHc+A._GetAutoObject(A.Device.Converter).AkV(this.DW));this.
Su.R(A._GetAutoObject(A.acj.Temperature).AlC());},A1P:function(Ath){if(Ath===1)return this.
PH;else if(Ath===2)return this.PJ;else return null;},_Init:function(aArg){C.Acj.
_Init.call(this,aArg);this.__proto__=C.AUq;this.AlE=5000;this.AlJ=3000;this.T(A.
aaR(A.acf.Arh));this.Background.H(AfA);this.V.H(BD);this.V.R(A.aaR(A.acf.AGO));this.
V.A5(0x12);this.Init(aArg);},_ReInit:function(){C.Acj._ReInit.call(this);this.T(
A.aaR(A.acf.Arh));this.V.R(A.aaR(A.acf.AGO));},_className:"Application::SettingsItemThresholdsTemp"
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
this},0);this.__proto__=C.Rating;this.H(AVJ);this.Aa3.H(AHd);this.Aa3.L(A.jb.Text
);this.Aa3.Any(Ak7);this.Aa3.Ng(3);this.Aa3.Z(true);this.Aa7.H(AHe);this.Aa7.L(A.
jb.Text);this.Aa7.Any(Ak7);this.Aa7.Ng(3);this.Aa7.Z(true);this.Aa5.H(AHf);this.
Aa5.L(A.jb.Text);this.Aa5.Any(Ak7);this.Aa5.Ng(3);this.Aa5.Z(true);this.Background.
H(Aoh);this.Background.L(A.jb.AV);this.Aa2.H(AHd);this.Aa2.L(A.jb.E1);this.Aa2.Any(
Ak7);this.Aa2.Z(true);this.Aa6.H(AHe);this.Aa6.L(A.jb.H8);this.Aa6.Any(Ak7);this.
Aa6.Z(true);this.Aa4.H(AHf);this.Aa4.L(A.jb.Gh);this.Aa4.Any(Ak7);this.Aa4.Z(true
);this.Ajz.Filter=147;this.Arm.Filter=1;this.VI.Blv(360);this.VI.BmL(22);this.VI.
BmV(2);this.J(this.Aa3,0);this.J(this.Aa7,0);this.J(this.Aa5,0);this.J(this.Background
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
};C.Asl={Akd:null,Ar7:null,Background:null,TM:null,TH:null,AbT:null,AbS:null,AbR:
null,Acp:null,Aco:null,Acn:null,Ace:null,Acd:null,AbL:null,AbK:null,Ab6:null,Ab5:
null,Aqt:null,Init:function(aArg){},Bjv:function(G){this.AbT.R(AVK);this.AbS.R(A.
jV);this.AbR.R(A.jV);this.Acp.R(AHg);this.Aco.R(A.jV);this.Acn.R(A.jV);this.Ace.
R(A.jV);this.Acd.R(A.jV);this.AbL.R(A.jV);this.AbK.R(A.jV);this.Ab6.R(A.jV);this.
Ab5.R(A.jV);},Bnn:function(G){this.TH.Z(true);this.TM.Z(true);var IC=this.Il();if(
!IC)return;this.TM.R(IC.GetFPS().toFixed()+AVL);this.TH.R(AVM);this.TH.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akd={I:this},0);A.Core.Timer._Init.call(this.Ar7={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TM={I:this},0);A.acg.
Text._Init.call(this.TH={I:this},0);A.acg.Text._Init.call(this.AbT={I:this},0);A.
acg.Text._Init.call(this.AbS={I:this},0);A.acg.Text._Init.call(this.AbR={I:this}
,0);A.acg.Text._Init.call(this.Acp={I:this},0);A.acg.Text._Init.call(this.Aco={I:
this},0);A.acg.Text._Init.call(this.Acn={I:this},0);A.acg.Text._Init.call(this.Ace={
I:this},0);A.acg.Text._Init.call(this.Acd={I:this},0);A.acg.Text._Init.call(this.
AbL={I:this},0);A.acg.Text._Init.call(this.AbK={I:this},0);A.acg.Text._Init.call(
this.Ab6={I:this},0);A.acg.Text._Init.call(this.Ab5={I:this},0);A.acg.AK._Init.call(
this.Aqt={I:this},0);this.__proto__=C.Asl;this.H(AcK);this.Ar(false);this.Akd.PQ(
2000);this.Akd.Ww(1);this.Akd.Ar(true);this.Ar7.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcK);this.Background.L(0x78000000);this.TM.H(AVN);this.TM.A5(
0x14);this.TM.R(A.jV);this.TM.L(0xFFFFFC00);this.TM.Z(false);this.TH.H(AVO);this.
TH.A5(0x11);this.TH.R(A.jV);this.TH.Z(false);this.AbT.H(AHh);this.AbT.A5(0x11);this.
AbT.R(A.jV);this.AbS.H(AsU);this.AbS.A5(0x11);this.AbS.R(A.jV);this.AbR.H(AHi);this.
AbR.A5(0x14);this.AbR.R(A.jV);this.Acp.H(AHj);this.Acp.A5(0x11);this.Acp.R(A.jV);
this.Aco.H(Ax6);this.Aco.A5(0x11);this.Aco.R(A.jV);this.Acn.H(AHk);this.Acn.A5(0x14
);this.Acn.R(A.jV);this.Ace.H(Ax7);this.Ace.A5(0x11);this.Ace.R(A.jV);this.Acd.H(
AVP);this.Acd.A5(0x14);this.Acd.R(A.jV);this.AbL.H(AVQ);this.AbL.A5(0x11);this.AbL.
R(A.jV);this.AbK.H(AVR);this.AbK.A5(0x14);this.AbK.R(A.jV);this.Ab6.H(AVS);this.
Ab6.A5(0x11);this.Ab6.R(A.jV);this.Ab5.H(AHl);this.Ab5.A5(0x14);this.Ab5.R(A.jV);
this.Aqt.H(AVT);this.J(this.Background,0);this.J(this.TM,0);this.J(this.TH,0);this.
J(this.AbT,0);this.J(this.AbS,0);this.J(this.AbR,0);this.J(this.Acp,0);this.J(this.
Aco,0);this.J(this.Acn,0);this.J(this.Ace,0);this.J(this.Acd,0);this.J(this.AbL,
0);this.J(this.AbK,0);this.J(this.Ab6,0);this.J(this.Ab5,0);this.J(this.Aqt,0);this.
Akd.Mz=[this,this.Bjv];this.Ar7.Mz=[this,this.Bnn];this.TM.S(A.aaL(A.fl.Ak));this.
TH.S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.AbS.S(A.aaL(A.fl.Ak));this.
AbR.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.S(A.aaL(A.fl.Ak));this.
Acn.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.
AbL.S(A.aaL(A.fl.Ak));this.AbK.S(A.aaL(A.fl.Ak));this.Ab6.S(A.aaL(A.fl.Ak));this.
Ab5.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akd._Done();this.Ar7._Done();this.Background._Done();this.TM._Done();this.TH.
_Done();this.AbT._Done();this.AbS._Done();this.AbR._Done();this.Acp._Done();this.
Aco._Done();this.Acn._Done();this.Ace._Done();this.Acd._Done();this.AbL._Done();
this.AbK._Done();this.Ab6._Done();this.Ab5._Done();this.Aqt._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akd._ReInit();this.
Ar7._ReInit();this.Background._ReInit();this.TM._ReInit();this.TH._ReInit();this.
AbT._ReInit();this.AbS._ReInit();this.AbR._ReInit();this.Acp._ReInit();this.Aco.
_ReInit();this.Acn._ReInit();this.Ace._ReInit();this.Acd._ReInit();this.AbL._ReInit(
);this.AbK._ReInit();this.Ab6._ReInit();this.Ab5._ReInit();this.Aqt._ReInit();this.
TM.S(A.aaL(A.fl.Ak));this.TH.S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.AbS.
S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.
S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));this.Acd.
S(A.aaL(A.fl.Ak));this.AbL.S(A.aaL(A.fl.Ak));this.AbK.S(A.aaL(A.fl.Ak));this.Ab6.
S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ar7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGw={FI:null,Dk:null,Au:null,Ju:null,HK:null,Ub:null,Bc:null,Sj:null,Gx:null
,Gw:null,FX:0,A8:0,Bi5:false,Init:function(aArg){},Ai:function(Ae){C.Dr.Ai.call(
this,Ae);this.Hw.Z(false);this.H4.Z(false);if(!!this.Dk){this.Sj.R(this.Au.Format(
O4));this.Ub.R(this.Au.Format(Ax8));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.
Sj.M);this.HK.L(A.jb.Bm);this.Sj.L(this.Background.AQ);this.Ub.L(A.jb.Bm);}else if(
this.A8===2){this.HK.Z(true);this.HK.H(this.Ub.M);this.HK.L(A.jb.Bm);this.Sj.L(A.
jb.Bm);this.Ub.L(this.Background.AQ);}else{this.HK.Z(false);this.Sj.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Ub.L(this.V.AQ);}},Qp:function(G){if(this.FF===1)A.pe([
this,this.U8],this);else if(this.FF===4)A.pe([this,this.AiB],this);else if(this.
FF===5)A.pe([this,this.Ain],this);C.Dr.Qp.call(this,G);},J$:function(G){switch(this.
A8){case 0:C.Dr.J$.call(this,G);break;case 2:break;default:this.Ads(this);}},J6:
function(G){switch(this.A8){case 0:C.Dr.J6.call(this,G);break;default:this.Aim(this
);}},Adu:function(G){var F;if(!!this.Dk)this.Uh((F=this.Dk,F[1].call(F[0])));},Ab2:
function(E){if(A.aaZ(this.Dk,E))return;if(!!this.Dk)A.z$([this,this.Adu],this.Dk
,0);this.Dk=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);
},Uh:function(E){if(this.FX===E)return;this.FX=E;this.Au.Initialize(this.FX);this.
Am();},Ads:function(G){this.FF=1;this.Am();if(this.Bo.Bw){A.pe([this,this.U8],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},U8:function(G){this.Ew(this.A8+1);},AlW:
function(G){this.FF=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiB],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},AlV:function(G){this.FF=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ain],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiB:function(G){
var B;var F;var BO=this.FX;if(this.A8===1)this.Au.Ant(this.Au.AjN+1);if(this.A8===
2)this.Au.Anw(this.Au.AvT+1);this.Au.Anz(0);this.Uh(((B=(this.Au.JP()|0))<0)?B+0x100000000:
B);if(this.FX!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],this.FX));A.abo(this.
Dk,0);}},Ain:function(G){var B;var F;var BO=this.FX;if(this.A8===1)this.Au.Ant(this.
Au.AjN-1);if(this.A8===2)this.Au.Anw(this.Au.AvT-1);this.Au.Anz(0);this.Uh(((B=(
this.Au.JP()|0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dk)(F=this.Dk,F[
2].call(F[0],this.FX));A.abo(this.Dk,0);}},DJ:function(G){var F;if(!this.N)return;
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
var F;if(!this.A8)this.FI.Aju((F=this.N,F[1].call(F[0])));this.A8=EN;this.Bi5=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.
Bw=!!this.A8;this.Am();},Aim:function(G){if(this.A8>1)this.Ew(this.A8-1);},_Init:
function(aArg){C.Dr._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BK._Init.call(this.Ju={I:this},0);A.acg.AK._Init.call(this.HK={I:this}
,0);A.acg.Text._Init.call(this.Ub={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sj={I:this},0);A.Core.BK._Init.call(this.Gx={I:this
},0);A.Core.BK._Init.call(this.Gw={I:this},0);this.__proto__=C.AGw;this.H(UT);this.
V.R(AVU);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.Ju.Filter=1;this.
HK.H(AVV);this.HK.L(0x55FFFFFF);this.Ub.H(AVW);this.Ub.I9(true);this.Bc.H(AVX);this.
Bc.A5(0x14);this.Bc.R(AVY);this.Sj.H(AVZ);this.Sj.I9(true);this.Sj.A5(0x14);this.
Gx.Filter=4;this.Gx.Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);
this.J(this.Ub,0);this.J(this.Bc,0);this.J(this.Sj,0);this.Ju.BL=[this,this.Ads];
this.Ub.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sj.S(A.aaL(A.fl.EK));this.
Gx.BL=[this,this.AlW];this.Gx.D1=[this,this.AiB];this.Gw.BL=[this,this.AlV];this.
Gw.D1=[this,this.Ain];this.FI=A._NewObject(C.Aeo,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dr;this.Au._Done();this.Ju._Done();this.HK._Done();this.Ub._Done(
);this.Bc._Done();this.Sj._Done();this.Gx._Done();this.Gw._Done();C.Dr._Done.call(
this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Au._ReInit();this.Ju._ReInit(
);this.HK._ReInit();this.Ub._ReInit();this.Bc._ReInit();this.Sj._ReInit();this.Gx.
_ReInit();this.Gw._ReInit();this.Ub.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Sj.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((
B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dk)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmK:null,AqI:null,El:null,Text:null,String:A.jV,Bc7:A.jV,Kg:0x12
,AK1:0,AQ:0xFFFFFFFF,N3:0,AT_:0,A_G:0,Bc8:true,G2:function(CN){var LI=(A.Core.ARb.
isPrototypeOf(CN)?CN:null);if(!!LI)this.BBY(this);return A.Core.P.G2.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajf],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bc8){this.Bc7=E;this.Bc8=false;
}this.AK1=E.length;A.pe([this,this.Ajf],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajf],this);},A2:function(E){if(this.AmK===E)return;this.
AmK=E;A.pe([this,this.Ajf],this);},Ct:function(E){if(this.AqI===E)return;this.AqI=
E;A.pe([this,this.Ajf],this);},A5:function(E){if(E===this.Kg)return;this.Kg=E;this.
Text.A5(E);},Ajf:function(G){var B;var AK7=0;if(!this.AK1){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KQ(false);if(!!this.B6){AK7=
this.B6.Ym(this.String,0,this.AK1);if(AK7<(((B=this.M)[2]-B[0])-(2*this.Text.Ja)
)){this.Text.S(this.B6);this.Text.AwV(this.N3);return;}}this.Text.KQ(true);if(!!
this.AmK){AK7=this.AmK.Ym(this.String,0,this.AK1);this.Text.S(this.AmK);this.Text.
AwV(this.AT_);if((AK7<(((B=this.M)[2]-B[0])-(2*this.Text.Ja)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqI){this.Text.S(this.AqI);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.AwV((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BBY:function(G){this.R(this.Bc7);},Q2:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q2(E);},AR_:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Afc:function(AoF){return A.abf(this.M.slice(
0,2),this.Text.Afc(AoF));},AwV:function(E){if(this.N3===E)return;this.N3=E;A.pe([
this,this.Ajf],this);},BmN:function(E){if(this.AT_===E)return;this.AT_=E;A.pe([this
,this.Ajf],this);},BmO:function(E){if(this.A_G===E)return;this.A_G=E;A.pe([this,
this.Ajf],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHm);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHm);this.Text.R(Rj);this.J(this.Text,0);},_Done:
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
L(E);this.AeC.L(E);},DX:function(G){C.Yn.DX.call(this,G);this.XH(8,1,this.M6);this.
XH(12,1,this.Mr);this.XH(11,1,this.AeA);this.XH(7,1,this.M8);this.XH(14,1,this.NT
);this.XH(1,4,this.IK);this.XH(1,1,this.AeG);this.XH(4,1,this.I5);this.XH(22,1,this.
AeF);this.XH(26,1,this.AeE);this.XH(30,1,this.AeB);this.XH(19,1,this.AeD);this.XH(
31,1,this.AeC);this.Text.Z(!this.Y.TK(null,0x1));},XH:function(AJf,Eb,AfP){var AA4=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Ade=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJf,Eb);if(!!Ade){AA4=true;switch(AJf){case 14:{var
Azj=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Ade)?Ade:null);if(!!Azj)AfP.
Aw(A._GetAutoObject(A.Device.Converter).A4F(Azj.A4));}break;case 7:{var Azj=(A.Device.
GenderFilterCriterion.isPrototypeOf(Ade)?Ade:null);if(!!Azj)AfP.Aw(A._GetAutoObject(
A.Device.Converter).AmM(Azj.A4));}break;case 1:if(Eb===4)AfP.Aw(A.aaL(A.ach.ADy)
);else if(Ade.Operator===4)AA4=false;break;case 22:switch(Ade.Operator){case 0:case
3:AfP.Aw(A.aaL(A.ach.AQp));break;default:AfP.Aw(A.aaL(A.ach.AjR));}break;case 26:
switch(Ade.Operator){case 0:case 3:AfP.Aw(A.aaL(A.ach.AQn));break;default:AfP.Aw(
A.aaL(A.ach.Avp));}break;default:;}}else if((AJf===1)&&(Eb===4)){AA4=true;AfP.Aw(
A.aaL(A.ach.Aew));}}else if((AJf===1)&&(Eb===4)){AA4=true;AfP.Aw(A.aaL(A.ach.Aew
));}AfP.Z(AA4);},_Init:function(aArg){C.Yn._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0);A.acg.Ap._Init.call(
this.AeG={I:this},0);A.acg.Ap._Init.call(this.I5={I:this},0);A.acg.Ap._Init.call(
this.M6={I:this},0);A.acg.Ap._Init.call(this.AeA={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.AeB={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeC={I:this},0);A.acg.Ap._Init.call(this.M8={I:this},0);A.acg.Ap._Init.call(
this.NT={I:this},0);A.acg.Ap._Init.call(this.Mr={I:this},0);this.__proto__=C.AjL;
this.Y.AZ(0x3F);this.Y.H(AHn);this.Y.JQ(3);this.IK.H(Aoi);this.AeG.H(Ax9);this.AeG.
Aj(true);this.I5.H(AV0);this.I5.Aj(true);this.M6.H(AV1);this.M6.Aj(true);this.AeA.
H(AV2);this.AeA.Aj(true);this.AeF.H(AHo);this.AeF.Aj(true);this.AeE.H(AHo);this.
AeE.Aj(true);this.AeB.H(AV3);this.AeB.Aj(true);this.AeD.H(AHp);this.AeD.Aj(true);
this.AeC.H(AHp);this.AeC.Aj(true);this.M8.H(AHq);this.M8.Aj(true);this.NT.H(AHr);
this.NT.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mr.H(AHq);this.Mr.Aj(true);
this.JW(this.Gv,-3);this.JW(this.D2,-3);this.JW(this.A_,-3);this.JW(this.AP,-2);
this.J(this.Y,-2);this.J(this.IK,-2);this.J(this.AeG,-2);this.J(this.I5,-2);this.
J(this.M6,-2);this.J(this.AeA,-2);this.J(this.AeF,-2);this.J(this.AeE,-2);this.J(
this.AeB,-2);this.J(this.AeD,-2);this.J(this.AeC,-2);this.J(this.M8,-2);this.J(this.
NT,-2);this.J(this.Mr,0);this.IK.Aw(A.aaL(A.ach.Aew));this.AeG.Aw(A.aaL(A.ach.AQe
));this.I5.Aw(A.aaL(A.ach.APF));this.M6.Aw(A.aaL(A.ach.ADs));this.AeA.Aw(A.aaL(A.
ach.Abx));this.AeF.Aw(A.aaL(A.ach.AjR));this.AeE.Aw(A.aaL(A.ach.Avp));this.AeB.Aw(
A.aaL(A.ach.AQc));this.AeD.Aw(A.aaL(A.ach.AQd));this.AeC.Aw(A.aaL(A.ach.AQb));this.
M8.Aw(A.aaL(A.ach.ADu));this.NT.Aw(A.aaL(A.ach.Avu));this.Mr.Aw(A.aaL(A.ach.ADB)
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
A.Device.Device).Bt.HI().toFixed(),0,null);this.H7.Gp();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Q$.CC.call(this,G);},AnZ:function(){C.Q$.
AnZ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).ByY(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.C8.L(A._GetAutoObject(
A.acj.Temperature).By1(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ls));this.JL.L(A._GetAutoObject(A.acj.Temperature).ByZ(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.HF.L(A.
_GetAutoObject(A.acj.Temperature).By0(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Ls));this.ME.L(this.JL.AQ);this.TemperatureUnit.
L(this.JL.AQ);}break;default:;}},AcB:function(){C.Q$.AcB.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cv(A.aaL(A.ach.AQx));this.N.C5(A.aaL(
A.ach.AmV));}break;case 4:{this.N.Cv(null);this.N.C5(A.aaL(A.ach.AvC));}break;default:;
}},WI:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ls>3240)&&(A._GetAutoObject(A.Device.
Device).Ls<5460)){A._GetAutoObject(A.Device.Device).AhJ();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H7.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Ls);var B0=A._GetAutoObject(A.Device.Converter).Asz(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls);this.H7.OnSetRatingTemperature(
B0);this.H7.Cg(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();
}break;case 4:this.AKu(this);break;default:;}},AkQ:function(G){C.Q$.AkQ.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKu(this);break;default:;}},AxM:function(
){C.Q$.AxM.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JL.R(A._GetAutoObject(A.acj.Temperature).By6(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));break;default:;}},AxN:function(
){C.Q$.AxN.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).Wx(A._GetAutoObject(A.acj.Temperature).By2(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ls));this.Jd.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wx(16711680
);this.Jd.Ar(true);}break;default:this.Jd.Ar(false);}},AUk:function(){this.C8.Aw(
A.aaL(A.ach.AvB));this.C8.Cu(A._GetAutoObject(A.acj.Temperature).By7(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ls));this.NR.Cu(
0);},_Init:function(aArg){C.Q$._Init.call(this,aArg);this.__proto__=C.Amm;this.Dq(
C.II);this.H7=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Q$._Mark.
call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahv={N2:null,DK:null,Ij:null,Bc:null,Aun:null,String:A.jV,AxA:A.jV,Mv:7,Aj6:
2,KR:0,AUx:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aj6,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ij.S(this.DK.B6);this.Ij.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WC],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahp:function(
E){if(this.AxA===E)return;this.AxA=E;this.Ij.R(E);},Ab1:function(E){this.Mv=E;if(
E<10)this.ASX(2);else if(E<40)this.ASX(1);else this.ASX(0);A.pe([this,this.WC],this
);},WC:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mv>1){var
Ac$=this.AOE();var A1I=this.AOC();var Apk=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AzY;var AKU;var AtY;var Al3=null;if(!!this.N2&&(this.N2.AY>0))Al3=this.N2.KZ;
while((Ac$>=A1I)&&(Ac$>0)){var Atz=A._NewObject(C.Ajo,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj6)*(((Ac$-A1I)/86400)|0))/this.Mv)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj6)*((((Ac$-A1I)/86400)|0)+1))/this.Mv)|0;while(!!Al3&&(Al3.Timestamp>=
Ac$)){if(Al3.Timestamp<(Ac$+86400))Atz.Or(Al3.A4,Al3.Timestamp);Al3=Al3.Ah;}var At_=
0;if(Atz.AY>0)At_=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/Atz.AY
)|0;else if(this.Mv<10){At_=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
AtY=A._NewObject(A.acg.Text,0);AtY.H([x1,Apk,x2,Apk+At_]);AtY.S(A.aaL(A.fl.Bh));
AtY.L(A.jb.Text);AtY.R(A.aaR(A.acf.Ae_));this.J(AtY,0);}var AJI=Atz.KZ;var O=0;while(
!!AJI){if(O>=Atz.AY)throw new Error(AV4);AzY=A._NewObject(A.acg.AK,0);AzY.L(A._GetAutoObject(
A.acj.Assessment).Qm(AJI.A4));if(O===(Atz.AY-1))AzY.H([x1,Apk+(O*At_),x2,this.Bc.
M[1]]);else AzY.H([x1,Apk+(O*At_),x2,Apk+((O+1)*At_)]);this.J(AzY,0);AJI=AJI.Ah;
O=O+1;}if(this.AUx){var BxN=A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(
A.Device.Helper).Du());var BxM=A._GetAutoObject(A.Device.Helper).Aqi(Ac$);if(BxN===
BxM){var ALm=A._NewObject(A.acg.Aek,0);ALm.L(A.jb.Text);var Bdt=(x1+this.Aj6)+(((
x2-x1)/2)|0);ALm.H([Bdt-4,this.Bc.M[1]-4,Bdt+4,this.Bc.M[1]]);ALm.Zr(this.Aun);this.
J(ALm,0);}}Ac$=Ac$-86400;if(this.Aj6>0){AKU=A._NewObject(A.acg.AK,0);AKU.H([x1,Apk
,x1+this.Aj6,Apk+((((B=this.M)[3]-B[1])/2)|0)]);AKU.L(A.jb.Bc);this.J(AKU,0);}}}
},Ab3:function(E){this.N2=E;A.pe([this,this.WC],this);},ASX:function(E){if(this.
Aj6===E)return;this.Aj6=E;A.pe([this,this.WC],this);},De:function(E){if(this.KR===
E)return;this.KR=E;this.DK.L(E);this.Ij.L(E);},AOC:function(){var B;return this.
AOE()-(((((B=this.Mv)<0)?B+0x100000000:B)-1)*86400);},AOE:function(){return A._GetAutoObject(
A.Device.Converter).AhN();},BmR:function(E){if(this.AUx===E)return;this.AUx=E;A.
pe([this,this.WC],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ij={I:this},0
);A.acg.AK._Init.call(this.Bc={I:this},0);C.AxK._Init.call(this.Aun={I:this},0);
this.__proto__=C.Ahv;this.H(BD);this.Ar(false);this.DK.H(AHs);this.DK.Hl(5);this.
DK.A5(0x11);this.DK.L(A.jb.Text);this.Ij.H(AHs);this.Ij.Hl(5);this.Ij.A5(0x14);this.
Ij.L(A.jb.Text);this.Bc.H(AV5);this.Bc.L(A.jb.Bc);this.KR=A.jb.Text;this.Aun.H(AHt
);this.J(this.DK,0);this.J(this.Ij,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ij.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ij._Done();this.Bc._Done();this.Aun._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ij._ReInit();this.Bc._ReInit();this.Aun._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ij.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aun)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4L={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4L;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajo={KZ:null,MS:null,AY:0,Or:
function(A9,Qd){var Hf;Hf=A._NewObject(C.A4L,0);Hf.A4=A9;Hf.Timestamp=Qd;if(!this.
KZ){this.KZ=Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajo;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MH],this);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QE(X,Fh,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HH(X,true,null,null);this.DJ(this);},AlT:function(G){A._GetAutoObject(C.A$
).Fy();},ApF:function(G){var B;if(!!(C.Cn.isPrototypeOf(B=this.AV)?B:null).Agq)A.
pe((C.Cn.isPrototypeOf(B=this.AV)?B:null).Agq,this);},Fj:function(G){var B;this.
Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},DJ:function(G){var B;var GX=(C.Cn.isPrototypeOf(B=this.AV)?B:null);if(
!!GX){this.N.Hx(A.jV);this.N.CX(GX.AxD);this.N.Jc.Dj(255);this.N.HQ.Dj(GX.Aw$);this.
N.AE0(GX.Avc);this.N.Anr(GX.AmL);this.N.C1(GX.AP8);this.N.C5(GX.Aq0);GX.A2N(this
);}},MH:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rk);this.Background.L(A.jb.CS);this.N.H(Xa);this.
N.Ar(false);this.N.Z(true);this.Y.H(Fe);this.Y.JQ(1);this.Ay.H(Is);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATE={Nz:null,ASE:null,AdZ:null,VC:null,GT:null,PopupTimeout:null,Ab7:null,AgB:
null,PopupIdToString:null,Atu:null,Text:A.jV,AkC:A.jV,AJ2:A.jV,AkX:0,AK9:-1,Azi:-
1,AKB:0,ATG:0,A1S:false,CP:function(){this.A96(this.PopupIdToString.BR(this.ATG)
);},Init:function(aArg){this.Bog(this);},Bgg:function(G){var B;if(this.AkX>0){this.
A_i((this.AkX/1000)|0);this.PopupTimeout.Ww(0);this.PopupTimeout.PQ(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.Axz(this);},Bgc:function(G){var Qw=this.
Text;var AfS=this.AkC;var AKz=A.abi(16,A.jV,null);var index=0;var Azd=0;while(AfS
!==A.jV){Azd=AfS.indexOf(A.Device.PopupParamSeparator,0);if(Azd!==-1){AKz.Set(index
,A.ab1(AfS,Azd,(AfS.length-Azd)+1));AfS=A.ab1(AfS,0,Azd+1);index=index+1;if(index>=
16){A.ab5("%s",(AV6+AfS)+AV7);AfS=A.jV;}}else{AKz.Set(index,AfS);AfS=A.jV;}}index=
0;while(index<Qw.length){if((Qw.charCodeAt(index)||0)===0x7B){var Bc6=Qw.indexOf(
String.fromCharCode(0x7D),index);if(Bc6===-1){A.ab5("%s",(((AV8+Qw)+AV9)+index.toFixed(
))+Afy);index=Qw.length;}else{var BeZ=(Bc6-index)-1;var A3n=A.abW(Qw,index+1,BeZ
);var AKy=A.wz(A3n,-1,10);Qw=A.ab1(Qw,index,BeZ+2);if(A3n===AV_)this.Bm8(index);
else if(((AKy>0)&&(AKy<=16))&&(this.AkC!==A.jV)){Qw=A.abU(Qw,AKz.Get(AKy-1),index
);if(this.A1S===true)this.Bm7(A.wz(AKz.Get(AKy-1),0,10));}else A.ab5("%s",(AV$+A3n
)+AWa);}}index=index+1;}this.Bm6(Qw);},CC:function(G){A.pe([this,this.Bgg],this);
},Ai:function(Ae){var B;this.AdZ.H(A.aaT(this.GT.Db(),AhU));this.VC.H(A.aaT(this.
GT.Db(),AhU));if(!!this.Nz){this.Nz.H(A.abM(this.Nz.M,this.GT.M[0]));this.Nz.H(A.
abO(this.Nz.M,this.GT.M[3]+10));this.Nz.H(A.abL(this.Nz.M,(B=this.GT.M)[2]-B[0])
);this.Nz.H(A.abI(this.Nz.M,8));this.AdZ.H(A.abh(A.aaT(this.GT.Db(),AhU),AHu));this.
VC.H(A.abh(A.aaT(this.GT.Db(),AhU),AHu));}else{this.AdZ.H(A.aaT(this.GT.Db(),AhU
));this.VC.H(A.aaT(this.GT.Db(),AhU));}},DE:function(G){var JA=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JA.CO===4)&&((this.VC.M[1]+this.M[1])<this.M[1])){this.GT.H(A.abO(
this.GT.M,this.GT.M[1]+28));this.Am();}else if((JA.CO===5)&&((this.VC.M[3]+this.
M[1])>this.N.M[1])){this.GT.H(A.abO(this.GT.M,this.GT.M[1]-28));this.Am();}if((JA.
CO===6)&&!!this.D_().CE)this.D_().AE9(1);else if((JA.CO===7)&&!!this.D_().Co)this.
D_().AE9(3);},IY:function(G){switch(this.D_().Ahf){case 1:this.AlT(this);break;case
3:this.ApF(this);break;case 2:this.AAu(this);break;case 0:break;default:A.ab5("%s%e"
,AWb,this.D_().Ahf);}},AlT:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApF:function(G){var B;(B=this.D_().Co)?B[1].call(B[0],this):null;},AAu:
function(G){var B;(B=this.D_().Ck)?B[1].call(B[0],this):null;},LN:function(G){this.
N.I6.L((this.N.I6.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
Axz(this);},A96:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgc],this);},Bz$:function(G){var B;this.A_i(this.Azi-1);if(this.Azi<=0){this.PopupTimeout.
Axz(this);(B=this.ASE)?B[1].call(B[0],this):null;}},A98:function(E){if(this.AkX===
E)return;this.AkX=E;A.pe([this,this.Bgg],this);},A9T:function(E){if(this.AkC===E
)return;this.AkC=E;A.pe([this,this.Bgc],this);},Bm6:function(E){if(this.AJ2===E)
return;this.AJ2=E;this.ABl(this);this.BxU(this);},ABl:function(G){if((this.Azi!==-
1)&&(this.AK9!==-1)){var ByI=this.Atu.Format(AWc);this.GT.R(A.abU(this.AJ2,ByI,this.
AK9));}else this.GT.R(this.AJ2);this.GT.H(AHv);},Bm8:function(E){if(this.AK9===E
)return;this.AK9=E;this.ABl(this);},A_i:function(E){if(this.Azi===E)return;this.
Azi=E;this.Atu.AFC(E);A.pe([this,this.ABl],this);},BxU:function(G){this.GT.Db();
if(this.GT.M[1]<=this.M[1])this.GT.H(A.abO(this.GT.M,28));this.Am();},A_k:function(
E){if(this.A1S===E)return;this.A1S=E;if(E===true)A.pe([this,this.BAJ],this);},BAJ:
function(G){if(!this.Nz){this.Nz=A._NewObject(A.acr.ADh,0);this.Nz.F$(0);this.Nz.
EU(100);this.Nz.OnSetAppearance(this.Ab7);this.J(this.Nz,0);this.Ahy(this.Nz,this.
GT);}this.Nz.Bx(this.AKB);},Bm7:function(E){if(this.AKB===E)return;this.AKB=E;if(
!!this.Nz)this.Nz.Bx(this.AKB);},Bog:function(G){var B;this.N.Dj(0);this.AgB.AnO(
this);},BmH:function(E){if(this.ATG===E)return;this.ATG=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.AdZ={I:this},0);A.acg.BT._Init.
call(this.VC={I:this},0);A.acg.Text._Init.call(this.GT={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADi._Init.call(this.Ab7={I:this},
0);A.acl.Gk._Init.call(this.AgB={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.Atu={I:this},0);this.
__proto__=C.ATE;var B;this.H(Cc);this.Background.H(Fe);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.AdZ.H(AHw);this.
AdZ.L(A.jb.CJ);this.VC.H(AHw);this.VC.Ng(2);this.VC.L(A.jb.Text);this.GT.H(AHv);
this.GT.Hl(10);this.GT.I9(true);this.GT.Bm5(0);this.GT.KQ(true);this.GT.L(A.jb.Text
);this.PopupTimeout.PQ(0);this.Ab7.A_b(0);this.Ab7.A9$(A.jb.AV);this.Ab7.A9_(0);
this.Ab7.AFS(AHb);this.AgB.HM(1);this.AgB.B1=255;this.AgB.Cw=0;this.JW(this.Ej,-
1);this.J(this.AdZ,0);this.J(this.VC,0);this.J(this.GT,0);this.GT.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mz=[this,this.Bz$];this.Ab7.A_a(A.aaL(A.ach.NS));this.Ab7.A99(
A.aaL(A.ach.NS));this.AgB.Q=[B=this.N,B.Awc,B.AZT];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.AdZ._Done();this.VC._Done();this.GT._Done();this.PopupTimeout.
_Done();this.Ab7._Done();this.AgB._Done();this.PopupIdToString._Done();this.Atu.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
AdZ._ReInit();this.VC._ReInit();this.GT._ReInit();this.PopupTimeout._ReInit();this.
Ab7._ReInit();this.AgB._ReInit();this.PopupIdToString._ReInit();this.Atu._ReInit(
);this.GT.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASE)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Atu)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mn={Ai:function(Ae
){C.Cn.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=A.jb.Text;
GW=A.jb.Bm;}if(!this.LF){this.Background.L(FQ);this.V.L(A.jb.AmW);}else if(this.
Qq){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}},_Init:function(
aArg){C.Cn._Init.call(this,aArg);this.__proto__=C.Mn;},_className:"Application::DarkThemeMenuItem"
};C.Anb={Ady:0,_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=C.
Anb;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaB:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Co=[this,this.A2O];this.BP.Ck=null;this.BP.CE=[this,this.AaB];this.
BP.CX(A.aaR(A.acf.Ok));this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Aeu));}return this.
BP;},A2O:function(G){var B;if(!!(C.Cn.isPrototypeOf(B=this.AV)?B:null))(C.Cn.isPrototypeOf(
B=this.AV)?B:null).IY(this);},CC:function(G){},AIC:function(s){this.CC(s);},E4:function(
G){},Ayy:function(s){this.E4(s);},_Init:function(aArg){C.Abd._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APB={V6:
null,YK:null,YE:null,Init:function(aArg){this.Bb(this.V6);},Adp:function(G){var Aa=(
C.Cn.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YK)A._GetAutoObject(A.Device.
Device).A6(6,true,A.jV,0,[this,this.BAX]);else if(Aa===this.V6)A._GetAutoObject(
A.Device.Device).A6(9,true,A.jV,0,[this,this.BBi]);else if(Aa===this.YE)A._GetAutoObject(
C.A$).Cf(4);else throw new Error(Ax_);A._GetAutoObject(A.Device.Device).Dw(0);},
BAX:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGe();},BBi:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).Axq();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mn._Init.call(this.V6={I:this},0);C.Mn._Init.call(this.YK={I:this
},0);C.Mn._Init.call(this.YE={I:this},0);this.__proto__=C.APB;this.H(AcK);this.V6.
H(BD);this.V6.Ar(true);this.V6.T(A.aaR(A.acf.A_Y));this.V6.Bi(true);this.YK.H(IT
);this.YK.Ar(true);this.YK.T(A.aaR(A.acf.A_F));this.YK.Bi(true);this.YE.H(P_);this.
YE.Ar(true);this.YE.T(A.aaR(A.acf.SP));this.YE.Bi(true);this.J(this.V6,0);this.J(
this.YK,0);this.J(this.YE,0);this.V6.AR=[this,this.Adp];this.YK.AR=[this,this.Adp
];this.YE.AR=[this,this.Adp];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V6._Done();this.YK._Done();this.YE._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V6._ReInit(
);this.YK._ReInit();this.YE._ReInit();this.V6.T(A.aaR(A.acf.A_Y));this.YK.T(A.aaR(
A.acf.A_F));this.YE.T(A.aaR(A.acf.SP));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GJ={Aay:null,OverlayMenu:null,WE:null,A3H:null
,K$:null,A3m:null,AkD:null,N0:null,Az4:100,Init:function(aArg){var B;A.zX([this,
this.Beq],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyH],0);A.zX([this,this.Bek
],[B=A._GetAutoObject(A.Device.Device),B.ASk,B.AZR],0);A.zX([this,this.A2F],[B=A.
_GetAutoObject(A.Device.Device),B.Av3,B.AyA],0);A.zX([this,this.BzH],[B=A._GetAutoObject(
A.Device.Device),B.Av0,B.Ayz],0);A.zX([this,this.BzI],[B=A._GetAutoObject(A.Device.
Device),B.A77,B.BaA],0);A.zX([this,this.ApG],[B=A._GetAutoObject(A.Device.Device
),B.ASv,B.AZZ],0);A.zX([this,this.BeH],[B=A._GetAutoObject(A.Device.Device),B.Wt
,B.Xb],0);A.pe([this,this.Beq],this);A.pe([this,this.Bek],this);A.pe([this,this.
ApG],this);A.pe([this,this.BeH],this);this.A3H.At([B=this.WE,B.AEk,B.Zj]);this.J(
this.WE,0);this.Bb(this.WE);this.Bxx(this);},Ai:function(Ae){},Bek:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AD9){if(!this.Aay){this.Aay=A._NewObject(
C.Asl,0);this.Aay.H(A.abJ(this.Aay.M,this.WE.M.slice(0,2)));this.Aay.H(A.abO(this.
Aay.M,this.WE.M[3]-((B=this.Aay.M)[3]-B[1])));this.J(this.Aay,1);}}else{if(!!this.
Aay)this.HN(this.Aay);this.Aay=null;}},Beq:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APB,0));break;case 8:this.Dw(A._NewObject(C.ALU,0));break;case 2:this.Dw(A._NewObject(
C.ALR,0));break;case 3:this.Dw(A._NewObject(C.ALX,0));break;case 4:this.Dw(A._NewObject(
C.ATX,0));break;case 5:this.Dw(A._NewObject(C.AVr,0));break;case 6:this.Dw(A._NewObject(
C.ATz,0));break;case 7:this.Dw(A._NewObject(C.Amo,0));break;case 11:this.Dw(A._NewObject(
C.AMq,0));break;case 12:this.Dw(A._NewObject(C.AMp,0));break;case 9:this.Dw(A._NewObject(
C.ARv,0));break;case 10:this.Dw(A._NewObject(C.AMl,0));break;case 14:this.Dw(A._NewObject(
C.ARr,0));break;case 15:this.Dw(A._NewObject(C.ARs,0));break;case 13:this.Dw(A._NewObject(
C.ARt,0));break;case 16:this.Dw(A._NewObject(C.AMM,0));break;default:throw new Error(
AWd+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.Wz).Arx(
null);this.N0.Aqy(this.OverlayMenu,A._GetAutoObject(C.Axt),null,null,[B=this.OverlayMenu
,B.Ayy],null,true);this.Bb(this.WE);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N0.AkF(this.OverlayMenu,A._GetAutoObject(C.Axs),null,null,null,null,null,[B=this.
OverlayMenu,B.AIC],null,false);this.Bb(this.N0);A._GetAutoObject(C.Wz).Arx(this.
OverlayMenu.Ll());}else if(!!this.K$){this.Bb(this.N0);A._GetAutoObject(C.Wz).Arx(
this.K$.Akk().Ll());}},Ahk:function(E){var B;if(this.K$===E)return;if(!!this.K$){
A._GetAutoObject(C.Wz).Arx(null);this.N0.Aqy(this.K$.Akk(),A._GetAutoObject(C.Afe
),null,null,[B=this.K$.Akk(),B.Ayy],null,false);this.Bb(this.WE);}this.K$=E;if(!
!this.K$){this.N0.AkF(this.K$.Akk(),A._GetAutoObject(C.Afe),null,null,null,null,
null,[this,this.Bk3],null,false);this.Bb(this.N0);A._GetAutoObject(C.Wz).Arx(this.
K$.Akk().Ll());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
Wz).Arx(this.OverlayMenu.Ll());}},Bxx:function(G){var B;var F;this.J(this.A3m,0);(
F=A._GetAutoObject(C.Wz),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wz).M)[3]-B[1]))));this.ZA(this.N0);},A2F:function(G){if(A._GetAutoObject(A.Device.
Device).Amv)switch(A._GetAutoObject(A.Device.Device).KG){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Ahr(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa0<98)A._GetAutoObject(C.A$).Cf(4);}else{this.Az4=100;this.Bcb();}},BzH:
function(G){this.Bcb();},Bcb:function(){if(!A._GetAutoObject(A.Device.Device).Amv
){if(A._GetAutoObject(A.Device.Device).Aa0<=2){if(this.Az4>2)switch(A._GetAutoObject(
A.Device.Device).KG){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Ahr(38);
break;default:A._GetAutoObject(C.A$).Cf(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa0<=10){if(this.Az4>10)switch(A._GetAutoObject(A.Device.Device).KG){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Ahr(39);break;default:A._GetAutoObject(
C.A$).Cf(39);}}else if(A._GetAutoObject(A.Device.Device).Aa0<=20){if(this.Az4>20
)switch(A._GetAutoObject(A.Device.Device).KG){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Ahr(39);break;default:A._GetAutoObject(C.A$).Cf(39);}}else switch(A._GetAutoObject(
A.Device.Device).KG){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fy();break;default:;
}this.Az4=A._GetAutoObject(A.Device.Device).Aa0;}},BzI:function(G){switch(A._GetAutoObject(
A.Device.Device).Aql){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A6(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anp(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A6(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anp(0
);}break;default:A.ab5("%s",AWe+A._GetAutoObject(A.Device.Device).Aql.toFixed());
}},ApG:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A$).Cf(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KG===5)A._GetAutoObject(C.A$).Ahr(3);break;
default:;}},BeH:function(G){switch(A._GetAutoObject(A.Device.Device).AhP){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Um(false);break;case 5:{A._GetAutoObject(
A.Device.Device).Wx(65535);A._GetAutoObject(A.Device.Device).Um(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Wx(255);A._GetAutoObject(A.Device.Device).Um(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wx(16776960);A._GetAutoObject(
A.Device.Device).Um(true);}break;case 6:{A._GetAutoObject(A.Device.Device).Wx(16711935
);A._GetAutoObject(A.Device.Device).Um(true);}break;default:A.ab5("%s",AWf+A._GetAutoObject(
A.Device.Device).AhP.toFixed());}},Bk3:function(G){var B;this.K$.Akk().CC(this);
this.K$.Bz9(this);},Bj7:function(){return this.K$;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkD._Init.call(this.AkD={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GJ;this.H(Cc);this.N0.H(Rk);this.J(this.N0,0);this.
WE=A._NewObject(C.WE,0);this.A3H=A._GetAutoObject(C.A$);this.AkD.ANr=[this,this.
Bj7,this.Ahk];this.A3m=A._GetAutoObject(C.Wz);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkD._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkD._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Aay)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3H)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3m)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abd={A_u:null,BP:null,N:null,Cq:null,Am4:null,Am6:null,QO:null,Am5:null,Am2:
null,Am8:null,Am3:null,DE:function(G){var Fh=0;var X=this.AV;switch(this.Cq.CO){
case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QE(X,Fh,0x14);if(!!X)this.Bb(X);},Ba8:function(s){this.DE(s);},AlT:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);if(D5.Acc&&(this.D_().Asf===false)
)return;A.pe(this.D_().CE,this);},AIQ:function(s){this.AlT(s);},ApF:function(G){
var D5=(A.Core.BK.isPrototypeOf(G)?G:null);if(D5.Acc&&(this.D_().Zz===false))return;
A.pe(this.D_().Co,this);},AIT:function(s){this.ApF(s);},IY:function(G){if(this.QO.
Acc)return;},Atb:function(s){this.IY(s);},AAu:function(G){var D5=(A.Core.BK.isPrototypeOf(
G)?G:null);if(D5.Acc&&(this.D_().Zy===false))return;A.pe(this.D_().Ck,this);},AIS:
function(s){this.AAu(s);},D_:function(){if(!!this.Ll())return this.BP;else return this.
N;},Ll:function(){return this.BP;},GQ:function(E){this.A_u=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Am4={I:this},0);A.Core.BK._Init.
call(this.Am6={I:this},0);A.Core.BK._Init.call(this.QO={I:this},0);A.Core.BK._Init.
call(this.Am5={I:this},0);A.Core.BK._Init.call(this.Am2={I:this},0);A.Core.BK._Init.
call(this.Am8={I:this},0);A.Core.BK._Init.call(this.Am3={I:this},0);this.__proto__=
C.Abd;this.H([0,0,C.Aso[0],C.Aso[1]]);this.N.H(Xa);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Am4.Filter=26;this.Am6.Filter=28;this.QO.Filter=1;this.
Am5.Filter=27;this.Am2.Filter=44;this.Am8.Filter=9;this.Am3.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.Ba8];this.Cq.D1=[this,this.Ba8];this.Am4.BL=[this,this.
AIQ];this.Am4.D1=[this,this.AIQ];this.Am6.BL=[this,this.AIT];this.Am6.D1=[this,this.
AIT];this.QO.BL=[this,this.Atb];this.QO.D1=[this,this.Atb];this.Am5.BL=[this,this.
AIS];this.Am5.D1=[this,this.AIS];this.Am2.BL=[this,this.AIQ];this.Am2.D1=[this,this.
AIQ];this.Am8.BL=[this,this.AIT];this.Am8.D1=[this,this.AIT];this.Am3.BL=[this,this.
AIS];this.Am3.D1=[this,this.AIS];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Am4._Done();this.Am6._Done();this.QO._Done();this.
Am5._Done();this.Am2._Done();this.Am8._Done();this.Am3._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Am4._ReInit();this.Am6._ReInit();this.QO._ReInit();this.Am5._ReInit(
);this.Am2._ReInit();this.Am8._ReInit();this.Am3._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_u)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axs={_Init:function(){A.acl.AGC._Init.call(this,0);this.Kg=0x22;this.Ad3=true;
this.AuR=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axt={_Init:function(){A.acl.AGC._Init.call(this,0);this.Kg=0x22;this.Ad3=true;
this.AuR=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUv={R_:function(){var B;var Ao=(A.acl.Ae8.isPrototypeOf(B=A.acl.Aeh.R_.call(this
))?B:null);if(!Ao)throw new Error(AsV);Ao.Cp.Cw=100;return Ao;},R9:function(){var
B;var Ao=(A.acl.Axa.isPrototypeOf(B=A.acl.Aeh.R9.call(this))?B:null);if(!Ao)throw new
Error(AsV);Ao.E0.B1=100;return Ao;},_Init:function(aArg){A.acl.Aeh._Init.call(this
,aArg);this.__proto__=C.AUv;},_className:"Application::ShadeTransition"};C.AmR={
Ag3:null,SU:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC0:true,De:function(E){
C.BQ.De.call(this,E);this.SU.L(E);this.HP.L(E);this.Ag3.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Ae_)
);else this.HP.R(E.toFixed());},AbZ:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SU.R(A.aaR(A.acf.Ae_));else this.SU.R(E.toFixed());},DX:function(
G){},Nm:function(s){this.DX(s);},A9B:function(E){if(this.AC0===E)return;this.AC0=
E;this.SU.Z(this.AC0);this.Ag3.Z(this.AC0);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag3={I:this},0);A.acg.Text._Init.call(this.SU={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmR;this.Ag3.H(AWg);this.SU.H(AWh);this.SU.A5(0x11);this.
SU.R(A.aaR(A.acf.Ae_));this.HP.H(AWi);this.HP.A5(0x11);this.HP.R(A.aaR(A.acf.Ae_
));this.DS.H(AWj);this.J(this.Ag3,0);this.J(this.SU,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag3.Aw(A.aaL(A.ach.AQi));this.SU.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag3._Done();this.SU._Done(
);this.HP._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag3._ReInit();this.SU._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SU.R(A.aaR(A.acf.Ae_));this.HP.R(A.aaR(A.acf.Ae_));this.SU.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.AC_={Init:function(
aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SE
],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8o,B.Anv],0);
A.zV([this,this.Nm],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nm],[
B=A._GetAutoObject(A.Device.Helper).W,B.PO,B.EB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Helper).W,B.A81,B.Aw8],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8f,B.AeY],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8g,B.Uk],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8j,B.Ae2],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8n,B.
Ae4],0);A.pe([this,this.Nm],this);},De:function(E){C.AmR.De.call(this,E);this.DS.
De(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqR()){this.AbZ(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.AbZ(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AEU(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.AeY(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uk(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae2(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae4(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmR._Init.call(this,aArg);this.
__proto__=C.AC_;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kj={AhK:A.abi(3,A.jV,null),Cb:A.abi(3,0,{0:7,1:30,2:90}),Anf:3,Dt:function(){
if(this.Anf<3)return this.Anf;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Anf))return-1;return this.Cb.Get(aIndex);},Gj:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Anf))return AWk;return this.AhK.Get(aIndex);},DZ:function(
A9){var O=0;while((O<3)&&(O<=this.Anf)){if(this.Cb.Get(O)===A9)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Anf)){if(this.Cb.Get(
O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhK=[]).__proto__=C.Kj.AhK;(this.Cb=[]).__proto__=C.Kj.Cb;this.
__proto__=C.Kj;this.AhK.Set(0,A.aaR(A.acf.A64));this.AhK.Set(1,A.aaR(A.acf.A62));
this.AhK.Set(2,A.aaR(A.acf.A63));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhK.Set(0,A.aaR(A.acf.A64));this.AhK.Set(1,A.aaR(A.acf.A62));this.AhK.Set(2,A.aaR(
A.acf.A63));},_className:"Application::Days"};C.AUs={Amq:null,BS:null,Q3:null,QC:
null,A$i:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAr],[B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ata],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Dr.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BS.L(A.jb.Bm);if(!!this.Q)this.BS.R(((AWl+A._GetAutoObject(
A.Device.Converter).AkV((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlC());this.H4.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6p())&&(
Fu||GE));},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},J$:function(G){var F;var BO=this.AM;C.Dr.J$.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6p()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J6:function(G){var F;var BO=this.
AM;C.Dr.J6.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_d:function(E){if(this.A$i===E)return;
this.A$i=E;this.Am();},BAr:function(G){this.Am();},_Init:function(aArg){C.Dr._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amq={I:this},0);C.CH._Init.call(this.BS={
I:this},0);A.acg.AK._Init.call(this.Q3={I:this},0);A.acg.Ap._Init.call(this.QC={
I:this},0);this.__proto__=C.AUs;this.H(UT);this.Background.H(UT);this.V.H(AsW);this.
V.L(A.jb.Bm);this.Amq.H(AWm);this.Amq.L(A.jb.Afp);this.Hw.H(AWn);this.BS.H(AWo);
this.BS.A5(0x12);this.BS.L(A.jb.Text);this.H4.H(AWp);this.Q3.H(AWq);this.Q3.L(A.
jb.E1);this.QC.H(AWr);this.J(this.Amq,-2);this.J(this.BS,-1);this.J(this.Q3,0);this.
J(this.QC,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BS.S(A.aaL(
A.fl.EK));this.BS.A2(A.aaL(A.fl.Af));this.QC.Aw(A.aaL(A.ach.ADp));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dr;this.Amq._Done();this.BS._Done();this.Q3.
_Done();this.QC._Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.
call(this);this.Amq._ReInit();this.BS._ReInit();this.Q3._ReInit();this.QC._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BS.S(A.aaL(A.fl.EK));this.
BS.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.
Amq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_M={Q:null
,AiY:null,Init:function(aArg){var B;A.zX([this,this.BdZ],[B=A._GetAutoObject(A.Device.
Device),B.AEk,B.Bau],0);A.pe([this,this.BdZ],this);},At:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahr:function(Alf){A._GetAutoObject(A.Device.Device).Zj(Alf
);},BdZ:function(G){var F;if(!this.Q){A.ab5("%s",AWs);return;}var By=null;if(this.
AiY.Contains(A._GetAutoObject(A.Device.Device).KG)){By=this.AiY.A_s();while(!!By&&(
By.AnY!==A._GetAutoObject(A.Device.Device).KG))By=this.AiY.A_s();}if(!By)By=this.
By5(A._GetAutoObject(A.Device.Device).KG);(F=this.Q,F[2].call(F[0],By));},By5:function(
Alf){var By=null;switch(Alf){case 0:case 1:By=A._NewObject(C.AUA,0);break;case 2:
By=A._NewObject(C.XV,0);break;case 3:By=A._NewObject(C.Avn,0);break;case 53:By=A.
_NewObject(C.AVf,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=
A._NewObject(C.ARL,0);break;case 6:By=A._NewObject(C.ARk,0);break;case 16:By=A._NewObject(
C.ANz,0);break;case 22:By=A._NewObject(C.AVa,0);break;case 17:By=A._NewObject(C.
AUR,0);break;case 42:By=A._NewObject(C.ANw,0);break;case 87:By=A._NewObject(C.AT5
,0);break;case 88:By=A._NewObject(C.AT4,0);break;case 89:By=A._NewObject(C.AU8,0
);break;case 95:By=A._NewObject(C.AU_,0);break;case 23:By=A._NewObject(C.AVy,0);
break;case 18:By=A._NewObject(C.ANM,0);break;case 19:By=A._NewObject(C.AT6,0);break;
case 37:By=A._NewObject(C.AQN,0);break;case 76:By=A._NewObject(C.ATM,0);break;case
63:By=A._NewObject(C.ANK,0);break;case 64:By=A._NewObject(C.ANL,0);break;case 82:
By=A._NewObject(C.ANJ,0);break;case 83:By=A._NewObject(C.ANH,0);break;case 92:By=
A._NewObject(C.ANF,0);break;case 93:By=A._NewObject(C.ANI,0);break;case 65:By=A.
_NewObject(C.ANG,0);break;case 5:By=A._NewObject(C.AUK,0);break;case 4:By=A._NewObject(
C.Ad5,0);break;case 39:By=A._NewObject(C.AM8,0);break;case 38:By=A._NewObject(C.
ANp,0);break;case 28:By=A._NewObject(C.Wo,0);break;case 7:By=A._NewObject(C.AqB,
0);break;case 81:By=A._NewObject(C.ANU,0);break;case 31:By=A._NewObject(C.Ark,0);
break;case 78:By=A._NewObject(C.ARJ,0);break;case 34:By=A._NewObject(C.ALP,0);break;
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
,0);break;case 20:By=A._NewObject(C.AVp,0);break;case 41:By=A._NewObject(C.AVo,0
);break;case 43:By=A._NewObject(C.AOv,0);break;case 44:By=A._NewObject(C.AOu,0);
break;case 61:By=A._NewObject(C.ANT,0);break;case 62:By=A._NewObject(C.ANS,0);break;
case 46:By=A._NewObject(C.ARY,0);break;case 47:By=A._NewObject(C.ARX,0);break;case
85:By=A._NewObject(C.AVE,0);break;case 86:By=A._NewObject(C.AVD,0);break;case 71:
By=A._NewObject(C.ART,0);break;case 72:By=A._NewObject(C.ARS,0);break;case 74:By=
A._NewObject(C.AMN,0);break;case 90:By=A._NewObject(C.ATO,0);break;case 73:By=A.
_NewObject(C.AT7,0);break;case 51:By=A._NewObject(C.ALT,0);break;case 52:By=A._NewObject(
C.ALS,0);break;case 15:By=A._NewObject(C.ATU,0);break;case 60:By=A._NewObject(C.
AUQ,0);break;case 69:By=A._NewObject(C.ARi,0);break;case 70:By=A._NewObject(C.ARh
,0);break;case 26:By=A._NewObject(C.ARM,0);break;case 54:By=A._NewObject(C.ARI,0
);break;case 25:By=A._NewObject(C.AN7,0);break;case 66:By=A._NewObject(C.AN8,0);
break;case 59:By=A._NewObject(C.AN6,0);break;case 58:By=A._NewObject(C.AN9,0);break;
case 56:By=A._NewObject(C.AN_,0);break;case 57:By=A._NewObject(C.AqE,0);break;case
68:By=A._NewObject(C.AN$,0);break;case 67:By=A._NewObject(C.AN4,0);break;case 84:
By=A._NewObject(C.AMa,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;
case 36:By=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:By=A._NewObject(C.AMn,0);break;case 91:
By=A._NewObject(C.AUW,0);break;case 94:By=A._NewObject(C.Ap_,0);break;default:throw new
Error(AWt);}if(!!By)By.AnY=Alf;return By;},Cf:function(Alf){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWu);else this.AiY.Bnx((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zj(Alf);},Fy:function(){var Bfd=3;var Bfc=this.AiY.
Bnm();if(!!Bfc)Bfd=Bfc.AnY;else A.ab5("%s",AWv);A._GetAutoObject(A.Device.Device
).Zj(Bfd);},_Init:function(aArg){C.A_O._Init.call(this.AiY={I:this},0);this.__proto__=
C.A_M;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.AiY._Done(
);A.h7--;},_ReInit:function(){this.AiY._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_M._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AF7={H7:null,Yp:null,Afa:null,AaE:null,MB:null,Azo:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yp.R(this.BcJ(this.RatedAttribute));this.AKt(this);},Ai:function(
Ae){this.MB.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.ARz),P9,this.Azo.
toFixed()));if(this.RatingMode===1)this.MB.Z(true);else this.MB.Z(false);},CC:function(
G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);this.H7.Gp();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axl(this.H7,5);A.zX([this,this.AKt],[B=A._GetAutoObject(
A.Device.Device),B.ASs,B.AZW],0);A.zX([this,this.AKt],[B=A._GetAutoObject(A.Device.
Helper).W,B.PO,B.EB],0);A.pe([this,this.AKt],this);},Asw:function(G){var a=this.
AJ_(this.RatedAttribute);this.Bfu();this.Azo=this.Azo-1;this.Am();if(!a)this.ARG(
);else this.SC(a);},WI:function(G){var a=this.BcQ(this.RatedAttribute);this.Bfu(
);this.Azo=this.Azo+1;this.Am();if(!a)this.A7p();else this.SC(a);},AJ_:function(
Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHx);},BcQ:
function(Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHx);},SC:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yp.R(this.BcJ(E));this.DJ(E);this.Afa.AnA(this.H7.Bih(E));if(!this.AJ_(E)
){if(this.AQW())this.N.Cv(A.aaL(A.ach.Aex));else this.N.Cv(null);}else this.N.Cv(
A.aaL(A.ach.Aeu));},BcJ:function(Np){return this.AaE.BR(Np);},By4:function(Np){if(
!!Np){var a=this.AJ_(Np);if(!a)return A.jV;else return this.BcK(a);}else return A.
jV;},By3:function(Np){if(!!Np){var a=this.BcQ(Np);if(!a)return A.jV;else return this.
BcK(a);}else return A.jV;},ARG:function(){},A7p:function(){},A6q:function(){return null;
},BcK:function(Np){return this.AaE.Lt(Np);},Bfu:function(){if(!!this.RatedAttribute
)this.H7.Bn5(this.RatedAttribute,this.Afa.A4);},AKt:function(G){if(this.AQW())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
SC(2);this.DJ(this.RatedAttribute);this.Am();},Adq:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(4);},AkQ:function(G){var a=this.AJ_(this.RatedAttribute
);if(!a){if(this.AQW())this.Adq(this);}else this.ARG();},DJ:function(Np){this.N.
Hx(this.By4(Np));if(!!this.N.AnT){this.N.C1(null);this.N.ON(true);}else{this.N.C1(
A.aaL(A.ach.Aeu));this.N.ON(false);}this.N.CX(this.By3(Np));if(!!this.N.AnV){this.
N.C5(null);this.N.OO(true);}else{this.N.C5(this.A6q());this.N.OO(false);}},AQW:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Ak8,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yp={I:this},0);C.Rating._Init.call(this.Afa={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaE={I:this},0);A.acg.Text._Init.call(this.
MB={I:this},0);this.__proto__=C.AF7;this.Background.L(A.jb.CJ);this.N.Z(true);this.
Dq(C.II);this.Yp.H(AWw);this.Yp.KQ(true);this.Yp.L(A.jb.Text);this.Afa.H(AWx);this.
MB.H(AWy);this.MB.A5(0x14);this.MB.R(A.aaR(A.acf.ARz));this.MB.L(A.jb.Text);this.
J(this.Yp,0);this.J(this.Afa,0);this.J(this.MB,0);this.Bb(this.Afa);this.N.CE=[this
,this.Asw];this.N.Ck=[this,this.AkQ];this.N.Co=[this,this.WI];this.Yp.S(A.aaL(A.
fl.Af));this.Afa.AR=[this,this.WI];this.MB.S(A.aaL(A.fl.Af));this.H7=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yp._Done();this.Afa.
_Done();this.AaE._Done();this.MB._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yp._ReInit();this.Afa._ReInit();this.AaE._ReInit(
);this.MB._ReInit();this.MB.R(A.aaR(A.acf.ARz));this.Yp.S(A.aaL(A.fl.Af));this.MB.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jf:
null,Pk:null,AsL:null,BY:null,C$:null,C9:null,CG:null,Gl:null,Ay:null,KH:0,Init:
function(aArg){A.zX([this,this.Ba6],this.BY.Q,0);A.pe([this,this.Ba6],this);A.pe([
this,this.AA2],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANk(this.Y);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QE(X,Fh,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HH(X,true,null,null);this.AA2(this);},Fj:function(G){var B;this.Ay.Mw((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},AeT:function(E){if(this.KH===E)return;this.KH=E;A.abo([this,this.Av1,this.
AeT],0);},AA2:function(G){var B;var GX=(C.Cn.isPrototypeOf(B=this.AV)?B:null);this.
N.Hx(A.jV);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[this,this.AIP];if(!!GX&&!!GX.Ami
){this.N.FN(A.jV);this.N.Jx.Dj(255);this.N.ArH(GX.AqJ);this.N.Cv(GX.Avx);this.N.
Ck=GX.Ami;}else{this.N.FN(A.jV);this.N.Cv(null);this.N.Ck=null;}if(!!GX&&!!GX.Agq
){this.N.CX(GX.AxD);this.N.HQ.Dj(GX.Aw$);this.N.Anr(GX.AmL);this.N.C5(GX.Aq0);this.
N.Co=GX.Agq;}else this.Aua();},Agb:function(G){A.ab5("%s",Ax$);},AyK:function(s){
this.Agb(s);},Ev:function(G){A.ab5("%s",Ax$);},AIP:function(s){this.Ev(s);},Aua:
function(){A.ab5("%s",Ak9);},AAn:function(G){A.ab5("%s",Ax$);},AcO:function(s){this.
AAn(s);},JF:function(Ag){this.Bb(Ag);this.Y.HH(Ag,true,null,null);this.Y.Vt(null
,null);},ApB:function(G){var F;this.C9.Aho(A._GetAutoObject(A.Device.Helper).Abl((
F=this.BY.Q,F[1].call(F[0]))));},Ba6:function(s){this.ApB(s);},Av1:function(){return this.
KH;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UL._Init.call(
this.Jf={I:this},0);A.Device.M0._Init.call(this.Pk={I:this},0);A.Device.KW._Init.
call(this.AsL={I:this},0);C.BU._Init.call(this.BY={I:this},0);C.BU._Init.call(this.
C$={I:this},0);C.AkO._Init.call(this.C9={I:this},0);C.Axo._Init.call(this.CG={I:
this},0);C.Asr._Init.call(this.Gl={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.HY;var B;this.N.Z(true);this.Dq(C.II);this.Y.H(Fe);this.Y.JQ(
1);this.KH=A._GetAutoObject(A.Device.Helper).Abl(this.AnimalType.Q);this.BY.H(AhV
);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.Afo));this.C$.H(Aya);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afj));this.C9.H(Aoj);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KH)
);this.C9.F$(1000);this.C9.EU(99000);this.C9.Aho(A._GetAutoObject(A.Device.Helper
).Abl(this.AnimalType.Q));this.CG.H(AhW);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gl.H(AWz);this.Gl.Aj(true);this.Gl.T(A.aaR(A.acf.Jf));this.Ay.H(Ayb
);this.J(this.Y,0);this.J(this.BY,0);this.J(this.C$,0);this.J(this.C9,0);this.J(
this.CG,0);this.J(this.Gl,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Gender.
LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.
Helper).W);this.Breed.LY(A._GetAutoObject(A.Device.Helper).W);this.Jf.LY(A._GetAutoObject(
A.Device.Helper).W);this.BY.At([B=this.AnimalType,B.B_,B.B$]);this.BY.CK(this.AnimalType
);this.C$.At([B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.C9.At([this
,this.Av1,this.AeT]);this.CG.Gq([this,this.D_,this.GQ]);this.CG.LX([B=this.CG,B.
FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.
CK(this.Breed);this.CG.Anq(this.Pk);this.Gl.Gq([this,this.D_,this.GQ]);this.Gl.LX([
B=this.Gl,B.FU]);this.Gl.L0(A.aaL(A.ach.Edit));this.Gl.At([B=this.Jf,B.B_,B.B$]);
this.Gl.CK(this.Jf);this.Gl.Anq(this.AsL);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed.
_Done();this.Jf._Done();this.Pk._Done();this.AsL._Done();this.BY._Done();this.C$.
_Done();this.C9._Done();this.CG._Done();this.Gl._Done();this.Ay._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jf._ReInit();this.
Pk._ReInit();this.AsL._ReInit();this.BY._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gl._ReInit();this.Ay._ReInit();this.BY.T(A.aaR(A.acf.Afo
));this.C$.T(A.aaR(A.acf.Afj));this.C9.T(A.aaR(A.acf.KH));this.CG.T(A.aaR(A.acf.
Breed));this.Gl.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wo={Ay0:false,LN:function(G){if(A._GetAutoObject(A.Device.Device).An.Lf())A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gp();A._GetAutoObject(A.Device.Helper
).Aqb(A._GetAutoObject(A.Device.Helper).W);},Aua:function(){this.N.CX(A.jV);this.
N.C5(A.aaL(A.ach.ADt));this.N.Co=[this,this.AyK];},CC:function(G){if(!this.Ay0){
this.Ay0=true;A.pe([this,this.AcO],this);}else C.Ark.CC.call(this,G);},AAn:function(
G){A._GetAutoObject(C.A$).Cf(49);},_Init:function(aArg){C.Ark._Init.call(this,aArg
);this.__proto__=C.Wo;this.JW(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.II={_Init:function(aArg){C.AC_._Init.call(this,aArg);this.__proto__=C.II;this.
A9B(false);},_className:"Application::HeaderSelectedAnimalId"};C.I2={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,P0:null,S2:null,N9:
null,S3:null,Nl:null,Os:null,RM:null,Ot:null,RN:null,ND:null,Lb:null,Jp:null,KU:
null,Mt:null,Yj:null,S4:null,RO:null,Ay:null,AxQ:0,AxP:0,Auw:0,Auv:0,Arj:0,AsD:0
,Au_:0,Au$:0,AmX:true,Aml:false,An4:false,Init:function(aArg){A.zX([this,this.Ave
],this.Lb.Q,0);A.zX([this,this.AuB],this.Jp.Q,0);A.zX([this,this.Bpf],this.KU.Q,
0);A.zX([this,this.BjB],this.Mt.Q,0);A.zX([this,this.BpL],this.Nl.Q,0);A.zX([this
,this.BpK],this.N9.Q,0);A.zX([this,this.Bgy],this.ND.Q,0);A.zX([this,this.Bgx],this.
Ot.Q,0);this.Bb(this.P0);},DE:function(G){var Fh=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QE(X,Fh,0x414);if(!!X)this.Bb(X);this.MO(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E_(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},A2B:function(G){var EE=(C.Ael.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this
,this.Fn,this.Fr],0);}else{if(EE.Eq===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHy+EE.Eq.toFixed());if(!!Av){this.Filter.
CV(Av);A.abo([this,this.Fn,this.Fr],0);}}},BzF:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A$).Fy();},AAl:function(G){var EE=(
C.AmQ.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator
);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE.Eq===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;
}else if(EE.Eq===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;}else if((EE.Eq===22)||(EE.Eq===26)){var A0C=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0C.EJ=EE.Eq;A0C.Operator=0;Av=A0C;}else A.ab5(
"%s",AHy+EE.Eq.toFixed());if(!!Av){this.Filter.CV(Av);A.abo([this,this.Fn,this.Fr
],0);}}},A9w:function(E){if(this.Au_===E)return;this.Au_=E;A.abo([this,this.Bkf,
this.A9w],0);},A9x:function(E){if(this.Au$===E)return;this.Au$=E;A.abo([this,this.
Bkg,this.A9x],0);},Ave:function(G){var F;this.A9x((F=this.Lb.Q,F[1].call(F[0])));
var Av=this.Filter.DL(7,0);if(!!Av){var AzG=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzG)AzG.A4=this.Au$;else A.ab5("%s",AfB);}},AuB:function(G){var
F;this.A9w((F=this.Jp.Q,F[1].call(F[0])));var Av=this.Filter.DL(14,0);if(!!Av){var
U2=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U2)U2.A4=
this.Au_;else A.ab5("%s",AfB);}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},A_c:function(
E){if(this.AsD===E)return;this.AsD=E;A.abo([this,this.BkS,this.A_c],0);},Bpf:function(
G){var F;this.A_c((F=this.KU.Q,F[1].call(F[0])));var Av=this.Filter.DL(22,1);if(
!!Av){var Ai8=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Ai8
)switch(this.AsD){case 1:Ai8.Operator=5;break;case 0:Ai8.Operator=0;break;default:
A.ab5("%s%e",AHz,this.AsD);}else A.ab5("%s",AfB);}},A9J:function(E){if(this.Arj===
E)return;this.Arj=E;A.abo([this,this.Bkv,this.A9J],0);},BjB:function(G){var F;this.
A9J((F=this.Mt.Q,F[1].call(F[0])));var Av=this.Filter.DL(26,1);if(!!Av){var AtQ=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtQ)switch(this.Arj
){case 1:AtQ.Operator=5;break;case 0:AtQ.Operator=0;break;default:A.ab5("%s%e",AHz
,this.Arj);}else A.ab5("%s",AfB);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P0.Bk([this,this.Fn,this.Fr]);this.S2.
Bk([this,this.Fn,this.Fr]);this.N9.Bk([this,this.Fn,this.Fr]);this.S3.Bk([this,this.
Fn,this.Fr]);this.Nl.Bk([this,this.Fn,this.Fr]);this.Os.Bk([this,this.Fn,this.Fr
]);this.RM.Bk([this,this.Fn,this.Fr]);this.Ot.Bk([this,this.Fn,this.Fr]);this.RN.
Bk([this,this.Fn,this.Fr]);this.ND.Bk([this,this.Fn,this.Fr]);this.Lb.Bk([this,this.
Fn,this.Fr]);this.Jp.Bk([this,this.Fn,this.Fr]);this.KU.Bk([this,this.Fn,this.Fr
]);this.Mt.Bk([this,this.Fn,this.Fr]);this.Yj.Bk([this,this.Fn,this.Fr]);this.S4.
Bk([this,this.Fn,this.Fr]);this.RO.Bk([this,this.Fn,this.Fr]);this.Ar1(false);A.
pe([this,this.A3_],this);var Bdr=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!Bdr){this.Ar1(true);this.AFO(Bdr.A4);}var BcW=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
BcW){this.Ar1(true);this.AFP(BcW.A4);}this.ArA(false);A.pe([this,this.AK$],this);
var Bdq=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Bdq){this.ArA(true);this.AED(A._GetAutoObject(A.Device.Helper).L9(Bdq.A4,
A._GetAutoObject(A.Device.Helper).Du()));}var BcV=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!BcV){this.ArA(true);this.AEF(A.
_GetAutoObject(A.Device.Helper).L9(BcV.A4,A._GetAutoObject(A.Device.Helper).Du()
)+1);}var AzG=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzG)this.Lb.Bx(this.Gender.DZ(AzG.A4));var U2=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U2)this.Jp.Bx(this.AnimalType.
DZ(U2.A4));var Ai8=this.Filter.DL(22,1);if(!!Ai8){if(!Ai8.Operator)this.KU.Bx(0);
else this.KU.Bx(1);}var AtQ=this.Filter.DL(26,1);if(!!AtQ){if(!AtQ.Operator)this.
Mt.Bx(0);else this.Mt.Bx(1);}},Fr:function(Aq){this.Bk(Aq);},AFP:function(E){if(
this.AxQ===E)return;this.AxQ=E;A.abo([this,this.A8T,this.AFP],0);},AFO:function(
E){if(this.AxP===E)return;this.AxP=E;A.abo([this,this.A8S,this.AFO],0);},BpL:function(
G){var F;this.AFP((F=this.Nl.Q,F[1].call(F[0])));var Av=this.Filter.DL(1,3);if(!
!Av){var ABn=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABn)
ABn.A4=this.AxQ;else A.ab5("%s",AfB);}},BpK:function(G){var F;this.AFO((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DL(1,2);if(!!Av){var ABn=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABn)ABn.A4=this.AxP;else A.ab5("%s",AfB);}},BdW:
function(G){var EE=(C.AjD.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0
);}else{if(EE===this.S2){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxP;this.Bb(this.N9);}else if(EE===this.S3){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxQ;this.Bb(this.Nl);}if(!!Av){this.Filter.CV(
Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([this,this.A3_],this);},A3_:function(
G){var A2j=!!this.Filter.DL(this.N9.Eq,this.N9.Operator);var A3$=!!this.Filter.DL(
this.Nl.Eq,this.Nl.Operator);A._GetAutoObject(A.Device.Helper).JX(this.S2,this.An4
);A._GetAutoObject(A.Device.Helper).JX(this.S3,this.An4);A._GetAutoObject(A.Device.
Helper).JX(this.N9,A2j);A._GetAutoObject(A.Device.Helper).JX(this.Nl,A3$);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},BAy:function(G){A.pe([this,this.Fj],this);A.pe([this,this.
MO],this);},BzC:function(G){this.Ar1(!this.An4);if(this.An4===false){var Av=this.
Filter.DL(this.P0.Eq,this.P0.Operator);while(!!Av){this.Filter.Ni(Av);Av=this.Filter.
DL(this.P0.Eq,this.P0.Operator);}A.abo([this,this.Fn,this.Fr],0);}},Ar1:function(
E){if(this.An4===E)return;this.An4=E;A.abo([this,this.A8R,this.Ar1],0);A.pe([this
,this.A3_],this);},AEF:function(E){if(this.Auw===E)return;this.Auw=E;A.abo([this
,this.A7Z,this.AEF],0);},AED:function(E){if(this.Auv===E)return;this.Auv=E;A.abo([
this,this.A7X,this.AED],0);},Bgy:function(G){var F;this.AEF((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DL(4,2);if(!!Av){var AfN=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfN){var AaJ=A._GetAutoObject(A.Device.Helper).ZM(
this.Auw-1);AfN.A4=AaJ;}else A.ab5("%s",AfB);}},Bgx:function(G){var F;this.AED((
F=this.Ot.Q,F[1].call(F[0])));var Av=this.Filter.DL(4,3);if(!!Av){var AfN=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfN){var AaJ=A._GetAutoObject(
A.Device.Helper).ZM(this.Auv);AfN.A4=AaJ;}else A.ab5("%s",AfB);}},AK$:function(G
){var A2j=this.AmX&&!!this.Filter.DL(this.Ot.Eq,this.Ot.Operator);var A3$=this.AmX&&
!!this.Filter.DL(this.ND.Eq,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JX(this.Os,this.AmX);A._GetAutoObject(A.Device.Helper).JX(this.RM,this.AmX&&this.
Aml);A._GetAutoObject(A.Device.Helper).JX(this.RN,this.AmX&&this.Aml);A._GetAutoObject(
A.Device.Helper).JX(this.Ot,A2j);A._GetAutoObject(A.Device.Helper).JX(this.ND,A3$
);},ArA:function(E){if(this.Aml===E)return;this.Aml=E;A.abo([this,this.A7W,this.
ArA],0);A.pe([this,this.AK$],this);},BdV:function(G){var EE=(C.AjD.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.
Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE===this.RM){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZM(this.Auv);this.Bb(this.Ot);}else if(EE===this.RN){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZM(this.Auw-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CV(Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([
this,this.AK$],this);},BzB:function(G){this.ArA(!this.Aml);if(this.Aml===false){
var Av=this.Filter.DL(this.Os.Eq,this.Os.Operator);while(!!Av){this.Filter.Ni(Av
);Av=this.Filter.DL(this.Os.Eq,this.Os.Operator);}A.abo([this,this.Fn,this.Fr],0
);}},Bmd:function(E){if(this.AmX===E)return;this.AmX=E;A.pe([this,this.AK$],this
);},Fn:function(){return this.Filter;},Bkg:function(){return this.Au$;},Bkf:function(
){return this.Au_;},BkS:function(){return this.AsD;},Bkv:function(){return this.
Arj;},A8T:function(){return this.AxQ;},A8S:function(){return this.AxP;},A8R:function(
){return this.An4;},A7Z:function(){return this.Auw;},A7X:function(){return this.
Auv;},A7W:function(){return this.Aml;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABF._Init.call(this.Transponder={I:this},0);C.ABF._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABQ._Init.call(
this.P0={I:this},0);C.AjD._Init.call(this.S2={I:this},0);C.Abk._Init.call(this.N9={
I:this},0);C.AjD._Init.call(this.S3={I:this},0);C.Abk._Init.call(this.Nl={I:this
},0);C.ABQ._Init.call(this.Os={I:this},0);C.AjD._Init.call(this.RM={I:this},0);C.
ACD._Init.call(this.Ot={I:this},0);C.AjD._Init.call(this.RN={I:this},0);C.ACD._Init.
call(this.ND={I:this},0);C.AmQ._Init.call(this.Lb={I:this},0);C.AmQ._Init.call(this.
Jp={I:this},0);C.AmQ._Init.call(this.KU={I:this},0);C.AmQ._Init.call(this.Mt={I:
this},0);C.QA._Init.call(this.Yj={I:this},0);C.QA._Init.call(this.S4={I:this},0);
C.QA._Init.call(this.RO={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I2;var B;this.N.Z(true);this.N.CX(A.aaR(A.acf.A4J));this.Dq(C.APo);this.Gender.
At(this.Au$);this.AnimalType.At(this.Au_);this.Transponder.At(this.AsD);this.Ek.
At(this.Arj);this.Y.H(Fe);this.Y.JQ(1);this.P0.H(IT);this.P0.Aj(true);this.P0.T(
A._GetAutoObject(A.Device.Helper).AmO(0,1));this.P0.Nc(1);this.S2.H(P_);this.S2.
Aj(true);this.S2.T(A.aaR(A.acf.AD1));this.S2.Nc(1);this.S2.OM(2);this.N9.H(Z_);this.
N9.Nc(1);this.N9.OM(2);this.N9.AFG(A.aaR(A.acf.GM));this.S3.H(Ak_);this.S3.Aj(true
);this.S3.T(A.aaR(A.acf.AG1));this.S3.Nc(1);this.S3.OM(3);this.Nl.H(Aok);this.Nl.
Aj(true);this.Nl.Nc(1);this.Nl.OM(3);this.Nl.AFG(A.aaR(A.acf.GM));this.Os.H(AWA);
this.Os.Aj(true);this.Os.T(A.aaR(A.acf.RL));this.Os.Nc(4);this.RM.H(AWB);this.RM.
Aj(true);this.RM.T(A.aaR(A.acf.AD1));this.RM.Nc(4);this.RM.OM(3);this.Ot.H(AWC);
this.Ot.Nc(4);this.Ot.OM(3);this.Ot.A9O(2);this.RN.H(AWD);this.RN.Aj(true);this.
RN.T(A.aaR(A.acf.AG1));this.RN.Nc(4);this.RN.OM(2);this.ND.H(AWE);this.ND.Aj(true
);this.ND.Nc(4);this.ND.OM(2);this.ND.A9O(3);this.Lb.H(AsX);this.Lb.Aj(true);this.
Lb.Nc(7);this.Lb.Ahq(0);this.Lb.OM(0);this.Jp.H(Xa);this.Jp.Aj(true);this.Jp.Nc(
14);this.Jp.Ahq(0);this.Jp.OM(0);this.KU.H(Xa);this.KU.Aj(true);this.KU.Nc(22);this.
KU.Ahq(0);this.KU.OM(1);this.Mt.H(Xa);this.Mt.Aj(true);this.Mt.Nc(26);this.Mt.Ahq(
0);this.Mt.OM(1);this.Yj.H(Xa);this.Yj.Aj(true);this.Yj.Nc(11);this.Yj.Ahq(0);this.
Yj.OM(0);this.S4.H(Xa);this.S4.Aj(true);this.S4.Nc(12);this.S4.Ahq(0);this.S4.OM(
0);this.RO.H(Xa);this.RO.Aj(true);this.RO.Nc(8);this.RO.Ahq(0);this.RO.OM(0);this.
Ay.H(Is);this.J(this.Y,0);this.J(this.P0,0);this.J(this.S2,0);this.J(this.N9,0);
this.J(this.S3,0);this.J(this.Nl,0);this.J(this.Os,0);this.J(this.RM,0);this.J(this.
Ot,0);this.J(this.RN,0);this.J(this.ND,0);this.J(this.Lb,0);this.J(this.Jp,0);this.
J(this.KU,0);this.J(this.Mt,0);this.J(this.Yj,0);this.J(this.S4,0);this.J(this.RO
,0);this.J(this.Ay,0);this.N.CE=[this,this.Ev];this.N.Co=[this,this.BzF];this.N.
C1(A.aaL(A.ach.E2));this.Y.El=[this,this.BAy];this.P0.AR=[this,this.BzC];this.P0.
At([this,this.A8R,this.Ar1]);this.S2.AR=[this,this.BdW];this.N9.Gq([this,this.D_
,this.GQ]);this.N9.At([this,this.A8S,this.AFO]);this.S3.AR=[this,this.BdW];this.
Nl.Gq([this,this.D_,this.GQ]);this.Nl.At([this,this.A8T,this.AFP]);this.Os.AR=[this
,this.BzB];this.Os.At([this,this.A7W,this.ArA]);this.RM.AR=[this,this.BdV];this.
Ot.Gq([this,this.D_,this.GQ]);this.Ot.At([this,this.A7X,this.AED]);this.RN.AR=[this
,this.BdV];this.ND.Gq([this,this.D_,this.GQ]);this.ND.At([this,this.A7Z,this.AEF
]);this.Lb.AR=[this,this.AAl];this.Lb.At([B=this.Gender,B.B_,B.B$]);this.Lb.CK(this.
Gender);this.Jp.AR=[this,this.AAl];this.Jp.At([B=this.AnimalType,B.B_,B.B$]);this.
Jp.CK(this.AnimalType);this.KU.AR=[this,this.AAl];this.KU.At([B=this.Transponder
,B.B_,B.B$]);this.KU.CK(this.Transponder);this.Mt.AR=[this,this.AAl];this.Mt.At([
B=this.Ek,B.B_,B.B$]);this.Mt.CK(this.Ek);this.Yj.AR=[this,this.A2B];this.S4.AR=[
this,this.A2B];this.RO.AR=[this,this.A2B];this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder._Done(
);this.Ek._Done();this.Y._Done();this.P0._Done();this.S2._Done();this.N9._Done();
this.S3._Done();this.Nl._Done();this.Os._Done();this.RM._Done();this.Ot._Done();
this.RN._Done();this.ND._Done();this.Lb._Done();this.Jp._Done();this.KU._Done();
this.Mt._Done();this.Yj._Done();this.S4._Done();this.RO._Done();this.Ay._Done();
C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit(
);this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();this.Y.
_ReInit();this.P0._ReInit();this.S2._ReInit();this.N9._ReInit();this.S3._ReInit(
);this.Nl._ReInit();this.Os._ReInit();this.RM._ReInit();this.Ot._ReInit();this.RN.
_ReInit();this.ND._ReInit();this.Lb._ReInit();this.Jp._ReInit();this.KU._ReInit(
);this.Mt._ReInit();this.Yj._ReInit();this.S4._ReInit();this.RO._ReInit();this.Ay.
_ReInit();this.N.CX(A.aaR(A.acf.A4J));this.S2.T(A.aaR(A.acf.AD1));this.N9.AFG(A.
aaR(A.acf.GM));this.S3.T(A.aaR(A.acf.AG1));this.Nl.AFG(A.aaR(A.acf.GM));this.Os.
T(A.aaR(A.acf.RL));this.RM.T(A.aaR(A.acf.AD1));this.RN.T(A.aaR(A.acf.AG1));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_O={ZN:null,Bnx:
function(Bw$){var EF=A._NewObject(C.A_N,0);EF.AB=Bw$;EF.Mu=this.ZN;this.ZN=EF;},
A_s:function(){var Vh=null;if(!!this.ZN){Vh=this.ZN.AB;this.ZN=this.ZN.Mu;}return Vh;
},Contains:function(Alf){var EF=this.ZN;while(!!EF){if(EF.AB.AnY===Alf)return true;
EF=EF.Mu;}return false;},Bnm:function(){if(!!this.ZN)return this.ZN.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_O;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_N={AB:null,
Mu:null,_Init:function(aArg){this.__proto__=C.A_N;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AL9={ARG:function(){A._GetAutoObject(
A.Device.Helper).Axl(this.H7,0);A._GetAutoObject(C.A$).Fy();},A7p:function(){this.
H7.Cg(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();},A6q:function(
){return A.aaL(A.ach.AmV);},_Init:function(aArg){C.AF7._Init.call(this,aArg);this.
__proto__=C.AL9;this.Dq(C.II);},_className:"Application::AnimalActionRateScreen"
};C.AL5={Wu:function(G){this.Agr();this.I0(A.aaR(A.acf.AU1),[this,this.ATs],5);this.
I0(A.aaR(A.acf.A5a),[this,this.Bld],4);this.I0(A.aaR(A.acf.AF6),[this,this.ATd],
3);this.I0(A.aaR(A.acf.AnS),[this,this.AwL],2);this.I0(A.aaR(A.acf.AdP),[this,this.
AEI],1);this.I0(A.aaR(A.acf.Aus),[this,this.AEC],0);A._GetAutoObject(C.B4).Gu();
A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abn:function(){return C.AMY;},Abo:function(
){return C.ADa;},Q5:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
AyY=A._NewObject(A.Device.BoolFilterCriterion,0);AyY.Initialize(8,0,true,true);Be.
CV(AyY);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(
this,G);if(this.Akb()===false){this.N.Cv(A.aaL(A.ach.AGd));this.N.Ck=[this,this.
A5G];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(
C.A$).Cf(40);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.
AL5;var B;this.Dq(C.AOP);this.Dv(A.aaR(A.acf.A7v));this.AwG([B=A._GetAutoObject(
A.Device.Device),B.A70,B.Baw]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dv(A.aaR(A.acf.A7v));},_className:"Application::AlarmListScreen"};C.ANn={DE:function(
G){},AlU:function(G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gr);var Aa=(C.ABX.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).G6(Aa.Hq);A._GetAutoObject(
C.A$).Cf(13);}},Q5:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azg=A._NewObject(A.Device.BoolFilterCriterion,0);Azg.Initialize(9,0,true,true);Be.
CV(Azg);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(
this,G);this.N.ON(false);this.N.OO(false);},_Init:function(aArg){C.GZ._Init.call(
this,aArg);this.__proto__=C.ANn;this.Dq(C.AOR);this.Dv(A.aaR(A.acf.A7w));},_ReInit:
function(){C.GZ._ReInit.call(this);this.Dv(A.aaR(A.acf.A7w));},_className:"Application::ControlListScreen"
};C.Ael={Filter:null,Eq:0,Ja:10,TableId:0,Operator:1,CP:function(){var F;this.Tn((
F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){C.
Cn.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Ja),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.pe([this,this.
Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tn((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));else this.
Tn(null);},Ahq:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this,this.
Mb],this);},Tn:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6j(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmO(this.TableId
,this.Eq));},OM:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mb],this);},_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=
C.Ael;this.V.H(AHA);this.V.A5(0x11);},_ReInit:function(){C.Cn._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QA={H6:null,Bl:function(aSize){var B;C.Ael.Bl.call(this,aSize);this.H6.H([(aSize[
0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Ja,0,this.
H6.M[0]-this.Ja,aSize[1]]);},Tn:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmO(this.TableId,this.Eq));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av&&Av.A4)this.H6.Cu(1);else this.H6.Cu(0);},_Init:function(aArg
){C.Ael._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.QA;this.H6.H(AHB);this.H6.Cu(0);this.J(this.H6,0);this.H6.Aw(A.aaL(A.ach.AqH));
},_Done:function(){this.__proto__=C.Ael;this.H6._Done();C.Ael._Done.call(this);}
,_ReInit:function(){C.Ael._ReInit.call(this);this.H6._ReInit();},_Mark:function(
D){var B;C.Ael._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APo={Ap:null,Text:null,De:function(
E){C.BQ.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APo;this.Ap.H(AWF);this.Text.H(AWG);this.
Text.A5(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.Aew));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjM={
AW:null,T0:null,Gv:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.T0.H(A.abJ(this.T0.M,A.abe(this.AW.M.slice(0
,2),AWH)));this.T0.H(A.abK(this.T0.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWI
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IA)this.T0.L(A.jb.AV);else this.T0.L(A.jb.AmW);},De:function(E){
C.BQ.De.call(this,E);this.Gv.L(E);this.D2.Zn(E);},Wv:function(E){C.BQ.Wv.call(this
,E);this.D2.CT(E);},Akj:function(){return this.AW.Akj();},Av9:function(){return this.
AW.Av9();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BT._Init.call(this.T0={I:this},0);A.acg.Ap._Init.call(this.Gv={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C4._Init.call(this.A_={I:this
},0);this.__proto__=C.AjM;this.AW.H(AWJ);this.T0.H(AWK);this.T0.Ng(2);this.Gv.H(
AWL);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AWM);this.D2.Zn(A.jb.Bm);this.
D2.CT(A.jb.Rd);this.D2.Hl(2);this.A_.DC(AWN);this.A_.DM(AWO);this.A_.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T0,0);this.J(this.Gv,0);this.J(this.D2,0);this.J(this.
A_,0);this.Bb(this.AW);this.Gv.Aw(A.aaL(A.ach.Gv));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AW._Done();this.T0._Done(
);this.Gv._Done();this.D2._Done();this.A_._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.AW._ReInit();this.T0._ReInit();this.Gv._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
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
Di:null,Cs:null,CU:null,Dy:null,Ep:null,FY:null,ES:null,Fl:null,Fa:null,M4:0,AQX:
false,Aqk:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqk)this.ES.AeU(true);else this.ES.AeU(false);},AwC:function(E){var B;
if(E===this.Akj())return;var Af5=E;var DV=this.ES;while(!!DV){if(Af5>0){DV.LZ(Af5
%10);Af5=(Af5/10)|0;}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.QE(DV,2,0x11))?
B:null);}},Akj:function(){return A.wz(this.Av9(),-1,10);},Om:function(G){if(this.
FY.Ey>=0)this.BfF(7);},MU:function(G){if(((this.Akj()>0)||this.AQX)&&(this.Cs.Ey<
0))this.BfF(2);else if(this.Akj()<=0)this.Fa.NH=true;},Ado:function(G){A.pe(this.
Di,this);},BfF:function(Gz){var B;var ALn=0;var DV=null;switch(Gz){case 2:{DV=this.
Cs;ALn=7;}break;case 7:{DV=this.ES;ALn=2;}break;default:throw new Error(AWP);}while(
!!DV){var A2u=(C.DF.isPrototypeOf(B=this.QE(DV,ALn,0x11))?B:null);if(!!A2u)DV.LZ(
A2u.Ey);else if(ALn===7)DV.LZ(0);else DV.LZ(-1);DV=A2u;}A.pe([this,this.Ado],this
);},AeU:function(E){if(this.Aqk===E)return;this.Aqk=E;this.Am();},Bme:function(E
){if(this.AQX===E)return;this.AQX=E;},ASU:function(E){var B;if(E===this.Av9())return;
var Af5=E;var DV=this.ES;while(!!DV){if(Af5.length>0){DV.LZ(A.wz(A.ab2(Af5,1),-1
,10));Af5=A.abV(Af5,Af5.length-1);}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.
QE(DV,2,0x11))?B:null);}},Av9:function(){var B;var Iy=A.jV;var O=0;var B5=this.Cs;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iy=Iy+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TK(B5,0x11))?B:null);}return Iy;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cs={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF.
_Init.call(this.FY={I:this},0);C.DF._Init.call(this.ES={I:this},0);A.Core.BK._Init.
call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.__proto__=
C.AW;this.H(Ayc);this.Cs.AZ(0x3);this.Cs.H(AHC);this.CU.AZ(0x3);this.CU.H(AHD);this.
Dy.AZ(0x3);this.Dy.H(AHE);this.Ep.AZ(0x3);this.Ep.H(AHF);this.FY.AZ(0x3);this.FY.
H(AHG);this.ES.AZ(0x3);this.ES.H(AHH);this.ES.LZ(0);this.Fl.Filter=6;this.Fa.Filter=
7;this.M4=A.jb.CJ;this.J(this.Cs,0);this.J(this.CU,0);this.J(this.Dy,0);this.J(this.
Ep,0);this.J(this.FY,0);this.J(this.ES,0);this.Bb(this.ES);this.Cs.Di=[this,this.
Ado];this.CU.Di=[this,this.Ado];this.Dy.Di=[this,this.Ado];this.Ep.Di=[this,this.
Ado];this.FY.Di=[this,this.Ado];this.ES.Di=[this,this.Ado];this.Fl.BL=[this,this.
Om];this.Fa.BL=[this,this.MU];},_Done:function(){this.__proto__=A.Core.P;this.Cs.
_Done();this.CU._Done();this.Dy._Done();this.Ep._Done();this.FY._Done();this.ES.
_Done();this.Fl._Done();this.Fa._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cs._ReInit();this.CU._ReInit();this.Dy._ReInit(
);this.Ep._ReInit();this.FY._ReInit();this.ES._ReInit();this.Fl._ReInit();this.Fa.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bg$="00558be9";C.BCa={Undefined:0,BDe:1,BCs:2};C.AkD={
Tl:null,AiQ:null,K$:null,ANr:null,An1:null,push:function(MJ){if(!this.Tl){MJ.Aht=
null;MJ.Mu=null;this.Tl=MJ;this.AiQ=this.Tl;}else{MJ.Aht=this.AiQ;MJ.Mu=null;this.
AiQ.Mu=MJ;this.AiQ=MJ;}},BA9:function(MJ){var Qg=this.Tl;while(!!Qg){if(Qg.JK.Id===
MJ.Id)return Qg;Qg=Qg.Mu;}return Qg;},BAR:function(MJ){if(MJ===this.Tl)this.pop(
);else if(MJ===this.AiQ){MJ=MJ.Aht;if(!!MJ)MJ.Mu=null;this.AiQ=MJ;}else{MJ.Aht.Mu=
MJ.Mu;MJ.Mu.Aht=MJ.Aht;}},Ahk:function(E){var F;if(this.K$===E)return;this.K$=E;
if(!!this.K$)this.K$.AgG(2);(F=this.ANr,F[2].call(F[0],this.K$));},Ve:function(G
){var Qg=(C.ATF.isPrototypeOf(G)?G:null);if(!!Qg){if(!Qg.JK.PopupState){if(!this.
K$)this.Ahk(this.top());}else if(Qg.JK.PopupState===4){this.pop();this.Ahk(this.
top());}else if(Qg.JK.PopupState===5){this.pop();this.Ahk(this.top());}else if(Qg.
JK.PopupState===7){this.pop();this.Ahk(this.top());}else if(Qg.JK.PopupState===8
){this.pop();this.Ahk(this.top());}else if(Qg.JK.PopupState===6){if(Qg===this.K$
){this.pop();this.Ahk(this.top());}else this.BAR(Qg);}else if(Qg.JK.PopupState===
3){this.pop();this.Ahk(this.top());}}},pop:function(){var AKJ=null;if(!!this.Tl){
AKJ=this.Tl;if(this.Tl===this.AiQ){this.Tl=null;this.AiQ=null;}else{this.Tl=this.
Tl.Mu;if(!this.Tl)throw new Error(AWQ);this.Tl.Aht=null;}AKJ.Aht=null;AKJ.Mu=null;
}return AKJ;},top:function(){return this.Tl;},BAz:function(G){var B;var AtR=(A.Device.
PopupContext.isPrototypeOf(B=this.An1.JK)?B:null);if(!!AtR){var A3I=this.BA9(AtR
);if(!!A3I){A3I.A9m(AtR);if(!AtR.Show)A3I.AgG(6);}else if(AtR.Show){var AKn=A._NewObject(
C.ATF,0);AKn.A9m(AtR);AKn.ASD=[this,this.Ve];this.push(AKn);AKn.AgG(0);}}},_Init:
function(aArg){A.Core.A__._Init.call(this.An1={I:this},0);this.__proto__=C.AkD;this.
An1.AR6=[this,this.BAz];this.An1.Bly(A._GetAutoObject(A.Device.Device).AnG);A.h7++;
},_Done:function(){this.__proto__=null;this.An1._Done();A.h7--;},_ReInit:function(
){this.An1._ReInit();},_Mark:function(D){var B;if((B=this.Tl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANr)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATF={Rh:null,Mu:null,Aht:null,JK:null,ASD:null,PopupIdToString:null,AfT:function(
Bwf,BwP,Bw_,Bw0,Bw2,BwZ,Bwy){var Vg=A._NewObject(C.ATE,0);Vg.BmH(this.JK.Id);Vg.
A96(Bwf);Vg.ASE=BwZ;Vg.A98(this.JK.AkX);Vg.A9T(this.JK.AkC);Vg.BP=A._NewObject(C.
N,0);Vg.Ll().Co=Bw2;Vg.Ll().Ck=null;Vg.Ll().CE=Bw0;Vg.Ll().CX(Bw_);Vg.Ll().Cv(null
);Vg.Ll().Hx(BwP);Vg.Ll().AE9(Bwy);return Vg;},Akk:function(){if(!this.Rh){var Agk=
this.PopupIdToString.BR(this.JK.Id);switch(this.JK.Id){case 46:this.Rh=this.AfT(
Agk,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKr],[this,this.Af8],1);break;case 91:case
92:this.Rh=this.AfT(Agk,A.jV,A.jV,null,null,[this,this.Af8],0);break;case 39:this.
Rh=this.AfT(Agk,A.aaR(A.acf.Amt),A.aaR(A.acf.Ok),[this,this.A2H],[this,this.A2I]
,[this,this.Af8],3);break;case 13:this.Rh=this.AfT(Agk,A.aaR(A.acf.Amt),A.aaR(A.
acf.BnI),[this,this.A2G],[this,this.AKr],[this,this.Af8],3);break;case 25:this.Rh=
this.AfT(Agk,A.aaR(A.acf.Amt),A.aaR(A.acf.Ok),[this,this.A2G],[this,this.AKr],[this
,this.Af8],3);break;case 16:case 24:case 49:case 74:this.Rh=this.AfT(Agk,A.aaR(A.
acf.Amt),A.jV,[this,this.A2G],null,[this,this.Af8],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.Rh=this.AfT(Agk,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2H],[this,this.A2I],[this,this.Af8],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.Rh=this.AfT(Agk,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKr],[this,this.Af8],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Rh=
this.AfT(Agk,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2H],[this,this.A2I],[this
,this.Af8],3);break;case 110:this.Rh=this.AfT(Agk,A.jV,A.jV,null,null,[this,this.
Af8],1);break;default:A.ab5("%s",(AWR+this.JK.Id.toFixed())+AWS);}}switch(this.JK.
Id){case 16:case 49:this.Rh.A_k(true);break;case 91:case 92:this.Rh.A_k(false);break;
default:;}return this.Rh;},AKr:function(G){this.AgG(4);},A2G:function(G){this.AgG(
5);},A2I:function(G){this.AgG(7);},A2H:function(G){this.AgG(8);},Af8:function(G){
this.AgG(3);},A9m:function(E){if(this.JK===E)return;this.JK=E;if(!!this.Rh){this.
Akk().A98(this.JK.AkX);this.Akk().A9T(this.JK.AkC);}},AgG:function(Bw5){var B;this.
JK.BmI(Bw5);(B=this.ASD)?B[1].call(B[0],this):null;},Bz9:function(G){this.AgG(9);
},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATF;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.Rh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aht)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASD)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Gc={BooleanToYesNo:null,Dt:function(
){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gc;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afi={Un:null,J$:function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.
AM!==BO){if(!!this.Un&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Un,F[
2].call(F[0],false));break;case 1:(F=this.Un,F[2].call(F[0],true));break;default:;
}A.abo(this.Un,0);}},J6:function(G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.
AM!==BO){if(!!this.Un&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Un,F[
2].call(F[0],false));break;case 1:(F=this.Un,F[2].call(F[0],true));break;default:;
}A.abo(this.Un,0);}},Akw:function(E){if(A.aaZ(this.Un,E))return;if(!!this.Q)A.z$([
this,this.A3k],this.Un,0);this.Un=E;if(!!E)A.zX([this,this.A3k],E,0);if(!!E)A.pe([
this,this.A3k],this);},A3k:function(G){var F;if(!!this.Un){if((F=this.Un,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BU._Init.call(this,aArg
);this.__proto__=C.Afi;this.JW(this.V,-1);},_Mark:function(D){var B;C.BU._Mark.call(
this,D);if((B=this.Un)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ATU={Je:null,OT:null,IR:null,Gk:null,AK:null,Abc:null,AgM:null,TG:null,R8:null
,Acx:null,WU:null,Hh:null,ABm:true,Init:function(aArg){var B;A.zX([this,this.AlX
],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZX],0);A.pe([this,this.AlX],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABm)this.N.C5(A.aaL(A.ach.
AQD));else this.N.C5(A.aaL(A.ach.AQE));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OT.L(A.jb.Bm);this.R8.Z(false);this.TG.Z(false);this.IR.Z(true);this.Gk.
Ar(false);(F=this.Gk.Q,F[2].call(F[0],this.Gk.B1));this.Background.L(A.jb.Gh);}else
if(this.Abc.Bw){this.OT.L(A.jb.Text);this.R8.Z(true);this.TG.Z(true);this.IR.Z(false
);this.Gk.Ar(false);(F=this.Gk.Q,F[2].call(F[0],this.Gk.B1));this.Background.L(A.
jb.E1);}else{this.OT.L(A.jb.Text);this.R8.Z(false);this.TG.Z(false);this.IR.Z(true
);this.Gk.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgM.Bw)this.WU.Z(true);else
this.WU.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhG();},E4:function(
G){A._GetAutoObject(A.Device.Device).AnR();A._GetAutoObject(A.Device.Device).Ae7(
false);A._GetAutoObject(A.Device.Device).Um(false);},AlX:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BzP],this);break;case 3:{A.pe([this,this.Bew],this);A.pe([B=this.Abc,B.Axz],this
);A.pe(this.Abc.Mz,this);}break;case 4:A.ab5("%s",AWT);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A$).Fy();},BAA:function(G){this.Bm9(!this.ABm);},Bm9:function(
E){if(this.ABm===E)return;this.ABm=E;if(!E)A._GetAutoObject(A.Device.Device).Ae7(
false);this.Am();},BzP:function(G){var B;this.Bew(this);if(this.ABm)A._GetAutoObject(
A.Device.Device).Ae7(true);A._GetAutoObject(A.Device.Device).Wx(65280);A._GetAutoObject(
A.Device.Device).Um(true);A.pe([B=this.Abc,B.StartTimer],this);A.pe([B=this.AgM,
B.StartTimer],this);this.Am();},BzQ:function(G){A._GetAutoObject(A.Device.Device
).Ae7(false);A._GetAutoObject(A.Device.Device).Um(false);this.Am();},BzS:function(
G){this.Am();},Bew:function(G){A._GetAutoObject(A.Device.Device).AhG();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Je._Init.call(this.Je={I:this},0);C.CH._Init.
call(this.OT={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acl.Gk._Init.
call(this.Gk={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abc={I:this},0);A.Core.Timer._Init.call(this.AgM={I:this},0);A.acg.Ap.
_Init.call(this.TG={I:this},0);A.acg.Ap._Init.call(this.R8={I:this},0);A.acg.Text.
_Init.call(this.Acx={I:this},0);C.WU._Init.call(this.WU={I:this},0);C.CH._Init.call(
this.Hh={I:this},0);this.__proto__=C.ATU;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Je.H(AWU);this.Je.Akz(0);this.OT.H(AWV);this.OT.R(A.aaR(A.acf.A$d));
this.OT.L(A.jb.Text);this.IR.H(AWW);this.IR.L(A.jb.AV);this.IR.Zl(true);this.Gk.
Fp(1750);this.Gk.Uj(750);this.Gk.Aku(0);this.Gk.Ar(true);this.Gk.B1=3;this.AK.H(
Ayd);this.Abc.PQ(-1);this.Abc.Ww(1000);this.AgM.PQ(-1);this.AgM.Ww(5000);this.TG.
H(AHI);this.R8.H(AHI);this.R8.L(A.jb.E1);this.Acx.H(Ayd);this.Acx.R(A.aaR(A.acf.
A_P));this.Acx.L(A.jb.Text);this.WU.H(Ayd);this.Hh.H(AWX);this.Hh.Ar(false);this.
Hh.R(A.aaR(A.acf.RangeTest));this.Hh.L(A.jb.Text);this.J(this.Je,0);this.J(this.
OT,0);this.J(this.IR,0);this.J(this.AK,0);this.J(this.TG,0);this.J(this.R8,0);this.
J(this.Acx,0);this.J(this.WU,0);this.J(this.Hh,0);this.N.CE=[this,this.Ev];this.
N.Co=[this,this.BAA];this.N.C1(A.aaL(A.ach.E2));this.OT.S(A.aaL(A.fl.Af));this.OT.
A2(A.aaL(A.fl.Ak));this.OT.Ct(A.aaL(A.fl.Bh));this.IR.Aw(A.aaL(A.ach.ADC));this.
Gk.Q=[B=this.IR,B.ASg,B.Cu];this.Abc.Mz=[this,this.BzQ];this.AgM.Mz=[this,this.BzS
];this.TG.Aw(A.aaL(A.ach.TG));this.R8.Aw(A.aaL(A.ach.R8));this.Acx.S(A.aaL(A.fl.
Af));this.WU.At([B=A._GetAutoObject(A.Device.Device),B.ASu,B.AZY]);this.Hh.S(A.aaL(
A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Je._Done();this.OT._Done();this.IR._Done();this.Gk._Done();this.AK._Done(
);this.Abc._Done();this.AgM._Done();this.TG._Done();this.R8._Done();this.Acx._Done(
);this.WU._Done();this.Hh._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Je._ReInit();this.OT._ReInit();this.IR._ReInit();this.Gk.
_ReInit();this.AK._ReInit();this.Abc._ReInit();this.AgM._ReInit();this.TG._ReInit(
);this.R8._ReInit();this.Acx._ReInit();this.WU._ReInit();this.Hh._ReInit();this.
OT.R(A.aaR(A.acf.A$d));this.Acx.R(A.aaR(A.acf.A_P));this.Hh.R(A.aaR(A.acf.RangeTest
));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(A.aaL(A.fl.Ak));this.OT.Ct(A.aaL(A.fl.Bh
));this.Acx.S(A.aaL(A.fl.Af));this.Hh.S(A.aaL(A.fl.Km));this.Hh.A2(A.aaL(A.fl.Ik
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Je)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hh).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbP={
ScreenType:0,Ne:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nh:
function(G){A._GetAutoObject(C.A$).Cf(this.ScreenType);},_Init:function(aArg){C.
Cn._Init.call(this,aArg);this.__proto__=C.AbP;},_className:"Application::MenuItemScreen"
};C.T8={Ad4:null,Ml:null,Amu:false,Init:function(aArg){},Ai:function(Ae){C.Cn.Ai.
call(this,Ae);if(this.Amu){this.Ml.Cu(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cu(0);
if(this.KD)this.Ml.L(A.jb.Bm);else if(this.Hj)this.Ml.L(A.jb.Text);else this.Ml.
L(A.jb.Bm);}},IY:function(G){var F,CA;if(!!this.Ad4){(CA=this.Ad4,CA[2].call(CA[
0],!(F=this.Ad4,F[1].call(F[0]))));this.AEQ((F=this.Ad4,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A2N:function(G){this.KD=true;this.DJ(this);},AEQ:function(
E){if(this.Amu===E)return;this.Amu=E;this.DJ(this);this.Am();},A3d:function(G){var
F;this.AEQ((F=this.Ad4,F[1].call(F[0])));},A0g:function(s){this.A3d(s);},DJ:function(
G){var F;if(!this.N||!this.KD)return;if(this.Amu){(F=this.N,F[1].call(F[0])).CX(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CX(A.aaR(A.acf.A7L));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASJ:function(E){if(A.aaZ(this.Ad4,E))
return;if(!!this.Ad4)A.z$([this,this.A0g],this.Ad4,0);this.Ad4=E;if(!!E)A.zX([this
,this.A0g],E,0);if(!!E)A.pe([this,this.A0g],this);},_Init:function(aArg){C.Cn._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Ml={I:this},0);this.__proto__=C.T8;this.
V.L(A.jb.H8);this.Ml.H(AHJ);this.Ml.Cu(0);this.J(this.Ml,0);this.Ml.Aw(A.aaL(A.ach.
AqH));this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.Ml._Done();C.Cn.
_Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.Ml._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.Ad4)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANz={H5:null,IL:null,_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.SO._Init.call(this.H5={I:this},0);C.AGw._Init.call(this.
IL={I:this},0);this.__proto__=C.ANz;var B;this.I_(A.aaR(A.acf.ACl));this.H5.H(AhX
);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.Bi(true);this.IL.H(UV);this.
IL.Aj(true);this.IL.T(A.aaR(A.acf.Bs));this.J(this.H5,-1);this.J(this.IL,-1);this.
H5.AeR([B=this.H5,B.FU]);this.H5.Gq([this,this.D_,this.GQ]);this.H5.Akt(A.aaL(A.
ach.Edit));this.H5.Ab2([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);this.IL.
AeR([B=this.IL,B.FU]);this.IL.Gq([this,this.D_,this.GQ]);this.IL.Akt(A.aaL(A.ach.
Edit));this.IL.Ab2([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);},_Done:function(
){this.__proto__=C.Cd;this.H5._Done();this.IL._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.H5._ReInit();this.IL._ReInit();this.I_(A.
aaR(A.acf.ACl));this.H5.T(A.aaR(A.acf.Date));this.IL.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cd._Mark.call(this,D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUR={Ra:null,FH:null,BY:null,OG:null,YF:null,AaY:null,_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.Ra._Init.call(this.Ra={I:this},0);C.AMt._Init.call(this.
FH={I:this},0);C.AUq._Init.call(this.BY={I:this},0);C.AUs._Init.call(this.OG={I:
this},0);C.Afi._Init.call(this.YF={I:this},0);C.AaY._Init.call(this.AaY={I:this}
,0);this.__proto__=C.AUR;var B;this.I_(A.aaR(A.acf.Temperature));this.FH.At(A._GetAutoObject(
A.Device.Device).AnimalType);this.BY.H(AWY);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.
Arh));this.BY.Bi(false);this.OG.H(Z$);this.OG.Aj(true);this.OG.T(A.aaR(A.acf.Undertemperature
));this.OG.Bi(true);this.OG.Bx(3800);this.OG.F$(3000);this.OG.EU(5000);this.OG.A_d(
A.aaR(A.acf.AGJ));this.YF.H(AWZ);this.YF.Aj(true);this.YF.Z(true);this.YF.T(A.aaR(
A.acf.A4H));this.J(this.BY,0);this.J(this.OG,0);this.J(this.YF,0);this.BY.AeR([B=
this.BY,B.FU]);this.BY.Gq([this,this.D_,this.GQ]);this.BY.Akt(A.aaL(A.ach.Edit));
this.BY.LX([B=this.BY,B.AyL]);this.BY.L0(A.aaL(A.ach.AnJ));this.BY.At([B=this.FH
,B.B_,B.B$]);this.BY.CK(this.FH);this.BY.A9R([B=this.FH,B.ASC,B.AZ5]);this.BY.A9Q([
B=this.FH,B.ASB,B.AZ4]);this.OG.LX([B=this.BY,B.AyL]);this.OG.L0(A.aaL(A.ach.AnJ
));this.OG.At([B=A._GetAutoObject(A.Device.Device),B.A8P,B.BaU]);this.YF.CK(this.
AaY);this.YF.Akw([B=A._GetAutoObject(A.Device.Device),B.A7$,B.BaE]);},_Done:function(
){this.__proto__=C.Cd;this.Ra._Done();this.FH._Done();this.BY._Done();this.OG._Done(
);this.YF._Done();this.AaY._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.Ra._ReInit();this.FH._ReInit();this.BY._ReInit();this.
OG._ReInit();this.YF._ReInit();this.AaY._ReInit();this.I_(A.aaR(A.acf.Temperature
));this.BY.T(A.aaR(A.acf.Arh));this.OG.T(A.aaR(A.acf.Undertemperature));this.OG.
A_d(A.aaR(A.acf.AGJ));this.YF.T(A.aaR(A.acf.A4H));},_Mark:function(D){var B;C.Cd.
_Mark.call(this,D);if((B=this.Ra)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FH)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANM={PF:null,PG:null,Sq:null,V0:null,Ss:null,Sr:null,Gc:null,Acm:null,Init:function(
aArg){A.zX([this,this.Bor],this.PG.Q,0);},Bor:function(G){var F;A._GetAutoObject(
A.Device.Device).AwX((F=this.PG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.Iq._Init.call(this.PF={I:this},0);C.BU._Init.call(this.PG={
I:this},0);C.Afi._Init.call(this.Sq={I:this},0);C.Iq._Init.call(this.V0={I:this}
,0);C.Afi._Init.call(this.Ss={I:this},0);C.Afi._Init.call(this.Sr={I:this},0);C.
Gc._Init.call(this.Gc={I:this},0);C.Acm._Init.call(this.Acm={I:this},0);this.__proto__=
C.ANM;var B;this.N.H(Xa);this.I_(A.aaR(A.acf.Device));this.PF.H(AhX);this.PF.Aj(
true);this.PF.T(A.aaR(A.acf.A_Z));this.PF.Bi(false);this.PF.F$(2);this.PF.EU(60);
this.PF.IO(A.aaR(A.acf.AGY));this.PF.I$(A.aaR(A.acf.AGY));this.PG.H(AW0);this.PG.
Aj(true);this.PG.T(A.aaR(A.acf.A_6));this.PG.Bi(true);this.PG.Bx(0);this.PG.F$(-
1);this.PG.EU(1);this.Sq.H(Z$);this.Sq.Aj(true);this.Sq.T(A.aaR(A.acf.HF));this.
Sq.Bi(false);this.Sq.Bx(0);this.Sq.F$(-1);this.Sq.EU(1);this.V0.H(Ak$);this.V0.Aj(
true);this.V0.T(A.aaR(A.acf.A45));this.V0.Bi(true);this.V0.IO(Aaa);this.V0.I$(Aaa
);this.Ss.H(AcL);this.Ss.Aj(true);this.Ss.T(A.aaR(A.acf.AsH));this.Ss.Bi(false);
this.Ss.Bx(1);this.Ss.F$(-1);this.Ss.EU(1);this.Sr.H(Aye);this.Sr.Aj(true);this.
Sr.T(A.aaR(A.acf.Asl));this.Sr.Bi(true);this.Sr.Bx(0);this.Sr.F$(-1);this.Sr.EU(
1);this.Acm.At(A._GetAutoObject(A.Device.Device).Axy);this.J(this.PF,0);this.J(this.
PG,0);this.J(this.Sq,0);this.J(this.V0,0);this.J(this.Ss,0);this.J(this.Sr,0);this.
PF.At([B=A._GetAutoObject(A.Device.Device),B.A8H,B.BaQ]);this.PG.At([B=this.Acm,
B.B_,B.B$]);this.PG.CK(this.Acm);this.Sq.CK(this.Gc);this.Sq.Akw([B=A._GetAutoObject(
A.Device.Device),B.AEp,B.AIG]);this.V0.At([B=A._GetAutoObject(A.Device.Device),B.
A78,B.BaB]);this.Ss.CK(this.Gc);this.Ss.Akw([B=A._GetAutoObject(A.Device.Device)
,B.A8Q,B.BaV]);this.Sr.CK(this.Gc);this.Sr.Akw([B=A._GetAutoObject(A.Device.Device
),B.ASk,B.AZR]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.PF._Done(
);this.PG._Done();this.Sq._Done();this.V0._Done();this.Ss._Done();this.Sr._Done(
);this.Gc._Done();this.Acm._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.PF._ReInit();this.PG._ReInit();this.Sq._ReInit();this.
V0._ReInit();this.Ss._ReInit();this.Sr._ReInit();this.Gc._ReInit();this.Acm._ReInit(
);this.I_(A.aaR(A.acf.Device));this.PF.T(A.aaR(A.acf.A_Z));this.PF.IO(A.aaR(A.acf.
AGY));this.PF.I$(A.aaR(A.acf.AGY));this.PG.T(A.aaR(A.acf.A_6));this.Sq.T(A.aaR(A.
acf.HF));this.V0.T(A.aaR(A.acf.A45));this.Ss.T(A.aaR(A.acf.AsH));this.Sr.T(A.aaR(
A.acf.Asl));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.PF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AT6={V3:null,V2:
null,QK:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BhP
],this.QK.Q,0);},BhP:function(G){var F;A._GetAutoObject(A.Device.Device).Akq((F=
this.QK.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
Nb._Init.call(this.V3={I:this},0);C.Nb._Init.call(this.V2={I:this},0);C.AUm._Init.
call(this.QK={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AT6;var B;this.I_(A.aaR(A.acf.Asd));this.V3.H(IT);this.
V3.Aj(true);this.V3.T(A.aaR(A.acf.AjA));this.V3.Bi(false);this.V3.Ne(87);this.V2.
H(AW1);this.V2.Aj(true);this.V2.T(A.aaR(A.acf.Aqf));this.V2.Bi(true);this.V2.Ne(
88);this.QK.H(UV);this.QK.Aj(true);this.QK.T(A.aaR(A.acf.A4M));this.QK.Bi(false);
this.QK.F$(-1);this.QK.EU(1);this.EartagNrAssignmentMode.At(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V3,0);this.J(this.V2,0);this.J(this.
QK,0);this.V3.AR=[B=this.V3,B.Nh];this.V2.AR=[B=this.V2,B.Nh];this.QK.At([B=this.
EartagNrAssignmentMode,B.B_,B.B$]);this.QK.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.V3._Done();this.V2._Done(
);this.QK._Done();this.EartagNrAssignmentMode._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V3._ReInit();this.V2._ReInit();this.QK._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I_(A.aaR(A.acf.Asd));this.V3.T(A.aaR(
A.acf.AjA));this.V2.T(A.aaR(A.acf.Aqf));this.QK.T(A.aaR(A.acf.A4M));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WU={Q:null,TransponderProtocolToString:
null,Apj:null,Background:null,Y:null,Sk:null,GM:null,PL:null,OI:null,Po:null,C6:
null,EV:null,SJ:null,N1:null,CountryToString:null,At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},Kd:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GM.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).Bil();if(BM<900){var J4=A._GetAutoObject(
A.Device.Converter).ANq(BM);if(!!J4)this.C6.R(((this.CountryToString.Lt(J4)+AcJ)+
BM.toFixed())+Oa);else this.C6.R(BM.toFixed());if(J4===10){var AJ7=this.A6E((F=this.
Q,F[1].call(F[0])).Id);this.C6.R(this.C6.String+((((AHK+this.Apj.Bpb(AJ7))+AcJ)+
A.abl(this.Apj.Bpa(AJ7),2,10))+Oa));}this.C6.Z(true);this.Po.Z(true);this.OI.Z(false
);this.PL.Z(false);}else{this.OI.R(((A._GetAutoObject(A.Device.Converter).Bhc(BM
)+AcJ)+BM.toFixed())+Oa);this.OI.Z(true);this.PL.Z(true);this.C6.Z(false);this.Po.
Z(false);}if(BM===276){this.EV.R(this.Apj.BR(this.A6E((F=this.Q,F[1].call(F[0])).
Id)));this.EV.Z(true);}else this.EV.Z(false);this.N1.R(this.TransponderProtocolToString.
BR((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GM.R(A.jV);this.OI.
R(A.jV);this.EV.R(A.jV);this.C6.R(A.jV);this.N1.R(A.jV);}},A6E:function(J2){var Qu=
0;var J4=A._GetAutoObject(A.Device.Converter).WV(J2);switch(J4){case 10:{var Gg=
A._GetAutoObject(A.Device.Helper).Sf(J2,8,2)|0;Qu=A._GetAutoObject(A.Device.Converter
).ACL(Gg);}break;default:;}return Qu;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apj={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Sk={I:this},0);C.CH._Init.call(this.GM={I:this},0);C.CH._Init.
call(this.PL={I:this},0);C.CH._Init.call(this.OI={I:this},0);C.CH._Init.call(this.
Po={I:this},0);C.CH._Init.call(this.C6={I:this},0);C.CH._Init.call(this.EV={I:this
},0);C.CH._Init.call(this.SJ={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WU;
this.H(AcK);this.Background.AZ(0x3F);this.Background.H(AcK);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcK);this.Y.JQ(9);this.Sk.H(AW2);this.Sk.Aj(true
);this.Sk.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.Sk.A5(0x11);this.Sk.L(A.jb.
Text);this.GM.H(AHL);this.GM.Aj(true);this.GM.R(AW3);this.GM.A5(0x14);this.GM.L(
A.jb.Text);this.PL.H(AHM);this.PL.Aj(true);this.PL.R(A.aaR(A.acf.A_t)+A.aaR(A.acf.
Colon));this.PL.A5(0x11);this.PL.L(A.jb.Text);this.OI.H(AHN);this.OI.Aj(true);this.
OI.R(AW4);this.OI.A5(0x14);this.OI.L(A.jb.Text);this.Po.H(AHM);this.Po.Aj(true);
this.Po.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Po.A5(0x11);this.Po.L(A.jb.Text
);this.C6.H(AHN);this.C6.Aj(true);this.C6.R(AW5);this.C6.A5(0x14);this.C6.L(A.jb.
Text);this.EV.H(AW6);this.EV.Aj(true);this.EV.R(AW7);this.EV.A5(0x14);this.EV.L(
A.jb.Text);this.SJ.H(AW8);this.SJ.Aj(true);this.SJ.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SJ.A5(0x11);this.SJ.L(A.jb.Text);this.N1.H(AW9);this.N1.Aj(true);this.
N1.R(AW_);this.N1.A5(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sk,0);this.J(this.GM,0);this.J(this.PL,0);this.J(this.OI,0
);this.J(this.Po,0);this.J(this.C6,0);this.J(this.EV,0);this.J(this.SJ,0);this.J(
this.N1,0);this.Sk.S(A.aaL(A.fl.Ak));this.Sk.A2(A.aaL(A.fl.Bh));this.GM.S(A.aaL(
A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bh));this.PL.S(A.aaL(A.fl.Ak));this.PL.A2(A.aaL(
A.fl.Bh));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bh));this.Po.S(A.aaL(A.
fl.Ak));this.Po.A2(A.aaL(A.fl.Bh));this.C6.S(A.aaL(A.fl.Ak));this.C6.A2(A.aaL(A.
fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh));this.SJ.S(A.aaL(A.fl.
Ak));this.SJ.A2(A.aaL(A.fl.Bh));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apj._Done();this.Background._Done();this.Y._Done();this.Sk._Done();
this.GM._Done();this.PL._Done();this.OI._Done();this.Po._Done();this.C6._Done();
this.EV._Done();this.SJ._Done();this.N1._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apj._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sk.
_ReInit();this.GM._ReInit();this.PL._ReInit();this.OI._ReInit();this.Po._ReInit(
);this.C6._ReInit();this.EV._ReInit();this.SJ._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Sk.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.PL.R(A.aaR(A.acf.A_t
)+A.aaR(A.acf.Colon));this.Po.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.SJ.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Sk.S(A.aaL(A.fl.Ak));this.Sk.A2(A.aaL(A.fl.
Bh));this.GM.S(A.aaL(A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bh));this.PL.S(A.aaL(A.fl.Ak
));this.PL.A2(A.aaL(A.fl.Bh));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bh
));this.Po.S(A.aaL(A.fl.Ak));this.Po.A2(A.aaL(A.fl.Bh));this.C6.S(A.aaL(A.fl.Ak)
);this.C6.A2(A.aaL(A.fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh)
);this.SJ.S(A.aaL(A.fl.Ak));this.SJ.A2(A.aaL(A.fl.Bh));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QS={D2:null,A_H:A.jV,Ai:function(Ae){C.Fm.Ai.call(
this,Ae);if(this.Mp.Fo())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zn(this.G8.AQ);},Zs:function(E){if(this.A_H===E)return;this.A_H=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fm._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QS;this.Background.H(AW$);this.
Mp.H(W1);this.OB.H(AHO);this.QY.H(AHO);this.D2.H(AXa);this.D2.Z(false);this.J(this.
D2,0);this.G8.S(A.aaL(A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fm;this.D2._Done();C.Fm._Done.call(this
);},_ReInit:function(){C.Fm._ReInit.call(this);this.D2._ReInit();this.G8.S(A.aaL(
A.fl.Af));this.G8.A2(A.aaL(A.fl.Ak));this.G8.Ct(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,Aez:null,Ap:null,Text:null
,DK:A.jV,AmH:0,MZ:0,Ja:0,A48:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BBQ:function(G){this.Ap.H(this.Text.M);this.
Aez.H(this.Text.M);},Zn:function(E){if(this.AmH===E)return;this.AmH=E;this.Aez.L(
E);this.Text.L(E);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hl:function(E){
if(this.Ja===E)return;this.Ja=E;this.Text.Hl(E);},Blb:function(E){if(this.A48===
E)return;this.A48=E;this.Text.A5(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.Aez={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHP);
this.Aez.AZ(0x8);this.Aez.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHP);this.Text.Hl(5);this.Text.I9(true);this.Text.A5(0x14);this.
Text.L(A.jb.Text);this.J(this.Aez,0);this.J(this.Ap,0);this.J(this.Text,0);this.
Aez.Aw(A.aaL(A.ach.APL));this.Ap.Aw(A.aaL(A.ach.APK));this.Text.Q2([this,this.BBQ
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Aez._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Aez._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T4={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALc(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkJ();A._GetAutoObject(A.Device.Helper).Asi();},Ig:function(G){},AcP:function(
s){this.Ig(s);},A24:function(G){A._GetAutoObject(C.A$).Fy();},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},ALc:function(G){},BFY:function(s){this.ALc(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T4;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CX(A.jV);this.Dq(C.AqT);this.
DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(Fe);this.Y.JQ(9);this.Ay.H(
Is);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A24
];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVp={Wu:function(
G){this.Agr();this.I0(A.aaR(A.acf.AUZ),[this,this.ATr],7);this.I0(A.aaR(A.acf.Ase
),[this,this.Ble],6);this.I0(A.aaR(A.acf.AF6),[this,this.ATd],3);this.I0(A.aaR(A.
acf.AnS),[this,this.AwL],2);this.I0(A.aaR(A.acf.AdP),[this,this.AEI],1);this.I0(
A.aaR(A.acf.Aus),[this,this.AEC],0);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abn:function(){return C.AM3;},Abo:function(){return C.APt;
},Q5:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var ABo=A._NewObject(
A.Device.BoolFilterCriterion,0);ABo.Initialize(12,0,true,true);Be.CV(ABo);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(this,G);if(this.Akb()===
false){this.N.Cv(A.aaL(A.ach.Ase));this.N.Ck=[this,this.A5J];this.N.FN(A.jV);}this.
N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(41);},_Init:
function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AVp;var B;this.Dq(C.APp
);this.Dv(A.aaR(A.acf.A7x));this.AwG([B=A._GetAutoObject(A.Device.Device),B.A8U,
B.BaW]);},_ReInit:function(){C.GZ._ReInit.call(this);this.Dv(A.aaR(A.acf.A7x));}
,_className:"Application::WatchListScreen"};C.AL_={DE:function(G){var B;var JA=(
A.Core.BK.isPrototypeOf(G)?G:null);if(((JA.CO===4)||(JA.CO===5))===false){C.AxS.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var Bcj=A._GetAutoObject(A.Device.Device).KV;var Td;if(JA.CO===5)Td=5;else Td=4;
var AA5=A._GetAutoObject(A.acj.DU).BcT(Bcj,Td);var Gt=(((Bcj+((AA5/2)|0))/AA5)|0
)*AA5;if(JA.CO===4)Gt+=AA5;else if(JA.CO===5)Gt-=AA5;if(Gt>999900)Gt=999900;if(Gt<
100)Gt=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(Gt);},Asw:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.
CE],this);else A._GetAutoObject(C.A$).Fy();},WI:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).Asy();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A_X()===false){this.H7.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KV);this.H7.Cg(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A$).Fy();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H7.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KV);this.H7.Cg(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A$).Fy();}},AkQ:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.Co],this);},BcS:function(){var
ALq=A._GetAutoObject(A.Device.Helper).W.AhR(1);if(ALq>=100000)ALq=(Math.round(ALq
/1000)|0)*1000;return ALq;},_Init:function(aArg){C.AxS._Init.call(this,aArg);this.
__proto__=C.AL_;},_className:"Application::AnimalActionWeighingScreen"};C.AVa={V7:
null,YH:null,Ra:null,AeK:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
BU._Init.call(this.V7={I:this},0);C.BU._Init.call(this.YH={I:this},0);C.Ra._Init.
call(this.Ra={I:this},0);C.AeK._Init.call(this.AeK={I:this},0);this.__proto__=C.
AVa;var B;this.I_(A.aaR(A.acf.AGZ));this.V7.H(AhX);this.V7.Aj(true);this.V7.T(A.
aaR(A.acf.A$k));this.V7.Bi(true);this.V7.Bx(0);this.YH.H(UV);this.YH.Aj(true);this.
YH.T(A.aaR(A.acf.A$j));this.YH.Bi(false);this.J(this.V7,0);this.J(this.YH,0);this.
V7.At([B=this.Ra,B.B_,B.B$]);this.V7.CK(this.Ra);this.YH.At([B=this.AeK,B.B_,B.B$
]);this.YH.CK(this.AeK);},_Done:function(){this.__proto__=C.Cd;this.V7._Done();this.
YH._Done();this.Ra._Done();this.AeK._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.V7._ReInit();this.YH._ReInit();this.Ra._ReInit();
this.AeK._ReInit();this.I_(A.aaR(A.acf.AGZ));this.V7.T(A.aaR(A.acf.A$k));this.YH.
T(A.aaR(A.acf.A$j));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.
V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ra)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeK={MassUnitToString:null
,Dt:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AwH(E);}
,Init:function(aArg){var B;A.zX([this,this.Bdv],[B=A._GetAutoObject(A.Device.Device
),B.ASj,B.AZQ],0);A.pe([this,this.Bdv],this);},Bdv:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeK;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxS={H7:null,Ajq:null,MassUnit:null,
KV:null,Vv:null,AnF:null,Acz:null,ZV:null,O0:null,Yx:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).AfZ());A.zX([this,this.AKs],[B=A._GetAutoObject(
A.Device.Device),B.AEs,B.AIJ],0);A.zX([this,this.BAB],[B=A._GetAutoObject(A.Device.
Device),B.AEy,B.AIN],0);A.zX([this,this.BAC],[B=this.O0,B.Arp,B.Jw],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxL();this.AcB();},IY:function(G){this.WI(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).Asy();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);this.H7.Gp();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGF();else{var BB5=this.BcS();this.ZV.Z(true);this.Acz.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BB5);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).Asy();else A._GetAutoObject(A.Device.Device).AhJ(
);},AxL:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bgh();break;case 3:{this.Bgh();this.ZV.Z(false);this.Acz.Z(false
);if(this.A_X()){this.Vv.Z(false);this.KV.H(A.abO(this.KV.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O0.Ar(true);this.O0.Z(true);this.Bb(this.O0);}}break;
case 4:this.KV.R(A.aaR(A.acu.Ake));break;default:A.ab5("%s%e",AHQ,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcB:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C1(A.aaL(A.ach.Aeu));this.N.Cv(null);
this.Yx.Z(false);this.N.C5(A.aaL(A.ach.AmV));this.N.CX(A.jV);}break;case 3:{if(this.
O0.AY<=1){this.N.C1(null);this.N.Cv(null);this.Yx.Z(false);this.N.C5(null);}else{
this.N.C1(A.aaL(A.ach.AmT));this.N.Cv(A.aaL(A.ach.Aev));this.Yx.Z(true);this.N.C5(
null);}this.N.CX(A.aaR(A.acf.Ok));}break;case 4:{this.N.C5(A.aaL(A.ach.AvC));this.
N.Co=[this,this.Bk4];this.N.Cv(null);this.Yx.Z(false);this.N.CX(A.jV);}break;default:;
}},Asw:function(G){},BvY:function(s){this.Asw(s);},WI:function(G){},AZ8:function(
s){this.WI(s);},Bk4:function(G){this.CC(this);},BAB:function(G){this.Am();},AKs:
function(G){this.Am();},A_X:function(){var Auj=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auj>0)&&!A._GetAutoObject(A.Device.Helper).Bo_(Auj
,this.H7.Timestamp);},AkQ:function(G){},AZ7:function(s){this.AkQ(s);},BAC:function(
G){this.Am();},Bgh:function(){this.KV.R(A._GetAutoObject(A.Device.Converter).Ak4(
A._GetAutoObject(A.Device.Device).KV));},BcS:function(){return A._GetAutoObject(
A.Device.Helper).W.AhR(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Ajq={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.Vv={I:this
},0);C.AxK._Init.call(this.AnF={I:this},0);A.acg.Aek._Init.call(this.Acz={I:this
},0);A.acg.Aek._Init.call(this.ZV={I:this},0);C.AVu._Init.call(this.O0={I:this},
0);A.acg.Ap._Init.call(this.Yx={I:this},0);this.__proto__=C.AxS;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dq(C.II);this.Ajq.AZ(0x3F);this.Ajq.H(Ayf);this.Ajq.
L(A.jb.CJ);this.MassUnit.H(AXb);this.MassUnit.A5(0x9);this.MassUnit.R(A.aaR(A.acf.
Az1));this.MassUnit.L(A.jb.Text);this.KV.H(AXc);this.KV.A5(0x14);this.KV.R(A.aaR(
A.acu.Ake));this.KV.L(A.jb.Text);this.Vv.H(AXd);this.Vv.R(A.aaR(A.acf.A$v));this.
Vv.L(A.jb.Text);this.Vv.Z(true);this.AnF.H(AXe);this.Acz.H(AHR);this.Acz.L(A.jb.
Ad7);this.Acz.Z(false);this.ZV.H(AXf);this.ZV.L(A.jb.Ad7);this.ZV.BlS(true);this.
ZV.Z(false);this.O0.AZ(0x3F);this.O0.H(Ayf);this.O0.Ar(false);this.O0.Z(false);this.
Yx.H(AXg);this.Yx.L(A.jb.Bm);this.J(this.Ajq,0);this.J(this.MassUnit,0);this.J(this.
KV,0);this.J(this.Vv,0);this.J(this.Acz,0);this.J(this.ZV,0);this.J(this.O0,0);this.
J(this.Yx,0);this.N.CE=[this,this.BvY];this.N.Ck=[this,this.AZ7];this.N.Co=[this
,this.AZ8];this.MassUnit.S(A.aaL(A.fl.EK));this.KV.S(A.aaL(A.fl.Aen));this.Vv.S(
A.aaL(A.fl.EK));this.Acz.Zr(this.AnF);this.ZV.Zr(this.AnF);this.H7=A._NewObject(
A.Device.Rating,0);this.O0.LY(A._GetAutoObject(A.Device.Helper).W);this.O0.Akx(this.
H7);this.Yx.Aw(A.aaL(A.ach.AQA));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajq._Done();this.MassUnit._Done();this.KV._Done();this.Vv._Done();this.
AnF._Done();this.Acz._Done();this.ZV._Done();this.O0._Done();this.Yx._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajq._ReInit();
this.MassUnit._ReInit();this.KV._ReInit();this.Vv._ReInit();this.AnF._ReInit();this.
Acz._ReInit();this.ZV._ReInit();this.O0._ReInit();this.Yx._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az1));this.KV.R(A.aaR(A.acu.Ake));this.Vv.R(A.aaR(A.acf.A$v));this.
MassUnit.S(A.aaL(A.fl.EK));this.KV.S(A.aaL(A.fl.Aen));this.Vv.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVy={FH:null
,OJ:null,M_:null,C9:null,LV:null,T1:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FH,B.B_,B.B$],0);A.pe([this,this.GH],this);},CC:function(G){C.Cd.CC.
call(this,G);A.pe([this,this.GH],this);},BjR:function(G){var F;this.LV.BS.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BS.R((A._GetAutoObject(A.Device.Converter).S5((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aaq());},GH:function(
G){var AJo=true;if(this.FH.Q===1)AJo=false;this.C9.Aj(AJo);this.C9.Ar(AJo);this.
C9.Z(AJo);A._GetAutoObject(A.Device.Helper).ANk(this.Y);},_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.AMu._Init.call(this.FH={I:this},0);C.AG_._Init.call(this.
OJ={I:this},0);C.AUr._Init.call(this.M_={I:this},0);C.AkO._Init.call(this.C9={I:
this},0);C.Iq._Init.call(this.LV={I:this},0);C.BU._Init.call(this.T1={I:this},0);
this.__proto__=C.AVy;var B;this.I_(A.aaR(A.acf.Settings));this.Hh.R(A.aaR(A.acf.
AsK));this.FH.At(A._GetAutoObject(A.Device.Device).AnimalType);this.OJ.At(A._GetAutoObject(
A.Device.Device).OJ);this.M_.H(AXh);this.M_.Aj(true);this.C9.H(AsY);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KH));this.C9.Bi(true);this.C9.F$(1000);this.C9.EU(99000);
this.LV.H(AsZ);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A4Q));this.LV.F$(50);this.
LV.EU(2000);this.LV.ASW(A._GetAutoObject(A.acj.DU).AzI());this.T1.H(AcL);this.T1.
Aj(true);this.T1.T(A.aaR(A.acf.A7f));this.T1.F$(-1);this.T1.EU(1);this.JW(this.Y
,-1);this.JW(this.Ay,-1);this.J(this.M_,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T1,0);this.M_.AeR([B=this.M_,B.FU]);this.M_.Gq([this,this.D_,this.GQ]);this.
M_.Akt(A.aaL(A.ach.Edit));this.M_.LX([B=this.M_,B.AyL]);this.M_.L0(A.aaL(A.ach.AnJ
));this.M_.At([B=this.FH,B.B_,B.B$]);this.M_.CK(this.FH);this.M_.A9R([B=this.FH,
B.ASC,B.AZ5]);this.M_.A9Q([B=this.FH,B.ASB,B.AZ4]);this.C9.Gq([this,this.D_,this.
GQ]);this.C9.LX([B=this.M_,B.AyL]);this.C9.L0(A.aaL(A.ach.AnJ));this.C9.At([B=this.
FH,B.A76,B.ASI]);this.LV.Gq([this,this.D_,this.GQ]);this.LV.LX([B=this.M_,B.AyL]
);this.LV.L0(A.aaL(A.ach.AnJ));this.LV.At([B=this.FH,B.A75,B.ASG]);this.LV.A94([
this,this.BjR]);this.T1.Gq([this,this.D_,this.GQ]);this.T1.At([B=this.OJ,B.B_,B.
B$]);this.T1.CK(this.OJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;
this.FH._Done();this.OJ._Done();this.M_._Done();this.C9._Done();this.LV._Done();
this.T1._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.FH._ReInit();this.OJ._ReInit();this.M_._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T1._ReInit();this.I_(A.aaR(A.acf.Settings));this.Hh.R(A.aaR(A.acf.
AsK));this.C9.T(A.aaR(A.acf.KH));this.LV.T(A.aaR(A.acf.A4Q));this.T1.T(A.aaR(A.acf.
A7f));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.FH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUr={YT:null,Init:
function(aArg){var B;A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Device),B.
ASj,B.AZQ],0);A.pe([this,this.AfC],this);},A3w:function(G){A._GetAutoObject(A.Device.
Device).A6(37,true,A.jV,0,[this,this.Ba_]);},A1k:function(G){var F;if(this.A8===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzI();if(this.D7<this.
AlJ)this.D7=this.AlJ;if(this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.
D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzI();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JT
)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);}}this.DJ(this);this.Am();
},A1W:function(G){var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzI();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.JU
)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzI();if(this.DW>this.AlE)this.DW=
this.AlE;if(this.DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(
this.JT,0);}}this.DJ(this);this.Am();},GH:function(G){this.PJ.R(AHS+A._GetAutoObject(
A.Device.Converter).S5(this.D7,2,true));this.PH.R(AHS+A._GetAutoObject(A.Device.
Converter).S5(this.DW,2,true));this.Su.R(A._GetAutoObject(A.acj.DU).Aaq());this.
YT.R(this.Su.String);},A27:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Ask(this
);},A1P:function(Ath){if(Ath===1)return this.PJ;else if(Ath===2)return this.PH;else
return null;},_Init:function(aArg){C.Acj._Init.call(this,aArg);A.acg.Text._Init.
call(this.YT={I:this},0);this.__proto__=C.AUr;this.T(A.aaR(A.acf.ACg));this.AlE=
2000;this.AlJ=20;this.Background.H(KX);this.V.H(BD);this.V.R(A.aaR(A.acf.ACg)+A.
aaR(A.acf.Colon));this.V.A5(0x12);this.AkG.H(AXi);this.AkH.H(AXj);this.Q3.H(AXk);
this.QC.H(AXl);this.PH.H(AXm);this.PJ.H(AXn);this.Su.H(AXo);this.YT.H(AXp);this.
YT.I9(false);this.YT.A5(0x12);this.YT.L(0xFF000000);this.JW(this.H4,-8);this.J(this.
YT,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YT.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acj;this.YT._Done();C.Acj.
_Done.call(this);},_ReInit:function(){C.Acj._ReInit.call(this);this.YT._ReInit();
this.T(A.aaR(A.acf.ACg));this.V.R(A.aaR(A.acf.ACg)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YT.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acj._Mark.call(this,D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABt={M:P8,A6R:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6R();},_Init:function(
aArg){A.Graphics.Hy._Init.call(this,aArg);this.__proto__=C.ABt;},_className:"Application::AbstractPath"
};C.Ap_={DP:null,DY:null,Rf:null,AdL:null,PZ:null,AdK:null,Aur:1,A4m:0,Bb3:false
,AzE:true,CP:function(){this.Bgd(this);},Init:function(aArg){var B;this.Bb(this.
AdL);A.zX([this,this.Bgd],[B=this.AdL,B.A8a,B.BaF],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdK.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bhv(this.Aur+this.A4m)));if(this.Aur===1)this.PZ.R(A.aaR(A.acf.AM_));else this.
PZ.R(A.aaR(A.acf.Bg7));},CC:function(G){if(this.AzE)this.AzE=false;else if(this.
DP.Bca()===false)A.pe([this,this.A2E],this);else if(this.DP.AzT())this.DP.Ac3();
A.zV([this,this.Af7],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Af7],A._GetAutoObject(A.Device.Device).An,0);},A2E:function(G){this.
Bb3=true;A._GetAutoObject(C.A$).Fy();},Bgd:function(G){var B;var BcC=(C.Wg.isPrototypeOf(
B=this.AdL.AV)?B:null);if(!!BcC){var Ay1=A._NewObject(A.Device.ActionToString,0);
this.Rf.R(Ay1.Lt(BcC.Action));}},Ig:function(G){var Cx=(C.Wg.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DP.Qk(Cx.Action);this.Bk7(this.Aur+1);},Bz8:function(G){
if(A._GetAutoObject(C.Pi).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bk7:function(E){
if(this.Aur===E)return;this.Aur=E;this.Am();},Af7:function(G){if((this.Bb3===false
)&&(this.DP.Bca()===false))A.pe([this,this.A2E],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);C.CH._Init.call(this.
Rf={I:this},0);C.ARo._Init.call(this.AdL={I:this},0);C.CH._Init.call(this.PZ={I:
this},0);A.acg.Text._Init.call(this.AdK={I:this},0);this.__proto__=C.Ap_;this.Background.
L(A.jb.CS);this.N.H(Xa);this.N.Z(true);this.Dq(C.II);this.DY.AZ(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CJ);this.Rf.H(AHT);this.Rf.L(A.jb.Text);this.AdL.H(AXq);this.
PZ.H(Ayg);this.PZ.R(A.aaR(A.acf.AM_));this.PZ.L(A.jb.Text);this.AdK.H(AHU);this.
AdK.R(AXr);this.AdK.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rf,0);this.J(this.
AdL,0);this.J(this.PZ,0);this.J(this.AdK,0);this.N.CE=[this,this.A2E];this.N.Ck=[
this,this.Bz8];this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(A.ach.Aex));this.Rf.S(
A.aaL(A.fl.EK));this.Rf.A2(A.aaL(A.fl.Af));this.Rf.Ct(A.aaL(A.fl.Ak));this.AdL.A25=[
this,this.Ig];this.PZ.S(A.aaL(A.fl.EK));this.PZ.A2(A.aaL(A.fl.Af));this.PZ.Ct(A.
aaL(A.fl.Ak));this.AdK.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rf._Done();this.
AdL._Done();this.PZ._Done();this.AdK._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rf._ReInit();this.AdL._ReInit();
this.PZ._ReInit();this.AdK._ReInit();this.PZ.R(A.aaR(A.acf.AM_));this.Rf.S(A.aaL(
A.fl.EK));this.Rf.A2(A.aaL(A.fl.Af));this.Rf.Ct(A.aaL(A.fl.Ak));this.PZ.S(A.aaL(
A.fl.EK));this.PZ.A2(A.aaL(A.fl.Af));this.PZ.Ct(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdK)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARo={Ia:null,A25:null,Cq:null,Y:null,Ay:
null,A3K:0,Init:function(aArg){A.zV([this,this.ABj],this.Ia,0);A.zV([this,this.Bga
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Auo],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABj],this);},Bb:function(E){var A2A=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2A)A.abo([this,this.A8a,this.BaF],0);},DE:
function(G){var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case
7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QE(X,Fh,0x415);
if((Fh===5)&&!X){var AK5=this.AV;while(!X){AK5=this.QE(AK5,2,0x415);if(!!AK5)X=this.
QE(AK5,Fh,0x415);else break;}}if(!!X)this.Bb(X);var GX=(C.Wg.isPrototypeOf(B=this.
AV)?B:null);if(!!GX)this.A3K=(C.Wg.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3K=0;A.pe([this,this.MO],this);},A1d:function(ED){var EP=A._GetAutoObject(C.DP).
Bci(ED,this.A25);this.J(EP,0);},AoW:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(AdG);
}},ABj:function(G){this.AoW();var O;var CB=A._GetAutoObject(C.Pi).NP();for(O=0;O<
CB;O=O+1){var Aah=A._GetAutoObject(C.Pi).OC(O);this.A1d(Aah);}A.pe([this,this.Bga
],this);A.pe([this,this.Bpw],this);A.pe([this,this.Auo],this);},Bpw:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wg.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Auo:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATm(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATm(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATm(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((
B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Bga:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pi).NU(Aa.Action)&&A._GetAutoObject(C.
DP).A4l(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3K===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARo;this.H(AXs);this.Cq.Filter=147;this.Y.AZ(0xB);this.Y.H(AXt);this.Y.JQ(9);this.
Ay.AZ(0xA);this.Ay.H(AXu);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.El=[this,this.Fj];this.Ia=A._GetAutoObject(
C.Pi);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A25)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fq={Ej:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fq;this.N.Ar(false);this.Ej.H(BD);this.Ej.Ar(false
);this.AK.H(Fe);this.AK.L(A.jb.Ad7);this.Text.H(BD);this.Text.R(AXv);this.Text.L(
0xFF000000);this.Ap.H(P8);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cv(A.aaL(A.ach.Aex));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC5));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaO={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IY:function(G){},Ai:function(Ae){C.BU.
Ai.call(this,Ae);var FQ=A.jb.Ad7;var GW=A.jb.CS;if(this.Hj){FQ=A.jb.Text;GW=A.jb.
Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.Qq){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.Hw.L(A.
jb.CS);this.H4.L(A.jb.CS);},Hk:function(G){var B;var Ge=this.Dz.G4;var Cz=(C.CH.
isPrototypeOf(B=this.Dz.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bh));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gj(Ge));else Cz.R(W_);Cz.H(A.
abK(Cz.M,[this.Dz.V9,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BU._Init.
call(this,aArg);this.__proto__=C.AaO;this.Dz.AE_(170);this.Dz.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Aje={C8:null,Init:function(
aArg){this.V.Text.A5(0x11);this.V.Text.Hl(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cn.Ai.call(this,Ae);var FQ=A.jb.Ad7;var GW=A.jb.CS;if(this.Hj){FQ=A.jb.Text;
GW=A.jb.Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.
Qq){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}},_Init:function(
aArg){C.Cn._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aje;this.C8.H(AXw);this.C8.Cu(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajn)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.C8._Done();C.Cn._Done.
call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Cn._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALR={Y:null,RI:null,Tp:null
,Tq:null,Tr:null,AdJ:null,XI:null,Vn:null,Vo:null,AaN:null,Ay:null,Init:function(
aArg){this.Bb(this.RI);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},IY:
function(G){this.Bft(this);},Ll:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.Bft];this.BP.Ck=null;this.BP.Co=null;this.BP.CX(A.jV);
this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},AAY:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XI.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XI.Q))A._GetAutoObject(C.AutoActions).J(this.XI.Q);if(!!this.Vn.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vn.Q))A._GetAutoObject(C.AutoActions
).J(this.Vn.Q);if(!!this.Vo.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vo.
Q))A._GetAutoObject(C.AutoActions).J(this.Vo.Q);if(!!this.AaN.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaN.Q))A._GetAutoObject(C.AutoActions).J(this.AaN.Q
);A._GetAutoObject(C.AutoActions).Cg();},Bft:function(G){if(this.Bze()===true){this.
AAY();this.AaB(this);}else A._GetAutoObject(A.Device.Device).A6(27,true,A.jV,0,null
);},Bze:function(){return(!!this.XI.C7(this.XI.Q)||!!this.Vn.C7(this.Vn.Q))||!!this.
Vo.C7(this.Vo.Q);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true
,null,null);},BAi:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XI.Ato(this);this.Vn.Ato(this);this.Vo.Ato(this);this.AaN.Ato(this);}
,_Init:function(aArg){C.Fq._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaO._Init.call(this.RI={I:this},0);C.AaO._Init.call(this.Tp={I:this},0);C.
AaO._Init.call(this.Tq={I:this},0);C.AaO._Init.call(this.Tr={I:this},0);C.AuW._Init.
call(this.AdJ={I:this},0);C.AutoAction._Init.call(this.XI={I:this},0);C.AutoAction.
_Init.call(this.Vn={I:this},0);C.AutoAction._Init.call(this.Vo={I:this},0);C.AutoAction.
_Init.call(this.AaN={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALR;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.Ts));this.Y.H(L1);this.Y.JQ(1);this.
RI.H(AhX);this.RI.Ar(true);this.RI.Aj(true);this.RI.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajd),P9,AHV));this.Tp.H(UV);this.Tp.Ar(true);this.Tp.Aj(true
);this.Tp.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P9,AHW));this.
Tq.H(Z$);this.Tq.Ar(true);this.Tq.Aj(true);this.Tq.T(A._GetAutoObject(A.Device.Helper
).Nk(A.aaR(A.acf.Ajd),P9,AHX));this.Tr.H(Ak$);this.Tr.Ar(true);this.Tr.Aj(true);
this.Tr.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P9,AHY));this.AdJ.
H(Ayh);this.AdJ.Aj(true);this.AdJ.T(A.aaR(A.acf.A_E));this.Vn.Index=1;this.Vo.Index=
2;this.AaN.Index=3;this.Ay.H(Is);this.J(this.Y,0);this.J(this.RI,0);this.J(this.
Tp,0);this.J(this.Tq,0);this.J(this.Tr,0);this.J(this.AdJ,0);this.J(this.Ay,0);this.
Y.El=[this,this.Fj];this.RI.Zo(A.aaL(A.fl.H1));this.RI.Zp(A.aaL(A.fl.H1));this.RI.
At([B=this.XI,B.B_,B.B$]);this.RI.CK(this.XI);this.Tp.Zo(A.aaL(A.fl.H1));this.Tp.
Zp(A.aaL(A.fl.H1));this.Tp.At([B=this.Vn,B.B_,B.B$]);this.Tp.CK(this.Vn);this.Tq.
Zo(A.aaL(A.fl.H1));this.Tq.Zp(A.aaL(A.fl.H1));this.Tq.At([B=this.Vo,B.B_,B.B$]);
this.Tq.CK(this.Vo);this.Tr.Zo(A.aaL(A.fl.H1));this.Tr.Zp(A.aaL(A.fl.H1));this.Tr.
At([B=this.AaN,B.B_,B.B$]);this.Tr.CK(this.AaN);this.AdJ.AR=[this,this.BAi];this.
Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done();this.RI._Done();
this.Tp._Done();this.Tq._Done();this.Tr._Done();this.AdJ._Done();this.XI._Done();
this.Vn._Done();this.Vo._Done();this.AaN._Done();this.Ay._Done();C.Fq._Done.call(
this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit();this.RI._ReInit(
);this.Tp._ReInit();this.Tq._ReInit();this.Tr._ReInit();this.AdJ._ReInit();this.
XI._ReInit();this.Vn._ReInit();this.Vo._ReInit();this.AaN._ReInit();this.Ay._ReInit(
);this.Text.R(A.aaR(A.acf.Ts));this.RI.T(A._GetAutoObject(A.Device.Helper).Nk(A.
aaR(A.acf.Ajd),P9,AHV));this.Tp.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.
Ajd),P9,AHW));this.Tq.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P9
,AHX));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajd),P9,AHY));
this.AdJ.T(A.aaR(A.acf.A_E));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Tp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cl={Cb:A.abi(16
,0,null),Dt:function(){return 16;},C7:function(aIndex){if(aIndex>=16)return-1;return this.
Cb.Get(aIndex);},DZ:function(A9){var O=0;while(O<16){if(this.Cb.Get(O)===A9)return O;
O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<16){if(this.Cb.Get(O)>
max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Cb=[]).__proto__=C.Cl.Cb;this.__proto__=C.Cl;},_className:"Application::ArraySelection"
};C.AutoAction={Ia:null,Ac3:null,ActionToString:null,Index:0,Init:function(aArg){
A.zV([this,this.Ato],this.Ac3,0);A.pe([this,this.Ato],this);},Dt:function(){return this.
Ia.NP();},C7:function(aIndex){if(aIndex>=this.Dt())return-1;return this.Ia.OC(aIndex
);},Gj:function(aIndex){return this.ActionToString.BR(this.C7(aIndex));},DZ:function(
A9){var O=0;while(O<this.Dt()){if(this.Ia.OC(O)===A9)return O;O=O+1;}return-1;},
H3:function(){var O=0;var max=-1;while(O<this.Dt()){if(this.Ia.OC(O)>max)max=this.
Ia.OC(O);O=O+1;}return max;},Ato:function(G){this.Q=this.Ac3.OC(this.Index);A.abo([
this,this.B_,this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
ActionToString._Init.call(this.ActionToString={I:this},0);this.__proto__=C.AutoAction;
this.Ia=A._GetAutoObject(C.AuG);this.Ac3=A._GetAutoObject(C.AutoActions);this.Init(
aArg);},_Done:function(){this.__proto__=C.AC;this.ActionToString._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.ActionToString._ReInit(
);},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ac3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ActionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAction"
};C.ALW={Atl:0,Init:function(aArg){var B;A.zX([this,this.BdX],[B=A._GetAutoObject(
A.Device.Device),B.A7T,B.Bar],0);A.zX([this,this.BdU],[B=A._GetAutoObject(A.Device.
Device),B.AR8,B.AZL],0);A.pe([this,this.BdX],this);A.pe([this,this.BdU],this);},
Clear:function(){C.Vs.Clear.call(this);this.Atl=0;},Cg:function(){A._GetAutoObject(
A.Device.Device).Arv(this.Atl);A._GetAutoObject(A.Device.Device).Arw(this.toString(
));},BdX:function(G){this.Atl=A._GetAutoObject(A.Device.Device).Pi;A.we(this,0);
},BdU:function(G){this.E3(A._GetAutoObject(A.Device.Device).Aut);A.we(this,0);},
NU:function(ED){if((this.Atl&(((B=ED)<0)?B+0x100000000:B))===(((B=ED)<0)?B+0x100000000:
B))return true;return false;},AUh:function(ED){this.Atl=this.Atl|(((B=ED)<0)?B+0x100000000:
B);},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.ALW;this.Init(
aArg);},_className:"Application::ActiveActionsClass"};C.Pi={_Init:function(){C.ALW.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.ALX={Vq:null,Ay:null,Y:null,JN:null,CP:function(){this.AiF(this);},Init:
function(aArg){A.zV([this,this.AiF],this.Vq,0);A.pe([this,this.AiF],this);},DE:function(
G){C.Fq.DE.call(this,G);this.MO(this);},Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ev];this.BP.Ck=[this,this.A2M];this.BP.Co=[this,this.
A3f];this.BP.C5(A.aaL(A.ach.Aq6));this.BP.Cv(A.aaL(A.ach.AqZ));this.BP.C1(A.aaL(
A.ach.Yt));}return this.BP;},Ev:function(G){if(this.Bx8()>0){this.AAY();this.AaB(
this);}else A._GetAutoObject(A.Device.Device).A6(28,true,A.jV,0,null);},AiF:function(
G){this.AoW();var O;for(O=0;O<this.Vq.NP();O=O+1){var Aah=A._GetAutoObject(C.Pi).
OC(O);this.A0S(Aah);}this.J(this.JN,0);A.aaS([this,this.MO],this);},Fj:function(
G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);
this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},A0S:function(
G_){var Ay1=A._NewObject(A.Device.ActionToString,0);var Aa=A._NewObject(C.Sc,0);
Aa.T(Ay1.BR(G_));Aa.Aj(true);Aa.G4=G_;Aa.A9E(this.Vq.NU(G_));this.J(Aa,0);this.ZA(
Aa);},AoW:function(){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var
AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(AdG);}},AAY:function(){var B;this.
Vq.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===
0x400)&&!(X===this.JN)){var Aa=(C.Sc.isPrototypeOf(X)?X:null);if(!!Aa){this.Vq.J(
Aa.G4);if(Aa.ASh())this.Vq.AUh(Aa.G4);}else A.ab5("%s",Ayi);}X=X.Ah;}this.Vq.Cg(
);},Bx8:function(){var B;var A3L=0;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)&&!(X===this.JN)){var Aa=(C.Sc.isPrototypeOf(X)?X:null
);if(!!Aa){if(Aa.ASh())A3L=A3L+1;}else A.ab5("%s",Ayi);}X=X.Ah;}return A3L;},A2M:
function(G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAe=(
C.Sc.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAe){this.Ahy(AAe,Aa);A.pe([this,this.MO
],this);}}},A3f:function(G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.AV)?B:null);
if(!!Aa){var AAK=(C.Sc.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAK){this.Ahy(Aa,AAK);
A.pe([this,this.MO],this);}}},AqC:function(G){var B;A._GetAutoObject(A.Device.Device
).ResetActiveActions(this);A.pe([this,this.AiF],this);},_Init:function(aArg){C.Fq.
_Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.AuW._Init.call(this.JN={I:this},0);this.__proto__=C.ALX;this.H(Rk
);this.Text.R(A.aaR(A.acf.AD6));this.Ay.H(Is);this.Y.H(L1);this.Y.JQ(1);this.JN.
H(AHZ);this.JN.Aj(true);this.JN.T(A.aaR(A.acf.AqC));this.J(this.Ay,0);this.J(this.
Y,0);this.J(this.JN,0);this.Y.El=[this,this.Fj];this.JN.AR=[this,this.AqC];this.
Vq=A._GetAutoObject(C.Pi);this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;
this.Ay._Done();this.Y._Done();this.JN._Done();C.Fq._Done.call(this);},_ReInit:function(
){C.Fq._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JN._ReInit();this.
Text.R(A.aaR(A.acf.AD6));this.JN.T(A.aaR(A.acf.AqC));this.CP();},_Mark:function(
D){var B;C.Fq._Mark.call(this,D);if((B=this.Vq)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sc={G4:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A5(0x11);this.
V.Text.Hl(10);},Bl:function(aSize){C.T8.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.T8.Ai.call(this,Ae);var Hd=((Ae&0x10
)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FQ=A.jb.Ad7;var GW=A.jb.
Bm;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.L(FQ);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);
}this.LF=Hd;this.KD=Fu;this.Qq=GE;},IY:function(G){this.A3d(this);},A3d:function(
G){this.AEQ(!this.Amu);},A9E:function(E){this.AEQ(E);},ASh:function(){return this.
Amu;},_Init:function(aArg){C.T8._Init.call(this,aArg);this.__proto__=C.Sc;this.Ml.
H(AXx);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vs={CB:0,
Ia:A.abi(17,0,null),OC:function(Hz){return this.Ia.Get(Hz);},NP:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ia.Set(O,0);this.CB=0;},J:function(
ED){if(this.CB>=17)A.ab5("%s",AH0);else{this.Ia.Set(this.CB,ED);this.CB=this.CB+
1;}},Cg:function(){},E3:function(AcR){var AJb=AcR.indexOf(String.fromCharCode(0x2C
),0);var A1e=A.jV;var O=0;this.CB=0;while(O<17)if(AcR===A.jV){this.Ia.Set(O,0);O++;
}else{if(AJb===-1){A1e=AcR;AcR=A.jV;}else{A1e=A.abV(AcR,AJb);AcR=A.ab1(AcR,0,AJb+
1);}var Aah=A.abZ(A1e,0,10)|0;if(this.ADJ(Aah)){this.Ia.Set(this.CB,Aah);this.CB=
this.CB+1;O++;}AJb=AcR.indexOf(String.fromCharCode(0x2C),0);}if(AcR!==A.jV)A.ab5(
"%s",AXy);},toString:function(){var A2r=(((B=this.Ia.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CB;O=O+1)A2r=(A2r+AH1)+(((B=this.Ia.Get(O))<0)?B+
0x100000000:B).toFixed();return A2r;},Axm:function(Hz,ED){if(Hz>=this.CB){A.ab5(
"%s",((((AXz+Hz.toFixed())+AXA)+this.CB.toFixed())+AXB)+AXC);return;}this.Ia.Set(
Hz,ED);},Contains:function(ED){var O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===
ED)return true;return false;},ADJ:function(ED){return true;},DZ:function(ED){var
O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.Ia=[]).__proto__=C.Vs.Ia;this.__proto__=C.Vs;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AME={Init:function(aArg){var B;A.zX([this,this.Bd8
],[B=A._GetAutoObject(A.Device.Device),B.A74,B.Baz],0);A.pe([this,this.Bd8],this
);},Cg:function(){A._GetAutoObject(A.Device.Device).Ako(this.toString());},ADJ:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bd8:function(G){this.E3(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.
__proto__=C.AME;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AME._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wg={Vp:null,Ku:null,A6Q:A.jV,Action:0,A4n:
false,A_q:false,A_8:false,Bl:function(aSize){C.Fm.Bl.call(this,aSize);this.QY.H(
this.Mp.M);this.OB.H(this.QY.M);},Ai:function(Ae){C.Fm.Ai.call(this,Ae);if(!this.
LF){this.Ku.TT.L(A.jb.AmW);this.Ku.QG.Z(true);this.Ku.QG.L(A.jb.AQM);}else if(this.
Qq){this.Ku.TT.L(A.jb.Bm);this.Ku.QG.Z(false);}else if(this.KD){this.Ku.TT.L(A.jb.
Bm);this.Ku.QG.Z(false);}else{this.Ku.TT.L(A.jb.Text);this.Ku.QG.Z(true);this.Ku.
QG.L(A.jb.CS);}},Bk6:function(E){if(this.Action===E)return;this.Action=E;},Bmb:function(
E){if(this.A6Q===E)return;this.A6Q=E;this.Vp.Text.R(E);},ATm:function(E){if(this.
A_8===E)return;this.A_8=E;this.Ku.BmY(!this.Ku.AUG);},AFp:function(E){if(this.A_q===
E)return;this.A_q=E;this.Ku.Z(!this.Ku.Fo());},A87:function(E){if(this.A4n===E)return;
this.A4n=E;this.Vp.Z(E);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Vp._Init.
call(this.Vp={I:this},0);C.Ku._Init.call(this.Ku={I:this},0);this.__proto__=C.Wg;
this.H(AXD);this.Background.H(AXE);this.G8.Ar(false);this.G8.Z(false);this.Vp.H(
AXF);this.Vp.Z(false);this.Ku.H(AXG);this.Ku.Z(false);this.J(this.Vp,0);this.J(this.
Ku,0);this.Mp.Aw(A.aaL(A.ach.AM$));},_Done:function(){this.__proto__=C.Fm;this.Vp.
_Done();this.Ku._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Vp._ReInit();this.Ku._ReInit();},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ku)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vp={AK:
null,Text:null,BT:null,Init:function(aArg){this.Text.H(this.M);this.BT.H(this.M);
this.AK.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AK={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BT._Init.call(this.BT={I:this},0);this.__proto__=C.Vp;this.AK.H(AXH);this.AK.L(A.
jb.BiR);this.H(AXI);this.Text.H(AXJ);this.Text.L(A.jb.Text);this.BT.H(AXK);this.
BT.Ng(1);this.BT.L(A.jb.Text);this.J(this.AK,0);this.J(this.Text,0);this.J(this.
BT,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AK._Done();this.Text._Done();this.BT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AK._ReInit();this.Text._ReInit(
);this.BT._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Ku={QG:null,TT:null,AUG:false,BmY:function(E){if(this.
AUG===E)return;this.AUG=E;if(E){this.TT.Aw(A.aaL(A.ach.ACn));this.QG.Aw(A.aaL(A.
ach.ACn));}else{this.TT.Aw(A.aaL(A.ach.Aqw));this.QG.Aw(A.aaL(A.ach.Aqw));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QG={I:this
},0);A.acg.Ap._Init.call(this.TT={I:this},0);this.__proto__=C.Ku;this.H(Ayj);this.
QG.H(Ayj);this.QG.Cu(1);this.TT.H(Ayj);this.TT.Cu(0);this.J(this.QG,0);this.J(this.
TT,0);this.QG.Aw(A.aaL(A.ach.Aqw));this.TT.Aw(A.aaL(A.ach.Aqw));},_Done:function(
){this.__proto__=A.Core.P;this.QG._Done();this.TT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QG._ReInit();this.TT._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARM={Gd:null,Ca:null,Do:null,Dh:null,Kp:null,Zf:10,AqW:0,AEe:0,AR0:0,Ay0:false
,LU:false,Bb$:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).An.Lf())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.
Device).An.HI().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gp();A._GetAutoObject(
A.Device.Helper).Aqb(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAs],this.
C$.Q,0);A.zX([this,this.Bz5],this.Do.Q,0);A.zX([this,this.ABh],this.Dh.Q,0);A.zX([
this,this.ABh],this.Dh.HG.Q,0);A.zX([this,this.ABh],[this,this.ASo,this.AFn],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A8Z,B.Ba1],0);A.zX([this
,this.BeG],this.Ca.Q,0);A.pe([this,this.AAs],this);A.pe([this,this.GH],this);A.pe([
this,this.ABh],this);A.pe([this,this.BeG],this);},CC:function(G){if(!this.Ay0){this.
Ay0=true;A.pe([this,this.AcO],this);}else C.HY.CC.call(this,G);},Agb:function(G){
this.AR0=this.Zf;this.Bch(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.E5();A._GetAutoObject(C.A$).Fy();},Aua:function(){this.N.CX(A.jV);this.N.C5(
A.aaL(A.ach.ADt));this.N.Co=[this,this.AyK];},AAn:function(G){A._GetAutoObject(C.
A$).Cf(55);},AFn:function(E){if(this.Zf===E)return;this.Zf=E;A.abo([this,this.ASo
,this.AFn],0);},Bch:function(G){var F;if(!this.Zf||(this.Bb$===true)){A._GetAutoObject(
A.Device.Device).A6(24,false,CQ,0,null);if(this.AEe===1)A._GetAutoObject(A.Device.
Device).A6(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A6(23,
true,this.AEe.toFixed(),2000,null);this.Ev(this);return;}this.Gd.Gp();this.Gd.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gd.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gd.Q1(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gd.JR(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gd.Nd(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gd.PR(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gd.SE(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alj=A._GetAutoObject(
A.Device.Helper).A0_(this.Gd,(F=this.Dh.HZ.Hs,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alj)this.AiV();else{A._GetAutoObject(A.Device.Helper).AKb(
this.Gd,Alj,(F=this.Dh.HZ.Hs,F[1].call(F[0])),this.Zf-1,[this,this.ApA]);A._GetAutoObject(
A.Device.Device).A6(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmY())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Do.
Z(false);this.Ca.T(A.aaR(A.acf.ACu));this.Ca.AES(A.aaL(A.ach.Ae$));}else{this.Do.
Z(true);this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.AES(null);}if((this.Y.Biq(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JF(this.Y.TK(this.AV,0x1));this.Am();
},AST:function(E){if(this.AqW===E)return;this.AqW=E;A.abo([this,this.A8e,this.AST
],0);},ABh:function(G){var F;var AJZ=(F=this.Dh.Q,F[1].call(F[0]));var Az7=-1;switch((
F=this.Dh.HZ.Hs,F[1].call(F[0]))){case 0:Az7=AJZ+((F=A._GetAutoObject(A.Device.Helper
).BcP(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zf-1));break;case 1:Az7=(AJZ+this.
Zf)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HG.AC.Q){case 0:Az7=(AJZ+
this.Zf)-1;break;case 1:Az7=(AJZ-this.Zf)+1;break;default:throw new Error(AXL+this.
Dh.HG.AC.Q.toFixed());}break;default:throw new Error(AXM+this.Dh.HG.AC.Q.toFixed(
));}this.AST(Az7);},Bz5:function(G){A.pe([this,this.GH],this);A.pe([this,this.AtV
],this);},AAs:function(G){A._GetAutoObject(A.Device.Helper).AVc(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABh],this);},ApA:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.Apu();else switch((F=this.Dh.HZ.Hs,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JF(this.Dh);break;case 0:this.JF(this.Do
);break;case 1:this.JF(this.Ca);break;default:throw new Error(Ayk+(F=this.Dh.HZ.
Hs,F[1].call(F[0])).toFixed());}break;case 25:this.JF(this.Ca);break;case 47:if(
As.PopupState===7)this.Apu();else{this.JF(this.Dh);this.JF(this.Ca);}break;case 43:{
this.JF(this.Dh);this.JF(this.Do);}break;case 42:{this.JF(this.Dh);this.JF(this.
Ca);}break;case 41:break;default:A.ab5("%s%e",As0,As.Id);}},AiV:function(){this.
Gd.Cg(A._GetAutoObject(A.Device.Device).An);this.AEe=this.AEe+1;if(A._GetAutoObject(
A.Device.Helper).AmY()){if(A._GetAutoObject(A.Device.Device).Bt.Lf()){A._GetAutoObject(
A.Device.Device).A6(24,false,UW,0,null);A._GetAutoObject(A.Device.Device).A6(50,
true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);}else{var L7=A.
_GetAutoObject(A.Device.Device).An.LS(0,this.Gd.Id);A._GetAutoObject(A.Device.Device
).SN(L7);var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(this.Gd.
Id);B0.OnSetBodyWeight(this.KH);B0.OnSetTimestamp(this.Gd.DateOfBirth);B0.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apu();},Apu:function(){var B;var F,CA;if(!!(F=this.Ca.
Q,F[1].call(F[0]))){(F=this.Ca.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Do.Q,CA[2].call(CA[0],(F=this.Ca.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Do.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$m(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Do.Q,F[1].call(
F[0])),this.Do.AjH(),this.Do.AjJ())));var IV=null;switch((F=this.Dh.HZ.Hs,F[1].call(
F[0]))){case 3:IV=[B=A._GetAutoObject(A.Device.Device),B.Av7,B.AyC];break;case 2:
IV=[B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyD];break;case 4:case 5:IV=[B=A.
_GetAutoObject(A.Device.Device),B.Anl,B.Aou];break;default:;}if(!!IV){switch((F=
this.Dh.Kk.VN,F[1].call(F[0]))){case 1:IV[2].call(IV[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IV[1].call(IV[0])));
}var XE=100-((this.Zf/this.AR0)*100);A._GetAutoObject(A.Device.Device).A6(24,true
,(((this.AR0.toFixed()+As1)+(XE|0).toFixed())+As1)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAd]);this.AFn(this.Zf-1);A.aaS([this,this.Bch],null);},BAd:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bb$=true;},ApB:function(G){var F;C.HY.ApB.call(this,G);var AoP=
0;switch((F=this.BY.Q,F[1].call(F[0]))){case 0:case 2:AoP=A._GetAutoObject(A.Device.
Device).AdN;break;case 1:AoP=730;break;default:A.ab5("%s%e",Ak8,(F=this.BY.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q1(A._GetAutoObject(A.Device.
Helper).Du()-A._GetAutoObject(A.Device.Helper).AmA(AoP));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnP));switch(this.BY.AC.Q){case 0:{this.Kp.I$(A.aaR(A.acf.AM6));this.
Kp.IO(A.aaR(A.acf.AM7));}break;case 1:{this.Kp.I$(A.aaR(A.acf.Bhf));this.Kp.IO(A.
aaR(A.acf.Bhg));}break;case 2:{this.Kp.I$(A.aaR(A.acf.Bjd));this.Kp.IO(A.aaR(A.acf.
Bje));}break;default:throw new Error(Ak8);}},AeZ:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Av_,this.AeZ],0);},AtV:function(G){var F,CA,S9;this.AeZ(((
F=this.Ca.Q,F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S9=this.Ca.
Q,S9[1].call(S9[0])));A.pe([this,this.GH],this);},BeG:function(G){A.pe([this,this.
AtV],this);},ASo:function(){return this.Zf;},A8e:function(){return this.AqW;},Av_:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvS.
_Init.call(this.Ca={I:this},0);C.Q8._Init.call(this.Do={I:this},0);C.AGv._Init.call(
this.Dh={I:this},0);C.AUt._Init.call(this.Kp={I:this},0);this.__proto__=C.ARM;var
B;this.Dq(C.AC7);this.Ca.H(Aoj);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.AkZ));this.
Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.
aaR(A.acf.Akg));this.Do.H(AXN);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Uc));this.
Do.ArU(false);this.Dh.H(AXO);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6D));this.Dh.
Bx(0);this.Kp.H(AXP);this.Kp.Aj(true);this.Kp.T(A.aaR(A.acf.A7K));this.Kp.F$(1);
this.Kp.EU(500);this.Kp.IO(A.aaR(A.acf.AM7));this.Kp.I$(A.aaR(A.acf.AM6));this.Kp.
A9v(A.aaR(A.acf.AqW)+A.aaR(A.acf.Colon));this.J(this.Ca,0);this.J(this.Do,0);this.
J(this.Dh,0);this.J(this.Kp,0);this.Gd=A._NewObject(A.Device.Animal,0);this.Ca.AR=[
this,this.AcO];this.Ca.LX([this,this.AcO]);this.Ca.L0(A.aaL(A.ach.Ae$));this.Ca.
At([B=A._GetAutoObject(A.Device.Helper).W,B.Ars,B.PR]);this.Ca.OL([B=A._GetAutoObject(
A.Device.Device),B.Ue,B.UY]);this.Ca.PP([B=A._GetAutoObject(A.Device.Device),B.Uf
,B.UZ]);this.Ca.Ug([B=A._GetAutoObject(A.Device.Device),B.Ani,B.Aot]);this.Ca.AeZ([
this,this.Av_,this.AeZ]);this.Do.Gq([this,this.D_,this.GQ]);this.Do.LX([this,this.
AcO]);this.Do.L0(A.aaL(A.ach.Ae$));this.Do.Ui([B=this.Gender.Animal,B.Ws,B.JR]);
this.Do.OL([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY]);this.Do.PP([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UZ]);this.Do.Ug([B=A._GetAutoObject(A.Device.Device),B.Ani
,B.Aot]);this.Do.At([B=A._GetAutoObject(A.Device.Helper).W,B.Anm,B.Nd]);this.Do.
Ano([B=this.AnimalType.Animal,B.PO,B.EB]);this.Dh.Gq([this,this.D_,this.GQ]);this.
Dh.LX([B=this.Dh,B.FU]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Art,B.SE]);this.Dh.A88(A._GetAutoObject(A.Device.Helper).W);
this.Kp.At([this,this.ASo,this.AFn]);this.Kp.Blz([this,this.A8e,this.AST]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Ca._Done();this.Do._Done(
);this.Dh._Done();this.Kp._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Ca._ReInit();this.Do._ReInit();this.Dh._ReInit();this.Kp.
_ReInit();this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.Do.T(A.aaR(A.acf.
Uc));this.Dh.T(A.aaR(A.acf.A6D));this.Kp.T(A.aaR(A.acf.A7K));this.Kp.IO(A.aaR(A.
acf.AM7));this.Kp.I$(A.aaR(A.acf.AM6));this.Kp.A9v(A.aaR(A.acf.AqW)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Gd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ATX={BU:null,RatingMode:null,Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Co=null;this.BP.Ck=null;this.BP.CE=[this,this.AaB];this.BP.CX(A.jV
);this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BU._Init.call(this.BU={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ATX;var B;this.
H(Rk);this.BU.H(AsY);this.BU.T(A.aaR(A.acf.A$e));this.J(this.BU,0);this.BU.At([B=
this.RatingMode,B.B_,B.B$]);this.BU.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BU._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BU._ReInit(
);this.RatingMode._ReInit();this.BU.T(A.aaR(A.acf.A$e));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfg],[B=A._GetAutoObject(A.Device.Device),B.ASs,B.AZW],0);A.pe([this,this.Bfg],this
);},Dt:function(){return 2;},Gj:function(aIndex){return this.RatingModeToString.
BR(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).AwU(E);},Bfg:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
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
};C.AVr={BU:null,WeightRecordingMode:null,Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Co=null;this.BP.Ck=null;this.BP.CE=[this,this.AaB];this.BP.CX(A.jV
);this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BU._Init.call(this.BU={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVr;var B;this.H(Rk);this.BU.H(AsY);this.BU.T(A.aaR(A.acf.AsK));this.BU.EU(1);
this.J(this.BU,0);this.BU.At([B=this.WeightRecordingMode,B.B_,B.B$]);this.BU.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BU.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BU._ReInit();this.WeightRecordingMode.
_ReInit();this.BU.T(A.aaR(A.acf.AsK));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dt:function(){return 2;},Gj:function(aIndex){return this.
WeightRecordingModeToString.BR(this.C7(aIndex));},At:function(E){C.Cl.At.call(this
,E);A._GetAutoObject(A.Device.Device).Aw6(E);},Init:function(aArg){var B;A.zX([this
,this.Bgm],[B=A._GetAutoObject(A.Device.Device),B.A8Y,B.Ba0],0);A.pe([this,this.
Bgm],this);},Bgm:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cb.Set(0,0);this.Cb.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cl;this.WeightRecordingModeToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.AaY={BooleanToAutoOnOff:null,Gj:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BR(aIndex);},_Init:function(aArg){C.Gc._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.AaY;},_Done:function(
){this.__proto__=C.Gc;this.BooleanToAutoOnOff._Done();C.Gc._Done.call(this);},_ReInit:
function(){C.Gc._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gc._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxK={A6R:function(){var B;this.
Axn(1);this.Js(0,3);this.VB(0,0,(B=this.M)[3]-B[1]);this.A4q(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4q(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VJ(0);},_Init:
function(aArg){C.ABt._Init.call(this,aArg);this.__proto__=C.AxK;},_className:"Application::Triangle"
};C.ATz={Y:null,Init:function(aArg){this.Bxt(this);},Bxs:function(P$){var Aa=A._NewObject(
C.ANv,0);Aa.H(BD);Aa.T(P$);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
Atn(this);},Atn:function(G){var B;var Alr=1;var A2i=0;var X=this.Y.Ah;var Cx=null;
var K4=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var AK8=(B=Cx.V.B6.A6v(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Mn.isPrototypeOf(X)?X:null))AK8=AK8+20;if(A2i<AK8)A2i=AK8;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Alr*28)));Alr=Alr+1;}else{K4=(A.acg.C4.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K4){var Dg=((B=this.M)[3]-B[1])-((Alr-1)*28);K4.DM([this.
M[0],K4.Es[1]]);K4.DM([K4.Es[0],Dg]);K4.DC([this.M[0]+120,K4.EC[1]]);K4.DC([K4.EC[
0],Dg]);}}X=X.Ah;}this.BAV(A2i,28);},BAV:function(aWidth,BwB){var B;var X=this.Y.
Ah;var Cx=null;var K4=null;aWidth=aWidth+20;if(aWidth>(C.Aso[0]-10))aWidth=C.Aso[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A5(0x14);Cx.V.Text.Hl(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwB));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K4=(
A.acg.C4.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K4){K4.DM([this.M[
2]-aWidth,K4.Es[1]]);K4.DC([this.M[2],K4.EC[1]]);}}X=X.Ah;}},Bxt:function(G){var
Aa=A._GetAutoObject(C.B4).AqG;while(!!Aa){if(!!(C.Axb.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axb.isPrototypeOf(Aa)?Aa:null);this.Bxr(EF.DK,EF.AR,EF.Bw,EF.AQU);}else
if(!!(C.Axd.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axd.isPrototypeOf(Aa)?Aa:null);
this.Bxy(EF.DK,EF.AR,EF.Bw,EF.Wr,EF.WK);}else if(!!(C.Zv.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zv.isPrototypeOf(Aa)?Aa:null);this.Bxq(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkB.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkB.isPrototypeOf(Aa)?Aa:null);this.
Bxs(EF.DK);}else if(!!(C.AFX.isPrototypeOf(Aa)?Aa:null))this.Bxz();Aa=Aa.Mu;}A._GetAutoObject(
C.B4).Clear();A.pe([this,this.Atn],this);},Bxq:function(P$,AcY,Ah1){var Aa=A._NewObject(
C.Mn,0);Aa.H(BD);Aa.T(P$);Aa.AR=AcY;Aa.Aj(true);Aa.Ar(Ah1);Aa.Bi(true);this.J(Aa
,0);this.Atn(this);},Bxz:function(){var K4=A._NewObject(A.acg.C4,0);K4.L(A.jb.Bm
);K4.Aj(true);K4.Ng(3);this.J(K4,0);this.Atn(this);},Bxr:function(P$,AcY,Ah1,A0u
){var Aa=A._NewObject(C.Amy,0);Aa.H(BD);Aa.T(P$);Aa.AR=AcY;Aa.Aj(true);Aa.Ar(Ah1
);Aa.Bi(true);Aa.At(A0u);this.J(Aa,0);this.Atn(this);},Bxy:function(P$,AcY,Ah1,A2z
,Agl){var Aa=A._NewObject(C.ANu,0);Aa.H(BD);Aa.T(P$);Aa.AR=AcY;Aa.Aj(true);Aa.Ar(
Ah1);Aa.Bi(true);Aa.Bmz(A2z);Aa.AFB(Agl);this.J(Aa,0);this.Atn(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATz;this.H(Rk);this.Y.H(Rk);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afe={_Init:
function(){A.acl.Afe._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_m={AqG:null,Ahg:null,NC:function(P$){var EF=A._NewObject(
C.AkB,0);EF.DK=P$;this.J(EF);},Clear:function(){this.AqG=null;this.Ahg=null;},Gu:
function(){var K4=A._NewObject(C.AFX,0);this.J(K4);},J:function(BbA){if(!this.AqG
){this.AqG=BbA;this.Ahg=this.AqG;}else{this.Ahg.Mu=BbA;this.Ahg=this.Ahg.Mu;}},Tt:
function(P$,AcY){var EF=A._NewObject(C.Zv,0);EF.DK=P$;EF.AR=AcY;this.J(EF);},Bgv:
function(P$,AcY,A0u){var EF=A._NewObject(C.Axb,0);EF.DK=P$;EF.AR=AcY;EF.AQU=A0u;
this.J(EF);},AaP:function(P$){var EF=A._NewObject(C.Zv,0);EF.DK=P$;EF.Bw=false;this.
J(EF);},ABx:function(P$,AcY,A2z,Agl){var EF=A._NewObject(C.Axd,0);EF.DK=P$;EF.AR=
AcY;EF.Wr=A2z;EF.WK=Agl;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_m;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.B4={_Init:function(){C.A_m._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axc={Mu:null,_Init:function(aArg){this.__proto__=
C.Axc;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOs={Amk:null,Arx:function(E){if(this.Amk===
E)return;if(!!this.Ab)this.Ab.ZA(this);if(!!this.Amk)this.Aqy(this.Amk,A._GetAutoObject(
C.Ass),null,null,null,null,false);this.Amk=E;if(!!this.Amk)this.AkF(this.Amk,A._GetAutoObject(
C.Ass),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOs;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amk)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wz={_Init:function(){C.AOs._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C0=A._NewObject(C.ATA,0);C0.H(this.M);this.AkF(C0,A.
_GetAutoObject(C.AnN),null,A._GetAutoObject(C.AnN),A._GetAutoObject(C.AnN),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rk);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Ass={_Init:function(){C.AUv._Init.call(this,0);this.ACs=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATA={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.ATA;this.H(AH2);this.Dj(0);this.AK.AZ(0x3F);this.AK.H(AH2);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUu={R_:function(){var B;var Ao=(A.acl.Ae8.isPrototypeOf(B=A.acl.Aeh.R_.call(this
))?B:null);if(!Ao)throw new Error(AsV);Ao.Cp.Cw=255;Ao.Cp.B1=0;return Ao;},R9:function(
){var B;var Ao=(A.acl.Axa.isPrototypeOf(B=A.acl.Aeh.R9.call(this))?B:null);if(!Ao
)throw new Error(AsV);Ao.E0.Cw=0;Ao.E0.B1=255;Ao.Ds=true;return Ao;},_Init:function(
aArg){A.acl.Aeh._Init.call(this,aArg);this.__proto__=C.AUu;},_className:"Application::ShadeOverlayTransition"
};C.AnN={_Init:function(){C.AUu._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkO={AnP:0,A1E:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iq.Ai.call(this,Ae);this.BS.L(this.V.AQ);if(!!this.Q){
var BB6=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BS.R((A.
_GetAutoObject(A.Device.Converter).Ak4(BB6)+CQ)+A._GetAutoObject(A.acj.DU).AfZ()
);else this.BS.R(A.aaR(A.acf.Akg));}},J$:function(G){var B;var Bgj=(this.A1E===false
)&&(this.AM<=this.Go);if(Bgj)this.Bx(this.AnP);this.A37(this.AM,4);if(Bgj){this.
Bx(this.AM-this.AjY);this.A1E=true;}C.Iq.J$.call(this,G);},J6:function(G){this.A37(
this.AM,5);C.Iq.J6.call(this,G);},Bx:function(E){this.A37(E,4);E=(((E+((this.AjY
/2)|0))/this.AjY)|0)*this.AjY;if(!E)this.A1E=false;C.Iq.Bx.call(this,E);},Aho:function(
E){if(this.AnP===E)return;this.AnP=E;},A37:function(Bwj,Gz){this.ASW(A._GetAutoObject(
A.acj.DU).BcT(Bwj,Gz));},_Init:function(aArg){C.Iq._Init.call(this,aArg);this.__proto__=
C.AkO;this.H(KX);this.AnP=this.Go;this.JW(this.H4,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDu={None:0,Left:1,BD3:2,Right:3};C.Amo={Xl:
null,FB:null,Ej:null,Background:null,Ana:null,Gb:null,KL:A.jV,ADZ:null,Init:function(
aArg){var B;A.zV([this,this.Af7],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3g],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.
LN],this);A.pe([this,this.A3g],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Ll:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xl);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKH();},AlU:function(G){var Aa=(C.AB0.isPrototypeOf(G)?G:null);var Hq;if(!!Aa)Hq=
Aa.Hq;else Hq=this.Gb.FK();if(Hq>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G6(Hq);A.pe([this,this.AaB],this);},AKH:function(
){},Af7:function(G){this.Am();},A29:function(G){if(this.Gb.FK()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gb.GS(this.Gb.FK()+1);},A2_:function(G){if(this.
Gb.FK()>0)this.Gb.GS(this.Gb.FK()-1);},DJ:function(G){var Gf=A._GetAutoObject(A.
Device.Device).An.B9();var MR=this.BP;if(!MR)return;MR.C1(A.aaL(A.ach.Aeu));MR.CE=[
this,this.AaB];if(Gf<=0){MR.Cv(null);MR.C5(null);MR.Ck=null;MR.Co=null;MR.Zy=false;
MR.Zz=false;}else if(Gf===1){MR.Cv(null);MR.C5(A.aaL(A.ach.Aev));MR.Ck=null;MR.Co=[
this,this.AlU];MR.Zy=false;MR.Zz=false;}else{MR.Cv(A.aaL(A.ach.AqZ));MR.C5(A.aaL(
A.ach.Aq6));MR.Ck=[this,this.A29];MR.Co=[this,this.A2_];MR.Zy=true;MR.Zz=true;}}
,LN:function(G){this.BfG(this);this.Xl=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKH();},Bmr:function(E){if(this.ADZ===E)return;this.ADZ=E;A.pe([this,this.Bz2
],this);},Bz2:function(G){this.BfG(this);},BfG:function(G){var B;if(!!this.FB)this.
HN(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(this.ADZ,0))?B:null);if(!
!this.FB){this.FB.H(AXQ);this.J(this.FB,0);}},A3g:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gb.Dv(A.aaR(A.acf.ARU));else this.Gb.Dv(this.KL);},Dv:function(E){if(this.
KL===E)return;this.KL=E;A.pe([this,this.A3g],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Ana={I:this},0);C.Gb._Init.call(
this.Gb={I:this},0);this.__proto__=C.Amo;this.H(Rk);this.Ej.H(BD);this.Ej.A9y(A.
jb.CS);this.Ej.A9z(A.jb.Text);this.Background.H(Fe);this.Background.L(A.jb.Bn2);
this.Ana.H(AH3);this.Ana.L(A.jb.CS);this.Gb.H(AH3);this.Gb.NZ(C.AB0);this.ADZ=C.
APx;this.KL=A.aaR(A.acf.AvW);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Ana,0);this.J(this.Gb,0);this.Ej.AR=[this,this.AlU];this.Ej.AbY(A._NewObject(
C.Yo,0));this.Gb.Zm(A._GetAutoObject(A.Device.Device).An);this.Gb.Zq([this,this.
AlU]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Ana._Done();this.Gb._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Ana._ReInit();this.Gb._ReInit();this.Dv(A.aaR(A.acf.AvW
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xl)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gb)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.AB0={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EB(this.AX.AmN(
Ad,14));this.DS.AEU(this.AX.I4(Ad,13));this.DS.AeY(this.AX.H2(Ad,8));this.DS.Uk(
this.AX.H2(Ad,11));this.DS.Ae2(this.AX.H2(Ad,12));this.DS.Ae4(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.AB0;this.
H(O2);this.AP.L(A.jb.Bc);this.DS.H(AXR);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yo={Q:null,Init:function(aArg){var
B;this.AAS(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEA:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Ni(FilterCriterion
);var AiZ=this.Akj();if(AiZ>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,AiZ,false);Filter.CV(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeU(false);},BvJ:function(s){this.AEA(
s);},AAS:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Ni(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BFV:function(s){
this.AAS(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcQ],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcQ],E,0);if(!!E)A.pe([this,this.
AcQ],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwC(-1);return;}var AyW=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!AyW){this.AW.AwC(0);this.AW.AeU(true);}else
this.AW.AwC(AyW.A4);},AcQ:function(s){this.C2(s);},_Init:function(aArg){C.AjM._Init.
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
A.Device.Helper).AQY(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Re(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cg(
A._GetAutoObject(A.Device.Device).An);if(this.KH>0){if(this.AMO){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LS(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B0=A._NewObject(A.Device.Rating,0);B0.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B0.OnSetBodyWeight(this.KH);B0.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B0.Cg(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AXS,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
this.KH);B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B0.Cg(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fy();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A$).Fy();},Aua:function(
){this.N.CX(A.jV);this.N.C5(A.aaL(A.ach.AmV));this.N.Co=[this,this.AyK];},AAn:function(
G){A._GetAutoObject(C.A$).Cf(32);},GH:function(G){var F;var Ka=(F=this.Ef.Q,F[1].
call(F[0]));var ABe=(F=this.Ca.Q,F[1].call(F[0]));var A32=true;if(!!Ka&&(ABe===Ka
))A32=false;A._GetAutoObject(A.Device.Helper).JX(this.Ca,A32);this.Ef.Blr(!A32);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvS._Init.
call(this.Ca={I:this},0);C.Q8._Init.call(this.Ef={I:this},0);C.Aci._Init.call(this.
AbD={I:this},0);C.BU._Init.call(this.G5={I:this},0);C.SO._Init.call(this.Cm={I:this
},0);C.BU._Init.call(this.AbB={I:this},0);this.__proto__=C.AqB;var B;this.Ca.H(AhW
);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.Ef.H(AhW);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uc));this.AbD.H(AXT);this.AbD.Aj(true);this.
AbD.T(A.aaR(A.acf.GM));this.G5.H(AhW);this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Ari
));this.Cm.H(AhW);this.Cm.Aj(true);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.AFs(true);
this.AbB.H(AhW);this.AbB.Aj(true);this.AbB.T(A.aaR(A.acf.AgE));this.J(this.Ca,-1
);this.J(this.Ef,-1);this.J(this.AbD,-1);this.J(this.G5,-1);this.J(this.Cm,-1);this.
J(this.AbB,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Ars,B.PR]);this.Ef.Gq([this,this.D_,this.GQ]);this.Ef.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anm,B.Nd]);this.AbD.Gq([this,this.D_,this.GQ]);this.AbD.At([
B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SE]);this.G5.At([B=this.BirthType,
B.B_,B.B$]);this.G5.CK(this.BirthType);this.Cm.Gq([this,this.D_,this.GQ]);this.Cm.
LX([B=this.Cm,B.FU]);this.Cm.L0(A.aaL(A.ach.Edit));this.Cm.Ab2([B=A._GetAutoObject(
A.Device.Helper).W,B.Av4,B.Q1]);this.AbB.At([B=this.EaseOfDelivery,B.B_,B.B$]);this.
AbB.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Ca._Done();this.Ef._Done(
);this.AbD._Done();this.G5._Done();this.Cm._Done();this.AbB._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Ca._ReInit();this.Ef._ReInit();this.AbD._ReInit();
this.G5._ReInit();this.Cm._ReInit();this.AbB._ReInit();this.Ca.T(A.aaR(A.acf.AkZ
));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.
Ca.ArF(A.aaR(A.acf.Akg));this.Ef.T(A.aaR(A.acf.Uc));this.AbD.T(A.aaR(A.acf.GM));
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
));A.abo(this.Q,0);}A.abo([this,this.Ud,this.BaC],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}break;default:this.FI.AkK((F=
this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hc:function(G){this.Ew(0
);},Ew:function(EN){var F;if(!this.A8)this.FI.Aju((F=this.N,F[1].call(F[0])));this.
A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SM(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Dr._Init.call(this,aArg);
C.AQS._Init.call(this.AW={I:this},0);this.__proto__=C.Aci;this.H(UT);this.EU(999999
);this.V.R(As2);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.AW.H(AXU
);this.AW.AS4(6);this.J(this.AW,0);this.AW.At([this,this.Ud,this.BaC]);this.FI=A.
_NewObject(C.Aeo,0);},_Done:function(){this.__proto__=C.Dr;this.AW._Done();C.Dr.
_Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dt:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.Auy={Y:null,QM:null,NV:null,Ee:null,PE:null,PB:null,PC:null,Ay:null,Gc:null,
ReasonOfLeaving:null,Ahw:null,M2:0,AmC:false,AB4:true,AOl:false,Ar9:false,Init:function(
aArg){A.zX([this,this.A85],[this,this.A8w,this.AS7],0);this.Ahl(A._GetAutoObject(
A.Device.Helper).W.AhR(2));this.ReasonOfLeaving.At(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A85],this);},DE:function(G){
var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;
case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QE(X,Fh,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},AlT:function(G
){A._GetAutoObject(C.A$).Fy();},ApF:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
this.M2);B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Du());B0.Cg(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmC){A._GetAutoObject(A.Device.Helper).W.Ae0(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6x(A._GetAutoObject(A.Device.Helper).Du(),this.Ar9);}A._GetAutoObject(A.Device.
Helper).W.AFr(this.ReasonOfLeaving.C7((F=this.NV.Q,F[1].call(F[0]))));if(this.AB4
)A._GetAutoObject(A.Device.Helper).W.PR(0);if(this.Ar9)A._GetAutoObject(A.Device.
Helper).W.AwE(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);this.A_W();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Ahl:function(E){
if(this.M2===E)return;this.M2=E;},Anj:function(){return this.M2;},BeI:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A$).Fy();A._GetAutoObject(A.Device.Helper
).Asi();}},A85:function(G){switch(this.Ar9){case false:this.Ee.T(A.aaR(A.acf.AVt
));break;case true:this.Ee.T(A.aaR(A.acf.Bp5));break;default:;}},AS7:function(E){
if(this.Ar9===E)return;this.Ar9=E;},A8w:function(){return this.Ar9;},A_W:function(
){A._GetAutoObject(A.Device.Device).A6(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeI]);},BlR:function(E){if(this.AOl===E)return;
this.AOl=E;},Bkd:function(){return this.AOl;},Blf:function(E){if(this.AB4===E)return;
this.AB4=E;},Bj3:function(){return this.AB4;},Blp:function(E){if(this.AmC===E)return;
this.AmC=E;},Bj$:function(){return this.AmC;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afi._Init.call(this.QM={I:this
},0);C.Asr._Init.call(this.NV={I:this},0);C.AkO._Init.call(this.Ee={I:this},0);C.
Afi._Init.call(this.PE={I:this},0);C.Afi._Init.call(this.PB={I:this},0);C.Afi._Init.
call(this.PC={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gc._Init.call(this.
Gc={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahw._Init.call(this.Ahw={I:this},0);this.__proto__=C.Auy;var B;this.N.Z(true);this.
N.CX(A.aaR(A.acf.Unregister));this.Dq(C.II);this.Y.H(Fe);this.Y.JQ(1);this.QM.H(
Z$);this.QM.Aj(true);this.QM.T(A.aaR(A.acf.AmC));this.QM.Bi(true);this.QM.Zt(false
);this.QM.F$(-1);this.QM.EU(1);this.NV.H(UV);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bi(true);this.NV.Zt(false);this.Ee.H(AhV);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVt));this.Ee.Bi(false);this.Ee.F$(1000);this.Ee.
EU(999000);this.PE.H(UV);this.PE.Aj(true);this.PE.T(A.aaR(A.acf.A4D));this.PE.Bi(
true);this.PE.Zt(false);this.PE.Bx(1);this.PE.F$(-1);this.PE.EU(1);this.PB.H(Z$);
this.PB.Aj(true);this.PB.T(A.aaR(A.acf.A4E));this.PB.Bi(true);this.PB.Zt(false);
this.PB.Bx(1);this.PB.F$(-1);this.PB.EU(1);this.PC.H(UV);this.PC.Aj(true);this.PC.
T(A.aaR(A.acf.A5e));this.PC.Bi(true);this.PC.Zt(false);this.PC.Bx(1);this.PC.F$(-
1);this.PC.EU(1);this.Ay.H(Ayb);this.Gc.At(0);this.J(this.Y,0);this.J(this.QM,0);
this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PE,0);this.J(this.PB,0);this.J(this.
PC,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];this.
QM.At([B=this.Gc,B.B_,B.B$]);this.QM.CK(this.Gc);this.QM.Akw([this,this.Bj$,this.
Blp]);this.NV.Gq([this,this.D_,this.GQ]);this.NV.LX([B=this.NV,B.FU]);this.NV.L0(
A.aaL(A.ach.Edit));this.NV.At([B=this.ReasonOfLeaving,B.B_,B.B$]);this.NV.CK(this.
ReasonOfLeaving);this.NV.Anq(this.Ahw);this.Ee.At([this,this.Anj,this.Ahl]);this.
PE.At([B=this.Gc,B.B_,B.B$]);this.PE.CK(this.Gc);this.PE.Akw([this,this.Bkd,this.
BlR]);this.PB.At([B=this.Gc,B.B_,B.B$]);this.PB.CK(this.Gc);this.PB.Akw([this,this.
A8w,this.AS7]);this.PC.At([B=this.Gc,B.B_,B.B$]);this.PC.CK(this.Gc);this.PC.Akw([
this,this.Bj3,this.Blf]);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Y._Done();this.QM._Done();this.NV._Done();this.Ee._Done();this.PE._Done();this.
PB._Done();this.PC._Done();this.Ay._Done();this.Gc._Done();this.ReasonOfLeaving.
_Done();this.Ahw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QM._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PE._ReInit();this.PB._ReInit();this.PC._ReInit();this.Ay._ReInit();this.Gc.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahw._ReInit();this.N.CX(A.aaR(A.acf.
Unregister));this.QM.T(A.aaR(A.acf.AmC));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVt));this.PE.T(A.aaR(A.acf.A4D));this.PB.T(A.aaR(A.acf.A4E
));this.PC.T(A.aaR(A.acf.A5e));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahw)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUt={AjF:null,Pu:null,AuY:AXV,Bl:function(aSize){C.Iq.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BS.H([0,40,aSize[0],80]);this.Hw.H([0,this.BS.M[1],40,
this.BS.M[3]]);this.H4.H([aSize[0]-40,this.BS.M[1],aSize[0],this.BS.M[3]]);},Ai:
function(Ae){var F;C.Iq.Ai.call(this,Ae);this.Pu.L(this.V.AQ);if(!!this.AjF){if((
F=this.AjF,F[1].call(F[0]))===-1)this.Pu.R(this.AuY+AH4);else this.Pu.R((this.AuY+
CQ)+(F=this.AjF,F[1].call(F[0])).toFixed());}else this.Pu.R(this.AuY);},A2R:function(
G){this.Am();},Blz:function(E){if(A.aaZ(this.AjF,E))return;if(!!this.AjF)A.z$([this
,this.A2R],this.AjF,0);this.AjF=E;if(!!E)A.zX([this,this.A2R],E,0);if(!!E)A.pe([
this,this.A2R],this);},A9v:function(E){if(this.AuY===E)return;this.AuY=E;this.Am(
);},_Init:function(aArg){C.Iq._Init.call(this,aArg);C.CH._Init.call(this.Pu={I:this
},0);this.__proto__=C.AUt;this.H(AXW);this.V.H(AXX);this.V.A5(0x12);this.Pu.H(AXY
);this.Pu.A5(0x12);this.Pu.L(A.jb.Bm);this.J(this.Pu,0);this.Pu.S(A.aaL(A.fl.Af)
);this.Pu.A2(A.aaL(A.fl.Ak));this.Pu.Ct(null);},_Done:function(){this.__proto__=
C.Iq;this.Pu._Done();C.Iq._Done.call(this);},_ReInit:function(){C.Iq._ReInit.call(
this);this.Pu._ReInit();this.Pu.S(A.aaL(A.fl.Af));this.Pu.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iq._Mark.call(this,D);if((B=this.AjF)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AL7={Y:null,JM:null,Sp:null,Ay:null,Aqp:2500,ANl:24,DE:function(G){var B;var
Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:
Fh=4;break;case 5:Fh=5;break;default:;}X=this.QE(X,Fh,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},AlT:function(G){A._GetAutoObject(
C.A$).Fy();},ApF:function(G){},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Blj:function(
E){if(this.Aqp===E)return;this.Aqp=E;},Bj5:function(){return this.Aqp;},Blk:function(
E){if(this.ANl===E)return;this.ANl=E;},Bj6:function(){return this.ANl;},BjU:function(
G){var F,CA;this.JM.BS.L(this.JM.V.AQ);if(!!this.JM.Q)this.JM.BS.R((((String.fromCharCode(((
F=this.JM.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afy)+String.fromCharCode(((
CA=this.JM.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JM.
AGX);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iq._Init.call(this.JM={I:this},0);C.Iq._Init.call(this.Sp={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AL7;this.N.Z(true);this.
Dq(C.II);this.Y.H(Fe);this.Y.JQ(1);this.JM.H(AhV);this.JM.Aj(true);this.JM.T(A.aaR(
A.acf.Aqp));this.JM.Bi(false);this.JM.F$(0);this.JM.EU(5000);this.JM.IO(A.aaR(A.
acf.Af3));this.JM.I$(A.aaR(A.acf.Af3));this.JM.ASW(100);this.Sp.H(UV);this.Sp.Aj(
true);this.Sp.T(A.aaR(A.acf.A_v));this.Sp.Bi(true);this.Sp.Bx(24);this.Sp.F$(10);
this.Sp.EU(33);this.Sp.IO(AXZ);this.Ay.H(Ayb);this.J(this.Y,0);this.J(this.JM,0);
this.J(this.Sp,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.Yt));this.Y.El=[this,this.
Fj];this.JM.At([this,this.Bj5,this.Blj]);this.JM.A94([this,this.BjU]);this.Sp.At([
this,this.Bj6,this.Blk]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JM._Done();this.Sp._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JM._ReInit();this.Sp._ReInit();this.
Ay._ReInit();this.JM.T(A.aaR(A.acf.Aqp));this.JM.IO(A.aaR(A.acf.Af3));this.JM.I$(
A.aaR(A.acf.Af3));this.Sp.T(A.aaR(A.acf.A_v));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Ark={EaseOfDelivery:null,BirthType:null,Ca:null,Do:null,Dh:null,Cm:null,Ee:null
,G5:null,Lg:null,M2:0,LU:false,Init:function(aArg){A.zX([this,this.GH],this.Ca.Q
,0);A.zX([this,this.GH],this.Do.Q,0);A.zX([this,this.AAs],this.C$.Q,0);A.zX([this
,this.Bee],this.Cm.Dk,0);A.zX([this,this.Bd_],this.C9.Q,0);A.zX([this,this.AtV],
this.Ca.Q,0);A.zX([this,this.AtV],this.Do.Q,0);A.pe([this,this.AAs],this);A.pe([
this,this.GH],this);A.pe([this,this.Bee],this);A.pe([this,this.Bd_],this);A.pe([
this,this.AtV],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.E5();A.
_GetAutoObject(C.A$).Fy();},Agb:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BY.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhC
){var AlD=A._GetAutoObject(A.Device.Helper).AhC.AOJ();A._GetAutoObject(A.Device.
Helper).W.AbZ(AlD);A._GetAutoObject(A.Device.Helper).W.Anv(AlD);}var Alj=A._GetAutoObject(
A.Device.Helper).A0_(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Hs,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alj){this.AiV();A.pe([this,this.
Bv7],this);}else A._GetAutoObject(A.Device.Helper).AKb(A._GetAutoObject(A.Device.
Helper).W,Alj,(F=this.Dh.HZ.Hs,F[1].call(F[0])),0,[this,this.ApA]);},Aua:function(
){this.N.CX(A.jV);this.N.C5(A.aaL(A.ach.ADE));this.N.Co=[this,this.AyK];},AiV:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);var L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SN(L7);var Bc9=false;if(A._GetAutoObject(
A.Device.Helper).AmY()){if(A._GetAutoObject(A.Device.Device).Bt.Lf()){Bc9=true;A.
_GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.
HI().toFixed(),0,null);}else{var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(this.KH);B0.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B0.Cg(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A6X()&&(Bc9===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
this.M2);B0.Cg(A._GetAutoObject(A.Device.Device).Bt);}}var IV=null;switch((F=this.
Dh.HZ.Hs,F[1].call(F[0]))){case 3:IV=[B=A._GetAutoObject(A.Device.Device),B.Av7,
B.AyC];break;case 2:IV=[B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyD];break;case
4:case 5:IV=[B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aou];break;default:;}if(
!!IV)switch((F=this.Dh.Kk.VN,F[1].call(F[0]))){case 1:IV[2].call(IV[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IV[2].call(IV[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$m(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Do.Q,F[1].call(F[0])),this.Do.AjH(),this.Do.AjJ());},ApY:function(G){A.
_GetAutoObject(C.A$).Fy();},Bv7:function(s){this.ApY(s);},AAn:function(G){A._GetAutoObject(
C.A$).Cf(49);},Ahl:function(E){if(this.M2===E)return;this.M2=E;A.abo([this,this.
Anj,this.Ahl],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).AmY())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A6X())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Do.Z(false);this.Ca.T(A.aaR(A.
acf.ACu));this.Ca.AES(A.aaL(A.ach.Ae$));}else{this.Do.Z(true);this.Ca.T(A.aaR(A.
acf.AkZ));this.Ca.AES(null);}},AAs:function(G){A._GetAutoObject(A.Device.Helper).
AVc(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LU);},Bee:function(G){A.pe([this,this.Bf9],this);},Bd_:function(G){A.pe([this
,this.Bf9],this);},Bf9:function(G){var F,CA,S9;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Aho(A._GetAutoObject(A.Device.Helper
).AhR(A._GetAutoObject(A.Device.Helper).Abl((F=this.BY.Q,F[1].call(F[0]))),(CA=this.
Cm.Dk,CA[1].call(CA[0])),2,(S9=this.BY.Q,S9[1].call(S9[0]))));break;case 2:this.
Ee.Aho(A._GetAutoObject(A.Device.Helper).AhR(this.KH,(F=this.Cm.Dk,F[1].call(F[0
])),2,(CA=this.BY.Q,CA[1].call(CA[0]))));break;default:;}},ApA:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Dh.HZ.Hs,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JF(this.Dh);break;case 0:this.JF(this.Do);break;case 1:this.JF(this.
Ca);break;default:throw new Error(Ayk+(F=this.Dh.HZ.Hs,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JF(this.Dh);this.JF(this.Do);}break;case 25:case 42:{this.
JF(this.Dh);this.JF(this.Ca);}break;case 41:break;default:A.ab5("%s%e",As0,As.Id
);}},ApB:function(G){var F;C.HY.ApB.call(this,G);var AoP=0;switch((F=this.BY.Q,F[
1].call(F[0]))){case 0:case 2:AoP=A._GetAutoObject(A.Device.Device).AdN;break;case
1:AoP=730;break;default:A.ab5("%s%e",Ak8,(F=this.BY.Q,F[1].call(F[0])));}(F=this.
Cm.Dk,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Du()-A._GetAutoObject(A.Device.
Helper).AmA(AoP)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnP));this.Ee.Aho(A._GetAutoObject(
A.Device.Helper).W.AhR(1));},AeZ:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Av_,this.AeZ],0);},AtV:function(G){var F,CA,S9;this.AeZ(((F=this.Ca.Q,
F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S9=this.Ca.Q,S9[1].call(
S9[0])));A.pe([this,this.GH],this);},Anj:function(){return this.M2;},Av_:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvS._Init.call(this.Ca={I:this},0);C.Q8._Init.call(this.Do={I:this}
,0);C.AGv._Init.call(this.Dh={I:this},0);C.SO._Init.call(this.Cm={I:this},0);C.AkO.
_Init.call(this.Ee={I:this},0);C.BU._Init.call(this.G5={I:this},0);C.BU._Init.call(
this.Lg={I:this},0);this.__proto__=C.Ark;var B;this.Dq(C.AC6);this.CG.H(AcM);this.
Ca.H(Aoj);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.
Do.H(Aoj);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Uc));this.Do.ArU(false);this.Dh.
H(AX0);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GM));this.Dh.Bx(0);this.Cm.H(AcM);
this.Cm.Aj(true);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.AFs(true);this.Ee.H(AcM);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.F$(1000);this.Ee.EU(999000);this.
G5.H(AcM);this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Ari));this.Lg.H(AcM);this.Lg.Aj(
true);this.Lg.T(A.aaR(A.acf.AgE));this.J(this.Ca,-3);this.J(this.Do,-3);this.J(this.
Dh,-3);this.J(this.Cm,-3);this.J(this.Ee,-2);this.J(this.G5,-1);this.J(this.Lg,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Ca.AR=[this,this.AcO];this.Ca.LX([this
,this.AcO]);this.Ca.L0(A.aaL(A.ach.Ae$));this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Ars,B.PR]);this.Ca.OL([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY
]);this.Ca.PP([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.Ca.Ug([B=A._GetAutoObject(
A.Device.Device),B.Ani,B.Aot]);this.Ca.AeZ([this,this.Av_,this.AeZ]);this.Do.Gq([
this,this.D_,this.GQ]);this.Do.LX([this,this.AcO]);this.Do.L0(A.aaL(A.ach.Ae$));
this.Do.Ui([B=this.Gender.Animal,B.Ws,B.JR]);this.Do.OL([B=A._GetAutoObject(A.Device.
Device),B.Ue,B.UY]);this.Do.PP([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);
this.Do.Ug([B=A._GetAutoObject(A.Device.Device),B.Ani,B.Aot]);this.Do.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anm,B.Nd]);this.Do.Ano([B=this.AnimalType.Animal,B.PO,B.EB]
);this.Dh.Gq([this,this.D_,this.GQ]);this.Dh.LX([B=this.Dh,B.FU]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.At([B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SE]);this.
Dh.A88(A._GetAutoObject(A.Device.Helper).W);this.Cm.Gq([this,this.D_,this.GQ]);this.
Cm.LX([B=this.Cm,B.FU]);this.Cm.L0(A.aaL(A.ach.Edit));this.Cm.Ab2([B=A._GetAutoObject(
A.Device.Helper).W,B.Av4,B.Q1]);this.Ee.At([this,this.Anj,this.Ahl]);this.G5.At([
B=this.BirthType,B.B_,B.B$]);this.G5.CK(this.BirthType);this.Lg.At([B=this.EaseOfDelivery
,B.B_,B.B$]);this.Lg.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ca._Done(
);this.Do._Done();this.Dh._Done();this.Cm._Done();this.Ee._Done();this.G5._Done(
);this.Lg._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Ca._ReInit();this.
Do._ReInit();this.Dh._ReInit();this.Cm._ReInit();this.Ee._ReInit();this.G5._ReInit(
);this.Lg._ReInit();this.Ca.T(A.aaR(A.acf.AkZ));this.Ca.ArE(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asn));this.Ca.ArF(A.aaR(A.acf.Akg));this.Do.T(
A.aaR(A.acf.Uc));this.Dh.T(A.aaR(A.acf.GM));this.Cm.T(A.aaR(A.acf.Aea));this.Ee.
T(A.aaR(A.acf.M2));this.G5.T(A.aaR(A.acf.Ari));this.Lg.T(A.aaR(A.acf.AgE));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AG5={H7:null,AhH:null,AgP:null,AhI:null,AgQ:null,AnimalType:null,Background:
null,NX:null,Rg:null,V:null,TO:null,Yw:null,Aby:null,PN:null,DK:A.jV,AGx:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.AnZ();this.
AxL();},AnZ:function(){var F,CA;var LC=0;var Al_=0;var Alw=0;var Ib=0;if((((!!this.
AhH&&!!this.AhI)&&!!this.AgP)&&!!this.AgQ)&&!!this.AnimalType){Al_=(F=this.AhH,F[
1].call(F[0]));Alw=(F=this.AgP,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper
).L9((F=this.AhI,F[1].call(F[0])),(CA=this.AgQ,CA[1].call(CA[0])));Ib=(F=this.AnimalType
,F[1].call(F[0]));}var K6=A.jb.Text;var Ay4=A.jb.CS;if(!!LC){var ALp=A._GetAutoObject(
A.acj.DU).Alq(LC,Al_,Alw);Ay4=A._GetAutoObject(A.acj.DU).AzH(ALp,Ib);K6=A._GetAutoObject(
A.acj.DU).AzJ(ALp,Ib);}this.Background.L(Ay4);this.TO.L(K6);this.Rg.L(K6);this.NX.
L(K6);this.Aby.L(K6);if(K6===A.jb.Bm)this.Yw.L(K6);else this.Yw.L(A.jb.CJ);this.
V.L(K6);this.PN.L(K6);},AxL:function(){var F,CA;var LC=0;var Al_=0;var Alw=0;if(((
!!this.AhH&&!!this.AhI)&&!!this.AgP)&&!!this.AgQ){Al_=(F=this.AhH,F[1].call(F[0]
));Alw=(F=this.AgP,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).L9((F=this.
AhI,F[1].call(F[0])),(CA=this.AgQ,CA[1].call(CA[0])));}if(!!LC){var ALp=A._GetAutoObject(
A.acj.DU).Alq(LC,Al_,Alw);this.Rg.R(A._GetAutoObject(A.Device.Converter).S5(ALp,
2,true));this.NX.Z(true);this.Rg.Z(true);this.PN.Z(false);}else{this.NX.Z(false);
this.Rg.Z(false);this.PN.Z(true);}this.TO.R(this.ByH(Alw-Al_,LC));this.Aby.Z(this.
AGx);this.Yw.Z(this.AGx);this.NX.R(A._GetAutoObject(A.acj.DU).Aaq());},ByH:function(
A0P,Ah2){var B;if(Ah2<0){A.ab5("%s",AX1);return A.jV;}var Iu=(AX2+A._GetAutoObject(
A.acj.DU).AfZ())+CQ;var FV=A._GetAutoObject(A.Device.Converter).Ak4(A0P);if(!A0P
)FV=A.abU(FV,AX3,0);else if(A0P>0)FV=A.abU(FV,AH5,0);Iu=this.Bfo(Iu,AX4,FV);if(Ah2===
1)Iu=Iu+A.aaR(A.acf.BiN);else{Iu=Iu+A.aaR(A.acf.BiO);Iu=this.Bfo(Iu,AX5,Ah2.toFixed(
));}return Iu;},Bfo:function(aString,BbE,Bw8){if(aString===A.jV){A.ab5("%s",AX6);
return A.jV;}var A2x=aString.indexOf(BbE,0);if(A2x>=0){aString=A.ab1(aString,A2x
,BbE.length);aString=A.abU(aString,Bw8,A2x);}return aString;},ATk:function(E){if(
A.aaZ(this.AhH,E))return;if(!!this.AhH)A.z$([this,this.C2],this.AhH,0);this.AhH=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},Blw:function(
E){if(A.aaZ(this.AgP,E))return;if(!!this.AgP)A.z$([this,this.C2],this.AgP,0);this.
AgP=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATl:function(
E){if(A.aaZ(this.AhI,E))return;if(!!this.AhI)A.z$([this,this.C2],this.AhI,0);this.
AhI=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},Blx:function(
E){if(A.aaZ(this.AgQ,E))return;if(!!this.AgQ)A.z$([this,this.C2],this.AgQ,0);this.
AgQ=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A93:function(
E){if(this.AGx===E)return;this.AGx=E;this.Am();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rg={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TO={I:this},0);A.acg.
Ap._Init.call(this.Yw={I:this},0);A.acg.Ap._Init.call(this.Aby={I:this},0);C.CH.
_Init.call(this.PN={I:this},0);this.__proto__=C.AG5;this.H(AfA);this.Background.
AZ(0x3F);this.Background.H(AfA);this.NX.H(AX7);this.NX.R(A._GetAutoObject(A.acj.
DU).Aaq());this.NX.A5(0x9);this.NX.L(A.jb.Text);this.Rg.H(AX8);this.Rg.A5(0x14);
this.Rg.R(A.aaR(A.acu.Ake));this.Rg.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AX9);this.
V.R(A.aaR(A.acf.Aup));this.V.A5(0x12);this.V.L(A.jb.Text);this.TO.H(Z_);this.Yw.
AZ(0x14);this.Yw.H(AH6);this.Yw.Cu(1);this.Aby.AZ(0x14);this.Aby.H(AH6);this.Aby.
Cu(0);this.PN.H(AX_);this.PN.R(A.aaR(A.acf.A4k));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rg,0);this.J(this.V,0);this.J(this.TO,0);this.J(this.Yw
,0);this.J(this.Aby,0);this.J(this.PN,0);this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Ct(A.aaL(A.fl.Ik));this.Rg.S(A.aaL(A.fl.Aen));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.fl.Bh));this.TO.S(A.aaL(A.
fl.Af));this.TO.A2(A.aaL(A.fl.Ak));this.TO.Ct(A.aaL(A.fl.Bh));this.Yw.Aw(A.aaL(A.
ach.ABE));this.Aby.Aw(A.aaL(A.ach.ABE));this.H7=A._NewObject(A.Device.Rating,0);
this.PN.S(A.aaL(A.fl.Af));this.PN.A2(A.aaL(A.fl.Ak));this.PN.Ct(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rg._Done();this.V._Done();this.TO._Done();this.Yw._Done();this.Aby._Done(
);this.PN._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rg._ReInit();this.V.
_ReInit();this.TO._ReInit();this.Yw._ReInit();this.Aby._ReInit();this.PN._ReInit(
);this.Rg.R(A.aaR(A.acu.Ake));this.V.R(A.aaR(A.acf.Aup));this.PN.R(A.aaR(A.acf.A4k
));this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.aaL(A.fl.Af));this.NX.Ct(A.aaL(A.fl.Ik
));this.Rg.S(A.aaL(A.fl.Aen));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Ct(A.aaL(A.fl.Bh));this.TO.S(A.aaL(A.fl.Af));this.TO.A2(A.aaL(A.fl.Ak));this.
TO.Ct(A.aaL(A.fl.Bh));this.PN.S(A.aaL(A.fl.Af));this.PN.A2(A.aaL(A.fl.Ak));this.
PN.Ct(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhH)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgQ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVu={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hk:function(G){var B;if(!this.Animal||!this.Rating)return;var Ge=this.AD.G4;var
Cz=(C.AG5.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PO,B.EB]);Cz.Blw([B=A._GetAutoObject(A.Device.Device),B.AEy,B.AIN]);Cz.Blx([B=
this.Rating,B.A8M,B.OnSetTimestamp]);switch(Ge%this.AY){case 1:{Cz.ATk([B=this.Animal
,B.A8m,B.AE$]);Cz.ATl([B=this.Animal,B.A8N,B.AFD]);Cz.T(A.aaR(A.acf.Aup));}break;
default:if(this.Animal.Aq9()){Cz.ATk([B=this.Animal,B.ASf,B.Awz]);Cz.ATl([B=this.
Animal,B.ASw,B.Aw1]);Cz.T(A.aaR(A.acf.ALN));}else{Cz.ATk([B=this.Animal,B.ASf,B.
Awz]);Cz.ATl([B=this.Animal,B.ASw,B.Aw1]);Cz.T(A.aaR(A.acf.Bgq));}}if(this.AY>1)
Cz.A93(true);else Cz.A93(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GN
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.Co(this);break;default:this.Cq.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jw(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jw(1);else{this.Jw(2);this.AD.GS(1);this.
AD.HH(this.AD.Gr,true,null,null);}if(this.AY>0)this.AD.AbA(0,this.AY-1);},Akx:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbA(0,this.AY-1);
},CE:function(G){if(this.AD.Gr>0)this.AD.GS(this.AD.Gr-1);else this.AD.GS(this.AY-
1);this.AD.HH(this.AD.Gr,true,null,null);},Co:function(G){if(this.AD.Gr<(this.AY-
1))this.AD.GS(this.AD.Gr+1);else this.AD.GS(0);this.AD.HH(this.AD.Gr,true,null,null
);},Jw:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jw(this.AY);A.abo([this
,this.Arp,this.Jw],0);},Arp:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVu;this.H(AfA);this.Cq.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfA);this.AD.NZ(C.AG5);this.AD.Ae3(160);this.AD.GS(0);this.
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
this.KD=Fu;this.Qq=GE;},_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(KX);this.V.H(BD);this.Zt(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeM={KI:null,GJ:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KI.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KI.
L(this.V.AQ);},Init:function(aArg){},AbY:function(E){if(this.GJ===E)return;this.
GJ=E;this.KI.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KI={I:this},0);this.__proto__=C.AeM;this.H(KX);this.Background.H(KX);this.V.
H(AcI);this.V.R(Lu);this.KI.H(IT);this.KI.R(AX$);this.J(this.KI,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(null);this.KI.S(A.aaL(A.fl.Af));this.
KI.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KI._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KI.S(A.aaL(
A.fl.Af));this.KI.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvS={AB8:null,Q:null,A1:null,AF:null,Ii:null,LU:null,Ap:null,EM:null,AN0:A.jV
,AN1:A.jV,Bl:function(aSize){C.AeM.Bl.call(this,aSize);if(!this.AB8)this.KI.H([].
concat(0,this.KI.M.slice(1,4)));else this.KI.H([].concat(this.Ap.M[2],this.KI.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S9;C.AeM.Ai.call(this,Ae);var Bb7=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apa)this.AbY(this.AN0);else
this.AbY(this.AN1);}else{this.AbY(A._GetAutoObject(A.Device.Converter).Re((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ii&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ii,F[1].call(F[0]))===1)||(!(CA=this.Ii,CA[1].call(CA[0]))&&(S9=this.LU,S9[1].call(
S9[0])))))Bb7=true;}}this.EM.Z(Bb7);this.Ap.L(this.V.AQ);A.pe([this,this.Af9],this
);},C2:function(G){this.Am();},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AES:function(E){if(this.AB8===E)return;this.AB8=E;this.
Ap.Aw(E);this.BiU();},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaA],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaA],E,0);if(!!E)A.pe([
this,this.AaA],this);},PP:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaC],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaC],E,0);if(!!E)
A.pe([this,this.AaC],this);},AaC:function(G){this.Am();},AaA:function(G){this.Am(
);},Ug:function(E){if(A.aaZ(this.Ii,E))return;if(!!this.Ii)A.z$([this,this.AlR],
this.Ii,0);this.Ii=E;if(!!E)A.zX([this,this.AlR],E,0);if(!!E)A.pe([this,this.AlR
],this);},AlR:function(G){this.Am();},Af9:function(G){var F,CA;if((!this.Ii||!this.
A1)||!this.AF)return;var A2e=this.KI.Afc([(this.KI.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3z=this.KI.Afc([this.KI.String.
length-(F=this.AF,F[1].call(F[0])),0]);var AA9=this.KI.Db(0x0);this.EM.H([A2e[0]-
1,AA9[1],A3z[0]+1,AA9[3]]);},ArE:function(E){if(this.AN0===E)return;this.AN0=E;this.
Am();},ArF:function(E){if(this.AN1===E)return;this.AN1=E;this.Am();},AeZ:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A2Y],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A2Y],E,0);if(!!E)A.pe([this,this.A2Y],this);},A2Y:function(
G){this.Am();},_Init:function(aArg){C.AeM._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BT._Init.call(this.EM={I:this},0);this.__proto__=C.AvS;
this.Ap.H(AhS);this.EM.H(AYa);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KI.Q2([this,this.Af9]);},_Done:function(){this.__proto__=
C.AeM;this.Ap._Done();this.EM._Done();C.AeM._Done.call(this);},_ReInit:function(
){C.AeM._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeM._Mark.call(this,D);if((B=this.AB8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ii)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ih:0,Aaz:4,Bdi:true,Bdh:false,Bcc:true,Bda:false,AlX:function(
G){C.Q7.AlX.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bc$()){this.Ih=A._GetAutoObject(
A.Device.Helper).Uu.Id;var Aiu=A._GetAutoObject(A.Device.Helper).AQ0(this.Ih);if(
Aiu)A._GetAutoObject(A.Device.Device).A6(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A22]);else{this.Aaz=A._GetAutoObject(A.Device.
Helper).AQ1(this.Ih);var BdF=false;if((this.Aaz===3)||(this.Aaz===2))BdF=A._GetAutoObject(
A.Device.Helper).A6Y(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(BdF)A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Re(this.Ih),0,null
);else switch(this.Aaz){case 2:{var BM=A._GetAutoObject(A.Device.Converter).AxJ(
this.Ih);A._GetAutoObject(A.Device.Device).A6(46,true,BM.toFixed(),0,[this,this.
A22]);}break;case 3:case 1:case 0:case 4:this.A3P();break;default:throw new Error(
AH7+this.Aaz.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A$).Fy();},AIP:function(
s){this.Ev(s);},A3P:function(){if((this.Aaz===3)||(this.Aaz===2)){if((this.Bcc&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ih)){A._GetAutoObject(A.Device.Device).A6(69,true,A.jV,0,[this
,this.A22]);return;}else this.BBb();}A._GetAutoObject(A.Device.Helper).W.PR(this.
Ih);this.Bda=true;this.BBd();this.Ev(this);},A22:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A3P();break;case 107:switch(As.PopupState){case 7:{this.A3P();A._GetAutoObject(A.
Device.Helper).BnN(this.Ih);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(As.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AH8,As.Id);}},BBb:
function(){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(this.Bdh&&(A._GetAutoObject(
A.Device.Converter).WV(this.Ih)===10)){var BbS=Math.trunc((this.Ih%1000000000000
)/10000000000);if(!BbS&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((BbS===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBd:function(){if(this.
Bdi){A._GetAutoObject(A.Device.Helper).W.SE(A._GetAutoObject(A.Device.Helper).A4C(
A._GetAutoObject(A.Device.Device).AkY,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).AkY===1)A._GetAutoObject(A.Device.Helper).A$n();
}},_Init:function(aArg){C.Q7._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dq(C.II);this.Number.R(A.aaR(A.acf.OQ));this.Je.H(AYb);this.
IR.H(W0);this.Akz(1);this.N.CE=[this,this.AIP];this.N.C1(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q7._ReInit.call(this);this.Number.R(A.aaR(A.acf.OQ));},_className:"Application::SetTransponderScreen"
};C.ADg={Gm:null,Lk:null,Kq:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Lk.R(A._GetAutoObject(A.acj.DU
).AfZ());this.Kq.R(A._GetAutoObject(A.acj.DU).Aaq());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gm={I:this},0);A.acg.Text._Init.
call(this.Lk={I:this},0);A.acg.Text._Init.call(this.Kq={I:this},0);this.__proto__=
C.ADg;this.Background.L(A.jb.Text);this.Gm.H(AYc);this.Gm.A5(0x11);this.Gm.R(A.aaR(
A.acf.Date));this.Gm.L(A.jb.Bm);this.Lk.H(AYd);this.Lk.A5(0x11);this.Lk.L(A.jb.Bm
);this.Kq.H(AYe);this.Kq.L(A.jb.Bm);this.J(this.Gm,0);this.J(this.Lk,0);this.J(this.
Kq,0);this.Gm.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Gm._Done();this.Lk.
_Done();this.Kq._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Gm._ReInit();this.Lk._ReInit();this.Kq._ReInit();this.Gm.R(A.aaR(
A.acf.Date));this.Gm.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AG9={Mj:null,Ho:null,H$:null,AP:null,A_:null,FV:0,Ib:0,AiI:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ho.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Ho.M[2]-1,0,this.Ho.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiI){this.H$.R(Rl);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S5(this.FV,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzJ(this.FV,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DU).AzH(this.FV,this.Ib));}this.Ho.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Alt=this.AX.Hu(
Ad,6);var Al2=this.AX.CF(Ad,8);if(this.Hq>0){var Byf=this.AX.Hu(this.Hq-1,6);var
BAQ=this.AX.CF(this.Hq-1,8);var LC=A._GetAutoObject(A.Device.Helper).L9(Byf,Alt);
if(!!LC){this.AiI=false;this.FV=A._GetAutoObject(A.acj.DU).Alq(LC,BAQ,Al2);}else{
this.AiI=true;this.FV=0;}}else{this.AiI=true;this.FV=0;}this.T(A._GetAutoObject(
A.acj.KJ).ACJ(Alt));this.Ho.R(A._GetAutoObject(A.Device.Converter).Ak4(Al2));this.
Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Ho={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AG9;this.V.H(O3);this.Mj.H(As3);this.Ho.H(AH9);this.Ho.A5(0x12);this.Ho.R(Rj);
this.Ho.L(A.jb.Text);this.H$.H(AH_);this.H$.R(Rj);this.H$.L(A.jb.Text);this.AP.H(
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
A.Device.Helper).W.LastBodyWeight);var AdI=A.aaR(A.acf.BgN);AdI=A._GetAutoObject(
A.Device.Helper).Nk(AdI,P9,A._GetAutoObject(A.Device.Converter).S5(FV,2,true));AdI=
A._GetAutoObject(A.Device.Helper).Nk(AdI,Ax5,A._GetAutoObject(A.acj.DU).Aaq());this.
SX.R(AdI);this.AhO.L(A._GetAutoObject(A.acj.DU).AzH(FV,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SX.L(A._GetAutoObject(A.acj.DU).AzJ(FV,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SX.R(A.aaR(A.acf.AVs));this.AhO.L(A.jb.
AQM);this.SX.L(A.jb.Text);}},CC:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CV(HV);var Ac4=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);this.Axp(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},Axp:function(G){this.Bg=A._NewObject(C.Gb,0);this.Bg.NZ(C.AG9);this.Bg.H(Ayf
);this.Bg.Zm(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dv(this.KL);this.J(this.
Bg,0);this.Bb(this.Bg);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},Dv:function(
E){if(this.KL===E)return;this.KL=E;if(!!this.Bg)this.Bg.Dv(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADg._Init.call(this.VX={I:this},0);A.acg.AK._Init.
call(this.AhO={I:this},0);A.acg.Text._Init.call(this.SX={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dq(C.II);this.VX.H(
P_);this.KL=A.aaR(A.acf.Akf);this.AhO.AZ(0x1D);this.AhO.H(IT);this.SX.AZ(0x1D);this.
SX.H(IT);this.SX.A5(0x12);this.SX.R(Rj);this.J(this.VX,0);this.J(this.AhO,0);this.
J(this.SX,0);this.N.CE=[this,this.Anh];this.N.C1(A.aaL(A.ach.E2));this.SX.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.AhO._Done(
);this.SX._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VX._ReInit();this.AhO._ReInit();this.SX._ReInit();this.Dv(A.aaR(A.acf.Akf
));this.SX.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mg={DP:null,Act:null,ARp:11,EV:0,A4A:true,ABL:false,IY:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.Fb(4);else A._GetAutoObject(A.Device.Device).A6(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.AzT())this.DP.Ac3();else if((this.
EV===2)&&A._GetAutoObject(A.Device.Helper).W.AqR())this.Fb(5);else this.Fb(1);},
E4:function(G){this.AK0();},Ev:function(G){this.Fb(0);A._GetAutoObject(C.A$).Fy(
);},BBt:function(){A._GetAutoObject(A.Device.Device).AhG();},AK0:function(){A._GetAutoObject(
A.Device.Device).AnR();},A8$:function(E){if(this.ABL===E)return;this.ABL=E;A.abo([
this,this.BjY,this.A8$],0);},Fb:function(E){var B;if(this.EV===E)return;this.EV=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkJ();A.zX([this,this.AKp]
,[B=A._GetAutoObject(A.Device.Helper),B.Arq,B.Aky],0);A.z$([this,this.AAk],[B=this.
DP,B.Sz,B.Fb],0);this.BBt();}break;case 3:{A.z$([this,this.AKp],[B=A._GetAutoObject(
A.Device.Helper),B.Arq,B.Aky],0);this.AK0();this.Bzp();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asi();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4A)this.BBe();else this.BBh();}break;case 4:{A.z$([this,this.AKp],[B=A._GetAutoObject(
A.Device.Helper),B.Arq,B.Aky],0);this.AK0();A._GetAutoObject(A.Device.Helper).Asi(
);A.zX([this,this.Bep],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyH],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARp);}break;case 5:this.BfK();break;case
6:{A.zX([this,this.AAk],[B=this.DP,B.Sz,B.Fb],0);this.DP.Ac3();}break;case 0:{A.
z$([this,this.AKp],[B=A._GetAutoObject(A.Device.Helper),B.Arq,B.Aky],0);this.AK0(
);}break;default:throw new Error(Ayl);}A.abo([this,this.Sz,this.BvV],0);},BvV:function(
Aq){this.Fb(Aq);},AKp:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uu){if(
this.EV===1)this.Fb(3);else A.ab5("%s%e",AYf,this.EV);}else A.ab5("%s",AH$);},BBe:
function(){A._GetAutoObject(A.Device.Device).A6(13,true,A._GetAutoObject(A.Device.
Helper).Ak0(A._GetAutoObject(A.Device.Helper).Uu.Id).toFixed(),0,[this,this.BzE]
);},BzE:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bcg(false))A._GetAutoObject(
C.A$).Cf(31);else{A._GetAutoObject(A.Device.Helper).AkJ();this.Fb(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkJ();this.Fb(1);}},
Bcg:function(AiV){if(A._GetAutoObject(A.Device.Device).An.Lf()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gp();A._GetAutoObject(
A.Device.Helper).Aqb(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PR(A._GetAutoObject(A.Device.Helper).Uu.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhC){var AlD=A._GetAutoObject(A.Device.Helper).AhC.AOJ();A._GetAutoObject(
A.Device.Helper).W.AbZ(AlD);A._GetAutoObject(A.Device.Helper).W.Anv(AlD);}if(A._GetAutoObject(
A.Device.Helper).AQ1(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nd(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SE(A._GetAutoObject(A.Device.Helper).BgB(A._GetAutoObject(A.Device.
Device).Agu,A._GetAutoObject(A.Device.Helper).W));if(AiV){A._GetAutoObject(A.Device.
Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SN(L7);if(A._GetAutoObject(A.Device.Helper).AmY()){if(A._GetAutoObject(A.
Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abl(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B0.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agu)A._GetAutoObject(
A.Device.Helper).A$n();}return true;},Bzp:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uu){var AJg=true;if(A._GetAutoObject(A.Device.Helper).Uu.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJg=A._GetAutoObject(A.Device.Helper).A6_(A._GetAutoObject(
A.Device.Helper).Uu.Id);if(!AJg&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bcg(true);AJg=A._GetAutoObject(A.Device.Helper).A6_(A._GetAutoObject(A.
Device.Helper).Uu.Id);}}if(AJg)this.Fb(5);else this.Fb(2);}else{A.ab5("%s",AH$);
return;}},Bep:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARp){A.z$([this,this.Bep],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyH
],0);if(A._GetAutoObject(A.Device.Helper).W.AqR())this.Fb(5);else this.Fb(1);}},
BfK:function(){if(this.ABL===true)this.Fb(6);else A._GetAutoObject(C.A$).Cf(24);
},BBh:function(){A._GetAutoObject(A.Device.Device).A6(36,true,A.jV,0,[this,this.
BAv]);},BAv:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkJ();this.Fb(1);}},AAk:function(G){if(!this.DP.EV)this.Fb(1);},A2Q:function(G
){},Bv5:function(s){this.A2Q(s);},BjY:function(){return this.ABL;},Sz:function(){
return this.EV;},_Init:function(aArg){C.Q7._Init.call(this,aArg);A.acg.Text._Init.
call(this.Act={I:this},0);this.__proto__=C.Mg;this.N.Z(true);this.Dq(C.AqS);this.
Number.H(AYg);this.Number.R(A.aaR(A.acf.A_Q));this.Je.H(AYh);this.IR.H(AYi);this.
Act.H(AYj);this.Act.R(AYk);this.Act.L(A.jb.Text);this.J(this.Act,0);this.N.CE=[this
,this.Ev];this.N.Ck=[this,this.Bv5];this.N.C1(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Act.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Q7;this.Act._Done();C.Q7._Done.call(this);},_ReInit:function(
){C.Q7._ReInit.call(this);this.Act._ReInit();this.Number.R(A.aaR(A.acf.A_Q));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q7._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4o={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ao7:-1,EV:0,Bxu:function(){var Bfp=false;
var Oi=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else if(Oi){Bfp=true;var B0=A._NewObject(
A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axl(B0,5);B0.OnSetAppearance(3);B0.Cg(A._GetAutoObject(
A.Device.Device).Bt);}else{var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axl(B0
,5);B0.OnSetAppearance(1);B0.Cg(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(Bfp)A._GetAutoObject(A.Device.Helper).W.Uk(false);if(Oi)A.
_GetAutoObject(A.Device.Helper).W.AnM(false);else A._GetAutoObject(A.Device.Helper
).W.AnM(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A6(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bxw:function(){A._GetAutoObject(
A.Device.Helper).W.AGt(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A6(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qk:function(ED){switch(ED){case 4:this.Bxu();break;case
128:A._GetAutoObject(C.A$).Cf(7);break;case 16:A._GetAutoObject(C.A$).Cf(36);break;
case 1:A._GetAutoObject(C.A$).Cf(10);break;case 2:A._GetAutoObject(C.A$).Cf(11);
break;case 8:this.Bxw();break;case 64:A._GetAutoObject(C.A$).Cf(29);break;case 32:
A._GetAutoObject(C.A$).Cf(48);break;case 256:A._GetAutoObject(C.A$).Cf(21);break;
case 512:A._GetAutoObject(C.A$).Cf(30);break;case 1024:this.Bzm();break;case 262144:
this.BBJ();break;case 2048:this.Ac3();break;case 4096:this.Bb_(false);break;case
8192:this.Bxv();break;case 16384:this.Bzl();break;case 32768:this.BxV();break;case
524288:this.BxW();break;case 65536:this.Byi();break;case 131072:this.BA7();break;
case 0:break;default:throw new Error(AYl);}},Bci:function(ED,Bw1){var EP=A._NewObject(
C.Wg,0);EP.AbX(false);EP.Aj(true);EP.AR=Bw1;EP.Bk6(ED);switch(ED){case 1:{EP.T(A.
aaR(A.acf.AnS));EP.DB(A.aaL(A.ach.ALD));}break;case 2:{EP.T(A.aaR(A.acf.A_z));EP.
DB(A.aaL(A.ach.ALE));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DB(A.aaL(A.ach.ALF
));EP.AFp(true);}break;case 8:{EP.T(A.aaR(A.acf.Ar6));EP.DB(A.aaL(A.ach.ALG));EP.
AFp(true);}break;case 16:{EP.T(A.aaR(A.acf.AMc));EP.DB(A.aaL(A.ach.ALH));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DB(A.aaL(A.ach.ALI));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DB(A.aaL(A.ach.ALJ));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DB(A.aaL(A.ach.ALK));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DB(A._GetAutoObject(A.acj.DU).ByX());}break;case 512:{EP.T(A.aaR(A.acf.ARO));
EP.DB(A.aaL(A.ach.ALv));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DB(A.aaL(A.ach.ALw));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DB(A.aaL(A.ach.ALC));}break;case 2048:{EP.T(A.aaR(A.acf.Ts));EP.DB(A.aaL(A.ach.ALx
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DB(A.aaL(A.ach.ALy));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DB(A.aaL(A.ach.ALz));EP.AFp(true);}break;case
16384:{EP.T(A.aaR(A.acf.BhR));EP.DB(A.aaL(A.ach.ALA));}break;case 131072:{EP.T(A.
aaR(A.acf.BnZ));EP.DB(A.aaL(A.ach.ALB));}break;default:A.ab5("%s",(AYm+ED.toFixed(
))+AYn);}return EP;},Byv:function(){this.Ao7=this.Ao7+1;if(this.Ao7>=this.AutoActions.
NP())this.Fb(0);else this.Fb(2);},BAU:function(){this.Ao7=-1;},AzT:function(){return(
this.Ao7>-1)&&!this.Bzf();},Bzf:function(){return this.Ao7>=this.AutoActions.NP(
);},Fb:function(E){if(this.EV===E)return;this.EV=E;switch(E){case 1:this.Byv();break;
case 2:{var Aah=this.AutoActions.OC(this.Ao7);if(this.A4l(A._GetAutoObject(A.Device.
Helper).W,Aah))this.Qk(Aah);else A._GetAutoObject(A.Device.Device).A6(64,true,(this.
ActionToString.Lt(Aah)+As1)+this.AnimalTypeToString.Lt(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BAU();break;default:throw new
Error(Ayl);}A.abo([this,this.Sz,this.Fb],0);},MT:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bb_(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A$).Cf(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.AzT())this.
Fb(1);},Bca:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bzm:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cf(
45);else A._GetAutoObject(A.Device.Device).A6(32,true,A.jV,0,[this,this.MT]);},Ac3:
function(){this.Fb(1);},BAS:function(){var Oi=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oi&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device
).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating,0);B0.Gp();
B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axl(B0,5);B0.Cg(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uk(false);if(Oi)A._GetAutoObject(
A.Device.Helper).W.AnM(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BAT:function(){A._GetAutoObject(
A.Device.Helper).W.AGt(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A6(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bb_:function(Byz){if(
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
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4l:function(Em,ED
){var Qu=false;switch(ED){case 32768:Qu=Em.IsRegistrationNoticePending&&!!Em.NaisIdMother;
break;case 524288:Qu=Em.IsRegistrationNoticePending&&!Em.NaisIdMother;break;case
4096:case 8192:switch(Em.AnimalType){case 1:Qu=true;break;default:;}break;case 512:
switch(Em.AnimalType){case 0:Qu=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qu=true;break;default:A.ab5("%s",AYo+
ED.toFixed());}return Qu;},BA7:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cf(80);else A._GetAutoObject(A.Device.Device).A6(
69,true,A.jV,0,[this,this.MT]);},BBJ:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A6(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.PR(0);A._GetAutoObject(A.Device.Helper).W.SE(A._GetAutoObject(A.
Device.Helper).A4C(A._GetAutoObject(A.Device.Device).AnX,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A6(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},BxW:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae1(false);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A6(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Sz:function(){return this.EV;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A4o;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALP={AaX:null,Aqd:null,Fb:function(E){if(this.EV===E)return;C.Mg.Fb.call(this
,E);switch(E){case 1:this.Dq(C.AqS);break;case 5:case 6:this.Dq(C.II);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayl);}},A2Q:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaX={I:this},0);C.ALQ._Init.call(this.Aqd={I:this
},0);this.__proto__=C.ALP;this.A8$(true);this.AaX.H(AYp);this.AaX.R(A.aaR(A.acf.
Ts));this.AaX.L(A.jb.Text);this.Aqd.H(AYq);this.J(this.AaX,0);this.J(this.Aqd,0);
this.N.Cv(A.aaL(A.ach.Aex));this.AaX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mg;this.AaX._Done();this.Aqd._Done();C.Mg._Done.call(this);},_ReInit:function(
){C.Mg._ReInit.call(this);this.AaX._ReInit();this.Aqd._ReInit();this.AaX.R(A.aaR(
A.acf.Ts));this.AaX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(
this,D);if((B=this.AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqd)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ia:null,JZ:null,A2Q:function(G){if(this.Ia.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mg._Init.call(this,aArg);A.acg.Text._Init.call(this.
JZ={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JZ.H(AYr);this.JZ.KQ(
true);this.JZ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABz));this.
JZ.L(A.jb.Text);this.J(this.JZ,0);this.N.Cv(A.aaL(A.ach.Aex));this.JZ.S(A.aaL(A.
fl.Af));this.Ia=A._GetAutoObject(C.Pi);},_Done:function(){this.__proto__=C.Mg;this.
JZ._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.
JZ._ReInit();this.JZ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABz
));this.JZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(this,D);if((
B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JZ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALQ={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABj],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Auo],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABj],this);
A.pe([this,this.Auo],this);this.H(A.abK(this.M,AYs));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYt)));},Bb0:function(G){var B;var Alr=0;var Azl=0;
var Bce;var X=this.Y.Ah;var Cx=null;Bce=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wg.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYu));Cx.H(A.abM(Cx.M
,(Azl*58)+Bce));Cx.H(A.abO(Cx.M,Alr*58));if(Azl>=3){Alr=Alr+1;Azl=0;}else Azl=Azl+
1;}X=X.Ah;}this.Bb(null);},A1d:function(ED){var EP=A._GetAutoObject(C.DP).Bci(ED
,null);this.J(EP,0);this.Bb0(this);},AoW:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(
AdG);}},ABj:function(G){this.AoW();var O;var CB=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CB;O=O+1){var Aah=A._GetAutoObject(C.AutoActions).OC(O);this.A1d(
Aah);}A.pe([this,this.Bb0],this);A.pe([this,this.Auo],this);A.pe([this,this.BBT]
,this);},Auo:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(X)?X:null);Aa.AFp(false);
}X=X.Ah;}},BBT:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wg.isPrototypeOf(X)?X:null);var BxL=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A87(false);for(O=0;O<BxL;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OC(O)){Aa.A87(true);Aa.Bmb(AYv+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALQ;this.Y.JQ(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A4o._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APs={Lj:null,T2:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).AlC());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lj={I:this},0);C.CH._Init.call(this.T2={I:this},0);this.__proto__=
C.APs;this.Lj.H(AYw);this.Lj.A5(0x12);this.Lj.L(A.jb.Text);this.T2.H(Aon);this.T2.
R((A.aaR(A.acf.Ahg)+AIa)+A.aaR(A.acf.Kj));this.T2.A5(0x12);this.T2.L(A.jb.Text);
this.J(this.Lj,0);this.J(this.T2,0);this.Lj.S(A.aaL(A.fl.Af));this.T2.S(A.aaL(A.
fl.Ak));this.T2.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Lj._Done();this.T2._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Lj._ReInit();this.T2._ReInit();this.T2.R((A.aaR(A.acf.
Ahg)+AIa)+A.aaR(A.acf.Kj));this.Lj.S(A.aaL(A.fl.Af));this.T2.S(A.aaL(A.fl.Ak));this.
T2.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADe={Jv:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jv={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADe;this.Jv.H(AYx
);this.Jv.KQ(true);this.Jv.A5(0x14);this.Jv.R(A.aaR(A.acf.AhN)+AIb);this.Jv.L(A.
jb.Text);this.D0.H(Aon);this.D0.KQ(true);this.D0.R(A.aaR(A.acf.AFY));this.D0.L(A.
jb.Text);this.J(this.Jv,0);this.J(this.D0,0);this.Jv.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jv._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jv._ReInit(
);this.D0._ReInit();this.Jv.R(A.aaR(A.acf.AhN)+AIb);this.D0.R(A.aaR(A.acf.AFY));
this.Jv.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TR={I8:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I8={I:this},0);this.__proto__=C.TR;this.I8.H(AIc);this.I8.R((((A.aaR(A.acf.RL)+AcN
)+AId)+A.aaR(A.acf.A$B))+Oa);this.I8.A5(0x12);this.I8.L(A.jb.Text);this.J(this.I8
,0);this.I8.S(A.aaL(A.fl.Af));this.I8.A2(A.aaL(A.fl.Ak));this.I8.Ct(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dc;this.I8._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I8._ReInit();this.I8.R((((A.aaR(
A.acf.RL)+AcN)+AId)+A.aaR(A.acf.A$B))+Oa);this.I8.S(A.aaL(A.fl.Af));this.I8.A2(A.
aaL(A.fl.Ak));this.I8.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APu={Lk:null,Kq:null,CP:function(){this.A_S();},Init:function(aArg){this.A_S(
);},A_S:function(){this.Lk.R(A._GetAutoObject(A.acj.DU).AfZ());this.Kq.R(A._GetAutoObject(
A.acj.DU).Aaq());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lk={I:this},0);C.CH._Init.call(this.Kq={I:this},0);this.__proto__=C.APu;
this.Lk.H(AYy);this.Lk.A5(0x12);this.Lk.L(A.jb.Text);this.Kq.H(Aon);this.Kq.L(A.
jb.Text);this.J(this.Lk,0);this.J(this.Kq,0);this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(
A.aaL(A.fl.Af));this.Kq.A2(A.aaL(A.fl.Ak));this.Kq.Ct(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Lk._Done();this.Kq._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Lk._ReInit();
this.Kq._ReInit();this.Lk.S(A.aaL(A.fl.Af));this.Kq.S(A.aaL(A.fl.Af));this.Kq.A2(
A.aaL(A.fl.Ak));this.Kq.Ct(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM4={Mj:null,Ho:null,H$:null,AP:null,A_:null,FV:0,Aaw:0,Ib:0,AiI:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ho.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Ho.M[2]-1,0,this.Ho.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiI){this.H$.R(Rl);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S5(this.FV,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzJ(this.FV,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DU).AzH(this.FV,this.Ib));}if(this.Aaw>0)this.Ho.
R(A._GetAutoObject(A.Device.Converter).Ak4(this.Aaw));else this.Ho.R(Rl);this.Ho.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Mf=
this.AX.CF(Ad,1);var Auj=this.AX.Hu(Ad,24);var AJ1=this.AX.CF(Ad,23);var Auk=this.
AX.Hu(Ad,19);this.Aaw=this.AX.CF(Ad,18);if((Auj>0)&&(Auj!==Auk)){var LC=A._GetAutoObject(
A.Device.Helper).L9(Auj,Auk);if(!!LC){this.AiI=false;this.FV=A._GetAutoObject(A.
acj.DU).Alq(LC,AJ1,this.Aaw);}else{this.AiI=true;this.FV=0;}}else{this.AiI=true;
this.FV=0;}this.T(Mf.toFixed());this.Ib=this.AX.AmN(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Ho={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AM4;this.V.H(O3);this.Mj.H(As3);this.Ho.H(AH9);this.Ho.A5(0x12);this.Ho.R(Rj);
this.Ho.L(A.jb.Text);this.H$.H(AH_);this.H$.R(Rj);this.H$.L(A.jb.Text);this.AP.H(
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
"Application::CalfListWeightItem"};C.M1={Mi:null,AP:null,A_:null,Gy:null,Xk:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mi.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mi.M);this.Background.H([].concat(this.Mi.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gy.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gy.M[2]-1,0,this.
Gy.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gy.L(this.V.AQ
);if(!!this.Xk&&(this.Xk!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Qm(this.
Xk));this.V.L(A._GetAutoObject(A.acj.Assessment).Xu(this.Xk));}else this.Mi.L(this.
Background.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var
Mf=this.AX.CF(Ad,1);var LP=this.AX.I4(Ad,13);var Alx=this.AX.I4(Ad,17);var AlG=this.
AX.H2(Ad,11);var Ay5=this.AX.Hu(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
L9(Ay5,A._GetAutoObject(A.Device.Helper).Du());this.Xk=A._GetAutoObject(A.Device.
Helper).AL$(LP,AlG,Alx);this.T(Mf.toFixed());if(AfM<100)this.Gy.R((AfM.toFixed()+
CQ)+A.aaR(A.acf.ALO));else this.Gy.R(A._GetAutoObject(A.acj.KJ).ACK(Ay5,A._GetAutoObject(
A.Device.Helper).Du(),AIe));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mi={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gy={I:this
},0);this.__proto__=C.M1;this.Mi.H(As3);this.Background.H(AYz);this.V.H(O3);this.
AP.H(Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.A_.L(A.jb.Bc);this.Gy.H(Aym);this.
J(this.Mi,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gy,0);this.Gy.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done(
);this.AP._Done();this.A_._Done();this.Gy._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gy._ReInit();this.Gy.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM2={Ajt:null,N8:null,AP:null,A_:null,Jq:null,AKh:0,A2d:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajt.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jq.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jq.De(this.V.AQ);if(this.AKh>0){this.Ajt.L(A._GetAutoObject(A.acj.Assessment
).Qm(this.A2d));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xu(this.A2d));}else{
this.Ajt.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hq=Ad;if(!!this.AX){var Iy=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,
1);this.AKh=this.AX.CF(Ad,5);this.A2d=this.AX.I4(Ad,17);this.T(Mf.toFixed());if(
this.AKh>0)this.N8.R(A._GetAutoObject(A.Device.Converter).AkV(this.AKh));else this.
N8.R(Rl);var Xj=A._GetAutoObject(A.Device.Helper).ZM(6);A._GetAutoObject(A.Device.
Device).SN(Ad);var A0o=A._GetAutoObject(A.Device.Helper).Bif(A._GetAutoObject(A.
Device.Device).Bt,9,Iy,Xj,0);this.Jq.A9n(A0o.Get(3));this.Jq.A9p(A0o.Get(2));this.
Jq.A9o(A0o.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajt={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jq._Init.call(this.Jq={I:this},0);this.__proto__=C.AM2;this.N8.A5(0x12);this.
N8.R(Rj);this.N8.L(A.jb.Text);this.AP.H(Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.
A_.L(A.jb.Bc);this.Jq.H(AYA);this.J(this.Ajt,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jq,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajt._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jq._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajt._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jq._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jq={Afl:null,
ColoredCounterAttrSet:null,ACb:0,ACc:0,ACa:0,KR:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKa;var ALu;var AKF;var AlO=0;if(this.ACa>0){AKa=this.ACa.toFixed(
);AlO+=AKa.length;}else{AKa=AYB;AlO++;}if(this.ACc>0){ALu=this.ACc.toFixed();AlO+=
ALu.length;}else{ALu=Ayn;AlO++;}if(this.ACb>0){AKF=this.ACb.toFixed();AlO+=AKF.length;
}else{AKF=AH4;AlO++;}if(AlO<=4)this.ColoredCounterAttrSet.Ahm(A.aaL(A.fl.Af));else
if(AlO<=5)this.ColoredCounterAttrSet.Ahm(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahm(A.aaL(A.fl.Bh));this.Afl.R(((((AYC+AKa)+AYD)+ALu)+AYE)+AKF);},A9o:function(E
){if(this.ACb===E)return;this.ACb=E;this.Am();},A9p:function(E){if(this.ACc===E)
return;this.ACc=E;this.Am();},A9n:function(E){if(this.ACa===E)return;this.ACa=E;
this.Am();},De:function(E){if(this.KR===E)return;this.KR=E;this.ColoredCounterAttrSet.
Ahj(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuF._Init.call(
this.Afl={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jq;this.H(AIf);this.Afl.AZ(0x3F);this.Afl.H(AIf);this.
Afl.R(Rj);this.ColoredCounterAttrSet.Blg(A.jb.E1);this.ColoredCounterAttrSet.A9e(
A.jb.H8);this.ColoredCounterAttrSet.A9d(A.jb.Gh);this.ColoredCounterAttrSet.Ahj(
A.jb.Text);this.KR=A.jb.Text;this.J(this.Afl,0);this.Afl.A8_(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahm(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9a(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afl._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afl._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahm(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM1={Atv:null
,Ab8:null,Ab9:null,Ab_:null,Jq:null,AP:null,A_:null,Ea:null,Lr:null,Acv:null,KS:
null,KT:null,AJm:0,AJl:0,AJk:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Ab8.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acv.H(this.
Ab8.M);this.A_.H([this.Ab8.M[2]-1,0,this.Ab8.M[2]+1,aSize[1]]);this.Ab9.H([this.
Ab8.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KS.H(this.Ab9.M);this.Ea.H([this.
Ab9.M[2]-1,0,this.Ab9.M[2]+1,aSize[1]]);this.Ab_.H([this.Ab9.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KT.H(this.Ab_.M);this.Lr.H([this.Ab_.M[2]-1,0,this.Ab_.
M[2]+1,aSize[1]]);this.Jq.H([this.Ab_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jq.De(this.V.AQ);this.Ab8.L(A._GetAutoObject(A.acj.
Assessment).Qm(this.AJk));this.Ab9.L(A._GetAutoObject(A.acj.Assessment).Qm(this.
AJl));this.Ab_.L(A._GetAutoObject(A.acj.Assessment).Qm(this.AJm));this.Acv.L(A._GetAutoObject(
A.acj.Assessment).Xu(this.AJk));this.KS.L(A._GetAutoObject(A.acj.Assessment).Xu(
this.AJl));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xu(this.AJm));this.Acv.Z(
!this.AJk);this.KS.Z(!this.AJl);this.KT.Z(!this.AJm);this.Jq.A9n(this.Atv.Get(3)
);this.Jq.A9p(this.Atv.Get(2));this.Jq.A9o(this.Atv.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hq=Ad;if(!!this.AX){var Iy=this.AX.CF(Ad,0);var Mf=this.AX.
CF(Ad,1);this.T(Mf.toFixed());A._GetAutoObject(A.Device.Device).SN(Ad);this.AJk=
A._GetAutoObject(A.Device.Helper).A1Q(A._GetAutoObject(A.Device.Device).Bt,Iy,0);
this.AJl=A._GetAutoObject(A.Device.Helper).A1Q(A._GetAutoObject(A.Device.Device).
Bt,Iy,-1);this.AJm=A._GetAutoObject(A.Device.Helper).A1Q(A._GetAutoObject(A.Device.
Device).Bt,Iy,-2);this.Atv=A._GetAutoObject(A.Device.Helper).A6f(A._GetAutoObject(
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
10,0,this.H6.M[0]-10,40]);C.TC.Bl.call(this,aSize);},Ai:function(Ae){C.TC.Ai.call(
this,Ae);if(this.Af1)this.H6.Cu(1);else this.H6.Cu(0);},J$:function(G){if(this.Af1
)C.TC.J$.call(this,G);},J6:function(G){if(this.Af1)C.TC.J6.call(this,G);},Tn:function(
AI){C.TC.Tn.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af1=true;this.Zt(
true);}else{this.H(A.abI(this.M,40));this.Af1=false;this.Zt(false);}},_Init:function(
aArg){C.TC._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.AmQ;this.V.A5(0x11);this.H6.H(AHB);this.H6.Cu(0);this.J(this.H6,0);this.V.Ct(A.
aaL(A.fl.Bh));this.H6.Aw(A.aaL(A.ach.AqH));},_Done:function(){this.__proto__=C.TC;
this.H6._Done();C.TC._Done.call(this);},_ReInit:function(){C.TC._ReInit.call(this
);this.H6._ReInit();this.V.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TC._Mark.
call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AFX={_Init:function(aArg){C.Axc._Init.call(this,aArg);this.__proto__=C.AFX;}
,_className:"Application::OptionsOverlaySeparator"};C.AkB={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axc._Init.call(this,aArg);this.__proto__=C.AkB;},_className:"Application::OptionsOverlayNode"
};C.Zv={AR:null,_Init:function(aArg){C.AkB._Init.call(this,aArg);this.__proto__=
C.Zv;},_Mark:function(D){var B;C.AkB._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANv={Ai:function(Ae){C.OU.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(
this.Hj){FQ=A.jb.Text;GW=A.jb.Bm;}this.Background.L(FQ);this.V.L(GW);},_Init:function(
aArg){C.OU._Init.call(this,aArg);this.__proto__=C.ANv;},_className:"Application::DarkThemeTextItem"
};C.OU={Background:null,BT:null,V:null,Aqo:0,Hj:false,Init:function(aArg){},Bl:function(
aSize){C.Hg.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BT.H(A.abK(this.BT.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hg.Ai.call(this,Ae);this.BT.L(this.Aqo);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hj===E)return;this.Hj=E;this.Am();
},ArD:function(E){if(this.Aqo===E)return;this.Aqo=E;this.Am();},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BT._Init.call(this.BT={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OU;this.H(BD);this.Background.H(AIg);this.BT.H(BD);this.BT.Ng(2);this.BT.L(A.jb.
Rd);this.V.H(AYF);this.Aqo=A.jb.Rd;this.J(this.Background,0);this.J(this.BT,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);this.BT._Done();this.V._Done();C.Hg._Done.call(this);},_ReInit:function(){C.Hg.
_ReInit.call(this);this.Background._ReInit();this.BT._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APx={Er:null,IM:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Er={
I:this},0);A.acg.Text._Init.call(this.IM={I:this},0);this.__proto__=C.APx;this.H(
O2);this.Background.H(O2);this.Er.H(AIh);this.Er.R(A.aaR(A.acf.GM));this.Er.A5(0x11
);this.Er.L(A.jb.Text);this.IM.AZ(0x3F);this.IM.H(Ayo);this.IM.Hl(5);this.IM.A5(
0x14);this.IM.R(A.aaR(A.acf.AGG));this.IM.L(A.jb.Text);this.J(this.Er,0);this.J(
this.IM,0);this.Er.S(A.aaL(A.fl.Af));this.IM.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Er._Done();this.IM._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.IM._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.IM.R(A.aaR(A.acf.AGG));this.Er.S(A.aaL(A.fl.Af));this.IM.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sl:null,Sm:null,Aey:null,Ag1:null,QH:null
,KR:0,LastTemperature:0,Aqu:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sl.Aw(A.aaL(A.ach.Avv));this.Sm.Aw(A.aaL(A.ach.Avv));}break;case 2:{this.Sl.Aw(A.
aaL(A.ach.Avy));this.Sm.Aw(A.aaL(A.ach.Avy));}break;default:{this.Sl.Aw(A.aaL(A.
ach.Aet));this.Sm.Aw(A.aaL(A.ach.Aet));}}this.Sl.L(A._GetAutoObject(A.acj.Assessment
).Qm(this.Aqu));var ApH;if(this.IsWatch)ApH=A.aaL(A.ach.AQu);else if(this.IsFever
){ApH=A.aaL(A.ach.AQt);switch(A._GetAutoObject(A.Device.Converter).Ajh(this.LastTemperature
,this.AnimalType)){case 3:this.QH.L(A.jb.Gh);break;case 2:this.QH.L(A.jb.H8);break;
case 1:this.QH.L(A.jb.E1);break;case 0:this.QH.L(A.jb.Afp);break;default:;}}else
if(this.IsAlarm){ApH=A.aaL(A.ach.AQs);if(!this.Aqu||(this.Aqu===5))this.QH.L(A.jb.
Gh);else this.QH.L(0xFF000000);}else ApH=null;this.Aey.Aw(ApH);this.Ag1.Aw(ApH);
this.QH.Aw(ApH);if(A._GetAutoObject(A.acj.Assessment).Qm(this.Aqu)===A.jb.E1)this.
Sm.L(this.KR);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AEU:function(E){if(this.Aqu===E)return;this.Aqu=E;this.Am();},De:function(
E){if(this.KR===E)return;this.KR=E;this.Am();},Ae2:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uk:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae4:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E5:function(){this.EB(0);this.AEU(0);this.AeY(false);this.Uk(false
);this.Ae2(false);this.Ae4(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sl={I:this},0);A.acg.Ap._Init.call(
this.Sm={I:this},0);A.acg.Ap._Init.call(this.Aey={I:this},0);A.acg.Ap._Init.call(
this.Ag1={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);this.__proto__=C.DS;
this.H(Ala);this.Sl.AZ(0x3F);this.Sl.H(Ala);this.Sl.L(A.jb.CJ);this.Sl.A5(0x12);
this.Sl.Cu(0);this.Sm.AZ(0x3F);this.Sm.H(Ala);this.Sm.L(0xFF000000);this.Sm.A5(0x12
);this.Sm.Cu(1);this.Aey.AZ(0x3F);this.Aey.H(Ala);this.Aey.L(0xFF000000);this.Aey.
Cu(0);this.Ag1.AZ(0x3F);this.Ag1.H(Ala);this.Ag1.Cu(1);this.QH.AZ(0x3F);this.QH.
H(Ala);this.QH.L(A.jb.CS);this.QH.Cu(2);this.KR=A.jb.Text;this.J(this.Sl,0);this.
J(this.Sm,0);this.J(this.Aey,0);this.J(this.Ag1,0);this.J(this.QH,0);this.Sl.Aw(
A.aaL(A.ach.Aet));this.Sm.Aw(A.aaL(A.ach.Aet));},_Done:function(){this.__proto__=
A.Core.P;this.Sl._Done();this.Sm._Done();this.Aey._Done();this.Ag1._Done();this.
QH._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sl._ReInit();this.Sm._ReInit();this.Aey._ReInit();this.Ag1._ReInit();
this.QH._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AMY={Ce:function(Ad){C.Ajw.Ce.call(this,Ad);if(!!this.AX){var Bzj=this.AX.H2(
Ad,12);var BxD=this.AX.Sh(Ad,15);this.Aba.R(A._GetAutoObject(A.Device.Helper).L9(
BxD,A._GetAutoObject(A.Device.Helper).Du()).toFixed());this.Sn.Z(Bzj);this.Am();
}},_Init:function(aArg){C.Ajw._Init.call(this,aArg);this.__proto__=C.AMY;},_className:
"Application::CalfListAlarmItem"};C.ADa={D0:null,Mr:null,_Init:function(aArg){C.
TS._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mr={I:this},0);this.__proto__=C.ADa;this.D0.H(Aon);this.D0.KQ(true);this.
D0.R(A.aaR(A.acf.A5r));this.D0.L(A.jb.Text);this.Mr.H(AIi);this.Mr.I9(false);this.
Mr.L(A.jb.Text);this.Mr.A5(0x12);this.J(this.D0,-2);this.J(this.Mr,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mr.Aw(A.aaL(A.ach.ADB));},_Done:function(){this.__proto__=C.
TS;this.D0._Done();this.Mr._Done();C.TS._Done.call(this);},_ReInit:function(){C.
TS._ReInit.call(this);this.D0._ReInit();this.Mr._ReInit();this.D0.R(A.aaR(A.acf.
A5r));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TS._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Ki={Background:null,BT:
null,ACC:0,ABR:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACC);this.BT.L(this.ABR);},Awy:function(E){if(this.ACC===E)return;this.ACC=E;this.
Am();},AEM:function(E){if(this.ABR===E)return;this.ABR=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BT={I:this},0);this.__proto__=C.Ki;this.H(Aop);this.
Background.AZ(0x3C);this.Background.H(Aop);this.Background.Cu(1);this.BT.AZ(0x3C
);this.BT.H(Aop);this.ACC=A.jb.E1;this.ABR=A.jb.Text;this.J(this.Background,0);this.
J(this.BT,0);this.Background.Aw(A.aaL(A.ach.Ki));this.BT.Aw(A.aaL(A.ach.Ki));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BT._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.Amy={Q:null,Pn:
null,A6V:false,Bl:function(aSize){C.Mn.Bl.call(this,aSize);this.V.H([].concat(this.
Pn.M[2]-this.V.Text.Ja,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mn.Ai.call(this
,Ae);this.Pn.L(this.V.AQ);},AwD:function(E){if(this.A6V===E)return;this.A6V=E;if(
E)this.Pn.R(AYG);else this.Pn.R(AIj);},Kd:function(G){var F;if(!!this.Q)this.AwD((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)
A.pe([this,this.Kd],this);},_Init:function(aArg){C.Mn._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pn={I:this},0);this.__proto__=C.Amy;this.Pn.AZ(0x34);this.Pn.
H(UQ);this.Pn.R(AIj);this.J(this.Pn,0);this.Pn.S(A.aaL(A.fl.AOq));},_Done:function(
){this.__proto__=C.Mn;this.Pn._Done();C.Mn._Done.call(this);},_ReInit:function(){
C.Mn._ReInit.call(this);this.Pn._ReInit();},_Mark:function(D){var B;C.Mn._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOP={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdU(4));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AOP;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dt:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BR(aIndex);},DZ:function(A9){return A9;},H3:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APy={Gm:null,Lj:null,YM:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).AlC());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gm={I:this},0);A.acg.Text._Init.call(this.Lj={I:this},0);A.
acg.Text._Init.call(this.YM={I:this},0);this.__proto__=C.APy;this.Background.L(A.
jb.Text);this.Gm.H(AIk);this.Gm.A5(0x11);this.Gm.R(A.aaR(A.acf.Date));this.Gm.L(
A.jb.Bm);this.Lj.H(AYH);this.Lj.A5(0x12);this.Lj.L(A.jb.Bm);this.YM.H(AYI);this.
YM.A5(0x12);this.YM.R(A.aaR(A.acf.Bs));this.YM.L(A.jb.Bm);this.J(this.Gm,0);this.
J(this.Lj,0);this.J(this.YM,0);this.Gm.S(A.aaL(A.fl.Af));this.Lj.S(A.aaL(A.fl.Af
));this.YM.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gm._Done();this.Lj._Done();this.YM._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gm._ReInit();this.Lj._ReInit();this.YM._ReInit(
);this.Gm.R(A.aaR(A.acf.Date));this.YM.R(A.aaR(A.acf.Bs));this.Gm.S(A.aaL(A.fl.Af
));this.Lj.S(A.aaL(A.fl.Af));this.YM.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tw={Ld:null,AjK:false,Init:function(
aArg){var B;A.zX([this,this.Ba4],[B=A._GetAutoObject(A.Device.Device),B.AEl,B.AID
],0);this.AGz(this);A.pe([this,this.AIO],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Om(this);break;case 7:this.MU(
this);break;default:D5.NH=true;}},CC:function(G){var B;if(!!this.Ld)this.Ld.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Ld)this.Ld.E4(this);C.AB.
E4.call(this,G);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},AGz:function(G){
var B;if(!!this.Ld){this.Ld.E4(this);this.HN(this.Ld);}if(this.AjK)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Ld=A._NewObject(C.AMg,0);break;case 1:this.Ld=A.
_NewObject(C.AMh,0);break;case 3:this.Ld=A._NewObject(C.AMf,0);break;case 2:this.
Ld=A._NewObject(C.AMi,0);break;default:throw new Error(AIl);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Ld=A._NewObject(C.AMj,0);break;case 1:this.Ld=A.
_NewObject(C.AMs,0);break;case 3:this.Ld=A._NewObject(C.AMm,0);break;case 2:this.
Ld=A._NewObject(C.AMx,0);break;default:throw new Error(AIl);}this.HO(this);this.
J(this.Ld,0);this.Ld.H(Fe);this.Ld.Zq([this,this.A0a]);this.Ld.CC(this);this.Bb(
this.Ld);},Ba4:function(s){this.AGz(s);},Bm_:function(G){A._GetAutoObject(A.Device.
Device).AeS(0);},ATx:function(G){A._GetAutoObject(A.Device.Device).AeS(1);},ATw:
function(G){A._GetAutoObject(A.Device.Device).AeS(3);},ATy:function(G){A._GetAutoObject(
A.Device.Device).AeS(2);},HO:function(G){this.N.C1(A.aaL(A.ach.E2));this.N.Hx(A.
jV);this.N.CE=[this,this.Anh];this.N.AE0(A.aaL(A.fl.Ak));},AIO:function(s){this.
HO(s);},BlW:function(E){if(this.AjK===E)return;this.AjK=E;A.pe([this,this.Ba4],this
);},A_l:function(G){this.BlW(!this.AjK);},Bnb:function(G){A._GetAutoObject(A.Device.
Device).A6(31,true,A.jV,0,null);},MU:function(G){},BFU:function(s){this.MU(s);},
Om:function(G){},BFT:function(s){this.Om(s);},Bem:function(G){var FP=A._GetAutoObject(
A.Device.Device).D9;FP=FP+1;if(FP>=4)FP=0;A._GetAutoObject(A.Device.Device).AeS(
FP);},BAc:function(G){var FP=A._GetAutoObject(A.Device.Device).D9;FP=FP-1;if(FP<
0)FP=3;A._GetAutoObject(A.Device.Device).AeS(FP);},Af6:function(G){},A0a:function(
s){this.Af6(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tw;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.OO(true);this.Dq(
C.APn);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Ld)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dm:null,CC:function(G){},AIC:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},Ayy:function(s){
this.E4(s);},Zq:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dm.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Dm={I:this},0);this.__proto__=
C.D9;this.H(UU);this.AttrSet.A9e(A.jb.Gh);this.AttrSet.A9d(A.jb.H8);this.AttrSet.
Ahj(A.jb.Text);this.Dm.Filter=1;this.AttrSet.Ahm(A.aaL(A.fl.Ak));this.AttrSet.A9a(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dm._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dm._ReInit();this.AttrSet.Ahm(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMj={RP:
null,AaS:null,Tv:null,Tu:null,RT:null,Qz:null,RU:null,RR:null,RS:null,RQ:null,CP:
function(){var B;this.RP.Ce(this);this.AaS.Ce(this);this.Tv.Ce(this);this.Tu.Ce(
this);this.RT.Ce(this);this.Qz.Ce(this);this.RU.Ce(this);this.RR.Ce(this);this.RS.
Ce(this);this.RQ.Ce(this);},GH:function(G){C.RW.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RP.Z(true);this.AaS.Z(false);
this.RR.Z(false);this.RS.Z(false);this.RQ.Z(false);this.RT.Z(true);this.Qz.Z(true
);this.RU.Z(true);}break;case 1:{this.RP.Z(false);this.AaS.Z(true);this.RR.Z(true
);this.RS.Z(true);this.RQ.Z(true);this.RT.Z(false);this.Qz.Z(false);this.RU.Z(false
);}break;default:A.ab5("%s%e",Ak8,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RW._Init.call(this,aArg);C.
RP._Init.call(this.RP={I:this},0);C.AMe._Init.call(this.AaS={I:this},0);C.Tv._Init.
call(this.Tv={I:this},0);C.Tu._Init.call(this.Tu={I:this},0);C.RT._Init.call(this.
RT={I:this},0);C.Qz._Init.call(this.Qz={I:this},0);C.RU._Init.call(this.RU={I:this
},0);C.RR._Init.call(this.RR={I:this},0);C.RS._Init.call(this.RS={I:this},0);C.RQ.
_Init.call(this.RQ={I:this},0);this.__proto__=C.AMj;this.RP.H(BD);this.RP.Aj(true
);this.RP.Bi(false);this.AaS.H(IT);this.AaS.Aj(true);this.AaS.Bi(false);this.Tv.
H(P_);this.Tv.Aj(true);this.Tv.Bi(true);this.Tu.H(Z_);this.Tu.Aj(true);this.Tu.Bi(
false);this.RT.H(Ak_);this.RT.Aj(true);this.RT.Bi(true);this.Qz.H(Aok);this.Qz.Aj(
true);this.Qz.Bi(false);this.RU.H(AsX);this.RU.Aj(true);this.RU.Bi(true);this.RR.
H(Xa);this.RR.Aj(true);this.RR.Bi(true);this.RS.H(AYJ);this.RS.Aj(true);this.RS.
Bi(false);this.RQ.H(AYK);this.RQ.Aj(true);this.RQ.Bi(true);this.J(this.RP,0);this.
J(this.AaS,0);this.J(this.Tv,0);this.J(this.Tu,0);this.J(this.RT,0);this.J(this.
Qz,0);this.J(this.RU,0);this.J(this.RR,0);this.J(this.RS,0);this.J(this.RQ,0);},
_Done:function(){this.__proto__=C.RW;this.RP._Done();this.AaS._Done();this.Tv._Done(
);this.Tu._Done();this.RT._Done();this.Qz._Done();this.RU._Done();this.RR._Done(
);this.RS._Done();this.RQ._Done();C.RW._Done.call(this);},_ReInit:function(){C.RW.
_ReInit.call(this);this.RP._ReInit();this.AaS._ReInit();this.Tv._ReInit();this.Tu.
_ReInit();this.RT._ReInit();this.Qz._ReInit();this.RU._ReInit();this.RR._ReInit(
);this.RS._ReInit();this.RQ._ReInit();this.CP();},_Mark:function(D){var B;C.RW._Mark.
call(this,D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.AMx={AkN:function(L2){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CV(HV);var Ac4=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4);L2.Bk(Fw);},ADO:function(){if(!A._GetAutoObject(
A.Device.Device).Bt)return false;var Pf=A._GetAutoObject(A.Device.Device).Bt.B9(
);if(Pf<2)return false;var BBD=A._GetAutoObject(A.Device.Device).Bt.Hu(0,6);var BBE=
A._GetAutoObject(A.Device.Device).Bt.Hu(Pf-1,6);var A1F=A._NewObject(A.Core.Bs,0
);A1F.Initialize(BBD);var A3J=A._NewObject(A.Core.Bs,0);A3J.Initialize(BBE);if((
A1F.AbV()!==A3J.AbV())||(A1F.Year!==A3J.Year))return true;else return false;},_Init:
function(aArg){C.AaU._Init.call(this,aArg);this.__proto__=C.AMx;this.AS2(C.AG9);
this.AS3(C.ADg);this.ASS(C.Qz);this.ArJ(A.aaR(A.acf.AVs));this.Dv(A.aaR(A.acf.Akf
));},_ReInit:function(){C.AaU._ReInit.call(this);this.ArJ(A.aaR(A.acf.AVs));this.
Dv(A.aaR(A.acf.Akf));},_className:"Application::AnimalWeights"};C.AMs={AkN:function(
L2){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.
Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fw.CV(HV);var AA8=A._NewObject(A.Device.Int32FilterCriterion,0);AA8.Initialize(
7,2,0,true);Fw.CV(AA8);L2.Bk(Fw);},ADO:function(){return A._GetAutoObject(A.Device.
Device).Bt.B9()>0;},_Init:function(aArg){C.AaU._Init.call(this,aArg);this.__proto__=
C.AMs;this.AS2(C.AUP);this.AS3(C.APy);this.ASS(C.Tv);this.ArJ(A.aaR(A.acf.A7g));
this.Dv(A.aaR(A.acf.Arl));},_ReInit:function(){C.AaU._ReInit.call(this);this.ArJ(
A.aaR(A.acf.A7g));this.Dv(A.aaR(A.acf.Arl));},_className:"Application::AnimalTemperatures"
};C.ATW={Vy:null,Vz:null,XT:null,AgC:null,Kw:null,AP:null,A_:null,Ea:null,Lr:null
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
this.Hq=Ad;if(!!this.AX){var Alt=this.AX.Hu(Ad,6);var A0X=this.AX.I4(Ad,3);var A1B=
this.AX.I4(Ad,2);var A1A=this.AX.I4(Ad,5);var A3x=this.AX.I4(Ad,4);this.T(A._GetAutoObject(
A.acj.KJ).ACJ(Alt));this.Kw.R(A._GetAutoObject(A.acj.KJ).A5$(Alt));this.Vy.L(A._GetAutoObject(
A.acj.Assessment).Qm(A0X));this.Vz.L(A._GetAutoObject(A.acj.Assessment).Qm(A1B));
this.XT.L(A._GetAutoObject(A.acj.Assessment).Qm(A1A));this.AgC.L(A._GetAutoObject(
A.acj.Assessment).Qm(A3x));this.KS.L(A._GetAutoObject(A.acj.Assessment).Xu(A0X));
this.KT.L(A._GetAutoObject(A.acj.Assessment).Xu(A1B));this.ZJ.L(A._GetAutoObject(
A.acj.Assessment).Xu(A1A));this.ZK.L(A._GetAutoObject(A.acj.Assessment).Xu(A3x));
this.KS.Z(A0X===5);this.KT.Z(A1B===5);this.ZJ.Z(A1A===5);this.ZK.Z(A3x===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.
Vy={I:this},0);A.acg.AK._Init.call(this.Vz={I:this},0);A.acg.AK._Init.call(this.
XT={I:this},0);A.acg.AK._Init.call(this.AgC={I:this},0);A.acg.Text._Init.call(this.
Kw={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Lr={I:this},0);A.acg.AK._Init.call(this.AnL={I:this},0);A.acg.Text._Init.call(this.
KS={I:this},0);A.acg.Text._Init.call(this.KT={I:this},0);A.acg.Text._Init.call(this.
ZJ={I:this},0);A.acg.Text._Init.call(this.ZK={I:this},0);this.__proto__=C.ATW;this.
V.H(O3);this.Vy.H(AYL);this.Vz.H(AYM);this.XT.H(AYN);this.AgC.H(AYO);this.Kw.R(Rj
);this.Kw.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.AnL.L(A.jb.Bc);this.KS.H(AYP);this.KS.R(Rl);this.KT.H(AYQ
);this.KT.R(Rl);this.ZJ.H(AYR);this.ZJ.R(Rl);this.ZK.H(AYS);this.ZK.R(Rl);this.J(
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
"Application::RatingListItem"};C.APw={Gm:null,YS:null,YO:null,YP:null,YQ:null,YR:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gm={I:this},0);A.acg.Text._Init.call(this.YS={I:this},0);A.acg.Text._Init.call(this.
YO={I:this},0);A.acg.Text._Init.call(this.YP={I:this},0);A.acg.Text._Init.call(this.
YQ={I:this},0);A.acg.Text._Init.call(this.YR={I:this},0);this.__proto__=C.APw;this.
Background.L(A.jb.Text);this.Gm.H(AIk);this.Gm.A5(0x11);this.Gm.R(A.aaR(A.acf.Date
));this.Gm.L(A.jb.Bm);this.YS.H(AIc);this.YS.A5(0x12);this.YS.R(A.aaR(A.acf.Bs));
this.YS.L(A.jb.Bm);this.YO.H(AYT);this.YO.A5(0x12);this.YO.R(A.aaR(A.acf.ATY));this.
YO.L(A.jb.Bm);this.YP.H(AYU);this.YP.A5(0x12);this.YP.R(A.aaR(A.acf.ATZ));this.YP.
L(A.jb.Bm);this.YQ.H(AYV);this.YQ.A5(0x12);this.YQ.R(A.aaR(A.acf.AOm));this.YQ.L(
A.jb.Bm);this.YR.H(Aoq);this.YR.A5(0x12);this.YR.R(A.aaR(A.acf.ANm));this.YR.L(A.
jb.Bm);this.J(this.Gm,0);this.J(this.YS,0);this.J(this.YO,0);this.J(this.YP,0);this.
J(this.YQ,0);this.J(this.YR,0);this.Gm.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(A.fl.Af
));this.YO.S(A.aaL(A.fl.Af));this.YP.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));
this.YR.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gm._Done();
this.YS._Done();this.YO._Done();this.YP._Done();this.YQ._Done();this.YR._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gm._ReInit(
);this.YS._ReInit();this.YO._ReInit();this.YP._ReInit();this.YQ._ReInit();this.YR.
_ReInit();this.Gm.R(A.aaR(A.acf.Date));this.YS.R(A.aaR(A.acf.Bs));this.YO.R(A.aaR(
A.acf.ATY));this.YP.R(A.aaR(A.acf.ATZ));this.YQ.R(A.aaR(A.acf.AOm));this.YR.R(A.
aaR(A.acf.ANm));this.Gm.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(A.fl.Af));this.YO.S(A.
aaL(A.fl.Af));this.YP.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMm={AkN:function(L2){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CV(HV);var
AAP=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAP.Initialize(3,5,0,true
);Fw.CV(AAP);L2.Bk(Fw);},ADO:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.AaU._Init.call(this,aArg);this.__proto__=C.AMm;this.AS2(C.ATW);this.AS3(
C.APw);this.ASS(C.Tu);this.ArJ(A.aaR(A.acf.Axh));this.Dv(A.aaR(A.acf.Ang));},_ReInit:
function(){C.AaU._ReInit.call(this);this.ArJ(A.aaR(A.acf.Axh));this.Dv(A.aaR(A.acf.
Ang));},_className:"Application::AnimalRatings"};C.IE={B6:null,Y:null,V:null,Uo:
5,T:function(E){C.I1.T.call(this,E);this.V.R(E);},De:function(E){C.I1.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuJ:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0]))this.S(A.aaL(A.fl.Ik));},Kr:function(
E){if(this.Uo===E)return;this.Uo=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAJ:function(G){A.pe([this,this.AuJ],this);},_Init:function(aArg){C.I1._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IE;this.Y.AZ(0x3F);this.Y.H(AIm);this.Y.A95(5);this.
Y.JQ(3);this.V.AZ(0x34);this.V.H(Aab);this.V.I9(true);this.V.A5(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAJ];this.V.S(A.aaL(A.fl.Km));},_Done:function(){this.__proto__=C.I1;this.Y._Done(
);this.V._Done();C.I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Km));},_Mark:function(D){
var B;C.I1._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RP={AfM:0,Ai:function(Ae){C.Fx.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RL));if(this.AfM>=0)this.Kt((this.AfM.toFixed(
)+CQ)+A.aaR(A.acf.Kj));else this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfM=-1;
else this.AfM=A._GetAutoObject(A.Device.Helper).W.RL();this.Am();},_Init:function(
aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RP;},_className:"Application::AnimalInfoItemAge"
};C.RT={A4b:0,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afq));if(
this.A4b>0)this.Kt((A._GetAutoObject(A.Device.Converter).Ak4(this.A4b)+CQ)+A._GetAutoObject(
A.acj.DU).AfZ());else this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.Ce.call(
this,G);this.A4b=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RT;},_className:
"Application::AnimalInfoItemWeight"};C.Tv={Y:null,Eh:null,Ex:null,Fd:null,PV:null
,Fc:null,PW:null,Ajc:0,Pe:0,CP:function(){this.Am();},Ai:function(Ae){C.JI.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bho));this.Fd.R(this.Ajc.toFixed());this.Fc.R(this.Pe.
toFixed());if(!!this.Ajc||!!this.Pe)this.PW.R(AYW+(this.Ajc+this.Pe).toFixed());
else this.PW.R(A.aaR(A.acf.ARZ));},Ce:function(G){C.JI.Ce.call(this,G);var AkU;AkU=
A._GetAutoObject(A.Device.Helper).Big(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajc=AkU.Get(2);this.Pe=AkU.Get(1);this.Am();},De:
function(E){C.JI.De.call(this,E);this.PV.L(E);this.PW.L(E);},AsG:function(G){if(
!!this.Ajc||!!this.Pe){this.Fd.Z(true);this.PV.Z(true);this.Fc.Z(true);}else{this.
Fd.Z(false);this.PV.Z(false);this.Fc.Z(false);}this.Eh.H(this.Fd.M);this.Eh.Z(this.
Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo());},AuJ:function(G){var B;var
Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;if(((B=Ny.Db(0x1))[2]-B[0])>((
B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.PV.S(A.aaL(A.fl.Ak));this.Fd.S(
A.aaL(A.fl.Ak));this.PW.S(A.aaL(A.fl.Ak));}},AAJ:function(G){A.pe([this,this.AuJ
],this);},_Init:function(aArg){C.JI._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
PV={I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
PW={I:this},0);this.__proto__=C.Tv;this.Y.H(Ayp);this.Y.BmT(0);this.Y.JQ(3);this.
Eh.H(AYX);this.Eh.L(A.jb.H8);this.Ex.H(Aym);this.Ex.L(A.jb.Gh);this.Fd.AZ(0x34);
this.Fd.H(Aab);this.Fd.Hl(2);this.Fd.I9(true);this.Fd.R(UW);this.Fd.L(A.jb.Text);
this.Fd.Aj(true);this.PV.AZ(0x34);this.PV.H(Aab);this.PV.I9(true);this.PV.R(AH5);
this.PV.L(A.jb.Text);this.PV.Aj(true);this.Fc.AZ(0x34);this.Fc.H(Aab);this.Fc.Hl(
2);this.Fc.I9(true);this.Fc.R(UW);this.Fc.L(A.jb.Bm);this.Fc.Aj(true);this.PW.AZ(
0x34);this.PW.H(Aab);this.PW.I9(true);this.PW.R(Rj);this.PW.L(A.jb.Text);this.PW.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.Fd,0);
this.J(this.PV,0);this.J(this.Fc,0);this.J(this.PW,0);this.Y.El=[this,this.AAJ];
this.Fd.Q2([this,this.AsG]);this.Fd.S(A.aaL(A.fl.Af));this.PV.S(A.aaL(A.fl.Af));
this.Fc.Q2([this,this.AsG]);this.Fc.S(A.aaL(A.fl.Af));this.PW.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JI;this.Y._Done();this.Eh._Done();this.Ex._Done(
);this.Fd._Done();this.PV._Done();this.Fc._Done();this.PW._Done();C.JI._Done.call(
this);},_ReInit:function(){C.JI._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ex._ReInit();this.Fd._ReInit();this.PV._ReInit();this.Fc._ReInit();this.PW.
_ReInit();this.Fd.S(A.aaL(A.fl.Af));this.PV.S(A.aaL(A.fl.Af));this.Fc.S(A.aaL(A.
fl.Af));this.PW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JI._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qz={FV:0,Ib:0
,A15:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(AYY+A.aaR(A.acf.AG4));if(
this.A15){this.Kt((A._GetAutoObject(A.Device.Converter).S5(this.FV,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aaq());this.Background.L(A._GetAutoObject(A.acj.DU).AzH(
this.FV,this.Ib));this.De(A._GetAutoObject(A.acj.DU).AzJ(this.FV,this.Ib));}else{
this.Kt(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.De(A.jb.Text);}},Ce:
function(G){C.Fx.Ce.call(this,G);var LC=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LC){this.A15=true;this.FV=A._GetAutoObject(A.acj.DU).Alq(LC,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A15=false;this.FV=0;}this.Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.Qz;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tu={Y:null,FW:null,Eh:
null,Ex:null,MF:null,Fd:null,Fc:null,OW:null,Aas:0,Ajc:0,Pe:0,CP:function(){this.
Am();},Ai:function(Ae){C.JI.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axh));this.MF.R(
this.Aas.toFixed());this.Fd.R(this.Ajc.toFixed());this.Fc.R(this.Pe.toFixed());}
,Ce:function(G){C.JI.Ce.call(this,G);var AkU;AkU=A._GetAutoObject(A.Device.Helper
).A6f(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aas=AkU.Get(3);this.Ajc=AkU.Get(2);this.Pe=AkU.Get(1);this.Am();},AsG:
function(G){if((!!this.Aas||!!this.Ajc)||!!this.Pe){this.MF.Z(true);this.Fd.Z(true
);this.Fc.Z(true);this.OW.Z(false);}else{this.MF.Z(false);this.Fd.Z(false);this.
Fc.Z(false);this.OW.Z(true);}this.FW.H(this.MF.M);this.FW.Z(this.MF.Fo());this.Eh.
H(this.Fd.M);this.Eh.Z(this.Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo()
);},AuJ:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.Fd.
S(A.aaL(A.fl.Ak));this.MF.S(A.aaL(A.fl.Ak));}},AAJ:function(G){A.pe([this,this.AuJ
],this);},_Init:function(aArg){C.JI._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FW={I:this},0);A.acg.AK._Init.call(this.Eh={
I:this},0);A.acg.AK._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.MF={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
Fc={I:this},0);A.acg.Text._Init.call(this.OW={I:this},0);this.__proto__=C.Tu;this.
Y.AZ(0x3F);this.Y.H(Ayp);this.Y.A95(5);this.Y.JQ(3);this.FW.H(AYZ);this.FW.L(A.jb.
E1);this.Eh.H(AY0);this.Eh.L(A.jb.H8);this.Ex.H(AIn);this.Ex.L(A.jb.Gh);this.MF.
AZ(0x3C);this.MF.H(Aab);this.MF.Hl(2);this.MF.I9(true);this.MF.R(UW);this.MF.L(A.
jb.Text);this.MF.Aj(true);this.Fd.AZ(0x3C);this.Fd.H(Aab);this.Fd.Hl(2);this.Fd.
I9(true);this.Fd.R(UW);this.Fd.L(A.jb.Text);this.Fd.Aj(true);this.Fc.AZ(0x3C);this.
Fc.H(Aab);this.Fc.Hl(2);this.Fc.I9(true);this.Fc.R(UW);this.Fc.L(A.jb.Bm);this.Fc.
Aj(true);this.OW.AZ(0x34);this.OW.H(Aab);this.OW.I9(true);this.OW.A5(0x11);this.
OW.R(A.aaR(A.acf.ARZ));this.OW.L(A.jb.Text);this.OW.Aj(true);this.OW.Z(false);this.
J(this.Y,0);this.J(this.FW,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.MF
,0);this.J(this.Fd,0);this.J(this.Fc,0);this.J(this.OW,0);this.Y.El=[this,this.AAJ
];this.MF.Q2([this,this.AsG]);this.MF.S(A.aaL(A.fl.Af));this.Fd.Q2([this,this.AsG
]);this.Fd.S(A.aaL(A.fl.Af));this.Fc.Q2([this,this.AsG]);this.Fc.S(A.aaL(A.fl.Af
));this.OW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JI;this.Y._Done(
);this.FW._Done();this.Eh._Done();this.Ex._Done();this.MF._Done();this.Fd._Done(
);this.Fc._Done();this.OW._Done();C.JI._Done.call(this);},_ReInit:function(){C.JI.
_ReInit.call(this);this.Y._ReInit();this.FW._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.MF._ReInit();this.Fd._ReInit();this.Fc._ReInit();this.OW._ReInit(
);this.OW.R(A.aaR(A.acf.ARZ));this.MF.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.fl.Af)
);this.Fc.S(A.aaL(A.fl.Af));this.OW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JI._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AL6={_Init:function(aArg){C.Ap_._Init.call(
this,aArg);this.__proto__=C.AL6;this.A4m=1;this.Rf.Ct(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Ap_._ReInit.call(this);this.Rf.Ct(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQN={OH:null,IN:null,H5:null,IL:null,GO:null,AlT:function(G){A.pe([this,this.
BzJ],this);},BzJ:function(G){A._GetAutoObject(C.A$).Cf(3);},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.OH._Init.call(this.OH={I:this},0);C.BU._Init.call(this.
IN={I:this},0);C.SO._Init.call(this.H5={I:this},0);C.AGw._Init.call(this.IL={I:this
},0);C.Q8._Init.call(this.GO={I:this},0);this.__proto__=C.AQN;var B;this.I_(A.aaR(
A.acf.A_5));this.IN.H(AhX);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Language));this.
IN.A9N(100);this.H5.H(UV);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.
Bi(true);this.IL.H(Z$);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Bs));this.GO.H(AhW
);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF3));this.GO.Bi(true);
this.GO.ArU(false);this.GO.A9V(true);this.JW(this.Y,-1);this.JW(this.Ay,-1);this.
J(this.IN,0);this.J(this.H5,0);this.J(this.IL,0);this.J(this.GO,0);this.IN.Zo(A.
aaL(A.fl.H1));this.IN.Zp(A.aaL(A.fl.H1));this.IN.At([B=this.OH,B.B_,B.B$]);this.
IN.CK(this.OH);this.H5.AeR([B=this.H5,B.FU]);this.H5.Gq([this,this.D_,this.GQ]);
this.H5.Akt(A.aaL(A.ach.Edit));this.H5.Ab2([B=A._GetAutoObject(A.Device.Helper),
B.UX,B.U0]);this.IL.AeR([B=this.IL,B.FU]);this.IL.Gq([this,this.D_,this.GQ]);this.
IL.Akt(A.aaL(A.ach.Edit));this.IL.Ab2([B=A._GetAutoObject(A.Device.Helper),B.UX,
B.U0]);this.GO.AeR([B=this.GO,B.FU]);this.GO.Gq([this,this.D_,this.GQ]);this.GO.
Akt(A.aaL(A.ach.Edit));this.GO.At([B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZV
]);},_Done:function(){this.__proto__=C.Cd;this.OH._Done();this.IN._Done();this.H5.
_Done();this.IL._Done();this.GO._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.OH._ReInit();this.IN._ReInit();this.H5._ReInit();
this.IL._ReInit();this.GO._ReInit();this.I_(A.aaR(A.acf.A_5));this.IN.T(A.aaR(A.
acf.Language));this.H5.T(A.aaR(A.acf.Date));this.IL.T(A.aaR(A.acf.Bs));this.GO.T(
A.aaR(A.acf.AF3));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaU={Bg:null,FB:null,AmS:null,AmB:null,Sa:null,A6A:A.jV,KL:A.jV,ARf:null,ARg:
null,AC$:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A2C],[B=
A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);this.A2C(this);},E4:function(
G){var B;A.z$([this,this.A2C],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId
],0);C.D9.E4.call(this,G);},Zq:function(E){C.D9.Zq.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zq(E);},AS2:function(E){if(this.ARf===E)return;this.
ARf=E;if(!!this.Bg)this.Bg.NZ(E);},AS3:function(E){if(this.ARg===E)return;this.ARg=
E;this.Bok(this);},ASS:function(E){if(this.AC$===E)return;this.AC$=E;A.pe([this,
this.Boj],this);},ArJ:function(E){if(this.A6A===E)return;this.A6A=E;this.Sa.R(E);
},Dv:function(E){if(this.KL===E)return;this.KL=E;if(!!this.Bg)this.Bg.Dv(E);},AkN:
function(L2){A.ab5("%s",As4);},ADO:function(){A.ab5("%s",Ak9);return false;},Axp:
function(G){if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(C.Gb,0);this.Bg.H(
As5);this.Bg.Zm(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dv(this.KL);this.Bg.
NZ(this.ARf);this.Bg.Zq(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bok:function(
G){var B;if(!!this.FB)this.HN(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARg,0))?B:null);this.FB.H(IT);this.J(this.FB,0);},Boj:function(G){var B;if(
!!this.AmS)this.HN(this.AmS);if(!!this.AC$&&this.ADO()){this.AmS=(C.I1.isPrototypeOf(
B=A._NewObject(this.AC$,0))?B:null);this.AmS.H(BD);this.AmS.Bi(false);this.J(this.
AmS,0);this.Sa.Z(false);}else this.Sa.Z(true);},A2C:function(G){this.AkN(A._GetAutoObject(
A.Device.Device).Bt);this.Axp(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmB={I:this},0);C.CH._Init.call(this.Sa={I:this},
0);this.__proto__=C.AaU;this.AmB.H(BD);this.AmB.L(A.jb.CJ);this.Sa.H(AHA);this.Sa.
A5(0x11);this.Sa.L(A.jb.Text);this.J(this.AmB,0);this.J(this.Sa,0);this.Sa.S(A.aaL(
A.fl.Km));this.Sa.A2(A.aaL(A.fl.Ik));},_Done:function(){this.__proto__=C.D9;this.
AmB._Done();this.Sa._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmB._ReInit();this.Sa._ReInit();this.Sa.S(A.aaL(A.fl.Km));this.Sa.
A2(A.aaL(A.fl.Ik));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmB)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kh={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BbX],[B=A._GetAutoObject(A.Device.Device),B.AEm,B.AIE],0);A.pe([this,this.BbX],this
);},Dt:function(){return 5;},Gj:function(aIndex){return this.AnimalListContentToString.
BR(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).Zk(E);},BbX:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kh;this.Cb.Set(0,0);this.Cb.Set(1,14);this.Cb.Set(2,
1);this.Cb.Set(3,2);this.Cb.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cl;this.AnimalListContentToString._Done();C.Cl._Done.call(this);},_ReInit:function(
){C.Cl._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cl._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARk={IN:null
,Y4:null,Zb:null,Y_:null,Zc:null,Y5:null,Y8:null,Y$:null,Za:null,Y7:null,OH:null
,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.BU._Init.call(this.IN={I:this
},0);C.Nb._Init.call(this.Y4={I:this},0);C.Nb._Init.call(this.Zb={I:this},0);C.Nb.
_Init.call(this.Y_={I:this},0);C.Nb._Init.call(this.Zc={I:this},0);C.Nb._Init.call(
this.Y5={I:this},0);C.Nb._Init.call(this.Y8={I:this},0);C.Nb._Init.call(this.Y$={
I:this},0);C.Nb._Init.call(this.Za={I:this},0);C.Nb._Init.call(this.Y7={I:this},
0);C.OH._Init.call(this.OH={I:this},0);this.__proto__=C.ARk;var B;this.I_(A.aaR(
A.acf.Settings));this.IN.H(AhX);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Language)
);this.IN.A9N(100);this.Y4.H(As6);this.Y4.Aj(true);this.Y4.T(A.aaR(A.acf.ACl));this.
Y4.Ne(16);this.Zb.H(As7);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.AGZ));this.Zb.Ne(
22);this.Y_.H(As8);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.Temperature));this.Y_.
Ne(17);this.Zc.H(Ayq);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.ACi));this.Zc.Ne(42
);this.Y5.H(Aor);this.Y5.Aj(true);this.Y5.T(A.aaR(A.acf.Device));this.Y5.Ne(18);
this.Y8.H(Aor);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.Asd));this.Y8.Ne(19);this.
Y$.H(AY1);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.LinkTransponder));this.Y$.Ne(89
);this.Za.H(AY2);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.UnlinkTransponder));this.
Za.Ne(95);this.Y7.H(Ayh);this.Y7.Aj(true);this.Y7.T(A.aaR(A.acf.ACA));this.Y7.Ne(
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
aaR(A.acf.Language));this.Y4.T(A.aaR(A.acf.ACl));this.Zb.T(A.aaR(A.acf.AGZ));this.
Y_.T(A.aaR(A.acf.Temperature));this.Zc.T(A.aaR(A.acf.ACi));this.Y5.T(A.aaR(A.acf.
Device));this.Y8.T(A.aaR(A.acf.Asd));this.Y$.T(A.aaR(A.acf.LinkTransponder));this.
Za.T(A.aaR(A.acf.UnlinkTransponder));this.Y7.T(A.aaR(A.acf.ACA));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Za
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMh={ET:null,Init:function(aArg){this.ET.Ahp(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.AgU)));},AT3:function(
){this.ET.AeV(this.AOK());this.Aau=!this.ET.EZ.AY;},AiR:function(G){this.ET.Ahp(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(
A.aaR(A.acf.AgU)));this.AT3();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dv(A.aaR(A.acf.A7G));else this.Dv(A.aaR(A.acf.Arl));this.Am();},AOK:function(
){var Bz=A._NewObject(C.Aqm,0);var Qj=A._GetAutoObject(A.Device.Helper).AN3(A._GetAutoObject(
A.Device.Helper).Du());var Dx=A._GetAutoObject(A.Device.Helper).Aqi(Qj-(86400*this.
Mv));Bz.Ans(AY3);Bz.Q0([].concat(0,Bz.Gi.slice(1,4)));Bz.Q0(A.abN(Bz.Gi,(Qj-Dx)|
0));Bz.Q0(A.abP(Bz.Gi,3400));Bz.Q0([].concat(Bz.Gi.slice(0,3),4200));var Gf=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwI(Gf);Bz.Yb();if(Gf>0){var O=0;while(O<Gf){var ApP=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApQ=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6)-Dx;if(ApP>0)Bz.Ap$(ApQ,ApP);O=O+1;}}return Bz;},_Init:function(aArg
){C.K9._Init.call(this,aArg);C.AqQ._Init.call(this.ET={I:this},0);this.__proto__=
C.AMh;this.ET.H(AY4);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE3(C.AGK);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.ET._Done(
);C.K9._Done.call(this);},_ReInit:function(){C.K9._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMi={ZY:null,OZ:null,AgO:null,Aau:false,Init:function(aArg){this.ZY.Ahp(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.
AgU)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgO.Z(this.Aau);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiR],[B=A._GetAutoObject(A.Device.
Helper),B.UX,B.U0],0);A.zV([this,this.AiR],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0
);A.pe([this,this.Al8],this);},E4:function(G){var B;A.z$([this,this.AiR],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AiR],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId
],0);C.D9.E4.call(this,G);},Al8:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CV(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw
);},AiR:function(G){this.ZY.Ahp(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Du()).Format(A.aaR(A.acf.AgU)));this.BnH();this.Am();},BnH:function(
){var B;var Gf=A._GetAutoObject(A.Device.Device).Bt.B9();var K7=A._NewObject(C.Aqm
,0);var Vl=A._NewObject(C.Aqm,0);var Qj=A._GetAutoObject(A.Device.Helper).AN3(A.
_GetAutoObject(A.Device.Helper).Du());var Dx=A._GetAutoObject(A.Device.Helper).Aqi(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K7.Q0([].concat(0,K7.Gi.slice(1
,4)));K7.Q0(A.abN(K7.Gi,(Qj-Dx)|0));K7.Q0(A.abP(K7.Gi,0));K7.Q0([].concat(K7.Gi.
slice(0,3),150000));K7.Ans(AY5);Vl.Q0([].concat(0,Vl.Gi.slice(1,4)));Vl.Q0(A.abN(
Vl.Gi,(Qj-Dx)|0));Vl.Q0(A.abP(Vl.Gi,0));Vl.Q0([].concat(Vl.Gi.slice(0,3),1500));
Vl.Ans(AY6);K7.AwI(Gf);K7.Yb();Vl.AwI(Gf);Vl.Yb();if(Gf>0){var O=0;var Aaw=0;var
Az9=0;var AJ1=0;var A1G=0;var BcA=true;while(O<Gf){var Al2=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaJ=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-Dx;if(Al2>
0){K7.Ap$(AaJ,Al2);if(!A1G){A1G=AaJ;AJ1=Al2;}if(Az9>0){var LC=A._GetAutoObject(A.
Device.Helper).L9(Az9,AaJ);if(!!LC){var FV=A._GetAutoObject(A.acj.DU).Alq(LC,Aaw
,Al2);if(BcA){Vl.Ap$(Az9,FV);BcA=false;}Vl.Ap$(AaJ,FV);}}Aaw=Al2;Az9=AaJ;}O=O+1;
}var AdI=A.aaR(A.acf.Bgp);var FV=A._GetAutoObject(A.Device.Helper).Bii(A1G,Az9,AJ1
,Aaw);AdI=A._GetAutoObject(A.Device.Helper).Nk(AdI,P9,FV.toFixed());AdI=A._GetAutoObject(
A.Device.Helper).Nk(AdI,Ax5,A._GetAutoObject(A.acj.DU).Aaq());this.OZ.Ij.R(AdI);
}this.Aau=!K7.AY;if(this.Aau)this.OZ.Ij.R(A.jV);(C.OZ.isPrototypeOf(B=this.OZ.ET
)?B:null).Ano([B=A._GetAutoObject(A.Device.Helper).W,B.PO,B.EB]);this.ZY.AeV(K7);
this.OZ.AeV(Vl);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqQ._Init.call(
this.ZY={I:this},0);C.AqQ._Init.call(this.OZ={I:this},0);C.AkL._Init.call(this.AgO={
I:this},0);this.__proto__=C.AMi;this.ZY.H(AY7);this.ZY.T(A.aaR(A.acf.Afq));this.
ZY.AE3(C.AMP);this.OZ.H(AY8);this.OZ.T(A.aaR(A.acf.AG4));this.OZ.AE3(C.OZ);this.
AgO.H(UU);this.AgO.R(A.aaR(A.acf.Akf));this.J(this.ZY,0);this.J(this.OZ,0);this.
J(this.AgO,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.ZY._Done(
);this.OZ._Done();this.AgO._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.ZY._ReInit();this.OZ._ReInit();this.AgO._ReInit();this.
ZY.T(A.aaR(A.acf.Afq));this.OZ.T(A.aaR(A.acf.AG4));this.AgO.R(A.aaR(A.acf.Akf));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.ZY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgO)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMf={
Au8:null,Au7:null,Axj:null,AuD:null,Vx:null,Abi:null,Abh:null,Acf:null,Afd:null,
Init:function(aArg){this.Vx.Ahp(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Du()).Format(A.aaR(A.acf.AgU)));},A35:function(G){this.Vx.Ab3(this.
AuD);this.Abi.Ab3(this.Au8);this.Abh.Ab3(this.Au7);this.Acf.Ab3(this.Axj);},Axi:
function(){var Gf=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuD=A._NewObject(
C.Ajo,0);this.Au8=A._NewObject(C.Ajo,0);this.Au7=A._NewObject(C.Ajo,0);this.Axj=
A._NewObject(C.Ajo,0);if(Gf>0){var O=Gf-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hu(O,6);this.Atm(this.AuD,O,3,D8);this.Atm(this.Au8,O,2,D8);this.
Atm(this.Au7,O,5,D8);this.Atm(this.Axj,O,4,D8);O=O-1;}}this.Aau=!(((this.AuD.AY+
this.Au7.AY)+this.Au8.AY)+this.Axj.AY);A.pe([this,this.A35],this);},Atm:function(
A0G,Ad,A0F,Qd){var Alm=A._GetAutoObject(A.Device.Device).Bt.I4(Ad,A0F);if(!!Alm)
A0G.Or(Alm,Qd);},Ab1:function(E){if(this.Mv===E)return;C.K9.Ab1.call(this,E);if(
!!this.Vx)this.Vx.Ab1(E);if(!!this.Abi)this.Abi.Ab1(E);if(!!this.Abh)this.Abh.Ab1(
E);if(!!this.Acf)this.Acf.Ab1(E);this.Afd.Ab1(E);},AiR:function(G){this.Vx.Ahp(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(
A.aaR(A.acf.AgU)));this.Axi();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dv(A.aaR(A.acf.BjG));else this.Dv(A.aaR(A.acf.Ang));this.Am();},_Init:function(
aArg){C.K9._Init.call(this,aArg);C.Ahv._Init.call(this.Vx={I:this},0);C.Ahv._Init.
call(this.Abi={I:this},0);C.Ahv._Init.call(this.Abh={I:this},0);C.Ahv._Init.call(
this.Acf={I:this},0);C.AT0._Init.call(this.Afd={I:this},0);this.__proto__=C.AMf;
this.Dv(A.aaR(A.acf.Ang));this.Vx.H(AY9);this.Vx.R(A.aaR(A.acf.AF8));this.Abi.H(
AY_);this.Abi.R(A.aaR(A.acf.Feed));this.Abh.H(AY$);this.Abh.R(A.aaR(A.acf.AF_));
this.Acf.H(AIo);this.Acf.R(A.aaR(A.acf.AF$));this.Afd.H(AZa);this.J(this.Vx,-1);
this.J(this.Abi,-1);this.J(this.Abh,-1);this.J(this.Acf,-1);this.J(this.Afd,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.Vx._Done();this.Abi.
_Done();this.Abh._Done();this.Acf._Done();this.Afd._Done();C.K9._Done.call(this);
},_ReInit:function(){C.K9._ReInit.call(this);this.Vx._ReInit();this.Abi._ReInit(
);this.Abh._ReInit();this.Acf._ReInit();this.Afd._ReInit();this.Dv(A.aaR(A.acf.Ang
));this.Vx.R(A.aaR(A.acf.AF8));this.Abi.R(A.aaR(A.acf.Feed));this.Abh.R(A.aaR(A.
acf.AF_));this.Acf.R(A.aaR(A.acf.AF$));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMg={ET:null,WA:null,Aee:null,A13:false,Init:function(aArg){this.WA.Ahp(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.
AgU)));},Bl:function(aSize){C.K9.Bl.call(this,aSize);this.Aee.H(this.ET.M);},Ai:
function(Ae){C.K9.Ai.call(this,Ae);var BBf=!this.Aau&&this.A13;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aee.R(A.aaR(A.acf.A7G));else this.
Aee.R(A.aaR(A.acf.Arl));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dv(A.aaR(
A.acf.BjH));else this.Dv(A.aaR(A.acf.BjI));this.Aee.Z(BBf);},AiR:function(G){this.
WA.Ahp(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du(
)).Format(A.aaR(A.acf.AgU)));this.Aau=true;this.A13=true;this.Axi();this.AT3();this.
Am();},AT3:function(){this.ET.AeV(this.AOK());if(!!this.ET.EZ&&(this.ET.EZ.AY>0)
){this.Aau=false;this.A13=false;}},AOK:function(){var Bz=A._NewObject(C.Aqm,0);var
Qj=A._GetAutoObject(A.Device.Helper).AN3(A._GetAutoObject(A.Device.Helper).Du());
var Dx=A._GetAutoObject(A.Device.Helper).Aqi(Qj-(86400*this.Mv));Bz.Ans(AIp);Bz.
Q0([].concat(0,Bz.Gi.slice(1,4)));Bz.Q0(A.abN(Bz.Gi,(Qj-Dx)|0));Bz.Q0(A.abP(Bz.Gi
,3400));Bz.Q0([].concat(Bz.Gi.slice(0,3),4200));var Gf=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwI(Gf);Bz.Yb();if(Gf>0){var O=0;while(O<Gf){var ApP=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApQ=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-
Dx;if(ApP>0)Bz.Ap$(ApQ,ApP);O=O+1;}}return Bz;},Bix:function(){var Gf=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gf>0){var Bfh=A._NewObject(C.Ajo,0);var O=Gf-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LP=A._GetAutoObject(A.Device.Helper).ACZ(D3);if(!!LP)Bfh.Or(LP,D3.Timestamp
);O=O-1;}return Bfh;}else return null;},Axi:function(){this.WA.Ab3(this.Bix());if(
!!this.WA.N2&&(this.WA.N2.AY>0))this.Aau=false;},_Init:function(aArg){C.K9._Init.
call(this,aArg);C.AqQ._Init.call(this.ET={I:this},0);C.Ahv._Init.call(this.WA={I:
this},0);C.AkL._Init.call(this.Aee={I:this},0);this.__proto__=C.AMg;this.ET.H(As5
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE3(C.AGK);this.WA.H(AZb);this.WA.
R(A.aaR(A.acf.Rating));this.Aee.H(As5);this.J(this.ET,-2);this.J(this.WA,-2);this.
J(this.Aee,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.ET._Done(
);this.WA._Done();this.Aee._Done();C.K9._Done.call(this);},_ReInit:function(){C.
K9._ReInit.call(this);this.ET._ReInit();this.WA._ReInit();this.Aee._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WA.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K9._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WG={Q:null,Gw:null,Gx:null
,QI:null,AM:0,Go:0,F_:100,FF:0,Init:function(aArg){},IY:function(G){this.FF=1;C.
Eg.IY.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QI.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QI.Z(this.Go!==
this.F_);this.QI.L(this.V.AQ);if((this.FF===4)||(this.FF===5))this.QI.L(A.jb.E1);
},AlV:function(G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyI],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qp:function(G){if(this.FF===5)A.pe([this,this.
AyI],this);if(this.FF===4)A.pe([this,this.AyJ],this);if(this.FF===1)A.pe(this.AR
,this);this.FF=0;this.Am();},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcQ:function(s){this.C2(s);},At:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcQ],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcQ],E,0);if(!!E)A.pe([this,this.AcQ],this);},AlW:function(G){this.FF=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyJ],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J$:function(G){this.FF=0;},AyJ:function(s){this.J$(s);},J6:function(G){this.
FF=0;},AyI:function(s){this.J6(s);},Bx:function(E){if(E<this.Go)E=this.Go;if(E>this.
F_)E=this.F_;if(this.AM===E)return;this.AM=E;this.Am();},F$:function(E){if(this.
Go===E)return;this.Go=E;this.Am();},EU:function(E){if(this.F_===E)return;this.F_=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gw={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.acg.Ap._Init.call(
this.QI={I:this},0);this.__proto__=C.WG;this.H(KX);this.Gw.Filter=5;this.Gx.Filter=
4;this.Background.H(KX);this.V.H(AcI);this.V.R(Lu);this.QI.H(Ayr);this.J(this.QI
,0);this.Gw.BL=[this,this.AlV];this.Gw.D1=[this,this.AlV];this.Gx.BL=[this,this.
AlW];this.Gx.D1=[this,this.AlW];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Ct(null);this.QI.Aw(A.aaL(A.ach.AMD));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gw._Done();this.Gx._Done();this.QI._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gw._ReInit();this.Gx.
_ReInit();this.QI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUo={AC:null,CM:null,HL:
null,Bl:function(aSize){C.WG.Bl.call(this,aSize);this.CM.H([this.QI.M[2],this.QI.
M[1],this.M[2],this.QI.M[3]]);},Ai:function(Ae){C.WG.Ai.call(this,Ae);this.CM.AbA(
0,this.CM.AY-1);if(this.Go!==this.F_)this.QI.Z(true);},Init:function(aArg){},C2:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},J$:function(G){var F;var BO=this.AM;C.WG.J$.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BO=this.AM;C.WG.J6.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var Qv=0;if(this.Go
!==this.F_){if(E<this.Go){E=this.F_;Qv=-this.CM.GN*this.CM.AY;}if(E>this.F_){E=this.
Go;Qv=this.CM.GN;}}C.WG.Bx.call(this,E);if(!!Qv)this.CM.Ga(Qv);this.CM.GS(this.AM
);this.CM.HH(this.CM.Gr,true,this.HL,null);},Hk:function(G){var B;var Ge=this.CM.
G4;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gj(Ge));else Cz.
R(W_);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GN]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.F$(0);this.EU(this.AC.Dt()-1);this.CM.
Jw(this.AC.Dt());this.CM.AbA(0,this.CM.AY-1);}},_Init:function(aArg){C.WG._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gk._Init.call(this.
HL={I:this},0);this.__proto__=C.AUo;this.H(KX);this.QI.H(AIq);this.CM.Ae3(40);this.
CM.NZ(C.CH);this.HL.Wy(23);this.HL.HM(1);this.HL.Fp(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hk=[this,this.Hk];this.Init(
aArg);},_Done:function(){this.__proto__=C.WG;this.CM._Done();this.HL._Done();C.WG.
_Done.call(this);},_ReInit:function(){C.WG._ReInit.call(this);this.CM._ReInit();
this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WG._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RU={ALo:0
,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG4));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kt((A._GetAutoObject(A.Device.Converter).Ak4(this.ALo
)+CQ)+A._GetAutoObject(A.acj.DU).AfZ());else this.Kt(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fx.Ce.call(this,G);this.ALo=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fx._Init.call(this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemWeightGain"
};C.APn={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Device),B.AEl,B.AID],0);},DX:function(G){C.II.DX.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgE(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.II._Init.call(this,aArg);A.acg.C4._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APn;this.Bc.DC(
Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.Dd.H(AZc);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjP));this.Init(aArg);},_Done:
function(){this.__proto__=C.II;this.Bc._Done();this.Dd._Done();C.II._Done.call(this
);},_ReInit:function(){C.II._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.II._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANp={ZH:null,Kx:null,Mk:null,Timer:null,AB$:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZH.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Bp1),P9,this.AB$.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BAs:function(G){if(this.AB$>1){this.AB$=this.AB$-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axq();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZH={I:this},0);A.acg.Text.
_Init.call(this.Kx={I:this},0);A.acg.Ap._Init.call(this.Mk={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANp;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZH.H(AZd);this.ZH.KQ(true);this.ZH.R(A.jV);this.ZH.L(A.jb.
Text);this.Kx.H(AZe);this.Kx.KQ(true);this.Kx.R(A.aaR(A.acf.A4W));this.Kx.L(A.jb.
Text);this.Mk.H(AIr);this.J(this.ZH,0);this.J(this.Kx,0);this.J(this.Mk,0);this.
ZH.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));this.Mk.Aw(A.aaL(A.ach.ABG));this.
Timer.Mz=[this,this.BAs];},_Done:function(){this.__proto__=C.AB;this.ZH._Done();
this.Kx._Done();this.Mk._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZH._ReInit();this.Kx._ReInit();this.Mk._ReInit(
);this.Timer._ReInit();this.Kx.R(A.aaR(A.acf.A4W));this.ZH.S(A.aaL(A.fl.Af));this.
Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AM8={Kx:null,Ams:null
,QB:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad5.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa0<=10)this.Kx.R(A.aaR(A.acf.BgR));else this.Kx.R(A.aaR(A.acf.
A4X));},_Init:function(aArg){C.Ad5._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.Ap._Init.call(this.Ams={I:this},0);C.CH._Init.call(this.QB={
I:this},0);this.__proto__=C.AM8;this.SP.H(AZf);this.Mk.H(AZg);this.Kx.H(AZh);this.
Kx.KQ(true);this.Kx.L(A.jb.Text);this.Ams.H(AIr);this.QB.H(AZi);this.QB.Z(true);
this.QB.R(A.aaR(A.acf.AT1));this.QB.L(A.jb.Text);this.J(this.Kx,0);this.J(this.Ams
,0);this.J(this.QB,0);this.Kx.S(A.aaL(A.fl.Af));this.Ams.Aw(A.aaL(A.ach.ABG));this.
QB.S(A.aaL(A.fl.Af));this.QB.A2(A.aaL(A.fl.Ak));this.QB.Ct(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad5;this.Kx._Done();this.Ams._Done();this.QB._Done();
C.Ad5._Done.call(this);},_ReInit:function(){C.Ad5._ReInit.call(this);this.Kx._ReInit(
);this.Ams._ReInit();this.QB._ReInit();this.QB.R(A.aaR(A.acf.AT1));this.Kx.S(A.aaL(
A.fl.Af));this.QB.S(A.aaL(A.fl.Af));this.QB.A2(A.aaL(A.fl.Ak));this.QB.Ct(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad5._Mark.call(this,D);if((B=this.
Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ams)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL4={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AL4;this.
RO.Ar(false);this.RO.Aj(false);this.RO.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVo={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AVo;this.
S4.Ar(false);this.S4.Aj(false);this.S4.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOR={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(5));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.AOR;},_className:"Application::HeaderControlListFilter"};C.APp={DX:function(G){
C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(6));},_Init:
function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.APp;},_className:"Application::HeaderWatchListFilter"
};C.APt={D0:null,M6:null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M6={I:this},0);this.__proto__=
C.APt;this.D0.H(Aon);this.D0.R(A.aaR(A.acf.A5s));this.D0.L(A.jb.Text);this.M6.H(
AZj);this.M6.L(A.jb.Text);this.M6.A5(0x12);this.J(this.D0,-2);this.J(this.M6,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));this.M6.Aw(A.aaL(A.ach.ADs)
);},_Done:function(){this.__proto__=C.TS;this.D0._Done();this.M6._Done();C.TS._Done.
call(this);},_ReInit:function(){C.TS._ReInit.call(this);this.D0._ReInit();this.M6.
_ReInit();this.D0.R(A.aaR(A.acf.A5s));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TS._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM3={Ce:function(Ad){C.Ajw.Ce.call(this,Ad);if(
!!this.AX){var Oi=this.AX.H2(Ad,8);var BB3=this.AX.Sh(Ad,21);this.Aba.R(A._GetAutoObject(
A.Device.Helper).L9(BB3,A._GetAutoObject(A.Device.Helper).Du()).toFixed());this.
Sn.Z(Oi);this.Am();}},_Init:function(aArg){C.Ajw._Init.call(this,aArg);this.__proto__=
C.AM3;},_className:"Application::CalfListWatchItem"};C.TS={Ag4:null,Ag6:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag4={I:this},
0);A.acg.Ap._Init.call(this.Ag6={I:this},0);this.__proto__=C.TS;this.Ag4.H(AZk);
this.Ag4.L(A.jb.Text);this.Ag4.A5(0x12);this.Ag6.H(AZl);this.Ag6.L(A.jb.Text);this.
Ag6.A5(0x12);this.JW(this.DS,-1);this.J(this.Ag4,0);this.J(this.Ag6,0);this.Ag4.
Aw(A.aaL(A.ach.AmU));this.Ag6.Aw(A.aaL(A.ach.Abx));},_Done:function(){this.__proto__=
C.Dc;this.Ag4._Done();this.Ag6._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag4._ReInit();this.Ag6._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqm={Gi:A.wg,OD:A.wf,Q0:function(E){if(A.aaY(this.Gi,E))return;this.Gi=E;},Ans:
function(E){if(A.aaX(this.OD,E))return;this.OD=E;},_Init:function(aArg){A.acv.AB_.
_Init.call(this,aArg);this.__proto__=C.Aqm;},_className:"Application::BoundCoordList"
};C.Ajw={TY:null,Wp:null,TZ:null,Wq:null,Sn:null,Zd:null,Aba:null,AP:null,A_:null
,Ea:null,Lr:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TY.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wp.H(this.TY.M);this.A_.H([this.TY.
M[2]-1,0,this.TY.M[2]+1,aSize[1]]);this.TZ.H([this.TY.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wq.H(this.TZ.M);this.Ea.H([this.TZ.M[2]-1,0,this.TZ.M[2]+1,aSize[
1]]);this.Sn.H([this.TZ.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zd.H(this.Sn.
M);this.Lr.H([this.Sn.M[2]-1,0,this.Sn.M[2]+1,aSize[1]]);this.Aba.H([this.Sn.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K6=this.V.AQ;
this.TY.AEM(K6);this.Wp.L(K6);this.TZ.AEM(K6);this.Wq.L(K6);this.Sn.AEM(K6);this.
Zd.L(K6);this.Aba.L(K6);this.Zd.Z(!this.Sn.Fo());},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;var Mf=this.AX.CF(Ad,1);var Ib=this.AX.AmN(Ad,14);var Auf=this.AX.CF(
Ad,5);var LP=this.AX.I4(Ad,13);this.T(Mf.toFixed());if(!!LP){this.TY.Z(true);this.
TY.Awy(A._GetAutoObject(A.acj.Assessment).BcI(LP));this.Wp.Z(false);}else{this.TY.
Z(false);this.Wp.Z(true);}if(Auf>0){this.TZ.Z(true);this.TZ.Awy(A._GetAutoObject(
A.acj.Assessment).BcI(A._GetAutoObject(A.Device.Converter).Asz(Ib,Auf)));this.Wq.
Z(false);}else{this.TZ.Z(false);this.Wq.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Ki._Init.call(this.TY={I:this},0);A.acg.Text._Init.
call(this.Wp={I:this},0);C.Ki._Init.call(this.TZ={I:this},0);A.acg.Text._Init.call(
this.Wq={I:this},0);C.Ki._Init.call(this.Sn={I:this},0);A.acg.Text._Init.call(this.
Zd={I:this},0);A.acg.Text._Init.call(this.Aba={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Lr={I:this},0);this.__proto__=C.Ajw;this.
Wp.H(AZm);this.Wp.R(Aoo);this.Wq.H(Aop);this.Wq.R(Aoo);this.Sn.Awy(A.jb.Rd);this.
Zd.H(Aop);this.Zd.R(Rl);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.J(this.TY,0);this.J(this.Wp,0);this.J(this.TZ,0);this.J(
this.Wq,0);this.J(this.Sn,0);this.J(this.Zd,0);this.J(this.Aba,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lr,0);this.Wp.S(A.aaL(A.fl.Af
));this.Wq.S(A.aaL(A.fl.Af));this.Zd.S(A.aaL(A.fl.Af));this.Aba.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TY._Done();this.Wp.
_Done();this.TZ._Done();this.Wq._Done();this.Sn._Done();this.Zd._Done();this.Aba.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lr._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TY._ReInit();this.Wp.
_ReInit();this.TZ._ReInit();this.Wq._ReInit();this.Sn._ReInit();this.Zd._ReInit(
);this.Aba._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Lr._ReInit();this.Wp.S(A.aaL(A.fl.Af));this.Wq.S(A.aaL(A.fl.Af));this.Zd.S(A.aaL(
A.fl.Af));this.Aba.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pr:null,Am_:null
,EZ:null,DR:null,Are:0,Arf:0,A6Z:0,AmE:0,Aqz:0,Init:function(aArg){this.ASN(6);this.
ASO(8);this.ASZ(A.jb.AV);this.AS0(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Bll([this.DR.Aa8[0],(B=this.DR.M)[3]-B[1]]);this.WC(this);},ASM:function(
E){if(this.Pr===E)return;this.Pr=E;this.DR.ASM(E);},AS0:function(E){if(this.Arf===
E)return;this.Arf=E;this.DR.AS0(E);},ASZ:function(E){if(this.Are===E)return;this.
Are=E;this.DR.ASZ(E);this.DR.Blq(E);},WC:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.Ans([((this.EZ.OD[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gi[2]-this.EZ.Gi[0]))|0,this.DR.OD[1]]);this.DR.Ans([this.DR.OD[0]
,((this.EZ.OD[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gi[3]-this.EZ.Gi[1]))|0]);var O;
var Dg=this.DR.OD[1];var D8;var A4e=this.EZ.Gi[1];var BjF=(((B=this.DR.M)[3]-B[1
])/this.DR.OD[1])|0;for(O=0;O<BjF;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Am_.Ascent+this.Am_.Descent))+2,((B=this.M)[2]-
B[0])-this.Arf,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A6Z);D8.S(this.Am_);D8.
A5(0x24);if(O>0)D8.R(this.AJC(A4e));else D8.R(this.AJ$());A4e=A4e+this.EZ.OD[1];
this.J(D8,0);}},BFI:function(s){this.WC(s);},Bmg:function(E){if(this.Am_===E)return;
this.Am_=E;this.Am();},Azh:function(A0m){var B;if(!this.EZ||(this.EZ.Gi[3]===this.
EZ.Gi[1]))return 0;return(((A0m-this.EZ.Gi[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gi[
3]-this.EZ.Gi[1]))|0;},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeV(null);else{var Bz=A._NewObject(A.acv.AB_,0);Bz.AwI(this.EZ.AD4);Bz.Yb();var
Jy=E.AlA;while(!!Jy){Bz.Ap$(this.Bx6(Jy.P1),this.Bx7(Jy.P2));Jy=Jy.Ah;}this.DR.AeV(
Bz);this.Am();}},Bx6:function(Bwh){var B;if(!this.EZ||(this.EZ.Gi[2]===this.EZ.Gi[
0]))return 0;return((Bwh-this.EZ.Gi[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gi[2]-this.
EZ.Gi[0]);},Bx7:function(A0m){var B;if(!this.EZ||(this.EZ.Gi[3]===this.EZ.Gi[1])
)return 0;return((A0m-this.EZ.Gi[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gi[3]-this.EZ.
Gi[1]);},AJC:function(AoK){return AoK.toFixed();},AJ$:function(){return A.jV;},ASO:
function(E){if(this.AmE===E)return;this.AmE=E;this.DR.ASO(E);},ASN:function(E){if(
this.Aqz===E)return;this.Aqz=E;this.DR.ASN(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIs);this.A6Z=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIs);this.DR.BmG(AZn);this.
DR.Bk$(A.jb.Rd);this.DR.BlZ(A.jb.Bc);this.DR.Bm2(A.jb.Rd);this.J(this.DR,0);this.
Pr=A.aaL(A.acv.ACr);this.Am_=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bmg(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Am_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMP={AJC:function(AoK){return A._GetAutoObject(
A.Device.Converter).AxT(AoK,0);},AJ$:function(){return A._GetAutoObject(A.acj.DU
).AfZ();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMP;}
,_className:"Application::BodyWeightGraph"};C.OZ={JJ:null,Ex:null,Eh:null,FW:null
,IF:null,IG:null,Init:function(aArg){this.ASM(null);},WC:function(G){var B;var F;
C.DR.WC.call(this,G);var AKE=0;var ALt=0;if(!!this.JJ){AKE=this.Azh(A._GetAutoObject(
A.Device.Helper).ACY((F=this.JJ,F[1].call(F[0]))));ALt=this.Azh(A._GetAutoObject(
A.Device.Helper).ACX((F=this.JJ,F[1].call(F[0]))));}this.FW.H(A.abP(this.FW.M,0)
);this.FW.H([].concat(this.FW.M.slice(0,3),((B=this.M)[3]-B[1])-ALt));this.IF.H(
A.abO(this.IF.M,(this.FW.M[3]-((((B=this.IF.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FW.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKE));this.IG.H(A.abO(this.IG.M,(this.Eh.M[3]-((((B=this.IG.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJC:function(AoK){return A._GetAutoObject(A.Device.Converter
).S5(AoK,0,true);},AJ$:function(){return A._GetAutoObject(A.acj.DU).Aaq();},Ano:
function(E){if(A.aaZ(this.JJ,E))return;if(!!this.JJ)A.z$([this,this.AiJ],this.JJ
,0);this.JJ=E;if(!!E)A.zX([this,this.AiJ],E,0);if(!!E)A.pe([this,this.AiJ],this);
},AiJ:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.
acg.AK._Init.call(this.FW={I:this},0);A.acg.AK._Init.call(this.IF={I:this},0);A.
acg.AK._Init.call(this.IG={I:this},0);this.__proto__=C.OZ;this.Ex.AZ(0xD);this.Ex.
H(Z6);this.Ex.L(A.jb.Gh);this.Eh.AZ(0xD);this.Eh.H(S8);this.Eh.L(A.jb.H8);this.FW.
AZ(0xD);this.FW.H(AcH);this.FW.L(A.jb.E1);this.IF.AZ(0xD);this.IF.H(Z8);this.IF.
Awm(A.jb.H8);this.IF.Awn(A.jb.H8);this.IF.Awp(A.jb.E1);this.IF.Awo(A.jb.E1);this.
IG.AZ(0xD);this.IG.H(W9);this.IG.Awm(A.jb.Gh);this.IG.Awn(A.jb.Gh);this.IG.Awp(A.
jb.H8);this.IG.Awo(A.jb.H8);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FW
,-1);this.J(this.IF,-1);this.J(this.IG,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FW._Done();this.IF._Done();this.
IG._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FW._ReInit();this.IF._ReInit();this.IG._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JJ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqQ={ET:null,EZ:null,R7:null,Ij:
null,Bc:null,AxA:A.jV,DK:A.jV,AOM:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R7.
H([30,0,aSize[0]-2,30]);this.Ij.H(this.R7.M);if(!!this.ET)this.ET.H([30,this.R7.
M[3],aSize[0],this.Bc.M[1]]);},Ahp:function(E){if(this.AxA===E)return;this.AxA=E;
this.Ij.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R7.R(E);},AE3:
function(E){if(this.AOM===E)return;this.AOM=E;this.Boh(this);},Boh:function(G){var
B;if(!!this.ET)this.HN(this.ET);this.ET=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOM,0))?B:null);if(!!this.ET){this.ET.H(AZo);this.ET.AeV(this.EZ);this.J(this.ET
,0);}},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.ET)this.ET.AeV(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R7={I:this},0);A.acg.Text._Init.call(this.Ij={I:this},0);A.acg.AK._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqQ;this.H(AcK);this.Ar(false);this.R7.H(AZp);this.
R7.A5(0x11);this.R7.R(Lu);this.R7.L(A.jb.Text);this.Ij.A5(0x14);this.Ij.R(A.jV);
this.Ij.L(A.jb.Text);this.Bc.H(AZq);this.Bc.L(A.jb.Bc);this.J(this.R7,0);this.J(
this.Ij,0);this.J(this.Bc,0);this.R7.S(A.aaL(A.fl.Ak));this.Ij.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R7._Done();this.
Ij._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R7._ReInit();this.Ij._ReInit();this.Bc._ReInit();this.
R7.S(A.aaL(A.fl.Ak));this.Ij.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMo={Agx:null,GS:function(E
){var F;C.Gb.GS.call(this,E);if(!!this.Agx)(F=this.Agx,F[2].call(F[0],E));},A89:
function(E){if(A.aaZ(this.Agx,E))return;if(!!this.Agx)A.z$([this,this.A2D],this.
Agx,0);this.Agx=E;if(!!E)A.zX([this,this.A2D],E,0);if(!!E)A.pe([this,this.A2D],this
);},A2D:function(G){var F;if(!this.Agx)return;(F=this.Agx,F[2].call(F[0],this.FK(
)));},_Init:function(aArg){C.Gb._Init.call(this,aArg);this.__proto__=C.AMo;},_Mark:
function(D){var B;C.Gb._Mark.call(this,D);if((B=this.Agx)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT0={Rb:null
,PX:null,XR:null,XS:null,Mv:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rb.H(A.abI(this.Rb.M,(((B=this.M)[3]-B[1])/2)|
0));this.PX.H(A.abI(this.PX.M,(((B=this.M)[3]-B[1])/2)|0));this.Rb.H(A.abO(this.
Rb.M,(((B=this.M)[3]-B[1])/2)|0));this.PX.H(A.abO(this.PX.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rb.R(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.Bjz),P9,this.Mv.toFixed()));},Ab1:function(E){if(
this.Mv===E)return;this.Mv=E;this.BA4(this);},BA4:function(G){var B;var AJJ=(((B=
this.M)[2]-B[0])/this.Mv)|0;this.XR.H(A.abM(this.XR.M,(((B=this.M)[2]-B[0])-(this.
Mv*AJJ))+(((AJJ/2)-(((B=this.XR.M)[2]-B[0])/2))|0)));this.XS.H(A.abM(this.XS.M,(((
B=this.M)[2]-B[0])-AJJ)+(((AJJ/2)-(((B=this.XS.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rb={
I:this},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.
XR={I:this},0);A.acg.Text._Init.call(this.XS={I:this},0);this.__proto__=C.AT0;this.
H(BD);this.Rb.H(AZr);this.Rb.Hl(5);this.Rb.A5(0x11);this.Rb.L(A.jb.Text);this.PX.
H(Bp7);this.PX.Hl(5);this.PX.A5(0x14);this.PX.R(A.aaR(A.acf.AhN));this.PX.L(A.jb.
Text);this.XR.H(Bp8);this.XR.R(A$E);this.XR.L(A.jb.Text);this.XS.H(Bp9);this.XS.
R(A$E);this.XS.L(A.jb.Text);this.J(this.Rb,0);this.J(this.PX,0);this.J(this.XR,0
);this.J(this.XS,0);this.Rb.S(A.aaL(A.fl.Ak));this.PX.S(A.aaL(A.fl.Ak));this.XR.
S(A.aaL(A.fl.H1));this.XS.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=A.
Core.P;this.Rb._Done();this.PX._Done();this.XR._Done();this.XS._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rb._ReInit(
);this.PX._ReInit();this.XR._ReInit();this.XS._ReInit();this.PX.R(A.aaR(A.acf.AhN
));this.Rb.S(A.aaL(A.fl.Ak));this.PX.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K9={V1:null,AjC:null,KL:A.jV,Mv:0,Aau:false,Init:function(aArg){var A1j=A._NewObject(
C.Kj,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RL()<A1j.
C7(O))A1j.Anf=O+1;this.V1.CK(A1j);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjC.
Z(this.Aau);if(this.Aau)this.Bb(null);else this.Bb(this.V1);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V1.Q,F[1].call(F[0])))(F=this.V1.Q,F[2].
call(F[0],this.V1.AC.C7(0)));A.zX([this,this.AIU],[B=A._GetAutoObject(A.Device.Helper
),B.UX,B.U0],0);A.zV([this,this.AIU],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);A.pe([this
,this.Al8],this);},E4:function(G){var B;A.z$([this,this.AIU],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AIU],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al8],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId
],0);C.D9.E4.call(this,G);},Zq:function(E){if(A.aa0(this.AR,E))return;C.D9.Zq.call(
this,E);this.V1.AR=E;},Ab1:function(E){if(this.Mv===E)return;this.Mv=E;A.pe([this
,this.Al8],this);},BvR:function(Aq){this.Ab1(Aq);},AiR:function(G){},AIU:function(
s){this.AiR(s);},Dv:function(E){if(this.KL===E)return;this.KL=E;this.AjC.R(E);},
Al8:function(G){var Fw=A._NewObject(A.Device.Filter,0);var Azq=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azq.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhN()-((this.Mv-1)*86400))-1,true);Fw.CV(Azq);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CV(HV);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fw);},Bkw:function(){return this.Mv;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUo._Init.call(this.V1={I:this},0);C.AkL._Init.call(
this.AjC={I:this},0);this.__proto__=C.K9;this.V1.H(BD);this.AjC.H(UU);this.J(this.
V1,0);this.J(this.AjC,0);this.V1.At([this,this.Bkw,this.BvR]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V1._Done();this.AjC._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V1._ReInit();this.AjC.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANw={V8:null,YI:null,RatingMode:null,PD:null,_Init:
function(aArg){C.Cd._Init.call(this,aArg);C.Nb._Init.call(this.V8={I:this},0);C.
BU._Init.call(this.YI={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iq._Init.call(this.PD={I:this},0);this.__proto__=C.ANw;var B;this.Hh.R(A.
aaR(A.acf.ACi));this.I_(A.aaR(A.acf.A5m));this.V8.H(AIt);this.V8.Aj(true);this.V8.
T(A.aaR(A.acf.AsK));this.V8.Bi(true);this.V8.Ne(23);this.YI.H(Bp_);this.YI.Aj(true
);this.YI.T(A.aaR(A.acf.A_A));this.YI.Bi(false);this.PD.H(Bp$);this.PD.Aj(true);
this.PD.T(A.aaR(A.acf.A5j));this.PD.Bi(true);this.PD.F$(3);this.PD.EU(14);this.PD.
IO(A.aaR(A.acf.Kj)+AIu);this.PD.I$(A.aaR(A.acf.GK)+AIu);this.J(this.V8,0);this.J(
this.YI,0);this.J(this.PD,0);this.V8.AR=[B=this.V8,B.Nh];this.YI.At([B=this.RatingMode
,B.B_,B.B$]);this.YI.CK(this.RatingMode);this.PD.At([B=A._GetAutoObject(A.Device.
Device),B.A8c,B.BaH]);},_Done:function(){this.__proto__=C.Cd;this.V8._Done();this.
YI._Done();this.RatingMode._Done();this.PD._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V8._ReInit();this.YI._ReInit();this.RatingMode.
_ReInit();this.PD._ReInit();this.Hh.R(A.aaR(A.acf.ACi));this.I_(A.aaR(A.acf.A5m)
);this.V8.T(A.aaR(A.acf.AsK));this.YI.T(A.aaR(A.acf.A_A));this.PD.T(A.aaR(A.acf.
A5j));this.PD.IO(A.aaR(A.acf.Kj)+AIu);this.PD.I$(A.aaR(A.acf.GK)+AIu);},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.AuW={Init:function(aArg){this.V.Text.A5(0x11);this.V.Text.Hl(10);},Ai:function(
Ae){var B;C.Cn.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FQ=A.jb.Ad7;var GW=A.jb.Bm;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.
Text;}if(!Hd){this.Background.L(FQ);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.LF=Hd;this.KD=Fu;this.Qq=GE;
},_Init:function(aArg){C.Cn._Init.call(this,aArg);this.__proto__=C.AuW;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cn._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC6={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PO,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC3));break;case 1:this.Ap.Aw(A.aaL(A.ach.AO9));break;
case 2:this.Ap.Aw(A.aaL(A.ach.AO$));break;default:A.ab5("%s%e",AZs,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC6;this.Ap.H(AZt);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC3));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC7={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PO,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.
De.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC4));break;case 1:this.Ap.Aw(A.aaL(
A.ach.AO_));break;case 2:this.Ap.Aw(A.aaL(A.ach.APa));break;default:A.ab5("%s%e"
,AZs,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC7;
this.Ap.H(AZt);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC4));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fx={BS:null,AxO:A.jV,De:function(E){C.JI.De.call(
this,E);this.BS.L(E);},Kt:function(E){if(this.AxO===E)return;this.AxO=E;this.BS.
R(E);},_Init:function(aArg){C.JI._Init.call(this,aArg);C.CH._Init.call(this.BS={
I:this},0);this.__proto__=C.Fx;this.BS.AZ(0x34);this.BS.H(Ayp);this.BS.A5(0x11);
this.BS.L(A.jb.Text);this.J(this.BS,0);this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(
A.fl.Ak));this.BS.Ct(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JI;this.
BS._Done();C.JI._Done.call(this);},_ReInit:function(){C.JI._ReInit.call(this);this.
BS._ReInit();this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));this.BS.Ct(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JI._Mark.call(this,D);if((B=this.BS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOv={Wu:function(G){var B;this.Agr();this.AL1(A.aaR(A.acf.BiK),[this,this.Bnf],[
B=A._GetAutoObject(A.Device.Device),B.A8d,B.BaI]);A._GetAutoObject(C.B4).Gu();this.
I0(A.aaR(A.acf.AU1),[this,this.ATs],5);this.I0(A.aaR(A.acf.AUZ),[this,this.ATr],
7);this.I0(A.aaR(A.acf.AnS),[this,this.AwL],2);this.I0(A.aaR(A.acf.AdP),[this,this.
AEI],1);this.I0(A.aaR(A.acf.Aus),[this,this.AEC],0);A._GetAutoObject(C.B4).Gu();
A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abn:function(){return C.ABW;},Abo:function(
){return C.ADc;},Q5:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6l());},HO:function(G){C.GZ.HO.call(this,G);if(this.Akb()===false
){this.N.Cv(A.aaL(A.ach.Abx));this.N.Ck=[this,this.A5N];this.N.FN(A.jV);}this.N.
ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(44);},Bnf:
function(G){A._GetAutoObject(A.Device.Device).AwB(!A._GetAutoObject(A.Device.Device
).AqL);this.An0(this);},An0:function(G){var Be=A._GetAutoObject(A.Device.Device).
An.Filter.E_();var Av=Be.DL(30,3);if(!!Av)Be.Ni(Av);if(A._GetAutoObject(A.Device.
Device).AqL){var Az8=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2b=A._GetAutoObject(
A.Device.Helper).Du()-21600;Az8.Initialize(30,3,A2b,true);Be.CV(Az8);}A._GetAutoObject(
A.Device.Device).An.Bk(Be);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.
__proto__=C.AOv;var B;this.Dq(C.AO5);this.Dv(A.aaR(A.acf.A7D));this.AwG([B=A._GetAutoObject(
A.Device.Device),B.A8b,B.BaG]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dv(A.aaR(A.acf.A7D));},_className:"Application::FreshCowListScreen"};C.AOu={_Init:
function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AOu;this.Lb.Ar(false);
this.Lb.Aj(false);this.Lb.Z(false);this.Jp.Ar(false);this.Jp.Aj(false);this.Jp.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.AO5={DX:function(
G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(7));
},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AO5;},_className:
"Application::HeaderFreshCowListFilter"};C.ADc={Jv:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jv={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADc;this.A9s(1);this.Jv.H(Bqa);this.Jv.R((A.
aaR(A.acf.Calving)+AcN)+A.aaR(A.acf.A$a));this.Jv.L(A.jb.Text);this.D0.H(Bqb);this.
D0.R(A.aaR(A.acf.ADW));this.D0.L(A.jb.Text);this.J(this.Jv,0);this.J(this.D0,0);
this.Jv.S(A.aaL(A.fl.Ak));this.Jv.A2(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.Jv._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jv._ReInit();this.D0._ReInit();this.Jv.R((A.aaR(A.acf.Calving)+AcN)+A.aaR(A.acf.
A$a));this.D0.R(A.aaR(A.acf.ADW));this.Jv.S(A.aaL(A.fl.Ak));this.Jv.A2(A.aaL(A.fl.
Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABW={AGL:null,KO:null,Uz:null,AP:null,A_:null,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.Uz.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.Uz.M[2]-1,0,this.Uz.M[2]+1,aSize[1]]);this.KO.H([this.Uz.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KO.L(this.V.AQ);this.
Uz.De(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var
Iy=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,1);var A2a=this.AX.CF(Ad,29);var Als=this.
AX.Hu(Ad,28);this.T(Mf.toFixed());this.KO.R(A2a.toFixed());this.Uz.Ab1(A._GetAutoObject(
A.Device.Device).AqK+1);this.Uz.BmU(Als);this.Uz.R(A._GetAutoObject(A.acj.KJ).AjG(
Als));A._GetAutoObject(A.Device.Device).SN(Ad);this.ApZ(Iy);this.Axi();A._GetAutoObject(
A.Device.Device).Bt.Bk(null);this.Am();}},A35:function(G){this.Uz.Ab3(this.AGL);
},Axi:function(){var Gf=A._GetAutoObject(A.Device.Device).Bt.B9();this.AGL=A._NewObject(
C.Ajo,0);if(Gf>0){var O=Gf-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6);this.Atm(this.AGL,O,9,D8);O=O-1;}}A.pe([this,this.A35],this);},Atm:
function(A0G,Ad,A0F,Qd){var Alm=A._GetAutoObject(A.Device.Device).Bt.I4(Ad,A0F);
if(!!Alm)A0G.Or(Alm,Qd);},ApZ:function(Ac2){var Fw=A._NewObject(A.Device.Filter,
0);var Azq=A._NewObject(A.Device.UInt32FilterCriterion,0);Azq.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZM(A._GetAutoObject(A.Device.Device).AqK)-1,true);Fw.CV(Azq);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac2,true);Fw.
CV(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KO={I:this},0);C.ATV._Init.call(this.
Uz={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);this.__proto__=C.ABW;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KO,0);this.J(this.Uz,0);this.J(this.AP,0);this.J(this.A_,0);this.KO.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KO._Done();
this.Uz._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KO._ReInit();this.Uz._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KO.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.ATV={AUC:0,Init:function(aArg
){},AOC:function(){return A._GetAutoObject(A.Device.Helper).Aqi(this.AUC);},AOE:
function(){return this.AOC()+(this.Mv*86400);},BmU:function(E){if(this.AUC===E)return;
this.AUC=E;A.pe([this,this.WC],this);},_Init:function(aArg){C.Ahv._Init.call(this
,aArg);this.__proto__=C.ATV;this.Bc.H(Bqc);this.BmR(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dt:function(){if(this.K&&this.K.Dt)return this.K.Dt.apply(this,arguments);else
return C.FactoryResetScope.BtS.apply(this,arguments);},BtS:function(){return 2;}
,Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BR(this.C7(aIndex));},_Init:function(aArg){C.Cl._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cb.Set(0,0);this.Cb.Set(1,1);var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cl;this.FactoryResetScopeToString._Done();C.Cl._Done.call(this);},_ReInit:function(
){C.Cl._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bf5:false,Init:function(
aArg){this.Bf5=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.Bda){A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.
Device).An);if(this.Bf5)A._GetAutoObject(A.Device.Device).A6(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A6(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ARY={Wu:function(G){this.Agr();A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.Settings
),[this,this.A3b]);A._GetAutoObject(C.B4).Gu();this.ALZ();A._GetAutoObject(C.B4).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.
B4).NC(A.aaR(A.acf.ARc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(
6);},DE:function(G){},Abn:function(){return C.Aqn;},Abo:function(){return C.AqU;
},Q5:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).ACR());},HO:function(G){C.RJ.HO.call(this,G);if(this.Akb()===false){this.
N.Cv(A.aaL(A.ach.Avo));this.N.Ck=[this,this.ANP];this.N.FN(A.jV);}this.N.ON(false
);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(47);},A3b:function(
G){A._GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A$).Cf(89);},_Init:
function(aArg){C.RJ._Init.call(this,aArg);this.__proto__=C.ARY;this.Dq(C.AC8);this.
Dv(A.aaR(A.acf.A7z));this.AS1(A._GetAutoObject(C.AvY));},_ReInit:function(){C.RJ.
_ReInit.call(this);this.Dv(A.aaR(A.acf.A7z));},_className:"Application::NoTransponderListScreen"
};C.ARX={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ARX;this.
KU.Ar(false);this.KU.Aj(false);this.KU.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.AC8={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(8));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.AC8;},_className:"Application::HeaderNoTransponderListFilter"};C.ABF={AuI:null
,Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuI.BR(aIndex
);},_Init:function(aArg){C.Gc._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuI={I:this},0);this.__proto__=C.ABF;},_Done:function(){this.__proto__=
C.Gc;this.AuI._Done();C.Gc._Done.call(this);},_ReInit:function(){C.Gc._ReInit.call(
this);this.AuI._ReInit();},_Mark:function(D){var B;C.Gc._Mark.call(this,D);if((B=
this.AuI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALU={Cn:null,AdX:null,Init:function(aArg){this.Bb(this.Cn);},Ll:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaB];this.BP.Ck=null;
this.BP.Co=[this,this.A2O];this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(A.aaL(A.
ach.Aeu));}return this.BP;},AAm:function(G){var Aa=(C.Aje.isPrototypeOf(G)?G:null
);if(Aa===this.Cn)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdX)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$F);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Aje._Init.call(this.
Cn={I:this},0);C.Aje._Init.call(this.AdX={I:this},0);this.__proto__=C.ALU;this.H(
Rk);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cn.H(IT);this.Cn.T(A.aaR(A.acf.
AD6));this.AdX.H(P_);this.AdX.T(A.aaR(A.acf.Ts));this.J(this.Cn,0);this.J(this.AdX
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cn.AR=[this,this.AAm];this.AdX.AR=[this,this.
AAm];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Cn._Done();this.
AdX._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Cn._ReInit();this.AdX._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cn.
T(A.aaR(A.acf.AD6));this.AdX.T(A.aaR(A.acf.Ts));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BE4={Undefined:0,BE2:1,BE3:2,IdScanned:3,BDY:4,BC4:5,BDI:6};C.AL8={A_W:function(
){A._GetAutoObject(A.Device.Device).A6(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeI]);},_Init:function(aArg){C.Auy._Init.call(
this,aArg);this.__proto__=C.AL8;this.Gc.At(1);this.AS7(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeo={VQ:null,VS:null,VT:null,AgY:null,AgZ:null,Ag0:null,CE:null,Ck:null,Co:null
,AnT:A.jV,AnU:A.jV,AnV:A.jV,Aq1:0,Aq2:0,Aq3:0,Ahf:0,Zz:false,Zy:false,Asf:false,
Asu:false,Ast:false,Aju:function(Ff){this.CE=Ff.CE;this.Ck=Ff.Ck;this.Co=Ff.Co;this.
AnT=Ff.AnT;this.AnU=Ff.AnU;this.AnV=Ff.AnV;this.Ahf=Ff.Ahf;this.VQ=Ff.VQ;this.VS=
Ff.VS;this.VT=Ff.VT;this.AgY=Ff.AgY;this.AgZ=Ff.AgZ;this.Ag0=Ff.Ag0;this.Ast=Ff.
Ast;this.Asu=Ff.Asu;this.Asf=Ff.Asf;this.Zy=Ff.Zy;this.Zz=Ff.Zz;this.Aq1=Ff.Aq1;
this.Aq2=Ff.Aq2;this.Aq3=Ff.Aq3;},AkK:function(Ff){Ff.CE=this.CE;Ff.Ck=this.Ck;Ff.
Co=this.Co;Ff.Hx(this.AnT);Ff.FN(this.AnU);Ff.CX(this.AnV);Ff.AE9(this.Ahf);Ff.AE0(
this.VQ);Ff.ArH(this.VS);Ff.Anr(this.VT);Ff.C1(this.AgY);Ff.Cv(this.AgZ);Ff.C5(this.
Ag0);Ff.ON(this.Ast);Ff.OO(this.Asu);Ff.Asf=this.Asf;Ff.Zy=this.Zy;Ff.Zz=this.Zz;
Ff.Bl1(this.Aq1);Ff.ASV(this.Aq2);Ff.A9D(this.Aq3);},_Init:function(aArg){this.__proto__=
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
Dq(C.AC6);},_className:"Application::NewAnimalSetTransponderScreen"};C.C6={Aa9:null
,CountryToString:null,Dt:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lt(aIndex);},DZ:function(A9){return A9;
},H3:function(){return 39;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.
Aa9)(F=this.Aa9,F[2].call(F[0],E));},A1c:function(G){var F;if(!!this.Aa9)this.Q=(
F=this.Aa9,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.B$],0);},AET:
function(E){if(A.aaZ(this.Aa9,E))return;if(!!this.Aa9)A.z$([this,this.A1c],this.
Aa9,0);this.Aa9=E;if(!!this.Aa9)A.zX([this,this.A1c],this.Aa9,0);A.pe([this,this.
A1c],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aa9)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OY={AC:null,Q:null,Background:null,Io:null,In:null,MZ:
0,AM:0,Go:0,F_:0,Aga:function(G){this.J$(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IA=((Ae&0x40)===0x40);if(IA){this.Background.
L(A.jb.AV);this.Dj(256);}else{this.Background.L(this.MZ);this.Dj(256);}},Af$:function(
G){this.J6(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A2$],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A2$],E,0);if(!!E)A.pe([this
,this.A2$],this);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Am();},J$:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J6:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Go)E=this.F_;if(E>this.F_)E=this.Go;if(this.AM===E)return;this.AM=E;
this.Am();},F$:function(E){if(this.Go===E)return;this.Go=E;this.Am();},EU:function(
E){if(this.F_===E)return;this.F_=E;this.Am();},C2:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A2$:function(G){var F;if(!!this.
AC){this.F$(0);this.EU(this.AC.H3());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Io={
I:this},0);A.Core.BK._Init.call(this.In={I:this},0);this.__proto__=C.OY;this.H(A$G
);this.Background.H(As9);this.Io.Filter=4;this.In.Filter=5;this.MZ=A.jb.CJ;this.
J(this.Background,0);this.Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];this.
In.BL=[this,this.Af$];this.In.D1=[this,this.Af$];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Io._Done();this.In._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Io._ReInit();this.In._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RQ={A06:A.jV,Ai:function(
Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.A47));this.Kt(this.A06);},Ce:function(
G){C.Fx.Ce.call(this,G);var Als=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Als)this.A06=W_;else this.A06=A._GetAutoObject(A.acj.KJ).AjG(Als);this.Am();
},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RQ;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RR={A1$:0,Ai:function(Ae){C.Fx.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARa));if(this.A1$>0)this.Kt(this.A1$.toFixed());else
this.Kt(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fx.Ce.call(this,G);this.A1$=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fx._Init.call(
this,aArg);this.__proto__=C.RR;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dt:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 4;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Akr(E);},A1v:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1v],[B=this.Animal,B.ASe,B.Akr],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1v],[B=this.Animal,B.ASe,B.Akr],0);A.pe([this,this.A1v],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dt:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BR(aIndex);},DZ:function(A9){return A9;
},H3:function(){return 98;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal
)this.Animal.NY(E);},A04:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A04],[B=this.Animal,B.Av2,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A04],[B=this.Animal,B.Av2,B.NY],0);A.pe([
this,this.A04],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARv={V4:null,YG:null,AeH:null,Init:function(
aArg){this.Bb(this.V4);},Adp:function(G){var Aa=(C.Cn.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YG)this.BxA();else if(Aa===this.V4)this.BAh(this);else throw new
Error(Ax_);A._GetAutoObject(A.Device.Device).Dw(0);},BAh:function(G){var B;var F;
var Vh=(C.Amm.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vh){A.ab5("%s",Bqd);return;}Vh.AKu(this);},BxA:function(){A._GetAutoObject(
A.Device.Helper).W.AGt(true);A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mn._Init.call(this.V4={I:this},0);C.Mn._Init.call(this.YG={
I:this},0);C.VL._Init.call(this.AeH={I:this},0);this.__proto__=C.ARv;var B;this.
H(AcK);this.V4.H(P_);this.V4.Ar(true);this.V4.T(A.aaR(A.acf.A_C));this.V4.Bi(true
);this.YG.H(IT);this.YG.Ar(true);this.YG.T(A.aaR(A.acf.A4t));this.YG.Bi(true);this.
AeH.H(BD);this.AeH.T(A.aaR(A.acf.ACF));this.AeH.Bi(true);this.J(this.V4,0);this.
J(this.YG,0);this.J(this.AeH,0);this.V4.AR=[this,this.Adp];this.YG.AR=[this,this.
Adp];this.AeH.ASJ([B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V4._Done();this.YG._Done(
);this.AeH._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V4._ReInit();this.YG._ReInit();this.AeH._ReInit();this.V4.
T(A.aaR(A.acf.A_C));this.YG.T(A.aaR(A.acf.A4t));this.AeH.T(A.aaR(A.acf.ACF));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VL={
Ai:function(Ae){C.T8.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj
){FQ=A.jb.Text;GW=A.jb.Bm;}if(!this.LF){this.Background.L(FQ);this.V.L(A.jb.AmW);
}else if(this.Qq){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.
L(GW);}if(this.Amu){this.Ml.Cu(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cu(0);this.Ml.
L(A.jb.Bm);}},_Init:function(aArg){C.T8._Init.call(this,aArg);this.__proto__=C.VL;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvR={C8:null,A1:null,AF:
null,Akc:null,QT:null,EM:null,ARN:Lu,Bl:function(aSize){C.Cn.Bl.call(this,aSize);
var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}this.Background.
L(FQ);this.V.L(GW);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Cn.Ai.call(this
,Ae);this.Akc.L(this.V.AQ);this.QT.L(this.V.AQ);this.QT.R(Bqe);this.T(((this.ARN+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak0(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2e=this.QT.Afc([(this.QT.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3z=this.QT.Afc([this.
QT.String.length-(F=this.AF,F[1].call(F[0])),0]);var AA9=this.QT.Db();this.EM.H([
A2e[0]-1,AA9[1],A3z[0]+1,AA9[3]]);}else this.EM.H(this.QT.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Akc.Aw(E);},OL:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaA],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaA],E,0);if(!!E)A.pe([this,this.AaA],this);},PP:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaC],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaC],E,0);if(!!E)A.pe([this,this.AaC],this);},AaC:function(G){this.Am(
);},AaA:function(G){this.Am();},ArT:function(E){if(this.ARN===E)return;this.ARN=
E;this.Am();},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akc={I:this},0);A.acg.Text._Init.call(this.QT={I:this},0);A.acg.BT._Init.call(
this.EM={I:this},0);this.__proto__=C.AvR;this.H(KX);this.V.A5(0x11);this.Akc.H(P8
);this.QT.H(Bqf);this.EM.H(Bqg);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.Akc
,0);this.J(this.QT,0);this.J(this.EM,0);this.QT.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cn;this.Akc._Done();this.QT._Done();this.EM._Done();C.Cn._Done.
call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.Akc._ReInit();this.
QT._ReInit();this.EM._ReInit();this.QT.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cn._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATQ:0,Init:
function(aArg){var B;A.zX([this,this.Bd2],[B=A._GetAutoObject(A.Device.Device),B.
AEl,B.AID],0);A.pe([this,this.Bd2],this);},HO:function(G){C.Tw.HO.call(this,G);if(
this.AjK)this.N.Cv(A.aaL(A.ach.AD));else this.N.Cv(A.aaL(A.ach.AM9));this.N.C5(A.
aaL(A.ach.Options));this.N.FN(A.jV);this.N.CX(A.jV);this.N.Ck=[this,this.A_l];this.
N.Co=[this,this.Wu];this.N.ArH(A.aaL(A.fl.Ak));this.N.Anr(A.aaL(A.fl.Ak));},MU:function(
G){this.Bem(this);},Om:function(G){this.BAc(this);},AdM:function(Aia,Aib,BwE){A.
_GetAutoObject(C.B4).ABx(Aia,Aib,[this,this.A8x,this.AS_],BwE);},Wu:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjK){A._GetAutoObject(C.B4).
Tt(A.aaR(A.acf.Bhs),[this,this.Bnb]);A._GetAutoObject(C.B4).Gu();}this.AdM(A.aaR(
A.acf.Rating),[this,this.ATw],3);this.AdM(A.aaR(A.acf.Afq),[this,this.ATy],2);this.
AdM(A.aaR(A.acf.Temperature),[this,this.ATx],1);this.AdM(A.aaR(A.acf.AdP),[this,
this.Bm_],0);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Bhw
));A._GetAutoObject(A.Device.Device).Dw(6);},AS_:function(E){if(this.ATQ===E)return;
this.ATQ=E;A.abo([this,this.A8x,this.AS_],0);},Bd2:function(G){this.AS_(A._GetAutoObject(
A.Device.Device).D9);},A8x:function(){return this.ATQ;},_Init:function(aArg){C.Tw.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vu:null
,Init:function(aArg){var B;A.zX([this,this.Af7],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);A.pe([this,this.Bf_],this);A.pe([this,this.Q5],this);},CC:function(
G){C.Tw.CC.call(this,G);A.pe([this,this.Bge],this);},AGz:function(G){C.Tw.AGz.call(
this,G);if(!!this.Ld)this.Ahy(this.Ld,this.Vu);},HO:function(G){C.Tw.HO.call(this
,G);this.N.Cv(A.aaL(A.ach.AQK));this.N.C5(A.aaL(A.ach.AQL));if(this.AjK)this.N.ASV(
0);else this.N.ASV(1);this.N.A9D(A._GetAutoObject(A.Device.Converter).BgD(A._GetAutoObject(
A.Device.Device).D9));this.N.FN(A.jV);this.N.CX(A.jV);this.N.Ck=[this,this.Bk1];
this.N.Co=[this,this.Bnd];this.N.ArH(A.aaL(A.fl.Ak));this.N.Anr(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QF()){this.N.I6.Dj(100);this.N.Ck=null;
}else this.N.I6.Dj(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Lc.
Dj(100);this.N.Co=null;}else this.N.Lc.Dj(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.TU.Dj(100);this.N.TW.Dj(100);}else{this.N.TU.Dj(255);this.N.
TW.Dj(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;if(LB>=A._GetAutoObject(A.
Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.Helper).G6(LB);},Om:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LB=A._GetAutoObject(
A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G6(LB);},Af6:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cf(94);},Bk1:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},Bnd:function(G){this.Bem(this);},Q5:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mq());A.pe([this,this.Bge
],this);},Bf_:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.Vu.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QF()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vu.R(A.aaR(A.acf.AEc));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACS(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vu.R(A.aaR(A.acf.ANZ));else this.Vu.R(A.aaR(
A.acf.ANY));}else this.Vu.R(A.aaR(A.acf.ARU));}else this.Vu.Z(false);},Bge:function(
G){var BA$=A._GetAutoObject(A.Device.Helper).W.Id;var A3C=A._GetAutoObject(A.Device.
Device).An.LS(0,BA$);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G6(-1);else if(A3C<0)A._GetAutoObject(A.Device.Helper).G6(0);},
Af7:function(G){this.Bf_(this);this.HO(this);},_Init:function(aArg){C.Tw._Init.call(
this,aArg);C.AkL._Init.call(this.Vu={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APm);this.Vu.H(Fe);this.J(this.Vu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tw;this.Vu._Done();C.Tw._Done.call(this);},_ReInit:function(){
C.Tw._ReInit.call(this);this.Vu._ReInit();},_Mark:function(D){var B;C.Tw._Mark.call(
this,D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMl={QN:null,V5:null,AbC:null,YJ:null,Init:function(aArg){var B;var F;this.Bb(
this.QN);if(!!A._GetAutoObject(C.A$).Q){var Vh=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.ab5("%s",AZu);
return;}else{if(Vh.AjK)this.QN.T(A.aaR(A.acf.Bg));else this.QN.T(A.aaR(A.acf.ET)
);var Azm=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azm||A._GetAutoObject(
A.Device.Helper).Aq8(Azm))this.YJ.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.V5.Ar(false);this.QN.Ar(false);}}}},Adp:function(G){var Aa=(C.Cn.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbC)A._GetAutoObject(C.A$).Cf(9);else if(Aa===this.V5)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QN)this.BBF();else if(Aa===this.YJ)this.
A1a();else throw new Error(Ax_);},BBF:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZu);return;}Vh.A_l(this);},A1a:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZu);return;}Vh.Q5(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mn._Init.call(this.QN={I:this},0);C.Mn._Init.call(this.V5={I:this},
0);C.Mn._Init.call(this.AbC={I:this},0);C.Mn._Init.call(this.YJ={I:this},0);this.
__proto__=C.AMl;this.H(AfA);this.QN.H(Z_);this.QN.Ar(true);this.QN.T(A.aaR(A.acf.
ET));this.QN.Bi(true);this.V5.H(P_);this.V5.Ar(true);this.V5.T(A.aaR(A.acf.AUe));
this.V5.Bi(true);this.AbC.H(IT);this.AbC.T(A.aaR(A.acf.AkN));this.AbC.Bi(true);this.
YJ.H(BD);this.YJ.T(A.aaR(A.acf.AB2));this.YJ.Bi(true);this.J(this.QN,0);this.J(this.
V5,0);this.J(this.AbC,0);this.J(this.YJ,0);this.QN.AR=[this,this.Adp];this.V5.AR=[
this,this.Adp];this.AbC.AR=[this,this.Adp];this.YJ.AR=[this,this.Adp];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QN._Done();this.V5._Done(
);this.AbC._Done();this.YJ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QN._ReInit();this.V5._ReInit();this.AbC.
_ReInit();this.YJ._ReInit();this.QN.T(A.aaR(A.acf.ET));this.V5.T(A.aaR(A.acf.AUe
));this.AbC.T(A.aaR(A.acf.AkN));this.YJ.T(A.aaR(A.acf.AB2));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I7={TX:null,Ez:null,Yg:null,Background:null,Ap:null,Io:null,In:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10
);var IA=((Ae&0x40)===0x40);if(IA){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dj(256);}else if(Hd){this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dj(
256);}else{this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dj(128);}if(!this.
AM)this.Ap.Cu(0);else if(this.AM>0){if(A.aaZ(this.TX,[B=A._GetAutoObject(A.Device.
Device),B.Awa,B.AyF]))this.Ap.Cu(2);else if(A.aaZ(this.TX,[B=A._GetAutoObject(A.
Device.Device),B.Av$,B.AyE]))this.Ap.Cu(3);else if(!!this.Yg&&((F=this.Yg,F[1].call(
F[0]))===1))this.Ap.Cu(1);else this.Ap.Cu(0);}else if(A.aaZ(this.TX,[B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyF]))this.Ap.Cu(6);else if(A.aaZ(this.TX,[B=A._GetAutoObject(
A.Device.Device),B.Av$,B.AyE]))this.Ap.Cu(7);else if(!!this.Yg&&((F=this.Yg,F[1].
call(F[0]))===1))this.Ap.Cu(5);else this.Ap.Cu(4);},Aga:function(G){this.J$(this
);},Af$:function(G){this.J6(this);},J$:function(G){this.Bx(1);},J6:function(G){this.
Bx(-1);},Bl$:function(E){if(A.aaZ(this.TX,E))return;if(!!this.TX)A.z$([this,this.
A2U],this.TX,0);this.TX=E;if(!!E)A.zX([this,this.A2U],this.TX,0);A.pe([this,this.
A2U],this);},Ui:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af_],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af_],this.Ez,0);if(!!E)A.pe([this
,this.Af_],this);},A2U:function(G){var F;if(!!this.TX)this.Bx((F=this.TX,F[1].call(
F[0])));},Af_:function(G){A.pe([this,this.BBS],this);},CT:function(E){if(this.MZ===
E)return;this.MZ=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TX)(F=this.TX,F[2].call(F[0],E));this.Am();A.abo([this,this.Ud,this.
Bx],0);},A9t:function(E){if(A.aaZ(this.Yg,E))return;if(!!this.Yg)A.z$([this,this.
Af_],this.Yg,0);this.Yg=E;if(!!E)A.zX([this,this.Af_],this.Yg,0);if(!!E)A.pe([this
,this.Af_],this);},BBS:function(G){var F,CA;if(!this.Yg||!this.Ez)return;this.Bl$(
A._GetAutoObject(A.Device.Helper).BcP((F=this.Yg,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.Am();},Ud:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);
A.Core.BK._Init.call(this.In={I:this},0);this.__proto__=C.I7;this.H(AIv);this.Background.
AZ(0x3F);this.Background.H(AIv);this.Ap.AZ(0x3C);this.Ap.H(AIv);this.Io.Filter=4;
this.In.Filter=5;this.MZ=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUE));this.Io.BL=[this,this.Aga];this.In.BL=[this,this.Af$];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Io._Done();this.In._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Io._ReInit(
);this.In._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.TX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALT={Wu:function(G){var B;var F;this.Agr();if(!!A._GetAutoObject(A.Device.Helper
).AOA((F=this.FJ,F[1].call(F[0])),0,true))this.AL1(A.aaR(A.acf.A6B),[this,this.Bne
],[B=A._GetAutoObject(A.Device.Device),B.A7S,B.Baq]);else A._GetAutoObject(C.B4).
AaP(A.aaR(A.acf.A6B));A._GetAutoObject(C.B4).Gu();this.I0(A.aaR(A.acf.LinkTransponder
),[this,this.Bmq],8);this.I0(A.aaR(A.acf.Ts),[this,this.Ako],9);this.I0(A.aaR(A.
acf.A$t),[this,this.Bm3],10);this.I0(A.aaR(A.acf.AF6),[this,this.ATd],3);this.I0(
A.aaR(A.acf.AnS),[this,this.AwL],2);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abn:function(){return C.Aqn;},Abo:function(){return C.AqU;
},Q5:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6c((F=this.FJ,F[1].call(F[0]))));},HO:function(G){var F;C.GZ.HO.
call(this,G);if(this.Akb()===false){this.N.Cv(A._GetAutoObject(A.Device.Converter
).BgF((F=this.FJ,F[1].call(F[0]))));this.N.Ck=[this,this.AIR];this.N.FN(A.jV);}this.
N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(C.A$).Cf(52);},A2Z:
function(G){C.GZ.A2Z.call(this,G);A.pe([this,this.AZ6],this);},Bne:function(G){A.
_GetAutoObject(A.Device.Device).Awg(!A._GetAutoObject(A.Device.Device).Ap9);this.
An0(this);},An0:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E_();A._GetAutoObject(A.Device.Helper).BnM(Be);if(A._GetAutoObject(A.Device.Device
).Ap9){var A1T=A._GetAutoObject(A.Device.Helper).AOA((F=this.FJ,F[1].call(F[0]))
,21600,true);Be.CV(A1T);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.ALT;var B;this.Dv(A.aaR(A.acf.
AvW));this.AwG([B=A._GetAutoObject(A.Device.Device),B.A7R,B.Bap]);},_ReInit:function(
){C.GZ._ReInit.call(this);this.Dv(A.aaR(A.acf.AvW));},_className:"Application::ActionListScreen"
};C.ALS={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ALS;},
_className:"Application::ActionListFilterScreen"};C.APm={IK:null,IQ:null,Bc:null
,MB:A.jV,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8B,B.A9Y],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);},De:function(E){C.II.De.call(this,E);this.IQ.L(E);},DX:function(
G){C.II.DX.call(this,G);var Azm=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azm||A._GetAutoObject(A.Device.Helper).Aq8(Azm))this.IK.Z(false);else this.IK.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqR())this.AwS(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$H)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.AwS(A$I);},AwS:function(E){if(this.MB===E)return;this.MB=E;
this.IQ.R(E);},_Init:function(aArg){C.II._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IK={I:this},0);A.acg.Text._Init.call(this.IQ={I:this},0);A.acg.C4._Init.call(
this.Bc={I:this},0);this.__proto__=C.APm;this.HP.H(Bqh);this.DS.H(Bqi);this.IK.H(
Bqj);this.IK.L(A.jb.Text);this.IQ.H(A$J);this.IQ.Hl(2);this.IQ.KQ(true);this.IQ.
A5(0x12);this.IQ.R(A$K);this.Bc.DC(Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.
J(this.IK,0);this.J(this.IQ,0);this.J(this.Bc,0);this.IK.Aw(A.aaL(A.ach.Aew));this.
IQ.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.II;this.
IK._Done();this.IQ._Done();this.Bc._Done();C.II._Done.call(this);},_ReInit:function(
){C.II._ReInit.call(this);this.IK._ReInit();this.IQ._ReInit();this.Bc._ReInit();
this.IQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.II._Mark.call(this,D);if((
B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsA={Text:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(W_);else this.Text.R(this.AC.Gj((F=this.Q,F[1].call(F[0]
))));var IA=((Ae&0x40)===0x40);if(IA)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OY._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsA;this.Text.R(Rl);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OY;this.Text._Done();C.OY.
_Done.call(this);},_ReInit:function(){C.OY._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OY._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aq5={C8:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACN(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C8.Cu(this.AC.ACP(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IA=((
Ae&0x40)===0x40);if(IA)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OY._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq5;this.H(AIv);this.C8.H(A$G);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OY;this.C8._Done();C.OY._Done.call(this);},_ReInit:function(){C.OY._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OY._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuS={VN:null,DirectionOfCountingToString:null,Aec:null,Dt:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return aIndex;
},Gj:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return A.jV;return this.
DirectionOfCountingToString.BR(aIndex);},DZ:function(A9){return A9;},H3:function(
){return this.Dt()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.VN)(F=
this.VN,F[2].call(F[0],E));},ACN:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt(
)))return null;return this.Aec.AsB(aIndex);},ACP:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dt()))return-1;return this.Aec.AsC(aIndex);},A1o:function(G){var F;
if(!!this.VN)this.Q=(F=this.VN,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},AeW:function(E){if(A.aaZ(this.VN,E))return;if(!!this.VN)A.z$([this
,this.A1o],this.VN,0);this.VN=E;if(!!this.VN)A.zX([this,this.A1o],this.VN,0);A.pe([
this,this.A1o],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
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
throw new Error(Bqk+aIndex.toFixed());}return A9;},Gj:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dt()))return A.jV;return this.AnimalIdGenerationMethodToString.
BR(this.C7(aIndex));},DZ:function(A9){var aIndex=-1;switch(A9){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bql+A9.toFixed());}return aIndex;},H3:function(){return this.
Dt()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Hs)(F=this.Hs,F[2].
call(F[0],E));},ACN:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;
return this.AdT.AsB(this.C7(aIndex));},ACP:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dt()))return-1;return this.AdT.AsC(this.C7(aIndex));},A0U:function(G){var F;
if(!!this.Hs)this.Q=(F=this.Hs,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},Bk9:function(E){if(A.aaZ(this.Hs,E))return;if(!!this.Hs)A.z$([this
,this.A0U],this.Hs,0);this.Hs=E;if(!!this.Hs)A.zX([this,this.A0U],this.Hs,0);A.pe([
this,this.A0U],this);},Ui:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af_],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af_],this.Ez
,0);A.pe([this,this.Af_],this);},Af_:function(G){A.pe([this,this.BxC],this);},ByK:
function(L4){var Rn=0;switch(L4){case 0:Rn=2;break;case 1:Rn=3;break;case 2:Rn=4;
break;default:throw new Error(Bqm+L4.toFixed());}return Rn;},BxC:function(G){var
BdN=this.C7(this.DZ(this.Q));if(this.Q!==BdN)this.At(BdN);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdT._Init.call(this.
AdT={I:this},0);this.__proto__=C.AMd;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdT._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdT._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGv={FI:null,AaV:null,Q:null,Fl:null,Fa:null,HG:null,Wm:null,AW:null,HZ:null
,Kk:null,A8:0,AM:0,Alk:0,Init:function(aArg){var B;A.zX([this,this.Bd1],[B=A._GetAutoObject(
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
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A7_())this.Bb(
this.AW);else this.Bb(this.Wm);if(!this.AM)this.AW.SM(2);else this.AW.SM(7);}break;
default:throw new Error(As_+this.A8.toFixed());}this.DJ(this);this.Am();},At:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ud,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Om:function(G){this.AA1(2);},MU:function(G){this.AA1(
7);},AA1:function(Gz){var B;var Azn=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azn){var AAd=(A.Core.P.isPrototypeOf(B=this.QE(Azn,Gz,0x15))?B:null);if(!!AAd){
this.Bb(AAd);return true;}}return false;},AoU:function(G){A.pe([this,this.Bd1],this
);},A3N:function(G){var B;var F;if(!this.HZ.Hs){this.Kk.AeW(null);return;}switch((
F=this.HZ.Hs,F[1].call(F[0]))){case 0:case 1:this.Kk.AeW(null);break;case 3:this.
Kk.AeW([B=A._GetAutoObject(A.Device.Device),B.ASc,B.AZN]);break;case 2:this.Kk.AeW([
B=A._GetAutoObject(A.Device.Device),B.ASd,B.AZO]);break;case 4:case 5:this.Kk.AeW([
B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIH]);break;default:throw new Error(
Bqn+(F=this.HZ.Hs,F[1].call(F[0])).toFixed());}},Bd1:function(G){var F;if(!this.
HZ.Hs)return;A.pe([this,this.A3N],this);var AtO=false;switch((F=this.HZ.Hs,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtO=true;this.AW.A_e(-1);}break;case 0:
case 1:{AtO=false;this.AW.A_e(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayk+(F=this.HZ.Hs,F[1].call(F[0])).toFixed());}this.AW.Ar(AtO);this.
HG.Ar(AtO);this.HG.Z(AtO);if(((F=this.HZ.Hs,F[1].call(F[0]))!==this.Alk)||(AtO===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMb((F=this.HZ.
Hs,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BiX((F=this.HZ.Hs,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kr(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kr(0);this.Alk=(
F=this.HZ.Hs,F[1].call(F[0]));},A88:function(E){var B;if(this.AaV===E)return;if(
!!this.AaV){A.z$([this,this.AoU],[B=this.AaV,B.Ws,B.JR],0);A.z$([this,this.AoU],[
B=this.AaV,B.Anm,B.Nd],0);A.z$([this,this.AoU],[B=this.AaV,B.Ars,B.PR],0);this.HZ.
Ui(null);}this.AaV=E;if(!!E){A.zX([this,this.AoU],[B=this.AaV,B.Ws,B.JR],0);A.zX([
this,this.AoU],[B=this.AaV,B.Anm,B.Nd],0);A.zX([this,this.AoU],[B=this.AaV,B.Ars
,B.PR],0);this.HZ.Ui([B=this.AaV,B.Ws,B.JR]);}if(!!E)A.pe([this,this.AoU],this);
},Ud:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0
);C.Aq5._Init.call(this.HG={I:this},0);C.Aq5._Init.call(this.Wm={I:this},0);C.AvH.
_Init.call(this.AW={I:this},0);C.AMd._Init.call(this.HZ={I:this},0);C.AuS._Init.
call(this.Kk={I:this},0);this.__proto__=C.AGv;var B;this.H(UT);this.V.Ar(false);
this.V.R(As2);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fa.Filter=7;this.HG.H(Bqo);
this.HG.Ar(false);this.Wm.H(Bqp);this.AW.H(Bqq);this.AW.Ar(false);this.J(this.HG
,0);this.J(this.Wm,0);this.J(this.AW,0);this.FI=A._NewObject(C.Aeo,0);this.Fl.BL=[
this,this.Om];this.Fa.BL=[this,this.MU];this.HG.CK(this.Kk);this.HG.At([B=this.Kk
,B.B_,B.B$]);this.Wm.CK(this.HZ);this.Wm.At([B=this.HZ,B.B_,B.B$]);this.AW.At([this
,this.Ud,this.Bx]);this.HZ.Bk9([B=A._GetAutoObject(A.Device.Device),B.Ani,B.Aot]
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
"Application::SettingsItemIDGeneration"};C.G3={AzF:null,Fl:null,Fa:null,G0:null,
FZ:null,EM:null,M4:0,AMR:0,ABS:0,Uo:0,A$q:-1,AMQ:false,Init:function(aArg){A.pe([
this,this.A0h],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AMQ);this.EM.H(A.wC(this.Yl(this.ABS).M,this.Yl((this.ABS+this.AMR)-1).M));},Om:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A09=this.Bfz(2);if(A09===
false)D5.NH=true;},MU:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A09=this.Bfz(7);if(A09===false)D5.NH=true;},Bfz:function(Gz){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.BcR(DV,Gz,true);if(!!DV){this.Bb(DV);this.
AzF=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Ado:function(
G){A.ab5("%s",Ak9);},GU:function(s){this.Ado(s);},FM:function(E){if(this.M4===E)
return;this.M4=E;this.FZ.CT(E);this.G0.CT(E);},SM:function(Gz){var B;switch(Gz){
case 2:this.Bb(this.G0);break;case 7:this.Bb(this.FZ);break;default:A.ab5("%s%e"
,Bqr,Gz);}this.AzF=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LN:function(G){},A0h:
function(s){this.LN(s);},AEN:function(E){if(this.AMQ===E)return;this.AMQ=E;this.
Am();},A9c:function(E){if(this.AMR===E)return;this.AMR=E;this.Am();},A9b:function(
E){if(this.ABS===E)return;this.ABS=E;this.Am();},Yl:function(Hz){var B5=null;switch(
Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.G0;break;default:A.ab5("%s",AhY
);}return B5;},Kr:function(E){if(this.Uo===E)return;this.Uo=E;this.Amf();},Amf:function(
){A.ab5("%s",Ak9);},BcR:function(AcW,Gz,LF){var B;if(!!AcW){var Be;if(LF)Be=0x11;
else Be=0x0;switch(Gz){case 2:AcW=(C.DF.isPrototypeOf(B=this.AqF(AcW,Be))?B:null
);break;case 7:AcW=(C.DF.isPrototypeOf(B=this.TK(AcW,Be))?B:null);break;default:
throw new Error(Bqs);}}return AcW;},A_e:function(E){if(this.A$q===E)return;this.
A$q=E;var DV=this.FZ;var A1w;while(!!DV){A1w=!!E;DV.Ar(A1w);DV.Z(A1w);if(DV===this.
AzF)this.Bb(DV);DV=this.BcR(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.
call(this.Fa={I:this},0);C.DF._Init.call(this.G0={I:this},0);C.DF._Init.call(this.
FZ={I:this},0);A.acg.BT._Init.call(this.EM={I:this},0);this.__proto__=C.G3;this.
H(Bqt);this.Fl.Filter=6;this.Fa.Filter=7;this.M4=A.jb.CJ;this.G0.H(E6);this.FZ.H(
A$L);this.EM.H(Bqu);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.G0,0);this.J(this.
FZ,0);this.J(this.EM,0);this.Fl.BL=[this,this.Om];this.Fl.D1=[this,this.Om];this.
Fa.BL=[this,this.MU];this.Fa.D1=[this,this.MU];this.AzF=this.FZ;this.G0.Di=[this
,this.GU];this.FZ.Di=[this,this.GU];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fl._Done();this.Fa._Done();this.G0._Done();this.FZ._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fl._ReInit();this.Fa._ReInit();this.G0._ReInit();this.FZ._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzF)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQQ={Dy:null,CU:null,Cs:null
,FM:function(E){if(this.M4===E)return;C.HJ.FM.call(this,E);this.Cs.CT(E);this.CU.
CT(E);this.Dy.CT(E);},Yl:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.
FZ;break;case 1:B5=this.Cs;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;
case 4:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Cs={I:this},0);this.__proto__=C.AQQ;this.
H(Bqv);this.G0.H(As9);this.Dy.H(A$M);this.CU.H(A$N);this.Cs.H(A$O);this.FZ.H(Bqw
);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Cs,-2);this.Dy.Di=[this,this.
GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HJ;this.Dy._Done();this.CU._Done();this.Cs._Done();C.HJ._Done.call(this
);},_ReInit:function(){C.HJ._ReInit.call(this);this.Dy._ReInit();this.CU._ReInit(
);this.Cs._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVf={Q9:null,AcC:null,AVe:0,CC:function(G){this.AcC.Ar(true);},E4:function(G
){this.AcC.Ar(false);},Bm1:function(E){if(this.AVe===E)return;this.AVe=E;this.Q9.
R((((A.aaR(A.acf.AVd)+AcN)+E.toFixed())+Bqx)+A.aaR(A.acf.La));},BkV:function(){return this.
AVe;},BAx:function(G){A._GetAutoObject(C.A$).Cf(3);A._GetAutoObject(A.Device.Device
).Anp(1);},_Init:function(aArg){C.XV._Init.call(this,aArg);C.CH._Init.call(this.
Q9={I:this},0);A.acl.Gk._Init.call(this.AcC={I:this},0);this.__proto__=C.AVf;this.
AeI.H(Bqy);this.Ux.R(A.jV);this.Q9.H(Bqz);this.Q9.R(A.aaR(A.acf.AVd)+A$P);this.Q9.
L(A.jb.Text);this.AcC.HM(1);this.AcC.Fp(5000);this.AcC.B1=100;this.J(this.Q9,0);
this.Q9.S(A.aaL(A.fl.Af));this.Q9.A2(A.aaL(A.fl.Ak));this.Q9.Ct(A.aaL(A.fl.Bh));
this.AcC.Sx=[this,this.BAx];this.AcC.Q=[this,this.BkV,this.Bm1];},_Done:function(
){this.__proto__=C.XV;this.Q9._Done();this.AcC._Done();C.XV._Done.call(this);},_ReInit:
function(){C.XV._ReInit.call(this);this.Q9._ReInit();this.AcC._ReInit();this.Q9.
R(A.aaR(A.acf.AVd)+A$P);this.Q9.S(A.aaL(A.fl.Af));this.Q9.A2(A.aaL(A.fl.Ak));this.
Q9.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.XV._Mark.call(this,D);if((B=this.
Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARI={K3:null,Li:null,BdC:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K3)this.K3.Ev(this
);C.Wo.Ev.call(this,G);},Agb:function(G){var B;if(!!this.K3)this.K3.Agb(this);C.
Wo.Agb.call(this,G);},CC:function(G){var B;if(!this.BdC){this.BdC=true;A.pe([this
,this.A3h],this);}else if(!this.K3){this.K3=A._NewObject(C.ARK,0);this.K3.A9q([this
,this.AAQ]);this.LN(this);this.K3.LN(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wo.CC.call(this,G);}else C.Wo.CC.call(this,G
);},ApY:function(G){var B;if(!!this.K3)this.K3.ApY(this);},AAQ:function(G){var B;
var F;this.LN(this);this.K3.LN(this);A.pe([this,this.AcO],this);var Bdd=this.LU;
this.AeT(A._GetAutoObject(A.Device.Helper).Abl(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVc(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdd);if(Bdd)A._GetAutoObject(
A.Device.Helper).W.PR(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SE(A._GetAutoObject(A.Device.Helper).AMb((F=this.Dh.HZ.Hs,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JF(this.C$);},A3h:function(
G){A._GetAutoObject(C.A$).Cf(79);},_Init:function(aArg){C.Wo._Init.call(this,aArg
);C.Q8._Init.call(this.Li={I:this},0);this.__proto__=C.ARI;var B;this.Li.H(AhV);
this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ACh));this.J(this.Li,-9);this.JW(this.Gl,-
1);this.Li.Gq([this,this.D_,this.GQ]);this.Li.At([B=A._GetAutoObject(A.Device.Helper
).W,B.ASm,B.Anx]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wo;this.Li.
_Done();C.Wo._Done.call(this);},_ReInit:function(){C.Wo._ReInit.call(this);this.
Li._ReInit();this.Li.T(A.aaR(A.acf.ACh));},_Mark:function(D){var B;C.Wo._Mark.call(
this,D);if((B=this.K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADF={AgK:null,AgL:null,NK:null,NJ:null,ES:null,FY:null,Ep:null,Dy:null,CU:null,Cs:
null,FM:function(E){if(this.M4===E)return;C.Le.FM.call(this,E);this.Cs.CT(E);this.
CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);this.FY.CT(E);this.ES.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgL.CT(E);this.AgK.CT(E);},Yl:function(Hz){var B5=null;switch(Hz){
case-1:case 0:B5=this.FZ;break;case 1:B5=this.Cs;break;case 2:B5=this.CU;break;case
3:B5=this.Dy;break;case 4:B5=this.Ep;break;case 5:B5=this.FY;break;case 6:B5=this.
ES;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgL;break;
case 10:B5=this.AgK;break;case 11:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;
},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(this.AgK={I:this
},0);C.DF._Init.call(this.AgL={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FY={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cs={I:this
},0);this.__proto__=C.ADF;this.H(BqA);this.G0.H(AIw);this.AgK.H(Ayu);this.AgL.H(
AZv);this.NK.H(AZw);this.NJ.H(AZx);this.ES.H(AZy);this.FY.H(AZz);this.Ep.H(AZA);
this.Dy.H(A$Q);this.CU.H(AZB);this.Cs.H(BqB);this.FZ.H(BqC);this.J(this.AgK,-2);
this.J(this.AgL,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ES,-2);this.
J(this.FY,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.
Cs,-2);this.AgK.Di=[this,this.GU];this.AgL.Di=[this,this.GU];this.NK.Di=[this,this.
GU];this.NJ.Di=[this,this.GU];this.ES.Di=[this,this.GU];this.FY.Di=[this,this.GU
];this.Ep.Di=[this,this.GU];this.Dy.Di=[this,this.GU];this.CU.Di=[this,this.GU];
this.Cs.Di=[this,this.GU];},_Done:function(){this.__proto__=C.Le;this.AgK._Done(
);this.AgL._Done();this.NK._Done();this.NJ._Done();this.ES._Done();this.FY._Done(
);this.Ep._Done();this.Dy._Done();this.CU._Done();this.Cs._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.AgK._ReInit();this.AgL._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ES._ReInit();this.FY._ReInit();this.Ep.
_ReInit();this.Dy._ReInit();this.CU._ReInit();this.Cs._ReInit();},_Mark:function(
D){var B;C.Le._Mark.call(this,D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HJ={Q:null,AM:0,Ai:function(Ae){C.G3.Ai.call(this
,Ae);this.Amf();},Ado:function(G){var B;var F;var Iy=A.jV;var B5=this.G0;while(!
!B5){if(B5.Ey>0)Iy=Iy+B5.Ey.toFixed();else Iy=Iy+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TK(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(Iy,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LN:function(G){},Amf:function(){var B;var F;if(!!this.Q){var DV=this.FZ;
var Adx=this.Uo;var A9=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A9>0){DV.LZ(A9%
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
Iy+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TK(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(Iy,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LN:function(G){},Amf:function(){var B;
var F;if(!!this.Q){var DV=this.FZ;var Adx=this.Uo;var A9=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A9>0){DV.LZ((A9%10)|0);A9=Math.trunc(A9/10);}else if(Adx>0)DV.
LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.AqF(DV,0x11))?B:null);Adx=Adx-
1;}}},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G3._Init.call(
this,aArg);this.__proto__=C.Le;},_Mark:function(D){var B;C.G3._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dt:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvH={Ep:null,Dy:null,CU:null,Cs:null,FM:function(E){if(this.M4===E)return;C.
HJ.FM.call(this,E);this.Cs.CT(E);this.CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);},Yl:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.
Cs;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;
case 5:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cs={
I:this},0);this.__proto__=C.AvH;this.H(Ayc);this.G0.H(AHC);this.Ep.H(AHD);this.Dy.
H(AHE);this.CU.H(AHF);this.Cs.H(AHG);this.FZ.H(AHH);this.EM.H(A$R);this.J(this.Ep
,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Cs,-2);this.Ep.Di=[this,this.
GU];this.Dy.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU
];},_Done:function(){this.__proto__=C.HJ;this.Ep._Done();this.Dy._Done();this.CU.
_Done();this.Cs._Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.
call(this);this.Ep._ReInit();this.Dy._ReInit();this.CU._ReInit();this.Cs._ReInit(
);},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Ep)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUm={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bn$(0);this.AttributeSet.Boa(1);this.AttributeSet.Bob(4);},Ai:function(Ae){var B;
C.BU.Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var IA=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hj){FQ=
A.jb.Bm;GW=A.jb.Text;}if(!Hd){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);this.
AttributeSet.Ahj(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahj(A.jb.Bm);}else if(IA){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahj(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.
AmW);this.V.L(A.jb.Bm);this.AttributeSet.Ahj(A.jb.Bm);}else{this.Background.L(FQ
);this.V.L(GW);this.AttributeSet.Ahj(GW);}this.LF=Hd;this.KD=Fu;this.Qq=GE;this.
Apa=IA;},Hk:function(G){var B;var Ge=this.Dz.G4;var Cz=(A.acg.AuF.isPrototypeOf(
B=this.Dz.Ch)?B:null);Cz.A8_(this.AttributeSet);Cz.A5(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByD(this.AC.Gj(Ge)));else Cz.R(W_);Cz.H(A.abK(Cz.M,[this.Dz.V9,(B=this.
Dz.M)[3]-B[1]]));},ByD:function(Bw3){var AAA=Bw3;AAA=A._GetAutoObject(A.Device.Helper
).Nk(AAA,BqD,BqE);AAA=A._GetAutoObject(A.Device.Helper).Nk(AAA,BqF,BqG);return BqH+
AAA;},_Init:function(aArg){C.BU._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUm;this.Dz.H(BqI);this.Dz.Jw(2);
this.Dz.NZ(A.acg.AuF);this.AttributeSet.Ahj(this.V.AQ);this.AttributeSet.BlT(A.aaL(
A.fl.AOr));this.AttributeSet.A9A(A.aaL(A.fl.Ak));this.AttributeSet.Ahm(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BU;this.AttributeSet._Done(
);C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9A(A.aaL(A.fl.Ak));this.AttributeSet.Ahm(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asq._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.AC7);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dt:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gj:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BR(aIndex
);},DZ:function(A9){return A9;},H3:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OR={FI:null,EnumToCodeset:
null,Ju:null,A8:0,Number:0,Ai:function(Ae){C.BU.Ai.call(this,Ae);if(this.A8===1){
if(this.Hj){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BU.Bx.call(this,E);var Bzx=this.
EnumToCodeset.Amx(this.Number);var BdM=this.AC.C7(this.AM);if(Bzx!==BdM){this.AFm(
this.EnumToCodeset.Aef(BdM));A.abo([this,this.ASn,this.AFm],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(
A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=
this.N,F[1].call(F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}break;default:
this.FI.AkK((F=this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hc:function(
G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8)this.FI.Aju((F=this.N,F[1].call(
F[0])));this.A8=EN;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1J();this.Am();},AFm:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqN()>E)E=this.EnumToCodeset.
AqN();if(this.EnumToCodeset.H3()<E)E=this.EnumToCodeset.H3();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var Byt=this.EnumToCodeset.Amx(E);this.Bx(this.
AC.DZ(Byt));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Anq:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U8:function(G){this.Ew(this.A8+1);},A1J:function(){A.ab5(
"%s",BqJ);},ASn:function(){return this.Number;},_Init:function(aArg){C.BU._Init.
call(this,aArg);A.Core.BK._Init.call(this.Ju={I:this},0);this.__proto__=C.OR;this.
Ju.Filter=1;this.FI=A._NewObject(C.Aeo,0);this.Ju.BL=[this,this.U8];},_Done:function(
){this.__proto__=C.BU;this.Ju._Done();C.BU._Done.call(this);},_ReInit:function(){
C.BU._ReInit.call(this);this.Ju._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(
this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeP={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACI);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Re(this.AM));this.
Am();},AaC:function(G){A.pe([this,this.Af9],this);},AaA:function(G){A.pe([this,this.
Af9],this);},AlR:function(G){A.pe([this,this.Af9],this);},Af9:function(G){if((!this.
Ii||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeP;this.Text.AZ(0x3F
);this.Text.H(AsW);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARB={GI:0,C6:null,AW:null,E$:null,
I7:null,CountryToString:null,K_:0,L$:false,Init:function(aArg){A.zX([this,this.MH
],[this,this.Sy,this.Ln],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I7.Z(this.
Afk);this.AW.FM(this.LQ);this.E$.CT(this.LQ);this.I7.CT(this.LQ);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CX(this.CountryToString.BR(this.K_));(F=this.N,
F[1].call(F[0])).Co=null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}}},Ew:function(EN){var Tj=this.
A8;this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>this.RE)this.A8=this.RE;if((
this.A8===1)&&!this.Afk)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GI)this.Ln(0);}break;case 1:this.Bb(this.I7);break;case 2:this.Bb(this.E$);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tj>0))this.AW.SM(2);else this.AW.SM(7);}break;
default:throw new Error(As_+this.A8.toFixed());}C.Ek.Ew.call(this,this.A8);},Api:
function(G){this.I7.Ui(this.Ez);},AaC:function(G){var F;this.AW.A9b((F=this.AF,F[
1].call(F[0])));},AaA:function(G){var F;this.AW.A9c((F=this.A1,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SA(A._GetAutoObject(
A.Device.Helper).Sf(E,0,12));this.Ln(A._GetAutoObject(A.Device.Converter).WV(E));
this.L$=false;if(!!E)this.AW.Kr(12);else this.AW.Kr(0);this.Am();},AlR:function(
G){A.pe([this,this.Af9],this);},FU:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ACW());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjH:function(){return this.
GI;},AjJ:function(){return 999999999999;},Ln:function(E){if(this.K_===E)return;this.
K_=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Sy,this.Ln],0
);},SA:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbU,this.SA],0);},Vj:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af9:function(G){var F;if((!this.Ii||
!this.A1)||!this.AF)return;if(!(F=this.Ii,F[1].call(F[0])))this.AW.AEN(true);else
this.AW.AEN(false);},Sy:function(){return this.K_;},AbU:function(){return this.GI;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C6._Init.call(this.C6={I:this
},0);C.ADF._Init.call(this.AW={I:this},0);C.AsA._Init.call(this.E$={I:this},0);C.
I7._Init.call(this.I7={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARB;var B;this.RE=3;this.AW.H(BqK);this.E$.H(A$S);this.
I7.H(A$T);this.J(this.AW,0);this.J(this.E$,0);this.J(this.I7,0);this.C6.AET([this
,this.Sy,this.Ln]);this.AW.At([this,this.AbU,this.SA]);this.E$.CK(this.C6);this.
E$.At([B=this.C6,B.B_,B.B$]);this.I7.A9t([B=A._GetAutoObject(A.Device.Device),B.
Av6,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done(
);this.AW._Done();this.E$._Done();this.I7._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.E$._ReInit();this.I7._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARA={GI:0,C6:null,AW:null,Yz:null,Ko:null,E$:null,I7:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pv:0,K_:0,L$:false,Init:function(aArg){A.
zX([this,this.MH],[this,this.PO,this.EB],0);A.zX([this,this.MH],[this,this.Sy,this.
Ln],0);A.zX([this,this.MH],[this,this.Ank,this.Ahn],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I7.Z(this.Afk);this.AW.FM(this.LQ);this.Yz.FM(this.LQ);this.Ko.
FM(this.LQ);this.E$.CT(this.LQ);this.I7.CT(this.LQ);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.
N,F[1].call(F[0])).CX(this.CountryToString.BR(this.K_));(F=this.N,F[1].call(F[0]
)).Co=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.
N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CX(((A.aaR(A.acf.AGE)+A.aaR(A.acf.Colon))+AcN)+A.aaR(A.
acf.BgZ));break;case 1:(F=this.N,F[1].call(F[0])).CX(((A.aaR(A.acf.AGE)+A.aaR(A.
acf.Colon))+AcN)+A.aaR(A.acf.Bof));break;case 2:(F=this.N,F[1].call(F[0])).CX(((
A.aaR(A.acf.AGE)+A.aaR(A.acf.Colon))+AcN)+A.aaR(A.acf.BhT));break;default:(F=this.
N,F[1].call(F[0])).CX(((A.aaR(A.acf.AGE)+A.aaR(A.acf.Colon))+AcN)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Co=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0
])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null
);(F=this.N,F[1].call(F[0])).CX((A.aaR(A.acf.EV)+Ax4)+this.GermanStateToString.Lt(
A._GetAutoObject(A.Device.Converter).ACL(this.Pv)));(F=this.N,F[1].call(F[0])).Co=
null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[
1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(
A.jV);(F=this.N,F[1].call(F[0])).Co=null;}}},Ew:function(EN){var Tj=this.A8;if(EN<
0)EN=0;else if(EN>this.RE)EN=this.RE;if((EN===1)&&!this.Afk)EN=2;switch(EN){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pv)this.Ln(0);}break;case
1:this.Bb(this.I7);break;case 2:this.Bb(this.E$);break;case 3:if(!Tj)A.pe([this,
this.BAL],this);else this.Bb(this.Yz);break;case 4:this.Bb(this.Ko);break;case 5:
if(((Tj===4)&&!this.Pv)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tj>
0))this.AW.SM(2);else this.AW.SM(7);}break;default:throw new Error(As_+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,this.A8);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.L$=true;this.SA(A._GetAutoObject(A.Device.Helper).Sf(E,0,8));this.
Ahn(A._GetAutoObject(A.Device.Helper).Sf(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Sf(E,10,2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).WV(E));this.L$=
false;if(!!this.AM){this.Yz.Kr(2);this.Ko.Kr(2);this.AW.Kr(8);}else{this.Yz.Kr(0
);this.Ko.Kr(0);this.AW.Kr(0);}this.Am();},Api:function(G){this.I7.Ui(this.Ez);}
,AaC:function(G){var F;this.AW.A9b((F=this.AF,F[1].call(F[0])));},AaA:function(G
){var F;this.AW.A9c((F=this.A1,F[1].call(F[0])));},AlR:function(G){A.pe([this,this.
Af9],this);},FU:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(
A.Device.Helper).ACW());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RE);},AjH:function(){return this.
GI;},AjJ:function(){return 99999999;},Ln:function(E){if(this.K_===E)return;this.
K_=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Sy,this.Ln],0
);},SA:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbU,this.SA],0);},Vj:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pv,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af9:function(G){var F;if((!this.Ii||!this.A1)||!this.AF)return;if(!(F=this.
Ii,F[1].call(F[0])))this.AW.AEN(true);else this.AW.AEN(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L$===false)A.pe([this,this.
Vj],this);A.abo([this,this.PO,this.EB],0);},Ahn:function(E){if(this.Pv===E)return;
this.Pv=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Ank,this.
Ahn],0);},BAL:function(G){var F;if(!!this.JJ){var Ib=(F=this.JJ,F[1].call(F[0]));
var A0V=0;switch(Ib){case 0:case 1:A0V=0;break;case 2:A0V=1;break;default:A.ab5(
"%s%e",Ak8,Ib);}this.EB(A0V);}if(!this.Pv)this.Ew(4);else this.Ew(5);},Sy:function(
){return this.K_;},AbU:function(){return this.GI;},PO:function(){return this.AnimalType;
},Ank:function(){return this.Pv;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.AQR._Init.call(this.AW={I:this},0);C.AvG.
_Init.call(this.Yz={I:this},0);C.AvG._Init.call(this.Ko={I:this},0);C.AsA._Init.
call(this.E$={I:this},0);C.I7._Init.call(this.I7={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARA;var B;this.RE=5;this.AW.H(
BqL);this.Yz.H(BqM);this.Yz.EU(2);this.Ko.H(BqN);this.Ko.EU(16);this.E$.H(A$S);this.
I7.H(A$T);this.J(this.AW,0);this.J(this.Yz,0);this.J(this.Ko,0);this.J(this.E$,0
);this.J(this.I7,0);this.C6.AET([this,this.Sy,this.Ln]);this.AW.At([this,this.AbU
,this.SA]);this.Yz.At([this,this.PO,this.EB]);this.Ko.At([this,this.Ank,this.Ahn
]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.I7.A9t([B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=
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
Q:null,Ez:null,A1:null,AF:null,Ii:null,N:null,JJ:null,Fl:null,Fa:null,ACI:0,LQ:0
,A8:0,RE:0,Afk:true,Init:function(aArg){A.pe([this,this.LN],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},BlV:function(E){if(this.
ACI===E)return;this.ACI=E;this.Am();},Wv:function(E){if(this.LQ===E)return;this.
LQ=E;this.Am();},DJ:function(G){A.ab5("%s",Ak9);},MH:function(s){this.DJ(s);},Ew:
function(EN){A.pe([this,this.MH],this);A.pe(this.Awf,this);if(!EN)A.pe(this.OE,this
);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aos);},Om:function(G){if(this.A8>1)this.Ew(this.A8-1);},MU:function(
G){if((this.A8>0)&&(this.A8<this.RE))this.Ew(this.A8+1);},Ui:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.AZ_],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.AZ_],this.Ez,0);A.pe([this,this.AZ_],this);},Api:function(G){},AZ_:
function(s){this.Api(s);},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0c],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0c],E,0);if(!
!E)A.pe([this,this.A0c],this);},PP:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0e],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0e],E,0);if(
!!E)A.pe([this,this.A0e],this);},AaC:function(G){},A0e:function(s){this.AaC(s);}
,AaA:function(G){},A0c:function(s){this.AaA(s);},Ug:function(E){if(A.aaZ(this.Ii
,E))return;if(!!this.Ii)A.z$([this,this.A0b],this.Ii,0);this.Ii=E;if(!!E)A.zX([this
,this.A0b],E,0);if(!!E)A.pe([this,this.A0b],this);},AlR:function(G){},A0b:function(
s){this.AlR(s);},FU:function(G){A.ab5("%s",A$U);},BFX:function(s){this.FU(s);},Hc:
function(G){this.Ew(0);},AjH:function(){A.ab5("%s",Aos);return 0;},AjJ:function(
){A.ab5("%s",Aos);return 0;},LN:function(G){},Ano:function(E){if(A.aaZ(this.JJ,E
))return;if(!!this.JJ)A.z$([this,this.AoT],this.JJ,0);this.JJ=E;if(!!E)A.zX([this
,this.AoT],this.JJ,0);A.pe([this,this.AoT],this);},AoT:function(G){},AE5:function(
E){if(A.aa0(this.OE,E))return;this.OE=E;},AFy:function(E){if(this.Afk===E)return;
this.Afk=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.
__proto__=C.Ek;this.H(AsW);this.ACI=A.jb.Text;this.LQ=A.jb.CS;this.Fl.Filter=6;this.
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
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q8={AM:0,Dp:null,FI:
null,OE:null,Ez:null,A1:null,AF:null,Ii:null,Q:null,JJ:null,AEa:-1,Afk:true,ANX:
false,ATJ:false,Asb:true,Init:function(aArg){A.pe([this,this.ABk],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hj){this.Dp.
Wv(A.jb.CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.Wv(A.jb.
CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hj)this.Dp.Wv(
A.jb.CJ);else this.Dp.Wv(A.jb.CS);this.Dp.BlV(this.V.AQ);}},IY:function(G){C.Eg.
IY.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FU(this);else this.Hc(this
);},Gq:function(E){C.Eg.Gq.call(this,E);if(!!this.Dp)this.Dp.N=E;},Ui:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Api],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Api],this.Ez,0);A.pe([this,this.Api],this);},Api:function(
G){if(!!this.Dp)this.Dp.Ui(this.Ez);},OL:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OL(E);},PP:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PP(E);},Ug:function(E){if(A.aaZ(this.Ii,E))return;
this.Ii=E;if(!!this.Dp)this.Dp.Ug(E);},BBg:function(G){var AAi=0;if(!!this.Dp){AAi=
this.Dp.A8;this.Dp.N=null;this.HN(this.Dp);}switch(this.AEa){case 0:this.Dp=A._NewObject(
C.AeP,0);break;case 1:this.Dp=A._NewObject(C.ARB,0);break;case 2:this.Dp=A._NewObject(
C.ARA,0);break;case 3:this.Dp=A._NewObject(C.ATL,0);break;case 4:this.Dp=A._NewObject(
C.ATK,0);break;case 5:this.Dp=A._NewObject(C.ARC,0);break;default:throw new Error(
BqO+this.AEa.toFixed());}this.J(this.Dp,0);this.Dp.Ano(this.JJ);this.Dp.H(BqP);this.
Dp.N=this.N;this.Dp.Ui(this.Ez);this.Dp.Awf=[this,this.Awf];this.Dp.At([this,this.
Ud,this.Bx]);this.Dp.Ug(this.Ii);this.Dp.OL(this.A1);this.Dp.PP(this.AF);this.Dp.
AE5(this.OE);this.Dp.AFy(this.Afk);if(AAi>0)this.Dp.Ew(AAi);this.Bb(this.Dp);this.
Am();},FU:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FI.Aju((F=this.
N,F[1].call(F[0])));else this.FI=A._NewObject(C.Aeo,0);this.Dp.FU(this);}},Hc:function(
G){var B;if(!!this.Dp)this.Dp.Hc(this);},AjH:function(){if(!this.Dp)return 0;return this.
Dp.AjH();},AjJ:function(){if(!this.Dp)return 0;return this.Dp.AjJ();},C2:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ud,this.
Bx],0);}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABk],this);},Bmy:function(
E){if(this.AEa===E)return;this.AEa=E;A.pe([this,this.BBg],this);},ArU:function(E
){if(this.Asb===E)return;this.Asb=E;A.pe([this,this.ABk],this);},ABk:function(G){
var Apt;if(this.Asb){if(this.ANX)Apt=5;else Apt=0;}else if(this.ATJ){if(A._GetAutoObject(
A.Device.Converter).WV(this.AM)===10)Apt=4;else Apt=3;}else if(A._GetAutoObject(
A.Device.Converter).WV(this.AM)===10)Apt=2;else Apt=1;this.Bmy(Apt);},Awf:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FI.AkK((F=this.N,F[1].call(F[
0])));this.Am();},Ano:function(E){if(A.aaZ(this.JJ,E))return;if(!!this.JJ)A.z$([
this,this.AoT],this.JJ,0);this.JJ=E;if(!!E)A.zX([this,this.AoT],this.JJ,0);A.pe([
this,this.AoT],this);},AoT:function(G){if(!!this.Dp)this.Dp.Ano(this.JJ);},A9V:function(
E){if(this.ATJ===E)return;this.ATJ=E;A.pe([this,this.ABk],this);},Blr:function(E
){if(this.ANX===E)return;this.ANX=E;A.pe([this,this.ABk],this);},AE5:function(E){
if(A.aa0(this.OE,E))return;this.OE=E;if(!!this.Dp)this.Dp.AE5(E);},AFy:function(
E){if(this.Afk===E)return;this.Afk=E;if(!!this.Dp)this.Dp.AFy(E);},Ud:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q8;this.H(UT);this.V.R(As2);this.V.L(A.jb.Bm);this.FI=A._NewObject(C.Aeo,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ii
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQR={ES:null,FY:null,Ep:null,Dy:null,CU:null
,Cs:null,FM:function(E){if(this.M4===E)return;C.Le.FM.call(this,E);this.Cs.CT(E);
this.CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);this.FY.CT(E);this.ES.CT(E);},Yl:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.Cs;break;
case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;case 5:B5=
this.FY;break;case 6:B5=this.ES;break;case 7:B5=this.G0;break;default:A.ab5("%s"
,AhY);}return B5;},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(
this.ES={I:this},0);C.DF._Init.call(this.FY={I:this},0);C.DF._Init.call(this.Ep={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Cs={I:this},0);this.__proto__=C.AQR;this.H(BqQ);this.G0.
H(AIw);this.ES.H(Ayu);this.FY.H(AZv);this.Ep.H(AZw);this.Dy.H(AZx);this.CU.H(AZy
);this.Cs.H(AZz);this.FZ.H(AZA);this.EM.H(A$R);this.J(this.ES,-2);this.J(this.FY
,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Cs,-2);
this.ES.Di=[this,this.GU];this.FY.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.
Dy.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:
function(){this.__proto__=C.Le;this.ES._Done();this.FY._Done();this.Ep._Done();this.
Dy._Done();this.CU._Done();this.Cs._Done();C.Le._Done.call(this);},_ReInit:function(
){C.Le._ReInit.call(this);this.ES._ReInit();this.FY._ReInit();this.Ep._ReInit();
this.Dy._ReInit();this.CU._ReInit();this.Cs._ReInit();},_Mark:function(D){var B;
C.Le._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvG={Q:null,G0:null,FZ:null,EM:null,Io:null,In:null,M4:0,Uo:0,AM:0,F_:99,Init:
function(aArg){A.pe([this,this.LN],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yl(0).M,this.Yl(-1).M));var IA=((Ae&
0x40)===0x40);if(IA){this.BfA(A.jb.AV);this.BfB(A.jb.Bm);}else{this.BfA(this.M4);
this.BfB(A.jb.Text);}this.Amf();},FM:function(E){if(this.M4===E)return;this.M4=E;
this.Am();},LN:function(G){},Yl:function(Hz){var B5=null;switch(Hz){case-1:case 0:
B5=this.FZ;break;case 1:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},Kr:
function(E){if(this.Uo===E)return;this.Uo=E;this.Amf();},Amf:function(){var B;var
F;if(!!this.Q){var DV=this.FZ;var Adx=this.Uo;var A9=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A9>0){DV.LZ(A9%10);A9=(A9/10)|0;}else if(Adx>0)DV.LZ(0);else DV.LZ(-
1);DV=(C.Ey.isPrototypeOf(B=this.AqF(DV,0x11))?B:null);Adx=Adx-1;}}},Aga:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af$:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F_)E=this.F_;if(this.AM===E)return;
this.AM=E;this.Am();},EU:function(E){if(this.F_===E)return;this.F_=E;this.Am();}
,BfA:function(aColor){this.FZ.CT(aColor);this.G0.CT(aColor);},BfB:function(aColor
){this.FZ.Zn(aColor);this.G0.Zn(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.G0={I:this},0);C.Ey._Init.call(this.FZ={I:this},
0);A.acg.BT._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Io={I:this}
,0);A.Core.BK._Init.call(this.In={I:this},0);this.__proto__=C.AvG;this.H(BqR);this.
M4=A.jb.CJ;this.G0.H(AIw);this.FZ.H(Ayu);this.EM.H(Ayu);this.EM.Ng(2);this.EM.L(
A.jb.E1);this.Io.Filter=4;this.In.Filter=5;this.J(this.G0,0);this.J(this.FZ,0);this.
J(this.EM,0);this.Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];this.In.BL=[this
,this.Af$];this.In.D1=[this,this.Af$];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G0._Done();this.FZ._Done();this.EM._Done();this.Io._Done();this.In.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G0._ReInit();this.FZ._ReInit();this.EM._ReInit();this.Io._ReInit();this.In.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgD:
null,Background:null,Text:null,Ey:-1,MZ:0,AmH:0,Aqk:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Rl);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.AmH);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.Am();},CT:function(E){
if(this.MZ===E)return;this.MZ=E;this.Am();},AeU:function(E){if(this.Aqk===E)return;
this.Aqk=E;this.AgD.Ar(E);if(E===false)this.Text.Z(true);},Zn:function(E){if(this.
AmH===E)return;this.AmH=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TD._Init.call(this.AgD={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(As9);this.MZ=A.jb.CJ;this.AgD.Fp(750);this.AgD.Uj(750);this.AgD.Aku(750);
this.AmH=A.jb.Text;this.Background.AZ(0x3);this.Background.H(As9);this.Text.AZ(0x3
);this.Text.H(As9);this.Text.R(Rl);this.J(this.Background,0);this.J(this.Text,0);
this.AgD.Q=[B=this.Text,B.Fo,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgD._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgD._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fz={Y:null,I3:null,AN5:A.jV,ARQ:A.jV,Tb:0,AJD:0,A1z:false,A07:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABf],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.zX([this,this.MH],[B=A._GetAutoObject(A.Device.
Device).An,B.Fn,B.Fr],0);A.pe([this,this.ABf],this);A.pe([this,this.MH],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABf],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);},Bxp:function(L7){A._GetAutoObject(A.Device.Helper
).G6(L7);this.ApZ(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},ApZ:function(L2,AcS){A.ab5("%s",Ak9);},Ve:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Byl],this);else if(!!As&&(As.PopupState===5)){this.A07=true;this.Ev(this
);}},Byl:function(G){if(this.Tb>0){this.A07=false;this.Adj(this);this.A_j(0);}},
Ais:function(G){if((this.AJD+1)<this.Tb)this.A_j(this.AJD+1);else A.aaS([this,this.
BvZ],this);},Bv0:function(s){this.Ais(s);},A_j:function(E){this.AJD=E;if(this.A07===
false){this.Bxp(E);A.aaS([this,this.Bv0],this);var XE=(this.AJD/this.Tb)*100;A._GetAutoObject(
A.Device.Device).A6(49,true,A.abk(XE,0,0),0,[this,this.Ve]);}},Aal:function(G){A.
_GetAutoObject(A.Device.Device).A6(49,false,BqS,0,[this,this.Ve]);this.A1z=true;
A.pe([this,this.ALd],this);},BvZ:function(s){this.Aal(s);},Adj:function(G){this.
I3.Z(true);this.A1z=false;this.ALd(this);},BFR:function(s){this.Adj(s);},AAx:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6i();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ev:function(G){A._GetAutoObject(C.A$).Fy();},A3a:function(G){A._GetAutoObject(
C.A$).Cf(84);},DJ:function(G){this.N.Z(true);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ev];this.N.Cv(A.aaL(A.ach.ADv));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ck=null;this.N.I6.Dj(100);}else{this.N.Ck=[this,this.AAx];this.
N.I6.Dj(255);}this.N.C5(A.aaL(A.ach.Aew));this.N.Co=[this,this.A3a];},MH:function(
s){this.DJ(s);},ABf:function(G){this.Tb=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Tb>0)A._GetAutoObject(A.Device.Device).A6(49,true,UW,0,[this,this.Ve]);
else{this.Adj(this);this.Aal(this);}},Aks:function(E){if(this.AN5===E)return;this.
AN5=E;A.pe([this,this.ALd],this);},ALd:function(G){var B;if(this.A1z===false){this.
I3.R(A.jV);return;}var Ao6;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Add=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABf],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);this.AAx(this);if(!A._GetAutoObject(A.Device.Device
).An.QF()||!Add)Ao6=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACS(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ao6=A.aaR(
A.acf.ANZ);else Ao6=A.aaR(A.acf.ANY);A._GetAutoObject(A.Device.Device).An.Bk(Add
);A.zX([this,this.ABf],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);}else
Ao6=this.ARQ;Ao6=Ao6+(AZC+this.AN5);this.I3.R(Ao6);},Ae5:function(E){if(this.ARQ===
E)return;this.ARQ=E;A.pe([this,this.ALd],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkL._Init.call(this.I3={
I:this},0);this.__proto__=C.Fz;this.Dq(C.Abp);this.Y.H(Fe);this.Y.JQ(1);this.I3.
H(Fe);this.J(this.Y,0);this.J(this.I3,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I3._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I3._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A6S={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6S;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvI={KZ:null,MS:null,AY:0,Yb:function(){this.KZ=null;this.MS=null;this.AY=0;
},Or:function(A9){var Hf;Hf=A._NewObject(C.A6S,0);Hf.A4=A9;if(!this.KZ){this.KZ=
Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}},AmP:
function(){var B;var RH=0;var Of=this.KZ;while(!!Of){RH+=Of.A4;Of=Of.Ah;}return RH;
},AjI:function(){if(!this.AY)return 0;return this.AmP()/this.AY;},AqP:function(){
var B;if(!this.AY)return 0;var A01=this.AjI();var Ada=0;var Of=this.KZ;while(!!Of
){Ada+=Math.pow(Of.A4-A01,2);Of=Of.Ah;}Ada/=this.AY;Ada=Math.sqrt(Ada);return Ada;
},_Init:function(aArg){this.__proto__=C.AvI;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AN6={Gb:null,Aes:null,Yi:null,C4:null,I3:null,
CP:function(){this.A39(this);},Init:function(aArg){A.zV([this,this.A39],A._GetAutoObject(
A.Device.Device).Pm,0);A.pe([this,this.A39],this);},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},A39:function(G){this.Yi.Ce(-1);this.I3.Z(!this.Gb.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gb._Init.call(this.Gb={I:this},0);C.
Aes._Init.call(this.Aes={I:this},0);C.Yi._Init.call(this.Yi={I:this},0);A.acg.C4.
_Init.call(this.C4={I:this},0);C.AkL._Init.call(this.I3={I:this},0);this.__proto__=
C.AN6;this.N.Z(true);this.Dq(C.AO1);this.Gb.H(As5);this.Gb.NZ(C.AmG);this.Aes.H(
IT);this.Yi.H(AsX);this.C4.DC(BqT);this.C4.DM(BqU);this.C4.Ng(3);this.C4.L(A.jb.
Text);this.I3.H(Aob);this.I3.R((A.aaR(A.acf.A7B)+AZC)+A.aaR(A.acf.A5W));this.J(this.
Gb,0);this.J(this.Aes,0);this.J(this.Yi,0);this.J(this.C4,0);this.J(this.I3,0);this.
N.CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));this.Gb.Zm(A._GetAutoObject(A.Device.
Device).Pm);this.Yi.Zm(A._GetAutoObject(A.Device.Device).Pm);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gb._Done();this.Aes._Done();this.Yi._Done();
this.C4._Done();this.I3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gb._ReInit();this.Aes._ReInit();this.Yi._ReInit();this.C4.
_ReInit();this.I3._ReInit();this.I3.R((A.aaR(A.acf.A7B)+AZC)+A.aaR(A.acf.A5W));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gb)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AN9={At3:null,At2:null,At5:null,At4:null,At7:null,At6:null,At9:null,At8:null
,AaE:null,Yq:null,Abg:null,Abf:null,RatedAttribute:0,Init:function(aArg){this.SC(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SC(3);break;case 1:this.SC(2);break;case
4:this.SC(1);break;case 3:this.SC(4);break;default:this.SC(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SC(1);break;case 1:this.SC(4);break;case 4:this.
SC(3);break;case 3:this.SC(2);break;default:this.SC(0);}break;default:D5.NH=true;
}},ApZ:function(L2,AcS){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcS,true);Fw.
CV(HV);var AAP=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAP.Initialize(
3,5,0,true);Fw.CV(AAP);L2.Bk(Fw);},Ais:function(G){var ApX=0;var A3u=A._GetAutoObject(
A.Device.Device).Bt.B9();var B0=A._NewObject(A.Device.Rating,0);while(ApX<A3u){B0.
E3(ApX,A._GetAutoObject(A.Device.Device).Bt);this.BcU(B0,0);var BBC=A._GetAutoObject(
A.Device.Helper).ZM(2);this.BcU(B0,BBC);ApX++;}C.Fz.Ais.call(this,G);},Aal:function(
G){A.pe([this,this.Bcx],this);C.Fz.Aal.call(this,G);},Adj:function(G){this.At3=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At2=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At4=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At5=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At6=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At8=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fz.Adj.
call(this,G);},DJ:function(G){C.Fz.DJ.call(this,G);this.N.ON(true);this.N.OO(true
);},BcU:function(D3,Bbv){if(!D3||(D3.Timestamp<Bbv))return;if(!Bbv){this.At3.Set(
D3.Appearance,this.At3.Get(D3.Appearance)+1);this.At5.Set(D3.Faeces,this.At5.Get(
D3.Faeces)+1);this.At7.Set(D3.Feed,this.At7.Get(D3.Feed)+1);this.At9.Set(D3.Respiratory
,this.At9.Get(D3.Respiratory)+1);}else{this.At2.Set(D3.Appearance,this.At2.Get(D3.
Appearance)+1);this.At4.Set(D3.Faeces,this.At4.Get(D3.Faeces)+1);this.At6.Set(D3.
Feed,this.At6.Get(D3.Feed)+1);this.At8.Set(D3.Respiratory,this.At8.Get(D3.Respiratory
)+1);}},SC:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yq.Kt(this.AaE.Lt(E));A.pe([this,this.Bcx],this);},Bcx:function(G){var AaF=null;
var AaG=null;switch(this.RatedAttribute){case 2:{AaF=this.At2;AaG=this.At3;}break;
case 4:{AaF=this.At4;AaG=this.At5;}break;case 1:{AaF=this.At6;AaG=this.At7;}break;
case 0:{AaF=A._NewObject(A.Device.Int32ArrayWrapper,0);AaG=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaF=this.At8;AaG=this.At9;}break;default:throw new
Error(BqV+this.RatedAttribute.toFixed());}var AGb=A._NewObject(A.acv.AT2,0);AGb.
Or(AaF.Get(3),A.jb.E1);AGb.Or(AaF.Get(2),A.jb.H8);AGb.Or(AaF.Get(1),A.jb.Gh);var
AGc=A._NewObject(A.acv.AT2,0);AGc.Or(AaG.Get(3),A.jb.E1);AGc.Or(AaG.Get(2),A.jb.
H8);AGc.Or(AaG.Get(1),A.jb.Gh);this.Abf.Ab3(AGb);this.Abg.Ab3(AGc);var A3V=AaF.AmP(
)-AaF.Get(5);var Be8=0;var Be6=0;if(A3V>0){Be8=(AaF.Get(2)/A3V)*100;Be6=(AaF.Get(
1)/A3V)*100;}var AK3=AaG.AmP()-AaG.Get(5);this.I3.Z(!AK3);var Be9=0;var Be7=0;if(
AK3>0){Be9=(AaG.Get(2)/AK3)*100;Be7=(AaG.Get(1)/AK3)*100;}this.Abf.A_h(A.abk(Be8
,0,0)+Aaa);this.Abf.A9X(A.abk(Be6,0,0)+Aaa);this.Abg.A_h(A.abk(Be9,0,0)+Aaa);this.
Abg.A9X(A.abk(Be7,0,0)+Aaa);},_Init:function(aArg){C.Fz._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaE={I:this},0);C.NE._Init.call(this.
Yq={I:this},0);C.ACy._Init.call(this.Abg={I:this},0);C.ACy._Init.call(this.Abf={
I:this},0);this.__proto__=C.AN9;this.Dq(C.AO2);this.Aks(A.aaR(A.acf.A5X));this.Ae5(
A.aaR(A.acf.Ang));this.Yq.H(IT);this.Yq.Aj(true);this.Yq.T(A.aaR(A.acf.Axh)+A.aaR(
A.acf.Colon));this.Yq.Bi(false);this.Yq.Bmw(false);this.Abg.H(BqW);this.Abg.T(A.
aaR(A.acf.AFY));this.Abf.H(BqX);this.Abf.T(A.aaR(A.acf.A61));this.I3.H(Aob);this.
J(this.Yq,-1);this.J(this.Abg,-1);this.J(this.Abf,-1);this.At3=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At2=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At5=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At4=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At6=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At8=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fz;this.AaE._Done();this.Yq._Done();this.Abg._Done();this.Abf.
_Done();C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.
AaE._ReInit();this.Yq._ReInit();this.Abg._ReInit();this.Abf._ReInit();this.Aks(A.
aaR(A.acf.A5X));this.Ae5(A.aaR(A.acf.Ang));this.Yq.T(A.aaR(A.acf.Axh)+A.aaR(A.acf.
Colon));this.Abg.T(A.aaR(A.acf.AFY));this.Abf.T(A.aaR(A.acf.A61));},_Mark:function(
D){var B;C.Fz._Mark.call(this,D);if((B=this.At3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.At7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At6)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
At8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AN_={Aer:null,UI:null,UJ:null,Aeq:null,UF:null,UG:null,AJF:0,AJE:0,AJj:0,AJi:
0,Adc:false,CP:function(){this.Aal(this);},ApZ:function(L2,AcS){if(!L2)return;var
Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcS,true);Fw.CV(HV);var AA8=A._NewObject(A.Device.Int32FilterCriterion
,0);AA8.Initialize(7,2,0,true);Fw.CV(AA8);L2.Bk(Fw);},Ais:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJF++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJE++;var ApX=0;var A3u=A._GetAutoObject(
A.Device.Device).Bt.B9();var At1;var ABq=0;while(ApX<A3u){this.Adc=true;At1=A._GetAutoObject(
A.Device.Device).Bt.I4(ApX,9);if(At1===1)ABq=1;else if((At1===2)&&(ABq!==1))ABq=
2;ApX++;}if(ABq===1)this.AJi++;else if(ABq===2)this.AJj++;C.Fz.Ais.call(this,G);
},Aal:function(G){var Be4=0;var Be5=0;if(this.Tb>0){Be4=(this.AJF/this.Tb)*100;Be5=(
this.AJE/this.Tb)*100;}this.UI.Kt(((((((A.abk(Be4,0,0)+AIx)+this.AJF.toFixed())+
CQ)+A.aaR(A.acf.AEg))+CQ)+this.Tb.toFixed())+Oa);this.UJ.Kt(((((((A.abk(Be5,0,0)+
AIx)+this.AJE.toFixed())+CQ)+A.aaR(A.acf.AEg))+CQ)+this.Tb.toFixed())+Oa);var Be2=
0;var Be3=0;if(this.Tb>0){Be2=(this.AJj/this.Tb)*100;Be3=(this.AJi/this.Tb)*100;
}this.UF.Kt(((((((A.abk(Be2,0,0)+AIx)+this.AJj.toFixed())+CQ)+A.aaR(A.acf.AEg))+
CQ)+this.Tb.toFixed())+Oa);this.UG.Kt(((((((A.abk(Be3,0,0)+AIx)+this.AJi.toFixed(
))+CQ)+A.aaR(A.acf.AEg))+CQ)+this.Tb.toFixed())+Oa);this.I3.Z(!this.Adc);C.Fz.Aal.
call(this,G);},Adj:function(G){this.AJi=0;this.AJj=0;this.AJE=0;this.AJF=0;this.
Adc=false;C.Fz.Adj.call(this,G);},_Init:function(aArg){C.Fz._Init.call(this,aArg
);C.Agt._Init.call(this.Aer={I:this},0);C.Ajl._Init.call(this.UI={I:this},0);C.Ajl.
_Init.call(this.UJ={I:this},0);C.Agt._Init.call(this.Aeq={I:this},0);C.Ajl._Init.
call(this.UF={I:this},0);C.Ajl._Init.call(this.UG={I:this},0);this.__proto__=C.AN_;
this.Dq(C.AO3);this.Aks(A.aaR(A.acf.A5Y));this.Ae5(A.aaR(A.acf.Arl));this.Aer.H(
IT);this.Aer.Aj(true);this.Aer.T(A.aaR(A.acf.A52));this.Aer.Bi(false);this.UI.H(
P_);this.UI.Aj(true);this.UI.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UI.
Bi(true);this.UI.Akx(2);this.UJ.H(Z_);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Avm
)+A.aaR(A.acf.Colon));this.UJ.Bi(true);this.UJ.Akx(1);this.Aeq.H(Ak_);this.Aeq.Aj(
true);this.Aeq.T(A.aaR(A.acf.A53));this.Aeq.Bi(false);this.UF.H(Aok);this.UF.Aj(
true);this.UF.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UF.Bi(true);this.
UF.Akx(2);this.UG.H(AsX);this.UG.Aj(true);this.UG.T(A.aaR(A.acf.Avm)+A.aaR(A.acf.
Colon));this.UG.Bi(true);this.UG.Akx(1);this.J(this.Aer,0);this.J(this.UI,0);this.
J(this.UJ,0);this.J(this.Aeq,0);this.J(this.UF,0);this.J(this.UG,0);this.UI.S(A.
aaL(A.fl.Ak));this.UJ.S(A.aaL(A.fl.Ak));this.UF.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fz;this.Aer._Done();this.UI._Done(
);this.UJ._Done();this.Aeq._Done();this.UF._Done();this.UG._Done();C.Fz._Done.call(
this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Aer._ReInit();this.UI._ReInit(
);this.UJ._ReInit();this.Aeq._ReInit();this.UF._ReInit();this.UG._ReInit();this.
Aks(A.aaR(A.acf.A5Y));this.Ae5(A.aaR(A.acf.Arl));this.Aer.T(A.aaR(A.acf.A52));this.
UI.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UJ.T(A.aaR(A.acf.Avm)+A.aaR(
A.acf.Colon));this.Aeq.T(A.aaR(A.acf.A53));this.UF.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UG.T(A.aaR(A.acf.Avm)+A.aaR(A.acf.Colon));this.UI.S(A.aaL(A.fl.
Ak));this.UJ.S(A.aaL(A.fl.Ak));this.UF.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.Aer)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqE={K7:null
,Aja:null,Ajb:null,Amg:null,Abt:null,WW:null,Abq:null,S0:null,Abr:null,S1:null,Abu:
null,WX:null,Ay:null,Ac9:0,AAj:0,Apo:0,A2c:0,Bdo:0,CP:function(){this.Aal(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I3.Fo())return;var Qv=this.Y.
Br[1]+80;this.Y.Ga([this.Y.Br[0],Qv]);this.Y.Vt(null,null);}break;case 5:{if(this.
I3.Fo())return;var Qv=this.Y.Br[1]-80;this.Y.Ga([this.Y.Br[0],Qv]);this.Y.Vt(null
,null);}break;default:C.Fz.DE.call(this,G);}},ApZ:function(L2,AcS){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcS,true);Fw.CV(HV);var Ac4=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4);L2.Bk(Fw);},Ais:function(G){if(this.Bde(
)){this.K7.Or(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Aq9()){var Qh=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qh>0){var A1M=A._GetAutoObject(A.acj.DU).Alq(Qh,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aja.
Or(A1M);}}var A2w=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A2w>=0){var Bzt=
A._GetAutoObject(A.Device.Device).Bt.ACT(A2w,8);var Bzs=A._GetAutoObject(A.Device.
Device).Bt.Hu(A2w,6);var Qh=A._GetAutoObject(A.Device.Helper).L9(Bzs,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qh>0){var A1M=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-Bzt)/Qh)|0;this.Ajb.Or(A1M);}}if((A._GetAutoObject(
A.Device.Helper).W.Aq9()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RL()<=180)){var ALo=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tk=A._GetAutoObject(A.Device.
Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAH=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALo/Tk);this.Amg.Or(BAH);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ac9++;this.Apo=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZM(7)){this.AAj++;this.A2c=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bdo=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Du());}}C.Fz.Ais.call(
this,G);},Aal:function(G){var A4g=this.Aja.AjI()|0;var A4i=this.Ajb.AjI()|0;if(this.
Ac9>1)A._GetAutoObject(A.Device.Device).A6(56,true,this.Ac9.toFixed(),0,null);if(
this.Ac9===1)A._GetAutoObject(A.Device.Device).A6(53,true,this.Apo.toFixed(),0,null
);if(this.AAj>1)A._GetAutoObject(A.Device.Device).A6(52,true,this.AAj.toFixed(),
0,null);if(this.AAj===1)A._GetAutoObject(A.Device.Device).A6(57,true,(this.A2c.toFixed(
)+As1)+this.Bdo.toFixed(),0,null);if(this.K7.AY>0)this.WW.T(((((((A._GetAutoObject(
A.Device.Converter).AxT(this.K7.AjI()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxT(this.K7.AqP()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).AfZ())+Ayw)+this.K7.AY.
toFixed())+Oa);else this.WW.T(A.aaR(A.acf.Unknown));if(this.Aja.AY>0)this.S0.T(((((((
A._GetAutoObject(A.Device.Converter).S5(A4g,2,true)+Ayv)+A._GetAutoObject(A.Device.
Converter).S5(this.Aja.AqP()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aaq())+Ayw
)+this.Aja.AY.toFixed())+Oa);else this.S0.T(A.aaR(A.acf.Unknown));if(this.Ajb.AY>
0)this.S1.T(((((((A._GetAutoObject(A.Device.Converter).S5(A4i,2,true)+Ayv)+A._GetAutoObject(
A.Device.Converter).S5(this.Ajb.AqP()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aaq())+Ayw)+this.Ajb.AY.toFixed())+Oa);else this.S1.T(A.aaR(A.acf.Unknown));if(this.
Amg.AY>0)this.WX.T(((((((A.abk(this.Amg.AjI(),0,1)+Ayv)+A.abk(this.Amg.AqP(),0,1
))+CQ)+A.aaR(A.acf.Bhn))+Ayw)+this.Amg.AY.toFixed())+Oa);else this.WX.T(A.aaR(A.
acf.Unknown));var A4h=0;var A4j=0;var Adc=false;if(this.K7.AY>0)Adc=true;var Ib=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJY=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJY)?AJY:null))Ib=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJY)?AJY:null
).A4;}if(this.Aja.AY>0){Adc=true;A4h=A._GetAutoObject(A.Device.Converter).A$y(A4g
,Ib);}if(this.Ajb.AY>0){Adc=true;A4j=A._GetAutoObject(A.Device.Converter).A$y(A4i
,Ib);}this.S0.Akx(A4h);this.S1.Akx(A4j);this.I3.Z(!Adc);C.Fz.Aal.call(this,G);},
Adj:function(G){this.K7.Yb();this.Aja.Yb();this.Ajb.Yb();this.Amg.Yb();this.Ac9=
0;this.AAj=0;this.Apo=0;this.A2c=0;C.Fz.Adj.call(this,G);},Fj:function(G){var B;
this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},Bde:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agt._Init.call(this.Abt={I:
this},0);C.IE._Init.call(this.WW={I:this},0);C.Agt._Init.call(this.Abq={I:this},
0);C.Ajl._Init.call(this.S0={I:this},0);C.Agt._Init.call(this.Abr={I:this},0);C.
Ajl._Init.call(this.S1={I:this},0);C.Agt._Init.call(this.Abu={I:this},0);C.IE._Init.
call(this.WX={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqE;
this.Dq(C.Avl);this.Aks(A.aaR(A.acf.A5Z));this.Ae5(A.aaR(A.acf.Akf));this.Abt.H(
AIt);this.Abt.Aj(true);this.Abt.T(A.aaR(A.acf.A4R));this.Abt.Bi(false);this.Abt.
Kr(5);this.WW.H(AZD);this.WW.Aj(true);this.WW.T(A.jV);this.WW.Bi(true);this.Abq.
H(As6);this.Abq.Aj(true);this.Abq.T(A.aaR(A.acf.ALN));this.Abq.Bi(false);this.Abq.
Kr(5);this.S0.H(As7);this.S0.Aj(true);this.S0.T(A.jV);this.S0.Bi(true);this.S0.Kt(
A.jV);this.Abr.H(As8);this.Abr.Aj(true);this.Abr.T(A.aaR(A.acf.Aup));this.Abr.Bi(
false);this.Abr.Kr(5);this.S1.H(BqY);this.S1.Aj(true);this.S1.T(A.jV);this.S1.Bi(
true);this.S1.Kt(A.jV);this.Abu.H(AZE);this.Abu.Aj(true);this.Abu.T(A.aaR(A.acf.
A4Z));this.Abu.Bi(false);this.Abu.Kr(5);this.WX.H(Aor);this.WX.Aj(true);this.WX.
T(A.jV);this.WX.Bi(true);this.Ay.H(Is);this.J(this.Abt,-1);this.J(this.WW,-1);this.
J(this.Abq,-1);this.J(this.S0,-1);this.J(this.Abr,-1);this.J(this.S1,-1);this.J(
this.Abu,-1);this.J(this.WX,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.
K7=A._NewObject(C.AvI,0);this.Aja=A._NewObject(C.AvI,0);this.Ajb=A._NewObject(C.
AvI,0);this.WW.S(A.aaL(A.fl.Af));this.S0.S(A.aaL(A.fl.Ak));this.S1.S(A.aaL(A.fl.
Ak));this.WX.S(A.aaL(A.fl.Ak));this.Amg=A._NewObject(C.A59,0);},_Done:function(){
this.__proto__=C.Fz;this.Abt._Done();this.WW._Done();this.Abq._Done();this.S0._Done(
);this.Abr._Done();this.S1._Done();this.Abu._Done();this.WX._Done();this.Ay._Done(
);C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Abt._ReInit(
);this.WW._ReInit();this.Abq._ReInit();this.S0._ReInit();this.Abr._ReInit();this.
S1._ReInit();this.Abu._ReInit();this.WX._ReInit();this.Ay._ReInit();this.Aks(A.aaR(
A.acf.A5Z));this.Ae5(A.aaR(A.acf.Akf));this.Abt.T(A.aaR(A.acf.A4R));this.Abq.T(A.
aaR(A.acf.ALN));this.Abr.T(A.aaR(A.acf.Aup));this.Abu.T(A.aaR(A.acf.A4Z));this.WW.
S(A.aaL(A.fl.Af));this.S0.S(A.aaL(A.fl.Ak));this.S1.S(A.aaL(A.fl.Ak));this.WX.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((
B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aja)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amg)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abp={_Init:function(aArg){C.AjL._Init.call(this,aArg);this.__proto__=C.Abp;this.
Dd.Aw(A.aaL(A.ach.ADr));},_className:"Application::HeaderEvaluationFilter"};C.Kn={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjL.DX.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdU(A._GetAutoObject(A.Device.
Device).Kh));},_Init:function(aArg){C.AjL._Init.call(this,aArg);this.__proto__=C.
Kn;},_ReInit:function(){C.AjL._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avl={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DU).BcN());},_Init:
function(aArg){C.Abp._Init.call(this,aArg);this.__proto__=C.Avl;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO3={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.Abx));},_Init:function(aArg){C.Abp._Init.call(this,
aArg);this.__proto__=C.AO3;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO2={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.AmU));},_Init:function(aArg){
C.Abp._Init.call(this,aArg);this.__proto__=C.AO2;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO1={Si:null,Dd:null,AP:null,CP:function(){this.Si.R(A.aaR(A.acf.AM5));},De:
function(E){C.BQ.De.call(this,E);this.Si.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Si={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C4._Init.call(this.AP={I:this},0);this.__proto__=
C.AO1;this.Si.H(BqZ);this.Si.R(A.aaR(A.acf.AM5));this.Si.A5(0x11);this.Dd.H(Bq0);
this.AP.DC(Bq1);this.AP.DM(Bq2);this.AP.L(A.jb.Bc);this.J(this.Si,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Si.S(A.aaL(A.fl.Af));this.Si.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AP$));},_Done:function(){this.__proto__=C.BQ;this.Si._Done();this.
Dd._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Si._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Si.R(A.aaR(
A.acf.AM5));this.Si.S(A.aaL(A.fl.Af));this.Si.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aes={TQ:null,AjV:
null,AjS:null,AjT:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TQ={I:this},0);A.acg.Ap._Init.call(this.AjV={I:this},0);A.acg.Ap._Init.
call(this.AjS={I:this},0);A.acg.Ap._Init.call(this.AjT={I:this},0);this.__proto__=
C.Aes;this.TQ.H(Bq3);this.TQ.R(A.aaR(A.acf.Year));this.TQ.A5(0x11);this.TQ.L(A.jb.
Text);this.AjV.H(A$V);this.AjV.L(A.jb.Text);this.AjS.H(Bq4);this.AjS.L(A.jb.Text
);this.AjT.H(Bq5);this.AjT.L(A.jb.Text);this.J(this.TQ,0);this.J(this.AjV,0);this.
J(this.AjS,0);this.J(this.AjT,0);this.TQ.S(A.aaL(A.fl.Km));this.TQ.A2(A.aaL(A.fl.
Ik));this.AjV.Aw(A.aaL(A.ach.AQk));this.AjS.Aw(A.aaL(A.ach.AQj));this.AjT.Aw(A.aaL(
A.ach.AQr));},_Done:function(){this.__proto__=C.EA;this.TQ._Done();this.AjV._Done(
);this.AjS._Done();this.AjT._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TQ._ReInit();this.AjV._ReInit();this.AjS._ReInit();this.
AjT._ReInit();this.TQ.R(A.aaR(A.acf.Year));this.TQ.S(A.aaL(A.fl.Km));this.TQ.A2(
A.aaL(A.fl.Ik));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TQ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmG={Ajr:null,AP:null
,A_:null,Ea:null,UC:null,SS:null,Gs:null,XE:0,AtA:0,Alu:0,ABr:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SS.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SS.M[2]-1,0,this.SS.M[
2]+1,aSize[1]]);this.UC.H([this.SS.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UC.M[2]-1,0,this.UC.M[2]+1,aSize[1]]);this.Gs.H([this.UC.M[2],0,aSize[
0],aSize[1]]);this.Ajr.H(this.Gs.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABr.toFixed());this.SS.L(this.V.AQ);this.SS.R(this.Alu.toFixed());this.UC.
L(this.V.AQ);this.UC.R(this.AtA.toFixed());var B0=this.BAG(this.XE);this.Gs.L(A.
_GetAutoObject(A.acj.Assessment).Xu(B0));this.Ajr.L(A._GetAutoObject(A.acj.Assessment
).Qm(B0));this.Gs.R(A.abk(this.XE,0,0)+Aaa);},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.Alu=this.AX.CF(Ad,1);this.AtA=
this.AX.CF(Ad,2);this.ABr=this.AX.CF(Ad,0);if(this.Alu>0)this.XE=(this.AtA/this.
Alu)*100;else this.XE=0;this.Am();}},BAG:function(XE){if(XE>=8)return 1;else if(
XE>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ajr={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UC={I:this},0);A.acg.Text._Init.call(this.SS={I:this},0
);A.acg.Text._Init.call(this.Gs={I:this},0);this.__proto__=C.AmG;this.Ajr.H(Aoh);
this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.H(Aoh);this.Ea.L(A.jb.Bc);this.UC.
L(A.jb.Text);this.SS.H(Aoh);this.SS.L(A.jb.Text);this.Gs.L(A.jb.Text);this.J(this.
Ajr,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UC,0);this.
J(this.SS,0);this.J(this.Gs,0);this.UC.S(A.aaL(A.fl.Af));this.SS.S(A.aaL(A.fl.Af
));this.Gs.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajr._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UC._Done(
);this.SS._Done();this.Gs._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajr._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UC._ReInit();this.SS._ReInit();this.Gs._ReInit();this.UC.S(A.aaL(
A.fl.Af));this.SS.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajl={
BS:null,AxO:A.jV,Rating:0,Ai:function(Ae){C.IE.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qm(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xu(this.Rating));}this.BS.L(this.V.AQ);},S:function(
E){C.IE.S.call(this,E);if((E===A.aaL(A.fl.Km))||(E===A.aaL(A.fl.Af)))this.BS.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ik))||(E===A.aaL(A.fl.Ak)))this.BS.S(A.aaL(
A.fl.Ak));else this.BS.S(E);},Kt:function(E){if(this.AxO===E)return;this.AxO=E;this.
BS.R(E);},Akx:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.BS={I:this}
,0);this.__proto__=C.Ajl;this.BS.AZ(0x34);this.BS.H(Aab);this.BS.I9(true);this.BS.
A5(0x11);this.BS.L(A.jb.Text);this.BS.Aj(true);this.J(this.BS,0);this.BS.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IE;this.BS._Done();C.IE._Done.call(
this);},_ReInit:function(){C.IE._ReInit.call(this);this.BS._ReInit();this.BS.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IE._Mark.call(this,D);if((B=this.BS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACy={
N2:null,SG:null,V:null,AnI:null,AnH:null,Aca:null,Ab$:null,DK:Lu,A$D:A.jV,A_B:A.
jV,Ab3:function(E){if(this.N2===E)return;this.N2=E;this.SG.Ab3(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_h:function(E){if(this.A$D===E
)return;this.A$D=E;this.Aca.R(E);},A9X:function(E){if(this.A_B===E)return;this.A_B=
E;this.Ab$.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SG._Init.
call(this.SG={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnI={I:this},0);A.acg.AK._Init.call(this.AnH={I:this},0);A.acg.Text._Init.
call(this.Aca={I:this},0);A.acg.Text._Init.call(this.Ab$={I:this},0);this.__proto__=
C.ACy;this.H(Bq6);this.SG.H(Bq7);this.SG.Ar(false);this.SG.BmF(360);this.SG.BmP(
0.5);this.V.AZ(0x1D);this.V.H(W5);this.V.KQ(true);this.V.R(Lu);this.V.L(A.jb.Text
);this.AnI.H(A$W);this.AnI.L(A.jb.H8);this.AnH.H(A$X);this.AnH.L(A.jb.Gh);this.Aca.
AZ(0x1D);this.Aca.H(A$W);this.Aca.L(A.jb.Text);this.Ab$.AZ(0x1D);this.Ab$.H(A$X);
this.Ab$.L(A.jb.CS);this.J(this.SG,0);this.J(this.V,0);this.J(this.AnI,0);this.J(
this.AnH,0);this.J(this.Aca,0);this.J(this.Ab$,0);this.SG.BmQ(A.aaL(A.acv.ATC));
this.V.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SG._Done();this.V._Done();this.AnI.
_Done();this.AnH._Done();this.Aca._Done();this.Ab$._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SG._ReInit();this.V._ReInit(
);this.AnI._ReInit();this.AnH._ReInit();this.Aca._ReInit();this.Ab$._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkL={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkL;this.H(UU);this.Background.AZ(0x3F);this.Background.
H(UU);this.Background.L(A.jb.Bjg);this.Text.AZ(0x3F);this.Text.H(UU);this.Text.A5(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Q$={AkW:null,NR:null,C8:null,Acy:null,JL:null,TemperatureUnit:null,ME:null,PT:
null,Se:null,Ur:null,Lp:null,Jd:null,ZX:null,ZW:null,Sg:null,HF:null,AjB:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlC());
this.Ur.R(A._GetAutoObject(A.acj.Temperature).AlC());this.Sg.Z(!A._GetAutoObject(
A.Device.Device).AmI);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnZ();this.AxL(
);this.AcB();this.AxM();},IY:function(G){this.WI(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKs],[B=A._GetAutoObject(A.Device.Device),B.AEs
,B.AIJ],0);A.zX([this,this.AAy],[B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIL
],0);A.zX([this,this.AAy],[B=A._GetAutoObject(A.Device.Device),B.ASp,B.AZU],0);A.
zX([this,this.A2S],[B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$],0);A.zX([this
,this.A2K],[B=A._GetAutoObject(A.Device.Device),B.AEp,B.AIG],0);A._GetAutoObject(
A.Device.Device).AhJ();if(A._GetAutoObject(A.Device.Device).AmI)A._GetAutoObject(
A.Device.Device).AeX(true);A._GetAutoObject(A.Device.Device).Axx();A.pe([this,this.
A2K],this);A.pe([this,this.AAy],this);A.pe([this,this.A2S],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhJ();A._GetAutoObject(A.Device.Device
).Um(false);A._GetAutoObject(A.Device.Device).Ae7(false);A._GetAutoObject(A.Device.
Device).AeX(false);A.z$([this,this.AKs],[B=A._GetAutoObject(A.Device.Device),B.AEs
,B.AIJ],0);A.z$([this,this.AAy],[B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIL
],0);A.z$([this,this.AAy],[B=A._GetAutoObject(A.Device.Device),B.ASp,B.AZU],0);A.
z$([this,this.A2S],[B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$],0);A.z$([this
,this.A2K],[B=A._GetAutoObject(A.Device.Device),B.AEp,B.AIG],0);},AAy:function(G
){this.Am();},AnZ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C8.L(A.jb.Gh);this.JL.L(this.C8.AQ);this.
ME.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C8.L(A.jb.AV);this.JL.L(A.jb.Text);this.ME.L(this.JL.AQ);this.TemperatureUnit.
L(this.JL.AQ);this.HF.L(A.jb.Gh);}}},AxL:function(){this.AkW.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JL.R(A.aaR(A.acf.ADH));this.C8.Aw(A.aaL(A.ach.Avz));this.C8.Cu(0);
this.NR.Cu(0);}break;case 1:{this.AVg(A._GetAutoObject(A.Device.Device).Ls,false
);this.C8.Aw(A.aaL(A.ach.Avz));this.NR.Cu(0);}break;case 2:{this.Se.R(A._GetAutoObject(
A.Device.Converter).AkV(A._GetAutoObject(A.Device.Device).AF2));this.AVg(A._GetAutoObject(
A.Device.Device).Ls,false);this.C8.Aw(null);this.NR.Cu(1);this.Acy.Z(true);this.
PT.Z(true);this.Se.Z(true);this.Ur.Z(true);}break;case 3:{this.AUk();this.AVg(A.
_GetAutoObject(A.Device.Device).Ls,true);this.Acy.Z(false);this.PT.Z(false);this.
Se.Z(false);this.Ur.Z(false);}break;case 4:{this.JL.R(A.aaR(A.acf.Bjt));this.ME.
R(A.aaR(A.acu.Ake));this.C8.Aw(A.aaL(A.ach.AvB));this.C8.Cu(2);this.NR.Cu(0);}break;
default:A.ab5("%s%e",AHQ,A._GetAutoObject(A.Device.Device).MeasureState);}},AcB:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ls<=3240)||(A._GetAutoObject(A.Device.Device
).Ls>=5460))this.N.C5(null);else this.N.C5(A.aaL(A.ach.Aev));this.N.Cv(null);}break;
default:;}},Asw:function(G){A._GetAutoObject(C.A$).Fy();},WI:function(G){},AZ8:function(
s){this.WI(s);},AkQ:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAt(this);break;default:;}},AZ7:function(s){this.AkQ(s);},AVg:
function(AoH,Bzh){if(Bzh)this.Lp.L(A.jb.Bm);else this.Lp.L(A.jb.Gh);if(AoH<=3240
){this.ME.Z(false);this.TemperatureUnit.Z(false);this.Lp.Z(true);this.Lp.R(A.aaR(
A.acu.AU2));}else if(AoH>=5460){this.ME.Z(false);this.TemperatureUnit.Z(false);this.
Lp.Z(true);this.Lp.R(A.aaR(A.acu.Bpc));}else{this.ME.Z(true);this.TemperatureUnit.
Z(true);this.Lp.Z(false);this.ME.R(A._GetAutoObject(A.Device.Converter).AkV(AoH)
);}},AxM:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ls<=3240)||(A._GetAutoObject(A.Device.
Device).Ls>=5460))this.JL.R(A.aaR(A.acf.ADH));else this.JL.R(A.aaR(A.acf.BpO));break;
default:;}},AxN:function(){},Bpx:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZX.Ar(true);break;case 4:this.ZW.Ar(true);break;default:{
this.ZX.Ar(false);this.ZW.Ar(false);A._GetAutoObject(A.Device.Device).Ae7(false);
}}},AKs:function(G){this.Am();this.AxN();this.Bpx();this.Bpv();},A2S:function(G){
if(A._GetAutoObject(A.Device.Device).AmJ){this.Sg.L(A.jb.H8);this.Sg.Cu(1);}else{
this.Sg.L(A.jb.Bm);this.Sg.Cu(0);}},BAt:function(G){if(!A._GetAutoObject(A.Device.
Device).AmI)A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.Device
).AmJ);},Bpv:function(){if(A._GetAutoObject(A.Device.Device).AmI){this.Sg.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeX(true);else A._GetAutoObject(A.Device.Device).AeX(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sg.Z(true);else this.Sg.Z(false);},AKu:function(
G){this.CC(this);},AUk:function(){A.ab5("%s",A$U);},A2K:function(G){if(A._GetAutoObject(
A.Device.Device).HF){this.JL.H(Bq8);this.ME.H(Bq9);this.TemperatureUnit.H(Bq_);}
else{this.JL.H(Bq$);this.ME.H(Bra);this.TemperatureUnit.H(Brb);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gk._Init.call(this.AkW={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.JL={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.PT={I:this},0);A.acg.Text._Init.call(this.
Se={I:this},0);A.acg.Text._Init.call(this.Ur={I:this},0);C.CH._Init.call(this.Lp={
I:this},0);A.Device.TD._Init.call(this.Jd={I:this},0);A.Device.TD._Init.call(this.
ZX={I:this},0);A.Device.TD._Init.call(this.ZW={I:this},0);A.acg.Ap._Init.call(this.
Sg={I:this},0);C.CH._Init.call(this.HF={I:this},0);A.acl.TD._Init.call(this.AjB={
I:this},0);this.__proto__=C.Q$;var B;this.N.Z(true);this.AkW.Fp(1000);this.AkW.B1=
2;this.NR.H(Brc);this.NR.L(A.jb.CS);this.C8.H(Brd);this.C8.L(A.jb.AV);this.C8.Cu(
0);this.C8.Z(true);this.Acy.H(Bre);this.Acy.L(A.jb.Text);this.Acy.Z(false);this.
JL.KQ(true);this.JL.R(A.aaR(A.acf.ADH));this.JL.L(A.jb.Text);this.TemperatureUnit.
A5(0x9);this.TemperatureUnit.L(A.jb.Text);this.ME.A5(0x14);this.ME.R(A.aaR(A.acu.
Ake));this.ME.L(A.jb.Text);this.PT.H(Brf);this.PT.R(A.aaR(A.acf.PT));this.PT.L(A.
jb.Text);this.PT.Z(false);this.Se.H(Brg);this.Se.A5(0x14);this.Se.R(Brh);this.Se.
L(A.jb.Text);this.Se.Z(false);this.Ur.H(Bri);this.Ur.R(Brj);this.Ur.L(A.jb.Text);
this.Ur.Z(false);this.Lp.H(Brk);this.Lp.R(A.aaR(A.acu.AU2));this.Lp.A5(0x12);this.
Lp.L(A.jb.Gh);this.Jd.B1=false;this.Jd.Cw=true;this.Jd.HM(1);this.Jd.Fp(4000);this.
Jd.Uj(0);this.ZX.B1=false;this.ZX.Cw=true;this.ZX.HM(2);this.ZX.Fp(400);this.ZX.
Uj(200);this.ZW.B1=false;this.ZW.Cw=true;this.ZW.HM(3);this.ZW.Fp(500);this.ZW.Uj(
250);this.Sg.H(Brl);this.HF.H(Brm);this.HF.Z(A._GetAutoObject(A.Device.Device).HF
);this.HF.R(A.aaR(A.acf.HF));this.HF.A5(0x12);this.HF.L(A.jb.Gh);this.AjB.Ar(A._GetAutoObject(
A.Device.Device).HF);this.AjB.Fp(500);this.AjB.Uj(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.Acy,0);this.J(this.JL,0);this.J(this.TemperatureUnit,0);this.
J(this.ME,0);this.J(this.PT,0);this.J(this.Se,0);this.J(this.Ur,0);this.J(this.Lp
,0);this.J(this.Sg,0);this.J(this.HF,0);this.N.CE=[this,this.Asw];this.N.Ck=[this
,this.AZ7];this.N.Co=[this,this.AZ8];this.N.C1(A.aaL(A.ach.Aeu));this.AkW.Q=[B=this.
C8,B.ASg,B.Cu];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.Avz));this.Acy.
Aw(A.aaL(A.ach.AQB));this.JL.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.ME.S(A.aaL(A.fl.Aen));this.PT.S(A.aaL(A.fl.Af));this.Se.S(A.aaL(A.fl.EK
));this.Ur.S(A.aaL(A.fl.EK));this.Lp.S(A.aaL(A.fl.Aen));this.Lp.A2(A.aaL(A.fl.EK
));this.Lp.Ct(A.aaL(A.fl.Af));this.Jd.Q=[B=A._GetAutoObject(A.Device.Device),B.ASx
,B.AZ0];this.ZX.Q=[B=A._GetAutoObject(A.Device.Device),B.AEx,B.AIM];this.ZW.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEx,B.AIM];this.Sg.Aw(A.aaL(A.ach.AqH));this.
HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Km));this.HF.Ct(A.aaL(A.fl.Ik));this.
AjB.Q=[B=this.HF,B.Fo,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkW._Done();this.NR._Done();this.C8._Done();this.Acy._Done();this.JL._Done(
);this.TemperatureUnit._Done();this.ME._Done();this.PT._Done();this.Se._Done();this.
Ur._Done();this.Lp._Done();this.Jd._Done();this.ZX._Done();this.ZW._Done();this.
Sg._Done();this.HF._Done();this.AjB._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkW._ReInit();this.NR._ReInit();this.C8._ReInit();
this.Acy._ReInit();this.JL._ReInit();this.TemperatureUnit._ReInit();this.ME._ReInit(
);this.PT._ReInit();this.Se._ReInit();this.Ur._ReInit();this.Lp._ReInit();this.Jd.
_ReInit();this.ZX._ReInit();this.ZW._ReInit();this.Sg._ReInit();this.HF._ReInit(
);this.AjB._ReInit();this.JL.R(A.aaR(A.acf.ADH));this.ME.R(A.aaR(A.acu.Ake));this.
PT.R(A.aaR(A.acf.PT));this.Lp.R(A.aaR(A.acu.AU2));this.HF.R(A.aaR(A.acf.HF));this.
JL.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.ME.S(A.aaL(A.fl.
Aen));this.PT.S(A.aaL(A.fl.Af));this.Se.S(A.aaL(A.fl.EK));this.Ur.S(A.aaL(A.fl.EK
));this.Lp.S(A.aaL(A.fl.Aen));this.Lp.A2(A.aaL(A.fl.EK));this.Lp.Ct(A.aaL(A.fl.Af
));this.HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Km));this.HF.Ct(A.aaL(A.fl.Ik
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkW)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ur
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUQ={AcB:
function(){C.Q$.AcB.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cv(null);this.N.C5(A.aaL(A.ach.AvC));}break;default:;}},
WI:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ls>3240)&&(A._GetAutoObject(A.Device.Device
).Ls<5460)){A._GetAutoObject(A.Device.Device).AhJ();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKu(this);break;default:;}},AxM:
function(){C.Q$.AxM.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JL.R(A.aaR(A.acf.Bju));break;default:;}},AxN:function(){C.Q$.AxN.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).Wx(16711680);this.Jd.Ar(true);}break;default:this.Jd.Ar(false);
}},AUk:function(){this.C8.Aw(A.aaL(A.ach.AvB));this.C8.Cu(0);this.NR.Cu(0);},_Init:
function(aArg){C.Q$._Init.call(this,aArg);this.__proto__=C.AUQ;this.Dq(C.AOZ);},
_className:"Application::TemperatureMeasurementScreen"};C.AO4={Dd:null,IK:null,NT:
null,AP:null,Ag2:null,A_:null,De:function(E){C.BQ.De.call(this,E);this.Dd.L(E);this.
IK.L(E);this.NT.L(E);this.Ag2.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C4._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag2={I:this},0);A.acg.C4._Init.call(this.A_={I:this},
0);this.__proto__=C.AO4;this.Dd.H(Ayr);this.IK.H(Aoi);this.NT.H(AHr);this.AP.DC(
A$Y);this.AP.DM(A$Z);this.AP.L(A.jb.Bc);this.Ag2.H(Brn);this.Ag2.L(A.jb.CS);this.
A_.DC(Bro);this.A_.DM(Brp);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.IK,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.Ag2,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADr));this.IK.Aw(A.aaL(A.ach.Aew));this.NT.Aw(A.aaL(A.ach.Avu)
);this.Ag2.Aw(A.aaL(A.ach.AP_));},_Done:function(){this.__proto__=C.BQ;this.Dd._Done(
);this.IK._Done();this.NT._Done();this.AP._Done();this.Ag2._Done();this.A_._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Dd._ReInit(
);this.IK._ReInit();this.NT._ReInit();this.AP._ReInit();this.Ag2._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Er:null,DS:null,AGn:
0,ANB:0,Init:function(aArg){A.zV([this,this.ALa],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALa],this);},ALa:function(G){var Ad=this.AGn;if(Ad<0){this.
DS.E5();this.DS.EB(this.ANB);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).An.AmN(Ad,14));this.DS.AEU(A._GetAutoObject(A.Device.Device).An.I4(Ad,13));this.
DS.AeY(A._GetAutoObject(A.Device.Device).An.H2(Ad,8));this.DS.Uk(A._GetAutoObject(
A.Device.Device).An.H2(Ad,11));this.DS.Ae2(A._GetAutoObject(A.Device.Device).An.
H2(Ad,12));this.DS.Ae4(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A90:function(
E){if(this.AGn===E)return;this.AGn=E;A.pe([this,this.ALa],this);},A9s:function(E
){if(this.ANB===E)return;this.ANB=E;A.pe([this,this.ALa],this);},A8E:function(){
return this.AGn;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Er={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Er.H(Brq);this.Er.R(A.aaR(A.acf.GM));this.Er.A5(0x11);this.Er.L(A.jb.Text);this.
DS.H(AZF);this.J(this.Er,0);this.J(this.DS,0);this.Er.S(A.aaL(A.fl.Af));this.Er.
A2(A.aaL(A.fl.Ak));this.Er.Ct(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Er._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.DS._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ak));this.Er.Ct(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KN={AgJ:null,Text:null,Aff:null,De:function(E
){C.BQ.De.call(this,E);this.AgJ.L(E);this.Text.L(E);this.Aff.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgJ={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Aff={I:this},0);this.__proto__=
C.KN;this.AgJ.H(Brr);this.AgJ.L(A.jb.Text);this.Text.H(Brs);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Aff.H(Brt);this.Aff.L(A.jb.Text);this.
J(this.AgJ,0);this.J(this.Text,0);this.J(this.Aff,0);this.AgJ.Aw(A.aaL(A.ach.AO6
));this.Text.S(A.aaL(A.fl.Km));this.Text.A2(A.aaL(A.fl.Ik));},_Done:function(){this.
__proto__=C.BQ;this.AgJ._Done();this.Text._Done();this.Aff._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgJ._ReInit();this.Text.
_ReInit();this.Aff._ReInit();this.Text.S(A.aaL(A.fl.Km));this.Text.A2(A.aaL(A.fl.
Ik));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgJ)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aff
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AOX={
_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOX;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AOZ={_Init:function(
aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOZ;this.JW(this.Aff,-2);this.
Aff.Aw(A.aaL(A.ach.Abx));},_className:"Application::HeaderDeviceTemperature"};C.
Yi={Ai:function(Ae){C.AmG.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpd)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.Alu=0;this.AtA=0;this.XE=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.Alu+=this.AX.CF(O,1);this.AtA+=
this.AX.CF(O,2);}if(this.Alu>0)this.XE=(this.AtA/this.Alu)*100;this.Am();}},_Init:
function(aArg){C.AmG._Init.call(this,aArg);this.__proto__=C.Yi;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.
Ik));},_ReInit:function(){C.AmG._ReInit.call(this);this.V.S(A.aaL(A.fl.Km));this.
V.A2(A.aaL(A.fl.Ik));},_className:"Application::EvaluationLossesSumItem"};C.A58={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A58;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A59={KZ:null,MS:null,AY:0,Yb:function(){this.KZ=null;this.MS=null;this.AY=0;
},Or:function(A9){var Hf;Hf=A._NewObject(C.A58,0);Hf.A4=A9;if(!this.KZ){this.KZ=
Hf;this.MS=Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}},AmP:
function(){var B;var RH=0;var Of=this.KZ;while(!!Of){RH+=Of.A4;Of=Of.Ah;}return RH;
},AjI:function(){if(!this.AY)return 0;return this.AmP()/this.AY;},AqP:function(){
var B;if(!this.AY)return 0;var A01=this.AjI();var Ada=0;var Of=this.KZ;while(!!Of
){Ada+=Math.pow(Of.A4-A01,2);Of=Of.Ah;}Ada/=this.AY;Ada=Math.sqrt(Ada);return Ada;
},_Init:function(aArg){this.__proto__=C.A59;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agt={Background:null,V:null,KR:0,Uo:5,Hj:false
,Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.Hj)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hg.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hj===E)return;this.Hj=E;this.Am();},Kr:function(E){if(this.Uo===
E)return;this.Uo=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agt;this.H(BD);this.Background.AZ(
0x3F);this.Background.H(BD);this.V.AZ(0x3F);this.V.H(AIm);this.V.A5(0x11);this.V.
L(A.jb.Text);this.KR=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hg;this.Background._Done();this.V._Done();C.Hg._Done.call(this
);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANT={Wu:function(G){this.Agr();this.I0(A.aaR(
A.acf.AU1),[this,this.ATs],5);this.I0(A.aaR(A.acf.AUZ),[this,this.ATr],7);this.I0(
A.aaR(A.acf.Calving),[this,this.Bla],11);this.I0(A.aaR(A.acf.AnS),[this,this.AwL
],2);this.I0(A.aaR(A.acf.AdP),[this,this.AEI],1);this.I0(A.aaR(A.acf.Aus),[this,
this.AEC],0);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Am$
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abn:function(){return C.AM0;},Abo:function(){return C.APr;},Q5:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ACO());},HO:function(G){
C.GZ.HO.call(this,G);if(this.Akb()===false){this.N.Cv(A.aaL(A.ach.ADo));this.N.Ck=[
this,this.A5F];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(
){A._GetAutoObject(C.A$).Cf(62);},_Init:function(aArg){C.GZ._Init.call(this,aArg
);this.__proto__=C.ANT;var B;this.Dq(C.AO0);this.Dv(A.aaR(A.acf.ARP));this.AwG([
B=A._GetAutoObject(A.Device.Device),B.A79,B.BaD]);},_ReInit:function(){C.GZ._ReInit.
call(this);this.Dv(A.aaR(A.acf.ARP));},_className:"Application::DryCowListScreen"
};C.ANS={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ANS;this.
Lb.Ar(false);this.Lb.Aj(false);this.Lb.Z(false);this.Jp.Ar(false);this.Jp.Aj(false
);this.Jp.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO0={DX:
function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdU(9));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=C.AO0;}
,_className:"Application::HeaderDryCowListFilter"};C.Abk={Filter:null,LW:null,AGQ:
A.jV,Eq:0,AFW:1,Operator:1,Bl:function(aSize){C.Aci.Bl.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Aci.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.
pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.Tn((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator
));else this.Tn(null);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this
,this.Mb],this);},Tn:function(AI){if(!!AI){var A1D;if(this.AFW!==1)A1D=this.AFW;
else A1D=AI.Operator;this.T((this.AGQ+CQ)+A._GetAutoObject(A.Device.Converter).A54(
A1D));this.Zt(false);}else{this.T(this.AGQ);this.Zt(true);}},OM:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.Mb],this);},AFG:function(E){
if(this.AGQ===E)return;this.AGQ=E;A.pe([this,this.Mb],this);},A9O:function(E){if(
this.AFW===E)return;this.AFW=E;A.pe([this,this.Mb],this);},_Init:function(aArg){
C.Aci._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abk;this.H(AsW);this.AW.H(Bru);this.LW.H(AZG);this.JW(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Aci;this.LW._Done();C.Aci._Done.call(this
);},_ReInit:function(){C.Aci._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Aci._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjD={LW:null,Ai:function(Ae){C.QA.Ai.call(this,Ae);this.LW.L(this.V.AQ);},Tn:
function(AI){if(!!AI){this.H6.Cu(1);this.Zt(true);this.LW.A9F(false);}else{this.
H6.Cu(0);this.Zt(false);this.LW.A9F(true);}},_Init:function(aArg){C.QA._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjD;this.Ja=20;this.
LW.H(AZG);this.J(this.LW,0);},_Done:function(){this.__proto__=C.QA;this.LW._Done(
);C.QA._Done.call(this);},_ReInit:function(){C.QA._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.QA._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABQ={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmO(this.TableId,this.Eq));},Tn:function(
AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H6.Cu(1);else this.H6.Cu(
0);},Kd:function(G){A.pe([this,this.Mb],this);},At:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},_Init:function(aArg){C.QA._Init.call(
this,aArg);this.__proto__=C.ABQ;},_ReInit:function(){C.QA._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.QA._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APr={YN:null,I8:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YN={I:this},0);A.acg.Text._Init.call(this.I8={I:this},0);this.__proto__=
C.APr;this.A9s(1);this.YN.H(Brv);this.YN.KQ(true);this.YN.R(A.aaR(A.acf.ADW));this.
YN.L(A.jb.Text);this.I8.H(S7);this.I8.R(((A.aaR(A.acf.RL)+A$0)+A.aaR(A.acf.A$C))+
Oa);this.I8.L(A.jb.Text);this.J(this.YN,0);this.J(this.I8,0);this.YN.S(A.aaL(A.fl.
Ak));this.I8.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.YN._Done(
);this.I8._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YN._ReInit();this.I8._ReInit();this.YN.R(A.aaR(A.acf.ADW));this.I8.R(((A.
aaR(A.acf.RL)+A$0)+A.aaR(A.acf.A$C))+Oa);this.YN.S(A.aaL(A.fl.Ak));this.I8.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM0={Mi:null,KO:null,AdO:null,AP:null,A_:null
,Xk:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mi.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KO.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KO.M[2]-1,0,this.
KO.M[2]+1,aSize[1]]);this.AdO.H([this.KO.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KO.L(this.V.AQ);this.AdO.L(this.V.AQ);if(!!this.Xk&&(
this.Xk!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Qm(this.Xk));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xu(this.Xk));}else this.Mi.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Mf=this.AX.
CF(Ad,1);var A2a=this.AX.CF(Ad,29);var O8=this.AX.Hu(Ad,4);var LP=this.AX.I4(Ad,
13);var Alx=this.AX.I4(Ad,17);var AlG=this.AX.H2(Ad,11);this.Xk=A._GetAutoObject(
A.Device.Helper).AL$(LP,AlG,Alx);this.T(Mf.toFixed());this.KO.R(A2a.toFixed());this.
AdO.R(A._GetAutoObject(A.acj.KJ).ACK(O8,A._GetAutoObject(A.Device.Helper).Du(),Brw
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
};C.RS={AJH:0,Bdb:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);if(this.Bdb){this.
T(A.aaR(A.acf.ANQ));this.Kt(A.jV);}else{this.T(A.aaR(A.acf.Bjb));if(this.AJH>0)this.
Kt(this.AJH.toFixed());else this.Kt(W_);}},Ce:function(G){C.Fx.Ce.call(this,G);this.
Bdb=A._GetAutoObject(A.Device.Helper).W.IsDry;var Als=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Als>0)this.AJH=A._GetAutoObject(A.Device.Helper).
L9(Als,A._GetAutoObject(A.Device.Helper).Du());else this.AJH=0;this.Am();},_Init:
function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RS;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMe={ALk:A.jV,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.RL));
this.Kt(this.ALk);},Ce:function(G){C.Fx.Ce.call(this,G);var O8=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALk=A._GetAutoObject(A.acj.KJ).ACK(O8,A._GetAutoObject(
A.Device.Helper).Du(),((((Brx+A.aaR(A.acf.Bgt))+Bry)+A.aaR(A.acf.Bgs))+Brz)+A.aaR(
A.acf.ALO));this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=
C.AMe;this.ALk=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fx._ReInit.call(this);
this.ALk=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANK={T$:null,Y6:null,Wk:null,Wl:null,Sv:null,Init:function(aArg){this.Bb(this.
T$);A.pe([this,this.MH],this);},Adq:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.T$={
I:this},0);C.Nb._Init.call(this.Y6={I:this},0);C.Nb._Init.call(this.Wk={I:this},
0);C.AbP._Init.call(this.Wl={I:this},0);C.T8._Init.call(this.Sv={I:this},0);this.
__proto__=C.ANK;var B;this.Dq(C.AOX);this.T$.H(IT);this.T$.Aj(true);this.T$.T(A.
aaR(A.acf.ACk));this.T$.Bi(false);this.T$.Ne(83);this.Y6.H(P_);this.Y6.Aj(true);
this.Y6.T(A.acf.Info);this.Y6.Bi(true);this.Y6.Ne(82);this.Wk.H(Z_);this.Wk.Aj(true
);this.Wk.T(A.aaR(A.acf.AGq));this.Wk.Bi(false);this.Wk.Ne(64);this.Wl.H(Ak_);this.
Wl.Aj(true);this.Wl.T(A.aaR(A.acf.TempMeasurement));this.Wl.Bi(true);this.Wl.Ne(
60);this.Sv.H(Aok);this.Sv.Aj(true);this.Sv.T(A.aaR(A.acf.ACF));this.Sv.Bi(false
);this.J(this.T$,-1);this.J(this.Y6,-1);this.J(this.Wk,-1);this.J(this.Wl,-1);this.
J(this.Sv,-1);this.N.Ck=[this,this.Adq];this.N.Cv(A.aaL(A.ach.ADw));this.T$.AR=[
B=this.T$,B.Nh];this.Y6.AR=[B=this.Y6,B.Nh];this.Wk.AR=[B=this.Wk,B.Nh];this.Wl.
AR=[B=this.Wl,B.Nh];this.Sv.AR=null;this.Sv.AeR([B=this.Sv,B.Atb]);this.Sv.Gq([this
,this.D_,this.GQ]);this.Sv.ASJ([B=A._GetAutoObject(A.Device.Device),B.Aro,B.As$]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.T$._Done();this.Y6.
_Done();this.Wk._Done();this.Wl._Done();this.Sv._Done();C.Ei._Done.call(this);},
_ReInit:function(){C.Ei._ReInit.call(this);this.T$._ReInit();this.Y6._ReInit();this.
Wk._ReInit();this.Wl._ReInit();this.Sv._ReInit();this.T$.T(A.aaR(A.acf.ACk));this.
Wk.T(A.aaR(A.acf.AGq));this.Wl.T(A.aaR(A.acf.TempMeasurement));this.Sv.T(A.aaR(A.
acf.ACF));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANL={T9:null,AbM:null,Wi:null,Init:function(aArg){this.Bb(this.T9);},Byx:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BjP:function(G){if(A._GetAutoObject(
A.Device.Device).Aa0<=20)A._GetAutoObject(A.Device.Device).A6(76,true,BrA,0,null
);else A._GetAutoObject(A.Device.Device).A6(39,true,A.jV,0,[this,this.Byx]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.T9={I:this},0);C.
Cn._Init.call(this.AbM={I:this},0);C.AbP._Init.call(this.Wi={I:this},0);this.__proto__=
C.ANL;var B;this.Dq(C.AOY);this.T9.H(IT);this.T9.Aj(true);this.T9.T(A.aaR(A.acf.
A4_));this.T9.Bi(false);this.T9.Ne(65);this.AbM.H(P_);this.AbM.Aj(true);this.AbM.
T(A.aaR(A.acf.A56));this.AbM.Bi(true);this.Wi.H(Z_);this.Wi.Aj(true);this.Wi.T(A.
aaR(A.acf.RangeTest));this.Wi.Bi(false);this.Wi.Ne(15);this.J(this.T9,-1);this.J(
this.AbM,-1);this.J(this.Wi,-1);this.T9.AR=[B=this.T9,B.Nh];this.AbM.AR=[this,this.
BjP];this.Wi.AR=[B=this.Wi,B.Nh];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.T9._Done();this.AbM._Done();this.Wi._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.T9._ReInit();this.AbM._ReInit();this.Wi.
_ReInit();this.T9.T(A.aaR(A.acf.A4_));this.AbM.T(A.aaR(A.acf.A56));this.Wi.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AOY={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOY;this.
Text.R(A.aaR(A.acf.AGq));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGq));},_className:"Application::HeaderDeviceServiceMenu"};C.Nb={M7:
null,Ai:function(Ae){C.AbP.Ai.call(this,Ae);this.M7.L(this.V.AQ);},_Init:function(
aArg){C.AbP._Init.call(this,aArg);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.Nb;this.M7.AZ(0x38);this.M7.H(BrB);this.J(this.M7,0);this.V.Ct(A.aaL(A.fl.Bh));
this.M7.Aw(A.aaL(A.ach.Ajm));},_Done:function(){this.__proto__=C.AbP;this.M7._Done(
);C.AbP._Done.call(this);},_ReInit:function(){C.AbP._ReInit.call(this);this.M7._ReInit(
);this.V.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbP._Mark.call(this,D);if((
B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANG={Ag8:null,Ahc:null,Ahe:null,Aha:null,Aj3:null,Ag$:null,Ag_:null,Ag9:null
,Aj1:null,Ag7:null,Aj2:null,Ahd:null,Aj4:null,Ahb:null,Aj5:null,Init:function(aArg
){this.Bb(this.Ag8);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PM._Init.
call(this.Ag8={I:this},0);C.PM._Init.call(this.Ahc={I:this},0);C.PM._Init.call(this.
Ahe={I:this},0);C.PM._Init.call(this.Aha={I:this},0);C.PM._Init.call(this.Aj3={I:
this},0);C.PM._Init.call(this.Ag$={I:this},0);C.PM._Init.call(this.Ag_={I:this},
0);C.PM._Init.call(this.Ag9={I:this},0);C.PM._Init.call(this.Aj1={I:this},0);C.PM.
_Init.call(this.Ag7={I:this},0);C.PM._Init.call(this.Aj2={I:this},0);C.PM._Init.
call(this.Ahd={I:this},0);C.PM._Init.call(this.Aj4={I:this},0);C.PM._Init.call(this.
Ahb={I:this},0);C.PM._Init.call(this.Aj5={I:this},0);this.__proto__=C.ANG;this.Dq(
C.AOT);this.Ag8.H(AIt);this.Ag8.Aj(true);this.Ag8.SB(1);this.Ahc.H(AZD);this.Ahc.
Aj(true);this.Ahc.Bi(true);this.Ahc.SB(2);this.Ahe.H(As6);this.Ahe.Aj(true);this.
Ahe.Bi(false);this.Ahe.SB(3);this.Aha.H(As7);this.Aha.Aj(true);this.Aha.Bi(true);
this.Aha.SB(4);this.Aj3.H(Ayh);this.Aj3.Aj(true);this.Aj3.SB(5);this.Ag$.H(BrC);
this.Ag$.Aj(true);this.Ag$.Bi(true);this.Ag$.SB(6);this.Ag_.H(As8);this.Ag_.Aj(true
);this.Ag_.Bi(false);this.Ag_.SB(7);this.Ag9.H(Ayq);this.Ag9.Aj(true);this.Ag9.Bi(
true);this.Ag9.SB(8);this.Aj1.H(AZE);this.Aj1.Aj(true);this.Aj1.SB(9);this.Ag7.H(
Aor);this.Ag7.Aj(true);this.Ag7.Bi(true);this.Ag7.SB(10);this.Aj2.H(BrD);this.Aj2.
Aj(true);this.Aj2.SB(11);this.Ahd.H(BrE);this.Ahd.Aj(true);this.Ahd.Bi(true);this.
Ahd.SB(12);this.Aj4.H(BrF);this.Aj4.Aj(true);this.Aj4.SB(13);this.Ahb.H(BrG);this.
Ahb.Aj(true);this.Ahb.Bi(true);this.Ahb.SB(14);this.Aj5.H(BrH);this.Aj5.Aj(true);
this.Aj5.SB(15);this.J(this.Ag8,-1);this.J(this.Ahc,-1);this.J(this.Ahe,-1);this.
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
"Application::DeviceCheckScreen"};C.AOT={_Init:function(aArg){C.KN._Init.call(this
,aArg);this.__proto__=C.AOT;this.Text.R(A.aaR(A.acf.A5y));},_ReInit:function(){C.
KN._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5y));},_className:"Application::HeaderDeviceCheck"
};C.PM={DeviceComponentToString:null,Ki:null,AuQ:0,BbO:false,CP:function(){this.
V.R(this.DeviceComponentToString.BR(this.AuQ));},Bl:function(aSize){var B;C.Cn.Bl.
call(this,aSize);this.Ki.H(A.abM(this.Ki.M,aSize[0]-((B=this.Ki.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Ki.M[0]));},Ai:function(Ae){C.Cn.Ai.call(this,Ae);this.Ki.
AEM(this.V.AQ);if(this.BbO)this.Ki.Awy(A.jb.E1);else this.Ki.Awy(A.jb.Gh);},SB:function(
E){if(this.AuQ===E)return;this.AuQ=E;this.T(this.DeviceComponentToString.BR(E));
this.DX(this);},DX:function(G){this.BbO=A._GetAutoObject(A.Device.Device).AJy(this.
AuQ);this.Am();},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Ki._Init.call(this.Ki={I:this
},0);this.__proto__=C.PM;this.V.H(BrI);this.V.A5(0x11);this.Ki.H(BrJ);this.J(this.
Ki,0);},_Done:function(){this.__proto__=C.Cn;this.DeviceComponentToString._Done(
);this.Ki._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Ki._ReInit();this.CP();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ki)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sd={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAx],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALe(this);this.DJ(this);},CC:function(G
){A.pe([this,this.MH],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},AAx:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6i();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MH],this);},Ev:function(G){A._GetAutoObject(C.A$).Fy(
);},A3a:function(G){A._GetAutoObject(C.A$).Cf(84);},DJ:function(G){this.N.C1(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ev];this.N.Cv(A.aaL(A.ach.ADv));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Aq8(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ck=null;this.N.I6.Dj(100);}else{this.N.Ck=[this
,this.AAx];this.N.I6.Dj(255);}this.N.C5(A.aaL(A.ach.Aew));this.N.Co=[this,this.A3a
];},MH:function(s){this.DJ(s);},ALe:function(G){A.ab5("%s",BrK);},BFZ:function(s
){this.ALe(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sd;this.N.Ar(false);this.N.Z(true);this.Dq(C.
Abp);this.Ay.H(Is);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(L1
);this.Y.JQ(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.El=[this
,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AN7={X$:null,X_:null,XX:null
,TE:null,DJ:function(G){C.Sd.DJ.call(this,G);if(this.AV===this.TE){this.N.Cv(null
);this.N.Ck=null;this.N.C5(null);this.N.Co=null;}},ALe:function(G){if(this.AV===
this.TE)this.Dq(C.AO4);else this.Dq(C.Abp);},ByQ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AP4);case 1:return A.
aaL(A.ach.AP5);default:A.ab5("%s%s",BrL,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},ByR:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AP6);case 1:return A.aaL(A.ach.AP7);default:
A.ab5("%s%s",AIy,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
X$)A._GetAutoObject(C.A$).Cf(66);else if(Cx===this.X_)A._GetAutoObject(C.A$).Cf(
56);else if(Cx===this.XX)A._GetAutoObject(C.A$).Cf(58);else if(Cx===this.TE)A._GetAutoObject(
C.A$).Cf(59);},_Init:function(aArg){C.Sd._Init.call(this,aArg);C.Fm._Init.call(this.
X$={I:this},0);C.Fm._Init.call(this.X_={I:this},0);C.Fm._Init.call(this.XX={I:this
},0);C.Fm._Init.call(this.TE={I:this},0);this.__proto__=C.AN7;this.X$.H(P6);this.
X$.Aj(true);this.X$.T(A.aaR(A.acf.Afq));this.X_.H(J0);this.X_.Aj(true);this.X_.T(
A.aaR(A.acf.Temperature));this.XX.H(BrM);this.XX.Aj(true);this.XX.T(A.aaR(A.acf.
Rating));this.TE.H(BrN);this.TE.Aj(true);this.TE.T(A.aaR(A.acf.A7m));this.J(this.
X$,0);this.J(this.X_,0);this.J(this.XX,0);this.J(this.TE,0);this.X$.AR=[this,this.
Ig];this.X$.DB(this.ByR());this.X_.AR=[this,this.Ig];this.X_.DB(this.ByQ());this.
XX.AR=[this,this.Ig];this.XX.DB(A.aaL(A.ach.AP2));this.TE.AR=[this,this.Ig];this.
TE.DB(A.aaL(A.ach.AP3));},_Done:function(){this.__proto__=C.Sd;this.X$._Done();this.
X_._Done();this.XX._Done();this.TE._Done();C.Sd._Done.call(this);},_ReInit:function(
){C.Sd._ReInit.call(this);this.X$._ReInit();this.X_._ReInit();this.XX._ReInit();
this.TE._ReInit();this.X$.T(A.aaR(A.acf.Afq));this.X_.T(A.aaR(A.acf.Temperature)
);this.XX.T(A.aaR(A.acf.Rating));this.TE.T(A.aaR(A.acf.A7m));},_Mark:function(D){
var B;C.Sd._Mark.call(this,D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AN8={VG:null,XZ:null,Ya:null,ALe:function(G){this.Dq(C.Avl);},ByU:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQG
);case 1:return A.aaL(A.ach.AQH);default:A.ab5("%s%s",AIy,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A$).Cf(68);else if(Cx===
this.Ya)A._GetAutoObject(C.A$).Cf(57);else if(Cx===this.XZ)A._GetAutoObject(C.A$
).Cf(67);},ByT:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APR);case 1:return A.aaL(A.ach.APS);default:A.ab5("%s%s",AIy
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},ByV:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQI
);case 1:return A.aaL(A.ach.AQJ);default:A.ab5("%s%s",AIy,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sd._Init.call(
this,aArg);C.Fm._Init.call(this.VG={I:this},0);C.Fm._Init.call(this.XZ={I:this},
0);C.Fm._Init.call(this.Ya={I:this},0);this.__proto__=C.AN8;this.VG.H(P6);this.VG.
Aj(true);this.VG.T(A.aaR(A.acf.A$u));this.XZ.H(AZH);this.XZ.Aj(true);this.XZ.T(A.
aaR(A.acf.A40));this.Ya.H(N_);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.A$x));this.
J(this.VG,0);this.J(this.XZ,0);this.J(this.Ya,0);this.VG.AR=[this,this.Ig];this.
VG.DB(this.ByU());this.VG.Ab0(A.aaL(A.ach.NS));this.XZ.AR=[this,this.Ig];this.XZ.
DB(this.ByT());this.Ya.AR=[this,this.Ig];this.Ya.DB(this.ByV());},_Done:function(
){this.__proto__=C.Sd;this.VG._Done();this.XZ._Done();this.Ya._Done();C.Sd._Done.
call(this);},_ReInit:function(){C.Sd._ReInit.call(this);this.VG._ReInit();this.XZ.
_ReInit();this.Ya._ReInit();this.VG.T(A.aaR(A.acf.A$u));this.XZ.T(A.aaR(A.acf.A40
));this.Ya.T(A.aaR(A.acf.A$x));},_Mark:function(D){var B;C.Sd._Mark.call(this,D);
if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AN$={Bde:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZM(0));},_Init:function(aArg){C.AqE._Init.call(this,aArg);this.
__proto__=C.AN$;this.Ae5(A.aaR(A.acf.A7H));},_ReInit:function(){C.AqE._ReInit.call(
this);this.Ae5(A.aaR(A.acf.A7H));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN4={Aie:null,Abs:null,UH:null,AaT:null,Pj:null,Ajj:null,Agv:null,Ajk:null,Agw:
null,Ay:null,AaL:null,Ac9:0,Apo:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I3.Fo())return;var Qv=this.Y.Br[1]+80;this.Y.Ga([this.Y.Br[0],Qv]);this.Y.Vt(null
,null);}break;case 5:{if(this.I3.Fo())return;var Qv=this.Y.Br[1]-80;this.Y.Ga([this.
Y.Br[0],Qv]);this.Y.Vt(null,null);}break;default:C.Fz.DE.call(this,G);}},ApZ:function(
L2,AcS){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcS,true);Fw.CV(HV);var Ac4=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac4.Initialize(8,2,0,true);Fw.CV(Ac4
);L2.Bk(Fw);},Ais:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq9()){this.
Aie.Or(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Ay$=this.ByO(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaL.Set(Ay$,this.AaL.Get(Ay$)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ac9++;this.Apo=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fz.Ais.call(
this,G);},Aal:function(G){if(this.Ac9>1)A._GetAutoObject(A.Device.Device).A6(56,
true,this.Ac9.toFixed(),0,null);if(this.Ac9===1)A._GetAutoObject(A.Device.Device
).A6(53,true,this.Apo.toFixed(),0,null);if(this.Aie.AY>0)this.UH.T(((((((A._GetAutoObject(
A.Device.Converter).AxT(this.Aie.AjI()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxT(this.Aie.AqP()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).AfZ())+Ayw)+this.Aie.AY.
toFixed())+Oa);else this.UH.T(A.aaR(A.acf.Unknown));var RH=this.AaL.AmP();var O;
for(O=0;O<this.AaL.MD;O++){var Bf=this.By9(O);if(!!Bf){var CB=this.AaL.Get(O);Bf.
Blm(CB);if(!RH)Bf.A9U(0);else Bf.A9U(Math.round((CB*100)/RH)|0);Bf.Bm4(this.By8(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adc=false;if(this.Aie.AY>0)
Adc=true;this.I3.Z(!Adc);C.Fz.Aal.call(this,G);},Adj:function(G){this.Aie.Yb();this.
AaL.E5();this.Ac9=0;this.Apo=0;C.Fz.Adj.call(this,G);},By9:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pj;break;case 1:Bf=this.Ajj;break;case 2:Bf=this.
Agv;break;case 3:Bf=this.Ajk;break;case 4:Bf=this.Agw;break;default:throw new Error(
Ayx+aIndex.toFixed());}return Bf;},By8:function(aIndex,AoC){var B;var To=A.jV;switch(
AoC){case 0:{switch(aIndex){case 0:To=BrO;break;case 1:To=BrP;break;case 2:To=BrQ;
break;case 3:To=BrR;break;case 4:To=BrS;break;default:throw new Error(Ayx+aIndex.
toFixed());}To=To+(CQ+A.aaR(A.acf.Az1));}break;case 1:{switch(aIndex){case 0:To=
BrT;break;case 1:To=BrU;break;case 2:To=BrV;break;case 3:To=BrW;break;case 4:To=
BrX;break;default:throw new Error(Ayx+aIndex.toFixed());}To=To+(CQ+A.aaR(A.acf.A65
));}break;default:A.ab5("%s%e",A$1,AoC);}return To;},ByP:function(AIV,AoC){var Ac5=
0;switch(AoC){case 0:switch(AIV){case 0:Ac5=35000;break;case 1:Ac5=40000;break;case
2:Ac5=45000;break;case 3:Ac5=50000;break;case 4:Ac5=2147483647;break;default:throw new
Error(Ayx+AIV.toFixed());}break;case 1:switch(AIV){case 0:Ac5=36287;break;case 1:
Ac5=40823;break;case 2:Ac5=45359;break;case 3:Ac5=49895;break;case 4:Ac5=2147483647;
break;default:throw new Error(Ayx+AIV.toFixed());}break;default:A.ab5("%s%e",A$1
,AoC);}return Ac5;},ByO:function(A9,AoC){var Ay$=0;var O;for(O=0;O<this.AaL.MD;O++
)if(A9<this.ByP(O,AoC)){Ay$=O;break;}return Ay$;},Fj:function(G){var B;this.Ay.Mw((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agt._Init.call(this.Abs={
I:this},0);C.IE._Init.call(this.UH={I:this},0);C.AaT._Init.call(this.AaT={I:this
},0);C.Pj._Init.call(this.Pj={I:this},0);C.Pj._Init.call(this.Ajj={I:this},0);C.
Pj._Init.call(this.Agv={I:this},0);C.Pj._Init.call(this.Ajk={I:this},0);C.Pj._Init.
call(this.Agw={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaL={I:this},0);this.__proto__=C.AN4;this.Dq(C.Avl);this.Aks(A.aaR(
A.acf.A5V));this.Ae5(A.aaR(A.acf.A7A));this.Abs.H(AIt);this.Abs.Aj(true);this.Abs.
T(A.aaR(A.acf.A4P));this.Abs.Bi(false);this.Abs.Kr(5);this.UH.H(AZD);this.UH.Aj(
true);this.UH.T(A.jV);this.UH.Bi(true);this.UH.Kr(5);this.AaT.H(As6);this.AaT.Aj(
true);this.Pj.H(As7);this.Pj.Aj(true);this.Pj.Bi(true);this.Ajj.H(As8);this.Ajj.
Aj(true);this.Agv.H(Ayq);this.Agv.Aj(true);this.Agv.Bi(true);this.Ajk.H(AZE);this.
Ajk.Aj(true);this.Agw.H(Aor);this.Agw.Aj(true);this.Agw.Bi(true);this.Ay.H(Is);this.
AaL.Zu(5);this.J(this.Abs,-1);this.J(this.UH,-1);this.J(this.AaT,-1);this.J(this.
Pj,-1);this.J(this.Ajj,-1);this.J(this.Agv,-1);this.J(this.Ajk,-1);this.J(this.Agw
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.Aie=A._NewObject(C.AvI,0);
this.UH.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fz;this.Abs._Done(
);this.UH._Done();this.AaT._Done();this.Pj._Done();this.Ajj._Done();this.Agv._Done(
);this.Ajk._Done();this.Agw._Done();this.Ay._Done();this.AaL._Done();C.Fz._Done.
call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Abs._ReInit();this.
UH._ReInit();this.AaT._ReInit();this.Pj._ReInit();this.Ajj._ReInit();this.Agv._ReInit(
);this.Ajk._ReInit();this.Agw._ReInit();this.Ay._ReInit();this.AaL._ReInit();this.
Aks(A.aaR(A.acf.A5V));this.Ae5(A.aaR(A.acf.A7A));this.Abs.T(A.aaR(A.acf.A4P));this.
UH.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.
Aie)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaL)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaT={H_:null,Gs:null
,Bl:function(aSize){C.IE.Bl.call(this,aSize);this.H_.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gs.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IE.Ai.call(this,Ae);this.H_.L(this.V.AQ);this.Gs.L(this.V.AQ);},_Init:
function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.H_={I:this}
,0);A.acg.Text._Init.call(this.Gs={I:this},0);this.__proto__=C.AaT;this.T(A.aaR(
A.acf.AG3));this.H_.H(BrY);this.H_.KQ(true);this.H_.R(A.aaR(A.acf.Aqr));this.H_.
L(A.jb.Text);this.Gs.H(A$2);this.Gs.R(Aaa);this.Gs.L(A.jb.Text);this.J(this.H_,0
);this.J(this.Gs,0);this.V.S(A.aaL(A.fl.Ik));this.H_.S(A.aaL(A.fl.Ik));this.Gs.S(
A.aaL(A.fl.Km));},_Done:function(){this.__proto__=C.IE;this.H_._Done();this.Gs._Done(
);C.IE._Done.call(this);},_ReInit:function(){C.IE._ReInit.call(this);this.H_._ReInit(
);this.Gs._ReInit();this.T(A.aaR(A.acf.AG3));this.H_.R(A.aaR(A.acf.Aqr));this.V.
S(A.aaL(A.fl.Ik));this.H_.S(A.aaL(A.fl.Ik));this.Gs.S(A.aaL(A.fl.Km));},_Mark:function(
D){var B;C.IE._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pj={AP:null,A_:null,PY:null,H_:null,Gs:null,A$w:A.jV,Aqr:0,A_p:0,Bl:function(
aSize){C.IE.Bl.call(this,aSize);this.PY.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PY.M[2]-1,0,this.PY.M[2]+1,aSize[1]]);this.H_.H([this.PY.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H_.M[2]-1,0,this.H_.M[2]+1,aSize[
1]]);this.Gs.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IE.Ai.call(
this,Ae);this.PY.L(this.V.AQ);this.H_.L(this.V.AQ);this.Gs.L(this.V.AQ);},Bm4:function(
E){if(this.A$w===E)return;this.A$w=E;this.PY.R(E);},Blm:function(E){if(this.Aqr===
E)return;this.Aqr=E;this.H_.R(E.toFixed());},A9U:function(E){if(this.A_p===E)return;
this.A_p=E;this.Gs.R(E.toFixed()+W$);},_Init:function(aArg){C.IE._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PY={I:this},0);A.acg.Text._Init.call(this.H_={I:
this},0);A.acg.Text._Init.call(this.Gs={I:this},0);this.__proto__=C.Pj;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PY.H(BrZ);this.PY.R(A.aaR(A.acf.AG3));this.PY.L(
A.jb.Text);this.H_.R(UW);this.H_.L(A.jb.Text);this.Gs.R(Br0);this.Gs.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.PY,0);this.J(this.H_,0);this.J(
this.Gs,0);this.PY.S(A.aaL(A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IE;this.AP._Done();this.A_._Done();this.
PY._Done();this.H_._Done();this.Gs._Done();C.IE._Done.call(this);},_ReInit:function(
){C.IE._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.PY._ReInit();
this.H_._ReInit();this.Gs._ReInit();this.PY.R(A.aaR(A.acf.AG3));this.PY.S(A.aaL(
A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IE._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMq={AKH:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mq();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amo._Init.call(this,aArg);this.__proto__=
C.AMq;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARi={RZ:null,
R5:null,RY:null,R2:null,Pl:null,R1:null,ALc:function(G){A.pe([this,this.BB0],this
);A.pe([this,this.BBO],this);A.pe([this,this.BBK],this);A.pe([this,this.A34],this
);A.pe([this,this.BBR],this);A.pe([this,this.BBP],this);},Ig:function(G){var Cx=(
C.QS.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R5)A._GetAutoObject(C.A$
).Cf(20);else if(Cx===this.Pl)A._GetAutoObject(C.A$).Cf(14);else if(Cx===this.RZ
)A._GetAutoObject(C.A$).Cf(12);else if(Cx===this.R2)A._GetAutoObject(C.A$).Cf(43
);else if(Cx===this.RY)A._GetAutoObject(C.A$).Cf(51);else if(Cx===this.R1)A._GetAutoObject(
C.A$).Cf(61);},BBO:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azg=A._NewObject(A.Device.BoolFilterCriterion,0);Azg.Initialize(9,0,true,true);Be.
CV(Azg);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pl.Zs(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BB0:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mq();var ABo=A._NewObject(A.Device.BoolFilterCriterion,0);ABo.Initialize(
12,0,true,true);Be.CV(ABo);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R5.Zs(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBK:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mq();var AyY=A._NewObject(A.Device.BoolFilterCriterion
,0);AyY.Initialize(8,0,true,true);Be.CV(AyY);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.RZ.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A34:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6c(A._GetAutoObject(A.Device.Device
).ABu);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.RY.Zs(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BBR:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6l();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R2.Zs(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BBP:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACO();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R1.Zs(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.T4._Init.call(this,
aArg);C.QS._Init.call(this.RZ={I:this},0);C.QS._Init.call(this.R5={I:this},0);C.
QS._Init.call(this.RY={I:this},0);C.QS._Init.call(this.R2={I:this},0);C.QS._Init.
call(this.Pl={I:this},0);C.QS._Init.call(this.R1={I:this},0);this.__proto__=C.ARi;
this.RZ.H(P6);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.Alarm));this.RZ.AbX(true);this.
R5.H(AZH);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.Ar6));this.R5.AbX(true);this.RY.
H(N_);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.ActionList));this.RY.AbX(true);this.
R2.H(P7);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.AOw));this.R2.AbX(true);this.Pl.
H(S6);this.Pl.Ar(false);this.Pl.Aj(false);this.Pl.Z(false);this.Pl.T(A.aaR(A.acf.
AB9));this.Pl.AbX(true);this.R1.H(UN);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.A5R
));this.R1.AbX(true);this.J(this.RZ,-1);this.J(this.R5,-1);this.J(this.RY,-1);this.
J(this.R2,-1);this.J(this.Pl,-1);this.J(this.R1,-1);this.RZ.AR=[this,this.AcP];this.
RZ.DB(A.aaL(A.ach.ADl));this.RZ.Ab0(A.aaL(A.ach.NS));this.R5.AR=[this,this.AcP];
this.R5.DB(A.aaL(A.ach.AQF));this.R5.Ab0(A.aaL(A.ach.NS));this.RY.AR=[this,this.
AcP];this.RY.DB(A.aaL(A.ach.APC));this.RY.Ab0(A.aaL(A.ach.NS));this.R2.AR=[this,
this.AcP];this.R2.DB(A.aaL(A.ach.AP9));this.R2.Ab0(A.aaL(A.ach.NS));this.Pl.AR=[
this,this.AcP];this.Pl.DB(A.aaL(A.ach.ADl));this.Pl.Ab0(A.aaL(A.ach.NS));this.R1.
AR=[this,this.AcP];this.R1.DB(A.aaL(A.ach.APZ));this.R1.Ab0(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T4;this.RZ._Done();this.R5._Done();this.RY._Done();this.
R2._Done();this.Pl._Done();this.R1._Done();C.T4._Done.call(this);},_ReInit:function(
){C.T4._ReInit.call(this);this.RZ._ReInit();this.R5._ReInit();this.RY._ReInit();
this.R2._ReInit();this.Pl._ReInit();this.R1._ReInit();this.RZ.T(A.aaR(A.acf.Alarm
));this.R5.T(A.aaR(A.acf.Ar6));this.RY.T(A.aaR(A.acf.ActionList));this.R2.T(A.aaR(
A.acf.AOw));this.Pl.T(A.aaR(A.acf.AB9));this.R1.T(A.aaR(A.acf.A5R));},_Mark:function(
D){var B;C.T4._Mark.call(this,D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARh={R6:null,VF:null,R3:null,R0:null,R4:null,ALc:function(G){A.pe([this,this.
BBL],this);A.pe([this,this.BBV],this);A.pe([this,this.BBW],this);A.pe([this,this.
BB1],this);A.pe([this,this.BBX],this);},Ig:function(G){var Cx=(C.QS.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VF)A._GetAutoObject(C.A$).Cf(90);if(Cx===this.
R0)A._GetAutoObject(C.A$).Cf(74);if(Cx===this.R3)A._GetAutoObject(C.A$).Cf(71);if(
Cx===this.R4)A._GetAutoObject(C.A$).Cf(46);if(Cx===this.R6)A._GetAutoObject(C.A$
).Cf(85);},BBW:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACR();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R4.Zs(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BB1:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6w(Math.max(
A._GetAutoObject(A.Device.Device).AvQ,A._GetAutoObject(A.Device.Helper).A6o(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R6.Zs(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBV:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A6r();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R3.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBL:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOx();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R0.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BBX:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avh();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VF.Zs(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.T4._Init.call(this,aArg);C.QS._Init.call(this.R6={I:this
},0);C.QS._Init.call(this.VF={I:this},0);C.QS._Init.call(this.R3={I:this},0);C.QS.
_Init.call(this.R0={I:this},0);C.QS._Init.call(this.R4={I:this},0);this.__proto__=
C.ARh;this.R6.H(Br1);this.R6.Aj(true);this.R6.T(A.aaR(A.acf.A7s));this.R6.AbX(true
);this.VF.H(Br2);this.VF.Aj(true);this.VF.T(A.aaR(A.acf.AF5));this.R3.H(Br3);this.
R3.Aj(true);this.R3.T(A.aaR(A.acf.A7u));this.R3.AbX(true);this.R0.H(Br4);this.R0.
Aj(true);this.R0.T(A.aaR(A.acf.ABO));this.R0.AbX(true);this.R4.H(Br5);this.R4.Aj(
true);this.R4.T(A.aaR(A.acf.ARV));this.R4.AbX(true);this.J(this.R6,-1);this.J(this.
VF,-1);this.J(this.R3,-1);this.J(this.R0,-1);this.J(this.R4,-1);this.R6.AR=[this
,this.AcP];this.R6.DB(A.aaL(A.ach.AQm));this.R6.Ab0(A.aaL(A.ach.NS));this.VF.AR=[
this,this.AcP];this.VF.DB(A.aaL(A.ach.ADD));this.R3.AR=[this,this.AcP];this.R3.DB(
A.aaL(A.ach.AQo));this.R3.Ab0(A.aaL(A.ach.NS));this.R0.AR=[this,this.AcP];this.R0.
DB(A.aaL(A.ach.APU));this.R0.Ab0(A.aaL(A.ach.NS));this.R4.AR=[this,this.AcP];this.
R4.DB(A.aaL(A.ach.AQq));this.R4.Ab0(A.aaL(A.ach.NS));},_Done:function(){this.__proto__=
C.T4;this.R6._Done();this.VF._Done();this.R3._Done();this.R0._Done();this.R4._Done(
);C.T4._Done.call(this);},_ReInit:function(){C.T4._ReInit.call(this);this.R6._ReInit(
);this.VF._ReInit();this.R3._ReInit();this.R0._ReInit();this.R4._ReInit();this.R6.
T(A.aaR(A.acf.A7s));this.VF.T(A.aaR(A.acf.AF5));this.R3.T(A.aaR(A.acf.A7u));this.
R0.T(A.aaR(A.acf.ABO));this.R4.T(A.aaR(A.acf.ARV));},_Mark:function(D){var B;C.T4.
_Mark.call(this,D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ART={Wu:function(G){this.Agr(
);this.ALZ();this.A4r(A.aaR(A.acf.A68),[this,this.BmK],131072);this.A4r(A.aaR(A.
acf.A67),[this,this.BmJ],16384);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4
).NC(A.aaR(A.acf.ARc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abn:function(){return C.Aqn;},Abo:function(){return C.AqU;}
,Q5:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A6r());},HO:function(G){var F;C.RJ.HO.call(this,G);if(this.Akb()===false
){if(!!this.FJ&&((F=this.FJ,F[1].call(F[0]))===16)){this.N.Cv(A.aaL(A.ach.AQy));
this.N.Ck=[this,this.A5P];}else{this.N.Cv(A.aaL(A.ach.AQg));this.N.Ck=[this,this.
A5M];}this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(){A._GetAutoObject(
C.A$).Cf(72);},BmJ:function(G){this.AGs(16384);},BmK:function(G){this.AGs(131072
);},_Init:function(aArg){C.RJ._Init.call(this,aArg);this.__proto__=C.ART;this.Dq(
C.APg);this.Dv(A.aaR(A.acf.A7y));this.AS1(A._GetAutoObject(C.AvX));},_ReInit:function(
){C.RJ._ReInit.call(this);this.Dv(A.aaR(A.acf.A7y));},_className:"Application::NoNaisIdListScreen"
};C.ARS={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.ARS;this.
Mt.Ar(false);this.Mt.Aj(false);this.Mt.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APg={DX:function(G){C.Kn.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(10));},_Init:function(aArg){C.Kn._Init.call(this,aArg);this.__proto__=
C.APg;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkI={Bfb:false,CP:
function(){A.pe([this,this.AIO],this);},DE:function(G){},CC:function(G){C.GZ.CC.
call(this,G);if(this.Bfb&&(A._GetAutoObject(A.Device.Device).SI>0))A.pe([this,this.
AIB],this);},AlU:function(G){this.A5L(this);},Agd:function(){A._GetAutoObject(C.
A$).Cf(73);},AR1:function(G){throw new Error(Aos);},Bak:function(s){this.AR1(s);
},AR2:function(G){throw new Error(Aos);},Bal:function(s){this.AR2(s);},AR7:function(
G){throw new Error(Aos);},AIB:function(s){this.AR7(s);},Ben:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bfb=true;A._GetAutoObject(C.A$).Cf(76);}},Agc:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xb],0);},Xz:function(G){var B;if(
A._GetAutoObject(A.Device.Device).AhP===3){A._GetAutoObject(A.Device.Device).A6(
74,false,A.jV,0,[this,this.Agc]);A.z$([this,this.Xz],[B=A._GetAutoObject(A.Device.
Device),B.Wt,B.Xb],0);A.pe([this,this.AIB],this);}},AJx:function(){throw new Error(
Aos);},A7P:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A5K(this);},
Bng:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BhC(this);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AkI;this.Dv(A.aaR(A.acf.A7F));
},_ReInit:function(){C.GZ._ReInit.call(this);this.Dv(A.aaR(A.acf.A7F));this.CP();
},_className:"Application::RegistrationsListScreen"};C.AT7={_Init:function(aArg){
C.I2._Init.call(this,aArg);this.__proto__=C.AT7;},_className:"Application::RegistrationsListFilterScreen"
};C.Aep={_Init:function(aArg){C.Yn._Init.call(this,aArg);this.__proto__=C.Aep;this.
Text.H(Br6);this.Text.R(A.jV);this.Text.A5(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ABV={Ka:0,AP:null,A_:null,Ea:null,IJ:null,SV:null,Gy:null,Mf:0,K8:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IJ.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A_.H([this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[
1]]);this.SV.H([this.IJ.M[2],0,this.IJ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SV.M[2]-1,0,this.SV.M[2]+1,aSize[1]]);this.Gy.H([this.SV.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IJ.L(this.V.AQ);this.
Gy.L(this.V.AQ);this.SV.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj0(this.
K8)){this.V.S(A.aaL(A.fl.H1));this.T(A$3);this.SV.R(Rl);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mf.toFixed());this.SV.R(A._GetAutoObject(A.Device.Helper).Sf(this.
Ka,0,5).toFixed());}},Ce:function(Ad){if(!this.AX)return;this.Hq=Ad;if(!!this.AX
){this.Mf=this.AX.CF(Ad,1);this.K8=this.AX.AOL(Ad,34);var AtI=this.AX.AOD(Ad,7);
this.Ka=this.AX.KM(Ad,26);var Ay5=this.AX.Hu(Ad,4);var AfM=A._GetAutoObject(A.Device.
Helper).L9(Ay5,A._GetAutoObject(A.Device.Helper).Du());this.IJ.Aw(A._GetAutoObject(
A.Device.Converter).AmM(AtI));if(AfM<100)this.Gy.R((AfM.toFixed()+CQ)+A.aaR(A.acf.
ALO));else this.Gy.R(A._GetAutoObject(A.acj.KJ).ACK(Ay5,A._GetAutoObject(A.Device.
Helper).Du(),AIe));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IJ={I:this},0);
A.acg.Text._Init.call(this.SV={I:this},0);C.CH._Init.call(this.Gy={I:this},0);this.
__proto__=C.ABV;this.AP.H(Aol);this.AP.L(A.jb.Bc);this.A_.H(Aom);this.A_.L(A.jb.
Bc);this.Ea.H(AZI);this.Ea.L(A.jb.Bc);this.IJ.H(A$4);this.IJ.L(A.jb.Text);this.SV.
H(Aym);this.Gy.H(AZJ);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.IJ,0);this.J(this.SV,0);this.J(this.Gy,0);this.SV.S(A.aaL(A.fl.Af));this.
Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Ct(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done(
);this.Ea._Done();this.IJ._Done();this.SV._Done();this.Gy._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A_._ReInit(
);this.Ea._ReInit();this.IJ._ReInit();this.SV._ReInit();this.Gy._ReInit();this.SV.
S(A.aaL(A.fl.Af));this.Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Ct(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADb={AjX:
null,Py:null,I5:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AjX={I:this},0);A.acg.Ap._Init.call(this.Py={I:this},0);A.acg.Ap._Init.
call(this.I5={I:this},0);this.__proto__=C.ADb;this.AjX.H(Br7);this.AjX.L(A.jb.Text
);this.Py.H(Br8);this.Py.L(A.jb.Text);this.I5.H(A$V);this.I5.L(A.jb.Text);this.J(
this.AjX,0);this.J(this.Py,0);this.J(this.I5,0);this.AjX.Aw(A.aaL(A.ach.ADz));this.
Py.Aw(A.aaL(A.ach.Avw));this.I5.Aw(A.aaL(A.ach.Avr));},_Done:function(){this.__proto__=
C.Dc;this.AjX._Done();this.Py._Done();this.I5._Done();C.Dc._Done.call(this);},_ReInit:
function(){C.Dc._ReInit.call(this);this.AjX._ReInit();this.Py._ReInit();this.I5.
_ReInit();},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APi={IQ:null,AgW:null,HP:null,Bc:null,MB:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8B,B.A9Y],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
Ws,B.JR],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.Art,B.SE
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},De:function(E){C.BQ.De.call(this,E);this.IQ.L(E);this.AgW.L(E);this.
HP.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HP.R(A.aaR(A.acf.Ae_));else this.HP.R(((A.aaR(A.acf.GM)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqR()){this.AwS(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+A$H)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JR(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nf(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.AwS(A$I);this.JR(2);
this.OnSetAnimalId(-1);this.Nf(0);}},JR:function(E){if(this.Gender===E)return;this.
Gender=E;this.AgW.Aw(A._GetAutoObject(A.Device.Converter).AmM(E));},AwS:function(
E){if(this.MB===E)return;this.MB=E;this.IQ.R(E);},Nf:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj0(E))this.HP.
Z(false);else this.HP.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IQ={I:this},0);A.acg.Ap._Init.call(this.AgW={I:this},
0);A.acg.Text._Init.call(this.HP={I:this},0);A.acg.C4._Init.call(this.Bc={I:this
},0);this.__proto__=C.APi;this.IQ.H(A$J);this.IQ.Hl(2);this.IQ.KQ(true);this.IQ.
A5(0x12);this.IQ.R(A$K);this.AgW.H(Br9);this.HP.H(Br_);this.HP.A5(0x11);this.HP.
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
};C.RW={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.
OnSetId],0);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]
,0);A.pe([this,this.AfC],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);A.z$([this
,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NH=true;
break;case 4:this.Bfx(4);break;case 5:this.Bfx(5);break;default:;}},Bfx:function(
Gz){var B;switch(Gz){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Ga([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Ga([this.Y.Br[0],CD]);}break;default:throw new Error(
Br$);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I1.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},AfC:function(s){this.GH(s);},MO:function(G){var B;this.Y.Vt(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RW;this.Cq.Filter=147;this.Y.H(UU);this.Y.JQ(1);this.Ay.H(AsO
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XP={AaQ:null,
XL:null,AaR:null,XM:null,AaW:null,XO:null,_Init:function(aArg){C.RW._Init.call(this
,aArg);C.AaQ._Init.call(this.AaQ={I:this},0);C.XL._Init.call(this.XL={I:this},0);
C.AaR._Init.call(this.AaR={I:this},0);C.XM._Init.call(this.XM={I:this},0);C.AaW.
_Init.call(this.AaW={I:this},0);C.XO._Init.call(this.XO={I:this},0);this.__proto__=
C.XP;this.AaQ.H(BD);this.AaQ.Aj(true);this.XL.H(IT);this.XL.Aj(true);this.XL.Bi(
true);this.AaR.H(P_);this.AaR.Aj(true);this.XM.H(Z_);this.XM.Aj(true);this.XM.Bi(
true);this.AaW.H(Ak_);this.AaW.Aj(true);this.XO.H(Aok);this.XO.Aj(true);this.XO.
Bi(true);this.J(this.AaQ,0);this.J(this.XL,0);this.J(this.AaR,0);this.J(this.XM,
0);this.J(this.AaW,0);this.J(this.XO,0);},_Done:function(){this.__proto__=C.RW;this.
AaQ._Done();this.XL._Done();this.AaR._Done();this.XM._Done();this.AaW._Done();this.
XO._Done();C.RW._Done.call(this);},_ReInit:function(){C.RW._ReInit.call(this);this.
AaQ._ReInit();this.XL._ReInit();this.AaR._ReInit();this.XM._ReInit();this.AaW._ReInit(
);this.XO._ReInit();},_Mark:function(D){var B;C.RW._Mark.call(this,D);if((B=this.
AaQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XM={
BreedToString:null,G1:null,M0:null,Ce:function(G){C.ID.Ce.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BR(Bv));this.G1.
R(this.M0.Aef(Bv).toFixed());},De:function(E){C.ID.De.call(this,E);this.G1.L(E);
},_Init:function(aArg){C.ID._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G1={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XM;this.BS.H(Bsa);this.G1.H(Bsb
);this.G1.Hl(5);this.G1.A5(0x14);this.G1.R(Bsc);this.G1.L(A.jb.Text);this.J(this.
G1,0);this.Hv.Aw(A.aaL(A.ach.ADq));this.G1.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.ID;this.BreedToString._Done();this.G1._Done();this.M0._Done();C.
ID._Done.call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.BreedToString.
_ReInit();this.G1._ReInit();this.M0._ReInit();this.G1.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.ID._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaR={
Ce:function(G){C.ID.Ce.call(this,G);var AAb=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAb>0)this.T(A._GetAutoObject(A.Device.Converter).Re(AAb));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.ID._Init.call(this,aArg);this.__proto__=
C.AaR;this.Hv.Aw(A.aaL(A.ach.AP0));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XL={Ys:null,Ce:function(G){C.ID.Ce.call(this,G);var O8=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;if(O8>
0)this.T(A._GetAutoObject(A.acj.KJ).AjG(O8));else this.T(A.aaR(A.acf.Unknown));var
Ay7=A.aaL(A.aci.TI);switch(AfR){case 0:Ay7=A.aaL(A.ach.ADn);break;case 1:{Ay7=A.
aaL(A.ach.Avs);this.Ys.Cu(0);}break;case 2:{Ay7=A.aaL(A.ach.Avs);this.Ys.Cu(1);}
break;case 3:{Ay7=A.aaL(A.ach.Avs);this.Ys.Cu(2);}break;default:A.ab5("%s%e",Bsd
,AfR);}this.Ys.Aw(Ay7);},_Init:function(aArg){C.ID._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Ys={I:this},0);this.__proto__=C.XL;this.BS.H(Bse);this.Ys.H(AHJ);
this.Ys.L(A.jb.Text);this.J(this.Ys,0);this.Hv.Aw(A.aaL(A.ach.Avr));this.Ys.Aw(A.
aaL(A.ach.ADn));},_Done:function(){this.__proto__=C.ID;this.Ys._Done();C.ID._Done.
call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.Ys._ReInit();},_Mark:
function(D){var B;C.ID._Mark.call(this,D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaQ={Ka:0,XN:null,K8:0
,Bl:function(aSize){C.ID.Bl.call(this,aSize);this.XN.H(this.Hv.M);},Ai:function(
Ae){C.ID.Ai.call(this,Ae);this.XN.L(this.BS.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj0(this.K8)){this.T(A.aaR(A.acf.AnimalLoss));this.Hv.Z(false);this.XN.Z(true);
}else if(this.Ka>0){this.T(A._GetAutoObject(A.Device.Converter).Re(this.Ka));this.
Hv.Z(true);this.XN.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hv.Z(true);this.
XN.Z(false);}},Ce:function(G){C.ID.Ce.call(this,G);this.Ka=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.ID._Init.call(this,aArg);A.acg.Text._Init.call(this.XN={
I:this},0);this.__proto__=C.AaQ;this.XN.R(A$3);this.J(this.XN,0);this.Hv.Aw(A.aaL(
A.ach.Avw));this.XN.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=C.ID;this.
XN._Done();C.ID._Done.call(this);},_ReInit:function(){C.ID._ReInit.call(this);this.
XN._ReInit();},_Mark:function(D){var B;C.ID._Mark.call(this,D);if((B=this.XN)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMn={XP:null,Init:function(aArg){var B;A.zX([this,this.AAt],[B=A._GetAutoObject(
A.Device.Device),B.AEn,B.AIF],0);A.pe([this,this.AAt],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Om(this);break;
case 7:this.MU(this);break;default:D5.NH=true;}},CC:function(G){var B;this.XP.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XP.E4(this);C.AB.E4.call(
this,G);},Anh:function(G){A._GetAutoObject(C.A$).Fy();},Adq:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;
if(LB>=A._GetAutoObject(A.Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.
Helper).G6(LB);},Om:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G6(LB);},AAt:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqj)A._GetAutoObject(C.A$).Ahr(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XP._Init.call(this.XP={I:this},0);this.
__proto__=C.AMn;this.Background.H(Cc);this.N.Z(true);this.N.ON(true);this.N.OO(true
);this.Dq(C.APi);this.XP.H(Fe);this.J(this.XP,0);this.N.CE=[this,this.Anh];this.
N.Ck=[this,this.Adq];this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(A.ach.Aex));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XP._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XP._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.ID={Hv:null,BS:null
,T:function(E){C.I1.T.call(this,E);this.BS.R(this.DK);},De:function(E){C.I1.De.call(
this,E);this.Hv.L(E);this.BS.L(E);},_Init:function(aArg){C.I1._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hv={I:this},0);C.CH._Init.call(this.BS={I:this},0);this.
__proto__=C.ID;this.Hv.H(Bsf);this.Hv.L(A.jb.Text);this.BS.H(Bsg);this.BS.A5(0x11
);this.BS.L(A.jb.Text);this.J(this.Hv,0);this.J(this.BS,0);this.Hv.Aw(A.aaL(A.aci.
TI));this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I1;this.Hv._Done();this.BS._Done();C.I1._Done.call(this);},_ReInit:function(
){C.I1._ReInit.call(this);this.Hv._ReInit();this.BS._ReInit();this.BS.S(A.aaL(A.
fl.Af));this.BS.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I1._Mark.call(this
,D);if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I1={Background:null
,KR:0,Hj:false,CP:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Ba5],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);A.pe([this,
this.Ba5],this);},Bl:function(aSize){C.Hg.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.
Hj)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ce:function(G){}
,Ba5:function(s){this.Ce(s);},Bi:function(E){if(this.Hj===E)return;this.Hj=E;this.
Am();},De:function(E){if(this.KR===E)return;this.KR=E;},_Init:function(aArg){C.Hg.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I1;this.H(BD);this.Background.H(AIg);this.KR=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);C.Hg._Done.call(this);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={G1:null,BAw:function(G){this.BS.H(A.abN(this.BS.M,this.G1.M[0]));},_Init:
function(aArg){C.Fx._Init.call(this,aArg);A.acg.Text._Init.call(this.G1={I:this}
,0);this.__proto__=C.NE;this.G1.AZ(0xA);this.G1.H(Bsh);this.G1.Hl(5);this.G1.I9(
true);this.G1.A5(0x14);this.G1.R(A.jV);this.G1.L(A.jb.Text);this.J(this.G1,0);this.
G1.Q2([this,this.BAw]);this.G1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fx;this.G1._Done();C.Fx._Done.call(this);},_ReInit:function(){C.Fx._ReInit.call(
this);this.G1._ReInit();this.G1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fx.
_Mark.call(this,D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axb={AQU:null,_Init:function(aArg){C.Zv._Init.call(this,aArg);this.__proto__=
C.Axb;},_Mark:function(D){var B;C.Zv._Mark.call(this,D);if((B=this.AQU)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANu={Wr:null,WK:0,AwD:function(E){C.Amy.AwD.call(this,E);if(E)this.Pn.R(Bsi);
else this.Pn.R(A$5);},Bmz:function(E){if(A.aaZ(this.Wr,E))return;if(!!this.Wr)A.
z$([this,this.A20],this.Wr,0);this.Wr=E;if(!!E)A.zX([this,this.A20],E,0);if(!!E)
A.pe([this,this.A20],this);},AFB:function(E){var F;if(this.WK===E)return;this.WK=
E;this.AwD(!!this.Wr&&((F=this.Wr,F[1].call(F[0]))===E));},A20:function(G){var F;
this.AwD(!!this.Wr&&((F=this.Wr,F[1].call(F[0]))===this.WK));},_Init:function(aArg
){C.Amy._Init.call(this,aArg);this.__proto__=C.ANu;this.Pn.R(A$5);this.Pn.S(A.aaL(
A.fl.H1));},_Mark:function(D){var B;C.Amy._Mark.call(this,D);if((B=this.Wr)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axd={Wr:null,WK:0,_Init:function(aArg){C.Zv._Init.call(this,aArg);this.__proto__=
C.Axd;},_Mark:function(D){var B;C.Zv._Mark.call(this,D);if((B=this.Wr)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATM={GO:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Q8._Init.call(
this.GO={I:this},0);this.__proto__=C.ATM;var B;this.I_(A.aaR(A.acf.ACA));this.GO.
H(AhV);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF3));this.GO.ArU(
false);this.GO.A9V(true);this.J(this.GO,0);this.GO.AeR([B=this.GO,B.FU]);this.GO.
Gq([this,this.D_,this.GQ]);this.GO.Akt(A.aaL(A.ach.Edit));this.GO.At([B=A._GetAutoObject(
A.Device.Device),B.ASq,B.AZV]);},_Done:function(){this.__proto__=C.Cd;this.GO._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.GO._ReInit(
);this.I_(A.aaR(A.acf.ACA));this.GO.T(A.aaR(A.acf.AF3));},_Mark:function(D){var B;
C.Cd._Mark.call(this,D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATK={GI:0,C6:null,AW:null,Ko:null,E$:null
,GermanStateToString:null,CountryToString:null,Pv:0,K_:0,L$:false,Init:function(
aArg){A.zX([this,this.MH],[this,this.Sy,this.Ln],0);A.zX([this,this.MH],[this,this.
Ank,this.Ahn],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FM(this.LQ);this.
Ko.FM(this.LQ);this.E$.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=
this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[
1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[
0])).CX(this.CountryToString.BR(this.K_));(F=this.N,F[1].call(F[0])).Co=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0]
)).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(
F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX((A.aaR(A.acf.EV
)+Ax4)+this.GermanStateToString.Lt(A._GetAutoObject(A.Device.Converter).ACL(this.
Pv)));(F=this.N,F[1].call(F[0])).Co=null;}break;default:{(F=this.N,F[1].call(F[0
])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(
F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=this.N,F[1].call(F[0])).Co=null;}}}
,Ew:function(EN){var Tj=this.A8;if(EN<0)EN=0;else if(EN>this.RE)EN=this.RE;switch(
EN){case 0:{this.Bb(null);if(!this.GI&&!this.Pv)this.Ln(0);}break;case 1:this.Bb(
this.E$);break;case 2:this.Bb(this.Ko);break;case 3:if(((Tj===2)&&!this.Pv)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tj>0))this.AW.SM(2);else this.AW.SM(
7);}break;default:throw new Error(As_+EN.toFixed());}this.A8=EN;C.Ek.Ew.call(this
,EN);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SA(A._GetAutoObject(
A.Device.Helper).Sf(E,0,10));this.Ahn(A._GetAutoObject(A.Device.Helper).Sf(E,10,
2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).WV(E));this.L$=false;if(!!this.
AM){this.Ko.Kr(2);this.AW.Kr(10);}else{this.Ko.Kr(0);this.AW.Kr(0);}this.Am();},
FU:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ACW());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RE);},AjH:function(){return this.GI;
},AjJ:function(){return 9999999999;},Ln:function(E){if(this.K_===E)return;this.K_=
E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.Sy,this.Ln],0);}
,SA:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this,this.
Vj],this);A.abo([this,this.AbU,this.SA],0);},Vj:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abl(this.Pv,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahn:function(
E){if(this.Pv===E)return;this.Pv=E;if(this.L$===false)A.pe([this,this.Vj],this);
A.abo([this,this.Ank,this.Ahn],0);},Sy:function(){return this.K_;},AbU:function(
){return this.GI;},Ank:function(){return this.Pv;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C6._Init.call(this.C6={I:this},0);C.AQO._Init.call(this.AW={I:
this},0);C.AvG._Init.call(this.Ko={I:this},0);C.AsA._Init.call(this.E$={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATK;var B;this.RE=3;this.AW.H(Bsj);this.Ko.H(Bsk);this.Ko.EU(16);this.E$.H(A$6
);this.J(this.AW,0);this.J(this.Ko,0);this.J(this.E$,0);this.C6.AET([this,this.Sy
,this.Ln]);this.AW.At([this,this.AbU,this.SA]);this.Ko.At([this,this.Ank,this.Ahn
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
};C.AQO={NK:null,NJ:null,ES:null,FY:null,Ep:null,Dy:null,CU:null,Cs:null,FM:function(
E){if(this.M4===E)return;C.Le.FM.call(this,E);this.Cs.CT(E);this.CU.CT(E);this.Dy.
CT(E);this.Ep.CT(E);this.FY.CT(E);this.ES.CT(E);this.NJ.CT(E);this.NK.CT(E);},Yl:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.
Cs;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;
case 5:B5=this.FY;break;case 6:B5=this.ES;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;},_Init:
function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FY={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cs={I:this
},0);this.__proto__=C.AQO;this.H(Bsl);this.G0.H(AIw);this.NK.H(Ayu);this.NJ.H(AZv
);this.ES.H(AZw);this.FY.H(AZx);this.Ep.H(AZy);this.Dy.H(AZz);this.CU.H(AZA);this.
Cs.H(A$Q);this.FZ.H(AZB);this.EM.H(AZB);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ES,-2);this.J(this.FY,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.
CU,-2);this.J(this.Cs,-2);this.NK.Di=[this,this.GU];this.NJ.Di=[this,this.GU];this.
ES.Di=[this,this.GU];this.FY.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.Dy.
Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:function(
){this.__proto__=C.Le;this.NK._Done();this.NJ._Done();this.ES._Done();this.FY._Done(
);this.Ep._Done();this.Dy._Done();this.CU._Done();this.Cs._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ES._ReInit();this.FY._ReInit();this.Ep._ReInit();this.Dy._ReInit();this.CU.
_ReInit();this.Cs._ReInit();},_Mark:function(D){var B;C.Le._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cs
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATL={
GI:0,C6:null,AW:null,E$:null,CountryToString:null,K_:0,L$:false,Init:function(aArg
){A.zX([this,this.MH],[this,this.Sy,this.Ln],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FM(this.LQ);this.E$.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hc];(F=this.N,F[1].call(F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CX(this.CountryToString.BR(this.K_));(F=this.N,F[1].call(F[0])).Co=null;}
break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hc];(F=this.N,F[1].call(
F[0])).Cv(null);(F=this.N,F[1].call(F[0])).FN(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CX(A.jV);(F=
this.N,F[1].call(F[0])).Co=null;}}},Ew:function(EN){var Tj=this.A8;if(EN<0)EN=0;
else if(EN>this.RE)EN=this.RE;switch(EN){case 0:{this.Bb(null);if(!this.GI)this.
Ln(0);}break;case 1:this.Bb(this.E$);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tj>0))this.AW.SM(2);else this.AW.SM(7);}break;default:throw new Error(As_+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.L$=true;this.SA(A._GetAutoObject(A.Device.Helper).Sf(E,0,12));this.Ln(
A._GetAutoObject(A.Device.Converter).WV(E));this.L$=false;if(!!this.AM)this.AW.Kr(
12);else this.AW.Kr(0);this.Am();},FU:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ACW());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RE);},AjH:function(
){return this.GI;},AjJ:function(){return 999999999999;},Ln:function(E){if(this.K_===
E)return;this.K_=E;if(this.L$===false)A.pe([this,this.Vj],this);A.abo([this,this.
Sy,this.Ln],0);},SA:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false
)A.pe([this,this.Vj],this);A.abo([this,this.AbU,this.SA],0);},Vj:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqs(this.K_),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sy:function(){return this.
K_;},AbU:function(){return this.GI;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.ADF._Init.call(this.AW={I:this},0);C.AsA.
_Init.call(this.E$={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATL;var B;this.RE=2;this.AW.H(Bsm);this.E$.H(A$6);this.
J(this.AW,0);this.J(this.E$,0);this.C6.AET([this,this.Sy,this.Ln]);this.AW.At([this
,this.AbU,this.SA]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.Init(
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
27);else if(Cx===this.X3)A._GetAutoObject(C.A$).Cf(78);},A24:function(G){A._GetAutoObject(
C.A$).Fy();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fm._Init.call(this.X5={I:this
},0);C.Fm._Init.call(this.X6={I:this},0);C.Fm._Init.call(this.X4={I:this},0);C.Fm.
_Init.call(this.X2={I:this},0);C.Fm._Init.call(this.X3={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CX(A.jV);this.Ej.Ar(false
);this.Dq(C.AqT);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(Fe);
this.Y.JQ(9);this.Ay.H(Is);this.X5.H(P6);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.
A7q));this.X6.H(AZH);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.NewAnimals));this.X4.
H(N_);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.Calving));this.X2.H(P7);this.X2.Aj(
true);this.X2.T(A.aaR(A.acf.ABT));this.X3.H(MG);this.X3.Aj(true);this.X3.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X5,0);this.J(this.X6,0);this.J(this.X4,0);this.J(this.X2,0);this.J(this.X3,0);this.
N.CE=[this,this.A24];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];this.X5.
AR=[this,this.Ig];this.X5.DB(A.aaL(A.ach.ADA));this.X6.AR=[this,this.Ig];this.X6.
DB(A.aaL(A.ach.AvA));this.X4.AR=[this,this.Ig];this.X4.DB(A.aaL(A.ach.APT));this.
X2.AR=[this,this.Ig];this.X2.DB(A.aaL(A.ach.APQ));this.X3.AR=[this,this.Ig];this.
X3.DB(A.aaL(A.ach.APJ));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.X5._Done();this.X6._Done();this.X4._Done();this.X2.
_Done();this.X3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X5._ReInit(
);this.X6._ReInit();this.X4._ReInit();this.X2._ReInit();this.X3._ReInit();this.X5.
T(A.aaR(A.acf.A7q));this.X6.T(A.aaR(A.acf.NewAnimals));this.X4.T(A.aaR(A.acf.Calving
));this.X2.T(A.aaR(A.acf.ABT));this.X3.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARJ={K3:null,EaseOfDelivery:null,BirthType:null,AcF:null
,Li:null,Cm:null,G5:null,Lg:null,AzE:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GH],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E5();A._GetAutoObject(C.A$).Fy();if(!!this.K3)this.K3.Ev(this);},Agb:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BY.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwE(true);if(!!this.K3)this.K3.Agb(this
);if(A._GetAutoObject(A.Device.Device).An.Lf())A._GetAutoObject(A.Device.Helper).
AKb(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApA]);else{this.AiV();A.
pe([this,this.ApY],this);}},Aua:function(){this.N.CX(A.jV);this.N.C5(A.aaL(A.ach.
ADE));this.N.Co=[this,this.AyK];},CC:function(G){var B;C.HY.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lf()){A._GetAutoObject(A.Device.Device).A6(41
,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);this.Ev(this);
}else if(this.AzE){this.AzE=false;A.pe([this,this.A3h],this);}else if(!this.K3){
this.K3=A._NewObject(C.ARK,0);this.K3.A9q([this,this.AAQ]);A._GetAutoObject(A.Device.
Helper).W.Gp();A._GetAutoObject(A.Device.Helper).Aqb(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nf(this.AsL.Aef(6));this.K3.LN(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiV:function(
){A._GetAutoObject(A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);var
L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SN(L7);if(A._GetAutoObject(A.Device.Helper
).AmY()){if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.
Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);else{
var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B0.OnSetBodyWeight(this.KH);B0.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B0.Cg(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6x(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},ApY:function(G){var B;if(!!this.K3)this.K3.ApY(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).AmY())this.C9.Z(true);else this.C9.Z(false);},
ApA:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",As0,As.Id);}},AAQ:function(G){this.
LN(this);this.AeT(A._GetAutoObject(A.Device.Helper).Abl(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JF(this.C$);},ApB:function(G){var F;C.HY.ApB.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnP));},A3h:function(G){A._GetAutoObject(
C.A$).Cf(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcF._Init.call(this.AcF={I:this},0);C.Q8._Init.call(this.Li={I:this
},0);C.SO._Init.call(this.Cm={I:this},0);C.BU._Init.call(this.G5={I:this},0);C.BU.
_Init.call(this.Lg={I:this},0);this.__proto__=C.ARJ;var B;this.Dq(C.APf);this.Li.
H(AhV);this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ACh));this.CG.H(AcM);this.Cm.H(AcM
);this.Cm.Aj(true);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.AFs(true);this.G5.H(AcM);
this.G5.Aj(true);this.G5.T(A.aaR(A.acf.Ari));this.Lg.H(AcM);this.Lg.Aj(true);this.
Lg.T(A.aaR(A.acf.AgE));this.J(this.Li,-5);this.J(this.Cm,-3);this.J(this.G5,-1);
this.J(this.Lg,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcF.LY(A._GetAutoObject(A.
Device.Helper).W);this.Li.Gq([this,this.D_,this.GQ]);this.Li.At([B=A._GetAutoObject(
A.Device.Helper).W,B.ASm,B.Anx]);this.Cm.Gq([this,this.D_,this.GQ]);this.Cm.LX([
B=this.Cm,B.FU]);this.Cm.L0(A.aaL(A.ach.Edit));this.Cm.Ab2([B=A._GetAutoObject(A.
Device.Helper).W,B.Av4,B.Q1]);this.Gl.At([B=this.AcF,B.B_,B.B$]);this.Gl.CK(this.
AcF);this.G5.At([B=this.BirthType,B.B_,B.B$]);this.G5.CK(this.BirthType);this.Lg.
At([B=this.EaseOfDelivery,B.B_,B.B$]);this.Lg.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcF._Done();this.Li._Done();this.Cm._Done();this.G5._Done();this.Lg.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcF._ReInit();this.Li._ReInit(
);this.Cm._ReInit();this.G5._ReInit();this.Lg._ReInit();this.Li.T(A.aaR(A.acf.ACh
));this.Cm.T(A.aaR(A.acf.Aea));this.G5.T(A.aaR(A.acf.Ari));this.Lg.T(A.aaR(A.acf.
AgE));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMp={Init:function(aArg){var B;A.zX([this,this.Bf$],[B=A._GetAutoObject(A.Device.
Device),B.AEu,B.AIK],0);A.pe([this,this.Bf$],this);},AKH:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbQ){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACO();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOz();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mq();break;default:throw new Error(AZK+A.
_GetAutoObject(A.Device.Device).AbQ.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Bf$:function(G){switch(A._GetAutoObject(A.Device.Device).AbQ){case
0:this.Dv(A.aaR(A.acf.ARP));break;case 1:this.Dv(A.aaR(A.acf.BjE));break;case 2:
this.Dv(A.aaR(A.acf.AvW));break;default:A.ab5("%s",AZK+A._GetAutoObject(A.Device.
Device).AbQ.toFixed());}},_Init:function(aArg){C.Amo._Init.call(this,aArg);this.
__proto__=C.AMp;this.Bmr(C.APv);this.Ej.AbY(A._NewObject(C.APk,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARK={AAb:0,Add:null
,AuO:null,BdB:0,A3v:0,A2o:0,Init:function(aArg){this.BdB=A._GetAutoObject(A.Device.
Helper).W.Id;this.Add=A._GetAutoObject(A.Device.Device).An.Filter;this.AAb=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2o=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LN:function(G){A._GetAutoObject(A.Device.Helper).W.Anx(this.AAb);A._GetAutoObject(
A.Device.Helper).W.Ae1(true);switch(this.A2o){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZs,this.A2o);}},Ev:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Add);if(!!this.A3v)this.Bgb();},Agb:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bgb:function(){var AtP=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.BdB);AtP.E3(Ad,A._GetAutoObject(
A.Device.Device).An);AtP.Awq(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtP.
ArN(false);AtP.AwF(AtP.LactationNumber+1);AtP.Cg(A._GetAutoObject(A.Device.Device
).An);},ApY:function(G){this.A3v++;var BxI=A._GetAutoObject(A.Device.Converter).
BgW(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3v<BxI)&&(A._GetAutoObject(
A.Device.Helper).Aj0(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A6(59,true,A.jV,0,[this,this.Ve]);else this.Bcz(
this);},Ve:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.Bcz(this);else if(!!As&&(As.PopupState===7))this.
AAQ(this);},AAQ:function(G){var B;var Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var O8=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJQ=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuO)(B=this.AuO
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(Ib);A._GetAutoObject(
A.Device.Helper).W.Akp(AfR);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q1(O8);A._GetAutoObject(A.Device.Helper).W.Akr(AJQ);},Bcz:function(
G){this.Bgb();A._GetAutoObject(C.A$).Fy();A._GetAutoObject(A.Device.Device).An.Bk(
this.Add);},A9q:function(E){if(A.aa0(this.AuO,E))return;this.AuO=E;},_Init:function(
aArg){this.__proto__=C.ARK;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Add)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMF={Init:function(aArg){
var B;A.zX([this,this.BdY],[B=A._GetAutoObject(A.Device.Device),B.AR8,B.AZL],0);
this.BdY(this);},Cg:function(){A.ab5("%s",Bsn);},E3:function(AcR){C.Vs.E3.call(this
,AcR);var O;for(O=16;O>0;O--)this.Ia.Set(O,this.Ia.Get(O-1));this.Ia.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Bso);},ADJ:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BdY:
function(G){this.E3(A._GetAutoObject(A.Device.Device).Aut);A.we(this,0);},_Init:
function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AMF;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuG={_Init:function(){C.
AMF._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JI={C4:null,V:null,A7j:true,T:function(E){C.I1.T.call(this,E);this.
V.R(E);},De:function(E){C.I1.De.call(this,E);this.V.L(E);},Bmw:function(E){if(this.
A7j===E)return;this.A7j=E;this.C4.Z(E);},_Init:function(aArg){C.I1._Init.call(this
,aArg);A.acg.C4._Init.call(this.C4={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JI;this.C4.DC(Bsp);this.C4.DM(Bsq);this.C4.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(Bsr);this.V.A5(0x11);this.V.L(A.jb.Text);this.J(this.C4,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I1;this.C4._Done();this.V._Done();C.
I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(this);this.C4._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Km));this.V.A2(A.aaL(A.fl.Ik));this.V.Ct(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I1._Mark.call(this,D);if((B=this.C4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APk={AgS:null,Dd:null,Abj:null,Fl:null,Fa:
null,Init:function(aArg){var B;A.zX([this,this.A36],[B=A._GetAutoObject(A.Device.
Device),B.AEu,B.AIK],0);A.pe([this,this.A36],this);},De:function(E){C.Yo.De.call(
this,E);this.Dd.L(E);},AEA:function(G){A.pe([this,this.A36],this);},AAS:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E_();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C2:function(G){var B;var F;C.Yo.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjP));return;}var Byn=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bbc=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Byn)this.Dd.Aw(A.aaL(A.ach.AC2));else if(
!!Bbc&&(Bbc.A4===1))this.Dd.Aw(A.aaL(A.ach.APV));else this.Dd.Aw(A.aaL(A.ach.AjP
));},A36:function(G){var F;var Filter=null;var AOn;switch(A._GetAutoObject(A.Device.
Device).AbQ){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACO();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOz();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mq();break;default:throw new Error(AZK+A._GetAutoObject(A.Device.
Device).AbQ.toFixed());}var AiZ=this.Akj();if(AiZ>0){AOn=A._NewObject(A.Device.Int32FilterCriterion
,0);AOn.Initialize(1,4,AiZ,false);Filter.CV(AOn);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},Om:function(G){if(!this.Akj())this.AW.AeU(true
);this.Bb(this.AW);this.Am();},MU:function(G){this.AW.AeU(false);this.Bb(this.AgS
);this.Am();},_Init:function(aArg){C.Yo._Init.call(this,aArg);C.Aq5._Init.call(this.
AgS={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abj._Init.call(this.Abj={
I:this},0);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={
I:this},0);this.__proto__=C.APk;var B;this.H(Bss);this.AW.H(Bst);this.T0.H(Bsu);
this.Gv.Z(false);this.AgS.H(Bsv);this.Dd.H(Bsw);this.Abj.At(A._GetAutoObject(A.Device.
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
,Init:function(aArg){var B;A.zX([this,this.BdD],[B=A._GetAutoObject(A.Device.Device
),B.AEu,B.AIK],0);A.pe([this,this.BdD],this);},Dt:function(){return 3;},At:function(
E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.Device).AwM(E);},ACN:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;return this.AeO.AsB(aIndex
);},ACP:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return this.
AeO.AsC(aIndex);},BdD:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbQ;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);
A.Device.AeO._Init.call(this.AeO={I:this},0);this.__proto__=C.Abj;this.Cb.Set(0,
0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cl;this.AeO._Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(
this);this.AeO._ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=
this.AeO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APv={Er:null,IM:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Er={I:this},0);A.acg.Text._Init.call(this.IM={I:this},0);this.__proto__=
C.APv;this.H(O2);this.Background.H(O2);this.Er.H(AIh);this.Er.R(A.aaR(A.acf.A6C)
);this.Er.A5(0x12);this.Er.L(A.jb.Text);this.IM.AZ(0x3F);this.IM.H(Ayo);this.IM.
Hl(5);this.IM.A5(0x14);this.IM.R(A.aaR(A.acf.AGG));this.IM.L(A.jb.Text);this.J(this.
Er,0);this.J(this.IM,0);this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ik));this.
Er.Ct(A.aaL(A.fl.Bh));this.IM.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Er._Done();this.IM._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Er._ReInit();this.IM._ReInit();this.Er.R(A.aaR(A.acf.
A6C));this.IM.R(A.aaR(A.acf.AGG));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.
Ik));this.Er.Ct(A.aaL(A.fl.Bh));this.IM.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JZ:null,BfK:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Beo(this);else A._GetAutoObject(A.Device.Device).A6(63,true,A.
jV,0,[this,this.Ve]);},Beo:function(G){A._GetAutoObject(C.A$).Fy();},Ve:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.Beo(this);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.JZ={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APj);this.Je.H(Bsx);this.Je.Akz(2);this.Act.Z(false);this.ARp=12;this.
Number.H(Bsy);this.Number.R(A.aaR(A.acf.A_R));this.A4A=false;this.JZ.H(Bsz);this.
JZ.Hl(5);this.JZ.KQ(true);this.JZ.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABz));this.JZ.L(A.jb.Text);this.JW(this.Je,-1);this.JW(this.IR,-1);this.
JW(this.Act,-1);this.J(this.JZ,0);this.JZ.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mg;this.JZ._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.
call(this);this.JZ._ReInit();this.Number.R(A.aaR(A.acf.A_R));this.JZ.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABz));this.JZ.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mg._Mark.call(this,D);if((B=this.JZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APj={_Init:function(aArg){C.AqS.
_Init.call(this,aArg);this.__proto__=C.APj;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Je={AbG:null,AbF:null,AbE:null,QD:null,CountryToString:null,AsE:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QD.R(this.CountryToString.
Lt(A._GetAutoObject(A.Device.Converter).A60(A._GetAutoObject(A.Device.Device).Language
))+BsA);},Akz:function(E){if(this.AsE===E)return;this.AsE=E;var bitmap=null;var A1t=
BsB;var A1s=null;var A1u=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq4);break;case
1:{bitmap=A.aaL(A.ach.AQv);A1t=BsC;A1s=A.aaL(A.fl.Ak);A1u=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQw);A1t=BsD;A1s=A.aaL(A.fl.Bh);A1u=true;}break;default:throw new Error(
BsE+E.toFixed());}this.AbE.Aw(bitmap);this.AbF.Aw(bitmap);this.AbG.Aw(bitmap);this.
QD.H(A.abJ(this.QD.M,A1t));this.QD.S(A1s);this.QD.Z(A1u);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbG={I:this},0);A.acg.Ap._Init.call(this.AbF={I:this},0);A.acg.Ap._Init.
call(this.AbE={I:this},0);A.acg.Text._Init.call(this.QD={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Je;this.H(AIz);this.
AbG.AZ(0x3);this.AbG.H(AIz);this.AbG.L(A.jb.H8);this.AbG.Cu(2);this.AbF.AZ(0x3);
this.AbF.H(AIz);this.AbF.L(A.jb.Ad7);this.AbF.Cu(1);this.AbE.AZ(0x3);this.AbE.H(
AIz);this.AbE.L(A.jb.Text);this.AbE.Cu(0);this.QD.AZ(0x14);this.QD.H(BsF);this.QD.
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
};C.AsE={Transponder:0,BFr:1,BFs:2};C.APf={Ap:null,De:function(E){C.BQ.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APf;this.Ap.H(AZt);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AO8));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ih:0,Aaz:4,AlX:function(G){C.Q7.AlX.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bc$()){this.Ih=A._GetAutoObject(A.Device.Helper).Uu.Id;var Aiu=A._GetAutoObject(
A.Device.Helper).A6Y(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(Aiu){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Re(this.Ih),0,[
this,this.Ve]);return;}Aiu=A._GetAutoObject(A.Device.Helper).Bi6(this.Ih,A._GetAutoObject(
A.Device.Helper).W);if(Aiu&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ih)){A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.
Converter).Re(this.Ih),0,[this,this.Ve]);return;}this.Aaz=A._GetAutoObject(A.Device.
Helper).AQ1(this.Ih);switch(this.Aaz){case 0:A._GetAutoObject(A.Device.Device).A6(
45,true,this.Ih.toFixed().length.toFixed(),0,[this,this.Ve]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxJ(this.Ih);A._GetAutoObject(A.Device.
Device).A6(46,true,BM.toFixed(),0,[this,this.Ve]);}break;case 3:this.BfC();break;
default:throw new Error(AH7+this.Aaz.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A$).Fy();},Ve:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.Aaz===2)this.BfC();else A._GetAutoObject(
A.Device.Device).AhG();break;case 5:this.Ev(this);break;default:;}},BfC:function(
){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PR(this.Ih);A._GetAutoObject(
A.Device.Helper).W.Cg(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A6(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q7._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.II);this.Number.R(A.aaR(A.acf.A_K
));this.Je.H(BsG);this.IR.H(BsH);this.Akz(1);this.N.CE=[this,this.Ev];this.N.C1(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q7._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_K));},_className:"Application::SetSaveNaisIdScreen"};C.ANU={LN:function(
G){C.AqB.LN.call(this,G);A.pe([this,this.BA_],this);},BA_:function(G){this.JF(this.
Ef);},_Init:function(aArg){C.AqB._Init.call(this,aArg);this.__proto__=C.ANU;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UK={Animal:null,WhereAboutsToString:
null,Gj:function(aIndex){return this.WhereAboutsToString.BR(this.C7(aIndex));},At:
function(E){C.Cl.At.call(this,E);if(!!this.Animal)this.Animal.Nf(E);},A4c:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4c],[B=this.Animal,B.Awe,B.Nf],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4c],[B=this.Animal,B.Awe,B.Nf],0);A.pe([this,this.A4c],this);}
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
null,Init:function(aArg){var B;A.zX([this,this.BbV],[B=A._GetAutoObject(A.Device.
Device),B.AR9,B.AZM],0);A.pe([this,this.BbV],this);},Dt:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BR(aIndex);},DZ:function(A9){return A9;},H3:function(){return 1;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awh(E);},BbV:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agu;A.abo([this,this.B_,this.B$],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdQ;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGu={FI:null
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
return;this.AM=E;},Om:function(G){this.AA1(2);},MU:function(G){this.AA1(7);},AA1:
function(Gz){var B;var Azn=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azn){
var AAd=(A.Core.P.isPrototypeOf(B=this.QE(Azn,Gz,0x15))?B:null);if(!!AAd){this.Bb(
AAd);return true;}}return false;},AfY:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M8.Aw(
A._GetAutoObject(A.Device.Converter).AmM(2));break;case 1:this.M8.Aw(A._GetAutoObject(
A.Device.Converter).AmM((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
A$7+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3N],this);},A3N:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Kk.AeW(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aou]);this.Kk.
AeW([B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIH]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Av7
,B.AyC]);this.Kk.AeW([B=A._GetAutoObject(A.Device.Device),B.ASc,B.AZN]);}break;case
0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyD]);this.Kk.AeW([B=
A._GetAutoObject(A.Device.Device),B.ASd,B.AZO]);}break;case 2:{this.AW.At([B=A._GetAutoObject(
A.Device.Device),B.Anl,B.Aou]);this.Kk.AeW([B=A._GetAutoObject(A.Device.Device),
B.AEq,B.AIH]);}break;default:throw new Error(BsI+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A$7+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Ui:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.AfY],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.AfY],this.Ez,0);if(!!
E)A.pe([this,this.AfY],this);},Akq:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfY],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfY],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfY],this);},Ud:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.
BK._Init.call(this.Fa={I:this},0);C.Aq5._Init.call(this.HG={I:this},0);C.AvH._Init.
call(this.AW={I:this},0);C.AuS._Init.call(this.Kk={I:this},0);A.acg.Ap._Init.call(
this.M8={I:this},0);this.__proto__=C.AGu;var B;this.H(UT);this.V.Ar(false);this.
V.R(As2);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fa.Filter=7;this.HG.H(BsJ);this.
AW.H(BsK);this.M8.H(BsL);this.J(this.HG,0);this.J(this.AW,0);this.J(this.M8,0);this.
FI=A._NewObject(C.Aeo,0);this.Fl.BL=[this,this.Om];this.Fa.BL=[this,this.MU];this.
HG.CK(this.Kk);this.HG.At([B=this.Kk,B.B_,B.B$]);this.AW.At([this,this.Ud,this.Bx
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
null,Y9:null,AbN:null,T7:null,Init:function(aArg){this.Bb(this.Wj);},AEi:function(
G){var Bdz=(C.Anb.isPrototypeOf(G)?G:null);if(!!Bdz)A._GetAutoObject(A.Device.Device
).A6(Bdz.Ady,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.T7))A._GetAutoObject(A.Device.Device).A6(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.T7))A._GetAutoObject(C.A$).Cf(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Anb._Init.call(this.Wj={I:
this},0);C.Anb._Init.call(this.Y9={I:this},0);C.Anb._Init.call(this.AbN={I:this}
,0);C.Anb._Init.call(this.T7={I:this},0);this.__proto__=C.ANJ;this.Dq(C.AOW);this.
Wj.H(IT);this.Wj.Aj(true);this.Wj.T(A.aaR(A.acf.AhF));this.Wj.Bi(false);this.Wj.
Ady=79;this.Y9.H(P_);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.A_3));this.Y9.Bi(true
);this.Y9.Ady=77;this.AbN.H(Z_);this.AbN.Aj(true);this.AbN.T(A.acf.BiH);this.AbN.
Bi(false);this.AbN.Ady=78;this.T7.H(Ak_);this.T7.Aj(true);this.T7.T(A.aaR(A.acf.
About));this.T7.Bi(true);this.T7.Ady=3;this.J(this.Wj,-1);this.J(this.Y9,-1);this.
J(this.AbN,-1);this.J(this.T7,-1);this.Wj.AR=[this,this.AEi];this.Y9.AR=[this,this.
AEi];this.AbN.AR=[this,this.AEi];this.T7.AR=[this,this.AEi];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wj._Done();this.Y9._Done();this.AbN._Done();
this.T7._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this
);this.Wj._ReInit();this.Y9._ReInit();this.AbN._ReInit();this.T7._ReInit();this.
Wj.T(A.aaR(A.acf.AhF));this.Y9.T(A.aaR(A.acf.A_3));this.T7.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AOW={_Init:function(aArg){C.KN._Init.call(this
,aArg);this.__proto__=C.AOW;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANH={FactoryResetScope:null,T_:null,Wh:null,Ua:null,Init:function(aArg){this.
Bb(this.T_);A.pe([this,this.MH],this);},BjO:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A6(33,true
,A.jV,0,[this,this.Bfq]);break;case 0:A._GetAutoObject(A.Device.Device).A6(7,true
,A.jV,0,[this,this.Bfq]);break;default:A.ab5("%s%i",BsM,this.FactoryResetScope.Q
);}},Bfq:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
BnP();A._GetAutoObject(A.Device.Device).A6(8,true,A.jV,0,null);A._GetAutoObject(
C.A$).Cf(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).BnO();A._GetAutoObject(
A.Device.Device).ArK(0);A._GetAutoObject(A.Device.Device).ArL(0);A._GetAutoObject(
A.Device.Device).ArM(0);A._GetAutoObject(A.Device.Device).ArQ(0);A._GetAutoObject(
A.Device.Device).ArR(0);A._GetAutoObject(A.Device.Device).ArS(0);A._GetAutoObject(
A.Device.Device).Ug(5);A._GetAutoObject(A.Device.Device).Awt(0);A._GetAutoObject(
A.Device.Device).Awu(0);A._GetAutoObject(A.Device.Device).Awv(0);A._GetAutoObject(
A.Device.Device).AwN(1);A._GetAutoObject(A.Device.Device).AwO(1);A._GetAutoObject(
A.Device.Device).AwP(1);A._GetAutoObject(A.Device.Device).A6(34,true,A.jV,0,null
);}break;default:A.ab5("%s%e",AH8,As.Id);}},_Init:function(aArg){C.Ei._Init.call(
this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={I:this},0);C.Nb.
_Init.call(this.T_={I:this},0);C.Nb._Init.call(this.Wh={I:this},0);C.BU._Init.call(
this.Ua={I:this},0);this.__proto__=C.ANH;var B;this.Dq(C.AOU);this.T_.H(IT);this.
T_.Aj(true);this.T_.T(A.aaR(A.acf.ACj));this.T_.Bi(false);this.T_.Ne(93);this.Wh.
H(P_);this.Wh.Aj(true);this.Wh.T(A.aaR(A.acf.AdP));this.Wh.Bi(true);this.Wh.Ne(92
);this.Ua.H(A$8);this.Ua.Aj(true);this.Ua.Bk8(true);this.Ua.T(A.aaR(A.acf.A51));
this.Ua.Bi(false);this.J(this.T_,-1);this.J(this.Wh,-1);this.J(this.Ua,-1);this.
T_.AR=[B=this.T_,B.Nh];this.Wh.AR=[B=this.Wh,B.Nh];this.Ua.AR=[this,this.BjO];this.
Ua.At([B=this.FactoryResetScope,B.B_,B.B$]);this.Ua.CK(this.FactoryResetScope);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope._Done();
this.T_._Done();this.Wh._Done();this.Ua._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.T_._ReInit(
);this.Wh._ReInit();this.Ua._ReInit();this.T_.T(A.aaR(A.acf.ACj));this.Wh.T(A.aaR(
A.acf.AdP));this.Ua.T(A.aaR(A.acf.A51));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOU={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOU;this.
Text.R(A.aaR(A.acf.ACk));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACk));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AqU={QQ:null,V_:null,_Init:function(aArg){C.TR._Init.call(this,aArg);C.CH._Init.
call(this.QQ={I:this},0);C.CH._Init.call(this.V_={I:this},0);this.__proto__=C.AqU;
this.QQ.H(BsN);this.QQ.R(A.aaR(A.acf.A_V));this.QQ.A5(0x12);this.QQ.L(A.jb.Text);
this.V_.H(A$2);this.V_.R(A.aaR(A.acf.AnY));this.V_.L(A.jb.Text);this.J(this.QQ,0
);this.J(this.V_,0);this.QQ.S(A.aaL(A.fl.Af));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.
Ct(A.aaL(A.fl.Bh));this.V_.S(A.aaL(A.fl.Af));this.V_.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TR;this.QQ._Done();this.V_._Done();C.TR._Done.call(this
);},_ReInit:function(){C.TR._ReInit.call(this);this.QQ._ReInit();this.V_._ReInit(
);this.QQ.R(A.aaR(A.acf.A_V));this.V_.R(A.aaR(A.acf.AnY));this.QQ.S(A.aaL(A.fl.Af
));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.Ct(A.aaL(A.fl.Bh));this.V_.S(A.aaL(A.fl.Af
));this.V_.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TR._Mark.call(this,D);
if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V_)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APq={QR:
null,_Init:function(aArg){C.TR._Init.call(this,aArg);C.CH._Init.call(this.QR={I:
this},0);this.__proto__=C.APq;this.QR.H(BsO);this.QR.R(A.aaR(A.acf.Uc));this.QR.
A5(0x12);this.QR.L(A.jb.Text);this.J(this.QR,0);this.QR.S(A.aaL(A.fl.Af));this.QR.
A2(A.aaL(A.fl.Ak));this.QR.Ct(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=
C.TR;this.QR._Done();C.TR._Done.call(this);},_ReInit:function(){C.TR._ReInit.call(
this);this.QR._ReInit();this.QR.R(A.aaR(A.acf.Uc));this.QR.S(A.aaL(A.fl.Af));this.
QR.A2(A.aaL(A.fl.Ak));this.QR.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TR.
_Mark.call(this,D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqn={IJ:null,Abw:null,Ea:null,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.
IJ.H([this.Gy.M[2],0,this.Gy.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[1]]);this.Abw.H([this.IJ.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.Abw.L(this.Gy.AQ);this.IJ.L(this.
Gy.AQ);},Ce:function(Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hq=Ad;if(
!!this.AX){var Ib=this.AX.AmN(Ad,14);var AtI=this.AX.AOD(Ad,7);this.IJ.Aw(A._GetAutoObject(
A.Device.Converter).AmM(AtI));this.Abw.Aw(A._GetAutoObject(A.Device.Converter).A4F(
Ib));this.Am();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IJ={I:this},0);A.acg.Ap._Init.call(this.Abw={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqn;this.IJ.H(A$4);this.IJ.L(A.jb.Text
);this.Abw.H(BsP);this.Abw.L(A.jb.Text);this.Ea.H(BsQ);this.Ea.L(A.jb.Bc);this.J(
this.IJ,0);this.J(this.Abw,0);this.J(this.Ea,0);this.IJ.Aw(A.aaL(A.aci.TI));this.
Abw.Aw(A.aaL(A.aci.TI));},_Done:function(){this.__proto__=C.M1;this.IJ._Done();this.
Abw._Done();this.Ea._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IJ._ReInit();this.Abw._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AMZ={ZL:null
,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.ZL.H([this.Gy.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.ZL.L(this.Gy.AQ);},Ce:function(
Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hq=Ad;if(!!this.AX){var Ka=this.
AX.KM(Ad,26);if(Ka>0)this.ZL.R(A.ab2(Ka.toFixed(),5));else this.ZL.R(Rl);this.Am(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZL={I:this},0);this.__proto__=C.AMZ;this.ZL.H(BsR);this.J(this.ZL,0);this.ZL.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.ZL._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.ZL._ReInit();this.ZL.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.ZL
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARC={Ap:null,Ai:function(Ae){C.AeP.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARC;this.Text.H(BsS);this.Ap.H(AZF);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Ae$));},_Done:function(){this.__proto__=C.AeP;this.Ap._Done(
);C.AeP._Done.call(this);},_ReInit:function(){C.AeP._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeP._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yn={Text:
null,Dd:null,AP:null,Gv:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nm],[B=A._GetAutoObject(A.Device.Device),B.AEm,B.AIE],0);A.zV([this,this.Nm
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nm],this);},De:function(
E){C.BQ.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gv.L(E);this.D2.Zn(E);}
,Wv:function(E){C.BQ.Wv.call(this,E);this.D2.CT(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Nm:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C4._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C4._Init.call(this.A_={I:this},0);this.__proto__=C.Yn;this.Text.H(BsT);this.
Text.A5(0x11);this.Dd.H(Ayr);this.AP.DC(A$Y);this.AP.DM(A$Z);this.AP.L(A.jb.Bc);
this.Gv.H(BsU);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(BsV);this.D2.Zn(A.jb.
Bm);this.D2.CT(A.jb.Rd);this.D2.Hl(2);this.A_.DC(BsW);this.A_.DM(BsX);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gv,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjP));this.Gv.Aw(A.aaL(A.ach.Gv));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gv._Done();this.D2._Done();this.A_.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gv._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acj={FI:null
,JU:null,JT:null,AkG:null,AkH:null,Q3:null,QC:null,Abv:null,VY:null,PH:null,PJ:null
,Su:null,Gw:null,Gx:null,Ju:null,AlE:0,AlJ:0,D7:0,DW:0,A8:0,Bl:function(aSize){var
B;this.Dz.H([this.Hw.M[2]-10,this.Hw.M[1],this.H4.M[0]+10,this.Hw.M[3]]);this.Dz.
AE_((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.Dz.Gr,true,null,null);},Ai:function(Ae
){var B;C.BU.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A8===1)||(this.A8===2)){var A0R=this.A1P(this.A8);if(!!
A0R){this.Abv.Z(true);this.Abv.H(A0R.M);this.Abv.L(this.V.AQ);this.VY.Z(true);this.
VY.H(A0R.M);}else{this.Abv.Z(false);this.VY.Z(false);}this.Hw.Z(false);this.H4.Z(
false);}else{this.Abv.Z(false);this.VY.Z(false);this.Hw.Z(Fu||GE);this.H4.Z(Fu||
GE);}},Qp:function(G){if(!!this.Q){if(this.FF===1)A.pe([this,this.U8],this);else
if(this.FF===4)A.pe([this,this.AZ$],this);else if(this.FF===5)A.pe([this,this.AZ9
],this);}C.BU.Qp.call(this,G);},J$:function(G){switch(this.A8){case 0:C.BU.J$.call(
this,G);break;case 2:break;default:this.Ads(this);}},J6:function(G){switch(this.
A8){case 0:C.BU.J6.call(this,G);break;default:this.Aim(this);}},A1k:function(G){
var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlJ)this.
D7=this.AlJ;if(this.D7<A._GetAutoObject(A.Device.Device).AcA)this.D7=A._GetAutoObject(
A.Device.Device).AcA;if(this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.
D7));A.abo(this.JU,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[
0],this.DW));A.abo(this.JT,0);}}this.DJ(this);this.Am();},AZ9:function(s){this.A1k(
s);},AlV:function(G){this.FF=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AZ9],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A1W:function(G){var F;if(this.A8===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.D7));A.abo(this.JU,0);}}if(this.A8===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlE)this.DW=this.AlE;if(this.
DW!==BO){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.DW));A.abo(this.JT,0);}}this.
DJ(this);this.Am();},AZ$:function(s){this.A1W(s);},AlW:function(G){this.FF=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AZ$],this);this.Bo.Ar(false);}this.Bo.Ar(true
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
0])));}},A9R:function(E){if(A.aaZ(this.JU,E))return;if(!!this.JU)A.z$([this,this.
A3j],this.JU,0);this.JU=E;if(!!this.JU)A.zX([this,this.A3j],this.JU,0);A.pe([this
,this.A3j],this);},A3j:function(G){var F;this.D7=(F=this.JU,F[1].call(F[0]));this.
Am();},A9Q:function(E){if(A.aaZ(this.JT,E))return;if(!!this.JT)A.z$([this,this.A3i
],this.JT,0);this.JT=E;if(!!this.JT)A.zX([this,this.A3i],this.JT,0);A.pe([this,this.
A3i],this);},A3i:function(G){var F;this.DW=(F=this.JT,F[1].call(F[0]));this.Am();
},FU:function(G){this.Ew(1);},Hc:function(G){this.Ew(0);},Ew:function(EN){var F;
if(!this.A8)this.FI.Aju((F=this.N,F[1].call(F[0])));this.A8=EN;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=!!this.A8;this.
Am();},Aim:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3w:function(G){},AyL:function(
s){this.A3w(s);},A27:function(G){},Ba_:function(s){this.A27(s);},A1P:function(Ath
){return null;},_Init:function(aArg){C.BU._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkG={I:this},0);A.acg.AK._Init.call(this.AkH={I:this},0);A.acg.AK._Init.call(
this.Q3={I:this},0);A.acg.Ap._Init.call(this.QC={I:this},0);A.acg.AK._Init.call(
this.Abv={I:this},0);A.acg.BT._Init.call(this.VY={I:this},0);A.acg.Text._Init.call(
this.PH={I:this},0);A.acg.Text._Init.call(this.PJ={I:this},0);A.acg.Text._Init.call(
this.Su={I:this},0);A.Core.BK._Init.call(this.Gw={I:this},0);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Ju={I:this},0);this.__proto__=C.Acj;
this.H(AfA);this.T(A.aaR(A.acf.Arh));this.Background.H(AfA);this.V.H(BD);this.V.
R(A.aaR(A.acf.AGO));this.V.A5(0x12);this.AkG.H(BsY);this.AkG.L(A.jb.Gh);this.AkH.
H(BsZ);this.AkH.L(A.jb.H8);this.Q3.H(Bs0);this.Q3.L(A.jb.E1);this.QC.H(Bs1);this.
Abv.H(Bs2);this.VY.H(Bs3);this.VY.Ng(3);this.VY.L(A.jb.AV);this.VY.Z(false);this.
PH.H(Bs4);this.PH.Hl(8);this.PH.I9(true);this.PH.A5(0x11);this.PH.L(0xFF000000);
this.PJ.H(Bs5);this.PJ.Hl(8);this.PJ.I9(true);this.PJ.A5(0x11);this.PJ.L(0xFF000000
);this.Su.H(Bs6);this.Su.I9(false);this.Su.A5(0x12);this.Su.L(0xFF000000);this.Gw.
Filter=5;this.Gw.Bw=false;this.Gx.Filter=4;this.Gx.Bw=false;this.Ju.Filter=1;this.
JW(this.V,-1);this.JW(this.Dz,-2);this.J(this.AkG,-1);this.J(this.AkH,-1);this.J(
this.Q3,-1);this.J(this.QC,-1);this.J(this.Abv,-1);this.J(this.VY,-1);this.J(this.
PH,-1);this.J(this.PJ,0);this.J(this.Su,0);this.QC.Aw(A.aaL(A.ach.ADp));this.PH.
S(A.aaL(A.fl.Af));this.PJ.S(A.aaL(A.fl.Af));this.Su.S(A.aaL(A.fl.Ak));this.Gw.BL=[
this,this.AlV];this.Gw.D1=[this,this.AZ9];this.Gx.BL=[this,this.AlW];this.Gx.D1=[
this,this.AZ$];this.Ju.BL=[this,this.Ads];this.FI=A._NewObject(C.Aeo,0);},_Done:
function(){this.__proto__=C.BU;this.AkG._Done();this.AkH._Done();this.Q3._Done();
this.QC._Done();this.Abv._Done();this.VY._Done();this.PH._Done();this.PJ._Done();
this.Su._Done();this.Gw._Done();this.Gx._Done();this.Ju._Done();C.BU._Done.call(
this);},_ReInit:function(){C.BU._ReInit.call(this);this.AkG._ReInit();this.AkH._ReInit(
);this.Q3._ReInit();this.QC._ReInit();this.Abv._ReInit();this.VY._ReInit();this.
PH._ReInit();this.PJ._ReInit();this.Su._ReInit();this.Gw._ReInit();this.Gx._ReInit(
);this.Ju._ReInit();this.T(A.aaR(A.acf.Arh));this.V.R(A.aaR(A.acf.AGO));this.PH.
S(A.aaL(A.fl.Af));this.PJ.S(A.aaL(A.fl.Af));this.Su.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BU._Mark.call(this,D);if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JT)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FH={XQ:null,Acl:
null,An2:0,An3:0,Dt:function(){if(!this.XQ)return 0;return this.XQ.MD;},C7:function(
aIndex){if(!this.XQ||(aIndex>=this.XQ.MD))return-1;return this.XQ.Get(aIndex);},
Gj:function(aIndex){return this.A6h().BR(this.C7(aIndex));},DZ:function(A9){if(!
this.XQ)return-1;return this.XQ.Avg(A9);},H3:function(){if(!this.XQ)return-1;return this.
XQ.H3();},AnB:function(E){if(this.An2===E)return;this.An2=E;A.pe([this,this.AVi]
,this);},AZ4:function(Aq){this.AnB(Aq);},AnC:function(E){if(this.An3===E)return;
this.An3=E;A.pe([this,this.AVj],this);},AZ5:function(Aq){this.AnC(Aq);},AVj:function(
G){A.abo([this,this.ASC,this.AZ5],0);},AVi:function(G){A.abo([this,this.ASB,this.
AZ4],0);},A6h:function(){return this.Acl;},ASB:function(){return this.An2;},ASC:
function(){return this.An3;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acl={I:this},0);this.__proto__=C.FH;},_Done:function(
){this.__proto__=C.AC;this.Acl._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acl._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acl)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMt={Init:
function(aArg){A.zV([this,this.BeC],A._GetAutoObject(A.Device.Helper).UB,0);A.zV([
this,this.BeA],A._GetAutoObject(A.Device.Helper).UA,0);this.BeC(this);this.BeA(this
);},At:function(E){C.FH.At.call(this,E);this.AnC(A._GetAutoObject(A.Device.Helper
).UB.Get(this.DZ(E)));this.AnB(A._GetAutoObject(A.Device.Helper).UA.Get(this.DZ(
E)));},AnB:function(E){if(this.An2===E)return;C.FH.AnB.call(this,E);A._GetAutoObject(
A.Device.Helper).UA.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UA.
Cg();},AnC:function(E){if(this.An3===E)return;C.FH.AnC.call(this,E);A._GetAutoObject(
A.Device.Helper).UB.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UB.
Cg();},BeC:function(G){this.An3=A._GetAutoObject(A.Device.Helper).UB.Get(this.DZ(
this.Q));A.pe([this,this.AVj],this);},BeA:function(G){this.An2=A._GetAutoObject(
A.Device.Helper).UA.Get(this.DZ(this.Q));A.pe([this,this.AVi],this);},_Init:function(
aArg){C.FH._Init.call(this,aArg);this.__proto__=C.AMt;this.XQ=A._GetAutoObject(A.
Device.Helper).AdV;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMu={Agz:null,ABN:0,ABM:0,Init:function(aArg){A.zV([this,this.BeP],A._GetAutoObject(
A.Device.Helper).Aft,0);A.zV([this,this.BeN],A._GetAutoObject(A.Device.Helper).Afs
,0);A.zV([this,this.BeL],A._GetAutoObject(A.Device.Helper).Afr,0);A.zV([this,this.
BeR],A._GetAutoObject(A.Device.Helper).Afu,0);this.BeP(this);this.BeN(this);this.
BeL(this);this.BeR(this);},At:function(E){C.FH.At.call(this,E);this.AnC(A._GetAutoObject(
A.Device.Helper).Aft.Get(this.DZ(E)));this.AnB(A._GetAutoObject(A.Device.Helper).
Afs.Get(this.DZ(E)));this.ASG(A._GetAutoObject(A.Device.Helper).Afr.Get(this.DZ(
E)));this.ASI(A._GetAutoObject(A.Device.Helper).Afu.Get(this.DZ(E)));},AnB:function(
E){if(this.An2===E)return;C.FH.AnB.call(this,E);A._GetAutoObject(A.Device.Helper
).Afs.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afs.Cg();},AnC:function(
E){if(this.An3===E)return;C.FH.AnC.call(this,E);A._GetAutoObject(A.Device.Helper
).Aft.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Aft.Cg();},A6h:function(
){return this.Agz;},BeP:function(G){this.An3=A._GetAutoObject(A.Device.Helper).Aft.
Get(this.DZ(this.Q));A.pe([this,this.AVj],this);},BeN:function(G){this.An2=A._GetAutoObject(
A.Device.Helper).Afs.Get(this.DZ(this.Q));A.pe([this,this.AVi],this);},ASI:function(
E){if(this.ABN===E)return;this.ABN=E;A._GetAutoObject(A.Device.Helper).Afu.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Cg();A.pe([this,this.A$p],this
);},ASG:function(E){if(this.ABM===E)return;this.ABM=E;A._GetAutoObject(A.Device.
Helper).Afr.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afr.Cg();A.
pe([this,this.A$o],this);},A$o:function(G){A.abo([this,this.A75,this.ASG],0);},A$p:
function(G){A.abo([this,this.A76,this.ASI],0);},BeL:function(G){this.ABM=A._GetAutoObject(
A.Device.Helper).Afr.Get(this.DZ(this.Q));A.pe([this,this.A$o],this);},BeR:function(
G){this.ABN=A._GetAutoObject(A.Device.Helper).Afu.Get(this.DZ(this.Q));A.pe([this
,this.A$p],this);},A76:function(){return this.ABN;},A75:function(){return this.ABM;
},_Init:function(aArg){C.FH._Init.call(this,aArg);A.Device.Agz._Init.call(this.Agz={
I:this},0);this.__proto__=C.AMu;this.XQ=A._GetAutoObject(A.Device.Helper).AgA;this.
Init(aArg);},_Done:function(){this.__proto__=C.FH;this.Agz._Done();C.FH._Done.call(
this);},_ReInit:function(){C.FH._ReInit.call(this);this.Agz._ReInit();},_Mark:function(
D){var B;C.FH._Mark.call(this,D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMa={RK:null,Init:function(
aArg){var B;A.zX([this,this.AiJ],[B=this.AnimalType,B.B_,B.B$],0);A.pe([this,this.
AiJ],this);this.Bb(this.RK);},Bk:function(E){C.I2.Bk.call(this,E);this.RK.Bx(this.
Jp.AM);},AiJ:function(G){A._GetAutoObject(A.Device.Device).Aww(this.AnimalType.Q
);},_Init:function(aArg){C.I2._Init.call(this,aArg);C.TC._Init.call(this.RK={I:this
},0);this.__proto__=C.AMa;var B;this.Jp.Ar(false);this.Jp.Aj(false);this.Jp.Z(false
);this.RK.H(AIA);this.RK.Aj(true);this.RK.Nc(14);this.RK.Ahq(0);this.RK.OM(0);this.
J(this.RK,-4);this.RK.AR=[this,this.AAl];this.RK.At([B=this.AnimalType,B.B_,B.B$
]);this.RK.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I2;this.RK._Done();C.I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(
this);this.RK._ReInit();},_Mark:function(D){var B;C.I2._Mark.call(this,D);if((B=
this.RK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TC={Filter:null,Eq:0,TableId:0,Operator:1,CP:function(){var F;this.Tn((F=this.
Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){var B;C.
BU.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hw.H(AhS
);this.H4.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hw.M[2]-5,this.Hw.M[1]
,this.H4.M[0]+5,this.Hw.M[3]]);this.Dz.AE_((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.
Dz.Gr,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb
],E,0);A.pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tn((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.
Operator));else this.Tn(null);},Ahq:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.
Eq=E;A.pe([this,this.Mb],this);},Tn:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmO(this.TableId,this.Eq));this.Am();},OM:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mb],this);},_Init:function(aArg){C.BU._Init.
call(this,aArg);this.__proto__=C.TC;this.H(KX);this.V.A5(0x11);this.V.Ct(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BU._ReInit.call(this);this.V.Ct(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARL={Gd:null,MP:null,DY:null,Y:null,Ef:null,Cm:null,CG:null,C$:null,Gl:null,
Ee:null,C9:null,BY:null,Ay:null,Breed:null,Jf:null,AnimalType:null,Gender:null,Pk:
null,KW:null,Jd:null,YC:null,Amb:null,KH:0,M2:0,A3E:false,Init:function(aArg){var
B;A.zX([this,this.Bz3],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AII],0);A.zV([
this,this.AtU],this.MP,0);A.zX([this,this.AtU],[B=A._GetAutoObject(A.Device.Device
),B.Awd,B.AyH],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEr
,B.AII],0);A.zV([this,this.GH],this.MP,0);A.zX([this,this.AiJ],this.BY.Q,0);A.pe([
this,this.AiJ],this);A.pe([this,this.Bed],this);A.pe([this,this.AtU],this);A.pe([
this,this.GH],this);A.pe([this,this.A28],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALf],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArD(A.jb.E1);else
this.Ef.ArD(A.jb.Gh);if(A._GetAutoObject(A.Device.Device).AeJ){if(!!(F=this.Cm.Dk
,F[1].call(F[0])))this.Cm.ArD(A.jb.E1);else this.Cm.ArD(A.jb.Gh);}else this.Cm.ArD(
A.jb.Rd);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},LN:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lf())A._GetAutoObject(A.Device.Device
).A6(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gp();A._GetAutoObject(A.Device.Helper).Aqb(A._GetAutoObject(A.
Device.Helper).W);this.Apu();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFf(0);},E4:function(G){C.AB.E4.call(this,G);this.Jd.Ar(false);
A._GetAutoObject(A.Device.Device).Um(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.E5();A._GetAutoObject(C.A$).Fy();},Fj:function(G){var B;this.Ay.
Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},AtU:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALf(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aeg(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter
).Re((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A2X]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A2W],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeJ)this.JF(this.Cm);}var Bds=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeJ||!!(CA=this.Cm.Dk,CA[1].call(CA[0])));if(this.MP.AOy()>0){if((
this.AV===this.Cm)&&Bds)this.Bb(this.Y.TK(this.Cm,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeJ&&(this.AV===this.Cm))&&!!(F=this.Cm.Dk,F[1].call(F[0])))this.
JF(this.Ef);if(Bds)this.Bcf(this);},Adq:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},AiV:function(){var F;this.Gd.Cg(A._GetAutoObject(A.Device.Device).An);
if(this.MP.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);else{var L7=A._GetAutoObject(A.Device.Device).An.LS(0,this.Gd.Id);A._GetAutoObject(
A.Device.Device).SN(L7);var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(
this.Gd.Id);B0.OnSetBodyWeight(this.KH);B0.OnSetTimestamp(this.Gd.DateOfBirth);B0.
Cg(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,this.Gd.Id);A._GetAutoObject(A.Device.Device).SN(L7);var B0=A._NewObject(
A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(this.Gd.Id);B0.OnSetBodyWeight(this.
M2);B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Du());B0.Cg(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).Wx(65280);this.Jd.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFf(F.AvO+1));this.A3E=true;A.pe([this,
this.ALf],this);this.Apu();},GH:function(G){this.Cm.ATg(A._GetAutoObject(A.Device.
Device).AeJ);A._GetAutoObject(A.Device.Helper).JX(this.BY,this.MP.NU(14));A._GetAutoObject(
A.Device.Helper).JX(this.C9,this.MP.NU(23));A._GetAutoObject(A.Device.Helper).JX(
this.CG,this.MP.NU(32));A._GetAutoObject(A.Device.Helper).JX(this.Ee,this.MP.NU(
18));A._GetAutoObject(A.Device.Helper).JX(this.C$,this.MP.NU(7));A._GetAutoObject(
A.Device.Helper).JX(this.Gl,this.MP.NU(34));this.YC.Z(!this.MP.AOy());var O;var Aa=
null;var Apa=this.AV;for(O=0;O<this.MP.AfL.NP();O++){Aa=this.ByW(this.MP.AfL.OC(
O));if(!!Aa)this.ZA(Aa);}this.JF(Apa);A._GetAutoObject(A.Device.Helper).ANk(this.
Y);A.pe([this,this.A28],this);this.Am();},AeT:function(E){if(this.KH===E)return;
this.KH=E;A.abo([this,this.Av1,this.AeT],0);},Ahl:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Anj,this.Ahl],0);},Bcf:function(G){this.Gd.Gp();A._GetAutoObject(
A.Device.Helper).Aqb(this.Gd);this.Gd.Q1(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gd.Nd(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gd.SE(A._GetAutoObject(
A.Device.Helper).AMb(0,this.Gd));this.Gd.Ae1(true);if(this.MP.NU(14))this.Gd.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NU(32))this.Gd.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NU(7))this.Gd.JR(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NU(34))this.Gd.Nf(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alj=A._GetAutoObject(A.Device.Helper).A0_(this.Gd,0,A._GetAutoObject(
A.Device.Device).An);if(!Alj)this.AiV();else A._GetAutoObject(A.Device.Helper).AKb(
this.Gd,Alj,0,0,[this,this.ApA]);},Apu:function(){A._GetAutoObject(A.Device.Helper
).W.Nd(0);if(A._GetAutoObject(A.Device.Device).AeJ)A._GetAutoObject(A.Device.Helper
).W.Q1(0);this.AeT(0);this.Ahl(0);this.JF(this.Ef);this.Am();},ApA:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.Apu();break;case 43:this.JF(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As0,As.Id);}},JF:function(Ag){this.Bb(Ag);this.Y.HH(Ag,true
,null,null);this.Y.Vt(null,null);},Bed:function(G){this.Ee.Aho(A._GetAutoObject(
A.Device.Helper).W.AhR(1));this.AtU(this);},AiJ:function(G){this.C9.Aho(A._GetAutoObject(
A.Device.Helper).Abl(this.AnimalType.Q));},A28:function(G){var B;var BA8=this.Ay.
Background.Fo();var width=(BA8?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xp=this.Y.TK(null,0x401);while(!!Xp&&(((B=Xp)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OU.isPrototypeOf(Xp)?Xp:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xp=this.Y.TK(Xp,0x1);}},ByW:function(Aac){var Aa=null;switch(Aac){case 14:Aa=
this.BY;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gl;break;default:A.ab5("%s%e",Bs7
,Aac);}return Aa;},Bz3:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeJ
)A._GetAutoObject(A.Device.Helper).W.Q1(0);else if(!(F=this.Cm.Dk,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q1(A._GetAutoObject(A.Device.Helper).Du()-
A._GetAutoObject(A.Device.Helper).AmA(A._GetAutoObject(A.Device.Device).AdN));this.
AtU(this);},ALf:function(G){var B;var AKe=A.jV;var Ay4=A.jb.CJ;var Bcw=A.jb.AV;this.
Amb.Axz(this);if(this.A3E){this.A3E=false;AKe=A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.BoK),P9,A._GetAutoObject(A.Device.Converter).Re(this.Gd.NaisId));
A.pe([B=this.Amb,B.StartTimer],this);Ay4=A.jb.E1;Bcw=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKe=A.aaR(A.acf.Bn1);else if((
this.AV===this.Cm)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKe=A.aaR(A.
acf.Bn0);this.YC.T(AKe);this.YC.Blh(Ay4);this.YC.Bli(Bcw);},A2X:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajv();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajv();else if(As.PopupState===7){A._GetAutoObject(C.A$).Cf(76);
A._GetAutoObject(A.Device.Device).Ajv();}}}else A._GetAutoObject(A.Device.Device
).Ajv();},A2W:function(G){A._GetAutoObject(A.Device.Device).AuH();},DJ:function(
G){var B;if(!this.MP.AOy()){this.N.Lc.Dj(255);if(this.AV===this.Ef){this.N.C5(A.
aaL(A.ach.Edit));this.N.Co=[B=this.Ef,B.FU];}else if(this.AV===this.Cm){this.N.C5(
A.aaL(A.ach.Edit));this.N.Co=[B=this.Cm,B.FU];}else{this.N.C5(null);this.N.Co=null;
}}else{this.N.C5(A.aaL(A.ach.AmV));if((this.Ef.Aqo===A.jb.Gh)||(this.Cm.Aqo===A.
jb.Gh)){this.N.Lc.Dj(100);this.N.Co=null;}else{this.N.Lc.Dj(255);this.N.Co=[this
,this.Bcf];}}},Av1:function(){return this.KH;},Anj:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUp._Init.call(this.Ef={I:this},0);C.
AUl._Init.call(this.Cm={I:this},0);C.Axo._Init.call(this.CG={I:this},0);C.BU._Init.
call(this.C$={I:this},0);C.Asr._Init.call(this.Gl={I:this},0);C.AkO._Init.call(this.
Ee={I:this},0);C.AkO._Init.call(this.C9={I:this},0);C.BU._Init.call(this.BY={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UL._Init.call(this.Jf={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pk={I:this},0);A.Device.KW._Init.call(this.KW={I:this},0);A.Device.TD._Init.call(
this.Jd={I:this},0);C.AUV._Init.call(this.YC={I:this},0);A.Core.Timer._Init.call(
this.Amb={I:this},0);this.__proto__=C.ARL;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dq(C.APe);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.
L(A.jb.CJ);this.Y.H(Fe);this.Y.JQ(9);this.Ef.H(AIA);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACu));this.Ef.ATg(true);this.Ef.AFy(false);this.Cm.H(A$8);this.Cm.Aj(true
);this.Cm.T(A.aaR(A.acf.Aea));this.Cm.ATg(true);this.Cm.AFs(true);this.CG.H(AsZ);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(AsZ);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afj));this.Gl.H(A$9);this.Gl.Aj(true);this.Gl.T(A.aaR(A.acf.Jf)
);this.Ee.H(Bs8);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.F$(1000);this.
Ee.EU(999000);this.Ee.Aho(A._GetAutoObject(A.Device.Helper).Abl(this.AnimalType.
Q));this.C9.H(A$9);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KH));this.C9.F$(1000);
this.C9.EU(99000);this.C9.Aho(A._GetAutoObject(A.Device.Helper).Abl(this.AnimalType.
Q));this.BY.H(AsY);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.Afo));this.Ay.H(Is);this.
Jd.B1=false;this.Jd.Cw=true;this.Jd.HM(1);this.Jd.Fp(1000);this.Jd.Uj(0);this.YC.
H(Z$);this.YC.Aj(true);this.YC.ArD(A.jb.Text);this.Amb.PQ(3000);this.J(this.DY,0
);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cm,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gl,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BY,
0);this.J(this.Ay,0);this.J(this.YC,0);this.N.CE=[this,this.Ev];this.N.Ck=[this,
this.Adq];this.N.C1(A.aaL(A.ach.E2));this.N.Cv(A.aaL(A.ach.Aex));this.Y.El=[this
,this.Fj];this.Ef.Gq([this,this.D_,this.GQ]);this.Ef.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Anm,B.Nd]);this.Ef.AE5([this,this.AtU]);this.Ef.AS5([this,this.A2W]);
this.Ef.AS6([this,this.A2X]);this.Cm.Gq([this,this.D_,this.GQ]);this.Cm.Ab2([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av4,B.Q1]);this.Cm.OE=[this,this.Bed];this.Cm.
AS5([this,this.A2W]);this.Cm.AS6([this,this.A2X]);this.CG.Gq([this,this.D_,this.
GQ]);this.CG.LX([B=this.CG,B.FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.
Breed,B.B_,B.B$]);this.CG.CK(this.Breed);this.CG.Anq(this.Pk);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.Gl.Gq([this,this.D_,this.GQ]);this.
Gl.LX([B=this.Gl,B.FU]);this.Gl.L0(A.aaL(A.ach.Edit));this.Gl.At([B=this.Jf,B.B_
,B.B$]);this.Gl.CK(this.Jf);this.Gl.Anq(this.KW);this.Ee.At([this,this.Anj,this.
Ahl]);this.C9.At([this,this.Av1,this.AeT]);this.BY.At([B=this.AnimalType,B.B_,B.
B$]);this.BY.CK(this.AnimalType);this.Ay.BmD([this,this.A28]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jf.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Gd=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amj
);this.Jd.Q=[B=A._GetAutoObject(A.Device.Device),B.ASx,B.AZ0];this.Amb.Mz=[this,
this.ALf];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cm._Done();this.CG._Done();this.C$._Done();this.
Gl._Done();this.Ee._Done();this.C9._Done();this.BY._Done();this.Ay._Done();this.
Breed._Done();this.Jf._Done();this.AnimalType._Done();this.Gender._Done();this.Pk.
_Done();this.KW._Done();this.Jd._Done();this.YC._Done();this.Amb._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cm._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gl._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BY._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jf._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pk._ReInit();this.KW._ReInit();this.Jd._ReInit();this.YC._ReInit(
);this.Amb._ReInit();this.Ef.T(A.aaR(A.acf.ACu));this.Cm.T(A.aaR(A.acf.Aea));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afj));this.Gl.T(A.aaR(A.acf.Jf));
this.Ee.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KH));this.BY.T(A.aaR(A.acf.Afo)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gd)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asq={Ze:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Ze={
I:this},0);this.__proto__=C.Asq;this.N.CX(A.acf.BhO);this.Number.H(Bs9);this.Je.
H(Bs_);this.IR.H(Bs$);this.Akz(2);this.Bcc=false;this.Bdh=true;this.Bdi=false;this.
Ze.H(Bta);this.Ze.KQ(true);this.Ze.R(A.aaR(A.acf.A_2));this.Ze.L(A.jb.Text);this.
J(this.Ze,0);this.N.CE=null;this.N.Co=[this,this.AIP];this.N.C1(null);this.Ze.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Ze.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Ze._ReInit();this.Ze.R(A.aaR(A.acf.A_2));this.Ze.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADG={Cs:null,FM:function(E){if(this.M4===E)return;C.HJ.FM.call(this,E);this.
Cs.CT(E);},Yl:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;
case 1:B5=this.Cs;break;case 2:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Cs={I:this
},0);this.__proto__=C.ADG;this.H(Btb);this.Cs.H(A$L);this.FZ.H(Btc);this.J(this.
Cs,-2);this.Cs.Di=[this,this.GU];},_Done:function(){this.__proto__=C.HJ;this.Cs.
_Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.call(this);this.
Cs._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Cs)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asr={G3:null
,Bl:function(aSize){C.OR.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G3.M[0
]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hj)this.G3.FM(A.jb.CJ);else this.
G3.FM(A.jb.CS);},A1J:function(){this.Bb(this.G3);},_Init:function(aArg){C.OR._Init.
call(this,aArg);C.HJ._Init.call(this.G3={I:this},0);this.__proto__=C.Asr;this.G3.
H(Btd);this.J(this.G3,0);this.G3.At([this,this.ASn,this.AFm]);},_Done:function(){
this.__proto__=C.OR;this.G3._Done();C.OR._Done.call(this);},_ReInit:function(){C.
OR._ReInit.call(this);this.G3._ReInit();},_Mark:function(D){var B;C.OR._Mark.call(
this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axo={G3:null,Bl:function(aSize){C.OR.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G3.M[0]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hj)this.G3.FM(
A.jb.CJ);else this.G3.FM(A.jb.CS);},A1J:function(){this.Bb(this.G3);},_Init:function(
aArg){C.OR._Init.call(this,aArg);C.ADG._Init.call(this.G3={I:this},0);this.__proto__=
C.Axo;this.G3.AZ(0x18);this.G3.H(Bte);this.J(this.G3,0);this.G3.At([this,this.ASn
,this.AFm]);},_Done:function(){this.__proto__=C.OR;this.G3._Done();C.OR._Done.call(
this);},_ReInit:function(){C.OR._ReInit.call(this);this.G3._ReInit();},_Mark:function(
D){var B;C.OR._Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acm={ScreenTypeToString:
null,Dt:function(){return 4;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BR(this.C7(aIndex));},_Init:function(aArg){C.Cl.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acm;this.Cb.Set(0,3);this.Cb.Set(1,35);this.Cb.Set(2
,34);this.Cb.Set(3,43);},_Done:function(){this.__proto__=C.Cl;this.ScreenTypeToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVE={A12:false,Wu:function(G){this.Agr();A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.
Settings),[this,this.A3b]);A._GetAutoObject(C.B4).Gu();this.ALZ();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.ARc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},CC:function(G){C.RJ.CC.call(this,G);if(this.A12){this.A12=
false;A.pe([this,this.AZ6],this);}},Abn:function(){return C.ABY;},Abo:function(){
return C.ADf;},Q5:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6w(Math.max(A._GetAutoObject(A.Device.Device).AvQ,A._GetAutoObject(
A.Device.Helper).A6o(A._GetAutoObject(A.Device.Device).An))+1));},HO:function(G){
C.RJ.HO.call(this,G);if(this.Akb()===false){this.N.Cv(A.aaL(A.ach.Avo));this.N.Ck=[
this,this.ANP];this.N.FN(A.jV);}this.N.ON(false);this.N.OO(false);},Agd:function(
){A._GetAutoObject(C.A$).Cf(86);},AAT:function(G){var aFilter=A._GetAutoObject(A.
Device.Device).An.Filter.E_();var AyS=aFilter.DL(26,4);if(!!AyS){aFilter.Ni(AyS);
A._GetAutoObject(A.Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},A6m:
function(){return C.APl;},Bfn:function(){var B;var Filter;var FilterCriterion;if(
!!A._GetAutoObject(A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.
Device).An.Filter.E_();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},A3b:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A12=true;A._GetAutoObject(C.A$).Cf(89);},_Init:function(aArg){C.RJ.
_Init.call(this,aArg);this.__proto__=C.AVE;this.Dq(C.AC8);this.Dv(A.aaR(A.acf.A7I
));this.AS1(A._GetAutoObject(C.AxU));},_ReInit:function(){C.RJ._ReInit.call(this
);this.Dv(A.aaR(A.acf.A7I));},_className:"Application::YoungNoTransponderListScreen"
};C.AVD={_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=C.AVD;this.
KU.Ar(false);this.KU.Aj(false);this.KU.Z(false);this.Bmd(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQS={So:null,Q:null,A7E:0,M4:0,Init:function(aArg){this.AS4(6);},At:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.So)this.So.At(E);},AS4:function(
E){if(this.A7E===E)return;this.A7E=E;var X;switch(E){case 2:X=A._NewObject(C.HJ,
0);break;case 3:X=A._NewObject(C.ADG,0);break;case 4:X=A._NewObject(C.AQP,0);break;
case 5:X=A._NewObject(C.AQQ,0);break;case 6:X=A._NewObject(C.AvH,0);break;default:{
X=null;A.ab5("%s%i",Btf,E);}}this.Bmc(X);},Bmc:function(E){if(this.So===E)return;
if(!!this.So){this.So.At(null);this.HN(this.So);}this.So=E;if(!!this.So){this.So.
At(this.Q);this.J(this.So,0);}},FM:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.So)this.So.FM(E);},SM:function(Gz){if(!!this.So)this.So.SM(Gz);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQS;this.H(Ayc);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.So)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQP={CU:null,Cs:null,FM:function(
E){if(this.M4===E)return;C.HJ.FM.call(this,E);this.Cs.CT(E);this.CU.CT(E);},Yl:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.Cs;break;
case 2:B5=this.CU;break;case 3:B5=this.G0;break;default:A.ab5("%s",AhY);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Cs={I:this},0);this.__proto__=C.AQP;this.H(Btg);this.G0.
H(As9);this.CU.H(A$M);this.Cs.H(A$N);this.FZ.H(A$O);this.J(this.CU,-2);this.J(this.
Cs,-2);this.CU.Di=[this,this.GU];this.Cs.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HJ;this.CU._Done();this.Cs._Done();C.HJ._Done.call(this);},_ReInit:function(
){C.HJ._ReInit.call(this);this.CU._ReInit();this.Cs._ReInit();},_Mark:function(D
){var B;C.HJ._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACD={SZ:null,Ai:function(Ae){C.Abk.Ai.call(this,Ae);this.SZ.L(this.V.AQ);},_Init:
function(aArg){C.Abk._Init.call(this,aArg);C.CH._Init.call(this.SZ={I:this},0);this.
__proto__=C.ACD;this.V.Z(false);this.AW.H(Bth);this.AW.AS4(4);this.SZ.H(Bti);this.
SZ.R(A.aaR(A.acf.Kj));this.SZ.L(A.jb.Bm);this.J(this.SZ,0);this.SZ.S(A.aaL(A.fl.
Af));this.SZ.A2(A.aaL(A.fl.Ak));this.SZ.Ct(null);},_Done:function(){this.__proto__=
C.Abk;this.SZ._Done();C.Abk._Done.call(this);},_ReInit:function(){C.Abk._ReInit.
call(this);this.SZ._ReInit();this.SZ.R(A.aaR(A.acf.Kj));this.SZ.S(A.aaL(A.fl.Af)
);this.SZ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abk._Mark.call(this,D);
if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={YU:null,T3:null,AQ:0,A6W:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YU.L(this.AQ);this.T3.L(this.AQ);},A9F:function(E){var B;if(this.A6W===
E)return;this.A6W=E;if(E){this.YU.Z(true);this.T3.DC([this.T3.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YU.Z(false);this.T3.DC([this.T3.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C4._Init.call(
this.YU={I:this},0);A.acg.C4._Init.call(this.T3={I:this},0);this.__proto__=C.LW;
this.H(AZG);this.YU.AZ(0x2D);this.YU.DC(AhU);this.YU.DM(A$_);this.YU.L(A.jb.Text
);this.T3.AZ(0x36);this.T3.DC(A$_);this.T3.DM(Btj);this.T3.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YU,0);this.J(this.T3,0);},_Done:function(){this.__proto__=
A.Core.P;this.YU._Done();this.T3._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YU._ReInit();this.T3._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AT5={St:null,PA:null,C$:null,BY:null,CG:null,GP:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pk:null,UL:null,KW:null,Init:function(aArg){A.zX([this
,this.AuB],this.BY.Q,0);A.zX([this,this.AMS],this.CG.Q,0);A.zX([this,this.Bp6],this.
St.Q,0);A.zX([this,this.Ave],this.C$.Q,0);A.zX([this,this.AVA],this.GP.Q,0);},AuB:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BY.Q,F[1].call(F[
0])));},Bp6:function(G){var F;A._GetAutoObject(A.Device.Device).Aw7((F=this.St.Q
,F[1].call(F[0])));},Ave:function(G){var F;A._GetAutoObject(A.Device.Device).JR((
F=this.C$.Q,F[1].call(F[0])));},AVA:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},AMS:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BU._Init.call(this.St={I:this},0);C.Iq._Init.call(this.PA={I:this
},0);C.BU._Init.call(this.C$={I:this},0);C.BU._Init.call(this.BY={I:this},0);C.Axo.
_Init.call(this.CG={I:this},0);C.Asr._Init.call(this.GP={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pk={I:this},0);C.UL._Init.call(this.UL={I:
this},0);A.Device.KW._Init.call(this.KW={I:this},0);this.__proto__=C.AT5;var B;this.
I_((A.aaR(A.acf.Asd)+Ayn)+A.aaR(A.acf.AjA));this.St.H(AhX);this.St.Aj(true);this.
St.T(A.aaR(A.acf.A$z));this.St.Bi(true);this.St.Bx(0);this.PA.H(Aya);this.PA.Aj(
true);this.PA.Z(true);this.PA.T(A.aaR(A.acf.AdN));this.PA.F$(0);this.PA.EU(99);this.
PA.IO(A.aaR(A.acf.Kj));this.PA.I$(A.aaR(A.acf.GK));this.C$.H(Z$);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afj));this.C$.Bi(true);this.C$.Bx(0);this.BY.H(Ak$);this.
BY.Aj(true);this.BY.T(A.aaR(A.acf.Afo));this.BY.Bi(true);this.BY.Bx(0);this.CG.H(
AcL);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bi(false);this.GP.H(
AcL);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jf));this.GP.Bi(true);this.AnimalType.
At(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.At(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.At(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.Device).Breed);
this.UL.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.St,0);this.
J(this.PA,0);this.J(this.C$,0);this.J(this.BY,0);this.J(this.CG,0);this.J(this.GP
,0);this.St.At([B=this.WeightRecordingScope,B.B_,B.B$]);this.St.CK(this.WeightRecordingScope
);this.PA.At([B=A._GetAutoObject(A.Device.Device),B.A7Y,B.Bav]);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.BY.At([B=this.AnimalType,B.B_,B.
B$]);this.BY.CK(this.AnimalType);this.CG.Gq([this,this.D_,this.GQ]);this.CG.LX([
B=this.CG,B.FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$
]);this.CG.CK(this.Breed);this.CG.Anq(this.Pk);this.GP.Gq([this,this.D_,this.GQ]
);this.GP.LX([B=this.GP,B.FU]);this.GP.L0(A.aaL(A.ach.Edit));this.GP.At([B=this.
UL,B.B_,B.B$]);this.GP.CK(this.UL);this.GP.Anq(this.KW);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cd;this.St._Done();this.PA._Done();this.C$._Done();this.
BY._Done();this.CG._Done();this.GP._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pk._Done();this.UL._Done();this.
KW._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
St._ReInit();this.PA._ReInit();this.C$._ReInit();this.BY._ReInit();this.CG._ReInit(
);this.GP._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pk._ReInit();this.UL._ReInit();
this.KW._ReInit();this.I_((A.aaR(A.acf.Asd)+Ayn)+A.aaR(A.acf.AjA));this.St.T(A.aaR(
A.acf.A$z));this.PA.T(A.aaR(A.acf.AdN));this.PA.IO(A.aaR(A.acf.Kj));this.PA.I$(A.
aaR(A.acf.GK));this.C$.T(A.aaR(A.acf.Afj));this.BY.T(A.aaR(A.acf.Afo));this.CG.T(
A.aaR(A.acf.Breed));this.GP.T(A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.Cd._Mark.
call(this,D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AT4={QL:null,FA:null,Im:null,C_:null,Dl:null,EL:null,AutoRegistrationMode:null
,AdQ:null,Init:function(aArg){var B;A.zX([this,this.BgM],this.QL.Q,0);A.zX([this
,this.Bd0],[B=A._GetAutoObject(A.Device.Device),B.AR9,B.AZM],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Uf,B.UZ],0);A.pe([this,this.Bd0],this);A.pe([
this,this.Adr],this);},BgM:function(G){var F;A._GetAutoObject(A.Device.Device).Awk((
F=this.QL.Q,F[1].call(F[0])));},Bd0:function(G){switch(A._GetAutoObject(A.Device.
Device).Agu){case 0:A._GetAutoObject(A.Device.Helper).JX(this.Im,true);break;case
1:A._GetAutoObject(A.Device.Helper).JX(this.Im,false);break;default:throw new Error(
Btk+A._GetAutoObject(A.Device.Device).Agu.toFixed());}},Adr:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.
Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.BU._Init.call(this.QL={I:this},0);C.BU._Init.call(this.
FA={I:this},0);C.AGu._Init.call(this.Im={I:this},0);C.Iq._Init.call(this.C_={I:this
},0);C.Iq._Init.call(this.Dl={I:this},0);C.AvR._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdQ._Init.
call(this.AdQ={I:this},0);this.__proto__=C.AT4;var B;this.I_(A.aaR(A.acf.Aqf));this.
QL.H(AIA);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.Aqf));this.QL.Bi(false);this.QL.
F$(-1);this.QL.EU(1);this.FA.H(UV);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.
aaR(A.acf.Aqc));this.FA.Bi(true);this.Im.H(Z$);this.Im.Aj(true);this.Im.Z(true);
this.Im.T(A.aaR(A.acf.AEb));this.Im.Bi(true);this.C_.H(Ak$);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.Aqx));this.C_.Bi(false);this.C_.F$(2);this.C_.EU(
6);this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dl.H(AcL);this.Dl.
Aj(true);this.Dl.T(A.aaR(A.acf.Zg));this.Dl.Bi(true);this.Dl.F$(0);this.Dl.EU(12
);this.Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(A.acf.Ey));this.EL.H(Btl);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.ArT(A.aaR(A.acf.Aqe));this.AutoRegistrationMode.
At(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QL,0);this.
J(this.FA,0);this.J(this.Im,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL
,0);this.QL.At([B=this.AutoRegistrationMode,B.B_,B.B$]);this.QL.CK(this.AutoRegistrationMode
);this.FA.At([B=this.AdQ,B.B_,B.B$]);this.FA.CK(this.AdQ);this.Im.Ui([B=A._GetAutoObject(
A.Device.Device),B.Ws,B.AZP]);this.Im.Akq([B=A._GetAutoObject(A.Device.Device),B.
Av6,B.AyB]);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY]);this.Dl.
At([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.EL.DB(A.aaL(A.ach.AjR));
this.EL.OL([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY]);this.EL.PP([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.QL._Done();this.FA._Done();this.Im._Done();this.C_._Done();this.Dl._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdQ._Done();C.Cd._Done.
call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.QL._ReInit();this.FA.
_ReInit();this.Im._ReInit();this.C_._ReInit();this.Dl._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdQ._ReInit();this.I_(A.aaR(A.acf.Aqf
));this.QL.T(A.aaR(A.acf.Aqf));this.FA.T(A.aaR(A.acf.Aqc));this.Im.T(A.aaR(A.acf.
AEb));this.C_.T(A.aaR(A.acf.Aqx));this.C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.
acf.Ey));this.Dl.T(A.aaR(A.acf.Zg));this.Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(
A.acf.Ey));this.EL.ArT(A.aaR(A.acf.Aqe));},_Mark:function(D){var B;C.Cd._Mark.call(
this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FA)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AU8={OF:null,FA:null,Im:null,C_:null,Dl:null,EL:null,Afn:null,Init:function(
aArg){var B;A.zX([this,this.BeE],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ2
],0);A.zX([this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY],0);A.zX([
this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ],0);A.pe([this,this.
BeE],this);A.pe([this,this.Adr],this);},BeE:function(G){var AKV=false;var AaI=false;
switch(A._GetAutoObject(A.Device.Device).AkY){case 0:{AKV=false;AaI=false;}break;
case 1:{AKV=true;AaI=false;}break;case 2:{AKV=false;AaI=true;}break;default:throw new
Error(Btm+A._GetAutoObject(A.Device.Device).AkY.toFixed());}A._GetAutoObject(A.Device.
Helper).JX(this.Im,AKV);A._GetAutoObject(A.Device.Helper).JX(this.C_,AaI);A._GetAutoObject(
A.Device.Helper).JX(this.Dl,AaI);A._GetAutoObject(A.Device.Helper).JX(this.EL,AaI
);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[
1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Iq._Init.call(this.OF={
I:this},0);C.BU._Init.call(this.FA={I:this},0);C.AGu._Init.call(this.Im={I:this}
,0);C.Iq._Init.call(this.C_={I:this},0);C.Iq._Init.call(this.Dl={I:this},0);C.AvR.
_Init.call(this.EL={I:this},0);C.Afn._Init.call(this.Afn={I:this},0);this.__proto__=
C.AU8;var B;this.I_(A.aaR(A.acf.LinkTransponder));this.OF.H(AIA);this.OF.Aj(true
);this.OF.Z(true);this.OF.T(A.aaR(A.acf.A7d));this.OF.Bi(false);this.OF.F$(1);this.
OF.EU(365);this.OF.IO(A.aaR(A.acf.Kj));this.OF.I$(A.aaR(A.acf.GK));this.FA.H(UV);
this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqc));this.FA.Bi(true);this.
Im.H(Z$);this.Im.Aj(true);this.Im.Z(true);this.Im.T(A.aaR(A.acf.AEb));this.Im.Bi(
false);this.C_.H(Ak$);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.Aqx
));this.C_.Bi(false);this.C_.F$(2);this.C_.EU(6);this.C_.IO(A.aaR(A.acf.OA));this.
C_.I$(A.aaR(A.acf.Ey));this.Dl.H(AcL);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.Zg)
);this.Dl.Bi(true);this.Dl.F$(0);this.Dl.EU(12);this.Dl.IO(A.aaR(A.acf.OA));this.
Dl.I$(A.aaR(A.acf.Ey));this.EL.H(Aye);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.ArT(A.aaR(A.acf.Aqe));this.J(this.OF,0);this.J(this.FA,0);this.
J(this.Im,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL,0);this.OF.At([B=
A._GetAutoObject(A.Device.Device),B.A8r,B.BaL]);this.FA.At([B=this.Afn,B.B_,B.B$
]);this.FA.CK(this.Afn);this.Im.Ui([B=A._GetAutoObject(A.Device.Device),B.Ws,B.AZP
]);this.Im.Akq([B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyB]);this.C_.At([B=
A._GetAutoObject(A.Device.Device),B.Ue,B.UY]);this.Dl.At([B=A._GetAutoObject(A.Device.
Device),B.Uf,B.UZ]);this.EL.DB(A.aaL(A.ach.AjR));this.EL.OL([B=A._GetAutoObject(
A.Device.Device),B.Ue,B.UY]);this.EL.PP([B=A._GetAutoObject(A.Device.Device),B.Uf
,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.OF._Done();this.
FA._Done();this.Im._Done();this.C_._Done();this.Dl._Done();this.EL._Done();this.
Afn._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
OF._ReInit();this.FA._ReInit();this.Im._ReInit();this.C_._ReInit();this.Dl._ReInit(
);this.EL._ReInit();this.Afn._ReInit();this.I_(A.aaR(A.acf.LinkTransponder));this.
OF.T(A.aaR(A.acf.A7d));this.OF.IO(A.aaR(A.acf.Kj));this.OF.I$(A.aaR(A.acf.GK));this.
FA.T(A.aaR(A.acf.Aqc));this.Im.T(A.aaR(A.acf.AEb));this.C_.T(A.aaR(A.acf.Aqx));this.
C_.IO(A.aaR(A.acf.OA));this.C_.I$(A.aaR(A.acf.Ey));this.Dl.T(A.aaR(A.acf.Zg));this.
Dl.IO(A.aaR(A.acf.OA));this.Dl.I$(A.aaR(A.acf.Ey));this.EL.ArT(A.aaR(A.acf.Aqe));
},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Im)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afn={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bf2],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ2],0);A.pe([
this,this.Bf2],this);},Dt:function(){return 3;},Gj:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BR(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw3(E);},Bf2:function(G){this.Q=A._GetAutoObject(A.Device.Device).AkY;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afn;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cl;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cl.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jb={B6:null,IU:null,Cq:null,Amr:null,Sb:null,And:null,Ajx:null,Text:null,CW:
null,D6:0,Lz:false,Ai:function(Ae){var B;A.acn.Jb.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IU.Ar(true);else{this.IU.Ar(false);this.CW.Z(false);}},A38:function(G
){var B;var Bd=this.Text.M;var Nu=0;var Nv=0;if(this.CW.Es[0]<Bd[0])Nu=Bd[0]-this.
CW.Es[0];if(this.CW.Es[0]>Bd[2])Nu=Bd[2]-this.CW.Es[0];if(this.CW.Es[1]<Bd[1])Nv=
Bd[1]-this.CW.Es[1];if(this.CW.EC[1]>Bd[3])Nv=Bd[3]-this.CW.EC[1];if(!!Nu||!!Nv)
this.Text.Ga(A.abf(this.Text.Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];
var C3=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]
))Nu=0;if(C3[1]<=((B=this.Text.M)[3]-B[1]))Nv=0;this.Text.Ga([Nu,Nv]);},Ame:function(
G){if(!this.B6)return;var A3A=this.Text.AGH(this.D6);var pos=this.Text.Afc(A3A);
this.CW.DM(A.abe(pos,[0,this.B6.Ascent]));this.CW.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IU.Bw){this.IU.Ar(false);this.IU.Ar(true);}if(this.Lz){A.pe([this,this.
A38],this);this.Lz=false;}},AAp:function(G){if(!this.B6)return;var EH=this.Text.
AGH(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnK(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ACU(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnK(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Afc(EH);var AaH=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATH(A.abe(pos,[0,AaH]));}if(this.Cq.CO===5
){var pos=this.Text.Afc(EH);var AaH=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATH(A.abf(pos,[0,AaH]));}var Vc=this.Text.AnK(EH);var Iw=this.Text.
String.charCodeAt(Vc)||0;if(((Iw===0x5E)||(Iw===0x7E))||(Iw===0x25))Vc=Vc-1;if(Vc
!==this.D6){this.D6=Vc;A.pe([this,this.Ame],this);this.Lz=true;}},Bd9:function(G
){if(!this.D6)return;var Iw=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iw===0x5E)||(Iw===0x7E))||(Iw===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.Lz=true;},AAq:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iw=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iw===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.Lz=true;}
,Bel:function(G){this.Text.R(A.abU(this.Text.String,Btn,this.D6));this.D6=this.D6+
1;this.Lz=true;},Bd$:function(G){var Iw=this.Ajx.DQ;var Aud=String.fromCharCode(
Iw);A.ab5("%c",Iw);if((((Iw===0x5E)||(Iw===0x7E))||(Iw===0xAD))||(Iw===0x25))Aud=
Bto+String.fromCharCode(Iw);this.Text.R(A.abU(this.Text.String,Aud,this.D6));this.
D6=this.D6+Aud.length;this.Lz=true;},_Init:function(aArg){A.acn.Jb._Init.call(this
,aArg);A.acl.TD._Init.call(this.IU={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.Amr={I:this},0);A.Core.BK._Init.call(this.Sb={I:this
},0);A.Core.BK._Init.call(this.And={I:this},0);A.Core.BK._Init.call(this.Ajx={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C4._Init.call(this.CW={
I:this},0);this.__proto__=C.Jb;var B;this.H(Btp);this.IU.B1=false;this.IU.Cw=true;
this.IU.Fp(500);this.IU.Uj(500);this.Cq.Filter=147;this.Cq.Bw=false;this.Amr.Filter=
151;this.Sb.Filter=44;this.And.Filter=149;this.Ajx.Filter=145;this.Text.AZ(0x3F);
this.Text.H(Btq);this.Text.KQ(true);this.Text.A5(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CW.DC(Btr);this.CW.DM(Bts);this.CW.A_g(2);this.CW.A_f(2);this.
CW.L(0xFF000000);this.CW.Z(false);this.J(this.Text,0);this.J(this.CW,0);this.IU.
Q=[B=this.CW,B.Fo,B.Z];this.Cq.BL=[this,this.AAp];this.Cq.D1=[this,this.AAp];this.
Amr.BL=[this,this.Bd9];this.Amr.D1=[this,this.Bd9];this.Sb.BL=[this,this.AAq];this.
Sb.D1=[this,this.AAq];this.And.BL=[this,this.Bel];this.And.D1=[this,this.Bel];this.
Ajx.BL=[this,this.Bd$];this.Ajx.D1=[this,this.Bd$];this.Text.Q2([this,this.Ame]);
this.Text.S(A.aaL(A.aci.ACH));this.B6=A.aaL(A.aci.ACH);},_Done:function(){this.__proto__=
A.acn.Jb;this.IU._Done();this.Cq._Done();this.Amr._Done();this.Sb._Done();this.And.
_Done();this.Ajx._Done();this.Text._Done();this.CW._Done();A.acn.Jb._Done.call(this
);},_ReInit:function(){A.acn.Jb._ReInit.call(this);this.IU._ReInit();this.Cq._ReInit(
);this.Amr._ReInit();this.Sb._ReInit();this.And._ReInit();this.Ajx._ReInit();this.
Text._ReInit();this.CW._ReInit();},_Mark:function(D){var B;A.acn.Jb._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amr)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AUW={Jb:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuH();break;case 7:
A._GetAutoObject(A.Device.Device).Aqg();break;case 4:A._GetAutoObject(A.Device.Device
).Ajv();break;case 5:A._GetAutoObject(A.Device.Device).Aqh();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A$).Fy();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jb._Init.call(this.Jb={I:this},0);this.__proto__=C.AUW;this.H(Cc);this.
N.Z(true);this.Dq(C.AqT);this.Jb.H(Fe);this.J(this.Jb,0);this.Bb(this.Jb);this.N.
CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jb._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jb._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATO={Wu:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){A._GetAutoObject(
C.B4).Tt(A.aaR(A.acf.AB3),[this,this.Bal]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).Tt(A.aaR(A.acf.AG0),[this,this.A7P]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).Tt(A.aaR(A.acf.A5c),[this,this.Bak]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).Tt(A.aaR(A.acf.UnlinkTransponder),[this,this.Bng]);}else{A._GetAutoObject(
C.B4).AaP(A.aaR(A.acf.AB3));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).AaP(
A.aaR(A.acf.AG0));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).AaP(A.aaR(A.
acf.A5c));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).AaP(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.A5A)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.
A5S));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Am$)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abn:function(){return C.
ABZ;},Abo:function(){return C.ADd;},Q5:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avh());},HO:function(G){C.AkI.HO.call(
this,G);this.N.Cv(null);this.N.FN(A.aaR(A.acf.A46));if(this.AJx()){this.N.Ck=[this
,this.AIB];this.N.Jx.Dj(255);}else{this.N.Ck=null;this.N.Jx.Dj(100);}this.N.C5(A.
aaL(A.ach.Options));this.N.CX(A.jV);this.N.ON(false);this.N.OO(false);this.N.I6.
Dj(255);},AR1:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiS=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A6(96,true,AiS.toFixed(),0,null);},AR2:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A5I(this);},AR7:function(G){var B;A._GetAutoObject(A.Device.Device).
Dw(0);if(!A._GetAutoObject(A.Device.Device).SI){A._GetAutoObject(A.Device.Device
).A6(73,true,A.jV,0,[this,this.Ben]);return;}if(A._GetAutoObject(A.Device.Device
).Aq_()===false){A.zX([this,this.Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.
Xb],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,this.Agc]);return;
}A.zX([this,this.AlS],[B=A._GetAutoObject(A.Device.Device).GC,B.Sz,B.Fb],0);A._GetAutoObject(
A.Device.Device).Asg(2);},AJx:function(){if(!this.Bg)return false;var Aty=this.Bg.
AX;if(!Aty)return false;if(!Aty.B9())return false;return true;},AlS:function(G){
var B;switch(A._GetAutoObject(A.Device.Device).GC.EV){case 0:A.z$([this,this.AlS
],[B=A._GetAutoObject(A.Device.Device).GC,B.Sz,B.Fb],0);break;case 3:{A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(A.Device.
Converter).WV(A._GetAutoObject(A.Device.Device).SI)===10){this.Dv(Btt);this.Bg.Pt.
S(A.aaL(A.fl.Bh));}else this.Dv(A.aaR(A.acf.Bnw));A._GetAutoObject(A.Device.Device
).Aqv();}break;case 4:{A._GetAutoObject(A.Device.Device).A6(97,true,A.jV,0,null);
A._GetAutoObject(A.Device.Device).GC.E5();}break;default:;}A.ab5("%e",A._GetAutoObject(
A.Device.Device).GC.EV);},_Init:function(aArg){C.AkI._Init.call(this,aArg);this.
__proto__=C.ATO;this.Dq(C.APh);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADd={Py:null,I5:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Py={I:this},0);A.acg.Ap._Init.call(this.I5={I:this},0);this.__proto__=
C.ADd;this.Er.Z(false);this.DS.Z(false);this.Py.H(Btu);this.Py.L(A.jb.Text);this.
I5.H(Btv);this.I5.L(A.jb.Text);this.J(this.Py,0);this.J(this.I5,0);this.Py.Aw(A.
aaL(A.ach.Avw));this.I5.Aw(A.aaL(A.ach.Avr));},_Done:function(){this.__proto__=C.
Dc;this.Py._Done();this.I5._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Py._ReInit();this.I5._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMN={Init:function(aArg){var B;A.zX([this,this.AAt],[B=A._GetAutoObject(A.Device.
Device),B.AEn,B.AIF],0);A.pe([this,this.AAt],this);},Wu:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.AJx())A._GetAutoObject(C.B4).Tt(A.aaR(
A.acf.AOb),[this,this.AIB]);else A._GetAutoObject(C.B4).AaP(A.aaR(A.acf.AOb));A.
_GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.AB1),[this,this.
Bal]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.AG0),[this
,this.A7P]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).Tt(A.aaR(A.acf.A5b
),[this,this.Bak]);}else{A._GetAutoObject(C.B4).AaP(A.aaR(A.acf.AOb));A._GetAutoObject(
C.B4).Gu();A._GetAutoObject(C.B4).AaP(A.aaR(A.acf.AB1));A._GetAutoObject(C.B4).Gu(
);A._GetAutoObject(C.B4).AaP(A.aaR(A.acf.AG0));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).AaP(A.aaR(A.acf.A5b));}A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).
NC(A.aaR(A.acf.A5A)+A.aaR(A.acf.Colon));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.A5S));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(
A.aaR(A.acf.Am$)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abn:
function(){return C.ABV;},Abo:function(){return C.ADb;},Q5:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOx());},HO:function(G){
C.AkI.HO.call(this,G);this.N.Cv(A.aaL(A.ach.Aex));this.N.Ck=[this,this.Adq];this.
N.FN(A.jV);this.N.C5(null);this.N.CX((A.aaR(A.acf.A46)+String.fromCharCode(0x0A)
)+A.aaR(A.acf.BgU));this.N.ON(false);this.N.OO(false);this.N.I6.Dj(255);},AR1:function(
G){A._GetAutoObject(A.Device.Device).Dw(0);var AiS=A._GetAutoObject(A.Device.Device
).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device).A6(96,true,AiS.
toFixed(),0,null);},AR2:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.
A5H(this);},AR7:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!A.
_GetAutoObject(A.Device.Device).SI){A._GetAutoObject(A.Device.Device).A6(73,true
,A.jV,0,[this,this.Ben]);return;}if(A._GetAutoObject(A.Device.Device).Aq_()===false
){A.zX([this,this.Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xb],0);A._GetAutoObject(
A.Device.Device).A6(74,true,A.jV,0,[this,this.Agc]);return;}A.zX([this,this.AlS]
,[B=A._GetAutoObject(A.Device.Device).GC,B.Sz,B.Fb],0);A._GetAutoObject(A.Device.
Device).Asg(0);},AJx:function(){var Aty=this.Bg.AX;if(!Aty)return false;var O;for(
O=0;O<Aty.B9();O++)if(A._GetAutoObject(A.Device.Helper).Aj0(Aty.AOL(O,34))===false
)return true;return false;},Adq:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAt:function(G){if(A._GetAutoObject(A.Device.Device).Aqj===1)A.pe([this,this.
A5O],this);},AlS:function(G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV
){case 0:A.z$([this,this.AlS],[B=A._GetAutoObject(A.Device.Device).GC,B.Sz,B.Fb]
,0);break;case 3:{A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending(
);this.Dv(A.aaR(A.acf.BgV));A._GetAutoObject(A.Device.Device).Aqv();}break;case 4:{
A._GetAutoObject(A.Device.Device).A6(70,true,A.jV,0,null);A._GetAutoObject(A.Device.
Device).GC.E5();}break;default:;}},_Init:function(aArg){C.AkI._Init.call(this,aArg
);this.__proto__=C.AMN;this.Dq(C.AOQ);this.Init(aArg);},_className:"Application::BirthRegistrationsListScreen"
};C.AOQ={DX:function(G){C.Aep.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(11));},_Init:function(aArg){C.Aep._Init.call(this,aArg);this.__proto__=
C.AOQ;this.Text.R(A.aaR(A.acf.ABO));},_ReInit:function(){C.Aep._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABO));},_className:"Application::HeaderBirthRegistrationsList"
};C.APh={DX:function(G){C.Aep.DX.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdU(12));},_Init:function(aArg){C.Aep._Init.call(this,aArg);this.__proto__=
C.APh;this.Text.R(A.aaR(A.acf.AF5));},_ReInit:function(){C.Aep._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AF5));},_className:"Application::HeaderPurchasedAnimalsList"
};C.ABZ={Ka:0,AP:null,SR:null,O8:0,Init:function(aArg){},Bl:function(aSize){C.Ba.
Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SR.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SR.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Re(this.
Ka));this.SR.R(A._GetAutoObject(A.acj.KJ).ACJ(this.O8));},Ce:function(Ad){if(!this.
AX)return;this.Hq=Ad;if(!!this.AX){this.Ka=this.AX.KM(Ad,26);this.O8=this.AX.Hu(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SR={I:this},0);this.__proto__=C.ABZ;
this.AP.H(AZI);this.AP.L(A.jb.Bc);this.SR.H(AZJ);this.J(this.AP,0);this.J(this.SR
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SR.S(A.aaL(A.fl.Ak));
this.SR.A2(A.aaL(A.fl.Bh));this.SR.Ct(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SR._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SR._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SR.S(A.aaL(A.fl.Ak));this.SR.A2(A.
aaL(A.fl.Bh));this.SR.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUl={
AeQ:null,AbW:null,TL:null,KK:null,TJ:null,NI:null,Te:A.jV,Ai:function(Ae){var F;
C.SO.Ai.call(this,Ae);this.TL.L(this.V.AQ);var Apn=false;if((!this.Dk||!(F=this.
Dk,F[1].call(F[0])))&&!this.A8)Apn=true;this.TL.Z(Apn);this.Pq.Z(!Apn);this.VO.Z(
!Apn);this.QX.Z(!Apn);this.Yf.Z(!Apn);this.P3.Z(!Apn);},Ads:function(G){var B;var
F;if(!this.Te.length){C.SO.Ads.call(this,G);return;}var BO=this.FX;var Gt=A._GetAutoObject(
A.Device.AnE).Be0(this.Te);this.Te=A.jV;if(!Gt){A._GetAutoObject(A.Device.Device
).A6(101,true,A.jV,0,this.AbW);A.pe(this.AeQ,this);return;}if(this.Asc&&(Gt>A._GetAutoObject(
A.Device.Helper).Du())){A._GetAutoObject(A.Device.Device).A6(102,true,A.jV,0,this.
AbW);A.pe(this.AeQ,this);return;}this.Uh(((B=(Gt|0))<0)?B+0x100000000:B);if(this.
FX!==BO){if(!!this.Dk)(F=this.Dk,F[2].call(F[0],this.FX));A.abo(this.Dk,0);}if(!
!this.OE)A.pe(this.OE,this);},A2L:function(G){if(this.Te.length<10)this.Te=this.
Te+String.fromCharCode(this.KK.DQ);},AR4:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.Ads(this);else this.NI.NH=true;},AS5:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},AS6:function(E){if(A.aa0(this.AbW,E))return;this.AbW=
E;},_Init:function(aArg){C.SO._Init.call(this,aArg);A.acg.Text._Init.call(this.TL={
I:this},0);A.Core.BK._Init.call(this.KK={I:this},0);A.Core.BK._Init.call(this.TJ={
I:this},0);A.Core.BK._Init.call(this.NI={I:this},0);this.__proto__=C.AUl;this.TL.
H(Btw);this.TL.I9(true);this.TL.A5(0x12);this.TL.R(A.aaR(A.acf.A5o));this.KK.Filter=
143;this.TJ.Filter=149;this.NI.Filter=145;this.J(this.TL,0);this.TL.S(A.aaL(A.fl.
EK));this.KK.BL=[this,this.A2L];this.TJ.BL=[this,this.Ba9];this.NI.BL=[this,this.
AR4];},_Done:function(){this.__proto__=C.SO;this.TL._Done();this.KK._Done();this.
TJ._Done();this.NI._Done();C.SO._Done.call(this);},_ReInit:function(){C.SO._ReInit.
call(this);this.TL._ReInit();this.KK._ReInit();this.TJ._ReInit();this.NI._ReInit(
);this.TL.R(A.aaR(A.acf.A5o));this.TL.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SO._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUp={AeQ:null,AbW:null,KK:null
,TJ:null,NI:null,Te:A.jV,IY:function(G){var F;if(!this.Te.length){C.Q8.IY.call(this
,G);return;}if(this.Asb)return;if(!this.Te.length)this.TJ.NH=true;var BO=this.AM;
var Gt=A._GetAutoObject(A.Device.AnE).BAF(this.Te);this.Te=A.jV;if(!Gt){if((this.
Te.length<13)&&!A._GetAutoObject(A.Device.Device).SI)A._GetAutoObject(A.Device.Device
).A6(105,true,A.jV,0,this.AbW);else A._GetAutoObject(A.Device.Device).A6(103,true
,A.jV,0,this.AbW);A.pe(this.AeQ,this);return;}this.Bx(Gt);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OE)A.pe(this.
OE,this);},A2L:function(G){if(this.Asb)return;if(this.Te.length<17)this.Te=this.
Te+String.fromCharCode(this.KK.DQ);},AR4:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.IY(this);else this.NI.NH=true;},AS5:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},AS6:function(E){if(A.aa0(this.AbW,E))return;this.AbW=
E;},_Init:function(aArg){C.Q8._Init.call(this,aArg);A.Core.BK._Init.call(this.KK={
I:this},0);A.Core.BK._Init.call(this.TJ={I:this},0);A.Core.BK._Init.call(this.NI={
I:this},0);this.__proto__=C.AUp;this.ArU(false);this.KK.Filter=143;this.TJ.Filter=
149;this.NI.Filter=145;this.KK.BL=[this,this.A2L];this.TJ.BL=[this,this.Atb];this.
NI.BL=[this,this.AR4];},_Done:function(){this.__proto__=C.Q8;this.KK._Done();this.
TJ._Done();this.NI._Done();C.Q8._Done.call(this);},_ReInit:function(){C.Q8._ReInit.
call(this);this.KK._ReInit();this.TJ._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q8._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APe={AjW:null,AjU:null,Gv:null,Q6:null,SL:null,C4:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A8p,B.AFf],0);A.pe([
this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.AjW.L(E);this.AjU.
L(E);this.Q6.Zn(E);this.Gv.L(E);this.SL.Zn(E);},Wv:function(E){this.Q6.CT(E);this.
SL.CT(E);},DX:function(G){this.Q6.T(A._GetAutoObject(A.Device.Device).AvO.toFixed(
));A.pe([this,this.BBZ],this);},BBZ:function(G){var Xl=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avh());this.SL.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xl);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.AjW={I:this},0);A.acg.Ap._Init.call(this.AjU={
I:this},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.Q6={I:this
},0);C.D2._Init.call(this.SL={I:this},0);A.acg.C4._Init.call(this.C4={I:this},0);
this.__proto__=C.APe;this.AjW.H(P8);this.AjU.H(Btx);this.Gv.H(Bty);this.Gv.L(A.jb.
CS);this.Q6.AZ(0x14);this.Q6.H(Btz);this.Q6.Zn(A.jb.Bm);this.Q6.CT(A.jb.Rd);this.
Q6.Hl(2);this.Q6.Blb(0x11);this.SL.AZ(0x14);this.SL.H(BtA);this.SL.Zn(A.jb.Bm);this.
SL.CT(A.jb.Rd);this.SL.Hl(2);this.C4.DC(Afx);this.C4.DM(BtB);this.C4.L(A.jb.Bc);
this.J(this.AjW,0);this.J(this.AjU,0);this.J(this.Gv,0);this.J(this.Q6,0);this.J(
this.SL,0);this.J(this.C4,0);this.AjW.Aw(A.aaL(A.ach.Avq));this.AjU.Aw(A.aaL(A.ach.
APM));this.Gv.Aw(A.aaL(A.ach.Gv));this.Q6.S(A.aaL(A.fl.Bh));this.SL.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AjW._Done();this.
AjU._Done();this.Gv._Done();this.Q6._Done();this.SL._Done();this.C4._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AjW._ReInit();
this.AjU._ReInit();this.Gv._ReInit();this.Q6._ReInit();this.SL._ReInit();this.C4.
_ReInit();this.Q6.S(A.aaL(A.fl.Bh));this.SL.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARt={Abb:null,Aej:null,VL:null,Init:function(aArg){this.Bb(this.Abb);},Ll:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaB];this.BP.Ck=
null;this.BP.Co=[this,this.A2O];this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(A.aaL(
A.ach.Yt));}return this.BP;},AAm:function(G){var Aa=(C.Aje.isPrototypeOf(G)?G:null
);if(Aa===this.Abb)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aej)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$F);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Aje._Init.call(this.
Abb={I:this},0);C.Aje._Init.call(this.Aej={I:this},0);C.ARx._Init.call(this.VL={
I:this},0);this.__proto__=C.ARt;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.ABT));this.
Abb.H(IT);this.Abb.T(A.aaR(A.acf.AjA));this.Aej.H(P_);this.Aej.T(A.aaR(A.acf.AGa
));this.VL.H(Z_);this.VL.T(A.aaR(A.acf.A4Y));this.J(this.Abb,0);this.J(this.Aej,
0);this.J(this.VL,0);this.Text.S(A.aaL(A.fl.Ak));this.Abb.AR=[this,this.AAm];this.
Aej.AR=[this,this.AAm];this.VL.ASJ([B=A._GetAutoObject(A.Device.Device),B.AEr,B.
AII]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Abb._Done();this.
Aej._Done();this.VL._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.
call(this);this.Abb._ReInit();this.Aej._ReInit();this.VL._ReInit();this.Text.R(A.
aaR(A.acf.ABT));this.Abb.T(A.aaR(A.acf.AjA));this.Aej.T(A.aaR(A.acf.AGa));this.VL.
T(A.aaR(A.acf.A4Y));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fq._Mark.
call(this,D);if((B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARs={AnimalTableFields:null,Ay:null,Y:
null,JN:null,CP:function(){this.AiF(this);},Init:function(aArg){A.zV([this,this.
AiF],this.AnimalTableFields,0);A.pe([this,this.AiF],this);},DE:function(G){C.Fq.
DE.call(this,G);this.MO(this);},Ll:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ev];this.BP.Ck=[this,this.A2M];this.BP.Co=[this,this.
A3f];this.BP.C5(A.aaL(A.ach.Aq6));this.BP.Cv(A.aaL(A.ach.AqZ));this.BP.C1(A.aaL(
A.ach.Yt));}return this.BP;},Ev:function(G){this.AAY();this.AaB(this);},AiF:function(
G){this.AoW();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aai=A._GetAutoObject(
C.Amj).OC(O);this.A0S(Aai);}this.J(this.JN,0);A.aaS([this,this.MO],this);},Fj:function(
G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);
this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},A0S:function(
G_){var Ay1=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sc,0);Aa.T(Ay1.BR(G_));Aa.Aj(true);Aa.G4=G_;Aa.A9E(this.AnimalTableFields.NU(G_
));this.J(Aa,0);this.ZA(Aa);},AoW:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdG=X;X=X.Ah;if(((AdG.U&0x400)===0x400))this.HN(AdG);}}
,AAY:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JN)){var Aa=(C.Sc.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G4);if(Aa.ASh())this.AnimalTableFields.
AUh(Aa.G4);}else A.ab5("%s",Ayi);}X=X.Ah;}this.AnimalTableFields.Cg();},A2M:function(
G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAe=(C.Sc.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAe){this.Ahy(AAe,Aa);A.pe([this,this.MO],this);}}},A3f:function(
G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAK=(C.Sc.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAK){this.Ahy(Aa,AAK);A.pe([this,this.MO],this);}}},AqC:function(
G){var B;A._GetAutoObject(A.Device.Device).Ash(this);A.pe([this,this.AiF],this);
},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AuW._Init.call(this.JN={I:this},0);
this.__proto__=C.ARs;this.H(Rk);this.Text.R(A.aaR(A.acf.AGa));this.Ay.H(Is);this.
Y.H(A$$);this.Y.JQ(1);this.JN.H(AHZ);this.JN.Aj(true);this.JN.T(A.aaR(A.acf.A5B)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JN,0);this.Y.El=[this,this.Fj];
this.JN.AR=[this,this.AqC];this.AnimalTableFields=A._GetAutoObject(C.Amj);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fq;this.Ay._Done();this.Y._Done();this.
JN._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JN._ReInit();this.Text.R(A.aaR(A.acf.AGa));this.
JN.T(A.aaR(A.acf.A5B));this.CP();},_Mark:function(D){var B;C.Fq._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARr={Y:null,BY:null,C$:null,CG:null,GP:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UK:null,Init:function(aArg){A.zX([this,this.AuB],this.BY.Q,0);A.zX([
this,this.AMS],this.CG.Q,0);A.zX([this,this.AVA],this.GP.Q,0);A.zX([this,this.Ave
],this.C$.Q,0);this.Bb(this.BY);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this
);},Ll:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaB];this.BP.Ck=null;this.BP.Co=null;this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(
A.aaL(A.ach.Yt));}return this.BP;},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},AuB:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BY.Q,F[1].call(F[0])));},AVA:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},Ave:function(G){var F;A._GetAutoObject(
A.Device.Device).JR((F=this.C$.Q,F[1].call(F[0])));},AMS:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fq._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaO._Init.call(this.BY={
I:this},0);C.AaO._Init.call(this.C$={I:this},0);C.AaO._Init.call(this.CG={I:this
},0);C.AaO._Init.call(this.GP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UL._Init.call(this.UK={I:
this},0);this.__proto__=C.ARr;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.AjA));this.
Y.H(A$$);this.Y.JQ(1);this.BY.H(AhV);this.BY.Ar(true);this.BY.Aj(true);this.BY.T(
A.aaR(A.acf.Afo));this.C$.H(Aya);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(
A.acf.Afj));this.CG.H(Aoj);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.GP.H(AsZ);this.GP.Ar(true);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jf
));this.Ay.H(Is);this.AnimalType.At(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.At(A._GetAutoObject(A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(
A.Device.Device).Breed);this.UK.At(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BY,0);this.J(this.C$,0);this.J(this.CG,0);this.J(
this.GP,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.BY.Zo(A.aaL(A.fl.H1));
this.BY.Zp(A.aaL(A.fl.H1));this.BY.At([B=this.AnimalType,B.B_,B.B$]);this.BY.CK(
this.AnimalType);this.C$.Zo(A.aaL(A.fl.H1));this.C$.Zp(A.aaL(A.fl.H1));this.C$.At([
B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.CG.Zo(A.aaL(A.fl.H1));this.
CG.Zp(A.aaL(A.fl.H1));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.CK(this.Breed
);this.GP.Zo(A.aaL(A.fl.H1));this.GP.Zp(A.aaL(A.fl.H1));this.GP.At([B=this.UK,B.
B_,B.B$]);this.GP.CK(this.UK);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Y._Done();this.BY._Done();this.C$._Done();this.CG._Done();this.GP._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UK._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this
);this.Y._ReInit();this.BY._ReInit();this.C$._ReInit();this.CG._ReInit();this.GP.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UK._ReInit();this.Text.R(A.aaR(A.acf.AjA));this.BY.T(A.aaR(
A.acf.Afo));this.C$.T(A.aaR(A.acf.Afj));this.CG.T(A.aaR(A.acf.Breed));this.GP.T(
A.aaR(A.acf.Jf));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amn={CB:0,All:A.abi(17,0,null),OC:function(Hz){return this.All.Get(Hz);},NP:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.All.Set(
O,0);this.CB=0;},J:function(Aac){if(this.CB>=17)A.ab5("%s",BtC);else{this.All.Set(
this.CB,Aac);this.CB=this.CB+1;}},Cg:function(){},E3:function(AhZ){var AJS=AhZ.indexOf(
String.fromCharCode(0x2C),0);var A1f=A.jV;var O=0;this.CB=0;while(O<17)if(AhZ===
A.jV)O++;else{if(AJS===-1){A1f=AhZ;AhZ=A.jV;}else{A1f=A.abV(AhZ,AJS);AhZ=A.ab1(AhZ
,0,AJS+1);}var Aai=A.abZ(A1f,0,10)|0;if(this.Bi1(Aai)){this.All.Set(this.CB,Aai);
this.CB=this.CB+1;O++;}AJS=AhZ.indexOf(String.fromCharCode(0x2C),0);}if(AhZ!==A.
jV)A.ab5("%s",BtD);},toString:function(){var B;var AAc=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAc=AAc+AH1;AAc=AAc+(((B=this.All.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAc;},Contains:function(Aac){var O;for(O=0;O<this.CB;O=O+1)if(this.All.
Get(O)===Aac)return true;return false;},Bi1:function(Aac){return true;},_Init:function(
aArg){(this.All=[]).__proto__=C.Amn.All;this.__proto__=C.Amn;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.ALY={AfL:null,Init:function(aArg){var B;A.
zX([this,this.Bd4],[B=A._GetAutoObject(A.Device.Device),B.A7U,B.Bas],0);A.zX([this
,this.Bd5],[B=A._GetAutoObject(A.Device.Device),B.A7V,B.Bat],0);A.pe([this,this.
Bd4],this);A.pe([this,this.Bd5],this);},Clear:function(){C.Amn.Clear.call(this);
this.AfL.Clear();},Cg:function(){A._GetAutoObject(A.Device.Device).Ary(this.AfL.
toString());A._GetAutoObject(A.Device.Device).Arz(this.toString());},Bd4:function(
G){this.AfL.E3(A._GetAutoObject(A.Device.Device).ABv);A.we(this,0);},Bd5:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABw);A.we(this,0);},NU:function(Aac
){return this.AfL.Contains(Aac);},AUh:function(Aac){if(!this.NU(Aac))this.AfL.J(
Aac);},AOy:function(){return this.AfL.NP();},_Init:function(aArg){C.Amn._Init.call(
this,aArg);this.__proto__=C.ALY;this.AfL=A._NewObject(C.Amn,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amn._Mark.call(this,D);if((B=this.AfL)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amj={_Init:function(){C.ALY._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARx={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A5(0x11);this.V.Text.Hl(10);},Bl:function(aSize){C.T8.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.T8.
Ai.call(this,Ae);var Hd=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FQ=A.jb.Ad7;var GW=A.jb.Bm;if(this.Hj){FQ=A.jb.Bm;GW=A.jb.Text;}if(!Hd
){this.Background.L(FQ);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FQ);this.V.L(GW);}this.LF=Hd;this.KD=Fu;this.Qq=GE;},_Init:function(
aArg){C.T8._Init.call(this,aArg);this.__proto__=C.ARx;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMM={YL:null,Ak3:null,Ll:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaB];this.BP.Ck=null;
this.BP.Co=null;this.BP.CX(A.jV);this.BP.Cv(null);this.BP.C1(A.aaL(A.ach.Yt));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaO._Init.call(this.
YL={I:this},0);C.AD0._Init.call(this.Ak3={I:this},0);this.__proto__=C.AMM;var B;
this.H(KX);this.YL.H(KX);this.YL.T(A.aaR(A.acf.Display));this.Ak3.At(A._GetAutoObject(
A.Device.Device).Aqj);this.J(this.YL,0);this.YL.Zo(A.aaL(A.fl.H1));this.YL.Zp(A.
aaL(A.fl.H1));this.YL.At([B=this.Ak3,B.B_,B.B$]);this.YL.CK(this.Ak3);this.Ak3.Bms([
B=A._GetAutoObject(A.Device.Device),B.AEn,B.AIF]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YL._Done();this.Ak3._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YL._ReInit();this.Ak3._ReInit(
);this.YL.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak3)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AD0={AbJ:null,ListViewScopeToString:null,Dt:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gj:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BR(aIndex
);},DZ:function(A9){return A9;},H3:function(){return 1;},At:function(E){var F;C.
AC.At.call(this,E);if(!!this.AbJ)(F=this.AbJ,F[2].call(F[0],E));},Bms:function(E
){if(A.aaZ(this.AbJ,E))return;if(!!this.AbJ)A.z$([this,this.A3l],this.AbJ,0);this.
AbJ=E;if(!!this.AbJ)A.zX([this,this.A3l],this.AbJ,0);A.pe([this,this.A3l],this);
},A3l:function(G){var F;if(!!this.AbJ)this.Q=(F=this.AbJ,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AD0;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AUV={
AB6:0,AB5:0,Ai:function(Ae){C.OU.Ai.call(this,Ae);this.Background.L(this.AB5);this.
V.L(this.AB6);},Bli:function(E){if(this.AB6===E)return;this.AB6=E;this.Am();},Blh:
function(E){if(this.AB5===E)return;this.AB5=E;this.Am();},_Init:function(aArg){C.
OU._Init.call(this,aArg);this.__proto__=C.AUV;this.Ar(false);this.AB6=A.jb.Text;
this.AB5=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AG_={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Bdx],[B=A._GetAutoObject(A.Device.
Device),B.A8q,B.BaK],0);A.pe([this,this.Bdx],this);},Dt:function(){return 3;},Gj:
function(aIndex){return this.WeightValuePrecisionToString.BR(this.C7(aIndex));},
At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.Device).AwJ(E);},Bdx:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OJ;A.abo([this,this.B_,this.
B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AG_;this.
Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cl;this.WeightValuePrecisionToString._Done();C.Cl._Done.call(this
);},_ReInit:function(){C.Cl._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cl._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUn={Uy:null,A_7:A.jV,Init:function(aArg){},Bl:function(aSize){C.BU.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.Uy.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BU.Ai.call(this,Ae);this.Uy.L(this.
V.AQ);},BmW:function(E){if(this.A_7===E)return;this.A_7=E;this.Uy.R(E);},_Init:function(
aArg){C.BU._Init.call(this,aArg);C.CH._Init.call(this.Uy={I:this},0);this.__proto__=
C.AUn;this.H(AcK);this.Uy.H(BtE);this.J(this.Uy,0);this.Uy.S(A.aaL(A.fl.Af));this.
Uy.A2(A.aaL(A.fl.Ak));this.Uy.Ct(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BU;this.Uy._Done();C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(
this);this.Uy._ReInit();this.Uy.S(A.aaL(A.fl.Af));this.Uy.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BU._Mark.call(this,D);if((B=this.Uy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Y1={MassDeregistrationCriterionToString:
null,Dt:function(){return 2;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BR(this.C7(aIndex));},_Init:function(
aArg){C.Cl._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y1;this.
Cb.Set(0,0);this.Cb.Set(1,1);},_Done:function(){this.__proto__=C.Cl;this.MassDeregistrationCriterionToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cl._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANF={Vf:null
,Y1:null,Y3:null,Ms:null,AtZ:0,Init:function(aArg){this.Bb(this.Y3);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBw=((A.aaR(A.acf.Aqr)+A.aaR(A.acf.Colon))+CQ)+this.
AtZ.toFixed();this.Ms.BmW(BBw);},CC:function(G){C.Ei.CC.call(this,G);A.zX([this,
this.ALh],this.Ms.Q,0);A.pe([this,this.ALh],this);},E4:function(G){C.Ei.E4.call(
this,G);A.z$([this,this.ALh],this.Ms.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Ms)&&!this.AtZ)this.N.HQ.Dj(100);else this.N.HQ.Dj(255);},Bei:
function(G){if(this.AtZ>0)A._GetAutoObject(A.Device.Device).A6(108,true,this.AtZ.
toFixed(),0,[this,this.BzK]);},ALh:function(G){var F;this.AtZ=A._GetAutoObject(A.
Device.Helper).Bio((F=this.Ms.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MH],
this);},Bec:function(G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(
A.Device.Device).A6(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Aq_()===false){this.Vf=[this,this.Bec];A.zX([this,this.Xz],[B=A._GetAutoObject(
A.Device.Device),B.Wt,B.Xb],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.Agc]);return;}A.zX([this,this.AlS],[B=A._GetAutoObject(A.Device.Device
).GC,B.Sz,B.Fb],0);A._GetAutoObject(A.Device.Device).Asg(1);},Agc:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xb],0);this.
Vf=null;}},Xz:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhP===3){A.
_GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.Agc]);A.z$([this,this.
Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xb],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},BzK:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BBr],this);},BBr:function(
G){A._GetAutoObject(A.Device.Helper).BxJ(this.Y1.Q);A._GetAutoObject(A.Device.Device
).A6(109,true,this.AtZ.toFixed(),0,null);A.pe([this,this.MH],this);A.pe([this,this.
ALh],this);},AlS:function(G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV
){case 0:A.z$([this,this.AlS],[B=A._GetAutoObject(A.Device.Device).GC,B.Sz,B.Fb]
,0);break;case 3:A._GetAutoObject(A.Device.Device).Aqv();break;case 4:{A._GetAutoObject(
A.Device.Device).A6(88,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E5(
);}break;default:;}},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Y1._Init.
call(this.Y1={I:this},0);C.Cn._Init.call(this.Y3={I:this},0);C.AUn._Init.call(this.
Ms={I:this},0);this.__proto__=C.ANF;var B;this.Dq(C.AOS);this.Y3.H(IT);this.Y3.Aj(
true);this.Y3.T(A.aaR(A.acf.A50));this.Y3.Bi(false);this.Ms.H(BtF);this.Ms.Aj(true
);this.Ms.T(A.aaR(A.acf.A$l));this.Ms.Bi(true);this.Ms.A97(A.aaR(A.acf.Ok));this.
J(this.Y3,0);this.J(this.Ms,0);this.Y3.AR=[this,this.Bec];this.Ms.AR=[this,this.
Bei];this.Ms.AeR([this,this.Bei]);this.Ms.At([B=this.Y1,B.B_,B.B$]);this.Ms.CK(this.
Y1);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Y1._Done();this.
Y3._Done();this.Ms._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.
call(this);this.Y1._ReInit();this.Y3._ReInit();this.Ms._ReInit();this.Y3.T(A.aaR(
A.acf.A50));this.Ms.T(A.aaR(A.acf.A$l));this.Ms.A97(A.aaR(A.acf.Ok));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOS={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOS;this.
Text.R(A.aaR(A.acf.AdP));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdP));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANI={
Vf:null,Y2:null,AbO:null,Init:function(aArg){this.Bb(this.Y2);A.pe([this,this.MH
],this);},Beb:function(G){var B;var AzX=A._GetAutoObject(A.Device.Device).ADM();
switch(AzX){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A6(91,true,UW,0,[this,this.Bev]);break;
case 2:{this.Vf=[this,this.Beb];A.zX([this,this.Xz],[B=A._GetAutoObject(A.Device.
Device),B.Wt,B.Xb],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,
this.Agc]);}break;default:throw new Error(Baa+AzX.toFixed());}},Agc:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xb],0);this.
Vf=null;}},Xz:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhP===3){A.
_GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.Agc]);A.z$([this,this.
Xz],[B=A._GetAutoObject(A.Device.Device),B.Wt,B.Xb],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},Bex:function(G){var B;var AzX=A._GetAutoObject(A.Device.Device
).ADN();switch(AzX){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A6(95,true,A.jV,0,[this,this.BzL
]);break;case 2:{this.Vf=[this,this.Bex];A.zX([this,this.Xz],[B=A._GetAutoObject(
A.Device.Device),B.Wt,B.Xb],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV
,0,[this,this.Agc]);}break;case 3:A._GetAutoObject(A.Device.Device).A6(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A6(93,true,A.jV,0,null
);break;default:throw new Error(Baa+AzX.toFixed());}},Bev:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Byk],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bym],this);break;default:throw new Error(BtG+As.Id.toFixed());}},Byk:function(G){
if(A._GetAutoObject(A.Device.Device).ACd()){var A2y=A._GetAutoObject(A.Device.Device
).An.QF();A._GetAutoObject(A.Device.Device).A6(80,true,A2y.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A6(82,true,A.jV,0,null);A.aaS([this,this.BzG],
this);},Bym:function(G){if(A._GetAutoObject(A.Device.Device).AGf()){var A2y=A._GetAutoObject(
A.Device.Device).An.QF();A._GetAutoObject(A.Device.Device).A6(81,true,A2y.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A6(83,true,A.jV,0,null);A.aaS([
this,this.BAj],this);},BzL:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BBs],this);},BBs:function(
G){A._GetAutoObject(A.Device.Device).A6(92,true,UW,0,[this,this.Bev]);},BAj:function(
G){A._GetAutoObject(A.Device.Device).A6(92,false,A.jV,0,null);},BzG:function(G){
A._GetAutoObject(A.Device.Device).A6(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Cn._Init.call(this.Y2={I:this},0);C.Cn._Init.call(
this.AbO={I:this},0);this.__proto__=C.ANI;this.Dq(C.AOV);this.Y2.H(IT);this.Y2.Aj(
true);this.Y2.T(A.aaR(A.acf.ACd));this.Y2.Bi(false);this.AbO.H(P_);this.AbO.Aj(true
);this.AbO.T(A.aaR(A.acf.AGf));this.AbO.Bi(true);this.J(this.Y2,-1);this.J(this.
AbO,-1);this.Y2.AR=[this,this.Beb];this.AbO.AR=[this,this.Bex];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y2._Done();this.AbO._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y2._ReInit();this.AbO.
_ReInit();this.Y2.T(A.aaR(A.acf.ACd));this.AbO.T(A.aaR(A.acf.AGf));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOV={
_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AOV;this.Text.R(
A.aaR(A.acf.ACj));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACj));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.RJ={NW:null
,ATT:0,ADP:false,ADL:false,ADQ:false,AlU:function(G){this.A5E(this);},AS1:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DP.AutoActions=E;A.zV([
this,this.BBa],this.NW,0);},ALZ:function(){this.AL2(A.aaR(A.acf.A$t),[this,this.
BBI],[this,this.A8k,this.AE8]);this.AL2(A.aaR(A.acf.AF6),[this,this.BBG],[this,this.
A8h,this.AE6]);this.AL2(A.aaR(A.acf.AnS),[this,this.BBH],[this,this.A8i,this.AE7
]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Bnr)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.B4).Gu();},AL2:function(Bwb,Bxm,BwG){if(!this.NW
)return;this.AL1(Bwb,Bxm,BwG);},BBI:function(G){this.AE8(!this.ADQ);},BBG:function(
G){this.AE6(!this.ADL);},BBH:function(G){this.AE7(!this.ADP);},A3M:function(ED,BwF
){if(!this.NW)return;if(BwF)this.NW.Bgu(ED);else this.NW.BnK(ED);this.NW.Cg();},
A4r:function(Aia,Aib,BxE){A._GetAutoObject(C.B4).ABx(Aia,Aib,[this,this.A8A,this.
ATb],BxE);},AGs:function(ED){if(!this.NW)return;this.NW.AGs(ED);this.NW.Cg();},AE8:
function(E){if(this.ADQ===E)return;this.ADQ=E;this.A3M(256,E);A.abo([this,this.A8k
,this.AE8],0);},AE6:function(E){if(this.ADL===E)return;this.ADL=E;this.A3M(2,E);
A.abo([this,this.A8h,this.AE6],0);},AE7:function(E){if(this.ADP===E)return;this.
ADP=E;this.A3M(1,E);A.abo([this,this.A8i,this.AE7],0);},BBa:function(G){this.AE8(
this.NW.Contains(256));this.AE6(this.NW.Contains(2));this.AE7(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATb(this.NW.OC(this.NW.NP()-1));},ATb:function(E){if(this.
ATT===E)return;this.ATT=E;A.abo([this,this.A8A,this.ATb],0);},A8k:function(){return this.
ADQ;},A8h:function(){return this.ADL;},A8i:function(){return this.ADP;},A8A:function(
){return this.ATT;},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=
C.RJ;},_Mark:function(D){var B;C.GZ._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvN={Q:null,Cg:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADJ:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kd:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,
0);if(!!E)A.pe([this,this.Kd],this);},AGs:function(ED){if(this.NP()>0)this.Axm(this.
NP()-1,ED);},Bgu:function(ED){if(this.Contains(ED))return;if(this.CB>=17){A.ab5(
"%s",AH0);return;}var AzQ=0;for(;(AzQ<=this.NP())&&(this.OC(AzQ)<ED);AzQ++);var AA3=
this.NP()-1;this.J(this.OC(AA3));for(;AA3>AzQ;AA3--)this.Axm(AA3,this.OC(AA3-1));
this.Axm(AzQ,ED);},BnK:function(ED){var index=this.DZ(ED);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axm(index,this.OC(index+1));this.Axm(index,0);this.
CB--;},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AvN;},_Mark:
function(D){var B;C.Vs._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.AvX={_Init:
function(){C.AvN._Init.call(this,0);var B;this.At([B=A._GetAutoObject(A.Device.Device
),B.A8u,B.BaO]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.AvY={_Init:function(){C.AvN._Init.call(this,0);var B;this.At([B=A._GetAutoObject(
A.Device.Device),B.A8v,B.BaP]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxU={_Init:function(){C.AvN._Init.call(this,0);var B;this.At([B=
A._GetAutoObject(A.Device.Device),B.A82,B.Ba3]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADf={QP:null,AjQ:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QP={I:this},0);A.acg.Ap._Init.
call(this.AjQ={I:this},0);this.__proto__=C.ADf;this.Er.H(BtH);this.DS.H(BtI);this.
QP.H(BtJ);this.QP.R(A.aaR(A.acf.Uc));this.QP.A5(0x11);this.QP.L(A.jb.Text);this.
AjQ.H(AZF);this.AjQ.L(A.jb.Text);this.J(this.QP,0);this.J(this.AjQ,0);this.QP.S(
A.aaL(A.fl.Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Ct(A.aaL(A.fl.Bh));this.AjQ.Aw(
A.aaL(A.ach.Avp));},_Done:function(){this.__proto__=C.Dc;this.QP._Done();this.AjQ.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QP._ReInit();this.AjQ._ReInit();this.QP.R(A.aaR(A.acf.Uc));this.QP.S(A.aaL(A.fl.
Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.ABY={AP:null,ST:null,OV:null,AKl:A.jV,BdG:A.jV,Mf:0,Init:function(aArg){},Bl:
function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OV.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OV.M[2]-1,0,this.OV.M[2]+1,
aSize[1]]);this.ST.H([this.OV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OV.L(this.V.AQ);this.ST.L(this.V.AQ);this.T(this.AKl);this.
OV.R(this.BdG);this.ST.R(this.Mf.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hq=Ad;if(!!this.AX){var Ka=this.AX.KM(Ad,26);var A2q=A._GetAutoObject(A.Device.
Converter).Re(Ka);this.AKl=A.abV(A2q,A2q.length-5);this.BdG=A.ab2(A2q,5);if((A._GetAutoObject(
A.Device.Converter).WV(Ka)===10)&&!(Math.trunc(Ka/10000000000)%100))this.AKl=A.ab1(
this.AKl,3,2);this.Mf=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CH._Init.call(this.ST={
I:this},0);C.CH._Init.call(this.OV={I:this},0);this.__proto__=C.ABY;this.V.H(BtK
);this.AP.H(AZI);this.AP.L(A.jb.Bc);this.ST.H(AZJ);this.OV.H(BtL);this.J(this.AP
,0);this.J(this.ST,0);this.J(this.OV,0);this.V.S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(
A.fl.Bh));this.ST.S(A.aaL(A.fl.Ak));this.ST.A2(A.aaL(A.fl.Bh));this.ST.Ct(A.aaL(
A.fl.Bh));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(A.aaL(A.fl.Bh));this.OV.Ct(A.aaL(
A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.ST._Done();this.OV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.ST._ReInit();this.OV._ReInit();this.V.
S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh));this.ST.S(A.aaL(A.fl.Ak));this.ST.A2(
A.aaL(A.fl.Bh));this.ST.Ct(A.aaL(A.fl.Bh));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(
A.aaL(A.fl.Bh));this.OV.Ct(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APl={Q:null,Init:function(aArg){var
B;this.AAS(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEA:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Ni(FilterCriterion);var AiZ=this.Av9();if((AiZ.length>0)&&(AiZ!==UW)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,AiZ,0,6,false);Filter.CV(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},AAS:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.ASU(A.jV);return;}var AyS=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!AyS){this.AW.ASU(UW);this.AW.
AeU(true);}else this.AW.ASU(AyS.A4);},_Init:function(aArg){C.AjM._Init.call(this
,aArg);this.__proto__=C.APl;this.AW.AwC(0);this.AW.Bme(true);this.AW.Di=[this,this.
AEA];this.Init(aArg);},_Mark:function(D){var B;C.AjM._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AU_={FA:null,C_:null,Dl:null,EL:null,AsF:null,Init:function(aArg){var B;A.zX([
this,this.BeF],[B=A._GetAutoObject(A.Device.Device),B.ASA,B.AZ3],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Uf,B.UZ],0);A.pe([this,this.BeF],this);A.pe([
this,this.Adr],this);},BeF:function(G){var AaI=false;switch(A._GetAutoObject(A.Device.
Device).AnX){case 0:AaI=false;break;case 3:AaI=true;break;default:throw new Error(
BtM+A._GetAutoObject(A.Device.Device).AnX.toFixed());}A._GetAutoObject(A.Device.
Helper).JX(this.C_,AaI);A._GetAutoObject(A.Device.Helper).JX(this.Dl,AaI);A._GetAutoObject(
A.Device.Helper).JX(this.EL,AaI);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cd._Init.call(this
,aArg);C.BU._Init.call(this.FA={I:this},0);C.Iq._Init.call(this.C_={I:this},0);C.
Iq._Init.call(this.Dl={I:this},0);C.AvR._Init.call(this.EL={I:this},0);C.AU9._Init.
call(this.AsF={I:this},0);this.__proto__=C.AU_;var B;this.I_(A.aaR(A.acf.UnlinkTransponder
));this.FA.H(UV);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqc));this.
FA.Bi(true);this.C_.H(Ak$);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
Aqx));this.C_.Bi(false);this.C_.F$(2);this.C_.EU(6);this.C_.IO(A.aaR(A.acf.OA));
this.C_.I$(A.aaR(A.acf.Ey));this.Dl.H(AcL);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.
Zg));this.Dl.Bi(true);this.Dl.F$(0);this.Dl.EU(12);this.Dl.IO(A.aaR(A.acf.OA));this.
Dl.I$(A.aaR(A.acf.Ey));this.EL.H(Aye);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.ArT(A.aaR(A.acf.Aqe));this.J(this.FA,0);this.J(this.C_,0);this.
J(this.Dl,0);this.J(this.EL,0);this.FA.At([B=this.AsF,B.B_,B.B$]);this.FA.CK(this.
AsF);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY]);this.Dl.At([B=A.
_GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.EL.DB(A.aaL(A.ach.AjR));this.EL.
OL([B=A._GetAutoObject(A.Device.Device),B.Ue,B.UY]);this.EL.PP([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
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
};C.AU9={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bf7],[B=A._GetAutoObject(A.Device.Device),B.ASA,B.AZ3],0);A.pe([
this,this.Bf7],this);},Dt:function(){return 2;},Gj:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BR(this.C7(aIndex));},At:function(E){C.Cl.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw4(E);},Bf7:function(G){this.Q=A._GetAutoObject(A.Device.Device).AnX;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cl._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AU9;this.Cb.Set(0,0);this.Cb.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cl;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cl._Done.call(this);},_ReInit:function(){C.Cl._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cl.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMz.__proto__=A.Core.Root;C.AB.__proto__=C.Abd;C.WE.__proto__=
A.Core.P;C.Ow.__proto__=A.Core.P;C.Zw.__proto__=A.acl.Gk;C.Ej.__proto__=A.Core.P;
C.XV.__proto__=C.AB;C.AUA.__proto__=C.AB;C.Avn.__proto__=C.AB;C.Q7.__proto__=C.AB;
C.Fm.__proto__=C.Hg;C.Ay.__proto__=A.Core.P;C.Cd.__proto__=C.AB;C.AqT.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.AC9.__proto__=C.AmR;C.AGK.
__proto__=C.DR;C.Cn.__proto__=C.OU;C.Dr.__proto__=C.Eg;C.Iq.__proto__=C.Dr;C.BU.
__proto__=C.Dr;C.SO.__proto__=C.Dr;C.OH.__proto__=C.Cl;C.Ra.__proto__=C.AC;C.AUP.
__proto__=C.Ba;C.Gb.__proto__=A.Core.P;C.Ba.__proto__=C.Cn;C.GZ.__proto__=C.AB;C.
ABX.__proto__=C.Ba;C.Ad5.__proto__=C.AB;C.Mk.__proto__=C.Ow;C.AUK.__proto__=C.AB;
C.AqS.__proto__=C.AC9;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUq.__proto__=C.Acj;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asl.__proto__=A.Core.P;C.AGw.__proto__=C.Dr;C.CH.__proto__=A.Core.P;C.
AjL.__proto__=C.Yn;C.Amm.__proto__=C.Q$;C.Ahv.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATE.__proto__=C.AB;C.Mn.__proto__=C.Cn;C.Anb.__proto__=C.Cn;C.OverlayMenu.
__proto__=C.Abd;C.APB.__proto__=C.OverlayMenu;C.GJ.__proto__=A.Core.P;C.Abd.__proto__=
A.Core.P;C.AUv.__proto__=A.acl.Aeh;C.AmR.__proto__=C.BQ;C.AC_.__proto__=C.AmR;C.
Kj.__proto__=C.AC;C.AUs.__proto__=C.Dr;C.AF7.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wo.__proto__=C.Ark;C.II.__proto__=C.AC_;C.I2.__proto__=C.AB;C.AL9.__proto__=C.
AF7;C.AL5.__proto__=C.GZ;C.ANn.__proto__=C.GZ;C.Ael.__proto__=C.Cn;C.QA.__proto__=
C.Ael;C.APo.__proto__=C.BQ;C.AjM.__proto__=C.BQ;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Gc.__proto__=C.AC;C.Afi.__proto__=C.BU;C.ATU.__proto__=C.AB;C.AbP.__proto__=
C.Cn;C.T8.__proto__=C.Cn;C.ANz.__proto__=C.Cd;C.AUR.__proto__=C.Cd;C.ANM.__proto__=
C.Cd;C.AT6.__proto__=C.Cd;C.WU.__proto__=A.Core.P;C.QS.__proto__=C.Fm;C.D2.__proto__=
A.Core.P;C.T4.__proto__=C.AB;C.AVp.__proto__=C.GZ;C.AL_.__proto__=C.AxS;C.AVa.__proto__=
C.Cd;C.AeK.__proto__=C.AC;C.AxS.__proto__=C.AB;C.AVy.__proto__=C.Cd;C.AUr.__proto__=
C.Acj;C.ABt.__proto__=A.Graphics.Hy;C.Ap_.__proto__=C.AB;C.ARo.__proto__=A.Core.
P;C.Fq.__proto__=C.OverlayMenu;C.AaO.__proto__=C.BU;C.Aje.__proto__=C.Cn;C.ALR.__proto__=
C.Fq;C.Cl.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.ALW.__proto__=C.Vs;C.ALX.
__proto__=C.Fq;C.Sc.__proto__=C.T8;C.AME.__proto__=C.Vs;C.Wg.__proto__=C.Fm;C.Vp.
__proto__=A.Core.P;C.Ku.__proto__=A.Core.P;C.ARM.__proto__=C.HY;C.ATX.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cl;C.ANo.__proto__=C.Amm;C.Hg.__proto__=A.
Core.P;C.AVr.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cl;C.AaY.
__proto__=C.Gc;C.AxK.__proto__=C.ABt;C.ATz.__proto__=C.OverlayMenu;C.AOs.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATA.__proto__=A.Core.P;C.AUu.__proto__=A.acl.
Aeh;C.AkO.__proto__=C.Iq;C.Amo.__proto__=C.OverlayMenu;C.AB0.__proto__=C.Ba;C.Yo.
__proto__=C.AjM;C.AqB.__proto__=C.HY;C.Aci.__proto__=C.Dr;C.WeightRecordingScope.
__proto__=C.AC;C.Auy.__proto__=C.AB;C.AUt.__proto__=C.Iq;C.AL7.__proto__=C.AB;C.
Ark.__proto__=C.HY;C.AG5.__proto__=A.Core.P;C.AVu.__proto__=A.Core.P;C.Eg.__proto__=
C.Cn;C.AeM.__proto__=C.Eg;C.AvS.__proto__=C.AeM;C.SetTransponderScreen.__proto__=
C.Q7;C.ADg.__proto__=C.EA;C.AG9.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mg.__proto__=C.Q7;C.ALP.__proto__=C.Mg;C.ManualActionScanScreen.__proto__=C.Mg;
C.ALQ.__proto__=A.Core.P;C.APs.__proto__=C.Dc;C.ADe.__proto__=C.Dc;C.TR.__proto__=
C.Dc;C.APu.__proto__=C.Dc;C.AM4.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AM2.__proto__=
C.Ba;C.Jq.__proto__=A.Core.P;C.AM1.__proto__=C.Ba;C.AmQ.__proto__=C.TC;C.AFX.__proto__=
C.Axc;C.AkB.__proto__=C.Axc;C.Zv.__proto__=C.AkB;C.ANv.__proto__=C.OU;C.OU.__proto__=
C.Hg;C.APx.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AMY.__proto__=C.Ajw;C.ADa.__proto__=
C.TS;C.Ki.__proto__=A.Core.P;C.Amy.__proto__=C.Mn;C.AOP.__proto__=C.Kn;C.AutoRegistrationMode.
__proto__=C.AC;C.APy.__proto__=C.EA;C.Tw.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMj.__proto__=C.RW;C.AMx.__proto__=C.AaU;C.AMs.__proto__=C.AaU;C.ATW.__proto__=
C.Ba;C.APw.__proto__=C.EA;C.AMm.__proto__=C.AaU;C.IE.__proto__=C.I1;C.RP.__proto__=
C.Fx;C.RT.__proto__=C.Fx;C.Tv.__proto__=C.JI;C.Qz.__proto__=C.Fx;C.Tu.__proto__=
C.JI;C.AL6.__proto__=C.Ap_;C.AQN.__proto__=C.Cd;C.AaU.__proto__=C.D9;C.Kh.__proto__=
C.Cl;C.ARk.__proto__=C.Cd;C.AMh.__proto__=C.K9;C.AMi.__proto__=C.D9;C.AMf.__proto__=
C.K9;C.AMg.__proto__=C.K9;C.WG.__proto__=C.Eg;C.AUo.__proto__=C.WG;C.RU.__proto__=
C.Fx;C.APn.__proto__=C.II;C.ANp.__proto__=C.AB;C.AM8.__proto__=C.Ad5;C.AL4.__proto__=
C.I2;C.AVo.__proto__=C.I2;C.AOR.__proto__=C.Kn;C.APp.__proto__=C.Kn;C.APt.__proto__=
C.TS;C.AM3.__proto__=C.Ajw;C.TS.__proto__=C.Dc;C.Aqm.__proto__=A.acv.AB_;C.Ajw.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMP.__proto__=C.DR;C.OZ.__proto__=C.DR;C.AqQ.__proto__=
A.Core.P;C.AMo.__proto__=C.Gb;C.AT0.__proto__=A.Core.P;C.K9.__proto__=C.D9;C.ANw.
__proto__=C.Cd;C.AuW.__proto__=C.Cn;C.AC6.__proto__=C.BQ;C.AC7.__proto__=C.BQ;C.
Fx.__proto__=C.JI;C.AOv.__proto__=C.GZ;C.AOu.__proto__=C.I2;C.AO5.__proto__=C.Kn;
C.ADc.__proto__=C.Dc;C.ABW.__proto__=C.Ba;C.ATV.__proto__=C.Ahv;C.FactoryResetScope.
__proto__=C.Cl;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ARY.
__proto__=C.RJ;C.ARX.__proto__=C.I2;C.AC8.__proto__=C.Kn;C.ABF.__proto__=C.Gc;C.
ALU.__proto__=C.Fq;C.AL8.__proto__=C.Auy;C.NewAnimalSetTransponderScreen.__proto__=
C.Asq;C.C6.__proto__=C.AC;C.OY.__proto__=A.Core.P;C.RQ.__proto__=C.Fx;C.RR.__proto__=
C.Fx;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARv.__proto__=C.OverlayMenu;
C.VL.__proto__=C.T8;C.AvR.__proto__=C.Cn;C.AnimalSingleInfoScreen.__proto__=C.Tw;
C.AnimalMultiInfoScreen.__proto__=C.Tw;C.AMl.__proto__=C.OverlayMenu;C.I7.__proto__=
A.Core.P;C.ALT.__proto__=C.GZ;C.ALS.__proto__=C.I2;C.APm.__proto__=C.II;C.AsA.__proto__=
C.OY;C.Aq5.__proto__=C.OY;C.AuS.__proto__=C.AC;C.AMd.__proto__=C.AC;C.AGv.__proto__=
C.Eg;C.G3.__proto__=A.Core.P;C.AQQ.__proto__=C.HJ;C.AVf.__proto__=C.XV;C.ARI.__proto__=
C.Wo;C.ADF.__proto__=C.Le;C.HJ.__proto__=C.G3;C.Le.__proto__=C.G3;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvH.__proto__=C.HJ;C.AUm.__proto__=C.BU;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asq;C.ReasonOfLeaving.__proto__=C.AC;C.OR.__proto__=C.BU;C.AeP.__proto__=
C.Ek;C.ARB.__proto__=C.Ek;C.ARA.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q8.__proto__=
C.Eg;C.AQR.__proto__=C.Le;C.AvG.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fz.
__proto__=C.AB;C.AN6.__proto__=C.AB;C.AN9.__proto__=C.Fz;C.AN_.__proto__=C.Fz;C.
AqE.__proto__=C.Fz;C.Abp.__proto__=C.AjL;C.Kn.__proto__=C.AjL;C.Avl.__proto__=C.
Abp;C.AO3.__proto__=C.Abp;C.AO2.__proto__=C.Abp;C.AO1.__proto__=C.BQ;C.Aes.__proto__=
C.EA;C.AmG.__proto__=C.Ba;C.Ajl.__proto__=C.IE;C.ACy.__proto__=A.Core.P;C.AkL.__proto__=
A.Core.P;C.Q$.__proto__=C.AB;C.AUQ.__proto__=C.Q$;C.AO4.__proto__=C.BQ;C.Dc.__proto__=
C.EA;C.KN.__proto__=C.BQ;C.AOX.__proto__=C.KN;C.AOZ.__proto__=C.KN;C.Yi.__proto__=
C.AmG;C.Agt.__proto__=C.Hg;C.ANT.__proto__=C.GZ;C.ANS.__proto__=C.I2;C.AO0.__proto__=
C.Kn;C.Abk.__proto__=C.Aci;C.AjD.__proto__=C.QA;C.ABQ.__proto__=C.QA;C.APr.__proto__=
C.Dc;C.AM0.__proto__=C.Ba;C.RS.__proto__=C.Fx;C.AMe.__proto__=C.Fx;C.ANK.__proto__=
C.Ei;C.ANL.__proto__=C.Ei;C.AOY.__proto__=C.KN;C.Nb.__proto__=C.AbP;C.ANG.__proto__=
C.Ei;C.AOT.__proto__=C.KN;C.PM.__proto__=C.Cn;C.Sd.__proto__=C.AB;C.AN7.__proto__=
C.Sd;C.AN8.__proto__=C.Sd;C.AN$.__proto__=C.AqE;C.AN4.__proto__=C.Fz;C.AaT.__proto__=
C.IE;C.Pj.__proto__=C.IE;C.AMq.__proto__=C.Amo;C.ARi.__proto__=C.T4;C.ARh.__proto__=
C.T4;C.ART.__proto__=C.RJ;C.ARS.__proto__=C.I2;C.APg.__proto__=C.Kn;C.AkI.__proto__=
C.GZ;C.AT7.__proto__=C.I2;C.Aep.__proto__=C.Yn;C.ABV.__proto__=C.Ba;C.ADb.__proto__=
C.Dc;C.APi.__proto__=C.BQ;C.AaW.__proto__=C.NE;C.XO.__proto__=C.NE;C.RW.__proto__=
C.D9;C.XP.__proto__=C.RW;C.XM.__proto__=C.ID;C.AaR.__proto__=C.ID;C.XL.__proto__=
C.ID;C.AaQ.__proto__=C.ID;C.AMn.__proto__=C.AB;C.ID.__proto__=C.I1;C.I1.__proto__=
C.Hg;C.NE.__proto__=C.Fx;C.Axb.__proto__=C.Zv;C.ANu.__proto__=C.Amy;C.Axd.__proto__=
C.Zv;C.ATM.__proto__=C.Cd;C.ATK.__proto__=C.Ek;C.AQO.__proto__=C.Le;C.ATL.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARJ.__proto__=C.HY;C.AMp.__proto__=C.Amo;C.AMF.__proto__=
C.Vs;C.JI.__proto__=C.I1;C.APk.__proto__=C.Yo;C.Abj.__proto__=C.Cl;C.APv.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Mg;C.APj.__proto__=C.AqS;C.Je.__proto__=A.Core.
P;C.APf.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Q7;C.ANU.__proto__=C.AqB;
C.UK.__proto__=C.Cl;C.UL.__proto__=C.UK;C.AcF.__proto__=C.UK;C.AdQ.__proto__=C.AC;
C.AGu.__proto__=C.Eg;C.ANJ.__proto__=C.Ei;C.AOW.__proto__=C.KN;C.ANH.__proto__=C.
Ei;C.AOU.__proto__=C.KN;C.AqU.__proto__=C.TR;C.APq.__proto__=C.TR;C.Aqn.__proto__=
C.M1;C.AMZ.__proto__=C.M1;C.ARC.__proto__=C.AeP;C.Yn.__proto__=C.BQ;C.Acj.__proto__=
C.BU;C.FH.__proto__=C.AC;C.AMt.__proto__=C.FH;C.AMu.__proto__=C.FH;C.AMa.__proto__=
C.I2;C.TC.__proto__=C.BU;C.ARL.__proto__=C.AB;C.Asq.__proto__=C.SetTransponderScreen;
C.ADG.__proto__=C.HJ;C.Asr.__proto__=C.OR;C.Axo.__proto__=C.OR;C.Acm.__proto__=C.
Cl;C.AVE.__proto__=C.RJ;C.AVD.__proto__=C.I2;C.AQS.__proto__=A.Core.P;C.AQP.__proto__=
C.HJ;C.ACD.__proto__=C.Abk;C.LW.__proto__=A.Core.P;C.AT5.__proto__=C.Cd;C.AT4.__proto__=
C.Cd;C.AU8.__proto__=C.Cd;C.Afn.__proto__=C.Cl;C.Jb.__proto__=A.acn.Jb;C.AUW.__proto__=
C.AB;C.ATO.__proto__=C.AkI;C.ADd.__proto__=C.Dc;C.AMN.__proto__=C.AkI;C.AOQ.__proto__=
C.Aep;C.APh.__proto__=C.Aep;C.ABZ.__proto__=C.Ba;C.AUl.__proto__=C.SO;C.AUp.__proto__=
C.Q8;C.APe.__proto__=C.BQ;C.ARt.__proto__=C.Fq;C.ARs.__proto__=C.Fq;C.ARr.__proto__=
C.Fq;C.ALY.__proto__=C.Amn;C.ARx.__proto__=C.T8;C.AMM.__proto__=C.OverlayMenu;C.
AD0.__proto__=C.AC;C.AUV.__proto__=C.OU;C.AG_.__proto__=C.Cl;C.AUn.__proto__=C.BU;
C.Y1.__proto__=C.Cl;C.ANF.__proto__=C.Ei;C.AOS.__proto__=C.KN;C.ANI.__proto__=C.
Ei;C.AOV.__proto__=C.KN;C.RJ.__proto__=C.GZ;C.AvN.__proto__=C.Vs;C.ADf.__proto__=
C.Dc;C.ABY.__proto__=C.Ba;C.APl.__proto__=C.AjM;C.AU_.__proto__=C.Cd;C.AU9.__proto__=
C.Cl;};C._ReInit=function(){var B;if((B=C.Axs._this))B._ReInit(),C.Axs._ReInit.call(
B);if((B=C.Axt._this))B._ReInit(),C.Axt._ReInit.call(B);if((B=C.A$._this))B._ReInit(
),C.A$._ReInit.call(B);if((B=C.Pi._this))B._ReInit(),C.Pi._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afe._this
))B._ReInit(),C.Afe._ReInit.call(B);if((B=C.B4._this))B._ReInit(),C.B4._ReInit.call(
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
B=C.Afe._this)&&(B._cycle!=D))B._Done(C.Afe._this=null);if((B=C.B4._this)&&(B._cycle
!=D))B._Done(C.B4._this=null);if((B=C.Wz._this)&&(B._cycle!=D))B._Done(C.Wz._this=
null);if((B=C.Ass._this)&&(B._cycle!=D))B._Done(C.Ass._this=null);if((B=C.AnN._this
)&&(B._cycle!=D))B._Done(C.AnN._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuG._this)&&(B._cycle!=D))B._Done(C.AuG._this=null);if((
B=C.Amj._this)&&(B._cycle!=D))B._Done(C.Amj._this=null);if((B=C.AvX._this)&&(B._cycle
!=D))B._Done(C.AvX._this=null);if((B=C.AvY._this)&&(B._cycle!=D))B._Done(C.AvY._this=
null);if((B=C.AxU._this)&&(B._cycle!=D))B._Done(C.AxU._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */